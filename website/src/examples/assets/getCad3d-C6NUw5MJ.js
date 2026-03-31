const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./calcPanel-C1Mz4Itg.js","./getMesh-B1dmlgUt.js","./__vite-browser-external-D7Ct-6yo.js","./pureFunctionsAny.generated-JAcEVsJ7.js","./analyze-ClLKGn9k.js","./didacticCpp-C93PWeaP.js","./cyclicPushoverCpp-C_AWr1zl.js"])))=>i.map(i=>d[i]);
import { d as Pt, _ as na, p as ts, m as Xa, s as Ka, __tla as __tla_0 } from "./didacticCpp-C93PWeaP.js";
import { v as Xo, P as rn, g as Za, a as Qa, o as el } from "./theme-CzzIlc4y.js";
import { G as dn, b as tl, M as sa, D as aa, B as ro, c as En, d as ol, C as nl, e as fa, V as Ne, P as zo, R as la, f as ra, g as Jo, h as Vo, i as sl, S as al, j as ll, F as Ro, a as Uo, L as Oo, k as rl, l as il, A as gn, T as os, m as hn, n as xn, o as cl, p as dl } from "./Text-CBH-tcJP.js";
import { g as Sn, b as In, a as yo } from "./analyze-ClLKGn9k.js";
import { g as $o, __tla as __tla_1 } from "./getMesh-B1dmlgUt.js";
import { n as _o, s as Mo, m as co, t as cs } from "./pureFunctionsAny.generated-JAcEVsJ7.js";
let pa, ml, or;
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
  const is = [
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
  ], Ko = [
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
  function pl(e, b) {
    return e === "kN" && b === "m" ? "kPa" : e === "kN" && b === "mm" || e === "N" && b === "mm" ? "MPa" : e === "N" && b === "m" ? "Pa" : e === "kip" && b === "in" ? "ksi" : e === "kip" && b === "ft" ? "ksf" : `${e}/${b}\xB2`;
  }
  const No = {
    E: 2e8,
    G: 77e6,
    A: 0.01,
    Iz: 833e-7,
    Iy: 833e-7,
    J: 141e-6,
    rho: 7.85
  };
  function qo(e, b) {
    const P = is.find((G) => G.id === e), M = Ko.find((G) => G.id === b), V = P.toKN, H = M.toM, Z = (G, ye, z) => z / (Math.pow(V, G) * Math.pow(H, ye));
    let J, _;
    switch (e) {
      case "kN":
        J = 10, _ = [
          -100,
          100,
          1
        ];
        break;
      case "tonf":
        J = 1, _ = [
          -20,
          20,
          0.5
        ];
        break;
      case "kgf":
        J = 1e3, _ = [
          -1e4,
          1e4,
          100
        ];
        break;
      case "kip":
        J = 10, _ = [
          -200,
          200,
          5
        ];
        break;
      case "lb":
        J = 5e3, _ = [
          -5e4,
          5e4,
          500
        ];
        break;
      case "N":
        J = 1e4, _ = [
          -1e5,
          1e5,
          1e3
        ];
        break;
    }
    return {
      id: `${e}-${b}`,
      label: `${P.label}, ${M.label}`,
      force: P.label,
      length: M.label,
      stress: pl(e, b),
      moment: `${P.label}\xB7${M.label}`,
      E: Z(1, -2, No.E),
      G: Z(1, -2, No.G),
      A: Z(0, 2, No.A),
      Iz: Z(0, 4, No.Iz),
      Iy: Z(0, 4, No.Iy),
      J: Z(0, 4, No.J),
      rho: Z(1, -4, No.rho),
      spanRange: M.spanRange,
      heightRange: M.heightRange,
      defaultSpan: M.defaultSpan,
      defaultHeight: M.defaultHeight,
      defaultForce: J,
      forceRange: _,
      galponSpan: M.galponSpan,
      galponLength: M.galponLength,
      galponHeight: M.galponHeight,
      galponRise: M.galponRise
    };
  }
  qo("kN", "m"), qo("kip", "in");
  function vn() {
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
  function fl(e) {
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
      "placa-xy": [
        {
          key: "Lx",
          val: 4,
          min: 1,
          max: 15,
          step: 0.5,
          label: `Lx (${e.length})`
        },
        {
          key: "Ly",
          val: 2,
          min: 0.5,
          max: 10,
          step: 0.5,
          label: `Ly (${e.length})`
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
  function ul(e) {
    const b = e.force, [P, M, V] = e.forceRange;
    return {
      truss: [
        {
          key: "CM",
          val: -e.defaultForce,
          min: P,
          max: 0,
          step: V,
          label: `CM (${b})`
        },
        {
          key: "CV",
          val: 0,
          min: P,
          max: 0,
          step: V,
          label: `CV (${b})`
        }
      ],
      beams: [
        {
          key: "CM",
          val: 0,
          min: P,
          max: 0,
          step: V,
          label: `CM (${b})`
        },
        {
          key: "CV",
          val: 0,
          min: P,
          max: 0,
          step: V,
          label: `CV (${b})`
        },
        {
          key: "Ex",
          val: e.defaultForce,
          min: P,
          max: M,
          step: V,
          label: `Ex sismo (${b})`
        }
      ],
      "3d": [
        {
          key: "CM",
          val: 0,
          min: P,
          max: 0,
          step: V,
          label: `CM (${b})`
        },
        {
          key: "CV",
          val: 0,
          min: P,
          max: 0,
          step: V,
          label: `CV (${b})`
        },
        {
          key: "Ex",
          val: e.defaultForce * 3,
          min: P,
          max: M,
          step: V,
          label: `Ex sismo (${b})`
        }
      ],
      frame: [
        {
          key: "CM",
          val: -e.defaultForce,
          min: P,
          max: 0,
          step: V,
          label: `CM (${b})`
        },
        {
          key: "CV",
          val: 0,
          min: P,
          max: 0,
          step: V,
          label: `CV (${b})`
        },
        {
          key: "Ex",
          val: 0,
          min: P,
          max: M,
          step: V,
          label: `Ex sismo (${b})`
        }
      ],
      edificio: [
        {
          key: "CM",
          val: -e.defaultForce,
          min: P,
          max: 0,
          step: V,
          label: `CM (${b})`
        },
        {
          key: "CV",
          val: 0,
          min: P,
          max: 0,
          step: V,
          label: `CV (${b})`
        },
        {
          key: "Ex",
          val: 0,
          min: P,
          max: M,
          step: V,
          label: `Ex sismo (${b})`
        },
        {
          key: "Ey",
          val: 0,
          min: P,
          max: M,
          step: V,
          label: `Ey sismo (${b})`
        }
      ],
      galpon: [
        {
          key: "CM",
          val: -e.defaultForce,
          min: P,
          max: 0,
          step: V,
          label: `CM (${b})`
        },
        {
          key: "CV",
          val: 0,
          min: P,
          max: 0,
          step: V,
          label: `CV (${b})`
        }
      ],
      barra: [
        {
          key: "F",
          val: e.defaultForce * 10,
          min: e.forceRange[0] * 10,
          max: e.forceRange[1] * 10,
          step: Math.abs(e.forceRange[2]) * 5,
          label: `F axial (${b})`
        }
      ],
      "placa-3q": [
        {
          key: "CM",
          val: 0,
          min: P,
          max: 0,
          step: V,
          label: `CM (${b})`
        }
      ],
      "placa-q4": [
        {
          key: "CM",
          val: 0,
          min: P,
          max: 0,
          step: V,
          label: `CM (${b})`
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
      "placa-xy": [],
      pergola: [],
      eiffel: [],
      arco: [],
      puente: [],
      twisted: [],
      burj: [],
      opera: [],
      diagrid: []
    };
  }
  ml = function() {
    const e = document.createElement("div");
    e.id = "modal-results", e.style.cssText = `
    position: fixed; bottom: 10px; left: 10px; z-index: 9999;
    background: rgba(0,0,0,0.92); color: #0f0; font-family: monospace;
    font-size: 12px; border-radius: 6px;
    max-width: 720px; overflow-x: auto; pointer-events: auto;
    border: 1px solid #0f03;
  `;
    let b = false;
    function P(M, V) {
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
      ], Z = [
        0,
        0,
        0,
        0,
        0,
        0
      ];
      let J = `<div id="modal-header" style="display:flex; align-items:center; justify-content:space-between; padding:8px 12px; cursor:default;">
  <b style="color:#ff0">\u26A1 MODAL ANALYSIS \u2014 ${V.title}</b>
  <div style="display:flex; gap:4px; margin-left:12px;">
    <button id="modal-copy" style="padding:2px 8px; font-size:10px; cursor:pointer;
      background:#2d6a4f; color:#fff; border:1px solid #40916c; border-radius:3px;" title="Copiar tabla">\u{1F4CB}</button>
    <button id="modal-minimize" style="padding:2px 8px; font-size:10px; cursor:pointer;
      background:#555; color:#fff; border:1px solid #777; border-radius:3px;" title="Minimizar">\u25AC</button>
  </div>
</div>`;
      if (J += '<div id="modal-body" style="padding:0 12px 10px 12px;">', V.properties) for (const _ of V.properties) J += `<span style="color:#888">${_}</span>
`;
      J += `<table style="border-collapse:collapse; color:#0f0; font-size:11px; margin-top:4px">
<tr style="color:#ff0; border-bottom:1px solid #ff03">
  <th style="padding:2px 6px">Mode</th>
  <th style="padding:2px 6px">Freq (Hz)</th>
  <th style="padding:2px 6px">Period (s)</th>
  <th style="padding:2px 6px">\u03C9 (rad/s)</th>`;
      for (const _ of H) J += `<th style="padding:2px 5px">${_}</th>`;
      if (J += `<th style="padding:2px 5px; color:#0ff">\u03A3Ux</th>
  <th style="padding:2px 5px; color:#0ff">\u03A3Uy</th>
  <th style="padding:2px 5px; color:#0ff">\u03A3Rz</th></tr>`, M.frequencies.forEach((_, G) => {
        var _a2;
        const ye = _ > 0 ? 1 / _ : 0, z = _ * 2 * Math.PI, W = ((_a2 = M.massParticipation) == null ? void 0 : _a2[G]) || [
          0,
          0,
          0,
          0,
          0,
          0
        ];
        for (let ve = 0; ve < 6; ve++) Z[ve] += W[ve];
        J += `<tr style="border-bottom:1px solid #fff1">
  <td style="padding:2px 6px; text-align:center">${G + 1}</td>
  <td style="padding:2px 6px; text-align:right">${_.toFixed(4)}</td>
  <td style="padding:2px 6px; text-align:right">${ye.toFixed(4)}</td>
  <td style="padding:2px 6px; text-align:right">${z.toFixed(2)}</td>`;
        for (let ve = 0; ve < 6; ve++) {
          const me = (W[ve] * 100).toFixed(1), pe = W[ve] > 0.5 ? "#f00" : W[ve] > 0.1 ? "#ff0" : "#0f0";
          J += `<td style="padding:2px 5px; text-align:right; color:${pe}">${me}%</td>`;
        }
        J += `<td style="padding:2px 5px; text-align:right; color:#0ff">${(Z[0] * 100).toFixed(1)}%</td>
  <td style="padding:2px 5px; text-align:right; color:#0ff">${(Z[1] * 100).toFixed(1)}%</td>
  <td style="padding:2px 5px; text-align:right; color:#0ff">${(Z[5] * 100).toFixed(1)}%</td></tr>`;
      }), J += "</table></div>", e.innerHTML = J, b) {
        const _ = e.querySelector("#modal-body"), G = e.querySelector("#modal-minimize");
        _ && (_.style.display = "none"), G && (G.textContent = "\u25A2", G.title = "Restaurar");
      }
      (_a = e.querySelector("#modal-minimize")) == null ? void 0 : _a.addEventListener("click", () => {
        b = !b;
        const _ = e.querySelector("#modal-body"), G = e.querySelector("#modal-minimize");
        b ? (_.style.display = "none", G.textContent = "\u25A2", G.title = "Restaurar") : (_.style.display = "block", G.textContent = "\u25AC", G.title = "Minimizar");
      }), (_b = e.querySelector("#modal-copy")) == null ? void 0 : _b.addEventListener("click", () => {
        const _ = [];
        _.push(`Modal Analysis \u2014 ${V.title}`);
        const G = `Mode  Freq(Hz)  Period(s)  \u03C9(rad/s)  ${H.join("     ")}  \u03A3Ux    \u03A3Uy    \u03A3Rz`;
        _.push(G), _.push("-".repeat(G.length));
        const ye = [
          0,
          0,
          0,
          0,
          0,
          0
        ];
        M.frequencies.forEach((W, ve) => {
          var _a2;
          const me = W > 0 ? 1 / W : 0, pe = W * 2 * Math.PI, se = ((_a2 = M.massParticipation) == null ? void 0 : _a2[ve]) || [
            0,
            0,
            0,
            0,
            0,
            0
          ];
          for (let D = 0; D < 6; D++) ye[D] += se[D];
          const q = se.map((D) => ((D * 100).toFixed(1) + "%").padStart(6)).join(" ");
          _.push(`${String(ve + 1).padStart(4)}  ${W.toFixed(4).padStart(9)}  ${me.toFixed(4).padStart(9)}  ${pe.toFixed(2).padStart(9)}  ${q}  ${(ye[0] * 100).toFixed(1).padStart(5)}%  ${(ye[1] * 100).toFixed(1).padStart(5)}%  ${(ye[5] * 100).toFixed(1).padStart(5)}%`);
        }), navigator.clipboard.writeText(_.join(`
`));
        const z = e.querySelector("#modal-copy");
        z.textContent = "\u2713", setTimeout(() => z.textContent = "\u{1F4CB}", 1500);
      });
    }
    return {
      div: e,
      render: P
    };
  };
  const Re = 64516e-8, O = 416231e-12, ne = 0.0254, Ao = [
    {
      name: "W6x9",
      type: "W",
      A: 2.68 * Re,
      Iz: 16.4 * O,
      Iy: 2.2 * O,
      J: 0.0405 * O,
      d: 5.9 * ne,
      bf: 3.94 * ne
    },
    {
      name: "W6x15",
      type: "W",
      A: 4.43 * Re,
      Iz: 29.1 * O,
      Iy: 9.32 * O,
      J: 0.103 * O,
      d: 5.99 * ne,
      bf: 5.99 * ne
    },
    {
      name: "W6x20",
      type: "W",
      A: 5.87 * Re,
      Iz: 41.4 * O,
      Iy: 13.3 * O,
      J: 0.204 * O,
      d: 6.2 * ne,
      bf: 6.02 * ne
    },
    {
      name: "W8x10",
      type: "W",
      A: 2.96 * Re,
      Iz: 30.8 * O,
      Iy: 2.09 * O,
      J: 0.0426 * O,
      d: 7.89 * ne,
      bf: 3.94 * ne
    },
    {
      name: "W8x18",
      type: "W",
      A: 5.26 * Re,
      Iz: 61.9 * O,
      Iy: 7.97 * O,
      J: 0.172 * O,
      d: 8.14 * ne,
      bf: 5.25 * ne
    },
    {
      name: "W8x24",
      type: "W",
      A: 7.08 * Re,
      Iz: 82.7 * O,
      Iy: 18.3 * O,
      J: 0.346 * O,
      d: 7.93 * ne,
      bf: 6.5 * ne
    },
    {
      name: "W8x31",
      type: "W",
      A: 9.13 * Re,
      Iz: 110 * O,
      Iy: 37.1 * O,
      J: 0.536 * O,
      d: 8 * ne,
      bf: 7.995 * ne
    },
    {
      name: "W8x40",
      type: "W",
      A: 11.7 * Re,
      Iz: 146 * O,
      Iy: 49.1 * O,
      J: 0.871 * O,
      d: 8.25 * ne,
      bf: 8.07 * ne
    },
    {
      name: "W8x48",
      type: "W",
      A: 14.1 * Re,
      Iz: 184 * O,
      Iy: 60.9 * O,
      J: 1.45 * O,
      d: 8.5 * ne,
      bf: 8.11 * ne
    },
    {
      name: "W8x67",
      type: "W",
      A: 19.7 * Re,
      Iz: 272 * O,
      Iy: 88.6 * O,
      J: 3.54 * O,
      d: 9 * ne,
      bf: 8.28 * ne
    },
    {
      name: "W10x12",
      type: "W",
      A: 3.54 * Re,
      Iz: 53.8 * O,
      Iy: 2.18 * O,
      J: 0.0547 * O,
      d: 9.87 * ne,
      bf: 3.96 * ne
    },
    {
      name: "W10x22",
      type: "W",
      A: 6.49 * Re,
      Iz: 118 * O,
      Iy: 11.4 * O,
      J: 0.239 * O,
      d: 10.17 * ne,
      bf: 5.75 * ne
    },
    {
      name: "W10x33",
      type: "W",
      A: 9.71 * Re,
      Iz: 171 * O,
      Iy: 36.6 * O,
      J: 0.583 * O,
      d: 9.73 * ne,
      bf: 7.96 * ne
    },
    {
      name: "W10x49",
      type: "W",
      A: 14.4 * Re,
      Iz: 272 * O,
      Iy: 93.4 * O,
      J: 1.39 * O,
      d: 9.98 * ne,
      bf: 10 * ne
    },
    {
      name: "W10x68",
      type: "W",
      A: 20 * Re,
      Iz: 394 * O,
      Iy: 134 * O,
      J: 3.56 * O,
      d: 10.4 * ne,
      bf: 10.13 * ne
    },
    {
      name: "W10x100",
      type: "W",
      A: 29.4 * Re,
      Iz: 623 * O,
      Iy: 207 * O,
      J: 10.9 * O,
      d: 11.1 * ne,
      bf: 10.34 * ne
    },
    {
      name: "W12x14",
      type: "W",
      A: 4.16 * Re,
      Iz: 88.6 * O,
      Iy: 2.36 * O,
      J: 0.0704 * O,
      d: 11.91 * ne,
      bf: 3.97 * ne
    },
    {
      name: "W12x22",
      type: "W",
      A: 6.48 * Re,
      Iz: 156 * O,
      Iy: 4.66 * O,
      J: 0.293 * O,
      d: 12.31 * ne,
      bf: 4.03 * ne
    },
    {
      name: "W12x26",
      type: "W",
      A: 7.65 * Re,
      Iz: 204 * O,
      Iy: 17.3 * O,
      J: 0.3 * O,
      d: 12.22 * ne,
      bf: 6.49 * ne
    },
    {
      name: "W12x40",
      type: "W",
      A: 11.7 * Re,
      Iz: 310 * O,
      Iy: 44.1 * O,
      J: 0.906 * O,
      d: 11.94 * ne,
      bf: 8.01 * ne
    },
    {
      name: "W12x53",
      type: "W",
      A: 15.6 * Re,
      Iz: 425 * O,
      Iy: 95.8 * O,
      J: 1.58 * O,
      d: 12.06 * ne,
      bf: 9.99 * ne
    },
    {
      name: "W12x72",
      type: "W",
      A: 21.1 * Re,
      Iz: 597 * O,
      Iy: 195 * O,
      J: 4.05 * O,
      d: 12.25 * ne,
      bf: 12.04 * ne
    },
    {
      name: "W12x96",
      type: "W",
      A: 28.2 * Re,
      Iz: 833 * O,
      Iy: 270 * O,
      J: 8.44 * O,
      d: 12.71 * ne,
      bf: 12.16 * ne
    },
    {
      name: "W12x120",
      type: "W",
      A: 35.3 * Re,
      Iz: 1070 * O,
      Iy: 345 * O,
      J: 16 * O,
      d: 13.12 * ne,
      bf: 12.32 * ne
    },
    {
      name: "W14x22",
      type: "W",
      A: 6.49 * Re,
      Iz: 199 * O,
      Iy: 7 * O,
      J: 0.208 * O,
      d: 13.74 * ne,
      bf: 5 * ne
    },
    {
      name: "W14x30",
      type: "W",
      A: 8.85 * Re,
      Iz: 291 * O,
      Iy: 19.6 * O,
      J: 0.38 * O,
      d: 13.84 * ne,
      bf: 6.73 * ne
    },
    {
      name: "W14x38",
      type: "W",
      A: 11.2 * Re,
      Iz: 385 * O,
      Iy: 26.7 * O,
      J: 0.798 * O,
      d: 14.1 * ne,
      bf: 6.77 * ne
    },
    {
      name: "W14x48",
      type: "W",
      A: 14.1 * Re,
      Iz: 485 * O,
      Iy: 51.4 * O,
      J: 1.45 * O,
      d: 13.79 * ne,
      bf: 8.03 * ne
    },
    {
      name: "W14x61",
      type: "W",
      A: 17.9 * Re,
      Iz: 640 * O,
      Iy: 107 * O,
      J: 2.19 * O,
      d: 13.89 * ne,
      bf: 9.99 * ne
    },
    {
      name: "W14x82",
      type: "W",
      A: 24 * Re,
      Iz: 882 * O,
      Iy: 148 * O,
      J: 5.07 * O,
      d: 14.31 * ne,
      bf: 10.13 * ne
    },
    {
      name: "W14x109",
      type: "W",
      A: 32 * Re,
      Iz: 1240 * O,
      Iy: 447 * O,
      J: 7.12 * O,
      d: 14.32 * ne,
      bf: 14.61 * ne
    },
    {
      name: "W14x132",
      type: "W",
      A: 38.8 * Re,
      Iz: 1530 * O,
      Iy: 548 * O,
      J: 12.3 * O,
      d: 14.66 * ne,
      bf: 14.73 * ne
    },
    {
      name: "W14x176",
      type: "W",
      A: 51.8 * Re,
      Iz: 2140 * O,
      Iy: 838 * O,
      J: 23.7 * O,
      d: 15.22 * ne,
      bf: 15.65 * ne
    },
    {
      name: "W16x26",
      type: "W",
      A: 7.68 * Re,
      Iz: 301 * O,
      Iy: 9.59 * O,
      J: 0.262 * O,
      d: 15.69 * ne,
      bf: 5.5 * ne
    },
    {
      name: "W16x36",
      type: "W",
      A: 10.6 * Re,
      Iz: 448 * O,
      Iy: 24.5 * O,
      J: 0.545 * O,
      d: 15.86 * ne,
      bf: 6.99 * ne
    },
    {
      name: "W16x50",
      type: "W",
      A: 14.7 * Re,
      Iz: 659 * O,
      Iy: 37.2 * O,
      J: 1.52 * O,
      d: 16.26 * ne,
      bf: 7.07 * ne
    },
    {
      name: "W16x67",
      type: "W",
      A: 19.7 * Re,
      Iz: 954 * O,
      Iy: 119 * O,
      J: 2.39 * O,
      d: 16.33 * ne,
      bf: 10.24 * ne
    },
    {
      name: "W16x89",
      type: "W",
      A: 26.2 * Re,
      Iz: 1300 * O,
      Iy: 163 * O,
      J: 5.45 * O,
      d: 16.75 * ne,
      bf: 10.37 * ne
    },
    {
      name: "W18x35",
      type: "W",
      A: 10.3 * Re,
      Iz: 510 * O,
      Iy: 15.3 * O,
      J: 0.506 * O,
      d: 17.7 * ne,
      bf: 6 * ne
    },
    {
      name: "W18x50",
      type: "W",
      A: 14.7 * Re,
      Iz: 800 * O,
      Iy: 40.1 * O,
      J: 1.24 * O,
      d: 17.99 * ne,
      bf: 7.5 * ne
    },
    {
      name: "W18x71",
      type: "W",
      A: 20.8 * Re,
      Iz: 1170 * O,
      Iy: 60.3 * O,
      J: 3.49 * O,
      d: 18.47 * ne,
      bf: 7.64 * ne
    },
    {
      name: "W18x97",
      type: "W",
      A: 28.5 * Re,
      Iz: 1750 * O,
      Iy: 201 * O,
      J: 5.86 * O,
      d: 18.59 * ne,
      bf: 11.15 * ne
    },
    {
      name: "W21x44",
      type: "W",
      A: 13 * Re,
      Iz: 843 * O,
      Iy: 20.7 * O,
      J: 0.77 * O,
      d: 20.66 * ne,
      bf: 6.5 * ne
    },
    {
      name: "W21x62",
      type: "W",
      A: 18.3 * Re,
      Iz: 1330 * O,
      Iy: 57.5 * O,
      J: 1.83 * O,
      d: 20.99 * ne,
      bf: 8.24 * ne
    },
    {
      name: "W21x83",
      type: "W",
      A: 24.3 * Re,
      Iz: 1830 * O,
      Iy: 81.4 * O,
      J: 4.34 * O,
      d: 21.43 * ne,
      bf: 8.36 * ne
    },
    {
      name: "W21x111",
      type: "W",
      A: 32.7 * Re,
      Iz: 2670 * O,
      Iy: 274 * O,
      J: 6.83 * O,
      d: 21.51 * ne,
      bf: 12.34 * ne
    },
    {
      name: "W24x55",
      type: "W",
      A: 16.2 * Re,
      Iz: 1350 * O,
      Iy: 29.1 * O,
      J: 1.18 * O,
      d: 23.57 * ne,
      bf: 7.01 * ne
    },
    {
      name: "W24x76",
      type: "W",
      A: 22.4 * Re,
      Iz: 2100 * O,
      Iy: 82.5 * O,
      J: 2.68 * O,
      d: 23.92 * ne,
      bf: 8.99 * ne
    },
    {
      name: "W24x104",
      type: "W",
      A: 30.6 * Re,
      Iz: 3100 * O,
      Iy: 259 * O,
      J: 4.72 * O,
      d: 24.06 * ne,
      bf: 12.75 * ne
    },
    {
      name: "W24x131",
      type: "W",
      A: 38.5 * Re,
      Iz: 4020 * O,
      Iy: 340 * O,
      J: 9.5 * O,
      d: 24.48 * ne,
      bf: 12.86 * ne
    },
    {
      name: "W24x146",
      type: "W",
      A: 43 * Re,
      Iz: 4580 * O,
      Iy: 391 * O,
      J: 12.6 * O,
      d: 24.74 * ne,
      bf: 12.9 * ne
    },
    {
      name: "W24x176",
      type: "W",
      A: 51.7 * Re,
      Iz: 5680 * O,
      Iy: 479 * O,
      J: 21.2 * O,
      d: 25.24 * ne,
      bf: 12.9 * ne
    },
    {
      name: "W27x84",
      type: "W",
      A: 24.8 * Re,
      Iz: 2850 * O,
      Iy: 106 * O,
      J: 2.81 * O,
      d: 26.71 * ne,
      bf: 9.96 * ne
    },
    {
      name: "W27x114",
      type: "W",
      A: 33.5 * Re,
      Iz: 4090 * O,
      Iy: 159 * O,
      J: 6.77 * O,
      d: 27.29 * ne,
      bf: 10.07 * ne
    },
    {
      name: "W30x90",
      type: "W",
      A: 26.4 * Re,
      Iz: 3610 * O,
      Iy: 115 * O,
      J: 3.06 * O,
      d: 29.53 * ne,
      bf: 10.4 * ne
    },
    {
      name: "W30x116",
      type: "W",
      A: 34.2 * Re,
      Iz: 4930 * O,
      Iy: 164 * O,
      J: 6.43 * O,
      d: 30.01 * ne,
      bf: 10.5 * ne
    },
    {
      name: "W33x118",
      type: "W",
      A: 34.7 * Re,
      Iz: 5900 * O,
      Iy: 187 * O,
      J: 5.3 * O,
      d: 32.86 * ne,
      bf: 11.48 * ne
    },
    {
      name: "W36x135",
      type: "W",
      A: 39.7 * Re,
      Iz: 7800 * O,
      Iy: 225 * O,
      J: 7 * O,
      d: 35.55 * ne,
      bf: 11.95 * ne
    },
    {
      name: "HSS4x4x1/4",
      type: "HSS",
      A: 3.37 * Re,
      Iz: 8.22 * O,
      Iy: 8.22 * O,
      J: 13.4 * O,
      d: 4 * ne,
      bf: 4 * ne
    },
    {
      name: "HSS4x4x3/8",
      type: "HSS",
      A: 4.78 * Re,
      Iz: 10.7 * O,
      Iy: 10.7 * O,
      J: 17.9 * O,
      d: 4 * ne,
      bf: 4 * ne
    },
    {
      name: "HSS4x4x1/2",
      type: "HSS",
      A: 6.02 * Re,
      Iz: 12.3 * O,
      Iy: 12.3 * O,
      J: 21 * O,
      d: 4 * ne,
      bf: 4 * ne
    },
    {
      name: "HSS6x6x1/4",
      type: "HSS",
      A: 5.24 * Re,
      Iz: 30.3 * O,
      Iy: 30.3 * O,
      J: 48.3 * O,
      d: 6 * ne,
      bf: 6 * ne
    },
    {
      name: "HSS6x6x3/8",
      type: "HSS",
      A: 7.58 * Re,
      Iz: 41.1 * O,
      Iy: 41.1 * O,
      J: 66.9 * O,
      d: 6 * ne,
      bf: 6 * ne
    },
    {
      name: "HSS6x6x1/2",
      type: "HSS",
      A: 9.74 * Re,
      Iz: 49.6 * O,
      Iy: 49.6 * O,
      J: 82.2 * O,
      d: 6 * ne,
      bf: 6 * ne
    },
    {
      name: "HSS8x8x1/4",
      type: "HSS",
      A: 7.1 * Re,
      Iz: 70.7 * O,
      Iy: 70.7 * O,
      J: 112 * O,
      d: 8 * ne,
      bf: 8 * ne
    },
    {
      name: "HSS8x8x3/8",
      type: "HSS",
      A: 10.4 * Re,
      Iz: 98 * O,
      Iy: 98 * O,
      J: 158 * O,
      d: 8 * ne,
      bf: 8 * ne
    },
    {
      name: "HSS8x8x1/2",
      type: "HSS",
      A: 13.5 * Re,
      Iz: 122 * O,
      Iy: 122 * O,
      J: 199 * O,
      d: 8 * ne,
      bf: 8 * ne
    },
    {
      name: "HSS10x10x3/8",
      type: "HSS",
      A: 13.2 * Re,
      Iz: 202 * O,
      Iy: 202 * O,
      J: 323 * O,
      d: 10 * ne,
      bf: 10 * ne
    },
    {
      name: "HSS10x10x1/2",
      type: "HSS",
      A: 17.2 * Re,
      Iz: 254 * O,
      Iy: 254 * O,
      J: 412 * O,
      d: 10 * ne,
      bf: 10 * ne
    },
    {
      name: "HSS12x12x3/8",
      type: "HSS",
      A: 16 * Re,
      Iz: 355 * O,
      Iy: 355 * O,
      J: 564 * O,
      d: 12 * ne,
      bf: 12 * ne
    },
    {
      name: "HSS12x12x1/2",
      type: "HSS",
      A: 21 * Re,
      Iz: 452 * O,
      Iy: 452 * O,
      J: 724 * O,
      d: 12 * ne,
      bf: 12 * ne
    },
    {
      name: "HSS6x4x1/4",
      type: "HSS",
      A: 4.3 * Re,
      Iz: 18 * O,
      Iy: 9.58 * O,
      J: 22.6 * O,
      d: 6 * ne,
      bf: 4 * ne
    },
    {
      name: "HSS6x4x3/8",
      type: "HSS",
      A: 6.18 * Re,
      Iz: 23.8 * O,
      Iy: 12.3 * O,
      J: 30.3 * O,
      d: 6 * ne,
      bf: 4 * ne
    },
    {
      name: "HSS8x4x1/4",
      type: "HSS",
      A: 5.24 * Re,
      Iz: 33.6 * O,
      Iy: 11.8 * O,
      J: 33 * O,
      d: 8 * ne,
      bf: 4 * ne
    },
    {
      name: "HSS8x4x3/8",
      type: "HSS",
      A: 7.58 * Re,
      Iz: 45.1 * O,
      Iy: 15 * O,
      J: 44.5 * O,
      d: 8 * ne,
      bf: 4 * ne
    },
    {
      name: "HSS8x6x1/4",
      type: "HSS",
      A: 6.17 * Re,
      Iz: 46.1 * O,
      Iy: 28.2 * O,
      J: 61.3 * O,
      d: 8 * ne,
      bf: 6 * ne
    },
    {
      name: "HSS8x6x3/8",
      type: "HSS",
      A: 8.97 * Re,
      Iz: 63 * O,
      Iy: 37.5 * O,
      J: 84.6 * O,
      d: 8 * ne,
      bf: 6 * ne
    },
    {
      name: "HSS10x6x3/8",
      type: "HSS",
      A: 10.4 * Re,
      Iz: 103 * O,
      Iy: 47.1 * O,
      J: 115 * O,
      d: 10 * ne,
      bf: 6 * ne
    },
    {
      name: "HSS12x8x3/8",
      type: "HSS",
      A: 13.2 * Re,
      Iz: 196 * O,
      Iy: 102 * O,
      J: 249 * O,
      d: 12 * ne,
      bf: 8 * ne
    }
  ];
  function yn() {
    const e = {};
    return Ao.forEach((b, P) => {
      b.type === "W" && (e[b.name] = P);
    }), e;
  }
  function $n() {
    const e = {};
    return Ao.forEach((b, P) => {
      b.type === "HSS" && (e[b.name] = P);
    }), e;
  }
  function bl(e) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    const { nodes: b, elements: P, elementInputs: M, nodeInputs: V, deformOutputs: H } = e, Z = b.length * 6, J = P.length, _ = P.filter((pe) => pe.length === 2).length, G = P.filter((pe) => pe.length >= 3).length, ye = document.createElement("div");
    ye.className = "rpt-overlay";
    let z = "";
    z += '<button class="rpt-close" id="rpt-close">\u2715 Close</button>', z += "<h1>Finite Element Analysis \u2014 Step-by-Step Report</h1>", z += '<div class="rpt-subtitle">Complete FEM derivation from element formulation to final results</div>', z += '<hr class="rpt-sep"/>', z += "<h2>1. Input Data</h2>", z += '<table class="rpt-info"><tbody>', z += `<tr><td>Number of nodes</td><td class="val">${b.length}</td></tr>`, z += `<tr><td>Number of elements</td><td class="val">${J} (${_} frames, ${G} shells)</td></tr>`, z += '<tr><td>DOFs per node</td><td class="val">6 (u<sub>x</sub>, u<sub>y</sub>, u<sub>z</sub>, \u03B8<sub>x</sub>, \u03B8<sub>y</sub>, \u03B8<sub>z</sub>)</td></tr>', z += `<tr><td>Total DOFs</td><td class="val">${Z}</td></tr>`, z += "</tbody></table>", z += "<h3>1.1 Node Coordinates</h3>", z += '<table class="rpt-data"><thead><tr><th>Node</th><th>x</th><th>y</th><th>z</th></tr></thead><tbody>', b.forEach((pe, se) => {
      z += `<tr><td>${se}</td><td>${ct(pe[0])}</td><td>${ct(pe[1])}</td><td>${ct(pe[2])}</td></tr>`;
    }), z += "</tbody></table>", z += "<h3>1.2 Element Connectivity</h3>", z += '<table class="rpt-data"><thead><tr><th>Elem</th><th>Type</th><th>Nodes</th><th>L</th><th>E</th><th>A</th><th>I<sub>z</sub></th><th>I<sub>y</sub></th></tr></thead><tbody>', P.forEach((pe, se) => {
      var _a2, _b2, _c2, _d2;
      const q = pe.length === 2, D = pe.map((he) => b[he]), Y = q ? _o(Mo(D[1], D[0])) : 0, fe = ((_a2 = M.elasticities) == null ? void 0 : _a2.get(se)) ?? 0, $e = ((_b2 = M.areas) == null ? void 0 : _b2.get(se)) ?? 0, ze = ((_c2 = M.momentsOfInertiaZ) == null ? void 0 : _c2.get(se)) ?? 0, Xe = ((_d2 = M.momentsOfInertiaY) == null ? void 0 : _d2.get(se)) ?? 0;
      z += `<tr><td>${se}</td><td>${q ? "Frame" : "Shell"}</td><td>${pe.join(" \u2192 ")}</td>`, z += `<td>${ct(Y)}</td><td>${ct(fe)}</td><td>${ct($e)}</td><td>${ct(ze)}</td><td>${ct(Xe)}</td></tr>`;
    }), z += "</tbody></table>", z += "<h2>2. Element Formulation</h2>", _ > 0 && (z += "<h3>2.1 Frame Element (Euler-Bernoulli Beam)</h3>", z += "<p>Each frame element has 2 nodes and 12 DOFs: [u<sub>x</sub>, u<sub>y</sub>, u<sub>z</sub>, \u03B8<sub>x</sub>, \u03B8<sub>y</sub>, \u03B8<sub>z</sub>] per node.</p>", z += "<h4>2.1.1 Shape Functions</h4>", z += "<p><b>Axial</b> (linear interpolation):</p>", z += '<div class="rpt-eq">N\u2081(\u03BE) = 1 \u2212 \u03BE &nbsp;&nbsp;&nbsp; N\u2082(\u03BE) = \u03BE &nbsp;&nbsp;&nbsp; where \u03BE = x/L \u2208 [0, 1]</div>', z += "<p><b>Bending</b> (Hermite cubic polynomials):</p>", z += '<table class="rpt-eq-table"><tbody>', z += '<tr><td class="eq-name">H\u2081(\u03BE)</td><td>= 1 \u2212 3\u03BE\xB2 + 2\u03BE\xB3</td><td class="eq-desc">displacement at node i</td></tr>', z += '<tr><td class="eq-name">H\u2082(\u03BE)</td><td>= L\u03BE(1 \u2212 \u03BE)\xB2</td><td class="eq-desc">rotation at node i</td></tr>', z += '<tr><td class="eq-name">H\u2083(\u03BE)</td><td>= 3\u03BE\xB2 \u2212 2\u03BE\xB3</td><td class="eq-desc">displacement at node j</td></tr>', z += '<tr><td class="eq-name">H\u2084(\u03BE)</td><td>= L\u03BE\xB2(\u03BE \u2212 1)</td><td class="eq-desc">rotation at node j</td></tr>', z += "</tbody></table>", z += hl(), z += "<p><b>Torsion</b> (linear): same as axial.</p>", z += "<h4>2.1.2 Strain-Displacement Matrix B</h4>", z += "<p>The B matrix relates nodal displacements to internal strains:</p>", z += '<div class="rpt-eq">\u03B5<sub>axial</sub> = du/dx = (1/L)\xB7[\u22121, 1]\xB7{u<sub>i</sub>, u<sub>j</sub>}</div>', z += '<div class="rpt-eq">\u03BA<sub>bending</sub> = d\xB2v/dx\xB2 = B<sub>b</sub>\xB7{v<sub>i</sub>, \u03B8<sub>i</sub>, v<sub>j</sub>, \u03B8<sub>j</sub>}</div>', z += '<div class="rpt-eq">B<sub>b</sub>(\u03BE) = (1/L\xB2)\xB7[\u22126+12\u03BE, L(\u22124+6\u03BE), 6\u221212\u03BE, L(\u22122+6\u03BE)]</div>', z += '<div class="rpt-eq">\u03C6\u2032<sub>torsion</sub> = d\u03B8<sub>x</sub>/dx = (1/L)\xB7[\u22121, 1]\xB7{\u03B8<sub>xi</sub>, \u03B8<sub>xj</sub>}</div>', z += "<h4>2.1.3 Constitutive Relations D</h4>", z += '<table class="rpt-eq-table"><tbody>', z += '<tr><td class="eq-name">Axial:</td><td>\u03C3 = E\xB7\u03B5</td><td>\u2192 D<sub>axial</sub> = E\xB7A</td></tr>', z += '<tr><td class="eq-name">Bending Z:</td><td>M<sub>z</sub> = EI<sub>z</sub>\xB7\u03BA</td><td>\u2192 D<sub>bz</sub> = E\xB7I<sub>z</sub></td></tr>', z += '<tr><td class="eq-name">Bending Y:</td><td>M<sub>y</sub> = EI<sub>y</sub>\xB7\u03BA</td><td>\u2192 D<sub>by</sub> = E\xB7I<sub>y</sub></td></tr>', z += '<tr><td class="eq-name">Torsion:</td><td>T = GJ\xB7\u03C6\u2032</td><td>\u2192 D<sub>torsion</sub> = G\xB7J</td></tr>', z += "</tbody></table>", z += "<h4>2.1.4 Local Stiffness Matrix K<sub>local</sub></h4>", z += "<p>Obtained by analytical integration:</p>", z += '<div class="rpt-eq rpt-eq-highlight">K<sub>local</sub> = \u222B\u2080\u1D38 B\u1D40\xB7D\xB7B dx</div>', z += "<p>Result for Euler-Bernoulli beam (12\xD712 symmetric):</p>", z += '<div class="rpt-eq-small">', z += "K[0,0] = EA/L &nbsp;&nbsp; K[1,1] = 12EI<sub>z</sub>/L\xB3 &nbsp;&nbsp; K[2,2] = 12EI<sub>y</sub>/L\xB3 &nbsp;&nbsp; K[3,3] = GJ/L<br/>", z += "K[4,4] = 4EI<sub>y</sub>/L &nbsp;&nbsp; K[5,5] = 4EI<sub>z</sub>/L &nbsp;&nbsp; K[1,5] = 6EI<sub>z</sub>/L\xB2 &nbsp;&nbsp; K[2,4] = \u22126EI<sub>y</sub>/L\xB2", z += "</div>", z += "<h4>2.1.5 Transformation Matrix T</h4>", z += "<p>Direction cosines of element axis:</p>", z += '<div class="rpt-eq">l = (x<sub>j</sub>\u2212x<sub>i</sub>)/L &nbsp;&nbsp; m = (y<sub>j</sub>\u2212y<sub>i</sub>)/L &nbsp;&nbsp; n = (z<sub>j</sub>\u2212z<sub>i</sub>)/L &nbsp;&nbsp; D = \u221A(l\xB2+m\xB2)</div>', z += '<div class="rpt-eq">\u03BB = [l, m, n; \u2212m/D, l/D, 0; \u2212ln/D, \u2212mn/D, D] &nbsp;&nbsp; (3\xD73)</div>', z += '<div class="rpt-eq rpt-eq-highlight">T = I\u2084 \u2297 \u03BB &nbsp;&nbsp; (12\xD712 block-diagonal, Kronecker product)</div>', z += "<p>Special case for vertical elements (n = \xB11): \u03BB uses fixed axes.</p>", z += "<h4>2.1.6 Global Stiffness Matrix</h4>", z += '<div class="rpt-eq rpt-eq-highlight">K<sub>global</sub> = T\u1D40 \xB7 K<sub>local</sub> \xB7 T</div>'), z += "<h2>3. Numerical Results per Element</h2>", z += "<p>For each element, we compute K<sub>local</sub>, T, and K<sub>global</sub> = T\u1D40\xB7K\xB7T with the actual properties:</p>";
    for (let pe = 0; pe < J; pe++) {
      const se = P[pe], q = se.map((pt) => b[pt]);
      if (!(se.length === 2)) continue;
      const Y = _o(Mo(q[1], q[0])), fe = ((_a = M.elasticities) == null ? void 0 : _a.get(pe)) ?? 0, $e = ((_b = M.areas) == null ? void 0 : _b.get(pe)) ?? 0, ze = ((_c = M.momentsOfInertiaZ) == null ? void 0 : _c.get(pe)) ?? 0, Xe = ((_d = M.momentsOfInertiaY) == null ? void 0 : _d.get(pe)) ?? 0, he = ((_e = M.shearModuli) == null ? void 0 : _e.get(pe)) ?? 0, je = ((_f = M.torsionalConstants) == null ? void 0 : _f.get(pe)) ?? 0;
      let We = null, be = null, Ie = null;
      try {
        We = Sn(q, M, pe), be = In(q), Ie = co(cs(be), co(We, be));
      } catch {
        continue;
      }
      const Ae = Mo(q[1], q[0]), Ue = Ae[0] / Y, dt = Ae[1] / Y, Ke = Ae[2] / Y;
      z += '<div class="rpt-elem-block">', z += `<h3 class="rpt-elem-title" data-toggle="elem${pe}">\u25B6 Element ${pe} \u2014 Nodes ${se[0]} \u2192 ${se[1]}, L = ${ct(Y)}</h3>`, z += `<div id="rpt-elem${pe}" class="rpt-elem-body" style="display:none">`, z += "<h4>Properties (numerical substitution)</h4>", z += '<div class="rpt-eq-small">', z += `E = ${ct(fe)} &nbsp;&nbsp; A = ${ct($e)} &nbsp;&nbsp; I<sub>z</sub> = ${ct(ze)} &nbsp;&nbsp; I<sub>y</sub> = ${ct(Xe)} &nbsp;&nbsp; G = ${ct(he)} &nbsp;&nbsp; J = ${ct(je)}<br/>`, z += `EA/L = ${ct(fe)}\xB7${ct($e)}/${ct(Y)} = <b>${ct(fe * $e / Y)}</b><br/>`, z += `12EI<sub>z</sub>/L\xB3 = 12\xB7${ct(fe)}\xB7${ct(ze)}/${ct(Y)}\xB3 = <b>${ct(12 * fe * ze / Y ** 3)}</b><br/>`, z += `12EI<sub>y</sub>/L\xB3 = 12\xB7${ct(fe)}\xB7${ct(Xe)}/${ct(Y)}\xB3 = <b>${ct(12 * fe * Xe / Y ** 3)}</b><br/>`, z += `GJ/L = ${ct(he)}\xB7${ct(je)}/${ct(Y)} = <b>${ct(he * je / Y)}</b>`, z += "</div>", z += "<h4>Direction cosines</h4>", z += `<div class="rpt-eq-small">l = ${Mn(Ue)}, m = ${Mn(dt)}, n = ${Mn(Ke)}, D = ${Mn(Math.sqrt(Ue ** 2 + dt ** 2))}</div>`, z += "<h4>K<sub>local</sub> (12\xD712)</h4>", z += ns(We, 12), z += "<h4>T \u2014 Transformation (12\xD712)</h4>", z += ns(be, 12), z += "<h4>K<sub>global</sub> = T\u1D40 \xB7 K<sub>local</sub> \xB7 T</h4>", z += ns(Ie, 12), z += "<h4>Assembly</h4>", z += `<div class="rpt-eq-small">Global DOFs: node ${se[0]} \u2192 [${se[0] * 6}..${se[0] * 6 + 5}], node ${se[1]} \u2192 [${se[1] * 6}..${se[1] * 6 + 5}]</div>`, z += "</div></div>";
    }
    z += "<h2>4. Global Assembly</h2>", z += `<div class="rpt-eq rpt-eq-highlight">K<sub>total</sub> = \u03A3<sub>e=0</sub><sup>${J - 1}</sup> (T<sub>e</sub>\u1D40 \xB7 k<sub>e</sub> \xB7 T<sub>e</sub>)</div>`, z += "<p>Each element contributes its K<sub>global</sub> to the positions determined by its node DOF indices.</p>", z += xl(P, b.length), z += "<h2>5. Boundary Conditions</h2>";
    const W = [
      "u<sub>x</sub>",
      "u<sub>y</sub>",
      "u<sub>z</sub>",
      "\u03B8<sub>x</sub>",
      "\u03B8<sub>y</sub>",
      "\u03B8<sub>z</sub>"
    ], ve = [];
    if (z += "<h3>5.1 Supports (fixed DOFs)</h3>", V.supports && V.supports.size > 0) {
      z += '<table class="rpt-data"><thead><tr><th>Node</th>';
      for (const pe of W) z += `<th>${pe}</th>`;
      z += "</tr></thead><tbody>", V.supports.forEach((pe, se) => {
        z += `<tr><td>${se}</td>`, pe.forEach((q, D) => {
          q && ve.push(se * 6 + D), z += `<td class="${q ? "fixed" : ""}">${q ? "Fixed" : "Free"}</td>`;
        }), z += "</tr>";
      }), z += "</tbody></table>";
    }
    if (z += `<div class="rpt-eq-small">Fixed DOFs: [${ve.join(", ")}] \u2192 ${ve.length} constraints<br/>`, z += `Free DOFs: ${Z} \u2212 ${ve.length} = <b>${Z - ve.length}</b></div>`, z += "<h3>5.2 Applied Loads</h3>", V.loads && V.loads.size > 0) {
      z += '<table class="rpt-data"><thead><tr><th>Node</th>';
      const pe = [
        "F<sub>x</sub>",
        "F<sub>y</sub>",
        "F<sub>z</sub>",
        "M<sub>x</sub>",
        "M<sub>y</sub>",
        "M<sub>z</sub>"
      ];
      for (const se of pe) z += `<th>${se}</th>`;
      z += "</tr></thead><tbody>", V.loads.forEach((se, q) => {
        z += `<tr><td>${q}</td>`, se.forEach((D) => {
          const Y = Math.abs(D) > 1e-10;
          z += `<td class="${Y ? "nz" : ""}">${Y ? ct(D) : "0"}</td>`;
        }), z += "</tr>";
      }), z += "</tbody></table>";
    }
    if (z += "<h2>6. Solution</h2>", z += "<p>After removing fixed DOFs, the reduced system is:</p>", z += '<div class="rpt-eq rpt-eq-highlight">K<sub>free</sub> \xB7 u<sub>free</sub> = F<sub>free</sub></div>', z += "<p>Solved using LU decomposition with partial pivoting (sparse matrix).</p>", z += "<h3>6.1 Nodal Displacements</h3>", H == null ? void 0 : H.deformations) {
      z += '<table class="rpt-data"><thead><tr><th>Node</th>';
      for (const pe of W) z += `<th>${pe}</th>`;
      z += "</tr></thead><tbody>", H.deformations.forEach((pe, se) => {
        z += `<tr><td>${se}</td>`, pe.forEach((q) => {
          const D = Math.abs(q) > 1e-10;
          z += `<td class="${D ? "nz" : ""}">${ct(q, 6)}</td>`;
        }), z += "</tr>";
      }), z += "</tbody></table>";
    }
    if (z += "<h3>6.2 Reactions</h3>", z += '<div class="rpt-eq">R = K<sub>total</sub> \xB7 u (extract at fixed DOFs)</div>', H == null ? void 0 : H.reactions) {
      z += '<table class="rpt-data"><thead><tr><th>Node</th>';
      for (const pe of W) z += `<th>${pe}</th>`;
      z += "</tr></thead><tbody>", H.reactions.forEach((pe, se) => {
        z += `<tr><td>${se}</td>`, pe.forEach((q) => {
          const D = Math.abs(q) > 1e-10;
          z += `<td class="${D ? "nz-react" : ""}">${D ? ct(q, 4) : "0"}</td>`;
        }), z += "</tr>";
      }), z += "</tbody></table>";
    }
    if (z += "<h2>7. Internal Forces</h2>", z += "<p>For each element, transform global displacements to local and multiply by K<sub>local</sub>:</p>", z += '<div class="rpt-eq">u<sub>local</sub> = T \xB7 u<sub>global</sub></div>', z += '<div class="rpt-eq rpt-eq-highlight">f<sub>local</sub> = K<sub>local</sub> \xB7 u<sub>local</sub></div>', H == null ? void 0 : H.deformations) {
      const pe = [
        "N",
        "V<sub>y</sub>",
        "V<sub>z</sub>",
        "M<sub>x</sub>",
        "M<sub>y</sub>",
        "M<sub>z</sub>"
      ];
      z += '<table class="rpt-data"><thead><tr><th>Elem</th><th>Nodes</th>';
      for (const se of pe) z += `<th>${se}<sub>i</sub></th>`;
      for (const se of pe) z += `<th>${se}<sub>j</sub></th>`;
      z += "</tr></thead><tbody>";
      for (let se = 0; se < J; se++) {
        const q = P[se];
        if (q.length !== 2) continue;
        const D = q.map((Y) => b[Y]);
        try {
          const Y = Sn(D, M, se), fe = In(D), $e = [];
          for (const he of q) {
            const je = ((_g = H.deformations) == null ? void 0 : _g.get(he)) || [
              0,
              0,
              0,
              0,
              0,
              0
            ];
            $e.push(...je);
          }
          const ze = co(fe, $e), Xe = co(Y, ze);
          z += `<tr><td>${se}</td><td>${q.join("\u2192")}</td>`;
          for (let he = 0; he < 12; he++) {
            const je = Math.abs(Xe[he]) > 1e-10;
            z += `<td class="${je ? "nz" : ""}">${ct(Xe[he], 2)}</td>`;
          }
          z += "</tr>";
        } catch {
        }
      }
      z += "</tbody></table>";
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
    return ye.innerHTML = me + z, (_h = ye.querySelector("#rpt-close")) == null ? void 0 : _h.addEventListener("click", () => ye.remove()), ye.querySelectorAll("[data-toggle]").forEach((pe) => {
      pe.addEventListener("click", () => {
        const se = pe.dataset.toggle, q = ye.querySelector(`#rpt-${se}`);
        if (q) {
          const D = q.style.display !== "none";
          q.style.display = D ? "none" : "", pe.textContent = pe.textContent.replace(/^[▼▶]/, D ? "\u25B6" : "\u25BC");
        }
      });
    }), ye;
  }
  function ct(e, b = 2) {
    return Math.abs(e) < 1e-10 ? "0" : Math.abs(e) >= 1e7 || Math.abs(e) < 0.01 && e !== 0 ? e.toExponential(b) : e.toFixed(b);
  }
  function Mn(e) {
    return Math.abs(e) < 1e-10 ? "0" : e.toFixed(4);
  }
  function ns(e, b) {
    var _a;
    const P = Math.min(b, 12);
    let M = '<div style="overflow-x:auto"><table class="rpt-mtx">';
    for (let V = 0; V < P; V++) {
      M += "<tr>";
      for (let H = 0; H < P; H++) {
        const Z = ((_a = e[V]) == null ? void 0 : _a[H]) ?? 0, J = Math.abs(Z) < 1e-10;
        M += `<td class="${J ? "z" : ""} ${V === H && !J ? "diag" : ""}">${J ? "0" : gl(Z)}</td>`;
      }
      M += "</tr>";
    }
    return M += "</table>", b > P && (M += `<div style="color:#888;font-size:9pt">(showing ${P}\xD7${P} of ${b}\xD7${b})</div>`), M += "</div>", M;
  }
  function gl(e) {
    return Math.abs(e) >= 1e6 || Math.abs(e) < 0.01 && e !== 0 ? e.toExponential(1) : Math.abs(e) >= 100 ? e.toFixed(0) : e.toFixed(2);
  }
  function hl() {
    const Z = [
      {
        name: "H\u2081",
        color: "#c44",
        fn: (_) => 1 - 3 * _ ** 2 + 2 * _ ** 3
      },
      {
        name: "H\u2082/L",
        color: "#2a9d8f",
        fn: (_) => _ * (1 - _) ** 2
      },
      {
        name: "H\u2083",
        color: "#264653",
        fn: (_) => 3 * _ ** 2 - 2 * _ ** 3
      },
      {
        name: "H\u2084/L",
        color: "#e9c46a",
        fn: (_) => _ ** 2 * (_ - 1)
      }
    ];
    let J = '<svg viewBox="0 0 600 180" style="width:100%;max-width:600px;border:1px solid #ddd;border-radius:4px;margin:8px 0;background:#fafafa">';
    J += `<line x1="30" y1="${180 / 2}" x2="570" y2="${180 / 2}" stroke="#ccc" stroke-width="1"/>`, J += '<line x1="30" y1="20" x2="30" y2="160" stroke="#ccc" stroke-width="1"/>', J += `<text x="${600 / 2}" y="175" fill="#888" font-size="10" text-anchor="middle" font-family="sans-serif">\u03BE (0 \u2192 1)</text>`, J += `<text x="25" y="${180 / 2 - 60 - 5}" fill="#888" font-size="9" text-anchor="end" font-family="sans-serif">1</text>`, J += `<text x="25" y="${180 / 2 + 4}" fill="#888" font-size="9" text-anchor="end" font-family="sans-serif">0</text>`;
    for (const _ of Z) {
      let G = "";
      for (let ve = 0; ve <= 80; ve++) {
        const me = ve / 80, pe = 30 + me * 540, se = 180 / 2 - _.fn(me) * 60;
        G += (ve === 0 ? "M" : "L") + `${pe.toFixed(1)},${se.toFixed(1)}`;
      }
      J += `<path d="${G}" fill="none" stroke="${_.color}" stroke-width="2.5"/>`;
      const ye = 0.75, z = 30 + ye * 540 + 8, W = 180 / 2 - _.fn(ye) * 60 - 6;
      J += `<text x="${z}" y="${W}" fill="${_.color}" font-size="11" font-weight="bold" font-family="sans-serif">${_.name}</text>`;
    }
    return J += "</svg>", J;
  }
  function xl(e, b) {
    const P = b * 6, M = Math.min(P, 30);
    let V = "<p>Assembly contribution map (number = how many elements contribute to each K<sub>total</sub> entry):</p>";
    V += '<div style="overflow-x:auto"><table class="rpt-assembly-map">', V += "<tr><td></td>";
    for (let Z = 0; Z < M; Z++) V += `<td style="color:#003366;font-weight:bold;font-size:7px">${Z}</td>`;
    V += "</tr>";
    const H = Array.from({
      length: M
    }, () => Array(M).fill(0));
    for (let Z = 0; Z < e.length; Z++) {
      const J = e[Z].map((_) => _ * 6);
      for (const _ of J) for (const G of J) for (let ye = 0; ye < 6; ye++) for (let z = 0; z < 6; z++) {
        const W = _ + ye, ve = G + z;
        W < M && ve < M && H[W][ve]++;
      }
    }
    for (let Z = 0; Z < M; Z++) {
      V += `<tr><td style="color:#003366;font-weight:bold;font-size:7px">${Z}</td>`;
      for (let J = 0; J < M; J++) {
        const _ = H[Z][J], G = _ === 0 ? "#fff" : _ === 1 ? "#e8f0fe" : _ === 2 ? "#c6dcf5" : "#a0c4e8", ye = _ === 0 ? "" : _.toString();
        V += `<td style="background:${G};color:#003366">${ye}</td>`;
      }
      V += "</tr>";
    }
    return V += "</table></div>", P > M && (V += `<div style="color:#888;font-size:9pt">(showing ${M}\xD7${M} of ${P}\xD7${P})</div>`), V;
  }
  let ss = false;
  function vl(e) {
    if (ss || window.katex) {
      ss = true, e();
      return;
    }
    const b = document.createElement("link");
    b.rel = "stylesheet", b.href = "https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css", document.head.appendChild(b);
    const P = document.createElement("script");
    P.src = "https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.js", P.onload = () => {
      ss = true, e();
    }, document.head.appendChild(P);
  }
  function ia(e, b = false) {
    try {
      if (window.katex) return window.katex.renderToString(e, {
        displayMode: b,
        throwOnError: false
      });
    } catch {
    }
    return `<code class="er-tex-fallback">${e}</code>`;
  }
  function yl(e, b, P, M, V, H) {
    var _a, _b, _c, _d, _e, _f;
    const Z = P[e], J = Z.map((be) => b[be]), _ = Z.length === 2, G = _ ? _o(Mo(J[1], J[0])) : 0, ye = ((_a = M.elasticities) == null ? void 0 : _a.get(e)) ?? 0, z = ((_b = M.areas) == null ? void 0 : _b.get(e)) ?? 0, W = ((_c = M.momentsOfInertiaZ) == null ? void 0 : _c.get(e)) ?? 0, ve = ((_d = M.momentsOfInertiaY) == null ? void 0 : _d.get(e)) ?? 0, me = ((_e = M.shearModuli) == null ? void 0 : _e.get(e)) ?? 0, pe = ((_f = M.torsionalConstants) == null ? void 0 : _f.get(e)) ?? 0;
    let se = null, q = null, D = null;
    try {
      se = Sn(J, M, e), q = In(J), D = co(cs(q), co(se, q));
    } catch {
    }
    const Y = _ ? Mo(J[1], J[0]) : [
      0,
      0,
      0
    ], fe = G > 0 ? Y[0] / G : 0, $e = G > 0 ? Y[1] / G : 0, ze = G > 0 ? Y[2] / G : 0, Xe = Math.sqrt(fe ** 2 + $e ** 2), he = [];
    if ((V == null ? void 0 : V.deformations) && _) for (const be of Z) {
      const Ie = V.deformations.get(be) || [
        0,
        0,
        0,
        0,
        0,
        0
      ];
      he.push(...Ie);
    }
    let je = [], We = [];
    if (he.length === 12 && q && se) {
      try {
        je = co(q, he);
      } catch {
        je = Array(12).fill(0);
      }
      try {
        We = co(se, je);
      } catch {
        We = Array(12).fill(0);
      }
    }
    return {
      elemIdx: e,
      elem: Z,
      elmNodes: J,
      isFrame: _,
      L: G,
      E: ye,
      A: z,
      Iz: W,
      Iy: ve,
      G: me,
      J: pe,
      kLocal: se,
      T: q,
      kGlobal: D,
      l: fe,
      m: $e,
      n: ze,
      D: Xe,
      uGlobal: he,
      uLocal: je,
      fLocal: We,
      dOut: V,
      aOut: H,
      totalNodes: b.length
    };
  }
  function $l(e, b, P, M, V, H) {
    var _a, _b;
    const Z = yl(e, b, P, M, V, H), J = document.createElement("div");
    return J.className = "er-panel", J.innerHTML = Sl + `
    <div class="er-header">
      <span class="er-badge">Element ${e}</span>
      <span class="er-type">${Z.isFrame ? "Frame" : "Shell"} \u2014 Nodes ${Z.elem.join(" \u2192 ")} \u2014 L = ${Ve(Z.L)}</span>
      <button class="er-fullscreen" id="er-fullscreen" title="Pantalla completa">\u26F6</button>
      <button class="er-close" id="er-close">\u2715</button>
    </div>
    <div class="er-tabs">
      <button class="er-tab active" data-tab="tabla">Tabla</button>
      <button class="er-tab" data-tab="math">Matematica Explicada</button>
      <button class="er-tab" data-tab="resumen">Resumen</button>
    </div>
    <div class="er-body" id="er-body-tabla">${Ml(Z)}</div>
    <div class="er-body" id="er-body-math" style="display:none">${ca(Z)}</div>
    <div class="er-body" id="er-body-resumen" style="display:none">${wl(Z)}</div>
  `, J.querySelectorAll(".er-tab").forEach((_) => {
      _.addEventListener("click", () => {
        J.querySelectorAll(".er-tab").forEach((ye) => ye.classList.remove("active")), _.classList.add("active");
        const G = _.dataset.tab;
        J.querySelectorAll(".er-body").forEach((ye) => ye.style.display = "none"), J.querySelector(`#er-body-${G}`).style.display = "";
      });
    }), (_a = J.querySelector("#er-close")) == null ? void 0 : _a.addEventListener("click", () => J.remove()), (_b = J.querySelector("#er-fullscreen")) == null ? void 0 : _b.addEventListener("click", () => {
      const _ = J.classList.toggle("er-fullscreen-mode"), G = J.querySelector("#er-fullscreen");
      G && (G.textContent = _ ? "\u22A1" : "\u26F6");
    }), setTimeout(() => {
      const _ = J.querySelector("#er-sf-canvas");
      _ && as(_);
      const G = J.querySelector("#er-sf-canvas-math");
      G && as(G);
    }, 50), vl(() => {
      const _ = J.querySelector("#er-body-math");
      _ && (_.innerHTML = ca(Z)), setTimeout(() => {
        const G = J.querySelector("#er-sf-canvas-math");
        G && as(G);
      }, 50), J.querySelectorAll(".er-deriv-header").forEach((G) => {
        G.addEventListener("click", () => {
          const ye = G.dataset.toggle, z = J.querySelector(`#er-${ye}`);
          z && (z.style.display = z.style.display === "none" ? "" : "none");
        });
      });
    }), J;
  }
  function Ml(e) {
    let b = "";
    if (b += '<div class="er-section-title">1. Propiedades</div>', b += '<table class="er-props">', b += `<tr><td>E</td><td>${Ve(e.E)}</td><td>A</td><td>${Ve(e.A)}</td></tr>`, b += `<tr><td>I<sub>z</sub></td><td>${Ve(e.Iz)}</td><td>I<sub>y</sub></td><td>${Ve(e.Iy)}</td></tr>`, b += `<tr><td>G</td><td>${Ve(e.G)}</td><td>J</td><td>${Ve(e.J)}</td></tr>`, b += "</table>", e.kLocal && (b += `<div class="er-section-title">2. K<sub>local</sub> (${e.kLocal.length}\xD7${e.kLocal.length})</div>`, b += pn(e.kLocal)), e.T && (b += '<div class="er-section-title">3. T \u2014 Transformaci\xF3n</div>', b += pn(e.T)), e.kGlobal && (b += '<div class="er-section-title">4. K<sub>global</sub> = T<sup>T</sup>\xB7K\xB7T</div>', b += pn(e.kGlobal)), b += '<div class="er-section-title">5. Desplazamientos</div>', e.uGlobal.length > 0) {
      const P = [
        "u<sub>x</sub>",
        "u<sub>y</sub>",
        "u<sub>z</sub>",
        "\u03B8<sub>x</sub>",
        "\u03B8<sub>y</sub>",
        "\u03B8<sub>z</sub>"
      ];
      for (let M = 0; M < e.elem.length; M++) {
        b += `<div class="er-sub">Nodo ${e.elem[M]}: `;
        for (let V = 0; V < 6; V++) {
          const H = e.uGlobal[M * 6 + V];
          b += `${P[V]}=<span class="${Math.abs(H) > 1e-10 ? "nz" : ""}">${Ve(H, 6)}</span> `;
        }
        b += "</div>";
      }
    } else b += '<div class="er-sub">Sin an\xE1lisis</div>';
    if (b += '<div class="er-section-title">6. Fuerzas internas</div>', e.fLocal.length > 0 && e.fLocal.some((P) => P !== 0)) {
      const P = [
        "N",
        "V<sub>y</sub>",
        "V<sub>z</sub>",
        "M<sub>x</sub>",
        "M<sub>y</sub>",
        "M<sub>z</sub>"
      ];
      b += '<table class="er-forces"><tr><th></th>';
      for (const M of P) b += `<th>${M}</th>`;
      b += "</tr>", b += "<tr><td>Nodo i</td>";
      for (let M = 0; M < 6; M++) b += `<td class="${Math.abs(e.fLocal[M]) > 1e-10 ? "nz" : ""}">${Ve(e.fLocal[M], 3)}</td>`;
      b += "</tr><tr><td>Nodo j</td>";
      for (let M = 6; M < 12; M++) b += `<td class="${Math.abs(e.fLocal[M]) > 1e-10 ? "nz" : ""}">${Ve(e.fLocal[M], 3)}</td>`;
      b += "</tr></table>";
    } else b += '<div class="er-sub">Sin an\xE1lisis</div>';
    return b;
  }
  function ca(e) {
    if (!e.isFrame) return '<div class="er-sub">Shell element math: coming soon</div>';
    let b = "";
    const P = (ye) => ia(ye), M = (ye) => ia(ye, true);
    b += '<div class="er-section-title">1. Geometria del elemento</div>', b += "<p>Viga Euler-Bernoulli con 2 nodos y 6 GDL por nodo:</p>", b += `<div class="er-eq">${M("\\text{DOFs} = [u_x,\\, u_y,\\, u_z,\\, \\theta_x,\\, \\theta_y,\\, \\theta_z] \\quad \\Rightarrow \\quad 12 \\text{ GDL totales}")}</div>`, b += '<div class="er-eq-num">', b += `${P("\\text{Nodo } i")} = (${e.elmNodes[0].map((ye) => Ve(ye)).join(", ")})<br/>`, b += `${P("\\text{Nodo } j")} = (${e.elmNodes[1].map((ye) => Ve(ye)).join(", ")})<br/>`, b += `${M(`L = \\sqrt{(x_j - x_i)^2 + (y_j - y_i)^2 + (z_j - z_i)^2} = \\mathbf{${Ve(e.L)}}`)}`, b += "</div>", b += '<div class="er-section-title">2. Funciones de forma</div>', b += "<p>La viga usa <b>interpolacion lineal</b> para axial/torsion y <b>polinomios cubicos de Hermite</b> para flexion.</p>", b += '<div class="er-subsec">2.1 Axial y Torsion (lineal)</div>', b += `<div class="er-eq">${M("N_1(\\xi) = 1 - \\xi \\qquad N_2(\\xi) = \\xi \\qquad \\text{donde } \\xi = \\frac{x}{L} \\in [0,1]")}</div>`, b += "<p>Primera derivada:</p>", b += `<div class="er-eq">${M("\\frac{dN_1}{d\\xi} = -1 \\qquad \\frac{dN_2}{d\\xi} = 1")}</div>`, b += '<div class="er-subsec">2.2 Flexion (Hermite cubicos)</div>', b += `<p>Las funciones de Hermite garantizan continuidad ${P("C^1")} (desplazamiento y pendiente continuos):</p>`, b += `<div class="er-eq">${M("H_1(\\xi) = 1 - 3\\xi^2 + 2\\xi^3 \\qquad \\text{(desplazamiento nodo } i\\text{)}")}</div>`, b += `<div class="er-eq">${M("H_2(\\xi) = L\\,\\xi\\,(1-\\xi)^2 \\qquad \\text{(rotacion nodo } i\\text{)}")}</div>`, b += `<div class="er-eq">${M("H_3(\\xi) = 3\\xi^2 - 2\\xi^3 \\qquad \\text{(desplazamiento nodo } j\\text{)}")}</div>`, b += `<div class="er-eq">${M("H_4(\\xi) = L\\,\\xi^2(\\xi - 1) \\qquad \\text{(rotacion nodo } j\\text{)}")}</div>`, b += `<div class="er-subsec">Derivadas segunda (curvatura ${P("\\kappa = \\frac{d^2v}{dx^2}")}):</div>`, b += `<div class="er-eq">${M("H_1'' = \\frac{-6}{L^2}(1-2\\xi) \\qquad H_2'' = \\frac{-2}{L}(2-3\\xi)")}</div>`, b += `<div class="er-eq">${M("H_3'' = \\frac{6}{L^2}(1-2\\xi) \\qquad H_4'' = \\frac{-2}{L}(1-3\\xi)")}</div>`, b += '<canvas id="er-sf-canvas-math" width="500" height="250" style="width:100%;border:1px solid var(--fem-border);border-radius:4px;margin:8px 0;"></canvas>', b += '<div class="er-section-title">3. Matriz B (strain-displacement)</div>', b += "<p>La matriz B relaciona desplazamientos nodales con deformaciones internas:</p>", b += `<div class="er-eq">${M("\\boldsymbol{\\varepsilon} = \\mathbf{B} \\cdot \\mathbf{u}")}</div>`, b += '<div class="er-subsec">3.1 Deformacion axial</div>', b += `<div class="er-eq">${M("\\varepsilon_{axial} = \\frac{du}{dx} = \\frac{1}{L} \\begin{bmatrix} -1 & 1 \\end{bmatrix} \\begin{Bmatrix} u_i \\\\ u_j \\end{Bmatrix}")}</div>`, b += `<div class="er-subsec">3.2 Curvatura por flexion (plano XY \u2192 ${P("I_z")})</div>`, b += `<div class="er-eq">${M("\\kappa_z = \\frac{d^2 v}{dx^2} = \\mathbf{B}_{bz} \\cdot \\begin{Bmatrix} v_i \\\\ \\theta_{zi} \\\\ v_j \\\\ \\theta_{zj} \\end{Bmatrix}")}</div>`, b += `<div class="er-eq">${M("\\mathbf{B}_{bz}(\\xi) = \\frac{1}{L^2} \\begin{bmatrix} H_1'' & H_2'' & H_3'' & H_4'' \\end{bmatrix}")}</div>`, b += `<div class="er-subsec">3.3 Curvatura (plano XZ \u2192 ${P("I_y")})</div>`, b += `<div class="er-eq">${M("\\kappa_y = \\frac{d^2 w}{dx^2} = \\mathbf{B}_{by} \\cdot \\begin{Bmatrix} w_i \\\\ \\theta_{yi} \\\\ w_j \\\\ \\theta_{yj} \\end{Bmatrix}")}</div>`, b += '<div class="er-subsec">3.4 Torsion</div>', b += `<div class="er-eq">${M("\\phi' = \\frac{d\\theta_x}{dx} = \\frac{1}{L} \\begin{bmatrix} -1 & 1 \\end{bmatrix} \\begin{Bmatrix} \\theta_{xi} \\\\ \\theta_{xj} \\end{Bmatrix}")}</div>`, b += '<div class="er-section-title">4. Relaciones constitutivas D</div>', b += "<p>Cada modo de deformacion tiene su rigidez material:</p>", b += `<div class="er-eq">${M(`\\text{Axial: } \\sigma = E \\cdot \\varepsilon \\;\\Rightarrow\\; D_{ax} = EA = ${Ve(e.E)} \\times ${Ve(e.A)} = \\mathbf{${Ve(e.E * e.A)}}`)}</div>`, b += `<div class="er-eq">${M(`\\text{Flex Z: } M_z = EI_z \\cdot \\kappa \\;\\Rightarrow\\; D_{bz} = EI_z = ${Ve(e.E)} \\times ${Ve(e.Iz)} = \\mathbf{${Ve(e.E * e.Iz)}}`)}</div>`, b += `<div class="er-eq">${M(`\\text{Flex Y: } M_y = EI_y \\cdot \\kappa \\;\\Rightarrow\\; D_{by} = EI_y = ${Ve(e.E)} \\times ${Ve(e.Iy)} = \\mathbf{${Ve(e.E * e.Iy)}}`)}</div>`, b += `<div class="er-eq">${M(`\\text{Torsion: } T = GJ \\cdot \\phi' \\;\\Rightarrow\\; D_t = GJ = ${Ve(e.G)} \\times ${Ve(e.J)} = \\mathbf{${Ve(e.G * e.J)}}`)}</div>`, b += `<div class="er-section-title">5. Integracion \u2192 ${P("\\mathbf{K}_{local}")}</div>`, b += "<p>La matriz de rigidez local se obtiene integrando analiticamente:</p>", b += `<div class="er-eq er-eq-main">${M("\\mathbf{K}_{local} = \\int_0^L \\mathbf{B}^T \\cdot \\mathbf{D} \\cdot \\mathbf{B} \\; dx")}</div>`;
    const V = e.E * e.A / e.L, H = e.E * e.Iz / e.L ** 3, Z = e.E * e.Iy / e.L ** 3, J = e.G * e.J / e.L;
    if (b += '<div class="er-deriv-block">', b += '<div class="er-deriv-header" data-toggle="deriv-axial">\u{1F4D6} K[0,0] = EA/L \u2014 <i>click para ver derivacion completa</i></div>', b += '<div id="er-deriv-axial" class="er-deriv-body" style="display:none">', b += "<p><b>Paso 1:</b> Funcion de forma axial</p>", b += `<div class="er-eq">${M("u(\\xi) = N_1 \\cdot u_i + N_2 \\cdot u_j = (1-\\xi)\\,u_i + \\xi\\,u_j")}</div>`, b += "<p><b>Paso 2:</b> Derivada (deformacion)</p>", b += `<div class="er-eq">${M("\\varepsilon = \\frac{du}{dx} = \\frac{1}{L}\\frac{du}{d\\xi} = \\frac{1}{L}(-u_i + u_j)")}</div>`, b += `<div class="er-eq">${M("\\mathbf{B}_{ax} = \\frac{1}{L}\\begin{bmatrix} -1 & 1 \\end{bmatrix}")}</div>`, b += `<p><b>Paso 3:</b> Integracion ${P("K = \\int_0^L B^T \\cdot EA \\cdot B \\; dx")}</p>`, b += `<div class="er-eq">${M("K_{ax} = \\int_0^L \\frac{1}{L}\\begin{bmatrix}-1\\\\1\\end{bmatrix} \\cdot EA \\cdot \\frac{1}{L}\\begin{bmatrix}-1 & 1\\end{bmatrix} dx")}</div>`, b += `<div class="er-eq">${M("= \\frac{EA}{L^2} \\begin{bmatrix}1 & -1\\\\-1 & 1\\end{bmatrix} \\int_0^L dx = \\frac{EA}{L^2} \\cdot L \\begin{bmatrix}1 & -1\\\\-1 & 1\\end{bmatrix}")}</div>`, b += `<div class="er-eq er-eq-main">${M(`K_{ax} = \\frac{EA}{L}\\begin{bmatrix}1 & -1\\\\-1 & 1\\end{bmatrix} = \\frac{${Ve(e.E)}\\times${Ve(e.A)}}{${Ve(e.L)}}\\begin{bmatrix}1 & -1\\\\-1 & 1\\end{bmatrix}`)}</div>`, b += `<div class="er-eq">${M(`K[0,0] = K[6,6] = \\frac{EA}{L} = \\mathbf{${Ve(V)}}`)}</div>`, b += "</div></div>", b += '<div class="er-deriv-block">', b += '<div class="er-deriv-header" data-toggle="deriv-bend">\u{1F4D6} K[1,1] = 12EI<sub>z</sub>/L\xB3 \u2014 <i>click para ver derivacion completa</i></div>', b += '<div id="er-deriv-bend" class="er-deriv-body" style="display:none">', b += `<p><b>Paso 1:</b> Funcion de forma Hermite para ${P("v(\\xi)")}</p>`, b += `<div class="er-eq">${M("v(\\xi) = H_1 v_i + H_2 \\theta_i + H_3 v_j + H_4 \\theta_j")}</div>`, b += "<p><b>Paso 2:</b> Segunda derivada (curvatura)</p>", b += `<div class="er-eq">${M("\\kappa = \\frac{d^2v}{dx^2} = \\frac{1}{L^2}\\frac{d^2v}{d\\xi^2}")}</div>`, b += `<div class="er-eq">${M("H_1'' = -6+12\\xi, \\quad H_2'' = L(-4+6\\xi), \\quad H_3'' = 6-12\\xi, \\quad H_4'' = L(-2+6\\xi)")}</div>`, b += `<div class="er-eq">${M("\\mathbf{B}_b = \\frac{1}{L^2}\\begin{bmatrix} H_1'' & H_2'' & H_3'' & H_4'' \\end{bmatrix}")}</div>`, b += `<p><b>Paso 3:</b> Integracion para K[1,1] (termino ${P("v_i \\cdot v_i")})</p>`, b += `<div class="er-eq">${M("K[1,1] = \\int_0^L \\frac{(H_1'')^2}{L^4} \\cdot EI_z \\; dx = \\frac{EI_z}{L^4} \\int_0^L (-6+12\\xi)^2 \\; dx")}</div>`, b += `<p>Expandimos: ${P("(-6+12\\xi)^2 = 36 - 144\\xi + 144\\xi^2")}</p>`, b += `<div class="er-eq">${M("\\int_0^L (36-144\\xi+144\\xi^2)\\,dx = 36L - 72L + 48L = 12L")}</div>`, b += `<div class="er-eq er-eq-main">${M(`K[1,1] = \\frac{EI_z}{L^4} \\cdot 12L = \\frac{12EI_z}{L^3} = \\frac{12 \\times ${Ve(e.E)} \\times ${Ve(e.Iz)}}{${Ve(e.L)}^3} = \\mathbf{${Ve(12 * H)}}`)}</div>`, b += "</div></div>", b += '<div class="er-deriv-block">', b += '<div class="er-deriv-header" data-toggle="deriv-tors">\u{1F4D6} K[3,3] = GJ/L \u2014 <i>click para ver derivacion</i></div>', b += '<div id="er-deriv-tors" class="er-deriv-body" style="display:none">', b += `<p>Mismo proceso que axial pero con ${P("\\theta_x")} y ${P("GJ")}:</p>`, b += `<div class="er-eq">${M(`K_{torsion} = \\frac{GJ}{L}\\begin{bmatrix}1 & -1\\\\-1 & 1\\end{bmatrix} = \\frac{${Ve(e.G)}\\times${Ve(e.J)}}{${Ve(e.L)}} = \\mathbf{${Ve(J)}}`)}</div>`, b += "</div></div>", b += '<div class="er-deriv-block">', b += '<div class="er-deriv-header" data-toggle="deriv-coup">\u{1F4D6} K[1,5] = 6EI<sub>z</sub>/L\xB2 \u2014 <i>acoplamiento corte-momento</i></div>', b += '<div id="er-deriv-coup" class="er-deriv-body" style="display:none">', b += `<p>Termino cruzado ${P("v_i \\cdot \\theta_{zi}")} (acoplamiento corte-momento):</p>`, b += `<div class="er-eq">${M("K[1,5] = \\frac{EI_z}{L^4} \\int_0^L H_1'' \\cdot H_2'' \\; dx")}</div>`, b += `<div class="er-eq">${M("= \\frac{EI_z}{L^4} \\int_0^L (-6+12\\xi) \\cdot L(-4+6\\xi) \\; dx")}</div>`, b += `<div class="er-eq">${M("= \\frac{EI_z}{L^3} \\int_0^L (24-36\\xi-48\\xi+72\\xi^2) \\; dx = \\frac{EI_z}{L^3} \\cdot 6L")}</div>`, b += `<div class="er-eq er-eq-main">${M(`K[1,5] = \\frac{6EI_z}{L^2} = \\mathbf{${Ve(6 * e.E * e.Iz / e.L ** 2)}}`)}</div>`, b += "</div></div>", b += '<div class="er-subsec">Resumen de coeficientes:</div>', b += `<div class="er-eq">${M(`\\frac{EA}{L} = \\mathbf{${Ve(V)}} \\qquad \\frac{12EI_z}{L^3} = \\mathbf{${Ve(12 * H)}} \\qquad \\frac{12EI_y}{L^3} = \\mathbf{${Ve(12 * Z)}}`)}</div>`, b += `<div class="er-eq">${M(`\\frac{GJ}{L} = \\mathbf{${Ve(J)}} \\qquad \\frac{4EI_y}{L} = \\mathbf{${Ve(4 * e.E * e.Iy / e.L)}} \\qquad \\frac{4EI_z}{L} = \\mathbf{${Ve(4 * e.E * e.Iz / e.L)}}`)}</div>`, b += `<div class="er-eq">${M(`\\frac{6EI_z}{L^2} = \\mathbf{${Ve(6 * e.E * e.Iz / e.L ** 2)}} \\qquad \\frac{6EI_y}{L^2} = \\mathbf{${Ve(6 * e.E * e.Iy / e.L ** 2)}}`)}</div>`, e.kLocal && (b += `<div class="er-subsec">Resultado: ${P("\\mathbf{K}_{local}")} (12x12)</div>`, b += pn(e.kLocal)), b += '<div class="er-section-title">6. Transformacion de coordenadas</div>', b += "<p>Los cosenos directores del eje del elemento:</p>", b += `<div class="er-eq">${M(`l = \\frac{x_j - x_i}{L} = ${wn(e.l)} \\qquad m = \\frac{y_j - y_i}{L} = ${wn(e.m)} \\qquad n = \\frac{z_j - z_i}{L} = ${wn(e.n)}`)}</div>`, b += `<div class="er-eq">${M(`D = \\sqrt{l^2 + m^2} = ${wn(e.D)}`)}</div>`, Math.abs(e.n) > 0.999) {
      b += `<p>Caso especial: elemento vertical (${P(`n \\approx ${e.n > 0 ? "+1" : "-1"}`)}):</p>`;
      const ye = e.n > 0 ? "\\boldsymbol{\\lambda} = \\begin{bmatrix} 0 & 0 & 1 \\\\ 0 & 1 & 0 \\\\ -1 & 0 & 0 \\end{bmatrix}" : "\\boldsymbol{\\lambda} = \\begin{bmatrix} 0 & 0 & -1 \\\\ 0 & 1 & 0 \\\\ 1 & 0 & 0 \\end{bmatrix}";
      b += `<div class="er-eq">${M(ye)}</div>`;
    } else b += `<div class="er-eq">${M("\\boldsymbol{\\lambda} = \\begin{bmatrix} l & m & n \\\\ -m/D & l/D & 0 \\\\ -ln/D & -mn/D & D \\end{bmatrix}")}</div>`;
    b += `<div class="er-eq er-eq-main">${M("\\mathbf{T} = \\mathbf{I}_4 \\otimes \\boldsymbol{\\lambda} \\quad \\text{(Kronecker product} \\rightarrow 12 \\times 12 \\text{ bloque-diagonal)}")}</div>`, b += `<div class="er-section-title">7. ${P("\\mathbf{K}_{global}")} = ${P("\\mathbf{T}^T \\cdot \\mathbf{K}_{local} \\cdot \\mathbf{T}")}</div>`, b += "<p>Transformar la rigidez local al sistema global de coordenadas:</p>", b += `<div class="er-eq er-eq-main">${M("\\mathbf{K}_{global} = \\mathbf{T}^T \\cdot \\mathbf{K}_{local} \\cdot \\mathbf{T}")}</div>`, e.kGlobal && (b += pn(e.kGlobal)), b += '<div class="er-section-title">8. Ensamblaje</div>';
    const _ = e.elem[0] * 6, G = e.elem[1] * 6;
    if (b += `<div class="er-eq">${M(`\\text{Nodo } ${e.elem[0]} \\rightarrow \\text{DOFs } [${_} \\ldots ${_ + 5}]`)}</div>`, b += `<div class="er-eq">${M(`\\text{Nodo } ${e.elem[1]} \\rightarrow \\text{DOFs } [${G} \\ldots ${G + 5}]`)}</div>`, b += `<div class="er-eq">${M("\\mathbf{K}_{total}[\\text{DOFs}_i, \\text{DOFs}_j] \\mathrel{+}= \\mathbf{K}_{global}[i, j]")}</div>`, b += '<div class="er-section-title">9. Recuperacion de fuerzas internas</div>', b += `<div class="er-eq">${M("\\mathbf{u}_{local} = \\mathbf{T} \\cdot \\mathbf{u}_{global}")}</div>`, b += `<div class="er-eq er-eq-main">${M("\\mathbf{f}_{local} = \\mathbf{K}_{local} \\cdot \\mathbf{u}_{local}")}</div>`, e.fLocal.length > 0 && e.fLocal.some((ye) => ye !== 0)) {
      const ye = [
        "N",
        "V<sub>y</sub>",
        "V<sub>z</sub>",
        "M<sub>x</sub>",
        "M<sub>y</sub>",
        "M<sub>z</sub>"
      ];
      b += '<table class="er-forces"><tr><th></th>';
      for (const z of ye) b += `<th>${z}</th>`;
      b += `</tr><tr><td>i (${e.elem[0]})</td>`;
      for (let z = 0; z < 6; z++) b += `<td class="${Math.abs(e.fLocal[z]) > 1e-10 ? "nz" : ""}">${Ve(e.fLocal[z], 3)}</td>`;
      b += `</tr><tr><td>j (${e.elem[1]})</td>`;
      for (let z = 6; z < 12; z++) b += `<td class="${Math.abs(e.fLocal[z]) > 1e-10 ? "nz" : ""}">${Ve(e.fLocal[z], 3)}</td>`;
      b += "</tr></table>";
    }
    return b;
  }
  function wl(e) {
    let b = "";
    if (b += `<div class="er-section-title">Resumen \u2014 Elemento ${e.elemIdx}</div>`, b += '<table class="er-props">', b += `<tr><td>Tipo</td><td>${e.isFrame ? "Frame (Euler-Bernoulli)" : "Shell"}</td></tr>`, b += `<tr><td>Nodos</td><td>${e.elem.join(" \u2192 ")}</td></tr>`, b += `<tr><td>Longitud</td><td><b>${Ve(e.L)}</b></td></tr>`, b += `<tr><td>E</td><td>${Ve(e.E)}</td></tr>`, b += `<tr><td>A</td><td>${Ve(e.A)}</td></tr>`, b += "</table>", e.uGlobal.length > 0) {
      b += '<div class="er-section-title">Desplazamientos</div>';
      const P = [
        "u<sub>x</sub>",
        "u<sub>y</sub>",
        "u<sub>z</sub>",
        "\u03B8<sub>x</sub>",
        "\u03B8<sub>y</sub>",
        "\u03B8<sub>z</sub>"
      ];
      b += '<table class="er-forces"><tr><th>Nodo</th>';
      for (const M of P) b += `<th>${M}</th>`;
      b += "</tr>";
      for (let M = 0; M < e.elem.length; M++) {
        b += `<tr><td>${e.elem[M]}</td>`;
        for (let V = 0; V < 6; V++) {
          const H = e.uGlobal[M * 6 + V];
          b += `<td class="${Math.abs(H) > 1e-10 ? "nz" : ""}">${Ve(H, 6)}</td>`;
        }
        b += "</tr>";
      }
      b += "</table>";
    }
    if (e.fLocal.length > 0 && e.fLocal.some((P) => P !== 0)) {
      b += '<div class="er-section-title">Fuerzas internas</div>';
      const P = [
        "N",
        "V<sub>y</sub>",
        "V<sub>z</sub>",
        "M<sub>x</sub>",
        "M<sub>y</sub>",
        "M<sub>z</sub>"
      ];
      b += '<table class="er-forces"><tr><th></th>';
      for (const M of P) b += `<th>${M}</th>`;
      b += "</tr><tr><td>Nodo i</td>";
      for (let M = 0; M < 6; M++) b += `<td class="${Math.abs(e.fLocal[M]) > 1e-10 ? "nz" : ""}">${Ve(e.fLocal[M], 3)}</td>`;
      b += "</tr><tr><td>Nodo j</td>";
      for (let M = 6; M < 12; M++) b += `<td class="${Math.abs(e.fLocal[M]) > 1e-10 ? "nz" : ""}">${Ve(e.fLocal[M], 3)}</td>`;
      b += "</tr></table>";
    }
    return b;
  }
  function Ve(e, b = 2) {
    return Math.abs(e) < 1e-10 ? "0" : Math.abs(e) >= 1e7 || Math.abs(e) < 0.01 && e !== 0 ? e.toExponential(b) : e.toFixed(b);
  }
  function wn(e) {
    return Math.abs(e) < 1e-10 ? "0" : e.toFixed(4);
  }
  function pn(e) {
    var _a;
    const b = e.length, P = Math.min(b, 12);
    let M = '<div style="overflow-x:auto"><table class="er-matrix">';
    for (let V = 0; V < P; V++) {
      M += "<tr>";
      for (let H = 0; H < P; H++) {
        const Z = ((_a = e[V]) == null ? void 0 : _a[H]) ?? 0, J = Math.abs(Z) < 1e-10;
        M += `<td class="${J ? "z" : ""} ${V === H && !J ? "diag" : ""}">${J ? "0" : El(Z)}</td>`;
      }
      M += "</tr>";
    }
    return M += "</table>", b > P && (M += `<div style="color:var(--fem-label);font-size:9px">(${P}\xD7${P} de ${b}\xD7${b})</div>`), M += "</div>", M;
  }
  function El(e) {
    return Math.abs(e) >= 1e6 || Math.abs(e) < 0.01 && e !== 0 ? e.toExponential(1) : Math.abs(e) >= 100 ? e.toFixed(0) : e.toFixed(2);
  }
  function as(e) {
    const b = e.getContext("2d");
    if (!b) return;
    const P = e.width, M = e.height, V = 30, H = P - 2 * V, Z = (M - 3 * V) / 2;
    b.fillStyle = getComputedStyle(document.body).getPropertyValue("--fem-bg").trim() || "#111", b.fillRect(0, 0, P, M);
    const J = (_, G, ye) => {
      b.strokeStyle = "#333", b.lineWidth = 1, b.strokeRect(V, _, H, Z), b.strokeStyle = "#444", b.beginPath(), b.moveTo(V, _ + Z / 2), b.lineTo(V + H, _ + Z / 2), b.stroke(), b.fillStyle = "#888", b.font = "11px sans-serif", b.fillText(G, V + 4, _ + 14);
      for (const W of ye) {
        b.strokeStyle = W.color, b.lineWidth = 2.5, b.beginPath();
        for (let ve = 0; ve <= 100; ve++) {
          const me = ve / 100, pe = V + me * H, se = _ + Z / 2 - W.fn(me) * (Z / 2 * 0.85);
          ve === 0 ? b.moveTo(pe, se) : b.lineTo(pe, se);
        }
        b.stroke();
      }
      let z = V + H - 90;
      for (const W of ye) b.fillStyle = W.color, b.font = "bold 10px sans-serif", b.fillText(W.label, z, _ + Z - 6), z += 36;
      b.fillStyle = "#666", b.font = "9px monospace", b.fillText("0", V, _ + Z + 12), b.fillText("1", V + H - 6, _ + Z + 12), b.fillText("\u03BE", V + H / 2, _ + Z + 12);
    };
    J(V, "Axial (lineal)", [
      {
        fn: (_) => 1 - _,
        color: "#ff6600",
        label: "N\u2081"
      },
      {
        fn: (_) => _,
        color: "#00ccff",
        label: "N\u2082"
      }
    ]), J(V + Z + V, "Flexi\xF3n (Hermite c\xFAbicos)", [
      {
        fn: (_) => 1 - 3 * _ * _ + 2 * _ * _ * _,
        color: "#ff6600",
        label: "H\u2081"
      },
      {
        fn: (_) => _ * (1 - _) * (1 - _),
        color: "#ffcc00",
        label: "H\u2082"
      },
      {
        fn: (_) => 3 * _ * _ - 2 * _ * _ * _,
        color: "#00ccff",
        label: "H\u2083"
      },
      {
        fn: (_) => _ * _ * (_ - 1),
        color: "#00ff66",
        label: "H\u2084"
      }
    ]);
  }
  const Sl = `<style>
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
</style>`, cn = [
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
  let Tn = false, Do = null, fo = null, Yt = null, Nt = null;
  function Il() {
    Nt = document.createElement("button"), Nt.id = "help-tour-btn", Nt.innerHTML = "?", Nt.title = "Ayuda interactiva \u2014 Tour guiado";
    let e = false;
    const b = (M) => {
      Nt.style.cssText = M ? "position:fixed;bottom:5px;right:5px;z-index:9999999;width:20px;height:20px;border-radius:50%;background:#555;color:#aaa;border:1px solid #777;font-size:10px;cursor:pointer;opacity:0.5;transition:all 0.2s;" : "position:fixed;bottom:20px;right:20px;z-index:9999999;width:36px;height:36px;border-radius:50%;background:linear-gradient(135deg,#0066cc,#0099ff);color:white;border:2px solid rgba(255,255,255,0.3);font-size:18px;font-weight:bold;cursor:pointer;box-shadow:0 2px 10px rgba(0,102,204,0.3);transition:all 0.2s;font-family:'Arial Nova',sans-serif;";
    };
    b(false), Nt.addEventListener("contextmenu", (M) => {
      M.preventDefault(), e = !e, b(e), Nt.innerHTML = "?";
    }), Nt.addEventListener("mouseenter", () => {
      Nt.style.transform = "scale(1.15)", Nt.style.boxShadow = "0 6px 20px rgba(0,102,204,0.6)";
    }), Nt.addEventListener("mouseleave", () => {
      Nt.style.transform = "scale(1)", Nt.style.boxShadow = "0 4px 15px rgba(0,102,204,0.4)";
    }), Nt.addEventListener("click", () => {
      Tn ? ds() : kl();
    });
    const P = document.createElement("style");
    return P.textContent = `
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
  `, document.head.appendChild(P), Nt;
  }
  function kl() {
    Tn = true, Nt && (Nt.innerHTML = "\u2715", Nt.style.background = "linear-gradient(135deg, #cc3333, #ff4444)", Nt.style.animation = "none"), Do = document.createElement("div"), Do.id = "tour-overlay", Do.style.cssText = `
    position: fixed; inset: 0; z-index: 9999990;
    pointer-events: none;
  `, document.body.appendChild(Do), Zo(0);
  }
  function ds() {
    Tn = false, Nt && (Nt.innerHTML = "?", Nt.style.background = "linear-gradient(135deg, #0066cc, #0099ff)", Nt.style.animation = "helpPulse 2s infinite"), fo && (fo.remove(), fo = null), Yt && (Yt.remove(), Yt = null), Do && (Do.remove(), Do = null);
  }
  function Zo(e) {
    var _a, _b;
    if (e >= cn.length) {
      Tl();
      return;
    }
    const b = cn[e], P = document.querySelector(b.selector);
    if (!P) {
      Zo(e + 1);
      return;
    }
    P.scrollIntoView({
      behavior: "smooth",
      block: "nearest"
    }), fo && fo.remove(), Yt && Yt.remove();
    const M = P.getBoundingClientRect(), V = window.innerWidth, H = window.innerHeight, Z = 320, J = 180;
    fo = document.createElement("div"), fo.style.cssText = `
    position: fixed;
    left: ${M.left - 6}px; top: ${M.top - 6}px;
    width: ${M.width + 12}px; height: ${M.height + 12}px;
    border-radius: 8px;
    z-index: 9999991;
    pointer-events: none;
    animation: spotlightPulse 1.5s ease-in-out infinite;
    transition: all 0.3s ease;
  `, document.body.appendChild(fo);
    const _ = V - M.right, G = M.left, ye = H - M.bottom, z = M.top;
    let W = b.position || "bottom";
    W === "bottom" && ye < J + 20 && (W = "top"), W === "top" && z < J + 20 && (W = "right"), W === "right" && _ < Z + 20 && (W = "left"), W === "left" && G < Z + 20 && (W = "bottom");
    let ve, me, pe = "";
    switch (W) {
      case "bottom":
        ve = M.left + M.width / 2 - Z / 2, me = M.bottom + 14, pe = "position:absolute;top:-8px;left:50%;transform:translateX(-50%);width:0;height:0;border-left:8px solid transparent;border-right:8px solid transparent;border-bottom:8px solid #0099ff;";
        break;
      case "top":
        ve = M.left + M.width / 2 - Z / 2, me = M.top - J - 14, pe = "position:absolute;bottom:-8px;left:50%;transform:translateX(-50%);width:0;height:0;border-left:8px solid transparent;border-right:8px solid transparent;border-top:8px solid #0099ff;";
        break;
      case "right":
        ve = M.right + 14, me = M.top + M.height / 2 - J / 2, pe = "position:absolute;left:-8px;top:50%;transform:translateY(-50%);width:0;height:0;border-top:8px solid transparent;border-bottom:8px solid transparent;border-right:8px solid #0099ff;";
        break;
      case "left":
        ve = M.left - Z - 14, me = M.top + M.height / 2 - J / 2, pe = "position:absolute;right:-8px;top:50%;transform:translateY(-50%);width:0;height:0;border-top:8px solid transparent;border-bottom:8px solid transparent;border-left:8px solid #0099ff;";
        break;
    }
    ve = Math.max(10, Math.min(ve, V - Z - 10)), me = Math.max(10, Math.min(me, H - J - 10)), Yt = document.createElement("div"), Yt.style.cssText = `
    position: fixed;
    left: ${ve}px; top: ${me}px;
    width: ${Z}px;
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
  `, Yt.innerHTML = `
    <div style="${pe}"></div>
    <div style="display:flex;align-items:center;margin-bottom:8px;">
      <span class="tour-hand">\u{1F446}</span>
      <span style="color:#0099ff;font-weight:bold;font-size:15px;">${b.title}</span>
      <span style="margin-left:auto;color:#666;font-size:11px;">${e + 1}/${cn.length}</span>
    </div>
    <p style="margin:0 0 12px 0;font-size:12px;line-height:1.6;color:#bbb;">${b.description}</p>
    <div style="display:flex;gap:8px;justify-content:flex-end;">
      ${e > 0 ? '<button id="tour-prev" style="padding:5px 14px;background:transparent;color:#888;border:1px solid #444;border-radius:6px;cursor:pointer;font-size:11px;">\u25C0 Anterior</button>' : ""}
      <button id="tour-next" style="padding:5px 18px;background:linear-gradient(135deg,#0066cc,#0099ff);color:white;border:none;border-radius:6px;cursor:pointer;font-size:12px;font-weight:bold;">
        ${e < cn.length - 1 ? "Siguiente \u25B6" : "Finalizar \u2713"}
      </button>
    </div>
    <div style="margin-top:8px;display:flex;gap:3px;justify-content:center;">
      ${cn.map((q, D) => `<div style="width:${D === e ? "16px" : "6px"};height:6px;border-radius:3px;background:${D === e ? "#0099ff" : D < e ? "#004488" : "#333"};transition:all 0.3s;"></div>`).join("")}
    </div>
  `, document.body.appendChild(Yt), (_a = Yt.querySelector("#tour-next")) == null ? void 0 : _a.addEventListener("click", () => {
      Zo(e + 1);
    }), (_b = Yt.querySelector("#tour-prev")) == null ? void 0 : _b.addEventListener("click", () => {
      Zo(e - 1);
    });
    const se = (q) => {
      if (!Tn) {
        document.removeEventListener("keydown", se);
        return;
      }
      (q.key === "ArrowRight" || q.key === "Enter") && (Zo(e + 1), document.removeEventListener("keydown", se)), q.key === "ArrowLeft" && (Zo(Math.max(0, e - 1)), document.removeEventListener("keydown", se)), q.key === "Escape" && (ds(), document.removeEventListener("keydown", se));
    };
    document.addEventListener("keydown", se);
  }
  function Tl() {
    var _a;
    fo && (fo.remove(), fo = null), Yt && (Yt.remove(), Yt = null), Yt = document.createElement("div"), Yt.style.cssText = `
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
  `, Yt.innerHTML = `
    <div style="font-size:48px;margin-bottom:12px;">\u{1F393}</div>
    <h3 style="color:#00cc66;margin:0 0 8px 0;font-size:18px;">Tour Completado</h3>
    <p style="color:#888;font-size:12px;line-height:1.6;margin:0 0 16px 0;">
      Ya conoces las herramientas principales.<br>
      Presiona <b style="color:#0099ff">?</b> en cualquier momento para repetir el tour.<br>
      Usa <b style="color:#0099ff">Inspect</b> en un elemento para ver el analisis FEM completo.
    </p>
    <button id="tour-done" style="padding:8px 24px;background:linear-gradient(135deg,#00aa55,#00cc66);color:white;border:none;border-radius:8px;cursor:pointer;font-size:14px;font-weight:bold;">Entendido</button>
  `, document.body.appendChild(Yt), (_a = Yt.querySelector("#tour-done")) == null ? void 0 : _a.addEventListener("click", () => ds());
  }
  function zl(e) {
    var _a;
    const b = e.split(/\r?\n/), P = {
      force: "TONF",
      length: "M"
    }, M = [], V = /* @__PURE__ */ new Map(), H = /* @__PURE__ */ new Map(), Z = /* @__PURE__ */ new Map(), J = [], _ = [], G = /* @__PURE__ */ new Map(), ye = /* @__PURE__ */ new Map(), z = [], W = [];
    let ve = "", me = "";
    const pe = /* @__PURE__ */ new Map();
    for (const Ce of b) {
      const _e = Ce.trim();
      if (!_e || _e.startsWith("$")) {
        _e.startsWith("$ ") && (me = _e.substring(2).trim());
        continue;
      }
      if (me && (pe.has(me) || pe.set(me, []), pe.get(me).push(Ce)), me === "CONTROLS") {
        const xe = _e.match(/UNITS\s+"([^"]+)"\s+"([^"]+)"/);
        xe && (P.force = xe[1], P.length = xe[2]);
        const Fe = _e.match(/TITLE2\s+"([^"]+)"/);
        Fe && (ve = Fe[1]);
      }
      if (me === "STORIES - IN SEQUENCE FROM TOP") {
        const xe = _e.match(/STORY\s+"([^"]+)"\s+(?:HEIGHT\s+([\d.]+)|ELEV\s+([-\d.]+))/);
        if (xe) {
          const Fe = xe[1], ge = xe[2] ? parseFloat(xe[2]) : 0, ke = xe[3] ? parseFloat(xe[3]) : void 0;
          M.push({
            name: Fe,
            height: ge,
            elev: ke ?? 0
          });
        }
      }
      if (me === "MATERIAL PROPERTIES") {
        const xe = _e.match(/MATERIAL\s+"([^"]+)"\s+(?:TYPE\s+"([^"]+)")?/);
        if (xe) {
          const Fe = xe[1];
          V.has(Fe) || V.set(Fe, {
            type: xe[2] || "",
            E: 0,
            G: 0,
            nu: 0
          });
          const ge = V.get(Fe);
          xe[2] && (ge.type = xe[2]);
          const ke = _e.match(/\bE\s+([\d.eE+-]+)/);
          ke && (ge.E = parseFloat(ke[1]));
          const Je = _e.match(/\bU\s+([\d.eE+-]+)/);
          Je && (ge.nu = parseFloat(Je[1]), ge.G = ge.E / (2 * (1 + ge.nu)));
          const De = _e.match(/\bFY\s+([\d.eE+-]+)/);
          De && (ge.fy = parseFloat(De[1]));
          const ut = _e.match(/\bFC\s+([\d.eE+-]+)/);
          ut && (ge.fc = parseFloat(ut[1]));
          const xt = _e.match(/WEIGHTPERVOLUME\s+([\d.eE+-]+)/);
          xt && (ge.density = parseFloat(xt[1]));
        }
      }
      if (me === "FRAME SECTIONS") {
        const xe = _e.match(/FRAMESECTION\s+"([^"]+)"/);
        if (xe) {
          const Fe = xe[1];
          H.has(Fe) || H.set(Fe, {
            material: "",
            shape: "",
            D: 0,
            B: 0,
            TF: 0,
            TW: 0
          });
          const ge = H.get(Fe), ke = _e.match(/MATERIAL\s+"([^"]+)"/);
          ke && (ge.material = ke[1]);
          const Je = _e.match(/SHAPE\s+"([^"]+)"/);
          Je && (ge.shape = Je[1]);
          const De = _e.match(/\bD\s+([\d.eE+-]+)/);
          De && (ge.D = parseFloat(De[1]));
          const ut = _e.match(/\bB\s+([\d.eE+-]+)/);
          ut && (ge.B = parseFloat(ut[1]));
          const xt = _e.match(/\bTF\s+([\d.eE+-]+)/);
          xt && (ge.TF = parseFloat(xt[1]));
          const Ye = _e.match(/\bTW\s+([\d.eE+-]+)/);
          Ye && (ge.TW = parseFloat(Ye[1]));
          const Ze = _e.match(/\bR\s+([\d.eE+-]+)/);
          Ze && (ge.R = parseFloat(Ze[1]));
          const bt = _e.match(/FILLMATERIAL\s+"([^"]+)"/);
          bt && (ge.fillMaterial = bt[1]);
          const ft = _e.match(/I2MOD\s+([\d.eE+-]+)/);
          ft && (ge.modI2 = parseFloat(ft[1]));
          const vt = _e.match(/I3MOD\s+([\d.eE+-]+)/);
          vt && (ge.modI3 = parseFloat(vt[1]));
        }
      }
      if (me === "POINT COORDINATES") {
        const xe = _e.match(/POINT\s+"([^"]+)"\s+([-\d.eE+]+)\s+([-\d.eE+]+)/);
        xe && Z.set(xe[1], [
          parseFloat(xe[2]),
          parseFloat(xe[3])
        ]);
      }
      if (me === "LINE CONNECTIVITIES") {
        const xe = _e.match(/LINE\s+"([^"]+)"\s+(COLUMN|BEAM|BRACE)\s+"([^"]+)"\s+"([^"]+)"\s+(\d+)/);
        xe && J.push({
          name: xe[1],
          type: xe[2],
          pt1: xe[3],
          pt2: xe[4],
          nStories: parseInt(xe[5])
        });
      }
      if (me === "POINT ASSIGNS") {
        const xe = _e.match(/POINTASSIGN\s+"([^"]+)"\s+"([^"]+)".*RESTRAINT\s+"([^"]+)"/);
        xe && G.set(`${xe[1]}@${xe[2]}`, xe[3].split(/\s+/));
      }
      if (me === "LINE ASSIGNS") {
        const xe = _e.match(/LINEASSIGN\s+"([^"]+)"\s+"([^"]+)".*SECTION\s+"([^"]+)"/);
        if (xe) {
          const Fe = {
            story: xe[2],
            section: xe[3],
            rigidZone: 0,
            releases: [],
            angle: 0
          }, ge = _e.match(/RIGIDZONE\s+([\d.eE+-]+)/);
          ge && (Fe.rigidZone = parseFloat(ge[1]));
          const ke = _e.match(/RELEASE\s+"([^"]+)"/);
          ke && (Fe.releases = ke[1].split(/\s+/));
          const Je = _e.match(/ANG\s+([-\d.eE+]+)/);
          Je && (Fe.angle = parseFloat(Je[1])), ye.set(`${xe[1]}@${xe[2]}`, Fe);
        }
      }
      if (me === "GRIDS") {
        const xe = _e.match(/^\s*GRID\s+"[^"]+"\s+LABEL\s+"([^"]+)"\s+DIR\s+"([XY])"\s+COORD\s+([-\d.eE+]+)/);
        xe && W.push({
          label: xe[1],
          dir: xe[2],
          coord: parseFloat(xe[3])
        });
      }
      if (me === "FRAME OBJECT LOADS") {
        const xe = _e.match(/LINELOAD\s+"([^"]+)"\s+"([^"]+)"\s+TYPE\s+"([^"]+)"\s+DIR\s+"([^"]+)"\s+LC\s+"([^"]+)"\s+FVAL\s+([-\d.eE+]+)/);
        xe && z.push({
          line: xe[1],
          story: xe[2],
          type: xe[3],
          dir: xe[4],
          lc: xe[5],
          val: parseFloat(xe[6])
        });
      }
      if (me === "AREA CONNECTIVITIES") {
        const xe = _e.match(/AREA\s+"([^"]+)"\s+\d+\s+(.+)/);
        if (xe) {
          const Fe = ((_a = xe[2].match(/"([^"]+)"/g)) == null ? void 0 : _a.map((ge) => ge.replace(/"/g, ""))) || [];
          _.push({
            name: xe[1],
            pts: Fe,
            nStories: 0
          });
        }
      }
    }
    const se = /* @__PURE__ */ new Map();
    if (M.length > 0) {
      const Ce = M.length - 1;
      se.set(M[Ce].name, M[Ce].elev);
      for (let _e = Ce - 1; _e >= 0; _e--) {
        const Fe = se.get(M[_e + 1].name) + M[_e].height;
        M[_e].elev = Fe, se.set(M[_e].name, Fe);
      }
    }
    const q = [], D = [], Y = /* @__PURE__ */ new Map(), fe = (Ce, _e) => `${Ce}@${_e}`, $e = /* @__PURE__ */ new Set(), ze = /* @__PURE__ */ new Map();
    for (const Ce of J) ze.set(Ce.name, Ce);
    for (const Ce of J) for (const [_e, xe] of ye) {
      if (!_e.startsWith(Ce.name + "@")) continue;
      const Fe = xe.story, ge = M.findIndex((ke) => ke.name === Fe);
      if (!(ge < 0)) if (Ce.type === "COLUMN" || Ce.type === "BRACE") {
        $e.add(fe(Ce.pt2, Fe));
        const ke = Math.max(Ce.nStories, 1), Je = Math.min(ge + ke, M.length - 1);
        $e.add(fe(Ce.pt1, M[Je].name));
      } else $e.add(fe(Ce.pt1, Fe)), $e.add(fe(Ce.pt2, Fe));
    }
    for (const [Ce] of G) $e.add(Ce);
    for (const Ce of $e) {
      const [_e, xe] = Ce.split("@"), Fe = Z.get(_e), ge = se.get(xe);
      Fe === void 0 || ge === void 0 || (q.push([
        Fe[0],
        Fe[1],
        ge
      ]), D.push(Ce), Y.set(Ce, q.length - 1));
    }
    const Xe = [], he = [], je = [], We = [], be = /* @__PURE__ */ new Map();
    for (const Ce of J) for (const [_e, xe] of ye) {
      if (!_e.startsWith(Ce.name + "@")) continue;
      const Fe = xe.story, ge = M.findIndex((Ye) => Ye.name === Fe);
      if (ge < 0) continue;
      let ke, Je;
      if (Ce.type === "COLUMN" || Ce.type === "BRACE") {
        const Ye = Math.max(Ce.nStories, 1), Ze = Math.min(ge + Ye, M.length - 1);
        ke = fe(Ce.pt1, M[Ze].name), Je = fe(Ce.pt2, Fe);
      } else ke = fe(Ce.pt1, Fe), Je = fe(Ce.pt2, Fe);
      const De = Y.get(ke), ut = Y.get(Je);
      if (De === void 0 || ut === void 0 || De === ut) continue;
      const xt = Xe.length;
      if (Xe.push([
        De,
        ut
      ]), he.push(Ce.name), je.push(Ce.type), We.push(Fe), be.set(xt, xe.section), xe.rigidZone > 0 && pt.set(xt, [
        xe.rigidZone,
        xe.rigidZone
      ]), xe.releases.length > 0) {
        const Ye = new Array(12).fill(false), Ze = {
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
        for (const bt of xe.releases) {
          const ft = Ze[bt];
          ft !== void 0 && (Ye[ft] = true);
        }
        mt.set(xt, Ye);
      }
    }
    const Ie = /* @__PURE__ */ new Map(), Ae = /* @__PURE__ */ new Map(), Ue = /* @__PURE__ */ new Map(), dt = /* @__PURE__ */ new Map(), Ke = /* @__PURE__ */ new Map(), pt = /* @__PURE__ */ new Map(), mt = /* @__PURE__ */ new Map(), zt = /* @__PURE__ */ new Map(), qt = /* @__PURE__ */ new Map(), Bt = /* @__PURE__ */ new Map(), $t = /* @__PURE__ */ new Map();
    for (const [Ce, _e] of be) {
      const xe = H.get(_e);
      if (!xe) continue;
      const Fe = V.get(xe.material);
      Fe && (Ie.set(Ce, Fe.E), Ae.set(Ce, Fe.G));
      const ge = xe.D, ke = xe.B, Je = xe.TF, De = xe.TW;
      let ut = 0, xt = 0, Ye = 0, Ze = 0, bt = 0, ft = 0, vt = "rect";
      switch (xe.shape) {
        case "Concrete Rectangular":
          ut = ge * ke, xt = ke * ge ** 3 / 12, Ye = ge * ke ** 3 / 12, Ze = ke * ge ** 3 * (1 / 3 - 0.21 * (ge / ke) * (1 - ge ** 4 / (12 * ke ** 4))), bt = ft = 5 / 6 * ut, vt = "rect";
          break;
        case "Concrete Circle":
          ut = Math.PI * ge ** 2 / 4, xt = Ye = Math.PI * ge ** 4 / 64, Ze = Math.PI * ge ** 4 / 32, bt = ft = 0.9 * ut, vt = "circ";
          break;
        case "Steel I/Wide Flange":
          ut = 2 * ke * Je + (ge - 2 * Je) * De, xt = (ke * ge ** 3 - (ke - De) * (ge - 2 * Je) ** 3) / 12, Ye = (2 * Je * ke ** 3 + (ge - 2 * Je) * De ** 3) / 12, Ze = (2 * ke * Je ** 3 + (ge - 2 * Je) * De ** 3) / 3, bt = (ge - 2 * Je) * De, ft = 2 * ke * Je * 5 / 6, vt = "I";
          break;
        case "Steel Tube":
          ut = ge * ke - (ge - 2 * De) * (ke - 2 * De), xt = (ke * ge ** 3 - (ke - 2 * De) * (ge - 2 * De) ** 3) / 12, Ye = (ge * ke ** 3 - (ge - 2 * De) * (ke - 2 * De) ** 3) / 12, Ze = 2 * De * (ge - De) * (ke - De) * ((ge - De) * (ke - De)) / (ge - De + (ke - De)), bt = 2 * ge * De, ft = 2 * ke * De, vt = "HSS";
          break;
        case "Filled Steel Tube":
          ut = ge * ke, xt = ke * ge ** 3 / 12, Ye = ge * ke ** 3 / 12, Ze = 2 * De * (ge - De) * (ke - De) * ((ge - De) * (ke - De)) / (ge - De + (ke - De)), bt = 2 * ge * De + 5 / 6 * (ge - 2 * De) * (ke - 2 * De), ft = 2 * ke * De + 5 / 6 * (ge - 2 * De) * (ke - 2 * De), vt = "CFT";
          break;
        case "Steel Angle": {
          const Jt = Je || De;
          ut = Jt * (ge + ke - Jt), xt = Jt * (ge ** 3 + ke * Jt ** 2 + Jt ** 2 * (ge - Jt)) / 12, Ye = Jt * (ke ** 3 + ge * Jt ** 2 + Jt ** 2 * (ke - Jt)) / 12, Ze = (ge + ke - Jt) * Jt ** 3 / 3, bt = ge * Jt, ft = ke * Jt, vt = "L";
          break;
        }
        case "Steel Channel":
        case "Cold Formed C":
          ut = 2 * ke * Je + (ge - 2 * Je) * De, xt = (De * ge ** 3 + 2 * ke * Je * (ge - Je) ** 2) / 12, Ye = (2 * Je * ke ** 3 + (ge - 2 * Je) * De ** 3) / 12, Ze = (2 * ke * Je ** 3 + (ge - 2 * Je) * De ** 3) / 3, bt = (ge - 2 * Je) * De, ft = 2 * ke * Je * 5 / 6, vt = xe.shape === "Cold Formed C" ? "coldC" : "C";
          break;
        case "Steel Double Channel":
          ut = 2 * (2 * ke * Je + (ge - 2 * Je) * De), xt = 2 * (De * ge ** 3 + 2 * ke * Je * (ge - Je) ** 2) / 12, Ye = 2 * (2 * Je * ke ** 3 + (ge - 2 * Je) * De ** 3) / 12, Ze = 2 * (2 * ke * Je ** 3 + (ge - 2 * Je) * De ** 3) / 3, bt = 2 * (ge - 2 * Je) * De, ft = 4 * ke * Je * 5 / 6, vt = "2C";
          break;
        default:
          ge > 0 && ke > 0 && (ut = ge * ke, xt = ke * ge ** 3 / 12, Ye = ge * ke ** 3 / 12, Ze = Math.min(ge, ke) * Math.max(ge, ke) ** 3 / 3 * 0.3, bt = ft = 5 / 6 * ut);
          break;
      }
      xe.modI2 && (Ye *= xe.modI2), xe.modI3 && (xt *= xe.modI3), Ue.set(Ce, ut), zt.set(Ce, xt), qt.set(Ce, Ye), Bt.set(Ce, Ze), bt > 0 && dt.set(Ce, bt), ft > 0 && Ke.set(Ce, ft), $t.set(Ce, {
        type: vt,
        b: ke || void 0,
        h: ge || void 0,
        d: vt === "circ" || vt === "pipe" ? ge : void 0,
        tw: De || void 0,
        tf: Je || void 0,
        r: xe.R,
        name: _e
      });
    }
    const ht = /* @__PURE__ */ new Map();
    for (const [Ce, _e] of G) {
      const xe = Y.get(Ce);
      if (xe === void 0) continue;
      const Fe = [
        false,
        false,
        false,
        false,
        false,
        false
      ];
      for (const ge of _e) ge === "UX" && (Fe[0] = true), ge === "UY" && (Fe[1] = true), ge === "UZ" && (Fe[2] = true), ge === "RX" && (Fe[3] = true), ge === "RY" && (Fe[4] = true), ge === "RZ" && (Fe[5] = true);
      ht.set(xe, Fe);
    }
    const uo = /* @__PURE__ */ new Map(), qe = /* @__PURE__ */ new Map();
    for (let Ce = 0; Ce < he.length; Ce++) qe.set(`${he[Ce]}@${We[Ce]}`, Ce);
    for (const Ce of z) {
      const _e = qe.get(`${Ce.line}@${Ce.story}`);
      if (_e === void 0) continue;
      const [xe, Fe] = Xe[_e], ge = q[xe], ke = q[Fe], Je = Math.sqrt((ke[0] - ge[0]) ** 2 + (ke[1] - ge[1]) ** 2 + (ke[2] - ge[2]) ** 2);
      if (Je < 1e-10) continue;
      const De = Ce.val * Je / 2;
      let ut = 0, xt = 0, Ye = 0;
      Ce.dir === "GRAV" || Ce.dir === "GRAVITY" ? Ye = -De : Ce.dir === "X" ? ut = De : Ce.dir === "Y" ? xt = De : Ce.dir === "Z" && (Ye = -De);
      for (const Ze of [
        xe,
        Fe
      ]) {
        const bt = uo.get(Ze) || [
          0,
          0,
          0,
          0,
          0,
          0
        ];
        bt[0] += ut, bt[1] += xt, bt[2] += Ye, uo.set(Ze, bt);
      }
    }
    const St = /* @__PURE__ */ new Map();
    for (const [Ce, _e] of be) {
      const xe = H.get(_e);
      if (!xe) continue;
      const Fe = V.get(xe.material);
      (Fe == null ? void 0 : Fe.density) && St.set(Ce, Fe.density);
    }
    return {
      units: P,
      stories: M.reverse(),
      materials: V,
      frameSections: H,
      nodes: q,
      nodeNames: D,
      nodeNameToIdx: Y,
      elements: Xe,
      elementNames: he,
      elementTypes: je,
      elementStories: We,
      elementSections: be,
      nodeInputs: {
        supports: ht,
        loads: uo
      },
      elementInputs: {
        elasticities: Ie,
        shearModuli: Ae,
        areas: Ue,
        momentsOfInertiaZ: zt,
        momentsOfInertiaY: qt,
        torsionalConstants: Bt,
        shearAreasY: dt,
        shearAreasZ: Ke,
        rigidOffsets: pt,
        momentReleases: mt,
        densities: St,
        sectionShapes: $t
      },
      sectionShapes: $t,
      grids: W,
      info: {
        nNodes: q.length,
        nFrames: Xe.length,
        nAreas: _.length,
        title: ve
      },
      rawSections: pe
    };
  }
  function it(e) {
    return e && parseFloat(e) || 0;
  }
  function ua(e) {
    const b = /* @__PURE__ */ new Map(), P = /(\w+)\s*=\s*(?:"([^"]*?)"|(\S+))/g;
    let M;
    for (; (M = P.exec(e)) !== null; ) b.set(M[1], M[2] !== void 0 ? M[2] : M[3]);
    return b;
  }
  function Al(e) {
    const b = e.split(/\r?\n/);
    return b.some((M) => M.trim().startsWith("TABLE:")) ? Ll(b) : Cl(b);
  }
  function Ll(e) {
    var _a, _b, _c, _d, _e, _f;
    const b = [];
    let P = "";
    for (const se of e) {
      const q = se.trimEnd();
      q.endsWith("_") ? P += q.slice(0, -1) + " " : (P += q, b.push(P), P = "");
    }
    P && b.push(P);
    const M = {
      force: "KN",
      length: "m"
    };
    let V = "UX,UY,UZ,RX,RY,RZ";
    const H = /* @__PURE__ */ new Map(), Z = /* @__PURE__ */ new Map(), J = /* @__PURE__ */ new Map(), _ = /* @__PURE__ */ new Map(), G = [], ye = [], z = /* @__PURE__ */ new Map(), W = /* @__PURE__ */ new Map(), ve = /* @__PURE__ */ new Map(), me = [];
    let pe = "";
    for (const se of b) {
      const q = se.trim();
      if (!q || q.startsWith(";") || q.startsWith("File ")) continue;
      if (q.startsWith("TABLE:")) {
        const Y = q.match(/TABLE:\s+"(.+?)"/);
        pe = Y ? Y[1].toUpperCase() : "";
        continue;
      }
      if (q === "END TABLE DATA") {
        pe = "";
        continue;
      }
      const D = ua(q);
      switch (pe) {
        case "PROGRAM CONTROL": {
          const Y = D.get("CurrUnits");
          if (Y) {
            const fe = Y.split(",").map(($e) => $e.trim());
            fe[0] && (M.force = fe[0]), fe[1] && (M.length = fe[1]);
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
            const fe = H.get(Y) || {
              E: 0,
              nu: 0,
              G: 0
            };
            fe.E = it(D.get("E1")), fe.G = it(D.get("G12")), fe.nu = it(D.get("U12")), fe.density = it(D.get("UnitMass")), H.set(Y, fe);
          }
          break;
        }
        case "MATERIAL PROPERTIES 03A - STEEL DATA": {
          const Y = D.get("Material");
          Y && H.has(Y) && (H.get(Y).fy = it(D.get("Fy")));
          break;
        }
        case "FRAME SECTION PROPERTIES 01 - GENERAL": {
          const Y = D.get("SectionName");
          Y && Z.set(Y, {
            material: D.get("Material") || "",
            shape: D.get("Shape") || "Rectangular",
            D: it(D.get("t3")),
            B: it(D.get("t2")),
            TF: it(D.get("tf")),
            TW: it(D.get("tw")),
            A: it(D.get("Area")),
            Iz: it(D.get("I33")),
            Iy: it(D.get("I22")),
            J: it(D.get("TorsConst"))
          });
          break;
        }
        case "AREA SECTION PROPERTIES": {
          const Y = D.get("Section");
          Y && J.set(Y, {
            material: D.get("Material") || "",
            type: D.get("Type") || "Shell",
            thickness: it(D.get("Thickness"))
          });
          break;
        }
        case "JOINT COORDINATES": {
          const Y = D.get("Joint");
          if (Y) {
            const fe = it(D.get("XorR")), $e = it(D.get("Y")), ze = it(D.get("Z"));
            _.set(Y, [
              fe,
              $e,
              ze
            ]);
          }
          break;
        }
        case "CONNECTIVITY - FRAME": {
          const Y = D.get("Frame"), fe = D.get("JointI"), $e = D.get("JointJ");
          Y && fe && $e && G.push({
            name: Y,
            j1: fe,
            j2: $e
          });
          break;
        }
        case "CONNECTIVITY - AREA": {
          const Y = D.get("Area");
          if (Y) {
            const fe = parseInt(D.get("NumJoints") || "4"), $e = [];
            for (let ze = 1; ze <= fe; ze++) {
              const Xe = D.get(`Joint${ze}`);
              Xe && $e.push(Xe);
            }
            $e.length >= 3 && ye.push({
              name: Y,
              joints: $e
            });
          }
          break;
        }
        case "JOINT RESTRAINT ASSIGNMENTS": {
          const Y = D.get("Joint");
          if (Y) {
            const fe = [
              ((_a = D.get("U1")) == null ? void 0 : _a.toLowerCase()) === "yes",
              ((_b = D.get("U2")) == null ? void 0 : _b.toLowerCase()) === "yes",
              ((_c = D.get("U3")) == null ? void 0 : _c.toLowerCase()) === "yes",
              ((_d = D.get("R1")) == null ? void 0 : _d.toLowerCase()) === "yes",
              ((_e = D.get("R2")) == null ? void 0 : _e.toLowerCase()) === "yes",
              ((_f = D.get("R3")) == null ? void 0 : _f.toLowerCase()) === "yes"
            ];
            z.set(Y, fe);
          }
          break;
        }
        case "FRAME SECTION ASSIGNMENTS": {
          const Y = D.get("Frame"), fe = D.get("AnalSect");
          Y && fe && W.set(Y, fe);
          break;
        }
        case "AREA SECTION ASSIGNMENTS": {
          const Y = D.get("Area"), fe = D.get("Section");
          Y && fe && ve.set(Y, fe);
          break;
        }
        case "JOINT LOADS - FORCE": {
          const Y = D.get("Joint");
          Y && me.push({
            joint: Y,
            fx: it(D.get("F1")),
            fy: it(D.get("F2")),
            fz: it(D.get("F3")),
            mx: it(D.get("M1")),
            my: it(D.get("M2")),
            mz: it(D.get("M3"))
          });
          break;
        }
      }
    }
    return ma(M, V, H, Z, J, _, G, ye, z, W, ve, me);
  }
  function Cl(e) {
    const b = {
      force: "KN",
      length: "m"
    };
    let P = "UX,UY,UZ,RX,RY,RZ";
    const M = /* @__PURE__ */ new Map(), V = /* @__PURE__ */ new Map(), H = /* @__PURE__ */ new Map(), Z = /* @__PURE__ */ new Map(), J = [], _ = [], G = /* @__PURE__ */ new Map(), ye = [];
    let z = "", W = "";
    for (const pe of e) {
      const se = pe.trim();
      if (!se || se.startsWith(";")) continue;
      if (!pe.startsWith(" ") && !pe.startsWith("	")) {
        const Y = se.toUpperCase();
        if (Y === "END") break;
        Y.startsWith("SHELL SECTION") ? z = "SHELL SECTION" : Y.startsWith("FRAME SECTION") ? z = "FRAME SECTION" : z = Y.split(/\s+/)[0];
        continue;
      }
      const q = ua(se), D = se.split(/\s+/);
      switch (z) {
        case "SYSTEM": {
          const Y = q.get("DOF");
          Y && (P = Y);
          const fe = q.get("LENGTH");
          fe && (b.length = fe);
          const $e = q.get("FORCE");
          $e && (b.force = $e);
          break;
        }
        case "JOINT": {
          const Y = D[0];
          Z.set(Y, [
            it(q.get("X")),
            it(q.get("Y")),
            it(q.get("Z"))
          ]);
          break;
        }
        case "RESTRAINT": {
          const Y = q.get("ADD"), fe = q.get("DOF");
          if (Y && fe) {
            const $e = fe.split(","), ze = [
              false,
              false,
              false,
              false,
              false,
              false
            ];
            for (const Xe of $e) {
              const he = Xe.toUpperCase();
              (he === "UX" || he === "U1") && (ze[0] = true), (he === "UY" || he === "U2") && (ze[1] = true), (he === "UZ" || he === "U3") && (ze[2] = true), (he === "RX" || he === "R1") && (ze[3] = true), (he === "RY" || he === "R2") && (ze[4] = true), (he === "RZ" || he === "R3") && (ze[5] = true);
            }
            G.set(Y, ze);
          }
          break;
        }
        case "MATERIAL": {
          const Y = q.get("NAME");
          if (Y) W = Y, M.set(Y, {
            E: 0,
            nu: 0,
            G: 0
          });
          else if (W) {
            const fe = M.get(W), $e = q.get("E");
            $e && (fe.E = it($e));
            const ze = q.get("U");
            ze && (fe.nu = it(ze)), fe.G = fe.E / (2 * (1 + fe.nu));
            const Xe = q.get("M");
            Xe && (fe.density = it(Xe));
          }
          break;
        }
        case "SHELL": {
          const Y = D[0], fe = q.get("J");
          q.get("SEC"), fe && _.push({
            name: Y,
            joints: fe.split(",")
          });
          break;
        }
        case "SHELL SECTION": {
          const Y = q.get("NAME");
          Y && H.set(Y, {
            material: q.get("MAT") || "",
            type: q.get("TYPE") || "Shell",
            thickness: it(q.get("TH"))
          });
          break;
        }
        case "FRAME": {
          const Y = D[0], fe = q.get("J");
          if (fe) {
            const $e = fe.split(",");
            $e.length >= 2 && J.push({
              name: Y,
              j1: $e[0],
              j2: $e[1]
            });
          }
          break;
        }
        case "LOAD": {
          const Y = q.get("ADD");
          Y && ye.push({
            joint: Y,
            fx: it(q.get("UX")),
            fy: it(q.get("UY")),
            fz: it(q.get("UZ")),
            mx: it(q.get("MX")),
            my: it(q.get("MY")),
            mz: it(q.get("MZ"))
          });
          break;
        }
      }
    }
    return ma(b, P, M, V, H, Z, J, _, G, /* @__PURE__ */ new Map(), /* @__PURE__ */ new Map(), ye);
  }
  function ma(e, b, P, M, V, H, Z, J, _, G, ye, z) {
    var _a;
    const W = [], ve = /* @__PURE__ */ new Map(), me = [];
    for (const [he, je] of H) ve.set(he, me.length), W.push(he), me.push(je);
    const pe = [], se = [], q = /* @__PURE__ */ new Map();
    for (const he of Z) {
      const je = ve.get(he.j1), We = ve.get(he.j2);
      if (je !== void 0 && We !== void 0) {
        const be = pe.length;
        pe.push([
          je,
          We
        ]), se.push(he.name);
        const Ie = G.get(he.name);
        Ie && q.set(be, Ie);
      }
    }
    const D = pe.length;
    for (const he of J) {
      const je = he.joints.map((We) => ve.get(We)).filter((We) => We !== void 0);
      if (je.length >= 3) {
        const We = pe.length;
        pe.push(je), se.push(he.name);
        const be = ye.get(he.name);
        be && q.set(We, be);
      }
    }
    const Y = pe.length - D, fe = {
      elasticities: /* @__PURE__ */ new Map(),
      shearModuli: /* @__PURE__ */ new Map(),
      areas: /* @__PURE__ */ new Map(),
      momentsOfInertiaZ: /* @__PURE__ */ new Map(),
      momentsOfInertiaY: /* @__PURE__ */ new Map(),
      torsionalConstants: /* @__PURE__ */ new Map(),
      densities: /* @__PURE__ */ new Map(),
      thicknesses: /* @__PURE__ */ new Map(),
      poissonsRatios: /* @__PURE__ */ new Map()
    }, $e = /* @__PURE__ */ new Map(), ze = P.values().next().value || {
      E: 29e3,
      nu: 0.3,
      G: 11153
    };
    for (let he = 0; he < pe.length; he++) {
      const je = q.get(he), We = je ? M.get(je) : null, be = je ? V.get(je) : null;
      if (We || pe[he].length === 2) {
        const Ie = We || {
          material: "",
          A: 0,
          Iz: 0,
          Iy: 0,
          J: 0,
          D: 0.3,
          B: 0.3,
          shape: "Rectangular"
        }, Ae = P.get(Ie.material) || ze, Ue = Ae.E || ze.E, dt = Ae.nu || 0.3, Ke = Ae.G || Ue / (2 * (1 + dt));
        fe.elasticities.set(he, Ue), fe.shearModuli.set(he, Ke), fe.areas.set(he, Ie.A || Ie.D * Ie.B), fe.momentsOfInertiaZ.set(he, Ie.Iz || Ie.B * Ie.D ** 3 / 12), fe.momentsOfInertiaY.set(he, Ie.Iy || Ie.D * Ie.B ** 3 / 12), fe.torsionalConstants.set(he, Ie.J || 0), fe.densities.set(he, Ae.density || 0), ((_a = Ie.shape) == null ? void 0 : _a.includes("Wide Flange")) || Ie.shape === "I" ? $e.set(he, {
          type: "I",
          b: Ie.B,
          h: Ie.D,
          name: je || "I-section"
        }) : $e.set(he, {
          type: "rect",
          b: Ie.B,
          h: Ie.D
        });
      } else if (be) {
        const Ie = P.get(be.material) || ze, Ae = Ie.E || ze.E, Ue = Ie.nu || 0.2, dt = Ie.G || Ae / (2 * (1 + Ue));
        fe.elasticities.set(he, Ae), fe.shearModuli.set(he, dt), fe.thicknesses.set(he, be.thickness), fe.poissonsRatios.set(he, Ue), fe.densities.set(he, Ie.density || 0);
      }
    }
    const Xe = {
      supports: /* @__PURE__ */ new Map(),
      forces: /* @__PURE__ */ new Map()
    };
    for (const [he, je] of _) {
      const We = ve.get(he);
      We !== void 0 && Xe.supports.set(We, je);
    }
    for (const he of z) {
      const je = ve.get(he.joint);
      if (je !== void 0) {
        const We = Xe.forces.get(je) || [
          0,
          0,
          0,
          0,
          0,
          0
        ];
        We[0] += he.fx, We[1] += he.fy, We[2] += he.fz, We[3] += he.mx, We[4] += he.my, We[5] += he.mz, Xe.forces.set(je, We);
      }
    }
    return {
      units: e,
      dof: b,
      materials: P,
      frameSections: M,
      shellSections: V,
      nodes: me,
      nodeNames: W,
      nodeNameToIdx: ve,
      elements: pe,
      elementNames: se,
      elementSections: q,
      nodeInputs: Xe,
      elementInputs: fe,
      sectionShapes: $e,
      info: {
        nNodes: me.length,
        nFrames: D,
        nShells: Y,
        title: `SAP2000 (${D} frames, ${Y} shells)`
      }
    };
  }
  function Fl(e) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j;
    const { nodes: b, elements: P, nodeInputs: M, elementInputs: V } = e, H = e.units || {
      force: "KN",
      length: "m"
    }, Z = e.title || "Awatif Model", J = [], _ = (q) => J.push(q), G = () => J.push(" ");
    _(`File ${Z}.$2k was saved on m/d/yy at h:mm:ss`), G(), _('TABLE:  "ACTIVE DEGREES OF FREEDOM"'), _("   UX=Yes   UY=Yes   UZ=Yes   RX=Yes   RY=Yes   RZ=Yes"), G();
    const ye = [], z = [];
    if (P.forEach((q, D) => {
      q.length === 2 ? ye.push(D) : z.push(D);
    }), ye.length > 0) {
      _('TABLE:  "CONNECTIVITY - FRAME"');
      for (const q of ye) {
        const D = P[q];
        _(`   Frame=${q + 1}   JointI=${D[0] + 1}   JointJ=${D[1] + 1}   IsCurved=No`);
      }
      G();
    }
    if (z.length > 0) {
      _('TABLE:  "CONNECTIVITY - AREA"');
      for (const q of z) {
        const D = P[q], Y = D.map((fe, $e) => `Joint${$e + 1}=${fe + 1}`).join("   ");
        _(`   Area=${q + 1}   NumJoints=${D.length}   ${Y}`);
      }
      G();
    }
    _('TABLE:  "COORDINATE SYSTEMS"'), _("   Name=GLOBAL   Type=Cartesian   X=0   Y=0   Z=0   AboutZ=0   AboutY=0   AboutX=0"), G(), _('TABLE:  "DATABASE FORMAT TYPES"'), _("   UnitsCurr=Yes   OverrideE=No"), G();
    const W = /* @__PURE__ */ new Map(), ve = /* @__PURE__ */ new Map();
    for (const q of ye) {
      const D = ((_a = V.areas) == null ? void 0 : _a.get(q)) || 0, Y = ((_b = V.momentsOfInertiaZ) == null ? void 0 : _b.get(q)) || 0, fe = ((_c = V.momentsOfInertiaY) == null ? void 0 : _c.get(q)) || 0, $e = ((_d = V.torsionalConstants) == null ? void 0 : _d.get(q)) || 0, ze = ((_e = V.elasticities) == null ? void 0 : _e.get(q)) || 0, Xe = `MAT_${Math.round(ze)}`, he = `A${D.toPrecision(6)}_Iz${Y.toPrecision(6)}`;
      if (!W.has(he)) {
        let We = 0.3, be = 0.3;
        D > 0 && Y > 0 && (We = Math.sqrt(12 * Y / D), be = D / We), W.set(he, {
          A: D,
          Iz: Y,
          Iy: fe,
          J: $e,
          b: be,
          h: We,
          matKey: Xe
        });
      }
      const je = [
        ...W.keys()
      ].indexOf(he) + 1;
      ve.set(q, `SEC${je}`);
    }
    if (ye.length > 0) {
      _('TABLE:  "FRAME SECTION ASSIGNMENTS"');
      for (const q of ye) {
        const D = ve.get(q) || "SEC1";
        _(`   Frame=${q + 1}   AutoSelect=N.A.   AnalSect=${D}   MatProp=Default`);
      }
      G();
    }
    if (W.size > 0) {
      _('TABLE:  "FRAME SECTION PROPERTIES 01 - GENERAL"');
      let q = 0;
      for (const [, D] of W) {
        q++;
        const Y = D.A * 5 / 6;
        _(`   SectionName=SEC${q}   Material=${D.matKey}   Shape=Rectangular   t3=${Rt(D.h)}   t2=${Rt(D.b)}   Area=${Rt(D.A)}   TorsConst=${Rt(D.J)}   I33=${Rt(D.Iz)}   I22=${Rt(D.Iy)}   I23=0   AS2=${Rt(Y)}   AS3=${Rt(Y)} _`), _("        Color=Blue   FromFile=No   AMod=1   A2Mod=1   A3Mod=1   JMod=1   I2Mod=1   I3Mod=1   MMod=1   WMod=1");
      }
      G();
    }
    const me = /* @__PURE__ */ new Map(), pe = /* @__PURE__ */ new Map();
    for (const q of z) {
      const D = ((_f = V.thicknesses) == null ? void 0 : _f.get(q)) || 0.1, Y = ((_g = V.elasticities) == null ? void 0 : _g.get(q)) || 0, fe = `MAT_${Math.round(Y)}`, $e = `t${D.toPrecision(6)}`;
      me.has($e) || me.set($e, {
        t: D,
        matKey: fe
      });
      const ze = [
        ...me.keys()
      ].indexOf($e) + 1;
      pe.set(q, `SSEC${ze}`);
    }
    if (z.length > 0) {
      _('TABLE:  "AREA SECTION ASSIGNMENTS"');
      for (const D of z) {
        const Y = pe.get(D) || "SSEC1";
        _(`   Area=${D + 1}   Section=${Y}   MatProp=Default`);
      }
      G(), _('TABLE:  "AREA SECTION PROPERTIES"');
      let q = 0;
      for (const [, D] of me) q++, _(`   Section=SSEC${q}   Material=${D.matKey}   MatAngle=0   AreaType=Shell   Type=ShellThin   DrillDOF=Yes   Thickness=${Rt(D.t)}   BendThick=${Rt(D.t)}   Color=Cyan`);
      G();
    }
    _('TABLE:  "JOINT COORDINATES"');
    for (let q = 0; q < b.length; q++) {
      const D = b[q];
      _(`   Joint=${q + 1}   CoordSys=GLOBAL   CoordType=Cartesian   XorR=${Rt(D[0])}   Y=${Rt(D[1])}   Z=${Rt(D[2])}   SpecialJt=No`);
    }
    if (G(), M.supports && M.supports.size > 0) {
      _('TABLE:  "JOINT RESTRAINT ASSIGNMENTS"');
      for (const [q, D] of M.supports) {
        if (!D.some((fe) => fe)) continue;
        const Y = (fe) => fe ? "Yes" : "No";
        _(`   Joint=${q + 1}   U1=${Y(D[0])}   U2=${Y(D[1])}   U3=${Y(D[2])}   R1=${Y(D[3])}   R2=${Y(D[4])}   R3=${Y(D[5])}`);
      }
      G();
    }
    if (_('TABLE:  "LOAD PATTERN DEFINITIONS"'), _("   LoadPat=DEAD   DesignType=Dead   SelfWtMult=0"), G(), _('TABLE:  "LOAD CASE DEFINITIONS"'), _('   Case=DEAD   Type=LinStatic   InitialCond=Zero   DesTypeOpt="Prog Det"   DesignType=Dead   DesActOpt="Prog Det"   DesignAct=Non-Composite   AutoType=None   RunCase=Yes'), G(), _('TABLE:  "CASE - STATIC 1 - LOAD ASSIGNMENTS"'), _('   Case=DEAD   LoadType="Load pattern"   LoadName=DEAD   LoadSF=1'), G(), M.forces && M.forces.size > 0) {
      _('TABLE:  "JOINT LOADS - FORCE"');
      for (const [q, D] of M.forces) D.some((Y) => Math.abs(Y) > 1e-12) && _(`   Joint=${q + 1}   LoadPat=DEAD   CoordSys=GLOBAL   F1=${Rt(D[0])}   F2=${Rt(D[1])}   F3=${Rt(D[2])}   M1=${Rt(D[3])}   M2=${Rt(D[4])}   M3=${Rt(D[5])}`);
      G();
    }
    const se = /* @__PURE__ */ new Map();
    for (let q = 0; q < P.length; q++) {
      const D = ((_h = V.elasticities) == null ? void 0 : _h.get(q)) || 0, Y = ((_i = V.shearModuli) == null ? void 0 : _i.get(q)) || 0, fe = D > 0 && Y > 0 ? Math.max(0, Math.min(0.5, D / (2 * Y) - 1)) : 0.2, $e = ((_j = V.densities) == null ? void 0 : _j.get(q)) || 0, ze = `MAT_${Math.round(D)}`;
      se.has(ze) || se.set(ze, {
        E: D,
        nu: fe,
        G: Y,
        rho: $e
      });
    }
    _('TABLE:  "MATERIAL PROPERTIES 01 - GENERAL"');
    for (const [q] of se) _(`   Material=${q}   Type=Concrete   SymType=Isotropic   TempDepend=No   Color=Green`);
    G(), _('TABLE:  "MATERIAL PROPERTIES 02 - BASIC MECHANICAL PROPERTIES"');
    for (const [q, D] of se) _(`   Material=${q}   UnitWeight=${Rt(D.rho * 9.81)}   UnitMass=${Rt(D.rho)}   E1=${Rt(D.E)}   G12=${Rt(D.G)}   U12=${Rt(D.nu)}   A1=9.9E-06`);
    G(), _('TABLE:  "MATERIAL PROPERTIES 03B - CONCRETE DATA"');
    for (const [q] of se) _(`   Material=${q}   Fc=27579   eFc=27579   LtWtConc=No   SSCurveOpt=Mander   SSHysType=Takeda   SFc=0.00222   SCap=0.005   FinalSlope=-0.1   FAngle=0   DAngle=0`);
    return G(), _('TABLE:  "PROGRAM CONTROL"'), _(`   ProgramName=SAP2000   Version=24.1.0   CurrUnits="${H.force}, ${H.length}, C"   SteelCode="AISC 360-16"   ConcCode="ACI 318-19"   AlumCode="AA 2015"   ColdCode=AISI-16   RegenHinge=Yes`), G(), _("END TABLE DATA"), _(""), J.join(`\r
`);
  }
  function Rt(e) {
    return e === 0 || Math.abs(e) < 1e-15 ? "0" : Math.abs(e) >= 1e6 || Math.abs(e) < 1e-3 && Math.abs(e) > 0 ? e.toExponential(8) : parseFloat(e.toPrecision(10)).toString();
  }
  function Pl(e) {
    const { e2kModel: b } = e, P = b == null ? void 0 : b.rawSections;
    return P && P.size > 0 ? Rl(P) : Ol(e);
  }
  function Rl(e, b) {
    const P = [], M = [
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
    P.push("$ File exported from Awatif FEM Studio (round-trip)"), P.push("");
    for (const V of M) {
      const H = e.get(V);
      if (!(!H || H.length === 0)) {
        P.push(`$ ${V}`);
        for (const Z of H) P.push(Z);
        P.push("");
      }
    }
    for (const [V, H] of e) if (!M.includes(V) && H.length !== 0) {
      P.push(`$ ${V}`);
      for (const Z of H) P.push(Z);
      P.push("");
    }
    return P.push("  END"), P.push("$ END OF MODEL FILE"), P.join(`\r
`);
  }
  function Ol(e) {
    var _a, _b, _c, _d;
    const { nodes: b, elements: P, nodeInputs: M, elementInputs: V, title: H, units: Z } = e, J = (Z == null ? void 0 : Z.force) || "TONF", _ = (Z == null ? void 0 : Z.length) || "M", G = [], ye = (be) => Math.round(be * 1e4) / 1e4;
    G.push("$ File exported from Awatif FEM Studio"), G.push(""), G.push("$ PROGRAM INFORMATION"), G.push('  PROGRAM  "AWATIF"  VERSION "1.0.0"  '), G.push(""), G.push("$ CONTROLS"), G.push(`  UNITS  "${J}"  "${_}"  "C"  `), H && G.push(`  TITLE2  "${H}"  `), G.push("");
    const z = /* @__PURE__ */ new Set();
    b.forEach((be) => z.add(ye(be[1])));
    const W = [
      ...z
    ].sort((be, Ie) => be - Ie), ve = [], me = /* @__PURE__ */ new Map();
    ve.push("Base"), me.set(W[0], "Base");
    for (let be = 1; be < W.length; be++) {
      const Ie = `Level_${be}`;
      ve.push(Ie), me.set(W[be], Ie);
    }
    G.push("$ STORIES - IN SEQUENCE FROM TOP");
    for (let be = W.length - 1; be >= 1; be--) G.push(`  STORY "${ve[be]}"  HEIGHT ${ye(W[be] - W[be - 1])} MASTERSTORY "Yes"  `);
    W.length > 0 && G.push(`  STORY "Base"  ELEV ${W[0]} `), G.push(""), P.some((be) => be.length === 4) && (G.push("$ DIAPHRAGM NAMES"), G.push('  DIAPHRAGM "D1"    TYPE RIGID'), G.push("")), G.push("$ MATERIAL PROPERTIES");
    const se = /* @__PURE__ */ new Set();
    (_a = V.elasticities) == null ? void 0 : _a.forEach((be) => se.add(be));
    const q = /* @__PURE__ */ new Map();
    let D = 0;
    for (const be of se) {
      const Ie = `Mat_${++D}`;
      q.set(be, Ie), G.push(`  MATERIAL  "${Ie}"    TYPE "Concrete"    WEIGHTPERVOLUME 2.4`), G.push(`  MATERIAL  "${Ie}"    SYMTYPE "Isotropic"  E ${be}  U 0.2  A 1E-05`);
    }
    G.push(""), G.push("$ FRAME SECTIONS");
    const Y = /* @__PURE__ */ new Set(), fe = /* @__PURE__ */ new Map(), $e = /* @__PURE__ */ new Map();
    P.forEach((be, Ie) => {
      var _a2, _b2;
      if (be.length !== 2) return;
      const Ae = (_a2 = V.sectionShapes) == null ? void 0 : _a2.get(Ie), Ue = ((_b2 = V.elasticities) == null ? void 0 : _b2.get(Ie)) ?? 0, dt = q.get(Ue) || "Mat_1", Ke = (Ae == null ? void 0 : Ae.h) ?? 0, pt = (Ae == null ? void 0 : Ae.b) ?? 0, mt = (Ae == null ? void 0 : Ae.d) ?? 0, zt = (Ae == null ? void 0 : Ae.tf) ?? 0, qt = (Ae == null ? void 0 : Ae.tw) ?? 0, Bt = (Ae == null ? void 0 : Ae.type) || "rect", $t = `${Bt}_${Ke}_${pt}_${mt}_${zt}_${qt}`;
      (Ae == null ? void 0 : Ae.name) && !$e.has($t) && $e.set($t, Ae.name);
      let ht = $e.get($t);
      if (ht || (Bt === "rect" ? ht = `R${ye(pt * 100)}x${ye(Ke * 100)}` : Bt === "circ" ? ht = `C_D${ye(mt * 100)}` : Bt === "I" ? ht = `I_${ye(Ke * 100)}` : ht = `Sec_${Y.size + 1}`, $e.set($t, ht)), fe.set(Ie, ht), Y.has(ht)) return;
      Y.add(ht);
      const qe = {
        rect: "Concrete Rectangular",
        circ: "Concrete Circle",
        I: "Steel I/Wide Flange",
        HSS: "Steel Tube",
        pipe: "Steel Pipe",
        L: "Steel Angle",
        C: "Steel Channel",
        "2C": "Steel Double Channel"
      }[Bt] || "Concrete Rectangular";
      let St = `  FRAMESECTION  "${ht}"  MATERIAL "${dt}"  SHAPE "${qe}"`;
      Ke && (St += `  D ${Ke}`), pt && (St += `  B ${pt}`), mt && !Ke && (St += `  D ${mt}`), zt && (St += `  TF ${zt}`), qt && (St += `  TW ${qt}`), G.push(St);
    }), G.push("");
    const ze = /* @__PURE__ */ new Map();
    let Xe = 0;
    b.forEach((be) => {
      const Ie = `${ye(be[0])},${ye(be[2])}`;
      ze.has(Ie) || ze.set(Ie, `${++Xe}`);
    }), G.push("$ POINT COORDINATES");
    for (const [be, Ie] of ze) {
      const [Ae, Ue] = be.split(",").map(Number);
      G.push(`  POINT "${Ie}"  ${Ae} ${Ue} `);
    }
    G.push("");
    const he = (be) => {
      const Ie = b[be], Ae = `${ye(Ie[0])},${ye(Ie[2])}`;
      return {
        pt: ze.get(Ae) || "1",
        story: me.get(ye(Ie[1])) || "Base"
      };
    };
    G.push("$ LINE CONNECTIVITIES");
    const je = [];
    P.forEach((be, Ie) => {
      if (be.length !== 2) return;
      const Ae = Nl(b, be), Ue = fe.get(Ie) || `Sec_${Ie}`;
      if (Ae === "BEAM") {
        const dt = he(be[0]), Ke = he(be[1]);
        G.push(`  LINE  "E${Ie + 1}"  BEAM  "${dt.pt}"  "${Ke.pt}"  0`), je.push(`  LINEASSIGN  "E${Ie + 1}"  "${dt.story}"  SECTION "${Ue}"  MINNUMSTA 3 AUTOMESH "YES"  MESHATINTERSECTIONS "YES"  `);
      } else {
        const dt = b[be[0]][1] <= b[be[1]][1] ? be[0] : be[1], Ke = b[be[0]][1] <= b[be[1]][1] ? be[1] : be[0];
        he(dt);
        const pt = he(Ke), mt = ye(b[dt][1]), zt = ye(b[Ke][1]), qt = W.indexOf(mt), Bt = W.indexOf(zt), $t = Math.max(1, Bt >= 0 && qt >= 0 ? Bt - qt : 1);
        G.push(`  LINE  "E${Ie + 1}"  ${Ae}  "${pt.pt}"  "${pt.pt}"  ${$t}`);
        for (let ht = 0; ht < $t; ht++) {
          const uo = Bt - ht;
          uo >= 0 && uo < ve.length && je.push(`  LINEASSIGN  "E${Ie + 1}"  "${ve[uo]}"  SECTION "${Ue}"  MINNUMSTA 3 AUTOMESH "YES"  MESHATINTERSECTIONS "YES"  `);
        }
      }
    }), G.push(""), G.push("$ POINT ASSIGNS"), (_b = M.supports) == null ? void 0 : _b.forEach((be, Ie) => {
      const Ae = [];
      if (be[0] && Ae.push("UX"), be[1] && Ae.push("UY"), be[2] && Ae.push("UZ"), be[3] && Ae.push("RX"), be[4] && Ae.push("RY"), be[5] && Ae.push("RZ"), Ae.length > 0) {
        const Ue = he(Ie);
        G.push(`  POINTASSIGN  "${Ue.pt}"  "${Ue.story}"  RESTRAINT "${Ae.join(" ")}"  `);
      }
    }), G.push(""), G.push("$ LINE ASSIGNS"), je.forEach((be) => G.push(be)), G.push("");
    const We = [];
    if (P.forEach((be, Ie) => {
      if (be.length === 4) {
        const Ae = b[be[0]], Ue = b[be[1]], dt = b[be[2]], Ke = [
          Ue[0] - Ae[0],
          Ue[1] - Ae[1],
          Ue[2] - Ae[2]
        ], pt = [
          dt[0] - Ae[0],
          dt[1] - Ae[1],
          dt[2] - Ae[2]
        ], mt = Math.abs(Ke[2] * pt[0] - Ke[0] * pt[2]), zt = Math.sqrt((Ke[1] * pt[2] - Ke[2] * pt[1]) ** 2 + mt ** 2 + (Ke[0] * pt[1] - Ke[1] * pt[0]) ** 2), qt = zt > 1e-10 && mt / zt < 0.5;
        We.push({
          idx: Ie,
          el: be,
          isWall: qt
        });
      }
    }), We.some((be) => !be.isWall)) {
      G.push("$ SLAB PROPERTIES");
      const be = ((_c = V.thicknesses) == null ? void 0 : _c.values().next().value) ?? 0.15;
      G.push(`  SHELLPROP  "Losa"  PROPTYPE  "Slab"  MATERIAL "${q.values().next().value || "Mat_1"}"  MODELINGTYPE "ShellThin"  SLABTYPE "Slab"  SLABTHICKNESS ${be} `), G.push("");
    }
    if (We.some((be) => be.isWall)) {
      G.push("$ WALL PROPERTIES");
      const be = ((_d = V.thicknesses) == null ? void 0 : _d.values().next().value) ?? 0.2;
      G.push(`  SHELLPROP  "Muro"  PROPTYPE  "Wall"  MATERIAL "${q.values().next().value || "Mat_1"}"  MODELINGTYPE "ShellThick"  WALLTHICKNESS ${be} `), G.push("");
    }
    if (We.length > 0) {
      G.push("$ AREA CONNECTIVITIES");
      const be = [];
      We.forEach((Ie, Ae) => {
        const { el: Ue, isWall: dt } = Ie, Ke = dt ? `W${Ae + 1}` : `F${Ae + 1}`, pt = dt ? "PANEL" : "FLOOR", mt = Ue.map((zt) => he(zt));
        if (dt) {
          const zt = b[Ue[0]][1] <= b[Ue[2]][1] ? 0 : 2, qt = b[Ue[1]][1] <= b[Ue[3]][1] ? 1 : 3;
          G.push(`  AREA "${Ke}"  ${pt}  4  "${mt[zt].pt}"  "${mt[qt].pt}"  "${mt[qt].pt}"  "${mt[zt].pt}"  1  1  0  0  `);
          const Bt = mt[zt === 0 ? 2 : 0].story;
          be.push(`  AREAASSIGN  "${Ke}"  "${Bt}"  SECTION "Muro"  OBJMESHTYPE "DEFAULT"  ADDRESTRAINT "Yes"  CARDINALPOINT "MIDDLE"  TRANSFORMSTIFFNESSFOROFFSETS "No"  `);
        } else G.push(`  AREA "${Ke}"  ${pt}  4  "${mt[0].pt}"  "${mt[1].pt}"  "${mt[2].pt}"  "${mt[3].pt}"  0  0  0  0  `), be.push(`  AREAASSIGN  "${Ke}"  "${mt[0].story}"  SECTION "Losa"  DIAPH  "D1"  OBJMESHTYPE "DEFAULT"  ADDRESTRAINT "Yes"  CARDINALPOINT "TOP"  TRANSFORMSTIFFNESSFOROFFSETS "No"  `);
      }), G.push(""), G.push("$ AREA ASSIGNS"), be.forEach((Ie) => G.push(Ie)), G.push("");
    }
    return G.push("$ LOAD PATTERNS"), G.push('  LOADPATTERN "Dead"  TYPE  "Dead"  SELFWEIGHT  1'), G.push('  LOADPATTERN "Live"  TYPE  "Live"  SELFWEIGHT  0'), G.push(""), M.loads && M.loads.size > 0 && (G.push("$ POINT OBJECT LOADS"), M.loads.forEach((be, Ie) => {
      const [Ae, Ue, dt] = be, Ke = he(Ie);
      Math.abs(Ae) > 1e-10 && G.push(`  POINTLOAD  "${Ke.pt}"  "${Ke.story}"  "Dead"  TYPE "FORCE"  FX ${Ae}`), Math.abs(Ue) > 1e-10 && G.push(`  POINTLOAD  "${Ke.pt}"  "${Ke.story}"  "Dead"  TYPE "FORCE"  FY ${Ue}`), Math.abs(dt) > 1e-10 && G.push(`  POINTLOAD  "${Ke.pt}"  "${Ke.story}"  "Dead"  TYPE "FORCE"  FZ ${dt}`);
    }), G.push("")), G.push("  END"), G.push("$ END OF MODEL FILE"), G.join(`\r
`);
  }
  function Nl(e, b) {
    const P = e[b[0]], M = e[b[1]], V = Math.abs(M[1] - P[1]), H = Math.sqrt((M[0] - P[0]) ** 2 + (M[2] - P[2]) ** 2), Z = V > H * 0.5;
    return Z && H > 0.01 ? "BRACE" : Z ? "COLUMN" : "BEAM";
  }
  function ql(e) {
    var _a, _b;
    const { nodes: b, elements: P, nodeInputs: M, elementInputs: V } = e, H = [];
    return H.push("# OpenSeesPy model exported from Awatif FEM Studio"), H.push(`# ${b.length} nodes, ${P.length} elements`), H.push(""), H.push("import openseespy.opensees as ops"), H.push(""), H.push("ops.wipe()"), H.push("ops.model('basic', '-ndm', 3, '-ndf', 6)"), H.push(""), H.push("# --- Nodes ---"), b.forEach((Z, J) => {
      H.push(`ops.node(${J + 1}, ${Z[0]}, ${Z[1]}, ${Z[2]})`);
    }), H.push(""), H.push("# --- Boundary Conditions ---"), (_a = M.supports) == null ? void 0 : _a.forEach((Z, J) => {
      const _ = Z.map((G) => G ? 1 : 0).join(", ");
      H.push(`ops.fix(${J + 1}, ${_})`);
    }), H.push(""), H.push("# --- Geometric Transformations ---"), H.push("ops.geomTransf('Linear', 1, 0.0, 0.0, 1.0)  # beams (vecxz = Z)"), H.push("ops.geomTransf('Linear', 2, -1.0, 0.0, 0.0)  # columns (vecxz = -X)"), H.push(""), H.push("# --- Elements (elasticBeamColumn) ---"), P.forEach((Z, J) => {
      var _a2, _b2, _c, _d, _e, _f;
      if (Z.length !== 2) return;
      const _ = b[Z[0]], G = b[Z[1]], z = Math.abs(G[2] - _[2]) > Math.max(Math.abs(G[0] - _[0]), Math.abs(G[1] - _[1])) ? 2 : 1, W = ((_a2 = V.areas) == null ? void 0 : _a2.get(J)) ?? 1, ve = ((_b2 = V.elasticities) == null ? void 0 : _b2.get(J)) ?? 2e5, me = ((_c = V.shearModuli) == null ? void 0 : _c.get(J)) ?? 8e4, pe = ((_d = V.torsionalConstants) == null ? void 0 : _d.get(J)) ?? 1, se = ((_e = V.momentsOfInertiaY) == null ? void 0 : _e.get(J)) ?? 1, q = ((_f = V.momentsOfInertiaZ) == null ? void 0 : _f.get(J)) ?? 1;
      H.push(`ops.element('elasticBeamColumn', ${J + 1}, ${Z[0] + 1}, ${Z[1] + 1}, ${W}, ${ve}, ${me}, ${pe}, ${se}, ${q}, ${z})`);
    }), H.push(""), M.loads && M.loads.size > 0 && (H.push("# --- Loads ---"), H.push("ops.timeSeries('Linear', 1)"), H.push("ops.pattern('Plain', 1, 1)"), M.loads.forEach((Z, J) => {
      const _ = Z.map((G) => G).join(", ");
      H.push(`ops.load(${J + 1}, ${_})`);
    }), H.push("")), H.push("# --- Analysis ---"), H.push("ops.system('BandGeneral')"), H.push("ops.numberer('RCM')"), H.push("ops.constraints('Plain')"), H.push("ops.integrator('LoadControl', 1.0)"), H.push("ops.algorithm('Linear')"), H.push("ops.analysis('Static')"), H.push("ops.analyze(1)"), H.push(""), H.push("# --- Results ---"), H.push('print("\\n=== Displacements ===")'), b.forEach((Z, J) => {
      H.push(`print(f"Node {${J + 1}}: {ops.nodeDisp(${J + 1})}")`);
    }), H.push(""), H.push('print("\\n=== Reactions ===")'), H.push("ops.reactions()"), (_b = M.supports) == null ? void 0 : _b.forEach((Z, J) => {
      H.push(`print(f"Node {${J + 1}}: {ops.nodeReaction(${J + 1})}")`);
    }), H.join(`
`);
  }
  function _l(e) {
    var _a, _b;
    const { nodes: b, elements: P, nodeInputs: M, elementInputs: V } = e, H = [];
    return H.push("# OpenSees Tcl model exported from Awatif FEM Studio"), H.push(`# ${b.length} nodes, ${P.length} elements`), H.push(""), H.push("wipe"), H.push("model basic -ndm 3 -ndf 6"), H.push(""), H.push("# --- Nodes ---"), b.forEach((Z, J) => {
      H.push(`node ${J + 1} ${Z[0]} ${Z[1]} ${Z[2]}`);
    }), H.push(""), H.push("# --- Boundary Conditions ---"), (_a = M.supports) == null ? void 0 : _a.forEach((Z, J) => {
      const _ = Z.map((G) => G ? 1 : 0).join(" ");
      H.push(`fix ${J + 1} ${_}`);
    }), H.push(""), H.push("# --- Geometric Transformations ---"), H.push("geomTransf Linear 1 0.0 0.0 1.0"), H.push("geomTransf Linear 2 -1.0 0.0 0.0"), H.push(""), H.push("# --- Elements ---"), P.forEach((Z, J) => {
      var _a2, _b2, _c, _d, _e, _f;
      if (Z.length !== 2) return;
      const _ = b[Z[0]], G = b[Z[1]], z = Math.abs(G[2] - _[2]) > Math.max(Math.abs(G[0] - _[0]), Math.abs(G[1] - _[1])) ? 2 : 1, W = ((_a2 = V.areas) == null ? void 0 : _a2.get(J)) ?? 1, ve = ((_b2 = V.elasticities) == null ? void 0 : _b2.get(J)) ?? 2e5, me = ((_c = V.shearModuli) == null ? void 0 : _c.get(J)) ?? 8e4, pe = ((_d = V.torsionalConstants) == null ? void 0 : _d.get(J)) ?? 1, se = ((_e = V.momentsOfInertiaY) == null ? void 0 : _e.get(J)) ?? 1, q = ((_f = V.momentsOfInertiaZ) == null ? void 0 : _f.get(J)) ?? 1;
      H.push(`element elasticBeamColumn ${J + 1} ${Z[0] + 1} ${Z[1] + 1} ${W} ${ve} ${me} ${pe} ${se} ${q} ${z}`);
    }), H.push(""), M.loads && M.loads.size > 0 && (H.push("# --- Loads ---"), H.push("timeSeries Linear 1"), H.push("pattern Plain 1 1 {"), M.loads.forEach((Z, J) => {
      const _ = Z.map((G) => G).join(" ");
      H.push(`  load ${J + 1} ${_}`);
    }), H.push("}"), H.push("")), H.push("# --- Analysis ---"), H.push("system BandGeneral"), H.push("numberer RCM"), H.push("constraints Plain"), H.push("integrator LoadControl 1.0"), H.push("algorithm Linear"), H.push("analysis Static"), H.push("analyze 1"), H.push(""), H.push("# --- Results ---"), H.push('puts "\\n=== Displacements ==="'), b.forEach((Z, J) => {
      H.push(`puts "Node ${J + 1}: [nodeDisp ${J + 1}]"`);
    }), H.push('puts "\\n=== Reactions ==="'), H.push("reactions"), (_b = M.supports) == null ? void 0 : _b.forEach((Z, J) => {
      H.push(`puts "Node ${J + 1}: [nodeReaction ${J + 1}]"`);
    }), H.join(`
`);
  }
  function Dl(e) {
    const b = [], P = [], M = /* @__PURE__ */ new Map(), V = /* @__PURE__ */ new Map(), H = /* @__PURE__ */ new Map(), Z = /* @__PURE__ */ new Map(), J = /* @__PURE__ */ new Map(), _ = /* @__PURE__ */ new Map(), G = /* @__PURE__ */ new Map(), ye = /* @__PURE__ */ new Map(), z = /* @__PURE__ */ new Map(), W = /* @__PURE__ */ new Map();
    for (const ve of e.split(/\r?\n/)) {
      const me = ve.trim(), pe = me.match(/ops\.node\(\s*(\d+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)/);
      if (pe) {
        const Y = parseInt(pe[1]), fe = b.length;
        b.push([
          parseFloat(pe[2]),
          parseFloat(pe[3]),
          parseFloat(pe[4])
        ]), z.set(Y, fe);
        continue;
      }
      const se = me.match(/ops\.fix\(\s*(\d+)\s*,\s*(\d)\s*,\s*(\d)\s*,\s*(\d)\s*,\s*(\d)\s*,\s*(\d)\s*,\s*(\d)/);
      if (se) {
        const Y = parseInt(se[1]), fe = z.get(Y);
        fe !== void 0 && M.set(fe, [
          se[2] === "1",
          se[3] === "1",
          se[4] === "1",
          se[5] === "1",
          se[6] === "1",
          se[7] === "1"
        ]);
        continue;
      }
      const q = me.match(/ops\.element\(\s*'elasticBeamColumn'\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)/);
      if (q) {
        const Y = parseInt(q[1]), fe = z.get(parseInt(q[2])), $e = z.get(parseInt(q[3]));
        if (fe !== void 0 && $e !== void 0) {
          const ze = P.length;
          P.push([
            fe,
            $e
          ]), W.set(Y, ze), J.set(ze, parseFloat(q[4])), H.set(ze, parseFloat(q[5])), Z.set(ze, parseFloat(q[6])), ye.set(ze, parseFloat(q[7])), _.set(ze, parseFloat(q[8])), G.set(ze, parseFloat(q[9]));
        }
        continue;
      }
      const D = me.match(/ops\.load\(\s*(\d+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)/);
      if (D) {
        const Y = z.get(parseInt(D[1]));
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
      nodes: b,
      elements: P,
      nodeInputs: {
        supports: M,
        loads: V
      },
      elementInputs: {
        elasticities: H,
        shearModuli: Z,
        areas: J,
        momentsOfInertiaY: _,
        momentsOfInertiaZ: G,
        torsionalConstants: ye
      }
    };
  }
  function Bl(e) {
    const b = [], P = [], M = /* @__PURE__ */ new Map(), V = /* @__PURE__ */ new Map(), H = /* @__PURE__ */ new Map(), Z = /* @__PURE__ */ new Map(), J = /* @__PURE__ */ new Map(), _ = /* @__PURE__ */ new Map(), G = /* @__PURE__ */ new Map(), ye = /* @__PURE__ */ new Map(), z = /* @__PURE__ */ new Map();
    for (const W of e.split(/\r?\n/)) {
      const ve = W.trim();
      if (ve.startsWith("#") || ve.startsWith("//")) continue;
      const me = ve.split(/\s+/);
      if (me[0] === "node" && me.length >= 5) {
        const pe = parseInt(me[1]), se = b.length;
        b.push([
          parseFloat(me[2]),
          parseFloat(me[3]),
          parseFloat(me[4])
        ]), z.set(pe, se);
        continue;
      }
      if (me[0] === "fix" && me.length >= 8) {
        const pe = z.get(parseInt(me[1]));
        pe !== void 0 && M.set(pe, [
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
        const pe = z.get(parseInt(me[3])), se = z.get(parseInt(me[4]));
        if (pe !== void 0 && se !== void 0) {
          const q = P.length;
          P.push([
            pe,
            se
          ]), J.set(q, parseFloat(me[5])), H.set(q, parseFloat(me[6])), Z.set(q, parseFloat(me[7])), ye.set(q, parseFloat(me[8])), _.set(q, parseFloat(me[9])), G.set(q, parseFloat(me[10]));
        }
        continue;
      }
      if (me[0] === "load" && me.length >= 8) {
        const pe = z.get(parseInt(me[1]));
        pe !== void 0 && V.set(pe, [
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
      nodes: b,
      elements: P,
      nodeInputs: {
        supports: M,
        loads: V
      },
      elementInputs: {
        elasticities: H,
        shearModuli: Z,
        areas: J,
        momentsOfInertiaY: _,
        momentsOfInertiaZ: G,
        torsionalConstants: ye
      }
    };
  }
  function oo(e) {
    const b = [];
    let P = 0, M = false, V = "";
    for (let H = 0; H < e.length; H++) {
      const Z = e[H];
      if (Z === "'" && (H === 0 || e[H - 1] !== "\\")) {
        M = !M, V += Z;
        continue;
      }
      if (M) {
        V += Z;
        continue;
      }
      if (Z === "(") {
        P++, V += Z;
        continue;
      }
      if (Z === ")") {
        P--, V += Z;
        continue;
      }
      if (Z === "," && P === 0) {
        b.push(V.trim()), V = "";
        continue;
      }
      V += Z;
    }
    return V.trim() && b.push(V.trim()), b;
  }
  function ba(e, b) {
    const P = oo(e);
    if (b < P.length) {
      let M = P[b].trim();
      return M.startsWith("'") && M.endsWith("'") && (M = M.slice(1, -1)), M === "$" ? null : M;
    }
    return null;
  }
  function Hl(e) {
    const b = {
      schema: "",
      project: "",
      app: ""
    }, P = {}, M = {}, V = e.match(/FILE_SCHEMA\s*\(\s*\(\s*'([^']*)'/i);
    V && (b.schema = V[1]);
    const H = /^#(\d+)\s*=\s*([A-Z][A-Z0-9_]*)\s*\(([\s\S]*?)\)\s*;\s*$/gm;
    let Z;
    for (; (Z = H.exec(e)) !== null; ) {
      const J = parseInt(Z[1]), _ = Z[2].toUpperCase();
      P[J] = {
        id: J,
        type: _,
        args: Z[3]
      }, M[_] || (M[_] = []), M[_].push(J);
    }
    if (M.IFCPROJECT) {
      const J = P[M.IFCPROJECT[0]];
      if (J) {
        const _ = ba(J.args, 2);
        _ && (b.project = _);
      }
    }
    return {
      meta: b,
      entities: P,
      typeIndex: M
    };
  }
  function Kt(e, b) {
    const P = b.match(/#(\d+)/);
    return P && e[parseInt(P[1])] || null;
  }
  function ga(e, b) {
    const P = oo(b.args), M = Kt(e, P[0]), V = M ? jl(e, M) : [
      0,
      0,
      0
    ];
    let H = [
      0,
      0,
      1
    ], Z = [
      1,
      0,
      0
    ];
    if (P[1] && P[1] !== "$") {
      const J = Kt(e, P[1]);
      J && (H = da(e, J));
    }
    if (P[2] && P[2] !== "$") {
      const J = Kt(e, P[2]);
      J && (Z = da(e, J));
    }
    return {
      origin: V,
      dirZ: H,
      dirX: Z
    };
  }
  function jl(e, b) {
    return b.args.replace(/[()]/g, "").split(",").map((M) => parseFloat(M.trim())).filter((M) => !isNaN(M));
  }
  function da(e, b) {
    return b.args.replace(/[()]/g, "").split(",").map((M) => parseFloat(M.trim())).filter((M) => !isNaN(M));
  }
  function ha(e, b) {
    const P = oo(b.args), M = Kt(e, P[1]);
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
    if (M && (V = ga(e, M)), P[0] && P[0] !== "$") {
      const H = Kt(e, P[0]);
      if (H && H.type === "IFCLOCALPLACEMENT") {
        const Z = ha(e, H), J = rs(V.origin, Z.dirX, ls(Z.dirZ, Z.dirX), Z.dirZ);
        V.origin = [
          Z.origin[0] + J[0],
          Z.origin[1] + J[1],
          Z.origin[2] + J[2]
        ], V.dirZ = rs(V.dirZ, Z.dirX, ls(Z.dirZ, Z.dirX), Z.dirZ), V.dirX = rs(V.dirX, Z.dirX, ls(Z.dirZ, Z.dirX), Z.dirZ);
      }
    }
    return V;
  }
  function ls(e, b) {
    return [
      e[1] * b[2] - e[2] * b[1],
      e[2] * b[0] - e[0] * b[2],
      e[0] * b[1] - e[1] * b[0]
    ];
  }
  function rs(e, b, P, M) {
    return [
      e[0] * b[0] + e[1] * P[0] + e[2] * M[0],
      e[0] * b[1] + e[1] * P[1] + e[2] * M[1],
      e[0] * b[2] + e[1] * P[2] + e[2] * M[2]
    ];
  }
  const Wl = 0.01;
  function Gl(e) {
    const b = Hl(e), { entities: P, typeIndex: M } = b, V = [], H = [], Z = /* @__PURE__ */ new Map();
    Z.set("Hormigon", {
      E: 2132888792e-2,
      nu: 0.2,
      rho: 2.4
    }), Z.set("Acero", {
      E: 2e8,
      nu: 0.3,
      rho: 7.85
    });
    let J = 0, _ = 0;
    function G(se, q, D) {
      for (const Y of V) {
        const fe = Y.x - se, $e = Y.y - q, ze = Y.z - D;
        if (Math.sqrt(fe * fe + $e * $e + ze * ze) < Wl) return Y.id;
      }
      return V.push({
        id: J,
        x: se,
        y: q,
        z: D
      }), J++;
    }
    function ye(se) {
      const q = ba(se.args, 2) || "", D = M.IFCRELASSOCIATESMATERIAL || [];
      for (const fe of D) {
        const $e = P[fe];
        if (!$e) continue;
        const ze = oo($e.args);
        if ((ze[4] || ze[3] || "").includes(`#${se.id}`)) {
          const he = ze[5] || ze[4] || "", je = Kt(P, he);
          if (je) return z(je);
        }
      }
      const Y = q.match(/(\d+)\s*[xX×]\s*(\d+)/);
      return Y ? {
        b: parseFloat(Y[1]) / 100,
        h: parseFloat(Y[2]) / 100,
        name: q
      } : {
        b: 0.3,
        h: 0.3,
        name: q || "Default"
      };
    }
    function z(se) {
      const q = se.type;
      if (q === "IFCRECTANGLEPROFILEDEF") {
        const D = oo(se.args), Y = (D[1] || "").replace(/'/g, ""), fe = parseFloat(D[3]) || 0.3, $e = parseFloat(D[4]) || 0.3;
        return {
          b: fe,
          h: $e,
          name: Y
        };
      }
      if (q === "IFCMATERIALPROFILE") {
        const D = oo(se.args), Y = D[2] || D[1] || "", fe = Kt(P, Y);
        if (fe) return z(fe);
      }
      if (q === "IFCMATERIALPROFILESET") {
        const D = oo(se.args), fe = (D[2] || D[1] || "").match(/#(\d+)/);
        if (fe) {
          const $e = P[parseInt(fe[1])];
          if ($e) return z($e);
        }
      }
      if (q === "IFCMATERIALPROFILESETUSAGE") {
        const Y = oo(se.args)[0], fe = Kt(P, Y);
        if (fe) return z(fe);
      }
      return {
        b: 0.3,
        h: 0.3,
        name: "Unknown"
      };
    }
    function W(se, q, D, Y) {
      const fe = M[se] || [];
      for (const $e of fe) {
        const ze = P[$e];
        if (!ze) continue;
        const Xe = oo(ze.args), he = Xe[5] || Xe[4] || "", je = Kt(P, he);
        if (!je) continue;
        const We = ha(P, je), be = ye(ze);
        let Ie = Y, Ae = null, Ue = null;
        const dt = Xe[6] || Xe[5] || "", Ke = Kt(P, dt);
        if (Ke) {
          const ht = kn(P, Ke);
          ht && (Ie = ht.depth || Y, Ae = ht.origin, Ue = ht.direction);
        }
        const pt = Ae ? Ae[0] : We.origin[0], mt = Ae ? Ae[1] : We.origin[1], zt = Ae ? Ae[2] : We.origin[2], qt = Ue || (D === "Z" ? We.dirZ : We.dirX), Bt = G(pt, mt, zt), $t = G(pt + qt[0] * Ie, mt + qt[1] * Ie, zt + qt[2] * Ie);
        H.push({
          id: _++,
          type: "frame",
          nodeIds: [
            Bt,
            $t
          ],
          category: q,
          sectionName: be.name,
          b: be.b,
          h: be.h,
          material: "Hormigon",
          expressID: $e
        });
      }
    }
    W("IFCCOLUMN", "column", "Z", 3), W("IFCBEAM", "beam", "X", 5), W("IFCMEMBER", "diagonal", "X", 4), W("IFCPILE", "pile", "Z", 10), W("IFCSTAIRFLIGHT", "stair", "X", 3), W("IFCRAMPFLIGHT", "ramp", "X", 4);
    function ve(se, q, D) {
      const Y = M[se] || [];
      for (const fe of Y) {
        const $e = P[fe];
        if (!$e) continue;
        const ze = oo($e.args), Xe = ze[5] || ze[4] || "";
        if (!Kt(P, Xe)) continue;
        let je = D;
        const We = ze[6] || ze[5] || "", be = Kt(P, We);
        be && (je = Yl(P, be) || D);
        const Ie = q === "slab" ? `Losa e=${(je * 100).toFixed(0)}cm` : q === "wall" ? `Muro e=${(je * 100).toFixed(0)}cm` : q === "footing" ? `Zapata e=${(je * 100).toFixed(0)}cm` : `${q} e=${(je * 100).toFixed(0)}cm`;
        H.push({
          id: _++,
          type: "shell",
          nodeIds: [],
          category: q,
          sectionName: Ie,
          b: je,
          h: je,
          material: "Hormigon",
          expressID: fe
        });
      }
    }
    ve("IFCSLAB", "slab", 0.15), ve("IFCWALL", "wall", 0.2), ve("IFCWALLSTANDARDCASE", "wall", 0.2), ve("IFCFOOTING", "footing", 0.5), ve("IFCROOF", "slab", 0.12);
    const me = [], pe = M.IFCBUILDINGSTOREY || [];
    for (const se of pe) {
      const q = P[se];
      if (!q) continue;
      const D = oo(q.args), Y = (D[2] || "").replace(/'/g, ""), fe = parseFloat(D[9]) || 0;
      me.push({
        name: Y,
        elevation: fe
      });
    }
    return me.sort((se, q) => se.elevation - q.elevation), {
      nodes: V,
      elements: H,
      materials: Z,
      levels: me,
      projectName: b.meta.project,
      schema: b.meta.schema
    };
  }
  function kn(e, b) {
    const P = oo(b.args);
    for (const M of P) {
      const V = M.match(/#(\d+)/g) || [];
      for (const H of V) {
        const Z = parseInt(H.replace("#", "")), J = e[Z];
        if (J) {
          if (J.type === "IFCEXTRUDEDAREASOLID") {
            const _ = oo(J.args), G = parseFloat(_[3]) || 0, ye = Kt(e, _[1]);
            let z = [
              0,
              0,
              0
            ];
            ye && (z = ga(e, ye).origin);
            const W = Kt(e, _[2]);
            let ve = [
              0,
              0,
              1
            ];
            if (W && W.type === "IFCDIRECTION") {
              const me = W.args.match(/[-+]?\d*\.?\d+(?:[eE][-+]?\d+)?/g);
              me && me.length >= 3 && (ve = me.map(Number));
            }
            return {
              depth: G,
              origin: z,
              direction: ve
            };
          }
          if (J.type === "IFCSHAPEREPRESENTATION") {
            const _ = kn(e, J);
            if (_) return _;
          }
          if (J.type === "IFCMAPPEDITEM") {
            const _ = oo(J.args), G = Kt(e, _[0]);
            if (G && G.type === "IFCREPRESENTATIONMAP") {
              const ye = oo(G.args), z = Kt(e, ye[1]);
              if (z) {
                const W = kn(e, z);
                if (W) return W;
              }
            }
          }
        }
      }
    }
    return null;
  }
  function Yl(e, b) {
    const P = kn(e, b);
    return P ? P.depth : null;
  }
  const xa = [
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
  ], va = [
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
  ], ya = /* @__PURE__ */ new Map();
  for (const [e, b] of xa) ya.set(e, b);
  function Jl(e) {
    return ya.get(e) ?? "other";
  }
  new Set(va);
  async function Vl(e, b) {
    var _a, _b;
    const P = window.WebIFC;
    if (!P) throw new Error("web-ifc no disponible. Verifica que web-ifc-api-iife.js se carg\xF3.");
    const M = new P.IfcAPI(), V = window.location.pathname.replace(/\/[^/]*$/, "/");
    M.SetWasmPath(V), await M.Init();
    const H = M.OpenModel(new Uint8Array(b)), Z = /* @__PURE__ */ new Map(), J = /* @__PURE__ */ new Map(), _ = {
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
    for (const [ve] of xa) {
      const me = Jl(ve);
      try {
        const pe = M.GetLineIDsWithType(H, ve);
        for (let se = 0; se < pe.size(); se++) {
          const q = pe.get(se);
          Z.set(q, me);
          let D = "";
          try {
            const Y = M.GetLine(H, q);
            D = ((_a = Y == null ? void 0 : Y.Name) == null ? void 0 : _a.value) || ((_b = Y == null ? void 0 : Y.Description) == null ? void 0 : _b.value) || "";
          } catch {
          }
          J.set(q, {
            expressID: q,
            category: me,
            name: D,
            typeName: _[ve] || "Otro"
          });
        }
      } catch {
      }
    }
    const G = /* @__PURE__ */ new Map();
    for (const ve of va) {
      const me = new dn();
      me.name = `ifc-${ve}`, e.add(me), G.set(ve, me);
    }
    const ye = new tl();
    let z = 0;
    const W = new sa({
      color: 13421772,
      transparent: true,
      opacity: 0.9,
      side: aa
    });
    return M.StreamAllMeshes(H, (ve) => {
      const me = Z.get(ve.expressID) ?? "other", pe = G.get(me), se = ve.geometries;
      for (let q = 0; q < se.size(); q++) {
        const D = se.get(q), Y = M.GetGeometry(H, D.geometryExpressID), fe = M.GetVertexArray(Y.GetVertexData(), Y.GetVertexDataSize()), $e = M.GetIndexArray(Y.GetIndexData(), Y.GetIndexDataSize()), ze = new ro(), Xe = new Float32Array(fe.length / 2), he = new Float32Array(fe.length / 2);
        for (let Ae = 0; Ae < fe.length; Ae += 6) {
          const Ue = Ae / 2;
          Xe[Ue] = fe[Ae], Xe[Ue + 1] = fe[Ae + 1], Xe[Ue + 2] = fe[Ae + 2], he[Ue] = fe[Ae + 3], he[Ue + 1] = fe[Ae + 4], he[Ue + 2] = fe[Ae + 5];
        }
        ze.setAttribute("position", new En(Xe, 3)), ze.setAttribute("normal", new En(he, 3)), ze.setIndex(new En(new Uint32Array($e), 1));
        const je = new ol();
        je.fromArray(D.flatTransformation);
        let We;
        const be = D.color;
        be && (be.x !== 1 || be.y !== 1 || be.z !== 1) ? We = new sa({
          color: new nl(be.x, be.y, be.z),
          transparent: be.w < 1,
          opacity: be.w,
          side: aa
        }) : We = W, We._origOpacity = We.opacity;
        const Ie = new fa(ze, We);
        Ie.applyMatrix4(je), Ie.userData.expressID = ve.expressID, Ie.userData.category = me, pe.add(Ie), ye.expandByObject(Ie), z++, Y.delete();
      }
    }), M.CloseModel(H), {
      meshCount: z,
      bbox: ye,
      detailCategories: G,
      elementInfo: J
    };
  }
  pa = Xo.state(false);
  or = function(e) {
    e.nodeInputs || (e.nodeInputs = Xo.state({})), e.elementInputs || (e.elementInputs = Xo.state({})), e.deformOutputs || (e.deformOutputs = Xo.state({})), e.analyzeOutputs || (e.analyzeOutputs = Xo.state({}));
    let b = "tonf", P = "m", M = qo(b, P), V = {
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
    }, Z = /* @__PURE__ */ new Set(), J = /* @__PURE__ */ new Set();
    let _ = false;
    const G = /* @__PURE__ */ new Set(), ye = /* @__PURE__ */ new Map();
    let z = "", W = {}, ve = null, me = "", pe = [], se = [], q = [], D = /* @__PURE__ */ new Set(), Y = /* @__PURE__ */ new Set(), fe = /* @__PURE__ */ new Set(), $e = /* @__PURE__ */ new Map(), ze = /* @__PURE__ */ new Map(), Xe = null, he = [], je = 0.2, We = 2, be = 2, Ie = false, Ae = 2, Ue = "x", dt = /* @__PURE__ */ new Set(), Ke = true, pt = 0.15, mt = 2, zt = 2, qt = /* @__PURE__ */ new Set(), Bt = false, $t = "perimeter";
    const ht = () => ({
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
    }), uo = (t, o) => ({
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
      }, ht),
      vigasY: Array.from({
        length: o
      }, ht)
    }), qe = {
      colMat: 0,
      vigaMat: 0,
      colShape: 0,
      fc: 20594,
      steelColType: 0,
      steelVigaType: 0,
      perFloor: []
    };
    let St = 0, Ce = 3, _e = false, xe = 0, Fe = null, ge = 0, ke = [], Je = 1, De = true;
    const ut = ml();
    ut.div.style.display = "none";
    function xt() {
      const t = vn()[z];
      return t && t[St] ? t[St].dofs : [
        true,
        true,
        true,
        true,
        true,
        true
      ];
    }
    let Ye = [], Ze = [], bt = 0, ft = [], vt = null;
    function Jt() {
      if (!vt) return;
      const t = lt();
      t && t.scene.remove(vt), vt.traverse((o) => {
        if (o.geometry && o.geometry.dispose(), o.material) {
          const n = o.material;
          n.map && n.map.dispose(), n.dispose();
        }
      }), vt = null;
    }
    function ps(t, o, n, l, s) {
      Jt();
      const d = lt();
      if (!d) return;
      vt = new dn(), vt.name = "refGrid";
      const a = Math.min(...t), i = Math.max(...t), p = Math.min(...o), r = Math.max(...o), c = Math.max(...n), m = i - a || 1, w = r - p || 1, E = 3359829, y = 2241348;
      for (const h of n) {
        for (const T of o) {
          const k = new ro().setFromPoints([
            new Ne(a, h, T),
            new Ne(i, h, T)
          ]), $ = new Jo({
            color: E,
            dashSize: m * 0.015,
            gapSize: m * 0.01,
            transparent: true,
            opacity: 0.25
          }), C = new Oo(k, $);
          C.computeLineDistances(), C.renderOrder = -10, vt.add(C);
        }
        for (const T of t) {
          const k = new ro().setFromPoints([
            new Ne(T, h, p),
            new Ne(T, h, r)
          ]), $ = new Jo({
            color: E,
            dashSize: w * 0.015,
            gapSize: w * 0.01,
            transparent: true,
            opacity: 0.25
          }), C = new Oo(k, $);
          C.computeLineDistances(), C.renderOrder = -10, vt.add(C);
        }
      }
      for (const h of t) for (const T of o) {
        const k = new ro().setFromPoints([
          new Ne(h, 0, T),
          new Ne(h, c, T)
        ]), $ = new Jo({
          color: y,
          dashSize: c * 0.01,
          gapSize: c * 8e-3,
          transparent: true,
          opacity: 0.15
        }), C = new Oo(k, $);
        C.computeLineDistances(), C.renderOrder = -10, vt.add(C);
      }
      const f = Math.min(m, w) * 0.015;
      for (const h of n) for (const T of t) for (const k of o) {
        const $ = [
          new Ne(T - f, h, k),
          new Ne(T + f, h, k),
          new Ne(T, h, k - f),
          new Ne(T, h, k + f)
        ], C = new ro().setFromPoints($), B = new Uo({
          color: 5596791,
          transparent: true,
          opacity: 0.4
        }), x = new Vo(C, B);
        x.renderOrder = -5, vt.add(x);
      }
      vt.traverse((h) => {
        h.material && (Array.isArray(h.material) ? h.material.forEach((T) => {
          T.clippingPlanes = [];
        }) : h.material.clippingPlanes = []);
      }), d.scene.add(vt), d.render();
    }
    let Ht = null;
    function fs() {
      if (!Ht) return;
      const t = lt();
      t && t.scene.remove(Ht), Ht.traverse((o) => {
        if (o.geometry && o.geometry.dispose(), o.material) {
          const n = o.material;
          n.map && n.map.dispose(), n.dispose();
        }
      }), Ht = null;
    }
    function Qo(t, o, n, l, s) {
      fs();
      const d = lt();
      if (!d) return;
      Ht = new dn(), Ht.name = "gridAxes";
      const a = Math.min(...t), i = Math.max(...t), p = Math.min(...o), r = Math.max(...o), c = i - a || 1, m = r - p || 1, w = Math.max(c, m), E = w * 0.08, y = l || t.map((x, u) => String.fromCharCode(65 + u)), f = s || o.map((x, u) => String(u + 1)), h = w * 0.018, T = o.length <= 1, k = 8947848;
      for (let x = 0; x < t.length; x++) {
        const u = t[x];
        if (T) {
          const I = -E - h * 1.5;
          Cn(u, 0, 0, u, 0, I + h, k, Ht), Fn(y[x] || `${x}`, u, 0, I, h, Ht);
        } else {
          const I = p - E - h * 1.5;
          Cn(u, p, 0, u, I + h, 0, k, Ht), Fn(y[x] || `${x}`, u, I, 0, h, Ht);
        }
      }
      if (!T) for (let x = 0; x < o.length; x++) {
        const u = o[x], I = a - E - h * 1.5;
        Cn(a, u, 0, I + h, u, 0, k, Ht), Fn(f[x] || `${x}`, I, u, 0, h, Ht);
      }
      const $ = h * 1.8, C = E * 1.2, B = E * 1.2;
      for (let x = 0; x < t.length - 1; x++) {
        const u = t[x], I = t[x + 1], A = Math.abs(I - u), R = (u + I) / 2, j = `${A.toFixed(2)} m`;
        T ? (An(j, R, 0, -C, $, Ht), Ln(u, 0, -C * 0.7, I, 0, -C * 0.7, 16763904, Ht)) : (An(j, R, p - B, 0, $, Ht), Ln(u, p - B * 0.7, 0, I, p - B * 0.7, 0, 16763904, Ht));
      }
      if (!T) for (let x = 0; x < o.length - 1; x++) {
        const u = o[x], I = o[x + 1], A = Math.abs(I - u), R = (u + I) / 2, j = `${A.toFixed(2)} m`;
        An(j, a - C, R, 0, $, Ht), Ln(a - C * 0.7, u, 0, a - C * 0.7, I, 0, 16763904, Ht);
      }
      Ht.traverse((x) => {
        x.material && (Array.isArray(x.material) ? x.material.forEach((u) => {
          u.clippingPlanes = [];
        }) : x.material.clippingPlanes = []);
      }), d.scene.add(Ht), d.render();
    }
    let Zt = null;
    function us() {
      if (!Zt) return;
      const t = lt();
      t && t.scene.remove(Zt), Zt.traverse((o) => {
        if (o.geometry && o.geometry.dispose(), o.material) {
          const n = o.material;
          n.map && n.map.dispose(), n.dispose();
        }
      }), Zt = null;
    }
    function zn(t, o, n) {
      if (us(), t.length === 0) return;
      const l = lt();
      if (!l) return;
      Zt = new dn(), Zt.name = "storyLevels";
      const s = Math.min(...o), d = Math.max(...o), a = Math.min(...n), i = Math.max(...n), p = d - s || 1, r = i - a || 1, c = Math.max(p, r), m = c * 0.06, w = n.length <= 1, E = 4491519, y = c * 0.015;
      for (const f of t) {
        const h = f.elev;
        w ? (en(s - m, 0, h, d + m, 0, h, E, Zt), ms(f.name, d + m * 1.5, 0, h, y, Zt)) : (en(s, a, h, d, a, h, E, Zt), en(d, a, h, d, i, h, E, Zt), en(d, i, h, s, i, h, E, Zt), en(s, i, h, s, a, h, E, Zt), ms(f.name, s - m * 1.5, a, h, y, Zt));
      }
      Zt.traverse((f) => {
        f.material && (Array.isArray(f.material) ? f.material.forEach((h) => {
          h.clippingPlanes = [];
        }) : f.material.clippingPlanes = []);
      }), l.scene.add(Zt), l.render();
    }
    function en(t, o, n, l, s, d, a, i) {
      const p = Math.sqrt((l - t) ** 2 + (s - o) ** 2 + (d - n) ** 2) || 1, r = new ro().setFromPoints([
        new Ne(t, o, n),
        new Ne(l, s, d)
      ]), c = new Jo({
        color: a,
        dashSize: p * 0.02,
        gapSize: p * 0.01,
        transparent: true,
        opacity: 0.5
      }), m = new Oo(r, c);
      m.computeLineDistances(), m.renderOrder = 50, i.add(m);
    }
    function ms(t, o, n, l, s, d) {
      const a = document.createElement("canvas"), i = 512, p = 64;
      a.width = i, a.height = p;
      const r = a.getContext("2d");
      r.fillStyle = "rgba(30,60,120,0.8)";
      const c = 8;
      r.beginPath(), r.moveTo(c, 0), r.lineTo(i - c, 0), r.quadraticCurveTo(i, 0, i, c), r.lineTo(i, p - c), r.quadraticCurveTo(i, p, i - c, p), r.lineTo(c, p), r.quadraticCurveTo(0, p, 0, p - c), r.lineTo(0, c), r.quadraticCurveTo(0, 0, c, 0), r.closePath(), r.fill(), r.fillStyle = "#88bbff", r.font = "bold 38px monospace", r.textAlign = "center", r.textBaseline = "middle", r.fillText(t, i / 2, p / 2);
      const m = new os(a);
      m.needsUpdate = true;
      const w = new xn({
        map: m,
        depthTest: false,
        transparent: true
      }), E = new hn(w);
      E.position.set(o, n, l), E.scale.set(s * 8, s, 1), E.renderOrder = 101, d.add(E);
    }
    function An(t, o, n, l, s, d) {
      const a = document.createElement("canvas"), i = 256, p = 64;
      a.width = i, a.height = p;
      const r = a.getContext("2d");
      r.fillStyle = "rgba(0,0,0,0.75)";
      const c = 8;
      r.beginPath(), r.moveTo(c, 0), r.lineTo(i - c, 0), r.quadraticCurveTo(i, 0, i, c), r.lineTo(i, p - c), r.quadraticCurveTo(i, p, i - c, p), r.lineTo(c, p), r.quadraticCurveTo(0, p, 0, p - c), r.lineTo(0, c), r.quadraticCurveTo(0, 0, c, 0), r.closePath(), r.fill(), r.fillStyle = "#ffcc00", r.font = "bold 36px monospace", r.textAlign = "center", r.textBaseline = "middle", r.fillText(t, i / 2, p / 2);
      const m = new cl(a);
      m.minFilter = dl;
      const w = new xn({
        map: m,
        transparent: true,
        depthTest: false
      }), E = new hn(w);
      E.position.set(o, n, l);
      const y = i / p;
      E.scale.set(s * y, s, 1), E.renderOrder = 999, d.add(E);
    }
    function Ln(t, o, n, l, s, d, a, i) {
      const p = [
        new Ne(t, o, n),
        new Ne(l, s, d)
      ], r = new ro().setFromPoints(p), c = new Uo({
        color: a,
        transparent: true,
        opacity: 0.6,
        depthTest: false
      }), m = new Oo(r, c);
      m.renderOrder = 998, i.add(m);
    }
    function Cn(t, o, n, l, s, d, a, i) {
      const p = new ro().setFromPoints([
        new Ne(t, o, n),
        new Ne(l, s, d)
      ]), r = new Jo({
        color: a,
        dashSize: 0.15 * Math.max(Math.abs(l - t), Math.abs(s - o), Math.abs(d - n), 0.1),
        gapSize: 0.1 * Math.max(Math.abs(l - t), Math.abs(s - o), Math.abs(d - n), 0.1),
        transparent: true,
        opacity: 0.6
      }), c = new Oo(p, r);
      c.computeLineDistances(), i.add(c);
    }
    function Fn(t, o, n, l, s, d) {
      const a = document.createElement("canvas"), i = 128;
      a.width = i, a.height = i;
      const p = a.getContext("2d");
      p.beginPath(), p.arc(i / 2, i / 2, i * 0.42, 0, Math.PI * 2), p.fillStyle = "rgba(255,255,255,0.9)", p.fill(), p.lineWidth = i * 0.04, p.strokeStyle = "#555", p.stroke(), p.fillStyle = "#222", p.font = `bold ${i * 0.45}px Arial`, p.textAlign = "center", p.textBaseline = "middle", p.fillText(t, i / 2, i / 2 + i * 0.02);
      const r = new os(a);
      r.needsUpdate = true;
      const c = new xn({
        map: r,
        depthTest: false,
        transparent: true
      }), m = new hn(c);
      m.position.set(o, n, l);
      const w = s * 2;
      m.scale.set(w, w, 1), m.renderOrder = 100, d.add(m);
    }
    const tt = {
      addNode(t, o, n) {
        const l = [
          ...e.nodes.val
        ], s = l.length;
        return l.push([
          t,
          o,
          n
        ]), e.nodes.val = l, console.log(`Node ${s} at (${t}, ${o}, ${n})`), nt(), s;
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
        e.nodes.val = o, e.elements.val = n, console.log(`Node ${t} removed`), nt();
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
        ]), e.elements.val = n, console.log(`Element ${l}: node ${t} -> node ${o}`), nt(), l;
      },
      removeFrame(t) {
        const o = [
          ...e.elements.val
        ];
        if (t < 0 || t >= o.length) {
          console.error(`Element ${t} not found`);
          return;
        }
        o.splice(t, 1), e.elements.val = o, console.log(`Element ${t} removed`), nt();
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
        ]), n.supports = l, e.nodeInputs.val = n, console.log(`Support added at node ${t}`), nt();
      },
      removeSupport(t) {
        if (!e.nodeInputs) return;
        const o = {
          ...e.nodeInputs.val
        }, n = new Map(o.supports || []);
        n.delete(t), o.supports = n, e.nodeInputs.val = o, console.log(`Support removed from node ${t}`), nt();
      },
      addLoad(t, o) {
        if (!e.nodeInputs) return;
        const n = {
          ...e.nodeInputs.val
        }, l = new Map(n.loads || []);
        l.set(t, o), n.loads = l, e.nodeInputs.val = n, console.log(`Load added at node ${t}: [${o.join(", ")}]`), nt();
      },
      removeLoad(t) {
        if (!e.nodeInputs) return;
        const o = {
          ...e.nodeInputs.val
        }, n = new Map(o.loads || []);
        n.delete(t), o.loads = n, e.nodeInputs.val = o, console.log(`Load removed from node ${t}`), nt();
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
        var _a2, _b, _c, _d, _e2, _f;
        const t = e.nodes.val.length, o = e.elements.val.length, n = ((_c = (_b = (_a2 = e.nodeInputs) == null ? void 0 : _a2.val) == null ? void 0 : _b.supports) == null ? void 0 : _c.size) || 0, l = ((_f = (_e2 = (_d = e.nodeInputs) == null ? void 0 : _d.val) == null ? void 0 : _e2.loads) == null ? void 0 : _f.size) || 0;
        return console.log(`Model: ${t} nodes, ${o} elements, ${n} supports, ${l} loads`), {
          nodes: t,
          elements: o,
          supports: n,
          loads: l
        };
      },
      set(t, o) {
        var _a2, _b, _c, _d;
        const n = Le.querySelectorAll("input[type=checkbox]");
        for (const l of n) {
          const s = ((_b = (_a2 = l.closest("label")) == null ? void 0 : _a2.textContent) == null ? void 0 : _b.trim()) || ((_d = (_c = l.parentElement) == null ? void 0 : _c.textContent) == null ? void 0 : _d.trim()) || "", d = l.id || "";
          if (s.toLowerCase().includes(t.toLowerCase()) || d.toLowerCase().includes(t.toLowerCase())) {
            const a = l;
            return a.checked = o !== void 0 ? o : !a.checked, a.dispatchEvent(new Event("change", {
              bubbles: true
            })), console.log(`${s || d}: ${a.checked}`), a.checked;
          }
        }
        console.log(`Setting "${t}" not found. Use cad.settings() to list.`);
      },
      settings() {
        const t = Le.querySelectorAll("input[type=checkbox]"), o = {};
        return t.forEach((n) => {
          var _a2, _b, _c, _d;
          const l = n, s = ((_b = (_a2 = l.closest("label")) == null ? void 0 : _a2.textContent) == null ? void 0 : _b.trim()) || ((_d = (_c = l.parentElement) == null ? void 0 : _c.textContent) == null ? void 0 : _d.trim()) || l.id || "?";
          o[s] = l.checked;
        }), console.table(o), o;
      },
      param(t, o) {
        const n = window.__cad;
        if (n == null ? void 0 : n.setParam) return n.setParam(t, o), console.log(`${t} = ${o}`), o;
        console.log("Parameters not available");
      },
      params() {
        const t = window.__cad;
        if (t == null ? void 0 : t.getParams) {
          const o = t.getParams();
          return console.table(o), o;
        }
        console.log("Parameters not available");
      },
      use(t) {
        const o = window.__cad;
        if (o == null ? void 0 : o.setGenerator) return o.setGenerator(t), console.log(`Generator: ${t}`), t;
      },
      panel(t, o, n) {
        const l = window.__cad;
        if (l == null ? void 0 : l.createCustomPanel) return l.createCustomPanel(t, o, n);
        console.log("Custom panels not available");
      },
      removePanel(t) {
        const o = window.__cad;
        (o == null ? void 0 : o.removeCustomPanel) && (o.removeCustomPanel(t), console.log(`Panel "${t}" removed`));
      },
      refgrid(t, o, n) {
        if (!t) {
          Jt(), console.log("Reference grid cleared");
          return;
        }
        const l = [
          0
        ];
        for (const a of t) l.push(l[l.length - 1] + a);
        const s = [
          0
        ];
        for (const a of o || [
          0
        ]) s.push(s[s.length - 1] + a);
        const d = [
          0
        ];
        for (const a of n || [
          3
        ]) d.push(d[d.length - 1] + a);
        ps(l, s, d), Ye = l.map((a, i) => ({
          label: String.fromCharCode(65 + i),
          coord: a
        })), Ze = s.map((a, i) => ({
          label: `${i + 1}`,
          coord: a
        })), bt = d[d.length - 1], ft = d.map((a, i) => ({
          label: i === 0 ? "Base" : `P${i}`,
          elev: a
        })), Qo(Ye.map((a) => a.coord), Ze.map((a) => a.coord), bt, Ye.map((a) => a.label), Ze.map((a) => a.label));
        {
          const a = d.map((i, p) => ({
            name: p === 0 ? "Base" : `P${p}`,
            height: p > 0 ? i - d[p - 1] : 0,
            elev: i
          }));
          zn(a, Ye.map((i) => i.coord), Ze.map((i) => i.coord));
        }
        return console.log(`RefGrid: X=[${l}] Z=[${s}] Y=[${d}]`), {
          xCoords: l,
          zCoords: s,
          yLevels: d
        };
      },
      build(t) {
        var _a2;
        if (Ye.length === 0 || ft.length < 2) {
          console.log("Error: call cad.refgrid() first to define axes and levels");
          return;
        }
        const o = (t == null ? void 0 : t.col) || "40x40", n = (t == null ? void 0 : t.viga) || "30x40", l = (t == null ? void 0 : t.fc) || 210, [s, d] = o.split("x").map((N) => parseFloat(N) / 100), [a, i] = n.split("x").map((N) => parseFloat(N) / 100), p = Ye.map((N) => N.coord), r = Ze.map((N) => N.coord), c = ft.map((N) => N.elev), m = p.length, w = r.length, E = c.length, y = E - 1, f = [], h = {};
        for (let N = 0; N < E; N++) for (let ce = 0; ce < w; ce++) for (let te = 0; te < m; te++) h[`${te},${ce},${N}`] = f.length, f.push([
          p[te],
          r[ce],
          c[N]
        ]);
        const T = [], k = /* @__PURE__ */ new Set(), $ = /* @__PURE__ */ new Set(), C = /* @__PURE__ */ new Map();
        for (let N = 0; N < y; N++) for (let ce = 0; ce < w; ce++) for (let te = 0; te < m; te++) {
          const de = T.length;
          T.push([
            h[`${te},${ce},${N}`],
            h[`${te},${ce},${N + 1}`]
          ]), k.add(de), C.set(de, N);
        }
        for (let N = 1; N < E; N++) for (let ce = 0; ce < w; ce++) for (let te = 0; te < m - 1; te++) {
          const de = T.length;
          T.push([
            h[`${te},${ce},${N}`],
            h[`${te + 1},${ce},${N}`]
          ]), $.add(de), C.set(de, N - 1);
        }
        for (let N = 1; N < E; N++) for (let ce = 0; ce < m; ce++) for (let te = 0; te < w - 1; te++) {
          const de = T.length;
          T.push([
            h[`${ce},${te},${N}`],
            h[`${ce},${te + 1},${N}`]
          ]), $.add(de), C.set(de, N - 1);
        }
        const B = ((_a2 = t == null ? void 0 : t.braces) == null ? void 0 : _a2.toLowerCase()) || "", x = /* @__PURE__ */ new Set();
        if (B) {
          const N = B === "all" || B === "x" || B === "perimeter", ce = B === "all" || B === "y" || B === "perimeter";
          for (let te = 0; te < y; te++) {
            if (N) for (let de = 0; de < w; de++) {
              if (B === "perimeter" && de !== 0 && de !== w - 1) continue;
              const ee = Math.floor((m - 1) / 2);
              for (let ue = 0; ue < m - 1; ue++) {
                if (B === "perimeter" && ue !== ee) continue;
                const Ee = T.length;
                T.push([
                  h[`${ue},${de},${te}`],
                  h[`${ue + 1},${de},${te + 1}`]
                ]), x.add(Ee), C.set(Ee, te);
                const oe = T.length;
                T.push([
                  h[`${ue + 1},${de},${te}`],
                  h[`${ue},${de},${te + 1}`]
                ]), x.add(oe), C.set(oe, te);
              }
            }
            if (ce) for (let de = 0; de < m; de++) {
              if (B === "perimeter" && de !== 0 && de !== m - 1) continue;
              const ee = Math.floor((w - 1) / 2);
              for (let ue = 0; ue < w - 1; ue++) {
                if (B === "perimeter" && ue !== ee) continue;
                const Ee = T.length;
                T.push([
                  h[`${de},${ue},${te}`],
                  h[`${de},${ue + 1},${te + 1}`]
                ]), x.add(Ee), C.set(Ee, te);
                const oe = T.length;
                T.push([
                  h[`${de},${ue + 1},${te}`],
                  h[`${de},${ue},${te + 1}`]
                ]), x.add(oe), C.set(oe, te);
              }
            }
          }
        }
        const u = 15100 * Math.sqrt(l) * 10, I = u / (2 * (1 + 0.2)), A = s * d, R = s * d ** 3 / 12, j = d * s ** 3 / 12, g = s * d * (s ** 2 + d ** 2) / 12, S = a * i, v = a * i ** 3 / 12, F = i * a ** 3 / 12, K = a * i * (a ** 2 + i ** 2) / 12, U = /* @__PURE__ */ new Map(), ae = /* @__PURE__ */ new Map(), Q = /* @__PURE__ */ new Map(), X = /* @__PURE__ */ new Map(), ie = /* @__PURE__ */ new Map(), re = /* @__PURE__ */ new Map(), Me = /* @__PURE__ */ new Map();
        for (let N = 0; N < T.length; N++) U.set(N, u), ae.set(N, I), k.has(N) ? (Q.set(N, A), X.set(N, R), ie.set(N, j), re.set(N, g), Me.set(N, {
          type: "rect",
          b: s,
          h: d,
          name: `COL${o}`
        })) : x.has(N) ? (Q.set(N, A), X.set(N, R), ie.set(N, j), re.set(N, g), Me.set(N, {
          type: "rect",
          b: s,
          h: d,
          name: `BR${o}`
        })) : (Q.set(N, S), X.set(N, v), ie.set(N, F), re.set(N, K), Me.set(N, {
          type: "rect",
          b: a,
          h: i,
          name: `V${n}`
        }));
        const Te = /* @__PURE__ */ new Map();
        for (let N = 0; N < w; N++) for (let ce = 0; ce < m; ce++) Te.set(h[`${ce},${N},0`], [
          true,
          true,
          true,
          true,
          true,
          true
        ]);
        return e.nodes.val = f, e.elements.val = T, e.nodeInputs.val = {
          supports: Te,
          loads: /* @__PURE__ */ new Map()
        }, e.elementInputs.val = {
          elasticities: U,
          shearModuli: ae,
          areas: Q,
          momentsOfInertiaZ: X,
          momentsOfInertiaY: ie,
          torsionalConstants: re,
          sectionShapes: Me
        }, D = k, Y = $, $e = C, console.log(`Built: ${f.length} nodes, ${T.length} elements (${k.size} cols, ${$.size} beams, ${x.size} braces)`), console.log(`  Col: ${o}, Viga: ${n}, f'c=${l}${B ? `, braces=${B}` : ""}`), {
          nodes: f.length,
          elements: T.length
        };
      },
      addCol(t, o, n) {
        var _a2, _b, _c, _d, _e2, _f;
        const l = Ye.findIndex((y) => y.label === t), s = Ze.findIndex((y) => y.label === o);
        if (l < 0) {
          console.log(`Axis "${t}" not found. Available: ${Ye.map((y) => y.label)}`);
          return;
        }
        if (s < 0) {
          console.log(`Axis "${o}" not found. Available: ${Ze.map((y) => y.label)}`);
          return;
        }
        const d = Ye[l].coord, a = Ze[s].coord, i = [
          ...e.nodes.val
        ], p = [
          ...((_a2 = e.elements) == null ? void 0 : _a2.val) || []
        ];
        (_b = e.elementInputs) == null ? void 0 : _b.val;
        const r = (y) => {
          const f = i.findIndex((h) => Math.abs(h[0] - d) < 1e-3 && Math.abs(h[1] - a) < 1e-3 && Math.abs(h[2] - y) < 1e-3);
          return f >= 0 ? f : (i.push([
            d,
            a,
            y
          ]), i.length - 1);
        }, c = n ? [
          ft.findIndex((y) => y.label === n)
        ] : Array.from({
          length: ft.length - 1
        }, (y, f) => f + 1), m = new Map(((_d = (_c = e.nodeInputs) == null ? void 0 : _c.val) == null ? void 0 : _d.supports) || []), w = r(ft[0].elev);
        m.has(w) || m.set(w, [
          true,
          true,
          true,
          true,
          true,
          true
        ]);
        let E = 0;
        for (const y of c) {
          if (y < 1 || y >= ft.length) continue;
          const f = r(ft[y - 1].elev), h = r(ft[y].elev);
          p.push([
            f,
            h
          ]), D.add(p.length - 1), $e.set(p.length - 1, y - 1), E++;
        }
        return e.nodes.val = i, e.elements.val = p, e.nodeInputs.val = {
          ...e.nodeInputs.val,
          supports: m,
          loads: ((_f = (_e2 = e.nodeInputs) == null ? void 0 : _e2.val) == null ? void 0 : _f.loads) || /* @__PURE__ */ new Map()
        }, console.log(`Added ${E} column(s) at ${t}-${o}${n ? ` story ${n}` : ""}`), E;
      },
      addBeam(t, o, n, l, s) {
        var _a2;
        const d = Ye.findIndex((C) => C.label === t), a = Ze.findIndex((C) => C.label === o), i = Ye.findIndex((C) => C.label === n), p = Ze.findIndex((C) => C.label === l), r = ft.findIndex((C) => C.label === s);
        if (d < 0 || a < 0 || i < 0 || p < 0) {
          console.log("Axis not found");
          return;
        }
        if (r < 1) {
          console.log(`Story "${s}" not found. Available: ${ft.filter((C) => C.label !== "Base").map((C) => C.label)}`);
          return;
        }
        const c = Ye[d].coord, m = Ze[a].coord, w = Ye[i].coord, E = Ze[p].coord, y = ft[r].elev, f = [
          ...e.nodes.val
        ], h = [
          ...((_a2 = e.elements) == null ? void 0 : _a2.val) || []
        ], T = (C, B, x) => {
          const u = f.findIndex((I) => Math.abs(I[0] - C) < 1e-3 && Math.abs(I[1] - B) < 1e-3 && Math.abs(I[2] - x) < 1e-3);
          return u >= 0 ? u : (f.push([
            C,
            B,
            x
          ]), f.length - 1);
        }, k = T(c, m, y), $ = T(w, E, y);
        return h.push([
          k,
          $
        ]), Y.add(h.length - 1), $e.set(h.length - 1, r - 1), e.nodes.val = f, e.elements.val = h, console.log(`Added beam ${t}-${o} \u2192 ${n}-${l} at ${s}`), h.length - 1;
      },
      addBrace(t, o, n, l, s, d) {
        var _a2;
        const a = Ye.findIndex((u) => u.label === t), i = Ze.findIndex((u) => u.label === o), p = ft.findIndex((u) => u.label === n), r = Ye.findIndex((u) => u.label === l), c = Ze.findIndex((u) => u.label === s), m = ft.findIndex((u) => u.label === d);
        if (a < 0 || i < 0 || p < 0) {
          console.log(`Point 1 not found: ${t}-${o}@${n}`);
          return;
        }
        if (r < 0 || c < 0 || m < 0) {
          console.log(`Point 2 not found: ${l}-${s}@${d}`);
          return;
        }
        const w = Ye[a].coord, E = Ze[i].coord, y = ft[p].elev, f = Ye[r].coord, h = Ze[c].coord, T = ft[m].elev, k = [
          ...e.nodes.val
        ], $ = [
          ...((_a2 = e.elements) == null ? void 0 : _a2.val) || []
        ], C = (u, I, A) => {
          const R = k.findIndex((j) => Math.abs(j[0] - u) < 1e-3 && Math.abs(j[1] - I) < 1e-3 && Math.abs(j[2] - A) < 1e-3);
          return R >= 0 ? R : (k.push([
            u,
            I,
            A
          ]), k.length - 1);
        }, B = C(w, E, y), x = C(f, h, T);
        return $.push([
          B,
          x
        ]), $e.set($.length - 1, Math.min(p, m)), e.nodes.val = k, e.elements.val = $, console.log(`Added brace ${t}-${o}@${n} \u2192 ${l}-${s}@${d}`), $.length - 1;
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
        tt.clear();
        const o = (t == null ? void 0 : t.bx) || [
          5,
          5
        ], n = (t == null ? void 0 : t.bz) || [
          4,
          4
        ], l = (t == null ? void 0 : t.h) || [
          3.5,
          3,
          3
        ], s = (t == null ? void 0 : t.col) || "40x40", d = (t == null ? void 0 : t.viga) || "30x40", a = (t == null ? void 0 : t.fc) || 210, [i, p] = s.split("x").map((ee) => parseFloat(ee) / 100), [r, c] = d.split("x").map((ee) => parseFloat(ee) / 100), m = [
          0
        ];
        for (const ee of o) m.push(m[m.length - 1] + ee);
        const w = [
          0
        ];
        for (const ee of n) w.push(w[w.length - 1] + ee);
        const E = [
          0
        ];
        for (const ee of l) E.push(E[E.length - 1] + ee);
        const y = m.length, f = w.length, h = E.length, T = l.length, k = [], $ = {};
        for (let ee = 0; ee < h; ee++) for (let ue = 0; ue < f; ue++) for (let Ee = 0; Ee < y; Ee++) $[`${Ee},${ee},${ue}`] = k.length, k.push([
          m[Ee],
          E[ee],
          w[ue]
        ]);
        const C = [], B = /* @__PURE__ */ new Set(), x = /* @__PURE__ */ new Set(), u = /* @__PURE__ */ new Map();
        for (let ee = 0; ee < T; ee++) for (let ue = 0; ue < f; ue++) for (let Ee = 0; Ee < y; Ee++) {
          const oe = C.length;
          C.push([
            $[`${Ee},${ee},${ue}`],
            $[`${Ee},${ee + 1},${ue}`]
          ]), B.add(oe), u.set(oe, ee);
        }
        for (let ee = 1; ee < h; ee++) for (let ue = 0; ue < f; ue++) for (let Ee = 0; Ee < y - 1; Ee++) {
          const oe = C.length;
          C.push([
            $[`${Ee},${ee},${ue}`],
            $[`${Ee + 1},${ee},${ue}`]
          ]), x.add(oe), u.set(oe, ee - 1);
        }
        for (let ee = 1; ee < h; ee++) for (let ue = 0; ue < y; ue++) for (let Ee = 0; Ee < f - 1; Ee++) {
          const oe = C.length;
          C.push([
            $[`${ue},${ee},${Ee}`],
            $[`${ue},${ee},${Ee + 1}`]
          ]), x.add(oe), u.set(oe, ee - 1);
        }
        const A = 15100 * Math.sqrt(a) * 10, R = A / (2 * (1 + 0.2)), j = i * p, g = i * p ** 3 / 12, S = p * i ** 3 / 12, v = i * p * (i ** 2 + p ** 2) / 12, F = r * c, K = r * c ** 3 / 12, U = c * r ** 3 / 12, ae = r * c * (r ** 2 + c ** 2) / 12, Q = /* @__PURE__ */ new Map(), X = /* @__PURE__ */ new Map(), ie = /* @__PURE__ */ new Map(), re = /* @__PURE__ */ new Map(), Me = /* @__PURE__ */ new Map(), Te = /* @__PURE__ */ new Map(), N = /* @__PURE__ */ new Map();
        for (let ee = 0; ee < C.length; ee++) Q.set(ee, A), X.set(ee, R), B.has(ee) ? (ie.set(ee, j), re.set(ee, g), Me.set(ee, S), Te.set(ee, v), N.set(ee, {
          type: "rect",
          b: i,
          h: p,
          name: `COL${s}`
        })) : (ie.set(ee, F), re.set(ee, K), Me.set(ee, U), Te.set(ee, ae), N.set(ee, {
          type: "rect",
          b: r,
          h: c,
          name: `V${d}`
        }));
        const ce = /* @__PURE__ */ new Map();
        for (let ee = 0; ee < f; ee++) for (let ue = 0; ue < y; ue++) ce.set($[`${ue},0,${ee}`], [
          true,
          true,
          true,
          true,
          true,
          true
        ]);
        e.nodes.val = k, e.elements.val = C, e.nodeInputs.val = {
          supports: ce,
          loads: /* @__PURE__ */ new Map()
        }, e.elementInputs.val = {
          elasticities: Q,
          shearModuli: X,
          areas: ie,
          momentsOfInertiaZ: re,
          momentsOfInertiaY: Me,
          torsionalConstants: Te,
          sectionShapes: N
        }, D = B, Y = x, $e = u, Ye = m.map((ee, ue) => ({
          label: String.fromCharCode(65 + ue),
          coord: ee
        })), Ze = w.map((ee, ue) => ({
          label: `${ue + 1}`,
          coord: ee
        })), bt = E[E.length - 1], Qo(Ye.map((ee) => ee.coord), Ze.map((ee) => ee.coord), bt, Ye.map((ee) => ee.label), Ze.map((ee) => ee.label));
        {
          const ee = E.map((ue, Ee) => ({
            name: Ee === 0 ? "Base" : `P${Ee}`,
            height: Ee > 0 ? ue - E[Ee - 1] : 0,
            elev: ue
          }));
          zn(ee, m, w);
        }
        const te = Le.querySelector("#cad3d-axis-buttons");
        if (te) {
          te.style.display = "flex";
          const ee = Ye.map((Ee) => Ee.label), ue = Ze.map((Ee) => Ee.label);
          te.innerHTML = '<span style="font-size:10px;color:var(--cad-heading);margin-right:4px">Ejes:</span>';
          for (const Ee of ee) te.innerHTML += `<button class="axis-btn" data-axis="x" data-label="${Ee}">${Ee}</button>`;
          te.innerHTML += '<span style="margin:0 2px">|</span>';
          for (const Ee of ue) te.innerHTML += `<button class="axis-btn" data-axis="y" data-label="${Ee}">${Ee}</button>`;
        }
        const de = Le.querySelector("#cad3d-floor-buttons");
        if (de) {
          de.style.display = "flex", de.innerHTML = '<span style="font-size:10px;color:var(--cad-heading);margin-right:4px">Planta:</span>';
          for (let ee = 0; ee < T; ee++) de.innerHTML += `<button class="floor-btn" data-floor="${ee}">P${ee + 1}</button>`;
        }
        return ps(m, w, E), nt(), console.log(`Model3D: ${k.length}n ${C.length}e | ${y}x${f} grid, ${T} floors | COL${s} V${d} f'c=${a}`), {
          nodes: k.length,
          elements: C.length,
          columns: B.size,
          beams: x.size
        };
      },
      clear() {
        e.nodes.val = [], e.elements.val = [], e.nodeInputs && (e.nodeInputs.val = {}), e.elementInputs && (e.elementInputs.val = {}), D = /* @__PURE__ */ new Set(), Y = /* @__PURE__ */ new Set(), $e = /* @__PURE__ */ new Map(), ze = /* @__PURE__ */ new Map(), Ye = [], Ze = [], bt = 0, fs(), us(), Jt();
        const t = Le.querySelector("#cad3d-axis-buttons");
        t && (t.style.display = "none", t.innerHTML = ""), console.log("Model cleared"), nt();
      },
      frame(t, o, n = 0, l = 0) {
        tt.clear();
        const s = [];
        n > 0 && s.push(-n);
        let d = 0;
        s.push(d);
        for (const y of t) d += y, s.push(d);
        l > 0 && s.push(d + l);
        const a = [
          0
        ];
        let i = 0;
        for (const y of o) i += y, a.push(i);
        const p = (y) => n > 0 && y === 0 || l > 0 && y === s.length - 1, r = {}, c = [];
        for (let y = 0; y < a.length; y++) for (let f = 0; f < s.length; f++) y === 0 && p(f) || (r[`${f},${y}`] = c.length, c.push([
          s[f],
          0,
          a[y]
        ]));
        const m = [];
        D = /* @__PURE__ */ new Set(), Y = /* @__PURE__ */ new Set();
        for (let y = 0; y < a.length - 1; y++) for (let f = 0; f < s.length; f++) p(f) || (D.add(m.length), m.push([
          r[`${f},${y}`],
          r[`${f},${y + 1}`]
        ]));
        for (let y = 1; y < a.length; y++) for (let f = 0; f < s.length - 1; f++) Y.add(m.length), m.push([
          r[`${f},${y}`],
          r[`${f + 1},${y}`]
        ]);
        const w = /* @__PURE__ */ new Map(), E = xt();
        for (let y = 0; y < s.length; y++) {
          if (p(y)) continue;
          const f = `${y},0`;
          r[f] !== void 0 && w.set(r[f], [
            ...E
          ]);
        }
        return e.nodes.val = c, e.elements.val = m, e.nodeInputs && (e.nodeInputs.val = {
          supports: w
        }), Ye = [
          ...s
        ], Ze = [
          0
        ], bt = a[a.length - 1] || 0, setTimeout(() => {
          It(), Qo(s, [
            0
          ]), jn(), Wn();
        }, 50), nt(), {
          nodes: c.length,
          elements: m.length
        };
      },
      building(t, o, n, l = 3, s = 0, d = 0, a = 0, i = 0, p = 1) {
        tt.clear();
        const r = [];
        s > 0 && r.push(-s), r.push(0);
        for (const u of t) r.push(r[r.length - 1] + u);
        d > 0 && r.push(r[r.length - 1] + d);
        const c = [];
        a > 0 && c.push(-a), c.push(0);
        for (const u of o) c.push(c[c.length - 1] + u);
        i > 0 && c.push(c[c.length - 1] + i);
        const m = [
          0
        ];
        for (const u of n) m.push(m[m.length - 1] + u);
        const w = (u) => s > 0 && u === 0 || d > 0 && u === r.length - 1, E = (u) => a > 0 && u === 0 || i > 0 && u === c.length - 1, y = (u, I) => w(u) || E(I), f = [], h = {};
        for (let u = 0; u < m.length; u++) for (let I = 0; I < c.length; I++) for (let A = 0; A < r.length; A++) u === 0 && y(A, I) || (h[`${A},${I},${u}`] = f.length, f.push([
          r[A],
          c[I],
          m[u]
        ]));
        const T = f.length, k = [];
        D = /* @__PURE__ */ new Set(), Y = /* @__PURE__ */ new Set(), $e = /* @__PURE__ */ new Map();
        const $ = [];
        for (let u = 0; u < m.length - 1; u++) for (let I = 0; I < c.length; I++) for (let A = 0; A < r.length; A++) y(A, I) || $.push({
          el: [
            h[`${A},${I},${u}`],
            h[`${A},${I},${u + 1}`]
          ],
          floor: u
        });
        for (const { el: [u, I], floor: A } of $) {
          if (p <= 1) {
            D.add(k.length), $e.set(k.length, A), k.push([
              u,
              I
            ]);
            continue;
          }
          const R = f[u], j = f[I];
          let g = u;
          for (let S = 1; S < p; S++) {
            const v = S / p, F = f.length;
            f.push([
              R[0] + (j[0] - R[0]) * v,
              R[1] + (j[1] - R[1]) * v,
              R[2] + (j[2] - R[2]) * v
            ]), D.add(k.length), $e.set(k.length, A), k.push([
              g,
              F
            ]), g = F;
          }
          D.add(k.length), $e.set(k.length, A), k.push([
            g,
            I
          ]);
        }
        ze = /* @__PURE__ */ new Map();
        const C = [];
        for (let u = 1; u < m.length; u++) for (let I = 0; I < c.length; I++) for (let A = 0; A < r.length - 1; A++) C.push({
          el: [
            h[`${A},${I},${u}`],
            h[`${A + 1},${I},${u}`]
          ],
          floor: u - 1,
          dir: "x",
          bay: A
        });
        for (let u = 1; u < m.length; u++) for (let I = 0; I < r.length; I++) for (let A = 0; A < c.length - 1; A++) C.push({
          el: [
            h[`${I},${A},${u}`],
            h[`${I},${A + 1},${u}`]
          ],
          floor: u - 1,
          dir: "y",
          bay: A
        });
        for (const { el: [u, I], floor: A, dir: R, bay: j } of C) {
          const g = f[u], S = f[I];
          let v = u;
          for (let K = 1; K < l; K++) {
            const U = K / l, ae = f.length;
            f.push([
              g[0] + (S[0] - g[0]) * U,
              g[1] + (S[1] - g[1]) * U,
              g[2] + (S[2] - g[2]) * U
            ]);
            const Q = k.length;
            Y.add(Q), $e.set(Q, A), ze.set(Q, {
              dir: R,
              bay: j
            }), k.push([
              v,
              ae
            ]), v = ae;
          }
          const F = k.length;
          Y.add(F), $e.set(F, A), ze.set(F, {
            dir: R,
            bay: j
          }), k.push([
            v,
            I
          ]);
        }
        if (dt = /* @__PURE__ */ new Set(), Ie && Ae > 0) {
          const u = (I, A, R) => {
            for (let g = 0; g < f.length; g++) if (Math.abs(f[g][0] - I) < 1e-6 && Math.abs(f[g][1] - A) < 1e-6 && Math.abs(f[g][2] - R) < 1e-6) return g;
            const j = f.length;
            return f.push([
              I,
              A,
              R
            ]), j;
          };
          for (let I = 1; I < m.length; I++) if (Ue === "x") for (let A = 0; A < c.length - 1; A++) {
            const R = c[A], j = c[A + 1];
            for (let g = 1; g <= Ae; g++) {
              const S = R + g / (Ae + 1) * (j - R), v = [];
              for (let F = 0; F < r.length; F++) v.push(u(r[F], S, m[I]));
              for (let F = 0; F < r.length - 1; F++) {
                const K = k.length;
                dt.add(K), Y.add(K), $e.set(K, I - 1), ze.set(K, {
                  dir: "x",
                  bay: F
                }), k.push([
                  v[F],
                  v[F + 1]
                ]);
              }
            }
          }
          else for (let A = 0; A < r.length - 1; A++) {
            const R = r[A], j = r[A + 1];
            for (let g = 1; g <= Ae; g++) {
              const S = R + g / (Ae + 1) * (j - R), v = [];
              for (let F = 0; F < c.length; F++) v.push(u(S, c[F], m[I]));
              for (let F = 0; F < c.length - 1; F++) {
                const K = k.length;
                dt.add(K), Y.add(K), $e.set(K, I - 1), ze.set(K, {
                  dir: "y",
                  bay: F
                }), k.push([
                  v[F],
                  v[F + 1]
                ]);
              }
            }
          }
        }
        const B = /* @__PURE__ */ new Map(), x = xt();
        for (let u = 0; u < c.length; u++) for (let I = 0; I < r.length; I++) y(I, u) || B.set(h[`${I},${u},0`], [
          ...x
        ]);
        fe = /* @__PURE__ */ new Set();
        for (const u of he) {
          const I = m.length - 1, A = u.floors.includes(-1) ? Array.from({
            length: I
          }, (R, j) => j) : u.floors.filter((R) => R < I);
          for (const R of A) {
            let j, g, S, v;
            u.dir === "x" ? (j = u.bay, S = u.bay + 1, g = u.axisIdx, v = u.axisIdx) : (j = u.axisIdx, S = u.axisIdx, g = u.bay, v = u.bay + 1);
            const F = h[`${j},${g},${R}`], K = h[`${j},${g},${R + 1}`];
            let U, ae;
            if (u.dir === "x" ? (U = h[`${S},${v},${R}`], ae = h[`${S},${v},${R + 1}`]) : (U = h[`${S},${v},${R}`], ae = h[`${S},${v},${R + 1}`]), F === void 0 || U === void 0 || K === void 0 || ae === void 0) continue;
            const Q = be, X = We, ie = f[F], re = f[U], Me = f[K], Te = f[ae], N = [];
            for (let ce = 0; ce <= X; ce++) {
              const te = [], de = ce / X;
              for (let ee = 0; ee <= Q; ee++) {
                const ue = ee / Q, Ee = (1 - de) * ((1 - ue) * ie[0] + ue * re[0]) + de * ((1 - ue) * Me[0] + ue * Te[0]), oe = (1 - de) * ((1 - ue) * ie[1] + ue * re[1]) + de * ((1 - ue) * Me[1] + ue * Te[1]), Se = (1 - de) * ((1 - ue) * ie[2] + ue * re[2]) + de * ((1 - ue) * Me[2] + ue * Te[2]);
                ce === 0 && ee === 0 ? te.push(F) : ce === 0 && ee === Q ? te.push(U) : ce === X && ee === 0 ? te.push(K) : ce === X && ee === Q ? te.push(ae) : (te.push(f.length), f.push([
                  Ee,
                  oe,
                  Se
                ]));
              }
              N.push(te);
            }
            for (let ce = 0; ce < X; ce++) for (let te = 0; te < Q; te++) {
              const de = N[ce][te], ee = N[ce][te + 1], ue = N[ce + 1][te + 1], Ee = N[ce + 1][te], oe = k.length;
              fe.add(oe), $e.set(oe, R), k.push([
                de,
                ee,
                ue,
                Ee
              ]);
            }
            if (R === 0) for (let ce = 0; ce <= Q; ce++) {
              const te = N[0][ce];
              te >= T && B.set(te, [
                ...x
              ]);
            }
          }
        }
        if (qt = /* @__PURE__ */ new Set(), Ke) {
          const u = l, I = l, A = /* @__PURE__ */ new Map(), R = (j, g, S) => `${Math.round(j * 1e4)},${Math.round(g * 1e4)},${Math.round(S * 1e4)}`;
          for (let j = 0; j < f.length; j++) A.set(R(f[j][0], f[j][1], f[j][2]), j);
          for (let j = 1; j < m.length; j++) {
            const g = m[j];
            for (let S = 0; S < r.length - 1; S++) for (let v = 0; v < c.length - 1; v++) {
              const F = r[S], K = r[S + 1], U = c[v], ae = c[v + 1], Q = [];
              for (let X = 0; X <= I; X++) {
                const ie = [];
                for (let re = 0; re <= u; re++) {
                  const Me = F + re / u * (K - F), Te = U + X / I * (ae - U);
                  if (X === 0 && re === 0) ie.push(h[`${S},${v},${j}`]);
                  else if (X === 0 && re === u) ie.push(h[`${S + 1},${v},${j}`]);
                  else if (X === I && re === 0) ie.push(h[`${S},${v + 1},${j}`]);
                  else if (X === I && re === u) ie.push(h[`${S + 1},${v + 1},${j}`]);
                  else {
                    const N = R(Me, Te, g), ce = A.get(N);
                    if (ce !== void 0) ie.push(ce);
                    else {
                      const te = f.length;
                      f.push([
                        Me,
                        Te,
                        g
                      ]), A.set(N, te), ie.push(te);
                    }
                  }
                }
                Q.push(ie);
              }
              for (let X = 0; X < I; X++) for (let ie = 0; ie < u; ie++) {
                const re = Q[X][ie], Me = Q[X][ie + 1], Te = Q[X + 1][ie + 1], N = Q[X + 1][ie], ce = k.length;
                qt.add(ce), $e.set(ce, j - 1), k.push([
                  re,
                  Me,
                  Te,
                  N
                ]);
              }
            }
          }
        }
        if (Bt && $t) {
          const u = $t === "all" || $t === "x" || $t === "perimeter", I = $t === "all" || $t === "y" || $t === "perimeter", A = m.length - 1;
          for (let R = 0; R < A; R++) {
            if (u) for (let j = 0; j < c.length; j++) {
              if ($t === "perimeter" && j !== 0 && j !== c.length - 1) continue;
              const g = Math.floor((r.length - 1) / 2);
              for (let S = 0; S < r.length - 1; S++) {
                if ($t === "perimeter" && S !== g || y(S, j) || y(S + 1, j)) continue;
                const v = h[`${S},${j},${R}`], F = h[`${S + 1},${j},${R + 1}`], K = h[`${S + 1},${j},${R}`], U = h[`${S},${j},${R + 1}`];
                v !== void 0 && F !== void 0 && (k.push([
                  v,
                  F
                ]), $e.set(k.length - 1, R)), K !== void 0 && U !== void 0 && (k.push([
                  K,
                  U
                ]), $e.set(k.length - 1, R));
              }
            }
            if (I) for (let j = 0; j < r.length; j++) {
              if ($t === "perimeter" && j !== 0 && j !== r.length - 1) continue;
              const g = Math.floor((c.length - 1) / 2);
              for (let S = 0; S < c.length - 1; S++) {
                if ($t === "perimeter" && S !== g || y(j, S) || y(j, S + 1)) continue;
                const v = h[`${j},${S},${R}`], F = h[`${j},${S + 1},${R + 1}`], K = h[`${j},${S + 1},${R}`], U = h[`${j},${S},${R + 1}`];
                v !== void 0 && F !== void 0 && (k.push([
                  v,
                  F
                ]), $e.set(k.length - 1, R)), K !== void 0 && U !== void 0 && (k.push([
                  K,
                  U
                ]), $e.set(k.length - 1, R));
              }
            }
          }
        }
        return e.nodes.val = f, e.elements.val = k, e.nodeInputs && (e.nodeInputs.val = {
          supports: B
        }), Ye = [
          ...r
        ], Ze = [
          ...c
        ], bt = m[m.length - 1] || 0, setTimeout(() => {
          It(), Qo(r, c), jn(), Wn();
        }, 50), nt(), {
          nodes: f.length,
          elements: k.length,
          nJointNodes: T
        };
      },
      galpon(t = 12, o = 20, n = 6, l = 3, s = 8, d = 4) {
        tt.clear();
        const a = [], i = [], p = (E) => n + l * (1 - Math.pow(2 * E / t - 1, 2)), r = [], c = d + 1;
        for (let E = 0; E < c; E++) {
          const y = [], f = o / d * E;
          y.push(a.length), a.push([
            0,
            f,
            0
          ]), y.push(a.length), a.push([
            t,
            f,
            0
          ]), y.push(a.length), a.push([
            0,
            f,
            n
          ]);
          for (let h = 1; h < s; h++) {
            const T = t / s * h;
            y.push(a.length), a.push([
              T,
              f,
              p(T)
            ]);
          }
          y.push(a.length), a.push([
            t,
            f,
            n
          ]), r.push(y);
        }
        for (let E = 0; E < c; E++) {
          const y = r[E];
          i.push([
            y[0],
            y[2]
          ]), i.push([
            y[1],
            y[y.length - 1]
          ]);
          for (let f = 2; f < y.length - 1; f++) i.push([
            y[f],
            y[f + 1]
          ]);
        }
        for (let E = 0; E < d; E++) for (let y = 2; y < r[0].length; y++) i.push([
          r[E][y],
          r[E + 1][y]
        ]);
        for (let E = 0; E < d; E++) for (let y = 2; y < r[0].length - 1; y += 2) i.push([
          r[E][y],
          r[E + 1][y + 1]
        ]);
        const m = /* @__PURE__ */ new Map(), w = xt();
        for (let E = 0; E < c; E++) m.set(r[E][0], [
          ...w
        ]), m.set(r[E][1], [
          ...w
        ]);
        return e.nodes.val = a, e.elements.val = i, e.nodeInputs && (e.nodeInputs.val = {
          supports: m
        }), nt(), {
          nodes: a.length,
          elements: i.length
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
            qe.colMat = 1, qe.vigaMat = 1, tt.clear(), st("truss"), hs();
            break;
          }
          case "beams": {
            qe.colMat = 0, qe.vigaMat = 0, qe.colShape = 0, tt.clear(), st("beams"), xs();
            break;
          }
          case "3d":
          case "3d-structure":
          case "torre": {
            qe.colMat = 1, qe.vigaMat = 1, tt.clear(), st("3d"), vs();
            break;
          }
          case "portico": {
            qe.colMat = 0, qe.vigaMat = 0, qe.colShape = 0, st("frame"), Oe();
            break;
          }
          case "edificio": {
            st("edificio"), qe.colMat = 0, qe.vigaMat = 0, qe.colShape = 0, he = [], Ke = false, Ie = false, Bt = false, Oe();
            break;
          }
          case "edif-acero":
          case "edificio-acero": {
            st("edificio"), qe.colMat = 1, qe.vigaMat = 1, qe.steelColType = 0, qe.steelVigaType = 0, he = [], Ie = true, Ae = 2;
            const o = pe.reduce((l, s) => l + s, 0) / pe.length, n = se.reduce((l, s) => l + s, 0) / se.length;
            Ue = o >= n ? "y" : "x", Ke = true, pt = 0.08, Bt = false, Oe();
            break;
          }
          case "edif-acero-diag":
          case "edificio-acero-diag": {
            st("edificio"), qe.colMat = 1, qe.vigaMat = 1, qe.steelColType = 0, qe.steelVigaType = 0, he = [], Ie = true, Ae = 2;
            const o = pe.reduce((l, s) => l + s, 0) / pe.length, n = se.reduce((l, s) => l + s, 0) / se.length;
            Ue = o >= n ? "y" : "x", Ke = true, pt = 0.08, Bt = true, $t = "perimeter", Oe();
            break;
          }
          case "edif-muros":
          case "edificio-muros": {
            st("edificio"), qe.colMat = 0, qe.vigaMat = 0, qe.colShape = 0, Ie = false;
            const o = Math.round(((_a2 = W.nVanosX) == null ? void 0 : _a2.val) ?? 2), n = Math.round(((_b = W.nVanosY) == null ? void 0 : _b.val) ?? 2);
            he = [
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
            ], Ke = true, pt = 0.15, Oe();
            break;
          }
          case "edif-mixto":
          case "edificio-mixto": {
            st("edificio"), qe.colMat = 2, qe.vigaMat = 0, Ie = false;
            const o = Math.round(((_c = W.nVanosX) == null ? void 0 : _c.val) ?? 2), n = Math.round(((_d = W.nVanosY) == null ? void 0 : _d.val) ?? 2);
            he = [
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
            ], Ke = true, pt = 0.12, Oe();
            break;
          }
          case "mezanine":
          case "mezzanine": {
            st("edificio"), W.nPisos && (W.nPisos.val = 1), W.hPiso && (W.hPiso.val = 4.5), W.nVanosX && (W.nVanosX.val = 3), W.nVanosY && (W.nVanosY.val = 2), W.nSubViga && (W.nSubViga.val = 3), pe = [
              6,
              6,
              6
            ], se = [
              5,
              5
            ], qe.colMat = 1, qe.vigaMat = 1, qe.steelColType = 0, qe.steelVigaType = 0, he = [], Ie = true, Ae = 2, Ue = pe[0] >= se[0] ? "y" : "x", Ke = true, pt = 0.08, mt = 3, zt = 3, Oe();
            break;
          }
          case "galpon": {
            st("galpon"), qe.colMat = 1, qe.vigaMat = 1, Oe();
            break;
          }
          case "barra": {
            st("barra"), Oe();
            break;
          }
          case "placa3q":
          case "plate3q":
          case "placa-3q": {
            tt.clear(), st("placa-3q"), ys();
            break;
          }
          case "placa":
          case "plate":
          case "plate-q4":
          case "placa-q4": {
            tt.clear(), st("placa-q4"), $s();
            break;
          }
          case "losa-rect":
          case "rectangular-slab": {
            tt.clear(), st("losa-rect"), Ms();
            break;
          }
          case "losa-plana":
          case "flat-slab": {
            tt.clear(), st("losa-plana"), ws();
            break;
          }
          case "viga-alta":
          case "deep-beam": {
            tt.clear(), st("viga-alta"), Es();
            break;
          }
          case "muro-contencion":
          case "retaining-wall": {
            tt.clear(), st("muro-contencion"), Ss();
            break;
          }
          case "zapata":
          case "footing": {
            tt.clear(), st("zapata"), Is();
            break;
          }
          case "placa-orificios":
          case "plate-holes":
          case "placa-base": {
            tt.clear(), st("placa-orificios"), ks();
            break;
          }
          case "col-placa":
          case "columna-placa": {
            tt.clear(), st("col-placa"), Ts();
            break;
          }
          case "talud":
          case "slope": {
            tt.clear(), st("talud"), zs();
            break;
          }
          case "eiffel":
          case "torre-eiffel": {
            tt.clear(), st("eiffel"), Gs();
            break;
          }
          case "arco":
          case "arco-gateway": {
            tt.clear(), st("arco"), Ys();
            break;
          }
          case "puente":
          case "puente-colgante": {
            tt.clear(), st("puente"), Js();
            break;
          }
          case "twisted":
          case "torre-twisted":
          case "turning-torso": {
            tt.clear(), st("twisted"), Vs();
            break;
          }
          case "burj":
          case "burj-khalifa": {
            tt.clear(), st("burj"), Us();
            break;
          }
          case "opera":
          case "sydney-opera": {
            tt.clear(), st("opera"), Xs();
            break;
          }
          case "diagrid":
          case "gherkin": {
            tt.clear(), st("diagrid"), Ks();
            break;
          }
          case "muro-q4":
          case "shear-wall":
          case "muro-cantilever": {
            tt.clear(), st("muro-q4"), es();
            break;
          }
          case "viga-q4":
          case "cantilever-beam":
          case "viga-cantilever": {
            tt.clear(), st("viga-q4"), Zs();
            break;
          }
          case "placa-xy":
          case "placa-cantilever":
          case "losa-cantilever": {
            tt.clear(), st("placa-xy"), Qs();
            break;
          }
          case "pergola": {
            tt.clear(), st("pergola"), ea();
            break;
          }
          default:
            console.error(`Ejemplo desconocido: "${t}".`);
        }
      },
      plateQ4(t = 10, o = 10, n = 16, l = 16, s = "simply-supported", d = -10, a = 0.2, i = 3e7, p = 0.3, r = 0) {
        console.log(`Plate Q4 [${[
          "Mindlin (gruesa)",
          "Kirchhoff (delgada)",
          "Membrane"
        ][r]}]: ${t}\xD7${o}, ${n}\xD7${l} elem, BC=${s}, q=${d}, t=${a}`);
        const m = performance.now(), w = ts({
          E: i,
          nu: p,
          thickness: a,
          meshLx: t,
          meshLy: o,
          meshNx: n,
          meshNy: l,
          bcType: s,
          pressure: d,
          theoryType: r
        }), E = performance.now() - m;
        console.log(`Solved in ${E.toFixed(1)} ms`), console.log(`w_max = ${w.maxW.toExponential(6)}`), console.log(`w_center = ${(w.centerW ?? 0).toExponential(6)}`), console.log(`Mxx_max = ${w.maxMxx.toExponential(4)}, Myy_max = ${w.maxMyy.toExponential(4)}`), console.log(`Mxy_max = ${w.maxMxy.toExponential(4)}`), console.log(`Qx_max = ${w.maxQx.toExponential(4)}, Qy_max = ${w.maxQy.toExponential(4)}`);
        const y = w.nodeResults.map(($) => [
          $.x,
          $.y,
          0
        ]), f = w.elementResults.map(($) => [
          ...$.nodes
        ]);
        e.nodes.val = y, e.elements.val = f;
        const h = /* @__PURE__ */ new Map();
        w.nodeResults.forEach(($, C) => {
          h.set(C, [
            0,
            0,
            $.w,
            $.bx,
            $.by,
            0
          ]);
        }), e.deformOutputs && (e.deformOutputs.val = {
          deformations: h
        });
        const T = /* @__PURE__ */ new Map();
        w.nodeResults.forEach(($, C) => {
          ($.x < 1e-10 || $.x > t - 1e-10 || $.y < 1e-10 || $.y > o - 1e-10) && T.set(C, [
            true,
            true,
            true,
            true,
            true,
            true
          ]);
        });
        const k = /* @__PURE__ */ new Map();
        if (Math.abs(d) > 1e-30) {
          const $ = d * t * o / y.length;
          y.forEach((C, B) => {
            T.has(B) || k.set(B, [
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
          supports: T,
          loads: k
        }), e.elementInputs && (e.elementInputs.val = {}), e.analyzeOutputs) {
          const $ = /* @__PURE__ */ new Map(), C = /* @__PURE__ */ new Map(), B = /* @__PURE__ */ new Map();
          w.elementResults.forEach((x, u) => {
            $.set(u, [
              x.Mxx,
              x.Mxx,
              x.Mxx
            ]), C.set(u, [
              x.Myy,
              x.Myy,
              x.Myy
            ]), B.set(u, [
              x.Mxy,
              x.Mxy,
              x.Mxy
            ]);
          }), e.analyzeOutputs.val = {
            bendingXX: $,
            bendingYY: C,
            bendingXY: B
          };
        }
        return setTimeout(() => It(), 50), nt(), w;
      },
      setParam(t, o) {
        W[t] ? (W[t].val = o, console.log(`${t} = ${o}`), po(), Oe()) : gt[t] ? (gt[t].val = o, console.log(`${t} = ${o}`), po(), Oe()) : console.error(`Par\xE1metro "${t}" no encontrado. Disponibles: ${Object.keys({
          ...W,
          ...gt
        }).join(", ")}`);
      },
      get(t) {
        if (!t) {
          const o = {};
          for (const l in W) o[l] = W[l].val;
          for (const l in gt) o[l] = gt[l].val;
          o.plateTheory = Ce, o.supportType = St;
          const n = vn()[z];
          return n && n[St] && (o.supportLabel = n[St].label), console.table(o), o;
        }
        if (W[t]) return W[t].val;
        if (gt[t]) return gt[t].val;
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
        }[Ce] || Ce}`), z.includes("placa") && (po(), Oe());
      },
      setBc(t) {
        const o = vn()[z];
        if (!o || o.length === 0) {
          console.error("No support options for current generator");
          return;
        }
        if (typeof t == "string") {
          const n = o.findIndex((l) => l.label.toLowerCase().includes(t.toLowerCase()));
          t = n >= 0 ? n : 0;
        }
        St = t, St >= o.length && (St = 0), console.log(`Apoyo: ${o[St].label} \u2192 DOFs: [${o[St].dofs.map((n) => n ? "1" : "0").join(",")}]`), po(), Oe();
      },
      helpFull() {
        console.log(`
=== FEM Studio CLI ===
Nodos:    cad.addNode(x,y,z)  cad.removeNode(i)  cad.listNodes()
Elem:     cad.addFrame(n1,n2) cad.removeFrame(i)  cad.listFrames()
BC:       cad.addSupport(n)   cad.addLoad(n,[Fx,Fy,Fz,Mx,My,Mz])
Genera:   cad.frame(sv,sp)    cad.building(svX,svY,sp)
          cad.galpon(span,length,height,archRise,xDiv,yDiv)
Ejemplos: cad.example('truss') | 'beams' | '3d' | 'portico' | 'edificio' | 'galpon' | 'barra' | 'placa'
Placa Q4: cad.plateQ4(Lx, Ly, nx, ny, bcType, pressure, thickness, E, nu)
Params:   cad.setParam('Lx', 15)  cad.get()  cad.get('Lx')
Placa:    cad.setTheory('mindlin'|'kirchhoff'|'membrana')  cad.setBc('ss'|'empotrado')
Modal:    cad.modal()  cad.modal(true/false)  cad.setMode(0)  \u2014 an\xE1lisis modal + animaci\xF3n
Unidades: cad.units('SI'|'US')  \u2014 cambia sistema de unidades
Util:     cad.info()  cad.clear()  cad.help()  cad.helpFull()
      `);
      },
      units(t, o) {
        t && (b = t), o && (P = o), M = qo(b, P);
        const n = Le.querySelector("#cad3d-force-unit"), l = Le.querySelector("#cad3d-length-unit");
        return n && (n.textContent = b), l && (l.textContent = P), z && st(z), console.log(`Unidades: ${M.label} | E=${M.E.toExponential(3)} ${M.stress}`), M.id;
      },
      view(t) {
      },
      get mesh() {
        return e;
      }
    };
    function bs() {
      return fl(M);
    }
    function gs() {
      return ul(M);
    }
    let gt = {};
    function st(t) {
      var _a2, _b, _c, _d;
      z = t, pa.val = true, St = 0, ge && qn(), W = {};
      const o = bs()[t];
      if (o) for (const l of o) W[l.key] = {
        val: l.val,
        min: l.min,
        max: l.max,
        step: l.step,
        label: l.label
      };
      gt = {};
      const n = gs()[t];
      if (n) for (const l of n) gt[l.key] = {
        val: l.val,
        min: l.min,
        max: l.max,
        step: l.step,
        label: l.label
      };
      if (t === "edificio") {
        const l = Math.round(((_a2 = W.nVanosX) == null ? void 0 : _a2.val) ?? 2), s = Math.round(((_b = W.nVanosY) == null ? void 0 : _b.val) ?? 2);
        pe = Array(l).fill(M.defaultSpan), se = Array(s).fill(M.defaultSpan * 0.8);
        const d = Math.round(((_c = W.nPisos) == null ? void 0 : _c.val) ?? 3), a = ((_d = W.hPiso) == null ? void 0 : _d.val) ?? 3;
        q = Array(d).fill(a);
      }
      po(), setTimeout(() => {
        Aa(), Oe();
      }, 50);
    }
    function le(t) {
      var _a2, _b;
      return ((_a2 = W[t]) == null ? void 0 : _a2.val) ?? ((_b = gt[t]) == null ? void 0 : _b.val) ?? 0;
    }
    function Oe() {
      switch (z) {
        case "truss":
          hs();
          break;
        case "beams":
          xs();
          break;
        case "3d":
          vs();
          break;
        case "frame": {
          const o = Math.round(le("nVanos")), n = le("spanV"), l = Math.round(le("nPisos")), s = le("hPiso");
          tt.frame(Array(o).fill(n), Array(l).fill(s));
          break;
        }
        case "edificio": {
          const o = le("Lvix") || 0, n = le("Lvdx") || 0, l = le("Lviy") || 0, s = le("Lvdy") || 0, d = Math.max(1, Math.round(le("nSubViga") || 3)), a = Math.max(1, Math.round(le("nSubCol") || 1)), i = le("hPiso"), p = q.length > 0 ? [
            ...q
          ] : Array(Math.round(le("nPisos"))).fill(i);
          tt.building([
            ...pe
          ], [
            ...se
          ], p, d, o, n, l, s, a);
          break;
        }
        case "galpon":
          tt.galpon(le("span"), le("length"), le("height"), le("archRise"), Math.round(le("xDiv")), Math.round(le("yDiv")));
          break;
        case "barra":
          $a();
          break;
        case "placa-3q":
          ys();
          break;
        case "placa-q4":
          $s();
          break;
        case "losa-rect":
          Ms();
          break;
        case "losa-plana":
          ws();
          break;
        case "viga-alta":
          Es();
          break;
        case "muro-contencion":
          Ss();
          break;
        case "zapata":
          Is();
          break;
        case "placa-orificios":
          ks();
          break;
        case "col-placa":
          Ts();
          break;
        case "talud":
          zs();
          break;
        case "eiffel":
          Gs();
          break;
        case "arco":
          Ys();
          break;
        case "puente":
          Js();
          break;
        case "twisted":
          Vs();
          break;
        case "burj":
          Us();
          break;
        case "opera":
          Xs();
          break;
        case "diagrid":
          Ks();
          break;
        case "muro-q4":
          es();
          break;
        case "viga-q4":
          Zs();
          break;
        case "placa-xy":
          Qs();
          break;
        case "pergola":
          ea();
          break;
      }
      if ((z === "frame" || z === "edificio" || z === "galpon") && e.nodeInputs) {
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
        "diagrid",
        "muro-q4",
        "viga-q4",
        "placa-xy"
      ].includes(z)) {
        if (Z.size > 0 || J.size > 0 || _) {
          const o = e.elements.val, n = o.filter((l, s) => !(Z.has(s) || J.has(s) || _ && !G.has(s)));
          n.length !== o.length && (e.elements.val = n);
        }
        setTimeout(() => {
          wo(), _n();
        }, 30);
      }
    }
    function hs() {
      const t = le("span"), o = Math.round(le("divisions")), n = le("height"), l = t / o, s = [], d = [];
      for (let c = 0; c <= o; c++) s.push([
        l * c,
        0,
        0
      ]);
      for (let c = 0; c <= o; c++) s.push([
        l * c,
        0,
        n
      ]);
      const a = o + 1;
      for (let c = 0; c < o; c++) d.push([
        c,
        c + 1
      ]);
      for (let c = 0; c < o; c++) d.push([
        a + c,
        a + c + 1
      ]);
      for (let c = 0; c <= o; c++) d.push([
        c,
        a + c
      ]);
      for (let c = 0; c < o; c++) c < o / 2 ? d.push([
        c,
        a + c + 1
      ]) : d.push([
        a + c,
        c + 1
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
      ]), p = (le("CM") ?? 0) + (le("CV") ?? 0), r = /* @__PURE__ */ new Map();
      if (p !== 0) for (let c = 0; c <= o; c++) r.set(c, [
        0,
        0,
        p,
        0,
        0,
        0
      ]);
      e.nodes.val = s, e.elements.val = d, e.nodeInputs && (e.nodeInputs.val = {
        supports: i,
        loads: r
      }), nt();
    }
    function xs() {
      const t = le("width"), o = le("height"), n = le("Ex") ?? 0, l = (le("CM") ?? 0) + (le("CV") ?? 0), s = Math.max(1, Math.round(le("nSub") || 4)), d = [
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
      const i = [
        0,
        0,
        o
      ], p = [
        t,
        0,
        o
      ];
      let r = 1;
      for (let m = 1; m < s; m++) {
        const w = m / s, E = d.length;
        d.push([
          i[0] + (p[0] - i[0]) * w,
          i[1] + (p[1] - i[1]) * w,
          i[2] + (p[2] - i[2]) * w
        ]), a.push([
          r,
          E
        ]), r = E;
      }
      a.push([
        r,
        2
      ]);
      const c = /* @__PURE__ */ new Map();
      if (n !== 0 && l === 0) c.set(2, [
        n,
        0,
        0,
        0,
        0,
        0
      ]);
      else if (l !== 0 && n === 0) for (let m = 1; m < d.length; m++) m === 0 || m === 3 || c.set(m, [
        0,
        0,
        l,
        0,
        0,
        0
      ]);
      else if (n !== 0 && l !== 0) for (let m = 1; m < d.length; m++) m === 0 || m === 3 || c.set(m, [
        m === 2 ? n : 0,
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
      }), nt();
    }
    function vs() {
      const t = le("dx"), o = le("dy"), n = le("dz"), l = Math.round(le("stories")), s = Math.max(1, Math.round(le("nSub") || 3)), d = [];
      for (let f = 0; f <= l; f++) d.push([
        0,
        0,
        n * f
      ], [
        t,
        0,
        n * f
      ], [
        t,
        o,
        n * f
      ], [
        0,
        o,
        n * f
      ]);
      const a = d.length, i = [
        ...d
      ], p = [];
      for (let f = 0; f < l; f++) for (let h = 0; h < 4; h++) p.push([
        f * 4 + h,
        (f + 1) * 4 + h
      ]);
      for (let f = 0; f < l; f++) {
        const h = f * 4;
        p.push([
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
      const r = [];
      for (let f = 1; f <= l; f++) {
        const h = f * 4;
        r.push([
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
      for (const [f, h] of r) {
        const T = d[f], k = d[h];
        let $ = f;
        for (let C = 1; C < s; C++) {
          const B = C / s, x = i.length;
          i.push([
            T[0] + (k[0] - T[0]) * B,
            T[1] + (k[1] - T[1]) * B,
            T[2] + (k[2] - T[2]) * B
          ]), p.push([
            $,
            x
          ]), $ = x;
        }
        p.push([
          $,
          h
        ]);
      }
      const c = /* @__PURE__ */ new Map();
      for (let f = 0; f < 4; f++) c.set(f, [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
      const m = le("Ex") ?? 0, w = (le("CM") ?? 0) + (le("CV") ?? 0), E = a - 2, y = /* @__PURE__ */ new Map();
      if (m !== 0 && w === 0) y.set(E, [
        m,
        0,
        0,
        0,
        0,
        0
      ]);
      else if (w !== 0 && m === 0) for (let f = 0; f < i.length; f++) c.has(f) || y.set(f, [
        0,
        0,
        w,
        0,
        0,
        0
      ]);
      else if (m !== 0 && w !== 0) for (let f = 0; f < i.length; f++) c.has(f) || y.set(f, [
        f === E ? m : 0,
        0,
        w,
        0,
        0,
        0
      ]);
      e.nodes.val = i, e.elements.val = p, e.nodeInputs && (e.nodeInputs.val = {
        supports: c,
        loads: y
      }), nt();
    }
    function $a() {
      const t = le("L"), o = Math.round(le("nElem")), n = le("F"), l = t / o, s = [], d = [];
      for (let p = 0; p <= o; p++) s.push([
        l * p,
        0,
        0
      ]);
      for (let p = 0; p < o; p++) d.push([
        p,
        p + 1
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
      e.nodes.val = s, e.elements.val = d, e.nodeInputs && (e.nodeInputs.val = {
        supports: a,
        loads: i
      }), nt();
    }
    function ys() {
      const t = le("Lx") || 15, o = le("Ly") || 10, n = le("meshSize") || 0.5, l = le("q") || -3, s = le("t") || 1, d = le("E") || 3e7, a = le("nu") || 0.3, i = d / (2 * (1 + a)), p = Ce === 1 ? "Membrana" : Ce === 2 ? "Kirchhoff" : "Mindlin", { nodes: r, elements: c, boundaryIndices: m } = $o({
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
      }), w = t * o, E = l * w / r.length, y = new Map(m.map((h) => [
        h,
        [
          true,
          true,
          true,
          true,
          true,
          true
        ]
      ])), f = new Map(r.map((h, T) => [
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
      e.nodes.val = r, e.elements.val = c, e.nodeInputs && (e.nodeInputs.val = {
        supports: y,
        loads: f
      }), e.elementInputs && (e.elementInputs.val = {
        elasticities: new Map(c.map((h, T) => [
          T,
          d
        ])),
        elasticitiesOrthogonal: new Map(c.map((h, T) => [
          T,
          d
        ])),
        thicknesses: new Map(c.map((h, T) => [
          T,
          s
        ])),
        poissonsRatios: new Map(c.map((h, T) => [
          T,
          a
        ])),
        shearModuli: new Map(c.map((h, T) => [
          T,
          i
        ]))
      });
      try {
        const h = Pt(r, c, e.nodeInputs.val, e.elementInputs.val);
        h && e.deformOutputs && (e.deformOutputs.val = h);
        const T = yo(r, c, e.elementInputs.val, h);
        T && e.analyzeOutputs && (e.analyzeOutputs.val = T), console.log(`Plate 3Q [${p}]: ${r.length} nodes, ${c.length} triangles, t=${s}, E=${d}, \u03BD=${a}`);
      } catch (h) {
        console.warn("Plate 3Q analysis failed:", h.message);
      }
      setTimeout(() => It(), 50), nt();
    }
    function $s() {
      const t = le("Lx") || 10, o = le("Ly") || 10, n = Math.round(le("nx") || 16), l = Math.round(le("ny") || 16), s = le("t") || 0.2, d = le("q") || -10, a = le("E") || 3e7, i = le("nu") || 0.3, p = St === 1 ? "clamped" : "simply-supported", c = {
        1: 2,
        2: 1,
        3: 0
      }[Ce] ?? 0;
      return tt.plateQ4(t, o, n, l, p, d, s, a, i, c);
    }
    function Ms() {
      const t = le("a") || 6, o = le("b") || 4, n = Math.round(le("nx") || 12), l = Math.round(le("ny") || 8), s = le("t") || 0.1, d = le("q") || -10, a = le("E") || 35e6, i = le("nu") || 0.15, r = {
        1: 2,
        2: 1,
        3: 0
      }[Ce] ?? 0, c = tt.plateQ4(t, o, n, l, "simply-supported", d, s, a, i, r), m = a * s * s * s / (12 * (1 - i * i));
      let w = 0;
      for (let E = 1; E <= 19; E += 2) for (let y = 1; y <= 19; y += 2) {
        const f = E * E / (t * t) + y * y / (o * o);
        w += 1 / (E * y * f * f);
      }
      if (w *= 16 * Math.abs(d) / (Math.PI ** 6 * m), console.log(`\u{1F4D0} Navier anal\xEDtico w_center = ${w.toExponential(6)}`), c) {
        const E = Math.abs((Math.abs(c.centerW || 0) - w) / w * 100);
        console.log(`   WASM w_center = ${(c.centerW || 0).toExponential(6)}, error = ${E.toFixed(2)}%`);
      }
      return c;
    }
    function ws() {
      const t = le("t") || 0.2, o = le("q") || -10, n = le("E") || 35e6, l = le("nu") || 0.2, s = le("meshSize") || 0.6, d = [
        3.6,
        4.2,
        4.2,
        3.6
      ], a = [
        3,
        3.6,
        3
      ], i = d.reduce((g, S) => g + S, 0), p = a.reduce((g, S) => g + S, 0), r = [
        0
      ];
      for (const g of d) r.push(r[r.length - 1] + g);
      const c = [
        0
      ];
      for (const g of a) c.push(c[c.length - 1] + g);
      const m = Math.max(2, Math.round(i / s)), w = Math.max(2, Math.round(p / s)), E = i / m, y = p / w, f = [];
      for (let g = 0; g <= w; g++) for (let S = 0; S <= m; S++) f.push([
        S * E,
        g * y
      ]);
      const h = [], T = /* @__PURE__ */ new Set();
      for (const g of r) for (const S of c) {
        let v = 1 / 0, F = 0;
        for (let K = 0; K < f.length; K++) {
          const U = Math.hypot(f[K][0] - g, f[K][1] - S);
          U < v && (v = U, F = K);
        }
        T.has(F) || (T.add(F), h.push({
          node: F,
          dof: 0,
          k: 1e15
        }));
      }
      const $ = {
        1: 2,
        2: 1,
        3: 0
      }[Ce] ?? 1;
      console.log(`Losa Plana Q4 [${[
        "Mindlin",
        "Kirchhoff",
        "Membrane"
      ][$]}]: ${i}\xD7${p}m, ${m}\xD7${w} elem, ${T.size} columnas`);
      const C = performance.now(), B = ts({
        E: n,
        nu: l,
        thickness: t,
        meshLx: i,
        meshLy: p,
        meshNx: m,
        meshNy: w,
        bcType: "none",
        pressure: o,
        theoryType: $,
        springs: h
      }), x = performance.now() - C;
      console.log(`Solved in ${x.toFixed(1)} ms, w_max = ${B.maxW.toExponential(4)}`);
      const u = B.nodeResults.map((g) => [
        g.x,
        g.y,
        0
      ]), I = B.elementResults.map((g) => [
        ...g.nodes
      ]);
      e.nodes.val = u, e.elements.val = I;
      const A = /* @__PURE__ */ new Map();
      B.nodeResults.forEach((g, S) => {
        A.set(S, [
          0,
          0,
          g.w,
          g.bx,
          g.by,
          0
        ]);
      }), e.deformOutputs && (e.deformOutputs.val = {
        deformations: A
      });
      const R = /* @__PURE__ */ new Map();
      for (const g of T) R.set(g, [
        true,
        true,
        true,
        false,
        false,
        false
      ]);
      const j = /* @__PURE__ */ new Map();
      if (Math.abs(o) > 1e-30) {
        const g = o * i * p / u.length;
        u.forEach((S, v) => {
          R.has(v) || j.set(v, [
            0,
            0,
            g,
            0,
            0,
            0
          ]);
        });
      }
      if (e.nodeInputs && (e.nodeInputs.val = {
        supports: R,
        loads: j
      }), e.elementInputs && (e.elementInputs.val = {}), e.analyzeOutputs) {
        const g = /* @__PURE__ */ new Map(), S = /* @__PURE__ */ new Map(), v = /* @__PURE__ */ new Map();
        B.elementResults.forEach((F, K) => {
          g.set(K, [
            F.Mxx,
            F.Mxx,
            F.Mxx
          ]), S.set(K, [
            F.Myy,
            F.Myy,
            F.Myy
          ]), v.set(K, [
            F.Mxy,
            F.Mxy,
            F.Mxy
          ]);
        }), e.analyzeOutputs.val = {
          bendingXX: g,
          bendingYY: S,
          bendingXY: v
        };
      }
      setTimeout(() => It(), 50), nt();
    }
    function Es() {
      const t = le("L") || 4, o = le("H") || 2, n = le("t") || 0.1, l = le("E") || 2e7, s = le("nu") || 0.2, d = l / (2 * (1 + s)), a = le("q") || -100, i = le("b") || 0.8, p = le("meshSize") || 0.2, { nodes: r, elements: c, boundaryIndices: m } = $o({
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
        maxMeshSize: p
      }), w = r, E = 0.4, y = /* @__PURE__ */ new Map();
      for (let x = 0; x < w.length; x++) {
        const u = w[x][0], I = w[x][1];
        Math.abs(I) < 1e-6 && (u <= E + 1e-6 || u >= t - E - 1e-6) && y.set(x, [
          true,
          true,
          true,
          true,
          true,
          true
        ]);
      }
      const f = (t - i) / 2, h = f + i, T = [];
      for (let x = 0; x < w.length; x++) if (Math.abs(w[x][1] - o) < 1e-6) {
        const u = w[x][0];
        u >= f - 1e-6 && u <= h + 1e-6 && T.push(x);
      }
      const k = a * i / Math.max(T.length, 1), $ = /* @__PURE__ */ new Map();
      for (const x of T) $.set(x, [
        0,
        k,
        0,
        0,
        0,
        0
      ]);
      const C = {
        elasticities: new Map(c.map((x, u) => [
          u,
          l
        ])),
        elasticitiesOrthogonal: new Map(c.map((x, u) => [
          u,
          l
        ])),
        thicknesses: new Map(c.map((x, u) => [
          u,
          n
        ])),
        poissonsRatios: new Map(c.map((x, u) => [
          u,
          s
        ])),
        shearModuli: new Map(c.map((x, u) => [
          u,
          d
        ]))
      }, B = {
        supports: y,
        loads: $
      };
      try {
        const x = Pt(w, c, B, C), u = yo(w, c, C, x), I = w.map((R) => [
          R[0],
          0,
          R[1]
        ]);
        if (e.nodes.val = I, e.elements.val = c, x && x.deformations) {
          const R = /* @__PURE__ */ new Map();
          x.deformations.forEach((j, g) => {
            R.set(g, [
              j[0],
              j[2],
              j[1],
              j[3],
              j[5],
              j[4]
            ]);
          }), e.deformOutputs && (e.deformOutputs.val = {
            deformations: R
          });
        }
        if (e.nodeInputs) {
          const R = /* @__PURE__ */ new Map();
          y.forEach((g, S) => R.set(S, g));
          const j = /* @__PURE__ */ new Map();
          $.forEach((g, S) => j.set(S, [
            g[0],
            g[2],
            g[1],
            g[3],
            g[5],
            g[4]
          ])), e.nodeInputs && (e.nodeInputs.val = {
            supports: R,
            loads: j
          });
        }
        e.elementInputs && (e.elementInputs.val = {}), e.analyzeOutputs && (e.analyzeOutputs.val = {});
        let A = 0;
        x && x.deformations && x.deformations.forEach((R) => {
          const j = Math.sqrt(R[0] * R[0] + R[1] * R[1] + R[2] * R[2]);
          A = Math.max(A, j);
        }), console.log(`Viga Alta: ${w.length} nodos, ${c.length} triangulos`), console.log(`  L=${t}, H=${o}, t=${n}, E=${l}, nu=${s}`), console.log(`  Carga: q=${a} kN/m sobre ${i}m central`), console.log(`  max|u| = ${A.toExponential(4)}`);
      } catch (x) {
        console.warn("Viga Alta analysis failed:", x.message);
      }
      setTimeout(() => It(), 50), nt();
    }
    function Ss() {
      const t = le("H") || 4, o = le("B") || 3, n = le("tw") || 0.3, l = le("tb") || 0.4, s = le("meshSize") || 0.2, d = le("E") || 25e6, a = le("nu") || 0.2, i = d / (2 * (1 + a)), p = le("gamma") || 18, r = le("Ka") || 0.33, c = le("Es") || 5e4, m = le("nus") || 0.3, w = c / (2 * (1 + m)), E = le("kn") || 1e6, y = le("ks") || 1e4, f = le("gammaW") || 9.81, h = le("Hw") || 3.5, T = le("qs") || 0, k = St, $ = o * 0.3, C = o * 0.7, B = [
        [
          -$,
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
      let x = [], u = [], I = /* @__PURE__ */ new Map(), A = /* @__PURE__ */ new Map(), R;
      if (k === 0) {
        const S = $o({
          points: B,
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
        x = S.nodes, u = S.elements;
        for (let F = 0; F < x.length; F++) Math.abs(x[F][1]) < 1e-6 && I.set(F, [
          true,
          true,
          true,
          true,
          true,
          true
        ]);
        const v = [];
        for (let F = 0; F < x.length; F++) {
          const K = x[F][0], U = x[F][1];
          Math.abs(K - n) < s * 0.6 && U >= l - 1e-6 && v.push({
            idx: F,
            y: U
          });
        }
        v.sort((F, K) => F.y - K.y);
        for (let F = 0; F < v.length; F++) {
          const { idx: K, y: U } = v[F], ae = l + t - U, Q = r * p * ae + r * T;
          let X = s;
          F > 0 && F < v.length - 1 ? X = (v[F + 1].y - v[F - 1].y) / 2 : F === 0 && v.length > 1 ? X = (v[1].y - v[0].y) / 2 : F === v.length - 1 && v.length > 1 && (X = (v[F].y - v[F - 1].y) / 2);
          const ie = Q * X;
          Math.abs(ie) > 1e-10 && A.set(K, [
            ie,
            0,
            0,
            0,
            0,
            0
          ]);
        }
        R = {
          elasticities: new Map(u.map((F, K) => [
            K,
            d
          ])),
          elasticitiesOrthogonal: new Map(u.map((F, K) => [
            K,
            d
          ])),
          thicknesses: new Map(u.map((F, K) => [
            K,
            n
          ])),
          poissonsRatios: new Map(u.map((F, K) => [
            K,
            a
          ])),
          shearModuli: new Map(u.map((F, K) => [
            K,
            i
          ]))
        };
      } else if (k === 1 || k === 2) {
        const S = C, v = l + t;
        if (k === 2) {
          const F = [
            [
              -$,
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
              v,
              0
            ],
            [
              n,
              v,
              0
            ],
            [
              0,
              v,
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
          ], K = Math.max(3, Math.ceil((v - l) / s)), U = [];
          for (let oe = 0; oe <= K; oe++) U.push([
            n,
            l + oe * (v - l) / K,
            0
          ]);
          const ae = $o({
            points: [
              ...F,
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
          x = ae.nodes, u = ae.elements;
          const Q = s * 0.4, X = [];
          for (let oe = 0; oe < x.length; oe++) {
            const Se = x[oe][0], He = x[oe][1];
            Math.abs(Se - n) < Q && He >= l - Q && X.push(oe);
          }
          X.sort((oe, Se) => x[oe][1] - x[Se][1]);
          const ie = [
            X[0]
          ];
          for (let oe = 1; oe < X.length; oe++) {
            const Se = x[X[oe]][1] - x[ie[ie.length - 1]][1];
            Math.abs(Se) > s * 0.05 && ie.push(X[oe]);
          }
          X.length = 0, X.push(...ie);
          const re = /* @__PURE__ */ new Map();
          for (const oe of X) {
            const Se = x.length;
            x.push([
              x[oe][0],
              x[oe][1],
              x[oe][2]
            ]), re.set(oe, Se);
          }
          const Me = u.length, Te = [];
          for (let oe = 0; oe < Me; oe++) {
            const Se = u[oe], He = (x[Se[0]][0] + x[Se[1]][0] + x[Se[2]][0]) / 3, at = (x[Se[0]][1] + x[Se[1]][1] + x[Se[2]][1]) / 3, rt = He >= -$ && He <= C && at >= 0 && at <= l, wt = He >= 0 && He <= n && at >= l && at <= l + t, Tt = rt || wt;
            if (Te.push(!Tt), !Tt) for (let Et = 0; Et < Se.length; Et++) {
              const Ot = re.get(Se[Et]);
              Ot !== void 0 && (Se[Et] = Ot);
            }
          }
          const N = u.length;
          for (let oe = 0; oe < X.length - 1; oe++) {
            const Se = X[oe], He = X[oe + 1], at = re.get(Se), rt = re.get(He);
            u.push([
              He,
              Se,
              at,
              rt
            ]);
          }
          const ce = u.length - N, te = /* @__PURE__ */ new Map(), de = /* @__PURE__ */ new Map(), ee = /* @__PURE__ */ new Map(), ue = /* @__PURE__ */ new Map(), Ee = /* @__PURE__ */ new Map();
          for (let oe = 0; oe < Me; oe++) Te[oe] ? (te.set(oe, c), de.set(oe, c), ue.set(oe, m), Ee.set(oe, w), ee.set(oe, 1)) : (te.set(oe, d), de.set(oe, d), ue.set(oe, a), Ee.set(oe, i), ee.set(oe, 1));
          for (let oe = N; oe < u.length; oe++) te.set(oe, E), de.set(oe, 0), ue.set(oe, 0), Ee.set(oe, y), ee.set(oe, 0);
          R = {
            elasticities: te,
            elasticitiesOrthogonal: de,
            thicknesses: ee,
            poissonsRatios: ue,
            shearModuli: Ee
          };
          for (let oe = 0; oe < x.length; oe++) {
            const Se = x[oe][0], He = x[oe][1];
            Math.abs(He) < 1e-6 ? I.set(oe, [
              true,
              true,
              true,
              true,
              true,
              true
            ]) : Math.abs(Se - S) < s * 0.1 && I.set(oe, [
              true,
              false,
              true,
              true,
              true,
              true
            ]);
          }
          for (let oe = 0; oe < Me; oe++) {
            if (!Te[oe]) continue;
            const Se = u[oe], He = x[Se[0]], at = x[Se[1]], rt = x[Se[2]], wt = Math.abs((at[0] - He[0]) * (rt[1] - He[1]) - (rt[0] - He[0]) * (at[1] - He[1])) / 2, Tt = -p * wt / 3;
            for (const Et of Se) {
              const Ot = A.get(Et) || [
                0,
                0,
                0,
                0,
                0,
                0
              ];
              Ot[1] += Tt, A.set(Et, Ot);
            }
          }
          if (T > 0) {
            const oe = [];
            for (let Se = 0; Se < x.length; Se++) {
              const He = x[Se][0], at = x[Se][1];
              Math.abs(at - v) < s * 0.1 && He > n - 1e-6 && oe.push({
                idx: Se,
                x: He
              });
            }
            oe.sort((Se, He) => Se.x - He.x);
            for (let Se = 0; Se < oe.length; Se++) {
              let He = s;
              Se > 0 && Se < oe.length - 1 ? He = (oe[Se + 1].x - oe[Se - 1].x) / 2 : Se === 0 && oe.length > 1 ? He = (oe[1].x - oe[0].x) / 2 : Se === oe.length - 1 && oe.length > 1 && (He = (oe[Se].x - oe[Se - 1].x) / 2);
              const at = -T * He, rt = A.get(oe[Se].idx) || [
                0,
                0,
                0,
                0,
                0,
                0
              ];
              rt[1] += at, A.set(oe[Se].idx, rt);
            }
          }
          console.log(`  Interfaz Goodman: ${X.length} nodos interfaz, ${ce} elem interfaz, kn=${E}, ks=${y}`);
        } else {
          const F = [
            [
              -$,
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
              v,
              0
            ],
            [
              n,
              v,
              0
            ],
            [
              0,
              v,
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
          ], K = [
            [
              n,
              l,
              0
            ]
          ], U = $o({
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
          x = U.nodes, u = U.elements;
          const ae = (N) => {
            const ce = (x[N[0]][0] + x[N[1]][0] + x[N[2]][0]) / 3, te = (x[N[0]][1] + x[N[1]][1] + x[N[2]][1]) / 3, de = ce >= -$ && ce <= C && te >= 0 && te <= l, ee = ce >= 0 && ce <= n && te >= l && te <= l + t;
            return de || ee;
          }, Q = /* @__PURE__ */ new Map(), X = /* @__PURE__ */ new Map(), ie = /* @__PURE__ */ new Map(), re = /* @__PURE__ */ new Map(), Me = /* @__PURE__ */ new Map(), Te = [];
          for (let N = 0; N < u.length; N++) {
            const ce = ae(u[N]);
            Te.push(!ce), ce ? (Q.set(N, d), X.set(N, d), re.set(N, a), Me.set(N, i), ie.set(N, 1)) : (Q.set(N, c), X.set(N, c), re.set(N, m), Me.set(N, w), ie.set(N, 1));
          }
          R = {
            elasticities: Q,
            elasticitiesOrthogonal: X,
            thicknesses: ie,
            poissonsRatios: re,
            shearModuli: Me
          };
          for (let N = 0; N < x.length; N++) {
            const ce = x[N][0], te = x[N][1];
            Math.abs(te) < 1e-6 ? I.set(N, [
              true,
              true,
              true,
              true,
              true,
              true
            ]) : Math.abs(ce - S) < s * 0.1 && I.set(N, [
              true,
              false,
              true,
              true,
              true,
              true
            ]);
          }
          for (let N = 0; N < u.length; N++) {
            if (!Te[N]) continue;
            const ce = u[N], te = x[ce[0]], de = x[ce[1]], ee = x[ce[2]], ue = Math.abs((de[0] - te[0]) * (ee[1] - te[1]) - (ee[0] - te[0]) * (de[1] - te[1])) / 2, Ee = -p * ue / 3;
            for (const oe of ce) {
              const Se = A.get(oe) || [
                0,
                0,
                0,
                0,
                0,
                0
              ];
              Se[1] += Ee, A.set(oe, Se);
            }
          }
          if (T > 0) {
            const N = [];
            for (let ce = 0; ce < x.length; ce++) {
              const te = x[ce][0], de = x[ce][1];
              Math.abs(de - v) < s * 0.1 && te > n - 1e-6 && N.push({
                idx: ce,
                x: te
              });
            }
            N.sort((ce, te) => ce.x - te.x);
            for (let ce = 0; ce < N.length; ce++) {
              let te = s;
              ce > 0 && ce < N.length - 1 ? te = (N[ce + 1].x - N[ce - 1].x) / 2 : ce === 0 && N.length > 1 ? te = (N[1].x - N[0].x) / 2 : ce === N.length - 1 && N.length > 1 && (te = (N[ce].x - N[ce - 1].x) / 2);
              const de = -T * te, ee = A.get(N[ce].idx) || [
                0,
                0,
                0,
                0,
                0,
                0
              ];
              ee[1] += de, A.set(N[ce].idx, ee);
            }
          }
        }
      }
      if (k === 3) {
        const S = $o({
          points: B,
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
        x = S.nodes, u = S.elements;
        for (let ae = 0; ae < x.length; ae++) Math.abs(x[ae][1]) < 1e-6 && I.set(ae, [
          true,
          true,
          true,
          true,
          true,
          true
        ]);
        const v = l + t, F = Math.min(h, t), K = v - F, U = [];
        for (let ae = 0; ae < x.length; ae++) {
          const Q = x[ae][0], X = x[ae][1];
          Math.abs(Q - n) < s * 0.6 && X >= l - 1e-6 && U.push({
            idx: ae,
            y: X
          });
        }
        U.sort((ae, Q) => ae.y - Q.y);
        for (let ae = 0; ae < U.length; ae++) {
          const { idx: Q, y: X } = U[ae], ie = Math.max(0, v - X);
          if (ie <= 0 || X < K - 1e-6) continue;
          const re = Math.min(ie, F), Me = f * re;
          let Te = s;
          ae > 0 && ae < U.length - 1 ? Te = (U[ae + 1].y - U[ae - 1].y) / 2 : ae === 0 && U.length > 1 ? Te = (U[1].y - U[0].y) / 2 : ae === U.length - 1 && U.length > 1 && (Te = (U[ae].y - U[ae - 1].y) / 2);
          const N = Me * Te;
          Math.abs(N) > 1e-10 && A.set(Q, [
            N,
            0,
            0,
            0,
            0,
            0
          ]);
        }
        R = {
          elasticities: new Map(u.map((ae, Q) => [
            Q,
            d
          ])),
          elasticitiesOrthogonal: new Map(u.map((ae, Q) => [
            Q,
            d
          ])),
          thicknesses: new Map(u.map((ae, Q) => [
            Q,
            n
          ])),
          poissonsRatios: new Map(u.map((ae, Q) => [
            Q,
            a
          ])),
          shearModuli: new Map(u.map((ae, Q) => [
            Q,
            i
          ]))
        };
      }
      const j = {
        supports: I,
        loads: A
      }, g = [
        "Rankine (Ka)",
        "Suelo continuo",
        "Interfaz",
        "Presion agua"
      ];
      try {
        const S = Pt(x, u, j, R), v = u.filter((ie) => ie.length === 3), F = {};
        for (const ie of Object.keys(R)) {
          const re = R[ie];
          if (re && re instanceof Map) {
            const Me = /* @__PURE__ */ new Map();
            let Te = 0;
            for (let N = 0; N < u.length; N++) u[N].length === 3 && (re.has(N) && Me.set(Te, re.get(N)), Te++);
            F[ie] = Me;
          }
        }
        const K = yo(x, v, F, S), U = x.map((ie) => [
          ie[0],
          0,
          ie[1]
        ]);
        if (e.nodes.val = U, e.elements.val = v, S && S.deformations) {
          const ie = /* @__PURE__ */ new Map();
          S.deformations.forEach((re, Me) => {
            ie.set(Me, [
              re[0],
              re[2],
              re[1],
              re[3],
              re[5],
              re[4]
            ]);
          }), e.deformOutputs && (e.deformOutputs.val = {
            deformations: ie
          });
        }
        const ae = /* @__PURE__ */ new Map();
        I.forEach((ie, re) => ae.set(re, ie));
        const Q = /* @__PURE__ */ new Map();
        A.forEach((ie, re) => Q.set(re, [
          ie[0],
          ie[2],
          ie[1],
          ie[3],
          ie[5],
          ie[4]
        ])), e.nodeInputs && (e.nodeInputs.val = {
          supports: ae,
          loads: Q
        }), e.elementInputs && (e.elementInputs.val = {}), e.analyzeOutputs && (e.analyzeOutputs.val = {});
        let X = 0;
        S && S.deformations && S.deformations.forEach((ie) => {
          const re = Math.sqrt(ie[0] * ie[0] + ie[1] * ie[1] + ie[2] * ie[2]);
          X = Math.max(X, re);
        }), console.log(`Muro Contencion [${g[k]}]: ${x.length} nodos, ${u.length} triangulos`), console.log(`  H=${t}, B=${o}, tw=${n}, tb=${l}, Ka=${r}, gamma=${p}, qs=${T}`), k === 1 && console.log(`  Es=${c}, nus=${m}`), k === 2 && console.log(`  Es=${c}, nus=${m}, kn=${E}, ks=${y}`), k === 3 && console.log(`  gammaW=${f}, Hw=${h}`), console.log(`  max|u| = ${X.toExponential(4)}`);
      } catch (S) {
        console.warn("Muro Contencion failed:", S.message);
      }
      setTimeout(() => It(), 50), nt();
    }
    function Is() {
      const t = le("Lx") || 2, o = le("Ly") || 2, n = le("t") || 0.5, l = le("colA") || 0.4, s = le("colH") || 1.5, d = Math.round(le("nx") || 8), a = Math.round(le("ny") || 8), i = le("E") || 25e6, p = le("nu") || 0.2, r = le("P") || -500, c = le("Mx") || 0, m = le("My") || 0, w = le("ks") || 2e4, E = t / d, y = o / a, f = t / 2, h = o / 2, T = l / 2, k = [];
      for (let I = 0; I <= a; I++) for (let A = 0; A <= d; A++) {
        const R = I * (d + 1) + A;
        let j = E, g = y;
        (A === 0 || A === d) && (j = E / 2), (I === 0 || I === a) && (g = y / 2), k.push({
          node: R,
          dof: 0,
          k: w * j * g
        });
      }
      let $ = 0;
      for (let I = 0; I <= a; I++) for (let A = 0; A <= d; A++) Math.abs(A * E - f) <= T + 1e-6 && Math.abs(I * y - h) <= T + 1e-6 && $++;
      const C = r / Math.max($, 1), B = [];
      for (let I = 0; I <= a; I++) for (let A = 0; A <= d; A++) {
        const R = A * E, j = I * y;
        Math.abs(R - f) <= T + 1e-6 && Math.abs(j - h) <= T + 1e-6 && B.push({
          node: I * (d + 1) + A,
          dof: 0,
          value: C
        });
      }
      if (Math.abs(c) > 1e-6) {
        const I = T > 1e-6 ? T : y, A = c / I;
        for (let R = 0; R <= a; R++) for (let j = 0; j <= d; j++) {
          const g = j * E, S = R * y;
          if (Math.abs(g - f) <= T + 1e-6 && Math.abs(S - h) <= T + 1e-6) {
            const v = S - h;
            if (Math.abs(v) > 1e-6) {
              const F = v > 0 ? 1 : -1;
              B.push({
                node: R * (d + 1) + j,
                dof: 0,
                value: F * A / $ * 2
              });
            }
          }
        }
      }
      if (Math.abs(m) > 1e-6) {
        const I = T > 1e-6 ? T : E, A = m / I;
        for (let R = 0; R <= a; R++) for (let j = 0; j <= d; j++) {
          const g = j * E, S = R * y;
          if (Math.abs(g - f) <= T + 1e-6 && Math.abs(S - h) <= T + 1e-6) {
            const v = g - f;
            if (Math.abs(v) > 1e-6) {
              const F = v > 0 ? 1 : -1;
              B.push({
                node: R * (d + 1) + j,
                dof: 0,
                value: F * A / $ * 2
              });
            }
          }
        }
      }
      const u = {
        1: 2,
        2: 1,
        3: 0
      }[Ce] ?? 1;
      console.log(`Zapata: ${t}x${o}m, t=${n}m, ${d}x${a} elem`), console.log(`  col=${l}m, P=${r}, Mx=${c}, My=${m}, ks=${w}`);
      try {
        const I = ts({
          E: i,
          nu: p,
          thickness: n,
          meshLx: t,
          meshLy: o,
          meshNx: d,
          meshNy: a,
          bcType: "none",
          pressure: 0,
          theoryType: u,
          springs: k,
          pointLoads: B
        });
        console.log(`  Solved: w_max = ${I.maxW.toExponential(4)}`);
        const A = I.nodeResults.map((K) => [
          K.x,
          K.y,
          0
        ]), R = A.length;
        A.push([
          f - T,
          h - T,
          0
        ]), A.push([
          f + T,
          h - T,
          0
        ]), A.push([
          f + T,
          h + T,
          0
        ]), A.push([
          f - T,
          h + T,
          0
        ]), A.push([
          f - T,
          h - T,
          s
        ]), A.push([
          f + T,
          h - T,
          s
        ]), A.push([
          f + T,
          h + T,
          s
        ]), A.push([
          f - T,
          h + T,
          s
        ]);
        const j = I.elementResults.map((K) => [
          ...K.nodes
        ]);
        j.push([
          R,
          R + 4
        ]), j.push([
          R + 1,
          R + 5
        ]), j.push([
          R + 2,
          R + 6
        ]), j.push([
          R + 3,
          R + 7
        ]), j.push([
          R + 4,
          R + 5
        ]), j.push([
          R + 5,
          R + 6
        ]), j.push([
          R + 6,
          R + 7
        ]), j.push([
          R + 7,
          R + 4
        ]), j.push([
          R,
          R + 1
        ]), j.push([
          R + 1,
          R + 2
        ]), j.push([
          R + 2,
          R + 3
        ]), j.push([
          R + 3,
          R
        ]), e.nodes.val = A, e.elements.val = j;
        const g = /* @__PURE__ */ new Map();
        I.nodeResults.forEach((K, U) => {
          g.set(U, [
            0,
            0,
            K.w,
            K.bx,
            K.by,
            0
          ]);
        }), e.deformOutputs && (e.deformOutputs.val = {
          deformations: g
        });
        const S = /* @__PURE__ */ new Map();
        I.nodeResults.forEach((K, U) => {
          const ae = K.x, Q = K.y;
          (ae < 1e-6 || ae > t - 1e-6 || Q < 1e-6 || Q > o - 1e-6) && S.set(U, [
            false,
            false,
            true,
            false,
            false,
            false
          ]);
        });
        const v = /* @__PURE__ */ new Map();
        if (v.set(R + 4, [
          0,
          0,
          r / 4,
          0,
          0,
          0
        ]), v.set(R + 5, [
          0,
          0,
          r / 4,
          0,
          0,
          0
        ]), v.set(R + 6, [
          0,
          0,
          r / 4,
          0,
          0,
          0
        ]), v.set(R + 7, [
          0,
          0,
          r / 4,
          0,
          0,
          0
        ]), e.nodeInputs && (e.nodeInputs.val = {
          supports: S,
          loads: v
        }), e.elementInputs && (e.elementInputs.val = {}), e.analyzeOutputs) {
          const K = I.elementResults.length, U = /* @__PURE__ */ new Map(), ae = /* @__PURE__ */ new Map(), Q = /* @__PURE__ */ new Map();
          I.elementResults.forEach((X, ie) => {
            U.set(ie, [
              X.Mxx,
              X.Mxx,
              X.Mxx
            ]), ae.set(ie, [
              X.Myy,
              X.Myy,
              X.Myy
            ]), Q.set(ie, [
              X.Mxy,
              X.Mxy,
              X.Mxy
            ]);
          }), e.analyzeOutputs.val = {
            bendingXX: U,
            bendingYY: ae,
            bendingXY: Q
          };
        }
        const F = lt();
        F && (F.settings.shellResults.val = "bendingXX");
      } catch (I) {
        console.warn("Zapata solver failed:", I.message);
      }
      setTimeout(() => It(), 50), nt();
    }
    function ks() {
      const t = le("Lx") || 0.4, o = le("Ly") || 0.4, n = le("t") || 0.025, l = le("dBolt") || 0.022, s = le("sx") || 0.28, d = le("sy") || 0.28, a = le("colA") || 0.2, i = le("meshSize") || 8e-3, p = le("E") || 2e8, r = le("nu") || 0.3, c = p / (2 * (1 + r)), m = le("P") || -200, w = Math.round(le("nBolts") || 4), E = t / 2, y = o / 2, f = l / 2, h = a / 2, T = [];
      w >= 4 && (T.push([
        E - s / 2,
        y - d / 2
      ]), T.push([
        E + s / 2,
        y - d / 2
      ]), T.push([
        E + s / 2,
        y + d / 2
      ]), T.push([
        E - s / 2,
        y + d / 2
      ])), w >= 6 && (T.push([
        E,
        y - d / 2
      ]), T.push([
        E,
        y + d / 2
      ])), w >= 8 && (T.push([
        E - s / 2,
        y
      ]), T.push([
        E + s / 2,
        y
      ]));
      const { nodes: k, elements: $ } = $o({
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
        maxMeshSize: i
      }), C = (g, S) => {
        for (const [v, F] of T) if ((g - v) * (g - v) + (S - F) * (S - F) < f * f) return true;
        return false;
      }, B = $.filter((g) => {
        const S = (k[g[0]][0] + k[g[1]][0] + k[g[2]][0]) / 3, v = (k[g[0]][1] + k[g[1]][1] + k[g[2]][1]) / 3;
        return !C(S, v);
      }), x = k, u = /* @__PURE__ */ new Map();
      for (let g = 0; g < x.length; g++) {
        const S = x[g][0], v = x[g][1];
        for (const [F, K] of T) {
          const U = Math.sqrt((S - F) * (S - F) + (v - K) * (v - K));
          U >= f * 0.7 && U <= f * 1.5 && u.set(g, [
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
      let A = 0;
      for (let g = 0; g < x.length; g++) {
        const S = x[g][0], v = x[g][1];
        Math.abs(S - E) <= h && Math.abs(v - y) <= h && A++;
      }
      const R = m / Math.max(A, 1);
      for (let g = 0; g < x.length; g++) {
        const S = x[g][0], v = x[g][1];
        if (Math.abs(S - E) <= h && Math.abs(v - y) <= h) {
          const F = I.get(g) || [
            0,
            0,
            0,
            0,
            0,
            0
          ];
          F[2] += R, I.set(g, F);
        }
      }
      const j = {
        elasticities: new Map(B.map((g, S) => [
          S,
          p
        ])),
        elasticitiesOrthogonal: new Map(B.map((g, S) => [
          S,
          p
        ])),
        thicknesses: new Map(B.map((g, S) => [
          S,
          n
        ])),
        poissonsRatios: new Map(B.map((g, S) => [
          S,
          r
        ])),
        shearModuli: new Map(B.map((g, S) => [
          S,
          c
        ]))
      };
      console.log(`Placa Base: ${t * 1e3}x${o * 1e3}mm, t=${n * 1e3}mm, ${w} pernos d=${l * 1e3}mm`), console.log(`  P=${m} kN, col=${a * 1e3}mm, mesh=${i * 1e3}mm`), console.log(`  ${B.length} triangulos, ${x.length} nodos`);
      try {
        const g = Pt(x, B, {
          supports: u,
          loads: I
        }, j), S = yo(x, B, j, g);
        e.nodes.val = x, e.elements.val = B, g && e.deformOutputs && (e.deformOutputs.val = g), e.nodeInputs && (e.nodeInputs.val = {
          supports: u,
          loads: I
        }), e.elementInputs && (e.elementInputs.val = {}), S && e.analyzeOutputs && (e.analyzeOutputs.val = S);
        let v = 0;
        g && g.deformations && g.deformations.forEach((F) => {
          const K = Math.sqrt(F[0] * F[0] + F[1] * F[1] + F[2] * F[2]);
          v = Math.max(v, K);
        }), console.log(`  max|u| = ${v.toExponential(4)}`);
      } catch (g) {
        console.warn("Placa Base failed:", g.message);
      }
      setTimeout(() => It(), 50), nt();
    }
    function Ts() {
      const t = le("colB") || 0.3, o = le("colH") || 0.3, n = le("colT") || 8e-3, l = le("colLen") || 1.5, s = le("Lx") || 0.45, d = le("Ly") || 0.45, a = le("tPlaca") || 0.025, i = le("dBolt") || 0.022, p = le("sx") || 0.32, r = le("sy") || 0.32, c = Math.round(le("nSubColV") || 6), m = Math.round(le("nSubColH") || 4), w = Math.round(le("nSubPlaca") || 10), E = le("E") || 2e8, y = le("nu") || 0.3, f = E / (2 * (1 + y)), h = le("P") || -300, T = s / 2, k = d / 2, $ = i / 2, C = t / 2, B = o / 2, x = [], u = [], I = w, A = s / I, R = d / I, j = (de, ee) => ee * (I + 1) + de;
      for (let de = 0; de <= I; de++) for (let ee = 0; ee <= I; ee++) x.push([
        ee * A,
        de * R,
        0
      ]);
      const g = [
        [
          T - p / 2,
          k - r / 2
        ],
        [
          T + p / 2,
          k - r / 2
        ],
        [
          T + p / 2,
          k + r / 2
        ],
        [
          T - p / 2,
          k + r / 2
        ]
      ], S = (de, ee) => {
        for (const [ue, Ee] of g) if ((de - ue) * (de - ue) + (ee - Ee) * (ee - Ee) < $ * $) return true;
        return false;
      }, v = u.length;
      for (let de = 0; de < I; de++) for (let ee = 0; ee < I; ee++) {
        const ue = (ee + 0.5) * A, Ee = (de + 0.5) * R;
        S(ue, Ee) || u.push([
          j(ee, de),
          j(ee + 1, de),
          j(ee + 1, de + 1),
          j(ee, de + 1)
        ]);
      }
      const F = u.length - v, K = c, U = m, ae = [
        [
          T - C,
          k - B
        ],
        [
          T + C,
          k - B
        ],
        [
          T + C,
          k + B
        ],
        [
          T - C,
          k + B
        ]
      ], Q = u.length, X = [
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
      ], ie = (de, ee) => {
        for (let ue = 0; ue < (I + 1) * (I + 1); ue++) if (Math.abs(x[ue][0] - de) < A * 0.3 && Math.abs(x[ue][1] - ee) < R * 0.3 && Math.abs(x[ue][2]) < 1e-6) return ue;
        return -1;
      };
      for (const [de, ee] of X) {
        const [ue, Ee] = ae[de], [oe, Se] = ae[ee], He = [];
        for (let at = 0; at <= K; at++) {
          const rt = [], wt = at / K * l;
          for (let Tt = 0; Tt <= U; Tt++) {
            const Et = Tt / U, Ot = ue + Et * (oe - ue), vo = Ee + Et * (Se - Ee);
            if (at === 0) {
              const Ut = ie(Ot, vo);
              if (Ut >= 0) {
                rt.push(Ut);
                continue;
              }
            }
            let to = -1;
            for (let Ut = 0; Ut < x.length; Ut++) if (Math.abs(x[Ut][0] - Ot) < 1e-6 && Math.abs(x[Ut][1] - vo) < 1e-6 && Math.abs(x[Ut][2] - wt) < 1e-6) {
              to = Ut;
              break;
            }
            to >= 0 ? rt.push(to) : (rt.push(x.length), x.push([
              Ot,
              vo,
              wt
            ]));
          }
          He.push(rt);
        }
        for (let at = 0; at < K; at++) for (let rt = 0; rt < U; rt++) u.push([
          He[at][rt],
          He[at][rt + 1],
          He[at + 1][rt + 1],
          He[at + 1][rt]
        ]);
      }
      const re = u.length - Q, Me = /* @__PURE__ */ new Map();
      for (let de = 0; de < (I + 1) * (I + 1); de++) {
        const ee = x[de][0], ue = x[de][1];
        for (const [Ee, oe] of g) {
          const Se = Math.sqrt((ee - Ee) * (ee - Ee) + (ue - oe) * (ue - oe));
          Se >= $ * 0.5 && Se <= $ * 2 && Me.set(de, [
            true,
            true,
            true,
            true,
            true,
            true
          ]);
        }
      }
      const Te = /* @__PURE__ */ new Map(), N = [];
      for (let de = 0; de < x.length; de++) Math.abs(x[de][2] - l) < 1e-6 && N.push(de);
      const ce = h / Math.max(N.length, 1);
      for (const de of N) Te.set(de, [
        0,
        0,
        ce,
        0,
        0,
        0
      ]);
      const te = {
        elasticities: /* @__PURE__ */ new Map(),
        poissonsRatios: /* @__PURE__ */ new Map(),
        thicknesses: /* @__PURE__ */ new Map(),
        shearModuli: /* @__PURE__ */ new Map()
      };
      for (let de = v; de < v + F; de++) te.elasticities.set(de, E), te.poissonsRatios.set(de, y), te.thicknesses.set(de, a), te.shearModuli.set(de, f);
      for (let de = Q; de < Q + re; de++) te.elasticities.set(de, E), te.poissonsRatios.set(de, y), te.thicknesses.set(de, n), te.shearModuli.set(de, f);
      console.log(`Col+Placa 3D: col ${t * 1e3}x${o * 1e3}x${n * 1e3}mm, h=${l}m`), console.log(`  Placa ${s * 1e3}x${d * 1e3}mm, t=${a * 1e3}mm, 4 pernos d=${i * 1e3}mm`), console.log(`  ${F} Q4 placa + ${re} Q4 columna = ${u.length} total`), console.log(`  ${x.length} nodos, P=${h} kN`);
      try {
        const de = Pt(x, u, {
          supports: Me,
          loads: Te
        }, te), ee = yo(x, u, te, de);
        e.nodes.val = x, e.elements.val = u, de && e.deformOutputs && (e.deformOutputs.val = de), e.nodeInputs && (e.nodeInputs.val = {
          supports: Me,
          loads: Te
        }), e.elementInputs && (e.elementInputs.val = te), ee && e.analyzeOutputs && (e.analyzeOutputs.val = ee);
        let ue = 0;
        (de == null ? void 0 : de.deformations) && de.deformations.forEach((Ee) => {
          const oe = Math.sqrt(Ee[0] * Ee[0] + Ee[1] * Ee[1] + Ee[2] * Ee[2]);
          ue = Math.max(ue, oe);
        }), console.log(`  max|u| = ${ue.toExponential(4)}`);
      } catch (de) {
        console.warn("Col+Placa failed:", de.message), e.nodes.val = x, e.elements.val = u, e.nodeInputs && (e.nodeInputs.val = {
          supports: Me,
          loads: Te
        });
      }
      setTimeout(() => It(), 50), nt();
    }
    function zs() {
      const t = le("H") || 6, o = le("angle") || 45, n = le("bTop") || 3, l = le("bBot") || 3, s = le("meshSize") || 2, d = le("E") || 5e4, a = le("nu") || 0.3, i = le("gamma") || 18, p = le("c") || 15, r = le("phi") || 30, c = le("qs") || 0, m = t / Math.tan(o * Math.PI / 180), w = l + m + n, E = t, y = [
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
      ], { nodes: f, elements: h } = $o({
        points: y,
        polygon: [
          0,
          1,
          2,
          3,
          4,
          5
        ],
        maxMeshSize: s
      }), T = f, k = [], $ = /* @__PURE__ */ new Map();
      for (let B = 0; B < T.length; B++) {
        const x = T[B][0], u = T[B][1];
        Math.abs(u + E) < 1e-6 ? (k.push({
          node: B,
          fixX: true,
          fixY: true
        }), $.set(B, [
          true,
          true,
          true,
          true,
          true,
          true
        ])) : (Math.abs(x) < 1e-6 || Math.abs(x - w) < 1e-6) && (k.push({
          node: B,
          fixX: true,
          fixY: false
        }), $.set(B, [
          true,
          false,
          true,
          true,
          true,
          true
        ]));
      }
      const C = t - s * 0.3;
      try {
        const B = T.map((S) => [
          S[0],
          S[1]
        ]), x = h.map((S) => [
          S[0],
          S[1],
          S[2]
        ]), u = Ka({
          nodes: B,
          elements: x,
          E: d,
          nu: a,
          gamma: i,
          c: p,
          phi: r,
          thickness: 1,
          supports: k,
          surcharge: c,
          surfaceYThreshold: C
        }), I = T.map((S) => [
          S[0],
          0,
          S[1]
        ]);
        e.nodes.val = I, e.elements.val = h;
        const A = /* @__PURE__ */ new Map();
        for (let S = 0; S < u.displacements.length; S++) {
          const [v, F] = u.displacements[S];
          A.set(S, [
            v,
            0,
            F,
            0,
            0,
            0
          ]);
        }
        e.deformOutputs && (e.deformOutputs.val = {
          deformations: A
        }), e.nodeInputs && (e.nodeInputs.val = {
          supports: $
        }), e.elementInputs && (e.elementInputs.val = {});
        const R = /* @__PURE__ */ new Map();
        for (let S = 0; S < u.plasticStrain.length; S++) {
          const v = u.plasticStrain[S];
          R.set(S, [
            v,
            v,
            v
          ]);
        }
        e.analyzeOutputs && (e.analyzeOutputs.val = {
          membraneXX: R
        });
        let j = 0;
        for (const [S, v] of u.displacements) {
          const F = Math.sqrt(S * S + v * v);
          j = Math.max(j, F);
        }
        let g = 0;
        for (const S of u.plasticStrain) g = Math.max(g, S);
        console.log(`Talud SRM: ${T.length} nodos, ${h.length} triangulos`), console.log(`  H=${t}, angulo=${o}\xB0, c=${p} kPa, \u03C6=${r}\xB0, \u03B3=${i}`), console.log("  \u2550\u2550\u2550 Strength Reduction Method (Mohr-Coulomb) \u2550\u2550\u2550"), console.log(`  FOS = ${u.fos.toFixed(3)}`), console.log(`  max|u| = ${j.toExponential(4)}`), console.log(`  max \u03B5_pl = ${g.toExponential(4)}`), u.fos < 1 ? console.warn("  \u26A0 TALUD INESTABLE (FOS < 1.0)") : u.fos < 1.5 && console.warn("  \u26A0 FOS < 1.5 \u2014 revisar estabilidad");
      } catch (B) {
        console.warn("Talud SRM failed:", B.message);
      }
      setTimeout(() => It(), 50), nt();
    }
    let mo = null, _t = null, bo = null;
    function Ma() {
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
    function At(t) {
      const o = Ko.find((n) => n.id === P);
      return t / o.toM;
    }
    function Lt(t) {
      const o = Ko.find((n) => n.id === P);
      return t * o.toM;
    }
    function Lo(t) {
      const o = is.find((l) => l.id === V.forceId), n = Ko.find((l) => l.id === V.lengthId);
      return t / (o.toKN / (n.toM * n.toM));
    }
    function Pn(t) {
      const o = is.find((l) => l.id === V.forceId), n = Ko.find((l) => l.id === V.lengthId);
      return t * (o.toKN / (n.toM * n.toM));
    }
    function Rn() {
      return V.label;
    }
    function wa() {
      switch (Ko.find((o) => o.id === P).id) {
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
    function Ea() {
      const t = Lo(20594), o = Lo(58840), n = Math.max(1, Math.round((o - t) / 40));
      return [
        Math.round(t),
        Math.round(o),
        n
      ];
    }
    function As(t, o, n, l, s) {
      const d = qe.steelVigaType, a = d === 0 ? yn() : $n();
      if (qe.vigaMat === 0) {
        for (let i = 0; i < o.length; i++) {
          const p = o[i], r = `b${n}${i}`, c = `h${n}${i}`, m = {};
          m[r] = +At(p.b).toFixed(2), m[c] = +At(p.h).toFixed(2), t.addBinding(m, r, {
            min: l[0],
            max: l[1],
            step: l[2],
            label: `b sv${n}${i + 1}`
          }), t.addBinding(m, c, {
            min: l[0],
            max: l[1],
            step: l[2],
            label: `h sv${n}${i + 1}`
          });
        }
        t.on("change", (i) => {
          var _a2;
          const p = (_a2 = i.target) == null ? void 0 : _a2.key, r = p == null ? void 0 : p.match(new RegExp(`^b${n}(\\d+)$`)), c = p == null ? void 0 : p.match(new RegExp(`^h${n}(\\d+)$`));
          r && (o[parseInt(r[1])].b = Lt(i.value), Oe()), c && (o[parseInt(c[1])].h = Lt(i.value), Oe());
        });
      } else if (d <= 1) {
        for (let i = 0; i < o.length; i++) {
          const p = {};
          p[`p${n}${i}`] = o[i].profileIdx ?? 0, t.addBinding(p, `p${n}${i}`, {
            label: `sv${n}${i + 1}`,
            options: a
          });
        }
        t.on("change", (i) => {
          var _a2, _b;
          const r = (_b = (_a2 = i.target) == null ? void 0 : _a2.key) == null ? void 0 : _b.match(new RegExp(`^p${n}(\\d+)$`));
          r && (o[parseInt(r[1])].profileIdx = i.value, Oe());
        });
      } else if (d === 2) {
        for (let i = 0; i < o.length; i++) {
          const p = o[i], r = {}, c = `${n}${i}`;
          r[`bf${c}`] = +At(p.bf ?? 0.2).toFixed(3), r[`h${c}`] = +At(p.hf ?? 0.4).toFixed(3), r[`tf${c}`] = +At(p.tf ?? 0.015).toFixed(3), r[`tw${c}`] = +At(p.tw ?? 0.01).toFixed(3), t.addBinding(r, `bf${c}`, {
            min: l[0],
            max: l[1],
            step: l[2],
            label: `bf sv${n}${i + 1}`
          }), t.addBinding(r, `h${c}`, {
            min: l[0],
            max: l[1],
            step: l[2],
            label: `h sv${n}${i + 1}`
          }), t.addBinding(r, `tf${c}`, {
            min: s[0],
            max: s[1],
            step: s[2],
            label: `tf sv${n}${i + 1}`
          }), t.addBinding(r, `tw${c}`, {
            min: s[0],
            max: s[1],
            step: s[2],
            label: `tw sv${n}${i + 1}`
          });
        }
        t.on("change", (i) => {
          var _a2;
          const p = (_a2 = i.target) == null ? void 0 : _a2.key;
          for (let r = 0; r < o.length; r++) {
            const c = `${n}${r}`;
            p === `bf${c}` && (o[r].bf = Lt(i.value), Oe()), p === `h${c}` && (o[r].hf = Lt(i.value), Oe()), p === `tf${c}` && (o[r].tf = Lt(i.value), Oe()), p === `tw${c}` && (o[r].tw = Lt(i.value), Oe());
          }
        });
      } else {
        for (let i = 0; i < o.length; i++) {
          const p = o[i], r = {}, c = `${n}${i}`;
          r[`bc${c}`] = +At(p.bc ?? 0.2).toFixed(3), r[`hc${c}`] = +At(p.hc ?? 0.3).toFixed(3), r[`t${c}`] = +At(p.t ?? 8e-3).toFixed(3), t.addBinding(r, `bc${c}`, {
            min: l[0],
            max: l[1],
            step: l[2],
            label: `b sv${n}${i + 1}`
          }), t.addBinding(r, `hc${c}`, {
            min: l[0],
            max: l[1],
            step: l[2],
            label: `h sv${n}${i + 1}`
          }), t.addBinding(r, `t${c}`, {
            min: s[0],
            max: s[1],
            step: s[2],
            label: `t sv${n}${i + 1}`
          });
        }
        t.on("change", (i) => {
          var _a2;
          const p = (_a2 = i.target) == null ? void 0 : _a2.key;
          for (let r = 0; r < o.length; r++) {
            const c = `${n}${r}`;
            p === `bc${c}` && (o[r].bc = Lt(i.value), Oe()), p === `hc${c}` && (o[r].hc = Lt(i.value), Oe()), p === `t${c}` && (o[r].t = Lt(i.value), Oe());
          }
        });
      }
    }
    function Bo() {
      var _a2;
      if (_t) {
        try {
          _t.dispose();
        } catch {
        }
        _t = null;
      }
      const t = document.getElementById("sections");
      if (t && (t.innerHTML = ""), z !== "edificio" && z !== "frame") {
        t && (t.style.display = "none");
        return;
      }
      const o = Ma();
      if (!o) return;
      o.style.display = "";
      const n = M, l = Math.round(((_a2 = W.nPisos) == null ? void 0 : _a2.val) ?? 3), s = wa(), d = Ea(), a = pe.length || 1, i = se.length || 1;
      for (; qe.perFloor.length < l; ) {
        const x = qe.perFloor.length > 0 ? JSON.parse(JSON.stringify(qe.perFloor[qe.perFloor.length - 1])) : uo(a, i);
        qe.perFloor.push(x);
      }
      qe.perFloor.length > l && (qe.perFloor.length = l);
      for (const x of qe.perFloor) {
        for (; x.vigasX.length < a; ) x.vigasX.push(x.vigasX.length > 0 ? {
          ...x.vigasX[x.vigasX.length - 1]
        } : ht());
        for (x.vigasX.length > a && (x.vigasX.length = a); x.vigasY.length < i; ) x.vigasY.push(x.vigasY.length > 0 ? {
          ...x.vigasY[x.vigasY.length - 1]
        } : ht());
        x.vigasY.length > i && (x.vigasY.length = i);
      }
      _t = new rn({
        title: `Sections (${n.label})`,
        container: o
      });
      const p = {
        colMat: qe.colMat
      };
      if (_t.addBinding(p, "colMat", {
        label: "Col Material",
        options: {
          Hormigon: 0,
          Acero: 1,
          CFT: 2
        }
      }).on("change", (x) => {
        qe.colMat = x.value, Bo(), Oe();
      }), qe.colMat === 0) {
        const x = {
          forma: qe.colShape
        };
        _t.addBinding(x, "forma", {
          label: "Col forma",
          options: {
            Rectangular: 0,
            Circular: 1
          }
        }).on("change", (I) => {
          qe.colShape = I.value, Bo(), Oe();
        });
        const u = {
          fc: +Lo(qe.fc).toFixed(1)
        };
        _t.addBinding(u, "fc", {
          min: d[0],
          max: d[1],
          step: d[2],
          label: `f'c col (${Rn()})`
        }), _t.on("change", (I) => {
          var _a3;
          ((_a3 = I.target) == null ? void 0 : _a3.key) === "fc" && (qe.fc = Pn(I.value), Oe());
        });
      } else if (qe.colMat === 1) {
        const x = {
          colType: qe.steelColType
        };
        _t.addBinding(x, "colType", {
          label: "Col tipo",
          options: {
            "W profile": 0,
            "HSS profile": 1,
            "I param": 2,
            Tubular: 3
          }
        }).on("change", (u) => {
          qe.steelColType = u.value, Bo(), Oe();
        });
      }
      _t.addBlade({
        view: "separator"
      });
      const r = {
        vigaMat: qe.vigaMat
      };
      if (_t.addBinding(r, "vigaMat", {
        label: "Viga Material",
        options: {
          Hormigon: 0,
          Acero: 1
        }
      }).on("change", (x) => {
        qe.vigaMat = x.value, Bo(), Oe();
      }), qe.vigaMat === 1) {
        const x = {
          vigaType: qe.steelVigaType
        };
        _t.addBinding(x, "vigaType", {
          label: "Viga tipo",
          options: {
            "W profile": 0,
            "HSS profile": 1,
            "I param": 2,
            Tubular: 3
          }
        }).on("change", (u) => {
          qe.steelVigaType = u.value, Bo(), Oe();
        });
      }
      const c = qe.steelColType === 0 ? yn() : $n();
      qe.steelVigaType === 0 ? yn() : $n();
      const m = P === "m" ? [
        5e-3,
        0.1,
        1e-3
      ] : P === "cm" ? [
        0.5,
        10,
        0.1
      ] : P === "mm" ? [
        5,
        100,
        1
      ] : P === "in" ? [
        0.2,
        4,
        0.05
      ] : [
        0.01,
        0.5,
        5e-3
      ];
      for (let x = 0; x < l; x++) {
        const u = qe.perFloor[x], I = _t.addFolder({
          title: `Piso ${x + 1}`,
          expanded: x < 2
        });
        if (qe.colMat === 0) if (qe.colShape === 1) {
          const A = {
            dCol: +At(u.dCol).toFixed(2)
          };
          I.addBinding(A, "dCol", {
            min: s[0],
            max: s[1],
            step: s[2],
            label: "d col"
          }), I.on("change", (R) => {
            var _a3;
            ((_a3 = R.target) == null ? void 0 : _a3.key) === "dCol" && (u.dCol = Lt(R.value), Oe());
          });
        } else {
          const A = {
            bCol: +At(u.bCol).toFixed(2),
            hCol: +At(u.hCol).toFixed(2)
          };
          I.addBinding(A, "bCol", {
            min: s[0],
            max: s[1],
            step: s[2],
            label: "b col"
          }), I.addBinding(A, "hCol", {
            min: s[0],
            max: s[1],
            step: s[2],
            label: "h col"
          }), I.on("change", (R) => {
            var _a3, _b;
            ((_a3 = R.target) == null ? void 0 : _a3.key) === "bCol" && (u.bCol = Lt(R.value), Oe()), ((_b = R.target) == null ? void 0 : _b.key) === "hCol" && (u.hCol = Lt(R.value), Oe());
          });
        }
        else if (qe.colMat === 1) if (qe.steelColType <= 1) {
          const A = {
            col: u.colProfileIdx
          };
          I.addBinding(A, "col", {
            label: "Columna",
            options: c
          }).on("change", (R) => {
            u.colProfileIdx = R.value, Oe();
          });
        } else if (qe.steelColType === 2) {
          const A = {
            bf: +At(u.colBf ?? 0.3).toFixed(3),
            h: +At(u.colHf ?? 0.3).toFixed(3),
            tf: +At(u.colTf ?? 0.02).toFixed(3),
            tw: +At(u.colTw ?? 0.012).toFixed(3)
          };
          I.addBinding(A, "bf", {
            min: s[0],
            max: s[1],
            step: s[2],
            label: "Col bf"
          }), I.addBinding(A, "h", {
            min: s[0],
            max: s[1],
            step: s[2],
            label: "Col h"
          }), I.addBinding(A, "tf", {
            min: m[0],
            max: m[1],
            step: m[2],
            label: "Col tf"
          }), I.addBinding(A, "tw", {
            min: m[0],
            max: m[1],
            step: m[2],
            label: "Col tw"
          }), I.on("change", (R) => {
            var _a3, _b, _c, _d;
            ((_a3 = R.target) == null ? void 0 : _a3.key) === "bf" && (u.colBf = Lt(R.value), Oe()), ((_b = R.target) == null ? void 0 : _b.key) === "h" && (u.colHf = Lt(R.value), Oe()), ((_c = R.target) == null ? void 0 : _c.key) === "tf" && (u.colTf = Lt(R.value), Oe()), ((_d = R.target) == null ? void 0 : _d.key) === "tw" && (u.colTw = Lt(R.value), Oe());
          });
        } else {
          const A = {
            bc: +At(u.colBc ?? 0.3).toFixed(3),
            hc: +At(u.colHc ?? 0.3).toFixed(3),
            t: +At(u.colT ?? 0.01).toFixed(3)
          };
          I.addBinding(A, "bc", {
            min: s[0],
            max: s[1],
            step: s[2],
            label: "Col b"
          }), I.addBinding(A, "hc", {
            min: s[0],
            max: s[1],
            step: s[2],
            label: "Col h"
          }), I.addBinding(A, "t", {
            min: m[0],
            max: m[1],
            step: m[2],
            label: "Col t"
          }), I.on("change", (R) => {
            var _a3, _b, _c;
            ((_a3 = R.target) == null ? void 0 : _a3.key) === "bc" && (u.colBc = Lt(R.value), Oe()), ((_b = R.target) == null ? void 0 : _b.key) === "hc" && (u.colHc = Lt(R.value), Oe()), ((_c = R.target) == null ? void 0 : _c.key) === "t" && (u.colT = Lt(R.value), Oe());
          });
        }
        else {
          const A = {
            bc: +At(u.colBc ?? 0.3).toFixed(3),
            hc: +At(u.colHc ?? 0.3).toFixed(3),
            t: +At(u.colT ?? 0.01).toFixed(3),
            Es: +Lo(u.colEs ?? 2e8).toFixed(0),
            nuS: u.colNuS ?? 0.3,
            fc: +Lo(u.colFc ?? 28e3).toFixed(1),
            nuC: u.colNuC ?? 0.2
          };
          I.addBinding(A, "bc", {
            min: s[0],
            max: s[1],
            step: s[2],
            label: "Col b"
          }), I.addBinding(A, "hc", {
            min: s[0],
            max: s[1],
            step: s[2],
            label: "Col h"
          }), I.addBinding(A, "t", {
            min: m[0],
            max: m[1],
            step: m[2],
            label: "Col t"
          }), I.addBlade({
            view: "separator"
          });
          const R = +Lo(1e8).toFixed(0), j = +Lo(3e8).toFixed(0), g = Math.max(1, Math.round((j - R) / 200));
          I.addBinding(A, "Es", {
            min: R,
            max: j,
            step: g,
            label: `Es (${Rn()})`
          }), I.addBinding(A, "nuS", {
            min: 0.15,
            max: 0.45,
            step: 0.01,
            label: "\u03BDs"
          }), I.addBinding(A, "fc", {
            min: d[0],
            max: d[1],
            step: d[2],
            label: `f'c (${Rn()})`
          }), I.addBinding(A, "nuC", {
            min: 0.1,
            max: 0.35,
            step: 0.01,
            label: "\u03BDc"
          }), I.on("change", (S) => {
            var _a3, _b, _c, _d, _e2, _f, _g;
            ((_a3 = S.target) == null ? void 0 : _a3.key) === "bc" && (u.colBc = Lt(S.value), Oe()), ((_b = S.target) == null ? void 0 : _b.key) === "hc" && (u.colHc = Lt(S.value), Oe()), ((_c = S.target) == null ? void 0 : _c.key) === "t" && (u.colT = Lt(S.value), Oe()), ((_d = S.target) == null ? void 0 : _d.key) === "Es" && (u.colEs = Pn(S.value), Oe()), ((_e2 = S.target) == null ? void 0 : _e2.key) === "nuS" && (u.colNuS = S.value, Oe()), ((_f = S.target) == null ? void 0 : _f.key) === "fc" && (u.colFc = Pn(S.value), Oe()), ((_g = S.target) == null ? void 0 : _g.key) === "nuC" && (u.colNuC = S.value, Oe());
          });
        }
        if (u.vigasX.length > 0) {
          const A = I.addFolder({
            title: `Vigas X (${u.vigasX.length})`,
            expanded: false
          });
          As(A, u.vigasX, "x", s, m);
        }
        if (u.vigasY.length > 0) {
          const A = I.addFolder({
            title: `Vigas Y (${u.vigasY.length})`,
            expanded: false
          });
          As(A, u.vigasY, "y", s, m);
        }
      }
      _t.addBlade({
        view: "separator"
      });
      const w = _t.addFolder({
        title: "Vigas Secundarias",
        expanded: false
      }), E = {
        activar: Ie,
        direccion: Ue === "x" ? 0 : 1,
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
      }), w.on("change", (x) => {
        var _a3, _b, _c;
        ((_a3 = x.target) == null ? void 0 : _a3.key) === "activar" && (Ie = x.value, Oe()), ((_b = x.target) == null ? void 0 : _b.key) === "direccion" && (Ue = x.value === 0 ? "x" : "y", Oe()), ((_c = x.target) == null ? void 0 : _c.key) === "cantidad" && (Ae = Math.round(x.value), Oe());
      }), _t.addBlade({
        view: "separator"
      });
      const y = _t.addFolder({
        title: "Losas de Piso",
        expanded: true
      }), f = {
        activar: Ke,
        espesor: +At(pt).toFixed(3),
        subdivX: mt,
        subdivY: zt
      };
      y.addBinding(f, "activar", {
        label: "Activar losas"
      }), y.addBinding(f, "espesor", {
        min: s[0],
        max: s[1] * 0.3,
        step: s[2],
        label: `Espesor (${n.length})`
      }), y.addBinding(f, "subdivX", {
        min: 1,
        max: 6,
        step: 1,
        label: "Subdiv. X"
      }), y.addBinding(f, "subdivY", {
        min: 1,
        max: 6,
        step: 1,
        label: "Subdiv. Y"
      }), y.on("change", (x) => {
        var _a3, _b, _c, _d;
        ((_a3 = x.target) == null ? void 0 : _a3.key) === "activar" && (Ke = x.value, Oe()), ((_b = x.target) == null ? void 0 : _b.key) === "espesor" && (pt = Lt(x.value), Oe()), ((_c = x.target) == null ? void 0 : _c.key) === "subdivX" && (mt = Math.round(x.value), Oe()), ((_d = x.target) == null ? void 0 : _d.key) === "subdivY" && (zt = Math.round(x.value), Oe());
      }), _t.addBlade({
        view: "separator"
      });
      const h = _t.addFolder({
        title: "Muros de Corte",
        expanded: true
      }), T = {
        espesor: +At(je).toFixed(3),
        subdivH: We,
        subdivW: be
      };
      h.addBinding(T, "espesor", {
        min: s[0],
        max: s[1],
        step: s[2],
        label: `Espesor (${n.length})`
      }), h.addBinding(T, "subdivH", {
        min: 1,
        max: 6,
        step: 1,
        label: "Subdiv. V"
      }), h.addBinding(T, "subdivW", {
        min: 1,
        max: 6,
        step: 1,
        label: "Subdiv. H"
      }), h.on("change", (x) => {
        var _a3, _b, _c;
        ((_a3 = x.target) == null ? void 0 : _a3.key) === "espesor" && (je = Lt(x.value), Oe()), ((_b = x.target) == null ? void 0 : _b.key) === "subdivH" && (We = Math.round(x.value), Oe()), ((_c = x.target) == null ? void 0 : _c.key) === "subdivW" && (be = Math.round(x.value), Oe());
      });
      const k = pe.length || 1, $ = se.length || 1, C = k + 1, B = $ + 1;
      if (k > 0) {
        const x = h.addFolder({
          title: `Muros dir X (${k} vanos)`,
          expanded: false
        });
        for (let u = 0; u < k; u++) for (let I = 0; I < B; I++) {
          const A = `wx_${u}_${I}`, R = he.some((S) => S.dir === "x" && S.bay === u && S.axisIdx === I), j = {};
          j[A] = R;
          const g = `Vano X${u + 1} / Eje Y${String.fromCharCode(65 + I)}`;
          x.addBinding(j, A, {
            label: g
          }).on("change", (S) => {
            S.value ? he.push({
              dir: "x",
              bay: u,
              axisIdx: I,
              floors: [
                -1
              ]
            }) : he = he.filter((v) => !(v.dir === "x" && v.bay === u && v.axisIdx === I)), Oe();
          });
        }
      }
      if ($ > 0) {
        const x = h.addFolder({
          title: `Muros dir Y (${$} vanos)`,
          expanded: false
        });
        for (let u = 0; u < $; u++) for (let I = 0; I < C; I++) {
          const A = `wy_${u}_${I}`, R = he.some((S) => S.dir === "y" && S.bay === u && S.axisIdx === I), j = {};
          j[A] = R;
          const g = `Vano Y${u + 1} / Eje X${I + 1}`;
          x.addBinding(j, A, {
            label: g
          }).on("change", (S) => {
            S.value ? he.push({
              dir: "y",
              bay: u,
              axisIdx: I,
              floors: [
                -1
              ]
            }) : he = he.filter((v) => !(v.dir === "y" && v.bay === u && v.axisIdx === I)), Oe();
          });
        }
      }
      if (he.length > 0) {
        h.addBlade({
          view: "separator"
        });
        const x = {
          muros: `${he.length} ubicaciones`
        };
        h.addBinding(x, "muros", {
          label: "Total",
          readonly: true
        });
      }
    }
    function po() {
      const t = document.getElementById("parameters");
      if (!t) return;
      if (me || (me = t.innerHTML), ve) {
        try {
          ve.dispose();
        } catch {
        }
        ve = null;
      }
      if (mo) {
        try {
          mo.dispose();
        } catch {
        }
        mo = null;
      }
      t.innerHTML = "";
      const o = z.charAt(0).toUpperCase() + z.slice(1);
      ve = new rn({
        title: `Parameters \u2014 ${o}`,
        container: t
      });
      const n = bs()[z];
      if (n) {
        const s = {};
        for (const p of n) {
          const r = W[p.key], c = r.min === 0 && r.max === 1 && r.step === 1;
          s[p.key] = c ? r.val >= 0.5 : r.val;
        }
        const d = n.filter((p) => {
          const r = W[p.key];
          return r.min === 0 && r.max === 1 && r.step === 1;
        }), a = n.filter((p) => {
          const r = W[p.key];
          return !(r.min === 0 && r.max === 1 && r.step === 1);
        });
        for (const p of a) {
          const r = W[p.key];
          ve.addBinding(s, p.key, {
            min: r.min,
            max: r.max,
            step: r.step,
            label: r.label
          });
        }
        if (d.length > 0) {
          const p = ve.addFolder({
            title: tr("Apoyos DOFs"),
            expanded: false
          });
          for (const r of d) p.addBinding(s, r.key, {
            label: W[r.key].label
          });
        }
        const i = ve.addFolder({
          title: "Rangos",
          expanded: false
        });
        for (const p of a) {
          const r = {
            min: W[p.key].min,
            max: W[p.key].max
          };
          i.addBinding(r, "min", {
            label: `${p.key} min`,
            step: p.step
          }), i.addBinding(r, "max", {
            label: `${p.key} max`,
            step: p.step
          }), i.on("change", () => {
            W[p.key] && (W[p.key].min = r.min, W[p.key].max = r.max, W[p.key].val < r.min && (W[p.key].val = r.min), W[p.key].val > r.max && (W[p.key].val = r.max)), po(), Oe();
          });
        }
        ve.on("change", (p) => {
          var _a2, _b;
          const r = (_a2 = p.target) == null ? void 0 : _a2.key;
          if (r && W[r]) {
            if (W[r].val = typeof p.value == "boolean" ? p.value ? 1 : 0 : p.value, z === "edificio" && (r === "nVanosX" || r === "nVanosY" || r === "nPisos")) {
              if (r === "nVanosX" || r === "nVanosY") {
                const c = Math.round(W.nVanosX.val), m = Math.round(W.nVanosY.val);
                for (; pe.length < c; ) pe.push(pe[pe.length - 1] ?? M.defaultSpan);
                for (pe.length > c && (pe.length = c); se.length < m; ) se.push(se[se.length - 1] ?? M.defaultSpan * 0.8);
                se.length > m && (se.length = m);
              }
              if (r === "nPisos" || r === "hPiso") {
                const c = Math.round(W.nPisos.val), m = ((_b = W.hPiso) == null ? void 0 : _b.val) ?? 3;
                for (; q.length < c; ) q.push(q[q.length - 1] ?? m);
                q.length > c && (q.length = c);
              }
              po();
            }
            Oe();
          }
        });
      }
      if (z === "edificio") {
        if (bo) {
          try {
            bo.dispose();
          } catch {
          }
          bo = null;
        }
        const s = document.getElementById("luces-panel");
        if (s) {
          let d = function() {
            var _a2, _b, _c, _d;
            const p = "ABCDEFGHIJKLMNOPQRSTUVWXYZ", r = ((_a2 = W.Lvix) == null ? void 0 : _a2.val) || 0, c = ((_b = W.Lvdx) == null ? void 0 : _b.val) || 0, m = ((_c = W.Lviy) == null ? void 0 : _c.val) || 0, w = ((_d = W.Lvdy) == null ? void 0 : _d.val) || 0;
            let E = "X: ";
            r > 0 && (E += `\u251C${r.toFixed(1)}\u2524`);
            for (let h = 0; h < pe.length; h++) E += `[${p[h + (r > 0 ? 1 : 0)]}]\u2500\u2500${pe[h].toFixed(1)}\u2500\u2500`;
            E += `[${p[pe.length + (r > 0 ? 1 : 0)]}]`, c > 0 && (E += `\u251C${c.toFixed(1)}\u2524`);
            let y = "Y: ";
            m > 0 && (y += `\u251C${m.toFixed(1)}\u2524`);
            for (let h = 0; h < se.length; h++) y += `[${h + 1 + (m > 0 ? 1 : 0)}]\u2500\u2500${se[h].toFixed(1)}\u2500\u2500`;
            y += `[${se.length + 1 + (m > 0 ? 1 : 0)}]`, w > 0 && (y += `\u251C${w.toFixed(1)}\u2524`);
            let f = "Z: ";
            for (let h = 0; h < q.length; h++) f += `P${h + 1}=${q[h].toFixed(1)} `;
            i.textContent = E + `
` + y + `
` + f;
          };
          s.innerHTML = "";
          const a = M;
          try {
            bo = new rn({
              title: `Luces (${a.length})`,
              container: s
            });
            const p = bo.addFolder({
              title: "Luces X",
              expanded: true
            });
            for (let c = 0; c < pe.length; c++) {
              const m = c, w = {
                v: pe[c]
              };
              p.addBinding(w, "v", {
                min: a.spanRange[0],
                max: a.spanRange[1],
                step: a.spanRange[2],
                label: `svx${c + 1}`
              }).on("change", (E) => {
                pe[m] = E.value, Oe();
              });
            }
            const r = bo.addFolder({
              title: "Luces Y",
              expanded: true
            });
            for (let c = 0; c < se.length; c++) {
              const m = c, w = {
                v: se[c]
              };
              r.addBinding(w, "v", {
                min: a.spanRange[0],
                max: a.spanRange[1],
                step: a.spanRange[2],
                label: `svy${c + 1}`
              }).on("change", (E) => {
                se[m] = E.value, Oe();
              });
            }
            if (q.length > 0) {
              const c = bo.addFolder({
                title: "Alturas por Piso",
                expanded: true
              });
              for (let m = 0; m < q.length; m++) {
                const w = m, E = {
                  v: q[m]
                };
                c.addBinding(E, "v", {
                  min: a.heightRange[0],
                  max: a.heightRange[1],
                  step: a.heightRange[2],
                  label: `Piso ${m + 1}`
                }).on("change", (y) => {
                  q[w] = y.value, Oe();
                });
              }
            }
          } catch (p) {
            console.error("Luces Tweakpane error:", p);
          }
          const i = document.createElement("div");
          i.style.cssText = "font-family:monospace;font-size:10px;color:#aaa;padding:6px;background:#1a1a2e;border-radius:4px;margin-top:6px;line-height:1.6;white-space:pre;overflow-x:auto;", d(), s.appendChild(i);
        }
      }
      if (Bo(), ve) {
        ve.addBlade({
          view: "separator"
        });
        const s = vn()[z];
        if (s && s.length > 0) {
          const d = {};
          s.forEach((i, p) => {
            d[i.label] = p;
          });
          const a = {
            apoyo: St
          };
          ve.addBinding(a, "apoyo", {
            label: "Apoyo",
            options: d
          }).on("change", (i) => {
            St = i.value, Oe();
          });
        }
        if (z === "placa-3q" || z === "placa-q4") {
          const d = {
            teoria: Ce
          };
          ve.addBinding(d, "teoria", {
            label: "Teor\xEDa",
            options: {
              Membrana: 1,
              "Kirchhoff (delgada)": 2,
              "Mindlin (gruesa)": 3
            }
          }).on("change", (a) => {
            Ce = a.value, Oe();
          });
        }
      }
      const l = gs()[z];
      if (l && l.length > 0) {
        mo = new rn({
          title: `Cargas Est\xE1ticas \u2014 ${o}`,
          container: t
        });
        const s = {};
        for (const a of l) s[a.key] = gt[a.key].val;
        for (const a of l) mo.addBinding(s, a.key, {
          min: gt[a.key].min,
          max: gt[a.key].max,
          step: gt[a.key].step,
          label: gt[a.key].label
        });
        const d = mo.addFolder({
          title: "Rangos",
          expanded: false
        });
        for (const a of l) {
          const i = {
            min: gt[a.key].min,
            max: gt[a.key].max
          };
          d.addBinding(i, "min", {
            label: `${a.key} min`,
            step: a.step
          }), d.addBinding(i, "max", {
            label: `${a.key} max`,
            step: a.step
          }), d.on("change", () => {
            gt[a.key] && (gt[a.key].min = i.min, gt[a.key].max = i.max, gt[a.key].val < i.min && (gt[a.key].val = i.min), gt[a.key].val > i.max && (gt[a.key].val = i.max)), po(), Oe();
          });
        }
        mo.on("change", (a) => {
          var _a2;
          const i = (_a2 = a.target) == null ? void 0 : _a2.key;
          if (i && gt[i]) {
            if (gt[i].val = a.value, e.nodeInputs) {
              const p = e.nodeInputs.val;
              p.supports && (e.nodeInputs.val = {
                supports: p.supports
              });
            }
            setTimeout(() => _n(), 30);
          }
        });
      }
      window.__cad = {
        setParam: (s, d) => {
          if (W[s]) W[s].val = d, Oe(), po();
          else if (gt[s]) {
            if (gt[s].val = d, e.nodeInputs) {
              const a = e.nodeInputs.val;
              a.supports && (e.nodeInputs.val = {
                supports: a.supports
              });
            }
            setTimeout(() => {
              _n(), po();
            }, 30);
          }
        },
        getParams: () => {
          const s = {};
          for (const d in W) s[d] = W[d].val;
          for (const d in gt) s[d] = gt[d].val;
          return s;
        },
        setGenerator: st,
        createCustomPanel: (s, d, a) => Sa(s, d, a),
        removeCustomPanel: (s) => {
          Ls(s);
        }
      };
    }
    const On = /* @__PURE__ */ new Map();
    function Sa(t, o, n) {
      var _a2;
      Ls(t);
      let l = document.querySelector("#cad3d-custom-panels");
      if (!l) {
        l = document.createElement("div"), l.id = "cad3d-custom-panels";
        const i = document.querySelector("#parameters");
        i ? (_a2 = i.parentElement) == null ? void 0 : _a2.insertBefore(l, i.nextSibling) : document.body.appendChild(l);
      }
      const s = document.createElement("div");
      s.className = "cad3d-custom-panel", s.style.marginBottom = "4px", l.appendChild(s);
      const d = new rn({
        title: t,
        container: s
      }), a = {};
      for (const [i, p] of Object.entries(o)) {
        const r = p.label || i;
        if (Array.isArray(p.value)) {
          a[i] = p.value;
          const c = {
            [i]: p.value.join(", ")
          };
          d.addBinding(c, i, {
            label: r
          }).on("change", (m) => {
            a[i] = m.value.split(",").map((w) => parseFloat(w.trim())).filter((w) => !isNaN(w)), n && n({
              ...a
            });
          });
        } else if (p.options) {
          a[i] = p.value;
          const c = {
            [i]: p.value
          }, m = {};
          for (const w of p.options) m[w] = w;
          d.addBinding(c, i, {
            label: r,
            options: m
          }).on("change", (w) => {
            a[i] = w.value, n && n({
              ...a
            });
          });
        } else if (typeof p.value == "boolean") {
          a[i] = p.value;
          const c = {
            [i]: p.value
          };
          d.addBinding(c, i, {
            label: r
          }).on("change", (m) => {
            a[i] = m.value, n && n({
              ...a
            });
          });
        } else if (typeof p.value == "string") {
          a[i] = p.value;
          const c = {
            [i]: p.value
          };
          d.addBinding(c, i, {
            label: r
          }).on("change", (m) => {
            a[i] = m.value, n && n({
              ...a
            });
          });
        } else {
          a[i] = p.value;
          const c = {
            [i]: p.value
          }, m = {
            label: r
          };
          p.min !== void 0 && (m.min = p.min), p.max !== void 0 && (m.max = p.max), p.step !== void 0 && (m.step = p.step), d.addBinding(c, i, m).on("change", (w) => {
            a[i] = w.value, n && n({
              ...a
            });
          });
        }
      }
      return n && d.addButton({
        title: "Aplicar"
      }).on("click", () => {
        n({
          ...a
        });
      }), On.set(t, {
        pane: d,
        values: a
      }), console.log(`Panel "${t}" created with ${Object.keys(o).length} params`), a;
    }
    function Ls(t) {
      const o = On.get(t);
      if (o) {
        try {
          o.pane.dispose();
        } catch {
        }
        On.delete(t);
      }
    }
    function Ia() {
      if (ve) {
        try {
          ve.dispose();
        } catch {
        }
        ve = null;
      }
      if (mo) {
        try {
          mo.dispose();
        } catch {
        }
        mo = null;
      }
      if (_t) {
        try {
          _t.dispose();
        } catch {
        }
        _t = null;
      }
      if (bo) {
        try {
          bo.dispose();
        } catch {
        }
        bo = null;
      }
      const t = document.getElementById("sections");
      t && t.remove();
      const o = document.getElementById("right-panels-wrapper"), n = document.getElementById("parameters");
      o && n && (n.style.cssText = "", document.body.appendChild(n), o.remove()), n && me && (n.innerHTML = me);
    }
    const Le = document.createElement("div");
    Le.id = "cad3d-panel";
    const Cs = document.createElement("style");
    Cs.textContent = `
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
  `, document.head.appendChild(Cs), Qa() === "light" && document.documentElement.classList.add("awatif-light"), el((t) => {
      t === "light" ? document.documentElement.classList.add("awatif-light") : document.documentElement.classList.remove("awatif-light"), z && It(true);
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
        <button data-ex="placa-xy">Placa XY</button>
        <button data-ex="pergola" data-i18n="P\xE9rgola">P\xE9rgola</button>
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
    let Dt = null;
    function ka() {
      var _a2, _b, _c, _d, _e2, _f;
      const t = e.nodes.val, o = e.elements.val, n = (_a2 = e.nodeInputs) == null ? void 0 : _a2.val, l = (_b = e.elementInputs) == null ? void 0 : _b.val, s = P, d = b, a = [];
      if (a.push("# Awatif FEM \u2014 Model Export"), a.push(`# Generator: ${z || "custom"}`), a.push(`# Units: ${d}, ${s}`), a.push(`# ${(/* @__PURE__ */ new Date()).toISOString()}`), a.push(""), a.push(`## NODES (${t.length})`), a.push("# idx     X          Y          Z"), t.forEach((r, c) => {
        a.push(`  ${String(c).padStart(4)}  ${r[0].toFixed(4).padStart(10)}  ${r[1].toFixed(4).padStart(10)}  ${r[2].toFixed(4).padStart(10)}`);
      }), a.push(""), a.push(`## ELEMENTS (${o.length})`), a.push("# idx    nodeI  nodeJ"), o.forEach((r, c) => {
        const m = r.map((w) => String(w).padStart(6)).join("");
        a.push(`  ${String(c).padStart(4)}  ${m}`);
      }), a.push(""), (n == null ? void 0 : n.supports) && n.supports.size > 0 && (a.push(`## SUPPORTS (${n.supports.size})`), a.push("# node   Ux  Uy  Uz  Rx  Ry  Rz"), n.supports.forEach((r, c) => {
        const m = r.map((w) => w ? "  1" : "  0").join("");
        a.push(`  ${String(c).padStart(4)} ${m}`);
      }), a.push("")), (n == null ? void 0 : n.loads) && n.loads.size > 0 && (a.push(`## LOADS (${n.loads.size})`), a.push("# node         Fx          Fy          Fz          Mx          My          Mz"), n.loads.forEach((r, c) => {
        const m = r.map((w) => w.toFixed(3).padStart(11)).join(" ");
        a.push(`  ${String(c).padStart(4)}  ${m}`);
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
        ], c = "# elem  " + r.map((m) => m.name.padStart(12)).join(" ");
        a.push(c);
        for (let m = 0; m < o.length; m++) {
          const w = r.map((E) => {
            var _a3;
            const y = (_a3 = E.map) == null ? void 0 : _a3.get(m);
            return y !== void 0 ? y.toExponential(4).padStart(12) : "           -";
          }).join(" ");
          a.push(`  ${String(m).padStart(4)}  ${w}`);
        }
        a.push("");
      }
      const i = (_d = (_c = e.deformOutputs) == null ? void 0 : _c.val) == null ? void 0 : _d.deformations;
      i && i.size > 0 && (a.push(`## DISPLACEMENTS (${i.size} nodes)`), a.push("# node          Ux           Uy           Uz           Rx           Ry           Rz"), i.forEach((r, c) => {
        const m = r.map((w) => w.toExponential(4).padStart(12)).join(" ");
        a.push(`  ${String(c).padStart(4)}  ${m}`);
      }), a.push(""));
      const p = (_f = (_e2 = e.deformOutputs) == null ? void 0 : _e2.val) == null ? void 0 : _f.reactions;
      if (p && p.size > 0 && (a.push(`## REACTIONS (${p.size} supports)`), a.push("# node          Rx           Ry           Rz           Mx           My           Mz"), p.forEach((r, c) => {
        const m = r.map((w) => w.toFixed(4).padStart(12)).join(" ");
        a.push(`  ${String(c).padStart(4)}  ${m}`);
      }), a.push("")), z) {
        a.push("## CLI COMMAND");
        const r = Object.entries(W).map(([c, m]) => `${c}=${m.val}`).join(" ");
        a.push(`cad.${z === "edificio" ? "building" : z}(${r})`);
      }
      return a.join(`
`);
    }
    let tn = false;
    function Ta() {
      var _a2, _b, _c, _d;
      if (Dt) {
        Dt.remove(), Dt = null, tn = false;
        return;
      }
      const t = ka();
      Dt = document.createElement("div"), Dt.id = "export-overlay", Dt.style.cssText = `
      position:fixed; bottom:10px; right:10px; z-index:10000;
      width:720px; max-width:90vw;
      display:flex; flex-direction:column;
      font-family:monospace; color:var(--cad-text,#ccc);
      background:var(--cad-bg,#1a1a2e); border:1px solid var(--cad-border,#333);
      border-radius:8px; box-shadow:0 4px 20px rgba(0,0,0,0.5);
      transition: height 0.2s ease;
    `, Dt.innerHTML = `
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
    `, document.body.appendChild(Dt), (_a2 = Dt.querySelector("#export-close")) == null ? void 0 : _a2.addEventListener("click", () => {
        Dt == null ? void 0 : Dt.remove(), Dt = null, tn = false;
      }), (_b = Dt.querySelector("#export-minimize")) == null ? void 0 : _b.addEventListener("click", () => {
        const o = Dt.querySelector("#export-body"), n = Dt.querySelector("#export-minimize");
        tn = !tn, tn ? (o.style.display = "none", n.textContent = "\u25A2", n.title = "Restaurar", Dt.style.width = "auto") : (o.style.display = "flex", n.textContent = "\u25AC", n.title = "Minimizar", Dt.style.width = "720px");
      }), (_c = Dt.querySelector("#export-copy")) == null ? void 0 : _c.addEventListener("click", () => {
        const o = Dt.querySelector("#export-text");
        navigator.clipboard.writeText(o.value).then(() => {
          const n = Dt.querySelector("#export-status");
          n.textContent = "\u2713 Copiado al clipboard", setTimeout(() => n.textContent = "", 2e3);
        });
      }), (_d = Dt.querySelector("#export-json")) == null ? void 0 : _d.addEventListener("click", () => {
        var _a3, _b2, _c2, _d2, _e2, _f;
        const o = e.nodes.val, n = e.elements.val, l = (_a3 = e.nodeInputs) == null ? void 0 : _a3.val, s = (_b2 = e.elementInputs) == null ? void 0 : _b2.val, d = {
          generator: z || "custom",
          units: {
            force: b,
            length: P
          },
          nodes: o.map((c, m) => ({
            id: m,
            x: c[0],
            y: c[1],
            z: c[2]
          })),
          elements: n.map((c, m) => ({
            id: m,
            nodes: c
          }))
        };
        (l == null ? void 0 : l.supports) && (d.supports = [], l.supports.forEach((c, m) => d.supports.push({
          node: m,
          dofs: c
        }))), (l == null ? void 0 : l.loads) && (d.loads = [], l.loads.forEach((c, m) => d.loads.push({
          node: m,
          forces: c
        }))), s && (d.properties = {}, s.elasticities && (d.properties.E = Object.fromEntries(s.elasticities)), s.areas && (d.properties.A = Object.fromEntries(s.areas)), s.momentsOfInertiaZ && (d.properties.Iz = Object.fromEntries(s.momentsOfInertiaZ)), s.momentsOfInertiaY && (d.properties.Iy = Object.fromEntries(s.momentsOfInertiaY)), s.shearModuli && (d.properties.G = Object.fromEntries(s.shearModuli)), s.torsionalConstants && (d.properties.J = Object.fromEntries(s.torsionalConstants)));
        const a = (_d2 = (_c2 = e.deformOutputs) == null ? void 0 : _c2.val) == null ? void 0 : _d2.deformations;
        a && a.size > 0 && (d.displacements = {}, a.forEach((c, m) => d.displacements[m] = c));
        const i = (_f = (_e2 = e.deformOutputs) == null ? void 0 : _e2.val) == null ? void 0 : _f.reactions;
        i && i.size > 0 && (d.reactions = {}, i.forEach((c, m) => d.reactions[m] = c));
        const p = Dt.querySelector("#export-text");
        p.value = JSON.stringify(d, null, 2);
        const r = Dt.querySelector("#export-status");
        r.textContent = "Formato JSON activo \u2014 presiona Copy para copiar";
      });
    }
    function nt() {
      var _a2, _b, _c;
      const t = Le.querySelector("#cad3d-info");
      if (t) {
        const o = e.nodes.val.length, n = e.elements.val, l = n.length, s = ((_c = (_b = (_a2 = e.nodeInputs) == null ? void 0 : _a2.val) == null ? void 0 : _b.supports) == null ? void 0 : _c.size) || 0;
        let d = 0, a = 0, i = 0;
        for (const r of n) r.length === 2 ? d++ : r.length === 3 ? a++ : r.length === 4 && i++;
        let p = `${o}n ${l}e ${s}s`;
        (i > 0 || a > 0) && (p += ` | ${d}fr`, i > 0 && (p += ` ${i}q4`), a > 0 && (p += ` ${a}tri`)), t.textContent = p;
      }
    }
    function Nn() {
      var _a2;
      if (!_e || !e.nodeInputs || !e.elementInputs) return;
      const t = e.nodes.val, o = e.elements.val, n = e.nodeInputs.val, l = e.elementInputs.val;
      if (!(t.length === 0 || o.length === 0) && !(!n.supports || n.supports.size === 0) && !(!l.densities || l.densities.size === 0)) try {
        const s = Math.min(12, t.length * 6 - n.supports.size * 6);
        if (s <= 0) return;
        const d = Xa(t, o, n, l, Math.min(s, 12));
        if (d.frequencies && d.frequencies.length > 0) {
          Fe = d, ke = t.map((r) => [
            ...r
          ]), xe = 0;
          const { extent: a } = Eo(), i = (_a2 = d.modeShapes) == null ? void 0 : _a2[0];
          if (i) {
            let r = 0;
            for (let c = 0; c < t.length; c++) {
              const m = i[c * 6] || 0, w = i[c * 6 + 1] || 0, E = i[c * 6 + 2] || 0;
              r = Math.max(r, Math.sqrt(m * m + w * w + E * E));
            }
            Je = r > 1e-12 ? a * 0.05 / r : 1;
          }
          const p = `${z} \u2014 ${t.length}n ${o.length}e`;
          ut.render(d, {
            title: p
          }), ut.div.style.display = "", on(), console.log(`Modal: ${d.frequencies.length} modos. f\u2081 = ${d.frequencies[0].toFixed(4)} Hz`);
        }
      } catch (s) {
        console.warn("Modal analysis failed:", s.message), Fe = null;
      }
    }
    function qn() {
      ge && (cancelAnimationFrame(ge), ge = 0), ke.length > 0 && (e.nodes.val = ke.map((t) => [
        ...t
      ])), ut.div.style.display = "none", Fe = null;
    }
    function on() {
      var _a2;
      if (ge && cancelAnimationFrame(ge), !(Fe == null ? void 0 : Fe.modeShapes) || !ke.length) return;
      const t = Fe.modeShapes[xe];
      if (!t) return;
      const o = ((_a2 = Fe.frequencies) == null ? void 0 : _a2[xe]) || 1, n = Math.max(0.5, Math.min(3, o * 0.1)), l = performance.now(), s = ke.length, d = e.elements.rawVal, { extent: a } = Eo(), i = Le.querySelector("#cad3d-modal-scale"), p = i && parseFloat(i.value) || 5;
      let r = 0;
      for (let $ = 0; $ < s; $++) {
        const C = t[$ * 6] || 0, B = t[$ * 6 + 1] || 0, x = t[$ * 6 + 2] || 0;
        r = Math.max(r, Math.sqrt(C * C + B * B + x * x));
      }
      const c = r > 1e-12 ? a * p / 100 / r : 1, m = lt();
      if (!m) return;
      let w = null, E = null, y = null;
      m.scene.traverse(($) => {
        var _a3, _b;
        !w && $.isPoints && $.geometry && (w = $), !E && $.isLineSegments && $.geometry && !$.name && (E = $), !y && $.isMesh && ((_a3 = $.material) == null ? void 0 : _a3.transparent) && ((_b = $.material) == null ? void 0 : _b.opacity) < 0.5 && $.geometry && (y = $);
      });
      const f = new Float32Array(s * 3), h = [];
      for (const $ of d) if ($.length === 2) h.push([
        $[0],
        $[1]
      ]);
      else for (let C = 0; C < $.length; C++) h.push([
        $[C],
        $[(C + 1) % $.length]
      ]);
      const T = new Float32Array(h.length * 6);
      function k() {
        const $ = (performance.now() - l) / 1e3, C = Math.sin(2 * Math.PI * n * $) * c;
        for (let B = 0; B < s; B++) {
          const x = ke[B];
          f[B * 3] = x[0] + (t[B * 6] || 0) * C, f[B * 3 + 1] = x[1] + (t[B * 6 + 1] || 0) * C, f[B * 3 + 2] = x[2] + (t[B * 6 + 2] || 0) * C;
        }
        if (w) {
          const B = w.geometry, x = B.getAttribute("position");
          x && x.array.length === f.length ? (x.array.set(f), x.needsUpdate = true) : B.setAttribute("position", new Ro(f.slice(), 3));
        }
        if (E) {
          for (let u = 0; u < h.length; u++) {
            const [I, A] = h[u];
            T[u * 6] = f[I * 3], T[u * 6 + 1] = f[I * 3 + 1], T[u * 6 + 2] = f[I * 3 + 2], T[u * 6 + 3] = f[A * 3], T[u * 6 + 4] = f[A * 3 + 1], T[u * 6 + 5] = f[A * 3 + 2];
          }
          const B = E.geometry, x = B.getAttribute("position");
          x && x.array.length === T.length ? (x.array.set(T), x.needsUpdate = true) : B.setAttribute("position", new Ro(T.slice(), 3));
        }
        if (y) {
          const B = [];
          for (const x of d) if (x.length === 3) {
            const [u, I, A] = x;
            B.push(f[u * 3], f[u * 3 + 1], f[u * 3 + 2]), B.push(f[I * 3], f[I * 3 + 1], f[I * 3 + 2]), B.push(f[A * 3], f[A * 3 + 1], f[A * 3 + 2]);
          } else if (x.length === 4) {
            const [u, I, A, R] = x;
            B.push(f[u * 3], f[u * 3 + 1], f[u * 3 + 2]), B.push(f[I * 3], f[I * 3 + 1], f[I * 3 + 2]), B.push(f[A * 3], f[A * 3 + 1], f[A * 3 + 2]), B.push(f[u * 3], f[u * 3 + 1], f[u * 3 + 2]), B.push(f[A * 3], f[A * 3 + 1], f[A * 3 + 2]), B.push(f[R * 3], f[R * 3 + 1], f[R * 3 + 2]);
          }
          if (B.length > 0) {
            const x = y.geometry, u = new Float32Array(B), I = x.getAttribute("position");
            I && I.array.length === u.length ? (I.array.set(u), I.needsUpdate = true) : x.setAttribute("position", new Ro(u, 3));
          }
        }
        m.render(), ge = requestAnimationFrame(k);
      }
      ge = requestAnimationFrame(k);
    }
    function _n() {
      var _a2, _b, _c, _d, _e2;
      if (!e.deformOutputs || !e.analyzeOutputs || !e.nodeInputs || !e.elementInputs) return;
      const t = e.nodes.val, o = e.elements.val;
      let n = e.nodeInputs.val;
      const l = e.elementInputs.val;
      if (t.length === 0 || o.length === 0 || !n.supports || n.supports.size === 0) return;
      if (!n.loads || n.loads.size === 0) {
        const y = le("CM") ?? 0, f = le("CV") ?? 0, h = y + f, T = le("Ex") ?? 0, k = le("Ey") ?? 0;
        if (h === 0 && T === 0 && k === 0) return;
        const $ = /* @__PURE__ */ new Map(), C = [];
        for (let S = 0; S < t.length; S++) n.supports.has(S) || C.push(S);
        const B = (S) => Math.round(S * 1e3) / 1e3, x = /* @__PURE__ */ new Set();
        n.supports.forEach((S, v) => {
          x.add(`${B(t[v][0])},${B(t[v][1])}`);
        });
        const u = /* @__PURE__ */ new Set();
        for (const S of C) x.has(`${B(t[S][0])},${B(t[S][1])}`) && u.add(S);
        const I = /* @__PURE__ */ new Set(), A = /* @__PURE__ */ new Set();
        if (T !== 0 || k !== 0) {
          let S = -1 / 0, v = -1 / 0;
          for (const K of u) S = Math.max(S, B(t[K][0])), v = Math.max(v, B(t[K][1]));
          const F = /* @__PURE__ */ new Map();
          for (const K of u) {
            const U = B(t[K][2]);
            F.has(U) || F.set(U, []), F.get(U).push(K);
          }
          F.forEach((K) => {
            if (T !== 0) {
              const U = /* @__PURE__ */ new Set();
              for (const ae of K) if (B(t[ae][0]) === S) {
                const Q = B(t[ae][1]);
                U.has(Q) || (U.add(Q), I.add(ae));
              }
            }
            if (k !== 0) {
              const U = /* @__PURE__ */ new Set();
              for (const ae of K) if (B(t[ae][1]) === v) {
                const Q = B(t[ae][0]);
                U.has(Q) || (U.add(Q), A.add(ae));
              }
            }
          });
        }
        const R = 9.81, j = /* @__PURE__ */ new Map();
        for (let S = 0; S < o.length; S++) {
          const v = o[S], F = ((_a2 = l.densities) == null ? void 0 : _a2.get(S)) ?? 0;
          if (!(Math.abs(F) < 1e-15)) {
            if (v.length === 2) {
              const K = ((_b = l.areas) == null ? void 0 : _b.get(S)) ?? 0, U = t[v[0]], ae = t[v[1]], Q = Math.sqrt((ae[0] - U[0]) ** 2 + (ae[1] - U[1]) ** 2 + (ae[2] - U[2]) ** 2), ie = -(F * K * Q * R) / 2;
              j.set(v[0], (j.get(v[0]) ?? 0) + ie), j.set(v[1], (j.get(v[1]) ?? 0) + ie);
            } else if (v.length >= 3) {
              const K = ((_c = l.thicknesses) == null ? void 0 : _c.get(S)) ?? 0;
              let U = 0;
              if (v.length === 3) {
                const [X, ie, re] = v.map((Me) => t[Me]);
                U = 0.5 * Math.abs((ie[0] - X[0]) * (re[1] - X[1]) - (re[0] - X[0]) * (ie[1] - X[1]));
              } else if (v.length === 4) {
                const [X, ie, re, Me] = v.map((Te) => t[Te]);
                if (U = 0.5 * Math.abs((ie[0] - X[0]) * (re[1] - X[1]) - (re[0] - X[0]) * (ie[1] - X[1])) + 0.5 * Math.abs((re[0] - X[0]) * (Me[1] - X[1]) - (Me[0] - X[0]) * (re[1] - X[1])), U < 1e-10) {
                  const Te = [
                    ie[0] - X[0],
                    ie[1] - X[1],
                    ie[2] - X[2]
                  ], N = [
                    Me[0] - X[0],
                    Me[1] - X[1],
                    Me[2] - X[2]
                  ], ce = [
                    Te[1] * N[2] - Te[2] * N[1],
                    Te[2] * N[0] - Te[0] * N[2],
                    Te[0] * N[1] - Te[1] * N[0]
                  ];
                  U = Math.sqrt(ce[0] ** 2 + ce[1] ** 2 + ce[2] ** 2);
                }
              }
              const Q = -(F * K * U * R) / v.length;
              for (const X of v) j.set(X, (j.get(X) ?? 0) + Q);
            }
          }
        }
        const g = /* @__PURE__ */ new Set();
        for (const S of o) S.length === 2 && (g.add(S[0]), g.add(S[1]));
        for (const S of C) {
          const v = I.has(S) ? T : 0, F = A.has(S) ? k : 0, K = j.get(S) ?? 0, U = g.has(S) ? h : 0, ae = K + U;
          (v !== 0 || F !== 0 || Math.abs(ae) > 1e-10) && $.set(S, [
            v,
            F,
            ae,
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
      let d = 0, a = 0, i = 0;
      for (const y of o) y.length === 2 ? d++ : y.length === 3 ? i++ : y.length === 4 && a++;
      const p = ((_d = n.supports) == null ? void 0 : _d.size) || 0, r = ((_e2 = n.loads) == null ? void 0 : _e2.size) || 0, c = t.length * 6, m = c - p * 6, w = [], E = (y) => w.push(y);
      E('<b style="color:var(--cad-heading)">FEM Solver</b>'), E(`<span style="color:var(--cad-info)">Modelo:</span> ${t.length} nodos, ${o.length} elem`), d && E(`&nbsp;&nbsp;Frames: <b>${d}</b>`), a && E(`&nbsp;&nbsp;Shell Q4: <b>${a}</b>`), i && E(`&nbsp;&nbsp;Triangulos: <b>${i}</b>`), E(`&nbsp;&nbsp;Apoyos: ${p} &nbsp;|&nbsp; Cargas: ${r}`), E(`<span style="color:var(--cad-info)">DOFs:</span> ${c} total, ~${m} libres`), E('<hr style="border-color:var(--cad-border);margin:4px 0">'), E(`<span style="color:#888">1.</span> Ensamblaje <b>K</b> global (${c}&times;${c})`), E("&nbsp;&nbsp;&nbsp;<i>K<sub>global</sub> = &Sigma; T<sup>T</sup> &middot; K<sub>local</sub> &middot; T</i>");
      try {
        const y = Pt(t, o, n, l), f = performance.now() - s;
        if (y) {
          e.deformOutputs.val = y, E(`<span style="color:#888">2.</span> <b>K &middot; u = F</b> &rarr; SparseLU &rarr; <span style="color:#00cc88">${f.toFixed(0)} ms</span>`);
          let h = 0, T = -1, k = 0, $ = 0;
          y.deformations && y.deformations.forEach((I, A) => {
            const R = Math.sqrt(I[0] * I[0] + I[1] * I[1] + I[2] * I[2]);
            R > h && (h = R, T = A, k = I[0], $ = I[2]);
          }), E('<span style="color:#888">3.</span> Desplazamientos:'), E(`&nbsp;&nbsp;&nbsp;max|<b>u</b>| = <b style="color:var(--cad-heading)">${h.toExponential(3)}</b> m <span style="color:#666">(nodo ${T})</span>`), E(`&nbsp;&nbsp;&nbsp;u<sub>x</sub> = ${(k * 1e3).toFixed(4)} mm &nbsp;|&nbsp; u<sub>z</sub> = ${($ * 1e3).toFixed(4)} mm`);
          const C = performance.now(), B = yo(t, o, l, y), x = performance.now() - C;
          B && (e.analyzeOutputs.val = B, E(`<span style="color:#888">4.</span> Fuerzas internas: <span style="color:#00cc88">${x.toFixed(0)} ms</span>`), E("&nbsp;&nbsp;&nbsp;<i>F<sub>int</sub> = K<sub>local</sub> &middot; T &middot; u</i>"));
          const u = performance.now() - s;
          E('<hr style="border-color:var(--cad-border);margin:4px 0">'), E(`<b style="color:#00cc88">&#10004; Completado: ${u.toFixed(0)} ms</b>`);
        }
      } catch (y) {
        const f = performance.now() - s;
        E(`<b style="color:#ff4444">&#10008; Error (${f.toFixed(0)} ms): ${y.message}</b>`);
      }
      window.__femLog = w, console.log(`FEM Solver: ${t.length}n ${o.length}e \u2192 ${(performance.now() - s).toFixed(0)}ms`), _e && setTimeout(() => Nn(), 50);
    }
    function Dn(t, o) {
      const n = t * o, l = t * o * o * o / 12, s = o * t * t * t / 12, d = Math.min(t, o), a = Math.max(t, o), i = d * d * d * a * (1 / 3 - 0.21 * d / a * (1 - d * d * d * d / (12 * a * a * a * a)));
      return {
        A: n,
        Iz: l,
        Iy: s,
        J: i
      };
    }
    function Fs(t) {
      const o = t / 2, n = Math.PI * o * o, l = Math.PI * o * o * o * o / 4, s = Math.PI * o * o * o * o / 2;
      return {
        A: n,
        Iz: l,
        Iy: l,
        J: s
      };
    }
    function Bn(t, o, n, l) {
      const s = o - 2 * n, d = 2 * t * n + s * l, a = (t * o * o * o - (t - l) * s * s * s) / 12, i = (2 * n * t * t * t + s * l * l * l) / 12, p = (2 * t * n * n * n + s * l * l * l) / 3;
      return {
        A: d,
        Iz: a,
        Iy: i,
        J: p
      };
    }
    function Hn(t, o, n) {
      const l = t - 2 * n, s = o - 2 * n, d = t * o - l * s, a = (t * o * o * o - l * s * s * s) / 12, i = (o * t * t * t - s * l * l * l) / 12, p = (t - n) * (o - n), r = 2 * ((t - n) / n + (o - n) / n), c = 4 * p * p / (r > 0 ? r : 1);
      return {
        A: d,
        Iz: a,
        Iy: i,
        J: c
      };
    }
    function za(t, o, n, l, s, d, a) {
      const p = 4700 * Math.sqrt(d / 1e3) * 1e3 / l, r = t - 2 * n, c = o - 2 * n, m = t * o - r * c, w = (t * o * o * o - r * c * c * c) / 12, E = (o * t * t * t - c * r * r * r) / 12, y = r * c, f = r * c * c * c / 12, h = c * r * r * r / 12, T = m + p * y, k = w + p * f, $ = E + p * h, C = l / (2 * (1 + s)), B = (t - n) * (o - n), x = 2 * ((t - n) / n + (o - n) / n), u = 4 * B * B / (x > 0 ? x : 1);
      return {
        A: T,
        Iz: k,
        Iy: $,
        J: u,
        Es: l,
        Gs: C,
        A_steel: m,
        A_conc: y
      };
    }
    function wo() {
      if (!e.elementInputs) return;
      const t = e.elements.val, o = M, n = {
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
      if ((z === "edificio" || z === "frame") && D.size > 0) {
        const { colMat: s, vigaMat: d, colShape: a, fc: i, perFloor: p } = qe, r = 4700 * Math.sqrt(i / 1e3) * 1e3, c = r / (2 * 1.2), m = 24 / 9.80665, w = o.E, E = o.G, y = o.rho;
        for (let f = 0; f < t.length; f++) {
          if (fe.has(f)) {
            const I = 4700 * Math.sqrt(i / 1e3) * 1e3, A = 0.2;
            n.elasticities.set(f, I), n.poissonsRatios.set(f, A), n.thicknesses.set(f, je), n.shearModuli.set(f, I / (2 * (1 + A))), n.densities.set(f, 24 / 9.80665);
            continue;
          }
          if (qt.has(f)) {
            const I = 4700 * Math.sqrt(i / 1e3) * 1e3, A = 0.2;
            n.elasticities.set(f, I), n.poissonsRatios.set(f, A), n.thicknesses.set(f, pt), n.shearModuli.set(f, I / (2 * (1 + A))), n.densities.set(f, 24 / 9.80665);
            continue;
          }
          const h = D.has(f), T = $e.get(f) ?? 0, k = p[T] ?? p[0] ?? {
            bCol: 0.4,
            hCol: 0.4,
            dCol: 0.4
          };
          let $, C, B, x;
          if (h) if (s === 0) C = r, B = c, x = m, $ = a === 1 ? Fs(k.dCol) : Dn(k.bCol, k.hCol), n.sectionShapes.set(f, a === 1 ? {
            type: "circ",
            d: k.dCol
          } : {
            type: "rect",
            b: k.bCol,
            h: k.hCol
          });
          else if (s === 1) {
            C = w, B = E, x = y;
            const I = qe.steelColType;
            if (I <= 1) {
              const A = Ao[k.colProfileIdx] ?? Ao[0];
              $ = {
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
            } else if (I === 2) {
              const A = k.colBf ?? 0.3, R = k.colHf ?? 0.3, j = k.colTf ?? 0.02, g = k.colTw ?? 0.012;
              $ = Bn(A, R, j, g);
              const S = `I${(R * 100).toFixed(0)}x${(A * 100).toFixed(0)}`;
              n.sectionShapes.set(f, {
                type: "I",
                b: A,
                h: R,
                tf: j,
                tw: g,
                name: S
              });
            } else {
              const A = k.colBc ?? 0.3, R = k.colHc ?? 0.3, j = k.colT ?? 0.01;
              $ = Hn(A, R, j);
              const g = `\u25A1${(R * 100).toFixed(0)}x${(A * 100).toFixed(0)}x${(j * 1e3).toFixed(0)}`;
              n.sectionShapes.set(f, {
                type: "HSS",
                b: A,
                h: R,
                tw: j,
                name: g
              });
            }
          } else {
            const I = k.colBc ?? 0.3, A = k.colHc ?? 0.3, R = k.colT ?? 0.01, j = k.colFc ?? 28e3, g = k.colEs ?? 2e8, S = k.colNuS ?? 0.3;
            k.colNuC;
            const v = za(I, A, R, g, S, j);
            $ = {
              A: v.A,
              Iz: v.Iz,
              Iy: v.Iy,
              J: v.J
            }, C = v.Es, B = v.Gs;
            const F = 7.85, K = 24 / 9.80665;
            x = (F * v.A_steel + K * v.A_conc) / (v.A_steel + v.A_conc);
            const U = `CFT ${(A * 1e3).toFixed(0)}X${(I * 1e3).toFixed(0)}X${(R * 1e3).toFixed(0)}`;
            n.sectionShapes.set(f, {
              type: "CFT",
              b: I,
              h: A,
              tw: R,
              name: U
            });
          }
          else {
            const I = ze.get(f), A = I ? I.dir === "x" ? k.vigasX : k.vigasY : [], R = I ? A[I.bay] ?? A[0] ?? ht() : ht();
            if (d === 0) C = r, B = c, x = m, $ = Dn(R.b, R.h), n.sectionShapes.set(f, {
              type: "rect",
              b: R.b,
              h: R.h
            });
            else {
              C = w, B = E, x = y;
              const j = qe.steelVigaType;
              if (j <= 1) {
                const g = Ao[R.profileIdx ?? 0] ?? Ao[0];
                $ = {
                  A: g.A,
                  Iz: g.Iz,
                  Iy: g.Iy,
                  J: g.J
                }, n.sectionShapes.set(f, {
                  type: "I",
                  b: g.bf,
                  h: g.d,
                  name: g.name
                });
              } else if (j === 2) {
                const g = R.bf ?? 0.2, S = R.hf ?? 0.4, v = R.tf ?? 0.015, F = R.tw ?? 0.01;
                $ = Bn(g, S, v, F);
                const K = `I${(S * 100).toFixed(0)}x${(g * 100).toFixed(0)}`;
                n.sectionShapes.set(f, {
                  type: "I",
                  b: g,
                  h: S,
                  tf: v,
                  tw: F,
                  name: K
                });
              } else {
                const g = R.bc ?? 0.2, S = R.hc ?? 0.3, v = R.t ?? 8e-3;
                $ = Hn(g, S, v);
                const F = `\u25A1${(S * 100).toFixed(0)}x${(g * 100).toFixed(0)}x${(v * 1e3).toFixed(0)}`;
                n.sectionShapes.set(f, {
                  type: "HSS",
                  b: g,
                  h: S,
                  tw: v,
                  name: F
                });
              }
            }
          }
          const u = ye.get(f);
          if (u) {
            if ((u.material ?? 1) === 0 ? (C = r, B = c, x = m) : (C = w, B = E, x = y), u.secType === "rect" && u.b && u.h) $ = Dn(u.b, u.h), n.sectionShapes.set(f, {
              type: "rect",
              b: u.b,
              h: u.h
            });
            else if (u.secType === "circ" && u.b) $ = Fs(u.b), n.sectionShapes.set(f, {
              type: "circ",
              d: u.b
            });
            else if ((u.secType === "W" || u.secType === "HSS") && u.profileIdx !== void 0) {
              const A = Ao[u.profileIdx] ?? Ao[0];
              $ = {
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
            } else if (u.secType === "I-param" && u.bf && u.hf && u.tf && u.tw) {
              $ = Bn(u.bf, u.hf, u.tf, u.tw);
              const A = `I${(u.hf * 100).toFixed(0)}x${(u.bf * 100).toFixed(0)}`;
              n.sectionShapes.set(f, {
                type: "I",
                b: u.bf,
                h: u.hf,
                tf: u.tf,
                tw: u.tw,
                name: A
              });
            } else if (u.secType === "tubular" && u.bc && u.hc && u.t) {
              $ = Hn(u.bc, u.hc, u.t);
              const A = `\u25A1${(u.hc * 100).toFixed(0)}x${(u.bc * 100).toFixed(0)}x${(u.t * 1e3).toFixed(0)}`;
              n.sectionShapes.set(f, {
                type: "HSS",
                b: u.bc,
                h: u.hc,
                tw: u.t,
                name: A
              });
            }
          }
          n.elasticities.set(f, C), n.shearModuli.set(f, B), n.areas.set(f, $.A), n.momentsOfInertiaZ.set(f, $.Iy), n.momentsOfInertiaY.set(f, $.Iz), n.torsionalConstants.set(f, $.J), n.densities.set(f, x), u && u.releases12 && u.releases12.some((I) => I) && (n.momentReleases || (n.momentReleases = /* @__PURE__ */ new Map()), n.momentReleases.set(f, u.releases12)), u && u.springs12 && u.springs12.some((I) => I > 0) && (n.partialFixitySprings || (n.partialFixitySprings = /* @__PURE__ */ new Map()), n.partialFixitySprings.set(f, u.springs12));
        }
      } else for (let s = 0; s < t.length; s++) n.elasticities.set(s, o.E), n.shearModuli.set(s, o.G), n.areas.set(s, o.A), n.momentsOfInertiaZ.set(s, o.Iy), n.momentsOfInertiaY.set(s, o.Iz), n.torsionalConstants.set(s, o.J), n.densities.set(s, o.rho);
      e.elementInputs.val = n;
    }
    function Ps(t) {
      Le.querySelectorAll("[data-ex]").forEach((o) => {
        o.classList.toggle("active", o.dataset.ex === t);
      });
    }
    window.innerWidth <= 600 && Le.classList.add("collapsed"), setTimeout(() => {
      var _a2, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l2, _m, _n2, _o2, _p;
      (_a2 = Le.querySelector("#cad3d-toggle")) == null ? void 0 : _a2.addEventListener("click", (g) => {
        g.stopPropagation(), Le.classList.add("collapsed");
      }), (_b = Le.querySelector("#cad3d-expand")) == null ? void 0 : _b.addEventListener("click", (g) => {
        g.stopPropagation(), Le.classList.remove("collapsed");
      }), Le.querySelectorAll("[data-ex]").forEach((g) => {
        g.addEventListener("click", (S) => {
          S.stopPropagation();
          const v = g.dataset.ex;
          Ps(v), tt.example(v);
        });
      }), Le.querySelectorAll("[data-view]").forEach((g) => {
        g.addEventListener("click", (S) => {
          S.stopPropagation();
          const v = g.dataset.view;
          So(v), Le.querySelectorAll("[data-view]").forEach((F) => F.classList.remove("view-active")), g.classList.add("view-active");
        });
      }), (_c = Le.querySelector("#cad3d-btn-clear")) == null ? void 0 : _c.addEventListener("click", (g) => {
        g.stopPropagation(), z = "", pa.val = false, Ia(), tt.clear();
      }), (_d = Le.querySelector("#cad3d-select")) == null ? void 0 : _d.addEventListener("click", (g) => {
        var _a3;
        g.stopPropagation(), io && (io = false, Fo()), go && mn(), Qt = !Qt, (_a3 = Le.querySelector("#cad3d-select")) == null ? void 0 : _a3.classList.toggle("inspect-active", Qt);
        const v = lt();
        v && (v.controls.enabled = !Qt), Qt || un();
      }), (_e2 = Le.querySelector("#cad3d-draw")) == null ? void 0 : _e2.addEventListener("click", (g) => {
        var _a3;
        g.stopPropagation(), io && (io = false, Fo()), Qt && un(), go = !go, (_a3 = Le.querySelector("#cad3d-draw")) == null ? void 0 : _a3.classList.toggle("inspect-active", go), go ? Pa() : mn();
      }), (_f = Le.querySelector("#cad3d-inspect")) == null ? void 0 : _f.addEventListener("click", (g) => {
        var _a3;
        g.stopPropagation(), Qt && un(), go && mn(), io = !io, (_a3 = Le.querySelector("#cad3d-inspect")) == null ? void 0 : _a3.classList.toggle("inspect-active", io), io || Fo();
      }), (_g = Le.querySelector("#cad3d-new-model")) == null ? void 0 : _g.addEventListener("click", (g) => {
        g.stopPropagation(), tt.clear(), Xe = null;
      });
      const t = Le.querySelector("#cad3d-tests-menu");
      t && t.addEventListener("change", () => {
        const g = t.value;
        t.value = "", g && o(g);
      });
      function o(g) {
        var _a3, _b2, _c2, _d2, _e3, _f2;
        const F = 15e3 * Math.sqrt(210) * 10, K = 0.2, U = F / (2 * (1 + K)), ae = 0.09, Q = 0.3 ** 4 / 12, X = 0.141 * 0.3 ** 4, ie = 0.25 * 0.4, re = 0.25 * 0.4 ** 3 / 12, Me = 0.4 * 0.25 ** 3 / 12, Te = 1e-3, N = 5 / 6 * ae, ce = 5 / 6 * ie, te = [];
        function de(ee, ue, Ee) {
          const oe = {
            elasticities: /* @__PURE__ */ new Map(),
            shearModuli: /* @__PURE__ */ new Map(),
            areas: /* @__PURE__ */ new Map(),
            momentsOfInertiaZ: /* @__PURE__ */ new Map(),
            momentsOfInertiaY: /* @__PURE__ */ new Map(),
            torsionalConstants: /* @__PURE__ */ new Map(),
            shearAreasY: /* @__PURE__ */ new Map(),
            shearAreasZ: /* @__PURE__ */ new Map()
          };
          for (const Se of ue) oe.elasticities.set(Se, F), oe.shearModuli.set(Se, U), oe.areas.set(Se, ae), oe.momentsOfInertiaZ.set(Se, Q), oe.momentsOfInertiaY.set(Se, Q), oe.torsionalConstants.set(Se, X), oe.shearAreasY.set(Se, N), oe.shearAreasZ.set(Se, N);
          for (const Se of Ee) oe.elasticities.set(Se, F), oe.shearModuli.set(Se, U), oe.areas.set(Se, ie), oe.momentsOfInertiaZ.set(Se, Me), oe.momentsOfInertiaY.set(Se, re), oe.torsionalConstants.set(Se, Te), oe.shearAreasY.set(Se, ce), oe.shearAreasZ.set(Se, ce);
          return oe;
        }
        if (g === "test-cantilever" || g === "test-all") {
          const Ee = 270 / (3 * F * Q), oe = [
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
          ], Se = [
            [
              0,
              1
            ]
          ], He = de(1, [], []);
          He.elasticities.set(0, F), He.shearModuli.set(0, U), He.areas.set(0, ae), He.momentsOfInertiaZ.set(0, Q), He.momentsOfInertiaY.set(0, Q), He.torsionalConstants.set(0, X);
          const at = Pt(oe, Se, {
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
          }, He);
          te.push({
            name: "Cantilever Beam",
            formulation: "Euler-Bernoulli (PL\xB3/3EI)",
            nodes: oe,
            elements: Se,
            results: [
              {
                label: "Uz tip (cm)",
                awatif: at.deformations.get(1)[2] * 100,
                reference: Ee * 100,
                refSource: "Analytical"
              }
            ]
          });
        }
        if (g === "test-portal-1p" || g === "test-all") {
          const ee = [
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
          ], ue = [
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
          ], Ee = de(3, [
            0,
            1
          ], [
            2
          ]), oe = Pt(ee, ue, {
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
          te.push({
            name: "Portal 1-Story (Timoshenko)",
            formulation: "Frame Timoshenko (As=5/6\xB7A)",
            nodes: ee,
            elements: ue,
            results: [
              {
                label: "Ux top (cm)",
                awatif: oe.deformations.get(2)[0] * 100,
                reference: 2.0618,
                refSource: "ETABS 22.6"
              }
            ]
          });
        }
        if (g === "test-portal-2p" || g === "test-all") {
          const ee = [
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
          ], ue = [
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
          ], Ee = de(6, [
            0,
            1,
            2,
            3
          ], [
            4,
            5
          ]), oe = Pt(ee, ue, {
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
          te.push({
            name: "Portal 2-Story",
            formulation: "Frame Timoshenko",
            nodes: ee,
            elements: ue,
            results: [
              {
                label: "Ux Z=3m (cm)",
                awatif: oe.deformations.get(2)[0] * 100,
                reference: 2.5188,
                refSource: "ETABS 22.6"
              },
              {
                label: "Ux Z=6m (cm)",
                awatif: oe.deformations.get(4)[0] * 100,
                reference: 5.6424,
                refSource: "ETABS 22.6"
              }
            ]
          });
        }
        if (g === "test-wall-only" || g === "test-all") {
          const ee = [
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
          ], ue = [
            [
              0,
              1,
              2,
              3
            ]
          ], oe = Pt(ee, ue, {
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
                F
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
          te.push({
            name: "Wall Q4 Only",
            formulation: "Membrane (incompatible modes) + Mindlin-Reissner + Hughes-Brezzi drilling",
            nodes: ee,
            elements: ue,
            results: [
              {
                label: "Ux top (cm)",
                awatif: oe.deformations.get(2)[0] * 100,
                reference: 0.013519,
                refSource: "ETABS 22.6"
              }
            ]
          });
        }
        if (g === "test-portal-wall" || g === "test-all") {
          const ee = [
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
          ], ue = [
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
          ], Ee = de(6, [
            0,
            1,
            2,
            3
          ], [
            4,
            5
          ]);
          Ee.elasticities.set(6, F), Ee.shearModuli.set(6, U), Ee.thicknesses = /* @__PURE__ */ new Map([
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
          const oe = Pt(ee, ue, {
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
          te.push({
            name: "Portal 2-Story + Wall Q4",
            formulation: "Frame Timoshenko + Shell Q4 (Hughes-Brezzi drilling)",
            nodes: ee,
            elements: ue,
            results: [
              {
                label: "Ux h=3m (cm)",
                awatif: oe.deformations.get(2)[0] * 100,
                reference: 0.0195,
                refSource: "ETABS 22.6"
              },
              {
                label: "Ux h=6m (cm)",
                awatif: oe.deformations.get(4)[0] * 100,
                reference: 2.1133,
                refSource: "ETABS 22.6"
              }
            ]
          });
        }
        if (g === "test-wilson-beam" || g === "test-all") {
          const at = 0.6666666666666666, rt = [
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
          ], wt = [
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
          ], Tt = {
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
          }, Et = /* @__PURE__ */ new Map();
          Et.set(0, [
            true,
            true,
            true,
            true,
            true,
            true
          ]), Et.set(5, [
            true,
            true,
            true,
            true,
            true,
            true
          ]);
          const Ot = /* @__PURE__ */ new Map();
          Ot.set(2, [
            0,
            0.5,
            0,
            0,
            0,
            0
          ]), Ot.set(3, [
            0,
            0.5,
            0,
            0,
            0,
            0
          ]);
          const vo = 5 ** 3 / (3 * 1500 * at);
          try {
            const to = Pt(rt, wt, {
              supports: Et,
              loads: Ot
            }, Tt), Ut = Math.abs(((_b2 = (_a3 = to.deformations) == null ? void 0 : _a3.get(2)) == null ? void 0 : _b2[1]) ?? 0), ot = Math.abs(((_d2 = (_c2 = to.deformations) == null ? void 0 : _c2.get(3)) == null ? void 0 : _d2[1]) ?? 0), yt = (Ut + ot) / 2, Xt = yt / vo;
            te.push({
              name: "Wilson Fig 6.2 \u2014 Cantilever Q4",
              formulation: "2 Q4 elements + incompatible modes (Wilson 1971, Table 6.1)",
              nodes: rt,
              elements: wt,
              results: [
                {
                  label: "Uy/Uy_exact (cortante)",
                  awatif: Xt,
                  reference: 0.932,
                  refSource: "Wilson Table 6.1"
                },
                {
                  label: "Uy free end",
                  awatif: yt,
                  reference: vo * 0.932,
                  refSource: "Wilson"
                }
              ]
            });
          } catch (to) {
            te.push({
              name: "Wilson Fig 6.2 \u2014 Cantilever Q4",
              formulation: "ERROR: " + to.message,
              nodes: rt,
              elements: wt,
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
        if (g === "test-scordelis" || g === "test-all") {
          const at = 40 * Math.PI / 180, rt = 8, wt = 8, Tt = [];
          for (let ot = 0; ot <= rt; ot++) for (let yt = 0; yt <= wt; yt++) {
            const Xt = 25 * ot / rt, Ft = at * yt / wt, Pe = 25 * Math.sin(Ft), Ge = 25 * Math.cos(Ft) - 25 * Math.cos(at);
            Tt.push([
              Xt,
              Pe,
              Ge
            ]);
          }
          const Et = [];
          for (let ot = 0; ot < rt; ot++) for (let yt = 0; yt < wt; yt++) {
            const Xt = ot * (wt + 1) + yt, Ft = (ot + 1) * (wt + 1) + yt, Pe = (ot + 1) * (wt + 1) + (yt + 1), Ge = ot * (wt + 1) + (yt + 1);
            Et.push([
              Xt,
              Ft,
              Pe,
              Ge
            ]);
          }
          const Ot = {
            elasticities: /* @__PURE__ */ new Map(),
            shearModuli: /* @__PURE__ */ new Map(),
            thicknesses: /* @__PURE__ */ new Map(),
            poissonsRatios: /* @__PURE__ */ new Map()
          }, vo = 432e6 / (2 * 1);
          for (let ot = 0; ot < Et.length; ot++) Ot.elasticities.set(ot, 432e6), Ot.shearModuli.set(ot, vo), Ot.thicknesses.set(ot, 0.25), Ot.poissonsRatios.set(ot, 0);
          const to = /* @__PURE__ */ new Map();
          for (let ot = 0; ot <= rt; ot++) for (let yt = 0; yt <= wt; yt++) {
            const Xt = ot * (wt + 1) + yt, Ft = [
              false,
              false,
              false,
              false,
              false,
              false
            ];
            ot === 0 && (Ft[0] = true, Ft[4] = true, Ft[5] = true), ot === rt && (Ft[1] = true, Ft[2] = true, Ft[3] = true), yt === 0 && (Ft[1] = true, Ft[3] = true, Ft[5] = true), Ft.some((Pe) => Pe) && to.set(Xt, Ft);
          }
          const Ut = /* @__PURE__ */ new Map();
          for (const ot of Et) {
            const yt = Tt[ot[0]], Xt = Tt[ot[1]], Ft = Tt[ot[2]], Pe = Tt[ot[3]], Ge = [
              Ft[0] - yt[0],
              Ft[1] - yt[1],
              Ft[2] - yt[2]
            ], Qe = [
              Pe[0] - Xt[0],
              Pe[1] - Xt[1],
              Pe[2] - Xt[2]
            ], et = Ge[1] * Qe[2] - Ge[2] * Qe[1], Gt = Ge[2] * Qe[0] - Ge[0] * Qe[2], Po = Ge[0] * Qe[1] - Ge[1] * Qe[0], ln = -90 * (0.5 * Math.sqrt(et * et + Gt * Gt + Po * Po)) / 4;
            for (const bn of ot) {
              const oa = Ut.get(bn) || [
                0,
                0,
                0,
                0,
                0,
                0
              ];
              oa[2] += ln, Ut.set(bn, oa);
            }
          }
          try {
            const ot = Pt(Tt, Et, {
              supports: to,
              loads: Ut
            }, Ot), yt = wt, Xt = ((_f2 = (_e3 = ot.deformations) == null ? void 0 : _e3.get(yt)) == null ? void 0 : _f2[2]) ?? 0;
            te.push({
              name: "Scordelis-Lo Barrel Vault",
              formulation: `Shell Q4 (${rt}x${wt} mesh), Mindlin-Reissner + incompatible modes`,
              nodes: Tt,
              elements: Et,
              results: [
                {
                  label: "Uz midspan free edge (ft)",
                  awatif: Math.abs(Xt),
                  reference: 0.3086,
                  refSource: "Wilson (2004) / MacNeal-Harder"
                }
              ]
            });
          } catch (ot) {
            te.push({
              name: "Scordelis-Lo Barrel Vault",
              formulation: "ERROR: " + ot.message,
              nodes: Tt,
              elements: Et,
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
        if (d(te), te.length > 0) {
          const ee = te[te.length - 1];
          e.nodes.val = ee.nodes, e.elements.val = ee.elements;
          const ue = /* @__PURE__ */ new Map(), Ee = /* @__PURE__ */ new Map(), oe = Math.max(...ee.nodes.map((Se) => Se[2]));
          ee.nodes.forEach((Se, He) => {
            Math.abs(Se[2]) < 0.01 && ue.set(He, [
              true,
              true,
              true,
              true,
              true,
              true
            ]), Math.abs(Se[2] - oe) < 0.01 && Ee.set(He, [
              10,
              0,
              0,
              0,
              0,
              0
            ]);
          }), e.nodeInputs.val = {
            supports: ue,
            loads: Ee
          }, e.elementInputs.val = {}, e.deformOutputs.val = {}, e.analyzeOutputs.val = {};
        }
      }
      function n(g) {
        const S = 15e3 * Math.sqrt(210) * 10, v = [];
        v.push(`$ File exported from Awatif FEM Validation: ${g.name}`), v.push(" "), v.push("$ PROGRAM INFORMATION"), v.push('  PROGRAM  "ETABS"  VERSION "22.6.0"  '), v.push(""), v.push("$ CONTROLS"), v.push('  UNITS  "TONF"  "M"  "C"  '), v.push("");
        const F = /* @__PURE__ */ new Set();
        g.nodes.forEach((N) => F.add(Math.round(N[1] * 1e4) / 1e4));
        const K = [
          ...F
        ].sort((N, ce) => N - ce), U = K.map((N, ce) => ce === 0 ? "Base" : `Level_${ce}`), ae = /* @__PURE__ */ new Map();
        K.forEach((N, ce) => ae.set(N, U[ce])), v.push("$ STORIES - IN SEQUENCE FROM TOP");
        for (let N = K.length - 1; N >= 1; N--) v.push(`  STORY "${U[N]}"  HEIGHT ${K[N] - K[N - 1]} MASTERSTORY "Yes"  `);
        v.push(`  STORY "Base"  ELEV ${K[0]} `), v.push(""), v.push("$ MATERIAL PROPERTIES"), v.push('  MATERIAL  "CONC"    TYPE "Concrete"    WEIGHTPERVOLUME 2.4'), v.push(`  MATERIAL  "CONC"    SYMTYPE "Isotropic"  E ${S}  U 0.2  A 1E-05`), v.push(""), v.push("$ FRAME SECTIONS"), v.push('  FRAMESECTION  "COL30"  MATERIAL "CONC"  SHAPE "Concrete Rectangular"  D 0.3 B 0.3 '), v.push('  FRAMESECTION  "VIGA"  MATERIAL "CONC"  SHAPE "Concrete Rectangular"  D 0.4 B 0.25 '), v.push("");
        const Q = g.elements.some((N) => N.length === 4);
        Q && (v.push("$ WALL/SLAB/DECK SECTIONS"), v.push('  SHELLPROP  "Muro20"  PROPTYPE  "Wall"  MATERIAL "CONC"  MODELINGTYPE "ShellThick"  WALLTHICKNESS 0.2 '), v.push(""));
        const X = /* @__PURE__ */ new Map();
        let ie = 0;
        g.nodes.forEach((N) => {
          const ce = `${N[0]},${N[2]}`;
          X.has(ce) || X.set(ce, `${++ie}`);
        }), v.push("$ POINT COORDINATES");
        for (const [N, ce] of X) {
          const [te, de] = N.split(",").map(Number);
          v.push(`  POINT "${ce}"  ${te} ${de} `);
        }
        v.push("");
        const re = (N) => {
          const ce = g.nodes[N], te = `${ce[0]},${ce[2]}`;
          return {
            pt: X.get(te) || "1",
            story: ae.get(Math.round(ce[1] * 1e4) / 1e4) || "Base"
          };
        };
        v.push("$ LINE CONNECTIVITIES");
        const Me = [];
        if (g.elements.forEach((N, ce) => {
          if (N.length !== 2) return;
          const te = g.nodes[N[0]], de = g.nodes[N[1]], ee = Math.abs(de[1] - te[1]), ue = Math.sqrt((de[0] - te[0]) ** 2 + (de[2] - te[2]) ** 2), Ee = ee > ue * 0.5, oe = re(N[0]), Se = re(N[1]), He = Ee ? "COL30" : "VIGA";
          Ee ? (v.push(`  LINE  "E${ce + 1}"  COLUMN  "${oe.pt}"  "${oe.pt}"  1`), Me.push(`  LINEASSIGN  "E${ce + 1}"  "${Se.story}"  SECTION "${He}"  `)) : (v.push(`  LINE  "E${ce + 1}"  BEAM  "${oe.pt}"  "${Se.pt}"  0`), Me.push(`  LINEASSIGN  "E${ce + 1}"  "${oe.story}"  SECTION "${He}"  `));
        }), v.push(""), Q) {
          v.push("$ AREA CONNECTIVITIES");
          const N = [];
          g.elements.forEach((ce, te) => {
            if (ce.length !== 4) return;
            const de = ce.map((ee) => re(ee));
            v.push(`  AREA "W${te + 1}"  PANEL  4  "${de[0].pt}"  "${de[1].pt}"  "${de[2].pt}"  "${de[3].pt}"  1  1  0  0  `), N.push(`  AREAASSIGN  "W${te + 1}"  "${de[2].story}"  SECTION "Muro20"  `);
          }), v.push(""), v.push("$ AREA ASSIGNS"), N.forEach((ce) => v.push(ce)), v.push("");
        }
        v.push("$ POINT ASSIGNS"), g.nodes.forEach((N, ce) => {
          if (Math.abs(N[1]) < 0.01) {
            const te = re(ce);
            v.push(`  POINTASSIGN  "${te.pt}"  "${te.story}"  RESTRAINT "UX UY UZ RX RY RZ"  `);
          }
        }), v.push(""), v.push("$ LINE ASSIGNS"), Me.forEach((N) => v.push(N)), v.push(""), v.push("$ LOAD PATTERNS"), v.push('  LOADPATTERN "Lat"  TYPE  "Other"  SELFWEIGHT  0'), v.push(""), v.push("$ POINT OBJECT LOADS");
        const Te = Math.max(...g.nodes.map((N) => N[1]));
        return g.nodes.forEach((N, ce) => {
          if (Math.abs(N[1] - Te) < 0.01) {
            const te = re(ce);
            v.push(`  POINTLOAD  "${te.pt}"  "${te.story}"  "Lat"  TYPE "FORCE"  FX 10`);
          }
        }), v.push(""), v.push("  END"), v.push("$ END OF MODEL FILE"), v.join(`\r
`);
      }
      function l(g) {
        const S = 15e3 * Math.sqrt(210) * 10, v = [];
        v.push(`"""ETABS API Validation: ${g.name}`), v.push('Generated by Awatif FEM Studio"""'), v.push("import comtypes.client, time, math"), v.push(""), v.push("helper = comtypes.client.CreateObject('ETABSv1.Helper')"), v.push("helper = helper.QueryInterface(comtypes.gen.ETABSv1.cHelper)"), v.push('myETABS = helper.CreateObjectProgID("CSI.ETABS.API.ETABSObject")'), v.push("myETABS.ApplicationStart()"), v.push("time.sleep(10)"), v.push("SapModel = myETABS.SapModel"), v.push("SapModel.InitializeNewModel()"), v.push("SapModel.File.NewBlank()"), v.push("SapModel.SetPresentUnits(12)  # tonf_m_C"), v.push(""), v.push(`E = ${S}`), v.push('SapModel.PropMaterial.SetMaterial("CONC", 2)'), v.push('SapModel.PropMaterial.SetMPIsotropic("CONC", E, 0.2, 5.5e-6)'), v.push('SapModel.PropFrame.SetRectangle("COL30", "CONC", 0.30, 0.30)'), v.push('SapModel.PropFrame.SetRectangle("VIGA", "CONC", 0.40, 0.25)'), g.elements.some((U) => U.length === 4) && v.push('SapModel.PropArea.SetWall("Muro20", 6, False, "CONC", 0.20)'), v.push(""), v.push("# Add elements"), v.push("FN = ' '"), g.elements.forEach((U, ae) => {
          if (U.length === 2) {
            const Q = g.nodes[U[0]], X = g.nodes[U[1]], ie = Math.abs(X[1] - Q[1]), re = Math.sqrt((X[0] - Q[0]) ** 2 + (X[2] - Q[2]) ** 2), Me = ie > re * 0.5 ? "COL30" : "VIGA";
            v.push(`[FN,r]=SapModel.FrameObj.AddByCoord(${Q[0]},${Q[2]},${Q[1]}, ${X[0]},${X[2]},${X[1]}, FN,"${Me}","E${ae + 1}","Global")`);
          } else if (U.length === 4) {
            const Q = U.map((X) => g.nodes[X]);
            v.push(`SapModel.AreaObj.AddByCoord(4, [${Q.map((X) => X[0]).join(",")}], [${Q.map((X) => X[2]).join(",")}], [${Q.map((X) => X[1]).join(",")}], "", "Muro20")`);
          }
        }), v.push(""), v.push("# Supports at Z=0"), v.push("names = SapModel.PointObj.GetNameList()"), v.push("for i in range(int(names[0])):"), v.push("    c = SapModel.PointObj.GetCoordCartesian(names[1][i])"), v.push("    if abs(float(c[2])) < 0.01:"), v.push("        SapModel.PointObj.SetRestraint(names[1][i], [True]*6)"), v.push(""), v.push("# Load at top"), v.push('SapModel.LoadPatterns.Add("Lat", 8, 0, True)');
        const K = Math.max(...g.nodes.map((U) => U[1]));
        v.push("names = SapModel.PointObj.GetNameList()"), v.push("for i in range(int(names[0])):"), v.push("    c = SapModel.PointObj.GetCoordCartesian(names[1][i])"), v.push(`    if abs(float(c[2]) - ${K}) < 0.01:`), v.push('        SapModel.PointObj.SetLoadForce(names[1][i], "Lat", [10,0,0,0,0,0])'), v.push(""), v.push(`SapModel.File.Save(r"C:\\Users\\j-b-j\\Downloads\\validation_${g.name.replace(/[^a-zA-Z0-9]/g, "_")}.EDB")`), v.push("time.sleep(1)"), v.push("SapModel.Analyze.RunAnalysis()"), v.push("time.sleep(5)"), v.push(""), v.push("# Results"), v.push("SapModel.Results.Setup.DeselectAllCasesAndCombosForOutput()"), v.push('SapModel.Results.Setup.SetCaseSelectedForOutput("Lat")'), v.push(`print(f"\\n=== ETABS: ${g.name} ===")`), v.push("names = SapModel.PointObj.GetNameList()"), v.push("for i in range(int(names[0])):"), v.push("    name = names[1][i]"), v.push("    c = SapModel.PointObj.GetCoordCartesian(name)"), v.push("    NR=0;Obj=[];Elm=[];AC=[];ST=[];SN=[];U1=[];U2=[];U3=[];R1=[];R2=[];R3=[]"), v.push("    [NR,Obj,Elm,AC,ST,SN,U1,U2,U3,R1,R2,R3,ret]=SapModel.Results.JointDispl(name,0,NR,Obj,Elm,AC,ST,SN,U1,U2,U3,R1,R2,R3)"), v.push("    if NR > 0:"), v.push('        print(f"  {name} Z={float(c[2]):.1f}: Ux={U1[0]*100:.4f} cm")'), v.push(""), v.push('print("\\nAwatif results:")');
        for (const U of g.results) v.push(`print(f"  ${U.label}: Awatif=${U.awatif.toFixed(4)}, ETABS=${U.reference.toFixed(4)}, Ratio={${U.awatif.toFixed(4)}/${U.reference.toFixed(4)}:.4f}")`);
        return v.push("SapModel.View.RefreshView(0, False)"), v.join(`
`);
      }
      function s(g, S) {
        const v = new Blob([
          g
        ], {
          type: "text/plain"
        }), F = URL.createObjectURL(v), K = document.createElement("a");
        K.href = F, K.download = S, K.click(), URL.revokeObjectURL(F);
      }
      function d(g) {
        let S = document.getElementById("test-results-overlay");
        S && S.remove(), S = document.createElement("div"), S.id = "test-results-overlay", S.style.cssText = `position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);
        background:#1a1a2e;color:#eee;border:2px solid #16213e;border-radius:8px;padding:20px;
        z-index:10000;max-width:750px;width:90%;max-height:80vh;overflow-y:auto;font-family:monospace;font-size:13px;
        box-shadow:0 10px 40px rgba(0,0,0,0.5);`;
        let v = `<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px">
        <h3 style="margin:0;color:#00d4ff">Awatif FEM Validation</h3>
        <button onclick="this.parentElement.parentElement.remove()" style="background:none;border:none;color:#888;font-size:18px;cursor:pointer">X</button>
      </div>`, F = true;
        window.__awatifTests = g;
        for (let U = 0; U < g.length; U++) {
          const ae = g[U];
          v += '<div style="margin-bottom:16px;border:1px solid #333;border-radius:6px;padding:10px">', v += '<div style="display:flex;justify-content:space-between;align-items:center">', v += `<div style="font-weight:bold;color:#00d4ff">${ae.name}</div>`, v += "<div>", v += `<button onclick="window.__awatifDownloadE2k(${U})" style="background:#1e3a5f;color:#aaa;border:1px solid #444;padding:2px 6px;font-size:10px;cursor:pointer;margin-right:4px;border-radius:3px">e2k</button>`, v += `<button onclick="window.__awatifDownloadPy(${U})" style="background:#2a1e3a;color:#aaa;border:1px solid #444;padding:2px 6px;font-size:10px;cursor:pointer;border-radius:3px">py</button>`, v += "</div></div>", v += `<div style="color:#888;font-size:11px;margin-bottom:8px">${ae.formulation}</div>`, v += `<table style="width:100%;border-collapse:collapse;font-size:12px">
          <tr style="color:#888"><td style="padding:3px 6px">Measure</td><td style="text-align:right">Awatif</td><td style="text-align:right">Reference</td><td style="text-align:right">Ratio</td><td style="text-align:right">Source</td><td style="text-align:center"></td></tr>`;
          for (const Q of ae.results) {
            const X = Q.reference !== 0 ? Q.awatif / Q.reference : 1, ie = Math.abs(X - 1) < 0.05;
            ie || (F = false);
            const re = ie ? "#4caf50" : "#f44336", Me = ie ? "PASS" : "FAIL";
            v += `<tr style="border-top:1px solid #333">
            <td style="padding:3px 6px">${Q.label}</td>
            <td style="text-align:right;color:#fff">${Q.awatif.toFixed(4)}</td>
            <td style="text-align:right;color:#aaa">${Q.reference.toFixed(4)}</td>
            <td style="text-align:right;color:${re};font-weight:bold">${X.toFixed(4)}</td>
            <td style="text-align:right;color:#888;font-size:11px">${Q.refSource}</td>
            <td style="text-align:center;color:${re};font-size:10px;font-weight:bold">${Me}</td></tr>`;
          }
          v += "</table></div>";
        }
        v += F ? '<div style="color:#4caf50;font-weight:bold;text-align:center;margin-top:8px">ALL TESTS PASSED (< 5% error vs ETABS)</div>' : '<div style="color:#f44336;font-weight:bold;text-align:center;margin-top:8px">Some tests exceeded 5% tolerance</div>', S.innerHTML = v, document.body.appendChild(S), window.__awatifDownloadE2k = (U) => {
          const ae = window.__awatifTests[U], Q = ae.name.replace(/[^a-zA-Z0-9]/g, "_").toLowerCase();
          s(n(ae), `${Q}.e2k`);
        }, window.__awatifDownloadPy = (U) => {
          const ae = window.__awatifTests[U], Q = ae.name.replace(/[^a-zA-Z0-9]/g, "_").toLowerCase();
          s(l(ae), `${Q}_etabs.py`);
        };
      }
      (_h = Le.querySelector("#cad3d-export")) == null ? void 0 : _h.addEventListener("click", (g) => {
        g.stopPropagation(), Ta();
      });
      let a = "";
      const i = Le.querySelector("#cad3d-io-menu"), p = Le.querySelector("#cad3d-io-file");
      function r(g, S) {
        e.nodes.val = g.nodes, e.elements.val = g.elements, e.nodeInputs.val = g.nodeInputs, e.elementInputs.val = g.elementInputs, g.sectionShapes && g.elementInputs && (g.elementInputs.sectionShapes = g.sectionShapes), e.deformOutputs.val = {}, e.analyzeOutputs.val = {};
        const v = g.elements.filter((K) => K.length === 2).length, F = g.elements.filter((K) => K.length >= 3).length;
        console.log(`${S} (${g.nodes.length} nodos, ${v} frames, ${F} shells): ${g.nodes.length} nodes, ${g.elements.length} elements`), setTimeout(() => It(), 50);
      }
      function c(g, S) {
        var _a3, _b2, _c2;
        const v = {};
        g.elementInfo.forEach((X) => v[X.category] = (v[X.category] || 0) + 1), (_a3 = document.getElementById("ifc-filter-panel")) == null ? void 0 : _a3.remove();
        const F = document.createElement("div");
        F.id = "ifc-filter-panel", F.style.cssText = `position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);
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
        ], ae = {
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
        let Q = `<h3 style="color:#00ccff;margin:0 0 12px">IFC \u2192 Modelo Anal\xEDtico</h3>
        <div style="color:#888;margin-bottom:10px">Selecciona qu\xE9 convertir a FEM:</div>
        <div style="border:1px solid #444;border-radius:6px;padding:8px;margin-bottom:8px">
          <div style="color:#33ff33;font-weight:bold;margin-bottom:4px">Estructural</div>`;
        for (const X of K) {
          const ie = v[X] || 0;
          if (ie === 0) continue;
          const re = [
            "column",
            "beam",
            "slab"
          ].includes(X) ? "checked" : "";
          Q += `<label style="display:flex;align-items:center;gap:6px;padding:2px 0">
          <input type="checkbox" data-ifc-cat="${X}" ${re}>
          <span>${ae[X] || X}</span>
          <span style="color:#888;margin-left:auto">(${ie})</span>
        </label>`;
        }
        Q += `</div><div style="border:1px solid #333;border-radius:6px;padding:8px;margin-bottom:12px">
        <div style="color:#ff6666;font-weight:bold;margin-bottom:4px">No estructural (solo visual)</div>`;
        for (const X of U) {
          const ie = v[X] || 0;
          ie !== 0 && (Q += `<label style="display:flex;align-items:center;gap:6px;padding:2px 0;color:#888">
          <input type="checkbox" data-ifc-cat="${X}" disabled>
          <span>${ae[X] || X}</span>
          <span style="margin-left:auto">(${ie})</span>
        </label>`);
        }
        Q += `</div>
        <div style="display:flex;gap:8px">
          <button id="ifc-gen-analytical" style="flex:1;padding:8px;background:#0f3460;color:#fff;border:none;border-radius:6px;cursor:pointer;font-size:13px;font-weight:bold">
            \u{1F527} Generar Modelo Anal\xEDtico
          </button>
          <button id="ifc-cancel" style="padding:8px 12px;background:#333;color:#aaa;border:1px solid #555;border-radius:6px;cursor:pointer">\u2715</button>
        </div>`, F.innerHTML = Q, document.body.appendChild(F), F.querySelectorAll("input[data-ifc-cat]").forEach((X) => {
          X.addEventListener("change", () => {
            const ie = X.dataset.ifcCat, re = g.detailCategories.get(ie);
            if (re) {
              re.visible = X.checked;
              const Me = lt();
              Me && Me.render();
            }
          });
        }), (_b2 = F.querySelector("#ifc-gen-analytical")) == null ? void 0 : _b2.addEventListener("click", () => {
          var _a4;
          const X = /* @__PURE__ */ new Set();
          F.querySelectorAll("input[data-ifc-cat]:checked").forEach((te) => {
            X.add(te.dataset.ifcCat);
          });
          const ie = S.nodes.map((te) => [
            te.x,
            te.y,
            te.z
          ]), re = [], Me = {
            elasticities: /* @__PURE__ */ new Map(),
            shearModuli: /* @__PURE__ */ new Map(),
            areas: /* @__PURE__ */ new Map(),
            momentsOfInertiaZ: /* @__PURE__ */ new Map(),
            momentsOfInertiaY: /* @__PURE__ */ new Map(),
            torsionalConstants: /* @__PURE__ */ new Map(),
            densities: /* @__PURE__ */ new Map(),
            sectionShapes: /* @__PURE__ */ new Map()
          }, Te = {
            supports: /* @__PURE__ */ new Map(),
            loads: /* @__PURE__ */ new Map()
          };
          let N = 0;
          for (const te of S.elements) if (X.has(te.category) && te.type === "frame" && te.nodeIds.length >= 2) {
            re.push(te.nodeIds);
            const de = ((_a4 = S.materials) == null ? void 0 : _a4.get(te.material)) || {
              E: 2132888792e-2,
              nu: 0.2,
              rho: 2.4
            }, ee = te.b || 0.3, ue = te.h || 0.3, Ee = ee * ue, oe = ee * ue * ue * ue / 12, Se = ue * ee * ee * ee / 12, He = ee * ue * (ee * ee + ue * ue) / 12, at = de.E / (2 * (1 + de.nu));
            Me.elasticities.set(N, de.E), Me.shearModuli.set(N, at), Me.areas.set(N, Ee), Me.momentsOfInertiaZ.set(N, Se), Me.momentsOfInertiaY.set(N, oe), Me.torsionalConstants.set(N, He), Me.densities.set(N, de.rho), Me.sectionShapes.set(N, {
              type: "rect",
              b: ee,
              h: ue,
              name: te.sectionName
            }), N++;
          }
          const ce = Math.min(...ie.map((te) => te[2]));
          ie.forEach((te, de) => {
            Math.abs(te[2] - ce) < 0.05 && Te.supports.set(de, [
              true,
              true,
              true,
              true,
              true,
              true
            ]);
          });
          for (const [, te] of g.detailCategories) {
            const de = lt();
            de && de.scene.remove(te);
          }
          r({
            nodes: ie,
            elements: re,
            nodeInputs: Te,
            elementInputs: Me,
            sectionShapes: Me.sectionShapes,
            info: {
              nNodes: ie.length,
              nFrames: re.length
            }
          }, "IFC analytical"), F.remove();
        }), (_c2 = F.querySelector("#ifc-cancel")) == null ? void 0 : _c2.addEventListener("click", () => {
          for (const [, ie] of g.detailCategories) {
            const re = lt();
            re && re.scene.remove(ie);
          }
          const X = lt();
          X && X.render(), F.remove();
        });
      }
      function m(g) {
        D = /* @__PURE__ */ new Set(), Y = /* @__PURE__ */ new Set(), $e = /* @__PURE__ */ new Map(), ze = /* @__PURE__ */ new Map();
        const S = /* @__PURE__ */ new Map();
        for (let re = 0; re < g.stories.length; re++) S.set(g.stories[re].name, re);
        for (let re = 0; re < g.elementTypes.length; re++) {
          const Me = g.elementTypes[re], Te = g.elementStories[re], N = S.get(Te) ?? 0;
          $e.set(re, N), Me === "COLUMN" || Me === "BRACE" ? D.add(re) : Y.add(re);
        }
        z = "edificio";
        const v = g.grids.filter((re) => re.dir === "X").sort((re, Me) => re.coord - Me.coord), F = g.grids.filter((re) => re.dir === "Y").sort((re, Me) => re.coord - Me.coord);
        let K, U, ae, Q;
        if (v.length > 0 || F.length > 0) K = v.map((re) => re.coord), U = F.map((re) => re.coord), ae = v.map((re) => re.label), Q = F.map((re) => re.label);
        else {
          const re = new Set(g.nodes.map((Te) => Te[0])), Me = new Set(g.nodes.map((Te) => Te[1]));
          K = [
            ...re
          ].sort((Te, N) => Te - N), U = [
            ...Me
          ].sort((Te, N) => Te - N), ae = K.map((Te, N) => String(N + 1)), Q = U.map((Te, N) => String.fromCharCode(65 + N));
        }
        const X = g.stories.length > 0 ? Math.max(...g.stories.map((re) => re.elev)) : Math.max(...g.nodes.map((re) => re[2]));
        Ye = K, Ze = U, bt = X, setTimeout(() => {
          It(), Qo(K, U, X, ae, Q), zn(g.stories, K, U), jn(), Wn();
        }, 100);
        const ie = {
          COLUMN: 0,
          BEAM: 0,
          BRACE: 0
        };
        for (const re of g.elementTypes) ie[re]++;
        console.log(`E2K grids: X=[${ae.join(",")}] Y=[${Q.join(",")}]`), console.log(`E2K stories: ${g.stories.map((re) => `${re.name}@${re.elev.toFixed(2)}`).join(", ")}`), console.log(`E2K elements: ${ie.COLUMN} columns, ${ie.BEAM} beams, ${ie.BRACE} braces`), nt();
      }
      function w(g, S) {
        const v = new Blob([
          g
        ], {
          type: "text/plain"
        }), F = URL.createObjectURL(v), K = document.createElement("a");
        K.href = F, K.download = S, K.click(), URL.revokeObjectURL(F);
      }
      i && i.addEventListener("change", () => {
        if (a = i.value, i.value = "", a.startsWith("import")) a === "import-e2k" ? p.accept = ".e2k,.E2K" : a === "import-s2k" ? p.accept = ".s2k,.S2K,.$2k" : a === "import-ifc" ? p.accept = ".ifc,.IFC" : a === "import-py" ? p.accept = ".py" : a === "import-tcl" && (p.accept = ".tcl"), p.click();
        else if (a.startsWith("export")) {
          const g = {
            nodes: e.nodes.val,
            elements: e.elements.val,
            nodeInputs: e.nodeInputs.val,
            elementInputs: e.elementInputs.val
          };
          try {
            a === "export-e2k" ? w(Pl({
              ...g,
              title: "Awatif Model",
              e2kModel: Xe ?? void 0
            }), "model.e2k") : a === "export-s2k" ? w(Fl({
              ...g,
              title: "Awatif Model"
            }), "model.s2k") : a === "export-py" ? w(ql(g), "model_opensees.py") : a === "export-tcl" && w(_l(g), "model_opensees.tcl");
          } catch (S) {
            alert("Export error: " + S.message);
          }
        }
      }), p && p.addEventListener("change", () => {
        var _a3;
        const g = (_a3 = p.files) == null ? void 0 : _a3[0];
        if (!g) return;
        if (a === "import-ifc") {
          const v = new FileReader();
          v.onload = async () => {
            const F = v.result;
            try {
              const K = lt();
              if (!K) {
                alert("Viewer not ready");
                return;
              }
              console.log("IFC: Loading 3D geometry...");
              const U = await Vl(K.scene, F);
              console.log(`IFC: ${U.meshCount} meshes loaded, bbox:`, U.bbox);
              const ae = new Ne();
              U.bbox.getCenter(ae);
              const Q = new Ne();
              U.bbox.getSize(Q);
              const X = Math.max(Q.x, Q.y, Q.z);
              K.controls.target.copy(ae), K.camera.position.set(ae.x + X, ae.y + X * 0.5, ae.z + X), K.camera.lookAt(ae), K.controls.maxDistance = X * 5, K.controls.update(), K.render(), window.__ifcLoadResult = U, window.__ifcArrayBuffer = F;
              const ie = new FileReader();
              ie.onload = () => {
                const re = ie.result, Me = Gl(re);
                window.__ifcAnalytical = Me;
                const Te = {};
                U.elementInfo.forEach((N) => Te[N.category] = (Te[N.category] || 0) + 1), console.log("IFC categories:", Te), console.log(`IFC: ${U.elementInfo.size} geometric elements, ${Me.elements.length} analytical elements`), c(U, Me);
              }, ie.readAsText(g);
            } catch (K) {
              alert("IFC error: " + K.message), console.error(K);
            }
          }, v.readAsArrayBuffer(g), p.value = "";
          return;
        }
        const S = new FileReader();
        S.onload = () => {
          const v = S.result;
          try {
            if (a === "import-e2k") {
              const F = zl(v);
              Xe = F, r(F, "E2K imported"), m(F);
            } else if (a === "import-s2k") {
              const F = Al(v);
              r({
                nodes: F.nodes,
                elements: F.elements,
                nodeInputs: F.nodeInputs,
                elementInputs: F.elementInputs,
                sectionShapes: F.sectionShapes,
                info: F.info
              }, "S2K imported");
            } else if (a === "import-py") {
              const F = Dl(v);
              r(F, "OpenSeesPy imported");
            } else if (a === "import-tcl") {
              const F = Bl(v);
              r(F, "OpenSees Tcl imported");
            }
          } catch (F) {
            alert("Import error: " + F.message), console.error(F);
          }
        }, S.readAsText(g), p.value = "";
      });
      const E = Le.querySelector("#cad3d-force-unit");
      E && (E.value = b, E.addEventListener("change", (g) => {
        g.stopPropagation(), b = E.value, M = qo(b, P), z && st(z);
      }));
      const y = Le.querySelector("#cad3d-length-unit");
      y && (y.value = P, y.addEventListener("change", (g) => {
        g.stopPropagation(), P = y.value, M = qo(b, P), z && st(z);
      })), Le.querySelectorAll("[data-preset]").forEach((g) => {
        g.addEventListener("click", (S) => {
          S.stopPropagation();
          const v = g.dataset.preset, F = H[v];
          F && (b = F.force, P = F.length, V = F.stress, M = qo(b, P), E && (E.value = b), y && (y.value = P), Le.querySelectorAll("[data-preset]").forEach((K) => {
            K.classList.toggle("active", K.dataset.preset === v);
          }), z && st(z), console.log(`Preset: ${v} \u2192 ${b}+${P}, stress: ${V.label}`));
        });
      }), (_i = Le.querySelector("#cad3d-log")) == null ? void 0 : _i.addEventListener("click", (g) => {
        g.stopPropagation(), Ha();
      }), (_j = Le.querySelector("#cad3d-pushover")) == null ? void 0 : _j.addEventListener("click", (g) => {
        g.stopPropagation(), ja();
      }), (_k = Le.querySelector("#cad3d-nonlinear")) == null ? void 0 : _k.addEventListener("click", (g) => {
        g.stopPropagation(), Ga();
      }), (_l2 = Le.querySelector("#cad3d-fem-solver")) == null ? void 0 : _l2.addEventListener("click", (g) => {
        g.stopPropagation(), Ja();
      }), (_m = Le.querySelector("#cad3d-calc")) == null ? void 0 : _m.addEventListener("click", (g) => {
        g.stopPropagation(), na(async () => {
          const { openCalcPanel: S } = await import("./calcPanel-C1Mz4Itg.js").then(async (m2) => {
            await m2.__tla;
            return m2;
          });
          return {
            openCalcPanel: S
          };
        }, __vite__mapDeps([0,1,2,3,4,5]), import.meta.url).then(({ openCalcPanel: S }) => {
          var _a3, _b2;
          const v = {
            nodes: e.nodes.val,
            elements: e.elements.val,
            nodeInputs: ((_a3 = e.nodeInputs) == null ? void 0 : _a3.val) ?? {},
            elementInputs: ((_b2 = e.elementInputs) == null ? void 0 : _b2.val) ?? {},
            modelName: z ? z.charAt(0).toUpperCase() + z.slice(1) : "Modelo"
          };
          S(v);
        });
      }), (_n2 = Le.querySelector("#cad3d-modal")) == null ? void 0 : _n2.addEventListener("click", (g) => {
        var _a3, _b2;
        g.stopPropagation(), _e = !_e, (_a3 = Le.querySelector("#cad3d-modal")) == null ? void 0 : _a3.classList.toggle("active", _e);
        const v = Le.querySelector("#cad3d-mode-prev"), F = Le.querySelector("#cad3d-mode-next"), K = Le.querySelector("#cad3d-mode-label"), U = Le.querySelector("#cad3d-modal-scale");
        if (_e) {
          const ae = lt();
          ((_b2 = ae == null ? void 0 : ae.settings) == null ? void 0 : _b2.loads) && (De = ae.settings.loads.rawVal, ae.settings.loads.val = false), Nn(), v.style.display = "", F.style.display = "", K.style.display = "", U && (U.style.display = ""), f();
        } else qn(), v.style.display = "none", F.style.display = "none", K.style.display = "none", U && (U.style.display = "none"), z && z !== "placa-q4" && z !== "placa-3q" && Oe(), setTimeout(() => {
          var _a4;
          const ae = lt();
          ((_a4 = ae == null ? void 0 : ae.settings) == null ? void 0 : _a4.loads) && De && (ae.settings.loads.val = true);
        }, 600);
      });
      function f() {
        var _a3;
        const g = Le.querySelector("#cad3d-mode-label");
        if (!g || !(Fe == null ? void 0 : Fe.frequencies)) return;
        const S = Fe.frequencies[xe], v = S > 0 ? 1 / S : 0, F = [
          0,
          0,
          0,
          0,
          0,
          0
        ];
        for (let K = 0; K <= xe; K++) {
          const U = (_a3 = Fe.massParticipation) == null ? void 0 : _a3[K];
          if (U) for (let ae = 0; ae < 6; ae++) F[ae] += U[ae];
        }
        g.textContent = `Modo ${xe + 1} \u2014 ${S.toFixed(2)} Hz \u2014 T=${v.toFixed(3)}s \u2014 \u03A3Ux=${(F[0] * 100).toFixed(1)}% \u03A3Uy=${(F[1] * 100).toFixed(1)}% \u03A3Rz=${(F[5] * 100).toFixed(1)}%`;
      }
      (_o2 = Le.querySelector("#cad3d-mode-prev")) == null ? void 0 : _o2.addEventListener("click", (g) => {
        if (g.stopPropagation(), !(Fe == null ? void 0 : Fe.modeShapes)) return;
        xe = (xe - 1 + Fe.modeShapes.length) % Fe.modeShapes.length;
        const S = Fe.modeShapes[xe], { extent: v } = Eo();
        let F = 0;
        for (let K = 0; K < ke.length; K++) {
          const U = S[K * 6] || 0, ae = S[K * 6 + 1] || 0, Q = S[K * 6 + 2] || 0;
          F = Math.max(F, Math.sqrt(U * U + ae * ae + Q * Q));
        }
        Je = F > 1e-12 ? v * 0.05 / F : 1, on(), f();
      }), (_p = Le.querySelector("#cad3d-mode-next")) == null ? void 0 : _p.addEventListener("click", (g) => {
        if (g.stopPropagation(), !(Fe == null ? void 0 : Fe.modeShapes)) return;
        xe = (xe + 1) % Fe.modeShapes.length;
        const S = Fe.modeShapes[xe], { extent: v } = Eo();
        let F = 0;
        for (let K = 0; K < ke.length; K++) {
          const U = S[K * 6] || 0, ae = S[K * 6 + 1] || 0, Q = S[K * 6 + 2] || 0;
          F = Math.max(F, Math.sqrt(U * U + ae * ae + Q * Q));
        }
        Je = F > 1e-12 ? v * 0.05 / F : 1, on(), f();
      });
      const h = Le.querySelector("#cad3d-modal-scale");
      h == null ? void 0 : h.addEventListener("mousedown", (g) => g.stopPropagation()), h == null ? void 0 : h.addEventListener("change", () => {
        _e && (Fe == null ? void 0 : Fe.modeShapes) && on();
      });
      const T = Le.querySelector("#cad3d-cli-toggle"), k = Le.querySelector("#cad3d-cli-panel"), $ = Le.querySelector("#cad3d-cli-output"), C = Le.querySelector("#cad3d-cmd"), B = [];
      let x = -1;
      T == null ? void 0 : T.addEventListener("click", (g) => {
        if (g.stopPropagation(), k) {
          const S = k.style.display !== "none";
          k.style.display = S ? "none" : "block", S || (C == null ? void 0 : C.focus(), $ && !$.textContent && ($.textContent = `CLI ready. Commands:
  cad.addNode(x, y, z)     cad.addFrame(i, j)
  cad.addSupport(n)        cad.addLoad(n, [fx,fy,fz,0,0,0])
  cad.frame([5,5],[3,3])   cad.building([5],[4],[3])
  cad.galpon(12,20,6,3)    cad.clear()
  cad.info()               cad.listNodes()
`));
        }
      }), C == null ? void 0 : C.addEventListener("mousedown", (g) => g.stopPropagation()), document.addEventListener("keydown", (g) => {
        var _a3;
        if ((g.ctrlKey || g.metaKey) && g.key === "z" && !g.shiftKey) {
          g.preventDefault(), Os();
          return;
        }
        if ((g.ctrlKey || g.metaKey) && (g.key === "y" || g.key === "z" && g.shiftKey)) {
          g.preventDefault(), Ns();
          return;
        }
        if ((g.key === "Delete" || g.key === "Backspace") && Mt.size > 0) {
          g.preventDefault(), Mt.forEach((S) => Z.add(S)), Mt.clear(), ho && (ho.remove(), ho = null), Oe();
          return;
        }
        if (g.key === "Escape") {
          if (go) if (kt !== null) {
            kt = null;
            const S = lt();
            jt && S && (S.scene.remove(jt), jt.geometry.dispose(), jt.material.dispose(), jt = null), Wt && S && (S.scene.remove(Wt), Wt.geometry.dispose(), Wt.material.dispose(), Wt = null), S == null ? void 0 : S.render();
          } else mn();
          Qt && un(), io && (io = false, Fo(), (_a3 = Le.querySelector("#cad3d-inspect")) == null ? void 0 : _a3.classList.remove("inspect-active"));
        }
      }), C == null ? void 0 : C.addEventListener("keydown", (g) => {
        if (g.stopPropagation(), g.key === "Enter") {
          const S = C.value.trim();
          if (S) {
            B.unshift(S), x = -1, $ && ($.textContent += `> ${S}
`);
            try {
              const v = new Function("cad", `return ${S}`)(tt);
              if (v !== void 0 && $) {
                const F = typeof v == "object" ? JSON.stringify(v, null, 2) : String(v);
                $.textContent += `${F}
`;
              }
            } catch (v) {
              $ && ($.textContent += `ERROR: ${v.message}
`);
            }
            $ && ($.scrollTop = $.scrollHeight), C.value = "";
          }
        } else g.key === "ArrowUp" ? (g.preventDefault(), B.length > 0 && x < B.length - 1 && (x++, C.value = B[x])) : g.key === "ArrowDown" && (g.preventDefault(), x > 0 ? (x--, C.value = B[x]) : (x = -1, C.value = ""));
      });
      let u = false, I = 0, A = 0, R = 0, j = 0;
      Le.addEventListener("mousedown", (g) => {
        const S = g.target.tagName;
        if (S === "BUTTON" || S === "INPUT" || S === "SELECT") return;
        u = true;
        const v = Le.getBoundingClientRect();
        Le.style.bottom = "unset", I = g.clientX, A = g.clientY, R = v.left, j = v.top, g.preventDefault();
      }), window.addEventListener("mousemove", (g) => {
        u && (g.preventDefault(), Le.style.left = R + (g.clientX - I) + "px", Le.style.top = j + (g.clientY - A) + "px");
      }), window.addEventListener("mouseup", () => {
        u = false;
      }), nt();
    }, 10);
    function lt() {
      const t = document.getElementById("viewer");
      return t ? t.__ctx : null;
    }
    function Eo() {
      const t = e.nodes.val;
      if (t.length === 0) return {
        center: new Ne(),
        extent: 10
      };
      let o = 1 / 0, n = 1 / 0, l = 1 / 0, s = -1 / 0, d = -1 / 0, a = -1 / 0;
      for (const [r, c, m] of t) r < o && (o = r), r > s && (s = r), c < n && (n = c), c > d && (d = c), m < l && (l = m), m > a && (a = m);
      const i = new Ne((o + s) / 2, (n + d) / 2, (l + a) / 2), p = Math.max(s - o, d - n, a - l, 1);
      return {
        center: i,
        extent: p
      };
    }
    function It(t = false) {
      const o = lt();
      if (!o) return;
      const { extent: n } = Eo();
      let l;
      n <= 5 ? l = Math.max(1, Math.ceil(n * 1.5)) : n <= 50 ? l = Math.max(5, Math.ceil(n * 1.3 / 5) * 5) : l = Math.max(20, Math.ceil(n * 1.3 / 10) * 10), o.settings.gridSize.val = l, o.scene.children.filter((m) => m.type === "GridHelper").forEach((m) => {
        var _a2, _b;
        (_a2 = m.geometry) == null ? void 0 : _a2.dispose(), (_b = m.material) == null ? void 0 : _b.dispose(), o.scene.remove(m);
      });
      const d = Za(), a = new il(l, 20, d.grid, d.grid);
      a.rotation.x = Math.PI / 2, a.position.set(0.5 * l, 0.5 * l, 0), o.scene.add(a), o.scene.children.filter((m) => m.type === "Group" && m.name !== "gridAxes" && m.name !== "loadsGroup" && (m.name === "viewerAxes" || m.children.some((w) => w instanceof gn))).forEach((m) => {
        m.traverse((w) => {
          w.geometry && w.geometry.dispose(), w.material && (w.material.map && w.material.map.dispose(), w.material.dispose());
        }), o.scene.remove(m);
      });
      const p = 0.05 * l, r = new dn();
      r.name = "viewerAxes";
      const c = d.axisArrow;
      r.add(new gn(new Ne(1, 0, 0), new Ne(), 1, c, 0.2, 0.2)), r.add(new gn(new Ne(0, 1, 0), new Ne(), 1, c, 0.2, 0.2)), r.add(new gn(new Ne(0, 0, 1), new Ne(), 1, c, 0.2, 0.2)), r.children.forEach((m) => m.scale.set(p, p, p));
      for (const [m, w, E] of [
        [
          "X",
          "red",
          [
            1.3 * p,
            0,
            0
          ]
        ],
        [
          "Y",
          "green",
          [
            0,
            1.3 * p,
            0
          ]
        ],
        [
          "Z",
          "blue",
          [
            0,
            0,
            1.3 * p
          ]
        ]
      ]) {
        const y = document.createElement("canvas");
        y.width = 64, y.height = 64;
        const f = y.getContext("2d");
        f.fillStyle = w, f.font = "bold 50px Arial", f.textAlign = "center", f.textBaseline = "middle", f.fillText(m, 32, 34);
        const h = new os(y);
        h.needsUpdate = true;
        const T = new hn(new xn({
          map: h,
          depthTest: false,
          transparent: true
        }));
        T.position.set(E[0], E[1], E[2]), T.scale.set(0.4 * p, 0.4 * p, 1), T.renderOrder = 99, r.add(T);
      }
      o.scene.add(r), t ? o.render() : So("3d");
    }
    function Rs(t, o, n) {
      if (t.length < 2) return n * 10;
      let l = 1 / 0;
      return o > 0 && (l = Math.min(l, Math.abs(t[o] - t[o - 1]))), o < t.length - 1 && (l = Math.min(l, Math.abs(t[o + 1] - t[o]))), l * 0.45 || n * 0.1;
    }
    function So(t) {
      var _a2;
      const o = lt();
      if (!o) return;
      const { center: n, extent: l } = Eo(), s = o.renderer.domElement.clientWidth / (o.renderer.domElement.clientHeight || 1), d = l * 0.7;
      o.controls.maxDistance = l * 5, o.controls.minDistance = l * 0.05, o.renderer.clippingPlanes = [];
      const a = () => {
        o.scene.traverse((i) => {
          var _a3;
          if (!i.material) return;
          const p = i.type === "GridHelper" || i.type === "AxesHelper", r = i.isSprite, c = ((_a3 = i.userData) == null ? void 0 : _a3.noClip) === true;
          (p || r || c) && (Array.isArray(i.material) ? i.material.forEach((m) => {
            m.clippingPlanes = [];
          }) : i.material.clippingPlanes = []);
        });
      };
      if (t === "3d") {
        const i = o.perspCamera.fov, p = l / (2 * Math.tan(i * Math.PI / 360)) * 2.2;
        o.perspCamera.position.set(n.x + p * 0.5, n.y - p * 0.8, n.z + p * 0.5), o.controls.target.copy(n), o.setActiveCamera(o.perspCamera);
      } else {
        const i = o.orthoCamera;
        i.left = -d * s, i.right = d * s, i.top = d, i.bottom = -d, i.near = -l * 10, i.far = l * 10, i.updateProjectionMatrix();
        const p = (r, c, m) => {
          i.position.copy(r), i.up.copy(m), o.controls.target.copy(c), i.lookAt(c), o.controls.update();
        };
        if (t === "plan") o.renderer.clippingPlanes = [], p(new Ne(n.x, n.y, n.z + l * 2), new Ne(n.x, n.y, n.z), new Ne(0, 1, 0));
        else if (t.startsWith("plan:")) {
          const r = parseInt(t.split(":")[1]), c = ((_a2 = W.hPiso) == null ? void 0 : _a2.val) ?? 3, m = (r + 1) * c, w = c * 0.45;
          o.renderer.clippingPlanes = [
            new zo(new Ne(0, 0, -1), m + w),
            new zo(new Ne(0, 0, 1), -m + w)
          ], a(), p(new Ne(n.x, n.y, m + l * 2), new Ne(n.x, n.y, m), new Ne(0, 1, 0));
        } else if (t === "elevX") i.position.set(n.x + l * 2, n.y, n.z), i.up.set(0, 0, 1);
        else if (t === "elevY") i.position.set(n.x, n.y - l * 2, n.z), i.up.set(0, 0, 1);
        else if (t.startsWith("axisX:")) {
          const r = parseInt(t.split(":")[1]), c = Ye[r] ?? n.x;
          if (Ze.length > 1) {
            const w = Rs(Ye, r, l);
            o.renderer.clippingPlanes = [
              new zo(new Ne(-1, 0, 0), c + w),
              new zo(new Ne(1, 0, 0), -c + w)
            ], a(), i.position.set(n.x + l * 2, n.y, n.z), o.controls.target.set(n.x, n.y, n.z);
          } else i.position.set(n.x, n.y - l * 2, n.z), o.controls.target.copy(n);
          i.up.set(0, 0, 1);
        } else if (t.startsWith("axisY:")) {
          const r = parseInt(t.split(":")[1]), c = Ze[r] ?? n.y;
          if (Ye.length > 1) {
            const w = Rs(Ze, r, l);
            o.renderer.clippingPlanes = [
              new zo(new Ne(0, -1, 0), c + w),
              new zo(new Ne(0, 1, 0), -c + w)
            ], a(), i.position.set(n.x, n.y - l * 2, n.z), o.controls.target.set(n.x, n.y, n.z);
          } else i.position.set(n.x + l * 2, n.y, n.z), o.controls.target.copy(n);
          i.up.set(0, 0, 1);
        }
        !t.startsWith("axisX:") && !t.startsWith("axisY:") && o.controls.target.copy(n), o.setActiveCamera(i);
      }
    }
    function jn() {
      const t = Le.querySelector("#cad3d-axis-buttons");
      if (!t) return;
      if (Ye.length < 2 && Ze.length < 2) {
        t.style.display = "none";
        return;
      }
      t.style.display = "", t.innerHTML = "";
      const o = (d, a, i) => {
        const p = document.createElement("button");
        return p.textContent = d, p.dataset.view = a, p.title = i, p.style.cssText = "min-width:22px;padding:1px 5px;font-weight:bold", p.addEventListener("click", (r) => {
          var _a2;
          r.stopPropagation();
          const c = p.classList.contains("view-active");
          Le.querySelectorAll("[data-view]").forEach((m) => m.classList.remove("view-active")), c ? (So("3d"), (_a2 = Le.querySelector('[data-view="3d"]')) == null ? void 0 : _a2.classList.add("view-active")) : (So(a), p.classList.add("view-active"));
        }), p;
      }, n = document.createElement("span");
      n.textContent = "Ejes:", n.style.cssText = "color:#888;font-size:10px;margin-right:2px;align-self:center", t.appendChild(n);
      const l = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      Ye.forEach((d, a) => {
        const i = a < l.length ? l[a] : `X${a}`;
        t.appendChild(o(i, `axisX:${a}`, `Eje ${i} \u2014 elevaci\xF3n mirando en Y`));
      });
      const s = document.createElement("span");
      s.textContent = "|", s.style.cssText = "color:#555;margin:0 3px;align-self:center;font-weight:bold", t.appendChild(s), Ze.forEach((d, a) => {
        const i = `${a + 1}`;
        t.appendChild(o(i, `axisY:${a}`, `Eje ${i} \u2014 elevaci\xF3n mirando en X`));
      });
    }
    function Wn() {
      var _a2;
      const t = Le.querySelector("#cad3d-floor-buttons");
      if (!t) return;
      const o = Math.round(((_a2 = W.nPisos) == null ? void 0 : _a2.val) ?? 0);
      if (o < 1) {
        t.style.display = "none";
        return;
      }
      t.style.display = "", t.innerHTML = "";
      const n = (s, d, a) => {
        const i = document.createElement("button");
        return i.textContent = s, i.dataset.view = d, i.title = a, i.style.cssText = "min-width:22px;padding:1px 5px;font-weight:bold", i.addEventListener("click", (p) => {
          var _a3;
          p.stopPropagation();
          const r = i.classList.contains("view-active");
          Le.querySelectorAll("[data-view]").forEach((c) => c.classList.remove("view-active")), r ? (So("3d"), (_a3 = Le.querySelector('[data-view="3d"]')) == null ? void 0 : _a3.classList.add("view-active")) : (So(d), i.classList.add("view-active"));
        }), i;
      }, l = document.createElement("span");
      l.textContent = "Planta:", l.style.cssText = "color:#888;font-size:10px;margin-right:2px;align-self:center", t.appendChild(l);
      for (let s = 0; s < o; s++) t.appendChild(n(`P${s + 1}`, `plan:${s}`, `Planta Piso ${s + 1}`));
    }
    function Aa() {
      So("3d"), Le.querySelectorAll("[data-view]").forEach((t) => t.classList.toggle("view-active", t.dataset.view === "3d"));
    }
    tt.view = (t) => {
      t = {
        planta: "plan",
        elevationX: "elevX",
        elevationY: "elevY",
        corte: "section"
      }[t] || t, So(t), Le.querySelectorAll("[data-view]").forEach((n) => n.classList.toggle("view-active", n.dataset.view === t));
    };
    let io = false, Qt = false, go = false, Vt = "line", no = [], kt = null, jt = null, Wt = null, Ho = null, ao = null;
    const Ct = {
      node: true,
      grid: true,
      midpoint: true,
      track: true
    }, Gn = 0.5;
    let Yn = [], lo = null, Co = null;
    const jo = [], fn = [], La = 50;
    function Wo() {
      jo.push({
        nodes: JSON.parse(JSON.stringify(e.nodes.val)),
        elements: JSON.parse(JSON.stringify(e.elements.val))
      }), jo.length > La && jo.shift(), fn.length = 0;
    }
    function Os() {
      if (jo.length === 0) return;
      fn.push({
        nodes: JSON.parse(JSON.stringify(e.nodes.val)),
        elements: JSON.parse(JSON.stringify(e.elements.val))
      });
      const t = jo.pop();
      e.nodes.val = t.nodes, e.elements.val = t.elements, wo(), e.elementInputs.val = {
        ...e.elementInputs.val
      };
    }
    function Ns() {
      if (fn.length === 0) return;
      jo.push({
        nodes: JSON.parse(JSON.stringify(e.nodes.val)),
        elements: JSON.parse(JSON.stringify(e.elements.val))
      });
      const t = fn.pop();
      e.nodes.val = t.nodes, e.elements.val = t.elements, wo(), e.elementInputs.val = {
        ...e.elementInputs.val
      };
    }
    const Mt = /* @__PURE__ */ new Set();
    let eo = null, Io = [], so = null, ho = null;
    function Jn(t) {
      const o = lt();
      if (!o) return;
      const n = e.nodes.val, l = e.elements.val[t];
      if (!l) return;
      const s = [];
      for (let i = 0; i < l.length; i++) {
        const p = n[l[i]], r = n[l[(i + 1) % l.length]];
        s.push(p[0], p[1], p[2], r[0], r[1], r[2]);
      }
      const d = new ro();
      d.setAttribute("position", new Ro(s, 3));
      const a = new Vo(d, new Uo({
        color: 16711935,
        linewidth: 3,
        depthTest: false
      }));
      a.renderOrder = 9998, a.__elemIdx = t, o.scene.add(a), Io.push(a), o.render();
    }
    function ko() {
      const t = lt();
      Io.forEach((o) => {
        t == null ? void 0 : t.scene.remove(o), o.geometry.dispose(), o.material.dispose();
      }), Io = [], t == null ? void 0 : t.render();
    }
    function To() {
      ho && ho.remove();
      const t = J.size > 0 || _;
      if (Mt.size === 0 && !t) {
        ho = null;
        return;
      }
      const o = document.createElement("div");
      o.style.cssText = "position:fixed;bottom:20px;left:50%;transform:translateX(-50%);background:var(--cad-bg);color:var(--cad-text);border:2px solid var(--cad-heading);border-radius:8px;padding:10px 16px;z-index:10000;font-family:monospace;font-size:13px;display:flex;gap:12px;align-items:center;box-shadow:0 4px 20px var(--cad-shadow);", o.innerHTML = `
      <span style="color:var(--cad-heading);font-weight:bold;">${Mt.size} elem.</span>
      <button id="sel-assign" style="padding:5px 8px;background:#336699;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:12px;" title="Asignar secci\xF3n">\u{1F4D0}</button>
      <button id="sel-info" style="padding:5px 8px;background:#225588;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:12px;" title="Info del elemento">\u{1F50D}</button>
      <button id="sel-hide" style="padding:5px 8px;background:#665500;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:12px;" title="Ocultar seleccionados">\u{1F441}\u200D\u{1F5E8}</button>
      <button id="sel-isolate" style="padding:5px 8px;background:#006633;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:12px;" title="Aislar (mostrar solo seleccionados)">\u25CE</button>
      <button id="sel-showall" style="padding:5px 8px;background:#444;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:12px;" title="Mostrar todo">\u21BA</button>
      <button id="sel-delete" style="padding:5px 8px;background:#cc3333;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:12px;" title="Eliminar seleccionados">\u{1F5D1}</button>
      <button id="sel-clear" style="padding:5px 8px;background:#555;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:12px;" title="Limpiar selecci\xF3n">\u2715</button>
    `, document.body.appendChild(o), ho = o, o.querySelector("#sel-assign").addEventListener("click", () => {
        Va([
          ...Mt
        ]);
      }), o.querySelector("#sel-info").addEventListener("click", () => {
        if (Mt.size === 1) {
          const n = [
            ...Mt
          ][0];
          Ws(n);
        } else {
          const n = [
            ...Mt
          ], l = e.nodes.val, s = e.elements.val;
          let d = 0, a = 0, i = 0, p = 0;
          n.forEach((c) => {
            const m = s[c];
            if (m) if (m.length === 2) {
              const w = l[m[0]], E = l[m[1]], y = Math.abs(E[0] - w[0]), f = Math.abs(E[1] - w[1]), h = Math.abs(E[2] - w[2]);
              h > y && h > f ? d++ : a++;
            } else m.length === 3 ? i++ : m.length === 4 && p++;
          });
          const r = [];
          d && r.push(`${d} columnas`), a && r.push(`${a} vigas`), p && r.push(`${p} shells Q4`), i && r.push(`${i} triangulos`), alert(`${n.length} elementos seleccionados:
${r.join(", ")}`);
        }
      }), o.querySelector("#sel-hide").addEventListener("click", () => {
        Mt.forEach((n) => J.add(n)), Mt.clear(), ko(), To(), Oe();
      }), o.querySelector("#sel-isolate").addEventListener("click", () => {
        _ = true, G.clear(), Mt.forEach((n) => G.add(n)), Mt.clear(), ko(), To(), Oe();
      }), o.querySelector("#sel-showall").addEventListener("click", () => {
        J.clear(), _ = false, G.clear(), To(), Oe();
      }), o.querySelector("#sel-delete").addEventListener("click", () => {
        Wo(), Mt.forEach((n) => Z.add(n)), Mt.clear(), ko(), To(), Oe();
      }), o.querySelector("#sel-clear").addEventListener("click", () => {
        Mt.clear(), ko(), To();
      });
    }
    function un() {
      var _a2;
      Qt = false, Mt.clear(), ko(), ho && (ho.remove(), ho = null), (_a2 = Le.querySelector("#cad3d-select")) == null ? void 0 : _a2.classList.remove("inspect-active");
      const o = lt();
      o && (o.controls.enabled = true);
    }
    function Fo() {
      if (eo) {
        const t = lt();
        t == null ? void 0 : t.scene.remove(eo), eo.geometry.dispose(), eo.material.dispose(), eo = null, t == null ? void 0 : t.render();
      }
      so && (so.remove(), so = null);
    }
    function Ca(t) {
      Vn();
      const o = lt();
      if (!o) return;
      const n = e.nodes.val[t];
      if (!n) return;
      Co = t;
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
        const i = new Float32Array([
          n[0] - d[0] * l,
          n[1] - d[1] * l,
          n[2] - d[2] * l,
          n[0] + d[0] * l,
          n[1] + d[1] * l,
          n[2] + d[2] * l
        ]), p = new ro();
        p.setAttribute("position", new En(i, 3));
        const r = new Jo({
          color: a,
          dashSize: 0.3,
          gapSize: 0.15,
          transparent: true,
          opacity: 0.4,
          depthTest: false
        }), c = new Vo(p, r);
        c.computeLineDistances(), c.renderOrder = 9990, o.scene.add(c), Yn.push(c);
      }
      o.render();
    }
    function Vn() {
      const t = lt();
      for (const o of Yn) t == null ? void 0 : t.scene.remove(o), o.geometry.dispose(), o.material.dispose();
      Yn = [], Co = null, lo && (lo.remove(), lo = null);
    }
    function qs(t, o, n, l) {
      lo || (lo = document.createElement("div"), lo.style.cssText = "position:fixed;pointer-events:none;z-index:10002;background:var(--cad-bg);color:var(--cad-heading);font-family:monospace;font-size:11px;padding:2px 6px;border-radius:3px;white-space:nowrap;border:1px solid var(--cad-border);", document.body.appendChild(lo));
      const s = l.x - n.x, d = l.y - n.y, a = l.z - n.z, i = Math.sqrt(s * s + d * d + a * a), p = Math.abs(s), r = Math.abs(d), c = Math.abs(a);
      let m = "";
      p > r && p > c ? m = `\u0394X=${s.toFixed(2)}` : r > p && r > c ? m = `\u0394Y=${d.toFixed(2)}` : c > 0.01 && (m = `\u0394Z=${a.toFixed(2)}`), lo.textContent = `${i.toFixed(3)} m  ${m}`, lo.style.left = t + 20 + "px", lo.style.top = o - 10 + "px";
    }
    function Fa(t, o) {
      const l = e.nodes.val[o];
      if (!l) return null;
      const s = new Ne(l[0], l[1], l[2]), d = t.clone(), a = d.clone().sub(s), i = 0.3, p = Math.abs(a.x), r = Math.abs(a.y), c = Math.abs(a.z);
      return r < i && c < i && p > 0.01 ? new Ne(d.x, s.y, s.z) : p < i && c < i && r > 0.01 ? new Ne(s.x, d.y, s.z) : p < i && r < i && c > 0.01 ? new Ne(s.x, s.y, d.z) : null;
    }
    function mn() {
      var _a2;
      const t = lt();
      jt && t && (t.scene.remove(jt), jt.geometry.dispose(), jt.material.dispose(), jt = null), Wt && t && (t.scene.remove(Wt), Wt.geometry.dispose(), Wt.material.dispose(), Wt = null), Vn(), kt = null, ao = null, go = false, Ho && (Ho.remove(), Ho = null), (_a2 = Le.querySelector("#cad3d-draw")) == null ? void 0 : _a2.classList.remove("inspect-active"), t == null ? void 0 : t.render();
    }
    function Pa() {
      Ho && Ho.remove();
      const t = document.createElement("div");
      t.style.cssText = "position:fixed;bottom:60px;left:50%;transform:translateX(-50%);background:var(--cad-bg);border:1px solid var(--cad-border);border-radius:6px;padding:6px 10px;z-index:10000;display:flex;gap:6px;align-items:center;font-family:monospace;font-size:11px;box-shadow:0 2px 10px var(--cad-shadow);";
      const o = (s) => `padding:4px 10px;border:1px solid ${s ? "#00ccff" : "#555"};background:${s ? "#003355" : "#333"};color:${s ? "#00ccff" : "#ccc"};border-radius:3px;cursor:pointer;font-size:11px;font-family:monospace;`, n = (s) => `padding:3px 6px;border:1px solid ${s ? "#33ff33" : "#444"};background:${s ? "#113311" : "#222"};color:${s ? "#33ff33" : "#888"};border-radius:3px;cursor:pointer;font-size:10px;`;
      t.innerHTML = `
      <span style="color:#00ccff;font-weight:bold;margin-right:4px;">Draw:</span>
      <button id="dt-line" style="${o(Vt === "line")}">\u{1F4CF} Line</button>
      <button id="dt-arc" style="${o(Vt === "arc")}">\u2312 Arc</button>
      <button id="dt-node" style="${o(Vt === "node")}">\u2295 Node</button>
      <button id="dt-area" style="${o(Vt === "area")}">\u25A2 Area</button>
      <span style="color:#666;margin:0 4px;">|</span>
      <span style="color:#888;font-size:10px;">Snap:</span>
      <button id="ds-node" style="${n(Ct.node)}">Node</button>
      <button id="ds-grid" style="${n(Ct.grid)}">Grid</button>
      <button id="ds-mid" style="${n(Ct.midpoint)}">Mid</button>
      <button id="ds-track" style="${n(Ct.track)}">Prolong</button>
      <span style="color:#666;margin:0 4px;">|</span>
      <span style="color:#888;font-size:10px;">Grid:</span>
      <input id="ds-gridsize" type="number" value="${Gn}" step="0.1" min="0.1" max="10" style="width:45px;background:#333;color:#fff;border:1px solid #555;padding:2px;font-size:10px;">
      <span style="color:#888;font-size:10px;">m</span>
      <span style="color:#666;margin:0 4px;">|</span>
      <button id="dt-undo" style="padding:3px 6px;background:#444;color:#ccc;border:1px solid #555;border-radius:3px;cursor:pointer;font-size:10px;" title="Ctrl+Z">\u21A9 Undo</button>
      <button id="dt-redo" style="padding:3px 6px;background:#444;color:#ccc;border:1px solid #555;border-radius:3px;cursor:pointer;font-size:10px;" title="Ctrl+Y">\u21AA Redo</button>
    `, document.body.appendChild(t), Ho = t;
      const l = () => {
        const s = t.querySelector("#dt-line"), d = t.querySelector("#dt-arc"), a = t.querySelector("#dt-node"), i = t.querySelector("#dt-area");
        s && (s.style.cssText = o(Vt === "line")), d && (d.style.cssText = o(Vt === "arc")), a && (a.style.cssText = o(Vt === "node")), i && (i.style.cssText = o(Vt === "area"));
        const p = t.querySelector("#ds-node"), r = t.querySelector("#ds-grid"), c = t.querySelector("#ds-mid"), m = t.querySelector("#ds-track");
        p && (p.style.cssText = n(Ct.node)), r && (r.style.cssText = n(Ct.grid)), c && (c.style.cssText = n(Ct.midpoint)), m && (m.style.cssText = n(Ct.track));
      };
      t.querySelector("#dt-line").addEventListener("click", () => {
        Vt = "line", kt = null, ao = null, no = [], l();
      }), t.querySelector("#dt-arc").addEventListener("click", () => {
        Vt = "arc", kt = null, ao = null, no = [], l();
      }), t.querySelector("#dt-node").addEventListener("click", () => {
        Vt = "node", kt = null, ao = null, no = [], l();
      }), t.querySelector("#dt-area").addEventListener("click", () => {
        Vt = "area", kt = null, ao = null, no = [], console.log("Area mode: click vertices del poligono. Doble-click o click cerca del 1er punto para cerrar."), l();
      }), t.querySelector("#ds-node").addEventListener("click", () => {
        Ct.node = !Ct.node, l();
      }), t.querySelector("#ds-grid").addEventListener("click", () => {
        Ct.grid = !Ct.grid, l();
      }), t.querySelector("#ds-mid").addEventListener("click", () => {
        Ct.midpoint = !Ct.midpoint, l();
      }), t.querySelector("#ds-track").addEventListener("click", () => {
        Ct.track = !Ct.track, Ct.track || Vn(), l();
      }), t.querySelector("#ds-gridsize").addEventListener("change", (s) => {
        Ct.gridSize = parseFloat(s.target.value) || 0.5;
      }), t.querySelector("#dt-undo").addEventListener("click", () => Os()), t.querySelector("#dt-redo").addEventListener("click", () => Ns());
    }
    function _s(t, o, n, l) {
      const s = l.getBoundingClientRect(), d = (t - s.left) / s.width * 2 - 1, a = -((o - s.top) / s.height) * 2 + 1, i = new la();
      i.setFromCamera(new ra(d, a), n);
      const p = e.nodes.val, r = e.elements.val, c = 0.12;
      if (Ct.node) {
        let E = -1, y = 1 / 0;
        for (let f = 0; f < p.length; f++) {
          const h = p[f], T = new Ne(h[0], h[1], h[2]).project(n), k = Math.sqrt((T.x - d) ** 2 + (T.y - a) ** 2);
          k < c && k < y && (y = k, E = f);
        }
        if (E >= 0) return {
          nodeIdx: E,
          worldPos: new Ne(...p[E]),
          snapType: "node"
        };
      }
      if (Ct.midpoint) {
        let E = 1 / 0, y = null;
        for (const f of r) {
          if (f.length !== 2) continue;
          const h = p[f[0]], T = p[f[1]], k = new Ne((h[0] + T[0]) / 2, (h[1] + T[1]) / 2, (h[2] + T[2]) / 2), $ = k.clone().project(n), C = Math.sqrt(($.x - d) ** 2 + ($.y - a) ** 2);
          C < c * 0.8 && C < E && (E = C, y = k);
        }
        if (y) return {
          nodeIdx: null,
          worldPos: y,
          snapType: "mid"
        };
      }
      if (Ct.grid) {
        const E = new zo(new Ne(0, 0, 1), 0), y = new Ne();
        if (i.ray.intersectPlane(E, y)) {
          const f = Ct.gridSize || Gn;
          return y.x = Math.round(y.x / f) * f, y.y = Math.round(y.y / f) * f, y.z = Math.round(y.z / f) * f, {
            nodeIdx: null,
            worldPos: y,
            snapType: "grid"
          };
        }
      }
      const m = new zo(new Ne(0, 0, 1), 0), w = new Ne();
      return i.ray.intersectPlane(m, w), {
        nodeIdx: null,
        worldPos: w,
        snapType: "free"
      };
    }
    function Ds(t) {
      const o = lt();
      if (!o) return;
      const n = e.nodes.val;
      if (Wt && (o.scene.remove(Wt), Wt.geometry.dispose(), Wt.material.dispose(), Wt = null), t.worldPos) {
        const l = t.snapType === "node" ? 16776960 : t.snapType === "mid" ? 16711935 : t.snapType === "grid" ? 65535 : 8947848, s = t.snapType === "node" ? 0.08 : 0.06, d = t.snapType === "mid" ? new sl(s * 2, s * 2, s * 2) : new al(s, 12, 12), a = new ll({
          color: l,
          transparent: true,
          opacity: 0.8,
          depthTest: false
        });
        Wt = new fa(d, a), Wt.position.copy(t.worldPos), Wt.renderOrder = 9999, o.scene.add(Wt);
      }
      if (jt && (o.scene.remove(jt), jt.geometry.dispose(), jt.material.dispose(), jt = null), kt !== null && t.worldPos) {
        const l = n[kt], s = new ro();
        if (Vt === "arc" && ao !== null) {
          const a = n[ao], i = Bs(new Ne(l[0], l[1], l[2]), new Ne(a[0], a[1], a[2]), t.worldPos, 16), p = [];
          for (let r = 0; r < i.length - 1; r++) p.push(i[r].x, i[r].y, i[r].z, i[r + 1].x, i[r + 1].y, i[r + 1].z);
          s.setAttribute("position", new Ro(p, 3));
        } else s.setAttribute("position", new Ro([
          l[0],
          l[1],
          l[2],
          t.worldPos.x,
          t.worldPos.y,
          t.worldPos.z
        ], 3));
        const d = new Uo({
          color: 65280,
          linewidth: 2,
          depthTest: false
        });
        jt = new Oo(s, d), Vt === "arc" && ao !== null && (jt = new Vo(s, d)), jt.renderOrder = 9999, o.scene.add(jt);
      }
      o.render();
    }
    function Bs(t, o, n, l) {
      const s = [];
      for (let d = 0; d <= l; d++) {
        const a = d / l, i = o.clone().multiplyScalar(2).sub(t.clone().multiplyScalar(0.5)).sub(n.clone().multiplyScalar(0.5)), p = (1 - a) * (1 - a), r = 2 * (1 - a) * a, c = a * a;
        s.push(new Ne(p * t.x + r * i.x + c * n.x, p * t.y + r * i.y + c * n.y, p * t.z + r * i.z + c * n.z));
      }
      return s;
    }
    function Un(t) {
      if (t.nodeIdx !== null) return t.nodeIdx;
      if (!t.worldPos) return -1;
      const o = e.nodes.val, n = 1e-3;
      for (let s = 0; s < o.length; s++) if (Math.abs(o[s][0] - t.worldPos.x) < n && Math.abs(o[s][1] - t.worldPos.y) < n && Math.abs(o[s][2] - t.worldPos.z) < n) return s;
      Wo();
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
    function Ra(t) {
      var _a2;
      if (Vt === "node") {
        if (!t.worldPos) return;
        Wo();
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
      if (Vt === "line") {
        const o = Un(t);
        if (o < 0) return;
        if (kt === null) {
          kt = o;
          return;
        }
        if (o === kt) return;
        Wo();
        const n = [
          ...e.elements.val
        ];
        n.some((s) => s.length === 2 && (s[0] === kt && s[1] === o || s[1] === kt && s[0] === o)) || (n.push([
          kt,
          o
        ]), e.elements.val = n, wo(), e.elementInputs.val = {
          ...e.elementInputs.val
        }), kt = o;
        return;
      }
      if (Vt === "arc") {
        const o = Un(t);
        if (o < 0) return;
        if (kt === null) {
          kt = o;
          return;
        }
        if (ao === null) {
          if (o === kt) return;
          ao = o;
          return;
        }
        if (o === kt || o === ao) return;
        const n = e.nodes.val, l = new Ne(...n[kt]), s = new Ne(...n[ao]), d = new Ne(...n[o]), a = Math.max(4, Math.round(((_a2 = W.nSubViga) == null ? void 0 : _a2.val) ?? 8)), i = Bs(l, s, d, a);
        Wo();
        const p = [
          ...e.nodes.val
        ], r = [
          ...e.elements.val
        ];
        let c = kt;
        for (let m = 1; m < i.length; m++) {
          let w;
          if (m === i.length - 1) w = o;
          else {
            const E = i[m];
            w = p.length, p.push([
              E.x,
              E.y,
              E.z
            ]);
          }
          r.push([
            c,
            w
          ]), c = w;
        }
        e.nodes.val = p, e.elements.val = r, wo(), e.elementInputs.val = {
          ...e.elementInputs.val
        }, kt = o, ao = null;
        return;
      }
      if (Vt === "area") {
        const o = Un(t);
        if (o < 0) return;
        if (no.length >= 3 && o === no[0]) {
          Wo();
          const n = [
            ...e.nodes.val
          ], l = [
            ...e.elements.val
          ], s = no.map((d) => n[d]);
          try {
            const d = $o({
              points: s,
              polygon: Array.from({
                length: s.length
              }, (i, p) => p),
              maxMeshSize: Gn || 0.5
            }), a = [];
            for (const i of d.nodes) {
              let p = -1;
              for (let r = 0; r < n.length; r++) {
                const c = Math.abs(n[r][0] - i[0]), m = Math.abs(n[r][1] - i[1]), w = Math.abs(n[r][2] - i[2]);
                if (c < 0.01 && m < 0.01 && w < 0.01) {
                  p = r;
                  break;
                }
              }
              p >= 0 ? a.push(p) : (a.push(n.length), n.push([
                i[0],
                i[1],
                i[2]
              ]));
            }
            for (const i of d.elements) l.push([
              a[i[0]],
              a[i[1]],
              a[i[2]]
            ]);
            e.nodes.val = n, e.elements.val = l, wo(), console.log(`Area: ${d.elements.length} triangulos creados desde ${no.length} vertices`);
          } catch (d) {
            console.error("Area mesh failed:", d.message);
          }
          no = [];
          return;
        }
        if (no.push(o), console.log(`Area vertex ${no.length}: node ${o}`), no.length >= 2) {
          const n = no[no.length - 2], l = e.nodes.val, s = lt();
          if (s) {
            const d = new ro().setFromPoints([
              new Ne(...l[n]),
              new Ne(...l[o])
            ]), a = new Vo(d, new Uo({
              color: 65280,
              linewidth: 2
            }));
            a.name = "area-preview", s.scene.add(a), s.render();
          }
        }
        return;
      }
    }
    function Hs(t) {
      const o = lt();
      if (!o) return;
      eo && (o.scene.remove(eo), eo.geometry.dispose(), eo.material.dispose());
      const n = e.nodes.val, l = e.elements.val[t];
      if (!l) return;
      const s = [];
      for (let a = 0; a < l.length; a++) {
        const i = n[l[a]], p = n[l[(a + 1) % l.length]];
        s.push(i[0], i[1], i[2], p[0], p[1], p[2]);
      }
      const d = new ro();
      d.setAttribute("position", new Ro(s, 3)), eo = new Vo(d, new Uo({
        color: 16776960,
        linewidth: 3,
        depthTest: false
      })), eo.renderOrder = 9999, o.scene.add(eo), o.render();
    }
    function Xn(t) {
      const o = lt();
      if (!o) return -1;
      const n = o.renderer.domElement.getBoundingClientRect(), l = new ra((t.clientX - n.left) / n.width * 2 - 1, -((t.clientY - n.top) / n.height) * 2 + 1), s = new la();
      s.setFromCamera(l, o.controls.object), s.params.Line = {
        threshold: 0.5
      };
      const d = e.nodes.val, a = e.elements.val;
      if (d.length === 0 || a.length === 0) return -1;
      let i = 1 / 0, p = -1;
      const r = s.ray;
      for (let m = 0; m < a.length; m++) {
        const w = a[m];
        if (w.length === 2) {
          const E = new Ne(...d[w[0]]), y = new Ne(...d[w[1]]), f = new rl(E, y), h = new Ne(), T = new Ne();
          r.closestPointToPoint(f.getCenter(new Ne()), h), f.closestPointToPoint(h, true, T);
          const k = h.distanceTo(T);
          k < i && (i = k, p = m);
        } else if (w.length === 3) {
          const E = new Ne(...d[w[0]]), y = new Ne(...d[w[1]]), f = new Ne(...d[w[2]]), h = new Ne();
          if (r.intersectTriangle(E, y, f, false, h)) {
            const k = r.origin.distanceTo(h);
            k < i && (i = k, p = m);
          } else {
            const k = E.add(y).add(f).divideScalar(3), $ = new Ne();
            r.closestPointToPoint(k, $);
            const C = $.distanceTo(k);
            C < i && (i = C, p = m);
          }
        } else if (w.length === 4) {
          const E = new Ne(...d[w[0]]), y = new Ne(...d[w[1]]), f = new Ne(...d[w[2]]), h = new Ne(...d[w[3]]), T = new Ne();
          let k = r.intersectTriangle(E, y, f, false, T);
          if (k) {
            const $ = r.origin.distanceTo(T);
            $ < i && (i = $, p = m);
          }
          if (k = r.intersectTriangle(E, f, h, false, T), k) {
            const $ = r.origin.distanceTo(T);
            $ < i && (i = $, p = m);
          }
        }
      }
      const { extent: c } = Eo();
      return i < c * 0.1 ? p : -1;
    }
    function we(t, o = 4) {
      return Math.abs(t) < 1e-10 ? "0" : Math.abs(t) >= 1e6 ? t.toExponential(2) : Math.abs(t) >= 100 ? t.toFixed(1) : t.toFixed(o);
    }
    function Kn(t, o, n = 12) {
      var _a2;
      const l = Math.min(t.length, n), s = Math.min(((_a2 = t[0]) == null ? void 0 : _a2.length) || 0, n);
      let d = "<table>";
      if (o) {
        d += '<tr><td class="header"></td>';
        for (let a = 0; a < s; a++) d += `<td class="header">${o[a] || a}</td>`;
        d += "</tr>";
      }
      for (let a = 0; a < l; a++) {
        d += "<tr>", o && (d += `<td class="header">${o[a] || a}</td>`);
        for (let i = 0; i < s; i++) {
          const p = t[a][i], r = Math.abs(p) > 1e-10 ? "nonzero" : "";
          d += `<td class="${r}">${we(p, 2)}</td>`;
        }
        d += "</tr>";
      }
      return d += "</table>", d;
    }
    function Be(t, o) {
      return `<span class="frac"><span class="frac-num">${t}</span><span class="frac-den">${o}</span></span>`;
    }
    function L(t, o, n) {
      let l = `<span class="var">${t}</span>`;
      return o && (l += `<sub>${o}</sub>`), l;
    }
    function Oa(t, o, n, l, s, d, a) {
      const i = 0.8333333333333334 * o, p = 5 / 6 * o, r = p > 0 && s > 0 ? 12 * t * n / (s * p * a ** 2) : 0, c = i > 0 && s > 0 ? 12 * t * l / (s * i * a ** 2) : 0, m = t * o / a, w = s * d / a, E = 12 * t * n / a ** 3 / (1 + r), y = 6 * t * n / a ** 2 / (1 + r), f = 4 * t * n / a * (1 + r / 4) / (1 + r), h = 2 * t * n / a * (1 - r / 2) / (1 + r), T = r > 1e-10 || c > 1e-10;
      return `<div class="fem-eq eq-box">
      <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">Formulaci\xF3n: ${T ? "Timoshenko (con deformaci\xF3n por cortante)" : "Euler-Bernoulli"}</strong></div>
      ${T ? `
      <div style="text-align:left;margin-bottom:6px;color:var(--fem-eq-sub)">
        ${L("A", "s")} = ${Be("5", "6")} \xB7 ${L("A")} = <span class="highlight">${we(i)}</span>
        &nbsp;&nbsp; \u03C6<sub>z</sub> = ${Be("12\xB7" + L("E") + "\xB7" + L("I", "z"), L("G") + "\xB7" + L("A", "s") + "\xB7" + L("L") + "\xB2")} = <span class="highlight">${we(r)}</span>
        &nbsp;&nbsp; \u03C6<sub>y</sub> = <span class="highlight">${we(c)}</span>
      </div>
      <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">Coeficientes Timoshenko (Dr. Aguiar):</strong></div>
      <div>${L("t", "z")} = ${Be("12\xB7" + L("E") + "\xB7" + L("I", "z"), L("L") + "\xB3\xB7(1+\u03C6<sub>z</sub>)")} = <span class="highlight">${we(E)}</span> &nbsp;(cortante)</div>
      <div>${L("b", "z")} = ${Be("6\xB7" + L("E") + "\xB7" + L("I", "z"), L("L") + "\xB2\xB7(1+\u03C6<sub>z</sub>)")} = <span class="highlight">${we(y)}</span> &nbsp;(acoplamiento)</div>
      <div>${L("k", "z")} = ${Be("4\xB7" + L("E") + "\xB7" + L("I", "z") + "\xB7(1+\u03C6/4)", L("L") + "\xB7(1+\u03C6<sub>z</sub>)")} = <span class="highlight">${we(f)}</span> &nbsp;(flexi\xF3n diagonal)</div>
      <div>${L("a", "z")} = ${Be("2\xB7" + L("E") + "\xB7" + L("I", "z") + "\xB7(1\u2212\u03C6/2)", L("L") + "\xB7(1+\u03C6<sub>z</sub>)")} = <span class="highlight">${we(h)}</span> &nbsp;(flexi\xF3n off-diag)</div>
      ` : `
      <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">Coeficientes de rigidez:</strong></div>
      `}
      <div>${Be(L("E") + "\xB7" + L("A"), L("L"))} = <span class="highlight">${we(m)}</span> &nbsp;(axial)</div>
      <div>${Be(L("G") + "\xB7" + L("J"), L("L"))} = <span class="highlight">${we(w)}</span> &nbsp;(torsi\xF3n)</div>
      ${T ? "" : `
      <div>${Be("12\xB7" + L("E") + "\xB7" + L("I", "z"), L("L") + "\xB3")} = <span class="highlight">${we(E)}</span></div>
      <div>${Be("4\xB7" + L("E") + "\xB7" + L("I", "z"), L("L"))} = <span class="highlight">${we(f)}</span></div>
      `}
    </div>
    <div class="fem-eq">
      ${L("k", "local")} = <span class="mat-sym" style="grid-template-columns:repeat(4,auto)">
        <span class="cell">${Be(L("EA"), L("L"))}</span><span class="cell">0</span><span class="cell dots">\u22EF</span><span class="cell">${Be("\u2212" + L("EA"), L("L"))}</span>
        <span class="cell">0</span><span class="cell">${L("t", "z")}</span><span class="cell dots">\u22EF</span><span class="cell">${L("b", "z")}</span>
        <span class="cell dots">\u22EE</span><span class="cell dots">\u22EE</span><span class="cell dots">\u22F1</span><span class="cell dots">\u22EE</span>
        <span class="cell">0</span><span class="cell">${L("b", "z")}</span><span class="cell dots">\u22EF</span><span class="cell">${L("k", "z")}</span>
      </span>
      <sub style="color:var(--fem-label)">12\xD712 ${T ? "(Timoshenko)" : "(Euler-Bernoulli)"}</sub>
    </div>
    ${T ? `<div class="fem-eq eq-box" style="margin-top:6px">
      <div style="text-align:left"><strong style="color:var(--fem-section-title)">Matrices de rigidez (Dr. Aguiar, Fig 7.9):</strong></div>
      <div style="margin-top:4px">${L("K", "f")} = ${L("B", "f")}<sup>T</sup> \xB7 ${L("E")}\xB7${L("I")} \xB7 ${L("B", "f")} \xB7 ${L("J")} &nbsp;<sub style="color:var(--fem-label)">(flexi\xF3n, 1 pt Gauss)</sub></div>
      <div>${L("K", "c")} = ${L("B", "c")}<sup>T</sup> \xB7 ${L("G")}\xB7${L("A'")} \xB7 ${L("B", "c")} \xB7 ${L("J")} &nbsp;<sub style="color:var(--fem-label)">(cortante, 2 pts Gauss)</sub></div>
      <div>${L("K", "total")} = ${L("K", "f")} + ${L("K", "c")}</div>
    </div>` : ""}`;
    }
    function Na(t) {
      if (t.length === 2) {
        const n = Mo(t[1], t[0]), l = _o(n), s = n[0] / l, d = n[1] / l, a = n[2] / l;
        return `<div class="fem-eq eq-box">
        <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">Cosenos directores:</strong></div>
        <div>${L("l")} = cos(\u03B1) = ${Be("\u0394x", L("L"))} = ${Be(we(n[0]), we(l))} = <span class="highlight">${we(s)}</span></div>
        <div>${L("m")} = cos(\u03B2) = ${Be("\u0394y", L("L"))} = ${Be(we(n[1]), we(l))} = <span class="highlight">${we(d)}</span></div>
        <div>${L("n")} = cos(\u03B3) = ${Be("\u0394z", L("L"))} = ${Be(we(n[2]), we(l))} = <span class="highlight">${we(a)}</span></div>
      </div>
      <div class="fem-eq">
        \u03BB = <span class="mat-sym" style="grid-template-columns:repeat(3,auto)">
          <span class="cell">${L("l")}</span><span class="cell">${L("m")}</span><span class="cell">${L("n")}</span>
          <span class="cell">${Be("\u2212" + L("m"), L("D"))}</span><span class="cell">${Be(L("l"), L("D"))}</span><span class="cell">0</span>
          <span class="cell">${Be("\u2212" + L("l") + "\xB7" + L("n"), L("D"))}</span><span class="cell">${Be("\u2212" + L("m") + "\xB7" + L("n"), L("D"))}</span><span class="cell">${L("D")}</span>
        </span>
        &nbsp; donde ${L("D")} = \u221A(${L("l")}\xB2 + ${L("m")}\xB2)
      </div>
      <div class="fem-eq">
        ${L("T")} = ${L("I", "4")} \u2297 \u03BB &nbsp; <sub style="color:var(--fem-label)">(Kronecker, 12\xD712)</sub>
      </div>`;
      }
      return `<div class="fem-eq">${L("T")} \u2014 sistema local del tri\xE1ngulo (normal \xD7 lados) <sub>18\xD718</sub></div>`;
    }
    function qa() {
      return `<div class="fem-eq">
      ${L("K", "global")} = ${L("T")}<sup>T</sup> \xB7 ${L("k", "local")} \xB7 ${L("T")}
    </div>`;
    }
    function _a(t) {
      const o = t.map((n) => `6\xB7${n} = ${6 * n}`).join(", ");
      return `<div class="fem-eq eq-box">
      <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">Ensamblaje en K global:</strong></div>
      <div>${L("K", "global")}[${L("i")}, ${L("j")}] += ${L("K", "elem")}[${L("i")}, ${L("j")}]</div>
      <div style="margin-top:4px">donde ${L("i")}, ${L("j")} \u2208 {${o}} + (0..5)</div>
    </div>`;
    }
    function Da(t) {
      return t ? `<div class="fem-eq eq-box">
        <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">Recuperaci\xF3n de fuerzas:</strong></div>
        <div>${L("u", "local")} = ${L("T")} \xB7 ${L("u", "global")}</div>
        <div>${L("f", "local")} = ${L("k", "local")} \xB7 ${L("u", "local")}</div>
        <div style="margin-top:4px;color:var(--fem-eq-sub)">
          ${L("f")} = [${L("N", "i")}, ${L("V", "y,i")}, ${L("V", "z,i")}, ${L("M", "x,i")}, ${L("M", "y,i")}, ${L("M", "z,i")}, ${L("N", "j")}, \u2026]
        </div>
      </div>` : `<div class="fem-eq eq-box">
      <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">Esfuerzos en placa:</strong></div>
      <div>\u03C3 = ${Be("1", "2" + L("A"))} \xB7 ${L("D")} \xB7 ${L("B")} \xB7 ${L("u")}</div>
      <div>${L("N", "xx")} = \u03C3<sub>xx</sub> \xB7 ${L("t")} &nbsp;&nbsp; ${L("M", "xx")} = \u03C3<sub>xx</sub> \xB7 ${Be(L("t") + "\xB3", "12")}</div>
    </div>`;
    }
    function Zn(t, o) {
      const n = t.length;
      let l = '<table><tr><td class="hdr"></td>';
      for (let s = 0; s < n; s++) l += `<td class="hdr">${o[s] || s}</td>`;
      l += "</tr>";
      for (let s = 0; s < n; s++) {
        l += `<tr><td class="hdr">${o[s] || s}</td>`;
        for (let d = 0; d < n; d++) {
          const a = t[s][d], i = (s === d ? "diag " : "") + (Math.abs(a) > 1e-10 ? "nz" : "");
          l += `<td class="${i}">${we(a, 2)}</td>`;
        }
        l += "</tr>";
      }
      return l += "</table>", l;
    }
    function js() {
      const t = "0", o = Be(L("EA"), L("L")), n = Be("\u2212" + L("EA"), L("L")), l = Be("12" + L("EI", "z"), L("L") + "\xB3"), s = Be("\u221212" + L("EI", "z"), L("L") + "\xB3"), d = Be("12" + L("EI", "y"), L("L") + "\xB3"), a = Be("\u221212" + L("EI", "y"), L("L") + "\xB3"), i = Be("6" + L("EI", "z"), L("L") + "\xB2"), p = Be("\u22126" + L("EI", "z"), L("L") + "\xB2"), r = Be("6" + L("EI", "y"), L("L") + "\xB2"), c = Be("\u22126" + L("EI", "y"), L("L") + "\xB2"), m = Be(L("GJ"), L("L")), w = Be("\u2212" + L("GJ"), L("L")), E = Be("4" + L("EI", "z"), L("L")), y = Be("2" + L("EI", "z"), L("L")), f = Be("4" + L("EI", "y"), L("L")), h = Be("2" + L("EI", "y"), L("L")), T = '<span style="color:var(--fem-eq-dots);font-style:italic">sym</span>', k = [
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
      ], C = [
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
          i,
          t,
          s,
          t,
          t,
          t,
          i
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
          m,
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
          f,
          t,
          t,
          t,
          r,
          t,
          h,
          t
        ],
        [
          t,
          i,
          t,
          t,
          t,
          E,
          t,
          p,
          t,
          t,
          t,
          y
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
          p,
          t,
          l,
          t,
          t,
          t,
          p
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
          w,
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
          c,
          t,
          h,
          t,
          t,
          t,
          r,
          t,
          f,
          t
        ],
        [
          t,
          i,
          t,
          t,
          t,
          y,
          t,
          p,
          t,
          t,
          t,
          E
        ]
      ];
      let B = '<div style="margin-bottom:8px;color:var(--fem-eq-sub);font-size:11px;font-family:monospace">Eq. 6.1 \u2014 Matriz de rigidez de elemento de p\xF3rtico espacial</div>';
      B += '<table><tr><td class="hdr"></td>';
      for (const x of $) B += `<td class="hdr">${x}</td>`;
      B += "</tr>";
      for (let x = 0; x < 12; x++) {
        B += `<tr><td class="hdr">${k[x]}</td>`;
        for (let u = 0; u < 12; u++) if (u < x) B += `<td style="color:var(--fem-border-cell)">${u === 0 && x > 0 ? T : ""}</td>`;
        else {
          const I = C[x][u], A = (x === u ? "diag " : "") + (I !== "0" ? "nz" : "");
          B += `<td class="${A}">${I}</td>`;
        }
        B += "</tr>";
      }
      return B += "</table>", B;
    }
    function Ba(t, o, n, l, s, d, a) {
      return `<div class="coeff-grid">${[
        {
          name: `${Be(L("E") + "\xB7" + L("A"), L("L"))}`,
          calc: `${Be(we(t) + "\xD7" + we(o), we(a))}`,
          val: t * o / a,
          label: "Axial"
        },
        {
          name: `${Be("12\xB7" + L("E") + "\xB7" + L("I", "z"), L("L") + "\xB3")}`,
          calc: `${Be("12\xD7" + we(t) + "\xD7" + we(n), we(a) + "\xB3")}`,
          val: 12 * t * n / a ** 3,
          label: "Corte Y"
        },
        {
          name: `${Be("6\xB7" + L("E") + "\xB7" + L("I", "z"), L("L") + "\xB2")}`,
          calc: `${Be("6\xD7" + we(t) + "\xD7" + we(n), we(a) + "\xB2")}`,
          val: 6 * t * n / a ** 2,
          label: "Corte-Momento Z"
        },
        {
          name: `${Be("12\xB7" + L("E") + "\xB7" + L("I", "y"), L("L") + "\xB3")}`,
          calc: `${Be("12\xD7" + we(t) + "\xD7" + we(l), we(a) + "\xB3")}`,
          val: 12 * t * l / a ** 3,
          label: "Corte Z"
        },
        {
          name: `${Be("6\xB7" + L("E") + "\xB7" + L("I", "y"), L("L") + "\xB2")}`,
          calc: `${Be("6\xD7" + we(t) + "\xD7" + we(l), we(a) + "\xB2")}`,
          val: 6 * t * l / a ** 2,
          label: "Corte-Momento Y"
        },
        {
          name: `${Be(L("G") + "\xB7" + L("J"), L("L"))}`,
          calc: `${Be(we(s) + "\xD7" + we(d), we(a))}`,
          val: s * d / a,
          label: "Torsi\xF3n"
        },
        {
          name: `${Be("4\xB7" + L("E") + "\xB7" + L("I", "z"), L("L"))}`,
          calc: `${Be("4\xD7" + we(t) + "\xD7" + we(n), we(a))}`,
          val: 4 * t * n / a,
          label: "Flexi\xF3n Z (4EI/L)"
        },
        {
          name: `${Be("2\xB7" + L("E") + "\xB7" + L("I", "z"), L("L"))}`,
          calc: `${Be("2\xD7" + we(t) + "\xD7" + we(n), we(a))}`,
          val: 2 * t * n / a,
          label: "Flexi\xF3n Z (2EI/L)"
        },
        {
          name: `${Be("4\xB7" + L("E") + "\xB7" + L("I", "y"), L("L"))}`,
          calc: `${Be("4\xD7" + we(t) + "\xD7" + we(l), we(a))}`,
          val: 4 * t * l / a,
          label: "Flexi\xF3n Y (4EI/L)"
        },
        {
          name: `${Be("2\xB7" + L("E") + "\xB7" + L("I", "y"), L("L"))}`,
          calc: `${Be("2\xD7" + we(t) + "\xD7" + we(l), we(a))}`,
          val: 2 * t * l / a,
          label: "Flexi\xF3n Y (2EI/L)"
        }
      ].map((p) => `<div class="coeff-item"><div style="color:var(--fem-eq-sub);font-size:10px;font-family:monospace;margin-bottom:2px">${p.label}</div>${p.name} = ${p.calc} = <span class="highlight">${we(p.val)}</span></div>`).join("")}</div>`;
    }
    function Qn(t, o, n, l) {
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
    `, document.body.appendChild(d), (_a2 = d.querySelector("#fem-full-close")) == null ? void 0 : _a2.addEventListener("click", () => d.remove()), d.addEventListener("click", (a) => {
        a.target === d && d.remove();
      });
    }
    function Ws(t) {
      var _a2, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l2, _m, _n2, _o2, _p, _q, _r, _s2, _t2, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I, _J, _K, _L, _M, _N, _O;
      so && so.remove();
      const o = e.nodes.val, n = e.elements.val, l = n[t], s = l.map((x) => o[x]), d = l.length === 2, a = ((_a2 = e.elementInputs) == null ? void 0 : _a2.val) || {}, i = (_b = e.deformOutputs) == null ? void 0 : _b.val, p = (_c = e.analyzeOutputs) == null ? void 0 : _c.val;
      if (d) {
        const x = _o(Mo(s[1], s[0])), u = ((_d = a.elasticities) == null ? void 0 : _d.get(t)) ?? 0, I = ((_e2 = a.areas) == null ? void 0 : _e2.get(t)) ?? 0, A = ((_f = a.momentsOfInertiaZ) == null ? void 0 : _f.get(t)) ?? 0, R = ((_g = a.momentsOfInertiaY) == null ? void 0 : _g.get(t)) ?? 0, j = ((_h = a.shearModuli) == null ? void 0 : _h.get(t)) ?? 0, g = ((_i = a.torsionalConstants) == null ? void 0 : _i.get(t)) ?? 0, S = ((_j = a.momentReleases) == null ? void 0 : _j.get(t)) || [], v = ((_k = a.partialFixitySprings) == null ? void 0 : _k.get(t)) || [], F = [
          "P (Axial)",
          "V2 (Corte)",
          "V3 (Corte)",
          "T (Torsi\xF3n)",
          "M22 (Momento)",
          "M33 (Momento)"
        ];
        let K = "";
        for (let U = 0; U < 6; U++) {
          const ae = U, Q = U + 6, X = (S.length >= 12 ? S[ae] : U >= 3 && S.length >= 6 && S[U - 3]) ? "checked" : "", ie = (S.length >= 12 ? S[Q] : U >= 3 && S.length >= 6 && S[U]) ? "checked" : "", re = v.length >= 12 && v[ae] > 0 ? v[ae].toFixed(1) : "", Me = v.length >= 12 && v[Q] > 0 ? v[Q].toFixed(1) : "";
          K += `<tr>
          <td style="text-align:left;color:var(--fem-key)">${F[U]}</td>
          <td style="text-align:center"><input type="checkbox" data-rel="${ae}" ${X}></td>
          <td style="text-align:center"><input type="checkbox" data-rel="${Q}" ${ie}></td>
          <td><input type="number" data-spr="${ae}" value="${re}" placeholder="0" style="width:50px;background:var(--fem-bg);color:var(--fem-val);border:1px solid var(--fem-border);font-size:10px;text-align:right"></td>
          <td><input type="number" data-spr="${Q}" value="${Me}" placeholder="0" style="width:50px;background:var(--fem-bg);color:var(--fem-val);border:1px solid var(--fem-border);font-size:10px;text-align:right"></td>
        </tr>`;
        }
        `${l[0]}${l[1]}${we(x)}${we(u)}${we(I)}${we(A)}${we(R)}${we(j)}${we(g)}${K}`;
      } else {
        const x = ((_l2 = a.elasticities) == null ? void 0 : _l2.get(t)) ?? 0, u = ((_m = a.thicknesses) == null ? void 0 : _m.get(t)) ?? 0, I = ((_n2 = a.poissonsRatios) == null ? void 0 : _n2.get(t)) ?? 0, A = x / (2 * (1 + I)), R = l.length === 4, j = x / (1 - I * I);
        `${l.length}${l.join(", ")}${we(x)}${we(A)}${we(u)}${we(I)}`, R && (w = `<div class="fem-eq eq-box">
          <div style="text-align:left;margin-bottom:6px"><strong style="color:var(--fem-section-title)">Formulaci\xF3n Q4: Membrana + Mindlin-Reissner + Drilling</strong></div>

          <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">1. Matriz constitutiva (esfuerzo plano):</strong></div>
          <div>${L("D")} = ${Be(L("E"), "1\u2212\u03BD\xB2")} \xB7 <span class="mat-sym" style="grid-template-columns:repeat(3,auto)">
            <span class="cell">1</span><span class="cell">\u03BD</span><span class="cell">0</span>
            <span class="cell">\u03BD</span><span class="cell">1</span><span class="cell">0</span>
            <span class="cell">0</span><span class="cell">0</span><span class="cell">${Be("1\u2212\u03BD", "2")}</span>
          </span> = ${Be(we(x), "1\u2212" + we(I) + "\xB2")} = <span class="highlight">${we(j)}</span></div>

          <div style="text-align:left;margin-top:8px;margin-bottom:4px"><strong style="color:var(--fem-section-title)">2. Funciones de forma (Ec. 6.2, Wilson):</strong></div>
          <div>${L("N", "i")} = \xBC\xB7(1\xB1\u03BE)\xB7(1\xB1\u03B7) &nbsp;&nbsp; <sub style="color:var(--fem-label)">i = 1..4 (bilineal)</sub></div>

          <div style="text-align:left;margin-top:8px;margin-bottom:4px"><strong style="color:var(--fem-section-title)">3. Modos incompatibles (Ec. 6.13, Wilson 1971):</strong></div>
          <div>${L("N", "5")} = 1 \u2212 \u03BE\xB2 &nbsp;&nbsp; ${L("N", "6")} = 1 \u2212 \u03B7\xB2</div>
          <div style="margin-top:4px">${L("u", "x")} = \u03A3${L("N", "i")}\xB7${L("u", "xi")} + \u03B1\u2081\xB7${L("N", "5")} + \u03B1\u2082\xB7${L("N", "6")} &nbsp;<sub style="color:var(--fem-label)">(Ec. 6.12)</sub></div>
          <div>${L("u", "y")} = \u03A3${L("N", "i")}\xB7${L("u", "yi")} + \u03B1\u2083\xB7${L("N", "5")} + \u03B1\u2084\xB7${L("N", "6")}</div>

          <div style="text-align:left;margin-top:8px;margin-bottom:4px"><strong style="color:var(--fem-section-title)">4. Deformaci\xF3n-desplazamiento (Ec. 6.3):</strong></div>
          <div>${L("d")} = [${L("B", "C")} &nbsp; ${L("B", "I")}] \xB7 [${L("u")} &nbsp; \u03B1]<sup>T</sup></div>

          <div style="text-align:left;margin-top:8px;margin-bottom:4px"><strong style="color:var(--fem-section-title)">5. Submatrices de rigidez (Ec. 6.9):</strong></div>
          <div>${L("k", "CC")} = \u222B${L("B", "C")}<sup>T</sup>\xB7${L("E")}\xB7${L("B", "C")} dV &nbsp;<sub style="color:var(--fem-label)">(8\xD78 est\xE1ndar)</sub></div>
          <div>${L("k", "CI")} = \u222B${L("B", "C")}<sup>T</sup>\xB7${L("E")}\xB7${L("B\u0304", "I")} dV &nbsp;<sub style="color:var(--fem-label)">(8\xD74 acoplamiento)</sub></div>
          <div>${L("k", "II")} = \u222B${L("B\u0304", "I")}<sup>T</sup>\xB7${L("E")}\xB7${L("B\u0304", "I")} dV &nbsp;<sub style="color:var(--fem-label)">(4\xD74 modos internos)</sub></div>

          <div style="text-align:left;margin-top:8px;margin-bottom:4px"><strong style="color:var(--fem-section-title)">6. Condensaci\xF3n est\xE1tica (Ec. 6.11):</strong></div>
          <div style="font-size:13px"><span class="highlight">${L("k", "C")} = ${L("k", "CC")} \u2212 ${L("k", "CI")} \xB7 ${L("k", "II")}\u207B\xB9 \xB7 ${L("k", "IC")}</span></div>
          <div style="margin-top:4px;color:var(--fem-eq-sub)">Los 4 modos incompatibles \u03B1 se eliminan antes del ensamblaje global</div>

          <div style="text-align:left;margin-top:8px;margin-bottom:4px"><strong style="color:var(--fem-section-title)">7. Correcci\xF3n de Taylor (Ec. 6.7):</strong></div>
          <div>${L("B\u0304", "I")} = ${L("B", "I")} + ${L("B", "IC")} &nbsp; donde &nbsp; ${L("B", "IC")} = \u2212${Be("1", "V")}\u222B${L("B", "I")} dV</div>
          <div style="color:var(--fem-eq-sub)">Jacobiano del centro para modos incompatibles \u2192 pasa patch test</div>

          <div style="text-align:left;margin-top:8px;margin-bottom:4px"><strong style="color:var(--fem-section-title)">8. Drilling DOF (Hughes-Brezzi 1989):</strong></div>
          <div>${L("K", "drill")} = \u03B1\xB7${L("G")}\xB7${L("t")} \xB7 \u222B${L("B", "d")}<sup>T</sup>\xB7${L("B", "d")} dA &nbsp; donde \u03B1 = 0.5</div>
          <div>${L("B", "d")}[i] = \u03B8<sub>z,i</sub> \u2212 \xBD\xB7(\u2202v/\u2202x \u2212 \u2202u/\u2202y) &nbsp;<sub style="color:var(--fem-label)">(rotaci\xF3n antisim\xE9trica)</sub></div>

          <div style="text-align:left;margin-top:8px;margin-bottom:4px"><strong style="color:var(--fem-section-title)">9. Placa Mindlin-Reissner + MITC4:</strong></div>
          <div>${L("D", "b")} = ${Be(L("E") + "\xB7" + L("t") + "\xB3", "12\xB7(1\u2212\u03BD\xB2)")} = <span class="highlight">${we(x * u ** 3 / (12 * (1 - I ** 2)))}</span></div>
          <div>${L("D", "s")} = \u03BA\xB7${L("G")}\xB7${L("t")} = <span class="highlight">${we(5 / 6 * A * u)}</span> &nbsp; <sub style="color:var(--fem-label)">\u03BA = 5/6</sub></div>
          <div style="color:var(--fem-eq-sub)">MITC4: interpolaci\xF3n de cortante en puntos de atado (tying points)</div>

          <div style="text-align:left;margin-top:8px;margin-bottom:4px"><strong style="color:var(--fem-section-title)">10. Ensamblaje final:</strong></div>
          <div>${L("K", "24\xD724")} = ${L("K", "membrana")}(8\xD78) + ${L("K", "flexi\xF3n")}(12\xD712) + ${L("K", "drilling")}(12\xD712)</div>
          <div style="color:var(--fem-eq-sub)">DOFs por nodo: [u, v, w, \u03B8x, \u03B8y, \u03B8z]</div>
        </div>`);
      }
      let r = "", c = "", m = "", w = "", E = "", y = "", f = "", h = "", T = null, k = null, $ = null, C = [];
      try {
        if (T = Sn(s, a, t), k = In(s), $ = co(cs(k), co(T, k)), C = d ? [
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
          const A = _o(Mo(s[1], s[0])), R = ((_o2 = a.elasticities) == null ? void 0 : _o2.get(t)) ?? 0, j = ((_p = a.areas) == null ? void 0 : _p.get(t)) ?? 0, g = ((_q = a.momentsOfInertiaZ) == null ? void 0 : _q.get(t)) ?? 0, S = ((_r = a.momentsOfInertiaY) == null ? void 0 : _r.get(t)) ?? 0, v = ((_s2 = a.shearModuli) == null ? void 0 : _s2.get(t)) ?? 0, F = ((_t2 = a.torsionalConstants) == null ? void 0 : _t2.get(t)) ?? 0;
          w = Oa(R, j, g, S, v, F, A);
        }
        E = Na(s), y = qa(), f = _a(l), h = Da(d);
        const x = '<button class="fem-expand-btn" data-full="kLocal">\u26F6 Ver completa</button>', u = '<button class="fem-expand-btn" data-full="T">\u26F6 Ver completa</button>', I = '<button class="fem-expand-btn" data-full="kGlobal">\u26F6 Ver completa</button>';
        r = `<div class="matrix-label">k_local (${T.length}\xD7${T.length}) ${x}</div>${Kn(T, C)}`, c = `<div class="matrix-label">T \u2014 Transformaci\xF3n (${k.length}\xD7${k.length}) ${u}</div>${Kn(k, C)}`, m = `<div class="matrix-label">K_global = T^T \xB7 k \xB7 T ${I}</div>${Kn($, C)}`;
      } catch (x) {
        r = `<div style="color:red">Error: ${x.message}</div>`;
      }
      if (i == null ? void 0 : i.deformations) {
        const x = [
          "ux",
          "uy",
          "uz",
          "\u03B8x",
          "\u03B8y",
          "\u03B8z"
        ];
        l.map((u, I) => {
          var _a3;
          const A = ((_a3 = i.deformations) == null ? void 0 : _a3.get(u)) || [
            0,
            0,
            0,
            0,
            0,
            0
          ], R = x.map((j, g) => `<span class="prop-key">${j}</span>: <span class="${Math.abs(A[g]) > 1e-10 ? "result-val" : ""}">${we(A[g])}</span>`).join(" &nbsp;");
          return `<div style="margin-bottom:2px"><strong>Nodo ${u}:</strong> ${R}</div>`;
        }).join("");
      }
      if (p && d && (i == null ? void 0 : i.deformations) && T && k) {
        const x = (_u = p.normals) == null ? void 0 : _u.get(t), u = (_v = p.shearsY) == null ? void 0 : _v.get(t), I = (_w = p.shearsZ) == null ? void 0 : _w.get(t), A = (_x = p.torsions) == null ? void 0 : _x.get(t), R = (_y = p.bendingsY) == null ? void 0 : _y.get(t), j = (_z = p.bendingsZ) == null ? void 0 : _z.get(t), g = [
          "ux",
          "uy",
          "uz",
          "\u03B8x",
          "\u03B8y",
          "\u03B8z"
        ], S = [];
        for (const Q of l) {
          const X = ((_A = i.deformations) == null ? void 0 : _A.get(Q)) || [
            0,
            0,
            0,
            0,
            0,
            0
          ];
          S.push(...X);
        }
        let v = [];
        try {
          v = co(k, S);
        } catch {
          v = new Array(12).fill(0);
        }
        let F = [];
        try {
          F = co(T, v);
        } catch {
          F = new Array(12).fill(0);
        }
        const K = (Q, X) => Q.map((ie, re) => `<span style="color:${Math.abs(ie) > 1e-10 ? "var(--fem-nonzero)" : "var(--fem-eq-dots)"}">${X[re % 6]}=${we(ie)}</span>`).join(", "), ae = [
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
        ].map((Q, X) => `${Q}${X < 6 ? "\u1D62" : "\u2C7C"}`);
        `${L("u", "global")}${l.map((Q, X) => `<span style="color:var(--fem-label)">nodo ${Q}:</span> ${g.map((ie, re) => `<span style="color:${Math.abs(S[X * 6 + re]) > 1e-10 ? "var(--fem-eq-var)" : "var(--fem-eq-dots)"}">${we(S[X * 6 + re])}</span>`).join(", ")}`).join(" | ")}${L("u", "local")}${L("T")}${L("u", "global")}${L("u", "local")}${K(v, [
          ...g,
          ...g
        ])}${L("f", "local")}${L("k", "local")}${L("u", "local")}${L("f", "local")}${F.map((Q, X) => `<span style="color:${Math.abs(Q) > 1e-10 ? "var(--fem-nonzero)" : "var(--fem-eq-dots)"}">${ae[X]}=${we(Q)}</span>`).join(", ")}${L("P", "1")}${L("N", "i")}${we(F[0])}${L("P", "7")}${L("N", "j")}${we(F[6])}${L("P", "2")}${L("V", "y,i")}${we(F[1])}${L("P", "8")}${L("V", "y,j")}${we(F[7])}${L("P", "3")}${L("V", "z,i")}${we(F[2])}${L("P", "9")}${L("V", "z,j")}${we(F[8])}${L("P", "4")}${L("M", "x,i")}${we(F[3])}${L("P", "10")}${L("M", "x,j")}${we(F[9])}${L("P", "5")}${L("M", "y,i")}${we(F[4])}${L("P", "11")}${L("M", "y,j")}${we(F[10])}${L("P", "6")}${L("M", "z,i")}${we(F[5])}${L("P", "12")}${L("M", "z,j")}${we(F[11])}${x ? x.map((Q) => we(Q)).join(", ") : "\u2014"}${u ? u.map((Q) => we(Q)).join(", ") : "\u2014"}${I ? I.map((Q) => we(Q)).join(", ") : "\u2014"}${A ? A.map((Q) => we(Q)).join(", ") : "\u2014"}${R ? R.map((Q) => we(Q)).join(", ") : "\u2014"}${j ? j.map((Q) => we(Q)).join(", ") : "\u2014"}`;
      } else if (p && d) {
        const x = (_B = p.normals) == null ? void 0 : _B.get(t), u = (_C = p.shearsY) == null ? void 0 : _C.get(t), I = (_D = p.shearsZ) == null ? void 0 : _D.get(t), A = (_E = p.torsions) == null ? void 0 : _E.get(t), R = (_F = p.bendingsY) == null ? void 0 : _F.get(t), j = (_G = p.bendingsZ) == null ? void 0 : _G.get(t);
        `${x ? x.map((g) => we(g)).join(", ") : "\u2014"}${u ? u.map((g) => we(g)).join(", ") : "\u2014"}${I ? I.map((g) => we(g)).join(", ") : "\u2014"}${A ? A.map((g) => we(g)).join(", ") : "\u2014"}${R ? R.map((g) => we(g)).join(", ") : "\u2014"}${j ? j.map((g) => we(g)).join(", ") : "\u2014"}`;
      } else if (p && !d) {
        const x = (_H = p.bendingXX) == null ? void 0 : _H.get(t), u = (_I = p.bendingYY) == null ? void 0 : _I.get(t), I = (_J = p.bendingXY) == null ? void 0 : _J.get(t), A = (_K = p.membraneXX) == null ? void 0 : _K.get(t), R = (_L = p.membraneYY) == null ? void 0 : _L.get(t), j = (_M = p.membraneXY) == null ? void 0 : _M.get(t);
        `${x ? x.map((g) => we(g)).join(", ") : "\u2014"}${u ? u.map((g) => we(g)).join(", ") : "\u2014"}${I ? I.map((g) => we(g)).join(", ") : "\u2014"}${A ? A.map((g) => we(g)).join(", ") : "\u2014"}${R ? R.map((g) => we(g)).join(", ") : "\u2014"}${j ? j.map((g) => we(g)).join(", ") : "\u2014"}`;
      }
      `${l[0]}`, 6 * l[0], 6 * l[0] + 5, `${l[1]}`, 6 * l[1], 6 * l[1] + 5, l.length === 3 && (`${l[2]}`, 6 * l[2], 6 * l[2] + 5), o.length * 6, o.length * 6, so = $l(t, o, n, a, i, p), so.id = "fem-inspect-panel", document.body.appendChild(so), (_N = so.querySelector("#er-close")) == null ? void 0 : _N.addEventListener("click", () => Fo()), (_O = so.querySelector("#rel-apply")) == null ? void 0 : _O.addEventListener("click", () => {
        const x = so.querySelectorAll("input[data-rel]"), u = so.querySelectorAll("input[data-spr]"), I = new Array(12).fill(false), A = new Array(12).fill(0);
        x.forEach((j) => {
          I[parseInt(j.dataset.rel)] = j.checked;
        }), u.forEach((j) => {
          const g = parseFloat(j.value);
          g > 0 && (A[parseInt(j.dataset.spr)] = g);
        }), a.momentReleases || (a.momentReleases = /* @__PURE__ */ new Map()), a.partialFixitySprings || (a.partialFixitySprings = /* @__PURE__ */ new Map()), I.some((j) => j) ? a.momentReleases.set(t, I) : a.momentReleases.delete(t), A.some((j) => j > 0) ? a.partialFixitySprings.set(t, A) : a.partialFixitySprings.delete(t), console.log(`Releases elem ${t}:`, I.map((j, g) => j ? relIds[g] : "").filter(Boolean).join(" ") || "none"), console.log(`Springs elem ${t}:`, A);
        const R = so.querySelector("#rel-apply");
        R.textContent = "\u2713 Aplicado", R.style.background = "#4caf50", setTimeout(() => {
          R.textContent = "Aplicar", R.style.background = "var(--fem-heading)";
        }, 1500);
      });
      const B = d ? (() => {
        var _a3, _b2, _c2, _d2, _e3, _f2;
        const x = _o(Mo(s[1], s[0])), u = ((_a3 = a.elasticities) == null ? void 0 : _a3.get(t)) ?? 0, I = ((_b2 = a.areas) == null ? void 0 : _b2.get(t)) ?? 0, A = ((_c2 = a.momentsOfInertiaZ) == null ? void 0 : _c2.get(t)) ?? 0, R = ((_d2 = a.momentsOfInertiaY) == null ? void 0 : _d2.get(t)) ?? 0, j = ((_e3 = a.shearModuli) == null ? void 0 : _e3.get(t)) ?? 0, g = ((_f2 = a.torsionalConstants) == null ? void 0 : _f2.get(t)) ?? 0;
        return Ba(u, I, A, R, j, g, x);
      })() : void 0;
      so.querySelectorAll("[data-full]").forEach((x) => {
        x.addEventListener("click", (u) => {
          u.stopPropagation();
          const I = x.dataset.full;
          if (I === "kLocal" && T) {
            const A = d ? js() : "<em>Shell 18\xD718 \u2014 ver tabla num\xE9rica</em>";
            Qn(`Elemento ${t} \u2014 Rigidez Local k_local`, A, Zn(T, C), B);
          } else if (I === "T" && k) Qn(`Elemento ${t} \u2014 Transformaci\xF3n T`, E, Zn(k, C));
          else if (I === "kGlobal" && $) {
            const A = d ? js() : "<em>Shell 18\xD718</em>";
            Qn(`Elemento ${t} \u2014 Rigidez Global K = T^T \xB7 k \xB7 T`, A, Zn($, C), B);
          }
        });
      });
    }
    function Gs() {
      const l = [], s = [];
      for (let y = 0; y <= 8; y++) {
        const f = y / 8, h = 30 * f, k = 12 * (1 - f) * (1 - f * 0.3) / 2, $ = l.length;
        if (l.push([
          -k,
          -k,
          h
        ]), l.push([
          k,
          -k,
          h
        ]), l.push([
          k,
          k,
          h
        ]), l.push([
          -k,
          k,
          h
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
        ]), y > 0 && y < 8 && (s.push([
          $,
          $ + 2
        ]), s.push([
          $ + 1,
          $ + 3
        ])), y > 0) {
          const C = $ - 4;
          for (let B = 0; B < 4; B++) s.push([
            C + B,
            $ + B
          ]);
          s.push([
            C,
            $ + 1
          ]), s.push([
            C + 1,
            $ + 2
          ]), s.push([
            C + 2,
            $ + 3
          ]), s.push([
            C + 3,
            $
          ]);
        }
      }
      const d = /* @__PURE__ */ new Map();
      for (let y = 0; y < 4; y++) d.set(y, [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
      const a = l.length - 4, i = /* @__PURE__ */ new Map();
      for (let y = 0; y < 4; y++) i.set(a + y, [
        0,
        0,
        -50,
        0,
        0,
        0
      ]);
      e.nodes.val = l, e.elements.val = s, e.nodeInputs && (e.nodeInputs.val = {
        supports: d,
        loads: i
      });
      const p = 2e8, r = 77e6, c = 5e-3, m = 2e-6, w = 1e-6, E = {
        elasticities: new Map(s.map((y, f) => [
          f,
          p
        ])),
        shearModuli: new Map(s.map((y, f) => [
          f,
          r
        ])),
        areas: new Map(s.map((y, f) => [
          f,
          c
        ])),
        momentsOfInertiaZ: new Map(s.map((y, f) => [
          f,
          m
        ])),
        momentsOfInertiaY: new Map(s.map((y, f) => [
          f,
          m
        ])),
        torsionalConstants: new Map(s.map((y, f) => [
          f,
          w
        ]))
      };
      e.elementInputs && (e.elementInputs.val = E);
      try {
        const y = Pt(l, s, {
          supports: d,
          loads: i
        }, E);
        y && e.deformOutputs && (e.deformOutputs.val = y);
      } catch (y) {
        console.warn("Eiffel deform:", y.message);
      }
      setTimeout(() => It(), 50), nt(), console.log(`Torre Eiffel: ${l.length} nodos, ${s.length} elementos, H=30m`);
    }
    function Ys() {
      const l = [], s = [];
      for (let E = 0; E <= 20; E++) {
        const y = E / 20, f = 20 * y, h = 20 * (1 - Math.pow(2 * y - 1, 2)), T = 2;
        l.push([
          f,
          -2 / 2,
          h
        ]), l.push([
          f,
          T / 2,
          h
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
      const i = 2e8, p = 77e6, r = 0.01, c = 5e-6, m = 2e-6, w = {
        elasticities: new Map(s.map((E, y) => [
          y,
          i
        ])),
        shearModuli: new Map(s.map((E, y) => [
          y,
          p
        ])),
        areas: new Map(s.map((E, y) => [
          y,
          r
        ])),
        momentsOfInertiaZ: new Map(s.map((E, y) => [
          y,
          c
        ])),
        momentsOfInertiaY: new Map(s.map((E, y) => [
          y,
          c
        ])),
        torsionalConstants: new Map(s.map((E, y) => [
          y,
          m
        ]))
      };
      e.elementInputs && (e.elementInputs.val = w);
      try {
        const E = Pt(l, s, {
          supports: d,
          loads: a
        }, w);
        E && e.deformOutputs && (e.deformOutputs.val = E);
      } catch (E) {
        console.warn("Arco:", E.message);
      }
      setTimeout(() => It(), 50), nt(), console.log(`Arco Gateway: ${l.length} nodos, ${s.length} elem, span=20m, H=20m`);
    }
    function Js() {
      const d = [], a = [];
      for (let f = 0; f <= 16; f++) {
        const h = 60 * f / 16;
        d.push([
          h,
          -6 / 2,
          8
        ]), d.push([
          h,
          6 / 2,
          8
        ]);
      }
      const i = d.length;
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
      const p = [
        Math.round(16 / 3),
        Math.round(2 * 16 / 3)
      ], r = [];
      for (const f of p) {
        const h = 60 * f / 16, T = d.length;
        d.push([
          h,
          -6 / 2,
          0
        ]);
        const k = d.length;
        d.push([
          h,
          6 / 2,
          0
        ]);
        const $ = d.length;
        d.push([
          h,
          -6 / 2,
          28
        ]);
        const C = d.length;
        d.push([
          h,
          6 / 2,
          28
        ]), r.push($, C), a.push([
          T,
          f * 2
        ]), a.push([
          f * 2,
          $
        ]), a.push([
          k,
          f * 2 + 1
        ]), a.push([
          f * 2 + 1,
          C
        ]), a.push([
          $,
          C
        ]);
      }
      for (const f of r) {
        const h = d[f][0];
        for (let T = 0; T <= 16; T++) {
          const k = 60 * T / 16;
          if (Math.abs(k - h) > 60 * 0.05 && Math.abs(k - h) < 60 * 0.45) {
            const $ = d[f][1] < 0 ? T * 2 : T * 2 + 1;
            T % 2 === 0 && a.push([
              f,
              $
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
      for (let f = i; f < i + p.length * 4; f += 4) c.set(f, [
        true,
        true,
        true,
        true,
        true,
        true
      ]), c.set(f + 1, [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
      const m = /* @__PURE__ */ new Map();
      for (let f = 0; f <= 16; f++) m.set(f * 2, [
        0,
        0,
        -30,
        0,
        0,
        0
      ]), m.set(f * 2 + 1, [
        0,
        0,
        -30,
        0,
        0,
        0
      ]);
      e.nodes.val = d, e.elements.val = a, e.nodeInputs && (e.nodeInputs.val = {
        supports: c,
        loads: m
      });
      const w = 2e8, E = 77e6, y = {
        elasticities: new Map(a.map((f, h) => [
          h,
          w
        ])),
        shearModuli: new Map(a.map((f, h) => [
          h,
          E
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
      e.elementInputs && (e.elementInputs.val = y);
      try {
        const f = Pt(d, a, {
          supports: c,
          loads: m
        }, y);
        f && e.deformOutputs && (e.deformOutputs.val = f);
      } catch (f) {
        console.warn("Puente:", f.message);
      }
      setTimeout(() => It(), 50), nt(), console.log(`Puente atirantado: ${d.length} nodos, ${a.length} elem, span=60m`);
    }
    function Vs() {
      const d = [], a = [];
      for (let h = 0; h <= 12; h++) {
        const T = h * 3.5, k = h * 5 * Math.PI / 180;
        for (let $ = 0; $ < 6; $++) {
          const C = k + 2 * Math.PI * $ / 6, B = 5 * Math.cos(C), x = 5 * Math.sin(C);
          d.push([
            B,
            x,
            T
          ]);
        }
      }
      for (let h = 0; h <= 12; h++) {
        const T = h * 6;
        for (let k = 0; k < 6; k++) a.push([
          T + k,
          T + (k + 1) % 6
        ]);
        if (h < 12) {
          const k = (h + 1) * 6;
          for (let $ = 0; $ < 6; $++) a.push([
            T + $,
            k + $
          ]), a.push([
            T + $,
            k + ($ + 1) % 6
          ]);
        }
      }
      for (let h = 0; h <= 12; h++) {
        const T = d.length;
        d.push([
          0,
          0,
          h * 3.5
        ]);
        const k = h * 6;
        for (let $ = 0; $ < 6; $++) a.push([
          T,
          k + $
        ]);
      }
      const i = 13 * 6;
      for (let h = 0; h < 12; h++) a.push([
        i + h,
        i + h + 1
      ]);
      const p = /* @__PURE__ */ new Map();
      for (let h = 0; h < 6; h++) p.set(h, [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
      p.set(i, [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
      const r = /* @__PURE__ */ new Map();
      for (let h = 1; h <= 12; h++) {
        const T = 10 * h / 12, k = h * 6;
        for (let $ = 0; $ < 6; $++) r.set(k + $, [
          T,
          0,
          -5,
          0,
          0,
          0
        ]);
      }
      e.nodes.val = d, e.elements.val = a, e.nodeInputs && (e.nodeInputs.val = {
        supports: p,
        loads: r
      });
      const c = 2e8, m = 77e6, w = 8e-3, E = 1e-5, y = 5e-6, f = {
        elasticities: new Map(a.map((h, T) => [
          T,
          c
        ])),
        shearModuli: new Map(a.map((h, T) => [
          T,
          m
        ])),
        areas: new Map(a.map((h, T) => [
          T,
          w
        ])),
        momentsOfInertiaZ: new Map(a.map((h, T) => [
          T,
          E
        ])),
        momentsOfInertiaY: new Map(a.map((h, T) => [
          T,
          E
        ])),
        torsionalConstants: new Map(a.map((h, T) => [
          T,
          y
        ]))
      };
      e.elementInputs && (e.elementInputs.val = f);
      try {
        const h = Pt(d, a, {
          supports: p,
          loads: r
        }, f);
        h && e.deformOutputs && (e.deformOutputs.val = h);
      } catch (h) {
        console.warn("Twisted:", h.message);
      }
      setTimeout(() => It(), 50), nt(), console.log(`Torre Twist: ${d.length} nodos, ${a.length} elem, 12 pisos, twist=5deg/piso`);
    }
    function Us() {
      const s = [], d = [];
      for (let f = 0; f <= 20; f++) {
        const h = f / 20, T = f * 3;
        let k = 8 * (1 - h * 0.7);
        h > 0.4 && (k *= 0.85), h > 0.7 && (k *= 0.7);
        const $ = s.length;
        s.push([
          0,
          0,
          T
        ]);
        for (let C = 0; C < 3; C++) {
          const B = C * 2 * Math.PI / 3 - Math.PI / 2, x = k * Math.cos(B), u = k * Math.sin(B), I = s.length;
          s.push([
            x,
            u,
            T
          ]), d.push([
            $,
            I
          ]);
          const A = s.length;
          s.push([
            x * 0.5,
            u * 0.5,
            T
          ]), d.push([
            $,
            A
          ]), d.push([
            A,
            I
          ]);
        }
        for (let C = 0; C < 3; C++) {
          const B = $ + 1 + C * 2, x = $ + 1 + (C + 1) % 3 * 2;
          d.push([
            B,
            x
          ]);
        }
        if (f < 20) {
          const B = $ + 7;
          d.push([
            $,
            B
          ]);
          for (let x = 0; x < 3; x++) d.push([
            $ + 1 + x * 2,
            B + 1 + x * 2
          ]), d.push([
            $ + 2 + x * 2,
            B + 2 + x * 2
          ]), d.push([
            $ + 1 + x * 2,
            B + 2 + x * 2
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
      const p = /* @__PURE__ */ new Map();
      for (let f = 1; f <= 20; f++) {
        const h = f * i, T = 5 * f / 20;
        p.set(h, [
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
        loads: p
      });
      const r = 35e6, c = 14e6, m = 0.02, w = 5e-5, E = 2e-5, y = {
        elasticities: new Map(d.map((f, h) => [
          h,
          r
        ])),
        shearModuli: new Map(d.map((f, h) => [
          h,
          c
        ])),
        areas: new Map(d.map((f, h) => [
          h,
          m
        ])),
        momentsOfInertiaZ: new Map(d.map((f, h) => [
          h,
          w
        ])),
        momentsOfInertiaY: new Map(d.map((f, h) => [
          h,
          w
        ])),
        torsionalConstants: new Map(d.map((f, h) => [
          h,
          E
        ]))
      };
      e.elementInputs && (e.elementInputs.val = y);
      try {
        const f = Pt(s, d, {
          supports: a,
          loads: p
        }, y);
        f && e.deformOutputs && (e.deformOutputs.val = f);
      } catch (f) {
        console.warn("Burj:", f.message);
      }
      setTimeout(() => It(), 50), nt(), console.log(`Burj Khalifa: ${s.length} nodos, ${d.length} elem, 20 pisos, H=${20 * 3}m`);
    }
    function Xs() {
      const t = [], o = [];
      for (let m = 0; m < 3; m++) {
        const w = m * 12, E = 15 - m * 2, y = 20 - m * 3, f = 8 - m, h = t.length;
        for (let k = 0; k <= 4; k++) {
          const $ = k / 4, C = -f / 2 + f * $, B = y * (1 - $ * $ * 0.3);
          for (let x = 0; x <= 12; x++) {
            const u = x / 12, I = w + B * u, A = E * Math.sin(Math.PI * u) * (1 - $ * $ * 0.5), R = C;
            t.push([
              I,
              R,
              A
            ]);
          }
        }
        const T = 13;
        for (let k = 0; k < 4; k++) for (let $ = 0; $ < 12; $++) {
          const C = h + k * T + $, B = h + k * T + $ + 1, x = h + (k + 1) * T + $ + 1, u = h + (k + 1) * T + $;
          o.push([
            C,
            B,
            x,
            u
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
      const d = /* @__PURE__ */ new Map();
      for (let m = 0; m < t.length; m++) t[m][2] > 2 && d.set(m, [
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
      const a = 35e6, i = 0.2, p = 0.15, r = a / (2 * (1 + i)), c = {
        elasticities: new Map(o.map((m, w) => [
          w,
          a
        ])),
        poissonsRatios: new Map(o.map((m, w) => [
          w,
          i
        ])),
        thicknesses: new Map(o.map((m, w) => [
          w,
          p
        ])),
        shearModuli: new Map(o.map((m, w) => [
          w,
          r
        ]))
      };
      e.elementInputs && (e.elementInputs.val = c);
      try {
        const m = Pt(t, o, {
          supports: s,
          loads: d
        }, c);
        m && e.deformOutputs && (e.deformOutputs.val = m);
      } catch (m) {
        console.warn("Opera:", m.message);
      }
      setTimeout(() => It(), 50), nt(), console.log(`Sydney Opera: ${t.length} nodos, ${o.length} shells Q4, 3 velas`);
    }
    function Ks() {
      const l = [], s = [];
      for (let y = 0; y <= 15; y++) {
        const f = y / 15, h = y * 3.5, T = 5 * (0.6 + 0.4 * Math.sin(Math.PI * f));
        if (f > 0.9) {
          const k = 5 * (0.6 + 0.4 * Math.sin(Math.PI * 0.9)) * (1 - (f - 0.9) * 8);
          for (let $ = 0; $ < 12; $++) {
            const C = 2 * Math.PI * $ / 12;
            l.push([
              Math.max(k, 1) * Math.cos(C),
              Math.max(k, 1) * Math.sin(C),
              h
            ]);
          }
        } else for (let k = 0; k < 12; k++) {
          const $ = 2 * Math.PI * k / 12;
          l.push([
            T * Math.cos($),
            T * Math.sin($),
            h
          ]);
        }
      }
      for (let y = 0; y < 15; y++) {
        const f = y * 12, h = (y + 1) * 12;
        for (let k = 0; k < 12; k++) s.push([
          f + k,
          f + (k + 1) % 12
        ]);
        const T = y % 2 === 0 ? 1 : -1;
        for (let k = 0; k < 12; k++) {
          const $ = (k + T + 12) % 12;
          s.push([
            f + k,
            h + $
          ]), s.push([
            f + k,
            h + k
          ]);
        }
      }
      const d = 15 * 12;
      for (let y = 0; y < 12; y++) s.push([
        d + y,
        d + (y + 1) % 12
      ]);
      const a = /* @__PURE__ */ new Map();
      for (let y = 0; y < 12; y++) a.set(y, [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
      const i = /* @__PURE__ */ new Map();
      for (let y = 1; y <= 15; y++) {
        const f = y * 12, h = 3 * y / 15;
        for (let T = 0; T < 12; T += 3) i.set(f + T, [
          h,
          0,
          -8,
          0,
          0,
          0
        ]);
      }
      e.nodes.val = l, e.elements.val = s, e.nodeInputs && (e.nodeInputs.val = {
        supports: a,
        loads: i
      });
      const p = 2e8, r = 77e6, c = 6e-3, m = 8e-6, w = 4e-6, E = {
        elasticities: new Map(s.map((y, f) => [
          f,
          p
        ])),
        shearModuli: new Map(s.map((y, f) => [
          f,
          r
        ])),
        areas: new Map(s.map((y, f) => [
          f,
          c
        ])),
        momentsOfInertiaZ: new Map(s.map((y, f) => [
          f,
          m
        ])),
        momentsOfInertiaY: new Map(s.map((y, f) => [
          f,
          m
        ])),
        torsionalConstants: new Map(s.map((y, f) => [
          f,
          w
        ]))
      };
      e.elementInputs && (e.elementInputs.val = E);
      try {
        const y = Pt(l, s, {
          supports: a,
          loads: i
        }, E);
        y && e.deformOutputs && (e.deformOutputs.val = y);
      } catch (y) {
        console.warn("Diagrid:", y.message);
      }
      setTimeout(() => It(), 50), nt(), console.log(`Diagrid Tower: ${l.length} nodos, ${s.length} elem, 15 pisos, H=${15 * 3.5}m`);
    }
    function es() {
      var _a2, _b, _c, _d, _e2, _f, _g, _h;
      const t = ((_a2 = W.W) == null ? void 0 : _a2.val) ?? 5, o = ((_b = W.H) == null ? void 0 : _b.val) ?? 3, n = ((_c = W.t) == null ? void 0 : _c.val) ?? 0.2, l = Math.round(((_d = W.nx) == null ? void 0 : _d.val) ?? 8), s = Math.round(((_e2 = W.ny) == null ? void 0 : _e2.val) ?? 6), d = ((_f = W.E) == null ? void 0 : _f.val) ?? 25e6, a = ((_g = W.nu) == null ? void 0 : _g.val) ?? 0.2, i = ((_h = W.P) == null ? void 0 : _h.val) ?? 100, p = d / (2 * (1 + a)), r = t / l, c = o / s, m = [], w = [], E = /* @__PURE__ */ new Map(), y = /* @__PURE__ */ new Map();
      for (let $ = 0; $ <= s; $++) for (let C = 0; C <= l; C++) m.push([
        C * r,
        0,
        $ * c
      ]);
      const f = l + 1;
      for (let $ = 0; $ < s; $++) for (let C = 0; C < l; C++) w.push([
        $ * f + C,
        $ * f + C + 1,
        ($ + 1) * f + C + 1,
        ($ + 1) * f + C
      ]);
      for (let $ = 0; $ <= l; $++) E.set($, [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
      const h = [];
      for (let $ = 0; $ <= l; $++) h.push(s * f + $);
      const T = i / h.length;
      for (const $ of h) y.set($, [
        T,
        0,
        0,
        0,
        0,
        0
      ]);
      e.nodes.val = m, e.elements.val = w, e.nodeInputs && (e.nodeInputs.val = {
        supports: E,
        loads: y
      });
      const k = {
        elasticities: new Map(w.map(($, C) => [
          C,
          d
        ])),
        poissonsRatios: new Map(w.map(($, C) => [
          C,
          a
        ])),
        thicknesses: new Map(w.map(($, C) => [
          C,
          n
        ])),
        shearModuli: new Map(w.map(($, C) => [
          C,
          p
        ])),
        densities: new Map(w.map(($, C) => [
          C,
          24 / 9.80665
        ]))
      };
      e.elementInputs && (e.elementInputs.val = k);
      try {
        const $ = Pt(m, w, {
          supports: E,
          loads: y
        }, k);
        if ($ && e.deformOutputs) {
          e.deformOutputs.val = $;
          const C = yo(m, w, k, $);
          e.analyzeOutputs && (e.analyzeOutputs.val = C);
          const B = s * f + Math.floor(l / 2), x = $.deformations.get(B), u = x ? x[0] : 0;
          console.log(`Muro Q4: Ux=${u.toExponential(4)} m | OS:4.602e-5 | SAP:4.629e-5 | ETABS:4.582e-5`);
        }
      } catch ($) {
        console.warn("MuroQ4:", $.message);
      }
      setTimeout(() => It(), 50), nt();
    }
    function Zs() {
      var _a2, _b, _c, _d, _e2, _f, _g, _h;
      const t = ((_a2 = W.L) == null ? void 0 : _a2.val) ?? 6, o = ((_b = W.h) == null ? void 0 : _b.val) ?? 0.5, n = ((_c = W.t) == null ? void 0 : _c.val) ?? 0.2, l = Math.round(((_d = W.nx) == null ? void 0 : _d.val) ?? 12), s = Math.round(((_e2 = W.ny) == null ? void 0 : _e2.val) ?? 4), d = ((_f = W.E) == null ? void 0 : _f.val) ?? 25e6, a = ((_g = W.nu) == null ? void 0 : _g.val) ?? 0.2, i = ((_h = W.P) == null ? void 0 : _h.val) ?? 50, p = d / (2 * (1 + a)), r = t / l, c = o / s, m = [], w = [], E = /* @__PURE__ */ new Map(), y = /* @__PURE__ */ new Map();
      for (let k = 0; k <= s; k++) for (let $ = 0; $ <= l; $++) m.push([
        $ * r,
        0,
        k * c
      ]);
      const f = l + 1;
      for (let k = 0; k < s; k++) for (let $ = 0; $ < l; $++) w.push([
        k * f + $,
        k * f + $ + 1,
        (k + 1) * f + $ + 1,
        (k + 1) * f + $
      ]);
      for (let k = 0; k <= s; k++) E.set(k * f, [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
      const h = Math.floor(s / 2) * f + l;
      y.set(h, [
        0,
        0,
        -i,
        0,
        0,
        0
      ]), e.nodes.val = m, e.elements.val = w, e.nodeInputs && (e.nodeInputs.val = {
        supports: E,
        loads: y
      });
      const T = {
        elasticities: new Map(w.map((k, $) => [
          $,
          d
        ])),
        poissonsRatios: new Map(w.map((k, $) => [
          $,
          a
        ])),
        thicknesses: new Map(w.map((k, $) => [
          $,
          n
        ])),
        shearModuli: new Map(w.map((k, $) => [
          $,
          p
        ])),
        densities: new Map(w.map((k, $) => [
          $,
          24 / 9.80665
        ]))
      };
      e.elementInputs && (e.elementInputs.val = T);
      try {
        const k = Pt(m, w, {
          supports: E,
          loads: y
        }, T);
        if (k && e.deformOutputs) {
          e.deformOutputs.val = k;
          const $ = yo(m, w, T, k);
          e.analyzeOutputs && (e.analyzeOutputs.val = $);
          const C = k.deformations.get(h), B = C ? C[2] : 0, x = n * o * o * o / 12, u = i * t * t * t / (3 * d * x);
          console.log(`Viga Q4: Uz_tip=${B.toExponential(4)} | Analitico=${u.toExponential(4)} | ratio=${(Math.abs(B) / u).toFixed(4)}`);
        }
      } catch (k) {
        console.warn("VigaQ4:", k.message);
      }
      setTimeout(() => It(), 50), nt();
    }
    function Qs() {
      var _a2, _b, _c, _d, _e2, _f, _g, _h;
      const t = ((_a2 = W.Lx) == null ? void 0 : _a2.val) ?? 4, o = ((_b = W.Ly) == null ? void 0 : _b.val) ?? 2, n = ((_c = W.t) == null ? void 0 : _c.val) ?? 0.15, l = Math.round(((_d = W.nx) == null ? void 0 : _d.val) ?? 8), s = Math.round(((_e2 = W.ny) == null ? void 0 : _e2.val) ?? 4), d = ((_f = W.E) == null ? void 0 : _f.val) ?? 25e6, a = ((_g = W.nu) == null ? void 0 : _g.val) ?? 0.2, i = ((_h = W.P) == null ? void 0 : _h.val) ?? 20, p = d / (2 * (1 + a)), r = t / l, c = o / s, m = [], w = [], E = /* @__PURE__ */ new Map(), y = /* @__PURE__ */ new Map();
      for (let $ = 0; $ <= s; $++) for (let C = 0; C <= l; C++) m.push([
        C * r,
        0,
        $ * c
      ]);
      const f = l + 1;
      for (let $ = 0; $ < s; $++) for (let C = 0; C < l; C++) w.push([
        $ * f + C,
        $ * f + C + 1,
        ($ + 1) * f + C + 1,
        ($ + 1) * f + C
      ]);
      for (let $ = 0; $ <= s; $++) E.set($ * f, [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
      const h = [];
      for (let $ = 0; $ <= s; $++) h.push($ * f + l);
      const T = i / h.length;
      for (const $ of h) y.set($, [
        0,
        -T,
        0,
        0,
        0,
        0
      ]);
      e.nodes.val = m, e.elements.val = w, e.nodeInputs && (e.nodeInputs.val = {
        supports: E,
        loads: y
      });
      const k = {
        elasticities: new Map(w.map(($, C) => [
          C,
          d
        ])),
        poissonsRatios: new Map(w.map(($, C) => [
          C,
          a
        ])),
        thicknesses: new Map(w.map(($, C) => [
          C,
          n
        ])),
        shearModuli: new Map(w.map(($, C) => [
          C,
          p
        ])),
        densities: new Map(w.map(($, C) => [
          C,
          24 / 9.80665
        ]))
      };
      e.elementInputs && (e.elementInputs.val = k);
      try {
        const $ = Pt(m, w, {
          supports: E,
          loads: y
        }, k);
        if ($ && e.deformOutputs) {
          e.deformOutputs.val = $;
          const C = yo(m, w, k, $);
          e.analyzeOutputs && (e.analyzeOutputs.val = C);
          const B = (s / 2 | 0) * f + l, x = $.deformations.get(B), u = x ? x[1] : 0;
          console.log(`Placa XY Q4: Uy_tip=${u.toExponential(4)} m`);
        }
      } catch ($) {
        console.warn("PlacaXY:", $.message);
      }
      setTimeout(() => It(), 50), nt();
    }
    function ea() {
      var _a2, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l2, _m, _n2, _o2, _p, _q, _r, _s2, _t2, _u, _v, _w, _x, _y;
      const t = M, o = ((_a2 = W.Lx) == null ? void 0 : _a2.val) ?? 6, n = ((_b = W.Ly) == null ? void 0 : _b.val) ?? 8, l = ((_c = W.H1) == null ? void 0 : _c.val) ?? 3, s = ((_d = W.H2) == null ? void 0 : _d.val) ?? 4.5, d = Math.round(((_e2 = W.nCol) == null ? void 0 : _e2.val) ?? 4), a = Math.round(((_f = W.nCorr) == null ? void 0 : _f.val) ?? 8), i = ((_g = W.E) == null ? void 0 : _g.val) ?? t.E, p = ((_h = W.t) == null ? void 0 : _h.val) ?? 5e-4, r = ((_i = W.q) == null ? void 0 : _i.val) ?? 1, c = (((_j = W.supUx) == null ? void 0 : _j.val) ?? 1) >= 0.5, m = (((_k = W.supUy) == null ? void 0 : _k.val) ?? 1) >= 0.5, w = (((_l2 = W.supUz) == null ? void 0 : _l2.val) ?? 1) >= 0.5, E = (((_m = W.supRx) == null ? void 0 : _m.val) ?? 1) >= 0.5, y = (((_n2 = W.supRy) == null ? void 0 : _n2.val) ?? 1) >= 0.5, f = (((_o2 = W.supRz) == null ? void 0 : _o2.val) ?? 1) >= 0.5, h = ((_p = W.colD) == null ? void 0 : _p.val) ?? 0.16, T = ((_q = W.colBf) == null ? void 0 : _q.val) ?? 0.16, k = ((_r = W.colTf) == null ? void 0 : _r.val) ?? 0.013, $ = ((_s2 = W.colTw) == null ? void 0 : _s2.val) ?? 8e-3, C = ((_t2 = W.vigD) == null ? void 0 : _t2.val) ?? 0.2, B = ((_u = W.vigBf) == null ? void 0 : _u.val) ?? 0.1, x = ((_v = W.vigTf) == null ? void 0 : _v.val) ?? 85e-4, u = ((_w = W.vigTw) == null ? void 0 : _w.val) ?? 56e-4, I = ((_x = W.corrB) == null ? void 0 : _x.val) ?? 0.06, A = ((_y = W.corrT) == null ? void 0 : _y.val) ?? 4e-3, R = 0.3, j = i / (2 * (1 + R));
      function g(Pe, Ge, Qe, et) {
        const Gt = Pe - 2 * Qe, Po = 2 * Ge * Qe + Gt * et, an = (Ge * Pe * Pe * Pe - (Ge - et) * Gt * Gt * Gt) / 12, ln = (2 * Qe * Ge * Ge * Ge + Gt * et * et * et) / 12, bn = (2 * Ge * Qe * Qe * Qe + Gt * et * et * et) / 3;
        return {
          A: Po,
          Iz: an,
          Iy: ln,
          J: bn
        };
      }
      const S = g(h, T, k, $), v = g(C, B, x, u), F = I * I - (I - 2 * A) * (I - 2 * A), K = (I ** 4 - (I - 2 * A) ** 4) / 12, U = K, ae = 2 * A * (I - A) ** 2 * (I - A) ** 2 / (2 * (I - A) + 2 * (I - A)), Q = 3, X = [
        0,
        o / 2,
        o
      ], ie = [];
      for (let Pe = 0; Pe < d; Pe++) ie.push(Pe * n / (d - 1));
      const re = /* @__PURE__ */ new Set();
      for (const Pe of ie) re.add(Pe);
      for (let Pe = 0; Pe < a; Pe++) re.add(Pe * n / (a - 1));
      const Me = Array.from(re).sort((Pe, Ge) => Pe - Ge), Te = Me.length;
      function N(Pe) {
        return l + (s - l) * Pe / n;
      }
      const ce = [], te = [], de = [], ee = [];
      for (let Pe = 0; Pe < Q; Pe++) {
        const Ge = [];
        for (let et = 0; et < d; et++) Ge.push(ce.length), ce.push([
          X[Pe],
          Me[ie.indexOf(ie[et])],
          0
        ]);
        de.push(Ge);
        const Qe = [];
        for (let et = 0; et < Te; et++) Qe.push(ce.length), ce.push([
          X[Pe],
          Me[et],
          N(Me[et])
        ]);
        ee.push(Qe);
      }
      const ue = /* @__PURE__ */ new Map(), Ee = /* @__PURE__ */ new Map(), oe = /* @__PURE__ */ new Map(), Se = /* @__PURE__ */ new Map(), He = /* @__PURE__ */ new Map(), at = /* @__PURE__ */ new Map(), rt = /* @__PURE__ */ new Map(), wt = /* @__PURE__ */ new Map(), Tt = /* @__PURE__ */ new Map(), Et = t.rho ?? 7850;
      for (let Pe = 0; Pe < Q; Pe++) for (let Ge = 0; Ge < d; Ge++) {
        const Qe = Me.indexOf(ie[Ge]);
        if (Qe < 0) continue;
        const et = te.length;
        te.push([
          de[Pe][Ge],
          ee[Pe][Qe]
        ]), ue.set(et, i), Ee.set(et, j), oe.set(et, S.A), Se.set(et, S.Iy), He.set(et, S.Iz), at.set(et, S.J), Tt.set(et, Et), rt.set(et, {
          type: "I",
          d: h,
          bf: T,
          tf: k,
          tw: $,
          name: "Col"
        });
        const Gt = new Array(12).fill(false);
        Gt[10] = true, Gt[11] = true, wt.set(et, Gt);
      }
      for (let Pe = 0; Pe < Q; Pe++) for (let Ge = 0; Ge < Te - 1; Ge++) {
        const Qe = te.length;
        te.push([
          ee[Pe][Ge],
          ee[Pe][Ge + 1]
        ]), ue.set(Qe, i), Ee.set(Qe, j), oe.set(Qe, v.A), Se.set(Qe, v.Iy), He.set(Qe, v.Iz), at.set(Qe, v.J), Tt.set(Qe, Et), rt.set(Qe, {
          type: "I",
          d: C,
          bf: B,
          tf: x,
          tw: u,
          name: "Vig"
        });
      }
      te.length;
      for (let Pe = 0; Pe < Te; Pe++) for (let Ge = 0; Ge < Q - 1; Ge++) {
        const Qe = te.length;
        te.push([
          ee[Ge][Pe],
          ee[Ge + 1][Pe]
        ]), ue.set(Qe, i), Ee.set(Qe, j), oe.set(Qe, F), Se.set(Qe, U), He.set(Qe, K), at.set(Qe, ae), Tt.set(Qe, Et), rt.set(Qe, {
          type: "rect",
          b: I,
          h: I,
          name: "Corr"
        });
        const et = new Array(12).fill(false);
        et[4] = true, et[5] = true, et[10] = true, et[11] = true, wt.set(Qe, et);
      }
      for (let Pe = 0; Pe < Q - 1; Pe++) for (let Ge = 0; Ge < Te - 1; Ge++) {
        const Qe = te.length;
        te.push([
          ee[Pe][Ge],
          ee[Pe + 1][Ge],
          ee[Pe + 1][Ge + 1],
          ee[Pe][Ge + 1]
        ]), ue.set(Qe, i), Ee.set(Qe, j), Tt.set(Qe, Et), ue.set(Qe, i);
      }
      const Ot = /* @__PURE__ */ new Map(), vo = [
        c,
        m,
        w,
        E,
        y,
        f
      ];
      for (let Pe = 0; Pe < Q; Pe++) for (let Ge = 0; Ge < d; Ge++) Ot.set(de[Pe][Ge], vo);
      const to = /* @__PURE__ */ new Map();
      for (let Pe = 0; Pe < Q; Pe++) for (let Ge = 0; Ge < Te; Ge++) {
        let Qe;
        Pe === 0 ? Qe = (X[1] - X[0]) / 2 : Pe === Q - 1 ? Qe = (X[Q - 1] - X[Q - 2]) / 2 : Qe = (X[Pe + 1] - X[Pe - 1]) / 2;
        let et;
        Ge === 0 ? et = (Me[1] - Me[0]) / 2 : Ge === Te - 1 ? et = (Me[Te - 1] - Me[Te - 2]) / 2 : et = (Me[Ge + 1] - Me[Ge - 1]) / 2;
        const Gt = -r * Qe * et;
        to.set(ee[Pe][Ge], [
          0,
          0,
          Gt,
          0,
          0,
          0
        ]);
      }
      e.nodes.val = ce, e.elements.val = te, e.nodeInputs && (e.nodeInputs.val = {
        supports: Ot,
        loads: to
      });
      const Ut = te.filter((Pe) => Pe.length === 2).length, ot = {
        elasticities: ue,
        shearModuli: Ee,
        areas: oe,
        momentsOfInertiaZ: Se,
        momentsOfInertiaY: He,
        torsionalConstants: at,
        sectionShapes: rt,
        momentReleases: wt,
        densities: Tt
      }, yt = /* @__PURE__ */ new Map(), Xt = /* @__PURE__ */ new Map();
      for (let Pe = 0; Pe < te.length; Pe++) te[Pe].length === 4 && (yt.set(Pe, p), Xt.set(Pe, R));
      ot.thicknesses = yt, ot.poissonsRatios = Xt, e.elementInputs && (e.elementInputs.val = ot);
      try {
        const Pe = performance.now(), Ge = Pt(ce, te, {
          supports: Ot,
          loads: to
        }, ot), Qe = performance.now() - Pe;
        if (Ge && e.deformOutputs) {
          e.deformOutputs.val = Ge;
          const et = yo(ce, te, ot, Ge);
          e.analyzeOutputs && (e.analyzeOutputs.val = et);
          let Gt = 0, Po = -1;
          Ge.deformations.forEach((an, ln) => {
            Math.abs(an[2]) > Math.abs(Gt) && (Gt = an[2], Po = ln);
          }), console.log(`P\xE9rgola: Uz_max=${Gt.toExponential(4)} m en nodo ${Po} | ${Ut} frames + ${te.length - Ut} shells | ${Qe.toFixed(0)} ms`);
        }
      } catch (Pe) {
        console.warn("Pergola:", Pe.message);
      }
      const Ft = lt();
      Ft && (Ft.settings.shellResults.val = "displacementZ", Ft.settings.deformedShape.val = true), setTimeout(() => It(), 50), nt();
    }
    function Ha() {
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
    function ja() {
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
        const o = (h) => {
          var _a3;
          return parseFloat(((_a3 = t.querySelector(`#${h}`)) == null ? void 0 : _a3.value) || "0");
        }, n = o("po-colB"), l = o("po-colH"), s = o("po-fc") * 1e3, d = o("po-fy") * 1e3, a = o("po-H"), i = o("po-L"), p = o("po-As") * 1e-4, r = o("po-nbar"), c = o("po-drift") / 100, m = o("po-ncycles"), w = t.querySelector("#pushover-status");
        w.textContent = "Generando historia de desplazamientos...";
        const E = [], y = c * a, f = 40;
        for (let h = 1; h <= m; h++) {
          const T = y * h / m;
          for (let k = 0; k <= f; k++) E.push(T * Math.sin(2 * Math.PI * k / f));
        }
        w.textContent = `Resolviendo pushover (${E.length} pasos)...`;
        try {
          const { cyclicPushover: h } = await na(async () => {
            const { cyclicPushover: k } = await import("./cyclicPushoverCpp-C_AWr1zl.js").then(async (m2) => {
              await m2.__tla;
              return m2;
            });
            return {
              cyclicPushover: k
            };
          }, __vite__mapDeps([6,5]), import.meta.url), T = await h({
            colHeight: a,
            beamLength: i,
            col: {
              b: n,
              h: l,
              fpc: -s,
              Fy_rebar: d,
              E_rebar: 2e8,
              rebar_area: p,
              cover: 0.04,
              n_rebar: r
            },
            beam: {
              b: 0.25,
              h: 0.3,
              fpc: -s,
              Fy_rebar: d,
              E_rebar: 2e8,
              rebar_area: p * 0.7,
              cover: 0.03,
              n_rebar: r
            },
            dispHistory: E
          });
          w.textContent = `Completado: ${T.nSteps} pasos`, Wa(t.querySelector("#pushover-canvas"), T.displacements, T.forces, `Pushover: ${n * 100}x${l * 100}cm, f'c=${s / 1e3}MPa, Fy=${d / 1e3}MPa`);
        } catch (h) {
          w.textContent = `Error: ${h.message}`, console.error("Pushover failed:", h);
        }
      });
    }
    function Wa(t, o, n, l) {
      const s = t.getContext("2d");
      if (!s || o.length === 0) return;
      const d = t.width, a = t.height, i = {
        left: 55,
        right: 15,
        top: 30,
        bottom: 35
      }, p = d - i.left - i.right, r = a - i.top - i.bottom;
      s.fillStyle = "#111118", s.fillRect(0, 0, d, a);
      let c = Math.min(...o), m = Math.max(...o), w = Math.min(...n), E = Math.max(...n);
      c === m && (c -= 0.01, m += 0.01), w === E && (w -= 1, E += 1);
      const y = m - c, f = E - w, h = (C) => i.left + (C - c) / y * p, T = (C) => i.top + r - (C - w) / f * r;
      s.strokeStyle = "#333", s.lineWidth = 0.5, c < 0 && m > 0 && (s.strokeStyle = "#555", s.beginPath(), s.moveTo(h(0), i.top), s.lineTo(h(0), i.top + r), s.stroke()), w < 0 && E > 0 && (s.beginPath(), s.moveTo(i.left, T(0)), s.lineTo(i.left + p, T(0)), s.stroke()), s.strokeStyle = "#ff4444", s.lineWidth = 1.5, s.beginPath(), s.moveTo(h(o[0]), T(n[0]));
      for (let C = 1; C < o.length; C++) s.lineTo(h(o[C]), T(n[C]));
      s.stroke(), s.fillStyle = "#aaa", s.font = "11px monospace", s.textAlign = "center", s.fillText("Desplazamiento (m)", i.left + p / 2, a - 5), s.save(), s.translate(12, i.top + r / 2), s.rotate(-Math.PI / 2), s.fillText("Fuerza (kN)", 0, 0), s.restore(), s.fillStyle = "#ee9b00", s.font = "bold 11px monospace", s.textAlign = "center", s.fillText(l, d / 2, 15), s.fillStyle = "#888", s.font = "9px monospace", s.textAlign = "center";
      const k = y / 5;
      for (let C = 0; C <= 5; C++) {
        const B = c + k * C;
        s.fillText((B * 1e3).toFixed(1), h(B), a - i.bottom + 15);
      }
      s.textAlign = "right";
      const $ = f / 5;
      for (let C = 0; C <= 5; C++) {
        const B = w + $ * C;
        s.fillText(B.toFixed(0), i.left - 5, T(B) + 3);
      }
    }
    let nn = null;
    function Ga() {
      if (nn) {
        nn.remove(), nn = null;
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
    `, document.body.appendChild(t), nn = t, t.querySelector("#nl-close").addEventListener("click", () => {
        t.remove(), nn = null;
      }), t.querySelector("#nl-test").addEventListener("click", () => Ya(t));
    }
    function Ya(t) {
      const o = parseFloat(t.querySelector("#nl-fy").value), n = parseFloat(t.querySelector("#nl-e0").value), l = parseFloat(t.querySelector("#nl-b").value), s = parseFloat(t.querySelector("#nl-r0").value), d = parseFloat(t.querySelector("#nl-amp").value), a = parseInt(t.querySelector("#nl-cycles").value), i = 100, p = [];
      for (let U = 0; U < a; U++) {
        const ae = d * (1 + U * 0.5);
        for (let Q = 0; Q < i; Q++) {
          const X = Q / i * 2 * Math.PI;
          p.push(ae * Math.sin(X));
        }
      }
      const r = o / n, c = l * n;
      let m = 0, w = 0, E = -r, y = r, f = 0, h = 0, T = 0, k = 0, $ = 0, C = 0;
      const B = [];
      for (const U of p) {
        let ae = E, Q = y, X = f, ie = h, re = T, Me = k, Te = $, N = C, ce;
        const te = U - m;
        if (Math.abs(te) < 1e-20) {
          B.push(w);
          continue;
        }
        if ((N === 0 || N === 3) && (te < 0 ? (N = 2, ie = -r, re = -o, X = ie, Me = 0, Te = 0) : (N = 1, ie = r, re = o, X = ie, Me = 0, Te = 0)), N === 2 && te > 0) {
          N = 1, Me = m, Te = w, m < ae && (ae = m);
          const Se = (Q - ae) / (2 * 1 * r), He = 1 + 0 * Math.pow(Se, 0.8);
          ie = (o * He - c * r * He - Te + n * Me) / (n - c), re = o * He + c * (ie - r * He), X = Q;
        } else if (N === 1 && te < 0) {
          N = 2, Me = m, Te = w, m > Q && (Q = m);
          const Se = (Q - ae) / (2 * 1 * r), He = 1 + 0 * Math.pow(Se, 0.8);
          ie = (-o * He + c * r * He - Te + n * Me) / (n - c), re = -o * He + c * (ie + r * He), X = ae;
        }
        const de = Math.abs((X - ie) / r);
        let ee = s - 0.925 * de / (0.15 + de);
        ee < 0.1 && (ee = 0.1);
        const ue = (U - Me) / (ie - Me), Ee = 1 + Math.pow(Math.abs(ue), ee), oe = Math.pow(Ee, 1 / ee);
        ce = l * ue + (1 - l) * ue / oe, ce = ce * (re - Te) + Te, B.push(ce), m = U, w = ce, E = ae, y = Q, f = X, h = ie, T = re, k = Me, $ = Te, C = N;
      }
      const x = t.querySelector("#nl-canvas"), u = x.getContext("2d"), I = x.width, A = x.height;
      u.clearRect(0, 0, I, A);
      const R = Math.max(...p.map(Math.abs)), j = Math.max(...B.map(Math.abs)), g = (I - 40) / (2 * R), S = (A - 40) / (2 * j), v = I / 2, F = A / 2;
      u.strokeStyle = "#444", u.lineWidth = 1, u.beginPath(), u.moveTo(20, F), u.lineTo(I - 20, F), u.stroke(), u.beginPath(), u.moveTo(v, 20), u.lineTo(v, A - 20), u.stroke(), u.fillStyle = "#888", u.font = "10px monospace", u.textAlign = "center", u.fillText("\u03B5 (strain)", I - 40, F - 5), u.fillText("\u03C3 (stress)", v + 30, 15), u.fillText(`\xB1${(R * 100).toFixed(1)}%`, I - 30, F + 12), u.fillText(`\xB1${(j / 1e3).toFixed(0)} MPa`, v + 40, 30), u.strokeStyle = "#00ccff", u.lineWidth = 1.5, u.beginPath();
      for (let U = 0; U < p.length; U++) {
        const ae = v + p[U] * g, Q = F - B[U] * S;
        U === 0 ? u.moveTo(ae, Q) : u.lineTo(ae, Q);
      }
      u.stroke(), u.strokeStyle = "#ff333366", u.lineWidth = 1, u.setLineDash([
        4,
        4
      ]), u.beginPath(), u.moveTo(20, F - o * S), u.lineTo(I - 20, F - o * S), u.stroke(), u.beginPath(), u.moveTo(20, F + o * S), u.lineTo(I - 20, F + o * S), u.stroke(), u.setLineDash([]), u.fillStyle = "#ff6666", u.font = "9px monospace", u.fillText(`Fy = ${(o / 1e3).toFixed(0)} MPa`, I - 50, F - o * S - 5);
      const K = t.querySelector("#nl-info");
      K.textContent = `Steel02: Fy=${(o / 1e3).toFixed(0)} MPa, E\u2080=${(n / 1e6).toFixed(0)} GPa, b=${l}, R\u2080=${s} \u2014 ${a} ciclos, amp=${(d * 100).toFixed(1)}%`;
    }
    function Ja() {
      var _a2, _b, _c, _d;
      const t = document.querySelector(".rpt-overlay");
      if (t) {
        t.remove();
        return;
      }
      const o = e.nodes.val, n = e.elements.val, l = ((_a2 = e.elementInputs) == null ? void 0 : _a2.val) || {}, s = ((_b = e.nodeInputs) == null ? void 0 : _b.val) || {}, d = (_c = e.deformOutputs) == null ? void 0 : _c.val;
      if ((_d = e.analyzeOutputs) == null ? void 0 : _d.val, !o.length || !n.length) {
        alert("No hay modelo cargado");
        return;
      }
      const a = bl({
        nodes: o,
        elements: n,
        nodeInputs: s,
        elementInputs: l,
        deformOutputs: d
      });
      document.body.appendChild(a);
    }
    let Go = null;
    function Va(t) {
      Go && Go.remove();
      const o = document.createElement("div");
      o.style.cssText = "position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background:#1a1a2e;color:#eee;border:2px solid #00ccff;border-radius:8px;padding:16px;z-index:10001;width:320px;font-family:monospace;font-size:12px;box-shadow:0 4px 20px rgba(0,0,0,0.5);";
      const n = yn(), l = $n(), s = Object.entries(n).map(([r, c]) => `<option value="${c}">${r}</option>`).join(""), d = Object.entries(l).map(([r, c]) => `<option value="${c}">${r}</option>`).join("");
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
    `, document.body.appendChild(o), Go = o;
      const a = o.querySelector("#asgn-type"), i = o.querySelector("#asgn-params");
      function p() {
        const r = a.value;
        let c = "";
        r === "rect" ? c = `<div style="display:flex;gap:6px;"><label>b(m):<input id="ap-b" type="number" value="0.30" step="0.05" min="0.1" max="2" style="width:70px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label>
                <label>h(m):<input id="ap-h" type="number" value="0.50" step="0.05" min="0.1" max="2" style="width:70px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label></div>` : r === "circ" ? c = '<label>d(m):<input id="ap-d" type="number" value="0.40" step="0.05" min="0.1" max="2" style="width:70px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label>' : r === "W" ? c = `<select id="ap-profile" style="background:#333;color:#fff;border:1px solid #555;padding:3px;width:100%;">${s}</select>` : r === "HSS" ? c = `<select id="ap-profile" style="background:#333;color:#fff;border:1px solid #555;padding:3px;width:100%;">${d}</select>` : r === "I-param" ? c = `<div style="display:grid;grid-template-columns:1fr 1fr;gap:4px;">
          <label>bf(m):<input id="ap-bf" type="number" value="0.20" step="0.01" style="width:65px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label>
          <label>h(m):<input id="ap-hf" type="number" value="0.40" step="0.01" style="width:65px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label>
          <label>tf(m):<input id="ap-tf" type="number" value="0.015" step="0.001" style="width:65px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label>
          <label>tw(m):<input id="ap-tw" type="number" value="0.010" step="0.001" style="width:65px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label>
        </div>` : r === "tubular" && (c = `<div style="display:flex;gap:6px;">
          <label>b(m):<input id="ap-bc" type="number" value="0.20" step="0.01" style="width:60px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label>
          <label>h(m):<input id="ap-hc" type="number" value="0.30" step="0.01" style="width:60px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label>
          <label>t(m):<input id="ap-t" type="number" value="0.008" step="0.001" style="width:60px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label>
        </div>`), i.innerHTML = c;
      }
      a.addEventListener("change", p), p(), o.querySelector("#asgn-close").addEventListener("click", () => {
        o.remove(), Go = null;
      }), o.querySelector("#asgn-apply").addEventListener("click", () => {
        var _a2, _b, _c, _d, _e2, _f, _g, _h;
        const r = a.value, c = {
          secType: r
        };
        r === "rect" ? (c.b = parseFloat(o.querySelector("#ap-b").value), c.h = parseFloat(o.querySelector("#ap-h").value), c.material = 0) : r === "circ" ? (c.b = parseFloat(o.querySelector("#ap-d").value), c.material = 0) : r === "W" || r === "HSS" ? (c.profileIdx = parseInt(o.querySelector("#ap-profile").value), c.material = 1) : r === "I-param" ? (c.bf = parseFloat(o.querySelector("#ap-bf").value), c.hf = parseFloat(o.querySelector("#ap-hf").value), c.tf = parseFloat(o.querySelector("#ap-tf").value), c.tw = parseFloat(o.querySelector("#ap-tw").value), c.material = 1) : r === "tubular" && (c.bc = parseFloat(o.querySelector("#ap-bc").value), c.hc = parseFloat(o.querySelector("#ap-hc").value), c.t = parseFloat(o.querySelector("#ap-t").value), c.material = 1);
        const m = new Array(12).fill(false), w = new Array(12).fill(0);
        o.querySelectorAll("input[data-asgn-rel]").forEach((E) => {
          m[parseInt(E.dataset.asgnRel)] = E.checked;
        }), o.querySelectorAll("input[data-asgn-spr]").forEach((E) => {
          const y = parseFloat(E.value);
          y > 0 && (w[parseInt(E.dataset.asgnSpr)] = y);
        }), c.releases12 = m, c.springs12 = w, c.releaseRotStart = m[4] || m[5], c.releaseRotEnd = m[10] || m[11], c.releaseAxial = m[0], c.releaseTorsion = m[3], c.modI = parseFloat((_a2 = o.querySelector("#asgn-mod-i")) == null ? void 0 : _a2.value) || 1, c.modA = parseFloat((_b = o.querySelector("#asgn-mod-a")) == null ? void 0 : _b.value) || 1, c.modJ = parseFloat((_c = o.querySelector("#asgn-mod-j")) == null ? void 0 : _c.value) || 1, c.modAs2 = parseFloat((_d = o.querySelector("#asgn-mod-as2")) == null ? void 0 : _d.value) ?? 1, c.modAs3 = parseFloat((_e2 = o.querySelector("#asgn-mod-as3")) == null ? void 0 : _e2.value) ?? 1, c.modI3 = parseFloat((_f = o.querySelector("#asgn-mod-i3")) == null ? void 0 : _f.value) || 1, c.modMass = parseFloat((_g = o.querySelector("#asgn-mod-mass")) == null ? void 0 : _g.value) || 1, c.modWeight = parseFloat((_h = o.querySelector("#asgn-mod-weight")) == null ? void 0 : _h.value) || 1, t.forEach((E) => ye.set(E, {
          ...c
        })), o.remove(), Go = null, wo(), e.elementInputs.val = {
          ...e.elementInputs.val
        };
      }), o.querySelector("#asgn-remove").addEventListener("click", () => {
        t.forEach((r) => ye.delete(r)), o.remove(), Go = null, wo(), e.elementInputs.val = {
          ...e.elementInputs.val
        };
      });
    }
    let Yo = null;
    function Ua(t) {
      var _a2, _b, _c;
      Yo && Yo.remove();
      const o = e.nodes.val, n = e.elements.val[t];
      if (!n || n.length !== 2) return;
      const l = o[n[0]], s = o[n[1]], d = Math.abs(s[0] - l[0]), a = Math.abs(s[1] - l[1]), i = Math.abs(s[2] - l[2]), p = a > d && a > i, r = Math.sqrt(d * d + a * a + i * i), c = $e.get(t) ?? 0, m = (_c = (_b = (_a2 = e.elementInputs) == null ? void 0 : _a2.val) == null ? void 0 : _b.sectionShapes) == null ? void 0 : _c.get(t), w = (m == null ? void 0 : m.name) || (m ? `${m.type} ${((m.b ?? 0) * 100).toFixed(0)}x${((m.h ?? 0) * 100).toFixed(0)}` : "\u2014"), E = document.createElement("div");
      E.style.cssText = "position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background:#1a1a2e;color:#eee;border:2px solid #ff9900;border-radius:8px;padding:16px;z-index:10000;min-width:280px;font-family:monospace;font-size:13px;box-shadow:0 4px 20px rgba(0,0,0,0.5);", E.innerHTML = `
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
        <b style="color:#ff9900;">Elemento ${t}</b>
        <button id="ep-close" style="background:none;border:none;color:#888;cursor:pointer;font-size:18px;">\u2715</button>
      </div>
      <div style="margin-bottom:8px;">
        <span style="color:#888;">Tipo:</span> ${p ? "Columna" : "Viga"} &nbsp;
        <span style="color:#888;">Piso:</span> ${c + 1} &nbsp;
        <span style="color:#888;">L:</span> ${r.toFixed(3)} m
      </div>
      <div style="margin-bottom:8px;">
        <span style="color:#888;">Secci\xF3n:</span> <span style="color:#00ccff;">${w}</span>
      </div>
      <div style="margin-bottom:8px;">
        <span style="color:#888;">Nodos:</span> ${n[0]} \u2192 ${n[1]}
      </div>
      <hr style="border-color:#333;margin:12px 0;">
      <div style="display:flex;gap:8px;">
        <button id="ep-delete" style="flex:1;padding:8px;background:#cc3333;color:#fff;border:none;border-radius:4px;cursor:pointer;font-weight:bold;">\u{1F5D1} Eliminar</button>
        <button id="ep-inspect" style="flex:1;padding:8px;background:#336699;color:#fff;border:none;border-radius:4px;cursor:pointer;font-weight:bold;">\u{1F50D} Inspect</button>
      </div>
    `, document.body.appendChild(E), Yo = E, E.querySelector("#ep-close").addEventListener("click", () => {
        E.remove(), Yo = null, Fo();
      }), E.querySelector("#ep-delete").addEventListener("click", () => {
        Z.add(t), E.remove(), Yo = null, Fo(), Oe();
      }), E.querySelector("#ep-inspect").addEventListener("click", () => {
        E.remove(), Yo = null, Ws(t);
      });
    }
    setTimeout(() => {
      const t = document.getElementById("viewer");
      if (!t) return;
      const o = t.querySelector("canvas");
      if (!o) return;
      let n = null, l = null;
      const s = 5;
      function d(p) {
        const r = lt();
        if (!r) return null;
        const c = r.controls.object, m = new Ne(p[0], p[1], p[2]);
        m.project(c);
        const w = o.getBoundingClientRect();
        return {
          x: (m.x + 1) / 2 * w.width,
          y: (-m.y + 1) / 2 * w.height
        };
      }
      function a(p, r, c, m, w) {
        const E = Math.min(p, c), y = Math.max(p, c), f = Math.min(r, m), h = Math.max(r, m), T = e.nodes.val, k = e.elements.val, $ = [];
        for (let C = 0; C < k.length; C++) {
          const B = k[C], x = B.map((u) => d(T[u])).filter(Boolean);
          if (x.length !== 0) if (w) x.every((I) => I.x >= E && I.x <= y && I.y >= f && I.y <= h) && $.push(C);
          else {
            if (x.some((I) => I.x >= E && I.x <= y && I.y >= f && I.y <= h)) {
              $.push(C);
              continue;
            }
            if (B.length === 2) {
              const I = x[0], A = x[1];
              i(I.x, I.y, A.x, A.y, E, f, y, h) && $.push(C);
            }
          }
        }
        return $;
      }
      function i(p, r, c, m, w, E, y, f) {
        const h = (k, $) => k >= w && k <= y && $ >= E && $ <= f;
        if (h(p, r) || h(c, m)) return true;
        const T = (k, $, C, B, x, u, I, A) => {
          const R = (C - k) * (A - u) - (B - $) * (I - x);
          if (Math.abs(R) < 1e-10) return false;
          const j = ((x - k) * (A - u) - (u - $) * (I - x)) / R, g = ((x - k) * (B - $) - (u - $) * (C - k)) / R;
          return j >= 0 && j <= 1 && g >= 0 && g <= 1;
        };
        return T(p, r, c, m, w, E, y, E) || T(p, r, c, m, y, E, y, f) || T(p, r, c, m, w, f, y, f) || T(p, r, c, m, w, E, w, f);
      }
      o.addEventListener("mousedown", (p) => {
        Qt && (n = {
          x: p.offsetX,
          y: p.offsetY
        });
      }), o.addEventListener("mousemove", (p) => {
        if (go) {
          const c = lt();
          if (!c) return;
          const m = _s(p.clientX, p.clientY, c.camera, c.rendererElm);
          if (Ct.track && m.snapType === "node" && m.nodeIdx !== null && m.nodeIdx !== Co && Ca(m.nodeIdx), Ct.track && Co !== null && m.worldPos && m.snapType !== "node") {
            const w = Fa(m.worldPos, Co);
            w && (m.worldPos = w, m.snapType = "grid");
          }
          if (Co !== null && m.worldPos) {
            const w = e.nodes.val[Co];
            w && qs(p.clientX, p.clientY, new Ne(...w), m.worldPos);
          } else if (kt !== null && m.worldPos) {
            const w = e.nodes.val[kt];
            w && qs(p.clientX, p.clientY, new Ne(...w), m.worldPos);
          } else lo && (lo.remove(), lo = null);
          m.nodeIdx, Ds(m), o.style.cursor = m.snapType !== "free" ? "pointer" : "crosshair";
          return;
        }
        if (!io && !Qt) return;
        if (Qt && n) {
          const c = p.offsetX - n.x, m = p.offsetY - n.y;
          if (Math.abs(c) > s || Math.abs(m) > s) {
            l || (l = document.createElement("div"), l.style.cssText = "position:absolute;pointer-events:none;z-index:9999;", o.parentElement.style.position = "relative", o.parentElement.appendChild(l));
            const w = c > 0, E = Math.min(n.x, p.offsetX), y = Math.min(n.y, p.offsetY), f = Math.abs(c), h = Math.abs(m);
            l.style.left = E + "px", l.style.top = y + "px", l.style.width = f + "px", l.style.height = h + "px", l.style.border = w ? "2px solid #3399ff" : "2px dashed #33ff33", l.style.background = w ? "rgba(51,153,255,0.1)" : "rgba(51,255,51,0.1)", o.style.cursor = "crosshair";
            return;
          }
        }
        const r = Xn(p);
        if (r >= 0) Hs(r), o.style.cursor = "pointer";
        else {
          if (eo) {
            const c = lt();
            c == null ? void 0 : c.scene.remove(eo), eo = null, c == null ? void 0 : c.render();
          }
          o.style.cursor = Qt ? "crosshair" : "";
        }
      }), o.addEventListener("mouseup", (p) => {
        if (Qt && n) {
          const r = p.offsetX - n.x, c = p.offsetY - n.y;
          if (Math.abs(r) > s || Math.abs(c) > s) {
            const m = r > 0, w = a(n.x, n.y, p.offsetX, p.offsetY, m);
            p.ctrlKey || p.metaKey || (Mt.clear(), ko()), w.forEach((y) => {
              Mt.has(y) || (Mt.add(y), Jn(y));
            }), To();
          }
          l && (l.remove(), l = null), n = null, o.style.cursor = "crosshair";
          return;
        }
        n = null;
      }), o.addEventListener("click", (p) => {
        if (go) {
          const r = lt();
          if (!r) return;
          const c = _s(p.clientX, p.clientY, r.camera, r.rendererElm);
          (c.worldPos || c.nodeIdx !== null) && (Ra(c), Ds(c));
          return;
        }
        if (Qt) {
          if (l) return;
          const r = Xn(p), c = p.ctrlKey || p.metaKey;
          if (r >= 0) {
            if (c) if (Mt.has(r)) {
              Mt.delete(r);
              const m = Io.findIndex((w) => w.__elemIdx === r);
              if (m >= 0) {
                const w = lt();
                w == null ? void 0 : w.scene.remove(Io[m]), Io[m].geometry.dispose(), Io[m].material.dispose(), Io.splice(m, 1), w == null ? void 0 : w.render();
              }
            } else Mt.add(r), Jn(r);
            else Mt.clear(), ko(), Mt.add(r), Jn(r);
            To();
          } else c || (Mt.clear(), ko(), To());
          return;
        }
        if (io) {
          const r = Xn(p);
          r >= 0 && (Hs(r), Ua(r));
        }
      });
    }, 500), Xo.derive(() => {
      var _a2;
      e.nodes.val, e.elements.val, (_a2 = e.nodeInputs) == null ? void 0 : _a2.val, nt();
    }), tt.modal = (t) => {
      var _a2, _b;
      if (t === void 0 && (t = !_e), _e = t, (_a2 = Le.querySelector("#cad3d-modal")) == null ? void 0 : _a2.classList.toggle("active", _e), _e) {
        const n = lt();
        ((_b = n == null ? void 0 : n.settings) == null ? void 0 : _b.loads) && (De = n.settings.loads.rawVal, n.settings.loads.val = false), Nn(), Le.querySelector("#cad3d-mode-prev").style.display = "", Le.querySelector("#cad3d-mode-next").style.display = "", Le.querySelector("#cad3d-mode-label").style.display = "";
      } else qn(), Le.querySelector("#cad3d-mode-prev").style.display = "none", Le.querySelector("#cad3d-mode-next").style.display = "none", Le.querySelector("#cad3d-mode-label").style.display = "none", z && z !== "placa-q4" && z !== "placa-3q" && Oe(), setTimeout(() => {
        var _a3;
        const n = lt();
        ((_a3 = n == null ? void 0 : n.settings) == null ? void 0 : _a3.loads) && De && (n.settings.loads.val = true);
      }, 600);
      console.log(`Modal analysis: ${_e ? "ON" : "OFF"}`);
    }, tt.setMode = (t) => {
      var _a2;
      if (!(Fe == null ? void 0 : Fe.modeShapes)) {
        console.error("No modal results");
        return;
      }
      xe = Math.max(0, Math.min(t, Fe.modeShapes.length - 1));
      const o = Fe.modeShapes[xe], { extent: n } = Eo();
      let l = 0;
      for (let d = 0; d < ke.length; d++) {
        const a = o[d * 6] || 0, i = o[d * 6 + 1] || 0, p = o[d * 6 + 2] || 0;
        l = Math.max(l, Math.sqrt(a * a + i * i + p * p));
      }
      Je = l > 1e-12 ? n * 0.05 / l : 1, on();
      const s = Le.querySelector("#cad3d-mode-label");
      s && Fe.frequencies && (s.textContent = `Modo ${xe + 1} \u2014 ${Fe.frequencies[xe].toFixed(2)} Hz`), console.log(`Modo ${xe + 1}: f = ${(_a2 = Fe.frequencies) == null ? void 0 : _a2[xe].toFixed(4)} Hz`);
    }, window.cad = tt, console.log("FEM Studio CLI ready. Type cad.help() for commands."), setTimeout(() => {
      document.body.appendChild(Le), document.body.appendChild(ut.div);
    }, 0), setTimeout(() => {
      e.nodes.val.length === 0 && (st("muro-q4"), es(), Ps("muro-q4"), setTimeout(() => {
        z === "muro-q4" && po();
      }, 200));
    }, 100);
    const sn = document.createElement("button");
    sn.id = "mobile-menu-btn", sn.innerHTML = "\u2630", sn.addEventListener("click", () => {
      const t = document.getElementById("cad3d-panel");
      t && (t.classList.toggle("mobile-open"), sn.innerHTML = t.classList.contains("mobile-open") ? "\u2715" : "\u2630");
    }), document.body.appendChild(sn);
    const xo = document.createElement("button");
    xo.id = "fullscreen-btn", xo.innerHTML = "\u26F6", xo.title = "Pantalla completa", xo.style.cssText = `
    position: fixed; bottom: 20px; right: 78px; z-index: 9999999;
    width: 48px; height: 48px; border-radius: 50%;
    background: linear-gradient(135deg, #333, #555);
    color: white; border: 3px solid rgba(255,255,255,0.2);
    font-size: 22px; cursor: pointer;
    box-shadow: 0 4px 15px rgba(0,0,0,0.4);
    transition: transform 0.2s, box-shadow 0.2s;
    display: flex; align-items: center; justify-content: center;
  `, xo.addEventListener("mouseenter", () => {
      xo.style.transform = "scale(1.15)";
    }), xo.addEventListener("mouseleave", () => {
      xo.style.transform = "scale(1)";
    }), xo.addEventListener("click", () => {
      document.fullscreenElement ? document.exitFullscreen().catch(() => {
      }) : document.documentElement.requestFullscreen().catch(() => {
      });
    }), document.body.appendChild(xo), document.body.appendChild(Il());
    const ta = document.createElement("span");
    return ta.style.display = "none", ta;
  };
});
export {
  __tla,
  pa as a,
  ml as c,
  or as g
};
