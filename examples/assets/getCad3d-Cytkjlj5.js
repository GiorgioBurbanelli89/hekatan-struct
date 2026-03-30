const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./cyclicPushoverCpp-DZAQImEK.js","./plateQ4Cpp-CArWqXeL.js"])))=>i.map(i=>d[i]);
import { _ as Ys, p as un, m as Gs, d as zt, s as Vs, __tla as __tla_0 } from "./plateQ4Cpp-CArWqXeL.js";
import { v as vo, P as Fo, g as Xs, a as Ks, o as Us } from "./theme-CzzIlc4y.js";
import { V as ve, P as Qt, R as ds, b as ps, B as so, c as Zs, d as fs, e as So, f as Qs, S as ea, M as ta, g as oa, F as ao, a as zo, L as mn, h as na, G as sa, A as Co, i as us, T as ms, j as bn, k as gn, C as aa, l as la } from "./Text-Cin90tvN.js";
import { g as Oo, b as Ro, a as ho } from "./analyze-B0bulnNq.js";
import { g as Rt, __tla as __tla_1 } from "./getMesh-Ch3239Ot.js";
import { n as ro, s as Bt, m as It, t as $n } from "./pureFunctionsAny.generated-BHh0zpCc.js";
let xs, da, Fa;
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
  const yn = [
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
  ], yo = [
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
  function ia(e, h) {
    return e === "kN" && h === "m" ? "kPa" : e === "kN" && h === "mm" || e === "N" && h === "mm" ? "MPa" : e === "N" && h === "m" ? "Pa" : e === "kip" && h === "in" ? "ksi" : e === "kip" && h === "ft" ? "ksf" : `${e}/${h}\xB2`;
  }
  const lo = {
    E: 2e8,
    G: 77e6,
    A: 0.01,
    Iz: 833e-7,
    Iy: 833e-7,
    J: 141e-6,
    rho: 7.85
  };
  function io(e, h) {
    const B = yn.find((pe) => pe.id === e), k = yo.find((pe) => pe.id === h), J = B.toKN, we = k.toM, ae = (pe, he, I) => I / (Math.pow(J, pe) * Math.pow(we, he));
    let V, D;
    switch (e) {
      case "kN":
        V = 10, D = [
          -100,
          100,
          1
        ];
        break;
      case "tonf":
        V = 1, D = [
          -20,
          20,
          0.5
        ];
        break;
      case "kgf":
        V = 1e3, D = [
          -1e4,
          1e4,
          100
        ];
        break;
      case "kip":
        V = 10, D = [
          -200,
          200,
          5
        ];
        break;
      case "lb":
        V = 5e3, D = [
          -5e4,
          5e4,
          500
        ];
        break;
      case "N":
        V = 1e4, D = [
          -1e5,
          1e5,
          1e3
        ];
        break;
    }
    return {
      id: `${e}-${h}`,
      label: `${B.label}, ${k.label}`,
      force: B.label,
      length: k.label,
      stress: ia(e, h),
      moment: `${B.label}\xB7${k.label}`,
      E: ae(1, -2, lo.E),
      G: ae(1, -2, lo.G),
      A: ae(0, 2, lo.A),
      Iz: ae(0, 4, lo.Iz),
      Iy: ae(0, 4, lo.Iy),
      J: ae(0, 4, lo.J),
      rho: ae(1, -4, lo.rho),
      spanRange: k.spanRange,
      heightRange: k.heightRange,
      defaultSpan: k.defaultSpan,
      defaultHeight: k.defaultHeight,
      defaultForce: V,
      forceRange: D,
      galponSpan: k.galponSpan,
      galponLength: k.galponLength,
      galponHeight: k.galponHeight,
      galponRise: k.galponRise
    };
  }
  io("kN", "m"), io("kip", "in");
  function Po() {
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
  function ra(e) {
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
    const h = e.force, [B, k, J] = e.forceRange;
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
          max: k,
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
          max: k,
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
          max: k,
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
          max: k,
          step: J,
          label: `Ex sismo (${h})`
        },
        {
          key: "Ey",
          val: 0,
          min: B,
          max: k,
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
    function B(k, J) {
      var _a, _b;
      if (!k.frequencies || k.frequencies.length === 0) {
        e.innerHTML = "<b style='padding:12px;display:block'>Modal: no results</b>";
        return;
      }
      const we = [
        "Ux",
        "Uy",
        "Uz",
        "Rx",
        "Ry",
        "Rz"
      ], ae = [
        0,
        0,
        0,
        0,
        0,
        0
      ];
      let V = `<div id="modal-header" style="display:flex; align-items:center; justify-content:space-between; padding:8px 12px; cursor:default;">
  <b style="color:#ff0">\u26A1 MODAL ANALYSIS \u2014 ${J.title}</b>
  <div style="display:flex; gap:4px; margin-left:12px;">
    <button id="modal-copy" style="padding:2px 8px; font-size:10px; cursor:pointer;
      background:#2d6a4f; color:#fff; border:1px solid #40916c; border-radius:3px;" title="Copiar tabla">\u{1F4CB}</button>
    <button id="modal-minimize" style="padding:2px 8px; font-size:10px; cursor:pointer;
      background:#555; color:#fff; border:1px solid #777; border-radius:3px;" title="Minimizar">\u25AC</button>
  </div>
</div>`;
      if (V += '<div id="modal-body" style="padding:0 12px 10px 12px;">', J.properties) for (const D of J.properties) V += `<span style="color:#888">${D}</span>
`;
      V += `<table style="border-collapse:collapse; color:#0f0; font-size:11px; margin-top:4px">
<tr style="color:#ff0; border-bottom:1px solid #ff03">
  <th style="padding:2px 6px">Mode</th>
  <th style="padding:2px 6px">Freq (Hz)</th>
  <th style="padding:2px 6px">Period (s)</th>
  <th style="padding:2px 6px">\u03C9 (rad/s)</th>`;
      for (const D of we) V += `<th style="padding:2px 5px">${D}</th>`;
      if (V += `<th style="padding:2px 5px; color:#0ff">\u03A3Ux</th>
  <th style="padding:2px 5px; color:#0ff">\u03A3Uy</th>
  <th style="padding:2px 5px; color:#0ff">\u03A3Rz</th></tr>`, k.frequencies.forEach((D, pe) => {
        var _a2;
        const he = D > 0 ? 1 / D : 0, I = D * 2 * Math.PI, G = ((_a2 = k.massParticipation) == null ? void 0 : _a2[pe]) || [
          0,
          0,
          0,
          0,
          0,
          0
        ];
        for (let me = 0; me < 6; me++) ae[me] += G[me];
        V += `<tr style="border-bottom:1px solid #fff1">
  <td style="padding:2px 6px; text-align:center">${pe + 1}</td>
  <td style="padding:2px 6px; text-align:right">${D.toFixed(4)}</td>
  <td style="padding:2px 6px; text-align:right">${he.toFixed(4)}</td>
  <td style="padding:2px 6px; text-align:right">${I.toFixed(2)}</td>`;
        for (let me = 0; me < 6; me++) {
          const Be = (G[me] * 100).toFixed(1), oe = G[me] > 0.5 ? "#f00" : G[me] > 0.1 ? "#ff0" : "#0f0";
          V += `<td style="padding:2px 5px; text-align:right; color:${oe}">${Be}%</td>`;
        }
        V += `<td style="padding:2px 5px; text-align:right; color:#0ff">${(ae[0] * 100).toFixed(1)}%</td>
  <td style="padding:2px 5px; text-align:right; color:#0ff">${(ae[1] * 100).toFixed(1)}%</td>
  <td style="padding:2px 5px; text-align:right; color:#0ff">${(ae[5] * 100).toFixed(1)}%</td></tr>`;
      }), V += "</table></div>", e.innerHTML = V, h) {
        const D = e.querySelector("#modal-body"), pe = e.querySelector("#modal-minimize");
        D && (D.style.display = "none"), pe && (pe.textContent = "\u25A2", pe.title = "Restaurar");
      }
      (_a = e.querySelector("#modal-minimize")) == null ? void 0 : _a.addEventListener("click", () => {
        h = !h;
        const D = e.querySelector("#modal-body"), pe = e.querySelector("#modal-minimize");
        h ? (D.style.display = "none", pe.textContent = "\u25A2", pe.title = "Restaurar") : (D.style.display = "block", pe.textContent = "\u25AC", pe.title = "Minimizar");
      }), (_b = e.querySelector("#modal-copy")) == null ? void 0 : _b.addEventListener("click", () => {
        const D = [];
        D.push(`Modal Analysis \u2014 ${J.title}`);
        const pe = `Mode  Freq(Hz)  Period(s)  \u03C9(rad/s)  ${we.join("     ")}  \u03A3Ux    \u03A3Uy    \u03A3Rz`;
        D.push(pe), D.push("-".repeat(pe.length));
        const he = [
          0,
          0,
          0,
          0,
          0,
          0
        ];
        k.frequencies.forEach((G, me) => {
          var _a2;
          const Be = G > 0 ? 1 / G : 0, oe = G * 2 * Math.PI, ne = ((_a2 = k.massParticipation) == null ? void 0 : _a2[me]) || [
            0,
            0,
            0,
            0,
            0,
            0
          ];
          for (let Me = 0; Me < 6; Me++) he[Me] += ne[Me];
          const ye = ne.map((Me) => ((Me * 100).toFixed(1) + "%").padStart(6)).join(" ");
          D.push(`${String(me + 1).padStart(4)}  ${G.toFixed(4).padStart(9)}  ${Be.toFixed(4).padStart(9)}  ${oe.toFixed(2).padStart(9)}  ${ye}  ${(he[0] * 100).toFixed(1).padStart(5)}%  ${(he[1] * 100).toFixed(1).padStart(5)}%  ${(he[5] * 100).toFixed(1).padStart(5)}%`);
        }), navigator.clipboard.writeText(D.join(`
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
  const ie = 64516e-8, S = 416231e-12, _ = 0.0254, eo = [
    {
      name: "W6x9",
      type: "W",
      A: 2.68 * ie,
      Iz: 16.4 * S,
      Iy: 2.2 * S,
      J: 0.0405 * S,
      d: 5.9 * _,
      bf: 3.94 * _
    },
    {
      name: "W6x15",
      type: "W",
      A: 4.43 * ie,
      Iz: 29.1 * S,
      Iy: 9.32 * S,
      J: 0.103 * S,
      d: 5.99 * _,
      bf: 5.99 * _
    },
    {
      name: "W6x20",
      type: "W",
      A: 5.87 * ie,
      Iz: 41.4 * S,
      Iy: 13.3 * S,
      J: 0.204 * S,
      d: 6.2 * _,
      bf: 6.02 * _
    },
    {
      name: "W8x10",
      type: "W",
      A: 2.96 * ie,
      Iz: 30.8 * S,
      Iy: 2.09 * S,
      J: 0.0426 * S,
      d: 7.89 * _,
      bf: 3.94 * _
    },
    {
      name: "W8x18",
      type: "W",
      A: 5.26 * ie,
      Iz: 61.9 * S,
      Iy: 7.97 * S,
      J: 0.172 * S,
      d: 8.14 * _,
      bf: 5.25 * _
    },
    {
      name: "W8x24",
      type: "W",
      A: 7.08 * ie,
      Iz: 82.7 * S,
      Iy: 18.3 * S,
      J: 0.346 * S,
      d: 7.93 * _,
      bf: 6.5 * _
    },
    {
      name: "W8x31",
      type: "W",
      A: 9.13 * ie,
      Iz: 110 * S,
      Iy: 37.1 * S,
      J: 0.536 * S,
      d: 8 * _,
      bf: 7.995 * _
    },
    {
      name: "W8x40",
      type: "W",
      A: 11.7 * ie,
      Iz: 146 * S,
      Iy: 49.1 * S,
      J: 0.871 * S,
      d: 8.25 * _,
      bf: 8.07 * _
    },
    {
      name: "W8x48",
      type: "W",
      A: 14.1 * ie,
      Iz: 184 * S,
      Iy: 60.9 * S,
      J: 1.45 * S,
      d: 8.5 * _,
      bf: 8.11 * _
    },
    {
      name: "W8x67",
      type: "W",
      A: 19.7 * ie,
      Iz: 272 * S,
      Iy: 88.6 * S,
      J: 3.54 * S,
      d: 9 * _,
      bf: 8.28 * _
    },
    {
      name: "W10x12",
      type: "W",
      A: 3.54 * ie,
      Iz: 53.8 * S,
      Iy: 2.18 * S,
      J: 0.0547 * S,
      d: 9.87 * _,
      bf: 3.96 * _
    },
    {
      name: "W10x22",
      type: "W",
      A: 6.49 * ie,
      Iz: 118 * S,
      Iy: 11.4 * S,
      J: 0.239 * S,
      d: 10.17 * _,
      bf: 5.75 * _
    },
    {
      name: "W10x33",
      type: "W",
      A: 9.71 * ie,
      Iz: 171 * S,
      Iy: 36.6 * S,
      J: 0.583 * S,
      d: 9.73 * _,
      bf: 7.96 * _
    },
    {
      name: "W10x49",
      type: "W",
      A: 14.4 * ie,
      Iz: 272 * S,
      Iy: 93.4 * S,
      J: 1.39 * S,
      d: 9.98 * _,
      bf: 10 * _
    },
    {
      name: "W10x68",
      type: "W",
      A: 20 * ie,
      Iz: 394 * S,
      Iy: 134 * S,
      J: 3.56 * S,
      d: 10.4 * _,
      bf: 10.13 * _
    },
    {
      name: "W10x100",
      type: "W",
      A: 29.4 * ie,
      Iz: 623 * S,
      Iy: 207 * S,
      J: 10.9 * S,
      d: 11.1 * _,
      bf: 10.34 * _
    },
    {
      name: "W12x14",
      type: "W",
      A: 4.16 * ie,
      Iz: 88.6 * S,
      Iy: 2.36 * S,
      J: 0.0704 * S,
      d: 11.91 * _,
      bf: 3.97 * _
    },
    {
      name: "W12x22",
      type: "W",
      A: 6.48 * ie,
      Iz: 156 * S,
      Iy: 4.66 * S,
      J: 0.293 * S,
      d: 12.31 * _,
      bf: 4.03 * _
    },
    {
      name: "W12x26",
      type: "W",
      A: 7.65 * ie,
      Iz: 204 * S,
      Iy: 17.3 * S,
      J: 0.3 * S,
      d: 12.22 * _,
      bf: 6.49 * _
    },
    {
      name: "W12x40",
      type: "W",
      A: 11.7 * ie,
      Iz: 310 * S,
      Iy: 44.1 * S,
      J: 0.906 * S,
      d: 11.94 * _,
      bf: 8.01 * _
    },
    {
      name: "W12x53",
      type: "W",
      A: 15.6 * ie,
      Iz: 425 * S,
      Iy: 95.8 * S,
      J: 1.58 * S,
      d: 12.06 * _,
      bf: 9.99 * _
    },
    {
      name: "W12x72",
      type: "W",
      A: 21.1 * ie,
      Iz: 597 * S,
      Iy: 195 * S,
      J: 4.05 * S,
      d: 12.25 * _,
      bf: 12.04 * _
    },
    {
      name: "W12x96",
      type: "W",
      A: 28.2 * ie,
      Iz: 833 * S,
      Iy: 270 * S,
      J: 8.44 * S,
      d: 12.71 * _,
      bf: 12.16 * _
    },
    {
      name: "W12x120",
      type: "W",
      A: 35.3 * ie,
      Iz: 1070 * S,
      Iy: 345 * S,
      J: 16 * S,
      d: 13.12 * _,
      bf: 12.32 * _
    },
    {
      name: "W14x22",
      type: "W",
      A: 6.49 * ie,
      Iz: 199 * S,
      Iy: 7 * S,
      J: 0.208 * S,
      d: 13.74 * _,
      bf: 5 * _
    },
    {
      name: "W14x30",
      type: "W",
      A: 8.85 * ie,
      Iz: 291 * S,
      Iy: 19.6 * S,
      J: 0.38 * S,
      d: 13.84 * _,
      bf: 6.73 * _
    },
    {
      name: "W14x38",
      type: "W",
      A: 11.2 * ie,
      Iz: 385 * S,
      Iy: 26.7 * S,
      J: 0.798 * S,
      d: 14.1 * _,
      bf: 6.77 * _
    },
    {
      name: "W14x48",
      type: "W",
      A: 14.1 * ie,
      Iz: 485 * S,
      Iy: 51.4 * S,
      J: 1.45 * S,
      d: 13.79 * _,
      bf: 8.03 * _
    },
    {
      name: "W14x61",
      type: "W",
      A: 17.9 * ie,
      Iz: 640 * S,
      Iy: 107 * S,
      J: 2.19 * S,
      d: 13.89 * _,
      bf: 9.99 * _
    },
    {
      name: "W14x82",
      type: "W",
      A: 24 * ie,
      Iz: 882 * S,
      Iy: 148 * S,
      J: 5.07 * S,
      d: 14.31 * _,
      bf: 10.13 * _
    },
    {
      name: "W14x109",
      type: "W",
      A: 32 * ie,
      Iz: 1240 * S,
      Iy: 447 * S,
      J: 7.12 * S,
      d: 14.32 * _,
      bf: 14.61 * _
    },
    {
      name: "W14x132",
      type: "W",
      A: 38.8 * ie,
      Iz: 1530 * S,
      Iy: 548 * S,
      J: 12.3 * S,
      d: 14.66 * _,
      bf: 14.73 * _
    },
    {
      name: "W14x176",
      type: "W",
      A: 51.8 * ie,
      Iz: 2140 * S,
      Iy: 838 * S,
      J: 23.7 * S,
      d: 15.22 * _,
      bf: 15.65 * _
    },
    {
      name: "W16x26",
      type: "W",
      A: 7.68 * ie,
      Iz: 301 * S,
      Iy: 9.59 * S,
      J: 0.262 * S,
      d: 15.69 * _,
      bf: 5.5 * _
    },
    {
      name: "W16x36",
      type: "W",
      A: 10.6 * ie,
      Iz: 448 * S,
      Iy: 24.5 * S,
      J: 0.545 * S,
      d: 15.86 * _,
      bf: 6.99 * _
    },
    {
      name: "W16x50",
      type: "W",
      A: 14.7 * ie,
      Iz: 659 * S,
      Iy: 37.2 * S,
      J: 1.52 * S,
      d: 16.26 * _,
      bf: 7.07 * _
    },
    {
      name: "W16x67",
      type: "W",
      A: 19.7 * ie,
      Iz: 954 * S,
      Iy: 119 * S,
      J: 2.39 * S,
      d: 16.33 * _,
      bf: 10.24 * _
    },
    {
      name: "W16x89",
      type: "W",
      A: 26.2 * ie,
      Iz: 1300 * S,
      Iy: 163 * S,
      J: 5.45 * S,
      d: 16.75 * _,
      bf: 10.37 * _
    },
    {
      name: "W18x35",
      type: "W",
      A: 10.3 * ie,
      Iz: 510 * S,
      Iy: 15.3 * S,
      J: 0.506 * S,
      d: 17.7 * _,
      bf: 6 * _
    },
    {
      name: "W18x50",
      type: "W",
      A: 14.7 * ie,
      Iz: 800 * S,
      Iy: 40.1 * S,
      J: 1.24 * S,
      d: 17.99 * _,
      bf: 7.5 * _
    },
    {
      name: "W18x71",
      type: "W",
      A: 20.8 * ie,
      Iz: 1170 * S,
      Iy: 60.3 * S,
      J: 3.49 * S,
      d: 18.47 * _,
      bf: 7.64 * _
    },
    {
      name: "W18x97",
      type: "W",
      A: 28.5 * ie,
      Iz: 1750 * S,
      Iy: 201 * S,
      J: 5.86 * S,
      d: 18.59 * _,
      bf: 11.15 * _
    },
    {
      name: "W21x44",
      type: "W",
      A: 13 * ie,
      Iz: 843 * S,
      Iy: 20.7 * S,
      J: 0.77 * S,
      d: 20.66 * _,
      bf: 6.5 * _
    },
    {
      name: "W21x62",
      type: "W",
      A: 18.3 * ie,
      Iz: 1330 * S,
      Iy: 57.5 * S,
      J: 1.83 * S,
      d: 20.99 * _,
      bf: 8.24 * _
    },
    {
      name: "W21x83",
      type: "W",
      A: 24.3 * ie,
      Iz: 1830 * S,
      Iy: 81.4 * S,
      J: 4.34 * S,
      d: 21.43 * _,
      bf: 8.36 * _
    },
    {
      name: "W21x111",
      type: "W",
      A: 32.7 * ie,
      Iz: 2670 * S,
      Iy: 274 * S,
      J: 6.83 * S,
      d: 21.51 * _,
      bf: 12.34 * _
    },
    {
      name: "W24x55",
      type: "W",
      A: 16.2 * ie,
      Iz: 1350 * S,
      Iy: 29.1 * S,
      J: 1.18 * S,
      d: 23.57 * _,
      bf: 7.01 * _
    },
    {
      name: "W24x76",
      type: "W",
      A: 22.4 * ie,
      Iz: 2100 * S,
      Iy: 82.5 * S,
      J: 2.68 * S,
      d: 23.92 * _,
      bf: 8.99 * _
    },
    {
      name: "W24x104",
      type: "W",
      A: 30.6 * ie,
      Iz: 3100 * S,
      Iy: 259 * S,
      J: 4.72 * S,
      d: 24.06 * _,
      bf: 12.75 * _
    },
    {
      name: "W24x131",
      type: "W",
      A: 38.5 * ie,
      Iz: 4020 * S,
      Iy: 340 * S,
      J: 9.5 * S,
      d: 24.48 * _,
      bf: 12.86 * _
    },
    {
      name: "W24x146",
      type: "W",
      A: 43 * ie,
      Iz: 4580 * S,
      Iy: 391 * S,
      J: 12.6 * S,
      d: 24.74 * _,
      bf: 12.9 * _
    },
    {
      name: "W24x176",
      type: "W",
      A: 51.7 * ie,
      Iz: 5680 * S,
      Iy: 479 * S,
      J: 21.2 * S,
      d: 25.24 * _,
      bf: 12.9 * _
    },
    {
      name: "W27x84",
      type: "W",
      A: 24.8 * ie,
      Iz: 2850 * S,
      Iy: 106 * S,
      J: 2.81 * S,
      d: 26.71 * _,
      bf: 9.96 * _
    },
    {
      name: "W27x114",
      type: "W",
      A: 33.5 * ie,
      Iz: 4090 * S,
      Iy: 159 * S,
      J: 6.77 * S,
      d: 27.29 * _,
      bf: 10.07 * _
    },
    {
      name: "W30x90",
      type: "W",
      A: 26.4 * ie,
      Iz: 3610 * S,
      Iy: 115 * S,
      J: 3.06 * S,
      d: 29.53 * _,
      bf: 10.4 * _
    },
    {
      name: "W30x116",
      type: "W",
      A: 34.2 * ie,
      Iz: 4930 * S,
      Iy: 164 * S,
      J: 6.43 * S,
      d: 30.01 * _,
      bf: 10.5 * _
    },
    {
      name: "W33x118",
      type: "W",
      A: 34.7 * ie,
      Iz: 5900 * S,
      Iy: 187 * S,
      J: 5.3 * S,
      d: 32.86 * _,
      bf: 11.48 * _
    },
    {
      name: "W36x135",
      type: "W",
      A: 39.7 * ie,
      Iz: 7800 * S,
      Iy: 225 * S,
      J: 7 * S,
      d: 35.55 * _,
      bf: 11.95 * _
    },
    {
      name: "HSS4x4x1/4",
      type: "HSS",
      A: 3.37 * ie,
      Iz: 8.22 * S,
      Iy: 8.22 * S,
      J: 13.4 * S,
      d: 4 * _,
      bf: 4 * _
    },
    {
      name: "HSS4x4x3/8",
      type: "HSS",
      A: 4.78 * ie,
      Iz: 10.7 * S,
      Iy: 10.7 * S,
      J: 17.9 * S,
      d: 4 * _,
      bf: 4 * _
    },
    {
      name: "HSS4x4x1/2",
      type: "HSS",
      A: 6.02 * ie,
      Iz: 12.3 * S,
      Iy: 12.3 * S,
      J: 21 * S,
      d: 4 * _,
      bf: 4 * _
    },
    {
      name: "HSS6x6x1/4",
      type: "HSS",
      A: 5.24 * ie,
      Iz: 30.3 * S,
      Iy: 30.3 * S,
      J: 48.3 * S,
      d: 6 * _,
      bf: 6 * _
    },
    {
      name: "HSS6x6x3/8",
      type: "HSS",
      A: 7.58 * ie,
      Iz: 41.1 * S,
      Iy: 41.1 * S,
      J: 66.9 * S,
      d: 6 * _,
      bf: 6 * _
    },
    {
      name: "HSS6x6x1/2",
      type: "HSS",
      A: 9.74 * ie,
      Iz: 49.6 * S,
      Iy: 49.6 * S,
      J: 82.2 * S,
      d: 6 * _,
      bf: 6 * _
    },
    {
      name: "HSS8x8x1/4",
      type: "HSS",
      A: 7.1 * ie,
      Iz: 70.7 * S,
      Iy: 70.7 * S,
      J: 112 * S,
      d: 8 * _,
      bf: 8 * _
    },
    {
      name: "HSS8x8x3/8",
      type: "HSS",
      A: 10.4 * ie,
      Iz: 98 * S,
      Iy: 98 * S,
      J: 158 * S,
      d: 8 * _,
      bf: 8 * _
    },
    {
      name: "HSS8x8x1/2",
      type: "HSS",
      A: 13.5 * ie,
      Iz: 122 * S,
      Iy: 122 * S,
      J: 199 * S,
      d: 8 * _,
      bf: 8 * _
    },
    {
      name: "HSS10x10x3/8",
      type: "HSS",
      A: 13.2 * ie,
      Iz: 202 * S,
      Iy: 202 * S,
      J: 323 * S,
      d: 10 * _,
      bf: 10 * _
    },
    {
      name: "HSS10x10x1/2",
      type: "HSS",
      A: 17.2 * ie,
      Iz: 254 * S,
      Iy: 254 * S,
      J: 412 * S,
      d: 10 * _,
      bf: 10 * _
    },
    {
      name: "HSS12x12x3/8",
      type: "HSS",
      A: 16 * ie,
      Iz: 355 * S,
      Iy: 355 * S,
      J: 564 * S,
      d: 12 * _,
      bf: 12 * _
    },
    {
      name: "HSS12x12x1/2",
      type: "HSS",
      A: 21 * ie,
      Iz: 452 * S,
      Iy: 452 * S,
      J: 724 * S,
      d: 12 * _,
      bf: 12 * _
    },
    {
      name: "HSS6x4x1/4",
      type: "HSS",
      A: 4.3 * ie,
      Iz: 18 * S,
      Iy: 9.58 * S,
      J: 22.6 * S,
      d: 6 * _,
      bf: 4 * _
    },
    {
      name: "HSS6x4x3/8",
      type: "HSS",
      A: 6.18 * ie,
      Iz: 23.8 * S,
      Iy: 12.3 * S,
      J: 30.3 * S,
      d: 6 * _,
      bf: 4 * _
    },
    {
      name: "HSS8x4x1/4",
      type: "HSS",
      A: 5.24 * ie,
      Iz: 33.6 * S,
      Iy: 11.8 * S,
      J: 33 * S,
      d: 8 * _,
      bf: 4 * _
    },
    {
      name: "HSS8x4x3/8",
      type: "HSS",
      A: 7.58 * ie,
      Iz: 45.1 * S,
      Iy: 15 * S,
      J: 44.5 * S,
      d: 8 * _,
      bf: 4 * _
    },
    {
      name: "HSS8x6x1/4",
      type: "HSS",
      A: 6.17 * ie,
      Iz: 46.1 * S,
      Iy: 28.2 * S,
      J: 61.3 * S,
      d: 8 * _,
      bf: 6 * _
    },
    {
      name: "HSS8x6x3/8",
      type: "HSS",
      A: 8.97 * ie,
      Iz: 63 * S,
      Iy: 37.5 * S,
      J: 84.6 * S,
      d: 8 * _,
      bf: 6 * _
    },
    {
      name: "HSS10x6x3/8",
      type: "HSS",
      A: 10.4 * ie,
      Iz: 103 * S,
      Iy: 47.1 * S,
      J: 115 * S,
      d: 10 * _,
      bf: 6 * _
    },
    {
      name: "HSS12x8x3/8",
      type: "HSS",
      A: 13.2 * ie,
      Iz: 196 * S,
      Iy: 102 * S,
      J: 249 * S,
      d: 12 * _,
      bf: 8 * _
    }
  ];
  function Ao() {
    const e = {};
    return eo.forEach((h, B) => {
      h.type === "W" && (e[h.name] = B);
    }), e;
  }
  function _o() {
    const e = {};
    return eo.forEach((h, B) => {
      h.type === "HSS" && (e[h.name] = B);
    }), e;
  }
  function pa(e) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    const { nodes: h, elements: B, elementInputs: k, nodeInputs: J, deformOutputs: we } = e, ae = h.length * 6, V = B.length, D = B.filter((oe) => oe.length === 2).length, pe = B.filter((oe) => oe.length >= 3).length, he = document.createElement("div");
    he.className = "rpt-overlay";
    let I = "";
    I += '<button class="rpt-close" id="rpt-close">\u2715 Close</button>', I += "<h1>Finite Element Analysis \u2014 Step-by-Step Report</h1>", I += '<div class="rpt-subtitle">Complete FEM derivation from element formulation to final results</div>', I += '<hr class="rpt-sep"/>', I += "<h2>1. Input Data</h2>", I += '<table class="rpt-info"><tbody>', I += `<tr><td>Number of nodes</td><td class="val">${h.length}</td></tr>`, I += `<tr><td>Number of elements</td><td class="val">${V} (${D} frames, ${pe} shells)</td></tr>`, I += '<tr><td>DOFs per node</td><td class="val">6 (u<sub>x</sub>, u<sub>y</sub>, u<sub>z</sub>, \u03B8<sub>x</sub>, \u03B8<sub>y</sub>, \u03B8<sub>z</sub>)</td></tr>', I += `<tr><td>Total DOFs</td><td class="val">${ae}</td></tr>`, I += "</tbody></table>", I += "<h3>1.1 Node Coordinates</h3>", I += '<table class="rpt-data"><thead><tr><th>Node</th><th>x</th><th>y</th><th>z</th></tr></thead><tbody>', h.forEach((oe, ne) => {
      I += `<tr><td>${ne}</td><td>${He(oe[0])}</td><td>${He(oe[1])}</td><td>${He(oe[2])}</td></tr>`;
    }), I += "</tbody></table>", I += "<h3>1.2 Element Connectivity</h3>", I += '<table class="rpt-data"><thead><tr><th>Elem</th><th>Type</th><th>Nodes</th><th>L</th><th>E</th><th>A</th><th>I<sub>z</sub></th><th>I<sub>y</sub></th></tr></thead><tbody>', B.forEach((oe, ne) => {
      var _a2, _b2, _c2, _d2;
      const ye = oe.length === 2, Me = oe.map((Ge) => h[Ge]), Ae = ye ? ro(Bt(Me[1], Me[0])) : 0, Re = ((_a2 = k.elasticities) == null ? void 0 : _a2.get(ne)) ?? 0, tt = ((_b2 = k.areas) == null ? void 0 : _b2.get(ne)) ?? 0, We = ((_c2 = k.momentsOfInertiaZ) == null ? void 0 : _c2.get(ne)) ?? 0, xt = ((_d2 = k.momentsOfInertiaY) == null ? void 0 : _d2.get(ne)) ?? 0;
      I += `<tr><td>${ne}</td><td>${ye ? "Frame" : "Shell"}</td><td>${oe.join(" \u2192 ")}</td>`, I += `<td>${He(Ae)}</td><td>${He(Re)}</td><td>${He(tt)}</td><td>${He(We)}</td><td>${He(xt)}</td></tr>`;
    }), I += "</tbody></table>", I += "<h2>2. Element Formulation</h2>", D > 0 && (I += "<h3>2.1 Frame Element (Euler-Bernoulli Beam)</h3>", I += "<p>Each frame element has 2 nodes and 12 DOFs: [u<sub>x</sub>, u<sub>y</sub>, u<sub>z</sub>, \u03B8<sub>x</sub>, \u03B8<sub>y</sub>, \u03B8<sub>z</sub>] per node.</p>", I += "<h4>2.1.1 Shape Functions</h4>", I += "<p><b>Axial</b> (linear interpolation):</p>", I += '<div class="rpt-eq">N\u2081(\u03BE) = 1 \u2212 \u03BE &nbsp;&nbsp;&nbsp; N\u2082(\u03BE) = \u03BE &nbsp;&nbsp;&nbsp; where \u03BE = x/L \u2208 [0, 1]</div>', I += "<p><b>Bending</b> (Hermite cubic polynomials):</p>", I += '<table class="rpt-eq-table"><tbody>', I += '<tr><td class="eq-name">H\u2081(\u03BE)</td><td>= 1 \u2212 3\u03BE\xB2 + 2\u03BE\xB3</td><td class="eq-desc">displacement at node i</td></tr>', I += '<tr><td class="eq-name">H\u2082(\u03BE)</td><td>= L\u03BE(1 \u2212 \u03BE)\xB2</td><td class="eq-desc">rotation at node i</td></tr>', I += '<tr><td class="eq-name">H\u2083(\u03BE)</td><td>= 3\u03BE\xB2 \u2212 2\u03BE\xB3</td><td class="eq-desc">displacement at node j</td></tr>', I += '<tr><td class="eq-name">H\u2084(\u03BE)</td><td>= L\u03BE\xB2(\u03BE \u2212 1)</td><td class="eq-desc">rotation at node j</td></tr>', I += "</tbody></table>", I += ua(), I += "<p><b>Torsion</b> (linear): same as axial.</p>", I += "<h4>2.1.2 Strain-Displacement Matrix B</h4>", I += "<p>The B matrix relates nodal displacements to internal strains:</p>", I += '<div class="rpt-eq">\u03B5<sub>axial</sub> = du/dx = (1/L)\xB7[\u22121, 1]\xB7{u<sub>i</sub>, u<sub>j</sub>}</div>', I += '<div class="rpt-eq">\u03BA<sub>bending</sub> = d\xB2v/dx\xB2 = B<sub>b</sub>\xB7{v<sub>i</sub>, \u03B8<sub>i</sub>, v<sub>j</sub>, \u03B8<sub>j</sub>}</div>', I += '<div class="rpt-eq">B<sub>b</sub>(\u03BE) = (1/L\xB2)\xB7[\u22126+12\u03BE, L(\u22124+6\u03BE), 6\u221212\u03BE, L(\u22122+6\u03BE)]</div>', I += '<div class="rpt-eq">\u03C6\u2032<sub>torsion</sub> = d\u03B8<sub>x</sub>/dx = (1/L)\xB7[\u22121, 1]\xB7{\u03B8<sub>xi</sub>, \u03B8<sub>xj</sub>}</div>', I += "<h4>2.1.3 Constitutive Relations D</h4>", I += '<table class="rpt-eq-table"><tbody>', I += '<tr><td class="eq-name">Axial:</td><td>\u03C3 = E\xB7\u03B5</td><td>\u2192 D<sub>axial</sub> = E\xB7A</td></tr>', I += '<tr><td class="eq-name">Bending Z:</td><td>M<sub>z</sub> = EI<sub>z</sub>\xB7\u03BA</td><td>\u2192 D<sub>bz</sub> = E\xB7I<sub>z</sub></td></tr>', I += '<tr><td class="eq-name">Bending Y:</td><td>M<sub>y</sub> = EI<sub>y</sub>\xB7\u03BA</td><td>\u2192 D<sub>by</sub> = E\xB7I<sub>y</sub></td></tr>', I += '<tr><td class="eq-name">Torsion:</td><td>T = GJ\xB7\u03C6\u2032</td><td>\u2192 D<sub>torsion</sub> = G\xB7J</td></tr>', I += "</tbody></table>", I += "<h4>2.1.4 Local Stiffness Matrix K<sub>local</sub></h4>", I += "<p>Obtained by analytical integration:</p>", I += '<div class="rpt-eq rpt-eq-highlight">K<sub>local</sub> = \u222B\u2080\u1D38 B\u1D40\xB7D\xB7B dx</div>', I += "<p>Result for Euler-Bernoulli beam (12\xD712 symmetric):</p>", I += '<div class="rpt-eq-small">', I += "K[0,0] = EA/L &nbsp;&nbsp; K[1,1] = 12EI<sub>z</sub>/L\xB3 &nbsp;&nbsp; K[2,2] = 12EI<sub>y</sub>/L\xB3 &nbsp;&nbsp; K[3,3] = GJ/L<br/>", I += "K[4,4] = 4EI<sub>y</sub>/L &nbsp;&nbsp; K[5,5] = 4EI<sub>z</sub>/L &nbsp;&nbsp; K[1,5] = 6EI<sub>z</sub>/L\xB2 &nbsp;&nbsp; K[2,4] = \u22126EI<sub>y</sub>/L\xB2", I += "</div>", I += "<h4>2.1.5 Transformation Matrix T</h4>", I += "<p>Direction cosines of element axis:</p>", I += '<div class="rpt-eq">l = (x<sub>j</sub>\u2212x<sub>i</sub>)/L &nbsp;&nbsp; m = (y<sub>j</sub>\u2212y<sub>i</sub>)/L &nbsp;&nbsp; n = (z<sub>j</sub>\u2212z<sub>i</sub>)/L &nbsp;&nbsp; D = \u221A(l\xB2+m\xB2)</div>', I += '<div class="rpt-eq">\u03BB = [l, m, n; \u2212m/D, l/D, 0; \u2212ln/D, \u2212mn/D, D] &nbsp;&nbsp; (3\xD73)</div>', I += '<div class="rpt-eq rpt-eq-highlight">T = I\u2084 \u2297 \u03BB &nbsp;&nbsp; (12\xD712 block-diagonal, Kronecker product)</div>', I += "<p>Special case for vertical elements (n = \xB11): \u03BB uses fixed axes.</p>", I += "<h4>2.1.6 Global Stiffness Matrix</h4>", I += '<div class="rpt-eq rpt-eq-highlight">K<sub>global</sub> = T\u1D40 \xB7 K<sub>local</sub> \xB7 T</div>'), I += "<h2>3. Numerical Results per Element</h2>", I += "<p>For each element, we compute K<sub>local</sub>, T, and K<sub>global</sub> = T\u1D40\xB7K\xB7T with the actual properties:</p>";
    for (let oe = 0; oe < V; oe++) {
      const ne = B[oe], ye = ne.map((ge) => h[ge]);
      if (!(ne.length === 2)) continue;
      const Ae = ro(Bt(ye[1], ye[0])), Re = ((_a = k.elasticities) == null ? void 0 : _a.get(oe)) ?? 0, tt = ((_b = k.areas) == null ? void 0 : _b.get(oe)) ?? 0, We = ((_c = k.momentsOfInertiaZ) == null ? void 0 : _c.get(oe)) ?? 0, xt = ((_d = k.momentsOfInertiaY) == null ? void 0 : _d.get(oe)) ?? 0, Ge = ((_e = k.shearModuli) == null ? void 0 : _e.get(oe)) ?? 0, ct = ((_f = k.torsionalConstants) == null ? void 0 : _f.get(oe)) ?? 0;
      let dt = null, st = null, Mt = null;
      try {
        dt = Oo(ye, k, oe), st = Ro(ye), Mt = It($n(st), It(dt, st));
      } catch {
        continue;
      }
      const Tt = Bt(ye[1], ye[0]), yt = Tt[0] / Ae, $t = Tt[1] / Ae, Dt = Tt[2] / Ae;
      I += '<div class="rpt-elem-block">', I += `<h3 class="rpt-elem-title" data-toggle="elem${oe}">\u25B6 Element ${oe} \u2014 Nodes ${ne[0]} \u2192 ${ne[1]}, L = ${He(Ae)}</h3>`, I += `<div id="rpt-elem${oe}" class="rpt-elem-body" style="display:none">`, I += "<h4>Properties (numerical substitution)</h4>", I += '<div class="rpt-eq-small">', I += `E = ${He(Re)} &nbsp;&nbsp; A = ${He(tt)} &nbsp;&nbsp; I<sub>z</sub> = ${He(We)} &nbsp;&nbsp; I<sub>y</sub> = ${He(xt)} &nbsp;&nbsp; G = ${He(Ge)} &nbsp;&nbsp; J = ${He(ct)}<br/>`, I += `EA/L = ${He(Re)}\xB7${He(tt)}/${He(Ae)} = <b>${He(Re * tt / Ae)}</b><br/>`, I += `12EI<sub>z</sub>/L\xB3 = 12\xB7${He(Re)}\xB7${He(We)}/${He(Ae)}\xB3 = <b>${He(12 * Re * We / Ae ** 3)}</b><br/>`, I += `12EI<sub>y</sub>/L\xB3 = 12\xB7${He(Re)}\xB7${He(xt)}/${He(Ae)}\xB3 = <b>${He(12 * Re * xt / Ae ** 3)}</b><br/>`, I += `GJ/L = ${He(Ge)}\xB7${He(ct)}/${He(Ae)} = <b>${He(Ge * ct / Ae)}</b>`, I += "</div>", I += "<h4>Direction cosines</h4>", I += `<div class="rpt-eq-small">l = ${Ho(yt)}, m = ${Ho($t)}, n = ${Ho(Dt)}, D = ${Ho(Math.sqrt(yt ** 2 + $t ** 2))}</div>`, I += "<h4>K<sub>local</sub> (12\xD712)</h4>", I += xn(dt, 12), I += "<h4>T \u2014 Transformation (12\xD712)</h4>", I += xn(st, 12), I += "<h4>K<sub>global</sub> = T\u1D40 \xB7 K<sub>local</sub> \xB7 T</h4>", I += xn(Mt, 12), I += "<h4>Assembly</h4>", I += `<div class="rpt-eq-small">Global DOFs: node ${ne[0]} \u2192 [${ne[0] * 6}..${ne[0] * 6 + 5}], node ${ne[1]} \u2192 [${ne[1] * 6}..${ne[1] * 6 + 5}]</div>`, I += "</div></div>";
    }
    I += "<h2>4. Global Assembly</h2>", I += `<div class="rpt-eq rpt-eq-highlight">K<sub>total</sub> = \u03A3<sub>e=0</sub><sup>${V - 1}</sup> (T<sub>e</sub>\u1D40 \xB7 k<sub>e</sub> \xB7 T<sub>e</sub>)</div>`, I += "<p>Each element contributes its K<sub>global</sub> to the positions determined by its node DOF indices.</p>", I += ma(B, h.length), I += "<h2>5. Boundary Conditions</h2>";
    const G = [
      "u<sub>x</sub>",
      "u<sub>y</sub>",
      "u<sub>z</sub>",
      "\u03B8<sub>x</sub>",
      "\u03B8<sub>y</sub>",
      "\u03B8<sub>z</sub>"
    ], me = [];
    if (I += "<h3>5.1 Supports (fixed DOFs)</h3>", J.supports && J.supports.size > 0) {
      I += '<table class="rpt-data"><thead><tr><th>Node</th>';
      for (const oe of G) I += `<th>${oe}</th>`;
      I += "</tr></thead><tbody>", J.supports.forEach((oe, ne) => {
        I += `<tr><td>${ne}</td>`, oe.forEach((ye, Me) => {
          ye && me.push(ne * 6 + Me), I += `<td class="${ye ? "fixed" : ""}">${ye ? "Fixed" : "Free"}</td>`;
        }), I += "</tr>";
      }), I += "</tbody></table>";
    }
    if (I += `<div class="rpt-eq-small">Fixed DOFs: [${me.join(", ")}] \u2192 ${me.length} constraints<br/>`, I += `Free DOFs: ${ae} \u2212 ${me.length} = <b>${ae - me.length}</b></div>`, I += "<h3>5.2 Applied Loads</h3>", J.loads && J.loads.size > 0) {
      I += '<table class="rpt-data"><thead><tr><th>Node</th>';
      const oe = [
        "F<sub>x</sub>",
        "F<sub>y</sub>",
        "F<sub>z</sub>",
        "M<sub>x</sub>",
        "M<sub>y</sub>",
        "M<sub>z</sub>"
      ];
      for (const ne of oe) I += `<th>${ne}</th>`;
      I += "</tr></thead><tbody>", J.loads.forEach((ne, ye) => {
        I += `<tr><td>${ye}</td>`, ne.forEach((Me) => {
          const Ae = Math.abs(Me) > 1e-10;
          I += `<td class="${Ae ? "nz" : ""}">${Ae ? He(Me) : "0"}</td>`;
        }), I += "</tr>";
      }), I += "</tbody></table>";
    }
    if (I += "<h2>6. Solution</h2>", I += "<p>After removing fixed DOFs, the reduced system is:</p>", I += '<div class="rpt-eq rpt-eq-highlight">K<sub>free</sub> \xB7 u<sub>free</sub> = F<sub>free</sub></div>', I += "<p>Solved using LU decomposition with partial pivoting (sparse matrix).</p>", I += "<h3>6.1 Nodal Displacements</h3>", we == null ? void 0 : we.deformations) {
      I += '<table class="rpt-data"><thead><tr><th>Node</th>';
      for (const oe of G) I += `<th>${oe}</th>`;
      I += "</tr></thead><tbody>", we.deformations.forEach((oe, ne) => {
        I += `<tr><td>${ne}</td>`, oe.forEach((ye) => {
          const Me = Math.abs(ye) > 1e-10;
          I += `<td class="${Me ? "nz" : ""}">${He(ye, 6)}</td>`;
        }), I += "</tr>";
      }), I += "</tbody></table>";
    }
    if (I += "<h3>6.2 Reactions</h3>", I += '<div class="rpt-eq">R = K<sub>total</sub> \xB7 u (extract at fixed DOFs)</div>', we == null ? void 0 : we.reactions) {
      I += '<table class="rpt-data"><thead><tr><th>Node</th>';
      for (const oe of G) I += `<th>${oe}</th>`;
      I += "</tr></thead><tbody>", we.reactions.forEach((oe, ne) => {
        I += `<tr><td>${ne}</td>`, oe.forEach((ye) => {
          const Me = Math.abs(ye) > 1e-10;
          I += `<td class="${Me ? "nz-react" : ""}">${Me ? He(ye, 4) : "0"}</td>`;
        }), I += "</tr>";
      }), I += "</tbody></table>";
    }
    if (I += "<h2>7. Internal Forces</h2>", I += "<p>For each element, transform global displacements to local and multiply by K<sub>local</sub>:</p>", I += '<div class="rpt-eq">u<sub>local</sub> = T \xB7 u<sub>global</sub></div>', I += '<div class="rpt-eq rpt-eq-highlight">f<sub>local</sub> = K<sub>local</sub> \xB7 u<sub>local</sub></div>', we == null ? void 0 : we.deformations) {
      const oe = [
        "N",
        "V<sub>y</sub>",
        "V<sub>z</sub>",
        "M<sub>x</sub>",
        "M<sub>y</sub>",
        "M<sub>z</sub>"
      ];
      I += '<table class="rpt-data"><thead><tr><th>Elem</th><th>Nodes</th>';
      for (const ne of oe) I += `<th>${ne}<sub>i</sub></th>`;
      for (const ne of oe) I += `<th>${ne}<sub>j</sub></th>`;
      I += "</tr></thead><tbody>";
      for (let ne = 0; ne < V; ne++) {
        const ye = B[ne];
        if (ye.length !== 2) continue;
        const Me = ye.map((Ae) => h[Ae]);
        try {
          const Ae = Oo(Me, k, ne), Re = Ro(Me), tt = [];
          for (const Ge of ye) {
            const ct = ((_g = we.deformations) == null ? void 0 : _g.get(Ge)) || [
              0,
              0,
              0,
              0,
              0,
              0
            ];
            tt.push(...ct);
          }
          const We = It(Re, tt), xt = It(Ae, We);
          I += `<tr><td>${ne}</td><td>${ye.join("\u2192")}</td>`;
          for (let Ge = 0; Ge < 12; Ge++) {
            const ct = Math.abs(xt[Ge]) > 1e-10;
            I += `<td class="${ct ? "nz" : ""}">${He(xt[Ge], 2)}</td>`;
          }
          I += "</tr>";
        } catch {
        }
      }
      I += "</tbody></table>";
    }
    const Be = `
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
    return he.innerHTML = Be + I, (_h = he.querySelector("#rpt-close")) == null ? void 0 : _h.addEventListener("click", () => he.remove()), he.querySelectorAll("[data-toggle]").forEach((oe) => {
      oe.addEventListener("click", () => {
        const ne = oe.dataset.toggle, ye = he.querySelector(`#rpt-${ne}`);
        if (ye) {
          const Me = ye.style.display !== "none";
          ye.style.display = Me ? "none" : "", oe.textContent = oe.textContent.replace(/^[▼▶]/, Me ? "\u25B6" : "\u25BC");
        }
      });
    }), he;
  }
  function He(e, h = 2) {
    return Math.abs(e) < 1e-10 ? "0" : Math.abs(e) >= 1e7 || Math.abs(e) < 0.01 && e !== 0 ? e.toExponential(h) : e.toFixed(h);
  }
  function Ho(e) {
    return Math.abs(e) < 1e-10 ? "0" : e.toFixed(4);
  }
  function xn(e, h) {
    var _a;
    const B = Math.min(h, 12);
    let k = '<div style="overflow-x:auto"><table class="rpt-mtx">';
    for (let J = 0; J < B; J++) {
      k += "<tr>";
      for (let we = 0; we < B; we++) {
        const ae = ((_a = e[J]) == null ? void 0 : _a[we]) ?? 0, V = Math.abs(ae) < 1e-10;
        k += `<td class="${V ? "z" : ""} ${J === we && !V ? "diag" : ""}">${V ? "0" : fa(ae)}</td>`;
      }
      k += "</tr>";
    }
    return k += "</table>", h > B && (k += `<div style="color:#888;font-size:9pt">(showing ${B}\xD7${B} of ${h}\xD7${h})</div>`), k += "</div>", k;
  }
  function fa(e) {
    return Math.abs(e) >= 1e6 || Math.abs(e) < 0.01 && e !== 0 ? e.toExponential(1) : Math.abs(e) >= 100 ? e.toFixed(0) : e.toFixed(2);
  }
  function ua() {
    const ae = [
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
    let V = '<svg viewBox="0 0 600 180" style="width:100%;max-width:600px;border:1px solid #ddd;border-radius:4px;margin:8px 0;background:#fafafa">';
    V += `<line x1="30" y1="${180 / 2}" x2="570" y2="${180 / 2}" stroke="#ccc" stroke-width="1"/>`, V += '<line x1="30" y1="20" x2="30" y2="160" stroke="#ccc" stroke-width="1"/>', V += `<text x="${600 / 2}" y="175" fill="#888" font-size="10" text-anchor="middle" font-family="sans-serif">\u03BE (0 \u2192 1)</text>`, V += `<text x="25" y="${180 / 2 - 60 - 5}" fill="#888" font-size="9" text-anchor="end" font-family="sans-serif">1</text>`, V += `<text x="25" y="${180 / 2 + 4}" fill="#888" font-size="9" text-anchor="end" font-family="sans-serif">0</text>`;
    for (const D of ae) {
      let pe = "";
      for (let me = 0; me <= 80; me++) {
        const Be = me / 80, oe = 30 + Be * 540, ne = 180 / 2 - D.fn(Be) * 60;
        pe += (me === 0 ? "M" : "L") + `${oe.toFixed(1)},${ne.toFixed(1)}`;
      }
      V += `<path d="${pe}" fill="none" stroke="${D.color}" stroke-width="2.5"/>`;
      const he = 0.75, I = 30 + he * 540 + 8, G = 180 / 2 - D.fn(he) * 60 - 6;
      V += `<text x="${I}" y="${G}" fill="${D.color}" font-size="11" font-weight="bold" font-family="sans-serif">${D.name}</text>`;
    }
    return V += "</svg>", V;
  }
  function ma(e, h) {
    const B = h * 6, k = Math.min(B, 30);
    let J = "<p>Assembly contribution map (number = how many elements contribute to each K<sub>total</sub> entry):</p>";
    J += '<div style="overflow-x:auto"><table class="rpt-assembly-map">', J += "<tr><td></td>";
    for (let ae = 0; ae < k; ae++) J += `<td style="color:#003366;font-weight:bold;font-size:7px">${ae}</td>`;
    J += "</tr>";
    const we = Array.from({
      length: k
    }, () => Array(k).fill(0));
    for (let ae = 0; ae < e.length; ae++) {
      const V = e[ae].map((D) => D * 6);
      for (const D of V) for (const pe of V) for (let he = 0; he < 6; he++) for (let I = 0; I < 6; I++) {
        const G = D + he, me = pe + I;
        G < k && me < k && we[G][me]++;
      }
    }
    for (let ae = 0; ae < k; ae++) {
      J += `<tr><td style="color:#003366;font-weight:bold;font-size:7px">${ae}</td>`;
      for (let V = 0; V < k; V++) {
        const D = we[ae][V], pe = D === 0 ? "#fff" : D === 1 ? "#e8f0fe" : D === 2 ? "#c6dcf5" : "#a0c4e8", he = D === 0 ? "" : D.toString();
        J += `<td style="background:${pe};color:#003366">${he}</td>`;
      }
      J += "</tr>";
    }
    return J += "</table></div>", B > k && (J += `<div style="color:#888;font-size:9pt">(showing ${k}\xD7${k} of ${B}\xD7${B})</div>`), J;
  }
  let hn = false;
  function ba(e) {
    if (hn || window.katex) {
      hn = true, e();
      return;
    }
    const h = document.createElement("link");
    h.rel = "stylesheet", h.href = "https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css", document.head.appendChild(h);
    const B = document.createElement("script");
    B.src = "https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.js", B.onload = () => {
      hn = true, e();
    }, document.head.appendChild(B);
  }
  function bs(e, h = false) {
    try {
      if (window.katex) return window.katex.renderToString(e, {
        displayMode: h,
        throwOnError: false
      });
    } catch {
    }
    return `<code class="er-tex-fallback">${e}</code>`;
  }
  function ga(e, h, B, k, J, we) {
    var _a, _b, _c, _d, _e, _f;
    const ae = B[e], V = ae.map((st) => h[st]), D = ae.length === 2, pe = D ? ro(Bt(V[1], V[0])) : 0, he = ((_a = k.elasticities) == null ? void 0 : _a.get(e)) ?? 0, I = ((_b = k.areas) == null ? void 0 : _b.get(e)) ?? 0, G = ((_c = k.momentsOfInertiaZ) == null ? void 0 : _c.get(e)) ?? 0, me = ((_d = k.momentsOfInertiaY) == null ? void 0 : _d.get(e)) ?? 0, Be = ((_e = k.shearModuli) == null ? void 0 : _e.get(e)) ?? 0, oe = ((_f = k.torsionalConstants) == null ? void 0 : _f.get(e)) ?? 0;
    let ne = null, ye = null, Me = null;
    try {
      ne = Oo(V, k, e), ye = Ro(V), Me = It($n(ye), It(ne, ye));
    } catch {
    }
    const Ae = D ? Bt(V[1], V[0]) : [
      0,
      0,
      0
    ], Re = pe > 0 ? Ae[0] / pe : 0, tt = pe > 0 ? Ae[1] / pe : 0, We = pe > 0 ? Ae[2] / pe : 0, xt = Math.sqrt(Re ** 2 + tt ** 2), Ge = [];
    if ((J == null ? void 0 : J.deformations) && D) for (const st of ae) {
      const Mt = J.deformations.get(st) || [
        0,
        0,
        0,
        0,
        0,
        0
      ];
      Ge.push(...Mt);
    }
    let ct = [], dt = [];
    if (Ge.length === 12 && ye && ne) {
      try {
        ct = It(ye, Ge);
      } catch {
        ct = Array(12).fill(0);
      }
      try {
        dt = It(ne, ct);
      } catch {
        dt = Array(12).fill(0);
      }
    }
    return {
      elemIdx: e,
      elem: ae,
      elmNodes: V,
      isFrame: D,
      L: pe,
      E: he,
      A: I,
      Iz: G,
      Iy: me,
      G: Be,
      J: oe,
      kLocal: ne,
      T: ye,
      kGlobal: Me,
      l: Re,
      m: tt,
      n: We,
      D: xt,
      uGlobal: Ge,
      uLocal: ct,
      fLocal: dt,
      dOut: J,
      aOut: we,
      totalNodes: h.length
    };
  }
  function xa(e, h, B, k, J, we) {
    var _a, _b;
    const ae = ga(e, h, B, k, J, we), V = document.createElement("div");
    return V.className = "er-panel", V.innerHTML = $a + `
    <div class="er-header">
      <span class="er-badge">Element ${e}</span>
      <span class="er-type">${ae.isFrame ? "Frame" : "Shell"} \u2014 Nodes ${ae.elem.join(" \u2192 ")} \u2014 L = ${ze(ae.L)}</span>
      <button class="er-fullscreen" id="er-fullscreen" title="Pantalla completa">\u26F6</button>
      <button class="er-close" id="er-close">\u2715</button>
    </div>
    <div class="er-tabs">
      <button class="er-tab active" data-tab="tabla">Tabla</button>
      <button class="er-tab" data-tab="math">Matematica Explicada</button>
      <button class="er-tab" data-tab="resumen">Resumen</button>
    </div>
    <div class="er-body" id="er-body-tabla">${ha(ae)}</div>
    <div class="er-body" id="er-body-math" style="display:none">${gs(ae)}</div>
    <div class="er-body" id="er-body-resumen" style="display:none">${va(ae)}</div>
  `, V.querySelectorAll(".er-tab").forEach((D) => {
      D.addEventListener("click", () => {
        V.querySelectorAll(".er-tab").forEach((he) => he.classList.remove("active")), D.classList.add("active");
        const pe = D.dataset.tab;
        V.querySelectorAll(".er-body").forEach((he) => he.style.display = "none"), V.querySelector(`#er-body-${pe}`).style.display = "";
      });
    }), (_a = V.querySelector("#er-close")) == null ? void 0 : _a.addEventListener("click", () => V.remove()), (_b = V.querySelector("#er-fullscreen")) == null ? void 0 : _b.addEventListener("click", () => {
      const D = V.classList.toggle("er-fullscreen-mode"), pe = V.querySelector("#er-fullscreen");
      pe && (pe.textContent = D ? "\u22A1" : "\u26F6");
    }), setTimeout(() => {
      const D = V.querySelector("#er-sf-canvas");
      D && vn(D);
      const pe = V.querySelector("#er-sf-canvas-math");
      pe && vn(pe);
    }, 50), ba(() => {
      const D = V.querySelector("#er-body-math");
      D && (D.innerHTML = gs(ae)), setTimeout(() => {
        const pe = V.querySelector("#er-sf-canvas-math");
        pe && vn(pe);
      }, 50), V.querySelectorAll(".er-deriv-header").forEach((pe) => {
        pe.addEventListener("click", () => {
          const he = pe.dataset.toggle, I = V.querySelector(`#er-${he}`);
          I && (I.style.display = I.style.display === "none" ? "" : "none");
        });
      });
    }), V;
  }
  function ha(e) {
    let h = "";
    if (h += '<div class="er-section-title">1. Propiedades</div>', h += '<table class="er-props">', h += `<tr><td>E</td><td>${ze(e.E)}</td><td>A</td><td>${ze(e.A)}</td></tr>`, h += `<tr><td>I<sub>z</sub></td><td>${ze(e.Iz)}</td><td>I<sub>y</sub></td><td>${ze(e.Iy)}</td></tr>`, h += `<tr><td>G</td><td>${ze(e.G)}</td><td>J</td><td>${ze(e.J)}</td></tr>`, h += "</table>", e.kLocal && (h += `<div class="er-section-title">2. K<sub>local</sub> (${e.kLocal.length}\xD7${e.kLocal.length})</div>`, h += Io(e.kLocal)), e.T && (h += '<div class="er-section-title">3. T \u2014 Transformaci\xF3n</div>', h += Io(e.T)), e.kGlobal && (h += '<div class="er-section-title">4. K<sub>global</sub> = T<sup>T</sup>\xB7K\xB7T</div>', h += Io(e.kGlobal)), h += '<div class="er-section-title">5. Desplazamientos</div>', e.uGlobal.length > 0) {
      const B = [
        "u<sub>x</sub>",
        "u<sub>y</sub>",
        "u<sub>z</sub>",
        "\u03B8<sub>x</sub>",
        "\u03B8<sub>y</sub>",
        "\u03B8<sub>z</sub>"
      ];
      for (let k = 0; k < e.elem.length; k++) {
        h += `<div class="er-sub">Nodo ${e.elem[k]}: `;
        for (let J = 0; J < 6; J++) {
          const we = e.uGlobal[k * 6 + J];
          h += `${B[J]}=<span class="${Math.abs(we) > 1e-10 ? "nz" : ""}">${ze(we, 6)}</span> `;
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
      for (const k of B) h += `<th>${k}</th>`;
      h += "</tr>", h += "<tr><td>Nodo i</td>";
      for (let k = 0; k < 6; k++) h += `<td class="${Math.abs(e.fLocal[k]) > 1e-10 ? "nz" : ""}">${ze(e.fLocal[k], 3)}</td>`;
      h += "</tr><tr><td>Nodo j</td>";
      for (let k = 6; k < 12; k++) h += `<td class="${Math.abs(e.fLocal[k]) > 1e-10 ? "nz" : ""}">${ze(e.fLocal[k], 3)}</td>`;
      h += "</tr></table>";
    } else h += '<div class="er-sub">Sin an\xE1lisis</div>';
    return h;
  }
  function gs(e) {
    if (!e.isFrame) return '<div class="er-sub">Shell element math: coming soon</div>';
    let h = "";
    const B = (he) => bs(he), k = (he) => bs(he, true);
    h += '<div class="er-section-title">1. Geometria del elemento</div>', h += "<p>Viga Euler-Bernoulli con 2 nodos y 6 GDL por nodo:</p>", h += `<div class="er-eq">${k("\\text{DOFs} = [u_x,\\, u_y,\\, u_z,\\, \\theta_x,\\, \\theta_y,\\, \\theta_z] \\quad \\Rightarrow \\quad 12 \\text{ GDL totales}")}</div>`, h += '<div class="er-eq-num">', h += `${B("\\text{Nodo } i")} = (${e.elmNodes[0].map((he) => ze(he)).join(", ")})<br/>`, h += `${B("\\text{Nodo } j")} = (${e.elmNodes[1].map((he) => ze(he)).join(", ")})<br/>`, h += `${k(`L = \\sqrt{(x_j - x_i)^2 + (y_j - y_i)^2 + (z_j - z_i)^2} = \\mathbf{${ze(e.L)}}`)}`, h += "</div>", h += '<div class="er-section-title">2. Funciones de forma</div>', h += "<p>La viga usa <b>interpolacion lineal</b> para axial/torsion y <b>polinomios cubicos de Hermite</b> para flexion.</p>", h += '<div class="er-subsec">2.1 Axial y Torsion (lineal)</div>', h += `<div class="er-eq">${k("N_1(\\xi) = 1 - \\xi \\qquad N_2(\\xi) = \\xi \\qquad \\text{donde } \\xi = \\frac{x}{L} \\in [0,1]")}</div>`, h += "<p>Primera derivada:</p>", h += `<div class="er-eq">${k("\\frac{dN_1}{d\\xi} = -1 \\qquad \\frac{dN_2}{d\\xi} = 1")}</div>`, h += '<div class="er-subsec">2.2 Flexion (Hermite cubicos)</div>', h += `<p>Las funciones de Hermite garantizan continuidad ${B("C^1")} (desplazamiento y pendiente continuos):</p>`, h += `<div class="er-eq">${k("H_1(\\xi) = 1 - 3\\xi^2 + 2\\xi^3 \\qquad \\text{(desplazamiento nodo } i\\text{)}")}</div>`, h += `<div class="er-eq">${k("H_2(\\xi) = L\\,\\xi\\,(1-\\xi)^2 \\qquad \\text{(rotacion nodo } i\\text{)}")}</div>`, h += `<div class="er-eq">${k("H_3(\\xi) = 3\\xi^2 - 2\\xi^3 \\qquad \\text{(desplazamiento nodo } j\\text{)}")}</div>`, h += `<div class="er-eq">${k("H_4(\\xi) = L\\,\\xi^2(\\xi - 1) \\qquad \\text{(rotacion nodo } j\\text{)}")}</div>`, h += `<div class="er-subsec">Derivadas segunda (curvatura ${B("\\kappa = \\frac{d^2v}{dx^2}")}):</div>`, h += `<div class="er-eq">${k("H_1'' = \\frac{-6}{L^2}(1-2\\xi) \\qquad H_2'' = \\frac{-2}{L}(2-3\\xi)")}</div>`, h += `<div class="er-eq">${k("H_3'' = \\frac{6}{L^2}(1-2\\xi) \\qquad H_4'' = \\frac{-2}{L}(1-3\\xi)")}</div>`, h += '<canvas id="er-sf-canvas-math" width="500" height="250" style="width:100%;border:1px solid var(--fem-border);border-radius:4px;margin:8px 0;"></canvas>', h += '<div class="er-section-title">3. Matriz B (strain-displacement)</div>', h += "<p>La matriz B relaciona desplazamientos nodales con deformaciones internas:</p>", h += `<div class="er-eq">${k("\\boldsymbol{\\varepsilon} = \\mathbf{B} \\cdot \\mathbf{u}")}</div>`, h += '<div class="er-subsec">3.1 Deformacion axial</div>', h += `<div class="er-eq">${k("\\varepsilon_{axial} = \\frac{du}{dx} = \\frac{1}{L} \\begin{bmatrix} -1 & 1 \\end{bmatrix} \\begin{Bmatrix} u_i \\\\ u_j \\end{Bmatrix}")}</div>`, h += `<div class="er-subsec">3.2 Curvatura por flexion (plano XY \u2192 ${B("I_z")})</div>`, h += `<div class="er-eq">${k("\\kappa_z = \\frac{d^2 v}{dx^2} = \\mathbf{B}_{bz} \\cdot \\begin{Bmatrix} v_i \\\\ \\theta_{zi} \\\\ v_j \\\\ \\theta_{zj} \\end{Bmatrix}")}</div>`, h += `<div class="er-eq">${k("\\mathbf{B}_{bz}(\\xi) = \\frac{1}{L^2} \\begin{bmatrix} H_1'' & H_2'' & H_3'' & H_4'' \\end{bmatrix}")}</div>`, h += `<div class="er-subsec">3.3 Curvatura (plano XZ \u2192 ${B("I_y")})</div>`, h += `<div class="er-eq">${k("\\kappa_y = \\frac{d^2 w}{dx^2} = \\mathbf{B}_{by} \\cdot \\begin{Bmatrix} w_i \\\\ \\theta_{yi} \\\\ w_j \\\\ \\theta_{yj} \\end{Bmatrix}")}</div>`, h += '<div class="er-subsec">3.4 Torsion</div>', h += `<div class="er-eq">${k("\\phi' = \\frac{d\\theta_x}{dx} = \\frac{1}{L} \\begin{bmatrix} -1 & 1 \\end{bmatrix} \\begin{Bmatrix} \\theta_{xi} \\\\ \\theta_{xj} \\end{Bmatrix}")}</div>`, h += '<div class="er-section-title">4. Relaciones constitutivas D</div>', h += "<p>Cada modo de deformacion tiene su rigidez material:</p>", h += `<div class="er-eq">${k(`\\text{Axial: } \\sigma = E \\cdot \\varepsilon \\;\\Rightarrow\\; D_{ax} = EA = ${ze(e.E)} \\times ${ze(e.A)} = \\mathbf{${ze(e.E * e.A)}}`)}</div>`, h += `<div class="er-eq">${k(`\\text{Flex Z: } M_z = EI_z \\cdot \\kappa \\;\\Rightarrow\\; D_{bz} = EI_z = ${ze(e.E)} \\times ${ze(e.Iz)} = \\mathbf{${ze(e.E * e.Iz)}}`)}</div>`, h += `<div class="er-eq">${k(`\\text{Flex Y: } M_y = EI_y \\cdot \\kappa \\;\\Rightarrow\\; D_{by} = EI_y = ${ze(e.E)} \\times ${ze(e.Iy)} = \\mathbf{${ze(e.E * e.Iy)}}`)}</div>`, h += `<div class="er-eq">${k(`\\text{Torsion: } T = GJ \\cdot \\phi' \\;\\Rightarrow\\; D_t = GJ = ${ze(e.G)} \\times ${ze(e.J)} = \\mathbf{${ze(e.G * e.J)}}`)}</div>`, h += `<div class="er-section-title">5. Integracion \u2192 ${B("\\mathbf{K}_{local}")}</div>`, h += "<p>La matriz de rigidez local se obtiene integrando analiticamente:</p>", h += `<div class="er-eq er-eq-main">${k("\\mathbf{K}_{local} = \\int_0^L \\mathbf{B}^T \\cdot \\mathbf{D} \\cdot \\mathbf{B} \\; dx")}</div>`;
    const J = e.E * e.A / e.L, we = e.E * e.Iz / e.L ** 3, ae = e.E * e.Iy / e.L ** 3, V = e.G * e.J / e.L;
    if (h += '<div class="er-deriv-block">', h += '<div class="er-deriv-header" data-toggle="deriv-axial">\u{1F4D6} K[0,0] = EA/L \u2014 <i>click para ver derivacion completa</i></div>', h += '<div id="er-deriv-axial" class="er-deriv-body" style="display:none">', h += "<p><b>Paso 1:</b> Funcion de forma axial</p>", h += `<div class="er-eq">${k("u(\\xi) = N_1 \\cdot u_i + N_2 \\cdot u_j = (1-\\xi)\\,u_i + \\xi\\,u_j")}</div>`, h += "<p><b>Paso 2:</b> Derivada (deformacion)</p>", h += `<div class="er-eq">${k("\\varepsilon = \\frac{du}{dx} = \\frac{1}{L}\\frac{du}{d\\xi} = \\frac{1}{L}(-u_i + u_j)")}</div>`, h += `<div class="er-eq">${k("\\mathbf{B}_{ax} = \\frac{1}{L}\\begin{bmatrix} -1 & 1 \\end{bmatrix}")}</div>`, h += `<p><b>Paso 3:</b> Integracion ${B("K = \\int_0^L B^T \\cdot EA \\cdot B \\; dx")}</p>`, h += `<div class="er-eq">${k("K_{ax} = \\int_0^L \\frac{1}{L}\\begin{bmatrix}-1\\\\1\\end{bmatrix} \\cdot EA \\cdot \\frac{1}{L}\\begin{bmatrix}-1 & 1\\end{bmatrix} dx")}</div>`, h += `<div class="er-eq">${k("= \\frac{EA}{L^2} \\begin{bmatrix}1 & -1\\\\-1 & 1\\end{bmatrix} \\int_0^L dx = \\frac{EA}{L^2} \\cdot L \\begin{bmatrix}1 & -1\\\\-1 & 1\\end{bmatrix}")}</div>`, h += `<div class="er-eq er-eq-main">${k(`K_{ax} = \\frac{EA}{L}\\begin{bmatrix}1 & -1\\\\-1 & 1\\end{bmatrix} = \\frac{${ze(e.E)}\\times${ze(e.A)}}{${ze(e.L)}}\\begin{bmatrix}1 & -1\\\\-1 & 1\\end{bmatrix}`)}</div>`, h += `<div class="er-eq">${k(`K[0,0] = K[6,6] = \\frac{EA}{L} = \\mathbf{${ze(J)}}`)}</div>`, h += "</div></div>", h += '<div class="er-deriv-block">', h += '<div class="er-deriv-header" data-toggle="deriv-bend">\u{1F4D6} K[1,1] = 12EI<sub>z</sub>/L\xB3 \u2014 <i>click para ver derivacion completa</i></div>', h += '<div id="er-deriv-bend" class="er-deriv-body" style="display:none">', h += `<p><b>Paso 1:</b> Funcion de forma Hermite para ${B("v(\\xi)")}</p>`, h += `<div class="er-eq">${k("v(\\xi) = H_1 v_i + H_2 \\theta_i + H_3 v_j + H_4 \\theta_j")}</div>`, h += "<p><b>Paso 2:</b> Segunda derivada (curvatura)</p>", h += `<div class="er-eq">${k("\\kappa = \\frac{d^2v}{dx^2} = \\frac{1}{L^2}\\frac{d^2v}{d\\xi^2}")}</div>`, h += `<div class="er-eq">${k("H_1'' = -6+12\\xi, \\quad H_2'' = L(-4+6\\xi), \\quad H_3'' = 6-12\\xi, \\quad H_4'' = L(-2+6\\xi)")}</div>`, h += `<div class="er-eq">${k("\\mathbf{B}_b = \\frac{1}{L^2}\\begin{bmatrix} H_1'' & H_2'' & H_3'' & H_4'' \\end{bmatrix}")}</div>`, h += `<p><b>Paso 3:</b> Integracion para K[1,1] (termino ${B("v_i \\cdot v_i")})</p>`, h += `<div class="er-eq">${k("K[1,1] = \\int_0^L \\frac{(H_1'')^2}{L^4} \\cdot EI_z \\; dx = \\frac{EI_z}{L^4} \\int_0^L (-6+12\\xi)^2 \\; dx")}</div>`, h += `<p>Expandimos: ${B("(-6+12\\xi)^2 = 36 - 144\\xi + 144\\xi^2")}</p>`, h += `<div class="er-eq">${k("\\int_0^L (36-144\\xi+144\\xi^2)\\,dx = 36L - 72L + 48L = 12L")}</div>`, h += `<div class="er-eq er-eq-main">${k(`K[1,1] = \\frac{EI_z}{L^4} \\cdot 12L = \\frac{12EI_z}{L^3} = \\frac{12 \\times ${ze(e.E)} \\times ${ze(e.Iz)}}{${ze(e.L)}^3} = \\mathbf{${ze(12 * we)}}`)}</div>`, h += "</div></div>", h += '<div class="er-deriv-block">', h += '<div class="er-deriv-header" data-toggle="deriv-tors">\u{1F4D6} K[3,3] = GJ/L \u2014 <i>click para ver derivacion</i></div>', h += '<div id="er-deriv-tors" class="er-deriv-body" style="display:none">', h += `<p>Mismo proceso que axial pero con ${B("\\theta_x")} y ${B("GJ")}:</p>`, h += `<div class="er-eq">${k(`K_{torsion} = \\frac{GJ}{L}\\begin{bmatrix}1 & -1\\\\-1 & 1\\end{bmatrix} = \\frac{${ze(e.G)}\\times${ze(e.J)}}{${ze(e.L)}} = \\mathbf{${ze(V)}}`)}</div>`, h += "</div></div>", h += '<div class="er-deriv-block">', h += '<div class="er-deriv-header" data-toggle="deriv-coup">\u{1F4D6} K[1,5] = 6EI<sub>z</sub>/L\xB2 \u2014 <i>acoplamiento corte-momento</i></div>', h += '<div id="er-deriv-coup" class="er-deriv-body" style="display:none">', h += `<p>Termino cruzado ${B("v_i \\cdot \\theta_{zi}")} (acoplamiento corte-momento):</p>`, h += `<div class="er-eq">${k("K[1,5] = \\frac{EI_z}{L^4} \\int_0^L H_1'' \\cdot H_2'' \\; dx")}</div>`, h += `<div class="er-eq">${k("= \\frac{EI_z}{L^4} \\int_0^L (-6+12\\xi) \\cdot L(-4+6\\xi) \\; dx")}</div>`, h += `<div class="er-eq">${k("= \\frac{EI_z}{L^3} \\int_0^L (24-36\\xi-48\\xi+72\\xi^2) \\; dx = \\frac{EI_z}{L^3} \\cdot 6L")}</div>`, h += `<div class="er-eq er-eq-main">${k(`K[1,5] = \\frac{6EI_z}{L^2} = \\mathbf{${ze(6 * e.E * e.Iz / e.L ** 2)}}`)}</div>`, h += "</div></div>", h += '<div class="er-subsec">Resumen de coeficientes:</div>', h += `<div class="er-eq">${k(`\\frac{EA}{L} = \\mathbf{${ze(J)}} \\qquad \\frac{12EI_z}{L^3} = \\mathbf{${ze(12 * we)}} \\qquad \\frac{12EI_y}{L^3} = \\mathbf{${ze(12 * ae)}}`)}</div>`, h += `<div class="er-eq">${k(`\\frac{GJ}{L} = \\mathbf{${ze(V)}} \\qquad \\frac{4EI_y}{L} = \\mathbf{${ze(4 * e.E * e.Iy / e.L)}} \\qquad \\frac{4EI_z}{L} = \\mathbf{${ze(4 * e.E * e.Iz / e.L)}}`)}</div>`, h += `<div class="er-eq">${k(`\\frac{6EI_z}{L^2} = \\mathbf{${ze(6 * e.E * e.Iz / e.L ** 2)}} \\qquad \\frac{6EI_y}{L^2} = \\mathbf{${ze(6 * e.E * e.Iy / e.L ** 2)}}`)}</div>`, e.kLocal && (h += `<div class="er-subsec">Resultado: ${B("\\mathbf{K}_{local}")} (12x12)</div>`, h += Io(e.kLocal)), h += '<div class="er-section-title">6. Transformacion de coordenadas</div>', h += "<p>Los cosenos directores del eje del elemento:</p>", h += `<div class="er-eq">${k(`l = \\frac{x_j - x_i}{L} = ${No(e.l)} \\qquad m = \\frac{y_j - y_i}{L} = ${No(e.m)} \\qquad n = \\frac{z_j - z_i}{L} = ${No(e.n)}`)}</div>`, h += `<div class="er-eq">${k(`D = \\sqrt{l^2 + m^2} = ${No(e.D)}`)}</div>`, Math.abs(e.n) > 0.999) {
      h += `<p>Caso especial: elemento vertical (${B(`n \\approx ${e.n > 0 ? "+1" : "-1"}`)}):</p>`;
      const he = e.n > 0 ? "\\boldsymbol{\\lambda} = \\begin{bmatrix} 0 & 0 & 1 \\\\ 0 & 1 & 0 \\\\ -1 & 0 & 0 \\end{bmatrix}" : "\\boldsymbol{\\lambda} = \\begin{bmatrix} 0 & 0 & -1 \\\\ 0 & 1 & 0 \\\\ 1 & 0 & 0 \\end{bmatrix}";
      h += `<div class="er-eq">${k(he)}</div>`;
    } else h += `<div class="er-eq">${k("\\boldsymbol{\\lambda} = \\begin{bmatrix} l & m & n \\\\ -m/D & l/D & 0 \\\\ -ln/D & -mn/D & D \\end{bmatrix}")}</div>`;
    h += `<div class="er-eq er-eq-main">${k("\\mathbf{T} = \\mathbf{I}_4 \\otimes \\boldsymbol{\\lambda} \\quad \\text{(Kronecker product} \\rightarrow 12 \\times 12 \\text{ bloque-diagonal)}")}</div>`, h += `<div class="er-section-title">7. ${B("\\mathbf{K}_{global}")} = ${B("\\mathbf{T}^T \\cdot \\mathbf{K}_{local} \\cdot \\mathbf{T}")}</div>`, h += "<p>Transformar la rigidez local al sistema global de coordenadas:</p>", h += `<div class="er-eq er-eq-main">${k("\\mathbf{K}_{global} = \\mathbf{T}^T \\cdot \\mathbf{K}_{local} \\cdot \\mathbf{T}")}</div>`, e.kGlobal && (h += Io(e.kGlobal)), h += '<div class="er-section-title">8. Ensamblaje</div>';
    const D = e.elem[0] * 6, pe = e.elem[1] * 6;
    if (h += `<div class="er-eq">${k(`\\text{Nodo } ${e.elem[0]} \\rightarrow \\text{DOFs } [${D} \\ldots ${D + 5}]`)}</div>`, h += `<div class="er-eq">${k(`\\text{Nodo } ${e.elem[1]} \\rightarrow \\text{DOFs } [${pe} \\ldots ${pe + 5}]`)}</div>`, h += `<div class="er-eq">${k("\\mathbf{K}_{total}[\\text{DOFs}_i, \\text{DOFs}_j] \\mathrel{+}= \\mathbf{K}_{global}[i, j]")}</div>`, h += '<div class="er-section-title">9. Recuperacion de fuerzas internas</div>', h += `<div class="er-eq">${k("\\mathbf{u}_{local} = \\mathbf{T} \\cdot \\mathbf{u}_{global}")}</div>`, h += `<div class="er-eq er-eq-main">${k("\\mathbf{f}_{local} = \\mathbf{K}_{local} \\cdot \\mathbf{u}_{local}")}</div>`, e.fLocal.length > 0 && e.fLocal.some((he) => he !== 0)) {
      const he = [
        "N",
        "V<sub>y</sub>",
        "V<sub>z</sub>",
        "M<sub>x</sub>",
        "M<sub>y</sub>",
        "M<sub>z</sub>"
      ];
      h += '<table class="er-forces"><tr><th></th>';
      for (const I of he) h += `<th>${I}</th>`;
      h += `</tr><tr><td>i (${e.elem[0]})</td>`;
      for (let I = 0; I < 6; I++) h += `<td class="${Math.abs(e.fLocal[I]) > 1e-10 ? "nz" : ""}">${ze(e.fLocal[I], 3)}</td>`;
      h += `</tr><tr><td>j (${e.elem[1]})</td>`;
      for (let I = 6; I < 12; I++) h += `<td class="${Math.abs(e.fLocal[I]) > 1e-10 ? "nz" : ""}">${ze(e.fLocal[I], 3)}</td>`;
      h += "</tr></table>";
    }
    return h;
  }
  function va(e) {
    let h = "";
    if (h += `<div class="er-section-title">Resumen \u2014 Elemento ${e.elemIdx}</div>`, h += '<table class="er-props">', h += `<tr><td>Tipo</td><td>${e.isFrame ? "Frame (Euler-Bernoulli)" : "Shell"}</td></tr>`, h += `<tr><td>Nodos</td><td>${e.elem.join(" \u2192 ")}</td></tr>`, h += `<tr><td>Longitud</td><td><b>${ze(e.L)}</b></td></tr>`, h += `<tr><td>E</td><td>${ze(e.E)}</td></tr>`, h += `<tr><td>A</td><td>${ze(e.A)}</td></tr>`, h += "</table>", e.uGlobal.length > 0) {
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
      for (const k of B) h += `<th>${k}</th>`;
      h += "</tr>";
      for (let k = 0; k < e.elem.length; k++) {
        h += `<tr><td>${e.elem[k]}</td>`;
        for (let J = 0; J < 6; J++) {
          const we = e.uGlobal[k * 6 + J];
          h += `<td class="${Math.abs(we) > 1e-10 ? "nz" : ""}">${ze(we, 6)}</td>`;
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
      for (const k of B) h += `<th>${k}</th>`;
      h += "</tr><tr><td>Nodo i</td>";
      for (let k = 0; k < 6; k++) h += `<td class="${Math.abs(e.fLocal[k]) > 1e-10 ? "nz" : ""}">${ze(e.fLocal[k], 3)}</td>`;
      h += "</tr><tr><td>Nodo j</td>";
      for (let k = 6; k < 12; k++) h += `<td class="${Math.abs(e.fLocal[k]) > 1e-10 ? "nz" : ""}">${ze(e.fLocal[k], 3)}</td>`;
      h += "</tr></table>";
    }
    return h;
  }
  function ze(e, h = 2) {
    return Math.abs(e) < 1e-10 ? "0" : Math.abs(e) >= 1e7 || Math.abs(e) < 0.01 && e !== 0 ? e.toExponential(h) : e.toFixed(h);
  }
  function No(e) {
    return Math.abs(e) < 1e-10 ? "0" : e.toFixed(4);
  }
  function Io(e) {
    var _a;
    const h = e.length, B = Math.min(h, 12);
    let k = '<div style="overflow-x:auto"><table class="er-matrix">';
    for (let J = 0; J < B; J++) {
      k += "<tr>";
      for (let we = 0; we < B; we++) {
        const ae = ((_a = e[J]) == null ? void 0 : _a[we]) ?? 0, V = Math.abs(ae) < 1e-10;
        k += `<td class="${V ? "z" : ""} ${J === we && !V ? "diag" : ""}">${V ? "0" : ya(ae)}</td>`;
      }
      k += "</tr>";
    }
    return k += "</table>", h > B && (k += `<div style="color:var(--fem-label);font-size:9px">(${B}\xD7${B} de ${h}\xD7${h})</div>`), k += "</div>", k;
  }
  function ya(e) {
    return Math.abs(e) >= 1e6 || Math.abs(e) < 0.01 && e !== 0 ? e.toExponential(1) : Math.abs(e) >= 100 ? e.toFixed(0) : e.toFixed(2);
  }
  function vn(e) {
    const h = e.getContext("2d");
    if (!h) return;
    const B = e.width, k = e.height, J = 30, we = B - 2 * J, ae = (k - 3 * J) / 2;
    h.fillStyle = getComputedStyle(document.body).getPropertyValue("--fem-bg").trim() || "#111", h.fillRect(0, 0, B, k);
    const V = (D, pe, he) => {
      h.strokeStyle = "#333", h.lineWidth = 1, h.strokeRect(J, D, we, ae), h.strokeStyle = "#444", h.beginPath(), h.moveTo(J, D + ae / 2), h.lineTo(J + we, D + ae / 2), h.stroke(), h.fillStyle = "#888", h.font = "11px sans-serif", h.fillText(pe, J + 4, D + 14);
      for (const G of he) {
        h.strokeStyle = G.color, h.lineWidth = 2.5, h.beginPath();
        for (let me = 0; me <= 100; me++) {
          const Be = me / 100, oe = J + Be * we, ne = D + ae / 2 - G.fn(Be) * (ae / 2 * 0.85);
          me === 0 ? h.moveTo(oe, ne) : h.lineTo(oe, ne);
        }
        h.stroke();
      }
      let I = J + we - 90;
      for (const G of he) h.fillStyle = G.color, h.font = "bold 10px sans-serif", h.fillText(G.label, I, D + ae - 6), I += 36;
      h.fillStyle = "#666", h.font = "9px monospace", h.fillText("0", J, D + ae + 12), h.fillText("1", J + we - 6, D + ae + 12), h.fillText("\u03BE", J + we / 2, D + ae + 12);
    };
    V(J, "Axial (lineal)", [
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
    ]), V(J + ae + J, "Flexi\xF3n (Hermite c\xFAbicos)", [
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
</style>`, Eo = [
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
  let Bo = false, co = null, Lt = null, bt = null, lt = null;
  function wa() {
    lt = document.createElement("button"), lt.id = "help-tour-btn", lt.innerHTML = "?", lt.title = "Ayuda interactiva \u2014 Tour guiado", lt.style.cssText = `
    position: fixed; bottom: 20px; right: 20px; z-index: 9999999;
    width: 48px; height: 48px; border-radius: 50%;
    background: linear-gradient(135deg, #0066cc, #0099ff);
    color: white; border: 3px solid rgba(255,255,255,0.3);
    font-size: 24px; font-weight: bold; cursor: pointer;
    box-shadow: 0 4px 15px rgba(0,102,204,0.4);
    transition: transform 0.2s, box-shadow 0.2s;
    font-family: 'Arial Nova', sans-serif;
    animation: helpPulse 2s infinite;
  `, lt.addEventListener("mouseenter", () => {
      lt.style.transform = "scale(1.15)", lt.style.boxShadow = "0 6px 20px rgba(0,102,204,0.6)";
    }), lt.addEventListener("mouseleave", () => {
      lt.style.transform = "scale(1)", lt.style.boxShadow = "0 4px 15px rgba(0,102,204,0.4)";
    }), lt.addEventListener("click", () => {
      Bo ? wn() : Ma();
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
  `, document.head.appendChild(e), lt;
  }
  function Ma() {
    Bo = true, lt && (lt.innerHTML = "\u2715", lt.style.background = "linear-gradient(135deg, #cc3333, #ff4444)", lt.style.animation = "none"), co = document.createElement("div"), co.id = "tour-overlay", co.style.cssText = `
    position: fixed; inset: 0; z-index: 9999990;
    pointer-events: none;
  `, document.body.appendChild(co), $o(0);
  }
  function wn() {
    Bo = false, lt && (lt.innerHTML = "?", lt.style.background = "linear-gradient(135deg, #0066cc, #0099ff)", lt.style.animation = "helpPulse 2s infinite"), Lt && (Lt.remove(), Lt = null), bt && (bt.remove(), bt = null), co && (co.remove(), co = null);
  }
  function $o(e) {
    var _a, _b;
    if (e >= Eo.length) {
      ka();
      return;
    }
    const h = Eo[e], B = document.querySelector(h.selector);
    if (!B) {
      $o(e + 1);
      return;
    }
    B.scrollIntoView({
      behavior: "smooth",
      block: "nearest"
    }), Lt && Lt.remove(), bt && bt.remove();
    const k = B.getBoundingClientRect(), J = window.innerWidth, we = window.innerHeight, ae = 320, V = 180;
    Lt = document.createElement("div"), Lt.style.cssText = `
    position: fixed;
    left: ${k.left - 6}px; top: ${k.top - 6}px;
    width: ${k.width + 12}px; height: ${k.height + 12}px;
    border-radius: 8px;
    z-index: 9999991;
    pointer-events: none;
    animation: spotlightPulse 1.5s ease-in-out infinite;
    transition: all 0.3s ease;
  `, document.body.appendChild(Lt);
    const D = J - k.right, pe = k.left, he = we - k.bottom, I = k.top;
    let G = h.position || "bottom";
    G === "bottom" && he < V + 20 && (G = "top"), G === "top" && I < V + 20 && (G = "right"), G === "right" && D < ae + 20 && (G = "left"), G === "left" && pe < ae + 20 && (G = "bottom");
    let me, Be, oe = "";
    switch (G) {
      case "bottom":
        me = k.left + k.width / 2 - ae / 2, Be = k.bottom + 14, oe = "position:absolute;top:-8px;left:50%;transform:translateX(-50%);width:0;height:0;border-left:8px solid transparent;border-right:8px solid transparent;border-bottom:8px solid #0099ff;";
        break;
      case "top":
        me = k.left + k.width / 2 - ae / 2, Be = k.top - V - 14, oe = "position:absolute;bottom:-8px;left:50%;transform:translateX(-50%);width:0;height:0;border-left:8px solid transparent;border-right:8px solid transparent;border-top:8px solid #0099ff;";
        break;
      case "right":
        me = k.right + 14, Be = k.top + k.height / 2 - V / 2, oe = "position:absolute;left:-8px;top:50%;transform:translateY(-50%);width:0;height:0;border-top:8px solid transparent;border-bottom:8px solid transparent;border-right:8px solid #0099ff;";
        break;
      case "left":
        me = k.left - ae - 14, Be = k.top + k.height / 2 - V / 2, oe = "position:absolute;right:-8px;top:50%;transform:translateY(-50%);width:0;height:0;border-top:8px solid transparent;border-bottom:8px solid transparent;border-left:8px solid #0099ff;";
        break;
    }
    me = Math.max(10, Math.min(me, J - ae - 10)), Be = Math.max(10, Math.min(Be, we - V - 10)), bt = document.createElement("div"), bt.style.cssText = `
    position: fixed;
    left: ${me}px; top: ${Be}px;
    width: ${ae}px;
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
  `, bt.innerHTML = `
    <div style="${oe}"></div>
    <div style="display:flex;align-items:center;margin-bottom:8px;">
      <span class="tour-hand">\u{1F446}</span>
      <span style="color:#0099ff;font-weight:bold;font-size:15px;">${h.title}</span>
      <span style="margin-left:auto;color:#666;font-size:11px;">${e + 1}/${Eo.length}</span>
    </div>
    <p style="margin:0 0 12px 0;font-size:12px;line-height:1.6;color:#bbb;">${h.description}</p>
    <div style="display:flex;gap:8px;justify-content:flex-end;">
      ${e > 0 ? '<button id="tour-prev" style="padding:5px 14px;background:transparent;color:#888;border:1px solid #444;border-radius:6px;cursor:pointer;font-size:11px;">\u25C0 Anterior</button>' : ""}
      <button id="tour-next" style="padding:5px 18px;background:linear-gradient(135deg,#0066cc,#0099ff);color:white;border:none;border-radius:6px;cursor:pointer;font-size:12px;font-weight:bold;">
        ${e < Eo.length - 1 ? "Siguiente \u25B6" : "Finalizar \u2713"}
      </button>
    </div>
    <div style="margin-top:8px;display:flex;gap:3px;justify-content:center;">
      ${Eo.map((ye, Me) => `<div style="width:${Me === e ? "16px" : "6px"};height:6px;border-radius:3px;background:${Me === e ? "#0099ff" : Me < e ? "#004488" : "#333"};transition:all 0.3s;"></div>`).join("")}
    </div>
  `, document.body.appendChild(bt), (_a = bt.querySelector("#tour-next")) == null ? void 0 : _a.addEventListener("click", () => {
      $o(e + 1);
    }), (_b = bt.querySelector("#tour-prev")) == null ? void 0 : _b.addEventListener("click", () => {
      $o(e - 1);
    });
    const ne = (ye) => {
      if (!Bo) {
        document.removeEventListener("keydown", ne);
        return;
      }
      (ye.key === "ArrowRight" || ye.key === "Enter") && ($o(e + 1), document.removeEventListener("keydown", ne)), ye.key === "ArrowLeft" && ($o(Math.max(0, e - 1)), document.removeEventListener("keydown", ne)), ye.key === "Escape" && (wn(), document.removeEventListener("keydown", ne));
    };
    document.addEventListener("keydown", ne);
  }
  function ka() {
    var _a;
    Lt && (Lt.remove(), Lt = null), bt && (bt.remove(), bt = null), bt = document.createElement("div"), bt.style.cssText = `
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
  `, bt.innerHTML = `
    <div style="font-size:48px;margin-bottom:12px;">\u{1F393}</div>
    <h3 style="color:#00cc66;margin:0 0 8px 0;font-size:18px;">Tour Completado</h3>
    <p style="color:#888;font-size:12px;line-height:1.6;margin:0 0 16px 0;">
      Ya conoces las herramientas principales.<br>
      Presiona <b style="color:#0099ff">?</b> en cualquier momento para repetir el tour.<br>
      Usa <b style="color:#0099ff">Inspect</b> en un elemento para ver el analisis FEM completo.
    </p>
    <button id="tour-done" style="padding:8px 24px;background:linear-gradient(135deg,#00aa55,#00cc66);color:white;border:none;border-radius:8px;cursor:pointer;font-size:14px;font-weight:bold;">Entendido</button>
  `, document.body.appendChild(bt), (_a = bt.querySelector("#tour-done")) == null ? void 0 : _a.addEventListener("click", () => wn());
  }
  function Sa(e) {
    const h = e.split(/\r?\n/), B = {
      force: "TONF",
      length: "M"
    }, k = [], J = /* @__PURE__ */ new Map(), we = /* @__PURE__ */ new Map(), ae = /* @__PURE__ */ new Map(), V = [], D = [], pe = /* @__PURE__ */ new Map(), he = /* @__PURE__ */ new Map();
    let I = "", G = "";
    for (const ge of h) {
      const ke = ge.trim();
      if (!ke || ke.startsWith("$")) {
        ke.startsWith("$ ") && (G = ke.substring(2).trim());
        continue;
      }
      if (G === "CONTROLS") {
        const te = ke.match(/UNITS\s+"([^"]+)"\s+"([^"]+)"/);
        te && (B.force = te[1], B.length = te[2]);
        const Ie = ke.match(/TITLE2\s+"([^"]+)"/);
        Ie && (I = Ie[1]);
      }
      if (G === "STORIES - IN SEQUENCE FROM TOP") {
        const te = ke.match(/STORY\s+"([^"]+)"\s+(?:HEIGHT\s+([\d.]+)|ELEV\s+([-\d.]+))/);
        if (te) {
          const Ie = te[1], H = te[2] ? parseFloat(te[2]) : 0, le = te[3] ? parseFloat(te[3]) : void 0;
          k.push({
            name: Ie,
            height: H,
            elev: le ?? 0
          });
        }
      }
      if (G === "MATERIAL PROPERTIES") {
        const te = ke.match(/MATERIAL\s+"([^"]+)"\s+(?:TYPE\s+"([^"]+)")?/);
        if (te) {
          const Ie = te[1];
          J.has(Ie) || J.set(Ie, {
            type: te[2] || "",
            E: 0,
            G: 0,
            nu: 0
          });
          const H = J.get(Ie);
          te[2] && (H.type = te[2]);
          const le = ke.match(/\bE\s+([\d.eE+-]+)/);
          le && (H.E = parseFloat(le[1]));
          const Ee = ke.match(/\bU\s+([\d.eE+-]+)/);
          Ee && (H.nu = parseFloat(Ee[1]), H.G = H.E / (2 * (1 + H.nu)));
          const $e = ke.match(/\bFY\s+([\d.eE+-]+)/);
          $e && (H.fy = parseFloat($e[1]));
          const Pe = ke.match(/\bFC\s+([\d.eE+-]+)/);
          Pe && (H.fc = parseFloat(Pe[1]));
          const Fe = ke.match(/WEIGHTPERVOLUME\s+([\d.eE+-]+)/);
          Fe && (H.density = parseFloat(Fe[1]));
        }
      }
      if (G === "FRAME SECTIONS") {
        const te = ke.match(/FRAMESECTION\s+"([^"]+)"/);
        if (te) {
          const Ie = te[1];
          we.has(Ie) || we.set(Ie, {
            material: "",
            shape: "",
            D: 0,
            B: 0,
            TF: 0,
            TW: 0
          });
          const H = we.get(Ie), le = ke.match(/MATERIAL\s+"([^"]+)"/);
          le && (H.material = le[1]);
          const Ee = ke.match(/SHAPE\s+"([^"]+)"/);
          Ee && (H.shape = Ee[1]);
          const $e = ke.match(/\bD\s+([\d.eE+-]+)/);
          $e && (H.D = parseFloat($e[1]));
          const Pe = ke.match(/\bB\s+([\d.eE+-]+)/);
          Pe && (H.B = parseFloat(Pe[1]));
          const Fe = ke.match(/\bTF\s+([\d.eE+-]+)/);
          Fe && (H.TF = parseFloat(Fe[1]));
          const Ve = ke.match(/\bTW\s+([\d.eE+-]+)/);
          Ve && (H.TW = parseFloat(Ve[1]));
          const et = ke.match(/\bR\s+([\d.eE+-]+)/);
          et && (H.R = parseFloat(et[1]));
          const pt = ke.match(/FILLMATERIAL\s+"([^"]+)"/);
          pt && (H.fillMaterial = pt[1]);
          const it = ke.match(/I2MOD\s+([\d.eE+-]+)/);
          it && (H.modI2 = parseFloat(it[1]));
          const jt = ke.match(/I3MOD\s+([\d.eE+-]+)/);
          jt && (H.modI3 = parseFloat(jt[1]));
        }
      }
      if (G === "POINT COORDINATES") {
        const te = ke.match(/POINT\s+"([^"]+)"\s+([-\d.eE+]+)\s+([-\d.eE+]+)/);
        te && ae.set(te[1], [
          parseFloat(te[2]),
          parseFloat(te[3])
        ]);
      }
      if (G === "LINE CONNECTIVITIES") {
        const te = ke.match(/LINE\s+"([^"]+)"\s+(COLUMN|BEAM|BRACE)\s+"([^"]+)"\s+"([^"]+)"\s+(\d+)/);
        te && V.push({
          name: te[1],
          type: te[2],
          pt1: te[3],
          pt2: te[4],
          nStories: parseInt(te[5])
        });
      }
      if (G === "POINT ASSIGNS") {
        const te = ke.match(/POINTASSIGN\s+"([^"]+)"\s+"([^"]+)".*RESTRAINT\s+"([^"]+)"/);
        te && pe.set(`${te[1]}@${te[2]}`, te[3].split(/\s+/));
      }
      if (G === "LINE ASSIGNS") {
        const te = ke.match(/LINEASSIGN\s+"([^"]+)"\s+"([^"]+)".*SECTION\s+"([^"]+)"/);
        te && he.set(`${te[1]}@${te[2]}`, {
          story: te[2],
          section: te[3]
        });
      }
    }
    const me = /* @__PURE__ */ new Map();
    if (k.length > 0) {
      let ge = k[k.length - 1].elev;
      me.set(k[k.length - 1].name, ge);
      for (let te = k.length - 2; te >= 0; te--) ge += k[te + 1].height, k[te].elev = ge, me.set(k[te].name, ge);
      k[0].elev + k[0].height;
      let ke = k[k.length - 1].elev;
      me.set(k[k.length - 1].name, ke);
      for (let te = k.length - 2; te >= 0; te--) ke += k[te + 1].height, me.set(k[te].name, ke), k[te].elev = ke;
    }
    const Be = [], oe = [], ne = /* @__PURE__ */ new Map(), ye = /* @__PURE__ */ new Map();
    for (const ge of V) if (ge.type === "COLUMN") for (const [ke] of me) {
      const te = `${ge.name}@${ke}`;
      if (he.has(te)) {
        ye.has(ge.pt1) || ye.set(ge.pt1, /* @__PURE__ */ new Set()), ye.get(ge.pt1).add(ke);
        const Ie = k.findIndex((H) => H.name === ke);
        Ie > 0 && ye.get(ge.pt1).add(k[Ie - 1].name);
      }
    }
    const Me = (ge, ke) => `${ge}@${ke}`, Ae = /* @__PURE__ */ new Set();
    for (const ge of V) for (const [ke, te] of he) if (ke.startsWith(ge.name + "@")) {
      const Ie = te.story, H = k.findIndex((le) => le.name === Ie);
      if (H < 0) continue;
      ge.type === "COLUMN" ? (Ae.add(Me(ge.pt1, Ie)), H > 0 && Ae.add(Me(ge.pt1, k[H - 1].name)), ge.pt2 !== ge.pt1 && (Ae.add(Me(ge.pt2, Ie)), H > 0 && Ae.add(Me(ge.pt2, k[H - 1].name)))) : (Ae.add(Me(ge.pt1, Ie)), Ae.add(Me(ge.pt2, Ie)));
    }
    for (const [ge] of pe) Ae.add(ge);
    for (const ge of Ae) {
      const [ke, te] = ge.split("@"), Ie = ae.get(ke), H = me.get(te);
      if (Ie === void 0 || H === void 0) continue;
      const le = Be.length;
      Be.push([
        Ie[0],
        Ie[1],
        H
      ]), oe.push(ge), ne.set(ge, le);
    }
    const Re = [], tt = [], We = [], xt = [], Ge = /* @__PURE__ */ new Map();
    for (const ge of V) for (const [ke, te] of he) {
      if (!ke.startsWith(ge.name + "@")) continue;
      const Ie = te.story, H = k.findIndex((Ve) => Ve.name === Ie);
      if (H < 0) continue;
      let le, Ee;
      ge.type === "COLUMN" ? (le = Me(ge.pt1, Ie), Ee = H > 0 ? Me(ge.pt1, k[H - 1].name) : Me(ge.pt1, Ie), ge.pt2 !== ge.pt1 && (le = Me(ge.pt1, Ie), Ee = Me(ge.pt2, H > 0 ? k[H - 1].name : Ie))) : (le = Me(ge.pt1, Ie), Ee = Me(ge.pt2, Ie));
      const $e = ne.get(le), Pe = ne.get(Ee);
      if ($e === void 0 || Pe === void 0 || $e === Pe) continue;
      const Fe = Re.length;
      Re.push([
        $e,
        Pe
      ]), tt.push(ge.name), We.push(ge.type), xt.push(Ie), Ge.set(Fe, te.section);
    }
    const ct = /* @__PURE__ */ new Map(), dt = /* @__PURE__ */ new Map(), st = /* @__PURE__ */ new Map(), Mt = /* @__PURE__ */ new Map(), Tt = /* @__PURE__ */ new Map(), yt = /* @__PURE__ */ new Map(), $t = /* @__PURE__ */ new Map();
    for (const [ge, ke] of Ge) {
      const te = we.get(ke);
      if (!te) continue;
      const Ie = J.get(te.material);
      Ie && (ct.set(ge, Ie.E), dt.set(ge, Ie.G));
      const H = te.D, le = te.B, Ee = te.TF, $e = te.TW;
      let Pe = 0, Fe = 0, Ve = 0, et = 0, pt = "rect";
      switch (te.shape) {
        case "Concrete Rectangular":
          Pe = H * le, Fe = le * H ** 3 / 12, Ve = H * le ** 3 / 12, et = le * H ** 3 * (1 / 3 - 0.21 * (H / le) * (1 - H ** 4 / (12 * le ** 4))), pt = "rect";
          break;
        case "Concrete Circle":
          Pe = Math.PI * H ** 2 / 4, Fe = Ve = Math.PI * H ** 4 / 64, et = Math.PI * H ** 4 / 32, pt = "circ";
          break;
        case "Steel I/Wide Flange":
          Pe = 2 * le * Ee + (H - 2 * Ee) * $e, Fe = (le * H ** 3 - (le - $e) * (H - 2 * Ee) ** 3) / 12, Ve = (2 * Ee * le ** 3 + (H - 2 * Ee) * $e ** 3) / 12, et = (2 * le * Ee ** 3 + (H - 2 * Ee) * $e ** 3) / 3, pt = "I";
          break;
        case "Steel Tube":
          Pe = H * le - (H - 2 * $e) * (le - 2 * $e), Fe = (le * H ** 3 - (le - 2 * $e) * (H - 2 * $e) ** 3) / 12, Ve = (H * le ** 3 - (H - 2 * $e) * (le - 2 * $e) ** 3) / 12, et = 2 * $e * (H - $e) * (le - $e) * ((H - $e) * (le - $e)) / (H - $e + (le - $e)), pt = "HSS";
          break;
        case "Filled Steel Tube":
          Pe = H * le, Fe = le * H ** 3 / 12, Ve = H * le ** 3 / 12, et = 2 * $e * (H - $e) * (le - $e) * ((H - $e) * (le - $e)) / (H - $e + (le - $e)), pt = "CFT";
          break;
        case "Steel Angle": {
          const it = Ee || $e;
          Pe = it * (H + le - it), Fe = it * (H ** 3 + le * it ** 2 + it ** 2 * (H - it)) / 12, Ve = it * (le ** 3 + H * it ** 2 + it ** 2 * (le - it)) / 12, et = (H + le - it) * it ** 3 / 3, pt = "L";
          break;
        }
        case "Steel Channel":
        case "Cold Formed C":
          Pe = 2 * le * Ee + (H - 2 * Ee) * $e, Fe = ($e * H ** 3 + 2 * le * Ee * (H - Ee) ** 2) / 12, Ve = (2 * Ee * le ** 3 + (H - 2 * Ee) * $e ** 3) / 12, et = (2 * le * Ee ** 3 + (H - 2 * Ee) * $e ** 3) / 3, pt = te.shape === "Cold Formed C" ? "coldC" : "C";
          break;
        case "Steel Double Channel":
          Pe = 2 * (2 * le * Ee + (H - 2 * Ee) * $e), Fe = 2 * ($e * H ** 3 + 2 * le * Ee * (H - Ee) ** 2) / 12, Ve = 2 * (2 * Ee * le ** 3 + (H - 2 * Ee) * $e ** 3) / 12, et = 2 * (2 * le * Ee ** 3 + (H - 2 * Ee) * $e ** 3) / 3, pt = "2C";
          break;
        default:
          H > 0 && le > 0 && (Pe = H * le, Fe = le * H ** 3 / 12, Ve = H * le ** 3 / 12, et = Math.min(H, le) * Math.max(H, le) ** 3 / 3 * 0.3);
          break;
      }
      te.modI2 && (Ve *= te.modI2), te.modI3 && (Fe *= te.modI3), st.set(ge, Pe), Mt.set(ge, Fe), Tt.set(ge, Ve), yt.set(ge, et), $t.set(ge, {
        type: pt,
        b: le || void 0,
        h: H || void 0,
        d: pt === "circ" || pt === "pipe" ? H : void 0,
        tw: $e || void 0,
        tf: Ee || void 0,
        r: te.R,
        name: ke
      });
    }
    const Dt = /* @__PURE__ */ new Map();
    for (const [ge, ke] of pe) {
      const te = ne.get(ge);
      if (te === void 0) continue;
      const Ie = [
        false,
        false,
        false,
        false,
        false,
        false
      ];
      for (const H of ke) H === "UX" && (Ie[0] = true), H === "UY" && (Ie[1] = true), H === "UZ" && (Ie[2] = true), H === "RX" && (Ie[3] = true), H === "RY" && (Ie[4] = true), H === "RZ" && (Ie[5] = true);
      Dt.set(te, Ie);
    }
    return {
      units: B,
      stories: k.reverse(),
      materials: J,
      frameSections: we,
      nodes: Be,
      nodeNames: oe,
      nodeNameToIdx: ne,
      elements: Re,
      elementNames: tt,
      elementTypes: We,
      elementStories: xt,
      elementSections: Ge,
      nodeInputs: {
        supports: Dt,
        loads: /* @__PURE__ */ new Map()
      },
      elementInputs: {
        elasticities: ct,
        shearModuli: dt,
        areas: st,
        momentsOfInertiaZ: Mt,
        momentsOfInertiaY: Tt,
        torsionalConstants: yt,
        sectionShapes: $t
      },
      sectionShapes: $t,
      info: {
        nNodes: Be.length,
        nFrames: Re.length,
        nAreas: D.length,
        title: I
      }
    };
  }
  xs = vo.state(false);
  Fa = function(e) {
    e.nodeInputs || (e.nodeInputs = vo.state({})), e.elementInputs || (e.elementInputs = vo.state({})), e.deformOutputs || (e.deformOutputs = vo.state({})), e.analyzeOutputs || (e.analyzeOutputs = vo.state({}));
    let h = "tonf", B = "m", k = io(h, B), J = {
      forceId: "kgf",
      lengthId: "cm",
      label: "kgf/cm\xB2"
    };
    const we = {
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
    }, ae = /* @__PURE__ */ new Set(), V = /* @__PURE__ */ new Set();
    let D = false;
    const pe = /* @__PURE__ */ new Set(), he = /* @__PURE__ */ new Map();
    let I = "", G = {}, me = null, Be = "", oe = [], ne = [], ye = /* @__PURE__ */ new Set(), Me = /* @__PURE__ */ new Set(), Ae = /* @__PURE__ */ new Set(), Re = /* @__PURE__ */ new Map(), tt = /* @__PURE__ */ new Map(), We = [], xt = 0.2, Ge = 2, ct = 2, dt = false, st = 2, Mt = "x", Tt = /* @__PURE__ */ new Set(), yt = true, $t = 0.15, Dt = 2, ge = 2, ke = /* @__PURE__ */ new Set();
    const te = () => ({
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
    }), Ie = (t, o) => ({
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
      }, te),
      vigasY: Array.from({
        length: o
      }, te)
    }), H = {
      colMat: 0,
      vigaMat: 0,
      colShape: 0,
      fc: 20594,
      steelColType: 0,
      steelVigaType: 0,
      perFloor: []
    };
    let le = 0, Ee = 3, $e = false, Pe = 0, Fe = null, Ve = 0, et = [], pt = 1, it = true;
    const jt = da();
    jt.div.style.display = "none";
    function Do() {
      const t = Po()[I];
      return t && t[le] ? t[le].dofs : [
        true,
        true,
        true,
        true,
        true,
        true
      ];
    }
    let Wt = [], Jt = [], rt = null;
    function Mn() {
      if (!rt) return;
      const t = Je();
      t && t.scene.remove(rt), rt.traverse((o) => {
        if (o.geometry && o.geometry.dispose(), o.material) {
          const n = o.material;
          n.map && n.map.dispose(), n.dispose();
        }
      }), rt = null;
    }
    function kn(t, o, n, l, s) {
      Mn();
      const c = Je();
      if (!c) return;
      rt = new us(), rt.name = "gridAxes";
      const i = Math.min(...t), d = Math.max(...t), m = Math.min(...o), p = Math.max(...o), a = d - i || 1, u = p - m || 1, y = Math.max(a, u), $ = y * 0.08, g = t.map((b, f) => String.fromCharCode(65 + f)), r = o.map((b, f) => String(f + 1)), x = y * 0.018, w = o.length <= 1, E = 8947848;
      for (let b = 0; b < t.length; b++) {
        const f = t[b];
        if (w) {
          const v = -$ - x * 1.5;
          Jo(f, 0, 0, f, 0, v + x, E, rt), Yo(g[b] || `${b}`, f, 0, v, x, rt);
        } else {
          const v = m - $ - x * 1.5;
          Jo(f, m, 0, f, v + x, 0, E, rt), Yo(g[b] || `${b}`, f, v, 0, x, rt);
        }
      }
      if (!w) for (let b = 0; b < o.length; b++) {
        const f = o[b], v = i - $ - x * 1.5;
        Jo(i, f, 0, v + x, f, 0, E, rt), Yo(r[b] || `${b}`, v, f, 0, x, rt);
      }
      const z = x * 1.8, N = $ * 1.2, P = $ * 1.2;
      for (let b = 0; b < t.length - 1; b++) {
        const f = t[b], v = t[b + 1], M = Math.abs(v - f), T = (f + v) / 2, O = `${M.toFixed(2)} m`;
        w ? (jo(O, T, 0, -N, z, rt), Wo(f, 0, -N * 0.7, v, 0, -N * 0.7, 16763904, rt)) : (jo(O, T, m - P, 0, z, rt), Wo(f, m - P * 0.7, 0, v, m - P * 0.7, 0, 16763904, rt));
      }
      if (!w) for (let b = 0; b < o.length - 1; b++) {
        const f = o[b], v = o[b + 1], M = Math.abs(v - f), T = (f + v) / 2, O = `${M.toFixed(2)} m`;
        jo(O, i - N, T, 0, z, rt), Wo(i - N * 0.7, f, 0, i - N * 0.7, v, 0, 16763904, rt);
      }
      rt.traverse((b) => {
        b.material && (Array.isArray(b.material) ? b.material.forEach((f) => {
          f.clippingPlanes = [];
        }) : b.material.clippingPlanes = []);
      }), c.scene.add(rt), c.render();
    }
    function jo(t, o, n, l, s, c) {
      const i = document.createElement("canvas"), d = 256, m = 64;
      i.width = d, i.height = m;
      const p = i.getContext("2d");
      p.fillStyle = "rgba(0,0,0,0.75)";
      const a = 8;
      p.beginPath(), p.moveTo(a, 0), p.lineTo(d - a, 0), p.quadraticCurveTo(d, 0, d, a), p.lineTo(d, m - a), p.quadraticCurveTo(d, m, d - a, m), p.lineTo(a, m), p.quadraticCurveTo(0, m, 0, m - a), p.lineTo(0, a), p.quadraticCurveTo(0, 0, a, 0), p.closePath(), p.fill(), p.fillStyle = "#ffcc00", p.font = "bold 36px monospace", p.textAlign = "center", p.textBaseline = "middle", p.fillText(t, d / 2, m / 2);
      const u = new aa(i);
      u.minFilter = la;
      const y = new gn({
        map: u,
        transparent: true,
        depthTest: false
      }), $ = new bn(y);
      $.position.set(o, n, l);
      const g = d / m;
      $.scale.set(s * g, s, 1), $.renderOrder = 999, c.add($);
    }
    function Wo(t, o, n, l, s, c, i, d) {
      const m = [
        new ve(t, o, n),
        new ve(l, s, c)
      ], p = new so().setFromPoints(m), a = new zo({
        color: i,
        transparent: true,
        opacity: 0.6,
        depthTest: false
      }), u = new mn(p, a);
      u.renderOrder = 998, d.add(u);
    }
    function Jo(t, o, n, l, s, c, i, d) {
      const m = new so().setFromPoints([
        new ve(t, o, n),
        new ve(l, s, c)
      ]), p = new fs({
        color: i,
        dashSize: 0.15 * Math.max(Math.abs(l - t), Math.abs(s - o), Math.abs(c - n), 0.1),
        gapSize: 0.1 * Math.max(Math.abs(l - t), Math.abs(s - o), Math.abs(c - n), 0.1),
        transparent: true,
        opacity: 0.6
      }), a = new mn(m, p);
      a.computeLineDistances(), d.add(a);
    }
    function Yo(t, o, n, l, s, c) {
      const i = document.createElement("canvas"), d = 128;
      i.width = d, i.height = d;
      const m = i.getContext("2d");
      m.beginPath(), m.arc(d / 2, d / 2, d * 0.42, 0, Math.PI * 2), m.fillStyle = "rgba(255,255,255,0.9)", m.fill(), m.lineWidth = d * 0.04, m.strokeStyle = "#555", m.stroke(), m.fillStyle = "#222", m.font = `bold ${d * 0.45}px Arial`, m.textAlign = "center", m.textBaseline = "middle", m.fillText(t, d / 2, d / 2 + d * 0.02);
      const p = new ms(i);
      p.needsUpdate = true;
      const a = new gn({
        map: p,
        depthTest: false,
        transparent: true
      }), u = new bn(a);
      u.position.set(o, n, l);
      const y = s * 2;
      u.scale.set(y, y, 1), u.renderOrder = 100, c.add(u);
    }
    const _e = {
      addNode(t, o, n) {
        const l = [
          ...e.nodes.val
        ], s = l.length;
        return l.push([
          t,
          o,
          n
        ]), e.nodes.val = l, console.log(`Node ${s} at (${t}, ${o}, ${n})`), Oe(), s;
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
          const c = l > t ? l - 1 : l, i = s > t ? s - 1 : s;
          return l === t || s === t ? null : [
            c,
            i
          ];
        }).filter((l) => l !== null);
        e.nodes.val = o, e.elements.val = n, console.log(`Node ${t} removed`), Oe();
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
        ]), e.elements.val = n, console.log(`Element ${l}: node ${t} -> node ${o}`), Oe(), l;
      },
      removeFrame(t) {
        const o = [
          ...e.elements.val
        ];
        if (t < 0 || t >= o.length) {
          console.error(`Element ${t} not found`);
          return;
        }
        o.splice(t, 1), e.elements.val = o, console.log(`Element ${t} removed`), Oe();
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
        ]), n.supports = l, e.nodeInputs.val = n, console.log(`Support added at node ${t}`), Oe();
      },
      removeSupport(t) {
        if (!e.nodeInputs) return;
        const o = {
          ...e.nodeInputs.val
        }, n = new Map(o.supports || []);
        n.delete(t), o.supports = n, e.nodeInputs.val = o, console.log(`Support removed from node ${t}`), Oe();
      },
      addLoad(t, o) {
        if (!e.nodeInputs) return;
        const n = {
          ...e.nodeInputs.val
        }, l = new Map(n.loads || []);
        l.set(t, o), n.loads = l, e.nodeInputs.val = n, console.log(`Load added at node ${t}: [${o.join(", ")}]`), Oe();
      },
      removeLoad(t) {
        if (!e.nodeInputs) return;
        const o = {
          ...e.nodeInputs.val
        }, n = new Map(o.loads || []);
        n.delete(t), o.loads = n, e.nodeInputs.val = o, console.log(`Load removed from node ${t}`), Oe();
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
        e.nodes.val = [], e.elements.val = [], e.nodeInputs && (e.nodeInputs.val = {}), e.elementInputs && (e.elementInputs.val = {}), ye = /* @__PURE__ */ new Set(), Me = /* @__PURE__ */ new Set(), Re = /* @__PURE__ */ new Map(), tt = /* @__PURE__ */ new Map(), Wt = [], Jt = [], Mn();
        const t = de.querySelector("#cad3d-axis-buttons");
        t && (t.style.display = "none", t.innerHTML = ""), console.log("Model cleared"), Oe();
      },
      frame(t, o, n = 0, l = 0) {
        _e.clear();
        const s = [];
        n > 0 && s.push(-n);
        let c = 0;
        s.push(c);
        for (const g of t) c += g, s.push(c);
        l > 0 && s.push(c + l);
        const i = [
          0
        ];
        let d = 0;
        for (const g of o) d += g, i.push(d);
        const m = (g) => n > 0 && g === 0 || l > 0 && g === s.length - 1, p = {}, a = [];
        for (let g = 0; g < i.length; g++) for (let r = 0; r < s.length; r++) g === 0 && m(r) || (p[`${r},${g}`] = a.length, a.push([
          s[r],
          0,
          i[g]
        ]));
        const u = [];
        ye = /* @__PURE__ */ new Set(), Me = /* @__PURE__ */ new Set();
        for (let g = 0; g < i.length - 1; g++) for (let r = 0; r < s.length; r++) m(r) || (ye.add(u.length), u.push([
          p[`${r},${g}`],
          p[`${r},${g + 1}`]
        ]));
        for (let g = 1; g < i.length; g++) for (let r = 0; r < s.length - 1; r++) Me.add(u.length), u.push([
          p[`${r},${g}`],
          p[`${r + 1},${g}`]
        ]);
        const y = /* @__PURE__ */ new Map(), $ = Do();
        for (let g = 0; g < s.length; g++) {
          if (m(g)) continue;
          const r = `${g},0`;
          p[r] !== void 0 && y.set(p[r], [
            ...$
          ]);
        }
        return e.nodes.val = a, e.elements.val = u, e.nodeInputs && (e.nodeInputs.val = {
          supports: y
        }), Wt = [
          ...s
        ], Jt = [
          0
        ], setTimeout(() => {
          ft(), kn(s, [
            0
          ]), Jn(), Yn();
        }, 50), Oe(), {
          nodes: a.length,
          elements: u.length
        };
      },
      building(t, o, n, l = 3, s = 0, c = 0, i = 0, d = 0, m = 1) {
        _e.clear();
        const p = [];
        s > 0 && p.push(-s), p.push(0);
        for (const f of t) p.push(p[p.length - 1] + f);
        c > 0 && p.push(p[p.length - 1] + c);
        const a = [];
        i > 0 && a.push(-i), a.push(0);
        for (const f of o) a.push(a[a.length - 1] + f);
        d > 0 && a.push(a[a.length - 1] + d);
        const u = [
          0
        ];
        for (const f of n) u.push(u[u.length - 1] + f);
        const y = (f) => s > 0 && f === 0 || c > 0 && f === p.length - 1, $ = (f) => i > 0 && f === 0 || d > 0 && f === a.length - 1, g = (f, v) => y(f) || $(v), r = [], x = {};
        for (let f = 0; f < u.length; f++) for (let v = 0; v < a.length; v++) for (let M = 0; M < p.length; M++) f === 0 && g(M, v) || (x[`${M},${v},${f}`] = r.length, r.push([
          p[M],
          a[v],
          u[f]
        ]));
        const w = r.length, E = [];
        ye = /* @__PURE__ */ new Set(), Me = /* @__PURE__ */ new Set(), Re = /* @__PURE__ */ new Map();
        const z = [];
        for (let f = 0; f < u.length - 1; f++) for (let v = 0; v < a.length; v++) for (let M = 0; M < p.length; M++) g(M, v) || z.push({
          el: [
            x[`${M},${v},${f}`],
            x[`${M},${v},${f + 1}`]
          ],
          floor: f
        });
        for (const { el: [f, v], floor: M } of z) {
          if (m <= 1) {
            ye.add(E.length), Re.set(E.length, M), E.push([
              f,
              v
            ]);
            continue;
          }
          const T = r[f], O = r[v];
          let q = f;
          for (let L = 1; L < m; L++) {
            const C = L / m, A = r.length;
            r.push([
              T[0] + (O[0] - T[0]) * C,
              T[1] + (O[1] - T[1]) * C,
              T[2] + (O[2] - T[2]) * C
            ]), ye.add(E.length), Re.set(E.length, M), E.push([
              q,
              A
            ]), q = A;
          }
          ye.add(E.length), Re.set(E.length, M), E.push([
            q,
            v
          ]);
        }
        tt = /* @__PURE__ */ new Map();
        const N = [];
        for (let f = 1; f < u.length; f++) for (let v = 0; v < a.length; v++) for (let M = 0; M < p.length - 1; M++) N.push({
          el: [
            x[`${M},${v},${f}`],
            x[`${M + 1},${v},${f}`]
          ],
          floor: f - 1,
          dir: "x",
          bay: M
        });
        for (let f = 1; f < u.length; f++) for (let v = 0; v < p.length; v++) for (let M = 0; M < a.length - 1; M++) N.push({
          el: [
            x[`${v},${M},${f}`],
            x[`${v},${M + 1},${f}`]
          ],
          floor: f - 1,
          dir: "y",
          bay: M
        });
        for (const { el: [f, v], floor: M, dir: T, bay: O } of N) {
          const q = r[f], L = r[v];
          let C = f;
          for (let X = 1; X < l; X++) {
            const U = X / l, ee = r.length;
            r.push([
              q[0] + (L[0] - q[0]) * U,
              q[1] + (L[1] - q[1]) * U,
              q[2] + (L[2] - q[2]) * U
            ]);
            const Y = E.length;
            Me.add(Y), Re.set(Y, M), tt.set(Y, {
              dir: T,
              bay: O
            }), E.push([
              C,
              ee
            ]), C = ee;
          }
          const A = E.length;
          Me.add(A), Re.set(A, M), tt.set(A, {
            dir: T,
            bay: O
          }), E.push([
            C,
            v
          ]);
        }
        if (Tt = /* @__PURE__ */ new Set(), dt && st > 0) {
          const f = (v, M, T) => {
            for (let q = 0; q < r.length; q++) if (Math.abs(r[q][0] - v) < 1e-6 && Math.abs(r[q][1] - M) < 1e-6 && Math.abs(r[q][2] - T) < 1e-6) return q;
            const O = r.length;
            return r.push([
              v,
              M,
              T
            ]), O;
          };
          for (let v = 1; v < u.length; v++) if (Mt === "x") for (let M = 0; M < a.length - 1; M++) {
            const T = a[M], O = a[M + 1];
            for (let q = 1; q <= st; q++) {
              const L = T + q / (st + 1) * (O - T), C = [];
              for (let A = 0; A < p.length; A++) C.push(f(p[A], L, u[v]));
              for (let A = 0; A < p.length - 1; A++) {
                const X = E.length;
                Tt.add(X), Me.add(X), Re.set(X, v - 1), tt.set(X, {
                  dir: "x",
                  bay: A
                }), E.push([
                  C[A],
                  C[A + 1]
                ]);
              }
            }
          }
          else for (let M = 0; M < p.length - 1; M++) {
            const T = p[M], O = p[M + 1];
            for (let q = 1; q <= st; q++) {
              const L = T + q / (st + 1) * (O - T), C = [];
              for (let A = 0; A < a.length; A++) C.push(f(L, a[A], u[v]));
              for (let A = 0; A < a.length - 1; A++) {
                const X = E.length;
                Tt.add(X), Me.add(X), Re.set(X, v - 1), tt.set(X, {
                  dir: "y",
                  bay: A
                }), E.push([
                  C[A],
                  C[A + 1]
                ]);
              }
            }
          }
        }
        const P = /* @__PURE__ */ new Map(), b = Do();
        for (let f = 0; f < a.length; f++) for (let v = 0; v < p.length; v++) g(v, f) || P.set(x[`${v},${f},0`], [
          ...b
        ]);
        Ae = /* @__PURE__ */ new Set();
        for (const f of We) {
          const v = u.length - 1, M = f.floors.includes(-1) ? Array.from({
            length: v
          }, (T, O) => O) : f.floors.filter((T) => T < v);
          for (const T of M) {
            let O, q, L, C;
            f.dir === "x" ? (O = f.bay, L = f.bay + 1, q = f.axisIdx, C = f.axisIdx) : (O = f.axisIdx, L = f.axisIdx, q = f.bay, C = f.bay + 1);
            const A = x[`${O},${q},${T}`], X = x[`${O},${q},${T + 1}`];
            let U, ee;
            if (f.dir === "x" ? (U = x[`${L},${C},${T}`], ee = x[`${L},${C},${T + 1}`]) : (U = x[`${L},${C},${T}`], ee = x[`${L},${C},${T + 1}`]), A === void 0 || U === void 0 || X === void 0 || ee === void 0) continue;
            const Y = ct, W = Ge, Z = r[A], ue = r[U], qe = r[X], Le = r[ee], Q = [];
            for (let ce = 0; ce <= W; ce++) {
              const be = [], se = ce / W;
              for (let Se = 0; Se <= Y; Se++) {
                const Te = Se / Y, je = (1 - se) * ((1 - Te) * Z[0] + Te * ue[0]) + se * ((1 - Te) * qe[0] + Te * Le[0]), K = (1 - se) * ((1 - Te) * Z[1] + Te * ue[1]) + se * ((1 - Te) * qe[1] + Te * Le[1]), xe = (1 - se) * ((1 - Te) * Z[2] + Te * ue[2]) + se * ((1 - Te) * qe[2] + Te * Le[2]);
                ce === 0 && Se === 0 ? be.push(A) : ce === 0 && Se === Y ? be.push(U) : ce === W && Se === 0 ? be.push(X) : ce === W && Se === Y ? be.push(ee) : (be.push(r.length), r.push([
                  je,
                  K,
                  xe
                ]));
              }
              Q.push(be);
            }
            for (let ce = 0; ce < W; ce++) for (let be = 0; be < Y; be++) {
              const se = Q[ce][be], Se = Q[ce][be + 1], Te = Q[ce + 1][be + 1], je = Q[ce + 1][be], K = E.length;
              Ae.add(K), Re.set(K, T), E.push([
                se,
                Se,
                Te,
                je
              ]);
            }
            if (T === 0) for (let ce = 0; ce <= Y; ce++) {
              const be = Q[0][ce];
              be >= w && P.set(be, [
                ...b
              ]);
            }
          }
        }
        if (ke = /* @__PURE__ */ new Set(), yt) {
          const f = l, v = l, M = /* @__PURE__ */ new Map(), T = (O, q, L) => `${Math.round(O * 1e4)},${Math.round(q * 1e4)},${Math.round(L * 1e4)}`;
          for (let O = 0; O < r.length; O++) M.set(T(r[O][0], r[O][1], r[O][2]), O);
          for (let O = 1; O < u.length; O++) {
            const q = u[O];
            for (let L = 0; L < p.length - 1; L++) for (let C = 0; C < a.length - 1; C++) {
              const A = p[L], X = p[L + 1], U = a[C], ee = a[C + 1], Y = [];
              for (let W = 0; W <= v; W++) {
                const Z = [];
                for (let ue = 0; ue <= f; ue++) {
                  const qe = A + ue / f * (X - A), Le = U + W / v * (ee - U);
                  if (W === 0 && ue === 0) Z.push(x[`${L},${C},${O}`]);
                  else if (W === 0 && ue === f) Z.push(x[`${L + 1},${C},${O}`]);
                  else if (W === v && ue === 0) Z.push(x[`${L},${C + 1},${O}`]);
                  else if (W === v && ue === f) Z.push(x[`${L + 1},${C + 1},${O}`]);
                  else {
                    const Q = T(qe, Le, q), ce = M.get(Q);
                    if (ce !== void 0) Z.push(ce);
                    else {
                      const be = r.length;
                      r.push([
                        qe,
                        Le,
                        q
                      ]), M.set(Q, be), Z.push(be);
                    }
                  }
                }
                Y.push(Z);
              }
              for (let W = 0; W < v; W++) for (let Z = 0; Z < f; Z++) {
                const ue = Y[W][Z], qe = Y[W][Z + 1], Le = Y[W + 1][Z + 1], Q = Y[W + 1][Z], ce = E.length;
                ke.add(ce), Re.set(ce, O - 1), E.push([
                  ue,
                  qe,
                  Le,
                  Q
                ]);
              }
            }
          }
        }
        return e.nodes.val = r, e.elements.val = E, e.nodeInputs && (e.nodeInputs.val = {
          supports: P
        }), Wt = [
          ...p
        ], Jt = [
          ...a
        ], setTimeout(() => {
          ft(), kn(p, a), Jn(), Yn();
        }, 50), Oe(), {
          nodes: r.length,
          elements: E.length,
          nJointNodes: w
        };
      },
      galpon(t = 12, o = 20, n = 6, l = 3, s = 8, c = 4) {
        _e.clear();
        const i = [], d = [], m = ($) => n + l * (1 - Math.pow(2 * $ / t - 1, 2)), p = [], a = c + 1;
        for (let $ = 0; $ < a; $++) {
          const g = [], r = o / c * $;
          g.push(i.length), i.push([
            0,
            r,
            0
          ]), g.push(i.length), i.push([
            t,
            r,
            0
          ]), g.push(i.length), i.push([
            0,
            r,
            n
          ]);
          for (let x = 1; x < s; x++) {
            const w = t / s * x;
            g.push(i.length), i.push([
              w,
              r,
              m(w)
            ]);
          }
          g.push(i.length), i.push([
            t,
            r,
            n
          ]), p.push(g);
        }
        for (let $ = 0; $ < a; $++) {
          const g = p[$];
          d.push([
            g[0],
            g[2]
          ]), d.push([
            g[1],
            g[g.length - 1]
          ]);
          for (let r = 2; r < g.length - 1; r++) d.push([
            g[r],
            g[r + 1]
          ]);
        }
        for (let $ = 0; $ < c; $++) for (let g = 2; g < p[0].length; g++) d.push([
          p[$][g],
          p[$ + 1][g]
        ]);
        for (let $ = 0; $ < c; $++) for (let g = 2; g < p[0].length - 1; g += 2) d.push([
          p[$][g],
          p[$ + 1][g + 1]
        ]);
        const u = /* @__PURE__ */ new Map(), y = Do();
        for (let $ = 0; $ < a; $++) u.set(p[$][0], [
          ...y
        ]), u.set(p[$][1], [
          ...y
        ]);
        return e.nodes.val = i, e.elements.val = d, e.nodeInputs && (e.nodeInputs.val = {
          supports: u
        }), Oe(), {
          nodes: i.length,
          elements: d.length
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
            _e.clear(), Ne("truss"), En();
            break;
          }
          case "beams": {
            _e.clear(), Ne("beams"), In();
            break;
          }
          case "3d":
          case "3d-structure":
          case "torre": {
            _e.clear(), Ne("3d"), Ln();
            break;
          }
          case "portico": {
            Ne("frame"), re();
            break;
          }
          case "edificio": {
            Ne("edificio"), H.colMat = 0, H.vigaMat = 0, H.colShape = 0, We = [], yt = false, dt = false, re();
            break;
          }
          case "edif-acero":
          case "edificio-acero": {
            Ne("edificio"), H.colMat = 1, H.vigaMat = 1, H.steelColType = 0, H.steelVigaType = 0, We = [], dt = true, st = 2;
            const o = oe.reduce((l, s) => l + s, 0) / oe.length, n = ne.reduce((l, s) => l + s, 0) / ne.length;
            Mt = o >= n ? "y" : "x", yt = true, $t = 0.08, re();
            break;
          }
          case "edif-muros":
          case "edificio-muros": {
            Ne("edificio"), H.colMat = 0, H.vigaMat = 0, H.colShape = 0, dt = false;
            const o = Math.round(((_a = G.nVanosX) == null ? void 0 : _a.val) ?? 2), n = Math.round(((_b = G.nVanosY) == null ? void 0 : _b.val) ?? 2);
            We = [
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
            ], yt = true, $t = 0.15, re();
            break;
          }
          case "edif-mixto":
          case "edificio-mixto": {
            Ne("edificio"), H.colMat = 2, H.vigaMat = 0, dt = false;
            const o = Math.round(((_c = G.nVanosX) == null ? void 0 : _c.val) ?? 2), n = Math.round(((_d = G.nVanosY) == null ? void 0 : _d.val) ?? 2);
            We = [
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
            ], yt = true, $t = 0.12, re();
            break;
          }
          case "mezanine":
          case "mezzanine": {
            Ne("edificio"), G.nPisos && (G.nPisos.val = 1), G.hPiso && (G.hPiso.val = 4.5), G.nVanosX && (G.nVanosX.val = 3), G.nVanosY && (G.nVanosY.val = 2), G.nSubViga && (G.nSubViga.val = 3), oe = [
              6,
              6,
              6
            ], ne = [
              5,
              5
            ], H.colMat = 1, H.vigaMat = 1, H.steelColType = 0, H.steelVigaType = 0, We = [], dt = true, st = 2, Mt = oe[0] >= ne[0] ? "y" : "x", yt = true, $t = 0.08, Dt = 3, ge = 3, re();
            break;
          }
          case "galpon": {
            Ne("galpon"), re();
            break;
          }
          case "barra": {
            Ne("barra"), re();
            break;
          }
          case "placa3q":
          case "plate3q":
          case "placa-3q": {
            _e.clear(), Ne("placa-3q"), Tn();
            break;
          }
          case "placa":
          case "plate":
          case "plate-q4":
          case "placa-q4": {
            _e.clear(), Ne("placa-q4"), qn();
            break;
          }
          case "losa-rect":
          case "rectangular-slab": {
            _e.clear(), Ne("losa-rect"), Fn();
            break;
          }
          case "losa-plana":
          case "flat-slab": {
            _e.clear(), Ne("losa-plana"), Cn();
            break;
          }
          case "viga-alta":
          case "deep-beam": {
            _e.clear(), Ne("viga-alta"), Pn();
            break;
          }
          case "muro-contencion":
          case "retaining-wall": {
            _e.clear(), Ne("muro-contencion"), An();
            break;
          }
          case "zapata":
          case "footing": {
            _e.clear(), Ne("zapata"), _n();
            break;
          }
          case "placa-orificios":
          case "plate-holes":
          case "placa-base": {
            _e.clear(), Ne("placa-orificios"), Hn();
            break;
          }
          case "col-placa":
          case "columna-placa": {
            _e.clear(), Ne("col-placa"), Nn();
            break;
          }
          case "talud":
          case "slope": {
            _e.clear(), Ne("talud"), On();
            break;
          }
          case "eiffel":
          case "torre-eiffel": {
            _e.clear(), Ne("eiffel"), os();
            break;
          }
          case "arco":
          case "arco-gateway": {
            _e.clear(), Ne("arco"), ns();
            break;
          }
          case "puente":
          case "puente-colgante": {
            _e.clear(), Ne("puente"), ss();
            break;
          }
          case "twisted":
          case "torre-twisted":
          case "turning-torso": {
            _e.clear(), Ne("twisted"), as();
            break;
          }
          case "burj":
          case "burj-khalifa": {
            _e.clear(), Ne("burj"), ls();
            break;
          }
          case "opera":
          case "sydney-opera": {
            _e.clear(), Ne("opera"), is();
            break;
          }
          case "diagrid":
          case "gherkin": {
            _e.clear(), Ne("diagrid"), rs();
            break;
          }
          default:
            console.error(`Ejemplo desconocido: "${t}".`);
        }
      },
      plateQ4(t = 10, o = 10, n = 16, l = 16, s = "simply-supported", c = -10, i = 0.2, d = 3e7, m = 0.3, p = 0) {
        console.log(`Plate Q4 [${[
          "Mindlin (gruesa)",
          "Kirchhoff (delgada)",
          "Membrane"
        ][p]}]: ${t}\xD7${o}, ${n}\xD7${l} elem, BC=${s}, q=${c}, t=${i}`);
        const u = performance.now(), y = un({
          E: d,
          nu: m,
          thickness: i,
          meshLx: t,
          meshLy: o,
          meshNx: n,
          meshNy: l,
          bcType: s,
          pressure: c,
          theoryType: p
        }), $ = performance.now() - u;
        console.log(`Solved in ${$.toFixed(1)} ms`), console.log(`w_max = ${y.maxW.toExponential(6)}`), console.log(`w_center = ${(y.centerW ?? 0).toExponential(6)}`), console.log(`Mxx_max = ${y.maxMxx.toExponential(4)}, Myy_max = ${y.maxMyy.toExponential(4)}`), console.log(`Mxy_max = ${y.maxMxy.toExponential(4)}`), console.log(`Qx_max = ${y.maxQx.toExponential(4)}, Qy_max = ${y.maxQy.toExponential(4)}`);
        const g = y.nodeResults.map((z) => [
          z.x,
          z.y,
          0
        ]), r = y.elementResults.map((z) => [
          ...z.nodes
        ]);
        e.nodes.val = g, e.elements.val = r;
        const x = /* @__PURE__ */ new Map();
        y.nodeResults.forEach((z, N) => {
          x.set(N, [
            0,
            0,
            z.w,
            z.bx,
            z.by,
            0
          ]);
        }), e.deformOutputs && (e.deformOutputs.val = {
          deformations: x
        });
        const w = /* @__PURE__ */ new Map();
        y.nodeResults.forEach((z, N) => {
          (z.x < 1e-10 || z.x > t - 1e-10 || z.y < 1e-10 || z.y > o - 1e-10) && w.set(N, [
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
          const z = c * t * o / g.length;
          g.forEach((N, P) => {
            w.has(P) || E.set(P, [
              0,
              0,
              z,
              0,
              0,
              0
            ]);
          });
        }
        if (e.nodeInputs && (e.nodeInputs.val = {
          supports: w,
          loads: E
        }), e.elementInputs && (e.elementInputs.val = {}), e.analyzeOutputs) {
          const z = /* @__PURE__ */ new Map(), N = /* @__PURE__ */ new Map(), P = /* @__PURE__ */ new Map();
          y.elementResults.forEach((b, f) => {
            z.set(f, [
              b.Mxx,
              b.Mxx,
              b.Mxx
            ]), N.set(f, [
              b.Myy,
              b.Myy,
              b.Myy
            ]), P.set(f, [
              b.Mxy,
              b.Mxy,
              b.Mxy
            ]);
          }), e.analyzeOutputs.val = {
            bendingXX: z,
            bendingYY: N,
            bendingXY: P
          };
        }
        return setTimeout(() => ft(), 50), Oe(), y;
      },
      set(t, o) {
        G[t] ? (G[t].val = o, console.log(`${t} = ${o}`), Ft(), re()) : De[t] ? (De[t].val = o, console.log(`${t} = ${o}`), Ft(), re()) : console.error(`Par\xE1metro "${t}" no encontrado. Disponibles: ${Object.keys({
          ...G,
          ...De
        }).join(", ")}`);
      },
      get(t) {
        if (!t) {
          const o = {};
          for (const l in G) o[l] = G[l].val;
          for (const l in De) o[l] = De[l].val;
          o.plateTheory = Ee, o.supportType = le;
          const n = Po()[I];
          return n && n[le] && (o.supportLabel = n[le].label), console.table(o), o;
        }
        if (G[t]) return G[t].val;
        if (De[t]) return De[t].val;
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
        }[t.toLowerCase()] || 3), Ee = t, console.log(`Teor\xEDa de placa: ${{
          1: "Membrana",
          2: "Kirchhoff (delgada)",
          3: "Mindlin (gruesa)"
        }[Ee] || Ee}`), I.includes("placa") && (Ft(), re());
      },
      setBc(t) {
        const o = Po()[I];
        if (!o || o.length === 0) {
          console.error("No support options for current generator");
          return;
        }
        if (typeof t == "string") {
          const n = o.findIndex((l) => l.label.toLowerCase().includes(t.toLowerCase()));
          t = n >= 0 ? n : 0;
        }
        le = t, le >= o.length && (le = 0), console.log(`Apoyo: ${o[le].label} \u2192 DOFs: [${o[le].dofs.map((n) => n ? "1" : "0").join(",")}]`), Ft(), re();
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
        t && (h = t), o && (B = o), k = io(h, B);
        const n = de.querySelector("#cad3d-force-unit"), l = de.querySelector("#cad3d-length-unit");
        return n && (n.textContent = h), l && (l.textContent = B), I && Ne(I), console.log(`Unidades: ${k.label} | E=${k.E.toExponential(3)} ${k.stress}`), k.id;
      },
      view(t) {
      },
      get mesh() {
        return e;
      }
    };
    function Sn() {
      return ra(k);
    }
    function zn() {
      return ca(k);
    }
    let De = {};
    function Ne(t) {
      var _a, _b;
      I = t, xs.val = true, le = 0, Ve && Ko(), G = {};
      const o = Sn()[t];
      if (o) for (const l of o) G[l.key] = {
        val: l.val,
        min: l.min,
        max: l.max,
        step: l.step,
        label: l.label
      };
      De = {};
      const n = zn()[t];
      if (n) for (const l of n) De[l.key] = {
        val: l.val,
        min: l.min,
        max: l.max,
        step: l.step,
        label: l.label
      };
      if (t === "edificio") {
        const l = Math.round(((_a = G.nVanosX) == null ? void 0 : _a.val) ?? 2), s = Math.round(((_b = G.nVanosY) == null ? void 0 : _b.val) ?? 2);
        oe = Array(l).fill(k.defaultSpan), ne = Array(s).fill(k.defaultSpan * 0.8);
      }
      Ft(), setTimeout(() => {
        zs(), re();
      }, 50);
    }
    function R(t) {
      var _a, _b;
      return ((_a = G[t]) == null ? void 0 : _a.val) ?? ((_b = De[t]) == null ? void 0 : _b.val) ?? 0;
    }
    function re() {
      switch (I) {
        case "truss":
          En();
          break;
        case "beams":
          In();
          break;
        case "3d":
          Ln();
          break;
        case "frame": {
          const o = Math.round(R("nVanos")), n = R("spanV"), l = Math.round(R("nPisos")), s = R("hPiso");
          _e.frame(Array(o).fill(n), Array(l).fill(s));
          break;
        }
        case "edificio": {
          const o = Math.round(R("nPisos")), n = R("hPiso"), l = R("Lvix") || 0, s = R("Lvdx") || 0, c = R("Lviy") || 0, i = R("Lvdy") || 0, d = Math.max(1, Math.round(R("nSubViga") || 3)), m = Math.max(1, Math.round(R("nSubCol") || 1));
          _e.building([
            ...oe
          ], [
            ...ne
          ], Array(o).fill(n), d, l, s, c, i, m);
          break;
        }
        case "galpon":
          _e.galpon(R("span"), R("length"), R("height"), R("archRise"), Math.round(R("xDiv")), Math.round(R("yDiv")));
          break;
        case "barra":
          hs();
          break;
        case "placa-3q":
          Tn();
          break;
        case "placa-q4":
          qn();
          break;
        case "losa-rect":
          Fn();
          break;
        case "losa-plana":
          Cn();
          break;
        case "viga-alta":
          Pn();
          break;
        case "muro-contencion":
          An();
          break;
        case "zapata":
          _n();
          break;
        case "placa-orificios":
          Hn();
          break;
        case "col-placa":
          Nn();
          break;
        case "talud":
          On();
          break;
        case "eiffel":
          os();
          break;
        case "arco":
          ns();
          break;
        case "puente":
          ss();
          break;
        case "twisted":
          as();
          break;
        case "burj":
          ls();
          break;
        case "opera":
          is();
          break;
        case "diagrid":
          rs();
          break;
      }
      if ((I === "frame" || I === "edificio" || I === "galpon") && e.nodeInputs) {
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
      ].includes(I)) {
        if (ae.size > 0 || V.size > 0 || D) {
          const o = e.elements.val, n = o.filter((l, s) => !(ae.has(s) || V.has(s) || D && !pe.has(s)));
          n.length !== o.length && (e.elements.val = n);
        }
        setTimeout(() => {
          Yt(), Uo();
        }, 30);
      }
    }
    function En() {
      const t = R("span"), o = Math.round(R("divisions")), n = R("height"), l = t / o, s = [], c = [];
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
      const i = o + 1;
      for (let a = 0; a < o; a++) c.push([
        a,
        a + 1
      ]);
      for (let a = 0; a < o; a++) c.push([
        i + a,
        i + a + 1
      ]);
      for (let a = 0; a <= o; a++) c.push([
        a,
        i + a
      ]);
      for (let a = 0; a < o; a++) a < o / 2 ? c.push([
        a,
        i + a + 1
      ]) : c.push([
        i + a,
        a + 1
      ]);
      const d = /* @__PURE__ */ new Map([
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
      ]), m = (R("CM") ?? 0) + (R("CV") ?? 0), p = /* @__PURE__ */ new Map();
      if (m !== 0) for (let a = 0; a <= o; a++) p.set(a, [
        0,
        0,
        m,
        0,
        0,
        0
      ]);
      e.nodes.val = s, e.elements.val = c, e.nodeInputs && (e.nodeInputs.val = {
        supports: d,
        loads: p
      }), Oe();
    }
    function In() {
      const t = R("width"), o = R("height"), n = R("Ex") ?? 0, l = (R("CM") ?? 0) + (R("CV") ?? 0), s = Math.max(1, Math.round(R("nSub") || 4)), c = [
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
      const d = [
        0,
        0,
        o
      ], m = [
        t,
        0,
        o
      ];
      let p = 1;
      for (let u = 1; u < s; u++) {
        const y = u / s, $ = c.length;
        c.push([
          d[0] + (m[0] - d[0]) * y,
          d[1] + (m[1] - d[1]) * y,
          d[2] + (m[2] - d[2]) * y
        ]), i.push([
          p,
          $
        ]), p = $;
      }
      i.push([
        p,
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
      else if (l !== 0 && n === 0) for (let u = 1; u < c.length; u++) u === 0 || u === 3 || a.set(u, [
        0,
        0,
        l,
        0,
        0,
        0
      ]);
      else if (n !== 0 && l !== 0) for (let u = 1; u < c.length; u++) u === 0 || u === 3 || a.set(u, [
        u === 2 ? n : 0,
        0,
        l,
        0,
        0,
        0
      ]);
      e.nodes.val = c, e.elements.val = i, e.nodeInputs && (e.nodeInputs.val = {
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
      }), Oe();
    }
    function Ln() {
      const t = R("dx"), o = R("dy"), n = R("dz"), l = Math.round(R("stories")), s = Math.max(1, Math.round(R("nSub") || 3)), c = [];
      for (let r = 0; r <= l; r++) c.push([
        0,
        0,
        n * r
      ], [
        t,
        0,
        n * r
      ], [
        t,
        o,
        n * r
      ], [
        0,
        o,
        n * r
      ]);
      const i = c.length, d = [
        ...c
      ], m = [];
      for (let r = 0; r < l; r++) for (let x = 0; x < 4; x++) m.push([
        r * 4 + x,
        (r + 1) * 4 + x
      ]);
      for (let r = 0; r < l; r++) {
        const x = r * 4;
        m.push([
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
      const p = [];
      for (let r = 1; r <= l; r++) {
        const x = r * 4;
        p.push([
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
      for (const [r, x] of p) {
        const w = c[r], E = c[x];
        let z = r;
        for (let N = 1; N < s; N++) {
          const P = N / s, b = d.length;
          d.push([
            w[0] + (E[0] - w[0]) * P,
            w[1] + (E[1] - w[1]) * P,
            w[2] + (E[2] - w[2]) * P
          ]), m.push([
            z,
            b
          ]), z = b;
        }
        m.push([
          z,
          x
        ]);
      }
      const a = /* @__PURE__ */ new Map();
      for (let r = 0; r < 4; r++) a.set(r, [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
      const u = R("Ex") ?? 0, y = (R("CM") ?? 0) + (R("CV") ?? 0), $ = i - 2, g = /* @__PURE__ */ new Map();
      if (u !== 0 && y === 0) g.set($, [
        u,
        0,
        0,
        0,
        0,
        0
      ]);
      else if (y !== 0 && u === 0) for (let r = 0; r < d.length; r++) a.has(r) || g.set(r, [
        0,
        0,
        y,
        0,
        0,
        0
      ]);
      else if (u !== 0 && y !== 0) for (let r = 0; r < d.length; r++) a.has(r) || g.set(r, [
        r === $ ? u : 0,
        0,
        y,
        0,
        0,
        0
      ]);
      e.nodes.val = d, e.elements.val = m, e.nodeInputs && (e.nodeInputs.val = {
        supports: a,
        loads: g
      }), Oe();
    }
    function hs() {
      const t = R("L"), o = Math.round(R("nElem")), n = R("F"), l = t / o, s = [], c = [];
      for (let m = 0; m <= o; m++) s.push([
        l * m,
        0,
        0
      ]);
      for (let m = 0; m < o; m++) c.push([
        m,
        m + 1
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
      ]), d = /* @__PURE__ */ new Map([
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
      e.nodes.val = s, e.elements.val = c, e.nodeInputs && (e.nodeInputs.val = {
        supports: i,
        loads: d
      }), Oe();
    }
    function Tn() {
      const t = R("Lx") || 15, o = R("Ly") || 10, n = R("meshSize") || 0.5, l = R("q") || -3, s = R("t") || 1, c = R("E") || 3e7, i = R("nu") || 0.3, d = c / (2 * (1 + i)), m = Ee === 1 ? "Membrana" : Ee === 2 ? "Kirchhoff" : "Mindlin", { nodes: p, elements: a, boundaryIndices: u } = Rt({
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
      }), y = t * o, $ = l * y / p.length, g = new Map(u.map((x) => [
        x,
        [
          true,
          true,
          true,
          true,
          true,
          true
        ]
      ])), r = new Map(p.map((x, w) => [
        w,
        [
          0,
          0,
          $,
          0,
          0,
          0
        ]
      ]));
      e.nodes.val = p, e.elements.val = a, e.nodeInputs && (e.nodeInputs.val = {
        supports: g,
        loads: r
      }), e.elementInputs && (e.elementInputs.val = {
        elasticities: new Map(a.map((x, w) => [
          w,
          c
        ])),
        elasticitiesOrthogonal: new Map(a.map((x, w) => [
          w,
          c
        ])),
        thicknesses: new Map(a.map((x, w) => [
          w,
          s
        ])),
        poissonsRatios: new Map(a.map((x, w) => [
          w,
          i
        ])),
        shearModuli: new Map(a.map((x, w) => [
          w,
          d
        ]))
      });
      try {
        const x = zt(p, a, e.nodeInputs.val, e.elementInputs.val);
        x && e.deformOutputs && (e.deformOutputs.val = x);
        const w = ho(p, a, e.elementInputs.val, x);
        w && e.analyzeOutputs && (e.analyzeOutputs.val = w), console.log(`Plate 3Q [${m}]: ${p.length} nodes, ${a.length} triangles, t=${s}, E=${c}, \u03BD=${i}`);
      } catch (x) {
        console.warn("Plate 3Q analysis failed:", x.message);
      }
      setTimeout(() => ft(), 50), Oe();
    }
    function qn() {
      const t = R("Lx") || 10, o = R("Ly") || 10, n = Math.round(R("nx") || 16), l = Math.round(R("ny") || 16), s = R("t") || 0.2, c = R("q") || -10, i = R("E") || 3e7, d = R("nu") || 0.3, m = le === 1 ? "clamped" : "simply-supported", a = {
        1: 2,
        2: 1,
        3: 0
      }[Ee] ?? 0;
      return _e.plateQ4(t, o, n, l, m, c, s, i, d, a);
    }
    function Fn() {
      const t = R("a") || 6, o = R("b") || 4, n = Math.round(R("nx") || 12), l = Math.round(R("ny") || 8), s = R("t") || 0.1, c = R("q") || -10, i = R("E") || 35e6, d = R("nu") || 0.15, p = {
        1: 2,
        2: 1,
        3: 0
      }[Ee] ?? 0, a = _e.plateQ4(t, o, n, l, "simply-supported", c, s, i, d, p), u = i * s * s * s / (12 * (1 - d * d));
      let y = 0;
      for (let $ = 1; $ <= 19; $ += 2) for (let g = 1; g <= 19; g += 2) {
        const r = $ * $ / (t * t) + g * g / (o * o);
        y += 1 / ($ * g * r * r);
      }
      if (y *= 16 * Math.abs(c) / (Math.PI ** 6 * u), console.log(`\u{1F4D0} Navier anal\xEDtico w_center = ${y.toExponential(6)}`), a) {
        const $ = Math.abs((Math.abs(a.centerW || 0) - y) / y * 100);
        console.log(`   WASM w_center = ${(a.centerW || 0).toExponential(6)}, error = ${$.toFixed(2)}%`);
      }
      return a;
    }
    function Cn() {
      const t = R("t") || 0.2, o = R("q") || -10, n = R("E") || 35e6, l = R("nu") || 0.2, s = R("meshSize") || 0.6, c = [
        3.6,
        4.2,
        4.2,
        3.6
      ], i = [
        3,
        3.6,
        3
      ], d = c.reduce((q, L) => q + L, 0), m = i.reduce((q, L) => q + L, 0), p = [
        0
      ];
      for (const q of c) p.push(p[p.length - 1] + q);
      const a = [
        0
      ];
      for (const q of i) a.push(a[a.length - 1] + q);
      const u = Math.max(2, Math.round(d / s)), y = Math.max(2, Math.round(m / s)), $ = d / u, g = m / y, r = [];
      for (let q = 0; q <= y; q++) for (let L = 0; L <= u; L++) r.push([
        L * $,
        q * g
      ]);
      const x = [], w = /* @__PURE__ */ new Set();
      for (const q of p) for (const L of a) {
        let C = 1 / 0, A = 0;
        for (let X = 0; X < r.length; X++) {
          const U = Math.hypot(r[X][0] - q, r[X][1] - L);
          U < C && (C = U, A = X);
        }
        w.has(A) || (w.add(A), x.push({
          node: A,
          dof: 0,
          k: 1e15
        }));
      }
      const z = {
        1: 2,
        2: 1,
        3: 0
      }[Ee] ?? 1;
      console.log(`Losa Plana Q4 [${[
        "Mindlin",
        "Kirchhoff",
        "Membrane"
      ][z]}]: ${d}\xD7${m}m, ${u}\xD7${y} elem, ${w.size} columnas`);
      const N = performance.now(), P = un({
        E: n,
        nu: l,
        thickness: t,
        meshLx: d,
        meshLy: m,
        meshNx: u,
        meshNy: y,
        bcType: "none",
        pressure: o,
        theoryType: z,
        springs: x
      }), b = performance.now() - N;
      console.log(`Solved in ${b.toFixed(1)} ms, w_max = ${P.maxW.toExponential(4)}`);
      const f = P.nodeResults.map((q) => [
        q.x,
        q.y,
        0
      ]), v = P.elementResults.map((q) => [
        ...q.nodes
      ]);
      e.nodes.val = f, e.elements.val = v;
      const M = /* @__PURE__ */ new Map();
      P.nodeResults.forEach((q, L) => {
        M.set(L, [
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
      const T = /* @__PURE__ */ new Map();
      for (const q of w) T.set(q, [
        true,
        true,
        true,
        false,
        false,
        false
      ]);
      const O = /* @__PURE__ */ new Map();
      if (Math.abs(o) > 1e-30) {
        const q = o * d * m / f.length;
        f.forEach((L, C) => {
          T.has(C) || O.set(C, [
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
        supports: T,
        loads: O
      }), e.elementInputs && (e.elementInputs.val = {}), e.analyzeOutputs) {
        const q = /* @__PURE__ */ new Map(), L = /* @__PURE__ */ new Map(), C = /* @__PURE__ */ new Map();
        P.elementResults.forEach((A, X) => {
          q.set(X, [
            A.Mxx,
            A.Mxx,
            A.Mxx
          ]), L.set(X, [
            A.Myy,
            A.Myy,
            A.Myy
          ]), C.set(X, [
            A.Mxy,
            A.Mxy,
            A.Mxy
          ]);
        }), e.analyzeOutputs.val = {
          bendingXX: q,
          bendingYY: L,
          bendingXY: C
        };
      }
      setTimeout(() => ft(), 50), Oe();
    }
    function Pn() {
      const t = R("L") || 4, o = R("H") || 2, n = R("t") || 0.1, l = R("E") || 2e7, s = R("nu") || 0.2, c = l / (2 * (1 + s)), i = R("q") || -100, d = R("b") || 0.8, m = R("meshSize") || 0.2, { nodes: p, elements: a, boundaryIndices: u } = Rt({
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
        maxMeshSize: m
      }), y = p, $ = 0.4, g = /* @__PURE__ */ new Map();
      for (let b = 0; b < y.length; b++) {
        const f = y[b][0], v = y[b][1];
        Math.abs(v) < 1e-6 && (f <= $ + 1e-6 || f >= t - $ - 1e-6) && g.set(b, [
          true,
          true,
          true,
          true,
          true,
          true
        ]);
      }
      const r = (t - d) / 2, x = r + d, w = [];
      for (let b = 0; b < y.length; b++) if (Math.abs(y[b][1] - o) < 1e-6) {
        const f = y[b][0];
        f >= r - 1e-6 && f <= x + 1e-6 && w.push(b);
      }
      const E = i * d / Math.max(w.length, 1), z = /* @__PURE__ */ new Map();
      for (const b of w) z.set(b, [
        0,
        E,
        0,
        0,
        0,
        0
      ]);
      const N = {
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
          c
        ]))
      }, P = {
        supports: g,
        loads: z
      };
      try {
        const b = zt(y, a, P, N), f = ho(y, a, N, b), v = y.map((T) => [
          T[0],
          0,
          T[1]
        ]);
        if (e.nodes.val = v, e.elements.val = a, b && b.deformations) {
          const T = /* @__PURE__ */ new Map();
          b.deformations.forEach((O, q) => {
            T.set(q, [
              O[0],
              O[2],
              O[1],
              O[3],
              O[5],
              O[4]
            ]);
          }), e.deformOutputs && (e.deformOutputs.val = {
            deformations: T
          });
        }
        if (e.nodeInputs) {
          const T = /* @__PURE__ */ new Map();
          g.forEach((q, L) => T.set(L, q));
          const O = /* @__PURE__ */ new Map();
          z.forEach((q, L) => O.set(L, [
            q[0],
            q[2],
            q[1],
            q[3],
            q[5],
            q[4]
          ])), e.nodeInputs && (e.nodeInputs.val = {
            supports: T,
            loads: O
          });
        }
        e.elementInputs && (e.elementInputs.val = {}), e.analyzeOutputs && (e.analyzeOutputs.val = {});
        let M = 0;
        b && b.deformations && b.deformations.forEach((T) => {
          const O = Math.sqrt(T[0] * T[0] + T[1] * T[1] + T[2] * T[2]);
          M = Math.max(M, O);
        }), console.log(`Viga Alta: ${y.length} nodos, ${a.length} triangulos`), console.log(`  L=${t}, H=${o}, t=${n}, E=${l}, nu=${s}`), console.log(`  Carga: q=${i} kN/m sobre ${d}m central`), console.log(`  max|u| = ${M.toExponential(4)}`);
      } catch (b) {
        console.warn("Viga Alta analysis failed:", b.message);
      }
      setTimeout(() => ft(), 50), Oe();
    }
    function An() {
      const t = R("H") || 4, o = R("B") || 3, n = R("tw") || 0.3, l = R("tb") || 0.4, s = R("meshSize") || 0.2, c = R("E") || 25e6, i = R("nu") || 0.2, d = c / (2 * (1 + i)), m = R("gamma") || 18, p = R("Ka") || 0.33, a = R("Es") || 5e4, u = R("nus") || 0.3, y = a / (2 * (1 + u)), $ = R("kn") || 1e6, g = R("ks") || 1e4, r = R("gammaW") || 9.81, x = R("Hw") || 3.5, w = R("qs") || 0, E = le, z = o * 0.3, N = o * 0.7, P = [
        [
          -z,
          0,
          0
        ],
        [
          N,
          0,
          0
        ],
        [
          N,
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
          -z,
          l,
          0
        ]
      ];
      let b = [], f = [], v = /* @__PURE__ */ new Map(), M = /* @__PURE__ */ new Map(), T;
      if (E === 0) {
        const L = Rt({
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
        b = L.nodes, f = L.elements;
        for (let A = 0; A < b.length; A++) Math.abs(b[A][1]) < 1e-6 && v.set(A, [
          true,
          true,
          true,
          true,
          true,
          true
        ]);
        const C = [];
        for (let A = 0; A < b.length; A++) {
          const X = b[A][0], U = b[A][1];
          Math.abs(X - n) < s * 0.6 && U >= l - 1e-6 && C.push({
            idx: A,
            y: U
          });
        }
        C.sort((A, X) => A.y - X.y);
        for (let A = 0; A < C.length; A++) {
          const { idx: X, y: U } = C[A], ee = l + t - U, Y = p * m * ee + p * w;
          let W = s;
          A > 0 && A < C.length - 1 ? W = (C[A + 1].y - C[A - 1].y) / 2 : A === 0 && C.length > 1 ? W = (C[1].y - C[0].y) / 2 : A === C.length - 1 && C.length > 1 && (W = (C[A].y - C[A - 1].y) / 2);
          const Z = Y * W;
          Math.abs(Z) > 1e-10 && M.set(X, [
            Z,
            0,
            0,
            0,
            0,
            0
          ]);
        }
        T = {
          elasticities: new Map(f.map((A, X) => [
            X,
            c
          ])),
          elasticitiesOrthogonal: new Map(f.map((A, X) => [
            X,
            c
          ])),
          thicknesses: new Map(f.map((A, X) => [
            X,
            n
          ])),
          poissonsRatios: new Map(f.map((A, X) => [
            X,
            i
          ])),
          shearModuli: new Map(f.map((A, X) => [
            X,
            d
          ]))
        };
      } else if (E === 1 || E === 2) {
        const L = N, C = l + t;
        if (E === 2) {
          const A = [
            [
              -z,
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
              C,
              0
            ],
            [
              n,
              C,
              0
            ],
            [
              0,
              C,
              0
            ],
            [
              0,
              l,
              0
            ],
            [
              -z,
              l,
              0
            ]
          ], X = Math.max(3, Math.ceil((C - l) / s)), U = [];
          for (let K = 0; K <= X; K++) U.push([
            n,
            l + K * (C - l) / X,
            0
          ]);
          const ee = Rt({
            points: [
              ...A,
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
          b = ee.nodes, f = ee.elements;
          const Y = s * 0.4, W = [];
          for (let K = 0; K < b.length; K++) {
            const xe = b[K][0], Ce = b[K][1];
            Math.abs(xe - n) < Y && Ce >= l - Y && W.push(K);
          }
          W.sort((K, xe) => b[K][1] - b[xe][1]);
          const Z = [
            W[0]
          ];
          for (let K = 1; K < W.length; K++) {
            const xe = b[W[K]][1] - b[Z[Z.length - 1]][1];
            Math.abs(xe) > s * 0.05 && Z.push(W[K]);
          }
          W.length = 0, W.push(...Z);
          const ue = /* @__PURE__ */ new Map();
          for (const K of W) {
            const xe = b.length;
            b.push([
              b[K][0],
              b[K][1],
              b[K][2]
            ]), ue.set(K, xe);
          }
          const qe = f.length, Le = [];
          for (let K = 0; K < qe; K++) {
            const xe = f[K], Ce = (b[xe[0]][0] + b[xe[1]][0] + b[xe[2]][0]) / 3, Ke = (b[xe[0]][1] + b[xe[1]][1] + b[xe[2]][1]) / 3, at = Ce >= -z && Ce <= N && Ke >= 0 && Ke <= l, xo = Ce >= 0 && Ce <= n && Ke >= l && Ke <= l + t, Zt = at || xo;
            if (Le.push(!Zt), !Zt) for (let _t = 0; _t < xe.length; _t++) {
              const Nt = ue.get(xe[_t]);
              Nt !== void 0 && (xe[_t] = Nt);
            }
          }
          const Q = f.length;
          for (let K = 0; K < W.length - 1; K++) {
            const xe = W[K], Ce = W[K + 1], Ke = ue.get(xe), at = ue.get(Ce);
            f.push([
              Ce,
              xe,
              Ke,
              at
            ]);
          }
          const ce = f.length - Q, be = /* @__PURE__ */ new Map(), se = /* @__PURE__ */ new Map(), Se = /* @__PURE__ */ new Map(), Te = /* @__PURE__ */ new Map(), je = /* @__PURE__ */ new Map();
          for (let K = 0; K < qe; K++) Le[K] ? (be.set(K, a), se.set(K, a), Te.set(K, u), je.set(K, y), Se.set(K, 1)) : (be.set(K, c), se.set(K, c), Te.set(K, i), je.set(K, d), Se.set(K, 1));
          for (let K = Q; K < f.length; K++) be.set(K, $), se.set(K, 0), Te.set(K, 0), je.set(K, g), Se.set(K, 0);
          T = {
            elasticities: be,
            elasticitiesOrthogonal: se,
            thicknesses: Se,
            poissonsRatios: Te,
            shearModuli: je
          };
          for (let K = 0; K < b.length; K++) {
            const xe = b[K][0], Ce = b[K][1];
            Math.abs(Ce) < 1e-6 ? v.set(K, [
              true,
              true,
              true,
              true,
              true,
              true
            ]) : Math.abs(xe - L) < s * 0.1 && v.set(K, [
              true,
              false,
              true,
              true,
              true,
              true
            ]);
          }
          for (let K = 0; K < qe; K++) {
            if (!Le[K]) continue;
            const xe = f[K], Ce = b[xe[0]], Ke = b[xe[1]], at = b[xe[2]], xo = Math.abs((Ke[0] - Ce[0]) * (at[1] - Ce[1]) - (at[0] - Ce[0]) * (Ke[1] - Ce[1])) / 2, Zt = -m * xo / 3;
            for (const _t of xe) {
              const Nt = M.get(_t) || [
                0,
                0,
                0,
                0,
                0,
                0
              ];
              Nt[1] += Zt, M.set(_t, Nt);
            }
          }
          if (w > 0) {
            const K = [];
            for (let xe = 0; xe < b.length; xe++) {
              const Ce = b[xe][0], Ke = b[xe][1];
              Math.abs(Ke - C) < s * 0.1 && Ce > n - 1e-6 && K.push({
                idx: xe,
                x: Ce
              });
            }
            K.sort((xe, Ce) => xe.x - Ce.x);
            for (let xe = 0; xe < K.length; xe++) {
              let Ce = s;
              xe > 0 && xe < K.length - 1 ? Ce = (K[xe + 1].x - K[xe - 1].x) / 2 : xe === 0 && K.length > 1 ? Ce = (K[1].x - K[0].x) / 2 : xe === K.length - 1 && K.length > 1 && (Ce = (K[xe].x - K[xe - 1].x) / 2);
              const Ke = -w * Ce, at = M.get(K[xe].idx) || [
                0,
                0,
                0,
                0,
                0,
                0
              ];
              at[1] += Ke, M.set(K[xe].idx, at);
            }
          }
          console.log(`  Interfaz Goodman: ${W.length} nodos interfaz, ${ce} elem interfaz, kn=${$}, ks=${g}`);
        } else {
          const A = [
            [
              -z,
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
              C,
              0
            ],
            [
              n,
              C,
              0
            ],
            [
              0,
              C,
              0
            ],
            [
              0,
              l,
              0
            ],
            [
              -z,
              l,
              0
            ]
          ], X = [
            [
              n,
              l,
              0
            ]
          ], U = Rt({
            points: [
              ...A,
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
            maxMeshSize: s
          });
          b = U.nodes, f = U.elements;
          const ee = (Q) => {
            const ce = (b[Q[0]][0] + b[Q[1]][0] + b[Q[2]][0]) / 3, be = (b[Q[0]][1] + b[Q[1]][1] + b[Q[2]][1]) / 3, se = ce >= -z && ce <= N && be >= 0 && be <= l, Se = ce >= 0 && ce <= n && be >= l && be <= l + t;
            return se || Se;
          }, Y = /* @__PURE__ */ new Map(), W = /* @__PURE__ */ new Map(), Z = /* @__PURE__ */ new Map(), ue = /* @__PURE__ */ new Map(), qe = /* @__PURE__ */ new Map(), Le = [];
          for (let Q = 0; Q < f.length; Q++) {
            const ce = ee(f[Q]);
            Le.push(!ce), ce ? (Y.set(Q, c), W.set(Q, c), ue.set(Q, i), qe.set(Q, d), Z.set(Q, 1)) : (Y.set(Q, a), W.set(Q, a), ue.set(Q, u), qe.set(Q, y), Z.set(Q, 1));
          }
          T = {
            elasticities: Y,
            elasticitiesOrthogonal: W,
            thicknesses: Z,
            poissonsRatios: ue,
            shearModuli: qe
          };
          for (let Q = 0; Q < b.length; Q++) {
            const ce = b[Q][0], be = b[Q][1];
            Math.abs(be) < 1e-6 ? v.set(Q, [
              true,
              true,
              true,
              true,
              true,
              true
            ]) : Math.abs(ce - L) < s * 0.1 && v.set(Q, [
              true,
              false,
              true,
              true,
              true,
              true
            ]);
          }
          for (let Q = 0; Q < f.length; Q++) {
            if (!Le[Q]) continue;
            const ce = f[Q], be = b[ce[0]], se = b[ce[1]], Se = b[ce[2]], Te = Math.abs((se[0] - be[0]) * (Se[1] - be[1]) - (Se[0] - be[0]) * (se[1] - be[1])) / 2, je = -m * Te / 3;
            for (const K of ce) {
              const xe = M.get(K) || [
                0,
                0,
                0,
                0,
                0,
                0
              ];
              xe[1] += je, M.set(K, xe);
            }
          }
          if (w > 0) {
            const Q = [];
            for (let ce = 0; ce < b.length; ce++) {
              const be = b[ce][0], se = b[ce][1];
              Math.abs(se - C) < s * 0.1 && be > n - 1e-6 && Q.push({
                idx: ce,
                x: be
              });
            }
            Q.sort((ce, be) => ce.x - be.x);
            for (let ce = 0; ce < Q.length; ce++) {
              let be = s;
              ce > 0 && ce < Q.length - 1 ? be = (Q[ce + 1].x - Q[ce - 1].x) / 2 : ce === 0 && Q.length > 1 ? be = (Q[1].x - Q[0].x) / 2 : ce === Q.length - 1 && Q.length > 1 && (be = (Q[ce].x - Q[ce - 1].x) / 2);
              const se = -w * be, Se = M.get(Q[ce].idx) || [
                0,
                0,
                0,
                0,
                0,
                0
              ];
              Se[1] += se, M.set(Q[ce].idx, Se);
            }
          }
        }
      }
      if (E === 3) {
        const L = Rt({
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
        b = L.nodes, f = L.elements;
        for (let ee = 0; ee < b.length; ee++) Math.abs(b[ee][1]) < 1e-6 && v.set(ee, [
          true,
          true,
          true,
          true,
          true,
          true
        ]);
        const C = l + t, A = Math.min(x, t), X = C - A, U = [];
        for (let ee = 0; ee < b.length; ee++) {
          const Y = b[ee][0], W = b[ee][1];
          Math.abs(Y - n) < s * 0.6 && W >= l - 1e-6 && U.push({
            idx: ee,
            y: W
          });
        }
        U.sort((ee, Y) => ee.y - Y.y);
        for (let ee = 0; ee < U.length; ee++) {
          const { idx: Y, y: W } = U[ee], Z = Math.max(0, C - W);
          if (Z <= 0 || W < X - 1e-6) continue;
          const ue = Math.min(Z, A), qe = r * ue;
          let Le = s;
          ee > 0 && ee < U.length - 1 ? Le = (U[ee + 1].y - U[ee - 1].y) / 2 : ee === 0 && U.length > 1 ? Le = (U[1].y - U[0].y) / 2 : ee === U.length - 1 && U.length > 1 && (Le = (U[ee].y - U[ee - 1].y) / 2);
          const Q = qe * Le;
          Math.abs(Q) > 1e-10 && M.set(Y, [
            Q,
            0,
            0,
            0,
            0,
            0
          ]);
        }
        T = {
          elasticities: new Map(f.map((ee, Y) => [
            Y,
            c
          ])),
          elasticitiesOrthogonal: new Map(f.map((ee, Y) => [
            Y,
            c
          ])),
          thicknesses: new Map(f.map((ee, Y) => [
            Y,
            n
          ])),
          poissonsRatios: new Map(f.map((ee, Y) => [
            Y,
            i
          ])),
          shearModuli: new Map(f.map((ee, Y) => [
            Y,
            d
          ]))
        };
      }
      const O = {
        supports: v,
        loads: M
      }, q = [
        "Rankine (Ka)",
        "Suelo continuo",
        "Interfaz",
        "Presion agua"
      ];
      try {
        const L = zt(b, f, O, T), C = f.filter((Z) => Z.length === 3), A = {};
        for (const Z of Object.keys(T)) {
          const ue = T[Z];
          if (ue && ue instanceof Map) {
            const qe = /* @__PURE__ */ new Map();
            let Le = 0;
            for (let Q = 0; Q < f.length; Q++) f[Q].length === 3 && (ue.has(Q) && qe.set(Le, ue.get(Q)), Le++);
            A[Z] = qe;
          }
        }
        const X = ho(b, C, A, L), U = b.map((Z) => [
          Z[0],
          0,
          Z[1]
        ]);
        if (e.nodes.val = U, e.elements.val = C, L && L.deformations) {
          const Z = /* @__PURE__ */ new Map();
          L.deformations.forEach((ue, qe) => {
            Z.set(qe, [
              ue[0],
              ue[2],
              ue[1],
              ue[3],
              ue[5],
              ue[4]
            ]);
          }), e.deformOutputs && (e.deformOutputs.val = {
            deformations: Z
          });
        }
        const ee = /* @__PURE__ */ new Map();
        v.forEach((Z, ue) => ee.set(ue, Z));
        const Y = /* @__PURE__ */ new Map();
        M.forEach((Z, ue) => Y.set(ue, [
          Z[0],
          Z[2],
          Z[1],
          Z[3],
          Z[5],
          Z[4]
        ])), e.nodeInputs && (e.nodeInputs.val = {
          supports: ee,
          loads: Y
        }), e.elementInputs && (e.elementInputs.val = {}), e.analyzeOutputs && (e.analyzeOutputs.val = {});
        let W = 0;
        L && L.deformations && L.deformations.forEach((Z) => {
          const ue = Math.sqrt(Z[0] * Z[0] + Z[1] * Z[1] + Z[2] * Z[2]);
          W = Math.max(W, ue);
        }), console.log(`Muro Contencion [${q[E]}]: ${b.length} nodos, ${f.length} triangulos`), console.log(`  H=${t}, B=${o}, tw=${n}, tb=${l}, Ka=${p}, gamma=${m}, qs=${w}`), E === 1 && console.log(`  Es=${a}, nus=${u}`), E === 2 && console.log(`  Es=${a}, nus=${u}, kn=${$}, ks=${g}`), E === 3 && console.log(`  gammaW=${r}, Hw=${x}`), console.log(`  max|u| = ${W.toExponential(4)}`);
      } catch (L) {
        console.warn("Muro Contencion failed:", L.message);
      }
      setTimeout(() => ft(), 50), Oe();
    }
    function _n() {
      const t = R("Lx") || 2, o = R("Ly") || 2, n = R("t") || 0.5, l = R("colA") || 0.4, s = R("colH") || 1.5, c = Math.round(R("nx") || 8), i = Math.round(R("ny") || 8), d = R("E") || 25e6, m = R("nu") || 0.2, p = R("P") || -500, a = R("Mx") || 0, u = R("My") || 0, y = R("ks") || 2e4, $ = t / c, g = o / i, r = t / 2, x = o / 2, w = l / 2, E = [];
      for (let v = 0; v <= i; v++) for (let M = 0; M <= c; M++) {
        const T = v * (c + 1) + M;
        let O = $, q = g;
        (M === 0 || M === c) && (O = $ / 2), (v === 0 || v === i) && (q = g / 2), E.push({
          node: T,
          dof: 0,
          k: y * O * q
        });
      }
      let z = 0;
      for (let v = 0; v <= i; v++) for (let M = 0; M <= c; M++) Math.abs(M * $ - r) <= w + 1e-6 && Math.abs(v * g - x) <= w + 1e-6 && z++;
      const N = p / Math.max(z, 1), P = [];
      for (let v = 0; v <= i; v++) for (let M = 0; M <= c; M++) {
        const T = M * $, O = v * g;
        Math.abs(T - r) <= w + 1e-6 && Math.abs(O - x) <= w + 1e-6 && P.push({
          node: v * (c + 1) + M,
          dof: 0,
          value: N
        });
      }
      if (Math.abs(a) > 1e-6) {
        const v = w > 1e-6 ? w : g, M = a / v;
        for (let T = 0; T <= i; T++) for (let O = 0; O <= c; O++) {
          const q = O * $, L = T * g;
          if (Math.abs(q - r) <= w + 1e-6 && Math.abs(L - x) <= w + 1e-6) {
            const C = L - x;
            if (Math.abs(C) > 1e-6) {
              const A = C > 0 ? 1 : -1;
              P.push({
                node: T * (c + 1) + O,
                dof: 0,
                value: A * M / z * 2
              });
            }
          }
        }
      }
      if (Math.abs(u) > 1e-6) {
        const v = w > 1e-6 ? w : $, M = u / v;
        for (let T = 0; T <= i; T++) for (let O = 0; O <= c; O++) {
          const q = O * $, L = T * g;
          if (Math.abs(q - r) <= w + 1e-6 && Math.abs(L - x) <= w + 1e-6) {
            const C = q - r;
            if (Math.abs(C) > 1e-6) {
              const A = C > 0 ? 1 : -1;
              P.push({
                node: T * (c + 1) + O,
                dof: 0,
                value: A * M / z * 2
              });
            }
          }
        }
      }
      const f = {
        1: 2,
        2: 1,
        3: 0
      }[Ee] ?? 1;
      console.log(`Zapata: ${t}x${o}m, t=${n}m, ${c}x${i} elem`), console.log(`  col=${l}m, P=${p}, Mx=${a}, My=${u}, ks=${y}`);
      try {
        const v = un({
          E: d,
          nu: m,
          thickness: n,
          meshLx: t,
          meshLy: o,
          meshNx: c,
          meshNy: i,
          bcType: "none",
          pressure: 0,
          theoryType: f,
          springs: E,
          pointLoads: P
        });
        console.log(`  Solved: w_max = ${v.maxW.toExponential(4)}`);
        const M = v.nodeResults.map((X) => [
          X.x,
          X.y,
          0
        ]), T = M.length;
        M.push([
          r - w,
          x - w,
          0
        ]), M.push([
          r + w,
          x - w,
          0
        ]), M.push([
          r + w,
          x + w,
          0
        ]), M.push([
          r - w,
          x + w,
          0
        ]), M.push([
          r - w,
          x - w,
          s
        ]), M.push([
          r + w,
          x - w,
          s
        ]), M.push([
          r + w,
          x + w,
          s
        ]), M.push([
          r - w,
          x + w,
          s
        ]);
        const O = v.elementResults.map((X) => [
          ...X.nodes
        ]);
        O.push([
          T,
          T + 4
        ]), O.push([
          T + 1,
          T + 5
        ]), O.push([
          T + 2,
          T + 6
        ]), O.push([
          T + 3,
          T + 7
        ]), O.push([
          T + 4,
          T + 5
        ]), O.push([
          T + 5,
          T + 6
        ]), O.push([
          T + 6,
          T + 7
        ]), O.push([
          T + 7,
          T + 4
        ]), O.push([
          T,
          T + 1
        ]), O.push([
          T + 1,
          T + 2
        ]), O.push([
          T + 2,
          T + 3
        ]), O.push([
          T + 3,
          T
        ]), e.nodes.val = M, e.elements.val = O;
        const q = /* @__PURE__ */ new Map();
        v.nodeResults.forEach((X, U) => {
          q.set(U, [
            0,
            0,
            X.w,
            X.bx,
            X.by,
            0
          ]);
        }), e.deformOutputs && (e.deformOutputs.val = {
          deformations: q
        });
        const L = /* @__PURE__ */ new Map();
        v.nodeResults.forEach((X, U) => {
          const ee = X.x, Y = X.y;
          (ee < 1e-6 || ee > t - 1e-6 || Y < 1e-6 || Y > o - 1e-6) && L.set(U, [
            false,
            false,
            true,
            false,
            false,
            false
          ]);
        });
        const C = /* @__PURE__ */ new Map();
        if (C.set(T + 4, [
          0,
          0,
          p / 4,
          0,
          0,
          0
        ]), C.set(T + 5, [
          0,
          0,
          p / 4,
          0,
          0,
          0
        ]), C.set(T + 6, [
          0,
          0,
          p / 4,
          0,
          0,
          0
        ]), C.set(T + 7, [
          0,
          0,
          p / 4,
          0,
          0,
          0
        ]), e.nodeInputs && (e.nodeInputs.val = {
          supports: L,
          loads: C
        }), e.elementInputs && (e.elementInputs.val = {}), e.analyzeOutputs) {
          const X = v.elementResults.length, U = /* @__PURE__ */ new Map(), ee = /* @__PURE__ */ new Map(), Y = /* @__PURE__ */ new Map();
          v.elementResults.forEach((W, Z) => {
            U.set(Z, [
              W.Mxx,
              W.Mxx,
              W.Mxx
            ]), ee.set(Z, [
              W.Myy,
              W.Myy,
              W.Myy
            ]), Y.set(Z, [
              W.Mxy,
              W.Mxy,
              W.Mxy
            ]);
          }), e.analyzeOutputs.val = {
            bendingXX: U,
            bendingYY: ee,
            bendingXY: Y
          };
        }
        const A = Je();
        A && (A.settings.shellResults.val = "bendingXX");
      } catch (v) {
        console.warn("Zapata solver failed:", v.message);
      }
      setTimeout(() => ft(), 50), Oe();
    }
    function Hn() {
      const t = R("Lx") || 0.4, o = R("Ly") || 0.4, n = R("t") || 0.025, l = R("dBolt") || 0.022, s = R("sx") || 0.28, c = R("sy") || 0.28, i = R("colA") || 0.2, d = R("meshSize") || 8e-3, m = R("E") || 2e8, p = R("nu") || 0.3, a = m / (2 * (1 + p)), u = R("P") || -200, y = Math.round(R("nBolts") || 4), $ = t / 2, g = o / 2, r = l / 2, x = i / 2, w = [];
      y >= 4 && (w.push([
        $ - s / 2,
        g - c / 2
      ]), w.push([
        $ + s / 2,
        g - c / 2
      ]), w.push([
        $ + s / 2,
        g + c / 2
      ]), w.push([
        $ - s / 2,
        g + c / 2
      ])), y >= 6 && (w.push([
        $,
        g - c / 2
      ]), w.push([
        $,
        g + c / 2
      ])), y >= 8 && (w.push([
        $ - s / 2,
        g
      ]), w.push([
        $ + s / 2,
        g
      ]));
      const { nodes: E, elements: z } = Rt({
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
        maxMeshSize: d
      }), N = (q, L) => {
        for (const [C, A] of w) if ((q - C) * (q - C) + (L - A) * (L - A) < r * r) return true;
        return false;
      }, P = z.filter((q) => {
        const L = (E[q[0]][0] + E[q[1]][0] + E[q[2]][0]) / 3, C = (E[q[0]][1] + E[q[1]][1] + E[q[2]][1]) / 3;
        return !N(L, C);
      }), b = E, f = /* @__PURE__ */ new Map();
      for (let q = 0; q < b.length; q++) {
        const L = b[q][0], C = b[q][1];
        for (const [A, X] of w) {
          const U = Math.sqrt((L - A) * (L - A) + (C - X) * (C - X));
          U >= r * 0.7 && U <= r * 1.5 && f.set(q, [
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
        const L = b[q][0], C = b[q][1];
        Math.abs(L - $) <= x && Math.abs(C - g) <= x && M++;
      }
      const T = u / Math.max(M, 1);
      for (let q = 0; q < b.length; q++) {
        const L = b[q][0], C = b[q][1];
        if (Math.abs(L - $) <= x && Math.abs(C - g) <= x) {
          const A = v.get(q) || [
            0,
            0,
            0,
            0,
            0,
            0
          ];
          A[2] += T, v.set(q, A);
        }
      }
      const O = {
        elasticities: new Map(P.map((q, L) => [
          L,
          m
        ])),
        elasticitiesOrthogonal: new Map(P.map((q, L) => [
          L,
          m
        ])),
        thicknesses: new Map(P.map((q, L) => [
          L,
          n
        ])),
        poissonsRatios: new Map(P.map((q, L) => [
          L,
          p
        ])),
        shearModuli: new Map(P.map((q, L) => [
          L,
          a
        ]))
      };
      console.log(`Placa Base: ${t * 1e3}x${o * 1e3}mm, t=${n * 1e3}mm, ${y} pernos d=${l * 1e3}mm`), console.log(`  P=${u} kN, col=${i * 1e3}mm, mesh=${d * 1e3}mm`), console.log(`  ${P.length} triangulos, ${b.length} nodos`);
      try {
        const q = zt(b, P, {
          supports: f,
          loads: v
        }, O), L = ho(b, P, O, q);
        e.nodes.val = b, e.elements.val = P, q && e.deformOutputs && (e.deformOutputs.val = q), e.nodeInputs && (e.nodeInputs.val = {
          supports: f,
          loads: v
        }), e.elementInputs && (e.elementInputs.val = {}), L && e.analyzeOutputs && (e.analyzeOutputs.val = L);
        let C = 0;
        q && q.deformations && q.deformations.forEach((A) => {
          const X = Math.sqrt(A[0] * A[0] + A[1] * A[1] + A[2] * A[2]);
          C = Math.max(C, X);
        }), console.log(`  max|u| = ${C.toExponential(4)}`);
      } catch (q) {
        console.warn("Placa Base failed:", q.message);
      }
      setTimeout(() => ft(), 50), Oe();
    }
    function Nn() {
      const t = R("colB") || 0.3, o = R("colH") || 0.3, n = R("colT") || 8e-3, l = R("colLen") || 1.5, s = R("Lx") || 0.45, c = R("Ly") || 0.45, i = R("tPlaca") || 0.025, d = R("dBolt") || 0.022, m = R("sx") || 0.32, p = R("sy") || 0.32, a = Math.round(R("nSubColV") || 6), u = Math.round(R("nSubColH") || 4), y = Math.round(R("nSubPlaca") || 10), $ = R("E") || 2e8, g = R("nu") || 0.3, r = $ / (2 * (1 + g)), x = R("P") || -300, w = s / 2, E = c / 2, z = d / 2, N = t / 2, P = o / 2, b = [], f = [], v = y, M = s / v, T = c / v, O = (se, Se) => Se * (v + 1) + se;
      for (let se = 0; se <= v; se++) for (let Se = 0; Se <= v; Se++) b.push([
        Se * M,
        se * T,
        0
      ]);
      const q = [
        [
          w - m / 2,
          E - p / 2
        ],
        [
          w + m / 2,
          E - p / 2
        ],
        [
          w + m / 2,
          E + p / 2
        ],
        [
          w - m / 2,
          E + p / 2
        ]
      ], L = (se, Se) => {
        for (const [Te, je] of q) if ((se - Te) * (se - Te) + (Se - je) * (Se - je) < z * z) return true;
        return false;
      }, C = f.length;
      for (let se = 0; se < v; se++) for (let Se = 0; Se < v; Se++) {
        const Te = (Se + 0.5) * M, je = (se + 0.5) * T;
        L(Te, je) || f.push([
          O(Se, se),
          O(Se + 1, se),
          O(Se + 1, se + 1),
          O(Se, se + 1)
        ]);
      }
      const A = f.length - C, X = a, U = u, ee = [
        [
          w - N,
          E - P
        ],
        [
          w + N,
          E - P
        ],
        [
          w + N,
          E + P
        ],
        [
          w - N,
          E + P
        ]
      ], Y = f.length, W = [
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
      ], Z = (se, Se) => {
        for (let Te = 0; Te < (v + 1) * (v + 1); Te++) if (Math.abs(b[Te][0] - se) < M * 0.3 && Math.abs(b[Te][1] - Se) < T * 0.3 && Math.abs(b[Te][2]) < 1e-6) return Te;
        return -1;
      };
      for (const [se, Se] of W) {
        const [Te, je] = ee[se], [K, xe] = ee[Se], Ce = [];
        for (let Ke = 0; Ke <= X; Ke++) {
          const at = [], xo = Ke / X * l;
          for (let Zt = 0; Zt <= U; Zt++) {
            const _t = Zt / U, Nt = Te + _t * (K - Te), pn = je + _t * (xe - je);
            if (Ke === 0) {
              const Ot = Z(Nt, pn);
              if (Ot >= 0) {
                at.push(Ot);
                continue;
              }
            }
            let fn = -1;
            for (let Ot = 0; Ot < b.length; Ot++) if (Math.abs(b[Ot][0] - Nt) < 1e-6 && Math.abs(b[Ot][1] - pn) < 1e-6 && Math.abs(b[Ot][2] - xo) < 1e-6) {
              fn = Ot;
              break;
            }
            fn >= 0 ? at.push(fn) : (at.push(b.length), b.push([
              Nt,
              pn,
              xo
            ]));
          }
          Ce.push(at);
        }
        for (let Ke = 0; Ke < X; Ke++) for (let at = 0; at < U; at++) f.push([
          Ce[Ke][at],
          Ce[Ke][at + 1],
          Ce[Ke + 1][at + 1],
          Ce[Ke + 1][at]
        ]);
      }
      const ue = f.length - Y, qe = /* @__PURE__ */ new Map();
      for (let se = 0; se < (v + 1) * (v + 1); se++) {
        const Se = b[se][0], Te = b[se][1];
        for (const [je, K] of q) {
          const xe = Math.sqrt((Se - je) * (Se - je) + (Te - K) * (Te - K));
          xe >= z * 0.5 && xe <= z * 2 && qe.set(se, [
            true,
            true,
            true,
            true,
            true,
            true
          ]);
        }
      }
      const Le = /* @__PURE__ */ new Map(), Q = [];
      for (let se = 0; se < b.length; se++) Math.abs(b[se][2] - l) < 1e-6 && Q.push(se);
      const ce = x / Math.max(Q.length, 1);
      for (const se of Q) Le.set(se, [
        0,
        0,
        ce,
        0,
        0,
        0
      ]);
      const be = {
        elasticities: /* @__PURE__ */ new Map(),
        poissonsRatios: /* @__PURE__ */ new Map(),
        thicknesses: /* @__PURE__ */ new Map(),
        shearModuli: /* @__PURE__ */ new Map()
      };
      for (let se = C; se < C + A; se++) be.elasticities.set(se, $), be.poissonsRatios.set(se, g), be.thicknesses.set(se, i), be.shearModuli.set(se, r);
      for (let se = Y; se < Y + ue; se++) be.elasticities.set(se, $), be.poissonsRatios.set(se, g), be.thicknesses.set(se, n), be.shearModuli.set(se, r);
      console.log(`Col+Placa 3D: col ${t * 1e3}x${o * 1e3}x${n * 1e3}mm, h=${l}m`), console.log(`  Placa ${s * 1e3}x${c * 1e3}mm, t=${i * 1e3}mm, 4 pernos d=${d * 1e3}mm`), console.log(`  ${A} Q4 placa + ${ue} Q4 columna = ${f.length} total`), console.log(`  ${b.length} nodos, P=${x} kN`);
      try {
        const se = zt(b, f, {
          supports: qe,
          loads: Le
        }, be), Se = ho(b, f, be, se);
        e.nodes.val = b, e.elements.val = f, se && e.deformOutputs && (e.deformOutputs.val = se), e.nodeInputs && (e.nodeInputs.val = {
          supports: qe,
          loads: Le
        }), e.elementInputs && (e.elementInputs.val = be), Se && e.analyzeOutputs && (e.analyzeOutputs.val = Se);
        let Te = 0;
        (se == null ? void 0 : se.deformations) && se.deformations.forEach((je) => {
          const K = Math.sqrt(je[0] * je[0] + je[1] * je[1] + je[2] * je[2]);
          Te = Math.max(Te, K);
        }), console.log(`  max|u| = ${Te.toExponential(4)}`);
      } catch (se) {
        console.warn("Col+Placa failed:", se.message), e.nodes.val = b, e.elements.val = f, e.nodeInputs && (e.nodeInputs.val = {
          supports: qe,
          loads: Le
        });
      }
      setTimeout(() => ft(), 50), Oe();
    }
    function On() {
      const t = R("H") || 6, o = R("angle") || 45, n = R("bTop") || 3, l = R("bBot") || 3, s = R("meshSize") || 2, c = R("E") || 5e4, i = R("nu") || 0.3, d = R("gamma") || 18, m = R("c") || 15, p = R("phi") || 30, a = R("qs") || 0, u = t / Math.tan(o * Math.PI / 180), y = l + u + n, $ = t, g = [
        [
          0,
          -$,
          0
        ],
        [
          y,
          -$,
          0
        ],
        [
          y,
          t,
          0
        ],
        [
          l + u,
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
      ], { nodes: r, elements: x } = Rt({
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
      }), w = r, E = [], z = /* @__PURE__ */ new Map();
      for (let P = 0; P < w.length; P++) {
        const b = w[P][0], f = w[P][1];
        Math.abs(f + $) < 1e-6 ? (E.push({
          node: P,
          fixX: true,
          fixY: true
        }), z.set(P, [
          true,
          true,
          true,
          true,
          true,
          true
        ])) : (Math.abs(b) < 1e-6 || Math.abs(b - y) < 1e-6) && (E.push({
          node: P,
          fixX: true,
          fixY: false
        }), z.set(P, [
          true,
          false,
          true,
          true,
          true,
          true
        ]));
      }
      const N = t - s * 0.3;
      try {
        const P = w.map((L) => [
          L[0],
          L[1]
        ]), b = x.map((L) => [
          L[0],
          L[1],
          L[2]
        ]), f = Vs({
          nodes: P,
          elements: b,
          E: c,
          nu: i,
          gamma: d,
          c: m,
          phi: p,
          thickness: 1,
          supports: E,
          surcharge: a,
          surfaceYThreshold: N
        }), v = w.map((L) => [
          L[0],
          0,
          L[1]
        ]);
        e.nodes.val = v, e.elements.val = x;
        const M = /* @__PURE__ */ new Map();
        for (let L = 0; L < f.displacements.length; L++) {
          const [C, A] = f.displacements[L];
          M.set(L, [
            C,
            0,
            A,
            0,
            0,
            0
          ]);
        }
        e.deformOutputs && (e.deformOutputs.val = {
          deformations: M
        }), e.nodeInputs && (e.nodeInputs.val = {
          supports: z
        }), e.elementInputs && (e.elementInputs.val = {});
        const T = /* @__PURE__ */ new Map();
        for (let L = 0; L < f.plasticStrain.length; L++) {
          const C = f.plasticStrain[L];
          T.set(L, [
            C,
            C,
            C
          ]);
        }
        e.analyzeOutputs && (e.analyzeOutputs.val = {
          membraneXX: T
        });
        let O = 0;
        for (const [L, C] of f.displacements) {
          const A = Math.sqrt(L * L + C * C);
          O = Math.max(O, A);
        }
        let q = 0;
        for (const L of f.plasticStrain) q = Math.max(q, L);
        console.log(`Talud SRM: ${w.length} nodos, ${x.length} triangulos`), console.log(`  H=${t}, angulo=${o}\xB0, c=${m} kPa, \u03C6=${p}\xB0, \u03B3=${d}`), console.log("  \u2550\u2550\u2550 Strength Reduction Method (Mohr-Coulomb) \u2550\u2550\u2550"), console.log(`  FOS = ${f.fos.toFixed(3)}`), console.log(`  max|u| = ${O.toExponential(4)}`), console.log(`  max \u03B5_pl = ${q.toExponential(4)}`), f.fos < 1 ? console.warn("  \u26A0 TALUD INESTABLE (FOS < 1.0)") : f.fos < 1.5 && console.warn("  \u26A0 FOS < 1.5 \u2014 revisar estabilidad");
      } catch (P) {
        console.warn("Talud SRM failed:", P.message);
      }
      setTimeout(() => ft(), 50), Oe();
    }
    let qt = null, ot = null, Ht = null;
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
    function Ue(t) {
      const o = yo.find((n) => n.id === B);
      return t / o.toM;
    }
    function Ze(t) {
      const o = yo.find((n) => n.id === B);
      return t * o.toM;
    }
    function to(t) {
      const o = yn.find((l) => l.id === J.forceId), n = yo.find((l) => l.id === J.lengthId);
      return t / (o.toKN / (n.toM * n.toM));
    }
    function Go(t) {
      const o = yn.find((l) => l.id === J.forceId), n = yo.find((l) => l.id === J.lengthId);
      return t * (o.toKN / (n.toM * n.toM));
    }
    function Vo() {
      return J.label;
    }
    function ys() {
      switch (yo.find((o) => o.id === B).id) {
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
      const t = to(20594), o = to(58840), n = Math.max(1, Math.round((o - t) / 40));
      return [
        Math.round(t),
        Math.round(o),
        n
      ];
    }
    function Rn(t, o, n, l, s) {
      const c = H.steelVigaType, i = c === 0 ? Ao() : _o();
      if (H.vigaMat === 0) {
        for (let d = 0; d < o.length; d++) {
          const m = o[d], p = `b${n}${d}`, a = `h${n}${d}`, u = {};
          u[p] = +Ue(m.b).toFixed(2), u[a] = +Ue(m.h).toFixed(2), t.addBinding(u, p, {
            min: l[0],
            max: l[1],
            step: l[2],
            label: `b sv${n}${d + 1}`
          }), t.addBinding(u, a, {
            min: l[0],
            max: l[1],
            step: l[2],
            label: `h sv${n}${d + 1}`
          });
        }
        t.on("change", (d) => {
          var _a;
          const m = (_a = d.target) == null ? void 0 : _a.key, p = m == null ? void 0 : m.match(new RegExp(`^b${n}(\\d+)$`)), a = m == null ? void 0 : m.match(new RegExp(`^h${n}(\\d+)$`));
          p && (o[parseInt(p[1])].b = Ze(d.value), re()), a && (o[parseInt(a[1])].h = Ze(d.value), re());
        });
      } else if (c <= 1) {
        for (let d = 0; d < o.length; d++) {
          const m = {};
          m[`p${n}${d}`] = o[d].profileIdx ?? 0, t.addBinding(m, `p${n}${d}`, {
            label: `sv${n}${d + 1}`,
            options: i
          });
        }
        t.on("change", (d) => {
          var _a, _b;
          const p = (_b = (_a = d.target) == null ? void 0 : _a.key) == null ? void 0 : _b.match(new RegExp(`^p${n}(\\d+)$`));
          p && (o[parseInt(p[1])].profileIdx = d.value, re());
        });
      } else if (c === 2) {
        for (let d = 0; d < o.length; d++) {
          const m = o[d], p = {}, a = `${n}${d}`;
          p[`bf${a}`] = +Ue(m.bf ?? 0.2).toFixed(3), p[`h${a}`] = +Ue(m.hf ?? 0.4).toFixed(3), p[`tf${a}`] = +Ue(m.tf ?? 0.015).toFixed(3), p[`tw${a}`] = +Ue(m.tw ?? 0.01).toFixed(3), t.addBinding(p, `bf${a}`, {
            min: l[0],
            max: l[1],
            step: l[2],
            label: `bf sv${n}${d + 1}`
          }), t.addBinding(p, `h${a}`, {
            min: l[0],
            max: l[1],
            step: l[2],
            label: `h sv${n}${d + 1}`
          }), t.addBinding(p, `tf${a}`, {
            min: s[0],
            max: s[1],
            step: s[2],
            label: `tf sv${n}${d + 1}`
          }), t.addBinding(p, `tw${a}`, {
            min: s[0],
            max: s[1],
            step: s[2],
            label: `tw sv${n}${d + 1}`
          });
        }
        t.on("change", (d) => {
          var _a;
          const m = (_a = d.target) == null ? void 0 : _a.key;
          for (let p = 0; p < o.length; p++) {
            const a = `${n}${p}`;
            m === `bf${a}` && (o[p].bf = Ze(d.value), re()), m === `h${a}` && (o[p].hf = Ze(d.value), re()), m === `tf${a}` && (o[p].tf = Ze(d.value), re()), m === `tw${a}` && (o[p].tw = Ze(d.value), re());
          }
        });
      } else {
        for (let d = 0; d < o.length; d++) {
          const m = o[d], p = {}, a = `${n}${d}`;
          p[`bc${a}`] = +Ue(m.bc ?? 0.2).toFixed(3), p[`hc${a}`] = +Ue(m.hc ?? 0.3).toFixed(3), p[`t${a}`] = +Ue(m.t ?? 8e-3).toFixed(3), t.addBinding(p, `bc${a}`, {
            min: l[0],
            max: l[1],
            step: l[2],
            label: `b sv${n}${d + 1}`
          }), t.addBinding(p, `hc${a}`, {
            min: l[0],
            max: l[1],
            step: l[2],
            label: `h sv${n}${d + 1}`
          }), t.addBinding(p, `t${a}`, {
            min: s[0],
            max: s[1],
            step: s[2],
            label: `t sv${n}${d + 1}`
          });
        }
        t.on("change", (d) => {
          var _a;
          const m = (_a = d.target) == null ? void 0 : _a.key;
          for (let p = 0; p < o.length; p++) {
            const a = `${n}${p}`;
            m === `bc${a}` && (o[p].bc = Ze(d.value), re()), m === `hc${a}` && (o[p].hc = Ze(d.value), re()), m === `t${a}` && (o[p].t = Ze(d.value), re());
          }
        });
      }
    }
    function po() {
      var _a;
      if (ot) {
        try {
          ot.dispose();
        } catch {
        }
        ot = null;
      }
      const t = document.getElementById("sections");
      if (t && (t.innerHTML = ""), I !== "edificio" && I !== "frame") {
        t && (t.style.display = "none");
        return;
      }
      const o = vs();
      if (!o) return;
      o.style.display = "";
      const n = k, l = Math.round(((_a = G.nPisos) == null ? void 0 : _a.val) ?? 3), s = ys(), c = $s(), i = oe.length || 1, d = ne.length || 1;
      for (; H.perFloor.length < l; ) {
        const b = H.perFloor.length > 0 ? JSON.parse(JSON.stringify(H.perFloor[H.perFloor.length - 1])) : Ie(i, d);
        H.perFloor.push(b);
      }
      H.perFloor.length > l && (H.perFloor.length = l);
      for (const b of H.perFloor) {
        for (; b.vigasX.length < i; ) b.vigasX.push(b.vigasX.length > 0 ? {
          ...b.vigasX[b.vigasX.length - 1]
        } : te());
        for (b.vigasX.length > i && (b.vigasX.length = i); b.vigasY.length < d; ) b.vigasY.push(b.vigasY.length > 0 ? {
          ...b.vigasY[b.vigasY.length - 1]
        } : te());
        b.vigasY.length > d && (b.vigasY.length = d);
      }
      ot = new Fo({
        title: `Sections (${n.label})`,
        container: o
      });
      const m = {
        colMat: H.colMat
      };
      if (ot.addBinding(m, "colMat", {
        label: "Col Material",
        options: {
          Hormigon: 0,
          Acero: 1,
          CFT: 2
        }
      }).on("change", (b) => {
        H.colMat = b.value, po(), re();
      }), H.colMat === 0) {
        const b = {
          forma: H.colShape
        };
        ot.addBinding(b, "forma", {
          label: "Col forma",
          options: {
            Rectangular: 0,
            Circular: 1
          }
        }).on("change", (v) => {
          H.colShape = v.value, po(), re();
        });
        const f = {
          fc: +to(H.fc).toFixed(1)
        };
        ot.addBinding(f, "fc", {
          min: c[0],
          max: c[1],
          step: c[2],
          label: `f'c col (${Vo()})`
        }), ot.on("change", (v) => {
          var _a2;
          ((_a2 = v.target) == null ? void 0 : _a2.key) === "fc" && (H.fc = Go(v.value), re());
        });
      } else if (H.colMat === 1) {
        const b = {
          colType: H.steelColType
        };
        ot.addBinding(b, "colType", {
          label: "Col tipo",
          options: {
            "W profile": 0,
            "HSS profile": 1,
            "I param": 2,
            Tubular: 3
          }
        }).on("change", (f) => {
          H.steelColType = f.value, po(), re();
        });
      }
      ot.addBlade({
        view: "separator"
      });
      const p = {
        vigaMat: H.vigaMat
      };
      if (ot.addBinding(p, "vigaMat", {
        label: "Viga Material",
        options: {
          Hormigon: 0,
          Acero: 1
        }
      }).on("change", (b) => {
        H.vigaMat = b.value, po(), re();
      }), H.vigaMat === 1) {
        const b = {
          vigaType: H.steelVigaType
        };
        ot.addBinding(b, "vigaType", {
          label: "Viga tipo",
          options: {
            "W profile": 0,
            "HSS profile": 1,
            "I param": 2,
            Tubular: 3
          }
        }).on("change", (f) => {
          H.steelVigaType = f.value, po(), re();
        });
      }
      const a = H.steelColType === 0 ? Ao() : _o();
      H.steelVigaType === 0 ? Ao() : _o();
      const u = B === "m" ? [
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
        const f = H.perFloor[b], v = ot.addFolder({
          title: `Piso ${b + 1}`,
          expanded: b < 2
        });
        if (H.colMat === 0) if (H.colShape === 1) {
          const M = {
            dCol: +Ue(f.dCol).toFixed(2)
          };
          v.addBinding(M, "dCol", {
            min: s[0],
            max: s[1],
            step: s[2],
            label: "d col"
          }), v.on("change", (T) => {
            var _a2;
            ((_a2 = T.target) == null ? void 0 : _a2.key) === "dCol" && (f.dCol = Ze(T.value), re());
          });
        } else {
          const M = {
            bCol: +Ue(f.bCol).toFixed(2),
            hCol: +Ue(f.hCol).toFixed(2)
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
          }), v.on("change", (T) => {
            var _a2, _b;
            ((_a2 = T.target) == null ? void 0 : _a2.key) === "bCol" && (f.bCol = Ze(T.value), re()), ((_b = T.target) == null ? void 0 : _b.key) === "hCol" && (f.hCol = Ze(T.value), re());
          });
        }
        else if (H.colMat === 1) if (H.steelColType <= 1) {
          const M = {
            col: f.colProfileIdx
          };
          v.addBinding(M, "col", {
            label: "Columna",
            options: a
          }).on("change", (T) => {
            f.colProfileIdx = T.value, re();
          });
        } else if (H.steelColType === 2) {
          const M = {
            bf: +Ue(f.colBf ?? 0.3).toFixed(3),
            h: +Ue(f.colHf ?? 0.3).toFixed(3),
            tf: +Ue(f.colTf ?? 0.02).toFixed(3),
            tw: +Ue(f.colTw ?? 0.012).toFixed(3)
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
            min: u[0],
            max: u[1],
            step: u[2],
            label: "Col tf"
          }), v.addBinding(M, "tw", {
            min: u[0],
            max: u[1],
            step: u[2],
            label: "Col tw"
          }), v.on("change", (T) => {
            var _a2, _b, _c, _d;
            ((_a2 = T.target) == null ? void 0 : _a2.key) === "bf" && (f.colBf = Ze(T.value), re()), ((_b = T.target) == null ? void 0 : _b.key) === "h" && (f.colHf = Ze(T.value), re()), ((_c = T.target) == null ? void 0 : _c.key) === "tf" && (f.colTf = Ze(T.value), re()), ((_d = T.target) == null ? void 0 : _d.key) === "tw" && (f.colTw = Ze(T.value), re());
          });
        } else {
          const M = {
            bc: +Ue(f.colBc ?? 0.3).toFixed(3),
            hc: +Ue(f.colHc ?? 0.3).toFixed(3),
            t: +Ue(f.colT ?? 0.01).toFixed(3)
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
            min: u[0],
            max: u[1],
            step: u[2],
            label: "Col t"
          }), v.on("change", (T) => {
            var _a2, _b, _c;
            ((_a2 = T.target) == null ? void 0 : _a2.key) === "bc" && (f.colBc = Ze(T.value), re()), ((_b = T.target) == null ? void 0 : _b.key) === "hc" && (f.colHc = Ze(T.value), re()), ((_c = T.target) == null ? void 0 : _c.key) === "t" && (f.colT = Ze(T.value), re());
          });
        }
        else {
          const M = {
            bc: +Ue(f.colBc ?? 0.3).toFixed(3),
            hc: +Ue(f.colHc ?? 0.3).toFixed(3),
            t: +Ue(f.colT ?? 0.01).toFixed(3),
            Es: +to(f.colEs ?? 2e8).toFixed(0),
            nuS: f.colNuS ?? 0.3,
            fc: +to(f.colFc ?? 28e3).toFixed(1),
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
            min: u[0],
            max: u[1],
            step: u[2],
            label: "Col t"
          }), v.addBlade({
            view: "separator"
          });
          const T = +to(1e8).toFixed(0), O = +to(3e8).toFixed(0), q = Math.max(1, Math.round((O - T) / 200));
          v.addBinding(M, "Es", {
            min: T,
            max: O,
            step: q,
            label: `Es (${Vo()})`
          }), v.addBinding(M, "nuS", {
            min: 0.15,
            max: 0.45,
            step: 0.01,
            label: "\u03BDs"
          }), v.addBinding(M, "fc", {
            min: c[0],
            max: c[1],
            step: c[2],
            label: `f'c (${Vo()})`
          }), v.addBinding(M, "nuC", {
            min: 0.1,
            max: 0.35,
            step: 0.01,
            label: "\u03BDc"
          }), v.on("change", (L) => {
            var _a2, _b, _c, _d, _e2, _f, _g;
            ((_a2 = L.target) == null ? void 0 : _a2.key) === "bc" && (f.colBc = Ze(L.value), re()), ((_b = L.target) == null ? void 0 : _b.key) === "hc" && (f.colHc = Ze(L.value), re()), ((_c = L.target) == null ? void 0 : _c.key) === "t" && (f.colT = Ze(L.value), re()), ((_d = L.target) == null ? void 0 : _d.key) === "Es" && (f.colEs = Go(L.value), re()), ((_e2 = L.target) == null ? void 0 : _e2.key) === "nuS" && (f.colNuS = L.value, re()), ((_f = L.target) == null ? void 0 : _f.key) === "fc" && (f.colFc = Go(L.value), re()), ((_g = L.target) == null ? void 0 : _g.key) === "nuC" && (f.colNuC = L.value, re());
          });
        }
        if (f.vigasX.length > 0) {
          const M = v.addFolder({
            title: `Vigas X (${f.vigasX.length})`,
            expanded: false
          });
          Rn(M, f.vigasX, "x", s, u);
        }
        if (f.vigasY.length > 0) {
          const M = v.addFolder({
            title: `Vigas Y (${f.vigasY.length})`,
            expanded: false
          });
          Rn(M, f.vigasY, "y", s, u);
        }
      }
      ot.addBlade({
        view: "separator"
      });
      const y = ot.addFolder({
        title: "Vigas Secundarias",
        expanded: false
      }), $ = {
        activar: dt,
        direccion: Mt === "x" ? 0 : 1,
        cantidad: st
      };
      y.addBinding($, "activar", {
        label: "Activar"
      }), y.addBinding($, "direccion", {
        label: "Corren en",
        options: {
          "X (entre ejes Y)": 0,
          "Y (entre ejes X)": 1
        }
      }), y.addBinding($, "cantidad", {
        min: 1,
        max: 5,
        step: 1,
        label: "Cantidad/vano"
      }), y.on("change", (b) => {
        var _a2, _b, _c;
        ((_a2 = b.target) == null ? void 0 : _a2.key) === "activar" && (dt = b.value, re()), ((_b = b.target) == null ? void 0 : _b.key) === "direccion" && (Mt = b.value === 0 ? "x" : "y", re()), ((_c = b.target) == null ? void 0 : _c.key) === "cantidad" && (st = Math.round(b.value), re());
      }), ot.addBlade({
        view: "separator"
      });
      const g = ot.addFolder({
        title: "Losas de Piso",
        expanded: true
      }), r = {
        activar: yt,
        espesor: +Ue($t).toFixed(3),
        subdivX: Dt,
        subdivY: ge
      };
      g.addBinding(r, "activar", {
        label: "Activar losas"
      }), g.addBinding(r, "espesor", {
        min: s[0],
        max: s[1] * 0.3,
        step: s[2],
        label: `Espesor (${n.length})`
      }), g.addBinding(r, "subdivX", {
        min: 1,
        max: 6,
        step: 1,
        label: "Subdiv. X"
      }), g.addBinding(r, "subdivY", {
        min: 1,
        max: 6,
        step: 1,
        label: "Subdiv. Y"
      }), g.on("change", (b) => {
        var _a2, _b, _c, _d;
        ((_a2 = b.target) == null ? void 0 : _a2.key) === "activar" && (yt = b.value, re()), ((_b = b.target) == null ? void 0 : _b.key) === "espesor" && ($t = Ze(b.value), re()), ((_c = b.target) == null ? void 0 : _c.key) === "subdivX" && (Dt = Math.round(b.value), re()), ((_d = b.target) == null ? void 0 : _d.key) === "subdivY" && (ge = Math.round(b.value), re());
      }), ot.addBlade({
        view: "separator"
      });
      const x = ot.addFolder({
        title: "Muros de Corte",
        expanded: true
      }), w = {
        espesor: +Ue(xt).toFixed(3),
        subdivH: Ge,
        subdivW: ct
      };
      x.addBinding(w, "espesor", {
        min: s[0],
        max: s[1],
        step: s[2],
        label: `Espesor (${n.length})`
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
        ((_a2 = b.target) == null ? void 0 : _a2.key) === "espesor" && (xt = Ze(b.value), re()), ((_b = b.target) == null ? void 0 : _b.key) === "subdivH" && (Ge = Math.round(b.value), re()), ((_c = b.target) == null ? void 0 : _c.key) === "subdivW" && (ct = Math.round(b.value), re());
      });
      const E = oe.length || 1, z = ne.length || 1, N = E + 1, P = z + 1;
      if (E > 0) {
        const b = x.addFolder({
          title: `Muros dir X (${E} vanos)`,
          expanded: false
        });
        for (let f = 0; f < E; f++) for (let v = 0; v < P; v++) {
          const M = `wx_${f}_${v}`, T = We.some((L) => L.dir === "x" && L.bay === f && L.axisIdx === v), O = {};
          O[M] = T;
          const q = `Vano X${f + 1} / Eje Y${String.fromCharCode(65 + v)}`;
          b.addBinding(O, M, {
            label: q
          }).on("change", (L) => {
            L.value ? We.push({
              dir: "x",
              bay: f,
              axisIdx: v,
              floors: [
                -1
              ]
            }) : We = We.filter((C) => !(C.dir === "x" && C.bay === f && C.axisIdx === v)), re();
          });
        }
      }
      if (z > 0) {
        const b = x.addFolder({
          title: `Muros dir Y (${z} vanos)`,
          expanded: false
        });
        for (let f = 0; f < z; f++) for (let v = 0; v < N; v++) {
          const M = `wy_${f}_${v}`, T = We.some((L) => L.dir === "y" && L.bay === f && L.axisIdx === v), O = {};
          O[M] = T;
          const q = `Vano Y${f + 1} / Eje X${v + 1}`;
          b.addBinding(O, M, {
            label: q
          }).on("change", (L) => {
            L.value ? We.push({
              dir: "y",
              bay: f,
              axisIdx: v,
              floors: [
                -1
              ]
            }) : We = We.filter((C) => !(C.dir === "y" && C.bay === f && C.axisIdx === v)), re();
          });
        }
      }
      if (We.length > 0) {
        x.addBlade({
          view: "separator"
        });
        const b = {
          muros: `${We.length} ubicaciones`
        };
        x.addBinding(b, "muros", {
          label: "Total",
          readonly: true
        });
      }
    }
    function Ft() {
      const t = document.getElementById("parameters");
      if (!t) return;
      if (Be || (Be = t.innerHTML), me) {
        try {
          me.dispose();
        } catch {
        }
        me = null;
      }
      if (qt) {
        try {
          qt.dispose();
        } catch {
        }
        qt = null;
      }
      t.innerHTML = "";
      const o = I.charAt(0).toUpperCase() + I.slice(1);
      me = new Fo({
        title: `Parameters \u2014 ${o}`,
        container: t
      });
      const n = Sn()[I];
      if (n) {
        const s = {};
        for (const i of n) s[i.key] = G[i.key].val;
        for (const i of n) me.addBinding(s, i.key, {
          min: G[i.key].min,
          max: G[i.key].max,
          step: G[i.key].step,
          label: G[i.key].label
        });
        const c = me.addFolder({
          title: "Rangos",
          expanded: false
        });
        for (const i of n) {
          const d = {
            min: G[i.key].min,
            max: G[i.key].max
          };
          c.addBinding(d, "min", {
            label: `${i.key} min`,
            step: i.step
          }), c.addBinding(d, "max", {
            label: `${i.key} max`,
            step: i.step
          }), c.on("change", () => {
            G[i.key] && (G[i.key].min = d.min, G[i.key].max = d.max, G[i.key].val < d.min && (G[i.key].val = d.min), G[i.key].val > d.max && (G[i.key].val = d.max)), Ft(), re();
          });
        }
        me.on("change", (i) => {
          var _a;
          const d = (_a = i.target) == null ? void 0 : _a.key;
          if (d && G[d]) {
            if (G[d].val = i.value, I === "edificio" && (d === "nVanosX" || d === "nVanosY" || d === "nPisos")) {
              if (d === "nVanosX" || d === "nVanosY") {
                const m = Math.round(G.nVanosX.val), p = Math.round(G.nVanosY.val);
                for (; oe.length < m; ) oe.push(oe[oe.length - 1] ?? k.defaultSpan);
                for (oe.length > m && (oe.length = m); ne.length < p; ) ne.push(ne[ne.length - 1] ?? k.defaultSpan * 0.8);
                ne.length > p && (ne.length = p);
              }
              Ft();
            }
            re();
          }
        });
      }
      if (I === "edificio") {
        if (Ht) {
          try {
            Ht.dispose();
          } catch {
          }
          Ht = null;
        }
        const s = document.getElementById("luces-panel");
        if (s) {
          s.innerHTML = "";
          const c = k;
          Ht = new Fo({
            title: `Luces (${c.length})`,
            container: s
          });
          const i = Ht.addFolder({
            title: "Luces X",
            expanded: true
          }), d = {};
          for (let a = 0; a < oe.length; a++) d[`svx_${a + 1}`] = oe[a];
          for (let a = 0; a < oe.length; a++) i.addBinding(d, `svx_${a + 1}`, {
            min: c.spanRange[0],
            max: c.spanRange[1],
            step: c.spanRange[2],
            label: `svx${a + 1}`
          });
          i.on("change", (a) => {
            var _a, _b;
            const y = (_b = (_a = a.target) == null ? void 0 : _a.key) == null ? void 0 : _b.match(/^svx_(\d+)$/);
            y && (oe[parseInt(y[1]) - 1] = a.value, re());
          });
          const m = Ht.addFolder({
            title: "Luces Y",
            expanded: true
          }), p = {};
          for (let a = 0; a < ne.length; a++) p[`svy_${a + 1}`] = ne[a];
          for (let a = 0; a < ne.length; a++) m.addBinding(p, `svy_${a + 1}`, {
            min: c.spanRange[0],
            max: c.spanRange[1],
            step: c.spanRange[2],
            label: `svy${a + 1}`
          });
          m.on("change", (a) => {
            var _a, _b;
            const y = (_b = (_a = a.target) == null ? void 0 : _a.key) == null ? void 0 : _b.match(/^svy_(\d+)$/);
            y && (ne[parseInt(y[1]) - 1] = a.value, re());
          });
        }
      }
      if (po(), me) {
        me.addBlade({
          view: "separator"
        });
        const s = Po()[I];
        if (s && s.length > 0) {
          const c = {};
          s.forEach((d, m) => {
            c[d.label] = m;
          });
          const i = {
            apoyo: le
          };
          me.addBinding(i, "apoyo", {
            label: "Apoyo",
            options: c
          }).on("change", (d) => {
            le = d.value, re();
          });
        }
        if (I === "placa-3q" || I === "placa-q4") {
          const c = {
            teoria: Ee
          };
          me.addBinding(c, "teoria", {
            label: "Teor\xEDa",
            options: {
              Membrana: 1,
              "Kirchhoff (delgada)": 2,
              "Mindlin (gruesa)": 3
            }
          }).on("change", (i) => {
            Ee = i.value, re();
          });
        }
      }
      const l = zn()[I];
      if (l && l.length > 0) {
        qt = new Fo({
          title: `Cargas Est\xE1ticas \u2014 ${o}`,
          container: t
        });
        const s = {};
        for (const i of l) s[i.key] = De[i.key].val;
        for (const i of l) qt.addBinding(s, i.key, {
          min: De[i.key].min,
          max: De[i.key].max,
          step: De[i.key].step,
          label: De[i.key].label
        });
        const c = qt.addFolder({
          title: "Rangos",
          expanded: false
        });
        for (const i of l) {
          const d = {
            min: De[i.key].min,
            max: De[i.key].max
          };
          c.addBinding(d, "min", {
            label: `${i.key} min`,
            step: i.step
          }), c.addBinding(d, "max", {
            label: `${i.key} max`,
            step: i.step
          }), c.on("change", () => {
            De[i.key] && (De[i.key].min = d.min, De[i.key].max = d.max, De[i.key].val < d.min && (De[i.key].val = d.min), De[i.key].val > d.max && (De[i.key].val = d.max)), Ft(), re();
          });
        }
        qt.on("change", (i) => {
          var _a;
          const d = (_a = i.target) == null ? void 0 : _a.key;
          if (d && De[d]) {
            if (De[d].val = i.value, e.nodeInputs) {
              const m = e.nodeInputs.val;
              m.supports && (e.nodeInputs.val = {
                supports: m.supports
              });
            }
            setTimeout(() => Uo(), 30);
          }
        });
      }
      window.__cad = {
        setParam: (s, c) => {
          if (G[s]) G[s].val = c, re(), Ft();
          else if (De[s]) {
            if (De[s].val = c, e.nodeInputs) {
              const i = e.nodeInputs.val;
              i.supports && (e.nodeInputs.val = {
                supports: i.supports
              });
            }
            setTimeout(() => {
              Uo(), Ft();
            }, 30);
          }
        },
        getParams: () => {
          const s = {};
          for (const c in G) s[c] = G[c].val;
          for (const c in De) s[c] = De[c].val;
          return s;
        },
        setGenerator: Ne
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
      if (qt) {
        try {
          qt.dispose();
        } catch {
        }
        qt = null;
      }
      if (ot) {
        try {
          ot.dispose();
        } catch {
        }
        ot = null;
      }
      if (Ht) {
        try {
          Ht.dispose();
        } catch {
        }
        Ht = null;
      }
      const t = document.getElementById("sections");
      t && t.remove();
      const o = document.getElementById("right-panels-wrapper"), n = document.getElementById("parameters");
      o && n && (n.style.cssText = "", document.body.appendChild(n), o.remove()), n && Be && (n.innerHTML = Be);
    }
    const de = document.createElement("div");
    de.id = "cad3d-panel";
    const Bn = document.createElement("style");
    Bn.textContent = `
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
  `, document.head.appendChild(Bn), Ks() === "light" && document.documentElement.classList.add("awatif-light"), Us((t) => {
      t === "light" ? document.documentElement.classList.add("awatif-light") : document.documentElement.classList.remove("awatif-light"), I && ft(true);
    }), de.innerHTML = `
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
        <button id="cad3d-import-e2k" title="Importar modelo ETABS (.e2k)">\u{1F4C2} Import E2K</button>
        <input type="file" id="cad3d-e2k-file" accept=".e2k,.E2K" style="display:none">
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
    let nt = null;
    function Ms() {
      var _a, _b, _c, _d, _e2, _f;
      const t = e.nodes.val, o = e.elements.val, n = (_a = e.nodeInputs) == null ? void 0 : _a.val, l = (_b = e.elementInputs) == null ? void 0 : _b.val, s = B, c = h, i = [];
      if (i.push("# Awatif FEM \u2014 Model Export"), i.push(`# Generator: ${I || "custom"}`), i.push(`# Units: ${c}, ${s}`), i.push(`# ${(/* @__PURE__ */ new Date()).toISOString()}`), i.push(""), i.push(`## NODES (${t.length})`), i.push("# idx     X          Y          Z"), t.forEach((p, a) => {
        i.push(`  ${String(a).padStart(4)}  ${p[0].toFixed(4).padStart(10)}  ${p[1].toFixed(4).padStart(10)}  ${p[2].toFixed(4).padStart(10)}`);
      }), i.push(""), i.push(`## ELEMENTS (${o.length})`), i.push("# idx    nodeI  nodeJ"), o.forEach((p, a) => {
        const u = p.map((y) => String(y).padStart(6)).join("");
        i.push(`  ${String(a).padStart(4)}  ${u}`);
      }), i.push(""), (n == null ? void 0 : n.supports) && n.supports.size > 0 && (i.push(`## SUPPORTS (${n.supports.size})`), i.push("# node   Ux  Uy  Uz  Rx  Ry  Rz"), n.supports.forEach((p, a) => {
        const u = p.map((y) => y ? "  1" : "  0").join("");
        i.push(`  ${String(a).padStart(4)} ${u}`);
      }), i.push("")), (n == null ? void 0 : n.loads) && n.loads.size > 0 && (i.push(`## LOADS (${n.loads.size})`), i.push("# node         Fx          Fy          Fz          Mx          My          Mz"), n.loads.forEach((p, a) => {
        const u = p.map((y) => y.toFixed(3).padStart(11)).join(" ");
        i.push(`  ${String(a).padStart(4)}  ${u}`);
      }), i.push("")), l) {
        i.push("## ELEMENT PROPERTIES");
        const p = [
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
        ], a = "# elem  " + p.map((u) => u.name.padStart(12)).join(" ");
        i.push(a);
        for (let u = 0; u < o.length; u++) {
          const y = p.map(($) => {
            var _a2;
            const g = (_a2 = $.map) == null ? void 0 : _a2.get(u);
            return g !== void 0 ? g.toExponential(4).padStart(12) : "           -";
          }).join(" ");
          i.push(`  ${String(u).padStart(4)}  ${y}`);
        }
        i.push("");
      }
      const d = (_d = (_c = e.deformOutputs) == null ? void 0 : _c.val) == null ? void 0 : _d.deformations;
      d && d.size > 0 && (i.push(`## DISPLACEMENTS (${d.size} nodes)`), i.push("# node          Ux           Uy           Uz           Rx           Ry           Rz"), d.forEach((p, a) => {
        const u = p.map((y) => y.toExponential(4).padStart(12)).join(" ");
        i.push(`  ${String(a).padStart(4)}  ${u}`);
      }), i.push(""));
      const m = (_f = (_e2 = e.deformOutputs) == null ? void 0 : _e2.val) == null ? void 0 : _f.reactions;
      if (m && m.size > 0 && (i.push(`## REACTIONS (${m.size} supports)`), i.push("# node          Rx           Ry           Rz           Mx           My           Mz"), m.forEach((p, a) => {
        const u = p.map((y) => y.toFixed(4).padStart(12)).join(" ");
        i.push(`  ${String(a).padStart(4)}  ${u}`);
      }), i.push("")), I) {
        i.push("## CLI COMMAND");
        const p = Object.entries(G).map(([a, u]) => `${a}=${u.val}`).join(" ");
        i.push(`cad.${I === "edificio" ? "building" : I}(${p})`);
      }
      return i.join(`
`);
    }
    let wo = false;
    function ks() {
      var _a, _b, _c, _d;
      if (nt) {
        nt.remove(), nt = null, wo = false;
        return;
      }
      const t = Ms();
      nt = document.createElement("div"), nt.id = "export-overlay", nt.style.cssText = `
      position:fixed; bottom:10px; right:10px; z-index:10000;
      width:720px; max-width:90vw;
      display:flex; flex-direction:column;
      font-family:monospace; color:var(--cad-text,#ccc);
      background:var(--cad-bg,#1a1a2e); border:1px solid var(--cad-border,#333);
      border-radius:8px; box-shadow:0 4px 20px rgba(0,0,0,0.5);
      transition: height 0.2s ease;
    `, nt.innerHTML = `
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
    `, document.body.appendChild(nt), (_a = nt.querySelector("#export-close")) == null ? void 0 : _a.addEventListener("click", () => {
        nt == null ? void 0 : nt.remove(), nt = null, wo = false;
      }), (_b = nt.querySelector("#export-minimize")) == null ? void 0 : _b.addEventListener("click", () => {
        const o = nt.querySelector("#export-body"), n = nt.querySelector("#export-minimize");
        wo = !wo, wo ? (o.style.display = "none", n.textContent = "\u25A2", n.title = "Restaurar", nt.style.width = "auto") : (o.style.display = "flex", n.textContent = "\u25AC", n.title = "Minimizar", nt.style.width = "720px");
      }), (_c = nt.querySelector("#export-copy")) == null ? void 0 : _c.addEventListener("click", () => {
        const o = nt.querySelector("#export-text");
        navigator.clipboard.writeText(o.value).then(() => {
          const n = nt.querySelector("#export-status");
          n.textContent = "\u2713 Copiado al clipboard", setTimeout(() => n.textContent = "", 2e3);
        });
      }), (_d = nt.querySelector("#export-json")) == null ? void 0 : _d.addEventListener("click", () => {
        var _a2, _b2, _c2, _d2, _e2, _f;
        const o = e.nodes.val, n = e.elements.val, l = (_a2 = e.nodeInputs) == null ? void 0 : _a2.val, s = (_b2 = e.elementInputs) == null ? void 0 : _b2.val, c = {
          generator: I || "custom",
          units: {
            force: h,
            length: B
          },
          nodes: o.map((a, u) => ({
            id: u,
            x: a[0],
            y: a[1],
            z: a[2]
          })),
          elements: n.map((a, u) => ({
            id: u,
            nodes: a
          }))
        };
        (l == null ? void 0 : l.supports) && (c.supports = [], l.supports.forEach((a, u) => c.supports.push({
          node: u,
          dofs: a
        }))), (l == null ? void 0 : l.loads) && (c.loads = [], l.loads.forEach((a, u) => c.loads.push({
          node: u,
          forces: a
        }))), s && (c.properties = {}, s.elasticities && (c.properties.E = Object.fromEntries(s.elasticities)), s.areas && (c.properties.A = Object.fromEntries(s.areas)), s.momentsOfInertiaZ && (c.properties.Iz = Object.fromEntries(s.momentsOfInertiaZ)), s.momentsOfInertiaY && (c.properties.Iy = Object.fromEntries(s.momentsOfInertiaY)), s.shearModuli && (c.properties.G = Object.fromEntries(s.shearModuli)), s.torsionalConstants && (c.properties.J = Object.fromEntries(s.torsionalConstants)));
        const i = (_d2 = (_c2 = e.deformOutputs) == null ? void 0 : _c2.val) == null ? void 0 : _d2.deformations;
        i && i.size > 0 && (c.displacements = {}, i.forEach((a, u) => c.displacements[u] = a));
        const d = (_f = (_e2 = e.deformOutputs) == null ? void 0 : _e2.val) == null ? void 0 : _f.reactions;
        d && d.size > 0 && (c.reactions = {}, d.forEach((a, u) => c.reactions[u] = a));
        const m = nt.querySelector("#export-text");
        m.value = JSON.stringify(c, null, 2);
        const p = nt.querySelector("#export-status");
        p.textContent = "Formato JSON activo \u2014 presiona Copy para copiar";
      });
    }
    function Oe() {
      var _a, _b, _c;
      const t = de.querySelector("#cad3d-info");
      if (t) {
        const o = e.nodes.val.length, n = e.elements.val, l = n.length, s = ((_c = (_b = (_a = e.nodeInputs) == null ? void 0 : _a.val) == null ? void 0 : _b.supports) == null ? void 0 : _c.size) || 0;
        let c = 0, i = 0, d = 0;
        for (const p of n) p.length === 2 ? c++ : p.length === 3 ? i++ : p.length === 4 && d++;
        let m = `${o}n ${l}e ${s}s`;
        (d > 0 || i > 0) && (m += ` | ${c}fr`, d > 0 && (m += ` ${d}q4`), i > 0 && (m += ` ${i}tri`)), t.textContent = m;
      }
    }
    function Xo() {
      var _a;
      if (!$e || !e.nodeInputs || !e.elementInputs) return;
      const t = e.nodes.val, o = e.elements.val, n = e.nodeInputs.val, l = e.elementInputs.val;
      if (!(t.length === 0 || o.length === 0) && !(!n.supports || n.supports.size === 0) && !(!l.densities || l.densities.size === 0)) try {
        const s = Math.min(12, t.length * 6 - n.supports.size * 6);
        if (s <= 0) return;
        const c = Gs(t, o, n, l, Math.min(s, 12));
        if (c.frequencies && c.frequencies.length > 0) {
          Fe = c, et = t.map((p) => [
            ...p
          ]), Pe = 0;
          const { extent: i } = Gt(), d = (_a = c.modeShapes) == null ? void 0 : _a[0];
          if (d) {
            let p = 0;
            for (let a = 0; a < t.length; a++) {
              const u = d[a * 6] || 0, y = d[a * 6 + 1] || 0, $ = d[a * 6 + 2] || 0;
              p = Math.max(p, Math.sqrt(u * u + y * y + $ * $));
            }
            pt = p > 1e-12 ? i * 0.05 / p : 1;
          }
          const m = `${I} \u2014 ${t.length}n ${o.length}e`;
          jt.render(c, {
            title: m
          }), jt.div.style.display = "", Mo(), console.log(`Modal: ${c.frequencies.length} modos. f\u2081 = ${c.frequencies[0].toFixed(4)} Hz`);
        }
      } catch (s) {
        console.warn("Modal analysis failed:", s.message), Fe = null;
      }
    }
    function Ko() {
      Ve && (cancelAnimationFrame(Ve), Ve = 0), et.length > 0 && (e.nodes.val = et.map((t) => [
        ...t
      ])), jt.div.style.display = "none", Fe = null;
    }
    function Mo() {
      var _a;
      if (Ve && cancelAnimationFrame(Ve), !(Fe == null ? void 0 : Fe.modeShapes) || !et.length) return;
      const t = Fe.modeShapes[Pe];
      if (!t) return;
      const o = ((_a = Fe.frequencies) == null ? void 0 : _a[Pe]) || 1, n = Math.max(0.5, Math.min(3, o * 0.1)), l = performance.now(), s = et.length, c = e.elements.rawVal, { extent: i } = Gt(), d = de.querySelector("#cad3d-modal-scale"), m = d && parseFloat(d.value) || 5;
      let p = 0;
      for (let z = 0; z < s; z++) {
        const N = t[z * 6] || 0, P = t[z * 6 + 1] || 0, b = t[z * 6 + 2] || 0;
        p = Math.max(p, Math.sqrt(N * N + P * P + b * b));
      }
      const a = p > 1e-12 ? i * m / 100 / p : 1, u = Je();
      if (!u) return;
      let y = null, $ = null, g = null;
      u.scene.traverse((z) => {
        var _a2, _b;
        !y && z.isPoints && z.geometry && (y = z), !$ && z.isLineSegments && z.geometry && !z.name && ($ = z), !g && z.isMesh && ((_a2 = z.material) == null ? void 0 : _a2.transparent) && ((_b = z.material) == null ? void 0 : _b.opacity) < 0.5 && z.geometry && (g = z);
      });
      const r = new Float32Array(s * 3), x = [];
      for (const z of c) if (z.length === 2) x.push([
        z[0],
        z[1]
      ]);
      else for (let N = 0; N < z.length; N++) x.push([
        z[N],
        z[(N + 1) % z.length]
      ]);
      const w = new Float32Array(x.length * 6);
      function E() {
        const z = (performance.now() - l) / 1e3, N = Math.sin(2 * Math.PI * n * z) * a;
        for (let P = 0; P < s; P++) {
          const b = et[P];
          r[P * 3] = b[0] + (t[P * 6] || 0) * N, r[P * 3 + 1] = b[1] + (t[P * 6 + 1] || 0) * N, r[P * 3 + 2] = b[2] + (t[P * 6 + 2] || 0) * N;
        }
        if (y) {
          const P = y.geometry, b = P.getAttribute("position");
          b && b.array.length === r.length ? (b.array.set(r), b.needsUpdate = true) : P.setAttribute("position", new ao(r.slice(), 3));
        }
        if ($) {
          for (let f = 0; f < x.length; f++) {
            const [v, M] = x[f];
            w[f * 6] = r[v * 3], w[f * 6 + 1] = r[v * 3 + 1], w[f * 6 + 2] = r[v * 3 + 2], w[f * 6 + 3] = r[M * 3], w[f * 6 + 4] = r[M * 3 + 1], w[f * 6 + 5] = r[M * 3 + 2];
          }
          const P = $.geometry, b = P.getAttribute("position");
          b && b.array.length === w.length ? (b.array.set(w), b.needsUpdate = true) : P.setAttribute("position", new ao(w.slice(), 3));
        }
        if (g) {
          const P = [];
          for (const b of c) if (b.length === 3) {
            const [f, v, M] = b;
            P.push(r[f * 3], r[f * 3 + 1], r[f * 3 + 2]), P.push(r[v * 3], r[v * 3 + 1], r[v * 3 + 2]), P.push(r[M * 3], r[M * 3 + 1], r[M * 3 + 2]);
          } else if (b.length === 4) {
            const [f, v, M, T] = b;
            P.push(r[f * 3], r[f * 3 + 1], r[f * 3 + 2]), P.push(r[v * 3], r[v * 3 + 1], r[v * 3 + 2]), P.push(r[M * 3], r[M * 3 + 1], r[M * 3 + 2]), P.push(r[f * 3], r[f * 3 + 1], r[f * 3 + 2]), P.push(r[M * 3], r[M * 3 + 1], r[M * 3 + 2]), P.push(r[T * 3], r[T * 3 + 1], r[T * 3 + 2]);
          }
          if (P.length > 0) {
            const b = g.geometry, f = new Float32Array(P), v = b.getAttribute("position");
            v && v.array.length === f.length ? (v.array.set(f), v.needsUpdate = true) : b.setAttribute("position", new ao(f, 3));
          }
        }
        u.render(), Ve = requestAnimationFrame(E);
      }
      Ve = requestAnimationFrame(E);
    }
    function Uo() {
      var _a, _b, _c, _d, _e2;
      if (!e.deformOutputs || !e.analyzeOutputs || !e.nodeInputs || !e.elementInputs) return;
      const t = e.nodes.val, o = e.elements.val;
      let n = e.nodeInputs.val;
      const l = e.elementInputs.val;
      if (t.length === 0 || o.length === 0 || !n.supports || n.supports.size === 0) return;
      if (!n.loads || n.loads.size === 0) {
        const g = R("CM") ?? 0, r = R("CV") ?? 0, x = g + r, w = R("Ex") ?? 0, E = R("Ey") ?? 0;
        if (x === 0 && w === 0 && E === 0) return;
        const z = /* @__PURE__ */ new Map(), N = [];
        for (let L = 0; L < t.length; L++) n.supports.has(L) || N.push(L);
        const P = (L) => Math.round(L * 1e3) / 1e3, b = /* @__PURE__ */ new Set();
        n.supports.forEach((L, C) => {
          b.add(`${P(t[C][0])},${P(t[C][1])}`);
        });
        const f = /* @__PURE__ */ new Set();
        for (const L of N) b.has(`${P(t[L][0])},${P(t[L][1])}`) && f.add(L);
        const v = /* @__PURE__ */ new Set(), M = /* @__PURE__ */ new Set();
        if (w !== 0 || E !== 0) {
          let L = -1 / 0, C = -1 / 0;
          for (const X of f) L = Math.max(L, P(t[X][0])), C = Math.max(C, P(t[X][1]));
          const A = /* @__PURE__ */ new Map();
          for (const X of f) {
            const U = P(t[X][2]);
            A.has(U) || A.set(U, []), A.get(U).push(X);
          }
          A.forEach((X) => {
            if (w !== 0) {
              const U = /* @__PURE__ */ new Set();
              for (const ee of X) if (P(t[ee][0]) === L) {
                const Y = P(t[ee][1]);
                U.has(Y) || (U.add(Y), v.add(ee));
              }
            }
            if (E !== 0) {
              const U = /* @__PURE__ */ new Set();
              for (const ee of X) if (P(t[ee][1]) === C) {
                const Y = P(t[ee][0]);
                U.has(Y) || (U.add(Y), M.add(ee));
              }
            }
          });
        }
        const T = 9.81, O = /* @__PURE__ */ new Map();
        for (let L = 0; L < o.length; L++) {
          const C = o[L], A = ((_a = l.densities) == null ? void 0 : _a.get(L)) ?? 0;
          if (!(Math.abs(A) < 1e-15)) {
            if (C.length === 2) {
              const X = ((_b = l.areas) == null ? void 0 : _b.get(L)) ?? 0, U = t[C[0]], ee = t[C[1]], Y = Math.sqrt((ee[0] - U[0]) ** 2 + (ee[1] - U[1]) ** 2 + (ee[2] - U[2]) ** 2), Z = -(A * X * Y * T) / 2;
              O.set(C[0], (O.get(C[0]) ?? 0) + Z), O.set(C[1], (O.get(C[1]) ?? 0) + Z);
            } else if (C.length >= 3) {
              const X = ((_c = l.thicknesses) == null ? void 0 : _c.get(L)) ?? 0;
              let U = 0;
              if (C.length === 3) {
                const [W, Z, ue] = C.map((qe) => t[qe]);
                U = 0.5 * Math.abs((Z[0] - W[0]) * (ue[1] - W[1]) - (ue[0] - W[0]) * (Z[1] - W[1]));
              } else if (C.length === 4) {
                const [W, Z, ue, qe] = C.map((Le) => t[Le]);
                if (U = 0.5 * Math.abs((Z[0] - W[0]) * (ue[1] - W[1]) - (ue[0] - W[0]) * (Z[1] - W[1])) + 0.5 * Math.abs((ue[0] - W[0]) * (qe[1] - W[1]) - (qe[0] - W[0]) * (ue[1] - W[1])), U < 1e-10) {
                  const Le = [
                    Z[0] - W[0],
                    Z[1] - W[1],
                    Z[2] - W[2]
                  ], Q = [
                    qe[0] - W[0],
                    qe[1] - W[1],
                    qe[2] - W[2]
                  ], ce = [
                    Le[1] * Q[2] - Le[2] * Q[1],
                    Le[2] * Q[0] - Le[0] * Q[2],
                    Le[0] * Q[1] - Le[1] * Q[0]
                  ];
                  U = Math.sqrt(ce[0] ** 2 + ce[1] ** 2 + ce[2] ** 2);
                }
              }
              const Y = -(A * X * U * T) / C.length;
              for (const W of C) O.set(W, (O.get(W) ?? 0) + Y);
            }
          }
        }
        const q = /* @__PURE__ */ new Set();
        for (const L of o) L.length === 2 && (q.add(L[0]), q.add(L[1]));
        for (const L of N) {
          const C = v.has(L) ? w : 0, A = M.has(L) ? E : 0, X = O.get(L) ?? 0, U = q.has(L) ? x : 0, ee = X + U;
          (C !== 0 || A !== 0 || Math.abs(ee) > 1e-10) && z.set(L, [
            C,
            A,
            ee,
            0,
            0,
            0
          ]);
        }
        n = {
          ...n,
          loads: z
        }, e.nodeInputs.val = n;
      }
      const s = performance.now();
      let c = 0, i = 0, d = 0;
      for (const g of o) g.length === 2 ? c++ : g.length === 3 ? d++ : g.length === 4 && i++;
      const m = ((_d = n.supports) == null ? void 0 : _d.size) || 0, p = ((_e2 = n.loads) == null ? void 0 : _e2.size) || 0, a = t.length * 6, u = a - m * 6, y = [], $ = (g) => y.push(g);
      $('<b style="color:var(--cad-heading)">FEM Solver</b>'), $(`<span style="color:var(--cad-info)">Modelo:</span> ${t.length} nodos, ${o.length} elem`), c && $(`&nbsp;&nbsp;Frames: <b>${c}</b>`), i && $(`&nbsp;&nbsp;Shell Q4: <b>${i}</b>`), d && $(`&nbsp;&nbsp;Triangulos: <b>${d}</b>`), $(`&nbsp;&nbsp;Apoyos: ${m} &nbsp;|&nbsp; Cargas: ${p}`), $(`<span style="color:var(--cad-info)">DOFs:</span> ${a} total, ~${u} libres`), $('<hr style="border-color:var(--cad-border);margin:4px 0">'), $(`<span style="color:#888">1.</span> Ensamblaje <b>K</b> global (${a}&times;${a})`), $("&nbsp;&nbsp;&nbsp;<i>K<sub>global</sub> = &Sigma; T<sup>T</sup> &middot; K<sub>local</sub> &middot; T</i>");
      try {
        const g = zt(t, o, n, l), r = performance.now() - s;
        if (g) {
          e.deformOutputs.val = g, $(`<span style="color:#888">2.</span> <b>K &middot; u = F</b> &rarr; SparseLU &rarr; <span style="color:#00cc88">${r.toFixed(0)} ms</span>`);
          let x = 0, w = -1, E = 0, z = 0;
          g.deformations && g.deformations.forEach((v, M) => {
            const T = Math.sqrt(v[0] * v[0] + v[1] * v[1] + v[2] * v[2]);
            T > x && (x = T, w = M, E = v[0], z = v[2]);
          }), $('<span style="color:#888">3.</span> Desplazamientos:'), $(`&nbsp;&nbsp;&nbsp;max|<b>u</b>| = <b style="color:var(--cad-heading)">${x.toExponential(3)}</b> m <span style="color:#666">(nodo ${w})</span>`), $(`&nbsp;&nbsp;&nbsp;u<sub>x</sub> = ${(E * 1e3).toFixed(4)} mm &nbsp;|&nbsp; u<sub>z</sub> = ${(z * 1e3).toFixed(4)} mm`);
          const N = performance.now(), P = ho(t, o, l, g), b = performance.now() - N;
          P && (e.analyzeOutputs.val = P, $(`<span style="color:#888">4.</span> Fuerzas internas: <span style="color:#00cc88">${b.toFixed(0)} ms</span>`), $("&nbsp;&nbsp;&nbsp;<i>F<sub>int</sub> = K<sub>local</sub> &middot; T &middot; u</i>"));
          const f = performance.now() - s;
          $('<hr style="border-color:var(--cad-border);margin:4px 0">'), $(`<b style="color:#00cc88">&#10004; Completado: ${f.toFixed(0)} ms</b>`);
        }
      } catch (g) {
        const r = performance.now() - s;
        $(`<b style="color:#ff4444">&#10008; Error (${r.toFixed(0)} ms): ${g.message}</b>`);
      }
      window.__femLog = y, console.log(`FEM Solver: ${t.length}n ${o.length}e \u2192 ${(performance.now() - s).toFixed(0)}ms`), $e && setTimeout(() => Xo(), 50);
    }
    function Zo(t, o) {
      const n = t * o, l = t * o * o * o / 12, s = o * t * t * t / 12, c = Math.min(t, o), i = Math.max(t, o), d = c * c * c * i * (1 / 3 - 0.21 * c / i * (1 - c * c * c * c / (12 * i * i * i * i)));
      return {
        A: n,
        Iz: l,
        Iy: s,
        J: d
      };
    }
    function Dn(t) {
      const o = t / 2, n = Math.PI * o * o, l = Math.PI * o * o * o * o / 4, s = Math.PI * o * o * o * o / 2;
      return {
        A: n,
        Iz: l,
        Iy: l,
        J: s
      };
    }
    function Qo(t, o, n, l) {
      const s = o - 2 * n, c = 2 * t * n + s * l, i = (t * o * o * o - (t - l) * s * s * s) / 12, d = (2 * n * t * t * t + s * l * l * l) / 12, m = (2 * t * n * n * n + s * l * l * l) / 3;
      return {
        A: c,
        Iz: i,
        Iy: d,
        J: m
      };
    }
    function en(t, o, n) {
      const l = t - 2 * n, s = o - 2 * n, c = t * o - l * s, i = (t * o * o * o - l * s * s * s) / 12, d = (o * t * t * t - s * l * l * l) / 12, m = (t - n) * (o - n), p = 2 * ((t - n) / n + (o - n) / n), a = 4 * m * m / (p > 0 ? p : 1);
      return {
        A: c,
        Iz: i,
        Iy: d,
        J: a
      };
    }
    function Ss(t, o, n, l, s, c, i) {
      const m = 4700 * Math.sqrt(c / 1e3) * 1e3 / l, p = t - 2 * n, a = o - 2 * n, u = t * o - p * a, y = (t * o * o * o - p * a * a * a) / 12, $ = (o * t * t * t - a * p * p * p) / 12, g = p * a, r = p * a * a * a / 12, x = a * p * p * p / 12, w = u + m * g, E = y + m * r, z = $ + m * x, N = l / (2 * (1 + s)), P = (t - n) * (o - n), b = 2 * ((t - n) / n + (o - n) / n), f = 4 * P * P / (b > 0 ? b : 1);
      return {
        A: w,
        Iz: E,
        Iy: z,
        J: f,
        Es: l,
        Gs: N,
        A_steel: u,
        A_conc: g
      };
    }
    function Yt() {
      if (!e.elementInputs) return;
      const t = e.elements.val, o = k, n = {
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
      if ((I === "edificio" || I === "frame") && ye.size > 0) {
        const { colMat: s, vigaMat: c, colShape: i, fc: d, perFloor: m } = H, p = 4700 * Math.sqrt(d / 1e3) * 1e3, a = p / (2 * 1.2), u = 24 / 9.80665, y = o.E, $ = o.G, g = o.rho;
        for (let r = 0; r < t.length; r++) {
          if (Ae.has(r)) {
            const v = 4700 * Math.sqrt(d / 1e3) * 1e3, M = 0.2;
            n.elasticities.set(r, v), n.poissonsRatios.set(r, M), n.thicknesses.set(r, xt), n.shearModuli.set(r, v / (2 * (1 + M))), n.densities.set(r, 24 / 9.80665);
            continue;
          }
          if (ke.has(r)) {
            const v = 4700 * Math.sqrt(d / 1e3) * 1e3, M = 0.2;
            n.elasticities.set(r, v), n.poissonsRatios.set(r, M), n.thicknesses.set(r, $t), n.shearModuli.set(r, v / (2 * (1 + M))), n.densities.set(r, 24 / 9.80665);
            continue;
          }
          const x = ye.has(r), w = Re.get(r) ?? 0, E = m[w] ?? m[0] ?? {
            bCol: 0.4,
            hCol: 0.4,
            dCol: 0.4
          };
          let z, N, P, b;
          if (x) if (s === 0) N = p, P = a, b = u, z = i === 1 ? Dn(E.dCol) : Zo(E.bCol, E.hCol), n.sectionShapes.set(r, i === 1 ? {
            type: "circ",
            d: E.dCol
          } : {
            type: "rect",
            b: E.bCol,
            h: E.hCol
          });
          else if (s === 1) {
            N = y, P = $, b = g;
            const v = H.steelColType;
            if (v <= 1) {
              const M = eo[E.colProfileIdx] ?? eo[0];
              z = {
                A: M.A,
                Iz: M.Iz,
                Iy: M.Iy,
                J: M.J
              }, n.sectionShapes.set(r, {
                type: "I",
                b: M.bf,
                h: M.d,
                name: M.name
              });
            } else if (v === 2) {
              const M = E.colBf ?? 0.3, T = E.colHf ?? 0.3, O = E.colTf ?? 0.02, q = E.colTw ?? 0.012;
              z = Qo(M, T, O, q);
              const L = `I${(T * 100).toFixed(0)}x${(M * 100).toFixed(0)}`;
              n.sectionShapes.set(r, {
                type: "I",
                b: M,
                h: T,
                tf: O,
                tw: q,
                name: L
              });
            } else {
              const M = E.colBc ?? 0.3, T = E.colHc ?? 0.3, O = E.colT ?? 0.01;
              z = en(M, T, O);
              const q = `\u25A1${(T * 100).toFixed(0)}x${(M * 100).toFixed(0)}x${(O * 1e3).toFixed(0)}`;
              n.sectionShapes.set(r, {
                type: "HSS",
                b: M,
                h: T,
                tw: O,
                name: q
              });
            }
          } else {
            const v = E.colBc ?? 0.3, M = E.colHc ?? 0.3, T = E.colT ?? 0.01, O = E.colFc ?? 28e3, q = E.colEs ?? 2e8, L = E.colNuS ?? 0.3;
            E.colNuC;
            const C = Ss(v, M, T, q, L, O);
            z = {
              A: C.A,
              Iz: C.Iz,
              Iy: C.Iy,
              J: C.J
            }, N = C.Es, P = C.Gs;
            const A = 7.85, X = 24 / 9.80665;
            b = (A * C.A_steel + X * C.A_conc) / (C.A_steel + C.A_conc);
            const U = `CFT ${(M * 1e3).toFixed(0)}X${(v * 1e3).toFixed(0)}X${(T * 1e3).toFixed(0)}`;
            n.sectionShapes.set(r, {
              type: "CFT",
              b: v,
              h: M,
              tw: T,
              name: U
            });
          }
          else {
            const v = tt.get(r), M = v ? v.dir === "x" ? E.vigasX : E.vigasY : [], T = v ? M[v.bay] ?? M[0] ?? te() : te();
            if (c === 0) N = p, P = a, b = u, z = Zo(T.b, T.h), n.sectionShapes.set(r, {
              type: "rect",
              b: T.b,
              h: T.h
            });
            else {
              N = y, P = $, b = g;
              const O = H.steelVigaType;
              if (O <= 1) {
                const q = eo[T.profileIdx ?? 0] ?? eo[0];
                z = {
                  A: q.A,
                  Iz: q.Iz,
                  Iy: q.Iy,
                  J: q.J
                }, n.sectionShapes.set(r, {
                  type: "I",
                  b: q.bf,
                  h: q.d,
                  name: q.name
                });
              } else if (O === 2) {
                const q = T.bf ?? 0.2, L = T.hf ?? 0.4, C = T.tf ?? 0.015, A = T.tw ?? 0.01;
                z = Qo(q, L, C, A);
                const X = `I${(L * 100).toFixed(0)}x${(q * 100).toFixed(0)}`;
                n.sectionShapes.set(r, {
                  type: "I",
                  b: q,
                  h: L,
                  tf: C,
                  tw: A,
                  name: X
                });
              } else {
                const q = T.bc ?? 0.2, L = T.hc ?? 0.3, C = T.t ?? 8e-3;
                z = en(q, L, C);
                const A = `\u25A1${(L * 100).toFixed(0)}x${(q * 100).toFixed(0)}x${(C * 1e3).toFixed(0)}`;
                n.sectionShapes.set(r, {
                  type: "HSS",
                  b: q,
                  h: L,
                  tw: C,
                  name: A
                });
              }
            }
          }
          const f = he.get(r);
          if (f) {
            if ((f.material ?? 1) === 0 ? (N = p, P = a, b = u) : (N = y, P = $, b = g), f.secType === "rect" && f.b && f.h) z = Zo(f.b, f.h), n.sectionShapes.set(r, {
              type: "rect",
              b: f.b,
              h: f.h
            });
            else if (f.secType === "circ" && f.b) z = Dn(f.b), n.sectionShapes.set(r, {
              type: "circ",
              d: f.b
            });
            else if ((f.secType === "W" || f.secType === "HSS") && f.profileIdx !== void 0) {
              const M = eo[f.profileIdx] ?? eo[0];
              z = {
                A: M.A,
                Iz: M.Iz,
                Iy: M.Iy,
                J: M.J
              }, n.sectionShapes.set(r, {
                type: "I",
                b: M.bf,
                h: M.d,
                name: M.name
              });
            } else if (f.secType === "I-param" && f.bf && f.hf && f.tf && f.tw) {
              z = Qo(f.bf, f.hf, f.tf, f.tw);
              const M = `I${(f.hf * 100).toFixed(0)}x${(f.bf * 100).toFixed(0)}`;
              n.sectionShapes.set(r, {
                type: "I",
                b: f.bf,
                h: f.hf,
                tf: f.tf,
                tw: f.tw,
                name: M
              });
            } else if (f.secType === "tubular" && f.bc && f.hc && f.t) {
              z = en(f.bc, f.hc, f.t);
              const M = `\u25A1${(f.hc * 100).toFixed(0)}x${(f.bc * 100).toFixed(0)}x${(f.t * 1e3).toFixed(0)}`;
              n.sectionShapes.set(r, {
                type: "HSS",
                b: f.bc,
                h: f.hc,
                tw: f.t,
                name: M
              });
            }
          }
          n.elasticities.set(r, N), n.shearModuli.set(r, P), n.areas.set(r, z.A), n.momentsOfInertiaZ.set(r, z.Iy), n.momentsOfInertiaY.set(r, z.Iz), n.torsionalConstants.set(r, z.J), n.densities.set(r, b);
        }
      } else for (let s = 0; s < t.length; s++) n.elasticities.set(s, o.E), n.shearModuli.set(s, o.G), n.areas.set(s, o.A), n.momentsOfInertiaZ.set(s, o.Iy), n.momentsOfInertiaY.set(s, o.Iz), n.torsionalConstants.set(s, o.J), n.densities.set(s, o.rho);
      e.elementInputs.val = n;
    }
    function jn(t) {
      de.querySelectorAll("[data-ex]").forEach((o) => {
        o.classList.toggle("active", o.dataset.ex === t);
      });
    }
    setTimeout(() => {
      var _a, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l, _m, _n2, _o2, _p;
      (_a = de.querySelector("#cad3d-toggle")) == null ? void 0 : _a.addEventListener("click", (a) => {
        a.stopPropagation(), de.classList.add("collapsed");
      }), (_b = de.querySelector("#cad3d-expand")) == null ? void 0 : _b.addEventListener("click", (a) => {
        a.stopPropagation(), de.classList.remove("collapsed");
      }), de.querySelectorAll("[data-ex]").forEach((a) => {
        a.addEventListener("click", (u) => {
          u.stopPropagation();
          const y = a.dataset.ex;
          jn(y), _e.example(y);
        });
      }), de.querySelectorAll("[data-view]").forEach((a) => {
        a.addEventListener("click", (u) => {
          u.stopPropagation();
          const y = a.dataset.view;
          Vt(y), de.querySelectorAll("[data-view]").forEach(($) => $.classList.remove("view-active")), a.classList.add("view-active");
        });
      }), (_c = de.querySelector("#cad3d-btn-clear")) == null ? void 0 : _c.addEventListener("click", (a) => {
        a.stopPropagation(), I = "", xs.val = false, ws(), _e.clear();
      }), (_d = de.querySelector("#cad3d-select")) == null ? void 0 : _d.addEventListener("click", (a) => {
        var _a2;
        a.stopPropagation(), Et && (Et = false, no()), Ct && qo(), ht = !ht, (_a2 = de.querySelector("#cad3d-select")) == null ? void 0 : _a2.classList.toggle("inspect-active", ht);
        const y = Je();
        y && (y.controls.enabled = !ht), ht || To();
      }), (_e2 = de.querySelector("#cad3d-draw")) == null ? void 0 : _e2.addEventListener("click", (a) => {
        var _a2;
        a.stopPropagation(), Et && (Et = false, no()), ht && To(), Ct = !Ct, (_a2 = de.querySelector("#cad3d-draw")) == null ? void 0 : _a2.classList.toggle("inspect-active", Ct), Ct ? Ts() : qo();
      }), (_f = de.querySelector("#cad3d-inspect")) == null ? void 0 : _f.addEventListener("click", (a) => {
        var _a2;
        a.stopPropagation(), ht && To(), Ct && qo(), Et = !Et, (_a2 = de.querySelector("#cad3d-inspect")) == null ? void 0 : _a2.classList.toggle("inspect-active", Et), Et || no();
      }), (_g = de.querySelector("#cad3d-export")) == null ? void 0 : _g.addEventListener("click", (a) => {
        a.stopPropagation(), ks();
      }), (_h = de.querySelector("#cad3d-import-e2k")) == null ? void 0 : _h.addEventListener("click", (a) => {
        var _a2;
        a.stopPropagation(), (_a2 = de.querySelector("#cad3d-e2k-file")) == null ? void 0 : _a2.click();
      }), (_i = de.querySelector("#cad3d-e2k-file")) == null ? void 0 : _i.addEventListener("change", (a) => {
        var _a2;
        const u = (_a2 = a.target.files) == null ? void 0 : _a2[0];
        if (!u) return;
        const y = new FileReader();
        y.onload = () => {
          const $ = y.result;
          try {
            const g = Sa($);
            e.nodes.val = g.nodes, e.elements.val = g.elements, e.nodeInputs.val = g.nodeInputs, e.elementInputs.val = g.elementInputs, e.deformOutputs.val = {}, e.analyzeOutputs.val = {};
            const r = de.querySelector("#cad3d-info");
            r && (r.innerHTML = `<span style="color:#0f0">E2K imported: ${g.info.nNodes}n ${g.info.nFrames}e</span>`);
            const x = de.querySelector("h1");
            if (x) {
              const w = x.querySelector("span:first-child") || x;
              w.textContent = "FEM Studio";
              const E = x.querySelector("span:nth-child(2)");
              E && (E.textContent = `${g.info.nNodes}n ${g.info.nFrames}e`);
            }
            console.log(`E2K imported: ${g.info.nNodes} nodes, ${g.info.nFrames} frames, ${g.materials.size} materials, ${g.frameSections.size} sections`);
          } catch (g) {
            alert("Error parsing E2K: " + g.message), console.error(g);
          }
        }, y.readAsText(u);
      });
      const t = de.querySelector("#cad3d-force-unit");
      t && (t.value = h, t.addEventListener("change", (a) => {
        a.stopPropagation(), h = t.value, k = io(h, B), I && Ne(I);
      }));
      const o = de.querySelector("#cad3d-length-unit");
      o && (o.value = B, o.addEventListener("change", (a) => {
        a.stopPropagation(), B = o.value, k = io(h, B), I && Ne(I);
      })), de.querySelectorAll("[data-preset]").forEach((a) => {
        a.addEventListener("click", (u) => {
          u.stopPropagation();
          const y = a.dataset.preset, $ = we[y];
          $ && (h = $.force, B = $.length, J = $.stress, k = io(h, B), t && (t.value = h), o && (o.value = B), de.querySelectorAll("[data-preset]").forEach((g) => {
            g.classList.toggle("active", g.dataset.preset === y);
          }), I && Ne(I), console.log(`Preset: ${y} \u2192 ${h}+${B}, stress: ${J.label}`));
        });
      }), (_j = de.querySelector("#cad3d-log")) == null ? void 0 : _j.addEventListener("click", (a) => {
        a.stopPropagation(), Ns();
      }), (_k = de.querySelector("#cad3d-pushover")) == null ? void 0 : _k.addEventListener("click", (a) => {
        a.stopPropagation(), Os();
      }), (_l = de.querySelector("#cad3d-nonlinear")) == null ? void 0 : _l.addEventListener("click", (a) => {
        a.stopPropagation(), Bs();
      }), (_m = de.querySelector("#cad3d-fem-solver")) == null ? void 0 : _m.addEventListener("click", (a) => {
        a.stopPropagation(), js();
      }), (_n2 = de.querySelector("#cad3d-modal")) == null ? void 0 : _n2.addEventListener("click", (a) => {
        var _a2, _b2;
        a.stopPropagation(), $e = !$e, (_a2 = de.querySelector("#cad3d-modal")) == null ? void 0 : _a2.classList.toggle("active", $e);
        const y = de.querySelector("#cad3d-mode-prev"), $ = de.querySelector("#cad3d-mode-next"), g = de.querySelector("#cad3d-mode-label"), r = de.querySelector("#cad3d-modal-scale");
        if ($e) {
          const x = Je();
          ((_b2 = x == null ? void 0 : x.settings) == null ? void 0 : _b2.loads) && (it = x.settings.loads.rawVal, x.settings.loads.val = false), Xo(), y.style.display = "", $.style.display = "", g.style.display = "", r && (r.style.display = ""), n();
        } else Ko(), y.style.display = "none", $.style.display = "none", g.style.display = "none", r && (r.style.display = "none"), I && I !== "placa-q4" && I !== "placa-3q" && re(), setTimeout(() => {
          var _a3;
          const x = Je();
          ((_a3 = x == null ? void 0 : x.settings) == null ? void 0 : _a3.loads) && it && (x.settings.loads.val = true);
        }, 600);
      });
      function n() {
        var _a2;
        const a = de.querySelector("#cad3d-mode-label");
        if (!a || !(Fe == null ? void 0 : Fe.frequencies)) return;
        const u = Fe.frequencies[Pe], y = u > 0 ? 1 / u : 0, $ = [
          0,
          0,
          0,
          0,
          0,
          0
        ];
        for (let g = 0; g <= Pe; g++) {
          const r = (_a2 = Fe.massParticipation) == null ? void 0 : _a2[g];
          if (r) for (let x = 0; x < 6; x++) $[x] += r[x];
        }
        a.textContent = `Modo ${Pe + 1} \u2014 ${u.toFixed(2)} Hz \u2014 T=${y.toFixed(3)}s \u2014 \u03A3Ux=${($[0] * 100).toFixed(1)}% \u03A3Uy=${($[1] * 100).toFixed(1)}% \u03A3Rz=${($[5] * 100).toFixed(1)}%`;
      }
      (_o2 = de.querySelector("#cad3d-mode-prev")) == null ? void 0 : _o2.addEventListener("click", (a) => {
        if (a.stopPropagation(), !(Fe == null ? void 0 : Fe.modeShapes)) return;
        Pe = (Pe - 1 + Fe.modeShapes.length) % Fe.modeShapes.length;
        const u = Fe.modeShapes[Pe], { extent: y } = Gt();
        let $ = 0;
        for (let g = 0; g < et.length; g++) {
          const r = u[g * 6] || 0, x = u[g * 6 + 1] || 0, w = u[g * 6 + 2] || 0;
          $ = Math.max($, Math.sqrt(r * r + x * x + w * w));
        }
        pt = $ > 1e-12 ? y * 0.05 / $ : 1, Mo(), n();
      }), (_p = de.querySelector("#cad3d-mode-next")) == null ? void 0 : _p.addEventListener("click", (a) => {
        if (a.stopPropagation(), !(Fe == null ? void 0 : Fe.modeShapes)) return;
        Pe = (Pe + 1) % Fe.modeShapes.length;
        const u = Fe.modeShapes[Pe], { extent: y } = Gt();
        let $ = 0;
        for (let g = 0; g < et.length; g++) {
          const r = u[g * 6] || 0, x = u[g * 6 + 1] || 0, w = u[g * 6 + 2] || 0;
          $ = Math.max($, Math.sqrt(r * r + x * x + w * w));
        }
        pt = $ > 1e-12 ? y * 0.05 / $ : 1, Mo(), n();
      });
      const l = de.querySelector("#cad3d-modal-scale");
      l == null ? void 0 : l.addEventListener("mousedown", (a) => a.stopPropagation()), l == null ? void 0 : l.addEventListener("change", () => {
        $e && (Fe == null ? void 0 : Fe.modeShapes) && Mo();
      });
      const s = de.querySelector("#cad3d-cmd");
      s == null ? void 0 : s.addEventListener("mousedown", (a) => a.stopPropagation()), document.addEventListener("keydown", (a) => {
        var _a2;
        if ((a.ctrlKey || a.metaKey) && a.key === "z" && !a.shiftKey) {
          a.preventDefault(), Gn();
          return;
        }
        if ((a.ctrlKey || a.metaKey) && (a.key === "y" || a.key === "z" && a.shiftKey)) {
          a.preventDefault(), Vn();
          return;
        }
        if ((a.key === "Delete" || a.key === "Backspace") && Ye.size > 0) {
          a.preventDefault(), Ye.forEach((u) => ae.add(u)), Ye.clear(), At && (At.remove(), At = null), re();
          return;
        }
        if (a.key === "Escape") {
          if (Ct) if (Xe !== null) {
            Xe = null;
            const u = Je();
            ut && u && (u.scene.remove(ut), ut.geometry.dispose(), ut.material.dispose(), ut = null), mt && u && (u.scene.remove(mt), mt.geometry.dispose(), mt.material.dispose(), mt = null), u == null ? void 0 : u.render();
          } else qo();
          ht && To(), Et && (Et = false, no(), (_a2 = de.querySelector("#cad3d-inspect")) == null ? void 0 : _a2.classList.remove("inspect-active"));
        }
      }), s == null ? void 0 : s.addEventListener("keydown", (a) => {
        if (a.key === "Enter") {
          const u = s.value.trim();
          if (u) {
            try {
              const y = new Function("cad", `return ${u}`)(_e);
              y !== void 0 && console.log(y);
            } catch (y) {
              console.error(y.message);
            }
            s.value = "";
          }
        }
      });
      let c = false, i = 0, d = 0, m = 0, p = 0;
      de.addEventListener("mousedown", (a) => {
        const u = a.target.tagName;
        if (u === "BUTTON" || u === "INPUT" || u === "SELECT") return;
        c = true;
        const y = de.getBoundingClientRect();
        de.style.bottom = "unset", i = a.clientX, d = a.clientY, m = y.left, p = y.top, a.preventDefault();
      }), window.addEventListener("mousemove", (a) => {
        c && (a.preventDefault(), de.style.left = m + (a.clientX - i) + "px", de.style.top = p + (a.clientY - d) + "px");
      }), window.addEventListener("mouseup", () => {
        c = false;
      }), Oe();
    }, 10);
    function Je() {
      const t = document.getElementById("viewer");
      return t ? t.__ctx : null;
    }
    function Gt() {
      const t = e.nodes.val;
      if (t.length === 0) return {
        center: new ve(),
        extent: 10
      };
      let o = 1 / 0, n = 1 / 0, l = 1 / 0, s = -1 / 0, c = -1 / 0, i = -1 / 0;
      for (const [p, a, u] of t) p < o && (o = p), p > s && (s = p), a < n && (n = a), a > c && (c = a), u < l && (l = u), u > i && (i = u);
      const d = new ve((o + s) / 2, (n + c) / 2, (l + i) / 2), m = Math.max(s - o, c - n, i - l, 1);
      return {
        center: d,
        extent: m
      };
    }
    function ft(t = false) {
      const o = Je();
      if (!o) return;
      const { extent: n } = Gt();
      let l;
      n <= 5 ? l = Math.max(1, Math.ceil(n * 1.5)) : n <= 50 ? l = Math.max(5, Math.ceil(n * 1.3 / 5) * 5) : l = Math.max(20, Math.ceil(n * 1.3 / 10) * 10), o.settings.gridSize.val = l, o.scene.children.filter((u) => u.type === "GridHelper").forEach((u) => {
        var _a, _b;
        (_a = u.geometry) == null ? void 0 : _a.dispose(), (_b = u.material) == null ? void 0 : _b.dispose(), o.scene.remove(u);
      });
      const c = Xs(), i = new sa(l, 20, c.grid, c.grid);
      i.rotation.x = Math.PI / 2, i.position.set(0.5 * l, 0.5 * l, 0), o.scene.add(i), o.scene.children.filter((u) => u.type === "Group" && u.name !== "gridAxes" && u.name !== "loadsGroup" && (u.name === "viewerAxes" || u.children.some((y) => y instanceof Co))).forEach((u) => {
        u.traverse((y) => {
          y.geometry && y.geometry.dispose(), y.material && (y.material.map && y.material.map.dispose(), y.material.dispose());
        }), o.scene.remove(u);
      });
      const m = 0.05 * l, p = new us();
      p.name = "viewerAxes";
      const a = c.axisArrow;
      p.add(new Co(new ve(1, 0, 0), new ve(), 1, a, 0.2, 0.2)), p.add(new Co(new ve(0, 1, 0), new ve(), 1, a, 0.2, 0.2)), p.add(new Co(new ve(0, 0, 1), new ve(), 1, a, 0.2, 0.2)), p.children.forEach((u) => u.scale.set(m, m, m));
      for (const [u, y, $] of [
        [
          "X",
          "red",
          [
            1.3 * m,
            0,
            0
          ]
        ],
        [
          "Y",
          "green",
          [
            0,
            1.3 * m,
            0
          ]
        ],
        [
          "Z",
          "blue",
          [
            0,
            0,
            1.3 * m
          ]
        ]
      ]) {
        const g = document.createElement("canvas");
        g.width = 64, g.height = 64;
        const r = g.getContext("2d");
        r.fillStyle = y, r.font = "bold 50px Arial", r.textAlign = "center", r.textBaseline = "middle", r.fillText(u, 32, 34);
        const x = new ms(g);
        x.needsUpdate = true;
        const w = new bn(new gn({
          map: x,
          depthTest: false,
          transparent: true
        }));
        w.position.set($[0], $[1], $[2]), w.scale.set(0.4 * m, 0.4 * m, 1), w.renderOrder = 99, p.add(w);
      }
      o.scene.add(p), t ? o.render() : Vt("3d");
    }
    function Wn(t, o, n) {
      if (t.length < 2) return n * 10;
      let l = 1 / 0;
      return o > 0 && (l = Math.min(l, Math.abs(t[o] - t[o - 1]))), o < t.length - 1 && (l = Math.min(l, Math.abs(t[o + 1] - t[o]))), l * 0.45 || n * 0.1;
    }
    function Vt(t) {
      var _a;
      const o = Je();
      if (!o) return;
      const { center: n, extent: l } = Gt(), s = o.renderer.domElement.clientWidth / (o.renderer.domElement.clientHeight || 1), c = l * 0.7;
      o.controls.maxDistance = l * 5, o.controls.minDistance = l * 0.05, o.renderer.clippingPlanes = [];
      const i = () => {
        o.scene.traverse((d) => {
          var _a2;
          if (!d.material) return;
          const m = d.type === "GridHelper" || d.type === "AxesHelper", p = d.isSprite, a = ((_a2 = d.userData) == null ? void 0 : _a2.noClip) === true;
          (m || p || a) && (Array.isArray(d.material) ? d.material.forEach((u) => {
            u.clippingPlanes = [];
          }) : d.material.clippingPlanes = []);
        });
      };
      if (t === "3d") {
        const d = o.perspCamera.fov, m = l / (2 * Math.tan(d * Math.PI / 360)) * 2.2;
        o.perspCamera.position.set(n.x + m * 0.5, n.y - m * 0.8, n.z + m * 0.5), o.controls.target.copy(n), o.setActiveCamera(o.perspCamera);
      } else {
        const d = o.orthoCamera;
        d.left = -c * s, d.right = c * s, d.top = c, d.bottom = -c, d.near = -l * 10, d.far = l * 10, d.updateProjectionMatrix();
        const m = (p, a, u) => {
          d.position.copy(p), d.up.copy(u), o.controls.target.copy(a), d.lookAt(a), o.controls.update();
        };
        if (t === "plan") o.renderer.clippingPlanes = [], m(new ve(n.x, n.y, n.z + l * 2), new ve(n.x, n.y, n.z), new ve(0, 1, 0));
        else if (t.startsWith("plan:")) {
          const p = parseInt(t.split(":")[1]), a = ((_a = G.hPiso) == null ? void 0 : _a.val) ?? 3, u = (p + 1) * a, y = a * 0.45;
          o.renderer.clippingPlanes = [
            new Qt(new ve(0, 0, -1), u + y),
            new Qt(new ve(0, 0, 1), -u + y)
          ], i(), m(new ve(n.x, n.y, u + l * 2), new ve(n.x, n.y, u), new ve(0, 1, 0));
        } else if (t === "elevX") d.position.set(n.x + l * 2, n.y, n.z), d.up.set(0, 0, 1);
        else if (t === "elevY") d.position.set(n.x, n.y - l * 2, n.z), d.up.set(0, 0, 1);
        else if (t.startsWith("axisX:")) {
          const p = parseInt(t.split(":")[1]), a = Wt[p] ?? n.x;
          if (Jt.length > 1) {
            const y = Wn(Wt, p, l);
            o.renderer.clippingPlanes = [
              new Qt(new ve(-1, 0, 0), a + y),
              new Qt(new ve(1, 0, 0), -a + y)
            ], i(), d.position.set(n.x + l * 2, n.y, n.z), o.controls.target.set(n.x, n.y, n.z);
          } else d.position.set(n.x, n.y - l * 2, n.z), o.controls.target.copy(n);
          d.up.set(0, 0, 1);
        } else if (t.startsWith("axisY:")) {
          const p = parseInt(t.split(":")[1]), a = Jt[p] ?? n.y;
          if (Wt.length > 1) {
            const y = Wn(Jt, p, l);
            o.renderer.clippingPlanes = [
              new Qt(new ve(0, -1, 0), a + y),
              new Qt(new ve(0, 1, 0), -a + y)
            ], i(), d.position.set(n.x, n.y - l * 2, n.z), o.controls.target.set(n.x, n.y, n.z);
          } else d.position.set(n.x + l * 2, n.y, n.z), o.controls.target.copy(n);
          d.up.set(0, 0, 1);
        }
        !t.startsWith("axisX:") && !t.startsWith("axisY:") && o.controls.target.copy(n), o.setActiveCamera(d);
      }
    }
    function Jn() {
      const t = de.querySelector("#cad3d-axis-buttons");
      if (!t) return;
      if (Wt.length < 2 && Jt.length < 2) {
        t.style.display = "none";
        return;
      }
      t.style.display = "", t.innerHTML = "";
      const o = (c, i, d) => {
        const m = document.createElement("button");
        return m.textContent = c, m.dataset.view = i, m.title = d, m.style.cssText = "min-width:22px;padding:1px 5px;font-weight:bold", m.addEventListener("click", (p) => {
          var _a;
          p.stopPropagation();
          const a = m.classList.contains("view-active");
          de.querySelectorAll("[data-view]").forEach((u) => u.classList.remove("view-active")), a ? (Vt("3d"), (_a = de.querySelector('[data-view="3d"]')) == null ? void 0 : _a.classList.add("view-active")) : (Vt(i), m.classList.add("view-active"));
        }), m;
      }, n = document.createElement("span");
      n.textContent = "Ejes:", n.style.cssText = "color:#888;font-size:10px;margin-right:2px;align-self:center", t.appendChild(n);
      const l = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      Wt.forEach((c, i) => {
        const d = i < l.length ? l[i] : `X${i}`;
        t.appendChild(o(d, `axisX:${i}`, `Eje ${d} \u2014 elevaci\xF3n mirando en Y`));
      });
      const s = document.createElement("span");
      s.textContent = "|", s.style.cssText = "color:#555;margin:0 3px;align-self:center;font-weight:bold", t.appendChild(s), Jt.forEach((c, i) => {
        const d = `${i + 1}`;
        t.appendChild(o(d, `axisY:${i}`, `Eje ${d} \u2014 elevaci\xF3n mirando en X`));
      });
    }
    function Yn() {
      var _a;
      const t = de.querySelector("#cad3d-floor-buttons");
      if (!t) return;
      const o = Math.round(((_a = G.nPisos) == null ? void 0 : _a.val) ?? 0);
      if (o < 1) {
        t.style.display = "none";
        return;
      }
      t.style.display = "", t.innerHTML = "";
      const n = (s, c, i) => {
        const d = document.createElement("button");
        return d.textContent = s, d.dataset.view = c, d.title = i, d.style.cssText = "min-width:22px;padding:1px 5px;font-weight:bold", d.addEventListener("click", (m) => {
          var _a2;
          m.stopPropagation();
          const p = d.classList.contains("view-active");
          de.querySelectorAll("[data-view]").forEach((a) => a.classList.remove("view-active")), p ? (Vt("3d"), (_a2 = de.querySelector('[data-view="3d"]')) == null ? void 0 : _a2.classList.add("view-active")) : (Vt(c), d.classList.add("view-active"));
        }), d;
      }, l = document.createElement("span");
      l.textContent = "Planta:", l.style.cssText = "color:#888;font-size:10px;margin-right:2px;align-self:center", t.appendChild(l);
      for (let s = 0; s < o; s++) t.appendChild(n(`P${s + 1}`, `plan:${s}`, `Planta Piso ${s + 1}`));
    }
    function zs() {
      Vt("3d"), de.querySelectorAll("[data-view]").forEach((t) => t.classList.toggle("view-active", t.dataset.view === "3d"));
    }
    _e.view = (t) => {
      t = {
        planta: "plan",
        elevationX: "elevX",
        elevationY: "elevY",
        corte: "section"
      }[t] || t, Vt(t), de.querySelectorAll("[data-view]").forEach((n) => n.classList.toggle("view-active", n.dataset.view === t));
    };
    let Et = false, ht = false, Ct = false, gt = "line", wt = [], Xe = null, ut = null, mt = null, fo = null, kt = null;
    const Qe = {
      node: true,
      grid: true,
      midpoint: true,
      track: true
    }, tn = 0.5;
    let on = [], St = null, oo = null;
    const uo = [], Lo = [], Es = 50;
    function mo() {
      uo.push({
        nodes: JSON.parse(JSON.stringify(e.nodes.val)),
        elements: JSON.parse(JSON.stringify(e.elements.val))
      }), uo.length > Es && uo.shift(), Lo.length = 0;
    }
    function Gn() {
      if (uo.length === 0) return;
      Lo.push({
        nodes: JSON.parse(JSON.stringify(e.nodes.val)),
        elements: JSON.parse(JSON.stringify(e.elements.val))
      });
      const t = uo.pop();
      e.nodes.val = t.nodes, e.elements.val = t.elements, Yt(), e.elementInputs.val = {
        ...e.elementInputs.val
      };
    }
    function Vn() {
      if (Lo.length === 0) return;
      uo.push({
        nodes: JSON.parse(JSON.stringify(e.nodes.val)),
        elements: JSON.parse(JSON.stringify(e.elements.val))
      });
      const t = Lo.pop();
      e.nodes.val = t.nodes, e.elements.val = t.elements, Yt(), e.elementInputs.val = {
        ...e.elementInputs.val
      };
    }
    const Ye = /* @__PURE__ */ new Set();
    let vt = null, Xt = [], Pt = null, At = null;
    function nn(t) {
      const o = Je();
      if (!o) return;
      const n = e.nodes.val, l = e.elements.val[t];
      if (!l) return;
      const s = [];
      for (let d = 0; d < l.length; d++) {
        const m = n[l[d]], p = n[l[(d + 1) % l.length]];
        s.push(m[0], m[1], m[2], p[0], p[1], p[2]);
      }
      const c = new so();
      c.setAttribute("position", new ao(s, 3));
      const i = new So(c, new zo({
        color: 16711935,
        linewidth: 3,
        depthTest: false
      }));
      i.renderOrder = 9998, i.__elemIdx = t, o.scene.add(i), Xt.push(i), o.render();
    }
    function Kt() {
      const t = Je();
      Xt.forEach((o) => {
        t == null ? void 0 : t.scene.remove(o), o.geometry.dispose(), o.material.dispose();
      }), Xt = [], t == null ? void 0 : t.render();
    }
    function Ut() {
      At && At.remove();
      const t = V.size > 0 || D;
      if (Ye.size === 0 && !t) {
        At = null;
        return;
      }
      const o = document.createElement("div");
      o.style.cssText = "position:fixed;bottom:20px;left:50%;transform:translateX(-50%);background:var(--cad-bg);color:var(--cad-text);border:2px solid var(--cad-heading);border-radius:8px;padding:10px 16px;z-index:10000;font-family:monospace;font-size:13px;display:flex;gap:12px;align-items:center;box-shadow:0 4px 20px var(--cad-shadow);", o.innerHTML = `
      <span style="color:var(--cad-heading);font-weight:bold;">${Ye.size} elem.</span>
      <button id="sel-assign" style="padding:5px 8px;background:#336699;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:12px;" title="Asignar secci\xF3n">\u{1F4D0}</button>
      <button id="sel-info" style="padding:5px 8px;background:#225588;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:12px;" title="Info del elemento">\u{1F50D}</button>
      <button id="sel-hide" style="padding:5px 8px;background:#665500;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:12px;" title="Ocultar seleccionados">\u{1F441}\u200D\u{1F5E8}</button>
      <button id="sel-isolate" style="padding:5px 8px;background:#006633;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:12px;" title="Aislar (mostrar solo seleccionados)">\u25CE</button>
      <button id="sel-showall" style="padding:5px 8px;background:#444;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:12px;" title="Mostrar todo">\u21BA</button>
      <button id="sel-delete" style="padding:5px 8px;background:#cc3333;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:12px;" title="Eliminar seleccionados">\u{1F5D1}</button>
      <button id="sel-clear" style="padding:5px 8px;background:#555;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:12px;" title="Limpiar selecci\xF3n">\u2715</button>
    `, document.body.appendChild(o), At = o, o.querySelector("#sel-assign").addEventListener("click", () => {
        Ws([
          ...Ye
        ]);
      }), o.querySelector("#sel-info").addEventListener("click", () => {
        if (Ye.size === 1) {
          const n = [
            ...Ye
          ][0];
          ts(n);
        } else {
          const n = [
            ...Ye
          ], l = e.nodes.val, s = e.elements.val;
          let c = 0, i = 0, d = 0, m = 0;
          n.forEach((a) => {
            const u = s[a];
            if (u) if (u.length === 2) {
              const y = l[u[0]], $ = l[u[1]], g = Math.abs($[0] - y[0]), r = Math.abs($[1] - y[1]), x = Math.abs($[2] - y[2]);
              x > g && x > r ? c++ : i++;
            } else u.length === 3 ? d++ : u.length === 4 && m++;
          });
          const p = [];
          c && p.push(`${c} columnas`), i && p.push(`${i} vigas`), m && p.push(`${m} shells Q4`), d && p.push(`${d} triangulos`), alert(`${n.length} elementos seleccionados:
${p.join(", ")}`);
        }
      }), o.querySelector("#sel-hide").addEventListener("click", () => {
        Ye.forEach((n) => V.add(n)), Ye.clear(), Kt(), Ut(), re();
      }), o.querySelector("#sel-isolate").addEventListener("click", () => {
        D = true, pe.clear(), Ye.forEach((n) => pe.add(n)), Ye.clear(), Kt(), Ut(), re();
      }), o.querySelector("#sel-showall").addEventListener("click", () => {
        V.clear(), D = false, pe.clear(), Ut(), re();
      }), o.querySelector("#sel-delete").addEventListener("click", () => {
        mo(), Ye.forEach((n) => ae.add(n)), Ye.clear(), Kt(), Ut(), re();
      }), o.querySelector("#sel-clear").addEventListener("click", () => {
        Ye.clear(), Kt(), Ut();
      });
    }
    function To() {
      var _a;
      ht = false, Ye.clear(), Kt(), At && (At.remove(), At = null), (_a = de.querySelector("#cad3d-select")) == null ? void 0 : _a.classList.remove("inspect-active");
      const o = Je();
      o && (o.controls.enabled = true);
    }
    function no() {
      if (vt) {
        const t = Je();
        t == null ? void 0 : t.scene.remove(vt), vt.geometry.dispose(), vt.material.dispose(), vt = null, t == null ? void 0 : t.render();
      }
      Pt && (Pt.remove(), Pt = null);
    }
    function Is(t) {
      sn();
      const o = Je();
      if (!o) return;
      const n = e.nodes.val[t];
      if (!n) return;
      oo = t;
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
      for (const [c, i] of s) {
        const d = new Float32Array([
          n[0] - c[0] * l,
          n[1] - c[1] * l,
          n[2] - c[2] * l,
          n[0] + c[0] * l,
          n[1] + c[1] * l,
          n[2] + c[2] * l
        ]), m = new so();
        m.setAttribute("position", new Zs(d, 3));
        const p = new fs({
          color: i,
          dashSize: 0.3,
          gapSize: 0.15,
          transparent: true,
          opacity: 0.4,
          depthTest: false
        }), a = new So(m, p);
        a.computeLineDistances(), a.renderOrder = 9990, o.scene.add(a), on.push(a);
      }
      o.render();
    }
    function sn() {
      const t = Je();
      for (const o of on) t == null ? void 0 : t.scene.remove(o), o.geometry.dispose(), o.material.dispose();
      on = [], oo = null, St && (St.remove(), St = null);
    }
    function Xn(t, o, n, l) {
      St || (St = document.createElement("div"), St.style.cssText = "position:fixed;pointer-events:none;z-index:10002;background:var(--cad-bg);color:var(--cad-heading);font-family:monospace;font-size:11px;padding:2px 6px;border-radius:3px;white-space:nowrap;border:1px solid var(--cad-border);", document.body.appendChild(St));
      const s = l.x - n.x, c = l.y - n.y, i = l.z - n.z, d = Math.sqrt(s * s + c * c + i * i), m = Math.abs(s), p = Math.abs(c), a = Math.abs(i);
      let u = "";
      m > p && m > a ? u = `\u0394X=${s.toFixed(2)}` : p > m && p > a ? u = `\u0394Y=${c.toFixed(2)}` : a > 0.01 && (u = `\u0394Z=${i.toFixed(2)}`), St.textContent = `${d.toFixed(3)} m  ${u}`, St.style.left = t + 20 + "px", St.style.top = o - 10 + "px";
    }
    function Ls(t, o) {
      const l = e.nodes.val[o];
      if (!l) return null;
      const s = new ve(l[0], l[1], l[2]), c = t.clone(), i = c.clone().sub(s), d = 0.3, m = Math.abs(i.x), p = Math.abs(i.y), a = Math.abs(i.z);
      return p < d && a < d && m > 0.01 ? new ve(c.x, s.y, s.z) : m < d && a < d && p > 0.01 ? new ve(s.x, c.y, s.z) : m < d && p < d && a > 0.01 ? new ve(s.x, s.y, c.z) : null;
    }
    function qo() {
      var _a;
      const t = Je();
      ut && t && (t.scene.remove(ut), ut.geometry.dispose(), ut.material.dispose(), ut = null), mt && t && (t.scene.remove(mt), mt.geometry.dispose(), mt.material.dispose(), mt = null), sn(), Xe = null, kt = null, Ct = false, fo && (fo.remove(), fo = null), (_a = de.querySelector("#cad3d-draw")) == null ? void 0 : _a.classList.remove("inspect-active"), t == null ? void 0 : t.render();
    }
    function Ts() {
      fo && fo.remove();
      const t = document.createElement("div");
      t.style.cssText = "position:fixed;bottom:60px;left:50%;transform:translateX(-50%);background:var(--cad-bg);border:1px solid var(--cad-border);border-radius:6px;padding:6px 10px;z-index:10000;display:flex;gap:6px;align-items:center;font-family:monospace;font-size:11px;box-shadow:0 2px 10px var(--cad-shadow);";
      const o = (s) => `padding:4px 10px;border:1px solid ${s ? "#00ccff" : "#555"};background:${s ? "#003355" : "#333"};color:${s ? "#00ccff" : "#ccc"};border-radius:3px;cursor:pointer;font-size:11px;font-family:monospace;`, n = (s) => `padding:3px 6px;border:1px solid ${s ? "#33ff33" : "#444"};background:${s ? "#113311" : "#222"};color:${s ? "#33ff33" : "#888"};border-radius:3px;cursor:pointer;font-size:10px;`;
      t.innerHTML = `
      <span style="color:#00ccff;font-weight:bold;margin-right:4px;">Draw:</span>
      <button id="dt-line" style="${o(gt === "line")}">\u{1F4CF} Line</button>
      <button id="dt-arc" style="${o(gt === "arc")}">\u2312 Arc</button>
      <button id="dt-node" style="${o(gt === "node")}">\u2295 Node</button>
      <button id="dt-area" style="${o(gt === "area")}">\u25A2 Area</button>
      <span style="color:#666;margin:0 4px;">|</span>
      <span style="color:#888;font-size:10px;">Snap:</span>
      <button id="ds-node" style="${n(Qe.node)}">Node</button>
      <button id="ds-grid" style="${n(Qe.grid)}">Grid</button>
      <button id="ds-mid" style="${n(Qe.midpoint)}">Mid</button>
      <button id="ds-track" style="${n(Qe.track)}">Prolong</button>
      <span style="color:#666;margin:0 4px;">|</span>
      <span style="color:#888;font-size:10px;">Grid:</span>
      <input id="ds-gridsize" type="number" value="${tn}" step="0.1" min="0.1" max="10" style="width:45px;background:#333;color:#fff;border:1px solid #555;padding:2px;font-size:10px;">
      <span style="color:#888;font-size:10px;">m</span>
      <span style="color:#666;margin:0 4px;">|</span>
      <button id="dt-undo" style="padding:3px 6px;background:#444;color:#ccc;border:1px solid #555;border-radius:3px;cursor:pointer;font-size:10px;" title="Ctrl+Z">\u21A9 Undo</button>
      <button id="dt-redo" style="padding:3px 6px;background:#444;color:#ccc;border:1px solid #555;border-radius:3px;cursor:pointer;font-size:10px;" title="Ctrl+Y">\u21AA Redo</button>
    `, document.body.appendChild(t), fo = t;
      const l = () => {
        const s = t.querySelector("#dt-line"), c = t.querySelector("#dt-arc"), i = t.querySelector("#dt-node"), d = t.querySelector("#dt-area");
        s && (s.style.cssText = o(gt === "line")), c && (c.style.cssText = o(gt === "arc")), i && (i.style.cssText = o(gt === "node")), d && (d.style.cssText = o(gt === "area"));
        const m = t.querySelector("#ds-node"), p = t.querySelector("#ds-grid"), a = t.querySelector("#ds-mid"), u = t.querySelector("#ds-track");
        m && (m.style.cssText = n(Qe.node)), p && (p.style.cssText = n(Qe.grid)), a && (a.style.cssText = n(Qe.midpoint)), u && (u.style.cssText = n(Qe.track));
      };
      t.querySelector("#dt-line").addEventListener("click", () => {
        gt = "line", Xe = null, kt = null, wt = [], l();
      }), t.querySelector("#dt-arc").addEventListener("click", () => {
        gt = "arc", Xe = null, kt = null, wt = [], l();
      }), t.querySelector("#dt-node").addEventListener("click", () => {
        gt = "node", Xe = null, kt = null, wt = [], l();
      }), t.querySelector("#dt-area").addEventListener("click", () => {
        gt = "area", Xe = null, kt = null, wt = [], console.log("Area mode: click vertices del poligono. Doble-click o click cerca del 1er punto para cerrar."), l();
      }), t.querySelector("#ds-node").addEventListener("click", () => {
        Qe.node = !Qe.node, l();
      }), t.querySelector("#ds-grid").addEventListener("click", () => {
        Qe.grid = !Qe.grid, l();
      }), t.querySelector("#ds-mid").addEventListener("click", () => {
        Qe.midpoint = !Qe.midpoint, l();
      }), t.querySelector("#ds-track").addEventListener("click", () => {
        Qe.track = !Qe.track, Qe.track || sn(), l();
      }), t.querySelector("#ds-gridsize").addEventListener("change", (s) => {
        Qe.gridSize = parseFloat(s.target.value) || 0.5;
      }), t.querySelector("#dt-undo").addEventListener("click", () => Gn()), t.querySelector("#dt-redo").addEventListener("click", () => Vn());
    }
    function Kn(t, o, n, l) {
      const s = l.getBoundingClientRect(), c = (t - s.left) / s.width * 2 - 1, i = -((o - s.top) / s.height) * 2 + 1, d = new ds();
      d.setFromCamera(new ps(c, i), n);
      const m = e.nodes.val, p = e.elements.val, a = 0.12;
      if (Qe.node) {
        let $ = -1, g = 1 / 0;
        for (let r = 0; r < m.length; r++) {
          const x = m[r], w = new ve(x[0], x[1], x[2]).project(n), E = Math.sqrt((w.x - c) ** 2 + (w.y - i) ** 2);
          E < a && E < g && (g = E, $ = r);
        }
        if ($ >= 0) return {
          nodeIdx: $,
          worldPos: new ve(...m[$]),
          snapType: "node"
        };
      }
      if (Qe.midpoint) {
        let $ = 1 / 0, g = null;
        for (const r of p) {
          if (r.length !== 2) continue;
          const x = m[r[0]], w = m[r[1]], E = new ve((x[0] + w[0]) / 2, (x[1] + w[1]) / 2, (x[2] + w[2]) / 2), z = E.clone().project(n), N = Math.sqrt((z.x - c) ** 2 + (z.y - i) ** 2);
          N < a * 0.8 && N < $ && ($ = N, g = E);
        }
        if (g) return {
          nodeIdx: null,
          worldPos: g,
          snapType: "mid"
        };
      }
      if (Qe.grid) {
        const $ = new Qt(new ve(0, 0, 1), 0), g = new ve();
        if (d.ray.intersectPlane($, g)) {
          const r = Qe.gridSize || tn;
          return g.x = Math.round(g.x / r) * r, g.y = Math.round(g.y / r) * r, g.z = Math.round(g.z / r) * r, {
            nodeIdx: null,
            worldPos: g,
            snapType: "grid"
          };
        }
      }
      const u = new Qt(new ve(0, 0, 1), 0), y = new ve();
      return d.ray.intersectPlane(u, y), {
        nodeIdx: null,
        worldPos: y,
        snapType: "free"
      };
    }
    function Un(t) {
      const o = Je();
      if (!o) return;
      const n = e.nodes.val;
      if (mt && (o.scene.remove(mt), mt.geometry.dispose(), mt.material.dispose(), mt = null), t.worldPos) {
        const l = t.snapType === "node" ? 16776960 : t.snapType === "mid" ? 16711935 : t.snapType === "grid" ? 65535 : 8947848, s = t.snapType === "node" ? 0.08 : 0.06, c = t.snapType === "mid" ? new Qs(s * 2, s * 2, s * 2) : new ea(s, 12, 12), i = new ta({
          color: l,
          transparent: true,
          opacity: 0.8,
          depthTest: false
        });
        mt = new oa(c, i), mt.position.copy(t.worldPos), mt.renderOrder = 9999, o.scene.add(mt);
      }
      if (ut && (o.scene.remove(ut), ut.geometry.dispose(), ut.material.dispose(), ut = null), Xe !== null && t.worldPos) {
        const l = n[Xe], s = new so();
        if (gt === "arc" && kt !== null) {
          const i = n[kt], d = Zn(new ve(l[0], l[1], l[2]), new ve(i[0], i[1], i[2]), t.worldPos, 16), m = [];
          for (let p = 0; p < d.length - 1; p++) m.push(d[p].x, d[p].y, d[p].z, d[p + 1].x, d[p + 1].y, d[p + 1].z);
          s.setAttribute("position", new ao(m, 3));
        } else s.setAttribute("position", new ao([
          l[0],
          l[1],
          l[2],
          t.worldPos.x,
          t.worldPos.y,
          t.worldPos.z
        ], 3));
        const c = new zo({
          color: 65280,
          linewidth: 2,
          depthTest: false
        });
        ut = new mn(s, c), gt === "arc" && kt !== null && (ut = new So(s, c)), ut.renderOrder = 9999, o.scene.add(ut);
      }
      o.render();
    }
    function Zn(t, o, n, l) {
      const s = [];
      for (let c = 0; c <= l; c++) {
        const i = c / l, d = o.clone().multiplyScalar(2).sub(t.clone().multiplyScalar(0.5)).sub(n.clone().multiplyScalar(0.5)), m = (1 - i) * (1 - i), p = 2 * (1 - i) * i, a = i * i;
        s.push(new ve(m * t.x + p * d.x + a * n.x, m * t.y + p * d.y + a * n.y, m * t.z + p * d.z + a * n.z));
      }
      return s;
    }
    function an(t) {
      if (t.nodeIdx !== null) return t.nodeIdx;
      if (!t.worldPos) return -1;
      const o = e.nodes.val, n = 1e-3;
      for (let s = 0; s < o.length; s++) if (Math.abs(o[s][0] - t.worldPos.x) < n && Math.abs(o[s][1] - t.worldPos.y) < n && Math.abs(o[s][2] - t.worldPos.z) < n) return s;
      mo();
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
    function qs(t) {
      var _a;
      if (gt === "node") {
        if (!t.worldPos) return;
        mo();
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
      if (gt === "line") {
        const o = an(t);
        if (o < 0) return;
        if (Xe === null) {
          Xe = o;
          return;
        }
        if (o === Xe) return;
        mo();
        const n = [
          ...e.elements.val
        ];
        n.some((s) => s.length === 2 && (s[0] === Xe && s[1] === o || s[1] === Xe && s[0] === o)) || (n.push([
          Xe,
          o
        ]), e.elements.val = n, Yt(), e.elementInputs.val = {
          ...e.elementInputs.val
        }), Xe = o;
        return;
      }
      if (gt === "arc") {
        const o = an(t);
        if (o < 0) return;
        if (Xe === null) {
          Xe = o;
          return;
        }
        if (kt === null) {
          if (o === Xe) return;
          kt = o;
          return;
        }
        if (o === Xe || o === kt) return;
        const n = e.nodes.val, l = new ve(...n[Xe]), s = new ve(...n[kt]), c = new ve(...n[o]), i = Math.max(4, Math.round(((_a = G.nSubViga) == null ? void 0 : _a.val) ?? 8)), d = Zn(l, s, c, i);
        mo();
        const m = [
          ...e.nodes.val
        ], p = [
          ...e.elements.val
        ];
        let a = Xe;
        for (let u = 1; u < d.length; u++) {
          let y;
          if (u === d.length - 1) y = o;
          else {
            const $ = d[u];
            y = m.length, m.push([
              $.x,
              $.y,
              $.z
            ]);
          }
          p.push([
            a,
            y
          ]), a = y;
        }
        e.nodes.val = m, e.elements.val = p, Yt(), e.elementInputs.val = {
          ...e.elementInputs.val
        }, Xe = o, kt = null;
        return;
      }
      if (gt === "area") {
        const o = an(t);
        if (o < 0) return;
        if (wt.length >= 3 && o === wt[0]) {
          mo();
          const n = [
            ...e.nodes.val
          ], l = [
            ...e.elements.val
          ], s = wt.map((c) => n[c]);
          try {
            const c = Rt({
              points: s,
              polygon: Array.from({
                length: s.length
              }, (d, m) => m),
              maxMeshSize: tn || 0.5
            }), i = [];
            for (const d of c.nodes) {
              let m = -1;
              for (let p = 0; p < n.length; p++) {
                const a = Math.abs(n[p][0] - d[0]), u = Math.abs(n[p][1] - d[1]), y = Math.abs(n[p][2] - d[2]);
                if (a < 0.01 && u < 0.01 && y < 0.01) {
                  m = p;
                  break;
                }
              }
              m >= 0 ? i.push(m) : (i.push(n.length), n.push([
                d[0],
                d[1],
                d[2]
              ]));
            }
            for (const d of c.elements) l.push([
              i[d[0]],
              i[d[1]],
              i[d[2]]
            ]);
            e.nodes.val = n, e.elements.val = l, Yt(), console.log(`Area: ${c.elements.length} triangulos creados desde ${wt.length} vertices`);
          } catch (c) {
            console.error("Area mesh failed:", c.message);
          }
          wt = [];
          return;
        }
        if (wt.push(o), console.log(`Area vertex ${wt.length}: node ${o}`), wt.length >= 2) {
          const n = wt[wt.length - 2], l = e.nodes.val, s = Je();
          if (s) {
            const c = new so().setFromPoints([
              new ve(...l[n]),
              new ve(...l[o])
            ]), i = new So(c, new zo({
              color: 65280,
              linewidth: 2
            }));
            i.name = "area-preview", s.scene.add(i), s.render();
          }
        }
        return;
      }
    }
    function Qn(t) {
      const o = Je();
      if (!o) return;
      vt && (o.scene.remove(vt), vt.geometry.dispose(), vt.material.dispose());
      const n = e.nodes.val, l = e.elements.val[t];
      if (!l) return;
      const s = [];
      for (let i = 0; i < l.length; i++) {
        const d = n[l[i]], m = n[l[(i + 1) % l.length]];
        s.push(d[0], d[1], d[2], m[0], m[1], m[2]);
      }
      const c = new so();
      c.setAttribute("position", new ao(s, 3)), vt = new So(c, new zo({
        color: 16776960,
        linewidth: 3,
        depthTest: false
      })), vt.renderOrder = 9999, o.scene.add(vt), o.render();
    }
    function ln(t) {
      const o = Je();
      if (!o) return -1;
      const n = o.renderer.domElement.getBoundingClientRect(), l = new ps((t.clientX - n.left) / n.width * 2 - 1, -((t.clientY - n.top) / n.height) * 2 + 1), s = new ds();
      s.setFromCamera(l, o.controls.object), s.params.Line = {
        threshold: 0.5
      };
      const c = e.nodes.val, i = e.elements.val;
      if (c.length === 0 || i.length === 0) return -1;
      let d = 1 / 0, m = -1;
      const p = s.ray;
      for (let u = 0; u < i.length; u++) {
        const y = i[u];
        if (y.length === 2) {
          const $ = new ve(...c[y[0]]), g = new ve(...c[y[1]]), r = new na($, g), x = new ve(), w = new ve();
          p.closestPointToPoint(r.getCenter(new ve()), x), r.closestPointToPoint(x, true, w);
          const E = x.distanceTo(w);
          E < d && (d = E, m = u);
        } else if (y.length === 3) {
          const $ = new ve(...c[y[0]]), g = new ve(...c[y[1]]), r = new ve(...c[y[2]]), x = new ve();
          if (p.intersectTriangle($, g, r, false, x)) {
            const E = p.origin.distanceTo(x);
            E < d && (d = E, m = u);
          } else {
            const E = $.add(g).add(r).divideScalar(3), z = new ve();
            p.closestPointToPoint(E, z);
            const N = z.distanceTo(E);
            N < d && (d = N, m = u);
          }
        } else if (y.length === 4) {
          const $ = new ve(...c[y[0]]), g = new ve(...c[y[1]]), r = new ve(...c[y[2]]), x = new ve(...c[y[3]]), w = new ve();
          let E = p.intersectTriangle($, g, r, false, w);
          if (E) {
            const z = p.origin.distanceTo(w);
            z < d && (d = z, m = u);
          }
          if (E = p.intersectTriangle($, r, x, false, w), E) {
            const z = p.origin.distanceTo(w);
            z < d && (d = z, m = u);
          }
        }
      }
      const { extent: a } = Gt();
      return d < a * 0.1 ? m : -1;
    }
    function j(t, o = 4) {
      return Math.abs(t) < 1e-10 ? "0" : Math.abs(t) >= 1e6 ? t.toExponential(2) : Math.abs(t) >= 100 ? t.toFixed(1) : t.toFixed(o);
    }
    function rn(t, o, n = 12) {
      var _a;
      const l = Math.min(t.length, n), s = Math.min(((_a = t[0]) == null ? void 0 : _a.length) || 0, n);
      let c = "<table>";
      if (o) {
        c += '<tr><td class="header"></td>';
        for (let i = 0; i < s; i++) c += `<td class="header">${o[i] || i}</td>`;
        c += "</tr>";
      }
      for (let i = 0; i < l; i++) {
        c += "<tr>", o && (c += `<td class="header">${o[i] || i}</td>`);
        for (let d = 0; d < s; d++) {
          const m = t[i][d], p = Math.abs(m) > 1e-10 ? "nonzero" : "";
          c += `<td class="${p}">${j(m, 2)}</td>`;
        }
        c += "</tr>";
      }
      return c += "</table>", c;
    }
    function fe(t, o) {
      return `<span class="frac"><span class="frac-num">${t}</span><span class="frac-den">${o}</span></span>`;
    }
    function F(t, o, n) {
      let l = `<span class="var">${t}</span>`;
      return o && (l += `<sub>${o}</sub>`), l;
    }
    function Fs(t, o, n, l, s, c, i) {
      const d = `${fe(F("E") + "\xB7" + F("A"), F("L"))}`, m = `${fe("12\xB7" + F("E") + "\xB7" + F("I", "z"), F("L") + "\xB3")}`, p = `${fe("12\xB7" + F("E") + "\xB7" + F("I", "y"), F("L") + "\xB3")}`, a = `${fe(F("G") + "\xB7" + F("J"), F("L"))}`, u = `${fe("4\xB7" + F("E") + "\xB7" + F("I", "y"), F("L"))}`, y = `${fe("4\xB7" + F("E") + "\xB7" + F("I", "z"), F("L"))}`;
      return `<div class="fem-eq eq-box">
      <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">Coeficientes de rigidez:</strong></div>
      <div>${d} = ${fe(j(t) + "\xB7" + j(o), j(i))} = <span class="highlight">${j(t * o / i)}</span></div>
      <div>${m} = ${fe("12\xB7" + j(t) + "\xB7" + j(n), j(i) + "\xB3")} = <span class="highlight">${j(12 * t * n / i ** 3)}</span></div>
      <div>${p} = ${fe("12\xB7" + j(t) + "\xB7" + j(l), j(i) + "\xB3")} = <span class="highlight">${j(12 * t * l / i ** 3)}</span></div>
      <div>${a} = ${fe(j(s) + "\xB7" + j(c), j(i))} = <span class="highlight">${j(s * c / i)}</span></div>
      <div>${u} = ${fe("4\xB7" + j(t) + "\xB7" + j(l), j(i))} = <span class="highlight">${j(4 * t * l / i)}</span></div>
      <div>${y} = ${fe("4\xB7" + j(t) + "\xB7" + j(n), j(i))} = <span class="highlight">${j(4 * t * n / i)}</span></div>
    </div>
    <div class="fem-eq">
      ${F("k", "local")} = <span class="mat-sym" style="grid-template-columns:repeat(4,auto)">
        <span class="cell">${fe(F("EA"), F("L"))}</span><span class="cell">0</span><span class="cell dots">\u22EF</span><span class="cell">${fe("\u2212" + F("EA"), F("L"))}</span>
        <span class="cell">0</span><span class="cell">${fe("12" + F("EI", "z"), F("L") + "\xB3")}</span><span class="cell dots">\u22EF</span><span class="cell">0</span>
        <span class="cell dots">\u22EE</span><span class="cell dots">\u22EE</span><span class="cell dots">\u22F1</span><span class="cell dots">\u22EE</span>
        <span class="cell">${fe("\u2212" + F("EA"), F("L"))}</span><span class="cell">0</span><span class="cell dots">\u22EF</span><span class="cell">${fe(F("EA"), F("L"))}</span>
      </span>
      <sub style="color:var(--fem-label)">12\xD712</sub>
    </div>`;
    }
    function Cs(t) {
      if (t.length === 2) {
        const n = Bt(t[1], t[0]), l = ro(n), s = n[0] / l, c = n[1] / l, i = n[2] / l;
        return `<div class="fem-eq eq-box">
        <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">Cosenos directores:</strong></div>
        <div>${F("l")} = cos(\u03B1) = ${fe("\u0394x", F("L"))} = ${fe(j(n[0]), j(l))} = <span class="highlight">${j(s)}</span></div>
        <div>${F("m")} = cos(\u03B2) = ${fe("\u0394y", F("L"))} = ${fe(j(n[1]), j(l))} = <span class="highlight">${j(c)}</span></div>
        <div>${F("n")} = cos(\u03B3) = ${fe("\u0394z", F("L"))} = ${fe(j(n[2]), j(l))} = <span class="highlight">${j(i)}</span></div>
      </div>
      <div class="fem-eq">
        \u03BB = <span class="mat-sym" style="grid-template-columns:repeat(3,auto)">
          <span class="cell">${F("l")}</span><span class="cell">${F("m")}</span><span class="cell">${F("n")}</span>
          <span class="cell">${fe("\u2212" + F("m"), F("D"))}</span><span class="cell">${fe(F("l"), F("D"))}</span><span class="cell">0</span>
          <span class="cell">${fe("\u2212" + F("l") + "\xB7" + F("n"), F("D"))}</span><span class="cell">${fe("\u2212" + F("m") + "\xB7" + F("n"), F("D"))}</span><span class="cell">${F("D")}</span>
        </span>
        &nbsp; donde ${F("D")} = \u221A(${F("l")}\xB2 + ${F("m")}\xB2)
      </div>
      <div class="fem-eq">
        ${F("T")} = ${F("I", "4")} \u2297 \u03BB &nbsp; <sub style="color:var(--fem-label)">(Kronecker, 12\xD712)</sub>
      </div>`;
      }
      return `<div class="fem-eq">${F("T")} \u2014 sistema local del tri\xE1ngulo (normal \xD7 lados) <sub>18\xD718</sub></div>`;
    }
    function Ps() {
      return `<div class="fem-eq">
      ${F("K", "global")} = ${F("T")}<sup>T</sup> \xB7 ${F("k", "local")} \xB7 ${F("T")}
    </div>`;
    }
    function As(t) {
      const o = t.map((n) => `6\xB7${n} = ${6 * n}`).join(", ");
      return `<div class="fem-eq eq-box">
      <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">Ensamblaje en K global:</strong></div>
      <div>${F("K", "global")}[${F("i")}, ${F("j")}] += ${F("K", "elem")}[${F("i")}, ${F("j")}]</div>
      <div style="margin-top:4px">donde ${F("i")}, ${F("j")} \u2208 {${o}} + (0..5)</div>
    </div>`;
    }
    function _s(t) {
      return t ? `<div class="fem-eq eq-box">
        <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">Recuperaci\xF3n de fuerzas:</strong></div>
        <div>${F("u", "local")} = ${F("T")} \xB7 ${F("u", "global")}</div>
        <div>${F("f", "local")} = ${F("k", "local")} \xB7 ${F("u", "local")}</div>
        <div style="margin-top:4px;color:var(--fem-eq-sub)">
          ${F("f")} = [${F("N", "i")}, ${F("V", "y,i")}, ${F("V", "z,i")}, ${F("M", "x,i")}, ${F("M", "y,i")}, ${F("M", "z,i")}, ${F("N", "j")}, \u2026]
        </div>
      </div>` : `<div class="fem-eq eq-box">
      <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">Esfuerzos en placa:</strong></div>
      <div>\u03C3 = ${fe("1", "2" + F("A"))} \xB7 ${F("D")} \xB7 ${F("B")} \xB7 ${F("u")}</div>
      <div>${F("N", "xx")} = \u03C3<sub>xx</sub> \xB7 ${F("t")} &nbsp;&nbsp; ${F("M", "xx")} = \u03C3<sub>xx</sub> \xB7 ${fe(F("t") + "\xB3", "12")}</div>
    </div>`;
    }
    function cn(t, o) {
      const n = t.length;
      let l = '<table><tr><td class="hdr"></td>';
      for (let s = 0; s < n; s++) l += `<td class="hdr">${o[s] || s}</td>`;
      l += "</tr>";
      for (let s = 0; s < n; s++) {
        l += `<tr><td class="hdr">${o[s] || s}</td>`;
        for (let c = 0; c < n; c++) {
          const i = t[s][c], d = (s === c ? "diag " : "") + (Math.abs(i) > 1e-10 ? "nz" : "");
          l += `<td class="${d}">${j(i, 2)}</td>`;
        }
        l += "</tr>";
      }
      return l += "</table>", l;
    }
    function es() {
      const t = "0", o = fe(F("EA"), F("L")), n = fe("\u2212" + F("EA"), F("L")), l = fe("12" + F("EI", "z"), F("L") + "\xB3"), s = fe("\u221212" + F("EI", "z"), F("L") + "\xB3"), c = fe("12" + F("EI", "y"), F("L") + "\xB3"), i = fe("\u221212" + F("EI", "y"), F("L") + "\xB3"), d = fe("6" + F("EI", "z"), F("L") + "\xB2"), m = fe("\u22126" + F("EI", "z"), F("L") + "\xB2"), p = fe("6" + F("EI", "y"), F("L") + "\xB2"), a = fe("\u22126" + F("EI", "y"), F("L") + "\xB2"), u = fe(F("GJ"), F("L")), y = fe("\u2212" + F("GJ"), F("L")), $ = fe("4" + F("EI", "z"), F("L")), g = fe("2" + F("EI", "z"), F("L")), r = fe("4" + F("EI", "y"), F("L")), x = fe("2" + F("EI", "y"), F("L")), w = '<span style="color:var(--fem-eq-dots);font-style:italic">sym</span>', E = [
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
      ], z = [
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
      ], N = [
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
          d,
          t,
          s,
          t,
          t,
          t,
          d
        ],
        [
          t,
          t,
          c,
          t,
          a,
          t,
          t,
          t,
          i,
          t,
          a,
          t
        ],
        [
          t,
          t,
          t,
          u,
          t,
          t,
          t,
          t,
          t,
          y,
          t,
          t
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
          p,
          t,
          x,
          t
        ],
        [
          t,
          d,
          t,
          t,
          t,
          $,
          t,
          m,
          t,
          t,
          t,
          g
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
          m,
          t,
          l,
          t,
          t,
          t,
          m
        ],
        [
          t,
          t,
          i,
          t,
          p,
          t,
          t,
          t,
          c,
          t,
          p,
          t
        ],
        [
          t,
          t,
          t,
          y,
          t,
          t,
          t,
          t,
          t,
          u,
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
          p,
          t,
          r,
          t
        ],
        [
          t,
          d,
          t,
          t,
          t,
          g,
          t,
          m,
          t,
          t,
          t,
          $
        ]
      ];
      let P = '<div style="margin-bottom:8px;color:var(--fem-eq-sub);font-size:11px;font-family:monospace">Eq. 6.1 \u2014 Matriz de rigidez de elemento de p\xF3rtico espacial</div>';
      P += '<table><tr><td class="hdr"></td>';
      for (const b of z) P += `<td class="hdr">${b}</td>`;
      P += "</tr>";
      for (let b = 0; b < 12; b++) {
        P += `<tr><td class="hdr">${E[b]}</td>`;
        for (let f = 0; f < 12; f++) if (f < b) P += `<td style="color:var(--fem-border-cell)">${f === 0 && b > 0 ? w : ""}</td>`;
        else {
          const v = N[b][f], M = (b === f ? "diag " : "") + (v !== "0" ? "nz" : "");
          P += `<td class="${M}">${v}</td>`;
        }
        P += "</tr>";
      }
      return P += "</table>", P;
    }
    function Hs(t, o, n, l, s, c, i) {
      return `<div class="coeff-grid">${[
        {
          name: `${fe(F("E") + "\xB7" + F("A"), F("L"))}`,
          calc: `${fe(j(t) + "\xD7" + j(o), j(i))}`,
          val: t * o / i,
          label: "Axial"
        },
        {
          name: `${fe("12\xB7" + F("E") + "\xB7" + F("I", "z"), F("L") + "\xB3")}`,
          calc: `${fe("12\xD7" + j(t) + "\xD7" + j(n), j(i) + "\xB3")}`,
          val: 12 * t * n / i ** 3,
          label: "Corte Y"
        },
        {
          name: `${fe("6\xB7" + F("E") + "\xB7" + F("I", "z"), F("L") + "\xB2")}`,
          calc: `${fe("6\xD7" + j(t) + "\xD7" + j(n), j(i) + "\xB2")}`,
          val: 6 * t * n / i ** 2,
          label: "Corte-Momento Z"
        },
        {
          name: `${fe("12\xB7" + F("E") + "\xB7" + F("I", "y"), F("L") + "\xB3")}`,
          calc: `${fe("12\xD7" + j(t) + "\xD7" + j(l), j(i) + "\xB3")}`,
          val: 12 * t * l / i ** 3,
          label: "Corte Z"
        },
        {
          name: `${fe("6\xB7" + F("E") + "\xB7" + F("I", "y"), F("L") + "\xB2")}`,
          calc: `${fe("6\xD7" + j(t) + "\xD7" + j(l), j(i) + "\xB2")}`,
          val: 6 * t * l / i ** 2,
          label: "Corte-Momento Y"
        },
        {
          name: `${fe(F("G") + "\xB7" + F("J"), F("L"))}`,
          calc: `${fe(j(s) + "\xD7" + j(c), j(i))}`,
          val: s * c / i,
          label: "Torsi\xF3n"
        },
        {
          name: `${fe("4\xB7" + F("E") + "\xB7" + F("I", "z"), F("L"))}`,
          calc: `${fe("4\xD7" + j(t) + "\xD7" + j(n), j(i))}`,
          val: 4 * t * n / i,
          label: "Flexi\xF3n Z (4EI/L)"
        },
        {
          name: `${fe("2\xB7" + F("E") + "\xB7" + F("I", "z"), F("L"))}`,
          calc: `${fe("2\xD7" + j(t) + "\xD7" + j(n), j(i))}`,
          val: 2 * t * n / i,
          label: "Flexi\xF3n Z (2EI/L)"
        },
        {
          name: `${fe("4\xB7" + F("E") + "\xB7" + F("I", "y"), F("L"))}`,
          calc: `${fe("4\xD7" + j(t) + "\xD7" + j(l), j(i))}`,
          val: 4 * t * l / i,
          label: "Flexi\xF3n Y (4EI/L)"
        },
        {
          name: `${fe("2\xB7" + F("E") + "\xB7" + F("I", "y"), F("L"))}`,
          calc: `${fe("2\xD7" + j(t) + "\xD7" + j(l), j(i))}`,
          val: 2 * t * l / i,
          label: "Flexi\xF3n Y (2EI/L)"
        }
      ].map((m) => `<div class="coeff-item"><div style="color:var(--fem-eq-sub);font-size:10px;font-family:monospace;margin-bottom:2px">${m.label}</div>${m.name} = ${m.calc} = <span class="highlight">${j(m.val)}</span></div>`).join("")}</div>`;
    }
    function dn(t, o, n, l) {
      var _a;
      const s = document.querySelector(".fem-full-overlay");
      s && s.remove();
      const c = document.createElement("div");
      c.className = "fem-full-overlay", c.innerHTML = `
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
    `, document.body.appendChild(c), (_a = c.querySelector("#fem-full-close")) == null ? void 0 : _a.addEventListener("click", () => c.remove()), c.addEventListener("click", (i) => {
        i.target === c && c.remove();
      });
    }
    function ts(t) {
      var _a, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l, _m, _n2, _o2, _p, _q, _r, _s2, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I, _J, _K, _L;
      Pt && Pt.remove();
      const o = e.nodes.val, n = e.elements.val, l = n[t], s = l.map((b) => o[b]), c = l.length === 2, i = ((_a = e.elementInputs) == null ? void 0 : _a.val) || {}, d = (_b = e.deformOutputs) == null ? void 0 : _b.val, m = (_c = e.analyzeOutputs) == null ? void 0 : _c.val;
      if (c) {
        const b = ro(Bt(s[1], s[0])), f = ((_d = i.elasticities) == null ? void 0 : _d.get(t)) ?? 0, v = ((_e2 = i.areas) == null ? void 0 : _e2.get(t)) ?? 0, M = ((_f = i.momentsOfInertiaZ) == null ? void 0 : _f.get(t)) ?? 0, T = ((_g = i.momentsOfInertiaY) == null ? void 0 : _g.get(t)) ?? 0, O = ((_h = i.shearModuli) == null ? void 0 : _h.get(t)) ?? 0, q = ((_i = i.torsionalConstants) == null ? void 0 : _i.get(t)) ?? 0;
        `${l[0]}${l[1]}${j(b)}${j(f)}${j(v)}${j(M)}${j(T)}${j(O)}${j(q)}`;
      } else {
        const b = ((_j = i.elasticities) == null ? void 0 : _j.get(t)) ?? 0, f = ((_k = i.thicknesses) == null ? void 0 : _k.get(t)) ?? 0, v = ((_l = i.poissonsRatios) == null ? void 0 : _l.get(t)) ?? 0;
        `${l.join(", ")}${j(b)}${j(f)}${j(v)}`;
      }
      let p = "", a = "", u = "", y = "", $ = "", g = "", r = "", x = "", w = null, E = null, z = null, N = [];
      try {
        if (w = Oo(s, i, t), E = Ro(s), z = It($n(E), It(w, E)), N = c ? [
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
          const M = ro(Bt(s[1], s[0])), T = ((_m = i.elasticities) == null ? void 0 : _m.get(t)) ?? 0, O = ((_n2 = i.areas) == null ? void 0 : _n2.get(t)) ?? 0, q = ((_o2 = i.momentsOfInertiaZ) == null ? void 0 : _o2.get(t)) ?? 0, L = ((_p = i.momentsOfInertiaY) == null ? void 0 : _p.get(t)) ?? 0, C = ((_q = i.shearModuli) == null ? void 0 : _q.get(t)) ?? 0, A = ((_r = i.torsionalConstants) == null ? void 0 : _r.get(t)) ?? 0;
          y = Fs(T, O, q, L, C, A, M);
        }
        $ = Cs(s), g = Ps(), r = As(l), x = _s(c);
        const b = '<button class="fem-expand-btn" data-full="kLocal">\u26F6 Ver completa</button>', f = '<button class="fem-expand-btn" data-full="T">\u26F6 Ver completa</button>', v = '<button class="fem-expand-btn" data-full="kGlobal">\u26F6 Ver completa</button>';
        p = `<div class="matrix-label">k_local (${w.length}\xD7${w.length}) ${b}</div>${rn(w, N)}`, a = `<div class="matrix-label">T \u2014 Transformaci\xF3n (${E.length}\xD7${E.length}) ${f}</div>${rn(E, N)}`, u = `<div class="matrix-label">K_global = T^T \xB7 k \xB7 T ${v}</div>${rn(z, N)}`;
      } catch (b) {
        p = `<div style="color:red">Error: ${b.message}</div>`;
      }
      if (d == null ? void 0 : d.deformations) {
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
          const M = ((_a2 = d.deformations) == null ? void 0 : _a2.get(f)) || [
            0,
            0,
            0,
            0,
            0,
            0
          ], T = b.map((O, q) => `<span class="prop-key">${O}</span>: <span class="${Math.abs(M[q]) > 1e-10 ? "result-val" : ""}">${j(M[q])}</span>`).join(" &nbsp;");
          return `<div style="margin-bottom:2px"><strong>Nodo ${f}:</strong> ${T}</div>`;
        }).join("");
      }
      if (m && c && (d == null ? void 0 : d.deformations) && w && E) {
        const b = (_s2 = m.normals) == null ? void 0 : _s2.get(t), f = (_t = m.shearsY) == null ? void 0 : _t.get(t), v = (_u = m.shearsZ) == null ? void 0 : _u.get(t), M = (_v = m.torsions) == null ? void 0 : _v.get(t), T = (_w = m.bendingsY) == null ? void 0 : _w.get(t), O = (_x = m.bendingsZ) == null ? void 0 : _x.get(t), q = [
          "ux",
          "uy",
          "uz",
          "\u03B8x",
          "\u03B8y",
          "\u03B8z"
        ], L = [];
        for (const Y of l) {
          const W = ((_y = d.deformations) == null ? void 0 : _y.get(Y)) || [
            0,
            0,
            0,
            0,
            0,
            0
          ];
          L.push(...W);
        }
        let C = [];
        try {
          C = It(E, L);
        } catch {
          C = new Array(12).fill(0);
        }
        let A = [];
        try {
          A = It(w, C);
        } catch {
          A = new Array(12).fill(0);
        }
        const X = (Y, W) => Y.map((Z, ue) => `<span style="color:${Math.abs(Z) > 1e-10 ? "var(--fem-nonzero)" : "var(--fem-eq-dots)"}">${W[ue % 6]}=${j(Z)}</span>`).join(", "), ee = [
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
        ].map((Y, W) => `${Y}${W < 6 ? "\u1D62" : "\u2C7C"}`);
        `${F("u", "global")}${l.map((Y, W) => `<span style="color:var(--fem-label)">nodo ${Y}:</span> ${q.map((Z, ue) => `<span style="color:${Math.abs(L[W * 6 + ue]) > 1e-10 ? "var(--fem-eq-var)" : "var(--fem-eq-dots)"}">${j(L[W * 6 + ue])}</span>`).join(", ")}`).join(" | ")}${F("u", "local")}${F("T")}${F("u", "global")}${F("u", "local")}${X(C, [
          ...q,
          ...q
        ])}${F("f", "local")}${F("k", "local")}${F("u", "local")}${F("f", "local")}${A.map((Y, W) => `<span style="color:${Math.abs(Y) > 1e-10 ? "var(--fem-nonzero)" : "var(--fem-eq-dots)"}">${ee[W]}=${j(Y)}</span>`).join(", ")}${F("P", "1")}${F("N", "i")}${j(A[0])}${F("P", "7")}${F("N", "j")}${j(A[6])}${F("P", "2")}${F("V", "y,i")}${j(A[1])}${F("P", "8")}${F("V", "y,j")}${j(A[7])}${F("P", "3")}${F("V", "z,i")}${j(A[2])}${F("P", "9")}${F("V", "z,j")}${j(A[8])}${F("P", "4")}${F("M", "x,i")}${j(A[3])}${F("P", "10")}${F("M", "x,j")}${j(A[9])}${F("P", "5")}${F("M", "y,i")}${j(A[4])}${F("P", "11")}${F("M", "y,j")}${j(A[10])}${F("P", "6")}${F("M", "z,i")}${j(A[5])}${F("P", "12")}${F("M", "z,j")}${j(A[11])}${b ? b.map((Y) => j(Y)).join(", ") : "\u2014"}${f ? f.map((Y) => j(Y)).join(", ") : "\u2014"}${v ? v.map((Y) => j(Y)).join(", ") : "\u2014"}${M ? M.map((Y) => j(Y)).join(", ") : "\u2014"}${T ? T.map((Y) => j(Y)).join(", ") : "\u2014"}${O ? O.map((Y) => j(Y)).join(", ") : "\u2014"}`;
      } else if (m && c) {
        const b = (_z = m.normals) == null ? void 0 : _z.get(t), f = (_A = m.shearsY) == null ? void 0 : _A.get(t), v = (_B = m.shearsZ) == null ? void 0 : _B.get(t), M = (_C = m.torsions) == null ? void 0 : _C.get(t), T = (_D = m.bendingsY) == null ? void 0 : _D.get(t), O = (_E = m.bendingsZ) == null ? void 0 : _E.get(t);
        `${b ? b.map((q) => j(q)).join(", ") : "\u2014"}${f ? f.map((q) => j(q)).join(", ") : "\u2014"}${v ? v.map((q) => j(q)).join(", ") : "\u2014"}${M ? M.map((q) => j(q)).join(", ") : "\u2014"}${T ? T.map((q) => j(q)).join(", ") : "\u2014"}${O ? O.map((q) => j(q)).join(", ") : "\u2014"}`;
      } else if (m && !c) {
        const b = (_F = m.bendingXX) == null ? void 0 : _F.get(t), f = (_G = m.bendingYY) == null ? void 0 : _G.get(t), v = (_H = m.bendingXY) == null ? void 0 : _H.get(t), M = (_I = m.membraneXX) == null ? void 0 : _I.get(t), T = (_J = m.membraneYY) == null ? void 0 : _J.get(t), O = (_K = m.membraneXY) == null ? void 0 : _K.get(t);
        `${b ? b.map((q) => j(q)).join(", ") : "\u2014"}${f ? f.map((q) => j(q)).join(", ") : "\u2014"}${v ? v.map((q) => j(q)).join(", ") : "\u2014"}${M ? M.map((q) => j(q)).join(", ") : "\u2014"}${T ? T.map((q) => j(q)).join(", ") : "\u2014"}${O ? O.map((q) => j(q)).join(", ") : "\u2014"}`;
      }
      `${l[0]}`, 6 * l[0], 6 * l[0] + 5, `${l[1]}`, 6 * l[1], 6 * l[1] + 5, l.length === 3 && (`${l[2]}`, 6 * l[2], 6 * l[2] + 5), o.length * 6, o.length * 6, Pt = xa(t, o, n, i, d, m), Pt.id = "fem-inspect-panel", document.body.appendChild(Pt), (_L = Pt.querySelector("#er-close")) == null ? void 0 : _L.addEventListener("click", () => no());
      const P = c ? (() => {
        var _a2, _b2, _c2, _d2, _e3, _f2;
        const b = ro(Bt(s[1], s[0])), f = ((_a2 = i.elasticities) == null ? void 0 : _a2.get(t)) ?? 0, v = ((_b2 = i.areas) == null ? void 0 : _b2.get(t)) ?? 0, M = ((_c2 = i.momentsOfInertiaZ) == null ? void 0 : _c2.get(t)) ?? 0, T = ((_d2 = i.momentsOfInertiaY) == null ? void 0 : _d2.get(t)) ?? 0, O = ((_e3 = i.shearModuli) == null ? void 0 : _e3.get(t)) ?? 0, q = ((_f2 = i.torsionalConstants) == null ? void 0 : _f2.get(t)) ?? 0;
        return Hs(f, v, M, T, O, q, b);
      })() : void 0;
      Pt.querySelectorAll("[data-full]").forEach((b) => {
        b.addEventListener("click", (f) => {
          f.stopPropagation();
          const v = b.dataset.full;
          if (v === "kLocal" && w) {
            const M = c ? es() : "<em>Shell 18\xD718 \u2014 ver tabla num\xE9rica</em>";
            dn(`Elemento ${t} \u2014 Rigidez Local k_local`, M, cn(w, N), P);
          } else if (v === "T" && E) dn(`Elemento ${t} \u2014 Transformaci\xF3n T`, $, cn(E, N));
          else if (v === "kGlobal" && z) {
            const M = c ? es() : "<em>Shell 18\xD718</em>";
            dn(`Elemento ${t} \u2014 Rigidez Global K = T^T \xB7 k \xB7 T`, M, cn(z, N), P);
          }
        });
      });
    }
    function os() {
      const l = [], s = [];
      for (let g = 0; g <= 8; g++) {
        const r = g / 8, x = 30 * r, E = 12 * (1 - r) * (1 - r * 0.3) / 2, z = l.length;
        if (l.push([
          -E,
          -E,
          x
        ]), l.push([
          E,
          -E,
          x
        ]), l.push([
          E,
          E,
          x
        ]), l.push([
          -E,
          E,
          x
        ]), s.push([
          z,
          z + 1
        ]), s.push([
          z + 1,
          z + 2
        ]), s.push([
          z + 2,
          z + 3
        ]), s.push([
          z + 3,
          z
        ]), g > 0 && g < 8 && (s.push([
          z,
          z + 2
        ]), s.push([
          z + 1,
          z + 3
        ])), g > 0) {
          const N = z - 4;
          for (let P = 0; P < 4; P++) s.push([
            N + P,
            z + P
          ]);
          s.push([
            N,
            z + 1
          ]), s.push([
            N + 1,
            z + 2
          ]), s.push([
            N + 2,
            z + 3
          ]), s.push([
            N + 3,
            z
          ]);
        }
      }
      const c = /* @__PURE__ */ new Map();
      for (let g = 0; g < 4; g++) c.set(g, [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
      const i = l.length - 4, d = /* @__PURE__ */ new Map();
      for (let g = 0; g < 4; g++) d.set(i + g, [
        0,
        0,
        -50,
        0,
        0,
        0
      ]);
      e.nodes.val = l, e.elements.val = s, e.nodeInputs && (e.nodeInputs.val = {
        supports: c,
        loads: d
      });
      const m = 2e8, p = 77e6, a = 5e-3, u = 2e-6, y = 1e-6, $ = {
        elasticities: new Map(s.map((g, r) => [
          r,
          m
        ])),
        shearModuli: new Map(s.map((g, r) => [
          r,
          p
        ])),
        areas: new Map(s.map((g, r) => [
          r,
          a
        ])),
        momentsOfInertiaZ: new Map(s.map((g, r) => [
          r,
          u
        ])),
        momentsOfInertiaY: new Map(s.map((g, r) => [
          r,
          u
        ])),
        torsionalConstants: new Map(s.map((g, r) => [
          r,
          y
        ]))
      };
      e.elementInputs && (e.elementInputs.val = $);
      try {
        const g = zt(l, s, {
          supports: c,
          loads: d
        }, $);
        g && e.deformOutputs && (e.deformOutputs.val = g);
      } catch (g) {
        console.warn("Eiffel deform:", g.message);
      }
      setTimeout(() => ft(), 50), Oe(), console.log(`Torre Eiffel: ${l.length} nodos, ${s.length} elementos, H=30m`);
    }
    function ns() {
      const l = [], s = [];
      for (let $ = 0; $ <= 20; $++) {
        const g = $ / 20, r = 20 * g, x = 20 * (1 - Math.pow(2 * g - 1, 2)), w = 2;
        l.push([
          r,
          -2 / 2,
          x
        ]), l.push([
          r,
          w / 2,
          x
        ]);
      }
      for (let $ = 0; $ < 20; $++) s.push([
        $ * 2,
        ($ + 1) * 2
      ]), s.push([
        $ * 2 + 1,
        ($ + 1) * 2 + 1
      ]), s.push([
        $ * 2,
        $ * 2 + 1
      ]), s.push([
        $ * 2,
        ($ + 1) * 2 + 1
      ]), s.push([
        $ * 2 + 1,
        ($ + 1) * 2
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
      const i = /* @__PURE__ */ new Map();
      for (let $ = 0; $ <= 20; $++) i.set($ * 2, [
        0,
        0,
        -20,
        0,
        0,
        0
      ]), i.set($ * 2 + 1, [
        0,
        0,
        -20,
        0,
        0,
        0
      ]);
      e.nodes.val = l, e.elements.val = s, e.nodeInputs && (e.nodeInputs.val = {
        supports: c,
        loads: i
      });
      const d = 2e8, m = 77e6, p = 0.01, a = 5e-6, u = 2e-6, y = {
        elasticities: new Map(s.map(($, g) => [
          g,
          d
        ])),
        shearModuli: new Map(s.map(($, g) => [
          g,
          m
        ])),
        areas: new Map(s.map(($, g) => [
          g,
          p
        ])),
        momentsOfInertiaZ: new Map(s.map(($, g) => [
          g,
          a
        ])),
        momentsOfInertiaY: new Map(s.map(($, g) => [
          g,
          a
        ])),
        torsionalConstants: new Map(s.map(($, g) => [
          g,
          u
        ]))
      };
      e.elementInputs && (e.elementInputs.val = y);
      try {
        const $ = zt(l, s, {
          supports: c,
          loads: i
        }, y);
        $ && e.deformOutputs && (e.deformOutputs.val = $);
      } catch ($) {
        console.warn("Arco:", $.message);
      }
      setTimeout(() => ft(), 50), Oe(), console.log(`Arco Gateway: ${l.length} nodos, ${s.length} elem, span=20m, H=20m`);
    }
    function ss() {
      const c = [], i = [];
      for (let r = 0; r <= 16; r++) {
        const x = 60 * r / 16;
        c.push([
          x,
          -6 / 2,
          8
        ]), c.push([
          x,
          6 / 2,
          8
        ]);
      }
      const d = c.length;
      for (let r = 0; r < 16; r++) i.push([
        r * 2,
        (r + 1) * 2
      ]), i.push([
        r * 2 + 1,
        (r + 1) * 2 + 1
      ]), i.push([
        r * 2,
        r * 2 + 1
      ]);
      i.push([
        16 * 2,
        16 * 2 + 1
      ]);
      const m = [
        Math.round(16 / 3),
        Math.round(2 * 16 / 3)
      ], p = [];
      for (const r of m) {
        const x = 60 * r / 16, w = c.length;
        c.push([
          x,
          -6 / 2,
          0
        ]);
        const E = c.length;
        c.push([
          x,
          6 / 2,
          0
        ]);
        const z = c.length;
        c.push([
          x,
          -6 / 2,
          28
        ]);
        const N = c.length;
        c.push([
          x,
          6 / 2,
          28
        ]), p.push(z, N), i.push([
          w,
          r * 2
        ]), i.push([
          r * 2,
          z
        ]), i.push([
          E,
          r * 2 + 1
        ]), i.push([
          r * 2 + 1,
          N
        ]), i.push([
          z,
          N
        ]);
      }
      for (const r of p) {
        const x = c[r][0];
        for (let w = 0; w <= 16; w++) {
          const E = 60 * w / 16;
          if (Math.abs(E - x) > 60 * 0.05 && Math.abs(E - x) < 60 * 0.45) {
            const z = c[r][1] < 0 ? w * 2 : w * 2 + 1;
            w % 2 === 0 && i.push([
              r,
              z
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
      for (let r = d; r < d + m.length * 4; r += 4) a.set(r, [
        true,
        true,
        true,
        true,
        true,
        true
      ]), a.set(r + 1, [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
      const u = /* @__PURE__ */ new Map();
      for (let r = 0; r <= 16; r++) u.set(r * 2, [
        0,
        0,
        -30,
        0,
        0,
        0
      ]), u.set(r * 2 + 1, [
        0,
        0,
        -30,
        0,
        0,
        0
      ]);
      e.nodes.val = c, e.elements.val = i, e.nodeInputs && (e.nodeInputs.val = {
        supports: a,
        loads: u
      });
      const y = 2e8, $ = 77e6, g = {
        elasticities: new Map(i.map((r, x) => [
          x,
          y
        ])),
        shearModuli: new Map(i.map((r, x) => [
          x,
          $
        ])),
        areas: new Map(i.map((r, x) => [
          x,
          x < 16 * 3 + 1 ? 0.02 : 1e-3
        ])),
        momentsOfInertiaZ: new Map(i.map((r, x) => [
          x,
          5e-5
        ])),
        momentsOfInertiaY: new Map(i.map((r, x) => [
          x,
          2e-5
        ])),
        torsionalConstants: new Map(i.map((r, x) => [
          x,
          1e-5
        ]))
      };
      e.elementInputs && (e.elementInputs.val = g);
      try {
        const r = zt(c, i, {
          supports: a,
          loads: u
        }, g);
        r && e.deformOutputs && (e.deformOutputs.val = r);
      } catch (r) {
        console.warn("Puente:", r.message);
      }
      setTimeout(() => ft(), 50), Oe(), console.log(`Puente atirantado: ${c.length} nodos, ${i.length} elem, span=60m`);
    }
    function as() {
      const c = [], i = [];
      for (let x = 0; x <= 12; x++) {
        const w = x * 3.5, E = x * 5 * Math.PI / 180;
        for (let z = 0; z < 6; z++) {
          const N = E + 2 * Math.PI * z / 6, P = 5 * Math.cos(N), b = 5 * Math.sin(N);
          c.push([
            P,
            b,
            w
          ]);
        }
      }
      for (let x = 0; x <= 12; x++) {
        const w = x * 6;
        for (let E = 0; E < 6; E++) i.push([
          w + E,
          w + (E + 1) % 6
        ]);
        if (x < 12) {
          const E = (x + 1) * 6;
          for (let z = 0; z < 6; z++) i.push([
            w + z,
            E + z
          ]), i.push([
            w + z,
            E + (z + 1) % 6
          ]);
        }
      }
      for (let x = 0; x <= 12; x++) {
        const w = c.length;
        c.push([
          0,
          0,
          x * 3.5
        ]);
        const E = x * 6;
        for (let z = 0; z < 6; z++) i.push([
          w,
          E + z
        ]);
      }
      const d = 13 * 6;
      for (let x = 0; x < 12; x++) i.push([
        d + x,
        d + x + 1
      ]);
      const m = /* @__PURE__ */ new Map();
      for (let x = 0; x < 6; x++) m.set(x, [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
      m.set(d, [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
      const p = /* @__PURE__ */ new Map();
      for (let x = 1; x <= 12; x++) {
        const w = 10 * x / 12, E = x * 6;
        for (let z = 0; z < 6; z++) p.set(E + z, [
          w,
          0,
          -5,
          0,
          0,
          0
        ]);
      }
      e.nodes.val = c, e.elements.val = i, e.nodeInputs && (e.nodeInputs.val = {
        supports: m,
        loads: p
      });
      const a = 2e8, u = 77e6, y = 8e-3, $ = 1e-5, g = 5e-6, r = {
        elasticities: new Map(i.map((x, w) => [
          w,
          a
        ])),
        shearModuli: new Map(i.map((x, w) => [
          w,
          u
        ])),
        areas: new Map(i.map((x, w) => [
          w,
          y
        ])),
        momentsOfInertiaZ: new Map(i.map((x, w) => [
          w,
          $
        ])),
        momentsOfInertiaY: new Map(i.map((x, w) => [
          w,
          $
        ])),
        torsionalConstants: new Map(i.map((x, w) => [
          w,
          g
        ]))
      };
      e.elementInputs && (e.elementInputs.val = r);
      try {
        const x = zt(c, i, {
          supports: m,
          loads: p
        }, r);
        x && e.deformOutputs && (e.deformOutputs.val = x);
      } catch (x) {
        console.warn("Twisted:", x.message);
      }
      setTimeout(() => ft(), 50), Oe(), console.log(`Torre Twist: ${c.length} nodos, ${i.length} elem, 12 pisos, twist=5deg/piso`);
    }
    function ls() {
      const s = [], c = [];
      for (let r = 0; r <= 20; r++) {
        const x = r / 20, w = r * 3;
        let E = 8 * (1 - x * 0.7);
        x > 0.4 && (E *= 0.85), x > 0.7 && (E *= 0.7);
        const z = s.length;
        s.push([
          0,
          0,
          w
        ]);
        for (let N = 0; N < 3; N++) {
          const P = N * 2 * Math.PI / 3 - Math.PI / 2, b = E * Math.cos(P), f = E * Math.sin(P), v = s.length;
          s.push([
            b,
            f,
            w
          ]), c.push([
            z,
            v
          ]);
          const M = s.length;
          s.push([
            b * 0.5,
            f * 0.5,
            w
          ]), c.push([
            z,
            M
          ]), c.push([
            M,
            v
          ]);
        }
        for (let N = 0; N < 3; N++) {
          const P = z + 1 + N * 2, b = z + 1 + (N + 1) % 3 * 2;
          c.push([
            P,
            b
          ]);
        }
        if (r < 20) {
          const P = z + 7;
          c.push([
            z,
            P
          ]);
          for (let b = 0; b < 3; b++) c.push([
            z + 1 + b * 2,
            P + 1 + b * 2
          ]), c.push([
            z + 2 + b * 2,
            P + 2 + b * 2
          ]), c.push([
            z + 1 + b * 2,
            P + 2 + b * 2
          ]);
        }
      }
      const i = /* @__PURE__ */ new Map(), d = 1 + 3 * 2;
      for (let r = 0; r < d; r++) i.set(r, [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
      const m = /* @__PURE__ */ new Map();
      for (let r = 1; r <= 20; r++) {
        const x = r * d, w = 5 * r / 20;
        m.set(x, [
          w,
          0,
          -10,
          0,
          0,
          0
        ]);
      }
      e.nodes.val = s, e.elements.val = c, e.nodeInputs && (e.nodeInputs.val = {
        supports: i,
        loads: m
      });
      const p = 35e6, a = 14e6, u = 0.02, y = 5e-5, $ = 2e-5, g = {
        elasticities: new Map(c.map((r, x) => [
          x,
          p
        ])),
        shearModuli: new Map(c.map((r, x) => [
          x,
          a
        ])),
        areas: new Map(c.map((r, x) => [
          x,
          u
        ])),
        momentsOfInertiaZ: new Map(c.map((r, x) => [
          x,
          y
        ])),
        momentsOfInertiaY: new Map(c.map((r, x) => [
          x,
          y
        ])),
        torsionalConstants: new Map(c.map((r, x) => [
          x,
          $
        ]))
      };
      e.elementInputs && (e.elementInputs.val = g);
      try {
        const r = zt(s, c, {
          supports: i,
          loads: m
        }, g);
        r && e.deformOutputs && (e.deformOutputs.val = r);
      } catch (r) {
        console.warn("Burj:", r.message);
      }
      setTimeout(() => ft(), 50), Oe(), console.log(`Burj Khalifa: ${s.length} nodos, ${c.length} elem, 20 pisos, H=${20 * 3}m`);
    }
    function is() {
      const t = [], o = [];
      for (let u = 0; u < 3; u++) {
        const y = u * 12, $ = 15 - u * 2, g = 20 - u * 3, r = 8 - u, x = t.length;
        for (let E = 0; E <= 4; E++) {
          const z = E / 4, N = -r / 2 + r * z, P = g * (1 - z * z * 0.3);
          for (let b = 0; b <= 12; b++) {
            const f = b / 12, v = y + P * f, M = $ * Math.sin(Math.PI * f) * (1 - z * z * 0.5), T = N;
            t.push([
              v,
              T,
              M
            ]);
          }
        }
        const w = 13;
        for (let E = 0; E < 4; E++) for (let z = 0; z < 12; z++) {
          const N = x + E * w + z, P = x + E * w + z + 1, b = x + (E + 1) * w + z + 1, f = x + (E + 1) * w + z;
          o.push([
            N,
            P,
            b,
            f
          ]);
        }
      }
      const s = /* @__PURE__ */ new Map();
      for (let u = 0; u < t.length; u++) t[u][2] < 0.5 && s.set(u, [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
      const c = /* @__PURE__ */ new Map();
      for (let u = 0; u < t.length; u++) t[u][2] > 2 && c.set(u, [
        0,
        0,
        -5,
        0,
        0,
        0
      ]);
      e.nodes.val = t, e.elements.val = o, e.nodeInputs && (e.nodeInputs.val = {
        supports: s,
        loads: c
      });
      const i = 35e6, d = 0.2, m = 0.15, p = i / (2 * (1 + d)), a = {
        elasticities: new Map(o.map((u, y) => [
          y,
          i
        ])),
        poissonsRatios: new Map(o.map((u, y) => [
          y,
          d
        ])),
        thicknesses: new Map(o.map((u, y) => [
          y,
          m
        ])),
        shearModuli: new Map(o.map((u, y) => [
          y,
          p
        ]))
      };
      e.elementInputs && (e.elementInputs.val = a);
      try {
        const u = zt(t, o, {
          supports: s,
          loads: c
        }, a);
        u && e.deformOutputs && (e.deformOutputs.val = u);
      } catch (u) {
        console.warn("Opera:", u.message);
      }
      setTimeout(() => ft(), 50), Oe(), console.log(`Sydney Opera: ${t.length} nodos, ${o.length} shells Q4, 3 velas`);
    }
    function rs() {
      const l = [], s = [];
      for (let g = 0; g <= 15; g++) {
        const r = g / 15, x = g * 3.5, w = 5 * (0.6 + 0.4 * Math.sin(Math.PI * r));
        if (r > 0.9) {
          const E = 5 * (0.6 + 0.4 * Math.sin(Math.PI * 0.9)) * (1 - (r - 0.9) * 8);
          for (let z = 0; z < 12; z++) {
            const N = 2 * Math.PI * z / 12;
            l.push([
              Math.max(E, 1) * Math.cos(N),
              Math.max(E, 1) * Math.sin(N),
              x
            ]);
          }
        } else for (let E = 0; E < 12; E++) {
          const z = 2 * Math.PI * E / 12;
          l.push([
            w * Math.cos(z),
            w * Math.sin(z),
            x
          ]);
        }
      }
      for (let g = 0; g < 15; g++) {
        const r = g * 12, x = (g + 1) * 12;
        for (let E = 0; E < 12; E++) s.push([
          r + E,
          r + (E + 1) % 12
        ]);
        const w = g % 2 === 0 ? 1 : -1;
        for (let E = 0; E < 12; E++) {
          const z = (E + w + 12) % 12;
          s.push([
            r + E,
            x + z
          ]), s.push([
            r + E,
            x + E
          ]);
        }
      }
      const c = 15 * 12;
      for (let g = 0; g < 12; g++) s.push([
        c + g,
        c + (g + 1) % 12
      ]);
      const i = /* @__PURE__ */ new Map();
      for (let g = 0; g < 12; g++) i.set(g, [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
      const d = /* @__PURE__ */ new Map();
      for (let g = 1; g <= 15; g++) {
        const r = g * 12, x = 3 * g / 15;
        for (let w = 0; w < 12; w += 3) d.set(r + w, [
          x,
          0,
          -8,
          0,
          0,
          0
        ]);
      }
      e.nodes.val = l, e.elements.val = s, e.nodeInputs && (e.nodeInputs.val = {
        supports: i,
        loads: d
      });
      const m = 2e8, p = 77e6, a = 6e-3, u = 8e-6, y = 4e-6, $ = {
        elasticities: new Map(s.map((g, r) => [
          r,
          m
        ])),
        shearModuli: new Map(s.map((g, r) => [
          r,
          p
        ])),
        areas: new Map(s.map((g, r) => [
          r,
          a
        ])),
        momentsOfInertiaZ: new Map(s.map((g, r) => [
          r,
          u
        ])),
        momentsOfInertiaY: new Map(s.map((g, r) => [
          r,
          u
        ])),
        torsionalConstants: new Map(s.map((g, r) => [
          r,
          y
        ]))
      };
      e.elementInputs && (e.elementInputs.val = $);
      try {
        const g = zt(l, s, {
          supports: i,
          loads: d
        }, $);
        g && e.deformOutputs && (e.deformOutputs.val = g);
      } catch (g) {
        console.warn("Diagrid:", g.message);
      }
      setTimeout(() => ft(), 50), Oe(), console.log(`Diagrid Tower: ${l.length} nodos, ${s.length} elem, 15 pisos, H=${15 * 3.5}m`);
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
    function Os() {
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
        const o = (x) => {
          var _a2;
          return parseFloat(((_a2 = t.querySelector(`#${x}`)) == null ? void 0 : _a2.value) || "0");
        }, n = o("po-colB"), l = o("po-colH"), s = o("po-fc") * 1e3, c = o("po-fy") * 1e3, i = o("po-H"), d = o("po-L"), m = o("po-As") * 1e-4, p = o("po-nbar"), a = o("po-drift") / 100, u = o("po-ncycles"), y = t.querySelector("#pushover-status");
        y.textContent = "Generando historia de desplazamientos...";
        const $ = [], g = a * i, r = 40;
        for (let x = 1; x <= u; x++) {
          const w = g * x / u;
          for (let E = 0; E <= r; E++) $.push(w * Math.sin(2 * Math.PI * E / r));
        }
        y.textContent = `Resolviendo pushover (${$.length} pasos)...`;
        try {
          const { cyclicPushover: x } = await Ys(async () => {
            const { cyclicPushover: E } = await import("./cyclicPushoverCpp-DZAQImEK.js").then(async (m2) => {
              await m2.__tla;
              return m2;
            });
            return {
              cyclicPushover: E
            };
          }, __vite__mapDeps([0,1]), import.meta.url), w = await x({
            colHeight: i,
            beamLength: d,
            col: {
              b: n,
              h: l,
              fpc: -s,
              Fy_rebar: c,
              E_rebar: 2e8,
              rebar_area: m,
              cover: 0.04,
              n_rebar: p
            },
            beam: {
              b: 0.25,
              h: 0.3,
              fpc: -s,
              Fy_rebar: c,
              E_rebar: 2e8,
              rebar_area: m * 0.7,
              cover: 0.03,
              n_rebar: p
            },
            dispHistory: $
          });
          y.textContent = `Completado: ${w.nSteps} pasos`, Rs(t.querySelector("#pushover-canvas"), w.displacements, w.forces, `Pushover: ${n * 100}x${l * 100}cm, f'c=${s / 1e3}MPa, Fy=${c / 1e3}MPa`);
        } catch (x) {
          y.textContent = `Error: ${x.message}`, console.error("Pushover failed:", x);
        }
      });
    }
    function Rs(t, o, n, l) {
      const s = t.getContext("2d");
      if (!s || o.length === 0) return;
      const c = t.width, i = t.height, d = {
        left: 55,
        right: 15,
        top: 30,
        bottom: 35
      }, m = c - d.left - d.right, p = i - d.top - d.bottom;
      s.fillStyle = "#111118", s.fillRect(0, 0, c, i);
      let a = Math.min(...o), u = Math.max(...o), y = Math.min(...n), $ = Math.max(...n);
      a === u && (a -= 0.01, u += 0.01), y === $ && (y -= 1, $ += 1);
      const g = u - a, r = $ - y, x = (N) => d.left + (N - a) / g * m, w = (N) => d.top + p - (N - y) / r * p;
      s.strokeStyle = "#333", s.lineWidth = 0.5, a < 0 && u > 0 && (s.strokeStyle = "#555", s.beginPath(), s.moveTo(x(0), d.top), s.lineTo(x(0), d.top + p), s.stroke()), y < 0 && $ > 0 && (s.beginPath(), s.moveTo(d.left, w(0)), s.lineTo(d.left + m, w(0)), s.stroke()), s.strokeStyle = "#ff4444", s.lineWidth = 1.5, s.beginPath(), s.moveTo(x(o[0]), w(n[0]));
      for (let N = 1; N < o.length; N++) s.lineTo(x(o[N]), w(n[N]));
      s.stroke(), s.fillStyle = "#aaa", s.font = "11px monospace", s.textAlign = "center", s.fillText("Desplazamiento (m)", d.left + m / 2, i - 5), s.save(), s.translate(12, d.top + p / 2), s.rotate(-Math.PI / 2), s.fillText("Fuerza (kN)", 0, 0), s.restore(), s.fillStyle = "#ee9b00", s.font = "bold 11px monospace", s.textAlign = "center", s.fillText(l, c / 2, 15), s.fillStyle = "#888", s.font = "9px monospace", s.textAlign = "center";
      const E = g / 5;
      for (let N = 0; N <= 5; N++) {
        const P = a + E * N;
        s.fillText((P * 1e3).toFixed(1), x(P), i - d.bottom + 15);
      }
      s.textAlign = "right";
      const z = r / 5;
      for (let N = 0; N <= 5; N++) {
        const P = y + z * N;
        s.fillText(P.toFixed(0), d.left - 5, w(P) + 3);
      }
    }
    let ko = null;
    function Bs() {
      if (ko) {
        ko.remove(), ko = null;
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
    `, document.body.appendChild(t), ko = t, t.querySelector("#nl-close").addEventListener("click", () => {
        t.remove(), ko = null;
      }), t.querySelector("#nl-test").addEventListener("click", () => Ds(t));
    }
    function Ds(t) {
      const o = parseFloat(t.querySelector("#nl-fy").value), n = parseFloat(t.querySelector("#nl-e0").value), l = parseFloat(t.querySelector("#nl-b").value), s = parseFloat(t.querySelector("#nl-r0").value), c = parseFloat(t.querySelector("#nl-amp").value), i = parseInt(t.querySelector("#nl-cycles").value), d = 100, m = [];
      for (let U = 0; U < i; U++) {
        const ee = c * (1 + U * 0.5);
        for (let Y = 0; Y < d; Y++) {
          const W = Y / d * 2 * Math.PI;
          m.push(ee * Math.sin(W));
        }
      }
      const p = o / n, a = l * n;
      let u = 0, y = 0, $ = -p, g = p, r = 0, x = 0, w = 0, E = 0, z = 0, N = 0;
      const P = [];
      for (const U of m) {
        let ee = $, Y = g, W = r, Z = x, ue = w, qe = E, Le = z, Q = N, ce;
        const be = U - u;
        if (Math.abs(be) < 1e-20) {
          P.push(y);
          continue;
        }
        if ((Q === 0 || Q === 3) && (be < 0 ? (Q = 2, Z = -p, ue = -o, W = Z, qe = 0, Le = 0) : (Q = 1, Z = p, ue = o, W = Z, qe = 0, Le = 0)), Q === 2 && be > 0) {
          Q = 1, qe = u, Le = y, u < ee && (ee = u);
          const xe = (Y - ee) / (2 * 1 * p), Ce = 1 + 0 * Math.pow(xe, 0.8);
          Z = (o * Ce - a * p * Ce - Le + n * qe) / (n - a), ue = o * Ce + a * (Z - p * Ce), W = Y;
        } else if (Q === 1 && be < 0) {
          Q = 2, qe = u, Le = y, u > Y && (Y = u);
          const xe = (Y - ee) / (2 * 1 * p), Ce = 1 + 0 * Math.pow(xe, 0.8);
          Z = (-o * Ce + a * p * Ce - Le + n * qe) / (n - a), ue = -o * Ce + a * (Z + p * Ce), W = ee;
        }
        const se = Math.abs((W - Z) / p);
        let Se = s - 0.925 * se / (0.15 + se);
        Se < 0.1 && (Se = 0.1);
        const Te = (U - qe) / (Z - qe), je = 1 + Math.pow(Math.abs(Te), Se), K = Math.pow(je, 1 / Se);
        ce = l * Te + (1 - l) * Te / K, ce = ce * (ue - Le) + Le, P.push(ce), u = U, y = ce, $ = ee, g = Y, r = W, x = Z, w = ue, E = qe, z = Le, N = Q;
      }
      const b = t.querySelector("#nl-canvas"), f = b.getContext("2d"), v = b.width, M = b.height;
      f.clearRect(0, 0, v, M);
      const T = Math.max(...m.map(Math.abs)), O = Math.max(...P.map(Math.abs)), q = (v - 40) / (2 * T), L = (M - 40) / (2 * O), C = v / 2, A = M / 2;
      f.strokeStyle = "#444", f.lineWidth = 1, f.beginPath(), f.moveTo(20, A), f.lineTo(v - 20, A), f.stroke(), f.beginPath(), f.moveTo(C, 20), f.lineTo(C, M - 20), f.stroke(), f.fillStyle = "#888", f.font = "10px monospace", f.textAlign = "center", f.fillText("\u03B5 (strain)", v - 40, A - 5), f.fillText("\u03C3 (stress)", C + 30, 15), f.fillText(`\xB1${(T * 100).toFixed(1)}%`, v - 30, A + 12), f.fillText(`\xB1${(O / 1e3).toFixed(0)} MPa`, C + 40, 30), f.strokeStyle = "#00ccff", f.lineWidth = 1.5, f.beginPath();
      for (let U = 0; U < m.length; U++) {
        const ee = C + m[U] * q, Y = A - P[U] * L;
        U === 0 ? f.moveTo(ee, Y) : f.lineTo(ee, Y);
      }
      f.stroke(), f.strokeStyle = "#ff333366", f.lineWidth = 1, f.setLineDash([
        4,
        4
      ]), f.beginPath(), f.moveTo(20, A - o * L), f.lineTo(v - 20, A - o * L), f.stroke(), f.beginPath(), f.moveTo(20, A + o * L), f.lineTo(v - 20, A + o * L), f.stroke(), f.setLineDash([]), f.fillStyle = "#ff6666", f.font = "9px monospace", f.fillText(`Fy = ${(o / 1e3).toFixed(0)} MPa`, v - 50, A - o * L - 5);
      const X = t.querySelector("#nl-info");
      X.textContent = `Steel02: Fy=${(o / 1e3).toFixed(0)} MPa, E\u2080=${(n / 1e6).toFixed(0)} GPa, b=${l}, R\u2080=${s} \u2014 ${i} ciclos, amp=${(c * 100).toFixed(1)}%`;
    }
    function js() {
      var _a, _b, _c, _d;
      const t = document.querySelector(".rpt-overlay");
      if (t) {
        t.remove();
        return;
      }
      const o = e.nodes.val, n = e.elements.val, l = ((_a = e.elementInputs) == null ? void 0 : _a.val) || {}, s = ((_b = e.nodeInputs) == null ? void 0 : _b.val) || {}, c = (_c = e.deformOutputs) == null ? void 0 : _c.val;
      if ((_d = e.analyzeOutputs) == null ? void 0 : _d.val, !o.length || !n.length) {
        alert("No hay modelo cargado");
        return;
      }
      const i = pa({
        nodes: o,
        elements: n,
        nodeInputs: s,
        elementInputs: l,
        deformOutputs: c
      });
      document.body.appendChild(i);
    }
    let bo = null;
    function Ws(t) {
      bo && bo.remove();
      const o = document.createElement("div");
      o.style.cssText = "position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background:#1a1a2e;color:#eee;border:2px solid #00ccff;border-radius:8px;padding:16px;z-index:10001;width:320px;font-family:monospace;font-size:12px;box-shadow:0 4px 20px rgba(0,0,0,0.5);";
      const n = Ao(), l = _o(), s = Object.entries(n).map(([p, a]) => `<option value="${a}">${p}</option>`).join(""), c = Object.entries(l).map(([p, a]) => `<option value="${a}">${p}</option>`).join("");
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
    `, document.body.appendChild(o), bo = o;
      const i = o.querySelector("#asgn-type"), d = o.querySelector("#asgn-params");
      function m() {
        const p = i.value;
        let a = "";
        p === "rect" ? a = `<div style="display:flex;gap:6px;"><label>b(m):<input id="ap-b" type="number" value="0.30" step="0.05" min="0.1" max="2" style="width:70px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label>
                <label>h(m):<input id="ap-h" type="number" value="0.50" step="0.05" min="0.1" max="2" style="width:70px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label></div>` : p === "circ" ? a = '<label>d(m):<input id="ap-d" type="number" value="0.40" step="0.05" min="0.1" max="2" style="width:70px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label>' : p === "W" ? a = `<select id="ap-profile" style="background:#333;color:#fff;border:1px solid #555;padding:3px;width:100%;">${s}</select>` : p === "HSS" ? a = `<select id="ap-profile" style="background:#333;color:#fff;border:1px solid #555;padding:3px;width:100%;">${c}</select>` : p === "I-param" ? a = `<div style="display:grid;grid-template-columns:1fr 1fr;gap:4px;">
          <label>bf(m):<input id="ap-bf" type="number" value="0.20" step="0.01" style="width:65px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label>
          <label>h(m):<input id="ap-hf" type="number" value="0.40" step="0.01" style="width:65px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label>
          <label>tf(m):<input id="ap-tf" type="number" value="0.015" step="0.001" style="width:65px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label>
          <label>tw(m):<input id="ap-tw" type="number" value="0.010" step="0.001" style="width:65px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label>
        </div>` : p === "tubular" && (a = `<div style="display:flex;gap:6px;">
          <label>b(m):<input id="ap-bc" type="number" value="0.20" step="0.01" style="width:60px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label>
          <label>h(m):<input id="ap-hc" type="number" value="0.30" step="0.01" style="width:60px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label>
          <label>t(m):<input id="ap-t" type="number" value="0.008" step="0.001" style="width:60px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label>
        </div>`), d.innerHTML = a;
      }
      i.addEventListener("change", m), m(), o.querySelector("#asgn-close").addEventListener("click", () => {
        o.remove(), bo = null;
      }), o.querySelector("#asgn-apply").addEventListener("click", () => {
        var _a, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l;
        const p = i.value, a = {
          secType: p
        };
        p === "rect" ? (a.b = parseFloat(o.querySelector("#ap-b").value), a.h = parseFloat(o.querySelector("#ap-h").value), a.material = 0) : p === "circ" ? (a.b = parseFloat(o.querySelector("#ap-d").value), a.material = 0) : p === "W" || p === "HSS" ? (a.profileIdx = parseInt(o.querySelector("#ap-profile").value), a.material = 1) : p === "I-param" ? (a.bf = parseFloat(o.querySelector("#ap-bf").value), a.hf = parseFloat(o.querySelector("#ap-hf").value), a.tf = parseFloat(o.querySelector("#ap-tf").value), a.tw = parseFloat(o.querySelector("#ap-tw").value), a.material = 1) : p === "tubular" && (a.bc = parseFloat(o.querySelector("#ap-bc").value), a.hc = parseFloat(o.querySelector("#ap-hc").value), a.t = parseFloat(o.querySelector("#ap-t").value), a.material = 1), a.releaseRotStart = (_a = o.querySelector("#asgn-rel-rot-start")) == null ? void 0 : _a.checked, a.releaseRotEnd = (_b = o.querySelector("#asgn-rel-rot-end")) == null ? void 0 : _b.checked, a.releaseAxial = (_c = o.querySelector("#asgn-rel-axial")) == null ? void 0 : _c.checked, a.releaseTorsion = (_d = o.querySelector("#asgn-rel-torsion")) == null ? void 0 : _d.checked, a.modI = parseFloat((_e2 = o.querySelector("#asgn-mod-i")) == null ? void 0 : _e2.value) || 1, a.modA = parseFloat((_f = o.querySelector("#asgn-mod-a")) == null ? void 0 : _f.value) || 1, a.modJ = parseFloat((_g = o.querySelector("#asgn-mod-j")) == null ? void 0 : _g.value) || 1, a.modAs2 = parseFloat((_h = o.querySelector("#asgn-mod-as2")) == null ? void 0 : _h.value) ?? 1, a.modAs3 = parseFloat((_i = o.querySelector("#asgn-mod-as3")) == null ? void 0 : _i.value) ?? 1, a.modI3 = parseFloat((_j = o.querySelector("#asgn-mod-i3")) == null ? void 0 : _j.value) || 1, a.modMass = parseFloat((_k = o.querySelector("#asgn-mod-mass")) == null ? void 0 : _k.value) || 1, a.modWeight = parseFloat((_l = o.querySelector("#asgn-mod-weight")) == null ? void 0 : _l.value) || 1, t.forEach((u) => he.set(u, {
          ...a
        })), o.remove(), bo = null, Yt(), e.elementInputs.val = {
          ...e.elementInputs.val
        };
      }), o.querySelector("#asgn-remove").addEventListener("click", () => {
        t.forEach((p) => he.delete(p)), o.remove(), bo = null, Yt(), e.elementInputs.val = {
          ...e.elementInputs.val
        };
      });
    }
    let go = null;
    function Js(t) {
      var _a, _b, _c;
      go && go.remove();
      const o = e.nodes.val, n = e.elements.val[t];
      if (!n || n.length !== 2) return;
      const l = o[n[0]], s = o[n[1]], c = Math.abs(s[0] - l[0]), i = Math.abs(s[1] - l[1]), d = Math.abs(s[2] - l[2]), m = i > c && i > d, p = Math.sqrt(c * c + i * i + d * d), a = Re.get(t) ?? 0, u = (_c = (_b = (_a = e.elementInputs) == null ? void 0 : _a.val) == null ? void 0 : _b.sectionShapes) == null ? void 0 : _c.get(t), y = (u == null ? void 0 : u.name) || (u ? `${u.type} ${((u.b ?? 0) * 100).toFixed(0)}x${((u.h ?? 0) * 100).toFixed(0)}` : "\u2014"), $ = document.createElement("div");
      $.style.cssText = "position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background:#1a1a2e;color:#eee;border:2px solid #ff9900;border-radius:8px;padding:16px;z-index:10000;min-width:280px;font-family:monospace;font-size:13px;box-shadow:0 4px 20px rgba(0,0,0,0.5);", $.innerHTML = `
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
        <b style="color:#ff9900;">Elemento ${t}</b>
        <button id="ep-close" style="background:none;border:none;color:#888;cursor:pointer;font-size:18px;">\u2715</button>
      </div>
      <div style="margin-bottom:8px;">
        <span style="color:#888;">Tipo:</span> ${m ? "Columna" : "Viga"} &nbsp;
        <span style="color:#888;">Piso:</span> ${a + 1} &nbsp;
        <span style="color:#888;">L:</span> ${p.toFixed(3)} m
      </div>
      <div style="margin-bottom:8px;">
        <span style="color:#888;">Secci\xF3n:</span> <span style="color:#00ccff;">${y}</span>
      </div>
      <div style="margin-bottom:8px;">
        <span style="color:#888;">Nodos:</span> ${n[0]} \u2192 ${n[1]}
      </div>
      <hr style="border-color:#333;margin:12px 0;">
      <div style="display:flex;gap:8px;">
        <button id="ep-delete" style="flex:1;padding:8px;background:#cc3333;color:#fff;border:none;border-radius:4px;cursor:pointer;font-weight:bold;">\u{1F5D1} Eliminar</button>
        <button id="ep-inspect" style="flex:1;padding:8px;background:#336699;color:#fff;border:none;border-radius:4px;cursor:pointer;font-weight:bold;">\u{1F50D} Inspect</button>
      </div>
    `, document.body.appendChild($), go = $, $.querySelector("#ep-close").addEventListener("click", () => {
        $.remove(), go = null, no();
      }), $.querySelector("#ep-delete").addEventListener("click", () => {
        ae.add(t), $.remove(), go = null, no(), re();
      }), $.querySelector("#ep-inspect").addEventListener("click", () => {
        $.remove(), go = null, ts(t);
      });
    }
    setTimeout(() => {
      const t = document.getElementById("viewer");
      if (!t) return;
      const o = t.querySelector("canvas");
      if (!o) return;
      let n = null, l = null;
      const s = 5;
      function c(m) {
        const p = Je();
        if (!p) return null;
        const a = p.controls.object, u = new ve(m[0], m[1], m[2]);
        u.project(a);
        const y = o.getBoundingClientRect();
        return {
          x: (u.x + 1) / 2 * y.width,
          y: (-u.y + 1) / 2 * y.height
        };
      }
      function i(m, p, a, u, y) {
        const $ = Math.min(m, a), g = Math.max(m, a), r = Math.min(p, u), x = Math.max(p, u), w = e.nodes.val, E = e.elements.val, z = [];
        for (let N = 0; N < E.length; N++) {
          const P = E[N], b = P.map((f) => c(w[f])).filter(Boolean);
          if (b.length !== 0) if (y) b.every((v) => v.x >= $ && v.x <= g && v.y >= r && v.y <= x) && z.push(N);
          else {
            if (b.some((v) => v.x >= $ && v.x <= g && v.y >= r && v.y <= x)) {
              z.push(N);
              continue;
            }
            if (P.length === 2) {
              const v = b[0], M = b[1];
              d(v.x, v.y, M.x, M.y, $, r, g, x) && z.push(N);
            }
          }
        }
        return z;
      }
      function d(m, p, a, u, y, $, g, r) {
        const x = (E, z) => E >= y && E <= g && z >= $ && z <= r;
        if (x(m, p) || x(a, u)) return true;
        const w = (E, z, N, P, b, f, v, M) => {
          const T = (N - E) * (M - f) - (P - z) * (v - b);
          if (Math.abs(T) < 1e-10) return false;
          const O = ((b - E) * (M - f) - (f - z) * (v - b)) / T, q = ((b - E) * (P - z) - (f - z) * (N - E)) / T;
          return O >= 0 && O <= 1 && q >= 0 && q <= 1;
        };
        return w(m, p, a, u, y, $, g, $) || w(m, p, a, u, g, $, g, r) || w(m, p, a, u, y, r, g, r) || w(m, p, a, u, y, $, y, r);
      }
      o.addEventListener("mousedown", (m) => {
        ht && (n = {
          x: m.offsetX,
          y: m.offsetY
        });
      }), o.addEventListener("mousemove", (m) => {
        if (Ct) {
          const a = Je();
          if (!a) return;
          const u = Kn(m.clientX, m.clientY, a.camera, a.rendererElm);
          if (Qe.track && u.snapType === "node" && u.nodeIdx !== null && u.nodeIdx !== oo && Is(u.nodeIdx), Qe.track && oo !== null && u.worldPos && u.snapType !== "node") {
            const y = Ls(u.worldPos, oo);
            y && (u.worldPos = y, u.snapType = "grid");
          }
          if (oo !== null && u.worldPos) {
            const y = e.nodes.val[oo];
            y && Xn(m.clientX, m.clientY, new ve(...y), u.worldPos);
          } else if (Xe !== null && u.worldPos) {
            const y = e.nodes.val[Xe];
            y && Xn(m.clientX, m.clientY, new ve(...y), u.worldPos);
          } else St && (St.remove(), St = null);
          u.nodeIdx, Un(u), o.style.cursor = u.snapType !== "free" ? "pointer" : "crosshair";
          return;
        }
        if (!Et && !ht) return;
        if (ht && n) {
          const a = m.offsetX - n.x, u = m.offsetY - n.y;
          if (Math.abs(a) > s || Math.abs(u) > s) {
            l || (l = document.createElement("div"), l.style.cssText = "position:absolute;pointer-events:none;z-index:9999;", o.parentElement.style.position = "relative", o.parentElement.appendChild(l));
            const y = a > 0, $ = Math.min(n.x, m.offsetX), g = Math.min(n.y, m.offsetY), r = Math.abs(a), x = Math.abs(u);
            l.style.left = $ + "px", l.style.top = g + "px", l.style.width = r + "px", l.style.height = x + "px", l.style.border = y ? "2px solid #3399ff" : "2px dashed #33ff33", l.style.background = y ? "rgba(51,153,255,0.1)" : "rgba(51,255,51,0.1)", o.style.cursor = "crosshair";
            return;
          }
        }
        const p = ln(m);
        if (p >= 0) Qn(p), o.style.cursor = "pointer";
        else {
          if (vt) {
            const a = Je();
            a == null ? void 0 : a.scene.remove(vt), vt = null, a == null ? void 0 : a.render();
          }
          o.style.cursor = ht ? "crosshair" : "";
        }
      }), o.addEventListener("mouseup", (m) => {
        if (ht && n) {
          const p = m.offsetX - n.x, a = m.offsetY - n.y;
          if (Math.abs(p) > s || Math.abs(a) > s) {
            const u = p > 0, y = i(n.x, n.y, m.offsetX, m.offsetY, u);
            m.ctrlKey || m.metaKey || (Ye.clear(), Kt()), y.forEach((g) => {
              Ye.has(g) || (Ye.add(g), nn(g));
            }), Ut();
          }
          l && (l.remove(), l = null), n = null, o.style.cursor = "crosshair";
          return;
        }
        n = null;
      }), o.addEventListener("click", (m) => {
        if (Ct) {
          const p = Je();
          if (!p) return;
          const a = Kn(m.clientX, m.clientY, p.camera, p.rendererElm);
          (a.worldPos || a.nodeIdx !== null) && (qs(a), Un(a));
          return;
        }
        if (ht) {
          if (l) return;
          const p = ln(m), a = m.ctrlKey || m.metaKey;
          if (p >= 0) {
            if (a) if (Ye.has(p)) {
              Ye.delete(p);
              const u = Xt.findIndex((y) => y.__elemIdx === p);
              if (u >= 0) {
                const y = Je();
                y == null ? void 0 : y.scene.remove(Xt[u]), Xt[u].geometry.dispose(), Xt[u].material.dispose(), Xt.splice(u, 1), y == null ? void 0 : y.render();
              }
            } else Ye.add(p), nn(p);
            else Ye.clear(), Kt(), Ye.add(p), nn(p);
            Ut();
          } else a || (Ye.clear(), Kt(), Ut());
          return;
        }
        if (Et) {
          const p = ln(m);
          p >= 0 && (Qn(p), Js(p));
        }
      });
    }, 500), vo.derive(() => {
      var _a;
      e.nodes.val, e.elements.val, (_a = e.nodeInputs) == null ? void 0 : _a.val, Oe();
    }), _e.modal = (t) => {
      var _a, _b;
      if (t === void 0 && (t = !$e), $e = t, (_a = de.querySelector("#cad3d-modal")) == null ? void 0 : _a.classList.toggle("active", $e), $e) {
        const n = Je();
        ((_b = n == null ? void 0 : n.settings) == null ? void 0 : _b.loads) && (it = n.settings.loads.rawVal, n.settings.loads.val = false), Xo(), de.querySelector("#cad3d-mode-prev").style.display = "", de.querySelector("#cad3d-mode-next").style.display = "", de.querySelector("#cad3d-mode-label").style.display = "";
      } else Ko(), de.querySelector("#cad3d-mode-prev").style.display = "none", de.querySelector("#cad3d-mode-next").style.display = "none", de.querySelector("#cad3d-mode-label").style.display = "none", I && I !== "placa-q4" && I !== "placa-3q" && re(), setTimeout(() => {
        var _a2;
        const n = Je();
        ((_a2 = n == null ? void 0 : n.settings) == null ? void 0 : _a2.loads) && it && (n.settings.loads.val = true);
      }, 600);
      console.log(`Modal analysis: ${$e ? "ON" : "OFF"}`);
    }, _e.setMode = (t) => {
      var _a;
      if (!(Fe == null ? void 0 : Fe.modeShapes)) {
        console.error("No modal results");
        return;
      }
      Pe = Math.max(0, Math.min(t, Fe.modeShapes.length - 1));
      const o = Fe.modeShapes[Pe], { extent: n } = Gt();
      let l = 0;
      for (let c = 0; c < et.length; c++) {
        const i = o[c * 6] || 0, d = o[c * 6 + 1] || 0, m = o[c * 6 + 2] || 0;
        l = Math.max(l, Math.sqrt(i * i + d * d + m * m));
      }
      pt = l > 1e-12 ? n * 0.05 / l : 1, Mo();
      const s = de.querySelector("#cad3d-mode-label");
      s && Fe.frequencies && (s.textContent = `Modo ${Pe + 1} \u2014 ${Fe.frequencies[Pe].toFixed(2)} Hz`), console.log(`Modo ${Pe + 1}: f = ${(_a = Fe.frequencies) == null ? void 0 : _a[Pe].toFixed(4)} Hz`);
    }, window.cad = _e, console.log("FEM Studio CLI ready. Type cad.help() for commands."), setTimeout(() => {
      document.body.appendChild(de), document.body.appendChild(jt.div);
    }, 0), setTimeout(() => {
      e.nodes.val.length === 0 && (Ne("edificio"), re(), jn("edificio"));
    }, 100), document.body.appendChild(wa());
    const cs = document.createElement("span");
    return cs.style.display = "none", cs;
  };
});
export {
  __tla,
  xs as a,
  da as c,
  Fa as g
};
