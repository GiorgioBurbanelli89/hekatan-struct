const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./calcPanel-MiO40P0E.js","./getMesh-B1dmlgUt.js","./__vite-browser-external-D7Ct-6yo.js","./pureFunctionsAny.generated-JAcEVsJ7.js","./analyze-ClLKGn9k.js","./didacticCpp-D1M3B8xf.js","./cyclicPushoverCpp-BK4Rr9QF.js"])))=>i.map(i=>d[i]);
import { d as Tt, _ as ta, p as Xo, m as Ua, s as Xa, __tla as __tla_0 } from "./didacticCpp-D1M3B8xf.js";
import { v as Vn, P as oo, g as Ka, a as Za, o as Qa } from "./theme-CzzIlc4y.js";
import { G as ao, b as el, M as na, D as oa, B as nn, c as vo, d as tl, C as nl, e as da, V as Ne, P as kn, R as sa, f as aa, g as Gn, h as Yn, i as ol, S as sl, j as al, F as Cn, a as Jn, L as Fn, k as ll, l as rl, A as po, T as Ko, m as fo, n as uo, o as il, p as cl } from "./Text-CBH-tcJP.js";
import { g as yo, b as $o, a as hn } from "./analyze-ClLKGn9k.js";
import { g as xn, __tla as __tla_1 } from "./getMesh-B1dmlgUt.js";
import { n as On, s as vn, m as sn, t as ss } from "./pureFunctionsAny.generated-JAcEVsJ7.js";
let ca, ul, tr;
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
  const os = [
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
  ], Un = [
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
  function dl(e, g) {
    return e === "kN" && g === "m" ? "kPa" : e === "kN" && g === "mm" || e === "N" && g === "mm" ? "MPa" : e === "N" && g === "m" ? "Pa" : e === "kip" && g === "in" ? "ksi" : e === "kip" && g === "ft" ? "ksf" : `${e}/${g}\xB2`;
  }
  const Rn = {
    E: 2e8,
    G: 77e6,
    A: 0.01,
    Iz: 833e-7,
    Iy: 833e-7,
    J: 141e-6,
    rho: 7.85
  };
  function Pn(e, g) {
    const O = os.find((W) => W.id === e), M = Un.find((W) => W.id === g), V = O.toKN, H = M.toM, X = (W, he, A) => A / (Math.pow(V, W) * Math.pow(H, he));
    let J, j;
    switch (e) {
      case "kN":
        J = 10, j = [
          -100,
          100,
          1
        ];
        break;
      case "tonf":
        J = 1, j = [
          -20,
          20,
          0.5
        ];
        break;
      case "kgf":
        J = 1e3, j = [
          -1e4,
          1e4,
          100
        ];
        break;
      case "kip":
        J = 10, j = [
          -200,
          200,
          5
        ];
        break;
      case "lb":
        J = 5e3, j = [
          -5e4,
          5e4,
          500
        ];
        break;
      case "N":
        J = 1e4, j = [
          -1e5,
          1e5,
          1e3
        ];
        break;
    }
    return {
      id: `${e}-${g}`,
      label: `${O.label}, ${M.label}`,
      force: O.label,
      length: M.label,
      stress: dl(e, g),
      moment: `${O.label}\xB7${M.label}`,
      E: X(1, -2, Rn.E),
      G: X(1, -2, Rn.G),
      A: X(0, 2, Rn.A),
      Iz: X(0, 4, Rn.Iz),
      Iy: X(0, 4, Rn.Iy),
      J: X(0, 4, Rn.J),
      rho: X(1, -4, Rn.rho),
      spanRange: M.spanRange,
      heightRange: M.heightRange,
      defaultSpan: M.defaultSpan,
      defaultHeight: M.defaultHeight,
      defaultForce: J,
      forceRange: j,
      galponSpan: M.galponSpan,
      galponLength: M.galponLength,
      galponHeight: M.galponHeight,
      galponRise: M.galponRise
    };
  }
  Pn("kN", "m"), Pn("kip", "in");
  function mo() {
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
  function pl(e) {
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
      "muro-q4": [
        {
          key: "W",
          val: 5,
          min: 1,
          max: 20,
          step: 0.5,
          label: `Ancho W (${e.length})`
        },
        {
          key: "H",
          val: 3,
          min: 1,
          max: 15,
          step: 0.5,
          label: `Alto H (${e.length})`
        },
        {
          key: "t",
          val: 0.2,
          min: 0.05,
          max: 1,
          step: 0.05,
          label: `Espesor t (${e.length})`
        },
        {
          key: "nx",
          val: 8,
          min: 2,
          max: 20,
          step: 1,
          label: "Mesh nx"
        },
        {
          key: "ny",
          val: 6,
          min: 2,
          max: 20,
          step: 1,
          label: "Mesh ny"
        },
        {
          key: "E",
          val: e.E * 25e6 / 2e8,
          min: 1e4,
          max: 1e9,
          step: 1e5,
          label: `E concreto (${e.stress})`
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
          val: e.defaultForce * 10,
          min: 1,
          max: e.forceRange[1] * 50,
          step: e.forceRange[2] * 5,
          label: `P lateral (${e.force})`
        }
      ],
      "viga-q4": [
        {
          key: "L",
          val: 6,
          min: 1,
          max: 20,
          step: 0.5,
          label: `Luz L (${e.length})`
        },
        {
          key: "h",
          val: 0.5,
          min: 0.1,
          max: 3,
          step: 0.1,
          label: `Peralte h (${e.length})`
        },
        {
          key: "t",
          val: 0.2,
          min: 0.05,
          max: 1,
          step: 0.05,
          label: `Espesor t (${e.length})`
        },
        {
          key: "nx",
          val: 12,
          min: 2,
          max: 30,
          step: 1,
          label: "Mesh nx"
        },
        {
          key: "ny",
          val: 4,
          min: 2,
          max: 15,
          step: 1,
          label: "Mesh ny"
        },
        {
          key: "E",
          val: e.E * 25e6 / 2e8,
          min: 1e4,
          max: 1e9,
          step: 1e5,
          label: `E concreto (${e.stress})`
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
          val: e.defaultForce * 5,
          min: 1,
          max: e.forceRange[1] * 50,
          step: e.forceRange[2] * 2,
          label: `P puntual (${e.force})`
        }
      ],
      "placa-xz": [
        {
          key: "Lx",
          val: 4,
          min: 1,
          max: 15,
          step: 0.5,
          label: `Lx (${e.length})`
        },
        {
          key: "Lz",
          val: 2,
          min: 0.5,
          max: 10,
          step: 0.5,
          label: `Lz (${e.length})`
        },
        {
          key: "t",
          val: 0.15,
          min: 0.05,
          max: 0.5,
          step: 0.05,
          label: `Espesor t (${e.length})`
        },
        {
          key: "nx",
          val: 8,
          min: 2,
          max: 20,
          step: 1,
          label: "Mesh nx"
        },
        {
          key: "nz",
          val: 4,
          min: 2,
          max: 15,
          step: 1,
          label: "Mesh nz"
        },
        {
          key: "E",
          val: e.E * 25e6 / 2e8,
          min: 1e4,
          max: 1e9,
          step: 1e5,
          label: `E concreto (${e.stress})`
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
          val: e.defaultForce * 2,
          min: 1,
          max: e.forceRange[1] * 20,
          step: e.forceRange[2],
          label: `P borde (${e.force})`
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
  function fl(e) {
    const g = e.force, [O, M, V] = e.forceRange;
    return {
      truss: [
        {
          key: "CM",
          val: -e.defaultForce,
          min: O,
          max: 0,
          step: V,
          label: `CM (${g})`
        },
        {
          key: "CV",
          val: 0,
          min: O,
          max: 0,
          step: V,
          label: `CV (${g})`
        }
      ],
      beams: [
        {
          key: "CM",
          val: 0,
          min: O,
          max: 0,
          step: V,
          label: `CM (${g})`
        },
        {
          key: "CV",
          val: 0,
          min: O,
          max: 0,
          step: V,
          label: `CV (${g})`
        },
        {
          key: "Ex",
          val: e.defaultForce,
          min: O,
          max: M,
          step: V,
          label: `Ex sismo (${g})`
        }
      ],
      "3d": [
        {
          key: "CM",
          val: 0,
          min: O,
          max: 0,
          step: V,
          label: `CM (${g})`
        },
        {
          key: "CV",
          val: 0,
          min: O,
          max: 0,
          step: V,
          label: `CV (${g})`
        },
        {
          key: "Ex",
          val: e.defaultForce * 3,
          min: O,
          max: M,
          step: V,
          label: `Ex sismo (${g})`
        }
      ],
      frame: [
        {
          key: "CM",
          val: -e.defaultForce,
          min: O,
          max: 0,
          step: V,
          label: `CM (${g})`
        },
        {
          key: "CV",
          val: 0,
          min: O,
          max: 0,
          step: V,
          label: `CV (${g})`
        },
        {
          key: "Ex",
          val: 0,
          min: O,
          max: M,
          step: V,
          label: `Ex sismo (${g})`
        }
      ],
      edificio: [
        {
          key: "CM",
          val: -e.defaultForce,
          min: O,
          max: 0,
          step: V,
          label: `CM (${g})`
        },
        {
          key: "CV",
          val: 0,
          min: O,
          max: 0,
          step: V,
          label: `CV (${g})`
        },
        {
          key: "Ex",
          val: 0,
          min: O,
          max: M,
          step: V,
          label: `Ex sismo (${g})`
        },
        {
          key: "Ey",
          val: 0,
          min: O,
          max: M,
          step: V,
          label: `Ey sismo (${g})`
        }
      ],
      galpon: [
        {
          key: "CM",
          val: -e.defaultForce,
          min: O,
          max: 0,
          step: V,
          label: `CM (${g})`
        },
        {
          key: "CV",
          val: 0,
          min: O,
          max: 0,
          step: V,
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
          min: O,
          max: 0,
          step: V,
          label: `CM (${g})`
        }
      ],
      "placa-q4": [
        {
          key: "CM",
          val: 0,
          min: O,
          max: 0,
          step: V,
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
      "muro-q4": [],
      "viga-q4": [],
      "placa-xz": [],
      eiffel: [],
      arco: [],
      puente: [],
      twisted: [],
      burj: [],
      opera: [],
      diagrid: []
    };
  }
  ul = function() {
    const e = document.createElement("div");
    e.id = "modal-results", e.style.cssText = `
    position: fixed; bottom: 10px; left: 10px; z-index: 9999;
    background: rgba(0,0,0,0.92); color: #0f0; font-family: monospace;
    font-size: 12px; border-radius: 6px;
    max-width: 720px; max-height: 60vh; overflow: auto; pointer-events: auto;
    border: 1px solid #0f03; resize: both;
  `;
    let g = false;
    function O(M, V) {
      var _a, _b;
      if (!M.frequencies || M.frequencies.length === 0) {
        e.innerHTML = "<b style='padding:12px;display:block'>Modal: no results</b>";
        return;
      }
      const H = [
        "Ux",
        "Uy",
        "Uz",
        "Rx",
        "Ry",
        "Rz"
      ], X = [
        0,
        0,
        0,
        0,
        0,
        0
      ];
      let J = `<div id="modal-header" style="display:flex; align-items:center; justify-content:space-between; padding:8px 12px; cursor:move; position:sticky; top:0; background:rgba(0,0,0,0.95); z-index:1;">
  <b style="color:#ff0">MODAL \u2014 ${V.title}</b>
  <div style="display:flex; gap:4px; margin-left:12px;">
    <button id="modal-copy" style="padding:2px 8px; font-size:10px; cursor:pointer;
      background:#2d6a4f; color:#fff; border:1px solid #40916c; border-radius:3px;" title="Copiar tabla">\u{1F4CB}</button>
    <button id="modal-minimize" style="padding:2px 8px; font-size:10px; cursor:pointer;
      background:#555; color:#fff; border:1px solid #777; border-radius:3px;" title="Minimizar">\u25AC</button>
  </div>
</div>`;
      if (J += '<div id="modal-body" style="padding:0 12px 10px 12px;">', V.properties) for (const W of V.properties) J += `<span style="color:#888">${W}</span>
`;
      J += `<table style="border-collapse:collapse; color:#0f0; font-size:11px; margin-top:4px">
<tr style="color:#ff0; border-bottom:1px solid #ff03; position:sticky; top:36px; background:rgba(0,0,0,0.95); z-index:1;">
  <th style="padding:2px 6px">Mode</th>
  <th style="padding:2px 6px">f (Hz)</th>
  <th style="padding:2px 6px">T (s)</th>
  <th style="padding:2px 6px">\u03C9 (rad/s)</th>`;
      for (const W of H) J += `<th style="padding:2px 5px">${W}</th>`;
      if (J += `<th style="padding:2px 5px; color:#0ff">\u03A3Ux</th>
  <th style="padding:2px 5px; color:#0ff">\u03A3Uy</th>
  <th style="padding:2px 5px; color:#0ff">\u03A3Rz</th></tr>`, M.frequencies.forEach((W, he) => {
        var _a2;
        const A = W > 0 ? 1 / W : 0, Q = W * 2 * Math.PI, $e = ((_a2 = M.massParticipation) == null ? void 0 : _a2[he]) || [
          0,
          0,
          0,
          0,
          0,
          0
        ];
        for (let ce = 0; ce < 6; ce++) X[ce] += $e[ce];
        J += `<tr style="border-bottom:1px solid #fff1">
  <td style="padding:2px 6px; text-align:center">${he + 1}</td>
  <td style="padding:2px 6px; text-align:right">${W.toFixed(4)}</td>
  <td style="padding:2px 6px; text-align:right">${A.toFixed(4)}</td>
  <td style="padding:2px 6px; text-align:right">${Q.toFixed(2)}</td>`;
        for (let ce = 0; ce < 6; ce++) {
          const ie = ($e[ce] * 100).toFixed(1), ne = $e[ce] > 0.5 ? "#f00" : $e[ce] > 0.1 ? "#ff0" : "#0f0";
          J += `<td style="padding:2px 5px; text-align:right; color:${ne}">${ie}%</td>`;
        }
        J += `<td style="padding:2px 5px; text-align:right; color:#0ff">${(X[0] * 100).toFixed(1)}%</td>
  <td style="padding:2px 5px; text-align:right; color:#0ff">${(X[1] * 100).toFixed(1)}%</td>
  <td style="padding:2px 5px; text-align:right; color:#0ff">${(X[5] * 100).toFixed(1)}%</td></tr>`;
      }), J += "</table></div>", e.innerHTML = J, g) {
        const W = e.querySelector("#modal-body"), he = e.querySelector("#modal-minimize");
        W && (W.style.display = "none"), he && (he.textContent = "\u25A2", he.title = "Restaurar");
      }
      (_a = e.querySelector("#modal-minimize")) == null ? void 0 : _a.addEventListener("click", () => {
        g = !g;
        const W = e.querySelector("#modal-body"), he = e.querySelector("#modal-minimize");
        g ? (W.style.display = "none", he.textContent = "\u25A2", he.title = "Restaurar") : (W.style.display = "block", he.textContent = "\u25AC", he.title = "Minimizar");
      });
      const j = e.querySelector("#modal-header");
      if (j) {
        let W = false, he = 0, A = 0, Q = 0, $e = 0;
        j.addEventListener("mousedown", (ce) => {
          if (ce.target.tagName === "BUTTON") return;
          W = true, he = ce.clientX, A = ce.clientY;
          const ie = e.getBoundingClientRect();
          Q = ie.left, $e = ie.top, ce.preventDefault();
        }), document.addEventListener("mousemove", (ce) => {
          if (!W) return;
          const ie = ce.clientX - he, ne = ce.clientY - A;
          e.style.left = Q + ie + "px", e.style.top = $e + ne + "px", e.style.bottom = "auto", e.style.right = "auto";
        }), document.addEventListener("mouseup", () => {
          W = false;
        });
      }
      (_b = e.querySelector("#modal-copy")) == null ? void 0 : _b.addEventListener("click", () => {
        const W = [];
        W.push(`Modal Analysis \u2014 ${V.title}`);
        const he = `Mode  Freq(Hz)  Period(s)  \u03C9(rad/s)  ${H.join("     ")}  \u03A3Ux    \u03A3Uy    \u03A3Rz`;
        W.push(he), W.push("-".repeat(he.length));
        const A = [
          0,
          0,
          0,
          0,
          0,
          0
        ];
        M.frequencies.forEach(($e, ce) => {
          var _a2;
          const ie = $e > 0 ? 1 / $e : 0, ne = $e * 2 * Math.PI, _ = ((_a2 = M.massParticipation) == null ? void 0 : _a2[ce]) || [
            0,
            0,
            0,
            0,
            0,
            0
          ];
          for (let Y = 0; Y < 6; Y++) A[Y] += _[Y];
          const D = _.map((Y) => ((Y * 100).toFixed(1) + "%").padStart(6)).join(" ");
          W.push(`${String(ce + 1).padStart(4)}  ${$e.toFixed(4).padStart(9)}  ${ie.toFixed(4).padStart(9)}  ${ne.toFixed(2).padStart(9)}  ${D}  ${(A[0] * 100).toFixed(1).padStart(5)}%  ${(A[1] * 100).toFixed(1).padStart(5)}%  ${(A[5] * 100).toFixed(1).padStart(5)}%`);
        }), navigator.clipboard.writeText(W.join(`
`));
        const Q = e.querySelector("#modal-copy");
        Q.textContent = "\u2713", setTimeout(() => Q.textContent = "\u{1F4CB}", 1500);
      });
    }
    return {
      div: e,
      render: O
    };
  };
  const Re = 64516e-8, q = 416231e-12, oe = 0.0254, Tn = [
    {
      name: "W6x9",
      type: "W",
      A: 2.68 * Re,
      Iz: 16.4 * q,
      Iy: 2.2 * q,
      J: 0.0405 * q,
      d: 5.9 * oe,
      bf: 3.94 * oe
    },
    {
      name: "W6x15",
      type: "W",
      A: 4.43 * Re,
      Iz: 29.1 * q,
      Iy: 9.32 * q,
      J: 0.103 * q,
      d: 5.99 * oe,
      bf: 5.99 * oe
    },
    {
      name: "W6x20",
      type: "W",
      A: 5.87 * Re,
      Iz: 41.4 * q,
      Iy: 13.3 * q,
      J: 0.204 * q,
      d: 6.2 * oe,
      bf: 6.02 * oe
    },
    {
      name: "W8x10",
      type: "W",
      A: 2.96 * Re,
      Iz: 30.8 * q,
      Iy: 2.09 * q,
      J: 0.0426 * q,
      d: 7.89 * oe,
      bf: 3.94 * oe
    },
    {
      name: "W8x18",
      type: "W",
      A: 5.26 * Re,
      Iz: 61.9 * q,
      Iy: 7.97 * q,
      J: 0.172 * q,
      d: 8.14 * oe,
      bf: 5.25 * oe
    },
    {
      name: "W8x24",
      type: "W",
      A: 7.08 * Re,
      Iz: 82.7 * q,
      Iy: 18.3 * q,
      J: 0.346 * q,
      d: 7.93 * oe,
      bf: 6.5 * oe
    },
    {
      name: "W8x31",
      type: "W",
      A: 9.13 * Re,
      Iz: 110 * q,
      Iy: 37.1 * q,
      J: 0.536 * q,
      d: 8 * oe,
      bf: 7.995 * oe
    },
    {
      name: "W8x40",
      type: "W",
      A: 11.7 * Re,
      Iz: 146 * q,
      Iy: 49.1 * q,
      J: 0.871 * q,
      d: 8.25 * oe,
      bf: 8.07 * oe
    },
    {
      name: "W8x48",
      type: "W",
      A: 14.1 * Re,
      Iz: 184 * q,
      Iy: 60.9 * q,
      J: 1.45 * q,
      d: 8.5 * oe,
      bf: 8.11 * oe
    },
    {
      name: "W8x67",
      type: "W",
      A: 19.7 * Re,
      Iz: 272 * q,
      Iy: 88.6 * q,
      J: 3.54 * q,
      d: 9 * oe,
      bf: 8.28 * oe
    },
    {
      name: "W10x12",
      type: "W",
      A: 3.54 * Re,
      Iz: 53.8 * q,
      Iy: 2.18 * q,
      J: 0.0547 * q,
      d: 9.87 * oe,
      bf: 3.96 * oe
    },
    {
      name: "W10x22",
      type: "W",
      A: 6.49 * Re,
      Iz: 118 * q,
      Iy: 11.4 * q,
      J: 0.239 * q,
      d: 10.17 * oe,
      bf: 5.75 * oe
    },
    {
      name: "W10x33",
      type: "W",
      A: 9.71 * Re,
      Iz: 171 * q,
      Iy: 36.6 * q,
      J: 0.583 * q,
      d: 9.73 * oe,
      bf: 7.96 * oe
    },
    {
      name: "W10x49",
      type: "W",
      A: 14.4 * Re,
      Iz: 272 * q,
      Iy: 93.4 * q,
      J: 1.39 * q,
      d: 9.98 * oe,
      bf: 10 * oe
    },
    {
      name: "W10x68",
      type: "W",
      A: 20 * Re,
      Iz: 394 * q,
      Iy: 134 * q,
      J: 3.56 * q,
      d: 10.4 * oe,
      bf: 10.13 * oe
    },
    {
      name: "W10x100",
      type: "W",
      A: 29.4 * Re,
      Iz: 623 * q,
      Iy: 207 * q,
      J: 10.9 * q,
      d: 11.1 * oe,
      bf: 10.34 * oe
    },
    {
      name: "W12x14",
      type: "W",
      A: 4.16 * Re,
      Iz: 88.6 * q,
      Iy: 2.36 * q,
      J: 0.0704 * q,
      d: 11.91 * oe,
      bf: 3.97 * oe
    },
    {
      name: "W12x22",
      type: "W",
      A: 6.48 * Re,
      Iz: 156 * q,
      Iy: 4.66 * q,
      J: 0.293 * q,
      d: 12.31 * oe,
      bf: 4.03 * oe
    },
    {
      name: "W12x26",
      type: "W",
      A: 7.65 * Re,
      Iz: 204 * q,
      Iy: 17.3 * q,
      J: 0.3 * q,
      d: 12.22 * oe,
      bf: 6.49 * oe
    },
    {
      name: "W12x40",
      type: "W",
      A: 11.7 * Re,
      Iz: 310 * q,
      Iy: 44.1 * q,
      J: 0.906 * q,
      d: 11.94 * oe,
      bf: 8.01 * oe
    },
    {
      name: "W12x53",
      type: "W",
      A: 15.6 * Re,
      Iz: 425 * q,
      Iy: 95.8 * q,
      J: 1.58 * q,
      d: 12.06 * oe,
      bf: 9.99 * oe
    },
    {
      name: "W12x72",
      type: "W",
      A: 21.1 * Re,
      Iz: 597 * q,
      Iy: 195 * q,
      J: 4.05 * q,
      d: 12.25 * oe,
      bf: 12.04 * oe
    },
    {
      name: "W12x96",
      type: "W",
      A: 28.2 * Re,
      Iz: 833 * q,
      Iy: 270 * q,
      J: 8.44 * q,
      d: 12.71 * oe,
      bf: 12.16 * oe
    },
    {
      name: "W12x120",
      type: "W",
      A: 35.3 * Re,
      Iz: 1070 * q,
      Iy: 345 * q,
      J: 16 * q,
      d: 13.12 * oe,
      bf: 12.32 * oe
    },
    {
      name: "W14x22",
      type: "W",
      A: 6.49 * Re,
      Iz: 199 * q,
      Iy: 7 * q,
      J: 0.208 * q,
      d: 13.74 * oe,
      bf: 5 * oe
    },
    {
      name: "W14x30",
      type: "W",
      A: 8.85 * Re,
      Iz: 291 * q,
      Iy: 19.6 * q,
      J: 0.38 * q,
      d: 13.84 * oe,
      bf: 6.73 * oe
    },
    {
      name: "W14x38",
      type: "W",
      A: 11.2 * Re,
      Iz: 385 * q,
      Iy: 26.7 * q,
      J: 0.798 * q,
      d: 14.1 * oe,
      bf: 6.77 * oe
    },
    {
      name: "W14x48",
      type: "W",
      A: 14.1 * Re,
      Iz: 485 * q,
      Iy: 51.4 * q,
      J: 1.45 * q,
      d: 13.79 * oe,
      bf: 8.03 * oe
    },
    {
      name: "W14x61",
      type: "W",
      A: 17.9 * Re,
      Iz: 640 * q,
      Iy: 107 * q,
      J: 2.19 * q,
      d: 13.89 * oe,
      bf: 9.99 * oe
    },
    {
      name: "W14x82",
      type: "W",
      A: 24 * Re,
      Iz: 882 * q,
      Iy: 148 * q,
      J: 5.07 * q,
      d: 14.31 * oe,
      bf: 10.13 * oe
    },
    {
      name: "W14x109",
      type: "W",
      A: 32 * Re,
      Iz: 1240 * q,
      Iy: 447 * q,
      J: 7.12 * q,
      d: 14.32 * oe,
      bf: 14.61 * oe
    },
    {
      name: "W14x132",
      type: "W",
      A: 38.8 * Re,
      Iz: 1530 * q,
      Iy: 548 * q,
      J: 12.3 * q,
      d: 14.66 * oe,
      bf: 14.73 * oe
    },
    {
      name: "W14x176",
      type: "W",
      A: 51.8 * Re,
      Iz: 2140 * q,
      Iy: 838 * q,
      J: 23.7 * q,
      d: 15.22 * oe,
      bf: 15.65 * oe
    },
    {
      name: "W16x26",
      type: "W",
      A: 7.68 * Re,
      Iz: 301 * q,
      Iy: 9.59 * q,
      J: 0.262 * q,
      d: 15.69 * oe,
      bf: 5.5 * oe
    },
    {
      name: "W16x36",
      type: "W",
      A: 10.6 * Re,
      Iz: 448 * q,
      Iy: 24.5 * q,
      J: 0.545 * q,
      d: 15.86 * oe,
      bf: 6.99 * oe
    },
    {
      name: "W16x50",
      type: "W",
      A: 14.7 * Re,
      Iz: 659 * q,
      Iy: 37.2 * q,
      J: 1.52 * q,
      d: 16.26 * oe,
      bf: 7.07 * oe
    },
    {
      name: "W16x67",
      type: "W",
      A: 19.7 * Re,
      Iz: 954 * q,
      Iy: 119 * q,
      J: 2.39 * q,
      d: 16.33 * oe,
      bf: 10.24 * oe
    },
    {
      name: "W16x89",
      type: "W",
      A: 26.2 * Re,
      Iz: 1300 * q,
      Iy: 163 * q,
      J: 5.45 * q,
      d: 16.75 * oe,
      bf: 10.37 * oe
    },
    {
      name: "W18x35",
      type: "W",
      A: 10.3 * Re,
      Iz: 510 * q,
      Iy: 15.3 * q,
      J: 0.506 * q,
      d: 17.7 * oe,
      bf: 6 * oe
    },
    {
      name: "W18x50",
      type: "W",
      A: 14.7 * Re,
      Iz: 800 * q,
      Iy: 40.1 * q,
      J: 1.24 * q,
      d: 17.99 * oe,
      bf: 7.5 * oe
    },
    {
      name: "W18x71",
      type: "W",
      A: 20.8 * Re,
      Iz: 1170 * q,
      Iy: 60.3 * q,
      J: 3.49 * q,
      d: 18.47 * oe,
      bf: 7.64 * oe
    },
    {
      name: "W18x97",
      type: "W",
      A: 28.5 * Re,
      Iz: 1750 * q,
      Iy: 201 * q,
      J: 5.86 * q,
      d: 18.59 * oe,
      bf: 11.15 * oe
    },
    {
      name: "W21x44",
      type: "W",
      A: 13 * Re,
      Iz: 843 * q,
      Iy: 20.7 * q,
      J: 0.77 * q,
      d: 20.66 * oe,
      bf: 6.5 * oe
    },
    {
      name: "W21x62",
      type: "W",
      A: 18.3 * Re,
      Iz: 1330 * q,
      Iy: 57.5 * q,
      J: 1.83 * q,
      d: 20.99 * oe,
      bf: 8.24 * oe
    },
    {
      name: "W21x83",
      type: "W",
      A: 24.3 * Re,
      Iz: 1830 * q,
      Iy: 81.4 * q,
      J: 4.34 * q,
      d: 21.43 * oe,
      bf: 8.36 * oe
    },
    {
      name: "W21x111",
      type: "W",
      A: 32.7 * Re,
      Iz: 2670 * q,
      Iy: 274 * q,
      J: 6.83 * q,
      d: 21.51 * oe,
      bf: 12.34 * oe
    },
    {
      name: "W24x55",
      type: "W",
      A: 16.2 * Re,
      Iz: 1350 * q,
      Iy: 29.1 * q,
      J: 1.18 * q,
      d: 23.57 * oe,
      bf: 7.01 * oe
    },
    {
      name: "W24x76",
      type: "W",
      A: 22.4 * Re,
      Iz: 2100 * q,
      Iy: 82.5 * q,
      J: 2.68 * q,
      d: 23.92 * oe,
      bf: 8.99 * oe
    },
    {
      name: "W24x104",
      type: "W",
      A: 30.6 * Re,
      Iz: 3100 * q,
      Iy: 259 * q,
      J: 4.72 * q,
      d: 24.06 * oe,
      bf: 12.75 * oe
    },
    {
      name: "W24x131",
      type: "W",
      A: 38.5 * Re,
      Iz: 4020 * q,
      Iy: 340 * q,
      J: 9.5 * q,
      d: 24.48 * oe,
      bf: 12.86 * oe
    },
    {
      name: "W24x146",
      type: "W",
      A: 43 * Re,
      Iz: 4580 * q,
      Iy: 391 * q,
      J: 12.6 * q,
      d: 24.74 * oe,
      bf: 12.9 * oe
    },
    {
      name: "W24x176",
      type: "W",
      A: 51.7 * Re,
      Iz: 5680 * q,
      Iy: 479 * q,
      J: 21.2 * q,
      d: 25.24 * oe,
      bf: 12.9 * oe
    },
    {
      name: "W27x84",
      type: "W",
      A: 24.8 * Re,
      Iz: 2850 * q,
      Iy: 106 * q,
      J: 2.81 * q,
      d: 26.71 * oe,
      bf: 9.96 * oe
    },
    {
      name: "W27x114",
      type: "W",
      A: 33.5 * Re,
      Iz: 4090 * q,
      Iy: 159 * q,
      J: 6.77 * q,
      d: 27.29 * oe,
      bf: 10.07 * oe
    },
    {
      name: "W30x90",
      type: "W",
      A: 26.4 * Re,
      Iz: 3610 * q,
      Iy: 115 * q,
      J: 3.06 * q,
      d: 29.53 * oe,
      bf: 10.4 * oe
    },
    {
      name: "W30x116",
      type: "W",
      A: 34.2 * Re,
      Iz: 4930 * q,
      Iy: 164 * q,
      J: 6.43 * q,
      d: 30.01 * oe,
      bf: 10.5 * oe
    },
    {
      name: "W33x118",
      type: "W",
      A: 34.7 * Re,
      Iz: 5900 * q,
      Iy: 187 * q,
      J: 5.3 * q,
      d: 32.86 * oe,
      bf: 11.48 * oe
    },
    {
      name: "W36x135",
      type: "W",
      A: 39.7 * Re,
      Iz: 7800 * q,
      Iy: 225 * q,
      J: 7 * q,
      d: 35.55 * oe,
      bf: 11.95 * oe
    },
    {
      name: "HSS4x4x1/4",
      type: "HSS",
      A: 3.37 * Re,
      Iz: 8.22 * q,
      Iy: 8.22 * q,
      J: 13.4 * q,
      d: 4 * oe,
      bf: 4 * oe
    },
    {
      name: "HSS4x4x3/8",
      type: "HSS",
      A: 4.78 * Re,
      Iz: 10.7 * q,
      Iy: 10.7 * q,
      J: 17.9 * q,
      d: 4 * oe,
      bf: 4 * oe
    },
    {
      name: "HSS4x4x1/2",
      type: "HSS",
      A: 6.02 * Re,
      Iz: 12.3 * q,
      Iy: 12.3 * q,
      J: 21 * q,
      d: 4 * oe,
      bf: 4 * oe
    },
    {
      name: "HSS6x6x1/4",
      type: "HSS",
      A: 5.24 * Re,
      Iz: 30.3 * q,
      Iy: 30.3 * q,
      J: 48.3 * q,
      d: 6 * oe,
      bf: 6 * oe
    },
    {
      name: "HSS6x6x3/8",
      type: "HSS",
      A: 7.58 * Re,
      Iz: 41.1 * q,
      Iy: 41.1 * q,
      J: 66.9 * q,
      d: 6 * oe,
      bf: 6 * oe
    },
    {
      name: "HSS6x6x1/2",
      type: "HSS",
      A: 9.74 * Re,
      Iz: 49.6 * q,
      Iy: 49.6 * q,
      J: 82.2 * q,
      d: 6 * oe,
      bf: 6 * oe
    },
    {
      name: "HSS8x8x1/4",
      type: "HSS",
      A: 7.1 * Re,
      Iz: 70.7 * q,
      Iy: 70.7 * q,
      J: 112 * q,
      d: 8 * oe,
      bf: 8 * oe
    },
    {
      name: "HSS8x8x3/8",
      type: "HSS",
      A: 10.4 * Re,
      Iz: 98 * q,
      Iy: 98 * q,
      J: 158 * q,
      d: 8 * oe,
      bf: 8 * oe
    },
    {
      name: "HSS8x8x1/2",
      type: "HSS",
      A: 13.5 * Re,
      Iz: 122 * q,
      Iy: 122 * q,
      J: 199 * q,
      d: 8 * oe,
      bf: 8 * oe
    },
    {
      name: "HSS10x10x3/8",
      type: "HSS",
      A: 13.2 * Re,
      Iz: 202 * q,
      Iy: 202 * q,
      J: 323 * q,
      d: 10 * oe,
      bf: 10 * oe
    },
    {
      name: "HSS10x10x1/2",
      type: "HSS",
      A: 17.2 * Re,
      Iz: 254 * q,
      Iy: 254 * q,
      J: 412 * q,
      d: 10 * oe,
      bf: 10 * oe
    },
    {
      name: "HSS12x12x3/8",
      type: "HSS",
      A: 16 * Re,
      Iz: 355 * q,
      Iy: 355 * q,
      J: 564 * q,
      d: 12 * oe,
      bf: 12 * oe
    },
    {
      name: "HSS12x12x1/2",
      type: "HSS",
      A: 21 * Re,
      Iz: 452 * q,
      Iy: 452 * q,
      J: 724 * q,
      d: 12 * oe,
      bf: 12 * oe
    },
    {
      name: "HSS6x4x1/4",
      type: "HSS",
      A: 4.3 * Re,
      Iz: 18 * q,
      Iy: 9.58 * q,
      J: 22.6 * q,
      d: 6 * oe,
      bf: 4 * oe
    },
    {
      name: "HSS6x4x3/8",
      type: "HSS",
      A: 6.18 * Re,
      Iz: 23.8 * q,
      Iy: 12.3 * q,
      J: 30.3 * q,
      d: 6 * oe,
      bf: 4 * oe
    },
    {
      name: "HSS8x4x1/4",
      type: "HSS",
      A: 5.24 * Re,
      Iz: 33.6 * q,
      Iy: 11.8 * q,
      J: 33 * q,
      d: 8 * oe,
      bf: 4 * oe
    },
    {
      name: "HSS8x4x3/8",
      type: "HSS",
      A: 7.58 * Re,
      Iz: 45.1 * q,
      Iy: 15 * q,
      J: 44.5 * q,
      d: 8 * oe,
      bf: 4 * oe
    },
    {
      name: "HSS8x6x1/4",
      type: "HSS",
      A: 6.17 * Re,
      Iz: 46.1 * q,
      Iy: 28.2 * q,
      J: 61.3 * q,
      d: 8 * oe,
      bf: 6 * oe
    },
    {
      name: "HSS8x6x3/8",
      type: "HSS",
      A: 8.97 * Re,
      Iz: 63 * q,
      Iy: 37.5 * q,
      J: 84.6 * q,
      d: 8 * oe,
      bf: 6 * oe
    },
    {
      name: "HSS10x6x3/8",
      type: "HSS",
      A: 10.4 * Re,
      Iz: 103 * q,
      Iy: 47.1 * q,
      J: 115 * q,
      d: 10 * oe,
      bf: 6 * oe
    },
    {
      name: "HSS12x8x3/8",
      type: "HSS",
      A: 13.2 * Re,
      Iz: 196 * q,
      Iy: 102 * q,
      J: 249 * q,
      d: 12 * oe,
      bf: 8 * oe
    }
  ];
  function bo() {
    const e = {};
    return Tn.forEach((g, O) => {
      g.type === "W" && (e[g.name] = O);
    }), e;
  }
  function go() {
    const e = {};
    return Tn.forEach((g, O) => {
      g.type === "HSS" && (e[g.name] = O);
    }), e;
  }
  function ml(e) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    const { nodes: g, elements: O, elementInputs: M, nodeInputs: V, deformOutputs: H } = e, X = g.length * 6, J = O.length, j = O.filter((ie) => ie.length === 2).length, W = O.filter((ie) => ie.length >= 3).length, he = document.createElement("div");
    he.className = "rpt-overlay";
    let A = "";
    A += '<button class="rpt-close" id="rpt-close">\u2715 Close</button>', A += "<h1>Finite Element Analysis \u2014 Step-by-Step Report</h1>", A += '<div class="rpt-subtitle">Complete FEM derivation from element formulation to final results</div>', A += '<hr class="rpt-sep"/>', A += "<h2>1. Input Data</h2>", A += '<table class="rpt-info"><tbody>', A += `<tr><td>Number of nodes</td><td class="val">${g.length}</td></tr>`, A += `<tr><td>Number of elements</td><td class="val">${J} (${j} frames, ${W} shells)</td></tr>`, A += '<tr><td>DOFs per node</td><td class="val">6 (u<sub>x</sub>, u<sub>y</sub>, u<sub>z</sub>, \u03B8<sub>x</sub>, \u03B8<sub>y</sub>, \u03B8<sub>z</sub>)</td></tr>', A += `<tr><td>Total DOFs</td><td class="val">${X}</td></tr>`, A += "</tbody></table>", A += "<h3>1.1 Node Coordinates</h3>", A += '<table class="rpt-data"><thead><tr><th>Node</th><th>x</th><th>y</th><th>z</th></tr></thead><tbody>', g.forEach((ie, ne) => {
      A += `<tr><td>${ne}</td><td>${st(ie[0])}</td><td>${st(ie[1])}</td><td>${st(ie[2])}</td></tr>`;
    }), A += "</tbody></table>", A += "<h3>1.2 Element Connectivity</h3>", A += '<table class="rpt-data"><thead><tr><th>Elem</th><th>Type</th><th>Nodes</th><th>L</th><th>E</th><th>A</th><th>I<sub>z</sub></th><th>I<sub>y</sub></th></tr></thead><tbody>', O.forEach((ie, ne) => {
      var _a2, _b2, _c2, _d2;
      const _ = ie.length === 2, D = ie.map((ve) => g[ve]), Y = _ ? On(vn(D[1], D[0])) : 0, pe = ((_a2 = M.elasticities) == null ? void 0 : _a2.get(ne)) ?? 0, Me = ((_b2 = M.areas) == null ? void 0 : _b2.get(ne)) ?? 0, ze = ((_c2 = M.momentsOfInertiaZ) == null ? void 0 : _c2.get(ne)) ?? 0, Ue = ((_d2 = M.momentsOfInertiaY) == null ? void 0 : _d2.get(ne)) ?? 0;
      A += `<tr><td>${ne}</td><td>${_ ? "Frame" : "Shell"}</td><td>${ie.join(" \u2192 ")}</td>`, A += `<td>${st(Y)}</td><td>${st(pe)}</td><td>${st(Me)}</td><td>${st(ze)}</td><td>${st(Ue)}</td></tr>`;
    }), A += "</tbody></table>", A += "<h2>2. Element Formulation</h2>", j > 0 && (A += "<h3>2.1 Frame Element (Euler-Bernoulli Beam)</h3>", A += "<p>Each frame element has 2 nodes and 12 DOFs: [u<sub>x</sub>, u<sub>y</sub>, u<sub>z</sub>, \u03B8<sub>x</sub>, \u03B8<sub>y</sub>, \u03B8<sub>z</sub>] per node.</p>", A += "<h4>2.1.1 Shape Functions</h4>", A += "<p><b>Axial</b> (linear interpolation):</p>", A += '<div class="rpt-eq">N\u2081(\u03BE) = 1 \u2212 \u03BE &nbsp;&nbsp;&nbsp; N\u2082(\u03BE) = \u03BE &nbsp;&nbsp;&nbsp; where \u03BE = x/L \u2208 [0, 1]</div>', A += "<p><b>Bending</b> (Hermite cubic polynomials):</p>", A += '<table class="rpt-eq-table"><tbody>', A += '<tr><td class="eq-name">H\u2081(\u03BE)</td><td>= 1 \u2212 3\u03BE\xB2 + 2\u03BE\xB3</td><td class="eq-desc">displacement at node i</td></tr>', A += '<tr><td class="eq-name">H\u2082(\u03BE)</td><td>= L\u03BE(1 \u2212 \u03BE)\xB2</td><td class="eq-desc">rotation at node i</td></tr>', A += '<tr><td class="eq-name">H\u2083(\u03BE)</td><td>= 3\u03BE\xB2 \u2212 2\u03BE\xB3</td><td class="eq-desc">displacement at node j</td></tr>', A += '<tr><td class="eq-name">H\u2084(\u03BE)</td><td>= L\u03BE\xB2(\u03BE \u2212 1)</td><td class="eq-desc">rotation at node j</td></tr>', A += "</tbody></table>", A += gl(), A += "<p><b>Torsion</b> (linear): same as axial.</p>", A += "<h4>2.1.2 Strain-Displacement Matrix B</h4>", A += "<p>The B matrix relates nodal displacements to internal strains:</p>", A += '<div class="rpt-eq">\u03B5<sub>axial</sub> = du/dx = (1/L)\xB7[\u22121, 1]\xB7{u<sub>i</sub>, u<sub>j</sub>}</div>', A += '<div class="rpt-eq">\u03BA<sub>bending</sub> = d\xB2v/dx\xB2 = B<sub>b</sub>\xB7{v<sub>i</sub>, \u03B8<sub>i</sub>, v<sub>j</sub>, \u03B8<sub>j</sub>}</div>', A += '<div class="rpt-eq">B<sub>b</sub>(\u03BE) = (1/L\xB2)\xB7[\u22126+12\u03BE, L(\u22124+6\u03BE), 6\u221212\u03BE, L(\u22122+6\u03BE)]</div>', A += '<div class="rpt-eq">\u03C6\u2032<sub>torsion</sub> = d\u03B8<sub>x</sub>/dx = (1/L)\xB7[\u22121, 1]\xB7{\u03B8<sub>xi</sub>, \u03B8<sub>xj</sub>}</div>', A += "<h4>2.1.3 Constitutive Relations D</h4>", A += '<table class="rpt-eq-table"><tbody>', A += '<tr><td class="eq-name">Axial:</td><td>\u03C3 = E\xB7\u03B5</td><td>\u2192 D<sub>axial</sub> = E\xB7A</td></tr>', A += '<tr><td class="eq-name">Bending Z:</td><td>M<sub>z</sub> = EI<sub>z</sub>\xB7\u03BA</td><td>\u2192 D<sub>bz</sub> = E\xB7I<sub>z</sub></td></tr>', A += '<tr><td class="eq-name">Bending Y:</td><td>M<sub>y</sub> = EI<sub>y</sub>\xB7\u03BA</td><td>\u2192 D<sub>by</sub> = E\xB7I<sub>y</sub></td></tr>', A += '<tr><td class="eq-name">Torsion:</td><td>T = GJ\xB7\u03C6\u2032</td><td>\u2192 D<sub>torsion</sub> = G\xB7J</td></tr>', A += "</tbody></table>", A += "<h4>2.1.4 Local Stiffness Matrix K<sub>local</sub></h4>", A += "<p>Obtained by analytical integration:</p>", A += '<div class="rpt-eq rpt-eq-highlight">K<sub>local</sub> = \u222B\u2080\u1D38 B\u1D40\xB7D\xB7B dx</div>', A += "<p>Result for Euler-Bernoulli beam (12\xD712 symmetric):</p>", A += '<div class="rpt-eq-small">', A += "K[0,0] = EA/L &nbsp;&nbsp; K[1,1] = 12EI<sub>z</sub>/L\xB3 &nbsp;&nbsp; K[2,2] = 12EI<sub>y</sub>/L\xB3 &nbsp;&nbsp; K[3,3] = GJ/L<br/>", A += "K[4,4] = 4EI<sub>y</sub>/L &nbsp;&nbsp; K[5,5] = 4EI<sub>z</sub>/L &nbsp;&nbsp; K[1,5] = 6EI<sub>z</sub>/L\xB2 &nbsp;&nbsp; K[2,4] = \u22126EI<sub>y</sub>/L\xB2", A += "</div>", A += "<h4>2.1.5 Transformation Matrix T</h4>", A += "<p>Direction cosines of element axis:</p>", A += '<div class="rpt-eq">l = (x<sub>j</sub>\u2212x<sub>i</sub>)/L &nbsp;&nbsp; m = (y<sub>j</sub>\u2212y<sub>i</sub>)/L &nbsp;&nbsp; n = (z<sub>j</sub>\u2212z<sub>i</sub>)/L &nbsp;&nbsp; D = \u221A(l\xB2+m\xB2)</div>', A += '<div class="rpt-eq">\u03BB = [l, m, n; \u2212m/D, l/D, 0; \u2212ln/D, \u2212mn/D, D] &nbsp;&nbsp; (3\xD73)</div>', A += '<div class="rpt-eq rpt-eq-highlight">T = I\u2084 \u2297 \u03BB &nbsp;&nbsp; (12\xD712 block-diagonal, Kronecker product)</div>', A += "<p>Special case for vertical elements (n = \xB11): \u03BB uses fixed axes.</p>", A += "<h4>2.1.6 Global Stiffness Matrix</h4>", A += '<div class="rpt-eq rpt-eq-highlight">K<sub>global</sub> = T\u1D40 \xB7 K<sub>local</sub> \xB7 T</div>'), A += "<h2>3. Numerical Results per Element</h2>", A += "<p>For each element, we compute K<sub>local</sub>, T, and K<sub>global</sub> = T\u1D40\xB7K\xB7T with the actual properties:</p>";
    for (let ie = 0; ie < J; ie++) {
      const ne = O[ie], _ = ne.map((lt) => g[lt]);
      if (!(ne.length === 2)) continue;
      const Y = On(vn(_[1], _[0])), pe = ((_a = M.elasticities) == null ? void 0 : _a.get(ie)) ?? 0, Me = ((_b = M.areas) == null ? void 0 : _b.get(ie)) ?? 0, ze = ((_c = M.momentsOfInertiaZ) == null ? void 0 : _c.get(ie)) ?? 0, Ue = ((_d = M.momentsOfInertiaY) == null ? void 0 : _d.get(ie)) ?? 0, ve = ((_e = M.shearModuli) == null ? void 0 : _e.get(ie)) ?? 0, He = ((_f = M.torsionalConstants) == null ? void 0 : _f.get(ie)) ?? 0;
      let je = null, ge = null, Se = null;
      try {
        je = yo(_, M, ie), ge = $o(_), Se = sn(ss(ge), sn(je, ge));
      } catch {
        continue;
      }
      const Ae = vn(_[1], _[0]), Ve = Ae[0] / Y, at = Ae[1] / Y, Xe = Ae[2] / Y;
      A += '<div class="rpt-elem-block">', A += `<h3 class="rpt-elem-title" data-toggle="elem${ie}">\u25B6 Element ${ie} \u2014 Nodes ${ne[0]} \u2192 ${ne[1]}, L = ${st(Y)}</h3>`, A += `<div id="rpt-elem${ie}" class="rpt-elem-body" style="display:none">`, A += "<h4>Properties (numerical substitution)</h4>", A += '<div class="rpt-eq-small">', A += `E = ${st(pe)} &nbsp;&nbsp; A = ${st(Me)} &nbsp;&nbsp; I<sub>z</sub> = ${st(ze)} &nbsp;&nbsp; I<sub>y</sub> = ${st(Ue)} &nbsp;&nbsp; G = ${st(ve)} &nbsp;&nbsp; J = ${st(He)}<br/>`, A += `EA/L = ${st(pe)}\xB7${st(Me)}/${st(Y)} = <b>${st(pe * Me / Y)}</b><br/>`, A += `12EI<sub>z</sub>/L\xB3 = 12\xB7${st(pe)}\xB7${st(ze)}/${st(Y)}\xB3 = <b>${st(12 * pe * ze / Y ** 3)}</b><br/>`, A += `12EI<sub>y</sub>/L\xB3 = 12\xB7${st(pe)}\xB7${st(Ue)}/${st(Y)}\xB3 = <b>${st(12 * pe * Ue / Y ** 3)}</b><br/>`, A += `GJ/L = ${st(ve)}\xB7${st(He)}/${st(Y)} = <b>${st(ve * He / Y)}</b>`, A += "</div>", A += "<h4>Direction cosines</h4>", A += `<div class="rpt-eq-small">l = ${ho(Ve)}, m = ${ho(at)}, n = ${ho(Xe)}, D = ${ho(Math.sqrt(Ve ** 2 + at ** 2))}</div>`, A += "<h4>K<sub>local</sub> (12\xD712)</h4>", A += Zo(je, 12), A += "<h4>T \u2014 Transformation (12\xD712)</h4>", A += Zo(ge, 12), A += "<h4>K<sub>global</sub> = T\u1D40 \xB7 K<sub>local</sub> \xB7 T</h4>", A += Zo(Se, 12), A += "<h4>Assembly</h4>", A += `<div class="rpt-eq-small">Global DOFs: node ${ne[0]} \u2192 [${ne[0] * 6}..${ne[0] * 6 + 5}], node ${ne[1]} \u2192 [${ne[1] * 6}..${ne[1] * 6 + 5}]</div>`, A += "</div></div>";
    }
    A += "<h2>4. Global Assembly</h2>", A += `<div class="rpt-eq rpt-eq-highlight">K<sub>total</sub> = \u03A3<sub>e=0</sub><sup>${J - 1}</sup> (T<sub>e</sub>\u1D40 \xB7 k<sub>e</sub> \xB7 T<sub>e</sub>)</div>`, A += "<p>Each element contributes its K<sub>global</sub> to the positions determined by its node DOF indices.</p>", A += hl(O, g.length), A += "<h2>5. Boundary Conditions</h2>";
    const Q = [
      "u<sub>x</sub>",
      "u<sub>y</sub>",
      "u<sub>z</sub>",
      "\u03B8<sub>x</sub>",
      "\u03B8<sub>y</sub>",
      "\u03B8<sub>z</sub>"
    ], $e = [];
    if (A += "<h3>5.1 Supports (fixed DOFs)</h3>", V.supports && V.supports.size > 0) {
      A += '<table class="rpt-data"><thead><tr><th>Node</th>';
      for (const ie of Q) A += `<th>${ie}</th>`;
      A += "</tr></thead><tbody>", V.supports.forEach((ie, ne) => {
        A += `<tr><td>${ne}</td>`, ie.forEach((_, D) => {
          _ && $e.push(ne * 6 + D), A += `<td class="${_ ? "fixed" : ""}">${_ ? "Fixed" : "Free"}</td>`;
        }), A += "</tr>";
      }), A += "</tbody></table>";
    }
    if (A += `<div class="rpt-eq-small">Fixed DOFs: [${$e.join(", ")}] \u2192 ${$e.length} constraints<br/>`, A += `Free DOFs: ${X} \u2212 ${$e.length} = <b>${X - $e.length}</b></div>`, A += "<h3>5.2 Applied Loads</h3>", V.loads && V.loads.size > 0) {
      A += '<table class="rpt-data"><thead><tr><th>Node</th>';
      const ie = [
        "F<sub>x</sub>",
        "F<sub>y</sub>",
        "F<sub>z</sub>",
        "M<sub>x</sub>",
        "M<sub>y</sub>",
        "M<sub>z</sub>"
      ];
      for (const ne of ie) A += `<th>${ne}</th>`;
      A += "</tr></thead><tbody>", V.loads.forEach((ne, _) => {
        A += `<tr><td>${_}</td>`, ne.forEach((D) => {
          const Y = Math.abs(D) > 1e-10;
          A += `<td class="${Y ? "nz" : ""}">${Y ? st(D) : "0"}</td>`;
        }), A += "</tr>";
      }), A += "</tbody></table>";
    }
    if (A += "<h2>6. Solution</h2>", A += "<p>After removing fixed DOFs, the reduced system is:</p>", A += '<div class="rpt-eq rpt-eq-highlight">K<sub>free</sub> \xB7 u<sub>free</sub> = F<sub>free</sub></div>', A += "<p>Solved using LU decomposition with partial pivoting (sparse matrix).</p>", A += "<h3>6.1 Nodal Displacements</h3>", H == null ? void 0 : H.deformations) {
      A += '<table class="rpt-data"><thead><tr><th>Node</th>';
      for (const ie of Q) A += `<th>${ie}</th>`;
      A += "</tr></thead><tbody>", H.deformations.forEach((ie, ne) => {
        A += `<tr><td>${ne}</td>`, ie.forEach((_) => {
          const D = Math.abs(_) > 1e-10;
          A += `<td class="${D ? "nz" : ""}">${st(_, 6)}</td>`;
        }), A += "</tr>";
      }), A += "</tbody></table>";
    }
    if (A += "<h3>6.2 Reactions</h3>", A += '<div class="rpt-eq">R = K<sub>total</sub> \xB7 u (extract at fixed DOFs)</div>', H == null ? void 0 : H.reactions) {
      A += '<table class="rpt-data"><thead><tr><th>Node</th>';
      for (const ie of Q) A += `<th>${ie}</th>`;
      A += "</tr></thead><tbody>", H.reactions.forEach((ie, ne) => {
        A += `<tr><td>${ne}</td>`, ie.forEach((_) => {
          const D = Math.abs(_) > 1e-10;
          A += `<td class="${D ? "nz-react" : ""}">${D ? st(_, 4) : "0"}</td>`;
        }), A += "</tr>";
      }), A += "</tbody></table>";
    }
    if (A += "<h2>7. Internal Forces</h2>", A += "<p>For each element, transform global displacements to local and multiply by K<sub>local</sub>:</p>", A += '<div class="rpt-eq">u<sub>local</sub> = T \xB7 u<sub>global</sub></div>', A += '<div class="rpt-eq rpt-eq-highlight">f<sub>local</sub> = K<sub>local</sub> \xB7 u<sub>local</sub></div>', H == null ? void 0 : H.deformations) {
      const ie = [
        "N",
        "V<sub>y</sub>",
        "V<sub>z</sub>",
        "M<sub>x</sub>",
        "M<sub>y</sub>",
        "M<sub>z</sub>"
      ];
      A += '<table class="rpt-data"><thead><tr><th>Elem</th><th>Nodes</th>';
      for (const ne of ie) A += `<th>${ne}<sub>i</sub></th>`;
      for (const ne of ie) A += `<th>${ne}<sub>j</sub></th>`;
      A += "</tr></thead><tbody>";
      for (let ne = 0; ne < J; ne++) {
        const _ = O[ne];
        if (_.length !== 2) continue;
        const D = _.map((Y) => g[Y]);
        try {
          const Y = yo(D, M, ne), pe = $o(D), Me = [];
          for (const ve of _) {
            const He = ((_g = H.deformations) == null ? void 0 : _g.get(ve)) || [
              0,
              0,
              0,
              0,
              0,
              0
            ];
            Me.push(...He);
          }
          const ze = sn(pe, Me), Ue = sn(Y, ze);
          A += `<tr><td>${ne}</td><td>${_.join("\u2192")}</td>`;
          for (let ve = 0; ve < 12; ve++) {
            const He = Math.abs(Ue[ve]) > 1e-10;
            A += `<td class="${He ? "nz" : ""}">${st(Ue[ve], 2)}</td>`;
          }
          A += "</tr>";
        } catch {
        }
      }
      A += "</tbody></table>";
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
    return he.innerHTML = ce + A, (_h = he.querySelector("#rpt-close")) == null ? void 0 : _h.addEventListener("click", () => he.remove()), he.querySelectorAll("[data-toggle]").forEach((ie) => {
      ie.addEventListener("click", () => {
        const ne = ie.dataset.toggle, _ = he.querySelector(`#rpt-${ne}`);
        if (_) {
          const D = _.style.display !== "none";
          _.style.display = D ? "none" : "", ie.textContent = ie.textContent.replace(/^[▼▶]/, D ? "\u25B6" : "\u25BC");
        }
      });
    }), he;
  }
  function st(e, g = 2) {
    return Math.abs(e) < 1e-10 ? "0" : Math.abs(e) >= 1e7 || Math.abs(e) < 0.01 && e !== 0 ? e.toExponential(g) : e.toFixed(g);
  }
  function ho(e) {
    return Math.abs(e) < 1e-10 ? "0" : e.toFixed(4);
  }
  function Zo(e, g) {
    var _a;
    const O = Math.min(g, 12);
    let M = '<div style="overflow-x:auto"><table class="rpt-mtx">';
    for (let V = 0; V < O; V++) {
      M += "<tr>";
      for (let H = 0; H < O; H++) {
        const X = ((_a = e[V]) == null ? void 0 : _a[H]) ?? 0, J = Math.abs(X) < 1e-10;
        M += `<td class="${J ? "z" : ""} ${V === H && !J ? "diag" : ""}">${J ? "0" : bl(X)}</td>`;
      }
      M += "</tr>";
    }
    return M += "</table>", g > O && (M += `<div style="color:#888;font-size:9pt">(showing ${O}\xD7${O} of ${g}\xD7${g})</div>`), M += "</div>", M;
  }
  function bl(e) {
    return Math.abs(e) >= 1e6 || Math.abs(e) < 0.01 && e !== 0 ? e.toExponential(1) : Math.abs(e) >= 100 ? e.toFixed(0) : e.toFixed(2);
  }
  function gl() {
    const X = [
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
    let J = '<svg viewBox="0 0 600 180" style="width:100%;max-width:600px;border:1px solid #ddd;border-radius:4px;margin:8px 0;background:#fafafa">';
    J += `<line x1="30" y1="${180 / 2}" x2="570" y2="${180 / 2}" stroke="#ccc" stroke-width="1"/>`, J += '<line x1="30" y1="20" x2="30" y2="160" stroke="#ccc" stroke-width="1"/>', J += `<text x="${600 / 2}" y="175" fill="#888" font-size="10" text-anchor="middle" font-family="sans-serif">\u03BE (0 \u2192 1)</text>`, J += `<text x="25" y="${180 / 2 - 60 - 5}" fill="#888" font-size="9" text-anchor="end" font-family="sans-serif">1</text>`, J += `<text x="25" y="${180 / 2 + 4}" fill="#888" font-size="9" text-anchor="end" font-family="sans-serif">0</text>`;
    for (const j of X) {
      let W = "";
      for (let $e = 0; $e <= 80; $e++) {
        const ce = $e / 80, ie = 30 + ce * 540, ne = 180 / 2 - j.fn(ce) * 60;
        W += ($e === 0 ? "M" : "L") + `${ie.toFixed(1)},${ne.toFixed(1)}`;
      }
      J += `<path d="${W}" fill="none" stroke="${j.color}" stroke-width="2.5"/>`;
      const he = 0.75, A = 30 + he * 540 + 8, Q = 180 / 2 - j.fn(he) * 60 - 6;
      J += `<text x="${A}" y="${Q}" fill="${j.color}" font-size="11" font-weight="bold" font-family="sans-serif">${j.name}</text>`;
    }
    return J += "</svg>", J;
  }
  function hl(e, g) {
    const O = g * 6, M = Math.min(O, 30);
    let V = "<p>Assembly contribution map (number = how many elements contribute to each K<sub>total</sub> entry):</p>";
    V += '<div style="overflow-x:auto"><table class="rpt-assembly-map">', V += "<tr><td></td>";
    for (let X = 0; X < M; X++) V += `<td style="color:#003366;font-weight:bold;font-size:7px">${X}</td>`;
    V += "</tr>";
    const H = Array.from({
      length: M
    }, () => Array(M).fill(0));
    for (let X = 0; X < e.length; X++) {
      const J = e[X].map((j) => j * 6);
      for (const j of J) for (const W of J) for (let he = 0; he < 6; he++) for (let A = 0; A < 6; A++) {
        const Q = j + he, $e = W + A;
        Q < M && $e < M && H[Q][$e]++;
      }
    }
    for (let X = 0; X < M; X++) {
      V += `<tr><td style="color:#003366;font-weight:bold;font-size:7px">${X}</td>`;
      for (let J = 0; J < M; J++) {
        const j = H[X][J], W = j === 0 ? "#fff" : j === 1 ? "#e8f0fe" : j === 2 ? "#c6dcf5" : "#a0c4e8", he = j === 0 ? "" : j.toString();
        V += `<td style="background:${W};color:#003366">${he}</td>`;
      }
      V += "</tr>";
    }
    return V += "</table></div>", O > M && (V += `<div style="color:#888;font-size:9pt">(showing ${M}\xD7${M} of ${O}\xD7${O})</div>`), V;
  }
  let Qo = false;
  function xl(e) {
    if (Qo || window.katex) {
      Qo = true, e();
      return;
    }
    const g = document.createElement("link");
    g.rel = "stylesheet", g.href = "https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css", document.head.appendChild(g);
    const O = document.createElement("script");
    O.src = "https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.js", O.onload = () => {
      Qo = true, e();
    }, document.head.appendChild(O);
  }
  function la(e, g = false) {
    try {
      if (window.katex) return window.katex.renderToString(e, {
        displayMode: g,
        throwOnError: false
      });
    } catch {
    }
    return `<code class="er-tex-fallback">${e}</code>`;
  }
  function vl(e, g, O, M, V, H) {
    var _a, _b, _c, _d, _e, _f;
    const X = O[e], J = X.map((ge) => g[ge]), j = X.length === 2, W = j ? On(vn(J[1], J[0])) : 0, he = ((_a = M.elasticities) == null ? void 0 : _a.get(e)) ?? 0, A = ((_b = M.areas) == null ? void 0 : _b.get(e)) ?? 0, Q = ((_c = M.momentsOfInertiaZ) == null ? void 0 : _c.get(e)) ?? 0, $e = ((_d = M.momentsOfInertiaY) == null ? void 0 : _d.get(e)) ?? 0, ce = ((_e = M.shearModuli) == null ? void 0 : _e.get(e)) ?? 0, ie = ((_f = M.torsionalConstants) == null ? void 0 : _f.get(e)) ?? 0;
    let ne = null, _ = null, D = null;
    try {
      ne = yo(J, M, e), _ = $o(J), D = sn(ss(_), sn(ne, _));
    } catch {
    }
    const Y = j ? vn(J[1], J[0]) : [
      0,
      0,
      0
    ], pe = W > 0 ? Y[0] / W : 0, Me = W > 0 ? Y[1] / W : 0, ze = W > 0 ? Y[2] / W : 0, Ue = Math.sqrt(pe ** 2 + Me ** 2), ve = [];
    if ((V == null ? void 0 : V.deformations) && j) for (const ge of X) {
      const Se = V.deformations.get(ge) || [
        0,
        0,
        0,
        0,
        0,
        0
      ];
      ve.push(...Se);
    }
    let He = [], je = [];
    if (ve.length === 12 && _ && ne) {
      try {
        He = sn(_, ve);
      } catch {
        He = Array(12).fill(0);
      }
      try {
        je = sn(ne, He);
      } catch {
        je = Array(12).fill(0);
      }
    }
    return {
      elemIdx: e,
      elem: X,
      elmNodes: J,
      isFrame: j,
      L: W,
      E: he,
      A,
      Iz: Q,
      Iy: $e,
      G: ce,
      J: ie,
      kLocal: ne,
      T: _,
      kGlobal: D,
      l: pe,
      m: Me,
      n: ze,
      D: Ue,
      uGlobal: ve,
      uLocal: He,
      fLocal: je,
      dOut: V,
      aOut: H,
      totalNodes: g.length
    };
  }
  function yl(e, g, O, M, V, H) {
    var _a, _b;
    const X = vl(e, g, O, M, V, H), J = document.createElement("div");
    return J.className = "er-panel", J.innerHTML = El + `
    <div class="er-header">
      <span class="er-badge">Element ${e}</span>
      <span class="er-type">${X.isFrame ? "Frame" : "Shell"} \u2014 Nodes ${X.elem.join(" \u2192 ")} \u2014 L = ${Je(X.L)}</span>
      <button class="er-fullscreen" id="er-fullscreen" title="Pantalla completa">\u26F6</button>
      <button class="er-close" id="er-close">\u2715</button>
    </div>
    <div class="er-tabs">
      <button class="er-tab active" data-tab="tabla">Tabla</button>
      <button class="er-tab" data-tab="math">Matematica Explicada</button>
      <button class="er-tab" data-tab="resumen">Resumen</button>
    </div>
    <div class="er-body" id="er-body-tabla">${$l(X)}</div>
    <div class="er-body" id="er-body-math" style="display:none">${ra(X)}</div>
    <div class="er-body" id="er-body-resumen" style="display:none">${Ml(X)}</div>
  `, J.querySelectorAll(".er-tab").forEach((j) => {
      j.addEventListener("click", () => {
        J.querySelectorAll(".er-tab").forEach((he) => he.classList.remove("active")), j.classList.add("active");
        const W = j.dataset.tab;
        J.querySelectorAll(".er-body").forEach((he) => he.style.display = "none"), J.querySelector(`#er-body-${W}`).style.display = "";
      });
    }), (_a = J.querySelector("#er-close")) == null ? void 0 : _a.addEventListener("click", () => J.remove()), (_b = J.querySelector("#er-fullscreen")) == null ? void 0 : _b.addEventListener("click", () => {
      const j = J.classList.toggle("er-fullscreen-mode"), W = J.querySelector("#er-fullscreen");
      W && (W.textContent = j ? "\u22A1" : "\u26F6");
    }), setTimeout(() => {
      const j = J.querySelector("#er-sf-canvas");
      j && es(j);
      const W = J.querySelector("#er-sf-canvas-math");
      W && es(W);
    }, 50), xl(() => {
      const j = J.querySelector("#er-body-math");
      j && (j.innerHTML = ra(X)), setTimeout(() => {
        const W = J.querySelector("#er-sf-canvas-math");
        W && es(W);
      }, 50), J.querySelectorAll(".er-deriv-header").forEach((W) => {
        W.addEventListener("click", () => {
          const he = W.dataset.toggle, A = J.querySelector(`#er-${he}`);
          A && (A.style.display = A.style.display === "none" ? "" : "none");
        });
      });
    }), J;
  }
  function $l(e) {
    let g = "";
    if (g += '<div class="er-section-title">1. Propiedades</div>', g += '<table class="er-props">', g += `<tr><td>E</td><td>${Je(e.E)}</td><td>A</td><td>${Je(e.A)}</td></tr>`, g += `<tr><td>I<sub>z</sub></td><td>${Je(e.Iz)}</td><td>I<sub>y</sub></td><td>${Je(e.Iy)}</td></tr>`, g += `<tr><td>G</td><td>${Je(e.G)}</td><td>J</td><td>${Je(e.J)}</td></tr>`, g += "</table>", e.kLocal && (g += `<div class="er-section-title">2. K<sub>local</sub> (${e.kLocal.length}\xD7${e.kLocal.length})</div>`, g += lo(e.kLocal)), e.T && (g += '<div class="er-section-title">3. T \u2014 Transformaci\xF3n</div>', g += lo(e.T)), e.kGlobal && (g += '<div class="er-section-title">4. K<sub>global</sub> = T<sup>T</sup>\xB7K\xB7T</div>', g += lo(e.kGlobal)), g += '<div class="er-section-title">5. Desplazamientos</div>', e.uGlobal.length > 0) {
      const O = [
        "u<sub>x</sub>",
        "u<sub>y</sub>",
        "u<sub>z</sub>",
        "\u03B8<sub>x</sub>",
        "\u03B8<sub>y</sub>",
        "\u03B8<sub>z</sub>"
      ];
      for (let M = 0; M < e.elem.length; M++) {
        g += `<div class="er-sub">Nodo ${e.elem[M]}: `;
        for (let V = 0; V < 6; V++) {
          const H = e.uGlobal[M * 6 + V];
          g += `${O[V]}=<span class="${Math.abs(H) > 1e-10 ? "nz" : ""}">${Je(H, 6)}</span> `;
        }
        g += "</div>";
      }
    } else g += '<div class="er-sub">Sin an\xE1lisis</div>';
    if (g += '<div class="er-section-title">6. Fuerzas internas</div>', e.fLocal.length > 0 && e.fLocal.some((O) => O !== 0)) {
      const O = [
        "N",
        "V<sub>y</sub>",
        "V<sub>z</sub>",
        "M<sub>x</sub>",
        "M<sub>y</sub>",
        "M<sub>z</sub>"
      ];
      g += '<table class="er-forces"><tr><th></th>';
      for (const M of O) g += `<th>${M}</th>`;
      g += "</tr>", g += "<tr><td>Nodo i</td>";
      for (let M = 0; M < 6; M++) g += `<td class="${Math.abs(e.fLocal[M]) > 1e-10 ? "nz" : ""}">${Je(e.fLocal[M], 3)}</td>`;
      g += "</tr><tr><td>Nodo j</td>";
      for (let M = 6; M < 12; M++) g += `<td class="${Math.abs(e.fLocal[M]) > 1e-10 ? "nz" : ""}">${Je(e.fLocal[M], 3)}</td>`;
      g += "</tr></table>";
    } else g += '<div class="er-sub">Sin an\xE1lisis</div>';
    return g;
  }
  function ra(e) {
    if (!e.isFrame) return '<div class="er-sub">Shell element math: coming soon</div>';
    let g = "";
    const O = (he) => la(he), M = (he) => la(he, true);
    g += '<div class="er-section-title">1. Geometria del elemento</div>', g += "<p>Viga Euler-Bernoulli con 2 nodos y 6 GDL por nodo:</p>", g += `<div class="er-eq">${M("\\text{DOFs} = [u_x,\\, u_y,\\, u_z,\\, \\theta_x,\\, \\theta_y,\\, \\theta_z] \\quad \\Rightarrow \\quad 12 \\text{ GDL totales}")}</div>`, g += '<div class="er-eq-num">', g += `${O("\\text{Nodo } i")} = (${e.elmNodes[0].map((he) => Je(he)).join(", ")})<br/>`, g += `${O("\\text{Nodo } j")} = (${e.elmNodes[1].map((he) => Je(he)).join(", ")})<br/>`, g += `${M(`L = \\sqrt{(x_j - x_i)^2 + (y_j - y_i)^2 + (z_j - z_i)^2} = \\mathbf{${Je(e.L)}}`)}`, g += "</div>", g += '<div class="er-section-title">2. Funciones de forma</div>', g += "<p>La viga usa <b>interpolacion lineal</b> para axial/torsion y <b>polinomios cubicos de Hermite</b> para flexion.</p>", g += '<div class="er-subsec">2.1 Axial y Torsion (lineal)</div>', g += `<div class="er-eq">${M("N_1(\\xi) = 1 - \\xi \\qquad N_2(\\xi) = \\xi \\qquad \\text{donde } \\xi = \\frac{x}{L} \\in [0,1]")}</div>`, g += "<p>Primera derivada:</p>", g += `<div class="er-eq">${M("\\frac{dN_1}{d\\xi} = -1 \\qquad \\frac{dN_2}{d\\xi} = 1")}</div>`, g += '<div class="er-subsec">2.2 Flexion (Hermite cubicos)</div>', g += `<p>Las funciones de Hermite garantizan continuidad ${O("C^1")} (desplazamiento y pendiente continuos):</p>`, g += `<div class="er-eq">${M("H_1(\\xi) = 1 - 3\\xi^2 + 2\\xi^3 \\qquad \\text{(desplazamiento nodo } i\\text{)}")}</div>`, g += `<div class="er-eq">${M("H_2(\\xi) = L\\,\\xi\\,(1-\\xi)^2 \\qquad \\text{(rotacion nodo } i\\text{)}")}</div>`, g += `<div class="er-eq">${M("H_3(\\xi) = 3\\xi^2 - 2\\xi^3 \\qquad \\text{(desplazamiento nodo } j\\text{)}")}</div>`, g += `<div class="er-eq">${M("H_4(\\xi) = L\\,\\xi^2(\\xi - 1) \\qquad \\text{(rotacion nodo } j\\text{)}")}</div>`, g += `<div class="er-subsec">Derivadas segunda (curvatura ${O("\\kappa = \\frac{d^2v}{dx^2}")}):</div>`, g += `<div class="er-eq">${M("H_1'' = \\frac{-6}{L^2}(1-2\\xi) \\qquad H_2'' = \\frac{-2}{L}(2-3\\xi)")}</div>`, g += `<div class="er-eq">${M("H_3'' = \\frac{6}{L^2}(1-2\\xi) \\qquad H_4'' = \\frac{-2}{L}(1-3\\xi)")}</div>`, g += '<canvas id="er-sf-canvas-math" width="500" height="250" style="width:100%;border:1px solid var(--fem-border);border-radius:4px;margin:8px 0;"></canvas>', g += '<div class="er-section-title">3. Matriz B (strain-displacement)</div>', g += "<p>La matriz B relaciona desplazamientos nodales con deformaciones internas:</p>", g += `<div class="er-eq">${M("\\boldsymbol{\\varepsilon} = \\mathbf{B} \\cdot \\mathbf{u}")}</div>`, g += '<div class="er-subsec">3.1 Deformacion axial</div>', g += `<div class="er-eq">${M("\\varepsilon_{axial} = \\frac{du}{dx} = \\frac{1}{L} \\begin{bmatrix} -1 & 1 \\end{bmatrix} \\begin{Bmatrix} u_i \\\\ u_j \\end{Bmatrix}")}</div>`, g += `<div class="er-subsec">3.2 Curvatura por flexion (plano XY \u2192 ${O("I_z")})</div>`, g += `<div class="er-eq">${M("\\kappa_z = \\frac{d^2 v}{dx^2} = \\mathbf{B}_{bz} \\cdot \\begin{Bmatrix} v_i \\\\ \\theta_{zi} \\\\ v_j \\\\ \\theta_{zj} \\end{Bmatrix}")}</div>`, g += `<div class="er-eq">${M("\\mathbf{B}_{bz}(\\xi) = \\frac{1}{L^2} \\begin{bmatrix} H_1'' & H_2'' & H_3'' & H_4'' \\end{bmatrix}")}</div>`, g += `<div class="er-subsec">3.3 Curvatura (plano XZ \u2192 ${O("I_y")})</div>`, g += `<div class="er-eq">${M("\\kappa_y = \\frac{d^2 w}{dx^2} = \\mathbf{B}_{by} \\cdot \\begin{Bmatrix} w_i \\\\ \\theta_{yi} \\\\ w_j \\\\ \\theta_{yj} \\end{Bmatrix}")}</div>`, g += '<div class="er-subsec">3.4 Torsion</div>', g += `<div class="er-eq">${M("\\phi' = \\frac{d\\theta_x}{dx} = \\frac{1}{L} \\begin{bmatrix} -1 & 1 \\end{bmatrix} \\begin{Bmatrix} \\theta_{xi} \\\\ \\theta_{xj} \\end{Bmatrix}")}</div>`, g += '<div class="er-section-title">4. Relaciones constitutivas D</div>', g += "<p>Cada modo de deformacion tiene su rigidez material:</p>", g += `<div class="er-eq">${M(`\\text{Axial: } \\sigma = E \\cdot \\varepsilon \\;\\Rightarrow\\; D_{ax} = EA = ${Je(e.E)} \\times ${Je(e.A)} = \\mathbf{${Je(e.E * e.A)}}`)}</div>`, g += `<div class="er-eq">${M(`\\text{Flex Z: } M_z = EI_z \\cdot \\kappa \\;\\Rightarrow\\; D_{bz} = EI_z = ${Je(e.E)} \\times ${Je(e.Iz)} = \\mathbf{${Je(e.E * e.Iz)}}`)}</div>`, g += `<div class="er-eq">${M(`\\text{Flex Y: } M_y = EI_y \\cdot \\kappa \\;\\Rightarrow\\; D_{by} = EI_y = ${Je(e.E)} \\times ${Je(e.Iy)} = \\mathbf{${Je(e.E * e.Iy)}}`)}</div>`, g += `<div class="er-eq">${M(`\\text{Torsion: } T = GJ \\cdot \\phi' \\;\\Rightarrow\\; D_t = GJ = ${Je(e.G)} \\times ${Je(e.J)} = \\mathbf{${Je(e.G * e.J)}}`)}</div>`, g += `<div class="er-section-title">5. Integracion \u2192 ${O("\\mathbf{K}_{local}")}</div>`, g += "<p>La matriz de rigidez local se obtiene integrando analiticamente:</p>", g += `<div class="er-eq er-eq-main">${M("\\mathbf{K}_{local} = \\int_0^L \\mathbf{B}^T \\cdot \\mathbf{D} \\cdot \\mathbf{B} \\; dx")}</div>`;
    const V = e.E * e.A / e.L, H = e.E * e.Iz / e.L ** 3, X = e.E * e.Iy / e.L ** 3, J = e.G * e.J / e.L;
    if (g += '<div class="er-deriv-block">', g += '<div class="er-deriv-header" data-toggle="deriv-axial">\u{1F4D6} K[0,0] = EA/L \u2014 <i>click para ver derivacion completa</i></div>', g += '<div id="er-deriv-axial" class="er-deriv-body" style="display:none">', g += "<p><b>Paso 1:</b> Funcion de forma axial</p>", g += `<div class="er-eq">${M("u(\\xi) = N_1 \\cdot u_i + N_2 \\cdot u_j = (1-\\xi)\\,u_i + \\xi\\,u_j")}</div>`, g += "<p><b>Paso 2:</b> Derivada (deformacion)</p>", g += `<div class="er-eq">${M("\\varepsilon = \\frac{du}{dx} = \\frac{1}{L}\\frac{du}{d\\xi} = \\frac{1}{L}(-u_i + u_j)")}</div>`, g += `<div class="er-eq">${M("\\mathbf{B}_{ax} = \\frac{1}{L}\\begin{bmatrix} -1 & 1 \\end{bmatrix}")}</div>`, g += `<p><b>Paso 3:</b> Integracion ${O("K = \\int_0^L B^T \\cdot EA \\cdot B \\; dx")}</p>`, g += `<div class="er-eq">${M("K_{ax} = \\int_0^L \\frac{1}{L}\\begin{bmatrix}-1\\\\1\\end{bmatrix} \\cdot EA \\cdot \\frac{1}{L}\\begin{bmatrix}-1 & 1\\end{bmatrix} dx")}</div>`, g += `<div class="er-eq">${M("= \\frac{EA}{L^2} \\begin{bmatrix}1 & -1\\\\-1 & 1\\end{bmatrix} \\int_0^L dx = \\frac{EA}{L^2} \\cdot L \\begin{bmatrix}1 & -1\\\\-1 & 1\\end{bmatrix}")}</div>`, g += `<div class="er-eq er-eq-main">${M(`K_{ax} = \\frac{EA}{L}\\begin{bmatrix}1 & -1\\\\-1 & 1\\end{bmatrix} = \\frac{${Je(e.E)}\\times${Je(e.A)}}{${Je(e.L)}}\\begin{bmatrix}1 & -1\\\\-1 & 1\\end{bmatrix}`)}</div>`, g += `<div class="er-eq">${M(`K[0,0] = K[6,6] = \\frac{EA}{L} = \\mathbf{${Je(V)}}`)}</div>`, g += "</div></div>", g += '<div class="er-deriv-block">', g += '<div class="er-deriv-header" data-toggle="deriv-bend">\u{1F4D6} K[1,1] = 12EI<sub>z</sub>/L\xB3 \u2014 <i>click para ver derivacion completa</i></div>', g += '<div id="er-deriv-bend" class="er-deriv-body" style="display:none">', g += `<p><b>Paso 1:</b> Funcion de forma Hermite para ${O("v(\\xi)")}</p>`, g += `<div class="er-eq">${M("v(\\xi) = H_1 v_i + H_2 \\theta_i + H_3 v_j + H_4 \\theta_j")}</div>`, g += "<p><b>Paso 2:</b> Segunda derivada (curvatura)</p>", g += `<div class="er-eq">${M("\\kappa = \\frac{d^2v}{dx^2} = \\frac{1}{L^2}\\frac{d^2v}{d\\xi^2}")}</div>`, g += `<div class="er-eq">${M("H_1'' = -6+12\\xi, \\quad H_2'' = L(-4+6\\xi), \\quad H_3'' = 6-12\\xi, \\quad H_4'' = L(-2+6\\xi)")}</div>`, g += `<div class="er-eq">${M("\\mathbf{B}_b = \\frac{1}{L^2}\\begin{bmatrix} H_1'' & H_2'' & H_3'' & H_4'' \\end{bmatrix}")}</div>`, g += `<p><b>Paso 3:</b> Integracion para K[1,1] (termino ${O("v_i \\cdot v_i")})</p>`, g += `<div class="er-eq">${M("K[1,1] = \\int_0^L \\frac{(H_1'')^2}{L^4} \\cdot EI_z \\; dx = \\frac{EI_z}{L^4} \\int_0^L (-6+12\\xi)^2 \\; dx")}</div>`, g += `<p>Expandimos: ${O("(-6+12\\xi)^2 = 36 - 144\\xi + 144\\xi^2")}</p>`, g += `<div class="er-eq">${M("\\int_0^L (36-144\\xi+144\\xi^2)\\,dx = 36L - 72L + 48L = 12L")}</div>`, g += `<div class="er-eq er-eq-main">${M(`K[1,1] = \\frac{EI_z}{L^4} \\cdot 12L = \\frac{12EI_z}{L^3} = \\frac{12 \\times ${Je(e.E)} \\times ${Je(e.Iz)}}{${Je(e.L)}^3} = \\mathbf{${Je(12 * H)}}`)}</div>`, g += "</div></div>", g += '<div class="er-deriv-block">', g += '<div class="er-deriv-header" data-toggle="deriv-tors">\u{1F4D6} K[3,3] = GJ/L \u2014 <i>click para ver derivacion</i></div>', g += '<div id="er-deriv-tors" class="er-deriv-body" style="display:none">', g += `<p>Mismo proceso que axial pero con ${O("\\theta_x")} y ${O("GJ")}:</p>`, g += `<div class="er-eq">${M(`K_{torsion} = \\frac{GJ}{L}\\begin{bmatrix}1 & -1\\\\-1 & 1\\end{bmatrix} = \\frac{${Je(e.G)}\\times${Je(e.J)}}{${Je(e.L)}} = \\mathbf{${Je(J)}}`)}</div>`, g += "</div></div>", g += '<div class="er-deriv-block">', g += '<div class="er-deriv-header" data-toggle="deriv-coup">\u{1F4D6} K[1,5] = 6EI<sub>z</sub>/L\xB2 \u2014 <i>acoplamiento corte-momento</i></div>', g += '<div id="er-deriv-coup" class="er-deriv-body" style="display:none">', g += `<p>Termino cruzado ${O("v_i \\cdot \\theta_{zi}")} (acoplamiento corte-momento):</p>`, g += `<div class="er-eq">${M("K[1,5] = \\frac{EI_z}{L^4} \\int_0^L H_1'' \\cdot H_2'' \\; dx")}</div>`, g += `<div class="er-eq">${M("= \\frac{EI_z}{L^4} \\int_0^L (-6+12\\xi) \\cdot L(-4+6\\xi) \\; dx")}</div>`, g += `<div class="er-eq">${M("= \\frac{EI_z}{L^3} \\int_0^L (24-36\\xi-48\\xi+72\\xi^2) \\; dx = \\frac{EI_z}{L^3} \\cdot 6L")}</div>`, g += `<div class="er-eq er-eq-main">${M(`K[1,5] = \\frac{6EI_z}{L^2} = \\mathbf{${Je(6 * e.E * e.Iz / e.L ** 2)}}`)}</div>`, g += "</div></div>", g += '<div class="er-subsec">Resumen de coeficientes:</div>', g += `<div class="er-eq">${M(`\\frac{EA}{L} = \\mathbf{${Je(V)}} \\qquad \\frac{12EI_z}{L^3} = \\mathbf{${Je(12 * H)}} \\qquad \\frac{12EI_y}{L^3} = \\mathbf{${Je(12 * X)}}`)}</div>`, g += `<div class="er-eq">${M(`\\frac{GJ}{L} = \\mathbf{${Je(J)}} \\qquad \\frac{4EI_y}{L} = \\mathbf{${Je(4 * e.E * e.Iy / e.L)}} \\qquad \\frac{4EI_z}{L} = \\mathbf{${Je(4 * e.E * e.Iz / e.L)}}`)}</div>`, g += `<div class="er-eq">${M(`\\frac{6EI_z}{L^2} = \\mathbf{${Je(6 * e.E * e.Iz / e.L ** 2)}} \\qquad \\frac{6EI_y}{L^2} = \\mathbf{${Je(6 * e.E * e.Iy / e.L ** 2)}}`)}</div>`, e.kLocal && (g += `<div class="er-subsec">Resultado: ${O("\\mathbf{K}_{local}")} (12x12)</div>`, g += lo(e.kLocal)), g += '<div class="er-section-title">6. Transformacion de coordenadas</div>', g += "<p>Los cosenos directores del eje del elemento:</p>", g += `<div class="er-eq">${M(`l = \\frac{x_j - x_i}{L} = ${xo(e.l)} \\qquad m = \\frac{y_j - y_i}{L} = ${xo(e.m)} \\qquad n = \\frac{z_j - z_i}{L} = ${xo(e.n)}`)}</div>`, g += `<div class="er-eq">${M(`D = \\sqrt{l^2 + m^2} = ${xo(e.D)}`)}</div>`, Math.abs(e.n) > 0.999) {
      g += `<p>Caso especial: elemento vertical (${O(`n \\approx ${e.n > 0 ? "+1" : "-1"}`)}):</p>`;
      const he = e.n > 0 ? "\\boldsymbol{\\lambda} = \\begin{bmatrix} 0 & 0 & 1 \\\\ 0 & 1 & 0 \\\\ -1 & 0 & 0 \\end{bmatrix}" : "\\boldsymbol{\\lambda} = \\begin{bmatrix} 0 & 0 & -1 \\\\ 0 & 1 & 0 \\\\ 1 & 0 & 0 \\end{bmatrix}";
      g += `<div class="er-eq">${M(he)}</div>`;
    } else g += `<div class="er-eq">${M("\\boldsymbol{\\lambda} = \\begin{bmatrix} l & m & n \\\\ -m/D & l/D & 0 \\\\ -ln/D & -mn/D & D \\end{bmatrix}")}</div>`;
    g += `<div class="er-eq er-eq-main">${M("\\mathbf{T} = \\mathbf{I}_4 \\otimes \\boldsymbol{\\lambda} \\quad \\text{(Kronecker product} \\rightarrow 12 \\times 12 \\text{ bloque-diagonal)}")}</div>`, g += `<div class="er-section-title">7. ${O("\\mathbf{K}_{global}")} = ${O("\\mathbf{T}^T \\cdot \\mathbf{K}_{local} \\cdot \\mathbf{T}")}</div>`, g += "<p>Transformar la rigidez local al sistema global de coordenadas:</p>", g += `<div class="er-eq er-eq-main">${M("\\mathbf{K}_{global} = \\mathbf{T}^T \\cdot \\mathbf{K}_{local} \\cdot \\mathbf{T}")}</div>`, e.kGlobal && (g += lo(e.kGlobal)), g += '<div class="er-section-title">8. Ensamblaje</div>';
    const j = e.elem[0] * 6, W = e.elem[1] * 6;
    if (g += `<div class="er-eq">${M(`\\text{Nodo } ${e.elem[0]} \\rightarrow \\text{DOFs } [${j} \\ldots ${j + 5}]`)}</div>`, g += `<div class="er-eq">${M(`\\text{Nodo } ${e.elem[1]} \\rightarrow \\text{DOFs } [${W} \\ldots ${W + 5}]`)}</div>`, g += `<div class="er-eq">${M("\\mathbf{K}_{total}[\\text{DOFs}_i, \\text{DOFs}_j] \\mathrel{+}= \\mathbf{K}_{global}[i, j]")}</div>`, g += '<div class="er-section-title">9. Recuperacion de fuerzas internas</div>', g += `<div class="er-eq">${M("\\mathbf{u}_{local} = \\mathbf{T} \\cdot \\mathbf{u}_{global}")}</div>`, g += `<div class="er-eq er-eq-main">${M("\\mathbf{f}_{local} = \\mathbf{K}_{local} \\cdot \\mathbf{u}_{local}")}</div>`, e.fLocal.length > 0 && e.fLocal.some((he) => he !== 0)) {
      const he = [
        "N",
        "V<sub>y</sub>",
        "V<sub>z</sub>",
        "M<sub>x</sub>",
        "M<sub>y</sub>",
        "M<sub>z</sub>"
      ];
      g += '<table class="er-forces"><tr><th></th>';
      for (const A of he) g += `<th>${A}</th>`;
      g += `</tr><tr><td>i (${e.elem[0]})</td>`;
      for (let A = 0; A < 6; A++) g += `<td class="${Math.abs(e.fLocal[A]) > 1e-10 ? "nz" : ""}">${Je(e.fLocal[A], 3)}</td>`;
      g += `</tr><tr><td>j (${e.elem[1]})</td>`;
      for (let A = 6; A < 12; A++) g += `<td class="${Math.abs(e.fLocal[A]) > 1e-10 ? "nz" : ""}">${Je(e.fLocal[A], 3)}</td>`;
      g += "</tr></table>";
    }
    return g;
  }
  function Ml(e) {
    let g = "";
    if (g += `<div class="er-section-title">Resumen \u2014 Elemento ${e.elemIdx}</div>`, g += '<table class="er-props">', g += `<tr><td>Tipo</td><td>${e.isFrame ? "Frame (Euler-Bernoulli)" : "Shell"}</td></tr>`, g += `<tr><td>Nodos</td><td>${e.elem.join(" \u2192 ")}</td></tr>`, g += `<tr><td>Longitud</td><td><b>${Je(e.L)}</b></td></tr>`, g += `<tr><td>E</td><td>${Je(e.E)}</td></tr>`, g += `<tr><td>A</td><td>${Je(e.A)}</td></tr>`, g += "</table>", e.uGlobal.length > 0) {
      g += '<div class="er-section-title">Desplazamientos</div>';
      const O = [
        "u<sub>x</sub>",
        "u<sub>y</sub>",
        "u<sub>z</sub>",
        "\u03B8<sub>x</sub>",
        "\u03B8<sub>y</sub>",
        "\u03B8<sub>z</sub>"
      ];
      g += '<table class="er-forces"><tr><th>Nodo</th>';
      for (const M of O) g += `<th>${M}</th>`;
      g += "</tr>";
      for (let M = 0; M < e.elem.length; M++) {
        g += `<tr><td>${e.elem[M]}</td>`;
        for (let V = 0; V < 6; V++) {
          const H = e.uGlobal[M * 6 + V];
          g += `<td class="${Math.abs(H) > 1e-10 ? "nz" : ""}">${Je(H, 6)}</td>`;
        }
        g += "</tr>";
      }
      g += "</table>";
    }
    if (e.fLocal.length > 0 && e.fLocal.some((O) => O !== 0)) {
      g += '<div class="er-section-title">Fuerzas internas</div>';
      const O = [
        "N",
        "V<sub>y</sub>",
        "V<sub>z</sub>",
        "M<sub>x</sub>",
        "M<sub>y</sub>",
        "M<sub>z</sub>"
      ];
      g += '<table class="er-forces"><tr><th></th>';
      for (const M of O) g += `<th>${M}</th>`;
      g += "</tr><tr><td>Nodo i</td>";
      for (let M = 0; M < 6; M++) g += `<td class="${Math.abs(e.fLocal[M]) > 1e-10 ? "nz" : ""}">${Je(e.fLocal[M], 3)}</td>`;
      g += "</tr><tr><td>Nodo j</td>";
      for (let M = 6; M < 12; M++) g += `<td class="${Math.abs(e.fLocal[M]) > 1e-10 ? "nz" : ""}">${Je(e.fLocal[M], 3)}</td>`;
      g += "</tr></table>";
    }
    return g;
  }
  function Je(e, g = 2) {
    return Math.abs(e) < 1e-10 ? "0" : Math.abs(e) >= 1e7 || Math.abs(e) < 0.01 && e !== 0 ? e.toExponential(g) : e.toFixed(g);
  }
  function xo(e) {
    return Math.abs(e) < 1e-10 ? "0" : e.toFixed(4);
  }
  function lo(e) {
    var _a;
    const g = e.length, O = Math.min(g, 12);
    let M = '<div style="overflow-x:auto"><table class="er-matrix">';
    for (let V = 0; V < O; V++) {
      M += "<tr>";
      for (let H = 0; H < O; H++) {
        const X = ((_a = e[V]) == null ? void 0 : _a[H]) ?? 0, J = Math.abs(X) < 1e-10;
        M += `<td class="${J ? "z" : ""} ${V === H && !J ? "diag" : ""}">${J ? "0" : wl(X)}</td>`;
      }
      M += "</tr>";
    }
    return M += "</table>", g > O && (M += `<div style="color:var(--fem-label);font-size:9px">(${O}\xD7${O} de ${g}\xD7${g})</div>`), M += "</div>", M;
  }
  function wl(e) {
    return Math.abs(e) >= 1e6 || Math.abs(e) < 0.01 && e !== 0 ? e.toExponential(1) : Math.abs(e) >= 100 ? e.toFixed(0) : e.toFixed(2);
  }
  function es(e) {
    const g = e.getContext("2d");
    if (!g) return;
    const O = e.width, M = e.height, V = 30, H = O - 2 * V, X = (M - 3 * V) / 2;
    g.fillStyle = getComputedStyle(document.body).getPropertyValue("--fem-bg").trim() || "#111", g.fillRect(0, 0, O, M);
    const J = (j, W, he) => {
      g.strokeStyle = "#333", g.lineWidth = 1, g.strokeRect(V, j, H, X), g.strokeStyle = "#444", g.beginPath(), g.moveTo(V, j + X / 2), g.lineTo(V + H, j + X / 2), g.stroke(), g.fillStyle = "#888", g.font = "11px sans-serif", g.fillText(W, V + 4, j + 14);
      for (const Q of he) {
        g.strokeStyle = Q.color, g.lineWidth = 2.5, g.beginPath();
        for (let $e = 0; $e <= 100; $e++) {
          const ce = $e / 100, ie = V + ce * H, ne = j + X / 2 - Q.fn(ce) * (X / 2 * 0.85);
          $e === 0 ? g.moveTo(ie, ne) : g.lineTo(ie, ne);
        }
        g.stroke();
      }
      let A = V + H - 90;
      for (const Q of he) g.fillStyle = Q.color, g.font = "bold 10px sans-serif", g.fillText(Q.label, A, j + X - 6), A += 36;
      g.fillStyle = "#666", g.font = "9px monospace", g.fillText("0", V, j + X + 12), g.fillText("1", V + H - 6, j + X + 12), g.fillText("\u03BE", V + H / 2, j + X + 12);
    };
    J(V, "Axial (lineal)", [
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
    ]), J(V + X + V, "Flexi\xF3n (Hermite c\xFAbicos)", [
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
  const El = `<style>
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
</style>`, so = [
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
  let wo = false, Nn = null, rn = null, Ht = null, zt = null;
  function Sl() {
    zt = document.createElement("button"), zt.id = "help-tour-btn", zt.innerHTML = "?", zt.title = "Ayuda interactiva \u2014 Tour guiado";
    let e = false;
    const g = (M) => {
      zt.style.cssText = M ? "position:fixed;bottom:5px;right:5px;z-index:9999999;width:20px;height:20px;border-radius:50%;background:#555;color:#aaa;border:1px solid #777;font-size:10px;cursor:pointer;opacity:0.5;transition:all 0.2s;" : "position:fixed;bottom:20px;right:20px;z-index:9999999;width:36px;height:36px;border-radius:50%;background:linear-gradient(135deg,#0066cc,#0099ff);color:white;border:2px solid rgba(255,255,255,0.3);font-size:18px;font-weight:bold;cursor:pointer;box-shadow:0 2px 10px rgba(0,102,204,0.3);transition:all 0.2s;font-family:'Arial Nova',sans-serif;";
    };
    g(false), zt.addEventListener("contextmenu", (M) => {
      M.preventDefault(), e = !e, g(e), zt.innerHTML = "?";
    }), zt.addEventListener("mouseenter", () => {
      zt.style.transform = "scale(1.15)", zt.style.boxShadow = "0 6px 20px rgba(0,102,204,0.6)";
    }), zt.addEventListener("mouseleave", () => {
      zt.style.transform = "scale(1)", zt.style.boxShadow = "0 4px 15px rgba(0,102,204,0.4)";
    }), zt.addEventListener("click", () => {
      wo ? as() : Il();
    });
    const O = document.createElement("style");
    return O.textContent = `
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
  `, document.head.appendChild(O), zt;
  }
  function Il() {
    wo = true, zt && (zt.innerHTML = "\u2715", zt.style.background = "linear-gradient(135deg, #cc3333, #ff4444)", zt.style.animation = "none"), Nn = document.createElement("div"), Nn.id = "tour-overlay", Nn.style.cssText = `
    position: fixed; inset: 0; z-index: 9999990;
    pointer-events: none;
  `, document.body.appendChild(Nn), Xn(0);
  }
  function as() {
    wo = false, zt && (zt.innerHTML = "?", zt.style.background = "linear-gradient(135deg, #0066cc, #0099ff)", zt.style.animation = "helpPulse 2s infinite"), rn && (rn.remove(), rn = null), Ht && (Ht.remove(), Ht = null), Nn && (Nn.remove(), Nn = null);
  }
  function Xn(e) {
    var _a, _b;
    if (e >= so.length) {
      kl();
      return;
    }
    const g = so[e], O = document.querySelector(g.selector);
    if (!O) {
      Xn(e + 1);
      return;
    }
    O.scrollIntoView({
      behavior: "smooth",
      block: "nearest"
    }), rn && rn.remove(), Ht && Ht.remove();
    const M = O.getBoundingClientRect(), V = window.innerWidth, H = window.innerHeight, X = 320, J = 180;
    rn = document.createElement("div"), rn.style.cssText = `
    position: fixed;
    left: ${M.left - 6}px; top: ${M.top - 6}px;
    width: ${M.width + 12}px; height: ${M.height + 12}px;
    border-radius: 8px;
    z-index: 9999991;
    pointer-events: none;
    animation: spotlightPulse 1.5s ease-in-out infinite;
    transition: all 0.3s ease;
  `, document.body.appendChild(rn);
    const j = V - M.right, W = M.left, he = H - M.bottom, A = M.top;
    let Q = g.position || "bottom";
    Q === "bottom" && he < J + 20 && (Q = "top"), Q === "top" && A < J + 20 && (Q = "right"), Q === "right" && j < X + 20 && (Q = "left"), Q === "left" && W < X + 20 && (Q = "bottom");
    let $e, ce, ie = "";
    switch (Q) {
      case "bottom":
        $e = M.left + M.width / 2 - X / 2, ce = M.bottom + 14, ie = "position:absolute;top:-8px;left:50%;transform:translateX(-50%);width:0;height:0;border-left:8px solid transparent;border-right:8px solid transparent;border-bottom:8px solid #0099ff;";
        break;
      case "top":
        $e = M.left + M.width / 2 - X / 2, ce = M.top - J - 14, ie = "position:absolute;bottom:-8px;left:50%;transform:translateX(-50%);width:0;height:0;border-left:8px solid transparent;border-right:8px solid transparent;border-top:8px solid #0099ff;";
        break;
      case "right":
        $e = M.right + 14, ce = M.top + M.height / 2 - J / 2, ie = "position:absolute;left:-8px;top:50%;transform:translateY(-50%);width:0;height:0;border-top:8px solid transparent;border-bottom:8px solid transparent;border-right:8px solid #0099ff;";
        break;
      case "left":
        $e = M.left - X - 14, ce = M.top + M.height / 2 - J / 2, ie = "position:absolute;right:-8px;top:50%;transform:translateY(-50%);width:0;height:0;border-top:8px solid transparent;border-bottom:8px solid transparent;border-left:8px solid #0099ff;";
        break;
    }
    $e = Math.max(10, Math.min($e, V - X - 10)), ce = Math.max(10, Math.min(ce, H - J - 10)), Ht = document.createElement("div"), Ht.style.cssText = `
    position: fixed;
    left: ${$e}px; top: ${ce}px;
    width: ${X}px;
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
  `, Ht.innerHTML = `
    <div style="${ie}"></div>
    <div style="display:flex;align-items:center;margin-bottom:8px;">
      <span class="tour-hand">\u{1F446}</span>
      <span style="color:#0099ff;font-weight:bold;font-size:15px;">${g.title}</span>
      <span style="margin-left:auto;color:#666;font-size:11px;">${e + 1}/${so.length}</span>
    </div>
    <p style="margin:0 0 12px 0;font-size:12px;line-height:1.6;color:#bbb;">${g.description}</p>
    <div style="display:flex;gap:8px;justify-content:flex-end;">
      ${e > 0 ? '<button id="tour-prev" style="padding:5px 14px;background:transparent;color:#888;border:1px solid #444;border-radius:6px;cursor:pointer;font-size:11px;">\u25C0 Anterior</button>' : ""}
      <button id="tour-next" style="padding:5px 18px;background:linear-gradient(135deg,#0066cc,#0099ff);color:white;border:none;border-radius:6px;cursor:pointer;font-size:12px;font-weight:bold;">
        ${e < so.length - 1 ? "Siguiente \u25B6" : "Finalizar \u2713"}
      </button>
    </div>
    <div style="margin-top:8px;display:flex;gap:3px;justify-content:center;">
      ${so.map((_, D) => `<div style="width:${D === e ? "16px" : "6px"};height:6px;border-radius:3px;background:${D === e ? "#0099ff" : D < e ? "#004488" : "#333"};transition:all 0.3s;"></div>`).join("")}
    </div>
  `, document.body.appendChild(Ht), (_a = Ht.querySelector("#tour-next")) == null ? void 0 : _a.addEventListener("click", () => {
      Xn(e + 1);
    }), (_b = Ht.querySelector("#tour-prev")) == null ? void 0 : _b.addEventListener("click", () => {
      Xn(e - 1);
    });
    const ne = (_) => {
      if (!wo) {
        document.removeEventListener("keydown", ne);
        return;
      }
      (_.key === "ArrowRight" || _.key === "Enter") && (Xn(e + 1), document.removeEventListener("keydown", ne)), _.key === "ArrowLeft" && (Xn(Math.max(0, e - 1)), document.removeEventListener("keydown", ne)), _.key === "Escape" && (as(), document.removeEventListener("keydown", ne));
    };
    document.addEventListener("keydown", ne);
  }
  function kl() {
    var _a;
    rn && (rn.remove(), rn = null), Ht && (Ht.remove(), Ht = null), Ht = document.createElement("div"), Ht.style.cssText = `
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
  `, Ht.innerHTML = `
    <div style="font-size:48px;margin-bottom:12px;">\u{1F393}</div>
    <h3 style="color:#00cc66;margin:0 0 8px 0;font-size:18px;">Tour Completado</h3>
    <p style="color:#888;font-size:12px;line-height:1.6;margin:0 0 16px 0;">
      Ya conoces las herramientas principales.<br>
      Presiona <b style="color:#0099ff">?</b> en cualquier momento para repetir el tour.<br>
      Usa <b style="color:#0099ff">Inspect</b> en un elemento para ver el analisis FEM completo.
    </p>
    <button id="tour-done" style="padding:8px 24px;background:linear-gradient(135deg,#00aa55,#00cc66);color:white;border:none;border-radius:8px;cursor:pointer;font-size:14px;font-weight:bold;">Entendido</button>
  `, document.body.appendChild(Ht), (_a = Ht.querySelector("#tour-done")) == null ? void 0 : _a.addEventListener("click", () => as());
  }
  function Tl(e) {
    var _a;
    const g = e.split(/\r?\n/), O = {
      force: "TONF",
      length: "M"
    }, M = [], V = /* @__PURE__ */ new Map(), H = /* @__PURE__ */ new Map(), X = /* @__PURE__ */ new Map(), J = [], j = [], W = /* @__PURE__ */ new Map(), he = /* @__PURE__ */ new Map(), A = [], Q = [];
    let $e = "", ce = "";
    const ie = /* @__PURE__ */ new Map();
    for (const Ce of g) {
      const _e = Ce.trim();
      if (!_e || _e.startsWith("$")) {
        _e.startsWith("$ ") && (ce = _e.substring(2).trim());
        continue;
      }
      if (ce && (ie.has(ce) || ie.set(ce, []), ie.get(ce).push(Ce)), ce === "CONTROLS") {
        const ye = _e.match(/UNITS\s+"([^"]+)"\s+"([^"]+)"/);
        ye && (O.force = ye[1], O.length = ye[2]);
        const Fe = _e.match(/TITLE2\s+"([^"]+)"/);
        Fe && ($e = Fe[1]);
      }
      if (ce === "STORIES - IN SEQUENCE FROM TOP") {
        const ye = _e.match(/STORY\s+"([^"]+)"\s+(?:HEIGHT\s+([\d.]+)|ELEV\s+([-\d.]+))/);
        if (ye) {
          const Fe = ye[1], xe = ye[2] ? parseFloat(ye[2]) : 0, Te = ye[3] ? parseFloat(ye[3]) : void 0;
          M.push({
            name: Fe,
            height: xe,
            elev: Te ?? 0
          });
        }
      }
      if (ce === "MATERIAL PROPERTIES") {
        const ye = _e.match(/MATERIAL\s+"([^"]+)"\s+(?:TYPE\s+"([^"]+)")?/);
        if (ye) {
          const Fe = ye[1];
          V.has(Fe) || V.set(Fe, {
            type: ye[2] || "",
            E: 0,
            G: 0,
            nu: 0
          });
          const xe = V.get(Fe);
          ye[2] && (xe.type = ye[2]);
          const Te = _e.match(/\bE\s+([\d.eE+-]+)/);
          Te && (xe.E = parseFloat(Te[1]));
          const Ye = _e.match(/\bU\s+([\d.eE+-]+)/);
          Ye && (xe.nu = parseFloat(Ye[1]), xe.G = xe.E / (2 * (1 + xe.nu)));
          const Be = _e.match(/\bFY\s+([\d.eE+-]+)/);
          Be && (xe.fy = parseFloat(Be[1]));
          const ct = _e.match(/\bFC\s+([\d.eE+-]+)/);
          ct && (xe.fc = parseFloat(ct[1]));
          const bt = _e.match(/WEIGHTPERVOLUME\s+([\d.eE+-]+)/);
          bt && (xe.density = parseFloat(bt[1]));
        }
      }
      if (ce === "FRAME SECTIONS") {
        const ye = _e.match(/FRAMESECTION\s+"([^"]+)"/);
        if (ye) {
          const Fe = ye[1];
          H.has(Fe) || H.set(Fe, {
            material: "",
            shape: "",
            D: 0,
            B: 0,
            TF: 0,
            TW: 0
          });
          const xe = H.get(Fe), Te = _e.match(/MATERIAL\s+"([^"]+)"/);
          Te && (xe.material = Te[1]);
          const Ye = _e.match(/SHAPE\s+"([^"]+)"/);
          Ye && (xe.shape = Ye[1]);
          const Be = _e.match(/\bD\s+([\d.eE+-]+)/);
          Be && (xe.D = parseFloat(Be[1]));
          const ct = _e.match(/\bB\s+([\d.eE+-]+)/);
          ct && (xe.B = parseFloat(ct[1]));
          const bt = _e.match(/\bTF\s+([\d.eE+-]+)/);
          bt && (xe.TF = parseFloat(bt[1]));
          const Ge = _e.match(/\bTW\s+([\d.eE+-]+)/);
          Ge && (xe.TW = parseFloat(Ge[1]));
          const Ke = _e.match(/\bR\s+([\d.eE+-]+)/);
          Ke && (xe.R = parseFloat(Ke[1]));
          const ft = _e.match(/FILLMATERIAL\s+"([^"]+)"/);
          ft && (xe.fillMaterial = ft[1]);
          const rt = _e.match(/I2MOD\s+([\d.eE+-]+)/);
          rt && (xe.modI2 = parseFloat(rt[1]));
          const gt = _e.match(/I3MOD\s+([\d.eE+-]+)/);
          gt && (xe.modI3 = parseFloat(gt[1]));
        }
      }
      if (ce === "POINT COORDINATES") {
        const ye = _e.match(/POINT\s+"([^"]+)"\s+([-\d.eE+]+)\s+([-\d.eE+]+)/);
        ye && X.set(ye[1], [
          parseFloat(ye[2]),
          parseFloat(ye[3])
        ]);
      }
      if (ce === "LINE CONNECTIVITIES") {
        const ye = _e.match(/LINE\s+"([^"]+)"\s+(COLUMN|BEAM|BRACE)\s+"([^"]+)"\s+"([^"]+)"\s+(\d+)/);
        ye && J.push({
          name: ye[1],
          type: ye[2],
          pt1: ye[3],
          pt2: ye[4],
          nStories: parseInt(ye[5])
        });
      }
      if (ce === "POINT ASSIGNS") {
        const ye = _e.match(/POINTASSIGN\s+"([^"]+)"\s+"([^"]+)".*RESTRAINT\s+"([^"]+)"/);
        ye && W.set(`${ye[1]}@${ye[2]}`, ye[3].split(/\s+/));
      }
      if (ce === "LINE ASSIGNS") {
        const ye = _e.match(/LINEASSIGN\s+"([^"]+)"\s+"([^"]+)".*SECTION\s+"([^"]+)"/);
        if (ye) {
          const Fe = {
            story: ye[2],
            section: ye[3],
            rigidZone: 0,
            releases: [],
            angle: 0
          }, xe = _e.match(/RIGIDZONE\s+([\d.eE+-]+)/);
          xe && (Fe.rigidZone = parseFloat(xe[1]));
          const Te = _e.match(/RELEASE\s+"([^"]+)"/);
          Te && (Fe.releases = Te[1].split(/\s+/));
          const Ye = _e.match(/ANG\s+([-\d.eE+]+)/);
          Ye && (Fe.angle = parseFloat(Ye[1])), he.set(`${ye[1]}@${ye[2]}`, Fe);
        }
      }
      if (ce === "GRIDS") {
        const ye = _e.match(/^\s*GRID\s+"[^"]+"\s+LABEL\s+"([^"]+)"\s+DIR\s+"([XY])"\s+COORD\s+([-\d.eE+]+)/);
        ye && Q.push({
          label: ye[1],
          dir: ye[2],
          coord: parseFloat(ye[3])
        });
      }
      if (ce === "FRAME OBJECT LOADS") {
        const ye = _e.match(/LINELOAD\s+"([^"]+)"\s+"([^"]+)"\s+TYPE\s+"([^"]+)"\s+DIR\s+"([^"]+)"\s+LC\s+"([^"]+)"\s+FVAL\s+([-\d.eE+]+)/);
        ye && A.push({
          line: ye[1],
          story: ye[2],
          type: ye[3],
          dir: ye[4],
          lc: ye[5],
          val: parseFloat(ye[6])
        });
      }
      if (ce === "AREA CONNECTIVITIES") {
        const ye = _e.match(/AREA\s+"([^"]+)"\s+\d+\s+(.+)/);
        if (ye) {
          const Fe = ((_a = ye[2].match(/"([^"]+)"/g)) == null ? void 0 : _a.map((xe) => xe.replace(/"/g, ""))) || [];
          j.push({
            name: ye[1],
            pts: Fe,
            nStories: 0
          });
        }
      }
    }
    const ne = /* @__PURE__ */ new Map();
    if (M.length > 0) {
      const Ce = M.length - 1;
      ne.set(M[Ce].name, M[Ce].elev);
      for (let _e = Ce - 1; _e >= 0; _e--) {
        const Fe = ne.get(M[_e + 1].name) + M[_e].height;
        M[_e].elev = Fe, ne.set(M[_e].name, Fe);
      }
    }
    const _ = [], D = [], Y = /* @__PURE__ */ new Map(), pe = (Ce, _e) => `${Ce}@${_e}`, Me = /* @__PURE__ */ new Set(), ze = /* @__PURE__ */ new Map();
    for (const Ce of J) ze.set(Ce.name, Ce);
    for (const Ce of J) for (const [_e, ye] of he) {
      if (!_e.startsWith(Ce.name + "@")) continue;
      const Fe = ye.story, xe = M.findIndex((Te) => Te.name === Fe);
      if (!(xe < 0)) if (Ce.type === "COLUMN" || Ce.type === "BRACE") {
        Me.add(pe(Ce.pt2, Fe));
        const Te = Math.max(Ce.nStories, 1), Ye = Math.min(xe + Te, M.length - 1);
        Me.add(pe(Ce.pt1, M[Ye].name));
      } else Me.add(pe(Ce.pt1, Fe)), Me.add(pe(Ce.pt2, Fe));
    }
    for (const [Ce] of W) Me.add(Ce);
    for (const Ce of Me) {
      const [_e, ye] = Ce.split("@"), Fe = X.get(_e), xe = ne.get(ye);
      Fe === void 0 || xe === void 0 || (_.push([
        Fe[0],
        Fe[1],
        xe
      ]), D.push(Ce), Y.set(Ce, _.length - 1));
    }
    const Ue = [], ve = [], He = [], je = [], ge = /* @__PURE__ */ new Map();
    for (const Ce of J) for (const [_e, ye] of he) {
      if (!_e.startsWith(Ce.name + "@")) continue;
      const Fe = ye.story, xe = M.findIndex((Ge) => Ge.name === Fe);
      if (xe < 0) continue;
      let Te, Ye;
      if (Ce.type === "COLUMN" || Ce.type === "BRACE") {
        const Ge = Math.max(Ce.nStories, 1), Ke = Math.min(xe + Ge, M.length - 1);
        Te = pe(Ce.pt1, M[Ke].name), Ye = pe(Ce.pt2, Fe);
      } else Te = pe(Ce.pt1, Fe), Ye = pe(Ce.pt2, Fe);
      const Be = Y.get(Te), ct = Y.get(Ye);
      if (Be === void 0 || ct === void 0 || Be === ct) continue;
      const bt = Ue.length;
      if (Ue.push([
        Be,
        ct
      ]), ve.push(Ce.name), He.push(Ce.type), je.push(Fe), ge.set(bt, ye.section), ye.rigidZone > 0 && lt.set(bt, [
        ye.rigidZone,
        ye.rigidZone
      ]), ye.releases.length > 0) {
        const Ge = new Array(12).fill(false), Ke = {
          PI: 0,
          V2I: 1,
          V3I: 2,
          TI: 3,
          M2I: 4,
          M3I: 5,
          PJ: 6,
          V2J: 7,
          V3J: 8,
          TJ: 9,
          M2J: 10,
          M3J: 11
        };
        for (const ft of ye.releases) {
          const rt = Ke[ft];
          rt !== void 0 && (Ge[rt] = true);
        }
        pt.set(bt, Ge);
      }
    }
    const Se = /* @__PURE__ */ new Map(), Ae = /* @__PURE__ */ new Map(), Ve = /* @__PURE__ */ new Map(), at = /* @__PURE__ */ new Map(), Xe = /* @__PURE__ */ new Map(), lt = /* @__PURE__ */ new Map(), pt = /* @__PURE__ */ new Map(), $t = /* @__PURE__ */ new Map(), At = /* @__PURE__ */ new Map(), Rt = /* @__PURE__ */ new Map(), ht = /* @__PURE__ */ new Map();
    for (const [Ce, _e] of ge) {
      const ye = H.get(_e);
      if (!ye) continue;
      const Fe = V.get(ye.material);
      Fe && (Se.set(Ce, Fe.E), Ae.set(Ce, Fe.G));
      const xe = ye.D, Te = ye.B, Ye = ye.TF, Be = ye.TW;
      let ct = 0, bt = 0, Ge = 0, Ke = 0, ft = 0, rt = 0, gt = "rect";
      switch (ye.shape) {
        case "Concrete Rectangular":
          ct = xe * Te, bt = Te * xe ** 3 / 12, Ge = xe * Te ** 3 / 12, Ke = Te * xe ** 3 * (1 / 3 - 0.21 * (xe / Te) * (1 - xe ** 4 / (12 * Te ** 4))), ft = rt = 5 / 6 * ct, gt = "rect";
          break;
        case "Concrete Circle":
          ct = Math.PI * xe ** 2 / 4, bt = Ge = Math.PI * xe ** 4 / 64, Ke = Math.PI * xe ** 4 / 32, ft = rt = 0.9 * ct, gt = "circ";
          break;
        case "Steel I/Wide Flange":
          ct = 2 * Te * Ye + (xe - 2 * Ye) * Be, bt = (Te * xe ** 3 - (Te - Be) * (xe - 2 * Ye) ** 3) / 12, Ge = (2 * Ye * Te ** 3 + (xe - 2 * Ye) * Be ** 3) / 12, Ke = (2 * Te * Ye ** 3 + (xe - 2 * Ye) * Be ** 3) / 3, ft = (xe - 2 * Ye) * Be, rt = 2 * Te * Ye * 5 / 6, gt = "I";
          break;
        case "Steel Tube":
          ct = xe * Te - (xe - 2 * Be) * (Te - 2 * Be), bt = (Te * xe ** 3 - (Te - 2 * Be) * (xe - 2 * Be) ** 3) / 12, Ge = (xe * Te ** 3 - (xe - 2 * Be) * (Te - 2 * Be) ** 3) / 12, Ke = 2 * Be * (xe - Be) * (Te - Be) * ((xe - Be) * (Te - Be)) / (xe - Be + (Te - Be)), ft = 2 * xe * Be, rt = 2 * Te * Be, gt = "HSS";
          break;
        case "Filled Steel Tube":
          ct = xe * Te, bt = Te * xe ** 3 / 12, Ge = xe * Te ** 3 / 12, Ke = 2 * Be * (xe - Be) * (Te - Be) * ((xe - Be) * (Te - Be)) / (xe - Be + (Te - Be)), ft = 2 * xe * Be + 5 / 6 * (xe - 2 * Be) * (Te - 2 * Be), rt = 2 * Te * Be + 5 / 6 * (xe - 2 * Be) * (Te - 2 * Be), gt = "CFT";
          break;
        case "Steel Angle": {
          const jt = Ye || Be;
          ct = jt * (xe + Te - jt), bt = jt * (xe ** 3 + Te * jt ** 2 + jt ** 2 * (xe - jt)) / 12, Ge = jt * (Te ** 3 + xe * jt ** 2 + jt ** 2 * (Te - jt)) / 12, Ke = (xe + Te - jt) * jt ** 3 / 3, ft = xe * jt, rt = Te * jt, gt = "L";
          break;
        }
        case "Steel Channel":
        case "Cold Formed C":
          ct = 2 * Te * Ye + (xe - 2 * Ye) * Be, bt = (Be * xe ** 3 + 2 * Te * Ye * (xe - Ye) ** 2) / 12, Ge = (2 * Ye * Te ** 3 + (xe - 2 * Ye) * Be ** 3) / 12, Ke = (2 * Te * Ye ** 3 + (xe - 2 * Ye) * Be ** 3) / 3, ft = (xe - 2 * Ye) * Be, rt = 2 * Te * Ye * 5 / 6, gt = ye.shape === "Cold Formed C" ? "coldC" : "C";
          break;
        case "Steel Double Channel":
          ct = 2 * (2 * Te * Ye + (xe - 2 * Ye) * Be), bt = 2 * (Be * xe ** 3 + 2 * Te * Ye * (xe - Ye) ** 2) / 12, Ge = 2 * (2 * Ye * Te ** 3 + (xe - 2 * Ye) * Be ** 3) / 12, Ke = 2 * (2 * Te * Ye ** 3 + (xe - 2 * Ye) * Be ** 3) / 3, ft = 2 * (xe - 2 * Ye) * Be, rt = 4 * Te * Ye * 5 / 6, gt = "2C";
          break;
        default:
          xe > 0 && Te > 0 && (ct = xe * Te, bt = Te * xe ** 3 / 12, Ge = xe * Te ** 3 / 12, Ke = Math.min(xe, Te) * Math.max(xe, Te) ** 3 / 3 * 0.3, ft = rt = 5 / 6 * ct);
          break;
      }
      ye.modI2 && (Ge *= ye.modI2), ye.modI3 && (bt *= ye.modI3), Ve.set(Ce, ct), $t.set(Ce, bt), At.set(Ce, Ge), Rt.set(Ce, Ke), ft > 0 && at.set(Ce, ft), rt > 0 && Xe.set(Ce, rt), ht.set(Ce, {
        type: gt,
        b: Te || void 0,
        h: xe || void 0,
        d: gt === "circ" || gt === "pipe" ? xe : void 0,
        tw: Be || void 0,
        tf: Ye || void 0,
        r: ye.R,
        name: _e
      });
    }
    const mt = /* @__PURE__ */ new Map();
    for (const [Ce, _e] of W) {
      const ye = Y.get(Ce);
      if (ye === void 0) continue;
      const Fe = [
        false,
        false,
        false,
        false,
        false,
        false
      ];
      for (const xe of _e) xe === "UX" && (Fe[0] = true), xe === "UY" && (Fe[1] = true), xe === "UZ" && (Fe[2] = true), xe === "RX" && (Fe[3] = true), xe === "RY" && (Fe[4] = true), xe === "RZ" && (Fe[5] = true);
      mt.set(ye, Fe);
    }
    const cn = /* @__PURE__ */ new Map(), qe = /* @__PURE__ */ new Map();
    for (let Ce = 0; Ce < ve.length; Ce++) qe.set(`${ve[Ce]}@${je[Ce]}`, Ce);
    for (const Ce of A) {
      const _e = qe.get(`${Ce.line}@${Ce.story}`);
      if (_e === void 0) continue;
      const [ye, Fe] = Ue[_e], xe = _[ye], Te = _[Fe], Ye = Math.sqrt((Te[0] - xe[0]) ** 2 + (Te[1] - xe[1]) ** 2 + (Te[2] - xe[2]) ** 2);
      if (Ye < 1e-10) continue;
      const Be = Ce.val * Ye / 2;
      let ct = 0, bt = 0, Ge = 0;
      Ce.dir === "GRAV" || Ce.dir === "GRAVITY" ? Ge = -Be : Ce.dir === "X" ? ct = Be : Ce.dir === "Y" ? bt = Be : Ce.dir === "Z" && (Ge = -Be);
      for (const Ke of [
        ye,
        Fe
      ]) {
        const ft = cn.get(Ke) || [
          0,
          0,
          0,
          0,
          0,
          0
        ];
        ft[0] += ct, ft[1] += bt, ft[2] += Ge, cn.set(Ke, ft);
      }
    }
    const vt = /* @__PURE__ */ new Map();
    for (const [Ce, _e] of ge) {
      const ye = H.get(_e);
      if (!ye) continue;
      const Fe = V.get(ye.material);
      (Fe == null ? void 0 : Fe.density) && vt.set(Ce, Fe.density);
    }
    return {
      units: O,
      stories: M.reverse(),
      materials: V,
      frameSections: H,
      nodes: _,
      nodeNames: D,
      nodeNameToIdx: Y,
      elements: Ue,
      elementNames: ve,
      elementTypes: He,
      elementStories: je,
      elementSections: ge,
      nodeInputs: {
        supports: mt,
        loads: cn
      },
      elementInputs: {
        elasticities: Se,
        shearModuli: Ae,
        areas: Ve,
        momentsOfInertiaZ: $t,
        momentsOfInertiaY: At,
        torsionalConstants: Rt,
        shearAreasY: at,
        shearAreasZ: Xe,
        rigidOffsets: lt,
        momentReleases: pt,
        densities: vt,
        sectionShapes: ht
      },
      sectionShapes: ht,
      grids: Q,
      info: {
        nNodes: _.length,
        nFrames: Ue.length,
        nAreas: j.length,
        title: $e
      },
      rawSections: ie
    };
  }
  function nt(e) {
    return e && parseFloat(e) || 0;
  }
  function pa(e) {
    const g = /* @__PURE__ */ new Map(), O = /(\w+)\s*=\s*(?:"([^"]*?)"|(\S+))/g;
    let M;
    for (; (M = O.exec(e)) !== null; ) g.set(M[1], M[2] !== void 0 ? M[2] : M[3]);
    return g;
  }
  function zl(e) {
    const g = e.split(/\r?\n/);
    return g.some((M) => M.trim().startsWith("TABLE:")) ? Al(g) : Ll(g);
  }
  function Al(e) {
    var _a, _b, _c, _d, _e, _f;
    const g = [];
    let O = "";
    for (const ne of e) {
      const _ = ne.trimEnd();
      _.endsWith("_") ? O += _.slice(0, -1) + " " : (O += _, g.push(O), O = "");
    }
    O && g.push(O);
    const M = {
      force: "KN",
      length: "m"
    };
    let V = "UX,UY,UZ,RX,RY,RZ";
    const H = /* @__PURE__ */ new Map(), X = /* @__PURE__ */ new Map(), J = /* @__PURE__ */ new Map(), j = /* @__PURE__ */ new Map(), W = [], he = [], A = /* @__PURE__ */ new Map(), Q = /* @__PURE__ */ new Map(), $e = /* @__PURE__ */ new Map(), ce = [];
    let ie = "";
    for (const ne of g) {
      const _ = ne.trim();
      if (!_ || _.startsWith(";") || _.startsWith("File ")) continue;
      if (_.startsWith("TABLE:")) {
        const Y = _.match(/TABLE:\s+"(.+?)"/);
        ie = Y ? Y[1].toUpperCase() : "";
        continue;
      }
      if (_ === "END TABLE DATA") {
        ie = "";
        continue;
      }
      const D = pa(_);
      switch (ie) {
        case "PROGRAM CONTROL": {
          const Y = D.get("CurrUnits");
          if (Y) {
            const pe = Y.split(",").map((Me) => Me.trim());
            pe[0] && (M.force = pe[0]), pe[1] && (M.length = pe[1]);
          }
          break;
        }
        case "MATERIAL PROPERTIES 01 - GENERAL": {
          const Y = D.get("Material");
          Y && !H.has(Y) && H.set(Y, {
            E: 0,
            nu: 0,
            G: 0
          });
          break;
        }
        case "MATERIAL PROPERTIES 02 - BASIC MECHANICAL PROPERTIES": {
          const Y = D.get("Material");
          if (Y) {
            const pe = H.get(Y) || {
              E: 0,
              nu: 0,
              G: 0
            };
            pe.E = nt(D.get("E1")), pe.G = nt(D.get("G12")), pe.nu = nt(D.get("U12")), pe.density = nt(D.get("UnitMass")), H.set(Y, pe);
          }
          break;
        }
        case "MATERIAL PROPERTIES 03A - STEEL DATA": {
          const Y = D.get("Material");
          Y && H.has(Y) && (H.get(Y).fy = nt(D.get("Fy")));
          break;
        }
        case "FRAME SECTION PROPERTIES 01 - GENERAL": {
          const Y = D.get("SectionName");
          Y && X.set(Y, {
            material: D.get("Material") || "",
            shape: D.get("Shape") || "Rectangular",
            D: nt(D.get("t3")),
            B: nt(D.get("t2")),
            TF: nt(D.get("tf")),
            TW: nt(D.get("tw")),
            A: nt(D.get("Area")),
            Iz: nt(D.get("I33")),
            Iy: nt(D.get("I22")),
            J: nt(D.get("TorsConst"))
          });
          break;
        }
        case "AREA SECTION PROPERTIES": {
          const Y = D.get("Section");
          Y && J.set(Y, {
            material: D.get("Material") || "",
            type: D.get("Type") || "Shell",
            thickness: nt(D.get("Thickness"))
          });
          break;
        }
        case "JOINT COORDINATES": {
          const Y = D.get("Joint");
          if (Y) {
            const pe = nt(D.get("XorR")), Me = nt(D.get("Y")), ze = nt(D.get("Z"));
            j.set(Y, [
              pe,
              Me,
              ze
            ]);
          }
          break;
        }
        case "CONNECTIVITY - FRAME": {
          const Y = D.get("Frame"), pe = D.get("JointI"), Me = D.get("JointJ");
          Y && pe && Me && W.push({
            name: Y,
            j1: pe,
            j2: Me
          });
          break;
        }
        case "CONNECTIVITY - AREA": {
          const Y = D.get("Area");
          if (Y) {
            const pe = parseInt(D.get("NumJoints") || "4"), Me = [];
            for (let ze = 1; ze <= pe; ze++) {
              const Ue = D.get(`Joint${ze}`);
              Ue && Me.push(Ue);
            }
            Me.length >= 3 && he.push({
              name: Y,
              joints: Me
            });
          }
          break;
        }
        case "JOINT RESTRAINT ASSIGNMENTS": {
          const Y = D.get("Joint");
          if (Y) {
            const pe = [
              ((_a = D.get("U1")) == null ? void 0 : _a.toLowerCase()) === "yes",
              ((_b = D.get("U2")) == null ? void 0 : _b.toLowerCase()) === "yes",
              ((_c = D.get("U3")) == null ? void 0 : _c.toLowerCase()) === "yes",
              ((_d = D.get("R1")) == null ? void 0 : _d.toLowerCase()) === "yes",
              ((_e = D.get("R2")) == null ? void 0 : _e.toLowerCase()) === "yes",
              ((_f = D.get("R3")) == null ? void 0 : _f.toLowerCase()) === "yes"
            ];
            A.set(Y, pe);
          }
          break;
        }
        case "FRAME SECTION ASSIGNMENTS": {
          const Y = D.get("Frame"), pe = D.get("AnalSect");
          Y && pe && Q.set(Y, pe);
          break;
        }
        case "AREA SECTION ASSIGNMENTS": {
          const Y = D.get("Area"), pe = D.get("Section");
          Y && pe && $e.set(Y, pe);
          break;
        }
        case "JOINT LOADS - FORCE": {
          const Y = D.get("Joint");
          Y && ce.push({
            joint: Y,
            fx: nt(D.get("F1")),
            fy: nt(D.get("F2")),
            fz: nt(D.get("F3")),
            mx: nt(D.get("M1")),
            my: nt(D.get("M2")),
            mz: nt(D.get("M3"))
          });
          break;
        }
      }
    }
    return fa(M, V, H, X, J, j, W, he, A, Q, $e, ce);
  }
  function Ll(e) {
    const g = {
      force: "KN",
      length: "m"
    };
    let O = "UX,UY,UZ,RX,RY,RZ";
    const M = /* @__PURE__ */ new Map(), V = /* @__PURE__ */ new Map(), H = /* @__PURE__ */ new Map(), X = /* @__PURE__ */ new Map(), J = [], j = [], W = /* @__PURE__ */ new Map(), he = [];
    let A = "", Q = "";
    for (const ie of e) {
      const ne = ie.trim();
      if (!ne || ne.startsWith(";")) continue;
      if (!ie.startsWith(" ") && !ie.startsWith("	")) {
        const Y = ne.toUpperCase();
        if (Y === "END") break;
        Y.startsWith("SHELL SECTION") ? A = "SHELL SECTION" : Y.startsWith("FRAME SECTION") ? A = "FRAME SECTION" : A = Y.split(/\s+/)[0];
        continue;
      }
      const _ = pa(ne), D = ne.split(/\s+/);
      switch (A) {
        case "SYSTEM": {
          const Y = _.get("DOF");
          Y && (O = Y);
          const pe = _.get("LENGTH");
          pe && (g.length = pe);
          const Me = _.get("FORCE");
          Me && (g.force = Me);
          break;
        }
        case "JOINT": {
          const Y = D[0];
          X.set(Y, [
            nt(_.get("X")),
            nt(_.get("Y")),
            nt(_.get("Z"))
          ]);
          break;
        }
        case "RESTRAINT": {
          const Y = _.get("ADD"), pe = _.get("DOF");
          if (Y && pe) {
            const Me = pe.split(","), ze = [
              false,
              false,
              false,
              false,
              false,
              false
            ];
            for (const Ue of Me) {
              const ve = Ue.toUpperCase();
              (ve === "UX" || ve === "U1") && (ze[0] = true), (ve === "UY" || ve === "U2") && (ze[1] = true), (ve === "UZ" || ve === "U3") && (ze[2] = true), (ve === "RX" || ve === "R1") && (ze[3] = true), (ve === "RY" || ve === "R2") && (ze[4] = true), (ve === "RZ" || ve === "R3") && (ze[5] = true);
            }
            W.set(Y, ze);
          }
          break;
        }
        case "MATERIAL": {
          const Y = _.get("NAME");
          if (Y) Q = Y, M.set(Y, {
            E: 0,
            nu: 0,
            G: 0
          });
          else if (Q) {
            const pe = M.get(Q), Me = _.get("E");
            Me && (pe.E = nt(Me));
            const ze = _.get("U");
            ze && (pe.nu = nt(ze)), pe.G = pe.E / (2 * (1 + pe.nu));
            const Ue = _.get("M");
            Ue && (pe.density = nt(Ue));
          }
          break;
        }
        case "SHELL": {
          const Y = D[0], pe = _.get("J");
          _.get("SEC"), pe && j.push({
            name: Y,
            joints: pe.split(",")
          });
          break;
        }
        case "SHELL SECTION": {
          const Y = _.get("NAME");
          Y && H.set(Y, {
            material: _.get("MAT") || "",
            type: _.get("TYPE") || "Shell",
            thickness: nt(_.get("TH"))
          });
          break;
        }
        case "FRAME": {
          const Y = D[0], pe = _.get("J");
          if (pe) {
            const Me = pe.split(",");
            Me.length >= 2 && J.push({
              name: Y,
              j1: Me[0],
              j2: Me[1]
            });
          }
          break;
        }
        case "LOAD": {
          const Y = _.get("ADD");
          Y && he.push({
            joint: Y,
            fx: nt(_.get("UX")),
            fy: nt(_.get("UY")),
            fz: nt(_.get("UZ")),
            mx: nt(_.get("MX")),
            my: nt(_.get("MY")),
            mz: nt(_.get("MZ"))
          });
          break;
        }
      }
    }
    return fa(g, O, M, V, H, X, J, j, W, /* @__PURE__ */ new Map(), /* @__PURE__ */ new Map(), he);
  }
  function fa(e, g, O, M, V, H, X, J, j, W, he, A) {
    var _a;
    const Q = [], $e = /* @__PURE__ */ new Map(), ce = [];
    for (const [ve, He] of H) $e.set(ve, ce.length), Q.push(ve), ce.push(He);
    const ie = [], ne = [], _ = /* @__PURE__ */ new Map();
    for (const ve of X) {
      const He = $e.get(ve.j1), je = $e.get(ve.j2);
      if (He !== void 0 && je !== void 0) {
        const ge = ie.length;
        ie.push([
          He,
          je
        ]), ne.push(ve.name);
        const Se = W.get(ve.name);
        Se && _.set(ge, Se);
      }
    }
    const D = ie.length;
    for (const ve of J) {
      const He = ve.joints.map((je) => $e.get(je)).filter((je) => je !== void 0);
      if (He.length >= 3) {
        const je = ie.length;
        ie.push(He), ne.push(ve.name);
        const ge = he.get(ve.name);
        ge && _.set(je, ge);
      }
    }
    const Y = ie.length - D, pe = {
      elasticities: /* @__PURE__ */ new Map(),
      shearModuli: /* @__PURE__ */ new Map(),
      areas: /* @__PURE__ */ new Map(),
      momentsOfInertiaZ: /* @__PURE__ */ new Map(),
      momentsOfInertiaY: /* @__PURE__ */ new Map(),
      torsionalConstants: /* @__PURE__ */ new Map(),
      densities: /* @__PURE__ */ new Map(),
      thicknesses: /* @__PURE__ */ new Map(),
      poissonsRatios: /* @__PURE__ */ new Map()
    }, Me = /* @__PURE__ */ new Map(), ze = O.values().next().value || {
      E: 29e3,
      nu: 0.3,
      G: 11153
    };
    for (let ve = 0; ve < ie.length; ve++) {
      const He = _.get(ve), je = He ? M.get(He) : null, ge = He ? V.get(He) : null;
      if (je || ie[ve].length === 2) {
        const Se = je || {
          material: "",
          A: 0,
          Iz: 0,
          Iy: 0,
          J: 0,
          D: 0.3,
          B: 0.3,
          shape: "Rectangular"
        }, Ae = O.get(Se.material) || ze, Ve = Ae.E || ze.E, at = Ae.nu || 0.3, Xe = Ae.G || Ve / (2 * (1 + at));
        pe.elasticities.set(ve, Ve), pe.shearModuli.set(ve, Xe), pe.areas.set(ve, Se.A || Se.D * Se.B), pe.momentsOfInertiaZ.set(ve, Se.Iz || Se.B * Se.D ** 3 / 12), pe.momentsOfInertiaY.set(ve, Se.Iy || Se.D * Se.B ** 3 / 12), pe.torsionalConstants.set(ve, Se.J || 0), pe.densities.set(ve, Ae.density || 0), ((_a = Se.shape) == null ? void 0 : _a.includes("Wide Flange")) || Se.shape === "I" ? Me.set(ve, {
          type: "I",
          b: Se.B,
          h: Se.D,
          name: He || "I-section"
        }) : Me.set(ve, {
          type: "rect",
          b: Se.B,
          h: Se.D
        });
      } else if (ge) {
        const Se = O.get(ge.material) || ze, Ae = Se.E || ze.E, Ve = Se.nu || 0.2, at = Se.G || Ae / (2 * (1 + Ve));
        pe.elasticities.set(ve, Ae), pe.shearModuli.set(ve, at), pe.thicknesses.set(ve, ge.thickness), pe.poissonsRatios.set(ve, Ve), pe.densities.set(ve, Se.density || 0);
      }
    }
    const Ue = {
      supports: /* @__PURE__ */ new Map(),
      forces: /* @__PURE__ */ new Map()
    };
    for (const [ve, He] of j) {
      const je = $e.get(ve);
      je !== void 0 && Ue.supports.set(je, He);
    }
    for (const ve of A) {
      const He = $e.get(ve.joint);
      if (He !== void 0) {
        const je = Ue.forces.get(He) || [
          0,
          0,
          0,
          0,
          0,
          0
        ];
        je[0] += ve.fx, je[1] += ve.fy, je[2] += ve.fz, je[3] += ve.mx, je[4] += ve.my, je[5] += ve.mz, Ue.forces.set(He, je);
      }
    }
    return {
      units: e,
      dof: g,
      materials: O,
      frameSections: M,
      shellSections: V,
      nodes: ce,
      nodeNames: Q,
      nodeNameToIdx: $e,
      elements: ie,
      elementNames: ne,
      elementSections: _,
      nodeInputs: Ue,
      elementInputs: pe,
      sectionShapes: Me,
      info: {
        nNodes: ce.length,
        nFrames: D,
        nShells: Y,
        title: `SAP2000 (${D} frames, ${Y} shells)`
      }
    };
  }
  function Cl(e) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j;
    const { nodes: g, elements: O, nodeInputs: M, elementInputs: V } = e, H = e.units || {
      force: "KN",
      length: "m"
    }, X = e.title || "Awatif Model", J = [], j = (_) => J.push(_), W = () => J.push(" ");
    j(`File ${X}.$2k was saved on m/d/yy at h:mm:ss`), W(), j('TABLE:  "ACTIVE DEGREES OF FREEDOM"'), j("   UX=Yes   UY=Yes   UZ=Yes   RX=Yes   RY=Yes   RZ=Yes"), W();
    const he = [], A = [];
    if (O.forEach((_, D) => {
      _.length === 2 ? he.push(D) : A.push(D);
    }), he.length > 0) {
      j('TABLE:  "CONNECTIVITY - FRAME"');
      for (const _ of he) {
        const D = O[_];
        j(`   Frame=${_ + 1}   JointI=${D[0] + 1}   JointJ=${D[1] + 1}   IsCurved=No`);
      }
      W();
    }
    if (A.length > 0) {
      j('TABLE:  "CONNECTIVITY - AREA"');
      for (const _ of A) {
        const D = O[_], Y = D.map((pe, Me) => `Joint${Me + 1}=${pe + 1}`).join("   ");
        j(`   Area=${_ + 1}   NumJoints=${D.length}   ${Y}`);
      }
      W();
    }
    j('TABLE:  "COORDINATE SYSTEMS"'), j("   Name=GLOBAL   Type=Cartesian   X=0   Y=0   Z=0   AboutZ=0   AboutY=0   AboutX=0"), W(), j('TABLE:  "DATABASE FORMAT TYPES"'), j("   UnitsCurr=Yes   OverrideE=No"), W();
    const Q = /* @__PURE__ */ new Map(), $e = /* @__PURE__ */ new Map();
    for (const _ of he) {
      const D = ((_a = V.areas) == null ? void 0 : _a.get(_)) || 0, Y = ((_b = V.momentsOfInertiaZ) == null ? void 0 : _b.get(_)) || 0, pe = ((_c = V.momentsOfInertiaY) == null ? void 0 : _c.get(_)) || 0, Me = ((_d = V.torsionalConstants) == null ? void 0 : _d.get(_)) || 0, ze = ((_e = V.elasticities) == null ? void 0 : _e.get(_)) || 0, Ue = `MAT_${Math.round(ze)}`, ve = `A${D.toPrecision(6)}_Iz${Y.toPrecision(6)}`;
      if (!Q.has(ve)) {
        let je = 0.3, ge = 0.3;
        D > 0 && Y > 0 && (je = Math.sqrt(12 * Y / D), ge = D / je), Q.set(ve, {
          A: D,
          Iz: Y,
          Iy: pe,
          J: Me,
          b: ge,
          h: je,
          matKey: Ue
        });
      }
      const He = [
        ...Q.keys()
      ].indexOf(ve) + 1;
      $e.set(_, `SEC${He}`);
    }
    if (he.length > 0) {
      j('TABLE:  "FRAME SECTION ASSIGNMENTS"');
      for (const _ of he) {
        const D = $e.get(_) || "SEC1";
        j(`   Frame=${_ + 1}   AutoSelect=N.A.   AnalSect=${D}   MatProp=Default`);
      }
      W();
    }
    if (Q.size > 0) {
      j('TABLE:  "FRAME SECTION PROPERTIES 01 - GENERAL"');
      let _ = 0;
      for (const [, D] of Q) {
        _++;
        const Y = D.A * 5 / 6;
        j(`   SectionName=SEC${_}   Material=${D.matKey}   Shape=Rectangular   t3=${kt(D.h)}   t2=${kt(D.b)}   Area=${kt(D.A)}   TorsConst=${kt(D.J)}   I33=${kt(D.Iz)}   I22=${kt(D.Iy)}   I23=0   AS2=${kt(Y)}   AS3=${kt(Y)} _`), j("        Color=Blue   FromFile=No   AMod=1   A2Mod=1   A3Mod=1   JMod=1   I2Mod=1   I3Mod=1   MMod=1   WMod=1");
      }
      W();
    }
    const ce = /* @__PURE__ */ new Map(), ie = /* @__PURE__ */ new Map();
    for (const _ of A) {
      const D = ((_f = V.thicknesses) == null ? void 0 : _f.get(_)) || 0.1, Y = ((_g = V.elasticities) == null ? void 0 : _g.get(_)) || 0, pe = `MAT_${Math.round(Y)}`, Me = `t${D.toPrecision(6)}`;
      ce.has(Me) || ce.set(Me, {
        t: D,
        matKey: pe
      });
      const ze = [
        ...ce.keys()
      ].indexOf(Me) + 1;
      ie.set(_, `SSEC${ze}`);
    }
    if (A.length > 0) {
      j('TABLE:  "AREA SECTION ASSIGNMENTS"');
      for (const D of A) {
        const Y = ie.get(D) || "SSEC1";
        j(`   Area=${D + 1}   Section=${Y}   MatProp=Default`);
      }
      W(), j('TABLE:  "AREA SECTION PROPERTIES"');
      let _ = 0;
      for (const [, D] of ce) _++, j(`   Section=SSEC${_}   Material=${D.matKey}   MatAngle=0   AreaType=Shell   Type=ShellThin   DrillDOF=Yes   Thickness=${kt(D.t)}   BendThick=${kt(D.t)}   Color=Cyan`);
      W();
    }
    j('TABLE:  "JOINT COORDINATES"');
    for (let _ = 0; _ < g.length; _++) {
      const D = g[_];
      j(`   Joint=${_ + 1}   CoordSys=GLOBAL   CoordType=Cartesian   XorR=${kt(D[0])}   Y=${kt(D[1])}   Z=${kt(D[2])}   SpecialJt=No`);
    }
    if (W(), M.supports && M.supports.size > 0) {
      j('TABLE:  "JOINT RESTRAINT ASSIGNMENTS"');
      for (const [_, D] of M.supports) {
        if (!D.some((pe) => pe)) continue;
        const Y = (pe) => pe ? "Yes" : "No";
        j(`   Joint=${_ + 1}   U1=${Y(D[0])}   U2=${Y(D[1])}   U3=${Y(D[2])}   R1=${Y(D[3])}   R2=${Y(D[4])}   R3=${Y(D[5])}`);
      }
      W();
    }
    if (j('TABLE:  "LOAD PATTERN DEFINITIONS"'), j("   LoadPat=DEAD   DesignType=Dead   SelfWtMult=0"), W(), j('TABLE:  "LOAD CASE DEFINITIONS"'), j('   Case=DEAD   Type=LinStatic   InitialCond=Zero   DesTypeOpt="Prog Det"   DesignType=Dead   DesActOpt="Prog Det"   DesignAct=Non-Composite   AutoType=None   RunCase=Yes'), W(), j('TABLE:  "CASE - STATIC 1 - LOAD ASSIGNMENTS"'), j('   Case=DEAD   LoadType="Load pattern"   LoadName=DEAD   LoadSF=1'), W(), M.forces && M.forces.size > 0) {
      j('TABLE:  "JOINT LOADS - FORCE"');
      for (const [_, D] of M.forces) D.some((Y) => Math.abs(Y) > 1e-12) && j(`   Joint=${_ + 1}   LoadPat=DEAD   CoordSys=GLOBAL   F1=${kt(D[0])}   F2=${kt(D[1])}   F3=${kt(D[2])}   M1=${kt(D[3])}   M2=${kt(D[4])}   M3=${kt(D[5])}`);
      W();
    }
    const ne = /* @__PURE__ */ new Map();
    for (let _ = 0; _ < O.length; _++) {
      const D = ((_h = V.elasticities) == null ? void 0 : _h.get(_)) || 0, Y = ((_i = V.shearModuli) == null ? void 0 : _i.get(_)) || 0, pe = D > 0 && Y > 0 ? Math.max(0, Math.min(0.5, D / (2 * Y) - 1)) : 0.2, Me = ((_j = V.densities) == null ? void 0 : _j.get(_)) || 0, ze = `MAT_${Math.round(D)}`;
      ne.has(ze) || ne.set(ze, {
        E: D,
        nu: pe,
        G: Y,
        rho: Me
      });
    }
    j('TABLE:  "MATERIAL PROPERTIES 01 - GENERAL"');
    for (const [_] of ne) j(`   Material=${_}   Type=Concrete   SymType=Isotropic   TempDepend=No   Color=Green`);
    W(), j('TABLE:  "MATERIAL PROPERTIES 02 - BASIC MECHANICAL PROPERTIES"');
    for (const [_, D] of ne) j(`   Material=${_}   UnitWeight=${kt(D.rho * 9.81)}   UnitMass=${kt(D.rho)}   E1=${kt(D.E)}   G12=${kt(D.G)}   U12=${kt(D.nu)}   A1=9.9E-06`);
    W(), j('TABLE:  "MATERIAL PROPERTIES 03B - CONCRETE DATA"');
    for (const [_] of ne) j(`   Material=${_}   Fc=27579   eFc=27579   LtWtConc=No   SSCurveOpt=Mander   SSHysType=Takeda   SFc=0.00222   SCap=0.005   FinalSlope=-0.1   FAngle=0   DAngle=0`);
    return W(), j('TABLE:  "PROGRAM CONTROL"'), j(`   ProgramName=SAP2000   Version=24.1.0   CurrUnits="${H.force}, ${H.length}, C"   SteelCode="AISC 360-16"   ConcCode="ACI 318-19"   AlumCode="AA 2015"   ColdCode=AISI-16   RegenHinge=Yes`), W(), j("END TABLE DATA"), j(""), J.join(`\r
`);
  }
  function kt(e) {
    return e === 0 || Math.abs(e) < 1e-15 ? "0" : Math.abs(e) >= 1e6 || Math.abs(e) < 1e-3 && Math.abs(e) > 0 ? e.toExponential(8) : parseFloat(e.toPrecision(10)).toString();
  }
  function Fl(e) {
    const { e2kModel: g } = e, O = g == null ? void 0 : g.rawSections;
    return O && O.size > 0 ? Rl(O) : Pl(e);
  }
  function Rl(e, g) {
    const O = [], M = [
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
    O.push("$ File exported from Awatif FEM Studio (round-trip)"), O.push("");
    for (const V of M) {
      const H = e.get(V);
      if (!(!H || H.length === 0)) {
        O.push(`$ ${V}`);
        for (const X of H) O.push(X);
        O.push("");
      }
    }
    for (const [V, H] of e) if (!M.includes(V) && H.length !== 0) {
      O.push(`$ ${V}`);
      for (const X of H) O.push(X);
      O.push("");
    }
    return O.push("  END"), O.push("$ END OF MODEL FILE"), O.join(`\r
`);
  }
  function Pl(e) {
    var _a, _b, _c, _d;
    const { nodes: g, elements: O, nodeInputs: M, elementInputs: V, title: H, units: X } = e, J = (X == null ? void 0 : X.force) || "TONF", j = (X == null ? void 0 : X.length) || "M", W = [], he = (ge) => Math.round(ge * 1e4) / 1e4;
    W.push("$ File exported from Awatif FEM Studio"), W.push(""), W.push("$ PROGRAM INFORMATION"), W.push('  PROGRAM  "AWATIF"  VERSION "1.0.0"  '), W.push(""), W.push("$ CONTROLS"), W.push(`  UNITS  "${J}"  "${j}"  "C"  `), H && W.push(`  TITLE2  "${H}"  `), W.push("");
    const A = /* @__PURE__ */ new Set();
    g.forEach((ge) => A.add(he(ge[1])));
    const Q = [
      ...A
    ].sort((ge, Se) => ge - Se), $e = [], ce = /* @__PURE__ */ new Map();
    $e.push("Base"), ce.set(Q[0], "Base");
    for (let ge = 1; ge < Q.length; ge++) {
      const Se = `Level_${ge}`;
      $e.push(Se), ce.set(Q[ge], Se);
    }
    W.push("$ STORIES - IN SEQUENCE FROM TOP");
    for (let ge = Q.length - 1; ge >= 1; ge--) W.push(`  STORY "${$e[ge]}"  HEIGHT ${he(Q[ge] - Q[ge - 1])} MASTERSTORY "Yes"  `);
    Q.length > 0 && W.push(`  STORY "Base"  ELEV ${Q[0]} `), W.push(""), O.some((ge) => ge.length === 4) && (W.push("$ DIAPHRAGM NAMES"), W.push('  DIAPHRAGM "D1"    TYPE RIGID'), W.push("")), W.push("$ MATERIAL PROPERTIES");
    const ne = /* @__PURE__ */ new Set();
    (_a = V.elasticities) == null ? void 0 : _a.forEach((ge) => ne.add(ge));
    const _ = /* @__PURE__ */ new Map();
    let D = 0;
    for (const ge of ne) {
      const Se = `Mat_${++D}`;
      _.set(ge, Se), W.push(`  MATERIAL  "${Se}"    TYPE "Concrete"    WEIGHTPERVOLUME 2.4`), W.push(`  MATERIAL  "${Se}"    SYMTYPE "Isotropic"  E ${ge}  U 0.2  A 1E-05`);
    }
    W.push(""), W.push("$ FRAME SECTIONS");
    const Y = /* @__PURE__ */ new Set(), pe = /* @__PURE__ */ new Map(), Me = /* @__PURE__ */ new Map();
    O.forEach((ge, Se) => {
      var _a2, _b2;
      if (ge.length !== 2) return;
      const Ae = (_a2 = V.sectionShapes) == null ? void 0 : _a2.get(Se), Ve = ((_b2 = V.elasticities) == null ? void 0 : _b2.get(Se)) ?? 0, at = _.get(Ve) || "Mat_1", Xe = (Ae == null ? void 0 : Ae.h) ?? 0, lt = (Ae == null ? void 0 : Ae.b) ?? 0, pt = (Ae == null ? void 0 : Ae.d) ?? 0, $t = (Ae == null ? void 0 : Ae.tf) ?? 0, At = (Ae == null ? void 0 : Ae.tw) ?? 0, Rt = (Ae == null ? void 0 : Ae.type) || "rect", ht = `${Rt}_${Xe}_${lt}_${pt}_${$t}_${At}`;
      (Ae == null ? void 0 : Ae.name) && !Me.has(ht) && Me.set(ht, Ae.name);
      let mt = Me.get(ht);
      if (mt || (Rt === "rect" ? mt = `R${he(lt * 100)}x${he(Xe * 100)}` : Rt === "circ" ? mt = `C_D${he(pt * 100)}` : Rt === "I" ? mt = `I_${he(Xe * 100)}` : mt = `Sec_${Y.size + 1}`, Me.set(ht, mt)), pe.set(Se, mt), Y.has(mt)) return;
      Y.add(mt);
      const qe = {
        rect: "Concrete Rectangular",
        circ: "Concrete Circle",
        I: "Steel I/Wide Flange",
        HSS: "Steel Tube",
        pipe: "Steel Pipe",
        L: "Steel Angle",
        C: "Steel Channel",
        "2C": "Steel Double Channel"
      }[Rt] || "Concrete Rectangular";
      let vt = `  FRAMESECTION  "${mt}"  MATERIAL "${at}"  SHAPE "${qe}"`;
      Xe && (vt += `  D ${Xe}`), lt && (vt += `  B ${lt}`), pt && !Xe && (vt += `  D ${pt}`), $t && (vt += `  TF ${$t}`), At && (vt += `  TW ${At}`), W.push(vt);
    }), W.push("");
    const ze = /* @__PURE__ */ new Map();
    let Ue = 0;
    g.forEach((ge) => {
      const Se = `${he(ge[0])},${he(ge[2])}`;
      ze.has(Se) || ze.set(Se, `${++Ue}`);
    }), W.push("$ POINT COORDINATES");
    for (const [ge, Se] of ze) {
      const [Ae, Ve] = ge.split(",").map(Number);
      W.push(`  POINT "${Se}"  ${Ae} ${Ve} `);
    }
    W.push("");
    const ve = (ge) => {
      const Se = g[ge], Ae = `${he(Se[0])},${he(Se[2])}`;
      return {
        pt: ze.get(Ae) || "1",
        story: ce.get(he(Se[1])) || "Base"
      };
    };
    W.push("$ LINE CONNECTIVITIES");
    const He = [];
    O.forEach((ge, Se) => {
      if (ge.length !== 2) return;
      const Ae = Ol(g, ge), Ve = pe.get(Se) || `Sec_${Se}`;
      if (Ae === "BEAM") {
        const at = ve(ge[0]), Xe = ve(ge[1]);
        W.push(`  LINE  "E${Se + 1}"  BEAM  "${at.pt}"  "${Xe.pt}"  0`), He.push(`  LINEASSIGN  "E${Se + 1}"  "${at.story}"  SECTION "${Ve}"  MINNUMSTA 3 AUTOMESH "YES"  MESHATINTERSECTIONS "YES"  `);
      } else {
        const at = g[ge[0]][1] <= g[ge[1]][1] ? ge[0] : ge[1], Xe = g[ge[0]][1] <= g[ge[1]][1] ? ge[1] : ge[0];
        ve(at);
        const lt = ve(Xe), pt = he(g[at][1]), $t = he(g[Xe][1]), At = Q.indexOf(pt), Rt = Q.indexOf($t), ht = Math.max(1, Rt >= 0 && At >= 0 ? Rt - At : 1);
        W.push(`  LINE  "E${Se + 1}"  ${Ae}  "${lt.pt}"  "${lt.pt}"  ${ht}`);
        for (let mt = 0; mt < ht; mt++) {
          const cn = Rt - mt;
          cn >= 0 && cn < $e.length && He.push(`  LINEASSIGN  "E${Se + 1}"  "${$e[cn]}"  SECTION "${Ve}"  MINNUMSTA 3 AUTOMESH "YES"  MESHATINTERSECTIONS "YES"  `);
        }
      }
    }), W.push(""), W.push("$ POINT ASSIGNS"), (_b = M.supports) == null ? void 0 : _b.forEach((ge, Se) => {
      const Ae = [];
      if (ge[0] && Ae.push("UX"), ge[1] && Ae.push("UY"), ge[2] && Ae.push("UZ"), ge[3] && Ae.push("RX"), ge[4] && Ae.push("RY"), ge[5] && Ae.push("RZ"), Ae.length > 0) {
        const Ve = ve(Se);
        W.push(`  POINTASSIGN  "${Ve.pt}"  "${Ve.story}"  RESTRAINT "${Ae.join(" ")}"  `);
      }
    }), W.push(""), W.push("$ LINE ASSIGNS"), He.forEach((ge) => W.push(ge)), W.push("");
    const je = [];
    if (O.forEach((ge, Se) => {
      if (ge.length === 4) {
        const Ae = g[ge[0]], Ve = g[ge[1]], at = g[ge[2]], Xe = [
          Ve[0] - Ae[0],
          Ve[1] - Ae[1],
          Ve[2] - Ae[2]
        ], lt = [
          at[0] - Ae[0],
          at[1] - Ae[1],
          at[2] - Ae[2]
        ], pt = Math.abs(Xe[2] * lt[0] - Xe[0] * lt[2]), $t = Math.sqrt((Xe[1] * lt[2] - Xe[2] * lt[1]) ** 2 + pt ** 2 + (Xe[0] * lt[1] - Xe[1] * lt[0]) ** 2), At = $t > 1e-10 && pt / $t < 0.5;
        je.push({
          idx: Se,
          el: ge,
          isWall: At
        });
      }
    }), je.some((ge) => !ge.isWall)) {
      W.push("$ SLAB PROPERTIES");
      const ge = ((_c = V.thicknesses) == null ? void 0 : _c.values().next().value) ?? 0.15;
      W.push(`  SHELLPROP  "Losa"  PROPTYPE  "Slab"  MATERIAL "${_.values().next().value || "Mat_1"}"  MODELINGTYPE "ShellThin"  SLABTYPE "Slab"  SLABTHICKNESS ${ge} `), W.push("");
    }
    if (je.some((ge) => ge.isWall)) {
      W.push("$ WALL PROPERTIES");
      const ge = ((_d = V.thicknesses) == null ? void 0 : _d.values().next().value) ?? 0.2;
      W.push(`  SHELLPROP  "Muro"  PROPTYPE  "Wall"  MATERIAL "${_.values().next().value || "Mat_1"}"  MODELINGTYPE "ShellThick"  WALLTHICKNESS ${ge} `), W.push("");
    }
    if (je.length > 0) {
      W.push("$ AREA CONNECTIVITIES");
      const ge = [];
      je.forEach((Se, Ae) => {
        const { el: Ve, isWall: at } = Se, Xe = at ? `W${Ae + 1}` : `F${Ae + 1}`, lt = at ? "PANEL" : "FLOOR", pt = Ve.map(($t) => ve($t));
        if (at) {
          const $t = g[Ve[0]][1] <= g[Ve[2]][1] ? 0 : 2, At = g[Ve[1]][1] <= g[Ve[3]][1] ? 1 : 3;
          W.push(`  AREA "${Xe}"  ${lt}  4  "${pt[$t].pt}"  "${pt[At].pt}"  "${pt[At].pt}"  "${pt[$t].pt}"  1  1  0  0  `);
          const Rt = pt[$t === 0 ? 2 : 0].story;
          ge.push(`  AREAASSIGN  "${Xe}"  "${Rt}"  SECTION "Muro"  OBJMESHTYPE "DEFAULT"  ADDRESTRAINT "Yes"  CARDINALPOINT "MIDDLE"  TRANSFORMSTIFFNESSFOROFFSETS "No"  `);
        } else W.push(`  AREA "${Xe}"  ${lt}  4  "${pt[0].pt}"  "${pt[1].pt}"  "${pt[2].pt}"  "${pt[3].pt}"  0  0  0  0  `), ge.push(`  AREAASSIGN  "${Xe}"  "${pt[0].story}"  SECTION "Losa"  DIAPH  "D1"  OBJMESHTYPE "DEFAULT"  ADDRESTRAINT "Yes"  CARDINALPOINT "TOP"  TRANSFORMSTIFFNESSFOROFFSETS "No"  `);
      }), W.push(""), W.push("$ AREA ASSIGNS"), ge.forEach((Se) => W.push(Se)), W.push("");
    }
    return W.push("$ LOAD PATTERNS"), W.push('  LOADPATTERN "Dead"  TYPE  "Dead"  SELFWEIGHT  1'), W.push('  LOADPATTERN "Live"  TYPE  "Live"  SELFWEIGHT  0'), W.push(""), M.loads && M.loads.size > 0 && (W.push("$ POINT OBJECT LOADS"), M.loads.forEach((ge, Se) => {
      const [Ae, Ve, at] = ge, Xe = ve(Se);
      Math.abs(Ae) > 1e-10 && W.push(`  POINTLOAD  "${Xe.pt}"  "${Xe.story}"  "Dead"  TYPE "FORCE"  FX ${Ae}`), Math.abs(Ve) > 1e-10 && W.push(`  POINTLOAD  "${Xe.pt}"  "${Xe.story}"  "Dead"  TYPE "FORCE"  FY ${Ve}`), Math.abs(at) > 1e-10 && W.push(`  POINTLOAD  "${Xe.pt}"  "${Xe.story}"  "Dead"  TYPE "FORCE"  FZ ${at}`);
    }), W.push("")), W.push("  END"), W.push("$ END OF MODEL FILE"), W.join(`\r
`);
  }
  function Ol(e, g) {
    const O = e[g[0]], M = e[g[1]], V = Math.abs(M[1] - O[1]), H = Math.sqrt((M[0] - O[0]) ** 2 + (M[2] - O[2]) ** 2), X = V > H * 0.5;
    return X && H > 0.01 ? "BRACE" : X ? "COLUMN" : "BEAM";
  }
  function Nl(e) {
    var _a, _b;
    const { nodes: g, elements: O, nodeInputs: M, elementInputs: V } = e, H = [];
    return H.push("# OpenSeesPy model exported from Awatif FEM Studio"), H.push(`# ${g.length} nodes, ${O.length} elements`), H.push(""), H.push("import openseespy.opensees as ops"), H.push(""), H.push("ops.wipe()"), H.push("ops.model('basic', '-ndm', 3, '-ndf', 6)"), H.push(""), H.push("# --- Nodes ---"), g.forEach((X, J) => {
      H.push(`ops.node(${J + 1}, ${X[0]}, ${X[1]}, ${X[2]})`);
    }), H.push(""), H.push("# --- Boundary Conditions ---"), (_a = M.supports) == null ? void 0 : _a.forEach((X, J) => {
      const j = X.map((W) => W ? 1 : 0).join(", ");
      H.push(`ops.fix(${J + 1}, ${j})`);
    }), H.push(""), H.push("# --- Geometric Transformations ---"), H.push("ops.geomTransf('Linear', 1, 0.0, 0.0, 1.0)  # beams (vecxz = Z)"), H.push("ops.geomTransf('Linear', 2, -1.0, 0.0, 0.0)  # columns (vecxz = -X)"), H.push(""), H.push("# --- Elements (elasticBeamColumn) ---"), O.forEach((X, J) => {
      var _a2, _b2, _c, _d, _e, _f;
      if (X.length !== 2) return;
      const j = g[X[0]], W = g[X[1]], A = Math.abs(W[2] - j[2]) > Math.max(Math.abs(W[0] - j[0]), Math.abs(W[1] - j[1])) ? 2 : 1, Q = ((_a2 = V.areas) == null ? void 0 : _a2.get(J)) ?? 1, $e = ((_b2 = V.elasticities) == null ? void 0 : _b2.get(J)) ?? 2e5, ce = ((_c = V.shearModuli) == null ? void 0 : _c.get(J)) ?? 8e4, ie = ((_d = V.torsionalConstants) == null ? void 0 : _d.get(J)) ?? 1, ne = ((_e = V.momentsOfInertiaY) == null ? void 0 : _e.get(J)) ?? 1, _ = ((_f = V.momentsOfInertiaZ) == null ? void 0 : _f.get(J)) ?? 1;
      H.push(`ops.element('elasticBeamColumn', ${J + 1}, ${X[0] + 1}, ${X[1] + 1}, ${Q}, ${$e}, ${ce}, ${ie}, ${ne}, ${_}, ${A})`);
    }), H.push(""), M.loads && M.loads.size > 0 && (H.push("# --- Loads ---"), H.push("ops.timeSeries('Linear', 1)"), H.push("ops.pattern('Plain', 1, 1)"), M.loads.forEach((X, J) => {
      const j = X.map((W) => W).join(", ");
      H.push(`ops.load(${J + 1}, ${j})`);
    }), H.push("")), H.push("# --- Analysis ---"), H.push("ops.system('BandGeneral')"), H.push("ops.numberer('RCM')"), H.push("ops.constraints('Plain')"), H.push("ops.integrator('LoadControl', 1.0)"), H.push("ops.algorithm('Linear')"), H.push("ops.analysis('Static')"), H.push("ops.analyze(1)"), H.push(""), H.push("# --- Results ---"), H.push('print("\\n=== Displacements ===")'), g.forEach((X, J) => {
      H.push(`print(f"Node {${J + 1}}: {ops.nodeDisp(${J + 1})}")`);
    }), H.push(""), H.push('print("\\n=== Reactions ===")'), H.push("ops.reactions()"), (_b = M.supports) == null ? void 0 : _b.forEach((X, J) => {
      H.push(`print(f"Node {${J + 1}}: {ops.nodeReaction(${J + 1})}")`);
    }), H.join(`
`);
  }
  function ql(e) {
    var _a, _b;
    const { nodes: g, elements: O, nodeInputs: M, elementInputs: V } = e, H = [];
    return H.push("# OpenSees Tcl model exported from Awatif FEM Studio"), H.push(`# ${g.length} nodes, ${O.length} elements`), H.push(""), H.push("wipe"), H.push("model basic -ndm 3 -ndf 6"), H.push(""), H.push("# --- Nodes ---"), g.forEach((X, J) => {
      H.push(`node ${J + 1} ${X[0]} ${X[1]} ${X[2]}`);
    }), H.push(""), H.push("# --- Boundary Conditions ---"), (_a = M.supports) == null ? void 0 : _a.forEach((X, J) => {
      const j = X.map((W) => W ? 1 : 0).join(" ");
      H.push(`fix ${J + 1} ${j}`);
    }), H.push(""), H.push("# --- Geometric Transformations ---"), H.push("geomTransf Linear 1 0.0 0.0 1.0"), H.push("geomTransf Linear 2 -1.0 0.0 0.0"), H.push(""), H.push("# --- Elements ---"), O.forEach((X, J) => {
      var _a2, _b2, _c, _d, _e, _f;
      if (X.length !== 2) return;
      const j = g[X[0]], W = g[X[1]], A = Math.abs(W[2] - j[2]) > Math.max(Math.abs(W[0] - j[0]), Math.abs(W[1] - j[1])) ? 2 : 1, Q = ((_a2 = V.areas) == null ? void 0 : _a2.get(J)) ?? 1, $e = ((_b2 = V.elasticities) == null ? void 0 : _b2.get(J)) ?? 2e5, ce = ((_c = V.shearModuli) == null ? void 0 : _c.get(J)) ?? 8e4, ie = ((_d = V.torsionalConstants) == null ? void 0 : _d.get(J)) ?? 1, ne = ((_e = V.momentsOfInertiaY) == null ? void 0 : _e.get(J)) ?? 1, _ = ((_f = V.momentsOfInertiaZ) == null ? void 0 : _f.get(J)) ?? 1;
      H.push(`element elasticBeamColumn ${J + 1} ${X[0] + 1} ${X[1] + 1} ${Q} ${$e} ${ce} ${ie} ${ne} ${_} ${A}`);
    }), H.push(""), M.loads && M.loads.size > 0 && (H.push("# --- Loads ---"), H.push("timeSeries Linear 1"), H.push("pattern Plain 1 1 {"), M.loads.forEach((X, J) => {
      const j = X.map((W) => W).join(" ");
      H.push(`  load ${J + 1} ${j}`);
    }), H.push("}"), H.push("")), H.push("# --- Analysis ---"), H.push("system BandGeneral"), H.push("numberer RCM"), H.push("constraints Plain"), H.push("integrator LoadControl 1.0"), H.push("algorithm Linear"), H.push("analysis Static"), H.push("analyze 1"), H.push(""), H.push("# --- Results ---"), H.push('puts "\\n=== Displacements ==="'), g.forEach((X, J) => {
      H.push(`puts "Node ${J + 1}: [nodeDisp ${J + 1}]"`);
    }), H.push('puts "\\n=== Reactions ==="'), H.push("reactions"), (_b = M.supports) == null ? void 0 : _b.forEach((X, J) => {
      H.push(`puts "Node ${J + 1}: [nodeReaction ${J + 1}]"`);
    }), H.join(`
`);
  }
  function _l(e) {
    const g = [], O = [], M = /* @__PURE__ */ new Map(), V = /* @__PURE__ */ new Map(), H = /* @__PURE__ */ new Map(), X = /* @__PURE__ */ new Map(), J = /* @__PURE__ */ new Map(), j = /* @__PURE__ */ new Map(), W = /* @__PURE__ */ new Map(), he = /* @__PURE__ */ new Map(), A = /* @__PURE__ */ new Map(), Q = /* @__PURE__ */ new Map();
    for (const $e of e.split(/\r?\n/)) {
      const ce = $e.trim(), ie = ce.match(/ops\.node\(\s*(\d+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)/);
      if (ie) {
        const Y = parseInt(ie[1]), pe = g.length;
        g.push([
          parseFloat(ie[2]),
          parseFloat(ie[3]),
          parseFloat(ie[4])
        ]), A.set(Y, pe);
        continue;
      }
      const ne = ce.match(/ops\.fix\(\s*(\d+)\s*,\s*(\d)\s*,\s*(\d)\s*,\s*(\d)\s*,\s*(\d)\s*,\s*(\d)\s*,\s*(\d)/);
      if (ne) {
        const Y = parseInt(ne[1]), pe = A.get(Y);
        pe !== void 0 && M.set(pe, [
          ne[2] === "1",
          ne[3] === "1",
          ne[4] === "1",
          ne[5] === "1",
          ne[6] === "1",
          ne[7] === "1"
        ]);
        continue;
      }
      const _ = ce.match(/ops\.element\(\s*'elasticBeamColumn'\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)/);
      if (_) {
        const Y = parseInt(_[1]), pe = A.get(parseInt(_[2])), Me = A.get(parseInt(_[3]));
        if (pe !== void 0 && Me !== void 0) {
          const ze = O.length;
          O.push([
            pe,
            Me
          ]), Q.set(Y, ze), J.set(ze, parseFloat(_[4])), H.set(ze, parseFloat(_[5])), X.set(ze, parseFloat(_[6])), he.set(ze, parseFloat(_[7])), j.set(ze, parseFloat(_[8])), W.set(ze, parseFloat(_[9]));
        }
        continue;
      }
      const D = ce.match(/ops\.load\(\s*(\d+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)/);
      if (D) {
        const Y = A.get(parseInt(D[1]));
        Y !== void 0 && V.set(Y, [
          parseFloat(D[2]),
          parseFloat(D[3]),
          parseFloat(D[4]),
          parseFloat(D[5]),
          parseFloat(D[6]),
          parseFloat(D[7])
        ]);
      }
    }
    return {
      nodes: g,
      elements: O,
      nodeInputs: {
        supports: M,
        loads: V
      },
      elementInputs: {
        elasticities: H,
        shearModuli: X,
        areas: J,
        momentsOfInertiaY: j,
        momentsOfInertiaZ: W,
        torsionalConstants: he
      }
    };
  }
  function Bl(e) {
    const g = [], O = [], M = /* @__PURE__ */ new Map(), V = /* @__PURE__ */ new Map(), H = /* @__PURE__ */ new Map(), X = /* @__PURE__ */ new Map(), J = /* @__PURE__ */ new Map(), j = /* @__PURE__ */ new Map(), W = /* @__PURE__ */ new Map(), he = /* @__PURE__ */ new Map(), A = /* @__PURE__ */ new Map();
    for (const Q of e.split(/\r?\n/)) {
      const $e = Q.trim();
      if ($e.startsWith("#") || $e.startsWith("//")) continue;
      const ce = $e.split(/\s+/);
      if (ce[0] === "node" && ce.length >= 5) {
        const ie = parseInt(ce[1]), ne = g.length;
        g.push([
          parseFloat(ce[2]),
          parseFloat(ce[3]),
          parseFloat(ce[4])
        ]), A.set(ie, ne);
        continue;
      }
      if (ce[0] === "fix" && ce.length >= 8) {
        const ie = A.get(parseInt(ce[1]));
        ie !== void 0 && M.set(ie, [
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
        const ie = A.get(parseInt(ce[3])), ne = A.get(parseInt(ce[4]));
        if (ie !== void 0 && ne !== void 0) {
          const _ = O.length;
          O.push([
            ie,
            ne
          ]), J.set(_, parseFloat(ce[5])), H.set(_, parseFloat(ce[6])), X.set(_, parseFloat(ce[7])), he.set(_, parseFloat(ce[8])), j.set(_, parseFloat(ce[9])), W.set(_, parseFloat(ce[10]));
        }
        continue;
      }
      if (ce[0] === "load" && ce.length >= 8) {
        const ie = A.get(parseInt(ce[1]));
        ie !== void 0 && V.set(ie, [
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
      elements: O,
      nodeInputs: {
        supports: M,
        loads: V
      },
      elementInputs: {
        elasticities: H,
        shearModuli: X,
        areas: J,
        momentsOfInertiaY: j,
        momentsOfInertiaZ: W,
        torsionalConstants: he
      }
    };
  }
  function Xt(e) {
    const g = [];
    let O = 0, M = false, V = "";
    for (let H = 0; H < e.length; H++) {
      const X = e[H];
      if (X === "'" && (H === 0 || e[H - 1] !== "\\")) {
        M = !M, V += X;
        continue;
      }
      if (M) {
        V += X;
        continue;
      }
      if (X === "(") {
        O++, V += X;
        continue;
      }
      if (X === ")") {
        O--, V += X;
        continue;
      }
      if (X === "," && O === 0) {
        g.push(V.trim()), V = "";
        continue;
      }
      V += X;
    }
    return V.trim() && g.push(V.trim()), g;
  }
  function ua(e, g) {
    const O = Xt(e);
    if (g < O.length) {
      let M = O[g].trim();
      return M.startsWith("'") && M.endsWith("'") && (M = M.slice(1, -1)), M === "$" ? null : M;
    }
    return null;
  }
  function Dl(e) {
    const g = {
      schema: "",
      project: "",
      app: ""
    }, O = {}, M = {}, V = e.match(/FILE_SCHEMA\s*\(\s*\(\s*'([^']*)'/i);
    V && (g.schema = V[1]);
    const H = /^#(\d+)\s*=\s*([A-Z][A-Z0-9_]*)\s*\(([\s\S]*?)\)\s*;\s*$/gm;
    let X;
    for (; (X = H.exec(e)) !== null; ) {
      const J = parseInt(X[1]), j = X[2].toUpperCase();
      O[J] = {
        id: J,
        type: j,
        args: X[3]
      }, M[j] || (M[j] = []), M[j].push(J);
    }
    if (M.IFCPROJECT) {
      const J = O[M.IFCPROJECT[0]];
      if (J) {
        const j = ua(J.args, 2);
        j && (g.project = j);
      }
    }
    return {
      meta: g,
      entities: O,
      typeIndex: M
    };
  }
  function Gt(e, g) {
    const O = g.match(/#(\d+)/);
    return O && e[parseInt(O[1])] || null;
  }
  function ma(e, g) {
    const O = Xt(g.args), M = Gt(e, O[0]), V = M ? Hl(e, M) : [
      0,
      0,
      0
    ];
    let H = [
      0,
      0,
      1
    ], X = [
      1,
      0,
      0
    ];
    if (O[1] && O[1] !== "$") {
      const J = Gt(e, O[1]);
      J && (H = ia(e, J));
    }
    if (O[2] && O[2] !== "$") {
      const J = Gt(e, O[2]);
      J && (X = ia(e, J));
    }
    return {
      origin: V,
      dirZ: H,
      dirX: X
    };
  }
  function Hl(e, g) {
    return g.args.replace(/[()]/g, "").split(",").map((M) => parseFloat(M.trim())).filter((M) => !isNaN(M));
  }
  function ia(e, g) {
    return g.args.replace(/[()]/g, "").split(",").map((M) => parseFloat(M.trim())).filter((M) => !isNaN(M));
  }
  function ba(e, g) {
    const O = Xt(g.args), M = Gt(e, O[1]);
    let V = {
      origin: [
        0,
        0,
        0
      ],
      dirZ: [
        0,
        0,
        1
      ],
      dirX: [
        1,
        0,
        0
      ]
    };
    if (M && (V = ma(e, M)), O[0] && O[0] !== "$") {
      const H = Gt(e, O[0]);
      if (H && H.type === "IFCLOCALPLACEMENT") {
        const X = ba(e, H), J = ns(V.origin, X.dirX, ts(X.dirZ, X.dirX), X.dirZ);
        V.origin = [
          X.origin[0] + J[0],
          X.origin[1] + J[1],
          X.origin[2] + J[2]
        ], V.dirZ = ns(V.dirZ, X.dirX, ts(X.dirZ, X.dirX), X.dirZ), V.dirX = ns(V.dirX, X.dirX, ts(X.dirZ, X.dirX), X.dirZ);
      }
    }
    return V;
  }
  function ts(e, g) {
    return [
      e[1] * g[2] - e[2] * g[1],
      e[2] * g[0] - e[0] * g[2],
      e[0] * g[1] - e[1] * g[0]
    ];
  }
  function ns(e, g, O, M) {
    return [
      e[0] * g[0] + e[1] * O[0] + e[2] * M[0],
      e[0] * g[1] + e[1] * O[1] + e[2] * M[1],
      e[0] * g[2] + e[1] * O[2] + e[2] * M[2]
    ];
  }
  const jl = 0.01;
  function Wl(e) {
    const g = Dl(e), { entities: O, typeIndex: M } = g, V = [], H = [], X = /* @__PURE__ */ new Map();
    X.set("Hormigon", {
      E: 2132888792e-2,
      nu: 0.2,
      rho: 2.4
    }), X.set("Acero", {
      E: 2e8,
      nu: 0.3,
      rho: 7.85
    });
    let J = 0, j = 0;
    function W(ne, _, D) {
      for (const Y of V) {
        const pe = Y.x - ne, Me = Y.y - _, ze = Y.z - D;
        if (Math.sqrt(pe * pe + Me * Me + ze * ze) < jl) return Y.id;
      }
      return V.push({
        id: J,
        x: ne,
        y: _,
        z: D
      }), J++;
    }
    function he(ne) {
      const _ = ua(ne.args, 2) || "", D = M.IFCRELASSOCIATESMATERIAL || [];
      for (const pe of D) {
        const Me = O[pe];
        if (!Me) continue;
        const ze = Xt(Me.args);
        if ((ze[4] || ze[3] || "").includes(`#${ne.id}`)) {
          const ve = ze[5] || ze[4] || "", He = Gt(O, ve);
          if (He) return A(He);
        }
      }
      const Y = _.match(/(\d+)\s*[xX×]\s*(\d+)/);
      return Y ? {
        b: parseFloat(Y[1]) / 100,
        h: parseFloat(Y[2]) / 100,
        name: _
      } : {
        b: 0.3,
        h: 0.3,
        name: _ || "Default"
      };
    }
    function A(ne) {
      const _ = ne.type;
      if (_ === "IFCRECTANGLEPROFILEDEF") {
        const D = Xt(ne.args), Y = (D[1] || "").replace(/'/g, ""), pe = parseFloat(D[3]) || 0.3, Me = parseFloat(D[4]) || 0.3;
        return {
          b: pe,
          h: Me,
          name: Y
        };
      }
      if (_ === "IFCMATERIALPROFILE") {
        const D = Xt(ne.args), Y = D[2] || D[1] || "", pe = Gt(O, Y);
        if (pe) return A(pe);
      }
      if (_ === "IFCMATERIALPROFILESET") {
        const D = Xt(ne.args), pe = (D[2] || D[1] || "").match(/#(\d+)/);
        if (pe) {
          const Me = O[parseInt(pe[1])];
          if (Me) return A(Me);
        }
      }
      if (_ === "IFCMATERIALPROFILESETUSAGE") {
        const Y = Xt(ne.args)[0], pe = Gt(O, Y);
        if (pe) return A(pe);
      }
      return {
        b: 0.3,
        h: 0.3,
        name: "Unknown"
      };
    }
    function Q(ne, _, D, Y) {
      const pe = M[ne] || [];
      for (const Me of pe) {
        const ze = O[Me];
        if (!ze) continue;
        const Ue = Xt(ze.args), ve = Ue[5] || Ue[4] || "", He = Gt(O, ve);
        if (!He) continue;
        const je = ba(O, He), ge = he(ze);
        let Se = Y, Ae = null, Ve = null;
        const at = Ue[6] || Ue[5] || "", Xe = Gt(O, at);
        if (Xe) {
          const mt = Mo(O, Xe);
          mt && (Se = mt.depth || Y, Ae = mt.origin, Ve = mt.direction);
        }
        const lt = Ae ? Ae[0] : je.origin[0], pt = Ae ? Ae[1] : je.origin[1], $t = Ae ? Ae[2] : je.origin[2], At = Ve || (D === "Z" ? je.dirZ : je.dirX), Rt = W(lt, pt, $t), ht = W(lt + At[0] * Se, pt + At[1] * Se, $t + At[2] * Se);
        H.push({
          id: j++,
          type: "frame",
          nodeIds: [
            Rt,
            ht
          ],
          category: _,
          sectionName: ge.name,
          b: ge.b,
          h: ge.h,
          material: "Hormigon",
          expressID: Me
        });
      }
    }
    Q("IFCCOLUMN", "column", "Z", 3), Q("IFCBEAM", "beam", "X", 5), Q("IFCMEMBER", "diagonal", "X", 4), Q("IFCPILE", "pile", "Z", 10), Q("IFCSTAIRFLIGHT", "stair", "X", 3), Q("IFCRAMPFLIGHT", "ramp", "X", 4);
    function $e(ne, _, D) {
      const Y = M[ne] || [];
      for (const pe of Y) {
        const Me = O[pe];
        if (!Me) continue;
        const ze = Xt(Me.args), Ue = ze[5] || ze[4] || "";
        if (!Gt(O, Ue)) continue;
        let He = D;
        const je = ze[6] || ze[5] || "", ge = Gt(O, je);
        ge && (He = Gl(O, ge) || D);
        const Se = _ === "slab" ? `Losa e=${(He * 100).toFixed(0)}cm` : _ === "wall" ? `Muro e=${(He * 100).toFixed(0)}cm` : _ === "footing" ? `Zapata e=${(He * 100).toFixed(0)}cm` : `${_} e=${(He * 100).toFixed(0)}cm`;
        H.push({
          id: j++,
          type: "shell",
          nodeIds: [],
          category: _,
          sectionName: Se,
          b: He,
          h: He,
          material: "Hormigon",
          expressID: pe
        });
      }
    }
    $e("IFCSLAB", "slab", 0.15), $e("IFCWALL", "wall", 0.2), $e("IFCWALLSTANDARDCASE", "wall", 0.2), $e("IFCFOOTING", "footing", 0.5), $e("IFCROOF", "slab", 0.12);
    const ce = [], ie = M.IFCBUILDINGSTOREY || [];
    for (const ne of ie) {
      const _ = O[ne];
      if (!_) continue;
      const D = Xt(_.args), Y = (D[2] || "").replace(/'/g, ""), pe = parseFloat(D[9]) || 0;
      ce.push({
        name: Y,
        elevation: pe
      });
    }
    return ce.sort((ne, _) => ne.elevation - _.elevation), {
      nodes: V,
      elements: H,
      materials: X,
      levels: ce,
      projectName: g.meta.project,
      schema: g.meta.schema
    };
  }
  function Mo(e, g) {
    const O = Xt(g.args);
    for (const M of O) {
      const V = M.match(/#(\d+)/g) || [];
      for (const H of V) {
        const X = parseInt(H.replace("#", "")), J = e[X];
        if (J) {
          if (J.type === "IFCEXTRUDEDAREASOLID") {
            const j = Xt(J.args), W = parseFloat(j[3]) || 0, he = Gt(e, j[1]);
            let A = [
              0,
              0,
              0
            ];
            he && (A = ma(e, he).origin);
            const Q = Gt(e, j[2]);
            let $e = [
              0,
              0,
              1
            ];
            if (Q && Q.type === "IFCDIRECTION") {
              const ce = Q.args.match(/[-+]?\d*\.?\d+(?:[eE][-+]?\d+)?/g);
              ce && ce.length >= 3 && ($e = ce.map(Number));
            }
            return {
              depth: W,
              origin: A,
              direction: $e
            };
          }
          if (J.type === "IFCSHAPEREPRESENTATION") {
            const j = Mo(e, J);
            if (j) return j;
          }
          if (J.type === "IFCMAPPEDITEM") {
            const j = Xt(J.args), W = Gt(e, j[0]);
            if (W && W.type === "IFCREPRESENTATIONMAP") {
              const he = Xt(W.args), A = Gt(e, he[1]);
              if (A) {
                const Q = Mo(e, A);
                if (Q) return Q;
              }
            }
          }
        }
      }
    }
    return null;
  }
  function Gl(e, g) {
    const O = Mo(e, g);
    return O ? O.depth : null;
  }
  const ga = [
    [
      843113511,
      "column"
    ],
    [
      753842376,
      "beam"
    ],
    [
      1529196076,
      "slab"
    ],
    [
      900683007,
      "footing"
    ],
    [
      1687234759,
      "footing"
    ],
    [
      979691226,
      "rebar"
    ],
    [
      2320036040,
      "rebar"
    ],
    [
      3171933400,
      "plate"
    ],
    [
      1073191201,
      "member"
    ],
    [
      377706215,
      "fastener"
    ],
    [
      2391406946,
      "wall"
    ],
    [
      3512223829,
      "wall"
    ],
    [
      3304561284,
      "opening"
    ],
    [
      395920057,
      "opening"
    ]
  ], ha = [
    "column",
    "beam",
    "slab",
    "footing",
    "rebar",
    "plate",
    "member",
    "fastener",
    "wall",
    "opening",
    "other"
  ], xa = /* @__PURE__ */ new Map();
  for (const [e, g] of ga) xa.set(e, g);
  function Yl(e) {
    return xa.get(e) ?? "other";
  }
  new Set(ha);
  async function Jl(e, g) {
    var _a, _b;
    const O = window.WebIFC;
    if (!O) throw new Error("web-ifc no disponible. Verifica que web-ifc-api-iife.js se carg\xF3.");
    const M = new O.IfcAPI(), V = window.location.pathname.replace(/\/[^/]*$/, "/");
    M.SetWasmPath(V), await M.Init();
    const H = M.OpenModel(new Uint8Array(g)), X = /* @__PURE__ */ new Map(), J = /* @__PURE__ */ new Map(), j = {
      843113511: "Columna",
      753842376: "Viga",
      1529196076: "Losa",
      900683007: "Zapata",
      1687234759: "Pilote",
      979691226: "Barra Refuerzo",
      2320036040: "Malla Refuerzo",
      3171933400: "Placa",
      1073191201: "Miembro",
      377706215: "Perno/Anclaje",
      2391406946: "Muro",
      3512223829: "Muro",
      3304561284: "Ventana",
      395920057: "Puerta"
    };
    for (const [$e] of ga) {
      const ce = Yl($e);
      try {
        const ie = M.GetLineIDsWithType(H, $e);
        for (let ne = 0; ne < ie.size(); ne++) {
          const _ = ie.get(ne);
          X.set(_, ce);
          let D = "";
          try {
            const Y = M.GetLine(H, _);
            D = ((_a = Y == null ? void 0 : Y.Name) == null ? void 0 : _a.value) || ((_b = Y == null ? void 0 : Y.Description) == null ? void 0 : _b.value) || "";
          } catch {
          }
          J.set(_, {
            expressID: _,
            category: ce,
            name: D,
            typeName: j[$e] || "Otro"
          });
        }
      } catch {
      }
    }
    const W = /* @__PURE__ */ new Map();
    for (const $e of ha) {
      const ce = new ao();
      ce.name = `ifc-${$e}`, e.add(ce), W.set($e, ce);
    }
    const he = new el();
    let A = 0;
    const Q = new na({
      color: 13421772,
      transparent: true,
      opacity: 0.9,
      side: oa
    });
    return M.StreamAllMeshes(H, ($e) => {
      const ce = X.get($e.expressID) ?? "other", ie = W.get(ce), ne = $e.geometries;
      for (let _ = 0; _ < ne.size(); _++) {
        const D = ne.get(_), Y = M.GetGeometry(H, D.geometryExpressID), pe = M.GetVertexArray(Y.GetVertexData(), Y.GetVertexDataSize()), Me = M.GetIndexArray(Y.GetIndexData(), Y.GetIndexDataSize()), ze = new nn(), Ue = new Float32Array(pe.length / 2), ve = new Float32Array(pe.length / 2);
        for (let Ae = 0; Ae < pe.length; Ae += 6) {
          const Ve = Ae / 2;
          Ue[Ve] = pe[Ae], Ue[Ve + 1] = pe[Ae + 1], Ue[Ve + 2] = pe[Ae + 2], ve[Ve] = pe[Ae + 3], ve[Ve + 1] = pe[Ae + 4], ve[Ve + 2] = pe[Ae + 5];
        }
        ze.setAttribute("position", new vo(Ue, 3)), ze.setAttribute("normal", new vo(ve, 3)), ze.setIndex(new vo(new Uint32Array(Me), 1));
        const He = new tl();
        He.fromArray(D.flatTransformation);
        let je;
        const ge = D.color;
        ge && (ge.x !== 1 || ge.y !== 1 || ge.z !== 1) ? je = new na({
          color: new nl(ge.x, ge.y, ge.z),
          transparent: ge.w < 1,
          opacity: ge.w,
          side: oa
        }) : je = Q, je._origOpacity = je.opacity;
        const Se = new da(ze, je);
        Se.applyMatrix4(He), Se.userData.expressID = $e.expressID, Se.userData.category = ce, ie.add(Se), he.expandByObject(Se), A++, Y.delete();
      }
    }), M.CloseModel(H), {
      meshCount: A,
      bbox: he,
      detailCategories: W,
      elementInfo: J
    };
  }
  ca = Vn.state(false);
  tr = function(e) {
    e.nodeInputs || (e.nodeInputs = Vn.state({})), e.elementInputs || (e.elementInputs = Vn.state({})), e.deformOutputs || (e.deformOutputs = Vn.state({})), e.analyzeOutputs || (e.analyzeOutputs = Vn.state({}));
    let g = "tonf", O = "m", M = Pn(g, O), V = {
      forceId: "kgf",
      lengthId: "cm",
      label: "kgf/cm\xB2"
    };
    const H = {
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
    }, X = /* @__PURE__ */ new Set(), J = /* @__PURE__ */ new Set();
    let j = false;
    const W = /* @__PURE__ */ new Set(), he = /* @__PURE__ */ new Map();
    let A = "", Q = {}, $e = null, ce = "", ie = [], ne = [], _ = [], D = /* @__PURE__ */ new Set(), Y = /* @__PURE__ */ new Set(), pe = /* @__PURE__ */ new Set(), Me = /* @__PURE__ */ new Map(), ze = /* @__PURE__ */ new Map(), Ue = null, ve = [], He = 0.2, je = 2, ge = 2, Se = false, Ae = 2, Ve = "x", at = /* @__PURE__ */ new Set(), Xe = true, lt = 0.15, pt = 2, $t = 2, At = /* @__PURE__ */ new Set(), Rt = false, ht = "perimeter";
    const mt = () => ({
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
    }), cn = (t, n) => ({
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
      }, mt),
      vigasY: Array.from({
        length: n
      }, mt)
    }), qe = {
      colMat: 0,
      vigaMat: 0,
      colShape: 0,
      fc: 20594,
      steelColType: 0,
      steelVigaType: 0,
      perFloor: []
    };
    let vt = 0, Ce = 3, _e = false, ye = 0, Fe = null, xe = 0, Te = [], Ye = 1, Be = true;
    const ct = ul();
    ct.div.style.display = "none";
    function bt() {
      const t = mo()[A];
      return t && t[vt] ? t[vt].dofs : [
        true,
        true,
        true,
        true,
        true,
        true
      ];
    }
    let Ge = [], Ke = [], ft = 0, rt = [], gt = null;
    function jt() {
      if (!gt) return;
      const t = Qe();
      t && t.scene.remove(gt), gt.traverse((n) => {
        if (n.geometry && n.geometry.dispose(), n.material) {
          const o = n.material;
          o.map && o.map.dispose(), o.dispose();
        }
      }), gt = null;
    }
    function ls(t, n, o, l, s) {
      jt();
      const d = Qe();
      if (!d) return;
      gt = new ao(), gt.name = "refGrid";
      const a = Math.min(...t), r = Math.max(...t), f = Math.min(...n), i = Math.max(...n), c = Math.max(...o), b = r - a || 1, w = i - f || 1, E = 3359829, $ = 2241348;
      for (const x of o) {
        for (const T of n) {
          const L = new nn().setFromPoints([
            new Ne(a, x, T),
            new Ne(r, x, T)
          ]), k = new Gn({
            color: E,
            dashSize: b * 0.015,
            gapSize: b * 0.01,
            transparent: true,
            opacity: 0.25
          }), z = new Fn(L, k);
          z.computeLineDistances(), z.renderOrder = -10, gt.add(z);
        }
        for (const T of t) {
          const L = new nn().setFromPoints([
            new Ne(T, x, f),
            new Ne(T, x, i)
          ]), k = new Gn({
            color: E,
            dashSize: w * 0.015,
            gapSize: w * 0.01,
            transparent: true,
            opacity: 0.25
          }), z = new Fn(L, k);
          z.computeLineDistances(), z.renderOrder = -10, gt.add(z);
        }
      }
      for (const x of t) for (const T of n) {
        const L = new nn().setFromPoints([
          new Ne(x, 0, T),
          new Ne(x, c, T)
        ]), k = new Gn({
          color: $,
          dashSize: c * 0.01,
          gapSize: c * 8e-3,
          transparent: true,
          opacity: 0.15
        }), z = new Fn(L, k);
        z.computeLineDistances(), z.renderOrder = -10, gt.add(z);
      }
      const p = Math.min(b, w) * 0.015;
      for (const x of o) for (const T of t) for (const L of n) {
        const k = [
          new Ne(T - p, x, L),
          new Ne(T + p, x, L),
          new Ne(T, x, L - p),
          new Ne(T, x, L + p)
        ], z = new nn().setFromPoints(k), P = new Jn({
          color: 5596791,
          transparent: true,
          opacity: 0.4
        }), v = new Yn(z, P);
        v.renderOrder = -5, gt.add(v);
      }
      gt.traverse((x) => {
        x.material && (Array.isArray(x.material) ? x.material.forEach((T) => {
          T.clippingPlanes = [];
        }) : x.material.clippingPlanes = []);
      }), d.scene.add(gt), d.render();
    }
    let Ot = null;
    function rs() {
      if (!Ot) return;
      const t = Qe();
      t && t.scene.remove(Ot), Ot.traverse((n) => {
        if (n.geometry && n.geometry.dispose(), n.material) {
          const o = n.material;
          o.map && o.map.dispose(), o.dispose();
        }
      }), Ot = null;
    }
    function Kn(t, n, o, l, s) {
      rs();
      const d = Qe();
      if (!d) return;
      Ot = new ao(), Ot.name = "gridAxes";
      const a = Math.min(...t), r = Math.max(...t), f = Math.min(...n), i = Math.max(...n), c = r - a || 1, b = i - f || 1, w = Math.max(c, b), E = w * 0.08, $ = l || t.map((v, m) => String.fromCharCode(65 + m)), p = s || n.map((v, m) => String(m + 1)), x = w * 0.018, T = n.length <= 1, L = 8947848;
      for (let v = 0; v < t.length; v++) {
        const m = t[v];
        if (T) {
          const I = -E - x * 1.5;
          ko(m, 0, 0, m, 0, I + x, L, Ot), To($[v] || `${v}`, m, 0, I, x, Ot);
        } else {
          const I = f - E - x * 1.5;
          ko(m, f, 0, m, I + x, 0, L, Ot), To($[v] || `${v}`, m, I, 0, x, Ot);
        }
      }
      if (!T) for (let v = 0; v < n.length; v++) {
        const m = n[v], I = a - E - x * 1.5;
        ko(a, m, 0, I + x, m, 0, L, Ot), To(p[v] || `${v}`, I, m, 0, x, Ot);
      }
      const k = x * 1.8, z = E * 1.2, P = E * 1.2;
      for (let v = 0; v < t.length - 1; v++) {
        const m = t[v], I = t[v + 1], F = Math.abs(I - m), N = (m + I) / 2, G = `${F.toFixed(2)} m`;
        T ? (So(G, N, 0, -z, k, Ot), Io(m, 0, -z * 0.7, I, 0, -z * 0.7, 16763904, Ot)) : (So(G, N, f - P, 0, k, Ot), Io(m, f - P * 0.7, 0, I, f - P * 0.7, 0, 16763904, Ot));
      }
      if (!T) for (let v = 0; v < n.length - 1; v++) {
        const m = n[v], I = n[v + 1], F = Math.abs(I - m), N = (m + I) / 2, G = `${F.toFixed(2)} m`;
        So(G, a - z, N, 0, k, Ot), Io(a - z * 0.7, m, 0, a - z * 0.7, I, 0, 16763904, Ot);
      }
      Ot.traverse((v) => {
        v.material && (Array.isArray(v.material) ? v.material.forEach((m) => {
          m.clippingPlanes = [];
        }) : v.material.clippingPlanes = []);
      }), d.scene.add(Ot), d.render();
    }
    let Yt = null;
    function is() {
      if (!Yt) return;
      const t = Qe();
      t && t.scene.remove(Yt), Yt.traverse((n) => {
        if (n.geometry && n.geometry.dispose(), n.material) {
          const o = n.material;
          o.map && o.map.dispose(), o.dispose();
        }
      }), Yt = null;
    }
    function Eo(t, n, o) {
      if (is(), t.length === 0) return;
      const l = Qe();
      if (!l) return;
      Yt = new ao(), Yt.name = "storyLevels";
      const s = Math.min(...n), d = Math.max(...n), a = Math.min(...o), r = Math.max(...o), f = d - s || 1, i = r - a || 1, c = Math.max(f, i), b = c * 0.06, w = o.length <= 1, E = 4491519, $ = c * 0.015;
      for (const p of t) {
        const x = p.elev;
        w ? (Zn(s - b, 0, x, d + b, 0, x, E, Yt), cs(p.name, d + b * 1.5, 0, x, $, Yt)) : (Zn(s, a, x, d, a, x, E, Yt), Zn(d, a, x, d, r, x, E, Yt), Zn(d, r, x, s, r, x, E, Yt), Zn(s, r, x, s, a, x, E, Yt), cs(p.name, s - b * 1.5, a, x, $, Yt));
      }
      Yt.traverse((p) => {
        p.material && (Array.isArray(p.material) ? p.material.forEach((x) => {
          x.clippingPlanes = [];
        }) : p.material.clippingPlanes = []);
      }), l.scene.add(Yt), l.render();
    }
    function Zn(t, n, o, l, s, d, a, r) {
      const f = Math.sqrt((l - t) ** 2 + (s - n) ** 2 + (d - o) ** 2) || 1, i = new nn().setFromPoints([
        new Ne(t, n, o),
        new Ne(l, s, d)
      ]), c = new Gn({
        color: a,
        dashSize: f * 0.02,
        gapSize: f * 0.01,
        transparent: true,
        opacity: 0.5
      }), b = new Fn(i, c);
      b.computeLineDistances(), b.renderOrder = 50, r.add(b);
    }
    function cs(t, n, o, l, s, d) {
      const a = document.createElement("canvas"), r = 512, f = 64;
      a.width = r, a.height = f;
      const i = a.getContext("2d");
      i.fillStyle = "rgba(30,60,120,0.8)";
      const c = 8;
      i.beginPath(), i.moveTo(c, 0), i.lineTo(r - c, 0), i.quadraticCurveTo(r, 0, r, c), i.lineTo(r, f - c), i.quadraticCurveTo(r, f, r - c, f), i.lineTo(c, f), i.quadraticCurveTo(0, f, 0, f - c), i.lineTo(0, c), i.quadraticCurveTo(0, 0, c, 0), i.closePath(), i.fill(), i.fillStyle = "#88bbff", i.font = "bold 38px monospace", i.textAlign = "center", i.textBaseline = "middle", i.fillText(t, r / 2, f / 2);
      const b = new Ko(a);
      b.needsUpdate = true;
      const w = new uo({
        map: b,
        depthTest: false,
        transparent: true
      }), E = new fo(w);
      E.position.set(n, o, l), E.scale.set(s * 8, s, 1), E.renderOrder = 101, d.add(E);
    }
    function So(t, n, o, l, s, d) {
      const a = document.createElement("canvas"), r = 256, f = 64;
      a.width = r, a.height = f;
      const i = a.getContext("2d");
      i.fillStyle = "rgba(0,0,0,0.75)";
      const c = 8;
      i.beginPath(), i.moveTo(c, 0), i.lineTo(r - c, 0), i.quadraticCurveTo(r, 0, r, c), i.lineTo(r, f - c), i.quadraticCurveTo(r, f, r - c, f), i.lineTo(c, f), i.quadraticCurveTo(0, f, 0, f - c), i.lineTo(0, c), i.quadraticCurveTo(0, 0, c, 0), i.closePath(), i.fill(), i.fillStyle = "#ffcc00", i.font = "bold 36px monospace", i.textAlign = "center", i.textBaseline = "middle", i.fillText(t, r / 2, f / 2);
      const b = new il(a);
      b.minFilter = cl;
      const w = new uo({
        map: b,
        transparent: true,
        depthTest: false
      }), E = new fo(w);
      E.position.set(n, o, l);
      const $ = r / f;
      E.scale.set(s * $, s, 1), E.renderOrder = 999, d.add(E);
    }
    function Io(t, n, o, l, s, d, a, r) {
      const f = [
        new Ne(t, n, o),
        new Ne(l, s, d)
      ], i = new nn().setFromPoints(f), c = new Jn({
        color: a,
        transparent: true,
        opacity: 0.6,
        depthTest: false
      }), b = new Fn(i, c);
      b.renderOrder = 998, r.add(b);
    }
    function ko(t, n, o, l, s, d, a, r) {
      const f = new nn().setFromPoints([
        new Ne(t, n, o),
        new Ne(l, s, d)
      ]), i = new Gn({
        color: a,
        dashSize: 0.15 * Math.max(Math.abs(l - t), Math.abs(s - n), Math.abs(d - o), 0.1),
        gapSize: 0.1 * Math.max(Math.abs(l - t), Math.abs(s - n), Math.abs(d - o), 0.1),
        transparent: true,
        opacity: 0.6
      }), c = new Fn(f, i);
      c.computeLineDistances(), r.add(c);
    }
    function To(t, n, o, l, s, d) {
      const a = document.createElement("canvas"), r = 128;
      a.width = r, a.height = r;
      const f = a.getContext("2d");
      f.beginPath(), f.arc(r / 2, r / 2, r * 0.42, 0, Math.PI * 2), f.fillStyle = "rgba(255,255,255,0.9)", f.fill(), f.lineWidth = r * 0.04, f.strokeStyle = "#555", f.stroke(), f.fillStyle = "#222", f.font = `bold ${r * 0.45}px Arial`, f.textAlign = "center", f.textBaseline = "middle", f.fillText(t, r / 2, r / 2 + r * 0.02);
      const i = new Ko(a);
      i.needsUpdate = true;
      const c = new uo({
        map: i,
        depthTest: false,
        transparent: true
      }), b = new fo(c);
      b.position.set(n, o, l);
      const w = s * 2;
      b.scale.set(w, w, 1), b.renderOrder = 100, d.add(b);
    }
    const Ze = {
      addNode(t, n, o) {
        const l = [
          ...e.nodes.val
        ], s = l.length;
        return l.push([
          t,
          n,
          o
        ]), e.nodes.val = l, console.log(`Node ${s} at (${t}, ${n}, ${o})`), et(), s;
      },
      removeNode(t) {
        const n = [
          ...e.nodes.val
        ];
        if (t < 0 || t >= n.length) {
          console.error(`Node ${t} not found`);
          return;
        }
        n.splice(t, 1);
        const o = e.elements.val.map(([l, s]) => {
          const d = l > t ? l - 1 : l, a = s > t ? s - 1 : s;
          return l === t || s === t ? null : [
            d,
            a
          ];
        }).filter((l) => l !== null);
        e.nodes.val = n, e.elements.val = o, console.log(`Node ${t} removed`), et();
      },
      listNodes() {
        const t = e.nodes.val;
        return console.table(t.map((n, o) => ({
          id: o,
          x: n[0],
          y: n[1],
          z: n[2]
        }))), t;
      },
      addFrame(t, n) {
        const o = [
          ...e.elements.val
        ], l = o.length;
        return o.push([
          t,
          n
        ]), e.elements.val = o, console.log(`Element ${l}: node ${t} -> node ${n}`), et(), l;
      },
      removeFrame(t) {
        const n = [
          ...e.elements.val
        ];
        if (t < 0 || t >= n.length) {
          console.error(`Element ${t} not found`);
          return;
        }
        n.splice(t, 1), e.elements.val = n, console.log(`Element ${t} removed`), et();
      },
      listFrames() {
        const t = e.elements.val;
        return console.table(t.map((n, o) => ({
          id: o,
          nodeI: n[0],
          nodeJ: n[1]
        }))), t;
      },
      addSupport(t, n) {
        if (!e.nodeInputs) return;
        const o = {
          ...e.nodeInputs.val
        }, l = new Map(o.supports || []);
        l.set(t, n || [
          true,
          true,
          true,
          true,
          true,
          true
        ]), o.supports = l, e.nodeInputs.val = o, console.log(`Support added at node ${t}`), et();
      },
      removeSupport(t) {
        if (!e.nodeInputs) return;
        const n = {
          ...e.nodeInputs.val
        }, o = new Map(n.supports || []);
        o.delete(t), n.supports = o, e.nodeInputs.val = n, console.log(`Support removed from node ${t}`), et();
      },
      addLoad(t, n) {
        if (!e.nodeInputs) return;
        const o = {
          ...e.nodeInputs.val
        }, l = new Map(o.loads || []);
        l.set(t, n), o.loads = l, e.nodeInputs.val = o, console.log(`Load added at node ${t}: [${n.join(", ")}]`), et();
      },
      removeLoad(t) {
        if (!e.nodeInputs) return;
        const n = {
          ...e.nodeInputs.val
        }, o = new Map(n.loads || []);
        o.delete(t), n.loads = o, e.nodeInputs.val = n, console.log(`Load removed from node ${t}`), et();
      },
      listSupports() {
        if (!e.nodeInputs) return;
        const t = e.nodeInputs.val.supports;
        if (!t || t.size === 0) {
          console.log("No supports");
          return;
        }
        const n = [];
        return t.forEach((o, l) => n.push({
          node: l,
          dof: o.map((s) => s ? 1 : 0).join("")
        })), console.table(n), t;
      },
      listLoads() {
        if (!e.nodeInputs) return;
        const t = e.nodeInputs.val.loads;
        if (!t || t.size === 0) {
          console.log("No loads");
          return;
        }
        const n = [];
        return t.forEach((o, l) => n.push({
          node: l,
          Fx: o[0],
          Fy: o[1],
          Fz: o[2]
        })), console.table(n), t;
      },
      info() {
        var _a2, _b, _c, _d, _e2, _f;
        const t = e.nodes.val.length, n = e.elements.val.length, o = ((_c = (_b = (_a2 = e.nodeInputs) == null ? void 0 : _a2.val) == null ? void 0 : _b.supports) == null ? void 0 : _c.size) || 0, l = ((_f = (_e2 = (_d = e.nodeInputs) == null ? void 0 : _d.val) == null ? void 0 : _e2.loads) == null ? void 0 : _f.size) || 0;
        return console.log(`Model: ${t} nodes, ${n} elements, ${o} supports, ${l} loads`), {
          nodes: t,
          elements: n,
          supports: o,
          loads: l
        };
      },
      set(t, n) {
        var _a2, _b, _c, _d;
        const o = Le.querySelectorAll("input[type=checkbox]");
        for (const l of o) {
          const s = ((_b = (_a2 = l.closest("label")) == null ? void 0 : _a2.textContent) == null ? void 0 : _b.trim()) || ((_d = (_c = l.parentElement) == null ? void 0 : _c.textContent) == null ? void 0 : _d.trim()) || "", d = l.id || "";
          if (s.toLowerCase().includes(t.toLowerCase()) || d.toLowerCase().includes(t.toLowerCase())) {
            const a = l;
            return a.checked = n !== void 0 ? n : !a.checked, a.dispatchEvent(new Event("change", {
              bubbles: true
            })), console.log(`${s || d}: ${a.checked}`), a.checked;
          }
        }
        console.log(`Setting "${t}" not found. Use cad.settings() to list.`);
      },
      settings() {
        const t = Le.querySelectorAll("input[type=checkbox]"), n = {};
        return t.forEach((o) => {
          var _a2, _b, _c, _d;
          const l = o, s = ((_b = (_a2 = l.closest("label")) == null ? void 0 : _a2.textContent) == null ? void 0 : _b.trim()) || ((_d = (_c = l.parentElement) == null ? void 0 : _c.textContent) == null ? void 0 : _d.trim()) || l.id || "?";
          n[s] = l.checked;
        }), console.table(n), n;
      },
      param(t, n) {
        const o = window.__cad;
        if (o == null ? void 0 : o.setParam) return o.setParam(t, n), console.log(`${t} = ${n}`), n;
        console.log("Parameters not available");
      },
      params() {
        const t = window.__cad;
        if (t == null ? void 0 : t.getParams) {
          const n = t.getParams();
          return console.table(n), n;
        }
        console.log("Parameters not available");
      },
      use(t) {
        const n = window.__cad;
        if (n == null ? void 0 : n.setGenerator) return n.setGenerator(t), console.log(`Generator: ${t}`), t;
      },
      panel(t, n, o) {
        const l = window.__cad;
        if (l == null ? void 0 : l.createCustomPanel) return l.createCustomPanel(t, n, o);
        console.log("Custom panels not available");
      },
      removePanel(t) {
        const n = window.__cad;
        (n == null ? void 0 : n.removeCustomPanel) && (n.removeCustomPanel(t), console.log(`Panel "${t}" removed`));
      },
      refgrid(t, n, o) {
        if (!t) {
          jt(), console.log("Reference grid cleared");
          return;
        }
        const l = [
          0
        ];
        for (const a of t) l.push(l[l.length - 1] + a);
        const s = [
          0
        ];
        for (const a of n || [
          0
        ]) s.push(s[s.length - 1] + a);
        const d = [
          0
        ];
        for (const a of o || [
          3
        ]) d.push(d[d.length - 1] + a);
        ls(l, s, d), Ge = l.map((a, r) => ({
          label: String.fromCharCode(65 + r),
          coord: a
        })), Ke = s.map((a, r) => ({
          label: `${r + 1}`,
          coord: a
        })), ft = d[d.length - 1], rt = d.map((a, r) => ({
          label: r === 0 ? "Base" : `P${r}`,
          elev: a
        })), Kn(Ge.map((a) => a.coord), Ke.map((a) => a.coord), ft, Ge.map((a) => a.label), Ke.map((a) => a.label));
        {
          const a = d.map((r, f) => ({
            name: f === 0 ? "Base" : `P${f}`,
            height: f > 0 ? r - d[f - 1] : 0,
            elev: r
          }));
          Eo(a, Ge.map((r) => r.coord), Ke.map((r) => r.coord));
        }
        return console.log(`RefGrid: X=[${l}] Z=[${s}] Y=[${d}]`), {
          xCoords: l,
          zCoords: s,
          yLevels: d
        };
      },
      build(t) {
        var _a2;
        if (Ge.length === 0 || rt.length < 2) {
          console.log("Error: call cad.refgrid() first to define axes and levels");
          return;
        }
        const n = (t == null ? void 0 : t.col) || "40x40", o = (t == null ? void 0 : t.viga) || "30x40", l = (t == null ? void 0 : t.fc) || 210, [s, d] = n.split("x").map((B) => parseFloat(B) / 100), [a, r] = o.split("x").map((B) => parseFloat(B) / 100), f = Ge.map((B) => B.coord), i = Ke.map((B) => B.coord), c = rt.map((B) => B.elev), b = f.length, w = i.length, E = c.length, $ = E - 1, p = [], x = {};
        for (let B = 0; B < E; B++) for (let me = 0; me < w; me++) for (let se = 0; se < b; se++) x[`${se},${me},${B}`] = p.length, p.push([
          f[se],
          i[me],
          c[B]
        ]);
        const T = [], L = /* @__PURE__ */ new Set(), k = /* @__PURE__ */ new Set(), z = /* @__PURE__ */ new Map();
        for (let B = 0; B < $; B++) for (let me = 0; me < w; me++) for (let se = 0; se < b; se++) {
          const ue = T.length;
          T.push([
            x[`${se},${me},${B}`],
            x[`${se},${me},${B + 1}`]
          ]), L.add(ue), z.set(ue, B);
        }
        for (let B = 1; B < E; B++) for (let me = 0; me < w; me++) for (let se = 0; se < b - 1; se++) {
          const ue = T.length;
          T.push([
            x[`${se},${me},${B}`],
            x[`${se + 1},${me},${B}`]
          ]), k.add(ue), z.set(ue, B - 1);
        }
        for (let B = 1; B < E; B++) for (let me = 0; me < b; me++) for (let se = 0; se < w - 1; se++) {
          const ue = T.length;
          T.push([
            x[`${me},${se},${B}`],
            x[`${me},${se + 1},${B}`]
          ]), k.add(ue), z.set(ue, B - 1);
        }
        const P = ((_a2 = t == null ? void 0 : t.braces) == null ? void 0 : _a2.toLowerCase()) || "", v = /* @__PURE__ */ new Set();
        if (P) {
          const B = P === "all" || P === "x" || P === "perimeter", me = P === "all" || P === "y" || P === "perimeter";
          for (let se = 0; se < $; se++) {
            if (B) for (let ue = 0; ue < w; ue++) {
              if (P === "perimeter" && ue !== 0 && ue !== w - 1) continue;
              const te = Math.floor((b - 1) / 2);
              for (let be = 0; be < b - 1; be++) {
                if (P === "perimeter" && be !== te) continue;
                const Ee = T.length;
                T.push([
                  x[`${be},${ue},${se}`],
                  x[`${be + 1},${ue},${se + 1}`]
                ]), v.add(Ee), z.set(Ee, se);
                const ae = T.length;
                T.push([
                  x[`${be + 1},${ue},${se}`],
                  x[`${be},${ue},${se + 1}`]
                ]), v.add(ae), z.set(ae, se);
              }
            }
            if (me) for (let ue = 0; ue < b; ue++) {
              if (P === "perimeter" && ue !== 0 && ue !== b - 1) continue;
              const te = Math.floor((w - 1) / 2);
              for (let be = 0; be < w - 1; be++) {
                if (P === "perimeter" && be !== te) continue;
                const Ee = T.length;
                T.push([
                  x[`${ue},${be},${se}`],
                  x[`${ue},${be + 1},${se + 1}`]
                ]), v.add(Ee), z.set(Ee, se);
                const ae = T.length;
                T.push([
                  x[`${ue},${be + 1},${se}`],
                  x[`${ue},${be},${se + 1}`]
                ]), v.add(ae), z.set(ae, se);
              }
            }
          }
        }
        const m = 15100 * Math.sqrt(l) * 10, I = m / (2 * (1 + 0.2)), F = s * d, N = s * d ** 3 / 12, G = d * s ** 3 / 12, h = s * d * (s ** 2 + d ** 2) / 12, S = a * r, y = a * r ** 3 / 12, R = r * a ** 3 / 12, K = a * r * (a ** 2 + r ** 2) / 12, U = /* @__PURE__ */ new Map(), le = /* @__PURE__ */ new Map(), ee = /* @__PURE__ */ new Map(), Z = /* @__PURE__ */ new Map(), fe = /* @__PURE__ */ new Map(), de = /* @__PURE__ */ new Map(), ke = /* @__PURE__ */ new Map();
        for (let B = 0; B < T.length; B++) U.set(B, m), le.set(B, I), L.has(B) ? (ee.set(B, F), Z.set(B, N), fe.set(B, G), de.set(B, h), ke.set(B, {
          type: "rect",
          b: s,
          h: d,
          name: `COL${n}`
        })) : v.has(B) ? (ee.set(B, F), Z.set(B, N), fe.set(B, G), de.set(B, h), ke.set(B, {
          type: "rect",
          b: s,
          h: d,
          name: `BR${n}`
        })) : (ee.set(B, S), Z.set(B, y), fe.set(B, R), de.set(B, K), ke.set(B, {
          type: "rect",
          b: a,
          h: r,
          name: `V${o}`
        }));
        const Oe = /* @__PURE__ */ new Map();
        for (let B = 0; B < w; B++) for (let me = 0; me < b; me++) Oe.set(x[`${me},${B},0`], [
          true,
          true,
          true,
          true,
          true,
          true
        ]);
        return e.nodes.val = p, e.elements.val = T, e.nodeInputs.val = {
          supports: Oe,
          loads: /* @__PURE__ */ new Map()
        }, e.elementInputs.val = {
          elasticities: U,
          shearModuli: le,
          areas: ee,
          momentsOfInertiaZ: Z,
          momentsOfInertiaY: fe,
          torsionalConstants: de,
          sectionShapes: ke
        }, D = L, Y = k, Me = z, console.log(`Built: ${p.length} nodes, ${T.length} elements (${L.size} cols, ${k.size} beams, ${v.size} braces)`), console.log(`  Col: ${n}, Viga: ${o}, f'c=${l}${P ? `, braces=${P}` : ""}`), {
          nodes: p.length,
          elements: T.length
        };
      },
      addCol(t, n, o) {
        var _a2, _b, _c, _d, _e2, _f;
        const l = Ge.findIndex(($) => $.label === t), s = Ke.findIndex(($) => $.label === n);
        if (l < 0) {
          console.log(`Axis "${t}" not found. Available: ${Ge.map(($) => $.label)}`);
          return;
        }
        if (s < 0) {
          console.log(`Axis "${n}" not found. Available: ${Ke.map(($) => $.label)}`);
          return;
        }
        const d = Ge[l].coord, a = Ke[s].coord, r = [
          ...e.nodes.val
        ], f = [
          ...((_a2 = e.elements) == null ? void 0 : _a2.val) || []
        ];
        (_b = e.elementInputs) == null ? void 0 : _b.val;
        const i = ($) => {
          const p = r.findIndex((x) => Math.abs(x[0] - d) < 1e-3 && Math.abs(x[1] - a) < 1e-3 && Math.abs(x[2] - $) < 1e-3);
          return p >= 0 ? p : (r.push([
            d,
            a,
            $
          ]), r.length - 1);
        }, c = o ? [
          rt.findIndex(($) => $.label === o)
        ] : Array.from({
          length: rt.length - 1
        }, ($, p) => p + 1), b = new Map(((_d = (_c = e.nodeInputs) == null ? void 0 : _c.val) == null ? void 0 : _d.supports) || []), w = i(rt[0].elev);
        b.has(w) || b.set(w, [
          true,
          true,
          true,
          true,
          true,
          true
        ]);
        let E = 0;
        for (const $ of c) {
          if ($ < 1 || $ >= rt.length) continue;
          const p = i(rt[$ - 1].elev), x = i(rt[$].elev);
          f.push([
            p,
            x
          ]), D.add(f.length - 1), Me.set(f.length - 1, $ - 1), E++;
        }
        return e.nodes.val = r, e.elements.val = f, e.nodeInputs.val = {
          ...e.nodeInputs.val,
          supports: b,
          loads: ((_f = (_e2 = e.nodeInputs) == null ? void 0 : _e2.val) == null ? void 0 : _f.loads) || /* @__PURE__ */ new Map()
        }, console.log(`Added ${E} column(s) at ${t}-${n}${o ? ` story ${o}` : ""}`), E;
      },
      addBeam(t, n, o, l, s) {
        var _a2;
        const d = Ge.findIndex((z) => z.label === t), a = Ke.findIndex((z) => z.label === n), r = Ge.findIndex((z) => z.label === o), f = Ke.findIndex((z) => z.label === l), i = rt.findIndex((z) => z.label === s);
        if (d < 0 || a < 0 || r < 0 || f < 0) {
          console.log("Axis not found");
          return;
        }
        if (i < 1) {
          console.log(`Story "${s}" not found. Available: ${rt.filter((z) => z.label !== "Base").map((z) => z.label)}`);
          return;
        }
        const c = Ge[d].coord, b = Ke[a].coord, w = Ge[r].coord, E = Ke[f].coord, $ = rt[i].elev, p = [
          ...e.nodes.val
        ], x = [
          ...((_a2 = e.elements) == null ? void 0 : _a2.val) || []
        ], T = (z, P, v) => {
          const m = p.findIndex((I) => Math.abs(I[0] - z) < 1e-3 && Math.abs(I[1] - P) < 1e-3 && Math.abs(I[2] - v) < 1e-3);
          return m >= 0 ? m : (p.push([
            z,
            P,
            v
          ]), p.length - 1);
        }, L = T(c, b, $), k = T(w, E, $);
        return x.push([
          L,
          k
        ]), Y.add(x.length - 1), Me.set(x.length - 1, i - 1), e.nodes.val = p, e.elements.val = x, console.log(`Added beam ${t}-${n} \u2192 ${o}-${l} at ${s}`), x.length - 1;
      },
      addBrace(t, n, o, l, s, d) {
        var _a2;
        const a = Ge.findIndex((m) => m.label === t), r = Ke.findIndex((m) => m.label === n), f = rt.findIndex((m) => m.label === o), i = Ge.findIndex((m) => m.label === l), c = Ke.findIndex((m) => m.label === s), b = rt.findIndex((m) => m.label === d);
        if (a < 0 || r < 0 || f < 0) {
          console.log(`Point 1 not found: ${t}-${n}@${o}`);
          return;
        }
        if (i < 0 || c < 0 || b < 0) {
          console.log(`Point 2 not found: ${l}-${s}@${d}`);
          return;
        }
        const w = Ge[a].coord, E = Ke[r].coord, $ = rt[f].elev, p = Ge[i].coord, x = Ke[c].coord, T = rt[b].elev, L = [
          ...e.nodes.val
        ], k = [
          ...((_a2 = e.elements) == null ? void 0 : _a2.val) || []
        ], z = (m, I, F) => {
          const N = L.findIndex((G) => Math.abs(G[0] - m) < 1e-3 && Math.abs(G[1] - I) < 1e-3 && Math.abs(G[2] - F) < 1e-3);
          return N >= 0 ? N : (L.push([
            m,
            I,
            F
          ]), L.length - 1);
        }, P = z(w, E, $), v = z(p, x, T);
        return k.push([
          P,
          v
        ]), Me.set(k.length - 1, Math.min(f, b)), e.nodes.val = L, e.elements.val = k, console.log(`Added brace ${t}-${n}@${o} \u2192 ${l}-${s}@${d}`), k.length - 1;
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
      model3d(t) {
        Ze.clear();
        const n = (t == null ? void 0 : t.bx) || [
          5,
          5
        ], o = (t == null ? void 0 : t.bz) || [
          4,
          4
        ], l = (t == null ? void 0 : t.h) || [
          3.5,
          3,
          3
        ], s = (t == null ? void 0 : t.col) || "40x40", d = (t == null ? void 0 : t.viga) || "30x40", a = (t == null ? void 0 : t.fc) || 210, [r, f] = s.split("x").map((te) => parseFloat(te) / 100), [i, c] = d.split("x").map((te) => parseFloat(te) / 100), b = [
          0
        ];
        for (const te of n) b.push(b[b.length - 1] + te);
        const w = [
          0
        ];
        for (const te of o) w.push(w[w.length - 1] + te);
        const E = [
          0
        ];
        for (const te of l) E.push(E[E.length - 1] + te);
        const $ = b.length, p = w.length, x = E.length, T = l.length, L = [], k = {};
        for (let te = 0; te < x; te++) for (let be = 0; be < p; be++) for (let Ee = 0; Ee < $; Ee++) k[`${Ee},${te},${be}`] = L.length, L.push([
          b[Ee],
          E[te],
          w[be]
        ]);
        const z = [], P = /* @__PURE__ */ new Set(), v = /* @__PURE__ */ new Set(), m = /* @__PURE__ */ new Map();
        for (let te = 0; te < T; te++) for (let be = 0; be < p; be++) for (let Ee = 0; Ee < $; Ee++) {
          const ae = z.length;
          z.push([
            k[`${Ee},${te},${be}`],
            k[`${Ee},${te + 1},${be}`]
          ]), P.add(ae), m.set(ae, te);
        }
        for (let te = 1; te < x; te++) for (let be = 0; be < p; be++) for (let Ee = 0; Ee < $ - 1; Ee++) {
          const ae = z.length;
          z.push([
            k[`${Ee},${te},${be}`],
            k[`${Ee + 1},${te},${be}`]
          ]), v.add(ae), m.set(ae, te - 1);
        }
        for (let te = 1; te < x; te++) for (let be = 0; be < $; be++) for (let Ee = 0; Ee < p - 1; Ee++) {
          const ae = z.length;
          z.push([
            k[`${be},${te},${Ee}`],
            k[`${be},${te},${Ee + 1}`]
          ]), v.add(ae), m.set(ae, te - 1);
        }
        const F = 15100 * Math.sqrt(a) * 10, N = F / (2 * (1 + 0.2)), G = r * f, h = r * f ** 3 / 12, S = f * r ** 3 / 12, y = r * f * (r ** 2 + f ** 2) / 12, R = i * c, K = i * c ** 3 / 12, U = c * i ** 3 / 12, le = i * c * (i ** 2 + c ** 2) / 12, ee = /* @__PURE__ */ new Map(), Z = /* @__PURE__ */ new Map(), fe = /* @__PURE__ */ new Map(), de = /* @__PURE__ */ new Map(), ke = /* @__PURE__ */ new Map(), Oe = /* @__PURE__ */ new Map(), B = /* @__PURE__ */ new Map();
        for (let te = 0; te < z.length; te++) ee.set(te, F), Z.set(te, N), P.has(te) ? (fe.set(te, G), de.set(te, h), ke.set(te, S), Oe.set(te, y), B.set(te, {
          type: "rect",
          b: r,
          h: f,
          name: `COL${s}`
        })) : (fe.set(te, R), de.set(te, K), ke.set(te, U), Oe.set(te, le), B.set(te, {
          type: "rect",
          b: i,
          h: c,
          name: `V${d}`
        }));
        const me = /* @__PURE__ */ new Map();
        for (let te = 0; te < p; te++) for (let be = 0; be < $; be++) me.set(k[`${be},0,${te}`], [
          true,
          true,
          true,
          true,
          true,
          true
        ]);
        e.nodes.val = L, e.elements.val = z, e.nodeInputs.val = {
          supports: me,
          loads: /* @__PURE__ */ new Map()
        }, e.elementInputs.val = {
          elasticities: ee,
          shearModuli: Z,
          areas: fe,
          momentsOfInertiaZ: de,
          momentsOfInertiaY: ke,
          torsionalConstants: Oe,
          sectionShapes: B
        }, D = P, Y = v, Me = m, Ge = b.map((te, be) => ({
          label: String.fromCharCode(65 + be),
          coord: te
        })), Ke = w.map((te, be) => ({
          label: `${be + 1}`,
          coord: te
        })), ft = E[E.length - 1], Kn(Ge.map((te) => te.coord), Ke.map((te) => te.coord), ft, Ge.map((te) => te.label), Ke.map((te) => te.label));
        {
          const te = E.map((be, Ee) => ({
            name: Ee === 0 ? "Base" : `P${Ee}`,
            height: Ee > 0 ? be - E[Ee - 1] : 0,
            elev: be
          }));
          Eo(te, b, w);
        }
        const se = Le.querySelector("#cad3d-axis-buttons");
        if (se) {
          se.style.display = "flex";
          const te = Ge.map((Ee) => Ee.label), be = Ke.map((Ee) => Ee.label);
          se.innerHTML = '<span style="font-size:10px;color:var(--cad-heading);margin-right:4px">Ejes:</span>';
          for (const Ee of te) se.innerHTML += `<button class="axis-btn" data-axis="x" data-label="${Ee}">${Ee}</button>`;
          se.innerHTML += '<span style="margin:0 2px">|</span>';
          for (const Ee of be) se.innerHTML += `<button class="axis-btn" data-axis="y" data-label="${Ee}">${Ee}</button>`;
        }
        const ue = Le.querySelector("#cad3d-floor-buttons");
        if (ue) {
          ue.style.display = "flex", ue.innerHTML = '<span style="font-size:10px;color:var(--cad-heading);margin-right:4px">Planta:</span>';
          for (let te = 0; te < T; te++) ue.innerHTML += `<button class="floor-btn" data-floor="${te}">P${te + 1}</button>`;
        }
        return ls(b, w, E), et(), console.log(`Model3D: ${L.length}n ${z.length}e | ${$}x${p} grid, ${T} floors | COL${s} V${d} f'c=${a}`), {
          nodes: L.length,
          elements: z.length,
          columns: P.size,
          beams: v.size
        };
      },
      clear() {
        e.nodes.val = [], e.elements.val = [], e.nodeInputs && (e.nodeInputs.val = {}), e.elementInputs && (e.elementInputs.val = {}), D = /* @__PURE__ */ new Set(), Y = /* @__PURE__ */ new Set(), Me = /* @__PURE__ */ new Map(), ze = /* @__PURE__ */ new Map(), Ge = [], Ke = [], ft = 0, rs(), is(), jt();
        const t = Le.querySelector("#cad3d-axis-buttons");
        t && (t.style.display = "none", t.innerHTML = ""), console.log("Model cleared"), et();
      },
      frame(t, n, o = 0, l = 0) {
        Ze.clear();
        const s = [];
        o > 0 && s.push(-o);
        let d = 0;
        s.push(d);
        for (const $ of t) d += $, s.push(d);
        l > 0 && s.push(d + l);
        const a = [
          0
        ];
        let r = 0;
        for (const $ of n) r += $, a.push(r);
        const f = ($) => o > 0 && $ === 0 || l > 0 && $ === s.length - 1, i = {}, c = [];
        for (let $ = 0; $ < a.length; $++) for (let p = 0; p < s.length; p++) $ === 0 && f(p) || (i[`${p},${$}`] = c.length, c.push([
          s[p],
          0,
          a[$]
        ]));
        const b = [];
        D = /* @__PURE__ */ new Set(), Y = /* @__PURE__ */ new Set();
        for (let $ = 0; $ < a.length - 1; $++) for (let p = 0; p < s.length; p++) f(p) || (D.add(b.length), b.push([
          i[`${p},${$}`],
          i[`${p},${$ + 1}`]
        ]));
        for (let $ = 1; $ < a.length; $++) for (let p = 0; p < s.length - 1; p++) Y.add(b.length), b.push([
          i[`${p},${$}`],
          i[`${p + 1},${$}`]
        ]);
        const w = /* @__PURE__ */ new Map(), E = bt();
        for (let $ = 0; $ < s.length; $++) {
          if (f($)) continue;
          const p = `${$},0`;
          i[p] !== void 0 && w.set(i[p], [
            ...E
          ]);
        }
        return e.nodes.val = c, e.elements.val = b, e.nodeInputs && (e.nodeInputs.val = {
          supports: w
        }), Ge = [
          ...s
        ], Ke = [
          0
        ], ft = a[a.length - 1] || 0, setTimeout(() => {
          Et(), Kn(s, [
            0
          ]), qo(), _o();
        }, 50), et(), {
          nodes: c.length,
          elements: b.length
        };
      },
      building(t, n, o, l = 3, s = 0, d = 0, a = 0, r = 0, f = 1) {
        Ze.clear();
        const i = [];
        s > 0 && i.push(-s), i.push(0);
        for (const m of t) i.push(i[i.length - 1] + m);
        d > 0 && i.push(i[i.length - 1] + d);
        const c = [];
        a > 0 && c.push(-a), c.push(0);
        for (const m of n) c.push(c[c.length - 1] + m);
        r > 0 && c.push(c[c.length - 1] + r);
        const b = [
          0
        ];
        for (const m of o) b.push(b[b.length - 1] + m);
        const w = (m) => s > 0 && m === 0 || d > 0 && m === i.length - 1, E = (m) => a > 0 && m === 0 || r > 0 && m === c.length - 1, $ = (m, I) => w(m) || E(I), p = [], x = {};
        for (let m = 0; m < b.length; m++) for (let I = 0; I < c.length; I++) for (let F = 0; F < i.length; F++) m === 0 && $(F, I) || (x[`${F},${I},${m}`] = p.length, p.push([
          i[F],
          c[I],
          b[m]
        ]));
        const T = p.length, L = [];
        D = /* @__PURE__ */ new Set(), Y = /* @__PURE__ */ new Set(), Me = /* @__PURE__ */ new Map();
        const k = [];
        for (let m = 0; m < b.length - 1; m++) for (let I = 0; I < c.length; I++) for (let F = 0; F < i.length; F++) $(F, I) || k.push({
          el: [
            x[`${F},${I},${m}`],
            x[`${F},${I},${m + 1}`]
          ],
          floor: m
        });
        for (const { el: [m, I], floor: F } of k) {
          if (f <= 1) {
            D.add(L.length), Me.set(L.length, F), L.push([
              m,
              I
            ]);
            continue;
          }
          const N = p[m], G = p[I];
          let h = m;
          for (let S = 1; S < f; S++) {
            const y = S / f, R = p.length;
            p.push([
              N[0] + (G[0] - N[0]) * y,
              N[1] + (G[1] - N[1]) * y,
              N[2] + (G[2] - N[2]) * y
            ]), D.add(L.length), Me.set(L.length, F), L.push([
              h,
              R
            ]), h = R;
          }
          D.add(L.length), Me.set(L.length, F), L.push([
            h,
            I
          ]);
        }
        ze = /* @__PURE__ */ new Map();
        const z = [];
        for (let m = 1; m < b.length; m++) for (let I = 0; I < c.length; I++) for (let F = 0; F < i.length - 1; F++) z.push({
          el: [
            x[`${F},${I},${m}`],
            x[`${F + 1},${I},${m}`]
          ],
          floor: m - 1,
          dir: "x",
          bay: F
        });
        for (let m = 1; m < b.length; m++) for (let I = 0; I < i.length; I++) for (let F = 0; F < c.length - 1; F++) z.push({
          el: [
            x[`${I},${F},${m}`],
            x[`${I},${F + 1},${m}`]
          ],
          floor: m - 1,
          dir: "y",
          bay: F
        });
        for (const { el: [m, I], floor: F, dir: N, bay: G } of z) {
          const h = p[m], S = p[I];
          let y = m;
          for (let K = 1; K < l; K++) {
            const U = K / l, le = p.length;
            p.push([
              h[0] + (S[0] - h[0]) * U,
              h[1] + (S[1] - h[1]) * U,
              h[2] + (S[2] - h[2]) * U
            ]);
            const ee = L.length;
            Y.add(ee), Me.set(ee, F), ze.set(ee, {
              dir: N,
              bay: G
            }), L.push([
              y,
              le
            ]), y = le;
          }
          const R = L.length;
          Y.add(R), Me.set(R, F), ze.set(R, {
            dir: N,
            bay: G
          }), L.push([
            y,
            I
          ]);
        }
        if (at = /* @__PURE__ */ new Set(), Se && Ae > 0) {
          const m = (I, F, N) => {
            for (let h = 0; h < p.length; h++) if (Math.abs(p[h][0] - I) < 1e-6 && Math.abs(p[h][1] - F) < 1e-6 && Math.abs(p[h][2] - N) < 1e-6) return h;
            const G = p.length;
            return p.push([
              I,
              F,
              N
            ]), G;
          };
          for (let I = 1; I < b.length; I++) if (Ve === "x") for (let F = 0; F < c.length - 1; F++) {
            const N = c[F], G = c[F + 1];
            for (let h = 1; h <= Ae; h++) {
              const S = N + h / (Ae + 1) * (G - N), y = [];
              for (let R = 0; R < i.length; R++) y.push(m(i[R], S, b[I]));
              for (let R = 0; R < i.length - 1; R++) {
                const K = L.length;
                at.add(K), Y.add(K), Me.set(K, I - 1), ze.set(K, {
                  dir: "x",
                  bay: R
                }), L.push([
                  y[R],
                  y[R + 1]
                ]);
              }
            }
          }
          else for (let F = 0; F < i.length - 1; F++) {
            const N = i[F], G = i[F + 1];
            for (let h = 1; h <= Ae; h++) {
              const S = N + h / (Ae + 1) * (G - N), y = [];
              for (let R = 0; R < c.length; R++) y.push(m(S, c[R], b[I]));
              for (let R = 0; R < c.length - 1; R++) {
                const K = L.length;
                at.add(K), Y.add(K), Me.set(K, I - 1), ze.set(K, {
                  dir: "y",
                  bay: R
                }), L.push([
                  y[R],
                  y[R + 1]
                ]);
              }
            }
          }
        }
        const P = /* @__PURE__ */ new Map(), v = bt();
        for (let m = 0; m < c.length; m++) for (let I = 0; I < i.length; I++) $(I, m) || P.set(x[`${I},${m},0`], [
          ...v
        ]);
        pe = /* @__PURE__ */ new Set();
        for (const m of ve) {
          const I = b.length - 1, F = m.floors.includes(-1) ? Array.from({
            length: I
          }, (N, G) => G) : m.floors.filter((N) => N < I);
          for (const N of F) {
            let G, h, S, y;
            m.dir === "x" ? (G = m.bay, S = m.bay + 1, h = m.axisIdx, y = m.axisIdx) : (G = m.axisIdx, S = m.axisIdx, h = m.bay, y = m.bay + 1);
            const R = x[`${G},${h},${N}`], K = x[`${G},${h},${N + 1}`];
            let U, le;
            if (m.dir === "x" ? (U = x[`${S},${y},${N}`], le = x[`${S},${y},${N + 1}`]) : (U = x[`${S},${y},${N}`], le = x[`${S},${y},${N + 1}`]), R === void 0 || U === void 0 || K === void 0 || le === void 0) continue;
            const ee = ge, Z = je, fe = p[R], de = p[U], ke = p[K], Oe = p[le], B = [];
            for (let me = 0; me <= Z; me++) {
              const se = [], ue = me / Z;
              for (let te = 0; te <= ee; te++) {
                const be = te / ee, Ee = (1 - ue) * ((1 - be) * fe[0] + be * de[0]) + ue * ((1 - be) * ke[0] + be * Oe[0]), ae = (1 - ue) * ((1 - be) * fe[1] + be * de[1]) + ue * ((1 - be) * ke[1] + be * Oe[1]), Ie = (1 - ue) * ((1 - be) * fe[2] + be * de[2]) + ue * ((1 - be) * ke[2] + be * Oe[2]);
                me === 0 && te === 0 ? se.push(R) : me === 0 && te === ee ? se.push(U) : me === Z && te === 0 ? se.push(K) : me === Z && te === ee ? se.push(le) : (se.push(p.length), p.push([
                  Ee,
                  ae,
                  Ie
                ]));
              }
              B.push(se);
            }
            for (let me = 0; me < Z; me++) for (let se = 0; se < ee; se++) {
              const ue = B[me][se], te = B[me][se + 1], be = B[me + 1][se + 1], Ee = B[me + 1][se], ae = L.length;
              pe.add(ae), Me.set(ae, N), L.push([
                ue,
                te,
                be,
                Ee
              ]);
            }
            if (N === 0) for (let me = 0; me <= ee; me++) {
              const se = B[0][me];
              se >= T && P.set(se, [
                ...v
              ]);
            }
          }
        }
        if (At = /* @__PURE__ */ new Set(), Xe) {
          const m = l, I = l, F = /* @__PURE__ */ new Map(), N = (G, h, S) => `${Math.round(G * 1e4)},${Math.round(h * 1e4)},${Math.round(S * 1e4)}`;
          for (let G = 0; G < p.length; G++) F.set(N(p[G][0], p[G][1], p[G][2]), G);
          for (let G = 1; G < b.length; G++) {
            const h = b[G];
            for (let S = 0; S < i.length - 1; S++) for (let y = 0; y < c.length - 1; y++) {
              const R = i[S], K = i[S + 1], U = c[y], le = c[y + 1], ee = [];
              for (let Z = 0; Z <= I; Z++) {
                const fe = [];
                for (let de = 0; de <= m; de++) {
                  const ke = R + de / m * (K - R), Oe = U + Z / I * (le - U);
                  if (Z === 0 && de === 0) fe.push(x[`${S},${y},${G}`]);
                  else if (Z === 0 && de === m) fe.push(x[`${S + 1},${y},${G}`]);
                  else if (Z === I && de === 0) fe.push(x[`${S},${y + 1},${G}`]);
                  else if (Z === I && de === m) fe.push(x[`${S + 1},${y + 1},${G}`]);
                  else {
                    const B = N(ke, Oe, h), me = F.get(B);
                    if (me !== void 0) fe.push(me);
                    else {
                      const se = p.length;
                      p.push([
                        ke,
                        Oe,
                        h
                      ]), F.set(B, se), fe.push(se);
                    }
                  }
                }
                ee.push(fe);
              }
              for (let Z = 0; Z < I; Z++) for (let fe = 0; fe < m; fe++) {
                const de = ee[Z][fe], ke = ee[Z][fe + 1], Oe = ee[Z + 1][fe + 1], B = ee[Z + 1][fe], me = L.length;
                At.add(me), Me.set(me, G - 1), L.push([
                  de,
                  ke,
                  Oe,
                  B
                ]);
              }
            }
          }
        }
        if (Rt && ht) {
          const m = ht === "all" || ht === "x" || ht === "perimeter", I = ht === "all" || ht === "y" || ht === "perimeter", F = b.length - 1;
          for (let N = 0; N < F; N++) {
            if (m) for (let G = 0; G < c.length; G++) {
              if (ht === "perimeter" && G !== 0 && G !== c.length - 1) continue;
              const h = Math.floor((i.length - 1) / 2);
              for (let S = 0; S < i.length - 1; S++) {
                if (ht === "perimeter" && S !== h || $(S, G) || $(S + 1, G)) continue;
                const y = x[`${S},${G},${N}`], R = x[`${S + 1},${G},${N + 1}`], K = x[`${S + 1},${G},${N}`], U = x[`${S},${G},${N + 1}`];
                y !== void 0 && R !== void 0 && (L.push([
                  y,
                  R
                ]), Me.set(L.length - 1, N)), K !== void 0 && U !== void 0 && (L.push([
                  K,
                  U
                ]), Me.set(L.length - 1, N));
              }
            }
            if (I) for (let G = 0; G < i.length; G++) {
              if (ht === "perimeter" && G !== 0 && G !== i.length - 1) continue;
              const h = Math.floor((c.length - 1) / 2);
              for (let S = 0; S < c.length - 1; S++) {
                if (ht === "perimeter" && S !== h || $(G, S) || $(G, S + 1)) continue;
                const y = x[`${G},${S},${N}`], R = x[`${G},${S + 1},${N + 1}`], K = x[`${G},${S + 1},${N}`], U = x[`${G},${S},${N + 1}`];
                y !== void 0 && R !== void 0 && (L.push([
                  y,
                  R
                ]), Me.set(L.length - 1, N)), K !== void 0 && U !== void 0 && (L.push([
                  K,
                  U
                ]), Me.set(L.length - 1, N));
              }
            }
          }
        }
        return e.nodes.val = p, e.elements.val = L, e.nodeInputs && (e.nodeInputs.val = {
          supports: P
        }), Ge = [
          ...i
        ], Ke = [
          ...c
        ], ft = b[b.length - 1] || 0, setTimeout(() => {
          Et(), Kn(i, c), qo(), _o();
        }, 50), et(), {
          nodes: p.length,
          elements: L.length,
          nJointNodes: T
        };
      },
      galpon(t = 12, n = 20, o = 6, l = 3, s = 8, d = 4) {
        Ze.clear();
        const a = [], r = [], f = (E) => o + l * (1 - Math.pow(2 * E / t - 1, 2)), i = [], c = d + 1;
        for (let E = 0; E < c; E++) {
          const $ = [], p = n / d * E;
          $.push(a.length), a.push([
            0,
            p,
            0
          ]), $.push(a.length), a.push([
            t,
            p,
            0
          ]), $.push(a.length), a.push([
            0,
            p,
            o
          ]);
          for (let x = 1; x < s; x++) {
            const T = t / s * x;
            $.push(a.length), a.push([
              T,
              p,
              f(T)
            ]);
          }
          $.push(a.length), a.push([
            t,
            p,
            o
          ]), i.push($);
        }
        for (let E = 0; E < c; E++) {
          const $ = i[E];
          r.push([
            $[0],
            $[2]
          ]), r.push([
            $[1],
            $[$.length - 1]
          ]);
          for (let p = 2; p < $.length - 1; p++) r.push([
            $[p],
            $[p + 1]
          ]);
        }
        for (let E = 0; E < d; E++) for (let $ = 2; $ < i[0].length; $++) r.push([
          i[E][$],
          i[E + 1][$]
        ]);
        for (let E = 0; E < d; E++) for (let $ = 2; $ < i[0].length - 1; $ += 2) r.push([
          i[E][$],
          i[E + 1][$ + 1]
        ]);
        const b = /* @__PURE__ */ new Map(), w = bt();
        for (let E = 0; E < c; E++) b.set(i[E][0], [
          ...w
        ]), b.set(i[E][1], [
          ...w
        ]);
        return e.nodes.val = a, e.elements.val = r, e.nodeInputs && (e.nodeInputs.val = {
          supports: b
        }), et(), {
          nodes: a.length,
          elements: r.length
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
            qe.colMat = 1, qe.vigaMat = 1, Ze.clear(), tt("truss"), fs();
            break;
          }
          case "beams": {
            qe.colMat = 0, qe.vigaMat = 0, qe.colShape = 0, Ze.clear(), tt("beams"), us();
            break;
          }
          case "3d":
          case "3d-structure":
          case "torre": {
            qe.colMat = 1, qe.vigaMat = 1, Ze.clear(), tt("3d"), ms();
            break;
          }
          case "portico": {
            qe.colMat = 0, qe.vigaMat = 0, qe.colShape = 0, tt("frame"), Pe();
            break;
          }
          case "edificio": {
            tt("edificio"), qe.colMat = 0, qe.vigaMat = 0, qe.colShape = 0, ve = [], Xe = false, Se = false, Rt = false, Pe();
            break;
          }
          case "edif-acero":
          case "edificio-acero": {
            tt("edificio"), qe.colMat = 1, qe.vigaMat = 1, qe.steelColType = 0, qe.steelVigaType = 0, ve = [], Se = true, Ae = 2;
            const n = ie.reduce((l, s) => l + s, 0) / ie.length, o = ne.reduce((l, s) => l + s, 0) / ne.length;
            Ve = n >= o ? "y" : "x", Xe = true, lt = 0.08, Rt = false, Pe();
            break;
          }
          case "edif-acero-diag":
          case "edificio-acero-diag": {
            tt("edificio"), qe.colMat = 1, qe.vigaMat = 1, qe.steelColType = 0, qe.steelVigaType = 0, ve = [], Se = true, Ae = 2;
            const n = ie.reduce((l, s) => l + s, 0) / ie.length, o = ne.reduce((l, s) => l + s, 0) / ne.length;
            Ve = n >= o ? "y" : "x", Xe = true, lt = 0.08, Rt = true, ht = "perimeter", Pe();
            break;
          }
          case "edif-muros":
          case "edificio-muros": {
            tt("edificio"), qe.colMat = 0, qe.vigaMat = 0, qe.colShape = 0, Se = false;
            const n = Math.round(((_a2 = Q.nVanosX) == null ? void 0 : _a2.val) ?? 2), o = Math.round(((_b = Q.nVanosY) == null ? void 0 : _b.val) ?? 2);
            ve = [
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
                bay: n - 1,
                axisIdx: o,
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
                bay: o - 1,
                axisIdx: n,
                floors: [
                  -1
                ]
              }
            ], Xe = true, lt = 0.15, Pe();
            break;
          }
          case "edif-mixto":
          case "edificio-mixto": {
            tt("edificio"), qe.colMat = 2, qe.vigaMat = 0, Se = false;
            const n = Math.round(((_c = Q.nVanosX) == null ? void 0 : _c.val) ?? 2), o = Math.round(((_d = Q.nVanosY) == null ? void 0 : _d.val) ?? 2);
            ve = [
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
                bay: n - 1,
                axisIdx: o,
                floors: [
                  -1
                ]
              }
            ], Xe = true, lt = 0.12, Pe();
            break;
          }
          case "mezanine":
          case "mezzanine": {
            tt("edificio"), Q.nPisos && (Q.nPisos.val = 1), Q.hPiso && (Q.hPiso.val = 4.5), Q.nVanosX && (Q.nVanosX.val = 3), Q.nVanosY && (Q.nVanosY.val = 2), Q.nSubViga && (Q.nSubViga.val = 3), ie = [
              6,
              6,
              6
            ], ne = [
              5,
              5
            ], qe.colMat = 1, qe.vigaMat = 1, qe.steelColType = 0, qe.steelVigaType = 0, ve = [], Se = true, Ae = 2, Ve = ie[0] >= ne[0] ? "y" : "x", Xe = true, lt = 0.08, pt = 3, $t = 3, Pe();
            break;
          }
          case "galpon": {
            tt("galpon"), qe.colMat = 1, qe.vigaMat = 1, Pe();
            break;
          }
          case "barra": {
            tt("barra"), Pe();
            break;
          }
          case "placa3q":
          case "plate3q":
          case "placa-3q": {
            Ze.clear(), tt("placa-3q"), bs();
            break;
          }
          case "placa":
          case "plate":
          case "plate-q4":
          case "placa-q4": {
            Ze.clear(), tt("placa-q4"), gs();
            break;
          }
          case "losa-rect":
          case "rectangular-slab": {
            Ze.clear(), tt("losa-rect"), hs();
            break;
          }
          case "losa-plana":
          case "flat-slab": {
            Ze.clear(), tt("losa-plana"), xs();
            break;
          }
          case "viga-alta":
          case "deep-beam": {
            Ze.clear(), tt("viga-alta"), vs();
            break;
          }
          case "muro-contencion":
          case "retaining-wall": {
            Ze.clear(), tt("muro-contencion"), ys();
            break;
          }
          case "zapata":
          case "footing": {
            Ze.clear(), tt("zapata"), $s();
            break;
          }
          case "placa-orificios":
          case "plate-holes":
          case "placa-base": {
            Ze.clear(), tt("placa-orificios"), Ms();
            break;
          }
          case "col-placa":
          case "columna-placa": {
            Ze.clear(), tt("col-placa"), ws();
            break;
          }
          case "talud":
          case "slope": {
            Ze.clear(), tt("talud"), Es();
            break;
          }
          case "eiffel":
          case "torre-eiffel": {
            Ze.clear(), tt("eiffel"), Bs();
            break;
          }
          case "arco":
          case "arco-gateway": {
            Ze.clear(), tt("arco"), Ds();
            break;
          }
          case "puente":
          case "puente-colgante": {
            Ze.clear(), tt("puente"), Hs();
            break;
          }
          case "twisted":
          case "torre-twisted":
          case "turning-torso": {
            Ze.clear(), tt("twisted"), js();
            break;
          }
          case "burj":
          case "burj-khalifa": {
            Ze.clear(), tt("burj"), Ws();
            break;
          }
          case "opera":
          case "sydney-opera": {
            Ze.clear(), tt("opera"), Gs();
            break;
          }
          case "diagrid":
          case "gherkin": {
            Ze.clear(), tt("diagrid"), Ys();
            break;
          }
          case "muro-q4":
          case "shear-wall":
          case "muro-cantilever": {
            Ze.clear(), tt("muro-q4"), Uo();
            break;
          }
          case "viga-q4":
          case "cantilever-beam":
          case "viga-cantilever": {
            Ze.clear(), tt("viga-q4"), Js();
            break;
          }
          case "placa-xz":
          case "placa-cantilever":
          case "losa-cantilever": {
            Ze.clear(), tt("placa-xz"), Vs();
            break;
          }
          default:
            console.error(`Ejemplo desconocido: "${t}".`);
        }
      },
      plateQ4(t = 10, n = 10, o = 16, l = 16, s = "simply-supported", d = -10, a = 0.2, r = 3e7, f = 0.3, i = 0) {
        console.log(`Plate Q4 [${[
          "Mindlin (gruesa)",
          "Kirchhoff (delgada)",
          "Membrane"
        ][i]}]: ${t}\xD7${n}, ${o}\xD7${l} elem, BC=${s}, q=${d}, t=${a}`);
        const b = performance.now(), w = Xo({
          E: r,
          nu: f,
          thickness: a,
          meshLx: t,
          meshLy: n,
          meshNx: o,
          meshNy: l,
          bcType: s,
          pressure: d,
          theoryType: i
        }), E = performance.now() - b;
        console.log(`Solved in ${E.toFixed(1)} ms`), console.log(`w_max = ${w.maxW.toExponential(6)}`), console.log(`w_center = ${(w.centerW ?? 0).toExponential(6)}`), console.log(`Mxx_max = ${w.maxMxx.toExponential(4)}, Myy_max = ${w.maxMyy.toExponential(4)}`), console.log(`Mxy_max = ${w.maxMxy.toExponential(4)}`), console.log(`Qx_max = ${w.maxQx.toExponential(4)}, Qy_max = ${w.maxQy.toExponential(4)}`);
        const $ = w.nodeResults.map((k) => [
          k.x,
          k.y,
          0
        ]), p = w.elementResults.map((k) => [
          ...k.nodes
        ]);
        e.nodes.val = $, e.elements.val = p;
        const x = /* @__PURE__ */ new Map();
        w.nodeResults.forEach((k, z) => {
          x.set(z, [
            0,
            0,
            k.w,
            k.bx,
            k.by,
            0
          ]);
        }), e.deformOutputs && (e.deformOutputs.val = {
          deformations: x
        });
        const T = /* @__PURE__ */ new Map();
        w.nodeResults.forEach((k, z) => {
          (k.x < 1e-10 || k.x > t - 1e-10 || k.y < 1e-10 || k.y > n - 1e-10) && T.set(z, [
            true,
            true,
            true,
            true,
            true,
            true
          ]);
        });
        const L = /* @__PURE__ */ new Map();
        if (Math.abs(d) > 1e-30) {
          const k = d * t * n / $.length;
          $.forEach((z, P) => {
            T.has(P) || L.set(P, [
              0,
              0,
              k,
              0,
              0,
              0
            ]);
          });
        }
        if (e.nodeInputs && (e.nodeInputs.val = {
          supports: T,
          loads: L
        }), e.elementInputs && (e.elementInputs.val = {}), e.analyzeOutputs) {
          const k = /* @__PURE__ */ new Map(), z = /* @__PURE__ */ new Map(), P = /* @__PURE__ */ new Map();
          w.elementResults.forEach((v, m) => {
            k.set(m, [
              v.Mxx,
              v.Mxx,
              v.Mxx
            ]), z.set(m, [
              v.Myy,
              v.Myy,
              v.Myy
            ]), P.set(m, [
              v.Mxy,
              v.Mxy,
              v.Mxy
            ]);
          }), e.analyzeOutputs.val = {
            bendingXX: k,
            bendingYY: z,
            bendingXY: P
          };
        }
        return setTimeout(() => Et(), 50), et(), w;
      },
      set(t, n) {
        Q[t] ? (Q[t].val = n, console.log(`${t} = ${n}`), an(), Pe()) : ut[t] ? (ut[t].val = n, console.log(`${t} = ${n}`), an(), Pe()) : console.error(`Par\xE1metro "${t}" no encontrado. Disponibles: ${Object.keys({
          ...Q,
          ...ut
        }).join(", ")}`);
      },
      get(t) {
        if (!t) {
          const n = {};
          for (const l in Q) n[l] = Q[l].val;
          for (const l in ut) n[l] = ut[l].val;
          n.plateTheory = Ce, n.supportType = vt;
          const o = mo()[A];
          return o && o[vt] && (n.supportLabel = o[vt].label), console.table(n), n;
        }
        if (Q[t]) return Q[t].val;
        if (ut[t]) return ut[t].val;
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
        }[t.toLowerCase()] || 3), Ce = t, console.log(`Teor\xEDa de placa: ${{
          1: "Membrana",
          2: "Kirchhoff (delgada)",
          3: "Mindlin (gruesa)"
        }[Ce] || Ce}`), A.includes("placa") && (an(), Pe());
      },
      setBc(t) {
        const n = mo()[A];
        if (!n || n.length === 0) {
          console.error("No support options for current generator");
          return;
        }
        if (typeof t == "string") {
          const o = n.findIndex((l) => l.label.toLowerCase().includes(t.toLowerCase()));
          t = o >= 0 ? o : 0;
        }
        vt = t, vt >= n.length && (vt = 0), console.log(`Apoyo: ${n[vt].label} \u2192 DOFs: [${n[vt].dofs.map((o) => o ? "1" : "0").join(",")}]`), an(), Pe();
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
      units(t, n) {
        t && (g = t), n && (O = n), M = Pn(g, O);
        const o = Le.querySelector("#cad3d-force-unit"), l = Le.querySelector("#cad3d-length-unit");
        return o && (o.textContent = g), l && (l.textContent = O), A && tt(A), console.log(`Unidades: ${M.label} | E=${M.E.toExponential(3)} ${M.stress}`), M.id;
      },
      view(t) {
      },
      get mesh() {
        return e;
      }
    };
    function ds() {
      return pl(M);
    }
    function ps() {
      return fl(M);
    }
    let ut = {};
    function tt(t) {
      var _a2, _b, _c, _d;
      A = t, ca.val = true, vt = 0, xe && Fo(), Q = {};
      const n = ds()[t];
      if (n) for (const l of n) Q[l.key] = {
        val: l.val,
        min: l.min,
        max: l.max,
        step: l.step,
        label: l.label
      };
      ut = {};
      const o = ps()[t];
      if (o) for (const l of o) ut[l.key] = {
        val: l.val,
        min: l.min,
        max: l.max,
        step: l.step,
        label: l.label
      };
      if (t === "edificio") {
        const l = Math.round(((_a2 = Q.nVanosX) == null ? void 0 : _a2.val) ?? 2), s = Math.round(((_b = Q.nVanosY) == null ? void 0 : _b.val) ?? 2);
        ie = Array(l).fill(M.defaultSpan), ne = Array(s).fill(M.defaultSpan * 0.8);
        const d = Math.round(((_c = Q.nPisos) == null ? void 0 : _c.val) ?? 3), a = ((_d = Q.hPiso) == null ? void 0 : _d.val) ?? 3;
        _ = Array(d).fill(a);
      }
      an(), setTimeout(() => {
        Ta(), Pe();
      }, 50);
    }
    function re(t) {
      var _a2, _b;
      return ((_a2 = Q[t]) == null ? void 0 : _a2.val) ?? ((_b = ut[t]) == null ? void 0 : _b.val) ?? 0;
    }
    function Pe() {
      switch (A) {
        case "truss":
          fs();
          break;
        case "beams":
          us();
          break;
        case "3d":
          ms();
          break;
        case "frame": {
          const n = Math.round(re("nVanos")), o = re("spanV"), l = Math.round(re("nPisos")), s = re("hPiso");
          Ze.frame(Array(n).fill(o), Array(l).fill(s));
          break;
        }
        case "edificio": {
          const n = re("Lvix") || 0, o = re("Lvdx") || 0, l = re("Lviy") || 0, s = re("Lvdy") || 0, d = Math.max(1, Math.round(re("nSubViga") || 3)), a = Math.max(1, Math.round(re("nSubCol") || 1)), r = re("hPiso"), f = _.length > 0 ? [
            ..._
          ] : Array(Math.round(re("nPisos"))).fill(r);
          Ze.building([
            ...ie
          ], [
            ...ne
          ], f, d, n, o, l, s, a);
          break;
        }
        case "galpon":
          Ze.galpon(re("span"), re("length"), re("height"), re("archRise"), Math.round(re("xDiv")), Math.round(re("yDiv")));
          break;
        case "barra":
          va();
          break;
        case "placa-3q":
          bs();
          break;
        case "placa-q4":
          gs();
          break;
        case "losa-rect":
          hs();
          break;
        case "losa-plana":
          xs();
          break;
        case "viga-alta":
          vs();
          break;
        case "muro-contencion":
          ys();
          break;
        case "zapata":
          $s();
          break;
        case "placa-orificios":
          Ms();
          break;
        case "col-placa":
          ws();
          break;
        case "talud":
          Es();
          break;
        case "eiffel":
          Bs();
          break;
        case "arco":
          Ds();
          break;
        case "puente":
          Hs();
          break;
        case "twisted":
          js();
          break;
        case "burj":
          Ws();
          break;
        case "opera":
          Gs();
          break;
        case "diagrid":
          Ys();
          break;
        case "muro-q4":
          Uo();
          break;
        case "viga-q4":
          Js();
          break;
        case "placa-xz":
          Vs();
          break;
      }
      if ((A === "frame" || A === "edificio" || A === "galpon") && e.nodeInputs) {
        const n = e.nodeInputs.val;
        n.supports && (e.nodeInputs.val = {
          supports: n.supports
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
        "diagrid",
        "muro-q4",
        "viga-q4",
        "placa-xz"
      ].includes(A)) {
        if (X.size > 0 || J.size > 0 || j) {
          const n = e.elements.val, o = n.filter((l, s) => !(X.has(s) || J.has(s) || j && !W.has(s)));
          o.length !== n.length && (e.elements.val = o);
        }
        setTimeout(() => {
          yn(), Ro();
        }, 30);
      }
    }
    function fs() {
      const t = re("span"), n = Math.round(re("divisions")), o = re("height"), l = t / n, s = [], d = [];
      for (let c = 0; c <= n; c++) s.push([
        l * c,
        0,
        0
      ]);
      for (let c = 0; c <= n; c++) s.push([
        l * c,
        0,
        o
      ]);
      const a = n + 1;
      for (let c = 0; c < n; c++) d.push([
        c,
        c + 1
      ]);
      for (let c = 0; c < n; c++) d.push([
        a + c,
        a + c + 1
      ]);
      for (let c = 0; c <= n; c++) d.push([
        c,
        a + c
      ]);
      for (let c = 0; c < n; c++) c < n / 2 ? d.push([
        c,
        a + c + 1
      ]) : d.push([
        a + c,
        c + 1
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
      ]), f = (re("CM") ?? 0) + (re("CV") ?? 0), i = /* @__PURE__ */ new Map();
      if (f !== 0) for (let c = 0; c <= n; c++) i.set(c, [
        0,
        0,
        f,
        0,
        0,
        0
      ]);
      e.nodes.val = s, e.elements.val = d, e.nodeInputs && (e.nodeInputs.val = {
        supports: r,
        loads: i
      }), et();
    }
    function us() {
      const t = re("width"), n = re("height"), o = re("Ex") ?? 0, l = (re("CM") ?? 0) + (re("CV") ?? 0), s = Math.max(1, Math.round(re("nSub") || 4)), d = [
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
          t,
          0,
          n
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
      const r = [
        0,
        0,
        n
      ], f = [
        t,
        0,
        n
      ];
      let i = 1;
      for (let b = 1; b < s; b++) {
        const w = b / s, E = d.length;
        d.push([
          r[0] + (f[0] - r[0]) * w,
          r[1] + (f[1] - r[1]) * w,
          r[2] + (f[2] - r[2]) * w
        ]), a.push([
          i,
          E
        ]), i = E;
      }
      a.push([
        i,
        2
      ]);
      const c = /* @__PURE__ */ new Map();
      if (o !== 0 && l === 0) c.set(2, [
        o,
        0,
        0,
        0,
        0,
        0
      ]);
      else if (l !== 0 && o === 0) for (let b = 1; b < d.length; b++) b === 0 || b === 3 || c.set(b, [
        0,
        0,
        l,
        0,
        0,
        0
      ]);
      else if (o !== 0 && l !== 0) for (let b = 1; b < d.length; b++) b === 0 || b === 3 || c.set(b, [
        b === 2 ? o : 0,
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
        loads: c
      }), et();
    }
    function ms() {
      const t = re("dx"), n = re("dy"), o = re("dz"), l = Math.round(re("stories")), s = Math.max(1, Math.round(re("nSub") || 3)), d = [];
      for (let p = 0; p <= l; p++) d.push([
        0,
        0,
        o * p
      ], [
        t,
        0,
        o * p
      ], [
        t,
        n,
        o * p
      ], [
        0,
        n,
        o * p
      ]);
      const a = d.length, r = [
        ...d
      ], f = [];
      for (let p = 0; p < l; p++) for (let x = 0; x < 4; x++) f.push([
        p * 4 + x,
        (p + 1) * 4 + x
      ]);
      for (let p = 0; p < l; p++) {
        const x = p * 4;
        f.push([
          x,
          x + 5
        ], [
          x + 3,
          x + 6
        ], [
          x,
          x + 7
        ], [
          x + 1,
          x + 6
        ]);
      }
      const i = [];
      for (let p = 1; p <= l; p++) {
        const x = p * 4;
        i.push([
          x,
          x + 1
        ], [
          x + 1,
          x + 2
        ], [
          x + 2,
          x + 3
        ], [
          x + 3,
          x
        ], [
          x,
          x + 2
        ]);
      }
      for (const [p, x] of i) {
        const T = d[p], L = d[x];
        let k = p;
        for (let z = 1; z < s; z++) {
          const P = z / s, v = r.length;
          r.push([
            T[0] + (L[0] - T[0]) * P,
            T[1] + (L[1] - T[1]) * P,
            T[2] + (L[2] - T[2]) * P
          ]), f.push([
            k,
            v
          ]), k = v;
        }
        f.push([
          k,
          x
        ]);
      }
      const c = /* @__PURE__ */ new Map();
      for (let p = 0; p < 4; p++) c.set(p, [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
      const b = re("Ex") ?? 0, w = (re("CM") ?? 0) + (re("CV") ?? 0), E = a - 2, $ = /* @__PURE__ */ new Map();
      if (b !== 0 && w === 0) $.set(E, [
        b,
        0,
        0,
        0,
        0,
        0
      ]);
      else if (w !== 0 && b === 0) for (let p = 0; p < r.length; p++) c.has(p) || $.set(p, [
        0,
        0,
        w,
        0,
        0,
        0
      ]);
      else if (b !== 0 && w !== 0) for (let p = 0; p < r.length; p++) c.has(p) || $.set(p, [
        p === E ? b : 0,
        0,
        w,
        0,
        0,
        0
      ]);
      e.nodes.val = r, e.elements.val = f, e.nodeInputs && (e.nodeInputs.val = {
        supports: c,
        loads: $
      }), et();
    }
    function va() {
      const t = re("L"), n = Math.round(re("nElem")), o = re("F"), l = t / n, s = [], d = [];
      for (let f = 0; f <= n; f++) s.push([
        l * f,
        0,
        0
      ]);
      for (let f = 0; f < n; f++) d.push([
        f,
        f + 1
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
      ]), r = /* @__PURE__ */ new Map([
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
      e.nodes.val = s, e.elements.val = d, e.nodeInputs && (e.nodeInputs.val = {
        supports: a,
        loads: r
      }), et();
    }
    function bs() {
      const t = re("Lx") || 15, n = re("Ly") || 10, o = re("meshSize") || 0.5, l = re("q") || -3, s = re("t") || 1, d = re("E") || 3e7, a = re("nu") || 0.3, r = d / (2 * (1 + a)), f = Ce === 1 ? "Membrana" : Ce === 2 ? "Kirchhoff" : "Mindlin", { nodes: i, elements: c, boundaryIndices: b } = xn({
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
      }), w = t * n, E = l * w / i.length, $ = new Map(b.map((x) => [
        x,
        [
          true,
          true,
          true,
          true,
          true,
          true
        ]
      ])), p = new Map(i.map((x, T) => [
        T,
        [
          0,
          0,
          E,
          0,
          0,
          0
        ]
      ]));
      e.nodes.val = i, e.elements.val = c, e.nodeInputs && (e.nodeInputs.val = {
        supports: $,
        loads: p
      }), e.elementInputs && (e.elementInputs.val = {
        elasticities: new Map(c.map((x, T) => [
          T,
          d
        ])),
        elasticitiesOrthogonal: new Map(c.map((x, T) => [
          T,
          d
        ])),
        thicknesses: new Map(c.map((x, T) => [
          T,
          s
        ])),
        poissonsRatios: new Map(c.map((x, T) => [
          T,
          a
        ])),
        shearModuli: new Map(c.map((x, T) => [
          T,
          r
        ]))
      });
      try {
        const x = Tt(i, c, e.nodeInputs.val, e.elementInputs.val);
        x && e.deformOutputs && (e.deformOutputs.val = x);
        const T = hn(i, c, e.elementInputs.val, x);
        T && e.analyzeOutputs && (e.analyzeOutputs.val = T), console.log(`Plate 3Q [${f}]: ${i.length} nodes, ${c.length} triangles, t=${s}, E=${d}, \u03BD=${a}`);
      } catch (x) {
        console.warn("Plate 3Q analysis failed:", x.message);
      }
      setTimeout(() => Et(), 50), et();
    }
    function gs() {
      const t = re("Lx") || 10, n = re("Ly") || 10, o = Math.round(re("nx") || 16), l = Math.round(re("ny") || 16), s = re("t") || 0.2, d = re("q") || -10, a = re("E") || 3e7, r = re("nu") || 0.3, f = vt === 1 ? "clamped" : "simply-supported", c = {
        1: 2,
        2: 1,
        3: 0
      }[Ce] ?? 0;
      return Ze.plateQ4(t, n, o, l, f, d, s, a, r, c);
    }
    function hs() {
      const t = re("a") || 6, n = re("b") || 4, o = Math.round(re("nx") || 12), l = Math.round(re("ny") || 8), s = re("t") || 0.1, d = re("q") || -10, a = re("E") || 35e6, r = re("nu") || 0.15, i = {
        1: 2,
        2: 1,
        3: 0
      }[Ce] ?? 0, c = Ze.plateQ4(t, n, o, l, "simply-supported", d, s, a, r, i), b = a * s * s * s / (12 * (1 - r * r));
      let w = 0;
      for (let E = 1; E <= 19; E += 2) for (let $ = 1; $ <= 19; $ += 2) {
        const p = E * E / (t * t) + $ * $ / (n * n);
        w += 1 / (E * $ * p * p);
      }
      if (w *= 16 * Math.abs(d) / (Math.PI ** 6 * b), console.log(`\u{1F4D0} Navier anal\xEDtico w_center = ${w.toExponential(6)}`), c) {
        const E = Math.abs((Math.abs(c.centerW || 0) - w) / w * 100);
        console.log(`   WASM w_center = ${(c.centerW || 0).toExponential(6)}, error = ${E.toFixed(2)}%`);
      }
      return c;
    }
    function xs() {
      const t = re("t") || 0.2, n = re("q") || -10, o = re("E") || 35e6, l = re("nu") || 0.2, s = re("meshSize") || 0.6, d = [
        3.6,
        4.2,
        4.2,
        3.6
      ], a = [
        3,
        3.6,
        3
      ], r = d.reduce((h, S) => h + S, 0), f = a.reduce((h, S) => h + S, 0), i = [
        0
      ];
      for (const h of d) i.push(i[i.length - 1] + h);
      const c = [
        0
      ];
      for (const h of a) c.push(c[c.length - 1] + h);
      const b = Math.max(2, Math.round(r / s)), w = Math.max(2, Math.round(f / s)), E = r / b, $ = f / w, p = [];
      for (let h = 0; h <= w; h++) for (let S = 0; S <= b; S++) p.push([
        S * E,
        h * $
      ]);
      const x = [], T = /* @__PURE__ */ new Set();
      for (const h of i) for (const S of c) {
        let y = 1 / 0, R = 0;
        for (let K = 0; K < p.length; K++) {
          const U = Math.hypot(p[K][0] - h, p[K][1] - S);
          U < y && (y = U, R = K);
        }
        T.has(R) || (T.add(R), x.push({
          node: R,
          dof: 0,
          k: 1e15
        }));
      }
      const k = {
        1: 2,
        2: 1,
        3: 0
      }[Ce] ?? 1;
      console.log(`Losa Plana Q4 [${[
        "Mindlin",
        "Kirchhoff",
        "Membrane"
      ][k]}]: ${r}\xD7${f}m, ${b}\xD7${w} elem, ${T.size} columnas`);
      const z = performance.now(), P = Xo({
        E: o,
        nu: l,
        thickness: t,
        meshLx: r,
        meshLy: f,
        meshNx: b,
        meshNy: w,
        bcType: "none",
        pressure: n,
        theoryType: k,
        springs: x
      }), v = performance.now() - z;
      console.log(`Solved in ${v.toFixed(1)} ms, w_max = ${P.maxW.toExponential(4)}`);
      const m = P.nodeResults.map((h) => [
        h.x,
        h.y,
        0
      ]), I = P.elementResults.map((h) => [
        ...h.nodes
      ]);
      e.nodes.val = m, e.elements.val = I;
      const F = /* @__PURE__ */ new Map();
      P.nodeResults.forEach((h, S) => {
        F.set(S, [
          0,
          0,
          h.w,
          h.bx,
          h.by,
          0
        ]);
      }), e.deformOutputs && (e.deformOutputs.val = {
        deformations: F
      });
      const N = /* @__PURE__ */ new Map();
      for (const h of T) N.set(h, [
        true,
        true,
        true,
        false,
        false,
        false
      ]);
      const G = /* @__PURE__ */ new Map();
      if (Math.abs(n) > 1e-30) {
        const h = n * r * f / m.length;
        m.forEach((S, y) => {
          N.has(y) || G.set(y, [
            0,
            0,
            h,
            0,
            0,
            0
          ]);
        });
      }
      if (e.nodeInputs && (e.nodeInputs.val = {
        supports: N,
        loads: G
      }), e.elementInputs && (e.elementInputs.val = {}), e.analyzeOutputs) {
        const h = /* @__PURE__ */ new Map(), S = /* @__PURE__ */ new Map(), y = /* @__PURE__ */ new Map();
        P.elementResults.forEach((R, K) => {
          h.set(K, [
            R.Mxx,
            R.Mxx,
            R.Mxx
          ]), S.set(K, [
            R.Myy,
            R.Myy,
            R.Myy
          ]), y.set(K, [
            R.Mxy,
            R.Mxy,
            R.Mxy
          ]);
        }), e.analyzeOutputs.val = {
          bendingXX: h,
          bendingYY: S,
          bendingXY: y
        };
      }
      setTimeout(() => Et(), 50), et();
    }
    function vs() {
      const t = re("L") || 4, n = re("H") || 2, o = re("t") || 0.1, l = re("E") || 2e7, s = re("nu") || 0.2, d = l / (2 * (1 + s)), a = re("q") || -100, r = re("b") || 0.8, f = re("meshSize") || 0.2, { nodes: i, elements: c, boundaryIndices: b } = xn({
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
        maxMeshSize: f
      }), w = i, E = 0.4, $ = /* @__PURE__ */ new Map();
      for (let v = 0; v < w.length; v++) {
        const m = w[v][0], I = w[v][1];
        Math.abs(I) < 1e-6 && (m <= E + 1e-6 || m >= t - E - 1e-6) && $.set(v, [
          true,
          true,
          true,
          true,
          true,
          true
        ]);
      }
      const p = (t - r) / 2, x = p + r, T = [];
      for (let v = 0; v < w.length; v++) if (Math.abs(w[v][1] - n) < 1e-6) {
        const m = w[v][0];
        m >= p - 1e-6 && m <= x + 1e-6 && T.push(v);
      }
      const L = a * r / Math.max(T.length, 1), k = /* @__PURE__ */ new Map();
      for (const v of T) k.set(v, [
        0,
        L,
        0,
        0,
        0,
        0
      ]);
      const z = {
        elasticities: new Map(c.map((v, m) => [
          m,
          l
        ])),
        elasticitiesOrthogonal: new Map(c.map((v, m) => [
          m,
          l
        ])),
        thicknesses: new Map(c.map((v, m) => [
          m,
          o
        ])),
        poissonsRatios: new Map(c.map((v, m) => [
          m,
          s
        ])),
        shearModuli: new Map(c.map((v, m) => [
          m,
          d
        ]))
      }, P = {
        supports: $,
        loads: k
      };
      try {
        const v = Tt(w, c, P, z), m = hn(w, c, z, v), I = w.map((N) => [
          N[0],
          0,
          N[1]
        ]);
        if (e.nodes.val = I, e.elements.val = c, v && v.deformations) {
          const N = /* @__PURE__ */ new Map();
          v.deformations.forEach((G, h) => {
            N.set(h, [
              G[0],
              G[2],
              G[1],
              G[3],
              G[5],
              G[4]
            ]);
          }), e.deformOutputs && (e.deformOutputs.val = {
            deformations: N
          });
        }
        if (e.nodeInputs) {
          const N = /* @__PURE__ */ new Map();
          $.forEach((h, S) => N.set(S, h));
          const G = /* @__PURE__ */ new Map();
          k.forEach((h, S) => G.set(S, [
            h[0],
            h[2],
            h[1],
            h[3],
            h[5],
            h[4]
          ])), e.nodeInputs && (e.nodeInputs.val = {
            supports: N,
            loads: G
          });
        }
        e.elementInputs && (e.elementInputs.val = {}), e.analyzeOutputs && (e.analyzeOutputs.val = {});
        let F = 0;
        v && v.deformations && v.deformations.forEach((N) => {
          const G = Math.sqrt(N[0] * N[0] + N[1] * N[1] + N[2] * N[2]);
          F = Math.max(F, G);
        }), console.log(`Viga Alta: ${w.length} nodos, ${c.length} triangulos`), console.log(`  L=${t}, H=${n}, t=${o}, E=${l}, nu=${s}`), console.log(`  Carga: q=${a} kN/m sobre ${r}m central`), console.log(`  max|u| = ${F.toExponential(4)}`);
      } catch (v) {
        console.warn("Viga Alta analysis failed:", v.message);
      }
      setTimeout(() => Et(), 50), et();
    }
    function ys() {
      const t = re("H") || 4, n = re("B") || 3, o = re("tw") || 0.3, l = re("tb") || 0.4, s = re("meshSize") || 0.2, d = re("E") || 25e6, a = re("nu") || 0.2, r = d / (2 * (1 + a)), f = re("gamma") || 18, i = re("Ka") || 0.33, c = re("Es") || 5e4, b = re("nus") || 0.3, w = c / (2 * (1 + b)), E = re("kn") || 1e6, $ = re("ks") || 1e4, p = re("gammaW") || 9.81, x = re("Hw") || 3.5, T = re("qs") || 0, L = vt, k = n * 0.3, z = n * 0.7, P = [
        [
          -k,
          0,
          0
        ],
        [
          z,
          0,
          0
        ],
        [
          z,
          l,
          0
        ],
        [
          o,
          l,
          0
        ],
        [
          o,
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
          -k,
          l,
          0
        ]
      ];
      let v = [], m = [], I = /* @__PURE__ */ new Map(), F = /* @__PURE__ */ new Map(), N;
      if (L === 0) {
        const S = xn({
          points: P,
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
        v = S.nodes, m = S.elements;
        for (let R = 0; R < v.length; R++) Math.abs(v[R][1]) < 1e-6 && I.set(R, [
          true,
          true,
          true,
          true,
          true,
          true
        ]);
        const y = [];
        for (let R = 0; R < v.length; R++) {
          const K = v[R][0], U = v[R][1];
          Math.abs(K - o) < s * 0.6 && U >= l - 1e-6 && y.push({
            idx: R,
            y: U
          });
        }
        y.sort((R, K) => R.y - K.y);
        for (let R = 0; R < y.length; R++) {
          const { idx: K, y: U } = y[R], le = l + t - U, ee = i * f * le + i * T;
          let Z = s;
          R > 0 && R < y.length - 1 ? Z = (y[R + 1].y - y[R - 1].y) / 2 : R === 0 && y.length > 1 ? Z = (y[1].y - y[0].y) / 2 : R === y.length - 1 && y.length > 1 && (Z = (y[R].y - y[R - 1].y) / 2);
          const fe = ee * Z;
          Math.abs(fe) > 1e-10 && F.set(K, [
            fe,
            0,
            0,
            0,
            0,
            0
          ]);
        }
        N = {
          elasticities: new Map(m.map((R, K) => [
            K,
            d
          ])),
          elasticitiesOrthogonal: new Map(m.map((R, K) => [
            K,
            d
          ])),
          thicknesses: new Map(m.map((R, K) => [
            K,
            o
          ])),
          poissonsRatios: new Map(m.map((R, K) => [
            K,
            a
          ])),
          shearModuli: new Map(m.map((R, K) => [
            K,
            r
          ]))
        };
      } else if (L === 1 || L === 2) {
        const S = z, y = l + t;
        if (L === 2) {
          const R = [
            [
              -k,
              0,
              0
            ],
            [
              S,
              0,
              0
            ],
            [
              S,
              y,
              0
            ],
            [
              o,
              y,
              0
            ],
            [
              0,
              y,
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
          ], K = Math.max(3, Math.ceil((y - l) / s)), U = [];
          for (let ae = 0; ae <= K; ae++) U.push([
            o,
            l + ae * (y - l) / K,
            0
          ]);
          const le = xn({
            points: [
              ...R,
              ...U
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
          v = le.nodes, m = le.elements;
          const ee = s * 0.4, Z = [];
          for (let ae = 0; ae < v.length; ae++) {
            const Ie = v[ae][0], We = v[ae][1];
            Math.abs(Ie - o) < ee && We >= l - ee && Z.push(ae);
          }
          Z.sort((ae, Ie) => v[ae][1] - v[Ie][1]);
          const fe = [
            Z[0]
          ];
          for (let ae = 1; ae < Z.length; ae++) {
            const Ie = v[Z[ae]][1] - v[fe[fe.length - 1]][1];
            Math.abs(Ie) > s * 0.05 && fe.push(Z[ae]);
          }
          Z.length = 0, Z.push(...fe);
          const de = /* @__PURE__ */ new Map();
          for (const ae of Z) {
            const Ie = v.length;
            v.push([
              v[ae][0],
              v[ae][1],
              v[ae][2]
            ]), de.set(ae, Ie);
          }
          const ke = m.length, Oe = [];
          for (let ae = 0; ae < ke; ae++) {
            const Ie = m[ae], We = (v[Ie[0]][0] + v[Ie[1]][0] + v[Ie[2]][0]) / 3, it = (v[Ie[0]][1] + v[Ie[1]][1] + v[Ie[2]][1]) / 3, dt = We >= -k && We <= z && it >= 0 && it <= l, Ft = We >= 0 && We <= o && it >= l && it <= l + t, Bt = dt || Ft;
            if (Oe.push(!Bt), !Bt) for (let Pt = 0; Pt < Ie.length; Pt++) {
              const Dt = de.get(Ie[Pt]);
              Dt !== void 0 && (Ie[Pt] = Dt);
            }
          }
          const B = m.length;
          for (let ae = 0; ae < Z.length - 1; ae++) {
            const Ie = Z[ae], We = Z[ae + 1], it = de.get(Ie), dt = de.get(We);
            m.push([
              We,
              Ie,
              it,
              dt
            ]);
          }
          const me = m.length - B, se = /* @__PURE__ */ new Map(), ue = /* @__PURE__ */ new Map(), te = /* @__PURE__ */ new Map(), be = /* @__PURE__ */ new Map(), Ee = /* @__PURE__ */ new Map();
          for (let ae = 0; ae < ke; ae++) Oe[ae] ? (se.set(ae, c), ue.set(ae, c), be.set(ae, b), Ee.set(ae, w), te.set(ae, 1)) : (se.set(ae, d), ue.set(ae, d), be.set(ae, a), Ee.set(ae, r), te.set(ae, 1));
          for (let ae = B; ae < m.length; ae++) se.set(ae, E), ue.set(ae, 0), be.set(ae, 0), Ee.set(ae, $), te.set(ae, 0);
          N = {
            elasticities: se,
            elasticitiesOrthogonal: ue,
            thicknesses: te,
            poissonsRatios: be,
            shearModuli: Ee
          };
          for (let ae = 0; ae < v.length; ae++) {
            const Ie = v[ae][0], We = v[ae][1];
            Math.abs(We) < 1e-6 ? I.set(ae, [
              true,
              true,
              true,
              true,
              true,
              true
            ]) : Math.abs(Ie - S) < s * 0.1 && I.set(ae, [
              true,
              false,
              true,
              true,
              true,
              true
            ]);
          }
          for (let ae = 0; ae < ke; ae++) {
            if (!Oe[ae]) continue;
            const Ie = m[ae], We = v[Ie[0]], it = v[Ie[1]], dt = v[Ie[2]], Ft = Math.abs((it[0] - We[0]) * (dt[1] - We[1]) - (dt[0] - We[0]) * (it[1] - We[1])) / 2, Bt = -f * Ft / 3;
            for (const Pt of Ie) {
              const Dt = F.get(Pt) || [
                0,
                0,
                0,
                0,
                0,
                0
              ];
              Dt[1] += Bt, F.set(Pt, Dt);
            }
          }
          if (T > 0) {
            const ae = [];
            for (let Ie = 0; Ie < v.length; Ie++) {
              const We = v[Ie][0], it = v[Ie][1];
              Math.abs(it - y) < s * 0.1 && We > o - 1e-6 && ae.push({
                idx: Ie,
                x: We
              });
            }
            ae.sort((Ie, We) => Ie.x - We.x);
            for (let Ie = 0; Ie < ae.length; Ie++) {
              let We = s;
              Ie > 0 && Ie < ae.length - 1 ? We = (ae[Ie + 1].x - ae[Ie - 1].x) / 2 : Ie === 0 && ae.length > 1 ? We = (ae[1].x - ae[0].x) / 2 : Ie === ae.length - 1 && ae.length > 1 && (We = (ae[Ie].x - ae[Ie - 1].x) / 2);
              const it = -T * We, dt = F.get(ae[Ie].idx) || [
                0,
                0,
                0,
                0,
                0,
                0
              ];
              dt[1] += it, F.set(ae[Ie].idx, dt);
            }
          }
          console.log(`  Interfaz Goodman: ${Z.length} nodos interfaz, ${me} elem interfaz, kn=${E}, ks=${$}`);
        } else {
          const R = [
            [
              -k,
              0,
              0
            ],
            [
              S,
              0,
              0
            ],
            [
              S,
              y,
              0
            ],
            [
              o,
              y,
              0
            ],
            [
              0,
              y,
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
          ], K = [
            [
              o,
              l,
              0
            ]
          ], U = xn({
            points: [
              ...R,
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
          v = U.nodes, m = U.elements;
          const le = (B) => {
            const me = (v[B[0]][0] + v[B[1]][0] + v[B[2]][0]) / 3, se = (v[B[0]][1] + v[B[1]][1] + v[B[2]][1]) / 3, ue = me >= -k && me <= z && se >= 0 && se <= l, te = me >= 0 && me <= o && se >= l && se <= l + t;
            return ue || te;
          }, ee = /* @__PURE__ */ new Map(), Z = /* @__PURE__ */ new Map(), fe = /* @__PURE__ */ new Map(), de = /* @__PURE__ */ new Map(), ke = /* @__PURE__ */ new Map(), Oe = [];
          for (let B = 0; B < m.length; B++) {
            const me = le(m[B]);
            Oe.push(!me), me ? (ee.set(B, d), Z.set(B, d), de.set(B, a), ke.set(B, r), fe.set(B, 1)) : (ee.set(B, c), Z.set(B, c), de.set(B, b), ke.set(B, w), fe.set(B, 1));
          }
          N = {
            elasticities: ee,
            elasticitiesOrthogonal: Z,
            thicknesses: fe,
            poissonsRatios: de,
            shearModuli: ke
          };
          for (let B = 0; B < v.length; B++) {
            const me = v[B][0], se = v[B][1];
            Math.abs(se) < 1e-6 ? I.set(B, [
              true,
              true,
              true,
              true,
              true,
              true
            ]) : Math.abs(me - S) < s * 0.1 && I.set(B, [
              true,
              false,
              true,
              true,
              true,
              true
            ]);
          }
          for (let B = 0; B < m.length; B++) {
            if (!Oe[B]) continue;
            const me = m[B], se = v[me[0]], ue = v[me[1]], te = v[me[2]], be = Math.abs((ue[0] - se[0]) * (te[1] - se[1]) - (te[0] - se[0]) * (ue[1] - se[1])) / 2, Ee = -f * be / 3;
            for (const ae of me) {
              const Ie = F.get(ae) || [
                0,
                0,
                0,
                0,
                0,
                0
              ];
              Ie[1] += Ee, F.set(ae, Ie);
            }
          }
          if (T > 0) {
            const B = [];
            for (let me = 0; me < v.length; me++) {
              const se = v[me][0], ue = v[me][1];
              Math.abs(ue - y) < s * 0.1 && se > o - 1e-6 && B.push({
                idx: me,
                x: se
              });
            }
            B.sort((me, se) => me.x - se.x);
            for (let me = 0; me < B.length; me++) {
              let se = s;
              me > 0 && me < B.length - 1 ? se = (B[me + 1].x - B[me - 1].x) / 2 : me === 0 && B.length > 1 ? se = (B[1].x - B[0].x) / 2 : me === B.length - 1 && B.length > 1 && (se = (B[me].x - B[me - 1].x) / 2);
              const ue = -T * se, te = F.get(B[me].idx) || [
                0,
                0,
                0,
                0,
                0,
                0
              ];
              te[1] += ue, F.set(B[me].idx, te);
            }
          }
        }
      }
      if (L === 3) {
        const S = xn({
          points: P,
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
        v = S.nodes, m = S.elements;
        for (let le = 0; le < v.length; le++) Math.abs(v[le][1]) < 1e-6 && I.set(le, [
          true,
          true,
          true,
          true,
          true,
          true
        ]);
        const y = l + t, R = Math.min(x, t), K = y - R, U = [];
        for (let le = 0; le < v.length; le++) {
          const ee = v[le][0], Z = v[le][1];
          Math.abs(ee - o) < s * 0.6 && Z >= l - 1e-6 && U.push({
            idx: le,
            y: Z
          });
        }
        U.sort((le, ee) => le.y - ee.y);
        for (let le = 0; le < U.length; le++) {
          const { idx: ee, y: Z } = U[le], fe = Math.max(0, y - Z);
          if (fe <= 0 || Z < K - 1e-6) continue;
          const de = Math.min(fe, R), ke = p * de;
          let Oe = s;
          le > 0 && le < U.length - 1 ? Oe = (U[le + 1].y - U[le - 1].y) / 2 : le === 0 && U.length > 1 ? Oe = (U[1].y - U[0].y) / 2 : le === U.length - 1 && U.length > 1 && (Oe = (U[le].y - U[le - 1].y) / 2);
          const B = ke * Oe;
          Math.abs(B) > 1e-10 && F.set(ee, [
            B,
            0,
            0,
            0,
            0,
            0
          ]);
        }
        N = {
          elasticities: new Map(m.map((le, ee) => [
            ee,
            d
          ])),
          elasticitiesOrthogonal: new Map(m.map((le, ee) => [
            ee,
            d
          ])),
          thicknesses: new Map(m.map((le, ee) => [
            ee,
            o
          ])),
          poissonsRatios: new Map(m.map((le, ee) => [
            ee,
            a
          ])),
          shearModuli: new Map(m.map((le, ee) => [
            ee,
            r
          ]))
        };
      }
      const G = {
        supports: I,
        loads: F
      }, h = [
        "Rankine (Ka)",
        "Suelo continuo",
        "Interfaz",
        "Presion agua"
      ];
      try {
        const S = Tt(v, m, G, N), y = m.filter((fe) => fe.length === 3), R = {};
        for (const fe of Object.keys(N)) {
          const de = N[fe];
          if (de && de instanceof Map) {
            const ke = /* @__PURE__ */ new Map();
            let Oe = 0;
            for (let B = 0; B < m.length; B++) m[B].length === 3 && (de.has(B) && ke.set(Oe, de.get(B)), Oe++);
            R[fe] = ke;
          }
        }
        const K = hn(v, y, R, S), U = v.map((fe) => [
          fe[0],
          0,
          fe[1]
        ]);
        if (e.nodes.val = U, e.elements.val = y, S && S.deformations) {
          const fe = /* @__PURE__ */ new Map();
          S.deformations.forEach((de, ke) => {
            fe.set(ke, [
              de[0],
              de[2],
              de[1],
              de[3],
              de[5],
              de[4]
            ]);
          }), e.deformOutputs && (e.deformOutputs.val = {
            deformations: fe
          });
        }
        const le = /* @__PURE__ */ new Map();
        I.forEach((fe, de) => le.set(de, fe));
        const ee = /* @__PURE__ */ new Map();
        F.forEach((fe, de) => ee.set(de, [
          fe[0],
          fe[2],
          fe[1],
          fe[3],
          fe[5],
          fe[4]
        ])), e.nodeInputs && (e.nodeInputs.val = {
          supports: le,
          loads: ee
        }), e.elementInputs && (e.elementInputs.val = {}), e.analyzeOutputs && (e.analyzeOutputs.val = {});
        let Z = 0;
        S && S.deformations && S.deformations.forEach((fe) => {
          const de = Math.sqrt(fe[0] * fe[0] + fe[1] * fe[1] + fe[2] * fe[2]);
          Z = Math.max(Z, de);
        }), console.log(`Muro Contencion [${h[L]}]: ${v.length} nodos, ${m.length} triangulos`), console.log(`  H=${t}, B=${n}, tw=${o}, tb=${l}, Ka=${i}, gamma=${f}, qs=${T}`), L === 1 && console.log(`  Es=${c}, nus=${b}`), L === 2 && console.log(`  Es=${c}, nus=${b}, kn=${E}, ks=${$}`), L === 3 && console.log(`  gammaW=${p}, Hw=${x}`), console.log(`  max|u| = ${Z.toExponential(4)}`);
      } catch (S) {
        console.warn("Muro Contencion failed:", S.message);
      }
      setTimeout(() => Et(), 50), et();
    }
    function $s() {
      const t = re("Lx") || 2, n = re("Ly") || 2, o = re("t") || 0.5, l = re("colA") || 0.4, s = re("colH") || 1.5, d = Math.round(re("nx") || 8), a = Math.round(re("ny") || 8), r = re("E") || 25e6, f = re("nu") || 0.2, i = re("P") || -500, c = re("Mx") || 0, b = re("My") || 0, w = re("ks") || 2e4, E = t / d, $ = n / a, p = t / 2, x = n / 2, T = l / 2, L = [];
      for (let I = 0; I <= a; I++) for (let F = 0; F <= d; F++) {
        const N = I * (d + 1) + F;
        let G = E, h = $;
        (F === 0 || F === d) && (G = E / 2), (I === 0 || I === a) && (h = $ / 2), L.push({
          node: N,
          dof: 0,
          k: w * G * h
        });
      }
      let k = 0;
      for (let I = 0; I <= a; I++) for (let F = 0; F <= d; F++) Math.abs(F * E - p) <= T + 1e-6 && Math.abs(I * $ - x) <= T + 1e-6 && k++;
      const z = i / Math.max(k, 1), P = [];
      for (let I = 0; I <= a; I++) for (let F = 0; F <= d; F++) {
        const N = F * E, G = I * $;
        Math.abs(N - p) <= T + 1e-6 && Math.abs(G - x) <= T + 1e-6 && P.push({
          node: I * (d + 1) + F,
          dof: 0,
          value: z
        });
      }
      if (Math.abs(c) > 1e-6) {
        const I = T > 1e-6 ? T : $, F = c / I;
        for (let N = 0; N <= a; N++) for (let G = 0; G <= d; G++) {
          const h = G * E, S = N * $;
          if (Math.abs(h - p) <= T + 1e-6 && Math.abs(S - x) <= T + 1e-6) {
            const y = S - x;
            if (Math.abs(y) > 1e-6) {
              const R = y > 0 ? 1 : -1;
              P.push({
                node: N * (d + 1) + G,
                dof: 0,
                value: R * F / k * 2
              });
            }
          }
        }
      }
      if (Math.abs(b) > 1e-6) {
        const I = T > 1e-6 ? T : E, F = b / I;
        for (let N = 0; N <= a; N++) for (let G = 0; G <= d; G++) {
          const h = G * E, S = N * $;
          if (Math.abs(h - p) <= T + 1e-6 && Math.abs(S - x) <= T + 1e-6) {
            const y = h - p;
            if (Math.abs(y) > 1e-6) {
              const R = y > 0 ? 1 : -1;
              P.push({
                node: N * (d + 1) + G,
                dof: 0,
                value: R * F / k * 2
              });
            }
          }
        }
      }
      const m = {
        1: 2,
        2: 1,
        3: 0
      }[Ce] ?? 1;
      console.log(`Zapata: ${t}x${n}m, t=${o}m, ${d}x${a} elem`), console.log(`  col=${l}m, P=${i}, Mx=${c}, My=${b}, ks=${w}`);
      try {
        const I = Xo({
          E: r,
          nu: f,
          thickness: o,
          meshLx: t,
          meshLy: n,
          meshNx: d,
          meshNy: a,
          bcType: "none",
          pressure: 0,
          theoryType: m,
          springs: L,
          pointLoads: P
        });
        console.log(`  Solved: w_max = ${I.maxW.toExponential(4)}`);
        const F = I.nodeResults.map((K) => [
          K.x,
          K.y,
          0
        ]), N = F.length;
        F.push([
          p - T,
          x - T,
          0
        ]), F.push([
          p + T,
          x - T,
          0
        ]), F.push([
          p + T,
          x + T,
          0
        ]), F.push([
          p - T,
          x + T,
          0
        ]), F.push([
          p - T,
          x - T,
          s
        ]), F.push([
          p + T,
          x - T,
          s
        ]), F.push([
          p + T,
          x + T,
          s
        ]), F.push([
          p - T,
          x + T,
          s
        ]);
        const G = I.elementResults.map((K) => [
          ...K.nodes
        ]);
        G.push([
          N,
          N + 4
        ]), G.push([
          N + 1,
          N + 5
        ]), G.push([
          N + 2,
          N + 6
        ]), G.push([
          N + 3,
          N + 7
        ]), G.push([
          N + 4,
          N + 5
        ]), G.push([
          N + 5,
          N + 6
        ]), G.push([
          N + 6,
          N + 7
        ]), G.push([
          N + 7,
          N + 4
        ]), G.push([
          N,
          N + 1
        ]), G.push([
          N + 1,
          N + 2
        ]), G.push([
          N + 2,
          N + 3
        ]), G.push([
          N + 3,
          N
        ]), e.nodes.val = F, e.elements.val = G;
        const h = /* @__PURE__ */ new Map();
        I.nodeResults.forEach((K, U) => {
          h.set(U, [
            0,
            0,
            K.w,
            K.bx,
            K.by,
            0
          ]);
        }), e.deformOutputs && (e.deformOutputs.val = {
          deformations: h
        });
        const S = /* @__PURE__ */ new Map();
        I.nodeResults.forEach((K, U) => {
          const le = K.x, ee = K.y;
          (le < 1e-6 || le > t - 1e-6 || ee < 1e-6 || ee > n - 1e-6) && S.set(U, [
            false,
            false,
            true,
            false,
            false,
            false
          ]);
        });
        const y = /* @__PURE__ */ new Map();
        if (y.set(N + 4, [
          0,
          0,
          i / 4,
          0,
          0,
          0
        ]), y.set(N + 5, [
          0,
          0,
          i / 4,
          0,
          0,
          0
        ]), y.set(N + 6, [
          0,
          0,
          i / 4,
          0,
          0,
          0
        ]), y.set(N + 7, [
          0,
          0,
          i / 4,
          0,
          0,
          0
        ]), e.nodeInputs && (e.nodeInputs.val = {
          supports: S,
          loads: y
        }), e.elementInputs && (e.elementInputs.val = {}), e.analyzeOutputs) {
          const K = I.elementResults.length, U = /* @__PURE__ */ new Map(), le = /* @__PURE__ */ new Map(), ee = /* @__PURE__ */ new Map();
          I.elementResults.forEach((Z, fe) => {
            U.set(fe, [
              Z.Mxx,
              Z.Mxx,
              Z.Mxx
            ]), le.set(fe, [
              Z.Myy,
              Z.Myy,
              Z.Myy
            ]), ee.set(fe, [
              Z.Mxy,
              Z.Mxy,
              Z.Mxy
            ]);
          }), e.analyzeOutputs.val = {
            bendingXX: U,
            bendingYY: le,
            bendingXY: ee
          };
        }
        const R = Qe();
        R && (R.settings.shellResults.val = "bendingXX");
      } catch (I) {
        console.warn("Zapata solver failed:", I.message);
      }
      setTimeout(() => Et(), 50), et();
    }
    function Ms() {
      const t = re("Lx") || 0.4, n = re("Ly") || 0.4, o = re("t") || 0.025, l = re("dBolt") || 0.022, s = re("sx") || 0.28, d = re("sy") || 0.28, a = re("colA") || 0.2, r = re("meshSize") || 8e-3, f = re("E") || 2e8, i = re("nu") || 0.3, c = f / (2 * (1 + i)), b = re("P") || -200, w = Math.round(re("nBolts") || 4), E = t / 2, $ = n / 2, p = l / 2, x = a / 2, T = [];
      w >= 4 && (T.push([
        E - s / 2,
        $ - d / 2
      ]), T.push([
        E + s / 2,
        $ - d / 2
      ]), T.push([
        E + s / 2,
        $ + d / 2
      ]), T.push([
        E - s / 2,
        $ + d / 2
      ])), w >= 6 && (T.push([
        E,
        $ - d / 2
      ]), T.push([
        E,
        $ + d / 2
      ])), w >= 8 && (T.push([
        E - s / 2,
        $
      ]), T.push([
        E + s / 2,
        $
      ]));
      const { nodes: L, elements: k } = xn({
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
        maxMeshSize: r
      }), z = (h, S) => {
        for (const [y, R] of T) if ((h - y) * (h - y) + (S - R) * (S - R) < p * p) return true;
        return false;
      }, P = k.filter((h) => {
        const S = (L[h[0]][0] + L[h[1]][0] + L[h[2]][0]) / 3, y = (L[h[0]][1] + L[h[1]][1] + L[h[2]][1]) / 3;
        return !z(S, y);
      }), v = L, m = /* @__PURE__ */ new Map();
      for (let h = 0; h < v.length; h++) {
        const S = v[h][0], y = v[h][1];
        for (const [R, K] of T) {
          const U = Math.sqrt((S - R) * (S - R) + (y - K) * (y - K));
          U >= p * 0.7 && U <= p * 1.5 && m.set(h, [
            true,
            true,
            true,
            false,
            false,
            false
          ]);
        }
      }
      const I = /* @__PURE__ */ new Map();
      let F = 0;
      for (let h = 0; h < v.length; h++) {
        const S = v[h][0], y = v[h][1];
        Math.abs(S - E) <= x && Math.abs(y - $) <= x && F++;
      }
      const N = b / Math.max(F, 1);
      for (let h = 0; h < v.length; h++) {
        const S = v[h][0], y = v[h][1];
        if (Math.abs(S - E) <= x && Math.abs(y - $) <= x) {
          const R = I.get(h) || [
            0,
            0,
            0,
            0,
            0,
            0
          ];
          R[2] += N, I.set(h, R);
        }
      }
      const G = {
        elasticities: new Map(P.map((h, S) => [
          S,
          f
        ])),
        elasticitiesOrthogonal: new Map(P.map((h, S) => [
          S,
          f
        ])),
        thicknesses: new Map(P.map((h, S) => [
          S,
          o
        ])),
        poissonsRatios: new Map(P.map((h, S) => [
          S,
          i
        ])),
        shearModuli: new Map(P.map((h, S) => [
          S,
          c
        ]))
      };
      console.log(`Placa Base: ${t * 1e3}x${n * 1e3}mm, t=${o * 1e3}mm, ${w} pernos d=${l * 1e3}mm`), console.log(`  P=${b} kN, col=${a * 1e3}mm, mesh=${r * 1e3}mm`), console.log(`  ${P.length} triangulos, ${v.length} nodos`);
      try {
        const h = Tt(v, P, {
          supports: m,
          loads: I
        }, G), S = hn(v, P, G, h);
        e.nodes.val = v, e.elements.val = P, h && e.deformOutputs && (e.deformOutputs.val = h), e.nodeInputs && (e.nodeInputs.val = {
          supports: m,
          loads: I
        }), e.elementInputs && (e.elementInputs.val = {}), S && e.analyzeOutputs && (e.analyzeOutputs.val = S);
        let y = 0;
        h && h.deformations && h.deformations.forEach((R) => {
          const K = Math.sqrt(R[0] * R[0] + R[1] * R[1] + R[2] * R[2]);
          y = Math.max(y, K);
        }), console.log(`  max|u| = ${y.toExponential(4)}`);
      } catch (h) {
        console.warn("Placa Base failed:", h.message);
      }
      setTimeout(() => Et(), 50), et();
    }
    function ws() {
      const t = re("colB") || 0.3, n = re("colH") || 0.3, o = re("colT") || 8e-3, l = re("colLen") || 1.5, s = re("Lx") || 0.45, d = re("Ly") || 0.45, a = re("tPlaca") || 0.025, r = re("dBolt") || 0.022, f = re("sx") || 0.32, i = re("sy") || 0.32, c = Math.round(re("nSubColV") || 6), b = Math.round(re("nSubColH") || 4), w = Math.round(re("nSubPlaca") || 10), E = re("E") || 2e8, $ = re("nu") || 0.3, p = E / (2 * (1 + $)), x = re("P") || -300, T = s / 2, L = d / 2, k = r / 2, z = t / 2, P = n / 2, v = [], m = [], I = w, F = s / I, N = d / I, G = (ue, te) => te * (I + 1) + ue;
      for (let ue = 0; ue <= I; ue++) for (let te = 0; te <= I; te++) v.push([
        te * F,
        ue * N,
        0
      ]);
      const h = [
        [
          T - f / 2,
          L - i / 2
        ],
        [
          T + f / 2,
          L - i / 2
        ],
        [
          T + f / 2,
          L + i / 2
        ],
        [
          T - f / 2,
          L + i / 2
        ]
      ], S = (ue, te) => {
        for (const [be, Ee] of h) if ((ue - be) * (ue - be) + (te - Ee) * (te - Ee) < k * k) return true;
        return false;
      }, y = m.length;
      for (let ue = 0; ue < I; ue++) for (let te = 0; te < I; te++) {
        const be = (te + 0.5) * F, Ee = (ue + 0.5) * N;
        S(be, Ee) || m.push([
          G(te, ue),
          G(te + 1, ue),
          G(te + 1, ue + 1),
          G(te, ue + 1)
        ]);
      }
      const R = m.length - y, K = c, U = b, le = [
        [
          T - z,
          L - P
        ],
        [
          T + z,
          L - P
        ],
        [
          T + z,
          L + P
        ],
        [
          T - z,
          L + P
        ]
      ], ee = m.length, Z = [
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
      ], fe = (ue, te) => {
        for (let be = 0; be < (I + 1) * (I + 1); be++) if (Math.abs(v[be][0] - ue) < F * 0.3 && Math.abs(v[be][1] - te) < N * 0.3 && Math.abs(v[be][2]) < 1e-6) return be;
        return -1;
      };
      for (const [ue, te] of Z) {
        const [be, Ee] = le[ue], [ae, Ie] = le[te], We = [];
        for (let it = 0; it <= K; it++) {
          const dt = [], Ft = it / K * l;
          for (let Bt = 0; Bt <= U; Bt++) {
            const Pt = Bt / U, Dt = be + Pt * (ae - be), In = Ee + Pt * (Ie - Ee);
            if (it === 0) {
              const Ut = fe(Dt, In);
              if (Ut >= 0) {
                dt.push(Ut);
                continue;
              }
            }
            let ln = -1;
            for (let Ut = 0; Ut < v.length; Ut++) if (Math.abs(v[Ut][0] - Dt) < 1e-6 && Math.abs(v[Ut][1] - In) < 1e-6 && Math.abs(v[Ut][2] - Ft) < 1e-6) {
              ln = Ut;
              break;
            }
            ln >= 0 ? dt.push(ln) : (dt.push(v.length), v.push([
              Dt,
              In,
              Ft
            ]));
          }
          We.push(dt);
        }
        for (let it = 0; it < K; it++) for (let dt = 0; dt < U; dt++) m.push([
          We[it][dt],
          We[it][dt + 1],
          We[it + 1][dt + 1],
          We[it + 1][dt]
        ]);
      }
      const de = m.length - ee, ke = /* @__PURE__ */ new Map();
      for (let ue = 0; ue < (I + 1) * (I + 1); ue++) {
        const te = v[ue][0], be = v[ue][1];
        for (const [Ee, ae] of h) {
          const Ie = Math.sqrt((te - Ee) * (te - Ee) + (be - ae) * (be - ae));
          Ie >= k * 0.5 && Ie <= k * 2 && ke.set(ue, [
            true,
            true,
            true,
            true,
            true,
            true
          ]);
        }
      }
      const Oe = /* @__PURE__ */ new Map(), B = [];
      for (let ue = 0; ue < v.length; ue++) Math.abs(v[ue][2] - l) < 1e-6 && B.push(ue);
      const me = x / Math.max(B.length, 1);
      for (const ue of B) Oe.set(ue, [
        0,
        0,
        me,
        0,
        0,
        0
      ]);
      const se = {
        elasticities: /* @__PURE__ */ new Map(),
        poissonsRatios: /* @__PURE__ */ new Map(),
        thicknesses: /* @__PURE__ */ new Map(),
        shearModuli: /* @__PURE__ */ new Map()
      };
      for (let ue = y; ue < y + R; ue++) se.elasticities.set(ue, E), se.poissonsRatios.set(ue, $), se.thicknesses.set(ue, a), se.shearModuli.set(ue, p);
      for (let ue = ee; ue < ee + de; ue++) se.elasticities.set(ue, E), se.poissonsRatios.set(ue, $), se.thicknesses.set(ue, o), se.shearModuli.set(ue, p);
      console.log(`Col+Placa 3D: col ${t * 1e3}x${n * 1e3}x${o * 1e3}mm, h=${l}m`), console.log(`  Placa ${s * 1e3}x${d * 1e3}mm, t=${a * 1e3}mm, 4 pernos d=${r * 1e3}mm`), console.log(`  ${R} Q4 placa + ${de} Q4 columna = ${m.length} total`), console.log(`  ${v.length} nodos, P=${x} kN`);
      try {
        const ue = Tt(v, m, {
          supports: ke,
          loads: Oe
        }, se), te = hn(v, m, se, ue);
        e.nodes.val = v, e.elements.val = m, ue && e.deformOutputs && (e.deformOutputs.val = ue), e.nodeInputs && (e.nodeInputs.val = {
          supports: ke,
          loads: Oe
        }), e.elementInputs && (e.elementInputs.val = se), te && e.analyzeOutputs && (e.analyzeOutputs.val = te);
        let be = 0;
        (ue == null ? void 0 : ue.deformations) && ue.deformations.forEach((Ee) => {
          const ae = Math.sqrt(Ee[0] * Ee[0] + Ee[1] * Ee[1] + Ee[2] * Ee[2]);
          be = Math.max(be, ae);
        }), console.log(`  max|u| = ${be.toExponential(4)}`);
      } catch (ue) {
        console.warn("Col+Placa failed:", ue.message), e.nodes.val = v, e.elements.val = m, e.nodeInputs && (e.nodeInputs.val = {
          supports: ke,
          loads: Oe
        });
      }
      setTimeout(() => Et(), 50), et();
    }
    function Es() {
      const t = re("H") || 6, n = re("angle") || 45, o = re("bTop") || 3, l = re("bBot") || 3, s = re("meshSize") || 2, d = re("E") || 5e4, a = re("nu") || 0.3, r = re("gamma") || 18, f = re("c") || 15, i = re("phi") || 30, c = re("qs") || 0, b = t / Math.tan(n * Math.PI / 180), w = l + b + o, E = t, $ = [
        [
          0,
          -E,
          0
        ],
        [
          w,
          -E,
          0
        ],
        [
          w,
          t,
          0
        ],
        [
          l + b,
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
      ], { nodes: p, elements: x } = xn({
        points: $,
        polygon: [
          0,
          1,
          2,
          3,
          4,
          5
        ],
        maxMeshSize: s
      }), T = p, L = [], k = /* @__PURE__ */ new Map();
      for (let P = 0; P < T.length; P++) {
        const v = T[P][0], m = T[P][1];
        Math.abs(m + E) < 1e-6 ? (L.push({
          node: P,
          fixX: true,
          fixY: true
        }), k.set(P, [
          true,
          true,
          true,
          true,
          true,
          true
        ])) : (Math.abs(v) < 1e-6 || Math.abs(v - w) < 1e-6) && (L.push({
          node: P,
          fixX: true,
          fixY: false
        }), k.set(P, [
          true,
          false,
          true,
          true,
          true,
          true
        ]));
      }
      const z = t - s * 0.3;
      try {
        const P = T.map((S) => [
          S[0],
          S[1]
        ]), v = x.map((S) => [
          S[0],
          S[1],
          S[2]
        ]), m = Xa({
          nodes: P,
          elements: v,
          E: d,
          nu: a,
          gamma: r,
          c: f,
          phi: i,
          thickness: 1,
          supports: L,
          surcharge: c,
          surfaceYThreshold: z
        }), I = T.map((S) => [
          S[0],
          0,
          S[1]
        ]);
        e.nodes.val = I, e.elements.val = x;
        const F = /* @__PURE__ */ new Map();
        for (let S = 0; S < m.displacements.length; S++) {
          const [y, R] = m.displacements[S];
          F.set(S, [
            y,
            0,
            R,
            0,
            0,
            0
          ]);
        }
        e.deformOutputs && (e.deformOutputs.val = {
          deformations: F
        }), e.nodeInputs && (e.nodeInputs.val = {
          supports: k
        }), e.elementInputs && (e.elementInputs.val = {});
        const N = /* @__PURE__ */ new Map();
        for (let S = 0; S < m.plasticStrain.length; S++) {
          const y = m.plasticStrain[S];
          N.set(S, [
            y,
            y,
            y
          ]);
        }
        e.analyzeOutputs && (e.analyzeOutputs.val = {
          membraneXX: N
        });
        let G = 0;
        for (const [S, y] of m.displacements) {
          const R = Math.sqrt(S * S + y * y);
          G = Math.max(G, R);
        }
        let h = 0;
        for (const S of m.plasticStrain) h = Math.max(h, S);
        console.log(`Talud SRM: ${T.length} nodos, ${x.length} triangulos`), console.log(`  H=${t}, angulo=${n}\xB0, c=${f} kPa, \u03C6=${i}\xB0, \u03B3=${r}`), console.log("  \u2550\u2550\u2550 Strength Reduction Method (Mohr-Coulomb) \u2550\u2550\u2550"), console.log(`  FOS = ${m.fos.toFixed(3)}`), console.log(`  max|u| = ${G.toExponential(4)}`), console.log(`  max \u03B5_pl = ${h.toExponential(4)}`), m.fos < 1 ? console.warn("  \u26A0 TALUD INESTABLE (FOS < 1.0)") : m.fos < 1.5 && console.warn("  \u26A0 FOS < 1.5 \u2014 revisar estabilidad");
      } catch (P) {
        console.warn("Talud SRM failed:", P.message);
      }
      setTimeout(() => Et(), 50), et();
    }
    let dn = null, Lt = null, pn = null;
    function ya() {
      let t = document.getElementById("sections");
      if (!t) {
        t = document.createElement("div"), t.id = "sections";
        const n = document.getElementById("parameters");
        let o = document.getElementById("right-panels-wrapper");
        if (!o && n) {
          o = document.createElement("div"), o.id = "right-panels-wrapper", o.style.cssText = "position:absolute;bottom:0;right:0;z-index:3;max-height:95vh;display:flex;flex-direction:row;gap:0;align-items:flex-end;pointer-events:none;";
          let l = document.getElementById("luces-panel");
          l || (l = document.createElement("div"), l.id = "luces-panel", l.style.cssText = "width:180px;max-height:90vh;overflow-y:auto;pointer-events:auto;"), n.style.cssText = "width:240px;position:static;max-height:90vh;overflow-y:auto;pointer-events:auto;";
          const s = n.parentElement;
          s.removeChild(n), o.appendChild(t), o.appendChild(l), o.appendChild(n), s.appendChild(o);
        }
        o ? t.style.cssText = "width:200px;max-height:90vh;overflow-y:auto;pointer-events:auto;" : (t.style.cssText = "position:absolute;bottom:0;right:316px;width:250px;z-index:3;max-height:80vh;overflow-y:auto;", document.body.appendChild(t));
      }
      return t;
    }
    function Mt(t) {
      const n = Un.find((o) => o.id === O);
      return t / n.toM;
    }
    function wt(t) {
      const n = Un.find((o) => o.id === O);
      return t * n.toM;
    }
    function zn(t) {
      const n = os.find((l) => l.id === V.forceId), o = Un.find((l) => l.id === V.lengthId);
      return t / (n.toKN / (o.toM * o.toM));
    }
    function zo(t) {
      const n = os.find((l) => l.id === V.forceId), o = Un.find((l) => l.id === V.lengthId);
      return t * (n.toKN / (o.toM * o.toM));
    }
    function Ao() {
      return V.label;
    }
    function $a() {
      switch (Un.find((n) => n.id === O).id) {
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
    function Ma() {
      const t = zn(20594), n = zn(58840), o = Math.max(1, Math.round((n - t) / 40));
      return [
        Math.round(t),
        Math.round(n),
        o
      ];
    }
    function Ss(t, n, o, l, s) {
      const d = qe.steelVigaType, a = d === 0 ? bo() : go();
      if (qe.vigaMat === 0) {
        for (let r = 0; r < n.length; r++) {
          const f = n[r], i = `b${o}${r}`, c = `h${o}${r}`, b = {};
          b[i] = +Mt(f.b).toFixed(2), b[c] = +Mt(f.h).toFixed(2), t.addBinding(b, i, {
            min: l[0],
            max: l[1],
            step: l[2],
            label: `b sv${o}${r + 1}`
          }), t.addBinding(b, c, {
            min: l[0],
            max: l[1],
            step: l[2],
            label: `h sv${o}${r + 1}`
          });
        }
        t.on("change", (r) => {
          var _a2;
          const f = (_a2 = r.target) == null ? void 0 : _a2.key, i = f == null ? void 0 : f.match(new RegExp(`^b${o}(\\d+)$`)), c = f == null ? void 0 : f.match(new RegExp(`^h${o}(\\d+)$`));
          i && (n[parseInt(i[1])].b = wt(r.value), Pe()), c && (n[parseInt(c[1])].h = wt(r.value), Pe());
        });
      } else if (d <= 1) {
        for (let r = 0; r < n.length; r++) {
          const f = {};
          f[`p${o}${r}`] = n[r].profileIdx ?? 0, t.addBinding(f, `p${o}${r}`, {
            label: `sv${o}${r + 1}`,
            options: a
          });
        }
        t.on("change", (r) => {
          var _a2, _b;
          const i = (_b = (_a2 = r.target) == null ? void 0 : _a2.key) == null ? void 0 : _b.match(new RegExp(`^p${o}(\\d+)$`));
          i && (n[parseInt(i[1])].profileIdx = r.value, Pe());
        });
      } else if (d === 2) {
        for (let r = 0; r < n.length; r++) {
          const f = n[r], i = {}, c = `${o}${r}`;
          i[`bf${c}`] = +Mt(f.bf ?? 0.2).toFixed(3), i[`h${c}`] = +Mt(f.hf ?? 0.4).toFixed(3), i[`tf${c}`] = +Mt(f.tf ?? 0.015).toFixed(3), i[`tw${c}`] = +Mt(f.tw ?? 0.01).toFixed(3), t.addBinding(i, `bf${c}`, {
            min: l[0],
            max: l[1],
            step: l[2],
            label: `bf sv${o}${r + 1}`
          }), t.addBinding(i, `h${c}`, {
            min: l[0],
            max: l[1],
            step: l[2],
            label: `h sv${o}${r + 1}`
          }), t.addBinding(i, `tf${c}`, {
            min: s[0],
            max: s[1],
            step: s[2],
            label: `tf sv${o}${r + 1}`
          }), t.addBinding(i, `tw${c}`, {
            min: s[0],
            max: s[1],
            step: s[2],
            label: `tw sv${o}${r + 1}`
          });
        }
        t.on("change", (r) => {
          var _a2;
          const f = (_a2 = r.target) == null ? void 0 : _a2.key;
          for (let i = 0; i < n.length; i++) {
            const c = `${o}${i}`;
            f === `bf${c}` && (n[i].bf = wt(r.value), Pe()), f === `h${c}` && (n[i].hf = wt(r.value), Pe()), f === `tf${c}` && (n[i].tf = wt(r.value), Pe()), f === `tw${c}` && (n[i].tw = wt(r.value), Pe());
          }
        });
      } else {
        for (let r = 0; r < n.length; r++) {
          const f = n[r], i = {}, c = `${o}${r}`;
          i[`bc${c}`] = +Mt(f.bc ?? 0.2).toFixed(3), i[`hc${c}`] = +Mt(f.hc ?? 0.3).toFixed(3), i[`t${c}`] = +Mt(f.t ?? 8e-3).toFixed(3), t.addBinding(i, `bc${c}`, {
            min: l[0],
            max: l[1],
            step: l[2],
            label: `b sv${o}${r + 1}`
          }), t.addBinding(i, `hc${c}`, {
            min: l[0],
            max: l[1],
            step: l[2],
            label: `h sv${o}${r + 1}`
          }), t.addBinding(i, `t${c}`, {
            min: s[0],
            max: s[1],
            step: s[2],
            label: `t sv${o}${r + 1}`
          });
        }
        t.on("change", (r) => {
          var _a2;
          const f = (_a2 = r.target) == null ? void 0 : _a2.key;
          for (let i = 0; i < n.length; i++) {
            const c = `${o}${i}`;
            f === `bc${c}` && (n[i].bc = wt(r.value), Pe()), f === `hc${c}` && (n[i].hc = wt(r.value), Pe()), f === `t${c}` && (n[i].t = wt(r.value), Pe());
          }
        });
      }
    }
    function qn() {
      var _a2;
      if (Lt) {
        try {
          Lt.dispose();
        } catch {
        }
        Lt = null;
      }
      const t = document.getElementById("sections");
      if (t && (t.innerHTML = ""), A !== "edificio" && A !== "frame") {
        t && (t.style.display = "none");
        return;
      }
      const n = ya();
      if (!n) return;
      n.style.display = "";
      const o = M, l = Math.round(((_a2 = Q.nPisos) == null ? void 0 : _a2.val) ?? 3), s = $a(), d = Ma(), a = ie.length || 1, r = ne.length || 1;
      for (; qe.perFloor.length < l; ) {
        const v = qe.perFloor.length > 0 ? JSON.parse(JSON.stringify(qe.perFloor[qe.perFloor.length - 1])) : cn(a, r);
        qe.perFloor.push(v);
      }
      qe.perFloor.length > l && (qe.perFloor.length = l);
      for (const v of qe.perFloor) {
        for (; v.vigasX.length < a; ) v.vigasX.push(v.vigasX.length > 0 ? {
          ...v.vigasX[v.vigasX.length - 1]
        } : mt());
        for (v.vigasX.length > a && (v.vigasX.length = a); v.vigasY.length < r; ) v.vigasY.push(v.vigasY.length > 0 ? {
          ...v.vigasY[v.vigasY.length - 1]
        } : mt());
        v.vigasY.length > r && (v.vigasY.length = r);
      }
      Lt = new oo({
        title: `Sections (${o.label})`,
        container: n
      });
      const f = {
        colMat: qe.colMat
      };
      if (Lt.addBinding(f, "colMat", {
        label: "Col Material",
        options: {
          Hormigon: 0,
          Acero: 1,
          CFT: 2
        }
      }).on("change", (v) => {
        qe.colMat = v.value, qn(), Pe();
      }), qe.colMat === 0) {
        const v = {
          forma: qe.colShape
        };
        Lt.addBinding(v, "forma", {
          label: "Col forma",
          options: {
            Rectangular: 0,
            Circular: 1
          }
        }).on("change", (I) => {
          qe.colShape = I.value, qn(), Pe();
        });
        const m = {
          fc: +zn(qe.fc).toFixed(1)
        };
        Lt.addBinding(m, "fc", {
          min: d[0],
          max: d[1],
          step: d[2],
          label: `f'c col (${Ao()})`
        }), Lt.on("change", (I) => {
          var _a3;
          ((_a3 = I.target) == null ? void 0 : _a3.key) === "fc" && (qe.fc = zo(I.value), Pe());
        });
      } else if (qe.colMat === 1) {
        const v = {
          colType: qe.steelColType
        };
        Lt.addBinding(v, "colType", {
          label: "Col tipo",
          options: {
            "W profile": 0,
            "HSS profile": 1,
            "I param": 2,
            Tubular: 3
          }
        }).on("change", (m) => {
          qe.steelColType = m.value, qn(), Pe();
        });
      }
      Lt.addBlade({
        view: "separator"
      });
      const i = {
        vigaMat: qe.vigaMat
      };
      if (Lt.addBinding(i, "vigaMat", {
        label: "Viga Material",
        options: {
          Hormigon: 0,
          Acero: 1
        }
      }).on("change", (v) => {
        qe.vigaMat = v.value, qn(), Pe();
      }), qe.vigaMat === 1) {
        const v = {
          vigaType: qe.steelVigaType
        };
        Lt.addBinding(v, "vigaType", {
          label: "Viga tipo",
          options: {
            "W profile": 0,
            "HSS profile": 1,
            "I param": 2,
            Tubular: 3
          }
        }).on("change", (m) => {
          qe.steelVigaType = m.value, qn(), Pe();
        });
      }
      const c = qe.steelColType === 0 ? bo() : go();
      qe.steelVigaType === 0 ? bo() : go();
      const b = O === "m" ? [
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
      for (let v = 0; v < l; v++) {
        const m = qe.perFloor[v], I = Lt.addFolder({
          title: `Piso ${v + 1}`,
          expanded: v < 2
        });
        if (qe.colMat === 0) if (qe.colShape === 1) {
          const F = {
            dCol: +Mt(m.dCol).toFixed(2)
          };
          I.addBinding(F, "dCol", {
            min: s[0],
            max: s[1],
            step: s[2],
            label: "d col"
          }), I.on("change", (N) => {
            var _a3;
            ((_a3 = N.target) == null ? void 0 : _a3.key) === "dCol" && (m.dCol = wt(N.value), Pe());
          });
        } else {
          const F = {
            bCol: +Mt(m.bCol).toFixed(2),
            hCol: +Mt(m.hCol).toFixed(2)
          };
          I.addBinding(F, "bCol", {
            min: s[0],
            max: s[1],
            step: s[2],
            label: "b col"
          }), I.addBinding(F, "hCol", {
            min: s[0],
            max: s[1],
            step: s[2],
            label: "h col"
          }), I.on("change", (N) => {
            var _a3, _b;
            ((_a3 = N.target) == null ? void 0 : _a3.key) === "bCol" && (m.bCol = wt(N.value), Pe()), ((_b = N.target) == null ? void 0 : _b.key) === "hCol" && (m.hCol = wt(N.value), Pe());
          });
        }
        else if (qe.colMat === 1) if (qe.steelColType <= 1) {
          const F = {
            col: m.colProfileIdx
          };
          I.addBinding(F, "col", {
            label: "Columna",
            options: c
          }).on("change", (N) => {
            m.colProfileIdx = N.value, Pe();
          });
        } else if (qe.steelColType === 2) {
          const F = {
            bf: +Mt(m.colBf ?? 0.3).toFixed(3),
            h: +Mt(m.colHf ?? 0.3).toFixed(3),
            tf: +Mt(m.colTf ?? 0.02).toFixed(3),
            tw: +Mt(m.colTw ?? 0.012).toFixed(3)
          };
          I.addBinding(F, "bf", {
            min: s[0],
            max: s[1],
            step: s[2],
            label: "Col bf"
          }), I.addBinding(F, "h", {
            min: s[0],
            max: s[1],
            step: s[2],
            label: "Col h"
          }), I.addBinding(F, "tf", {
            min: b[0],
            max: b[1],
            step: b[2],
            label: "Col tf"
          }), I.addBinding(F, "tw", {
            min: b[0],
            max: b[1],
            step: b[2],
            label: "Col tw"
          }), I.on("change", (N) => {
            var _a3, _b, _c, _d;
            ((_a3 = N.target) == null ? void 0 : _a3.key) === "bf" && (m.colBf = wt(N.value), Pe()), ((_b = N.target) == null ? void 0 : _b.key) === "h" && (m.colHf = wt(N.value), Pe()), ((_c = N.target) == null ? void 0 : _c.key) === "tf" && (m.colTf = wt(N.value), Pe()), ((_d = N.target) == null ? void 0 : _d.key) === "tw" && (m.colTw = wt(N.value), Pe());
          });
        } else {
          const F = {
            bc: +Mt(m.colBc ?? 0.3).toFixed(3),
            hc: +Mt(m.colHc ?? 0.3).toFixed(3),
            t: +Mt(m.colT ?? 0.01).toFixed(3)
          };
          I.addBinding(F, "bc", {
            min: s[0],
            max: s[1],
            step: s[2],
            label: "Col b"
          }), I.addBinding(F, "hc", {
            min: s[0],
            max: s[1],
            step: s[2],
            label: "Col h"
          }), I.addBinding(F, "t", {
            min: b[0],
            max: b[1],
            step: b[2],
            label: "Col t"
          }), I.on("change", (N) => {
            var _a3, _b, _c;
            ((_a3 = N.target) == null ? void 0 : _a3.key) === "bc" && (m.colBc = wt(N.value), Pe()), ((_b = N.target) == null ? void 0 : _b.key) === "hc" && (m.colHc = wt(N.value), Pe()), ((_c = N.target) == null ? void 0 : _c.key) === "t" && (m.colT = wt(N.value), Pe());
          });
        }
        else {
          const F = {
            bc: +Mt(m.colBc ?? 0.3).toFixed(3),
            hc: +Mt(m.colHc ?? 0.3).toFixed(3),
            t: +Mt(m.colT ?? 0.01).toFixed(3),
            Es: +zn(m.colEs ?? 2e8).toFixed(0),
            nuS: m.colNuS ?? 0.3,
            fc: +zn(m.colFc ?? 28e3).toFixed(1),
            nuC: m.colNuC ?? 0.2
          };
          I.addBinding(F, "bc", {
            min: s[0],
            max: s[1],
            step: s[2],
            label: "Col b"
          }), I.addBinding(F, "hc", {
            min: s[0],
            max: s[1],
            step: s[2],
            label: "Col h"
          }), I.addBinding(F, "t", {
            min: b[0],
            max: b[1],
            step: b[2],
            label: "Col t"
          }), I.addBlade({
            view: "separator"
          });
          const N = +zn(1e8).toFixed(0), G = +zn(3e8).toFixed(0), h = Math.max(1, Math.round((G - N) / 200));
          I.addBinding(F, "Es", {
            min: N,
            max: G,
            step: h,
            label: `Es (${Ao()})`
          }), I.addBinding(F, "nuS", {
            min: 0.15,
            max: 0.45,
            step: 0.01,
            label: "\u03BDs"
          }), I.addBinding(F, "fc", {
            min: d[0],
            max: d[1],
            step: d[2],
            label: `f'c (${Ao()})`
          }), I.addBinding(F, "nuC", {
            min: 0.1,
            max: 0.35,
            step: 0.01,
            label: "\u03BDc"
          }), I.on("change", (S) => {
            var _a3, _b, _c, _d, _e2, _f, _g;
            ((_a3 = S.target) == null ? void 0 : _a3.key) === "bc" && (m.colBc = wt(S.value), Pe()), ((_b = S.target) == null ? void 0 : _b.key) === "hc" && (m.colHc = wt(S.value), Pe()), ((_c = S.target) == null ? void 0 : _c.key) === "t" && (m.colT = wt(S.value), Pe()), ((_d = S.target) == null ? void 0 : _d.key) === "Es" && (m.colEs = zo(S.value), Pe()), ((_e2 = S.target) == null ? void 0 : _e2.key) === "nuS" && (m.colNuS = S.value, Pe()), ((_f = S.target) == null ? void 0 : _f.key) === "fc" && (m.colFc = zo(S.value), Pe()), ((_g = S.target) == null ? void 0 : _g.key) === "nuC" && (m.colNuC = S.value, Pe());
          });
        }
        if (m.vigasX.length > 0) {
          const F = I.addFolder({
            title: `Vigas X (${m.vigasX.length})`,
            expanded: false
          });
          Ss(F, m.vigasX, "x", s, b);
        }
        if (m.vigasY.length > 0) {
          const F = I.addFolder({
            title: `Vigas Y (${m.vigasY.length})`,
            expanded: false
          });
          Ss(F, m.vigasY, "y", s, b);
        }
      }
      Lt.addBlade({
        view: "separator"
      });
      const w = Lt.addFolder({
        title: "Vigas Secundarias",
        expanded: false
      }), E = {
        activar: Se,
        direccion: Ve === "x" ? 0 : 1,
        cantidad: Ae
      };
      w.addBinding(E, "activar", {
        label: "Activar"
      }), w.addBinding(E, "direccion", {
        label: "Corren en",
        options: {
          "X (entre ejes Y)": 0,
          "Y (entre ejes X)": 1
        }
      }), w.addBinding(E, "cantidad", {
        min: 1,
        max: 5,
        step: 1,
        label: "Cantidad/vano"
      }), w.on("change", (v) => {
        var _a3, _b, _c;
        ((_a3 = v.target) == null ? void 0 : _a3.key) === "activar" && (Se = v.value, Pe()), ((_b = v.target) == null ? void 0 : _b.key) === "direccion" && (Ve = v.value === 0 ? "x" : "y", Pe()), ((_c = v.target) == null ? void 0 : _c.key) === "cantidad" && (Ae = Math.round(v.value), Pe());
      }), Lt.addBlade({
        view: "separator"
      });
      const $ = Lt.addFolder({
        title: "Losas de Piso",
        expanded: true
      }), p = {
        activar: Xe,
        espesor: +Mt(lt).toFixed(3),
        subdivX: pt,
        subdivY: $t
      };
      $.addBinding(p, "activar", {
        label: "Activar losas"
      }), $.addBinding(p, "espesor", {
        min: s[0],
        max: s[1] * 0.3,
        step: s[2],
        label: `Espesor (${o.length})`
      }), $.addBinding(p, "subdivX", {
        min: 1,
        max: 6,
        step: 1,
        label: "Subdiv. X"
      }), $.addBinding(p, "subdivY", {
        min: 1,
        max: 6,
        step: 1,
        label: "Subdiv. Y"
      }), $.on("change", (v) => {
        var _a3, _b, _c, _d;
        ((_a3 = v.target) == null ? void 0 : _a3.key) === "activar" && (Xe = v.value, Pe()), ((_b = v.target) == null ? void 0 : _b.key) === "espesor" && (lt = wt(v.value), Pe()), ((_c = v.target) == null ? void 0 : _c.key) === "subdivX" && (pt = Math.round(v.value), Pe()), ((_d = v.target) == null ? void 0 : _d.key) === "subdivY" && ($t = Math.round(v.value), Pe());
      }), Lt.addBlade({
        view: "separator"
      });
      const x = Lt.addFolder({
        title: "Muros de Corte",
        expanded: true
      }), T = {
        espesor: +Mt(He).toFixed(3),
        subdivH: je,
        subdivW: ge
      };
      x.addBinding(T, "espesor", {
        min: s[0],
        max: s[1],
        step: s[2],
        label: `Espesor (${o.length})`
      }), x.addBinding(T, "subdivH", {
        min: 1,
        max: 6,
        step: 1,
        label: "Subdiv. V"
      }), x.addBinding(T, "subdivW", {
        min: 1,
        max: 6,
        step: 1,
        label: "Subdiv. H"
      }), x.on("change", (v) => {
        var _a3, _b, _c;
        ((_a3 = v.target) == null ? void 0 : _a3.key) === "espesor" && (He = wt(v.value), Pe()), ((_b = v.target) == null ? void 0 : _b.key) === "subdivH" && (je = Math.round(v.value), Pe()), ((_c = v.target) == null ? void 0 : _c.key) === "subdivW" && (ge = Math.round(v.value), Pe());
      });
      const L = ie.length || 1, k = ne.length || 1, z = L + 1, P = k + 1;
      if (L > 0) {
        const v = x.addFolder({
          title: `Muros dir X (${L} vanos)`,
          expanded: false
        });
        for (let m = 0; m < L; m++) for (let I = 0; I < P; I++) {
          const F = `wx_${m}_${I}`, N = ve.some((S) => S.dir === "x" && S.bay === m && S.axisIdx === I), G = {};
          G[F] = N;
          const h = `Vano X${m + 1} / Eje Y${String.fromCharCode(65 + I)}`;
          v.addBinding(G, F, {
            label: h
          }).on("change", (S) => {
            S.value ? ve.push({
              dir: "x",
              bay: m,
              axisIdx: I,
              floors: [
                -1
              ]
            }) : ve = ve.filter((y) => !(y.dir === "x" && y.bay === m && y.axisIdx === I)), Pe();
          });
        }
      }
      if (k > 0) {
        const v = x.addFolder({
          title: `Muros dir Y (${k} vanos)`,
          expanded: false
        });
        for (let m = 0; m < k; m++) for (let I = 0; I < z; I++) {
          const F = `wy_${m}_${I}`, N = ve.some((S) => S.dir === "y" && S.bay === m && S.axisIdx === I), G = {};
          G[F] = N;
          const h = `Vano Y${m + 1} / Eje X${I + 1}`;
          v.addBinding(G, F, {
            label: h
          }).on("change", (S) => {
            S.value ? ve.push({
              dir: "y",
              bay: m,
              axisIdx: I,
              floors: [
                -1
              ]
            }) : ve = ve.filter((y) => !(y.dir === "y" && y.bay === m && y.axisIdx === I)), Pe();
          });
        }
      }
      if (ve.length > 0) {
        x.addBlade({
          view: "separator"
        });
        const v = {
          muros: `${ve.length} ubicaciones`
        };
        x.addBinding(v, "muros", {
          label: "Total",
          readonly: true
        });
      }
    }
    function an() {
      const t = document.getElementById("parameters");
      if (!t) return;
      if (ce || (ce = t.innerHTML), $e) {
        try {
          $e.dispose();
        } catch {
        }
        $e = null;
      }
      if (dn) {
        try {
          dn.dispose();
        } catch {
        }
        dn = null;
      }
      t.innerHTML = "";
      const n = A.charAt(0).toUpperCase() + A.slice(1);
      $e = new oo({
        title: `Parameters \u2014 ${n}`,
        container: t
      });
      const o = ds()[A];
      if (o) {
        const s = {};
        for (const a of o) s[a.key] = Q[a.key].val;
        for (const a of o) $e.addBinding(s, a.key, {
          min: Q[a.key].min,
          max: Q[a.key].max,
          step: Q[a.key].step,
          label: Q[a.key].label
        });
        const d = $e.addFolder({
          title: "Rangos",
          expanded: false
        });
        for (const a of o) {
          const r = {
            min: Q[a.key].min,
            max: Q[a.key].max
          };
          d.addBinding(r, "min", {
            label: `${a.key} min`,
            step: a.step
          }), d.addBinding(r, "max", {
            label: `${a.key} max`,
            step: a.step
          }), d.on("change", () => {
            Q[a.key] && (Q[a.key].min = r.min, Q[a.key].max = r.max, Q[a.key].val < r.min && (Q[a.key].val = r.min), Q[a.key].val > r.max && (Q[a.key].val = r.max)), an(), Pe();
          });
        }
        $e.on("change", (a) => {
          var _a2, _b;
          const r = (_a2 = a.target) == null ? void 0 : _a2.key;
          if (r && Q[r]) {
            if (Q[r].val = a.value, A === "edificio" && (r === "nVanosX" || r === "nVanosY" || r === "nPisos")) {
              if (r === "nVanosX" || r === "nVanosY") {
                const f = Math.round(Q.nVanosX.val), i = Math.round(Q.nVanosY.val);
                for (; ie.length < f; ) ie.push(ie[ie.length - 1] ?? M.defaultSpan);
                for (ie.length > f && (ie.length = f); ne.length < i; ) ne.push(ne[ne.length - 1] ?? M.defaultSpan * 0.8);
                ne.length > i && (ne.length = i);
              }
              if (r === "nPisos" || r === "hPiso") {
                const f = Math.round(Q.nPisos.val), i = ((_b = Q.hPiso) == null ? void 0 : _b.val) ?? 3;
                for (; _.length < f; ) _.push(_[_.length - 1] ?? i);
                _.length > f && (_.length = f);
              }
              an();
            }
            Pe();
          }
        });
      }
      if (A === "edificio") {
        if (pn) {
          try {
            pn.dispose();
          } catch {
          }
          pn = null;
        }
        const s = document.getElementById("luces-panel");
        if (s) {
          let d = function() {
            var _a2, _b, _c, _d;
            const f = "ABCDEFGHIJKLMNOPQRSTUVWXYZ", i = ((_a2 = Q.Lvix) == null ? void 0 : _a2.val) || 0, c = ((_b = Q.Lvdx) == null ? void 0 : _b.val) || 0, b = ((_c = Q.Lviy) == null ? void 0 : _c.val) || 0, w = ((_d = Q.Lvdy) == null ? void 0 : _d.val) || 0;
            let E = "X: ";
            i > 0 && (E += `\u251C${i.toFixed(1)}\u2524`);
            for (let x = 0; x < ie.length; x++) E += `[${f[x + (i > 0 ? 1 : 0)]}]\u2500\u2500${ie[x].toFixed(1)}\u2500\u2500`;
            E += `[${f[ie.length + (i > 0 ? 1 : 0)]}]`, c > 0 && (E += `\u251C${c.toFixed(1)}\u2524`);
            let $ = "Y: ";
            b > 0 && ($ += `\u251C${b.toFixed(1)}\u2524`);
            for (let x = 0; x < ne.length; x++) $ += `[${x + 1 + (b > 0 ? 1 : 0)}]\u2500\u2500${ne[x].toFixed(1)}\u2500\u2500`;
            $ += `[${ne.length + 1 + (b > 0 ? 1 : 0)}]`, w > 0 && ($ += `\u251C${w.toFixed(1)}\u2524`);
            let p = "Z: ";
            for (let x = 0; x < _.length; x++) p += `P${x + 1}=${_[x].toFixed(1)} `;
            r.textContent = E + `
` + $ + `
` + p;
          };
          s.innerHTML = "";
          const a = M;
          try {
            pn = new oo({
              title: `Luces (${a.length})`,
              container: s
            });
            const f = pn.addFolder({
              title: "Luces X",
              expanded: true
            });
            for (let c = 0; c < ie.length; c++) {
              const b = c, w = {
                v: ie[c]
              };
              f.addBinding(w, "v", {
                min: a.spanRange[0],
                max: a.spanRange[1],
                step: a.spanRange[2],
                label: `svx${c + 1}`
              }).on("change", (E) => {
                ie[b] = E.value, Pe();
              });
            }
            const i = pn.addFolder({
              title: "Luces Y",
              expanded: true
            });
            for (let c = 0; c < ne.length; c++) {
              const b = c, w = {
                v: ne[c]
              };
              i.addBinding(w, "v", {
                min: a.spanRange[0],
                max: a.spanRange[1],
                step: a.spanRange[2],
                label: `svy${c + 1}`
              }).on("change", (E) => {
                ne[b] = E.value, Pe();
              });
            }
            if (_.length > 0) {
              const c = pn.addFolder({
                title: "Alturas por Piso",
                expanded: true
              });
              for (let b = 0; b < _.length; b++) {
                const w = b, E = {
                  v: _[b]
                };
                c.addBinding(E, "v", {
                  min: a.heightRange[0],
                  max: a.heightRange[1],
                  step: a.heightRange[2],
                  label: `Piso ${b + 1}`
                }).on("change", ($) => {
                  _[w] = $.value, Pe();
                });
              }
            }
          } catch (f) {
            console.error("Luces Tweakpane error:", f);
          }
          const r = document.createElement("div");
          r.style.cssText = "font-family:monospace;font-size:10px;color:#aaa;padding:6px;background:#1a1a2e;border-radius:4px;margin-top:6px;line-height:1.6;white-space:pre;overflow-x:auto;", d(), s.appendChild(r);
        }
      }
      if (qn(), $e) {
        $e.addBlade({
          view: "separator"
        });
        const s = mo()[A];
        if (s && s.length > 0) {
          const d = {};
          s.forEach((r, f) => {
            d[r.label] = f;
          });
          const a = {
            apoyo: vt
          };
          $e.addBinding(a, "apoyo", {
            label: "Apoyo",
            options: d
          }).on("change", (r) => {
            vt = r.value, Pe();
          });
        }
        if (A === "placa-3q" || A === "placa-q4") {
          const d = {
            teoria: Ce
          };
          $e.addBinding(d, "teoria", {
            label: "Teor\xEDa",
            options: {
              Membrana: 1,
              "Kirchhoff (delgada)": 2,
              "Mindlin (gruesa)": 3
            }
          }).on("change", (a) => {
            Ce = a.value, Pe();
          });
        }
      }
      const l = ps()[A];
      if (l && l.length > 0) {
        dn = new oo({
          title: `Cargas Est\xE1ticas \u2014 ${n}`,
          container: t
        });
        const s = {};
        for (const a of l) s[a.key] = ut[a.key].val;
        for (const a of l) dn.addBinding(s, a.key, {
          min: ut[a.key].min,
          max: ut[a.key].max,
          step: ut[a.key].step,
          label: ut[a.key].label
        });
        const d = dn.addFolder({
          title: "Rangos",
          expanded: false
        });
        for (const a of l) {
          const r = {
            min: ut[a.key].min,
            max: ut[a.key].max
          };
          d.addBinding(r, "min", {
            label: `${a.key} min`,
            step: a.step
          }), d.addBinding(r, "max", {
            label: `${a.key} max`,
            step: a.step
          }), d.on("change", () => {
            ut[a.key] && (ut[a.key].min = r.min, ut[a.key].max = r.max, ut[a.key].val < r.min && (ut[a.key].val = r.min), ut[a.key].val > r.max && (ut[a.key].val = r.max)), an(), Pe();
          });
        }
        dn.on("change", (a) => {
          var _a2;
          const r = (_a2 = a.target) == null ? void 0 : _a2.key;
          if (r && ut[r]) {
            if (ut[r].val = a.value, e.nodeInputs) {
              const f = e.nodeInputs.val;
              f.supports && (e.nodeInputs.val = {
                supports: f.supports
              });
            }
            setTimeout(() => Ro(), 30);
          }
        });
      }
      window.__cad = {
        setParam: (s, d) => {
          if (Q[s]) Q[s].val = d, Pe(), an();
          else if (ut[s]) {
            if (ut[s].val = d, e.nodeInputs) {
              const a = e.nodeInputs.val;
              a.supports && (e.nodeInputs.val = {
                supports: a.supports
              });
            }
            setTimeout(() => {
              Ro(), an();
            }, 30);
          }
        },
        getParams: () => {
          const s = {};
          for (const d in Q) s[d] = Q[d].val;
          for (const d in ut) s[d] = ut[d].val;
          return s;
        },
        setGenerator: tt,
        createCustomPanel: (s, d, a) => wa(s, d, a),
        removeCustomPanel: (s) => {
          Is(s);
        }
      };
    }
    const Lo = /* @__PURE__ */ new Map();
    function wa(t, n, o) {
      var _a2;
      Is(t);
      let l = document.querySelector("#cad3d-custom-panels");
      if (!l) {
        l = document.createElement("div"), l.id = "cad3d-custom-panels";
        const r = document.querySelector("#parameters");
        r ? (_a2 = r.parentElement) == null ? void 0 : _a2.insertBefore(l, r.nextSibling) : document.body.appendChild(l);
      }
      const s = document.createElement("div");
      s.className = "cad3d-custom-panel", s.style.marginBottom = "4px", l.appendChild(s);
      const d = new oo({
        title: t,
        container: s
      }), a = {};
      for (const [r, f] of Object.entries(n)) {
        const i = f.label || r;
        if (Array.isArray(f.value)) {
          a[r] = f.value;
          const c = {
            [r]: f.value.join(", ")
          };
          d.addBinding(c, r, {
            label: i
          }).on("change", (b) => {
            a[r] = b.value.split(",").map((w) => parseFloat(w.trim())).filter((w) => !isNaN(w)), o && o({
              ...a
            });
          });
        } else if (f.options) {
          a[r] = f.value;
          const c = {
            [r]: f.value
          }, b = {};
          for (const w of f.options) b[w] = w;
          d.addBinding(c, r, {
            label: i,
            options: b
          }).on("change", (w) => {
            a[r] = w.value, o && o({
              ...a
            });
          });
        } else if (typeof f.value == "boolean") {
          a[r] = f.value;
          const c = {
            [r]: f.value
          };
          d.addBinding(c, r, {
            label: i
          }).on("change", (b) => {
            a[r] = b.value, o && o({
              ...a
            });
          });
        } else if (typeof f.value == "string") {
          a[r] = f.value;
          const c = {
            [r]: f.value
          };
          d.addBinding(c, r, {
            label: i
          }).on("change", (b) => {
            a[r] = b.value, o && o({
              ...a
            });
          });
        } else {
          a[r] = f.value;
          const c = {
            [r]: f.value
          }, b = {
            label: i
          };
          f.min !== void 0 && (b.min = f.min), f.max !== void 0 && (b.max = f.max), f.step !== void 0 && (b.step = f.step), d.addBinding(c, r, b).on("change", (w) => {
            a[r] = w.value, o && o({
              ...a
            });
          });
        }
      }
      return o && d.addButton({
        title: "Aplicar"
      }).on("click", () => {
        o({
          ...a
        });
      }), Lo.set(t, {
        pane: d,
        values: a
      }), console.log(`Panel "${t}" created with ${Object.keys(n).length} params`), a;
    }
    function Is(t) {
      const n = Lo.get(t);
      if (n) {
        try {
          n.pane.dispose();
        } catch {
        }
        Lo.delete(t);
      }
    }
    function Ea() {
      if ($e) {
        try {
          $e.dispose();
        } catch {
        }
        $e = null;
      }
      if (dn) {
        try {
          dn.dispose();
        } catch {
        }
        dn = null;
      }
      if (Lt) {
        try {
          Lt.dispose();
        } catch {
        }
        Lt = null;
      }
      if (pn) {
        try {
          pn.dispose();
        } catch {
        }
        pn = null;
      }
      const t = document.getElementById("sections");
      t && t.remove();
      const n = document.getElementById("right-panels-wrapper"), o = document.getElementById("parameters");
      n && o && (o.style.cssText = "", document.body.appendChild(o), n.remove()), o && ce && (o.innerHTML = ce);
    }
    const Le = document.createElement("div");
    Le.id = "cad3d-panel";
    const ks = document.createElement("style");
    ks.textContent = `
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
    /* \u2500\u2500 Mobile: hamburger toggle \u2500\u2500 */
    #mobile-menu-btn {
      display: none;
      position: fixed; top: 10px; left: 10px; z-index: 1000001;
      width: 40px; height: 40px; border-radius: 8px;
      background: rgba(30,30,30,0.9); color: #fff; border: 1px solid #555;
      font-size: 22px; cursor: pointer;
      align-items: center; justify-content: center;
      backdrop-filter: blur(4px);
    }
    /* \u2500\u2500 Mobile portrait: FEM Studio panel \u2500\u2500 */
    @media (max-width: 600px) {
      #mobile-menu-btn { display: flex; }
      #cad3d-panel {
        width: 170px; padding: 8px 10px; font-size: 11px;
        max-height: calc(100vh - 20px); top: 10px; bottom: auto; left: 5px;
        overflow-y: auto;
        display: none;
      }
      #cad3d-panel.mobile-open { display: block; }
      #cad3d-panel button { padding: 2px 5px; font-size: 10px; }
      #cad3d-panel .btn-row { gap: 2px; margin-top: 2px; }
      #cad3d-panel h3 { font-size: 11px; margin-bottom: 4px; }
      #cad3d-panel .cmd-input { font-size: 10px; padding: 3px 4px; margin-top: 4px; }
      #cad3d-panel .section-label { font-size: 9px; margin-top: 4px; }
      #fem-inspect-panel { width: calc(100% - 10px) !important; right: 5px !important; left: 5px !important; top: auto !important; bottom: 5px !important; max-height: 50vh; }
    }
    /* \u2500\u2500 Mobile landscape: short height \u2500\u2500 */
    @media (max-height: 500px) and (orientation: landscape) {
      #cad3d-panel {
        width: 140px; padding: 4px 6px; font-size: 10px;
        max-height: calc(100vh - 10px); bottom: 5px; left: 5px;
        top: 5px; overflow-y: auto;
      }
      #cad3d-panel h3 { font-size: 10px; margin-bottom: 2px; }
      #cad3d-panel button { padding: 1px 4px; font-size: 9px; }
      #cad3d-panel .btn-row { gap: 1px; margin-top: 1px; }
      #cad3d-panel .section-label { font-size: 8px; margin-top: 2px; }
      #cad3d-panel .cmd-input { font-size: 9px; padding: 2px 3px; margin-top: 2px; }
      /* Collapse sections panel on landscape mobile */
      .cad3d-sections-panel { display: none !important; }
      .cad3d-params-panel { display: none !important; }
      /* Make 3D viewer use full width minus CLI panel */
      canvas { position: fixed !important; top: 0 !important; left: 150px !important; width: calc(100vw - 150px) !important; height: 100vh !important; }
    }
    /* \u2500\u2500 Small mobile (< 400px width) \u2500\u2500 */
    @media (max-width: 400px) {
      #cad3d-panel {
        width: 130px; padding: 4px 6px; font-size: 9px;
        max-height: 50vh;
      }
      #cad3d-panel button { padding: 1px 3px; font-size: 8px; min-width: 0; }
    }
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
  `, document.head.appendChild(ks), Za() === "light" && document.documentElement.classList.add("awatif-light"), Qa((t) => {
      t === "light" ? document.documentElement.classList.add("awatif-light") : document.documentElement.classList.remove("awatif-light"), A && Et(true);
    }), Le.innerHTML = `
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
        <button data-ex="muro-q4">Muro Q4</button>
        <button data-ex="viga-q4">Viga Q4</button>
        <button data-ex="placa-xz">Placa XZ</button>
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
          <option value="import-s2k">\u{1F4E5} Import S2K (SAP2000)</option>
          <option value="import-ifc">\u{1F4E5} Import IFC (Revit/ArchiCAD)</option>
          <option value="export-e2k">\u{1F4E4} Export E2K (ETABS)</option>
          <option value="export-s2k">\u{1F4E4} Export S2K (SAP2000)</option>
          <option value="import-py">\u{1F4E5} Import OpenSeesPy</option>
          <option value="export-py">\u{1F4E4} Export OpenSeesPy</option>
          <option value="import-tcl">\u{1F4E5} Import OpenSees Tcl</option>
          <option value="export-tcl">\u{1F4E4} Export OpenSees Tcl</option>
        </select>
        <input type="file" id="cad3d-io-file" accept=".e2k,.E2K,.s2k,.S2K,.py,.tcl,.ifc,.IFC" style="display:none">
        <select id="cad3d-tests-menu" title="Validation tests vs ETABS" style="background:var(--cad-btn-bg);color:var(--cad-btn-text);border:1px solid var(--cad-btn-border);padding:2px 4px;font-size:11px;cursor:pointer;">
          <option value="">\u{1F9EA} Tests</option>
          <option value="test-cantilever">1. Cantilever (Exact)</option>
          <option value="test-portal-1p">2. Portal 1-Story (ETABS)</option>
          <option value="test-portal-2p">3. Portal 2-Story (ETABS)</option>
          <option value="test-wall-only">4. Wall Q4 Only (ETABS)</option>
          <option value="test-portal-wall">5. Portal + Wall (ETABS)</option>
          <option value="test-wilson-beam">6. Wilson Cantilever Q4 (incomp.)</option>
          <!-- Scordelis-Lo requires MITC4 for curved shells - not yet implemented -->
          <option value="test-all">\u25B6 Run All Tests</option>
        </select>
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
        <button id="cad3d-calc" title="Calculadora FEM: editor MATLAB + output KaTeX">\u{1F9EE} C\xE1lculo</button>
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
    let Ct = null;
    function Sa() {
      var _a2, _b, _c, _d, _e2, _f;
      const t = e.nodes.val, n = e.elements.val, o = (_a2 = e.nodeInputs) == null ? void 0 : _a2.val, l = (_b = e.elementInputs) == null ? void 0 : _b.val, s = O, d = g, a = [];
      if (a.push("# Awatif FEM \u2014 Model Export"), a.push(`# Generator: ${A || "custom"}`), a.push(`# Units: ${d}, ${s}`), a.push(`# ${(/* @__PURE__ */ new Date()).toISOString()}`), a.push(""), a.push(`## NODES (${t.length})`), a.push("# idx     X          Y          Z"), t.forEach((i, c) => {
        a.push(`  ${String(c).padStart(4)}  ${i[0].toFixed(4).padStart(10)}  ${i[1].toFixed(4).padStart(10)}  ${i[2].toFixed(4).padStart(10)}`);
      }), a.push(""), a.push(`## ELEMENTS (${n.length})`), a.push("# idx    nodeI  nodeJ"), n.forEach((i, c) => {
        const b = i.map((w) => String(w).padStart(6)).join("");
        a.push(`  ${String(c).padStart(4)}  ${b}`);
      }), a.push(""), (o == null ? void 0 : o.supports) && o.supports.size > 0 && (a.push(`## SUPPORTS (${o.supports.size})`), a.push("# node   Ux  Uy  Uz  Rx  Ry  Rz"), o.supports.forEach((i, c) => {
        const b = i.map((w) => w ? "  1" : "  0").join("");
        a.push(`  ${String(c).padStart(4)} ${b}`);
      }), a.push("")), (o == null ? void 0 : o.loads) && o.loads.size > 0 && (a.push(`## LOADS (${o.loads.size})`), a.push("# node         Fx          Fy          Fz          Mx          My          Mz"), o.loads.forEach((i, c) => {
        const b = i.map((w) => w.toFixed(3).padStart(11)).join(" ");
        a.push(`  ${String(c).padStart(4)}  ${b}`);
      }), a.push("")), l) {
        a.push("## ELEMENT PROPERTIES");
        const i = [
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
        ], c = "# elem  " + i.map((b) => b.name.padStart(12)).join(" ");
        a.push(c);
        for (let b = 0; b < n.length; b++) {
          const w = i.map((E) => {
            var _a3;
            const $ = (_a3 = E.map) == null ? void 0 : _a3.get(b);
            return $ !== void 0 ? $.toExponential(4).padStart(12) : "           -";
          }).join(" ");
          a.push(`  ${String(b).padStart(4)}  ${w}`);
        }
        a.push("");
      }
      const r = (_d = (_c = e.deformOutputs) == null ? void 0 : _c.val) == null ? void 0 : _d.deformations;
      r && r.size > 0 && (a.push(`## DISPLACEMENTS (${r.size} nodes)`), a.push("# node          Ux           Uy           Uz           Rx           Ry           Rz"), r.forEach((i, c) => {
        const b = i.map((w) => w.toExponential(4).padStart(12)).join(" ");
        a.push(`  ${String(c).padStart(4)}  ${b}`);
      }), a.push(""));
      const f = (_f = (_e2 = e.deformOutputs) == null ? void 0 : _e2.val) == null ? void 0 : _f.reactions;
      if (f && f.size > 0 && (a.push(`## REACTIONS (${f.size} supports)`), a.push("# node          Rx           Ry           Rz           Mx           My           Mz"), f.forEach((i, c) => {
        const b = i.map((w) => w.toFixed(4).padStart(12)).join(" ");
        a.push(`  ${String(c).padStart(4)}  ${b}`);
      }), a.push("")), A) {
        a.push("## CLI COMMAND");
        const i = Object.entries(Q).map(([c, b]) => `${c}=${b.val}`).join(" ");
        a.push(`cad.${A === "edificio" ? "building" : A}(${i})`);
      }
      return a.join(`
`);
    }
    let Qn = false;
    function Ia() {
      var _a2, _b, _c, _d;
      if (Ct) {
        Ct.remove(), Ct = null, Qn = false;
        return;
      }
      const t = Sa();
      Ct = document.createElement("div"), Ct.id = "export-overlay", Ct.style.cssText = `
      position:fixed; bottom:10px; right:10px; z-index:10000;
      width:720px; max-width:90vw;
      display:flex; flex-direction:column;
      font-family:monospace; color:var(--cad-text,#ccc);
      background:var(--cad-bg,#1a1a2e); border:1px solid var(--cad-border,#333);
      border-radius:8px; box-shadow:0 4px 20px rgba(0,0,0,0.5);
      transition: height 0.2s ease;
    `, Ct.innerHTML = `
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
    `, document.body.appendChild(Ct), (_a2 = Ct.querySelector("#export-close")) == null ? void 0 : _a2.addEventListener("click", () => {
        Ct == null ? void 0 : Ct.remove(), Ct = null, Qn = false;
      }), (_b = Ct.querySelector("#export-minimize")) == null ? void 0 : _b.addEventListener("click", () => {
        const n = Ct.querySelector("#export-body"), o = Ct.querySelector("#export-minimize");
        Qn = !Qn, Qn ? (n.style.display = "none", o.textContent = "\u25A2", o.title = "Restaurar", Ct.style.width = "auto") : (n.style.display = "flex", o.textContent = "\u25AC", o.title = "Minimizar", Ct.style.width = "720px");
      }), (_c = Ct.querySelector("#export-copy")) == null ? void 0 : _c.addEventListener("click", () => {
        const n = Ct.querySelector("#export-text");
        navigator.clipboard.writeText(n.value).then(() => {
          const o = Ct.querySelector("#export-status");
          o.textContent = "\u2713 Copiado al clipboard", setTimeout(() => o.textContent = "", 2e3);
        });
      }), (_d = Ct.querySelector("#export-json")) == null ? void 0 : _d.addEventListener("click", () => {
        var _a3, _b2, _c2, _d2, _e2, _f;
        const n = e.nodes.val, o = e.elements.val, l = (_a3 = e.nodeInputs) == null ? void 0 : _a3.val, s = (_b2 = e.elementInputs) == null ? void 0 : _b2.val, d = {
          generator: A || "custom",
          units: {
            force: g,
            length: O
          },
          nodes: n.map((c, b) => ({
            id: b,
            x: c[0],
            y: c[1],
            z: c[2]
          })),
          elements: o.map((c, b) => ({
            id: b,
            nodes: c
          }))
        };
        (l == null ? void 0 : l.supports) && (d.supports = [], l.supports.forEach((c, b) => d.supports.push({
          node: b,
          dofs: c
        }))), (l == null ? void 0 : l.loads) && (d.loads = [], l.loads.forEach((c, b) => d.loads.push({
          node: b,
          forces: c
        }))), s && (d.properties = {}, s.elasticities && (d.properties.E = Object.fromEntries(s.elasticities)), s.areas && (d.properties.A = Object.fromEntries(s.areas)), s.momentsOfInertiaZ && (d.properties.Iz = Object.fromEntries(s.momentsOfInertiaZ)), s.momentsOfInertiaY && (d.properties.Iy = Object.fromEntries(s.momentsOfInertiaY)), s.shearModuli && (d.properties.G = Object.fromEntries(s.shearModuli)), s.torsionalConstants && (d.properties.J = Object.fromEntries(s.torsionalConstants)));
        const a = (_d2 = (_c2 = e.deformOutputs) == null ? void 0 : _c2.val) == null ? void 0 : _d2.deformations;
        a && a.size > 0 && (d.displacements = {}, a.forEach((c, b) => d.displacements[b] = c));
        const r = (_f = (_e2 = e.deformOutputs) == null ? void 0 : _e2.val) == null ? void 0 : _f.reactions;
        r && r.size > 0 && (d.reactions = {}, r.forEach((c, b) => d.reactions[b] = c));
        const f = Ct.querySelector("#export-text");
        f.value = JSON.stringify(d, null, 2);
        const i = Ct.querySelector("#export-status");
        i.textContent = "Formato JSON activo \u2014 presiona Copy para copiar";
      });
    }
    function et() {
      var _a2, _b, _c;
      const t = Le.querySelector("#cad3d-info");
      if (t) {
        const n = e.nodes.val.length, o = e.elements.val, l = o.length, s = ((_c = (_b = (_a2 = e.nodeInputs) == null ? void 0 : _a2.val) == null ? void 0 : _b.supports) == null ? void 0 : _c.size) || 0;
        let d = 0, a = 0, r = 0;
        for (const i of o) i.length === 2 ? d++ : i.length === 3 ? a++ : i.length === 4 && r++;
        let f = `${n}n ${l}e ${s}s`;
        (r > 0 || a > 0) && (f += ` | ${d}fr`, r > 0 && (f += ` ${r}q4`), a > 0 && (f += ` ${a}tri`)), t.textContent = f;
      }
    }
    function Co() {
      var _a2;
      if (!_e || !e.nodeInputs || !e.elementInputs) return;
      const t = e.nodes.val, n = e.elements.val, o = e.nodeInputs.val, l = e.elementInputs.val;
      if (!(t.length === 0 || n.length === 0) && !(!o.supports || o.supports.size === 0) && !(!l.densities || l.densities.size === 0)) try {
        const s = Math.min(12, t.length * 6 - o.supports.size * 6);
        if (s <= 0) return;
        const d = Ua(t, n, o, l, Math.min(s, 12));
        if (d.frequencies && d.frequencies.length > 0) {
          Fe = d, Te = t.map((i) => [
            ...i
          ]), ye = 0;
          const { extent: a } = $n(), r = (_a2 = d.modeShapes) == null ? void 0 : _a2[0];
          if (r) {
            let i = 0;
            for (let c = 0; c < t.length; c++) {
              const b = r[c * 6] || 0, w = r[c * 6 + 1] || 0, E = r[c * 6 + 2] || 0;
              i = Math.max(i, Math.sqrt(b * b + w * w + E * E));
            }
            Ye = i > 1e-12 ? a * 0.05 / i : 1;
          }
          const f = `${A} \u2014 ${t.length}n ${n.length}e`;
          ct.render(d, {
            title: f
          }), ct.div.style.display = "", eo(), console.log(`Modal: ${d.frequencies.length} modos. f\u2081 = ${d.frequencies[0].toFixed(4)} Hz`);
        }
      } catch (s) {
        console.warn("Modal analysis failed:", s.message), Fe = null;
      }
    }
    function Fo() {
      xe && (cancelAnimationFrame(xe), xe = 0), Te.length > 0 && (e.nodes.val = Te.map((t) => [
        ...t
      ])), ct.div.style.display = "none", Fe = null;
    }
    function eo() {
      var _a2;
      if (xe && cancelAnimationFrame(xe), !(Fe == null ? void 0 : Fe.modeShapes) || !Te.length) return;
      const t = Fe.modeShapes[ye];
      if (!t) return;
      const n = ((_a2 = Fe.frequencies) == null ? void 0 : _a2[ye]) || 1, o = Math.max(0.5, Math.min(3, n * 0.1)), l = performance.now(), s = Te.length, d = e.elements.rawVal, { extent: a } = $n(), r = Le.querySelector("#cad3d-modal-scale"), f = r && parseFloat(r.value) || 5;
      let i = 0;
      for (let k = 0; k < s; k++) {
        const z = t[k * 6] || 0, P = t[k * 6 + 1] || 0, v = t[k * 6 + 2] || 0;
        i = Math.max(i, Math.sqrt(z * z + P * P + v * v));
      }
      const c = i > 1e-12 ? a * f / 100 / i : 1, b = Qe();
      if (!b) return;
      let w = null, E = null, $ = null;
      b.scene.traverse((k) => {
        var _a3, _b;
        !w && k.isPoints && k.geometry && (w = k), !E && k.isLineSegments && k.geometry && !k.name && (E = k), !$ && k.isMesh && ((_a3 = k.material) == null ? void 0 : _a3.transparent) && ((_b = k.material) == null ? void 0 : _b.opacity) < 0.5 && k.geometry && ($ = k);
      });
      const p = new Float32Array(s * 3), x = [];
      for (const k of d) if (k.length === 2) x.push([
        k[0],
        k[1]
      ]);
      else for (let z = 0; z < k.length; z++) x.push([
        k[z],
        k[(z + 1) % k.length]
      ]);
      const T = new Float32Array(x.length * 6);
      function L() {
        const k = (performance.now() - l) / 1e3, z = Math.sin(2 * Math.PI * o * k) * c;
        for (let P = 0; P < s; P++) {
          const v = Te[P];
          p[P * 3] = v[0] + (t[P * 6] || 0) * z, p[P * 3 + 1] = v[1] + (t[P * 6 + 1] || 0) * z, p[P * 3 + 2] = v[2] + (t[P * 6 + 2] || 0) * z;
        }
        if (w) {
          const P = w.geometry, v = P.getAttribute("position");
          v && v.array.length === p.length ? (v.array.set(p), v.needsUpdate = true) : P.setAttribute("position", new Cn(p.slice(), 3));
        }
        if (E) {
          for (let m = 0; m < x.length; m++) {
            const [I, F] = x[m];
            T[m * 6] = p[I * 3], T[m * 6 + 1] = p[I * 3 + 1], T[m * 6 + 2] = p[I * 3 + 2], T[m * 6 + 3] = p[F * 3], T[m * 6 + 4] = p[F * 3 + 1], T[m * 6 + 5] = p[F * 3 + 2];
          }
          const P = E.geometry, v = P.getAttribute("position");
          v && v.array.length === T.length ? (v.array.set(T), v.needsUpdate = true) : P.setAttribute("position", new Cn(T.slice(), 3));
        }
        if ($) {
          const P = [];
          for (const v of d) if (v.length === 3) {
            const [m, I, F] = v;
            P.push(p[m * 3], p[m * 3 + 1], p[m * 3 + 2]), P.push(p[I * 3], p[I * 3 + 1], p[I * 3 + 2]), P.push(p[F * 3], p[F * 3 + 1], p[F * 3 + 2]);
          } else if (v.length === 4) {
            const [m, I, F, N] = v;
            P.push(p[m * 3], p[m * 3 + 1], p[m * 3 + 2]), P.push(p[I * 3], p[I * 3 + 1], p[I * 3 + 2]), P.push(p[F * 3], p[F * 3 + 1], p[F * 3 + 2]), P.push(p[m * 3], p[m * 3 + 1], p[m * 3 + 2]), P.push(p[F * 3], p[F * 3 + 1], p[F * 3 + 2]), P.push(p[N * 3], p[N * 3 + 1], p[N * 3 + 2]);
          }
          if (P.length > 0) {
            const v = $.geometry, m = new Float32Array(P), I = v.getAttribute("position");
            I && I.array.length === m.length ? (I.array.set(m), I.needsUpdate = true) : v.setAttribute("position", new Cn(m, 3));
          }
        }
        b.render(), xe = requestAnimationFrame(L);
      }
      xe = requestAnimationFrame(L);
    }
    function Ro() {
      var _a2, _b, _c, _d, _e2;
      if (!e.deformOutputs || !e.analyzeOutputs || !e.nodeInputs || !e.elementInputs) return;
      const t = e.nodes.val, n = e.elements.val;
      let o = e.nodeInputs.val;
      const l = e.elementInputs.val;
      if (t.length === 0 || n.length === 0 || !o.supports || o.supports.size === 0) return;
      if (!o.loads || o.loads.size === 0) {
        const $ = re("CM") ?? 0, p = re("CV") ?? 0, x = $ + p, T = re("Ex") ?? 0, L = re("Ey") ?? 0;
        if (x === 0 && T === 0 && L === 0) return;
        const k = /* @__PURE__ */ new Map(), z = [];
        for (let S = 0; S < t.length; S++) o.supports.has(S) || z.push(S);
        const P = (S) => Math.round(S * 1e3) / 1e3, v = /* @__PURE__ */ new Set();
        o.supports.forEach((S, y) => {
          v.add(`${P(t[y][0])},${P(t[y][1])}`);
        });
        const m = /* @__PURE__ */ new Set();
        for (const S of z) v.has(`${P(t[S][0])},${P(t[S][1])}`) && m.add(S);
        const I = /* @__PURE__ */ new Set(), F = /* @__PURE__ */ new Set();
        if (T !== 0 || L !== 0) {
          let S = -1 / 0, y = -1 / 0;
          for (const K of m) S = Math.max(S, P(t[K][0])), y = Math.max(y, P(t[K][1]));
          const R = /* @__PURE__ */ new Map();
          for (const K of m) {
            const U = P(t[K][2]);
            R.has(U) || R.set(U, []), R.get(U).push(K);
          }
          R.forEach((K) => {
            if (T !== 0) {
              const U = /* @__PURE__ */ new Set();
              for (const le of K) if (P(t[le][0]) === S) {
                const ee = P(t[le][1]);
                U.has(ee) || (U.add(ee), I.add(le));
              }
            }
            if (L !== 0) {
              const U = /* @__PURE__ */ new Set();
              for (const le of K) if (P(t[le][1]) === y) {
                const ee = P(t[le][0]);
                U.has(ee) || (U.add(ee), F.add(le));
              }
            }
          });
        }
        const N = 9.81, G = /* @__PURE__ */ new Map();
        for (let S = 0; S < n.length; S++) {
          const y = n[S], R = ((_a2 = l.densities) == null ? void 0 : _a2.get(S)) ?? 0;
          if (!(Math.abs(R) < 1e-15)) {
            if (y.length === 2) {
              const K = ((_b = l.areas) == null ? void 0 : _b.get(S)) ?? 0, U = t[y[0]], le = t[y[1]], ee = Math.sqrt((le[0] - U[0]) ** 2 + (le[1] - U[1]) ** 2 + (le[2] - U[2]) ** 2), fe = -(R * K * ee * N) / 2;
              G.set(y[0], (G.get(y[0]) ?? 0) + fe), G.set(y[1], (G.get(y[1]) ?? 0) + fe);
            } else if (y.length >= 3) {
              const K = ((_c = l.thicknesses) == null ? void 0 : _c.get(S)) ?? 0;
              let U = 0;
              if (y.length === 3) {
                const [Z, fe, de] = y.map((ke) => t[ke]);
                U = 0.5 * Math.abs((fe[0] - Z[0]) * (de[1] - Z[1]) - (de[0] - Z[0]) * (fe[1] - Z[1]));
              } else if (y.length === 4) {
                const [Z, fe, de, ke] = y.map((Oe) => t[Oe]);
                if (U = 0.5 * Math.abs((fe[0] - Z[0]) * (de[1] - Z[1]) - (de[0] - Z[0]) * (fe[1] - Z[1])) + 0.5 * Math.abs((de[0] - Z[0]) * (ke[1] - Z[1]) - (ke[0] - Z[0]) * (de[1] - Z[1])), U < 1e-10) {
                  const Oe = [
                    fe[0] - Z[0],
                    fe[1] - Z[1],
                    fe[2] - Z[2]
                  ], B = [
                    ke[0] - Z[0],
                    ke[1] - Z[1],
                    ke[2] - Z[2]
                  ], me = [
                    Oe[1] * B[2] - Oe[2] * B[1],
                    Oe[2] * B[0] - Oe[0] * B[2],
                    Oe[0] * B[1] - Oe[1] * B[0]
                  ];
                  U = Math.sqrt(me[0] ** 2 + me[1] ** 2 + me[2] ** 2);
                }
              }
              const ee = -(R * K * U * N) / y.length;
              for (const Z of y) G.set(Z, (G.get(Z) ?? 0) + ee);
            }
          }
        }
        const h = /* @__PURE__ */ new Set();
        for (const S of n) S.length === 2 && (h.add(S[0]), h.add(S[1]));
        for (const S of z) {
          const y = I.has(S) ? T : 0, R = F.has(S) ? L : 0, K = G.get(S) ?? 0, U = h.has(S) ? x : 0, le = K + U;
          (y !== 0 || R !== 0 || Math.abs(le) > 1e-10) && k.set(S, [
            y,
            R,
            le,
            0,
            0,
            0
          ]);
        }
        o = {
          ...o,
          loads: k
        }, e.nodeInputs.val = o;
      }
      const s = performance.now();
      let d = 0, a = 0, r = 0;
      for (const $ of n) $.length === 2 ? d++ : $.length === 3 ? r++ : $.length === 4 && a++;
      const f = ((_d = o.supports) == null ? void 0 : _d.size) || 0, i = ((_e2 = o.loads) == null ? void 0 : _e2.size) || 0, c = t.length * 6, b = c - f * 6, w = [], E = ($) => w.push($);
      E('<b style="color:var(--cad-heading)">FEM Solver</b>'), E(`<span style="color:var(--cad-info)">Modelo:</span> ${t.length} nodos, ${n.length} elem`), d && E(`&nbsp;&nbsp;Frames: <b>${d}</b>`), a && E(`&nbsp;&nbsp;Shell Q4: <b>${a}</b>`), r && E(`&nbsp;&nbsp;Triangulos: <b>${r}</b>`), E(`&nbsp;&nbsp;Apoyos: ${f} &nbsp;|&nbsp; Cargas: ${i}`), E(`<span style="color:var(--cad-info)">DOFs:</span> ${c} total, ~${b} libres`), E('<hr style="border-color:var(--cad-border);margin:4px 0">'), E(`<span style="color:#888">1.</span> Ensamblaje <b>K</b> global (${c}&times;${c})`), E("&nbsp;&nbsp;&nbsp;<i>K<sub>global</sub> = &Sigma; T<sup>T</sup> &middot; K<sub>local</sub> &middot; T</i>");
      try {
        const $ = Tt(t, n, o, l), p = performance.now() - s;
        if ($) {
          e.deformOutputs.val = $, E(`<span style="color:#888">2.</span> <b>K &middot; u = F</b> &rarr; SparseLU &rarr; <span style="color:#00cc88">${p.toFixed(0)} ms</span>`);
          let x = 0, T = -1, L = 0, k = 0;
          $.deformations && $.deformations.forEach((I, F) => {
            const N = Math.sqrt(I[0] * I[0] + I[1] * I[1] + I[2] * I[2]);
            N > x && (x = N, T = F, L = I[0], k = I[2]);
          }), E('<span style="color:#888">3.</span> Desplazamientos:'), E(`&nbsp;&nbsp;&nbsp;max|<b>u</b>| = <b style="color:var(--cad-heading)">${x.toExponential(3)}</b> m <span style="color:#666">(nodo ${T})</span>`), E(`&nbsp;&nbsp;&nbsp;u<sub>x</sub> = ${(L * 1e3).toFixed(4)} mm &nbsp;|&nbsp; u<sub>z</sub> = ${(k * 1e3).toFixed(4)} mm`);
          const z = performance.now(), P = hn(t, n, l, $), v = performance.now() - z;
          P && (e.analyzeOutputs.val = P, E(`<span style="color:#888">4.</span> Fuerzas internas: <span style="color:#00cc88">${v.toFixed(0)} ms</span>`), E("&nbsp;&nbsp;&nbsp;<i>F<sub>int</sub> = K<sub>local</sub> &middot; T &middot; u</i>"));
          const m = performance.now() - s;
          E('<hr style="border-color:var(--cad-border);margin:4px 0">'), E(`<b style="color:#00cc88">&#10004; Completado: ${m.toFixed(0)} ms</b>`);
        }
      } catch ($) {
        const p = performance.now() - s;
        E(`<b style="color:#ff4444">&#10008; Error (${p.toFixed(0)} ms): ${$.message}</b>`);
      }
      window.__femLog = w, console.log(`FEM Solver: ${t.length}n ${n.length}e \u2192 ${(performance.now() - s).toFixed(0)}ms`), _e && setTimeout(() => Co(), 50);
    }
    function Po(t, n) {
      const o = t * n, l = t * n * n * n / 12, s = n * t * t * t / 12, d = Math.min(t, n), a = Math.max(t, n), r = d * d * d * a * (1 / 3 - 0.21 * d / a * (1 - d * d * d * d / (12 * a * a * a * a)));
      return {
        A: o,
        Iz: l,
        Iy: s,
        J: r
      };
    }
    function Ts(t) {
      const n = t / 2, o = Math.PI * n * n, l = Math.PI * n * n * n * n / 4, s = Math.PI * n * n * n * n / 2;
      return {
        A: o,
        Iz: l,
        Iy: l,
        J: s
      };
    }
    function Oo(t, n, o, l) {
      const s = n - 2 * o, d = 2 * t * o + s * l, a = (t * n * n * n - (t - l) * s * s * s) / 12, r = (2 * o * t * t * t + s * l * l * l) / 12, f = (2 * t * o * o * o + s * l * l * l) / 3;
      return {
        A: d,
        Iz: a,
        Iy: r,
        J: f
      };
    }
    function No(t, n, o) {
      const l = t - 2 * o, s = n - 2 * o, d = t * n - l * s, a = (t * n * n * n - l * s * s * s) / 12, r = (n * t * t * t - s * l * l * l) / 12, f = (t - o) * (n - o), i = 2 * ((t - o) / o + (n - o) / o), c = 4 * f * f / (i > 0 ? i : 1);
      return {
        A: d,
        Iz: a,
        Iy: r,
        J: c
      };
    }
    function ka(t, n, o, l, s, d, a) {
      const f = 4700 * Math.sqrt(d / 1e3) * 1e3 / l, i = t - 2 * o, c = n - 2 * o, b = t * n - i * c, w = (t * n * n * n - i * c * c * c) / 12, E = (n * t * t * t - c * i * i * i) / 12, $ = i * c, p = i * c * c * c / 12, x = c * i * i * i / 12, T = b + f * $, L = w + f * p, k = E + f * x, z = l / (2 * (1 + s)), P = (t - o) * (n - o), v = 2 * ((t - o) / o + (n - o) / o), m = 4 * P * P / (v > 0 ? v : 1);
      return {
        A: T,
        Iz: L,
        Iy: k,
        J: m,
        Es: l,
        Gs: z,
        A_steel: b,
        A_conc: $
      };
    }
    function yn() {
      if (!e.elementInputs) return;
      const t = e.elements.val, n = M, o = {
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
      if ((A === "edificio" || A === "frame") && D.size > 0) {
        const { colMat: s, vigaMat: d, colShape: a, fc: r, perFloor: f } = qe, i = 4700 * Math.sqrt(r / 1e3) * 1e3, c = i / (2 * 1.2), b = 24 / 9.80665, w = n.E, E = n.G, $ = n.rho;
        for (let p = 0; p < t.length; p++) {
          if (pe.has(p)) {
            const I = 4700 * Math.sqrt(r / 1e3) * 1e3, F = 0.2;
            o.elasticities.set(p, I), o.poissonsRatios.set(p, F), o.thicknesses.set(p, He), o.shearModuli.set(p, I / (2 * (1 + F))), o.densities.set(p, 24 / 9.80665);
            continue;
          }
          if (At.has(p)) {
            const I = 4700 * Math.sqrt(r / 1e3) * 1e3, F = 0.2;
            o.elasticities.set(p, I), o.poissonsRatios.set(p, F), o.thicknesses.set(p, lt), o.shearModuli.set(p, I / (2 * (1 + F))), o.densities.set(p, 24 / 9.80665);
            continue;
          }
          const x = D.has(p), T = Me.get(p) ?? 0, L = f[T] ?? f[0] ?? {
            bCol: 0.4,
            hCol: 0.4,
            dCol: 0.4
          };
          let k, z, P, v;
          if (x) if (s === 0) z = i, P = c, v = b, k = a === 1 ? Ts(L.dCol) : Po(L.bCol, L.hCol), o.sectionShapes.set(p, a === 1 ? {
            type: "circ",
            d: L.dCol
          } : {
            type: "rect",
            b: L.bCol,
            h: L.hCol
          });
          else if (s === 1) {
            z = w, P = E, v = $;
            const I = qe.steelColType;
            if (I <= 1) {
              const F = Tn[L.colProfileIdx] ?? Tn[0];
              k = {
                A: F.A,
                Iz: F.Iz,
                Iy: F.Iy,
                J: F.J
              }, o.sectionShapes.set(p, {
                type: "I",
                b: F.bf,
                h: F.d,
                name: F.name
              });
            } else if (I === 2) {
              const F = L.colBf ?? 0.3, N = L.colHf ?? 0.3, G = L.colTf ?? 0.02, h = L.colTw ?? 0.012;
              k = Oo(F, N, G, h);
              const S = `I${(N * 100).toFixed(0)}x${(F * 100).toFixed(0)}`;
              o.sectionShapes.set(p, {
                type: "I",
                b: F,
                h: N,
                tf: G,
                tw: h,
                name: S
              });
            } else {
              const F = L.colBc ?? 0.3, N = L.colHc ?? 0.3, G = L.colT ?? 0.01;
              k = No(F, N, G);
              const h = `\u25A1${(N * 100).toFixed(0)}x${(F * 100).toFixed(0)}x${(G * 1e3).toFixed(0)}`;
              o.sectionShapes.set(p, {
                type: "HSS",
                b: F,
                h: N,
                tw: G,
                name: h
              });
            }
          } else {
            const I = L.colBc ?? 0.3, F = L.colHc ?? 0.3, N = L.colT ?? 0.01, G = L.colFc ?? 28e3, h = L.colEs ?? 2e8, S = L.colNuS ?? 0.3;
            L.colNuC;
            const y = ka(I, F, N, h, S, G);
            k = {
              A: y.A,
              Iz: y.Iz,
              Iy: y.Iy,
              J: y.J
            }, z = y.Es, P = y.Gs;
            const R = 7.85, K = 24 / 9.80665;
            v = (R * y.A_steel + K * y.A_conc) / (y.A_steel + y.A_conc);
            const U = `CFT ${(F * 1e3).toFixed(0)}X${(I * 1e3).toFixed(0)}X${(N * 1e3).toFixed(0)}`;
            o.sectionShapes.set(p, {
              type: "CFT",
              b: I,
              h: F,
              tw: N,
              name: U
            });
          }
          else {
            const I = ze.get(p), F = I ? I.dir === "x" ? L.vigasX : L.vigasY : [], N = I ? F[I.bay] ?? F[0] ?? mt() : mt();
            if (d === 0) z = i, P = c, v = b, k = Po(N.b, N.h), o.sectionShapes.set(p, {
              type: "rect",
              b: N.b,
              h: N.h
            });
            else {
              z = w, P = E, v = $;
              const G = qe.steelVigaType;
              if (G <= 1) {
                const h = Tn[N.profileIdx ?? 0] ?? Tn[0];
                k = {
                  A: h.A,
                  Iz: h.Iz,
                  Iy: h.Iy,
                  J: h.J
                }, o.sectionShapes.set(p, {
                  type: "I",
                  b: h.bf,
                  h: h.d,
                  name: h.name
                });
              } else if (G === 2) {
                const h = N.bf ?? 0.2, S = N.hf ?? 0.4, y = N.tf ?? 0.015, R = N.tw ?? 0.01;
                k = Oo(h, S, y, R);
                const K = `I${(S * 100).toFixed(0)}x${(h * 100).toFixed(0)}`;
                o.sectionShapes.set(p, {
                  type: "I",
                  b: h,
                  h: S,
                  tf: y,
                  tw: R,
                  name: K
                });
              } else {
                const h = N.bc ?? 0.2, S = N.hc ?? 0.3, y = N.t ?? 8e-3;
                k = No(h, S, y);
                const R = `\u25A1${(S * 100).toFixed(0)}x${(h * 100).toFixed(0)}x${(y * 1e3).toFixed(0)}`;
                o.sectionShapes.set(p, {
                  type: "HSS",
                  b: h,
                  h: S,
                  tw: y,
                  name: R
                });
              }
            }
          }
          const m = he.get(p);
          if (m) {
            if ((m.material ?? 1) === 0 ? (z = i, P = c, v = b) : (z = w, P = E, v = $), m.secType === "rect" && m.b && m.h) k = Po(m.b, m.h), o.sectionShapes.set(p, {
              type: "rect",
              b: m.b,
              h: m.h
            });
            else if (m.secType === "circ" && m.b) k = Ts(m.b), o.sectionShapes.set(p, {
              type: "circ",
              d: m.b
            });
            else if ((m.secType === "W" || m.secType === "HSS") && m.profileIdx !== void 0) {
              const F = Tn[m.profileIdx] ?? Tn[0];
              k = {
                A: F.A,
                Iz: F.Iz,
                Iy: F.Iy,
                J: F.J
              }, o.sectionShapes.set(p, {
                type: "I",
                b: F.bf,
                h: F.d,
                name: F.name
              });
            } else if (m.secType === "I-param" && m.bf && m.hf && m.tf && m.tw) {
              k = Oo(m.bf, m.hf, m.tf, m.tw);
              const F = `I${(m.hf * 100).toFixed(0)}x${(m.bf * 100).toFixed(0)}`;
              o.sectionShapes.set(p, {
                type: "I",
                b: m.bf,
                h: m.hf,
                tf: m.tf,
                tw: m.tw,
                name: F
              });
            } else if (m.secType === "tubular" && m.bc && m.hc && m.t) {
              k = No(m.bc, m.hc, m.t);
              const F = `\u25A1${(m.hc * 100).toFixed(0)}x${(m.bc * 100).toFixed(0)}x${(m.t * 1e3).toFixed(0)}`;
              o.sectionShapes.set(p, {
                type: "HSS",
                b: m.bc,
                h: m.hc,
                tw: m.t,
                name: F
              });
            }
          }
          o.elasticities.set(p, z), o.shearModuli.set(p, P), o.areas.set(p, k.A), o.momentsOfInertiaZ.set(p, k.Iy), o.momentsOfInertiaY.set(p, k.Iz), o.torsionalConstants.set(p, k.J), o.densities.set(p, v), m && m.releases12 && m.releases12.some((I) => I) && (o.momentReleases || (o.momentReleases = /* @__PURE__ */ new Map()), o.momentReleases.set(p, m.releases12)), m && m.springs12 && m.springs12.some((I) => I > 0) && (o.partialFixitySprings || (o.partialFixitySprings = /* @__PURE__ */ new Map()), o.partialFixitySprings.set(p, m.springs12));
        }
      } else for (let s = 0; s < t.length; s++) o.elasticities.set(s, n.E), o.shearModuli.set(s, n.G), o.areas.set(s, n.A), o.momentsOfInertiaZ.set(s, n.Iy), o.momentsOfInertiaY.set(s, n.Iz), o.torsionalConstants.set(s, n.J), o.densities.set(s, n.rho);
      e.elementInputs.val = o;
    }
    function zs(t) {
      Le.querySelectorAll("[data-ex]").forEach((n) => {
        n.classList.toggle("active", n.dataset.ex === t);
      });
    }
    window.innerWidth <= 600 && Le.classList.add("collapsed"), setTimeout(() => {
      var _a2, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l2, _m, _n2, _o2, _p;
      (_a2 = Le.querySelector("#cad3d-toggle")) == null ? void 0 : _a2.addEventListener("click", (h) => {
        h.stopPropagation(), Le.classList.add("collapsed");
      }), (_b = Le.querySelector("#cad3d-expand")) == null ? void 0 : _b.addEventListener("click", (h) => {
        h.stopPropagation(), Le.classList.remove("collapsed");
      }), Le.querySelectorAll("[data-ex]").forEach((h) => {
        h.addEventListener("click", (S) => {
          S.stopPropagation();
          const y = h.dataset.ex;
          zs(y), Ze.example(y);
        });
      }), Le.querySelectorAll("[data-view]").forEach((h) => {
        h.addEventListener("click", (S) => {
          S.stopPropagation();
          const y = h.dataset.view;
          Mn(y), Le.querySelectorAll("[data-view]").forEach((R) => R.classList.remove("view-active")), h.classList.add("view-active");
        });
      }), (_c = Le.querySelector("#cad3d-btn-clear")) == null ? void 0 : _c.addEventListener("click", (h) => {
        h.stopPropagation(), A = "", ca.val = false, Ea(), Ze.clear();
      }), (_d = Le.querySelector("#cad3d-select")) == null ? void 0 : _d.addEventListener("click", (h) => {
        var _a3;
        h.stopPropagation(), on && (on = false, Ln()), fn && co(), Jt = !Jt, (_a3 = Le.querySelector("#cad3d-select")) == null ? void 0 : _a3.classList.toggle("inspect-active", Jt);
        const y = Qe();
        y && (y.controls.enabled = !Jt), Jt || io();
      }), (_e2 = Le.querySelector("#cad3d-draw")) == null ? void 0 : _e2.addEventListener("click", (h) => {
        var _a3;
        h.stopPropagation(), on && (on = false, Ln()), Jt && io(), fn = !fn, (_a3 = Le.querySelector("#cad3d-draw")) == null ? void 0 : _a3.classList.toggle("inspect-active", fn), fn ? Ca() : co();
      }), (_f = Le.querySelector("#cad3d-inspect")) == null ? void 0 : _f.addEventListener("click", (h) => {
        var _a3;
        h.stopPropagation(), Jt && io(), fn && co(), on = !on, (_a3 = Le.querySelector("#cad3d-inspect")) == null ? void 0 : _a3.classList.toggle("inspect-active", on), on || Ln();
      }), (_g = Le.querySelector("#cad3d-new-model")) == null ? void 0 : _g.addEventListener("click", (h) => {
        h.stopPropagation(), Ze.clear(), Ue = null;
      });
      const t = Le.querySelector("#cad3d-tests-menu");
      t && t.addEventListener("change", () => {
        const h = t.value;
        t.value = "", h && n(h);
      });
      function n(h) {
        var _a3, _b2, _c2, _d2, _e3, _f2;
        const R = 15e3 * Math.sqrt(210) * 10, K = 0.2, U = R / (2 * (1 + K)), le = 0.09, ee = 0.3 ** 4 / 12, Z = 0.141 * 0.3 ** 4, fe = 0.25 * 0.4, de = 0.25 * 0.4 ** 3 / 12, ke = 0.4 * 0.25 ** 3 / 12, Oe = 1e-3, B = 5 / 6 * le, me = 5 / 6 * fe, se = [];
        function ue(te, be, Ee) {
          const ae = {
            elasticities: /* @__PURE__ */ new Map(),
            shearModuli: /* @__PURE__ */ new Map(),
            areas: /* @__PURE__ */ new Map(),
            momentsOfInertiaZ: /* @__PURE__ */ new Map(),
            momentsOfInertiaY: /* @__PURE__ */ new Map(),
            torsionalConstants: /* @__PURE__ */ new Map(),
            shearAreasY: /* @__PURE__ */ new Map(),
            shearAreasZ: /* @__PURE__ */ new Map()
          };
          for (const Ie of be) ae.elasticities.set(Ie, R), ae.shearModuli.set(Ie, U), ae.areas.set(Ie, le), ae.momentsOfInertiaZ.set(Ie, ee), ae.momentsOfInertiaY.set(Ie, ee), ae.torsionalConstants.set(Ie, Z), ae.shearAreasY.set(Ie, B), ae.shearAreasZ.set(Ie, B);
          for (const Ie of Ee) ae.elasticities.set(Ie, R), ae.shearModuli.set(Ie, U), ae.areas.set(Ie, fe), ae.momentsOfInertiaZ.set(Ie, ke), ae.momentsOfInertiaY.set(Ie, de), ae.torsionalConstants.set(Ie, Oe), ae.shearAreasY.set(Ie, me), ae.shearAreasZ.set(Ie, me);
          return ae;
        }
        if (h === "test-cantilever" || h === "test-all") {
          const Ee = 270 / (3 * R * ee), ae = [
            [
              0,
              0,
              0
            ],
            [
              3,
              0,
              0
            ]
          ], Ie = [
            [
              0,
              1
            ]
          ], We = ue(1, [], []);
          We.elasticities.set(0, R), We.shearModuli.set(0, U), We.areas.set(0, le), We.momentsOfInertiaZ.set(0, ee), We.momentsOfInertiaY.set(0, ee), We.torsionalConstants.set(0, Z);
          const it = Tt(ae, Ie, {
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
              ]
            ]),
            loads: /* @__PURE__ */ new Map([
              [
                1,
                [
                  0,
                  0,
                  10,
                  0,
                  0,
                  0
                ]
              ]
            ])
          }, We);
          se.push({
            name: "Cantilever Beam",
            formulation: "Euler-Bernoulli (PL\xB3/3EI)",
            nodes: ae,
            elements: Ie,
            results: [
              {
                label: "Uz tip (cm)",
                awatif: it.deformations.get(1)[2] * 100,
                reference: Ee * 100,
                refSource: "Analytical"
              }
            ]
          });
        }
        if (h === "test-portal-1p" || h === "test-all") {
          const te = [
            [
              0,
              0,
              0
            ],
            [
              4,
              0,
              0
            ],
            [
              0,
              0,
              3
            ],
            [
              4,
              0,
              3
            ]
          ], be = [
            [
              0,
              2
            ],
            [
              1,
              3
            ],
            [
              2,
              3
            ]
          ], Ee = ue(3, [
            0,
            1
          ], [
            2
          ]), ae = Tt(te, be, {
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
                1,
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
            loads: /* @__PURE__ */ new Map([
              [
                2,
                [
                  10,
                  0,
                  0,
                  0,
                  0,
                  0
                ]
              ],
              [
                3,
                [
                  10,
                  0,
                  0,
                  0,
                  0,
                  0
                ]
              ]
            ])
          }, Ee);
          se.push({
            name: "Portal 1-Story (Timoshenko)",
            formulation: "Frame Timoshenko (As=5/6\xB7A)",
            nodes: te,
            elements: be,
            results: [
              {
                label: "Ux top (cm)",
                awatif: ae.deformations.get(2)[0] * 100,
                reference: 2.0618,
                refSource: "ETABS 22.6"
              }
            ]
          });
        }
        if (h === "test-portal-2p" || h === "test-all") {
          const te = [
            [
              0,
              0,
              0
            ],
            [
              4,
              0,
              0
            ],
            [
              0,
              0,
              3
            ],
            [
              4,
              0,
              3
            ],
            [
              0,
              0,
              6
            ],
            [
              4,
              0,
              6
            ]
          ], be = [
            [
              0,
              2
            ],
            [
              1,
              3
            ],
            [
              2,
              4
            ],
            [
              3,
              5
            ],
            [
              2,
              3
            ],
            [
              4,
              5
            ]
          ], Ee = ue(6, [
            0,
            1,
            2,
            3
          ], [
            4,
            5
          ]), ae = Tt(te, be, {
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
                1,
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
            loads: /* @__PURE__ */ new Map([
              [
                4,
                [
                  10,
                  0,
                  0,
                  0,
                  0,
                  0
                ]
              ],
              [
                5,
                [
                  10,
                  0,
                  0,
                  0,
                  0,
                  0
                ]
              ]
            ])
          }, Ee);
          se.push({
            name: "Portal 2-Story",
            formulation: "Frame Timoshenko",
            nodes: te,
            elements: be,
            results: [
              {
                label: "Ux Z=3m (cm)",
                awatif: ae.deformations.get(2)[0] * 100,
                reference: 2.5188,
                refSource: "ETABS 22.6"
              },
              {
                label: "Ux Z=6m (cm)",
                awatif: ae.deformations.get(4)[0] * 100,
                reference: 5.6424,
                refSource: "ETABS 22.6"
              }
            ]
          });
        }
        if (h === "test-wall-only" || h === "test-all") {
          const te = [
            [
              0,
              0,
              0
            ],
            [
              4,
              0,
              0
            ],
            [
              4,
              0,
              3
            ],
            [
              0,
              0,
              3
            ]
          ], be = [
            [
              0,
              1,
              2,
              3
            ]
          ], ae = Tt(te, be, {
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
                1,
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
            loads: /* @__PURE__ */ new Map([
              [
                2,
                [
                  10,
                  0,
                  0,
                  0,
                  0,
                  0
                ]
              ],
              [
                3,
                [
                  10,
                  0,
                  0,
                  0,
                  0,
                  0
                ]
              ]
            ])
          }, {
            elasticities: /* @__PURE__ */ new Map([
              [
                0,
                R
              ]
            ]),
            shearModuli: /* @__PURE__ */ new Map([
              [
                0,
                U
              ]
            ]),
            thicknesses: /* @__PURE__ */ new Map([
              [
                0,
                0.2
              ]
            ]),
            poissonsRatios: /* @__PURE__ */ new Map([
              [
                0,
                K
              ]
            ])
          });
          se.push({
            name: "Wall Q4 Only",
            formulation: "Membrane (incompatible modes) + Mindlin-Reissner + Hughes-Brezzi drilling",
            nodes: te,
            elements: be,
            results: [
              {
                label: "Ux top (cm)",
                awatif: ae.deformations.get(2)[0] * 100,
                reference: 0.013519,
                refSource: "ETABS 22.6"
              }
            ]
          });
        }
        if (h === "test-portal-wall" || h === "test-all") {
          const te = [
            [
              0,
              0,
              0
            ],
            [
              4,
              0,
              0
            ],
            [
              0,
              0,
              3
            ],
            [
              4,
              0,
              3
            ],
            [
              0,
              0,
              6
            ],
            [
              4,
              0,
              6
            ]
          ], be = [
            [
              0,
              2
            ],
            [
              1,
              3
            ],
            [
              2,
              4
            ],
            [
              3,
              5
            ],
            [
              2,
              3
            ],
            [
              4,
              5
            ],
            [
              0,
              1,
              3,
              2
            ]
          ], Ee = ue(6, [
            0,
            1,
            2,
            3
          ], [
            4,
            5
          ]);
          Ee.elasticities.set(6, R), Ee.shearModuli.set(6, U), Ee.thicknesses = /* @__PURE__ */ new Map([
            [
              6,
              0.2
            ]
          ]), Ee.poissonsRatios = /* @__PURE__ */ new Map([
            [
              6,
              K
            ]
          ]);
          const ae = Tt(te, be, {
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
                1,
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
            loads: /* @__PURE__ */ new Map([
              [
                4,
                [
                  10,
                  0,
                  0,
                  0,
                  0,
                  0
                ]
              ],
              [
                5,
                [
                  10,
                  0,
                  0,
                  0,
                  0,
                  0
                ]
              ]
            ])
          }, Ee);
          se.push({
            name: "Portal 2-Story + Wall Q4",
            formulation: "Frame Timoshenko + Shell Q4 (Hughes-Brezzi drilling)",
            nodes: te,
            elements: be,
            results: [
              {
                label: "Ux h=3m (cm)",
                awatif: ae.deformations.get(2)[0] * 100,
                reference: 0.0195,
                refSource: "ETABS 22.6"
              },
              {
                label: "Ux h=6m (cm)",
                awatif: ae.deformations.get(4)[0] * 100,
                reference: 2.1133,
                refSource: "ETABS 22.6"
              }
            ]
          });
        }
        if (h === "test-wilson-beam" || h === "test-all") {
          const it = 0.6666666666666666, dt = [
            [
              0,
              -1,
              0
            ],
            [
              2.5,
              -1,
              0
            ],
            [
              5,
              -1,
              0
            ],
            [
              5,
              1,
              0
            ],
            [
              2.5,
              1,
              0
            ],
            [
              0,
              1,
              0
            ]
          ], Ft = [
            [
              0,
              1,
              4,
              5
            ],
            [
              1,
              2,
              3,
              4
            ]
          ], Bt = {
            elasticities: /* @__PURE__ */ new Map([
              [
                0,
                1500
              ],
              [
                1,
                1500
              ]
            ]),
            shearModuli: /* @__PURE__ */ new Map([
              [
                0,
                600
              ],
              [
                1,
                600
              ]
            ]),
            thicknesses: /* @__PURE__ */ new Map([
              [
                0,
                1
              ],
              [
                1,
                1
              ]
            ]),
            poissonsRatios: /* @__PURE__ */ new Map([
              [
                0,
                0.25
              ],
              [
                1,
                0.25
              ]
            ])
          }, Pt = /* @__PURE__ */ new Map();
          Pt.set(0, [
            true,
            true,
            true,
            true,
            true,
            true
          ]), Pt.set(5, [
            true,
            true,
            true,
            true,
            true,
            true
          ]);
          const Dt = /* @__PURE__ */ new Map();
          Dt.set(2, [
            0,
            0.5,
            0,
            0,
            0,
            0
          ]), Dt.set(3, [
            0,
            0.5,
            0,
            0,
            0,
            0
          ]);
          const In = 5 ** 3 / (3 * 1500 * it);
          try {
            const ln = Tt(dt, Ft, {
              supports: Pt,
              loads: Dt
            }, Bt), Ut = Math.abs(((_b2 = (_a3 = ln.deformations) == null ? void 0 : _a3.get(2)) == null ? void 0 : _b2[1]) ?? 0), ot = Math.abs(((_d2 = (_c2 = ln.deformations) == null ? void 0 : _c2.get(3)) == null ? void 0 : _d2[1]) ?? 0), It = (Ut + ot) / 2, tn = It / In;
            se.push({
              name: "Wilson Fig 6.2 \u2014 Cantilever Q4",
              formulation: "2 Q4 elements + incompatible modes (Wilson 1971, Table 6.1)",
              nodes: dt,
              elements: Ft,
              results: [
                {
                  label: "Uy/Uy_exact (cortante)",
                  awatif: tn,
                  reference: 0.932,
                  refSource: "Wilson Table 6.1"
                },
                {
                  label: "Uy free end",
                  awatif: It,
                  reference: In * 0.932,
                  refSource: "Wilson"
                }
              ]
            });
          } catch (ln) {
            se.push({
              name: "Wilson Fig 6.2 \u2014 Cantilever Q4",
              formulation: "ERROR: " + ln.message,
              nodes: dt,
              elements: Ft,
              results: [
                {
                  label: "Error",
                  awatif: 0,
                  reference: 0.932,
                  refSource: "Wilson"
                }
              ]
            });
          }
        }
        if (h === "test-scordelis" || h === "test-all") {
          const it = 40 * Math.PI / 180, dt = 8, Ft = 8, Bt = [];
          for (let ot = 0; ot <= dt; ot++) for (let It = 0; It <= Ft; It++) {
            const tn = 25 * ot / dt, Nt = it * It / Ft, gn = 25 * Math.sin(Nt), bn = 25 * Math.cos(Nt) - 25 * Math.cos(it);
            Bt.push([
              tn,
              gn,
              bn
            ]);
          }
          const Pt = [];
          for (let ot = 0; ot < dt; ot++) for (let It = 0; It < Ft; It++) {
            const tn = ot * (Ft + 1) + It, Nt = (ot + 1) * (Ft + 1) + It, gn = (ot + 1) * (Ft + 1) + (It + 1), bn = ot * (Ft + 1) + (It + 1);
            Pt.push([
              tn,
              Nt,
              gn,
              bn
            ]);
          }
          const Dt = {
            elasticities: /* @__PURE__ */ new Map(),
            shearModuli: /* @__PURE__ */ new Map(),
            thicknesses: /* @__PURE__ */ new Map(),
            poissonsRatios: /* @__PURE__ */ new Map()
          }, In = 432e6 / (2 * 1);
          for (let ot = 0; ot < Pt.length; ot++) Dt.elasticities.set(ot, 432e6), Dt.shearModuli.set(ot, In), Dt.thicknesses.set(ot, 0.25), Dt.poissonsRatios.set(ot, 0);
          const ln = /* @__PURE__ */ new Map();
          for (let ot = 0; ot <= dt; ot++) for (let It = 0; It <= Ft; It++) {
            const tn = ot * (Ft + 1) + It, Nt = [
              false,
              false,
              false,
              false,
              false,
              false
            ];
            ot === 0 && (Nt[0] = true, Nt[4] = true, Nt[5] = true), ot === dt && (Nt[1] = true, Nt[2] = true, Nt[3] = true), It === 0 && (Nt[1] = true, Nt[3] = true, Nt[5] = true), Nt.some((gn) => gn) && ln.set(tn, Nt);
          }
          const Ut = /* @__PURE__ */ new Map();
          for (const ot of Pt) {
            const It = Bt[ot[0]], tn = Bt[ot[1]], Nt = Bt[ot[2]], gn = Bt[ot[3]], bn = [
              Nt[0] - It[0],
              Nt[1] - It[1],
              Nt[2] - It[2]
            ], Wn = [
              gn[0] - tn[0],
              gn[1] - tn[1],
              gn[2] - tn[2]
            ], Xs = bn[1] * Wn[2] - bn[2] * Wn[1], Ks = bn[2] * Wn[0] - bn[0] * Wn[2], Zs = bn[0] * Wn[1] - bn[1] * Wn[0], Va = -90 * (0.5 * Math.sqrt(Xs * Xs + Ks * Ks + Zs * Zs)) / 4;
            for (const Qs of ot) {
              const ea = Ut.get(Qs) || [
                0,
                0,
                0,
                0,
                0,
                0
              ];
              ea[2] += Va, Ut.set(Qs, ea);
            }
          }
          try {
            const ot = Tt(Bt, Pt, {
              supports: ln,
              loads: Ut
            }, Dt), It = Ft, tn = ((_f2 = (_e3 = ot.deformations) == null ? void 0 : _e3.get(It)) == null ? void 0 : _f2[2]) ?? 0;
            se.push({
              name: "Scordelis-Lo Barrel Vault",
              formulation: `Shell Q4 (${dt}x${Ft} mesh), Mindlin-Reissner + incompatible modes`,
              nodes: Bt,
              elements: Pt,
              results: [
                {
                  label: "Uz midspan free edge (ft)",
                  awatif: Math.abs(tn),
                  reference: 0.3086,
                  refSource: "Wilson (2004) / MacNeal-Harder"
                }
              ]
            });
          } catch (ot) {
            se.push({
              name: "Scordelis-Lo Barrel Vault",
              formulation: "ERROR: " + ot.message,
              nodes: Bt,
              elements: Pt,
              results: [
                {
                  label: "Error",
                  awatif: 0,
                  reference: 0.3086,
                  refSource: "Wilson"
                }
              ]
            });
          }
        }
        if (d(se), se.length > 0) {
          const te = se[se.length - 1];
          e.nodes.val = te.nodes, e.elements.val = te.elements;
          const be = /* @__PURE__ */ new Map(), Ee = /* @__PURE__ */ new Map(), ae = Math.max(...te.nodes.map((Ie) => Ie[2]));
          te.nodes.forEach((Ie, We) => {
            Math.abs(Ie[2]) < 0.01 && be.set(We, [
              true,
              true,
              true,
              true,
              true,
              true
            ]), Math.abs(Ie[2] - ae) < 0.01 && Ee.set(We, [
              10,
              0,
              0,
              0,
              0,
              0
            ]);
          }), e.nodeInputs.val = {
            supports: be,
            loads: Ee
          }, e.elementInputs.val = {}, e.deformOutputs.val = {}, e.analyzeOutputs.val = {};
        }
      }
      function o(h) {
        const S = 15e3 * Math.sqrt(210) * 10, y = [];
        y.push(`$ File exported from Awatif FEM Validation: ${h.name}`), y.push(" "), y.push("$ PROGRAM INFORMATION"), y.push('  PROGRAM  "ETABS"  VERSION "22.6.0"  '), y.push(""), y.push("$ CONTROLS"), y.push('  UNITS  "TONF"  "M"  "C"  '), y.push("");
        const R = /* @__PURE__ */ new Set();
        h.nodes.forEach((B) => R.add(Math.round(B[1] * 1e4) / 1e4));
        const K = [
          ...R
        ].sort((B, me) => B - me), U = K.map((B, me) => me === 0 ? "Base" : `Level_${me}`), le = /* @__PURE__ */ new Map();
        K.forEach((B, me) => le.set(B, U[me])), y.push("$ STORIES - IN SEQUENCE FROM TOP");
        for (let B = K.length - 1; B >= 1; B--) y.push(`  STORY "${U[B]}"  HEIGHT ${K[B] - K[B - 1]} MASTERSTORY "Yes"  `);
        y.push(`  STORY "Base"  ELEV ${K[0]} `), y.push(""), y.push("$ MATERIAL PROPERTIES"), y.push('  MATERIAL  "CONC"    TYPE "Concrete"    WEIGHTPERVOLUME 2.4'), y.push(`  MATERIAL  "CONC"    SYMTYPE "Isotropic"  E ${S}  U 0.2  A 1E-05`), y.push(""), y.push("$ FRAME SECTIONS"), y.push('  FRAMESECTION  "COL30"  MATERIAL "CONC"  SHAPE "Concrete Rectangular"  D 0.3 B 0.3 '), y.push('  FRAMESECTION  "VIGA"  MATERIAL "CONC"  SHAPE "Concrete Rectangular"  D 0.4 B 0.25 '), y.push("");
        const ee = h.elements.some((B) => B.length === 4);
        ee && (y.push("$ WALL/SLAB/DECK SECTIONS"), y.push('  SHELLPROP  "Muro20"  PROPTYPE  "Wall"  MATERIAL "CONC"  MODELINGTYPE "ShellThick"  WALLTHICKNESS 0.2 '), y.push(""));
        const Z = /* @__PURE__ */ new Map();
        let fe = 0;
        h.nodes.forEach((B) => {
          const me = `${B[0]},${B[2]}`;
          Z.has(me) || Z.set(me, `${++fe}`);
        }), y.push("$ POINT COORDINATES");
        for (const [B, me] of Z) {
          const [se, ue] = B.split(",").map(Number);
          y.push(`  POINT "${me}"  ${se} ${ue} `);
        }
        y.push("");
        const de = (B) => {
          const me = h.nodes[B], se = `${me[0]},${me[2]}`;
          return {
            pt: Z.get(se) || "1",
            story: le.get(Math.round(me[1] * 1e4) / 1e4) || "Base"
          };
        };
        y.push("$ LINE CONNECTIVITIES");
        const ke = [];
        if (h.elements.forEach((B, me) => {
          if (B.length !== 2) return;
          const se = h.nodes[B[0]], ue = h.nodes[B[1]], te = Math.abs(ue[1] - se[1]), be = Math.sqrt((ue[0] - se[0]) ** 2 + (ue[2] - se[2]) ** 2), Ee = te > be * 0.5, ae = de(B[0]), Ie = de(B[1]), We = Ee ? "COL30" : "VIGA";
          Ee ? (y.push(`  LINE  "E${me + 1}"  COLUMN  "${ae.pt}"  "${ae.pt}"  1`), ke.push(`  LINEASSIGN  "E${me + 1}"  "${Ie.story}"  SECTION "${We}"  `)) : (y.push(`  LINE  "E${me + 1}"  BEAM  "${ae.pt}"  "${Ie.pt}"  0`), ke.push(`  LINEASSIGN  "E${me + 1}"  "${ae.story}"  SECTION "${We}"  `));
        }), y.push(""), ee) {
          y.push("$ AREA CONNECTIVITIES");
          const B = [];
          h.elements.forEach((me, se) => {
            if (me.length !== 4) return;
            const ue = me.map((te) => de(te));
            y.push(`  AREA "W${se + 1}"  PANEL  4  "${ue[0].pt}"  "${ue[1].pt}"  "${ue[2].pt}"  "${ue[3].pt}"  1  1  0  0  `), B.push(`  AREAASSIGN  "W${se + 1}"  "${ue[2].story}"  SECTION "Muro20"  `);
          }), y.push(""), y.push("$ AREA ASSIGNS"), B.forEach((me) => y.push(me)), y.push("");
        }
        y.push("$ POINT ASSIGNS"), h.nodes.forEach((B, me) => {
          if (Math.abs(B[1]) < 0.01) {
            const se = de(me);
            y.push(`  POINTASSIGN  "${se.pt}"  "${se.story}"  RESTRAINT "UX UY UZ RX RY RZ"  `);
          }
        }), y.push(""), y.push("$ LINE ASSIGNS"), ke.forEach((B) => y.push(B)), y.push(""), y.push("$ LOAD PATTERNS"), y.push('  LOADPATTERN "Lat"  TYPE  "Other"  SELFWEIGHT  0'), y.push(""), y.push("$ POINT OBJECT LOADS");
        const Oe = Math.max(...h.nodes.map((B) => B[1]));
        return h.nodes.forEach((B, me) => {
          if (Math.abs(B[1] - Oe) < 0.01) {
            const se = de(me);
            y.push(`  POINTLOAD  "${se.pt}"  "${se.story}"  "Lat"  TYPE "FORCE"  FX 10`);
          }
        }), y.push(""), y.push("  END"), y.push("$ END OF MODEL FILE"), y.join(`\r
`);
      }
      function l(h) {
        const S = 15e3 * Math.sqrt(210) * 10, y = [];
        y.push(`"""ETABS API Validation: ${h.name}`), y.push('Generated by Awatif FEM Studio"""'), y.push("import comtypes.client, time, math"), y.push(""), y.push("helper = comtypes.client.CreateObject('ETABSv1.Helper')"), y.push("helper = helper.QueryInterface(comtypes.gen.ETABSv1.cHelper)"), y.push('myETABS = helper.CreateObjectProgID("CSI.ETABS.API.ETABSObject")'), y.push("myETABS.ApplicationStart()"), y.push("time.sleep(10)"), y.push("SapModel = myETABS.SapModel"), y.push("SapModel.InitializeNewModel()"), y.push("SapModel.File.NewBlank()"), y.push("SapModel.SetPresentUnits(12)  # tonf_m_C"), y.push(""), y.push(`E = ${S}`), y.push('SapModel.PropMaterial.SetMaterial("CONC", 2)'), y.push('SapModel.PropMaterial.SetMPIsotropic("CONC", E, 0.2, 5.5e-6)'), y.push('SapModel.PropFrame.SetRectangle("COL30", "CONC", 0.30, 0.30)'), y.push('SapModel.PropFrame.SetRectangle("VIGA", "CONC", 0.40, 0.25)'), h.elements.some((U) => U.length === 4) && y.push('SapModel.PropArea.SetWall("Muro20", 6, False, "CONC", 0.20)'), y.push(""), y.push("# Add elements"), y.push("FN = ' '"), h.elements.forEach((U, le) => {
          if (U.length === 2) {
            const ee = h.nodes[U[0]], Z = h.nodes[U[1]], fe = Math.abs(Z[1] - ee[1]), de = Math.sqrt((Z[0] - ee[0]) ** 2 + (Z[2] - ee[2]) ** 2), ke = fe > de * 0.5 ? "COL30" : "VIGA";
            y.push(`[FN,r]=SapModel.FrameObj.AddByCoord(${ee[0]},${ee[2]},${ee[1]}, ${Z[0]},${Z[2]},${Z[1]}, FN,"${ke}","E${le + 1}","Global")`);
          } else if (U.length === 4) {
            const ee = U.map((Z) => h.nodes[Z]);
            y.push(`SapModel.AreaObj.AddByCoord(4, [${ee.map((Z) => Z[0]).join(",")}], [${ee.map((Z) => Z[2]).join(",")}], [${ee.map((Z) => Z[1]).join(",")}], "", "Muro20")`);
          }
        }), y.push(""), y.push("# Supports at Z=0"), y.push("names = SapModel.PointObj.GetNameList()"), y.push("for i in range(int(names[0])):"), y.push("    c = SapModel.PointObj.GetCoordCartesian(names[1][i])"), y.push("    if abs(float(c[2])) < 0.01:"), y.push("        SapModel.PointObj.SetRestraint(names[1][i], [True]*6)"), y.push(""), y.push("# Load at top"), y.push('SapModel.LoadPatterns.Add("Lat", 8, 0, True)');
        const K = Math.max(...h.nodes.map((U) => U[1]));
        y.push("names = SapModel.PointObj.GetNameList()"), y.push("for i in range(int(names[0])):"), y.push("    c = SapModel.PointObj.GetCoordCartesian(names[1][i])"), y.push(`    if abs(float(c[2]) - ${K}) < 0.01:`), y.push('        SapModel.PointObj.SetLoadForce(names[1][i], "Lat", [10,0,0,0,0,0])'), y.push(""), y.push(`SapModel.File.Save(r"C:\\Users\\j-b-j\\Downloads\\validation_${h.name.replace(/[^a-zA-Z0-9]/g, "_")}.EDB")`), y.push("time.sleep(1)"), y.push("SapModel.Analyze.RunAnalysis()"), y.push("time.sleep(5)"), y.push(""), y.push("# Results"), y.push("SapModel.Results.Setup.DeselectAllCasesAndCombosForOutput()"), y.push('SapModel.Results.Setup.SetCaseSelectedForOutput("Lat")'), y.push(`print(f"\\n=== ETABS: ${h.name} ===")`), y.push("names = SapModel.PointObj.GetNameList()"), y.push("for i in range(int(names[0])):"), y.push("    name = names[1][i]"), y.push("    c = SapModel.PointObj.GetCoordCartesian(name)"), y.push("    NR=0;Obj=[];Elm=[];AC=[];ST=[];SN=[];U1=[];U2=[];U3=[];R1=[];R2=[];R3=[]"), y.push("    [NR,Obj,Elm,AC,ST,SN,U1,U2,U3,R1,R2,R3,ret]=SapModel.Results.JointDispl(name,0,NR,Obj,Elm,AC,ST,SN,U1,U2,U3,R1,R2,R3)"), y.push("    if NR > 0:"), y.push('        print(f"  {name} Z={float(c[2]):.1f}: Ux={U1[0]*100:.4f} cm")'), y.push(""), y.push('print("\\nAwatif results:")');
        for (const U of h.results) y.push(`print(f"  ${U.label}: Awatif=${U.awatif.toFixed(4)}, ETABS=${U.reference.toFixed(4)}, Ratio={${U.awatif.toFixed(4)}/${U.reference.toFixed(4)}:.4f}")`);
        return y.push("SapModel.View.RefreshView(0, False)"), y.join(`
`);
      }
      function s(h, S) {
        const y = new Blob([
          h
        ], {
          type: "text/plain"
        }), R = URL.createObjectURL(y), K = document.createElement("a");
        K.href = R, K.download = S, K.click(), URL.revokeObjectURL(R);
      }
      function d(h) {
        let S = document.getElementById("test-results-overlay");
        S && S.remove(), S = document.createElement("div"), S.id = "test-results-overlay", S.style.cssText = `position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);
        background:#1a1a2e;color:#eee;border:2px solid #16213e;border-radius:8px;padding:20px;
        z-index:10000;max-width:750px;width:90%;max-height:80vh;overflow-y:auto;font-family:monospace;font-size:13px;
        box-shadow:0 10px 40px rgba(0,0,0,0.5);`;
        let y = `<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px">
        <h3 style="margin:0;color:#00d4ff">Awatif FEM Validation</h3>
        <button onclick="this.parentElement.parentElement.remove()" style="background:none;border:none;color:#888;font-size:18px;cursor:pointer">X</button>
      </div>`, R = true;
        window.__awatifTests = h;
        for (let U = 0; U < h.length; U++) {
          const le = h[U];
          y += '<div style="margin-bottom:16px;border:1px solid #333;border-radius:6px;padding:10px">', y += '<div style="display:flex;justify-content:space-between;align-items:center">', y += `<div style="font-weight:bold;color:#00d4ff">${le.name}</div>`, y += "<div>", y += `<button onclick="window.__awatifDownloadE2k(${U})" style="background:#1e3a5f;color:#aaa;border:1px solid #444;padding:2px 6px;font-size:10px;cursor:pointer;margin-right:4px;border-radius:3px">e2k</button>`, y += `<button onclick="window.__awatifDownloadPy(${U})" style="background:#2a1e3a;color:#aaa;border:1px solid #444;padding:2px 6px;font-size:10px;cursor:pointer;border-radius:3px">py</button>`, y += "</div></div>", y += `<div style="color:#888;font-size:11px;margin-bottom:8px">${le.formulation}</div>`, y += `<table style="width:100%;border-collapse:collapse;font-size:12px">
          <tr style="color:#888"><td style="padding:3px 6px">Measure</td><td style="text-align:right">Awatif</td><td style="text-align:right">Reference</td><td style="text-align:right">Ratio</td><td style="text-align:right">Source</td><td style="text-align:center"></td></tr>`;
          for (const ee of le.results) {
            const Z = ee.reference !== 0 ? ee.awatif / ee.reference : 1, fe = Math.abs(Z - 1) < 0.05;
            fe || (R = false);
            const de = fe ? "#4caf50" : "#f44336", ke = fe ? "PASS" : "FAIL";
            y += `<tr style="border-top:1px solid #333">
            <td style="padding:3px 6px">${ee.label}</td>
            <td style="text-align:right;color:#fff">${ee.awatif.toFixed(4)}</td>
            <td style="text-align:right;color:#aaa">${ee.reference.toFixed(4)}</td>
            <td style="text-align:right;color:${de};font-weight:bold">${Z.toFixed(4)}</td>
            <td style="text-align:right;color:#888;font-size:11px">${ee.refSource}</td>
            <td style="text-align:center;color:${de};font-size:10px;font-weight:bold">${ke}</td></tr>`;
          }
          y += "</table></div>";
        }
        y += R ? '<div style="color:#4caf50;font-weight:bold;text-align:center;margin-top:8px">ALL TESTS PASSED (< 5% error vs ETABS)</div>' : '<div style="color:#f44336;font-weight:bold;text-align:center;margin-top:8px">Some tests exceeded 5% tolerance</div>', S.innerHTML = y, document.body.appendChild(S), window.__awatifDownloadE2k = (U) => {
          const le = window.__awatifTests[U], ee = le.name.replace(/[^a-zA-Z0-9]/g, "_").toLowerCase();
          s(o(le), `${ee}.e2k`);
        }, window.__awatifDownloadPy = (U) => {
          const le = window.__awatifTests[U], ee = le.name.replace(/[^a-zA-Z0-9]/g, "_").toLowerCase();
          s(l(le), `${ee}_etabs.py`);
        };
      }
      (_h = Le.querySelector("#cad3d-export")) == null ? void 0 : _h.addEventListener("click", (h) => {
        h.stopPropagation(), Ia();
      });
      let a = "";
      const r = Le.querySelector("#cad3d-io-menu"), f = Le.querySelector("#cad3d-io-file");
      function i(h, S) {
        e.nodes.val = h.nodes, e.elements.val = h.elements, e.nodeInputs.val = h.nodeInputs, e.elementInputs.val = h.elementInputs, h.sectionShapes && h.elementInputs && (h.elementInputs.sectionShapes = h.sectionShapes), e.deformOutputs.val = {}, e.analyzeOutputs.val = {};
        const y = h.elements.filter((K) => K.length === 2).length, R = h.elements.filter((K) => K.length >= 3).length;
        console.log(`${S} (${h.nodes.length} nodos, ${y} frames, ${R} shells): ${h.nodes.length} nodes, ${h.elements.length} elements`), setTimeout(() => Et(), 50);
      }
      function c(h, S) {
        var _a3, _b2, _c2;
        const y = {};
        h.elementInfo.forEach((Z) => y[Z.category] = (y[Z.category] || 0) + 1), (_a3 = document.getElementById("ifc-filter-panel")) == null ? void 0 : _a3.remove();
        const R = document.createElement("div");
        R.id = "ifc-filter-panel", R.style.cssText = `position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);
        background:#1e1e2e;border:2px solid #00ccff;border-radius:12px;padding:20px;
        z-index:1000010;color:#eee;font-family:monospace;font-size:12px;min-width:320px;
        box-shadow:0 8px 32px rgba(0,0,0,0.6);`;
        const K = [
          "column",
          "beam",
          "slab",
          "footing",
          "member",
          "wall"
        ], U = [
          "opening",
          "rebar",
          "plate",
          "fastener",
          "other"
        ], le = {
          column: "Columnas",
          beam: "Vigas",
          slab: "Losas",
          footing: "Zapatas",
          member: "Diagonales",
          wall: "Muros",
          opening: "Aberturas",
          rebar: "Refuerzo",
          plate: "Placas",
          fastener: "Pernos",
          other: "Otros"
        };
        let ee = `<h3 style="color:#00ccff;margin:0 0 12px">IFC \u2192 Modelo Anal\xEDtico</h3>
        <div style="color:#888;margin-bottom:10px">Selecciona qu\xE9 convertir a FEM:</div>
        <div style="border:1px solid #444;border-radius:6px;padding:8px;margin-bottom:8px">
          <div style="color:#33ff33;font-weight:bold;margin-bottom:4px">Estructural</div>`;
        for (const Z of K) {
          const fe = y[Z] || 0;
          if (fe === 0) continue;
          const de = [
            "column",
            "beam",
            "slab"
          ].includes(Z) ? "checked" : "";
          ee += `<label style="display:flex;align-items:center;gap:6px;padding:2px 0">
          <input type="checkbox" data-ifc-cat="${Z}" ${de}>
          <span>${le[Z] || Z}</span>
          <span style="color:#888;margin-left:auto">(${fe})</span>
        </label>`;
        }
        ee += `</div><div style="border:1px solid #333;border-radius:6px;padding:8px;margin-bottom:12px">
        <div style="color:#ff6666;font-weight:bold;margin-bottom:4px">No estructural (solo visual)</div>`;
        for (const Z of U) {
          const fe = y[Z] || 0;
          fe !== 0 && (ee += `<label style="display:flex;align-items:center;gap:6px;padding:2px 0;color:#888">
          <input type="checkbox" data-ifc-cat="${Z}" disabled>
          <span>${le[Z] || Z}</span>
          <span style="margin-left:auto">(${fe})</span>
        </label>`);
        }
        ee += `</div>
        <div style="display:flex;gap:8px">
          <button id="ifc-gen-analytical" style="flex:1;padding:8px;background:#0f3460;color:#fff;border:none;border-radius:6px;cursor:pointer;font-size:13px;font-weight:bold">
            \u{1F527} Generar Modelo Anal\xEDtico
          </button>
          <button id="ifc-cancel" style="padding:8px 12px;background:#333;color:#aaa;border:1px solid #555;border-radius:6px;cursor:pointer">\u2715</button>
        </div>`, R.innerHTML = ee, document.body.appendChild(R), R.querySelectorAll("input[data-ifc-cat]").forEach((Z) => {
          Z.addEventListener("change", () => {
            const fe = Z.dataset.ifcCat, de = h.detailCategories.get(fe);
            if (de) {
              de.visible = Z.checked;
              const ke = Qe();
              ke && ke.render();
            }
          });
        }), (_b2 = R.querySelector("#ifc-gen-analytical")) == null ? void 0 : _b2.addEventListener("click", () => {
          var _a4;
          const Z = /* @__PURE__ */ new Set();
          R.querySelectorAll("input[data-ifc-cat]:checked").forEach((se) => {
            Z.add(se.dataset.ifcCat);
          });
          const fe = S.nodes.map((se) => [
            se.x,
            se.y,
            se.z
          ]), de = [], ke = {
            elasticities: /* @__PURE__ */ new Map(),
            shearModuli: /* @__PURE__ */ new Map(),
            areas: /* @__PURE__ */ new Map(),
            momentsOfInertiaZ: /* @__PURE__ */ new Map(),
            momentsOfInertiaY: /* @__PURE__ */ new Map(),
            torsionalConstants: /* @__PURE__ */ new Map(),
            densities: /* @__PURE__ */ new Map(),
            sectionShapes: /* @__PURE__ */ new Map()
          }, Oe = {
            supports: /* @__PURE__ */ new Map(),
            loads: /* @__PURE__ */ new Map()
          };
          let B = 0;
          for (const se of S.elements) if (Z.has(se.category) && se.type === "frame" && se.nodeIds.length >= 2) {
            de.push(se.nodeIds);
            const ue = ((_a4 = S.materials) == null ? void 0 : _a4.get(se.material)) || {
              E: 2132888792e-2,
              nu: 0.2,
              rho: 2.4
            }, te = se.b || 0.3, be = se.h || 0.3, Ee = te * be, ae = te * be * be * be / 12, Ie = be * te * te * te / 12, We = te * be * (te * te + be * be) / 12, it = ue.E / (2 * (1 + ue.nu));
            ke.elasticities.set(B, ue.E), ke.shearModuli.set(B, it), ke.areas.set(B, Ee), ke.momentsOfInertiaZ.set(B, Ie), ke.momentsOfInertiaY.set(B, ae), ke.torsionalConstants.set(B, We), ke.densities.set(B, ue.rho), ke.sectionShapes.set(B, {
              type: "rect",
              b: te,
              h: be,
              name: se.sectionName
            }), B++;
          }
          const me = Math.min(...fe.map((se) => se[2]));
          fe.forEach((se, ue) => {
            Math.abs(se[2] - me) < 0.05 && Oe.supports.set(ue, [
              true,
              true,
              true,
              true,
              true,
              true
            ]);
          });
          for (const [, se] of h.detailCategories) {
            const ue = Qe();
            ue && ue.scene.remove(se);
          }
          i({
            nodes: fe,
            elements: de,
            nodeInputs: Oe,
            elementInputs: ke,
            sectionShapes: ke.sectionShapes,
            info: {
              nNodes: fe.length,
              nFrames: de.length
            }
          }, "IFC analytical"), R.remove();
        }), (_c2 = R.querySelector("#ifc-cancel")) == null ? void 0 : _c2.addEventListener("click", () => {
          for (const [, fe] of h.detailCategories) {
            const de = Qe();
            de && de.scene.remove(fe);
          }
          const Z = Qe();
          Z && Z.render(), R.remove();
        });
      }
      function b(h) {
        D = /* @__PURE__ */ new Set(), Y = /* @__PURE__ */ new Set(), Me = /* @__PURE__ */ new Map(), ze = /* @__PURE__ */ new Map();
        const S = /* @__PURE__ */ new Map();
        for (let de = 0; de < h.stories.length; de++) S.set(h.stories[de].name, de);
        for (let de = 0; de < h.elementTypes.length; de++) {
          const ke = h.elementTypes[de], Oe = h.elementStories[de], B = S.get(Oe) ?? 0;
          Me.set(de, B), ke === "COLUMN" || ke === "BRACE" ? D.add(de) : Y.add(de);
        }
        A = "edificio";
        const y = h.grids.filter((de) => de.dir === "X").sort((de, ke) => de.coord - ke.coord), R = h.grids.filter((de) => de.dir === "Y").sort((de, ke) => de.coord - ke.coord);
        let K, U, le, ee;
        if (y.length > 0 || R.length > 0) K = y.map((de) => de.coord), U = R.map((de) => de.coord), le = y.map((de) => de.label), ee = R.map((de) => de.label);
        else {
          const de = new Set(h.nodes.map((Oe) => Oe[0])), ke = new Set(h.nodes.map((Oe) => Oe[1]));
          K = [
            ...de
          ].sort((Oe, B) => Oe - B), U = [
            ...ke
          ].sort((Oe, B) => Oe - B), le = K.map((Oe, B) => String(B + 1)), ee = U.map((Oe, B) => String.fromCharCode(65 + B));
        }
        const Z = h.stories.length > 0 ? Math.max(...h.stories.map((de) => de.elev)) : Math.max(...h.nodes.map((de) => de[2]));
        Ge = K, Ke = U, ft = Z, setTimeout(() => {
          Et(), Kn(K, U, Z, le, ee), Eo(h.stories, K, U), qo(), _o();
        }, 100);
        const fe = {
          COLUMN: 0,
          BEAM: 0,
          BRACE: 0
        };
        for (const de of h.elementTypes) fe[de]++;
        console.log(`E2K grids: X=[${le.join(",")}] Y=[${ee.join(",")}]`), console.log(`E2K stories: ${h.stories.map((de) => `${de.name}@${de.elev.toFixed(2)}`).join(", ")}`), console.log(`E2K elements: ${fe.COLUMN} columns, ${fe.BEAM} beams, ${fe.BRACE} braces`), et();
      }
      function w(h, S) {
        const y = new Blob([
          h
        ], {
          type: "text/plain"
        }), R = URL.createObjectURL(y), K = document.createElement("a");
        K.href = R, K.download = S, K.click(), URL.revokeObjectURL(R);
      }
      r && r.addEventListener("change", () => {
        if (a = r.value, r.value = "", a.startsWith("import")) a === "import-e2k" ? f.accept = ".e2k,.E2K" : a === "import-s2k" ? f.accept = ".s2k,.S2K,.$2k" : a === "import-ifc" ? f.accept = ".ifc,.IFC" : a === "import-py" ? f.accept = ".py" : a === "import-tcl" && (f.accept = ".tcl"), f.click();
        else if (a.startsWith("export")) {
          const h = {
            nodes: e.nodes.val,
            elements: e.elements.val,
            nodeInputs: e.nodeInputs.val,
            elementInputs: e.elementInputs.val
          };
          try {
            a === "export-e2k" ? w(Fl({
              ...h,
              title: "Awatif Model",
              e2kModel: Ue ?? void 0
            }), "model.e2k") : a === "export-s2k" ? w(Cl({
              ...h,
              title: "Awatif Model"
            }), "model.s2k") : a === "export-py" ? w(Nl(h), "model_opensees.py") : a === "export-tcl" && w(ql(h), "model_opensees.tcl");
          } catch (S) {
            alert("Export error: " + S.message);
          }
        }
      }), f && f.addEventListener("change", () => {
        var _a3;
        const h = (_a3 = f.files) == null ? void 0 : _a3[0];
        if (!h) return;
        if (a === "import-ifc") {
          const y = new FileReader();
          y.onload = async () => {
            const R = y.result;
            try {
              const K = Qe();
              if (!K) {
                alert("Viewer not ready");
                return;
              }
              console.log("IFC: Loading 3D geometry...");
              const U = await Jl(K.scene, R);
              console.log(`IFC: ${U.meshCount} meshes loaded, bbox:`, U.bbox);
              const le = new Ne();
              U.bbox.getCenter(le);
              const ee = new Ne();
              U.bbox.getSize(ee);
              const Z = Math.max(ee.x, ee.y, ee.z);
              K.controls.target.copy(le), K.camera.position.set(le.x + Z, le.y + Z * 0.5, le.z + Z), K.camera.lookAt(le), K.controls.maxDistance = Z * 5, K.controls.update(), K.render(), window.__ifcLoadResult = U, window.__ifcArrayBuffer = R;
              const fe = new FileReader();
              fe.onload = () => {
                const de = fe.result, ke = Wl(de);
                window.__ifcAnalytical = ke;
                const Oe = {};
                U.elementInfo.forEach((B) => Oe[B.category] = (Oe[B.category] || 0) + 1), console.log("IFC categories:", Oe), console.log(`IFC: ${U.elementInfo.size} geometric elements, ${ke.elements.length} analytical elements`), c(U, ke);
              }, fe.readAsText(h);
            } catch (K) {
              alert("IFC error: " + K.message), console.error(K);
            }
          }, y.readAsArrayBuffer(h), f.value = "";
          return;
        }
        const S = new FileReader();
        S.onload = () => {
          const y = S.result;
          try {
            if (a === "import-e2k") {
              const R = Tl(y);
              Ue = R, i(R, "E2K imported"), b(R);
            } else if (a === "import-s2k") {
              const R = zl(y);
              i({
                nodes: R.nodes,
                elements: R.elements,
                nodeInputs: R.nodeInputs,
                elementInputs: R.elementInputs,
                sectionShapes: R.sectionShapes,
                info: R.info
              }, "S2K imported");
            } else if (a === "import-py") {
              const R = _l(y);
              i(R, "OpenSeesPy imported");
            } else if (a === "import-tcl") {
              const R = Bl(y);
              i(R, "OpenSees Tcl imported");
            }
          } catch (R) {
            alert("Import error: " + R.message), console.error(R);
          }
        }, S.readAsText(h), f.value = "";
      });
      const E = Le.querySelector("#cad3d-force-unit");
      E && (E.value = g, E.addEventListener("change", (h) => {
        h.stopPropagation(), g = E.value, M = Pn(g, O), A && tt(A);
      }));
      const $ = Le.querySelector("#cad3d-length-unit");
      $ && ($.value = O, $.addEventListener("change", (h) => {
        h.stopPropagation(), O = $.value, M = Pn(g, O), A && tt(A);
      })), Le.querySelectorAll("[data-preset]").forEach((h) => {
        h.addEventListener("click", (S) => {
          S.stopPropagation();
          const y = h.dataset.preset, R = H[y];
          R && (g = R.force, O = R.length, V = R.stress, M = Pn(g, O), E && (E.value = g), $ && ($.value = O), Le.querySelectorAll("[data-preset]").forEach((K) => {
            K.classList.toggle("active", K.dataset.preset === y);
          }), A && tt(A), console.log(`Preset: ${y} \u2192 ${g}+${O}, stress: ${V.label}`));
        });
      }), (_i = Le.querySelector("#cad3d-log")) == null ? void 0 : _i.addEventListener("click", (h) => {
        h.stopPropagation(), Ba();
      }), (_j = Le.querySelector("#cad3d-pushover")) == null ? void 0 : _j.addEventListener("click", (h) => {
        h.stopPropagation(), Da();
      }), (_k = Le.querySelector("#cad3d-nonlinear")) == null ? void 0 : _k.addEventListener("click", (h) => {
        h.stopPropagation(), ja();
      }), (_l2 = Le.querySelector("#cad3d-fem-solver")) == null ? void 0 : _l2.addEventListener("click", (h) => {
        h.stopPropagation(), Ga();
      }), (_m = Le.querySelector("#cad3d-calc")) == null ? void 0 : _m.addEventListener("click", (h) => {
        h.stopPropagation(), ta(async () => {
          const { openCalcPanel: S } = await import("./calcPanel-MiO40P0E.js").then(async (m2) => {
            await m2.__tla;
            return m2;
          });
          return {
            openCalcPanel: S
          };
        }, __vite__mapDeps([0,1,2,3,4,5]), import.meta.url).then(({ openCalcPanel: S }) => {
          var _a3, _b2;
          const y = {
            nodes: e.nodes.val,
            elements: e.elements.val,
            nodeInputs: ((_a3 = e.nodeInputs) == null ? void 0 : _a3.val) ?? {},
            elementInputs: ((_b2 = e.elementInputs) == null ? void 0 : _b2.val) ?? {},
            modelName: A ? A.charAt(0).toUpperCase() + A.slice(1) : "Modelo"
          };
          S(y);
        });
      }), (_n2 = Le.querySelector("#cad3d-modal")) == null ? void 0 : _n2.addEventListener("click", (h) => {
        var _a3, _b2;
        h.stopPropagation(), _e = !_e, (_a3 = Le.querySelector("#cad3d-modal")) == null ? void 0 : _a3.classList.toggle("active", _e);
        const y = Le.querySelector("#cad3d-mode-prev"), R = Le.querySelector("#cad3d-mode-next"), K = Le.querySelector("#cad3d-mode-label"), U = Le.querySelector("#cad3d-modal-scale");
        if (_e) {
          const le = Qe();
          ((_b2 = le == null ? void 0 : le.settings) == null ? void 0 : _b2.loads) && (Be = le.settings.loads.rawVal, le.settings.loads.val = false), Co(), y.style.display = "", R.style.display = "", K.style.display = "", U && (U.style.display = ""), p();
        } else Fo(), y.style.display = "none", R.style.display = "none", K.style.display = "none", U && (U.style.display = "none"), A && A !== "placa-q4" && A !== "placa-3q" && Pe(), setTimeout(() => {
          var _a4;
          const le = Qe();
          ((_a4 = le == null ? void 0 : le.settings) == null ? void 0 : _a4.loads) && Be && (le.settings.loads.val = true);
        }, 600);
      });
      function p() {
        var _a3;
        const h = Le.querySelector("#cad3d-mode-label");
        if (!h || !(Fe == null ? void 0 : Fe.frequencies)) return;
        const S = Fe.frequencies[ye], y = S > 0 ? 1 / S : 0, R = [
          0,
          0,
          0,
          0,
          0,
          0
        ];
        for (let K = 0; K <= ye; K++) {
          const U = (_a3 = Fe.massParticipation) == null ? void 0 : _a3[K];
          if (U) for (let le = 0; le < 6; le++) R[le] += U[le];
        }
        h.textContent = `Modo ${ye + 1} \u2014 ${S.toFixed(2)} Hz \u2014 T=${y.toFixed(3)}s \u2014 \u03A3Ux=${(R[0] * 100).toFixed(1)}% \u03A3Uy=${(R[1] * 100).toFixed(1)}% \u03A3Rz=${(R[5] * 100).toFixed(1)}%`;
      }
      (_o2 = Le.querySelector("#cad3d-mode-prev")) == null ? void 0 : _o2.addEventListener("click", (h) => {
        if (h.stopPropagation(), !(Fe == null ? void 0 : Fe.modeShapes)) return;
        ye = (ye - 1 + Fe.modeShapes.length) % Fe.modeShapes.length;
        const S = Fe.modeShapes[ye], { extent: y } = $n();
        let R = 0;
        for (let K = 0; K < Te.length; K++) {
          const U = S[K * 6] || 0, le = S[K * 6 + 1] || 0, ee = S[K * 6 + 2] || 0;
          R = Math.max(R, Math.sqrt(U * U + le * le + ee * ee));
        }
        Ye = R > 1e-12 ? y * 0.05 / R : 1, eo(), p();
      }), (_p = Le.querySelector("#cad3d-mode-next")) == null ? void 0 : _p.addEventListener("click", (h) => {
        if (h.stopPropagation(), !(Fe == null ? void 0 : Fe.modeShapes)) return;
        ye = (ye + 1) % Fe.modeShapes.length;
        const S = Fe.modeShapes[ye], { extent: y } = $n();
        let R = 0;
        for (let K = 0; K < Te.length; K++) {
          const U = S[K * 6] || 0, le = S[K * 6 + 1] || 0, ee = S[K * 6 + 2] || 0;
          R = Math.max(R, Math.sqrt(U * U + le * le + ee * ee));
        }
        Ye = R > 1e-12 ? y * 0.05 / R : 1, eo(), p();
      });
      const x = Le.querySelector("#cad3d-modal-scale");
      x == null ? void 0 : x.addEventListener("mousedown", (h) => h.stopPropagation()), x == null ? void 0 : x.addEventListener("change", () => {
        _e && (Fe == null ? void 0 : Fe.modeShapes) && eo();
      });
      const T = Le.querySelector("#cad3d-cli-toggle"), L = Le.querySelector("#cad3d-cli-panel"), k = Le.querySelector("#cad3d-cli-output"), z = Le.querySelector("#cad3d-cmd"), P = [];
      let v = -1;
      T == null ? void 0 : T.addEventListener("click", (h) => {
        if (h.stopPropagation(), L) {
          const S = L.style.display !== "none";
          L.style.display = S ? "none" : "block", S || (z == null ? void 0 : z.focus(), k && !k.textContent && (k.textContent = `CLI ready. Commands:
  cad.addNode(x, y, z)     cad.addFrame(i, j)
  cad.addSupport(n)        cad.addLoad(n, [fx,fy,fz,0,0,0])
  cad.frame([5,5],[3,3])   cad.building([5],[4],[3])
  cad.galpon(12,20,6,3)    cad.clear()
  cad.info()               cad.listNodes()
`));
        }
      }), z == null ? void 0 : z.addEventListener("mousedown", (h) => h.stopPropagation()), document.addEventListener("keydown", (h) => {
        var _a3;
        if ((h.ctrlKey || h.metaKey) && h.key === "z" && !h.shiftKey) {
          h.preventDefault(), Ls();
          return;
        }
        if ((h.ctrlKey || h.metaKey) && (h.key === "y" || h.key === "z" && h.shiftKey)) {
          h.preventDefault(), Cs();
          return;
        }
        if ((h.key === "Delete" || h.key === "Backspace") && xt.size > 0) {
          h.preventDefault(), xt.forEach((S) => X.add(S)), xt.clear(), un && (un.remove(), un = null), Pe();
          return;
        }
        if (h.key === "Escape") {
          if (fn) if (yt !== null) {
            yt = null;
            const S = Qe();
            qt && S && (S.scene.remove(qt), qt.geometry.dispose(), qt.material.dispose(), qt = null), _t && S && (S.scene.remove(_t), _t.geometry.dispose(), _t.material.dispose(), _t = null), S == null ? void 0 : S.render();
          } else co();
          Jt && io(), on && (on = false, Ln(), (_a3 = Le.querySelector("#cad3d-inspect")) == null ? void 0 : _a3.classList.remove("inspect-active"));
        }
      }), z == null ? void 0 : z.addEventListener("keydown", (h) => {
        if (h.stopPropagation(), h.key === "Enter") {
          const S = z.value.trim();
          if (S) {
            P.unshift(S), v = -1, k && (k.textContent += `> ${S}
`);
            try {
              const y = new Function("cad", `return ${S}`)(Ze);
              if (y !== void 0 && k) {
                const R = typeof y == "object" ? JSON.stringify(y, null, 2) : String(y);
                k.textContent += `${R}
`;
              }
            } catch (y) {
              k && (k.textContent += `ERROR: ${y.message}
`);
            }
            k && (k.scrollTop = k.scrollHeight), z.value = "";
          }
        } else h.key === "ArrowUp" ? (h.preventDefault(), P.length > 0 && v < P.length - 1 && (v++, z.value = P[v])) : h.key === "ArrowDown" && (h.preventDefault(), v > 0 ? (v--, z.value = P[v]) : (v = -1, z.value = ""));
      });
      let m = false, I = 0, F = 0, N = 0, G = 0;
      Le.addEventListener("mousedown", (h) => {
        const S = h.target.tagName;
        if (S === "BUTTON" || S === "INPUT" || S === "SELECT") return;
        m = true;
        const y = Le.getBoundingClientRect();
        Le.style.bottom = "unset", I = h.clientX, F = h.clientY, N = y.left, G = y.top, h.preventDefault();
      }), window.addEventListener("mousemove", (h) => {
        m && (h.preventDefault(), Le.style.left = N + (h.clientX - I) + "px", Le.style.top = G + (h.clientY - F) + "px");
      }), window.addEventListener("mouseup", () => {
        m = false;
      }), et();
    }, 10);
    function Qe() {
      const t = document.getElementById("viewer");
      return t ? t.__ctx : null;
    }
    function $n() {
      const t = e.nodes.val;
      if (t.length === 0) return {
        center: new Ne(),
        extent: 10
      };
      let n = 1 / 0, o = 1 / 0, l = 1 / 0, s = -1 / 0, d = -1 / 0, a = -1 / 0;
      for (const [i, c, b] of t) i < n && (n = i), i > s && (s = i), c < o && (o = c), c > d && (d = c), b < l && (l = b), b > a && (a = b);
      const r = new Ne((n + s) / 2, (o + d) / 2, (l + a) / 2), f = Math.max(s - n, d - o, a - l, 1);
      return {
        center: r,
        extent: f
      };
    }
    function Et(t = false) {
      const n = Qe();
      if (!n) return;
      const { extent: o } = $n();
      let l;
      o <= 5 ? l = Math.max(1, Math.ceil(o * 1.5)) : o <= 50 ? l = Math.max(5, Math.ceil(o * 1.3 / 5) * 5) : l = Math.max(20, Math.ceil(o * 1.3 / 10) * 10), n.settings.gridSize.val = l, n.scene.children.filter((b) => b.type === "GridHelper").forEach((b) => {
        var _a2, _b;
        (_a2 = b.geometry) == null ? void 0 : _a2.dispose(), (_b = b.material) == null ? void 0 : _b.dispose(), n.scene.remove(b);
      });
      const d = Ka(), a = new rl(l, 20, d.grid, d.grid);
      a.rotation.x = Math.PI / 2, a.position.set(0.5 * l, 0.5 * l, 0), n.scene.add(a), n.scene.children.filter((b) => b.type === "Group" && b.name !== "gridAxes" && b.name !== "loadsGroup" && (b.name === "viewerAxes" || b.children.some((w) => w instanceof po))).forEach((b) => {
        b.traverse((w) => {
          w.geometry && w.geometry.dispose(), w.material && (w.material.map && w.material.map.dispose(), w.material.dispose());
        }), n.scene.remove(b);
      });
      const f = 0.05 * l, i = new ao();
      i.name = "viewerAxes";
      const c = d.axisArrow;
      i.add(new po(new Ne(1, 0, 0), new Ne(), 1, c, 0.2, 0.2)), i.add(new po(new Ne(0, 1, 0), new Ne(), 1, c, 0.2, 0.2)), i.add(new po(new Ne(0, 0, 1), new Ne(), 1, c, 0.2, 0.2)), i.children.forEach((b) => b.scale.set(f, f, f));
      for (const [b, w, E] of [
        [
          "X",
          "red",
          [
            1.3 * f,
            0,
            0
          ]
        ],
        [
          "Y",
          "green",
          [
            0,
            1.3 * f,
            0
          ]
        ],
        [
          "Z",
          "blue",
          [
            0,
            0,
            1.3 * f
          ]
        ]
      ]) {
        const $ = document.createElement("canvas");
        $.width = 64, $.height = 64;
        const p = $.getContext("2d");
        p.fillStyle = w, p.font = "bold 50px Arial", p.textAlign = "center", p.textBaseline = "middle", p.fillText(b, 32, 34);
        const x = new Ko($);
        x.needsUpdate = true;
        const T = new fo(new uo({
          map: x,
          depthTest: false,
          transparent: true
        }));
        T.position.set(E[0], E[1], E[2]), T.scale.set(0.4 * f, 0.4 * f, 1), T.renderOrder = 99, i.add(T);
      }
      n.scene.add(i), t ? n.render() : Mn("3d");
    }
    function As(t, n, o) {
      if (t.length < 2) return o * 10;
      let l = 1 / 0;
      return n > 0 && (l = Math.min(l, Math.abs(t[n] - t[n - 1]))), n < t.length - 1 && (l = Math.min(l, Math.abs(t[n + 1] - t[n]))), l * 0.45 || o * 0.1;
    }
    function Mn(t) {
      var _a2;
      const n = Qe();
      if (!n) return;
      const { center: o, extent: l } = $n(), s = n.renderer.domElement.clientWidth / (n.renderer.domElement.clientHeight || 1), d = l * 0.7;
      n.controls.maxDistance = l * 5, n.controls.minDistance = l * 0.05, n.renderer.clippingPlanes = [];
      const a = () => {
        n.scene.traverse((r) => {
          var _a3;
          if (!r.material) return;
          const f = r.type === "GridHelper" || r.type === "AxesHelper", i = r.isSprite, c = ((_a3 = r.userData) == null ? void 0 : _a3.noClip) === true;
          (f || i || c) && (Array.isArray(r.material) ? r.material.forEach((b) => {
            b.clippingPlanes = [];
          }) : r.material.clippingPlanes = []);
        });
      };
      if (t === "3d") {
        const r = n.perspCamera.fov, f = l / (2 * Math.tan(r * Math.PI / 360)) * 2.2;
        n.perspCamera.position.set(o.x + f * 0.5, o.y - f * 0.8, o.z + f * 0.5), n.controls.target.copy(o), n.setActiveCamera(n.perspCamera);
      } else {
        const r = n.orthoCamera;
        r.left = -d * s, r.right = d * s, r.top = d, r.bottom = -d, r.near = -l * 10, r.far = l * 10, r.updateProjectionMatrix();
        const f = (i, c, b) => {
          r.position.copy(i), r.up.copy(b), n.controls.target.copy(c), r.lookAt(c), n.controls.update();
        };
        if (t === "plan") n.renderer.clippingPlanes = [], f(new Ne(o.x, o.y, o.z + l * 2), new Ne(o.x, o.y, o.z), new Ne(0, 1, 0));
        else if (t.startsWith("plan:")) {
          const i = parseInt(t.split(":")[1]), c = ((_a2 = Q.hPiso) == null ? void 0 : _a2.val) ?? 3, b = (i + 1) * c, w = c * 0.45;
          n.renderer.clippingPlanes = [
            new kn(new Ne(0, 0, -1), b + w),
            new kn(new Ne(0, 0, 1), -b + w)
          ], a(), f(new Ne(o.x, o.y, b + l * 2), new Ne(o.x, o.y, b), new Ne(0, 1, 0));
        } else if (t === "elevX") r.position.set(o.x + l * 2, o.y, o.z), r.up.set(0, 0, 1);
        else if (t === "elevY") r.position.set(o.x, o.y - l * 2, o.z), r.up.set(0, 0, 1);
        else if (t.startsWith("axisX:")) {
          const i = parseInt(t.split(":")[1]), c = Ge[i] ?? o.x;
          if (Ke.length > 1) {
            const w = As(Ge, i, l);
            n.renderer.clippingPlanes = [
              new kn(new Ne(-1, 0, 0), c + w),
              new kn(new Ne(1, 0, 0), -c + w)
            ], a(), r.position.set(o.x + l * 2, o.y, o.z), n.controls.target.set(o.x, o.y, o.z);
          } else r.position.set(o.x, o.y - l * 2, o.z), n.controls.target.copy(o);
          r.up.set(0, 0, 1);
        } else if (t.startsWith("axisY:")) {
          const i = parseInt(t.split(":")[1]), c = Ke[i] ?? o.y;
          if (Ge.length > 1) {
            const w = As(Ke, i, l);
            n.renderer.clippingPlanes = [
              new kn(new Ne(0, -1, 0), c + w),
              new kn(new Ne(0, 1, 0), -c + w)
            ], a(), r.position.set(o.x, o.y - l * 2, o.z), n.controls.target.set(o.x, o.y, o.z);
          } else r.position.set(o.x + l * 2, o.y, o.z), n.controls.target.copy(o);
          r.up.set(0, 0, 1);
        }
        !t.startsWith("axisX:") && !t.startsWith("axisY:") && n.controls.target.copy(o), n.setActiveCamera(r);
      }
    }
    function qo() {
      const t = Le.querySelector("#cad3d-axis-buttons");
      if (!t) return;
      if (Ge.length < 2 && Ke.length < 2) {
        t.style.display = "none";
        return;
      }
      t.style.display = "", t.innerHTML = "";
      const n = (d, a, r) => {
        const f = document.createElement("button");
        return f.textContent = d, f.dataset.view = a, f.title = r, f.style.cssText = "min-width:22px;padding:1px 5px;font-weight:bold", f.addEventListener("click", (i) => {
          var _a2;
          i.stopPropagation();
          const c = f.classList.contains("view-active");
          Le.querySelectorAll("[data-view]").forEach((b) => b.classList.remove("view-active")), c ? (Mn("3d"), (_a2 = Le.querySelector('[data-view="3d"]')) == null ? void 0 : _a2.classList.add("view-active")) : (Mn(a), f.classList.add("view-active"));
        }), f;
      }, o = document.createElement("span");
      o.textContent = "Ejes:", o.style.cssText = "color:#888;font-size:10px;margin-right:2px;align-self:center", t.appendChild(o);
      const l = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      Ge.forEach((d, a) => {
        const r = a < l.length ? l[a] : `X${a}`;
        t.appendChild(n(r, `axisX:${a}`, `Eje ${r} \u2014 elevaci\xF3n mirando en Y`));
      });
      const s = document.createElement("span");
      s.textContent = "|", s.style.cssText = "color:#555;margin:0 3px;align-self:center;font-weight:bold", t.appendChild(s), Ke.forEach((d, a) => {
        const r = `${a + 1}`;
        t.appendChild(n(r, `axisY:${a}`, `Eje ${r} \u2014 elevaci\xF3n mirando en X`));
      });
    }
    function _o() {
      var _a2;
      const t = Le.querySelector("#cad3d-floor-buttons");
      if (!t) return;
      const n = Math.round(((_a2 = Q.nPisos) == null ? void 0 : _a2.val) ?? 0);
      if (n < 1) {
        t.style.display = "none";
        return;
      }
      t.style.display = "", t.innerHTML = "";
      const o = (s, d, a) => {
        const r = document.createElement("button");
        return r.textContent = s, r.dataset.view = d, r.title = a, r.style.cssText = "min-width:22px;padding:1px 5px;font-weight:bold", r.addEventListener("click", (f) => {
          var _a3;
          f.stopPropagation();
          const i = r.classList.contains("view-active");
          Le.querySelectorAll("[data-view]").forEach((c) => c.classList.remove("view-active")), i ? (Mn("3d"), (_a3 = Le.querySelector('[data-view="3d"]')) == null ? void 0 : _a3.classList.add("view-active")) : (Mn(d), r.classList.add("view-active"));
        }), r;
      }, l = document.createElement("span");
      l.textContent = "Planta:", l.style.cssText = "color:#888;font-size:10px;margin-right:2px;align-self:center", t.appendChild(l);
      for (let s = 0; s < n; s++) t.appendChild(o(`P${s + 1}`, `plan:${s}`, `Planta Piso ${s + 1}`));
    }
    function Ta() {
      Mn("3d"), Le.querySelectorAll("[data-view]").forEach((t) => t.classList.toggle("view-active", t.dataset.view === "3d"));
    }
    Ze.view = (t) => {
      t = {
        planta: "plan",
        elevationX: "elevX",
        elevationY: "elevY",
        corte: "section"
      }[t] || t, Mn(t), Le.querySelectorAll("[data-view]").forEach((o) => o.classList.toggle("view-active", o.dataset.view === t));
    };
    let on = false, Jt = false, fn = false, Wt = "line", Kt = [], yt = null, qt = null, _t = null, _n = null, Qt = null;
    const St = {
      node: true,
      grid: true,
      midpoint: true,
      track: true
    }, Bo = 0.5;
    let Do = [], en = null, An = null;
    const Bn = [], ro = [], za = 50;
    function Dn() {
      Bn.push({
        nodes: JSON.parse(JSON.stringify(e.nodes.val)),
        elements: JSON.parse(JSON.stringify(e.elements.val))
      }), Bn.length > za && Bn.shift(), ro.length = 0;
    }
    function Ls() {
      if (Bn.length === 0) return;
      ro.push({
        nodes: JSON.parse(JSON.stringify(e.nodes.val)),
        elements: JSON.parse(JSON.stringify(e.elements.val))
      });
      const t = Bn.pop();
      e.nodes.val = t.nodes, e.elements.val = t.elements, yn(), e.elementInputs.val = {
        ...e.elementInputs.val
      };
    }
    function Cs() {
      if (ro.length === 0) return;
      Bn.push({
        nodes: JSON.parse(JSON.stringify(e.nodes.val)),
        elements: JSON.parse(JSON.stringify(e.elements.val))
      });
      const t = ro.pop();
      e.nodes.val = t.nodes, e.elements.val = t.elements, yn(), e.elementInputs.val = {
        ...e.elementInputs.val
      };
    }
    const xt = /* @__PURE__ */ new Set();
    let Vt = null, wn = [], Zt = null, un = null;
    function Ho(t) {
      const n = Qe();
      if (!n) return;
      const o = e.nodes.val, l = e.elements.val[t];
      if (!l) return;
      const s = [];
      for (let r = 0; r < l.length; r++) {
        const f = o[l[r]], i = o[l[(r + 1) % l.length]];
        s.push(f[0], f[1], f[2], i[0], i[1], i[2]);
      }
      const d = new nn();
      d.setAttribute("position", new Cn(s, 3));
      const a = new Yn(d, new Jn({
        color: 16711935,
        linewidth: 3,
        depthTest: false
      }));
      a.renderOrder = 9998, a.__elemIdx = t, n.scene.add(a), wn.push(a), n.render();
    }
    function En() {
      const t = Qe();
      wn.forEach((n) => {
        t == null ? void 0 : t.scene.remove(n), n.geometry.dispose(), n.material.dispose();
      }), wn = [], t == null ? void 0 : t.render();
    }
    function Sn() {
      un && un.remove();
      const t = J.size > 0 || j;
      if (xt.size === 0 && !t) {
        un = null;
        return;
      }
      const n = document.createElement("div");
      n.style.cssText = "position:fixed;bottom:20px;left:50%;transform:translateX(-50%);background:var(--cad-bg);color:var(--cad-text);border:2px solid var(--cad-heading);border-radius:8px;padding:10px 16px;z-index:10000;font-family:monospace;font-size:13px;display:flex;gap:12px;align-items:center;box-shadow:0 4px 20px var(--cad-shadow);", n.innerHTML = `
      <span style="color:var(--cad-heading);font-weight:bold;">${xt.size} elem.</span>
      <button id="sel-assign" style="padding:5px 8px;background:#336699;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:12px;" title="Asignar secci\xF3n">\u{1F4D0}</button>
      <button id="sel-info" style="padding:5px 8px;background:#225588;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:12px;" title="Info del elemento">\u{1F50D}</button>
      <button id="sel-hide" style="padding:5px 8px;background:#665500;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:12px;" title="Ocultar seleccionados">\u{1F441}\u200D\u{1F5E8}</button>
      <button id="sel-isolate" style="padding:5px 8px;background:#006633;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:12px;" title="Aislar (mostrar solo seleccionados)">\u25CE</button>
      <button id="sel-showall" style="padding:5px 8px;background:#444;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:12px;" title="Mostrar todo">\u21BA</button>
      <button id="sel-delete" style="padding:5px 8px;background:#cc3333;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:12px;" title="Eliminar seleccionados">\u{1F5D1}</button>
      <button id="sel-clear" style="padding:5px 8px;background:#555;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:12px;" title="Limpiar selecci\xF3n">\u2715</button>
    `, document.body.appendChild(n), un = n, n.querySelector("#sel-assign").addEventListener("click", () => {
        Ya([
          ...xt
        ]);
      }), n.querySelector("#sel-info").addEventListener("click", () => {
        if (xt.size === 1) {
          const o = [
            ...xt
          ][0];
          _s(o);
        } else {
          const o = [
            ...xt
          ], l = e.nodes.val, s = e.elements.val;
          let d = 0, a = 0, r = 0, f = 0;
          o.forEach((c) => {
            const b = s[c];
            if (b) if (b.length === 2) {
              const w = l[b[0]], E = l[b[1]], $ = Math.abs(E[0] - w[0]), p = Math.abs(E[1] - w[1]), x = Math.abs(E[2] - w[2]);
              x > $ && x > p ? d++ : a++;
            } else b.length === 3 ? r++ : b.length === 4 && f++;
          });
          const i = [];
          d && i.push(`${d} columnas`), a && i.push(`${a} vigas`), f && i.push(`${f} shells Q4`), r && i.push(`${r} triangulos`), alert(`${o.length} elementos seleccionados:
${i.join(", ")}`);
        }
      }), n.querySelector("#sel-hide").addEventListener("click", () => {
        xt.forEach((o) => J.add(o)), xt.clear(), En(), Sn(), Pe();
      }), n.querySelector("#sel-isolate").addEventListener("click", () => {
        j = true, W.clear(), xt.forEach((o) => W.add(o)), xt.clear(), En(), Sn(), Pe();
      }), n.querySelector("#sel-showall").addEventListener("click", () => {
        J.clear(), j = false, W.clear(), Sn(), Pe();
      }), n.querySelector("#sel-delete").addEventListener("click", () => {
        Dn(), xt.forEach((o) => X.add(o)), xt.clear(), En(), Sn(), Pe();
      }), n.querySelector("#sel-clear").addEventListener("click", () => {
        xt.clear(), En(), Sn();
      });
    }
    function io() {
      var _a2;
      Jt = false, xt.clear(), En(), un && (un.remove(), un = null), (_a2 = Le.querySelector("#cad3d-select")) == null ? void 0 : _a2.classList.remove("inspect-active");
      const n = Qe();
      n && (n.controls.enabled = true);
    }
    function Ln() {
      if (Vt) {
        const t = Qe();
        t == null ? void 0 : t.scene.remove(Vt), Vt.geometry.dispose(), Vt.material.dispose(), Vt = null, t == null ? void 0 : t.render();
      }
      Zt && (Zt.remove(), Zt = null);
    }
    function Aa(t) {
      jo();
      const n = Qe();
      if (!n) return;
      const o = e.nodes.val[t];
      if (!o) return;
      An = t;
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
        const r = new Float32Array([
          o[0] - d[0] * l,
          o[1] - d[1] * l,
          o[2] - d[2] * l,
          o[0] + d[0] * l,
          o[1] + d[1] * l,
          o[2] + d[2] * l
        ]), f = new nn();
        f.setAttribute("position", new vo(r, 3));
        const i = new Gn({
          color: a,
          dashSize: 0.3,
          gapSize: 0.15,
          transparent: true,
          opacity: 0.4,
          depthTest: false
        }), c = new Yn(f, i);
        c.computeLineDistances(), c.renderOrder = 9990, n.scene.add(c), Do.push(c);
      }
      n.render();
    }
    function jo() {
      const t = Qe();
      for (const n of Do) t == null ? void 0 : t.scene.remove(n), n.geometry.dispose(), n.material.dispose();
      Do = [], An = null, en && (en.remove(), en = null);
    }
    function Fs(t, n, o, l) {
      en || (en = document.createElement("div"), en.style.cssText = "position:fixed;pointer-events:none;z-index:10002;background:var(--cad-bg);color:var(--cad-heading);font-family:monospace;font-size:11px;padding:2px 6px;border-radius:3px;white-space:nowrap;border:1px solid var(--cad-border);", document.body.appendChild(en));
      const s = l.x - o.x, d = l.y - o.y, a = l.z - o.z, r = Math.sqrt(s * s + d * d + a * a), f = Math.abs(s), i = Math.abs(d), c = Math.abs(a);
      let b = "";
      f > i && f > c ? b = `\u0394X=${s.toFixed(2)}` : i > f && i > c ? b = `\u0394Y=${d.toFixed(2)}` : c > 0.01 && (b = `\u0394Z=${a.toFixed(2)}`), en.textContent = `${r.toFixed(3)} m  ${b}`, en.style.left = t + 20 + "px", en.style.top = n - 10 + "px";
    }
    function La(t, n) {
      const l = e.nodes.val[n];
      if (!l) return null;
      const s = new Ne(l[0], l[1], l[2]), d = t.clone(), a = d.clone().sub(s), r = 0.3, f = Math.abs(a.x), i = Math.abs(a.y), c = Math.abs(a.z);
      return i < r && c < r && f > 0.01 ? new Ne(d.x, s.y, s.z) : f < r && c < r && i > 0.01 ? new Ne(s.x, d.y, s.z) : f < r && i < r && c > 0.01 ? new Ne(s.x, s.y, d.z) : null;
    }
    function co() {
      var _a2;
      const t = Qe();
      qt && t && (t.scene.remove(qt), qt.geometry.dispose(), qt.material.dispose(), qt = null), _t && t && (t.scene.remove(_t), _t.geometry.dispose(), _t.material.dispose(), _t = null), jo(), yt = null, Qt = null, fn = false, _n && (_n.remove(), _n = null), (_a2 = Le.querySelector("#cad3d-draw")) == null ? void 0 : _a2.classList.remove("inspect-active"), t == null ? void 0 : t.render();
    }
    function Ca() {
      _n && _n.remove();
      const t = document.createElement("div");
      t.style.cssText = "position:fixed;bottom:60px;left:50%;transform:translateX(-50%);background:var(--cad-bg);border:1px solid var(--cad-border);border-radius:6px;padding:6px 10px;z-index:10000;display:flex;gap:6px;align-items:center;font-family:monospace;font-size:11px;box-shadow:0 2px 10px var(--cad-shadow);";
      const n = (s) => `padding:4px 10px;border:1px solid ${s ? "#00ccff" : "#555"};background:${s ? "#003355" : "#333"};color:${s ? "#00ccff" : "#ccc"};border-radius:3px;cursor:pointer;font-size:11px;font-family:monospace;`, o = (s) => `padding:3px 6px;border:1px solid ${s ? "#33ff33" : "#444"};background:${s ? "#113311" : "#222"};color:${s ? "#33ff33" : "#888"};border-radius:3px;cursor:pointer;font-size:10px;`;
      t.innerHTML = `
      <span style="color:#00ccff;font-weight:bold;margin-right:4px;">Draw:</span>
      <button id="dt-line" style="${n(Wt === "line")}">\u{1F4CF} Line</button>
      <button id="dt-arc" style="${n(Wt === "arc")}">\u2312 Arc</button>
      <button id="dt-node" style="${n(Wt === "node")}">\u2295 Node</button>
      <button id="dt-area" style="${n(Wt === "area")}">\u25A2 Area</button>
      <span style="color:#666;margin:0 4px;">|</span>
      <span style="color:#888;font-size:10px;">Snap:</span>
      <button id="ds-node" style="${o(St.node)}">Node</button>
      <button id="ds-grid" style="${o(St.grid)}">Grid</button>
      <button id="ds-mid" style="${o(St.midpoint)}">Mid</button>
      <button id="ds-track" style="${o(St.track)}">Prolong</button>
      <span style="color:#666;margin:0 4px;">|</span>
      <span style="color:#888;font-size:10px;">Grid:</span>
      <input id="ds-gridsize" type="number" value="${Bo}" step="0.1" min="0.1" max="10" style="width:45px;background:#333;color:#fff;border:1px solid #555;padding:2px;font-size:10px;">
      <span style="color:#888;font-size:10px;">m</span>
      <span style="color:#666;margin:0 4px;">|</span>
      <button id="dt-undo" style="padding:3px 6px;background:#444;color:#ccc;border:1px solid #555;border-radius:3px;cursor:pointer;font-size:10px;" title="Ctrl+Z">\u21A9 Undo</button>
      <button id="dt-redo" style="padding:3px 6px;background:#444;color:#ccc;border:1px solid #555;border-radius:3px;cursor:pointer;font-size:10px;" title="Ctrl+Y">\u21AA Redo</button>
    `, document.body.appendChild(t), _n = t;
      const l = () => {
        const s = t.querySelector("#dt-line"), d = t.querySelector("#dt-arc"), a = t.querySelector("#dt-node"), r = t.querySelector("#dt-area");
        s && (s.style.cssText = n(Wt === "line")), d && (d.style.cssText = n(Wt === "arc")), a && (a.style.cssText = n(Wt === "node")), r && (r.style.cssText = n(Wt === "area"));
        const f = t.querySelector("#ds-node"), i = t.querySelector("#ds-grid"), c = t.querySelector("#ds-mid"), b = t.querySelector("#ds-track");
        f && (f.style.cssText = o(St.node)), i && (i.style.cssText = o(St.grid)), c && (c.style.cssText = o(St.midpoint)), b && (b.style.cssText = o(St.track));
      };
      t.querySelector("#dt-line").addEventListener("click", () => {
        Wt = "line", yt = null, Qt = null, Kt = [], l();
      }), t.querySelector("#dt-arc").addEventListener("click", () => {
        Wt = "arc", yt = null, Qt = null, Kt = [], l();
      }), t.querySelector("#dt-node").addEventListener("click", () => {
        Wt = "node", yt = null, Qt = null, Kt = [], l();
      }), t.querySelector("#dt-area").addEventListener("click", () => {
        Wt = "area", yt = null, Qt = null, Kt = [], console.log("Area mode: click vertices del poligono. Doble-click o click cerca del 1er punto para cerrar."), l();
      }), t.querySelector("#ds-node").addEventListener("click", () => {
        St.node = !St.node, l();
      }), t.querySelector("#ds-grid").addEventListener("click", () => {
        St.grid = !St.grid, l();
      }), t.querySelector("#ds-mid").addEventListener("click", () => {
        St.midpoint = !St.midpoint, l();
      }), t.querySelector("#ds-track").addEventListener("click", () => {
        St.track = !St.track, St.track || jo(), l();
      }), t.querySelector("#ds-gridsize").addEventListener("change", (s) => {
        St.gridSize = parseFloat(s.target.value) || 0.5;
      }), t.querySelector("#dt-undo").addEventListener("click", () => Ls()), t.querySelector("#dt-redo").addEventListener("click", () => Cs());
    }
    function Rs(t, n, o, l) {
      const s = l.getBoundingClientRect(), d = (t - s.left) / s.width * 2 - 1, a = -((n - s.top) / s.height) * 2 + 1, r = new sa();
      r.setFromCamera(new aa(d, a), o);
      const f = e.nodes.val, i = e.elements.val, c = 0.12;
      if (St.node) {
        let E = -1, $ = 1 / 0;
        for (let p = 0; p < f.length; p++) {
          const x = f[p], T = new Ne(x[0], x[1], x[2]).project(o), L = Math.sqrt((T.x - d) ** 2 + (T.y - a) ** 2);
          L < c && L < $ && ($ = L, E = p);
        }
        if (E >= 0) return {
          nodeIdx: E,
          worldPos: new Ne(...f[E]),
          snapType: "node"
        };
      }
      if (St.midpoint) {
        let E = 1 / 0, $ = null;
        for (const p of i) {
          if (p.length !== 2) continue;
          const x = f[p[0]], T = f[p[1]], L = new Ne((x[0] + T[0]) / 2, (x[1] + T[1]) / 2, (x[2] + T[2]) / 2), k = L.clone().project(o), z = Math.sqrt((k.x - d) ** 2 + (k.y - a) ** 2);
          z < c * 0.8 && z < E && (E = z, $ = L);
        }
        if ($) return {
          nodeIdx: null,
          worldPos: $,
          snapType: "mid"
        };
      }
      if (St.grid) {
        const E = new kn(new Ne(0, 0, 1), 0), $ = new Ne();
        if (r.ray.intersectPlane(E, $)) {
          const p = St.gridSize || Bo;
          return $.x = Math.round($.x / p) * p, $.y = Math.round($.y / p) * p, $.z = Math.round($.z / p) * p, {
            nodeIdx: null,
            worldPos: $,
            snapType: "grid"
          };
        }
      }
      const b = new kn(new Ne(0, 0, 1), 0), w = new Ne();
      return r.ray.intersectPlane(b, w), {
        nodeIdx: null,
        worldPos: w,
        snapType: "free"
      };
    }
    function Ps(t) {
      const n = Qe();
      if (!n) return;
      const o = e.nodes.val;
      if (_t && (n.scene.remove(_t), _t.geometry.dispose(), _t.material.dispose(), _t = null), t.worldPos) {
        const l = t.snapType === "node" ? 16776960 : t.snapType === "mid" ? 16711935 : t.snapType === "grid" ? 65535 : 8947848, s = t.snapType === "node" ? 0.08 : 0.06, d = t.snapType === "mid" ? new ol(s * 2, s * 2, s * 2) : new sl(s, 12, 12), a = new al({
          color: l,
          transparent: true,
          opacity: 0.8,
          depthTest: false
        });
        _t = new da(d, a), _t.position.copy(t.worldPos), _t.renderOrder = 9999, n.scene.add(_t);
      }
      if (qt && (n.scene.remove(qt), qt.geometry.dispose(), qt.material.dispose(), qt = null), yt !== null && t.worldPos) {
        const l = o[yt], s = new nn();
        if (Wt === "arc" && Qt !== null) {
          const a = o[Qt], r = Os(new Ne(l[0], l[1], l[2]), new Ne(a[0], a[1], a[2]), t.worldPos, 16), f = [];
          for (let i = 0; i < r.length - 1; i++) f.push(r[i].x, r[i].y, r[i].z, r[i + 1].x, r[i + 1].y, r[i + 1].z);
          s.setAttribute("position", new Cn(f, 3));
        } else s.setAttribute("position", new Cn([
          l[0],
          l[1],
          l[2],
          t.worldPos.x,
          t.worldPos.y,
          t.worldPos.z
        ], 3));
        const d = new Jn({
          color: 65280,
          linewidth: 2,
          depthTest: false
        });
        qt = new Fn(s, d), Wt === "arc" && Qt !== null && (qt = new Yn(s, d)), qt.renderOrder = 9999, n.scene.add(qt);
      }
      n.render();
    }
    function Os(t, n, o, l) {
      const s = [];
      for (let d = 0; d <= l; d++) {
        const a = d / l, r = n.clone().multiplyScalar(2).sub(t.clone().multiplyScalar(0.5)).sub(o.clone().multiplyScalar(0.5)), f = (1 - a) * (1 - a), i = 2 * (1 - a) * a, c = a * a;
        s.push(new Ne(f * t.x + i * r.x + c * o.x, f * t.y + i * r.y + c * o.y, f * t.z + i * r.z + c * o.z));
      }
      return s;
    }
    function Wo(t) {
      if (t.nodeIdx !== null) return t.nodeIdx;
      if (!t.worldPos) return -1;
      const n = e.nodes.val, o = 1e-3;
      for (let s = 0; s < n.length; s++) if (Math.abs(n[s][0] - t.worldPos.x) < o && Math.abs(n[s][1] - t.worldPos.y) < o && Math.abs(n[s][2] - t.worldPos.z) < o) return s;
      Dn();
      const l = [
        ...n,
        [
          t.worldPos.x,
          t.worldPos.y,
          t.worldPos.z
        ]
      ];
      return e.nodes.val = l, l.length - 1;
    }
    function Fa(t) {
      var _a2;
      if (Wt === "node") {
        if (!t.worldPos) return;
        Dn();
        const n = [
          ...e.nodes.val
        ];
        n.push([
          t.worldPos.x,
          t.worldPos.y,
          t.worldPos.z
        ]), e.nodes.val = n;
        return;
      }
      if (Wt === "line") {
        const n = Wo(t);
        if (n < 0) return;
        if (yt === null) {
          yt = n;
          return;
        }
        if (n === yt) return;
        Dn();
        const o = [
          ...e.elements.val
        ];
        o.some((s) => s.length === 2 && (s[0] === yt && s[1] === n || s[1] === yt && s[0] === n)) || (o.push([
          yt,
          n
        ]), e.elements.val = o, yn(), e.elementInputs.val = {
          ...e.elementInputs.val
        }), yt = n;
        return;
      }
      if (Wt === "arc") {
        const n = Wo(t);
        if (n < 0) return;
        if (yt === null) {
          yt = n;
          return;
        }
        if (Qt === null) {
          if (n === yt) return;
          Qt = n;
          return;
        }
        if (n === yt || n === Qt) return;
        const o = e.nodes.val, l = new Ne(...o[yt]), s = new Ne(...o[Qt]), d = new Ne(...o[n]), a = Math.max(4, Math.round(((_a2 = Q.nSubViga) == null ? void 0 : _a2.val) ?? 8)), r = Os(l, s, d, a);
        Dn();
        const f = [
          ...e.nodes.val
        ], i = [
          ...e.elements.val
        ];
        let c = yt;
        for (let b = 1; b < r.length; b++) {
          let w;
          if (b === r.length - 1) w = n;
          else {
            const E = r[b];
            w = f.length, f.push([
              E.x,
              E.y,
              E.z
            ]);
          }
          i.push([
            c,
            w
          ]), c = w;
        }
        e.nodes.val = f, e.elements.val = i, yn(), e.elementInputs.val = {
          ...e.elementInputs.val
        }, yt = n, Qt = null;
        return;
      }
      if (Wt === "area") {
        const n = Wo(t);
        if (n < 0) return;
        if (Kt.length >= 3 && n === Kt[0]) {
          Dn();
          const o = [
            ...e.nodes.val
          ], l = [
            ...e.elements.val
          ], s = Kt.map((d) => o[d]);
          try {
            const d = xn({
              points: s,
              polygon: Array.from({
                length: s.length
              }, (r, f) => f),
              maxMeshSize: Bo || 0.5
            }), a = [];
            for (const r of d.nodes) {
              let f = -1;
              for (let i = 0; i < o.length; i++) {
                const c = Math.abs(o[i][0] - r[0]), b = Math.abs(o[i][1] - r[1]), w = Math.abs(o[i][2] - r[2]);
                if (c < 0.01 && b < 0.01 && w < 0.01) {
                  f = i;
                  break;
                }
              }
              f >= 0 ? a.push(f) : (a.push(o.length), o.push([
                r[0],
                r[1],
                r[2]
              ]));
            }
            for (const r of d.elements) l.push([
              a[r[0]],
              a[r[1]],
              a[r[2]]
            ]);
            e.nodes.val = o, e.elements.val = l, yn(), console.log(`Area: ${d.elements.length} triangulos creados desde ${Kt.length} vertices`);
          } catch (d) {
            console.error("Area mesh failed:", d.message);
          }
          Kt = [];
          return;
        }
        if (Kt.push(n), console.log(`Area vertex ${Kt.length}: node ${n}`), Kt.length >= 2) {
          const o = Kt[Kt.length - 2], l = e.nodes.val, s = Qe();
          if (s) {
            const d = new nn().setFromPoints([
              new Ne(...l[o]),
              new Ne(...l[n])
            ]), a = new Yn(d, new Jn({
              color: 65280,
              linewidth: 2
            }));
            a.name = "area-preview", s.scene.add(a), s.render();
          }
        }
        return;
      }
    }
    function Ns(t) {
      const n = Qe();
      if (!n) return;
      Vt && (n.scene.remove(Vt), Vt.geometry.dispose(), Vt.material.dispose());
      const o = e.nodes.val, l = e.elements.val[t];
      if (!l) return;
      const s = [];
      for (let a = 0; a < l.length; a++) {
        const r = o[l[a]], f = o[l[(a + 1) % l.length]];
        s.push(r[0], r[1], r[2], f[0], f[1], f[2]);
      }
      const d = new nn();
      d.setAttribute("position", new Cn(s, 3)), Vt = new Yn(d, new Jn({
        color: 16776960,
        linewidth: 3,
        depthTest: false
      })), Vt.renderOrder = 9999, n.scene.add(Vt), n.render();
    }
    function Go(t) {
      const n = Qe();
      if (!n) return -1;
      const o = n.renderer.domElement.getBoundingClientRect(), l = new aa((t.clientX - o.left) / o.width * 2 - 1, -((t.clientY - o.top) / o.height) * 2 + 1), s = new sa();
      s.setFromCamera(l, n.controls.object), s.params.Line = {
        threshold: 0.5
      };
      const d = e.nodes.val, a = e.elements.val;
      if (d.length === 0 || a.length === 0) return -1;
      let r = 1 / 0, f = -1;
      const i = s.ray;
      for (let b = 0; b < a.length; b++) {
        const w = a[b];
        if (w.length === 2) {
          const E = new Ne(...d[w[0]]), $ = new Ne(...d[w[1]]), p = new ll(E, $), x = new Ne(), T = new Ne();
          i.closestPointToPoint(p.getCenter(new Ne()), x), p.closestPointToPoint(x, true, T);
          const L = x.distanceTo(T);
          L < r && (r = L, f = b);
        } else if (w.length === 3) {
          const E = new Ne(...d[w[0]]), $ = new Ne(...d[w[1]]), p = new Ne(...d[w[2]]), x = new Ne();
          if (i.intersectTriangle(E, $, p, false, x)) {
            const L = i.origin.distanceTo(x);
            L < r && (r = L, f = b);
          } else {
            const L = E.add($).add(p).divideScalar(3), k = new Ne();
            i.closestPointToPoint(L, k);
            const z = k.distanceTo(L);
            z < r && (r = z, f = b);
          }
        } else if (w.length === 4) {
          const E = new Ne(...d[w[0]]), $ = new Ne(...d[w[1]]), p = new Ne(...d[w[2]]), x = new Ne(...d[w[3]]), T = new Ne();
          let L = i.intersectTriangle(E, $, p, false, T);
          if (L) {
            const k = i.origin.distanceTo(T);
            k < r && (r = k, f = b);
          }
          if (L = i.intersectTriangle(E, p, x, false, T), L) {
            const k = i.origin.distanceTo(T);
            k < r && (r = k, f = b);
          }
        }
      }
      const { extent: c } = $n();
      return r < c * 0.1 ? f : -1;
    }
    function we(t, n = 4) {
      return Math.abs(t) < 1e-10 ? "0" : Math.abs(t) >= 1e6 ? t.toExponential(2) : Math.abs(t) >= 100 ? t.toFixed(1) : t.toFixed(n);
    }
    function Yo(t, n, o = 12) {
      var _a2;
      const l = Math.min(t.length, o), s = Math.min(((_a2 = t[0]) == null ? void 0 : _a2.length) || 0, o);
      let d = "<table>";
      if (n) {
        d += '<tr><td class="header"></td>';
        for (let a = 0; a < s; a++) d += `<td class="header">${n[a] || a}</td>`;
        d += "</tr>";
      }
      for (let a = 0; a < l; a++) {
        d += "<tr>", n && (d += `<td class="header">${n[a] || a}</td>`);
        for (let r = 0; r < s; r++) {
          const f = t[a][r], i = Math.abs(f) > 1e-10 ? "nonzero" : "";
          d += `<td class="${i}">${we(f, 2)}</td>`;
        }
        d += "</tr>";
      }
      return d += "</table>", d;
    }
    function De(t, n) {
      return `<span class="frac"><span class="frac-num">${t}</span><span class="frac-den">${n}</span></span>`;
    }
    function C(t, n, o) {
      let l = `<span class="var">${t}</span>`;
      return n && (l += `<sub>${n}</sub>`), l;
    }
    function Ra(t, n, o, l, s, d, a) {
      const r = 0.8333333333333334 * n, f = 5 / 6 * n, i = f > 0 && s > 0 ? 12 * t * o / (s * f * a ** 2) : 0, c = r > 0 && s > 0 ? 12 * t * l / (s * r * a ** 2) : 0, b = t * n / a, w = s * d / a, E = 12 * t * o / a ** 3 / (1 + i), $ = 6 * t * o / a ** 2 / (1 + i), p = 4 * t * o / a * (1 + i / 4) / (1 + i), x = 2 * t * o / a * (1 - i / 2) / (1 + i), T = i > 1e-10 || c > 1e-10;
      return `<div class="fem-eq eq-box">
      <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">Formulaci\xF3n: ${T ? "Timoshenko (con deformaci\xF3n por cortante)" : "Euler-Bernoulli"}</strong></div>
      ${T ? `
      <div style="text-align:left;margin-bottom:6px;color:var(--fem-eq-sub)">
        ${C("A", "s")} = ${De("5", "6")} \xB7 ${C("A")} = <span class="highlight">${we(r)}</span>
        &nbsp;&nbsp; \u03C6<sub>z</sub> = ${De("12\xB7" + C("E") + "\xB7" + C("I", "z"), C("G") + "\xB7" + C("A", "s") + "\xB7" + C("L") + "\xB2")} = <span class="highlight">${we(i)}</span>
        &nbsp;&nbsp; \u03C6<sub>y</sub> = <span class="highlight">${we(c)}</span>
      </div>
      <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">Coeficientes Timoshenko (Dr. Aguiar):</strong></div>
      <div>${C("t", "z")} = ${De("12\xB7" + C("E") + "\xB7" + C("I", "z"), C("L") + "\xB3\xB7(1+\u03C6<sub>z</sub>)")} = <span class="highlight">${we(E)}</span> &nbsp;(cortante)</div>
      <div>${C("b", "z")} = ${De("6\xB7" + C("E") + "\xB7" + C("I", "z"), C("L") + "\xB2\xB7(1+\u03C6<sub>z</sub>)")} = <span class="highlight">${we($)}</span> &nbsp;(acoplamiento)</div>
      <div>${C("k", "z")} = ${De("4\xB7" + C("E") + "\xB7" + C("I", "z") + "\xB7(1+\u03C6/4)", C("L") + "\xB7(1+\u03C6<sub>z</sub>)")} = <span class="highlight">${we(p)}</span> &nbsp;(flexi\xF3n diagonal)</div>
      <div>${C("a", "z")} = ${De("2\xB7" + C("E") + "\xB7" + C("I", "z") + "\xB7(1\u2212\u03C6/2)", C("L") + "\xB7(1+\u03C6<sub>z</sub>)")} = <span class="highlight">${we(x)}</span> &nbsp;(flexi\xF3n off-diag)</div>
      ` : `
      <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">Coeficientes de rigidez:</strong></div>
      `}
      <div>${De(C("E") + "\xB7" + C("A"), C("L"))} = <span class="highlight">${we(b)}</span> &nbsp;(axial)</div>
      <div>${De(C("G") + "\xB7" + C("J"), C("L"))} = <span class="highlight">${we(w)}</span> &nbsp;(torsi\xF3n)</div>
      ${T ? "" : `
      <div>${De("12\xB7" + C("E") + "\xB7" + C("I", "z"), C("L") + "\xB3")} = <span class="highlight">${we(E)}</span></div>
      <div>${De("4\xB7" + C("E") + "\xB7" + C("I", "z"), C("L"))} = <span class="highlight">${we(p)}</span></div>
      `}
    </div>
    <div class="fem-eq">
      ${C("k", "local")} = <span class="mat-sym" style="grid-template-columns:repeat(4,auto)">
        <span class="cell">${De(C("EA"), C("L"))}</span><span class="cell">0</span><span class="cell dots">\u22EF</span><span class="cell">${De("\u2212" + C("EA"), C("L"))}</span>
        <span class="cell">0</span><span class="cell">${C("t", "z")}</span><span class="cell dots">\u22EF</span><span class="cell">${C("b", "z")}</span>
        <span class="cell dots">\u22EE</span><span class="cell dots">\u22EE</span><span class="cell dots">\u22F1</span><span class="cell dots">\u22EE</span>
        <span class="cell">0</span><span class="cell">${C("b", "z")}</span><span class="cell dots">\u22EF</span><span class="cell">${C("k", "z")}</span>
      </span>
      <sub style="color:var(--fem-label)">12\xD712 ${T ? "(Timoshenko)" : "(Euler-Bernoulli)"}</sub>
    </div>
    ${T ? `<div class="fem-eq eq-box" style="margin-top:6px">
      <div style="text-align:left"><strong style="color:var(--fem-section-title)">Matrices de rigidez (Dr. Aguiar, Fig 7.9):</strong></div>
      <div style="margin-top:4px">${C("K", "f")} = ${C("B", "f")}<sup>T</sup> \xB7 ${C("E")}\xB7${C("I")} \xB7 ${C("B", "f")} \xB7 ${C("J")} &nbsp;<sub style="color:var(--fem-label)">(flexi\xF3n, 1 pt Gauss)</sub></div>
      <div>${C("K", "c")} = ${C("B", "c")}<sup>T</sup> \xB7 ${C("G")}\xB7${C("A'")} \xB7 ${C("B", "c")} \xB7 ${C("J")} &nbsp;<sub style="color:var(--fem-label)">(cortante, 2 pts Gauss)</sub></div>
      <div>${C("K", "total")} = ${C("K", "f")} + ${C("K", "c")}</div>
    </div>` : ""}`;
    }
    function Pa(t) {
      if (t.length === 2) {
        const o = vn(t[1], t[0]), l = On(o), s = o[0] / l, d = o[1] / l, a = o[2] / l;
        return `<div class="fem-eq eq-box">
        <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">Cosenos directores:</strong></div>
        <div>${C("l")} = cos(\u03B1) = ${De("\u0394x", C("L"))} = ${De(we(o[0]), we(l))} = <span class="highlight">${we(s)}</span></div>
        <div>${C("m")} = cos(\u03B2) = ${De("\u0394y", C("L"))} = ${De(we(o[1]), we(l))} = <span class="highlight">${we(d)}</span></div>
        <div>${C("n")} = cos(\u03B3) = ${De("\u0394z", C("L"))} = ${De(we(o[2]), we(l))} = <span class="highlight">${we(a)}</span></div>
      </div>
      <div class="fem-eq">
        \u03BB = <span class="mat-sym" style="grid-template-columns:repeat(3,auto)">
          <span class="cell">${C("l")}</span><span class="cell">${C("m")}</span><span class="cell">${C("n")}</span>
          <span class="cell">${De("\u2212" + C("m"), C("D"))}</span><span class="cell">${De(C("l"), C("D"))}</span><span class="cell">0</span>
          <span class="cell">${De("\u2212" + C("l") + "\xB7" + C("n"), C("D"))}</span><span class="cell">${De("\u2212" + C("m") + "\xB7" + C("n"), C("D"))}</span><span class="cell">${C("D")}</span>
        </span>
        &nbsp; donde ${C("D")} = \u221A(${C("l")}\xB2 + ${C("m")}\xB2)
      </div>
      <div class="fem-eq">
        ${C("T")} = ${C("I", "4")} \u2297 \u03BB &nbsp; <sub style="color:var(--fem-label)">(Kronecker, 12\xD712)</sub>
      </div>`;
      }
      return `<div class="fem-eq">${C("T")} \u2014 sistema local del tri\xE1ngulo (normal \xD7 lados) <sub>18\xD718</sub></div>`;
    }
    function Oa() {
      return `<div class="fem-eq">
      ${C("K", "global")} = ${C("T")}<sup>T</sup> \xB7 ${C("k", "local")} \xB7 ${C("T")}
    </div>`;
    }
    function Na(t) {
      const n = t.map((o) => `6\xB7${o} = ${6 * o}`).join(", ");
      return `<div class="fem-eq eq-box">
      <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">Ensamblaje en K global:</strong></div>
      <div>${C("K", "global")}[${C("i")}, ${C("j")}] += ${C("K", "elem")}[${C("i")}, ${C("j")}]</div>
      <div style="margin-top:4px">donde ${C("i")}, ${C("j")} \u2208 {${n}} + (0..5)</div>
    </div>`;
    }
    function qa(t) {
      return t ? `<div class="fem-eq eq-box">
        <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">Recuperaci\xF3n de fuerzas:</strong></div>
        <div>${C("u", "local")} = ${C("T")} \xB7 ${C("u", "global")}</div>
        <div>${C("f", "local")} = ${C("k", "local")} \xB7 ${C("u", "local")}</div>
        <div style="margin-top:4px;color:var(--fem-eq-sub)">
          ${C("f")} = [${C("N", "i")}, ${C("V", "y,i")}, ${C("V", "z,i")}, ${C("M", "x,i")}, ${C("M", "y,i")}, ${C("M", "z,i")}, ${C("N", "j")}, \u2026]
        </div>
      </div>` : `<div class="fem-eq eq-box">
      <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">Esfuerzos en placa:</strong></div>
      <div>\u03C3 = ${De("1", "2" + C("A"))} \xB7 ${C("D")} \xB7 ${C("B")} \xB7 ${C("u")}</div>
      <div>${C("N", "xx")} = \u03C3<sub>xx</sub> \xB7 ${C("t")} &nbsp;&nbsp; ${C("M", "xx")} = \u03C3<sub>xx</sub> \xB7 ${De(C("t") + "\xB3", "12")}</div>
    </div>`;
    }
    function Jo(t, n) {
      const o = t.length;
      let l = '<table><tr><td class="hdr"></td>';
      for (let s = 0; s < o; s++) l += `<td class="hdr">${n[s] || s}</td>`;
      l += "</tr>";
      for (let s = 0; s < o; s++) {
        l += `<tr><td class="hdr">${n[s] || s}</td>`;
        for (let d = 0; d < o; d++) {
          const a = t[s][d], r = (s === d ? "diag " : "") + (Math.abs(a) > 1e-10 ? "nz" : "");
          l += `<td class="${r}">${we(a, 2)}</td>`;
        }
        l += "</tr>";
      }
      return l += "</table>", l;
    }
    function qs() {
      const t = "0", n = De(C("EA"), C("L")), o = De("\u2212" + C("EA"), C("L")), l = De("12" + C("EI", "z"), C("L") + "\xB3"), s = De("\u221212" + C("EI", "z"), C("L") + "\xB3"), d = De("12" + C("EI", "y"), C("L") + "\xB3"), a = De("\u221212" + C("EI", "y"), C("L") + "\xB3"), r = De("6" + C("EI", "z"), C("L") + "\xB2"), f = De("\u22126" + C("EI", "z"), C("L") + "\xB2"), i = De("6" + C("EI", "y"), C("L") + "\xB2"), c = De("\u22126" + C("EI", "y"), C("L") + "\xB2"), b = De(C("GJ"), C("L")), w = De("\u2212" + C("GJ"), C("L")), E = De("4" + C("EI", "z"), C("L")), $ = De("2" + C("EI", "z"), C("L")), p = De("4" + C("EI", "y"), C("L")), x = De("2" + C("EI", "y"), C("L")), T = '<span style="color:var(--fem-eq-dots);font-style:italic">sym</span>', L = [
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
      ], z = [
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
          l,
          t,
          t,
          t,
          r,
          t,
          s,
          t,
          t,
          t,
          r
        ],
        [
          t,
          t,
          d,
          t,
          c,
          t,
          t,
          t,
          a,
          t,
          c,
          t
        ],
        [
          t,
          t,
          t,
          b,
          t,
          t,
          t,
          t,
          t,
          w,
          t,
          t
        ],
        [
          t,
          t,
          c,
          t,
          p,
          t,
          t,
          t,
          i,
          t,
          x,
          t
        ],
        [
          t,
          r,
          t,
          t,
          t,
          E,
          t,
          f,
          t,
          t,
          t,
          $
        ],
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
          s,
          t,
          t,
          t,
          f,
          t,
          l,
          t,
          t,
          t,
          f
        ],
        [
          t,
          t,
          a,
          t,
          i,
          t,
          t,
          t,
          d,
          t,
          i,
          t
        ],
        [
          t,
          t,
          t,
          w,
          t,
          t,
          t,
          t,
          t,
          b,
          t,
          t
        ],
        [
          t,
          t,
          c,
          t,
          x,
          t,
          t,
          t,
          i,
          t,
          p,
          t
        ],
        [
          t,
          r,
          t,
          t,
          t,
          $,
          t,
          f,
          t,
          t,
          t,
          E
        ]
      ];
      let P = '<div style="margin-bottom:8px;color:var(--fem-eq-sub);font-size:11px;font-family:monospace">Eq. 6.1 \u2014 Matriz de rigidez de elemento de p\xF3rtico espacial</div>';
      P += '<table><tr><td class="hdr"></td>';
      for (const v of k) P += `<td class="hdr">${v}</td>`;
      P += "</tr>";
      for (let v = 0; v < 12; v++) {
        P += `<tr><td class="hdr">${L[v]}</td>`;
        for (let m = 0; m < 12; m++) if (m < v) P += `<td style="color:var(--fem-border-cell)">${m === 0 && v > 0 ? T : ""}</td>`;
        else {
          const I = z[v][m], F = (v === m ? "diag " : "") + (I !== "0" ? "nz" : "");
          P += `<td class="${F}">${I}</td>`;
        }
        P += "</tr>";
      }
      return P += "</table>", P;
    }
    function _a(t, n, o, l, s, d, a) {
      return `<div class="coeff-grid">${[
        {
          name: `${De(C("E") + "\xB7" + C("A"), C("L"))}`,
          calc: `${De(we(t) + "\xD7" + we(n), we(a))}`,
          val: t * n / a,
          label: "Axial"
        },
        {
          name: `${De("12\xB7" + C("E") + "\xB7" + C("I", "z"), C("L") + "\xB3")}`,
          calc: `${De("12\xD7" + we(t) + "\xD7" + we(o), we(a) + "\xB3")}`,
          val: 12 * t * o / a ** 3,
          label: "Corte Y"
        },
        {
          name: `${De("6\xB7" + C("E") + "\xB7" + C("I", "z"), C("L") + "\xB2")}`,
          calc: `${De("6\xD7" + we(t) + "\xD7" + we(o), we(a) + "\xB2")}`,
          val: 6 * t * o / a ** 2,
          label: "Corte-Momento Z"
        },
        {
          name: `${De("12\xB7" + C("E") + "\xB7" + C("I", "y"), C("L") + "\xB3")}`,
          calc: `${De("12\xD7" + we(t) + "\xD7" + we(l), we(a) + "\xB3")}`,
          val: 12 * t * l / a ** 3,
          label: "Corte Z"
        },
        {
          name: `${De("6\xB7" + C("E") + "\xB7" + C("I", "y"), C("L") + "\xB2")}`,
          calc: `${De("6\xD7" + we(t) + "\xD7" + we(l), we(a) + "\xB2")}`,
          val: 6 * t * l / a ** 2,
          label: "Corte-Momento Y"
        },
        {
          name: `${De(C("G") + "\xB7" + C("J"), C("L"))}`,
          calc: `${De(we(s) + "\xD7" + we(d), we(a))}`,
          val: s * d / a,
          label: "Torsi\xF3n"
        },
        {
          name: `${De("4\xB7" + C("E") + "\xB7" + C("I", "z"), C("L"))}`,
          calc: `${De("4\xD7" + we(t) + "\xD7" + we(o), we(a))}`,
          val: 4 * t * o / a,
          label: "Flexi\xF3n Z (4EI/L)"
        },
        {
          name: `${De("2\xB7" + C("E") + "\xB7" + C("I", "z"), C("L"))}`,
          calc: `${De("2\xD7" + we(t) + "\xD7" + we(o), we(a))}`,
          val: 2 * t * o / a,
          label: "Flexi\xF3n Z (2EI/L)"
        },
        {
          name: `${De("4\xB7" + C("E") + "\xB7" + C("I", "y"), C("L"))}`,
          calc: `${De("4\xD7" + we(t) + "\xD7" + we(l), we(a))}`,
          val: 4 * t * l / a,
          label: "Flexi\xF3n Y (4EI/L)"
        },
        {
          name: `${De("2\xB7" + C("E") + "\xB7" + C("I", "y"), C("L"))}`,
          calc: `${De("2\xD7" + we(t) + "\xD7" + we(l), we(a))}`,
          val: 2 * t * l / a,
          label: "Flexi\xF3n Y (2EI/L)"
        }
      ].map((f) => `<div class="coeff-item"><div style="color:var(--fem-eq-sub);font-size:10px;font-family:monospace;margin-bottom:2px">${f.label}</div>${f.name} = ${f.calc} = <span class="highlight">${we(f.val)}</span></div>`).join("")}</div>`;
    }
    function Vo(t, n, o, l) {
      var _a2;
      const s = document.querySelector(".fem-full-overlay");
      s && s.remove();
      const d = document.createElement("div");
      d.className = "fem-full-overlay", d.innerHTML = `
      <button class="close-full" id="fem-full-close">\u2715 Cerrar</button>
      <h2>${t}</h2>
      <div class="fem-full-sections">
        <div class="full-section">
          <div class="side-title">\u2460 F\xF3rmula General (simb\xF3lica)</div>
          <div class="fem-full-sym">${n}</div>
        </div>
        ${l ? `<div class="full-section coeff">
          <div class="side-title">\u2461 C\xE1lculo de Coeficientes (sustituci\xF3n num\xE9rica)</div>
          ${l}
        </div>` : ""}
        <div class="full-section numeric">
          <div class="side-title">${l ? "\u2462" : "\u2461"} Matriz Num\xE9rica Resultante</div>
          ${o}
        </div>
      </div>
    `, document.body.appendChild(d), (_a2 = d.querySelector("#fem-full-close")) == null ? void 0 : _a2.addEventListener("click", () => d.remove()), d.addEventListener("click", (a) => {
        a.target === d && d.remove();
      });
    }
    function _s(t) {
      var _a2, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l2, _m, _n2, _o2, _p, _q, _r, _s2, _t2, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I, _J, _K, _L, _M, _N, _O;
      Zt && Zt.remove();
      const n = e.nodes.val, o = e.elements.val, l = o[t], s = l.map((v) => n[v]), d = l.length === 2, a = ((_a2 = e.elementInputs) == null ? void 0 : _a2.val) || {}, r = (_b = e.deformOutputs) == null ? void 0 : _b.val, f = (_c = e.analyzeOutputs) == null ? void 0 : _c.val;
      if (d) {
        const v = On(vn(s[1], s[0])), m = ((_d = a.elasticities) == null ? void 0 : _d.get(t)) ?? 0, I = ((_e2 = a.areas) == null ? void 0 : _e2.get(t)) ?? 0, F = ((_f = a.momentsOfInertiaZ) == null ? void 0 : _f.get(t)) ?? 0, N = ((_g = a.momentsOfInertiaY) == null ? void 0 : _g.get(t)) ?? 0, G = ((_h = a.shearModuli) == null ? void 0 : _h.get(t)) ?? 0, h = ((_i = a.torsionalConstants) == null ? void 0 : _i.get(t)) ?? 0, S = ((_j = a.momentReleases) == null ? void 0 : _j.get(t)) || [], y = ((_k = a.partialFixitySprings) == null ? void 0 : _k.get(t)) || [], R = [
          "P (Axial)",
          "V2 (Corte)",
          "V3 (Corte)",
          "T (Torsi\xF3n)",
          "M22 (Momento)",
          "M33 (Momento)"
        ];
        let K = "";
        for (let U = 0; U < 6; U++) {
          const le = U, ee = U + 6, Z = (S.length >= 12 ? S[le] : U >= 3 && S.length >= 6 && S[U - 3]) ? "checked" : "", fe = (S.length >= 12 ? S[ee] : U >= 3 && S.length >= 6 && S[U]) ? "checked" : "", de = y.length >= 12 && y[le] > 0 ? y[le].toFixed(1) : "", ke = y.length >= 12 && y[ee] > 0 ? y[ee].toFixed(1) : "";
          K += `<tr>
          <td style="text-align:left;color:var(--fem-key)">${R[U]}</td>
          <td style="text-align:center"><input type="checkbox" data-rel="${le}" ${Z}></td>
          <td style="text-align:center"><input type="checkbox" data-rel="${ee}" ${fe}></td>
          <td><input type="number" data-spr="${le}" value="${de}" placeholder="0" style="width:50px;background:var(--fem-bg);color:var(--fem-val);border:1px solid var(--fem-border);font-size:10px;text-align:right"></td>
          <td><input type="number" data-spr="${ee}" value="${ke}" placeholder="0" style="width:50px;background:var(--fem-bg);color:var(--fem-val);border:1px solid var(--fem-border);font-size:10px;text-align:right"></td>
        </tr>`;
        }
        `${l[0]}${l[1]}${we(v)}${we(m)}${we(I)}${we(F)}${we(N)}${we(G)}${we(h)}${K}`;
      } else {
        const v = ((_l2 = a.elasticities) == null ? void 0 : _l2.get(t)) ?? 0, m = ((_m = a.thicknesses) == null ? void 0 : _m.get(t)) ?? 0, I = ((_n2 = a.poissonsRatios) == null ? void 0 : _n2.get(t)) ?? 0, F = v / (2 * (1 + I)), N = l.length === 4, G = v / (1 - I * I);
        `${l.length}${l.join(", ")}${we(v)}${we(F)}${we(m)}${we(I)}`, N && (w = `<div class="fem-eq eq-box">
          <div style="text-align:left;margin-bottom:6px"><strong style="color:var(--fem-section-title)">Formulaci\xF3n Q4: Membrana + Mindlin-Reissner + Drilling</strong></div>

          <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">1. Matriz constitutiva (esfuerzo plano):</strong></div>
          <div>${C("D")} = ${De(C("E"), "1\u2212\u03BD\xB2")} \xB7 <span class="mat-sym" style="grid-template-columns:repeat(3,auto)">
            <span class="cell">1</span><span class="cell">\u03BD</span><span class="cell">0</span>
            <span class="cell">\u03BD</span><span class="cell">1</span><span class="cell">0</span>
            <span class="cell">0</span><span class="cell">0</span><span class="cell">${De("1\u2212\u03BD", "2")}</span>
          </span> = ${De(we(v), "1\u2212" + we(I) + "\xB2")} = <span class="highlight">${we(G)}</span></div>

          <div style="text-align:left;margin-top:8px;margin-bottom:4px"><strong style="color:var(--fem-section-title)">2. Funciones de forma (Ec. 6.2, Wilson):</strong></div>
          <div>${C("N", "i")} = \xBC\xB7(1\xB1\u03BE)\xB7(1\xB1\u03B7) &nbsp;&nbsp; <sub style="color:var(--fem-label)">i = 1..4 (bilineal)</sub></div>

          <div style="text-align:left;margin-top:8px;margin-bottom:4px"><strong style="color:var(--fem-section-title)">3. Modos incompatibles (Ec. 6.13, Wilson 1971):</strong></div>
          <div>${C("N", "5")} = 1 \u2212 \u03BE\xB2 &nbsp;&nbsp; ${C("N", "6")} = 1 \u2212 \u03B7\xB2</div>
          <div style="margin-top:4px">${C("u", "x")} = \u03A3${C("N", "i")}\xB7${C("u", "xi")} + \u03B1\u2081\xB7${C("N", "5")} + \u03B1\u2082\xB7${C("N", "6")} &nbsp;<sub style="color:var(--fem-label)">(Ec. 6.12)</sub></div>
          <div>${C("u", "y")} = \u03A3${C("N", "i")}\xB7${C("u", "yi")} + \u03B1\u2083\xB7${C("N", "5")} + \u03B1\u2084\xB7${C("N", "6")}</div>

          <div style="text-align:left;margin-top:8px;margin-bottom:4px"><strong style="color:var(--fem-section-title)">4. Deformaci\xF3n-desplazamiento (Ec. 6.3):</strong></div>
          <div>${C("d")} = [${C("B", "C")} &nbsp; ${C("B", "I")}] \xB7 [${C("u")} &nbsp; \u03B1]<sup>T</sup></div>

          <div style="text-align:left;margin-top:8px;margin-bottom:4px"><strong style="color:var(--fem-section-title)">5. Submatrices de rigidez (Ec. 6.9):</strong></div>
          <div>${C("k", "CC")} = \u222B${C("B", "C")}<sup>T</sup>\xB7${C("E")}\xB7${C("B", "C")} dV &nbsp;<sub style="color:var(--fem-label)">(8\xD78 est\xE1ndar)</sub></div>
          <div>${C("k", "CI")} = \u222B${C("B", "C")}<sup>T</sup>\xB7${C("E")}\xB7${C("B\u0304", "I")} dV &nbsp;<sub style="color:var(--fem-label)">(8\xD74 acoplamiento)</sub></div>
          <div>${C("k", "II")} = \u222B${C("B\u0304", "I")}<sup>T</sup>\xB7${C("E")}\xB7${C("B\u0304", "I")} dV &nbsp;<sub style="color:var(--fem-label)">(4\xD74 modos internos)</sub></div>

          <div style="text-align:left;margin-top:8px;margin-bottom:4px"><strong style="color:var(--fem-section-title)">6. Condensaci\xF3n est\xE1tica (Ec. 6.11):</strong></div>
          <div style="font-size:13px"><span class="highlight">${C("k", "C")} = ${C("k", "CC")} \u2212 ${C("k", "CI")} \xB7 ${C("k", "II")}\u207B\xB9 \xB7 ${C("k", "IC")}</span></div>
          <div style="margin-top:4px;color:var(--fem-eq-sub)">Los 4 modos incompatibles \u03B1 se eliminan antes del ensamblaje global</div>

          <div style="text-align:left;margin-top:8px;margin-bottom:4px"><strong style="color:var(--fem-section-title)">7. Correcci\xF3n de Taylor (Ec. 6.7):</strong></div>
          <div>${C("B\u0304", "I")} = ${C("B", "I")} + ${C("B", "IC")} &nbsp; donde &nbsp; ${C("B", "IC")} = \u2212${De("1", "V")}\u222B${C("B", "I")} dV</div>
          <div style="color:var(--fem-eq-sub)">Jacobiano del centro para modos incompatibles \u2192 pasa patch test</div>

          <div style="text-align:left;margin-top:8px;margin-bottom:4px"><strong style="color:var(--fem-section-title)">8. Drilling DOF (Hughes-Brezzi 1989):</strong></div>
          <div>${C("K", "drill")} = \u03B1\xB7${C("G")}\xB7${C("t")} \xB7 \u222B${C("B", "d")}<sup>T</sup>\xB7${C("B", "d")} dA &nbsp; donde \u03B1 = 0.5</div>
          <div>${C("B", "d")}[i] = \u03B8<sub>z,i</sub> \u2212 \xBD\xB7(\u2202v/\u2202x \u2212 \u2202u/\u2202y) &nbsp;<sub style="color:var(--fem-label)">(rotaci\xF3n antisim\xE9trica)</sub></div>

          <div style="text-align:left;margin-top:8px;margin-bottom:4px"><strong style="color:var(--fem-section-title)">9. Placa Mindlin-Reissner + MITC4:</strong></div>
          <div>${C("D", "b")} = ${De(C("E") + "\xB7" + C("t") + "\xB3", "12\xB7(1\u2212\u03BD\xB2)")} = <span class="highlight">${we(v * m ** 3 / (12 * (1 - I ** 2)))}</span></div>
          <div>${C("D", "s")} = \u03BA\xB7${C("G")}\xB7${C("t")} = <span class="highlight">${we(5 / 6 * F * m)}</span> &nbsp; <sub style="color:var(--fem-label)">\u03BA = 5/6</sub></div>
          <div style="color:var(--fem-eq-sub)">MITC4: interpolaci\xF3n de cortante en puntos de atado (tying points)</div>

          <div style="text-align:left;margin-top:8px;margin-bottom:4px"><strong style="color:var(--fem-section-title)">10. Ensamblaje final:</strong></div>
          <div>${C("K", "24\xD724")} = ${C("K", "membrana")}(8\xD78) + ${C("K", "flexi\xF3n")}(12\xD712) + ${C("K", "drilling")}(12\xD712)</div>
          <div style="color:var(--fem-eq-sub)">DOFs por nodo: [u, v, w, \u03B8x, \u03B8y, \u03B8z]</div>
        </div>`);
      }
      let i = "", c = "", b = "", w = "", E = "", $ = "", p = "", x = "", T = null, L = null, k = null, z = [];
      try {
        if (T = yo(s, a, t), L = $o(s), k = sn(ss(L), sn(T, L)), z = d ? [
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
          const F = On(vn(s[1], s[0])), N = ((_o2 = a.elasticities) == null ? void 0 : _o2.get(t)) ?? 0, G = ((_p = a.areas) == null ? void 0 : _p.get(t)) ?? 0, h = ((_q = a.momentsOfInertiaZ) == null ? void 0 : _q.get(t)) ?? 0, S = ((_r = a.momentsOfInertiaY) == null ? void 0 : _r.get(t)) ?? 0, y = ((_s2 = a.shearModuli) == null ? void 0 : _s2.get(t)) ?? 0, R = ((_t2 = a.torsionalConstants) == null ? void 0 : _t2.get(t)) ?? 0;
          w = Ra(N, G, h, S, y, R, F);
        }
        E = Pa(s), $ = Oa(), p = Na(l), x = qa(d);
        const v = '<button class="fem-expand-btn" data-full="kLocal">\u26F6 Ver completa</button>', m = '<button class="fem-expand-btn" data-full="T">\u26F6 Ver completa</button>', I = '<button class="fem-expand-btn" data-full="kGlobal">\u26F6 Ver completa</button>';
        i = `<div class="matrix-label">k_local (${T.length}\xD7${T.length}) ${v}</div>${Yo(T, z)}`, c = `<div class="matrix-label">T \u2014 Transformaci\xF3n (${L.length}\xD7${L.length}) ${m}</div>${Yo(L, z)}`, b = `<div class="matrix-label">K_global = T^T \xB7 k \xB7 T ${I}</div>${Yo(k, z)}`;
      } catch (v) {
        i = `<div style="color:red">Error: ${v.message}</div>`;
      }
      if (r == null ? void 0 : r.deformations) {
        const v = [
          "ux",
          "uy",
          "uz",
          "\u03B8x",
          "\u03B8y",
          "\u03B8z"
        ];
        l.map((m, I) => {
          var _a3;
          const F = ((_a3 = r.deformations) == null ? void 0 : _a3.get(m)) || [
            0,
            0,
            0,
            0,
            0,
            0
          ], N = v.map((G, h) => `<span class="prop-key">${G}</span>: <span class="${Math.abs(F[h]) > 1e-10 ? "result-val" : ""}">${we(F[h])}</span>`).join(" &nbsp;");
          return `<div style="margin-bottom:2px"><strong>Nodo ${m}:</strong> ${N}</div>`;
        }).join("");
      }
      if (f && d && (r == null ? void 0 : r.deformations) && T && L) {
        const v = (_u = f.normals) == null ? void 0 : _u.get(t), m = (_v = f.shearsY) == null ? void 0 : _v.get(t), I = (_w = f.shearsZ) == null ? void 0 : _w.get(t), F = (_x = f.torsions) == null ? void 0 : _x.get(t), N = (_y = f.bendingsY) == null ? void 0 : _y.get(t), G = (_z = f.bendingsZ) == null ? void 0 : _z.get(t), h = [
          "ux",
          "uy",
          "uz",
          "\u03B8x",
          "\u03B8y",
          "\u03B8z"
        ], S = [];
        for (const ee of l) {
          const Z = ((_A = r.deformations) == null ? void 0 : _A.get(ee)) || [
            0,
            0,
            0,
            0,
            0,
            0
          ];
          S.push(...Z);
        }
        let y = [];
        try {
          y = sn(L, S);
        } catch {
          y = new Array(12).fill(0);
        }
        let R = [];
        try {
          R = sn(T, y);
        } catch {
          R = new Array(12).fill(0);
        }
        const K = (ee, Z) => ee.map((fe, de) => `<span style="color:${Math.abs(fe) > 1e-10 ? "var(--fem-nonzero)" : "var(--fem-eq-dots)"}">${Z[de % 6]}=${we(fe)}</span>`).join(", "), le = [
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
        ].map((ee, Z) => `${ee}${Z < 6 ? "\u1D62" : "\u2C7C"}`);
        `${C("u", "global")}${l.map((ee, Z) => `<span style="color:var(--fem-label)">nodo ${ee}:</span> ${h.map((fe, de) => `<span style="color:${Math.abs(S[Z * 6 + de]) > 1e-10 ? "var(--fem-eq-var)" : "var(--fem-eq-dots)"}">${we(S[Z * 6 + de])}</span>`).join(", ")}`).join(" | ")}${C("u", "local")}${C("T")}${C("u", "global")}${C("u", "local")}${K(y, [
          ...h,
          ...h
        ])}${C("f", "local")}${C("k", "local")}${C("u", "local")}${C("f", "local")}${R.map((ee, Z) => `<span style="color:${Math.abs(ee) > 1e-10 ? "var(--fem-nonzero)" : "var(--fem-eq-dots)"}">${le[Z]}=${we(ee)}</span>`).join(", ")}${C("P", "1")}${C("N", "i")}${we(R[0])}${C("P", "7")}${C("N", "j")}${we(R[6])}${C("P", "2")}${C("V", "y,i")}${we(R[1])}${C("P", "8")}${C("V", "y,j")}${we(R[7])}${C("P", "3")}${C("V", "z,i")}${we(R[2])}${C("P", "9")}${C("V", "z,j")}${we(R[8])}${C("P", "4")}${C("M", "x,i")}${we(R[3])}${C("P", "10")}${C("M", "x,j")}${we(R[9])}${C("P", "5")}${C("M", "y,i")}${we(R[4])}${C("P", "11")}${C("M", "y,j")}${we(R[10])}${C("P", "6")}${C("M", "z,i")}${we(R[5])}${C("P", "12")}${C("M", "z,j")}${we(R[11])}${v ? v.map((ee) => we(ee)).join(", ") : "\u2014"}${m ? m.map((ee) => we(ee)).join(", ") : "\u2014"}${I ? I.map((ee) => we(ee)).join(", ") : "\u2014"}${F ? F.map((ee) => we(ee)).join(", ") : "\u2014"}${N ? N.map((ee) => we(ee)).join(", ") : "\u2014"}${G ? G.map((ee) => we(ee)).join(", ") : "\u2014"}`;
      } else if (f && d) {
        const v = (_B = f.normals) == null ? void 0 : _B.get(t), m = (_C = f.shearsY) == null ? void 0 : _C.get(t), I = (_D = f.shearsZ) == null ? void 0 : _D.get(t), F = (_E = f.torsions) == null ? void 0 : _E.get(t), N = (_F = f.bendingsY) == null ? void 0 : _F.get(t), G = (_G = f.bendingsZ) == null ? void 0 : _G.get(t);
        `${v ? v.map((h) => we(h)).join(", ") : "\u2014"}${m ? m.map((h) => we(h)).join(", ") : "\u2014"}${I ? I.map((h) => we(h)).join(", ") : "\u2014"}${F ? F.map((h) => we(h)).join(", ") : "\u2014"}${N ? N.map((h) => we(h)).join(", ") : "\u2014"}${G ? G.map((h) => we(h)).join(", ") : "\u2014"}`;
      } else if (f && !d) {
        const v = (_H = f.bendingXX) == null ? void 0 : _H.get(t), m = (_I = f.bendingYY) == null ? void 0 : _I.get(t), I = (_J = f.bendingXY) == null ? void 0 : _J.get(t), F = (_K = f.membraneXX) == null ? void 0 : _K.get(t), N = (_L = f.membraneYY) == null ? void 0 : _L.get(t), G = (_M = f.membraneXY) == null ? void 0 : _M.get(t);
        `${v ? v.map((h) => we(h)).join(", ") : "\u2014"}${m ? m.map((h) => we(h)).join(", ") : "\u2014"}${I ? I.map((h) => we(h)).join(", ") : "\u2014"}${F ? F.map((h) => we(h)).join(", ") : "\u2014"}${N ? N.map((h) => we(h)).join(", ") : "\u2014"}${G ? G.map((h) => we(h)).join(", ") : "\u2014"}`;
      }
      `${l[0]}`, 6 * l[0], 6 * l[0] + 5, `${l[1]}`, 6 * l[1], 6 * l[1] + 5, l.length === 3 && (`${l[2]}`, 6 * l[2], 6 * l[2] + 5), n.length * 6, n.length * 6, Zt = yl(t, n, o, a, r, f), Zt.id = "fem-inspect-panel", document.body.appendChild(Zt), (_N = Zt.querySelector("#er-close")) == null ? void 0 : _N.addEventListener("click", () => Ln()), (_O = Zt.querySelector("#rel-apply")) == null ? void 0 : _O.addEventListener("click", () => {
        const v = Zt.querySelectorAll("input[data-rel]"), m = Zt.querySelectorAll("input[data-spr]"), I = new Array(12).fill(false), F = new Array(12).fill(0);
        v.forEach((G) => {
          I[parseInt(G.dataset.rel)] = G.checked;
        }), m.forEach((G) => {
          const h = parseFloat(G.value);
          h > 0 && (F[parseInt(G.dataset.spr)] = h);
        }), a.momentReleases || (a.momentReleases = /* @__PURE__ */ new Map()), a.partialFixitySprings || (a.partialFixitySprings = /* @__PURE__ */ new Map()), I.some((G) => G) ? a.momentReleases.set(t, I) : a.momentReleases.delete(t), F.some((G) => G > 0) ? a.partialFixitySprings.set(t, F) : a.partialFixitySprings.delete(t), console.log(`Releases elem ${t}:`, I.map((G, h) => G ? relIds[h] : "").filter(Boolean).join(" ") || "none"), console.log(`Springs elem ${t}:`, F);
        const N = Zt.querySelector("#rel-apply");
        N.textContent = "\u2713 Aplicado", N.style.background = "#4caf50", setTimeout(() => {
          N.textContent = "Aplicar", N.style.background = "var(--fem-heading)";
        }, 1500);
      });
      const P = d ? (() => {
        var _a3, _b2, _c2, _d2, _e3, _f2;
        const v = On(vn(s[1], s[0])), m = ((_a3 = a.elasticities) == null ? void 0 : _a3.get(t)) ?? 0, I = ((_b2 = a.areas) == null ? void 0 : _b2.get(t)) ?? 0, F = ((_c2 = a.momentsOfInertiaZ) == null ? void 0 : _c2.get(t)) ?? 0, N = ((_d2 = a.momentsOfInertiaY) == null ? void 0 : _d2.get(t)) ?? 0, G = ((_e3 = a.shearModuli) == null ? void 0 : _e3.get(t)) ?? 0, h = ((_f2 = a.torsionalConstants) == null ? void 0 : _f2.get(t)) ?? 0;
        return _a(m, I, F, N, G, h, v);
      })() : void 0;
      Zt.querySelectorAll("[data-full]").forEach((v) => {
        v.addEventListener("click", (m) => {
          m.stopPropagation();
          const I = v.dataset.full;
          if (I === "kLocal" && T) {
            const F = d ? qs() : "<em>Shell 18\xD718 \u2014 ver tabla num\xE9rica</em>";
            Vo(`Elemento ${t} \u2014 Rigidez Local k_local`, F, Jo(T, z), P);
          } else if (I === "T" && L) Vo(`Elemento ${t} \u2014 Transformaci\xF3n T`, E, Jo(L, z));
          else if (I === "kGlobal" && k) {
            const F = d ? qs() : "<em>Shell 18\xD718</em>";
            Vo(`Elemento ${t} \u2014 Rigidez Global K = T^T \xB7 k \xB7 T`, F, Jo(k, z), P);
          }
        });
      });
    }
    function Bs() {
      const l = [], s = [];
      for (let $ = 0; $ <= 8; $++) {
        const p = $ / 8, x = 30 * p, L = 12 * (1 - p) * (1 - p * 0.3) / 2, k = l.length;
        if (l.push([
          -L,
          -L,
          x
        ]), l.push([
          L,
          -L,
          x
        ]), l.push([
          L,
          L,
          x
        ]), l.push([
          -L,
          L,
          x
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
        ]), $ > 0 && $ < 8 && (s.push([
          k,
          k + 2
        ]), s.push([
          k + 1,
          k + 3
        ])), $ > 0) {
          const z = k - 4;
          for (let P = 0; P < 4; P++) s.push([
            z + P,
            k + P
          ]);
          s.push([
            z,
            k + 1
          ]), s.push([
            z + 1,
            k + 2
          ]), s.push([
            z + 2,
            k + 3
          ]), s.push([
            z + 3,
            k
          ]);
        }
      }
      const d = /* @__PURE__ */ new Map();
      for (let $ = 0; $ < 4; $++) d.set($, [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
      const a = l.length - 4, r = /* @__PURE__ */ new Map();
      for (let $ = 0; $ < 4; $++) r.set(a + $, [
        0,
        0,
        -50,
        0,
        0,
        0
      ]);
      e.nodes.val = l, e.elements.val = s, e.nodeInputs && (e.nodeInputs.val = {
        supports: d,
        loads: r
      });
      const f = 2e8, i = 77e6, c = 5e-3, b = 2e-6, w = 1e-6, E = {
        elasticities: new Map(s.map(($, p) => [
          p,
          f
        ])),
        shearModuli: new Map(s.map(($, p) => [
          p,
          i
        ])),
        areas: new Map(s.map(($, p) => [
          p,
          c
        ])),
        momentsOfInertiaZ: new Map(s.map(($, p) => [
          p,
          b
        ])),
        momentsOfInertiaY: new Map(s.map(($, p) => [
          p,
          b
        ])),
        torsionalConstants: new Map(s.map(($, p) => [
          p,
          w
        ]))
      };
      e.elementInputs && (e.elementInputs.val = E);
      try {
        const $ = Tt(l, s, {
          supports: d,
          loads: r
        }, E);
        $ && e.deformOutputs && (e.deformOutputs.val = $);
      } catch ($) {
        console.warn("Eiffel deform:", $.message);
      }
      setTimeout(() => Et(), 50), et(), console.log(`Torre Eiffel: ${l.length} nodos, ${s.length} elementos, H=30m`);
    }
    function Ds() {
      const l = [], s = [];
      for (let E = 0; E <= 20; E++) {
        const $ = E / 20, p = 20 * $, x = 20 * (1 - Math.pow(2 * $ - 1, 2)), T = 2;
        l.push([
          p,
          -2 / 2,
          x
        ]), l.push([
          p,
          T / 2,
          x
        ]);
      }
      for (let E = 0; E < 20; E++) s.push([
        E * 2,
        (E + 1) * 2
      ]), s.push([
        E * 2 + 1,
        (E + 1) * 2 + 1
      ]), s.push([
        E * 2,
        E * 2 + 1
      ]), s.push([
        E * 2,
        (E + 1) * 2 + 1
      ]), s.push([
        E * 2 + 1,
        (E + 1) * 2
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
      for (let E = 0; E <= 20; E++) a.set(E * 2, [
        0,
        0,
        -20,
        0,
        0,
        0
      ]), a.set(E * 2 + 1, [
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
      const r = 2e8, f = 77e6, i = 0.01, c = 5e-6, b = 2e-6, w = {
        elasticities: new Map(s.map((E, $) => [
          $,
          r
        ])),
        shearModuli: new Map(s.map((E, $) => [
          $,
          f
        ])),
        areas: new Map(s.map((E, $) => [
          $,
          i
        ])),
        momentsOfInertiaZ: new Map(s.map((E, $) => [
          $,
          c
        ])),
        momentsOfInertiaY: new Map(s.map((E, $) => [
          $,
          c
        ])),
        torsionalConstants: new Map(s.map((E, $) => [
          $,
          b
        ]))
      };
      e.elementInputs && (e.elementInputs.val = w);
      try {
        const E = Tt(l, s, {
          supports: d,
          loads: a
        }, w);
        E && e.deformOutputs && (e.deformOutputs.val = E);
      } catch (E) {
        console.warn("Arco:", E.message);
      }
      setTimeout(() => Et(), 50), et(), console.log(`Arco Gateway: ${l.length} nodos, ${s.length} elem, span=20m, H=20m`);
    }
    function Hs() {
      const d = [], a = [];
      for (let p = 0; p <= 16; p++) {
        const x = 60 * p / 16;
        d.push([
          x,
          -6 / 2,
          8
        ]), d.push([
          x,
          6 / 2,
          8
        ]);
      }
      const r = d.length;
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
      const f = [
        Math.round(16 / 3),
        Math.round(2 * 16 / 3)
      ], i = [];
      for (const p of f) {
        const x = 60 * p / 16, T = d.length;
        d.push([
          x,
          -6 / 2,
          0
        ]);
        const L = d.length;
        d.push([
          x,
          6 / 2,
          0
        ]);
        const k = d.length;
        d.push([
          x,
          -6 / 2,
          28
        ]);
        const z = d.length;
        d.push([
          x,
          6 / 2,
          28
        ]), i.push(k, z), a.push([
          T,
          p * 2
        ]), a.push([
          p * 2,
          k
        ]), a.push([
          L,
          p * 2 + 1
        ]), a.push([
          p * 2 + 1,
          z
        ]), a.push([
          k,
          z
        ]);
      }
      for (const p of i) {
        const x = d[p][0];
        for (let T = 0; T <= 16; T++) {
          const L = 60 * T / 16;
          if (Math.abs(L - x) > 60 * 0.05 && Math.abs(L - x) < 60 * 0.45) {
            const k = d[p][1] < 0 ? T * 2 : T * 2 + 1;
            T % 2 === 0 && a.push([
              p,
              k
            ]);
          }
        }
      }
      const c = /* @__PURE__ */ new Map();
      c.set(0, [
        true,
        true,
        true,
        false,
        false,
        false
      ]), c.set(1, [
        true,
        true,
        true,
        false,
        false,
        false
      ]), c.set(16 * 2, [
        false,
        true,
        true,
        false,
        false,
        false
      ]), c.set(16 * 2 + 1, [
        false,
        true,
        true,
        false,
        false,
        false
      ]);
      for (let p = r; p < r + f.length * 4; p += 4) c.set(p, [
        true,
        true,
        true,
        true,
        true,
        true
      ]), c.set(p + 1, [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
      const b = /* @__PURE__ */ new Map();
      for (let p = 0; p <= 16; p++) b.set(p * 2, [
        0,
        0,
        -30,
        0,
        0,
        0
      ]), b.set(p * 2 + 1, [
        0,
        0,
        -30,
        0,
        0,
        0
      ]);
      e.nodes.val = d, e.elements.val = a, e.nodeInputs && (e.nodeInputs.val = {
        supports: c,
        loads: b
      });
      const w = 2e8, E = 77e6, $ = {
        elasticities: new Map(a.map((p, x) => [
          x,
          w
        ])),
        shearModuli: new Map(a.map((p, x) => [
          x,
          E
        ])),
        areas: new Map(a.map((p, x) => [
          x,
          x < 16 * 3 + 1 ? 0.02 : 1e-3
        ])),
        momentsOfInertiaZ: new Map(a.map((p, x) => [
          x,
          5e-5
        ])),
        momentsOfInertiaY: new Map(a.map((p, x) => [
          x,
          2e-5
        ])),
        torsionalConstants: new Map(a.map((p, x) => [
          x,
          1e-5
        ]))
      };
      e.elementInputs && (e.elementInputs.val = $);
      try {
        const p = Tt(d, a, {
          supports: c,
          loads: b
        }, $);
        p && e.deformOutputs && (e.deformOutputs.val = p);
      } catch (p) {
        console.warn("Puente:", p.message);
      }
      setTimeout(() => Et(), 50), et(), console.log(`Puente atirantado: ${d.length} nodos, ${a.length} elem, span=60m`);
    }
    function js() {
      const d = [], a = [];
      for (let x = 0; x <= 12; x++) {
        const T = x * 3.5, L = x * 5 * Math.PI / 180;
        for (let k = 0; k < 6; k++) {
          const z = L + 2 * Math.PI * k / 6, P = 5 * Math.cos(z), v = 5 * Math.sin(z);
          d.push([
            P,
            v,
            T
          ]);
        }
      }
      for (let x = 0; x <= 12; x++) {
        const T = x * 6;
        for (let L = 0; L < 6; L++) a.push([
          T + L,
          T + (L + 1) % 6
        ]);
        if (x < 12) {
          const L = (x + 1) * 6;
          for (let k = 0; k < 6; k++) a.push([
            T + k,
            L + k
          ]), a.push([
            T + k,
            L + (k + 1) % 6
          ]);
        }
      }
      for (let x = 0; x <= 12; x++) {
        const T = d.length;
        d.push([
          0,
          0,
          x * 3.5
        ]);
        const L = x * 6;
        for (let k = 0; k < 6; k++) a.push([
          T,
          L + k
        ]);
      }
      const r = 13 * 6;
      for (let x = 0; x < 12; x++) a.push([
        r + x,
        r + x + 1
      ]);
      const f = /* @__PURE__ */ new Map();
      for (let x = 0; x < 6; x++) f.set(x, [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
      f.set(r, [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
      const i = /* @__PURE__ */ new Map();
      for (let x = 1; x <= 12; x++) {
        const T = 10 * x / 12, L = x * 6;
        for (let k = 0; k < 6; k++) i.set(L + k, [
          T,
          0,
          -5,
          0,
          0,
          0
        ]);
      }
      e.nodes.val = d, e.elements.val = a, e.nodeInputs && (e.nodeInputs.val = {
        supports: f,
        loads: i
      });
      const c = 2e8, b = 77e6, w = 8e-3, E = 1e-5, $ = 5e-6, p = {
        elasticities: new Map(a.map((x, T) => [
          T,
          c
        ])),
        shearModuli: new Map(a.map((x, T) => [
          T,
          b
        ])),
        areas: new Map(a.map((x, T) => [
          T,
          w
        ])),
        momentsOfInertiaZ: new Map(a.map((x, T) => [
          T,
          E
        ])),
        momentsOfInertiaY: new Map(a.map((x, T) => [
          T,
          E
        ])),
        torsionalConstants: new Map(a.map((x, T) => [
          T,
          $
        ]))
      };
      e.elementInputs && (e.elementInputs.val = p);
      try {
        const x = Tt(d, a, {
          supports: f,
          loads: i
        }, p);
        x && e.deformOutputs && (e.deformOutputs.val = x);
      } catch (x) {
        console.warn("Twisted:", x.message);
      }
      setTimeout(() => Et(), 50), et(), console.log(`Torre Twist: ${d.length} nodos, ${a.length} elem, 12 pisos, twist=5deg/piso`);
    }
    function Ws() {
      const s = [], d = [];
      for (let p = 0; p <= 20; p++) {
        const x = p / 20, T = p * 3;
        let L = 8 * (1 - x * 0.7);
        x > 0.4 && (L *= 0.85), x > 0.7 && (L *= 0.7);
        const k = s.length;
        s.push([
          0,
          0,
          T
        ]);
        for (let z = 0; z < 3; z++) {
          const P = z * 2 * Math.PI / 3 - Math.PI / 2, v = L * Math.cos(P), m = L * Math.sin(P), I = s.length;
          s.push([
            v,
            m,
            T
          ]), d.push([
            k,
            I
          ]);
          const F = s.length;
          s.push([
            v * 0.5,
            m * 0.5,
            T
          ]), d.push([
            k,
            F
          ]), d.push([
            F,
            I
          ]);
        }
        for (let z = 0; z < 3; z++) {
          const P = k + 1 + z * 2, v = k + 1 + (z + 1) % 3 * 2;
          d.push([
            P,
            v
          ]);
        }
        if (p < 20) {
          const P = k + 7;
          d.push([
            k,
            P
          ]);
          for (let v = 0; v < 3; v++) d.push([
            k + 1 + v * 2,
            P + 1 + v * 2
          ]), d.push([
            k + 2 + v * 2,
            P + 2 + v * 2
          ]), d.push([
            k + 1 + v * 2,
            P + 2 + v * 2
          ]);
        }
      }
      const a = /* @__PURE__ */ new Map(), r = 1 + 3 * 2;
      for (let p = 0; p < r; p++) a.set(p, [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
      const f = /* @__PURE__ */ new Map();
      for (let p = 1; p <= 20; p++) {
        const x = p * r, T = 5 * p / 20;
        f.set(x, [
          T,
          0,
          -10,
          0,
          0,
          0
        ]);
      }
      e.nodes.val = s, e.elements.val = d, e.nodeInputs && (e.nodeInputs.val = {
        supports: a,
        loads: f
      });
      const i = 35e6, c = 14e6, b = 0.02, w = 5e-5, E = 2e-5, $ = {
        elasticities: new Map(d.map((p, x) => [
          x,
          i
        ])),
        shearModuli: new Map(d.map((p, x) => [
          x,
          c
        ])),
        areas: new Map(d.map((p, x) => [
          x,
          b
        ])),
        momentsOfInertiaZ: new Map(d.map((p, x) => [
          x,
          w
        ])),
        momentsOfInertiaY: new Map(d.map((p, x) => [
          x,
          w
        ])),
        torsionalConstants: new Map(d.map((p, x) => [
          x,
          E
        ]))
      };
      e.elementInputs && (e.elementInputs.val = $);
      try {
        const p = Tt(s, d, {
          supports: a,
          loads: f
        }, $);
        p && e.deformOutputs && (e.deformOutputs.val = p);
      } catch (p) {
        console.warn("Burj:", p.message);
      }
      setTimeout(() => Et(), 50), et(), console.log(`Burj Khalifa: ${s.length} nodos, ${d.length} elem, 20 pisos, H=${20 * 3}m`);
    }
    function Gs() {
      const t = [], n = [];
      for (let b = 0; b < 3; b++) {
        const w = b * 12, E = 15 - b * 2, $ = 20 - b * 3, p = 8 - b, x = t.length;
        for (let L = 0; L <= 4; L++) {
          const k = L / 4, z = -p / 2 + p * k, P = $ * (1 - k * k * 0.3);
          for (let v = 0; v <= 12; v++) {
            const m = v / 12, I = w + P * m, F = E * Math.sin(Math.PI * m) * (1 - k * k * 0.5), N = z;
            t.push([
              I,
              N,
              F
            ]);
          }
        }
        const T = 13;
        for (let L = 0; L < 4; L++) for (let k = 0; k < 12; k++) {
          const z = x + L * T + k, P = x + L * T + k + 1, v = x + (L + 1) * T + k + 1, m = x + (L + 1) * T + k;
          n.push([
            z,
            P,
            v,
            m
          ]);
        }
      }
      const s = /* @__PURE__ */ new Map();
      for (let b = 0; b < t.length; b++) t[b][2] < 0.5 && s.set(b, [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
      const d = /* @__PURE__ */ new Map();
      for (let b = 0; b < t.length; b++) t[b][2] > 2 && d.set(b, [
        0,
        0,
        -5,
        0,
        0,
        0
      ]);
      e.nodes.val = t, e.elements.val = n, e.nodeInputs && (e.nodeInputs.val = {
        supports: s,
        loads: d
      });
      const a = 35e6, r = 0.2, f = 0.15, i = a / (2 * (1 + r)), c = {
        elasticities: new Map(n.map((b, w) => [
          w,
          a
        ])),
        poissonsRatios: new Map(n.map((b, w) => [
          w,
          r
        ])),
        thicknesses: new Map(n.map((b, w) => [
          w,
          f
        ])),
        shearModuli: new Map(n.map((b, w) => [
          w,
          i
        ]))
      };
      e.elementInputs && (e.elementInputs.val = c);
      try {
        const b = Tt(t, n, {
          supports: s,
          loads: d
        }, c);
        b && e.deformOutputs && (e.deformOutputs.val = b);
      } catch (b) {
        console.warn("Opera:", b.message);
      }
      setTimeout(() => Et(), 50), et(), console.log(`Sydney Opera: ${t.length} nodos, ${n.length} shells Q4, 3 velas`);
    }
    function Ys() {
      const l = [], s = [];
      for (let $ = 0; $ <= 15; $++) {
        const p = $ / 15, x = $ * 3.5, T = 5 * (0.6 + 0.4 * Math.sin(Math.PI * p));
        if (p > 0.9) {
          const L = 5 * (0.6 + 0.4 * Math.sin(Math.PI * 0.9)) * (1 - (p - 0.9) * 8);
          for (let k = 0; k < 12; k++) {
            const z = 2 * Math.PI * k / 12;
            l.push([
              Math.max(L, 1) * Math.cos(z),
              Math.max(L, 1) * Math.sin(z),
              x
            ]);
          }
        } else for (let L = 0; L < 12; L++) {
          const k = 2 * Math.PI * L / 12;
          l.push([
            T * Math.cos(k),
            T * Math.sin(k),
            x
          ]);
        }
      }
      for (let $ = 0; $ < 15; $++) {
        const p = $ * 12, x = ($ + 1) * 12;
        for (let L = 0; L < 12; L++) s.push([
          p + L,
          p + (L + 1) % 12
        ]);
        const T = $ % 2 === 0 ? 1 : -1;
        for (let L = 0; L < 12; L++) {
          const k = (L + T + 12) % 12;
          s.push([
            p + L,
            x + k
          ]), s.push([
            p + L,
            x + L
          ]);
        }
      }
      const d = 15 * 12;
      for (let $ = 0; $ < 12; $++) s.push([
        d + $,
        d + ($ + 1) % 12
      ]);
      const a = /* @__PURE__ */ new Map();
      for (let $ = 0; $ < 12; $++) a.set($, [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
      const r = /* @__PURE__ */ new Map();
      for (let $ = 1; $ <= 15; $++) {
        const p = $ * 12, x = 3 * $ / 15;
        for (let T = 0; T < 12; T += 3) r.set(p + T, [
          x,
          0,
          -8,
          0,
          0,
          0
        ]);
      }
      e.nodes.val = l, e.elements.val = s, e.nodeInputs && (e.nodeInputs.val = {
        supports: a,
        loads: r
      });
      const f = 2e8, i = 77e6, c = 6e-3, b = 8e-6, w = 4e-6, E = {
        elasticities: new Map(s.map(($, p) => [
          p,
          f
        ])),
        shearModuli: new Map(s.map(($, p) => [
          p,
          i
        ])),
        areas: new Map(s.map(($, p) => [
          p,
          c
        ])),
        momentsOfInertiaZ: new Map(s.map(($, p) => [
          p,
          b
        ])),
        momentsOfInertiaY: new Map(s.map(($, p) => [
          p,
          b
        ])),
        torsionalConstants: new Map(s.map(($, p) => [
          p,
          w
        ]))
      };
      e.elementInputs && (e.elementInputs.val = E);
      try {
        const $ = Tt(l, s, {
          supports: a,
          loads: r
        }, E);
        $ && e.deformOutputs && (e.deformOutputs.val = $);
      } catch ($) {
        console.warn("Diagrid:", $.message);
      }
      setTimeout(() => Et(), 50), et(), console.log(`Diagrid Tower: ${l.length} nodos, ${s.length} elem, 15 pisos, H=${15 * 3.5}m`);
    }
    function Uo() {
      var _a2, _b, _c, _d, _e2, _f, _g, _h;
      const t = ((_a2 = Q.W) == null ? void 0 : _a2.val) ?? 5, n = ((_b = Q.H) == null ? void 0 : _b.val) ?? 3, o = ((_c = Q.t) == null ? void 0 : _c.val) ?? 0.2, l = Math.round(((_d = Q.nx) == null ? void 0 : _d.val) ?? 8), s = Math.round(((_e2 = Q.ny) == null ? void 0 : _e2.val) ?? 6), d = ((_f = Q.E) == null ? void 0 : _f.val) ?? 25e6, a = ((_g = Q.nu) == null ? void 0 : _g.val) ?? 0.2, r = ((_h = Q.P) == null ? void 0 : _h.val) ?? 100, f = d / (2 * (1 + a)), i = t / l, c = n / s, b = [], w = [], E = /* @__PURE__ */ new Map(), $ = /* @__PURE__ */ new Map();
      for (let z = 0; z <= s; z++) for (let P = 0; P <= l; P++) b.push([
        P * i,
        0,
        z * c
      ]);
      const p = l + 1;
      for (let z = 0; z < s; z++) for (let P = 0; P < l; P++) w.push([
        z * p + P,
        z * p + P + 1,
        (z + 1) * p + P + 1,
        (z + 1) * p + P
      ]);
      for (let z = 0; z <= l; z++) E.set(z, [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
      const x = [];
      for (let z = 0; z <= l; z++) x.push(s * p + z);
      const T = r / x.length;
      for (const z of x) $.set(z, [
        T,
        0,
        0,
        0,
        0,
        0
      ]);
      e.nodes.val = b, e.elements.val = w, e.nodeInputs && (e.nodeInputs.val = {
        supports: E,
        loads: $
      });
      const L = {
        elasticities: new Map(w.map((z, P) => [
          P,
          d
        ])),
        poissonsRatios: new Map(w.map((z, P) => [
          P,
          a
        ])),
        thicknesses: new Map(w.map((z, P) => [
          P,
          o
        ])),
        shearModuli: new Map(w.map((z, P) => [
          P,
          f
        ])),
        densities: new Map(w.map((z, P) => [
          P,
          u.rho * (24 / (7.85 * 9.80665))
        ]))
      };
      e.elementInputs && (e.elementInputs.val = L);
      try {
        const z = Tt(b, w, {
          supports: E,
          loads: $
        }, L);
        if (z && e.deformOutputs) {
          e.deformOutputs.val = z;
          const P = hn(b, w, L, z);
          e.analyzeOutputs && (e.analyzeOutputs.val = P);
          const v = s * p + Math.floor(l / 2), m = z.deformations.get(v), I = m ? m[0] : 0;
          console.log(`Muro Q4: Ux=${I.toExponential(4)} m | OS:4.602e-5 | SAP:4.629e-5 | ETABS:4.582e-5`);
        }
      } catch (z) {
        console.warn("MuroQ4:", z.message);
      }
      const k = Qe();
      k && (k.settings.shellResults.val = "displacementX"), setTimeout(() => Et(), 50), et();
    }
    function Js() {
      var _a2, _b, _c, _d, _e2, _f, _g, _h;
      const t = ((_a2 = Q.L) == null ? void 0 : _a2.val) ?? 6, n = ((_b = Q.h) == null ? void 0 : _b.val) ?? 0.5, o = ((_c = Q.t) == null ? void 0 : _c.val) ?? 0.2, l = Math.round(((_d = Q.nx) == null ? void 0 : _d.val) ?? 12), s = Math.round(((_e2 = Q.ny) == null ? void 0 : _e2.val) ?? 4), d = ((_f = Q.E) == null ? void 0 : _f.val) ?? 25e6, a = ((_g = Q.nu) == null ? void 0 : _g.val) ?? 0.2, r = ((_h = Q.P) == null ? void 0 : _h.val) ?? 50, f = d / (2 * (1 + a)), i = t / l, c = n / s, b = [], w = [], E = /* @__PURE__ */ new Map(), $ = /* @__PURE__ */ new Map();
      for (let k = 0; k <= s; k++) for (let z = 0; z <= l; z++) b.push([
        z * i,
        k * c,
        0
      ]);
      const p = l + 1;
      for (let k = 0; k < s; k++) for (let z = 0; z < l; z++) w.push([
        k * p + z,
        k * p + z + 1,
        (k + 1) * p + z + 1,
        (k + 1) * p + z
      ]);
      for (let k = 0; k <= s; k++) E.set(k * p, [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
      const x = Math.floor(s / 2) * p + l;
      $.set(x, [
        0,
        0,
        -r,
        0,
        0,
        0
      ]), e.nodes.val = b, e.elements.val = w, e.nodeInputs && (e.nodeInputs.val = {
        supports: E,
        loads: $
      });
      const T = {
        elasticities: new Map(w.map((k, z) => [
          z,
          d
        ])),
        poissonsRatios: new Map(w.map((k, z) => [
          z,
          a
        ])),
        thicknesses: new Map(w.map((k, z) => [
          z,
          o
        ])),
        shearModuli: new Map(w.map((k, z) => [
          z,
          f
        ])),
        densities: new Map(w.map((k, z) => [
          z,
          u.rho * (24 / (7.85 * 9.80665))
        ]))
      };
      e.elementInputs && (e.elementInputs.val = T);
      try {
        const k = Tt(b, w, {
          supports: E,
          loads: $
        }, T);
        if (k && e.deformOutputs) {
          e.deformOutputs.val = k;
          const z = hn(b, w, T, k);
          e.analyzeOutputs && (e.analyzeOutputs.val = z);
          const P = k.deformations.get(x), v = P ? P[2] : 0, m = o * n * n * n / 12, I = r * t * t * t / (3 * d * m);
          console.log(`Viga Q4: Uz_tip=${v.toExponential(4)} | Analitico=${I.toExponential(4)} | ratio=${(Math.abs(v) / I).toFixed(4)}`);
        }
      } catch (k) {
        console.warn("VigaQ4:", k.message);
      }
      const L = Qe();
      L && (L.settings.shellResults.val = "displacementZ"), setTimeout(() => Et(), 50), et();
    }
    function Vs() {
      var _a2, _b, _c, _d, _e2, _f, _g, _h;
      const t = ((_a2 = Q.Lx) == null ? void 0 : _a2.val) ?? 4, n = ((_b = Q.Lz) == null ? void 0 : _b.val) ?? 2, o = ((_c = Q.t) == null ? void 0 : _c.val) ?? 0.15, l = Math.round(((_d = Q.nx) == null ? void 0 : _d.val) ?? 8), s = Math.round(((_e2 = Q.nz) == null ? void 0 : _e2.val) ?? 4), d = ((_f = Q.E) == null ? void 0 : _f.val) ?? 25e6, a = ((_g = Q.nu) == null ? void 0 : _g.val) ?? 0.2, r = ((_h = Q.P) == null ? void 0 : _h.val) ?? 20, f = d / (2 * (1 + a)), i = t / l, c = n / s, b = [], w = [], E = /* @__PURE__ */ new Map(), $ = /* @__PURE__ */ new Map();
      for (let z = 0; z <= s; z++) for (let P = 0; P <= l; P++) b.push([
        P * i,
        0,
        z * c
      ]);
      const p = l + 1;
      for (let z = 0; z < s; z++) for (let P = 0; P < l; P++) w.push([
        z * p + P,
        z * p + P + 1,
        (z + 1) * p + P + 1,
        (z + 1) * p + P
      ]);
      for (let z = 0; z <= s; z++) E.set(z * p, [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
      const x = [];
      for (let z = 0; z <= s; z++) x.push(z * p + l);
      const T = r / x.length;
      for (const z of x) $.set(z, [
        0,
        0,
        -T,
        0,
        0,
        0
      ]);
      e.nodes.val = b, e.elements.val = w, e.nodeInputs && (e.nodeInputs.val = {
        supports: E,
        loads: $
      });
      const L = {
        elasticities: new Map(w.map((z, P) => [
          P,
          d
        ])),
        poissonsRatios: new Map(w.map((z, P) => [
          P,
          a
        ])),
        thicknesses: new Map(w.map((z, P) => [
          P,
          o
        ])),
        shearModuli: new Map(w.map((z, P) => [
          P,
          f
        ])),
        densities: new Map(w.map((z, P) => [
          P,
          u.rho * (24 / (7.85 * 9.80665))
        ]))
      };
      e.elementInputs && (e.elementInputs.val = L);
      try {
        const z = Tt(b, w, {
          supports: E,
          loads: $
        }, L);
        if (z && e.deformOutputs) {
          e.deformOutputs.val = z;
          const P = hn(b, w, L, z);
          e.analyzeOutputs && (e.analyzeOutputs.val = P);
          const v = (s / 2 | 0) * p + l, m = z.deformations.get(v), I = m ? m[2] : 0;
          console.log(`Placa XZ Q4: Uz_tip=${I.toExponential(4)} m`);
        }
      } catch (z) {
        console.warn("PlacaXZ:", z.message);
      }
      const k = Qe();
      k && (k.settings.shellResults.val = "displacementZ"), setTimeout(() => Et(), 50), et();
    }
    function Ba() {
      var _a2, _b;
      (_a2 = document.getElementById("fem-log-panel")) == null ? void 0 : _a2.remove();
      const t = window.__femLog || [
        "<i>No hay log. Ejecuta un analisis primero.</i>"
      ], n = document.createElement("div");
      n.id = "fem-log-panel", n.style.cssText = "position:fixed;top:60px;right:10px;width:360px;max-height:500px;overflow-y:auto;background:var(--cad-bg);color:var(--cad-text);border:1px solid var(--cad-border);border-radius:8px;padding:10px;z-index:10001;font-family:'Segoe UI',system-ui,sans-serif;font-size:12px;line-height:1.6;box-shadow:0 4px 20px var(--cad-shadow);", n.innerHTML = `
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">
        <span style="font-size:14px;font-weight:bold;color:var(--cad-heading)">\u{1F4CB} Solver Log</span>
        <button id="fem-log-close" style="background:var(--cad-btn-bg);color:var(--cad-btn-text);border:1px solid var(--cad-btn-border);border-radius:3px;padding:2px 8px;cursor:pointer;font-size:11px;">\u2715</button>
      </div>
      <div style="font-family:'Segoe UI',system-ui,sans-serif;font-size:12px;line-height:1.7;">
        ${t.join("<br>")}
      </div>
    `, document.body.appendChild(n), (_b = n.querySelector("#fem-log-close")) == null ? void 0 : _b.addEventListener("click", () => n.remove());
    }
    function Da() {
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
        const n = (x) => {
          var _a3;
          return parseFloat(((_a3 = t.querySelector(`#${x}`)) == null ? void 0 : _a3.value) || "0");
        }, o = n("po-colB"), l = n("po-colH"), s = n("po-fc") * 1e3, d = n("po-fy") * 1e3, a = n("po-H"), r = n("po-L"), f = n("po-As") * 1e-4, i = n("po-nbar"), c = n("po-drift") / 100, b = n("po-ncycles"), w = t.querySelector("#pushover-status");
        w.textContent = "Generando historia de desplazamientos...";
        const E = [], $ = c * a, p = 40;
        for (let x = 1; x <= b; x++) {
          const T = $ * x / b;
          for (let L = 0; L <= p; L++) E.push(T * Math.sin(2 * Math.PI * L / p));
        }
        w.textContent = `Resolviendo pushover (${E.length} pasos)...`;
        try {
          const { cyclicPushover: x } = await ta(async () => {
            const { cyclicPushover: L } = await import("./cyclicPushoverCpp-BK4Rr9QF.js").then(async (m) => {
              await m.__tla;
              return m;
            });
            return {
              cyclicPushover: L
            };
          }, __vite__mapDeps([6,5]), import.meta.url), T = await x({
            colHeight: a,
            beamLength: r,
            col: {
              b: o,
              h: l,
              fpc: -s,
              Fy_rebar: d,
              E_rebar: 2e8,
              rebar_area: f,
              cover: 0.04,
              n_rebar: i
            },
            beam: {
              b: 0.25,
              h: 0.3,
              fpc: -s,
              Fy_rebar: d,
              E_rebar: 2e8,
              rebar_area: f * 0.7,
              cover: 0.03,
              n_rebar: i
            },
            dispHistory: E
          });
          w.textContent = `Completado: ${T.nSteps} pasos`, Ha(t.querySelector("#pushover-canvas"), T.displacements, T.forces, `Pushover: ${o * 100}x${l * 100}cm, f'c=${s / 1e3}MPa, Fy=${d / 1e3}MPa`);
        } catch (x) {
          w.textContent = `Error: ${x.message}`, console.error("Pushover failed:", x);
        }
      });
    }
    function Ha(t, n, o, l) {
      const s = t.getContext("2d");
      if (!s || n.length === 0) return;
      const d = t.width, a = t.height, r = {
        left: 55,
        right: 15,
        top: 30,
        bottom: 35
      }, f = d - r.left - r.right, i = a - r.top - r.bottom;
      s.fillStyle = "#111118", s.fillRect(0, 0, d, a);
      let c = Math.min(...n), b = Math.max(...n), w = Math.min(...o), E = Math.max(...o);
      c === b && (c -= 0.01, b += 0.01), w === E && (w -= 1, E += 1);
      const $ = b - c, p = E - w, x = (z) => r.left + (z - c) / $ * f, T = (z) => r.top + i - (z - w) / p * i;
      s.strokeStyle = "#333", s.lineWidth = 0.5, c < 0 && b > 0 && (s.strokeStyle = "#555", s.beginPath(), s.moveTo(x(0), r.top), s.lineTo(x(0), r.top + i), s.stroke()), w < 0 && E > 0 && (s.beginPath(), s.moveTo(r.left, T(0)), s.lineTo(r.left + f, T(0)), s.stroke()), s.strokeStyle = "#ff4444", s.lineWidth = 1.5, s.beginPath(), s.moveTo(x(n[0]), T(o[0]));
      for (let z = 1; z < n.length; z++) s.lineTo(x(n[z]), T(o[z]));
      s.stroke(), s.fillStyle = "#aaa", s.font = "11px monospace", s.textAlign = "center", s.fillText("Desplazamiento (m)", r.left + f / 2, a - 5), s.save(), s.translate(12, r.top + i / 2), s.rotate(-Math.PI / 2), s.fillText("Fuerza (kN)", 0, 0), s.restore(), s.fillStyle = "#ee9b00", s.font = "bold 11px monospace", s.textAlign = "center", s.fillText(l, d / 2, 15), s.fillStyle = "#888", s.font = "9px monospace", s.textAlign = "center";
      const L = $ / 5;
      for (let z = 0; z <= 5; z++) {
        const P = c + L * z;
        s.fillText((P * 1e3).toFixed(1), x(P), a - r.bottom + 15);
      }
      s.textAlign = "right";
      const k = p / 5;
      for (let z = 0; z <= 5; z++) {
        const P = w + k * z;
        s.fillText(P.toFixed(0), r.left - 5, T(P) + 3);
      }
    }
    let to = null;
    function ja() {
      if (to) {
        to.remove(), to = null;
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
    `, document.body.appendChild(t), to = t, t.querySelector("#nl-close").addEventListener("click", () => {
        t.remove(), to = null;
      }), t.querySelector("#nl-test").addEventListener("click", () => Wa(t));
    }
    function Wa(t) {
      const n = parseFloat(t.querySelector("#nl-fy").value), o = parseFloat(t.querySelector("#nl-e0").value), l = parseFloat(t.querySelector("#nl-b").value), s = parseFloat(t.querySelector("#nl-r0").value), d = parseFloat(t.querySelector("#nl-amp").value), a = parseInt(t.querySelector("#nl-cycles").value), r = 100, f = [];
      for (let U = 0; U < a; U++) {
        const le = d * (1 + U * 0.5);
        for (let ee = 0; ee < r; ee++) {
          const Z = ee / r * 2 * Math.PI;
          f.push(le * Math.sin(Z));
        }
      }
      const i = n / o, c = l * o;
      let b = 0, w = 0, E = -i, $ = i, p = 0, x = 0, T = 0, L = 0, k = 0, z = 0;
      const P = [];
      for (const U of f) {
        let le = E, ee = $, Z = p, fe = x, de = T, ke = L, Oe = k, B = z, me;
        const se = U - b;
        if (Math.abs(se) < 1e-20) {
          P.push(w);
          continue;
        }
        if ((B === 0 || B === 3) && (se < 0 ? (B = 2, fe = -i, de = -n, Z = fe, ke = 0, Oe = 0) : (B = 1, fe = i, de = n, Z = fe, ke = 0, Oe = 0)), B === 2 && se > 0) {
          B = 1, ke = b, Oe = w, b < le && (le = b);
          const Ie = (ee - le) / (2 * 1 * i), We = 1 + 0 * Math.pow(Ie, 0.8);
          fe = (n * We - c * i * We - Oe + o * ke) / (o - c), de = n * We + c * (fe - i * We), Z = ee;
        } else if (B === 1 && se < 0) {
          B = 2, ke = b, Oe = w, b > ee && (ee = b);
          const Ie = (ee - le) / (2 * 1 * i), We = 1 + 0 * Math.pow(Ie, 0.8);
          fe = (-n * We + c * i * We - Oe + o * ke) / (o - c), de = -n * We + c * (fe + i * We), Z = le;
        }
        const ue = Math.abs((Z - fe) / i);
        let te = s - 0.925 * ue / (0.15 + ue);
        te < 0.1 && (te = 0.1);
        const be = (U - ke) / (fe - ke), Ee = 1 + Math.pow(Math.abs(be), te), ae = Math.pow(Ee, 1 / te);
        me = l * be + (1 - l) * be / ae, me = me * (de - Oe) + Oe, P.push(me), b = U, w = me, E = le, $ = ee, p = Z, x = fe, T = de, L = ke, k = Oe, z = B;
      }
      const v = t.querySelector("#nl-canvas"), m = v.getContext("2d"), I = v.width, F = v.height;
      m.clearRect(0, 0, I, F);
      const N = Math.max(...f.map(Math.abs)), G = Math.max(...P.map(Math.abs)), h = (I - 40) / (2 * N), S = (F - 40) / (2 * G), y = I / 2, R = F / 2;
      m.strokeStyle = "#444", m.lineWidth = 1, m.beginPath(), m.moveTo(20, R), m.lineTo(I - 20, R), m.stroke(), m.beginPath(), m.moveTo(y, 20), m.lineTo(y, F - 20), m.stroke(), m.fillStyle = "#888", m.font = "10px monospace", m.textAlign = "center", m.fillText("\u03B5 (strain)", I - 40, R - 5), m.fillText("\u03C3 (stress)", y + 30, 15), m.fillText(`\xB1${(N * 100).toFixed(1)}%`, I - 30, R + 12), m.fillText(`\xB1${(G / 1e3).toFixed(0)} MPa`, y + 40, 30), m.strokeStyle = "#00ccff", m.lineWidth = 1.5, m.beginPath();
      for (let U = 0; U < f.length; U++) {
        const le = y + f[U] * h, ee = R - P[U] * S;
        U === 0 ? m.moveTo(le, ee) : m.lineTo(le, ee);
      }
      m.stroke(), m.strokeStyle = "#ff333366", m.lineWidth = 1, m.setLineDash([
        4,
        4
      ]), m.beginPath(), m.moveTo(20, R - n * S), m.lineTo(I - 20, R - n * S), m.stroke(), m.beginPath(), m.moveTo(20, R + n * S), m.lineTo(I - 20, R + n * S), m.stroke(), m.setLineDash([]), m.fillStyle = "#ff6666", m.font = "9px monospace", m.fillText(`Fy = ${(n / 1e3).toFixed(0)} MPa`, I - 50, R - n * S - 5);
      const K = t.querySelector("#nl-info");
      K.textContent = `Steel02: Fy=${(n / 1e3).toFixed(0)} MPa, E\u2080=${(o / 1e6).toFixed(0)} GPa, b=${l}, R\u2080=${s} \u2014 ${a} ciclos, amp=${(d * 100).toFixed(1)}%`;
    }
    function Ga() {
      var _a2, _b, _c, _d;
      const t = document.querySelector(".rpt-overlay");
      if (t) {
        t.remove();
        return;
      }
      const n = e.nodes.val, o = e.elements.val, l = ((_a2 = e.elementInputs) == null ? void 0 : _a2.val) || {}, s = ((_b = e.nodeInputs) == null ? void 0 : _b.val) || {}, d = (_c = e.deformOutputs) == null ? void 0 : _c.val;
      if ((_d = e.analyzeOutputs) == null ? void 0 : _d.val, !n.length || !o.length) {
        alert("No hay modelo cargado");
        return;
      }
      const a = ml({
        nodes: n,
        elements: o,
        nodeInputs: s,
        elementInputs: l,
        deformOutputs: d
      });
      document.body.appendChild(a);
    }
    let Hn = null;
    function Ya(t) {
      Hn && Hn.remove();
      const n = document.createElement("div");
      n.style.cssText = "position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background:#1a1a2e;color:#eee;border:2px solid #00ccff;border-radius:8px;padding:16px;z-index:10001;width:320px;font-family:monospace;font-size:12px;box-shadow:0 4px 20px rgba(0,0,0,0.5);";
      const o = bo(), l = go(), s = Object.entries(o).map(([i, c]) => `<option value="${c}">${i}</option>`).join(""), d = Object.entries(l).map(([i, c]) => `<option value="${c}">${i}</option>`).join("");
      n.innerHTML = `
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
        <b style="color:#ff6666;font-size:11px;">Frame Releases</b>
        <table style="width:100%;border-collapse:collapse;font-size:10px;margin-top:4px;">
          <tr>
            <td style="color:#888"></td>
            <td colspan="2" style="text-align:center;color:#ff6666;font-weight:bold;font-size:9px">Release</td>
            <td colspan="2" style="text-align:center;color:#00ccff;font-weight:bold;font-size:9px">Partial Fixity Springs</td>
          </tr>
          <tr>
            <td style="color:#888"></td>
            <td style="text-align:center;color:#aaa;font-size:9px">Start</td>
            <td style="text-align:center;color:#aaa;font-size:9px">End</td>
            <td style="text-align:center;color:#aaa;font-size:9px">Start</td>
            <td style="text-align:center;color:#aaa;font-size:9px">End</td>
          </tr>
          <tr><td style="color:#ccc">Axial Load</td><td style="text-align:center"><input type="checkbox" data-asgn-rel="0"></td><td style="text-align:center"><input type="checkbox" data-asgn-rel="6"></td><td><input type="number" data-asgn-spr="0" placeholder="0" style="width:45px;background:#333;color:#fff;border:1px solid #555;font-size:9px;text-align:right"></td><td><input type="number" data-asgn-spr="6" placeholder="0" style="width:45px;background:#333;color:#fff;border:1px solid #555;font-size:9px;text-align:right"></td></tr>
          <tr><td style="color:#ccc">Shear V2</td><td style="text-align:center"><input type="checkbox" data-asgn-rel="1"></td><td style="text-align:center"><input type="checkbox" data-asgn-rel="7"></td><td><input type="number" data-asgn-spr="1" placeholder="0" style="width:45px;background:#333;color:#fff;border:1px solid #555;font-size:9px;text-align:right"></td><td><input type="number" data-asgn-spr="7" placeholder="0" style="width:45px;background:#333;color:#fff;border:1px solid #555;font-size:9px;text-align:right"></td></tr>
          <tr><td style="color:#ccc">Shear V3</td><td style="text-align:center"><input type="checkbox" data-asgn-rel="2"></td><td style="text-align:center"><input type="checkbox" data-asgn-rel="8"></td><td><input type="number" data-asgn-spr="2" placeholder="0" style="width:45px;background:#333;color:#fff;border:1px solid #555;font-size:9px;text-align:right"></td><td><input type="number" data-asgn-spr="8" placeholder="0" style="width:45px;background:#333;color:#fff;border:1px solid #555;font-size:9px;text-align:right"></td></tr>
          <tr><td style="color:#ccc">Torsion</td><td style="text-align:center"><input type="checkbox" data-asgn-rel="3"></td><td style="text-align:center"><input type="checkbox" data-asgn-rel="9"></td><td><input type="number" data-asgn-spr="3" placeholder="0" style="width:45px;background:#333;color:#fff;border:1px solid #555;font-size:9px;text-align:right"></td><td><input type="number" data-asgn-spr="9" placeholder="0" style="width:45px;background:#333;color:#fff;border:1px solid #555;font-size:9px;text-align:right"></td></tr>
          <tr><td style="color:#ccc">Moment 22</td><td style="text-align:center"><input type="checkbox" data-asgn-rel="4"></td><td style="text-align:center"><input type="checkbox" data-asgn-rel="10"></td><td><input type="number" data-asgn-spr="4" placeholder="0" style="width:45px;background:#333;color:#fff;border:1px solid #555;font-size:9px;text-align:right"></td><td><input type="number" data-asgn-spr="10" placeholder="0" style="width:45px;background:#333;color:#fff;border:1px solid #555;font-size:9px;text-align:right"></td></tr>
          <tr><td style="color:#ccc">Moment 33</td><td style="text-align:center"><input type="checkbox" data-asgn-rel="5"></td><td style="text-align:center"><input type="checkbox" data-asgn-rel="11"></td><td><input type="number" data-asgn-spr="5" placeholder="0" style="width:45px;background:#333;color:#fff;border:1px solid #555;font-size:9px;text-align:right"></td><td><input type="number" data-asgn-spr="11" placeholder="0" style="width:45px;background:#333;color:#fff;border:1px solid #555;font-size:9px;text-align:right"></td></tr>
        </table>
        <div style="color:#888;font-size:9px;margin-top:2px;">Release = condensaci\xF3n est\xE1tica (DOF libre). Spring = conexi\xF3n semi-r\xEDgida.</div>
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
    `, document.body.appendChild(n), Hn = n;
      const a = n.querySelector("#asgn-type"), r = n.querySelector("#asgn-params");
      function f() {
        const i = a.value;
        let c = "";
        i === "rect" ? c = `<div style="display:flex;gap:6px;"><label>b(m):<input id="ap-b" type="number" value="0.30" step="0.05" min="0.1" max="2" style="width:70px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label>
                <label>h(m):<input id="ap-h" type="number" value="0.50" step="0.05" min="0.1" max="2" style="width:70px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label></div>` : i === "circ" ? c = '<label>d(m):<input id="ap-d" type="number" value="0.40" step="0.05" min="0.1" max="2" style="width:70px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label>' : i === "W" ? c = `<select id="ap-profile" style="background:#333;color:#fff;border:1px solid #555;padding:3px;width:100%;">${s}</select>` : i === "HSS" ? c = `<select id="ap-profile" style="background:#333;color:#fff;border:1px solid #555;padding:3px;width:100%;">${d}</select>` : i === "I-param" ? c = `<div style="display:grid;grid-template-columns:1fr 1fr;gap:4px;">
          <label>bf(m):<input id="ap-bf" type="number" value="0.20" step="0.01" style="width:65px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label>
          <label>h(m):<input id="ap-hf" type="number" value="0.40" step="0.01" style="width:65px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label>
          <label>tf(m):<input id="ap-tf" type="number" value="0.015" step="0.001" style="width:65px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label>
          <label>tw(m):<input id="ap-tw" type="number" value="0.010" step="0.001" style="width:65px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label>
        </div>` : i === "tubular" && (c = `<div style="display:flex;gap:6px;">
          <label>b(m):<input id="ap-bc" type="number" value="0.20" step="0.01" style="width:60px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label>
          <label>h(m):<input id="ap-hc" type="number" value="0.30" step="0.01" style="width:60px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label>
          <label>t(m):<input id="ap-t" type="number" value="0.008" step="0.001" style="width:60px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label>
        </div>`), r.innerHTML = c;
      }
      a.addEventListener("change", f), f(), n.querySelector("#asgn-close").addEventListener("click", () => {
        n.remove(), Hn = null;
      }), n.querySelector("#asgn-apply").addEventListener("click", () => {
        var _a2, _b, _c, _d, _e2, _f, _g, _h;
        const i = a.value, c = {
          secType: i
        };
        i === "rect" ? (c.b = parseFloat(n.querySelector("#ap-b").value), c.h = parseFloat(n.querySelector("#ap-h").value), c.material = 0) : i === "circ" ? (c.b = parseFloat(n.querySelector("#ap-d").value), c.material = 0) : i === "W" || i === "HSS" ? (c.profileIdx = parseInt(n.querySelector("#ap-profile").value), c.material = 1) : i === "I-param" ? (c.bf = parseFloat(n.querySelector("#ap-bf").value), c.hf = parseFloat(n.querySelector("#ap-hf").value), c.tf = parseFloat(n.querySelector("#ap-tf").value), c.tw = parseFloat(n.querySelector("#ap-tw").value), c.material = 1) : i === "tubular" && (c.bc = parseFloat(n.querySelector("#ap-bc").value), c.hc = parseFloat(n.querySelector("#ap-hc").value), c.t = parseFloat(n.querySelector("#ap-t").value), c.material = 1);
        const b = new Array(12).fill(false), w = new Array(12).fill(0);
        n.querySelectorAll("input[data-asgn-rel]").forEach((E) => {
          b[parseInt(E.dataset.asgnRel)] = E.checked;
        }), n.querySelectorAll("input[data-asgn-spr]").forEach((E) => {
          const $ = parseFloat(E.value);
          $ > 0 && (w[parseInt(E.dataset.asgnSpr)] = $);
        }), c.releases12 = b, c.springs12 = w, c.releaseRotStart = b[4] || b[5], c.releaseRotEnd = b[10] || b[11], c.releaseAxial = b[0], c.releaseTorsion = b[3], c.modI = parseFloat((_a2 = n.querySelector("#asgn-mod-i")) == null ? void 0 : _a2.value) || 1, c.modA = parseFloat((_b = n.querySelector("#asgn-mod-a")) == null ? void 0 : _b.value) || 1, c.modJ = parseFloat((_c = n.querySelector("#asgn-mod-j")) == null ? void 0 : _c.value) || 1, c.modAs2 = parseFloat((_d = n.querySelector("#asgn-mod-as2")) == null ? void 0 : _d.value) ?? 1, c.modAs3 = parseFloat((_e2 = n.querySelector("#asgn-mod-as3")) == null ? void 0 : _e2.value) ?? 1, c.modI3 = parseFloat((_f = n.querySelector("#asgn-mod-i3")) == null ? void 0 : _f.value) || 1, c.modMass = parseFloat((_g = n.querySelector("#asgn-mod-mass")) == null ? void 0 : _g.value) || 1, c.modWeight = parseFloat((_h = n.querySelector("#asgn-mod-weight")) == null ? void 0 : _h.value) || 1, t.forEach((E) => he.set(E, {
          ...c
        })), n.remove(), Hn = null, yn(), e.elementInputs.val = {
          ...e.elementInputs.val
        };
      }), n.querySelector("#asgn-remove").addEventListener("click", () => {
        t.forEach((i) => he.delete(i)), n.remove(), Hn = null, yn(), e.elementInputs.val = {
          ...e.elementInputs.val
        };
      });
    }
    let jn = null;
    function Ja(t) {
      var _a2, _b, _c;
      jn && jn.remove();
      const n = e.nodes.val, o = e.elements.val[t];
      if (!o || o.length !== 2) return;
      const l = n[o[0]], s = n[o[1]], d = Math.abs(s[0] - l[0]), a = Math.abs(s[1] - l[1]), r = Math.abs(s[2] - l[2]), f = a > d && a > r, i = Math.sqrt(d * d + a * a + r * r), c = Me.get(t) ?? 0, b = (_c = (_b = (_a2 = e.elementInputs) == null ? void 0 : _a2.val) == null ? void 0 : _b.sectionShapes) == null ? void 0 : _c.get(t), w = (b == null ? void 0 : b.name) || (b ? `${b.type} ${((b.b ?? 0) * 100).toFixed(0)}x${((b.h ?? 0) * 100).toFixed(0)}` : "\u2014"), E = document.createElement("div");
      E.style.cssText = "position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background:#1a1a2e;color:#eee;border:2px solid #ff9900;border-radius:8px;padding:16px;z-index:10000;min-width:280px;font-family:monospace;font-size:13px;box-shadow:0 4px 20px rgba(0,0,0,0.5);", E.innerHTML = `
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
        <b style="color:#ff9900;">Elemento ${t}</b>
        <button id="ep-close" style="background:none;border:none;color:#888;cursor:pointer;font-size:18px;">\u2715</button>
      </div>
      <div style="margin-bottom:8px;">
        <span style="color:#888;">Tipo:</span> ${f ? "Columna" : "Viga"} &nbsp;
        <span style="color:#888;">Piso:</span> ${c + 1} &nbsp;
        <span style="color:#888;">L:</span> ${i.toFixed(3)} m
      </div>
      <div style="margin-bottom:8px;">
        <span style="color:#888;">Secci\xF3n:</span> <span style="color:#00ccff;">${w}</span>
      </div>
      <div style="margin-bottom:8px;">
        <span style="color:#888;">Nodos:</span> ${o[0]} \u2192 ${o[1]}
      </div>
      <hr style="border-color:#333;margin:12px 0;">
      <div style="display:flex;gap:8px;">
        <button id="ep-delete" style="flex:1;padding:8px;background:#cc3333;color:#fff;border:none;border-radius:4px;cursor:pointer;font-weight:bold;">\u{1F5D1} Eliminar</button>
        <button id="ep-inspect" style="flex:1;padding:8px;background:#336699;color:#fff;border:none;border-radius:4px;cursor:pointer;font-weight:bold;">\u{1F50D} Inspect</button>
      </div>
    `, document.body.appendChild(E), jn = E, E.querySelector("#ep-close").addEventListener("click", () => {
        E.remove(), jn = null, Ln();
      }), E.querySelector("#ep-delete").addEventListener("click", () => {
        X.add(t), E.remove(), jn = null, Ln(), Pe();
      }), E.querySelector("#ep-inspect").addEventListener("click", () => {
        E.remove(), jn = null, _s(t);
      });
    }
    setTimeout(() => {
      const t = document.getElementById("viewer");
      if (!t) return;
      const n = t.querySelector("canvas");
      if (!n) return;
      let o = null, l = null;
      const s = 5;
      function d(f) {
        const i = Qe();
        if (!i) return null;
        const c = i.controls.object, b = new Ne(f[0], f[1], f[2]);
        b.project(c);
        const w = n.getBoundingClientRect();
        return {
          x: (b.x + 1) / 2 * w.width,
          y: (-b.y + 1) / 2 * w.height
        };
      }
      function a(f, i, c, b, w) {
        const E = Math.min(f, c), $ = Math.max(f, c), p = Math.min(i, b), x = Math.max(i, b), T = e.nodes.val, L = e.elements.val, k = [];
        for (let z = 0; z < L.length; z++) {
          const P = L[z], v = P.map((m) => d(T[m])).filter(Boolean);
          if (v.length !== 0) if (w) v.every((I) => I.x >= E && I.x <= $ && I.y >= p && I.y <= x) && k.push(z);
          else {
            if (v.some((I) => I.x >= E && I.x <= $ && I.y >= p && I.y <= x)) {
              k.push(z);
              continue;
            }
            if (P.length === 2) {
              const I = v[0], F = v[1];
              r(I.x, I.y, F.x, F.y, E, p, $, x) && k.push(z);
            }
          }
        }
        return k;
      }
      function r(f, i, c, b, w, E, $, p) {
        const x = (L, k) => L >= w && L <= $ && k >= E && k <= p;
        if (x(f, i) || x(c, b)) return true;
        const T = (L, k, z, P, v, m, I, F) => {
          const N = (z - L) * (F - m) - (P - k) * (I - v);
          if (Math.abs(N) < 1e-10) return false;
          const G = ((v - L) * (F - m) - (m - k) * (I - v)) / N, h = ((v - L) * (P - k) - (m - k) * (z - L)) / N;
          return G >= 0 && G <= 1 && h >= 0 && h <= 1;
        };
        return T(f, i, c, b, w, E, $, E) || T(f, i, c, b, $, E, $, p) || T(f, i, c, b, w, p, $, p) || T(f, i, c, b, w, E, w, p);
      }
      n.addEventListener("mousedown", (f) => {
        Jt && (o = {
          x: f.offsetX,
          y: f.offsetY
        });
      }), n.addEventListener("mousemove", (f) => {
        if (fn) {
          const c = Qe();
          if (!c) return;
          const b = Rs(f.clientX, f.clientY, c.camera, c.rendererElm);
          if (St.track && b.snapType === "node" && b.nodeIdx !== null && b.nodeIdx !== An && Aa(b.nodeIdx), St.track && An !== null && b.worldPos && b.snapType !== "node") {
            const w = La(b.worldPos, An);
            w && (b.worldPos = w, b.snapType = "grid");
          }
          if (An !== null && b.worldPos) {
            const w = e.nodes.val[An];
            w && Fs(f.clientX, f.clientY, new Ne(...w), b.worldPos);
          } else if (yt !== null && b.worldPos) {
            const w = e.nodes.val[yt];
            w && Fs(f.clientX, f.clientY, new Ne(...w), b.worldPos);
          } else en && (en.remove(), en = null);
          b.nodeIdx, Ps(b), n.style.cursor = b.snapType !== "free" ? "pointer" : "crosshair";
          return;
        }
        if (!on && !Jt) return;
        if (Jt && o) {
          const c = f.offsetX - o.x, b = f.offsetY - o.y;
          if (Math.abs(c) > s || Math.abs(b) > s) {
            l || (l = document.createElement("div"), l.style.cssText = "position:absolute;pointer-events:none;z-index:9999;", n.parentElement.style.position = "relative", n.parentElement.appendChild(l));
            const w = c > 0, E = Math.min(o.x, f.offsetX), $ = Math.min(o.y, f.offsetY), p = Math.abs(c), x = Math.abs(b);
            l.style.left = E + "px", l.style.top = $ + "px", l.style.width = p + "px", l.style.height = x + "px", l.style.border = w ? "2px solid #3399ff" : "2px dashed #33ff33", l.style.background = w ? "rgba(51,153,255,0.1)" : "rgba(51,255,51,0.1)", n.style.cursor = "crosshair";
            return;
          }
        }
        const i = Go(f);
        if (i >= 0) Ns(i), n.style.cursor = "pointer";
        else {
          if (Vt) {
            const c = Qe();
            c == null ? void 0 : c.scene.remove(Vt), Vt = null, c == null ? void 0 : c.render();
          }
          n.style.cursor = Jt ? "crosshair" : "";
        }
      }), n.addEventListener("mouseup", (f) => {
        if (Jt && o) {
          const i = f.offsetX - o.x, c = f.offsetY - o.y;
          if (Math.abs(i) > s || Math.abs(c) > s) {
            const b = i > 0, w = a(o.x, o.y, f.offsetX, f.offsetY, b);
            f.ctrlKey || f.metaKey || (xt.clear(), En()), w.forEach(($) => {
              xt.has($) || (xt.add($), Ho($));
            }), Sn();
          }
          l && (l.remove(), l = null), o = null, n.style.cursor = "crosshair";
          return;
        }
        o = null;
      }), n.addEventListener("click", (f) => {
        if (fn) {
          const i = Qe();
          if (!i) return;
          const c = Rs(f.clientX, f.clientY, i.camera, i.rendererElm);
          (c.worldPos || c.nodeIdx !== null) && (Fa(c), Ps(c));
          return;
        }
        if (Jt) {
          if (l) return;
          const i = Go(f), c = f.ctrlKey || f.metaKey;
          if (i >= 0) {
            if (c) if (xt.has(i)) {
              xt.delete(i);
              const b = wn.findIndex((w) => w.__elemIdx === i);
              if (b >= 0) {
                const w = Qe();
                w == null ? void 0 : w.scene.remove(wn[b]), wn[b].geometry.dispose(), wn[b].material.dispose(), wn.splice(b, 1), w == null ? void 0 : w.render();
              }
            } else xt.add(i), Ho(i);
            else xt.clear(), En(), xt.add(i), Ho(i);
            Sn();
          } else c || (xt.clear(), En(), Sn());
          return;
        }
        if (on) {
          const i = Go(f);
          i >= 0 && (Ns(i), Ja(i));
        }
      });
    }, 500), Vn.derive(() => {
      var _a2;
      e.nodes.val, e.elements.val, (_a2 = e.nodeInputs) == null ? void 0 : _a2.val, et();
    }), Ze.modal = (t) => {
      var _a2, _b;
      if (t === void 0 && (t = !_e), _e = t, (_a2 = Le.querySelector("#cad3d-modal")) == null ? void 0 : _a2.classList.toggle("active", _e), _e) {
        const o = Qe();
        ((_b = o == null ? void 0 : o.settings) == null ? void 0 : _b.loads) && (Be = o.settings.loads.rawVal, o.settings.loads.val = false), Co(), Le.querySelector("#cad3d-mode-prev").style.display = "", Le.querySelector("#cad3d-mode-next").style.display = "", Le.querySelector("#cad3d-mode-label").style.display = "";
      } else Fo(), Le.querySelector("#cad3d-mode-prev").style.display = "none", Le.querySelector("#cad3d-mode-next").style.display = "none", Le.querySelector("#cad3d-mode-label").style.display = "none", A && A !== "placa-q4" && A !== "placa-3q" && Pe(), setTimeout(() => {
        var _a3;
        const o = Qe();
        ((_a3 = o == null ? void 0 : o.settings) == null ? void 0 : _a3.loads) && Be && (o.settings.loads.val = true);
      }, 600);
      console.log(`Modal analysis: ${_e ? "ON" : "OFF"}`);
    }, Ze.setMode = (t) => {
      var _a2;
      if (!(Fe == null ? void 0 : Fe.modeShapes)) {
        console.error("No modal results");
        return;
      }
      ye = Math.max(0, Math.min(t, Fe.modeShapes.length - 1));
      const n = Fe.modeShapes[ye], { extent: o } = $n();
      let l = 0;
      for (let d = 0; d < Te.length; d++) {
        const a = n[d * 6] || 0, r = n[d * 6 + 1] || 0, f = n[d * 6 + 2] || 0;
        l = Math.max(l, Math.sqrt(a * a + r * r + f * f));
      }
      Ye = l > 1e-12 ? o * 0.05 / l : 1, eo();
      const s = Le.querySelector("#cad3d-mode-label");
      s && Fe.frequencies && (s.textContent = `Modo ${ye + 1} \u2014 ${Fe.frequencies[ye].toFixed(2)} Hz`), console.log(`Modo ${ye + 1}: f = ${(_a2 = Fe.frequencies) == null ? void 0 : _a2[ye].toFixed(4)} Hz`);
    }, window.cad = Ze, console.log("FEM Studio CLI ready. Type cad.help() for commands."), setTimeout(() => {
      document.body.appendChild(Le), document.body.appendChild(ct.div);
    }, 0), setTimeout(() => {
      e.nodes.val.length === 0 && (tt("muro-q4"), Uo(), zs("muro-q4"), setTimeout(() => {
        A === "muro-q4" && an();
      }, 200));
    }, 100);
    const no = document.createElement("button");
    no.id = "mobile-menu-btn", no.innerHTML = "\u2630", no.addEventListener("click", () => {
      const t = document.getElementById("cad3d-panel");
      t && (t.classList.toggle("mobile-open"), no.innerHTML = t.classList.contains("mobile-open") ? "\u2715" : "\u2630");
    }), document.body.appendChild(no);
    const mn = document.createElement("button");
    mn.id = "fullscreen-btn", mn.innerHTML = "\u26F6", mn.title = "Pantalla completa", mn.style.cssText = `
    position: fixed; bottom: 20px; right: 78px; z-index: 9999999;
    width: 48px; height: 48px; border-radius: 50%;
    background: linear-gradient(135deg, #333, #555);
    color: white; border: 3px solid rgba(255,255,255,0.2);
    font-size: 22px; cursor: pointer;
    box-shadow: 0 4px 15px rgba(0,0,0,0.4);
    transition: transform 0.2s, box-shadow 0.2s;
    display: flex; align-items: center; justify-content: center;
  `, mn.addEventListener("mouseenter", () => {
      mn.style.transform = "scale(1.15)";
    }), mn.addEventListener("mouseleave", () => {
      mn.style.transform = "scale(1)";
    }), mn.addEventListener("click", () => {
      document.fullscreenElement ? document.exitFullscreen().catch(() => {
      }) : document.documentElement.requestFullscreen().catch(() => {
      });
    }), document.body.appendChild(mn), document.body.appendChild(Sl());
    const Us = document.createElement("span");
    return Us.style.display = "none", Us;
  };
});
export {
  __tla,
  ca as a,
  ul as c,
  tr as g
};
