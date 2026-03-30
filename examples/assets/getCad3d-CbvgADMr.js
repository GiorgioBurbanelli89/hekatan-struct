const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./cyclicPushoverCpp-DZAQImEK.js","./plateQ4Cpp-CArWqXeL.js"])))=>i.map(i=>d[i]);
import { _ as Ns, p as so, m as Os, d as pt, s as Rs, __tla as __tla_0 } from "./plateQ4Cpp-CArWqXeL.js";
import { v as rn, P as kn, g as Bs, a as js, o as Ds } from "./theme-CzzIlc4y.js";
import { V as ue, P as Bt, R as ts, b as ns, B as Gt, c as Ws, d as os, e as gn, f as Js, S as Ys, M as Gs, g as Vs, F as Vt, a as xn, L as ao, h as Xs, G as Ks, A as Sn, i as ss, T as as, j as lo, k as ro, C as Us, l as Zs } from "./Text-Cin90tvN.js";
import { g as Tn, b as Fn, a as ln } from "./analyze-B0bulnNq.js";
import { g as Lt, __tla as __tla_1 } from "./getMesh-Ch3239Ot.js";
import { n as Ut, s as qt, m as bt, t as uo } from "./pureFunctionsAny.generated-BHh0zpCc.js";
let is, na, ya;
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
  const fo = [
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
  ], cn = [
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
  function Qs(e, h) {
    return e === "kN" && h === "m" ? "kPa" : e === "kN" && h === "mm" || e === "N" && h === "mm" ? "MPa" : e === "N" && h === "m" ? "Pa" : e === "kip" && h === "in" ? "ksi" : e === "kip" && h === "ft" ? "ksf" : `${e}/${h}\xB2`;
  }
  const Xt = {
    E: 2e8,
    G: 77e6,
    A: 0.01,
    Iz: 833e-7,
    Iy: 833e-7,
    J: 141e-6,
    rho: 7.85
  };
  function Kt(e, h) {
    const B = fo.find((fe) => fe.id === e), T = cn.find((fe) => fe.id === h), G = B.toKN, ye = T.toM, le = (fe, me, I) => I / (Math.pow(G, fe) * Math.pow(ye, me));
    let Z, R;
    switch (e) {
      case "kN":
        Z = 10, R = [
          -100,
          100,
          1
        ];
        break;
      case "tonf":
        Z = 1, R = [
          -20,
          20,
          0.5
        ];
        break;
      case "kgf":
        Z = 1e3, R = [
          -1e4,
          1e4,
          100
        ];
        break;
      case "kip":
        Z = 10, R = [
          -200,
          200,
          5
        ];
        break;
      case "lb":
        Z = 5e3, R = [
          -5e4,
          5e4,
          500
        ];
        break;
      case "N":
        Z = 1e4, R = [
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
      stress: Qs(e, h),
      moment: `${B.label}\xB7${T.label}`,
      E: le(1, -2, Xt.E),
      G: le(1, -2, Xt.G),
      A: le(0, 2, Xt.A),
      Iz: le(0, 4, Xt.Iz),
      Iy: le(0, 4, Xt.Iy),
      J: le(0, 4, Xt.J),
      rho: le(1, -4, Xt.rho),
      spanRange: T.spanRange,
      heightRange: T.heightRange,
      defaultSpan: T.defaultSpan,
      defaultHeight: T.defaultHeight,
      defaultForce: Z,
      forceRange: R,
      galponSpan: T.galponSpan,
      galponLength: T.galponLength,
      galponHeight: T.galponHeight,
      galponRise: T.galponRise
    };
  }
  Kt("kN", "m"), Kt("kip", "in");
  function zn() {
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
  function ea(e) {
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
  function ta(e) {
    const h = e.force, [B, T, G] = e.forceRange;
    return {
      truss: [
        {
          key: "CM",
          val: -e.defaultForce,
          min: B,
          max: 0,
          step: G,
          label: `CM (${h})`
        },
        {
          key: "CV",
          val: 0,
          min: B,
          max: 0,
          step: G,
          label: `CV (${h})`
        }
      ],
      beams: [
        {
          key: "CM",
          val: 0,
          min: B,
          max: 0,
          step: G,
          label: `CM (${h})`
        },
        {
          key: "CV",
          val: 0,
          min: B,
          max: 0,
          step: G,
          label: `CV (${h})`
        },
        {
          key: "Ex",
          val: e.defaultForce,
          min: B,
          max: T,
          step: G,
          label: `Ex sismo (${h})`
        }
      ],
      "3d": [
        {
          key: "CM",
          val: 0,
          min: B,
          max: 0,
          step: G,
          label: `CM (${h})`
        },
        {
          key: "CV",
          val: 0,
          min: B,
          max: 0,
          step: G,
          label: `CV (${h})`
        },
        {
          key: "Ex",
          val: e.defaultForce * 3,
          min: B,
          max: T,
          step: G,
          label: `Ex sismo (${h})`
        }
      ],
      frame: [
        {
          key: "CM",
          val: -e.defaultForce,
          min: B,
          max: 0,
          step: G,
          label: `CM (${h})`
        },
        {
          key: "CV",
          val: 0,
          min: B,
          max: 0,
          step: G,
          label: `CV (${h})`
        },
        {
          key: "Ex",
          val: 0,
          min: B,
          max: T,
          step: G,
          label: `Ex sismo (${h})`
        }
      ],
      edificio: [
        {
          key: "CM",
          val: -e.defaultForce,
          min: B,
          max: 0,
          step: G,
          label: `CM (${h})`
        },
        {
          key: "CV",
          val: 0,
          min: B,
          max: 0,
          step: G,
          label: `CV (${h})`
        },
        {
          key: "Ex",
          val: 0,
          min: B,
          max: T,
          step: G,
          label: `Ex sismo (${h})`
        },
        {
          key: "Ey",
          val: 0,
          min: B,
          max: T,
          step: G,
          label: `Ey sismo (${h})`
        }
      ],
      galpon: [
        {
          key: "CM",
          val: -e.defaultForce,
          min: B,
          max: 0,
          step: G,
          label: `CM (${h})`
        },
        {
          key: "CV",
          val: 0,
          min: B,
          max: 0,
          step: G,
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
          step: G,
          label: `CM (${h})`
        }
      ],
      "placa-q4": [
        {
          key: "CM",
          val: 0,
          min: B,
          max: 0,
          step: G,
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
  na = function() {
    const e = document.createElement("div");
    e.id = "modal-results", e.style.cssText = `
    position: fixed; bottom: 10px; left: 10px; z-index: 9999;
    background: rgba(0,0,0,0.92); color: #0f0; font-family: monospace;
    font-size: 12px; border-radius: 6px;
    max-width: 720px; overflow-x: auto; pointer-events: auto;
    border: 1px solid #0f03;
  `;
    let h = false;
    function B(T, G) {
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
      ], le = [
        0,
        0,
        0,
        0,
        0,
        0
      ];
      let Z = `<div id="modal-header" style="display:flex; align-items:center; justify-content:space-between; padding:8px 12px; cursor:default;">
  <b style="color:#ff0">\u26A1 MODAL ANALYSIS \u2014 ${G.title}</b>
  <div style="display:flex; gap:4px; margin-left:12px;">
    <button id="modal-copy" style="padding:2px 8px; font-size:10px; cursor:pointer;
      background:#2d6a4f; color:#fff; border:1px solid #40916c; border-radius:3px;" title="Copiar tabla">\u{1F4CB}</button>
    <button id="modal-minimize" style="padding:2px 8px; font-size:10px; cursor:pointer;
      background:#555; color:#fff; border:1px solid #777; border-radius:3px;" title="Minimizar">\u25AC</button>
  </div>
</div>`;
      if (Z += '<div id="modal-body" style="padding:0 12px 10px 12px;">', G.properties) for (const R of G.properties) Z += `<span style="color:#888">${R}</span>
`;
      Z += `<table style="border-collapse:collapse; color:#0f0; font-size:11px; margin-top:4px">
<tr style="color:#ff0; border-bottom:1px solid #ff03">
  <th style="padding:2px 6px">Mode</th>
  <th style="padding:2px 6px">Freq (Hz)</th>
  <th style="padding:2px 6px">Period (s)</th>
  <th style="padding:2px 6px">\u03C9 (rad/s)</th>`;
      for (const R of ye) Z += `<th style="padding:2px 5px">${R}</th>`;
      if (Z += `<th style="padding:2px 5px; color:#0ff">\u03A3Ux</th>
  <th style="padding:2px 5px; color:#0ff">\u03A3Uy</th>
  <th style="padding:2px 5px; color:#0ff">\u03A3Rz</th></tr>`, T.frequencies.forEach((R, fe) => {
        var _a2;
        const me = R > 0 ? 1 / R : 0, I = R * 2 * Math.PI, ee = ((_a2 = T.massParticipation) == null ? void 0 : _a2[fe]) || [
          0,
          0,
          0,
          0,
          0,
          0
        ];
        for (let he = 0; he < 6; he++) le[he] += ee[he];
        Z += `<tr style="border-bottom:1px solid #fff1">
  <td style="padding:2px 6px; text-align:center">${fe + 1}</td>
  <td style="padding:2px 6px; text-align:right">${R.toFixed(4)}</td>
  <td style="padding:2px 6px; text-align:right">${me.toFixed(4)}</td>
  <td style="padding:2px 6px; text-align:right">${I.toFixed(2)}</td>`;
        for (let he = 0; he < 6; he++) {
          const Ze = (ee[he] * 100).toFixed(1), ne = ee[he] > 0.5 ? "#f00" : ee[he] > 0.1 ? "#ff0" : "#0f0";
          Z += `<td style="padding:2px 5px; text-align:right; color:${ne}">${Ze}%</td>`;
        }
        Z += `<td style="padding:2px 5px; text-align:right; color:#0ff">${(le[0] * 100).toFixed(1)}%</td>
  <td style="padding:2px 5px; text-align:right; color:#0ff">${(le[1] * 100).toFixed(1)}%</td>
  <td style="padding:2px 5px; text-align:right; color:#0ff">${(le[5] * 100).toFixed(1)}%</td></tr>`;
      }), Z += "</table></div>", e.innerHTML = Z, h) {
        const R = e.querySelector("#modal-body"), fe = e.querySelector("#modal-minimize");
        R && (R.style.display = "none"), fe && (fe.textContent = "\u25A2", fe.title = "Restaurar");
      }
      (_a = e.querySelector("#modal-minimize")) == null ? void 0 : _a.addEventListener("click", () => {
        h = !h;
        const R = e.querySelector("#modal-body"), fe = e.querySelector("#modal-minimize");
        h ? (R.style.display = "none", fe.textContent = "\u25A2", fe.title = "Restaurar") : (R.style.display = "block", fe.textContent = "\u25AC", fe.title = "Minimizar");
      }), (_b = e.querySelector("#modal-copy")) == null ? void 0 : _b.addEventListener("click", () => {
        const R = [];
        R.push(`Modal Analysis \u2014 ${G.title}`);
        const fe = `Mode  Freq(Hz)  Period(s)  \u03C9(rad/s)  ${ye.join("     ")}  \u03A3Ux    \u03A3Uy    \u03A3Rz`;
        R.push(fe), R.push("-".repeat(fe.length));
        const me = [
          0,
          0,
          0,
          0,
          0,
          0
        ];
        T.frequencies.forEach((ee, he) => {
          var _a2;
          const Ze = ee > 0 ? 1 / ee : 0, ne = ee * 2 * Math.PI, se = ((_a2 = T.massParticipation) == null ? void 0 : _a2[he]) || [
            0,
            0,
            0,
            0,
            0,
            0
          ];
          for (let Se = 0; Se < 6; Se++) me[Se] += se[Se];
          const ve = se.map((Se) => ((Se * 100).toFixed(1) + "%").padStart(6)).join(" ");
          R.push(`${String(he + 1).padStart(4)}  ${ee.toFixed(4).padStart(9)}  ${Ze.toFixed(4).padStart(9)}  ${ne.toFixed(2).padStart(9)}  ${ve}  ${(me[0] * 100).toFixed(1).padStart(5)}%  ${(me[1] * 100).toFixed(1).padStart(5)}%  ${(me[5] * 100).toFixed(1).padStart(5)}%`);
        }), navigator.clipboard.writeText(R.join(`
`));
        const I = e.querySelector("#modal-copy");
        I.textContent = "\u2713", setTimeout(() => I.textContent = "\u{1F4CB}", 1500);
      });
    }
    return {
      div: e,
      render: B
    };
  };
  const te = 64516e-8, k = 416231e-12, A = 0.0254, jt = [
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
  function In() {
    const e = {};
    return jt.forEach((h, B) => {
      h.type === "W" && (e[h.name] = B);
    }), e;
  }
  function En() {
    const e = {};
    return jt.forEach((h, B) => {
      h.type === "HSS" && (e[h.name] = B);
    }), e;
  }
  function oa(e) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    const { nodes: h, elements: B, elementInputs: T, nodeInputs: G, deformOutputs: ye } = e, le = h.length * 6, Z = B.length, R = B.filter((ne) => ne.length === 2).length, fe = B.filter((ne) => ne.length >= 3).length, me = document.createElement("div");
    me.className = "rpt-overlay";
    let I = "";
    I += '<button class="rpt-close" id="rpt-close">\u2715 Close</button>', I += "<h1>Finite Element Analysis \u2014 Step-by-Step Report</h1>", I += '<div class="rpt-subtitle">Complete FEM derivation from element formulation to final results</div>', I += '<hr class="rpt-sep"/>', I += "<h2>1. Input Data</h2>", I += '<table class="rpt-info"><tbody>', I += `<tr><td>Number of nodes</td><td class="val">${h.length}</td></tr>`, I += `<tr><td>Number of elements</td><td class="val">${Z} (${R} frames, ${fe} shells)</td></tr>`, I += '<tr><td>DOFs per node</td><td class="val">6 (u<sub>x</sub>, u<sub>y</sub>, u<sub>z</sub>, \u03B8<sub>x</sub>, \u03B8<sub>y</sub>, \u03B8<sub>z</sub>)</td></tr>', I += `<tr><td>Total DOFs</td><td class="val">${le}</td></tr>`, I += "</tbody></table>", I += "<h3>1.1 Node Coordinates</h3>", I += '<table class="rpt-data"><thead><tr><th>Node</th><th>x</th><th>y</th><th>z</th></tr></thead><tbody>', h.forEach((ne, se) => {
      I += `<tr><td>${se}</td><td>${Ie(ne[0])}</td><td>${Ie(ne[1])}</td><td>${Ie(ne[2])}</td></tr>`;
    }), I += "</tbody></table>", I += "<h3>1.2 Element Connectivity</h3>", I += '<table class="rpt-data"><thead><tr><th>Elem</th><th>Type</th><th>Nodes</th><th>L</th><th>E</th><th>A</th><th>I<sub>z</sub></th><th>I<sub>y</sub></th></tr></thead><tbody>', B.forEach((ne, se) => {
      var _a2, _b2, _c2, _d2;
      const ve = ne.length === 2, Se = ne.map((Je) => h[Je]), Fe = ve ? Ut(qt(Se[1], Se[0])) : 0, Pe = ((_a2 = T.elasticities) == null ? void 0 : _a2.get(se)) ?? 0, Ve = ((_b2 = T.areas) == null ? void 0 : _b2.get(se)) ?? 0, Ce = ((_c2 = T.momentsOfInertiaZ) == null ? void 0 : _c2.get(se)) ?? 0, rt = ((_d2 = T.momentsOfInertiaY) == null ? void 0 : _d2.get(se)) ?? 0;
      I += `<tr><td>${se}</td><td>${ve ? "Frame" : "Shell"}</td><td>${ne.join(" \u2192 ")}</td>`, I += `<td>${Ie(Fe)}</td><td>${Ie(Pe)}</td><td>${Ie(Ve)}</td><td>${Ie(Ce)}</td><td>${Ie(rt)}</td></tr>`;
    }), I += "</tbody></table>", I += "<h2>2. Element Formulation</h2>", R > 0 && (I += "<h3>2.1 Frame Element (Euler-Bernoulli Beam)</h3>", I += "<p>Each frame element has 2 nodes and 12 DOFs: [u<sub>x</sub>, u<sub>y</sub>, u<sub>z</sub>, \u03B8<sub>x</sub>, \u03B8<sub>y</sub>, \u03B8<sub>z</sub>] per node.</p>", I += "<h4>2.1.1 Shape Functions</h4>", I += "<p><b>Axial</b> (linear interpolation):</p>", I += '<div class="rpt-eq">N\u2081(\u03BE) = 1 \u2212 \u03BE &nbsp;&nbsp;&nbsp; N\u2082(\u03BE) = \u03BE &nbsp;&nbsp;&nbsp; where \u03BE = x/L \u2208 [0, 1]</div>', I += "<p><b>Bending</b> (Hermite cubic polynomials):</p>", I += '<table class="rpt-eq-table"><tbody>', I += '<tr><td class="eq-name">H\u2081(\u03BE)</td><td>= 1 \u2212 3\u03BE\xB2 + 2\u03BE\xB3</td><td class="eq-desc">displacement at node i</td></tr>', I += '<tr><td class="eq-name">H\u2082(\u03BE)</td><td>= L\u03BE(1 \u2212 \u03BE)\xB2</td><td class="eq-desc">rotation at node i</td></tr>', I += '<tr><td class="eq-name">H\u2083(\u03BE)</td><td>= 3\u03BE\xB2 \u2212 2\u03BE\xB3</td><td class="eq-desc">displacement at node j</td></tr>', I += '<tr><td class="eq-name">H\u2084(\u03BE)</td><td>= L\u03BE\xB2(\u03BE \u2212 1)</td><td class="eq-desc">rotation at node j</td></tr>', I += "</tbody></table>", I += aa(), I += "<p><b>Torsion</b> (linear): same as axial.</p>", I += "<h4>2.1.2 Strain-Displacement Matrix B</h4>", I += "<p>The B matrix relates nodal displacements to internal strains:</p>", I += '<div class="rpt-eq">\u03B5<sub>axial</sub> = du/dx = (1/L)\xB7[\u22121, 1]\xB7{u<sub>i</sub>, u<sub>j</sub>}</div>', I += '<div class="rpt-eq">\u03BA<sub>bending</sub> = d\xB2v/dx\xB2 = B<sub>b</sub>\xB7{v<sub>i</sub>, \u03B8<sub>i</sub>, v<sub>j</sub>, \u03B8<sub>j</sub>}</div>', I += '<div class="rpt-eq">B<sub>b</sub>(\u03BE) = (1/L\xB2)\xB7[\u22126+12\u03BE, L(\u22124+6\u03BE), 6\u221212\u03BE, L(\u22122+6\u03BE)]</div>', I += '<div class="rpt-eq">\u03C6\u2032<sub>torsion</sub> = d\u03B8<sub>x</sub>/dx = (1/L)\xB7[\u22121, 1]\xB7{\u03B8<sub>xi</sub>, \u03B8<sub>xj</sub>}</div>', I += "<h4>2.1.3 Constitutive Relations D</h4>", I += '<table class="rpt-eq-table"><tbody>', I += '<tr><td class="eq-name">Axial:</td><td>\u03C3 = E\xB7\u03B5</td><td>\u2192 D<sub>axial</sub> = E\xB7A</td></tr>', I += '<tr><td class="eq-name">Bending Z:</td><td>M<sub>z</sub> = EI<sub>z</sub>\xB7\u03BA</td><td>\u2192 D<sub>bz</sub> = E\xB7I<sub>z</sub></td></tr>', I += '<tr><td class="eq-name">Bending Y:</td><td>M<sub>y</sub> = EI<sub>y</sub>\xB7\u03BA</td><td>\u2192 D<sub>by</sub> = E\xB7I<sub>y</sub></td></tr>', I += '<tr><td class="eq-name">Torsion:</td><td>T = GJ\xB7\u03C6\u2032</td><td>\u2192 D<sub>torsion</sub> = G\xB7J</td></tr>', I += "</tbody></table>", I += "<h4>2.1.4 Local Stiffness Matrix K<sub>local</sub></h4>", I += "<p>Obtained by analytical integration:</p>", I += '<div class="rpt-eq rpt-eq-highlight">K<sub>local</sub> = \u222B\u2080\u1D38 B\u1D40\xB7D\xB7B dx</div>', I += "<p>Result for Euler-Bernoulli beam (12\xD712 symmetric):</p>", I += '<div class="rpt-eq-small">', I += "K[0,0] = EA/L &nbsp;&nbsp; K[1,1] = 12EI<sub>z</sub>/L\xB3 &nbsp;&nbsp; K[2,2] = 12EI<sub>y</sub>/L\xB3 &nbsp;&nbsp; K[3,3] = GJ/L<br/>", I += "K[4,4] = 4EI<sub>y</sub>/L &nbsp;&nbsp; K[5,5] = 4EI<sub>z</sub>/L &nbsp;&nbsp; K[1,5] = 6EI<sub>z</sub>/L\xB2 &nbsp;&nbsp; K[2,4] = \u22126EI<sub>y</sub>/L\xB2", I += "</div>", I += "<h4>2.1.5 Transformation Matrix T</h4>", I += "<p>Direction cosines of element axis:</p>", I += '<div class="rpt-eq">l = (x<sub>j</sub>\u2212x<sub>i</sub>)/L &nbsp;&nbsp; m = (y<sub>j</sub>\u2212y<sub>i</sub>)/L &nbsp;&nbsp; n = (z<sub>j</sub>\u2212z<sub>i</sub>)/L &nbsp;&nbsp; D = \u221A(l\xB2+m\xB2)</div>', I += '<div class="rpt-eq">\u03BB = [l, m, n; \u2212m/D, l/D, 0; \u2212ln/D, \u2212mn/D, D] &nbsp;&nbsp; (3\xD73)</div>', I += '<div class="rpt-eq rpt-eq-highlight">T = I\u2084 \u2297 \u03BB &nbsp;&nbsp; (12\xD712 block-diagonal, Kronecker product)</div>', I += "<p>Special case for vertical elements (n = \xB11): \u03BB uses fixed axes.</p>", I += "<h4>2.1.6 Global Stiffness Matrix</h4>", I += '<div class="rpt-eq rpt-eq-highlight">K<sub>global</sub> = T\u1D40 \xB7 K<sub>local</sub> \xB7 T</div>'), I += "<h2>3. Numerical Results per Element</h2>", I += "<p>For each element, we compute K<sub>local</sub>, T, and K<sub>global</sub> = T\u1D40\xB7K\xB7T with the actual properties:</p>";
    for (let ne = 0; ne < Z; ne++) {
      const se = B[ne], ve = se.map((pn) => h[pn]);
      if (!(se.length === 2)) continue;
      const Fe = Ut(qt(ve[1], ve[0])), Pe = ((_a = T.elasticities) == null ? void 0 : _a.get(ne)) ?? 0, Ve = ((_b = T.areas) == null ? void 0 : _b.get(ne)) ?? 0, Ce = ((_c = T.momentsOfInertiaZ) == null ? void 0 : _c.get(ne)) ?? 0, rt = ((_d = T.momentsOfInertiaY) == null ? void 0 : _d.get(ne)) ?? 0, Je = ((_e = T.shearModuli) == null ? void 0 : _e.get(ne)) ?? 0, nt = ((_f = T.torsionalConstants) == null ? void 0 : _f.get(ne)) ?? 0;
      let ot = null, Qe = null, xt = null;
      try {
        ot = Tn(ve, T, ne), Qe = Fn(ve), xt = bt(uo(Qe), bt(ot, Qe));
      } catch {
        continue;
      }
      const Dt = qt(ve[1], ve[0]), gt = Dt[0] / Fe, ht = Dt[1] / Fe, dn = Dt[2] / Fe;
      I += '<div class="rpt-elem-block">', I += `<h3 class="rpt-elem-title" data-toggle="elem${ne}">\u25B6 Element ${ne} \u2014 Nodes ${se[0]} \u2192 ${se[1]}, L = ${Ie(Fe)}</h3>`, I += `<div id="rpt-elem${ne}" class="rpt-elem-body" style="display:none">`, I += "<h4>Properties (numerical substitution)</h4>", I += '<div class="rpt-eq-small">', I += `E = ${Ie(Pe)} &nbsp;&nbsp; A = ${Ie(Ve)} &nbsp;&nbsp; I<sub>z</sub> = ${Ie(Ce)} &nbsp;&nbsp; I<sub>y</sub> = ${Ie(rt)} &nbsp;&nbsp; G = ${Ie(Je)} &nbsp;&nbsp; J = ${Ie(nt)}<br/>`, I += `EA/L = ${Ie(Pe)}\xB7${Ie(Ve)}/${Ie(Fe)} = <b>${Ie(Pe * Ve / Fe)}</b><br/>`, I += `12EI<sub>z</sub>/L\xB3 = 12\xB7${Ie(Pe)}\xB7${Ie(Ce)}/${Ie(Fe)}\xB3 = <b>${Ie(12 * Pe * Ce / Fe ** 3)}</b><br/>`, I += `12EI<sub>y</sub>/L\xB3 = 12\xB7${Ie(Pe)}\xB7${Ie(rt)}/${Ie(Fe)}\xB3 = <b>${Ie(12 * Pe * rt / Fe ** 3)}</b><br/>`, I += `GJ/L = ${Ie(Je)}\xB7${Ie(nt)}/${Ie(Fe)} = <b>${Ie(Je * nt / Fe)}</b>`, I += "</div>", I += "<h4>Direction cosines</h4>", I += `<div class="rpt-eq-small">l = ${Ln(gt)}, m = ${Ln(ht)}, n = ${Ln(dn)}, D = ${Ln(Math.sqrt(gt ** 2 + ht ** 2))}</div>`, I += "<h4>K<sub>local</sub> (12\xD712)</h4>", I += io(ot, 12), I += "<h4>T \u2014 Transformation (12\xD712)</h4>", I += io(Qe, 12), I += "<h4>K<sub>global</sub> = T\u1D40 \xB7 K<sub>local</sub> \xB7 T</h4>", I += io(xt, 12), I += "<h4>Assembly</h4>", I += `<div class="rpt-eq-small">Global DOFs: node ${se[0]} \u2192 [${se[0] * 6}..${se[0] * 6 + 5}], node ${se[1]} \u2192 [${se[1] * 6}..${se[1] * 6 + 5}]</div>`, I += "</div></div>";
    }
    I += "<h2>4. Global Assembly</h2>", I += `<div class="rpt-eq rpt-eq-highlight">K<sub>total</sub> = \u03A3<sub>e=0</sub><sup>${Z - 1}</sup> (T<sub>e</sub>\u1D40 \xB7 k<sub>e</sub> \xB7 T<sub>e</sub>)</div>`, I += "<p>Each element contributes its K<sub>global</sub> to the positions determined by its node DOF indices.</p>", I += la(B, h.length), I += "<h2>5. Boundary Conditions</h2>";
    const ee = [
      "u<sub>x</sub>",
      "u<sub>y</sub>",
      "u<sub>z</sub>",
      "\u03B8<sub>x</sub>",
      "\u03B8<sub>y</sub>",
      "\u03B8<sub>z</sub>"
    ], he = [];
    if (I += "<h3>5.1 Supports (fixed DOFs)</h3>", G.supports && G.supports.size > 0) {
      I += '<table class="rpt-data"><thead><tr><th>Node</th>';
      for (const ne of ee) I += `<th>${ne}</th>`;
      I += "</tr></thead><tbody>", G.supports.forEach((ne, se) => {
        I += `<tr><td>${se}</td>`, ne.forEach((ve, Se) => {
          ve && he.push(se * 6 + Se), I += `<td class="${ve ? "fixed" : ""}">${ve ? "Fixed" : "Free"}</td>`;
        }), I += "</tr>";
      }), I += "</tbody></table>";
    }
    if (I += `<div class="rpt-eq-small">Fixed DOFs: [${he.join(", ")}] \u2192 ${he.length} constraints<br/>`, I += `Free DOFs: ${le} \u2212 ${he.length} = <b>${le - he.length}</b></div>`, I += "<h3>5.2 Applied Loads</h3>", G.loads && G.loads.size > 0) {
      I += '<table class="rpt-data"><thead><tr><th>Node</th>';
      const ne = [
        "F<sub>x</sub>",
        "F<sub>y</sub>",
        "F<sub>z</sub>",
        "M<sub>x</sub>",
        "M<sub>y</sub>",
        "M<sub>z</sub>"
      ];
      for (const se of ne) I += `<th>${se}</th>`;
      I += "</tr></thead><tbody>", G.loads.forEach((se, ve) => {
        I += `<tr><td>${ve}</td>`, se.forEach((Se) => {
          const Fe = Math.abs(Se) > 1e-10;
          I += `<td class="${Fe ? "nz" : ""}">${Fe ? Ie(Se) : "0"}</td>`;
        }), I += "</tr>";
      }), I += "</tbody></table>";
    }
    if (I += "<h2>6. Solution</h2>", I += "<p>After removing fixed DOFs, the reduced system is:</p>", I += '<div class="rpt-eq rpt-eq-highlight">K<sub>free</sub> \xB7 u<sub>free</sub> = F<sub>free</sub></div>', I += "<p>Solved using LU decomposition with partial pivoting (sparse matrix).</p>", I += "<h3>6.1 Nodal Displacements</h3>", ye == null ? void 0 : ye.deformations) {
      I += '<table class="rpt-data"><thead><tr><th>Node</th>';
      for (const ne of ee) I += `<th>${ne}</th>`;
      I += "</tr></thead><tbody>", ye.deformations.forEach((ne, se) => {
        I += `<tr><td>${se}</td>`, ne.forEach((ve) => {
          const Se = Math.abs(ve) > 1e-10;
          I += `<td class="${Se ? "nz" : ""}">${Ie(ve, 6)}</td>`;
        }), I += "</tr>";
      }), I += "</tbody></table>";
    }
    if (I += "<h3>6.2 Reactions</h3>", I += '<div class="rpt-eq">R = K<sub>total</sub> \xB7 u (extract at fixed DOFs)</div>', ye == null ? void 0 : ye.reactions) {
      I += '<table class="rpt-data"><thead><tr><th>Node</th>';
      for (const ne of ee) I += `<th>${ne}</th>`;
      I += "</tr></thead><tbody>", ye.reactions.forEach((ne, se) => {
        I += `<tr><td>${se}</td>`, ne.forEach((ve) => {
          const Se = Math.abs(ve) > 1e-10;
          I += `<td class="${Se ? "nz-react" : ""}">${Se ? Ie(ve, 4) : "0"}</td>`;
        }), I += "</tr>";
      }), I += "</tbody></table>";
    }
    if (I += "<h2>7. Internal Forces</h2>", I += "<p>For each element, transform global displacements to local and multiply by K<sub>local</sub>:</p>", I += '<div class="rpt-eq">u<sub>local</sub> = T \xB7 u<sub>global</sub></div>', I += '<div class="rpt-eq rpt-eq-highlight">f<sub>local</sub> = K<sub>local</sub> \xB7 u<sub>local</sub></div>', ye == null ? void 0 : ye.deformations) {
      const ne = [
        "N",
        "V<sub>y</sub>",
        "V<sub>z</sub>",
        "M<sub>x</sub>",
        "M<sub>y</sub>",
        "M<sub>z</sub>"
      ];
      I += '<table class="rpt-data"><thead><tr><th>Elem</th><th>Nodes</th>';
      for (const se of ne) I += `<th>${se}<sub>i</sub></th>`;
      for (const se of ne) I += `<th>${se}<sub>j</sub></th>`;
      I += "</tr></thead><tbody>";
      for (let se = 0; se < Z; se++) {
        const ve = B[se];
        if (ve.length !== 2) continue;
        const Se = ve.map((Fe) => h[Fe]);
        try {
          const Fe = Tn(Se, T, se), Pe = Fn(Se), Ve = [];
          for (const Je of ve) {
            const nt = ((_g = ye.deformations) == null ? void 0 : _g.get(Je)) || [
              0,
              0,
              0,
              0,
              0,
              0
            ];
            Ve.push(...nt);
          }
          const Ce = bt(Pe, Ve), rt = bt(Fe, Ce);
          I += `<tr><td>${se}</td><td>${ve.join("\u2192")}</td>`;
          for (let Je = 0; Je < 12; Je++) {
            const nt = Math.abs(rt[Je]) > 1e-10;
            I += `<td class="${nt ? "nz" : ""}">${Ie(rt[Je], 2)}</td>`;
          }
          I += "</tr>";
        } catch {
        }
      }
      I += "</tbody></table>";
    }
    const Ze = `
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
    return me.innerHTML = Ze + I, (_h = me.querySelector("#rpt-close")) == null ? void 0 : _h.addEventListener("click", () => me.remove()), me.querySelectorAll("[data-toggle]").forEach((ne) => {
      ne.addEventListener("click", () => {
        const se = ne.dataset.toggle, ve = me.querySelector(`#rpt-${se}`);
        if (ve) {
          const Se = ve.style.display !== "none";
          ve.style.display = Se ? "none" : "", ne.textContent = ne.textContent.replace(/^[▼▶]/, Se ? "\u25B6" : "\u25BC");
        }
      });
    }), me;
  }
  function Ie(e, h = 2) {
    return Math.abs(e) < 1e-10 ? "0" : Math.abs(e) >= 1e7 || Math.abs(e) < 0.01 && e !== 0 ? e.toExponential(h) : e.toFixed(h);
  }
  function Ln(e) {
    return Math.abs(e) < 1e-10 ? "0" : e.toFixed(4);
  }
  function io(e, h) {
    var _a;
    const B = Math.min(h, 12);
    let T = '<div style="overflow-x:auto"><table class="rpt-mtx">';
    for (let G = 0; G < B; G++) {
      T += "<tr>";
      for (let ye = 0; ye < B; ye++) {
        const le = ((_a = e[G]) == null ? void 0 : _a[ye]) ?? 0, Z = Math.abs(le) < 1e-10;
        T += `<td class="${Z ? "z" : ""} ${G === ye && !Z ? "diag" : ""}">${Z ? "0" : sa(le)}</td>`;
      }
      T += "</tr>";
    }
    return T += "</table>", h > B && (T += `<div style="color:#888;font-size:9pt">(showing ${B}\xD7${B} of ${h}\xD7${h})</div>`), T += "</div>", T;
  }
  function sa(e) {
    return Math.abs(e) >= 1e6 || Math.abs(e) < 0.01 && e !== 0 ? e.toExponential(1) : Math.abs(e) >= 100 ? e.toFixed(0) : e.toFixed(2);
  }
  function aa() {
    const le = [
      {
        name: "H\u2081",
        color: "#c44",
        fn: (R) => 1 - 3 * R ** 2 + 2 * R ** 3
      },
      {
        name: "H\u2082/L",
        color: "#2a9d8f",
        fn: (R) => R * (1 - R) ** 2
      },
      {
        name: "H\u2083",
        color: "#264653",
        fn: (R) => 3 * R ** 2 - 2 * R ** 3
      },
      {
        name: "H\u2084/L",
        color: "#e9c46a",
        fn: (R) => R ** 2 * (R - 1)
      }
    ];
    let Z = '<svg viewBox="0 0 600 180" style="width:100%;max-width:600px;border:1px solid #ddd;border-radius:4px;margin:8px 0;background:#fafafa">';
    Z += `<line x1="30" y1="${180 / 2}" x2="570" y2="${180 / 2}" stroke="#ccc" stroke-width="1"/>`, Z += '<line x1="30" y1="20" x2="30" y2="160" stroke="#ccc" stroke-width="1"/>', Z += `<text x="${600 / 2}" y="175" fill="#888" font-size="10" text-anchor="middle" font-family="sans-serif">\u03BE (0 \u2192 1)</text>`, Z += `<text x="25" y="${180 / 2 - 60 - 5}" fill="#888" font-size="9" text-anchor="end" font-family="sans-serif">1</text>`, Z += `<text x="25" y="${180 / 2 + 4}" fill="#888" font-size="9" text-anchor="end" font-family="sans-serif">0</text>`;
    for (const R of le) {
      let fe = "";
      for (let he = 0; he <= 80; he++) {
        const Ze = he / 80, ne = 30 + Ze * 540, se = 180 / 2 - R.fn(Ze) * 60;
        fe += (he === 0 ? "M" : "L") + `${ne.toFixed(1)},${se.toFixed(1)}`;
      }
      Z += `<path d="${fe}" fill="none" stroke="${R.color}" stroke-width="2.5"/>`;
      const me = 0.75, I = 30 + me * 540 + 8, ee = 180 / 2 - R.fn(me) * 60 - 6;
      Z += `<text x="${I}" y="${ee}" fill="${R.color}" font-size="11" font-weight="bold" font-family="sans-serif">${R.name}</text>`;
    }
    return Z += "</svg>", Z;
  }
  function la(e, h) {
    const B = h * 6, T = Math.min(B, 30);
    let G = "<p>Assembly contribution map (number = how many elements contribute to each K<sub>total</sub> entry):</p>";
    G += '<div style="overflow-x:auto"><table class="rpt-assembly-map">', G += "<tr><td></td>";
    for (let le = 0; le < T; le++) G += `<td style="color:#003366;font-weight:bold;font-size:7px">${le}</td>`;
    G += "</tr>";
    const ye = Array.from({
      length: T
    }, () => Array(T).fill(0));
    for (let le = 0; le < e.length; le++) {
      const Z = e[le].map((R) => R * 6);
      for (const R of Z) for (const fe of Z) for (let me = 0; me < 6; me++) for (let I = 0; I < 6; I++) {
        const ee = R + me, he = fe + I;
        ee < T && he < T && ye[ee][he]++;
      }
    }
    for (let le = 0; le < T; le++) {
      G += `<tr><td style="color:#003366;font-weight:bold;font-size:7px">${le}</td>`;
      for (let Z = 0; Z < T; Z++) {
        const R = ye[le][Z], fe = R === 0 ? "#fff" : R === 1 ? "#e8f0fe" : R === 2 ? "#c6dcf5" : "#a0c4e8", me = R === 0 ? "" : R.toString();
        G += `<td style="background:${fe};color:#003366">${me}</td>`;
      }
      G += "</tr>";
    }
    return G += "</table></div>", B > T && (G += `<div style="color:#888;font-size:9pt">(showing ${T}\xD7${T} of ${B}\xD7${B})</div>`), G;
  }
  let co = false;
  function ra(e) {
    if (co || window.katex) {
      co = true, e();
      return;
    }
    const h = document.createElement("link");
    h.rel = "stylesheet", h.href = "https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css", document.head.appendChild(h);
    const B = document.createElement("script");
    B.src = "https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.js", B.onload = () => {
      co = true, e();
    }, document.head.appendChild(B);
  }
  function ls(e, h = false) {
    try {
      if (window.katex) return window.katex.renderToString(e, {
        displayMode: h,
        throwOnError: false
      });
    } catch {
    }
    return `<code class="er-tex-fallback">${e}</code>`;
  }
  function ia(e, h, B, T, G, ye) {
    var _a, _b, _c, _d, _e, _f;
    const le = B[e], Z = le.map((Qe) => h[Qe]), R = le.length === 2, fe = R ? Ut(qt(Z[1], Z[0])) : 0, me = ((_a = T.elasticities) == null ? void 0 : _a.get(e)) ?? 0, I = ((_b = T.areas) == null ? void 0 : _b.get(e)) ?? 0, ee = ((_c = T.momentsOfInertiaZ) == null ? void 0 : _c.get(e)) ?? 0, he = ((_d = T.momentsOfInertiaY) == null ? void 0 : _d.get(e)) ?? 0, Ze = ((_e = T.shearModuli) == null ? void 0 : _e.get(e)) ?? 0, ne = ((_f = T.torsionalConstants) == null ? void 0 : _f.get(e)) ?? 0;
    let se = null, ve = null, Se = null;
    try {
      se = Tn(Z, T, e), ve = Fn(Z), Se = bt(uo(ve), bt(se, ve));
    } catch {
    }
    const Fe = R ? qt(Z[1], Z[0]) : [
      0,
      0,
      0
    ], Pe = fe > 0 ? Fe[0] / fe : 0, Ve = fe > 0 ? Fe[1] / fe : 0, Ce = fe > 0 ? Fe[2] / fe : 0, rt = Math.sqrt(Pe ** 2 + Ve ** 2), Je = [];
    if ((G == null ? void 0 : G.deformations) && R) for (const Qe of le) {
      const xt = G.deformations.get(Qe) || [
        0,
        0,
        0,
        0,
        0,
        0
      ];
      Je.push(...xt);
    }
    let nt = [], ot = [];
    if (Je.length === 12 && ve && se) {
      try {
        nt = bt(ve, Je);
      } catch {
        nt = Array(12).fill(0);
      }
      try {
        ot = bt(se, nt);
      } catch {
        ot = Array(12).fill(0);
      }
    }
    return {
      elemIdx: e,
      elem: le,
      elmNodes: Z,
      isFrame: R,
      L: fe,
      E: me,
      A: I,
      Iz: ee,
      Iy: he,
      G: Ze,
      J: ne,
      kLocal: se,
      T: ve,
      kGlobal: Se,
      l: Pe,
      m: Ve,
      n: Ce,
      D: rt,
      uGlobal: Je,
      uLocal: nt,
      fLocal: ot,
      dOut: G,
      aOut: ye,
      totalNodes: h.length
    };
  }
  function ca(e, h, B, T, G, ye) {
    var _a, _b;
    const le = ia(e, h, B, T, G, ye), Z = document.createElement("div");
    return Z.className = "er-panel", Z.innerHTML = ua + `
    <div class="er-header">
      <span class="er-badge">Element ${e}</span>
      <span class="er-type">${le.isFrame ? "Frame" : "Shell"} \u2014 Nodes ${le.elem.join(" \u2192 ")} \u2014 L = ${ge(le.L)}</span>
      <button class="er-fullscreen" id="er-fullscreen" title="Pantalla completa">\u26F6</button>
      <button class="er-close" id="er-close">\u2715</button>
    </div>
    <div class="er-tabs">
      <button class="er-tab active" data-tab="tabla">Tabla</button>
      <button class="er-tab" data-tab="math">Matematica Explicada</button>
      <button class="er-tab" data-tab="resumen">Resumen</button>
    </div>
    <div class="er-body" id="er-body-tabla">${da(le)}</div>
    <div class="er-body" id="er-body-math" style="display:none">${rs(le)}</div>
    <div class="er-body" id="er-body-resumen" style="display:none">${pa(le)}</div>
  `, Z.querySelectorAll(".er-tab").forEach((R) => {
      R.addEventListener("click", () => {
        Z.querySelectorAll(".er-tab").forEach((me) => me.classList.remove("active")), R.classList.add("active");
        const fe = R.dataset.tab;
        Z.querySelectorAll(".er-body").forEach((me) => me.style.display = "none"), Z.querySelector(`#er-body-${fe}`).style.display = "";
      });
    }), (_a = Z.querySelector("#er-close")) == null ? void 0 : _a.addEventListener("click", () => Z.remove()), (_b = Z.querySelector("#er-fullscreen")) == null ? void 0 : _b.addEventListener("click", () => {
      const R = Z.classList.toggle("er-fullscreen-mode"), fe = Z.querySelector("#er-fullscreen");
      fe && (fe.textContent = R ? "\u22A1" : "\u26F6");
    }), setTimeout(() => {
      const R = Z.querySelector("#er-sf-canvas");
      R && po(R);
      const fe = Z.querySelector("#er-sf-canvas-math");
      fe && po(fe);
    }, 50), ra(() => {
      const R = Z.querySelector("#er-body-math");
      R && (R.innerHTML = rs(le)), setTimeout(() => {
        const fe = Z.querySelector("#er-sf-canvas-math");
        fe && po(fe);
      }, 50), Z.querySelectorAll(".er-deriv-header").forEach((fe) => {
        fe.addEventListener("click", () => {
          const me = fe.dataset.toggle, I = Z.querySelector(`#er-${me}`);
          I && (I.style.display = I.style.display === "none" ? "" : "none");
        });
      });
    }), Z;
  }
  function da(e) {
    let h = "";
    if (h += '<div class="er-section-title">1. Propiedades</div>', h += '<table class="er-props">', h += `<tr><td>E</td><td>${ge(e.E)}</td><td>A</td><td>${ge(e.A)}</td></tr>`, h += `<tr><td>I<sub>z</sub></td><td>${ge(e.Iz)}</td><td>I<sub>y</sub></td><td>${ge(e.Iy)}</td></tr>`, h += `<tr><td>G</td><td>${ge(e.G)}</td><td>J</td><td>${ge(e.J)}</td></tr>`, h += "</table>", e.kLocal && (h += `<div class="er-section-title">2. K<sub>local</sub> (${e.kLocal.length}\xD7${e.kLocal.length})</div>`, h += hn(e.kLocal)), e.T && (h += '<div class="er-section-title">3. T \u2014 Transformaci\xF3n</div>', h += hn(e.T)), e.kGlobal && (h += '<div class="er-section-title">4. K<sub>global</sub> = T<sup>T</sup>\xB7K\xB7T</div>', h += hn(e.kGlobal)), h += '<div class="er-section-title">5. Desplazamientos</div>', e.uGlobal.length > 0) {
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
        for (let G = 0; G < 6; G++) {
          const ye = e.uGlobal[T * 6 + G];
          h += `${B[G]}=<span class="${Math.abs(ye) > 1e-10 ? "nz" : ""}">${ge(ye, 6)}</span> `;
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
  function rs(e) {
    if (!e.isFrame) return '<div class="er-sub">Shell element math: coming soon</div>';
    let h = "";
    const B = (me) => ls(me), T = (me) => ls(me, true);
    h += '<div class="er-section-title">1. Geometria del elemento</div>', h += "<p>Viga Euler-Bernoulli con 2 nodos y 6 GDL por nodo:</p>", h += `<div class="er-eq">${T("\\text{DOFs} = [u_x,\\, u_y,\\, u_z,\\, \\theta_x,\\, \\theta_y,\\, \\theta_z] \\quad \\Rightarrow \\quad 12 \\text{ GDL totales}")}</div>`, h += '<div class="er-eq-num">', h += `${B("\\text{Nodo } i")} = (${e.elmNodes[0].map((me) => ge(me)).join(", ")})<br/>`, h += `${B("\\text{Nodo } j")} = (${e.elmNodes[1].map((me) => ge(me)).join(", ")})<br/>`, h += `${T(`L = \\sqrt{(x_j - x_i)^2 + (y_j - y_i)^2 + (z_j - z_i)^2} = \\mathbf{${ge(e.L)}}`)}`, h += "</div>", h += '<div class="er-section-title">2. Funciones de forma</div>', h += "<p>La viga usa <b>interpolacion lineal</b> para axial/torsion y <b>polinomios cubicos de Hermite</b> para flexion.</p>", h += '<div class="er-subsec">2.1 Axial y Torsion (lineal)</div>', h += `<div class="er-eq">${T("N_1(\\xi) = 1 - \\xi \\qquad N_2(\\xi) = \\xi \\qquad \\text{donde } \\xi = \\frac{x}{L} \\in [0,1]")}</div>`, h += "<p>Primera derivada:</p>", h += `<div class="er-eq">${T("\\frac{dN_1}{d\\xi} = -1 \\qquad \\frac{dN_2}{d\\xi} = 1")}</div>`, h += '<div class="er-subsec">2.2 Flexion (Hermite cubicos)</div>', h += `<p>Las funciones de Hermite garantizan continuidad ${B("C^1")} (desplazamiento y pendiente continuos):</p>`, h += `<div class="er-eq">${T("H_1(\\xi) = 1 - 3\\xi^2 + 2\\xi^3 \\qquad \\text{(desplazamiento nodo } i\\text{)}")}</div>`, h += `<div class="er-eq">${T("H_2(\\xi) = L\\,\\xi\\,(1-\\xi)^2 \\qquad \\text{(rotacion nodo } i\\text{)}")}</div>`, h += `<div class="er-eq">${T("H_3(\\xi) = 3\\xi^2 - 2\\xi^3 \\qquad \\text{(desplazamiento nodo } j\\text{)}")}</div>`, h += `<div class="er-eq">${T("H_4(\\xi) = L\\,\\xi^2(\\xi - 1) \\qquad \\text{(rotacion nodo } j\\text{)}")}</div>`, h += `<div class="er-subsec">Derivadas segunda (curvatura ${B("\\kappa = \\frac{d^2v}{dx^2}")}):</div>`, h += `<div class="er-eq">${T("H_1'' = \\frac{-6}{L^2}(1-2\\xi) \\qquad H_2'' = \\frac{-2}{L}(2-3\\xi)")}</div>`, h += `<div class="er-eq">${T("H_3'' = \\frac{6}{L^2}(1-2\\xi) \\qquad H_4'' = \\frac{-2}{L}(1-3\\xi)")}</div>`, h += '<canvas id="er-sf-canvas-math" width="500" height="250" style="width:100%;border:1px solid var(--fem-border);border-radius:4px;margin:8px 0;"></canvas>', h += '<div class="er-section-title">3. Matriz B (strain-displacement)</div>', h += "<p>La matriz B relaciona desplazamientos nodales con deformaciones internas:</p>", h += `<div class="er-eq">${T("\\boldsymbol{\\varepsilon} = \\mathbf{B} \\cdot \\mathbf{u}")}</div>`, h += '<div class="er-subsec">3.1 Deformacion axial</div>', h += `<div class="er-eq">${T("\\varepsilon_{axial} = \\frac{du}{dx} = \\frac{1}{L} \\begin{bmatrix} -1 & 1 \\end{bmatrix} \\begin{Bmatrix} u_i \\\\ u_j \\end{Bmatrix}")}</div>`, h += `<div class="er-subsec">3.2 Curvatura por flexion (plano XY \u2192 ${B("I_z")})</div>`, h += `<div class="er-eq">${T("\\kappa_z = \\frac{d^2 v}{dx^2} = \\mathbf{B}_{bz} \\cdot \\begin{Bmatrix} v_i \\\\ \\theta_{zi} \\\\ v_j \\\\ \\theta_{zj} \\end{Bmatrix}")}</div>`, h += `<div class="er-eq">${T("\\mathbf{B}_{bz}(\\xi) = \\frac{1}{L^2} \\begin{bmatrix} H_1'' & H_2'' & H_3'' & H_4'' \\end{bmatrix}")}</div>`, h += `<div class="er-subsec">3.3 Curvatura (plano XZ \u2192 ${B("I_y")})</div>`, h += `<div class="er-eq">${T("\\kappa_y = \\frac{d^2 w}{dx^2} = \\mathbf{B}_{by} \\cdot \\begin{Bmatrix} w_i \\\\ \\theta_{yi} \\\\ w_j \\\\ \\theta_{yj} \\end{Bmatrix}")}</div>`, h += '<div class="er-subsec">3.4 Torsion</div>', h += `<div class="er-eq">${T("\\phi' = \\frac{d\\theta_x}{dx} = \\frac{1}{L} \\begin{bmatrix} -1 & 1 \\end{bmatrix} \\begin{Bmatrix} \\theta_{xi} \\\\ \\theta_{xj} \\end{Bmatrix}")}</div>`, h += '<div class="er-section-title">4. Relaciones constitutivas D</div>', h += "<p>Cada modo de deformacion tiene su rigidez material:</p>", h += `<div class="er-eq">${T(`\\text{Axial: } \\sigma = E \\cdot \\varepsilon \\;\\Rightarrow\\; D_{ax} = EA = ${ge(e.E)} \\times ${ge(e.A)} = \\mathbf{${ge(e.E * e.A)}}`)}</div>`, h += `<div class="er-eq">${T(`\\text{Flex Z: } M_z = EI_z \\cdot \\kappa \\;\\Rightarrow\\; D_{bz} = EI_z = ${ge(e.E)} \\times ${ge(e.Iz)} = \\mathbf{${ge(e.E * e.Iz)}}`)}</div>`, h += `<div class="er-eq">${T(`\\text{Flex Y: } M_y = EI_y \\cdot \\kappa \\;\\Rightarrow\\; D_{by} = EI_y = ${ge(e.E)} \\times ${ge(e.Iy)} = \\mathbf{${ge(e.E * e.Iy)}}`)}</div>`, h += `<div class="er-eq">${T(`\\text{Torsion: } T = GJ \\cdot \\phi' \\;\\Rightarrow\\; D_t = GJ = ${ge(e.G)} \\times ${ge(e.J)} = \\mathbf{${ge(e.G * e.J)}}`)}</div>`, h += `<div class="er-section-title">5. Integracion \u2192 ${B("\\mathbf{K}_{local}")}</div>`, h += "<p>La matriz de rigidez local se obtiene integrando analiticamente:</p>", h += `<div class="er-eq er-eq-main">${T("\\mathbf{K}_{local} = \\int_0^L \\mathbf{B}^T \\cdot \\mathbf{D} \\cdot \\mathbf{B} \\; dx")}</div>`;
    const G = e.E * e.A / e.L, ye = e.E * e.Iz / e.L ** 3, le = e.E * e.Iy / e.L ** 3, Z = e.G * e.J / e.L;
    if (h += '<div class="er-deriv-block">', h += '<div class="er-deriv-header" data-toggle="deriv-axial">\u{1F4D6} K[0,0] = EA/L \u2014 <i>click para ver derivacion completa</i></div>', h += '<div id="er-deriv-axial" class="er-deriv-body" style="display:none">', h += "<p><b>Paso 1:</b> Funcion de forma axial</p>", h += `<div class="er-eq">${T("u(\\xi) = N_1 \\cdot u_i + N_2 \\cdot u_j = (1-\\xi)\\,u_i + \\xi\\,u_j")}</div>`, h += "<p><b>Paso 2:</b> Derivada (deformacion)</p>", h += `<div class="er-eq">${T("\\varepsilon = \\frac{du}{dx} = \\frac{1}{L}\\frac{du}{d\\xi} = \\frac{1}{L}(-u_i + u_j)")}</div>`, h += `<div class="er-eq">${T("\\mathbf{B}_{ax} = \\frac{1}{L}\\begin{bmatrix} -1 & 1 \\end{bmatrix}")}</div>`, h += `<p><b>Paso 3:</b> Integracion ${B("K = \\int_0^L B^T \\cdot EA \\cdot B \\; dx")}</p>`, h += `<div class="er-eq">${T("K_{ax} = \\int_0^L \\frac{1}{L}\\begin{bmatrix}-1\\\\1\\end{bmatrix} \\cdot EA \\cdot \\frac{1}{L}\\begin{bmatrix}-1 & 1\\end{bmatrix} dx")}</div>`, h += `<div class="er-eq">${T("= \\frac{EA}{L^2} \\begin{bmatrix}1 & -1\\\\-1 & 1\\end{bmatrix} \\int_0^L dx = \\frac{EA}{L^2} \\cdot L \\begin{bmatrix}1 & -1\\\\-1 & 1\\end{bmatrix}")}</div>`, h += `<div class="er-eq er-eq-main">${T(`K_{ax} = \\frac{EA}{L}\\begin{bmatrix}1 & -1\\\\-1 & 1\\end{bmatrix} = \\frac{${ge(e.E)}\\times${ge(e.A)}}{${ge(e.L)}}\\begin{bmatrix}1 & -1\\\\-1 & 1\\end{bmatrix}`)}</div>`, h += `<div class="er-eq">${T(`K[0,0] = K[6,6] = \\frac{EA}{L} = \\mathbf{${ge(G)}}`)}</div>`, h += "</div></div>", h += '<div class="er-deriv-block">', h += '<div class="er-deriv-header" data-toggle="deriv-bend">\u{1F4D6} K[1,1] = 12EI<sub>z</sub>/L\xB3 \u2014 <i>click para ver derivacion completa</i></div>', h += '<div id="er-deriv-bend" class="er-deriv-body" style="display:none">', h += `<p><b>Paso 1:</b> Funcion de forma Hermite para ${B("v(\\xi)")}</p>`, h += `<div class="er-eq">${T("v(\\xi) = H_1 v_i + H_2 \\theta_i + H_3 v_j + H_4 \\theta_j")}</div>`, h += "<p><b>Paso 2:</b> Segunda derivada (curvatura)</p>", h += `<div class="er-eq">${T("\\kappa = \\frac{d^2v}{dx^2} = \\frac{1}{L^2}\\frac{d^2v}{d\\xi^2}")}</div>`, h += `<div class="er-eq">${T("H_1'' = -6+12\\xi, \\quad H_2'' = L(-4+6\\xi), \\quad H_3'' = 6-12\\xi, \\quad H_4'' = L(-2+6\\xi)")}</div>`, h += `<div class="er-eq">${T("\\mathbf{B}_b = \\frac{1}{L^2}\\begin{bmatrix} H_1'' & H_2'' & H_3'' & H_4'' \\end{bmatrix}")}</div>`, h += `<p><b>Paso 3:</b> Integracion para K[1,1] (termino ${B("v_i \\cdot v_i")})</p>`, h += `<div class="er-eq">${T("K[1,1] = \\int_0^L \\frac{(H_1'')^2}{L^4} \\cdot EI_z \\; dx = \\frac{EI_z}{L^4} \\int_0^L (-6+12\\xi)^2 \\; dx")}</div>`, h += `<p>Expandimos: ${B("(-6+12\\xi)^2 = 36 - 144\\xi + 144\\xi^2")}</p>`, h += `<div class="er-eq">${T("\\int_0^L (36-144\\xi+144\\xi^2)\\,dx = 36L - 72L + 48L = 12L")}</div>`, h += `<div class="er-eq er-eq-main">${T(`K[1,1] = \\frac{EI_z}{L^4} \\cdot 12L = \\frac{12EI_z}{L^3} = \\frac{12 \\times ${ge(e.E)} \\times ${ge(e.Iz)}}{${ge(e.L)}^3} = \\mathbf{${ge(12 * ye)}}`)}</div>`, h += "</div></div>", h += '<div class="er-deriv-block">', h += '<div class="er-deriv-header" data-toggle="deriv-tors">\u{1F4D6} K[3,3] = GJ/L \u2014 <i>click para ver derivacion</i></div>', h += '<div id="er-deriv-tors" class="er-deriv-body" style="display:none">', h += `<p>Mismo proceso que axial pero con ${B("\\theta_x")} y ${B("GJ")}:</p>`, h += `<div class="er-eq">${T(`K_{torsion} = \\frac{GJ}{L}\\begin{bmatrix}1 & -1\\\\-1 & 1\\end{bmatrix} = \\frac{${ge(e.G)}\\times${ge(e.J)}}{${ge(e.L)}} = \\mathbf{${ge(Z)}}`)}</div>`, h += "</div></div>", h += '<div class="er-deriv-block">', h += '<div class="er-deriv-header" data-toggle="deriv-coup">\u{1F4D6} K[1,5] = 6EI<sub>z</sub>/L\xB2 \u2014 <i>acoplamiento corte-momento</i></div>', h += '<div id="er-deriv-coup" class="er-deriv-body" style="display:none">', h += `<p>Termino cruzado ${B("v_i \\cdot \\theta_{zi}")} (acoplamiento corte-momento):</p>`, h += `<div class="er-eq">${T("K[1,5] = \\frac{EI_z}{L^4} \\int_0^L H_1'' \\cdot H_2'' \\; dx")}</div>`, h += `<div class="er-eq">${T("= \\frac{EI_z}{L^4} \\int_0^L (-6+12\\xi) \\cdot L(-4+6\\xi) \\; dx")}</div>`, h += `<div class="er-eq">${T("= \\frac{EI_z}{L^3} \\int_0^L (24-36\\xi-48\\xi+72\\xi^2) \\; dx = \\frac{EI_z}{L^3} \\cdot 6L")}</div>`, h += `<div class="er-eq er-eq-main">${T(`K[1,5] = \\frac{6EI_z}{L^2} = \\mathbf{${ge(6 * e.E * e.Iz / e.L ** 2)}}`)}</div>`, h += "</div></div>", h += '<div class="er-subsec">Resumen de coeficientes:</div>', h += `<div class="er-eq">${T(`\\frac{EA}{L} = \\mathbf{${ge(G)}} \\qquad \\frac{12EI_z}{L^3} = \\mathbf{${ge(12 * ye)}} \\qquad \\frac{12EI_y}{L^3} = \\mathbf{${ge(12 * le)}}`)}</div>`, h += `<div class="er-eq">${T(`\\frac{GJ}{L} = \\mathbf{${ge(Z)}} \\qquad \\frac{4EI_y}{L} = \\mathbf{${ge(4 * e.E * e.Iy / e.L)}} \\qquad \\frac{4EI_z}{L} = \\mathbf{${ge(4 * e.E * e.Iz / e.L)}}`)}</div>`, h += `<div class="er-eq">${T(`\\frac{6EI_z}{L^2} = \\mathbf{${ge(6 * e.E * e.Iz / e.L ** 2)}} \\qquad \\frac{6EI_y}{L^2} = \\mathbf{${ge(6 * e.E * e.Iy / e.L ** 2)}}`)}</div>`, e.kLocal && (h += `<div class="er-subsec">Resultado: ${B("\\mathbf{K}_{local}")} (12x12)</div>`, h += hn(e.kLocal)), h += '<div class="er-section-title">6. Transformacion de coordenadas</div>', h += "<p>Los cosenos directores del eje del elemento:</p>", h += `<div class="er-eq">${T(`l = \\frac{x_j - x_i}{L} = ${qn(e.l)} \\qquad m = \\frac{y_j - y_i}{L} = ${qn(e.m)} \\qquad n = \\frac{z_j - z_i}{L} = ${qn(e.n)}`)}</div>`, h += `<div class="er-eq">${T(`D = \\sqrt{l^2 + m^2} = ${qn(e.D)}`)}</div>`, Math.abs(e.n) > 0.999) {
      h += `<p>Caso especial: elemento vertical (${B(`n \\approx ${e.n > 0 ? "+1" : "-1"}`)}):</p>`;
      const me = e.n > 0 ? "\\boldsymbol{\\lambda} = \\begin{bmatrix} 0 & 0 & 1 \\\\ 0 & 1 & 0 \\\\ -1 & 0 & 0 \\end{bmatrix}" : "\\boldsymbol{\\lambda} = \\begin{bmatrix} 0 & 0 & -1 \\\\ 0 & 1 & 0 \\\\ 1 & 0 & 0 \\end{bmatrix}";
      h += `<div class="er-eq">${T(me)}</div>`;
    } else h += `<div class="er-eq">${T("\\boldsymbol{\\lambda} = \\begin{bmatrix} l & m & n \\\\ -m/D & l/D & 0 \\\\ -ln/D & -mn/D & D \\end{bmatrix}")}</div>`;
    h += `<div class="er-eq er-eq-main">${T("\\mathbf{T} = \\mathbf{I}_4 \\otimes \\boldsymbol{\\lambda} \\quad \\text{(Kronecker product} \\rightarrow 12 \\times 12 \\text{ bloque-diagonal)}")}</div>`, h += `<div class="er-section-title">7. ${B("\\mathbf{K}_{global}")} = ${B("\\mathbf{T}^T \\cdot \\mathbf{K}_{local} \\cdot \\mathbf{T}")}</div>`, h += "<p>Transformar la rigidez local al sistema global de coordenadas:</p>", h += `<div class="er-eq er-eq-main">${T("\\mathbf{K}_{global} = \\mathbf{T}^T \\cdot \\mathbf{K}_{local} \\cdot \\mathbf{T}")}</div>`, e.kGlobal && (h += hn(e.kGlobal)), h += '<div class="er-section-title">8. Ensamblaje</div>';
    const R = e.elem[0] * 6, fe = e.elem[1] * 6;
    if (h += `<div class="er-eq">${T(`\\text{Nodo } ${e.elem[0]} \\rightarrow \\text{DOFs } [${R} \\ldots ${R + 5}]`)}</div>`, h += `<div class="er-eq">${T(`\\text{Nodo } ${e.elem[1]} \\rightarrow \\text{DOFs } [${fe} \\ldots ${fe + 5}]`)}</div>`, h += `<div class="er-eq">${T("\\mathbf{K}_{total}[\\text{DOFs}_i, \\text{DOFs}_j] \\mathrel{+}= \\mathbf{K}_{global}[i, j]")}</div>`, h += '<div class="er-section-title">9. Recuperacion de fuerzas internas</div>', h += `<div class="er-eq">${T("\\mathbf{u}_{local} = \\mathbf{T} \\cdot \\mathbf{u}_{global}")}</div>`, h += `<div class="er-eq er-eq-main">${T("\\mathbf{f}_{local} = \\mathbf{K}_{local} \\cdot \\mathbf{u}_{local}")}</div>`, e.fLocal.length > 0 && e.fLocal.some((me) => me !== 0)) {
      const me = [
        "N",
        "V<sub>y</sub>",
        "V<sub>z</sub>",
        "M<sub>x</sub>",
        "M<sub>y</sub>",
        "M<sub>z</sub>"
      ];
      h += '<table class="er-forces"><tr><th></th>';
      for (const I of me) h += `<th>${I}</th>`;
      h += `</tr><tr><td>i (${e.elem[0]})</td>`;
      for (let I = 0; I < 6; I++) h += `<td class="${Math.abs(e.fLocal[I]) > 1e-10 ? "nz" : ""}">${ge(e.fLocal[I], 3)}</td>`;
      h += `</tr><tr><td>j (${e.elem[1]})</td>`;
      for (let I = 6; I < 12; I++) h += `<td class="${Math.abs(e.fLocal[I]) > 1e-10 ? "nz" : ""}">${ge(e.fLocal[I], 3)}</td>`;
      h += "</tr></table>";
    }
    return h;
  }
  function pa(e) {
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
        for (let G = 0; G < 6; G++) {
          const ye = e.uGlobal[T * 6 + G];
          h += `<td class="${Math.abs(ye) > 1e-10 ? "nz" : ""}">${ge(ye, 6)}</td>`;
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
  function qn(e) {
    return Math.abs(e) < 1e-10 ? "0" : e.toFixed(4);
  }
  function hn(e) {
    var _a;
    const h = e.length, B = Math.min(h, 12);
    let T = '<div style="overflow-x:auto"><table class="er-matrix">';
    for (let G = 0; G < B; G++) {
      T += "<tr>";
      for (let ye = 0; ye < B; ye++) {
        const le = ((_a = e[G]) == null ? void 0 : _a[ye]) ?? 0, Z = Math.abs(le) < 1e-10;
        T += `<td class="${Z ? "z" : ""} ${G === ye && !Z ? "diag" : ""}">${Z ? "0" : fa(le)}</td>`;
      }
      T += "</tr>";
    }
    return T += "</table>", h > B && (T += `<div style="color:var(--fem-label);font-size:9px">(${B}\xD7${B} de ${h}\xD7${h})</div>`), T += "</div>", T;
  }
  function fa(e) {
    return Math.abs(e) >= 1e6 || Math.abs(e) < 0.01 && e !== 0 ? e.toExponential(1) : Math.abs(e) >= 100 ? e.toFixed(0) : e.toFixed(2);
  }
  function po(e) {
    const h = e.getContext("2d");
    if (!h) return;
    const B = e.width, T = e.height, G = 30, ye = B - 2 * G, le = (T - 3 * G) / 2;
    h.fillStyle = getComputedStyle(document.body).getPropertyValue("--fem-bg").trim() || "#111", h.fillRect(0, 0, B, T);
    const Z = (R, fe, me) => {
      h.strokeStyle = "#333", h.lineWidth = 1, h.strokeRect(G, R, ye, le), h.strokeStyle = "#444", h.beginPath(), h.moveTo(G, R + le / 2), h.lineTo(G + ye, R + le / 2), h.stroke(), h.fillStyle = "#888", h.font = "11px sans-serif", h.fillText(fe, G + 4, R + 14);
      for (const ee of me) {
        h.strokeStyle = ee.color, h.lineWidth = 2.5, h.beginPath();
        for (let he = 0; he <= 100; he++) {
          const Ze = he / 100, ne = G + Ze * ye, se = R + le / 2 - ee.fn(Ze) * (le / 2 * 0.85);
          he === 0 ? h.moveTo(ne, se) : h.lineTo(ne, se);
        }
        h.stroke();
      }
      let I = G + ye - 90;
      for (const ee of me) h.fillStyle = ee.color, h.font = "bold 10px sans-serif", h.fillText(ee.label, I, R + le - 6), I += 36;
      h.fillStyle = "#666", h.font = "9px monospace", h.fillText("0", G, R + le + 12), h.fillText("1", G + ye - 6, R + le + 12), h.fillText("\u03BE", G + ye / 2, R + le + 12);
    };
    Z(G, "Axial (lineal)", [
      {
        fn: (R) => 1 - R,
        color: "#ff6600",
        label: "N\u2081"
      },
      {
        fn: (R) => R,
        color: "#00ccff",
        label: "N\u2082"
      }
    ]), Z(G + le + G, "Flexi\xF3n (Hermite c\xFAbicos)", [
      {
        fn: (R) => 1 - 3 * R * R + 2 * R * R * R,
        color: "#ff6600",
        label: "H\u2081"
      },
      {
        fn: (R) => R * (1 - R) * (1 - R),
        color: "#ffcc00",
        label: "H\u2082"
      },
      {
        fn: (R) => 3 * R * R - 2 * R * R * R,
        color: "#00ccff",
        label: "H\u2083"
      },
      {
        fn: (R) => R * R * (R - 1),
        color: "#00ff66",
        label: "H\u2084"
      }
    ]);
  }
  let ua;
  ua = `<style>
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
</style>`;
  is = rn.state(false);
  ya = function(e) {
    e.nodeInputs || (e.nodeInputs = rn.state({})), e.elementInputs || (e.elementInputs = rn.state({})), e.deformOutputs || (e.deformOutputs = rn.state({})), e.analyzeOutputs || (e.analyzeOutputs = rn.state({}));
    let h = "tonf", B = "m", T = Kt(h, B), G = {
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
    }, le = /* @__PURE__ */ new Set(), Z = /* @__PURE__ */ new Set();
    let R = false;
    const fe = /* @__PURE__ */ new Set(), me = /* @__PURE__ */ new Map();
    let I = "", ee = {}, he = null, Ze = "", ne = [], se = [], ve = /* @__PURE__ */ new Set(), Se = /* @__PURE__ */ new Set(), Fe = /* @__PURE__ */ new Set(), Pe = /* @__PURE__ */ new Map(), Ve = /* @__PURE__ */ new Map(), Ce = [], rt = 0.2, Je = 2, nt = 2, ot = false, Qe = 2, xt = "x", Dt = /* @__PURE__ */ new Set(), gt = true, ht = 0.15, dn = 2, pn = 2, Pn = /* @__PURE__ */ new Set();
    const Zt = () => ({
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
    }), cs = (t, n) => ({
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
      }, Zt),
      vigasY: Array.from({
        length: n
      }, Zt)
    }), xe = {
      colMat: 0,
      vigaMat: 0,
      colShape: 0,
      fc: 20594,
      steelColType: 0,
      steelVigaType: 0,
      perFloor: []
    };
    let st = 0, ft = 3, ut = false, et = 0, je = null, Tt = 0, St = [], vn = 1, yn = true;
    const fn = na();
    fn.div.style.display = "none";
    function _n() {
      const t = zn()[I];
      return t && t[st] ? t[st].dofs : [
        true,
        true,
        true,
        true,
        true,
        true
      ];
    }
    let Ft = [], Pt = [], Ge = null;
    function mo() {
      if (!Ge) return;
      const t = _e();
      t && t.scene.remove(Ge), Ge.traverse((n) => {
        if (n.geometry && n.geometry.dispose(), n.material) {
          const o = n.material;
          o.map && o.map.dispose(), o.dispose();
        }
      }), Ge = null;
    }
    function bo(t, n, o, l, s) {
      mo();
      const i = _e();
      if (!i) return;
      Ge = new ss(), Ge.name = "gridAxes";
      const r = Math.min(...t), c = Math.max(...t), u = Math.min(...n), d = Math.max(...n), a = c - r || 1, m = d - u || 1, $ = Math.max(a, m), y = $ * 0.08, g = t.map((b, f) => String.fromCharCode(65 + f)), p = n.map((b, f) => String(f + 1)), x = $ * 0.018, w = n.length <= 1, z = 8947848;
      for (let b = 0; b < t.length; b++) {
        const f = t[b];
        if (w) {
          const v = -y - x * 1.5;
          Hn(f, 0, 0, f, 0, v + x, z, Ge), Nn(g[b] || `${b}`, f, 0, v, x, Ge);
        } else {
          const v = u - y - x * 1.5;
          Hn(f, u, 0, f, v + x, 0, z, Ge), Nn(g[b] || `${b}`, f, v, 0, x, Ge);
        }
      }
      if (!w) for (let b = 0; b < n.length; b++) {
        const f = n[b], v = r - y - x * 1.5;
        Hn(r, f, 0, v + x, f, 0, z, Ge), Nn(p[b] || `${b}`, v, f, 0, x, Ge);
      }
      const S = x * 1.8, H = y * 1.2, _ = y * 1.2;
      for (let b = 0; b < t.length - 1; b++) {
        const f = t[b], v = t[b + 1], M = Math.abs(v - f), L = (f + v) / 2, N = `${M.toFixed(2)} m`;
        w ? (Cn(N, L, 0, -H, S, Ge), An(f, 0, -H * 0.7, v, 0, -H * 0.7, 16763904, Ge)) : (Cn(N, L, u - _, 0, S, Ge), An(f, u - _ * 0.7, 0, v, u - _ * 0.7, 0, 16763904, Ge));
      }
      if (!w) for (let b = 0; b < n.length - 1; b++) {
        const f = n[b], v = n[b + 1], M = Math.abs(v - f), L = (f + v) / 2, N = `${M.toFixed(2)} m`;
        Cn(N, r - H, L, 0, S, Ge), An(r - H * 0.7, f, 0, r - H * 0.7, v, 0, 16763904, Ge);
      }
      Ge.traverse((b) => {
        b.material && (Array.isArray(b.material) ? b.material.forEach((f) => {
          f.clippingPlanes = [];
        }) : b.material.clippingPlanes = []);
      }), i.scene.add(Ge), i.render();
    }
    function Cn(t, n, o, l, s, i) {
      const r = document.createElement("canvas"), c = 256, u = 64;
      r.width = c, r.height = u;
      const d = r.getContext("2d");
      d.fillStyle = "rgba(0,0,0,0.75)";
      const a = 8;
      d.beginPath(), d.moveTo(a, 0), d.lineTo(c - a, 0), d.quadraticCurveTo(c, 0, c, a), d.lineTo(c, u - a), d.quadraticCurveTo(c, u, c - a, u), d.lineTo(a, u), d.quadraticCurveTo(0, u, 0, u - a), d.lineTo(0, a), d.quadraticCurveTo(0, 0, a, 0), d.closePath(), d.fill(), d.fillStyle = "#ffcc00", d.font = "bold 36px monospace", d.textAlign = "center", d.textBaseline = "middle", d.fillText(t, c / 2, u / 2);
      const m = new Us(r);
      m.minFilter = Zs;
      const $ = new ro({
        map: m,
        transparent: true,
        depthTest: false
      }), y = new lo($);
      y.position.set(n, o, l);
      const g = c / u;
      y.scale.set(s * g, s, 1), y.renderOrder = 999, i.add(y);
    }
    function An(t, n, o, l, s, i, r, c) {
      const u = [
        new ue(t, n, o),
        new ue(l, s, i)
      ], d = new Gt().setFromPoints(u), a = new xn({
        color: r,
        transparent: true,
        opacity: 0.6,
        depthTest: false
      }), m = new ao(d, a);
      m.renderOrder = 998, c.add(m);
    }
    function Hn(t, n, o, l, s, i, r, c) {
      const u = new Gt().setFromPoints([
        new ue(t, n, o),
        new ue(l, s, i)
      ]), d = new os({
        color: r,
        dashSize: 0.15 * Math.max(Math.abs(l - t), Math.abs(s - n), Math.abs(i - o), 0.1),
        gapSize: 0.1 * Math.max(Math.abs(l - t), Math.abs(s - n), Math.abs(i - o), 0.1),
        transparent: true,
        opacity: 0.6
      }), a = new ao(u, d);
      a.computeLineDistances(), c.add(a);
    }
    function Nn(t, n, o, l, s, i) {
      const r = document.createElement("canvas"), c = 128;
      r.width = c, r.height = c;
      const u = r.getContext("2d");
      u.beginPath(), u.arc(c / 2, c / 2, c * 0.42, 0, Math.PI * 2), u.fillStyle = "rgba(255,255,255,0.9)", u.fill(), u.lineWidth = c * 0.04, u.strokeStyle = "#555", u.stroke(), u.fillStyle = "#222", u.font = `bold ${c * 0.45}px Arial`, u.textAlign = "center", u.textBaseline = "middle", u.fillText(t, c / 2, c / 2 + c * 0.02);
      const d = new as(r);
      d.needsUpdate = true;
      const a = new ro({
        map: d,
        depthTest: false,
        transparent: true
      }), m = new lo(a);
      m.position.set(n, o, l);
      const $ = s * 2;
      m.scale.set($, $, 1), m.renderOrder = 100, i.add(m);
    }
    const ze = {
      addNode(t, n, o) {
        const l = [
          ...e.nodes.val
        ], s = l.length;
        return l.push([
          t,
          n,
          o
        ]), e.nodes.val = l, console.log(`Node ${s} at (${t}, ${n}, ${o})`), Le(), s;
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
          const i = l > t ? l - 1 : l, r = s > t ? s - 1 : s;
          return l === t || s === t ? null : [
            i,
            r
          ];
        }).filter((l) => l !== null);
        e.nodes.val = n, e.elements.val = o, console.log(`Node ${t} removed`), Le();
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
        ]), e.elements.val = o, console.log(`Element ${l}: node ${t} -> node ${n}`), Le(), l;
      },
      removeFrame(t) {
        const n = [
          ...e.elements.val
        ];
        if (t < 0 || t >= n.length) {
          console.error(`Element ${t} not found`);
          return;
        }
        n.splice(t, 1), e.elements.val = n, console.log(`Element ${t} removed`), Le();
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
        ]), o.supports = l, e.nodeInputs.val = o, console.log(`Support added at node ${t}`), Le();
      },
      removeSupport(t) {
        if (!e.nodeInputs) return;
        const n = {
          ...e.nodeInputs.val
        }, o = new Map(n.supports || []);
        o.delete(t), n.supports = o, e.nodeInputs.val = n, console.log(`Support removed from node ${t}`), Le();
      },
      addLoad(t, n) {
        if (!e.nodeInputs) return;
        const o = {
          ...e.nodeInputs.val
        }, l = new Map(o.loads || []);
        l.set(t, n), o.loads = l, e.nodeInputs.val = o, console.log(`Load added at node ${t}: [${n.join(", ")}]`), Le();
      },
      removeLoad(t) {
        if (!e.nodeInputs) return;
        const n = {
          ...e.nodeInputs.val
        }, o = new Map(n.loads || []);
        o.delete(t), n.loads = o, e.nodeInputs.val = n, console.log(`Load removed from node ${t}`), Le();
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
        var _a, _b, _c, _d, _e2, _f;
        const t = e.nodes.val.length, n = e.elements.val.length, o = ((_c = (_b = (_a = e.nodeInputs) == null ? void 0 : _a.val) == null ? void 0 : _b.supports) == null ? void 0 : _c.size) || 0, l = ((_f = (_e2 = (_d = e.nodeInputs) == null ? void 0 : _d.val) == null ? void 0 : _e2.loads) == null ? void 0 : _f.size) || 0;
        return console.log(`Model: ${t} nodes, ${n} elements, ${o} supports, ${l} loads`), {
          nodes: t,
          elements: n,
          supports: o,
          loads: l
        };
      },
      clear() {
        e.nodes.val = [], e.elements.val = [], e.nodeInputs && (e.nodeInputs.val = {}), e.elementInputs && (e.elementInputs.val = {}), ve = /* @__PURE__ */ new Set(), Se = /* @__PURE__ */ new Set(), Pe = /* @__PURE__ */ new Map(), Ve = /* @__PURE__ */ new Map(), Ft = [], Pt = [], mo();
        const t = re.querySelector("#cad3d-axis-buttons");
        t && (t.style.display = "none", t.innerHTML = ""), console.log("Model cleared"), Le();
      },
      frame(t, n, o = 0, l = 0) {
        ze.clear();
        const s = [];
        o > 0 && s.push(-o);
        let i = 0;
        s.push(i);
        for (const g of t) i += g, s.push(i);
        l > 0 && s.push(i + l);
        const r = [
          0
        ];
        let c = 0;
        for (const g of n) c += g, r.push(c);
        const u = (g) => o > 0 && g === 0 || l > 0 && g === s.length - 1, d = {}, a = [];
        for (let g = 0; g < r.length; g++) for (let p = 0; p < s.length; p++) g === 0 && u(p) || (d[`${p},${g}`] = a.length, a.push([
          s[p],
          0,
          r[g]
        ]));
        const m = [];
        ve = /* @__PURE__ */ new Set(), Se = /* @__PURE__ */ new Set();
        for (let g = 0; g < r.length - 1; g++) for (let p = 0; p < s.length; p++) u(p) || (ve.add(m.length), m.push([
          d[`${p},${g}`],
          d[`${p},${g + 1}`]
        ]));
        for (let g = 1; g < r.length; g++) for (let p = 0; p < s.length - 1; p++) Se.add(m.length), m.push([
          d[`${p},${g}`],
          d[`${p + 1},${g}`]
        ]);
        const $ = /* @__PURE__ */ new Map(), y = _n();
        for (let g = 0; g < s.length; g++) {
          if (u(g)) continue;
          const p = `${g},0`;
          d[p] !== void 0 && $.set(d[p], [
            ...y
          ]);
        }
        return e.nodes.val = a, e.elements.val = m, e.nodeInputs && (e.nodeInputs.val = {
          supports: $
        }), Ft = [
          ...s
        ], Pt = [
          0
        ], setTimeout(() => {
          Xe(), bo(s, [
            0
          ]), Ao(), Ho();
        }, 50), Le(), {
          nodes: a.length,
          elements: m.length
        };
      },
      building(t, n, o, l = 3, s = 0, i = 0, r = 0, c = 0, u = 1) {
        ze.clear();
        const d = [];
        s > 0 && d.push(-s), d.push(0);
        for (const f of t) d.push(d[d.length - 1] + f);
        i > 0 && d.push(d[d.length - 1] + i);
        const a = [];
        r > 0 && a.push(-r), a.push(0);
        for (const f of n) a.push(a[a.length - 1] + f);
        c > 0 && a.push(a[a.length - 1] + c);
        const m = [
          0
        ];
        for (const f of o) m.push(m[m.length - 1] + f);
        const $ = (f) => s > 0 && f === 0 || i > 0 && f === d.length - 1, y = (f) => r > 0 && f === 0 || c > 0 && f === a.length - 1, g = (f, v) => $(f) || y(v), p = [], x = {};
        for (let f = 0; f < m.length; f++) for (let v = 0; v < a.length; v++) for (let M = 0; M < d.length; M++) f === 0 && g(M, v) || (x[`${M},${v},${f}`] = p.length, p.push([
          d[M],
          a[v],
          m[f]
        ]));
        const w = p.length, z = [];
        ve = /* @__PURE__ */ new Set(), Se = /* @__PURE__ */ new Set(), Pe = /* @__PURE__ */ new Map();
        const S = [];
        for (let f = 0; f < m.length - 1; f++) for (let v = 0; v < a.length; v++) for (let M = 0; M < d.length; M++) g(M, v) || S.push({
          el: [
            x[`${M},${v},${f}`],
            x[`${M},${v},${f + 1}`]
          ],
          floor: f
        });
        for (const { el: [f, v], floor: M } of S) {
          if (u <= 1) {
            ve.add(z.length), Pe.set(z.length, M), z.push([
              f,
              v
            ]);
            continue;
          }
          const L = p[f], N = p[v];
          let q = f;
          for (let E = 1; E < u; E++) {
            const P = E / u, C = p.length;
            p.push([
              L[0] + (N[0] - L[0]) * P,
              L[1] + (N[1] - L[1]) * P,
              L[2] + (N[2] - L[2]) * P
            ]), ve.add(z.length), Pe.set(z.length, M), z.push([
              q,
              C
            ]), q = C;
          }
          ve.add(z.length), Pe.set(z.length, M), z.push([
            q,
            v
          ]);
        }
        Ve = /* @__PURE__ */ new Map();
        const H = [];
        for (let f = 1; f < m.length; f++) for (let v = 0; v < a.length; v++) for (let M = 0; M < d.length - 1; M++) H.push({
          el: [
            x[`${M},${v},${f}`],
            x[`${M + 1},${v},${f}`]
          ],
          floor: f - 1,
          dir: "x",
          bay: M
        });
        for (let f = 1; f < m.length; f++) for (let v = 0; v < d.length; v++) for (let M = 0; M < a.length - 1; M++) H.push({
          el: [
            x[`${v},${M},${f}`],
            x[`${v},${M + 1},${f}`]
          ],
          floor: f - 1,
          dir: "y",
          bay: M
        });
        for (const { el: [f, v], floor: M, dir: L, bay: N } of H) {
          const q = p[f], E = p[v];
          let P = f;
          for (let J = 1; J < l; J++) {
            const V = J / l, U = p.length;
            p.push([
              q[0] + (E[0] - q[0]) * V,
              q[1] + (E[1] - q[1]) * V,
              q[2] + (E[2] - q[2]) * V
            ]);
            const W = z.length;
            Se.add(W), Pe.set(W, M), Ve.set(W, {
              dir: L,
              bay: N
            }), z.push([
              P,
              U
            ]), P = U;
          }
          const C = z.length;
          Se.add(C), Pe.set(C, M), Ve.set(C, {
            dir: L,
            bay: N
          }), z.push([
            P,
            v
          ]);
        }
        if (Dt = /* @__PURE__ */ new Set(), ot && Qe > 0) {
          const f = (v, M, L) => {
            for (let q = 0; q < p.length; q++) if (Math.abs(p[q][0] - v) < 1e-6 && Math.abs(p[q][1] - M) < 1e-6 && Math.abs(p[q][2] - L) < 1e-6) return q;
            const N = p.length;
            return p.push([
              v,
              M,
              L
            ]), N;
          };
          for (let v = 1; v < m.length; v++) if (xt === "x") for (let M = 0; M < a.length - 1; M++) {
            const L = a[M], N = a[M + 1];
            for (let q = 1; q <= Qe; q++) {
              const E = L + q / (Qe + 1) * (N - L), P = [];
              for (let C = 0; C < d.length; C++) P.push(f(d[C], E, m[v]));
              for (let C = 0; C < d.length - 1; C++) {
                const J = z.length;
                Dt.add(J), Se.add(J), Pe.set(J, v - 1), Ve.set(J, {
                  dir: "x",
                  bay: C
                }), z.push([
                  P[C],
                  P[C + 1]
                ]);
              }
            }
          }
          else for (let M = 0; M < d.length - 1; M++) {
            const L = d[M], N = d[M + 1];
            for (let q = 1; q <= Qe; q++) {
              const E = L + q / (Qe + 1) * (N - L), P = [];
              for (let C = 0; C < a.length; C++) P.push(f(E, a[C], m[v]));
              for (let C = 0; C < a.length - 1; C++) {
                const J = z.length;
                Dt.add(J), Se.add(J), Pe.set(J, v - 1), Ve.set(J, {
                  dir: "y",
                  bay: C
                }), z.push([
                  P[C],
                  P[C + 1]
                ]);
              }
            }
          }
        }
        const _ = /* @__PURE__ */ new Map(), b = _n();
        for (let f = 0; f < a.length; f++) for (let v = 0; v < d.length; v++) g(v, f) || _.set(x[`${v},${f},0`], [
          ...b
        ]);
        Fe = /* @__PURE__ */ new Set();
        for (const f of Ce) {
          const v = m.length - 1, M = f.floors.includes(-1) ? Array.from({
            length: v
          }, (L, N) => N) : f.floors.filter((L) => L < v);
          for (const L of M) {
            let N, q, E, P;
            f.dir === "x" ? (N = f.bay, E = f.bay + 1, q = f.axisIdx, P = f.axisIdx) : (N = f.axisIdx, E = f.axisIdx, q = f.bay, P = f.bay + 1);
            const C = x[`${N},${q},${L}`], J = x[`${N},${q},${L + 1}`];
            let V, U;
            if (f.dir === "x" ? (V = x[`${E},${P},${L}`], U = x[`${E},${P},${L + 1}`]) : (V = x[`${E},${P},${L}`], U = x[`${E},${P},${L + 1}`]), C === void 0 || V === void 0 || J === void 0 || U === void 0) continue;
            const W = nt, D = Je, X = p[C], ce = p[V], Me = p[J], $e = p[U], K = [];
            for (let ae = 0; ae <= D; ae++) {
              const de = [], Q = ae / D;
              for (let be = 0; be <= W; be++) {
                const we = be / W, Te = (1 - Q) * ((1 - we) * X[0] + we * ce[0]) + Q * ((1 - we) * Me[0] + we * $e[0]), Y = (1 - Q) * ((1 - we) * X[1] + we * ce[1]) + Q * ((1 - we) * Me[1] + we * $e[1]), pe = (1 - Q) * ((1 - we) * X[2] + we * ce[2]) + Q * ((1 - we) * Me[2] + we * $e[2]);
                ae === 0 && be === 0 ? de.push(C) : ae === 0 && be === W ? de.push(V) : ae === D && be === 0 ? de.push(J) : ae === D && be === W ? de.push(U) : (de.push(p.length), p.push([
                  Te,
                  Y,
                  pe
                ]));
              }
              K.push(de);
            }
            for (let ae = 0; ae < D; ae++) for (let de = 0; de < W; de++) {
              const Q = K[ae][de], be = K[ae][de + 1], we = K[ae + 1][de + 1], Te = K[ae + 1][de], Y = z.length;
              Fe.add(Y), Pe.set(Y, L), z.push([
                Q,
                be,
                we,
                Te
              ]);
            }
            if (L === 0) for (let ae = 0; ae <= W; ae++) {
              const de = K[0][ae];
              de >= w && _.set(de, [
                ...b
              ]);
            }
          }
        }
        if (Pn = /* @__PURE__ */ new Set(), gt) {
          const f = l, v = l, M = /* @__PURE__ */ new Map(), L = (N, q, E) => `${Math.round(N * 1e4)},${Math.round(q * 1e4)},${Math.round(E * 1e4)}`;
          for (let N = 0; N < p.length; N++) M.set(L(p[N][0], p[N][1], p[N][2]), N);
          for (let N = 1; N < m.length; N++) {
            const q = m[N];
            for (let E = 0; E < d.length - 1; E++) for (let P = 0; P < a.length - 1; P++) {
              const C = d[E], J = d[E + 1], V = a[P], U = a[P + 1], W = [];
              for (let D = 0; D <= v; D++) {
                const X = [];
                for (let ce = 0; ce <= f; ce++) {
                  const Me = C + ce / f * (J - C), $e = V + D / v * (U - V);
                  if (D === 0 && ce === 0) X.push(x[`${E},${P},${N}`]);
                  else if (D === 0 && ce === f) X.push(x[`${E + 1},${P},${N}`]);
                  else if (D === v && ce === 0) X.push(x[`${E},${P + 1},${N}`]);
                  else if (D === v && ce === f) X.push(x[`${E + 1},${P + 1},${N}`]);
                  else {
                    const K = L(Me, $e, q), ae = M.get(K);
                    if (ae !== void 0) X.push(ae);
                    else {
                      const de = p.length;
                      p.push([
                        Me,
                        $e,
                        q
                      ]), M.set(K, de), X.push(de);
                    }
                  }
                }
                W.push(X);
              }
              for (let D = 0; D < v; D++) for (let X = 0; X < f; X++) {
                const ce = W[D][X], Me = W[D][X + 1], $e = W[D + 1][X + 1], K = W[D + 1][X], ae = z.length;
                Pn.add(ae), Pe.set(ae, N - 1), z.push([
                  ce,
                  Me,
                  $e,
                  K
                ]);
              }
            }
          }
        }
        return e.nodes.val = p, e.elements.val = z, e.nodeInputs && (e.nodeInputs.val = {
          supports: _
        }), Ft = [
          ...d
        ], Pt = [
          ...a
        ], setTimeout(() => {
          Xe(), bo(d, a), Ao(), Ho();
        }, 50), Le(), {
          nodes: p.length,
          elements: z.length,
          nJointNodes: w
        };
      },
      galpon(t = 12, n = 20, o = 6, l = 3, s = 8, i = 4) {
        ze.clear();
        const r = [], c = [], u = (y) => o + l * (1 - Math.pow(2 * y / t - 1, 2)), d = [], a = i + 1;
        for (let y = 0; y < a; y++) {
          const g = [], p = n / i * y;
          g.push(r.length), r.push([
            0,
            p,
            0
          ]), g.push(r.length), r.push([
            t,
            p,
            0
          ]), g.push(r.length), r.push([
            0,
            p,
            o
          ]);
          for (let x = 1; x < s; x++) {
            const w = t / s * x;
            g.push(r.length), r.push([
              w,
              p,
              u(w)
            ]);
          }
          g.push(r.length), r.push([
            t,
            p,
            o
          ]), d.push(g);
        }
        for (let y = 0; y < a; y++) {
          const g = d[y];
          c.push([
            g[0],
            g[2]
          ]), c.push([
            g[1],
            g[g.length - 1]
          ]);
          for (let p = 2; p < g.length - 1; p++) c.push([
            g[p],
            g[p + 1]
          ]);
        }
        for (let y = 0; y < i; y++) for (let g = 2; g < d[0].length; g++) c.push([
          d[y][g],
          d[y + 1][g]
        ]);
        for (let y = 0; y < i; y++) for (let g = 2; g < d[0].length - 1; g += 2) c.push([
          d[y][g],
          d[y + 1][g + 1]
        ]);
        const m = /* @__PURE__ */ new Map(), $ = _n();
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
            ze.clear(), Ee("truss"), ho();
            break;
          }
          case "beams": {
            ze.clear(), Ee("beams"), vo();
            break;
          }
          case "3d":
          case "3d-structure":
          case "torre": {
            ze.clear(), Ee("3d"), yo();
            break;
          }
          case "portico": {
            Ee("frame"), oe();
            break;
          }
          case "edificio": {
            Ee("edificio"), xe.colMat = 0, xe.vigaMat = 0, xe.colShape = 0, Ce = [], gt = false, ot = false, oe();
            break;
          }
          case "edif-acero":
          case "edificio-acero": {
            Ee("edificio"), xe.colMat = 1, xe.vigaMat = 1, xe.steelColType = 0, xe.steelVigaType = 0, Ce = [], ot = true, Qe = 2;
            const n = ne.reduce((l, s) => l + s, 0) / ne.length, o = se.reduce((l, s) => l + s, 0) / se.length;
            xt = n >= o ? "y" : "x", gt = true, ht = 0.08, oe();
            break;
          }
          case "edif-muros":
          case "edificio-muros": {
            Ee("edificio"), xe.colMat = 0, xe.vigaMat = 0, xe.colShape = 0, ot = false;
            const n = Math.round(((_a = ee.nVanosX) == null ? void 0 : _a.val) ?? 2), o = Math.round(((_b = ee.nVanosY) == null ? void 0 : _b.val) ?? 2);
            Ce = [
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
            ], gt = true, ht = 0.15, oe();
            break;
          }
          case "edif-mixto":
          case "edificio-mixto": {
            Ee("edificio"), xe.colMat = 2, xe.vigaMat = 0, ot = false;
            const n = Math.round(((_c = ee.nVanosX) == null ? void 0 : _c.val) ?? 2), o = Math.round(((_d = ee.nVanosY) == null ? void 0 : _d.val) ?? 2);
            Ce = [
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
            ], gt = true, ht = 0.12, oe();
            break;
          }
          case "mezanine":
          case "mezzanine": {
            Ee("edificio"), ee.nPisos && (ee.nPisos.val = 1), ee.hPiso && (ee.hPiso.val = 4.5), ee.nVanosX && (ee.nVanosX.val = 3), ee.nVanosY && (ee.nVanosY.val = 2), ee.nSubViga && (ee.nSubViga.val = 3), ne = [
              6,
              6,
              6
            ], se = [
              5,
              5
            ], xe.colMat = 1, xe.vigaMat = 1, xe.steelColType = 0, xe.steelVigaType = 0, Ce = [], ot = true, Qe = 2, xt = ne[0] >= se[0] ? "y" : "x", gt = true, ht = 0.08, dn = 3, pn = 3, oe();
            break;
          }
          case "galpon": {
            Ee("galpon"), oe();
            break;
          }
          case "barra": {
            Ee("barra"), oe();
            break;
          }
          case "placa3q":
          case "plate3q":
          case "placa-3q": {
            ze.clear(), Ee("placa-3q"), $o();
            break;
          }
          case "placa":
          case "plate":
          case "plate-q4":
          case "placa-q4": {
            ze.clear(), Ee("placa-q4"), wo();
            break;
          }
          case "losa-rect":
          case "rectangular-slab": {
            ze.clear(), Ee("losa-rect"), Mo();
            break;
          }
          case "losa-plana":
          case "flat-slab": {
            ze.clear(), Ee("losa-plana"), ko();
            break;
          }
          case "viga-alta":
          case "deep-beam": {
            ze.clear(), Ee("viga-alta"), So();
            break;
          }
          case "muro-contencion":
          case "retaining-wall": {
            ze.clear(), Ee("muro-contencion"), zo();
            break;
          }
          case "zapata":
          case "footing": {
            ze.clear(), Ee("zapata"), Io();
            break;
          }
          case "placa-orificios":
          case "plate-holes":
          case "placa-base": {
            ze.clear(), Ee("placa-orificios"), Eo();
            break;
          }
          case "col-placa":
          case "columna-placa": {
            ze.clear(), Ee("col-placa"), Lo();
            break;
          }
          case "talud":
          case "slope": {
            ze.clear(), Ee("talud"), qo();
            break;
          }
          case "eiffel":
          case "torre-eiffel": {
            ze.clear(), Ee("eiffel"), Go();
            break;
          }
          case "arco":
          case "arco-gateway": {
            ze.clear(), Ee("arco"), Vo();
            break;
          }
          case "puente":
          case "puente-colgante": {
            ze.clear(), Ee("puente"), Xo();
            break;
          }
          case "twisted":
          case "torre-twisted":
          case "turning-torso": {
            ze.clear(), Ee("twisted"), Ko();
            break;
          }
          case "burj":
          case "burj-khalifa": {
            ze.clear(), Ee("burj"), Uo();
            break;
          }
          case "opera":
          case "sydney-opera": {
            ze.clear(), Ee("opera"), Zo();
            break;
          }
          case "diagrid":
          case "gherkin": {
            ze.clear(), Ee("diagrid"), Qo();
            break;
          }
          default:
            console.error(`Ejemplo desconocido: "${t}".`);
        }
      },
      plateQ4(t = 10, n = 10, o = 16, l = 16, s = "simply-supported", i = -10, r = 0.2, c = 3e7, u = 0.3, d = 0) {
        console.log(`Plate Q4 [${[
          "Mindlin (gruesa)",
          "Kirchhoff (delgada)",
          "Membrane"
        ][d]}]: ${t}\xD7${n}, ${o}\xD7${l} elem, BC=${s}, q=${i}, t=${r}`);
        const m = performance.now(), $ = so({
          E: c,
          nu: u,
          thickness: r,
          meshLx: t,
          meshLy: n,
          meshNx: o,
          meshNy: l,
          bcType: s,
          pressure: i,
          theoryType: d
        }), y = performance.now() - m;
        console.log(`Solved in ${y.toFixed(1)} ms`), console.log(`w_max = ${$.maxW.toExponential(6)}`), console.log(`w_center = ${($.centerW ?? 0).toExponential(6)}`), console.log(`Mxx_max = ${$.maxMxx.toExponential(4)}, Myy_max = ${$.maxMyy.toExponential(4)}`), console.log(`Mxy_max = ${$.maxMxy.toExponential(4)}`), console.log(`Qx_max = ${$.maxQx.toExponential(4)}, Qy_max = ${$.maxQy.toExponential(4)}`);
        const g = $.nodeResults.map((S) => [
          S.x,
          S.y,
          0
        ]), p = $.elementResults.map((S) => [
          ...S.nodes
        ]);
        e.nodes.val = g, e.elements.val = p;
        const x = /* @__PURE__ */ new Map();
        $.nodeResults.forEach((S, H) => {
          x.set(H, [
            0,
            0,
            S.w,
            S.bx,
            S.by,
            0
          ]);
        }), e.deformOutputs && (e.deformOutputs.val = {
          deformations: x
        });
        const w = /* @__PURE__ */ new Map();
        $.nodeResults.forEach((S, H) => {
          (S.x < 1e-10 || S.x > t - 1e-10 || S.y < 1e-10 || S.y > n - 1e-10) && w.set(H, [
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
          const S = i * t * n / g.length;
          g.forEach((H, _) => {
            w.has(_) || z.set(_, [
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
          const S = /* @__PURE__ */ new Map(), H = /* @__PURE__ */ new Map(), _ = /* @__PURE__ */ new Map();
          $.elementResults.forEach((b, f) => {
            S.set(f, [
              b.Mxx,
              b.Mxx,
              b.Mxx
            ]), H.set(f, [
              b.Myy,
              b.Myy,
              b.Myy
            ]), _.set(f, [
              b.Mxy,
              b.Mxy,
              b.Mxy
            ]);
          }), e.analyzeOutputs.val = {
            bendingXX: S,
            bendingYY: H,
            bendingXY: _
          };
        }
        return setTimeout(() => Xe(), 50), Le(), $;
      },
      set(t, n) {
        ee[t] ? (ee[t].val = n, console.log(`${t} = ${n}`), yt(), oe()) : qe[t] ? (qe[t].val = n, console.log(`${t} = ${n}`), yt(), oe()) : console.error(`Par\xE1metro "${t}" no encontrado. Disponibles: ${Object.keys({
          ...ee,
          ...qe
        }).join(", ")}`);
      },
      get(t) {
        if (!t) {
          const n = {};
          for (const l in ee) n[l] = ee[l].val;
          for (const l in qe) n[l] = qe[l].val;
          n.plateTheory = ft, n.supportType = st;
          const o = zn()[I];
          return o && o[st] && (n.supportLabel = o[st].label), console.table(n), n;
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
        }[t.toLowerCase()] || 3), ft = t, console.log(`Teor\xEDa de placa: ${{
          1: "Membrana",
          2: "Kirchhoff (delgada)",
          3: "Mindlin (gruesa)"
        }[ft] || ft}`), I.includes("placa") && (yt(), oe());
      },
      setBc(t) {
        const n = zn()[I];
        if (!n || n.length === 0) {
          console.error("No support options for current generator");
          return;
        }
        if (typeof t == "string") {
          const o = n.findIndex((l) => l.label.toLowerCase().includes(t.toLowerCase()));
          t = o >= 0 ? o : 0;
        }
        st = t, st >= n.length && (st = 0), console.log(`Apoyo: ${n[st].label} \u2192 DOFs: [${n[st].dofs.map((o) => o ? "1" : "0").join(",")}]`), yt(), oe();
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
        t && (h = t), n && (B = n), T = Kt(h, B);
        const o = re.querySelector("#cad3d-force-unit"), l = re.querySelector("#cad3d-length-unit");
        return o && (o.textContent = h), l && (l.textContent = B), I && Ee(I), console.log(`Unidades: ${T.label} | E=${T.E.toExponential(3)} ${T.stress}`), T.id;
      },
      view(t) {
      },
      get mesh() {
        return e;
      }
    };
    function go() {
      return ea(T);
    }
    function xo() {
      return ta(T);
    }
    let qe = {};
    function Ee(t) {
      var _a, _b;
      I = t, is.val = true, st = 0, Tt && jn(), ee = {};
      const n = go()[t];
      if (n) for (const l of n) ee[l.key] = {
        val: l.val,
        min: l.min,
        max: l.max,
        step: l.step,
        label: l.label
      };
      qe = {};
      const o = xo()[t];
      if (o) for (const l of o) qe[l.key] = {
        val: l.val,
        min: l.min,
        max: l.max,
        step: l.step,
        label: l.label
      };
      if (t === "edificio") {
        const l = Math.round(((_a = ee.nVanosX) == null ? void 0 : _a.val) ?? 2), s = Math.round(((_b = ee.nVanosY) == null ? void 0 : _b.val) ?? 2);
        ne = Array(l).fill(T.defaultSpan), se = Array(s).fill(T.defaultSpan * 0.8);
      }
      yt(), setTimeout(() => {
        hs(), oe();
      }, 50);
    }
    function O(t) {
      var _a, _b;
      return ((_a = ee[t]) == null ? void 0 : _a.val) ?? ((_b = qe[t]) == null ? void 0 : _b.val) ?? 0;
    }
    function oe() {
      switch (I) {
        case "truss":
          ho();
          break;
        case "beams":
          vo();
          break;
        case "3d":
          yo();
          break;
        case "frame": {
          const n = Math.round(O("nVanos")), o = O("spanV"), l = Math.round(O("nPisos")), s = O("hPiso");
          ze.frame(Array(n).fill(o), Array(l).fill(s));
          break;
        }
        case "edificio": {
          const n = Math.round(O("nPisos")), o = O("hPiso"), l = O("Lvix") || 0, s = O("Lvdx") || 0, i = O("Lviy") || 0, r = O("Lvdy") || 0, c = Math.max(1, Math.round(O("nSubViga") || 3)), u = Math.max(1, Math.round(O("nSubCol") || 1));
          ze.building([
            ...ne
          ], [
            ...se
          ], Array(n).fill(o), c, l, s, i, r, u);
          break;
        }
        case "galpon":
          ze.galpon(O("span"), O("length"), O("height"), O("archRise"), Math.round(O("xDiv")), Math.round(O("yDiv")));
          break;
        case "barra":
          ds();
          break;
        case "placa-3q":
          $o();
          break;
        case "placa-q4":
          wo();
          break;
        case "losa-rect":
          Mo();
          break;
        case "losa-plana":
          ko();
          break;
        case "viga-alta":
          So();
          break;
        case "muro-contencion":
          zo();
          break;
        case "zapata":
          Io();
          break;
        case "placa-orificios":
          Eo();
          break;
        case "col-placa":
          Lo();
          break;
        case "talud":
          qo();
          break;
        case "eiffel":
          Go();
          break;
        case "arco":
          Vo();
          break;
        case "puente":
          Xo();
          break;
        case "twisted":
          Ko();
          break;
        case "burj":
          Uo();
          break;
        case "opera":
          Zo();
          break;
        case "diagrid":
          Qo();
          break;
      }
      if ((I === "frame" || I === "edificio" || I === "galpon") && e.nodeInputs) {
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
        "diagrid"
      ].includes(I)) {
        if (le.size > 0 || Z.size > 0 || R) {
          const n = e.elements.val, o = n.filter((l, s) => !(le.has(s) || Z.has(s) || R && !fe.has(s)));
          o.length !== n.length && (e.elements.val = o);
        }
        setTimeout(() => {
          _t(), Dn();
        }, 30);
      }
    }
    function ho() {
      const t = O("span"), n = Math.round(O("divisions")), o = O("height"), l = t / n, s = [], i = [];
      for (let a = 0; a <= n; a++) s.push([
        l * a,
        0,
        0
      ]);
      for (let a = 0; a <= n; a++) s.push([
        l * a,
        0,
        o
      ]);
      const r = n + 1;
      for (let a = 0; a < n; a++) i.push([
        a,
        a + 1
      ]);
      for (let a = 0; a < n; a++) i.push([
        r + a,
        r + a + 1
      ]);
      for (let a = 0; a <= n; a++) i.push([
        a,
        r + a
      ]);
      for (let a = 0; a < n; a++) a < n / 2 ? i.push([
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
      ]), u = (O("CM") ?? 0) + (O("CV") ?? 0), d = /* @__PURE__ */ new Map();
      if (u !== 0) for (let a = 0; a <= n; a++) d.set(a, [
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
    function vo() {
      const t = O("width"), n = O("height"), o = O("Ex") ?? 0, l = (O("CM") ?? 0) + (O("CV") ?? 0), s = Math.max(1, Math.round(O("nSub") || 4)), i = [
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
        n
      ], u = [
        t,
        0,
        n
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
      if (o !== 0 && l === 0) a.set(2, [
        o,
        0,
        0,
        0,
        0,
        0
      ]);
      else if (l !== 0 && o === 0) for (let m = 1; m < i.length; m++) m === 0 || m === 3 || a.set(m, [
        0,
        0,
        l,
        0,
        0,
        0
      ]);
      else if (o !== 0 && l !== 0) for (let m = 1; m < i.length; m++) m === 0 || m === 3 || a.set(m, [
        m === 2 ? o : 0,
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
    function yo() {
      const t = O("dx"), n = O("dy"), o = O("dz"), l = Math.round(O("stories")), s = Math.max(1, Math.round(O("nSub") || 3)), i = [];
      for (let p = 0; p <= l; p++) i.push([
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
      const r = i.length, c = [
        ...i
      ], u = [];
      for (let p = 0; p < l; p++) for (let x = 0; x < 4; x++) u.push([
        p * 4 + x,
        (p + 1) * 4 + x
      ]);
      for (let p = 0; p < l; p++) {
        const x = p * 4;
        u.push([
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
      const d = [];
      for (let p = 1; p <= l; p++) {
        const x = p * 4;
        d.push([
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
      for (const [p, x] of d) {
        const w = i[p], z = i[x];
        let S = p;
        for (let H = 1; H < s; H++) {
          const _ = H / s, b = c.length;
          c.push([
            w[0] + (z[0] - w[0]) * _,
            w[1] + (z[1] - w[1]) * _,
            w[2] + (z[2] - w[2]) * _
          ]), u.push([
            S,
            b
          ]), S = b;
        }
        u.push([
          S,
          x
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
      const m = O("Ex") ?? 0, $ = (O("CM") ?? 0) + (O("CV") ?? 0), y = r - 2, g = /* @__PURE__ */ new Map();
      if (m !== 0 && $ === 0) g.set(y, [
        m,
        0,
        0,
        0,
        0,
        0
      ]);
      else if ($ !== 0 && m === 0) for (let p = 0; p < c.length; p++) a.has(p) || g.set(p, [
        0,
        0,
        $,
        0,
        0,
        0
      ]);
      else if (m !== 0 && $ !== 0) for (let p = 0; p < c.length; p++) a.has(p) || g.set(p, [
        p === y ? m : 0,
        0,
        $,
        0,
        0,
        0
      ]);
      e.nodes.val = c, e.elements.val = u, e.nodeInputs && (e.nodeInputs.val = {
        supports: a,
        loads: g
      }), Le();
    }
    function ds() {
      const t = O("L"), n = Math.round(O("nElem")), o = O("F"), l = t / n, s = [], i = [];
      for (let u = 0; u <= n; u++) s.push([
        l * u,
        0,
        0
      ]);
      for (let u = 0; u < n; u++) i.push([
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
      e.nodes.val = s, e.elements.val = i, e.nodeInputs && (e.nodeInputs.val = {
        supports: r,
        loads: c
      }), Le();
    }
    function $o() {
      const t = O("Lx") || 15, n = O("Ly") || 10, o = O("meshSize") || 0.5, l = O("q") || -3, s = O("t") || 1, i = O("E") || 3e7, r = O("nu") || 0.3, c = i / (2 * (1 + r)), u = ft === 1 ? "Membrana" : ft === 2 ? "Kirchhoff" : "Mindlin", { nodes: d, elements: a, boundaryIndices: m } = Lt({
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
      }), $ = t * n, y = l * $ / d.length, g = new Map(m.map((x) => [
        x,
        [
          true,
          true,
          true,
          true,
          true,
          true
        ]
      ])), p = new Map(d.map((x, w) => [
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
        supports: g,
        loads: p
      }), e.elementInputs && (e.elementInputs.val = {
        elasticities: new Map(a.map((x, w) => [
          w,
          i
        ])),
        elasticitiesOrthogonal: new Map(a.map((x, w) => [
          w,
          i
        ])),
        thicknesses: new Map(a.map((x, w) => [
          w,
          s
        ])),
        poissonsRatios: new Map(a.map((x, w) => [
          w,
          r
        ])),
        shearModuli: new Map(a.map((x, w) => [
          w,
          c
        ]))
      });
      try {
        const x = pt(d, a, e.nodeInputs.val, e.elementInputs.val);
        x && e.deformOutputs && (e.deformOutputs.val = x);
        const w = ln(d, a, e.elementInputs.val, x);
        w && e.analyzeOutputs && (e.analyzeOutputs.val = w), console.log(`Plate 3Q [${u}]: ${d.length} nodes, ${a.length} triangles, t=${s}, E=${i}, \u03BD=${r}`);
      } catch (x) {
        console.warn("Plate 3Q analysis failed:", x.message);
      }
      setTimeout(() => Xe(), 50), Le();
    }
    function wo() {
      const t = O("Lx") || 10, n = O("Ly") || 10, o = Math.round(O("nx") || 16), l = Math.round(O("ny") || 16), s = O("t") || 0.2, i = O("q") || -10, r = O("E") || 3e7, c = O("nu") || 0.3, u = st === 1 ? "clamped" : "simply-supported", a = {
        1: 2,
        2: 1,
        3: 0
      }[ft] ?? 0;
      return ze.plateQ4(t, n, o, l, u, i, s, r, c, a);
    }
    function Mo() {
      const t = O("a") || 6, n = O("b") || 4, o = Math.round(O("nx") || 12), l = Math.round(O("ny") || 8), s = O("t") || 0.1, i = O("q") || -10, r = O("E") || 35e6, c = O("nu") || 0.15, d = {
        1: 2,
        2: 1,
        3: 0
      }[ft] ?? 0, a = ze.plateQ4(t, n, o, l, "simply-supported", i, s, r, c, d), m = r * s * s * s / (12 * (1 - c * c));
      let $ = 0;
      for (let y = 1; y <= 19; y += 2) for (let g = 1; g <= 19; g += 2) {
        const p = y * y / (t * t) + g * g / (n * n);
        $ += 1 / (y * g * p * p);
      }
      if ($ *= 16 * Math.abs(i) / (Math.PI ** 6 * m), console.log(`\u{1F4D0} Navier anal\xEDtico w_center = ${$.toExponential(6)}`), a) {
        const y = Math.abs((Math.abs(a.centerW || 0) - $) / $ * 100);
        console.log(`   WASM w_center = ${(a.centerW || 0).toExponential(6)}, error = ${y.toFixed(2)}%`);
      }
      return a;
    }
    function ko() {
      const t = O("t") || 0.2, n = O("q") || -10, o = O("E") || 35e6, l = O("nu") || 0.2, s = O("meshSize") || 0.6, i = [
        3.6,
        4.2,
        4.2,
        3.6
      ], r = [
        3,
        3.6,
        3
      ], c = i.reduce((q, E) => q + E, 0), u = r.reduce((q, E) => q + E, 0), d = [
        0
      ];
      for (const q of i) d.push(d[d.length - 1] + q);
      const a = [
        0
      ];
      for (const q of r) a.push(a[a.length - 1] + q);
      const m = Math.max(2, Math.round(c / s)), $ = Math.max(2, Math.round(u / s)), y = c / m, g = u / $, p = [];
      for (let q = 0; q <= $; q++) for (let E = 0; E <= m; E++) p.push([
        E * y,
        q * g
      ]);
      const x = [], w = /* @__PURE__ */ new Set();
      for (const q of d) for (const E of a) {
        let P = 1 / 0, C = 0;
        for (let J = 0; J < p.length; J++) {
          const V = Math.hypot(p[J][0] - q, p[J][1] - E);
          V < P && (P = V, C = J);
        }
        w.has(C) || (w.add(C), x.push({
          node: C,
          dof: 0,
          k: 1e15
        }));
      }
      const S = {
        1: 2,
        2: 1,
        3: 0
      }[ft] ?? 1;
      console.log(`Losa Plana Q4 [${[
        "Mindlin",
        "Kirchhoff",
        "Membrane"
      ][S]}]: ${c}\xD7${u}m, ${m}\xD7${$} elem, ${w.size} columnas`);
      const H = performance.now(), _ = so({
        E: o,
        nu: l,
        thickness: t,
        meshLx: c,
        meshLy: u,
        meshNx: m,
        meshNy: $,
        bcType: "none",
        pressure: n,
        theoryType: S,
        springs: x
      }), b = performance.now() - H;
      console.log(`Solved in ${b.toFixed(1)} ms, w_max = ${_.maxW.toExponential(4)}`);
      const f = _.nodeResults.map((q) => [
        q.x,
        q.y,
        0
      ]), v = _.elementResults.map((q) => [
        ...q.nodes
      ]);
      e.nodes.val = f, e.elements.val = v;
      const M = /* @__PURE__ */ new Map();
      _.nodeResults.forEach((q, E) => {
        M.set(E, [
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
      if (Math.abs(n) > 1e-30) {
        const q = n * c * u / f.length;
        f.forEach((E, P) => {
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
        const q = /* @__PURE__ */ new Map(), E = /* @__PURE__ */ new Map(), P = /* @__PURE__ */ new Map();
        _.elementResults.forEach((C, J) => {
          q.set(J, [
            C.Mxx,
            C.Mxx,
            C.Mxx
          ]), E.set(J, [
            C.Myy,
            C.Myy,
            C.Myy
          ]), P.set(J, [
            C.Mxy,
            C.Mxy,
            C.Mxy
          ]);
        }), e.analyzeOutputs.val = {
          bendingXX: q,
          bendingYY: E,
          bendingXY: P
        };
      }
      setTimeout(() => Xe(), 50), Le();
    }
    function So() {
      const t = O("L") || 4, n = O("H") || 2, o = O("t") || 0.1, l = O("E") || 2e7, s = O("nu") || 0.2, i = l / (2 * (1 + s)), r = O("q") || -100, c = O("b") || 0.8, u = O("meshSize") || 0.2, { nodes: d, elements: a, boundaryIndices: m } = Lt({
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
        maxMeshSize: u
      }), $ = d, y = 0.4, g = /* @__PURE__ */ new Map();
      for (let b = 0; b < $.length; b++) {
        const f = $[b][0], v = $[b][1];
        Math.abs(v) < 1e-6 && (f <= y + 1e-6 || f >= t - y - 1e-6) && g.set(b, [
          true,
          true,
          true,
          true,
          true,
          true
        ]);
      }
      const p = (t - c) / 2, x = p + c, w = [];
      for (let b = 0; b < $.length; b++) if (Math.abs($[b][1] - n) < 1e-6) {
        const f = $[b][0];
        f >= p - 1e-6 && f <= x + 1e-6 && w.push(b);
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
          o
        ])),
        poissonsRatios: new Map(a.map((b, f) => [
          f,
          s
        ])),
        shearModuli: new Map(a.map((b, f) => [
          f,
          i
        ]))
      }, _ = {
        supports: g,
        loads: S
      };
      try {
        const b = pt($, a, _, H), f = ln($, a, H, b), v = $.map((L) => [
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
          g.forEach((q, E) => L.set(E, q));
          const N = /* @__PURE__ */ new Map();
          S.forEach((q, E) => N.set(E, [
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
        }), console.log(`Viga Alta: ${$.length} nodos, ${a.length} triangulos`), console.log(`  L=${t}, H=${n}, t=${o}, E=${l}, nu=${s}`), console.log(`  Carga: q=${r} kN/m sobre ${c}m central`), console.log(`  max|u| = ${M.toExponential(4)}`);
      } catch (b) {
        console.warn("Viga Alta analysis failed:", b.message);
      }
      setTimeout(() => Xe(), 50), Le();
    }
    function zo() {
      const t = O("H") || 4, n = O("B") || 3, o = O("tw") || 0.3, l = O("tb") || 0.4, s = O("meshSize") || 0.2, i = O("E") || 25e6, r = O("nu") || 0.2, c = i / (2 * (1 + r)), u = O("gamma") || 18, d = O("Ka") || 0.33, a = O("Es") || 5e4, m = O("nus") || 0.3, $ = a / (2 * (1 + m)), y = O("kn") || 1e6, g = O("ks") || 1e4, p = O("gammaW") || 9.81, x = O("Hw") || 3.5, w = O("qs") || 0, z = st, S = n * 0.3, H = n * 0.7, _ = [
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
          -S,
          l,
          0
        ]
      ];
      let b = [], f = [], v = /* @__PURE__ */ new Map(), M = /* @__PURE__ */ new Map(), L;
      if (z === 0) {
        const E = Lt({
          points: _,
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
        b = E.nodes, f = E.elements;
        for (let C = 0; C < b.length; C++) Math.abs(b[C][1]) < 1e-6 && v.set(C, [
          true,
          true,
          true,
          true,
          true,
          true
        ]);
        const P = [];
        for (let C = 0; C < b.length; C++) {
          const J = b[C][0], V = b[C][1];
          Math.abs(J - o) < s * 0.6 && V >= l - 1e-6 && P.push({
            idx: C,
            y: V
          });
        }
        P.sort((C, J) => C.y - J.y);
        for (let C = 0; C < P.length; C++) {
          const { idx: J, y: V } = P[C], U = l + t - V, W = d * u * U + d * w;
          let D = s;
          C > 0 && C < P.length - 1 ? D = (P[C + 1].y - P[C - 1].y) / 2 : C === 0 && P.length > 1 ? D = (P[1].y - P[0].y) / 2 : C === P.length - 1 && P.length > 1 && (D = (P[C].y - P[C - 1].y) / 2);
          const X = W * D;
          Math.abs(X) > 1e-10 && M.set(J, [
            X,
            0,
            0,
            0,
            0,
            0
          ]);
        }
        L = {
          elasticities: new Map(f.map((C, J) => [
            J,
            i
          ])),
          elasticitiesOrthogonal: new Map(f.map((C, J) => [
            J,
            i
          ])),
          thicknesses: new Map(f.map((C, J) => [
            J,
            o
          ])),
          poissonsRatios: new Map(f.map((C, J) => [
            J,
            r
          ])),
          shearModuli: new Map(f.map((C, J) => [
            J,
            c
          ]))
        };
      } else if (z === 1 || z === 2) {
        const E = H, P = l + t;
        if (z === 2) {
          const C = [
            [
              -S,
              0,
              0
            ],
            [
              E,
              0,
              0
            ],
            [
              E,
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
              l,
              0
            ],
            [
              -S,
              l,
              0
            ]
          ], J = Math.max(3, Math.ceil((P - l) / s)), V = [];
          for (let Y = 0; Y <= J; Y++) V.push([
            o,
            l + Y * (P - l) / J,
            0
          ]);
          const U = Lt({
            points: [
              ...C,
              ...V
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
          b = U.nodes, f = U.elements;
          const W = s * 0.4, D = [];
          for (let Y = 0; Y < b.length; Y++) {
            const pe = b[Y][0], ke = b[Y][1];
            Math.abs(pe - o) < W && ke >= l - W && D.push(Y);
          }
          D.sort((Y, pe) => b[Y][1] - b[pe][1]);
          const X = [
            D[0]
          ];
          for (let Y = 1; Y < D.length; Y++) {
            const pe = b[D[Y]][1] - b[X[X.length - 1]][1];
            Math.abs(pe) > s * 0.05 && X.push(D[Y]);
          }
          D.length = 0, D.push(...X);
          const ce = /* @__PURE__ */ new Map();
          for (const Y of D) {
            const pe = b.length;
            b.push([
              b[Y][0],
              b[Y][1],
              b[Y][2]
            ]), ce.set(Y, pe);
          }
          const Me = f.length, $e = [];
          for (let Y = 0; Y < Me; Y++) {
            const pe = f[Y], ke = (b[pe[0]][0] + b[pe[1]][0] + b[pe[2]][0]) / 3, Ne = (b[pe[0]][1] + b[pe[1]][1] + b[pe[2]][1]) / 3, Ye = ke >= -S && ke <= H && Ne >= 0 && Ne <= l, an = ke >= 0 && ke <= o && Ne >= l && Ne <= l + t, Rt = Ye || an;
            if ($e.push(!Rt), !Rt) for (let kt = 0; kt < pe.length; kt++) {
              const It = ce.get(pe[kt]);
              It !== void 0 && (pe[kt] = It);
            }
          }
          const K = f.length;
          for (let Y = 0; Y < D.length - 1; Y++) {
            const pe = D[Y], ke = D[Y + 1], Ne = ce.get(pe), Ye = ce.get(ke);
            f.push([
              ke,
              pe,
              Ne,
              Ye
            ]);
          }
          const ae = f.length - K, de = /* @__PURE__ */ new Map(), Q = /* @__PURE__ */ new Map(), be = /* @__PURE__ */ new Map(), we = /* @__PURE__ */ new Map(), Te = /* @__PURE__ */ new Map();
          for (let Y = 0; Y < Me; Y++) $e[Y] ? (de.set(Y, a), Q.set(Y, a), we.set(Y, m), Te.set(Y, $), be.set(Y, 1)) : (de.set(Y, i), Q.set(Y, i), we.set(Y, r), Te.set(Y, c), be.set(Y, 1));
          for (let Y = K; Y < f.length; Y++) de.set(Y, y), Q.set(Y, 0), we.set(Y, 0), Te.set(Y, g), be.set(Y, 0);
          L = {
            elasticities: de,
            elasticitiesOrthogonal: Q,
            thicknesses: be,
            poissonsRatios: we,
            shearModuli: Te
          };
          for (let Y = 0; Y < b.length; Y++) {
            const pe = b[Y][0], ke = b[Y][1];
            Math.abs(ke) < 1e-6 ? v.set(Y, [
              true,
              true,
              true,
              true,
              true,
              true
            ]) : Math.abs(pe - E) < s * 0.1 && v.set(Y, [
              true,
              false,
              true,
              true,
              true,
              true
            ]);
          }
          for (let Y = 0; Y < Me; Y++) {
            if (!$e[Y]) continue;
            const pe = f[Y], ke = b[pe[0]], Ne = b[pe[1]], Ye = b[pe[2]], an = Math.abs((Ne[0] - ke[0]) * (Ye[1] - ke[1]) - (Ye[0] - ke[0]) * (Ne[1] - ke[1])) / 2, Rt = -u * an / 3;
            for (const kt of pe) {
              const It = M.get(kt) || [
                0,
                0,
                0,
                0,
                0,
                0
              ];
              It[1] += Rt, M.set(kt, It);
            }
          }
          if (w > 0) {
            const Y = [];
            for (let pe = 0; pe < b.length; pe++) {
              const ke = b[pe][0], Ne = b[pe][1];
              Math.abs(Ne - P) < s * 0.1 && ke > o - 1e-6 && Y.push({
                idx: pe,
                x: ke
              });
            }
            Y.sort((pe, ke) => pe.x - ke.x);
            for (let pe = 0; pe < Y.length; pe++) {
              let ke = s;
              pe > 0 && pe < Y.length - 1 ? ke = (Y[pe + 1].x - Y[pe - 1].x) / 2 : pe === 0 && Y.length > 1 ? ke = (Y[1].x - Y[0].x) / 2 : pe === Y.length - 1 && Y.length > 1 && (ke = (Y[pe].x - Y[pe - 1].x) / 2);
              const Ne = -w * ke, Ye = M.get(Y[pe].idx) || [
                0,
                0,
                0,
                0,
                0,
                0
              ];
              Ye[1] += Ne, M.set(Y[pe].idx, Ye);
            }
          }
          console.log(`  Interfaz Goodman: ${D.length} nodos interfaz, ${ae} elem interfaz, kn=${y}, ks=${g}`);
        } else {
          const C = [
            [
              -S,
              0,
              0
            ],
            [
              E,
              0,
              0
            ],
            [
              E,
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
              l,
              0
            ],
            [
              -S,
              l,
              0
            ]
          ], J = [
            [
              o,
              l,
              0
            ]
          ], V = Lt({
            points: [
              ...C,
              ...J
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
          b = V.nodes, f = V.elements;
          const U = (K) => {
            const ae = (b[K[0]][0] + b[K[1]][0] + b[K[2]][0]) / 3, de = (b[K[0]][1] + b[K[1]][1] + b[K[2]][1]) / 3, Q = ae >= -S && ae <= H && de >= 0 && de <= l, be = ae >= 0 && ae <= o && de >= l && de <= l + t;
            return Q || be;
          }, W = /* @__PURE__ */ new Map(), D = /* @__PURE__ */ new Map(), X = /* @__PURE__ */ new Map(), ce = /* @__PURE__ */ new Map(), Me = /* @__PURE__ */ new Map(), $e = [];
          for (let K = 0; K < f.length; K++) {
            const ae = U(f[K]);
            $e.push(!ae), ae ? (W.set(K, i), D.set(K, i), ce.set(K, r), Me.set(K, c), X.set(K, 1)) : (W.set(K, a), D.set(K, a), ce.set(K, m), Me.set(K, $), X.set(K, 1));
          }
          L = {
            elasticities: W,
            elasticitiesOrthogonal: D,
            thicknesses: X,
            poissonsRatios: ce,
            shearModuli: Me
          };
          for (let K = 0; K < b.length; K++) {
            const ae = b[K][0], de = b[K][1];
            Math.abs(de) < 1e-6 ? v.set(K, [
              true,
              true,
              true,
              true,
              true,
              true
            ]) : Math.abs(ae - E) < s * 0.1 && v.set(K, [
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
            const ae = f[K], de = b[ae[0]], Q = b[ae[1]], be = b[ae[2]], we = Math.abs((Q[0] - de[0]) * (be[1] - de[1]) - (be[0] - de[0]) * (Q[1] - de[1])) / 2, Te = -u * we / 3;
            for (const Y of ae) {
              const pe = M.get(Y) || [
                0,
                0,
                0,
                0,
                0,
                0
              ];
              pe[1] += Te, M.set(Y, pe);
            }
          }
          if (w > 0) {
            const K = [];
            for (let ae = 0; ae < b.length; ae++) {
              const de = b[ae][0], Q = b[ae][1];
              Math.abs(Q - P) < s * 0.1 && de > o - 1e-6 && K.push({
                idx: ae,
                x: de
              });
            }
            K.sort((ae, de) => ae.x - de.x);
            for (let ae = 0; ae < K.length; ae++) {
              let de = s;
              ae > 0 && ae < K.length - 1 ? de = (K[ae + 1].x - K[ae - 1].x) / 2 : ae === 0 && K.length > 1 ? de = (K[1].x - K[0].x) / 2 : ae === K.length - 1 && K.length > 1 && (de = (K[ae].x - K[ae - 1].x) / 2);
              const Q = -w * de, be = M.get(K[ae].idx) || [
                0,
                0,
                0,
                0,
                0,
                0
              ];
              be[1] += Q, M.set(K[ae].idx, be);
            }
          }
        }
      }
      if (z === 3) {
        const E = Lt({
          points: _,
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
        b = E.nodes, f = E.elements;
        for (let U = 0; U < b.length; U++) Math.abs(b[U][1]) < 1e-6 && v.set(U, [
          true,
          true,
          true,
          true,
          true,
          true
        ]);
        const P = l + t, C = Math.min(x, t), J = P - C, V = [];
        for (let U = 0; U < b.length; U++) {
          const W = b[U][0], D = b[U][1];
          Math.abs(W - o) < s * 0.6 && D >= l - 1e-6 && V.push({
            idx: U,
            y: D
          });
        }
        V.sort((U, W) => U.y - W.y);
        for (let U = 0; U < V.length; U++) {
          const { idx: W, y: D } = V[U], X = Math.max(0, P - D);
          if (X <= 0 || D < J - 1e-6) continue;
          const ce = Math.min(X, C), Me = p * ce;
          let $e = s;
          U > 0 && U < V.length - 1 ? $e = (V[U + 1].y - V[U - 1].y) / 2 : U === 0 && V.length > 1 ? $e = (V[1].y - V[0].y) / 2 : U === V.length - 1 && V.length > 1 && ($e = (V[U].y - V[U - 1].y) / 2);
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
          elasticities: new Map(f.map((U, W) => [
            W,
            i
          ])),
          elasticitiesOrthogonal: new Map(f.map((U, W) => [
            W,
            i
          ])),
          thicknesses: new Map(f.map((U, W) => [
            W,
            o
          ])),
          poissonsRatios: new Map(f.map((U, W) => [
            W,
            r
          ])),
          shearModuli: new Map(f.map((U, W) => [
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
        const E = pt(b, f, N, L), P = f.filter((X) => X.length === 3), C = {};
        for (const X of Object.keys(L)) {
          const ce = L[X];
          if (ce && ce instanceof Map) {
            const Me = /* @__PURE__ */ new Map();
            let $e = 0;
            for (let K = 0; K < f.length; K++) f[K].length === 3 && (ce.has(K) && Me.set($e, ce.get(K)), $e++);
            C[X] = Me;
          }
        }
        const J = ln(b, P, C, E), V = b.map((X) => [
          X[0],
          0,
          X[1]
        ]);
        if (e.nodes.val = V, e.elements.val = P, E && E.deformations) {
          const X = /* @__PURE__ */ new Map();
          E.deformations.forEach((ce, Me) => {
            X.set(Me, [
              ce[0],
              ce[2],
              ce[1],
              ce[3],
              ce[5],
              ce[4]
            ]);
          }), e.deformOutputs && (e.deformOutputs.val = {
            deformations: X
          });
        }
        const U = /* @__PURE__ */ new Map();
        v.forEach((X, ce) => U.set(ce, X));
        const W = /* @__PURE__ */ new Map();
        M.forEach((X, ce) => W.set(ce, [
          X[0],
          X[2],
          X[1],
          X[3],
          X[5],
          X[4]
        ])), e.nodeInputs && (e.nodeInputs.val = {
          supports: U,
          loads: W
        }), e.elementInputs && (e.elementInputs.val = {}), e.analyzeOutputs && (e.analyzeOutputs.val = {});
        let D = 0;
        E && E.deformations && E.deformations.forEach((X) => {
          const ce = Math.sqrt(X[0] * X[0] + X[1] * X[1] + X[2] * X[2]);
          D = Math.max(D, ce);
        }), console.log(`Muro Contencion [${q[z]}]: ${b.length} nodos, ${f.length} triangulos`), console.log(`  H=${t}, B=${n}, tw=${o}, tb=${l}, Ka=${d}, gamma=${u}, qs=${w}`), z === 1 && console.log(`  Es=${a}, nus=${m}`), z === 2 && console.log(`  Es=${a}, nus=${m}, kn=${y}, ks=${g}`), z === 3 && console.log(`  gammaW=${p}, Hw=${x}`), console.log(`  max|u| = ${D.toExponential(4)}`);
      } catch (E) {
        console.warn("Muro Contencion failed:", E.message);
      }
      setTimeout(() => Xe(), 50), Le();
    }
    function Io() {
      const t = O("Lx") || 2, n = O("Ly") || 2, o = O("t") || 0.5, l = O("colA") || 0.4, s = O("colH") || 1.5, i = Math.round(O("nx") || 8), r = Math.round(O("ny") || 8), c = O("E") || 25e6, u = O("nu") || 0.2, d = O("P") || -500, a = O("Mx") || 0, m = O("My") || 0, $ = O("ks") || 2e4, y = t / i, g = n / r, p = t / 2, x = n / 2, w = l / 2, z = [];
      for (let v = 0; v <= r; v++) for (let M = 0; M <= i; M++) {
        const L = v * (i + 1) + M;
        let N = y, q = g;
        (M === 0 || M === i) && (N = y / 2), (v === 0 || v === r) && (q = g / 2), z.push({
          node: L,
          dof: 0,
          k: $ * N * q
        });
      }
      let S = 0;
      for (let v = 0; v <= r; v++) for (let M = 0; M <= i; M++) Math.abs(M * y - p) <= w + 1e-6 && Math.abs(v * g - x) <= w + 1e-6 && S++;
      const H = d / Math.max(S, 1), _ = [];
      for (let v = 0; v <= r; v++) for (let M = 0; M <= i; M++) {
        const L = M * y, N = v * g;
        Math.abs(L - p) <= w + 1e-6 && Math.abs(N - x) <= w + 1e-6 && _.push({
          node: v * (i + 1) + M,
          dof: 0,
          value: H
        });
      }
      if (Math.abs(a) > 1e-6) {
        const v = w > 1e-6 ? w : g, M = a / v;
        for (let L = 0; L <= r; L++) for (let N = 0; N <= i; N++) {
          const q = N * y, E = L * g;
          if (Math.abs(q - p) <= w + 1e-6 && Math.abs(E - x) <= w + 1e-6) {
            const P = E - x;
            if (Math.abs(P) > 1e-6) {
              const C = P > 0 ? 1 : -1;
              _.push({
                node: L * (i + 1) + N,
                dof: 0,
                value: C * M / S * 2
              });
            }
          }
        }
      }
      if (Math.abs(m) > 1e-6) {
        const v = w > 1e-6 ? w : y, M = m / v;
        for (let L = 0; L <= r; L++) for (let N = 0; N <= i; N++) {
          const q = N * y, E = L * g;
          if (Math.abs(q - p) <= w + 1e-6 && Math.abs(E - x) <= w + 1e-6) {
            const P = q - p;
            if (Math.abs(P) > 1e-6) {
              const C = P > 0 ? 1 : -1;
              _.push({
                node: L * (i + 1) + N,
                dof: 0,
                value: C * M / S * 2
              });
            }
          }
        }
      }
      const f = {
        1: 2,
        2: 1,
        3: 0
      }[ft] ?? 1;
      console.log(`Zapata: ${t}x${n}m, t=${o}m, ${i}x${r} elem`), console.log(`  col=${l}m, P=${d}, Mx=${a}, My=${m}, ks=${$}`);
      try {
        const v = so({
          E: c,
          nu: u,
          thickness: o,
          meshLx: t,
          meshLy: n,
          meshNx: i,
          meshNy: r,
          bcType: "none",
          pressure: 0,
          theoryType: f,
          springs: z,
          pointLoads: _
        });
        console.log(`  Solved: w_max = ${v.maxW.toExponential(4)}`);
        const M = v.nodeResults.map((J) => [
          J.x,
          J.y,
          0
        ]), L = M.length;
        M.push([
          p - w,
          x - w,
          0
        ]), M.push([
          p + w,
          x - w,
          0
        ]), M.push([
          p + w,
          x + w,
          0
        ]), M.push([
          p - w,
          x + w,
          0
        ]), M.push([
          p - w,
          x - w,
          s
        ]), M.push([
          p + w,
          x - w,
          s
        ]), M.push([
          p + w,
          x + w,
          s
        ]), M.push([
          p - w,
          x + w,
          s
        ]);
        const N = v.elementResults.map((J) => [
          ...J.nodes
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
        v.nodeResults.forEach((J, V) => {
          q.set(V, [
            0,
            0,
            J.w,
            J.bx,
            J.by,
            0
          ]);
        }), e.deformOutputs && (e.deformOutputs.val = {
          deformations: q
        });
        const E = /* @__PURE__ */ new Map();
        v.nodeResults.forEach((J, V) => {
          const U = J.x, W = J.y;
          (U < 1e-6 || U > t - 1e-6 || W < 1e-6 || W > n - 1e-6) && E.set(V, [
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
          supports: E,
          loads: P
        }), e.elementInputs && (e.elementInputs.val = {}), e.analyzeOutputs) {
          const J = v.elementResults.length, V = /* @__PURE__ */ new Map(), U = /* @__PURE__ */ new Map(), W = /* @__PURE__ */ new Map();
          v.elementResults.forEach((D, X) => {
            V.set(X, [
              D.Mxx,
              D.Mxx,
              D.Mxx
            ]), U.set(X, [
              D.Myy,
              D.Myy,
              D.Myy
            ]), W.set(X, [
              D.Mxy,
              D.Mxy,
              D.Mxy
            ]);
          }), e.analyzeOutputs.val = {
            bendingXX: V,
            bendingYY: U,
            bendingXY: W
          };
        }
        const C = _e();
        C && (C.settings.shellResults.val = "bendingXX");
      } catch (v) {
        console.warn("Zapata solver failed:", v.message);
      }
      setTimeout(() => Xe(), 50), Le();
    }
    function Eo() {
      const t = O("Lx") || 0.4, n = O("Ly") || 0.4, o = O("t") || 0.025, l = O("dBolt") || 0.022, s = O("sx") || 0.28, i = O("sy") || 0.28, r = O("colA") || 0.2, c = O("meshSize") || 8e-3, u = O("E") || 2e8, d = O("nu") || 0.3, a = u / (2 * (1 + d)), m = O("P") || -200, $ = Math.round(O("nBolts") || 4), y = t / 2, g = n / 2, p = l / 2, x = r / 2, w = [];
      $ >= 4 && (w.push([
        y - s / 2,
        g - i / 2
      ]), w.push([
        y + s / 2,
        g - i / 2
      ]), w.push([
        y + s / 2,
        g + i / 2
      ]), w.push([
        y - s / 2,
        g + i / 2
      ])), $ >= 6 && (w.push([
        y,
        g - i / 2
      ]), w.push([
        y,
        g + i / 2
      ])), $ >= 8 && (w.push([
        y - s / 2,
        g
      ]), w.push([
        y + s / 2,
        g
      ]));
      const { nodes: z, elements: S } = Lt({
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
        maxMeshSize: c
      }), H = (q, E) => {
        for (const [P, C] of w) if ((q - P) * (q - P) + (E - C) * (E - C) < p * p) return true;
        return false;
      }, _ = S.filter((q) => {
        const E = (z[q[0]][0] + z[q[1]][0] + z[q[2]][0]) / 3, P = (z[q[0]][1] + z[q[1]][1] + z[q[2]][1]) / 3;
        return !H(E, P);
      }), b = z, f = /* @__PURE__ */ new Map();
      for (let q = 0; q < b.length; q++) {
        const E = b[q][0], P = b[q][1];
        for (const [C, J] of w) {
          const V = Math.sqrt((E - C) * (E - C) + (P - J) * (P - J));
          V >= p * 0.7 && V <= p * 1.5 && f.set(q, [
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
        const E = b[q][0], P = b[q][1];
        Math.abs(E - y) <= x && Math.abs(P - g) <= x && M++;
      }
      const L = m / Math.max(M, 1);
      for (let q = 0; q < b.length; q++) {
        const E = b[q][0], P = b[q][1];
        if (Math.abs(E - y) <= x && Math.abs(P - g) <= x) {
          const C = v.get(q) || [
            0,
            0,
            0,
            0,
            0,
            0
          ];
          C[2] += L, v.set(q, C);
        }
      }
      const N = {
        elasticities: new Map(_.map((q, E) => [
          E,
          u
        ])),
        elasticitiesOrthogonal: new Map(_.map((q, E) => [
          E,
          u
        ])),
        thicknesses: new Map(_.map((q, E) => [
          E,
          o
        ])),
        poissonsRatios: new Map(_.map((q, E) => [
          E,
          d
        ])),
        shearModuli: new Map(_.map((q, E) => [
          E,
          a
        ]))
      };
      console.log(`Placa Base: ${t * 1e3}x${n * 1e3}mm, t=${o * 1e3}mm, ${$} pernos d=${l * 1e3}mm`), console.log(`  P=${m} kN, col=${r * 1e3}mm, mesh=${c * 1e3}mm`), console.log(`  ${_.length} triangulos, ${b.length} nodos`);
      try {
        const q = pt(b, _, {
          supports: f,
          loads: v
        }, N), E = ln(b, _, N, q);
        e.nodes.val = b, e.elements.val = _, q && e.deformOutputs && (e.deformOutputs.val = q), e.nodeInputs && (e.nodeInputs.val = {
          supports: f,
          loads: v
        }), e.elementInputs && (e.elementInputs.val = {}), E && e.analyzeOutputs && (e.analyzeOutputs.val = E);
        let P = 0;
        q && q.deformations && q.deformations.forEach((C) => {
          const J = Math.sqrt(C[0] * C[0] + C[1] * C[1] + C[2] * C[2]);
          P = Math.max(P, J);
        }), console.log(`  max|u| = ${P.toExponential(4)}`);
      } catch (q) {
        console.warn("Placa Base failed:", q.message);
      }
      setTimeout(() => Xe(), 50), Le();
    }
    function Lo() {
      const t = O("colB") || 0.3, n = O("colH") || 0.3, o = O("colT") || 8e-3, l = O("colLen") || 1.5, s = O("Lx") || 0.45, i = O("Ly") || 0.45, r = O("tPlaca") || 0.025, c = O("dBolt") || 0.022, u = O("sx") || 0.32, d = O("sy") || 0.32, a = Math.round(O("nSubColV") || 6), m = Math.round(O("nSubColH") || 4), $ = Math.round(O("nSubPlaca") || 10), y = O("E") || 2e8, g = O("nu") || 0.3, p = y / (2 * (1 + g)), x = O("P") || -300, w = s / 2, z = i / 2, S = c / 2, H = t / 2, _ = n / 2, b = [], f = [], v = $, M = s / v, L = i / v, N = (Q, be) => be * (v + 1) + Q;
      for (let Q = 0; Q <= v; Q++) for (let be = 0; be <= v; be++) b.push([
        be * M,
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
      ], E = (Q, be) => {
        for (const [we, Te] of q) if ((Q - we) * (Q - we) + (be - Te) * (be - Te) < S * S) return true;
        return false;
      }, P = f.length;
      for (let Q = 0; Q < v; Q++) for (let be = 0; be < v; be++) {
        const we = (be + 0.5) * M, Te = (Q + 0.5) * L;
        E(we, Te) || f.push([
          N(be, Q),
          N(be + 1, Q),
          N(be + 1, Q + 1),
          N(be, Q + 1)
        ]);
      }
      const C = f.length - P, J = a, V = m, U = [
        [
          w - H,
          z - _
        ],
        [
          w + H,
          z - _
        ],
        [
          w + H,
          z + _
        ],
        [
          w - H,
          z + _
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
      ], X = (Q, be) => {
        for (let we = 0; we < (v + 1) * (v + 1); we++) if (Math.abs(b[we][0] - Q) < M * 0.3 && Math.abs(b[we][1] - be) < L * 0.3 && Math.abs(b[we][2]) < 1e-6) return we;
        return -1;
      };
      for (const [Q, be] of D) {
        const [we, Te] = U[Q], [Y, pe] = U[be], ke = [];
        for (let Ne = 0; Ne <= J; Ne++) {
          const Ye = [], an = Ne / J * l;
          for (let Rt = 0; Rt <= V; Rt++) {
            const kt = Rt / V, It = we + kt * (Y - we), no = Te + kt * (pe - Te);
            if (Ne === 0) {
              const Et = X(It, no);
              if (Et >= 0) {
                Ye.push(Et);
                continue;
              }
            }
            let oo = -1;
            for (let Et = 0; Et < b.length; Et++) if (Math.abs(b[Et][0] - It) < 1e-6 && Math.abs(b[Et][1] - no) < 1e-6 && Math.abs(b[Et][2] - an) < 1e-6) {
              oo = Et;
              break;
            }
            oo >= 0 ? Ye.push(oo) : (Ye.push(b.length), b.push([
              It,
              no,
              an
            ]));
          }
          ke.push(Ye);
        }
        for (let Ne = 0; Ne < J; Ne++) for (let Ye = 0; Ye < V; Ye++) f.push([
          ke[Ne][Ye],
          ke[Ne][Ye + 1],
          ke[Ne + 1][Ye + 1],
          ke[Ne + 1][Ye]
        ]);
      }
      const ce = f.length - W, Me = /* @__PURE__ */ new Map();
      for (let Q = 0; Q < (v + 1) * (v + 1); Q++) {
        const be = b[Q][0], we = b[Q][1];
        for (const [Te, Y] of q) {
          const pe = Math.sqrt((be - Te) * (be - Te) + (we - Y) * (we - Y));
          pe >= S * 0.5 && pe <= S * 2 && Me.set(Q, [
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
      const ae = x / Math.max(K.length, 1);
      for (const Q of K) $e.set(Q, [
        0,
        0,
        ae,
        0,
        0,
        0
      ]);
      const de = {
        elasticities: /* @__PURE__ */ new Map(),
        poissonsRatios: /* @__PURE__ */ new Map(),
        thicknesses: /* @__PURE__ */ new Map(),
        shearModuli: /* @__PURE__ */ new Map()
      };
      for (let Q = P; Q < P + C; Q++) de.elasticities.set(Q, y), de.poissonsRatios.set(Q, g), de.thicknesses.set(Q, r), de.shearModuli.set(Q, p);
      for (let Q = W; Q < W + ce; Q++) de.elasticities.set(Q, y), de.poissonsRatios.set(Q, g), de.thicknesses.set(Q, o), de.shearModuli.set(Q, p);
      console.log(`Col+Placa 3D: col ${t * 1e3}x${n * 1e3}x${o * 1e3}mm, h=${l}m`), console.log(`  Placa ${s * 1e3}x${i * 1e3}mm, t=${r * 1e3}mm, 4 pernos d=${c * 1e3}mm`), console.log(`  ${C} Q4 placa + ${ce} Q4 columna = ${f.length} total`), console.log(`  ${b.length} nodos, P=${x} kN`);
      try {
        const Q = pt(b, f, {
          supports: Me,
          loads: $e
        }, de), be = ln(b, f, de, Q);
        e.nodes.val = b, e.elements.val = f, Q && e.deformOutputs && (e.deformOutputs.val = Q), e.nodeInputs && (e.nodeInputs.val = {
          supports: Me,
          loads: $e
        }), e.elementInputs && (e.elementInputs.val = de), be && e.analyzeOutputs && (e.analyzeOutputs.val = be);
        let we = 0;
        (Q == null ? void 0 : Q.deformations) && Q.deformations.forEach((Te) => {
          const Y = Math.sqrt(Te[0] * Te[0] + Te[1] * Te[1] + Te[2] * Te[2]);
          we = Math.max(we, Y);
        }), console.log(`  max|u| = ${we.toExponential(4)}`);
      } catch (Q) {
        console.warn("Col+Placa failed:", Q.message), e.nodes.val = b, e.elements.val = f, e.nodeInputs && (e.nodeInputs.val = {
          supports: Me,
          loads: $e
        });
      }
      setTimeout(() => Xe(), 50), Le();
    }
    function qo() {
      const t = O("H") || 6, n = O("angle") || 45, o = O("bTop") || 3, l = O("bBot") || 3, s = O("meshSize") || 2, i = O("E") || 5e4, r = O("nu") || 0.3, c = O("gamma") || 18, u = O("c") || 15, d = O("phi") || 30, a = O("qs") || 0, m = t / Math.tan(n * Math.PI / 180), $ = l + m + o, y = t, g = [
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
      ], { nodes: p, elements: x } = Lt({
        points: g,
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
      for (let _ = 0; _ < w.length; _++) {
        const b = w[_][0], f = w[_][1];
        Math.abs(f + y) < 1e-6 ? (z.push({
          node: _,
          fixX: true,
          fixY: true
        }), S.set(_, [
          true,
          true,
          true,
          true,
          true,
          true
        ])) : (Math.abs(b) < 1e-6 || Math.abs(b - $) < 1e-6) && (z.push({
          node: _,
          fixX: true,
          fixY: false
        }), S.set(_, [
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
        const _ = w.map((E) => [
          E[0],
          E[1]
        ]), b = x.map((E) => [
          E[0],
          E[1],
          E[2]
        ]), f = Rs({
          nodes: _,
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
        }), v = w.map((E) => [
          E[0],
          0,
          E[1]
        ]);
        e.nodes.val = v, e.elements.val = x;
        const M = /* @__PURE__ */ new Map();
        for (let E = 0; E < f.displacements.length; E++) {
          const [P, C] = f.displacements[E];
          M.set(E, [
            P,
            0,
            C,
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
        for (let E = 0; E < f.plasticStrain.length; E++) {
          const P = f.plasticStrain[E];
          L.set(E, [
            P,
            P,
            P
          ]);
        }
        e.analyzeOutputs && (e.analyzeOutputs.val = {
          membraneXX: L
        });
        let N = 0;
        for (const [E, P] of f.displacements) {
          const C = Math.sqrt(E * E + P * P);
          N = Math.max(N, C);
        }
        let q = 0;
        for (const E of f.plasticStrain) q = Math.max(q, E);
        console.log(`Talud SRM: ${w.length} nodos, ${x.length} triangulos`), console.log(`  H=${t}, angulo=${n}\xB0, c=${u} kPa, \u03C6=${d}\xB0, \u03B3=${c}`), console.log("  \u2550\u2550\u2550 Strength Reduction Method (Mohr-Coulomb) \u2550\u2550\u2550"), console.log(`  FOS = ${f.fos.toFixed(3)}`), console.log(`  max|u| = ${N.toExponential(4)}`), console.log(`  max \u03B5_pl = ${q.toExponential(4)}`), f.fos < 1 ? console.warn("  \u26A0 TALUD INESTABLE (FOS < 1.0)") : f.fos < 1.5 && console.warn("  \u26A0 FOS < 1.5 \u2014 revisar estabilidad");
      } catch (_) {
        console.warn("Talud SRM failed:", _.message);
      }
      setTimeout(() => Xe(), 50), Le();
    }
    let vt = null, De = null, zt = null;
    function ps() {
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
    function Oe(t) {
      const n = cn.find((o) => o.id === B);
      return t / n.toM;
    }
    function Re(t) {
      const n = cn.find((o) => o.id === B);
      return t * n.toM;
    }
    function Wt(t) {
      const n = fo.find((l) => l.id === G.forceId), o = cn.find((l) => l.id === G.lengthId);
      return t / (n.toKN / (o.toM * o.toM));
    }
    function On(t) {
      const n = fo.find((l) => l.id === G.forceId), o = cn.find((l) => l.id === G.lengthId);
      return t * (n.toKN / (o.toM * o.toM));
    }
    function Rn() {
      return G.label;
    }
    function fs() {
      switch (cn.find((n) => n.id === B).id) {
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
    function us() {
      const t = Wt(20594), n = Wt(58840), o = Math.max(1, Math.round((n - t) / 40));
      return [
        Math.round(t),
        Math.round(n),
        o
      ];
    }
    function To(t, n, o, l, s) {
      const i = xe.steelVigaType, r = i === 0 ? In() : En();
      if (xe.vigaMat === 0) {
        for (let c = 0; c < n.length; c++) {
          const u = n[c], d = `b${o}${c}`, a = `h${o}${c}`, m = {};
          m[d] = +Oe(u.b).toFixed(2), m[a] = +Oe(u.h).toFixed(2), t.addBinding(m, d, {
            min: l[0],
            max: l[1],
            step: l[2],
            label: `b sv${o}${c + 1}`
          }), t.addBinding(m, a, {
            min: l[0],
            max: l[1],
            step: l[2],
            label: `h sv${o}${c + 1}`
          });
        }
        t.on("change", (c) => {
          var _a;
          const u = (_a = c.target) == null ? void 0 : _a.key, d = u == null ? void 0 : u.match(new RegExp(`^b${o}(\\d+)$`)), a = u == null ? void 0 : u.match(new RegExp(`^h${o}(\\d+)$`));
          d && (n[parseInt(d[1])].b = Re(c.value), oe()), a && (n[parseInt(a[1])].h = Re(c.value), oe());
        });
      } else if (i <= 1) {
        for (let c = 0; c < n.length; c++) {
          const u = {};
          u[`p${o}${c}`] = n[c].profileIdx ?? 0, t.addBinding(u, `p${o}${c}`, {
            label: `sv${o}${c + 1}`,
            options: r
          });
        }
        t.on("change", (c) => {
          var _a, _b;
          const d = (_b = (_a = c.target) == null ? void 0 : _a.key) == null ? void 0 : _b.match(new RegExp(`^p${o}(\\d+)$`));
          d && (n[parseInt(d[1])].profileIdx = c.value, oe());
        });
      } else if (i === 2) {
        for (let c = 0; c < n.length; c++) {
          const u = n[c], d = {}, a = `${o}${c}`;
          d[`bf${a}`] = +Oe(u.bf ?? 0.2).toFixed(3), d[`h${a}`] = +Oe(u.hf ?? 0.4).toFixed(3), d[`tf${a}`] = +Oe(u.tf ?? 0.015).toFixed(3), d[`tw${a}`] = +Oe(u.tw ?? 0.01).toFixed(3), t.addBinding(d, `bf${a}`, {
            min: l[0],
            max: l[1],
            step: l[2],
            label: `bf sv${o}${c + 1}`
          }), t.addBinding(d, `h${a}`, {
            min: l[0],
            max: l[1],
            step: l[2],
            label: `h sv${o}${c + 1}`
          }), t.addBinding(d, `tf${a}`, {
            min: s[0],
            max: s[1],
            step: s[2],
            label: `tf sv${o}${c + 1}`
          }), t.addBinding(d, `tw${a}`, {
            min: s[0],
            max: s[1],
            step: s[2],
            label: `tw sv${o}${c + 1}`
          });
        }
        t.on("change", (c) => {
          var _a;
          const u = (_a = c.target) == null ? void 0 : _a.key;
          for (let d = 0; d < n.length; d++) {
            const a = `${o}${d}`;
            u === `bf${a}` && (n[d].bf = Re(c.value), oe()), u === `h${a}` && (n[d].hf = Re(c.value), oe()), u === `tf${a}` && (n[d].tf = Re(c.value), oe()), u === `tw${a}` && (n[d].tw = Re(c.value), oe());
          }
        });
      } else {
        for (let c = 0; c < n.length; c++) {
          const u = n[c], d = {}, a = `${o}${c}`;
          d[`bc${a}`] = +Oe(u.bc ?? 0.2).toFixed(3), d[`hc${a}`] = +Oe(u.hc ?? 0.3).toFixed(3), d[`t${a}`] = +Oe(u.t ?? 8e-3).toFixed(3), t.addBinding(d, `bc${a}`, {
            min: l[0],
            max: l[1],
            step: l[2],
            label: `b sv${o}${c + 1}`
          }), t.addBinding(d, `hc${a}`, {
            min: l[0],
            max: l[1],
            step: l[2],
            label: `h sv${o}${c + 1}`
          }), t.addBinding(d, `t${a}`, {
            min: s[0],
            max: s[1],
            step: s[2],
            label: `t sv${o}${c + 1}`
          });
        }
        t.on("change", (c) => {
          var _a;
          const u = (_a = c.target) == null ? void 0 : _a.key;
          for (let d = 0; d < n.length; d++) {
            const a = `${o}${d}`;
            u === `bc${a}` && (n[d].bc = Re(c.value), oe()), u === `hc${a}` && (n[d].hc = Re(c.value), oe()), u === `t${a}` && (n[d].t = Re(c.value), oe());
          }
        });
      }
    }
    function Qt() {
      var _a;
      if (De) {
        try {
          De.dispose();
        } catch {
        }
        De = null;
      }
      const t = document.getElementById("sections");
      if (t && (t.innerHTML = ""), I !== "edificio" && I !== "frame") {
        t && (t.style.display = "none");
        return;
      }
      const n = ps();
      if (!n) return;
      n.style.display = "";
      const o = T, l = Math.round(((_a = ee.nPisos) == null ? void 0 : _a.val) ?? 3), s = fs(), i = us(), r = ne.length || 1, c = se.length || 1;
      for (; xe.perFloor.length < l; ) {
        const b = xe.perFloor.length > 0 ? JSON.parse(JSON.stringify(xe.perFloor[xe.perFloor.length - 1])) : cs(r, c);
        xe.perFloor.push(b);
      }
      xe.perFloor.length > l && (xe.perFloor.length = l);
      for (const b of xe.perFloor) {
        for (; b.vigasX.length < r; ) b.vigasX.push(b.vigasX.length > 0 ? {
          ...b.vigasX[b.vigasX.length - 1]
        } : Zt());
        for (b.vigasX.length > r && (b.vigasX.length = r); b.vigasY.length < c; ) b.vigasY.push(b.vigasY.length > 0 ? {
          ...b.vigasY[b.vigasY.length - 1]
        } : Zt());
        b.vigasY.length > c && (b.vigasY.length = c);
      }
      De = new kn({
        title: `Sections (${o.label})`,
        container: n
      });
      const u = {
        colMat: xe.colMat
      };
      if (De.addBinding(u, "colMat", {
        label: "Col Material",
        options: {
          Hormigon: 0,
          Acero: 1,
          CFT: 2
        }
      }).on("change", (b) => {
        xe.colMat = b.value, Qt(), oe();
      }), xe.colMat === 0) {
        const b = {
          forma: xe.colShape
        };
        De.addBinding(b, "forma", {
          label: "Col forma",
          options: {
            Rectangular: 0,
            Circular: 1
          }
        }).on("change", (v) => {
          xe.colShape = v.value, Qt(), oe();
        });
        const f = {
          fc: +Wt(xe.fc).toFixed(1)
        };
        De.addBinding(f, "fc", {
          min: i[0],
          max: i[1],
          step: i[2],
          label: `f'c col (${Rn()})`
        }), De.on("change", (v) => {
          var _a2;
          ((_a2 = v.target) == null ? void 0 : _a2.key) === "fc" && (xe.fc = On(v.value), oe());
        });
      } else if (xe.colMat === 1) {
        const b = {
          colType: xe.steelColType
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
          xe.steelColType = f.value, Qt(), oe();
        });
      }
      De.addBlade({
        view: "separator"
      });
      const d = {
        vigaMat: xe.vigaMat
      };
      if (De.addBinding(d, "vigaMat", {
        label: "Viga Material",
        options: {
          Hormigon: 0,
          Acero: 1
        }
      }).on("change", (b) => {
        xe.vigaMat = b.value, Qt(), oe();
      }), xe.vigaMat === 1) {
        const b = {
          vigaType: xe.steelVigaType
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
          xe.steelVigaType = f.value, Qt(), oe();
        });
      }
      const a = xe.steelColType === 0 ? In() : En();
      xe.steelVigaType === 0 ? In() : En();
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
        const f = xe.perFloor[b], v = De.addFolder({
          title: `Piso ${b + 1}`,
          expanded: b < 2
        });
        if (xe.colMat === 0) if (xe.colShape === 1) {
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
            ((_a2 = L.target) == null ? void 0 : _a2.key) === "dCol" && (f.dCol = Re(L.value), oe());
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
            ((_a2 = L.target) == null ? void 0 : _a2.key) === "bCol" && (f.bCol = Re(L.value), oe()), ((_b = L.target) == null ? void 0 : _b.key) === "hCol" && (f.hCol = Re(L.value), oe());
          });
        }
        else if (xe.colMat === 1) if (xe.steelColType <= 1) {
          const M = {
            col: f.colProfileIdx
          };
          v.addBinding(M, "col", {
            label: "Columna",
            options: a
          }).on("change", (L) => {
            f.colProfileIdx = L.value, oe();
          });
        } else if (xe.steelColType === 2) {
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
            ((_a2 = L.target) == null ? void 0 : _a2.key) === "bf" && (f.colBf = Re(L.value), oe()), ((_b = L.target) == null ? void 0 : _b.key) === "h" && (f.colHf = Re(L.value), oe()), ((_c = L.target) == null ? void 0 : _c.key) === "tf" && (f.colTf = Re(L.value), oe()), ((_d = L.target) == null ? void 0 : _d.key) === "tw" && (f.colTw = Re(L.value), oe());
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
            ((_a2 = L.target) == null ? void 0 : _a2.key) === "bc" && (f.colBc = Re(L.value), oe()), ((_b = L.target) == null ? void 0 : _b.key) === "hc" && (f.colHc = Re(L.value), oe()), ((_c = L.target) == null ? void 0 : _c.key) === "t" && (f.colT = Re(L.value), oe());
          });
        }
        else {
          const M = {
            bc: +Oe(f.colBc ?? 0.3).toFixed(3),
            hc: +Oe(f.colHc ?? 0.3).toFixed(3),
            t: +Oe(f.colT ?? 0.01).toFixed(3),
            Es: +Wt(f.colEs ?? 2e8).toFixed(0),
            nuS: f.colNuS ?? 0.3,
            fc: +Wt(f.colFc ?? 28e3).toFixed(1),
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
          const L = +Wt(1e8).toFixed(0), N = +Wt(3e8).toFixed(0), q = Math.max(1, Math.round((N - L) / 200));
          v.addBinding(M, "Es", {
            min: L,
            max: N,
            step: q,
            label: `Es (${Rn()})`
          }), v.addBinding(M, "nuS", {
            min: 0.15,
            max: 0.45,
            step: 0.01,
            label: "\u03BDs"
          }), v.addBinding(M, "fc", {
            min: i[0],
            max: i[1],
            step: i[2],
            label: `f'c (${Rn()})`
          }), v.addBinding(M, "nuC", {
            min: 0.1,
            max: 0.35,
            step: 0.01,
            label: "\u03BDc"
          }), v.on("change", (E) => {
            var _a2, _b, _c, _d, _e2, _f, _g;
            ((_a2 = E.target) == null ? void 0 : _a2.key) === "bc" && (f.colBc = Re(E.value), oe()), ((_b = E.target) == null ? void 0 : _b.key) === "hc" && (f.colHc = Re(E.value), oe()), ((_c = E.target) == null ? void 0 : _c.key) === "t" && (f.colT = Re(E.value), oe()), ((_d = E.target) == null ? void 0 : _d.key) === "Es" && (f.colEs = On(E.value), oe()), ((_e2 = E.target) == null ? void 0 : _e2.key) === "nuS" && (f.colNuS = E.value, oe()), ((_f = E.target) == null ? void 0 : _f.key) === "fc" && (f.colFc = On(E.value), oe()), ((_g = E.target) == null ? void 0 : _g.key) === "nuC" && (f.colNuC = E.value, oe());
          });
        }
        if (f.vigasX.length > 0) {
          const M = v.addFolder({
            title: `Vigas X (${f.vigasX.length})`,
            expanded: false
          });
          To(M, f.vigasX, "x", s, m);
        }
        if (f.vigasY.length > 0) {
          const M = v.addFolder({
            title: `Vigas Y (${f.vigasY.length})`,
            expanded: false
          });
          To(M, f.vigasY, "y", s, m);
        }
      }
      De.addBlade({
        view: "separator"
      });
      const $ = De.addFolder({
        title: "Vigas Secundarias",
        expanded: false
      }), y = {
        activar: ot,
        direccion: xt === "x" ? 0 : 1,
        cantidad: Qe
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
        ((_a2 = b.target) == null ? void 0 : _a2.key) === "activar" && (ot = b.value, oe()), ((_b = b.target) == null ? void 0 : _b.key) === "direccion" && (xt = b.value === 0 ? "x" : "y", oe()), ((_c = b.target) == null ? void 0 : _c.key) === "cantidad" && (Qe = Math.round(b.value), oe());
      }), De.addBlade({
        view: "separator"
      });
      const g = De.addFolder({
        title: "Losas de Piso",
        expanded: true
      }), p = {
        activar: gt,
        espesor: +Oe(ht).toFixed(3),
        subdivX: dn,
        subdivY: pn
      };
      g.addBinding(p, "activar", {
        label: "Activar losas"
      }), g.addBinding(p, "espesor", {
        min: s[0],
        max: s[1] * 0.3,
        step: s[2],
        label: `Espesor (${o.length})`
      }), g.addBinding(p, "subdivX", {
        min: 1,
        max: 6,
        step: 1,
        label: "Subdiv. X"
      }), g.addBinding(p, "subdivY", {
        min: 1,
        max: 6,
        step: 1,
        label: "Subdiv. Y"
      }), g.on("change", (b) => {
        var _a2, _b, _c, _d;
        ((_a2 = b.target) == null ? void 0 : _a2.key) === "activar" && (gt = b.value, oe()), ((_b = b.target) == null ? void 0 : _b.key) === "espesor" && (ht = Re(b.value), oe()), ((_c = b.target) == null ? void 0 : _c.key) === "subdivX" && (dn = Math.round(b.value), oe()), ((_d = b.target) == null ? void 0 : _d.key) === "subdivY" && (pn = Math.round(b.value), oe());
      }), De.addBlade({
        view: "separator"
      });
      const x = De.addFolder({
        title: "Muros de Corte",
        expanded: true
      }), w = {
        espesor: +Oe(rt).toFixed(3),
        subdivH: Je,
        subdivW: nt
      };
      x.addBinding(w, "espesor", {
        min: s[0],
        max: s[1],
        step: s[2],
        label: `Espesor (${o.length})`
      }), x.addBinding(w, "subdivH", {
        min: 1,
        max: 6,
        step: 1,
        label: "Subdiv. V"
      }), x.addBinding(w, "subdivW", {
        min: 1,
        max: 6,
        step: 1,
        label: "Subdiv. H"
      }), x.on("change", (b) => {
        var _a2, _b, _c;
        ((_a2 = b.target) == null ? void 0 : _a2.key) === "espesor" && (rt = Re(b.value), oe()), ((_b = b.target) == null ? void 0 : _b.key) === "subdivH" && (Je = Math.round(b.value), oe()), ((_c = b.target) == null ? void 0 : _c.key) === "subdivW" && (nt = Math.round(b.value), oe());
      });
      const z = ne.length || 1, S = se.length || 1, H = z + 1, _ = S + 1;
      if (z > 0) {
        const b = x.addFolder({
          title: `Muros dir X (${z} vanos)`,
          expanded: false
        });
        for (let f = 0; f < z; f++) for (let v = 0; v < _; v++) {
          const M = `wx_${f}_${v}`, L = Ce.some((E) => E.dir === "x" && E.bay === f && E.axisIdx === v), N = {};
          N[M] = L;
          const q = `Vano X${f + 1} / Eje Y${String.fromCharCode(65 + v)}`;
          b.addBinding(N, M, {
            label: q
          }).on("change", (E) => {
            E.value ? Ce.push({
              dir: "x",
              bay: f,
              axisIdx: v,
              floors: [
                -1
              ]
            }) : Ce = Ce.filter((P) => !(P.dir === "x" && P.bay === f && P.axisIdx === v)), oe();
          });
        }
      }
      if (S > 0) {
        const b = x.addFolder({
          title: `Muros dir Y (${S} vanos)`,
          expanded: false
        });
        for (let f = 0; f < S; f++) for (let v = 0; v < H; v++) {
          const M = `wy_${f}_${v}`, L = Ce.some((E) => E.dir === "y" && E.bay === f && E.axisIdx === v), N = {};
          N[M] = L;
          const q = `Vano Y${f + 1} / Eje X${v + 1}`;
          b.addBinding(N, M, {
            label: q
          }).on("change", (E) => {
            E.value ? Ce.push({
              dir: "y",
              bay: f,
              axisIdx: v,
              floors: [
                -1
              ]
            }) : Ce = Ce.filter((P) => !(P.dir === "y" && P.bay === f && P.axisIdx === v)), oe();
          });
        }
      }
      if (Ce.length > 0) {
        x.addBlade({
          view: "separator"
        });
        const b = {
          muros: `${Ce.length} ubicaciones`
        };
        x.addBinding(b, "muros", {
          label: "Total",
          readonly: true
        });
      }
    }
    function yt() {
      const t = document.getElementById("parameters");
      if (!t) return;
      if (Ze || (Ze = t.innerHTML), he) {
        try {
          he.dispose();
        } catch {
        }
        he = null;
      }
      if (vt) {
        try {
          vt.dispose();
        } catch {
        }
        vt = null;
      }
      t.innerHTML = "";
      const n = I.charAt(0).toUpperCase() + I.slice(1);
      he = new kn({
        title: `Parameters \u2014 ${n}`,
        container: t
      });
      const o = go()[I];
      if (o) {
        const s = {};
        for (const r of o) s[r.key] = ee[r.key].val;
        for (const r of o) he.addBinding(s, r.key, {
          min: ee[r.key].min,
          max: ee[r.key].max,
          step: ee[r.key].step,
          label: ee[r.key].label
        });
        const i = he.addFolder({
          title: "Rangos",
          expanded: false
        });
        for (const r of o) {
          const c = {
            min: ee[r.key].min,
            max: ee[r.key].max
          };
          i.addBinding(c, "min", {
            label: `${r.key} min`,
            step: r.step
          }), i.addBinding(c, "max", {
            label: `${r.key} max`,
            step: r.step
          }), i.on("change", () => {
            ee[r.key] && (ee[r.key].min = c.min, ee[r.key].max = c.max, ee[r.key].val < c.min && (ee[r.key].val = c.min), ee[r.key].val > c.max && (ee[r.key].val = c.max)), yt(), oe();
          });
        }
        he.on("change", (r) => {
          var _a;
          const c = (_a = r.target) == null ? void 0 : _a.key;
          if (c && ee[c]) {
            if (ee[c].val = r.value, I === "edificio" && (c === "nVanosX" || c === "nVanosY" || c === "nPisos")) {
              if (c === "nVanosX" || c === "nVanosY") {
                const u = Math.round(ee.nVanosX.val), d = Math.round(ee.nVanosY.val);
                for (; ne.length < u; ) ne.push(ne[ne.length - 1] ?? T.defaultSpan);
                for (ne.length > u && (ne.length = u); se.length < d; ) se.push(se[se.length - 1] ?? T.defaultSpan * 0.8);
                se.length > d && (se.length = d);
              }
              yt();
            }
            oe();
          }
        });
      }
      if (I === "edificio") {
        if (zt) {
          try {
            zt.dispose();
          } catch {
          }
          zt = null;
        }
        const s = document.getElementById("luces-panel");
        if (s) {
          s.innerHTML = "";
          const i = T;
          zt = new kn({
            title: `Luces (${i.length})`,
            container: s
          });
          const r = zt.addFolder({
            title: "Luces X",
            expanded: true
          }), c = {};
          for (let a = 0; a < ne.length; a++) c[`svx_${a + 1}`] = ne[a];
          for (let a = 0; a < ne.length; a++) r.addBinding(c, `svx_${a + 1}`, {
            min: i.spanRange[0],
            max: i.spanRange[1],
            step: i.spanRange[2],
            label: `svx${a + 1}`
          });
          r.on("change", (a) => {
            var _a, _b;
            const $ = (_b = (_a = a.target) == null ? void 0 : _a.key) == null ? void 0 : _b.match(/^svx_(\d+)$/);
            $ && (ne[parseInt($[1]) - 1] = a.value, oe());
          });
          const u = zt.addFolder({
            title: "Luces Y",
            expanded: true
          }), d = {};
          for (let a = 0; a < se.length; a++) d[`svy_${a + 1}`] = se[a];
          for (let a = 0; a < se.length; a++) u.addBinding(d, `svy_${a + 1}`, {
            min: i.spanRange[0],
            max: i.spanRange[1],
            step: i.spanRange[2],
            label: `svy${a + 1}`
          });
          u.on("change", (a) => {
            var _a, _b;
            const $ = (_b = (_a = a.target) == null ? void 0 : _a.key) == null ? void 0 : _b.match(/^svy_(\d+)$/);
            $ && (se[parseInt($[1]) - 1] = a.value, oe());
          });
        }
      }
      if (Qt(), he) {
        he.addBlade({
          view: "separator"
        });
        const s = zn()[I];
        if (s && s.length > 0) {
          const i = {};
          s.forEach((c, u) => {
            i[c.label] = u;
          });
          const r = {
            apoyo: st
          };
          he.addBinding(r, "apoyo", {
            label: "Apoyo",
            options: i
          }).on("change", (c) => {
            st = c.value, oe();
          });
        }
        if (I === "placa-3q" || I === "placa-q4") {
          const i = {
            teoria: ft
          };
          he.addBinding(i, "teoria", {
            label: "Teor\xEDa",
            options: {
              Membrana: 1,
              "Kirchhoff (delgada)": 2,
              "Mindlin (gruesa)": 3
            }
          }).on("change", (r) => {
            ft = r.value, oe();
          });
        }
      }
      const l = xo()[I];
      if (l && l.length > 0) {
        vt = new kn({
          title: `Cargas Est\xE1ticas \u2014 ${n}`,
          container: t
        });
        const s = {};
        for (const r of l) s[r.key] = qe[r.key].val;
        for (const r of l) vt.addBinding(s, r.key, {
          min: qe[r.key].min,
          max: qe[r.key].max,
          step: qe[r.key].step,
          label: qe[r.key].label
        });
        const i = vt.addFolder({
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
            qe[r.key] && (qe[r.key].min = c.min, qe[r.key].max = c.max, qe[r.key].val < c.min && (qe[r.key].val = c.min), qe[r.key].val > c.max && (qe[r.key].val = c.max)), yt(), oe();
          });
        }
        vt.on("change", (r) => {
          var _a;
          const c = (_a = r.target) == null ? void 0 : _a.key;
          if (c && qe[c]) {
            if (qe[c].val = r.value, e.nodeInputs) {
              const u = e.nodeInputs.val;
              u.supports && (e.nodeInputs.val = {
                supports: u.supports
              });
            }
            setTimeout(() => Dn(), 30);
          }
        });
      }
      window.__cad = {
        setParam: (s, i) => {
          if (ee[s]) ee[s].val = i, oe(), yt();
          else if (qe[s]) {
            if (qe[s].val = i, e.nodeInputs) {
              const r = e.nodeInputs.val;
              r.supports && (e.nodeInputs.val = {
                supports: r.supports
              });
            }
            setTimeout(() => {
              Dn(), yt();
            }, 30);
          }
        },
        getParams: () => {
          const s = {};
          for (const i in ee) s[i] = ee[i].val;
          for (const i in qe) s[i] = qe[i].val;
          return s;
        },
        setGenerator: Ee
      };
    }
    function ms() {
      if (he) {
        try {
          he.dispose();
        } catch {
        }
        he = null;
      }
      if (vt) {
        try {
          vt.dispose();
        } catch {
        }
        vt = null;
      }
      if (De) {
        try {
          De.dispose();
        } catch {
        }
        De = null;
      }
      if (zt) {
        try {
          zt.dispose();
        } catch {
        }
        zt = null;
      }
      const t = document.getElementById("sections");
      t && t.remove();
      const n = document.getElementById("right-panels-wrapper"), o = document.getElementById("parameters");
      n && o && (o.style.cssText = "", document.body.appendChild(o), n.remove()), o && Ze && (o.innerHTML = Ze);
    }
    const re = document.createElement("div");
    re.id = "cad3d-panel";
    const Fo = document.createElement("style");
    Fo.textContent = `
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
  `, document.head.appendChild(Fo), js() === "light" && document.documentElement.classList.add("awatif-light"), Ds((t) => {
      t === "light" ? document.documentElement.classList.add("awatif-light") : document.documentElement.classList.remove("awatif-light"), I && Xe(true);
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
    function bs() {
      var _a, _b, _c, _d, _e2, _f;
      const t = e.nodes.val, n = e.elements.val, o = (_a = e.nodeInputs) == null ? void 0 : _a.val, l = (_b = e.elementInputs) == null ? void 0 : _b.val, s = B, i = h, r = [];
      if (r.push("# Awatif FEM \u2014 Model Export"), r.push(`# Generator: ${I || "custom"}`), r.push(`# Units: ${i}, ${s}`), r.push(`# ${(/* @__PURE__ */ new Date()).toISOString()}`), r.push(""), r.push(`## NODES (${t.length})`), r.push("# idx     X          Y          Z"), t.forEach((d, a) => {
        r.push(`  ${String(a).padStart(4)}  ${d[0].toFixed(4).padStart(10)}  ${d[1].toFixed(4).padStart(10)}  ${d[2].toFixed(4).padStart(10)}`);
      }), r.push(""), r.push(`## ELEMENTS (${n.length})`), r.push("# idx    nodeI  nodeJ"), n.forEach((d, a) => {
        const m = d.map(($) => String($).padStart(6)).join("");
        r.push(`  ${String(a).padStart(4)}  ${m}`);
      }), r.push(""), (o == null ? void 0 : o.supports) && o.supports.size > 0 && (r.push(`## SUPPORTS (${o.supports.size})`), r.push("# node   Ux  Uy  Uz  Rx  Ry  Rz"), o.supports.forEach((d, a) => {
        const m = d.map(($) => $ ? "  1" : "  0").join("");
        r.push(`  ${String(a).padStart(4)} ${m}`);
      }), r.push("")), (o == null ? void 0 : o.loads) && o.loads.size > 0 && (r.push(`## LOADS (${o.loads.size})`), r.push("# node         Fx          Fy          Fz          Mx          My          Mz"), o.loads.forEach((d, a) => {
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
        for (let m = 0; m < n.length; m++) {
          const $ = d.map((y) => {
            var _a2;
            const g = (_a2 = y.map) == null ? void 0 : _a2.get(m);
            return g !== void 0 ? g.toExponential(4).padStart(12) : "           -";
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
      }), r.push("")), I) {
        r.push("## CLI COMMAND");
        const d = Object.entries(ee).map(([a, m]) => `${a}=${m.val}`).join(" ");
        r.push(`cad.${I === "edificio" ? "building" : I}(${d})`);
      }
      return r.join(`
`);
    }
    let un = false;
    function gs() {
      var _a, _b, _c, _d;
      if (We) {
        We.remove(), We = null, un = false;
        return;
      }
      const t = bs();
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
    `, document.body.appendChild(We), (_a = We.querySelector("#export-close")) == null ? void 0 : _a.addEventListener("click", () => {
        We == null ? void 0 : We.remove(), We = null, un = false;
      }), (_b = We.querySelector("#export-minimize")) == null ? void 0 : _b.addEventListener("click", () => {
        const n = We.querySelector("#export-body"), o = We.querySelector("#export-minimize");
        un = !un, un ? (n.style.display = "none", o.textContent = "\u25A2", o.title = "Restaurar", We.style.width = "auto") : (n.style.display = "flex", o.textContent = "\u25AC", o.title = "Minimizar", We.style.width = "720px");
      }), (_c = We.querySelector("#export-copy")) == null ? void 0 : _c.addEventListener("click", () => {
        const n = We.querySelector("#export-text");
        navigator.clipboard.writeText(n.value).then(() => {
          const o = We.querySelector("#export-status");
          o.textContent = "\u2713 Copiado al clipboard", setTimeout(() => o.textContent = "", 2e3);
        });
      }), (_d = We.querySelector("#export-json")) == null ? void 0 : _d.addEventListener("click", () => {
        var _a2, _b2, _c2, _d2, _e2, _f;
        const n = e.nodes.val, o = e.elements.val, l = (_a2 = e.nodeInputs) == null ? void 0 : _a2.val, s = (_b2 = e.elementInputs) == null ? void 0 : _b2.val, i = {
          generator: I || "custom",
          units: {
            force: h,
            length: B
          },
          nodes: n.map((a, m) => ({
            id: m,
            x: a[0],
            y: a[1],
            z: a[2]
          })),
          elements: o.map((a, m) => ({
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
        const u = We.querySelector("#export-text");
        u.value = JSON.stringify(i, null, 2);
        const d = We.querySelector("#export-status");
        d.textContent = "Formato JSON activo \u2014 presiona Copy para copiar";
      });
    }
    function Le() {
      var _a, _b, _c;
      const t = re.querySelector("#cad3d-info");
      if (t) {
        const n = e.nodes.val.length, o = e.elements.val, l = o.length, s = ((_c = (_b = (_a = e.nodeInputs) == null ? void 0 : _a.val) == null ? void 0 : _b.supports) == null ? void 0 : _c.size) || 0;
        let i = 0, r = 0, c = 0;
        for (const d of o) d.length === 2 ? i++ : d.length === 3 ? r++ : d.length === 4 && c++;
        let u = `${n}n ${l}e ${s}s`;
        (c > 0 || r > 0) && (u += ` | ${i}fr`, c > 0 && (u += ` ${c}q4`), r > 0 && (u += ` ${r}tri`)), t.textContent = u;
      }
    }
    function Bn() {
      var _a;
      if (!ut || !e.nodeInputs || !e.elementInputs) return;
      const t = e.nodes.val, n = e.elements.val, o = e.nodeInputs.val, l = e.elementInputs.val;
      if (!(t.length === 0 || n.length === 0) && !(!o.supports || o.supports.size === 0) && !(!l.densities || l.densities.size === 0)) try {
        const s = Math.min(12, t.length * 6 - o.supports.size * 6);
        if (s <= 0) return;
        const i = Os(t, n, o, l, Math.min(s, 12));
        if (i.frequencies && i.frequencies.length > 0) {
          je = i, St = t.map((d) => [
            ...d
          ]), et = 0;
          const { extent: r } = Ct(), c = (_a = i.modeShapes) == null ? void 0 : _a[0];
          if (c) {
            let d = 0;
            for (let a = 0; a < t.length; a++) {
              const m = c[a * 6] || 0, $ = c[a * 6 + 1] || 0, y = c[a * 6 + 2] || 0;
              d = Math.max(d, Math.sqrt(m * m + $ * $ + y * y));
            }
            vn = d > 1e-12 ? r * 0.05 / d : 1;
          }
          const u = `${I} \u2014 ${t.length}n ${n.length}e`;
          fn.render(i, {
            title: u
          }), fn.div.style.display = "", mn(), console.log(`Modal: ${i.frequencies.length} modos. f\u2081 = ${i.frequencies[0].toFixed(4)} Hz`);
        }
      } catch (s) {
        console.warn("Modal analysis failed:", s.message), je = null;
      }
    }
    function jn() {
      Tt && (cancelAnimationFrame(Tt), Tt = 0), St.length > 0 && (e.nodes.val = St.map((t) => [
        ...t
      ])), fn.div.style.display = "none", je = null;
    }
    function mn() {
      var _a;
      if (Tt && cancelAnimationFrame(Tt), !(je == null ? void 0 : je.modeShapes) || !St.length) return;
      const t = je.modeShapes[et];
      if (!t) return;
      const n = ((_a = je.frequencies) == null ? void 0 : _a[et]) || 1, o = Math.max(0.5, Math.min(3, n * 0.1)), l = performance.now(), s = St.length, i = e.elements.rawVal, { extent: r } = Ct(), c = re.querySelector("#cad3d-modal-scale"), u = c && parseFloat(c.value) || 5;
      let d = 0;
      for (let S = 0; S < s; S++) {
        const H = t[S * 6] || 0, _ = t[S * 6 + 1] || 0, b = t[S * 6 + 2] || 0;
        d = Math.max(d, Math.sqrt(H * H + _ * _ + b * b));
      }
      const a = d > 1e-12 ? r * u / 100 / d : 1, m = _e();
      if (!m) return;
      let $ = null, y = null, g = null;
      m.scene.traverse((S) => {
        var _a2, _b;
        !$ && S.isPoints && S.geometry && ($ = S), !y && S.isLineSegments && S.geometry && !S.name && (y = S), !g && S.isMesh && ((_a2 = S.material) == null ? void 0 : _a2.transparent) && ((_b = S.material) == null ? void 0 : _b.opacity) < 0.5 && S.geometry && (g = S);
      });
      const p = new Float32Array(s * 3), x = [];
      for (const S of i) if (S.length === 2) x.push([
        S[0],
        S[1]
      ]);
      else for (let H = 0; H < S.length; H++) x.push([
        S[H],
        S[(H + 1) % S.length]
      ]);
      const w = new Float32Array(x.length * 6);
      function z() {
        const S = (performance.now() - l) / 1e3, H = Math.sin(2 * Math.PI * o * S) * a;
        for (let _ = 0; _ < s; _++) {
          const b = St[_];
          p[_ * 3] = b[0] + (t[_ * 6] || 0) * H, p[_ * 3 + 1] = b[1] + (t[_ * 6 + 1] || 0) * H, p[_ * 3 + 2] = b[2] + (t[_ * 6 + 2] || 0) * H;
        }
        if ($) {
          const _ = $.geometry, b = _.getAttribute("position");
          b && b.array.length === p.length ? (b.array.set(p), b.needsUpdate = true) : _.setAttribute("position", new Vt(p.slice(), 3));
        }
        if (y) {
          for (let f = 0; f < x.length; f++) {
            const [v, M] = x[f];
            w[f * 6] = p[v * 3], w[f * 6 + 1] = p[v * 3 + 1], w[f * 6 + 2] = p[v * 3 + 2], w[f * 6 + 3] = p[M * 3], w[f * 6 + 4] = p[M * 3 + 1], w[f * 6 + 5] = p[M * 3 + 2];
          }
          const _ = y.geometry, b = _.getAttribute("position");
          b && b.array.length === w.length ? (b.array.set(w), b.needsUpdate = true) : _.setAttribute("position", new Vt(w.slice(), 3));
        }
        if (g) {
          const _ = [];
          for (const b of i) if (b.length === 3) {
            const [f, v, M] = b;
            _.push(p[f * 3], p[f * 3 + 1], p[f * 3 + 2]), _.push(p[v * 3], p[v * 3 + 1], p[v * 3 + 2]), _.push(p[M * 3], p[M * 3 + 1], p[M * 3 + 2]);
          } else if (b.length === 4) {
            const [f, v, M, L] = b;
            _.push(p[f * 3], p[f * 3 + 1], p[f * 3 + 2]), _.push(p[v * 3], p[v * 3 + 1], p[v * 3 + 2]), _.push(p[M * 3], p[M * 3 + 1], p[M * 3 + 2]), _.push(p[f * 3], p[f * 3 + 1], p[f * 3 + 2]), _.push(p[M * 3], p[M * 3 + 1], p[M * 3 + 2]), _.push(p[L * 3], p[L * 3 + 1], p[L * 3 + 2]);
          }
          if (_.length > 0) {
            const b = g.geometry, f = new Float32Array(_), v = b.getAttribute("position");
            v && v.array.length === f.length ? (v.array.set(f), v.needsUpdate = true) : b.setAttribute("position", new Vt(f, 3));
          }
        }
        m.render(), Tt = requestAnimationFrame(z);
      }
      Tt = requestAnimationFrame(z);
    }
    function Dn() {
      var _a, _b, _c, _d, _e2;
      if (!e.deformOutputs || !e.analyzeOutputs || !e.nodeInputs || !e.elementInputs) return;
      const t = e.nodes.val, n = e.elements.val;
      let o = e.nodeInputs.val;
      const l = e.elementInputs.val;
      if (t.length === 0 || n.length === 0 || !o.supports || o.supports.size === 0) return;
      if (!o.loads || o.loads.size === 0) {
        const g = O("CM") ?? 0, p = O("CV") ?? 0, x = g + p, w = O("Ex") ?? 0, z = O("Ey") ?? 0;
        if (x === 0 && w === 0 && z === 0) return;
        const S = /* @__PURE__ */ new Map(), H = [];
        for (let E = 0; E < t.length; E++) o.supports.has(E) || H.push(E);
        const _ = (E) => Math.round(E * 1e3) / 1e3, b = /* @__PURE__ */ new Set();
        o.supports.forEach((E, P) => {
          b.add(`${_(t[P][0])},${_(t[P][1])}`);
        });
        const f = /* @__PURE__ */ new Set();
        for (const E of H) b.has(`${_(t[E][0])},${_(t[E][1])}`) && f.add(E);
        const v = /* @__PURE__ */ new Set(), M = /* @__PURE__ */ new Set();
        if (w !== 0 || z !== 0) {
          let E = -1 / 0, P = -1 / 0;
          for (const J of f) E = Math.max(E, _(t[J][0])), P = Math.max(P, _(t[J][1]));
          const C = /* @__PURE__ */ new Map();
          for (const J of f) {
            const V = _(t[J][2]);
            C.has(V) || C.set(V, []), C.get(V).push(J);
          }
          C.forEach((J) => {
            if (w !== 0) {
              const V = /* @__PURE__ */ new Set();
              for (const U of J) if (_(t[U][0]) === E) {
                const W = _(t[U][1]);
                V.has(W) || (V.add(W), v.add(U));
              }
            }
            if (z !== 0) {
              const V = /* @__PURE__ */ new Set();
              for (const U of J) if (_(t[U][1]) === P) {
                const W = _(t[U][0]);
                V.has(W) || (V.add(W), M.add(U));
              }
            }
          });
        }
        const L = 9.81, N = /* @__PURE__ */ new Map();
        for (let E = 0; E < n.length; E++) {
          const P = n[E], C = ((_a = l.densities) == null ? void 0 : _a.get(E)) ?? 0;
          if (!(Math.abs(C) < 1e-15)) {
            if (P.length === 2) {
              const J = ((_b = l.areas) == null ? void 0 : _b.get(E)) ?? 0, V = t[P[0]], U = t[P[1]], W = Math.sqrt((U[0] - V[0]) ** 2 + (U[1] - V[1]) ** 2 + (U[2] - V[2]) ** 2), X = -(C * J * W * L) / 2;
              N.set(P[0], (N.get(P[0]) ?? 0) + X), N.set(P[1], (N.get(P[1]) ?? 0) + X);
            } else if (P.length >= 3) {
              const J = ((_c = l.thicknesses) == null ? void 0 : _c.get(E)) ?? 0;
              let V = 0;
              if (P.length === 3) {
                const [D, X, ce] = P.map((Me) => t[Me]);
                V = 0.5 * Math.abs((X[0] - D[0]) * (ce[1] - D[1]) - (ce[0] - D[0]) * (X[1] - D[1]));
              } else if (P.length === 4) {
                const [D, X, ce, Me] = P.map(($e) => t[$e]);
                if (V = 0.5 * Math.abs((X[0] - D[0]) * (ce[1] - D[1]) - (ce[0] - D[0]) * (X[1] - D[1])) + 0.5 * Math.abs((ce[0] - D[0]) * (Me[1] - D[1]) - (Me[0] - D[0]) * (ce[1] - D[1])), V < 1e-10) {
                  const $e = [
                    X[0] - D[0],
                    X[1] - D[1],
                    X[2] - D[2]
                  ], K = [
                    Me[0] - D[0],
                    Me[1] - D[1],
                    Me[2] - D[2]
                  ], ae = [
                    $e[1] * K[2] - $e[2] * K[1],
                    $e[2] * K[0] - $e[0] * K[2],
                    $e[0] * K[1] - $e[1] * K[0]
                  ];
                  V = Math.sqrt(ae[0] ** 2 + ae[1] ** 2 + ae[2] ** 2);
                }
              }
              const W = -(C * J * V * L) / P.length;
              for (const D of P) N.set(D, (N.get(D) ?? 0) + W);
            }
          }
        }
        const q = /* @__PURE__ */ new Set();
        for (const E of n) E.length === 2 && (q.add(E[0]), q.add(E[1]));
        for (const E of H) {
          const P = v.has(E) ? w : 0, C = M.has(E) ? z : 0, J = N.get(E) ?? 0, V = q.has(E) ? x : 0, U = J + V;
          (P !== 0 || C !== 0 || Math.abs(U) > 1e-10) && S.set(E, [
            P,
            C,
            U,
            0,
            0,
            0
          ]);
        }
        o = {
          ...o,
          loads: S
        }, e.nodeInputs.val = o;
      }
      const s = performance.now();
      let i = 0, r = 0, c = 0;
      for (const g of n) g.length === 2 ? i++ : g.length === 3 ? c++ : g.length === 4 && r++;
      const u = ((_d = o.supports) == null ? void 0 : _d.size) || 0, d = ((_e2 = o.loads) == null ? void 0 : _e2.size) || 0, a = t.length * 6, m = a - u * 6, $ = [], y = (g) => $.push(g);
      y('<b style="color:var(--cad-heading)">FEM Solver</b>'), y(`<span style="color:var(--cad-info)">Modelo:</span> ${t.length} nodos, ${n.length} elem`), i && y(`&nbsp;&nbsp;Frames: <b>${i}</b>`), r && y(`&nbsp;&nbsp;Shell Q4: <b>${r}</b>`), c && y(`&nbsp;&nbsp;Triangulos: <b>${c}</b>`), y(`&nbsp;&nbsp;Apoyos: ${u} &nbsp;|&nbsp; Cargas: ${d}`), y(`<span style="color:var(--cad-info)">DOFs:</span> ${a} total, ~${m} libres`), y('<hr style="border-color:var(--cad-border);margin:4px 0">'), y(`<span style="color:#888">1.</span> Ensamblaje <b>K</b> global (${a}&times;${a})`), y("&nbsp;&nbsp;&nbsp;<i>K<sub>global</sub> = &Sigma; T<sup>T</sup> &middot; K<sub>local</sub> &middot; T</i>");
      try {
        const g = pt(t, n, o, l), p = performance.now() - s;
        if (g) {
          e.deformOutputs.val = g, y(`<span style="color:#888">2.</span> <b>K &middot; u = F</b> &rarr; SparseLU &rarr; <span style="color:#00cc88">${p.toFixed(0)} ms</span>`);
          let x = 0, w = -1, z = 0, S = 0;
          g.deformations && g.deformations.forEach((v, M) => {
            const L = Math.sqrt(v[0] * v[0] + v[1] * v[1] + v[2] * v[2]);
            L > x && (x = L, w = M, z = v[0], S = v[2]);
          }), y('<span style="color:#888">3.</span> Desplazamientos:'), y(`&nbsp;&nbsp;&nbsp;max|<b>u</b>| = <b style="color:var(--cad-heading)">${x.toExponential(3)}</b> m <span style="color:#666">(nodo ${w})</span>`), y(`&nbsp;&nbsp;&nbsp;u<sub>x</sub> = ${(z * 1e3).toFixed(4)} mm &nbsp;|&nbsp; u<sub>z</sub> = ${(S * 1e3).toFixed(4)} mm`);
          const H = performance.now(), _ = ln(t, n, l, g), b = performance.now() - H;
          _ && (e.analyzeOutputs.val = _, y(`<span style="color:#888">4.</span> Fuerzas internas: <span style="color:#00cc88">${b.toFixed(0)} ms</span>`), y("&nbsp;&nbsp;&nbsp;<i>F<sub>int</sub> = K<sub>local</sub> &middot; T &middot; u</i>"));
          const f = performance.now() - s;
          y('<hr style="border-color:var(--cad-border);margin:4px 0">'), y(`<b style="color:#00cc88">&#10004; Completado: ${f.toFixed(0)} ms</b>`);
        }
      } catch (g) {
        const p = performance.now() - s;
        y(`<b style="color:#ff4444">&#10008; Error (${p.toFixed(0)} ms): ${g.message}</b>`);
      }
      window.__femLog = $, console.log(`FEM Solver: ${t.length}n ${n.length}e \u2192 ${(performance.now() - s).toFixed(0)}ms`), ut && setTimeout(() => Bn(), 50);
    }
    function Wn(t, n) {
      const o = t * n, l = t * n * n * n / 12, s = n * t * t * t / 12, i = Math.min(t, n), r = Math.max(t, n), c = i * i * i * r * (1 / 3 - 0.21 * i / r * (1 - i * i * i * i / (12 * r * r * r * r)));
      return {
        A: o,
        Iz: l,
        Iy: s,
        J: c
      };
    }
    function Po(t) {
      const n = t / 2, o = Math.PI * n * n, l = Math.PI * n * n * n * n / 4, s = Math.PI * n * n * n * n / 2;
      return {
        A: o,
        Iz: l,
        Iy: l,
        J: s
      };
    }
    function Jn(t, n, o, l) {
      const s = n - 2 * o, i = 2 * t * o + s * l, r = (t * n * n * n - (t - l) * s * s * s) / 12, c = (2 * o * t * t * t + s * l * l * l) / 12, u = (2 * t * o * o * o + s * l * l * l) / 3;
      return {
        A: i,
        Iz: r,
        Iy: c,
        J: u
      };
    }
    function Yn(t, n, o) {
      const l = t - 2 * o, s = n - 2 * o, i = t * n - l * s, r = (t * n * n * n - l * s * s * s) / 12, c = (n * t * t * t - s * l * l * l) / 12, u = (t - o) * (n - o), d = 2 * ((t - o) / o + (n - o) / o), a = 4 * u * u / (d > 0 ? d : 1);
      return {
        A: i,
        Iz: r,
        Iy: c,
        J: a
      };
    }
    function xs(t, n, o, l, s, i, r) {
      const u = 4700 * Math.sqrt(i / 1e3) * 1e3 / l, d = t - 2 * o, a = n - 2 * o, m = t * n - d * a, $ = (t * n * n * n - d * a * a * a) / 12, y = (n * t * t * t - a * d * d * d) / 12, g = d * a, p = d * a * a * a / 12, x = a * d * d * d / 12, w = m + u * g, z = $ + u * p, S = y + u * x, H = l / (2 * (1 + s)), _ = (t - o) * (n - o), b = 2 * ((t - o) / o + (n - o) / o), f = 4 * _ * _ / (b > 0 ? b : 1);
      return {
        A: w,
        Iz: z,
        Iy: S,
        J: f,
        Es: l,
        Gs: H,
        A_steel: m,
        A_conc: g
      };
    }
    function _t() {
      if (!e.elementInputs) return;
      const t = e.elements.val, n = T, o = {
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
      if ((I === "edificio" || I === "frame") && ve.size > 0) {
        const { colMat: s, vigaMat: i, colShape: r, fc: c, perFloor: u } = xe, d = 4700 * Math.sqrt(c / 1e3) * 1e3, a = d / (2 * 1.2), m = 24 / 9.80665, $ = n.E, y = n.G, g = n.rho;
        for (let p = 0; p < t.length; p++) {
          if (Fe.has(p)) {
            const v = 4700 * Math.sqrt(c / 1e3) * 1e3, M = 0.2;
            o.elasticities.set(p, v), o.poissonsRatios.set(p, M), o.thicknesses.set(p, rt), o.shearModuli.set(p, v / (2 * (1 + M))), o.densities.set(p, 24 / 9.80665);
            continue;
          }
          if (Pn.has(p)) {
            const v = 4700 * Math.sqrt(c / 1e3) * 1e3, M = 0.2;
            o.elasticities.set(p, v), o.poissonsRatios.set(p, M), o.thicknesses.set(p, ht), o.shearModuli.set(p, v / (2 * (1 + M))), o.densities.set(p, 24 / 9.80665);
            continue;
          }
          const x = ve.has(p), w = Pe.get(p) ?? 0, z = u[w] ?? u[0] ?? {
            bCol: 0.4,
            hCol: 0.4,
            dCol: 0.4
          };
          let S, H, _, b;
          if (x) if (s === 0) H = d, _ = a, b = m, S = r === 1 ? Po(z.dCol) : Wn(z.bCol, z.hCol), o.sectionShapes.set(p, r === 1 ? {
            type: "circ",
            d: z.dCol
          } : {
            type: "rect",
            b: z.bCol,
            h: z.hCol
          });
          else if (s === 1) {
            H = $, _ = y, b = g;
            const v = xe.steelColType;
            if (v <= 1) {
              const M = jt[z.colProfileIdx] ?? jt[0];
              S = {
                A: M.A,
                Iz: M.Iz,
                Iy: M.Iy,
                J: M.J
              }, o.sectionShapes.set(p, {
                type: "I",
                b: M.bf,
                h: M.d,
                name: M.name
              });
            } else if (v === 2) {
              const M = z.colBf ?? 0.3, L = z.colHf ?? 0.3, N = z.colTf ?? 0.02, q = z.colTw ?? 0.012;
              S = Jn(M, L, N, q);
              const E = `I${(L * 100).toFixed(0)}x${(M * 100).toFixed(0)}`;
              o.sectionShapes.set(p, {
                type: "I",
                b: M,
                h: L,
                tf: N,
                tw: q,
                name: E
              });
            } else {
              const M = z.colBc ?? 0.3, L = z.colHc ?? 0.3, N = z.colT ?? 0.01;
              S = Yn(M, L, N);
              const q = `\u25A1${(L * 100).toFixed(0)}x${(M * 100).toFixed(0)}x${(N * 1e3).toFixed(0)}`;
              o.sectionShapes.set(p, {
                type: "HSS",
                b: M,
                h: L,
                tw: N,
                name: q
              });
            }
          } else {
            const v = z.colBc ?? 0.3, M = z.colHc ?? 0.3, L = z.colT ?? 0.01, N = z.colFc ?? 28e3, q = z.colEs ?? 2e8, E = z.colNuS ?? 0.3;
            z.colNuC;
            const P = xs(v, M, L, q, E, N);
            S = {
              A: P.A,
              Iz: P.Iz,
              Iy: P.Iy,
              J: P.J
            }, H = P.Es, _ = P.Gs;
            const C = 7.85, J = 24 / 9.80665;
            b = (C * P.A_steel + J * P.A_conc) / (P.A_steel + P.A_conc);
            const V = `CFT ${(M * 1e3).toFixed(0)}X${(v * 1e3).toFixed(0)}X${(L * 1e3).toFixed(0)}`;
            o.sectionShapes.set(p, {
              type: "CFT",
              b: v,
              h: M,
              tw: L,
              name: V
            });
          }
          else {
            const v = Ve.get(p), M = v ? v.dir === "x" ? z.vigasX : z.vigasY : [], L = v ? M[v.bay] ?? M[0] ?? Zt() : Zt();
            if (i === 0) H = d, _ = a, b = m, S = Wn(L.b, L.h), o.sectionShapes.set(p, {
              type: "rect",
              b: L.b,
              h: L.h
            });
            else {
              H = $, _ = y, b = g;
              const N = xe.steelVigaType;
              if (N <= 1) {
                const q = jt[L.profileIdx ?? 0] ?? jt[0];
                S = {
                  A: q.A,
                  Iz: q.Iz,
                  Iy: q.Iy,
                  J: q.J
                }, o.sectionShapes.set(p, {
                  type: "I",
                  b: q.bf,
                  h: q.d,
                  name: q.name
                });
              } else if (N === 2) {
                const q = L.bf ?? 0.2, E = L.hf ?? 0.4, P = L.tf ?? 0.015, C = L.tw ?? 0.01;
                S = Jn(q, E, P, C);
                const J = `I${(E * 100).toFixed(0)}x${(q * 100).toFixed(0)}`;
                o.sectionShapes.set(p, {
                  type: "I",
                  b: q,
                  h: E,
                  tf: P,
                  tw: C,
                  name: J
                });
              } else {
                const q = L.bc ?? 0.2, E = L.hc ?? 0.3, P = L.t ?? 8e-3;
                S = Yn(q, E, P);
                const C = `\u25A1${(E * 100).toFixed(0)}x${(q * 100).toFixed(0)}x${(P * 1e3).toFixed(0)}`;
                o.sectionShapes.set(p, {
                  type: "HSS",
                  b: q,
                  h: E,
                  tw: P,
                  name: C
                });
              }
            }
          }
          const f = me.get(p);
          if (f) {
            if ((f.material ?? 1) === 0 ? (H = d, _ = a, b = m) : (H = $, _ = y, b = g), f.secType === "rect" && f.b && f.h) S = Wn(f.b, f.h), o.sectionShapes.set(p, {
              type: "rect",
              b: f.b,
              h: f.h
            });
            else if (f.secType === "circ" && f.b) S = Po(f.b), o.sectionShapes.set(p, {
              type: "circ",
              d: f.b
            });
            else if ((f.secType === "W" || f.secType === "HSS") && f.profileIdx !== void 0) {
              const M = jt[f.profileIdx] ?? jt[0];
              S = {
                A: M.A,
                Iz: M.Iz,
                Iy: M.Iy,
                J: M.J
              }, o.sectionShapes.set(p, {
                type: "I",
                b: M.bf,
                h: M.d,
                name: M.name
              });
            } else if (f.secType === "I-param" && f.bf && f.hf && f.tf && f.tw) {
              S = Jn(f.bf, f.hf, f.tf, f.tw);
              const M = `I${(f.hf * 100).toFixed(0)}x${(f.bf * 100).toFixed(0)}`;
              o.sectionShapes.set(p, {
                type: "I",
                b: f.bf,
                h: f.hf,
                tf: f.tf,
                tw: f.tw,
                name: M
              });
            } else if (f.secType === "tubular" && f.bc && f.hc && f.t) {
              S = Yn(f.bc, f.hc, f.t);
              const M = `\u25A1${(f.hc * 100).toFixed(0)}x${(f.bc * 100).toFixed(0)}x${(f.t * 1e3).toFixed(0)}`;
              o.sectionShapes.set(p, {
                type: "HSS",
                b: f.bc,
                h: f.hc,
                tw: f.t,
                name: M
              });
            }
          }
          o.elasticities.set(p, H), o.shearModuli.set(p, _), o.areas.set(p, S.A), o.momentsOfInertiaZ.set(p, S.Iy), o.momentsOfInertiaY.set(p, S.Iz), o.torsionalConstants.set(p, S.J), o.densities.set(p, b);
        }
      } else for (let s = 0; s < t.length; s++) o.elasticities.set(s, n.E), o.shearModuli.set(s, n.G), o.areas.set(s, n.A), o.momentsOfInertiaZ.set(s, n.Iy), o.momentsOfInertiaY.set(s, n.Iz), o.torsionalConstants.set(s, n.J), o.densities.set(s, n.rho);
      e.elementInputs.val = o;
    }
    function _o(t) {
      re.querySelectorAll("[data-ex]").forEach((n) => {
        n.classList.toggle("active", n.dataset.ex === t);
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
          _o($), ze.example($);
        });
      }), re.querySelectorAll("[data-view]").forEach((a) => {
        a.addEventListener("click", (m) => {
          m.stopPropagation();
          const $ = a.dataset.view;
          At($), re.querySelectorAll("[data-view]").forEach((y) => y.classList.remove("view-active")), a.classList.add("view-active");
        });
      }), (_c = re.querySelector("#cad3d-btn-clear")) == null ? void 0 : _c.addEventListener("click", (a) => {
        a.stopPropagation(), I = "", is.val = false, ms(), ze.clear();
      }), (_d = re.querySelector("#cad3d-select")) == null ? void 0 : _d.addEventListener("click", (a) => {
        var _a2;
        a.stopPropagation(), mt && (mt = false, Yt()), $t && Mn(), at = !at, (_a2 = re.querySelector("#cad3d-select")) == null ? void 0 : _a2.classList.toggle("inspect-active", at);
        const $ = _e();
        $ && ($.controls.enabled = !at), at || wn();
      }), (_e2 = re.querySelector("#cad3d-draw")) == null ? void 0 : _e2.addEventListener("click", (a) => {
        var _a2;
        a.stopPropagation(), mt && (mt = false, Yt()), at && wn(), $t = !$t, (_a2 = re.querySelector("#cad3d-draw")) == null ? void 0 : _a2.classList.toggle("inspect-active", $t), $t ? ws() : Mn();
      }), (_f = re.querySelector("#cad3d-inspect")) == null ? void 0 : _f.addEventListener("click", (a) => {
        var _a2;
        a.stopPropagation(), at && wn(), $t && Mn(), mt = !mt, (_a2 = re.querySelector("#cad3d-inspect")) == null ? void 0 : _a2.classList.toggle("inspect-active", mt), mt || Yt();
      }), (_g = re.querySelector("#cad3d-export")) == null ? void 0 : _g.addEventListener("click", (a) => {
        a.stopPropagation(), gs();
      });
      const t = re.querySelector("#cad3d-force-unit");
      t && (t.value = h, t.addEventListener("change", (a) => {
        a.stopPropagation(), h = t.value, T = Kt(h, B), I && Ee(I);
      }));
      const n = re.querySelector("#cad3d-length-unit");
      n && (n.value = B, n.addEventListener("change", (a) => {
        a.stopPropagation(), B = n.value, T = Kt(h, B), I && Ee(I);
      })), re.querySelectorAll("[data-preset]").forEach((a) => {
        a.addEventListener("click", (m) => {
          m.stopPropagation();
          const $ = a.dataset.preset, y = ye[$];
          y && (h = y.force, B = y.length, G = y.stress, T = Kt(h, B), t && (t.value = h), n && (n.value = B), re.querySelectorAll("[data-preset]").forEach((g) => {
            g.classList.toggle("active", g.dataset.preset === $);
          }), I && Ee(I), console.log(`Preset: ${$} \u2192 ${h}+${B}, stress: ${G.label}`));
        });
      }), (_h = re.querySelector("#cad3d-log")) == null ? void 0 : _h.addEventListener("click", (a) => {
        a.stopPropagation(), qs();
      }), (_i = re.querySelector("#cad3d-pushover")) == null ? void 0 : _i.addEventListener("click", (a) => {
        a.stopPropagation(), Ts();
      }), (_j = re.querySelector("#cad3d-nonlinear")) == null ? void 0 : _j.addEventListener("click", (a) => {
        a.stopPropagation(), Ps();
      }), (_k = re.querySelector("#cad3d-fem-solver")) == null ? void 0 : _k.addEventListener("click", (a) => {
        a.stopPropagation(), Cs();
      }), (_l = re.querySelector("#cad3d-modal")) == null ? void 0 : _l.addEventListener("click", (a) => {
        var _a2, _b2;
        a.stopPropagation(), ut = !ut, (_a2 = re.querySelector("#cad3d-modal")) == null ? void 0 : _a2.classList.toggle("active", ut);
        const $ = re.querySelector("#cad3d-mode-prev"), y = re.querySelector("#cad3d-mode-next"), g = re.querySelector("#cad3d-mode-label"), p = re.querySelector("#cad3d-modal-scale");
        if (ut) {
          const x = _e();
          ((_b2 = x == null ? void 0 : x.settings) == null ? void 0 : _b2.loads) && (yn = x.settings.loads.rawVal, x.settings.loads.val = false), Bn(), $.style.display = "", y.style.display = "", g.style.display = "", p && (p.style.display = ""), o();
        } else jn(), $.style.display = "none", y.style.display = "none", g.style.display = "none", p && (p.style.display = "none"), I && I !== "placa-q4" && I !== "placa-3q" && oe(), setTimeout(() => {
          var _a3;
          const x = _e();
          ((_a3 = x == null ? void 0 : x.settings) == null ? void 0 : _a3.loads) && yn && (x.settings.loads.val = true);
        }, 600);
      });
      function o() {
        var _a2;
        const a = re.querySelector("#cad3d-mode-label");
        if (!a || !(je == null ? void 0 : je.frequencies)) return;
        const m = je.frequencies[et], $ = m > 0 ? 1 / m : 0, y = [
          0,
          0,
          0,
          0,
          0,
          0
        ];
        for (let g = 0; g <= et; g++) {
          const p = (_a2 = je.massParticipation) == null ? void 0 : _a2[g];
          if (p) for (let x = 0; x < 6; x++) y[x] += p[x];
        }
        a.textContent = `Modo ${et + 1} \u2014 ${m.toFixed(2)} Hz \u2014 T=${$.toFixed(3)}s \u2014 \u03A3Ux=${(y[0] * 100).toFixed(1)}% \u03A3Uy=${(y[1] * 100).toFixed(1)}% \u03A3Rz=${(y[5] * 100).toFixed(1)}%`;
      }
      (_m = re.querySelector("#cad3d-mode-prev")) == null ? void 0 : _m.addEventListener("click", (a) => {
        if (a.stopPropagation(), !(je == null ? void 0 : je.modeShapes)) return;
        et = (et - 1 + je.modeShapes.length) % je.modeShapes.length;
        const m = je.modeShapes[et], { extent: $ } = Ct();
        let y = 0;
        for (let g = 0; g < St.length; g++) {
          const p = m[g * 6] || 0, x = m[g * 6 + 1] || 0, w = m[g * 6 + 2] || 0;
          y = Math.max(y, Math.sqrt(p * p + x * x + w * w));
        }
        vn = y > 1e-12 ? $ * 0.05 / y : 1, mn(), o();
      }), (_n2 = re.querySelector("#cad3d-mode-next")) == null ? void 0 : _n2.addEventListener("click", (a) => {
        if (a.stopPropagation(), !(je == null ? void 0 : je.modeShapes)) return;
        et = (et + 1) % je.modeShapes.length;
        const m = je.modeShapes[et], { extent: $ } = Ct();
        let y = 0;
        for (let g = 0; g < St.length; g++) {
          const p = m[g * 6] || 0, x = m[g * 6 + 1] || 0, w = m[g * 6 + 2] || 0;
          y = Math.max(y, Math.sqrt(p * p + x * x + w * w));
        }
        vn = y > 1e-12 ? $ * 0.05 / y : 1, mn(), o();
      });
      const l = re.querySelector("#cad3d-modal-scale");
      l == null ? void 0 : l.addEventListener("mousedown", (a) => a.stopPropagation()), l == null ? void 0 : l.addEventListener("change", () => {
        ut && (je == null ? void 0 : je.modeShapes) && mn();
      });
      const s = re.querySelector("#cad3d-cmd");
      s == null ? void 0 : s.addEventListener("mousedown", (a) => a.stopPropagation()), document.addEventListener("keydown", (a) => {
        var _a2;
        if ((a.ctrlKey || a.metaKey) && a.key === "z" && !a.shiftKey) {
          a.preventDefault(), No();
          return;
        }
        if ((a.ctrlKey || a.metaKey) && (a.key === "y" || a.key === "z" && a.shiftKey)) {
          a.preventDefault(), Oo();
          return;
        }
        if ((a.key === "Delete" || a.key === "Backspace") && Ae.size > 0) {
          a.preventDefault(), Ae.forEach((m) => le.add(m)), Ae.clear(), Mt && (Mt.remove(), Mt = null), oe();
          return;
        }
        if (a.key === "Escape") {
          if ($t) if (He !== null) {
            He = null;
            const m = _e();
            Ke && m && (m.scene.remove(Ke), Ke.geometry.dispose(), Ke.material.dispose(), Ke = null), Ue && m && (m.scene.remove(Ue), Ue.geometry.dispose(), Ue.material.dispose(), Ue = null), m == null ? void 0 : m.render();
          } else Mn();
          at && wn(), mt && (mt = false, Yt(), (_a2 = re.querySelector("#cad3d-inspect")) == null ? void 0 : _a2.classList.remove("inspect-active"));
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
    function _e() {
      const t = document.getElementById("viewer");
      return t ? t.__ctx : null;
    }
    function Ct() {
      const t = e.nodes.val;
      if (t.length === 0) return {
        center: new ue(),
        extent: 10
      };
      let n = 1 / 0, o = 1 / 0, l = 1 / 0, s = -1 / 0, i = -1 / 0, r = -1 / 0;
      for (const [d, a, m] of t) d < n && (n = d), d > s && (s = d), a < o && (o = a), a > i && (i = a), m < l && (l = m), m > r && (r = m);
      const c = new ue((n + s) / 2, (o + i) / 2, (l + r) / 2), u = Math.max(s - n, i - o, r - l, 1);
      return {
        center: c,
        extent: u
      };
    }
    function Xe(t = false) {
      const n = _e();
      if (!n) return;
      const { extent: o } = Ct();
      let l;
      o <= 5 ? l = Math.max(1, Math.ceil(o * 1.5)) : o <= 50 ? l = Math.max(5, Math.ceil(o * 1.3 / 5) * 5) : l = Math.max(20, Math.ceil(o * 1.3 / 10) * 10), n.settings.gridSize.val = l, n.scene.children.filter((m) => m.type === "GridHelper").forEach((m) => {
        var _a, _b;
        (_a = m.geometry) == null ? void 0 : _a.dispose(), (_b = m.material) == null ? void 0 : _b.dispose(), n.scene.remove(m);
      });
      const i = Bs(), r = new Ks(l, 20, i.grid, i.grid);
      r.rotation.x = Math.PI / 2, r.position.set(0.5 * l, 0.5 * l, 0), n.scene.add(r), n.scene.children.filter((m) => m.type === "Group" && m.name !== "gridAxes" && m.name !== "loadsGroup" && (m.name === "viewerAxes" || m.children.some(($) => $ instanceof Sn))).forEach((m) => {
        m.traverse(($) => {
          $.geometry && $.geometry.dispose(), $.material && ($.material.map && $.material.map.dispose(), $.material.dispose());
        }), n.scene.remove(m);
      });
      const u = 0.05 * l, d = new ss();
      d.name = "viewerAxes";
      const a = i.axisArrow;
      d.add(new Sn(new ue(1, 0, 0), new ue(), 1, a, 0.2, 0.2)), d.add(new Sn(new ue(0, 1, 0), new ue(), 1, a, 0.2, 0.2)), d.add(new Sn(new ue(0, 0, 1), new ue(), 1, a, 0.2, 0.2)), d.children.forEach((m) => m.scale.set(u, u, u));
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
        const g = document.createElement("canvas");
        g.width = 64, g.height = 64;
        const p = g.getContext("2d");
        p.fillStyle = $, p.font = "bold 50px Arial", p.textAlign = "center", p.textBaseline = "middle", p.fillText(m, 32, 34);
        const x = new as(g);
        x.needsUpdate = true;
        const w = new lo(new ro({
          map: x,
          depthTest: false,
          transparent: true
        }));
        w.position.set(y[0], y[1], y[2]), w.scale.set(0.4 * u, 0.4 * u, 1), w.renderOrder = 99, d.add(w);
      }
      n.scene.add(d), t ? n.render() : At("3d");
    }
    function Co(t, n, o) {
      if (t.length < 2) return o * 10;
      let l = 1 / 0;
      return n > 0 && (l = Math.min(l, Math.abs(t[n] - t[n - 1]))), n < t.length - 1 && (l = Math.min(l, Math.abs(t[n + 1] - t[n]))), l * 0.45 || o * 0.1;
    }
    function At(t) {
      var _a;
      const n = _e();
      if (!n) return;
      const { center: o, extent: l } = Ct(), s = n.renderer.domElement.clientWidth / (n.renderer.domElement.clientHeight || 1), i = l * 0.7;
      n.controls.maxDistance = l * 5, n.controls.minDistance = l * 0.05, n.renderer.clippingPlanes = [];
      const r = () => {
        n.scene.traverse((c) => {
          var _a2;
          if (!c.material) return;
          const u = c.type === "GridHelper" || c.type === "AxesHelper", d = c.isSprite, a = ((_a2 = c.userData) == null ? void 0 : _a2.noClip) === true;
          (u || d || a) && (Array.isArray(c.material) ? c.material.forEach((m) => {
            m.clippingPlanes = [];
          }) : c.material.clippingPlanes = []);
        });
      };
      if (t === "3d") {
        const c = n.perspCamera.fov, u = l / (2 * Math.tan(c * Math.PI / 360)) * 2.2;
        n.perspCamera.position.set(o.x + u * 0.5, o.y - u * 0.8, o.z + u * 0.5), n.controls.target.copy(o), n.setActiveCamera(n.perspCamera);
      } else {
        const c = n.orthoCamera;
        c.left = -i * s, c.right = i * s, c.top = i, c.bottom = -i, c.near = -l * 10, c.far = l * 10, c.updateProjectionMatrix();
        const u = (d, a, m) => {
          c.position.copy(d), c.up.copy(m), n.controls.target.copy(a), c.lookAt(a), n.controls.update();
        };
        if (t === "plan") n.renderer.clippingPlanes = [], u(new ue(o.x, o.y, o.z + l * 2), new ue(o.x, o.y, o.z), new ue(0, 1, 0));
        else if (t.startsWith("plan:")) {
          const d = parseInt(t.split(":")[1]), a = ((_a = ee.hPiso) == null ? void 0 : _a.val) ?? 3, m = (d + 1) * a, $ = a * 0.45;
          n.renderer.clippingPlanes = [
            new Bt(new ue(0, 0, -1), m + $),
            new Bt(new ue(0, 0, 1), -m + $)
          ], r(), u(new ue(o.x, o.y, m + l * 2), new ue(o.x, o.y, m), new ue(0, 1, 0));
        } else if (t === "elevX") c.position.set(o.x + l * 2, o.y, o.z), c.up.set(0, 0, 1);
        else if (t === "elevY") c.position.set(o.x, o.y - l * 2, o.z), c.up.set(0, 0, 1);
        else if (t.startsWith("axisX:")) {
          const d = parseInt(t.split(":")[1]), a = Ft[d] ?? o.x;
          if (Pt.length > 1) {
            const $ = Co(Ft, d, l);
            n.renderer.clippingPlanes = [
              new Bt(new ue(-1, 0, 0), a + $),
              new Bt(new ue(1, 0, 0), -a + $)
            ], r(), c.position.set(o.x + l * 2, o.y, o.z), n.controls.target.set(o.x, o.y, o.z);
          } else c.position.set(o.x, o.y - l * 2, o.z), n.controls.target.copy(o);
          c.up.set(0, 0, 1);
        } else if (t.startsWith("axisY:")) {
          const d = parseInt(t.split(":")[1]), a = Pt[d] ?? o.y;
          if (Ft.length > 1) {
            const $ = Co(Pt, d, l);
            n.renderer.clippingPlanes = [
              new Bt(new ue(0, -1, 0), a + $),
              new Bt(new ue(0, 1, 0), -a + $)
            ], r(), c.position.set(o.x, o.y - l * 2, o.z), n.controls.target.set(o.x, o.y, o.z);
          } else c.position.set(o.x + l * 2, o.y, o.z), n.controls.target.copy(o);
          c.up.set(0, 0, 1);
        }
        !t.startsWith("axisX:") && !t.startsWith("axisY:") && n.controls.target.copy(o), n.setActiveCamera(c);
      }
    }
    function Ao() {
      const t = re.querySelector("#cad3d-axis-buttons");
      if (!t) return;
      if (Ft.length < 2 && Pt.length < 2) {
        t.style.display = "none";
        return;
      }
      t.style.display = "", t.innerHTML = "";
      const n = (i, r, c) => {
        const u = document.createElement("button");
        return u.textContent = i, u.dataset.view = r, u.title = c, u.style.cssText = "min-width:22px;padding:1px 5px;font-weight:bold", u.addEventListener("click", (d) => {
          var _a;
          d.stopPropagation();
          const a = u.classList.contains("view-active");
          re.querySelectorAll("[data-view]").forEach((m) => m.classList.remove("view-active")), a ? (At("3d"), (_a = re.querySelector('[data-view="3d"]')) == null ? void 0 : _a.classList.add("view-active")) : (At(r), u.classList.add("view-active"));
        }), u;
      }, o = document.createElement("span");
      o.textContent = "Ejes:", o.style.cssText = "color:#888;font-size:10px;margin-right:2px;align-self:center", t.appendChild(o);
      const l = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      Ft.forEach((i, r) => {
        const c = r < l.length ? l[r] : `X${r}`;
        t.appendChild(n(c, `axisX:${r}`, `Eje ${c} \u2014 elevaci\xF3n mirando en Y`));
      });
      const s = document.createElement("span");
      s.textContent = "|", s.style.cssText = "color:#555;margin:0 3px;align-self:center;font-weight:bold", t.appendChild(s), Pt.forEach((i, r) => {
        const c = `${r + 1}`;
        t.appendChild(n(c, `axisY:${r}`, `Eje ${c} \u2014 elevaci\xF3n mirando en X`));
      });
    }
    function Ho() {
      var _a;
      const t = re.querySelector("#cad3d-floor-buttons");
      if (!t) return;
      const n = Math.round(((_a = ee.nPisos) == null ? void 0 : _a.val) ?? 0);
      if (n < 1) {
        t.style.display = "none";
        return;
      }
      t.style.display = "", t.innerHTML = "";
      const o = (s, i, r) => {
        const c = document.createElement("button");
        return c.textContent = s, c.dataset.view = i, c.title = r, c.style.cssText = "min-width:22px;padding:1px 5px;font-weight:bold", c.addEventListener("click", (u) => {
          var _a2;
          u.stopPropagation();
          const d = c.classList.contains("view-active");
          re.querySelectorAll("[data-view]").forEach((a) => a.classList.remove("view-active")), d ? (At("3d"), (_a2 = re.querySelector('[data-view="3d"]')) == null ? void 0 : _a2.classList.add("view-active")) : (At(i), c.classList.add("view-active"));
        }), c;
      }, l = document.createElement("span");
      l.textContent = "Planta:", l.style.cssText = "color:#888;font-size:10px;margin-right:2px;align-self:center", t.appendChild(l);
      for (let s = 0; s < n; s++) t.appendChild(o(`P${s + 1}`, `plan:${s}`, `Planta Piso ${s + 1}`));
    }
    function hs() {
      At("3d"), re.querySelectorAll("[data-view]").forEach((t) => t.classList.toggle("view-active", t.dataset.view === "3d"));
    }
    ze.view = (t) => {
      t = {
        planta: "plan",
        elevationX: "elevX",
        elevationY: "elevY",
        corte: "section"
      }[t] || t, At(t), re.querySelectorAll("[data-view]").forEach((o) => o.classList.toggle("view-active", o.dataset.view === t));
    };
    let mt = false, at = false, $t = false, tt = "line", it = [], He = null, Ke = null, Ue = null, en = null, ct = null;
    const Be = {
      node: true,
      grid: true,
      midpoint: true,
      track: true
    }, Gn = 0.5;
    let Vn = [], dt = null, Jt = null;
    const tn = [], $n = [], vs = 50;
    function nn() {
      tn.push({
        nodes: JSON.parse(JSON.stringify(e.nodes.val)),
        elements: JSON.parse(JSON.stringify(e.elements.val))
      }), tn.length > vs && tn.shift(), $n.length = 0;
    }
    function No() {
      if (tn.length === 0) return;
      $n.push({
        nodes: JSON.parse(JSON.stringify(e.nodes.val)),
        elements: JSON.parse(JSON.stringify(e.elements.val))
      });
      const t = tn.pop();
      e.nodes.val = t.nodes, e.elements.val = t.elements, _t(), e.elementInputs.val = {
        ...e.elementInputs.val
      };
    }
    function Oo() {
      if ($n.length === 0) return;
      tn.push({
        nodes: JSON.parse(JSON.stringify(e.nodes.val)),
        elements: JSON.parse(JSON.stringify(e.elements.val))
      });
      const t = $n.pop();
      e.nodes.val = t.nodes, e.elements.val = t.elements, _t(), e.elementInputs.val = {
        ...e.elementInputs.val
      };
    }
    const Ae = /* @__PURE__ */ new Set();
    let lt = null, Ht = [], wt = null, Mt = null;
    function Xn(t) {
      const n = _e();
      if (!n) return;
      const o = e.nodes.val, l = e.elements.val[t];
      if (!l) return;
      const s = [];
      for (let c = 0; c < l.length; c++) {
        const u = o[l[c]], d = o[l[(c + 1) % l.length]];
        s.push(u[0], u[1], u[2], d[0], d[1], d[2]);
      }
      const i = new Gt();
      i.setAttribute("position", new Vt(s, 3));
      const r = new gn(i, new xn({
        color: 16711935,
        linewidth: 3,
        depthTest: false
      }));
      r.renderOrder = 9998, r.__elemIdx = t, n.scene.add(r), Ht.push(r), n.render();
    }
    function Nt() {
      const t = _e();
      Ht.forEach((n) => {
        t == null ? void 0 : t.scene.remove(n), n.geometry.dispose(), n.material.dispose();
      }), Ht = [], t == null ? void 0 : t.render();
    }
    function Ot() {
      Mt && Mt.remove();
      const t = Z.size > 0 || R;
      if (Ae.size === 0 && !t) {
        Mt = null;
        return;
      }
      const n = document.createElement("div");
      n.style.cssText = "position:fixed;bottom:20px;left:50%;transform:translateX(-50%);background:var(--cad-bg);color:var(--cad-text);border:2px solid var(--cad-heading);border-radius:8px;padding:10px 16px;z-index:10000;font-family:monospace;font-size:13px;display:flex;gap:12px;align-items:center;box-shadow:0 4px 20px var(--cad-shadow);", n.innerHTML = `
      <span style="color:var(--cad-heading);font-weight:bold;">${Ae.size} elem.</span>
      <button id="sel-assign" style="padding:5px 8px;background:#336699;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:12px;" title="Asignar secci\xF3n">\u{1F4D0}</button>
      <button id="sel-info" style="padding:5px 8px;background:#225588;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:12px;" title="Info del elemento">\u{1F50D}</button>
      <button id="sel-hide" style="padding:5px 8px;background:#665500;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:12px;" title="Ocultar seleccionados">\u{1F441}\u200D\u{1F5E8}</button>
      <button id="sel-isolate" style="padding:5px 8px;background:#006633;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:12px;" title="Aislar (mostrar solo seleccionados)">\u25CE</button>
      <button id="sel-showall" style="padding:5px 8px;background:#444;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:12px;" title="Mostrar todo">\u21BA</button>
      <button id="sel-delete" style="padding:5px 8px;background:#cc3333;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:12px;" title="Eliminar seleccionados">\u{1F5D1}</button>
      <button id="sel-clear" style="padding:5px 8px;background:#555;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:12px;" title="Limpiar selecci\xF3n">\u2715</button>
    `, document.body.appendChild(n), Mt = n, n.querySelector("#sel-assign").addEventListener("click", () => {
        As([
          ...Ae
        ]);
      }), n.querySelector("#sel-info").addEventListener("click", () => {
        if (Ae.size === 1) {
          const o = [
            ...Ae
          ][0];
          Yo(o);
        } else {
          const o = [
            ...Ae
          ], l = e.nodes.val, s = e.elements.val;
          let i = 0, r = 0, c = 0, u = 0;
          o.forEach((a) => {
            const m = s[a];
            if (m) if (m.length === 2) {
              const $ = l[m[0]], y = l[m[1]], g = Math.abs(y[0] - $[0]), p = Math.abs(y[1] - $[1]), x = Math.abs(y[2] - $[2]);
              x > g && x > p ? i++ : r++;
            } else m.length === 3 ? c++ : m.length === 4 && u++;
          });
          const d = [];
          i && d.push(`${i} columnas`), r && d.push(`${r} vigas`), u && d.push(`${u} shells Q4`), c && d.push(`${c} triangulos`), alert(`${o.length} elementos seleccionados:
${d.join(", ")}`);
        }
      }), n.querySelector("#sel-hide").addEventListener("click", () => {
        Ae.forEach((o) => Z.add(o)), Ae.clear(), Nt(), Ot(), oe();
      }), n.querySelector("#sel-isolate").addEventListener("click", () => {
        R = true, fe.clear(), Ae.forEach((o) => fe.add(o)), Ae.clear(), Nt(), Ot(), oe();
      }), n.querySelector("#sel-showall").addEventListener("click", () => {
        Z.clear(), R = false, fe.clear(), Ot(), oe();
      }), n.querySelector("#sel-delete").addEventListener("click", () => {
        nn(), Ae.forEach((o) => le.add(o)), Ae.clear(), Nt(), Ot(), oe();
      }), n.querySelector("#sel-clear").addEventListener("click", () => {
        Ae.clear(), Nt(), Ot();
      });
    }
    function wn() {
      var _a;
      at = false, Ae.clear(), Nt(), Mt && (Mt.remove(), Mt = null), (_a = re.querySelector("#cad3d-select")) == null ? void 0 : _a.classList.remove("inspect-active");
      const n = _e();
      n && (n.controls.enabled = true);
    }
    function Yt() {
      if (lt) {
        const t = _e();
        t == null ? void 0 : t.scene.remove(lt), lt.geometry.dispose(), lt.material.dispose(), lt = null, t == null ? void 0 : t.render();
      }
      wt && (wt.remove(), wt = null);
    }
    function ys(t) {
      Kn();
      const n = _e();
      if (!n) return;
      const o = e.nodes.val[t];
      if (!o) return;
      Jt = t;
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
          o[0] - i[0] * l,
          o[1] - i[1] * l,
          o[2] - i[2] * l,
          o[0] + i[0] * l,
          o[1] + i[1] * l,
          o[2] + i[2] * l
        ]), u = new Gt();
        u.setAttribute("position", new Ws(c, 3));
        const d = new os({
          color: r,
          dashSize: 0.3,
          gapSize: 0.15,
          transparent: true,
          opacity: 0.4,
          depthTest: false
        }), a = new gn(u, d);
        a.computeLineDistances(), a.renderOrder = 9990, n.scene.add(a), Vn.push(a);
      }
      n.render();
    }
    function Kn() {
      const t = _e();
      for (const n of Vn) t == null ? void 0 : t.scene.remove(n), n.geometry.dispose(), n.material.dispose();
      Vn = [], Jt = null, dt && (dt.remove(), dt = null);
    }
    function Ro(t, n, o, l) {
      dt || (dt = document.createElement("div"), dt.style.cssText = "position:fixed;pointer-events:none;z-index:10002;background:var(--cad-bg);color:var(--cad-heading);font-family:monospace;font-size:11px;padding:2px 6px;border-radius:3px;white-space:nowrap;border:1px solid var(--cad-border);", document.body.appendChild(dt));
      const s = l.x - o.x, i = l.y - o.y, r = l.z - o.z, c = Math.sqrt(s * s + i * i + r * r), u = Math.abs(s), d = Math.abs(i), a = Math.abs(r);
      let m = "";
      u > d && u > a ? m = `\u0394X=${s.toFixed(2)}` : d > u && d > a ? m = `\u0394Y=${i.toFixed(2)}` : a > 0.01 && (m = `\u0394Z=${r.toFixed(2)}`), dt.textContent = `${c.toFixed(3)} m  ${m}`, dt.style.left = t + 20 + "px", dt.style.top = n - 10 + "px";
    }
    function $s(t, n) {
      const l = e.nodes.val[n];
      if (!l) return null;
      const s = new ue(l[0], l[1], l[2]), i = t.clone(), r = i.clone().sub(s), c = 0.3, u = Math.abs(r.x), d = Math.abs(r.y), a = Math.abs(r.z);
      return d < c && a < c && u > 0.01 ? new ue(i.x, s.y, s.z) : u < c && a < c && d > 0.01 ? new ue(s.x, i.y, s.z) : u < c && d < c && a > 0.01 ? new ue(s.x, s.y, i.z) : null;
    }
    function Mn() {
      var _a;
      const t = _e();
      Ke && t && (t.scene.remove(Ke), Ke.geometry.dispose(), Ke.material.dispose(), Ke = null), Ue && t && (t.scene.remove(Ue), Ue.geometry.dispose(), Ue.material.dispose(), Ue = null), Kn(), He = null, ct = null, $t = false, en && (en.remove(), en = null), (_a = re.querySelector("#cad3d-draw")) == null ? void 0 : _a.classList.remove("inspect-active"), t == null ? void 0 : t.render();
    }
    function ws() {
      en && en.remove();
      const t = document.createElement("div");
      t.style.cssText = "position:fixed;bottom:60px;left:50%;transform:translateX(-50%);background:var(--cad-bg);border:1px solid var(--cad-border);border-radius:6px;padding:6px 10px;z-index:10000;display:flex;gap:6px;align-items:center;font-family:monospace;font-size:11px;box-shadow:0 2px 10px var(--cad-shadow);";
      const n = (s) => `padding:4px 10px;border:1px solid ${s ? "#00ccff" : "#555"};background:${s ? "#003355" : "#333"};color:${s ? "#00ccff" : "#ccc"};border-radius:3px;cursor:pointer;font-size:11px;font-family:monospace;`, o = (s) => `padding:3px 6px;border:1px solid ${s ? "#33ff33" : "#444"};background:${s ? "#113311" : "#222"};color:${s ? "#33ff33" : "#888"};border-radius:3px;cursor:pointer;font-size:10px;`;
      t.innerHTML = `
      <span style="color:#00ccff;font-weight:bold;margin-right:4px;">Draw:</span>
      <button id="dt-line" style="${n(tt === "line")}">\u{1F4CF} Line</button>
      <button id="dt-arc" style="${n(tt === "arc")}">\u2312 Arc</button>
      <button id="dt-node" style="${n(tt === "node")}">\u2295 Node</button>
      <button id="dt-area" style="${n(tt === "area")}">\u25A2 Area</button>
      <span style="color:#666;margin:0 4px;">|</span>
      <span style="color:#888;font-size:10px;">Snap:</span>
      <button id="ds-node" style="${o(Be.node)}">Node</button>
      <button id="ds-grid" style="${o(Be.grid)}">Grid</button>
      <button id="ds-mid" style="${o(Be.midpoint)}">Mid</button>
      <button id="ds-track" style="${o(Be.track)}">Prolong</button>
      <span style="color:#666;margin:0 4px;">|</span>
      <span style="color:#888;font-size:10px;">Grid:</span>
      <input id="ds-gridsize" type="number" value="${Gn}" step="0.1" min="0.1" max="10" style="width:45px;background:#333;color:#fff;border:1px solid #555;padding:2px;font-size:10px;">
      <span style="color:#888;font-size:10px;">m</span>
      <span style="color:#666;margin:0 4px;">|</span>
      <button id="dt-undo" style="padding:3px 6px;background:#444;color:#ccc;border:1px solid #555;border-radius:3px;cursor:pointer;font-size:10px;" title="Ctrl+Z">\u21A9 Undo</button>
      <button id="dt-redo" style="padding:3px 6px;background:#444;color:#ccc;border:1px solid #555;border-radius:3px;cursor:pointer;font-size:10px;" title="Ctrl+Y">\u21AA Redo</button>
    `, document.body.appendChild(t), en = t;
      const l = () => {
        const s = t.querySelector("#dt-line"), i = t.querySelector("#dt-arc"), r = t.querySelector("#dt-node"), c = t.querySelector("#dt-area");
        s && (s.style.cssText = n(tt === "line")), i && (i.style.cssText = n(tt === "arc")), r && (r.style.cssText = n(tt === "node")), c && (c.style.cssText = n(tt === "area"));
        const u = t.querySelector("#ds-node"), d = t.querySelector("#ds-grid"), a = t.querySelector("#ds-mid"), m = t.querySelector("#ds-track");
        u && (u.style.cssText = o(Be.node)), d && (d.style.cssText = o(Be.grid)), a && (a.style.cssText = o(Be.midpoint)), m && (m.style.cssText = o(Be.track));
      };
      t.querySelector("#dt-line").addEventListener("click", () => {
        tt = "line", He = null, ct = null, it = [], l();
      }), t.querySelector("#dt-arc").addEventListener("click", () => {
        tt = "arc", He = null, ct = null, it = [], l();
      }), t.querySelector("#dt-node").addEventListener("click", () => {
        tt = "node", He = null, ct = null, it = [], l();
      }), t.querySelector("#dt-area").addEventListener("click", () => {
        tt = "area", He = null, ct = null, it = [], console.log("Area mode: click vertices del poligono. Doble-click o click cerca del 1er punto para cerrar."), l();
      }), t.querySelector("#ds-node").addEventListener("click", () => {
        Be.node = !Be.node, l();
      }), t.querySelector("#ds-grid").addEventListener("click", () => {
        Be.grid = !Be.grid, l();
      }), t.querySelector("#ds-mid").addEventListener("click", () => {
        Be.midpoint = !Be.midpoint, l();
      }), t.querySelector("#ds-track").addEventListener("click", () => {
        Be.track = !Be.track, Be.track || Kn(), l();
      }), t.querySelector("#ds-gridsize").addEventListener("change", (s) => {
        Be.gridSize = parseFloat(s.target.value) || 0.5;
      }), t.querySelector("#dt-undo").addEventListener("click", () => No()), t.querySelector("#dt-redo").addEventListener("click", () => Oo());
    }
    function Bo(t, n, o, l) {
      const s = l.getBoundingClientRect(), i = (t - s.left) / s.width * 2 - 1, r = -((n - s.top) / s.height) * 2 + 1, c = new ts();
      c.setFromCamera(new ns(i, r), o);
      const u = e.nodes.val, d = e.elements.val, a = 0.12;
      if (Be.node) {
        let y = -1, g = 1 / 0;
        for (let p = 0; p < u.length; p++) {
          const x = u[p], w = new ue(x[0], x[1], x[2]).project(o), z = Math.sqrt((w.x - i) ** 2 + (w.y - r) ** 2);
          z < a && z < g && (g = z, y = p);
        }
        if (y >= 0) return {
          nodeIdx: y,
          worldPos: new ue(...u[y]),
          snapType: "node"
        };
      }
      if (Be.midpoint) {
        let y = 1 / 0, g = null;
        for (const p of d) {
          if (p.length !== 2) continue;
          const x = u[p[0]], w = u[p[1]], z = new ue((x[0] + w[0]) / 2, (x[1] + w[1]) / 2, (x[2] + w[2]) / 2), S = z.clone().project(o), H = Math.sqrt((S.x - i) ** 2 + (S.y - r) ** 2);
          H < a * 0.8 && H < y && (y = H, g = z);
        }
        if (g) return {
          nodeIdx: null,
          worldPos: g,
          snapType: "mid"
        };
      }
      if (Be.grid) {
        const y = new Bt(new ue(0, 0, 1), 0), g = new ue();
        if (c.ray.intersectPlane(y, g)) {
          const p = Be.gridSize || Gn;
          return g.x = Math.round(g.x / p) * p, g.y = Math.round(g.y / p) * p, g.z = Math.round(g.z / p) * p, {
            nodeIdx: null,
            worldPos: g,
            snapType: "grid"
          };
        }
      }
      const m = new Bt(new ue(0, 0, 1), 0), $ = new ue();
      return c.ray.intersectPlane(m, $), {
        nodeIdx: null,
        worldPos: $,
        snapType: "free"
      };
    }
    function jo(t) {
      const n = _e();
      if (!n) return;
      const o = e.nodes.val;
      if (Ue && (n.scene.remove(Ue), Ue.geometry.dispose(), Ue.material.dispose(), Ue = null), t.worldPos) {
        const l = t.snapType === "node" ? 16776960 : t.snapType === "mid" ? 16711935 : t.snapType === "grid" ? 65535 : 8947848, s = t.snapType === "node" ? 0.08 : 0.06, i = t.snapType === "mid" ? new Js(s * 2, s * 2, s * 2) : new Ys(s, 12, 12), r = new Gs({
          color: l,
          transparent: true,
          opacity: 0.8,
          depthTest: false
        });
        Ue = new Vs(i, r), Ue.position.copy(t.worldPos), Ue.renderOrder = 9999, n.scene.add(Ue);
      }
      if (Ke && (n.scene.remove(Ke), Ke.geometry.dispose(), Ke.material.dispose(), Ke = null), He !== null && t.worldPos) {
        const l = o[He], s = new Gt();
        if (tt === "arc" && ct !== null) {
          const r = o[ct], c = Do(new ue(l[0], l[1], l[2]), new ue(r[0], r[1], r[2]), t.worldPos, 16), u = [];
          for (let d = 0; d < c.length - 1; d++) u.push(c[d].x, c[d].y, c[d].z, c[d + 1].x, c[d + 1].y, c[d + 1].z);
          s.setAttribute("position", new Vt(u, 3));
        } else s.setAttribute("position", new Vt([
          l[0],
          l[1],
          l[2],
          t.worldPos.x,
          t.worldPos.y,
          t.worldPos.z
        ], 3));
        const i = new xn({
          color: 65280,
          linewidth: 2,
          depthTest: false
        });
        Ke = new ao(s, i), tt === "arc" && ct !== null && (Ke = new gn(s, i)), Ke.renderOrder = 9999, n.scene.add(Ke);
      }
      n.render();
    }
    function Do(t, n, o, l) {
      const s = [];
      for (let i = 0; i <= l; i++) {
        const r = i / l, c = n.clone().multiplyScalar(2).sub(t.clone().multiplyScalar(0.5)).sub(o.clone().multiplyScalar(0.5)), u = (1 - r) * (1 - r), d = 2 * (1 - r) * r, a = r * r;
        s.push(new ue(u * t.x + d * c.x + a * o.x, u * t.y + d * c.y + a * o.y, u * t.z + d * c.z + a * o.z));
      }
      return s;
    }
    function Un(t) {
      if (t.nodeIdx !== null) return t.nodeIdx;
      if (!t.worldPos) return -1;
      const n = e.nodes.val, o = 1e-3;
      for (let s = 0; s < n.length; s++) if (Math.abs(n[s][0] - t.worldPos.x) < o && Math.abs(n[s][1] - t.worldPos.y) < o && Math.abs(n[s][2] - t.worldPos.z) < o) return s;
      nn();
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
    function Ms(t) {
      var _a;
      if (tt === "node") {
        if (!t.worldPos) return;
        nn();
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
      if (tt === "line") {
        const n = Un(t);
        if (n < 0) return;
        if (He === null) {
          He = n;
          return;
        }
        if (n === He) return;
        nn();
        const o = [
          ...e.elements.val
        ];
        o.some((s) => s.length === 2 && (s[0] === He && s[1] === n || s[1] === He && s[0] === n)) || (o.push([
          He,
          n
        ]), e.elements.val = o, _t(), e.elementInputs.val = {
          ...e.elementInputs.val
        }), He = n;
        return;
      }
      if (tt === "arc") {
        const n = Un(t);
        if (n < 0) return;
        if (He === null) {
          He = n;
          return;
        }
        if (ct === null) {
          if (n === He) return;
          ct = n;
          return;
        }
        if (n === He || n === ct) return;
        const o = e.nodes.val, l = new ue(...o[He]), s = new ue(...o[ct]), i = new ue(...o[n]), r = Math.max(4, Math.round(((_a = ee.nSubViga) == null ? void 0 : _a.val) ?? 8)), c = Do(l, s, i, r);
        nn();
        const u = [
          ...e.nodes.val
        ], d = [
          ...e.elements.val
        ];
        let a = He;
        for (let m = 1; m < c.length; m++) {
          let $;
          if (m === c.length - 1) $ = n;
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
        e.nodes.val = u, e.elements.val = d, _t(), e.elementInputs.val = {
          ...e.elementInputs.val
        }, He = n, ct = null;
        return;
      }
      if (tt === "area") {
        const n = Un(t);
        if (n < 0) return;
        if (it.length >= 3 && n === it[0]) {
          nn();
          const o = [
            ...e.nodes.val
          ], l = [
            ...e.elements.val
          ], s = it.map((i) => o[i]);
          try {
            const i = Lt({
              points: s,
              polygon: Array.from({
                length: s.length
              }, (c, u) => u),
              maxMeshSize: Gn || 0.5
            }), r = [];
            for (const c of i.nodes) {
              let u = -1;
              for (let d = 0; d < o.length; d++) {
                const a = Math.abs(o[d][0] - c[0]), m = Math.abs(o[d][1] - c[1]), $ = Math.abs(o[d][2] - c[2]);
                if (a < 0.01 && m < 0.01 && $ < 0.01) {
                  u = d;
                  break;
                }
              }
              u >= 0 ? r.push(u) : (r.push(o.length), o.push([
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
            e.nodes.val = o, e.elements.val = l, _t(), console.log(`Area: ${i.elements.length} triangulos creados desde ${it.length} vertices`);
          } catch (i) {
            console.error("Area mesh failed:", i.message);
          }
          it = [];
          return;
        }
        if (it.push(n), console.log(`Area vertex ${it.length}: node ${n}`), it.length >= 2) {
          const o = it[it.length - 2], l = e.nodes.val, s = _e();
          if (s) {
            const i = new Gt().setFromPoints([
              new ue(...l[o]),
              new ue(...l[n])
            ]), r = new gn(i, new xn({
              color: 65280,
              linewidth: 2
            }));
            r.name = "area-preview", s.scene.add(r), s.render();
          }
        }
        return;
      }
    }
    function Wo(t) {
      const n = _e();
      if (!n) return;
      lt && (n.scene.remove(lt), lt.geometry.dispose(), lt.material.dispose());
      const o = e.nodes.val, l = e.elements.val[t];
      if (!l) return;
      const s = [];
      for (let r = 0; r < l.length; r++) {
        const c = o[l[r]], u = o[l[(r + 1) % l.length]];
        s.push(c[0], c[1], c[2], u[0], u[1], u[2]);
      }
      const i = new Gt();
      i.setAttribute("position", new Vt(s, 3)), lt = new gn(i, new xn({
        color: 16776960,
        linewidth: 3,
        depthTest: false
      })), lt.renderOrder = 9999, n.scene.add(lt), n.render();
    }
    function Zn(t) {
      const n = _e();
      if (!n) return -1;
      const o = n.renderer.domElement.getBoundingClientRect(), l = new ns((t.clientX - o.left) / o.width * 2 - 1, -((t.clientY - o.top) / o.height) * 2 + 1), s = new ts();
      s.setFromCamera(l, n.controls.object), s.params.Line = {
        threshold: 0.5
      };
      const i = e.nodes.val, r = e.elements.val;
      if (i.length === 0 || r.length === 0) return -1;
      let c = 1 / 0, u = -1;
      const d = s.ray;
      for (let m = 0; m < r.length; m++) {
        const $ = r[m];
        if ($.length === 2) {
          const y = new ue(...i[$[0]]), g = new ue(...i[$[1]]), p = new Xs(y, g), x = new ue(), w = new ue();
          d.closestPointToPoint(p.getCenter(new ue()), x), p.closestPointToPoint(x, true, w);
          const z = x.distanceTo(w);
          z < c && (c = z, u = m);
        } else if ($.length === 3) {
          const y = new ue(...i[$[0]]), g = new ue(...i[$[1]]), p = new ue(...i[$[2]]), x = new ue();
          if (d.intersectTriangle(y, g, p, false, x)) {
            const z = d.origin.distanceTo(x);
            z < c && (c = z, u = m);
          } else {
            const z = y.add(g).add(p).divideScalar(3), S = new ue();
            d.closestPointToPoint(z, S);
            const H = S.distanceTo(z);
            H < c && (c = H, u = m);
          }
        } else if ($.length === 4) {
          const y = new ue(...i[$[0]]), g = new ue(...i[$[1]]), p = new ue(...i[$[2]]), x = new ue(...i[$[3]]), w = new ue();
          let z = d.intersectTriangle(y, g, p, false, w);
          if (z) {
            const S = d.origin.distanceTo(w);
            S < c && (c = S, u = m);
          }
          if (z = d.intersectTriangle(y, p, x, false, w), z) {
            const S = d.origin.distanceTo(w);
            S < c && (c = S, u = m);
          }
        }
      }
      const { extent: a } = Ct();
      return c < a * 0.1 ? u : -1;
    }
    function j(t, n = 4) {
      return Math.abs(t) < 1e-10 ? "0" : Math.abs(t) >= 1e6 ? t.toExponential(2) : Math.abs(t) >= 100 ? t.toFixed(1) : t.toFixed(n);
    }
    function Qn(t, n, o = 12) {
      var _a;
      const l = Math.min(t.length, o), s = Math.min(((_a = t[0]) == null ? void 0 : _a.length) || 0, o);
      let i = "<table>";
      if (n) {
        i += '<tr><td class="header"></td>';
        for (let r = 0; r < s; r++) i += `<td class="header">${n[r] || r}</td>`;
        i += "</tr>";
      }
      for (let r = 0; r < l; r++) {
        i += "<tr>", n && (i += `<td class="header">${n[r] || r}</td>`);
        for (let c = 0; c < s; c++) {
          const u = t[r][c], d = Math.abs(u) > 1e-10 ? "nonzero" : "";
          i += `<td class="${d}">${j(u, 2)}</td>`;
        }
        i += "</tr>";
      }
      return i += "</table>", i;
    }
    function ie(t, n) {
      return `<span class="frac"><span class="frac-num">${t}</span><span class="frac-den">${n}</span></span>`;
    }
    function F(t, n, o) {
      let l = `<span class="var">${t}</span>`;
      return n && (l += `<sub>${n}</sub>`), l;
    }
    function ks(t, n, o, l, s, i, r) {
      const c = `${ie(F("E") + "\xB7" + F("A"), F("L"))}`, u = `${ie("12\xB7" + F("E") + "\xB7" + F("I", "z"), F("L") + "\xB3")}`, d = `${ie("12\xB7" + F("E") + "\xB7" + F("I", "y"), F("L") + "\xB3")}`, a = `${ie(F("G") + "\xB7" + F("J"), F("L"))}`, m = `${ie("4\xB7" + F("E") + "\xB7" + F("I", "y"), F("L"))}`, $ = `${ie("4\xB7" + F("E") + "\xB7" + F("I", "z"), F("L"))}`;
      return `<div class="fem-eq eq-box">
      <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">Coeficientes de rigidez:</strong></div>
      <div>${c} = ${ie(j(t) + "\xB7" + j(n), j(r))} = <span class="highlight">${j(t * n / r)}</span></div>
      <div>${u} = ${ie("12\xB7" + j(t) + "\xB7" + j(o), j(r) + "\xB3")} = <span class="highlight">${j(12 * t * o / r ** 3)}</span></div>
      <div>${d} = ${ie("12\xB7" + j(t) + "\xB7" + j(l), j(r) + "\xB3")} = <span class="highlight">${j(12 * t * l / r ** 3)}</span></div>
      <div>${a} = ${ie(j(s) + "\xB7" + j(i), j(r))} = <span class="highlight">${j(s * i / r)}</span></div>
      <div>${m} = ${ie("4\xB7" + j(t) + "\xB7" + j(l), j(r))} = <span class="highlight">${j(4 * t * l / r)}</span></div>
      <div>${$} = ${ie("4\xB7" + j(t) + "\xB7" + j(o), j(r))} = <span class="highlight">${j(4 * t * o / r)}</span></div>
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
    function Ss(t) {
      if (t.length === 2) {
        const o = qt(t[1], t[0]), l = Ut(o), s = o[0] / l, i = o[1] / l, r = o[2] / l;
        return `<div class="fem-eq eq-box">
        <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">Cosenos directores:</strong></div>
        <div>${F("l")} = cos(\u03B1) = ${ie("\u0394x", F("L"))} = ${ie(j(o[0]), j(l))} = <span class="highlight">${j(s)}</span></div>
        <div>${F("m")} = cos(\u03B2) = ${ie("\u0394y", F("L"))} = ${ie(j(o[1]), j(l))} = <span class="highlight">${j(i)}</span></div>
        <div>${F("n")} = cos(\u03B3) = ${ie("\u0394z", F("L"))} = ${ie(j(o[2]), j(l))} = <span class="highlight">${j(r)}</span></div>
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
    function zs() {
      return `<div class="fem-eq">
      ${F("K", "global")} = ${F("T")}<sup>T</sup> \xB7 ${F("k", "local")} \xB7 ${F("T")}
    </div>`;
    }
    function Is(t) {
      const n = t.map((o) => `6\xB7${o} = ${6 * o}`).join(", ");
      return `<div class="fem-eq eq-box">
      <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">Ensamblaje en K global:</strong></div>
      <div>${F("K", "global")}[${F("i")}, ${F("j")}] += ${F("K", "elem")}[${F("i")}, ${F("j")}]</div>
      <div style="margin-top:4px">donde ${F("i")}, ${F("j")} \u2208 {${n}} + (0..5)</div>
    </div>`;
    }
    function Es(t) {
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
    function eo(t, n) {
      const o = t.length;
      let l = '<table><tr><td class="hdr"></td>';
      for (let s = 0; s < o; s++) l += `<td class="hdr">${n[s] || s}</td>`;
      l += "</tr>";
      for (let s = 0; s < o; s++) {
        l += `<tr><td class="hdr">${n[s] || s}</td>`;
        for (let i = 0; i < o; i++) {
          const r = t[s][i], c = (s === i ? "diag " : "") + (Math.abs(r) > 1e-10 ? "nz" : "");
          l += `<td class="${c}">${j(r, 2)}</td>`;
        }
        l += "</tr>";
      }
      return l += "</table>", l;
    }
    function Jo() {
      const t = "0", n = ie(F("EA"), F("L")), o = ie("\u2212" + F("EA"), F("L")), l = ie("12" + F("EI", "z"), F("L") + "\xB3"), s = ie("\u221212" + F("EI", "z"), F("L") + "\xB3"), i = ie("12" + F("EI", "y"), F("L") + "\xB3"), r = ie("\u221212" + F("EI", "y"), F("L") + "\xB3"), c = ie("6" + F("EI", "z"), F("L") + "\xB2"), u = ie("\u22126" + F("EI", "z"), F("L") + "\xB2"), d = ie("6" + F("EI", "y"), F("L") + "\xB2"), a = ie("\u22126" + F("EI", "y"), F("L") + "\xB2"), m = ie(F("GJ"), F("L")), $ = ie("\u2212" + F("GJ"), F("L")), y = ie("4" + F("EI", "z"), F("L")), g = ie("2" + F("EI", "z"), F("L")), p = ie("4" + F("EI", "y"), F("L")), x = ie("2" + F("EI", "y"), F("L")), w = '<span style="color:var(--fem-eq-dots);font-style:italic">sym</span>', z = [
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
          x,
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
          g
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
          x,
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
          g,
          t,
          u,
          t,
          t,
          t,
          y
        ]
      ];
      let _ = '<div style="margin-bottom:8px;color:var(--fem-eq-sub);font-size:11px;font-family:monospace">Eq. 6.1 \u2014 Matriz de rigidez de elemento de p\xF3rtico espacial</div>';
      _ += '<table><tr><td class="hdr"></td>';
      for (const b of S) _ += `<td class="hdr">${b}</td>`;
      _ += "</tr>";
      for (let b = 0; b < 12; b++) {
        _ += `<tr><td class="hdr">${z[b]}</td>`;
        for (let f = 0; f < 12; f++) if (f < b) _ += `<td style="color:var(--fem-border-cell)">${f === 0 && b > 0 ? w : ""}</td>`;
        else {
          const v = H[b][f], M = (b === f ? "diag " : "") + (v !== "0" ? "nz" : "");
          _ += `<td class="${M}">${v}</td>`;
        }
        _ += "</tr>";
      }
      return _ += "</table>", _;
    }
    function Ls(t, n, o, l, s, i, r) {
      return `<div class="coeff-grid">${[
        {
          name: `${ie(F("E") + "\xB7" + F("A"), F("L"))}`,
          calc: `${ie(j(t) + "\xD7" + j(n), j(r))}`,
          val: t * n / r,
          label: "Axial"
        },
        {
          name: `${ie("12\xB7" + F("E") + "\xB7" + F("I", "z"), F("L") + "\xB3")}`,
          calc: `${ie("12\xD7" + j(t) + "\xD7" + j(o), j(r) + "\xB3")}`,
          val: 12 * t * o / r ** 3,
          label: "Corte Y"
        },
        {
          name: `${ie("6\xB7" + F("E") + "\xB7" + F("I", "z"), F("L") + "\xB2")}`,
          calc: `${ie("6\xD7" + j(t) + "\xD7" + j(o), j(r) + "\xB2")}`,
          val: 6 * t * o / r ** 2,
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
          calc: `${ie("4\xD7" + j(t) + "\xD7" + j(o), j(r))}`,
          val: 4 * t * o / r,
          label: "Flexi\xF3n Z (4EI/L)"
        },
        {
          name: `${ie("2\xB7" + F("E") + "\xB7" + F("I", "z"), F("L"))}`,
          calc: `${ie("2\xD7" + j(t) + "\xD7" + j(o), j(r))}`,
          val: 2 * t * o / r,
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
    function to(t, n, o, l) {
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
    `, document.body.appendChild(i), (_a = i.querySelector("#fem-full-close")) == null ? void 0 : _a.addEventListener("click", () => i.remove()), i.addEventListener("click", (r) => {
        r.target === i && i.remove();
      });
    }
    function Yo(t) {
      var _a, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l, _m, _n2, _o2, _p, _q, _r, _s2, _t2, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I, _J, _K, _L;
      wt && wt.remove();
      const n = e.nodes.val, o = e.elements.val, l = o[t], s = l.map((b) => n[b]), i = l.length === 2, r = ((_a = e.elementInputs) == null ? void 0 : _a.val) || {}, c = (_b = e.deformOutputs) == null ? void 0 : _b.val, u = (_c = e.analyzeOutputs) == null ? void 0 : _c.val;
      if (i) {
        const b = Ut(qt(s[1], s[0])), f = ((_d = r.elasticities) == null ? void 0 : _d.get(t)) ?? 0, v = ((_e2 = r.areas) == null ? void 0 : _e2.get(t)) ?? 0, M = ((_f = r.momentsOfInertiaZ) == null ? void 0 : _f.get(t)) ?? 0, L = ((_g = r.momentsOfInertiaY) == null ? void 0 : _g.get(t)) ?? 0, N = ((_h = r.shearModuli) == null ? void 0 : _h.get(t)) ?? 0, q = ((_i = r.torsionalConstants) == null ? void 0 : _i.get(t)) ?? 0;
        `${l[0]}${l[1]}${j(b)}${j(f)}${j(v)}${j(M)}${j(L)}${j(N)}${j(q)}`;
      } else {
        const b = ((_j = r.elasticities) == null ? void 0 : _j.get(t)) ?? 0, f = ((_k = r.thicknesses) == null ? void 0 : _k.get(t)) ?? 0, v = ((_l = r.poissonsRatios) == null ? void 0 : _l.get(t)) ?? 0;
        `${l.join(", ")}${j(b)}${j(f)}${j(v)}`;
      }
      let d = "", a = "", m = "", $ = "", y = "", g = "", p = "", x = "", w = null, z = null, S = null, H = [];
      try {
        if (w = Tn(s, r, t), z = Fn(s), S = bt(uo(z), bt(w, z)), H = i ? [
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
          const M = Ut(qt(s[1], s[0])), L = ((_m = r.elasticities) == null ? void 0 : _m.get(t)) ?? 0, N = ((_n2 = r.areas) == null ? void 0 : _n2.get(t)) ?? 0, q = ((_o2 = r.momentsOfInertiaZ) == null ? void 0 : _o2.get(t)) ?? 0, E = ((_p = r.momentsOfInertiaY) == null ? void 0 : _p.get(t)) ?? 0, P = ((_q = r.shearModuli) == null ? void 0 : _q.get(t)) ?? 0, C = ((_r = r.torsionalConstants) == null ? void 0 : _r.get(t)) ?? 0;
          $ = ks(L, N, q, E, P, C, M);
        }
        y = Ss(s), g = zs(), p = Is(l), x = Es(i);
        const b = '<button class="fem-expand-btn" data-full="kLocal">\u26F6 Ver completa</button>', f = '<button class="fem-expand-btn" data-full="T">\u26F6 Ver completa</button>', v = '<button class="fem-expand-btn" data-full="kGlobal">\u26F6 Ver completa</button>';
        d = `<div class="matrix-label">k_local (${w.length}\xD7${w.length}) ${b}</div>${Qn(w, H)}`, a = `<div class="matrix-label">T \u2014 Transformaci\xF3n (${z.length}\xD7${z.length}) ${f}</div>${Qn(z, H)}`, m = `<div class="matrix-label">K_global = T^T \xB7 k \xB7 T ${v}</div>${Qn(S, H)}`;
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
        ], E = [];
        for (const W of l) {
          const D = ((_y = c.deformations) == null ? void 0 : _y.get(W)) || [
            0,
            0,
            0,
            0,
            0,
            0
          ];
          E.push(...D);
        }
        let P = [];
        try {
          P = bt(z, E);
        } catch {
          P = new Array(12).fill(0);
        }
        let C = [];
        try {
          C = bt(w, P);
        } catch {
          C = new Array(12).fill(0);
        }
        const J = (W, D) => W.map((X, ce) => `<span style="color:${Math.abs(X) > 1e-10 ? "var(--fem-nonzero)" : "var(--fem-eq-dots)"}">${D[ce % 6]}=${j(X)}</span>`).join(", "), U = [
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
        `${F("u", "global")}${l.map((W, D) => `<span style="color:var(--fem-label)">nodo ${W}:</span> ${q.map((X, ce) => `<span style="color:${Math.abs(E[D * 6 + ce]) > 1e-10 ? "var(--fem-eq-var)" : "var(--fem-eq-dots)"}">${j(E[D * 6 + ce])}</span>`).join(", ")}`).join(" | ")}${F("u", "local")}${F("T")}${F("u", "global")}${F("u", "local")}${J(P, [
          ...q,
          ...q
        ])}${F("f", "local")}${F("k", "local")}${F("u", "local")}${F("f", "local")}${C.map((W, D) => `<span style="color:${Math.abs(W) > 1e-10 ? "var(--fem-nonzero)" : "var(--fem-eq-dots)"}">${U[D]}=${j(W)}</span>`).join(", ")}${F("P", "1")}${F("N", "i")}${j(C[0])}${F("P", "7")}${F("N", "j")}${j(C[6])}${F("P", "2")}${F("V", "y,i")}${j(C[1])}${F("P", "8")}${F("V", "y,j")}${j(C[7])}${F("P", "3")}${F("V", "z,i")}${j(C[2])}${F("P", "9")}${F("V", "z,j")}${j(C[8])}${F("P", "4")}${F("M", "x,i")}${j(C[3])}${F("P", "10")}${F("M", "x,j")}${j(C[9])}${F("P", "5")}${F("M", "y,i")}${j(C[4])}${F("P", "11")}${F("M", "y,j")}${j(C[10])}${F("P", "6")}${F("M", "z,i")}${j(C[5])}${F("P", "12")}${F("M", "z,j")}${j(C[11])}${b ? b.map((W) => j(W)).join(", ") : "\u2014"}${f ? f.map((W) => j(W)).join(", ") : "\u2014"}${v ? v.map((W) => j(W)).join(", ") : "\u2014"}${M ? M.map((W) => j(W)).join(", ") : "\u2014"}${L ? L.map((W) => j(W)).join(", ") : "\u2014"}${N ? N.map((W) => j(W)).join(", ") : "\u2014"}`;
      } else if (u && i) {
        const b = (_z = u.normals) == null ? void 0 : _z.get(t), f = (_A = u.shearsY) == null ? void 0 : _A.get(t), v = (_B = u.shearsZ) == null ? void 0 : _B.get(t), M = (_C = u.torsions) == null ? void 0 : _C.get(t), L = (_D = u.bendingsY) == null ? void 0 : _D.get(t), N = (_E = u.bendingsZ) == null ? void 0 : _E.get(t);
        `${b ? b.map((q) => j(q)).join(", ") : "\u2014"}${f ? f.map((q) => j(q)).join(", ") : "\u2014"}${v ? v.map((q) => j(q)).join(", ") : "\u2014"}${M ? M.map((q) => j(q)).join(", ") : "\u2014"}${L ? L.map((q) => j(q)).join(", ") : "\u2014"}${N ? N.map((q) => j(q)).join(", ") : "\u2014"}`;
      } else if (u && !i) {
        const b = (_F = u.bendingXX) == null ? void 0 : _F.get(t), f = (_G = u.bendingYY) == null ? void 0 : _G.get(t), v = (_H = u.bendingXY) == null ? void 0 : _H.get(t), M = (_I = u.membraneXX) == null ? void 0 : _I.get(t), L = (_J = u.membraneYY) == null ? void 0 : _J.get(t), N = (_K = u.membraneXY) == null ? void 0 : _K.get(t);
        `${b ? b.map((q) => j(q)).join(", ") : "\u2014"}${f ? f.map((q) => j(q)).join(", ") : "\u2014"}${v ? v.map((q) => j(q)).join(", ") : "\u2014"}${M ? M.map((q) => j(q)).join(", ") : "\u2014"}${L ? L.map((q) => j(q)).join(", ") : "\u2014"}${N ? N.map((q) => j(q)).join(", ") : "\u2014"}`;
      }
      `${l[0]}`, 6 * l[0], 6 * l[0] + 5, `${l[1]}`, 6 * l[1], 6 * l[1] + 5, l.length === 3 && (`${l[2]}`, 6 * l[2], 6 * l[2] + 5), n.length * 6, n.length * 6, wt = ca(t, n, o, r, c, u), wt.id = "fem-inspect-panel", document.body.appendChild(wt), (_L = wt.querySelector("#er-close")) == null ? void 0 : _L.addEventListener("click", () => Yt());
      const _ = i ? (() => {
        var _a2, _b2, _c2, _d2, _e3, _f2;
        const b = Ut(qt(s[1], s[0])), f = ((_a2 = r.elasticities) == null ? void 0 : _a2.get(t)) ?? 0, v = ((_b2 = r.areas) == null ? void 0 : _b2.get(t)) ?? 0, M = ((_c2 = r.momentsOfInertiaZ) == null ? void 0 : _c2.get(t)) ?? 0, L = ((_d2 = r.momentsOfInertiaY) == null ? void 0 : _d2.get(t)) ?? 0, N = ((_e3 = r.shearModuli) == null ? void 0 : _e3.get(t)) ?? 0, q = ((_f2 = r.torsionalConstants) == null ? void 0 : _f2.get(t)) ?? 0;
        return Ls(f, v, M, L, N, q, b);
      })() : void 0;
      wt.querySelectorAll("[data-full]").forEach((b) => {
        b.addEventListener("click", (f) => {
          f.stopPropagation();
          const v = b.dataset.full;
          if (v === "kLocal" && w) {
            const M = i ? Jo() : "<em>Shell 18\xD718 \u2014 ver tabla num\xE9rica</em>";
            to(`Elemento ${t} \u2014 Rigidez Local k_local`, M, eo(w, H), _);
          } else if (v === "T" && z) to(`Elemento ${t} \u2014 Transformaci\xF3n T`, y, eo(z, H));
          else if (v === "kGlobal" && S) {
            const M = i ? Jo() : "<em>Shell 18\xD718</em>";
            to(`Elemento ${t} \u2014 Rigidez Global K = T^T \xB7 k \xB7 T`, M, eo(S, H), _);
          }
        });
      });
    }
    function Go() {
      const l = [], s = [];
      for (let g = 0; g <= 8; g++) {
        const p = g / 8, x = 30 * p, z = 12 * (1 - p) * (1 - p * 0.3) / 2, S = l.length;
        if (l.push([
          -z,
          -z,
          x
        ]), l.push([
          z,
          -z,
          x
        ]), l.push([
          z,
          z,
          x
        ]), l.push([
          -z,
          z,
          x
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
        ]), g > 0 && g < 8 && (s.push([
          S,
          S + 2
        ]), s.push([
          S + 1,
          S + 3
        ])), g > 0) {
          const H = S - 4;
          for (let _ = 0; _ < 4; _++) s.push([
            H + _,
            S + _
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
      for (let g = 0; g < 4; g++) i.set(g, [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
      const r = l.length - 4, c = /* @__PURE__ */ new Map();
      for (let g = 0; g < 4; g++) c.set(r + g, [
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
        elasticities: new Map(s.map((g, p) => [
          p,
          u
        ])),
        shearModuli: new Map(s.map((g, p) => [
          p,
          d
        ])),
        areas: new Map(s.map((g, p) => [
          p,
          a
        ])),
        momentsOfInertiaZ: new Map(s.map((g, p) => [
          p,
          m
        ])),
        momentsOfInertiaY: new Map(s.map((g, p) => [
          p,
          m
        ])),
        torsionalConstants: new Map(s.map((g, p) => [
          p,
          $
        ]))
      };
      e.elementInputs && (e.elementInputs.val = y);
      try {
        const g = pt(l, s, {
          supports: i,
          loads: c
        }, y);
        g && e.deformOutputs && (e.deformOutputs.val = g);
      } catch (g) {
        console.warn("Eiffel deform:", g.message);
      }
      setTimeout(() => Xe(), 50), Le(), console.log(`Torre Eiffel: ${l.length} nodos, ${s.length} elementos, H=30m`);
    }
    function Vo() {
      const l = [], s = [];
      for (let y = 0; y <= 20; y++) {
        const g = y / 20, p = 20 * g, x = 20 * (1 - Math.pow(2 * g - 1, 2)), w = 2;
        l.push([
          p,
          -2 / 2,
          x
        ]), l.push([
          p,
          w / 2,
          x
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
        elasticities: new Map(s.map((y, g) => [
          g,
          c
        ])),
        shearModuli: new Map(s.map((y, g) => [
          g,
          u
        ])),
        areas: new Map(s.map((y, g) => [
          g,
          d
        ])),
        momentsOfInertiaZ: new Map(s.map((y, g) => [
          g,
          a
        ])),
        momentsOfInertiaY: new Map(s.map((y, g) => [
          g,
          a
        ])),
        torsionalConstants: new Map(s.map((y, g) => [
          g,
          m
        ]))
      };
      e.elementInputs && (e.elementInputs.val = $);
      try {
        const y = pt(l, s, {
          supports: i,
          loads: r
        }, $);
        y && e.deformOutputs && (e.deformOutputs.val = y);
      } catch (y) {
        console.warn("Arco:", y.message);
      }
      setTimeout(() => Xe(), 50), Le(), console.log(`Arco Gateway: ${l.length} nodos, ${s.length} elem, span=20m, H=20m`);
    }
    function Xo() {
      const i = [], r = [];
      for (let p = 0; p <= 16; p++) {
        const x = 60 * p / 16;
        i.push([
          x,
          -6 / 2,
          8
        ]), i.push([
          x,
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
        const x = 60 * p / 16, w = i.length;
        i.push([
          x,
          -6 / 2,
          0
        ]);
        const z = i.length;
        i.push([
          x,
          6 / 2,
          0
        ]);
        const S = i.length;
        i.push([
          x,
          -6 / 2,
          28
        ]);
        const H = i.length;
        i.push([
          x,
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
        const x = i[p][0];
        for (let w = 0; w <= 16; w++) {
          const z = 60 * w / 16;
          if (Math.abs(z - x) > 60 * 0.05 && Math.abs(z - x) < 60 * 0.45) {
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
      const $ = 2e8, y = 77e6, g = {
        elasticities: new Map(r.map((p, x) => [
          x,
          $
        ])),
        shearModuli: new Map(r.map((p, x) => [
          x,
          y
        ])),
        areas: new Map(r.map((p, x) => [
          x,
          x < 16 * 3 + 1 ? 0.02 : 1e-3
        ])),
        momentsOfInertiaZ: new Map(r.map((p, x) => [
          x,
          5e-5
        ])),
        momentsOfInertiaY: new Map(r.map((p, x) => [
          x,
          2e-5
        ])),
        torsionalConstants: new Map(r.map((p, x) => [
          x,
          1e-5
        ]))
      };
      e.elementInputs && (e.elementInputs.val = g);
      try {
        const p = pt(i, r, {
          supports: a,
          loads: m
        }, g);
        p && e.deformOutputs && (e.deformOutputs.val = p);
      } catch (p) {
        console.warn("Puente:", p.message);
      }
      setTimeout(() => Xe(), 50), Le(), console.log(`Puente atirantado: ${i.length} nodos, ${r.length} elem, span=60m`);
    }
    function Ko() {
      const i = [], r = [];
      for (let x = 0; x <= 12; x++) {
        const w = x * 3.5, z = x * 5 * Math.PI / 180;
        for (let S = 0; S < 6; S++) {
          const H = z + 2 * Math.PI * S / 6, _ = 5 * Math.cos(H), b = 5 * Math.sin(H);
          i.push([
            _,
            b,
            w
          ]);
        }
      }
      for (let x = 0; x <= 12; x++) {
        const w = x * 6;
        for (let z = 0; z < 6; z++) r.push([
          w + z,
          w + (z + 1) % 6
        ]);
        if (x < 12) {
          const z = (x + 1) * 6;
          for (let S = 0; S < 6; S++) r.push([
            w + S,
            z + S
          ]), r.push([
            w + S,
            z + (S + 1) % 6
          ]);
        }
      }
      for (let x = 0; x <= 12; x++) {
        const w = i.length;
        i.push([
          0,
          0,
          x * 3.5
        ]);
        const z = x * 6;
        for (let S = 0; S < 6; S++) r.push([
          w,
          z + S
        ]);
      }
      const c = 13 * 6;
      for (let x = 0; x < 12; x++) r.push([
        c + x,
        c + x + 1
      ]);
      const u = /* @__PURE__ */ new Map();
      for (let x = 0; x < 6; x++) u.set(x, [
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
      for (let x = 1; x <= 12; x++) {
        const w = 10 * x / 12, z = x * 6;
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
      const a = 2e8, m = 77e6, $ = 8e-3, y = 1e-5, g = 5e-6, p = {
        elasticities: new Map(r.map((x, w) => [
          w,
          a
        ])),
        shearModuli: new Map(r.map((x, w) => [
          w,
          m
        ])),
        areas: new Map(r.map((x, w) => [
          w,
          $
        ])),
        momentsOfInertiaZ: new Map(r.map((x, w) => [
          w,
          y
        ])),
        momentsOfInertiaY: new Map(r.map((x, w) => [
          w,
          y
        ])),
        torsionalConstants: new Map(r.map((x, w) => [
          w,
          g
        ]))
      };
      e.elementInputs && (e.elementInputs.val = p);
      try {
        const x = pt(i, r, {
          supports: u,
          loads: d
        }, p);
        x && e.deformOutputs && (e.deformOutputs.val = x);
      } catch (x) {
        console.warn("Twisted:", x.message);
      }
      setTimeout(() => Xe(), 50), Le(), console.log(`Torre Twist: ${i.length} nodos, ${r.length} elem, 12 pisos, twist=5deg/piso`);
    }
    function Uo() {
      const s = [], i = [];
      for (let p = 0; p <= 20; p++) {
        const x = p / 20, w = p * 3;
        let z = 8 * (1 - x * 0.7);
        x > 0.4 && (z *= 0.85), x > 0.7 && (z *= 0.7);
        const S = s.length;
        s.push([
          0,
          0,
          w
        ]);
        for (let H = 0; H < 3; H++) {
          const _ = H * 2 * Math.PI / 3 - Math.PI / 2, b = z * Math.cos(_), f = z * Math.sin(_), v = s.length;
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
          const _ = S + 1 + H * 2, b = S + 1 + (H + 1) % 3 * 2;
          i.push([
            _,
            b
          ]);
        }
        if (p < 20) {
          const _ = S + 7;
          i.push([
            S,
            _
          ]);
          for (let b = 0; b < 3; b++) i.push([
            S + 1 + b * 2,
            _ + 1 + b * 2
          ]), i.push([
            S + 2 + b * 2,
            _ + 2 + b * 2
          ]), i.push([
            S + 1 + b * 2,
            _ + 2 + b * 2
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
        const x = p * c, w = 5 * p / 20;
        u.set(x, [
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
      const d = 35e6, a = 14e6, m = 0.02, $ = 5e-5, y = 2e-5, g = {
        elasticities: new Map(i.map((p, x) => [
          x,
          d
        ])),
        shearModuli: new Map(i.map((p, x) => [
          x,
          a
        ])),
        areas: new Map(i.map((p, x) => [
          x,
          m
        ])),
        momentsOfInertiaZ: new Map(i.map((p, x) => [
          x,
          $
        ])),
        momentsOfInertiaY: new Map(i.map((p, x) => [
          x,
          $
        ])),
        torsionalConstants: new Map(i.map((p, x) => [
          x,
          y
        ]))
      };
      e.elementInputs && (e.elementInputs.val = g);
      try {
        const p = pt(s, i, {
          supports: r,
          loads: u
        }, g);
        p && e.deformOutputs && (e.deformOutputs.val = p);
      } catch (p) {
        console.warn("Burj:", p.message);
      }
      setTimeout(() => Xe(), 50), Le(), console.log(`Burj Khalifa: ${s.length} nodos, ${i.length} elem, 20 pisos, H=${20 * 3}m`);
    }
    function Zo() {
      const t = [], n = [];
      for (let m = 0; m < 3; m++) {
        const $ = m * 12, y = 15 - m * 2, g = 20 - m * 3, p = 8 - m, x = t.length;
        for (let z = 0; z <= 4; z++) {
          const S = z / 4, H = -p / 2 + p * S, _ = g * (1 - S * S * 0.3);
          for (let b = 0; b <= 12; b++) {
            const f = b / 12, v = $ + _ * f, M = y * Math.sin(Math.PI * f) * (1 - S * S * 0.5), L = H;
            t.push([
              v,
              L,
              M
            ]);
          }
        }
        const w = 13;
        for (let z = 0; z < 4; z++) for (let S = 0; S < 12; S++) {
          const H = x + z * w + S, _ = x + z * w + S + 1, b = x + (z + 1) * w + S + 1, f = x + (z + 1) * w + S;
          n.push([
            H,
            _,
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
      e.nodes.val = t, e.elements.val = n, e.nodeInputs && (e.nodeInputs.val = {
        supports: s,
        loads: i
      });
      const r = 35e6, c = 0.2, u = 0.15, d = r / (2 * (1 + c)), a = {
        elasticities: new Map(n.map((m, $) => [
          $,
          r
        ])),
        poissonsRatios: new Map(n.map((m, $) => [
          $,
          c
        ])),
        thicknesses: new Map(n.map((m, $) => [
          $,
          u
        ])),
        shearModuli: new Map(n.map((m, $) => [
          $,
          d
        ]))
      };
      e.elementInputs && (e.elementInputs.val = a);
      try {
        const m = pt(t, n, {
          supports: s,
          loads: i
        }, a);
        m && e.deformOutputs && (e.deformOutputs.val = m);
      } catch (m) {
        console.warn("Opera:", m.message);
      }
      setTimeout(() => Xe(), 50), Le(), console.log(`Sydney Opera: ${t.length} nodos, ${n.length} shells Q4, 3 velas`);
    }
    function Qo() {
      const l = [], s = [];
      for (let g = 0; g <= 15; g++) {
        const p = g / 15, x = g * 3.5, w = 5 * (0.6 + 0.4 * Math.sin(Math.PI * p));
        if (p > 0.9) {
          const z = 5 * (0.6 + 0.4 * Math.sin(Math.PI * 0.9)) * (1 - (p - 0.9) * 8);
          for (let S = 0; S < 12; S++) {
            const H = 2 * Math.PI * S / 12;
            l.push([
              Math.max(z, 1) * Math.cos(H),
              Math.max(z, 1) * Math.sin(H),
              x
            ]);
          }
        } else for (let z = 0; z < 12; z++) {
          const S = 2 * Math.PI * z / 12;
          l.push([
            w * Math.cos(S),
            w * Math.sin(S),
            x
          ]);
        }
      }
      for (let g = 0; g < 15; g++) {
        const p = g * 12, x = (g + 1) * 12;
        for (let z = 0; z < 12; z++) s.push([
          p + z,
          p + (z + 1) % 12
        ]);
        const w = g % 2 === 0 ? 1 : -1;
        for (let z = 0; z < 12; z++) {
          const S = (z + w + 12) % 12;
          s.push([
            p + z,
            x + S
          ]), s.push([
            p + z,
            x + z
          ]);
        }
      }
      const i = 15 * 12;
      for (let g = 0; g < 12; g++) s.push([
        i + g,
        i + (g + 1) % 12
      ]);
      const r = /* @__PURE__ */ new Map();
      for (let g = 0; g < 12; g++) r.set(g, [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
      const c = /* @__PURE__ */ new Map();
      for (let g = 1; g <= 15; g++) {
        const p = g * 12, x = 3 * g / 15;
        for (let w = 0; w < 12; w += 3) c.set(p + w, [
          x,
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
        elasticities: new Map(s.map((g, p) => [
          p,
          u
        ])),
        shearModuli: new Map(s.map((g, p) => [
          p,
          d
        ])),
        areas: new Map(s.map((g, p) => [
          p,
          a
        ])),
        momentsOfInertiaZ: new Map(s.map((g, p) => [
          p,
          m
        ])),
        momentsOfInertiaY: new Map(s.map((g, p) => [
          p,
          m
        ])),
        torsionalConstants: new Map(s.map((g, p) => [
          p,
          $
        ]))
      };
      e.elementInputs && (e.elementInputs.val = y);
      try {
        const g = pt(l, s, {
          supports: r,
          loads: c
        }, y);
        g && e.deformOutputs && (e.deformOutputs.val = g);
      } catch (g) {
        console.warn("Diagrid:", g.message);
      }
      setTimeout(() => Xe(), 50), Le(), console.log(`Diagrid Tower: ${l.length} nodos, ${s.length} elem, 15 pisos, H=${15 * 3.5}m`);
    }
    function qs() {
      var _a, _b;
      (_a = document.getElementById("fem-log-panel")) == null ? void 0 : _a.remove();
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
    function Ts() {
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
        const n = (x) => {
          var _a2;
          return parseFloat(((_a2 = t.querySelector(`#${x}`)) == null ? void 0 : _a2.value) || "0");
        }, o = n("po-colB"), l = n("po-colH"), s = n("po-fc") * 1e3, i = n("po-fy") * 1e3, r = n("po-H"), c = n("po-L"), u = n("po-As") * 1e-4, d = n("po-nbar"), a = n("po-drift") / 100, m = n("po-ncycles"), $ = t.querySelector("#pushover-status");
        $.textContent = "Generando historia de desplazamientos...";
        const y = [], g = a * r, p = 40;
        for (let x = 1; x <= m; x++) {
          const w = g * x / m;
          for (let z = 0; z <= p; z++) y.push(w * Math.sin(2 * Math.PI * z / p));
        }
        $.textContent = `Resolviendo pushover (${y.length} pasos)...`;
        try {
          const { cyclicPushover: x } = await Ns(async () => {
            const { cyclicPushover: z } = await import("./cyclicPushoverCpp-DZAQImEK.js").then(async (m2) => {
              await m2.__tla;
              return m2;
            });
            return {
              cyclicPushover: z
            };
          }, __vite__mapDeps([0,1]), import.meta.url), w = await x({
            colHeight: r,
            beamLength: c,
            col: {
              b: o,
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
          $.textContent = `Completado: ${w.nSteps} pasos`, Fs(t.querySelector("#pushover-canvas"), w.displacements, w.forces, `Pushover: ${o * 100}x${l * 100}cm, f'c=${s / 1e3}MPa, Fy=${i / 1e3}MPa`);
        } catch (x) {
          $.textContent = `Error: ${x.message}`, console.error("Pushover failed:", x);
        }
      });
    }
    function Fs(t, n, o, l) {
      const s = t.getContext("2d");
      if (!s || n.length === 0) return;
      const i = t.width, r = t.height, c = {
        left: 55,
        right: 15,
        top: 30,
        bottom: 35
      }, u = i - c.left - c.right, d = r - c.top - c.bottom;
      s.fillStyle = "#111118", s.fillRect(0, 0, i, r);
      let a = Math.min(...n), m = Math.max(...n), $ = Math.min(...o), y = Math.max(...o);
      a === m && (a -= 0.01, m += 0.01), $ === y && ($ -= 1, y += 1);
      const g = m - a, p = y - $, x = (H) => c.left + (H - a) / g * u, w = (H) => c.top + d - (H - $) / p * d;
      s.strokeStyle = "#333", s.lineWidth = 0.5, a < 0 && m > 0 && (s.strokeStyle = "#555", s.beginPath(), s.moveTo(x(0), c.top), s.lineTo(x(0), c.top + d), s.stroke()), $ < 0 && y > 0 && (s.beginPath(), s.moveTo(c.left, w(0)), s.lineTo(c.left + u, w(0)), s.stroke()), s.strokeStyle = "#ff4444", s.lineWidth = 1.5, s.beginPath(), s.moveTo(x(n[0]), w(o[0]));
      for (let H = 1; H < n.length; H++) s.lineTo(x(n[H]), w(o[H]));
      s.stroke(), s.fillStyle = "#aaa", s.font = "11px monospace", s.textAlign = "center", s.fillText("Desplazamiento (m)", c.left + u / 2, r - 5), s.save(), s.translate(12, c.top + d / 2), s.rotate(-Math.PI / 2), s.fillText("Fuerza (kN)", 0, 0), s.restore(), s.fillStyle = "#ee9b00", s.font = "bold 11px monospace", s.textAlign = "center", s.fillText(l, i / 2, 15), s.fillStyle = "#888", s.font = "9px monospace", s.textAlign = "center";
      const z = g / 5;
      for (let H = 0; H <= 5; H++) {
        const _ = a + z * H;
        s.fillText((_ * 1e3).toFixed(1), x(_), r - c.bottom + 15);
      }
      s.textAlign = "right";
      const S = p / 5;
      for (let H = 0; H <= 5; H++) {
        const _ = $ + S * H;
        s.fillText(_.toFixed(0), c.left - 5, w(_) + 3);
      }
    }
    let bn = null;
    function Ps() {
      if (bn) {
        bn.remove(), bn = null;
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
    `, document.body.appendChild(t), bn = t, t.querySelector("#nl-close").addEventListener("click", () => {
        t.remove(), bn = null;
      }), t.querySelector("#nl-test").addEventListener("click", () => _s(t));
    }
    function _s(t) {
      const n = parseFloat(t.querySelector("#nl-fy").value), o = parseFloat(t.querySelector("#nl-e0").value), l = parseFloat(t.querySelector("#nl-b").value), s = parseFloat(t.querySelector("#nl-r0").value), i = parseFloat(t.querySelector("#nl-amp").value), r = parseInt(t.querySelector("#nl-cycles").value), c = 100, u = [];
      for (let V = 0; V < r; V++) {
        const U = i * (1 + V * 0.5);
        for (let W = 0; W < c; W++) {
          const D = W / c * 2 * Math.PI;
          u.push(U * Math.sin(D));
        }
      }
      const d = n / o, a = l * o;
      let m = 0, $ = 0, y = -d, g = d, p = 0, x = 0, w = 0, z = 0, S = 0, H = 0;
      const _ = [];
      for (const V of u) {
        let U = y, W = g, D = p, X = x, ce = w, Me = z, $e = S, K = H, ae;
        const de = V - m;
        if (Math.abs(de) < 1e-20) {
          _.push($);
          continue;
        }
        if ((K === 0 || K === 3) && (de < 0 ? (K = 2, X = -d, ce = -n, D = X, Me = 0, $e = 0) : (K = 1, X = d, ce = n, D = X, Me = 0, $e = 0)), K === 2 && de > 0) {
          K = 1, Me = m, $e = $, m < U && (U = m);
          const pe = (W - U) / (2 * 1 * d), ke = 1 + 0 * Math.pow(pe, 0.8);
          X = (n * ke - a * d * ke - $e + o * Me) / (o - a), ce = n * ke + a * (X - d * ke), D = W;
        } else if (K === 1 && de < 0) {
          K = 2, Me = m, $e = $, m > W && (W = m);
          const pe = (W - U) / (2 * 1 * d), ke = 1 + 0 * Math.pow(pe, 0.8);
          X = (-n * ke + a * d * ke - $e + o * Me) / (o - a), ce = -n * ke + a * (X + d * ke), D = U;
        }
        const Q = Math.abs((D - X) / d);
        let be = s - 0.925 * Q / (0.15 + Q);
        be < 0.1 && (be = 0.1);
        const we = (V - Me) / (X - Me), Te = 1 + Math.pow(Math.abs(we), be), Y = Math.pow(Te, 1 / be);
        ae = l * we + (1 - l) * we / Y, ae = ae * (ce - $e) + $e, _.push(ae), m = V, $ = ae, y = U, g = W, p = D, x = X, w = ce, z = Me, S = $e, H = K;
      }
      const b = t.querySelector("#nl-canvas"), f = b.getContext("2d"), v = b.width, M = b.height;
      f.clearRect(0, 0, v, M);
      const L = Math.max(...u.map(Math.abs)), N = Math.max(..._.map(Math.abs)), q = (v - 40) / (2 * L), E = (M - 40) / (2 * N), P = v / 2, C = M / 2;
      f.strokeStyle = "#444", f.lineWidth = 1, f.beginPath(), f.moveTo(20, C), f.lineTo(v - 20, C), f.stroke(), f.beginPath(), f.moveTo(P, 20), f.lineTo(P, M - 20), f.stroke(), f.fillStyle = "#888", f.font = "10px monospace", f.textAlign = "center", f.fillText("\u03B5 (strain)", v - 40, C - 5), f.fillText("\u03C3 (stress)", P + 30, 15), f.fillText(`\xB1${(L * 100).toFixed(1)}%`, v - 30, C + 12), f.fillText(`\xB1${(N / 1e3).toFixed(0)} MPa`, P + 40, 30), f.strokeStyle = "#00ccff", f.lineWidth = 1.5, f.beginPath();
      for (let V = 0; V < u.length; V++) {
        const U = P + u[V] * q, W = C - _[V] * E;
        V === 0 ? f.moveTo(U, W) : f.lineTo(U, W);
      }
      f.stroke(), f.strokeStyle = "#ff333366", f.lineWidth = 1, f.setLineDash([
        4,
        4
      ]), f.beginPath(), f.moveTo(20, C - n * E), f.lineTo(v - 20, C - n * E), f.stroke(), f.beginPath(), f.moveTo(20, C + n * E), f.lineTo(v - 20, C + n * E), f.stroke(), f.setLineDash([]), f.fillStyle = "#ff6666", f.font = "9px monospace", f.fillText(`Fy = ${(n / 1e3).toFixed(0)} MPa`, v - 50, C - n * E - 5);
      const J = t.querySelector("#nl-info");
      J.textContent = `Steel02: Fy=${(n / 1e3).toFixed(0)} MPa, E\u2080=${(o / 1e6).toFixed(0)} GPa, b=${l}, R\u2080=${s} \u2014 ${r} ciclos, amp=${(i * 100).toFixed(1)}%`;
    }
    function Cs() {
      var _a, _b, _c, _d;
      const t = document.querySelector(".rpt-overlay");
      if (t) {
        t.remove();
        return;
      }
      const n = e.nodes.val, o = e.elements.val, l = ((_a = e.elementInputs) == null ? void 0 : _a.val) || {}, s = ((_b = e.nodeInputs) == null ? void 0 : _b.val) || {}, i = (_c = e.deformOutputs) == null ? void 0 : _c.val;
      if ((_d = e.analyzeOutputs) == null ? void 0 : _d.val, !n.length || !o.length) {
        alert("No hay modelo cargado");
        return;
      }
      const r = oa({
        nodes: n,
        elements: o,
        nodeInputs: s,
        elementInputs: l,
        deformOutputs: i
      });
      document.body.appendChild(r);
    }
    let on = null;
    function As(t) {
      on && on.remove();
      const n = document.createElement("div");
      n.style.cssText = "position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background:#1a1a2e;color:#eee;border:2px solid #00ccff;border-radius:8px;padding:16px;z-index:10001;width:320px;font-family:monospace;font-size:12px;box-shadow:0 4px 20px rgba(0,0,0,0.5);";
      const o = In(), l = En(), s = Object.entries(o).map(([d, a]) => `<option value="${a}">${d}</option>`).join(""), i = Object.entries(l).map(([d, a]) => `<option value="${a}">${d}</option>`).join("");
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
        <b style="color:#33ff33;font-size:11px;">Modifiers (factores de rigidez)</b>
        <div style="margin-top:4px;display:grid;grid-template-columns:1fr 1fr 1fr;gap:4px;font-size:11px;">
          <label>Inercia:<input id="asgn-mod-i" type="number" value="1.0" step="0.05" min="0" max="2" style="width:50px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label>
          <label>\xC1rea:<input id="asgn-mod-a" type="number" value="1.0" step="0.1" min="0" max="2" style="width:50px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label>
          <label>Torsi\xF3n:<input id="asgn-mod-j" type="number" value="1.0" step="0.1" min="0" max="2" style="width:50px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label>
        </div>
        <div style="color:#888;font-size:9px;margin-top:2px;">Factor 1.0 = sin cambio, 0.35 = secci\xF3n agrietada (ACI 318)</div>
      </div>

      <div style="display:flex;gap:8px;">
        <button id="asgn-apply" style="flex:1;padding:8px;background:#00aa66;color:#fff;border:none;border-radius:4px;cursor:pointer;font-weight:bold;">\u2713 Aplicar</button>
        <button id="asgn-remove" style="flex:1;padding:8px;background:#996600;color:#fff;border:none;border-radius:4px;cursor:pointer;">\u21BA Quitar Override</button>
      </div>
    `, document.body.appendChild(n), on = n;
      const r = n.querySelector("#asgn-type"), c = n.querySelector("#asgn-params");
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
      r.addEventListener("change", u), u(), n.querySelector("#asgn-close").addEventListener("click", () => {
        n.remove(), on = null;
      }), n.querySelector("#asgn-apply").addEventListener("click", () => {
        var _a, _b, _c, _d, _e2, _f, _g;
        const d = r.value, a = {
          secType: d
        };
        d === "rect" ? (a.b = parseFloat(n.querySelector("#ap-b").value), a.h = parseFloat(n.querySelector("#ap-h").value), a.material = 0) : d === "circ" ? (a.b = parseFloat(n.querySelector("#ap-d").value), a.material = 0) : d === "W" || d === "HSS" ? (a.profileIdx = parseInt(n.querySelector("#ap-profile").value), a.material = 1) : d === "I-param" ? (a.bf = parseFloat(n.querySelector("#ap-bf").value), a.hf = parseFloat(n.querySelector("#ap-hf").value), a.tf = parseFloat(n.querySelector("#ap-tf").value), a.tw = parseFloat(n.querySelector("#ap-tw").value), a.material = 1) : d === "tubular" && (a.bc = parseFloat(n.querySelector("#ap-bc").value), a.hc = parseFloat(n.querySelector("#ap-hc").value), a.t = parseFloat(n.querySelector("#ap-t").value), a.material = 1), a.releaseRotStart = (_a = n.querySelector("#asgn-rel-rot-start")) == null ? void 0 : _a.checked, a.releaseRotEnd = (_b = n.querySelector("#asgn-rel-rot-end")) == null ? void 0 : _b.checked, a.releaseAxial = (_c = n.querySelector("#asgn-rel-axial")) == null ? void 0 : _c.checked, a.releaseTorsion = (_d = n.querySelector("#asgn-rel-torsion")) == null ? void 0 : _d.checked, a.modI = parseFloat((_e2 = n.querySelector("#asgn-mod-i")) == null ? void 0 : _e2.value) || 1, a.modA = parseFloat((_f = n.querySelector("#asgn-mod-a")) == null ? void 0 : _f.value) || 1, a.modJ = parseFloat((_g = n.querySelector("#asgn-mod-j")) == null ? void 0 : _g.value) || 1, t.forEach((m) => me.set(m, {
          ...a
        })), n.remove(), on = null, _t(), e.elementInputs.val = {
          ...e.elementInputs.val
        };
      }), n.querySelector("#asgn-remove").addEventListener("click", () => {
        t.forEach((d) => me.delete(d)), n.remove(), on = null, _t(), e.elementInputs.val = {
          ...e.elementInputs.val
        };
      });
    }
    let sn = null;
    function Hs(t) {
      var _a, _b, _c;
      sn && sn.remove();
      const n = e.nodes.val, o = e.elements.val[t];
      if (!o || o.length !== 2) return;
      const l = n[o[0]], s = n[o[1]], i = Math.abs(s[0] - l[0]), r = Math.abs(s[1] - l[1]), c = Math.abs(s[2] - l[2]), u = r > i && r > c, d = Math.sqrt(i * i + r * r + c * c), a = Pe.get(t) ?? 0, m = (_c = (_b = (_a = e.elementInputs) == null ? void 0 : _a.val) == null ? void 0 : _b.sectionShapes) == null ? void 0 : _c.get(t), $ = (m == null ? void 0 : m.name) || (m ? `${m.type} ${((m.b ?? 0) * 100).toFixed(0)}x${((m.h ?? 0) * 100).toFixed(0)}` : "\u2014"), y = document.createElement("div");
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
        <span style="color:#888;">Nodos:</span> ${o[0]} \u2192 ${o[1]}
      </div>
      <hr style="border-color:#333;margin:12px 0;">
      <div style="display:flex;gap:8px;">
        <button id="ep-delete" style="flex:1;padding:8px;background:#cc3333;color:#fff;border:none;border-radius:4px;cursor:pointer;font-weight:bold;">\u{1F5D1} Eliminar</button>
        <button id="ep-inspect" style="flex:1;padding:8px;background:#336699;color:#fff;border:none;border-radius:4px;cursor:pointer;font-weight:bold;">\u{1F50D} Inspect</button>
      </div>
    `, document.body.appendChild(y), sn = y, y.querySelector("#ep-close").addEventListener("click", () => {
        y.remove(), sn = null, Yt();
      }), y.querySelector("#ep-delete").addEventListener("click", () => {
        le.add(t), y.remove(), sn = null, Yt(), oe();
      }), y.querySelector("#ep-inspect").addEventListener("click", () => {
        y.remove(), sn = null, Yo(t);
      });
    }
    setTimeout(() => {
      const t = document.getElementById("viewer");
      if (!t) return;
      const n = t.querySelector("canvas");
      if (!n) return;
      let o = null, l = null;
      const s = 5;
      function i(u) {
        const d = _e();
        if (!d) return null;
        const a = d.controls.object, m = new ue(u[0], u[1], u[2]);
        m.project(a);
        const $ = n.getBoundingClientRect();
        return {
          x: (m.x + 1) / 2 * $.width,
          y: (-m.y + 1) / 2 * $.height
        };
      }
      function r(u, d, a, m, $) {
        const y = Math.min(u, a), g = Math.max(u, a), p = Math.min(d, m), x = Math.max(d, m), w = e.nodes.val, z = e.elements.val, S = [];
        for (let H = 0; H < z.length; H++) {
          const _ = z[H], b = _.map((f) => i(w[f])).filter(Boolean);
          if (b.length !== 0) if ($) b.every((v) => v.x >= y && v.x <= g && v.y >= p && v.y <= x) && S.push(H);
          else {
            if (b.some((v) => v.x >= y && v.x <= g && v.y >= p && v.y <= x)) {
              S.push(H);
              continue;
            }
            if (_.length === 2) {
              const v = b[0], M = b[1];
              c(v.x, v.y, M.x, M.y, y, p, g, x) && S.push(H);
            }
          }
        }
        return S;
      }
      function c(u, d, a, m, $, y, g, p) {
        const x = (z, S) => z >= $ && z <= g && S >= y && S <= p;
        if (x(u, d) || x(a, m)) return true;
        const w = (z, S, H, _, b, f, v, M) => {
          const L = (H - z) * (M - f) - (_ - S) * (v - b);
          if (Math.abs(L) < 1e-10) return false;
          const N = ((b - z) * (M - f) - (f - S) * (v - b)) / L, q = ((b - z) * (_ - S) - (f - S) * (H - z)) / L;
          return N >= 0 && N <= 1 && q >= 0 && q <= 1;
        };
        return w(u, d, a, m, $, y, g, y) || w(u, d, a, m, g, y, g, p) || w(u, d, a, m, $, p, g, p) || w(u, d, a, m, $, y, $, p);
      }
      n.addEventListener("mousedown", (u) => {
        at && (o = {
          x: u.offsetX,
          y: u.offsetY
        });
      }), n.addEventListener("mousemove", (u) => {
        if ($t) {
          const a = _e();
          if (!a) return;
          const m = Bo(u.clientX, u.clientY, a.camera, a.rendererElm);
          if (Be.track && m.snapType === "node" && m.nodeIdx !== null && m.nodeIdx !== Jt && ys(m.nodeIdx), Be.track && Jt !== null && m.worldPos && m.snapType !== "node") {
            const $ = $s(m.worldPos, Jt);
            $ && (m.worldPos = $, m.snapType = "grid");
          }
          if (Jt !== null && m.worldPos) {
            const $ = e.nodes.val[Jt];
            $ && Ro(u.clientX, u.clientY, new ue(...$), m.worldPos);
          } else if (He !== null && m.worldPos) {
            const $ = e.nodes.val[He];
            $ && Ro(u.clientX, u.clientY, new ue(...$), m.worldPos);
          } else dt && (dt.remove(), dt = null);
          m.nodeIdx, jo(m), n.style.cursor = m.snapType !== "free" ? "pointer" : "crosshair";
          return;
        }
        if (!mt && !at) return;
        if (at && o) {
          const a = u.offsetX - o.x, m = u.offsetY - o.y;
          if (Math.abs(a) > s || Math.abs(m) > s) {
            l || (l = document.createElement("div"), l.style.cssText = "position:absolute;pointer-events:none;z-index:9999;", n.parentElement.style.position = "relative", n.parentElement.appendChild(l));
            const $ = a > 0, y = Math.min(o.x, u.offsetX), g = Math.min(o.y, u.offsetY), p = Math.abs(a), x = Math.abs(m);
            l.style.left = y + "px", l.style.top = g + "px", l.style.width = p + "px", l.style.height = x + "px", l.style.border = $ ? "2px solid #3399ff" : "2px dashed #33ff33", l.style.background = $ ? "rgba(51,153,255,0.1)" : "rgba(51,255,51,0.1)", n.style.cursor = "crosshair";
            return;
          }
        }
        const d = Zn(u);
        if (d >= 0) Wo(d), n.style.cursor = "pointer";
        else {
          if (lt) {
            const a = _e();
            a == null ? void 0 : a.scene.remove(lt), lt = null, a == null ? void 0 : a.render();
          }
          n.style.cursor = at ? "crosshair" : "";
        }
      }), n.addEventListener("mouseup", (u) => {
        if (at && o) {
          const d = u.offsetX - o.x, a = u.offsetY - o.y;
          if (Math.abs(d) > s || Math.abs(a) > s) {
            const m = d > 0, $ = r(o.x, o.y, u.offsetX, u.offsetY, m);
            u.ctrlKey || u.metaKey || (Ae.clear(), Nt()), $.forEach((g) => {
              Ae.has(g) || (Ae.add(g), Xn(g));
            }), Ot();
          }
          l && (l.remove(), l = null), o = null, n.style.cursor = "crosshair";
          return;
        }
        o = null;
      }), n.addEventListener("click", (u) => {
        if ($t) {
          const d = _e();
          if (!d) return;
          const a = Bo(u.clientX, u.clientY, d.camera, d.rendererElm);
          (a.worldPos || a.nodeIdx !== null) && (Ms(a), jo(a));
          return;
        }
        if (at) {
          if (l) return;
          const d = Zn(u), a = u.ctrlKey || u.metaKey;
          if (d >= 0) {
            if (a) if (Ae.has(d)) {
              Ae.delete(d);
              const m = Ht.findIndex(($) => $.__elemIdx === d);
              if (m >= 0) {
                const $ = _e();
                $ == null ? void 0 : $.scene.remove(Ht[m]), Ht[m].geometry.dispose(), Ht[m].material.dispose(), Ht.splice(m, 1), $ == null ? void 0 : $.render();
              }
            } else Ae.add(d), Xn(d);
            else Ae.clear(), Nt(), Ae.add(d), Xn(d);
            Ot();
          } else a || (Ae.clear(), Nt(), Ot());
          return;
        }
        if (mt) {
          const d = Zn(u);
          d >= 0 && (Wo(d), Hs(d));
        }
      });
    }, 500), rn.derive(() => {
      var _a;
      e.nodes.val, e.elements.val, (_a = e.nodeInputs) == null ? void 0 : _a.val, Le();
    }), ze.modal = (t) => {
      var _a, _b;
      if (t === void 0 && (t = !ut), ut = t, (_a = re.querySelector("#cad3d-modal")) == null ? void 0 : _a.classList.toggle("active", ut), ut) {
        const o = _e();
        ((_b = o == null ? void 0 : o.settings) == null ? void 0 : _b.loads) && (yn = o.settings.loads.rawVal, o.settings.loads.val = false), Bn(), re.querySelector("#cad3d-mode-prev").style.display = "", re.querySelector("#cad3d-mode-next").style.display = "", re.querySelector("#cad3d-mode-label").style.display = "";
      } else jn(), re.querySelector("#cad3d-mode-prev").style.display = "none", re.querySelector("#cad3d-mode-next").style.display = "none", re.querySelector("#cad3d-mode-label").style.display = "none", I && I !== "placa-q4" && I !== "placa-3q" && oe(), setTimeout(() => {
        var _a2;
        const o = _e();
        ((_a2 = o == null ? void 0 : o.settings) == null ? void 0 : _a2.loads) && yn && (o.settings.loads.val = true);
      }, 600);
      console.log(`Modal analysis: ${ut ? "ON" : "OFF"}`);
    }, ze.setMode = (t) => {
      var _a;
      if (!(je == null ? void 0 : je.modeShapes)) {
        console.error("No modal results");
        return;
      }
      et = Math.max(0, Math.min(t, je.modeShapes.length - 1));
      const n = je.modeShapes[et], { extent: o } = Ct();
      let l = 0;
      for (let i = 0; i < St.length; i++) {
        const r = n[i * 6] || 0, c = n[i * 6 + 1] || 0, u = n[i * 6 + 2] || 0;
        l = Math.max(l, Math.sqrt(r * r + c * c + u * u));
      }
      vn = l > 1e-12 ? o * 0.05 / l : 1, mn();
      const s = re.querySelector("#cad3d-mode-label");
      s && je.frequencies && (s.textContent = `Modo ${et + 1} \u2014 ${je.frequencies[et].toFixed(2)} Hz`), console.log(`Modo ${et + 1}: f = ${(_a = je.frequencies) == null ? void 0 : _a[et].toFixed(4)} Hz`);
    }, window.cad = ze, console.log("FEM Studio CLI ready. Type cad.help() for commands."), setTimeout(() => {
      document.body.appendChild(re), document.body.appendChild(fn.div);
    }, 0), setTimeout(() => {
      e.nodes.val.length === 0 && (Ee("edificio"), oe(), _o("edificio"));
    }, 100);
    const es = document.createElement("span");
    return es.style.display = "none", es;
  };
});
export {
  __tla,
  is as a,
  na as c,
  ya as g
};
