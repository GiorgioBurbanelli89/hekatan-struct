const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./cyclicPushoverCpp-DZAQImEK.js","./plateQ4Cpp-CArWqXeL.js"])))=>i.map(i=>d[i]);
import { _ as Js, p as un, m as Gs, d as Et, s as Vs, __tla as __tla_0 } from "./plateQ4Cpp-CArWqXeL.js";
import { v as vo, P as qo, g as Xs, a as Ks, o as Us } from "./theme-CzzIlc4y.js";
import { V as ke, P as Qt, R as ds, b as ps, B as so, c as Zs, d as fs, e as ko, f as Qs, S as ea, M as ta, g as oa, F as ao, a as Eo, L as mn, h as na, G as sa, A as Ao, i as us, T as ms, j as bn, k as hn, C as aa, l as la } from "./Text-Cin90tvN.js";
import { g as Ro, b as Ho, a as xo } from "./analyze-B0bulnNq.js";
import { g as Ht, __tla as __tla_1 } from "./getMesh-Ch3239Ot.js";
import { n as ro, s as Bt, m as zt, t as $n } from "./pureFunctionsAny.generated-BHh0zpCc.js";
let gs, da, Oa;
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
  function ia(e, g) {
    return e === "kN" && g === "m" ? "kPa" : e === "kN" && g === "mm" || e === "N" && g === "mm" ? "MPa" : e === "N" && g === "m" ? "Pa" : e === "kip" && g === "in" ? "ksi" : e === "kip" && g === "ft" ? "ksf" : `${e}/${g}\xB2`;
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
  function io(e, g) {
    const W = yn.find((Y) => Y.id === e), w = yo.find((Y) => Y.id === g), G = W.toKN, H = w.toM, V = (Y, ge, k) => k / (Math.pow(G, Y) * Math.pow(H, ge));
    let j, B;
    switch (e) {
      case "kN":
        j = 10, B = [
          -100,
          100,
          1
        ];
        break;
      case "tonf":
        j = 1, B = [
          -20,
          20,
          0.5
        ];
        break;
      case "kgf":
        j = 1e3, B = [
          -1e4,
          1e4,
          100
        ];
        break;
      case "kip":
        j = 10, B = [
          -200,
          200,
          5
        ];
        break;
      case "lb":
        j = 5e3, B = [
          -5e4,
          5e4,
          500
        ];
        break;
      case "N":
        j = 1e4, B = [
          -1e5,
          1e5,
          1e3
        ];
        break;
    }
    return {
      id: `${e}-${g}`,
      label: `${W.label}, ${w.label}`,
      force: W.label,
      length: w.label,
      stress: ia(e, g),
      moment: `${W.label}\xB7${w.label}`,
      E: V(1, -2, lo.E),
      G: V(1, -2, lo.G),
      A: V(0, 2, lo.A),
      Iz: V(0, 4, lo.Iz),
      Iy: V(0, 4, lo.Iy),
      J: V(0, 4, lo.J),
      rho: V(1, -4, lo.rho),
      spanRange: w.spanRange,
      heightRange: w.heightRange,
      defaultSpan: w.defaultSpan,
      defaultHeight: w.defaultHeight,
      defaultForce: j,
      forceRange: B,
      galponSpan: w.galponSpan,
      galponLength: w.galponLength,
      galponHeight: w.galponHeight,
      galponRise: w.galponRise
    };
  }
  io("kN", "m"), io("kip", "in");
  function Co() {
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
    const g = e.force, [W, w, G] = e.forceRange;
    return {
      truss: [
        {
          key: "CM",
          val: -e.defaultForce,
          min: W,
          max: 0,
          step: G,
          label: `CM (${g})`
        },
        {
          key: "CV",
          val: 0,
          min: W,
          max: 0,
          step: G,
          label: `CV (${g})`
        }
      ],
      beams: [
        {
          key: "CM",
          val: 0,
          min: W,
          max: 0,
          step: G,
          label: `CM (${g})`
        },
        {
          key: "CV",
          val: 0,
          min: W,
          max: 0,
          step: G,
          label: `CV (${g})`
        },
        {
          key: "Ex",
          val: e.defaultForce,
          min: W,
          max: w,
          step: G,
          label: `Ex sismo (${g})`
        }
      ],
      "3d": [
        {
          key: "CM",
          val: 0,
          min: W,
          max: 0,
          step: G,
          label: `CM (${g})`
        },
        {
          key: "CV",
          val: 0,
          min: W,
          max: 0,
          step: G,
          label: `CV (${g})`
        },
        {
          key: "Ex",
          val: e.defaultForce * 3,
          min: W,
          max: w,
          step: G,
          label: `Ex sismo (${g})`
        }
      ],
      frame: [
        {
          key: "CM",
          val: -e.defaultForce,
          min: W,
          max: 0,
          step: G,
          label: `CM (${g})`
        },
        {
          key: "CV",
          val: 0,
          min: W,
          max: 0,
          step: G,
          label: `CV (${g})`
        },
        {
          key: "Ex",
          val: 0,
          min: W,
          max: w,
          step: G,
          label: `Ex sismo (${g})`
        }
      ],
      edificio: [
        {
          key: "CM",
          val: -e.defaultForce,
          min: W,
          max: 0,
          step: G,
          label: `CM (${g})`
        },
        {
          key: "CV",
          val: 0,
          min: W,
          max: 0,
          step: G,
          label: `CV (${g})`
        },
        {
          key: "Ex",
          val: 0,
          min: W,
          max: w,
          step: G,
          label: `Ex sismo (${g})`
        },
        {
          key: "Ey",
          val: 0,
          min: W,
          max: w,
          step: G,
          label: `Ey sismo (${g})`
        }
      ],
      galpon: [
        {
          key: "CM",
          val: -e.defaultForce,
          min: W,
          max: 0,
          step: G,
          label: `CM (${g})`
        },
        {
          key: "CV",
          val: 0,
          min: W,
          max: 0,
          step: G,
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
          min: W,
          max: 0,
          step: G,
          label: `CM (${g})`
        }
      ],
      "placa-q4": [
        {
          key: "CM",
          val: 0,
          min: W,
          max: 0,
          step: G,
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
  da = function() {
    const e = document.createElement("div");
    e.id = "modal-results", e.style.cssText = `
    position: fixed; bottom: 10px; left: 10px; z-index: 9999;
    background: rgba(0,0,0,0.92); color: #0f0; font-family: monospace;
    font-size: 12px; border-radius: 6px;
    max-width: 720px; overflow-x: auto; pointer-events: auto;
    border: 1px solid #0f03;
  `;
    let g = false;
    function W(w, G) {
      var _a, _b;
      if (!w.frequencies || w.frequencies.length === 0) {
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
      ], V = [
        0,
        0,
        0,
        0,
        0,
        0
      ];
      let j = `<div id="modal-header" style="display:flex; align-items:center; justify-content:space-between; padding:8px 12px; cursor:default;">
  <b style="color:#ff0">\u26A1 MODAL ANALYSIS \u2014 ${G.title}</b>
  <div style="display:flex; gap:4px; margin-left:12px;">
    <button id="modal-copy" style="padding:2px 8px; font-size:10px; cursor:pointer;
      background:#2d6a4f; color:#fff; border:1px solid #40916c; border-radius:3px;" title="Copiar tabla">\u{1F4CB}</button>
    <button id="modal-minimize" style="padding:2px 8px; font-size:10px; cursor:pointer;
      background:#555; color:#fff; border:1px solid #777; border-radius:3px;" title="Minimizar">\u25AC</button>
  </div>
</div>`;
      if (j += '<div id="modal-body" style="padding:0 12px 10px 12px;">', G.properties) for (const B of G.properties) j += `<span style="color:#888">${B}</span>
`;
      j += `<table style="border-collapse:collapse; color:#0f0; font-size:11px; margin-top:4px">
<tr style="color:#ff0; border-bottom:1px solid #ff03">
  <th style="padding:2px 6px">Mode</th>
  <th style="padding:2px 6px">Freq (Hz)</th>
  <th style="padding:2px 6px">Period (s)</th>
  <th style="padding:2px 6px">\u03C9 (rad/s)</th>`;
      for (const B of H) j += `<th style="padding:2px 5px">${B}</th>`;
      if (j += `<th style="padding:2px 5px; color:#0ff">\u03A3Ux</th>
  <th style="padding:2px 5px; color:#0ff">\u03A3Uy</th>
  <th style="padding:2px 5px; color:#0ff">\u03A3Rz</th></tr>`, w.frequencies.forEach((B, Y) => {
        var _a2;
        const ge = B > 0 ? 1 / B : 0, k = B * 2 * Math.PI, K = ((_a2 = w.massParticipation) == null ? void 0 : _a2[Y]) || [
          0,
          0,
          0,
          0,
          0,
          0
        ];
        for (let me = 0; me < 6; me++) V[me] += K[me];
        j += `<tr style="border-bottom:1px solid #fff1">
  <td style="padding:2px 6px; text-align:center">${Y + 1}</td>
  <td style="padding:2px 6px; text-align:right">${B.toFixed(4)}</td>
  <td style="padding:2px 6px; text-align:right">${ge.toFixed(4)}</td>
  <td style="padding:2px 6px; text-align:right">${k.toFixed(2)}</td>`;
        for (let me = 0; me < 6; me++) {
          const pe = (K[me] * 100).toFixed(1), U = K[me] > 0.5 ? "#f00" : K[me] > 0.1 ? "#ff0" : "#0f0";
          j += `<td style="padding:2px 5px; text-align:right; color:${U}">${pe}%</td>`;
        }
        j += `<td style="padding:2px 5px; text-align:right; color:#0ff">${(V[0] * 100).toFixed(1)}%</td>
  <td style="padding:2px 5px; text-align:right; color:#0ff">${(V[1] * 100).toFixed(1)}%</td>
  <td style="padding:2px 5px; text-align:right; color:#0ff">${(V[5] * 100).toFixed(1)}%</td></tr>`;
      }), j += "</table></div>", e.innerHTML = j, g) {
        const B = e.querySelector("#modal-body"), Y = e.querySelector("#modal-minimize");
        B && (B.style.display = "none"), Y && (Y.textContent = "\u25A2", Y.title = "Restaurar");
      }
      (_a = e.querySelector("#modal-minimize")) == null ? void 0 : _a.addEventListener("click", () => {
        g = !g;
        const B = e.querySelector("#modal-body"), Y = e.querySelector("#modal-minimize");
        g ? (B.style.display = "none", Y.textContent = "\u25A2", Y.title = "Restaurar") : (B.style.display = "block", Y.textContent = "\u25AC", Y.title = "Minimizar");
      }), (_b = e.querySelector("#modal-copy")) == null ? void 0 : _b.addEventListener("click", () => {
        const B = [];
        B.push(`Modal Analysis \u2014 ${G.title}`);
        const Y = `Mode  Freq(Hz)  Period(s)  \u03C9(rad/s)  ${H.join("     ")}  \u03A3Ux    \u03A3Uy    \u03A3Rz`;
        B.push(Y), B.push("-".repeat(Y.length));
        const ge = [
          0,
          0,
          0,
          0,
          0,
          0
        ];
        w.frequencies.forEach((K, me) => {
          var _a2;
          const pe = K > 0 ? 1 / K : 0, U = K * 2 * Math.PI, ee = ((_a2 = w.massParticipation) == null ? void 0 : _a2[me]) || [
            0,
            0,
            0,
            0,
            0,
            0
          ];
          for (let ie = 0; ie < 6; ie++) ge[ie] += ee[ie];
          const X = ee.map((ie) => ((ie * 100).toFixed(1) + "%").padStart(6)).join(" ");
          B.push(`${String(me + 1).padStart(4)}  ${K.toFixed(4).padStart(9)}  ${pe.toFixed(4).padStart(9)}  ${U.toFixed(2).padStart(9)}  ${X}  ${(ge[0] * 100).toFixed(1).padStart(5)}%  ${(ge[1] * 100).toFixed(1).padStart(5)}%  ${(ge[5] * 100).toFixed(1).padStart(5)}%`);
        }), navigator.clipboard.writeText(B.join(`
`));
        const k = e.querySelector("#modal-copy");
        k.textContent = "\u2713", setTimeout(() => k.textContent = "\u{1F4CB}", 1500);
      });
    }
    return {
      div: e,
      render: W
    };
  };
  const ue = 64516e-8, z = 416231e-12, O = 0.0254, eo = [
    {
      name: "W6x9",
      type: "W",
      A: 2.68 * ue,
      Iz: 16.4 * z,
      Iy: 2.2 * z,
      J: 0.0405 * z,
      d: 5.9 * O,
      bf: 3.94 * O
    },
    {
      name: "W6x15",
      type: "W",
      A: 4.43 * ue,
      Iz: 29.1 * z,
      Iy: 9.32 * z,
      J: 0.103 * z,
      d: 5.99 * O,
      bf: 5.99 * O
    },
    {
      name: "W6x20",
      type: "W",
      A: 5.87 * ue,
      Iz: 41.4 * z,
      Iy: 13.3 * z,
      J: 0.204 * z,
      d: 6.2 * O,
      bf: 6.02 * O
    },
    {
      name: "W8x10",
      type: "W",
      A: 2.96 * ue,
      Iz: 30.8 * z,
      Iy: 2.09 * z,
      J: 0.0426 * z,
      d: 7.89 * O,
      bf: 3.94 * O
    },
    {
      name: "W8x18",
      type: "W",
      A: 5.26 * ue,
      Iz: 61.9 * z,
      Iy: 7.97 * z,
      J: 0.172 * z,
      d: 8.14 * O,
      bf: 5.25 * O
    },
    {
      name: "W8x24",
      type: "W",
      A: 7.08 * ue,
      Iz: 82.7 * z,
      Iy: 18.3 * z,
      J: 0.346 * z,
      d: 7.93 * O,
      bf: 6.5 * O
    },
    {
      name: "W8x31",
      type: "W",
      A: 9.13 * ue,
      Iz: 110 * z,
      Iy: 37.1 * z,
      J: 0.536 * z,
      d: 8 * O,
      bf: 7.995 * O
    },
    {
      name: "W8x40",
      type: "W",
      A: 11.7 * ue,
      Iz: 146 * z,
      Iy: 49.1 * z,
      J: 0.871 * z,
      d: 8.25 * O,
      bf: 8.07 * O
    },
    {
      name: "W8x48",
      type: "W",
      A: 14.1 * ue,
      Iz: 184 * z,
      Iy: 60.9 * z,
      J: 1.45 * z,
      d: 8.5 * O,
      bf: 8.11 * O
    },
    {
      name: "W8x67",
      type: "W",
      A: 19.7 * ue,
      Iz: 272 * z,
      Iy: 88.6 * z,
      J: 3.54 * z,
      d: 9 * O,
      bf: 8.28 * O
    },
    {
      name: "W10x12",
      type: "W",
      A: 3.54 * ue,
      Iz: 53.8 * z,
      Iy: 2.18 * z,
      J: 0.0547 * z,
      d: 9.87 * O,
      bf: 3.96 * O
    },
    {
      name: "W10x22",
      type: "W",
      A: 6.49 * ue,
      Iz: 118 * z,
      Iy: 11.4 * z,
      J: 0.239 * z,
      d: 10.17 * O,
      bf: 5.75 * O
    },
    {
      name: "W10x33",
      type: "W",
      A: 9.71 * ue,
      Iz: 171 * z,
      Iy: 36.6 * z,
      J: 0.583 * z,
      d: 9.73 * O,
      bf: 7.96 * O
    },
    {
      name: "W10x49",
      type: "W",
      A: 14.4 * ue,
      Iz: 272 * z,
      Iy: 93.4 * z,
      J: 1.39 * z,
      d: 9.98 * O,
      bf: 10 * O
    },
    {
      name: "W10x68",
      type: "W",
      A: 20 * ue,
      Iz: 394 * z,
      Iy: 134 * z,
      J: 3.56 * z,
      d: 10.4 * O,
      bf: 10.13 * O
    },
    {
      name: "W10x100",
      type: "W",
      A: 29.4 * ue,
      Iz: 623 * z,
      Iy: 207 * z,
      J: 10.9 * z,
      d: 11.1 * O,
      bf: 10.34 * O
    },
    {
      name: "W12x14",
      type: "W",
      A: 4.16 * ue,
      Iz: 88.6 * z,
      Iy: 2.36 * z,
      J: 0.0704 * z,
      d: 11.91 * O,
      bf: 3.97 * O
    },
    {
      name: "W12x22",
      type: "W",
      A: 6.48 * ue,
      Iz: 156 * z,
      Iy: 4.66 * z,
      J: 0.293 * z,
      d: 12.31 * O,
      bf: 4.03 * O
    },
    {
      name: "W12x26",
      type: "W",
      A: 7.65 * ue,
      Iz: 204 * z,
      Iy: 17.3 * z,
      J: 0.3 * z,
      d: 12.22 * O,
      bf: 6.49 * O
    },
    {
      name: "W12x40",
      type: "W",
      A: 11.7 * ue,
      Iz: 310 * z,
      Iy: 44.1 * z,
      J: 0.906 * z,
      d: 11.94 * O,
      bf: 8.01 * O
    },
    {
      name: "W12x53",
      type: "W",
      A: 15.6 * ue,
      Iz: 425 * z,
      Iy: 95.8 * z,
      J: 1.58 * z,
      d: 12.06 * O,
      bf: 9.99 * O
    },
    {
      name: "W12x72",
      type: "W",
      A: 21.1 * ue,
      Iz: 597 * z,
      Iy: 195 * z,
      J: 4.05 * z,
      d: 12.25 * O,
      bf: 12.04 * O
    },
    {
      name: "W12x96",
      type: "W",
      A: 28.2 * ue,
      Iz: 833 * z,
      Iy: 270 * z,
      J: 8.44 * z,
      d: 12.71 * O,
      bf: 12.16 * O
    },
    {
      name: "W12x120",
      type: "W",
      A: 35.3 * ue,
      Iz: 1070 * z,
      Iy: 345 * z,
      J: 16 * z,
      d: 13.12 * O,
      bf: 12.32 * O
    },
    {
      name: "W14x22",
      type: "W",
      A: 6.49 * ue,
      Iz: 199 * z,
      Iy: 7 * z,
      J: 0.208 * z,
      d: 13.74 * O,
      bf: 5 * O
    },
    {
      name: "W14x30",
      type: "W",
      A: 8.85 * ue,
      Iz: 291 * z,
      Iy: 19.6 * z,
      J: 0.38 * z,
      d: 13.84 * O,
      bf: 6.73 * O
    },
    {
      name: "W14x38",
      type: "W",
      A: 11.2 * ue,
      Iz: 385 * z,
      Iy: 26.7 * z,
      J: 0.798 * z,
      d: 14.1 * O,
      bf: 6.77 * O
    },
    {
      name: "W14x48",
      type: "W",
      A: 14.1 * ue,
      Iz: 485 * z,
      Iy: 51.4 * z,
      J: 1.45 * z,
      d: 13.79 * O,
      bf: 8.03 * O
    },
    {
      name: "W14x61",
      type: "W",
      A: 17.9 * ue,
      Iz: 640 * z,
      Iy: 107 * z,
      J: 2.19 * z,
      d: 13.89 * O,
      bf: 9.99 * O
    },
    {
      name: "W14x82",
      type: "W",
      A: 24 * ue,
      Iz: 882 * z,
      Iy: 148 * z,
      J: 5.07 * z,
      d: 14.31 * O,
      bf: 10.13 * O
    },
    {
      name: "W14x109",
      type: "W",
      A: 32 * ue,
      Iz: 1240 * z,
      Iy: 447 * z,
      J: 7.12 * z,
      d: 14.32 * O,
      bf: 14.61 * O
    },
    {
      name: "W14x132",
      type: "W",
      A: 38.8 * ue,
      Iz: 1530 * z,
      Iy: 548 * z,
      J: 12.3 * z,
      d: 14.66 * O,
      bf: 14.73 * O
    },
    {
      name: "W14x176",
      type: "W",
      A: 51.8 * ue,
      Iz: 2140 * z,
      Iy: 838 * z,
      J: 23.7 * z,
      d: 15.22 * O,
      bf: 15.65 * O
    },
    {
      name: "W16x26",
      type: "W",
      A: 7.68 * ue,
      Iz: 301 * z,
      Iy: 9.59 * z,
      J: 0.262 * z,
      d: 15.69 * O,
      bf: 5.5 * O
    },
    {
      name: "W16x36",
      type: "W",
      A: 10.6 * ue,
      Iz: 448 * z,
      Iy: 24.5 * z,
      J: 0.545 * z,
      d: 15.86 * O,
      bf: 6.99 * O
    },
    {
      name: "W16x50",
      type: "W",
      A: 14.7 * ue,
      Iz: 659 * z,
      Iy: 37.2 * z,
      J: 1.52 * z,
      d: 16.26 * O,
      bf: 7.07 * O
    },
    {
      name: "W16x67",
      type: "W",
      A: 19.7 * ue,
      Iz: 954 * z,
      Iy: 119 * z,
      J: 2.39 * z,
      d: 16.33 * O,
      bf: 10.24 * O
    },
    {
      name: "W16x89",
      type: "W",
      A: 26.2 * ue,
      Iz: 1300 * z,
      Iy: 163 * z,
      J: 5.45 * z,
      d: 16.75 * O,
      bf: 10.37 * O
    },
    {
      name: "W18x35",
      type: "W",
      A: 10.3 * ue,
      Iz: 510 * z,
      Iy: 15.3 * z,
      J: 0.506 * z,
      d: 17.7 * O,
      bf: 6 * O
    },
    {
      name: "W18x50",
      type: "W",
      A: 14.7 * ue,
      Iz: 800 * z,
      Iy: 40.1 * z,
      J: 1.24 * z,
      d: 17.99 * O,
      bf: 7.5 * O
    },
    {
      name: "W18x71",
      type: "W",
      A: 20.8 * ue,
      Iz: 1170 * z,
      Iy: 60.3 * z,
      J: 3.49 * z,
      d: 18.47 * O,
      bf: 7.64 * O
    },
    {
      name: "W18x97",
      type: "W",
      A: 28.5 * ue,
      Iz: 1750 * z,
      Iy: 201 * z,
      J: 5.86 * z,
      d: 18.59 * O,
      bf: 11.15 * O
    },
    {
      name: "W21x44",
      type: "W",
      A: 13 * ue,
      Iz: 843 * z,
      Iy: 20.7 * z,
      J: 0.77 * z,
      d: 20.66 * O,
      bf: 6.5 * O
    },
    {
      name: "W21x62",
      type: "W",
      A: 18.3 * ue,
      Iz: 1330 * z,
      Iy: 57.5 * z,
      J: 1.83 * z,
      d: 20.99 * O,
      bf: 8.24 * O
    },
    {
      name: "W21x83",
      type: "W",
      A: 24.3 * ue,
      Iz: 1830 * z,
      Iy: 81.4 * z,
      J: 4.34 * z,
      d: 21.43 * O,
      bf: 8.36 * O
    },
    {
      name: "W21x111",
      type: "W",
      A: 32.7 * ue,
      Iz: 2670 * z,
      Iy: 274 * z,
      J: 6.83 * z,
      d: 21.51 * O,
      bf: 12.34 * O
    },
    {
      name: "W24x55",
      type: "W",
      A: 16.2 * ue,
      Iz: 1350 * z,
      Iy: 29.1 * z,
      J: 1.18 * z,
      d: 23.57 * O,
      bf: 7.01 * O
    },
    {
      name: "W24x76",
      type: "W",
      A: 22.4 * ue,
      Iz: 2100 * z,
      Iy: 82.5 * z,
      J: 2.68 * z,
      d: 23.92 * O,
      bf: 8.99 * O
    },
    {
      name: "W24x104",
      type: "W",
      A: 30.6 * ue,
      Iz: 3100 * z,
      Iy: 259 * z,
      J: 4.72 * z,
      d: 24.06 * O,
      bf: 12.75 * O
    },
    {
      name: "W24x131",
      type: "W",
      A: 38.5 * ue,
      Iz: 4020 * z,
      Iy: 340 * z,
      J: 9.5 * z,
      d: 24.48 * O,
      bf: 12.86 * O
    },
    {
      name: "W24x146",
      type: "W",
      A: 43 * ue,
      Iz: 4580 * z,
      Iy: 391 * z,
      J: 12.6 * z,
      d: 24.74 * O,
      bf: 12.9 * O
    },
    {
      name: "W24x176",
      type: "W",
      A: 51.7 * ue,
      Iz: 5680 * z,
      Iy: 479 * z,
      J: 21.2 * z,
      d: 25.24 * O,
      bf: 12.9 * O
    },
    {
      name: "W27x84",
      type: "W",
      A: 24.8 * ue,
      Iz: 2850 * z,
      Iy: 106 * z,
      J: 2.81 * z,
      d: 26.71 * O,
      bf: 9.96 * O
    },
    {
      name: "W27x114",
      type: "W",
      A: 33.5 * ue,
      Iz: 4090 * z,
      Iy: 159 * z,
      J: 6.77 * z,
      d: 27.29 * O,
      bf: 10.07 * O
    },
    {
      name: "W30x90",
      type: "W",
      A: 26.4 * ue,
      Iz: 3610 * z,
      Iy: 115 * z,
      J: 3.06 * z,
      d: 29.53 * O,
      bf: 10.4 * O
    },
    {
      name: "W30x116",
      type: "W",
      A: 34.2 * ue,
      Iz: 4930 * z,
      Iy: 164 * z,
      J: 6.43 * z,
      d: 30.01 * O,
      bf: 10.5 * O
    },
    {
      name: "W33x118",
      type: "W",
      A: 34.7 * ue,
      Iz: 5900 * z,
      Iy: 187 * z,
      J: 5.3 * z,
      d: 32.86 * O,
      bf: 11.48 * O
    },
    {
      name: "W36x135",
      type: "W",
      A: 39.7 * ue,
      Iz: 7800 * z,
      Iy: 225 * z,
      J: 7 * z,
      d: 35.55 * O,
      bf: 11.95 * O
    },
    {
      name: "HSS4x4x1/4",
      type: "HSS",
      A: 3.37 * ue,
      Iz: 8.22 * z,
      Iy: 8.22 * z,
      J: 13.4 * z,
      d: 4 * O,
      bf: 4 * O
    },
    {
      name: "HSS4x4x3/8",
      type: "HSS",
      A: 4.78 * ue,
      Iz: 10.7 * z,
      Iy: 10.7 * z,
      J: 17.9 * z,
      d: 4 * O,
      bf: 4 * O
    },
    {
      name: "HSS4x4x1/2",
      type: "HSS",
      A: 6.02 * ue,
      Iz: 12.3 * z,
      Iy: 12.3 * z,
      J: 21 * z,
      d: 4 * O,
      bf: 4 * O
    },
    {
      name: "HSS6x6x1/4",
      type: "HSS",
      A: 5.24 * ue,
      Iz: 30.3 * z,
      Iy: 30.3 * z,
      J: 48.3 * z,
      d: 6 * O,
      bf: 6 * O
    },
    {
      name: "HSS6x6x3/8",
      type: "HSS",
      A: 7.58 * ue,
      Iz: 41.1 * z,
      Iy: 41.1 * z,
      J: 66.9 * z,
      d: 6 * O,
      bf: 6 * O
    },
    {
      name: "HSS6x6x1/2",
      type: "HSS",
      A: 9.74 * ue,
      Iz: 49.6 * z,
      Iy: 49.6 * z,
      J: 82.2 * z,
      d: 6 * O,
      bf: 6 * O
    },
    {
      name: "HSS8x8x1/4",
      type: "HSS",
      A: 7.1 * ue,
      Iz: 70.7 * z,
      Iy: 70.7 * z,
      J: 112 * z,
      d: 8 * O,
      bf: 8 * O
    },
    {
      name: "HSS8x8x3/8",
      type: "HSS",
      A: 10.4 * ue,
      Iz: 98 * z,
      Iy: 98 * z,
      J: 158 * z,
      d: 8 * O,
      bf: 8 * O
    },
    {
      name: "HSS8x8x1/2",
      type: "HSS",
      A: 13.5 * ue,
      Iz: 122 * z,
      Iy: 122 * z,
      J: 199 * z,
      d: 8 * O,
      bf: 8 * O
    },
    {
      name: "HSS10x10x3/8",
      type: "HSS",
      A: 13.2 * ue,
      Iz: 202 * z,
      Iy: 202 * z,
      J: 323 * z,
      d: 10 * O,
      bf: 10 * O
    },
    {
      name: "HSS10x10x1/2",
      type: "HSS",
      A: 17.2 * ue,
      Iz: 254 * z,
      Iy: 254 * z,
      J: 412 * z,
      d: 10 * O,
      bf: 10 * O
    },
    {
      name: "HSS12x12x3/8",
      type: "HSS",
      A: 16 * ue,
      Iz: 355 * z,
      Iy: 355 * z,
      J: 564 * z,
      d: 12 * O,
      bf: 12 * O
    },
    {
      name: "HSS12x12x1/2",
      type: "HSS",
      A: 21 * ue,
      Iz: 452 * z,
      Iy: 452 * z,
      J: 724 * z,
      d: 12 * O,
      bf: 12 * O
    },
    {
      name: "HSS6x4x1/4",
      type: "HSS",
      A: 4.3 * ue,
      Iz: 18 * z,
      Iy: 9.58 * z,
      J: 22.6 * z,
      d: 6 * O,
      bf: 4 * O
    },
    {
      name: "HSS6x4x3/8",
      type: "HSS",
      A: 6.18 * ue,
      Iz: 23.8 * z,
      Iy: 12.3 * z,
      J: 30.3 * z,
      d: 6 * O,
      bf: 4 * O
    },
    {
      name: "HSS8x4x1/4",
      type: "HSS",
      A: 5.24 * ue,
      Iz: 33.6 * z,
      Iy: 11.8 * z,
      J: 33 * z,
      d: 8 * O,
      bf: 4 * O
    },
    {
      name: "HSS8x4x3/8",
      type: "HSS",
      A: 7.58 * ue,
      Iz: 45.1 * z,
      Iy: 15 * z,
      J: 44.5 * z,
      d: 8 * O,
      bf: 4 * O
    },
    {
      name: "HSS8x6x1/4",
      type: "HSS",
      A: 6.17 * ue,
      Iz: 46.1 * z,
      Iy: 28.2 * z,
      J: 61.3 * z,
      d: 8 * O,
      bf: 6 * O
    },
    {
      name: "HSS8x6x3/8",
      type: "HSS",
      A: 8.97 * ue,
      Iz: 63 * z,
      Iy: 37.5 * z,
      J: 84.6 * z,
      d: 8 * O,
      bf: 6 * O
    },
    {
      name: "HSS10x6x3/8",
      type: "HSS",
      A: 10.4 * ue,
      Iz: 103 * z,
      Iy: 47.1 * z,
      J: 115 * z,
      d: 10 * O,
      bf: 6 * O
    },
    {
      name: "HSS12x8x3/8",
      type: "HSS",
      A: 13.2 * ue,
      Iz: 196 * z,
      Iy: 102 * z,
      J: 249 * z,
      d: 12 * O,
      bf: 8 * O
    }
  ];
  function Po() {
    const e = {};
    return eo.forEach((g, W) => {
      g.type === "W" && (e[g.name] = W);
    }), e;
  }
  function _o() {
    const e = {};
    return eo.forEach((g, W) => {
      g.type === "HSS" && (e[g.name] = W);
    }), e;
  }
  function pa(e) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    const { nodes: g, elements: W, elementInputs: w, nodeInputs: G, deformOutputs: H } = e, V = g.length * 6, j = W.length, B = W.filter((U) => U.length === 2).length, Y = W.filter((U) => U.length >= 3).length, ge = document.createElement("div");
    ge.className = "rpt-overlay";
    let k = "";
    k += '<button class="rpt-close" id="rpt-close">\u2715 Close</button>', k += "<h1>Finite Element Analysis \u2014 Step-by-Step Report</h1>", k += '<div class="rpt-subtitle">Complete FEM derivation from element formulation to final results</div>', k += '<hr class="rpt-sep"/>', k += "<h2>1. Input Data</h2>", k += '<table class="rpt-info"><tbody>', k += `<tr><td>Number of nodes</td><td class="val">${g.length}</td></tr>`, k += `<tr><td>Number of elements</td><td class="val">${j} (${B} frames, ${Y} shells)</td></tr>`, k += '<tr><td>DOFs per node</td><td class="val">6 (u<sub>x</sub>, u<sub>y</sub>, u<sub>z</sub>, \u03B8<sub>x</sub>, \u03B8<sub>y</sub>, \u03B8<sub>z</sub>)</td></tr>', k += `<tr><td>Total DOFs</td><td class="val">${V}</td></tr>`, k += "</tbody></table>", k += "<h3>1.1 Node Coordinates</h3>", k += '<table class="rpt-data"><thead><tr><th>Node</th><th>x</th><th>y</th><th>z</th></tr></thead><tbody>', g.forEach((U, ee) => {
      k += `<tr><td>${ee}</td><td>${Be(U[0])}</td><td>${Be(U[1])}</td><td>${Be(U[2])}</td></tr>`;
    }), k += "</tbody></table>", k += "<h3>1.2 Element Connectivity</h3>", k += '<table class="rpt-data"><thead><tr><th>Elem</th><th>Type</th><th>Nodes</th><th>L</th><th>E</th><th>A</th><th>I<sub>z</sub></th><th>I<sub>y</sub></th></tr></thead><tbody>', W.forEach((U, ee) => {
      var _a2, _b2, _c2, _d2;
      const X = U.length === 2, ie = U.map((Ve) => g[Ve]), J = X ? ro(Bt(ie[1], ie[0])) : 0, Te = ((_a2 = w.elasticities) == null ? void 0 : _a2.get(ee)) ?? 0, Ne = ((_b2 = w.areas) == null ? void 0 : _b2.get(ee)) ?? 0, ve = ((_c2 = w.momentsOfInertiaZ) == null ? void 0 : _c2.get(ee)) ?? 0, We = ((_d2 = w.momentsOfInertiaY) == null ? void 0 : _d2.get(ee)) ?? 0;
      k += `<tr><td>${ee}</td><td>${X ? "Frame" : "Shell"}</td><td>${U.join(" \u2192 ")}</td>`, k += `<td>${Be(J)}</td><td>${Be(Te)}</td><td>${Be(Ne)}</td><td>${Be(ve)}</td><td>${Be(We)}</td></tr>`;
    }), k += "</tbody></table>", k += "<h2>2. Element Formulation</h2>", B > 0 && (k += "<h3>2.1 Frame Element (Euler-Bernoulli Beam)</h3>", k += "<p>Each frame element has 2 nodes and 12 DOFs: [u<sub>x</sub>, u<sub>y</sub>, u<sub>z</sub>, \u03B8<sub>x</sub>, \u03B8<sub>y</sub>, \u03B8<sub>z</sub>] per node.</p>", k += "<h4>2.1.1 Shape Functions</h4>", k += "<p><b>Axial</b> (linear interpolation):</p>", k += '<div class="rpt-eq">N\u2081(\u03BE) = 1 \u2212 \u03BE &nbsp;&nbsp;&nbsp; N\u2082(\u03BE) = \u03BE &nbsp;&nbsp;&nbsp; where \u03BE = x/L \u2208 [0, 1]</div>', k += "<p><b>Bending</b> (Hermite cubic polynomials):</p>", k += '<table class="rpt-eq-table"><tbody>', k += '<tr><td class="eq-name">H\u2081(\u03BE)</td><td>= 1 \u2212 3\u03BE\xB2 + 2\u03BE\xB3</td><td class="eq-desc">displacement at node i</td></tr>', k += '<tr><td class="eq-name">H\u2082(\u03BE)</td><td>= L\u03BE(1 \u2212 \u03BE)\xB2</td><td class="eq-desc">rotation at node i</td></tr>', k += '<tr><td class="eq-name">H\u2083(\u03BE)</td><td>= 3\u03BE\xB2 \u2212 2\u03BE\xB3</td><td class="eq-desc">displacement at node j</td></tr>', k += '<tr><td class="eq-name">H\u2084(\u03BE)</td><td>= L\u03BE\xB2(\u03BE \u2212 1)</td><td class="eq-desc">rotation at node j</td></tr>', k += "</tbody></table>", k += ua(), k += "<p><b>Torsion</b> (linear): same as axial.</p>", k += "<h4>2.1.2 Strain-Displacement Matrix B</h4>", k += "<p>The B matrix relates nodal displacements to internal strains:</p>", k += '<div class="rpt-eq">\u03B5<sub>axial</sub> = du/dx = (1/L)\xB7[\u22121, 1]\xB7{u<sub>i</sub>, u<sub>j</sub>}</div>', k += '<div class="rpt-eq">\u03BA<sub>bending</sub> = d\xB2v/dx\xB2 = B<sub>b</sub>\xB7{v<sub>i</sub>, \u03B8<sub>i</sub>, v<sub>j</sub>, \u03B8<sub>j</sub>}</div>', k += '<div class="rpt-eq">B<sub>b</sub>(\u03BE) = (1/L\xB2)\xB7[\u22126+12\u03BE, L(\u22124+6\u03BE), 6\u221212\u03BE, L(\u22122+6\u03BE)]</div>', k += '<div class="rpt-eq">\u03C6\u2032<sub>torsion</sub> = d\u03B8<sub>x</sub>/dx = (1/L)\xB7[\u22121, 1]\xB7{\u03B8<sub>xi</sub>, \u03B8<sub>xj</sub>}</div>', k += "<h4>2.1.3 Constitutive Relations D</h4>", k += '<table class="rpt-eq-table"><tbody>', k += '<tr><td class="eq-name">Axial:</td><td>\u03C3 = E\xB7\u03B5</td><td>\u2192 D<sub>axial</sub> = E\xB7A</td></tr>', k += '<tr><td class="eq-name">Bending Z:</td><td>M<sub>z</sub> = EI<sub>z</sub>\xB7\u03BA</td><td>\u2192 D<sub>bz</sub> = E\xB7I<sub>z</sub></td></tr>', k += '<tr><td class="eq-name">Bending Y:</td><td>M<sub>y</sub> = EI<sub>y</sub>\xB7\u03BA</td><td>\u2192 D<sub>by</sub> = E\xB7I<sub>y</sub></td></tr>', k += '<tr><td class="eq-name">Torsion:</td><td>T = GJ\xB7\u03C6\u2032</td><td>\u2192 D<sub>torsion</sub> = G\xB7J</td></tr>', k += "</tbody></table>", k += "<h4>2.1.4 Local Stiffness Matrix K<sub>local</sub></h4>", k += "<p>Obtained by analytical integration:</p>", k += '<div class="rpt-eq rpt-eq-highlight">K<sub>local</sub> = \u222B\u2080\u1D38 B\u1D40\xB7D\xB7B dx</div>', k += "<p>Result for Euler-Bernoulli beam (12\xD712 symmetric):</p>", k += '<div class="rpt-eq-small">', k += "K[0,0] = EA/L &nbsp;&nbsp; K[1,1] = 12EI<sub>z</sub>/L\xB3 &nbsp;&nbsp; K[2,2] = 12EI<sub>y</sub>/L\xB3 &nbsp;&nbsp; K[3,3] = GJ/L<br/>", k += "K[4,4] = 4EI<sub>y</sub>/L &nbsp;&nbsp; K[5,5] = 4EI<sub>z</sub>/L &nbsp;&nbsp; K[1,5] = 6EI<sub>z</sub>/L\xB2 &nbsp;&nbsp; K[2,4] = \u22126EI<sub>y</sub>/L\xB2", k += "</div>", k += "<h4>2.1.5 Transformation Matrix T</h4>", k += "<p>Direction cosines of element axis:</p>", k += '<div class="rpt-eq">l = (x<sub>j</sub>\u2212x<sub>i</sub>)/L &nbsp;&nbsp; m = (y<sub>j</sub>\u2212y<sub>i</sub>)/L &nbsp;&nbsp; n = (z<sub>j</sub>\u2212z<sub>i</sub>)/L &nbsp;&nbsp; D = \u221A(l\xB2+m\xB2)</div>', k += '<div class="rpt-eq">\u03BB = [l, m, n; \u2212m/D, l/D, 0; \u2212ln/D, \u2212mn/D, D] &nbsp;&nbsp; (3\xD73)</div>', k += '<div class="rpt-eq rpt-eq-highlight">T = I\u2084 \u2297 \u03BB &nbsp;&nbsp; (12\xD712 block-diagonal, Kronecker product)</div>', k += "<p>Special case for vertical elements (n = \xB11): \u03BB uses fixed axes.</p>", k += "<h4>2.1.6 Global Stiffness Matrix</h4>", k += '<div class="rpt-eq rpt-eq-highlight">K<sub>global</sub> = T\u1D40 \xB7 K<sub>local</sub> \xB7 T</div>'), k += "<h2>3. Numerical Results per Element</h2>", k += "<p>For each element, we compute K<sub>local</sub>, T, and K<sub>global</sub> = T\u1D40\xB7K\xB7T with the actual properties:</p>";
    for (let U = 0; U < j; U++) {
      const ee = W[U], X = ee.map((Me) => g[Me]);
      if (!(ee.length === 2)) continue;
      const J = ro(Bt(X[1], X[0])), Te = ((_a = w.elasticities) == null ? void 0 : _a.get(U)) ?? 0, Ne = ((_b = w.areas) == null ? void 0 : _b.get(U)) ?? 0, ve = ((_c = w.momentsOfInertiaZ) == null ? void 0 : _c.get(U)) ?? 0, We = ((_d = w.momentsOfInertiaY) == null ? void 0 : _d.get(U)) ?? 0, Ve = ((_e = w.shearModuli) == null ? void 0 : _e.get(U)) ?? 0, dt = ((_f = w.torsionalConstants) == null ? void 0 : _f.get(U)) ?? 0;
      let pt = null, at = null, Mt = null;
      try {
        pt = Ro(X, w, U), at = Ho(X), Mt = zt($n(at), zt(pt, at));
      } catch {
        continue;
      }
      const Tt = Bt(X[1], X[0]), yt = Tt[0] / J, $t = Tt[1] / J, Dt = Tt[2] / J;
      k += '<div class="rpt-elem-block">', k += `<h3 class="rpt-elem-title" data-toggle="elem${U}">\u25B6 Element ${U} \u2014 Nodes ${ee[0]} \u2192 ${ee[1]}, L = ${Be(J)}</h3>`, k += `<div id="rpt-elem${U}" class="rpt-elem-body" style="display:none">`, k += "<h4>Properties (numerical substitution)</h4>", k += '<div class="rpt-eq-small">', k += `E = ${Be(Te)} &nbsp;&nbsp; A = ${Be(Ne)} &nbsp;&nbsp; I<sub>z</sub> = ${Be(ve)} &nbsp;&nbsp; I<sub>y</sub> = ${Be(We)} &nbsp;&nbsp; G = ${Be(Ve)} &nbsp;&nbsp; J = ${Be(dt)}<br/>`, k += `EA/L = ${Be(Te)}\xB7${Be(Ne)}/${Be(J)} = <b>${Be(Te * Ne / J)}</b><br/>`, k += `12EI<sub>z</sub>/L\xB3 = 12\xB7${Be(Te)}\xB7${Be(ve)}/${Be(J)}\xB3 = <b>${Be(12 * Te * ve / J ** 3)}</b><br/>`, k += `12EI<sub>y</sub>/L\xB3 = 12\xB7${Be(Te)}\xB7${Be(We)}/${Be(J)}\xB3 = <b>${Be(12 * Te * We / J ** 3)}</b><br/>`, k += `GJ/L = ${Be(Ve)}\xB7${Be(dt)}/${Be(J)} = <b>${Be(Ve * dt / J)}</b>`, k += "</div>", k += "<h4>Direction cosines</h4>", k += `<div class="rpt-eq-small">l = ${Oo(yt)}, m = ${Oo($t)}, n = ${Oo(Dt)}, D = ${Oo(Math.sqrt(yt ** 2 + $t ** 2))}</div>`, k += "<h4>K<sub>local</sub> (12\xD712)</h4>", k += gn(pt, 12), k += "<h4>T \u2014 Transformation (12\xD712)</h4>", k += gn(at, 12), k += "<h4>K<sub>global</sub> = T\u1D40 \xB7 K<sub>local</sub> \xB7 T</h4>", k += gn(Mt, 12), k += "<h4>Assembly</h4>", k += `<div class="rpt-eq-small">Global DOFs: node ${ee[0]} \u2192 [${ee[0] * 6}..${ee[0] * 6 + 5}], node ${ee[1]} \u2192 [${ee[1] * 6}..${ee[1] * 6 + 5}]</div>`, k += "</div></div>";
    }
    k += "<h2>4. Global Assembly</h2>", k += `<div class="rpt-eq rpt-eq-highlight">K<sub>total</sub> = \u03A3<sub>e=0</sub><sup>${j - 1}</sup> (T<sub>e</sub>\u1D40 \xB7 k<sub>e</sub> \xB7 T<sub>e</sub>)</div>`, k += "<p>Each element contributes its K<sub>global</sub> to the positions determined by its node DOF indices.</p>", k += ma(W, g.length), k += "<h2>5. Boundary Conditions</h2>";
    const K = [
      "u<sub>x</sub>",
      "u<sub>y</sub>",
      "u<sub>z</sub>",
      "\u03B8<sub>x</sub>",
      "\u03B8<sub>y</sub>",
      "\u03B8<sub>z</sub>"
    ], me = [];
    if (k += "<h3>5.1 Supports (fixed DOFs)</h3>", G.supports && G.supports.size > 0) {
      k += '<table class="rpt-data"><thead><tr><th>Node</th>';
      for (const U of K) k += `<th>${U}</th>`;
      k += "</tr></thead><tbody>", G.supports.forEach((U, ee) => {
        k += `<tr><td>${ee}</td>`, U.forEach((X, ie) => {
          X && me.push(ee * 6 + ie), k += `<td class="${X ? "fixed" : ""}">${X ? "Fixed" : "Free"}</td>`;
        }), k += "</tr>";
      }), k += "</tbody></table>";
    }
    if (k += `<div class="rpt-eq-small">Fixed DOFs: [${me.join(", ")}] \u2192 ${me.length} constraints<br/>`, k += `Free DOFs: ${V} \u2212 ${me.length} = <b>${V - me.length}</b></div>`, k += "<h3>5.2 Applied Loads</h3>", G.loads && G.loads.size > 0) {
      k += '<table class="rpt-data"><thead><tr><th>Node</th>';
      const U = [
        "F<sub>x</sub>",
        "F<sub>y</sub>",
        "F<sub>z</sub>",
        "M<sub>x</sub>",
        "M<sub>y</sub>",
        "M<sub>z</sub>"
      ];
      for (const ee of U) k += `<th>${ee}</th>`;
      k += "</tr></thead><tbody>", G.loads.forEach((ee, X) => {
        k += `<tr><td>${X}</td>`, ee.forEach((ie) => {
          const J = Math.abs(ie) > 1e-10;
          k += `<td class="${J ? "nz" : ""}">${J ? Be(ie) : "0"}</td>`;
        }), k += "</tr>";
      }), k += "</tbody></table>";
    }
    if (k += "<h2>6. Solution</h2>", k += "<p>After removing fixed DOFs, the reduced system is:</p>", k += '<div class="rpt-eq rpt-eq-highlight">K<sub>free</sub> \xB7 u<sub>free</sub> = F<sub>free</sub></div>', k += "<p>Solved using LU decomposition with partial pivoting (sparse matrix).</p>", k += "<h3>6.1 Nodal Displacements</h3>", H == null ? void 0 : H.deformations) {
      k += '<table class="rpt-data"><thead><tr><th>Node</th>';
      for (const U of K) k += `<th>${U}</th>`;
      k += "</tr></thead><tbody>", H.deformations.forEach((U, ee) => {
        k += `<tr><td>${ee}</td>`, U.forEach((X) => {
          const ie = Math.abs(X) > 1e-10;
          k += `<td class="${ie ? "nz" : ""}">${Be(X, 6)}</td>`;
        }), k += "</tr>";
      }), k += "</tbody></table>";
    }
    if (k += "<h3>6.2 Reactions</h3>", k += '<div class="rpt-eq">R = K<sub>total</sub> \xB7 u (extract at fixed DOFs)</div>', H == null ? void 0 : H.reactions) {
      k += '<table class="rpt-data"><thead><tr><th>Node</th>';
      for (const U of K) k += `<th>${U}</th>`;
      k += "</tr></thead><tbody>", H.reactions.forEach((U, ee) => {
        k += `<tr><td>${ee}</td>`, U.forEach((X) => {
          const ie = Math.abs(X) > 1e-10;
          k += `<td class="${ie ? "nz-react" : ""}">${ie ? Be(X, 4) : "0"}</td>`;
        }), k += "</tr>";
      }), k += "</tbody></table>";
    }
    if (k += "<h2>7. Internal Forces</h2>", k += "<p>For each element, transform global displacements to local and multiply by K<sub>local</sub>:</p>", k += '<div class="rpt-eq">u<sub>local</sub> = T \xB7 u<sub>global</sub></div>', k += '<div class="rpt-eq rpt-eq-highlight">f<sub>local</sub> = K<sub>local</sub> \xB7 u<sub>local</sub></div>', H == null ? void 0 : H.deformations) {
      const U = [
        "N",
        "V<sub>y</sub>",
        "V<sub>z</sub>",
        "M<sub>x</sub>",
        "M<sub>y</sub>",
        "M<sub>z</sub>"
      ];
      k += '<table class="rpt-data"><thead><tr><th>Elem</th><th>Nodes</th>';
      for (const ee of U) k += `<th>${ee}<sub>i</sub></th>`;
      for (const ee of U) k += `<th>${ee}<sub>j</sub></th>`;
      k += "</tr></thead><tbody>";
      for (let ee = 0; ee < j; ee++) {
        const X = W[ee];
        if (X.length !== 2) continue;
        const ie = X.map((J) => g[J]);
        try {
          const J = Ro(ie, w, ee), Te = Ho(ie), Ne = [];
          for (const Ve of X) {
            const dt = ((_g = H.deformations) == null ? void 0 : _g.get(Ve)) || [
              0,
              0,
              0,
              0,
              0,
              0
            ];
            Ne.push(...dt);
          }
          const ve = zt(Te, Ne), We = zt(J, ve);
          k += `<tr><td>${ee}</td><td>${X.join("\u2192")}</td>`;
          for (let Ve = 0; Ve < 12; Ve++) {
            const dt = Math.abs(We[Ve]) > 1e-10;
            k += `<td class="${dt ? "nz" : ""}">${Be(We[Ve], 2)}</td>`;
          }
          k += "</tr>";
        } catch {
        }
      }
      k += "</tbody></table>";
    }
    const pe = `
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
    return ge.innerHTML = pe + k, (_h = ge.querySelector("#rpt-close")) == null ? void 0 : _h.addEventListener("click", () => ge.remove()), ge.querySelectorAll("[data-toggle]").forEach((U) => {
      U.addEventListener("click", () => {
        const ee = U.dataset.toggle, X = ge.querySelector(`#rpt-${ee}`);
        if (X) {
          const ie = X.style.display !== "none";
          X.style.display = ie ? "none" : "", U.textContent = U.textContent.replace(/^[▼▶]/, ie ? "\u25B6" : "\u25BC");
        }
      });
    }), ge;
  }
  function Be(e, g = 2) {
    return Math.abs(e) < 1e-10 ? "0" : Math.abs(e) >= 1e7 || Math.abs(e) < 0.01 && e !== 0 ? e.toExponential(g) : e.toFixed(g);
  }
  function Oo(e) {
    return Math.abs(e) < 1e-10 ? "0" : e.toFixed(4);
  }
  function gn(e, g) {
    var _a;
    const W = Math.min(g, 12);
    let w = '<div style="overflow-x:auto"><table class="rpt-mtx">';
    for (let G = 0; G < W; G++) {
      w += "<tr>";
      for (let H = 0; H < W; H++) {
        const V = ((_a = e[G]) == null ? void 0 : _a[H]) ?? 0, j = Math.abs(V) < 1e-10;
        w += `<td class="${j ? "z" : ""} ${G === H && !j ? "diag" : ""}">${j ? "0" : fa(V)}</td>`;
      }
      w += "</tr>";
    }
    return w += "</table>", g > W && (w += `<div style="color:#888;font-size:9pt">(showing ${W}\xD7${W} of ${g}\xD7${g})</div>`), w += "</div>", w;
  }
  function fa(e) {
    return Math.abs(e) >= 1e6 || Math.abs(e) < 0.01 && e !== 0 ? e.toExponential(1) : Math.abs(e) >= 100 ? e.toFixed(0) : e.toFixed(2);
  }
  function ua() {
    const V = [
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
    let j = '<svg viewBox="0 0 600 180" style="width:100%;max-width:600px;border:1px solid #ddd;border-radius:4px;margin:8px 0;background:#fafafa">';
    j += `<line x1="30" y1="${180 / 2}" x2="570" y2="${180 / 2}" stroke="#ccc" stroke-width="1"/>`, j += '<line x1="30" y1="20" x2="30" y2="160" stroke="#ccc" stroke-width="1"/>', j += `<text x="${600 / 2}" y="175" fill="#888" font-size="10" text-anchor="middle" font-family="sans-serif">\u03BE (0 \u2192 1)</text>`, j += `<text x="25" y="${180 / 2 - 60 - 5}" fill="#888" font-size="9" text-anchor="end" font-family="sans-serif">1</text>`, j += `<text x="25" y="${180 / 2 + 4}" fill="#888" font-size="9" text-anchor="end" font-family="sans-serif">0</text>`;
    for (const B of V) {
      let Y = "";
      for (let me = 0; me <= 80; me++) {
        const pe = me / 80, U = 30 + pe * 540, ee = 180 / 2 - B.fn(pe) * 60;
        Y += (me === 0 ? "M" : "L") + `${U.toFixed(1)},${ee.toFixed(1)}`;
      }
      j += `<path d="${Y}" fill="none" stroke="${B.color}" stroke-width="2.5"/>`;
      const ge = 0.75, k = 30 + ge * 540 + 8, K = 180 / 2 - B.fn(ge) * 60 - 6;
      j += `<text x="${k}" y="${K}" fill="${B.color}" font-size="11" font-weight="bold" font-family="sans-serif">${B.name}</text>`;
    }
    return j += "</svg>", j;
  }
  function ma(e, g) {
    const W = g * 6, w = Math.min(W, 30);
    let G = "<p>Assembly contribution map (number = how many elements contribute to each K<sub>total</sub> entry):</p>";
    G += '<div style="overflow-x:auto"><table class="rpt-assembly-map">', G += "<tr><td></td>";
    for (let V = 0; V < w; V++) G += `<td style="color:#003366;font-weight:bold;font-size:7px">${V}</td>`;
    G += "</tr>";
    const H = Array.from({
      length: w
    }, () => Array(w).fill(0));
    for (let V = 0; V < e.length; V++) {
      const j = e[V].map((B) => B * 6);
      for (const B of j) for (const Y of j) for (let ge = 0; ge < 6; ge++) for (let k = 0; k < 6; k++) {
        const K = B + ge, me = Y + k;
        K < w && me < w && H[K][me]++;
      }
    }
    for (let V = 0; V < w; V++) {
      G += `<tr><td style="color:#003366;font-weight:bold;font-size:7px">${V}</td>`;
      for (let j = 0; j < w; j++) {
        const B = H[V][j], Y = B === 0 ? "#fff" : B === 1 ? "#e8f0fe" : B === 2 ? "#c6dcf5" : "#a0c4e8", ge = B === 0 ? "" : B.toString();
        G += `<td style="background:${Y};color:#003366">${ge}</td>`;
      }
      G += "</tr>";
    }
    return G += "</table></div>", W > w && (G += `<div style="color:#888;font-size:9pt">(showing ${w}\xD7${w} of ${W}\xD7${W})</div>`), G;
  }
  let xn = false;
  function ba(e) {
    if (xn || window.katex) {
      xn = true, e();
      return;
    }
    const g = document.createElement("link");
    g.rel = "stylesheet", g.href = "https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css", document.head.appendChild(g);
    const W = document.createElement("script");
    W.src = "https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.js", W.onload = () => {
      xn = true, e();
    }, document.head.appendChild(W);
  }
  function bs(e, g = false) {
    try {
      if (window.katex) return window.katex.renderToString(e, {
        displayMode: g,
        throwOnError: false
      });
    } catch {
    }
    return `<code class="er-tex-fallback">${e}</code>`;
  }
  function ha(e, g, W, w, G, H) {
    var _a, _b, _c, _d, _e, _f;
    const V = W[e], j = V.map((at) => g[at]), B = V.length === 2, Y = B ? ro(Bt(j[1], j[0])) : 0, ge = ((_a = w.elasticities) == null ? void 0 : _a.get(e)) ?? 0, k = ((_b = w.areas) == null ? void 0 : _b.get(e)) ?? 0, K = ((_c = w.momentsOfInertiaZ) == null ? void 0 : _c.get(e)) ?? 0, me = ((_d = w.momentsOfInertiaY) == null ? void 0 : _d.get(e)) ?? 0, pe = ((_e = w.shearModuli) == null ? void 0 : _e.get(e)) ?? 0, U = ((_f = w.torsionalConstants) == null ? void 0 : _f.get(e)) ?? 0;
    let ee = null, X = null, ie = null;
    try {
      ee = Ro(j, w, e), X = Ho(j), ie = zt($n(X), zt(ee, X));
    } catch {
    }
    const J = B ? Bt(j[1], j[0]) : [
      0,
      0,
      0
    ], Te = Y > 0 ? J[0] / Y : 0, Ne = Y > 0 ? J[1] / Y : 0, ve = Y > 0 ? J[2] / Y : 0, We = Math.sqrt(Te ** 2 + Ne ** 2), Ve = [];
    if ((G == null ? void 0 : G.deformations) && B) for (const at of V) {
      const Mt = G.deformations.get(at) || [
        0,
        0,
        0,
        0,
        0,
        0
      ];
      Ve.push(...Mt);
    }
    let dt = [], pt = [];
    if (Ve.length === 12 && X && ee) {
      try {
        dt = zt(X, Ve);
      } catch {
        dt = Array(12).fill(0);
      }
      try {
        pt = zt(ee, dt);
      } catch {
        pt = Array(12).fill(0);
      }
    }
    return {
      elemIdx: e,
      elem: V,
      elmNodes: j,
      isFrame: B,
      L: Y,
      E: ge,
      A: k,
      Iz: K,
      Iy: me,
      G: pe,
      J: U,
      kLocal: ee,
      T: X,
      kGlobal: ie,
      l: Te,
      m: Ne,
      n: ve,
      D: We,
      uGlobal: Ve,
      uLocal: dt,
      fLocal: pt,
      dOut: G,
      aOut: H,
      totalNodes: g.length
    };
  }
  function ga(e, g, W, w, G, H) {
    var _a, _b;
    const V = ha(e, g, W, w, G, H), j = document.createElement("div");
    return j.className = "er-panel", j.innerHTML = $a + `
    <div class="er-header">
      <span class="er-badge">Element ${e}</span>
      <span class="er-type">${V.isFrame ? "Frame" : "Shell"} \u2014 Nodes ${V.elem.join(" \u2192 ")} \u2014 L = ${Le(V.L)}</span>
      <button class="er-fullscreen" id="er-fullscreen" title="Pantalla completa">\u26F6</button>
      <button class="er-close" id="er-close">\u2715</button>
    </div>
    <div class="er-tabs">
      <button class="er-tab active" data-tab="tabla">Tabla</button>
      <button class="er-tab" data-tab="math">Matematica Explicada</button>
      <button class="er-tab" data-tab="resumen">Resumen</button>
    </div>
    <div class="er-body" id="er-body-tabla">${xa(V)}</div>
    <div class="er-body" id="er-body-math" style="display:none">${hs(V)}</div>
    <div class="er-body" id="er-body-resumen" style="display:none">${va(V)}</div>
  `, j.querySelectorAll(".er-tab").forEach((B) => {
      B.addEventListener("click", () => {
        j.querySelectorAll(".er-tab").forEach((ge) => ge.classList.remove("active")), B.classList.add("active");
        const Y = B.dataset.tab;
        j.querySelectorAll(".er-body").forEach((ge) => ge.style.display = "none"), j.querySelector(`#er-body-${Y}`).style.display = "";
      });
    }), (_a = j.querySelector("#er-close")) == null ? void 0 : _a.addEventListener("click", () => j.remove()), (_b = j.querySelector("#er-fullscreen")) == null ? void 0 : _b.addEventListener("click", () => {
      const B = j.classList.toggle("er-fullscreen-mode"), Y = j.querySelector("#er-fullscreen");
      Y && (Y.textContent = B ? "\u22A1" : "\u26F6");
    }), setTimeout(() => {
      const B = j.querySelector("#er-sf-canvas");
      B && vn(B);
      const Y = j.querySelector("#er-sf-canvas-math");
      Y && vn(Y);
    }, 50), ba(() => {
      const B = j.querySelector("#er-body-math");
      B && (B.innerHTML = hs(V)), setTimeout(() => {
        const Y = j.querySelector("#er-sf-canvas-math");
        Y && vn(Y);
      }, 50), j.querySelectorAll(".er-deriv-header").forEach((Y) => {
        Y.addEventListener("click", () => {
          const ge = Y.dataset.toggle, k = j.querySelector(`#er-${ge}`);
          k && (k.style.display = k.style.display === "none" ? "" : "none");
        });
      });
    }), j;
  }
  function xa(e) {
    let g = "";
    if (g += '<div class="er-section-title">1. Propiedades</div>', g += '<table class="er-props">', g += `<tr><td>E</td><td>${Le(e.E)}</td><td>A</td><td>${Le(e.A)}</td></tr>`, g += `<tr><td>I<sub>z</sub></td><td>${Le(e.Iz)}</td><td>I<sub>y</sub></td><td>${Le(e.Iy)}</td></tr>`, g += `<tr><td>G</td><td>${Le(e.G)}</td><td>J</td><td>${Le(e.J)}</td></tr>`, g += "</table>", e.kLocal && (g += `<div class="er-section-title">2. K<sub>local</sub> (${e.kLocal.length}\xD7${e.kLocal.length})</div>`, g += zo(e.kLocal)), e.T && (g += '<div class="er-section-title">3. T \u2014 Transformaci\xF3n</div>', g += zo(e.T)), e.kGlobal && (g += '<div class="er-section-title">4. K<sub>global</sub> = T<sup>T</sup>\xB7K\xB7T</div>', g += zo(e.kGlobal)), g += '<div class="er-section-title">5. Desplazamientos</div>', e.uGlobal.length > 0) {
      const W = [
        "u<sub>x</sub>",
        "u<sub>y</sub>",
        "u<sub>z</sub>",
        "\u03B8<sub>x</sub>",
        "\u03B8<sub>y</sub>",
        "\u03B8<sub>z</sub>"
      ];
      for (let w = 0; w < e.elem.length; w++) {
        g += `<div class="er-sub">Nodo ${e.elem[w]}: `;
        for (let G = 0; G < 6; G++) {
          const H = e.uGlobal[w * 6 + G];
          g += `${W[G]}=<span class="${Math.abs(H) > 1e-10 ? "nz" : ""}">${Le(H, 6)}</span> `;
        }
        g += "</div>";
      }
    } else g += '<div class="er-sub">Sin an\xE1lisis</div>';
    if (g += '<div class="er-section-title">6. Fuerzas internas</div>', e.fLocal.length > 0 && e.fLocal.some((W) => W !== 0)) {
      const W = [
        "N",
        "V<sub>y</sub>",
        "V<sub>z</sub>",
        "M<sub>x</sub>",
        "M<sub>y</sub>",
        "M<sub>z</sub>"
      ];
      g += '<table class="er-forces"><tr><th></th>';
      for (const w of W) g += `<th>${w}</th>`;
      g += "</tr>", g += "<tr><td>Nodo i</td>";
      for (let w = 0; w < 6; w++) g += `<td class="${Math.abs(e.fLocal[w]) > 1e-10 ? "nz" : ""}">${Le(e.fLocal[w], 3)}</td>`;
      g += "</tr><tr><td>Nodo j</td>";
      for (let w = 6; w < 12; w++) g += `<td class="${Math.abs(e.fLocal[w]) > 1e-10 ? "nz" : ""}">${Le(e.fLocal[w], 3)}</td>`;
      g += "</tr></table>";
    } else g += '<div class="er-sub">Sin an\xE1lisis</div>';
    return g;
  }
  function hs(e) {
    if (!e.isFrame) return '<div class="er-sub">Shell element math: coming soon</div>';
    let g = "";
    const W = (ge) => bs(ge), w = (ge) => bs(ge, true);
    g += '<div class="er-section-title">1. Geometria del elemento</div>', g += "<p>Viga Euler-Bernoulli con 2 nodos y 6 GDL por nodo:</p>", g += `<div class="er-eq">${w("\\text{DOFs} = [u_x,\\, u_y,\\, u_z,\\, \\theta_x,\\, \\theta_y,\\, \\theta_z] \\quad \\Rightarrow \\quad 12 \\text{ GDL totales}")}</div>`, g += '<div class="er-eq-num">', g += `${W("\\text{Nodo } i")} = (${e.elmNodes[0].map((ge) => Le(ge)).join(", ")})<br/>`, g += `${W("\\text{Nodo } j")} = (${e.elmNodes[1].map((ge) => Le(ge)).join(", ")})<br/>`, g += `${w(`L = \\sqrt{(x_j - x_i)^2 + (y_j - y_i)^2 + (z_j - z_i)^2} = \\mathbf{${Le(e.L)}}`)}`, g += "</div>", g += '<div class="er-section-title">2. Funciones de forma</div>', g += "<p>La viga usa <b>interpolacion lineal</b> para axial/torsion y <b>polinomios cubicos de Hermite</b> para flexion.</p>", g += '<div class="er-subsec">2.1 Axial y Torsion (lineal)</div>', g += `<div class="er-eq">${w("N_1(\\xi) = 1 - \\xi \\qquad N_2(\\xi) = \\xi \\qquad \\text{donde } \\xi = \\frac{x}{L} \\in [0,1]")}</div>`, g += "<p>Primera derivada:</p>", g += `<div class="er-eq">${w("\\frac{dN_1}{d\\xi} = -1 \\qquad \\frac{dN_2}{d\\xi} = 1")}</div>`, g += '<div class="er-subsec">2.2 Flexion (Hermite cubicos)</div>', g += `<p>Las funciones de Hermite garantizan continuidad ${W("C^1")} (desplazamiento y pendiente continuos):</p>`, g += `<div class="er-eq">${w("H_1(\\xi) = 1 - 3\\xi^2 + 2\\xi^3 \\qquad \\text{(desplazamiento nodo } i\\text{)}")}</div>`, g += `<div class="er-eq">${w("H_2(\\xi) = L\\,\\xi\\,(1-\\xi)^2 \\qquad \\text{(rotacion nodo } i\\text{)}")}</div>`, g += `<div class="er-eq">${w("H_3(\\xi) = 3\\xi^2 - 2\\xi^3 \\qquad \\text{(desplazamiento nodo } j\\text{)}")}</div>`, g += `<div class="er-eq">${w("H_4(\\xi) = L\\,\\xi^2(\\xi - 1) \\qquad \\text{(rotacion nodo } j\\text{)}")}</div>`, g += `<div class="er-subsec">Derivadas segunda (curvatura ${W("\\kappa = \\frac{d^2v}{dx^2}")}):</div>`, g += `<div class="er-eq">${w("H_1'' = \\frac{-6}{L^2}(1-2\\xi) \\qquad H_2'' = \\frac{-2}{L}(2-3\\xi)")}</div>`, g += `<div class="er-eq">${w("H_3'' = \\frac{6}{L^2}(1-2\\xi) \\qquad H_4'' = \\frac{-2}{L}(1-3\\xi)")}</div>`, g += '<canvas id="er-sf-canvas-math" width="500" height="250" style="width:100%;border:1px solid var(--fem-border);border-radius:4px;margin:8px 0;"></canvas>', g += '<div class="er-section-title">3. Matriz B (strain-displacement)</div>', g += "<p>La matriz B relaciona desplazamientos nodales con deformaciones internas:</p>", g += `<div class="er-eq">${w("\\boldsymbol{\\varepsilon} = \\mathbf{B} \\cdot \\mathbf{u}")}</div>`, g += '<div class="er-subsec">3.1 Deformacion axial</div>', g += `<div class="er-eq">${w("\\varepsilon_{axial} = \\frac{du}{dx} = \\frac{1}{L} \\begin{bmatrix} -1 & 1 \\end{bmatrix} \\begin{Bmatrix} u_i \\\\ u_j \\end{Bmatrix}")}</div>`, g += `<div class="er-subsec">3.2 Curvatura por flexion (plano XY \u2192 ${W("I_z")})</div>`, g += `<div class="er-eq">${w("\\kappa_z = \\frac{d^2 v}{dx^2} = \\mathbf{B}_{bz} \\cdot \\begin{Bmatrix} v_i \\\\ \\theta_{zi} \\\\ v_j \\\\ \\theta_{zj} \\end{Bmatrix}")}</div>`, g += `<div class="er-eq">${w("\\mathbf{B}_{bz}(\\xi) = \\frac{1}{L^2} \\begin{bmatrix} H_1'' & H_2'' & H_3'' & H_4'' \\end{bmatrix}")}</div>`, g += `<div class="er-subsec">3.3 Curvatura (plano XZ \u2192 ${W("I_y")})</div>`, g += `<div class="er-eq">${w("\\kappa_y = \\frac{d^2 w}{dx^2} = \\mathbf{B}_{by} \\cdot \\begin{Bmatrix} w_i \\\\ \\theta_{yi} \\\\ w_j \\\\ \\theta_{yj} \\end{Bmatrix}")}</div>`, g += '<div class="er-subsec">3.4 Torsion</div>', g += `<div class="er-eq">${w("\\phi' = \\frac{d\\theta_x}{dx} = \\frac{1}{L} \\begin{bmatrix} -1 & 1 \\end{bmatrix} \\begin{Bmatrix} \\theta_{xi} \\\\ \\theta_{xj} \\end{Bmatrix}")}</div>`, g += '<div class="er-section-title">4. Relaciones constitutivas D</div>', g += "<p>Cada modo de deformacion tiene su rigidez material:</p>", g += `<div class="er-eq">${w(`\\text{Axial: } \\sigma = E \\cdot \\varepsilon \\;\\Rightarrow\\; D_{ax} = EA = ${Le(e.E)} \\times ${Le(e.A)} = \\mathbf{${Le(e.E * e.A)}}`)}</div>`, g += `<div class="er-eq">${w(`\\text{Flex Z: } M_z = EI_z \\cdot \\kappa \\;\\Rightarrow\\; D_{bz} = EI_z = ${Le(e.E)} \\times ${Le(e.Iz)} = \\mathbf{${Le(e.E * e.Iz)}}`)}</div>`, g += `<div class="er-eq">${w(`\\text{Flex Y: } M_y = EI_y \\cdot \\kappa \\;\\Rightarrow\\; D_{by} = EI_y = ${Le(e.E)} \\times ${Le(e.Iy)} = \\mathbf{${Le(e.E * e.Iy)}}`)}</div>`, g += `<div class="er-eq">${w(`\\text{Torsion: } T = GJ \\cdot \\phi' \\;\\Rightarrow\\; D_t = GJ = ${Le(e.G)} \\times ${Le(e.J)} = \\mathbf{${Le(e.G * e.J)}}`)}</div>`, g += `<div class="er-section-title">5. Integracion \u2192 ${W("\\mathbf{K}_{local}")}</div>`, g += "<p>La matriz de rigidez local se obtiene integrando analiticamente:</p>", g += `<div class="er-eq er-eq-main">${w("\\mathbf{K}_{local} = \\int_0^L \\mathbf{B}^T \\cdot \\mathbf{D} \\cdot \\mathbf{B} \\; dx")}</div>`;
    const G = e.E * e.A / e.L, H = e.E * e.Iz / e.L ** 3, V = e.E * e.Iy / e.L ** 3, j = e.G * e.J / e.L;
    if (g += '<div class="er-deriv-block">', g += '<div class="er-deriv-header" data-toggle="deriv-axial">\u{1F4D6} K[0,0] = EA/L \u2014 <i>click para ver derivacion completa</i></div>', g += '<div id="er-deriv-axial" class="er-deriv-body" style="display:none">', g += "<p><b>Paso 1:</b> Funcion de forma axial</p>", g += `<div class="er-eq">${w("u(\\xi) = N_1 \\cdot u_i + N_2 \\cdot u_j = (1-\\xi)\\,u_i + \\xi\\,u_j")}</div>`, g += "<p><b>Paso 2:</b> Derivada (deformacion)</p>", g += `<div class="er-eq">${w("\\varepsilon = \\frac{du}{dx} = \\frac{1}{L}\\frac{du}{d\\xi} = \\frac{1}{L}(-u_i + u_j)")}</div>`, g += `<div class="er-eq">${w("\\mathbf{B}_{ax} = \\frac{1}{L}\\begin{bmatrix} -1 & 1 \\end{bmatrix}")}</div>`, g += `<p><b>Paso 3:</b> Integracion ${W("K = \\int_0^L B^T \\cdot EA \\cdot B \\; dx")}</p>`, g += `<div class="er-eq">${w("K_{ax} = \\int_0^L \\frac{1}{L}\\begin{bmatrix}-1\\\\1\\end{bmatrix} \\cdot EA \\cdot \\frac{1}{L}\\begin{bmatrix}-1 & 1\\end{bmatrix} dx")}</div>`, g += `<div class="er-eq">${w("= \\frac{EA}{L^2} \\begin{bmatrix}1 & -1\\\\-1 & 1\\end{bmatrix} \\int_0^L dx = \\frac{EA}{L^2} \\cdot L \\begin{bmatrix}1 & -1\\\\-1 & 1\\end{bmatrix}")}</div>`, g += `<div class="er-eq er-eq-main">${w(`K_{ax} = \\frac{EA}{L}\\begin{bmatrix}1 & -1\\\\-1 & 1\\end{bmatrix} = \\frac{${Le(e.E)}\\times${Le(e.A)}}{${Le(e.L)}}\\begin{bmatrix}1 & -1\\\\-1 & 1\\end{bmatrix}`)}</div>`, g += `<div class="er-eq">${w(`K[0,0] = K[6,6] = \\frac{EA}{L} = \\mathbf{${Le(G)}}`)}</div>`, g += "</div></div>", g += '<div class="er-deriv-block">', g += '<div class="er-deriv-header" data-toggle="deriv-bend">\u{1F4D6} K[1,1] = 12EI<sub>z</sub>/L\xB3 \u2014 <i>click para ver derivacion completa</i></div>', g += '<div id="er-deriv-bend" class="er-deriv-body" style="display:none">', g += `<p><b>Paso 1:</b> Funcion de forma Hermite para ${W("v(\\xi)")}</p>`, g += `<div class="er-eq">${w("v(\\xi) = H_1 v_i + H_2 \\theta_i + H_3 v_j + H_4 \\theta_j")}</div>`, g += "<p><b>Paso 2:</b> Segunda derivada (curvatura)</p>", g += `<div class="er-eq">${w("\\kappa = \\frac{d^2v}{dx^2} = \\frac{1}{L^2}\\frac{d^2v}{d\\xi^2}")}</div>`, g += `<div class="er-eq">${w("H_1'' = -6+12\\xi, \\quad H_2'' = L(-4+6\\xi), \\quad H_3'' = 6-12\\xi, \\quad H_4'' = L(-2+6\\xi)")}</div>`, g += `<div class="er-eq">${w("\\mathbf{B}_b = \\frac{1}{L^2}\\begin{bmatrix} H_1'' & H_2'' & H_3'' & H_4'' \\end{bmatrix}")}</div>`, g += `<p><b>Paso 3:</b> Integracion para K[1,1] (termino ${W("v_i \\cdot v_i")})</p>`, g += `<div class="er-eq">${w("K[1,1] = \\int_0^L \\frac{(H_1'')^2}{L^4} \\cdot EI_z \\; dx = \\frac{EI_z}{L^4} \\int_0^L (-6+12\\xi)^2 \\; dx")}</div>`, g += `<p>Expandimos: ${W("(-6+12\\xi)^2 = 36 - 144\\xi + 144\\xi^2")}</p>`, g += `<div class="er-eq">${w("\\int_0^L (36-144\\xi+144\\xi^2)\\,dx = 36L - 72L + 48L = 12L")}</div>`, g += `<div class="er-eq er-eq-main">${w(`K[1,1] = \\frac{EI_z}{L^4} \\cdot 12L = \\frac{12EI_z}{L^3} = \\frac{12 \\times ${Le(e.E)} \\times ${Le(e.Iz)}}{${Le(e.L)}^3} = \\mathbf{${Le(12 * H)}}`)}</div>`, g += "</div></div>", g += '<div class="er-deriv-block">', g += '<div class="er-deriv-header" data-toggle="deriv-tors">\u{1F4D6} K[3,3] = GJ/L \u2014 <i>click para ver derivacion</i></div>', g += '<div id="er-deriv-tors" class="er-deriv-body" style="display:none">', g += `<p>Mismo proceso que axial pero con ${W("\\theta_x")} y ${W("GJ")}:</p>`, g += `<div class="er-eq">${w(`K_{torsion} = \\frac{GJ}{L}\\begin{bmatrix}1 & -1\\\\-1 & 1\\end{bmatrix} = \\frac{${Le(e.G)}\\times${Le(e.J)}}{${Le(e.L)}} = \\mathbf{${Le(j)}}`)}</div>`, g += "</div></div>", g += '<div class="er-deriv-block">', g += '<div class="er-deriv-header" data-toggle="deriv-coup">\u{1F4D6} K[1,5] = 6EI<sub>z</sub>/L\xB2 \u2014 <i>acoplamiento corte-momento</i></div>', g += '<div id="er-deriv-coup" class="er-deriv-body" style="display:none">', g += `<p>Termino cruzado ${W("v_i \\cdot \\theta_{zi}")} (acoplamiento corte-momento):</p>`, g += `<div class="er-eq">${w("K[1,5] = \\frac{EI_z}{L^4} \\int_0^L H_1'' \\cdot H_2'' \\; dx")}</div>`, g += `<div class="er-eq">${w("= \\frac{EI_z}{L^4} \\int_0^L (-6+12\\xi) \\cdot L(-4+6\\xi) \\; dx")}</div>`, g += `<div class="er-eq">${w("= \\frac{EI_z}{L^3} \\int_0^L (24-36\\xi-48\\xi+72\\xi^2) \\; dx = \\frac{EI_z}{L^3} \\cdot 6L")}</div>`, g += `<div class="er-eq er-eq-main">${w(`K[1,5] = \\frac{6EI_z}{L^2} = \\mathbf{${Le(6 * e.E * e.Iz / e.L ** 2)}}`)}</div>`, g += "</div></div>", g += '<div class="er-subsec">Resumen de coeficientes:</div>', g += `<div class="er-eq">${w(`\\frac{EA}{L} = \\mathbf{${Le(G)}} \\qquad \\frac{12EI_z}{L^3} = \\mathbf{${Le(12 * H)}} \\qquad \\frac{12EI_y}{L^3} = \\mathbf{${Le(12 * V)}}`)}</div>`, g += `<div class="er-eq">${w(`\\frac{GJ}{L} = \\mathbf{${Le(j)}} \\qquad \\frac{4EI_y}{L} = \\mathbf{${Le(4 * e.E * e.Iy / e.L)}} \\qquad \\frac{4EI_z}{L} = \\mathbf{${Le(4 * e.E * e.Iz / e.L)}}`)}</div>`, g += `<div class="er-eq">${w(`\\frac{6EI_z}{L^2} = \\mathbf{${Le(6 * e.E * e.Iz / e.L ** 2)}} \\qquad \\frac{6EI_y}{L^2} = \\mathbf{${Le(6 * e.E * e.Iy / e.L ** 2)}}`)}</div>`, e.kLocal && (g += `<div class="er-subsec">Resultado: ${W("\\mathbf{K}_{local}")} (12x12)</div>`, g += zo(e.kLocal)), g += '<div class="er-section-title">6. Transformacion de coordenadas</div>', g += "<p>Los cosenos directores del eje del elemento:</p>", g += `<div class="er-eq">${w(`l = \\frac{x_j - x_i}{L} = ${No(e.l)} \\qquad m = \\frac{y_j - y_i}{L} = ${No(e.m)} \\qquad n = \\frac{z_j - z_i}{L} = ${No(e.n)}`)}</div>`, g += `<div class="er-eq">${w(`D = \\sqrt{l^2 + m^2} = ${No(e.D)}`)}</div>`, Math.abs(e.n) > 0.999) {
      g += `<p>Caso especial: elemento vertical (${W(`n \\approx ${e.n > 0 ? "+1" : "-1"}`)}):</p>`;
      const ge = e.n > 0 ? "\\boldsymbol{\\lambda} = \\begin{bmatrix} 0 & 0 & 1 \\\\ 0 & 1 & 0 \\\\ -1 & 0 & 0 \\end{bmatrix}" : "\\boldsymbol{\\lambda} = \\begin{bmatrix} 0 & 0 & -1 \\\\ 0 & 1 & 0 \\\\ 1 & 0 & 0 \\end{bmatrix}";
      g += `<div class="er-eq">${w(ge)}</div>`;
    } else g += `<div class="er-eq">${w("\\boldsymbol{\\lambda} = \\begin{bmatrix} l & m & n \\\\ -m/D & l/D & 0 \\\\ -ln/D & -mn/D & D \\end{bmatrix}")}</div>`;
    g += `<div class="er-eq er-eq-main">${w("\\mathbf{T} = \\mathbf{I}_4 \\otimes \\boldsymbol{\\lambda} \\quad \\text{(Kronecker product} \\rightarrow 12 \\times 12 \\text{ bloque-diagonal)}")}</div>`, g += `<div class="er-section-title">7. ${W("\\mathbf{K}_{global}")} = ${W("\\mathbf{T}^T \\cdot \\mathbf{K}_{local} \\cdot \\mathbf{T}")}</div>`, g += "<p>Transformar la rigidez local al sistema global de coordenadas:</p>", g += `<div class="er-eq er-eq-main">${w("\\mathbf{K}_{global} = \\mathbf{T}^T \\cdot \\mathbf{K}_{local} \\cdot \\mathbf{T}")}</div>`, e.kGlobal && (g += zo(e.kGlobal)), g += '<div class="er-section-title">8. Ensamblaje</div>';
    const B = e.elem[0] * 6, Y = e.elem[1] * 6;
    if (g += `<div class="er-eq">${w(`\\text{Nodo } ${e.elem[0]} \\rightarrow \\text{DOFs } [${B} \\ldots ${B + 5}]`)}</div>`, g += `<div class="er-eq">${w(`\\text{Nodo } ${e.elem[1]} \\rightarrow \\text{DOFs } [${Y} \\ldots ${Y + 5}]`)}</div>`, g += `<div class="er-eq">${w("\\mathbf{K}_{total}[\\text{DOFs}_i, \\text{DOFs}_j] \\mathrel{+}= \\mathbf{K}_{global}[i, j]")}</div>`, g += '<div class="er-section-title">9. Recuperacion de fuerzas internas</div>', g += `<div class="er-eq">${w("\\mathbf{u}_{local} = \\mathbf{T} \\cdot \\mathbf{u}_{global}")}</div>`, g += `<div class="er-eq er-eq-main">${w("\\mathbf{f}_{local} = \\mathbf{K}_{local} \\cdot \\mathbf{u}_{local}")}</div>`, e.fLocal.length > 0 && e.fLocal.some((ge) => ge !== 0)) {
      const ge = [
        "N",
        "V<sub>y</sub>",
        "V<sub>z</sub>",
        "M<sub>x</sub>",
        "M<sub>y</sub>",
        "M<sub>z</sub>"
      ];
      g += '<table class="er-forces"><tr><th></th>';
      for (const k of ge) g += `<th>${k}</th>`;
      g += `</tr><tr><td>i (${e.elem[0]})</td>`;
      for (let k = 0; k < 6; k++) g += `<td class="${Math.abs(e.fLocal[k]) > 1e-10 ? "nz" : ""}">${Le(e.fLocal[k], 3)}</td>`;
      g += `</tr><tr><td>j (${e.elem[1]})</td>`;
      for (let k = 6; k < 12; k++) g += `<td class="${Math.abs(e.fLocal[k]) > 1e-10 ? "nz" : ""}">${Le(e.fLocal[k], 3)}</td>`;
      g += "</tr></table>";
    }
    return g;
  }
  function va(e) {
    let g = "";
    if (g += `<div class="er-section-title">Resumen \u2014 Elemento ${e.elemIdx}</div>`, g += '<table class="er-props">', g += `<tr><td>Tipo</td><td>${e.isFrame ? "Frame (Euler-Bernoulli)" : "Shell"}</td></tr>`, g += `<tr><td>Nodos</td><td>${e.elem.join(" \u2192 ")}</td></tr>`, g += `<tr><td>Longitud</td><td><b>${Le(e.L)}</b></td></tr>`, g += `<tr><td>E</td><td>${Le(e.E)}</td></tr>`, g += `<tr><td>A</td><td>${Le(e.A)}</td></tr>`, g += "</table>", e.uGlobal.length > 0) {
      g += '<div class="er-section-title">Desplazamientos</div>';
      const W = [
        "u<sub>x</sub>",
        "u<sub>y</sub>",
        "u<sub>z</sub>",
        "\u03B8<sub>x</sub>",
        "\u03B8<sub>y</sub>",
        "\u03B8<sub>z</sub>"
      ];
      g += '<table class="er-forces"><tr><th>Nodo</th>';
      for (const w of W) g += `<th>${w}</th>`;
      g += "</tr>";
      for (let w = 0; w < e.elem.length; w++) {
        g += `<tr><td>${e.elem[w]}</td>`;
        for (let G = 0; G < 6; G++) {
          const H = e.uGlobal[w * 6 + G];
          g += `<td class="${Math.abs(H) > 1e-10 ? "nz" : ""}">${Le(H, 6)}</td>`;
        }
        g += "</tr>";
      }
      g += "</table>";
    }
    if (e.fLocal.length > 0 && e.fLocal.some((W) => W !== 0)) {
      g += '<div class="er-section-title">Fuerzas internas</div>';
      const W = [
        "N",
        "V<sub>y</sub>",
        "V<sub>z</sub>",
        "M<sub>x</sub>",
        "M<sub>y</sub>",
        "M<sub>z</sub>"
      ];
      g += '<table class="er-forces"><tr><th></th>';
      for (const w of W) g += `<th>${w}</th>`;
      g += "</tr><tr><td>Nodo i</td>";
      for (let w = 0; w < 6; w++) g += `<td class="${Math.abs(e.fLocal[w]) > 1e-10 ? "nz" : ""}">${Le(e.fLocal[w], 3)}</td>`;
      g += "</tr><tr><td>Nodo j</td>";
      for (let w = 6; w < 12; w++) g += `<td class="${Math.abs(e.fLocal[w]) > 1e-10 ? "nz" : ""}">${Le(e.fLocal[w], 3)}</td>`;
      g += "</tr></table>";
    }
    return g;
  }
  function Le(e, g = 2) {
    return Math.abs(e) < 1e-10 ? "0" : Math.abs(e) >= 1e7 || Math.abs(e) < 0.01 && e !== 0 ? e.toExponential(g) : e.toFixed(g);
  }
  function No(e) {
    return Math.abs(e) < 1e-10 ? "0" : e.toFixed(4);
  }
  function zo(e) {
    var _a;
    const g = e.length, W = Math.min(g, 12);
    let w = '<div style="overflow-x:auto"><table class="er-matrix">';
    for (let G = 0; G < W; G++) {
      w += "<tr>";
      for (let H = 0; H < W; H++) {
        const V = ((_a = e[G]) == null ? void 0 : _a[H]) ?? 0, j = Math.abs(V) < 1e-10;
        w += `<td class="${j ? "z" : ""} ${G === H && !j ? "diag" : ""}">${j ? "0" : ya(V)}</td>`;
      }
      w += "</tr>";
    }
    return w += "</table>", g > W && (w += `<div style="color:var(--fem-label);font-size:9px">(${W}\xD7${W} de ${g}\xD7${g})</div>`), w += "</div>", w;
  }
  function ya(e) {
    return Math.abs(e) >= 1e6 || Math.abs(e) < 0.01 && e !== 0 ? e.toExponential(1) : Math.abs(e) >= 100 ? e.toFixed(0) : e.toFixed(2);
  }
  function vn(e) {
    const g = e.getContext("2d");
    if (!g) return;
    const W = e.width, w = e.height, G = 30, H = W - 2 * G, V = (w - 3 * G) / 2;
    g.fillStyle = getComputedStyle(document.body).getPropertyValue("--fem-bg").trim() || "#111", g.fillRect(0, 0, W, w);
    const j = (B, Y, ge) => {
      g.strokeStyle = "#333", g.lineWidth = 1, g.strokeRect(G, B, H, V), g.strokeStyle = "#444", g.beginPath(), g.moveTo(G, B + V / 2), g.lineTo(G + H, B + V / 2), g.stroke(), g.fillStyle = "#888", g.font = "11px sans-serif", g.fillText(Y, G + 4, B + 14);
      for (const K of ge) {
        g.strokeStyle = K.color, g.lineWidth = 2.5, g.beginPath();
        for (let me = 0; me <= 100; me++) {
          const pe = me / 100, U = G + pe * H, ee = B + V / 2 - K.fn(pe) * (V / 2 * 0.85);
          me === 0 ? g.moveTo(U, ee) : g.lineTo(U, ee);
        }
        g.stroke();
      }
      let k = G + H - 90;
      for (const K of ge) g.fillStyle = K.color, g.font = "bold 10px sans-serif", g.fillText(K.label, k, B + V - 6), k += 36;
      g.fillStyle = "#666", g.font = "9px monospace", g.fillText("0", G, B + V + 12), g.fillText("1", G + H - 6, B + V + 12), g.fillText("\u03BE", G + H / 2, B + V + 12);
    };
    j(G, "Axial (lineal)", [
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
    ]), j(G + V + G, "Flexi\xF3n (Hermite c\xFAbicos)", [
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
</style>`, Io = [
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
  let Bo = false, co = null, Lt = null, ht = null, it = null;
  function wa() {
    it = document.createElement("button"), it.id = "help-tour-btn", it.innerHTML = "?", it.title = "Ayuda interactiva \u2014 Tour guiado", it.style.cssText = `
    position: fixed; bottom: 20px; right: 20px; z-index: 9999999;
    width: 48px; height: 48px; border-radius: 50%;
    background: linear-gradient(135deg, #0066cc, #0099ff);
    color: white; border: 3px solid rgba(255,255,255,0.3);
    font-size: 24px; font-weight: bold; cursor: pointer;
    box-shadow: 0 4px 15px rgba(0,102,204,0.4);
    transition: transform 0.2s, box-shadow 0.2s;
    font-family: 'Arial Nova', sans-serif;
    animation: helpPulse 2s infinite;
  `, it.addEventListener("mouseenter", () => {
      it.style.transform = "scale(1.15)", it.style.boxShadow = "0 6px 20px rgba(0,102,204,0.6)";
    }), it.addEventListener("mouseleave", () => {
      it.style.transform = "scale(1)", it.style.boxShadow = "0 4px 15px rgba(0,102,204,0.4)";
    }), it.addEventListener("click", () => {
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
  `, document.head.appendChild(e), it;
  }
  function Ma() {
    Bo = true, it && (it.innerHTML = "\u2715", it.style.background = "linear-gradient(135deg, #cc3333, #ff4444)", it.style.animation = "none"), co = document.createElement("div"), co.id = "tour-overlay", co.style.cssText = `
    position: fixed; inset: 0; z-index: 9999990;
    pointer-events: none;
  `, document.body.appendChild(co), $o(0);
  }
  function wn() {
    Bo = false, it && (it.innerHTML = "?", it.style.background = "linear-gradient(135deg, #0066cc, #0099ff)", it.style.animation = "helpPulse 2s infinite"), Lt && (Lt.remove(), Lt = null), ht && (ht.remove(), ht = null), co && (co.remove(), co = null);
  }
  function $o(e) {
    var _a, _b;
    if (e >= Io.length) {
      Sa();
      return;
    }
    const g = Io[e], W = document.querySelector(g.selector);
    if (!W) {
      $o(e + 1);
      return;
    }
    W.scrollIntoView({
      behavior: "smooth",
      block: "nearest"
    }), Lt && Lt.remove(), ht && ht.remove();
    const w = W.getBoundingClientRect(), G = window.innerWidth, H = window.innerHeight, V = 320, j = 180;
    Lt = document.createElement("div"), Lt.style.cssText = `
    position: fixed;
    left: ${w.left - 6}px; top: ${w.top - 6}px;
    width: ${w.width + 12}px; height: ${w.height + 12}px;
    border-radius: 8px;
    z-index: 9999991;
    pointer-events: none;
    animation: spotlightPulse 1.5s ease-in-out infinite;
    transition: all 0.3s ease;
  `, document.body.appendChild(Lt);
    const B = G - w.right, Y = w.left, ge = H - w.bottom, k = w.top;
    let K = g.position || "bottom";
    K === "bottom" && ge < j + 20 && (K = "top"), K === "top" && k < j + 20 && (K = "right"), K === "right" && B < V + 20 && (K = "left"), K === "left" && Y < V + 20 && (K = "bottom");
    let me, pe, U = "";
    switch (K) {
      case "bottom":
        me = w.left + w.width / 2 - V / 2, pe = w.bottom + 14, U = "position:absolute;top:-8px;left:50%;transform:translateX(-50%);width:0;height:0;border-left:8px solid transparent;border-right:8px solid transparent;border-bottom:8px solid #0099ff;";
        break;
      case "top":
        me = w.left + w.width / 2 - V / 2, pe = w.top - j - 14, U = "position:absolute;bottom:-8px;left:50%;transform:translateX(-50%);width:0;height:0;border-left:8px solid transparent;border-right:8px solid transparent;border-top:8px solid #0099ff;";
        break;
      case "right":
        me = w.right + 14, pe = w.top + w.height / 2 - j / 2, U = "position:absolute;left:-8px;top:50%;transform:translateY(-50%);width:0;height:0;border-top:8px solid transparent;border-bottom:8px solid transparent;border-right:8px solid #0099ff;";
        break;
      case "left":
        me = w.left - V - 14, pe = w.top + w.height / 2 - j / 2, U = "position:absolute;right:-8px;top:50%;transform:translateY(-50%);width:0;height:0;border-top:8px solid transparent;border-bottom:8px solid transparent;border-left:8px solid #0099ff;";
        break;
    }
    me = Math.max(10, Math.min(me, G - V - 10)), pe = Math.max(10, Math.min(pe, H - j - 10)), ht = document.createElement("div"), ht.style.cssText = `
    position: fixed;
    left: ${me}px; top: ${pe}px;
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
  `, ht.innerHTML = `
    <div style="${U}"></div>
    <div style="display:flex;align-items:center;margin-bottom:8px;">
      <span class="tour-hand">\u{1F446}</span>
      <span style="color:#0099ff;font-weight:bold;font-size:15px;">${g.title}</span>
      <span style="margin-left:auto;color:#666;font-size:11px;">${e + 1}/${Io.length}</span>
    </div>
    <p style="margin:0 0 12px 0;font-size:12px;line-height:1.6;color:#bbb;">${g.description}</p>
    <div style="display:flex;gap:8px;justify-content:flex-end;">
      ${e > 0 ? '<button id="tour-prev" style="padding:5px 14px;background:transparent;color:#888;border:1px solid #444;border-radius:6px;cursor:pointer;font-size:11px;">\u25C0 Anterior</button>' : ""}
      <button id="tour-next" style="padding:5px 18px;background:linear-gradient(135deg,#0066cc,#0099ff);color:white;border:none;border-radius:6px;cursor:pointer;font-size:12px;font-weight:bold;">
        ${e < Io.length - 1 ? "Siguiente \u25B6" : "Finalizar \u2713"}
      </button>
    </div>
    <div style="margin-top:8px;display:flex;gap:3px;justify-content:center;">
      ${Io.map((X, ie) => `<div style="width:${ie === e ? "16px" : "6px"};height:6px;border-radius:3px;background:${ie === e ? "#0099ff" : ie < e ? "#004488" : "#333"};transition:all 0.3s;"></div>`).join("")}
    </div>
  `, document.body.appendChild(ht), (_a = ht.querySelector("#tour-next")) == null ? void 0 : _a.addEventListener("click", () => {
      $o(e + 1);
    }), (_b = ht.querySelector("#tour-prev")) == null ? void 0 : _b.addEventListener("click", () => {
      $o(e - 1);
    });
    const ee = (X) => {
      if (!Bo) {
        document.removeEventListener("keydown", ee);
        return;
      }
      (X.key === "ArrowRight" || X.key === "Enter") && ($o(e + 1), document.removeEventListener("keydown", ee)), X.key === "ArrowLeft" && ($o(Math.max(0, e - 1)), document.removeEventListener("keydown", ee)), X.key === "Escape" && (wn(), document.removeEventListener("keydown", ee));
    };
    document.addEventListener("keydown", ee);
  }
  function Sa() {
    var _a;
    Lt && (Lt.remove(), Lt = null), ht && (ht.remove(), ht = null), ht = document.createElement("div"), ht.style.cssText = `
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
  `, ht.innerHTML = `
    <div style="font-size:48px;margin-bottom:12px;">\u{1F393}</div>
    <h3 style="color:#00cc66;margin:0 0 8px 0;font-size:18px;">Tour Completado</h3>
    <p style="color:#888;font-size:12px;line-height:1.6;margin:0 0 16px 0;">
      Ya conoces las herramientas principales.<br>
      Presiona <b style="color:#0099ff">?</b> en cualquier momento para repetir el tour.<br>
      Usa <b style="color:#0099ff">Inspect</b> en un elemento para ver el analisis FEM completo.
    </p>
    <button id="tour-done" style="padding:8px 24px;background:linear-gradient(135deg,#00aa55,#00cc66);color:white;border:none;border-radius:8px;cursor:pointer;font-size:14px;font-weight:bold;">Entendido</button>
  `, document.body.appendChild(ht), (_a = ht.querySelector("#tour-done")) == null ? void 0 : _a.addEventListener("click", () => wn());
  }
  function ka(e) {
    const g = e.split(/\r?\n/), W = {
      force: "TONF",
      length: "M"
    }, w = [], G = /* @__PURE__ */ new Map(), H = /* @__PURE__ */ new Map(), V = /* @__PURE__ */ new Map(), j = [], B = [], Y = /* @__PURE__ */ new Map(), ge = /* @__PURE__ */ new Map();
    let k = "", K = "";
    for (const Me of g) {
      const Ie = Me.trim();
      if (!Ie || Ie.startsWith("$")) {
        Ie.startsWith("$ ") && (K = Ie.substring(2).trim());
        continue;
      }
      if (K === "CONTROLS") {
        const ce = Ie.match(/UNITS\s+"([^"]+)"\s+"([^"]+)"/);
        ce && (W.force = ce[1], W.length = ce[2]);
        const qe = Ie.match(/TITLE2\s+"([^"]+)"/);
        qe && (k = qe[1]);
      }
      if (K === "STORIES - IN SEQUENCE FROM TOP") {
        const ce = Ie.match(/STORY\s+"([^"]+)"\s+(?:HEIGHT\s+([\d.]+)|ELEV\s+([-\d.]+))/);
        if (ce) {
          const qe = ce[1], N = ce[2] ? parseFloat(ce[2]) : 0, fe = ce[3] ? parseFloat(ce[3]) : void 0;
          w.push({
            name: qe,
            height: N,
            elev: fe ?? 0
          });
        }
      }
      if (K === "MATERIAL PROPERTIES") {
        const ce = Ie.match(/MATERIAL\s+"([^"]+)"\s+(?:TYPE\s+"([^"]+)")?/);
        if (ce) {
          const qe = ce[1];
          G.has(qe) || G.set(qe, {
            type: ce[2] || "",
            E: 0,
            G: 0,
            nu: 0
          });
          const N = G.get(qe);
          ce[2] && (N.type = ce[2]);
          const fe = Ie.match(/\bE\s+([\d.eE+-]+)/);
          fe && (N.E = parseFloat(fe[1]));
          const Fe = Ie.match(/\bU\s+([\d.eE+-]+)/);
          Fe && (N.nu = parseFloat(Fe[1]), N.G = N.E / (2 * (1 + N.nu)));
          const Ee = Ie.match(/\bFY\s+([\d.eE+-]+)/);
          Ee && (N.fy = parseFloat(Ee[1]));
          const Re = Ie.match(/\bFC\s+([\d.eE+-]+)/);
          Re && (N.fc = parseFloat(Re[1]));
          const _e = Ie.match(/WEIGHTPERVOLUME\s+([\d.eE+-]+)/);
          _e && (N.density = parseFloat(_e[1]));
        }
      }
      if (K === "FRAME SECTIONS") {
        const ce = Ie.match(/FRAMESECTION\s+"([^"]+)"/);
        if (ce) {
          const qe = ce[1];
          H.has(qe) || H.set(qe, {
            material: "",
            shape: "",
            D: 0,
            B: 0,
            TF: 0,
            TW: 0
          });
          const N = H.get(qe), fe = Ie.match(/MATERIAL\s+"([^"]+)"/);
          fe && (N.material = fe[1]);
          const Fe = Ie.match(/SHAPE\s+"([^"]+)"/);
          Fe && (N.shape = Fe[1]);
          const Ee = Ie.match(/\bD\s+([\d.eE+-]+)/);
          Ee && (N.D = parseFloat(Ee[1]));
          const Re = Ie.match(/\bB\s+([\d.eE+-]+)/);
          Re && (N.B = parseFloat(Re[1]));
          const _e = Ie.match(/\bTF\s+([\d.eE+-]+)/);
          _e && (N.TF = parseFloat(_e[1]));
          const Ke = Ie.match(/\bTW\s+([\d.eE+-]+)/);
          Ke && (N.TW = parseFloat(Ke[1]));
          const ot = Ie.match(/\bR\s+([\d.eE+-]+)/);
          ot && (N.R = parseFloat(ot[1]));
          const ft = Ie.match(/FILLMATERIAL\s+"([^"]+)"/);
          ft && (N.fillMaterial = ft[1]);
          const rt = Ie.match(/I2MOD\s+([\d.eE+-]+)/);
          rt && (N.modI2 = parseFloat(rt[1]));
          const jt = Ie.match(/I3MOD\s+([\d.eE+-]+)/);
          jt && (N.modI3 = parseFloat(jt[1]));
        }
      }
      if (K === "POINT COORDINATES") {
        const ce = Ie.match(/POINT\s+"([^"]+)"\s+([-\d.eE+]+)\s+([-\d.eE+]+)/);
        ce && V.set(ce[1], [
          parseFloat(ce[2]),
          parseFloat(ce[3])
        ]);
      }
      if (K === "LINE CONNECTIVITIES") {
        const ce = Ie.match(/LINE\s+"([^"]+)"\s+(COLUMN|BEAM|BRACE)\s+"([^"]+)"\s+"([^"]+)"\s+(\d+)/);
        ce && j.push({
          name: ce[1],
          type: ce[2],
          pt1: ce[3],
          pt2: ce[4],
          nStories: parseInt(ce[5])
        });
      }
      if (K === "POINT ASSIGNS") {
        const ce = Ie.match(/POINTASSIGN\s+"([^"]+)"\s+"([^"]+)".*RESTRAINT\s+"([^"]+)"/);
        ce && Y.set(`${ce[1]}@${ce[2]}`, ce[3].split(/\s+/));
      }
      if (K === "LINE ASSIGNS") {
        const ce = Ie.match(/LINEASSIGN\s+"([^"]+)"\s+"([^"]+)".*SECTION\s+"([^"]+)"/);
        ce && ge.set(`${ce[1]}@${ce[2]}`, {
          story: ce[2],
          section: ce[3]
        });
      }
    }
    const me = /* @__PURE__ */ new Map();
    if (w.length > 0) {
      let Me = w[w.length - 1].elev;
      me.set(w[w.length - 1].name, Me);
      for (let ce = w.length - 2; ce >= 0; ce--) Me += w[ce + 1].height, w[ce].elev = Me, me.set(w[ce].name, Me);
      w[0].elev + w[0].height;
      let Ie = w[w.length - 1].elev;
      me.set(w[w.length - 1].name, Ie);
      for (let ce = w.length - 2; ce >= 0; ce--) Ie += w[ce + 1].height, me.set(w[ce].name, Ie), w[ce].elev = Ie;
    }
    const pe = [], U = [], ee = /* @__PURE__ */ new Map(), X = /* @__PURE__ */ new Map();
    for (const Me of j) if (Me.type === "COLUMN") for (const [Ie] of me) {
      const ce = `${Me.name}@${Ie}`;
      if (ge.has(ce)) {
        X.has(Me.pt1) || X.set(Me.pt1, /* @__PURE__ */ new Set()), X.get(Me.pt1).add(Ie);
        const qe = w.findIndex((N) => N.name === Ie);
        qe > 0 && X.get(Me.pt1).add(w[qe - 1].name);
      }
    }
    const ie = (Me, Ie) => `${Me}@${Ie}`, J = /* @__PURE__ */ new Set();
    for (const Me of j) for (const [Ie, ce] of ge) if (Ie.startsWith(Me.name + "@")) {
      const qe = ce.story, N = w.findIndex((fe) => fe.name === qe);
      if (N < 0) continue;
      Me.type === "COLUMN" ? (J.add(ie(Me.pt1, qe)), N > 0 && J.add(ie(Me.pt1, w[N - 1].name)), Me.pt2 !== Me.pt1 && (J.add(ie(Me.pt2, qe)), N > 0 && J.add(ie(Me.pt2, w[N - 1].name)))) : (J.add(ie(Me.pt1, qe)), J.add(ie(Me.pt2, qe)));
    }
    for (const [Me] of Y) J.add(Me);
    for (const Me of J) {
      const [Ie, ce] = Me.split("@"), qe = V.get(Ie), N = me.get(ce);
      if (qe === void 0 || N === void 0) continue;
      const fe = pe.length;
      pe.push([
        qe[0],
        qe[1],
        N
      ]), U.push(Me), ee.set(Me, fe);
    }
    const Te = [], Ne = [], ve = [], We = [], Ve = /* @__PURE__ */ new Map();
    for (const Me of j) for (const [Ie, ce] of ge) {
      if (!Ie.startsWith(Me.name + "@")) continue;
      const qe = ce.story, N = w.findIndex((Ke) => Ke.name === qe);
      if (N < 0) continue;
      let fe, Fe;
      Me.type === "COLUMN" ? (fe = ie(Me.pt1, qe), Fe = N > 0 ? ie(Me.pt1, w[N - 1].name) : ie(Me.pt1, qe), Me.pt2 !== Me.pt1 && (fe = ie(Me.pt1, qe), Fe = ie(Me.pt2, N > 0 ? w[N - 1].name : qe))) : (fe = ie(Me.pt1, qe), Fe = ie(Me.pt2, qe));
      const Ee = ee.get(fe), Re = ee.get(Fe);
      if (Ee === void 0 || Re === void 0 || Ee === Re) continue;
      const _e = Te.length;
      Te.push([
        Ee,
        Re
      ]), Ne.push(Me.name), ve.push(Me.type), We.push(qe), Ve.set(_e, ce.section);
    }
    const dt = /* @__PURE__ */ new Map(), pt = /* @__PURE__ */ new Map(), at = /* @__PURE__ */ new Map(), Mt = /* @__PURE__ */ new Map(), Tt = /* @__PURE__ */ new Map(), yt = /* @__PURE__ */ new Map(), $t = /* @__PURE__ */ new Map();
    for (const [Me, Ie] of Ve) {
      const ce = H.get(Ie);
      if (!ce) continue;
      const qe = G.get(ce.material);
      qe && (dt.set(Me, qe.E), pt.set(Me, qe.G));
      const N = ce.D, fe = ce.B, Fe = ce.TF, Ee = ce.TW;
      let Re = 0, _e = 0, Ke = 0, ot = 0, ft = "rect";
      switch (ce.shape) {
        case "Concrete Rectangular":
          Re = N * fe, _e = fe * N ** 3 / 12, Ke = N * fe ** 3 / 12, ot = fe * N ** 3 * (1 / 3 - 0.21 * (N / fe) * (1 - N ** 4 / (12 * fe ** 4))), ft = "rect";
          break;
        case "Concrete Circle":
          Re = Math.PI * N ** 2 / 4, _e = Ke = Math.PI * N ** 4 / 64, ot = Math.PI * N ** 4 / 32, ft = "circ";
          break;
        case "Steel I/Wide Flange":
          Re = 2 * fe * Fe + (N - 2 * Fe) * Ee, _e = (fe * N ** 3 - (fe - Ee) * (N - 2 * Fe) ** 3) / 12, Ke = (2 * Fe * fe ** 3 + (N - 2 * Fe) * Ee ** 3) / 12, ot = (2 * fe * Fe ** 3 + (N - 2 * Fe) * Ee ** 3) / 3, ft = "I";
          break;
        case "Steel Tube":
          Re = N * fe - (N - 2 * Ee) * (fe - 2 * Ee), _e = (fe * N ** 3 - (fe - 2 * Ee) * (N - 2 * Ee) ** 3) / 12, Ke = (N * fe ** 3 - (N - 2 * Ee) * (fe - 2 * Ee) ** 3) / 12, ot = 2 * Ee * (N - Ee) * (fe - Ee) * ((N - Ee) * (fe - Ee)) / (N - Ee + (fe - Ee)), ft = "HSS";
          break;
        case "Filled Steel Tube":
          Re = N * fe, _e = fe * N ** 3 / 12, Ke = N * fe ** 3 / 12, ot = 2 * Ee * (N - Ee) * (fe - Ee) * ((N - Ee) * (fe - Ee)) / (N - Ee + (fe - Ee)), ft = "CFT";
          break;
        case "Steel Angle": {
          const rt = Fe || Ee;
          Re = rt * (N + fe - rt), _e = rt * (N ** 3 + fe * rt ** 2 + rt ** 2 * (N - rt)) / 12, Ke = rt * (fe ** 3 + N * rt ** 2 + rt ** 2 * (fe - rt)) / 12, ot = (N + fe - rt) * rt ** 3 / 3, ft = "L";
          break;
        }
        case "Steel Channel":
        case "Cold Formed C":
          Re = 2 * fe * Fe + (N - 2 * Fe) * Ee, _e = (Ee * N ** 3 + 2 * fe * Fe * (N - Fe) ** 2) / 12, Ke = (2 * Fe * fe ** 3 + (N - 2 * Fe) * Ee ** 3) / 12, ot = (2 * fe * Fe ** 3 + (N - 2 * Fe) * Ee ** 3) / 3, ft = ce.shape === "Cold Formed C" ? "coldC" : "C";
          break;
        case "Steel Double Channel":
          Re = 2 * (2 * fe * Fe + (N - 2 * Fe) * Ee), _e = 2 * (Ee * N ** 3 + 2 * fe * Fe * (N - Fe) ** 2) / 12, Ke = 2 * (2 * Fe * fe ** 3 + (N - 2 * Fe) * Ee ** 3) / 12, ot = 2 * (2 * fe * Fe ** 3 + (N - 2 * Fe) * Ee ** 3) / 3, ft = "2C";
          break;
        default:
          N > 0 && fe > 0 && (Re = N * fe, _e = fe * N ** 3 / 12, Ke = N * fe ** 3 / 12, ot = Math.min(N, fe) * Math.max(N, fe) ** 3 / 3 * 0.3);
          break;
      }
      ce.modI2 && (Ke *= ce.modI2), ce.modI3 && (_e *= ce.modI3), at.set(Me, Re), Mt.set(Me, _e), Tt.set(Me, Ke), yt.set(Me, ot), $t.set(Me, {
        type: ft,
        b: fe || void 0,
        h: N || void 0,
        d: ft === "circ" || ft === "pipe" ? N : void 0,
        tw: Ee || void 0,
        tf: Fe || void 0,
        r: ce.R,
        name: Ie
      });
    }
    const Dt = /* @__PURE__ */ new Map();
    for (const [Me, Ie] of Y) {
      const ce = ee.get(Me);
      if (ce === void 0) continue;
      const qe = [
        false,
        false,
        false,
        false,
        false,
        false
      ];
      for (const N of Ie) N === "UX" && (qe[0] = true), N === "UY" && (qe[1] = true), N === "UZ" && (qe[2] = true), N === "RX" && (qe[3] = true), N === "RY" && (qe[4] = true), N === "RZ" && (qe[5] = true);
      Dt.set(ce, qe);
    }
    return {
      units: W,
      stories: w.reverse(),
      materials: G,
      frameSections: H,
      nodes: pe,
      nodeNames: U,
      nodeNameToIdx: ee,
      elements: Te,
      elementNames: Ne,
      elementTypes: ve,
      elementStories: We,
      elementSections: Ve,
      nodeInputs: {
        supports: Dt,
        loads: /* @__PURE__ */ new Map()
      },
      elementInputs: {
        elasticities: dt,
        shearModuli: pt,
        areas: at,
        momentsOfInertiaZ: Mt,
        momentsOfInertiaY: Tt,
        torsionalConstants: yt,
        sectionShapes: $t
      },
      sectionShapes: $t,
      info: {
        nNodes: pe.length,
        nFrames: Te.length,
        nAreas: B.length,
        title: k
      }
    };
  }
  function Ea(e) {
    var _a, _b;
    const { nodes: g, elements: W, nodeInputs: w, elementInputs: G, title: H, units: V } = e, j = (V == null ? void 0 : V.force) || "TONF", B = (V == null ? void 0 : V.length) || "M", Y = [];
    Y.push("$ File exported from Awatif FEM Studio"), Y.push(""), Y.push("$ PROGRAM INFORMATION"), Y.push('  PROGRAM  "AWATIF"  VERSION "1.0.0"  '), Y.push(""), Y.push("$ CONTROLS"), Y.push(`  UNITS  "${j}"  "${B}"  "C"  `), H && Y.push(`  TITLE2  "${H}"  `), Y.push("");
    const ge = /* @__PURE__ */ new Set();
    g.forEach((X) => ge.add(Math.round(X[2] * 1e3) / 1e3));
    const k = [
      ...ge
    ].sort((X, ie) => X - ie);
    if (Y.push("$ STORIES - IN SEQUENCE FROM TOP"), k.length > 1) {
      for (let X = k.length - 1; X >= 1; X--) {
        const ie = Math.round((k[X] - k[X - 1]) * 1e3) / 1e3;
        Y.push(`  STORY "Level_${X}"  HEIGHT ${ie} MASTERSTORY "Yes"  `);
      }
      Y.push(`  STORY "Base"  ELEV ${k[0]} `);
    } else Y.push('  STORY "Base"  ELEV 0 ');
    Y.push(""), Y.push("$ MATERIAL PROPERTIES");
    const K = /* @__PURE__ */ new Set();
    (_a = G.elasticities) == null ? void 0 : _a.forEach((X) => K.add(X));
    let me = 0;
    const pe = /* @__PURE__ */ new Map();
    for (const X of K) {
      const J = `Mat_${++me}`;
      pe.set(X, J), Y.push(`  MATERIAL  "${J}"    TYPE "Steel"    WEIGHTPERVOLUME 7.849`), Y.push(`  MATERIAL  "${J}"    SYMTYPE "Isotropic"  E ${X}  U ${0.3}  A 1.17E-05`);
    }
    Y.push(""), Y.push("$ FRAME SECTIONS");
    const U = /* @__PURE__ */ new Map(), ee = /* @__PURE__ */ new Set();
    return W.forEach((X, ie) => {
      var _a2, _b2;
      if (X.length !== 2) return;
      const J = (_a2 = G.sectionShapes) == null ? void 0 : _a2.get(ie), Te = ((_b2 = G.elasticities) == null ? void 0 : _b2.get(ie)) ?? 0, Ne = pe.get(Te) || "Mat_1";
      let ve = (J == null ? void 0 : J.name) || `Sec_${ie}`, We = "";
      if (J) switch (J.type) {
        case "rect":
          ve = J.name || `Rect_${(J.b || 0).toFixed(2)}x${(J.h || 0).toFixed(2)}`, We = `  FRAMESECTION  "${ve}"  MATERIAL "${Ne}"  SHAPE "Concrete Rectangular"  D ${J.h} B ${J.b} `;
          break;
        case "circ":
          ve = J.name || `Circ_D${(J.d || 0).toFixed(2)}`, We = `  FRAMESECTION  "${ve}"  MATERIAL "${Ne}"  SHAPE "Concrete Circle"  D ${J.d} `;
          break;
        case "I":
          ve = J.name || `I_${(J.h || 0).toFixed(3)}`, We = `  FRAMESECTION  "${ve}"  MATERIAL "${Ne}"  SHAPE "Steel I/Wide Flange"  D ${J.h} B ${J.b} TF ${J.tf || 0} TW ${J.tw || 0} `;
          break;
        case "HSS":
          ve = J.name || `HSS_${(J.b || 0).toFixed(3)}x${(J.h || 0).toFixed(3)}`, We = `  FRAMESECTION  "${ve}"  MATERIAL "${Ne}"  SHAPE "Steel Tube"  D ${J.h} B ${J.b} TF ${J.tw || 0} TW ${J.tw || 0} `;
          break;
        case "CFT":
          ve = J.name || `CFT_${(J.b || 0).toFixed(3)}x${(J.h || 0).toFixed(3)}`, We = `  FRAMESECTION  "${ve}"  MATERIAL "${Ne}"  SHAPE "Filled Steel Tube"  D ${J.h} B ${J.b} TF ${J.tw || 0} TW ${J.tw || 0} `;
          break;
        case "L":
          ve = J.name || `L_${(J.h || 0) * 1e3}x${(J.t || 0) * 1e3}`, We = `  FRAMESECTION  "${ve}"  MATERIAL "${Ne}"  SHAPE "Steel Angle"  D ${J.h} B ${J.b || J.h} TF ${J.t || J.tw || 0} TW ${J.t || J.tw || 0} `;
          break;
        case "C":
        case "coldC":
          ve = J.name || `C_${(J.h || 0) * 1e3}x${(J.b || 0) * 1e3}`, We = `  FRAMESECTION  "${ve}"  MATERIAL "${Ne}"  SHAPE "Steel Channel"  D ${J.h} B ${J.b} TF ${J.tf || J.t || 0} TW ${J.tw || J.t || 0} `;
          break;
        case "2C":
          ve = J.name || `2C_${(J.h || 0) * 1e3}`, We = `  FRAMESECTION  "${ve}"  MATERIAL "${Ne}"  SHAPE "Steel Double Channel"  D ${J.h} B ${J.b} TF ${J.tf || 0} TW ${J.tw || 0} DIS ${J.dis || 0} `;
          break;
        case "pipe":
          ve = J.name || `Pipe_D${(J.d || 0) * 1e3}`, We = `  FRAMESECTION  "${ve}"  MATERIAL "${Ne}"  SHAPE "Steel Pipe"  D ${J.d} TW ${J.tw || 0} `;
          break;
        default:
          ve = J.name || `Sec_${ie}`, We = `  FRAMESECTION  "${ve}"  MATERIAL "${Ne}"  SHAPE "Concrete Rectangular"  D 0.5 B 0.3 `;
      }
      else We = `  FRAMESECTION  "${ve}"  MATERIAL "${Ne}"  SHAPE "Concrete Rectangular"  D 0.5 B 0.3 `;
      U.set(ie, ve), ee.has(ve) || (ee.add(ve), Y.push(We));
    }), Y.push(""), Y.push("$ POINT COORDINATES"), g.forEach((X, ie) => {
      Y.push(`  POINT "${ie + 1}"  ${X[0]} ${X[1]} `);
    }), Y.push(""), Y.push("$ LINE CONNECTIVITIES"), W.forEach((X, ie) => {
      if (X.length !== 2) return;
      const J = g[X[0]], Te = g[X[1]], ve = Math.abs(Te[2] - J[2]) > Math.max(Math.abs(Te[0] - J[0]), Math.abs(Te[1] - J[1])) ? "COLUMN" : "BEAM";
      Y.push(`  LINE  "E${ie + 1}"  ${ve}  "${X[0] + 1}"  "${X[1] + 1}"  0`);
    }), Y.push(""), Y.push("$ POINT ASSIGNS"), (_b = w.supports) == null ? void 0 : _b.forEach((X, ie) => {
      const J = [];
      X[0] && J.push("UX"), X[1] && J.push("UY"), X[2] && J.push("UZ"), X[3] && J.push("RX"), X[4] && J.push("RY"), X[5] && J.push("RZ"), J.length > 0 && Y.push(`  POINTASSIGN  "${ie + 1}"  "Base"  RESTRAINT "${J.join(" ")}"  `);
    }), Y.push(""), Y.push("$ LINE ASSIGNS"), W.forEach((X, ie) => {
      if (X.length !== 2) return;
      const J = U.get(ie) || "Sec_1";
      Y.push(`  LINEASSIGN  "E${ie + 1}"  "Base"  SECTION "${J}"  `);
    }), Y.push(""), Y.push("$ LOAD PATTERNS"), Y.push('  LOADPATTERN "Dead"  TYPE "Dead"  SELFWEIGHT 1'), Y.push('  LOADPATTERN "Live"  TYPE "Live"  '), Y.push(""), w.loads && w.loads.size > 0 && (Y.push("$ POINT OBJECT LOADS"), w.loads.forEach((X, ie) => {
      if (X.some((J) => Math.abs(J) > 1e-10)) {
        const [J, Te, Ne, ve, We, Ve] = X;
        Math.abs(J) > 1e-10 && Y.push(`  POINTLOAD  "${ie + 1}"  "Base"  "Dead"  TYPE "FORCE"  FX ${J}`), Math.abs(Te) > 1e-10 && Y.push(`  POINTLOAD  "${ie + 1}"  "Base"  "Dead"  TYPE "FORCE"  FY ${Te}`), Math.abs(Ne) > 1e-10 && Y.push(`  POINTLOAD  "${ie + 1}"  "Base"  "Dead"  TYPE "FORCE"  FZ ${Ne}`);
      }
    }), Y.push("")), Y.push("$ END OF MODEL FILE"), Y.join(`
`);
  }
  function Ia(e) {
    var _a, _b;
    const { nodes: g, elements: W, nodeInputs: w, elementInputs: G } = e, H = [];
    return H.push("# OpenSeesPy model exported from Awatif FEM Studio"), H.push(`# ${g.length} nodes, ${W.length} elements`), H.push(""), H.push("import openseespy.opensees as ops"), H.push(""), H.push("ops.wipe()"), H.push("ops.model('basic', '-ndm', 3, '-ndf', 6)"), H.push(""), H.push("# --- Nodes ---"), g.forEach((V, j) => {
      H.push(`ops.node(${j + 1}, ${V[0]}, ${V[1]}, ${V[2]})`);
    }), H.push(""), H.push("# --- Boundary Conditions ---"), (_a = w.supports) == null ? void 0 : _a.forEach((V, j) => {
      const B = V.map((Y) => Y ? 1 : 0).join(", ");
      H.push(`ops.fix(${j + 1}, ${B})`);
    }), H.push(""), H.push("# --- Geometric Transformations ---"), H.push("ops.geomTransf('Linear', 1, 0.0, 0.0, 1.0)  # beams (vecxz = Z)"), H.push("ops.geomTransf('Linear', 2, -1.0, 0.0, 0.0)  # columns (vecxz = -X)"), H.push(""), H.push("# --- Elements (elasticBeamColumn) ---"), W.forEach((V, j) => {
      var _a2, _b2, _c, _d, _e, _f;
      if (V.length !== 2) return;
      const B = g[V[0]], Y = g[V[1]], k = Math.abs(Y[2] - B[2]) > Math.max(Math.abs(Y[0] - B[0]), Math.abs(Y[1] - B[1])) ? 2 : 1, K = ((_a2 = G.areas) == null ? void 0 : _a2.get(j)) ?? 1, me = ((_b2 = G.elasticities) == null ? void 0 : _b2.get(j)) ?? 2e5, pe = ((_c = G.shearModuli) == null ? void 0 : _c.get(j)) ?? 8e4, U = ((_d = G.torsionalConstants) == null ? void 0 : _d.get(j)) ?? 1, ee = ((_e = G.momentsOfInertiaY) == null ? void 0 : _e.get(j)) ?? 1, X = ((_f = G.momentsOfInertiaZ) == null ? void 0 : _f.get(j)) ?? 1;
      H.push(`ops.element('elasticBeamColumn', ${j + 1}, ${V[0] + 1}, ${V[1] + 1}, ${K}, ${me}, ${pe}, ${U}, ${ee}, ${X}, ${k})`);
    }), H.push(""), w.loads && w.loads.size > 0 && (H.push("# --- Loads ---"), H.push("ops.timeSeries('Linear', 1)"), H.push("ops.pattern('Plain', 1, 1)"), w.loads.forEach((V, j) => {
      const B = V.map((Y) => Y).join(", ");
      H.push(`ops.load(${j + 1}, ${B})`);
    }), H.push("")), H.push("# --- Analysis ---"), H.push("ops.system('BandGeneral')"), H.push("ops.numberer('RCM')"), H.push("ops.constraints('Plain')"), H.push("ops.integrator('LoadControl', 1.0)"), H.push("ops.algorithm('Linear')"), H.push("ops.analysis('Static')"), H.push("ops.analyze(1)"), H.push(""), H.push("# --- Results ---"), H.push('print("\\n=== Displacements ===")'), g.forEach((V, j) => {
      H.push(`print(f"Node {${j + 1}}: {ops.nodeDisp(${j + 1})}")`);
    }), H.push(""), H.push('print("\\n=== Reactions ===")'), H.push("ops.reactions()"), (_b = w.supports) == null ? void 0 : _b.forEach((V, j) => {
      H.push(`print(f"Node {${j + 1}}: {ops.nodeReaction(${j + 1})}")`);
    }), H.join(`
`);
  }
  function za(e) {
    var _a, _b;
    const { nodes: g, elements: W, nodeInputs: w, elementInputs: G } = e, H = [];
    return H.push("# OpenSees Tcl model exported from Awatif FEM Studio"), H.push(`# ${g.length} nodes, ${W.length} elements`), H.push(""), H.push("wipe"), H.push("model basic -ndm 3 -ndf 6"), H.push(""), H.push("# --- Nodes ---"), g.forEach((V, j) => {
      H.push(`node ${j + 1} ${V[0]} ${V[1]} ${V[2]}`);
    }), H.push(""), H.push("# --- Boundary Conditions ---"), (_a = w.supports) == null ? void 0 : _a.forEach((V, j) => {
      const B = V.map((Y) => Y ? 1 : 0).join(" ");
      H.push(`fix ${j + 1} ${B}`);
    }), H.push(""), H.push("# --- Geometric Transformations ---"), H.push("geomTransf Linear 1 0.0 0.0 1.0"), H.push("geomTransf Linear 2 -1.0 0.0 0.0"), H.push(""), H.push("# --- Elements ---"), W.forEach((V, j) => {
      var _a2, _b2, _c, _d, _e, _f;
      if (V.length !== 2) return;
      const B = g[V[0]], Y = g[V[1]], k = Math.abs(Y[2] - B[2]) > Math.max(Math.abs(Y[0] - B[0]), Math.abs(Y[1] - B[1])) ? 2 : 1, K = ((_a2 = G.areas) == null ? void 0 : _a2.get(j)) ?? 1, me = ((_b2 = G.elasticities) == null ? void 0 : _b2.get(j)) ?? 2e5, pe = ((_c = G.shearModuli) == null ? void 0 : _c.get(j)) ?? 8e4, U = ((_d = G.torsionalConstants) == null ? void 0 : _d.get(j)) ?? 1, ee = ((_e = G.momentsOfInertiaY) == null ? void 0 : _e.get(j)) ?? 1, X = ((_f = G.momentsOfInertiaZ) == null ? void 0 : _f.get(j)) ?? 1;
      H.push(`element elasticBeamColumn ${j + 1} ${V[0] + 1} ${V[1] + 1} ${K} ${me} ${pe} ${U} ${ee} ${X} ${k}`);
    }), H.push(""), w.loads && w.loads.size > 0 && (H.push("# --- Loads ---"), H.push("timeSeries Linear 1"), H.push("pattern Plain 1 1 {"), w.loads.forEach((V, j) => {
      const B = V.map((Y) => Y).join(" ");
      H.push(`  load ${j + 1} ${B}`);
    }), H.push("}"), H.push("")), H.push("# --- Analysis ---"), H.push("system BandGeneral"), H.push("numberer RCM"), H.push("constraints Plain"), H.push("integrator LoadControl 1.0"), H.push("algorithm Linear"), H.push("analysis Static"), H.push("analyze 1"), H.push(""), H.push("# --- Results ---"), H.push('puts "\\n=== Displacements ==="'), g.forEach((V, j) => {
      H.push(`puts "Node ${j + 1}: [nodeDisp ${j + 1}]"`);
    }), H.push('puts "\\n=== Reactions ==="'), H.push("reactions"), (_b = w.supports) == null ? void 0 : _b.forEach((V, j) => {
      H.push(`puts "Node ${j + 1}: [nodeReaction ${j + 1}]"`);
    }), H.join(`
`);
  }
  function La(e) {
    const g = [], W = [], w = /* @__PURE__ */ new Map(), G = /* @__PURE__ */ new Map(), H = /* @__PURE__ */ new Map(), V = /* @__PURE__ */ new Map(), j = /* @__PURE__ */ new Map(), B = /* @__PURE__ */ new Map(), Y = /* @__PURE__ */ new Map(), ge = /* @__PURE__ */ new Map(), k = /* @__PURE__ */ new Map(), K = /* @__PURE__ */ new Map();
    for (const me of e.split(/\r?\n/)) {
      const pe = me.trim(), U = pe.match(/ops\.node\(\s*(\d+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)/);
      if (U) {
        const J = parseInt(U[1]), Te = g.length;
        g.push([
          parseFloat(U[2]),
          parseFloat(U[3]),
          parseFloat(U[4])
        ]), k.set(J, Te);
        continue;
      }
      const ee = pe.match(/ops\.fix\(\s*(\d+)\s*,\s*(\d)\s*,\s*(\d)\s*,\s*(\d)\s*,\s*(\d)\s*,\s*(\d)\s*,\s*(\d)/);
      if (ee) {
        const J = parseInt(ee[1]), Te = k.get(J);
        Te !== void 0 && w.set(Te, [
          ee[2] === "1",
          ee[3] === "1",
          ee[4] === "1",
          ee[5] === "1",
          ee[6] === "1",
          ee[7] === "1"
        ]);
        continue;
      }
      const X = pe.match(/ops\.element\(\s*'elasticBeamColumn'\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)/);
      if (X) {
        const J = parseInt(X[1]), Te = k.get(parseInt(X[2])), Ne = k.get(parseInt(X[3]));
        if (Te !== void 0 && Ne !== void 0) {
          const ve = W.length;
          W.push([
            Te,
            Ne
          ]), K.set(J, ve), j.set(ve, parseFloat(X[4])), H.set(ve, parseFloat(X[5])), V.set(ve, parseFloat(X[6])), ge.set(ve, parseFloat(X[7])), B.set(ve, parseFloat(X[8])), Y.set(ve, parseFloat(X[9]));
        }
        continue;
      }
      const ie = pe.match(/ops\.load\(\s*(\d+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)/);
      if (ie) {
        const J = k.get(parseInt(ie[1]));
        J !== void 0 && G.set(J, [
          parseFloat(ie[2]),
          parseFloat(ie[3]),
          parseFloat(ie[4]),
          parseFloat(ie[5]),
          parseFloat(ie[6]),
          parseFloat(ie[7])
        ]);
      }
    }
    return {
      nodes: g,
      elements: W,
      nodeInputs: {
        supports: w,
        loads: G
      },
      elementInputs: {
        elasticities: H,
        shearModuli: V,
        areas: j,
        momentsOfInertiaY: B,
        momentsOfInertiaZ: Y,
        torsionalConstants: ge
      }
    };
  }
  function Ta(e) {
    const g = [], W = [], w = /* @__PURE__ */ new Map(), G = /* @__PURE__ */ new Map(), H = /* @__PURE__ */ new Map(), V = /* @__PURE__ */ new Map(), j = /* @__PURE__ */ new Map(), B = /* @__PURE__ */ new Map(), Y = /* @__PURE__ */ new Map(), ge = /* @__PURE__ */ new Map(), k = /* @__PURE__ */ new Map();
    for (const K of e.split(/\r?\n/)) {
      const me = K.trim();
      if (me.startsWith("#") || me.startsWith("//")) continue;
      const pe = me.split(/\s+/);
      if (pe[0] === "node" && pe.length >= 5) {
        const U = parseInt(pe[1]), ee = g.length;
        g.push([
          parseFloat(pe[2]),
          parseFloat(pe[3]),
          parseFloat(pe[4])
        ]), k.set(U, ee);
        continue;
      }
      if (pe[0] === "fix" && pe.length >= 8) {
        const U = k.get(parseInt(pe[1]));
        U !== void 0 && w.set(U, [
          pe[2] === "1",
          pe[3] === "1",
          pe[4] === "1",
          pe[5] === "1",
          pe[6] === "1",
          pe[7] === "1"
        ]);
        continue;
      }
      if (pe[0] === "element" && pe[1] === "elasticBeamColumn" && pe.length >= 12) {
        const U = k.get(parseInt(pe[3])), ee = k.get(parseInt(pe[4]));
        if (U !== void 0 && ee !== void 0) {
          const X = W.length;
          W.push([
            U,
            ee
          ]), j.set(X, parseFloat(pe[5])), H.set(X, parseFloat(pe[6])), V.set(X, parseFloat(pe[7])), ge.set(X, parseFloat(pe[8])), B.set(X, parseFloat(pe[9])), Y.set(X, parseFloat(pe[10]));
        }
        continue;
      }
      if (pe[0] === "load" && pe.length >= 8) {
        const U = k.get(parseInt(pe[1]));
        U !== void 0 && G.set(U, [
          parseFloat(pe[2]),
          parseFloat(pe[3]),
          parseFloat(pe[4]),
          parseFloat(pe[5]),
          parseFloat(pe[6]),
          parseFloat(pe[7])
        ]);
      }
    }
    return {
      nodes: g,
      elements: W,
      nodeInputs: {
        supports: w,
        loads: G
      },
      elementInputs: {
        elasticities: H,
        shearModuli: V,
        areas: j,
        momentsOfInertiaY: B,
        momentsOfInertiaZ: Y,
        torsionalConstants: ge
      }
    };
  }
  gs = vo.state(false);
  Oa = function(e) {
    e.nodeInputs || (e.nodeInputs = vo.state({})), e.elementInputs || (e.elementInputs = vo.state({})), e.deformOutputs || (e.deformOutputs = vo.state({})), e.analyzeOutputs || (e.analyzeOutputs = vo.state({}));
    let g = "tonf", W = "m", w = io(g, W), G = {
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
    }, V = /* @__PURE__ */ new Set(), j = /* @__PURE__ */ new Set();
    let B = false;
    const Y = /* @__PURE__ */ new Set(), ge = /* @__PURE__ */ new Map();
    let k = "", K = {}, me = null, pe = "", U = [], ee = [], X = /* @__PURE__ */ new Set(), ie = /* @__PURE__ */ new Set(), J = /* @__PURE__ */ new Set(), Te = /* @__PURE__ */ new Map(), Ne = /* @__PURE__ */ new Map(), ve = [], We = 0.2, Ve = 2, dt = 2, pt = false, at = 2, Mt = "x", Tt = /* @__PURE__ */ new Set(), yt = true, $t = 0.15, Dt = 2, Me = 2, Ie = /* @__PURE__ */ new Set();
    const ce = () => ({
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
    }), qe = (t, o) => ({
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
      }, ce),
      vigasY: Array.from({
        length: o
      }, ce)
    }), N = {
      colMat: 0,
      vigaMat: 0,
      colShape: 0,
      fc: 20594,
      steelColType: 0,
      steelVigaType: 0,
      perFloor: []
    };
    let fe = 0, Fe = 3, Ee = false, Re = 0, _e = null, Ke = 0, ot = [], ft = 1, rt = true;
    const jt = da();
    jt.div.style.display = "none";
    function Do() {
      const t = Co()[k];
      return t && t[fe] ? t[fe].dofs : [
        true,
        true,
        true,
        true,
        true,
        true
      ];
    }
    let Wt = [], Yt = [], ct = null;
    function Mn() {
      if (!ct) return;
      const t = Ge();
      t && t.scene.remove(ct), ct.traverse((o) => {
        if (o.geometry && o.geometry.dispose(), o.material) {
          const n = o.material;
          n.map && n.map.dispose(), n.dispose();
        }
      }), ct = null;
    }
    function Sn(t, o, n, l, s) {
      Mn();
      const c = Ge();
      if (!c) return;
      ct = new us(), ct.name = "gridAxes";
      const i = Math.min(...t), p = Math.max(...t), u = Math.min(...o), d = Math.max(...o), r = p - i || 1, b = d - u || 1, E = Math.max(r, b), S = E * 0.08, x = t.map((m, f) => String.fromCharCode(65 + f)), a = o.map((m, f) => String(f + 1)), h = E * 0.018, y = o.length <= 1, $ = 8947848;
      for (let m = 0; m < t.length; m++) {
        const f = t[m];
        if (y) {
          const v = -S - h * 1.5;
          Yo(f, 0, 0, f, 0, v + h, $, ct), Jo(x[m] || `${m}`, f, 0, v, h, ct);
        } else {
          const v = u - S - h * 1.5;
          Yo(f, u, 0, f, v + h, 0, $, ct), Jo(x[m] || `${m}`, f, v, 0, h, ct);
        }
      }
      if (!y) for (let m = 0; m < o.length; m++) {
        const f = o[m], v = i - S - h * 1.5;
        Yo(i, f, 0, v + h, f, 0, $, ct), Jo(a[m] || `${m}`, v, f, 0, h, ct);
      }
      const M = h * 1.8, P = S * 1.2, q = S * 1.2;
      for (let m = 0; m < t.length - 1; m++) {
        const f = t[m], v = t[m + 1], I = Math.abs(v - f), T = (f + v) / 2, R = `${I.toFixed(2)} m`;
        y ? (jo(R, T, 0, -P, M, ct), Wo(f, 0, -P * 0.7, v, 0, -P * 0.7, 16763904, ct)) : (jo(R, T, u - q, 0, M, ct), Wo(f, u - q * 0.7, 0, v, u - q * 0.7, 0, 16763904, ct));
      }
      if (!y) for (let m = 0; m < o.length - 1; m++) {
        const f = o[m], v = o[m + 1], I = Math.abs(v - f), T = (f + v) / 2, R = `${I.toFixed(2)} m`;
        jo(R, i - P, T, 0, M, ct), Wo(i - P * 0.7, f, 0, i - P * 0.7, v, 0, 16763904, ct);
      }
      ct.traverse((m) => {
        m.material && (Array.isArray(m.material) ? m.material.forEach((f) => {
          f.clippingPlanes = [];
        }) : m.material.clippingPlanes = []);
      }), c.scene.add(ct), c.render();
    }
    function jo(t, o, n, l, s, c) {
      const i = document.createElement("canvas"), p = 256, u = 64;
      i.width = p, i.height = u;
      const d = i.getContext("2d");
      d.fillStyle = "rgba(0,0,0,0.75)";
      const r = 8;
      d.beginPath(), d.moveTo(r, 0), d.lineTo(p - r, 0), d.quadraticCurveTo(p, 0, p, r), d.lineTo(p, u - r), d.quadraticCurveTo(p, u, p - r, u), d.lineTo(r, u), d.quadraticCurveTo(0, u, 0, u - r), d.lineTo(0, r), d.quadraticCurveTo(0, 0, r, 0), d.closePath(), d.fill(), d.fillStyle = "#ffcc00", d.font = "bold 36px monospace", d.textAlign = "center", d.textBaseline = "middle", d.fillText(t, p / 2, u / 2);
      const b = new aa(i);
      b.minFilter = la;
      const E = new hn({
        map: b,
        transparent: true,
        depthTest: false
      }), S = new bn(E);
      S.position.set(o, n, l);
      const x = p / u;
      S.scale.set(s * x, s, 1), S.renderOrder = 999, c.add(S);
    }
    function Wo(t, o, n, l, s, c, i, p) {
      const u = [
        new ke(t, o, n),
        new ke(l, s, c)
      ], d = new so().setFromPoints(u), r = new Eo({
        color: i,
        transparent: true,
        opacity: 0.6,
        depthTest: false
      }), b = new mn(d, r);
      b.renderOrder = 998, p.add(b);
    }
    function Yo(t, o, n, l, s, c, i, p) {
      const u = new so().setFromPoints([
        new ke(t, o, n),
        new ke(l, s, c)
      ]), d = new fs({
        color: i,
        dashSize: 0.15 * Math.max(Math.abs(l - t), Math.abs(s - o), Math.abs(c - n), 0.1),
        gapSize: 0.1 * Math.max(Math.abs(l - t), Math.abs(s - o), Math.abs(c - n), 0.1),
        transparent: true,
        opacity: 0.6
      }), r = new mn(u, d);
      r.computeLineDistances(), p.add(r);
    }
    function Jo(t, o, n, l, s, c) {
      const i = document.createElement("canvas"), p = 128;
      i.width = p, i.height = p;
      const u = i.getContext("2d");
      u.beginPath(), u.arc(p / 2, p / 2, p * 0.42, 0, Math.PI * 2), u.fillStyle = "rgba(255,255,255,0.9)", u.fill(), u.lineWidth = p * 0.04, u.strokeStyle = "#555", u.stroke(), u.fillStyle = "#222", u.font = `bold ${p * 0.45}px Arial`, u.textAlign = "center", u.textBaseline = "middle", u.fillText(t, p / 2, p / 2 + p * 0.02);
      const d = new ms(i);
      d.needsUpdate = true;
      const r = new hn({
        map: d,
        depthTest: false,
        transparent: true
      }), b = new bn(r);
      b.position.set(o, n, l);
      const E = s * 2;
      b.scale.set(E, E, 1), b.renderOrder = 100, c.add(b);
    }
    const He = {
      addNode(t, o, n) {
        const l = [
          ...e.nodes.val
        ], s = l.length;
        return l.push([
          t,
          o,
          n
        ]), e.nodes.val = l, console.log(`Node ${s} at (${t}, ${o}, ${n})`), je(), s;
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
        e.nodes.val = o, e.elements.val = n, console.log(`Node ${t} removed`), je();
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
        ]), e.elements.val = n, console.log(`Element ${l}: node ${t} -> node ${o}`), je(), l;
      },
      removeFrame(t) {
        const o = [
          ...e.elements.val
        ];
        if (t < 0 || t >= o.length) {
          console.error(`Element ${t} not found`);
          return;
        }
        o.splice(t, 1), e.elements.val = o, console.log(`Element ${t} removed`), je();
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
        ]), n.supports = l, e.nodeInputs.val = n, console.log(`Support added at node ${t}`), je();
      },
      removeSupport(t) {
        if (!e.nodeInputs) return;
        const o = {
          ...e.nodeInputs.val
        }, n = new Map(o.supports || []);
        n.delete(t), o.supports = n, e.nodeInputs.val = o, console.log(`Support removed from node ${t}`), je();
      },
      addLoad(t, o) {
        if (!e.nodeInputs) return;
        const n = {
          ...e.nodeInputs.val
        }, l = new Map(n.loads || []);
        l.set(t, o), n.loads = l, e.nodeInputs.val = n, console.log(`Load added at node ${t}: [${o.join(", ")}]`), je();
      },
      removeLoad(t) {
        if (!e.nodeInputs) return;
        const o = {
          ...e.nodeInputs.val
        }, n = new Map(o.loads || []);
        n.delete(t), o.loads = n, e.nodeInputs.val = o, console.log(`Load removed from node ${t}`), je();
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
        e.nodes.val = [], e.elements.val = [], e.nodeInputs && (e.nodeInputs.val = {}), e.elementInputs && (e.elementInputs.val = {}), X = /* @__PURE__ */ new Set(), ie = /* @__PURE__ */ new Set(), Te = /* @__PURE__ */ new Map(), Ne = /* @__PURE__ */ new Map(), Wt = [], Yt = [], Mn();
        const t = xe.querySelector("#cad3d-axis-buttons");
        t && (t.style.display = "none", t.innerHTML = ""), console.log("Model cleared"), je();
      },
      frame(t, o, n = 0, l = 0) {
        He.clear();
        const s = [];
        n > 0 && s.push(-n);
        let c = 0;
        s.push(c);
        for (const x of t) c += x, s.push(c);
        l > 0 && s.push(c + l);
        const i = [
          0
        ];
        let p = 0;
        for (const x of o) p += x, i.push(p);
        const u = (x) => n > 0 && x === 0 || l > 0 && x === s.length - 1, d = {}, r = [];
        for (let x = 0; x < i.length; x++) for (let a = 0; a < s.length; a++) x === 0 && u(a) || (d[`${a},${x}`] = r.length, r.push([
          s[a],
          0,
          i[x]
        ]));
        const b = [];
        X = /* @__PURE__ */ new Set(), ie = /* @__PURE__ */ new Set();
        for (let x = 0; x < i.length - 1; x++) for (let a = 0; a < s.length; a++) u(a) || (X.add(b.length), b.push([
          d[`${a},${x}`],
          d[`${a},${x + 1}`]
        ]));
        for (let x = 1; x < i.length; x++) for (let a = 0; a < s.length - 1; a++) ie.add(b.length), b.push([
          d[`${a},${x}`],
          d[`${a + 1},${x}`]
        ]);
        const E = /* @__PURE__ */ new Map(), S = Do();
        for (let x = 0; x < s.length; x++) {
          if (u(x)) continue;
          const a = `${x},0`;
          d[a] !== void 0 && E.set(d[a], [
            ...S
          ]);
        }
        return e.nodes.val = r, e.elements.val = b, e.nodeInputs && (e.nodeInputs.val = {
          supports: E
        }), Wt = [
          ...s
        ], Yt = [
          0
        ], setTimeout(() => {
          ut(), Sn(s, [
            0
          ]), Yn(), Jn();
        }, 50), je(), {
          nodes: r.length,
          elements: b.length
        };
      },
      building(t, o, n, l = 3, s = 0, c = 0, i = 0, p = 0, u = 1) {
        He.clear();
        const d = [];
        s > 0 && d.push(-s), d.push(0);
        for (const f of t) d.push(d[d.length - 1] + f);
        c > 0 && d.push(d[d.length - 1] + c);
        const r = [];
        i > 0 && r.push(-i), r.push(0);
        for (const f of o) r.push(r[r.length - 1] + f);
        p > 0 && r.push(r[r.length - 1] + p);
        const b = [
          0
        ];
        for (const f of n) b.push(b[b.length - 1] + f);
        const E = (f) => s > 0 && f === 0 || c > 0 && f === d.length - 1, S = (f) => i > 0 && f === 0 || p > 0 && f === r.length - 1, x = (f, v) => E(f) || S(v), a = [], h = {};
        for (let f = 0; f < b.length; f++) for (let v = 0; v < r.length; v++) for (let I = 0; I < d.length; I++) f === 0 && x(I, v) || (h[`${I},${v},${f}`] = a.length, a.push([
          d[I],
          r[v],
          b[f]
        ]));
        const y = a.length, $ = [];
        X = /* @__PURE__ */ new Set(), ie = /* @__PURE__ */ new Set(), Te = /* @__PURE__ */ new Map();
        const M = [];
        for (let f = 0; f < b.length - 1; f++) for (let v = 0; v < r.length; v++) for (let I = 0; I < d.length; I++) x(I, v) || M.push({
          el: [
            h[`${I},${v},${f}`],
            h[`${I},${v},${f + 1}`]
          ],
          floor: f
        });
        for (const { el: [f, v], floor: I } of M) {
          if (u <= 1) {
            X.add($.length), Te.set($.length, I), $.push([
              f,
              v
            ]);
            continue;
          }
          const T = a[f], R = a[v];
          let F = f;
          for (let L = 1; L < u; L++) {
            const C = L / u, _ = a.length;
            a.push([
              T[0] + (R[0] - T[0]) * C,
              T[1] + (R[1] - T[1]) * C,
              T[2] + (R[2] - T[2]) * C
            ]), X.add($.length), Te.set($.length, I), $.push([
              F,
              _
            ]), F = _;
          }
          X.add($.length), Te.set($.length, I), $.push([
            F,
            v
          ]);
        }
        Ne = /* @__PURE__ */ new Map();
        const P = [];
        for (let f = 1; f < b.length; f++) for (let v = 0; v < r.length; v++) for (let I = 0; I < d.length - 1; I++) P.push({
          el: [
            h[`${I},${v},${f}`],
            h[`${I + 1},${v},${f}`]
          ],
          floor: f - 1,
          dir: "x",
          bay: I
        });
        for (let f = 1; f < b.length; f++) for (let v = 0; v < d.length; v++) for (let I = 0; I < r.length - 1; I++) P.push({
          el: [
            h[`${v},${I},${f}`],
            h[`${v},${I + 1},${f}`]
          ],
          floor: f - 1,
          dir: "y",
          bay: I
        });
        for (const { el: [f, v], floor: I, dir: T, bay: R } of P) {
          const F = a[f], L = a[v];
          let C = f;
          for (let oe = 1; oe < l; oe++) {
            const se = oe / l, re = a.length;
            a.push([
              F[0] + (L[0] - F[0]) * se,
              F[1] + (L[1] - F[1]) * se,
              F[2] + (L[2] - F[2]) * se
            ]);
            const te = $.length;
            ie.add(te), Te.set(te, I), Ne.set(te, {
              dir: T,
              bay: R
            }), $.push([
              C,
              re
            ]), C = re;
          }
          const _ = $.length;
          ie.add(_), Te.set(_, I), Ne.set(_, {
            dir: T,
            bay: R
          }), $.push([
            C,
            v
          ]);
        }
        if (Tt = /* @__PURE__ */ new Set(), pt && at > 0) {
          const f = (v, I, T) => {
            for (let F = 0; F < a.length; F++) if (Math.abs(a[F][0] - v) < 1e-6 && Math.abs(a[F][1] - I) < 1e-6 && Math.abs(a[F][2] - T) < 1e-6) return F;
            const R = a.length;
            return a.push([
              v,
              I,
              T
            ]), R;
          };
          for (let v = 1; v < b.length; v++) if (Mt === "x") for (let I = 0; I < r.length - 1; I++) {
            const T = r[I], R = r[I + 1];
            for (let F = 1; F <= at; F++) {
              const L = T + F / (at + 1) * (R - T), C = [];
              for (let _ = 0; _ < d.length; _++) C.push(f(d[_], L, b[v]));
              for (let _ = 0; _ < d.length - 1; _++) {
                const oe = $.length;
                Tt.add(oe), ie.add(oe), Te.set(oe, v - 1), Ne.set(oe, {
                  dir: "x",
                  bay: _
                }), $.push([
                  C[_],
                  C[_ + 1]
                ]);
              }
            }
          }
          else for (let I = 0; I < d.length - 1; I++) {
            const T = d[I], R = d[I + 1];
            for (let F = 1; F <= at; F++) {
              const L = T + F / (at + 1) * (R - T), C = [];
              for (let _ = 0; _ < r.length; _++) C.push(f(L, r[_], b[v]));
              for (let _ = 0; _ < r.length - 1; _++) {
                const oe = $.length;
                Tt.add(oe), ie.add(oe), Te.set(oe, v - 1), Ne.set(oe, {
                  dir: "y",
                  bay: _
                }), $.push([
                  C[_],
                  C[_ + 1]
                ]);
              }
            }
          }
        }
        const q = /* @__PURE__ */ new Map(), m = Do();
        for (let f = 0; f < r.length; f++) for (let v = 0; v < d.length; v++) x(v, f) || q.set(h[`${v},${f},0`], [
          ...m
        ]);
        J = /* @__PURE__ */ new Set();
        for (const f of ve) {
          const v = b.length - 1, I = f.floors.includes(-1) ? Array.from({
            length: v
          }, (T, R) => R) : f.floors.filter((T) => T < v);
          for (const T of I) {
            let R, F, L, C;
            f.dir === "x" ? (R = f.bay, L = f.bay + 1, F = f.axisIdx, C = f.axisIdx) : (R = f.axisIdx, L = f.axisIdx, F = f.bay, C = f.bay + 1);
            const _ = h[`${R},${F},${T}`], oe = h[`${R},${F},${T + 1}`];
            let se, re;
            if (f.dir === "x" ? (se = h[`${L},${C},${T}`], re = h[`${L},${C},${T + 1}`]) : (se = h[`${L},${C},${T}`], re = h[`${L},${C},${T + 1}`]), _ === void 0 || se === void 0 || oe === void 0 || re === void 0) continue;
            const te = dt, Q = Ve, ae = a[_], $e = a[se], Pe = a[oe], Ae = a[re], le = [];
            for (let he = 0; he <= Q; he++) {
              const we = [], de = he / Q;
              for (let ze = 0; ze <= te; ze++) {
                const Ce = ze / te, Je = (1 - de) * ((1 - Ce) * ae[0] + Ce * $e[0]) + de * ((1 - Ce) * Pe[0] + Ce * Ae[0]), ne = (1 - de) * ((1 - Ce) * ae[1] + Ce * $e[1]) + de * ((1 - Ce) * Pe[1] + Ce * Ae[1]), Se = (1 - de) * ((1 - Ce) * ae[2] + Ce * $e[2]) + de * ((1 - Ce) * Pe[2] + Ce * Ae[2]);
                he === 0 && ze === 0 ? we.push(_) : he === 0 && ze === te ? we.push(se) : he === Q && ze === 0 ? we.push(oe) : he === Q && ze === te ? we.push(re) : (we.push(a.length), a.push([
                  Je,
                  ne,
                  Se
                ]));
              }
              le.push(we);
            }
            for (let he = 0; he < Q; he++) for (let we = 0; we < te; we++) {
              const de = le[he][we], ze = le[he][we + 1], Ce = le[he + 1][we + 1], Je = le[he + 1][we], ne = $.length;
              J.add(ne), Te.set(ne, T), $.push([
                de,
                ze,
                Ce,
                Je
              ]);
            }
            if (T === 0) for (let he = 0; he <= te; he++) {
              const we = le[0][he];
              we >= y && q.set(we, [
                ...m
              ]);
            }
          }
        }
        if (Ie = /* @__PURE__ */ new Set(), yt) {
          const f = l, v = l, I = /* @__PURE__ */ new Map(), T = (R, F, L) => `${Math.round(R * 1e4)},${Math.round(F * 1e4)},${Math.round(L * 1e4)}`;
          for (let R = 0; R < a.length; R++) I.set(T(a[R][0], a[R][1], a[R][2]), R);
          for (let R = 1; R < b.length; R++) {
            const F = b[R];
            for (let L = 0; L < d.length - 1; L++) for (let C = 0; C < r.length - 1; C++) {
              const _ = d[L], oe = d[L + 1], se = r[C], re = r[C + 1], te = [];
              for (let Q = 0; Q <= v; Q++) {
                const ae = [];
                for (let $e = 0; $e <= f; $e++) {
                  const Pe = _ + $e / f * (oe - _), Ae = se + Q / v * (re - se);
                  if (Q === 0 && $e === 0) ae.push(h[`${L},${C},${R}`]);
                  else if (Q === 0 && $e === f) ae.push(h[`${L + 1},${C},${R}`]);
                  else if (Q === v && $e === 0) ae.push(h[`${L},${C + 1},${R}`]);
                  else if (Q === v && $e === f) ae.push(h[`${L + 1},${C + 1},${R}`]);
                  else {
                    const le = T(Pe, Ae, F), he = I.get(le);
                    if (he !== void 0) ae.push(he);
                    else {
                      const we = a.length;
                      a.push([
                        Pe,
                        Ae,
                        F
                      ]), I.set(le, we), ae.push(we);
                    }
                  }
                }
                te.push(ae);
              }
              for (let Q = 0; Q < v; Q++) for (let ae = 0; ae < f; ae++) {
                const $e = te[Q][ae], Pe = te[Q][ae + 1], Ae = te[Q + 1][ae + 1], le = te[Q + 1][ae], he = $.length;
                Ie.add(he), Te.set(he, R - 1), $.push([
                  $e,
                  Pe,
                  Ae,
                  le
                ]);
              }
            }
          }
        }
        return e.nodes.val = a, e.elements.val = $, e.nodeInputs && (e.nodeInputs.val = {
          supports: q
        }), Wt = [
          ...d
        ], Yt = [
          ...r
        ], setTimeout(() => {
          ut(), Sn(d, r), Yn(), Jn();
        }, 50), je(), {
          nodes: a.length,
          elements: $.length,
          nJointNodes: y
        };
      },
      galpon(t = 12, o = 20, n = 6, l = 3, s = 8, c = 4) {
        He.clear();
        const i = [], p = [], u = (S) => n + l * (1 - Math.pow(2 * S / t - 1, 2)), d = [], r = c + 1;
        for (let S = 0; S < r; S++) {
          const x = [], a = o / c * S;
          x.push(i.length), i.push([
            0,
            a,
            0
          ]), x.push(i.length), i.push([
            t,
            a,
            0
          ]), x.push(i.length), i.push([
            0,
            a,
            n
          ]);
          for (let h = 1; h < s; h++) {
            const y = t / s * h;
            x.push(i.length), i.push([
              y,
              a,
              u(y)
            ]);
          }
          x.push(i.length), i.push([
            t,
            a,
            n
          ]), d.push(x);
        }
        for (let S = 0; S < r; S++) {
          const x = d[S];
          p.push([
            x[0],
            x[2]
          ]), p.push([
            x[1],
            x[x.length - 1]
          ]);
          for (let a = 2; a < x.length - 1; a++) p.push([
            x[a],
            x[a + 1]
          ]);
        }
        for (let S = 0; S < c; S++) for (let x = 2; x < d[0].length; x++) p.push([
          d[S][x],
          d[S + 1][x]
        ]);
        for (let S = 0; S < c; S++) for (let x = 2; x < d[0].length - 1; x += 2) p.push([
          d[S][x],
          d[S + 1][x + 1]
        ]);
        const b = /* @__PURE__ */ new Map(), E = Do();
        for (let S = 0; S < r; S++) b.set(d[S][0], [
          ...E
        ]), b.set(d[S][1], [
          ...E
        ]);
        return e.nodes.val = i, e.elements.val = p, e.nodeInputs && (e.nodeInputs.val = {
          supports: b
        }), je(), {
          nodes: i.length,
          elements: p.length
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
            He.clear(), De("truss"), In();
            break;
          }
          case "beams": {
            He.clear(), De("beams"), zn();
            break;
          }
          case "3d":
          case "3d-structure":
          case "torre": {
            He.clear(), De("3d"), Ln();
            break;
          }
          case "portico": {
            De("frame"), be();
            break;
          }
          case "edificio": {
            De("edificio"), N.colMat = 0, N.vigaMat = 0, N.colShape = 0, ve = [], yt = false, pt = false, be();
            break;
          }
          case "edif-acero":
          case "edificio-acero": {
            De("edificio"), N.colMat = 1, N.vigaMat = 1, N.steelColType = 0, N.steelVigaType = 0, ve = [], pt = true, at = 2;
            const o = U.reduce((l, s) => l + s, 0) / U.length, n = ee.reduce((l, s) => l + s, 0) / ee.length;
            Mt = o >= n ? "y" : "x", yt = true, $t = 0.08, be();
            break;
          }
          case "edif-muros":
          case "edificio-muros": {
            De("edificio"), N.colMat = 0, N.vigaMat = 0, N.colShape = 0, pt = false;
            const o = Math.round(((_a = K.nVanosX) == null ? void 0 : _a.val) ?? 2), n = Math.round(((_b = K.nVanosY) == null ? void 0 : _b.val) ?? 2);
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
            ], yt = true, $t = 0.15, be();
            break;
          }
          case "edif-mixto":
          case "edificio-mixto": {
            De("edificio"), N.colMat = 2, N.vigaMat = 0, pt = false;
            const o = Math.round(((_c = K.nVanosX) == null ? void 0 : _c.val) ?? 2), n = Math.round(((_d = K.nVanosY) == null ? void 0 : _d.val) ?? 2);
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
                bay: o - 1,
                axisIdx: n,
                floors: [
                  -1
                ]
              }
            ], yt = true, $t = 0.12, be();
            break;
          }
          case "mezanine":
          case "mezzanine": {
            De("edificio"), K.nPisos && (K.nPisos.val = 1), K.hPiso && (K.hPiso.val = 4.5), K.nVanosX && (K.nVanosX.val = 3), K.nVanosY && (K.nVanosY.val = 2), K.nSubViga && (K.nSubViga.val = 3), U = [
              6,
              6,
              6
            ], ee = [
              5,
              5
            ], N.colMat = 1, N.vigaMat = 1, N.steelColType = 0, N.steelVigaType = 0, ve = [], pt = true, at = 2, Mt = U[0] >= ee[0] ? "y" : "x", yt = true, $t = 0.08, Dt = 3, Me = 3, be();
            break;
          }
          case "galpon": {
            De("galpon"), be();
            break;
          }
          case "barra": {
            De("barra"), be();
            break;
          }
          case "placa3q":
          case "plate3q":
          case "placa-3q": {
            He.clear(), De("placa-3q"), Tn();
            break;
          }
          case "placa":
          case "plate":
          case "plate-q4":
          case "placa-q4": {
            He.clear(), De("placa-q4"), Fn();
            break;
          }
          case "losa-rect":
          case "rectangular-slab": {
            He.clear(), De("losa-rect"), qn();
            break;
          }
          case "losa-plana":
          case "flat-slab": {
            He.clear(), De("losa-plana"), An();
            break;
          }
          case "viga-alta":
          case "deep-beam": {
            He.clear(), De("viga-alta"), Cn();
            break;
          }
          case "muro-contencion":
          case "retaining-wall": {
            He.clear(), De("muro-contencion"), Pn();
            break;
          }
          case "zapata":
          case "footing": {
            He.clear(), De("zapata"), _n();
            break;
          }
          case "placa-orificios":
          case "plate-holes":
          case "placa-base": {
            He.clear(), De("placa-orificios"), On();
            break;
          }
          case "col-placa":
          case "columna-placa": {
            He.clear(), De("col-placa"), Nn();
            break;
          }
          case "talud":
          case "slope": {
            He.clear(), De("talud"), Rn();
            break;
          }
          case "eiffel":
          case "torre-eiffel": {
            He.clear(), De("eiffel"), os();
            break;
          }
          case "arco":
          case "arco-gateway": {
            He.clear(), De("arco"), ns();
            break;
          }
          case "puente":
          case "puente-colgante": {
            He.clear(), De("puente"), ss();
            break;
          }
          case "twisted":
          case "torre-twisted":
          case "turning-torso": {
            He.clear(), De("twisted"), as();
            break;
          }
          case "burj":
          case "burj-khalifa": {
            He.clear(), De("burj"), ls();
            break;
          }
          case "opera":
          case "sydney-opera": {
            He.clear(), De("opera"), is();
            break;
          }
          case "diagrid":
          case "gherkin": {
            He.clear(), De("diagrid"), rs();
            break;
          }
          default:
            console.error(`Ejemplo desconocido: "${t}".`);
        }
      },
      plateQ4(t = 10, o = 10, n = 16, l = 16, s = "simply-supported", c = -10, i = 0.2, p = 3e7, u = 0.3, d = 0) {
        console.log(`Plate Q4 [${[
          "Mindlin (gruesa)",
          "Kirchhoff (delgada)",
          "Membrane"
        ][d]}]: ${t}\xD7${o}, ${n}\xD7${l} elem, BC=${s}, q=${c}, t=${i}`);
        const b = performance.now(), E = un({
          E: p,
          nu: u,
          thickness: i,
          meshLx: t,
          meshLy: o,
          meshNx: n,
          meshNy: l,
          bcType: s,
          pressure: c,
          theoryType: d
        }), S = performance.now() - b;
        console.log(`Solved in ${S.toFixed(1)} ms`), console.log(`w_max = ${E.maxW.toExponential(6)}`), console.log(`w_center = ${(E.centerW ?? 0).toExponential(6)}`), console.log(`Mxx_max = ${E.maxMxx.toExponential(4)}, Myy_max = ${E.maxMyy.toExponential(4)}`), console.log(`Mxy_max = ${E.maxMxy.toExponential(4)}`), console.log(`Qx_max = ${E.maxQx.toExponential(4)}, Qy_max = ${E.maxQy.toExponential(4)}`);
        const x = E.nodeResults.map((M) => [
          M.x,
          M.y,
          0
        ]), a = E.elementResults.map((M) => [
          ...M.nodes
        ]);
        e.nodes.val = x, e.elements.val = a;
        const h = /* @__PURE__ */ new Map();
        E.nodeResults.forEach((M, P) => {
          h.set(P, [
            0,
            0,
            M.w,
            M.bx,
            M.by,
            0
          ]);
        }), e.deformOutputs && (e.deformOutputs.val = {
          deformations: h
        });
        const y = /* @__PURE__ */ new Map();
        E.nodeResults.forEach((M, P) => {
          (M.x < 1e-10 || M.x > t - 1e-10 || M.y < 1e-10 || M.y > o - 1e-10) && y.set(P, [
            true,
            true,
            true,
            true,
            true,
            true
          ]);
        });
        const $ = /* @__PURE__ */ new Map();
        if (Math.abs(c) > 1e-30) {
          const M = c * t * o / x.length;
          x.forEach((P, q) => {
            y.has(q) || $.set(q, [
              0,
              0,
              M,
              0,
              0,
              0
            ]);
          });
        }
        if (e.nodeInputs && (e.nodeInputs.val = {
          supports: y,
          loads: $
        }), e.elementInputs && (e.elementInputs.val = {}), e.analyzeOutputs) {
          const M = /* @__PURE__ */ new Map(), P = /* @__PURE__ */ new Map(), q = /* @__PURE__ */ new Map();
          E.elementResults.forEach((m, f) => {
            M.set(f, [
              m.Mxx,
              m.Mxx,
              m.Mxx
            ]), P.set(f, [
              m.Myy,
              m.Myy,
              m.Myy
            ]), q.set(f, [
              m.Mxy,
              m.Mxy,
              m.Mxy
            ]);
          }), e.analyzeOutputs.val = {
            bendingXX: M,
            bendingYY: P,
            bendingXY: q
          };
        }
        return setTimeout(() => ut(), 50), je(), E;
      },
      set(t, o) {
        K[t] ? (K[t].val = o, console.log(`${t} = ${o}`), qt(), be()) : Ye[t] ? (Ye[t].val = o, console.log(`${t} = ${o}`), qt(), be()) : console.error(`Par\xE1metro "${t}" no encontrado. Disponibles: ${Object.keys({
          ...K,
          ...Ye
        }).join(", ")}`);
      },
      get(t) {
        if (!t) {
          const o = {};
          for (const l in K) o[l] = K[l].val;
          for (const l in Ye) o[l] = Ye[l].val;
          o.plateTheory = Fe, o.supportType = fe;
          const n = Co()[k];
          return n && n[fe] && (o.supportLabel = n[fe].label), console.table(o), o;
        }
        if (K[t]) return K[t].val;
        if (Ye[t]) return Ye[t].val;
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
        }[t.toLowerCase()] || 3), Fe = t, console.log(`Teor\xEDa de placa: ${{
          1: "Membrana",
          2: "Kirchhoff (delgada)",
          3: "Mindlin (gruesa)"
        }[Fe] || Fe}`), k.includes("placa") && (qt(), be());
      },
      setBc(t) {
        const o = Co()[k];
        if (!o || o.length === 0) {
          console.error("No support options for current generator");
          return;
        }
        if (typeof t == "string") {
          const n = o.findIndex((l) => l.label.toLowerCase().includes(t.toLowerCase()));
          t = n >= 0 ? n : 0;
        }
        fe = t, fe >= o.length && (fe = 0), console.log(`Apoyo: ${o[fe].label} \u2192 DOFs: [${o[fe].dofs.map((n) => n ? "1" : "0").join(",")}]`), qt(), be();
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
        t && (g = t), o && (W = o), w = io(g, W);
        const n = xe.querySelector("#cad3d-force-unit"), l = xe.querySelector("#cad3d-length-unit");
        return n && (n.textContent = g), l && (l.textContent = W), k && De(k), console.log(`Unidades: ${w.label} | E=${w.E.toExponential(3)} ${w.stress}`), w.id;
      },
      view(t) {
      },
      get mesh() {
        return e;
      }
    };
    function kn() {
      return ra(w);
    }
    function En() {
      return ca(w);
    }
    let Ye = {};
    function De(t) {
      var _a, _b;
      k = t, gs.val = true, fe = 0, Ke && Ko(), K = {};
      const o = kn()[t];
      if (o) for (const l of o) K[l.key] = {
        val: l.val,
        min: l.min,
        max: l.max,
        step: l.step,
        label: l.label
      };
      Ye = {};
      const n = En()[t];
      if (n) for (const l of n) Ye[l.key] = {
        val: l.val,
        min: l.min,
        max: l.max,
        step: l.step,
        label: l.label
      };
      if (t === "edificio") {
        const l = Math.round(((_a = K.nVanosX) == null ? void 0 : _a.val) ?? 2), s = Math.round(((_b = K.nVanosY) == null ? void 0 : _b.val) ?? 2);
        U = Array(l).fill(w.defaultSpan), ee = Array(s).fill(w.defaultSpan * 0.8);
      }
      qt(), setTimeout(() => {
        Es(), be();
      }, 50);
    }
    function D(t) {
      var _a, _b;
      return ((_a = K[t]) == null ? void 0 : _a.val) ?? ((_b = Ye[t]) == null ? void 0 : _b.val) ?? 0;
    }
    function be() {
      switch (k) {
        case "truss":
          In();
          break;
        case "beams":
          zn();
          break;
        case "3d":
          Ln();
          break;
        case "frame": {
          const o = Math.round(D("nVanos")), n = D("spanV"), l = Math.round(D("nPisos")), s = D("hPiso");
          He.frame(Array(o).fill(n), Array(l).fill(s));
          break;
        }
        case "edificio": {
          const o = Math.round(D("nPisos")), n = D("hPiso"), l = D("Lvix") || 0, s = D("Lvdx") || 0, c = D("Lviy") || 0, i = D("Lvdy") || 0, p = Math.max(1, Math.round(D("nSubViga") || 3)), u = Math.max(1, Math.round(D("nSubCol") || 1));
          He.building([
            ...U
          ], [
            ...ee
          ], Array(o).fill(n), p, l, s, c, i, u);
          break;
        }
        case "galpon":
          He.galpon(D("span"), D("length"), D("height"), D("archRise"), Math.round(D("xDiv")), Math.round(D("yDiv")));
          break;
        case "barra":
          xs();
          break;
        case "placa-3q":
          Tn();
          break;
        case "placa-q4":
          Fn();
          break;
        case "losa-rect":
          qn();
          break;
        case "losa-plana":
          An();
          break;
        case "viga-alta":
          Cn();
          break;
        case "muro-contencion":
          Pn();
          break;
        case "zapata":
          _n();
          break;
        case "placa-orificios":
          On();
          break;
        case "col-placa":
          Nn();
          break;
        case "talud":
          Rn();
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
      if ((k === "frame" || k === "edificio" || k === "galpon") && e.nodeInputs) {
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
      ].includes(k)) {
        if (V.size > 0 || j.size > 0 || B) {
          const o = e.elements.val, n = o.filter((l, s) => !(V.has(s) || j.has(s) || B && !Y.has(s)));
          n.length !== o.length && (e.elements.val = n);
        }
        setTimeout(() => {
          Jt(), Uo();
        }, 30);
      }
    }
    function In() {
      const t = D("span"), o = Math.round(D("divisions")), n = D("height"), l = t / o, s = [], c = [];
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
      const i = o + 1;
      for (let r = 0; r < o; r++) c.push([
        r,
        r + 1
      ]);
      for (let r = 0; r < o; r++) c.push([
        i + r,
        i + r + 1
      ]);
      for (let r = 0; r <= o; r++) c.push([
        r,
        i + r
      ]);
      for (let r = 0; r < o; r++) r < o / 2 ? c.push([
        r,
        i + r + 1
      ]) : c.push([
        i + r,
        r + 1
      ]);
      const p = /* @__PURE__ */ new Map([
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
      ]), u = (D("CM") ?? 0) + (D("CV") ?? 0), d = /* @__PURE__ */ new Map();
      if (u !== 0) for (let r = 0; r <= o; r++) d.set(r, [
        0,
        0,
        u,
        0,
        0,
        0
      ]);
      e.nodes.val = s, e.elements.val = c, e.nodeInputs && (e.nodeInputs.val = {
        supports: p,
        loads: d
      }), je();
    }
    function zn() {
      const t = D("width"), o = D("height"), n = D("Ex") ?? 0, l = (D("CM") ?? 0) + (D("CV") ?? 0), s = Math.max(1, Math.round(D("nSub") || 4)), c = [
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
      const p = [
        0,
        0,
        o
      ], u = [
        t,
        0,
        o
      ];
      let d = 1;
      for (let b = 1; b < s; b++) {
        const E = b / s, S = c.length;
        c.push([
          p[0] + (u[0] - p[0]) * E,
          p[1] + (u[1] - p[1]) * E,
          p[2] + (u[2] - p[2]) * E
        ]), i.push([
          d,
          S
        ]), d = S;
      }
      i.push([
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
        loads: r
      }), je();
    }
    function Ln() {
      const t = D("dx"), o = D("dy"), n = D("dz"), l = Math.round(D("stories")), s = Math.max(1, Math.round(D("nSub") || 3)), c = [];
      for (let a = 0; a <= l; a++) c.push([
        0,
        0,
        n * a
      ], [
        t,
        0,
        n * a
      ], [
        t,
        o,
        n * a
      ], [
        0,
        o,
        n * a
      ]);
      const i = c.length, p = [
        ...c
      ], u = [];
      for (let a = 0; a < l; a++) for (let h = 0; h < 4; h++) u.push([
        a * 4 + h,
        (a + 1) * 4 + h
      ]);
      for (let a = 0; a < l; a++) {
        const h = a * 4;
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
      for (let a = 1; a <= l; a++) {
        const h = a * 4;
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
      for (const [a, h] of d) {
        const y = c[a], $ = c[h];
        let M = a;
        for (let P = 1; P < s; P++) {
          const q = P / s, m = p.length;
          p.push([
            y[0] + ($[0] - y[0]) * q,
            y[1] + ($[1] - y[1]) * q,
            y[2] + ($[2] - y[2]) * q
          ]), u.push([
            M,
            m
          ]), M = m;
        }
        u.push([
          M,
          h
        ]);
      }
      const r = /* @__PURE__ */ new Map();
      for (let a = 0; a < 4; a++) r.set(a, [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
      const b = D("Ex") ?? 0, E = (D("CM") ?? 0) + (D("CV") ?? 0), S = i - 2, x = /* @__PURE__ */ new Map();
      if (b !== 0 && E === 0) x.set(S, [
        b,
        0,
        0,
        0,
        0,
        0
      ]);
      else if (E !== 0 && b === 0) for (let a = 0; a < p.length; a++) r.has(a) || x.set(a, [
        0,
        0,
        E,
        0,
        0,
        0
      ]);
      else if (b !== 0 && E !== 0) for (let a = 0; a < p.length; a++) r.has(a) || x.set(a, [
        a === S ? b : 0,
        0,
        E,
        0,
        0,
        0
      ]);
      e.nodes.val = p, e.elements.val = u, e.nodeInputs && (e.nodeInputs.val = {
        supports: r,
        loads: x
      }), je();
    }
    function xs() {
      const t = D("L"), o = Math.round(D("nElem")), n = D("F"), l = t / o, s = [], c = [];
      for (let u = 0; u <= o; u++) s.push([
        l * u,
        0,
        0
      ]);
      for (let u = 0; u < o; u++) c.push([
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
      ]), p = /* @__PURE__ */ new Map([
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
        loads: p
      }), je();
    }
    function Tn() {
      const t = D("Lx") || 15, o = D("Ly") || 10, n = D("meshSize") || 0.5, l = D("q") || -3, s = D("t") || 1, c = D("E") || 3e7, i = D("nu") || 0.3, p = c / (2 * (1 + i)), u = Fe === 1 ? "Membrana" : Fe === 2 ? "Kirchhoff" : "Mindlin", { nodes: d, elements: r, boundaryIndices: b } = Ht({
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
      }), E = t * o, S = l * E / d.length, x = new Map(b.map((h) => [
        h,
        [
          true,
          true,
          true,
          true,
          true,
          true
        ]
      ])), a = new Map(d.map((h, y) => [
        y,
        [
          0,
          0,
          S,
          0,
          0,
          0
        ]
      ]));
      e.nodes.val = d, e.elements.val = r, e.nodeInputs && (e.nodeInputs.val = {
        supports: x,
        loads: a
      }), e.elementInputs && (e.elementInputs.val = {
        elasticities: new Map(r.map((h, y) => [
          y,
          c
        ])),
        elasticitiesOrthogonal: new Map(r.map((h, y) => [
          y,
          c
        ])),
        thicknesses: new Map(r.map((h, y) => [
          y,
          s
        ])),
        poissonsRatios: new Map(r.map((h, y) => [
          y,
          i
        ])),
        shearModuli: new Map(r.map((h, y) => [
          y,
          p
        ]))
      });
      try {
        const h = Et(d, r, e.nodeInputs.val, e.elementInputs.val);
        h && e.deformOutputs && (e.deformOutputs.val = h);
        const y = xo(d, r, e.elementInputs.val, h);
        y && e.analyzeOutputs && (e.analyzeOutputs.val = y), console.log(`Plate 3Q [${u}]: ${d.length} nodes, ${r.length} triangles, t=${s}, E=${c}, \u03BD=${i}`);
      } catch (h) {
        console.warn("Plate 3Q analysis failed:", h.message);
      }
      setTimeout(() => ut(), 50), je();
    }
    function Fn() {
      const t = D("Lx") || 10, o = D("Ly") || 10, n = Math.round(D("nx") || 16), l = Math.round(D("ny") || 16), s = D("t") || 0.2, c = D("q") || -10, i = D("E") || 3e7, p = D("nu") || 0.3, u = fe === 1 ? "clamped" : "simply-supported", r = {
        1: 2,
        2: 1,
        3: 0
      }[Fe] ?? 0;
      return He.plateQ4(t, o, n, l, u, c, s, i, p, r);
    }
    function qn() {
      const t = D("a") || 6, o = D("b") || 4, n = Math.round(D("nx") || 12), l = Math.round(D("ny") || 8), s = D("t") || 0.1, c = D("q") || -10, i = D("E") || 35e6, p = D("nu") || 0.15, d = {
        1: 2,
        2: 1,
        3: 0
      }[Fe] ?? 0, r = He.plateQ4(t, o, n, l, "simply-supported", c, s, i, p, d), b = i * s * s * s / (12 * (1 - p * p));
      let E = 0;
      for (let S = 1; S <= 19; S += 2) for (let x = 1; x <= 19; x += 2) {
        const a = S * S / (t * t) + x * x / (o * o);
        E += 1 / (S * x * a * a);
      }
      if (E *= 16 * Math.abs(c) / (Math.PI ** 6 * b), console.log(`\u{1F4D0} Navier anal\xEDtico w_center = ${E.toExponential(6)}`), r) {
        const S = Math.abs((Math.abs(r.centerW || 0) - E) / E * 100);
        console.log(`   WASM w_center = ${(r.centerW || 0).toExponential(6)}, error = ${S.toFixed(2)}%`);
      }
      return r;
    }
    function An() {
      const t = D("t") || 0.2, o = D("q") || -10, n = D("E") || 35e6, l = D("nu") || 0.2, s = D("meshSize") || 0.6, c = [
        3.6,
        4.2,
        4.2,
        3.6
      ], i = [
        3,
        3.6,
        3
      ], p = c.reduce((F, L) => F + L, 0), u = i.reduce((F, L) => F + L, 0), d = [
        0
      ];
      for (const F of c) d.push(d[d.length - 1] + F);
      const r = [
        0
      ];
      for (const F of i) r.push(r[r.length - 1] + F);
      const b = Math.max(2, Math.round(p / s)), E = Math.max(2, Math.round(u / s)), S = p / b, x = u / E, a = [];
      for (let F = 0; F <= E; F++) for (let L = 0; L <= b; L++) a.push([
        L * S,
        F * x
      ]);
      const h = [], y = /* @__PURE__ */ new Set();
      for (const F of d) for (const L of r) {
        let C = 1 / 0, _ = 0;
        for (let oe = 0; oe < a.length; oe++) {
          const se = Math.hypot(a[oe][0] - F, a[oe][1] - L);
          se < C && (C = se, _ = oe);
        }
        y.has(_) || (y.add(_), h.push({
          node: _,
          dof: 0,
          k: 1e15
        }));
      }
      const M = {
        1: 2,
        2: 1,
        3: 0
      }[Fe] ?? 1;
      console.log(`Losa Plana Q4 [${[
        "Mindlin",
        "Kirchhoff",
        "Membrane"
      ][M]}]: ${p}\xD7${u}m, ${b}\xD7${E} elem, ${y.size} columnas`);
      const P = performance.now(), q = un({
        E: n,
        nu: l,
        thickness: t,
        meshLx: p,
        meshLy: u,
        meshNx: b,
        meshNy: E,
        bcType: "none",
        pressure: o,
        theoryType: M,
        springs: h
      }), m = performance.now() - P;
      console.log(`Solved in ${m.toFixed(1)} ms, w_max = ${q.maxW.toExponential(4)}`);
      const f = q.nodeResults.map((F) => [
        F.x,
        F.y,
        0
      ]), v = q.elementResults.map((F) => [
        ...F.nodes
      ]);
      e.nodes.val = f, e.elements.val = v;
      const I = /* @__PURE__ */ new Map();
      q.nodeResults.forEach((F, L) => {
        I.set(L, [
          0,
          0,
          F.w,
          F.bx,
          F.by,
          0
        ]);
      }), e.deformOutputs && (e.deformOutputs.val = {
        deformations: I
      });
      const T = /* @__PURE__ */ new Map();
      for (const F of y) T.set(F, [
        true,
        true,
        true,
        false,
        false,
        false
      ]);
      const R = /* @__PURE__ */ new Map();
      if (Math.abs(o) > 1e-30) {
        const F = o * p * u / f.length;
        f.forEach((L, C) => {
          T.has(C) || R.set(C, [
            0,
            0,
            F,
            0,
            0,
            0
          ]);
        });
      }
      if (e.nodeInputs && (e.nodeInputs.val = {
        supports: T,
        loads: R
      }), e.elementInputs && (e.elementInputs.val = {}), e.analyzeOutputs) {
        const F = /* @__PURE__ */ new Map(), L = /* @__PURE__ */ new Map(), C = /* @__PURE__ */ new Map();
        q.elementResults.forEach((_, oe) => {
          F.set(oe, [
            _.Mxx,
            _.Mxx,
            _.Mxx
          ]), L.set(oe, [
            _.Myy,
            _.Myy,
            _.Myy
          ]), C.set(oe, [
            _.Mxy,
            _.Mxy,
            _.Mxy
          ]);
        }), e.analyzeOutputs.val = {
          bendingXX: F,
          bendingYY: L,
          bendingXY: C
        };
      }
      setTimeout(() => ut(), 50), je();
    }
    function Cn() {
      const t = D("L") || 4, o = D("H") || 2, n = D("t") || 0.1, l = D("E") || 2e7, s = D("nu") || 0.2, c = l / (2 * (1 + s)), i = D("q") || -100, p = D("b") || 0.8, u = D("meshSize") || 0.2, { nodes: d, elements: r, boundaryIndices: b } = Ht({
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
      }), E = d, S = 0.4, x = /* @__PURE__ */ new Map();
      for (let m = 0; m < E.length; m++) {
        const f = E[m][0], v = E[m][1];
        Math.abs(v) < 1e-6 && (f <= S + 1e-6 || f >= t - S - 1e-6) && x.set(m, [
          true,
          true,
          true,
          true,
          true,
          true
        ]);
      }
      const a = (t - p) / 2, h = a + p, y = [];
      for (let m = 0; m < E.length; m++) if (Math.abs(E[m][1] - o) < 1e-6) {
        const f = E[m][0];
        f >= a - 1e-6 && f <= h + 1e-6 && y.push(m);
      }
      const $ = i * p / Math.max(y.length, 1), M = /* @__PURE__ */ new Map();
      for (const m of y) M.set(m, [
        0,
        $,
        0,
        0,
        0,
        0
      ]);
      const P = {
        elasticities: new Map(r.map((m, f) => [
          f,
          l
        ])),
        elasticitiesOrthogonal: new Map(r.map((m, f) => [
          f,
          l
        ])),
        thicknesses: new Map(r.map((m, f) => [
          f,
          n
        ])),
        poissonsRatios: new Map(r.map((m, f) => [
          f,
          s
        ])),
        shearModuli: new Map(r.map((m, f) => [
          f,
          c
        ]))
      }, q = {
        supports: x,
        loads: M
      };
      try {
        const m = Et(E, r, q, P), f = xo(E, r, P, m), v = E.map((T) => [
          T[0],
          0,
          T[1]
        ]);
        if (e.nodes.val = v, e.elements.val = r, m && m.deformations) {
          const T = /* @__PURE__ */ new Map();
          m.deformations.forEach((R, F) => {
            T.set(F, [
              R[0],
              R[2],
              R[1],
              R[3],
              R[5],
              R[4]
            ]);
          }), e.deformOutputs && (e.deformOutputs.val = {
            deformations: T
          });
        }
        if (e.nodeInputs) {
          const T = /* @__PURE__ */ new Map();
          x.forEach((F, L) => T.set(L, F));
          const R = /* @__PURE__ */ new Map();
          M.forEach((F, L) => R.set(L, [
            F[0],
            F[2],
            F[1],
            F[3],
            F[5],
            F[4]
          ])), e.nodeInputs && (e.nodeInputs.val = {
            supports: T,
            loads: R
          });
        }
        e.elementInputs && (e.elementInputs.val = {}), e.analyzeOutputs && (e.analyzeOutputs.val = {});
        let I = 0;
        m && m.deformations && m.deformations.forEach((T) => {
          const R = Math.sqrt(T[0] * T[0] + T[1] * T[1] + T[2] * T[2]);
          I = Math.max(I, R);
        }), console.log(`Viga Alta: ${E.length} nodos, ${r.length} triangulos`), console.log(`  L=${t}, H=${o}, t=${n}, E=${l}, nu=${s}`), console.log(`  Carga: q=${i} kN/m sobre ${p}m central`), console.log(`  max|u| = ${I.toExponential(4)}`);
      } catch (m) {
        console.warn("Viga Alta analysis failed:", m.message);
      }
      setTimeout(() => ut(), 50), je();
    }
    function Pn() {
      const t = D("H") || 4, o = D("B") || 3, n = D("tw") || 0.3, l = D("tb") || 0.4, s = D("meshSize") || 0.2, c = D("E") || 25e6, i = D("nu") || 0.2, p = c / (2 * (1 + i)), u = D("gamma") || 18, d = D("Ka") || 0.33, r = D("Es") || 5e4, b = D("nus") || 0.3, E = r / (2 * (1 + b)), S = D("kn") || 1e6, x = D("ks") || 1e4, a = D("gammaW") || 9.81, h = D("Hw") || 3.5, y = D("qs") || 0, $ = fe, M = o * 0.3, P = o * 0.7, q = [
        [
          -M,
          0,
          0
        ],
        [
          P,
          0,
          0
        ],
        [
          P,
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
          -M,
          l,
          0
        ]
      ];
      let m = [], f = [], v = /* @__PURE__ */ new Map(), I = /* @__PURE__ */ new Map(), T;
      if ($ === 0) {
        const L = Ht({
          points: q,
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
        m = L.nodes, f = L.elements;
        for (let _ = 0; _ < m.length; _++) Math.abs(m[_][1]) < 1e-6 && v.set(_, [
          true,
          true,
          true,
          true,
          true,
          true
        ]);
        const C = [];
        for (let _ = 0; _ < m.length; _++) {
          const oe = m[_][0], se = m[_][1];
          Math.abs(oe - n) < s * 0.6 && se >= l - 1e-6 && C.push({
            idx: _,
            y: se
          });
        }
        C.sort((_, oe) => _.y - oe.y);
        for (let _ = 0; _ < C.length; _++) {
          const { idx: oe, y: se } = C[_], re = l + t - se, te = d * u * re + d * y;
          let Q = s;
          _ > 0 && _ < C.length - 1 ? Q = (C[_ + 1].y - C[_ - 1].y) / 2 : _ === 0 && C.length > 1 ? Q = (C[1].y - C[0].y) / 2 : _ === C.length - 1 && C.length > 1 && (Q = (C[_].y - C[_ - 1].y) / 2);
          const ae = te * Q;
          Math.abs(ae) > 1e-10 && I.set(oe, [
            ae,
            0,
            0,
            0,
            0,
            0
          ]);
        }
        T = {
          elasticities: new Map(f.map((_, oe) => [
            oe,
            c
          ])),
          elasticitiesOrthogonal: new Map(f.map((_, oe) => [
            oe,
            c
          ])),
          thicknesses: new Map(f.map((_, oe) => [
            oe,
            n
          ])),
          poissonsRatios: new Map(f.map((_, oe) => [
            oe,
            i
          ])),
          shearModuli: new Map(f.map((_, oe) => [
            oe,
            p
          ]))
        };
      } else if ($ === 1 || $ === 2) {
        const L = P, C = l + t;
        if ($ === 2) {
          const _ = [
            [
              -M,
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
              -M,
              l,
              0
            ]
          ], oe = Math.max(3, Math.ceil((C - l) / s)), se = [];
          for (let ne = 0; ne <= oe; ne++) se.push([
            n,
            l + ne * (C - l) / oe,
            0
          ]);
          const re = Ht({
            points: [
              ..._,
              ...se
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
          m = re.nodes, f = re.elements;
          const te = s * 0.4, Q = [];
          for (let ne = 0; ne < m.length; ne++) {
            const Se = m[ne][0], Oe = m[ne][1];
            Math.abs(Se - n) < te && Oe >= l - te && Q.push(ne);
          }
          Q.sort((ne, Se) => m[ne][1] - m[Se][1]);
          const ae = [
            Q[0]
          ];
          for (let ne = 1; ne < Q.length; ne++) {
            const Se = m[Q[ne]][1] - m[ae[ae.length - 1]][1];
            Math.abs(Se) > s * 0.05 && ae.push(Q[ne]);
          }
          Q.length = 0, Q.push(...ae);
          const $e = /* @__PURE__ */ new Map();
          for (const ne of Q) {
            const Se = m.length;
            m.push([
              m[ne][0],
              m[ne][1],
              m[ne][2]
            ]), $e.set(ne, Se);
          }
          const Pe = f.length, Ae = [];
          for (let ne = 0; ne < Pe; ne++) {
            const Se = f[ne], Oe = (m[Se[0]][0] + m[Se[1]][0] + m[Se[2]][0]) / 3, Ze = (m[Se[0]][1] + m[Se[1]][1] + m[Se[2]][1]) / 3, lt = Oe >= -M && Oe <= P && Ze >= 0 && Ze <= l, go = Oe >= 0 && Oe <= n && Ze >= l && Ze <= l + t, Zt = lt || go;
            if (Ae.push(!Zt), !Zt) for (let _t = 0; _t < Se.length; _t++) {
              const Nt = $e.get(Se[_t]);
              Nt !== void 0 && (Se[_t] = Nt);
            }
          }
          const le = f.length;
          for (let ne = 0; ne < Q.length - 1; ne++) {
            const Se = Q[ne], Oe = Q[ne + 1], Ze = $e.get(Se), lt = $e.get(Oe);
            f.push([
              Oe,
              Se,
              Ze,
              lt
            ]);
          }
          const he = f.length - le, we = /* @__PURE__ */ new Map(), de = /* @__PURE__ */ new Map(), ze = /* @__PURE__ */ new Map(), Ce = /* @__PURE__ */ new Map(), Je = /* @__PURE__ */ new Map();
          for (let ne = 0; ne < Pe; ne++) Ae[ne] ? (we.set(ne, r), de.set(ne, r), Ce.set(ne, b), Je.set(ne, E), ze.set(ne, 1)) : (we.set(ne, c), de.set(ne, c), Ce.set(ne, i), Je.set(ne, p), ze.set(ne, 1));
          for (let ne = le; ne < f.length; ne++) we.set(ne, S), de.set(ne, 0), Ce.set(ne, 0), Je.set(ne, x), ze.set(ne, 0);
          T = {
            elasticities: we,
            elasticitiesOrthogonal: de,
            thicknesses: ze,
            poissonsRatios: Ce,
            shearModuli: Je
          };
          for (let ne = 0; ne < m.length; ne++) {
            const Se = m[ne][0], Oe = m[ne][1];
            Math.abs(Oe) < 1e-6 ? v.set(ne, [
              true,
              true,
              true,
              true,
              true,
              true
            ]) : Math.abs(Se - L) < s * 0.1 && v.set(ne, [
              true,
              false,
              true,
              true,
              true,
              true
            ]);
          }
          for (let ne = 0; ne < Pe; ne++) {
            if (!Ae[ne]) continue;
            const Se = f[ne], Oe = m[Se[0]], Ze = m[Se[1]], lt = m[Se[2]], go = Math.abs((Ze[0] - Oe[0]) * (lt[1] - Oe[1]) - (lt[0] - Oe[0]) * (Ze[1] - Oe[1])) / 2, Zt = -u * go / 3;
            for (const _t of Se) {
              const Nt = I.get(_t) || [
                0,
                0,
                0,
                0,
                0,
                0
              ];
              Nt[1] += Zt, I.set(_t, Nt);
            }
          }
          if (y > 0) {
            const ne = [];
            for (let Se = 0; Se < m.length; Se++) {
              const Oe = m[Se][0], Ze = m[Se][1];
              Math.abs(Ze - C) < s * 0.1 && Oe > n - 1e-6 && ne.push({
                idx: Se,
                x: Oe
              });
            }
            ne.sort((Se, Oe) => Se.x - Oe.x);
            for (let Se = 0; Se < ne.length; Se++) {
              let Oe = s;
              Se > 0 && Se < ne.length - 1 ? Oe = (ne[Se + 1].x - ne[Se - 1].x) / 2 : Se === 0 && ne.length > 1 ? Oe = (ne[1].x - ne[0].x) / 2 : Se === ne.length - 1 && ne.length > 1 && (Oe = (ne[Se].x - ne[Se - 1].x) / 2);
              const Ze = -y * Oe, lt = I.get(ne[Se].idx) || [
                0,
                0,
                0,
                0,
                0,
                0
              ];
              lt[1] += Ze, I.set(ne[Se].idx, lt);
            }
          }
          console.log(`  Interfaz Goodman: ${Q.length} nodos interfaz, ${he} elem interfaz, kn=${S}, ks=${x}`);
        } else {
          const _ = [
            [
              -M,
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
              -M,
              l,
              0
            ]
          ], oe = [
            [
              n,
              l,
              0
            ]
          ], se = Ht({
            points: [
              ..._,
              ...oe
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
          m = se.nodes, f = se.elements;
          const re = (le) => {
            const he = (m[le[0]][0] + m[le[1]][0] + m[le[2]][0]) / 3, we = (m[le[0]][1] + m[le[1]][1] + m[le[2]][1]) / 3, de = he >= -M && he <= P && we >= 0 && we <= l, ze = he >= 0 && he <= n && we >= l && we <= l + t;
            return de || ze;
          }, te = /* @__PURE__ */ new Map(), Q = /* @__PURE__ */ new Map(), ae = /* @__PURE__ */ new Map(), $e = /* @__PURE__ */ new Map(), Pe = /* @__PURE__ */ new Map(), Ae = [];
          for (let le = 0; le < f.length; le++) {
            const he = re(f[le]);
            Ae.push(!he), he ? (te.set(le, c), Q.set(le, c), $e.set(le, i), Pe.set(le, p), ae.set(le, 1)) : (te.set(le, r), Q.set(le, r), $e.set(le, b), Pe.set(le, E), ae.set(le, 1));
          }
          T = {
            elasticities: te,
            elasticitiesOrthogonal: Q,
            thicknesses: ae,
            poissonsRatios: $e,
            shearModuli: Pe
          };
          for (let le = 0; le < m.length; le++) {
            const he = m[le][0], we = m[le][1];
            Math.abs(we) < 1e-6 ? v.set(le, [
              true,
              true,
              true,
              true,
              true,
              true
            ]) : Math.abs(he - L) < s * 0.1 && v.set(le, [
              true,
              false,
              true,
              true,
              true,
              true
            ]);
          }
          for (let le = 0; le < f.length; le++) {
            if (!Ae[le]) continue;
            const he = f[le], we = m[he[0]], de = m[he[1]], ze = m[he[2]], Ce = Math.abs((de[0] - we[0]) * (ze[1] - we[1]) - (ze[0] - we[0]) * (de[1] - we[1])) / 2, Je = -u * Ce / 3;
            for (const ne of he) {
              const Se = I.get(ne) || [
                0,
                0,
                0,
                0,
                0,
                0
              ];
              Se[1] += Je, I.set(ne, Se);
            }
          }
          if (y > 0) {
            const le = [];
            for (let he = 0; he < m.length; he++) {
              const we = m[he][0], de = m[he][1];
              Math.abs(de - C) < s * 0.1 && we > n - 1e-6 && le.push({
                idx: he,
                x: we
              });
            }
            le.sort((he, we) => he.x - we.x);
            for (let he = 0; he < le.length; he++) {
              let we = s;
              he > 0 && he < le.length - 1 ? we = (le[he + 1].x - le[he - 1].x) / 2 : he === 0 && le.length > 1 ? we = (le[1].x - le[0].x) / 2 : he === le.length - 1 && le.length > 1 && (we = (le[he].x - le[he - 1].x) / 2);
              const de = -y * we, ze = I.get(le[he].idx) || [
                0,
                0,
                0,
                0,
                0,
                0
              ];
              ze[1] += de, I.set(le[he].idx, ze);
            }
          }
        }
      }
      if ($ === 3) {
        const L = Ht({
          points: q,
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
        m = L.nodes, f = L.elements;
        for (let re = 0; re < m.length; re++) Math.abs(m[re][1]) < 1e-6 && v.set(re, [
          true,
          true,
          true,
          true,
          true,
          true
        ]);
        const C = l + t, _ = Math.min(h, t), oe = C - _, se = [];
        for (let re = 0; re < m.length; re++) {
          const te = m[re][0], Q = m[re][1];
          Math.abs(te - n) < s * 0.6 && Q >= l - 1e-6 && se.push({
            idx: re,
            y: Q
          });
        }
        se.sort((re, te) => re.y - te.y);
        for (let re = 0; re < se.length; re++) {
          const { idx: te, y: Q } = se[re], ae = Math.max(0, C - Q);
          if (ae <= 0 || Q < oe - 1e-6) continue;
          const $e = Math.min(ae, _), Pe = a * $e;
          let Ae = s;
          re > 0 && re < se.length - 1 ? Ae = (se[re + 1].y - se[re - 1].y) / 2 : re === 0 && se.length > 1 ? Ae = (se[1].y - se[0].y) / 2 : re === se.length - 1 && se.length > 1 && (Ae = (se[re].y - se[re - 1].y) / 2);
          const le = Pe * Ae;
          Math.abs(le) > 1e-10 && I.set(te, [
            le,
            0,
            0,
            0,
            0,
            0
          ]);
        }
        T = {
          elasticities: new Map(f.map((re, te) => [
            te,
            c
          ])),
          elasticitiesOrthogonal: new Map(f.map((re, te) => [
            te,
            c
          ])),
          thicknesses: new Map(f.map((re, te) => [
            te,
            n
          ])),
          poissonsRatios: new Map(f.map((re, te) => [
            te,
            i
          ])),
          shearModuli: new Map(f.map((re, te) => [
            te,
            p
          ]))
        };
      }
      const R = {
        supports: v,
        loads: I
      }, F = [
        "Rankine (Ka)",
        "Suelo continuo",
        "Interfaz",
        "Presion agua"
      ];
      try {
        const L = Et(m, f, R, T), C = f.filter((ae) => ae.length === 3), _ = {};
        for (const ae of Object.keys(T)) {
          const $e = T[ae];
          if ($e && $e instanceof Map) {
            const Pe = /* @__PURE__ */ new Map();
            let Ae = 0;
            for (let le = 0; le < f.length; le++) f[le].length === 3 && ($e.has(le) && Pe.set(Ae, $e.get(le)), Ae++);
            _[ae] = Pe;
          }
        }
        const oe = xo(m, C, _, L), se = m.map((ae) => [
          ae[0],
          0,
          ae[1]
        ]);
        if (e.nodes.val = se, e.elements.val = C, L && L.deformations) {
          const ae = /* @__PURE__ */ new Map();
          L.deformations.forEach(($e, Pe) => {
            ae.set(Pe, [
              $e[0],
              $e[2],
              $e[1],
              $e[3],
              $e[5],
              $e[4]
            ]);
          }), e.deformOutputs && (e.deformOutputs.val = {
            deformations: ae
          });
        }
        const re = /* @__PURE__ */ new Map();
        v.forEach((ae, $e) => re.set($e, ae));
        const te = /* @__PURE__ */ new Map();
        I.forEach((ae, $e) => te.set($e, [
          ae[0],
          ae[2],
          ae[1],
          ae[3],
          ae[5],
          ae[4]
        ])), e.nodeInputs && (e.nodeInputs.val = {
          supports: re,
          loads: te
        }), e.elementInputs && (e.elementInputs.val = {}), e.analyzeOutputs && (e.analyzeOutputs.val = {});
        let Q = 0;
        L && L.deformations && L.deformations.forEach((ae) => {
          const $e = Math.sqrt(ae[0] * ae[0] + ae[1] * ae[1] + ae[2] * ae[2]);
          Q = Math.max(Q, $e);
        }), console.log(`Muro Contencion [${F[$]}]: ${m.length} nodos, ${f.length} triangulos`), console.log(`  H=${t}, B=${o}, tw=${n}, tb=${l}, Ka=${d}, gamma=${u}, qs=${y}`), $ === 1 && console.log(`  Es=${r}, nus=${b}`), $ === 2 && console.log(`  Es=${r}, nus=${b}, kn=${S}, ks=${x}`), $ === 3 && console.log(`  gammaW=${a}, Hw=${h}`), console.log(`  max|u| = ${Q.toExponential(4)}`);
      } catch (L) {
        console.warn("Muro Contencion failed:", L.message);
      }
      setTimeout(() => ut(), 50), je();
    }
    function _n() {
      const t = D("Lx") || 2, o = D("Ly") || 2, n = D("t") || 0.5, l = D("colA") || 0.4, s = D("colH") || 1.5, c = Math.round(D("nx") || 8), i = Math.round(D("ny") || 8), p = D("E") || 25e6, u = D("nu") || 0.2, d = D("P") || -500, r = D("Mx") || 0, b = D("My") || 0, E = D("ks") || 2e4, S = t / c, x = o / i, a = t / 2, h = o / 2, y = l / 2, $ = [];
      for (let v = 0; v <= i; v++) for (let I = 0; I <= c; I++) {
        const T = v * (c + 1) + I;
        let R = S, F = x;
        (I === 0 || I === c) && (R = S / 2), (v === 0 || v === i) && (F = x / 2), $.push({
          node: T,
          dof: 0,
          k: E * R * F
        });
      }
      let M = 0;
      for (let v = 0; v <= i; v++) for (let I = 0; I <= c; I++) Math.abs(I * S - a) <= y + 1e-6 && Math.abs(v * x - h) <= y + 1e-6 && M++;
      const P = d / Math.max(M, 1), q = [];
      for (let v = 0; v <= i; v++) for (let I = 0; I <= c; I++) {
        const T = I * S, R = v * x;
        Math.abs(T - a) <= y + 1e-6 && Math.abs(R - h) <= y + 1e-6 && q.push({
          node: v * (c + 1) + I,
          dof: 0,
          value: P
        });
      }
      if (Math.abs(r) > 1e-6) {
        const v = y > 1e-6 ? y : x, I = r / v;
        for (let T = 0; T <= i; T++) for (let R = 0; R <= c; R++) {
          const F = R * S, L = T * x;
          if (Math.abs(F - a) <= y + 1e-6 && Math.abs(L - h) <= y + 1e-6) {
            const C = L - h;
            if (Math.abs(C) > 1e-6) {
              const _ = C > 0 ? 1 : -1;
              q.push({
                node: T * (c + 1) + R,
                dof: 0,
                value: _ * I / M * 2
              });
            }
          }
        }
      }
      if (Math.abs(b) > 1e-6) {
        const v = y > 1e-6 ? y : S, I = b / v;
        for (let T = 0; T <= i; T++) for (let R = 0; R <= c; R++) {
          const F = R * S, L = T * x;
          if (Math.abs(F - a) <= y + 1e-6 && Math.abs(L - h) <= y + 1e-6) {
            const C = F - a;
            if (Math.abs(C) > 1e-6) {
              const _ = C > 0 ? 1 : -1;
              q.push({
                node: T * (c + 1) + R,
                dof: 0,
                value: _ * I / M * 2
              });
            }
          }
        }
      }
      const f = {
        1: 2,
        2: 1,
        3: 0
      }[Fe] ?? 1;
      console.log(`Zapata: ${t}x${o}m, t=${n}m, ${c}x${i} elem`), console.log(`  col=${l}m, P=${d}, Mx=${r}, My=${b}, ks=${E}`);
      try {
        const v = un({
          E: p,
          nu: u,
          thickness: n,
          meshLx: t,
          meshLy: o,
          meshNx: c,
          meshNy: i,
          bcType: "none",
          pressure: 0,
          theoryType: f,
          springs: $,
          pointLoads: q
        });
        console.log(`  Solved: w_max = ${v.maxW.toExponential(4)}`);
        const I = v.nodeResults.map((oe) => [
          oe.x,
          oe.y,
          0
        ]), T = I.length;
        I.push([
          a - y,
          h - y,
          0
        ]), I.push([
          a + y,
          h - y,
          0
        ]), I.push([
          a + y,
          h + y,
          0
        ]), I.push([
          a - y,
          h + y,
          0
        ]), I.push([
          a - y,
          h - y,
          s
        ]), I.push([
          a + y,
          h - y,
          s
        ]), I.push([
          a + y,
          h + y,
          s
        ]), I.push([
          a - y,
          h + y,
          s
        ]);
        const R = v.elementResults.map((oe) => [
          ...oe.nodes
        ]);
        R.push([
          T,
          T + 4
        ]), R.push([
          T + 1,
          T + 5
        ]), R.push([
          T + 2,
          T + 6
        ]), R.push([
          T + 3,
          T + 7
        ]), R.push([
          T + 4,
          T + 5
        ]), R.push([
          T + 5,
          T + 6
        ]), R.push([
          T + 6,
          T + 7
        ]), R.push([
          T + 7,
          T + 4
        ]), R.push([
          T,
          T + 1
        ]), R.push([
          T + 1,
          T + 2
        ]), R.push([
          T + 2,
          T + 3
        ]), R.push([
          T + 3,
          T
        ]), e.nodes.val = I, e.elements.val = R;
        const F = /* @__PURE__ */ new Map();
        v.nodeResults.forEach((oe, se) => {
          F.set(se, [
            0,
            0,
            oe.w,
            oe.bx,
            oe.by,
            0
          ]);
        }), e.deformOutputs && (e.deformOutputs.val = {
          deformations: F
        });
        const L = /* @__PURE__ */ new Map();
        v.nodeResults.forEach((oe, se) => {
          const re = oe.x, te = oe.y;
          (re < 1e-6 || re > t - 1e-6 || te < 1e-6 || te > o - 1e-6) && L.set(se, [
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
          d / 4,
          0,
          0,
          0
        ]), C.set(T + 5, [
          0,
          0,
          d / 4,
          0,
          0,
          0
        ]), C.set(T + 6, [
          0,
          0,
          d / 4,
          0,
          0,
          0
        ]), C.set(T + 7, [
          0,
          0,
          d / 4,
          0,
          0,
          0
        ]), e.nodeInputs && (e.nodeInputs.val = {
          supports: L,
          loads: C
        }), e.elementInputs && (e.elementInputs.val = {}), e.analyzeOutputs) {
          const oe = v.elementResults.length, se = /* @__PURE__ */ new Map(), re = /* @__PURE__ */ new Map(), te = /* @__PURE__ */ new Map();
          v.elementResults.forEach((Q, ae) => {
            se.set(ae, [
              Q.Mxx,
              Q.Mxx,
              Q.Mxx
            ]), re.set(ae, [
              Q.Myy,
              Q.Myy,
              Q.Myy
            ]), te.set(ae, [
              Q.Mxy,
              Q.Mxy,
              Q.Mxy
            ]);
          }), e.analyzeOutputs.val = {
            bendingXX: se,
            bendingYY: re,
            bendingXY: te
          };
        }
        const _ = Ge();
        _ && (_.settings.shellResults.val = "bendingXX");
      } catch (v) {
        console.warn("Zapata solver failed:", v.message);
      }
      setTimeout(() => ut(), 50), je();
    }
    function On() {
      const t = D("Lx") || 0.4, o = D("Ly") || 0.4, n = D("t") || 0.025, l = D("dBolt") || 0.022, s = D("sx") || 0.28, c = D("sy") || 0.28, i = D("colA") || 0.2, p = D("meshSize") || 8e-3, u = D("E") || 2e8, d = D("nu") || 0.3, r = u / (2 * (1 + d)), b = D("P") || -200, E = Math.round(D("nBolts") || 4), S = t / 2, x = o / 2, a = l / 2, h = i / 2, y = [];
      E >= 4 && (y.push([
        S - s / 2,
        x - c / 2
      ]), y.push([
        S + s / 2,
        x - c / 2
      ]), y.push([
        S + s / 2,
        x + c / 2
      ]), y.push([
        S - s / 2,
        x + c / 2
      ])), E >= 6 && (y.push([
        S,
        x - c / 2
      ]), y.push([
        S,
        x + c / 2
      ])), E >= 8 && (y.push([
        S - s / 2,
        x
      ]), y.push([
        S + s / 2,
        x
      ]));
      const { nodes: $, elements: M } = Ht({
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
      }), P = (F, L) => {
        for (const [C, _] of y) if ((F - C) * (F - C) + (L - _) * (L - _) < a * a) return true;
        return false;
      }, q = M.filter((F) => {
        const L = ($[F[0]][0] + $[F[1]][0] + $[F[2]][0]) / 3, C = ($[F[0]][1] + $[F[1]][1] + $[F[2]][1]) / 3;
        return !P(L, C);
      }), m = $, f = /* @__PURE__ */ new Map();
      for (let F = 0; F < m.length; F++) {
        const L = m[F][0], C = m[F][1];
        for (const [_, oe] of y) {
          const se = Math.sqrt((L - _) * (L - _) + (C - oe) * (C - oe));
          se >= a * 0.7 && se <= a * 1.5 && f.set(F, [
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
      let I = 0;
      for (let F = 0; F < m.length; F++) {
        const L = m[F][0], C = m[F][1];
        Math.abs(L - S) <= h && Math.abs(C - x) <= h && I++;
      }
      const T = b / Math.max(I, 1);
      for (let F = 0; F < m.length; F++) {
        const L = m[F][0], C = m[F][1];
        if (Math.abs(L - S) <= h && Math.abs(C - x) <= h) {
          const _ = v.get(F) || [
            0,
            0,
            0,
            0,
            0,
            0
          ];
          _[2] += T, v.set(F, _);
        }
      }
      const R = {
        elasticities: new Map(q.map((F, L) => [
          L,
          u
        ])),
        elasticitiesOrthogonal: new Map(q.map((F, L) => [
          L,
          u
        ])),
        thicknesses: new Map(q.map((F, L) => [
          L,
          n
        ])),
        poissonsRatios: new Map(q.map((F, L) => [
          L,
          d
        ])),
        shearModuli: new Map(q.map((F, L) => [
          L,
          r
        ]))
      };
      console.log(`Placa Base: ${t * 1e3}x${o * 1e3}mm, t=${n * 1e3}mm, ${E} pernos d=${l * 1e3}mm`), console.log(`  P=${b} kN, col=${i * 1e3}mm, mesh=${p * 1e3}mm`), console.log(`  ${q.length} triangulos, ${m.length} nodos`);
      try {
        const F = Et(m, q, {
          supports: f,
          loads: v
        }, R), L = xo(m, q, R, F);
        e.nodes.val = m, e.elements.val = q, F && e.deformOutputs && (e.deformOutputs.val = F), e.nodeInputs && (e.nodeInputs.val = {
          supports: f,
          loads: v
        }), e.elementInputs && (e.elementInputs.val = {}), L && e.analyzeOutputs && (e.analyzeOutputs.val = L);
        let C = 0;
        F && F.deformations && F.deformations.forEach((_) => {
          const oe = Math.sqrt(_[0] * _[0] + _[1] * _[1] + _[2] * _[2]);
          C = Math.max(C, oe);
        }), console.log(`  max|u| = ${C.toExponential(4)}`);
      } catch (F) {
        console.warn("Placa Base failed:", F.message);
      }
      setTimeout(() => ut(), 50), je();
    }
    function Nn() {
      const t = D("colB") || 0.3, o = D("colH") || 0.3, n = D("colT") || 8e-3, l = D("colLen") || 1.5, s = D("Lx") || 0.45, c = D("Ly") || 0.45, i = D("tPlaca") || 0.025, p = D("dBolt") || 0.022, u = D("sx") || 0.32, d = D("sy") || 0.32, r = Math.round(D("nSubColV") || 6), b = Math.round(D("nSubColH") || 4), E = Math.round(D("nSubPlaca") || 10), S = D("E") || 2e8, x = D("nu") || 0.3, a = S / (2 * (1 + x)), h = D("P") || -300, y = s / 2, $ = c / 2, M = p / 2, P = t / 2, q = o / 2, m = [], f = [], v = E, I = s / v, T = c / v, R = (de, ze) => ze * (v + 1) + de;
      for (let de = 0; de <= v; de++) for (let ze = 0; ze <= v; ze++) m.push([
        ze * I,
        de * T,
        0
      ]);
      const F = [
        [
          y - u / 2,
          $ - d / 2
        ],
        [
          y + u / 2,
          $ - d / 2
        ],
        [
          y + u / 2,
          $ + d / 2
        ],
        [
          y - u / 2,
          $ + d / 2
        ]
      ], L = (de, ze) => {
        for (const [Ce, Je] of F) if ((de - Ce) * (de - Ce) + (ze - Je) * (ze - Je) < M * M) return true;
        return false;
      }, C = f.length;
      for (let de = 0; de < v; de++) for (let ze = 0; ze < v; ze++) {
        const Ce = (ze + 0.5) * I, Je = (de + 0.5) * T;
        L(Ce, Je) || f.push([
          R(ze, de),
          R(ze + 1, de),
          R(ze + 1, de + 1),
          R(ze, de + 1)
        ]);
      }
      const _ = f.length - C, oe = r, se = b, re = [
        [
          y - P,
          $ - q
        ],
        [
          y + P,
          $ - q
        ],
        [
          y + P,
          $ + q
        ],
        [
          y - P,
          $ + q
        ]
      ], te = f.length, Q = [
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
      ], ae = (de, ze) => {
        for (let Ce = 0; Ce < (v + 1) * (v + 1); Ce++) if (Math.abs(m[Ce][0] - de) < I * 0.3 && Math.abs(m[Ce][1] - ze) < T * 0.3 && Math.abs(m[Ce][2]) < 1e-6) return Ce;
        return -1;
      };
      for (const [de, ze] of Q) {
        const [Ce, Je] = re[de], [ne, Se] = re[ze], Oe = [];
        for (let Ze = 0; Ze <= oe; Ze++) {
          const lt = [], go = Ze / oe * l;
          for (let Zt = 0; Zt <= se; Zt++) {
            const _t = Zt / se, Nt = Ce + _t * (ne - Ce), pn = Je + _t * (Se - Je);
            if (Ze === 0) {
              const Rt = ae(Nt, pn);
              if (Rt >= 0) {
                lt.push(Rt);
                continue;
              }
            }
            let fn = -1;
            for (let Rt = 0; Rt < m.length; Rt++) if (Math.abs(m[Rt][0] - Nt) < 1e-6 && Math.abs(m[Rt][1] - pn) < 1e-6 && Math.abs(m[Rt][2] - go) < 1e-6) {
              fn = Rt;
              break;
            }
            fn >= 0 ? lt.push(fn) : (lt.push(m.length), m.push([
              Nt,
              pn,
              go
            ]));
          }
          Oe.push(lt);
        }
        for (let Ze = 0; Ze < oe; Ze++) for (let lt = 0; lt < se; lt++) f.push([
          Oe[Ze][lt],
          Oe[Ze][lt + 1],
          Oe[Ze + 1][lt + 1],
          Oe[Ze + 1][lt]
        ]);
      }
      const $e = f.length - te, Pe = /* @__PURE__ */ new Map();
      for (let de = 0; de < (v + 1) * (v + 1); de++) {
        const ze = m[de][0], Ce = m[de][1];
        for (const [Je, ne] of F) {
          const Se = Math.sqrt((ze - Je) * (ze - Je) + (Ce - ne) * (Ce - ne));
          Se >= M * 0.5 && Se <= M * 2 && Pe.set(de, [
            true,
            true,
            true,
            true,
            true,
            true
          ]);
        }
      }
      const Ae = /* @__PURE__ */ new Map(), le = [];
      for (let de = 0; de < m.length; de++) Math.abs(m[de][2] - l) < 1e-6 && le.push(de);
      const he = h / Math.max(le.length, 1);
      for (const de of le) Ae.set(de, [
        0,
        0,
        he,
        0,
        0,
        0
      ]);
      const we = {
        elasticities: /* @__PURE__ */ new Map(),
        poissonsRatios: /* @__PURE__ */ new Map(),
        thicknesses: /* @__PURE__ */ new Map(),
        shearModuli: /* @__PURE__ */ new Map()
      };
      for (let de = C; de < C + _; de++) we.elasticities.set(de, S), we.poissonsRatios.set(de, x), we.thicknesses.set(de, i), we.shearModuli.set(de, a);
      for (let de = te; de < te + $e; de++) we.elasticities.set(de, S), we.poissonsRatios.set(de, x), we.thicknesses.set(de, n), we.shearModuli.set(de, a);
      console.log(`Col+Placa 3D: col ${t * 1e3}x${o * 1e3}x${n * 1e3}mm, h=${l}m`), console.log(`  Placa ${s * 1e3}x${c * 1e3}mm, t=${i * 1e3}mm, 4 pernos d=${p * 1e3}mm`), console.log(`  ${_} Q4 placa + ${$e} Q4 columna = ${f.length} total`), console.log(`  ${m.length} nodos, P=${h} kN`);
      try {
        const de = Et(m, f, {
          supports: Pe,
          loads: Ae
        }, we), ze = xo(m, f, we, de);
        e.nodes.val = m, e.elements.val = f, de && e.deformOutputs && (e.deformOutputs.val = de), e.nodeInputs && (e.nodeInputs.val = {
          supports: Pe,
          loads: Ae
        }), e.elementInputs && (e.elementInputs.val = we), ze && e.analyzeOutputs && (e.analyzeOutputs.val = ze);
        let Ce = 0;
        (de == null ? void 0 : de.deformations) && de.deformations.forEach((Je) => {
          const ne = Math.sqrt(Je[0] * Je[0] + Je[1] * Je[1] + Je[2] * Je[2]);
          Ce = Math.max(Ce, ne);
        }), console.log(`  max|u| = ${Ce.toExponential(4)}`);
      } catch (de) {
        console.warn("Col+Placa failed:", de.message), e.nodes.val = m, e.elements.val = f, e.nodeInputs && (e.nodeInputs.val = {
          supports: Pe,
          loads: Ae
        });
      }
      setTimeout(() => ut(), 50), je();
    }
    function Rn() {
      const t = D("H") || 6, o = D("angle") || 45, n = D("bTop") || 3, l = D("bBot") || 3, s = D("meshSize") || 2, c = D("E") || 5e4, i = D("nu") || 0.3, p = D("gamma") || 18, u = D("c") || 15, d = D("phi") || 30, r = D("qs") || 0, b = t / Math.tan(o * Math.PI / 180), E = l + b + n, S = t, x = [
        [
          0,
          -S,
          0
        ],
        [
          E,
          -S,
          0
        ],
        [
          E,
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
      ], { nodes: a, elements: h } = Ht({
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
      }), y = a, $ = [], M = /* @__PURE__ */ new Map();
      for (let q = 0; q < y.length; q++) {
        const m = y[q][0], f = y[q][1];
        Math.abs(f + S) < 1e-6 ? ($.push({
          node: q,
          fixX: true,
          fixY: true
        }), M.set(q, [
          true,
          true,
          true,
          true,
          true,
          true
        ])) : (Math.abs(m) < 1e-6 || Math.abs(m - E) < 1e-6) && ($.push({
          node: q,
          fixX: true,
          fixY: false
        }), M.set(q, [
          true,
          false,
          true,
          true,
          true,
          true
        ]));
      }
      const P = t - s * 0.3;
      try {
        const q = y.map((L) => [
          L[0],
          L[1]
        ]), m = h.map((L) => [
          L[0],
          L[1],
          L[2]
        ]), f = Vs({
          nodes: q,
          elements: m,
          E: c,
          nu: i,
          gamma: p,
          c: u,
          phi: d,
          thickness: 1,
          supports: $,
          surcharge: r,
          surfaceYThreshold: P
        }), v = y.map((L) => [
          L[0],
          0,
          L[1]
        ]);
        e.nodes.val = v, e.elements.val = h;
        const I = /* @__PURE__ */ new Map();
        for (let L = 0; L < f.displacements.length; L++) {
          const [C, _] = f.displacements[L];
          I.set(L, [
            C,
            0,
            _,
            0,
            0,
            0
          ]);
        }
        e.deformOutputs && (e.deformOutputs.val = {
          deformations: I
        }), e.nodeInputs && (e.nodeInputs.val = {
          supports: M
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
        let R = 0;
        for (const [L, C] of f.displacements) {
          const _ = Math.sqrt(L * L + C * C);
          R = Math.max(R, _);
        }
        let F = 0;
        for (const L of f.plasticStrain) F = Math.max(F, L);
        console.log(`Talud SRM: ${y.length} nodos, ${h.length} triangulos`), console.log(`  H=${t}, angulo=${o}\xB0, c=${u} kPa, \u03C6=${d}\xB0, \u03B3=${p}`), console.log("  \u2550\u2550\u2550 Strength Reduction Method (Mohr-Coulomb) \u2550\u2550\u2550"), console.log(`  FOS = ${f.fos.toFixed(3)}`), console.log(`  max|u| = ${R.toExponential(4)}`), console.log(`  max \u03B5_pl = ${F.toExponential(4)}`), f.fos < 1 ? console.warn("  \u26A0 TALUD INESTABLE (FOS < 1.0)") : f.fos < 1.5 && console.warn("  \u26A0 FOS < 1.5 \u2014 revisar estabilidad");
      } catch (q) {
        console.warn("Talud SRM failed:", q.message);
      }
      setTimeout(() => ut(), 50), je();
    }
    let Ft = null, nt = null, Ot = null;
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
    function Qe(t) {
      const o = yo.find((n) => n.id === W);
      return t / o.toM;
    }
    function et(t) {
      const o = yo.find((n) => n.id === W);
      return t * o.toM;
    }
    function to(t) {
      const o = yn.find((l) => l.id === G.forceId), n = yo.find((l) => l.id === G.lengthId);
      return t / (o.toKN / (n.toM * n.toM));
    }
    function Go(t) {
      const o = yn.find((l) => l.id === G.forceId), n = yo.find((l) => l.id === G.lengthId);
      return t * (o.toKN / (n.toM * n.toM));
    }
    function Vo() {
      return G.label;
    }
    function ys() {
      switch (yo.find((o) => o.id === W).id) {
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
    function Hn(t, o, n, l, s) {
      const c = N.steelVigaType, i = c === 0 ? Po() : _o();
      if (N.vigaMat === 0) {
        for (let p = 0; p < o.length; p++) {
          const u = o[p], d = `b${n}${p}`, r = `h${n}${p}`, b = {};
          b[d] = +Qe(u.b).toFixed(2), b[r] = +Qe(u.h).toFixed(2), t.addBinding(b, d, {
            min: l[0],
            max: l[1],
            step: l[2],
            label: `b sv${n}${p + 1}`
          }), t.addBinding(b, r, {
            min: l[0],
            max: l[1],
            step: l[2],
            label: `h sv${n}${p + 1}`
          });
        }
        t.on("change", (p) => {
          var _a;
          const u = (_a = p.target) == null ? void 0 : _a.key, d = u == null ? void 0 : u.match(new RegExp(`^b${n}(\\d+)$`)), r = u == null ? void 0 : u.match(new RegExp(`^h${n}(\\d+)$`));
          d && (o[parseInt(d[1])].b = et(p.value), be()), r && (o[parseInt(r[1])].h = et(p.value), be());
        });
      } else if (c <= 1) {
        for (let p = 0; p < o.length; p++) {
          const u = {};
          u[`p${n}${p}`] = o[p].profileIdx ?? 0, t.addBinding(u, `p${n}${p}`, {
            label: `sv${n}${p + 1}`,
            options: i
          });
        }
        t.on("change", (p) => {
          var _a, _b;
          const d = (_b = (_a = p.target) == null ? void 0 : _a.key) == null ? void 0 : _b.match(new RegExp(`^p${n}(\\d+)$`));
          d && (o[parseInt(d[1])].profileIdx = p.value, be());
        });
      } else if (c === 2) {
        for (let p = 0; p < o.length; p++) {
          const u = o[p], d = {}, r = `${n}${p}`;
          d[`bf${r}`] = +Qe(u.bf ?? 0.2).toFixed(3), d[`h${r}`] = +Qe(u.hf ?? 0.4).toFixed(3), d[`tf${r}`] = +Qe(u.tf ?? 0.015).toFixed(3), d[`tw${r}`] = +Qe(u.tw ?? 0.01).toFixed(3), t.addBinding(d, `bf${r}`, {
            min: l[0],
            max: l[1],
            step: l[2],
            label: `bf sv${n}${p + 1}`
          }), t.addBinding(d, `h${r}`, {
            min: l[0],
            max: l[1],
            step: l[2],
            label: `h sv${n}${p + 1}`
          }), t.addBinding(d, `tf${r}`, {
            min: s[0],
            max: s[1],
            step: s[2],
            label: `tf sv${n}${p + 1}`
          }), t.addBinding(d, `tw${r}`, {
            min: s[0],
            max: s[1],
            step: s[2],
            label: `tw sv${n}${p + 1}`
          });
        }
        t.on("change", (p) => {
          var _a;
          const u = (_a = p.target) == null ? void 0 : _a.key;
          for (let d = 0; d < o.length; d++) {
            const r = `${n}${d}`;
            u === `bf${r}` && (o[d].bf = et(p.value), be()), u === `h${r}` && (o[d].hf = et(p.value), be()), u === `tf${r}` && (o[d].tf = et(p.value), be()), u === `tw${r}` && (o[d].tw = et(p.value), be());
          }
        });
      } else {
        for (let p = 0; p < o.length; p++) {
          const u = o[p], d = {}, r = `${n}${p}`;
          d[`bc${r}`] = +Qe(u.bc ?? 0.2).toFixed(3), d[`hc${r}`] = +Qe(u.hc ?? 0.3).toFixed(3), d[`t${r}`] = +Qe(u.t ?? 8e-3).toFixed(3), t.addBinding(d, `bc${r}`, {
            min: l[0],
            max: l[1],
            step: l[2],
            label: `b sv${n}${p + 1}`
          }), t.addBinding(d, `hc${r}`, {
            min: l[0],
            max: l[1],
            step: l[2],
            label: `h sv${n}${p + 1}`
          }), t.addBinding(d, `t${r}`, {
            min: s[0],
            max: s[1],
            step: s[2],
            label: `t sv${n}${p + 1}`
          });
        }
        t.on("change", (p) => {
          var _a;
          const u = (_a = p.target) == null ? void 0 : _a.key;
          for (let d = 0; d < o.length; d++) {
            const r = `${n}${d}`;
            u === `bc${r}` && (o[d].bc = et(p.value), be()), u === `hc${r}` && (o[d].hc = et(p.value), be()), u === `t${r}` && (o[d].t = et(p.value), be());
          }
        });
      }
    }
    function po() {
      var _a;
      if (nt) {
        try {
          nt.dispose();
        } catch {
        }
        nt = null;
      }
      const t = document.getElementById("sections");
      if (t && (t.innerHTML = ""), k !== "edificio" && k !== "frame") {
        t && (t.style.display = "none");
        return;
      }
      const o = vs();
      if (!o) return;
      o.style.display = "";
      const n = w, l = Math.round(((_a = K.nPisos) == null ? void 0 : _a.val) ?? 3), s = ys(), c = $s(), i = U.length || 1, p = ee.length || 1;
      for (; N.perFloor.length < l; ) {
        const m = N.perFloor.length > 0 ? JSON.parse(JSON.stringify(N.perFloor[N.perFloor.length - 1])) : qe(i, p);
        N.perFloor.push(m);
      }
      N.perFloor.length > l && (N.perFloor.length = l);
      for (const m of N.perFloor) {
        for (; m.vigasX.length < i; ) m.vigasX.push(m.vigasX.length > 0 ? {
          ...m.vigasX[m.vigasX.length - 1]
        } : ce());
        for (m.vigasX.length > i && (m.vigasX.length = i); m.vigasY.length < p; ) m.vigasY.push(m.vigasY.length > 0 ? {
          ...m.vigasY[m.vigasY.length - 1]
        } : ce());
        m.vigasY.length > p && (m.vigasY.length = p);
      }
      nt = new qo({
        title: `Sections (${n.label})`,
        container: o
      });
      const u = {
        colMat: N.colMat
      };
      if (nt.addBinding(u, "colMat", {
        label: "Col Material",
        options: {
          Hormigon: 0,
          Acero: 1,
          CFT: 2
        }
      }).on("change", (m) => {
        N.colMat = m.value, po(), be();
      }), N.colMat === 0) {
        const m = {
          forma: N.colShape
        };
        nt.addBinding(m, "forma", {
          label: "Col forma",
          options: {
            Rectangular: 0,
            Circular: 1
          }
        }).on("change", (v) => {
          N.colShape = v.value, po(), be();
        });
        const f = {
          fc: +to(N.fc).toFixed(1)
        };
        nt.addBinding(f, "fc", {
          min: c[0],
          max: c[1],
          step: c[2],
          label: `f'c col (${Vo()})`
        }), nt.on("change", (v) => {
          var _a2;
          ((_a2 = v.target) == null ? void 0 : _a2.key) === "fc" && (N.fc = Go(v.value), be());
        });
      } else if (N.colMat === 1) {
        const m = {
          colType: N.steelColType
        };
        nt.addBinding(m, "colType", {
          label: "Col tipo",
          options: {
            "W profile": 0,
            "HSS profile": 1,
            "I param": 2,
            Tubular: 3
          }
        }).on("change", (f) => {
          N.steelColType = f.value, po(), be();
        });
      }
      nt.addBlade({
        view: "separator"
      });
      const d = {
        vigaMat: N.vigaMat
      };
      if (nt.addBinding(d, "vigaMat", {
        label: "Viga Material",
        options: {
          Hormigon: 0,
          Acero: 1
        }
      }).on("change", (m) => {
        N.vigaMat = m.value, po(), be();
      }), N.vigaMat === 1) {
        const m = {
          vigaType: N.steelVigaType
        };
        nt.addBinding(m, "vigaType", {
          label: "Viga tipo",
          options: {
            "W profile": 0,
            "HSS profile": 1,
            "I param": 2,
            Tubular: 3
          }
        }).on("change", (f) => {
          N.steelVigaType = f.value, po(), be();
        });
      }
      const r = N.steelColType === 0 ? Po() : _o();
      N.steelVigaType === 0 ? Po() : _o();
      const b = W === "m" ? [
        5e-3,
        0.1,
        1e-3
      ] : W === "cm" ? [
        0.5,
        10,
        0.1
      ] : W === "mm" ? [
        5,
        100,
        1
      ] : W === "in" ? [
        0.2,
        4,
        0.05
      ] : [
        0.01,
        0.5,
        5e-3
      ];
      for (let m = 0; m < l; m++) {
        const f = N.perFloor[m], v = nt.addFolder({
          title: `Piso ${m + 1}`,
          expanded: m < 2
        });
        if (N.colMat === 0) if (N.colShape === 1) {
          const I = {
            dCol: +Qe(f.dCol).toFixed(2)
          };
          v.addBinding(I, "dCol", {
            min: s[0],
            max: s[1],
            step: s[2],
            label: "d col"
          }), v.on("change", (T) => {
            var _a2;
            ((_a2 = T.target) == null ? void 0 : _a2.key) === "dCol" && (f.dCol = et(T.value), be());
          });
        } else {
          const I = {
            bCol: +Qe(f.bCol).toFixed(2),
            hCol: +Qe(f.hCol).toFixed(2)
          };
          v.addBinding(I, "bCol", {
            min: s[0],
            max: s[1],
            step: s[2],
            label: "b col"
          }), v.addBinding(I, "hCol", {
            min: s[0],
            max: s[1],
            step: s[2],
            label: "h col"
          }), v.on("change", (T) => {
            var _a2, _b;
            ((_a2 = T.target) == null ? void 0 : _a2.key) === "bCol" && (f.bCol = et(T.value), be()), ((_b = T.target) == null ? void 0 : _b.key) === "hCol" && (f.hCol = et(T.value), be());
          });
        }
        else if (N.colMat === 1) if (N.steelColType <= 1) {
          const I = {
            col: f.colProfileIdx
          };
          v.addBinding(I, "col", {
            label: "Columna",
            options: r
          }).on("change", (T) => {
            f.colProfileIdx = T.value, be();
          });
        } else if (N.steelColType === 2) {
          const I = {
            bf: +Qe(f.colBf ?? 0.3).toFixed(3),
            h: +Qe(f.colHf ?? 0.3).toFixed(3),
            tf: +Qe(f.colTf ?? 0.02).toFixed(3),
            tw: +Qe(f.colTw ?? 0.012).toFixed(3)
          };
          v.addBinding(I, "bf", {
            min: s[0],
            max: s[1],
            step: s[2],
            label: "Col bf"
          }), v.addBinding(I, "h", {
            min: s[0],
            max: s[1],
            step: s[2],
            label: "Col h"
          }), v.addBinding(I, "tf", {
            min: b[0],
            max: b[1],
            step: b[2],
            label: "Col tf"
          }), v.addBinding(I, "tw", {
            min: b[0],
            max: b[1],
            step: b[2],
            label: "Col tw"
          }), v.on("change", (T) => {
            var _a2, _b, _c, _d;
            ((_a2 = T.target) == null ? void 0 : _a2.key) === "bf" && (f.colBf = et(T.value), be()), ((_b = T.target) == null ? void 0 : _b.key) === "h" && (f.colHf = et(T.value), be()), ((_c = T.target) == null ? void 0 : _c.key) === "tf" && (f.colTf = et(T.value), be()), ((_d = T.target) == null ? void 0 : _d.key) === "tw" && (f.colTw = et(T.value), be());
          });
        } else {
          const I = {
            bc: +Qe(f.colBc ?? 0.3).toFixed(3),
            hc: +Qe(f.colHc ?? 0.3).toFixed(3),
            t: +Qe(f.colT ?? 0.01).toFixed(3)
          };
          v.addBinding(I, "bc", {
            min: s[0],
            max: s[1],
            step: s[2],
            label: "Col b"
          }), v.addBinding(I, "hc", {
            min: s[0],
            max: s[1],
            step: s[2],
            label: "Col h"
          }), v.addBinding(I, "t", {
            min: b[0],
            max: b[1],
            step: b[2],
            label: "Col t"
          }), v.on("change", (T) => {
            var _a2, _b, _c;
            ((_a2 = T.target) == null ? void 0 : _a2.key) === "bc" && (f.colBc = et(T.value), be()), ((_b = T.target) == null ? void 0 : _b.key) === "hc" && (f.colHc = et(T.value), be()), ((_c = T.target) == null ? void 0 : _c.key) === "t" && (f.colT = et(T.value), be());
          });
        }
        else {
          const I = {
            bc: +Qe(f.colBc ?? 0.3).toFixed(3),
            hc: +Qe(f.colHc ?? 0.3).toFixed(3),
            t: +Qe(f.colT ?? 0.01).toFixed(3),
            Es: +to(f.colEs ?? 2e8).toFixed(0),
            nuS: f.colNuS ?? 0.3,
            fc: +to(f.colFc ?? 28e3).toFixed(1),
            nuC: f.colNuC ?? 0.2
          };
          v.addBinding(I, "bc", {
            min: s[0],
            max: s[1],
            step: s[2],
            label: "Col b"
          }), v.addBinding(I, "hc", {
            min: s[0],
            max: s[1],
            step: s[2],
            label: "Col h"
          }), v.addBinding(I, "t", {
            min: b[0],
            max: b[1],
            step: b[2],
            label: "Col t"
          }), v.addBlade({
            view: "separator"
          });
          const T = +to(1e8).toFixed(0), R = +to(3e8).toFixed(0), F = Math.max(1, Math.round((R - T) / 200));
          v.addBinding(I, "Es", {
            min: T,
            max: R,
            step: F,
            label: `Es (${Vo()})`
          }), v.addBinding(I, "nuS", {
            min: 0.15,
            max: 0.45,
            step: 0.01,
            label: "\u03BDs"
          }), v.addBinding(I, "fc", {
            min: c[0],
            max: c[1],
            step: c[2],
            label: `f'c (${Vo()})`
          }), v.addBinding(I, "nuC", {
            min: 0.1,
            max: 0.35,
            step: 0.01,
            label: "\u03BDc"
          }), v.on("change", (L) => {
            var _a2, _b, _c, _d, _e2, _f, _g;
            ((_a2 = L.target) == null ? void 0 : _a2.key) === "bc" && (f.colBc = et(L.value), be()), ((_b = L.target) == null ? void 0 : _b.key) === "hc" && (f.colHc = et(L.value), be()), ((_c = L.target) == null ? void 0 : _c.key) === "t" && (f.colT = et(L.value), be()), ((_d = L.target) == null ? void 0 : _d.key) === "Es" && (f.colEs = Go(L.value), be()), ((_e2 = L.target) == null ? void 0 : _e2.key) === "nuS" && (f.colNuS = L.value, be()), ((_f = L.target) == null ? void 0 : _f.key) === "fc" && (f.colFc = Go(L.value), be()), ((_g = L.target) == null ? void 0 : _g.key) === "nuC" && (f.colNuC = L.value, be());
          });
        }
        if (f.vigasX.length > 0) {
          const I = v.addFolder({
            title: `Vigas X (${f.vigasX.length})`,
            expanded: false
          });
          Hn(I, f.vigasX, "x", s, b);
        }
        if (f.vigasY.length > 0) {
          const I = v.addFolder({
            title: `Vigas Y (${f.vigasY.length})`,
            expanded: false
          });
          Hn(I, f.vigasY, "y", s, b);
        }
      }
      nt.addBlade({
        view: "separator"
      });
      const E = nt.addFolder({
        title: "Vigas Secundarias",
        expanded: false
      }), S = {
        activar: pt,
        direccion: Mt === "x" ? 0 : 1,
        cantidad: at
      };
      E.addBinding(S, "activar", {
        label: "Activar"
      }), E.addBinding(S, "direccion", {
        label: "Corren en",
        options: {
          "X (entre ejes Y)": 0,
          "Y (entre ejes X)": 1
        }
      }), E.addBinding(S, "cantidad", {
        min: 1,
        max: 5,
        step: 1,
        label: "Cantidad/vano"
      }), E.on("change", (m) => {
        var _a2, _b, _c;
        ((_a2 = m.target) == null ? void 0 : _a2.key) === "activar" && (pt = m.value, be()), ((_b = m.target) == null ? void 0 : _b.key) === "direccion" && (Mt = m.value === 0 ? "x" : "y", be()), ((_c = m.target) == null ? void 0 : _c.key) === "cantidad" && (at = Math.round(m.value), be());
      }), nt.addBlade({
        view: "separator"
      });
      const x = nt.addFolder({
        title: "Losas de Piso",
        expanded: true
      }), a = {
        activar: yt,
        espesor: +Qe($t).toFixed(3),
        subdivX: Dt,
        subdivY: Me
      };
      x.addBinding(a, "activar", {
        label: "Activar losas"
      }), x.addBinding(a, "espesor", {
        min: s[0],
        max: s[1] * 0.3,
        step: s[2],
        label: `Espesor (${n.length})`
      }), x.addBinding(a, "subdivX", {
        min: 1,
        max: 6,
        step: 1,
        label: "Subdiv. X"
      }), x.addBinding(a, "subdivY", {
        min: 1,
        max: 6,
        step: 1,
        label: "Subdiv. Y"
      }), x.on("change", (m) => {
        var _a2, _b, _c, _d;
        ((_a2 = m.target) == null ? void 0 : _a2.key) === "activar" && (yt = m.value, be()), ((_b = m.target) == null ? void 0 : _b.key) === "espesor" && ($t = et(m.value), be()), ((_c = m.target) == null ? void 0 : _c.key) === "subdivX" && (Dt = Math.round(m.value), be()), ((_d = m.target) == null ? void 0 : _d.key) === "subdivY" && (Me = Math.round(m.value), be());
      }), nt.addBlade({
        view: "separator"
      });
      const h = nt.addFolder({
        title: "Muros de Corte",
        expanded: true
      }), y = {
        espesor: +Qe(We).toFixed(3),
        subdivH: Ve,
        subdivW: dt
      };
      h.addBinding(y, "espesor", {
        min: s[0],
        max: s[1],
        step: s[2],
        label: `Espesor (${n.length})`
      }), h.addBinding(y, "subdivH", {
        min: 1,
        max: 6,
        step: 1,
        label: "Subdiv. V"
      }), h.addBinding(y, "subdivW", {
        min: 1,
        max: 6,
        step: 1,
        label: "Subdiv. H"
      }), h.on("change", (m) => {
        var _a2, _b, _c;
        ((_a2 = m.target) == null ? void 0 : _a2.key) === "espesor" && (We = et(m.value), be()), ((_b = m.target) == null ? void 0 : _b.key) === "subdivH" && (Ve = Math.round(m.value), be()), ((_c = m.target) == null ? void 0 : _c.key) === "subdivW" && (dt = Math.round(m.value), be());
      });
      const $ = U.length || 1, M = ee.length || 1, P = $ + 1, q = M + 1;
      if ($ > 0) {
        const m = h.addFolder({
          title: `Muros dir X (${$} vanos)`,
          expanded: false
        });
        for (let f = 0; f < $; f++) for (let v = 0; v < q; v++) {
          const I = `wx_${f}_${v}`, T = ve.some((L) => L.dir === "x" && L.bay === f && L.axisIdx === v), R = {};
          R[I] = T;
          const F = `Vano X${f + 1} / Eje Y${String.fromCharCode(65 + v)}`;
          m.addBinding(R, I, {
            label: F
          }).on("change", (L) => {
            L.value ? ve.push({
              dir: "x",
              bay: f,
              axisIdx: v,
              floors: [
                -1
              ]
            }) : ve = ve.filter((C) => !(C.dir === "x" && C.bay === f && C.axisIdx === v)), be();
          });
        }
      }
      if (M > 0) {
        const m = h.addFolder({
          title: `Muros dir Y (${M} vanos)`,
          expanded: false
        });
        for (let f = 0; f < M; f++) for (let v = 0; v < P; v++) {
          const I = `wy_${f}_${v}`, T = ve.some((L) => L.dir === "y" && L.bay === f && L.axisIdx === v), R = {};
          R[I] = T;
          const F = `Vano Y${f + 1} / Eje X${v + 1}`;
          m.addBinding(R, I, {
            label: F
          }).on("change", (L) => {
            L.value ? ve.push({
              dir: "y",
              bay: f,
              axisIdx: v,
              floors: [
                -1
              ]
            }) : ve = ve.filter((C) => !(C.dir === "y" && C.bay === f && C.axisIdx === v)), be();
          });
        }
      }
      if (ve.length > 0) {
        h.addBlade({
          view: "separator"
        });
        const m = {
          muros: `${ve.length} ubicaciones`
        };
        h.addBinding(m, "muros", {
          label: "Total",
          readonly: true
        });
      }
    }
    function qt() {
      const t = document.getElementById("parameters");
      if (!t) return;
      if (pe || (pe = t.innerHTML), me) {
        try {
          me.dispose();
        } catch {
        }
        me = null;
      }
      if (Ft) {
        try {
          Ft.dispose();
        } catch {
        }
        Ft = null;
      }
      t.innerHTML = "";
      const o = k.charAt(0).toUpperCase() + k.slice(1);
      me = new qo({
        title: `Parameters \u2014 ${o}`,
        container: t
      });
      const n = kn()[k];
      if (n) {
        const s = {};
        for (const i of n) s[i.key] = K[i.key].val;
        for (const i of n) me.addBinding(s, i.key, {
          min: K[i.key].min,
          max: K[i.key].max,
          step: K[i.key].step,
          label: K[i.key].label
        });
        const c = me.addFolder({
          title: "Rangos",
          expanded: false
        });
        for (const i of n) {
          const p = {
            min: K[i.key].min,
            max: K[i.key].max
          };
          c.addBinding(p, "min", {
            label: `${i.key} min`,
            step: i.step
          }), c.addBinding(p, "max", {
            label: `${i.key} max`,
            step: i.step
          }), c.on("change", () => {
            K[i.key] && (K[i.key].min = p.min, K[i.key].max = p.max, K[i.key].val < p.min && (K[i.key].val = p.min), K[i.key].val > p.max && (K[i.key].val = p.max)), qt(), be();
          });
        }
        me.on("change", (i) => {
          var _a;
          const p = (_a = i.target) == null ? void 0 : _a.key;
          if (p && K[p]) {
            if (K[p].val = i.value, k === "edificio" && (p === "nVanosX" || p === "nVanosY" || p === "nPisos")) {
              if (p === "nVanosX" || p === "nVanosY") {
                const u = Math.round(K.nVanosX.val), d = Math.round(K.nVanosY.val);
                for (; U.length < u; ) U.push(U[U.length - 1] ?? w.defaultSpan);
                for (U.length > u && (U.length = u); ee.length < d; ) ee.push(ee[ee.length - 1] ?? w.defaultSpan * 0.8);
                ee.length > d && (ee.length = d);
              }
              qt();
            }
            be();
          }
        });
      }
      if (k === "edificio") {
        if (Ot) {
          try {
            Ot.dispose();
          } catch {
          }
          Ot = null;
        }
        const s = document.getElementById("luces-panel");
        if (s) {
          s.innerHTML = "";
          const c = w;
          Ot = new qo({
            title: `Luces (${c.length})`,
            container: s
          });
          const i = Ot.addFolder({
            title: "Luces X",
            expanded: true
          }), p = {};
          for (let r = 0; r < U.length; r++) p[`svx_${r + 1}`] = U[r];
          for (let r = 0; r < U.length; r++) i.addBinding(p, `svx_${r + 1}`, {
            min: c.spanRange[0],
            max: c.spanRange[1],
            step: c.spanRange[2],
            label: `svx${r + 1}`
          });
          i.on("change", (r) => {
            var _a, _b;
            const E = (_b = (_a = r.target) == null ? void 0 : _a.key) == null ? void 0 : _b.match(/^svx_(\d+)$/);
            E && (U[parseInt(E[1]) - 1] = r.value, be());
          });
          const u = Ot.addFolder({
            title: "Luces Y",
            expanded: true
          }), d = {};
          for (let r = 0; r < ee.length; r++) d[`svy_${r + 1}`] = ee[r];
          for (let r = 0; r < ee.length; r++) u.addBinding(d, `svy_${r + 1}`, {
            min: c.spanRange[0],
            max: c.spanRange[1],
            step: c.spanRange[2],
            label: `svy${r + 1}`
          });
          u.on("change", (r) => {
            var _a, _b;
            const E = (_b = (_a = r.target) == null ? void 0 : _a.key) == null ? void 0 : _b.match(/^svy_(\d+)$/);
            E && (ee[parseInt(E[1]) - 1] = r.value, be());
          });
        }
      }
      if (po(), me) {
        me.addBlade({
          view: "separator"
        });
        const s = Co()[k];
        if (s && s.length > 0) {
          const c = {};
          s.forEach((p, u) => {
            c[p.label] = u;
          });
          const i = {
            apoyo: fe
          };
          me.addBinding(i, "apoyo", {
            label: "Apoyo",
            options: c
          }).on("change", (p) => {
            fe = p.value, be();
          });
        }
        if (k === "placa-3q" || k === "placa-q4") {
          const c = {
            teoria: Fe
          };
          me.addBinding(c, "teoria", {
            label: "Teor\xEDa",
            options: {
              Membrana: 1,
              "Kirchhoff (delgada)": 2,
              "Mindlin (gruesa)": 3
            }
          }).on("change", (i) => {
            Fe = i.value, be();
          });
        }
      }
      const l = En()[k];
      if (l && l.length > 0) {
        Ft = new qo({
          title: `Cargas Est\xE1ticas \u2014 ${o}`,
          container: t
        });
        const s = {};
        for (const i of l) s[i.key] = Ye[i.key].val;
        for (const i of l) Ft.addBinding(s, i.key, {
          min: Ye[i.key].min,
          max: Ye[i.key].max,
          step: Ye[i.key].step,
          label: Ye[i.key].label
        });
        const c = Ft.addFolder({
          title: "Rangos",
          expanded: false
        });
        for (const i of l) {
          const p = {
            min: Ye[i.key].min,
            max: Ye[i.key].max
          };
          c.addBinding(p, "min", {
            label: `${i.key} min`,
            step: i.step
          }), c.addBinding(p, "max", {
            label: `${i.key} max`,
            step: i.step
          }), c.on("change", () => {
            Ye[i.key] && (Ye[i.key].min = p.min, Ye[i.key].max = p.max, Ye[i.key].val < p.min && (Ye[i.key].val = p.min), Ye[i.key].val > p.max && (Ye[i.key].val = p.max)), qt(), be();
          });
        }
        Ft.on("change", (i) => {
          var _a;
          const p = (_a = i.target) == null ? void 0 : _a.key;
          if (p && Ye[p]) {
            if (Ye[p].val = i.value, e.nodeInputs) {
              const u = e.nodeInputs.val;
              u.supports && (e.nodeInputs.val = {
                supports: u.supports
              });
            }
            setTimeout(() => Uo(), 30);
          }
        });
      }
      window.__cad = {
        setParam: (s, c) => {
          if (K[s]) K[s].val = c, be(), qt();
          else if (Ye[s]) {
            if (Ye[s].val = c, e.nodeInputs) {
              const i = e.nodeInputs.val;
              i.supports && (e.nodeInputs.val = {
                supports: i.supports
              });
            }
            setTimeout(() => {
              Uo(), qt();
            }, 30);
          }
        },
        getParams: () => {
          const s = {};
          for (const c in K) s[c] = K[c].val;
          for (const c in Ye) s[c] = Ye[c].val;
          return s;
        },
        setGenerator: De
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
      if (Ft) {
        try {
          Ft.dispose();
        } catch {
        }
        Ft = null;
      }
      if (nt) {
        try {
          nt.dispose();
        } catch {
        }
        nt = null;
      }
      if (Ot) {
        try {
          Ot.dispose();
        } catch {
        }
        Ot = null;
      }
      const t = document.getElementById("sections");
      t && t.remove();
      const o = document.getElementById("right-panels-wrapper"), n = document.getElementById("parameters");
      o && n && (n.style.cssText = "", document.body.appendChild(n), o.remove()), n && pe && (n.innerHTML = pe);
    }
    const xe = document.createElement("div");
    xe.id = "cad3d-panel";
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
      t === "light" ? document.documentElement.classList.add("awatif-light") : document.documentElement.classList.remove("awatif-light"), k && ut(true);
    }), xe.innerHTML = `
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
      <input class="cmd-input" id="cad3d-cmd" placeholder="cad.galpon(12,20,6,3)" />
    </div>
  `;
    let st = null;
    function Ms() {
      var _a, _b, _c, _d, _e2, _f;
      const t = e.nodes.val, o = e.elements.val, n = (_a = e.nodeInputs) == null ? void 0 : _a.val, l = (_b = e.elementInputs) == null ? void 0 : _b.val, s = W, c = g, i = [];
      if (i.push("# Awatif FEM \u2014 Model Export"), i.push(`# Generator: ${k || "custom"}`), i.push(`# Units: ${c}, ${s}`), i.push(`# ${(/* @__PURE__ */ new Date()).toISOString()}`), i.push(""), i.push(`## NODES (${t.length})`), i.push("# idx     X          Y          Z"), t.forEach((d, r) => {
        i.push(`  ${String(r).padStart(4)}  ${d[0].toFixed(4).padStart(10)}  ${d[1].toFixed(4).padStart(10)}  ${d[2].toFixed(4).padStart(10)}`);
      }), i.push(""), i.push(`## ELEMENTS (${o.length})`), i.push("# idx    nodeI  nodeJ"), o.forEach((d, r) => {
        const b = d.map((E) => String(E).padStart(6)).join("");
        i.push(`  ${String(r).padStart(4)}  ${b}`);
      }), i.push(""), (n == null ? void 0 : n.supports) && n.supports.size > 0 && (i.push(`## SUPPORTS (${n.supports.size})`), i.push("# node   Ux  Uy  Uz  Rx  Ry  Rz"), n.supports.forEach((d, r) => {
        const b = d.map((E) => E ? "  1" : "  0").join("");
        i.push(`  ${String(r).padStart(4)} ${b}`);
      }), i.push("")), (n == null ? void 0 : n.loads) && n.loads.size > 0 && (i.push(`## LOADS (${n.loads.size})`), i.push("# node         Fx          Fy          Fz          Mx          My          Mz"), n.loads.forEach((d, r) => {
        const b = d.map((E) => E.toFixed(3).padStart(11)).join(" ");
        i.push(`  ${String(r).padStart(4)}  ${b}`);
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
        ], r = "# elem  " + d.map((b) => b.name.padStart(12)).join(" ");
        i.push(r);
        for (let b = 0; b < o.length; b++) {
          const E = d.map((S) => {
            var _a2;
            const x = (_a2 = S.map) == null ? void 0 : _a2.get(b);
            return x !== void 0 ? x.toExponential(4).padStart(12) : "           -";
          }).join(" ");
          i.push(`  ${String(b).padStart(4)}  ${E}`);
        }
        i.push("");
      }
      const p = (_d = (_c = e.deformOutputs) == null ? void 0 : _c.val) == null ? void 0 : _d.deformations;
      p && p.size > 0 && (i.push(`## DISPLACEMENTS (${p.size} nodes)`), i.push("# node          Ux           Uy           Uz           Rx           Ry           Rz"), p.forEach((d, r) => {
        const b = d.map((E) => E.toExponential(4).padStart(12)).join(" ");
        i.push(`  ${String(r).padStart(4)}  ${b}`);
      }), i.push(""));
      const u = (_f = (_e2 = e.deformOutputs) == null ? void 0 : _e2.val) == null ? void 0 : _f.reactions;
      if (u && u.size > 0 && (i.push(`## REACTIONS (${u.size} supports)`), i.push("# node          Rx           Ry           Rz           Mx           My           Mz"), u.forEach((d, r) => {
        const b = d.map((E) => E.toFixed(4).padStart(12)).join(" ");
        i.push(`  ${String(r).padStart(4)}  ${b}`);
      }), i.push("")), k) {
        i.push("## CLI COMMAND");
        const d = Object.entries(K).map(([r, b]) => `${r}=${b.val}`).join(" ");
        i.push(`cad.${k === "edificio" ? "building" : k}(${d})`);
      }
      return i.join(`
`);
    }
    let wo = false;
    function Ss() {
      var _a, _b, _c, _d;
      if (st) {
        st.remove(), st = null, wo = false;
        return;
      }
      const t = Ms();
      st = document.createElement("div"), st.id = "export-overlay", st.style.cssText = `
      position:fixed; bottom:10px; right:10px; z-index:10000;
      width:720px; max-width:90vw;
      display:flex; flex-direction:column;
      font-family:monospace; color:var(--cad-text,#ccc);
      background:var(--cad-bg,#1a1a2e); border:1px solid var(--cad-border,#333);
      border-radius:8px; box-shadow:0 4px 20px rgba(0,0,0,0.5);
      transition: height 0.2s ease;
    `, st.innerHTML = `
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
    `, document.body.appendChild(st), (_a = st.querySelector("#export-close")) == null ? void 0 : _a.addEventListener("click", () => {
        st == null ? void 0 : st.remove(), st = null, wo = false;
      }), (_b = st.querySelector("#export-minimize")) == null ? void 0 : _b.addEventListener("click", () => {
        const o = st.querySelector("#export-body"), n = st.querySelector("#export-minimize");
        wo = !wo, wo ? (o.style.display = "none", n.textContent = "\u25A2", n.title = "Restaurar", st.style.width = "auto") : (o.style.display = "flex", n.textContent = "\u25AC", n.title = "Minimizar", st.style.width = "720px");
      }), (_c = st.querySelector("#export-copy")) == null ? void 0 : _c.addEventListener("click", () => {
        const o = st.querySelector("#export-text");
        navigator.clipboard.writeText(o.value).then(() => {
          const n = st.querySelector("#export-status");
          n.textContent = "\u2713 Copiado al clipboard", setTimeout(() => n.textContent = "", 2e3);
        });
      }), (_d = st.querySelector("#export-json")) == null ? void 0 : _d.addEventListener("click", () => {
        var _a2, _b2, _c2, _d2, _e2, _f;
        const o = e.nodes.val, n = e.elements.val, l = (_a2 = e.nodeInputs) == null ? void 0 : _a2.val, s = (_b2 = e.elementInputs) == null ? void 0 : _b2.val, c = {
          generator: k || "custom",
          units: {
            force: g,
            length: W
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
        const i = (_d2 = (_c2 = e.deformOutputs) == null ? void 0 : _c2.val) == null ? void 0 : _d2.deformations;
        i && i.size > 0 && (c.displacements = {}, i.forEach((r, b) => c.displacements[b] = r));
        const p = (_f = (_e2 = e.deformOutputs) == null ? void 0 : _e2.val) == null ? void 0 : _f.reactions;
        p && p.size > 0 && (c.reactions = {}, p.forEach((r, b) => c.reactions[b] = r));
        const u = st.querySelector("#export-text");
        u.value = JSON.stringify(c, null, 2);
        const d = st.querySelector("#export-status");
        d.textContent = "Formato JSON activo \u2014 presiona Copy para copiar";
      });
    }
    function je() {
      var _a, _b, _c;
      const t = xe.querySelector("#cad3d-info");
      if (t) {
        const o = e.nodes.val.length, n = e.elements.val, l = n.length, s = ((_c = (_b = (_a = e.nodeInputs) == null ? void 0 : _a.val) == null ? void 0 : _b.supports) == null ? void 0 : _c.size) || 0;
        let c = 0, i = 0, p = 0;
        for (const d of n) d.length === 2 ? c++ : d.length === 3 ? i++ : d.length === 4 && p++;
        let u = `${o}n ${l}e ${s}s`;
        (p > 0 || i > 0) && (u += ` | ${c}fr`, p > 0 && (u += ` ${p}q4`), i > 0 && (u += ` ${i}tri`)), t.textContent = u;
      }
    }
    function Xo() {
      var _a;
      if (!Ee || !e.nodeInputs || !e.elementInputs) return;
      const t = e.nodes.val, o = e.elements.val, n = e.nodeInputs.val, l = e.elementInputs.val;
      if (!(t.length === 0 || o.length === 0) && !(!n.supports || n.supports.size === 0) && !(!l.densities || l.densities.size === 0)) try {
        const s = Math.min(12, t.length * 6 - n.supports.size * 6);
        if (s <= 0) return;
        const c = Gs(t, o, n, l, Math.min(s, 12));
        if (c.frequencies && c.frequencies.length > 0) {
          _e = c, ot = t.map((d) => [
            ...d
          ]), Re = 0;
          const { extent: i } = Gt(), p = (_a = c.modeShapes) == null ? void 0 : _a[0];
          if (p) {
            let d = 0;
            for (let r = 0; r < t.length; r++) {
              const b = p[r * 6] || 0, E = p[r * 6 + 1] || 0, S = p[r * 6 + 2] || 0;
              d = Math.max(d, Math.sqrt(b * b + E * E + S * S));
            }
            ft = d > 1e-12 ? i * 0.05 / d : 1;
          }
          const u = `${k} \u2014 ${t.length}n ${o.length}e`;
          jt.render(c, {
            title: u
          }), jt.div.style.display = "", Mo(), console.log(`Modal: ${c.frequencies.length} modos. f\u2081 = ${c.frequencies[0].toFixed(4)} Hz`);
        }
      } catch (s) {
        console.warn("Modal analysis failed:", s.message), _e = null;
      }
    }
    function Ko() {
      Ke && (cancelAnimationFrame(Ke), Ke = 0), ot.length > 0 && (e.nodes.val = ot.map((t) => [
        ...t
      ])), jt.div.style.display = "none", _e = null;
    }
    function Mo() {
      var _a;
      if (Ke && cancelAnimationFrame(Ke), !(_e == null ? void 0 : _e.modeShapes) || !ot.length) return;
      const t = _e.modeShapes[Re];
      if (!t) return;
      const o = ((_a = _e.frequencies) == null ? void 0 : _a[Re]) || 1, n = Math.max(0.5, Math.min(3, o * 0.1)), l = performance.now(), s = ot.length, c = e.elements.rawVal, { extent: i } = Gt(), p = xe.querySelector("#cad3d-modal-scale"), u = p && parseFloat(p.value) || 5;
      let d = 0;
      for (let M = 0; M < s; M++) {
        const P = t[M * 6] || 0, q = t[M * 6 + 1] || 0, m = t[M * 6 + 2] || 0;
        d = Math.max(d, Math.sqrt(P * P + q * q + m * m));
      }
      const r = d > 1e-12 ? i * u / 100 / d : 1, b = Ge();
      if (!b) return;
      let E = null, S = null, x = null;
      b.scene.traverse((M) => {
        var _a2, _b;
        !E && M.isPoints && M.geometry && (E = M), !S && M.isLineSegments && M.geometry && !M.name && (S = M), !x && M.isMesh && ((_a2 = M.material) == null ? void 0 : _a2.transparent) && ((_b = M.material) == null ? void 0 : _b.opacity) < 0.5 && M.geometry && (x = M);
      });
      const a = new Float32Array(s * 3), h = [];
      for (const M of c) if (M.length === 2) h.push([
        M[0],
        M[1]
      ]);
      else for (let P = 0; P < M.length; P++) h.push([
        M[P],
        M[(P + 1) % M.length]
      ]);
      const y = new Float32Array(h.length * 6);
      function $() {
        const M = (performance.now() - l) / 1e3, P = Math.sin(2 * Math.PI * n * M) * r;
        for (let q = 0; q < s; q++) {
          const m = ot[q];
          a[q * 3] = m[0] + (t[q * 6] || 0) * P, a[q * 3 + 1] = m[1] + (t[q * 6 + 1] || 0) * P, a[q * 3 + 2] = m[2] + (t[q * 6 + 2] || 0) * P;
        }
        if (E) {
          const q = E.geometry, m = q.getAttribute("position");
          m && m.array.length === a.length ? (m.array.set(a), m.needsUpdate = true) : q.setAttribute("position", new ao(a.slice(), 3));
        }
        if (S) {
          for (let f = 0; f < h.length; f++) {
            const [v, I] = h[f];
            y[f * 6] = a[v * 3], y[f * 6 + 1] = a[v * 3 + 1], y[f * 6 + 2] = a[v * 3 + 2], y[f * 6 + 3] = a[I * 3], y[f * 6 + 4] = a[I * 3 + 1], y[f * 6 + 5] = a[I * 3 + 2];
          }
          const q = S.geometry, m = q.getAttribute("position");
          m && m.array.length === y.length ? (m.array.set(y), m.needsUpdate = true) : q.setAttribute("position", new ao(y.slice(), 3));
        }
        if (x) {
          const q = [];
          for (const m of c) if (m.length === 3) {
            const [f, v, I] = m;
            q.push(a[f * 3], a[f * 3 + 1], a[f * 3 + 2]), q.push(a[v * 3], a[v * 3 + 1], a[v * 3 + 2]), q.push(a[I * 3], a[I * 3 + 1], a[I * 3 + 2]);
          } else if (m.length === 4) {
            const [f, v, I, T] = m;
            q.push(a[f * 3], a[f * 3 + 1], a[f * 3 + 2]), q.push(a[v * 3], a[v * 3 + 1], a[v * 3 + 2]), q.push(a[I * 3], a[I * 3 + 1], a[I * 3 + 2]), q.push(a[f * 3], a[f * 3 + 1], a[f * 3 + 2]), q.push(a[I * 3], a[I * 3 + 1], a[I * 3 + 2]), q.push(a[T * 3], a[T * 3 + 1], a[T * 3 + 2]);
          }
          if (q.length > 0) {
            const m = x.geometry, f = new Float32Array(q), v = m.getAttribute("position");
            v && v.array.length === f.length ? (v.array.set(f), v.needsUpdate = true) : m.setAttribute("position", new ao(f, 3));
          }
        }
        b.render(), Ke = requestAnimationFrame($);
      }
      Ke = requestAnimationFrame($);
    }
    function Uo() {
      var _a, _b, _c, _d, _e2;
      if (!e.deformOutputs || !e.analyzeOutputs || !e.nodeInputs || !e.elementInputs) return;
      const t = e.nodes.val, o = e.elements.val;
      let n = e.nodeInputs.val;
      const l = e.elementInputs.val;
      if (t.length === 0 || o.length === 0 || !n.supports || n.supports.size === 0) return;
      if (!n.loads || n.loads.size === 0) {
        const x = D("CM") ?? 0, a = D("CV") ?? 0, h = x + a, y = D("Ex") ?? 0, $ = D("Ey") ?? 0;
        if (h === 0 && y === 0 && $ === 0) return;
        const M = /* @__PURE__ */ new Map(), P = [];
        for (let L = 0; L < t.length; L++) n.supports.has(L) || P.push(L);
        const q = (L) => Math.round(L * 1e3) / 1e3, m = /* @__PURE__ */ new Set();
        n.supports.forEach((L, C) => {
          m.add(`${q(t[C][0])},${q(t[C][1])}`);
        });
        const f = /* @__PURE__ */ new Set();
        for (const L of P) m.has(`${q(t[L][0])},${q(t[L][1])}`) && f.add(L);
        const v = /* @__PURE__ */ new Set(), I = /* @__PURE__ */ new Set();
        if (y !== 0 || $ !== 0) {
          let L = -1 / 0, C = -1 / 0;
          for (const oe of f) L = Math.max(L, q(t[oe][0])), C = Math.max(C, q(t[oe][1]));
          const _ = /* @__PURE__ */ new Map();
          for (const oe of f) {
            const se = q(t[oe][2]);
            _.has(se) || _.set(se, []), _.get(se).push(oe);
          }
          _.forEach((oe) => {
            if (y !== 0) {
              const se = /* @__PURE__ */ new Set();
              for (const re of oe) if (q(t[re][0]) === L) {
                const te = q(t[re][1]);
                se.has(te) || (se.add(te), v.add(re));
              }
            }
            if ($ !== 0) {
              const se = /* @__PURE__ */ new Set();
              for (const re of oe) if (q(t[re][1]) === C) {
                const te = q(t[re][0]);
                se.has(te) || (se.add(te), I.add(re));
              }
            }
          });
        }
        const T = 9.81, R = /* @__PURE__ */ new Map();
        for (let L = 0; L < o.length; L++) {
          const C = o[L], _ = ((_a = l.densities) == null ? void 0 : _a.get(L)) ?? 0;
          if (!(Math.abs(_) < 1e-15)) {
            if (C.length === 2) {
              const oe = ((_b = l.areas) == null ? void 0 : _b.get(L)) ?? 0, se = t[C[0]], re = t[C[1]], te = Math.sqrt((re[0] - se[0]) ** 2 + (re[1] - se[1]) ** 2 + (re[2] - se[2]) ** 2), ae = -(_ * oe * te * T) / 2;
              R.set(C[0], (R.get(C[0]) ?? 0) + ae), R.set(C[1], (R.get(C[1]) ?? 0) + ae);
            } else if (C.length >= 3) {
              const oe = ((_c = l.thicknesses) == null ? void 0 : _c.get(L)) ?? 0;
              let se = 0;
              if (C.length === 3) {
                const [Q, ae, $e] = C.map((Pe) => t[Pe]);
                se = 0.5 * Math.abs((ae[0] - Q[0]) * ($e[1] - Q[1]) - ($e[0] - Q[0]) * (ae[1] - Q[1]));
              } else if (C.length === 4) {
                const [Q, ae, $e, Pe] = C.map((Ae) => t[Ae]);
                if (se = 0.5 * Math.abs((ae[0] - Q[0]) * ($e[1] - Q[1]) - ($e[0] - Q[0]) * (ae[1] - Q[1])) + 0.5 * Math.abs(($e[0] - Q[0]) * (Pe[1] - Q[1]) - (Pe[0] - Q[0]) * ($e[1] - Q[1])), se < 1e-10) {
                  const Ae = [
                    ae[0] - Q[0],
                    ae[1] - Q[1],
                    ae[2] - Q[2]
                  ], le = [
                    Pe[0] - Q[0],
                    Pe[1] - Q[1],
                    Pe[2] - Q[2]
                  ], he = [
                    Ae[1] * le[2] - Ae[2] * le[1],
                    Ae[2] * le[0] - Ae[0] * le[2],
                    Ae[0] * le[1] - Ae[1] * le[0]
                  ];
                  se = Math.sqrt(he[0] ** 2 + he[1] ** 2 + he[2] ** 2);
                }
              }
              const te = -(_ * oe * se * T) / C.length;
              for (const Q of C) R.set(Q, (R.get(Q) ?? 0) + te);
            }
          }
        }
        const F = /* @__PURE__ */ new Set();
        for (const L of o) L.length === 2 && (F.add(L[0]), F.add(L[1]));
        for (const L of P) {
          const C = v.has(L) ? y : 0, _ = I.has(L) ? $ : 0, oe = R.get(L) ?? 0, se = F.has(L) ? h : 0, re = oe + se;
          (C !== 0 || _ !== 0 || Math.abs(re) > 1e-10) && M.set(L, [
            C,
            _,
            re,
            0,
            0,
            0
          ]);
        }
        n = {
          ...n,
          loads: M
        }, e.nodeInputs.val = n;
      }
      const s = performance.now();
      let c = 0, i = 0, p = 0;
      for (const x of o) x.length === 2 ? c++ : x.length === 3 ? p++ : x.length === 4 && i++;
      const u = ((_d = n.supports) == null ? void 0 : _d.size) || 0, d = ((_e2 = n.loads) == null ? void 0 : _e2.size) || 0, r = t.length * 6, b = r - u * 6, E = [], S = (x) => E.push(x);
      S('<b style="color:var(--cad-heading)">FEM Solver</b>'), S(`<span style="color:var(--cad-info)">Modelo:</span> ${t.length} nodos, ${o.length} elem`), c && S(`&nbsp;&nbsp;Frames: <b>${c}</b>`), i && S(`&nbsp;&nbsp;Shell Q4: <b>${i}</b>`), p && S(`&nbsp;&nbsp;Triangulos: <b>${p}</b>`), S(`&nbsp;&nbsp;Apoyos: ${u} &nbsp;|&nbsp; Cargas: ${d}`), S(`<span style="color:var(--cad-info)">DOFs:</span> ${r} total, ~${b} libres`), S('<hr style="border-color:var(--cad-border);margin:4px 0">'), S(`<span style="color:#888">1.</span> Ensamblaje <b>K</b> global (${r}&times;${r})`), S("&nbsp;&nbsp;&nbsp;<i>K<sub>global</sub> = &Sigma; T<sup>T</sup> &middot; K<sub>local</sub> &middot; T</i>");
      try {
        const x = Et(t, o, n, l), a = performance.now() - s;
        if (x) {
          e.deformOutputs.val = x, S(`<span style="color:#888">2.</span> <b>K &middot; u = F</b> &rarr; SparseLU &rarr; <span style="color:#00cc88">${a.toFixed(0)} ms</span>`);
          let h = 0, y = -1, $ = 0, M = 0;
          x.deformations && x.deformations.forEach((v, I) => {
            const T = Math.sqrt(v[0] * v[0] + v[1] * v[1] + v[2] * v[2]);
            T > h && (h = T, y = I, $ = v[0], M = v[2]);
          }), S('<span style="color:#888">3.</span> Desplazamientos:'), S(`&nbsp;&nbsp;&nbsp;max|<b>u</b>| = <b style="color:var(--cad-heading)">${h.toExponential(3)}</b> m <span style="color:#666">(nodo ${y})</span>`), S(`&nbsp;&nbsp;&nbsp;u<sub>x</sub> = ${($ * 1e3).toFixed(4)} mm &nbsp;|&nbsp; u<sub>z</sub> = ${(M * 1e3).toFixed(4)} mm`);
          const P = performance.now(), q = xo(t, o, l, x), m = performance.now() - P;
          q && (e.analyzeOutputs.val = q, S(`<span style="color:#888">4.</span> Fuerzas internas: <span style="color:#00cc88">${m.toFixed(0)} ms</span>`), S("&nbsp;&nbsp;&nbsp;<i>F<sub>int</sub> = K<sub>local</sub> &middot; T &middot; u</i>"));
          const f = performance.now() - s;
          S('<hr style="border-color:var(--cad-border);margin:4px 0">'), S(`<b style="color:#00cc88">&#10004; Completado: ${f.toFixed(0)} ms</b>`);
        }
      } catch (x) {
        const a = performance.now() - s;
        S(`<b style="color:#ff4444">&#10008; Error (${a.toFixed(0)} ms): ${x.message}</b>`);
      }
      window.__femLog = E, console.log(`FEM Solver: ${t.length}n ${o.length}e \u2192 ${(performance.now() - s).toFixed(0)}ms`), Ee && setTimeout(() => Xo(), 50);
    }
    function Zo(t, o) {
      const n = t * o, l = t * o * o * o / 12, s = o * t * t * t / 12, c = Math.min(t, o), i = Math.max(t, o), p = c * c * c * i * (1 / 3 - 0.21 * c / i * (1 - c * c * c * c / (12 * i * i * i * i)));
      return {
        A: n,
        Iz: l,
        Iy: s,
        J: p
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
      const s = o - 2 * n, c = 2 * t * n + s * l, i = (t * o * o * o - (t - l) * s * s * s) / 12, p = (2 * n * t * t * t + s * l * l * l) / 12, u = (2 * t * n * n * n + s * l * l * l) / 3;
      return {
        A: c,
        Iz: i,
        Iy: p,
        J: u
      };
    }
    function en(t, o, n) {
      const l = t - 2 * n, s = o - 2 * n, c = t * o - l * s, i = (t * o * o * o - l * s * s * s) / 12, p = (o * t * t * t - s * l * l * l) / 12, u = (t - n) * (o - n), d = 2 * ((t - n) / n + (o - n) / n), r = 4 * u * u / (d > 0 ? d : 1);
      return {
        A: c,
        Iz: i,
        Iy: p,
        J: r
      };
    }
    function ks(t, o, n, l, s, c, i) {
      const u = 4700 * Math.sqrt(c / 1e3) * 1e3 / l, d = t - 2 * n, r = o - 2 * n, b = t * o - d * r, E = (t * o * o * o - d * r * r * r) / 12, S = (o * t * t * t - r * d * d * d) / 12, x = d * r, a = d * r * r * r / 12, h = r * d * d * d / 12, y = b + u * x, $ = E + u * a, M = S + u * h, P = l / (2 * (1 + s)), q = (t - n) * (o - n), m = 2 * ((t - n) / n + (o - n) / n), f = 4 * q * q / (m > 0 ? m : 1);
      return {
        A: y,
        Iz: $,
        Iy: M,
        J: f,
        Es: l,
        Gs: P,
        A_steel: b,
        A_conc: x
      };
    }
    function Jt() {
      if (!e.elementInputs) return;
      const t = e.elements.val, o = w, n = {
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
      if ((k === "edificio" || k === "frame") && X.size > 0) {
        const { colMat: s, vigaMat: c, colShape: i, fc: p, perFloor: u } = N, d = 4700 * Math.sqrt(p / 1e3) * 1e3, r = d / (2 * 1.2), b = 24 / 9.80665, E = o.E, S = o.G, x = o.rho;
        for (let a = 0; a < t.length; a++) {
          if (J.has(a)) {
            const v = 4700 * Math.sqrt(p / 1e3) * 1e3, I = 0.2;
            n.elasticities.set(a, v), n.poissonsRatios.set(a, I), n.thicknesses.set(a, We), n.shearModuli.set(a, v / (2 * (1 + I))), n.densities.set(a, 24 / 9.80665);
            continue;
          }
          if (Ie.has(a)) {
            const v = 4700 * Math.sqrt(p / 1e3) * 1e3, I = 0.2;
            n.elasticities.set(a, v), n.poissonsRatios.set(a, I), n.thicknesses.set(a, $t), n.shearModuli.set(a, v / (2 * (1 + I))), n.densities.set(a, 24 / 9.80665);
            continue;
          }
          const h = X.has(a), y = Te.get(a) ?? 0, $ = u[y] ?? u[0] ?? {
            bCol: 0.4,
            hCol: 0.4,
            dCol: 0.4
          };
          let M, P, q, m;
          if (h) if (s === 0) P = d, q = r, m = b, M = i === 1 ? Dn($.dCol) : Zo($.bCol, $.hCol), n.sectionShapes.set(a, i === 1 ? {
            type: "circ",
            d: $.dCol
          } : {
            type: "rect",
            b: $.bCol,
            h: $.hCol
          });
          else if (s === 1) {
            P = E, q = S, m = x;
            const v = N.steelColType;
            if (v <= 1) {
              const I = eo[$.colProfileIdx] ?? eo[0];
              M = {
                A: I.A,
                Iz: I.Iz,
                Iy: I.Iy,
                J: I.J
              }, n.sectionShapes.set(a, {
                type: "I",
                b: I.bf,
                h: I.d,
                name: I.name
              });
            } else if (v === 2) {
              const I = $.colBf ?? 0.3, T = $.colHf ?? 0.3, R = $.colTf ?? 0.02, F = $.colTw ?? 0.012;
              M = Qo(I, T, R, F);
              const L = `I${(T * 100).toFixed(0)}x${(I * 100).toFixed(0)}`;
              n.sectionShapes.set(a, {
                type: "I",
                b: I,
                h: T,
                tf: R,
                tw: F,
                name: L
              });
            } else {
              const I = $.colBc ?? 0.3, T = $.colHc ?? 0.3, R = $.colT ?? 0.01;
              M = en(I, T, R);
              const F = `\u25A1${(T * 100).toFixed(0)}x${(I * 100).toFixed(0)}x${(R * 1e3).toFixed(0)}`;
              n.sectionShapes.set(a, {
                type: "HSS",
                b: I,
                h: T,
                tw: R,
                name: F
              });
            }
          } else {
            const v = $.colBc ?? 0.3, I = $.colHc ?? 0.3, T = $.colT ?? 0.01, R = $.colFc ?? 28e3, F = $.colEs ?? 2e8, L = $.colNuS ?? 0.3;
            $.colNuC;
            const C = ks(v, I, T, F, L, R);
            M = {
              A: C.A,
              Iz: C.Iz,
              Iy: C.Iy,
              J: C.J
            }, P = C.Es, q = C.Gs;
            const _ = 7.85, oe = 24 / 9.80665;
            m = (_ * C.A_steel + oe * C.A_conc) / (C.A_steel + C.A_conc);
            const se = `CFT ${(I * 1e3).toFixed(0)}X${(v * 1e3).toFixed(0)}X${(T * 1e3).toFixed(0)}`;
            n.sectionShapes.set(a, {
              type: "CFT",
              b: v,
              h: I,
              tw: T,
              name: se
            });
          }
          else {
            const v = Ne.get(a), I = v ? v.dir === "x" ? $.vigasX : $.vigasY : [], T = v ? I[v.bay] ?? I[0] ?? ce() : ce();
            if (c === 0) P = d, q = r, m = b, M = Zo(T.b, T.h), n.sectionShapes.set(a, {
              type: "rect",
              b: T.b,
              h: T.h
            });
            else {
              P = E, q = S, m = x;
              const R = N.steelVigaType;
              if (R <= 1) {
                const F = eo[T.profileIdx ?? 0] ?? eo[0];
                M = {
                  A: F.A,
                  Iz: F.Iz,
                  Iy: F.Iy,
                  J: F.J
                }, n.sectionShapes.set(a, {
                  type: "I",
                  b: F.bf,
                  h: F.d,
                  name: F.name
                });
              } else if (R === 2) {
                const F = T.bf ?? 0.2, L = T.hf ?? 0.4, C = T.tf ?? 0.015, _ = T.tw ?? 0.01;
                M = Qo(F, L, C, _);
                const oe = `I${(L * 100).toFixed(0)}x${(F * 100).toFixed(0)}`;
                n.sectionShapes.set(a, {
                  type: "I",
                  b: F,
                  h: L,
                  tf: C,
                  tw: _,
                  name: oe
                });
              } else {
                const F = T.bc ?? 0.2, L = T.hc ?? 0.3, C = T.t ?? 8e-3;
                M = en(F, L, C);
                const _ = `\u25A1${(L * 100).toFixed(0)}x${(F * 100).toFixed(0)}x${(C * 1e3).toFixed(0)}`;
                n.sectionShapes.set(a, {
                  type: "HSS",
                  b: F,
                  h: L,
                  tw: C,
                  name: _
                });
              }
            }
          }
          const f = ge.get(a);
          if (f) {
            if ((f.material ?? 1) === 0 ? (P = d, q = r, m = b) : (P = E, q = S, m = x), f.secType === "rect" && f.b && f.h) M = Zo(f.b, f.h), n.sectionShapes.set(a, {
              type: "rect",
              b: f.b,
              h: f.h
            });
            else if (f.secType === "circ" && f.b) M = Dn(f.b), n.sectionShapes.set(a, {
              type: "circ",
              d: f.b
            });
            else if ((f.secType === "W" || f.secType === "HSS") && f.profileIdx !== void 0) {
              const I = eo[f.profileIdx] ?? eo[0];
              M = {
                A: I.A,
                Iz: I.Iz,
                Iy: I.Iy,
                J: I.J
              }, n.sectionShapes.set(a, {
                type: "I",
                b: I.bf,
                h: I.d,
                name: I.name
              });
            } else if (f.secType === "I-param" && f.bf && f.hf && f.tf && f.tw) {
              M = Qo(f.bf, f.hf, f.tf, f.tw);
              const I = `I${(f.hf * 100).toFixed(0)}x${(f.bf * 100).toFixed(0)}`;
              n.sectionShapes.set(a, {
                type: "I",
                b: f.bf,
                h: f.hf,
                tf: f.tf,
                tw: f.tw,
                name: I
              });
            } else if (f.secType === "tubular" && f.bc && f.hc && f.t) {
              M = en(f.bc, f.hc, f.t);
              const I = `\u25A1${(f.hc * 100).toFixed(0)}x${(f.bc * 100).toFixed(0)}x${(f.t * 1e3).toFixed(0)}`;
              n.sectionShapes.set(a, {
                type: "HSS",
                b: f.bc,
                h: f.hc,
                tw: f.t,
                name: I
              });
            }
          }
          n.elasticities.set(a, P), n.shearModuli.set(a, q), n.areas.set(a, M.A), n.momentsOfInertiaZ.set(a, M.Iy), n.momentsOfInertiaY.set(a, M.Iz), n.torsionalConstants.set(a, M.J), n.densities.set(a, m);
        }
      } else for (let s = 0; s < t.length; s++) n.elasticities.set(s, o.E), n.shearModuli.set(s, o.G), n.areas.set(s, o.A), n.momentsOfInertiaZ.set(s, o.Iy), n.momentsOfInertiaY.set(s, o.Iz), n.torsionalConstants.set(s, o.J), n.densities.set(s, o.rho);
      e.elementInputs.val = n;
    }
    function jn(t) {
      xe.querySelectorAll("[data-ex]").forEach((o) => {
        o.classList.toggle("active", o.dataset.ex === t);
      });
    }
    setTimeout(() => {
      var _a, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l, _m, _n2;
      (_a = xe.querySelector("#cad3d-toggle")) == null ? void 0 : _a.addEventListener("click", (a) => {
        a.stopPropagation(), xe.classList.add("collapsed");
      }), (_b = xe.querySelector("#cad3d-expand")) == null ? void 0 : _b.addEventListener("click", (a) => {
        a.stopPropagation(), xe.classList.remove("collapsed");
      }), xe.querySelectorAll("[data-ex]").forEach((a) => {
        a.addEventListener("click", (h) => {
          h.stopPropagation();
          const y = a.dataset.ex;
          jn(y), He.example(y);
        });
      }), xe.querySelectorAll("[data-view]").forEach((a) => {
        a.addEventListener("click", (h) => {
          h.stopPropagation();
          const y = a.dataset.view;
          Vt(y), xe.querySelectorAll("[data-view]").forEach(($) => $.classList.remove("view-active")), a.classList.add("view-active");
        });
      }), (_c = xe.querySelector("#cad3d-btn-clear")) == null ? void 0 : _c.addEventListener("click", (a) => {
        a.stopPropagation(), k = "", gs.val = false, ws(), He.clear();
      }), (_d = xe.querySelector("#cad3d-select")) == null ? void 0 : _d.addEventListener("click", (a) => {
        var _a2;
        a.stopPropagation(), It && (It = false, no()), At && Fo(), xt = !xt, (_a2 = xe.querySelector("#cad3d-select")) == null ? void 0 : _a2.classList.toggle("inspect-active", xt);
        const y = Ge();
        y && (y.controls.enabled = !xt), xt || To();
      }), (_e2 = xe.querySelector("#cad3d-draw")) == null ? void 0 : _e2.addEventListener("click", (a) => {
        var _a2;
        a.stopPropagation(), It && (It = false, no()), xt && To(), At = !At, (_a2 = xe.querySelector("#cad3d-draw")) == null ? void 0 : _a2.classList.toggle("inspect-active", At), At ? Ts() : Fo();
      }), (_f = xe.querySelector("#cad3d-inspect")) == null ? void 0 : _f.addEventListener("click", (a) => {
        var _a2;
        a.stopPropagation(), xt && To(), At && Fo(), It = !It, (_a2 = xe.querySelector("#cad3d-inspect")) == null ? void 0 : _a2.classList.toggle("inspect-active", It), It || no();
      }), (_g = xe.querySelector("#cad3d-export")) == null ? void 0 : _g.addEventListener("click", (a) => {
        a.stopPropagation(), Ss();
      });
      let t = "";
      const o = xe.querySelector("#cad3d-io-menu"), n = xe.querySelector("#cad3d-io-file");
      function l(a, h) {
        e.nodes.val = a.nodes, e.elements.val = a.elements, e.nodeInputs.val = a.nodeInputs, e.elementInputs.val = a.elementInputs, e.deformOutputs.val = {}, e.analyzeOutputs.val = {}, console.log(`${h}: ${a.nodes.length} nodes, ${a.elements.length} elements`);
      }
      function s(a, h) {
        const y = new Blob([
          a
        ], {
          type: "text/plain"
        }), $ = URL.createObjectURL(y), M = document.createElement("a");
        M.href = $, M.download = h, M.click(), URL.revokeObjectURL($);
      }
      o && o.addEventListener("change", () => {
        if (t = o.value, o.value = "", t.startsWith("import")) t === "import-e2k" ? n.accept = ".e2k,.E2K" : t === "import-py" ? n.accept = ".py" : t === "import-tcl" && (n.accept = ".tcl"), n.click();
        else if (t.startsWith("export")) {
          const a = {
            nodes: e.nodes.val,
            elements: e.elements.val,
            nodeInputs: e.nodeInputs.val,
            elementInputs: e.elementInputs.val
          };
          try {
            t === "export-e2k" ? s(Ea({
              ...a,
              title: "Awatif Model"
            }), "model.e2k") : t === "export-py" ? s(Ia(a), "model_opensees.py") : t === "export-tcl" && s(za(a), "model_opensees.tcl");
          } catch (h) {
            alert("Export error: " + h.message);
          }
        }
      }), n && n.addEventListener("change", () => {
        var _a2;
        const a = (_a2 = n.files) == null ? void 0 : _a2[0];
        if (!a) return;
        const h = new FileReader();
        h.onload = () => {
          const y = h.result;
          try {
            if (t === "import-e2k") {
              const $ = ka(y);
              l($, "E2K imported");
            } else if (t === "import-py") {
              const $ = La(y);
              l($, "OpenSeesPy imported");
            } else if (t === "import-tcl") {
              const $ = Ta(y);
              l($, "OpenSees Tcl imported");
            }
          } catch ($) {
            alert("Import error: " + $.message), console.error($);
          }
        }, h.readAsText(a), n.value = "";
      });
      const c = xe.querySelector("#cad3d-force-unit");
      c && (c.value = g, c.addEventListener("change", (a) => {
        a.stopPropagation(), g = c.value, w = io(g, W), k && De(k);
      }));
      const i = xe.querySelector("#cad3d-length-unit");
      i && (i.value = W, i.addEventListener("change", (a) => {
        a.stopPropagation(), W = i.value, w = io(g, W), k && De(k);
      })), xe.querySelectorAll("[data-preset]").forEach((a) => {
        a.addEventListener("click", (h) => {
          h.stopPropagation();
          const y = a.dataset.preset, $ = H[y];
          $ && (g = $.force, W = $.length, G = $.stress, w = io(g, W), c && (c.value = g), i && (i.value = W), xe.querySelectorAll("[data-preset]").forEach((M) => {
            M.classList.toggle("active", M.dataset.preset === y);
          }), k && De(k), console.log(`Preset: ${y} \u2192 ${g}+${W}, stress: ${G.label}`));
        });
      }), (_h = xe.querySelector("#cad3d-log")) == null ? void 0 : _h.addEventListener("click", (a) => {
        a.stopPropagation(), Ns();
      }), (_i = xe.querySelector("#cad3d-pushover")) == null ? void 0 : _i.addEventListener("click", (a) => {
        a.stopPropagation(), Rs();
      }), (_j = xe.querySelector("#cad3d-nonlinear")) == null ? void 0 : _j.addEventListener("click", (a) => {
        a.stopPropagation(), Bs();
      }), (_k = xe.querySelector("#cad3d-fem-solver")) == null ? void 0 : _k.addEventListener("click", (a) => {
        a.stopPropagation(), js();
      }), (_l = xe.querySelector("#cad3d-modal")) == null ? void 0 : _l.addEventListener("click", (a) => {
        var _a2, _b2;
        a.stopPropagation(), Ee = !Ee, (_a2 = xe.querySelector("#cad3d-modal")) == null ? void 0 : _a2.classList.toggle("active", Ee);
        const y = xe.querySelector("#cad3d-mode-prev"), $ = xe.querySelector("#cad3d-mode-next"), M = xe.querySelector("#cad3d-mode-label"), P = xe.querySelector("#cad3d-modal-scale");
        if (Ee) {
          const q = Ge();
          ((_b2 = q == null ? void 0 : q.settings) == null ? void 0 : _b2.loads) && (rt = q.settings.loads.rawVal, q.settings.loads.val = false), Xo(), y.style.display = "", $.style.display = "", M.style.display = "", P && (P.style.display = ""), p();
        } else Ko(), y.style.display = "none", $.style.display = "none", M.style.display = "none", P && (P.style.display = "none"), k && k !== "placa-q4" && k !== "placa-3q" && be(), setTimeout(() => {
          var _a3;
          const q = Ge();
          ((_a3 = q == null ? void 0 : q.settings) == null ? void 0 : _a3.loads) && rt && (q.settings.loads.val = true);
        }, 600);
      });
      function p() {
        var _a2;
        const a = xe.querySelector("#cad3d-mode-label");
        if (!a || !(_e == null ? void 0 : _e.frequencies)) return;
        const h = _e.frequencies[Re], y = h > 0 ? 1 / h : 0, $ = [
          0,
          0,
          0,
          0,
          0,
          0
        ];
        for (let M = 0; M <= Re; M++) {
          const P = (_a2 = _e.massParticipation) == null ? void 0 : _a2[M];
          if (P) for (let q = 0; q < 6; q++) $[q] += P[q];
        }
        a.textContent = `Modo ${Re + 1} \u2014 ${h.toFixed(2)} Hz \u2014 T=${y.toFixed(3)}s \u2014 \u03A3Ux=${($[0] * 100).toFixed(1)}% \u03A3Uy=${($[1] * 100).toFixed(1)}% \u03A3Rz=${($[5] * 100).toFixed(1)}%`;
      }
      (_m = xe.querySelector("#cad3d-mode-prev")) == null ? void 0 : _m.addEventListener("click", (a) => {
        if (a.stopPropagation(), !(_e == null ? void 0 : _e.modeShapes)) return;
        Re = (Re - 1 + _e.modeShapes.length) % _e.modeShapes.length;
        const h = _e.modeShapes[Re], { extent: y } = Gt();
        let $ = 0;
        for (let M = 0; M < ot.length; M++) {
          const P = h[M * 6] || 0, q = h[M * 6 + 1] || 0, m = h[M * 6 + 2] || 0;
          $ = Math.max($, Math.sqrt(P * P + q * q + m * m));
        }
        ft = $ > 1e-12 ? y * 0.05 / $ : 1, Mo(), p();
      }), (_n2 = xe.querySelector("#cad3d-mode-next")) == null ? void 0 : _n2.addEventListener("click", (a) => {
        if (a.stopPropagation(), !(_e == null ? void 0 : _e.modeShapes)) return;
        Re = (Re + 1) % _e.modeShapes.length;
        const h = _e.modeShapes[Re], { extent: y } = Gt();
        let $ = 0;
        for (let M = 0; M < ot.length; M++) {
          const P = h[M * 6] || 0, q = h[M * 6 + 1] || 0, m = h[M * 6 + 2] || 0;
          $ = Math.max($, Math.sqrt(P * P + q * q + m * m));
        }
        ft = $ > 1e-12 ? y * 0.05 / $ : 1, Mo(), p();
      });
      const u = xe.querySelector("#cad3d-modal-scale");
      u == null ? void 0 : u.addEventListener("mousedown", (a) => a.stopPropagation()), u == null ? void 0 : u.addEventListener("change", () => {
        Ee && (_e == null ? void 0 : _e.modeShapes) && Mo();
      });
      const d = xe.querySelector("#cad3d-cmd");
      d == null ? void 0 : d.addEventListener("mousedown", (a) => a.stopPropagation()), document.addEventListener("keydown", (a) => {
        var _a2;
        if ((a.ctrlKey || a.metaKey) && a.key === "z" && !a.shiftKey) {
          a.preventDefault(), Gn();
          return;
        }
        if ((a.ctrlKey || a.metaKey) && (a.key === "y" || a.key === "z" && a.shiftKey)) {
          a.preventDefault(), Vn();
          return;
        }
        if ((a.key === "Delete" || a.key === "Backspace") && Xe.size > 0) {
          a.preventDefault(), Xe.forEach((h) => V.add(h)), Xe.clear(), Pt && (Pt.remove(), Pt = null), be();
          return;
        }
        if (a.key === "Escape") {
          if (At) if (Ue !== null) {
            Ue = null;
            const h = Ge();
            mt && h && (h.scene.remove(mt), mt.geometry.dispose(), mt.material.dispose(), mt = null), bt && h && (h.scene.remove(bt), bt.geometry.dispose(), bt.material.dispose(), bt = null), h == null ? void 0 : h.render();
          } else Fo();
          xt && To(), It && (It = false, no(), (_a2 = xe.querySelector("#cad3d-inspect")) == null ? void 0 : _a2.classList.remove("inspect-active"));
        }
      }), d == null ? void 0 : d.addEventListener("keydown", (a) => {
        if (a.key === "Enter") {
          const h = d.value.trim();
          if (h) {
            try {
              const y = new Function("cad", `return ${h}`)(He);
              y !== void 0 && console.log(y);
            } catch (y) {
              console.error(y.message);
            }
            d.value = "";
          }
        }
      });
      let r = false, b = 0, E = 0, S = 0, x = 0;
      xe.addEventListener("mousedown", (a) => {
        const h = a.target.tagName;
        if (h === "BUTTON" || h === "INPUT" || h === "SELECT") return;
        r = true;
        const y = xe.getBoundingClientRect();
        xe.style.bottom = "unset", b = a.clientX, E = a.clientY, S = y.left, x = y.top, a.preventDefault();
      }), window.addEventListener("mousemove", (a) => {
        r && (a.preventDefault(), xe.style.left = S + (a.clientX - b) + "px", xe.style.top = x + (a.clientY - E) + "px");
      }), window.addEventListener("mouseup", () => {
        r = false;
      }), je();
    }, 10);
    function Ge() {
      const t = document.getElementById("viewer");
      return t ? t.__ctx : null;
    }
    function Gt() {
      const t = e.nodes.val;
      if (t.length === 0) return {
        center: new ke(),
        extent: 10
      };
      let o = 1 / 0, n = 1 / 0, l = 1 / 0, s = -1 / 0, c = -1 / 0, i = -1 / 0;
      for (const [d, r, b] of t) d < o && (o = d), d > s && (s = d), r < n && (n = r), r > c && (c = r), b < l && (l = b), b > i && (i = b);
      const p = new ke((o + s) / 2, (n + c) / 2, (l + i) / 2), u = Math.max(s - o, c - n, i - l, 1);
      return {
        center: p,
        extent: u
      };
    }
    function ut(t = false) {
      const o = Ge();
      if (!o) return;
      const { extent: n } = Gt();
      let l;
      n <= 5 ? l = Math.max(1, Math.ceil(n * 1.5)) : n <= 50 ? l = Math.max(5, Math.ceil(n * 1.3 / 5) * 5) : l = Math.max(20, Math.ceil(n * 1.3 / 10) * 10), o.settings.gridSize.val = l, o.scene.children.filter((b) => b.type === "GridHelper").forEach((b) => {
        var _a, _b;
        (_a = b.geometry) == null ? void 0 : _a.dispose(), (_b = b.material) == null ? void 0 : _b.dispose(), o.scene.remove(b);
      });
      const c = Xs(), i = new sa(l, 20, c.grid, c.grid);
      i.rotation.x = Math.PI / 2, i.position.set(0.5 * l, 0.5 * l, 0), o.scene.add(i), o.scene.children.filter((b) => b.type === "Group" && b.name !== "gridAxes" && b.name !== "loadsGroup" && (b.name === "viewerAxes" || b.children.some((E) => E instanceof Ao))).forEach((b) => {
        b.traverse((E) => {
          E.geometry && E.geometry.dispose(), E.material && (E.material.map && E.material.map.dispose(), E.material.dispose());
        }), o.scene.remove(b);
      });
      const u = 0.05 * l, d = new us();
      d.name = "viewerAxes";
      const r = c.axisArrow;
      d.add(new Ao(new ke(1, 0, 0), new ke(), 1, r, 0.2, 0.2)), d.add(new Ao(new ke(0, 1, 0), new ke(), 1, r, 0.2, 0.2)), d.add(new Ao(new ke(0, 0, 1), new ke(), 1, r, 0.2, 0.2)), d.children.forEach((b) => b.scale.set(u, u, u));
      for (const [b, E, S] of [
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
        const a = x.getContext("2d");
        a.fillStyle = E, a.font = "bold 50px Arial", a.textAlign = "center", a.textBaseline = "middle", a.fillText(b, 32, 34);
        const h = new ms(x);
        h.needsUpdate = true;
        const y = new bn(new hn({
          map: h,
          depthTest: false,
          transparent: true
        }));
        y.position.set(S[0], S[1], S[2]), y.scale.set(0.4 * u, 0.4 * u, 1), y.renderOrder = 99, d.add(y);
      }
      o.scene.add(d), t ? o.render() : Vt("3d");
    }
    function Wn(t, o, n) {
      if (t.length < 2) return n * 10;
      let l = 1 / 0;
      return o > 0 && (l = Math.min(l, Math.abs(t[o] - t[o - 1]))), o < t.length - 1 && (l = Math.min(l, Math.abs(t[o + 1] - t[o]))), l * 0.45 || n * 0.1;
    }
    function Vt(t) {
      var _a;
      const o = Ge();
      if (!o) return;
      const { center: n, extent: l } = Gt(), s = o.renderer.domElement.clientWidth / (o.renderer.domElement.clientHeight || 1), c = l * 0.7;
      o.controls.maxDistance = l * 5, o.controls.minDistance = l * 0.05, o.renderer.clippingPlanes = [];
      const i = () => {
        o.scene.traverse((p) => {
          var _a2;
          if (!p.material) return;
          const u = p.type === "GridHelper" || p.type === "AxesHelper", d = p.isSprite, r = ((_a2 = p.userData) == null ? void 0 : _a2.noClip) === true;
          (u || d || r) && (Array.isArray(p.material) ? p.material.forEach((b) => {
            b.clippingPlanes = [];
          }) : p.material.clippingPlanes = []);
        });
      };
      if (t === "3d") {
        const p = o.perspCamera.fov, u = l / (2 * Math.tan(p * Math.PI / 360)) * 2.2;
        o.perspCamera.position.set(n.x + u * 0.5, n.y - u * 0.8, n.z + u * 0.5), o.controls.target.copy(n), o.setActiveCamera(o.perspCamera);
      } else {
        const p = o.orthoCamera;
        p.left = -c * s, p.right = c * s, p.top = c, p.bottom = -c, p.near = -l * 10, p.far = l * 10, p.updateProjectionMatrix();
        const u = (d, r, b) => {
          p.position.copy(d), p.up.copy(b), o.controls.target.copy(r), p.lookAt(r), o.controls.update();
        };
        if (t === "plan") o.renderer.clippingPlanes = [], u(new ke(n.x, n.y, n.z + l * 2), new ke(n.x, n.y, n.z), new ke(0, 1, 0));
        else if (t.startsWith("plan:")) {
          const d = parseInt(t.split(":")[1]), r = ((_a = K.hPiso) == null ? void 0 : _a.val) ?? 3, b = (d + 1) * r, E = r * 0.45;
          o.renderer.clippingPlanes = [
            new Qt(new ke(0, 0, -1), b + E),
            new Qt(new ke(0, 0, 1), -b + E)
          ], i(), u(new ke(n.x, n.y, b + l * 2), new ke(n.x, n.y, b), new ke(0, 1, 0));
        } else if (t === "elevX") p.position.set(n.x + l * 2, n.y, n.z), p.up.set(0, 0, 1);
        else if (t === "elevY") p.position.set(n.x, n.y - l * 2, n.z), p.up.set(0, 0, 1);
        else if (t.startsWith("axisX:")) {
          const d = parseInt(t.split(":")[1]), r = Wt[d] ?? n.x;
          if (Yt.length > 1) {
            const E = Wn(Wt, d, l);
            o.renderer.clippingPlanes = [
              new Qt(new ke(-1, 0, 0), r + E),
              new Qt(new ke(1, 0, 0), -r + E)
            ], i(), p.position.set(n.x + l * 2, n.y, n.z), o.controls.target.set(n.x, n.y, n.z);
          } else p.position.set(n.x, n.y - l * 2, n.z), o.controls.target.copy(n);
          p.up.set(0, 0, 1);
        } else if (t.startsWith("axisY:")) {
          const d = parseInt(t.split(":")[1]), r = Yt[d] ?? n.y;
          if (Wt.length > 1) {
            const E = Wn(Yt, d, l);
            o.renderer.clippingPlanes = [
              new Qt(new ke(0, -1, 0), r + E),
              new Qt(new ke(0, 1, 0), -r + E)
            ], i(), p.position.set(n.x, n.y - l * 2, n.z), o.controls.target.set(n.x, n.y, n.z);
          } else p.position.set(n.x + l * 2, n.y, n.z), o.controls.target.copy(n);
          p.up.set(0, 0, 1);
        }
        !t.startsWith("axisX:") && !t.startsWith("axisY:") && o.controls.target.copy(n), o.setActiveCamera(p);
      }
    }
    function Yn() {
      const t = xe.querySelector("#cad3d-axis-buttons");
      if (!t) return;
      if (Wt.length < 2 && Yt.length < 2) {
        t.style.display = "none";
        return;
      }
      t.style.display = "", t.innerHTML = "";
      const o = (c, i, p) => {
        const u = document.createElement("button");
        return u.textContent = c, u.dataset.view = i, u.title = p, u.style.cssText = "min-width:22px;padding:1px 5px;font-weight:bold", u.addEventListener("click", (d) => {
          var _a;
          d.stopPropagation();
          const r = u.classList.contains("view-active");
          xe.querySelectorAll("[data-view]").forEach((b) => b.classList.remove("view-active")), r ? (Vt("3d"), (_a = xe.querySelector('[data-view="3d"]')) == null ? void 0 : _a.classList.add("view-active")) : (Vt(i), u.classList.add("view-active"));
        }), u;
      }, n = document.createElement("span");
      n.textContent = "Ejes:", n.style.cssText = "color:#888;font-size:10px;margin-right:2px;align-self:center", t.appendChild(n);
      const l = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      Wt.forEach((c, i) => {
        const p = i < l.length ? l[i] : `X${i}`;
        t.appendChild(o(p, `axisX:${i}`, `Eje ${p} \u2014 elevaci\xF3n mirando en Y`));
      });
      const s = document.createElement("span");
      s.textContent = "|", s.style.cssText = "color:#555;margin:0 3px;align-self:center;font-weight:bold", t.appendChild(s), Yt.forEach((c, i) => {
        const p = `${i + 1}`;
        t.appendChild(o(p, `axisY:${i}`, `Eje ${p} \u2014 elevaci\xF3n mirando en X`));
      });
    }
    function Jn() {
      var _a;
      const t = xe.querySelector("#cad3d-floor-buttons");
      if (!t) return;
      const o = Math.round(((_a = K.nPisos) == null ? void 0 : _a.val) ?? 0);
      if (o < 1) {
        t.style.display = "none";
        return;
      }
      t.style.display = "", t.innerHTML = "";
      const n = (s, c, i) => {
        const p = document.createElement("button");
        return p.textContent = s, p.dataset.view = c, p.title = i, p.style.cssText = "min-width:22px;padding:1px 5px;font-weight:bold", p.addEventListener("click", (u) => {
          var _a2;
          u.stopPropagation();
          const d = p.classList.contains("view-active");
          xe.querySelectorAll("[data-view]").forEach((r) => r.classList.remove("view-active")), d ? (Vt("3d"), (_a2 = xe.querySelector('[data-view="3d"]')) == null ? void 0 : _a2.classList.add("view-active")) : (Vt(c), p.classList.add("view-active"));
        }), p;
      }, l = document.createElement("span");
      l.textContent = "Planta:", l.style.cssText = "color:#888;font-size:10px;margin-right:2px;align-self:center", t.appendChild(l);
      for (let s = 0; s < o; s++) t.appendChild(n(`P${s + 1}`, `plan:${s}`, `Planta Piso ${s + 1}`));
    }
    function Es() {
      Vt("3d"), xe.querySelectorAll("[data-view]").forEach((t) => t.classList.toggle("view-active", t.dataset.view === "3d"));
    }
    He.view = (t) => {
      t = {
        planta: "plan",
        elevationX: "elevX",
        elevationY: "elevY",
        corte: "section"
      }[t] || t, Vt(t), xe.querySelectorAll("[data-view]").forEach((n) => n.classList.toggle("view-active", n.dataset.view === t));
    };
    let It = false, xt = false, At = false, gt = "line", wt = [], Ue = null, mt = null, bt = null, fo = null, St = null;
    const tt = {
      node: true,
      grid: true,
      midpoint: true,
      track: true
    }, tn = 0.5;
    let on = [], kt = null, oo = null;
    const uo = [], Lo = [], Is = 50;
    function mo() {
      uo.push({
        nodes: JSON.parse(JSON.stringify(e.nodes.val)),
        elements: JSON.parse(JSON.stringify(e.elements.val))
      }), uo.length > Is && uo.shift(), Lo.length = 0;
    }
    function Gn() {
      if (uo.length === 0) return;
      Lo.push({
        nodes: JSON.parse(JSON.stringify(e.nodes.val)),
        elements: JSON.parse(JSON.stringify(e.elements.val))
      });
      const t = uo.pop();
      e.nodes.val = t.nodes, e.elements.val = t.elements, Jt(), e.elementInputs.val = {
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
      e.nodes.val = t.nodes, e.elements.val = t.elements, Jt(), e.elementInputs.val = {
        ...e.elementInputs.val
      };
    }
    const Xe = /* @__PURE__ */ new Set();
    let vt = null, Xt = [], Ct = null, Pt = null;
    function nn(t) {
      const o = Ge();
      if (!o) return;
      const n = e.nodes.val, l = e.elements.val[t];
      if (!l) return;
      const s = [];
      for (let p = 0; p < l.length; p++) {
        const u = n[l[p]], d = n[l[(p + 1) % l.length]];
        s.push(u[0], u[1], u[2], d[0], d[1], d[2]);
      }
      const c = new so();
      c.setAttribute("position", new ao(s, 3));
      const i = new ko(c, new Eo({
        color: 16711935,
        linewidth: 3,
        depthTest: false
      }));
      i.renderOrder = 9998, i.__elemIdx = t, o.scene.add(i), Xt.push(i), o.render();
    }
    function Kt() {
      const t = Ge();
      Xt.forEach((o) => {
        t == null ? void 0 : t.scene.remove(o), o.geometry.dispose(), o.material.dispose();
      }), Xt = [], t == null ? void 0 : t.render();
    }
    function Ut() {
      Pt && Pt.remove();
      const t = j.size > 0 || B;
      if (Xe.size === 0 && !t) {
        Pt = null;
        return;
      }
      const o = document.createElement("div");
      o.style.cssText = "position:fixed;bottom:20px;left:50%;transform:translateX(-50%);background:var(--cad-bg);color:var(--cad-text);border:2px solid var(--cad-heading);border-radius:8px;padding:10px 16px;z-index:10000;font-family:monospace;font-size:13px;display:flex;gap:12px;align-items:center;box-shadow:0 4px 20px var(--cad-shadow);", o.innerHTML = `
      <span style="color:var(--cad-heading);font-weight:bold;">${Xe.size} elem.</span>
      <button id="sel-assign" style="padding:5px 8px;background:#336699;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:12px;" title="Asignar secci\xF3n">\u{1F4D0}</button>
      <button id="sel-info" style="padding:5px 8px;background:#225588;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:12px;" title="Info del elemento">\u{1F50D}</button>
      <button id="sel-hide" style="padding:5px 8px;background:#665500;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:12px;" title="Ocultar seleccionados">\u{1F441}\u200D\u{1F5E8}</button>
      <button id="sel-isolate" style="padding:5px 8px;background:#006633;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:12px;" title="Aislar (mostrar solo seleccionados)">\u25CE</button>
      <button id="sel-showall" style="padding:5px 8px;background:#444;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:12px;" title="Mostrar todo">\u21BA</button>
      <button id="sel-delete" style="padding:5px 8px;background:#cc3333;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:12px;" title="Eliminar seleccionados">\u{1F5D1}</button>
      <button id="sel-clear" style="padding:5px 8px;background:#555;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:12px;" title="Limpiar selecci\xF3n">\u2715</button>
    `, document.body.appendChild(o), Pt = o, o.querySelector("#sel-assign").addEventListener("click", () => {
        Ws([
          ...Xe
        ]);
      }), o.querySelector("#sel-info").addEventListener("click", () => {
        if (Xe.size === 1) {
          const n = [
            ...Xe
          ][0];
          ts(n);
        } else {
          const n = [
            ...Xe
          ], l = e.nodes.val, s = e.elements.val;
          let c = 0, i = 0, p = 0, u = 0;
          n.forEach((r) => {
            const b = s[r];
            if (b) if (b.length === 2) {
              const E = l[b[0]], S = l[b[1]], x = Math.abs(S[0] - E[0]), a = Math.abs(S[1] - E[1]), h = Math.abs(S[2] - E[2]);
              h > x && h > a ? c++ : i++;
            } else b.length === 3 ? p++ : b.length === 4 && u++;
          });
          const d = [];
          c && d.push(`${c} columnas`), i && d.push(`${i} vigas`), u && d.push(`${u} shells Q4`), p && d.push(`${p} triangulos`), alert(`${n.length} elementos seleccionados:
${d.join(", ")}`);
        }
      }), o.querySelector("#sel-hide").addEventListener("click", () => {
        Xe.forEach((n) => j.add(n)), Xe.clear(), Kt(), Ut(), be();
      }), o.querySelector("#sel-isolate").addEventListener("click", () => {
        B = true, Y.clear(), Xe.forEach((n) => Y.add(n)), Xe.clear(), Kt(), Ut(), be();
      }), o.querySelector("#sel-showall").addEventListener("click", () => {
        j.clear(), B = false, Y.clear(), Ut(), be();
      }), o.querySelector("#sel-delete").addEventListener("click", () => {
        mo(), Xe.forEach((n) => V.add(n)), Xe.clear(), Kt(), Ut(), be();
      }), o.querySelector("#sel-clear").addEventListener("click", () => {
        Xe.clear(), Kt(), Ut();
      });
    }
    function To() {
      var _a;
      xt = false, Xe.clear(), Kt(), Pt && (Pt.remove(), Pt = null), (_a = xe.querySelector("#cad3d-select")) == null ? void 0 : _a.classList.remove("inspect-active");
      const o = Ge();
      o && (o.controls.enabled = true);
    }
    function no() {
      if (vt) {
        const t = Ge();
        t == null ? void 0 : t.scene.remove(vt), vt.geometry.dispose(), vt.material.dispose(), vt = null, t == null ? void 0 : t.render();
      }
      Ct && (Ct.remove(), Ct = null);
    }
    function zs(t) {
      sn();
      const o = Ge();
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
        const p = new Float32Array([
          n[0] - c[0] * l,
          n[1] - c[1] * l,
          n[2] - c[2] * l,
          n[0] + c[0] * l,
          n[1] + c[1] * l,
          n[2] + c[2] * l
        ]), u = new so();
        u.setAttribute("position", new Zs(p, 3));
        const d = new fs({
          color: i,
          dashSize: 0.3,
          gapSize: 0.15,
          transparent: true,
          opacity: 0.4,
          depthTest: false
        }), r = new ko(u, d);
        r.computeLineDistances(), r.renderOrder = 9990, o.scene.add(r), on.push(r);
      }
      o.render();
    }
    function sn() {
      const t = Ge();
      for (const o of on) t == null ? void 0 : t.scene.remove(o), o.geometry.dispose(), o.material.dispose();
      on = [], oo = null, kt && (kt.remove(), kt = null);
    }
    function Xn(t, o, n, l) {
      kt || (kt = document.createElement("div"), kt.style.cssText = "position:fixed;pointer-events:none;z-index:10002;background:var(--cad-bg);color:var(--cad-heading);font-family:monospace;font-size:11px;padding:2px 6px;border-radius:3px;white-space:nowrap;border:1px solid var(--cad-border);", document.body.appendChild(kt));
      const s = l.x - n.x, c = l.y - n.y, i = l.z - n.z, p = Math.sqrt(s * s + c * c + i * i), u = Math.abs(s), d = Math.abs(c), r = Math.abs(i);
      let b = "";
      u > d && u > r ? b = `\u0394X=${s.toFixed(2)}` : d > u && d > r ? b = `\u0394Y=${c.toFixed(2)}` : r > 0.01 && (b = `\u0394Z=${i.toFixed(2)}`), kt.textContent = `${p.toFixed(3)} m  ${b}`, kt.style.left = t + 20 + "px", kt.style.top = o - 10 + "px";
    }
    function Ls(t, o) {
      const l = e.nodes.val[o];
      if (!l) return null;
      const s = new ke(l[0], l[1], l[2]), c = t.clone(), i = c.clone().sub(s), p = 0.3, u = Math.abs(i.x), d = Math.abs(i.y), r = Math.abs(i.z);
      return d < p && r < p && u > 0.01 ? new ke(c.x, s.y, s.z) : u < p && r < p && d > 0.01 ? new ke(s.x, c.y, s.z) : u < p && d < p && r > 0.01 ? new ke(s.x, s.y, c.z) : null;
    }
    function Fo() {
      var _a;
      const t = Ge();
      mt && t && (t.scene.remove(mt), mt.geometry.dispose(), mt.material.dispose(), mt = null), bt && t && (t.scene.remove(bt), bt.geometry.dispose(), bt.material.dispose(), bt = null), sn(), Ue = null, St = null, At = false, fo && (fo.remove(), fo = null), (_a = xe.querySelector("#cad3d-draw")) == null ? void 0 : _a.classList.remove("inspect-active"), t == null ? void 0 : t.render();
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
      <button id="ds-node" style="${n(tt.node)}">Node</button>
      <button id="ds-grid" style="${n(tt.grid)}">Grid</button>
      <button id="ds-mid" style="${n(tt.midpoint)}">Mid</button>
      <button id="ds-track" style="${n(tt.track)}">Prolong</button>
      <span style="color:#666;margin:0 4px;">|</span>
      <span style="color:#888;font-size:10px;">Grid:</span>
      <input id="ds-gridsize" type="number" value="${tn}" step="0.1" min="0.1" max="10" style="width:45px;background:#333;color:#fff;border:1px solid #555;padding:2px;font-size:10px;">
      <span style="color:#888;font-size:10px;">m</span>
      <span style="color:#666;margin:0 4px;">|</span>
      <button id="dt-undo" style="padding:3px 6px;background:#444;color:#ccc;border:1px solid #555;border-radius:3px;cursor:pointer;font-size:10px;" title="Ctrl+Z">\u21A9 Undo</button>
      <button id="dt-redo" style="padding:3px 6px;background:#444;color:#ccc;border:1px solid #555;border-radius:3px;cursor:pointer;font-size:10px;" title="Ctrl+Y">\u21AA Redo</button>
    `, document.body.appendChild(t), fo = t;
      const l = () => {
        const s = t.querySelector("#dt-line"), c = t.querySelector("#dt-arc"), i = t.querySelector("#dt-node"), p = t.querySelector("#dt-area");
        s && (s.style.cssText = o(gt === "line")), c && (c.style.cssText = o(gt === "arc")), i && (i.style.cssText = o(gt === "node")), p && (p.style.cssText = o(gt === "area"));
        const u = t.querySelector("#ds-node"), d = t.querySelector("#ds-grid"), r = t.querySelector("#ds-mid"), b = t.querySelector("#ds-track");
        u && (u.style.cssText = n(tt.node)), d && (d.style.cssText = n(tt.grid)), r && (r.style.cssText = n(tt.midpoint)), b && (b.style.cssText = n(tt.track));
      };
      t.querySelector("#dt-line").addEventListener("click", () => {
        gt = "line", Ue = null, St = null, wt = [], l();
      }), t.querySelector("#dt-arc").addEventListener("click", () => {
        gt = "arc", Ue = null, St = null, wt = [], l();
      }), t.querySelector("#dt-node").addEventListener("click", () => {
        gt = "node", Ue = null, St = null, wt = [], l();
      }), t.querySelector("#dt-area").addEventListener("click", () => {
        gt = "area", Ue = null, St = null, wt = [], console.log("Area mode: click vertices del poligono. Doble-click o click cerca del 1er punto para cerrar."), l();
      }), t.querySelector("#ds-node").addEventListener("click", () => {
        tt.node = !tt.node, l();
      }), t.querySelector("#ds-grid").addEventListener("click", () => {
        tt.grid = !tt.grid, l();
      }), t.querySelector("#ds-mid").addEventListener("click", () => {
        tt.midpoint = !tt.midpoint, l();
      }), t.querySelector("#ds-track").addEventListener("click", () => {
        tt.track = !tt.track, tt.track || sn(), l();
      }), t.querySelector("#ds-gridsize").addEventListener("change", (s) => {
        tt.gridSize = parseFloat(s.target.value) || 0.5;
      }), t.querySelector("#dt-undo").addEventListener("click", () => Gn()), t.querySelector("#dt-redo").addEventListener("click", () => Vn());
    }
    function Kn(t, o, n, l) {
      const s = l.getBoundingClientRect(), c = (t - s.left) / s.width * 2 - 1, i = -((o - s.top) / s.height) * 2 + 1, p = new ds();
      p.setFromCamera(new ps(c, i), n);
      const u = e.nodes.val, d = e.elements.val, r = 0.12;
      if (tt.node) {
        let S = -1, x = 1 / 0;
        for (let a = 0; a < u.length; a++) {
          const h = u[a], y = new ke(h[0], h[1], h[2]).project(n), $ = Math.sqrt((y.x - c) ** 2 + (y.y - i) ** 2);
          $ < r && $ < x && (x = $, S = a);
        }
        if (S >= 0) return {
          nodeIdx: S,
          worldPos: new ke(...u[S]),
          snapType: "node"
        };
      }
      if (tt.midpoint) {
        let S = 1 / 0, x = null;
        for (const a of d) {
          if (a.length !== 2) continue;
          const h = u[a[0]], y = u[a[1]], $ = new ke((h[0] + y[0]) / 2, (h[1] + y[1]) / 2, (h[2] + y[2]) / 2), M = $.clone().project(n), P = Math.sqrt((M.x - c) ** 2 + (M.y - i) ** 2);
          P < r * 0.8 && P < S && (S = P, x = $);
        }
        if (x) return {
          nodeIdx: null,
          worldPos: x,
          snapType: "mid"
        };
      }
      if (tt.grid) {
        const S = new Qt(new ke(0, 0, 1), 0), x = new ke();
        if (p.ray.intersectPlane(S, x)) {
          const a = tt.gridSize || tn;
          return x.x = Math.round(x.x / a) * a, x.y = Math.round(x.y / a) * a, x.z = Math.round(x.z / a) * a, {
            nodeIdx: null,
            worldPos: x,
            snapType: "grid"
          };
        }
      }
      const b = new Qt(new ke(0, 0, 1), 0), E = new ke();
      return p.ray.intersectPlane(b, E), {
        nodeIdx: null,
        worldPos: E,
        snapType: "free"
      };
    }
    function Un(t) {
      const o = Ge();
      if (!o) return;
      const n = e.nodes.val;
      if (bt && (o.scene.remove(bt), bt.geometry.dispose(), bt.material.dispose(), bt = null), t.worldPos) {
        const l = t.snapType === "node" ? 16776960 : t.snapType === "mid" ? 16711935 : t.snapType === "grid" ? 65535 : 8947848, s = t.snapType === "node" ? 0.08 : 0.06, c = t.snapType === "mid" ? new Qs(s * 2, s * 2, s * 2) : new ea(s, 12, 12), i = new ta({
          color: l,
          transparent: true,
          opacity: 0.8,
          depthTest: false
        });
        bt = new oa(c, i), bt.position.copy(t.worldPos), bt.renderOrder = 9999, o.scene.add(bt);
      }
      if (mt && (o.scene.remove(mt), mt.geometry.dispose(), mt.material.dispose(), mt = null), Ue !== null && t.worldPos) {
        const l = n[Ue], s = new so();
        if (gt === "arc" && St !== null) {
          const i = n[St], p = Zn(new ke(l[0], l[1], l[2]), new ke(i[0], i[1], i[2]), t.worldPos, 16), u = [];
          for (let d = 0; d < p.length - 1; d++) u.push(p[d].x, p[d].y, p[d].z, p[d + 1].x, p[d + 1].y, p[d + 1].z);
          s.setAttribute("position", new ao(u, 3));
        } else s.setAttribute("position", new ao([
          l[0],
          l[1],
          l[2],
          t.worldPos.x,
          t.worldPos.y,
          t.worldPos.z
        ], 3));
        const c = new Eo({
          color: 65280,
          linewidth: 2,
          depthTest: false
        });
        mt = new mn(s, c), gt === "arc" && St !== null && (mt = new ko(s, c)), mt.renderOrder = 9999, o.scene.add(mt);
      }
      o.render();
    }
    function Zn(t, o, n, l) {
      const s = [];
      for (let c = 0; c <= l; c++) {
        const i = c / l, p = o.clone().multiplyScalar(2).sub(t.clone().multiplyScalar(0.5)).sub(n.clone().multiplyScalar(0.5)), u = (1 - i) * (1 - i), d = 2 * (1 - i) * i, r = i * i;
        s.push(new ke(u * t.x + d * p.x + r * n.x, u * t.y + d * p.y + r * n.y, u * t.z + d * p.z + r * n.z));
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
    function Fs(t) {
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
        if (Ue === null) {
          Ue = o;
          return;
        }
        if (o === Ue) return;
        mo();
        const n = [
          ...e.elements.val
        ];
        n.some((s) => s.length === 2 && (s[0] === Ue && s[1] === o || s[1] === Ue && s[0] === o)) || (n.push([
          Ue,
          o
        ]), e.elements.val = n, Jt(), e.elementInputs.val = {
          ...e.elementInputs.val
        }), Ue = o;
        return;
      }
      if (gt === "arc") {
        const o = an(t);
        if (o < 0) return;
        if (Ue === null) {
          Ue = o;
          return;
        }
        if (St === null) {
          if (o === Ue) return;
          St = o;
          return;
        }
        if (o === Ue || o === St) return;
        const n = e.nodes.val, l = new ke(...n[Ue]), s = new ke(...n[St]), c = new ke(...n[o]), i = Math.max(4, Math.round(((_a = K.nSubViga) == null ? void 0 : _a.val) ?? 8)), p = Zn(l, s, c, i);
        mo();
        const u = [
          ...e.nodes.val
        ], d = [
          ...e.elements.val
        ];
        let r = Ue;
        for (let b = 1; b < p.length; b++) {
          let E;
          if (b === p.length - 1) E = o;
          else {
            const S = p[b];
            E = u.length, u.push([
              S.x,
              S.y,
              S.z
            ]);
          }
          d.push([
            r,
            E
          ]), r = E;
        }
        e.nodes.val = u, e.elements.val = d, Jt(), e.elementInputs.val = {
          ...e.elementInputs.val
        }, Ue = o, St = null;
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
            const c = Ht({
              points: s,
              polygon: Array.from({
                length: s.length
              }, (p, u) => u),
              maxMeshSize: tn || 0.5
            }), i = [];
            for (const p of c.nodes) {
              let u = -1;
              for (let d = 0; d < n.length; d++) {
                const r = Math.abs(n[d][0] - p[0]), b = Math.abs(n[d][1] - p[1]), E = Math.abs(n[d][2] - p[2]);
                if (r < 0.01 && b < 0.01 && E < 0.01) {
                  u = d;
                  break;
                }
              }
              u >= 0 ? i.push(u) : (i.push(n.length), n.push([
                p[0],
                p[1],
                p[2]
              ]));
            }
            for (const p of c.elements) l.push([
              i[p[0]],
              i[p[1]],
              i[p[2]]
            ]);
            e.nodes.val = n, e.elements.val = l, Jt(), console.log(`Area: ${c.elements.length} triangulos creados desde ${wt.length} vertices`);
          } catch (c) {
            console.error("Area mesh failed:", c.message);
          }
          wt = [];
          return;
        }
        if (wt.push(o), console.log(`Area vertex ${wt.length}: node ${o}`), wt.length >= 2) {
          const n = wt[wt.length - 2], l = e.nodes.val, s = Ge();
          if (s) {
            const c = new so().setFromPoints([
              new ke(...l[n]),
              new ke(...l[o])
            ]), i = new ko(c, new Eo({
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
      const o = Ge();
      if (!o) return;
      vt && (o.scene.remove(vt), vt.geometry.dispose(), vt.material.dispose());
      const n = e.nodes.val, l = e.elements.val[t];
      if (!l) return;
      const s = [];
      for (let i = 0; i < l.length; i++) {
        const p = n[l[i]], u = n[l[(i + 1) % l.length]];
        s.push(p[0], p[1], p[2], u[0], u[1], u[2]);
      }
      const c = new so();
      c.setAttribute("position", new ao(s, 3)), vt = new ko(c, new Eo({
        color: 16776960,
        linewidth: 3,
        depthTest: false
      })), vt.renderOrder = 9999, o.scene.add(vt), o.render();
    }
    function ln(t) {
      const o = Ge();
      if (!o) return -1;
      const n = o.renderer.domElement.getBoundingClientRect(), l = new ps((t.clientX - n.left) / n.width * 2 - 1, -((t.clientY - n.top) / n.height) * 2 + 1), s = new ds();
      s.setFromCamera(l, o.controls.object), s.params.Line = {
        threshold: 0.5
      };
      const c = e.nodes.val, i = e.elements.val;
      if (c.length === 0 || i.length === 0) return -1;
      let p = 1 / 0, u = -1;
      const d = s.ray;
      for (let b = 0; b < i.length; b++) {
        const E = i[b];
        if (E.length === 2) {
          const S = new ke(...c[E[0]]), x = new ke(...c[E[1]]), a = new na(S, x), h = new ke(), y = new ke();
          d.closestPointToPoint(a.getCenter(new ke()), h), a.closestPointToPoint(h, true, y);
          const $ = h.distanceTo(y);
          $ < p && (p = $, u = b);
        } else if (E.length === 3) {
          const S = new ke(...c[E[0]]), x = new ke(...c[E[1]]), a = new ke(...c[E[2]]), h = new ke();
          if (d.intersectTriangle(S, x, a, false, h)) {
            const $ = d.origin.distanceTo(h);
            $ < p && (p = $, u = b);
          } else {
            const $ = S.add(x).add(a).divideScalar(3), M = new ke();
            d.closestPointToPoint($, M);
            const P = M.distanceTo($);
            P < p && (p = P, u = b);
          }
        } else if (E.length === 4) {
          const S = new ke(...c[E[0]]), x = new ke(...c[E[1]]), a = new ke(...c[E[2]]), h = new ke(...c[E[3]]), y = new ke();
          let $ = d.intersectTriangle(S, x, a, false, y);
          if ($) {
            const M = d.origin.distanceTo(y);
            M < p && (p = M, u = b);
          }
          if ($ = d.intersectTriangle(S, a, h, false, y), $) {
            const M = d.origin.distanceTo(y);
            M < p && (p = M, u = b);
          }
        }
      }
      const { extent: r } = Gt();
      return p < r * 0.1 ? u : -1;
    }
    function Z(t, o = 4) {
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
        for (let p = 0; p < s; p++) {
          const u = t[i][p], d = Math.abs(u) > 1e-10 ? "nonzero" : "";
          c += `<td class="${d}">${Z(u, 2)}</td>`;
        }
        c += "</tr>";
      }
      return c += "</table>", c;
    }
    function ye(t, o) {
      return `<span class="frac"><span class="frac-num">${t}</span><span class="frac-den">${o}</span></span>`;
    }
    function A(t, o, n) {
      let l = `<span class="var">${t}</span>`;
      return o && (l += `<sub>${o}</sub>`), l;
    }
    function qs(t, o, n, l, s, c, i) {
      const p = `${ye(A("E") + "\xB7" + A("A"), A("L"))}`, u = `${ye("12\xB7" + A("E") + "\xB7" + A("I", "z"), A("L") + "\xB3")}`, d = `${ye("12\xB7" + A("E") + "\xB7" + A("I", "y"), A("L") + "\xB3")}`, r = `${ye(A("G") + "\xB7" + A("J"), A("L"))}`, b = `${ye("4\xB7" + A("E") + "\xB7" + A("I", "y"), A("L"))}`, E = `${ye("4\xB7" + A("E") + "\xB7" + A("I", "z"), A("L"))}`;
      return `<div class="fem-eq eq-box">
      <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">Coeficientes de rigidez:</strong></div>
      <div>${p} = ${ye(Z(t) + "\xB7" + Z(o), Z(i))} = <span class="highlight">${Z(t * o / i)}</span></div>
      <div>${u} = ${ye("12\xB7" + Z(t) + "\xB7" + Z(n), Z(i) + "\xB3")} = <span class="highlight">${Z(12 * t * n / i ** 3)}</span></div>
      <div>${d} = ${ye("12\xB7" + Z(t) + "\xB7" + Z(l), Z(i) + "\xB3")} = <span class="highlight">${Z(12 * t * l / i ** 3)}</span></div>
      <div>${r} = ${ye(Z(s) + "\xB7" + Z(c), Z(i))} = <span class="highlight">${Z(s * c / i)}</span></div>
      <div>${b} = ${ye("4\xB7" + Z(t) + "\xB7" + Z(l), Z(i))} = <span class="highlight">${Z(4 * t * l / i)}</span></div>
      <div>${E} = ${ye("4\xB7" + Z(t) + "\xB7" + Z(n), Z(i))} = <span class="highlight">${Z(4 * t * n / i)}</span></div>
    </div>
    <div class="fem-eq">
      ${A("k", "local")} = <span class="mat-sym" style="grid-template-columns:repeat(4,auto)">
        <span class="cell">${ye(A("EA"), A("L"))}</span><span class="cell">0</span><span class="cell dots">\u22EF</span><span class="cell">${ye("\u2212" + A("EA"), A("L"))}</span>
        <span class="cell">0</span><span class="cell">${ye("12" + A("EI", "z"), A("L") + "\xB3")}</span><span class="cell dots">\u22EF</span><span class="cell">0</span>
        <span class="cell dots">\u22EE</span><span class="cell dots">\u22EE</span><span class="cell dots">\u22F1</span><span class="cell dots">\u22EE</span>
        <span class="cell">${ye("\u2212" + A("EA"), A("L"))}</span><span class="cell">0</span><span class="cell dots">\u22EF</span><span class="cell">${ye(A("EA"), A("L"))}</span>
      </span>
      <sub style="color:var(--fem-label)">12\xD712</sub>
    </div>`;
    }
    function As(t) {
      if (t.length === 2) {
        const n = Bt(t[1], t[0]), l = ro(n), s = n[0] / l, c = n[1] / l, i = n[2] / l;
        return `<div class="fem-eq eq-box">
        <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">Cosenos directores:</strong></div>
        <div>${A("l")} = cos(\u03B1) = ${ye("\u0394x", A("L"))} = ${ye(Z(n[0]), Z(l))} = <span class="highlight">${Z(s)}</span></div>
        <div>${A("m")} = cos(\u03B2) = ${ye("\u0394y", A("L"))} = ${ye(Z(n[1]), Z(l))} = <span class="highlight">${Z(c)}</span></div>
        <div>${A("n")} = cos(\u03B3) = ${ye("\u0394z", A("L"))} = ${ye(Z(n[2]), Z(l))} = <span class="highlight">${Z(i)}</span></div>
      </div>
      <div class="fem-eq">
        \u03BB = <span class="mat-sym" style="grid-template-columns:repeat(3,auto)">
          <span class="cell">${A("l")}</span><span class="cell">${A("m")}</span><span class="cell">${A("n")}</span>
          <span class="cell">${ye("\u2212" + A("m"), A("D"))}</span><span class="cell">${ye(A("l"), A("D"))}</span><span class="cell">0</span>
          <span class="cell">${ye("\u2212" + A("l") + "\xB7" + A("n"), A("D"))}</span><span class="cell">${ye("\u2212" + A("m") + "\xB7" + A("n"), A("D"))}</span><span class="cell">${A("D")}</span>
        </span>
        &nbsp; donde ${A("D")} = \u221A(${A("l")}\xB2 + ${A("m")}\xB2)
      </div>
      <div class="fem-eq">
        ${A("T")} = ${A("I", "4")} \u2297 \u03BB &nbsp; <sub style="color:var(--fem-label)">(Kronecker, 12\xD712)</sub>
      </div>`;
      }
      return `<div class="fem-eq">${A("T")} \u2014 sistema local del tri\xE1ngulo (normal \xD7 lados) <sub>18\xD718</sub></div>`;
    }
    function Cs() {
      return `<div class="fem-eq">
      ${A("K", "global")} = ${A("T")}<sup>T</sup> \xB7 ${A("k", "local")} \xB7 ${A("T")}
    </div>`;
    }
    function Ps(t) {
      const o = t.map((n) => `6\xB7${n} = ${6 * n}`).join(", ");
      return `<div class="fem-eq eq-box">
      <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">Ensamblaje en K global:</strong></div>
      <div>${A("K", "global")}[${A("i")}, ${A("j")}] += ${A("K", "elem")}[${A("i")}, ${A("j")}]</div>
      <div style="margin-top:4px">donde ${A("i")}, ${A("j")} \u2208 {${o}} + (0..5)</div>
    </div>`;
    }
    function _s(t) {
      return t ? `<div class="fem-eq eq-box">
        <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">Recuperaci\xF3n de fuerzas:</strong></div>
        <div>${A("u", "local")} = ${A("T")} \xB7 ${A("u", "global")}</div>
        <div>${A("f", "local")} = ${A("k", "local")} \xB7 ${A("u", "local")}</div>
        <div style="margin-top:4px;color:var(--fem-eq-sub)">
          ${A("f")} = [${A("N", "i")}, ${A("V", "y,i")}, ${A("V", "z,i")}, ${A("M", "x,i")}, ${A("M", "y,i")}, ${A("M", "z,i")}, ${A("N", "j")}, \u2026]
        </div>
      </div>` : `<div class="fem-eq eq-box">
      <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">Esfuerzos en placa:</strong></div>
      <div>\u03C3 = ${ye("1", "2" + A("A"))} \xB7 ${A("D")} \xB7 ${A("B")} \xB7 ${A("u")}</div>
      <div>${A("N", "xx")} = \u03C3<sub>xx</sub> \xB7 ${A("t")} &nbsp;&nbsp; ${A("M", "xx")} = \u03C3<sub>xx</sub> \xB7 ${ye(A("t") + "\xB3", "12")}</div>
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
          const i = t[s][c], p = (s === c ? "diag " : "") + (Math.abs(i) > 1e-10 ? "nz" : "");
          l += `<td class="${p}">${Z(i, 2)}</td>`;
        }
        l += "</tr>";
      }
      return l += "</table>", l;
    }
    function es() {
      const t = "0", o = ye(A("EA"), A("L")), n = ye("\u2212" + A("EA"), A("L")), l = ye("12" + A("EI", "z"), A("L") + "\xB3"), s = ye("\u221212" + A("EI", "z"), A("L") + "\xB3"), c = ye("12" + A("EI", "y"), A("L") + "\xB3"), i = ye("\u221212" + A("EI", "y"), A("L") + "\xB3"), p = ye("6" + A("EI", "z"), A("L") + "\xB2"), u = ye("\u22126" + A("EI", "z"), A("L") + "\xB2"), d = ye("6" + A("EI", "y"), A("L") + "\xB2"), r = ye("\u22126" + A("EI", "y"), A("L") + "\xB2"), b = ye(A("GJ"), A("L")), E = ye("\u2212" + A("GJ"), A("L")), S = ye("4" + A("EI", "z"), A("L")), x = ye("2" + A("EI", "z"), A("L")), a = ye("4" + A("EI", "y"), A("L")), h = ye("2" + A("EI", "y"), A("L")), y = '<span style="color:var(--fem-eq-dots);font-style:italic">sym</span>', $ = [
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
      ], M = [
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
      ], P = [
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
          p,
          t,
          s,
          t,
          t,
          t,
          p
        ],
        [
          t,
          t,
          c,
          t,
          r,
          t,
          t,
          t,
          i,
          t,
          r,
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
          E,
          t,
          t
        ],
        [
          t,
          t,
          r,
          t,
          a,
          t,
          t,
          t,
          d,
          t,
          h,
          t
        ],
        [
          t,
          p,
          t,
          t,
          t,
          S,
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
          i,
          t,
          d,
          t,
          t,
          t,
          c,
          t,
          d,
          t
        ],
        [
          t,
          t,
          t,
          E,
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
          r,
          t,
          h,
          t,
          t,
          t,
          d,
          t,
          a,
          t
        ],
        [
          t,
          p,
          t,
          t,
          t,
          x,
          t,
          u,
          t,
          t,
          t,
          S
        ]
      ];
      let q = '<div style="margin-bottom:8px;color:var(--fem-eq-sub);font-size:11px;font-family:monospace">Eq. 6.1 \u2014 Matriz de rigidez de elemento de p\xF3rtico espacial</div>';
      q += '<table><tr><td class="hdr"></td>';
      for (const m of M) q += `<td class="hdr">${m}</td>`;
      q += "</tr>";
      for (let m = 0; m < 12; m++) {
        q += `<tr><td class="hdr">${$[m]}</td>`;
        for (let f = 0; f < 12; f++) if (f < m) q += `<td style="color:var(--fem-border-cell)">${f === 0 && m > 0 ? y : ""}</td>`;
        else {
          const v = P[m][f], I = (m === f ? "diag " : "") + (v !== "0" ? "nz" : "");
          q += `<td class="${I}">${v}</td>`;
        }
        q += "</tr>";
      }
      return q += "</table>", q;
    }
    function Os(t, o, n, l, s, c, i) {
      return `<div class="coeff-grid">${[
        {
          name: `${ye(A("E") + "\xB7" + A("A"), A("L"))}`,
          calc: `${ye(Z(t) + "\xD7" + Z(o), Z(i))}`,
          val: t * o / i,
          label: "Axial"
        },
        {
          name: `${ye("12\xB7" + A("E") + "\xB7" + A("I", "z"), A("L") + "\xB3")}`,
          calc: `${ye("12\xD7" + Z(t) + "\xD7" + Z(n), Z(i) + "\xB3")}`,
          val: 12 * t * n / i ** 3,
          label: "Corte Y"
        },
        {
          name: `${ye("6\xB7" + A("E") + "\xB7" + A("I", "z"), A("L") + "\xB2")}`,
          calc: `${ye("6\xD7" + Z(t) + "\xD7" + Z(n), Z(i) + "\xB2")}`,
          val: 6 * t * n / i ** 2,
          label: "Corte-Momento Z"
        },
        {
          name: `${ye("12\xB7" + A("E") + "\xB7" + A("I", "y"), A("L") + "\xB3")}`,
          calc: `${ye("12\xD7" + Z(t) + "\xD7" + Z(l), Z(i) + "\xB3")}`,
          val: 12 * t * l / i ** 3,
          label: "Corte Z"
        },
        {
          name: `${ye("6\xB7" + A("E") + "\xB7" + A("I", "y"), A("L") + "\xB2")}`,
          calc: `${ye("6\xD7" + Z(t) + "\xD7" + Z(l), Z(i) + "\xB2")}`,
          val: 6 * t * l / i ** 2,
          label: "Corte-Momento Y"
        },
        {
          name: `${ye(A("G") + "\xB7" + A("J"), A("L"))}`,
          calc: `${ye(Z(s) + "\xD7" + Z(c), Z(i))}`,
          val: s * c / i,
          label: "Torsi\xF3n"
        },
        {
          name: `${ye("4\xB7" + A("E") + "\xB7" + A("I", "z"), A("L"))}`,
          calc: `${ye("4\xD7" + Z(t) + "\xD7" + Z(n), Z(i))}`,
          val: 4 * t * n / i,
          label: "Flexi\xF3n Z (4EI/L)"
        },
        {
          name: `${ye("2\xB7" + A("E") + "\xB7" + A("I", "z"), A("L"))}`,
          calc: `${ye("2\xD7" + Z(t) + "\xD7" + Z(n), Z(i))}`,
          val: 2 * t * n / i,
          label: "Flexi\xF3n Z (2EI/L)"
        },
        {
          name: `${ye("4\xB7" + A("E") + "\xB7" + A("I", "y"), A("L"))}`,
          calc: `${ye("4\xD7" + Z(t) + "\xD7" + Z(l), Z(i))}`,
          val: 4 * t * l / i,
          label: "Flexi\xF3n Y (4EI/L)"
        },
        {
          name: `${ye("2\xB7" + A("E") + "\xB7" + A("I", "y"), A("L"))}`,
          calc: `${ye("2\xD7" + Z(t) + "\xD7" + Z(l), Z(i))}`,
          val: 2 * t * l / i,
          label: "Flexi\xF3n Y (2EI/L)"
        }
      ].map((u) => `<div class="coeff-item"><div style="color:var(--fem-eq-sub);font-size:10px;font-family:monospace;margin-bottom:2px">${u.label}</div>${u.name} = ${u.calc} = <span class="highlight">${Z(u.val)}</span></div>`).join("")}</div>`;
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
      Ct && Ct.remove();
      const o = e.nodes.val, n = e.elements.val, l = n[t], s = l.map((m) => o[m]), c = l.length === 2, i = ((_a = e.elementInputs) == null ? void 0 : _a.val) || {}, p = (_b = e.deformOutputs) == null ? void 0 : _b.val, u = (_c = e.analyzeOutputs) == null ? void 0 : _c.val;
      if (c) {
        const m = ro(Bt(s[1], s[0])), f = ((_d = i.elasticities) == null ? void 0 : _d.get(t)) ?? 0, v = ((_e2 = i.areas) == null ? void 0 : _e2.get(t)) ?? 0, I = ((_f = i.momentsOfInertiaZ) == null ? void 0 : _f.get(t)) ?? 0, T = ((_g = i.momentsOfInertiaY) == null ? void 0 : _g.get(t)) ?? 0, R = ((_h = i.shearModuli) == null ? void 0 : _h.get(t)) ?? 0, F = ((_i = i.torsionalConstants) == null ? void 0 : _i.get(t)) ?? 0;
        `${l[0]}${l[1]}${Z(m)}${Z(f)}${Z(v)}${Z(I)}${Z(T)}${Z(R)}${Z(F)}`;
      } else {
        const m = ((_j = i.elasticities) == null ? void 0 : _j.get(t)) ?? 0, f = ((_k = i.thicknesses) == null ? void 0 : _k.get(t)) ?? 0, v = ((_l = i.poissonsRatios) == null ? void 0 : _l.get(t)) ?? 0;
        `${l.join(", ")}${Z(m)}${Z(f)}${Z(v)}`;
      }
      let d = "", r = "", b = "", E = "", S = "", x = "", a = "", h = "", y = null, $ = null, M = null, P = [];
      try {
        if (y = Ro(s, i, t), $ = Ho(s), M = zt($n($), zt(y, $)), P = c ? [
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
          const I = ro(Bt(s[1], s[0])), T = ((_m = i.elasticities) == null ? void 0 : _m.get(t)) ?? 0, R = ((_n2 = i.areas) == null ? void 0 : _n2.get(t)) ?? 0, F = ((_o2 = i.momentsOfInertiaZ) == null ? void 0 : _o2.get(t)) ?? 0, L = ((_p = i.momentsOfInertiaY) == null ? void 0 : _p.get(t)) ?? 0, C = ((_q = i.shearModuli) == null ? void 0 : _q.get(t)) ?? 0, _ = ((_r = i.torsionalConstants) == null ? void 0 : _r.get(t)) ?? 0;
          E = qs(T, R, F, L, C, _, I);
        }
        S = As(s), x = Cs(), a = Ps(l), h = _s(c);
        const m = '<button class="fem-expand-btn" data-full="kLocal">\u26F6 Ver completa</button>', f = '<button class="fem-expand-btn" data-full="T">\u26F6 Ver completa</button>', v = '<button class="fem-expand-btn" data-full="kGlobal">\u26F6 Ver completa</button>';
        d = `<div class="matrix-label">k_local (${y.length}\xD7${y.length}) ${m}</div>${rn(y, P)}`, r = `<div class="matrix-label">T \u2014 Transformaci\xF3n (${$.length}\xD7${$.length}) ${f}</div>${rn($, P)}`, b = `<div class="matrix-label">K_global = T^T \xB7 k \xB7 T ${v}</div>${rn(M, P)}`;
      } catch (m) {
        d = `<div style="color:red">Error: ${m.message}</div>`;
      }
      if (p == null ? void 0 : p.deformations) {
        const m = [
          "ux",
          "uy",
          "uz",
          "\u03B8x",
          "\u03B8y",
          "\u03B8z"
        ];
        l.map((f, v) => {
          var _a2;
          const I = ((_a2 = p.deformations) == null ? void 0 : _a2.get(f)) || [
            0,
            0,
            0,
            0,
            0,
            0
          ], T = m.map((R, F) => `<span class="prop-key">${R}</span>: <span class="${Math.abs(I[F]) > 1e-10 ? "result-val" : ""}">${Z(I[F])}</span>`).join(" &nbsp;");
          return `<div style="margin-bottom:2px"><strong>Nodo ${f}:</strong> ${T}</div>`;
        }).join("");
      }
      if (u && c && (p == null ? void 0 : p.deformations) && y && $) {
        const m = (_s2 = u.normals) == null ? void 0 : _s2.get(t), f = (_t = u.shearsY) == null ? void 0 : _t.get(t), v = (_u = u.shearsZ) == null ? void 0 : _u.get(t), I = (_v = u.torsions) == null ? void 0 : _v.get(t), T = (_w = u.bendingsY) == null ? void 0 : _w.get(t), R = (_x = u.bendingsZ) == null ? void 0 : _x.get(t), F = [
          "ux",
          "uy",
          "uz",
          "\u03B8x",
          "\u03B8y",
          "\u03B8z"
        ], L = [];
        for (const te of l) {
          const Q = ((_y = p.deformations) == null ? void 0 : _y.get(te)) || [
            0,
            0,
            0,
            0,
            0,
            0
          ];
          L.push(...Q);
        }
        let C = [];
        try {
          C = zt($, L);
        } catch {
          C = new Array(12).fill(0);
        }
        let _ = [];
        try {
          _ = zt(y, C);
        } catch {
          _ = new Array(12).fill(0);
        }
        const oe = (te, Q) => te.map((ae, $e) => `<span style="color:${Math.abs(ae) > 1e-10 ? "var(--fem-nonzero)" : "var(--fem-eq-dots)"}">${Q[$e % 6]}=${Z(ae)}</span>`).join(", "), re = [
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
        ].map((te, Q) => `${te}${Q < 6 ? "\u1D62" : "\u2C7C"}`);
        `${A("u", "global")}${l.map((te, Q) => `<span style="color:var(--fem-label)">nodo ${te}:</span> ${F.map((ae, $e) => `<span style="color:${Math.abs(L[Q * 6 + $e]) > 1e-10 ? "var(--fem-eq-var)" : "var(--fem-eq-dots)"}">${Z(L[Q * 6 + $e])}</span>`).join(", ")}`).join(" | ")}${A("u", "local")}${A("T")}${A("u", "global")}${A("u", "local")}${oe(C, [
          ...F,
          ...F
        ])}${A("f", "local")}${A("k", "local")}${A("u", "local")}${A("f", "local")}${_.map((te, Q) => `<span style="color:${Math.abs(te) > 1e-10 ? "var(--fem-nonzero)" : "var(--fem-eq-dots)"}">${re[Q]}=${Z(te)}</span>`).join(", ")}${A("P", "1")}${A("N", "i")}${Z(_[0])}${A("P", "7")}${A("N", "j")}${Z(_[6])}${A("P", "2")}${A("V", "y,i")}${Z(_[1])}${A("P", "8")}${A("V", "y,j")}${Z(_[7])}${A("P", "3")}${A("V", "z,i")}${Z(_[2])}${A("P", "9")}${A("V", "z,j")}${Z(_[8])}${A("P", "4")}${A("M", "x,i")}${Z(_[3])}${A("P", "10")}${A("M", "x,j")}${Z(_[9])}${A("P", "5")}${A("M", "y,i")}${Z(_[4])}${A("P", "11")}${A("M", "y,j")}${Z(_[10])}${A("P", "6")}${A("M", "z,i")}${Z(_[5])}${A("P", "12")}${A("M", "z,j")}${Z(_[11])}${m ? m.map((te) => Z(te)).join(", ") : "\u2014"}${f ? f.map((te) => Z(te)).join(", ") : "\u2014"}${v ? v.map((te) => Z(te)).join(", ") : "\u2014"}${I ? I.map((te) => Z(te)).join(", ") : "\u2014"}${T ? T.map((te) => Z(te)).join(", ") : "\u2014"}${R ? R.map((te) => Z(te)).join(", ") : "\u2014"}`;
      } else if (u && c) {
        const m = (_z = u.normals) == null ? void 0 : _z.get(t), f = (_A = u.shearsY) == null ? void 0 : _A.get(t), v = (_B = u.shearsZ) == null ? void 0 : _B.get(t), I = (_C = u.torsions) == null ? void 0 : _C.get(t), T = (_D = u.bendingsY) == null ? void 0 : _D.get(t), R = (_E = u.bendingsZ) == null ? void 0 : _E.get(t);
        `${m ? m.map((F) => Z(F)).join(", ") : "\u2014"}${f ? f.map((F) => Z(F)).join(", ") : "\u2014"}${v ? v.map((F) => Z(F)).join(", ") : "\u2014"}${I ? I.map((F) => Z(F)).join(", ") : "\u2014"}${T ? T.map((F) => Z(F)).join(", ") : "\u2014"}${R ? R.map((F) => Z(F)).join(", ") : "\u2014"}`;
      } else if (u && !c) {
        const m = (_F = u.bendingXX) == null ? void 0 : _F.get(t), f = (_G = u.bendingYY) == null ? void 0 : _G.get(t), v = (_H = u.bendingXY) == null ? void 0 : _H.get(t), I = (_I = u.membraneXX) == null ? void 0 : _I.get(t), T = (_J = u.membraneYY) == null ? void 0 : _J.get(t), R = (_K = u.membraneXY) == null ? void 0 : _K.get(t);
        `${m ? m.map((F) => Z(F)).join(", ") : "\u2014"}${f ? f.map((F) => Z(F)).join(", ") : "\u2014"}${v ? v.map((F) => Z(F)).join(", ") : "\u2014"}${I ? I.map((F) => Z(F)).join(", ") : "\u2014"}${T ? T.map((F) => Z(F)).join(", ") : "\u2014"}${R ? R.map((F) => Z(F)).join(", ") : "\u2014"}`;
      }
      `${l[0]}`, 6 * l[0], 6 * l[0] + 5, `${l[1]}`, 6 * l[1], 6 * l[1] + 5, l.length === 3 && (`${l[2]}`, 6 * l[2], 6 * l[2] + 5), o.length * 6, o.length * 6, Ct = ga(t, o, n, i, p, u), Ct.id = "fem-inspect-panel", document.body.appendChild(Ct), (_L = Ct.querySelector("#er-close")) == null ? void 0 : _L.addEventListener("click", () => no());
      const q = c ? (() => {
        var _a2, _b2, _c2, _d2, _e3, _f2;
        const m = ro(Bt(s[1], s[0])), f = ((_a2 = i.elasticities) == null ? void 0 : _a2.get(t)) ?? 0, v = ((_b2 = i.areas) == null ? void 0 : _b2.get(t)) ?? 0, I = ((_c2 = i.momentsOfInertiaZ) == null ? void 0 : _c2.get(t)) ?? 0, T = ((_d2 = i.momentsOfInertiaY) == null ? void 0 : _d2.get(t)) ?? 0, R = ((_e3 = i.shearModuli) == null ? void 0 : _e3.get(t)) ?? 0, F = ((_f2 = i.torsionalConstants) == null ? void 0 : _f2.get(t)) ?? 0;
        return Os(f, v, I, T, R, F, m);
      })() : void 0;
      Ct.querySelectorAll("[data-full]").forEach((m) => {
        m.addEventListener("click", (f) => {
          f.stopPropagation();
          const v = m.dataset.full;
          if (v === "kLocal" && y) {
            const I = c ? es() : "<em>Shell 18\xD718 \u2014 ver tabla num\xE9rica</em>";
            dn(`Elemento ${t} \u2014 Rigidez Local k_local`, I, cn(y, P), q);
          } else if (v === "T" && $) dn(`Elemento ${t} \u2014 Transformaci\xF3n T`, S, cn($, P));
          else if (v === "kGlobal" && M) {
            const I = c ? es() : "<em>Shell 18\xD718</em>";
            dn(`Elemento ${t} \u2014 Rigidez Global K = T^T \xB7 k \xB7 T`, I, cn(M, P), q);
          }
        });
      });
    }
    function os() {
      const l = [], s = [];
      for (let x = 0; x <= 8; x++) {
        const a = x / 8, h = 30 * a, $ = 12 * (1 - a) * (1 - a * 0.3) / 2, M = l.length;
        if (l.push([
          -$,
          -$,
          h
        ]), l.push([
          $,
          -$,
          h
        ]), l.push([
          $,
          $,
          h
        ]), l.push([
          -$,
          $,
          h
        ]), s.push([
          M,
          M + 1
        ]), s.push([
          M + 1,
          M + 2
        ]), s.push([
          M + 2,
          M + 3
        ]), s.push([
          M + 3,
          M
        ]), x > 0 && x < 8 && (s.push([
          M,
          M + 2
        ]), s.push([
          M + 1,
          M + 3
        ])), x > 0) {
          const P = M - 4;
          for (let q = 0; q < 4; q++) s.push([
            P + q,
            M + q
          ]);
          s.push([
            P,
            M + 1
          ]), s.push([
            P + 1,
            M + 2
          ]), s.push([
            P + 2,
            M + 3
          ]), s.push([
            P + 3,
            M
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
      const i = l.length - 4, p = /* @__PURE__ */ new Map();
      for (let x = 0; x < 4; x++) p.set(i + x, [
        0,
        0,
        -50,
        0,
        0,
        0
      ]);
      e.nodes.val = l, e.elements.val = s, e.nodeInputs && (e.nodeInputs.val = {
        supports: c,
        loads: p
      });
      const u = 2e8, d = 77e6, r = 5e-3, b = 2e-6, E = 1e-6, S = {
        elasticities: new Map(s.map((x, a) => [
          a,
          u
        ])),
        shearModuli: new Map(s.map((x, a) => [
          a,
          d
        ])),
        areas: new Map(s.map((x, a) => [
          a,
          r
        ])),
        momentsOfInertiaZ: new Map(s.map((x, a) => [
          a,
          b
        ])),
        momentsOfInertiaY: new Map(s.map((x, a) => [
          a,
          b
        ])),
        torsionalConstants: new Map(s.map((x, a) => [
          a,
          E
        ]))
      };
      e.elementInputs && (e.elementInputs.val = S);
      try {
        const x = Et(l, s, {
          supports: c,
          loads: p
        }, S);
        x && e.deformOutputs && (e.deformOutputs.val = x);
      } catch (x) {
        console.warn("Eiffel deform:", x.message);
      }
      setTimeout(() => ut(), 50), je(), console.log(`Torre Eiffel: ${l.length} nodos, ${s.length} elementos, H=30m`);
    }
    function ns() {
      const l = [], s = [];
      for (let S = 0; S <= 20; S++) {
        const x = S / 20, a = 20 * x, h = 20 * (1 - Math.pow(2 * x - 1, 2)), y = 2;
        l.push([
          a,
          -2 / 2,
          h
        ]), l.push([
          a,
          y / 2,
          h
        ]);
      }
      for (let S = 0; S < 20; S++) s.push([
        S * 2,
        (S + 1) * 2
      ]), s.push([
        S * 2 + 1,
        (S + 1) * 2 + 1
      ]), s.push([
        S * 2,
        S * 2 + 1
      ]), s.push([
        S * 2,
        (S + 1) * 2 + 1
      ]), s.push([
        S * 2 + 1,
        (S + 1) * 2
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
      for (let S = 0; S <= 20; S++) i.set(S * 2, [
        0,
        0,
        -20,
        0,
        0,
        0
      ]), i.set(S * 2 + 1, [
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
      const p = 2e8, u = 77e6, d = 0.01, r = 5e-6, b = 2e-6, E = {
        elasticities: new Map(s.map((S, x) => [
          x,
          p
        ])),
        shearModuli: new Map(s.map((S, x) => [
          x,
          u
        ])),
        areas: new Map(s.map((S, x) => [
          x,
          d
        ])),
        momentsOfInertiaZ: new Map(s.map((S, x) => [
          x,
          r
        ])),
        momentsOfInertiaY: new Map(s.map((S, x) => [
          x,
          r
        ])),
        torsionalConstants: new Map(s.map((S, x) => [
          x,
          b
        ]))
      };
      e.elementInputs && (e.elementInputs.val = E);
      try {
        const S = Et(l, s, {
          supports: c,
          loads: i
        }, E);
        S && e.deformOutputs && (e.deformOutputs.val = S);
      } catch (S) {
        console.warn("Arco:", S.message);
      }
      setTimeout(() => ut(), 50), je(), console.log(`Arco Gateway: ${l.length} nodos, ${s.length} elem, span=20m, H=20m`);
    }
    function ss() {
      const c = [], i = [];
      for (let a = 0; a <= 16; a++) {
        const h = 60 * a / 16;
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
      const p = c.length;
      for (let a = 0; a < 16; a++) i.push([
        a * 2,
        (a + 1) * 2
      ]), i.push([
        a * 2 + 1,
        (a + 1) * 2 + 1
      ]), i.push([
        a * 2,
        a * 2 + 1
      ]);
      i.push([
        16 * 2,
        16 * 2 + 1
      ]);
      const u = [
        Math.round(16 / 3),
        Math.round(2 * 16 / 3)
      ], d = [];
      for (const a of u) {
        const h = 60 * a / 16, y = c.length;
        c.push([
          h,
          -6 / 2,
          0
        ]);
        const $ = c.length;
        c.push([
          h,
          6 / 2,
          0
        ]);
        const M = c.length;
        c.push([
          h,
          -6 / 2,
          28
        ]);
        const P = c.length;
        c.push([
          h,
          6 / 2,
          28
        ]), d.push(M, P), i.push([
          y,
          a * 2
        ]), i.push([
          a * 2,
          M
        ]), i.push([
          $,
          a * 2 + 1
        ]), i.push([
          a * 2 + 1,
          P
        ]), i.push([
          M,
          P
        ]);
      }
      for (const a of d) {
        const h = c[a][0];
        for (let y = 0; y <= 16; y++) {
          const $ = 60 * y / 16;
          if (Math.abs($ - h) > 60 * 0.05 && Math.abs($ - h) < 60 * 0.45) {
            const M = c[a][1] < 0 ? y * 2 : y * 2 + 1;
            y % 2 === 0 && i.push([
              a,
              M
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
      for (let a = p; a < p + u.length * 4; a += 4) r.set(a, [
        true,
        true,
        true,
        true,
        true,
        true
      ]), r.set(a + 1, [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
      const b = /* @__PURE__ */ new Map();
      for (let a = 0; a <= 16; a++) b.set(a * 2, [
        0,
        0,
        -30,
        0,
        0,
        0
      ]), b.set(a * 2 + 1, [
        0,
        0,
        -30,
        0,
        0,
        0
      ]);
      e.nodes.val = c, e.elements.val = i, e.nodeInputs && (e.nodeInputs.val = {
        supports: r,
        loads: b
      });
      const E = 2e8, S = 77e6, x = {
        elasticities: new Map(i.map((a, h) => [
          h,
          E
        ])),
        shearModuli: new Map(i.map((a, h) => [
          h,
          S
        ])),
        areas: new Map(i.map((a, h) => [
          h,
          h < 16 * 3 + 1 ? 0.02 : 1e-3
        ])),
        momentsOfInertiaZ: new Map(i.map((a, h) => [
          h,
          5e-5
        ])),
        momentsOfInertiaY: new Map(i.map((a, h) => [
          h,
          2e-5
        ])),
        torsionalConstants: new Map(i.map((a, h) => [
          h,
          1e-5
        ]))
      };
      e.elementInputs && (e.elementInputs.val = x);
      try {
        const a = Et(c, i, {
          supports: r,
          loads: b
        }, x);
        a && e.deformOutputs && (e.deformOutputs.val = a);
      } catch (a) {
        console.warn("Puente:", a.message);
      }
      setTimeout(() => ut(), 50), je(), console.log(`Puente atirantado: ${c.length} nodos, ${i.length} elem, span=60m`);
    }
    function as() {
      const c = [], i = [];
      for (let h = 0; h <= 12; h++) {
        const y = h * 3.5, $ = h * 5 * Math.PI / 180;
        for (let M = 0; M < 6; M++) {
          const P = $ + 2 * Math.PI * M / 6, q = 5 * Math.cos(P), m = 5 * Math.sin(P);
          c.push([
            q,
            m,
            y
          ]);
        }
      }
      for (let h = 0; h <= 12; h++) {
        const y = h * 6;
        for (let $ = 0; $ < 6; $++) i.push([
          y + $,
          y + ($ + 1) % 6
        ]);
        if (h < 12) {
          const $ = (h + 1) * 6;
          for (let M = 0; M < 6; M++) i.push([
            y + M,
            $ + M
          ]), i.push([
            y + M,
            $ + (M + 1) % 6
          ]);
        }
      }
      for (let h = 0; h <= 12; h++) {
        const y = c.length;
        c.push([
          0,
          0,
          h * 3.5
        ]);
        const $ = h * 6;
        for (let M = 0; M < 6; M++) i.push([
          y,
          $ + M
        ]);
      }
      const p = 13 * 6;
      for (let h = 0; h < 12; h++) i.push([
        p + h,
        p + h + 1
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
      u.set(p, [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
      const d = /* @__PURE__ */ new Map();
      for (let h = 1; h <= 12; h++) {
        const y = 10 * h / 12, $ = h * 6;
        for (let M = 0; M < 6; M++) d.set($ + M, [
          y,
          0,
          -5,
          0,
          0,
          0
        ]);
      }
      e.nodes.val = c, e.elements.val = i, e.nodeInputs && (e.nodeInputs.val = {
        supports: u,
        loads: d
      });
      const r = 2e8, b = 77e6, E = 8e-3, S = 1e-5, x = 5e-6, a = {
        elasticities: new Map(i.map((h, y) => [
          y,
          r
        ])),
        shearModuli: new Map(i.map((h, y) => [
          y,
          b
        ])),
        areas: new Map(i.map((h, y) => [
          y,
          E
        ])),
        momentsOfInertiaZ: new Map(i.map((h, y) => [
          y,
          S
        ])),
        momentsOfInertiaY: new Map(i.map((h, y) => [
          y,
          S
        ])),
        torsionalConstants: new Map(i.map((h, y) => [
          y,
          x
        ]))
      };
      e.elementInputs && (e.elementInputs.val = a);
      try {
        const h = Et(c, i, {
          supports: u,
          loads: d
        }, a);
        h && e.deformOutputs && (e.deformOutputs.val = h);
      } catch (h) {
        console.warn("Twisted:", h.message);
      }
      setTimeout(() => ut(), 50), je(), console.log(`Torre Twist: ${c.length} nodos, ${i.length} elem, 12 pisos, twist=5deg/piso`);
    }
    function ls() {
      const s = [], c = [];
      for (let a = 0; a <= 20; a++) {
        const h = a / 20, y = a * 3;
        let $ = 8 * (1 - h * 0.7);
        h > 0.4 && ($ *= 0.85), h > 0.7 && ($ *= 0.7);
        const M = s.length;
        s.push([
          0,
          0,
          y
        ]);
        for (let P = 0; P < 3; P++) {
          const q = P * 2 * Math.PI / 3 - Math.PI / 2, m = $ * Math.cos(q), f = $ * Math.sin(q), v = s.length;
          s.push([
            m,
            f,
            y
          ]), c.push([
            M,
            v
          ]);
          const I = s.length;
          s.push([
            m * 0.5,
            f * 0.5,
            y
          ]), c.push([
            M,
            I
          ]), c.push([
            I,
            v
          ]);
        }
        for (let P = 0; P < 3; P++) {
          const q = M + 1 + P * 2, m = M + 1 + (P + 1) % 3 * 2;
          c.push([
            q,
            m
          ]);
        }
        if (a < 20) {
          const q = M + 7;
          c.push([
            M,
            q
          ]);
          for (let m = 0; m < 3; m++) c.push([
            M + 1 + m * 2,
            q + 1 + m * 2
          ]), c.push([
            M + 2 + m * 2,
            q + 2 + m * 2
          ]), c.push([
            M + 1 + m * 2,
            q + 2 + m * 2
          ]);
        }
      }
      const i = /* @__PURE__ */ new Map(), p = 1 + 3 * 2;
      for (let a = 0; a < p; a++) i.set(a, [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
      const u = /* @__PURE__ */ new Map();
      for (let a = 1; a <= 20; a++) {
        const h = a * p, y = 5 * a / 20;
        u.set(h, [
          y,
          0,
          -10,
          0,
          0,
          0
        ]);
      }
      e.nodes.val = s, e.elements.val = c, e.nodeInputs && (e.nodeInputs.val = {
        supports: i,
        loads: u
      });
      const d = 35e6, r = 14e6, b = 0.02, E = 5e-5, S = 2e-5, x = {
        elasticities: new Map(c.map((a, h) => [
          h,
          d
        ])),
        shearModuli: new Map(c.map((a, h) => [
          h,
          r
        ])),
        areas: new Map(c.map((a, h) => [
          h,
          b
        ])),
        momentsOfInertiaZ: new Map(c.map((a, h) => [
          h,
          E
        ])),
        momentsOfInertiaY: new Map(c.map((a, h) => [
          h,
          E
        ])),
        torsionalConstants: new Map(c.map((a, h) => [
          h,
          S
        ]))
      };
      e.elementInputs && (e.elementInputs.val = x);
      try {
        const a = Et(s, c, {
          supports: i,
          loads: u
        }, x);
        a && e.deformOutputs && (e.deformOutputs.val = a);
      } catch (a) {
        console.warn("Burj:", a.message);
      }
      setTimeout(() => ut(), 50), je(), console.log(`Burj Khalifa: ${s.length} nodos, ${c.length} elem, 20 pisos, H=${20 * 3}m`);
    }
    function is() {
      const t = [], o = [];
      for (let b = 0; b < 3; b++) {
        const E = b * 12, S = 15 - b * 2, x = 20 - b * 3, a = 8 - b, h = t.length;
        for (let $ = 0; $ <= 4; $++) {
          const M = $ / 4, P = -a / 2 + a * M, q = x * (1 - M * M * 0.3);
          for (let m = 0; m <= 12; m++) {
            const f = m / 12, v = E + q * f, I = S * Math.sin(Math.PI * f) * (1 - M * M * 0.5), T = P;
            t.push([
              v,
              T,
              I
            ]);
          }
        }
        const y = 13;
        for (let $ = 0; $ < 4; $++) for (let M = 0; M < 12; M++) {
          const P = h + $ * y + M, q = h + $ * y + M + 1, m = h + ($ + 1) * y + M + 1, f = h + ($ + 1) * y + M;
          o.push([
            P,
            q,
            m,
            f
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
      const c = /* @__PURE__ */ new Map();
      for (let b = 0; b < t.length; b++) t[b][2] > 2 && c.set(b, [
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
      const i = 35e6, p = 0.2, u = 0.15, d = i / (2 * (1 + p)), r = {
        elasticities: new Map(o.map((b, E) => [
          E,
          i
        ])),
        poissonsRatios: new Map(o.map((b, E) => [
          E,
          p
        ])),
        thicknesses: new Map(o.map((b, E) => [
          E,
          u
        ])),
        shearModuli: new Map(o.map((b, E) => [
          E,
          d
        ]))
      };
      e.elementInputs && (e.elementInputs.val = r);
      try {
        const b = Et(t, o, {
          supports: s,
          loads: c
        }, r);
        b && e.deformOutputs && (e.deformOutputs.val = b);
      } catch (b) {
        console.warn("Opera:", b.message);
      }
      setTimeout(() => ut(), 50), je(), console.log(`Sydney Opera: ${t.length} nodos, ${o.length} shells Q4, 3 velas`);
    }
    function rs() {
      const l = [], s = [];
      for (let x = 0; x <= 15; x++) {
        const a = x / 15, h = x * 3.5, y = 5 * (0.6 + 0.4 * Math.sin(Math.PI * a));
        if (a > 0.9) {
          const $ = 5 * (0.6 + 0.4 * Math.sin(Math.PI * 0.9)) * (1 - (a - 0.9) * 8);
          for (let M = 0; M < 12; M++) {
            const P = 2 * Math.PI * M / 12;
            l.push([
              Math.max($, 1) * Math.cos(P),
              Math.max($, 1) * Math.sin(P),
              h
            ]);
          }
        } else for (let $ = 0; $ < 12; $++) {
          const M = 2 * Math.PI * $ / 12;
          l.push([
            y * Math.cos(M),
            y * Math.sin(M),
            h
          ]);
        }
      }
      for (let x = 0; x < 15; x++) {
        const a = x * 12, h = (x + 1) * 12;
        for (let $ = 0; $ < 12; $++) s.push([
          a + $,
          a + ($ + 1) % 12
        ]);
        const y = x % 2 === 0 ? 1 : -1;
        for (let $ = 0; $ < 12; $++) {
          const M = ($ + y + 12) % 12;
          s.push([
            a + $,
            h + M
          ]), s.push([
            a + $,
            h + $
          ]);
        }
      }
      const c = 15 * 12;
      for (let x = 0; x < 12; x++) s.push([
        c + x,
        c + (x + 1) % 12
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
      const p = /* @__PURE__ */ new Map();
      for (let x = 1; x <= 15; x++) {
        const a = x * 12, h = 3 * x / 15;
        for (let y = 0; y < 12; y += 3) p.set(a + y, [
          h,
          0,
          -8,
          0,
          0,
          0
        ]);
      }
      e.nodes.val = l, e.elements.val = s, e.nodeInputs && (e.nodeInputs.val = {
        supports: i,
        loads: p
      });
      const u = 2e8, d = 77e6, r = 6e-3, b = 8e-6, E = 4e-6, S = {
        elasticities: new Map(s.map((x, a) => [
          a,
          u
        ])),
        shearModuli: new Map(s.map((x, a) => [
          a,
          d
        ])),
        areas: new Map(s.map((x, a) => [
          a,
          r
        ])),
        momentsOfInertiaZ: new Map(s.map((x, a) => [
          a,
          b
        ])),
        momentsOfInertiaY: new Map(s.map((x, a) => [
          a,
          b
        ])),
        torsionalConstants: new Map(s.map((x, a) => [
          a,
          E
        ]))
      };
      e.elementInputs && (e.elementInputs.val = S);
      try {
        const x = Et(l, s, {
          supports: i,
          loads: p
        }, S);
        x && e.deformOutputs && (e.deformOutputs.val = x);
      } catch (x) {
        console.warn("Diagrid:", x.message);
      }
      setTimeout(() => ut(), 50), je(), console.log(`Diagrid Tower: ${l.length} nodos, ${s.length} elem, 15 pisos, H=${15 * 3.5}m`);
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
        const o = (h) => {
          var _a2;
          return parseFloat(((_a2 = t.querySelector(`#${h}`)) == null ? void 0 : _a2.value) || "0");
        }, n = o("po-colB"), l = o("po-colH"), s = o("po-fc") * 1e3, c = o("po-fy") * 1e3, i = o("po-H"), p = o("po-L"), u = o("po-As") * 1e-4, d = o("po-nbar"), r = o("po-drift") / 100, b = o("po-ncycles"), E = t.querySelector("#pushover-status");
        E.textContent = "Generando historia de desplazamientos...";
        const S = [], x = r * i, a = 40;
        for (let h = 1; h <= b; h++) {
          const y = x * h / b;
          for (let $ = 0; $ <= a; $++) S.push(y * Math.sin(2 * Math.PI * $ / a));
        }
        E.textContent = `Resolviendo pushover (${S.length} pasos)...`;
        try {
          const { cyclicPushover: h } = await Js(async () => {
            const { cyclicPushover: $ } = await import("./cyclicPushoverCpp-DZAQImEK.js").then(async (m) => {
              await m.__tla;
              return m;
            });
            return {
              cyclicPushover: $
            };
          }, __vite__mapDeps([0,1]), import.meta.url), y = await h({
            colHeight: i,
            beamLength: p,
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
            dispHistory: S
          });
          E.textContent = `Completado: ${y.nSteps} pasos`, Hs(t.querySelector("#pushover-canvas"), y.displacements, y.forces, `Pushover: ${n * 100}x${l * 100}cm, f'c=${s / 1e3}MPa, Fy=${c / 1e3}MPa`);
        } catch (h) {
          E.textContent = `Error: ${h.message}`, console.error("Pushover failed:", h);
        }
      });
    }
    function Hs(t, o, n, l) {
      const s = t.getContext("2d");
      if (!s || o.length === 0) return;
      const c = t.width, i = t.height, p = {
        left: 55,
        right: 15,
        top: 30,
        bottom: 35
      }, u = c - p.left - p.right, d = i - p.top - p.bottom;
      s.fillStyle = "#111118", s.fillRect(0, 0, c, i);
      let r = Math.min(...o), b = Math.max(...o), E = Math.min(...n), S = Math.max(...n);
      r === b && (r -= 0.01, b += 0.01), E === S && (E -= 1, S += 1);
      const x = b - r, a = S - E, h = (P) => p.left + (P - r) / x * u, y = (P) => p.top + d - (P - E) / a * d;
      s.strokeStyle = "#333", s.lineWidth = 0.5, r < 0 && b > 0 && (s.strokeStyle = "#555", s.beginPath(), s.moveTo(h(0), p.top), s.lineTo(h(0), p.top + d), s.stroke()), E < 0 && S > 0 && (s.beginPath(), s.moveTo(p.left, y(0)), s.lineTo(p.left + u, y(0)), s.stroke()), s.strokeStyle = "#ff4444", s.lineWidth = 1.5, s.beginPath(), s.moveTo(h(o[0]), y(n[0]));
      for (let P = 1; P < o.length; P++) s.lineTo(h(o[P]), y(n[P]));
      s.stroke(), s.fillStyle = "#aaa", s.font = "11px monospace", s.textAlign = "center", s.fillText("Desplazamiento (m)", p.left + u / 2, i - 5), s.save(), s.translate(12, p.top + d / 2), s.rotate(-Math.PI / 2), s.fillText("Fuerza (kN)", 0, 0), s.restore(), s.fillStyle = "#ee9b00", s.font = "bold 11px monospace", s.textAlign = "center", s.fillText(l, c / 2, 15), s.fillStyle = "#888", s.font = "9px monospace", s.textAlign = "center";
      const $ = x / 5;
      for (let P = 0; P <= 5; P++) {
        const q = r + $ * P;
        s.fillText((q * 1e3).toFixed(1), h(q), i - p.bottom + 15);
      }
      s.textAlign = "right";
      const M = a / 5;
      for (let P = 0; P <= 5; P++) {
        const q = E + M * P;
        s.fillText(q.toFixed(0), p.left - 5, y(q) + 3);
      }
    }
    let So = null;
    function Bs() {
      if (So) {
        So.remove(), So = null;
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
    `, document.body.appendChild(t), So = t, t.querySelector("#nl-close").addEventListener("click", () => {
        t.remove(), So = null;
      }), t.querySelector("#nl-test").addEventListener("click", () => Ds(t));
    }
    function Ds(t) {
      const o = parseFloat(t.querySelector("#nl-fy").value), n = parseFloat(t.querySelector("#nl-e0").value), l = parseFloat(t.querySelector("#nl-b").value), s = parseFloat(t.querySelector("#nl-r0").value), c = parseFloat(t.querySelector("#nl-amp").value), i = parseInt(t.querySelector("#nl-cycles").value), p = 100, u = [];
      for (let se = 0; se < i; se++) {
        const re = c * (1 + se * 0.5);
        for (let te = 0; te < p; te++) {
          const Q = te / p * 2 * Math.PI;
          u.push(re * Math.sin(Q));
        }
      }
      const d = o / n, r = l * n;
      let b = 0, E = 0, S = -d, x = d, a = 0, h = 0, y = 0, $ = 0, M = 0, P = 0;
      const q = [];
      for (const se of u) {
        let re = S, te = x, Q = a, ae = h, $e = y, Pe = $, Ae = M, le = P, he;
        const we = se - b;
        if (Math.abs(we) < 1e-20) {
          q.push(E);
          continue;
        }
        if ((le === 0 || le === 3) && (we < 0 ? (le = 2, ae = -d, $e = -o, Q = ae, Pe = 0, Ae = 0) : (le = 1, ae = d, $e = o, Q = ae, Pe = 0, Ae = 0)), le === 2 && we > 0) {
          le = 1, Pe = b, Ae = E, b < re && (re = b);
          const Se = (te - re) / (2 * 1 * d), Oe = 1 + 0 * Math.pow(Se, 0.8);
          ae = (o * Oe - r * d * Oe - Ae + n * Pe) / (n - r), $e = o * Oe + r * (ae - d * Oe), Q = te;
        } else if (le === 1 && we < 0) {
          le = 2, Pe = b, Ae = E, b > te && (te = b);
          const Se = (te - re) / (2 * 1 * d), Oe = 1 + 0 * Math.pow(Se, 0.8);
          ae = (-o * Oe + r * d * Oe - Ae + n * Pe) / (n - r), $e = -o * Oe + r * (ae + d * Oe), Q = re;
        }
        const de = Math.abs((Q - ae) / d);
        let ze = s - 0.925 * de / (0.15 + de);
        ze < 0.1 && (ze = 0.1);
        const Ce = (se - Pe) / (ae - Pe), Je = 1 + Math.pow(Math.abs(Ce), ze), ne = Math.pow(Je, 1 / ze);
        he = l * Ce + (1 - l) * Ce / ne, he = he * ($e - Ae) + Ae, q.push(he), b = se, E = he, S = re, x = te, a = Q, h = ae, y = $e, $ = Pe, M = Ae, P = le;
      }
      const m = t.querySelector("#nl-canvas"), f = m.getContext("2d"), v = m.width, I = m.height;
      f.clearRect(0, 0, v, I);
      const T = Math.max(...u.map(Math.abs)), R = Math.max(...q.map(Math.abs)), F = (v - 40) / (2 * T), L = (I - 40) / (2 * R), C = v / 2, _ = I / 2;
      f.strokeStyle = "#444", f.lineWidth = 1, f.beginPath(), f.moveTo(20, _), f.lineTo(v - 20, _), f.stroke(), f.beginPath(), f.moveTo(C, 20), f.lineTo(C, I - 20), f.stroke(), f.fillStyle = "#888", f.font = "10px monospace", f.textAlign = "center", f.fillText("\u03B5 (strain)", v - 40, _ - 5), f.fillText("\u03C3 (stress)", C + 30, 15), f.fillText(`\xB1${(T * 100).toFixed(1)}%`, v - 30, _ + 12), f.fillText(`\xB1${(R / 1e3).toFixed(0)} MPa`, C + 40, 30), f.strokeStyle = "#00ccff", f.lineWidth = 1.5, f.beginPath();
      for (let se = 0; se < u.length; se++) {
        const re = C + u[se] * F, te = _ - q[se] * L;
        se === 0 ? f.moveTo(re, te) : f.lineTo(re, te);
      }
      f.stroke(), f.strokeStyle = "#ff333366", f.lineWidth = 1, f.setLineDash([
        4,
        4
      ]), f.beginPath(), f.moveTo(20, _ - o * L), f.lineTo(v - 20, _ - o * L), f.stroke(), f.beginPath(), f.moveTo(20, _ + o * L), f.lineTo(v - 20, _ + o * L), f.stroke(), f.setLineDash([]), f.fillStyle = "#ff6666", f.font = "9px monospace", f.fillText(`Fy = ${(o / 1e3).toFixed(0)} MPa`, v - 50, _ - o * L - 5);
      const oe = t.querySelector("#nl-info");
      oe.textContent = `Steel02: Fy=${(o / 1e3).toFixed(0)} MPa, E\u2080=${(n / 1e6).toFixed(0)} GPa, b=${l}, R\u2080=${s} \u2014 ${i} ciclos, amp=${(c * 100).toFixed(1)}%`;
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
      const n = Po(), l = _o(), s = Object.entries(n).map(([d, r]) => `<option value="${r}">${d}</option>`).join(""), c = Object.entries(l).map(([d, r]) => `<option value="${r}">${d}</option>`).join("");
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
      const i = o.querySelector("#asgn-type"), p = o.querySelector("#asgn-params");
      function u() {
        const d = i.value;
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
        </div>`), p.innerHTML = r;
      }
      i.addEventListener("change", u), u(), o.querySelector("#asgn-close").addEventListener("click", () => {
        o.remove(), bo = null;
      }), o.querySelector("#asgn-apply").addEventListener("click", () => {
        var _a, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l;
        const d = i.value, r = {
          secType: d
        };
        d === "rect" ? (r.b = parseFloat(o.querySelector("#ap-b").value), r.h = parseFloat(o.querySelector("#ap-h").value), r.material = 0) : d === "circ" ? (r.b = parseFloat(o.querySelector("#ap-d").value), r.material = 0) : d === "W" || d === "HSS" ? (r.profileIdx = parseInt(o.querySelector("#ap-profile").value), r.material = 1) : d === "I-param" ? (r.bf = parseFloat(o.querySelector("#ap-bf").value), r.hf = parseFloat(o.querySelector("#ap-hf").value), r.tf = parseFloat(o.querySelector("#ap-tf").value), r.tw = parseFloat(o.querySelector("#ap-tw").value), r.material = 1) : d === "tubular" && (r.bc = parseFloat(o.querySelector("#ap-bc").value), r.hc = parseFloat(o.querySelector("#ap-hc").value), r.t = parseFloat(o.querySelector("#ap-t").value), r.material = 1), r.releaseRotStart = (_a = o.querySelector("#asgn-rel-rot-start")) == null ? void 0 : _a.checked, r.releaseRotEnd = (_b = o.querySelector("#asgn-rel-rot-end")) == null ? void 0 : _b.checked, r.releaseAxial = (_c = o.querySelector("#asgn-rel-axial")) == null ? void 0 : _c.checked, r.releaseTorsion = (_d = o.querySelector("#asgn-rel-torsion")) == null ? void 0 : _d.checked, r.modI = parseFloat((_e2 = o.querySelector("#asgn-mod-i")) == null ? void 0 : _e2.value) || 1, r.modA = parseFloat((_f = o.querySelector("#asgn-mod-a")) == null ? void 0 : _f.value) || 1, r.modJ = parseFloat((_g = o.querySelector("#asgn-mod-j")) == null ? void 0 : _g.value) || 1, r.modAs2 = parseFloat((_h = o.querySelector("#asgn-mod-as2")) == null ? void 0 : _h.value) ?? 1, r.modAs3 = parseFloat((_i = o.querySelector("#asgn-mod-as3")) == null ? void 0 : _i.value) ?? 1, r.modI3 = parseFloat((_j = o.querySelector("#asgn-mod-i3")) == null ? void 0 : _j.value) || 1, r.modMass = parseFloat((_k = o.querySelector("#asgn-mod-mass")) == null ? void 0 : _k.value) || 1, r.modWeight = parseFloat((_l = o.querySelector("#asgn-mod-weight")) == null ? void 0 : _l.value) || 1, t.forEach((b) => ge.set(b, {
          ...r
        })), o.remove(), bo = null, Jt(), e.elementInputs.val = {
          ...e.elementInputs.val
        };
      }), o.querySelector("#asgn-remove").addEventListener("click", () => {
        t.forEach((d) => ge.delete(d)), o.remove(), bo = null, Jt(), e.elementInputs.val = {
          ...e.elementInputs.val
        };
      });
    }
    let ho = null;
    function Ys(t) {
      var _a, _b, _c;
      ho && ho.remove();
      const o = e.nodes.val, n = e.elements.val[t];
      if (!n || n.length !== 2) return;
      const l = o[n[0]], s = o[n[1]], c = Math.abs(s[0] - l[0]), i = Math.abs(s[1] - l[1]), p = Math.abs(s[2] - l[2]), u = i > c && i > p, d = Math.sqrt(c * c + i * i + p * p), r = Te.get(t) ?? 0, b = (_c = (_b = (_a = e.elementInputs) == null ? void 0 : _a.val) == null ? void 0 : _b.sectionShapes) == null ? void 0 : _c.get(t), E = (b == null ? void 0 : b.name) || (b ? `${b.type} ${((b.b ?? 0) * 100).toFixed(0)}x${((b.h ?? 0) * 100).toFixed(0)}` : "\u2014"), S = document.createElement("div");
      S.style.cssText = "position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background:#1a1a2e;color:#eee;border:2px solid #ff9900;border-radius:8px;padding:16px;z-index:10000;min-width:280px;font-family:monospace;font-size:13px;box-shadow:0 4px 20px rgba(0,0,0,0.5);", S.innerHTML = `
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
        <b style="color:#ff9900;">Elemento ${t}</b>
        <button id="ep-close" style="background:none;border:none;color:#888;cursor:pointer;font-size:18px;">\u2715</button>
      </div>
      <div style="margin-bottom:8px;">
        <span style="color:#888;">Tipo:</span> ${u ? "Columna" : "Viga"} &nbsp;
        <span style="color:#888;">Piso:</span> ${r + 1} &nbsp;
        <span style="color:#888;">L:</span> ${d.toFixed(3)} m
      </div>
      <div style="margin-bottom:8px;">
        <span style="color:#888;">Secci\xF3n:</span> <span style="color:#00ccff;">${E}</span>
      </div>
      <div style="margin-bottom:8px;">
        <span style="color:#888;">Nodos:</span> ${n[0]} \u2192 ${n[1]}
      </div>
      <hr style="border-color:#333;margin:12px 0;">
      <div style="display:flex;gap:8px;">
        <button id="ep-delete" style="flex:1;padding:8px;background:#cc3333;color:#fff;border:none;border-radius:4px;cursor:pointer;font-weight:bold;">\u{1F5D1} Eliminar</button>
        <button id="ep-inspect" style="flex:1;padding:8px;background:#336699;color:#fff;border:none;border-radius:4px;cursor:pointer;font-weight:bold;">\u{1F50D} Inspect</button>
      </div>
    `, document.body.appendChild(S), ho = S, S.querySelector("#ep-close").addEventListener("click", () => {
        S.remove(), ho = null, no();
      }), S.querySelector("#ep-delete").addEventListener("click", () => {
        V.add(t), S.remove(), ho = null, no(), be();
      }), S.querySelector("#ep-inspect").addEventListener("click", () => {
        S.remove(), ho = null, ts(t);
      });
    }
    setTimeout(() => {
      const t = document.getElementById("viewer");
      if (!t) return;
      const o = t.querySelector("canvas");
      if (!o) return;
      let n = null, l = null;
      const s = 5;
      function c(u) {
        const d = Ge();
        if (!d) return null;
        const r = d.controls.object, b = new ke(u[0], u[1], u[2]);
        b.project(r);
        const E = o.getBoundingClientRect();
        return {
          x: (b.x + 1) / 2 * E.width,
          y: (-b.y + 1) / 2 * E.height
        };
      }
      function i(u, d, r, b, E) {
        const S = Math.min(u, r), x = Math.max(u, r), a = Math.min(d, b), h = Math.max(d, b), y = e.nodes.val, $ = e.elements.val, M = [];
        for (let P = 0; P < $.length; P++) {
          const q = $[P], m = q.map((f) => c(y[f])).filter(Boolean);
          if (m.length !== 0) if (E) m.every((v) => v.x >= S && v.x <= x && v.y >= a && v.y <= h) && M.push(P);
          else {
            if (m.some((v) => v.x >= S && v.x <= x && v.y >= a && v.y <= h)) {
              M.push(P);
              continue;
            }
            if (q.length === 2) {
              const v = m[0], I = m[1];
              p(v.x, v.y, I.x, I.y, S, a, x, h) && M.push(P);
            }
          }
        }
        return M;
      }
      function p(u, d, r, b, E, S, x, a) {
        const h = ($, M) => $ >= E && $ <= x && M >= S && M <= a;
        if (h(u, d) || h(r, b)) return true;
        const y = ($, M, P, q, m, f, v, I) => {
          const T = (P - $) * (I - f) - (q - M) * (v - m);
          if (Math.abs(T) < 1e-10) return false;
          const R = ((m - $) * (I - f) - (f - M) * (v - m)) / T, F = ((m - $) * (q - M) - (f - M) * (P - $)) / T;
          return R >= 0 && R <= 1 && F >= 0 && F <= 1;
        };
        return y(u, d, r, b, E, S, x, S) || y(u, d, r, b, x, S, x, a) || y(u, d, r, b, E, a, x, a) || y(u, d, r, b, E, S, E, a);
      }
      o.addEventListener("mousedown", (u) => {
        xt && (n = {
          x: u.offsetX,
          y: u.offsetY
        });
      }), o.addEventListener("mousemove", (u) => {
        if (At) {
          const r = Ge();
          if (!r) return;
          const b = Kn(u.clientX, u.clientY, r.camera, r.rendererElm);
          if (tt.track && b.snapType === "node" && b.nodeIdx !== null && b.nodeIdx !== oo && zs(b.nodeIdx), tt.track && oo !== null && b.worldPos && b.snapType !== "node") {
            const E = Ls(b.worldPos, oo);
            E && (b.worldPos = E, b.snapType = "grid");
          }
          if (oo !== null && b.worldPos) {
            const E = e.nodes.val[oo];
            E && Xn(u.clientX, u.clientY, new ke(...E), b.worldPos);
          } else if (Ue !== null && b.worldPos) {
            const E = e.nodes.val[Ue];
            E && Xn(u.clientX, u.clientY, new ke(...E), b.worldPos);
          } else kt && (kt.remove(), kt = null);
          b.nodeIdx, Un(b), o.style.cursor = b.snapType !== "free" ? "pointer" : "crosshair";
          return;
        }
        if (!It && !xt) return;
        if (xt && n) {
          const r = u.offsetX - n.x, b = u.offsetY - n.y;
          if (Math.abs(r) > s || Math.abs(b) > s) {
            l || (l = document.createElement("div"), l.style.cssText = "position:absolute;pointer-events:none;z-index:9999;", o.parentElement.style.position = "relative", o.parentElement.appendChild(l));
            const E = r > 0, S = Math.min(n.x, u.offsetX), x = Math.min(n.y, u.offsetY), a = Math.abs(r), h = Math.abs(b);
            l.style.left = S + "px", l.style.top = x + "px", l.style.width = a + "px", l.style.height = h + "px", l.style.border = E ? "2px solid #3399ff" : "2px dashed #33ff33", l.style.background = E ? "rgba(51,153,255,0.1)" : "rgba(51,255,51,0.1)", o.style.cursor = "crosshair";
            return;
          }
        }
        const d = ln(u);
        if (d >= 0) Qn(d), o.style.cursor = "pointer";
        else {
          if (vt) {
            const r = Ge();
            r == null ? void 0 : r.scene.remove(vt), vt = null, r == null ? void 0 : r.render();
          }
          o.style.cursor = xt ? "crosshair" : "";
        }
      }), o.addEventListener("mouseup", (u) => {
        if (xt && n) {
          const d = u.offsetX - n.x, r = u.offsetY - n.y;
          if (Math.abs(d) > s || Math.abs(r) > s) {
            const b = d > 0, E = i(n.x, n.y, u.offsetX, u.offsetY, b);
            u.ctrlKey || u.metaKey || (Xe.clear(), Kt()), E.forEach((x) => {
              Xe.has(x) || (Xe.add(x), nn(x));
            }), Ut();
          }
          l && (l.remove(), l = null), n = null, o.style.cursor = "crosshair";
          return;
        }
        n = null;
      }), o.addEventListener("click", (u) => {
        if (At) {
          const d = Ge();
          if (!d) return;
          const r = Kn(u.clientX, u.clientY, d.camera, d.rendererElm);
          (r.worldPos || r.nodeIdx !== null) && (Fs(r), Un(r));
          return;
        }
        if (xt) {
          if (l) return;
          const d = ln(u), r = u.ctrlKey || u.metaKey;
          if (d >= 0) {
            if (r) if (Xe.has(d)) {
              Xe.delete(d);
              const b = Xt.findIndex((E) => E.__elemIdx === d);
              if (b >= 0) {
                const E = Ge();
                E == null ? void 0 : E.scene.remove(Xt[b]), Xt[b].geometry.dispose(), Xt[b].material.dispose(), Xt.splice(b, 1), E == null ? void 0 : E.render();
              }
            } else Xe.add(d), nn(d);
            else Xe.clear(), Kt(), Xe.add(d), nn(d);
            Ut();
          } else r || (Xe.clear(), Kt(), Ut());
          return;
        }
        if (It) {
          const d = ln(u);
          d >= 0 && (Qn(d), Ys(d));
        }
      });
    }, 500), vo.derive(() => {
      var _a;
      e.nodes.val, e.elements.val, (_a = e.nodeInputs) == null ? void 0 : _a.val, je();
    }), He.modal = (t) => {
      var _a, _b;
      if (t === void 0 && (t = !Ee), Ee = t, (_a = xe.querySelector("#cad3d-modal")) == null ? void 0 : _a.classList.toggle("active", Ee), Ee) {
        const n = Ge();
        ((_b = n == null ? void 0 : n.settings) == null ? void 0 : _b.loads) && (rt = n.settings.loads.rawVal, n.settings.loads.val = false), Xo(), xe.querySelector("#cad3d-mode-prev").style.display = "", xe.querySelector("#cad3d-mode-next").style.display = "", xe.querySelector("#cad3d-mode-label").style.display = "";
      } else Ko(), xe.querySelector("#cad3d-mode-prev").style.display = "none", xe.querySelector("#cad3d-mode-next").style.display = "none", xe.querySelector("#cad3d-mode-label").style.display = "none", k && k !== "placa-q4" && k !== "placa-3q" && be(), setTimeout(() => {
        var _a2;
        const n = Ge();
        ((_a2 = n == null ? void 0 : n.settings) == null ? void 0 : _a2.loads) && rt && (n.settings.loads.val = true);
      }, 600);
      console.log(`Modal analysis: ${Ee ? "ON" : "OFF"}`);
    }, He.setMode = (t) => {
      var _a;
      if (!(_e == null ? void 0 : _e.modeShapes)) {
        console.error("No modal results");
        return;
      }
      Re = Math.max(0, Math.min(t, _e.modeShapes.length - 1));
      const o = _e.modeShapes[Re], { extent: n } = Gt();
      let l = 0;
      for (let c = 0; c < ot.length; c++) {
        const i = o[c * 6] || 0, p = o[c * 6 + 1] || 0, u = o[c * 6 + 2] || 0;
        l = Math.max(l, Math.sqrt(i * i + p * p + u * u));
      }
      ft = l > 1e-12 ? n * 0.05 / l : 1, Mo();
      const s = xe.querySelector("#cad3d-mode-label");
      s && _e.frequencies && (s.textContent = `Modo ${Re + 1} \u2014 ${_e.frequencies[Re].toFixed(2)} Hz`), console.log(`Modo ${Re + 1}: f = ${(_a = _e.frequencies) == null ? void 0 : _a[Re].toFixed(4)} Hz`);
    }, window.cad = He, console.log("FEM Studio CLI ready. Type cad.help() for commands."), setTimeout(() => {
      document.body.appendChild(xe), document.body.appendChild(jt.div);
    }, 0), setTimeout(() => {
      e.nodes.val.length === 0 && (De("edificio"), be(), jn("edificio"));
    }, 100), document.body.appendChild(wa());
    const cs = document.createElement("span");
    return cs.style.display = "none", cs;
  };
});
export {
  __tla,
  gs as a,
  da as c,
  Oa as g
};
