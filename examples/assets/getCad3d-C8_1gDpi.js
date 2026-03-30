const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./cyclicPushoverCpp-DZAQImEK.js","./plateQ4Cpp-CArWqXeL.js"])))=>i.map(i=>d[i]);
import { _ as Ys, p as fn, m as Vs, d as ut, s as Gs, __tla as __tla_0 } from "./plateQ4Cpp-CArWqXeL.js";
import { v as fo, P as qo, g as Xs, a as Ks, o as Us } from "./theme-CzzIlc4y.js";
import { V as ue, P as Wt, R as cs, b as ds, B as Kt, c as Zs, d as ps, e as $o, f as Qs, S as ea, M as ta, g as oa, F as Ut, a as wo, L as un, h as na, G as sa, A as To, i as fs, T as us, j as mn, k as bn, C as aa, l as la } from "./Text-Cin90tvN.js";
import { g as Ho, b as No, a as po } from "./analyze-B0bulnNq.js";
import { g as Ft, __tla as __tla_1 } from "./getMesh-Ch3239Ot.js";
import { n as eo, s as Pt, m as gt, t as yn } from "./pureFunctionsAny.generated-BHh0zpCc.js";
let xs, da, Ta;
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
  function ra(e, h) {
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
    const O = vn.find((de) => de.id === e), T = uo.find((de) => de.id === h), J = O.toKN, ye = T.toM, se = (de, be, E) => E / (Math.pow(J, de) * Math.pow(ye, be));
    let X, B;
    switch (e) {
      case "kN":
        X = 10, B = [
          -100,
          100,
          1
        ];
        break;
      case "tonf":
        X = 1, B = [
          -20,
          20,
          0.5
        ];
        break;
      case "kgf":
        X = 1e3, B = [
          -1e4,
          1e4,
          100
        ];
        break;
      case "kip":
        X = 10, B = [
          -200,
          200,
          5
        ];
        break;
      case "lb":
        X = 5e3, B = [
          -5e4,
          5e4,
          500
        ];
        break;
      case "N":
        X = 1e4, B = [
          -1e5,
          1e5,
          1e3
        ];
        break;
    }
    return {
      id: `${e}-${h}`,
      label: `${O.label}, ${T.label}`,
      force: O.label,
      length: T.label,
      stress: ra(e, h),
      moment: `${O.label}\xB7${T.label}`,
      E: se(1, -2, Zt.E),
      G: se(1, -2, Zt.G),
      A: se(0, 2, Zt.A),
      Iz: se(0, 4, Zt.Iz),
      Iy: se(0, 4, Zt.Iy),
      J: se(0, 4, Zt.J),
      rho: se(1, -4, Zt.rho),
      spanRange: T.spanRange,
      heightRange: T.heightRange,
      defaultSpan: T.defaultSpan,
      defaultHeight: T.defaultHeight,
      defaultForce: X,
      forceRange: B,
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
  function ia(e) {
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
  function ca(e) {
    const h = e.force, [O, T, J] = e.forceRange;
    return {
      truss: [
        {
          key: "CM",
          val: -e.defaultForce,
          min: O,
          max: 0,
          step: J,
          label: `CM (${h})`
        },
        {
          key: "CV",
          val: 0,
          min: O,
          max: 0,
          step: J,
          label: `CV (${h})`
        }
      ],
      beams: [
        {
          key: "CM",
          val: 0,
          min: O,
          max: 0,
          step: J,
          label: `CM (${h})`
        },
        {
          key: "CV",
          val: 0,
          min: O,
          max: 0,
          step: J,
          label: `CV (${h})`
        },
        {
          key: "Ex",
          val: e.defaultForce,
          min: O,
          max: T,
          step: J,
          label: `Ex sismo (${h})`
        }
      ],
      "3d": [
        {
          key: "CM",
          val: 0,
          min: O,
          max: 0,
          step: J,
          label: `CM (${h})`
        },
        {
          key: "CV",
          val: 0,
          min: O,
          max: 0,
          step: J,
          label: `CV (${h})`
        },
        {
          key: "Ex",
          val: e.defaultForce * 3,
          min: O,
          max: T,
          step: J,
          label: `Ex sismo (${h})`
        }
      ],
      frame: [
        {
          key: "CM",
          val: -e.defaultForce,
          min: O,
          max: 0,
          step: J,
          label: `CM (${h})`
        },
        {
          key: "CV",
          val: 0,
          min: O,
          max: 0,
          step: J,
          label: `CV (${h})`
        },
        {
          key: "Ex",
          val: 0,
          min: O,
          max: T,
          step: J,
          label: `Ex sismo (${h})`
        }
      ],
      edificio: [
        {
          key: "CM",
          val: -e.defaultForce,
          min: O,
          max: 0,
          step: J,
          label: `CM (${h})`
        },
        {
          key: "CV",
          val: 0,
          min: O,
          max: 0,
          step: J,
          label: `CV (${h})`
        },
        {
          key: "Ex",
          val: 0,
          min: O,
          max: T,
          step: J,
          label: `Ex sismo (${h})`
        },
        {
          key: "Ey",
          val: 0,
          min: O,
          max: T,
          step: J,
          label: `Ey sismo (${h})`
        }
      ],
      galpon: [
        {
          key: "CM",
          val: -e.defaultForce,
          min: O,
          max: 0,
          step: J,
          label: `CM (${h})`
        },
        {
          key: "CV",
          val: 0,
          min: O,
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
          min: O,
          max: 0,
          step: J,
          label: `CM (${h})`
        }
      ],
      "placa-q4": [
        {
          key: "CM",
          val: 0,
          min: O,
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
  da = function() {
    const e = document.createElement("div");
    e.id = "modal-results", e.style.cssText = `
    position: fixed; bottom: 10px; left: 10px; z-index: 9999;
    background: rgba(0,0,0,0.92); color: #0f0; font-family: monospace;
    font-size: 12px; border-radius: 6px;
    max-width: 720px; overflow-x: auto; pointer-events: auto;
    border: 1px solid #0f03;
  `;
    let h = false;
    function O(T, J) {
      var _a, _b;
      if (!T.frequencies || T.frequencies.length === 0) {
        e.innerHTML = "<b style='padding:12px;display:block'>Modal: no results</b>";
        return;
      }
      const ye = [
        "Ux",
        "Uy",
        "Uz",
        "Rx",
        "Ry",
        "Rz"
      ], se = [
        0,
        0,
        0,
        0,
        0,
        0
      ];
      let X = `<div id="modal-header" style="display:flex; align-items:center; justify-content:space-between; padding:8px 12px; cursor:default;">
  <b style="color:#ff0">\u26A1 MODAL ANALYSIS \u2014 ${J.title}</b>
  <div style="display:flex; gap:4px; margin-left:12px;">
    <button id="modal-copy" style="padding:2px 8px; font-size:10px; cursor:pointer;
      background:#2d6a4f; color:#fff; border:1px solid #40916c; border-radius:3px;" title="Copiar tabla">\u{1F4CB}</button>
    <button id="modal-minimize" style="padding:2px 8px; font-size:10px; cursor:pointer;
      background:#555; color:#fff; border:1px solid #777; border-radius:3px;" title="Minimizar">\u25AC</button>
  </div>
</div>`;
      if (X += '<div id="modal-body" style="padding:0 12px 10px 12px;">', J.properties) for (const B of J.properties) X += `<span style="color:#888">${B}</span>
`;
      X += `<table style="border-collapse:collapse; color:#0f0; font-size:11px; margin-top:4px">
<tr style="color:#ff0; border-bottom:1px solid #ff03">
  <th style="padding:2px 6px">Mode</th>
  <th style="padding:2px 6px">Freq (Hz)</th>
  <th style="padding:2px 6px">Period (s)</th>
  <th style="padding:2px 6px">\u03C9 (rad/s)</th>`;
      for (const B of ye) X += `<th style="padding:2px 5px">${B}</th>`;
      if (X += `<th style="padding:2px 5px; color:#0ff">\u03A3Ux</th>
  <th style="padding:2px 5px; color:#0ff">\u03A3Uy</th>
  <th style="padding:2px 5px; color:#0ff">\u03A3Rz</th></tr>`, T.frequencies.forEach((B, de) => {
        var _a2;
        const be = B > 0 ? 1 / B : 0, E = B * 2 * Math.PI, Z = ((_a2 = T.massParticipation) == null ? void 0 : _a2[de]) || [
          0,
          0,
          0,
          0,
          0,
          0
        ];
        for (let me = 0; me < 6; me++) se[me] += Z[me];
        X += `<tr style="border-bottom:1px solid #fff1">
  <td style="padding:2px 6px; text-align:center">${de + 1}</td>
  <td style="padding:2px 6px; text-align:right">${B.toFixed(4)}</td>
  <td style="padding:2px 6px; text-align:right">${be.toFixed(4)}</td>
  <td style="padding:2px 6px; text-align:right">${E.toFixed(2)}</td>`;
        for (let me = 0; me < 6; me++) {
          const _e = (Z[me] * 100).toFixed(1), ee = Z[me] > 0.5 ? "#f00" : Z[me] > 0.1 ? "#ff0" : "#0f0";
          X += `<td style="padding:2px 5px; text-align:right; color:${ee}">${_e}%</td>`;
        }
        X += `<td style="padding:2px 5px; text-align:right; color:#0ff">${(se[0] * 100).toFixed(1)}%</td>
  <td style="padding:2px 5px; text-align:right; color:#0ff">${(se[1] * 100).toFixed(1)}%</td>
  <td style="padding:2px 5px; text-align:right; color:#0ff">${(se[5] * 100).toFixed(1)}%</td></tr>`;
      }), X += "</table></div>", e.innerHTML = X, h) {
        const B = e.querySelector("#modal-body"), de = e.querySelector("#modal-minimize");
        B && (B.style.display = "none"), de && (de.textContent = "\u25A2", de.title = "Restaurar");
      }
      (_a = e.querySelector("#modal-minimize")) == null ? void 0 : _a.addEventListener("click", () => {
        h = !h;
        const B = e.querySelector("#modal-body"), de = e.querySelector("#modal-minimize");
        h ? (B.style.display = "none", de.textContent = "\u25A2", de.title = "Restaurar") : (B.style.display = "block", de.textContent = "\u25AC", de.title = "Minimizar");
      }), (_b = e.querySelector("#modal-copy")) == null ? void 0 : _b.addEventListener("click", () => {
        const B = [];
        B.push(`Modal Analysis \u2014 ${J.title}`);
        const de = `Mode  Freq(Hz)  Period(s)  \u03C9(rad/s)  ${ye.join("     ")}  \u03A3Ux    \u03A3Uy    \u03A3Rz`;
        B.push(de), B.push("-".repeat(de.length));
        const be = [
          0,
          0,
          0,
          0,
          0,
          0
        ];
        T.frequencies.forEach((Z, me) => {
          var _a2;
          const _e = Z > 0 ? 1 / Z : 0, ee = Z * 2 * Math.PI, oe = ((_a2 = T.massParticipation) == null ? void 0 : _a2[me]) || [
            0,
            0,
            0,
            0,
            0,
            0
          ];
          for (let ke = 0; ke < 6; ke++) be[ke] += oe[ke];
          const xe = oe.map((ke) => ((ke * 100).toFixed(1) + "%").padStart(6)).join(" ");
          B.push(`${String(me + 1).padStart(4)}  ${Z.toFixed(4).padStart(9)}  ${_e.toFixed(4).padStart(9)}  ${ee.toFixed(2).padStart(9)}  ${xe}  ${(be[0] * 100).toFixed(1).padStart(5)}%  ${(be[1] * 100).toFixed(1).padStart(5)}%  ${(be[5] * 100).toFixed(1).padStart(5)}%`);
        }), navigator.clipboard.writeText(B.join(`
`));
        const E = e.querySelector("#modal-copy");
        E.textContent = "\u2713", setTimeout(() => E.textContent = "\u{1F4CB}", 1500);
      });
    }
    return {
      div: e,
      render: O
    };
  };
  const ne = 64516e-8, k = 416231e-12, A = 0.0254, Jt = [
    {
      name: "W6x9",
      type: "W",
      A: 2.68 * ne,
      Iz: 16.4 * k,
      Iy: 2.2 * k,
      J: 0.0405 * k,
      d: 5.9 * A,
      bf: 3.94 * A
    },
    {
      name: "W6x15",
      type: "W",
      A: 4.43 * ne,
      Iz: 29.1 * k,
      Iy: 9.32 * k,
      J: 0.103 * k,
      d: 5.99 * A,
      bf: 5.99 * A
    },
    {
      name: "W6x20",
      type: "W",
      A: 5.87 * ne,
      Iz: 41.4 * k,
      Iy: 13.3 * k,
      J: 0.204 * k,
      d: 6.2 * A,
      bf: 6.02 * A
    },
    {
      name: "W8x10",
      type: "W",
      A: 2.96 * ne,
      Iz: 30.8 * k,
      Iy: 2.09 * k,
      J: 0.0426 * k,
      d: 7.89 * A,
      bf: 3.94 * A
    },
    {
      name: "W8x18",
      type: "W",
      A: 5.26 * ne,
      Iz: 61.9 * k,
      Iy: 7.97 * k,
      J: 0.172 * k,
      d: 8.14 * A,
      bf: 5.25 * A
    },
    {
      name: "W8x24",
      type: "W",
      A: 7.08 * ne,
      Iz: 82.7 * k,
      Iy: 18.3 * k,
      J: 0.346 * k,
      d: 7.93 * A,
      bf: 6.5 * A
    },
    {
      name: "W8x31",
      type: "W",
      A: 9.13 * ne,
      Iz: 110 * k,
      Iy: 37.1 * k,
      J: 0.536 * k,
      d: 8 * A,
      bf: 7.995 * A
    },
    {
      name: "W8x40",
      type: "W",
      A: 11.7 * ne,
      Iz: 146 * k,
      Iy: 49.1 * k,
      J: 0.871 * k,
      d: 8.25 * A,
      bf: 8.07 * A
    },
    {
      name: "W8x48",
      type: "W",
      A: 14.1 * ne,
      Iz: 184 * k,
      Iy: 60.9 * k,
      J: 1.45 * k,
      d: 8.5 * A,
      bf: 8.11 * A
    },
    {
      name: "W8x67",
      type: "W",
      A: 19.7 * ne,
      Iz: 272 * k,
      Iy: 88.6 * k,
      J: 3.54 * k,
      d: 9 * A,
      bf: 8.28 * A
    },
    {
      name: "W10x12",
      type: "W",
      A: 3.54 * ne,
      Iz: 53.8 * k,
      Iy: 2.18 * k,
      J: 0.0547 * k,
      d: 9.87 * A,
      bf: 3.96 * A
    },
    {
      name: "W10x22",
      type: "W",
      A: 6.49 * ne,
      Iz: 118 * k,
      Iy: 11.4 * k,
      J: 0.239 * k,
      d: 10.17 * A,
      bf: 5.75 * A
    },
    {
      name: "W10x33",
      type: "W",
      A: 9.71 * ne,
      Iz: 171 * k,
      Iy: 36.6 * k,
      J: 0.583 * k,
      d: 9.73 * A,
      bf: 7.96 * A
    },
    {
      name: "W10x49",
      type: "W",
      A: 14.4 * ne,
      Iz: 272 * k,
      Iy: 93.4 * k,
      J: 1.39 * k,
      d: 9.98 * A,
      bf: 10 * A
    },
    {
      name: "W10x68",
      type: "W",
      A: 20 * ne,
      Iz: 394 * k,
      Iy: 134 * k,
      J: 3.56 * k,
      d: 10.4 * A,
      bf: 10.13 * A
    },
    {
      name: "W10x100",
      type: "W",
      A: 29.4 * ne,
      Iz: 623 * k,
      Iy: 207 * k,
      J: 10.9 * k,
      d: 11.1 * A,
      bf: 10.34 * A
    },
    {
      name: "W12x14",
      type: "W",
      A: 4.16 * ne,
      Iz: 88.6 * k,
      Iy: 2.36 * k,
      J: 0.0704 * k,
      d: 11.91 * A,
      bf: 3.97 * A
    },
    {
      name: "W12x22",
      type: "W",
      A: 6.48 * ne,
      Iz: 156 * k,
      Iy: 4.66 * k,
      J: 0.293 * k,
      d: 12.31 * A,
      bf: 4.03 * A
    },
    {
      name: "W12x26",
      type: "W",
      A: 7.65 * ne,
      Iz: 204 * k,
      Iy: 17.3 * k,
      J: 0.3 * k,
      d: 12.22 * A,
      bf: 6.49 * A
    },
    {
      name: "W12x40",
      type: "W",
      A: 11.7 * ne,
      Iz: 310 * k,
      Iy: 44.1 * k,
      J: 0.906 * k,
      d: 11.94 * A,
      bf: 8.01 * A
    },
    {
      name: "W12x53",
      type: "W",
      A: 15.6 * ne,
      Iz: 425 * k,
      Iy: 95.8 * k,
      J: 1.58 * k,
      d: 12.06 * A,
      bf: 9.99 * A
    },
    {
      name: "W12x72",
      type: "W",
      A: 21.1 * ne,
      Iz: 597 * k,
      Iy: 195 * k,
      J: 4.05 * k,
      d: 12.25 * A,
      bf: 12.04 * A
    },
    {
      name: "W12x96",
      type: "W",
      A: 28.2 * ne,
      Iz: 833 * k,
      Iy: 270 * k,
      J: 8.44 * k,
      d: 12.71 * A,
      bf: 12.16 * A
    },
    {
      name: "W12x120",
      type: "W",
      A: 35.3 * ne,
      Iz: 1070 * k,
      Iy: 345 * k,
      J: 16 * k,
      d: 13.12 * A,
      bf: 12.32 * A
    },
    {
      name: "W14x22",
      type: "W",
      A: 6.49 * ne,
      Iz: 199 * k,
      Iy: 7 * k,
      J: 0.208 * k,
      d: 13.74 * A,
      bf: 5 * A
    },
    {
      name: "W14x30",
      type: "W",
      A: 8.85 * ne,
      Iz: 291 * k,
      Iy: 19.6 * k,
      J: 0.38 * k,
      d: 13.84 * A,
      bf: 6.73 * A
    },
    {
      name: "W14x38",
      type: "W",
      A: 11.2 * ne,
      Iz: 385 * k,
      Iy: 26.7 * k,
      J: 0.798 * k,
      d: 14.1 * A,
      bf: 6.77 * A
    },
    {
      name: "W14x48",
      type: "W",
      A: 14.1 * ne,
      Iz: 485 * k,
      Iy: 51.4 * k,
      J: 1.45 * k,
      d: 13.79 * A,
      bf: 8.03 * A
    },
    {
      name: "W14x61",
      type: "W",
      A: 17.9 * ne,
      Iz: 640 * k,
      Iy: 107 * k,
      J: 2.19 * k,
      d: 13.89 * A,
      bf: 9.99 * A
    },
    {
      name: "W14x82",
      type: "W",
      A: 24 * ne,
      Iz: 882 * k,
      Iy: 148 * k,
      J: 5.07 * k,
      d: 14.31 * A,
      bf: 10.13 * A
    },
    {
      name: "W14x109",
      type: "W",
      A: 32 * ne,
      Iz: 1240 * k,
      Iy: 447 * k,
      J: 7.12 * k,
      d: 14.32 * A,
      bf: 14.61 * A
    },
    {
      name: "W14x132",
      type: "W",
      A: 38.8 * ne,
      Iz: 1530 * k,
      Iy: 548 * k,
      J: 12.3 * k,
      d: 14.66 * A,
      bf: 14.73 * A
    },
    {
      name: "W14x176",
      type: "W",
      A: 51.8 * ne,
      Iz: 2140 * k,
      Iy: 838 * k,
      J: 23.7 * k,
      d: 15.22 * A,
      bf: 15.65 * A
    },
    {
      name: "W16x26",
      type: "W",
      A: 7.68 * ne,
      Iz: 301 * k,
      Iy: 9.59 * k,
      J: 0.262 * k,
      d: 15.69 * A,
      bf: 5.5 * A
    },
    {
      name: "W16x36",
      type: "W",
      A: 10.6 * ne,
      Iz: 448 * k,
      Iy: 24.5 * k,
      J: 0.545 * k,
      d: 15.86 * A,
      bf: 6.99 * A
    },
    {
      name: "W16x50",
      type: "W",
      A: 14.7 * ne,
      Iz: 659 * k,
      Iy: 37.2 * k,
      J: 1.52 * k,
      d: 16.26 * A,
      bf: 7.07 * A
    },
    {
      name: "W16x67",
      type: "W",
      A: 19.7 * ne,
      Iz: 954 * k,
      Iy: 119 * k,
      J: 2.39 * k,
      d: 16.33 * A,
      bf: 10.24 * A
    },
    {
      name: "W16x89",
      type: "W",
      A: 26.2 * ne,
      Iz: 1300 * k,
      Iy: 163 * k,
      J: 5.45 * k,
      d: 16.75 * A,
      bf: 10.37 * A
    },
    {
      name: "W18x35",
      type: "W",
      A: 10.3 * ne,
      Iz: 510 * k,
      Iy: 15.3 * k,
      J: 0.506 * k,
      d: 17.7 * A,
      bf: 6 * A
    },
    {
      name: "W18x50",
      type: "W",
      A: 14.7 * ne,
      Iz: 800 * k,
      Iy: 40.1 * k,
      J: 1.24 * k,
      d: 17.99 * A,
      bf: 7.5 * A
    },
    {
      name: "W18x71",
      type: "W",
      A: 20.8 * ne,
      Iz: 1170 * k,
      Iy: 60.3 * k,
      J: 3.49 * k,
      d: 18.47 * A,
      bf: 7.64 * A
    },
    {
      name: "W18x97",
      type: "W",
      A: 28.5 * ne,
      Iz: 1750 * k,
      Iy: 201 * k,
      J: 5.86 * k,
      d: 18.59 * A,
      bf: 11.15 * A
    },
    {
      name: "W21x44",
      type: "W",
      A: 13 * ne,
      Iz: 843 * k,
      Iy: 20.7 * k,
      J: 0.77 * k,
      d: 20.66 * A,
      bf: 6.5 * A
    },
    {
      name: "W21x62",
      type: "W",
      A: 18.3 * ne,
      Iz: 1330 * k,
      Iy: 57.5 * k,
      J: 1.83 * k,
      d: 20.99 * A,
      bf: 8.24 * A
    },
    {
      name: "W21x83",
      type: "W",
      A: 24.3 * ne,
      Iz: 1830 * k,
      Iy: 81.4 * k,
      J: 4.34 * k,
      d: 21.43 * A,
      bf: 8.36 * A
    },
    {
      name: "W21x111",
      type: "W",
      A: 32.7 * ne,
      Iz: 2670 * k,
      Iy: 274 * k,
      J: 6.83 * k,
      d: 21.51 * A,
      bf: 12.34 * A
    },
    {
      name: "W24x55",
      type: "W",
      A: 16.2 * ne,
      Iz: 1350 * k,
      Iy: 29.1 * k,
      J: 1.18 * k,
      d: 23.57 * A,
      bf: 7.01 * A
    },
    {
      name: "W24x76",
      type: "W",
      A: 22.4 * ne,
      Iz: 2100 * k,
      Iy: 82.5 * k,
      J: 2.68 * k,
      d: 23.92 * A,
      bf: 8.99 * A
    },
    {
      name: "W24x104",
      type: "W",
      A: 30.6 * ne,
      Iz: 3100 * k,
      Iy: 259 * k,
      J: 4.72 * k,
      d: 24.06 * A,
      bf: 12.75 * A
    },
    {
      name: "W24x131",
      type: "W",
      A: 38.5 * ne,
      Iz: 4020 * k,
      Iy: 340 * k,
      J: 9.5 * k,
      d: 24.48 * A,
      bf: 12.86 * A
    },
    {
      name: "W24x146",
      type: "W",
      A: 43 * ne,
      Iz: 4580 * k,
      Iy: 391 * k,
      J: 12.6 * k,
      d: 24.74 * A,
      bf: 12.9 * A
    },
    {
      name: "W24x176",
      type: "W",
      A: 51.7 * ne,
      Iz: 5680 * k,
      Iy: 479 * k,
      J: 21.2 * k,
      d: 25.24 * A,
      bf: 12.9 * A
    },
    {
      name: "W27x84",
      type: "W",
      A: 24.8 * ne,
      Iz: 2850 * k,
      Iy: 106 * k,
      J: 2.81 * k,
      d: 26.71 * A,
      bf: 9.96 * A
    },
    {
      name: "W27x114",
      type: "W",
      A: 33.5 * ne,
      Iz: 4090 * k,
      Iy: 159 * k,
      J: 6.77 * k,
      d: 27.29 * A,
      bf: 10.07 * A
    },
    {
      name: "W30x90",
      type: "W",
      A: 26.4 * ne,
      Iz: 3610 * k,
      Iy: 115 * k,
      J: 3.06 * k,
      d: 29.53 * A,
      bf: 10.4 * A
    },
    {
      name: "W30x116",
      type: "W",
      A: 34.2 * ne,
      Iz: 4930 * k,
      Iy: 164 * k,
      J: 6.43 * k,
      d: 30.01 * A,
      bf: 10.5 * A
    },
    {
      name: "W33x118",
      type: "W",
      A: 34.7 * ne,
      Iz: 5900 * k,
      Iy: 187 * k,
      J: 5.3 * k,
      d: 32.86 * A,
      bf: 11.48 * A
    },
    {
      name: "W36x135",
      type: "W",
      A: 39.7 * ne,
      Iz: 7800 * k,
      Iy: 225 * k,
      J: 7 * k,
      d: 35.55 * A,
      bf: 11.95 * A
    },
    {
      name: "HSS4x4x1/4",
      type: "HSS",
      A: 3.37 * ne,
      Iz: 8.22 * k,
      Iy: 8.22 * k,
      J: 13.4 * k,
      d: 4 * A,
      bf: 4 * A
    },
    {
      name: "HSS4x4x3/8",
      type: "HSS",
      A: 4.78 * ne,
      Iz: 10.7 * k,
      Iy: 10.7 * k,
      J: 17.9 * k,
      d: 4 * A,
      bf: 4 * A
    },
    {
      name: "HSS4x4x1/2",
      type: "HSS",
      A: 6.02 * ne,
      Iz: 12.3 * k,
      Iy: 12.3 * k,
      J: 21 * k,
      d: 4 * A,
      bf: 4 * A
    },
    {
      name: "HSS6x6x1/4",
      type: "HSS",
      A: 5.24 * ne,
      Iz: 30.3 * k,
      Iy: 30.3 * k,
      J: 48.3 * k,
      d: 6 * A,
      bf: 6 * A
    },
    {
      name: "HSS6x6x3/8",
      type: "HSS",
      A: 7.58 * ne,
      Iz: 41.1 * k,
      Iy: 41.1 * k,
      J: 66.9 * k,
      d: 6 * A,
      bf: 6 * A
    },
    {
      name: "HSS6x6x1/2",
      type: "HSS",
      A: 9.74 * ne,
      Iz: 49.6 * k,
      Iy: 49.6 * k,
      J: 82.2 * k,
      d: 6 * A,
      bf: 6 * A
    },
    {
      name: "HSS8x8x1/4",
      type: "HSS",
      A: 7.1 * ne,
      Iz: 70.7 * k,
      Iy: 70.7 * k,
      J: 112 * k,
      d: 8 * A,
      bf: 8 * A
    },
    {
      name: "HSS8x8x3/8",
      type: "HSS",
      A: 10.4 * ne,
      Iz: 98 * k,
      Iy: 98 * k,
      J: 158 * k,
      d: 8 * A,
      bf: 8 * A
    },
    {
      name: "HSS8x8x1/2",
      type: "HSS",
      A: 13.5 * ne,
      Iz: 122 * k,
      Iy: 122 * k,
      J: 199 * k,
      d: 8 * A,
      bf: 8 * A
    },
    {
      name: "HSS10x10x3/8",
      type: "HSS",
      A: 13.2 * ne,
      Iz: 202 * k,
      Iy: 202 * k,
      J: 323 * k,
      d: 10 * A,
      bf: 10 * A
    },
    {
      name: "HSS10x10x1/2",
      type: "HSS",
      A: 17.2 * ne,
      Iz: 254 * k,
      Iy: 254 * k,
      J: 412 * k,
      d: 10 * A,
      bf: 10 * A
    },
    {
      name: "HSS12x12x3/8",
      type: "HSS",
      A: 16 * ne,
      Iz: 355 * k,
      Iy: 355 * k,
      J: 564 * k,
      d: 12 * A,
      bf: 12 * A
    },
    {
      name: "HSS12x12x1/2",
      type: "HSS",
      A: 21 * ne,
      Iz: 452 * k,
      Iy: 452 * k,
      J: 724 * k,
      d: 12 * A,
      bf: 12 * A
    },
    {
      name: "HSS6x4x1/4",
      type: "HSS",
      A: 4.3 * ne,
      Iz: 18 * k,
      Iy: 9.58 * k,
      J: 22.6 * k,
      d: 6 * A,
      bf: 4 * A
    },
    {
      name: "HSS6x4x3/8",
      type: "HSS",
      A: 6.18 * ne,
      Iz: 23.8 * k,
      Iy: 12.3 * k,
      J: 30.3 * k,
      d: 6 * A,
      bf: 4 * A
    },
    {
      name: "HSS8x4x1/4",
      type: "HSS",
      A: 5.24 * ne,
      Iz: 33.6 * k,
      Iy: 11.8 * k,
      J: 33 * k,
      d: 8 * A,
      bf: 4 * A
    },
    {
      name: "HSS8x4x3/8",
      type: "HSS",
      A: 7.58 * ne,
      Iz: 45.1 * k,
      Iy: 15 * k,
      J: 44.5 * k,
      d: 8 * A,
      bf: 4 * A
    },
    {
      name: "HSS8x6x1/4",
      type: "HSS",
      A: 6.17 * ne,
      Iz: 46.1 * k,
      Iy: 28.2 * k,
      J: 61.3 * k,
      d: 8 * A,
      bf: 6 * A
    },
    {
      name: "HSS8x6x3/8",
      type: "HSS",
      A: 8.97 * ne,
      Iz: 63 * k,
      Iy: 37.5 * k,
      J: 84.6 * k,
      d: 8 * A,
      bf: 6 * A
    },
    {
      name: "HSS10x6x3/8",
      type: "HSS",
      A: 10.4 * ne,
      Iz: 103 * k,
      Iy: 47.1 * k,
      J: 115 * k,
      d: 10 * A,
      bf: 6 * A
    },
    {
      name: "HSS12x8x3/8",
      type: "HSS",
      A: 13.2 * ne,
      Iz: 196 * k,
      Iy: 102 * k,
      J: 249 * k,
      d: 12 * A,
      bf: 8 * A
    }
  ];
  function Po() {
    const e = {};
    return Jt.forEach((h, O) => {
      h.type === "W" && (e[h.name] = O);
    }), e;
  }
  function Co() {
    const e = {};
    return Jt.forEach((h, O) => {
      h.type === "HSS" && (e[h.name] = O);
    }), e;
  }
  function pa(e) {
    var _a, _b, _c, _d, _e2, _f, _g, _h;
    const { nodes: h, elements: O, elementInputs: T, nodeInputs: J, deformOutputs: ye } = e, se = h.length * 6, X = O.length, B = O.filter((ee) => ee.length === 2).length, de = O.filter((ee) => ee.length >= 3).length, be = document.createElement("div");
    be.className = "rpt-overlay";
    let E = "";
    E += '<button class="rpt-close" id="rpt-close">\u2715 Close</button>', E += "<h1>Finite Element Analysis \u2014 Step-by-Step Report</h1>", E += '<div class="rpt-subtitle">Complete FEM derivation from element formulation to final results</div>', E += '<hr class="rpt-sep"/>', E += "<h2>1. Input Data</h2>", E += '<table class="rpt-info"><tbody>', E += `<tr><td>Number of nodes</td><td class="val">${h.length}</td></tr>`, E += `<tr><td>Number of elements</td><td class="val">${X} (${B} frames, ${de} shells)</td></tr>`, E += '<tr><td>DOFs per node</td><td class="val">6 (u<sub>x</sub>, u<sub>y</sub>, u<sub>z</sub>, \u03B8<sub>x</sub>, \u03B8<sub>y</sub>, \u03B8<sub>z</sub>)</td></tr>', E += `<tr><td>Total DOFs</td><td class="val">${se}</td></tr>`, E += "</tbody></table>", E += "<h3>1.1 Node Coordinates</h3>", E += '<table class="rpt-data"><thead><tr><th>Node</th><th>x</th><th>y</th><th>z</th></tr></thead><tbody>', h.forEach((ee, oe) => {
      E += `<tr><td>${oe}</td><td>${Ee(ee[0])}</td><td>${Ee(ee[1])}</td><td>${Ee(ee[2])}</td></tr>`;
    }), E += "</tbody></table>", E += "<h3>1.2 Element Connectivity</h3>", E += '<table class="rpt-data"><thead><tr><th>Elem</th><th>Type</th><th>Nodes</th><th>L</th><th>E</th><th>A</th><th>I<sub>z</sub></th><th>I<sub>y</sub></th></tr></thead><tbody>', O.forEach((ee, oe) => {
      var _a2, _b2, _c2, _d2;
      const xe = ee.length === 2, ke = ee.map((Ye) => h[Ye]), Fe = xe ? eo(Pt(ke[1], ke[0])) : 0, Pe = ((_a2 = T.elasticities) == null ? void 0 : _a2.get(oe)) ?? 0, Ke = ((_b2 = T.areas) == null ? void 0 : _b2.get(oe)) ?? 0, Ae = ((_c2 = T.momentsOfInertiaZ) == null ? void 0 : _c2.get(oe)) ?? 0, ct = ((_d2 = T.momentsOfInertiaY) == null ? void 0 : _d2.get(oe)) ?? 0;
      E += `<tr><td>${oe}</td><td>${xe ? "Frame" : "Shell"}</td><td>${ee.join(" \u2192 ")}</td>`, E += `<td>${Ee(Fe)}</td><td>${Ee(Pe)}</td><td>${Ee(Ke)}</td><td>${Ee(Ae)}</td><td>${Ee(ct)}</td></tr>`;
    }), E += "</tbody></table>", E += "<h2>2. Element Formulation</h2>", B > 0 && (E += "<h3>2.1 Frame Element (Euler-Bernoulli Beam)</h3>", E += "<p>Each frame element has 2 nodes and 12 DOFs: [u<sub>x</sub>, u<sub>y</sub>, u<sub>z</sub>, \u03B8<sub>x</sub>, \u03B8<sub>y</sub>, \u03B8<sub>z</sub>] per node.</p>", E += "<h4>2.1.1 Shape Functions</h4>", E += "<p><b>Axial</b> (linear interpolation):</p>", E += '<div class="rpt-eq">N\u2081(\u03BE) = 1 \u2212 \u03BE &nbsp;&nbsp;&nbsp; N\u2082(\u03BE) = \u03BE &nbsp;&nbsp;&nbsp; where \u03BE = x/L \u2208 [0, 1]</div>', E += "<p><b>Bending</b> (Hermite cubic polynomials):</p>", E += '<table class="rpt-eq-table"><tbody>', E += '<tr><td class="eq-name">H\u2081(\u03BE)</td><td>= 1 \u2212 3\u03BE\xB2 + 2\u03BE\xB3</td><td class="eq-desc">displacement at node i</td></tr>', E += '<tr><td class="eq-name">H\u2082(\u03BE)</td><td>= L\u03BE(1 \u2212 \u03BE)\xB2</td><td class="eq-desc">rotation at node i</td></tr>', E += '<tr><td class="eq-name">H\u2083(\u03BE)</td><td>= 3\u03BE\xB2 \u2212 2\u03BE\xB3</td><td class="eq-desc">displacement at node j</td></tr>', E += '<tr><td class="eq-name">H\u2084(\u03BE)</td><td>= L\u03BE\xB2(\u03BE \u2212 1)</td><td class="eq-desc">rotation at node j</td></tr>', E += "</tbody></table>", E += ua(), E += "<p><b>Torsion</b> (linear): same as axial.</p>", E += "<h4>2.1.2 Strain-Displacement Matrix B</h4>", E += "<p>The B matrix relates nodal displacements to internal strains:</p>", E += '<div class="rpt-eq">\u03B5<sub>axial</sub> = du/dx = (1/L)\xB7[\u22121, 1]\xB7{u<sub>i</sub>, u<sub>j</sub>}</div>', E += '<div class="rpt-eq">\u03BA<sub>bending</sub> = d\xB2v/dx\xB2 = B<sub>b</sub>\xB7{v<sub>i</sub>, \u03B8<sub>i</sub>, v<sub>j</sub>, \u03B8<sub>j</sub>}</div>', E += '<div class="rpt-eq">B<sub>b</sub>(\u03BE) = (1/L\xB2)\xB7[\u22126+12\u03BE, L(\u22124+6\u03BE), 6\u221212\u03BE, L(\u22122+6\u03BE)]</div>', E += '<div class="rpt-eq">\u03C6\u2032<sub>torsion</sub> = d\u03B8<sub>x</sub>/dx = (1/L)\xB7[\u22121, 1]\xB7{\u03B8<sub>xi</sub>, \u03B8<sub>xj</sub>}</div>', E += "<h4>2.1.3 Constitutive Relations D</h4>", E += '<table class="rpt-eq-table"><tbody>', E += '<tr><td class="eq-name">Axial:</td><td>\u03C3 = E\xB7\u03B5</td><td>\u2192 D<sub>axial</sub> = E\xB7A</td></tr>', E += '<tr><td class="eq-name">Bending Z:</td><td>M<sub>z</sub> = EI<sub>z</sub>\xB7\u03BA</td><td>\u2192 D<sub>bz</sub> = E\xB7I<sub>z</sub></td></tr>', E += '<tr><td class="eq-name">Bending Y:</td><td>M<sub>y</sub> = EI<sub>y</sub>\xB7\u03BA</td><td>\u2192 D<sub>by</sub> = E\xB7I<sub>y</sub></td></tr>', E += '<tr><td class="eq-name">Torsion:</td><td>T = GJ\xB7\u03C6\u2032</td><td>\u2192 D<sub>torsion</sub> = G\xB7J</td></tr>', E += "</tbody></table>", E += "<h4>2.1.4 Local Stiffness Matrix K<sub>local</sub></h4>", E += "<p>Obtained by analytical integration:</p>", E += '<div class="rpt-eq rpt-eq-highlight">K<sub>local</sub> = \u222B\u2080\u1D38 B\u1D40\xB7D\xB7B dx</div>', E += "<p>Result for Euler-Bernoulli beam (12\xD712 symmetric):</p>", E += '<div class="rpt-eq-small">', E += "K[0,0] = EA/L &nbsp;&nbsp; K[1,1] = 12EI<sub>z</sub>/L\xB3 &nbsp;&nbsp; K[2,2] = 12EI<sub>y</sub>/L\xB3 &nbsp;&nbsp; K[3,3] = GJ/L<br/>", E += "K[4,4] = 4EI<sub>y</sub>/L &nbsp;&nbsp; K[5,5] = 4EI<sub>z</sub>/L &nbsp;&nbsp; K[1,5] = 6EI<sub>z</sub>/L\xB2 &nbsp;&nbsp; K[2,4] = \u22126EI<sub>y</sub>/L\xB2", E += "</div>", E += "<h4>2.1.5 Transformation Matrix T</h4>", E += "<p>Direction cosines of element axis:</p>", E += '<div class="rpt-eq">l = (x<sub>j</sub>\u2212x<sub>i</sub>)/L &nbsp;&nbsp; m = (y<sub>j</sub>\u2212y<sub>i</sub>)/L &nbsp;&nbsp; n = (z<sub>j</sub>\u2212z<sub>i</sub>)/L &nbsp;&nbsp; D = \u221A(l\xB2+m\xB2)</div>', E += '<div class="rpt-eq">\u03BB = [l, m, n; \u2212m/D, l/D, 0; \u2212ln/D, \u2212mn/D, D] &nbsp;&nbsp; (3\xD73)</div>', E += '<div class="rpt-eq rpt-eq-highlight">T = I\u2084 \u2297 \u03BB &nbsp;&nbsp; (12\xD712 block-diagonal, Kronecker product)</div>', E += "<p>Special case for vertical elements (n = \xB11): \u03BB uses fixed axes.</p>", E += "<h4>2.1.6 Global Stiffness Matrix</h4>", E += '<div class="rpt-eq rpt-eq-highlight">K<sub>global</sub> = T\u1D40 \xB7 K<sub>local</sub> \xB7 T</div>'), E += "<h2>3. Numerical Results per Element</h2>", E += "<p>For each element, we compute K<sub>local</sub>, T, and K<sub>global</sub> = T\u1D40\xB7K\xB7T with the actual properties:</p>";
    for (let ee = 0; ee < X; ee++) {
      const oe = O[ee], xe = oe.map((xo) => h[xo]);
      if (!(oe.length === 2)) continue;
      const Fe = eo(Pt(xe[1], xe[0])), Pe = ((_a = T.elasticities) == null ? void 0 : _a.get(ee)) ?? 0, Ke = ((_b = T.areas) == null ? void 0 : _b.get(ee)) ?? 0, Ae = ((_c = T.momentsOfInertiaZ) == null ? void 0 : _c.get(ee)) ?? 0, ct = ((_d = T.momentsOfInertiaY) == null ? void 0 : _d.get(ee)) ?? 0, Ye = ((_e2 = T.shearModuli) == null ? void 0 : _e2.get(ee)) ?? 0, st = ((_f = T.torsionalConstants) == null ? void 0 : _f.get(ee)) ?? 0;
      let at = null, tt = null, yt = null;
      try {
        at = Ho(xe, T, ee), tt = No(xe), yt = gt(yn(tt), gt(at, tt));
      } catch {
        continue;
      }
      const Yt = Pt(xe[1], xe[0]), ht = Yt[0] / Fe, $t = Yt[1] / Fe, bo = Yt[2] / Fe;
      E += '<div class="rpt-elem-block">', E += `<h3 class="rpt-elem-title" data-toggle="elem${ee}">\u25B6 Element ${ee} \u2014 Nodes ${oe[0]} \u2192 ${oe[1]}, L = ${Ee(Fe)}</h3>`, E += `<div id="rpt-elem${ee}" class="rpt-elem-body" style="display:none">`, E += "<h4>Properties (numerical substitution)</h4>", E += '<div class="rpt-eq-small">', E += `E = ${Ee(Pe)} &nbsp;&nbsp; A = ${Ee(Ke)} &nbsp;&nbsp; I<sub>z</sub> = ${Ee(Ae)} &nbsp;&nbsp; I<sub>y</sub> = ${Ee(ct)} &nbsp;&nbsp; G = ${Ee(Ye)} &nbsp;&nbsp; J = ${Ee(st)}<br/>`, E += `EA/L = ${Ee(Pe)}\xB7${Ee(Ke)}/${Ee(Fe)} = <b>${Ee(Pe * Ke / Fe)}</b><br/>`, E += `12EI<sub>z</sub>/L\xB3 = 12\xB7${Ee(Pe)}\xB7${Ee(Ae)}/${Ee(Fe)}\xB3 = <b>${Ee(12 * Pe * Ae / Fe ** 3)}</b><br/>`, E += `12EI<sub>y</sub>/L\xB3 = 12\xB7${Ee(Pe)}\xB7${Ee(ct)}/${Ee(Fe)}\xB3 = <b>${Ee(12 * Pe * ct / Fe ** 3)}</b><br/>`, E += `GJ/L = ${Ee(Ye)}\xB7${Ee(st)}/${Ee(Fe)} = <b>${Ee(Ye * st / Fe)}</b>`, E += "</div>", E += "<h4>Direction cosines</h4>", E += `<div class="rpt-eq-small">l = ${_o(ht)}, m = ${_o($t)}, n = ${_o(bo)}, D = ${_o(Math.sqrt(ht ** 2 + $t ** 2))}</div>`, E += "<h4>K<sub>local</sub> (12\xD712)</h4>", E += xn(at, 12), E += "<h4>T \u2014 Transformation (12\xD712)</h4>", E += xn(tt, 12), E += "<h4>K<sub>global</sub> = T\u1D40 \xB7 K<sub>local</sub> \xB7 T</h4>", E += xn(yt, 12), E += "<h4>Assembly</h4>", E += `<div class="rpt-eq-small">Global DOFs: node ${oe[0]} \u2192 [${oe[0] * 6}..${oe[0] * 6 + 5}], node ${oe[1]} \u2192 [${oe[1] * 6}..${oe[1] * 6 + 5}]</div>`, E += "</div></div>";
    }
    E += "<h2>4. Global Assembly</h2>", E += `<div class="rpt-eq rpt-eq-highlight">K<sub>total</sub> = \u03A3<sub>e=0</sub><sup>${X - 1}</sup> (T<sub>e</sub>\u1D40 \xB7 k<sub>e</sub> \xB7 T<sub>e</sub>)</div>`, E += "<p>Each element contributes its K<sub>global</sub> to the positions determined by its node DOF indices.</p>", E += ma(O, h.length), E += "<h2>5. Boundary Conditions</h2>";
    const Z = [
      "u<sub>x</sub>",
      "u<sub>y</sub>",
      "u<sub>z</sub>",
      "\u03B8<sub>x</sub>",
      "\u03B8<sub>y</sub>",
      "\u03B8<sub>z</sub>"
    ], me = [];
    if (E += "<h3>5.1 Supports (fixed DOFs)</h3>", J.supports && J.supports.size > 0) {
      E += '<table class="rpt-data"><thead><tr><th>Node</th>';
      for (const ee of Z) E += `<th>${ee}</th>`;
      E += "</tr></thead><tbody>", J.supports.forEach((ee, oe) => {
        E += `<tr><td>${oe}</td>`, ee.forEach((xe, ke) => {
          xe && me.push(oe * 6 + ke), E += `<td class="${xe ? "fixed" : ""}">${xe ? "Fixed" : "Free"}</td>`;
        }), E += "</tr>";
      }), E += "</tbody></table>";
    }
    if (E += `<div class="rpt-eq-small">Fixed DOFs: [${me.join(", ")}] \u2192 ${me.length} constraints<br/>`, E += `Free DOFs: ${se} \u2212 ${me.length} = <b>${se - me.length}</b></div>`, E += "<h3>5.2 Applied Loads</h3>", J.loads && J.loads.size > 0) {
      E += '<table class="rpt-data"><thead><tr><th>Node</th>';
      const ee = [
        "F<sub>x</sub>",
        "F<sub>y</sub>",
        "F<sub>z</sub>",
        "M<sub>x</sub>",
        "M<sub>y</sub>",
        "M<sub>z</sub>"
      ];
      for (const oe of ee) E += `<th>${oe}</th>`;
      E += "</tr></thead><tbody>", J.loads.forEach((oe, xe) => {
        E += `<tr><td>${xe}</td>`, oe.forEach((ke) => {
          const Fe = Math.abs(ke) > 1e-10;
          E += `<td class="${Fe ? "nz" : ""}">${Fe ? Ee(ke) : "0"}</td>`;
        }), E += "</tr>";
      }), E += "</tbody></table>";
    }
    if (E += "<h2>6. Solution</h2>", E += "<p>After removing fixed DOFs, the reduced system is:</p>", E += '<div class="rpt-eq rpt-eq-highlight">K<sub>free</sub> \xB7 u<sub>free</sub> = F<sub>free</sub></div>', E += "<p>Solved using LU decomposition with partial pivoting (sparse matrix).</p>", E += "<h3>6.1 Nodal Displacements</h3>", ye == null ? void 0 : ye.deformations) {
      E += '<table class="rpt-data"><thead><tr><th>Node</th>';
      for (const ee of Z) E += `<th>${ee}</th>`;
      E += "</tr></thead><tbody>", ye.deformations.forEach((ee, oe) => {
        E += `<tr><td>${oe}</td>`, ee.forEach((xe) => {
          const ke = Math.abs(xe) > 1e-10;
          E += `<td class="${ke ? "nz" : ""}">${Ee(xe, 6)}</td>`;
        }), E += "</tr>";
      }), E += "</tbody></table>";
    }
    if (E += "<h3>6.2 Reactions</h3>", E += '<div class="rpt-eq">R = K<sub>total</sub> \xB7 u (extract at fixed DOFs)</div>', ye == null ? void 0 : ye.reactions) {
      E += '<table class="rpt-data"><thead><tr><th>Node</th>';
      for (const ee of Z) E += `<th>${ee}</th>`;
      E += "</tr></thead><tbody>", ye.reactions.forEach((ee, oe) => {
        E += `<tr><td>${oe}</td>`, ee.forEach((xe) => {
          const ke = Math.abs(xe) > 1e-10;
          E += `<td class="${ke ? "nz-react" : ""}">${ke ? Ee(xe, 4) : "0"}</td>`;
        }), E += "</tr>";
      }), E += "</tbody></table>";
    }
    if (E += "<h2>7. Internal Forces</h2>", E += "<p>For each element, transform global displacements to local and multiply by K<sub>local</sub>:</p>", E += '<div class="rpt-eq">u<sub>local</sub> = T \xB7 u<sub>global</sub></div>', E += '<div class="rpt-eq rpt-eq-highlight">f<sub>local</sub> = K<sub>local</sub> \xB7 u<sub>local</sub></div>', ye == null ? void 0 : ye.deformations) {
      const ee = [
        "N",
        "V<sub>y</sub>",
        "V<sub>z</sub>",
        "M<sub>x</sub>",
        "M<sub>y</sub>",
        "M<sub>z</sub>"
      ];
      E += '<table class="rpt-data"><thead><tr><th>Elem</th><th>Nodes</th>';
      for (const oe of ee) E += `<th>${oe}<sub>i</sub></th>`;
      for (const oe of ee) E += `<th>${oe}<sub>j</sub></th>`;
      E += "</tr></thead><tbody>";
      for (let oe = 0; oe < X; oe++) {
        const xe = O[oe];
        if (xe.length !== 2) continue;
        const ke = xe.map((Fe) => h[Fe]);
        try {
          const Fe = Ho(ke, T, oe), Pe = No(ke), Ke = [];
          for (const Ye of xe) {
            const st = ((_g = ye.deformations) == null ? void 0 : _g.get(Ye)) || [
              0,
              0,
              0,
              0,
              0,
              0
            ];
            Ke.push(...st);
          }
          const Ae = gt(Pe, Ke), ct = gt(Fe, Ae);
          E += `<tr><td>${oe}</td><td>${xe.join("\u2192")}</td>`;
          for (let Ye = 0; Ye < 12; Ye++) {
            const st = Math.abs(ct[Ye]) > 1e-10;
            E += `<td class="${st ? "nz" : ""}">${Ee(ct[Ye], 2)}</td>`;
          }
          E += "</tr>";
        } catch {
        }
      }
      E += "</tbody></table>";
    }
    const _e = `
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
    return be.innerHTML = _e + E, (_h = be.querySelector("#rpt-close")) == null ? void 0 : _h.addEventListener("click", () => be.remove()), be.querySelectorAll("[data-toggle]").forEach((ee) => {
      ee.addEventListener("click", () => {
        const oe = ee.dataset.toggle, xe = be.querySelector(`#rpt-${oe}`);
        if (xe) {
          const ke = xe.style.display !== "none";
          xe.style.display = ke ? "none" : "", ee.textContent = ee.textContent.replace(/^[▼▶]/, ke ? "\u25B6" : "\u25BC");
        }
      });
    }), be;
  }
  function Ee(e, h = 2) {
    return Math.abs(e) < 1e-10 ? "0" : Math.abs(e) >= 1e7 || Math.abs(e) < 0.01 && e !== 0 ? e.toExponential(h) : e.toFixed(h);
  }
  function _o(e) {
    return Math.abs(e) < 1e-10 ? "0" : e.toFixed(4);
  }
  function xn(e, h) {
    var _a;
    const O = Math.min(h, 12);
    let T = '<div style="overflow-x:auto"><table class="rpt-mtx">';
    for (let J = 0; J < O; J++) {
      T += "<tr>";
      for (let ye = 0; ye < O; ye++) {
        const se = ((_a = e[J]) == null ? void 0 : _a[ye]) ?? 0, X = Math.abs(se) < 1e-10;
        T += `<td class="${X ? "z" : ""} ${J === ye && !X ? "diag" : ""}">${X ? "0" : fa(se)}</td>`;
      }
      T += "</tr>";
    }
    return T += "</table>", h > O && (T += `<div style="color:#888;font-size:9pt">(showing ${O}\xD7${O} of ${h}\xD7${h})</div>`), T += "</div>", T;
  }
  function fa(e) {
    return Math.abs(e) >= 1e6 || Math.abs(e) < 0.01 && e !== 0 ? e.toExponential(1) : Math.abs(e) >= 100 ? e.toFixed(0) : e.toFixed(2);
  }
  function ua() {
    const se = [
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
    let X = '<svg viewBox="0 0 600 180" style="width:100%;max-width:600px;border:1px solid #ddd;border-radius:4px;margin:8px 0;background:#fafafa">';
    X += `<line x1="30" y1="${180 / 2}" x2="570" y2="${180 / 2}" stroke="#ccc" stroke-width="1"/>`, X += '<line x1="30" y1="20" x2="30" y2="160" stroke="#ccc" stroke-width="1"/>', X += `<text x="${600 / 2}" y="175" fill="#888" font-size="10" text-anchor="middle" font-family="sans-serif">\u03BE (0 \u2192 1)</text>`, X += `<text x="25" y="${180 / 2 - 60 - 5}" fill="#888" font-size="9" text-anchor="end" font-family="sans-serif">1</text>`, X += `<text x="25" y="${180 / 2 + 4}" fill="#888" font-size="9" text-anchor="end" font-family="sans-serif">0</text>`;
    for (const B of se) {
      let de = "";
      for (let me = 0; me <= 80; me++) {
        const _e = me / 80, ee = 30 + _e * 540, oe = 180 / 2 - B.fn(_e) * 60;
        de += (me === 0 ? "M" : "L") + `${ee.toFixed(1)},${oe.toFixed(1)}`;
      }
      X += `<path d="${de}" fill="none" stroke="${B.color}" stroke-width="2.5"/>`;
      const be = 0.75, E = 30 + be * 540 + 8, Z = 180 / 2 - B.fn(be) * 60 - 6;
      X += `<text x="${E}" y="${Z}" fill="${B.color}" font-size="11" font-weight="bold" font-family="sans-serif">${B.name}</text>`;
    }
    return X += "</svg>", X;
  }
  function ma(e, h) {
    const O = h * 6, T = Math.min(O, 30);
    let J = "<p>Assembly contribution map (number = how many elements contribute to each K<sub>total</sub> entry):</p>";
    J += '<div style="overflow-x:auto"><table class="rpt-assembly-map">', J += "<tr><td></td>";
    for (let se = 0; se < T; se++) J += `<td style="color:#003366;font-weight:bold;font-size:7px">${se}</td>`;
    J += "</tr>";
    const ye = Array.from({
      length: T
    }, () => Array(T).fill(0));
    for (let se = 0; se < e.length; se++) {
      const X = e[se].map((B) => B * 6);
      for (const B of X) for (const de of X) for (let be = 0; be < 6; be++) for (let E = 0; E < 6; E++) {
        const Z = B + be, me = de + E;
        Z < T && me < T && ye[Z][me]++;
      }
    }
    for (let se = 0; se < T; se++) {
      J += `<tr><td style="color:#003366;font-weight:bold;font-size:7px">${se}</td>`;
      for (let X = 0; X < T; X++) {
        const B = ye[se][X], de = B === 0 ? "#fff" : B === 1 ? "#e8f0fe" : B === 2 ? "#c6dcf5" : "#a0c4e8", be = B === 0 ? "" : B.toString();
        J += `<td style="background:${de};color:#003366">${be}</td>`;
      }
      J += "</tr>";
    }
    return J += "</table></div>", O > T && (J += `<div style="color:#888;font-size:9pt">(showing ${T}\xD7${T} of ${O}\xD7${O})</div>`), J;
  }
  let gn = false;
  function ba(e) {
    if (gn || window.katex) {
      gn = true, e();
      return;
    }
    const h = document.createElement("link");
    h.rel = "stylesheet", h.href = "https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css", document.head.appendChild(h);
    const O = document.createElement("script");
    O.src = "https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.js", O.onload = () => {
      gn = true, e();
    }, document.head.appendChild(O);
  }
  function ms(e, h = false) {
    try {
      if (window.katex) return window.katex.renderToString(e, {
        displayMode: h,
        throwOnError: false
      });
    } catch {
    }
    return `<code class="er-tex-fallback">${e}</code>`;
  }
  function xa(e, h, O, T, J, ye) {
    var _a, _b, _c, _d, _e2, _f;
    const se = O[e], X = se.map((tt) => h[tt]), B = se.length === 2, de = B ? eo(Pt(X[1], X[0])) : 0, be = ((_a = T.elasticities) == null ? void 0 : _a.get(e)) ?? 0, E = ((_b = T.areas) == null ? void 0 : _b.get(e)) ?? 0, Z = ((_c = T.momentsOfInertiaZ) == null ? void 0 : _c.get(e)) ?? 0, me = ((_d = T.momentsOfInertiaY) == null ? void 0 : _d.get(e)) ?? 0, _e = ((_e2 = T.shearModuli) == null ? void 0 : _e2.get(e)) ?? 0, ee = ((_f = T.torsionalConstants) == null ? void 0 : _f.get(e)) ?? 0;
    let oe = null, xe = null, ke = null;
    try {
      oe = Ho(X, T, e), xe = No(X), ke = gt(yn(xe), gt(oe, xe));
    } catch {
    }
    const Fe = B ? Pt(X[1], X[0]) : [
      0,
      0,
      0
    ], Pe = de > 0 ? Fe[0] / de : 0, Ke = de > 0 ? Fe[1] / de : 0, Ae = de > 0 ? Fe[2] / de : 0, ct = Math.sqrt(Pe ** 2 + Ke ** 2), Ye = [];
    if ((J == null ? void 0 : J.deformations) && B) for (const tt of se) {
      const yt = J.deformations.get(tt) || [
        0,
        0,
        0,
        0,
        0,
        0
      ];
      Ye.push(...yt);
    }
    let st = [], at = [];
    if (Ye.length === 12 && xe && oe) {
      try {
        st = gt(xe, Ye);
      } catch {
        st = Array(12).fill(0);
      }
      try {
        at = gt(oe, st);
      } catch {
        at = Array(12).fill(0);
      }
    }
    return {
      elemIdx: e,
      elem: se,
      elmNodes: X,
      isFrame: B,
      L: de,
      E: be,
      A: E,
      Iz: Z,
      Iy: me,
      G: _e,
      J: ee,
      kLocal: oe,
      T: xe,
      kGlobal: ke,
      l: Pe,
      m: Ke,
      n: Ae,
      D: ct,
      uGlobal: Ye,
      uLocal: st,
      fLocal: at,
      dOut: J,
      aOut: ye,
      totalNodes: h.length
    };
  }
  function ga(e, h, O, T, J, ye) {
    var _a, _b;
    const se = xa(e, h, O, T, J, ye), X = document.createElement("div");
    return X.className = "er-panel", X.innerHTML = $a + `
    <div class="er-header">
      <span class="er-badge">Element ${e}</span>
      <span class="er-type">${se.isFrame ? "Frame" : "Shell"} \u2014 Nodes ${se.elem.join(" \u2192 ")} \u2014 L = ${he(se.L)}</span>
      <button class="er-fullscreen" id="er-fullscreen" title="Pantalla completa">\u26F6</button>
      <button class="er-close" id="er-close">\u2715</button>
    </div>
    <div class="er-tabs">
      <button class="er-tab active" data-tab="tabla">Tabla</button>
      <button class="er-tab" data-tab="math">Matematica Explicada</button>
      <button class="er-tab" data-tab="resumen">Resumen</button>
    </div>
    <div class="er-body" id="er-body-tabla">${ha(se)}</div>
    <div class="er-body" id="er-body-math" style="display:none">${bs(se)}</div>
    <div class="er-body" id="er-body-resumen" style="display:none">${va(se)}</div>
  `, X.querySelectorAll(".er-tab").forEach((B) => {
      B.addEventListener("click", () => {
        X.querySelectorAll(".er-tab").forEach((be) => be.classList.remove("active")), B.classList.add("active");
        const de = B.dataset.tab;
        X.querySelectorAll(".er-body").forEach((be) => be.style.display = "none"), X.querySelector(`#er-body-${de}`).style.display = "";
      });
    }), (_a = X.querySelector("#er-close")) == null ? void 0 : _a.addEventListener("click", () => X.remove()), (_b = X.querySelector("#er-fullscreen")) == null ? void 0 : _b.addEventListener("click", () => {
      const B = X.classList.toggle("er-fullscreen-mode"), de = X.querySelector("#er-fullscreen");
      de && (de.textContent = B ? "\u22A1" : "\u26F6");
    }), setTimeout(() => {
      const B = X.querySelector("#er-sf-canvas");
      B && hn(B);
      const de = X.querySelector("#er-sf-canvas-math");
      de && hn(de);
    }, 50), ba(() => {
      const B = X.querySelector("#er-body-math");
      B && (B.innerHTML = bs(se)), setTimeout(() => {
        const de = X.querySelector("#er-sf-canvas-math");
        de && hn(de);
      }, 50), X.querySelectorAll(".er-deriv-header").forEach((de) => {
        de.addEventListener("click", () => {
          const be = de.dataset.toggle, E = X.querySelector(`#er-${be}`);
          E && (E.style.display = E.style.display === "none" ? "" : "none");
        });
      });
    }), X;
  }
  function ha(e) {
    let h = "";
    if (h += '<div class="er-section-title">1. Propiedades</div>', h += '<table class="er-props">', h += `<tr><td>E</td><td>${he(e.E)}</td><td>A</td><td>${he(e.A)}</td></tr>`, h += `<tr><td>I<sub>z</sub></td><td>${he(e.Iz)}</td><td>I<sub>y</sub></td><td>${he(e.Iy)}</td></tr>`, h += `<tr><td>G</td><td>${he(e.G)}</td><td>J</td><td>${he(e.J)}</td></tr>`, h += "</table>", e.kLocal && (h += `<div class="er-section-title">2. K<sub>local</sub> (${e.kLocal.length}\xD7${e.kLocal.length})</div>`, h += ko(e.kLocal)), e.T && (h += '<div class="er-section-title">3. T \u2014 Transformaci\xF3n</div>', h += ko(e.T)), e.kGlobal && (h += '<div class="er-section-title">4. K<sub>global</sub> = T<sup>T</sup>\xB7K\xB7T</div>', h += ko(e.kGlobal)), h += '<div class="er-section-title">5. Desplazamientos</div>', e.uGlobal.length > 0) {
      const O = [
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
          const ye = e.uGlobal[T * 6 + J];
          h += `${O[J]}=<span class="${Math.abs(ye) > 1e-10 ? "nz" : ""}">${he(ye, 6)}</span> `;
        }
        h += "</div>";
      }
    } else h += '<div class="er-sub">Sin an\xE1lisis</div>';
    if (h += '<div class="er-section-title">6. Fuerzas internas</div>', e.fLocal.length > 0 && e.fLocal.some((O) => O !== 0)) {
      const O = [
        "N",
        "V<sub>y</sub>",
        "V<sub>z</sub>",
        "M<sub>x</sub>",
        "M<sub>y</sub>",
        "M<sub>z</sub>"
      ];
      h += '<table class="er-forces"><tr><th></th>';
      for (const T of O) h += `<th>${T}</th>`;
      h += "</tr>", h += "<tr><td>Nodo i</td>";
      for (let T = 0; T < 6; T++) h += `<td class="${Math.abs(e.fLocal[T]) > 1e-10 ? "nz" : ""}">${he(e.fLocal[T], 3)}</td>`;
      h += "</tr><tr><td>Nodo j</td>";
      for (let T = 6; T < 12; T++) h += `<td class="${Math.abs(e.fLocal[T]) > 1e-10 ? "nz" : ""}">${he(e.fLocal[T], 3)}</td>`;
      h += "</tr></table>";
    } else h += '<div class="er-sub">Sin an\xE1lisis</div>';
    return h;
  }
  function bs(e) {
    if (!e.isFrame) return '<div class="er-sub">Shell element math: coming soon</div>';
    let h = "";
    const O = (be) => ms(be), T = (be) => ms(be, true);
    h += '<div class="er-section-title">1. Geometria del elemento</div>', h += "<p>Viga Euler-Bernoulli con 2 nodos y 6 GDL por nodo:</p>", h += `<div class="er-eq">${T("\\text{DOFs} = [u_x,\\, u_y,\\, u_z,\\, \\theta_x,\\, \\theta_y,\\, \\theta_z] \\quad \\Rightarrow \\quad 12 \\text{ GDL totales}")}</div>`, h += '<div class="er-eq-num">', h += `${O("\\text{Nodo } i")} = (${e.elmNodes[0].map((be) => he(be)).join(", ")})<br/>`, h += `${O("\\text{Nodo } j")} = (${e.elmNodes[1].map((be) => he(be)).join(", ")})<br/>`, h += `${T(`L = \\sqrt{(x_j - x_i)^2 + (y_j - y_i)^2 + (z_j - z_i)^2} = \\mathbf{${he(e.L)}}`)}`, h += "</div>", h += '<div class="er-section-title">2. Funciones de forma</div>', h += "<p>La viga usa <b>interpolacion lineal</b> para axial/torsion y <b>polinomios cubicos de Hermite</b> para flexion.</p>", h += '<div class="er-subsec">2.1 Axial y Torsion (lineal)</div>', h += `<div class="er-eq">${T("N_1(\\xi) = 1 - \\xi \\qquad N_2(\\xi) = \\xi \\qquad \\text{donde } \\xi = \\frac{x}{L} \\in [0,1]")}</div>`, h += "<p>Primera derivada:</p>", h += `<div class="er-eq">${T("\\frac{dN_1}{d\\xi} = -1 \\qquad \\frac{dN_2}{d\\xi} = 1")}</div>`, h += '<div class="er-subsec">2.2 Flexion (Hermite cubicos)</div>', h += `<p>Las funciones de Hermite garantizan continuidad ${O("C^1")} (desplazamiento y pendiente continuos):</p>`, h += `<div class="er-eq">${T("H_1(\\xi) = 1 - 3\\xi^2 + 2\\xi^3 \\qquad \\text{(desplazamiento nodo } i\\text{)}")}</div>`, h += `<div class="er-eq">${T("H_2(\\xi) = L\\,\\xi\\,(1-\\xi)^2 \\qquad \\text{(rotacion nodo } i\\text{)}")}</div>`, h += `<div class="er-eq">${T("H_3(\\xi) = 3\\xi^2 - 2\\xi^3 \\qquad \\text{(desplazamiento nodo } j\\text{)}")}</div>`, h += `<div class="er-eq">${T("H_4(\\xi) = L\\,\\xi^2(\\xi - 1) \\qquad \\text{(rotacion nodo } j\\text{)}")}</div>`, h += `<div class="er-subsec">Derivadas segunda (curvatura ${O("\\kappa = \\frac{d^2v}{dx^2}")}):</div>`, h += `<div class="er-eq">${T("H_1'' = \\frac{-6}{L^2}(1-2\\xi) \\qquad H_2'' = \\frac{-2}{L}(2-3\\xi)")}</div>`, h += `<div class="er-eq">${T("H_3'' = \\frac{6}{L^2}(1-2\\xi) \\qquad H_4'' = \\frac{-2}{L}(1-3\\xi)")}</div>`, h += '<canvas id="er-sf-canvas-math" width="500" height="250" style="width:100%;border:1px solid var(--fem-border);border-radius:4px;margin:8px 0;"></canvas>', h += '<div class="er-section-title">3. Matriz B (strain-displacement)</div>', h += "<p>La matriz B relaciona desplazamientos nodales con deformaciones internas:</p>", h += `<div class="er-eq">${T("\\boldsymbol{\\varepsilon} = \\mathbf{B} \\cdot \\mathbf{u}")}</div>`, h += '<div class="er-subsec">3.1 Deformacion axial</div>', h += `<div class="er-eq">${T("\\varepsilon_{axial} = \\frac{du}{dx} = \\frac{1}{L} \\begin{bmatrix} -1 & 1 \\end{bmatrix} \\begin{Bmatrix} u_i \\\\ u_j \\end{Bmatrix}")}</div>`, h += `<div class="er-subsec">3.2 Curvatura por flexion (plano XY \u2192 ${O("I_z")})</div>`, h += `<div class="er-eq">${T("\\kappa_z = \\frac{d^2 v}{dx^2} = \\mathbf{B}_{bz} \\cdot \\begin{Bmatrix} v_i \\\\ \\theta_{zi} \\\\ v_j \\\\ \\theta_{zj} \\end{Bmatrix}")}</div>`, h += `<div class="er-eq">${T("\\mathbf{B}_{bz}(\\xi) = \\frac{1}{L^2} \\begin{bmatrix} H_1'' & H_2'' & H_3'' & H_4'' \\end{bmatrix}")}</div>`, h += `<div class="er-subsec">3.3 Curvatura (plano XZ \u2192 ${O("I_y")})</div>`, h += `<div class="er-eq">${T("\\kappa_y = \\frac{d^2 w}{dx^2} = \\mathbf{B}_{by} \\cdot \\begin{Bmatrix} w_i \\\\ \\theta_{yi} \\\\ w_j \\\\ \\theta_{yj} \\end{Bmatrix}")}</div>`, h += '<div class="er-subsec">3.4 Torsion</div>', h += `<div class="er-eq">${T("\\phi' = \\frac{d\\theta_x}{dx} = \\frac{1}{L} \\begin{bmatrix} -1 & 1 \\end{bmatrix} \\begin{Bmatrix} \\theta_{xi} \\\\ \\theta_{xj} \\end{Bmatrix}")}</div>`, h += '<div class="er-section-title">4. Relaciones constitutivas D</div>', h += "<p>Cada modo de deformacion tiene su rigidez material:</p>", h += `<div class="er-eq">${T(`\\text{Axial: } \\sigma = E \\cdot \\varepsilon \\;\\Rightarrow\\; D_{ax} = EA = ${he(e.E)} \\times ${he(e.A)} = \\mathbf{${he(e.E * e.A)}}`)}</div>`, h += `<div class="er-eq">${T(`\\text{Flex Z: } M_z = EI_z \\cdot \\kappa \\;\\Rightarrow\\; D_{bz} = EI_z = ${he(e.E)} \\times ${he(e.Iz)} = \\mathbf{${he(e.E * e.Iz)}}`)}</div>`, h += `<div class="er-eq">${T(`\\text{Flex Y: } M_y = EI_y \\cdot \\kappa \\;\\Rightarrow\\; D_{by} = EI_y = ${he(e.E)} \\times ${he(e.Iy)} = \\mathbf{${he(e.E * e.Iy)}}`)}</div>`, h += `<div class="er-eq">${T(`\\text{Torsion: } T = GJ \\cdot \\phi' \\;\\Rightarrow\\; D_t = GJ = ${he(e.G)} \\times ${he(e.J)} = \\mathbf{${he(e.G * e.J)}}`)}</div>`, h += `<div class="er-section-title">5. Integracion \u2192 ${O("\\mathbf{K}_{local}")}</div>`, h += "<p>La matriz de rigidez local se obtiene integrando analiticamente:</p>", h += `<div class="er-eq er-eq-main">${T("\\mathbf{K}_{local} = \\int_0^L \\mathbf{B}^T \\cdot \\mathbf{D} \\cdot \\mathbf{B} \\; dx")}</div>`;
    const J = e.E * e.A / e.L, ye = e.E * e.Iz / e.L ** 3, se = e.E * e.Iy / e.L ** 3, X = e.G * e.J / e.L;
    if (h += '<div class="er-deriv-block">', h += '<div class="er-deriv-header" data-toggle="deriv-axial">\u{1F4D6} K[0,0] = EA/L \u2014 <i>click para ver derivacion completa</i></div>', h += '<div id="er-deriv-axial" class="er-deriv-body" style="display:none">', h += "<p><b>Paso 1:</b> Funcion de forma axial</p>", h += `<div class="er-eq">${T("u(\\xi) = N_1 \\cdot u_i + N_2 \\cdot u_j = (1-\\xi)\\,u_i + \\xi\\,u_j")}</div>`, h += "<p><b>Paso 2:</b> Derivada (deformacion)</p>", h += `<div class="er-eq">${T("\\varepsilon = \\frac{du}{dx} = \\frac{1}{L}\\frac{du}{d\\xi} = \\frac{1}{L}(-u_i + u_j)")}</div>`, h += `<div class="er-eq">${T("\\mathbf{B}_{ax} = \\frac{1}{L}\\begin{bmatrix} -1 & 1 \\end{bmatrix}")}</div>`, h += `<p><b>Paso 3:</b> Integracion ${O("K = \\int_0^L B^T \\cdot EA \\cdot B \\; dx")}</p>`, h += `<div class="er-eq">${T("K_{ax} = \\int_0^L \\frac{1}{L}\\begin{bmatrix}-1\\\\1\\end{bmatrix} \\cdot EA \\cdot \\frac{1}{L}\\begin{bmatrix}-1 & 1\\end{bmatrix} dx")}</div>`, h += `<div class="er-eq">${T("= \\frac{EA}{L^2} \\begin{bmatrix}1 & -1\\\\-1 & 1\\end{bmatrix} \\int_0^L dx = \\frac{EA}{L^2} \\cdot L \\begin{bmatrix}1 & -1\\\\-1 & 1\\end{bmatrix}")}</div>`, h += `<div class="er-eq er-eq-main">${T(`K_{ax} = \\frac{EA}{L}\\begin{bmatrix}1 & -1\\\\-1 & 1\\end{bmatrix} = \\frac{${he(e.E)}\\times${he(e.A)}}{${he(e.L)}}\\begin{bmatrix}1 & -1\\\\-1 & 1\\end{bmatrix}`)}</div>`, h += `<div class="er-eq">${T(`K[0,0] = K[6,6] = \\frac{EA}{L} = \\mathbf{${he(J)}}`)}</div>`, h += "</div></div>", h += '<div class="er-deriv-block">', h += '<div class="er-deriv-header" data-toggle="deriv-bend">\u{1F4D6} K[1,1] = 12EI<sub>z</sub>/L\xB3 \u2014 <i>click para ver derivacion completa</i></div>', h += '<div id="er-deriv-bend" class="er-deriv-body" style="display:none">', h += `<p><b>Paso 1:</b> Funcion de forma Hermite para ${O("v(\\xi)")}</p>`, h += `<div class="er-eq">${T("v(\\xi) = H_1 v_i + H_2 \\theta_i + H_3 v_j + H_4 \\theta_j")}</div>`, h += "<p><b>Paso 2:</b> Segunda derivada (curvatura)</p>", h += `<div class="er-eq">${T("\\kappa = \\frac{d^2v}{dx^2} = \\frac{1}{L^2}\\frac{d^2v}{d\\xi^2}")}</div>`, h += `<div class="er-eq">${T("H_1'' = -6+12\\xi, \\quad H_2'' = L(-4+6\\xi), \\quad H_3'' = 6-12\\xi, \\quad H_4'' = L(-2+6\\xi)")}</div>`, h += `<div class="er-eq">${T("\\mathbf{B}_b = \\frac{1}{L^2}\\begin{bmatrix} H_1'' & H_2'' & H_3'' & H_4'' \\end{bmatrix}")}</div>`, h += `<p><b>Paso 3:</b> Integracion para K[1,1] (termino ${O("v_i \\cdot v_i")})</p>`, h += `<div class="er-eq">${T("K[1,1] = \\int_0^L \\frac{(H_1'')^2}{L^4} \\cdot EI_z \\; dx = \\frac{EI_z}{L^4} \\int_0^L (-6+12\\xi)^2 \\; dx")}</div>`, h += `<p>Expandimos: ${O("(-6+12\\xi)^2 = 36 - 144\\xi + 144\\xi^2")}</p>`, h += `<div class="er-eq">${T("\\int_0^L (36-144\\xi+144\\xi^2)\\,dx = 36L - 72L + 48L = 12L")}</div>`, h += `<div class="er-eq er-eq-main">${T(`K[1,1] = \\frac{EI_z}{L^4} \\cdot 12L = \\frac{12EI_z}{L^3} = \\frac{12 \\times ${he(e.E)} \\times ${he(e.Iz)}}{${he(e.L)}^3} = \\mathbf{${he(12 * ye)}}`)}</div>`, h += "</div></div>", h += '<div class="er-deriv-block">', h += '<div class="er-deriv-header" data-toggle="deriv-tors">\u{1F4D6} K[3,3] = GJ/L \u2014 <i>click para ver derivacion</i></div>', h += '<div id="er-deriv-tors" class="er-deriv-body" style="display:none">', h += `<p>Mismo proceso que axial pero con ${O("\\theta_x")} y ${O("GJ")}:</p>`, h += `<div class="er-eq">${T(`K_{torsion} = \\frac{GJ}{L}\\begin{bmatrix}1 & -1\\\\-1 & 1\\end{bmatrix} = \\frac{${he(e.G)}\\times${he(e.J)}}{${he(e.L)}} = \\mathbf{${he(X)}}`)}</div>`, h += "</div></div>", h += '<div class="er-deriv-block">', h += '<div class="er-deriv-header" data-toggle="deriv-coup">\u{1F4D6} K[1,5] = 6EI<sub>z</sub>/L\xB2 \u2014 <i>acoplamiento corte-momento</i></div>', h += '<div id="er-deriv-coup" class="er-deriv-body" style="display:none">', h += `<p>Termino cruzado ${O("v_i \\cdot \\theta_{zi}")} (acoplamiento corte-momento):</p>`, h += `<div class="er-eq">${T("K[1,5] = \\frac{EI_z}{L^4} \\int_0^L H_1'' \\cdot H_2'' \\; dx")}</div>`, h += `<div class="er-eq">${T("= \\frac{EI_z}{L^4} \\int_0^L (-6+12\\xi) \\cdot L(-4+6\\xi) \\; dx")}</div>`, h += `<div class="er-eq">${T("= \\frac{EI_z}{L^3} \\int_0^L (24-36\\xi-48\\xi+72\\xi^2) \\; dx = \\frac{EI_z}{L^3} \\cdot 6L")}</div>`, h += `<div class="er-eq er-eq-main">${T(`K[1,5] = \\frac{6EI_z}{L^2} = \\mathbf{${he(6 * e.E * e.Iz / e.L ** 2)}}`)}</div>`, h += "</div></div>", h += '<div class="er-subsec">Resumen de coeficientes:</div>', h += `<div class="er-eq">${T(`\\frac{EA}{L} = \\mathbf{${he(J)}} \\qquad \\frac{12EI_z}{L^3} = \\mathbf{${he(12 * ye)}} \\qquad \\frac{12EI_y}{L^3} = \\mathbf{${he(12 * se)}}`)}</div>`, h += `<div class="er-eq">${T(`\\frac{GJ}{L} = \\mathbf{${he(X)}} \\qquad \\frac{4EI_y}{L} = \\mathbf{${he(4 * e.E * e.Iy / e.L)}} \\qquad \\frac{4EI_z}{L} = \\mathbf{${he(4 * e.E * e.Iz / e.L)}}`)}</div>`, h += `<div class="er-eq">${T(`\\frac{6EI_z}{L^2} = \\mathbf{${he(6 * e.E * e.Iz / e.L ** 2)}} \\qquad \\frac{6EI_y}{L^2} = \\mathbf{${he(6 * e.E * e.Iy / e.L ** 2)}}`)}</div>`, e.kLocal && (h += `<div class="er-subsec">Resultado: ${O("\\mathbf{K}_{local}")} (12x12)</div>`, h += ko(e.kLocal)), h += '<div class="er-section-title">6. Transformacion de coordenadas</div>', h += "<p>Los cosenos directores del eje del elemento:</p>", h += `<div class="er-eq">${T(`l = \\frac{x_j - x_i}{L} = ${Ao(e.l)} \\qquad m = \\frac{y_j - y_i}{L} = ${Ao(e.m)} \\qquad n = \\frac{z_j - z_i}{L} = ${Ao(e.n)}`)}</div>`, h += `<div class="er-eq">${T(`D = \\sqrt{l^2 + m^2} = ${Ao(e.D)}`)}</div>`, Math.abs(e.n) > 0.999) {
      h += `<p>Caso especial: elemento vertical (${O(`n \\approx ${e.n > 0 ? "+1" : "-1"}`)}):</p>`;
      const be = e.n > 0 ? "\\boldsymbol{\\lambda} = \\begin{bmatrix} 0 & 0 & 1 \\\\ 0 & 1 & 0 \\\\ -1 & 0 & 0 \\end{bmatrix}" : "\\boldsymbol{\\lambda} = \\begin{bmatrix} 0 & 0 & -1 \\\\ 0 & 1 & 0 \\\\ 1 & 0 & 0 \\end{bmatrix}";
      h += `<div class="er-eq">${T(be)}</div>`;
    } else h += `<div class="er-eq">${T("\\boldsymbol{\\lambda} = \\begin{bmatrix} l & m & n \\\\ -m/D & l/D & 0 \\\\ -ln/D & -mn/D & D \\end{bmatrix}")}</div>`;
    h += `<div class="er-eq er-eq-main">${T("\\mathbf{T} = \\mathbf{I}_4 \\otimes \\boldsymbol{\\lambda} \\quad \\text{(Kronecker product} \\rightarrow 12 \\times 12 \\text{ bloque-diagonal)}")}</div>`, h += `<div class="er-section-title">7. ${O("\\mathbf{K}_{global}")} = ${O("\\mathbf{T}^T \\cdot \\mathbf{K}_{local} \\cdot \\mathbf{T}")}</div>`, h += "<p>Transformar la rigidez local al sistema global de coordenadas:</p>", h += `<div class="er-eq er-eq-main">${T("\\mathbf{K}_{global} = \\mathbf{T}^T \\cdot \\mathbf{K}_{local} \\cdot \\mathbf{T}")}</div>`, e.kGlobal && (h += ko(e.kGlobal)), h += '<div class="er-section-title">8. Ensamblaje</div>';
    const B = e.elem[0] * 6, de = e.elem[1] * 6;
    if (h += `<div class="er-eq">${T(`\\text{Nodo } ${e.elem[0]} \\rightarrow \\text{DOFs } [${B} \\ldots ${B + 5}]`)}</div>`, h += `<div class="er-eq">${T(`\\text{Nodo } ${e.elem[1]} \\rightarrow \\text{DOFs } [${de} \\ldots ${de + 5}]`)}</div>`, h += `<div class="er-eq">${T("\\mathbf{K}_{total}[\\text{DOFs}_i, \\text{DOFs}_j] \\mathrel{+}= \\mathbf{K}_{global}[i, j]")}</div>`, h += '<div class="er-section-title">9. Recuperacion de fuerzas internas</div>', h += `<div class="er-eq">${T("\\mathbf{u}_{local} = \\mathbf{T} \\cdot \\mathbf{u}_{global}")}</div>`, h += `<div class="er-eq er-eq-main">${T("\\mathbf{f}_{local} = \\mathbf{K}_{local} \\cdot \\mathbf{u}_{local}")}</div>`, e.fLocal.length > 0 && e.fLocal.some((be) => be !== 0)) {
      const be = [
        "N",
        "V<sub>y</sub>",
        "V<sub>z</sub>",
        "M<sub>x</sub>",
        "M<sub>y</sub>",
        "M<sub>z</sub>"
      ];
      h += '<table class="er-forces"><tr><th></th>';
      for (const E of be) h += `<th>${E}</th>`;
      h += `</tr><tr><td>i (${e.elem[0]})</td>`;
      for (let E = 0; E < 6; E++) h += `<td class="${Math.abs(e.fLocal[E]) > 1e-10 ? "nz" : ""}">${he(e.fLocal[E], 3)}</td>`;
      h += `</tr><tr><td>j (${e.elem[1]})</td>`;
      for (let E = 6; E < 12; E++) h += `<td class="${Math.abs(e.fLocal[E]) > 1e-10 ? "nz" : ""}">${he(e.fLocal[E], 3)}</td>`;
      h += "</tr></table>";
    }
    return h;
  }
  function va(e) {
    let h = "";
    if (h += `<div class="er-section-title">Resumen \u2014 Elemento ${e.elemIdx}</div>`, h += '<table class="er-props">', h += `<tr><td>Tipo</td><td>${e.isFrame ? "Frame (Euler-Bernoulli)" : "Shell"}</td></tr>`, h += `<tr><td>Nodos</td><td>${e.elem.join(" \u2192 ")}</td></tr>`, h += `<tr><td>Longitud</td><td><b>${he(e.L)}</b></td></tr>`, h += `<tr><td>E</td><td>${he(e.E)}</td></tr>`, h += `<tr><td>A</td><td>${he(e.A)}</td></tr>`, h += "</table>", e.uGlobal.length > 0) {
      h += '<div class="er-section-title">Desplazamientos</div>';
      const O = [
        "u<sub>x</sub>",
        "u<sub>y</sub>",
        "u<sub>z</sub>",
        "\u03B8<sub>x</sub>",
        "\u03B8<sub>y</sub>",
        "\u03B8<sub>z</sub>"
      ];
      h += '<table class="er-forces"><tr><th>Nodo</th>';
      for (const T of O) h += `<th>${T}</th>`;
      h += "</tr>";
      for (let T = 0; T < e.elem.length; T++) {
        h += `<tr><td>${e.elem[T]}</td>`;
        for (let J = 0; J < 6; J++) {
          const ye = e.uGlobal[T * 6 + J];
          h += `<td class="${Math.abs(ye) > 1e-10 ? "nz" : ""}">${he(ye, 6)}</td>`;
        }
        h += "</tr>";
      }
      h += "</table>";
    }
    if (e.fLocal.length > 0 && e.fLocal.some((O) => O !== 0)) {
      h += '<div class="er-section-title">Fuerzas internas</div>';
      const O = [
        "N",
        "V<sub>y</sub>",
        "V<sub>z</sub>",
        "M<sub>x</sub>",
        "M<sub>y</sub>",
        "M<sub>z</sub>"
      ];
      h += '<table class="er-forces"><tr><th></th>';
      for (const T of O) h += `<th>${T}</th>`;
      h += "</tr><tr><td>Nodo i</td>";
      for (let T = 0; T < 6; T++) h += `<td class="${Math.abs(e.fLocal[T]) > 1e-10 ? "nz" : ""}">${he(e.fLocal[T], 3)}</td>`;
      h += "</tr><tr><td>Nodo j</td>";
      for (let T = 6; T < 12; T++) h += `<td class="${Math.abs(e.fLocal[T]) > 1e-10 ? "nz" : ""}">${he(e.fLocal[T], 3)}</td>`;
      h += "</tr></table>";
    }
    return h;
  }
  function he(e, h = 2) {
    return Math.abs(e) < 1e-10 ? "0" : Math.abs(e) >= 1e7 || Math.abs(e) < 0.01 && e !== 0 ? e.toExponential(h) : e.toFixed(h);
  }
  function Ao(e) {
    return Math.abs(e) < 1e-10 ? "0" : e.toFixed(4);
  }
  function ko(e) {
    var _a;
    const h = e.length, O = Math.min(h, 12);
    let T = '<div style="overflow-x:auto"><table class="er-matrix">';
    for (let J = 0; J < O; J++) {
      T += "<tr>";
      for (let ye = 0; ye < O; ye++) {
        const se = ((_a = e[J]) == null ? void 0 : _a[ye]) ?? 0, X = Math.abs(se) < 1e-10;
        T += `<td class="${X ? "z" : ""} ${J === ye && !X ? "diag" : ""}">${X ? "0" : ya(se)}</td>`;
      }
      T += "</tr>";
    }
    return T += "</table>", h > O && (T += `<div style="color:var(--fem-label);font-size:9px">(${O}\xD7${O} de ${h}\xD7${h})</div>`), T += "</div>", T;
  }
  function ya(e) {
    return Math.abs(e) >= 1e6 || Math.abs(e) < 0.01 && e !== 0 ? e.toExponential(1) : Math.abs(e) >= 100 ? e.toFixed(0) : e.toFixed(2);
  }
  function hn(e) {
    const h = e.getContext("2d");
    if (!h) return;
    const O = e.width, T = e.height, J = 30, ye = O - 2 * J, se = (T - 3 * J) / 2;
    h.fillStyle = getComputedStyle(document.body).getPropertyValue("--fem-bg").trim() || "#111", h.fillRect(0, 0, O, T);
    const X = (B, de, be) => {
      h.strokeStyle = "#333", h.lineWidth = 1, h.strokeRect(J, B, ye, se), h.strokeStyle = "#444", h.beginPath(), h.moveTo(J, B + se / 2), h.lineTo(J + ye, B + se / 2), h.stroke(), h.fillStyle = "#888", h.font = "11px sans-serif", h.fillText(de, J + 4, B + 14);
      for (const Z of be) {
        h.strokeStyle = Z.color, h.lineWidth = 2.5, h.beginPath();
        for (let me = 0; me <= 100; me++) {
          const _e = me / 100, ee = J + _e * ye, oe = B + se / 2 - Z.fn(_e) * (se / 2 * 0.85);
          me === 0 ? h.moveTo(ee, oe) : h.lineTo(ee, oe);
        }
        h.stroke();
      }
      let E = J + ye - 90;
      for (const Z of be) h.fillStyle = Z.color, h.font = "bold 10px sans-serif", h.fillText(Z.label, E, B + se - 6), E += 36;
      h.fillStyle = "#666", h.font = "9px monospace", h.fillText("0", J, B + se + 12), h.fillText("1", J + ye - 6, B + se + 12), h.fillText("\u03BE", J + ye / 2, B + se + 12);
    };
    X(J, "Axial (lineal)", [
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
    ]), X(J + se + J, "Flexi\xF3n (Hermite c\xFAbicos)", [
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
  const $a = `<style>
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
  let Ro = false, to = null, vt = null, et = null, Ge = null;
  function wa() {
    Ge = document.createElement("button"), Ge.id = "help-tour-btn", Ge.innerHTML = "?", Ge.title = "Ayuda interactiva \u2014 Tour guiado", Ge.style.cssText = `
    position: fixed; bottom: 20px; right: 20px; z-index: 9999999;
    width: 48px; height: 48px; border-radius: 50%;
    background: linear-gradient(135deg, #0066cc, #0099ff);
    color: white; border: 3px solid rgba(255,255,255,0.3);
    font-size: 24px; font-weight: bold; cursor: pointer;
    box-shadow: 0 4px 15px rgba(0,102,204,0.4);
    transition: transform 0.2s, box-shadow 0.2s;
    font-family: 'Arial Nova', sans-serif;
    animation: helpPulse 2s infinite;
  `, Ge.addEventListener("mouseenter", () => {
      Ge.style.transform = "scale(1.15)", Ge.style.boxShadow = "0 6px 20px rgba(0,102,204,0.6)";
    }), Ge.addEventListener("mouseleave", () => {
      Ge.style.transform = "scale(1)", Ge.style.boxShadow = "0 4px 15px rgba(0,102,204,0.4)";
    }), Ge.addEventListener("click", () => {
      Ro ? $n() : Ma();
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
  `, document.head.appendChild(e), Ge;
  }
  function Ma() {
    Ro = true, Ge && (Ge.innerHTML = "\u2715", Ge.style.background = "linear-gradient(135deg, #cc3333, #ff4444)", Ge.style.animation = "none"), to = document.createElement("div"), to.id = "tour-overlay", to.style.cssText = `
    position: fixed; inset: 0; z-index: 9999990;
    pointer-events: none;
  `, document.body.appendChild(to), mo(0);
  }
  function $n() {
    Ro = false, Ge && (Ge.innerHTML = "?", Ge.style.background = "linear-gradient(135deg, #0066cc, #0099ff)", Ge.style.animation = "helpPulse 2s infinite"), vt && (vt.remove(), vt = null), et && (et.remove(), et = null), to && (to.remove(), to = null);
  }
  function mo(e) {
    var _a, _b;
    if (e >= Mo.length) {
      ka();
      return;
    }
    const h = Mo[e], O = document.querySelector(h.selector);
    if (!O) {
      mo(e + 1);
      return;
    }
    O.scrollIntoView({
      behavior: "smooth",
      block: "nearest"
    }), vt && vt.remove(), et && et.remove();
    const T = O.getBoundingClientRect(), J = window.innerWidth, ye = window.innerHeight, se = 320, X = 180;
    vt = document.createElement("div"), vt.style.cssText = `
    position: fixed;
    left: ${T.left - 6}px; top: ${T.top - 6}px;
    width: ${T.width + 12}px; height: ${T.height + 12}px;
    border-radius: 8px;
    z-index: 9999991;
    pointer-events: none;
    animation: spotlightPulse 1.5s ease-in-out infinite;
    transition: all 0.3s ease;
  `, document.body.appendChild(vt);
    const B = J - T.right, de = T.left, be = ye - T.bottom, E = T.top;
    let Z = h.position || "bottom";
    Z === "bottom" && be < X + 20 && (Z = "top"), Z === "top" && E < X + 20 && (Z = "right"), Z === "right" && B < se + 20 && (Z = "left"), Z === "left" && de < se + 20 && (Z = "bottom");
    let me, _e, ee = "";
    switch (Z) {
      case "bottom":
        me = T.left + T.width / 2 - se / 2, _e = T.bottom + 14, ee = "position:absolute;top:-8px;left:50%;transform:translateX(-50%);width:0;height:0;border-left:8px solid transparent;border-right:8px solid transparent;border-bottom:8px solid #0099ff;";
        break;
      case "top":
        me = T.left + T.width / 2 - se / 2, _e = T.top - X - 14, ee = "position:absolute;bottom:-8px;left:50%;transform:translateX(-50%);width:0;height:0;border-left:8px solid transparent;border-right:8px solid transparent;border-top:8px solid #0099ff;";
        break;
      case "right":
        me = T.right + 14, _e = T.top + T.height / 2 - X / 2, ee = "position:absolute;left:-8px;top:50%;transform:translateY(-50%);width:0;height:0;border-top:8px solid transparent;border-bottom:8px solid transparent;border-right:8px solid #0099ff;";
        break;
      case "left":
        me = T.left - se - 14, _e = T.top + T.height / 2 - X / 2, ee = "position:absolute;right:-8px;top:50%;transform:translateY(-50%);width:0;height:0;border-top:8px solid transparent;border-bottom:8px solid transparent;border-left:8px solid #0099ff;";
        break;
    }
    me = Math.max(10, Math.min(me, J - se - 10)), _e = Math.max(10, Math.min(_e, ye - X - 10)), et = document.createElement("div"), et.style.cssText = `
    position: fixed;
    left: ${me}px; top: ${_e}px;
    width: ${se}px;
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
  `, et.innerHTML = `
    <div style="${ee}"></div>
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
      ${Mo.map((xe, ke) => `<div style="width:${ke === e ? "16px" : "6px"};height:6px;border-radius:3px;background:${ke === e ? "#0099ff" : ke < e ? "#004488" : "#333"};transition:all 0.3s;"></div>`).join("")}
    </div>
  `, document.body.appendChild(et), (_a = et.querySelector("#tour-next")) == null ? void 0 : _a.addEventListener("click", () => {
      mo(e + 1);
    }), (_b = et.querySelector("#tour-prev")) == null ? void 0 : _b.addEventListener("click", () => {
      mo(e - 1);
    });
    const oe = (xe) => {
      if (!Ro) {
        document.removeEventListener("keydown", oe);
        return;
      }
      (xe.key === "ArrowRight" || xe.key === "Enter") && (mo(e + 1), document.removeEventListener("keydown", oe)), xe.key === "ArrowLeft" && (mo(Math.max(0, e - 1)), document.removeEventListener("keydown", oe)), xe.key === "Escape" && ($n(), document.removeEventListener("keydown", oe));
    };
    document.addEventListener("keydown", oe);
  }
  function ka() {
    var _a;
    vt && (vt.remove(), vt = null), et && (et.remove(), et = null), et = document.createElement("div"), et.style.cssText = `
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
  `, et.innerHTML = `
    <div style="font-size:48px;margin-bottom:12px;">\u{1F393}</div>
    <h3 style="color:#00cc66;margin:0 0 8px 0;font-size:18px;">Tour Completado</h3>
    <p style="color:#888;font-size:12px;line-height:1.6;margin:0 0 16px 0;">
      Ya conoces las herramientas principales.<br>
      Presiona <b style="color:#0099ff">?</b> en cualquier momento para repetir el tour.<br>
      Usa <b style="color:#0099ff">Inspect</b> en un elemento para ver el analisis FEM completo.
    </p>
    <button id="tour-done" style="padding:8px 24px;background:linear-gradient(135deg,#00aa55,#00cc66);color:white;border:none;border-radius:8px;cursor:pointer;font-size:14px;font-weight:bold;">Entendido</button>
  `, document.body.appendChild(et), (_a = et.querySelector("#tour-done")) == null ? void 0 : _a.addEventListener("click", () => $n());
  }
  xs = fo.state(false);
  Ta = function(e) {
    e.nodeInputs || (e.nodeInputs = fo.state({})), e.elementInputs || (e.elementInputs = fo.state({})), e.deformOutputs || (e.deformOutputs = fo.state({})), e.analyzeOutputs || (e.analyzeOutputs = fo.state({}));
    let h = "tonf", O = "m", T = Qt(h, O), J = {
      forceId: "kgf",
      lengthId: "cm",
      label: "kgf/cm\xB2"
    };
    const ye = {
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
    }, se = /* @__PURE__ */ new Set(), X = /* @__PURE__ */ new Set();
    let B = false;
    const de = /* @__PURE__ */ new Set(), be = /* @__PURE__ */ new Map();
    let E = "", Z = {}, me = null, _e = "", ee = [], oe = [], xe = /* @__PURE__ */ new Set(), ke = /* @__PURE__ */ new Set(), Fe = /* @__PURE__ */ new Set(), Pe = /* @__PURE__ */ new Map(), Ke = /* @__PURE__ */ new Map(), Ae = [], ct = 0.2, Ye = 2, st = 2, at = false, tt = 2, yt = "x", Yt = /* @__PURE__ */ new Set(), ht = true, $t = 0.15, bo = 2, xo = 2, Oo = /* @__PURE__ */ new Set();
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
    }), gs = (t, o) => ({
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
    }), ve = {
      colMat: 0,
      vigaMat: 0,
      colShape: 0,
      fc: 20594,
      steelColType: 0,
      steelVigaType: 0,
      perFloor: []
    };
    let lt = 0, mt = 3, bt = false, ot = 0, De = null, Ct = 0, It = [], So = 1, zo = true;
    const go = da();
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
    let _t = [], At = [], Xe = null;
    function wn() {
      if (!Xe) return;
      const t = Ce();
      t && t.scene.remove(Xe), Xe.traverse((o) => {
        if (o.geometry && o.geometry.dispose(), o.material) {
          const n = o.material;
          n.map && n.map.dispose(), n.dispose();
        }
      }), Xe = null;
    }
    function Mn(t, o, n, l, s) {
      wn();
      const i = Ce();
      if (!i) return;
      Xe = new fs(), Xe.name = "gridAxes";
      const r = Math.min(...t), c = Math.max(...t), u = Math.min(...o), d = Math.max(...o), a = c - r || 1, m = d - u || 1, $ = Math.max(a, m), y = $ * 0.08, x = t.map((b, f) => String.fromCharCode(65 + f)), p = o.map((b, f) => String(f + 1)), g = $ * 0.018, w = o.length <= 1, z = 8947848;
      for (let b = 0; b < t.length; b++) {
        const f = t[b];
        if (w) {
          const v = -y - g * 1.5;
          Wo(f, 0, 0, f, 0, v + g, z, Xe), Jo(x[b] || `${b}`, f, 0, v, g, Xe);
        } else {
          const v = u - y - g * 1.5;
          Wo(f, u, 0, f, v + g, 0, z, Xe), Jo(x[b] || `${b}`, f, v, 0, g, Xe);
        }
      }
      if (!w) for (let b = 0; b < o.length; b++) {
        const f = o[b], v = r - y - g * 1.5;
        Wo(r, f, 0, v + g, f, 0, z, Xe), Jo(p[b] || `${b}`, v, f, 0, g, Xe);
      }
      const S = g * 1.8, H = y * 1.2, C = y * 1.2;
      for (let b = 0; b < t.length - 1; b++) {
        const f = t[b], v = t[b + 1], M = Math.abs(v - f), L = (f + v) / 2, N = `${M.toFixed(2)} m`;
        w ? (jo(N, L, 0, -H, S, Xe), Do(f, 0, -H * 0.7, v, 0, -H * 0.7, 16763904, Xe)) : (jo(N, L, u - C, 0, S, Xe), Do(f, u - C * 0.7, 0, v, u - C * 0.7, 0, 16763904, Xe));
      }
      if (!w) for (let b = 0; b < o.length - 1; b++) {
        const f = o[b], v = o[b + 1], M = Math.abs(v - f), L = (f + v) / 2, N = `${M.toFixed(2)} m`;
        jo(N, r - H, L, 0, S, Xe), Do(r - H * 0.7, f, 0, r - H * 0.7, v, 0, 16763904, Xe);
      }
      Xe.traverse((b) => {
        b.material && (Array.isArray(b.material) ? b.material.forEach((f) => {
          f.clippingPlanes = [];
        }) : b.material.clippingPlanes = []);
      }), i.scene.add(Xe), i.render();
    }
    function jo(t, o, n, l, s, i) {
      const r = document.createElement("canvas"), c = 256, u = 64;
      r.width = c, r.height = u;
      const d = r.getContext("2d");
      d.fillStyle = "rgba(0,0,0,0.75)";
      const a = 8;
      d.beginPath(), d.moveTo(a, 0), d.lineTo(c - a, 0), d.quadraticCurveTo(c, 0, c, a), d.lineTo(c, u - a), d.quadraticCurveTo(c, u, c - a, u), d.lineTo(a, u), d.quadraticCurveTo(0, u, 0, u - a), d.lineTo(0, a), d.quadraticCurveTo(0, 0, a, 0), d.closePath(), d.fill(), d.fillStyle = "#ffcc00", d.font = "bold 36px monospace", d.textAlign = "center", d.textBaseline = "middle", d.fillText(t, c / 2, u / 2);
      const m = new aa(r);
      m.minFilter = la;
      const $ = new bn({
        map: m,
        transparent: true,
        depthTest: false
      }), y = new mn($);
      y.position.set(o, n, l);
      const x = c / u;
      y.scale.set(s * x, s, 1), y.renderOrder = 999, i.add(y);
    }
    function Do(t, o, n, l, s, i, r, c) {
      const u = [
        new ue(t, o, n),
        new ue(l, s, i)
      ], d = new Kt().setFromPoints(u), a = new wo({
        color: r,
        transparent: true,
        opacity: 0.6,
        depthTest: false
      }), m = new un(d, a);
      m.renderOrder = 998, c.add(m);
    }
    function Wo(t, o, n, l, s, i, r, c) {
      const u = new Kt().setFromPoints([
        new ue(t, o, n),
        new ue(l, s, i)
      ]), d = new ps({
        color: r,
        dashSize: 0.15 * Math.max(Math.abs(l - t), Math.abs(s - o), Math.abs(i - n), 0.1),
        gapSize: 0.1 * Math.max(Math.abs(l - t), Math.abs(s - o), Math.abs(i - n), 0.1),
        transparent: true,
        opacity: 0.6
      }), a = new un(u, d);
      a.computeLineDistances(), c.add(a);
    }
    function Jo(t, o, n, l, s, i) {
      const r = document.createElement("canvas"), c = 128;
      r.width = c, r.height = c;
      const u = r.getContext("2d");
      u.beginPath(), u.arc(c / 2, c / 2, c * 0.42, 0, Math.PI * 2), u.fillStyle = "rgba(255,255,255,0.9)", u.fill(), u.lineWidth = c * 0.04, u.strokeStyle = "#555", u.stroke(), u.fillStyle = "#222", u.font = `bold ${c * 0.45}px Arial`, u.textAlign = "center", u.textBaseline = "middle", u.fillText(t, c / 2, c / 2 + c * 0.02);
      const d = new us(r);
      d.needsUpdate = true;
      const a = new bn({
        map: d,
        depthTest: false,
        transparent: true
      }), m = new mn(a);
      m.position.set(o, n, l);
      const $ = s * 2;
      m.scale.set($, $, 1), m.renderOrder = 100, i.add(m);
    }
    const ze = {
      addNode(t, o, n) {
        const l = [
          ...e.nodes.val
        ], s = l.length;
        return l.push([
          t,
          o,
          n
        ]), e.nodes.val = l, console.log(`Node ${s} at (${t}, ${o}, ${n})`), Le(), s;
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
          const i = l > t ? l - 1 : l, r = s > t ? s - 1 : s;
          return l === t || s === t ? null : [
            i,
            r
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
        var _a, _b, _c, _d, _e2, _f;
        const t = e.nodes.val.length, o = e.elements.val.length, n = ((_c = (_b = (_a = e.nodeInputs) == null ? void 0 : _a.val) == null ? void 0 : _b.supports) == null ? void 0 : _c.size) || 0, l = ((_f = (_e2 = (_d = e.nodeInputs) == null ? void 0 : _d.val) == null ? void 0 : _e2.loads) == null ? void 0 : _f.size) || 0;
        return console.log(`Model: ${t} nodes, ${o} elements, ${n} supports, ${l} loads`), {
          nodes: t,
          elements: o,
          supports: n,
          loads: l
        };
      },
      clear() {
        e.nodes.val = [], e.elements.val = [], e.nodeInputs && (e.nodeInputs.val = {}), e.elementInputs && (e.elementInputs.val = {}), xe = /* @__PURE__ */ new Set(), ke = /* @__PURE__ */ new Set(), Pe = /* @__PURE__ */ new Map(), Ke = /* @__PURE__ */ new Map(), _t = [], At = [], wn();
        const t = re.querySelector("#cad3d-axis-buttons");
        t && (t.style.display = "none", t.innerHTML = ""), console.log("Model cleared"), Le();
      },
      frame(t, o, n = 0, l = 0) {
        ze.clear();
        const s = [];
        n > 0 && s.push(-n);
        let i = 0;
        s.push(i);
        for (const x of t) i += x, s.push(i);
        l > 0 && s.push(i + l);
        const r = [
          0
        ];
        let c = 0;
        for (const x of o) c += x, r.push(c);
        const u = (x) => n > 0 && x === 0 || l > 0 && x === s.length - 1, d = {}, a = [];
        for (let x = 0; x < r.length; x++) for (let p = 0; p < s.length; p++) x === 0 && u(p) || (d[`${p},${x}`] = a.length, a.push([
          s[p],
          0,
          r[x]
        ]));
        const m = [];
        xe = /* @__PURE__ */ new Set(), ke = /* @__PURE__ */ new Set();
        for (let x = 0; x < r.length - 1; x++) for (let p = 0; p < s.length; p++) u(p) || (xe.add(m.length), m.push([
          d[`${p},${x}`],
          d[`${p},${x + 1}`]
        ]));
        for (let x = 1; x < r.length; x++) for (let p = 0; p < s.length - 1; p++) ke.add(m.length), m.push([
          d[`${p},${x}`],
          d[`${p + 1},${x}`]
        ]);
        const $ = /* @__PURE__ */ new Map(), y = Bo();
        for (let x = 0; x < s.length; x++) {
          if (u(x)) continue;
          const p = `${x},0`;
          d[p] !== void 0 && $.set(d[p], [
            ...y
          ]);
        }
        return e.nodes.val = a, e.elements.val = m, e.nodeInputs && (e.nodeInputs.val = {
          supports: $
        }), _t = [
          ...s
        ], At = [
          0
        ], setTimeout(() => {
          Ue(), Mn(s, [
            0
          ]), Wn(), Jn();
        }, 50), Le(), {
          nodes: a.length,
          elements: m.length
        };
      },
      building(t, o, n, l = 3, s = 0, i = 0, r = 0, c = 0, u = 1) {
        ze.clear();
        const d = [];
        s > 0 && d.push(-s), d.push(0);
        for (const f of t) d.push(d[d.length - 1] + f);
        i > 0 && d.push(d[d.length - 1] + i);
        const a = [];
        r > 0 && a.push(-r), a.push(0);
        for (const f of o) a.push(a[a.length - 1] + f);
        c > 0 && a.push(a[a.length - 1] + c);
        const m = [
          0
        ];
        for (const f of n) m.push(m[m.length - 1] + f);
        const $ = (f) => s > 0 && f === 0 || i > 0 && f === d.length - 1, y = (f) => r > 0 && f === 0 || c > 0 && f === a.length - 1, x = (f, v) => $(f) || y(v), p = [], g = {};
        for (let f = 0; f < m.length; f++) for (let v = 0; v < a.length; v++) for (let M = 0; M < d.length; M++) f === 0 && x(M, v) || (g[`${M},${v},${f}`] = p.length, p.push([
          d[M],
          a[v],
          m[f]
        ]));
        const w = p.length, z = [];
        xe = /* @__PURE__ */ new Set(), ke = /* @__PURE__ */ new Set(), Pe = /* @__PURE__ */ new Map();
        const S = [];
        for (let f = 0; f < m.length - 1; f++) for (let v = 0; v < a.length; v++) for (let M = 0; M < d.length; M++) x(M, v) || S.push({
          el: [
            g[`${M},${v},${f}`],
            g[`${M},${v},${f + 1}`]
          ],
          floor: f
        });
        for (const { el: [f, v], floor: M } of S) {
          if (u <= 1) {
            xe.add(z.length), Pe.set(z.length, M), z.push([
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
            ]), xe.add(z.length), Pe.set(z.length, M), z.push([
              q,
              _
            ]), q = _;
          }
          xe.add(z.length), Pe.set(z.length, M), z.push([
            q,
            v
          ]);
        }
        Ke = /* @__PURE__ */ new Map();
        const H = [];
        for (let f = 1; f < m.length; f++) for (let v = 0; v < a.length; v++) for (let M = 0; M < d.length - 1; M++) H.push({
          el: [
            g[`${M},${v},${f}`],
            g[`${M + 1},${v},${f}`]
          ],
          floor: f - 1,
          dir: "x",
          bay: M
        });
        for (let f = 1; f < m.length; f++) for (let v = 0; v < d.length; v++) for (let M = 0; M < a.length - 1; M++) H.push({
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
            const G = Y / l, Q = p.length;
            p.push([
              q[0] + (I[0] - q[0]) * G,
              q[1] + (I[1] - q[1]) * G,
              q[2] + (I[2] - q[2]) * G
            ]);
            const W = z.length;
            ke.add(W), Pe.set(W, M), Ke.set(W, {
              dir: L,
              bay: N
            }), z.push([
              P,
              Q
            ]), P = Q;
          }
          const _ = z.length;
          ke.add(_), Pe.set(_, M), Ke.set(_, {
            dir: L,
            bay: N
          }), z.push([
            P,
            v
          ]);
        }
        if (Yt = /* @__PURE__ */ new Set(), at && tt > 0) {
          const f = (v, M, L) => {
            for (let q = 0; q < p.length; q++) if (Math.abs(p[q][0] - v) < 1e-6 && Math.abs(p[q][1] - M) < 1e-6 && Math.abs(p[q][2] - L) < 1e-6) return q;
            const N = p.length;
            return p.push([
              v,
              M,
              L
            ]), N;
          };
          for (let v = 1; v < m.length; v++) if (yt === "x") for (let M = 0; M < a.length - 1; M++) {
            const L = a[M], N = a[M + 1];
            for (let q = 1; q <= tt; q++) {
              const I = L + q / (tt + 1) * (N - L), P = [];
              for (let _ = 0; _ < d.length; _++) P.push(f(d[_], I, m[v]));
              for (let _ = 0; _ < d.length - 1; _++) {
                const Y = z.length;
                Yt.add(Y), ke.add(Y), Pe.set(Y, v - 1), Ke.set(Y, {
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
              for (let _ = 0; _ < a.length; _++) P.push(f(I, a[_], m[v]));
              for (let _ = 0; _ < a.length - 1; _++) {
                const Y = z.length;
                Yt.add(Y), ke.add(Y), Pe.set(Y, v - 1), Ke.set(Y, {
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
        for (let f = 0; f < a.length; f++) for (let v = 0; v < d.length; v++) x(v, f) || C.set(g[`${v},${f},0`], [
          ...b
        ]);
        Fe = /* @__PURE__ */ new Set();
        for (const f of Ae) {
          const v = m.length - 1, M = f.floors.includes(-1) ? Array.from({
            length: v
          }, (L, N) => N) : f.floors.filter((L) => L < v);
          for (const L of M) {
            let N, q, I, P;
            f.dir === "x" ? (N = f.bay, I = f.bay + 1, q = f.axisIdx, P = f.axisIdx) : (N = f.axisIdx, I = f.axisIdx, q = f.bay, P = f.bay + 1);
            const _ = g[`${N},${q},${L}`], Y = g[`${N},${q},${L + 1}`];
            let G, Q;
            if (f.dir === "x" ? (G = g[`${I},${P},${L}`], Q = g[`${I},${P},${L + 1}`]) : (G = g[`${I},${P},${L}`], Q = g[`${I},${P},${L + 1}`]), _ === void 0 || G === void 0 || Y === void 0 || Q === void 0) continue;
            const W = st, D = Ye, K = p[_], ce = p[G], Me = p[Y], $e = p[Q], U = [];
            for (let le = 0; le <= D; le++) {
              const pe = [], te = le / D;
              for (let ge = 0; ge <= W; ge++) {
                const we = ge / W, Te = (1 - te) * ((1 - we) * K[0] + we * ce[0]) + te * ((1 - we) * Me[0] + we * $e[0]), V = (1 - te) * ((1 - we) * K[1] + we * ce[1]) + te * ((1 - we) * Me[1] + we * $e[1]), fe = (1 - te) * ((1 - we) * K[2] + we * ce[2]) + te * ((1 - we) * Me[2] + we * $e[2]);
                le === 0 && ge === 0 ? pe.push(_) : le === 0 && ge === W ? pe.push(G) : le === D && ge === 0 ? pe.push(Y) : le === D && ge === W ? pe.push(Q) : (pe.push(p.length), p.push([
                  Te,
                  V,
                  fe
                ]));
              }
              U.push(pe);
            }
            for (let le = 0; le < D; le++) for (let pe = 0; pe < W; pe++) {
              const te = U[le][pe], ge = U[le][pe + 1], we = U[le + 1][pe + 1], Te = U[le + 1][pe], V = z.length;
              Fe.add(V), Pe.set(V, L), z.push([
                te,
                ge,
                we,
                Te
              ]);
            }
            if (L === 0) for (let le = 0; le <= W; le++) {
              const pe = U[0][le];
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
            for (let I = 0; I < d.length - 1; I++) for (let P = 0; P < a.length - 1; P++) {
              const _ = d[I], Y = d[I + 1], G = a[P], Q = a[P + 1], W = [];
              for (let D = 0; D <= v; D++) {
                const K = [];
                for (let ce = 0; ce <= f; ce++) {
                  const Me = _ + ce / f * (Y - _), $e = G + D / v * (Q - G);
                  if (D === 0 && ce === 0) K.push(g[`${I},${P},${N}`]);
                  else if (D === 0 && ce === f) K.push(g[`${I + 1},${P},${N}`]);
                  else if (D === v && ce === 0) K.push(g[`${I},${P + 1},${N}`]);
                  else if (D === v && ce === f) K.push(g[`${I + 1},${P + 1},${N}`]);
                  else {
                    const U = L(Me, $e, q), le = M.get(U);
                    if (le !== void 0) K.push(le);
                    else {
                      const pe = p.length;
                      p.push([
                        Me,
                        $e,
                        q
                      ]), M.set(U, pe), K.push(pe);
                    }
                  }
                }
                W.push(K);
              }
              for (let D = 0; D < v; D++) for (let K = 0; K < f; K++) {
                const ce = W[D][K], Me = W[D][K + 1], $e = W[D + 1][K + 1], U = W[D + 1][K], le = z.length;
                Oo.add(le), Pe.set(le, N - 1), z.push([
                  ce,
                  Me,
                  $e,
                  U
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
          ...a
        ], setTimeout(() => {
          Ue(), Mn(d, a), Wn(), Jn();
        }, 50), Le(), {
          nodes: p.length,
          elements: z.length,
          nJointNodes: w
        };
      },
      galpon(t = 12, o = 20, n = 6, l = 3, s = 8, i = 4) {
        ze.clear();
        const r = [], c = [], u = (y) => n + l * (1 - Math.pow(2 * y / t - 1, 2)), d = [], a = i + 1;
        for (let y = 0; y < a; y++) {
          const x = [], p = o / i * y;
          x.push(r.length), r.push([
            0,
            p,
            0
          ]), x.push(r.length), r.push([
            t,
            p,
            0
          ]), x.push(r.length), r.push([
            0,
            p,
            n
          ]);
          for (let g = 1; g < s; g++) {
            const w = t / s * g;
            x.push(r.length), r.push([
              w,
              p,
              u(w)
            ]);
          }
          x.push(r.length), r.push([
            t,
            p,
            n
          ]), d.push(x);
        }
        for (let y = 0; y < a; y++) {
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
        for (let y = 0; y < i; y++) for (let x = 2; x < d[0].length; x++) c.push([
          d[y][x],
          d[y + 1][x]
        ]);
        for (let y = 0; y < i; y++) for (let x = 2; x < d[0].length - 1; x += 2) c.push([
          d[y][x],
          d[y + 1][x + 1]
        ]);
        const m = /* @__PURE__ */ new Map(), $ = Bo();
        for (let y = 0; y < a; y++) m.set(d[y][0], [
          ...$
        ]), m.set(d[y][1], [
          ...$
        ]);
        return e.nodes.val = r, e.elements.val = c, e.nodeInputs && (e.nodeInputs.val = {
          supports: m
        }), Le(), {
          nodes: r.length,
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
            Ie("edificio"), ve.colMat = 0, ve.vigaMat = 0, ve.colShape = 0, Ae = [], ht = false, at = false, ae();
            break;
          }
          case "edif-acero":
          case "edificio-acero": {
            Ie("edificio"), ve.colMat = 1, ve.vigaMat = 1, ve.steelColType = 0, ve.steelVigaType = 0, Ae = [], at = true, tt = 2;
            const o = ee.reduce((l, s) => l + s, 0) / ee.length, n = oe.reduce((l, s) => l + s, 0) / oe.length;
            yt = o >= n ? "y" : "x", ht = true, $t = 0.08, ae();
            break;
          }
          case "edif-muros":
          case "edificio-muros": {
            Ie("edificio"), ve.colMat = 0, ve.vigaMat = 0, ve.colShape = 0, at = false;
            const o = Math.round(((_a = Z.nVanosX) == null ? void 0 : _a.val) ?? 2), n = Math.round(((_b = Z.nVanosY) == null ? void 0 : _b.val) ?? 2);
            Ae = [
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
            Ie("edificio"), ve.colMat = 2, ve.vigaMat = 0, at = false;
            const o = Math.round(((_c = Z.nVanosX) == null ? void 0 : _c.val) ?? 2), n = Math.round(((_d = Z.nVanosY) == null ? void 0 : _d.val) ?? 2);
            Ae = [
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
            Ie("edificio"), Z.nPisos && (Z.nPisos.val = 1), Z.hPiso && (Z.hPiso.val = 4.5), Z.nVanosX && (Z.nVanosX.val = 3), Z.nVanosY && (Z.nVanosY.val = 2), Z.nSubViga && (Z.nSubViga.val = 3), ee = [
              6,
              6,
              6
            ], oe = [
              5,
              5
            ], ve.colMat = 1, ve.vigaMat = 1, ve.steelColType = 0, ve.steelVigaType = 0, Ae = [], at = true, tt = 2, yt = ee[0] >= oe[0] ? "y" : "x", ht = true, $t = 0.08, bo = 3, xo = 3, ae();
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
            ze.clear(), Ie("eiffel"), ts();
            break;
          }
          case "arco":
          case "arco-gateway": {
            ze.clear(), Ie("arco"), os();
            break;
          }
          case "puente":
          case "puente-colgante": {
            ze.clear(), Ie("puente"), ns();
            break;
          }
          case "twisted":
          case "torre-twisted":
          case "turning-torso": {
            ze.clear(), Ie("twisted"), ss();
            break;
          }
          case "burj":
          case "burj-khalifa": {
            ze.clear(), Ie("burj"), as();
            break;
          }
          case "opera":
          case "sydney-opera": {
            ze.clear(), Ie("opera"), ls();
            break;
          }
          case "diagrid":
          case "gherkin": {
            ze.clear(), Ie("diagrid"), rs();
            break;
          }
          default:
            console.error(`Ejemplo desconocido: "${t}".`);
        }
      },
      plateQ4(t = 10, o = 10, n = 16, l = 16, s = "simply-supported", i = -10, r = 0.2, c = 3e7, u = 0.3, d = 0) {
        console.log(`Plate Q4 [${[
          "Mindlin (gruesa)",
          "Kirchhoff (delgada)",
          "Membrane"
        ][d]}]: ${t}\xD7${o}, ${n}\xD7${l} elem, BC=${s}, q=${i}, t=${r}`);
        const m = performance.now(), $ = fn({
          E: c,
          nu: u,
          thickness: r,
          meshLx: t,
          meshLy: o,
          meshNx: n,
          meshNy: l,
          bcType: s,
          pressure: i,
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
        if (Math.abs(i) > 1e-30) {
          const S = i * t * o / x.length;
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
        return setTimeout(() => Ue(), 50), Le(), $;
      },
      set(t, o) {
        Z[t] ? (Z[t].val = o, console.log(`${t} = ${o}`), Mt(), ae()) : qe[t] ? (qe[t].val = o, console.log(`${t} = ${o}`), Mt(), ae()) : console.error(`Par\xE1metro "${t}" no encontrado. Disponibles: ${Object.keys({
          ...Z,
          ...qe
        }).join(", ")}`);
      },
      get(t) {
        if (!t) {
          const o = {};
          for (const l in Z) o[l] = Z[l].val;
          for (const l in qe) o[l] = qe[l].val;
          o.plateTheory = mt, o.supportType = lt;
          const n = Fo()[E];
          return n && n[lt] && (o.supportLabel = n[lt].label), console.table(o), o;
        }
        if (Z[t]) return Z[t].val;
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
        t && (h = t), o && (O = o), T = Qt(h, O);
        const n = re.querySelector("#cad3d-force-unit"), l = re.querySelector("#cad3d-length-unit");
        return n && (n.textContent = h), l && (l.textContent = O), E && Ie(E), console.log(`Unidades: ${T.label} | E=${T.E.toExponential(3)} ${T.stress}`), T.id;
      },
      view(t) {
      },
      get mesh() {
        return e;
      }
    };
    function kn() {
      return ia(T);
    }
    function Sn() {
      return ca(T);
    }
    let qe = {};
    function Ie(t) {
      var _a, _b;
      E = t, xs.val = true, lt = 0, Ct && Xo(), Z = {};
      const o = kn()[t];
      if (o) for (const l of o) Z[l.key] = {
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
        const l = Math.round(((_a = Z.nVanosX) == null ? void 0 : _a.val) ?? 2), s = Math.round(((_b = Z.nVanosY) == null ? void 0 : _b.val) ?? 2);
        ee = Array(l).fill(T.defaultSpan), oe = Array(s).fill(T.defaultSpan * 0.8);
      }
      Mt(), setTimeout(() => {
        zs(), ae();
      }, 50);
    }
    function R(t) {
      var _a, _b;
      return ((_a = Z[t]) == null ? void 0 : _a.val) ?? ((_b = qe[t]) == null ? void 0 : _b.val) ?? 0;
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
          const o = Math.round(R("nVanos")), n = R("spanV"), l = Math.round(R("nPisos")), s = R("hPiso");
          ze.frame(Array(o).fill(n), Array(l).fill(s));
          break;
        }
        case "edificio": {
          const o = Math.round(R("nPisos")), n = R("hPiso"), l = R("Lvix") || 0, s = R("Lvdx") || 0, i = R("Lviy") || 0, r = R("Lvdy") || 0, c = Math.max(1, Math.round(R("nSubViga") || 3)), u = Math.max(1, Math.round(R("nSubCol") || 1));
          ze.building([
            ...ee
          ], [
            ...oe
          ], Array(o).fill(n), c, l, s, i, r, u);
          break;
        }
        case "galpon":
          ze.galpon(R("span"), R("length"), R("height"), R("archRise"), Math.round(R("xDiv")), Math.round(R("yDiv")));
          break;
        case "barra":
          hs();
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
          ts();
          break;
        case "arco":
          os();
          break;
        case "puente":
          ns();
          break;
        case "twisted":
          ss();
          break;
        case "burj":
          as();
          break;
        case "opera":
          ls();
          break;
        case "diagrid":
          rs();
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
        if (se.size > 0 || X.size > 0 || B) {
          const o = e.elements.val, n = o.filter((l, s) => !(se.has(s) || X.has(s) || B && !de.has(s)));
          n.length !== o.length && (e.elements.val = n);
        }
        setTimeout(() => {
          Ht(), Ko();
        }, 30);
      }
    }
    function zn() {
      const t = R("span"), o = Math.round(R("divisions")), n = R("height"), l = t / o, s = [], i = [];
      for (let a = 0; a <= o; a++) s.push([
        l * a,
        0,
        0
      ]);
      for (let a = 0; a <= o; a++) s.push([
        l * a,
        0,
        n
      ]);
      const r = o + 1;
      for (let a = 0; a < o; a++) i.push([
        a,
        a + 1
      ]);
      for (let a = 0; a < o; a++) i.push([
        r + a,
        r + a + 1
      ]);
      for (let a = 0; a <= o; a++) i.push([
        a,
        r + a
      ]);
      for (let a = 0; a < o; a++) a < o / 2 ? i.push([
        a,
        r + a + 1
      ]) : i.push([
        r + a,
        a + 1
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
      if (u !== 0) for (let a = 0; a <= o; a++) d.set(a, [
        0,
        0,
        u,
        0,
        0,
        0
      ]);
      e.nodes.val = s, e.elements.val = i, e.nodeInputs && (e.nodeInputs.val = {
        supports: c,
        loads: d
      }), Le();
    }
    function En() {
      const t = R("width"), o = R("height"), n = R("Ex") ?? 0, l = (R("CM") ?? 0) + (R("CV") ?? 0), s = Math.max(1, Math.round(R("nSub") || 4)), i = [
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
      ], r = [];
      r.push([
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
      for (let m = 1; m < s; m++) {
        const $ = m / s, y = i.length;
        i.push([
          c[0] + (u[0] - c[0]) * $,
          c[1] + (u[1] - c[1]) * $,
          c[2] + (u[2] - c[2]) * $
        ]), r.push([
          d,
          y
        ]), d = y;
      }
      r.push([
        d,
        2
      ]);
      const a = /* @__PURE__ */ new Map();
      if (n !== 0 && l === 0) a.set(2, [
        n,
        0,
        0,
        0,
        0,
        0
      ]);
      else if (l !== 0 && n === 0) for (let m = 1; m < i.length; m++) m === 0 || m === 3 || a.set(m, [
        0,
        0,
        l,
        0,
        0,
        0
      ]);
      else if (n !== 0 && l !== 0) for (let m = 1; m < i.length; m++) m === 0 || m === 3 || a.set(m, [
        m === 2 ? n : 0,
        0,
        l,
        0,
        0,
        0
      ]);
      e.nodes.val = i, e.elements.val = r, e.nodeInputs && (e.nodeInputs.val = {
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
        loads: a
      }), Le();
    }
    function In() {
      const t = R("dx"), o = R("dy"), n = R("dz"), l = Math.round(R("stories")), s = Math.max(1, Math.round(R("nSub") || 3)), i = [];
      for (let p = 0; p <= l; p++) i.push([
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
      const r = i.length, c = [
        ...i
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
        const w = i[p], z = i[g];
        let S = p;
        for (let H = 1; H < s; H++) {
          const C = H / s, b = c.length;
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
      const a = /* @__PURE__ */ new Map();
      for (let p = 0; p < 4; p++) a.set(p, [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
      const m = R("Ex") ?? 0, $ = (R("CM") ?? 0) + (R("CV") ?? 0), y = r - 2, x = /* @__PURE__ */ new Map();
      if (m !== 0 && $ === 0) x.set(y, [
        m,
        0,
        0,
        0,
        0,
        0
      ]);
      else if ($ !== 0 && m === 0) for (let p = 0; p < c.length; p++) a.has(p) || x.set(p, [
        0,
        0,
        $,
        0,
        0,
        0
      ]);
      else if (m !== 0 && $ !== 0) for (let p = 0; p < c.length; p++) a.has(p) || x.set(p, [
        p === y ? m : 0,
        0,
        $,
        0,
        0,
        0
      ]);
      e.nodes.val = c, e.elements.val = u, e.nodeInputs && (e.nodeInputs.val = {
        supports: a,
        loads: x
      }), Le();
    }
    function hs() {
      const t = R("L"), o = Math.round(R("nElem")), n = R("F"), l = t / o, s = [], i = [];
      for (let u = 0; u <= o; u++) s.push([
        l * u,
        0,
        0
      ]);
      for (let u = 0; u < o; u++) i.push([
        u,
        u + 1
      ]);
      const r = /* @__PURE__ */ new Map([
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
      e.nodes.val = s, e.elements.val = i, e.nodeInputs && (e.nodeInputs.val = {
        supports: r,
        loads: c
      }), Le();
    }
    function Ln() {
      const t = R("Lx") || 15, o = R("Ly") || 10, n = R("meshSize") || 0.5, l = R("q") || -3, s = R("t") || 1, i = R("E") || 3e7, r = R("nu") || 0.3, c = i / (2 * (1 + r)), u = mt === 1 ? "Membrana" : mt === 2 ? "Kirchhoff" : "Mindlin", { nodes: d, elements: a, boundaryIndices: m } = Ft({
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
      e.nodes.val = d, e.elements.val = a, e.nodeInputs && (e.nodeInputs.val = {
        supports: x,
        loads: p
      }), e.elementInputs && (e.elementInputs.val = {
        elasticities: new Map(a.map((g, w) => [
          w,
          i
        ])),
        elasticitiesOrthogonal: new Map(a.map((g, w) => [
          w,
          i
        ])),
        thicknesses: new Map(a.map((g, w) => [
          w,
          s
        ])),
        poissonsRatios: new Map(a.map((g, w) => [
          w,
          r
        ])),
        shearModuli: new Map(a.map((g, w) => [
          w,
          c
        ]))
      });
      try {
        const g = ut(d, a, e.nodeInputs.val, e.elementInputs.val);
        g && e.deformOutputs && (e.deformOutputs.val = g);
        const w = po(d, a, e.elementInputs.val, g);
        w && e.analyzeOutputs && (e.analyzeOutputs.val = w), console.log(`Plate 3Q [${u}]: ${d.length} nodes, ${a.length} triangles, t=${s}, E=${i}, \u03BD=${r}`);
      } catch (g) {
        console.warn("Plate 3Q analysis failed:", g.message);
      }
      setTimeout(() => Ue(), 50), Le();
    }
    function qn() {
      const t = R("Lx") || 10, o = R("Ly") || 10, n = Math.round(R("nx") || 16), l = Math.round(R("ny") || 16), s = R("t") || 0.2, i = R("q") || -10, r = R("E") || 3e7, c = R("nu") || 0.3, u = lt === 1 ? "clamped" : "simply-supported", a = {
        1: 2,
        2: 1,
        3: 0
      }[mt] ?? 0;
      return ze.plateQ4(t, o, n, l, u, i, s, r, c, a);
    }
    function Tn() {
      const t = R("a") || 6, o = R("b") || 4, n = Math.round(R("nx") || 12), l = Math.round(R("ny") || 8), s = R("t") || 0.1, i = R("q") || -10, r = R("E") || 35e6, c = R("nu") || 0.15, d = {
        1: 2,
        2: 1,
        3: 0
      }[mt] ?? 0, a = ze.plateQ4(t, o, n, l, "simply-supported", i, s, r, c, d), m = r * s * s * s / (12 * (1 - c * c));
      let $ = 0;
      for (let y = 1; y <= 19; y += 2) for (let x = 1; x <= 19; x += 2) {
        const p = y * y / (t * t) + x * x / (o * o);
        $ += 1 / (y * x * p * p);
      }
      if ($ *= 16 * Math.abs(i) / (Math.PI ** 6 * m), console.log(`\u{1F4D0} Navier anal\xEDtico w_center = ${$.toExponential(6)}`), a) {
        const y = Math.abs((Math.abs(a.centerW || 0) - $) / $ * 100);
        console.log(`   WASM w_center = ${(a.centerW || 0).toExponential(6)}, error = ${y.toFixed(2)}%`);
      }
      return a;
    }
    function Fn() {
      const t = R("t") || 0.2, o = R("q") || -10, n = R("E") || 35e6, l = R("nu") || 0.2, s = R("meshSize") || 0.6, i = [
        3.6,
        4.2,
        4.2,
        3.6
      ], r = [
        3,
        3.6,
        3
      ], c = i.reduce((q, I) => q + I, 0), u = r.reduce((q, I) => q + I, 0), d = [
        0
      ];
      for (const q of i) d.push(d[d.length - 1] + q);
      const a = [
        0
      ];
      for (const q of r) a.push(a[a.length - 1] + q);
      const m = Math.max(2, Math.round(c / s)), $ = Math.max(2, Math.round(u / s)), y = c / m, x = u / $, p = [];
      for (let q = 0; q <= $; q++) for (let I = 0; I <= m; I++) p.push([
        I * y,
        q * x
      ]);
      const g = [], w = /* @__PURE__ */ new Set();
      for (const q of d) for (const I of a) {
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
      setTimeout(() => Ue(), 50), Le();
    }
    function Pn() {
      const t = R("L") || 4, o = R("H") || 2, n = R("t") || 0.1, l = R("E") || 2e7, s = R("nu") || 0.2, i = l / (2 * (1 + s)), r = R("q") || -100, c = R("b") || 0.8, u = R("meshSize") || 0.2, { nodes: d, elements: a, boundaryIndices: m } = Ft({
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
      const z = r * c / Math.max(w.length, 1), S = /* @__PURE__ */ new Map();
      for (const b of w) S.set(b, [
        0,
        z,
        0,
        0,
        0,
        0
      ]);
      const H = {
        elasticities: new Map(a.map((b, f) => [
          f,
          l
        ])),
        elasticitiesOrthogonal: new Map(a.map((b, f) => [
          f,
          l
        ])),
        thicknesses: new Map(a.map((b, f) => [
          f,
          n
        ])),
        poissonsRatios: new Map(a.map((b, f) => [
          f,
          s
        ])),
        shearModuli: new Map(a.map((b, f) => [
          f,
          i
        ]))
      }, C = {
        supports: x,
        loads: S
      };
      try {
        const b = ut($, a, C, H), f = po($, a, H, b), v = $.map((L) => [
          L[0],
          0,
          L[1]
        ]);
        if (e.nodes.val = v, e.elements.val = a, b && b.deformations) {
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
        }), console.log(`Viga Alta: ${$.length} nodos, ${a.length} triangulos`), console.log(`  L=${t}, H=${o}, t=${n}, E=${l}, nu=${s}`), console.log(`  Carga: q=${r} kN/m sobre ${c}m central`), console.log(`  max|u| = ${M.toExponential(4)}`);
      } catch (b) {
        console.warn("Viga Alta analysis failed:", b.message);
      }
      setTimeout(() => Ue(), 50), Le();
    }
    function Cn() {
      const t = R("H") || 4, o = R("B") || 3, n = R("tw") || 0.3, l = R("tb") || 0.4, s = R("meshSize") || 0.2, i = R("E") || 25e6, r = R("nu") || 0.2, c = i / (2 * (1 + r)), u = R("gamma") || 18, d = R("Ka") || 0.33, a = R("Es") || 5e4, m = R("nus") || 0.3, $ = a / (2 * (1 + m)), y = R("kn") || 1e6, x = R("ks") || 1e4, p = R("gammaW") || 9.81, g = R("Hw") || 3.5, w = R("qs") || 0, z = lt, S = o * 0.3, H = o * 0.7, C = [
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
          maxMeshSize: s
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
          Math.abs(Y - n) < s * 0.6 && G >= l - 1e-6 && P.push({
            idx: _,
            y: G
          });
        }
        P.sort((_, Y) => _.y - Y.y);
        for (let _ = 0; _ < P.length; _++) {
          const { idx: Y, y: G } = P[_], Q = l + t - G, W = d * u * Q + d * w;
          let D = s;
          _ > 0 && _ < P.length - 1 ? D = (P[_ + 1].y - P[_ - 1].y) / 2 : _ === 0 && P.length > 1 ? D = (P[1].y - P[0].y) / 2 : _ === P.length - 1 && P.length > 1 && (D = (P[_].y - P[_ - 1].y) / 2);
          const K = W * D;
          Math.abs(K) > 1e-10 && M.set(Y, [
            K,
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
            i
          ])),
          elasticitiesOrthogonal: new Map(f.map((_, Y) => [
            Y,
            i
          ])),
          thicknesses: new Map(f.map((_, Y) => [
            Y,
            n
          ])),
          poissonsRatios: new Map(f.map((_, Y) => [
            Y,
            r
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
          ], Y = Math.max(3, Math.ceil((P - l) / s)), G = [];
          for (let V = 0; V <= Y; V++) G.push([
            n,
            l + V * (P - l) / Y,
            0
          ]);
          const Q = Ft({
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
            maxMeshSize: s
          });
          b = Q.nodes, f = Q.elements;
          const W = s * 0.4, D = [];
          for (let V = 0; V < b.length; V++) {
            const fe = b[V][0], Se = b[V][1];
            Math.abs(fe - n) < W && Se >= l - W && D.push(V);
          }
          D.sort((V, fe) => b[V][1] - b[fe][1]);
          const K = [
            D[0]
          ];
          for (let V = 1; V < D.length; V++) {
            const fe = b[D[V]][1] - b[K[K.length - 1]][1];
            Math.abs(fe) > s * 0.05 && K.push(D[V]);
          }
          D.length = 0, D.push(...K);
          const ce = /* @__PURE__ */ new Map();
          for (const V of D) {
            const fe = b.length;
            b.push([
              b[V][0],
              b[V][1],
              b[V][2]
            ]), ce.set(V, fe);
          }
          const Me = f.length, $e = [];
          for (let V = 0; V < Me; V++) {
            const fe = f[V], Se = (b[fe[0]][0] + b[fe[1]][0] + b[fe[2]][0]) / 3, Re = (b[fe[0]][1] + b[fe[1]][1] + b[fe[2]][1]) / 3, Ve = Se >= -S && Se <= H && Re >= 0 && Re <= l, co = Se >= 0 && Se <= n && Re >= l && Re <= l + t, Dt = Ve || co;
            if ($e.push(!Dt), !Dt) for (let Et = 0; Et < fe.length; Et++) {
              const qt = ce.get(fe[Et]);
              qt !== void 0 && (fe[Et] = qt);
            }
          }
          const U = f.length;
          for (let V = 0; V < D.length - 1; V++) {
            const fe = D[V], Se = D[V + 1], Re = ce.get(fe), Ve = ce.get(Se);
            f.push([
              Se,
              fe,
              Re,
              Ve
            ]);
          }
          const le = f.length - U, pe = /* @__PURE__ */ new Map(), te = /* @__PURE__ */ new Map(), ge = /* @__PURE__ */ new Map(), we = /* @__PURE__ */ new Map(), Te = /* @__PURE__ */ new Map();
          for (let V = 0; V < Me; V++) $e[V] ? (pe.set(V, a), te.set(V, a), we.set(V, m), Te.set(V, $), ge.set(V, 1)) : (pe.set(V, i), te.set(V, i), we.set(V, r), Te.set(V, c), ge.set(V, 1));
          for (let V = U; V < f.length; V++) pe.set(V, y), te.set(V, 0), we.set(V, 0), Te.set(V, x), ge.set(V, 0);
          L = {
            elasticities: pe,
            elasticitiesOrthogonal: te,
            thicknesses: ge,
            poissonsRatios: we,
            shearModuli: Te
          };
          for (let V = 0; V < b.length; V++) {
            const fe = b[V][0], Se = b[V][1];
            Math.abs(Se) < 1e-6 ? v.set(V, [
              true,
              true,
              true,
              true,
              true,
              true
            ]) : Math.abs(fe - I) < s * 0.1 && v.set(V, [
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
            const fe = f[V], Se = b[fe[0]], Re = b[fe[1]], Ve = b[fe[2]], co = Math.abs((Re[0] - Se[0]) * (Ve[1] - Se[1]) - (Ve[0] - Se[0]) * (Re[1] - Se[1])) / 2, Dt = -u * co / 3;
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
              const Se = b[fe][0], Re = b[fe][1];
              Math.abs(Re - P) < s * 0.1 && Se > n - 1e-6 && V.push({
                idx: fe,
                x: Se
              });
            }
            V.sort((fe, Se) => fe.x - Se.x);
            for (let fe = 0; fe < V.length; fe++) {
              let Se = s;
              fe > 0 && fe < V.length - 1 ? Se = (V[fe + 1].x - V[fe - 1].x) / 2 : fe === 0 && V.length > 1 ? Se = (V[1].x - V[0].x) / 2 : fe === V.length - 1 && V.length > 1 && (Se = (V[fe].x - V[fe - 1].x) / 2);
              const Re = -w * Se, Ve = M.get(V[fe].idx) || [
                0,
                0,
                0,
                0,
                0,
                0
              ];
              Ve[1] += Re, M.set(V[fe].idx, Ve);
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
            maxMeshSize: s
          });
          b = G.nodes, f = G.elements;
          const Q = (U) => {
            const le = (b[U[0]][0] + b[U[1]][0] + b[U[2]][0]) / 3, pe = (b[U[0]][1] + b[U[1]][1] + b[U[2]][1]) / 3, te = le >= -S && le <= H && pe >= 0 && pe <= l, ge = le >= 0 && le <= n && pe >= l && pe <= l + t;
            return te || ge;
          }, W = /* @__PURE__ */ new Map(), D = /* @__PURE__ */ new Map(), K = /* @__PURE__ */ new Map(), ce = /* @__PURE__ */ new Map(), Me = /* @__PURE__ */ new Map(), $e = [];
          for (let U = 0; U < f.length; U++) {
            const le = Q(f[U]);
            $e.push(!le), le ? (W.set(U, i), D.set(U, i), ce.set(U, r), Me.set(U, c), K.set(U, 1)) : (W.set(U, a), D.set(U, a), ce.set(U, m), Me.set(U, $), K.set(U, 1));
          }
          L = {
            elasticities: W,
            elasticitiesOrthogonal: D,
            thicknesses: K,
            poissonsRatios: ce,
            shearModuli: Me
          };
          for (let U = 0; U < b.length; U++) {
            const le = b[U][0], pe = b[U][1];
            Math.abs(pe) < 1e-6 ? v.set(U, [
              true,
              true,
              true,
              true,
              true,
              true
            ]) : Math.abs(le - I) < s * 0.1 && v.set(U, [
              true,
              false,
              true,
              true,
              true,
              true
            ]);
          }
          for (let U = 0; U < f.length; U++) {
            if (!$e[U]) continue;
            const le = f[U], pe = b[le[0]], te = b[le[1]], ge = b[le[2]], we = Math.abs((te[0] - pe[0]) * (ge[1] - pe[1]) - (ge[0] - pe[0]) * (te[1] - pe[1])) / 2, Te = -u * we / 3;
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
            const U = [];
            for (let le = 0; le < b.length; le++) {
              const pe = b[le][0], te = b[le][1];
              Math.abs(te - P) < s * 0.1 && pe > n - 1e-6 && U.push({
                idx: le,
                x: pe
              });
            }
            U.sort((le, pe) => le.x - pe.x);
            for (let le = 0; le < U.length; le++) {
              let pe = s;
              le > 0 && le < U.length - 1 ? pe = (U[le + 1].x - U[le - 1].x) / 2 : le === 0 && U.length > 1 ? pe = (U[1].x - U[0].x) / 2 : le === U.length - 1 && U.length > 1 && (pe = (U[le].x - U[le - 1].x) / 2);
              const te = -w * pe, ge = M.get(U[le].idx) || [
                0,
                0,
                0,
                0,
                0,
                0
              ];
              ge[1] += te, M.set(U[le].idx, ge);
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
          maxMeshSize: s
        });
        b = I.nodes, f = I.elements;
        for (let Q = 0; Q < b.length; Q++) Math.abs(b[Q][1]) < 1e-6 && v.set(Q, [
          true,
          true,
          true,
          true,
          true,
          true
        ]);
        const P = l + t, _ = Math.min(g, t), Y = P - _, G = [];
        for (let Q = 0; Q < b.length; Q++) {
          const W = b[Q][0], D = b[Q][1];
          Math.abs(W - n) < s * 0.6 && D >= l - 1e-6 && G.push({
            idx: Q,
            y: D
          });
        }
        G.sort((Q, W) => Q.y - W.y);
        for (let Q = 0; Q < G.length; Q++) {
          const { idx: W, y: D } = G[Q], K = Math.max(0, P - D);
          if (K <= 0 || D < Y - 1e-6) continue;
          const ce = Math.min(K, _), Me = p * ce;
          let $e = s;
          Q > 0 && Q < G.length - 1 ? $e = (G[Q + 1].y - G[Q - 1].y) / 2 : Q === 0 && G.length > 1 ? $e = (G[1].y - G[0].y) / 2 : Q === G.length - 1 && G.length > 1 && ($e = (G[Q].y - G[Q - 1].y) / 2);
          const U = Me * $e;
          Math.abs(U) > 1e-10 && M.set(W, [
            U,
            0,
            0,
            0,
            0,
            0
          ]);
        }
        L = {
          elasticities: new Map(f.map((Q, W) => [
            W,
            i
          ])),
          elasticitiesOrthogonal: new Map(f.map((Q, W) => [
            W,
            i
          ])),
          thicknesses: new Map(f.map((Q, W) => [
            W,
            n
          ])),
          poissonsRatios: new Map(f.map((Q, W) => [
            W,
            r
          ])),
          shearModuli: new Map(f.map((Q, W) => [
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
        const I = ut(b, f, N, L), P = f.filter((K) => K.length === 3), _ = {};
        for (const K of Object.keys(L)) {
          const ce = L[K];
          if (ce && ce instanceof Map) {
            const Me = /* @__PURE__ */ new Map();
            let $e = 0;
            for (let U = 0; U < f.length; U++) f[U].length === 3 && (ce.has(U) && Me.set($e, ce.get(U)), $e++);
            _[K] = Me;
          }
        }
        const Y = po(b, P, _, I), G = b.map((K) => [
          K[0],
          0,
          K[1]
        ]);
        if (e.nodes.val = G, e.elements.val = P, I && I.deformations) {
          const K = /* @__PURE__ */ new Map();
          I.deformations.forEach((ce, Me) => {
            K.set(Me, [
              ce[0],
              ce[2],
              ce[1],
              ce[3],
              ce[5],
              ce[4]
            ]);
          }), e.deformOutputs && (e.deformOutputs.val = {
            deformations: K
          });
        }
        const Q = /* @__PURE__ */ new Map();
        v.forEach((K, ce) => Q.set(ce, K));
        const W = /* @__PURE__ */ new Map();
        M.forEach((K, ce) => W.set(ce, [
          K[0],
          K[2],
          K[1],
          K[3],
          K[5],
          K[4]
        ])), e.nodeInputs && (e.nodeInputs.val = {
          supports: Q,
          loads: W
        }), e.elementInputs && (e.elementInputs.val = {}), e.analyzeOutputs && (e.analyzeOutputs.val = {});
        let D = 0;
        I && I.deformations && I.deformations.forEach((K) => {
          const ce = Math.sqrt(K[0] * K[0] + K[1] * K[1] + K[2] * K[2]);
          D = Math.max(D, ce);
        }), console.log(`Muro Contencion [${q[z]}]: ${b.length} nodos, ${f.length} triangulos`), console.log(`  H=${t}, B=${o}, tw=${n}, tb=${l}, Ka=${d}, gamma=${u}, qs=${w}`), z === 1 && console.log(`  Es=${a}, nus=${m}`), z === 2 && console.log(`  Es=${a}, nus=${m}, kn=${y}, ks=${x}`), z === 3 && console.log(`  gammaW=${p}, Hw=${g}`), console.log(`  max|u| = ${D.toExponential(4)}`);
      } catch (I) {
        console.warn("Muro Contencion failed:", I.message);
      }
      setTimeout(() => Ue(), 50), Le();
    }
    function _n() {
      const t = R("Lx") || 2, o = R("Ly") || 2, n = R("t") || 0.5, l = R("colA") || 0.4, s = R("colH") || 1.5, i = Math.round(R("nx") || 8), r = Math.round(R("ny") || 8), c = R("E") || 25e6, u = R("nu") || 0.2, d = R("P") || -500, a = R("Mx") || 0, m = R("My") || 0, $ = R("ks") || 2e4, y = t / i, x = o / r, p = t / 2, g = o / 2, w = l / 2, z = [];
      for (let v = 0; v <= r; v++) for (let M = 0; M <= i; M++) {
        const L = v * (i + 1) + M;
        let N = y, q = x;
        (M === 0 || M === i) && (N = y / 2), (v === 0 || v === r) && (q = x / 2), z.push({
          node: L,
          dof: 0,
          k: $ * N * q
        });
      }
      let S = 0;
      for (let v = 0; v <= r; v++) for (let M = 0; M <= i; M++) Math.abs(M * y - p) <= w + 1e-6 && Math.abs(v * x - g) <= w + 1e-6 && S++;
      const H = d / Math.max(S, 1), C = [];
      for (let v = 0; v <= r; v++) for (let M = 0; M <= i; M++) {
        const L = M * y, N = v * x;
        Math.abs(L - p) <= w + 1e-6 && Math.abs(N - g) <= w + 1e-6 && C.push({
          node: v * (i + 1) + M,
          dof: 0,
          value: H
        });
      }
      if (Math.abs(a) > 1e-6) {
        const v = w > 1e-6 ? w : x, M = a / v;
        for (let L = 0; L <= r; L++) for (let N = 0; N <= i; N++) {
          const q = N * y, I = L * x;
          if (Math.abs(q - p) <= w + 1e-6 && Math.abs(I - g) <= w + 1e-6) {
            const P = I - g;
            if (Math.abs(P) > 1e-6) {
              const _ = P > 0 ? 1 : -1;
              C.push({
                node: L * (i + 1) + N,
                dof: 0,
                value: _ * M / S * 2
              });
            }
          }
        }
      }
      if (Math.abs(m) > 1e-6) {
        const v = w > 1e-6 ? w : y, M = m / v;
        for (let L = 0; L <= r; L++) for (let N = 0; N <= i; N++) {
          const q = N * y, I = L * x;
          if (Math.abs(q - p) <= w + 1e-6 && Math.abs(I - g) <= w + 1e-6) {
            const P = q - p;
            if (Math.abs(P) > 1e-6) {
              const _ = P > 0 ? 1 : -1;
              C.push({
                node: L * (i + 1) + N,
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
      console.log(`Zapata: ${t}x${o}m, t=${n}m, ${i}x${r} elem`), console.log(`  col=${l}m, P=${d}, Mx=${a}, My=${m}, ks=${$}`);
      try {
        const v = fn({
          E: c,
          nu: u,
          thickness: n,
          meshLx: t,
          meshLy: o,
          meshNx: i,
          meshNy: r,
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
          s
        ]), M.push([
          p + w,
          g - w,
          s
        ]), M.push([
          p + w,
          g + w,
          s
        ]), M.push([
          p - w,
          g + w,
          s
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
          const Q = Y.x, W = Y.y;
          (Q < 1e-6 || Q > t - 1e-6 || W < 1e-6 || W > o - 1e-6) && I.set(G, [
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
          const Y = v.elementResults.length, G = /* @__PURE__ */ new Map(), Q = /* @__PURE__ */ new Map(), W = /* @__PURE__ */ new Map();
          v.elementResults.forEach((D, K) => {
            G.set(K, [
              D.Mxx,
              D.Mxx,
              D.Mxx
            ]), Q.set(K, [
              D.Myy,
              D.Myy,
              D.Myy
            ]), W.set(K, [
              D.Mxy,
              D.Mxy,
              D.Mxy
            ]);
          }), e.analyzeOutputs.val = {
            bendingXX: G,
            bendingYY: Q,
            bendingXY: W
          };
        }
        const _ = Ce();
        _ && (_.settings.shellResults.val = "bendingXX");
      } catch (v) {
        console.warn("Zapata solver failed:", v.message);
      }
      setTimeout(() => Ue(), 50), Le();
    }
    function An() {
      const t = R("Lx") || 0.4, o = R("Ly") || 0.4, n = R("t") || 0.025, l = R("dBolt") || 0.022, s = R("sx") || 0.28, i = R("sy") || 0.28, r = R("colA") || 0.2, c = R("meshSize") || 8e-3, u = R("E") || 2e8, d = R("nu") || 0.3, a = u / (2 * (1 + d)), m = R("P") || -200, $ = Math.round(R("nBolts") || 4), y = t / 2, x = o / 2, p = l / 2, g = r / 2, w = [];
      $ >= 4 && (w.push([
        y - s / 2,
        x - i / 2
      ]), w.push([
        y + s / 2,
        x - i / 2
      ]), w.push([
        y + s / 2,
        x + i / 2
      ]), w.push([
        y - s / 2,
        x + i / 2
      ])), $ >= 6 && (w.push([
        y,
        x - i / 2
      ]), w.push([
        y,
        x + i / 2
      ])), $ >= 8 && (w.push([
        y - s / 2,
        x
      ]), w.push([
        y + s / 2,
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
          a
        ]))
      };
      console.log(`Placa Base: ${t * 1e3}x${o * 1e3}mm, t=${n * 1e3}mm, ${$} pernos d=${l * 1e3}mm`), console.log(`  P=${m} kN, col=${r * 1e3}mm, mesh=${c * 1e3}mm`), console.log(`  ${C.length} triangulos, ${b.length} nodos`);
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
      setTimeout(() => Ue(), 50), Le();
    }
    function Hn() {
      const t = R("colB") || 0.3, o = R("colH") || 0.3, n = R("colT") || 8e-3, l = R("colLen") || 1.5, s = R("Lx") || 0.45, i = R("Ly") || 0.45, r = R("tPlaca") || 0.025, c = R("dBolt") || 0.022, u = R("sx") || 0.32, d = R("sy") || 0.32, a = Math.round(R("nSubColV") || 6), m = Math.round(R("nSubColH") || 4), $ = Math.round(R("nSubPlaca") || 10), y = R("E") || 2e8, x = R("nu") || 0.3, p = y / (2 * (1 + x)), g = R("P") || -300, w = s / 2, z = i / 2, S = c / 2, H = t / 2, C = o / 2, b = [], f = [], v = $, M = s / v, L = i / v, N = (te, ge) => ge * (v + 1) + te;
      for (let te = 0; te <= v; te++) for (let ge = 0; ge <= v; ge++) b.push([
        ge * M,
        te * L,
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
      ], I = (te, ge) => {
        for (const [we, Te] of q) if ((te - we) * (te - we) + (ge - Te) * (ge - Te) < S * S) return true;
        return false;
      }, P = f.length;
      for (let te = 0; te < v; te++) for (let ge = 0; ge < v; ge++) {
        const we = (ge + 0.5) * M, Te = (te + 0.5) * L;
        I(we, Te) || f.push([
          N(ge, te),
          N(ge + 1, te),
          N(ge + 1, te + 1),
          N(ge, te + 1)
        ]);
      }
      const _ = f.length - P, Y = a, G = m, Q = [
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
      ], K = (te, ge) => {
        for (let we = 0; we < (v + 1) * (v + 1); we++) if (Math.abs(b[we][0] - te) < M * 0.3 && Math.abs(b[we][1] - ge) < L * 0.3 && Math.abs(b[we][2]) < 1e-6) return we;
        return -1;
      };
      for (const [te, ge] of D) {
        const [we, Te] = Q[te], [V, fe] = Q[ge], Se = [];
        for (let Re = 0; Re <= Y; Re++) {
          const Ve = [], co = Re / Y * l;
          for (let Dt = 0; Dt <= G; Dt++) {
            const Et = Dt / G, qt = we + Et * (V - we), dn = Te + Et * (fe - Te);
            if (Re === 0) {
              const Tt = K(qt, dn);
              if (Tt >= 0) {
                Ve.push(Tt);
                continue;
              }
            }
            let pn = -1;
            for (let Tt = 0; Tt < b.length; Tt++) if (Math.abs(b[Tt][0] - qt) < 1e-6 && Math.abs(b[Tt][1] - dn) < 1e-6 && Math.abs(b[Tt][2] - co) < 1e-6) {
              pn = Tt;
              break;
            }
            pn >= 0 ? Ve.push(pn) : (Ve.push(b.length), b.push([
              qt,
              dn,
              co
            ]));
          }
          Se.push(Ve);
        }
        for (let Re = 0; Re < Y; Re++) for (let Ve = 0; Ve < G; Ve++) f.push([
          Se[Re][Ve],
          Se[Re][Ve + 1],
          Se[Re + 1][Ve + 1],
          Se[Re + 1][Ve]
        ]);
      }
      const ce = f.length - W, Me = /* @__PURE__ */ new Map();
      for (let te = 0; te < (v + 1) * (v + 1); te++) {
        const ge = b[te][0], we = b[te][1];
        for (const [Te, V] of q) {
          const fe = Math.sqrt((ge - Te) * (ge - Te) + (we - V) * (we - V));
          fe >= S * 0.5 && fe <= S * 2 && Me.set(te, [
            true,
            true,
            true,
            true,
            true,
            true
          ]);
        }
      }
      const $e = /* @__PURE__ */ new Map(), U = [];
      for (let te = 0; te < b.length; te++) Math.abs(b[te][2] - l) < 1e-6 && U.push(te);
      const le = g / Math.max(U.length, 1);
      for (const te of U) $e.set(te, [
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
      for (let te = P; te < P + _; te++) pe.elasticities.set(te, y), pe.poissonsRatios.set(te, x), pe.thicknesses.set(te, r), pe.shearModuli.set(te, p);
      for (let te = W; te < W + ce; te++) pe.elasticities.set(te, y), pe.poissonsRatios.set(te, x), pe.thicknesses.set(te, n), pe.shearModuli.set(te, p);
      console.log(`Col+Placa 3D: col ${t * 1e3}x${o * 1e3}x${n * 1e3}mm, h=${l}m`), console.log(`  Placa ${s * 1e3}x${i * 1e3}mm, t=${r * 1e3}mm, 4 pernos d=${c * 1e3}mm`), console.log(`  ${_} Q4 placa + ${ce} Q4 columna = ${f.length} total`), console.log(`  ${b.length} nodos, P=${g} kN`);
      try {
        const te = ut(b, f, {
          supports: Me,
          loads: $e
        }, pe), ge = po(b, f, pe, te);
        e.nodes.val = b, e.elements.val = f, te && e.deformOutputs && (e.deformOutputs.val = te), e.nodeInputs && (e.nodeInputs.val = {
          supports: Me,
          loads: $e
        }), e.elementInputs && (e.elementInputs.val = pe), ge && e.analyzeOutputs && (e.analyzeOutputs.val = ge);
        let we = 0;
        (te == null ? void 0 : te.deformations) && te.deformations.forEach((Te) => {
          const V = Math.sqrt(Te[0] * Te[0] + Te[1] * Te[1] + Te[2] * Te[2]);
          we = Math.max(we, V);
        }), console.log(`  max|u| = ${we.toExponential(4)}`);
      } catch (te) {
        console.warn("Col+Placa failed:", te.message), e.nodes.val = b, e.elements.val = f, e.nodeInputs && (e.nodeInputs.val = {
          supports: Me,
          loads: $e
        });
      }
      setTimeout(() => Ue(), 50), Le();
    }
    function Nn() {
      const t = R("H") || 6, o = R("angle") || 45, n = R("bTop") || 3, l = R("bBot") || 3, s = R("meshSize") || 2, i = R("E") || 5e4, r = R("nu") || 0.3, c = R("gamma") || 18, u = R("c") || 15, d = R("phi") || 30, a = R("qs") || 0, m = t / Math.tan(o * Math.PI / 180), $ = l + m + n, y = t, x = [
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
        maxMeshSize: s
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
      const H = t - s * 0.3;
      try {
        const C = w.map((I) => [
          I[0],
          I[1]
        ]), b = g.map((I) => [
          I[0],
          I[1],
          I[2]
        ]), f = Gs({
          nodes: C,
          elements: b,
          E: i,
          nu: r,
          gamma: c,
          c: u,
          phi: d,
          thickness: 1,
          supports: z,
          surcharge: a,
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
      setTimeout(() => Ue(), 50), Le();
    }
    let wt = null, We = null, Lt = null;
    function vs() {
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
    function Oe(t) {
      const o = uo.find((n) => n.id === O);
      return t / o.toM;
    }
    function Be(t) {
      const o = uo.find((n) => n.id === O);
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
    function ys() {
      switch (uo.find((o) => o.id === O).id) {
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
    function $s() {
      const t = Vt(20594), o = Vt(58840), n = Math.max(1, Math.round((o - t) / 40));
      return [
        Math.round(t),
        Math.round(o),
        n
      ];
    }
    function Rn(t, o, n, l, s) {
      const i = ve.steelVigaType, r = i === 0 ? Po() : Co();
      if (ve.vigaMat === 0) {
        for (let c = 0; c < o.length; c++) {
          const u = o[c], d = `b${n}${c}`, a = `h${n}${c}`, m = {};
          m[d] = +Oe(u.b).toFixed(2), m[a] = +Oe(u.h).toFixed(2), t.addBinding(m, d, {
            min: l[0],
            max: l[1],
            step: l[2],
            label: `b sv${n}${c + 1}`
          }), t.addBinding(m, a, {
            min: l[0],
            max: l[1],
            step: l[2],
            label: `h sv${n}${c + 1}`
          });
        }
        t.on("change", (c) => {
          var _a;
          const u = (_a = c.target) == null ? void 0 : _a.key, d = u == null ? void 0 : u.match(new RegExp(`^b${n}(\\d+)$`)), a = u == null ? void 0 : u.match(new RegExp(`^h${n}(\\d+)$`));
          d && (o[parseInt(d[1])].b = Be(c.value), ae()), a && (o[parseInt(a[1])].h = Be(c.value), ae());
        });
      } else if (i <= 1) {
        for (let c = 0; c < o.length; c++) {
          const u = {};
          u[`p${n}${c}`] = o[c].profileIdx ?? 0, t.addBinding(u, `p${n}${c}`, {
            label: `sv${n}${c + 1}`,
            options: r
          });
        }
        t.on("change", (c) => {
          var _a, _b;
          const d = (_b = (_a = c.target) == null ? void 0 : _a.key) == null ? void 0 : _b.match(new RegExp(`^p${n}(\\d+)$`));
          d && (o[parseInt(d[1])].profileIdx = c.value, ae());
        });
      } else if (i === 2) {
        for (let c = 0; c < o.length; c++) {
          const u = o[c], d = {}, a = `${n}${c}`;
          d[`bf${a}`] = +Oe(u.bf ?? 0.2).toFixed(3), d[`h${a}`] = +Oe(u.hf ?? 0.4).toFixed(3), d[`tf${a}`] = +Oe(u.tf ?? 0.015).toFixed(3), d[`tw${a}`] = +Oe(u.tw ?? 0.01).toFixed(3), t.addBinding(d, `bf${a}`, {
            min: l[0],
            max: l[1],
            step: l[2],
            label: `bf sv${n}${c + 1}`
          }), t.addBinding(d, `h${a}`, {
            min: l[0],
            max: l[1],
            step: l[2],
            label: `h sv${n}${c + 1}`
          }), t.addBinding(d, `tf${a}`, {
            min: s[0],
            max: s[1],
            step: s[2],
            label: `tf sv${n}${c + 1}`
          }), t.addBinding(d, `tw${a}`, {
            min: s[0],
            max: s[1],
            step: s[2],
            label: `tw sv${n}${c + 1}`
          });
        }
        t.on("change", (c) => {
          var _a;
          const u = (_a = c.target) == null ? void 0 : _a.key;
          for (let d = 0; d < o.length; d++) {
            const a = `${n}${d}`;
            u === `bf${a}` && (o[d].bf = Be(c.value), ae()), u === `h${a}` && (o[d].hf = Be(c.value), ae()), u === `tf${a}` && (o[d].tf = Be(c.value), ae()), u === `tw${a}` && (o[d].tw = Be(c.value), ae());
          }
        });
      } else {
        for (let c = 0; c < o.length; c++) {
          const u = o[c], d = {}, a = `${n}${c}`;
          d[`bc${a}`] = +Oe(u.bc ?? 0.2).toFixed(3), d[`hc${a}`] = +Oe(u.hc ?? 0.3).toFixed(3), d[`t${a}`] = +Oe(u.t ?? 8e-3).toFixed(3), t.addBinding(d, `bc${a}`, {
            min: l[0],
            max: l[1],
            step: l[2],
            label: `b sv${n}${c + 1}`
          }), t.addBinding(d, `hc${a}`, {
            min: l[0],
            max: l[1],
            step: l[2],
            label: `h sv${n}${c + 1}`
          }), t.addBinding(d, `t${a}`, {
            min: s[0],
            max: s[1],
            step: s[2],
            label: `t sv${n}${c + 1}`
          });
        }
        t.on("change", (c) => {
          var _a;
          const u = (_a = c.target) == null ? void 0 : _a.key;
          for (let d = 0; d < o.length; d++) {
            const a = `${n}${d}`;
            u === `bc${a}` && (o[d].bc = Be(c.value), ae()), u === `hc${a}` && (o[d].hc = Be(c.value), ae()), u === `t${a}` && (o[d].t = Be(c.value), ae());
          }
        });
      }
    }
    function no() {
      var _a;
      if (We) {
        try {
          We.dispose();
        } catch {
        }
        We = null;
      }
      const t = document.getElementById("sections");
      if (t && (t.innerHTML = ""), E !== "edificio" && E !== "frame") {
        t && (t.style.display = "none");
        return;
      }
      const o = vs();
      if (!o) return;
      o.style.display = "";
      const n = T, l = Math.round(((_a = Z.nPisos) == null ? void 0 : _a.val) ?? 3), s = ys(), i = $s(), r = ee.length || 1, c = oe.length || 1;
      for (; ve.perFloor.length < l; ) {
        const b = ve.perFloor.length > 0 ? JSON.parse(JSON.stringify(ve.perFloor[ve.perFloor.length - 1])) : gs(r, c);
        ve.perFloor.push(b);
      }
      ve.perFloor.length > l && (ve.perFloor.length = l);
      for (const b of ve.perFloor) {
        for (; b.vigasX.length < r; ) b.vigasX.push(b.vigasX.length > 0 ? {
          ...b.vigasX[b.vigasX.length - 1]
        } : oo());
        for (b.vigasX.length > r && (b.vigasX.length = r); b.vigasY.length < c; ) b.vigasY.push(b.vigasY.length > 0 ? {
          ...b.vigasY[b.vigasY.length - 1]
        } : oo());
        b.vigasY.length > c && (b.vigasY.length = c);
      }
      We = new qo({
        title: `Sections (${n.label})`,
        container: o
      });
      const u = {
        colMat: ve.colMat
      };
      if (We.addBinding(u, "colMat", {
        label: "Col Material",
        options: {
          Hormigon: 0,
          Acero: 1,
          CFT: 2
        }
      }).on("change", (b) => {
        ve.colMat = b.value, no(), ae();
      }), ve.colMat === 0) {
        const b = {
          forma: ve.colShape
        };
        We.addBinding(b, "forma", {
          label: "Col forma",
          options: {
            Rectangular: 0,
            Circular: 1
          }
        }).on("change", (v) => {
          ve.colShape = v.value, no(), ae();
        });
        const f = {
          fc: +Vt(ve.fc).toFixed(1)
        };
        We.addBinding(f, "fc", {
          min: i[0],
          max: i[1],
          step: i[2],
          label: `f'c col (${Vo()})`
        }), We.on("change", (v) => {
          var _a2;
          ((_a2 = v.target) == null ? void 0 : _a2.key) === "fc" && (ve.fc = Yo(v.value), ae());
        });
      } else if (ve.colMat === 1) {
        const b = {
          colType: ve.steelColType
        };
        We.addBinding(b, "colType", {
          label: "Col tipo",
          options: {
            "W profile": 0,
            "HSS profile": 1,
            "I param": 2,
            Tubular: 3
          }
        }).on("change", (f) => {
          ve.steelColType = f.value, no(), ae();
        });
      }
      We.addBlade({
        view: "separator"
      });
      const d = {
        vigaMat: ve.vigaMat
      };
      if (We.addBinding(d, "vigaMat", {
        label: "Viga Material",
        options: {
          Hormigon: 0,
          Acero: 1
        }
      }).on("change", (b) => {
        ve.vigaMat = b.value, no(), ae();
      }), ve.vigaMat === 1) {
        const b = {
          vigaType: ve.steelVigaType
        };
        We.addBinding(b, "vigaType", {
          label: "Viga tipo",
          options: {
            "W profile": 0,
            "HSS profile": 1,
            "I param": 2,
            Tubular: 3
          }
        }).on("change", (f) => {
          ve.steelVigaType = f.value, no(), ae();
        });
      }
      const a = ve.steelColType === 0 ? Po() : Co();
      ve.steelVigaType === 0 ? Po() : Co();
      const m = O === "m" ? [
        5e-3,
        0.1,
        1e-3
      ] : O === "cm" ? [
        0.5,
        10,
        0.1
      ] : O === "mm" ? [
        5,
        100,
        1
      ] : O === "in" ? [
        0.2,
        4,
        0.05
      ] : [
        0.01,
        0.5,
        5e-3
      ];
      for (let b = 0; b < l; b++) {
        const f = ve.perFloor[b], v = We.addFolder({
          title: `Piso ${b + 1}`,
          expanded: b < 2
        });
        if (ve.colMat === 0) if (ve.colShape === 1) {
          const M = {
            dCol: +Oe(f.dCol).toFixed(2)
          };
          v.addBinding(M, "dCol", {
            min: s[0],
            max: s[1],
            step: s[2],
            label: "d col"
          }), v.on("change", (L) => {
            var _a2;
            ((_a2 = L.target) == null ? void 0 : _a2.key) === "dCol" && (f.dCol = Be(L.value), ae());
          });
        } else {
          const M = {
            bCol: +Oe(f.bCol).toFixed(2),
            hCol: +Oe(f.hCol).toFixed(2)
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
            var _a2, _b;
            ((_a2 = L.target) == null ? void 0 : _a2.key) === "bCol" && (f.bCol = Be(L.value), ae()), ((_b = L.target) == null ? void 0 : _b.key) === "hCol" && (f.hCol = Be(L.value), ae());
          });
        }
        else if (ve.colMat === 1) if (ve.steelColType <= 1) {
          const M = {
            col: f.colProfileIdx
          };
          v.addBinding(M, "col", {
            label: "Columna",
            options: a
          }).on("change", (L) => {
            f.colProfileIdx = L.value, ae();
          });
        } else if (ve.steelColType === 2) {
          const M = {
            bf: +Oe(f.colBf ?? 0.3).toFixed(3),
            h: +Oe(f.colHf ?? 0.3).toFixed(3),
            tf: +Oe(f.colTf ?? 0.02).toFixed(3),
            tw: +Oe(f.colTw ?? 0.012).toFixed(3)
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
            var _a2, _b, _c, _d;
            ((_a2 = L.target) == null ? void 0 : _a2.key) === "bf" && (f.colBf = Be(L.value), ae()), ((_b = L.target) == null ? void 0 : _b.key) === "h" && (f.colHf = Be(L.value), ae()), ((_c = L.target) == null ? void 0 : _c.key) === "tf" && (f.colTf = Be(L.value), ae()), ((_d = L.target) == null ? void 0 : _d.key) === "tw" && (f.colTw = Be(L.value), ae());
          });
        } else {
          const M = {
            bc: +Oe(f.colBc ?? 0.3).toFixed(3),
            hc: +Oe(f.colHc ?? 0.3).toFixed(3),
            t: +Oe(f.colT ?? 0.01).toFixed(3)
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
            min: m[0],
            max: m[1],
            step: m[2],
            label: "Col t"
          }), v.on("change", (L) => {
            var _a2, _b, _c;
            ((_a2 = L.target) == null ? void 0 : _a2.key) === "bc" && (f.colBc = Be(L.value), ae()), ((_b = L.target) == null ? void 0 : _b.key) === "hc" && (f.colHc = Be(L.value), ae()), ((_c = L.target) == null ? void 0 : _c.key) === "t" && (f.colT = Be(L.value), ae());
          });
        }
        else {
          const M = {
            bc: +Oe(f.colBc ?? 0.3).toFixed(3),
            hc: +Oe(f.colHc ?? 0.3).toFixed(3),
            t: +Oe(f.colT ?? 0.01).toFixed(3),
            Es: +Vt(f.colEs ?? 2e8).toFixed(0),
            nuS: f.colNuS ?? 0.3,
            fc: +Vt(f.colFc ?? 28e3).toFixed(1),
            nuC: f.colNuC ?? 0.2
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
            min: i[0],
            max: i[1],
            step: i[2],
            label: `f'c (${Vo()})`
          }), v.addBinding(M, "nuC", {
            min: 0.1,
            max: 0.35,
            step: 0.01,
            label: "\u03BDc"
          }), v.on("change", (I) => {
            var _a2, _b, _c, _d, _e2, _f, _g;
            ((_a2 = I.target) == null ? void 0 : _a2.key) === "bc" && (f.colBc = Be(I.value), ae()), ((_b = I.target) == null ? void 0 : _b.key) === "hc" && (f.colHc = Be(I.value), ae()), ((_c = I.target) == null ? void 0 : _c.key) === "t" && (f.colT = Be(I.value), ae()), ((_d = I.target) == null ? void 0 : _d.key) === "Es" && (f.colEs = Yo(I.value), ae()), ((_e2 = I.target) == null ? void 0 : _e2.key) === "nuS" && (f.colNuS = I.value, ae()), ((_f = I.target) == null ? void 0 : _f.key) === "fc" && (f.colFc = Yo(I.value), ae()), ((_g = I.target) == null ? void 0 : _g.key) === "nuC" && (f.colNuC = I.value, ae());
          });
        }
        if (f.vigasX.length > 0) {
          const M = v.addFolder({
            title: `Vigas X (${f.vigasX.length})`,
            expanded: false
          });
          Rn(M, f.vigasX, "x", s, m);
        }
        if (f.vigasY.length > 0) {
          const M = v.addFolder({
            title: `Vigas Y (${f.vigasY.length})`,
            expanded: false
          });
          Rn(M, f.vigasY, "y", s, m);
        }
      }
      We.addBlade({
        view: "separator"
      });
      const $ = We.addFolder({
        title: "Vigas Secundarias",
        expanded: false
      }), y = {
        activar: at,
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
        var _a2, _b, _c;
        ((_a2 = b.target) == null ? void 0 : _a2.key) === "activar" && (at = b.value, ae()), ((_b = b.target) == null ? void 0 : _b.key) === "direccion" && (yt = b.value === 0 ? "x" : "y", ae()), ((_c = b.target) == null ? void 0 : _c.key) === "cantidad" && (tt = Math.round(b.value), ae());
      }), We.addBlade({
        view: "separator"
      });
      const x = We.addFolder({
        title: "Losas de Piso",
        expanded: true
      }), p = {
        activar: ht,
        espesor: +Oe($t).toFixed(3),
        subdivX: bo,
        subdivY: xo
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
        ((_a2 = b.target) == null ? void 0 : _a2.key) === "activar" && (ht = b.value, ae()), ((_b = b.target) == null ? void 0 : _b.key) === "espesor" && ($t = Be(b.value), ae()), ((_c = b.target) == null ? void 0 : _c.key) === "subdivX" && (bo = Math.round(b.value), ae()), ((_d = b.target) == null ? void 0 : _d.key) === "subdivY" && (xo = Math.round(b.value), ae());
      }), We.addBlade({
        view: "separator"
      });
      const g = We.addFolder({
        title: "Muros de Corte",
        expanded: true
      }), w = {
        espesor: +Oe(ct).toFixed(3),
        subdivH: Ye,
        subdivW: st
      };
      g.addBinding(w, "espesor", {
        min: s[0],
        max: s[1],
        step: s[2],
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
        var _a2, _b, _c;
        ((_a2 = b.target) == null ? void 0 : _a2.key) === "espesor" && (ct = Be(b.value), ae()), ((_b = b.target) == null ? void 0 : _b.key) === "subdivH" && (Ye = Math.round(b.value), ae()), ((_c = b.target) == null ? void 0 : _c.key) === "subdivW" && (st = Math.round(b.value), ae());
      });
      const z = ee.length || 1, S = oe.length || 1, H = z + 1, C = S + 1;
      if (z > 0) {
        const b = g.addFolder({
          title: `Muros dir X (${z} vanos)`,
          expanded: false
        });
        for (let f = 0; f < z; f++) for (let v = 0; v < C; v++) {
          const M = `wx_${f}_${v}`, L = Ae.some((I) => I.dir === "x" && I.bay === f && I.axisIdx === v), N = {};
          N[M] = L;
          const q = `Vano X${f + 1} / Eje Y${String.fromCharCode(65 + v)}`;
          b.addBinding(N, M, {
            label: q
          }).on("change", (I) => {
            I.value ? Ae.push({
              dir: "x",
              bay: f,
              axisIdx: v,
              floors: [
                -1
              ]
            }) : Ae = Ae.filter((P) => !(P.dir === "x" && P.bay === f && P.axisIdx === v)), ae();
          });
        }
      }
      if (S > 0) {
        const b = g.addFolder({
          title: `Muros dir Y (${S} vanos)`,
          expanded: false
        });
        for (let f = 0; f < S; f++) for (let v = 0; v < H; v++) {
          const M = `wy_${f}_${v}`, L = Ae.some((I) => I.dir === "y" && I.bay === f && I.axisIdx === v), N = {};
          N[M] = L;
          const q = `Vano Y${f + 1} / Eje X${v + 1}`;
          b.addBinding(N, M, {
            label: q
          }).on("change", (I) => {
            I.value ? Ae.push({
              dir: "y",
              bay: f,
              axisIdx: v,
              floors: [
                -1
              ]
            }) : Ae = Ae.filter((P) => !(P.dir === "y" && P.bay === f && P.axisIdx === v)), ae();
          });
        }
      }
      if (Ae.length > 0) {
        g.addBlade({
          view: "separator"
        });
        const b = {
          muros: `${Ae.length} ubicaciones`
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
      if (_e || (_e = t.innerHTML), me) {
        try {
          me.dispose();
        } catch {
        }
        me = null;
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
      me = new qo({
        title: `Parameters \u2014 ${o}`,
        container: t
      });
      const n = kn()[E];
      if (n) {
        const s = {};
        for (const r of n) s[r.key] = Z[r.key].val;
        for (const r of n) me.addBinding(s, r.key, {
          min: Z[r.key].min,
          max: Z[r.key].max,
          step: Z[r.key].step,
          label: Z[r.key].label
        });
        const i = me.addFolder({
          title: "Rangos",
          expanded: false
        });
        for (const r of n) {
          const c = {
            min: Z[r.key].min,
            max: Z[r.key].max
          };
          i.addBinding(c, "min", {
            label: `${r.key} min`,
            step: r.step
          }), i.addBinding(c, "max", {
            label: `${r.key} max`,
            step: r.step
          }), i.on("change", () => {
            Z[r.key] && (Z[r.key].min = c.min, Z[r.key].max = c.max, Z[r.key].val < c.min && (Z[r.key].val = c.min), Z[r.key].val > c.max && (Z[r.key].val = c.max)), Mt(), ae();
          });
        }
        me.on("change", (r) => {
          var _a;
          const c = (_a = r.target) == null ? void 0 : _a.key;
          if (c && Z[c]) {
            if (Z[c].val = r.value, E === "edificio" && (c === "nVanosX" || c === "nVanosY" || c === "nPisos")) {
              if (c === "nVanosX" || c === "nVanosY") {
                const u = Math.round(Z.nVanosX.val), d = Math.round(Z.nVanosY.val);
                for (; ee.length < u; ) ee.push(ee[ee.length - 1] ?? T.defaultSpan);
                for (ee.length > u && (ee.length = u); oe.length < d; ) oe.push(oe[oe.length - 1] ?? T.defaultSpan * 0.8);
                oe.length > d && (oe.length = d);
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
        const s = document.getElementById("luces-panel");
        if (s) {
          s.innerHTML = "";
          const i = T;
          Lt = new qo({
            title: `Luces (${i.length})`,
            container: s
          });
          const r = Lt.addFolder({
            title: "Luces X",
            expanded: true
          }), c = {};
          for (let a = 0; a < ee.length; a++) c[`svx_${a + 1}`] = ee[a];
          for (let a = 0; a < ee.length; a++) r.addBinding(c, `svx_${a + 1}`, {
            min: i.spanRange[0],
            max: i.spanRange[1],
            step: i.spanRange[2],
            label: `svx${a + 1}`
          });
          r.on("change", (a) => {
            var _a, _b;
            const $ = (_b = (_a = a.target) == null ? void 0 : _a.key) == null ? void 0 : _b.match(/^svx_(\d+)$/);
            $ && (ee[parseInt($[1]) - 1] = a.value, ae());
          });
          const u = Lt.addFolder({
            title: "Luces Y",
            expanded: true
          }), d = {};
          for (let a = 0; a < oe.length; a++) d[`svy_${a + 1}`] = oe[a];
          for (let a = 0; a < oe.length; a++) u.addBinding(d, `svy_${a + 1}`, {
            min: i.spanRange[0],
            max: i.spanRange[1],
            step: i.spanRange[2],
            label: `svy${a + 1}`
          });
          u.on("change", (a) => {
            var _a, _b;
            const $ = (_b = (_a = a.target) == null ? void 0 : _a.key) == null ? void 0 : _b.match(/^svy_(\d+)$/);
            $ && (oe[parseInt($[1]) - 1] = a.value, ae());
          });
        }
      }
      if (no(), me) {
        me.addBlade({
          view: "separator"
        });
        const s = Fo()[E];
        if (s && s.length > 0) {
          const i = {};
          s.forEach((c, u) => {
            i[c.label] = u;
          });
          const r = {
            apoyo: lt
          };
          me.addBinding(r, "apoyo", {
            label: "Apoyo",
            options: i
          }).on("change", (c) => {
            lt = c.value, ae();
          });
        }
        if (E === "placa-3q" || E === "placa-q4") {
          const i = {
            teoria: mt
          };
          me.addBinding(i, "teoria", {
            label: "Teor\xEDa",
            options: {
              Membrana: 1,
              "Kirchhoff (delgada)": 2,
              "Mindlin (gruesa)": 3
            }
          }).on("change", (r) => {
            mt = r.value, ae();
          });
        }
      }
      const l = Sn()[E];
      if (l && l.length > 0) {
        wt = new qo({
          title: `Cargas Est\xE1ticas \u2014 ${o}`,
          container: t
        });
        const s = {};
        for (const r of l) s[r.key] = qe[r.key].val;
        for (const r of l) wt.addBinding(s, r.key, {
          min: qe[r.key].min,
          max: qe[r.key].max,
          step: qe[r.key].step,
          label: qe[r.key].label
        });
        const i = wt.addFolder({
          title: "Rangos",
          expanded: false
        });
        for (const r of l) {
          const c = {
            min: qe[r.key].min,
            max: qe[r.key].max
          };
          i.addBinding(c, "min", {
            label: `${r.key} min`,
            step: r.step
          }), i.addBinding(c, "max", {
            label: `${r.key} max`,
            step: r.step
          }), i.on("change", () => {
            qe[r.key] && (qe[r.key].min = c.min, qe[r.key].max = c.max, qe[r.key].val < c.min && (qe[r.key].val = c.min), qe[r.key].val > c.max && (qe[r.key].val = c.max)), Mt(), ae();
          });
        }
        wt.on("change", (r) => {
          var _a;
          const c = (_a = r.target) == null ? void 0 : _a.key;
          if (c && qe[c]) {
            if (qe[c].val = r.value, e.nodeInputs) {
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
        setParam: (s, i) => {
          if (Z[s]) Z[s].val = i, ae(), Mt();
          else if (qe[s]) {
            if (qe[s].val = i, e.nodeInputs) {
              const r = e.nodeInputs.val;
              r.supports && (e.nodeInputs.val = {
                supports: r.supports
              });
            }
            setTimeout(() => {
              Ko(), Mt();
            }, 30);
          }
        },
        getParams: () => {
          const s = {};
          for (const i in Z) s[i] = Z[i].val;
          for (const i in qe) s[i] = qe[i].val;
          return s;
        },
        setGenerator: Ie
      };
    }
    function ws() {
      if (me) {
        try {
          me.dispose();
        } catch {
        }
        me = null;
      }
      if (wt) {
        try {
          wt.dispose();
        } catch {
        }
        wt = null;
      }
      if (We) {
        try {
          We.dispose();
        } catch {
        }
        We = null;
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
      o && n && (n.style.cssText = "", document.body.appendChild(n), o.remove()), n && _e && (n.innerHTML = _e);
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
  `, document.head.appendChild(On), Ks() === "light" && document.documentElement.classList.add("awatif-light"), Us((t) => {
      t === "light" ? document.documentElement.classList.add("awatif-light") : document.documentElement.classList.remove("awatif-light"), E && Ue(true);
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
    let Je = null;
    function Ms() {
      var _a, _b, _c, _d, _e2, _f;
      const t = e.nodes.val, o = e.elements.val, n = (_a = e.nodeInputs) == null ? void 0 : _a.val, l = (_b = e.elementInputs) == null ? void 0 : _b.val, s = O, i = h, r = [];
      if (r.push("# Awatif FEM \u2014 Model Export"), r.push(`# Generator: ${E || "custom"}`), r.push(`# Units: ${i}, ${s}`), r.push(`# ${(/* @__PURE__ */ new Date()).toISOString()}`), r.push(""), r.push(`## NODES (${t.length})`), r.push("# idx     X          Y          Z"), t.forEach((d, a) => {
        r.push(`  ${String(a).padStart(4)}  ${d[0].toFixed(4).padStart(10)}  ${d[1].toFixed(4).padStart(10)}  ${d[2].toFixed(4).padStart(10)}`);
      }), r.push(""), r.push(`## ELEMENTS (${o.length})`), r.push("# idx    nodeI  nodeJ"), o.forEach((d, a) => {
        const m = d.map(($) => String($).padStart(6)).join("");
        r.push(`  ${String(a).padStart(4)}  ${m}`);
      }), r.push(""), (n == null ? void 0 : n.supports) && n.supports.size > 0 && (r.push(`## SUPPORTS (${n.supports.size})`), r.push("# node   Ux  Uy  Uz  Rx  Ry  Rz"), n.supports.forEach((d, a) => {
        const m = d.map(($) => $ ? "  1" : "  0").join("");
        r.push(`  ${String(a).padStart(4)} ${m}`);
      }), r.push("")), (n == null ? void 0 : n.loads) && n.loads.size > 0 && (r.push(`## LOADS (${n.loads.size})`), r.push("# node         Fx          Fy          Fz          Mx          My          Mz"), n.loads.forEach((d, a) => {
        const m = d.map(($) => $.toFixed(3).padStart(11)).join(" ");
        r.push(`  ${String(a).padStart(4)}  ${m}`);
      }), r.push("")), l) {
        r.push("## ELEMENT PROPERTIES");
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
        ], a = "# elem  " + d.map((m) => m.name.padStart(12)).join(" ");
        r.push(a);
        for (let m = 0; m < o.length; m++) {
          const $ = d.map((y) => {
            var _a2;
            const x = (_a2 = y.map) == null ? void 0 : _a2.get(m);
            return x !== void 0 ? x.toExponential(4).padStart(12) : "           -";
          }).join(" ");
          r.push(`  ${String(m).padStart(4)}  ${$}`);
        }
        r.push("");
      }
      const c = (_d = (_c = e.deformOutputs) == null ? void 0 : _c.val) == null ? void 0 : _d.deformations;
      c && c.size > 0 && (r.push(`## DISPLACEMENTS (${c.size} nodes)`), r.push("# node          Ux           Uy           Uz           Rx           Ry           Rz"), c.forEach((d, a) => {
        const m = d.map(($) => $.toExponential(4).padStart(12)).join(" ");
        r.push(`  ${String(a).padStart(4)}  ${m}`);
      }), r.push(""));
      const u = (_f = (_e2 = e.deformOutputs) == null ? void 0 : _e2.val) == null ? void 0 : _f.reactions;
      if (u && u.size > 0 && (r.push(`## REACTIONS (${u.size} supports)`), r.push("# node          Rx           Ry           Rz           Mx           My           Mz"), u.forEach((d, a) => {
        const m = d.map(($) => $.toFixed(4).padStart(12)).join(" ");
        r.push(`  ${String(a).padStart(4)}  ${m}`);
      }), r.push("")), E) {
        r.push("## CLI COMMAND");
        const d = Object.entries(Z).map(([a, m]) => `${a}=${m.val}`).join(" ");
        r.push(`cad.${E === "edificio" ? "building" : E}(${d})`);
      }
      return r.join(`
`);
    }
    let ho = false;
    function ks() {
      var _a, _b, _c, _d;
      if (Je) {
        Je.remove(), Je = null, ho = false;
        return;
      }
      const t = Ms();
      Je = document.createElement("div"), Je.id = "export-overlay", Je.style.cssText = `
      position:fixed; bottom:10px; right:10px; z-index:10000;
      width:720px; max-width:90vw;
      display:flex; flex-direction:column;
      font-family:monospace; color:var(--cad-text,#ccc);
      background:var(--cad-bg,#1a1a2e); border:1px solid var(--cad-border,#333);
      border-radius:8px; box-shadow:0 4px 20px rgba(0,0,0,0.5);
      transition: height 0.2s ease;
    `, Je.innerHTML = `
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
    `, document.body.appendChild(Je), (_a = Je.querySelector("#export-close")) == null ? void 0 : _a.addEventListener("click", () => {
        Je == null ? void 0 : Je.remove(), Je = null, ho = false;
      }), (_b = Je.querySelector("#export-minimize")) == null ? void 0 : _b.addEventListener("click", () => {
        const o = Je.querySelector("#export-body"), n = Je.querySelector("#export-minimize");
        ho = !ho, ho ? (o.style.display = "none", n.textContent = "\u25A2", n.title = "Restaurar", Je.style.width = "auto") : (o.style.display = "flex", n.textContent = "\u25AC", n.title = "Minimizar", Je.style.width = "720px");
      }), (_c = Je.querySelector("#export-copy")) == null ? void 0 : _c.addEventListener("click", () => {
        const o = Je.querySelector("#export-text");
        navigator.clipboard.writeText(o.value).then(() => {
          const n = Je.querySelector("#export-status");
          n.textContent = "\u2713 Copiado al clipboard", setTimeout(() => n.textContent = "", 2e3);
        });
      }), (_d = Je.querySelector("#export-json")) == null ? void 0 : _d.addEventListener("click", () => {
        var _a2, _b2, _c2, _d2, _e2, _f;
        const o = e.nodes.val, n = e.elements.val, l = (_a2 = e.nodeInputs) == null ? void 0 : _a2.val, s = (_b2 = e.elementInputs) == null ? void 0 : _b2.val, i = {
          generator: E || "custom",
          units: {
            force: h,
            length: O
          },
          nodes: o.map((a, m) => ({
            id: m,
            x: a[0],
            y: a[1],
            z: a[2]
          })),
          elements: n.map((a, m) => ({
            id: m,
            nodes: a
          }))
        };
        (l == null ? void 0 : l.supports) && (i.supports = [], l.supports.forEach((a, m) => i.supports.push({
          node: m,
          dofs: a
        }))), (l == null ? void 0 : l.loads) && (i.loads = [], l.loads.forEach((a, m) => i.loads.push({
          node: m,
          forces: a
        }))), s && (i.properties = {}, s.elasticities && (i.properties.E = Object.fromEntries(s.elasticities)), s.areas && (i.properties.A = Object.fromEntries(s.areas)), s.momentsOfInertiaZ && (i.properties.Iz = Object.fromEntries(s.momentsOfInertiaZ)), s.momentsOfInertiaY && (i.properties.Iy = Object.fromEntries(s.momentsOfInertiaY)), s.shearModuli && (i.properties.G = Object.fromEntries(s.shearModuli)), s.torsionalConstants && (i.properties.J = Object.fromEntries(s.torsionalConstants)));
        const r = (_d2 = (_c2 = e.deformOutputs) == null ? void 0 : _c2.val) == null ? void 0 : _d2.deformations;
        r && r.size > 0 && (i.displacements = {}, r.forEach((a, m) => i.displacements[m] = a));
        const c = (_f = (_e2 = e.deformOutputs) == null ? void 0 : _e2.val) == null ? void 0 : _f.reactions;
        c && c.size > 0 && (i.reactions = {}, c.forEach((a, m) => i.reactions[m] = a));
        const u = Je.querySelector("#export-text");
        u.value = JSON.stringify(i, null, 2);
        const d = Je.querySelector("#export-status");
        d.textContent = "Formato JSON activo \u2014 presiona Copy para copiar";
      });
    }
    function Le() {
      var _a, _b, _c;
      const t = re.querySelector("#cad3d-info");
      if (t) {
        const o = e.nodes.val.length, n = e.elements.val, l = n.length, s = ((_c = (_b = (_a = e.nodeInputs) == null ? void 0 : _a.val) == null ? void 0 : _b.supports) == null ? void 0 : _c.size) || 0;
        let i = 0, r = 0, c = 0;
        for (const d of n) d.length === 2 ? i++ : d.length === 3 ? r++ : d.length === 4 && c++;
        let u = `${o}n ${l}e ${s}s`;
        (c > 0 || r > 0) && (u += ` | ${i}fr`, c > 0 && (u += ` ${c}q4`), r > 0 && (u += ` ${r}tri`)), t.textContent = u;
      }
    }
    function Go() {
      var _a;
      if (!bt || !e.nodeInputs || !e.elementInputs) return;
      const t = e.nodes.val, o = e.elements.val, n = e.nodeInputs.val, l = e.elementInputs.val;
      if (!(t.length === 0 || o.length === 0) && !(!n.supports || n.supports.size === 0) && !(!l.densities || l.densities.size === 0)) try {
        const s = Math.min(12, t.length * 6 - n.supports.size * 6);
        if (s <= 0) return;
        const i = Vs(t, o, n, l, Math.min(s, 12));
        if (i.frequencies && i.frequencies.length > 0) {
          De = i, It = t.map((d) => [
            ...d
          ]), ot = 0;
          const { extent: r } = Nt(), c = (_a = i.modeShapes) == null ? void 0 : _a[0];
          if (c) {
            let d = 0;
            for (let a = 0; a < t.length; a++) {
              const m = c[a * 6] || 0, $ = c[a * 6 + 1] || 0, y = c[a * 6 + 2] || 0;
              d = Math.max(d, Math.sqrt(m * m + $ * $ + y * y));
            }
            So = d > 1e-12 ? r * 0.05 / d : 1;
          }
          const u = `${E} \u2014 ${t.length}n ${o.length}e`;
          go.render(i, {
            title: u
          }), go.div.style.display = "", vo(), console.log(`Modal: ${i.frequencies.length} modos. f\u2081 = ${i.frequencies[0].toFixed(4)} Hz`);
        }
      } catch (s) {
        console.warn("Modal analysis failed:", s.message), De = null;
      }
    }
    function Xo() {
      Ct && (cancelAnimationFrame(Ct), Ct = 0), It.length > 0 && (e.nodes.val = It.map((t) => [
        ...t
      ])), go.div.style.display = "none", De = null;
    }
    function vo() {
      var _a;
      if (Ct && cancelAnimationFrame(Ct), !(De == null ? void 0 : De.modeShapes) || !It.length) return;
      const t = De.modeShapes[ot];
      if (!t) return;
      const o = ((_a = De.frequencies) == null ? void 0 : _a[ot]) || 1, n = Math.max(0.5, Math.min(3, o * 0.1)), l = performance.now(), s = It.length, i = e.elements.rawVal, { extent: r } = Nt(), c = re.querySelector("#cad3d-modal-scale"), u = c && parseFloat(c.value) || 5;
      let d = 0;
      for (let S = 0; S < s; S++) {
        const H = t[S * 6] || 0, C = t[S * 6 + 1] || 0, b = t[S * 6 + 2] || 0;
        d = Math.max(d, Math.sqrt(H * H + C * C + b * b));
      }
      const a = d > 1e-12 ? r * u / 100 / d : 1, m = Ce();
      if (!m) return;
      let $ = null, y = null, x = null;
      m.scene.traverse((S) => {
        var _a2, _b;
        !$ && S.isPoints && S.geometry && ($ = S), !y && S.isLineSegments && S.geometry && !S.name && (y = S), !x && S.isMesh && ((_a2 = S.material) == null ? void 0 : _a2.transparent) && ((_b = S.material) == null ? void 0 : _b.opacity) < 0.5 && S.geometry && (x = S);
      });
      const p = new Float32Array(s * 3), g = [];
      for (const S of i) if (S.length === 2) g.push([
        S[0],
        S[1]
      ]);
      else for (let H = 0; H < S.length; H++) g.push([
        S[H],
        S[(H + 1) % S.length]
      ]);
      const w = new Float32Array(g.length * 6);
      function z() {
        const S = (performance.now() - l) / 1e3, H = Math.sin(2 * Math.PI * n * S) * a;
        for (let C = 0; C < s; C++) {
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
          for (const b of i) if (b.length === 3) {
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
      var _a, _b, _c, _d, _e2;
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
              for (const Q of Y) if (C(t[Q][0]) === I) {
                const W = C(t[Q][1]);
                G.has(W) || (G.add(W), v.add(Q));
              }
            }
            if (z !== 0) {
              const G = /* @__PURE__ */ new Set();
              for (const Q of Y) if (C(t[Q][1]) === P) {
                const W = C(t[Q][0]);
                G.has(W) || (G.add(W), M.add(Q));
              }
            }
          });
        }
        const L = 9.81, N = /* @__PURE__ */ new Map();
        for (let I = 0; I < o.length; I++) {
          const P = o[I], _ = ((_a = l.densities) == null ? void 0 : _a.get(I)) ?? 0;
          if (!(Math.abs(_) < 1e-15)) {
            if (P.length === 2) {
              const Y = ((_b = l.areas) == null ? void 0 : _b.get(I)) ?? 0, G = t[P[0]], Q = t[P[1]], W = Math.sqrt((Q[0] - G[0]) ** 2 + (Q[1] - G[1]) ** 2 + (Q[2] - G[2]) ** 2), K = -(_ * Y * W * L) / 2;
              N.set(P[0], (N.get(P[0]) ?? 0) + K), N.set(P[1], (N.get(P[1]) ?? 0) + K);
            } else if (P.length >= 3) {
              const Y = ((_c = l.thicknesses) == null ? void 0 : _c.get(I)) ?? 0;
              let G = 0;
              if (P.length === 3) {
                const [D, K, ce] = P.map((Me) => t[Me]);
                G = 0.5 * Math.abs((K[0] - D[0]) * (ce[1] - D[1]) - (ce[0] - D[0]) * (K[1] - D[1]));
              } else if (P.length === 4) {
                const [D, K, ce, Me] = P.map(($e) => t[$e]);
                if (G = 0.5 * Math.abs((K[0] - D[0]) * (ce[1] - D[1]) - (ce[0] - D[0]) * (K[1] - D[1])) + 0.5 * Math.abs((ce[0] - D[0]) * (Me[1] - D[1]) - (Me[0] - D[0]) * (ce[1] - D[1])), G < 1e-10) {
                  const $e = [
                    K[0] - D[0],
                    K[1] - D[1],
                    K[2] - D[2]
                  ], U = [
                    Me[0] - D[0],
                    Me[1] - D[1],
                    Me[2] - D[2]
                  ], le = [
                    $e[1] * U[2] - $e[2] * U[1],
                    $e[2] * U[0] - $e[0] * U[2],
                    $e[0] * U[1] - $e[1] * U[0]
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
          const P = v.has(I) ? w : 0, _ = M.has(I) ? z : 0, Y = N.get(I) ?? 0, G = q.has(I) ? g : 0, Q = Y + G;
          (P !== 0 || _ !== 0 || Math.abs(Q) > 1e-10) && S.set(I, [
            P,
            _,
            Q,
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
      const s = performance.now();
      let i = 0, r = 0, c = 0;
      for (const x of o) x.length === 2 ? i++ : x.length === 3 ? c++ : x.length === 4 && r++;
      const u = ((_d = n.supports) == null ? void 0 : _d.size) || 0, d = ((_e2 = n.loads) == null ? void 0 : _e2.size) || 0, a = t.length * 6, m = a - u * 6, $ = [], y = (x) => $.push(x);
      y('<b style="color:var(--cad-heading)">FEM Solver</b>'), y(`<span style="color:var(--cad-info)">Modelo:</span> ${t.length} nodos, ${o.length} elem`), i && y(`&nbsp;&nbsp;Frames: <b>${i}</b>`), r && y(`&nbsp;&nbsp;Shell Q4: <b>${r}</b>`), c && y(`&nbsp;&nbsp;Triangulos: <b>${c}</b>`), y(`&nbsp;&nbsp;Apoyos: ${u} &nbsp;|&nbsp; Cargas: ${d}`), y(`<span style="color:var(--cad-info)">DOFs:</span> ${a} total, ~${m} libres`), y('<hr style="border-color:var(--cad-border);margin:4px 0">'), y(`<span style="color:#888">1.</span> Ensamblaje <b>K</b> global (${a}&times;${a})`), y("&nbsp;&nbsp;&nbsp;<i>K<sub>global</sub> = &Sigma; T<sup>T</sup> &middot; K<sub>local</sub> &middot; T</i>");
      try {
        const x = ut(t, o, n, l), p = performance.now() - s;
        if (x) {
          e.deformOutputs.val = x, y(`<span style="color:#888">2.</span> <b>K &middot; u = F</b> &rarr; SparseLU &rarr; <span style="color:#00cc88">${p.toFixed(0)} ms</span>`);
          let g = 0, w = -1, z = 0, S = 0;
          x.deformations && x.deformations.forEach((v, M) => {
            const L = Math.sqrt(v[0] * v[0] + v[1] * v[1] + v[2] * v[2]);
            L > g && (g = L, w = M, z = v[0], S = v[2]);
          }), y('<span style="color:#888">3.</span> Desplazamientos:'), y(`&nbsp;&nbsp;&nbsp;max|<b>u</b>| = <b style="color:var(--cad-heading)">${g.toExponential(3)}</b> m <span style="color:#666">(nodo ${w})</span>`), y(`&nbsp;&nbsp;&nbsp;u<sub>x</sub> = ${(z * 1e3).toFixed(4)} mm &nbsp;|&nbsp; u<sub>z</sub> = ${(S * 1e3).toFixed(4)} mm`);
          const H = performance.now(), C = po(t, o, l, x), b = performance.now() - H;
          C && (e.analyzeOutputs.val = C, y(`<span style="color:#888">4.</span> Fuerzas internas: <span style="color:#00cc88">${b.toFixed(0)} ms</span>`), y("&nbsp;&nbsp;&nbsp;<i>F<sub>int</sub> = K<sub>local</sub> &middot; T &middot; u</i>"));
          const f = performance.now() - s;
          y('<hr style="border-color:var(--cad-border);margin:4px 0">'), y(`<b style="color:#00cc88">&#10004; Completado: ${f.toFixed(0)} ms</b>`);
        }
      } catch (x) {
        const p = performance.now() - s;
        y(`<b style="color:#ff4444">&#10008; Error (${p.toFixed(0)} ms): ${x.message}</b>`);
      }
      window.__femLog = $, console.log(`FEM Solver: ${t.length}n ${o.length}e \u2192 ${(performance.now() - s).toFixed(0)}ms`), bt && setTimeout(() => Go(), 50);
    }
    function Uo(t, o) {
      const n = t * o, l = t * o * o * o / 12, s = o * t * t * t / 12, i = Math.min(t, o), r = Math.max(t, o), c = i * i * i * r * (1 / 3 - 0.21 * i / r * (1 - i * i * i * i / (12 * r * r * r * r)));
      return {
        A: n,
        Iz: l,
        Iy: s,
        J: c
      };
    }
    function Bn(t) {
      const o = t / 2, n = Math.PI * o * o, l = Math.PI * o * o * o * o / 4, s = Math.PI * o * o * o * o / 2;
      return {
        A: n,
        Iz: l,
        Iy: l,
        J: s
      };
    }
    function Zo(t, o, n, l) {
      const s = o - 2 * n, i = 2 * t * n + s * l, r = (t * o * o * o - (t - l) * s * s * s) / 12, c = (2 * n * t * t * t + s * l * l * l) / 12, u = (2 * t * n * n * n + s * l * l * l) / 3;
      return {
        A: i,
        Iz: r,
        Iy: c,
        J: u
      };
    }
    function Qo(t, o, n) {
      const l = t - 2 * n, s = o - 2 * n, i = t * o - l * s, r = (t * o * o * o - l * s * s * s) / 12, c = (o * t * t * t - s * l * l * l) / 12, u = (t - n) * (o - n), d = 2 * ((t - n) / n + (o - n) / n), a = 4 * u * u / (d > 0 ? d : 1);
      return {
        A: i,
        Iz: r,
        Iy: c,
        J: a
      };
    }
    function Ss(t, o, n, l, s, i, r) {
      const u = 4700 * Math.sqrt(i / 1e3) * 1e3 / l, d = t - 2 * n, a = o - 2 * n, m = t * o - d * a, $ = (t * o * o * o - d * a * a * a) / 12, y = (o * t * t * t - a * d * d * d) / 12, x = d * a, p = d * a * a * a / 12, g = a * d * d * d / 12, w = m + u * x, z = $ + u * p, S = y + u * g, H = l / (2 * (1 + s)), C = (t - n) * (o - n), b = 2 * ((t - n) / n + (o - n) / n), f = 4 * C * C / (b > 0 ? b : 1);
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
      if ((E === "edificio" || E === "frame") && xe.size > 0) {
        const { colMat: s, vigaMat: i, colShape: r, fc: c, perFloor: u } = ve, d = 4700 * Math.sqrt(c / 1e3) * 1e3, a = d / (2 * 1.2), m = 24 / 9.80665, $ = o.E, y = o.G, x = o.rho;
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
          const g = xe.has(p), w = Pe.get(p) ?? 0, z = u[w] ?? u[0] ?? {
            bCol: 0.4,
            hCol: 0.4,
            dCol: 0.4
          };
          let S, H, C, b;
          if (g) if (s === 0) H = d, C = a, b = m, S = r === 1 ? Bn(z.dCol) : Uo(z.bCol, z.hCol), n.sectionShapes.set(p, r === 1 ? {
            type: "circ",
            d: z.dCol
          } : {
            type: "rect",
            b: z.bCol,
            h: z.hCol
          });
          else if (s === 1) {
            H = $, C = y, b = x;
            const v = ve.steelColType;
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
            const P = Ss(v, M, L, q, I, N);
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
            const v = Ke.get(p), M = v ? v.dir === "x" ? z.vigasX : z.vigasY : [], L = v ? M[v.bay] ?? M[0] ?? oo() : oo();
            if (i === 0) H = d, C = a, b = m, S = Uo(L.b, L.h), n.sectionShapes.set(p, {
              type: "rect",
              b: L.b,
              h: L.h
            });
            else {
              H = $, C = y, b = x;
              const N = ve.steelVigaType;
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
          const f = be.get(p);
          if (f) {
            if ((f.material ?? 1) === 0 ? (H = d, C = a, b = m) : (H = $, C = y, b = x), f.secType === "rect" && f.b && f.h) S = Uo(f.b, f.h), n.sectionShapes.set(p, {
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
      } else for (let s = 0; s < t.length; s++) n.elasticities.set(s, o.E), n.shearModuli.set(s, o.G), n.areas.set(s, o.A), n.momentsOfInertiaZ.set(s, o.Iy), n.momentsOfInertiaY.set(s, o.Iz), n.torsionalConstants.set(s, o.J), n.densities.set(s, o.rho);
      e.elementInputs.val = n;
    }
    function jn(t) {
      re.querySelectorAll("[data-ex]").forEach((o) => {
        o.classList.toggle("active", o.dataset.ex === t);
      });
    }
    setTimeout(() => {
      var _a, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l, _m, _n2;
      (_a = re.querySelector("#cad3d-toggle")) == null ? void 0 : _a.addEventListener("click", (a) => {
        a.stopPropagation(), re.classList.add("collapsed");
      }), (_b = re.querySelector("#cad3d-expand")) == null ? void 0 : _b.addEventListener("click", (a) => {
        a.stopPropagation(), re.classList.remove("collapsed");
      }), re.querySelectorAll("[data-ex]").forEach((a) => {
        a.addEventListener("click", (m) => {
          m.stopPropagation();
          const $ = a.dataset.ex;
          jn($), ze.example($);
        });
      }), re.querySelectorAll("[data-view]").forEach((a) => {
        a.addEventListener("click", (m) => {
          m.stopPropagation();
          const $ = a.dataset.view;
          Rt($), re.querySelectorAll("[data-view]").forEach((y) => y.classList.remove("view-active")), a.classList.add("view-active");
        });
      }), (_c = re.querySelector("#cad3d-btn-clear")) == null ? void 0 : _c.addEventListener("click", (a) => {
        a.stopPropagation(), E = "", xs.val = false, ws(), ze.clear();
      }), (_d = re.querySelector("#cad3d-select")) == null ? void 0 : _d.addEventListener("click", (a) => {
        var _a2;
        a.stopPropagation(), xt && (xt = false, Xt()), kt && Lo(), rt = !rt, (_a2 = re.querySelector("#cad3d-select")) == null ? void 0 : _a2.classList.toggle("inspect-active", rt);
        const $ = Ce();
        $ && ($.controls.enabled = !rt), rt || Io();
      }), (_e2 = re.querySelector("#cad3d-draw")) == null ? void 0 : _e2.addEventListener("click", (a) => {
        var _a2;
        a.stopPropagation(), xt && (xt = false, Xt()), rt && Io(), kt = !kt, (_a2 = re.querySelector("#cad3d-draw")) == null ? void 0 : _a2.classList.toggle("inspect-active", kt), kt ? qs() : Lo();
      }), (_f = re.querySelector("#cad3d-inspect")) == null ? void 0 : _f.addEventListener("click", (a) => {
        var _a2;
        a.stopPropagation(), rt && Io(), kt && Lo(), xt = !xt, (_a2 = re.querySelector("#cad3d-inspect")) == null ? void 0 : _a2.classList.toggle("inspect-active", xt), xt || Xt();
      }), (_g = re.querySelector("#cad3d-export")) == null ? void 0 : _g.addEventListener("click", (a) => {
        a.stopPropagation(), ks();
      });
      const t = re.querySelector("#cad3d-force-unit");
      t && (t.value = h, t.addEventListener("change", (a) => {
        a.stopPropagation(), h = t.value, T = Qt(h, O), E && Ie(E);
      }));
      const o = re.querySelector("#cad3d-length-unit");
      o && (o.value = O, o.addEventListener("change", (a) => {
        a.stopPropagation(), O = o.value, T = Qt(h, O), E && Ie(E);
      })), re.querySelectorAll("[data-preset]").forEach((a) => {
        a.addEventListener("click", (m) => {
          m.stopPropagation();
          const $ = a.dataset.preset, y = ye[$];
          y && (h = y.force, O = y.length, J = y.stress, T = Qt(h, O), t && (t.value = h), o && (o.value = O), re.querySelectorAll("[data-preset]").forEach((x) => {
            x.classList.toggle("active", x.dataset.preset === $);
          }), E && Ie(E), console.log(`Preset: ${$} \u2192 ${h}+${O}, stress: ${J.label}`));
        });
      }), (_h = re.querySelector("#cad3d-log")) == null ? void 0 : _h.addEventListener("click", (a) => {
        a.stopPropagation(), Ns();
      }), (_i = re.querySelector("#cad3d-pushover")) == null ? void 0 : _i.addEventListener("click", (a) => {
        a.stopPropagation(), Rs();
      }), (_j = re.querySelector("#cad3d-nonlinear")) == null ? void 0 : _j.addEventListener("click", (a) => {
        a.stopPropagation(), Bs();
      }), (_k = re.querySelector("#cad3d-fem-solver")) == null ? void 0 : _k.addEventListener("click", (a) => {
        a.stopPropagation(), Ds();
      }), (_l = re.querySelector("#cad3d-modal")) == null ? void 0 : _l.addEventListener("click", (a) => {
        var _a2, _b2;
        a.stopPropagation(), bt = !bt, (_a2 = re.querySelector("#cad3d-modal")) == null ? void 0 : _a2.classList.toggle("active", bt);
        const $ = re.querySelector("#cad3d-mode-prev"), y = re.querySelector("#cad3d-mode-next"), x = re.querySelector("#cad3d-mode-label"), p = re.querySelector("#cad3d-modal-scale");
        if (bt) {
          const g = Ce();
          ((_b2 = g == null ? void 0 : g.settings) == null ? void 0 : _b2.loads) && (zo = g.settings.loads.rawVal, g.settings.loads.val = false), Go(), $.style.display = "", y.style.display = "", x.style.display = "", p && (p.style.display = ""), n();
        } else Xo(), $.style.display = "none", y.style.display = "none", x.style.display = "none", p && (p.style.display = "none"), E && E !== "placa-q4" && E !== "placa-3q" && ae(), setTimeout(() => {
          var _a3;
          const g = Ce();
          ((_a3 = g == null ? void 0 : g.settings) == null ? void 0 : _a3.loads) && zo && (g.settings.loads.val = true);
        }, 600);
      });
      function n() {
        var _a2;
        const a = re.querySelector("#cad3d-mode-label");
        if (!a || !(De == null ? void 0 : De.frequencies)) return;
        const m = De.frequencies[ot], $ = m > 0 ? 1 / m : 0, y = [
          0,
          0,
          0,
          0,
          0,
          0
        ];
        for (let x = 0; x <= ot; x++) {
          const p = (_a2 = De.massParticipation) == null ? void 0 : _a2[x];
          if (p) for (let g = 0; g < 6; g++) y[g] += p[g];
        }
        a.textContent = `Modo ${ot + 1} \u2014 ${m.toFixed(2)} Hz \u2014 T=${$.toFixed(3)}s \u2014 \u03A3Ux=${(y[0] * 100).toFixed(1)}% \u03A3Uy=${(y[1] * 100).toFixed(1)}% \u03A3Rz=${(y[5] * 100).toFixed(1)}%`;
      }
      (_m = re.querySelector("#cad3d-mode-prev")) == null ? void 0 : _m.addEventListener("click", (a) => {
        if (a.stopPropagation(), !(De == null ? void 0 : De.modeShapes)) return;
        ot = (ot - 1 + De.modeShapes.length) % De.modeShapes.length;
        const m = De.modeShapes[ot], { extent: $ } = Nt();
        let y = 0;
        for (let x = 0; x < It.length; x++) {
          const p = m[x * 6] || 0, g = m[x * 6 + 1] || 0, w = m[x * 6 + 2] || 0;
          y = Math.max(y, Math.sqrt(p * p + g * g + w * w));
        }
        So = y > 1e-12 ? $ * 0.05 / y : 1, vo(), n();
      }), (_n2 = re.querySelector("#cad3d-mode-next")) == null ? void 0 : _n2.addEventListener("click", (a) => {
        if (a.stopPropagation(), !(De == null ? void 0 : De.modeShapes)) return;
        ot = (ot + 1) % De.modeShapes.length;
        const m = De.modeShapes[ot], { extent: $ } = Nt();
        let y = 0;
        for (let x = 0; x < It.length; x++) {
          const p = m[x * 6] || 0, g = m[x * 6 + 1] || 0, w = m[x * 6 + 2] || 0;
          y = Math.max(y, Math.sqrt(p * p + g * g + w * w));
        }
        So = y > 1e-12 ? $ * 0.05 / y : 1, vo(), n();
      });
      const l = re.querySelector("#cad3d-modal-scale");
      l == null ? void 0 : l.addEventListener("mousedown", (a) => a.stopPropagation()), l == null ? void 0 : l.addEventListener("change", () => {
        bt && (De == null ? void 0 : De.modeShapes) && vo();
      });
      const s = re.querySelector("#cad3d-cmd");
      s == null ? void 0 : s.addEventListener("mousedown", (a) => a.stopPropagation()), document.addEventListener("keydown", (a) => {
        var _a2;
        if ((a.ctrlKey || a.metaKey) && a.key === "z" && !a.shiftKey) {
          a.preventDefault(), Yn();
          return;
        }
        if ((a.ctrlKey || a.metaKey) && (a.key === "y" || a.key === "z" && a.shiftKey)) {
          a.preventDefault(), Vn();
          return;
        }
        if ((a.key === "Delete" || a.key === "Backspace") && He.size > 0) {
          a.preventDefault(), He.forEach((m) => se.add(m)), He.clear(), zt && (zt.remove(), zt = null), ae();
          return;
        }
        if (a.key === "Escape") {
          if (kt) if (Ne !== null) {
            Ne = null;
            const m = Ce();
            Ze && m && (m.scene.remove(Ze), Ze.geometry.dispose(), Ze.material.dispose(), Ze = null), Qe && m && (m.scene.remove(Qe), Qe.geometry.dispose(), Qe.material.dispose(), Qe = null), m == null ? void 0 : m.render();
          } else Lo();
          rt && Io(), xt && (xt = false, Xt(), (_a2 = re.querySelector("#cad3d-inspect")) == null ? void 0 : _a2.classList.remove("inspect-active"));
        }
      }), s == null ? void 0 : s.addEventListener("keydown", (a) => {
        if (a.key === "Enter") {
          const m = s.value.trim();
          if (m) {
            try {
              const $ = new Function("cad", `return ${m}`)(ze);
              $ !== void 0 && console.log($);
            } catch ($) {
              console.error($.message);
            }
            s.value = "";
          }
        }
      });
      let i = false, r = 0, c = 0, u = 0, d = 0;
      re.addEventListener("mousedown", (a) => {
        const m = a.target.tagName;
        if (m === "BUTTON" || m === "INPUT" || m === "SELECT") return;
        i = true;
        const $ = re.getBoundingClientRect();
        re.style.bottom = "unset", r = a.clientX, c = a.clientY, u = $.left, d = $.top, a.preventDefault();
      }), window.addEventListener("mousemove", (a) => {
        i && (a.preventDefault(), re.style.left = u + (a.clientX - r) + "px", re.style.top = d + (a.clientY - c) + "px");
      }), window.addEventListener("mouseup", () => {
        i = false;
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
      let o = 1 / 0, n = 1 / 0, l = 1 / 0, s = -1 / 0, i = -1 / 0, r = -1 / 0;
      for (const [d, a, m] of t) d < o && (o = d), d > s && (s = d), a < n && (n = a), a > i && (i = a), m < l && (l = m), m > r && (r = m);
      const c = new ue((o + s) / 2, (n + i) / 2, (l + r) / 2), u = Math.max(s - o, i - n, r - l, 1);
      return {
        center: c,
        extent: u
      };
    }
    function Ue(t = false) {
      const o = Ce();
      if (!o) return;
      const { extent: n } = Nt();
      let l;
      n <= 5 ? l = Math.max(1, Math.ceil(n * 1.5)) : n <= 50 ? l = Math.max(5, Math.ceil(n * 1.3 / 5) * 5) : l = Math.max(20, Math.ceil(n * 1.3 / 10) * 10), o.settings.gridSize.val = l, o.scene.children.filter((m) => m.type === "GridHelper").forEach((m) => {
        var _a, _b;
        (_a = m.geometry) == null ? void 0 : _a.dispose(), (_b = m.material) == null ? void 0 : _b.dispose(), o.scene.remove(m);
      });
      const i = Xs(), r = new sa(l, 20, i.grid, i.grid);
      r.rotation.x = Math.PI / 2, r.position.set(0.5 * l, 0.5 * l, 0), o.scene.add(r), o.scene.children.filter((m) => m.type === "Group" && m.name !== "gridAxes" && m.name !== "loadsGroup" && (m.name === "viewerAxes" || m.children.some(($) => $ instanceof To))).forEach((m) => {
        m.traverse(($) => {
          $.geometry && $.geometry.dispose(), $.material && ($.material.map && $.material.map.dispose(), $.material.dispose());
        }), o.scene.remove(m);
      });
      const u = 0.05 * l, d = new fs();
      d.name = "viewerAxes";
      const a = i.axisArrow;
      d.add(new To(new ue(1, 0, 0), new ue(), 1, a, 0.2, 0.2)), d.add(new To(new ue(0, 1, 0), new ue(), 1, a, 0.2, 0.2)), d.add(new To(new ue(0, 0, 1), new ue(), 1, a, 0.2, 0.2)), d.children.forEach((m) => m.scale.set(u, u, u));
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
        const g = new us(x);
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
      var _a;
      const o = Ce();
      if (!o) return;
      const { center: n, extent: l } = Nt(), s = o.renderer.domElement.clientWidth / (o.renderer.domElement.clientHeight || 1), i = l * 0.7;
      o.controls.maxDistance = l * 5, o.controls.minDistance = l * 0.05, o.renderer.clippingPlanes = [];
      const r = () => {
        o.scene.traverse((c) => {
          var _a2;
          if (!c.material) return;
          const u = c.type === "GridHelper" || c.type === "AxesHelper", d = c.isSprite, a = ((_a2 = c.userData) == null ? void 0 : _a2.noClip) === true;
          (u || d || a) && (Array.isArray(c.material) ? c.material.forEach((m) => {
            m.clippingPlanes = [];
          }) : c.material.clippingPlanes = []);
        });
      };
      if (t === "3d") {
        const c = o.perspCamera.fov, u = l / (2 * Math.tan(c * Math.PI / 360)) * 2.2;
        o.perspCamera.position.set(n.x + u * 0.5, n.y - u * 0.8, n.z + u * 0.5), o.controls.target.copy(n), o.setActiveCamera(o.perspCamera);
      } else {
        const c = o.orthoCamera;
        c.left = -i * s, c.right = i * s, c.top = i, c.bottom = -i, c.near = -l * 10, c.far = l * 10, c.updateProjectionMatrix();
        const u = (d, a, m) => {
          c.position.copy(d), c.up.copy(m), o.controls.target.copy(a), c.lookAt(a), o.controls.update();
        };
        if (t === "plan") o.renderer.clippingPlanes = [], u(new ue(n.x, n.y, n.z + l * 2), new ue(n.x, n.y, n.z), new ue(0, 1, 0));
        else if (t.startsWith("plan:")) {
          const d = parseInt(t.split(":")[1]), a = ((_a = Z.hPiso) == null ? void 0 : _a.val) ?? 3, m = (d + 1) * a, $ = a * 0.45;
          o.renderer.clippingPlanes = [
            new Wt(new ue(0, 0, -1), m + $),
            new Wt(new ue(0, 0, 1), -m + $)
          ], r(), u(new ue(n.x, n.y, m + l * 2), new ue(n.x, n.y, m), new ue(0, 1, 0));
        } else if (t === "elevX") c.position.set(n.x + l * 2, n.y, n.z), c.up.set(0, 0, 1);
        else if (t === "elevY") c.position.set(n.x, n.y - l * 2, n.z), c.up.set(0, 0, 1);
        else if (t.startsWith("axisX:")) {
          const d = parseInt(t.split(":")[1]), a = _t[d] ?? n.x;
          if (At.length > 1) {
            const $ = Dn(_t, d, l);
            o.renderer.clippingPlanes = [
              new Wt(new ue(-1, 0, 0), a + $),
              new Wt(new ue(1, 0, 0), -a + $)
            ], r(), c.position.set(n.x + l * 2, n.y, n.z), o.controls.target.set(n.x, n.y, n.z);
          } else c.position.set(n.x, n.y - l * 2, n.z), o.controls.target.copy(n);
          c.up.set(0, 0, 1);
        } else if (t.startsWith("axisY:")) {
          const d = parseInt(t.split(":")[1]), a = At[d] ?? n.y;
          if (_t.length > 1) {
            const $ = Dn(At, d, l);
            o.renderer.clippingPlanes = [
              new Wt(new ue(0, -1, 0), a + $),
              new Wt(new ue(0, 1, 0), -a + $)
            ], r(), c.position.set(n.x, n.y - l * 2, n.z), o.controls.target.set(n.x, n.y, n.z);
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
      const o = (i, r, c) => {
        const u = document.createElement("button");
        return u.textContent = i, u.dataset.view = r, u.title = c, u.style.cssText = "min-width:22px;padding:1px 5px;font-weight:bold", u.addEventListener("click", (d) => {
          var _a;
          d.stopPropagation();
          const a = u.classList.contains("view-active");
          re.querySelectorAll("[data-view]").forEach((m) => m.classList.remove("view-active")), a ? (Rt("3d"), (_a = re.querySelector('[data-view="3d"]')) == null ? void 0 : _a.classList.add("view-active")) : (Rt(r), u.classList.add("view-active"));
        }), u;
      }, n = document.createElement("span");
      n.textContent = "Ejes:", n.style.cssText = "color:#888;font-size:10px;margin-right:2px;align-self:center", t.appendChild(n);
      const l = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      _t.forEach((i, r) => {
        const c = r < l.length ? l[r] : `X${r}`;
        t.appendChild(o(c, `axisX:${r}`, `Eje ${c} \u2014 elevaci\xF3n mirando en Y`));
      });
      const s = document.createElement("span");
      s.textContent = "|", s.style.cssText = "color:#555;margin:0 3px;align-self:center;font-weight:bold", t.appendChild(s), At.forEach((i, r) => {
        const c = `${r + 1}`;
        t.appendChild(o(c, `axisY:${r}`, `Eje ${c} \u2014 elevaci\xF3n mirando en X`));
      });
    }
    function Jn() {
      var _a;
      const t = re.querySelector("#cad3d-floor-buttons");
      if (!t) return;
      const o = Math.round(((_a = Z.nPisos) == null ? void 0 : _a.val) ?? 0);
      if (o < 1) {
        t.style.display = "none";
        return;
      }
      t.style.display = "", t.innerHTML = "";
      const n = (s, i, r) => {
        const c = document.createElement("button");
        return c.textContent = s, c.dataset.view = i, c.title = r, c.style.cssText = "min-width:22px;padding:1px 5px;font-weight:bold", c.addEventListener("click", (u) => {
          var _a2;
          u.stopPropagation();
          const d = c.classList.contains("view-active");
          re.querySelectorAll("[data-view]").forEach((a) => a.classList.remove("view-active")), d ? (Rt("3d"), (_a2 = re.querySelector('[data-view="3d"]')) == null ? void 0 : _a2.classList.add("view-active")) : (Rt(i), c.classList.add("view-active"));
        }), c;
      }, l = document.createElement("span");
      l.textContent = "Planta:", l.style.cssText = "color:#888;font-size:10px;margin-right:2px;align-self:center", t.appendChild(l);
      for (let s = 0; s < o; s++) t.appendChild(n(`P${s + 1}`, `plan:${s}`, `Planta Piso ${s + 1}`));
    }
    function zs() {
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
    let xt = false, rt = false, kt = false, nt = "line", dt = [], Ne = null, Ze = null, Qe = null, so = null, pt = null;
    const je = {
      node: true,
      grid: true,
      midpoint: true,
      track: true
    }, en = 0.5;
    let tn = [], ft = null, Gt = null;
    const ao = [], Eo = [], Es = 50;
    function lo() {
      ao.push({
        nodes: JSON.parse(JSON.stringify(e.nodes.val)),
        elements: JSON.parse(JSON.stringify(e.elements.val))
      }), ao.length > Es && ao.shift(), Eo.length = 0;
    }
    function Yn() {
      if (ao.length === 0) return;
      Eo.push({
        nodes: JSON.parse(JSON.stringify(e.nodes.val)),
        elements: JSON.parse(JSON.stringify(e.elements.val))
      });
      const t = ao.pop();
      e.nodes.val = t.nodes, e.elements.val = t.elements, Ht(), e.elementInputs.val = {
        ...e.elementInputs.val
      };
    }
    function Vn() {
      if (Eo.length === 0) return;
      ao.push({
        nodes: JSON.parse(JSON.stringify(e.nodes.val)),
        elements: JSON.parse(JSON.stringify(e.elements.val))
      });
      const t = Eo.pop();
      e.nodes.val = t.nodes, e.elements.val = t.elements, Ht(), e.elementInputs.val = {
        ...e.elementInputs.val
      };
    }
    const He = /* @__PURE__ */ new Set();
    let it = null, Ot = [], St = null, zt = null;
    function on(t) {
      const o = Ce();
      if (!o) return;
      const n = e.nodes.val, l = e.elements.val[t];
      if (!l) return;
      const s = [];
      for (let c = 0; c < l.length; c++) {
        const u = n[l[c]], d = n[l[(c + 1) % l.length]];
        s.push(u[0], u[1], u[2], d[0], d[1], d[2]);
      }
      const i = new Kt();
      i.setAttribute("position", new Ut(s, 3));
      const r = new $o(i, new wo({
        color: 16711935,
        linewidth: 3,
        depthTest: false
      }));
      r.renderOrder = 9998, r.__elemIdx = t, o.scene.add(r), Ot.push(r), o.render();
    }
    function Bt() {
      const t = Ce();
      Ot.forEach((o) => {
        t == null ? void 0 : t.scene.remove(o), o.geometry.dispose(), o.material.dispose();
      }), Ot = [], t == null ? void 0 : t.render();
    }
    function jt() {
      zt && zt.remove();
      const t = X.size > 0 || B;
      if (He.size === 0 && !t) {
        zt = null;
        return;
      }
      const o = document.createElement("div");
      o.style.cssText = "position:fixed;bottom:20px;left:50%;transform:translateX(-50%);background:var(--cad-bg);color:var(--cad-text);border:2px solid var(--cad-heading);border-radius:8px;padding:10px 16px;z-index:10000;font-family:monospace;font-size:13px;display:flex;gap:12px;align-items:center;box-shadow:0 4px 20px var(--cad-shadow);", o.innerHTML = `
      <span style="color:var(--cad-heading);font-weight:bold;">${He.size} elem.</span>
      <button id="sel-assign" style="padding:5px 8px;background:#336699;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:12px;" title="Asignar secci\xF3n">\u{1F4D0}</button>
      <button id="sel-info" style="padding:5px 8px;background:#225588;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:12px;" title="Info del elemento">\u{1F50D}</button>
      <button id="sel-hide" style="padding:5px 8px;background:#665500;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:12px;" title="Ocultar seleccionados">\u{1F441}\u200D\u{1F5E8}</button>
      <button id="sel-isolate" style="padding:5px 8px;background:#006633;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:12px;" title="Aislar (mostrar solo seleccionados)">\u25CE</button>
      <button id="sel-showall" style="padding:5px 8px;background:#444;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:12px;" title="Mostrar todo">\u21BA</button>
      <button id="sel-delete" style="padding:5px 8px;background:#cc3333;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:12px;" title="Eliminar seleccionados">\u{1F5D1}</button>
      <button id="sel-clear" style="padding:5px 8px;background:#555;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:12px;" title="Limpiar selecci\xF3n">\u2715</button>
    `, document.body.appendChild(o), zt = o, o.querySelector("#sel-assign").addEventListener("click", () => {
        Ws([
          ...He
        ]);
      }), o.querySelector("#sel-info").addEventListener("click", () => {
        if (He.size === 1) {
          const n = [
            ...He
          ][0];
          es(n);
        } else {
          const n = [
            ...He
          ], l = e.nodes.val, s = e.elements.val;
          let i = 0, r = 0, c = 0, u = 0;
          n.forEach((a) => {
            const m = s[a];
            if (m) if (m.length === 2) {
              const $ = l[m[0]], y = l[m[1]], x = Math.abs(y[0] - $[0]), p = Math.abs(y[1] - $[1]), g = Math.abs(y[2] - $[2]);
              g > x && g > p ? i++ : r++;
            } else m.length === 3 ? c++ : m.length === 4 && u++;
          });
          const d = [];
          i && d.push(`${i} columnas`), r && d.push(`${r} vigas`), u && d.push(`${u} shells Q4`), c && d.push(`${c} triangulos`), alert(`${n.length} elementos seleccionados:
${d.join(", ")}`);
        }
      }), o.querySelector("#sel-hide").addEventListener("click", () => {
        He.forEach((n) => X.add(n)), He.clear(), Bt(), jt(), ae();
      }), o.querySelector("#sel-isolate").addEventListener("click", () => {
        B = true, de.clear(), He.forEach((n) => de.add(n)), He.clear(), Bt(), jt(), ae();
      }), o.querySelector("#sel-showall").addEventListener("click", () => {
        X.clear(), B = false, de.clear(), jt(), ae();
      }), o.querySelector("#sel-delete").addEventListener("click", () => {
        lo(), He.forEach((n) => se.add(n)), He.clear(), Bt(), jt(), ae();
      }), o.querySelector("#sel-clear").addEventListener("click", () => {
        He.clear(), Bt(), jt();
      });
    }
    function Io() {
      var _a;
      rt = false, He.clear(), Bt(), zt && (zt.remove(), zt = null), (_a = re.querySelector("#cad3d-select")) == null ? void 0 : _a.classList.remove("inspect-active");
      const o = Ce();
      o && (o.controls.enabled = true);
    }
    function Xt() {
      if (it) {
        const t = Ce();
        t == null ? void 0 : t.scene.remove(it), it.geometry.dispose(), it.material.dispose(), it = null, t == null ? void 0 : t.render();
      }
      St && (St.remove(), St = null);
    }
    function Is(t) {
      nn();
      const o = Ce();
      if (!o) return;
      const n = e.nodes.val[t];
      if (!n) return;
      Gt = t;
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
      for (const [i, r] of s) {
        const c = new Float32Array([
          n[0] - i[0] * l,
          n[1] - i[1] * l,
          n[2] - i[2] * l,
          n[0] + i[0] * l,
          n[1] + i[1] * l,
          n[2] + i[2] * l
        ]), u = new Kt();
        u.setAttribute("position", new Zs(c, 3));
        const d = new ps({
          color: r,
          dashSize: 0.3,
          gapSize: 0.15,
          transparent: true,
          opacity: 0.4,
          depthTest: false
        }), a = new $o(u, d);
        a.computeLineDistances(), a.renderOrder = 9990, o.scene.add(a), tn.push(a);
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
      const s = l.x - n.x, i = l.y - n.y, r = l.z - n.z, c = Math.sqrt(s * s + i * i + r * r), u = Math.abs(s), d = Math.abs(i), a = Math.abs(r);
      let m = "";
      u > d && u > a ? m = `\u0394X=${s.toFixed(2)}` : d > u && d > a ? m = `\u0394Y=${i.toFixed(2)}` : a > 0.01 && (m = `\u0394Z=${r.toFixed(2)}`), ft.textContent = `${c.toFixed(3)} m  ${m}`, ft.style.left = t + 20 + "px", ft.style.top = o - 10 + "px";
    }
    function Ls(t, o) {
      const l = e.nodes.val[o];
      if (!l) return null;
      const s = new ue(l[0], l[1], l[2]), i = t.clone(), r = i.clone().sub(s), c = 0.3, u = Math.abs(r.x), d = Math.abs(r.y), a = Math.abs(r.z);
      return d < c && a < c && u > 0.01 ? new ue(i.x, s.y, s.z) : u < c && a < c && d > 0.01 ? new ue(s.x, i.y, s.z) : u < c && d < c && a > 0.01 ? new ue(s.x, s.y, i.z) : null;
    }
    function Lo() {
      var _a;
      const t = Ce();
      Ze && t && (t.scene.remove(Ze), Ze.geometry.dispose(), Ze.material.dispose(), Ze = null), Qe && t && (t.scene.remove(Qe), Qe.geometry.dispose(), Qe.material.dispose(), Qe = null), nn(), Ne = null, pt = null, kt = false, so && (so.remove(), so = null), (_a = re.querySelector("#cad3d-draw")) == null ? void 0 : _a.classList.remove("inspect-active"), t == null ? void 0 : t.render();
    }
    function qs() {
      so && so.remove();
      const t = document.createElement("div");
      t.style.cssText = "position:fixed;bottom:60px;left:50%;transform:translateX(-50%);background:var(--cad-bg);border:1px solid var(--cad-border);border-radius:6px;padding:6px 10px;z-index:10000;display:flex;gap:6px;align-items:center;font-family:monospace;font-size:11px;box-shadow:0 2px 10px var(--cad-shadow);";
      const o = (s) => `padding:4px 10px;border:1px solid ${s ? "#00ccff" : "#555"};background:${s ? "#003355" : "#333"};color:${s ? "#00ccff" : "#ccc"};border-radius:3px;cursor:pointer;font-size:11px;font-family:monospace;`, n = (s) => `padding:3px 6px;border:1px solid ${s ? "#33ff33" : "#444"};background:${s ? "#113311" : "#222"};color:${s ? "#33ff33" : "#888"};border-radius:3px;cursor:pointer;font-size:10px;`;
      t.innerHTML = `
      <span style="color:#00ccff;font-weight:bold;margin-right:4px;">Draw:</span>
      <button id="dt-line" style="${o(nt === "line")}">\u{1F4CF} Line</button>
      <button id="dt-arc" style="${o(nt === "arc")}">\u2312 Arc</button>
      <button id="dt-node" style="${o(nt === "node")}">\u2295 Node</button>
      <button id="dt-area" style="${o(nt === "area")}">\u25A2 Area</button>
      <span style="color:#666;margin:0 4px;">|</span>
      <span style="color:#888;font-size:10px;">Snap:</span>
      <button id="ds-node" style="${n(je.node)}">Node</button>
      <button id="ds-grid" style="${n(je.grid)}">Grid</button>
      <button id="ds-mid" style="${n(je.midpoint)}">Mid</button>
      <button id="ds-track" style="${n(je.track)}">Prolong</button>
      <span style="color:#666;margin:0 4px;">|</span>
      <span style="color:#888;font-size:10px;">Grid:</span>
      <input id="ds-gridsize" type="number" value="${en}" step="0.1" min="0.1" max="10" style="width:45px;background:#333;color:#fff;border:1px solid #555;padding:2px;font-size:10px;">
      <span style="color:#888;font-size:10px;">m</span>
      <span style="color:#666;margin:0 4px;">|</span>
      <button id="dt-undo" style="padding:3px 6px;background:#444;color:#ccc;border:1px solid #555;border-radius:3px;cursor:pointer;font-size:10px;" title="Ctrl+Z">\u21A9 Undo</button>
      <button id="dt-redo" style="padding:3px 6px;background:#444;color:#ccc;border:1px solid #555;border-radius:3px;cursor:pointer;font-size:10px;" title="Ctrl+Y">\u21AA Redo</button>
    `, document.body.appendChild(t), so = t;
      const l = () => {
        const s = t.querySelector("#dt-line"), i = t.querySelector("#dt-arc"), r = t.querySelector("#dt-node"), c = t.querySelector("#dt-area");
        s && (s.style.cssText = o(nt === "line")), i && (i.style.cssText = o(nt === "arc")), r && (r.style.cssText = o(nt === "node")), c && (c.style.cssText = o(nt === "area"));
        const u = t.querySelector("#ds-node"), d = t.querySelector("#ds-grid"), a = t.querySelector("#ds-mid"), m = t.querySelector("#ds-track");
        u && (u.style.cssText = n(je.node)), d && (d.style.cssText = n(je.grid)), a && (a.style.cssText = n(je.midpoint)), m && (m.style.cssText = n(je.track));
      };
      t.querySelector("#dt-line").addEventListener("click", () => {
        nt = "line", Ne = null, pt = null, dt = [], l();
      }), t.querySelector("#dt-arc").addEventListener("click", () => {
        nt = "arc", Ne = null, pt = null, dt = [], l();
      }), t.querySelector("#dt-node").addEventListener("click", () => {
        nt = "node", Ne = null, pt = null, dt = [], l();
      }), t.querySelector("#dt-area").addEventListener("click", () => {
        nt = "area", Ne = null, pt = null, dt = [], console.log("Area mode: click vertices del poligono. Doble-click o click cerca del 1er punto para cerrar."), l();
      }), t.querySelector("#ds-node").addEventListener("click", () => {
        je.node = !je.node, l();
      }), t.querySelector("#ds-grid").addEventListener("click", () => {
        je.grid = !je.grid, l();
      }), t.querySelector("#ds-mid").addEventListener("click", () => {
        je.midpoint = !je.midpoint, l();
      }), t.querySelector("#ds-track").addEventListener("click", () => {
        je.track = !je.track, je.track || nn(), l();
      }), t.querySelector("#ds-gridsize").addEventListener("change", (s) => {
        je.gridSize = parseFloat(s.target.value) || 0.5;
      }), t.querySelector("#dt-undo").addEventListener("click", () => Yn()), t.querySelector("#dt-redo").addEventListener("click", () => Vn());
    }
    function Xn(t, o, n, l) {
      const s = l.getBoundingClientRect(), i = (t - s.left) / s.width * 2 - 1, r = -((o - s.top) / s.height) * 2 + 1, c = new cs();
      c.setFromCamera(new ds(i, r), n);
      const u = e.nodes.val, d = e.elements.val, a = 0.12;
      if (je.node) {
        let y = -1, x = 1 / 0;
        for (let p = 0; p < u.length; p++) {
          const g = u[p], w = new ue(g[0], g[1], g[2]).project(n), z = Math.sqrt((w.x - i) ** 2 + (w.y - r) ** 2);
          z < a && z < x && (x = z, y = p);
        }
        if (y >= 0) return {
          nodeIdx: y,
          worldPos: new ue(...u[y]),
          snapType: "node"
        };
      }
      if (je.midpoint) {
        let y = 1 / 0, x = null;
        for (const p of d) {
          if (p.length !== 2) continue;
          const g = u[p[0]], w = u[p[1]], z = new ue((g[0] + w[0]) / 2, (g[1] + w[1]) / 2, (g[2] + w[2]) / 2), S = z.clone().project(n), H = Math.sqrt((S.x - i) ** 2 + (S.y - r) ** 2);
          H < a * 0.8 && H < y && (y = H, x = z);
        }
        if (x) return {
          nodeIdx: null,
          worldPos: x,
          snapType: "mid"
        };
      }
      if (je.grid) {
        const y = new Wt(new ue(0, 0, 1), 0), x = new ue();
        if (c.ray.intersectPlane(y, x)) {
          const p = je.gridSize || en;
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
      if (Qe && (o.scene.remove(Qe), Qe.geometry.dispose(), Qe.material.dispose(), Qe = null), t.worldPos) {
        const l = t.snapType === "node" ? 16776960 : t.snapType === "mid" ? 16711935 : t.snapType === "grid" ? 65535 : 8947848, s = t.snapType === "node" ? 0.08 : 0.06, i = t.snapType === "mid" ? new Qs(s * 2, s * 2, s * 2) : new ea(s, 12, 12), r = new ta({
          color: l,
          transparent: true,
          opacity: 0.8,
          depthTest: false
        });
        Qe = new oa(i, r), Qe.position.copy(t.worldPos), Qe.renderOrder = 9999, o.scene.add(Qe);
      }
      if (Ze && (o.scene.remove(Ze), Ze.geometry.dispose(), Ze.material.dispose(), Ze = null), Ne !== null && t.worldPos) {
        const l = n[Ne], s = new Kt();
        if (nt === "arc" && pt !== null) {
          const r = n[pt], c = Un(new ue(l[0], l[1], l[2]), new ue(r[0], r[1], r[2]), t.worldPos, 16), u = [];
          for (let d = 0; d < c.length - 1; d++) u.push(c[d].x, c[d].y, c[d].z, c[d + 1].x, c[d + 1].y, c[d + 1].z);
          s.setAttribute("position", new Ut(u, 3));
        } else s.setAttribute("position", new Ut([
          l[0],
          l[1],
          l[2],
          t.worldPos.x,
          t.worldPos.y,
          t.worldPos.z
        ], 3));
        const i = new wo({
          color: 65280,
          linewidth: 2,
          depthTest: false
        });
        Ze = new un(s, i), nt === "arc" && pt !== null && (Ze = new $o(s, i)), Ze.renderOrder = 9999, o.scene.add(Ze);
      }
      o.render();
    }
    function Un(t, o, n, l) {
      const s = [];
      for (let i = 0; i <= l; i++) {
        const r = i / l, c = o.clone().multiplyScalar(2).sub(t.clone().multiplyScalar(0.5)).sub(n.clone().multiplyScalar(0.5)), u = (1 - r) * (1 - r), d = 2 * (1 - r) * r, a = r * r;
        s.push(new ue(u * t.x + d * c.x + a * n.x, u * t.y + d * c.y + a * n.y, u * t.z + d * c.z + a * n.z));
      }
      return s;
    }
    function sn(t) {
      if (t.nodeIdx !== null) return t.nodeIdx;
      if (!t.worldPos) return -1;
      const o = e.nodes.val, n = 1e-3;
      for (let s = 0; s < o.length; s++) if (Math.abs(o[s][0] - t.worldPos.x) < n && Math.abs(o[s][1] - t.worldPos.y) < n && Math.abs(o[s][2] - t.worldPos.z) < n) return s;
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
    function Ts(t) {
      var _a;
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
        const o = sn(t);
        if (o < 0) return;
        if (Ne === null) {
          Ne = o;
          return;
        }
        if (o === Ne) return;
        lo();
        const n = [
          ...e.elements.val
        ];
        n.some((s) => s.length === 2 && (s[0] === Ne && s[1] === o || s[1] === Ne && s[0] === o)) || (n.push([
          Ne,
          o
        ]), e.elements.val = n, Ht(), e.elementInputs.val = {
          ...e.elementInputs.val
        }), Ne = o;
        return;
      }
      if (nt === "arc") {
        const o = sn(t);
        if (o < 0) return;
        if (Ne === null) {
          Ne = o;
          return;
        }
        if (pt === null) {
          if (o === Ne) return;
          pt = o;
          return;
        }
        if (o === Ne || o === pt) return;
        const n = e.nodes.val, l = new ue(...n[Ne]), s = new ue(...n[pt]), i = new ue(...n[o]), r = Math.max(4, Math.round(((_a = Z.nSubViga) == null ? void 0 : _a.val) ?? 8)), c = Un(l, s, i, r);
        lo();
        const u = [
          ...e.nodes.val
        ], d = [
          ...e.elements.val
        ];
        let a = Ne;
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
            a,
            $
          ]), a = $;
        }
        e.nodes.val = u, e.elements.val = d, Ht(), e.elementInputs.val = {
          ...e.elementInputs.val
        }, Ne = o, pt = null;
        return;
      }
      if (nt === "area") {
        const o = sn(t);
        if (o < 0) return;
        if (dt.length >= 3 && o === dt[0]) {
          lo();
          const n = [
            ...e.nodes.val
          ], l = [
            ...e.elements.val
          ], s = dt.map((i) => n[i]);
          try {
            const i = Ft({
              points: s,
              polygon: Array.from({
                length: s.length
              }, (c, u) => u),
              maxMeshSize: en || 0.5
            }), r = [];
            for (const c of i.nodes) {
              let u = -1;
              for (let d = 0; d < n.length; d++) {
                const a = Math.abs(n[d][0] - c[0]), m = Math.abs(n[d][1] - c[1]), $ = Math.abs(n[d][2] - c[2]);
                if (a < 0.01 && m < 0.01 && $ < 0.01) {
                  u = d;
                  break;
                }
              }
              u >= 0 ? r.push(u) : (r.push(n.length), n.push([
                c[0],
                c[1],
                c[2]
              ]));
            }
            for (const c of i.elements) l.push([
              r[c[0]],
              r[c[1]],
              r[c[2]]
            ]);
            e.nodes.val = n, e.elements.val = l, Ht(), console.log(`Area: ${i.elements.length} triangulos creados desde ${dt.length} vertices`);
          } catch (i) {
            console.error("Area mesh failed:", i.message);
          }
          dt = [];
          return;
        }
        if (dt.push(o), console.log(`Area vertex ${dt.length}: node ${o}`), dt.length >= 2) {
          const n = dt[dt.length - 2], l = e.nodes.val, s = Ce();
          if (s) {
            const i = new Kt().setFromPoints([
              new ue(...l[n]),
              new ue(...l[o])
            ]), r = new $o(i, new wo({
              color: 65280,
              linewidth: 2
            }));
            r.name = "area-preview", s.scene.add(r), s.render();
          }
        }
        return;
      }
    }
    function Zn(t) {
      const o = Ce();
      if (!o) return;
      it && (o.scene.remove(it), it.geometry.dispose(), it.material.dispose());
      const n = e.nodes.val, l = e.elements.val[t];
      if (!l) return;
      const s = [];
      for (let r = 0; r < l.length; r++) {
        const c = n[l[r]], u = n[l[(r + 1) % l.length]];
        s.push(c[0], c[1], c[2], u[0], u[1], u[2]);
      }
      const i = new Kt();
      i.setAttribute("position", new Ut(s, 3)), it = new $o(i, new wo({
        color: 16776960,
        linewidth: 3,
        depthTest: false
      })), it.renderOrder = 9999, o.scene.add(it), o.render();
    }
    function an(t) {
      const o = Ce();
      if (!o) return -1;
      const n = o.renderer.domElement.getBoundingClientRect(), l = new ds((t.clientX - n.left) / n.width * 2 - 1, -((t.clientY - n.top) / n.height) * 2 + 1), s = new cs();
      s.setFromCamera(l, o.controls.object), s.params.Line = {
        threshold: 0.5
      };
      const i = e.nodes.val, r = e.elements.val;
      if (i.length === 0 || r.length === 0) return -1;
      let c = 1 / 0, u = -1;
      const d = s.ray;
      for (let m = 0; m < r.length; m++) {
        const $ = r[m];
        if ($.length === 2) {
          const y = new ue(...i[$[0]]), x = new ue(...i[$[1]]), p = new na(y, x), g = new ue(), w = new ue();
          d.closestPointToPoint(p.getCenter(new ue()), g), p.closestPointToPoint(g, true, w);
          const z = g.distanceTo(w);
          z < c && (c = z, u = m);
        } else if ($.length === 3) {
          const y = new ue(...i[$[0]]), x = new ue(...i[$[1]]), p = new ue(...i[$[2]]), g = new ue();
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
          const y = new ue(...i[$[0]]), x = new ue(...i[$[1]]), p = new ue(...i[$[2]]), g = new ue(...i[$[3]]), w = new ue();
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
      const { extent: a } = Nt();
      return c < a * 0.1 ? u : -1;
    }
    function j(t, o = 4) {
      return Math.abs(t) < 1e-10 ? "0" : Math.abs(t) >= 1e6 ? t.toExponential(2) : Math.abs(t) >= 100 ? t.toFixed(1) : t.toFixed(o);
    }
    function ln(t, o, n = 12) {
      var _a;
      const l = Math.min(t.length, n), s = Math.min(((_a = t[0]) == null ? void 0 : _a.length) || 0, n);
      let i = "<table>";
      if (o) {
        i += '<tr><td class="header"></td>';
        for (let r = 0; r < s; r++) i += `<td class="header">${o[r] || r}</td>`;
        i += "</tr>";
      }
      for (let r = 0; r < l; r++) {
        i += "<tr>", o && (i += `<td class="header">${o[r] || r}</td>`);
        for (let c = 0; c < s; c++) {
          const u = t[r][c], d = Math.abs(u) > 1e-10 ? "nonzero" : "";
          i += `<td class="${d}">${j(u, 2)}</td>`;
        }
        i += "</tr>";
      }
      return i += "</table>", i;
    }
    function ie(t, o) {
      return `<span class="frac"><span class="frac-num">${t}</span><span class="frac-den">${o}</span></span>`;
    }
    function F(t, o, n) {
      let l = `<span class="var">${t}</span>`;
      return o && (l += `<sub>${o}</sub>`), l;
    }
    function Fs(t, o, n, l, s, i, r) {
      const c = `${ie(F("E") + "\xB7" + F("A"), F("L"))}`, u = `${ie("12\xB7" + F("E") + "\xB7" + F("I", "z"), F("L") + "\xB3")}`, d = `${ie("12\xB7" + F("E") + "\xB7" + F("I", "y"), F("L") + "\xB3")}`, a = `${ie(F("G") + "\xB7" + F("J"), F("L"))}`, m = `${ie("4\xB7" + F("E") + "\xB7" + F("I", "y"), F("L"))}`, $ = `${ie("4\xB7" + F("E") + "\xB7" + F("I", "z"), F("L"))}`;
      return `<div class="fem-eq eq-box">
      <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">Coeficientes de rigidez:</strong></div>
      <div>${c} = ${ie(j(t) + "\xB7" + j(o), j(r))} = <span class="highlight">${j(t * o / r)}</span></div>
      <div>${u} = ${ie("12\xB7" + j(t) + "\xB7" + j(n), j(r) + "\xB3")} = <span class="highlight">${j(12 * t * n / r ** 3)}</span></div>
      <div>${d} = ${ie("12\xB7" + j(t) + "\xB7" + j(l), j(r) + "\xB3")} = <span class="highlight">${j(12 * t * l / r ** 3)}</span></div>
      <div>${a} = ${ie(j(s) + "\xB7" + j(i), j(r))} = <span class="highlight">${j(s * i / r)}</span></div>
      <div>${m} = ${ie("4\xB7" + j(t) + "\xB7" + j(l), j(r))} = <span class="highlight">${j(4 * t * l / r)}</span></div>
      <div>${$} = ${ie("4\xB7" + j(t) + "\xB7" + j(n), j(r))} = <span class="highlight">${j(4 * t * n / r)}</span></div>
    </div>
    <div class="fem-eq">
      ${F("k", "local")} = <span class="mat-sym" style="grid-template-columns:repeat(4,auto)">
        <span class="cell">${ie(F("EA"), F("L"))}</span><span class="cell">0</span><span class="cell dots">\u22EF</span><span class="cell">${ie("\u2212" + F("EA"), F("L"))}</span>
        <span class="cell">0</span><span class="cell">${ie("12" + F("EI", "z"), F("L") + "\xB3")}</span><span class="cell dots">\u22EF</span><span class="cell">0</span>
        <span class="cell dots">\u22EE</span><span class="cell dots">\u22EE</span><span class="cell dots">\u22F1</span><span class="cell dots">\u22EE</span>
        <span class="cell">${ie("\u2212" + F("EA"), F("L"))}</span><span class="cell">0</span><span class="cell dots">\u22EF</span><span class="cell">${ie(F("EA"), F("L"))}</span>
      </span>
      <sub style="color:var(--fem-label)">12\xD712</sub>
    </div>`;
    }
    function Ps(t) {
      if (t.length === 2) {
        const n = Pt(t[1], t[0]), l = eo(n), s = n[0] / l, i = n[1] / l, r = n[2] / l;
        return `<div class="fem-eq eq-box">
        <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">Cosenos directores:</strong></div>
        <div>${F("l")} = cos(\u03B1) = ${ie("\u0394x", F("L"))} = ${ie(j(n[0]), j(l))} = <span class="highlight">${j(s)}</span></div>
        <div>${F("m")} = cos(\u03B2) = ${ie("\u0394y", F("L"))} = ${ie(j(n[1]), j(l))} = <span class="highlight">${j(i)}</span></div>
        <div>${F("n")} = cos(\u03B3) = ${ie("\u0394z", F("L"))} = ${ie(j(n[2]), j(l))} = <span class="highlight">${j(r)}</span></div>
      </div>
      <div class="fem-eq">
        \u03BB = <span class="mat-sym" style="grid-template-columns:repeat(3,auto)">
          <span class="cell">${F("l")}</span><span class="cell">${F("m")}</span><span class="cell">${F("n")}</span>
          <span class="cell">${ie("\u2212" + F("m"), F("D"))}</span><span class="cell">${ie(F("l"), F("D"))}</span><span class="cell">0</span>
          <span class="cell">${ie("\u2212" + F("l") + "\xB7" + F("n"), F("D"))}</span><span class="cell">${ie("\u2212" + F("m") + "\xB7" + F("n"), F("D"))}</span><span class="cell">${F("D")}</span>
        </span>
        &nbsp; donde ${F("D")} = \u221A(${F("l")}\xB2 + ${F("m")}\xB2)
      </div>
      <div class="fem-eq">
        ${F("T")} = ${F("I", "4")} \u2297 \u03BB &nbsp; <sub style="color:var(--fem-label)">(Kronecker, 12\xD712)</sub>
      </div>`;
      }
      return `<div class="fem-eq">${F("T")} \u2014 sistema local del tri\xE1ngulo (normal \xD7 lados) <sub>18\xD718</sub></div>`;
    }
    function Cs() {
      return `<div class="fem-eq">
      ${F("K", "global")} = ${F("T")}<sup>T</sup> \xB7 ${F("k", "local")} \xB7 ${F("T")}
    </div>`;
    }
    function _s(t) {
      const o = t.map((n) => `6\xB7${n} = ${6 * n}`).join(", ");
      return `<div class="fem-eq eq-box">
      <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">Ensamblaje en K global:</strong></div>
      <div>${F("K", "global")}[${F("i")}, ${F("j")}] += ${F("K", "elem")}[${F("i")}, ${F("j")}]</div>
      <div style="margin-top:4px">donde ${F("i")}, ${F("j")} \u2208 {${o}} + (0..5)</div>
    </div>`;
    }
    function As(t) {
      return t ? `<div class="fem-eq eq-box">
        <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">Recuperaci\xF3n de fuerzas:</strong></div>
        <div>${F("u", "local")} = ${F("T")} \xB7 ${F("u", "global")}</div>
        <div>${F("f", "local")} = ${F("k", "local")} \xB7 ${F("u", "local")}</div>
        <div style="margin-top:4px;color:var(--fem-eq-sub)">
          ${F("f")} = [${F("N", "i")}, ${F("V", "y,i")}, ${F("V", "z,i")}, ${F("M", "x,i")}, ${F("M", "y,i")}, ${F("M", "z,i")}, ${F("N", "j")}, \u2026]
        </div>
      </div>` : `<div class="fem-eq eq-box">
      <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">Esfuerzos en placa:</strong></div>
      <div>\u03C3 = ${ie("1", "2" + F("A"))} \xB7 ${F("D")} \xB7 ${F("B")} \xB7 ${F("u")}</div>
      <div>${F("N", "xx")} = \u03C3<sub>xx</sub> \xB7 ${F("t")} &nbsp;&nbsp; ${F("M", "xx")} = \u03C3<sub>xx</sub> \xB7 ${ie(F("t") + "\xB3", "12")}</div>
    </div>`;
    }
    function rn(t, o) {
      const n = t.length;
      let l = '<table><tr><td class="hdr"></td>';
      for (let s = 0; s < n; s++) l += `<td class="hdr">${o[s] || s}</td>`;
      l += "</tr>";
      for (let s = 0; s < n; s++) {
        l += `<tr><td class="hdr">${o[s] || s}</td>`;
        for (let i = 0; i < n; i++) {
          const r = t[s][i], c = (s === i ? "diag " : "") + (Math.abs(r) > 1e-10 ? "nz" : "");
          l += `<td class="${c}">${j(r, 2)}</td>`;
        }
        l += "</tr>";
      }
      return l += "</table>", l;
    }
    function Qn() {
      const t = "0", o = ie(F("EA"), F("L")), n = ie("\u2212" + F("EA"), F("L")), l = ie("12" + F("EI", "z"), F("L") + "\xB3"), s = ie("\u221212" + F("EI", "z"), F("L") + "\xB3"), i = ie("12" + F("EI", "y"), F("L") + "\xB3"), r = ie("\u221212" + F("EI", "y"), F("L") + "\xB3"), c = ie("6" + F("EI", "z"), F("L") + "\xB2"), u = ie("\u22126" + F("EI", "z"), F("L") + "\xB2"), d = ie("6" + F("EI", "y"), F("L") + "\xB2"), a = ie("\u22126" + F("EI", "y"), F("L") + "\xB2"), m = ie(F("GJ"), F("L")), $ = ie("\u2212" + F("GJ"), F("L")), y = ie("4" + F("EI", "z"), F("L")), x = ie("2" + F("EI", "z"), F("L")), p = ie("4" + F("EI", "y"), F("L")), g = ie("2" + F("EI", "y"), F("L")), w = '<span style="color:var(--fem-eq-dots);font-style:italic">sym</span>', z = [
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
          s,
          t,
          t,
          t,
          c
        ],
        [
          t,
          t,
          i,
          t,
          a,
          t,
          t,
          t,
          r,
          t,
          a,
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
          a,
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
          s,
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
          r,
          t,
          d,
          t,
          t,
          t,
          i,
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
          a,
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
    function Hs(t, o, n, l, s, i, r) {
      return `<div class="coeff-grid">${[
        {
          name: `${ie(F("E") + "\xB7" + F("A"), F("L"))}`,
          calc: `${ie(j(t) + "\xD7" + j(o), j(r))}`,
          val: t * o / r,
          label: "Axial"
        },
        {
          name: `${ie("12\xB7" + F("E") + "\xB7" + F("I", "z"), F("L") + "\xB3")}`,
          calc: `${ie("12\xD7" + j(t) + "\xD7" + j(n), j(r) + "\xB3")}`,
          val: 12 * t * n / r ** 3,
          label: "Corte Y"
        },
        {
          name: `${ie("6\xB7" + F("E") + "\xB7" + F("I", "z"), F("L") + "\xB2")}`,
          calc: `${ie("6\xD7" + j(t) + "\xD7" + j(n), j(r) + "\xB2")}`,
          val: 6 * t * n / r ** 2,
          label: "Corte-Momento Z"
        },
        {
          name: `${ie("12\xB7" + F("E") + "\xB7" + F("I", "y"), F("L") + "\xB3")}`,
          calc: `${ie("12\xD7" + j(t) + "\xD7" + j(l), j(r) + "\xB3")}`,
          val: 12 * t * l / r ** 3,
          label: "Corte Z"
        },
        {
          name: `${ie("6\xB7" + F("E") + "\xB7" + F("I", "y"), F("L") + "\xB2")}`,
          calc: `${ie("6\xD7" + j(t) + "\xD7" + j(l), j(r) + "\xB2")}`,
          val: 6 * t * l / r ** 2,
          label: "Corte-Momento Y"
        },
        {
          name: `${ie(F("G") + "\xB7" + F("J"), F("L"))}`,
          calc: `${ie(j(s) + "\xD7" + j(i), j(r))}`,
          val: s * i / r,
          label: "Torsi\xF3n"
        },
        {
          name: `${ie("4\xB7" + F("E") + "\xB7" + F("I", "z"), F("L"))}`,
          calc: `${ie("4\xD7" + j(t) + "\xD7" + j(n), j(r))}`,
          val: 4 * t * n / r,
          label: "Flexi\xF3n Z (4EI/L)"
        },
        {
          name: `${ie("2\xB7" + F("E") + "\xB7" + F("I", "z"), F("L"))}`,
          calc: `${ie("2\xD7" + j(t) + "\xD7" + j(n), j(r))}`,
          val: 2 * t * n / r,
          label: "Flexi\xF3n Z (2EI/L)"
        },
        {
          name: `${ie("4\xB7" + F("E") + "\xB7" + F("I", "y"), F("L"))}`,
          calc: `${ie("4\xD7" + j(t) + "\xD7" + j(l), j(r))}`,
          val: 4 * t * l / r,
          label: "Flexi\xF3n Y (4EI/L)"
        },
        {
          name: `${ie("2\xB7" + F("E") + "\xB7" + F("I", "y"), F("L"))}`,
          calc: `${ie("2\xD7" + j(t) + "\xD7" + j(l), j(r))}`,
          val: 2 * t * l / r,
          label: "Flexi\xF3n Y (2EI/L)"
        }
      ].map((u) => `<div class="coeff-item"><div style="color:var(--fem-eq-sub);font-size:10px;font-family:monospace;margin-bottom:2px">${u.label}</div>${u.name} = ${u.calc} = <span class="highlight">${j(u.val)}</span></div>`).join("")}</div>`;
    }
    function cn(t, o, n, l) {
      var _a;
      const s = document.querySelector(".fem-full-overlay");
      s && s.remove();
      const i = document.createElement("div");
      i.className = "fem-full-overlay", i.innerHTML = `
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
    `, document.body.appendChild(i), (_a = i.querySelector("#fem-full-close")) == null ? void 0 : _a.addEventListener("click", () => i.remove()), i.addEventListener("click", (r) => {
        r.target === i && i.remove();
      });
    }
    function es(t) {
      var _a, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l, _m, _n2, _o2, _p, _q, _r, _s2, _t2, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I, _J, _K, _L;
      St && St.remove();
      const o = e.nodes.val, n = e.elements.val, l = n[t], s = l.map((b) => o[b]), i = l.length === 2, r = ((_a = e.elementInputs) == null ? void 0 : _a.val) || {}, c = (_b = e.deformOutputs) == null ? void 0 : _b.val, u = (_c = e.analyzeOutputs) == null ? void 0 : _c.val;
      if (i) {
        const b = eo(Pt(s[1], s[0])), f = ((_d = r.elasticities) == null ? void 0 : _d.get(t)) ?? 0, v = ((_e2 = r.areas) == null ? void 0 : _e2.get(t)) ?? 0, M = ((_f = r.momentsOfInertiaZ) == null ? void 0 : _f.get(t)) ?? 0, L = ((_g = r.momentsOfInertiaY) == null ? void 0 : _g.get(t)) ?? 0, N = ((_h = r.shearModuli) == null ? void 0 : _h.get(t)) ?? 0, q = ((_i = r.torsionalConstants) == null ? void 0 : _i.get(t)) ?? 0;
        `${l[0]}${l[1]}${j(b)}${j(f)}${j(v)}${j(M)}${j(L)}${j(N)}${j(q)}`;
      } else {
        const b = ((_j = r.elasticities) == null ? void 0 : _j.get(t)) ?? 0, f = ((_k = r.thicknesses) == null ? void 0 : _k.get(t)) ?? 0, v = ((_l = r.poissonsRatios) == null ? void 0 : _l.get(t)) ?? 0;
        `${l.join(", ")}${j(b)}${j(f)}${j(v)}`;
      }
      let d = "", a = "", m = "", $ = "", y = "", x = "", p = "", g = "", w = null, z = null, S = null, H = [];
      try {
        if (w = Ho(s, r, t), z = No(s), S = gt(yn(z), gt(w, z)), H = i ? [
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
        ], i) {
          const M = eo(Pt(s[1], s[0])), L = ((_m = r.elasticities) == null ? void 0 : _m.get(t)) ?? 0, N = ((_n2 = r.areas) == null ? void 0 : _n2.get(t)) ?? 0, q = ((_o2 = r.momentsOfInertiaZ) == null ? void 0 : _o2.get(t)) ?? 0, I = ((_p = r.momentsOfInertiaY) == null ? void 0 : _p.get(t)) ?? 0, P = ((_q = r.shearModuli) == null ? void 0 : _q.get(t)) ?? 0, _ = ((_r = r.torsionalConstants) == null ? void 0 : _r.get(t)) ?? 0;
          $ = Fs(L, N, q, I, P, _, M);
        }
        y = Ps(s), x = Cs(), p = _s(l), g = As(i);
        const b = '<button class="fem-expand-btn" data-full="kLocal">\u26F6 Ver completa</button>', f = '<button class="fem-expand-btn" data-full="T">\u26F6 Ver completa</button>', v = '<button class="fem-expand-btn" data-full="kGlobal">\u26F6 Ver completa</button>';
        d = `<div class="matrix-label">k_local (${w.length}\xD7${w.length}) ${b}</div>${ln(w, H)}`, a = `<div class="matrix-label">T \u2014 Transformaci\xF3n (${z.length}\xD7${z.length}) ${f}</div>${ln(z, H)}`, m = `<div class="matrix-label">K_global = T^T \xB7 k \xB7 T ${v}</div>${ln(S, H)}`;
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
          var _a2;
          const M = ((_a2 = c.deformations) == null ? void 0 : _a2.get(f)) || [
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
      if (u && i && (c == null ? void 0 : c.deformations) && w && z) {
        const b = (_s2 = u.normals) == null ? void 0 : _s2.get(t), f = (_t2 = u.shearsY) == null ? void 0 : _t2.get(t), v = (_u = u.shearsZ) == null ? void 0 : _u.get(t), M = (_v = u.torsions) == null ? void 0 : _v.get(t), L = (_w = u.bendingsY) == null ? void 0 : _w.get(t), N = (_x = u.bendingsZ) == null ? void 0 : _x.get(t), q = [
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
        const Y = (W, D) => W.map((K, ce) => `<span style="color:${Math.abs(K) > 1e-10 ? "var(--fem-nonzero)" : "var(--fem-eq-dots)"}">${D[ce % 6]}=${j(K)}</span>`).join(", "), Q = [
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
        `${F("u", "global")}${l.map((W, D) => `<span style="color:var(--fem-label)">nodo ${W}:</span> ${q.map((K, ce) => `<span style="color:${Math.abs(I[D * 6 + ce]) > 1e-10 ? "var(--fem-eq-var)" : "var(--fem-eq-dots)"}">${j(I[D * 6 + ce])}</span>`).join(", ")}`).join(" | ")}${F("u", "local")}${F("T")}${F("u", "global")}${F("u", "local")}${Y(P, [
          ...q,
          ...q
        ])}${F("f", "local")}${F("k", "local")}${F("u", "local")}${F("f", "local")}${_.map((W, D) => `<span style="color:${Math.abs(W) > 1e-10 ? "var(--fem-nonzero)" : "var(--fem-eq-dots)"}">${Q[D]}=${j(W)}</span>`).join(", ")}${F("P", "1")}${F("N", "i")}${j(_[0])}${F("P", "7")}${F("N", "j")}${j(_[6])}${F("P", "2")}${F("V", "y,i")}${j(_[1])}${F("P", "8")}${F("V", "y,j")}${j(_[7])}${F("P", "3")}${F("V", "z,i")}${j(_[2])}${F("P", "9")}${F("V", "z,j")}${j(_[8])}${F("P", "4")}${F("M", "x,i")}${j(_[3])}${F("P", "10")}${F("M", "x,j")}${j(_[9])}${F("P", "5")}${F("M", "y,i")}${j(_[4])}${F("P", "11")}${F("M", "y,j")}${j(_[10])}${F("P", "6")}${F("M", "z,i")}${j(_[5])}${F("P", "12")}${F("M", "z,j")}${j(_[11])}${b ? b.map((W) => j(W)).join(", ") : "\u2014"}${f ? f.map((W) => j(W)).join(", ") : "\u2014"}${v ? v.map((W) => j(W)).join(", ") : "\u2014"}${M ? M.map((W) => j(W)).join(", ") : "\u2014"}${L ? L.map((W) => j(W)).join(", ") : "\u2014"}${N ? N.map((W) => j(W)).join(", ") : "\u2014"}`;
      } else if (u && i) {
        const b = (_z = u.normals) == null ? void 0 : _z.get(t), f = (_A = u.shearsY) == null ? void 0 : _A.get(t), v = (_B = u.shearsZ) == null ? void 0 : _B.get(t), M = (_C = u.torsions) == null ? void 0 : _C.get(t), L = (_D = u.bendingsY) == null ? void 0 : _D.get(t), N = (_E = u.bendingsZ) == null ? void 0 : _E.get(t);
        `${b ? b.map((q) => j(q)).join(", ") : "\u2014"}${f ? f.map((q) => j(q)).join(", ") : "\u2014"}${v ? v.map((q) => j(q)).join(", ") : "\u2014"}${M ? M.map((q) => j(q)).join(", ") : "\u2014"}${L ? L.map((q) => j(q)).join(", ") : "\u2014"}${N ? N.map((q) => j(q)).join(", ") : "\u2014"}`;
      } else if (u && !i) {
        const b = (_F = u.bendingXX) == null ? void 0 : _F.get(t), f = (_G = u.bendingYY) == null ? void 0 : _G.get(t), v = (_H = u.bendingXY) == null ? void 0 : _H.get(t), M = (_I = u.membraneXX) == null ? void 0 : _I.get(t), L = (_J = u.membraneYY) == null ? void 0 : _J.get(t), N = (_K = u.membraneXY) == null ? void 0 : _K.get(t);
        `${b ? b.map((q) => j(q)).join(", ") : "\u2014"}${f ? f.map((q) => j(q)).join(", ") : "\u2014"}${v ? v.map((q) => j(q)).join(", ") : "\u2014"}${M ? M.map((q) => j(q)).join(", ") : "\u2014"}${L ? L.map((q) => j(q)).join(", ") : "\u2014"}${N ? N.map((q) => j(q)).join(", ") : "\u2014"}`;
      }
      `${l[0]}`, 6 * l[0], 6 * l[0] + 5, `${l[1]}`, 6 * l[1], 6 * l[1] + 5, l.length === 3 && (`${l[2]}`, 6 * l[2], 6 * l[2] + 5), o.length * 6, o.length * 6, St = ga(t, o, n, r, c, u), St.id = "fem-inspect-panel", document.body.appendChild(St), (_L = St.querySelector("#er-close")) == null ? void 0 : _L.addEventListener("click", () => Xt());
      const C = i ? (() => {
        var _a2, _b2, _c2, _d2, _e3, _f2;
        const b = eo(Pt(s[1], s[0])), f = ((_a2 = r.elasticities) == null ? void 0 : _a2.get(t)) ?? 0, v = ((_b2 = r.areas) == null ? void 0 : _b2.get(t)) ?? 0, M = ((_c2 = r.momentsOfInertiaZ) == null ? void 0 : _c2.get(t)) ?? 0, L = ((_d2 = r.momentsOfInertiaY) == null ? void 0 : _d2.get(t)) ?? 0, N = ((_e3 = r.shearModuli) == null ? void 0 : _e3.get(t)) ?? 0, q = ((_f2 = r.torsionalConstants) == null ? void 0 : _f2.get(t)) ?? 0;
        return Hs(f, v, M, L, N, q, b);
      })() : void 0;
      St.querySelectorAll("[data-full]").forEach((b) => {
        b.addEventListener("click", (f) => {
          f.stopPropagation();
          const v = b.dataset.full;
          if (v === "kLocal" && w) {
            const M = i ? Qn() : "<em>Shell 18\xD718 \u2014 ver tabla num\xE9rica</em>";
            cn(`Elemento ${t} \u2014 Rigidez Local k_local`, M, rn(w, H), C);
          } else if (v === "T" && z) cn(`Elemento ${t} \u2014 Transformaci\xF3n T`, y, rn(z, H));
          else if (v === "kGlobal" && S) {
            const M = i ? Qn() : "<em>Shell 18\xD718</em>";
            cn(`Elemento ${t} \u2014 Rigidez Global K = T^T \xB7 k \xB7 T`, M, rn(S, H), C);
          }
        });
      });
    }
    function ts() {
      const l = [], s = [];
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
        ]), s.push([
          S,
          S + 1
        ]), s.push([
          S + 1,
          S + 2
        ]), s.push([
          S + 2,
          S + 3
        ]), s.push([
          S + 3,
          S
        ]), x > 0 && x < 8 && (s.push([
          S,
          S + 2
        ]), s.push([
          S + 1,
          S + 3
        ])), x > 0) {
          const H = S - 4;
          for (let C = 0; C < 4; C++) s.push([
            H + C,
            S + C
          ]);
          s.push([
            H,
            S + 1
          ]), s.push([
            H + 1,
            S + 2
          ]), s.push([
            H + 2,
            S + 3
          ]), s.push([
            H + 3,
            S
          ]);
        }
      }
      const i = /* @__PURE__ */ new Map();
      for (let x = 0; x < 4; x++) i.set(x, [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
      const r = l.length - 4, c = /* @__PURE__ */ new Map();
      for (let x = 0; x < 4; x++) c.set(r + x, [
        0,
        0,
        -50,
        0,
        0,
        0
      ]);
      e.nodes.val = l, e.elements.val = s, e.nodeInputs && (e.nodeInputs.val = {
        supports: i,
        loads: c
      });
      const u = 2e8, d = 77e6, a = 5e-3, m = 2e-6, $ = 1e-6, y = {
        elasticities: new Map(s.map((x, p) => [
          p,
          u
        ])),
        shearModuli: new Map(s.map((x, p) => [
          p,
          d
        ])),
        areas: new Map(s.map((x, p) => [
          p,
          a
        ])),
        momentsOfInertiaZ: new Map(s.map((x, p) => [
          p,
          m
        ])),
        momentsOfInertiaY: new Map(s.map((x, p) => [
          p,
          m
        ])),
        torsionalConstants: new Map(s.map((x, p) => [
          p,
          $
        ]))
      };
      e.elementInputs && (e.elementInputs.val = y);
      try {
        const x = ut(l, s, {
          supports: i,
          loads: c
        }, y);
        x && e.deformOutputs && (e.deformOutputs.val = x);
      } catch (x) {
        console.warn("Eiffel deform:", x.message);
      }
      setTimeout(() => Ue(), 50), Le(), console.log(`Torre Eiffel: ${l.length} nodos, ${s.length} elementos, H=30m`);
    }
    function os() {
      const l = [], s = [];
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
      for (let y = 0; y < 20; y++) s.push([
        y * 2,
        (y + 1) * 2
      ]), s.push([
        y * 2 + 1,
        (y + 1) * 2 + 1
      ]), s.push([
        y * 2,
        y * 2 + 1
      ]), s.push([
        y * 2,
        (y + 1) * 2 + 1
      ]), s.push([
        y * 2 + 1,
        (y + 1) * 2
      ]);
      s.push([
        20 * 2,
        20 * 2 + 1
      ]);
      const i = /* @__PURE__ */ new Map();
      i.set(0, [
        true,
        true,
        true,
        true,
        true,
        true
      ]), i.set(1, [
        true,
        true,
        true,
        true,
        true,
        true
      ]), i.set(20 * 2, [
        true,
        true,
        true,
        true,
        true,
        true
      ]), i.set(20 * 2 + 1, [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
      const r = /* @__PURE__ */ new Map();
      for (let y = 0; y <= 20; y++) r.set(y * 2, [
        0,
        0,
        -20,
        0,
        0,
        0
      ]), r.set(y * 2 + 1, [
        0,
        0,
        -20,
        0,
        0,
        0
      ]);
      e.nodes.val = l, e.elements.val = s, e.nodeInputs && (e.nodeInputs.val = {
        supports: i,
        loads: r
      });
      const c = 2e8, u = 77e6, d = 0.01, a = 5e-6, m = 2e-6, $ = {
        elasticities: new Map(s.map((y, x) => [
          x,
          c
        ])),
        shearModuli: new Map(s.map((y, x) => [
          x,
          u
        ])),
        areas: new Map(s.map((y, x) => [
          x,
          d
        ])),
        momentsOfInertiaZ: new Map(s.map((y, x) => [
          x,
          a
        ])),
        momentsOfInertiaY: new Map(s.map((y, x) => [
          x,
          a
        ])),
        torsionalConstants: new Map(s.map((y, x) => [
          x,
          m
        ]))
      };
      e.elementInputs && (e.elementInputs.val = $);
      try {
        const y = ut(l, s, {
          supports: i,
          loads: r
        }, $);
        y && e.deformOutputs && (e.deformOutputs.val = y);
      } catch (y) {
        console.warn("Arco:", y.message);
      }
      setTimeout(() => Ue(), 50), Le(), console.log(`Arco Gateway: ${l.length} nodos, ${s.length} elem, span=20m, H=20m`);
    }
    function ns() {
      const i = [], r = [];
      for (let p = 0; p <= 16; p++) {
        const g = 60 * p / 16;
        i.push([
          g,
          -6 / 2,
          8
        ]), i.push([
          g,
          6 / 2,
          8
        ]);
      }
      const c = i.length;
      for (let p = 0; p < 16; p++) r.push([
        p * 2,
        (p + 1) * 2
      ]), r.push([
        p * 2 + 1,
        (p + 1) * 2 + 1
      ]), r.push([
        p * 2,
        p * 2 + 1
      ]);
      r.push([
        16 * 2,
        16 * 2 + 1
      ]);
      const u = [
        Math.round(16 / 3),
        Math.round(2 * 16 / 3)
      ], d = [];
      for (const p of u) {
        const g = 60 * p / 16, w = i.length;
        i.push([
          g,
          -6 / 2,
          0
        ]);
        const z = i.length;
        i.push([
          g,
          6 / 2,
          0
        ]);
        const S = i.length;
        i.push([
          g,
          -6 / 2,
          28
        ]);
        const H = i.length;
        i.push([
          g,
          6 / 2,
          28
        ]), d.push(S, H), r.push([
          w,
          p * 2
        ]), r.push([
          p * 2,
          S
        ]), r.push([
          z,
          p * 2 + 1
        ]), r.push([
          p * 2 + 1,
          H
        ]), r.push([
          S,
          H
        ]);
      }
      for (const p of d) {
        const g = i[p][0];
        for (let w = 0; w <= 16; w++) {
          const z = 60 * w / 16;
          if (Math.abs(z - g) > 60 * 0.05 && Math.abs(z - g) < 60 * 0.45) {
            const S = i[p][1] < 0 ? w * 2 : w * 2 + 1;
            w % 2 === 0 && r.push([
              p,
              S
            ]);
          }
        }
      }
      const a = /* @__PURE__ */ new Map();
      a.set(0, [
        true,
        true,
        true,
        false,
        false,
        false
      ]), a.set(1, [
        true,
        true,
        true,
        false,
        false,
        false
      ]), a.set(16 * 2, [
        false,
        true,
        true,
        false,
        false,
        false
      ]), a.set(16 * 2 + 1, [
        false,
        true,
        true,
        false,
        false,
        false
      ]);
      for (let p = c; p < c + u.length * 4; p += 4) a.set(p, [
        true,
        true,
        true,
        true,
        true,
        true
      ]), a.set(p + 1, [
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
      e.nodes.val = i, e.elements.val = r, e.nodeInputs && (e.nodeInputs.val = {
        supports: a,
        loads: m
      });
      const $ = 2e8, y = 77e6, x = {
        elasticities: new Map(r.map((p, g) => [
          g,
          $
        ])),
        shearModuli: new Map(r.map((p, g) => [
          g,
          y
        ])),
        areas: new Map(r.map((p, g) => [
          g,
          g < 16 * 3 + 1 ? 0.02 : 1e-3
        ])),
        momentsOfInertiaZ: new Map(r.map((p, g) => [
          g,
          5e-5
        ])),
        momentsOfInertiaY: new Map(r.map((p, g) => [
          g,
          2e-5
        ])),
        torsionalConstants: new Map(r.map((p, g) => [
          g,
          1e-5
        ]))
      };
      e.elementInputs && (e.elementInputs.val = x);
      try {
        const p = ut(i, r, {
          supports: a,
          loads: m
        }, x);
        p && e.deformOutputs && (e.deformOutputs.val = p);
      } catch (p) {
        console.warn("Puente:", p.message);
      }
      setTimeout(() => Ue(), 50), Le(), console.log(`Puente atirantado: ${i.length} nodos, ${r.length} elem, span=60m`);
    }
    function ss() {
      const i = [], r = [];
      for (let g = 0; g <= 12; g++) {
        const w = g * 3.5, z = g * 5 * Math.PI / 180;
        for (let S = 0; S < 6; S++) {
          const H = z + 2 * Math.PI * S / 6, C = 5 * Math.cos(H), b = 5 * Math.sin(H);
          i.push([
            C,
            b,
            w
          ]);
        }
      }
      for (let g = 0; g <= 12; g++) {
        const w = g * 6;
        for (let z = 0; z < 6; z++) r.push([
          w + z,
          w + (z + 1) % 6
        ]);
        if (g < 12) {
          const z = (g + 1) * 6;
          for (let S = 0; S < 6; S++) r.push([
            w + S,
            z + S
          ]), r.push([
            w + S,
            z + (S + 1) % 6
          ]);
        }
      }
      for (let g = 0; g <= 12; g++) {
        const w = i.length;
        i.push([
          0,
          0,
          g * 3.5
        ]);
        const z = g * 6;
        for (let S = 0; S < 6; S++) r.push([
          w,
          z + S
        ]);
      }
      const c = 13 * 6;
      for (let g = 0; g < 12; g++) r.push([
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
      e.nodes.val = i, e.elements.val = r, e.nodeInputs && (e.nodeInputs.val = {
        supports: u,
        loads: d
      });
      const a = 2e8, m = 77e6, $ = 8e-3, y = 1e-5, x = 5e-6, p = {
        elasticities: new Map(r.map((g, w) => [
          w,
          a
        ])),
        shearModuli: new Map(r.map((g, w) => [
          w,
          m
        ])),
        areas: new Map(r.map((g, w) => [
          w,
          $
        ])),
        momentsOfInertiaZ: new Map(r.map((g, w) => [
          w,
          y
        ])),
        momentsOfInertiaY: new Map(r.map((g, w) => [
          w,
          y
        ])),
        torsionalConstants: new Map(r.map((g, w) => [
          w,
          x
        ]))
      };
      e.elementInputs && (e.elementInputs.val = p);
      try {
        const g = ut(i, r, {
          supports: u,
          loads: d
        }, p);
        g && e.deformOutputs && (e.deformOutputs.val = g);
      } catch (g) {
        console.warn("Twisted:", g.message);
      }
      setTimeout(() => Ue(), 50), Le(), console.log(`Torre Twist: ${i.length} nodos, ${r.length} elem, 12 pisos, twist=5deg/piso`);
    }
    function as() {
      const s = [], i = [];
      for (let p = 0; p <= 20; p++) {
        const g = p / 20, w = p * 3;
        let z = 8 * (1 - g * 0.7);
        g > 0.4 && (z *= 0.85), g > 0.7 && (z *= 0.7);
        const S = s.length;
        s.push([
          0,
          0,
          w
        ]);
        for (let H = 0; H < 3; H++) {
          const C = H * 2 * Math.PI / 3 - Math.PI / 2, b = z * Math.cos(C), f = z * Math.sin(C), v = s.length;
          s.push([
            b,
            f,
            w
          ]), i.push([
            S,
            v
          ]);
          const M = s.length;
          s.push([
            b * 0.5,
            f * 0.5,
            w
          ]), i.push([
            S,
            M
          ]), i.push([
            M,
            v
          ]);
        }
        for (let H = 0; H < 3; H++) {
          const C = S + 1 + H * 2, b = S + 1 + (H + 1) % 3 * 2;
          i.push([
            C,
            b
          ]);
        }
        if (p < 20) {
          const C = S + 7;
          i.push([
            S,
            C
          ]);
          for (let b = 0; b < 3; b++) i.push([
            S + 1 + b * 2,
            C + 1 + b * 2
          ]), i.push([
            S + 2 + b * 2,
            C + 2 + b * 2
          ]), i.push([
            S + 1 + b * 2,
            C + 2 + b * 2
          ]);
        }
      }
      const r = /* @__PURE__ */ new Map(), c = 1 + 3 * 2;
      for (let p = 0; p < c; p++) r.set(p, [
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
      e.nodes.val = s, e.elements.val = i, e.nodeInputs && (e.nodeInputs.val = {
        supports: r,
        loads: u
      });
      const d = 35e6, a = 14e6, m = 0.02, $ = 5e-5, y = 2e-5, x = {
        elasticities: new Map(i.map((p, g) => [
          g,
          d
        ])),
        shearModuli: new Map(i.map((p, g) => [
          g,
          a
        ])),
        areas: new Map(i.map((p, g) => [
          g,
          m
        ])),
        momentsOfInertiaZ: new Map(i.map((p, g) => [
          g,
          $
        ])),
        momentsOfInertiaY: new Map(i.map((p, g) => [
          g,
          $
        ])),
        torsionalConstants: new Map(i.map((p, g) => [
          g,
          y
        ]))
      };
      e.elementInputs && (e.elementInputs.val = x);
      try {
        const p = ut(s, i, {
          supports: r,
          loads: u
        }, x);
        p && e.deformOutputs && (e.deformOutputs.val = p);
      } catch (p) {
        console.warn("Burj:", p.message);
      }
      setTimeout(() => Ue(), 50), Le(), console.log(`Burj Khalifa: ${s.length} nodos, ${i.length} elem, 20 pisos, H=${20 * 3}m`);
    }
    function ls() {
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
      const s = /* @__PURE__ */ new Map();
      for (let m = 0; m < t.length; m++) t[m][2] < 0.5 && s.set(m, [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
      const i = /* @__PURE__ */ new Map();
      for (let m = 0; m < t.length; m++) t[m][2] > 2 && i.set(m, [
        0,
        0,
        -5,
        0,
        0,
        0
      ]);
      e.nodes.val = t, e.elements.val = o, e.nodeInputs && (e.nodeInputs.val = {
        supports: s,
        loads: i
      });
      const r = 35e6, c = 0.2, u = 0.15, d = r / (2 * (1 + c)), a = {
        elasticities: new Map(o.map((m, $) => [
          $,
          r
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
      e.elementInputs && (e.elementInputs.val = a);
      try {
        const m = ut(t, o, {
          supports: s,
          loads: i
        }, a);
        m && e.deformOutputs && (e.deformOutputs.val = m);
      } catch (m) {
        console.warn("Opera:", m.message);
      }
      setTimeout(() => Ue(), 50), Le(), console.log(`Sydney Opera: ${t.length} nodos, ${o.length} shells Q4, 3 velas`);
    }
    function rs() {
      const l = [], s = [];
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
        for (let z = 0; z < 12; z++) s.push([
          p + z,
          p + (z + 1) % 12
        ]);
        const w = x % 2 === 0 ? 1 : -1;
        for (let z = 0; z < 12; z++) {
          const S = (z + w + 12) % 12;
          s.push([
            p + z,
            g + S
          ]), s.push([
            p + z,
            g + z
          ]);
        }
      }
      const i = 15 * 12;
      for (let x = 0; x < 12; x++) s.push([
        i + x,
        i + (x + 1) % 12
      ]);
      const r = /* @__PURE__ */ new Map();
      for (let x = 0; x < 12; x++) r.set(x, [
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
      e.nodes.val = l, e.elements.val = s, e.nodeInputs && (e.nodeInputs.val = {
        supports: r,
        loads: c
      });
      const u = 2e8, d = 77e6, a = 6e-3, m = 8e-6, $ = 4e-6, y = {
        elasticities: new Map(s.map((x, p) => [
          p,
          u
        ])),
        shearModuli: new Map(s.map((x, p) => [
          p,
          d
        ])),
        areas: new Map(s.map((x, p) => [
          p,
          a
        ])),
        momentsOfInertiaZ: new Map(s.map((x, p) => [
          p,
          m
        ])),
        momentsOfInertiaY: new Map(s.map((x, p) => [
          p,
          m
        ])),
        torsionalConstants: new Map(s.map((x, p) => [
          p,
          $
        ]))
      };
      e.elementInputs && (e.elementInputs.val = y);
      try {
        const x = ut(l, s, {
          supports: r,
          loads: c
        }, y);
        x && e.deformOutputs && (e.deformOutputs.val = x);
      } catch (x) {
        console.warn("Diagrid:", x.message);
      }
      setTimeout(() => Ue(), 50), Le(), console.log(`Diagrid Tower: ${l.length} nodos, ${s.length} elem, 15 pisos, H=${15 * 3.5}m`);
    }
    function Ns() {
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
    function Rs() {
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
        const o = (g) => {
          var _a2;
          return parseFloat(((_a2 = t.querySelector(`#${g}`)) == null ? void 0 : _a2.value) || "0");
        }, n = o("po-colB"), l = o("po-colH"), s = o("po-fc") * 1e3, i = o("po-fy") * 1e3, r = o("po-H"), c = o("po-L"), u = o("po-As") * 1e-4, d = o("po-nbar"), a = o("po-drift") / 100, m = o("po-ncycles"), $ = t.querySelector("#pushover-status");
        $.textContent = "Generando historia de desplazamientos...";
        const y = [], x = a * r, p = 40;
        for (let g = 1; g <= m; g++) {
          const w = x * g / m;
          for (let z = 0; z <= p; z++) y.push(w * Math.sin(2 * Math.PI * z / p));
        }
        $.textContent = `Resolviendo pushover (${y.length} pasos)...`;
        try {
          const { cyclicPushover: g } = await Ys(async () => {
            const { cyclicPushover: z } = await import("./cyclicPushoverCpp-DZAQImEK.js").then(async (m2) => {
              await m2.__tla;
              return m2;
            });
            return {
              cyclicPushover: z
            };
          }, __vite__mapDeps([0,1]), import.meta.url), w = await g({
            colHeight: r,
            beamLength: c,
            col: {
              b: n,
              h: l,
              fpc: -s,
              Fy_rebar: i,
              E_rebar: 2e8,
              rebar_area: u,
              cover: 0.04,
              n_rebar: d
            },
            beam: {
              b: 0.25,
              h: 0.3,
              fpc: -s,
              Fy_rebar: i,
              E_rebar: 2e8,
              rebar_area: u * 0.7,
              cover: 0.03,
              n_rebar: d
            },
            dispHistory: y
          });
          $.textContent = `Completado: ${w.nSteps} pasos`, Os(t.querySelector("#pushover-canvas"), w.displacements, w.forces, `Pushover: ${n * 100}x${l * 100}cm, f'c=${s / 1e3}MPa, Fy=${i / 1e3}MPa`);
        } catch (g) {
          $.textContent = `Error: ${g.message}`, console.error("Pushover failed:", g);
        }
      });
    }
    function Os(t, o, n, l) {
      const s = t.getContext("2d");
      if (!s || o.length === 0) return;
      const i = t.width, r = t.height, c = {
        left: 55,
        right: 15,
        top: 30,
        bottom: 35
      }, u = i - c.left - c.right, d = r - c.top - c.bottom;
      s.fillStyle = "#111118", s.fillRect(0, 0, i, r);
      let a = Math.min(...o), m = Math.max(...o), $ = Math.min(...n), y = Math.max(...n);
      a === m && (a -= 0.01, m += 0.01), $ === y && ($ -= 1, y += 1);
      const x = m - a, p = y - $, g = (H) => c.left + (H - a) / x * u, w = (H) => c.top + d - (H - $) / p * d;
      s.strokeStyle = "#333", s.lineWidth = 0.5, a < 0 && m > 0 && (s.strokeStyle = "#555", s.beginPath(), s.moveTo(g(0), c.top), s.lineTo(g(0), c.top + d), s.stroke()), $ < 0 && y > 0 && (s.beginPath(), s.moveTo(c.left, w(0)), s.lineTo(c.left + u, w(0)), s.stroke()), s.strokeStyle = "#ff4444", s.lineWidth = 1.5, s.beginPath(), s.moveTo(g(o[0]), w(n[0]));
      for (let H = 1; H < o.length; H++) s.lineTo(g(o[H]), w(n[H]));
      s.stroke(), s.fillStyle = "#aaa", s.font = "11px monospace", s.textAlign = "center", s.fillText("Desplazamiento (m)", c.left + u / 2, r - 5), s.save(), s.translate(12, c.top + d / 2), s.rotate(-Math.PI / 2), s.fillText("Fuerza (kN)", 0, 0), s.restore(), s.fillStyle = "#ee9b00", s.font = "bold 11px monospace", s.textAlign = "center", s.fillText(l, i / 2, 15), s.fillStyle = "#888", s.font = "9px monospace", s.textAlign = "center";
      const z = x / 5;
      for (let H = 0; H <= 5; H++) {
        const C = a + z * H;
        s.fillText((C * 1e3).toFixed(1), g(C), r - c.bottom + 15);
      }
      s.textAlign = "right";
      const S = p / 5;
      for (let H = 0; H <= 5; H++) {
        const C = $ + S * H;
        s.fillText(C.toFixed(0), c.left - 5, w(C) + 3);
      }
    }
    let yo = null;
    function Bs() {
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
      }), t.querySelector("#nl-test").addEventListener("click", () => js(t));
    }
    function js(t) {
      const o = parseFloat(t.querySelector("#nl-fy").value), n = parseFloat(t.querySelector("#nl-e0").value), l = parseFloat(t.querySelector("#nl-b").value), s = parseFloat(t.querySelector("#nl-r0").value), i = parseFloat(t.querySelector("#nl-amp").value), r = parseInt(t.querySelector("#nl-cycles").value), c = 100, u = [];
      for (let G = 0; G < r; G++) {
        const Q = i * (1 + G * 0.5);
        for (let W = 0; W < c; W++) {
          const D = W / c * 2 * Math.PI;
          u.push(Q * Math.sin(D));
        }
      }
      const d = o / n, a = l * n;
      let m = 0, $ = 0, y = -d, x = d, p = 0, g = 0, w = 0, z = 0, S = 0, H = 0;
      const C = [];
      for (const G of u) {
        let Q = y, W = x, D = p, K = g, ce = w, Me = z, $e = S, U = H, le;
        const pe = G - m;
        if (Math.abs(pe) < 1e-20) {
          C.push($);
          continue;
        }
        if ((U === 0 || U === 3) && (pe < 0 ? (U = 2, K = -d, ce = -o, D = K, Me = 0, $e = 0) : (U = 1, K = d, ce = o, D = K, Me = 0, $e = 0)), U === 2 && pe > 0) {
          U = 1, Me = m, $e = $, m < Q && (Q = m);
          const fe = (W - Q) / (2 * 1 * d), Se = 1 + 0 * Math.pow(fe, 0.8);
          K = (o * Se - a * d * Se - $e + n * Me) / (n - a), ce = o * Se + a * (K - d * Se), D = W;
        } else if (U === 1 && pe < 0) {
          U = 2, Me = m, $e = $, m > W && (W = m);
          const fe = (W - Q) / (2 * 1 * d), Se = 1 + 0 * Math.pow(fe, 0.8);
          K = (-o * Se + a * d * Se - $e + n * Me) / (n - a), ce = -o * Se + a * (K + d * Se), D = Q;
        }
        const te = Math.abs((D - K) / d);
        let ge = s - 0.925 * te / (0.15 + te);
        ge < 0.1 && (ge = 0.1);
        const we = (G - Me) / (K - Me), Te = 1 + Math.pow(Math.abs(we), ge), V = Math.pow(Te, 1 / ge);
        le = l * we + (1 - l) * we / V, le = le * (ce - $e) + $e, C.push(le), m = G, $ = le, y = Q, x = W, p = D, g = K, w = ce, z = Me, S = $e, H = U;
      }
      const b = t.querySelector("#nl-canvas"), f = b.getContext("2d"), v = b.width, M = b.height;
      f.clearRect(0, 0, v, M);
      const L = Math.max(...u.map(Math.abs)), N = Math.max(...C.map(Math.abs)), q = (v - 40) / (2 * L), I = (M - 40) / (2 * N), P = v / 2, _ = M / 2;
      f.strokeStyle = "#444", f.lineWidth = 1, f.beginPath(), f.moveTo(20, _), f.lineTo(v - 20, _), f.stroke(), f.beginPath(), f.moveTo(P, 20), f.lineTo(P, M - 20), f.stroke(), f.fillStyle = "#888", f.font = "10px monospace", f.textAlign = "center", f.fillText("\u03B5 (strain)", v - 40, _ - 5), f.fillText("\u03C3 (stress)", P + 30, 15), f.fillText(`\xB1${(L * 100).toFixed(1)}%`, v - 30, _ + 12), f.fillText(`\xB1${(N / 1e3).toFixed(0)} MPa`, P + 40, 30), f.strokeStyle = "#00ccff", f.lineWidth = 1.5, f.beginPath();
      for (let G = 0; G < u.length; G++) {
        const Q = P + u[G] * q, W = _ - C[G] * I;
        G === 0 ? f.moveTo(Q, W) : f.lineTo(Q, W);
      }
      f.stroke(), f.strokeStyle = "#ff333366", f.lineWidth = 1, f.setLineDash([
        4,
        4
      ]), f.beginPath(), f.moveTo(20, _ - o * I), f.lineTo(v - 20, _ - o * I), f.stroke(), f.beginPath(), f.moveTo(20, _ + o * I), f.lineTo(v - 20, _ + o * I), f.stroke(), f.setLineDash([]), f.fillStyle = "#ff6666", f.font = "9px monospace", f.fillText(`Fy = ${(o / 1e3).toFixed(0)} MPa`, v - 50, _ - o * I - 5);
      const Y = t.querySelector("#nl-info");
      Y.textContent = `Steel02: Fy=${(o / 1e3).toFixed(0)} MPa, E\u2080=${(n / 1e6).toFixed(0)} GPa, b=${l}, R\u2080=${s} \u2014 ${r} ciclos, amp=${(i * 100).toFixed(1)}%`;
    }
    function Ds() {
      var _a, _b, _c, _d;
      const t = document.querySelector(".rpt-overlay");
      if (t) {
        t.remove();
        return;
      }
      const o = e.nodes.val, n = e.elements.val, l = ((_a = e.elementInputs) == null ? void 0 : _a.val) || {}, s = ((_b = e.nodeInputs) == null ? void 0 : _b.val) || {}, i = (_c = e.deformOutputs) == null ? void 0 : _c.val;
      if ((_d = e.analyzeOutputs) == null ? void 0 : _d.val, !o.length || !n.length) {
        alert("No hay modelo cargado");
        return;
      }
      const r = pa({
        nodes: o,
        elements: n,
        nodeInputs: s,
        elementInputs: l,
        deformOutputs: i
      });
      document.body.appendChild(r);
    }
    let ro = null;
    function Ws(t) {
      ro && ro.remove();
      const o = document.createElement("div");
      o.style.cssText = "position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background:#1a1a2e;color:#eee;border:2px solid #00ccff;border-radius:8px;padding:16px;z-index:10001;width:320px;font-family:monospace;font-size:12px;box-shadow:0 4px 20px rgba(0,0,0,0.5);";
      const n = Po(), l = Co(), s = Object.entries(n).map(([d, a]) => `<option value="${a}">${d}</option>`).join(""), i = Object.entries(l).map(([d, a]) => `<option value="${a}">${d}</option>`).join("");
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
    `, document.body.appendChild(o), ro = o;
      const r = o.querySelector("#asgn-type"), c = o.querySelector("#asgn-params");
      function u() {
        const d = r.value;
        let a = "";
        d === "rect" ? a = `<div style="display:flex;gap:6px;"><label>b(m):<input id="ap-b" type="number" value="0.30" step="0.05" min="0.1" max="2" style="width:70px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label>
                <label>h(m):<input id="ap-h" type="number" value="0.50" step="0.05" min="0.1" max="2" style="width:70px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label></div>` : d === "circ" ? a = '<label>d(m):<input id="ap-d" type="number" value="0.40" step="0.05" min="0.1" max="2" style="width:70px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label>' : d === "W" ? a = `<select id="ap-profile" style="background:#333;color:#fff;border:1px solid #555;padding:3px;width:100%;">${s}</select>` : d === "HSS" ? a = `<select id="ap-profile" style="background:#333;color:#fff;border:1px solid #555;padding:3px;width:100%;">${i}</select>` : d === "I-param" ? a = `<div style="display:grid;grid-template-columns:1fr 1fr;gap:4px;">
          <label>bf(m):<input id="ap-bf" type="number" value="0.20" step="0.01" style="width:65px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label>
          <label>h(m):<input id="ap-hf" type="number" value="0.40" step="0.01" style="width:65px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label>
          <label>tf(m):<input id="ap-tf" type="number" value="0.015" step="0.001" style="width:65px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label>
          <label>tw(m):<input id="ap-tw" type="number" value="0.010" step="0.001" style="width:65px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label>
        </div>` : d === "tubular" && (a = `<div style="display:flex;gap:6px;">
          <label>b(m):<input id="ap-bc" type="number" value="0.20" step="0.01" style="width:60px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label>
          <label>h(m):<input id="ap-hc" type="number" value="0.30" step="0.01" style="width:60px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label>
          <label>t(m):<input id="ap-t" type="number" value="0.008" step="0.001" style="width:60px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label>
        </div>`), c.innerHTML = a;
      }
      r.addEventListener("change", u), u(), o.querySelector("#asgn-close").addEventListener("click", () => {
        o.remove(), ro = null;
      }), o.querySelector("#asgn-apply").addEventListener("click", () => {
        var _a, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l;
        const d = r.value, a = {
          secType: d
        };
        d === "rect" ? (a.b = parseFloat(o.querySelector("#ap-b").value), a.h = parseFloat(o.querySelector("#ap-h").value), a.material = 0) : d === "circ" ? (a.b = parseFloat(o.querySelector("#ap-d").value), a.material = 0) : d === "W" || d === "HSS" ? (a.profileIdx = parseInt(o.querySelector("#ap-profile").value), a.material = 1) : d === "I-param" ? (a.bf = parseFloat(o.querySelector("#ap-bf").value), a.hf = parseFloat(o.querySelector("#ap-hf").value), a.tf = parseFloat(o.querySelector("#ap-tf").value), a.tw = parseFloat(o.querySelector("#ap-tw").value), a.material = 1) : d === "tubular" && (a.bc = parseFloat(o.querySelector("#ap-bc").value), a.hc = parseFloat(o.querySelector("#ap-hc").value), a.t = parseFloat(o.querySelector("#ap-t").value), a.material = 1), a.releaseRotStart = (_a = o.querySelector("#asgn-rel-rot-start")) == null ? void 0 : _a.checked, a.releaseRotEnd = (_b = o.querySelector("#asgn-rel-rot-end")) == null ? void 0 : _b.checked, a.releaseAxial = (_c = o.querySelector("#asgn-rel-axial")) == null ? void 0 : _c.checked, a.releaseTorsion = (_d = o.querySelector("#asgn-rel-torsion")) == null ? void 0 : _d.checked, a.modI = parseFloat((_e2 = o.querySelector("#asgn-mod-i")) == null ? void 0 : _e2.value) || 1, a.modA = parseFloat((_f = o.querySelector("#asgn-mod-a")) == null ? void 0 : _f.value) || 1, a.modJ = parseFloat((_g = o.querySelector("#asgn-mod-j")) == null ? void 0 : _g.value) || 1, a.modAs2 = parseFloat((_h = o.querySelector("#asgn-mod-as2")) == null ? void 0 : _h.value) ?? 1, a.modAs3 = parseFloat((_i = o.querySelector("#asgn-mod-as3")) == null ? void 0 : _i.value) ?? 1, a.modI3 = parseFloat((_j = o.querySelector("#asgn-mod-i3")) == null ? void 0 : _j.value) || 1, a.modMass = parseFloat((_k = o.querySelector("#asgn-mod-mass")) == null ? void 0 : _k.value) || 1, a.modWeight = parseFloat((_l = o.querySelector("#asgn-mod-weight")) == null ? void 0 : _l.value) || 1, t.forEach((m) => be.set(m, {
          ...a
        })), o.remove(), ro = null, Ht(), e.elementInputs.val = {
          ...e.elementInputs.val
        };
      }), o.querySelector("#asgn-remove").addEventListener("click", () => {
        t.forEach((d) => be.delete(d)), o.remove(), ro = null, Ht(), e.elementInputs.val = {
          ...e.elementInputs.val
        };
      });
    }
    let io = null;
    function Js(t) {
      var _a, _b, _c;
      io && io.remove();
      const o = e.nodes.val, n = e.elements.val[t];
      if (!n || n.length !== 2) return;
      const l = o[n[0]], s = o[n[1]], i = Math.abs(s[0] - l[0]), r = Math.abs(s[1] - l[1]), c = Math.abs(s[2] - l[2]), u = r > i && r > c, d = Math.sqrt(i * i + r * r + c * c), a = Pe.get(t) ?? 0, m = (_c = (_b = (_a = e.elementInputs) == null ? void 0 : _a.val) == null ? void 0 : _b.sectionShapes) == null ? void 0 : _c.get(t), $ = (m == null ? void 0 : m.name) || (m ? `${m.type} ${((m.b ?? 0) * 100).toFixed(0)}x${((m.h ?? 0) * 100).toFixed(0)}` : "\u2014"), y = document.createElement("div");
      y.style.cssText = "position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background:#1a1a2e;color:#eee;border:2px solid #ff9900;border-radius:8px;padding:16px;z-index:10000;min-width:280px;font-family:monospace;font-size:13px;box-shadow:0 4px 20px rgba(0,0,0,0.5);", y.innerHTML = `
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
        <b style="color:#ff9900;">Elemento ${t}</b>
        <button id="ep-close" style="background:none;border:none;color:#888;cursor:pointer;font-size:18px;">\u2715</button>
      </div>
      <div style="margin-bottom:8px;">
        <span style="color:#888;">Tipo:</span> ${u ? "Columna" : "Viga"} &nbsp;
        <span style="color:#888;">Piso:</span> ${a + 1} &nbsp;
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
    `, document.body.appendChild(y), io = y, y.querySelector("#ep-close").addEventListener("click", () => {
        y.remove(), io = null, Xt();
      }), y.querySelector("#ep-delete").addEventListener("click", () => {
        se.add(t), y.remove(), io = null, Xt(), ae();
      }), y.querySelector("#ep-inspect").addEventListener("click", () => {
        y.remove(), io = null, es(t);
      });
    }
    setTimeout(() => {
      const t = document.getElementById("viewer");
      if (!t) return;
      const o = t.querySelector("canvas");
      if (!o) return;
      let n = null, l = null;
      const s = 5;
      function i(u) {
        const d = Ce();
        if (!d) return null;
        const a = d.controls.object, m = new ue(u[0], u[1], u[2]);
        m.project(a);
        const $ = o.getBoundingClientRect();
        return {
          x: (m.x + 1) / 2 * $.width,
          y: (-m.y + 1) / 2 * $.height
        };
      }
      function r(u, d, a, m, $) {
        const y = Math.min(u, a), x = Math.max(u, a), p = Math.min(d, m), g = Math.max(d, m), w = e.nodes.val, z = e.elements.val, S = [];
        for (let H = 0; H < z.length; H++) {
          const C = z[H], b = C.map((f) => i(w[f])).filter(Boolean);
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
      function c(u, d, a, m, $, y, x, p) {
        const g = (z, S) => z >= $ && z <= x && S >= y && S <= p;
        if (g(u, d) || g(a, m)) return true;
        const w = (z, S, H, C, b, f, v, M) => {
          const L = (H - z) * (M - f) - (C - S) * (v - b);
          if (Math.abs(L) < 1e-10) return false;
          const N = ((b - z) * (M - f) - (f - S) * (v - b)) / L, q = ((b - z) * (C - S) - (f - S) * (H - z)) / L;
          return N >= 0 && N <= 1 && q >= 0 && q <= 1;
        };
        return w(u, d, a, m, $, y, x, y) || w(u, d, a, m, x, y, x, p) || w(u, d, a, m, $, p, x, p) || w(u, d, a, m, $, y, $, p);
      }
      o.addEventListener("mousedown", (u) => {
        rt && (n = {
          x: u.offsetX,
          y: u.offsetY
        });
      }), o.addEventListener("mousemove", (u) => {
        if (kt) {
          const a = Ce();
          if (!a) return;
          const m = Xn(u.clientX, u.clientY, a.camera, a.rendererElm);
          if (je.track && m.snapType === "node" && m.nodeIdx !== null && m.nodeIdx !== Gt && Is(m.nodeIdx), je.track && Gt !== null && m.worldPos && m.snapType !== "node") {
            const $ = Ls(m.worldPos, Gt);
            $ && (m.worldPos = $, m.snapType = "grid");
          }
          if (Gt !== null && m.worldPos) {
            const $ = e.nodes.val[Gt];
            $ && Gn(u.clientX, u.clientY, new ue(...$), m.worldPos);
          } else if (Ne !== null && m.worldPos) {
            const $ = e.nodes.val[Ne];
            $ && Gn(u.clientX, u.clientY, new ue(...$), m.worldPos);
          } else ft && (ft.remove(), ft = null);
          m.nodeIdx, Kn(m), o.style.cursor = m.snapType !== "free" ? "pointer" : "crosshair";
          return;
        }
        if (!xt && !rt) return;
        if (rt && n) {
          const a = u.offsetX - n.x, m = u.offsetY - n.y;
          if (Math.abs(a) > s || Math.abs(m) > s) {
            l || (l = document.createElement("div"), l.style.cssText = "position:absolute;pointer-events:none;z-index:9999;", o.parentElement.style.position = "relative", o.parentElement.appendChild(l));
            const $ = a > 0, y = Math.min(n.x, u.offsetX), x = Math.min(n.y, u.offsetY), p = Math.abs(a), g = Math.abs(m);
            l.style.left = y + "px", l.style.top = x + "px", l.style.width = p + "px", l.style.height = g + "px", l.style.border = $ ? "2px solid #3399ff" : "2px dashed #33ff33", l.style.background = $ ? "rgba(51,153,255,0.1)" : "rgba(51,255,51,0.1)", o.style.cursor = "crosshair";
            return;
          }
        }
        const d = an(u);
        if (d >= 0) Zn(d), o.style.cursor = "pointer";
        else {
          if (it) {
            const a = Ce();
            a == null ? void 0 : a.scene.remove(it), it = null, a == null ? void 0 : a.render();
          }
          o.style.cursor = rt ? "crosshair" : "";
        }
      }), o.addEventListener("mouseup", (u) => {
        if (rt && n) {
          const d = u.offsetX - n.x, a = u.offsetY - n.y;
          if (Math.abs(d) > s || Math.abs(a) > s) {
            const m = d > 0, $ = r(n.x, n.y, u.offsetX, u.offsetY, m);
            u.ctrlKey || u.metaKey || (He.clear(), Bt()), $.forEach((x) => {
              He.has(x) || (He.add(x), on(x));
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
          const a = Xn(u.clientX, u.clientY, d.camera, d.rendererElm);
          (a.worldPos || a.nodeIdx !== null) && (Ts(a), Kn(a));
          return;
        }
        if (rt) {
          if (l) return;
          const d = an(u), a = u.ctrlKey || u.metaKey;
          if (d >= 0) {
            if (a) if (He.has(d)) {
              He.delete(d);
              const m = Ot.findIndex(($) => $.__elemIdx === d);
              if (m >= 0) {
                const $ = Ce();
                $ == null ? void 0 : $.scene.remove(Ot[m]), Ot[m].geometry.dispose(), Ot[m].material.dispose(), Ot.splice(m, 1), $ == null ? void 0 : $.render();
              }
            } else He.add(d), on(d);
            else He.clear(), Bt(), He.add(d), on(d);
            jt();
          } else a || (He.clear(), Bt(), jt());
          return;
        }
        if (xt) {
          const d = an(u);
          d >= 0 && (Zn(d), Js(d));
        }
      });
    }, 500), fo.derive(() => {
      var _a;
      e.nodes.val, e.elements.val, (_a = e.nodeInputs) == null ? void 0 : _a.val, Le();
    }), ze.modal = (t) => {
      var _a, _b;
      if (t === void 0 && (t = !bt), bt = t, (_a = re.querySelector("#cad3d-modal")) == null ? void 0 : _a.classList.toggle("active", bt), bt) {
        const n = Ce();
        ((_b = n == null ? void 0 : n.settings) == null ? void 0 : _b.loads) && (zo = n.settings.loads.rawVal, n.settings.loads.val = false), Go(), re.querySelector("#cad3d-mode-prev").style.display = "", re.querySelector("#cad3d-mode-next").style.display = "", re.querySelector("#cad3d-mode-label").style.display = "";
      } else Xo(), re.querySelector("#cad3d-mode-prev").style.display = "none", re.querySelector("#cad3d-mode-next").style.display = "none", re.querySelector("#cad3d-mode-label").style.display = "none", E && E !== "placa-q4" && E !== "placa-3q" && ae(), setTimeout(() => {
        var _a2;
        const n = Ce();
        ((_a2 = n == null ? void 0 : n.settings) == null ? void 0 : _a2.loads) && zo && (n.settings.loads.val = true);
      }, 600);
      console.log(`Modal analysis: ${bt ? "ON" : "OFF"}`);
    }, ze.setMode = (t) => {
      var _a;
      if (!(De == null ? void 0 : De.modeShapes)) {
        console.error("No modal results");
        return;
      }
      ot = Math.max(0, Math.min(t, De.modeShapes.length - 1));
      const o = De.modeShapes[ot], { extent: n } = Nt();
      let l = 0;
      for (let i = 0; i < It.length; i++) {
        const r = o[i * 6] || 0, c = o[i * 6 + 1] || 0, u = o[i * 6 + 2] || 0;
        l = Math.max(l, Math.sqrt(r * r + c * c + u * u));
      }
      So = l > 1e-12 ? n * 0.05 / l : 1, vo();
      const s = re.querySelector("#cad3d-mode-label");
      s && De.frequencies && (s.textContent = `Modo ${ot + 1} \u2014 ${De.frequencies[ot].toFixed(2)} Hz`), console.log(`Modo ${ot + 1}: f = ${(_a = De.frequencies) == null ? void 0 : _a[ot].toFixed(4)} Hz`);
    }, window.cad = ze, console.log("FEM Studio CLI ready. Type cad.help() for commands."), setTimeout(() => {
      document.body.appendChild(re), document.body.appendChild(go.div);
    }, 0), setTimeout(() => {
      e.nodes.val.length === 0 && (Ie("edificio"), ae(), jn("edificio"));
    }, 100), document.body.appendChild(wa());
    const is = document.createElement("span");
    return is.style.display = "none", is;
  };
});
export {
  __tla,
  xs as a,
  da as c,
  Ta as g
};
