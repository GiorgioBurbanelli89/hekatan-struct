const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/calcPanel-C-MVHoBB.js","assets/getMesh-B5zl1JtK.js","assets/__vite-browser-external-D7Ct-6yo.js","assets/pureFunctionsAny.generated-cNLQlHDB.js","assets/analyze-DoaxThCI.js","assets/didacticCpp-BebR7qv7.js","assets/deform-D0XVfUnx.js","assets/preload-helper-DrUBW0xl.js","assets/cyclicPushoverCpp-CAjnNGvf.js"])))=>i.map(i=>d[i]);
import { _ as na } from "./preload-helper-DrUBW0xl.js";
import { Z as nn, a0 as Za, M as sa, D as aa, B as Dt, w as yn, G as Qa, K as el, d as ba, v as jo, V as Ee, P as xo, r as la, m as ra, a1 as Bo, h as Ho, g as tl, f as ol, i as nl, F as Eo, L as Do, a as ko, s as sl, p as al, $ as ll, _ as un, q as Zn, c as fn, S as mn, C as rl, b as il, a2 as cl, a3 as dl } from "./theme-Buj43zQ_.js";
import { P as tn } from "./tweakpane-BXg6ZhiP.js";
import { a as ia } from "./exampleVersion-D1A_5i59.js";
import { g as $n, b as wn, a as so } from "./analyze-DoaxThCI.js";
import { d as pt, p as Qn, m as pl, s as ul, __tla as __tla_0 } from "./didacticCpp-BebR7qv7.js";
import { g as lo, __tla as __tla_1 } from "./getMesh-B5zl1JtK.js";
import { c as fl, e as ml, a as bl, p as gl, b as hl } from "./e2kExporter-BDst7rLI.js";
import { n as Lo, s as ro, m as Xt, t as ds } from "./pureFunctionsAny.generated-cNLQlHDB.js";
let ma, lr;
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
  const cs = [
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
  ], Wo = [
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
  function xl(e, b) {
    return e === "kN" && b === "m" ? "kPa" : e === "kN" && b === "mm" || e === "N" && b === "mm" ? "MPa" : e === "N" && b === "m" ? "Pa" : e === "kip" && b === "in" ? "ksi" : e === "kip" && b === "ft" ? "ksf" : `${e}/${b}\xB2`;
  }
  const Io = {
    E: 2e8,
    G: 77e6,
    A: 0.01,
    Iz: 833e-7,
    Iy: 833e-7,
    J: 141e-6,
    rho: 7.85
  };
  function zo(e, b) {
    const q = cs.find((me) => me.id === e), z = Wo.find((me) => me.id === b), J = q.toKN, W = z.toM, K = (me, ve, A) => A / (Math.pow(J, me) * Math.pow(W, ve));
    let X, ee;
    switch (e) {
      case "kN":
        X = 10, ee = [
          -100,
          100,
          1
        ];
        break;
      case "tonf":
        X = 1, ee = [
          -20,
          20,
          0.5
        ];
        break;
      case "kgf":
        X = 1e3, ee = [
          -1e4,
          1e4,
          100
        ];
        break;
      case "kip":
        X = 10, ee = [
          -200,
          200,
          5
        ];
        break;
      case "lb":
        X = 5e3, ee = [
          -5e4,
          5e4,
          500
        ];
        break;
      case "N":
        X = 1e4, ee = [
          -1e5,
          1e5,
          1e3
        ];
        break;
    }
    return {
      id: `${e}-${b}`,
      label: `${q.label}, ${z.label}`,
      force: q.label,
      length: z.label,
      stress: xl(e, b),
      moment: `${q.label}\xB7${z.label}`,
      E: K(1, -2, Io.E),
      G: K(1, -2, Io.G),
      A: K(0, 2, Io.A),
      Iz: K(0, 4, Io.Iz),
      Iy: K(0, 4, Io.Iy),
      J: K(0, 4, Io.J),
      rho: K(1, -4, Io.rho),
      spanRange: z.spanRange,
      heightRange: z.heightRange,
      defaultSpan: z.defaultSpan,
      defaultHeight: z.defaultHeight,
      defaultForce: X,
      forceRange: ee,
      galponSpan: z.galponSpan,
      galponLength: z.galponLength,
      galponHeight: z.galponHeight,
      galponRise: z.galponRise
    };
  }
  zo("kN", "m"), zo("kip", "in");
  function bn() {
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
  function vl(e) {
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
  function yl(e) {
    const b = e.force, [q, z, J] = e.forceRange;
    return {
      truss: [
        {
          key: "CM",
          val: -e.defaultForce,
          min: q,
          max: 0,
          step: J,
          label: `CM (${b})`
        },
        {
          key: "CV",
          val: 0,
          min: q,
          max: 0,
          step: J,
          label: `CV (${b})`
        }
      ],
      beams: [
        {
          key: "CM",
          val: 0,
          min: q,
          max: 0,
          step: J,
          label: `CM (${b})`
        },
        {
          key: "CV",
          val: 0,
          min: q,
          max: 0,
          step: J,
          label: `CV (${b})`
        },
        {
          key: "Ex",
          val: e.defaultForce,
          min: q,
          max: z,
          step: J,
          label: `Ex sismo (${b})`
        }
      ],
      "3d": [
        {
          key: "CM",
          val: 0,
          min: q,
          max: 0,
          step: J,
          label: `CM (${b})`
        },
        {
          key: "CV",
          val: 0,
          min: q,
          max: 0,
          step: J,
          label: `CV (${b})`
        },
        {
          key: "Ex",
          val: e.defaultForce * 3,
          min: q,
          max: z,
          step: J,
          label: `Ex sismo (${b})`
        }
      ],
      frame: [
        {
          key: "CM",
          val: -e.defaultForce,
          min: q,
          max: 0,
          step: J,
          label: `CM (${b})`
        },
        {
          key: "CV",
          val: 0,
          min: q,
          max: 0,
          step: J,
          label: `CV (${b})`
        },
        {
          key: "Ex",
          val: 0,
          min: q,
          max: z,
          step: J,
          label: `Ex sismo (${b})`
        }
      ],
      edificio: [
        {
          key: "CM",
          val: -e.defaultForce,
          min: q,
          max: 0,
          step: J,
          label: `CM (${b})`
        },
        {
          key: "CV",
          val: 0,
          min: q,
          max: 0,
          step: J,
          label: `CV (${b})`
        },
        {
          key: "Ex",
          val: 0,
          min: q,
          max: z,
          step: J,
          label: `Ex sismo (${b})`
        },
        {
          key: "Ey",
          val: 0,
          min: q,
          max: z,
          step: J,
          label: `Ey sismo (${b})`
        }
      ],
      galpon: [
        {
          key: "CM",
          val: -e.defaultForce,
          min: q,
          max: 0,
          step: J,
          label: `CM (${b})`
        },
        {
          key: "CV",
          val: 0,
          min: q,
          max: 0,
          step: J,
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
          min: q,
          max: 0,
          step: J,
          label: `CM (${b})`
        }
      ],
      "placa-q4": [
        {
          key: "CM",
          val: 0,
          min: q,
          max: 0,
          step: J,
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
      pergola: [
        {
          key: "Lx",
          val: 5.5,
          min: 2,
          max: 20,
          step: 0.5,
          label: `Lx ancho (${e.length})`
        },
        {
          key: "Ly",
          val: 8,
          min: 2,
          max: 30,
          step: 0.5,
          label: `Ly largo (${e.length})`
        },
        {
          key: "H1",
          val: 3,
          min: 1,
          max: 8,
          step: 0.25,
          label: `H1 izq (${e.length})`
        },
        {
          key: "H2",
          val: 4,
          min: 1,
          max: 8,
          step: 0.25,
          label: `H2 der (${e.length})`
        },
        {
          key: "nCol",
          val: 4,
          min: 2,
          max: 8,
          step: 1,
          label: "N columnas"
        },
        {
          key: "nCorr",
          val: 8,
          min: 3,
          max: 16,
          step: 1,
          label: "N correas"
        },
        {
          key: "E",
          val: e.E,
          min: 1e6,
          max: 1e12,
          step: 1e6,
          label: `E (${e.stress})`
        },
        {
          key: "t",
          val: 5e-4,
          min: 1e-4,
          max: 0.01,
          step: 1e-4,
          label: `t panel (${e.length})`
        },
        {
          key: "q",
          val: 1,
          min: 0.1,
          max: 20,
          step: 0.1,
          label: `q carga (${e.force}/${e.length}\xB2)`
        },
        {
          key: "colD",
          val: 0.16,
          min: 0.05,
          max: 0.5,
          step: 0.01,
          label: `Col d (${e.length})`
        },
        {
          key: "colBf",
          val: 0.16,
          min: 0.05,
          max: 0.5,
          step: 0.01,
          label: `Col bf (${e.length})`
        },
        {
          key: "colTf",
          val: 0.013,
          min: 3e-3,
          max: 0.05,
          step: 1e-3,
          label: `Col tf (${e.length})`
        },
        {
          key: "colTw",
          val: 8e-3,
          min: 3e-3,
          max: 0.05,
          step: 1e-3,
          label: `Col tw (${e.length})`
        },
        {
          key: "vigD",
          val: 0.2,
          min: 0.05,
          max: 0.5,
          step: 0.01,
          label: `Vig d (${e.length})`
        },
        {
          key: "vigBf",
          val: 0.1,
          min: 0.05,
          max: 0.5,
          step: 0.01,
          label: `Vig bf (${e.length})`
        },
        {
          key: "vigTf",
          val: 85e-4,
          min: 3e-3,
          max: 0.05,
          step: 1e-3,
          label: `Vig tf (${e.length})`
        },
        {
          key: "vigTw",
          val: 56e-4,
          min: 3e-3,
          max: 0.05,
          step: 1e-3,
          label: `Vig tw (${e.length})`
        },
        {
          key: "corrB",
          val: 0.06,
          min: 0.02,
          max: 0.2,
          step: 0.01,
          label: `Corr b (${e.length})`
        },
        {
          key: "corrT",
          val: 4e-3,
          min: 1e-3,
          max: 0.02,
          step: 1e-3,
          label: `Corr t (${e.length})`
        },
        {
          key: "supUx",
          val: 1,
          min: 0,
          max: 1,
          step: 1,
          label: "Apoyo Ux"
        },
        {
          key: "supUy",
          val: 1,
          min: 0,
          max: 1,
          step: 1,
          label: "Apoyo Uy"
        },
        {
          key: "supUz",
          val: 1,
          min: 0,
          max: 1,
          step: 1,
          label: "Apoyo Uz"
        },
        {
          key: "supRx",
          val: 1,
          min: 0,
          max: 1,
          step: 1,
          label: "Apoyo Rx"
        },
        {
          key: "supRy",
          val: 1,
          min: 0,
          max: 1,
          step: 1,
          label: "Apoyo Ry"
        },
        {
          key: "supRz",
          val: 1,
          min: 0,
          max: 1,
          step: 1,
          label: "Apoyo Rz"
        }
      ],
      eiffel: [],
      arco: [],
      puente: [],
      twisted: [],
      burj: [],
      opera: [],
      diagrid: []
    };
  }
  const we = 64516e-8, F = 416231e-12, Q = 0.0254, vo = [
    {
      name: "W6x9",
      type: "W",
      A: 2.68 * we,
      Iz: 16.4 * F,
      Iy: 2.2 * F,
      J: 0.0405 * F,
      d: 5.9 * Q,
      bf: 3.94 * Q
    },
    {
      name: "W6x15",
      type: "W",
      A: 4.43 * we,
      Iz: 29.1 * F,
      Iy: 9.32 * F,
      J: 0.103 * F,
      d: 5.99 * Q,
      bf: 5.99 * Q
    },
    {
      name: "W6x20",
      type: "W",
      A: 5.87 * we,
      Iz: 41.4 * F,
      Iy: 13.3 * F,
      J: 0.204 * F,
      d: 6.2 * Q,
      bf: 6.02 * Q
    },
    {
      name: "W8x10",
      type: "W",
      A: 2.96 * we,
      Iz: 30.8 * F,
      Iy: 2.09 * F,
      J: 0.0426 * F,
      d: 7.89 * Q,
      bf: 3.94 * Q
    },
    {
      name: "W8x18",
      type: "W",
      A: 5.26 * we,
      Iz: 61.9 * F,
      Iy: 7.97 * F,
      J: 0.172 * F,
      d: 8.14 * Q,
      bf: 5.25 * Q
    },
    {
      name: "W8x24",
      type: "W",
      A: 7.08 * we,
      Iz: 82.7 * F,
      Iy: 18.3 * F,
      J: 0.346 * F,
      d: 7.93 * Q,
      bf: 6.5 * Q
    },
    {
      name: "W8x31",
      type: "W",
      A: 9.13 * we,
      Iz: 110 * F,
      Iy: 37.1 * F,
      J: 0.536 * F,
      d: 8 * Q,
      bf: 7.995 * Q
    },
    {
      name: "W8x40",
      type: "W",
      A: 11.7 * we,
      Iz: 146 * F,
      Iy: 49.1 * F,
      J: 0.871 * F,
      d: 8.25 * Q,
      bf: 8.07 * Q
    },
    {
      name: "W8x48",
      type: "W",
      A: 14.1 * we,
      Iz: 184 * F,
      Iy: 60.9 * F,
      J: 1.45 * F,
      d: 8.5 * Q,
      bf: 8.11 * Q
    },
    {
      name: "W8x67",
      type: "W",
      A: 19.7 * we,
      Iz: 272 * F,
      Iy: 88.6 * F,
      J: 3.54 * F,
      d: 9 * Q,
      bf: 8.28 * Q
    },
    {
      name: "W10x12",
      type: "W",
      A: 3.54 * we,
      Iz: 53.8 * F,
      Iy: 2.18 * F,
      J: 0.0547 * F,
      d: 9.87 * Q,
      bf: 3.96 * Q
    },
    {
      name: "W10x22",
      type: "W",
      A: 6.49 * we,
      Iz: 118 * F,
      Iy: 11.4 * F,
      J: 0.239 * F,
      d: 10.17 * Q,
      bf: 5.75 * Q
    },
    {
      name: "W10x33",
      type: "W",
      A: 9.71 * we,
      Iz: 171 * F,
      Iy: 36.6 * F,
      J: 0.583 * F,
      d: 9.73 * Q,
      bf: 7.96 * Q
    },
    {
      name: "W10x49",
      type: "W",
      A: 14.4 * we,
      Iz: 272 * F,
      Iy: 93.4 * F,
      J: 1.39 * F,
      d: 9.98 * Q,
      bf: 10 * Q
    },
    {
      name: "W10x68",
      type: "W",
      A: 20 * we,
      Iz: 394 * F,
      Iy: 134 * F,
      J: 3.56 * F,
      d: 10.4 * Q,
      bf: 10.13 * Q
    },
    {
      name: "W10x100",
      type: "W",
      A: 29.4 * we,
      Iz: 623 * F,
      Iy: 207 * F,
      J: 10.9 * F,
      d: 11.1 * Q,
      bf: 10.34 * Q
    },
    {
      name: "W12x14",
      type: "W",
      A: 4.16 * we,
      Iz: 88.6 * F,
      Iy: 2.36 * F,
      J: 0.0704 * F,
      d: 11.91 * Q,
      bf: 3.97 * Q
    },
    {
      name: "W12x22",
      type: "W",
      A: 6.48 * we,
      Iz: 156 * F,
      Iy: 4.66 * F,
      J: 0.293 * F,
      d: 12.31 * Q,
      bf: 4.03 * Q
    },
    {
      name: "W12x26",
      type: "W",
      A: 7.65 * we,
      Iz: 204 * F,
      Iy: 17.3 * F,
      J: 0.3 * F,
      d: 12.22 * Q,
      bf: 6.49 * Q
    },
    {
      name: "W12x40",
      type: "W",
      A: 11.7 * we,
      Iz: 310 * F,
      Iy: 44.1 * F,
      J: 0.906 * F,
      d: 11.94 * Q,
      bf: 8.01 * Q
    },
    {
      name: "W12x53",
      type: "W",
      A: 15.6 * we,
      Iz: 425 * F,
      Iy: 95.8 * F,
      J: 1.58 * F,
      d: 12.06 * Q,
      bf: 9.99 * Q
    },
    {
      name: "W12x72",
      type: "W",
      A: 21.1 * we,
      Iz: 597 * F,
      Iy: 195 * F,
      J: 4.05 * F,
      d: 12.25 * Q,
      bf: 12.04 * Q
    },
    {
      name: "W12x96",
      type: "W",
      A: 28.2 * we,
      Iz: 833 * F,
      Iy: 270 * F,
      J: 8.44 * F,
      d: 12.71 * Q,
      bf: 12.16 * Q
    },
    {
      name: "W12x120",
      type: "W",
      A: 35.3 * we,
      Iz: 1070 * F,
      Iy: 345 * F,
      J: 16 * F,
      d: 13.12 * Q,
      bf: 12.32 * Q
    },
    {
      name: "W14x22",
      type: "W",
      A: 6.49 * we,
      Iz: 199 * F,
      Iy: 7 * F,
      J: 0.208 * F,
      d: 13.74 * Q,
      bf: 5 * Q
    },
    {
      name: "W14x30",
      type: "W",
      A: 8.85 * we,
      Iz: 291 * F,
      Iy: 19.6 * F,
      J: 0.38 * F,
      d: 13.84 * Q,
      bf: 6.73 * Q
    },
    {
      name: "W14x38",
      type: "W",
      A: 11.2 * we,
      Iz: 385 * F,
      Iy: 26.7 * F,
      J: 0.798 * F,
      d: 14.1 * Q,
      bf: 6.77 * Q
    },
    {
      name: "W14x48",
      type: "W",
      A: 14.1 * we,
      Iz: 485 * F,
      Iy: 51.4 * F,
      J: 1.45 * F,
      d: 13.79 * Q,
      bf: 8.03 * Q
    },
    {
      name: "W14x61",
      type: "W",
      A: 17.9 * we,
      Iz: 640 * F,
      Iy: 107 * F,
      J: 2.19 * F,
      d: 13.89 * Q,
      bf: 9.99 * Q
    },
    {
      name: "W14x82",
      type: "W",
      A: 24 * we,
      Iz: 882 * F,
      Iy: 148 * F,
      J: 5.07 * F,
      d: 14.31 * Q,
      bf: 10.13 * Q
    },
    {
      name: "W14x109",
      type: "W",
      A: 32 * we,
      Iz: 1240 * F,
      Iy: 447 * F,
      J: 7.12 * F,
      d: 14.32 * Q,
      bf: 14.61 * Q
    },
    {
      name: "W14x132",
      type: "W",
      A: 38.8 * we,
      Iz: 1530 * F,
      Iy: 548 * F,
      J: 12.3 * F,
      d: 14.66 * Q,
      bf: 14.73 * Q
    },
    {
      name: "W14x176",
      type: "W",
      A: 51.8 * we,
      Iz: 2140 * F,
      Iy: 838 * F,
      J: 23.7 * F,
      d: 15.22 * Q,
      bf: 15.65 * Q
    },
    {
      name: "W16x26",
      type: "W",
      A: 7.68 * we,
      Iz: 301 * F,
      Iy: 9.59 * F,
      J: 0.262 * F,
      d: 15.69 * Q,
      bf: 5.5 * Q
    },
    {
      name: "W16x36",
      type: "W",
      A: 10.6 * we,
      Iz: 448 * F,
      Iy: 24.5 * F,
      J: 0.545 * F,
      d: 15.86 * Q,
      bf: 6.99 * Q
    },
    {
      name: "W16x50",
      type: "W",
      A: 14.7 * we,
      Iz: 659 * F,
      Iy: 37.2 * F,
      J: 1.52 * F,
      d: 16.26 * Q,
      bf: 7.07 * Q
    },
    {
      name: "W16x67",
      type: "W",
      A: 19.7 * we,
      Iz: 954 * F,
      Iy: 119 * F,
      J: 2.39 * F,
      d: 16.33 * Q,
      bf: 10.24 * Q
    },
    {
      name: "W16x89",
      type: "W",
      A: 26.2 * we,
      Iz: 1300 * F,
      Iy: 163 * F,
      J: 5.45 * F,
      d: 16.75 * Q,
      bf: 10.37 * Q
    },
    {
      name: "W18x35",
      type: "W",
      A: 10.3 * we,
      Iz: 510 * F,
      Iy: 15.3 * F,
      J: 0.506 * F,
      d: 17.7 * Q,
      bf: 6 * Q
    },
    {
      name: "W18x50",
      type: "W",
      A: 14.7 * we,
      Iz: 800 * F,
      Iy: 40.1 * F,
      J: 1.24 * F,
      d: 17.99 * Q,
      bf: 7.5 * Q
    },
    {
      name: "W18x71",
      type: "W",
      A: 20.8 * we,
      Iz: 1170 * F,
      Iy: 60.3 * F,
      J: 3.49 * F,
      d: 18.47 * Q,
      bf: 7.64 * Q
    },
    {
      name: "W18x97",
      type: "W",
      A: 28.5 * we,
      Iz: 1750 * F,
      Iy: 201 * F,
      J: 5.86 * F,
      d: 18.59 * Q,
      bf: 11.15 * Q
    },
    {
      name: "W21x44",
      type: "W",
      A: 13 * we,
      Iz: 843 * F,
      Iy: 20.7 * F,
      J: 0.77 * F,
      d: 20.66 * Q,
      bf: 6.5 * Q
    },
    {
      name: "W21x62",
      type: "W",
      A: 18.3 * we,
      Iz: 1330 * F,
      Iy: 57.5 * F,
      J: 1.83 * F,
      d: 20.99 * Q,
      bf: 8.24 * Q
    },
    {
      name: "W21x83",
      type: "W",
      A: 24.3 * we,
      Iz: 1830 * F,
      Iy: 81.4 * F,
      J: 4.34 * F,
      d: 21.43 * Q,
      bf: 8.36 * Q
    },
    {
      name: "W21x111",
      type: "W",
      A: 32.7 * we,
      Iz: 2670 * F,
      Iy: 274 * F,
      J: 6.83 * F,
      d: 21.51 * Q,
      bf: 12.34 * Q
    },
    {
      name: "W24x55",
      type: "W",
      A: 16.2 * we,
      Iz: 1350 * F,
      Iy: 29.1 * F,
      J: 1.18 * F,
      d: 23.57 * Q,
      bf: 7.01 * Q
    },
    {
      name: "W24x76",
      type: "W",
      A: 22.4 * we,
      Iz: 2100 * F,
      Iy: 82.5 * F,
      J: 2.68 * F,
      d: 23.92 * Q,
      bf: 8.99 * Q
    },
    {
      name: "W24x104",
      type: "W",
      A: 30.6 * we,
      Iz: 3100 * F,
      Iy: 259 * F,
      J: 4.72 * F,
      d: 24.06 * Q,
      bf: 12.75 * Q
    },
    {
      name: "W24x131",
      type: "W",
      A: 38.5 * we,
      Iz: 4020 * F,
      Iy: 340 * F,
      J: 9.5 * F,
      d: 24.48 * Q,
      bf: 12.86 * Q
    },
    {
      name: "W24x146",
      type: "W",
      A: 43 * we,
      Iz: 4580 * F,
      Iy: 391 * F,
      J: 12.6 * F,
      d: 24.74 * Q,
      bf: 12.9 * Q
    },
    {
      name: "W24x176",
      type: "W",
      A: 51.7 * we,
      Iz: 5680 * F,
      Iy: 479 * F,
      J: 21.2 * F,
      d: 25.24 * Q,
      bf: 12.9 * Q
    },
    {
      name: "W27x84",
      type: "W",
      A: 24.8 * we,
      Iz: 2850 * F,
      Iy: 106 * F,
      J: 2.81 * F,
      d: 26.71 * Q,
      bf: 9.96 * Q
    },
    {
      name: "W27x114",
      type: "W",
      A: 33.5 * we,
      Iz: 4090 * F,
      Iy: 159 * F,
      J: 6.77 * F,
      d: 27.29 * Q,
      bf: 10.07 * Q
    },
    {
      name: "W30x90",
      type: "W",
      A: 26.4 * we,
      Iz: 3610 * F,
      Iy: 115 * F,
      J: 3.06 * F,
      d: 29.53 * Q,
      bf: 10.4 * Q
    },
    {
      name: "W30x116",
      type: "W",
      A: 34.2 * we,
      Iz: 4930 * F,
      Iy: 164 * F,
      J: 6.43 * F,
      d: 30.01 * Q,
      bf: 10.5 * Q
    },
    {
      name: "W33x118",
      type: "W",
      A: 34.7 * we,
      Iz: 5900 * F,
      Iy: 187 * F,
      J: 5.3 * F,
      d: 32.86 * Q,
      bf: 11.48 * Q
    },
    {
      name: "W36x135",
      type: "W",
      A: 39.7 * we,
      Iz: 7800 * F,
      Iy: 225 * F,
      J: 7 * F,
      d: 35.55 * Q,
      bf: 11.95 * Q
    },
    {
      name: "HSS4x4x1/4",
      type: "HSS",
      A: 3.37 * we,
      Iz: 8.22 * F,
      Iy: 8.22 * F,
      J: 13.4 * F,
      d: 4 * Q,
      bf: 4 * Q
    },
    {
      name: "HSS4x4x3/8",
      type: "HSS",
      A: 4.78 * we,
      Iz: 10.7 * F,
      Iy: 10.7 * F,
      J: 17.9 * F,
      d: 4 * Q,
      bf: 4 * Q
    },
    {
      name: "HSS4x4x1/2",
      type: "HSS",
      A: 6.02 * we,
      Iz: 12.3 * F,
      Iy: 12.3 * F,
      J: 21 * F,
      d: 4 * Q,
      bf: 4 * Q
    },
    {
      name: "HSS6x6x1/4",
      type: "HSS",
      A: 5.24 * we,
      Iz: 30.3 * F,
      Iy: 30.3 * F,
      J: 48.3 * F,
      d: 6 * Q,
      bf: 6 * Q
    },
    {
      name: "HSS6x6x3/8",
      type: "HSS",
      A: 7.58 * we,
      Iz: 41.1 * F,
      Iy: 41.1 * F,
      J: 66.9 * F,
      d: 6 * Q,
      bf: 6 * Q
    },
    {
      name: "HSS6x6x1/2",
      type: "HSS",
      A: 9.74 * we,
      Iz: 49.6 * F,
      Iy: 49.6 * F,
      J: 82.2 * F,
      d: 6 * Q,
      bf: 6 * Q
    },
    {
      name: "HSS8x8x1/4",
      type: "HSS",
      A: 7.1 * we,
      Iz: 70.7 * F,
      Iy: 70.7 * F,
      J: 112 * F,
      d: 8 * Q,
      bf: 8 * Q
    },
    {
      name: "HSS8x8x3/8",
      type: "HSS",
      A: 10.4 * we,
      Iz: 98 * F,
      Iy: 98 * F,
      J: 158 * F,
      d: 8 * Q,
      bf: 8 * Q
    },
    {
      name: "HSS8x8x1/2",
      type: "HSS",
      A: 13.5 * we,
      Iz: 122 * F,
      Iy: 122 * F,
      J: 199 * F,
      d: 8 * Q,
      bf: 8 * Q
    },
    {
      name: "HSS10x10x3/8",
      type: "HSS",
      A: 13.2 * we,
      Iz: 202 * F,
      Iy: 202 * F,
      J: 323 * F,
      d: 10 * Q,
      bf: 10 * Q
    },
    {
      name: "HSS10x10x1/2",
      type: "HSS",
      A: 17.2 * we,
      Iz: 254 * F,
      Iy: 254 * F,
      J: 412 * F,
      d: 10 * Q,
      bf: 10 * Q
    },
    {
      name: "HSS12x12x3/8",
      type: "HSS",
      A: 16 * we,
      Iz: 355 * F,
      Iy: 355 * F,
      J: 564 * F,
      d: 12 * Q,
      bf: 12 * Q
    },
    {
      name: "HSS12x12x1/2",
      type: "HSS",
      A: 21 * we,
      Iz: 452 * F,
      Iy: 452 * F,
      J: 724 * F,
      d: 12 * Q,
      bf: 12 * Q
    },
    {
      name: "HSS6x4x1/4",
      type: "HSS",
      A: 4.3 * we,
      Iz: 18 * F,
      Iy: 9.58 * F,
      J: 22.6 * F,
      d: 6 * Q,
      bf: 4 * Q
    },
    {
      name: "HSS6x4x3/8",
      type: "HSS",
      A: 6.18 * we,
      Iz: 23.8 * F,
      Iy: 12.3 * F,
      J: 30.3 * F,
      d: 6 * Q,
      bf: 4 * Q
    },
    {
      name: "HSS8x4x1/4",
      type: "HSS",
      A: 5.24 * we,
      Iz: 33.6 * F,
      Iy: 11.8 * F,
      J: 33 * F,
      d: 8 * Q,
      bf: 4 * Q
    },
    {
      name: "HSS8x4x3/8",
      type: "HSS",
      A: 7.58 * we,
      Iz: 45.1 * F,
      Iy: 15 * F,
      J: 44.5 * F,
      d: 8 * Q,
      bf: 4 * Q
    },
    {
      name: "HSS8x6x1/4",
      type: "HSS",
      A: 6.17 * we,
      Iz: 46.1 * F,
      Iy: 28.2 * F,
      J: 61.3 * F,
      d: 8 * Q,
      bf: 6 * Q
    },
    {
      name: "HSS8x6x3/8",
      type: "HSS",
      A: 8.97 * we,
      Iz: 63 * F,
      Iy: 37.5 * F,
      J: 84.6 * F,
      d: 8 * Q,
      bf: 6 * Q
    },
    {
      name: "HSS10x6x3/8",
      type: "HSS",
      A: 10.4 * we,
      Iz: 103 * F,
      Iy: 47.1 * F,
      J: 115 * F,
      d: 10 * Q,
      bf: 6 * Q
    },
    {
      name: "HSS12x8x3/8",
      type: "HSS",
      A: 13.2 * we,
      Iz: 196 * F,
      Iy: 102 * F,
      J: 249 * F,
      d: 12 * Q,
      bf: 8 * Q
    }
  ];
  function gn() {
    const e = {};
    return vo.forEach((b, q) => {
      b.type === "W" && (e[b.name] = q);
    }), e;
  }
  function hn() {
    const e = {};
    return vo.forEach((b, q) => {
      b.type === "HSS" && (e[b.name] = q);
    }), e;
  }
  function $l(e) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    const { nodes: b, elements: q, elementInputs: z, nodeInputs: J, deformOutputs: W } = e, K = b.length * 6, X = q.length, ee = q.filter((ce) => ce.length === 2).length, me = q.filter((ce) => ce.length >= 3).length, ve = document.createElement("div");
    ve.className = "rpt-overlay";
    let A = "";
    A += '<button class="rpt-close" id="rpt-close">\u2715 Close</button>', A += "<h1>Finite Element Analysis \u2014 Step-by-Step Report</h1>", A += '<div class="rpt-subtitle">Complete FEM derivation from element formulation to final results</div>', A += '<hr class="rpt-sep"/>', A += "<h2>1. Input Data</h2>", A += '<table class="rpt-info"><tbody>', A += `<tr><td>Number of nodes</td><td class="val">${b.length}</td></tr>`, A += `<tr><td>Number of elements</td><td class="val">${X} (${ee} frames, ${me} shells)</td></tr>`, A += '<tr><td>DOFs per node</td><td class="val">6 (u<sub>x</sub>, u<sub>y</sub>, u<sub>z</sub>, \u03B8<sub>x</sub>, \u03B8<sub>y</sub>, \u03B8<sub>z</sub>)</td></tr>', A += `<tr><td>Total DOFs</td><td class="val">${K}</td></tr>`, A += "</tbody></table>", A += "<h3>1.1 Node Coordinates</h3>", A += '<table class="rpt-data"><thead><tr><th>Node</th><th>x</th><th>y</th><th>z</th></tr></thead><tbody>', b.forEach((ce, re) => {
      A += `<tr><td>${re}</td><td>${We(ce[0])}</td><td>${We(ce[1])}</td><td>${We(ce[2])}</td></tr>`;
    }), A += "</tbody></table>", A += "<h3>1.2 Element Connectivity</h3>", A += '<table class="rpt-data"><thead><tr><th>Elem</th><th>Type</th><th>Nodes</th><th>L</th><th>E</th><th>A</th><th>I<sub>z</sub></th><th>I<sub>y</sub></th></tr></thead><tbody>', q.forEach((ce, re) => {
      var _a2, _b2, _c2, _d2;
      const ie = ce.length === 2, he = ce.map((qe) => b[qe]), xe = ie ? Lo(ro(he[1], he[0])) : 0, Ce = ((_a2 = z.elasticities) == null ? void 0 : _a2.get(re)) ?? 0, Te = ((_b2 = z.areas) == null ? void 0 : _b2.get(re)) ?? 0, Pe = ((_c2 = z.momentsOfInertiaZ) == null ? void 0 : _c2.get(re)) ?? 0, Je = ((_d2 = z.momentsOfInertiaY) == null ? void 0 : _d2.get(re)) ?? 0;
      A += `<tr><td>${re}</td><td>${ie ? "Frame" : "Shell"}</td><td>${ce.join(" \u2192 ")}</td>`, A += `<td>${We(xe)}</td><td>${We(Ce)}</td><td>${We(Te)}</td><td>${We(Pe)}</td><td>${We(Je)}</td></tr>`;
    }), A += "</tbody></table>", A += "<h2>2. Element Formulation</h2>", ee > 0 && (A += "<h3>2.1 Frame Element (Euler-Bernoulli Beam)</h3>", A += "<p>Each frame element has 2 nodes and 12 DOFs: [u<sub>x</sub>, u<sub>y</sub>, u<sub>z</sub>, \u03B8<sub>x</sub>, \u03B8<sub>y</sub>, \u03B8<sub>z</sub>] per node.</p>", A += "<h4>2.1.1 Shape Functions</h4>", A += "<p><b>Axial</b> (linear interpolation):</p>", A += '<div class="rpt-eq">N\u2081(\u03BE) = 1 \u2212 \u03BE &nbsp;&nbsp;&nbsp; N\u2082(\u03BE) = \u03BE &nbsp;&nbsp;&nbsp; where \u03BE = x/L \u2208 [0, 1]</div>', A += "<p><b>Bending</b> (Hermite cubic polynomials):</p>", A += '<table class="rpt-eq-table"><tbody>', A += '<tr><td class="eq-name">H\u2081(\u03BE)</td><td>= 1 \u2212 3\u03BE\xB2 + 2\u03BE\xB3</td><td class="eq-desc">displacement at node i</td></tr>', A += '<tr><td class="eq-name">H\u2082(\u03BE)</td><td>= L\u03BE(1 \u2212 \u03BE)\xB2</td><td class="eq-desc">rotation at node i</td></tr>', A += '<tr><td class="eq-name">H\u2083(\u03BE)</td><td>= 3\u03BE\xB2 \u2212 2\u03BE\xB3</td><td class="eq-desc">displacement at node j</td></tr>', A += '<tr><td class="eq-name">H\u2084(\u03BE)</td><td>= L\u03BE\xB2(\u03BE \u2212 1)</td><td class="eq-desc">rotation at node j</td></tr>', A += "</tbody></table>", A += Ml(), A += "<p><b>Torsion</b> (linear): same as axial.</p>", A += "<h4>2.1.2 Strain-Displacement Matrix B</h4>", A += "<p>The B matrix relates nodal displacements to internal strains:</p>", A += '<div class="rpt-eq">\u03B5<sub>axial</sub> = du/dx = (1/L)\xB7[\u22121, 1]\xB7{u<sub>i</sub>, u<sub>j</sub>}</div>', A += '<div class="rpt-eq">\u03BA<sub>bending</sub> = d\xB2v/dx\xB2 = B<sub>b</sub>\xB7{v<sub>i</sub>, \u03B8<sub>i</sub>, v<sub>j</sub>, \u03B8<sub>j</sub>}</div>', A += '<div class="rpt-eq">B<sub>b</sub>(\u03BE) = (1/L\xB2)\xB7[\u22126+12\u03BE, L(\u22124+6\u03BE), 6\u221212\u03BE, L(\u22122+6\u03BE)]</div>', A += '<div class="rpt-eq">\u03C6\u2032<sub>torsion</sub> = d\u03B8<sub>x</sub>/dx = (1/L)\xB7[\u22121, 1]\xB7{\u03B8<sub>xi</sub>, \u03B8<sub>xj</sub>}</div>', A += "<h4>2.1.3 Constitutive Relations D</h4>", A += '<table class="rpt-eq-table"><tbody>', A += '<tr><td class="eq-name">Axial:</td><td>\u03C3 = E\xB7\u03B5</td><td>\u2192 D<sub>axial</sub> = E\xB7A</td></tr>', A += '<tr><td class="eq-name">Bending Z:</td><td>M<sub>z</sub> = EI<sub>z</sub>\xB7\u03BA</td><td>\u2192 D<sub>bz</sub> = E\xB7I<sub>z</sub></td></tr>', A += '<tr><td class="eq-name">Bending Y:</td><td>M<sub>y</sub> = EI<sub>y</sub>\xB7\u03BA</td><td>\u2192 D<sub>by</sub> = E\xB7I<sub>y</sub></td></tr>', A += '<tr><td class="eq-name">Torsion:</td><td>T = GJ\xB7\u03C6\u2032</td><td>\u2192 D<sub>torsion</sub> = G\xB7J</td></tr>', A += "</tbody></table>", A += "<h4>2.1.4 Local Stiffness Matrix K<sub>local</sub></h4>", A += "<p>Obtained by analytical integration:</p>", A += '<div class="rpt-eq rpt-eq-highlight">K<sub>local</sub> = \u222B\u2080\u1D38 B\u1D40\xB7D\xB7B dx</div>', A += "<p>Result for Euler-Bernoulli beam (12\xD712 symmetric):</p>", A += '<div class="rpt-eq-small">', A += "K[0,0] = EA/L &nbsp;&nbsp; K[1,1] = 12EI<sub>z</sub>/L\xB3 &nbsp;&nbsp; K[2,2] = 12EI<sub>y</sub>/L\xB3 &nbsp;&nbsp; K[3,3] = GJ/L<br/>", A += "K[4,4] = 4EI<sub>y</sub>/L &nbsp;&nbsp; K[5,5] = 4EI<sub>z</sub>/L &nbsp;&nbsp; K[1,5] = 6EI<sub>z</sub>/L\xB2 &nbsp;&nbsp; K[2,4] = \u22126EI<sub>y</sub>/L\xB2", A += "</div>", A += "<h4>2.1.5 Transformation Matrix T</h4>", A += "<p>Direction cosines of element axis:</p>", A += '<div class="rpt-eq">l = (x<sub>j</sub>\u2212x<sub>i</sub>)/L &nbsp;&nbsp; m = (y<sub>j</sub>\u2212y<sub>i</sub>)/L &nbsp;&nbsp; n = (z<sub>j</sub>\u2212z<sub>i</sub>)/L &nbsp;&nbsp; D = \u221A(l\xB2+m\xB2)</div>', A += '<div class="rpt-eq">\u03BB = [l, m, n; \u2212m/D, l/D, 0; \u2212ln/D, \u2212mn/D, D] &nbsp;&nbsp; (3\xD73)</div>', A += '<div class="rpt-eq rpt-eq-highlight">T = I\u2084 \u2297 \u03BB &nbsp;&nbsp; (12\xD712 block-diagonal, Kronecker product)</div>', A += "<p>Special case for vertical elements (n = \xB11): \u03BB uses fixed axes.</p>", A += "<h4>2.1.6 Global Stiffness Matrix</h4>", A += '<div class="rpt-eq rpt-eq-highlight">K<sub>global</sub> = T\u1D40 \xB7 K<sub>local</sub> \xB7 T</div>'), A += "<h2>3. Numerical Results per Element</h2>", A += "<p>For each element, we compute K<sub>local</sub>, T, and K<sub>global</sub> = T\u1D40\xB7K\xB7T with the actual properties:</p>";
    for (let ce = 0; ce < X; ce++) {
      const re = q[ce], ie = re.map((Nt) => b[Nt]);
      if (!(re.length === 2)) continue;
      const xe = Lo(ro(ie[1], ie[0])), Ce = ((_a = z.elasticities) == null ? void 0 : _a.get(ce)) ?? 0, Te = ((_b = z.areas) == null ? void 0 : _b.get(ce)) ?? 0, Pe = ((_c = z.momentsOfInertiaZ) == null ? void 0 : _c.get(ce)) ?? 0, Je = ((_d = z.momentsOfInertiaY) == null ? void 0 : _d.get(ce)) ?? 0, qe = ((_e = z.shearModuli) == null ? void 0 : _e.get(ce)) ?? 0, Ye = ((_f = z.torsionalConstants) == null ? void 0 : _f.get(ce)) ?? 0;
      let nt = null, Ke = null, Ze = null;
      try {
        nt = $n(ie, z, ce), Ke = wn(ie), Ze = Xt(ds(Ke), Xt(nt, Ke));
      } catch {
        continue;
      }
      const Ve = ro(ie[1], ie[0]), xt = Ve[0] / xe, io = Ve[1] / xe, qt = Ve[2] / xe;
      A += '<div class="rpt-elem-block">', A += `<h3 class="rpt-elem-title" data-toggle="elem${ce}">\u25B6 Element ${ce} \u2014 Nodes ${re[0]} \u2192 ${re[1]}, L = ${We(xe)}</h3>`, A += `<div id="rpt-elem${ce}" class="rpt-elem-body" style="display:none">`, A += "<h4>Properties (numerical substitution)</h4>", A += '<div class="rpt-eq-small">', A += `E = ${We(Ce)} &nbsp;&nbsp; A = ${We(Te)} &nbsp;&nbsp; I<sub>z</sub> = ${We(Pe)} &nbsp;&nbsp; I<sub>y</sub> = ${We(Je)} &nbsp;&nbsp; G = ${We(qe)} &nbsp;&nbsp; J = ${We(Ye)}<br/>`, A += `EA/L = ${We(Ce)}\xB7${We(Te)}/${We(xe)} = <b>${We(Ce * Te / xe)}</b><br/>`, A += `12EI<sub>z</sub>/L\xB3 = 12\xB7${We(Ce)}\xB7${We(Pe)}/${We(xe)}\xB3 = <b>${We(12 * Ce * Pe / xe ** 3)}</b><br/>`, A += `12EI<sub>y</sub>/L\xB3 = 12\xB7${We(Ce)}\xB7${We(Je)}/${We(xe)}\xB3 = <b>${We(12 * Ce * Je / xe ** 3)}</b><br/>`, A += `GJ/L = ${We(qe)}\xB7${We(Ye)}/${We(xe)} = <b>${We(qe * Ye / xe)}</b>`, A += "</div>", A += "<h4>Direction cosines</h4>", A += `<div class="rpt-eq-small">l = ${xn(xt)}, m = ${xn(io)}, n = ${xn(qt)}, D = ${xn(Math.sqrt(xt ** 2 + io ** 2))}</div>`, A += "<h4>K<sub>local</sub> (12\xD712)</h4>", A += es(nt, 12), A += "<h4>T \u2014 Transformation (12\xD712)</h4>", A += es(Ke, 12), A += "<h4>K<sub>global</sub> = T\u1D40 \xB7 K<sub>local</sub> \xB7 T</h4>", A += es(Ze, 12), A += "<h4>Assembly</h4>", A += `<div class="rpt-eq-small">Global DOFs: node ${re[0]} \u2192 [${re[0] * 6}..${re[0] * 6 + 5}], node ${re[1]} \u2192 [${re[1] * 6}..${re[1] * 6 + 5}]</div>`, A += "</div></div>";
    }
    A += "<h2>4. Global Assembly</h2>", A += `<div class="rpt-eq rpt-eq-highlight">K<sub>total</sub> = \u03A3<sub>e=0</sub><sup>${X - 1}</sup> (T<sub>e</sub>\u1D40 \xB7 k<sub>e</sub> \xB7 T<sub>e</sub>)</div>`, A += "<p>Each element contributes its K<sub>global</sub> to the positions determined by its node DOF indices.</p>", A += Sl(q, b.length), A += "<h2>5. Boundary Conditions</h2>";
    const U = [
      "u<sub>x</sub>",
      "u<sub>y</sub>",
      "u<sub>z</sub>",
      "\u03B8<sub>x</sub>",
      "\u03B8<sub>y</sub>",
      "\u03B8<sub>z</sub>"
    ], Se = [];
    if (A += "<h3>5.1 Supports (fixed DOFs)</h3>", J.supports && J.supports.size > 0) {
      A += '<table class="rpt-data"><thead><tr><th>Node</th>';
      for (const ce of U) A += `<th>${ce}</th>`;
      A += "</tr></thead><tbody>", J.supports.forEach((ce, re) => {
        A += `<tr><td>${re}</td>`, ce.forEach((ie, he) => {
          ie && Se.push(re * 6 + he), A += `<td class="${ie ? "fixed" : ""}">${ie ? "Fixed" : "Free"}</td>`;
        }), A += "</tr>";
      }), A += "</tbody></table>";
    }
    if (A += `<div class="rpt-eq-small">Fixed DOFs: [${Se.join(", ")}] \u2192 ${Se.length} constraints<br/>`, A += `Free DOFs: ${K} \u2212 ${Se.length} = <b>${K - Se.length}</b></div>`, A += "<h3>5.2 Applied Loads</h3>", J.loads && J.loads.size > 0) {
      A += '<table class="rpt-data"><thead><tr><th>Node</th>';
      const ce = [
        "F<sub>x</sub>",
        "F<sub>y</sub>",
        "F<sub>z</sub>",
        "M<sub>x</sub>",
        "M<sub>y</sub>",
        "M<sub>z</sub>"
      ];
      for (const re of ce) A += `<th>${re}</th>`;
      A += "</tr></thead><tbody>", J.loads.forEach((re, ie) => {
        A += `<tr><td>${ie}</td>`, re.forEach((he) => {
          const xe = Math.abs(he) > 1e-10;
          A += `<td class="${xe ? "nz" : ""}">${xe ? We(he) : "0"}</td>`;
        }), A += "</tr>";
      }), A += "</tbody></table>";
    }
    if (A += "<h2>6. Solution</h2>", A += "<p>After removing fixed DOFs, the reduced system is:</p>", A += '<div class="rpt-eq rpt-eq-highlight">K<sub>free</sub> \xB7 u<sub>free</sub> = F<sub>free</sub></div>', A += "<p>Solved using LU decomposition with partial pivoting (sparse matrix).</p>", A += "<h3>6.1 Nodal Displacements</h3>", W == null ? void 0 : W.deformations) {
      A += '<table class="rpt-data"><thead><tr><th>Node</th>';
      for (const ce of U) A += `<th>${ce}</th>`;
      A += "</tr></thead><tbody>", W.deformations.forEach((ce, re) => {
        A += `<tr><td>${re}</td>`, ce.forEach((ie) => {
          const he = Math.abs(ie) > 1e-10;
          A += `<td class="${he ? "nz" : ""}">${We(ie, 6)}</td>`;
        }), A += "</tr>";
      }), A += "</tbody></table>";
    }
    if (A += "<h3>6.2 Reactions</h3>", A += '<div class="rpt-eq">R = K<sub>total</sub> \xB7 u (extract at fixed DOFs)</div>', W == null ? void 0 : W.reactions) {
      A += '<table class="rpt-data"><thead><tr><th>Node</th>';
      for (const ce of U) A += `<th>${ce}</th>`;
      A += "</tr></thead><tbody>", W.reactions.forEach((ce, re) => {
        A += `<tr><td>${re}</td>`, ce.forEach((ie) => {
          const he = Math.abs(ie) > 1e-10;
          A += `<td class="${he ? "nz-react" : ""}">${he ? We(ie, 4) : "0"}</td>`;
        }), A += "</tr>";
      }), A += "</tbody></table>";
    }
    if (A += "<h2>7. Internal Forces</h2>", A += "<p>For each element, transform global displacements to local and multiply by K<sub>local</sub>:</p>", A += '<div class="rpt-eq">u<sub>local</sub> = T \xB7 u<sub>global</sub></div>', A += '<div class="rpt-eq rpt-eq-highlight">f<sub>local</sub> = K<sub>local</sub> \xB7 u<sub>local</sub></div>', W == null ? void 0 : W.deformations) {
      const ce = [
        "N",
        "V<sub>y</sub>",
        "V<sub>z</sub>",
        "M<sub>x</sub>",
        "M<sub>y</sub>",
        "M<sub>z</sub>"
      ];
      A += '<table class="rpt-data"><thead><tr><th>Elem</th><th>Nodes</th>';
      for (const re of ce) A += `<th>${re}<sub>i</sub></th>`;
      for (const re of ce) A += `<th>${re}<sub>j</sub></th>`;
      A += "</tr></thead><tbody>";
      for (let re = 0; re < X; re++) {
        const ie = q[re];
        if (ie.length !== 2) continue;
        const he = ie.map((xe) => b[xe]);
        try {
          const xe = $n(he, z, re), Ce = wn(he), Te = [];
          for (const qe of ie) {
            const Ye = ((_g = W.deformations) == null ? void 0 : _g.get(qe)) || [
              0,
              0,
              0,
              0,
              0,
              0
            ];
            Te.push(...Ye);
          }
          const Pe = Xt(Ce, Te), Je = Xt(xe, Pe);
          A += `<tr><td>${re}</td><td>${ie.join("\u2192")}</td>`;
          for (let qe = 0; qe < 12; qe++) {
            const Ye = Math.abs(Je[qe]) > 1e-10;
            A += `<td class="${Ye ? "nz" : ""}">${We(Je[qe], 2)}</td>`;
          }
          A += "</tr>";
        } catch {
        }
      }
      A += "</tbody></table>";
    }
    const be = `
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
    return ve.innerHTML = be + A, (_h = ve.querySelector("#rpt-close")) == null ? void 0 : _h.addEventListener("click", () => ve.remove()), ve.querySelectorAll("[data-toggle]").forEach((ce) => {
      ce.addEventListener("click", () => {
        const re = ce.dataset.toggle, ie = ve.querySelector(`#rpt-${re}`);
        if (ie) {
          const he = ie.style.display !== "none";
          ie.style.display = he ? "none" : "", ce.textContent = ce.textContent.replace(/^[▼▶]/, he ? "\u25B6" : "\u25BC");
        }
      });
    }), ve;
  }
  function We(e, b = 2) {
    return Math.abs(e) < 1e-10 ? "0" : Math.abs(e) >= 1e7 || Math.abs(e) < 0.01 && e !== 0 ? e.toExponential(b) : e.toFixed(b);
  }
  function xn(e) {
    return Math.abs(e) < 1e-10 ? "0" : e.toFixed(4);
  }
  function es(e, b) {
    var _a;
    const q = Math.min(b, 12);
    let z = '<div style="overflow-x:auto"><table class="rpt-mtx">';
    for (let J = 0; J < q; J++) {
      z += "<tr>";
      for (let W = 0; W < q; W++) {
        const K = ((_a = e[J]) == null ? void 0 : _a[W]) ?? 0, X = Math.abs(K) < 1e-10;
        z += `<td class="${X ? "z" : ""} ${J === W && !X ? "diag" : ""}">${X ? "0" : wl(K)}</td>`;
      }
      z += "</tr>";
    }
    return z += "</table>", b > q && (z += `<div style="color:#888;font-size:9pt">(showing ${q}\xD7${q} of ${b}\xD7${b})</div>`), z += "</div>", z;
  }
  function wl(e) {
    return Math.abs(e) >= 1e6 || Math.abs(e) < 0.01 && e !== 0 ? e.toExponential(1) : Math.abs(e) >= 100 ? e.toFixed(0) : e.toFixed(2);
  }
  function Ml() {
    const K = [
      {
        name: "H\u2081",
        color: "#c44",
        fn: (ee) => 1 - 3 * ee ** 2 + 2 * ee ** 3
      },
      {
        name: "H\u2082/L",
        color: "#2a9d8f",
        fn: (ee) => ee * (1 - ee) ** 2
      },
      {
        name: "H\u2083",
        color: "#264653",
        fn: (ee) => 3 * ee ** 2 - 2 * ee ** 3
      },
      {
        name: "H\u2084/L",
        color: "#e9c46a",
        fn: (ee) => ee ** 2 * (ee - 1)
      }
    ];
    let X = '<svg viewBox="0 0 600 180" style="width:100%;max-width:600px;border:1px solid #ddd;border-radius:4px;margin:8px 0;background:#fafafa">';
    X += `<line x1="30" y1="${180 / 2}" x2="570" y2="${180 / 2}" stroke="#ccc" stroke-width="1"/>`, X += '<line x1="30" y1="20" x2="30" y2="160" stroke="#ccc" stroke-width="1"/>', X += `<text x="${600 / 2}" y="175" fill="#888" font-size="10" text-anchor="middle" font-family="sans-serif">\u03BE (0 \u2192 1)</text>`, X += `<text x="25" y="${180 / 2 - 60 - 5}" fill="#888" font-size="9" text-anchor="end" font-family="sans-serif">1</text>`, X += `<text x="25" y="${180 / 2 + 4}" fill="#888" font-size="9" text-anchor="end" font-family="sans-serif">0</text>`;
    for (const ee of K) {
      let me = "";
      for (let Se = 0; Se <= 80; Se++) {
        const be = Se / 80, ce = 30 + be * 540, re = 180 / 2 - ee.fn(be) * 60;
        me += (Se === 0 ? "M" : "L") + `${ce.toFixed(1)},${re.toFixed(1)}`;
      }
      X += `<path d="${me}" fill="none" stroke="${ee.color}" stroke-width="2.5"/>`;
      const ve = 0.75, A = 30 + ve * 540 + 8, U = 180 / 2 - ee.fn(ve) * 60 - 6;
      X += `<text x="${A}" y="${U}" fill="${ee.color}" font-size="11" font-weight="bold" font-family="sans-serif">${ee.name}</text>`;
    }
    return X += "</svg>", X;
  }
  function Sl(e, b) {
    const q = b * 6, z = Math.min(q, 30);
    let J = "<p>Assembly contribution map (number = how many elements contribute to each K<sub>total</sub> entry):</p>";
    J += '<div style="overflow-x:auto"><table class="rpt-assembly-map">', J += "<tr><td></td>";
    for (let K = 0; K < z; K++) J += `<td style="color:#003366;font-weight:bold;font-size:7px">${K}</td>`;
    J += "</tr>";
    const W = Array.from({
      length: z
    }, () => Array(z).fill(0));
    for (let K = 0; K < e.length; K++) {
      const X = e[K].map((ee) => ee * 6);
      for (const ee of X) for (const me of X) for (let ve = 0; ve < 6; ve++) for (let A = 0; A < 6; A++) {
        const U = ee + ve, Se = me + A;
        U < z && Se < z && W[U][Se]++;
      }
    }
    for (let K = 0; K < z; K++) {
      J += `<tr><td style="color:#003366;font-weight:bold;font-size:7px">${K}</td>`;
      for (let X = 0; X < z; X++) {
        const ee = W[K][X], me = ee === 0 ? "#fff" : ee === 1 ? "#e8f0fe" : ee === 2 ? "#c6dcf5" : "#a0c4e8", ve = ee === 0 ? "" : ee.toString();
        J += `<td style="background:${me};color:#003366">${ve}</td>`;
      }
      J += "</tr>";
    }
    return J += "</table></div>", q > z && (J += `<div style="color:#888;font-size:9pt">(showing ${z}\xD7${z} of ${q}\xD7${q})</div>`), J;
  }
  let ts = false;
  function El(e) {
    if (ts || window.katex) {
      ts = true, e();
      return;
    }
    const b = document.createElement("link");
    b.rel = "stylesheet", b.href = "https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css", document.head.appendChild(b);
    const q = document.createElement("script");
    q.src = "https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.js", q.onload = () => {
      ts = true, e();
    }, document.head.appendChild(q);
  }
  function ca(e, b = false) {
    try {
      if (window.katex) return window.katex.renderToString(e, {
        displayMode: b,
        throwOnError: false
      });
    } catch {
    }
    return `<code class="er-tex-fallback">${e}</code>`;
  }
  function kl(e, b, q, z, J, W) {
    var _a, _b, _c, _d, _e, _f;
    const K = q[e], X = K.map((Ke) => b[Ke]), ee = K.length === 2, me = ee ? Lo(ro(X[1], X[0])) : 0, ve = ((_a = z.elasticities) == null ? void 0 : _a.get(e)) ?? 0, A = ((_b = z.areas) == null ? void 0 : _b.get(e)) ?? 0, U = ((_c = z.momentsOfInertiaZ) == null ? void 0 : _c.get(e)) ?? 0, Se = ((_d = z.momentsOfInertiaY) == null ? void 0 : _d.get(e)) ?? 0, be = ((_e = z.shearModuli) == null ? void 0 : _e.get(e)) ?? 0, ce = ((_f = z.torsionalConstants) == null ? void 0 : _f.get(e)) ?? 0;
    let re = null, ie = null, he = null;
    try {
      re = $n(X, z, e), ie = wn(X), he = Xt(ds(ie), Xt(re, ie));
    } catch {
    }
    const xe = ee ? ro(X[1], X[0]) : [
      0,
      0,
      0
    ], Ce = me > 0 ? xe[0] / me : 0, Te = me > 0 ? xe[1] / me : 0, Pe = me > 0 ? xe[2] / me : 0, Je = Math.sqrt(Ce ** 2 + Te ** 2), qe = [];
    if ((J == null ? void 0 : J.deformations) && ee) for (const Ke of K) {
      const Ze = J.deformations.get(Ke) || [
        0,
        0,
        0,
        0,
        0,
        0
      ];
      qe.push(...Ze);
    }
    let Ye = [], nt = [];
    if (qe.length === 12 && ie && re) {
      try {
        Ye = Xt(ie, qe);
      } catch {
        Ye = Array(12).fill(0);
      }
      try {
        nt = Xt(re, Ye);
      } catch {
        nt = Array(12).fill(0);
      }
    }
    return {
      elemIdx: e,
      elem: K,
      elmNodes: X,
      isFrame: ee,
      L: me,
      E: ve,
      A,
      Iz: U,
      Iy: Se,
      G: be,
      J: ce,
      kLocal: re,
      T: ie,
      kGlobal: he,
      l: Ce,
      m: Te,
      n: Pe,
      D: Je,
      uGlobal: qe,
      uLocal: Ye,
      fLocal: nt,
      dOut: J,
      aOut: W,
      totalNodes: b.length
    };
  }
  function Il(e, b, q, z, J, W) {
    var _a, _b;
    const K = kl(e, b, q, z, J, W), X = document.createElement("div");
    return X.className = "er-panel", X.innerHTML = Tl + `
    <div class="er-header">
      <span class="er-badge">Element ${e}</span>
      <span class="er-type">${K.isFrame ? "Frame" : "Shell"} \u2014 Nodes ${K.elem.join(" \u2192 ")} \u2014 L = ${Ae(K.L)}</span>
      <button class="er-fullscreen" id="er-fullscreen" title="Pantalla completa">\u26F6</button>
      <button class="er-close" id="er-close">\u2715</button>
    </div>
    <div class="er-tabs">
      <button class="er-tab active" data-tab="tabla">Tabla</button>
      <button class="er-tab" data-tab="math">Matematica Explicada</button>
      <button class="er-tab" data-tab="resumen">Resumen</button>
    </div>
    <div class="er-body" id="er-body-tabla">${zl(K)}</div>
    <div class="er-body" id="er-body-math" style="display:none">${da(K)}</div>
    <div class="er-body" id="er-body-resumen" style="display:none">${Ll(K)}</div>
  `, X.querySelectorAll(".er-tab").forEach((ee) => {
      ee.addEventListener("click", () => {
        X.querySelectorAll(".er-tab").forEach((ve) => ve.classList.remove("active")), ee.classList.add("active");
        const me = ee.dataset.tab;
        X.querySelectorAll(".er-body").forEach((ve) => ve.style.display = "none"), X.querySelector(`#er-body-${me}`).style.display = "";
      });
    }), (_a = X.querySelector("#er-close")) == null ? void 0 : _a.addEventListener("click", () => X.remove()), (_b = X.querySelector("#er-fullscreen")) == null ? void 0 : _b.addEventListener("click", () => {
      const ee = X.classList.toggle("er-fullscreen-mode"), me = X.querySelector("#er-fullscreen");
      me && (me.textContent = ee ? "\u22A1" : "\u26F6");
    }), setTimeout(() => {
      const ee = X.querySelector("#er-sf-canvas");
      ee && os(ee);
      const me = X.querySelector("#er-sf-canvas-math");
      me && os(me);
    }, 50), El(() => {
      const ee = X.querySelector("#er-body-math");
      ee && (ee.innerHTML = da(K)), setTimeout(() => {
        const me = X.querySelector("#er-sf-canvas-math");
        me && os(me);
      }, 50), X.querySelectorAll(".er-deriv-header").forEach((me) => {
        me.addEventListener("click", () => {
          const ve = me.dataset.toggle, A = X.querySelector(`#er-${ve}`);
          A && (A.style.display = A.style.display === "none" ? "" : "none");
        });
      });
    }), X;
  }
  function zl(e) {
    let b = "";
    if (b += '<div class="er-section-title">1. Propiedades</div>', b += '<table class="er-props">', b += `<tr><td>E</td><td>${Ae(e.E)}</td><td>A</td><td>${Ae(e.A)}</td></tr>`, b += `<tr><td>I<sub>z</sub></td><td>${Ae(e.Iz)}</td><td>I<sub>y</sub></td><td>${Ae(e.Iy)}</td></tr>`, b += `<tr><td>G</td><td>${Ae(e.G)}</td><td>J</td><td>${Ae(e.J)}</td></tr>`, b += "</table>", e.kLocal && (b += `<div class="er-section-title">2. K<sub>local</sub> (${e.kLocal.length}\xD7${e.kLocal.length})</div>`, b += sn(e.kLocal)), e.T && (b += '<div class="er-section-title">3. T \u2014 Transformaci\xF3n</div>', b += sn(e.T)), e.kGlobal && (b += '<div class="er-section-title">4. K<sub>global</sub> = T<sup>T</sup>\xB7K\xB7T</div>', b += sn(e.kGlobal)), b += '<div class="er-section-title">5. Desplazamientos</div>', e.uGlobal.length > 0) {
      const q = [
        "u<sub>x</sub>",
        "u<sub>y</sub>",
        "u<sub>z</sub>",
        "\u03B8<sub>x</sub>",
        "\u03B8<sub>y</sub>",
        "\u03B8<sub>z</sub>"
      ];
      for (let z = 0; z < e.elem.length; z++) {
        b += `<div class="er-sub">Nodo ${e.elem[z]}: `;
        for (let J = 0; J < 6; J++) {
          const W = e.uGlobal[z * 6 + J];
          b += `${q[J]}=<span class="${Math.abs(W) > 1e-10 ? "nz" : ""}">${Ae(W, 6)}</span> `;
        }
        b += "</div>";
      }
    } else b += '<div class="er-sub">Sin an\xE1lisis</div>';
    if (b += '<div class="er-section-title">6. Fuerzas internas</div>', e.fLocal.length > 0 && e.fLocal.some((q) => q !== 0)) {
      const q = [
        "N",
        "V<sub>y</sub>",
        "V<sub>z</sub>",
        "M<sub>x</sub>",
        "M<sub>y</sub>",
        "M<sub>z</sub>"
      ];
      b += '<table class="er-forces"><tr><th></th>';
      for (const z of q) b += `<th>${z}</th>`;
      b += "</tr>", b += "<tr><td>Nodo i</td>";
      for (let z = 0; z < 6; z++) b += `<td class="${Math.abs(e.fLocal[z]) > 1e-10 ? "nz" : ""}">${Ae(e.fLocal[z], 3)}</td>`;
      b += "</tr><tr><td>Nodo j</td>";
      for (let z = 6; z < 12; z++) b += `<td class="${Math.abs(e.fLocal[z]) > 1e-10 ? "nz" : ""}">${Ae(e.fLocal[z], 3)}</td>`;
      b += "</tr></table>";
    } else b += '<div class="er-sub">Sin an\xE1lisis</div>';
    return b;
  }
  function da(e) {
    if (!e.isFrame) return '<div class="er-sub">Shell element math: coming soon</div>';
    let b = "";
    const q = (ve) => ca(ve), z = (ve) => ca(ve, true);
    b += '<div class="er-section-title">1. Geometria del elemento</div>', b += "<p>Viga Euler-Bernoulli con 2 nodos y 6 GDL por nodo:</p>", b += `<div class="er-eq">${z("\\text{DOFs} = [u_x,\\, u_y,\\, u_z,\\, \\theta_x,\\, \\theta_y,\\, \\theta_z] \\quad \\Rightarrow \\quad 12 \\text{ GDL totales}")}</div>`, b += '<div class="er-eq-num">', b += `${q("\\text{Nodo } i")} = (${e.elmNodes[0].map((ve) => Ae(ve)).join(", ")})<br/>`, b += `${q("\\text{Nodo } j")} = (${e.elmNodes[1].map((ve) => Ae(ve)).join(", ")})<br/>`, b += `${z(`L = \\sqrt{(x_j - x_i)^2 + (y_j - y_i)^2 + (z_j - z_i)^2} = \\mathbf{${Ae(e.L)}}`)}`, b += "</div>", b += '<div class="er-section-title">2. Funciones de forma</div>', b += "<p>La viga usa <b>interpolacion lineal</b> para axial/torsion y <b>polinomios cubicos de Hermite</b> para flexion.</p>", b += '<div class="er-subsec">2.1 Axial y Torsion (lineal)</div>', b += `<div class="er-eq">${z("N_1(\\xi) = 1 - \\xi \\qquad N_2(\\xi) = \\xi \\qquad \\text{donde } \\xi = \\frac{x}{L} \\in [0,1]")}</div>`, b += "<p>Primera derivada:</p>", b += `<div class="er-eq">${z("\\frac{dN_1}{d\\xi} = -1 \\qquad \\frac{dN_2}{d\\xi} = 1")}</div>`, b += '<div class="er-subsec">2.2 Flexion (Hermite cubicos)</div>', b += `<p>Las funciones de Hermite garantizan continuidad ${q("C^1")} (desplazamiento y pendiente continuos):</p>`, b += `<div class="er-eq">${z("H_1(\\xi) = 1 - 3\\xi^2 + 2\\xi^3 \\qquad \\text{(desplazamiento nodo } i\\text{)}")}</div>`, b += `<div class="er-eq">${z("H_2(\\xi) = L\\,\\xi\\,(1-\\xi)^2 \\qquad \\text{(rotacion nodo } i\\text{)}")}</div>`, b += `<div class="er-eq">${z("H_3(\\xi) = 3\\xi^2 - 2\\xi^3 \\qquad \\text{(desplazamiento nodo } j\\text{)}")}</div>`, b += `<div class="er-eq">${z("H_4(\\xi) = L\\,\\xi^2(\\xi - 1) \\qquad \\text{(rotacion nodo } j\\text{)}")}</div>`, b += `<div class="er-subsec">Derivadas segunda (curvatura ${q("\\kappa = \\frac{d^2v}{dx^2}")}):</div>`, b += `<div class="er-eq">${z("H_1'' = \\frac{-6}{L^2}(1-2\\xi) \\qquad H_2'' = \\frac{-2}{L}(2-3\\xi)")}</div>`, b += `<div class="er-eq">${z("H_3'' = \\frac{6}{L^2}(1-2\\xi) \\qquad H_4'' = \\frac{-2}{L}(1-3\\xi)")}</div>`, b += '<canvas id="er-sf-canvas-math" width="500" height="250" style="width:100%;border:1px solid var(--fem-border);border-radius:4px;margin:8px 0;"></canvas>', b += '<div class="er-section-title">3. Matriz B (strain-displacement)</div>', b += "<p>La matriz B relaciona desplazamientos nodales con deformaciones internas:</p>", b += `<div class="er-eq">${z("\\boldsymbol{\\varepsilon} = \\mathbf{B} \\cdot \\mathbf{u}")}</div>`, b += '<div class="er-subsec">3.1 Deformacion axial</div>', b += `<div class="er-eq">${z("\\varepsilon_{axial} = \\frac{du}{dx} = \\frac{1}{L} \\begin{bmatrix} -1 & 1 \\end{bmatrix} \\begin{Bmatrix} u_i \\\\ u_j \\end{Bmatrix}")}</div>`, b += `<div class="er-subsec">3.2 Curvatura por flexion (plano XY \u2192 ${q("I_z")})</div>`, b += `<div class="er-eq">${z("\\kappa_z = \\frac{d^2 v}{dx^2} = \\mathbf{B}_{bz} \\cdot \\begin{Bmatrix} v_i \\\\ \\theta_{zi} \\\\ v_j \\\\ \\theta_{zj} \\end{Bmatrix}")}</div>`, b += `<div class="er-eq">${z("\\mathbf{B}_{bz}(\\xi) = \\frac{1}{L^2} \\begin{bmatrix} H_1'' & H_2'' & H_3'' & H_4'' \\end{bmatrix}")}</div>`, b += `<div class="er-subsec">3.3 Curvatura (plano XZ \u2192 ${q("I_y")})</div>`, b += `<div class="er-eq">${z("\\kappa_y = \\frac{d^2 w}{dx^2} = \\mathbf{B}_{by} \\cdot \\begin{Bmatrix} w_i \\\\ \\theta_{yi} \\\\ w_j \\\\ \\theta_{yj} \\end{Bmatrix}")}</div>`, b += '<div class="er-subsec">3.4 Torsion</div>', b += `<div class="er-eq">${z("\\phi' = \\frac{d\\theta_x}{dx} = \\frac{1}{L} \\begin{bmatrix} -1 & 1 \\end{bmatrix} \\begin{Bmatrix} \\theta_{xi} \\\\ \\theta_{xj} \\end{Bmatrix}")}</div>`, b += '<div class="er-section-title">4. Relaciones constitutivas D</div>', b += "<p>Cada modo de deformacion tiene su rigidez material:</p>", b += `<div class="er-eq">${z(`\\text{Axial: } \\sigma = E \\cdot \\varepsilon \\;\\Rightarrow\\; D_{ax} = EA = ${Ae(e.E)} \\times ${Ae(e.A)} = \\mathbf{${Ae(e.E * e.A)}}`)}</div>`, b += `<div class="er-eq">${z(`\\text{Flex Z: } M_z = EI_z \\cdot \\kappa \\;\\Rightarrow\\; D_{bz} = EI_z = ${Ae(e.E)} \\times ${Ae(e.Iz)} = \\mathbf{${Ae(e.E * e.Iz)}}`)}</div>`, b += `<div class="er-eq">${z(`\\text{Flex Y: } M_y = EI_y \\cdot \\kappa \\;\\Rightarrow\\; D_{by} = EI_y = ${Ae(e.E)} \\times ${Ae(e.Iy)} = \\mathbf{${Ae(e.E * e.Iy)}}`)}</div>`, b += `<div class="er-eq">${z(`\\text{Torsion: } T = GJ \\cdot \\phi' \\;\\Rightarrow\\; D_t = GJ = ${Ae(e.G)} \\times ${Ae(e.J)} = \\mathbf{${Ae(e.G * e.J)}}`)}</div>`, b += `<div class="er-section-title">5. Integracion \u2192 ${q("\\mathbf{K}_{local}")}</div>`, b += "<p>La matriz de rigidez local se obtiene integrando analiticamente:</p>", b += `<div class="er-eq er-eq-main">${z("\\mathbf{K}_{local} = \\int_0^L \\mathbf{B}^T \\cdot \\mathbf{D} \\cdot \\mathbf{B} \\; dx")}</div>`;
    const J = e.E * e.A / e.L, W = e.E * e.Iz / e.L ** 3, K = e.E * e.Iy / e.L ** 3, X = e.G * e.J / e.L;
    if (b += '<div class="er-deriv-block">', b += '<div class="er-deriv-header" data-toggle="deriv-axial">\u{1F4D6} K[0,0] = EA/L \u2014 <i>click para ver derivacion completa</i></div>', b += '<div id="er-deriv-axial" class="er-deriv-body" style="display:none">', b += "<p><b>Paso 1:</b> Funcion de forma axial</p>", b += `<div class="er-eq">${z("u(\\xi) = N_1 \\cdot u_i + N_2 \\cdot u_j = (1-\\xi)\\,u_i + \\xi\\,u_j")}</div>`, b += "<p><b>Paso 2:</b> Derivada (deformacion)</p>", b += `<div class="er-eq">${z("\\varepsilon = \\frac{du}{dx} = \\frac{1}{L}\\frac{du}{d\\xi} = \\frac{1}{L}(-u_i + u_j)")}</div>`, b += `<div class="er-eq">${z("\\mathbf{B}_{ax} = \\frac{1}{L}\\begin{bmatrix} -1 & 1 \\end{bmatrix}")}</div>`, b += `<p><b>Paso 3:</b> Integracion ${q("K = \\int_0^L B^T \\cdot EA \\cdot B \\; dx")}</p>`, b += `<div class="er-eq">${z("K_{ax} = \\int_0^L \\frac{1}{L}\\begin{bmatrix}-1\\\\1\\end{bmatrix} \\cdot EA \\cdot \\frac{1}{L}\\begin{bmatrix}-1 & 1\\end{bmatrix} dx")}</div>`, b += `<div class="er-eq">${z("= \\frac{EA}{L^2} \\begin{bmatrix}1 & -1\\\\-1 & 1\\end{bmatrix} \\int_0^L dx = \\frac{EA}{L^2} \\cdot L \\begin{bmatrix}1 & -1\\\\-1 & 1\\end{bmatrix}")}</div>`, b += `<div class="er-eq er-eq-main">${z(`K_{ax} = \\frac{EA}{L}\\begin{bmatrix}1 & -1\\\\-1 & 1\\end{bmatrix} = \\frac{${Ae(e.E)}\\times${Ae(e.A)}}{${Ae(e.L)}}\\begin{bmatrix}1 & -1\\\\-1 & 1\\end{bmatrix}`)}</div>`, b += `<div class="er-eq">${z(`K[0,0] = K[6,6] = \\frac{EA}{L} = \\mathbf{${Ae(J)}}`)}</div>`, b += "</div></div>", b += '<div class="er-deriv-block">', b += '<div class="er-deriv-header" data-toggle="deriv-bend">\u{1F4D6} K[1,1] = 12EI<sub>z</sub>/L\xB3 \u2014 <i>click para ver derivacion completa</i></div>', b += '<div id="er-deriv-bend" class="er-deriv-body" style="display:none">', b += `<p><b>Paso 1:</b> Funcion de forma Hermite para ${q("v(\\xi)")}</p>`, b += `<div class="er-eq">${z("v(\\xi) = H_1 v_i + H_2 \\theta_i + H_3 v_j + H_4 \\theta_j")}</div>`, b += "<p><b>Paso 2:</b> Segunda derivada (curvatura)</p>", b += `<div class="er-eq">${z("\\kappa = \\frac{d^2v}{dx^2} = \\frac{1}{L^2}\\frac{d^2v}{d\\xi^2}")}</div>`, b += `<div class="er-eq">${z("H_1'' = -6+12\\xi, \\quad H_2'' = L(-4+6\\xi), \\quad H_3'' = 6-12\\xi, \\quad H_4'' = L(-2+6\\xi)")}</div>`, b += `<div class="er-eq">${z("\\mathbf{B}_b = \\frac{1}{L^2}\\begin{bmatrix} H_1'' & H_2'' & H_3'' & H_4'' \\end{bmatrix}")}</div>`, b += `<p><b>Paso 3:</b> Integracion para K[1,1] (termino ${q("v_i \\cdot v_i")})</p>`, b += `<div class="er-eq">${z("K[1,1] = \\int_0^L \\frac{(H_1'')^2}{L^4} \\cdot EI_z \\; dx = \\frac{EI_z}{L^4} \\int_0^L (-6+12\\xi)^2 \\; dx")}</div>`, b += `<p>Expandimos: ${q("(-6+12\\xi)^2 = 36 - 144\\xi + 144\\xi^2")}</p>`, b += `<div class="er-eq">${z("\\int_0^L (36-144\\xi+144\\xi^2)\\,dx = 36L - 72L + 48L = 12L")}</div>`, b += `<div class="er-eq er-eq-main">${z(`K[1,1] = \\frac{EI_z}{L^4} \\cdot 12L = \\frac{12EI_z}{L^3} = \\frac{12 \\times ${Ae(e.E)} \\times ${Ae(e.Iz)}}{${Ae(e.L)}^3} = \\mathbf{${Ae(12 * W)}}`)}</div>`, b += "</div></div>", b += '<div class="er-deriv-block">', b += '<div class="er-deriv-header" data-toggle="deriv-tors">\u{1F4D6} K[3,3] = GJ/L \u2014 <i>click para ver derivacion</i></div>', b += '<div id="er-deriv-tors" class="er-deriv-body" style="display:none">', b += `<p>Mismo proceso que axial pero con ${q("\\theta_x")} y ${q("GJ")}:</p>`, b += `<div class="er-eq">${z(`K_{torsion} = \\frac{GJ}{L}\\begin{bmatrix}1 & -1\\\\-1 & 1\\end{bmatrix} = \\frac{${Ae(e.G)}\\times${Ae(e.J)}}{${Ae(e.L)}} = \\mathbf{${Ae(X)}}`)}</div>`, b += "</div></div>", b += '<div class="er-deriv-block">', b += '<div class="er-deriv-header" data-toggle="deriv-coup">\u{1F4D6} K[1,5] = 6EI<sub>z</sub>/L\xB2 \u2014 <i>acoplamiento corte-momento</i></div>', b += '<div id="er-deriv-coup" class="er-deriv-body" style="display:none">', b += `<p>Termino cruzado ${q("v_i \\cdot \\theta_{zi}")} (acoplamiento corte-momento):</p>`, b += `<div class="er-eq">${z("K[1,5] = \\frac{EI_z}{L^4} \\int_0^L H_1'' \\cdot H_2'' \\; dx")}</div>`, b += `<div class="er-eq">${z("= \\frac{EI_z}{L^4} \\int_0^L (-6+12\\xi) \\cdot L(-4+6\\xi) \\; dx")}</div>`, b += `<div class="er-eq">${z("= \\frac{EI_z}{L^3} \\int_0^L (24-36\\xi-48\\xi+72\\xi^2) \\; dx = \\frac{EI_z}{L^3} \\cdot 6L")}</div>`, b += `<div class="er-eq er-eq-main">${z(`K[1,5] = \\frac{6EI_z}{L^2} = \\mathbf{${Ae(6 * e.E * e.Iz / e.L ** 2)}}`)}</div>`, b += "</div></div>", b += '<div class="er-subsec">Resumen de coeficientes:</div>', b += `<div class="er-eq">${z(`\\frac{EA}{L} = \\mathbf{${Ae(J)}} \\qquad \\frac{12EI_z}{L^3} = \\mathbf{${Ae(12 * W)}} \\qquad \\frac{12EI_y}{L^3} = \\mathbf{${Ae(12 * K)}}`)}</div>`, b += `<div class="er-eq">${z(`\\frac{GJ}{L} = \\mathbf{${Ae(X)}} \\qquad \\frac{4EI_y}{L} = \\mathbf{${Ae(4 * e.E * e.Iy / e.L)}} \\qquad \\frac{4EI_z}{L} = \\mathbf{${Ae(4 * e.E * e.Iz / e.L)}}`)}</div>`, b += `<div class="er-eq">${z(`\\frac{6EI_z}{L^2} = \\mathbf{${Ae(6 * e.E * e.Iz / e.L ** 2)}} \\qquad \\frac{6EI_y}{L^2} = \\mathbf{${Ae(6 * e.E * e.Iy / e.L ** 2)}}`)}</div>`, e.kLocal && (b += `<div class="er-subsec">Resultado: ${q("\\mathbf{K}_{local}")} (12x12)</div>`, b += sn(e.kLocal)), b += '<div class="er-section-title">6. Transformacion de coordenadas</div>', b += "<p>Los cosenos directores del eje del elemento:</p>", b += `<div class="er-eq">${z(`l = \\frac{x_j - x_i}{L} = ${vn(e.l)} \\qquad m = \\frac{y_j - y_i}{L} = ${vn(e.m)} \\qquad n = \\frac{z_j - z_i}{L} = ${vn(e.n)}`)}</div>`, b += `<div class="er-eq">${z(`D = \\sqrt{l^2 + m^2} = ${vn(e.D)}`)}</div>`, Math.abs(e.n) > 0.999) {
      b += `<p>Caso especial: elemento vertical (${q(`n \\approx ${e.n > 0 ? "+1" : "-1"}`)}):</p>`;
      const ve = e.n > 0 ? "\\boldsymbol{\\lambda} = \\begin{bmatrix} 0 & 0 & 1 \\\\ 0 & 1 & 0 \\\\ -1 & 0 & 0 \\end{bmatrix}" : "\\boldsymbol{\\lambda} = \\begin{bmatrix} 0 & 0 & -1 \\\\ 0 & 1 & 0 \\\\ 1 & 0 & 0 \\end{bmatrix}";
      b += `<div class="er-eq">${z(ve)}</div>`;
    } else b += `<div class="er-eq">${z("\\boldsymbol{\\lambda} = \\begin{bmatrix} l & m & n \\\\ -m/D & l/D & 0 \\\\ -ln/D & -mn/D & D \\end{bmatrix}")}</div>`;
    b += `<div class="er-eq er-eq-main">${z("\\mathbf{T} = \\mathbf{I}_4 \\otimes \\boldsymbol{\\lambda} \\quad \\text{(Kronecker product} \\rightarrow 12 \\times 12 \\text{ bloque-diagonal)}")}</div>`, b += `<div class="er-section-title">7. ${q("\\mathbf{K}_{global}")} = ${q("\\mathbf{T}^T \\cdot \\mathbf{K}_{local} \\cdot \\mathbf{T}")}</div>`, b += "<p>Transformar la rigidez local al sistema global de coordenadas:</p>", b += `<div class="er-eq er-eq-main">${z("\\mathbf{K}_{global} = \\mathbf{T}^T \\cdot \\mathbf{K}_{local} \\cdot \\mathbf{T}")}</div>`, e.kGlobal && (b += sn(e.kGlobal)), b += '<div class="er-section-title">8. Ensamblaje</div>';
    const ee = e.elem[0] * 6, me = e.elem[1] * 6;
    if (b += `<div class="er-eq">${z(`\\text{Nodo } ${e.elem[0]} \\rightarrow \\text{DOFs } [${ee} \\ldots ${ee + 5}]`)}</div>`, b += `<div class="er-eq">${z(`\\text{Nodo } ${e.elem[1]} \\rightarrow \\text{DOFs } [${me} \\ldots ${me + 5}]`)}</div>`, b += `<div class="er-eq">${z("\\mathbf{K}_{total}[\\text{DOFs}_i, \\text{DOFs}_j] \\mathrel{+}= \\mathbf{K}_{global}[i, j]")}</div>`, b += '<div class="er-section-title">9. Recuperacion de fuerzas internas</div>', b += `<div class="er-eq">${z("\\mathbf{u}_{local} = \\mathbf{T} \\cdot \\mathbf{u}_{global}")}</div>`, b += `<div class="er-eq er-eq-main">${z("\\mathbf{f}_{local} = \\mathbf{K}_{local} \\cdot \\mathbf{u}_{local}")}</div>`, e.fLocal.length > 0 && e.fLocal.some((ve) => ve !== 0)) {
      const ve = [
        "N",
        "V<sub>y</sub>",
        "V<sub>z</sub>",
        "M<sub>x</sub>",
        "M<sub>y</sub>",
        "M<sub>z</sub>"
      ];
      b += '<table class="er-forces"><tr><th></th>';
      for (const A of ve) b += `<th>${A}</th>`;
      b += `</tr><tr><td>i (${e.elem[0]})</td>`;
      for (let A = 0; A < 6; A++) b += `<td class="${Math.abs(e.fLocal[A]) > 1e-10 ? "nz" : ""}">${Ae(e.fLocal[A], 3)}</td>`;
      b += `</tr><tr><td>j (${e.elem[1]})</td>`;
      for (let A = 6; A < 12; A++) b += `<td class="${Math.abs(e.fLocal[A]) > 1e-10 ? "nz" : ""}">${Ae(e.fLocal[A], 3)}</td>`;
      b += "</tr></table>";
    }
    return b;
  }
  function Ll(e) {
    let b = "";
    if (b += `<div class="er-section-title">Resumen \u2014 Elemento ${e.elemIdx}</div>`, b += '<table class="er-props">', b += `<tr><td>Tipo</td><td>${e.isFrame ? "Frame (Euler-Bernoulli)" : "Shell"}</td></tr>`, b += `<tr><td>Nodos</td><td>${e.elem.join(" \u2192 ")}</td></tr>`, b += `<tr><td>Longitud</td><td><b>${Ae(e.L)}</b></td></tr>`, b += `<tr><td>E</td><td>${Ae(e.E)}</td></tr>`, b += `<tr><td>A</td><td>${Ae(e.A)}</td></tr>`, b += "</table>", e.uGlobal.length > 0) {
      b += '<div class="er-section-title">Desplazamientos</div>';
      const q = [
        "u<sub>x</sub>",
        "u<sub>y</sub>",
        "u<sub>z</sub>",
        "\u03B8<sub>x</sub>",
        "\u03B8<sub>y</sub>",
        "\u03B8<sub>z</sub>"
      ];
      b += '<table class="er-forces"><tr><th>Nodo</th>';
      for (const z of q) b += `<th>${z}</th>`;
      b += "</tr>";
      for (let z = 0; z < e.elem.length; z++) {
        b += `<tr><td>${e.elem[z]}</td>`;
        for (let J = 0; J < 6; J++) {
          const W = e.uGlobal[z * 6 + J];
          b += `<td class="${Math.abs(W) > 1e-10 ? "nz" : ""}">${Ae(W, 6)}</td>`;
        }
        b += "</tr>";
      }
      b += "</table>";
    }
    if (e.fLocal.length > 0 && e.fLocal.some((q) => q !== 0)) {
      b += '<div class="er-section-title">Fuerzas internas</div>';
      const q = [
        "N",
        "V<sub>y</sub>",
        "V<sub>z</sub>",
        "M<sub>x</sub>",
        "M<sub>y</sub>",
        "M<sub>z</sub>"
      ];
      b += '<table class="er-forces"><tr><th></th>';
      for (const z of q) b += `<th>${z}</th>`;
      b += "</tr><tr><td>Nodo i</td>";
      for (let z = 0; z < 6; z++) b += `<td class="${Math.abs(e.fLocal[z]) > 1e-10 ? "nz" : ""}">${Ae(e.fLocal[z], 3)}</td>`;
      b += "</tr><tr><td>Nodo j</td>";
      for (let z = 6; z < 12; z++) b += `<td class="${Math.abs(e.fLocal[z]) > 1e-10 ? "nz" : ""}">${Ae(e.fLocal[z], 3)}</td>`;
      b += "</tr></table>";
    }
    return b;
  }
  function Ae(e, b = 2) {
    return Math.abs(e) < 1e-10 ? "0" : Math.abs(e) >= 1e7 || Math.abs(e) < 0.01 && e !== 0 ? e.toExponential(b) : e.toFixed(b);
  }
  function vn(e) {
    return Math.abs(e) < 1e-10 ? "0" : e.toFixed(4);
  }
  function sn(e) {
    var _a;
    const b = e.length, q = Math.min(b, 12);
    let z = '<div style="overflow-x:auto"><table class="er-matrix">';
    for (let J = 0; J < q; J++) {
      z += "<tr>";
      for (let W = 0; W < q; W++) {
        const K = ((_a = e[J]) == null ? void 0 : _a[W]) ?? 0, X = Math.abs(K) < 1e-10;
        z += `<td class="${X ? "z" : ""} ${J === W && !X ? "diag" : ""}">${X ? "0" : Cl(K)}</td>`;
      }
      z += "</tr>";
    }
    return z += "</table>", b > q && (z += `<div style="color:var(--fem-label);font-size:9px">(${q}\xD7${q} de ${b}\xD7${b})</div>`), z += "</div>", z;
  }
  function Cl(e) {
    return Math.abs(e) >= 1e6 || Math.abs(e) < 0.01 && e !== 0 ? e.toExponential(1) : Math.abs(e) >= 100 ? e.toFixed(0) : e.toFixed(2);
  }
  function os(e) {
    const b = e.getContext("2d");
    if (!b) return;
    const q = e.width, z = e.height, J = 30, W = q - 2 * J, K = (z - 3 * J) / 2;
    b.fillStyle = getComputedStyle(document.body).getPropertyValue("--fem-bg").trim() || "#111", b.fillRect(0, 0, q, z);
    const X = (ee, me, ve) => {
      b.strokeStyle = "#333", b.lineWidth = 1, b.strokeRect(J, ee, W, K), b.strokeStyle = "#444", b.beginPath(), b.moveTo(J, ee + K / 2), b.lineTo(J + W, ee + K / 2), b.stroke(), b.fillStyle = "#888", b.font = "11px sans-serif", b.fillText(me, J + 4, ee + 14);
      for (const U of ve) {
        b.strokeStyle = U.color, b.lineWidth = 2.5, b.beginPath();
        for (let Se = 0; Se <= 100; Se++) {
          const be = Se / 100, ce = J + be * W, re = ee + K / 2 - U.fn(be) * (K / 2 * 0.85);
          Se === 0 ? b.moveTo(ce, re) : b.lineTo(ce, re);
        }
        b.stroke();
      }
      let A = J + W - 90;
      for (const U of ve) b.fillStyle = U.color, b.font = "bold 10px sans-serif", b.fillText(U.label, A, ee + K - 6), A += 36;
      b.fillStyle = "#666", b.font = "9px monospace", b.fillText("0", J, ee + K + 12), b.fillText("1", J + W - 6, ee + K + 12), b.fillText("\u03BE", J + W / 2, ee + K + 12);
    };
    X(J, "Axial (lineal)", [
      {
        fn: (ee) => 1 - ee,
        color: "#ff6600",
        label: "N\u2081"
      },
      {
        fn: (ee) => ee,
        color: "#00ccff",
        label: "N\u2082"
      }
    ]), X(J + K + J, "Flexi\xF3n (Hermite c\xFAbicos)", [
      {
        fn: (ee) => 1 - 3 * ee * ee + 2 * ee * ee * ee,
        color: "#ff6600",
        label: "H\u2081"
      },
      {
        fn: (ee) => ee * (1 - ee) * (1 - ee),
        color: "#ffcc00",
        label: "H\u2082"
      },
      {
        fn: (ee) => 3 * ee * ee - 2 * ee * ee * ee,
        color: "#00ccff",
        label: "H\u2083"
      },
      {
        fn: (ee) => ee * ee * (ee - 1),
        color: "#00ff66",
        label: "H\u2084"
      }
    ]);
  }
  const Tl = `<style>
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
  let ps = typeof localStorage < "u" && localStorage.getItem("hk_lang") || "es";
  function ns() {
    return ps;
  }
  function Al(e) {
    ps = e, typeof localStorage < "u" && localStorage.setItem("hk_lang", e);
  }
  const Pl = {
    Settings: [
      "Configuraci\xF3n",
      "Settings"
    ],
    "Display scale": [
      "Escala visual",
      "Display scale"
    ],
    Nodes: [
      "Nodos",
      "Nodes"
    ],
    Elements: [
      "Elementos",
      "Elements"
    ],
    Columnas: [
      "Columnas",
      "Columns"
    ],
    Vigas: [
      "Vigas",
      "Beams"
    ],
    "Nodes indexes": [
      "\xCDndices nodos",
      "Node indexes"
    ],
    "Elements indexes": [
      "\xCDndices elem.",
      "Element indexes"
    ],
    Grid: [
      "Grilla",
      "Grid"
    ],
    "Mostrar grid": [
      "Mostrar grilla",
      "Show grid"
    ],
    "Mostrar labels": [
      "Mostrar etiquetas",
      "Show labels"
    ],
    Modelo: [
      "Modelo",
      "Model"
    ],
    "FEM Studio": [
      "FEM Studio",
      "FEM Studio"
    ],
    Cercha: [
      "Cercha",
      "Truss"
    ],
    Portico: [
      "P\xF3rtico",
      "Portal Frame"
    ],
    Torre: [
      "Torre",
      "Tower"
    ],
    Galpon: [
      "Galp\xF3n",
      "Warehouse"
    ],
    Edificio: [
      "Edificio",
      "Building"
    ],
    "Edif. Muros": [
      "Edif. Muros",
      "Bldg. Walls"
    ],
    "Edif. Acero": [
      "Edif. Acero",
      "Steel Bldg."
    ],
    "Acero+Diag": [
      "Acero+Diag",
      "Steel+Brace"
    ],
    "Edif. Mixto": [
      "Edif. Mixto",
      "Mixed Bldg."
    ],
    Mezanine: [
      "Mezanine",
      "Mezzanine"
    ],
    Barra: [
      "Barra",
      "Bar"
    ],
    "Placa 3Q": [
      "Placa 3Q",
      "Plate 3Q"
    ],
    "Placa Q4": [
      "Placa Q4",
      "Plate Q4"
    ],
    "Losa Rect": [
      "Losa Rect",
      "Rect. Slab"
    ],
    "Losa Plana": [
      "Losa Plana",
      "Flat Slab"
    ],
    "Viga Alta": [
      "Viga Alta",
      "Deep Beam"
    ],
    "Muro Cont.": [
      "Muro Cont.",
      "Ret. Wall"
    ],
    Zapata: [
      "Zapata",
      "Footing"
    ],
    "Placa Base": [
      "Placa Base",
      "Base Plate"
    ],
    "Col+Placa 3D": [
      "Col+Placa 3D",
      "Col+Plate 3D"
    ],
    Talud: [
      "Talud",
      "Slope"
    ],
    Eiffel: [
      "Eiffel",
      "Eiffel"
    ],
    Arco: [
      "Arco",
      "Arch"
    ],
    Puente: [
      "Puente",
      "Bridge"
    ],
    Twist: [
      "Twist",
      "Twist"
    ],
    Burj: [
      "Burj",
      "Burj"
    ],
    Opera: [
      "Opera",
      "Opera"
    ],
    Diagrid: [
      "Diagrid",
      "Diagrid"
    ],
    "Muro Q4": [
      "Muro Q4",
      "Wall Q4"
    ],
    "Viga Q4": [
      "Viga Q4",
      "Beam Q4"
    ],
    "Placa XZ": [
      "Placa XZ",
      "Plate XZ"
    ],
    P\u00E9rgola: [
      "P\xE9rgola",
      "Pergola"
    ],
    Select: [
      "Seleccionar",
      "Select"
    ],
    Draw: [
      "Dibujar",
      "Draw"
    ],
    Inspect: [
      "Inspeccionar",
      "Inspect"
    ],
    New: [
      "Nuevo",
      "New"
    ],
    Export: [
      "Exportar",
      "Export"
    ],
    "3D": [
      "3D",
      "3D"
    ],
    Plan: [
      "Planta",
      "Plan"
    ],
    EX: [
      "EX",
      "EX"
    ],
    EY: [
      "EY",
      "EY"
    ],
    Modal: [
      "Modal",
      "Modal"
    ],
    Nonlinear: [
      "No-lineal",
      "Nonlinear"
    ],
    Pushover: [
      "Pushover",
      "Pushover"
    ],
    "Report Explained": [
      "Reporte FEM",
      "FEM Report"
    ],
    C\u00E1lculo: [
      "C\xE1lculo",
      "Calc"
    ],
    Log: [
      "Log",
      "Log"
    ],
    CLI: [
      "CLI",
      "CLI"
    ],
    "I/O": [
      "I/O",
      "I/O"
    ],
    Tests: [
      "Tests",
      "Tests"
    ],
    Clear: [
      "Limpiar",
      "Clear"
    ],
    Tutorials: [
      "Tutoriales",
      "Tutorials"
    ],
    "Tutoriales FEM": [
      "Tutoriales FEM: teor\xEDa + pr\xE1ctica interactiva",
      "FEM Tutorials: interactive theory + practice"
    ],
    MKS: [
      "MKS",
      "MKS"
    ],
    SI: [
      "SI",
      "SI"
    ],
    US: [
      "US",
      "US"
    ],
    "Pantalla completa": [
      "Pantalla completa",
      "Fullscreen"
    ],
    "Ayuda interactiva": [
      "Ayuda interactiva \u2014 Tour guiado",
      "Interactive help \u2014 Guided tour"
    ],
    "Nuevo modelo vac\xEDo": [
      "Nuevo modelo vac\xEDo",
      "New empty model"
    ],
    "Exportar coordenadas": [
      "Exportar coordenadas y datos del modelo",
      "Export model coordinates and data"
    ],
    "An\xE1lisis modal": [
      "An\xE1lisis modal (frecuencias y modos)",
      "Modal analysis (frequencies and modes)"
    ],
    "An\xE1lisis no-lineal": [
      "An\xE1lisis no-lineal din\xE1mico (BRB + sismo)",
      "Nonlinear dynamic analysis (BRB + earthquake)"
    ],
    "Pushover c\xEDclico": [
      "Pushover c\xEDclico con hist\xE9resis",
      "Cyclic pushover with hysteresis"
    ],
    "Report derivaci\xF3n": [
      "Report Explained: derivaci\xF3n FEM paso a paso",
      "Report Explained: step-by-step FEM derivation"
    ],
    "Calculadora FEM": [
      "Calculadora FEM: editor MATLAB + output KaTeX",
      "FEM Calculator: MATLAB editor + KaTeX output"
    ],
    "Ver log": [
      "Ver log del solver",
      "View solver log"
    ],
    "CLI toggle": [
      "Abrir/cerrar consola CLI",
      "Open/close CLI console"
    ],
    "Asignar secci\xF3n": [
      "Asignar secci\xF3n",
      "Assign section"
    ],
    "Info del elemento": [
      "Info del elemento",
      "Element info"
    ],
    "Ocultar seleccionados": [
      "Ocultar seleccionados",
      "Hide selected"
    ],
    Aislar: [
      "Aislar (mostrar solo seleccionados)",
      "Isolate (show selected only)"
    ],
    "Mostrar todo": [
      "Mostrar todo",
      "Show all"
    ],
    "Eliminar seleccionados": [
      "Eliminar seleccionados",
      "Delete selected"
    ],
    "Limpiar selecci\xF3n": [
      "Limpiar selecci\xF3n",
      "Clear selection"
    ],
    Luz: [
      "Luz",
      "Span"
    ],
    Altura: [
      "Altura",
      "Height"
    ],
    Divisiones: [
      "Divisiones",
      "Divisions"
    ],
    Discretizaci\u00F3n: [
      "Discretizaci\xF3n",
      "Discretization"
    ],
    Pisos: [
      "Pisos",
      "Stories"
    ],
    "N. Vanos": [
      "N. Vanos",
      "N. Spans"
    ],
    "Luz vano": [
      "Luz vano",
      "Span length"
    ],
    "N. Pisos": [
      "N. Pisos",
      "N. Stories"
    ],
    "h piso": [
      "h piso",
      "Story h"
    ],
    "Vanos X": [
      "Vanos X",
      "Spans X"
    ],
    "Vanos Y": [
      "Vanos Y",
      "Spans Y"
    ],
    "Div. Vigas": [
      "Div. Vigas",
      "Beam Div."
    ],
    "Div. Columnas": [
      "Div. Columnas",
      "Col. Div."
    ],
    Largo: [
      "Largo",
      "Length"
    ],
    "Altura col": [
      "Altura col",
      "Col. height"
    ],
    "Flecha arco": [
      "Flecha arco",
      "Arch rise"
    ],
    "Div. X": [
      "Div. X",
      "Div. X"
    ],
    "Div. Y": [
      "Div. Y",
      "Div. Y"
    ],
    "L total": [
      "L total",
      "Total L"
    ],
    "Num elementos": [
      "Num elementos",
      "Num elements"
    ],
    "Mesh size": [
      "Mesh",
      "Mesh size"
    ],
    "Ancho Lx": [
      "Ancho Lx",
      "Width Lx"
    ],
    "Largo Ly": [
      "Largo Ly",
      "Length Ly"
    ],
    "H bajo": [
      "H bajo",
      "H low"
    ],
    "H alto": [
      "H alto",
      "H high"
    ],
    "Columnas/p\xF3rtico": [
      "Columnas/p\xF3rtico",
      "Columns/portal"
    ],
    Correas: [
      "Correas",
      "Purlins"
    ],
    "E acero": [
      "E acero",
      "E steel"
    ],
    "E concreto": [
      "E concreto",
      "E concrete"
    ],
    "t panel": [
      "t panel",
      "Panel t"
    ],
    "q carga": [
      "q carga",
      "q load"
    ],
    "Espesor t": [
      "Espesor t",
      "Thickness t"
    ],
    "Mesh nx": [
      "Mesh nx",
      "Mesh nx"
    ],
    "Mesh ny": [
      "Mesh ny",
      "Mesh ny"
    ],
    "P lateral": [
      "P lateral",
      "Lateral P"
    ],
    "Ancho W": [
      "Ancho W",
      "Width W"
    ],
    "Alto H": [
      "Alto H",
      "Height H"
    ],
    "Ancho carga": [
      "Ancho carga",
      "Load width"
    ],
    "B base": [
      "B base",
      "Base B"
    ],
    "t muro": [
      "t muro",
      "Wall t"
    ],
    "t base": [
      "t base",
      "Base t"
    ],
    "gamma suelo": [
      "\u03B3 suelo",
      "\u03B3 soil"
    ],
    "q sobrecarga": [
      "q sobrecarga",
      "q surcharge"
    ],
    "E suelo": [
      "E suelo",
      "E soil"
    ],
    "v suelo": [
      "\u03BD suelo",
      "\u03BD soil"
    ],
    "v concreto": [
      "\u03BD concreto",
      "\u03BD concrete"
    ],
    "kn interfaz": [
      "kn interfaz",
      "kn interface"
    ],
    "ks interfaz": [
      "ks interfaz",
      "ks interface"
    ],
    "gamma agua": [
      "\u03B3 agua",
      "\u03B3 water"
    ],
    "H agua": [
      "H agua",
      "Water H"
    ],
    "Lx zapata": [
      "Lx zapata",
      "Footing Lx"
    ],
    "Ly zapata": [
      "Ly zapata",
      "Footing Ly"
    ],
    "t zapata": [
      "t zapata",
      "Footing t"
    ],
    "a columna": [
      "a columna",
      "Col. width"
    ],
    "h pedestal": [
      "h pedestal",
      "Pedestal h"
    ],
    "P axial": [
      "P axial",
      "Axial P"
    ],
    ks: [
      "ks",
      "ks"
    ],
    "N pernos": [
      "N pernos",
      "N bolts"
    ],
    "d perno": [
      "d perno",
      "Bolt d"
    ],
    "Sep. pernos X": [
      "Sep. pernos X",
      "Bolt spacing X"
    ],
    "Sep. pernos Y": [
      "Sep. pernos Y",
      "Bolt spacing Y"
    ],
    "Col a": [
      "Col a",
      "Col a"
    ],
    "Col b": [
      "Col b",
      "Col b"
    ],
    "Col h": [
      "Col h",
      "Col h"
    ],
    "Col t": [
      "Col t",
      "Col t"
    ],
    "Col altura": [
      "Col altura",
      "Col height"
    ],
    "Placa Lx": [
      "Placa Lx",
      "Plate Lx"
    ],
    "Placa Ly": [
      "Placa Ly",
      "Plate Ly"
    ],
    "Placa t": [
      "Placa t",
      "Plate t"
    ],
    "Col subdiv V": [
      "Col subdiv V",
      "Col subdiv V"
    ],
    "Col subdiv H": [
      "Col subdiv H",
      "Col subdiv H"
    ],
    "Placa subdiv": [
      "Placa subdiv",
      "Plate subdiv"
    ],
    "Peralte h": [
      "Peralte h",
      "Depth h"
    ],
    "Luz L": [
      "Luz L",
      "Span L"
    ],
    "Col d": [
      "Col d",
      "Col d"
    ],
    "Col bf": [
      "Col bf",
      "Col bf"
    ],
    "Col tf": [
      "Col tf",
      "Col tf"
    ],
    "Col tw": [
      "Col tw",
      "Col tw"
    ],
    "Vig d": [
      "Vig d",
      "Beam d"
    ],
    "Vig bf": [
      "Vig bf",
      "Beam bf"
    ],
    "Vig tf": [
      "Vig tf",
      "Beam tf"
    ],
    "Vig tw": [
      "Vig tw",
      "Beam tw"
    ],
    "Corr b": [
      "Corr b",
      "Purlin b"
    ],
    "Corr t": [
      "Corr t",
      "Purlin t"
    ],
    "F axial": [
      "F axial",
      "Axial F"
    ],
    "nx elem": [
      "nx elem",
      "nx elem"
    ],
    "ny elem": [
      "ny elem",
      "ny elem"
    ],
    "Mesh nz": [
      "Mesh nz",
      "Mesh nz"
    ],
    "Sep pernos X": [
      "Sep pernos X",
      "Bolt spacing X"
    ],
    "Sep pernos Y": [
      "Sep pernos Y",
      "Bolt spacing Y"
    ],
    Angulo: [
      "\xC1ngulo",
      "Angle"
    ],
    "b top": [
      "b top",
      "Top b"
    ],
    "b base": [
      "b base",
      "Base b"
    ],
    "Cohesion c": [
      "Cohesi\xF3n c",
      "Cohesion c"
    ],
    "Friccion \u03C6": [
      "Fricci\xF3n \u03C6",
      "Friction \u03C6"
    ],
    Sobrecarga: [
      "Sobrecarga",
      "Surcharge"
    ],
    "P puntual": [
      "P puntual",
      "Point P"
    ],
    CM: [
      "CM",
      "DL"
    ],
    CV: [
      "CV",
      "LL"
    ],
    "Ex sismo": [
      "Ex sismo",
      "Ex seismic"
    ],
    "Ey sismo": [
      "Ey sismo",
      "Ey seismic"
    ],
    "P borde": [
      "P borde",
      "Edge P"
    ],
    Empotrado: [
      "Empotrado",
      "Fixed"
    ],
    Articulado: [
      "Articulado",
      "Pinned"
    ],
    "Roller Z": [
      "Roller Z",
      "Roller Z"
    ],
    "Simply Supported": [
      "Simplemente apoyado",
      "Simply Supported"
    ],
    "Winkler (k)": [
      "Winkler (k)",
      "Winkler (k)"
    ],
    "Emp-Libre": [
      "Emp-Libre",
      "Fixed-Free"
    ],
    "Emp-Emp": [
      "Emp-Emp",
      "Fixed-Fixed"
    ],
    "Emp-Art": [
      "Emp-Art",
      "Fixed-Pinned"
    ],
    "Rankine (Ka)": [
      "Rankine (Ka)",
      "Rankine (Ka)"
    ],
    "Suelo continuo": [
      "Suelo continuo",
      "Continuous soil"
    ],
    Interfaz: [
      "Interfaz",
      "Interface"
    ],
    "Presion agua": [
      "Presi\xF3n agua",
      "Water pressure"
    ],
    "Pin (w=0)": [
      "Pin (w=0)",
      "Pin (w=0)"
    ],
    "Simplemente apoyado": [
      "Simplemente apoyado",
      "Simply Supported"
    ],
    "Pernos empotrados": [
      "Pernos empotrados",
      "Fixed bolts"
    ],
    Losas: [
      "Losas",
      "Slabs"
    ],
    Zapatas: [
      "Zapatas",
      "Footings"
    ],
    Diagonales: [
      "Diagonales",
      "Braces"
    ],
    Muros: [
      "Muros",
      "Walls"
    ],
    Aberturas: [
      "Aberturas",
      "Openings"
    ],
    Refuerzo: [
      "Refuerzo",
      "Reinforcement"
    ],
    Placas: [
      "Placas",
      "Plates"
    ],
    Pernos: [
      "Pernos",
      "Bolts"
    ],
    Otros: [
      "Otros",
      "Others"
    ],
    Piso: [
      "Piso",
      "Floor"
    ],
    "Vigas X": [
      "Vigas X",
      "Beams X"
    ],
    "Vigas Y": [
      "Vigas Y",
      "Beams Y"
    ],
    "Vigas Secundarias": [
      "Vigas Secundarias",
      "Secondary Beams"
    ],
    "Losas de Piso": [
      "Losas de Piso",
      "Floor Slabs"
    ],
    "Muros de Corte": [
      "Muros de Corte",
      "Shear Walls"
    ],
    Rangos: [
      "Rangos",
      "Ranges"
    ],
    "Luces X": [
      "Luces X",
      "Spans X"
    ],
    "Luces Y": [
      "Luces Y",
      "Spans Y"
    ],
    "Alturas por Piso": [
      "Alturas por Piso",
      "Heights per Floor"
    ],
    Parameters: [
      "Par\xE1metros",
      "Parameters"
    ],
    Secciones: [
      "Secciones",
      "Sections"
    ],
    "Col Material": [
      "Col Material",
      "Col Material"
    ],
    Hormigon: [
      "Hormig\xF3n",
      "Concrete"
    ],
    Acero: [
      "Acero",
      "Steel"
    ],
    "Col forma": [
      "Col forma",
      "Col shape"
    ],
    Rectangular: [
      "Rectangular",
      "Rectangular"
    ],
    Circular: [
      "Circular",
      "Circular"
    ],
    "Col tipo": [
      "Col tipo",
      "Col type"
    ],
    Tubular: [
      "Tubular",
      "Tubular"
    ],
    "Viga Material": [
      "Viga Material",
      "Beam Material"
    ],
    "Viga tipo": [
      "Viga tipo",
      "Beam type"
    ],
    Columna: [
      "Columna",
      "Column"
    ],
    Activar: [
      "Activar",
      "Enable"
    ],
    "Corren en": [
      "Corren en",
      "Run along"
    ],
    "X (entre ejes Y)": [
      "X (entre ejes Y)",
      "X (between Y axes)"
    ],
    "Y (entre ejes X)": [
      "Y (entre ejes X)",
      "Y (between X axes)"
    ],
    "Cantidad/vano": [
      "Cantidad/vano",
      "Qty/span"
    ],
    "Activar losas": [
      "Activar losas",
      "Enable slabs"
    ],
    Espesor: [
      "Espesor",
      "Thickness"
    ],
    Vano: [
      "Vano",
      "Span"
    ],
    vanos: [
      "vanos",
      "spans"
    ],
    ubicaciones: [
      "ubicaciones",
      "locations"
    ],
    Teor\u00EDa: [
      "Teor\xEDa",
      "Theory"
    ],
    Membrana: [
      "Membrana",
      "Membrane"
    ],
    "Kirchhoff (delgada)": [
      "Kirchhoff (delgada)",
      "Kirchhoff (thin)"
    ],
    "Mindlin (gruesa)": [
      "Mindlin (gruesa)",
      "Mindlin (thick)"
    ],
    "Cargas Est\xE1ticas": [
      "Cargas Est\xE1ticas",
      "Static Loads"
    ],
    Cargas: [
      "Cargas",
      "Loads"
    ],
    Luces: [
      "Luces",
      "Spans"
    ],
    Ejes: [
      "Ejes",
      "Axes"
    ],
    Eje: [
      "Eje",
      "Axis"
    ],
    Planta: [
      "Planta",
      "Plan"
    ],
    "elevaci\xF3n mirando en": [
      "elevaci\xF3n mirando en",
      "elevation looking at"
    ],
    Apoyo: [
      "Apoyo",
      "Support"
    ],
    Apoyos: [
      "Apoyos",
      "Supports"
    ],
    "Apoyos fijos": [
      "Apoyos fijos",
      "Fixed supports"
    ],
    "Escala deformaci\xF3n": [
      "Escala deformaci\xF3n",
      "Deform scale"
    ],
    "Apoyos DOFs": [
      "Apoyos DOFs",
      "Support DOFs"
    ],
    "Apoyo Ux": [
      "Apoyo Ux",
      "Support Ux"
    ],
    "Apoyo Uy": [
      "Apoyo Uy",
      "Support Uy"
    ],
    "Apoyo Uz": [
      "Apoyo Uz",
      "Support Uz"
    ],
    "Apoyo Rx": [
      "Apoyo Rx",
      "Support Rx"
    ],
    "Apoyo Ry": [
      "Apoyo Ry",
      "Support Ry"
    ],
    "Apoyo Rz": [
      "Apoyo Rz",
      "Support Rz"
    ],
    nodos: [
      "nodos",
      "nodes"
    ],
    Ensamblaje: [
      "Ensamblaje",
      "Assembly"
    ],
    Tri\u00E1ngulos: [
      "Tri\xE1ngulos",
      "Triangles"
    ],
    libres: [
      "libres",
      "free"
    ],
    Elemento: [
      "Elemento",
      "Element"
    ],
    Tipo: [
      "Tipo",
      "Type"
    ],
    Viga: [
      "Viga",
      "Beam"
    ],
    Secci\u00F3n: [
      "Secci\xF3n",
      "Section"
    ],
    Eliminar: [
      "Eliminar",
      "Delete"
    ],
    Nodo: [
      "Nodo",
      "Node"
    ],
    fijos: [
      "fijos",
      "fixed"
    ],
    de: [
      "de",
      "of"
    ],
    "Cargas aplicadas": [
      "Cargas aplicadas",
      "Applied loads"
    ],
    Perfil: [
      "Perfil",
      "Profile"
    ],
    Param\u00E9trica: [
      "Param\xE9trica",
      "Parametric"
    ],
    "Tubular Hueca": [
      "Tubular Hueca",
      "Hollow Tube"
    ],
    "Tubo relleno concreto": [
      "Tubo relleno concreto",
      "Concrete-filled tube"
    ],
    "Modelo Anal\xEDtico": [
      "Modelo Anal\xEDtico",
      "Analytical Model"
    ]
  };
  function pa(e) {
    const b = Pl[e];
    return b ? ps === "es" ? b[0] : b[1] : e;
  }
  function Fl() {
    document.querySelectorAll("[data-i18n]").forEach((e) => {
      const b = e.dataset.i18n, q = pa(b);
      e.tagName === "INPUT" || e.tagName === "SELECT" ? e.placeholder = q : e.textContent = q;
    }), document.querySelectorAll("[data-i18n-title]").forEach((e) => {
      const b = e.dataset.i18nTitle;
      e.title = pa(b);
    });
  }
  const on = [
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
  let Sn = false, Co = null, Ut = null, wt = null, mt = null;
  function ql() {
    mt = document.createElement("button"), mt.id = "help-tour-btn", mt.innerHTML = "?", mt.title = "Ayuda interactiva \u2014 Tour guiado";
    let e = false;
    const b = (z) => {
      mt.style.cssText = z ? "position:fixed;bottom:5px;right:5px;z-index:9999999;width:20px;height:20px;border-radius:50%;background:#555;color:#aaa;border:1px solid #777;font-size:10px;cursor:pointer;opacity:0.5;transition:all 0.2s;" : "position:fixed;bottom:20px;right:20px;z-index:9999999;width:36px;height:36px;border-radius:50%;background:linear-gradient(135deg,#0066cc,#0099ff);color:white;border:2px solid rgba(255,255,255,0.3);font-size:18px;font-weight:bold;cursor:pointer;box-shadow:0 2px 10px rgba(0,102,204,0.3);transition:all 0.2s;font-family:'Arial Nova',sans-serif;";
    };
    b(false), mt.addEventListener("contextmenu", (z) => {
      z.preventDefault(), e = !e, b(e), mt.innerHTML = "?";
    }), mt.addEventListener("mouseenter", () => {
      mt.style.transform = "scale(1.15)", mt.style.boxShadow = "0 6px 20px rgba(0,102,204,0.6)";
    }), mt.addEventListener("mouseleave", () => {
      mt.style.transform = "scale(1)", mt.style.boxShadow = "0 4px 15px rgba(0,102,204,0.4)";
    }), mt.addEventListener("click", () => {
      Sn ? us() : Rl();
    });
    const q = document.createElement("style");
    return q.textContent = `
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
  `, document.head.appendChild(q), mt;
  }
  function Rl() {
    Sn = true, mt && (mt.innerHTML = "\u2715", mt.style.background = "linear-gradient(135deg, #cc3333, #ff4444)", mt.style.animation = "none"), Co = document.createElement("div"), Co.id = "tour-overlay", Co.style.cssText = `
    position: fixed; inset: 0; z-index: 9999990;
    pointer-events: none;
  `, document.body.appendChild(Co), Yo(0);
  }
  function us() {
    Sn = false, mt && (mt.innerHTML = "?", mt.style.background = "linear-gradient(135deg, #0066cc, #0099ff)", mt.style.animation = "helpPulse 2s infinite"), Ut && (Ut.remove(), Ut = null), wt && (wt.remove(), wt = null), Co && (Co.remove(), Co = null);
  }
  function Yo(e) {
    var _a, _b;
    if (e >= on.length) {
      _l();
      return;
    }
    const b = on[e], q = document.querySelector(b.selector);
    if (!q) {
      Yo(e + 1);
      return;
    }
    q.scrollIntoView({
      behavior: "smooth",
      block: "nearest"
    }), Ut && Ut.remove(), wt && wt.remove();
    const z = q.getBoundingClientRect(), J = window.innerWidth, W = window.innerHeight, K = 320, X = 180;
    Ut = document.createElement("div"), Ut.style.cssText = `
    position: fixed;
    left: ${z.left - 6}px; top: ${z.top - 6}px;
    width: ${z.width + 12}px; height: ${z.height + 12}px;
    border-radius: 8px;
    z-index: 9999991;
    pointer-events: none;
    animation: spotlightPulse 1.5s ease-in-out infinite;
    transition: all 0.3s ease;
  `, document.body.appendChild(Ut);
    const ee = J - z.right, me = z.left, ve = W - z.bottom, A = z.top;
    let U = b.position || "bottom";
    U === "bottom" && ve < X + 20 && (U = "top"), U === "top" && A < X + 20 && (U = "right"), U === "right" && ee < K + 20 && (U = "left"), U === "left" && me < K + 20 && (U = "bottom");
    let Se, be, ce = "";
    switch (U) {
      case "bottom":
        Se = z.left + z.width / 2 - K / 2, be = z.bottom + 14, ce = "position:absolute;top:-8px;left:50%;transform:translateX(-50%);width:0;height:0;border-left:8px solid transparent;border-right:8px solid transparent;border-bottom:8px solid #0099ff;";
        break;
      case "top":
        Se = z.left + z.width / 2 - K / 2, be = z.top - X - 14, ce = "position:absolute;bottom:-8px;left:50%;transform:translateX(-50%);width:0;height:0;border-left:8px solid transparent;border-right:8px solid transparent;border-top:8px solid #0099ff;";
        break;
      case "right":
        Se = z.right + 14, be = z.top + z.height / 2 - X / 2, ce = "position:absolute;left:-8px;top:50%;transform:translateY(-50%);width:0;height:0;border-top:8px solid transparent;border-bottom:8px solid transparent;border-right:8px solid #0099ff;";
        break;
      case "left":
        Se = z.left - K - 14, be = z.top + z.height / 2 - X / 2, ce = "position:absolute;right:-8px;top:50%;transform:translateY(-50%);width:0;height:0;border-top:8px solid transparent;border-bottom:8px solid transparent;border-left:8px solid #0099ff;";
        break;
    }
    Se = Math.max(10, Math.min(Se, J - K - 10)), be = Math.max(10, Math.min(be, W - X - 10)), wt = document.createElement("div"), wt.style.cssText = `
    position: fixed;
    left: ${Se}px; top: ${be}px;
    width: ${K}px;
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
  `, wt.innerHTML = `
    <div style="${ce}"></div>
    <div style="display:flex;align-items:center;margin-bottom:8px;">
      <span class="tour-hand">\u{1F446}</span>
      <span style="color:#0099ff;font-weight:bold;font-size:15px;">${b.title}</span>
      <span style="margin-left:auto;color:#666;font-size:11px;">${e + 1}/${on.length}</span>
    </div>
    <p style="margin:0 0 12px 0;font-size:12px;line-height:1.6;color:#bbb;">${b.description}</p>
    <div style="display:flex;gap:8px;justify-content:flex-end;">
      ${e > 0 ? '<button id="tour-prev" style="padding:5px 14px;background:transparent;color:#888;border:1px solid #444;border-radius:6px;cursor:pointer;font-size:11px;">\u25C0 Anterior</button>' : ""}
      <button id="tour-next" style="padding:5px 18px;background:linear-gradient(135deg,#0066cc,#0099ff);color:white;border:none;border-radius:6px;cursor:pointer;font-size:12px;font-weight:bold;">
        ${e < on.length - 1 ? "Siguiente \u25B6" : "Finalizar \u2713"}
      </button>
    </div>
    <div style="margin-top:8px;display:flex;gap:3px;justify-content:center;">
      ${on.map((ie, he) => `<div style="width:${he === e ? "16px" : "6px"};height:6px;border-radius:3px;background:${he === e ? "#0099ff" : he < e ? "#004488" : "#333"};transition:all 0.3s;"></div>`).join("")}
    </div>
  `, document.body.appendChild(wt), (_a = wt.querySelector("#tour-next")) == null ? void 0 : _a.addEventListener("click", () => {
      Yo(e + 1);
    }), (_b = wt.querySelector("#tour-prev")) == null ? void 0 : _b.addEventListener("click", () => {
      Yo(e - 1);
    });
    const re = (ie) => {
      if (!Sn) {
        document.removeEventListener("keydown", re);
        return;
      }
      (ie.key === "ArrowRight" || ie.key === "Enter") && (Yo(e + 1), document.removeEventListener("keydown", re)), ie.key === "ArrowLeft" && (Yo(Math.max(0, e - 1)), document.removeEventListener("keydown", re)), ie.key === "Escape" && (us(), document.removeEventListener("keydown", re));
    };
    document.addEventListener("keydown", re);
  }
  function _l() {
    var _a;
    Ut && (Ut.remove(), Ut = null), wt && (wt.remove(), wt = null), wt = document.createElement("div"), wt.style.cssText = `
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
  `, wt.innerHTML = `
    <div style="font-size:48px;margin-bottom:12px;">\u{1F393}</div>
    <h3 style="color:#00cc66;margin:0 0 8px 0;font-size:18px;">Tour Completado</h3>
    <p style="color:#888;font-size:12px;line-height:1.6;margin:0 0 16px 0;">
      Ya conoces las herramientas principales.<br>
      Presiona <b style="color:#0099ff">?</b> en cualquier momento para repetir el tour.<br>
      Usa <b style="color:#0099ff">Inspect</b> en un elemento para ver el analisis FEM completo.
    </p>
    <button id="tour-done" style="padding:8px 24px;background:linear-gradient(135deg,#00aa55,#00cc66);color:white;border:none;border-radius:8px;cursor:pointer;font-size:14px;font-weight:bold;">Entendido</button>
  `, document.body.appendChild(wt), (_a = wt.querySelector("#tour-done")) == null ? void 0 : _a.addEventListener("click", () => us());
  }
  function ss(e, b) {
    const q = e * b, z = e * b * b * b / 12, J = b * e * e * e / 12, W = Math.min(e, b), K = Math.max(e, b), X = W * W * W * K * (1 / 3 - 0.21 * (W / K) * (1 - W * W * W * W / (12 * K * K * K * K)));
    return {
      A: q,
      Iz: z,
      Iy: J,
      J: X
    };
  }
  function ua(e) {
    const b = e / 2, q = Math.PI * b * b, z = Math.PI * b * b * b * b / 4, J = Math.PI * b * b * b * b / 2;
    return {
      A: q,
      Iz: z,
      Iy: z,
      J
    };
  }
  function as(e, b, q, z) {
    const J = b - 2 * q, W = 2 * e * q + J * z, K = (e * b * b * b - (e - z) * J * J * J) / 12, X = (2 * q * e * e * e + J * z * z * z) / 12, ee = (2 * e * q * q * q + J * z * z * z) / 3;
    return {
      A: W,
      Iz: K,
      Iy: X,
      J: ee
    };
  }
  function ls(e, b, q) {
    const z = e - 2 * q, J = b - 2 * q, W = e * b - z * J, K = (e * b * b * b - z * J * J * J) / 12, X = (b * e * e * e - J * z * z * z) / 12, ee = (e - q) * (b - q), me = 2 * ((e - q) / q + (b - q) / q), ve = 4 * ee * ee / (me > 0 ? me : 1);
    return {
      A: W,
      Iz: K,
      Iy: X,
      J: ve
    };
  }
  function Ol(e, b, q, z, J, W, K) {
    const ee = 4700 * Math.sqrt(W / 1e3) * 1e3 / z, me = e - 2 * q, ve = b - 2 * q, A = e * b - me * ve, U = (e * b * b * b - me * ve * ve * ve) / 12, Se = (b * e * e * e - ve * me * me * me) / 12, be = me * ve, ce = me * ve * ve * ve / 12, re = ve * me * me * me / 12, ie = A + ee * be, he = U + ee * ce, xe = Se + ee * re, Ce = z / (2 * (1 + J)), Te = (e - q) * (b - q), Pe = 2 * ((e - q) / q + (b - q) / q), Je = 4 * Te * Te / (Pe > 0 ? Pe : 1);
    return {
      A: ie,
      Iz: he,
      Iy: xe,
      J: Je,
      Es: z,
      Gs: Ce,
      A_steel: A,
      A_conc: be
    };
  }
  function Nl(e) {
    var _a, _b;
    const { nodes: b, elements: q, nodeInputs: z, elementInputs: J } = e, W = [];
    return W.push("# OpenSeesPy model exported from Awatif FEM Studio"), W.push(`# ${b.length} nodes, ${q.length} elements`), W.push(""), W.push("import openseespy.opensees as ops"), W.push(""), W.push("ops.wipe()"), W.push("ops.model('basic', '-ndm', 3, '-ndf', 6)"), W.push(""), W.push("# --- Nodes ---"), b.forEach((K, X) => {
      W.push(`ops.node(${X + 1}, ${K[0]}, ${K[1]}, ${K[2]})`);
    }), W.push(""), W.push("# --- Boundary Conditions ---"), (_a = z.supports) == null ? void 0 : _a.forEach((K, X) => {
      const ee = K.map((me) => me ? 1 : 0).join(", ");
      W.push(`ops.fix(${X + 1}, ${ee})`);
    }), W.push(""), W.push("# --- Geometric Transformations ---"), W.push("ops.geomTransf('Linear', 1, 0.0, 0.0, 1.0)  # beams (vecxz = Z)"), W.push("ops.geomTransf('Linear', 2, -1.0, 0.0, 0.0)  # columns (vecxz = -X)"), W.push(""), W.push("# --- Elements (elasticBeamColumn) ---"), q.forEach((K, X) => {
      var _a2, _b2, _c, _d, _e, _f;
      if (K.length !== 2) return;
      const ee = b[K[0]], me = b[K[1]], A = Math.abs(me[2] - ee[2]) > Math.max(Math.abs(me[0] - ee[0]), Math.abs(me[1] - ee[1])) ? 2 : 1, U = ((_a2 = J.areas) == null ? void 0 : _a2.get(X)) ?? 1, Se = ((_b2 = J.elasticities) == null ? void 0 : _b2.get(X)) ?? 2e5, be = ((_c = J.shearModuli) == null ? void 0 : _c.get(X)) ?? 8e4, ce = ((_d = J.torsionalConstants) == null ? void 0 : _d.get(X)) ?? 1, re = ((_e = J.momentsOfInertiaY) == null ? void 0 : _e.get(X)) ?? 1, ie = ((_f = J.momentsOfInertiaZ) == null ? void 0 : _f.get(X)) ?? 1;
      W.push(`ops.element('elasticBeamColumn', ${X + 1}, ${K[0] + 1}, ${K[1] + 1}, ${U}, ${Se}, ${be}, ${ce}, ${re}, ${ie}, ${A})`);
    }), W.push(""), z.loads && z.loads.size > 0 && (W.push("# --- Loads ---"), W.push("ops.timeSeries('Linear', 1)"), W.push("ops.pattern('Plain', 1, 1)"), z.loads.forEach((K, X) => {
      const ee = K.map((me) => me).join(", ");
      W.push(`ops.load(${X + 1}, ${ee})`);
    }), W.push("")), W.push("# --- Analysis ---"), W.push("ops.system('BandGeneral')"), W.push("ops.numberer('RCM')"), W.push("ops.constraints('Plain')"), W.push("ops.integrator('LoadControl', 1.0)"), W.push("ops.algorithm('Linear')"), W.push("ops.analysis('Static')"), W.push("ops.analyze(1)"), W.push(""), W.push("# --- Results ---"), W.push('print("\\n=== Displacements ===")'), b.forEach((K, X) => {
      W.push(`print(f"Node {${X + 1}}: {ops.nodeDisp(${X + 1})}")`);
    }), W.push(""), W.push('print("\\n=== Reactions ===")'), W.push("ops.reactions()"), (_b = z.supports) == null ? void 0 : _b.forEach((K, X) => {
      W.push(`print(f"Node {${X + 1}}: {ops.nodeReaction(${X + 1})}")`);
    }), W.join(`
`);
  }
  function Bl(e) {
    var _a, _b;
    const { nodes: b, elements: q, nodeInputs: z, elementInputs: J } = e, W = [];
    return W.push("# OpenSees Tcl model exported from Awatif FEM Studio"), W.push(`# ${b.length} nodes, ${q.length} elements`), W.push(""), W.push("wipe"), W.push("model basic -ndm 3 -ndf 6"), W.push(""), W.push("# --- Nodes ---"), b.forEach((K, X) => {
      W.push(`node ${X + 1} ${K[0]} ${K[1]} ${K[2]}`);
    }), W.push(""), W.push("# --- Boundary Conditions ---"), (_a = z.supports) == null ? void 0 : _a.forEach((K, X) => {
      const ee = K.map((me) => me ? 1 : 0).join(" ");
      W.push(`fix ${X + 1} ${ee}`);
    }), W.push(""), W.push("# --- Geometric Transformations ---"), W.push("geomTransf Linear 1 0.0 0.0 1.0"), W.push("geomTransf Linear 2 -1.0 0.0 0.0"), W.push(""), W.push("# --- Elements ---"), q.forEach((K, X) => {
      var _a2, _b2, _c, _d, _e, _f;
      if (K.length !== 2) return;
      const ee = b[K[0]], me = b[K[1]], A = Math.abs(me[2] - ee[2]) > Math.max(Math.abs(me[0] - ee[0]), Math.abs(me[1] - ee[1])) ? 2 : 1, U = ((_a2 = J.areas) == null ? void 0 : _a2.get(X)) ?? 1, Se = ((_b2 = J.elasticities) == null ? void 0 : _b2.get(X)) ?? 2e5, be = ((_c = J.shearModuli) == null ? void 0 : _c.get(X)) ?? 8e4, ce = ((_d = J.torsionalConstants) == null ? void 0 : _d.get(X)) ?? 1, re = ((_e = J.momentsOfInertiaY) == null ? void 0 : _e.get(X)) ?? 1, ie = ((_f = J.momentsOfInertiaZ) == null ? void 0 : _f.get(X)) ?? 1;
      W.push(`element elasticBeamColumn ${X + 1} ${K[0] + 1} ${K[1] + 1} ${U} ${Se} ${be} ${ce} ${re} ${ie} ${A}`);
    }), W.push(""), z.loads && z.loads.size > 0 && (W.push("# --- Loads ---"), W.push("timeSeries Linear 1"), W.push("pattern Plain 1 1 {"), z.loads.forEach((K, X) => {
      const ee = K.map((me) => me).join(" ");
      W.push(`  load ${X + 1} ${ee}`);
    }), W.push("}"), W.push("")), W.push("# --- Analysis ---"), W.push("system BandGeneral"), W.push("numberer RCM"), W.push("constraints Plain"), W.push("integrator LoadControl 1.0"), W.push("algorithm Linear"), W.push("analysis Static"), W.push("analyze 1"), W.push(""), W.push("# --- Results ---"), W.push('puts "\\n=== Displacements ==="'), b.forEach((K, X) => {
      W.push(`puts "Node ${X + 1}: [nodeDisp ${X + 1}]"`);
    }), W.push('puts "\\n=== Reactions ==="'), W.push("reactions"), (_b = z.supports) == null ? void 0 : _b.forEach((K, X) => {
      W.push(`puts "Node ${X + 1}: [nodeReaction ${X + 1}]"`);
    }), W.join(`
`);
  }
  function Hl(e) {
    const b = [], q = [], z = /* @__PURE__ */ new Map(), J = /* @__PURE__ */ new Map(), W = /* @__PURE__ */ new Map(), K = /* @__PURE__ */ new Map(), X = /* @__PURE__ */ new Map(), ee = /* @__PURE__ */ new Map(), me = /* @__PURE__ */ new Map(), ve = /* @__PURE__ */ new Map(), A = /* @__PURE__ */ new Map(), U = /* @__PURE__ */ new Map();
    for (const Se of e.split(/\r?\n/)) {
      const be = Se.trim(), ce = be.match(/ops\.node\(\s*(\d+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)/);
      if (ce) {
        const xe = parseInt(ce[1]), Ce = b.length;
        b.push([
          parseFloat(ce[2]),
          parseFloat(ce[3]),
          parseFloat(ce[4])
        ]), A.set(xe, Ce);
        continue;
      }
      const re = be.match(/ops\.fix\(\s*(\d+)\s*,\s*(\d)\s*,\s*(\d)\s*,\s*(\d)\s*,\s*(\d)\s*,\s*(\d)\s*,\s*(\d)/);
      if (re) {
        const xe = parseInt(re[1]), Ce = A.get(xe);
        Ce !== void 0 && z.set(Ce, [
          re[2] === "1",
          re[3] === "1",
          re[4] === "1",
          re[5] === "1",
          re[6] === "1",
          re[7] === "1"
        ]);
        continue;
      }
      const ie = be.match(/ops\.element\(\s*'elasticBeamColumn'\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)/);
      if (ie) {
        const xe = parseInt(ie[1]), Ce = A.get(parseInt(ie[2])), Te = A.get(parseInt(ie[3]));
        if (Ce !== void 0 && Te !== void 0) {
          const Pe = q.length;
          q.push([
            Ce,
            Te
          ]), U.set(xe, Pe), X.set(Pe, parseFloat(ie[4])), W.set(Pe, parseFloat(ie[5])), K.set(Pe, parseFloat(ie[6])), ve.set(Pe, parseFloat(ie[7])), ee.set(Pe, parseFloat(ie[8])), me.set(Pe, parseFloat(ie[9]));
        }
        continue;
      }
      const he = be.match(/ops\.load\(\s*(\d+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)/);
      if (he) {
        const xe = A.get(parseInt(he[1]));
        xe !== void 0 && J.set(xe, [
          parseFloat(he[2]),
          parseFloat(he[3]),
          parseFloat(he[4]),
          parseFloat(he[5]),
          parseFloat(he[6]),
          parseFloat(he[7])
        ]);
      }
    }
    return {
      nodes: b,
      elements: q,
      nodeInputs: {
        supports: z,
        loads: J
      },
      elementInputs: {
        elasticities: W,
        shearModuli: K,
        areas: X,
        momentsOfInertiaY: ee,
        momentsOfInertiaZ: me,
        torsionalConstants: ve
      }
    };
  }
  function Dl(e) {
    const b = [], q = [], z = /* @__PURE__ */ new Map(), J = /* @__PURE__ */ new Map(), W = /* @__PURE__ */ new Map(), K = /* @__PURE__ */ new Map(), X = /* @__PURE__ */ new Map(), ee = /* @__PURE__ */ new Map(), me = /* @__PURE__ */ new Map(), ve = /* @__PURE__ */ new Map(), A = /* @__PURE__ */ new Map();
    for (const U of e.split(/\r?\n/)) {
      const Se = U.trim();
      if (Se.startsWith("#") || Se.startsWith("//")) continue;
      const be = Se.split(/\s+/);
      if (be[0] === "node" && be.length >= 5) {
        const ce = parseInt(be[1]), re = b.length;
        b.push([
          parseFloat(be[2]),
          parseFloat(be[3]),
          parseFloat(be[4])
        ]), A.set(ce, re);
        continue;
      }
      if (be[0] === "fix" && be.length >= 8) {
        const ce = A.get(parseInt(be[1]));
        ce !== void 0 && z.set(ce, [
          be[2] === "1",
          be[3] === "1",
          be[4] === "1",
          be[5] === "1",
          be[6] === "1",
          be[7] === "1"
        ]);
        continue;
      }
      if (be[0] === "element" && be[1] === "elasticBeamColumn" && be.length >= 12) {
        const ce = A.get(parseInt(be[3])), re = A.get(parseInt(be[4]));
        if (ce !== void 0 && re !== void 0) {
          const ie = q.length;
          q.push([
            ce,
            re
          ]), X.set(ie, parseFloat(be[5])), W.set(ie, parseFloat(be[6])), K.set(ie, parseFloat(be[7])), ve.set(ie, parseFloat(be[8])), ee.set(ie, parseFloat(be[9])), me.set(ie, parseFloat(be[10]));
        }
        continue;
      }
      if (be[0] === "load" && be.length >= 8) {
        const ce = A.get(parseInt(be[1]));
        ce !== void 0 && J.set(ce, [
          parseFloat(be[2]),
          parseFloat(be[3]),
          parseFloat(be[4]),
          parseFloat(be[5]),
          parseFloat(be[6]),
          parseFloat(be[7])
        ]);
      }
    }
    return {
      nodes: b,
      elements: q,
      nodeInputs: {
        supports: z,
        loads: J
      },
      elementInputs: {
        elasticities: W,
        shearModuli: K,
        areas: X,
        momentsOfInertiaY: ee,
        momentsOfInertiaZ: me,
        torsionalConstants: ve
      }
    };
  }
  function Ft(e) {
    const b = [];
    let q = 0, z = false, J = "";
    for (let W = 0; W < e.length; W++) {
      const K = e[W];
      if (K === "'" && (W === 0 || e[W - 1] !== "\\")) {
        z = !z, J += K;
        continue;
      }
      if (z) {
        J += K;
        continue;
      }
      if (K === "(") {
        q++, J += K;
        continue;
      }
      if (K === ")") {
        q--, J += K;
        continue;
      }
      if (K === "," && q === 0) {
        b.push(J.trim()), J = "";
        continue;
      }
      J += K;
    }
    return J.trim() && b.push(J.trim()), b;
  }
  function ga(e, b) {
    const q = Ft(e);
    if (b < q.length) {
      let z = q[b].trim();
      return z.startsWith("'") && z.endsWith("'") && (z = z.slice(1, -1)), z === "$" ? null : z;
    }
    return null;
  }
  function jl(e) {
    const b = {
      schema: "",
      project: "",
      app: ""
    }, q = {}, z = {}, J = e.match(/FILE_SCHEMA\s*\(\s*\(\s*'([^']*)'/i);
    J && (b.schema = J[1]);
    const W = /^#(\d+)\s*=\s*([A-Z][A-Z0-9_]*)\s*\(([\s\S]*?)\)\s*;\s*$/gm;
    let K;
    for (; (K = W.exec(e)) !== null; ) {
      const X = parseInt(K[1]), ee = K[2].toUpperCase();
      q[X] = {
        id: X,
        type: ee,
        args: K[3]
      }, z[ee] || (z[ee] = []), z[ee].push(X);
    }
    if (z.IFCPROJECT) {
      const X = q[z.IFCPROJECT[0]];
      if (X) {
        const ee = ga(X.args, 2);
        ee && (b.project = ee);
      }
    }
    return {
      meta: b,
      entities: q,
      typeIndex: z
    };
  }
  function zt(e, b) {
    const q = b.match(/#(\d+)/);
    return q && e[parseInt(q[1])] || null;
  }
  function ha(e, b) {
    const q = Ft(b.args), z = zt(e, q[0]), J = z ? Wl(e, z) : [
      0,
      0,
      0
    ];
    let W = [
      0,
      0,
      1
    ], K = [
      1,
      0,
      0
    ];
    if (q[1] && q[1] !== "$") {
      const X = zt(e, q[1]);
      X && (W = fa(e, X));
    }
    if (q[2] && q[2] !== "$") {
      const X = zt(e, q[2]);
      X && (K = fa(e, X));
    }
    return {
      origin: J,
      dirZ: W,
      dirX: K
    };
  }
  function Wl(e, b) {
    return b.args.replace(/[()]/g, "").split(",").map((z) => parseFloat(z.trim())).filter((z) => !isNaN(z));
  }
  function fa(e, b) {
    return b.args.replace(/[()]/g, "").split(",").map((z) => parseFloat(z.trim())).filter((z) => !isNaN(z));
  }
  function xa(e, b) {
    const q = Ft(b.args), z = zt(e, q[1]);
    let J = {
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
    if (z && (J = ha(e, z)), q[0] && q[0] !== "$") {
      const W = zt(e, q[0]);
      if (W && W.type === "IFCLOCALPLACEMENT") {
        const K = xa(e, W), X = is(J.origin, K.dirX, rs(K.dirZ, K.dirX), K.dirZ);
        J.origin = [
          K.origin[0] + X[0],
          K.origin[1] + X[1],
          K.origin[2] + X[2]
        ], J.dirZ = is(J.dirZ, K.dirX, rs(K.dirZ, K.dirX), K.dirZ), J.dirX = is(J.dirX, K.dirX, rs(K.dirZ, K.dirX), K.dirZ);
      }
    }
    return J;
  }
  function rs(e, b) {
    return [
      e[1] * b[2] - e[2] * b[1],
      e[2] * b[0] - e[0] * b[2],
      e[0] * b[1] - e[1] * b[0]
    ];
  }
  function is(e, b, q, z) {
    return [
      e[0] * b[0] + e[1] * q[0] + e[2] * z[0],
      e[0] * b[1] + e[1] * q[1] + e[2] * z[1],
      e[0] * b[2] + e[1] * q[2] + e[2] * z[2]
    ];
  }
  const Yl = 0.01;
  function Vl(e) {
    const b = jl(e), { entities: q, typeIndex: z } = b, J = [], W = [], K = /* @__PURE__ */ new Map();
    K.set("Hormigon", {
      E: 2132888792e-2,
      nu: 0.2,
      rho: 2.4
    }), K.set("Acero", {
      E: 2e8,
      nu: 0.3,
      rho: 7.85
    });
    let X = 0, ee = 0;
    function me(re, ie, he) {
      for (const xe of J) {
        const Ce = xe.x - re, Te = xe.y - ie, Pe = xe.z - he;
        if (Math.sqrt(Ce * Ce + Te * Te + Pe * Pe) < Yl) return xe.id;
      }
      return J.push({
        id: X,
        x: re,
        y: ie,
        z: he
      }), X++;
    }
    function ve(re) {
      const ie = ga(re.args, 2) || "", he = z.IFCRELASSOCIATESMATERIAL || [];
      for (const Ce of he) {
        const Te = q[Ce];
        if (!Te) continue;
        const Pe = Ft(Te.args);
        if ((Pe[4] || Pe[3] || "").includes(`#${re.id}`)) {
          const qe = Pe[5] || Pe[4] || "", Ye = zt(q, qe);
          if (Ye) return A(Ye);
        }
      }
      const xe = ie.match(/(\d+)\s*[xX×]\s*(\d+)/);
      return xe ? {
        b: parseFloat(xe[1]) / 100,
        h: parseFloat(xe[2]) / 100,
        name: ie
      } : {
        b: 0.3,
        h: 0.3,
        name: ie || "Default"
      };
    }
    function A(re) {
      const ie = re.type;
      if (ie === "IFCRECTANGLEPROFILEDEF") {
        const he = Ft(re.args), xe = (he[1] || "").replace(/'/g, ""), Ce = parseFloat(he[3]) || 0.3, Te = parseFloat(he[4]) || 0.3;
        return {
          b: Ce,
          h: Te,
          name: xe
        };
      }
      if (ie === "IFCMATERIALPROFILE") {
        const he = Ft(re.args), xe = he[2] || he[1] || "", Ce = zt(q, xe);
        if (Ce) return A(Ce);
      }
      if (ie === "IFCMATERIALPROFILESET") {
        const he = Ft(re.args), Ce = (he[2] || he[1] || "").match(/#(\d+)/);
        if (Ce) {
          const Te = q[parseInt(Ce[1])];
          if (Te) return A(Te);
        }
      }
      if (ie === "IFCMATERIALPROFILESETUSAGE") {
        const xe = Ft(re.args)[0], Ce = zt(q, xe);
        if (Ce) return A(Ce);
      }
      return {
        b: 0.3,
        h: 0.3,
        name: "Unknown"
      };
    }
    function U(re, ie, he, xe) {
      const Ce = z[re] || [];
      for (const Te of Ce) {
        const Pe = q[Te];
        if (!Pe) continue;
        const Je = Ft(Pe.args), qe = Je[5] || Je[4] || "", Ye = zt(q, qe);
        if (!Ye) continue;
        const nt = xa(q, Ye), Ke = ve(Pe);
        let Ze = xe, Ve = null, xt = null;
        const io = Je[6] || Je[5] || "", qt = zt(q, io);
        if (qt) {
          const Jt = Mn(q, qt);
          Jt && (Ze = Jt.depth || xe, Ve = Jt.origin, xt = Jt.direction);
        }
        const Nt = Ve ? Ve[0] : nt.origin[0], To = Ve ? Ve[1] : nt.origin[1], Ao = Ve ? Ve[2] : nt.origin[2], yo = xt || (he === "Z" ? nt.dirZ : nt.dirX), Po = me(Nt, To, Ao), Rt = me(Nt + yo[0] * Ze, To + yo[1] * Ze, Ao + yo[2] * Ze);
        W.push({
          id: ee++,
          type: "frame",
          nodeIds: [
            Po,
            Rt
          ],
          category: ie,
          sectionName: Ke.name,
          b: Ke.b,
          h: Ke.h,
          material: "Hormigon",
          expressID: Te
        });
      }
    }
    U("IFCCOLUMN", "column", "Z", 3), U("IFCBEAM", "beam", "X", 5), U("IFCMEMBER", "diagonal", "X", 4), U("IFCPILE", "pile", "Z", 10), U("IFCSTAIRFLIGHT", "stair", "X", 3), U("IFCRAMPFLIGHT", "ramp", "X", 4);
    function Se(re, ie, he) {
      const xe = z[re] || [];
      for (const Ce of xe) {
        const Te = q[Ce];
        if (!Te) continue;
        const Pe = Ft(Te.args), Je = Pe[5] || Pe[4] || "";
        if (!zt(q, Je)) continue;
        let Ye = he;
        const nt = Pe[6] || Pe[5] || "", Ke = zt(q, nt);
        Ke && (Ye = Gl(q, Ke) || he);
        const Ze = ie === "slab" ? `Losa e=${(Ye * 100).toFixed(0)}cm` : ie === "wall" ? `Muro e=${(Ye * 100).toFixed(0)}cm` : ie === "footing" ? `Zapata e=${(Ye * 100).toFixed(0)}cm` : `${ie} e=${(Ye * 100).toFixed(0)}cm`;
        W.push({
          id: ee++,
          type: "shell",
          nodeIds: [],
          category: ie,
          sectionName: Ze,
          b: Ye,
          h: Ye,
          material: "Hormigon",
          expressID: Ce
        });
      }
    }
    Se("IFCSLAB", "slab", 0.15), Se("IFCWALL", "wall", 0.2), Se("IFCWALLSTANDARDCASE", "wall", 0.2), Se("IFCFOOTING", "footing", 0.5), Se("IFCROOF", "slab", 0.12);
    const be = [], ce = z.IFCBUILDINGSTOREY || [];
    for (const re of ce) {
      const ie = q[re];
      if (!ie) continue;
      const he = Ft(ie.args), xe = (he[2] || "").replace(/'/g, ""), Ce = parseFloat(he[9]) || 0;
      be.push({
        name: xe,
        elevation: Ce
      });
    }
    return be.sort((re, ie) => re.elevation - ie.elevation), {
      nodes: J,
      elements: W,
      materials: K,
      levels: be,
      projectName: b.meta.project,
      schema: b.meta.schema
    };
  }
  function Mn(e, b) {
    const q = Ft(b.args);
    for (const z of q) {
      const J = z.match(/#(\d+)/g) || [];
      for (const W of J) {
        const K = parseInt(W.replace("#", "")), X = e[K];
        if (X) {
          if (X.type === "IFCEXTRUDEDAREASOLID") {
            const ee = Ft(X.args), me = parseFloat(ee[3]) || 0, ve = zt(e, ee[1]);
            let A = [
              0,
              0,
              0
            ];
            ve && (A = ha(e, ve).origin);
            const U = zt(e, ee[2]);
            let Se = [
              0,
              0,
              1
            ];
            if (U && U.type === "IFCDIRECTION") {
              const be = U.args.match(/[-+]?\d*\.?\d+(?:[eE][-+]?\d+)?/g);
              be && be.length >= 3 && (Se = be.map(Number));
            }
            return {
              depth: me,
              origin: A,
              direction: Se
            };
          }
          if (X.type === "IFCSHAPEREPRESENTATION") {
            const ee = Mn(e, X);
            if (ee) return ee;
          }
          if (X.type === "IFCMAPPEDITEM") {
            const ee = Ft(X.args), me = zt(e, ee[0]);
            if (me && me.type === "IFCREPRESENTATIONMAP") {
              const ve = Ft(me.args), A = zt(e, ve[1]);
              if (A) {
                const U = Mn(e, A);
                if (U) return U;
              }
            }
          }
        }
      }
    }
    return null;
  }
  function Gl(e, b) {
    const q = Mn(e, b);
    return q ? q.depth : null;
  }
  const va = [
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
  ], ya = [
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
  ], $a = /* @__PURE__ */ new Map();
  for (const [e, b] of va) $a.set(e, b);
  function Xl(e) {
    return $a.get(e) ?? "other";
  }
  new Set(ya);
  async function Jl(e, b) {
    var _a, _b;
    const q = window.WebIFC;
    if (!q) throw new Error("web-ifc no disponible. Verifica que web-ifc-api-iife.js se carg\xF3.");
    const z = new q.IfcAPI(), J = window.location.pathname.replace(/\/[^/]*$/, "/");
    z.SetWasmPath(J), await z.Init();
    const W = z.OpenModel(new Uint8Array(b)), K = /* @__PURE__ */ new Map(), X = /* @__PURE__ */ new Map(), ee = {
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
    for (const [Se] of va) {
      const be = Xl(Se);
      try {
        const ce = z.GetLineIDsWithType(W, Se);
        for (let re = 0; re < ce.size(); re++) {
          const ie = ce.get(re);
          K.set(ie, be);
          let he = "";
          try {
            const xe = z.GetLine(W, ie);
            he = ((_a = xe == null ? void 0 : xe.Name) == null ? void 0 : _a.value) || ((_b = xe == null ? void 0 : xe.Description) == null ? void 0 : _b.value) || "";
          } catch {
          }
          X.set(ie, {
            expressID: ie,
            category: be,
            name: he,
            typeName: ee[Se] || "Otro"
          });
        }
      } catch {
      }
    }
    const me = /* @__PURE__ */ new Map();
    for (const Se of ya) {
      const be = new nn();
      be.name = `ifc-${Se}`, e.add(be), me.set(Se, be);
    }
    const ve = new Za();
    let A = 0;
    const U = new sa({
      color: 13421772,
      transparent: true,
      opacity: 0.9,
      side: aa
    });
    return z.StreamAllMeshes(W, (Se) => {
      const be = K.get(Se.expressID) ?? "other", ce = me.get(be), re = Se.geometries;
      for (let ie = 0; ie < re.size(); ie++) {
        const he = re.get(ie), xe = z.GetGeometry(W, he.geometryExpressID), Ce = z.GetVertexArray(xe.GetVertexData(), xe.GetVertexDataSize()), Te = z.GetIndexArray(xe.GetIndexData(), xe.GetIndexDataSize()), Pe = new Dt(), Je = new Float32Array(Ce.length / 2), qe = new Float32Array(Ce.length / 2);
        for (let Ve = 0; Ve < Ce.length; Ve += 6) {
          const xt = Ve / 2;
          Je[xt] = Ce[Ve], Je[xt + 1] = Ce[Ve + 1], Je[xt + 2] = Ce[Ve + 2], qe[xt] = Ce[Ve + 3], qe[xt + 1] = Ce[Ve + 4], qe[xt + 2] = Ce[Ve + 5];
        }
        Pe.setAttribute("position", new yn(Je, 3)), Pe.setAttribute("normal", new yn(qe, 3)), Pe.setIndex(new yn(new Uint32Array(Te), 1));
        const Ye = new Qa();
        Ye.fromArray(he.flatTransformation);
        let nt;
        const Ke = he.color;
        Ke && (Ke.x !== 1 || Ke.y !== 1 || Ke.z !== 1) ? nt = new sa({
          color: new el(Ke.x, Ke.y, Ke.z),
          transparent: Ke.w < 1,
          opacity: Ke.w,
          side: aa
        }) : nt = U, nt._origOpacity = nt.opacity;
        const Ze = new ba(Pe, nt);
        Ze.applyMatrix4(Ye), Ze.userData.expressID = Se.expressID, Ze.userData.category = be, ce.add(Ze), ve.expandByObject(Ze), A++, xe.delete();
      }
    }), z.CloseModel(W), {
      meshCount: A,
      bbox: ve,
      detailCategories: me,
      elementInfo: X
    };
  }
  ma = jo.state(false);
  lr = function(e) {
    e.nodeInputs || (e.nodeInputs = jo.state({})), e.elementInputs || (e.elementInputs = jo.state({})), e.deformOutputs || (e.deformOutputs = jo.state({})), e.analyzeOutputs || (e.analyzeOutputs = jo.state({}));
    let b = "tonf", q = "m", z = zo(b, q), J = {
      forceId: "kgf",
      lengthId: "cm",
      label: "kgf/cm\xB2"
    };
    const W = {
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
    }, K = /* @__PURE__ */ new Set(), X = /* @__PURE__ */ new Set();
    let ee = false;
    const me = /* @__PURE__ */ new Set(), ve = /* @__PURE__ */ new Map();
    let A = "", U = {}, Se = null, be = "", ce = [], re = [], ie = [], he = /* @__PURE__ */ new Set(), xe = /* @__PURE__ */ new Set(), Ce = /* @__PURE__ */ new Set(), Te = /* @__PURE__ */ new Map(), Pe = /* @__PURE__ */ new Map(), Je = null, qe = [], Ye = 0.2, nt = 2, Ke = 2, Ze = false, Ve = 2, xt = "x", io = /* @__PURE__ */ new Set(), qt = true, Nt = 0.15, To = 2, Ao = 2, yo = /* @__PURE__ */ new Set(), Po = false, Rt = "perimeter";
    const Jt = () => ({
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
    }), wa = (t, o) => ({
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
      }, Jt),
      vigasY: Array.from({
        length: o
      }, Jt)
    }), ke = {
      colMat: 0,
      vigaMat: 0,
      colShape: 0,
      fc: 20594,
      steelColType: 0,
      steelVigaType: 0,
      perFloor: []
    };
    let Lt = 0, jt = 3, Wt = false, Mt = 0, ut = null, co = 0, ao = [], an = 1, ln = true;
    const Vo = fl();
    Vo.div.style.display = "none";
    function En() {
      const t = bn()[A];
      return t && t[Lt] ? t[Lt].dofs : [
        true,
        true,
        true,
        true,
        true,
        true
      ];
    }
    let Ge = [], Ue = [], po = 0, kt = [], Yt = null;
    function kn() {
      if (!Yt) return;
      const t = De();
      t && t.scene.remove(Yt), Yt.traverse((o) => {
        if (o.geometry && o.geometry.dispose(), o.material) {
          const n = o.material;
          n.map && n.map.dispose(), n.dispose();
        }
      }), Yt = null;
    }
    function fs(t, o, n, l, s) {
      kn();
      const f = De();
      if (!f) return;
      Yt = new nn(), Yt.name = "refGrid";
      const a = Math.min(...t), i = Math.max(...t), d = Math.min(...o), r = Math.max(...o), c = Math.max(...n), m = i - a || 1, w = r - d || 1, M = 3359829, y = 2241348;
      for (const g of n) {
        for (const I of o) {
          const k = new Dt().setFromPoints([
            new Ee(a, g, I),
            new Ee(i, g, I)
          ]), $ = new Bo({
            color: M,
            dashSize: m * 0.015,
            gapSize: m * 0.01,
            transparent: true,
            opacity: 0.25
          }), T = new ko(k, $);
          T.computeLineDistances(), T.renderOrder = -10, Yt.add(T);
        }
        for (const I of t) {
          const k = new Dt().setFromPoints([
            new Ee(I, g, d),
            new Ee(I, g, r)
          ]), $ = new Bo({
            color: M,
            dashSize: w * 0.015,
            gapSize: w * 0.01,
            transparent: true,
            opacity: 0.25
          }), T = new ko(k, $);
          T.computeLineDistances(), T.renderOrder = -10, Yt.add(T);
        }
      }
      for (const g of t) for (const I of o) {
        const k = new Dt().setFromPoints([
          new Ee(g, 0, I),
          new Ee(g, c, I)
        ]), $ = new Bo({
          color: y,
          dashSize: c * 0.01,
          gapSize: c * 8e-3,
          transparent: true,
          opacity: 0.15
        }), T = new ko(k, $);
        T.computeLineDistances(), T.renderOrder = -10, Yt.add(T);
      }
      const p = Math.min(m, w) * 0.015;
      for (const g of n) for (const I of t) for (const k of o) {
        const $ = [
          new Ee(I - p, g, k),
          new Ee(I + p, g, k),
          new Ee(I, g, k - p),
          new Ee(I, g, k + p)
        ], T = new Dt().setFromPoints($), O = new Do({
          color: 5596791,
          transparent: true,
          opacity: 0.4
        }), h = new Ho(T, O);
        h.renderOrder = -5, Yt.add(h);
      }
      Yt.traverse((g) => {
        g.material && (Array.isArray(g.material) ? g.material.forEach((I) => {
          I.clippingPlanes = [];
        }) : g.material.clippingPlanes = []);
      }), f.scene.add(Yt), f.render();
    }
    let ht = null;
    function ms() {
      if (!ht) return;
      const t = De();
      t && t.scene.remove(ht), ht.traverse((o) => {
        if (o.geometry && o.geometry.dispose(), o.material) {
          const n = o.material;
          n.map && n.map.dispose(), n.dispose();
        }
      }), ht = null;
    }
    function Go(t, o, n, l, s) {
      ms();
      const f = De();
      if (!f) return;
      ht = new nn(), ht.name = "gridAxes";
      const a = Math.min(...t), i = Math.max(...t), d = Math.min(...o), r = Math.max(...o), c = i - a || 1, m = r - d || 1, w = Math.max(c, m), M = w * 0.08, y = l || t.map((h, u) => String.fromCharCode(65 + u)), p = s || o.map((h, u) => String(u + 1)), g = w * 0.018, I = o.length <= 1, k = 8947848;
      for (let h = 0; h < t.length; h++) {
        const u = t[h];
        if (I) {
          const E = -M - g * 1.5;
          Cn(u, 0, 0, u, 0, E + g, k, ht), Tn(y[h] || `${h}`, u, 0, E, g, ht);
        } else {
          const E = d - M - g * 1.5;
          Cn(u, d, 0, u, E + g, 0, k, ht), Tn(y[h] || `${h}`, u, E, 0, g, ht);
        }
      }
      if (!I) for (let h = 0; h < o.length; h++) {
        const u = o[h], E = a - M - g * 1.5;
        Cn(a, u, 0, E + g, u, 0, k, ht), Tn(p[h] || `${h}`, E, u, 0, g, ht);
      }
      const $ = g * 1.8, T = M * 1.2, O = M * 1.2;
      for (let h = 0; h < t.length - 1; h++) {
        const u = t[h], E = t[h + 1], P = Math.abs(E - u), R = (u + E) / 2, H = `${P.toFixed(2)} m`;
        I ? (zn(H, R, 0, -T, $, ht), Ln(u, 0, -T * 0.7, E, 0, -T * 0.7, 16763904, ht)) : (zn(H, R, d - O, 0, $, ht), Ln(u, d - O * 0.7, 0, E, d - O * 0.7, 0, 16763904, ht));
      }
      if (!I) for (let h = 0; h < o.length - 1; h++) {
        const u = o[h], E = o[h + 1], P = Math.abs(E - u), R = (u + E) / 2, H = `${P.toFixed(2)} m`;
        zn(H, a - T, R, 0, $, ht), Ln(a - T * 0.7, u, 0, a - T * 0.7, E, 0, 16763904, ht);
      }
      ht.traverse((h) => {
        h.material && (Array.isArray(h.material) ? h.material.forEach((u) => {
          u.clippingPlanes = [];
        }) : h.material.clippingPlanes = []);
      }), f.scene.add(ht), f.render();
    }
    let Ct = null;
    function bs() {
      if (!Ct) return;
      const t = De();
      t && t.scene.remove(Ct), Ct.traverse((o) => {
        if (o.geometry && o.geometry.dispose(), o.material) {
          const n = o.material;
          n.map && n.map.dispose(), n.dispose();
        }
      }), Ct = null;
    }
    function In(t, o, n) {
      if (bs(), t.length === 0) return;
      const l = De();
      if (!l) return;
      Ct = new nn(), Ct.name = "storyLevels";
      const s = Math.min(...o), f = Math.max(...o), a = Math.min(...n), i = Math.max(...n), d = f - s || 1, r = i - a || 1, c = Math.max(d, r), m = c * 0.06, w = n.length <= 1, M = 4491519, y = c * 0.015;
      for (const p of t) {
        const g = p.elev;
        w ? (Xo(s - m, 0, g, f + m, 0, g, M, Ct), gs(p.name, f + m * 1.5, 0, g, y, Ct)) : (Xo(s, a, g, f, a, g, M, Ct), Xo(f, a, g, f, i, g, M, Ct), Xo(f, i, g, s, i, g, M, Ct), Xo(s, i, g, s, a, g, M, Ct), gs(p.name, s - m * 1.5, a, g, y, Ct));
      }
      Ct.traverse((p) => {
        p.material && (Array.isArray(p.material) ? p.material.forEach((g) => {
          g.clippingPlanes = [];
        }) : p.material.clippingPlanes = []);
      }), l.scene.add(Ct), l.render();
    }
    function Xo(t, o, n, l, s, f, a, i) {
      const d = Math.sqrt((l - t) ** 2 + (s - o) ** 2 + (f - n) ** 2) || 1, r = new Dt().setFromPoints([
        new Ee(t, o, n),
        new Ee(l, s, f)
      ]), c = new Bo({
        color: a,
        dashSize: d * 0.02,
        gapSize: d * 0.01,
        transparent: true,
        opacity: 0.5
      }), m = new ko(r, c);
      m.computeLineDistances(), m.renderOrder = 50, i.add(m);
    }
    function gs(t, o, n, l, s, f) {
      const a = document.createElement("canvas"), i = 512, d = 64;
      a.width = i, a.height = d;
      const r = a.getContext("2d");
      r.fillStyle = "rgba(30,60,120,0.8)";
      const c = 8;
      r.beginPath(), r.moveTo(c, 0), r.lineTo(i - c, 0), r.quadraticCurveTo(i, 0, i, c), r.lineTo(i, d - c), r.quadraticCurveTo(i, d, i - c, d), r.lineTo(c, d), r.quadraticCurveTo(0, d, 0, d - c), r.lineTo(0, c), r.quadraticCurveTo(0, 0, c, 0), r.closePath(), r.fill(), r.fillStyle = "#88bbff", r.font = "bold 38px monospace", r.textAlign = "center", r.textBaseline = "middle", r.fillText(t, i / 2, d / 2);
      const m = new Zn(a);
      m.needsUpdate = true;
      const w = new mn({
        map: m,
        depthTest: false,
        transparent: true
      }), M = new fn(w);
      M.position.set(o, n, l), M.scale.set(s * 8, s, 1), M.renderOrder = 101, f.add(M);
    }
    function zn(t, o, n, l, s, f) {
      const a = document.createElement("canvas"), i = 256, d = 64;
      a.width = i, a.height = d;
      const r = a.getContext("2d");
      r.fillStyle = "rgba(0,0,0,0.75)";
      const c = 8;
      r.beginPath(), r.moveTo(c, 0), r.lineTo(i - c, 0), r.quadraticCurveTo(i, 0, i, c), r.lineTo(i, d - c), r.quadraticCurveTo(i, d, i - c, d), r.lineTo(c, d), r.quadraticCurveTo(0, d, 0, d - c), r.lineTo(0, c), r.quadraticCurveTo(0, 0, c, 0), r.closePath(), r.fill(), r.fillStyle = "#ffcc00", r.font = "bold 36px monospace", r.textAlign = "center", r.textBaseline = "middle", r.fillText(t, i / 2, d / 2);
      const m = new rl(a);
      m.minFilter = il;
      const w = new mn({
        map: m,
        transparent: true,
        depthTest: false
      }), M = new fn(w);
      M.position.set(o, n, l);
      const y = i / d;
      M.scale.set(s * y, s, 1), M.renderOrder = 999, f.add(M);
    }
    function Ln(t, o, n, l, s, f, a, i) {
      const d = [
        new Ee(t, o, n),
        new Ee(l, s, f)
      ], r = new Dt().setFromPoints(d), c = new Do({
        color: a,
        transparent: true,
        opacity: 0.6,
        depthTest: false
      }), m = new ko(r, c);
      m.renderOrder = 998, i.add(m);
    }
    function Cn(t, o, n, l, s, f, a, i) {
      const d = new Dt().setFromPoints([
        new Ee(t, o, n),
        new Ee(l, s, f)
      ]), r = new Bo({
        color: a,
        dashSize: 0.15 * Math.max(Math.abs(l - t), Math.abs(s - o), Math.abs(f - n), 0.1),
        gapSize: 0.1 * Math.max(Math.abs(l - t), Math.abs(s - o), Math.abs(f - n), 0.1),
        transparent: true,
        opacity: 0.6
      }), c = new ko(d, r);
      c.computeLineDistances(), i.add(c);
    }
    function Tn(t, o, n, l, s, f) {
      const a = document.createElement("canvas"), i = 128;
      a.width = i, a.height = i;
      const d = a.getContext("2d");
      d.beginPath(), d.arc(i / 2, i / 2, i * 0.42, 0, Math.PI * 2), d.fillStyle = "rgba(255,255,255,0.9)", d.fill(), d.lineWidth = i * 0.04, d.strokeStyle = "#555", d.stroke(), d.fillStyle = "#222", d.font = `bold ${i * 0.45}px Arial`, d.textAlign = "center", d.textBaseline = "middle", d.fillText(t, i / 2, i / 2 + i * 0.02);
      const r = new Zn(a);
      r.needsUpdate = true;
      const c = new mn({
        map: r,
        depthTest: false,
        transparent: true
      }), m = new fn(c);
      m.position.set(o, n, l);
      const w = s * 2;
      m.scale.set(w, w, 1), m.renderOrder = 100, f.add(m);
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
        ]), e.nodes.val = l, console.log(`Node ${s} at (${t}, ${o}, ${n})`), Ne(), s;
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
          const f = l > t ? l - 1 : l, a = s > t ? s - 1 : s;
          return l === t || s === t ? null : [
            f,
            a
          ];
        }).filter((l) => l !== null);
        e.nodes.val = o, e.elements.val = n, console.log(`Node ${t} removed`), Ne();
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
        ]), e.elements.val = n, console.log(`Element ${l}: node ${t} -> node ${o}`), Ne(), l;
      },
      removeFrame(t) {
        const o = [
          ...e.elements.val
        ];
        if (t < 0 || t >= o.length) {
          console.error(`Element ${t} not found`);
          return;
        }
        o.splice(t, 1), e.elements.val = o, console.log(`Element ${t} removed`), Ne();
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
        ]), n.supports = l, e.nodeInputs.val = n, console.log(`Support added at node ${t}`), Ne();
      },
      removeSupport(t) {
        if (!e.nodeInputs) return;
        const o = {
          ...e.nodeInputs.val
        }, n = new Map(o.supports || []);
        n.delete(t), o.supports = n, e.nodeInputs.val = o, console.log(`Support removed from node ${t}`), Ne();
      },
      addLoad(t, o) {
        if (!e.nodeInputs) return;
        const n = {
          ...e.nodeInputs.val
        }, l = new Map(n.loads || []);
        l.set(t, o), n.loads = l, e.nodeInputs.val = n, console.log(`Load added at node ${t}: [${o.join(", ")}]`), Ne();
      },
      removeLoad(t) {
        if (!e.nodeInputs) return;
        const o = {
          ...e.nodeInputs.val
        }, n = new Map(o.loads || []);
        n.delete(t), o.loads = n, e.nodeInputs.val = o, console.log(`Load removed from node ${t}`), Ne();
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
        const n = ye.querySelectorAll("input[type=checkbox]");
        for (const l of n) {
          const s = ((_b = (_a2 = l.closest("label")) == null ? void 0 : _a2.textContent) == null ? void 0 : _b.trim()) || ((_d = (_c = l.parentElement) == null ? void 0 : _c.textContent) == null ? void 0 : _d.trim()) || "", f = l.id || "";
          if (s.toLowerCase().includes(t.toLowerCase()) || f.toLowerCase().includes(t.toLowerCase())) {
            const a = l;
            return a.checked = o !== void 0 ? o : !a.checked, a.dispatchEvent(new Event("change", {
              bubbles: true
            })), console.log(`${s || f}: ${a.checked}`), a.checked;
          }
        }
        console.log(`Setting "${t}" not found. Use cad.settings() to list.`);
      },
      settings() {
        const t = ye.querySelectorAll("input[type=checkbox]"), o = {};
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
          kn(), console.log("Reference grid cleared");
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
        const f = [
          0
        ];
        for (const a of n || [
          3
        ]) f.push(f[f.length - 1] + a);
        fs(l, s, f), Ge = l.map((a, i) => ({
          label: String.fromCharCode(65 + i),
          coord: a
        })), Ue = s.map((a, i) => ({
          label: `${i + 1}`,
          coord: a
        })), po = f[f.length - 1], kt = f.map((a, i) => ({
          label: i === 0 ? "Base" : `P${i}`,
          elev: a
        })), Go(Ge.map((a) => a.coord), Ue.map((a) => a.coord), po, Ge.map((a) => a.label), Ue.map((a) => a.label));
        {
          const a = f.map((i, d) => ({
            name: d === 0 ? "Base" : `P${d}`,
            height: d > 0 ? i - f[d - 1] : 0,
            elev: i
          }));
          In(a, Ge.map((i) => i.coord), Ue.map((i) => i.coord));
        }
        return console.log(`RefGrid: X=[${l}] Z=[${s}] Y=[${f}]`), {
          xCoords: l,
          zCoords: s,
          yLevels: f
        };
      },
      build(t) {
        var _a2;
        if (Ge.length === 0 || kt.length < 2) {
          console.log("Error: call cad.refgrid() first to define axes and levels");
          return;
        }
        const o = (t == null ? void 0 : t.col) || "40x40", n = (t == null ? void 0 : t.viga) || "30x40", l = (t == null ? void 0 : t.fc) || 210, [s, f] = o.split("x").map((_) => parseFloat(_) / 100), [a, i] = n.split("x").map((_) => parseFloat(_) / 100), d = Ge.map((_) => _.coord), r = Ue.map((_) => _.coord), c = kt.map((_) => _.elev), m = d.length, w = r.length, M = c.length, y = M - 1, p = [], g = {};
        for (let _ = 0; _ < M; _++) for (let se = 0; se < w; se++) for (let G = 0; G < m; G++) g[`${G},${se},${_}`] = p.length, p.push([
          d[G],
          r[se],
          c[_]
        ]);
        const I = [], k = /* @__PURE__ */ new Set(), $ = /* @__PURE__ */ new Set(), T = /* @__PURE__ */ new Map();
        for (let _ = 0; _ < y; _++) for (let se = 0; se < w; se++) for (let G = 0; G < m; G++) {
          const ae = I.length;
          I.push([
            g[`${G},${se},${_}`],
            g[`${G},${se},${_ + 1}`]
          ]), k.add(ae), T.set(ae, _);
        }
        for (let _ = 1; _ < M; _++) for (let se = 0; se < w; se++) for (let G = 0; G < m - 1; G++) {
          const ae = I.length;
          I.push([
            g[`${G},${se},${_}`],
            g[`${G + 1},${se},${_}`]
          ]), $.add(ae), T.set(ae, _ - 1);
        }
        for (let _ = 1; _ < M; _++) for (let se = 0; se < m; se++) for (let G = 0; G < w - 1; G++) {
          const ae = I.length;
          I.push([
            g[`${se},${G},${_}`],
            g[`${se},${G + 1},${_}`]
          ]), $.add(ae), T.set(ae, _ - 1);
        }
        const O = ((_a2 = t == null ? void 0 : t.braces) == null ? void 0 : _a2.toLowerCase()) || "", h = /* @__PURE__ */ new Set();
        if (O) {
          const _ = O === "all" || O === "x" || O === "perimeter", se = O === "all" || O === "y" || O === "perimeter";
          for (let G = 0; G < y; G++) {
            if (_) for (let ae = 0; ae < w; ae++) {
              if (O === "perimeter" && ae !== 0 && ae !== w - 1) continue;
              const Y = Math.floor((m - 1) / 2);
              for (let le = 0; le < m - 1; le++) {
                if (O === "perimeter" && le !== Y) continue;
                const ue = I.length;
                I.push([
                  g[`${le},${ae},${G}`],
                  g[`${le + 1},${ae},${G + 1}`]
                ]), h.add(ue), T.set(ue, G);
                const Z = I.length;
                I.push([
                  g[`${le + 1},${ae},${G}`],
                  g[`${le},${ae},${G + 1}`]
                ]), h.add(Z), T.set(Z, G);
              }
            }
            if (se) for (let ae = 0; ae < m; ae++) {
              if (O === "perimeter" && ae !== 0 && ae !== m - 1) continue;
              const Y = Math.floor((w - 1) / 2);
              for (let le = 0; le < w - 1; le++) {
                if (O === "perimeter" && le !== Y) continue;
                const ue = I.length;
                I.push([
                  g[`${ae},${le},${G}`],
                  g[`${ae},${le + 1},${G + 1}`]
                ]), h.add(ue), T.set(ue, G);
                const Z = I.length;
                I.push([
                  g[`${ae},${le + 1},${G}`],
                  g[`${ae},${le},${G + 1}`]
                ]), h.add(Z), T.set(Z, G);
              }
            }
          }
        }
        const u = 15100 * Math.sqrt(l) * 10, E = u / (2 * (1 + 0.2)), P = s * f, R = s * f ** 3 / 12, H = f * s ** 3 / 12, x = s * f * (s ** 2 + f ** 2) / 12, S = a * i, v = a * i ** 3 / 12, L = i * a ** 3 / 12, N = a * i * (a ** 2 + i ** 2) / 12, D = /* @__PURE__ */ new Map(), V = /* @__PURE__ */ new Map(), j = /* @__PURE__ */ new Map(), B = /* @__PURE__ */ new Map(), te = /* @__PURE__ */ new Map(), oe = /* @__PURE__ */ new Map(), de = /* @__PURE__ */ new Map();
        for (let _ = 0; _ < I.length; _++) D.set(_, u), V.set(_, E), k.has(_) ? (j.set(_, P), B.set(_, R), te.set(_, H), oe.set(_, x), de.set(_, {
          type: "rect",
          b: s,
          h: f,
          name: `COL${o}`
        })) : h.has(_) ? (j.set(_, P), B.set(_, R), te.set(_, H), oe.set(_, x), de.set(_, {
          type: "rect",
          b: s,
          h: f,
          name: `BR${o}`
        })) : (j.set(_, S), B.set(_, L), te.set(_, v), oe.set(_, N), de.set(_, {
          type: "rect",
          b: a,
          h: i,
          name: `V${n}`
        }));
        const ge = /* @__PURE__ */ new Map();
        for (let _ = 0; _ < w; _++) for (let se = 0; se < m; se++) ge.set(g[`${se},${_},0`], [
          true,
          true,
          true,
          true,
          true,
          true
        ]);
        return e.nodes.val = p, e.elements.val = I, e.nodeInputs.val = {
          supports: ge,
          loads: /* @__PURE__ */ new Map()
        }, e.elementInputs.val = {
          elasticities: D,
          shearModuli: V,
          areas: j,
          momentsOfInertiaZ: B,
          momentsOfInertiaY: te,
          torsionalConstants: oe,
          sectionShapes: de
        }, he = k, xe = $, Te = T, console.log(`Built: ${p.length} nodes, ${I.length} elements (${k.size} cols, ${$.size} beams, ${h.size} braces)`), console.log(`  Col: ${o}, Viga: ${n}, f'c=${l}${O ? `, braces=${O}` : ""}`), {
          nodes: p.length,
          elements: I.length
        };
      },
      addCol(t, o, n) {
        var _a2, _b, _c, _d, _e2, _f;
        const l = Ge.findIndex((y) => y.label === t), s = Ue.findIndex((y) => y.label === o);
        if (l < 0) {
          console.log(`Axis "${t}" not found. Available: ${Ge.map((y) => y.label)}`);
          return;
        }
        if (s < 0) {
          console.log(`Axis "${o}" not found. Available: ${Ue.map((y) => y.label)}`);
          return;
        }
        const f = Ge[l].coord, a = Ue[s].coord, i = [
          ...e.nodes.val
        ], d = [
          ...((_a2 = e.elements) == null ? void 0 : _a2.val) || []
        ];
        (_b = e.elementInputs) == null ? void 0 : _b.val;
        const r = (y) => {
          const p = i.findIndex((g) => Math.abs(g[0] - f) < 1e-3 && Math.abs(g[1] - a) < 1e-3 && Math.abs(g[2] - y) < 1e-3);
          return p >= 0 ? p : (i.push([
            f,
            a,
            y
          ]), i.length - 1);
        }, c = n ? [
          kt.findIndex((y) => y.label === n)
        ] : Array.from({
          length: kt.length - 1
        }, (y, p) => p + 1), m = new Map(((_d = (_c = e.nodeInputs) == null ? void 0 : _c.val) == null ? void 0 : _d.supports) || []), w = r(kt[0].elev);
        m.has(w) || m.set(w, [
          true,
          true,
          true,
          true,
          true,
          true
        ]);
        let M = 0;
        for (const y of c) {
          if (y < 1 || y >= kt.length) continue;
          const p = r(kt[y - 1].elev), g = r(kt[y].elev);
          d.push([
            p,
            g
          ]), he.add(d.length - 1), Te.set(d.length - 1, y - 1), M++;
        }
        return e.nodes.val = i, e.elements.val = d, e.nodeInputs.val = {
          ...e.nodeInputs.val,
          supports: m,
          loads: ((_f = (_e2 = e.nodeInputs) == null ? void 0 : _e2.val) == null ? void 0 : _f.loads) || /* @__PURE__ */ new Map()
        }, console.log(`Added ${M} column(s) at ${t}-${o}${n ? ` story ${n}` : ""}`), M;
      },
      addBeam(t, o, n, l, s) {
        var _a2;
        const f = Ge.findIndex((T) => T.label === t), a = Ue.findIndex((T) => T.label === o), i = Ge.findIndex((T) => T.label === n), d = Ue.findIndex((T) => T.label === l), r = kt.findIndex((T) => T.label === s);
        if (f < 0 || a < 0 || i < 0 || d < 0) {
          console.log("Axis not found");
          return;
        }
        if (r < 1) {
          console.log(`Story "${s}" not found. Available: ${kt.filter((T) => T.label !== "Base").map((T) => T.label)}`);
          return;
        }
        const c = Ge[f].coord, m = Ue[a].coord, w = Ge[i].coord, M = Ue[d].coord, y = kt[r].elev, p = [
          ...e.nodes.val
        ], g = [
          ...((_a2 = e.elements) == null ? void 0 : _a2.val) || []
        ], I = (T, O, h) => {
          const u = p.findIndex((E) => Math.abs(E[0] - T) < 1e-3 && Math.abs(E[1] - O) < 1e-3 && Math.abs(E[2] - h) < 1e-3);
          return u >= 0 ? u : (p.push([
            T,
            O,
            h
          ]), p.length - 1);
        }, k = I(c, m, y), $ = I(w, M, y);
        return g.push([
          k,
          $
        ]), xe.add(g.length - 1), Te.set(g.length - 1, r - 1), e.nodes.val = p, e.elements.val = g, console.log(`Added beam ${t}-${o} \u2192 ${n}-${l} at ${s}`), g.length - 1;
      },
      addBrace(t, o, n, l, s, f) {
        var _a2;
        const a = Ge.findIndex((u) => u.label === t), i = Ue.findIndex((u) => u.label === o), d = kt.findIndex((u) => u.label === n), r = Ge.findIndex((u) => u.label === l), c = Ue.findIndex((u) => u.label === s), m = kt.findIndex((u) => u.label === f);
        if (a < 0 || i < 0 || d < 0) {
          console.log(`Point 1 not found: ${t}-${o}@${n}`);
          return;
        }
        if (r < 0 || c < 0 || m < 0) {
          console.log(`Point 2 not found: ${l}-${s}@${f}`);
          return;
        }
        const w = Ge[a].coord, M = Ue[i].coord, y = kt[d].elev, p = Ge[r].coord, g = Ue[c].coord, I = kt[m].elev, k = [
          ...e.nodes.val
        ], $ = [
          ...((_a2 = e.elements) == null ? void 0 : _a2.val) || []
        ], T = (u, E, P) => {
          const R = k.findIndex((H) => Math.abs(H[0] - u) < 1e-3 && Math.abs(H[1] - E) < 1e-3 && Math.abs(H[2] - P) < 1e-3);
          return R >= 0 ? R : (k.push([
            u,
            E,
            P
          ]), k.length - 1);
        }, O = T(w, M, y), h = T(p, g, I);
        return $.push([
          O,
          h
        ]), Te.set($.length - 1, Math.min(d, m)), e.nodes.val = k, e.elements.val = $, console.log(`Added brace ${t}-${o}@${n} \u2192 ${l}-${s}@${f}`), $.length - 1;
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
        _e.clear();
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
        ], s = (t == null ? void 0 : t.col) || "40x40", f = (t == null ? void 0 : t.viga) || "30x40", a = (t == null ? void 0 : t.fc) || 210, [i, d] = s.split("x").map((Y) => parseFloat(Y) / 100), [r, c] = f.split("x").map((Y) => parseFloat(Y) / 100), m = [
          0
        ];
        for (const Y of o) m.push(m[m.length - 1] + Y);
        const w = [
          0
        ];
        for (const Y of n) w.push(w[w.length - 1] + Y);
        const M = [
          0
        ];
        for (const Y of l) M.push(M[M.length - 1] + Y);
        const y = m.length, p = w.length, g = M.length, I = l.length, k = [], $ = {};
        for (let Y = 0; Y < g; Y++) for (let le = 0; le < p; le++) for (let ue = 0; ue < y; ue++) $[`${ue},${Y},${le}`] = k.length, k.push([
          m[ue],
          M[Y],
          w[le]
        ]);
        const T = [], O = /* @__PURE__ */ new Set(), h = /* @__PURE__ */ new Set(), u = /* @__PURE__ */ new Map();
        for (let Y = 0; Y < I; Y++) for (let le = 0; le < p; le++) for (let ue = 0; ue < y; ue++) {
          const Z = T.length;
          T.push([
            $[`${ue},${Y},${le}`],
            $[`${ue},${Y + 1},${le}`]
          ]), O.add(Z), u.set(Z, Y);
        }
        for (let Y = 1; Y < g; Y++) for (let le = 0; le < p; le++) for (let ue = 0; ue < y - 1; ue++) {
          const Z = T.length;
          T.push([
            $[`${ue},${Y},${le}`],
            $[`${ue + 1},${Y},${le}`]
          ]), h.add(Z), u.set(Z, Y - 1);
        }
        for (let Y = 1; Y < g; Y++) for (let le = 0; le < y; le++) for (let ue = 0; ue < p - 1; ue++) {
          const Z = T.length;
          T.push([
            $[`${le},${Y},${ue}`],
            $[`${le},${Y},${ue + 1}`]
          ]), h.add(Z), u.set(Z, Y - 1);
        }
        const P = 15100 * Math.sqrt(a) * 10, R = P / (2 * (1 + 0.2)), H = i * d, x = i * d ** 3 / 12, S = d * i ** 3 / 12, v = i * d * (i ** 2 + d ** 2) / 12, L = r * c, N = r * c ** 3 / 12, D = c * r ** 3 / 12, V = r * c * (r ** 2 + c ** 2) / 12, j = /* @__PURE__ */ new Map(), B = /* @__PURE__ */ new Map(), te = /* @__PURE__ */ new Map(), oe = /* @__PURE__ */ new Map(), de = /* @__PURE__ */ new Map(), ge = /* @__PURE__ */ new Map(), _ = /* @__PURE__ */ new Map();
        for (let Y = 0; Y < T.length; Y++) j.set(Y, P), B.set(Y, R), O.has(Y) ? (te.set(Y, H), oe.set(Y, x), de.set(Y, S), ge.set(Y, v), _.set(Y, {
          type: "rect",
          b: i,
          h: d,
          name: `COL${s}`
        })) : (te.set(Y, L), oe.set(Y, D), de.set(Y, N), ge.set(Y, V), _.set(Y, {
          type: "rect",
          b: r,
          h: c,
          name: `V${f}`
        }));
        const se = /* @__PURE__ */ new Map();
        for (let Y = 0; Y < p; Y++) for (let le = 0; le < y; le++) se.set($[`${le},0,${Y}`], [
          true,
          true,
          true,
          true,
          true,
          true
        ]);
        e.nodes.val = k, e.elements.val = T, e.nodeInputs.val = {
          supports: se,
          loads: /* @__PURE__ */ new Map()
        }, e.elementInputs.val = {
          elasticities: j,
          shearModuli: B,
          areas: te,
          momentsOfInertiaZ: oe,
          momentsOfInertiaY: de,
          torsionalConstants: ge,
          sectionShapes: _
        }, he = O, xe = h, Te = u, Ge = m.map((Y, le) => ({
          label: String.fromCharCode(65 + le),
          coord: Y
        })), Ue = w.map((Y, le) => ({
          label: `${le + 1}`,
          coord: Y
        })), po = M[M.length - 1], Go(Ge.map((Y) => Y.coord), Ue.map((Y) => Y.coord), po, Ge.map((Y) => Y.label), Ue.map((Y) => Y.label));
        {
          const Y = M.map((le, ue) => ({
            name: ue === 0 ? "Base" : `P${ue}`,
            height: ue > 0 ? le - M[ue - 1] : 0,
            elev: le
          }));
          In(Y, m, w);
        }
        const G = ye.querySelector("#cad3d-axis-buttons");
        if (G) {
          G.style.display = "flex";
          const Y = Ge.map((ue) => ue.label), le = Ue.map((ue) => ue.label);
          G.innerHTML = '<span style="font-size:10px;color:var(--cad-heading);margin-right:4px">Ejes:</span>';
          for (const ue of Y) G.innerHTML += `<button class="axis-btn" data-axis="x" data-label="${ue}">${ue}</button>`;
          G.innerHTML += '<span style="margin:0 2px">|</span>';
          for (const ue of le) G.innerHTML += `<button class="axis-btn" data-axis="y" data-label="${ue}">${ue}</button>`;
        }
        const ae = ye.querySelector("#cad3d-floor-buttons");
        if (ae) {
          ae.style.display = "flex", ae.innerHTML = '<span style="font-size:10px;color:var(--cad-heading);margin-right:4px">Planta:</span>';
          for (let Y = 0; Y < I; Y++) ae.innerHTML += `<button class="floor-btn" data-floor="${Y}">P${Y + 1}</button>`;
        }
        return fs(m, w, M), Ne(), console.log(`Model3D: ${k.length}n ${T.length}e | ${y}x${p} grid, ${I} floors | COL${s} V${f} f'c=${a}`), {
          nodes: k.length,
          elements: T.length,
          columns: O.size,
          beams: h.size
        };
      },
      clear() {
        e.nodes.val = [], e.elements.val = [], e.nodeInputs && (e.nodeInputs.val = {}), e.elementInputs && (e.elementInputs.val = {}), he = /* @__PURE__ */ new Set(), xe = /* @__PURE__ */ new Set(), Te = /* @__PURE__ */ new Map(), Pe = /* @__PURE__ */ new Map(), Ge = [], Ue = [], po = 0, ms(), bs(), kn();
        const t = ye.querySelector("#cad3d-axis-buttons");
        t && (t.style.display = "none", t.innerHTML = ""), console.log("Model cleared"), Ne();
      },
      frame(t, o, n = 0, l = 0) {
        _e.clear();
        const s = [];
        n > 0 && s.push(-n);
        let f = 0;
        s.push(f);
        for (const y of t) f += y, s.push(f);
        l > 0 && s.push(f + l);
        const a = [
          0
        ];
        let i = 0;
        for (const y of o) i += y, a.push(i);
        const d = (y) => n > 0 && y === 0 || l > 0 && y === s.length - 1, r = {}, c = [];
        for (let y = 0; y < a.length; y++) for (let p = 0; p < s.length; p++) y === 0 && d(p) || (r[`${p},${y}`] = c.length, c.push([
          s[p],
          0,
          a[y]
        ]));
        const m = [];
        he = /* @__PURE__ */ new Set(), xe = /* @__PURE__ */ new Set();
        for (let y = 0; y < a.length - 1; y++) for (let p = 0; p < s.length; p++) d(p) || (he.add(m.length), m.push([
          r[`${p},${y}`],
          r[`${p},${y + 1}`]
        ]));
        for (let y = 1; y < a.length; y++) for (let p = 0; p < s.length - 1; p++) xe.add(m.length), m.push([
          r[`${p},${y}`],
          r[`${p + 1},${y}`]
        ]);
        const w = /* @__PURE__ */ new Map(), M = En();
        for (let y = 0; y < s.length; y++) {
          if (d(y)) continue;
          const p = `${y},0`;
          r[p] !== void 0 && w.set(r[p], [
            ...M
          ]);
        }
        return e.nodes.val = c, e.elements.val = m, e.nodeInputs && (e.nodeInputs.val = {
          supports: w
        }), Ge = [
          ...s
        ], Ue = [
          0
        ], po = a[a.length - 1] || 0, setTimeout(() => {
          st(), Go(s, [
            0
          ]), Nn(), Bn();
        }, 50), Ne(), {
          nodes: c.length,
          elements: m.length
        };
      },
      building(t, o, n, l = 3, s = 0, f = 0, a = 0, i = 0, d = 1) {
        _e.clear();
        const r = [];
        s > 0 && r.push(-s), r.push(0);
        for (const u of t) r.push(r[r.length - 1] + u);
        f > 0 && r.push(r[r.length - 1] + f);
        const c = [];
        a > 0 && c.push(-a), c.push(0);
        for (const u of o) c.push(c[c.length - 1] + u);
        i > 0 && c.push(c[c.length - 1] + i);
        const m = [
          0
        ];
        for (const u of n) m.push(m[m.length - 1] + u);
        const w = (u) => s > 0 && u === 0 || f > 0 && u === r.length - 1, M = (u) => a > 0 && u === 0 || i > 0 && u === c.length - 1, y = (u, E) => w(u) || M(E), p = [], g = {};
        for (let u = 0; u < m.length; u++) for (let E = 0; E < c.length; E++) for (let P = 0; P < r.length; P++) u === 0 && y(P, E) || (g[`${P},${E},${u}`] = p.length, p.push([
          r[P],
          c[E],
          m[u]
        ]));
        const I = p.length, k = [];
        he = /* @__PURE__ */ new Set(), xe = /* @__PURE__ */ new Set(), Te = /* @__PURE__ */ new Map();
        const $ = [];
        for (let u = 0; u < m.length - 1; u++) for (let E = 0; E < c.length; E++) for (let P = 0; P < r.length; P++) y(P, E) || $.push({
          el: [
            g[`${P},${E},${u}`],
            g[`${P},${E},${u + 1}`]
          ],
          floor: u
        });
        for (const { el: [u, E], floor: P } of $) {
          if (d <= 1) {
            he.add(k.length), Te.set(k.length, P), k.push([
              u,
              E
            ]);
            continue;
          }
          const R = p[u], H = p[E];
          let x = u;
          for (let S = 1; S < d; S++) {
            const v = S / d, L = p.length;
            p.push([
              R[0] + (H[0] - R[0]) * v,
              R[1] + (H[1] - R[1]) * v,
              R[2] + (H[2] - R[2]) * v
            ]), he.add(k.length), Te.set(k.length, P), k.push([
              x,
              L
            ]), x = L;
          }
          he.add(k.length), Te.set(k.length, P), k.push([
            x,
            E
          ]);
        }
        Pe = /* @__PURE__ */ new Map();
        const T = [];
        for (let u = 1; u < m.length; u++) for (let E = 0; E < c.length; E++) for (let P = 0; P < r.length - 1; P++) T.push({
          el: [
            g[`${P},${E},${u}`],
            g[`${P + 1},${E},${u}`]
          ],
          floor: u - 1,
          dir: "x",
          bay: P
        });
        for (let u = 1; u < m.length; u++) for (let E = 0; E < r.length; E++) for (let P = 0; P < c.length - 1; P++) T.push({
          el: [
            g[`${E},${P},${u}`],
            g[`${E},${P + 1},${u}`]
          ],
          floor: u - 1,
          dir: "y",
          bay: P
        });
        for (const { el: [u, E], floor: P, dir: R, bay: H } of T) {
          const x = p[u], S = p[E];
          let v = u;
          for (let N = 1; N < l; N++) {
            const D = N / l, V = p.length;
            p.push([
              x[0] + (S[0] - x[0]) * D,
              x[1] + (S[1] - x[1]) * D,
              x[2] + (S[2] - x[2]) * D
            ]);
            const j = k.length;
            xe.add(j), Te.set(j, P), Pe.set(j, {
              dir: R,
              bay: H
            }), k.push([
              v,
              V
            ]), v = V;
          }
          const L = k.length;
          xe.add(L), Te.set(L, P), Pe.set(L, {
            dir: R,
            bay: H
          }), k.push([
            v,
            E
          ]);
        }
        if (io = /* @__PURE__ */ new Set(), Ze && Ve > 0) {
          const u = (E, P, R) => {
            for (let x = 0; x < p.length; x++) if (Math.abs(p[x][0] - E) < 1e-6 && Math.abs(p[x][1] - P) < 1e-6 && Math.abs(p[x][2] - R) < 1e-6) return x;
            const H = p.length;
            return p.push([
              E,
              P,
              R
            ]), H;
          };
          for (let E = 1; E < m.length; E++) if (xt === "x") for (let P = 0; P < c.length - 1; P++) {
            const R = c[P], H = c[P + 1];
            for (let x = 1; x <= Ve; x++) {
              const S = R + x / (Ve + 1) * (H - R), v = [];
              for (let L = 0; L < r.length; L++) v.push(u(r[L], S, m[E]));
              for (let L = 0; L < r.length - 1; L++) {
                const N = k.length;
                io.add(N), xe.add(N), Te.set(N, E - 1), Pe.set(N, {
                  dir: "x",
                  bay: L
                }), k.push([
                  v[L],
                  v[L + 1]
                ]);
              }
            }
          }
          else for (let P = 0; P < r.length - 1; P++) {
            const R = r[P], H = r[P + 1];
            for (let x = 1; x <= Ve; x++) {
              const S = R + x / (Ve + 1) * (H - R), v = [];
              for (let L = 0; L < c.length; L++) v.push(u(S, c[L], m[E]));
              for (let L = 0; L < c.length - 1; L++) {
                const N = k.length;
                io.add(N), xe.add(N), Te.set(N, E - 1), Pe.set(N, {
                  dir: "y",
                  bay: L
                }), k.push([
                  v[L],
                  v[L + 1]
                ]);
              }
            }
          }
        }
        const O = /* @__PURE__ */ new Map(), h = En();
        for (let u = 0; u < c.length; u++) for (let E = 0; E < r.length; E++) y(E, u) || O.set(g[`${E},${u},0`], [
          ...h
        ]);
        Ce = /* @__PURE__ */ new Set();
        for (const u of qe) {
          const E = m.length - 1, P = u.floors.includes(-1) ? Array.from({
            length: E
          }, (R, H) => H) : u.floors.filter((R) => R < E);
          for (const R of P) {
            let H, x, S, v;
            u.dir === "x" ? (H = u.bay, S = u.bay + 1, x = u.axisIdx, v = u.axisIdx) : (H = u.axisIdx, S = u.axisIdx, x = u.bay, v = u.bay + 1);
            const L = g[`${H},${x},${R}`], N = g[`${H},${x},${R + 1}`];
            let D, V;
            if (u.dir === "x" ? (D = g[`${S},${v},${R}`], V = g[`${S},${v},${R + 1}`]) : (D = g[`${S},${v},${R}`], V = g[`${S},${v},${R + 1}`]), L === void 0 || D === void 0 || N === void 0 || V === void 0) continue;
            const j = Ke, B = nt, te = p[L], oe = p[D], de = p[N], ge = p[V], _ = [];
            for (let se = 0; se <= B; se++) {
              const G = [], ae = se / B;
              for (let Y = 0; Y <= j; Y++) {
                const le = Y / j, ue = (1 - ae) * ((1 - le) * te[0] + le * oe[0]) + ae * ((1 - le) * de[0] + le * ge[0]), Z = (1 - ae) * ((1 - le) * te[1] + le * oe[1]) + ae * ((1 - le) * de[1] + le * ge[1]), fe = (1 - ae) * ((1 - le) * te[2] + le * oe[2]) + ae * ((1 - le) * de[2] + le * ge[2]);
                se === 0 && Y === 0 ? G.push(L) : se === 0 && Y === j ? G.push(D) : se === B && Y === 0 ? G.push(N) : se === B && Y === j ? G.push(V) : (G.push(p.length), p.push([
                  ue,
                  Z,
                  fe
                ]));
              }
              _.push(G);
            }
            for (let se = 0; se < B; se++) for (let G = 0; G < j; G++) {
              const ae = _[se][G], Y = _[se][G + 1], le = _[se + 1][G + 1], ue = _[se + 1][G], Z = k.length;
              Ce.add(Z), Te.set(Z, R), k.push([
                ae,
                Y,
                le,
                ue
              ]);
            }
            if (R === 0) for (let se = 0; se <= j; se++) {
              const G = _[0][se];
              G >= I && O.set(G, [
                ...h
              ]);
            }
          }
        }
        if (yo = /* @__PURE__ */ new Set(), qt) {
          const u = l, E = l, P = /* @__PURE__ */ new Map(), R = (H, x, S) => `${Math.round(H * 1e4)},${Math.round(x * 1e4)},${Math.round(S * 1e4)}`;
          for (let H = 0; H < p.length; H++) P.set(R(p[H][0], p[H][1], p[H][2]), H);
          for (let H = 1; H < m.length; H++) {
            const x = m[H];
            for (let S = 0; S < r.length - 1; S++) for (let v = 0; v < c.length - 1; v++) {
              const L = r[S], N = r[S + 1], D = c[v], V = c[v + 1], j = [];
              for (let B = 0; B <= E; B++) {
                const te = [];
                for (let oe = 0; oe <= u; oe++) {
                  const de = L + oe / u * (N - L), ge = D + B / E * (V - D);
                  if (B === 0 && oe === 0) te.push(g[`${S},${v},${H}`]);
                  else if (B === 0 && oe === u) te.push(g[`${S + 1},${v},${H}`]);
                  else if (B === E && oe === 0) te.push(g[`${S},${v + 1},${H}`]);
                  else if (B === E && oe === u) te.push(g[`${S + 1},${v + 1},${H}`]);
                  else {
                    const _ = R(de, ge, x), se = P.get(_);
                    if (se !== void 0) te.push(se);
                    else {
                      const G = p.length;
                      p.push([
                        de,
                        ge,
                        x
                      ]), P.set(_, G), te.push(G);
                    }
                  }
                }
                j.push(te);
              }
              for (let B = 0; B < E; B++) for (let te = 0; te < u; te++) {
                const oe = j[B][te], de = j[B][te + 1], ge = j[B + 1][te + 1], _ = j[B + 1][te], se = k.length;
                yo.add(se), Te.set(se, H - 1), k.push([
                  oe,
                  de,
                  ge,
                  _
                ]);
              }
            }
          }
        }
        if (Po && Rt) {
          const u = Rt === "all" || Rt === "x" || Rt === "perimeter", E = Rt === "all" || Rt === "y" || Rt === "perimeter", P = m.length - 1;
          for (let R = 0; R < P; R++) {
            if (u) for (let H = 0; H < c.length; H++) {
              if (Rt === "perimeter" && H !== 0 && H !== c.length - 1) continue;
              const x = Math.floor((r.length - 1) / 2);
              for (let S = 0; S < r.length - 1; S++) {
                if (Rt === "perimeter" && S !== x || y(S, H) || y(S + 1, H)) continue;
                const v = g[`${S},${H},${R}`], L = g[`${S + 1},${H},${R + 1}`], N = g[`${S + 1},${H},${R}`], D = g[`${S},${H},${R + 1}`];
                v !== void 0 && L !== void 0 && (k.push([
                  v,
                  L
                ]), Te.set(k.length - 1, R)), N !== void 0 && D !== void 0 && (k.push([
                  N,
                  D
                ]), Te.set(k.length - 1, R));
              }
            }
            if (E) for (let H = 0; H < r.length; H++) {
              if (Rt === "perimeter" && H !== 0 && H !== r.length - 1) continue;
              const x = Math.floor((c.length - 1) / 2);
              for (let S = 0; S < c.length - 1; S++) {
                if (Rt === "perimeter" && S !== x || y(H, S) || y(H, S + 1)) continue;
                const v = g[`${H},${S},${R}`], L = g[`${H},${S + 1},${R + 1}`], N = g[`${H},${S + 1},${R}`], D = g[`${H},${S},${R + 1}`];
                v !== void 0 && L !== void 0 && (k.push([
                  v,
                  L
                ]), Te.set(k.length - 1, R)), N !== void 0 && D !== void 0 && (k.push([
                  N,
                  D
                ]), Te.set(k.length - 1, R));
              }
            }
          }
        }
        return e.nodes.val = p, e.elements.val = k, e.nodeInputs && (e.nodeInputs.val = {
          supports: O
        }), Ge = [
          ...r
        ], Ue = [
          ...c
        ], po = m[m.length - 1] || 0, setTimeout(() => {
          st(), Go(r, c), Nn(), Bn();
        }, 50), Ne(), {
          nodes: p.length,
          elements: k.length,
          nJointNodes: I
        };
      },
      galpon(t = 12, o = 20, n = 6, l = 3, s = 8, f = 4) {
        _e.clear();
        const a = [], i = [], d = (M) => n + l * (1 - Math.pow(2 * M / t - 1, 2)), r = [], c = f + 1;
        for (let M = 0; M < c; M++) {
          const y = [], p = o / f * M;
          y.push(a.length), a.push([
            0,
            p,
            0
          ]), y.push(a.length), a.push([
            t,
            p,
            0
          ]), y.push(a.length), a.push([
            0,
            p,
            n
          ]);
          for (let g = 1; g < s; g++) {
            const I = t / s * g;
            y.push(a.length), a.push([
              I,
              p,
              d(I)
            ]);
          }
          y.push(a.length), a.push([
            t,
            p,
            n
          ]), r.push(y);
        }
        for (let M = 0; M < c; M++) {
          const y = r[M];
          i.push([
            y[0],
            y[2]
          ]), i.push([
            y[1],
            y[y.length - 1]
          ]);
          for (let p = 2; p < y.length - 1; p++) i.push([
            y[p],
            y[p + 1]
          ]);
        }
        for (let M = 0; M < f; M++) for (let y = 2; y < r[0].length; y++) i.push([
          r[M][y],
          r[M + 1][y]
        ]);
        for (let M = 0; M < f; M++) for (let y = 2; y < r[0].length - 1; y += 2) i.push([
          r[M][y],
          r[M + 1][y + 1]
        ]);
        const m = /* @__PURE__ */ new Map(), w = En();
        for (let M = 0; M < c; M++) m.set(r[M][0], [
          ...w
        ]), m.set(r[M][1], [
          ...w
        ]);
        return e.nodes.val = a, e.elements.val = i, e.nodeInputs && (e.nodeInputs.val = {
          supports: m
        }), Ne(), {
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
            ke.colMat = 1, ke.vigaMat = 1, _e.clear(), Be("truss"), vs();
            break;
          }
          case "beams": {
            ke.colMat = 0, ke.vigaMat = 0, ke.colShape = 0, _e.clear(), Be("beams"), ys();
            break;
          }
          case "3d":
          case "3d-structure":
          case "torre": {
            ke.colMat = 1, ke.vigaMat = 1, _e.clear(), Be("3d"), $s();
            break;
          }
          case "portico": {
            ke.colMat = 0, ke.vigaMat = 0, ke.colShape = 0, Be("frame"), Me();
            break;
          }
          case "edificio": {
            Be("edificio"), ke.colMat = 0, ke.vigaMat = 0, ke.colShape = 0, qe = [], qt = false, Ze = false, Po = false, Me();
            break;
          }
          case "edif-acero":
          case "edificio-acero": {
            Be("edificio"), ke.colMat = 1, ke.vigaMat = 1, ke.steelColType = 0, ke.steelVigaType = 0, qe = [], Ze = true, Ve = 2;
            const o = ce.reduce((l, s) => l + s, 0) / ce.length, n = re.reduce((l, s) => l + s, 0) / re.length;
            xt = o >= n ? "y" : "x", qt = true, Nt = 0.08, Po = false, Me();
            break;
          }
          case "edif-acero-diag":
          case "edificio-acero-diag": {
            Be("edificio"), ke.colMat = 1, ke.vigaMat = 1, ke.steelColType = 0, ke.steelVigaType = 0, qe = [], Ze = true, Ve = 2;
            const o = ce.reduce((l, s) => l + s, 0) / ce.length, n = re.reduce((l, s) => l + s, 0) / re.length;
            xt = o >= n ? "y" : "x", qt = true, Nt = 0.08, Po = true, Rt = "perimeter", Me();
            break;
          }
          case "edif-muros":
          case "edificio-muros": {
            Be("edificio"), ke.colMat = 0, ke.vigaMat = 0, ke.colShape = 0, Ze = false;
            const o = Math.round(((_a2 = U.nVanosX) == null ? void 0 : _a2.val) ?? 2), n = Math.round(((_b = U.nVanosY) == null ? void 0 : _b.val) ?? 2);
            qe = [
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
            ], qt = true, Nt = 0.15, Me();
            break;
          }
          case "edif-mixto":
          case "edificio-mixto": {
            Be("edificio"), ke.colMat = 2, ke.vigaMat = 0, Ze = false;
            const o = Math.round(((_c = U.nVanosX) == null ? void 0 : _c.val) ?? 2), n = Math.round(((_d = U.nVanosY) == null ? void 0 : _d.val) ?? 2);
            qe = [
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
            ], qt = true, Nt = 0.12, Me();
            break;
          }
          case "mezanine":
          case "mezzanine": {
            Be("edificio"), U.nPisos && (U.nPisos.val = 1), U.hPiso && (U.hPiso.val = 4.5), U.nVanosX && (U.nVanosX.val = 3), U.nVanosY && (U.nVanosY.val = 2), U.nSubViga && (U.nSubViga.val = 3), ce = [
              6,
              6,
              6
            ], re = [
              5,
              5
            ], ke.colMat = 1, ke.vigaMat = 1, ke.steelColType = 0, ke.steelVigaType = 0, qe = [], Ze = true, Ve = 2, xt = ce[0] >= re[0] ? "y" : "x", qt = true, Nt = 0.08, To = 3, Ao = 3, Me();
            break;
          }
          case "galpon": {
            Be("galpon"), ke.colMat = 1, ke.vigaMat = 1, Me();
            break;
          }
          case "barra": {
            Be("barra"), Me();
            break;
          }
          case "placa3q":
          case "plate3q":
          case "placa-3q": {
            _e.clear(), Be("placa-3q"), ws();
            break;
          }
          case "placa":
          case "plate":
          case "plate-q4":
          case "placa-q4": {
            _e.clear(), Be("placa-q4"), Ms();
            break;
          }
          case "losa-rect":
          case "rectangular-slab": {
            _e.clear(), Be("losa-rect"), Ss();
            break;
          }
          case "losa-plana":
          case "flat-slab": {
            _e.clear(), Be("losa-plana"), Es();
            break;
          }
          case "viga-alta":
          case "deep-beam": {
            _e.clear(), Be("viga-alta"), ks();
            break;
          }
          case "muro-contencion":
          case "retaining-wall": {
            _e.clear(), Be("muro-contencion"), Is();
            break;
          }
          case "zapata":
          case "footing": {
            _e.clear(), Be("zapata"), zs();
            break;
          }
          case "placa-orificios":
          case "plate-holes":
          case "placa-base": {
            _e.clear(), Be("placa-orificios"), Ls();
            break;
          }
          case "col-placa":
          case "columna-placa": {
            _e.clear(), Be("col-placa"), Cs();
            break;
          }
          case "talud":
          case "slope": {
            _e.clear(), Be("talud"), Ts();
            break;
          }
          case "eiffel":
          case "torre-eiffel": {
            _e.clear(), Be("eiffel"), Ys();
            break;
          }
          case "arco":
          case "arco-gateway": {
            _e.clear(), Be("arco"), Vs();
            break;
          }
          case "puente":
          case "puente-colgante": {
            _e.clear(), Be("puente"), Gs();
            break;
          }
          case "twisted":
          case "torre-twisted":
          case "turning-torso": {
            _e.clear(), Be("twisted"), Xs();
            break;
          }
          case "burj":
          case "burj-khalifa": {
            _e.clear(), Be("burj"), Js();
            break;
          }
          case "opera":
          case "sydney-opera": {
            _e.clear(), Be("opera"), Ks();
            break;
          }
          case "diagrid":
          case "gherkin": {
            _e.clear(), Be("diagrid"), Us();
            break;
          }
          case "muro-q4":
          case "shear-wall":
          case "muro-cantilever": {
            _e.clear(), Be("muro-q4"), Kn();
            break;
          }
          case "viga-q4":
          case "cantilever-beam":
          case "viga-cantilever": {
            _e.clear(), Be("viga-q4"), Zs();
            break;
          }
          case "placa-xy":
          case "placa-cantilever":
          case "losa-cantilever": {
            _e.clear(), Be("placa-xy"), Qs();
            break;
          }
          case "pergola": {
            _e.clear(), Be("pergola"), ea();
            break;
          }
          default:
            console.error(`Ejemplo desconocido: "${t}".`);
        }
      },
      plateQ4(t = 10, o = 10, n = 16, l = 16, s = "simply-supported", f = -10, a = 0.2, i = 3e7, d = 0.3, r = 0) {
        console.log(`Plate Q4 [${[
          "Mindlin (gruesa)",
          "Kirchhoff (delgada)",
          "Membrane"
        ][r]}]: ${t}\xD7${o}, ${n}\xD7${l} elem, BC=${s}, q=${f}, t=${a}`);
        const m = performance.now(), w = Qn({
          E: i,
          nu: d,
          thickness: a,
          meshLx: t,
          meshLy: o,
          meshNx: n,
          meshNy: l,
          bcType: s,
          pressure: f,
          theoryType: r
        }), M = performance.now() - m;
        console.log(`Solved in ${M.toFixed(1)} ms`), console.log(`w_max = ${w.maxW.toExponential(6)}`), console.log(`w_center = ${(w.centerW ?? 0).toExponential(6)}`), console.log(`Mxx_max = ${w.maxMxx.toExponential(4)}, Myy_max = ${w.maxMyy.toExponential(4)}`), console.log(`Mxy_max = ${w.maxMxy.toExponential(4)}`), console.log(`Qx_max = ${w.maxQx.toExponential(4)}, Qy_max = ${w.maxQy.toExponential(4)}`);
        const y = w.nodeResults.map(($) => [
          $.x,
          $.y,
          0
        ]), p = w.elementResults.map(($) => [
          ...$.nodes
        ]);
        e.nodes.val = y, e.elements.val = p;
        const g = /* @__PURE__ */ new Map();
        w.nodeResults.forEach(($, T) => {
          g.set(T, [
            0,
            0,
            $.w,
            $.bx,
            $.by,
            0
          ]);
        }), e.deformOutputs && (e.deformOutputs.val = {
          deformations: g
        });
        const I = /* @__PURE__ */ new Map();
        w.nodeResults.forEach(($, T) => {
          ($.x < 1e-10 || $.x > t - 1e-10 || $.y < 1e-10 || $.y > o - 1e-10) && I.set(T, [
            true,
            true,
            true,
            true,
            true,
            true
          ]);
        });
        const k = /* @__PURE__ */ new Map();
        if (Math.abs(f) > 1e-30) {
          const $ = f * t * o / y.length;
          y.forEach((T, O) => {
            I.has(O) || k.set(O, [
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
          supports: I,
          loads: k
        }), e.elementInputs && (e.elementInputs.val = {}), e.analyzeOutputs) {
          const $ = /* @__PURE__ */ new Map(), T = /* @__PURE__ */ new Map(), O = /* @__PURE__ */ new Map();
          w.elementResults.forEach((h, u) => {
            $.set(u, [
              h.Mxx,
              h.Mxx,
              h.Mxx
            ]), T.set(u, [
              h.Myy,
              h.Myy,
              h.Myy
            ]), O.set(u, [
              h.Mxy,
              h.Mxy,
              h.Mxy
            ]);
          }), e.analyzeOutputs.val = {
            bendingXX: $,
            bendingYY: T,
            bendingXY: O
          };
        }
        return setTimeout(() => st(), 50), Ne(), w;
      },
      setParam(t, o) {
        U[t] ? (U[t].val = o, console.log(`${t} = ${o}`), Kt(), Me()) : Xe[t] ? (Xe[t].val = o, console.log(`${t} = ${o}`), Kt(), Me()) : console.error(`Par\xE1metro "${t}" no encontrado. Disponibles: ${Object.keys({
          ...U,
          ...Xe
        }).join(", ")}`);
      },
      get(t) {
        if (!t) {
          const o = {};
          for (const l in U) o[l] = U[l].val;
          for (const l in Xe) o[l] = Xe[l].val;
          o.plateTheory = jt, o.supportType = Lt;
          const n = bn()[A];
          return n && n[Lt] && (o.supportLabel = n[Lt].label), console.table(o), o;
        }
        if (U[t]) return U[t].val;
        if (Xe[t]) return Xe[t].val;
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
        }[t.toLowerCase()] || 3), jt = t, console.log(`Teor\xEDa de placa: ${{
          1: "Membrana",
          2: "Kirchhoff (delgada)",
          3: "Mindlin (gruesa)"
        }[jt] || jt}`), A.includes("placa") && (Kt(), Me());
      },
      setBc(t) {
        const o = bn()[A];
        if (!o || o.length === 0) {
          console.error("No support options for current generator");
          return;
        }
        if (typeof t == "string") {
          const n = o.findIndex((l) => l.label.toLowerCase().includes(t.toLowerCase()));
          t = n >= 0 ? n : 0;
        }
        Lt = t, Lt >= o.length && (Lt = 0), console.log(`Apoyo: ${o[Lt].label} \u2192 DOFs: [${o[Lt].dofs.map((n) => n ? "1" : "0").join(",")}]`), Kt(), Me();
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
        t && (b = t), o && (q = o), z = zo(b, q);
        const n = ye.querySelector("#cad3d-force-unit"), l = ye.querySelector("#cad3d-length-unit");
        return n && (n.textContent = b), l && (l.textContent = q), A && Be(A), console.log(`Unidades: ${z.label} | E=${z.E.toExponential(3)} ${z.stress}`), z.id;
      },
      view(t) {
      },
      get mesh() {
        return e;
      }
    };
    function hs() {
      return vl(z);
    }
    function xs() {
      return yl(z);
    }
    let Xe = {};
    function Be(t) {
      var _a2, _b, _c, _d;
      A = t, ma.val = true, Lt = 0, co && Rn(), U = {};
      const o = hs()[t];
      if (o) for (const l of o) U[l.key] = {
        val: l.val,
        min: l.min,
        max: l.max,
        step: l.step,
        label: l.label
      };
      Xe = {};
      const n = xs()[t];
      if (n) for (const l of n) Xe[l.key] = {
        val: l.val,
        min: l.min,
        max: l.max,
        step: l.step,
        label: l.label
      };
      if (t === "edificio") {
        const l = Math.round(((_a2 = U.nVanosX) == null ? void 0 : _a2.val) ?? 2), s = Math.round(((_b = U.nVanosY) == null ? void 0 : _b.val) ?? 2);
        ce = Array(l).fill(z.defaultSpan), re = Array(s).fill(z.defaultSpan * 0.8);
        const f = Math.round(((_c = U.nPisos) == null ? void 0 : _c.val) ?? 3), a = ((_d = U.hPiso) == null ? void 0 : _d.val) ?? 3;
        ie = Array(f).fill(a);
      }
      Kt(), setTimeout(() => {
        Ta(), Me();
      }, 50);
    }
    function ne(t) {
      var _a2, _b;
      return ((_a2 = U[t]) == null ? void 0 : _a2.val) ?? ((_b = Xe[t]) == null ? void 0 : _b.val) ?? 0;
    }
    function Me() {
      switch (A) {
        case "truss":
          vs();
          break;
        case "beams":
          ys();
          break;
        case "3d":
          $s();
          break;
        case "frame": {
          const o = Math.round(ne("nVanos")), n = ne("spanV"), l = Math.round(ne("nPisos")), s = ne("hPiso");
          _e.frame(Array(o).fill(n), Array(l).fill(s));
          break;
        }
        case "edificio": {
          const o = ne("Lvix") || 0, n = ne("Lvdx") || 0, l = ne("Lviy") || 0, s = ne("Lvdy") || 0, f = Math.max(1, Math.round(ne("nSubViga") || 3)), a = Math.max(1, Math.round(ne("nSubCol") || 1)), i = ne("hPiso"), d = ie.length > 0 ? [
            ...ie
          ] : Array(Math.round(ne("nPisos"))).fill(i);
          _e.building([
            ...ce
          ], [
            ...re
          ], d, f, o, n, l, s, a);
          break;
        }
        case "galpon":
          _e.galpon(ne("span"), ne("length"), ne("height"), ne("archRise"), Math.round(ne("xDiv")), Math.round(ne("yDiv")));
          break;
        case "barra":
          Ma();
          break;
        case "placa-3q":
          ws();
          break;
        case "placa-q4":
          Ms();
          break;
        case "losa-rect":
          Ss();
          break;
        case "losa-plana":
          Es();
          break;
        case "viga-alta":
          ks();
          break;
        case "muro-contencion":
          Is();
          break;
        case "zapata":
          zs();
          break;
        case "placa-orificios":
          Ls();
          break;
        case "col-placa":
          Cs();
          break;
        case "talud":
          Ts();
          break;
        case "eiffel":
          Ys();
          break;
        case "arco":
          Vs();
          break;
        case "puente":
          Gs();
          break;
        case "twisted":
          Xs();
          break;
        case "burj":
          Js();
          break;
        case "opera":
          Ks();
          break;
        case "diagrid":
          Us();
          break;
        case "muro-q4":
          Kn();
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
      if ((A === "frame" || A === "edificio" || A === "galpon") && e.nodeInputs) {
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
      ].includes(A)) {
        if (K.size > 0 || X.size > 0 || ee) {
          const o = e.elements.val, n = o.filter((l, s) => !(K.has(s) || X.has(s) || ee && !me.has(s)));
          n.length !== o.length && (e.elements.val = n);
        }
        setTimeout(() => {
          uo(), _n();
        }, 30);
      }
    }
    function vs() {
      const t = ne("span"), o = Math.round(ne("divisions")), n = ne("height"), l = t / o, s = [], f = [];
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
      for (let c = 0; c < o; c++) f.push([
        c,
        c + 1
      ]);
      for (let c = 0; c < o; c++) f.push([
        a + c,
        a + c + 1
      ]);
      for (let c = 0; c <= o; c++) f.push([
        c,
        a + c
      ]);
      for (let c = 0; c < o; c++) c < o / 2 ? f.push([
        c,
        a + c + 1
      ]) : f.push([
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
      ]), d = (ne("CM") ?? 0) + (ne("CV") ?? 0), r = /* @__PURE__ */ new Map();
      if (d !== 0) for (let c = 0; c <= o; c++) r.set(c, [
        0,
        0,
        d,
        0,
        0,
        0
      ]);
      e.nodes.val = s, e.elements.val = f, e.nodeInputs && (e.nodeInputs.val = {
        supports: i,
        loads: r
      }), Ne();
    }
    function ys() {
      const t = ne("width"), o = ne("height"), n = ne("Ex") ?? 0, l = (ne("CM") ?? 0) + (ne("CV") ?? 0), s = Math.max(1, Math.round(ne("nSub") || 4)), f = [
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
      ], d = [
        t,
        0,
        o
      ];
      let r = 1;
      for (let m = 1; m < s; m++) {
        const w = m / s, M = f.length;
        f.push([
          i[0] + (d[0] - i[0]) * w,
          i[1] + (d[1] - i[1]) * w,
          i[2] + (d[2] - i[2]) * w
        ]), a.push([
          r,
          M
        ]), r = M;
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
      else if (l !== 0 && n === 0) for (let m = 1; m < f.length; m++) m === 0 || m === 3 || c.set(m, [
        0,
        0,
        l,
        0,
        0,
        0
      ]);
      else if (n !== 0 && l !== 0) for (let m = 1; m < f.length; m++) m === 0 || m === 3 || c.set(m, [
        m === 2 ? n : 0,
        0,
        l,
        0,
        0,
        0
      ]);
      e.nodes.val = f, e.elements.val = a, e.nodeInputs && (e.nodeInputs.val = {
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
      }), Ne();
    }
    function $s() {
      const t = ne("dx"), o = ne("dy"), n = ne("dz"), l = Math.round(ne("stories")), s = Math.max(1, Math.round(ne("nSub") || 3)), f = [];
      for (let p = 0; p <= l; p++) f.push([
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
      const a = f.length, i = [
        ...f
      ], d = [];
      for (let p = 0; p < l; p++) for (let g = 0; g < 4; g++) d.push([
        p * 4 + g,
        (p + 1) * 4 + g
      ]);
      for (let p = 0; p < l; p++) {
        const g = p * 4;
        d.push([
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
      const r = [];
      for (let p = 1; p <= l; p++) {
        const g = p * 4;
        r.push([
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
      for (const [p, g] of r) {
        const I = f[p], k = f[g];
        let $ = p;
        for (let T = 1; T < s; T++) {
          const O = T / s, h = i.length;
          i.push([
            I[0] + (k[0] - I[0]) * O,
            I[1] + (k[1] - I[1]) * O,
            I[2] + (k[2] - I[2]) * O
          ]), d.push([
            $,
            h
          ]), $ = h;
        }
        d.push([
          $,
          g
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
      const m = ne("Ex") ?? 0, w = (ne("CM") ?? 0) + (ne("CV") ?? 0), M = a - 2, y = /* @__PURE__ */ new Map();
      if (m !== 0 && w === 0) y.set(M, [
        m,
        0,
        0,
        0,
        0,
        0
      ]);
      else if (w !== 0 && m === 0) for (let p = 0; p < i.length; p++) c.has(p) || y.set(p, [
        0,
        0,
        w,
        0,
        0,
        0
      ]);
      else if (m !== 0 && w !== 0) for (let p = 0; p < i.length; p++) c.has(p) || y.set(p, [
        p === M ? m : 0,
        0,
        w,
        0,
        0,
        0
      ]);
      e.nodes.val = i, e.elements.val = d, e.nodeInputs && (e.nodeInputs.val = {
        supports: c,
        loads: y
      }), Ne();
    }
    function Ma() {
      const t = ne("L"), o = Math.round(ne("nElem")), n = ne("F"), l = t / o, s = [], f = [];
      for (let d = 0; d <= o; d++) s.push([
        l * d,
        0,
        0
      ]);
      for (let d = 0; d < o; d++) f.push([
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
      e.nodes.val = s, e.elements.val = f, e.nodeInputs && (e.nodeInputs.val = {
        supports: a,
        loads: i
      }), Ne();
    }
    function ws() {
      const t = ne("Lx") || 15, o = ne("Ly") || 10, n = ne("meshSize") || 0.5, l = ne("q") || -3, s = ne("t") || 1, f = ne("E") || 3e7, a = ne("nu") || 0.3, i = f / (2 * (1 + a)), d = jt === 1 ? "Membrana" : jt === 2 ? "Kirchhoff" : "Mindlin", { nodes: r, elements: c, boundaryIndices: m } = lo({
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
      }), w = t * o, M = l * w / r.length, y = new Map(m.map((g) => [
        g,
        [
          true,
          true,
          true,
          true,
          true,
          true
        ]
      ])), p = new Map(r.map((g, I) => [
        I,
        [
          0,
          0,
          M,
          0,
          0,
          0
        ]
      ]));
      e.nodes.val = r, e.elements.val = c, e.nodeInputs && (e.nodeInputs.val = {
        supports: y,
        loads: p
      }), e.elementInputs && (e.elementInputs.val = {
        elasticities: new Map(c.map((g, I) => [
          I,
          f
        ])),
        elasticitiesOrthogonal: new Map(c.map((g, I) => [
          I,
          f
        ])),
        thicknesses: new Map(c.map((g, I) => [
          I,
          s
        ])),
        poissonsRatios: new Map(c.map((g, I) => [
          I,
          a
        ])),
        shearModuli: new Map(c.map((g, I) => [
          I,
          i
        ]))
      });
      try {
        const g = pt(r, c, e.nodeInputs.val, e.elementInputs.val);
        g && e.deformOutputs && (e.deformOutputs.val = g);
        const I = so(r, c, e.elementInputs.val, g);
        I && e.analyzeOutputs && (e.analyzeOutputs.val = I), console.log(`Plate 3Q [${d}]: ${r.length} nodes, ${c.length} triangles, t=${s}, E=${f}, \u03BD=${a}`);
      } catch (g) {
        console.warn("Plate 3Q analysis failed:", g.message);
      }
      setTimeout(() => st(), 50), Ne();
    }
    function Ms() {
      const t = ne("Lx") || 10, o = ne("Ly") || 10, n = Math.round(ne("nx") || 16), l = Math.round(ne("ny") || 16), s = ne("t") || 0.2, f = ne("q") || -10, a = ne("E") || 3e7, i = ne("nu") || 0.3, d = Lt === 1 ? "clamped" : "simply-supported", c = {
        1: 2,
        2: 1,
        3: 0
      }[jt] ?? 0;
      return _e.plateQ4(t, o, n, l, d, f, s, a, i, c);
    }
    function Ss() {
      const t = ne("a") || 6, o = ne("b") || 4, n = Math.round(ne("nx") || 12), l = Math.round(ne("ny") || 8), s = ne("t") || 0.1, f = ne("q") || -10, a = ne("E") || 35e6, i = ne("nu") || 0.15, r = {
        1: 2,
        2: 1,
        3: 0
      }[jt] ?? 0, c = _e.plateQ4(t, o, n, l, "simply-supported", f, s, a, i, r), m = a * s * s * s / (12 * (1 - i * i));
      let w = 0;
      for (let M = 1; M <= 19; M += 2) for (let y = 1; y <= 19; y += 2) {
        const p = M * M / (t * t) + y * y / (o * o);
        w += 1 / (M * y * p * p);
      }
      if (w *= 16 * Math.abs(f) / (Math.PI ** 6 * m), console.log(`\u{1F4D0} Navier anal\xEDtico w_center = ${w.toExponential(6)}`), c) {
        const M = Math.abs((Math.abs(c.centerW || 0) - w) / w * 100);
        console.log(`   WASM w_center = ${(c.centerW || 0).toExponential(6)}, error = ${M.toFixed(2)}%`);
      }
      return c;
    }
    function Es() {
      const t = ne("t") || 0.2, o = ne("q") || -10, n = ne("E") || 35e6, l = ne("nu") || 0.2, s = ne("meshSize") || 0.6, f = [
        3.6,
        4.2,
        4.2,
        3.6
      ], a = [
        3,
        3.6,
        3
      ], i = f.reduce((x, S) => x + S, 0), d = a.reduce((x, S) => x + S, 0), r = [
        0
      ];
      for (const x of f) r.push(r[r.length - 1] + x);
      const c = [
        0
      ];
      for (const x of a) c.push(c[c.length - 1] + x);
      const m = Math.max(2, Math.round(i / s)), w = Math.max(2, Math.round(d / s)), M = i / m, y = d / w, p = [];
      for (let x = 0; x <= w; x++) for (let S = 0; S <= m; S++) p.push([
        S * M,
        x * y
      ]);
      const g = [], I = /* @__PURE__ */ new Set();
      for (const x of r) for (const S of c) {
        let v = 1 / 0, L = 0;
        for (let N = 0; N < p.length; N++) {
          const D = Math.hypot(p[N][0] - x, p[N][1] - S);
          D < v && (v = D, L = N);
        }
        I.has(L) || (I.add(L), g.push({
          node: L,
          dof: 0,
          k: 1e15
        }));
      }
      const $ = {
        1: 2,
        2: 1,
        3: 0
      }[jt] ?? 1;
      console.log(`Losa Plana Q4 [${[
        "Mindlin",
        "Kirchhoff",
        "Membrane"
      ][$]}]: ${i}\xD7${d}m, ${m}\xD7${w} elem, ${I.size} columnas`);
      const T = performance.now(), O = Qn({
        E: n,
        nu: l,
        thickness: t,
        meshLx: i,
        meshLy: d,
        meshNx: m,
        meshNy: w,
        bcType: "none",
        pressure: o,
        theoryType: $,
        springs: g
      }), h = performance.now() - T;
      console.log(`Solved in ${h.toFixed(1)} ms, w_max = ${O.maxW.toExponential(4)}`);
      const u = O.nodeResults.map((x) => [
        x.x,
        x.y,
        0
      ]), E = O.elementResults.map((x) => [
        ...x.nodes
      ]);
      e.nodes.val = u, e.elements.val = E;
      const P = /* @__PURE__ */ new Map();
      O.nodeResults.forEach((x, S) => {
        P.set(S, [
          0,
          0,
          x.w,
          x.bx,
          x.by,
          0
        ]);
      }), e.deformOutputs && (e.deformOutputs.val = {
        deformations: P
      });
      const R = /* @__PURE__ */ new Map();
      for (const x of I) R.set(x, [
        true,
        true,
        true,
        false,
        false,
        false
      ]);
      const H = /* @__PURE__ */ new Map();
      if (Math.abs(o) > 1e-30) {
        const x = o * i * d / u.length;
        u.forEach((S, v) => {
          R.has(v) || H.set(v, [
            0,
            0,
            x,
            0,
            0,
            0
          ]);
        });
      }
      if (e.nodeInputs && (e.nodeInputs.val = {
        supports: R,
        loads: H
      }), e.elementInputs && (e.elementInputs.val = {}), e.analyzeOutputs) {
        const x = /* @__PURE__ */ new Map(), S = /* @__PURE__ */ new Map(), v = /* @__PURE__ */ new Map();
        O.elementResults.forEach((L, N) => {
          x.set(N, [
            L.Mxx,
            L.Mxx,
            L.Mxx
          ]), S.set(N, [
            L.Myy,
            L.Myy,
            L.Myy
          ]), v.set(N, [
            L.Mxy,
            L.Mxy,
            L.Mxy
          ]);
        }), e.analyzeOutputs.val = {
          bendingXX: x,
          bendingYY: S,
          bendingXY: v
        };
      }
      setTimeout(() => st(), 50), Ne();
    }
    function ks() {
      const t = ne("L") || 4, o = ne("H") || 2, n = ne("t") || 0.1, l = ne("E") || 2e7, s = ne("nu") || 0.2, f = l / (2 * (1 + s)), a = ne("q") || -100, i = ne("b") || 0.8, d = ne("meshSize") || 0.2, { nodes: r, elements: c, boundaryIndices: m } = lo({
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
      }), w = r, M = 0.4, y = /* @__PURE__ */ new Map();
      for (let h = 0; h < w.length; h++) {
        const u = w[h][0], E = w[h][1];
        Math.abs(E) < 1e-6 && (u <= M + 1e-6 || u >= t - M - 1e-6) && y.set(h, [
          true,
          true,
          true,
          true,
          true,
          true
        ]);
      }
      const p = (t - i) / 2, g = p + i, I = [];
      for (let h = 0; h < w.length; h++) if (Math.abs(w[h][1] - o) < 1e-6) {
        const u = w[h][0];
        u >= p - 1e-6 && u <= g + 1e-6 && I.push(h);
      }
      const k = a * i / Math.max(I.length, 1), $ = /* @__PURE__ */ new Map();
      for (const h of I) $.set(h, [
        0,
        k,
        0,
        0,
        0,
        0
      ]);
      const T = {
        elasticities: new Map(c.map((h, u) => [
          u,
          l
        ])),
        elasticitiesOrthogonal: new Map(c.map((h, u) => [
          u,
          l
        ])),
        thicknesses: new Map(c.map((h, u) => [
          u,
          n
        ])),
        poissonsRatios: new Map(c.map((h, u) => [
          u,
          s
        ])),
        shearModuli: new Map(c.map((h, u) => [
          u,
          f
        ]))
      }, O = {
        supports: y,
        loads: $
      };
      try {
        const h = pt(w, c, O, T), u = so(w, c, T, h), E = w.map((R) => [
          R[0],
          0,
          R[1]
        ]);
        if (e.nodes.val = E, e.elements.val = c, h && h.deformations) {
          const R = /* @__PURE__ */ new Map();
          h.deformations.forEach((H, x) => {
            R.set(x, [
              H[0],
              H[2],
              H[1],
              H[3],
              H[5],
              H[4]
            ]);
          }), e.deformOutputs && (e.deformOutputs.val = {
            deformations: R
          });
        }
        if (e.nodeInputs) {
          const R = /* @__PURE__ */ new Map();
          y.forEach((x, S) => R.set(S, x));
          const H = /* @__PURE__ */ new Map();
          $.forEach((x, S) => H.set(S, [
            x[0],
            x[2],
            x[1],
            x[3],
            x[5],
            x[4]
          ])), e.nodeInputs && (e.nodeInputs.val = {
            supports: R,
            loads: H
          });
        }
        e.elementInputs && (e.elementInputs.val = {}), e.analyzeOutputs && (e.analyzeOutputs.val = {});
        let P = 0;
        h && h.deformations && h.deformations.forEach((R) => {
          const H = Math.sqrt(R[0] * R[0] + R[1] * R[1] + R[2] * R[2]);
          P = Math.max(P, H);
        }), console.log(`Viga Alta: ${w.length} nodos, ${c.length} triangulos`), console.log(`  L=${t}, H=${o}, t=${n}, E=${l}, nu=${s}`), console.log(`  Carga: q=${a} kN/m sobre ${i}m central`), console.log(`  max|u| = ${P.toExponential(4)}`);
      } catch (h) {
        console.warn("Viga Alta analysis failed:", h.message);
      }
      setTimeout(() => st(), 50), Ne();
    }
    function Is() {
      const t = ne("H") || 4, o = ne("B") || 3, n = ne("tw") || 0.3, l = ne("tb") || 0.4, s = ne("meshSize") || 0.2, f = ne("E") || 25e6, a = ne("nu") || 0.2, i = f / (2 * (1 + a)), d = ne("gamma") || 18, r = ne("Ka") || 0.33, c = ne("Es") || 5e4, m = ne("nus") || 0.3, w = c / (2 * (1 + m)), M = ne("kn") || 1e6, y = ne("ks") || 1e4, p = ne("gammaW") || 9.81, g = ne("Hw") || 3.5, I = ne("qs") || 0, k = Lt, $ = o * 0.3, T = o * 0.7, O = [
        [
          -$,
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
      let h = [], u = [], E = /* @__PURE__ */ new Map(), P = /* @__PURE__ */ new Map(), R;
      if (k === 0) {
        const S = lo({
          points: O,
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
        h = S.nodes, u = S.elements;
        for (let L = 0; L < h.length; L++) Math.abs(h[L][1]) < 1e-6 && E.set(L, [
          true,
          true,
          true,
          true,
          true,
          true
        ]);
        const v = [];
        for (let L = 0; L < h.length; L++) {
          const N = h[L][0], D = h[L][1];
          Math.abs(N - n) < s * 0.6 && D >= l - 1e-6 && v.push({
            idx: L,
            y: D
          });
        }
        v.sort((L, N) => L.y - N.y);
        for (let L = 0; L < v.length; L++) {
          const { idx: N, y: D } = v[L], V = l + t - D, j = r * d * V + r * I;
          let B = s;
          L > 0 && L < v.length - 1 ? B = (v[L + 1].y - v[L - 1].y) / 2 : L === 0 && v.length > 1 ? B = (v[1].y - v[0].y) / 2 : L === v.length - 1 && v.length > 1 && (B = (v[L].y - v[L - 1].y) / 2);
          const te = j * B;
          Math.abs(te) > 1e-10 && P.set(N, [
            te,
            0,
            0,
            0,
            0,
            0
          ]);
        }
        R = {
          elasticities: new Map(u.map((L, N) => [
            N,
            f
          ])),
          elasticitiesOrthogonal: new Map(u.map((L, N) => [
            N,
            f
          ])),
          thicknesses: new Map(u.map((L, N) => [
            N,
            n
          ])),
          poissonsRatios: new Map(u.map((L, N) => [
            N,
            a
          ])),
          shearModuli: new Map(u.map((L, N) => [
            N,
            i
          ]))
        };
      } else if (k === 1 || k === 2) {
        const S = T, v = l + t;
        if (k === 2) {
          const L = [
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
          ], N = Math.max(3, Math.ceil((v - l) / s)), D = [];
          for (let Z = 0; Z <= N; Z++) D.push([
            n,
            l + Z * (v - l) / N,
            0
          ]);
          const V = lo({
            points: [
              ...L,
              ...D
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
          h = V.nodes, u = V.elements;
          const j = s * 0.4, B = [];
          for (let Z = 0; Z < h.length; Z++) {
            const fe = h[Z][0], ze = h[Z][1];
            Math.abs(fe - n) < j && ze >= l - j && B.push(Z);
          }
          B.sort((Z, fe) => h[Z][1] - h[fe][1]);
          const te = [
            B[0]
          ];
          for (let Z = 1; Z < B.length; Z++) {
            const fe = h[B[Z]][1] - h[te[te.length - 1]][1];
            Math.abs(fe) > s * 0.05 && te.push(B[Z]);
          }
          B.length = 0, B.push(...te);
          const oe = /* @__PURE__ */ new Map();
          for (const Z of B) {
            const fe = h.length;
            h.push([
              h[Z][0],
              h[Z][1],
              h[Z][2]
            ]), oe.set(Z, fe);
          }
          const de = u.length, ge = [];
          for (let Z = 0; Z < de; Z++) {
            const fe = u[Z], ze = (h[fe[0]][0] + h[fe[1]][0] + h[fe[2]][0]) / 3, He = (h[fe[0]][1] + h[fe[1]][1] + h[fe[2]][1]) / 3, je = ze >= -$ && ze <= T && He >= 0 && He <= l, tt = ze >= 0 && ze <= n && He >= l && He <= l + t, lt = je || tt;
            if (ge.push(!lt), !lt) for (let ot = 0; ot < fe.length; ot++) {
              const ft = oe.get(fe[ot]);
              ft !== void 0 && (fe[ot] = ft);
            }
          }
          const _ = u.length;
          for (let Z = 0; Z < B.length - 1; Z++) {
            const fe = B[Z], ze = B[Z + 1], He = oe.get(fe), je = oe.get(ze);
            u.push([
              ze,
              fe,
              He,
              je
            ]);
          }
          const se = u.length - _, G = /* @__PURE__ */ new Map(), ae = /* @__PURE__ */ new Map(), Y = /* @__PURE__ */ new Map(), le = /* @__PURE__ */ new Map(), ue = /* @__PURE__ */ new Map();
          for (let Z = 0; Z < de; Z++) ge[Z] ? (G.set(Z, c), ae.set(Z, c), le.set(Z, m), ue.set(Z, w), Y.set(Z, 1)) : (G.set(Z, f), ae.set(Z, f), le.set(Z, a), ue.set(Z, i), Y.set(Z, 1));
          for (let Z = _; Z < u.length; Z++) G.set(Z, M), ae.set(Z, 0), le.set(Z, 0), ue.set(Z, y), Y.set(Z, 0);
          R = {
            elasticities: G,
            elasticitiesOrthogonal: ae,
            thicknesses: Y,
            poissonsRatios: le,
            shearModuli: ue
          };
          for (let Z = 0; Z < h.length; Z++) {
            const fe = h[Z][0], ze = h[Z][1];
            Math.abs(ze) < 1e-6 ? E.set(Z, [
              true,
              true,
              true,
              true,
              true,
              true
            ]) : Math.abs(fe - S) < s * 0.1 && E.set(Z, [
              true,
              false,
              true,
              true,
              true,
              true
            ]);
          }
          for (let Z = 0; Z < de; Z++) {
            if (!ge[Z]) continue;
            const fe = u[Z], ze = h[fe[0]], He = h[fe[1]], je = h[fe[2]], tt = Math.abs((He[0] - ze[0]) * (je[1] - ze[1]) - (je[0] - ze[0]) * (He[1] - ze[1])) / 2, lt = -d * tt / 3;
            for (const ot of fe) {
              const ft = P.get(ot) || [
                0,
                0,
                0,
                0,
                0,
                0
              ];
              ft[1] += lt, P.set(ot, ft);
            }
          }
          if (I > 0) {
            const Z = [];
            for (let fe = 0; fe < h.length; fe++) {
              const ze = h[fe][0], He = h[fe][1];
              Math.abs(He - v) < s * 0.1 && ze > n - 1e-6 && Z.push({
                idx: fe,
                x: ze
              });
            }
            Z.sort((fe, ze) => fe.x - ze.x);
            for (let fe = 0; fe < Z.length; fe++) {
              let ze = s;
              fe > 0 && fe < Z.length - 1 ? ze = (Z[fe + 1].x - Z[fe - 1].x) / 2 : fe === 0 && Z.length > 1 ? ze = (Z[1].x - Z[0].x) / 2 : fe === Z.length - 1 && Z.length > 1 && (ze = (Z[fe].x - Z[fe - 1].x) / 2);
              const He = -I * ze, je = P.get(Z[fe].idx) || [
                0,
                0,
                0,
                0,
                0,
                0
              ];
              je[1] += He, P.set(Z[fe].idx, je);
            }
          }
          console.log(`  Interfaz Goodman: ${B.length} nodos interfaz, ${se} elem interfaz, kn=${M}, ks=${y}`);
        } else {
          const L = [
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
          ], N = [
            [
              n,
              l,
              0
            ]
          ], D = lo({
            points: [
              ...L,
              ...N
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
          h = D.nodes, u = D.elements;
          const V = (_) => {
            const se = (h[_[0]][0] + h[_[1]][0] + h[_[2]][0]) / 3, G = (h[_[0]][1] + h[_[1]][1] + h[_[2]][1]) / 3, ae = se >= -$ && se <= T && G >= 0 && G <= l, Y = se >= 0 && se <= n && G >= l && G <= l + t;
            return ae || Y;
          }, j = /* @__PURE__ */ new Map(), B = /* @__PURE__ */ new Map(), te = /* @__PURE__ */ new Map(), oe = /* @__PURE__ */ new Map(), de = /* @__PURE__ */ new Map(), ge = [];
          for (let _ = 0; _ < u.length; _++) {
            const se = V(u[_]);
            ge.push(!se), se ? (j.set(_, f), B.set(_, f), oe.set(_, a), de.set(_, i), te.set(_, 1)) : (j.set(_, c), B.set(_, c), oe.set(_, m), de.set(_, w), te.set(_, 1));
          }
          R = {
            elasticities: j,
            elasticitiesOrthogonal: B,
            thicknesses: te,
            poissonsRatios: oe,
            shearModuli: de
          };
          for (let _ = 0; _ < h.length; _++) {
            const se = h[_][0], G = h[_][1];
            Math.abs(G) < 1e-6 ? E.set(_, [
              true,
              true,
              true,
              true,
              true,
              true
            ]) : Math.abs(se - S) < s * 0.1 && E.set(_, [
              true,
              false,
              true,
              true,
              true,
              true
            ]);
          }
          for (let _ = 0; _ < u.length; _++) {
            if (!ge[_]) continue;
            const se = u[_], G = h[se[0]], ae = h[se[1]], Y = h[se[2]], le = Math.abs((ae[0] - G[0]) * (Y[1] - G[1]) - (Y[0] - G[0]) * (ae[1] - G[1])) / 2, ue = -d * le / 3;
            for (const Z of se) {
              const fe = P.get(Z) || [
                0,
                0,
                0,
                0,
                0,
                0
              ];
              fe[1] += ue, P.set(Z, fe);
            }
          }
          if (I > 0) {
            const _ = [];
            for (let se = 0; se < h.length; se++) {
              const G = h[se][0], ae = h[se][1];
              Math.abs(ae - v) < s * 0.1 && G > n - 1e-6 && _.push({
                idx: se,
                x: G
              });
            }
            _.sort((se, G) => se.x - G.x);
            for (let se = 0; se < _.length; se++) {
              let G = s;
              se > 0 && se < _.length - 1 ? G = (_[se + 1].x - _[se - 1].x) / 2 : se === 0 && _.length > 1 ? G = (_[1].x - _[0].x) / 2 : se === _.length - 1 && _.length > 1 && (G = (_[se].x - _[se - 1].x) / 2);
              const ae = -I * G, Y = P.get(_[se].idx) || [
                0,
                0,
                0,
                0,
                0,
                0
              ];
              Y[1] += ae, P.set(_[se].idx, Y);
            }
          }
        }
      }
      if (k === 3) {
        const S = lo({
          points: O,
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
        h = S.nodes, u = S.elements;
        for (let V = 0; V < h.length; V++) Math.abs(h[V][1]) < 1e-6 && E.set(V, [
          true,
          true,
          true,
          true,
          true,
          true
        ]);
        const v = l + t, L = Math.min(g, t), N = v - L, D = [];
        for (let V = 0; V < h.length; V++) {
          const j = h[V][0], B = h[V][1];
          Math.abs(j - n) < s * 0.6 && B >= l - 1e-6 && D.push({
            idx: V,
            y: B
          });
        }
        D.sort((V, j) => V.y - j.y);
        for (let V = 0; V < D.length; V++) {
          const { idx: j, y: B } = D[V], te = Math.max(0, v - B);
          if (te <= 0 || B < N - 1e-6) continue;
          const oe = Math.min(te, L), de = p * oe;
          let ge = s;
          V > 0 && V < D.length - 1 ? ge = (D[V + 1].y - D[V - 1].y) / 2 : V === 0 && D.length > 1 ? ge = (D[1].y - D[0].y) / 2 : V === D.length - 1 && D.length > 1 && (ge = (D[V].y - D[V - 1].y) / 2);
          const _ = de * ge;
          Math.abs(_) > 1e-10 && P.set(j, [
            _,
            0,
            0,
            0,
            0,
            0
          ]);
        }
        R = {
          elasticities: new Map(u.map((V, j) => [
            j,
            f
          ])),
          elasticitiesOrthogonal: new Map(u.map((V, j) => [
            j,
            f
          ])),
          thicknesses: new Map(u.map((V, j) => [
            j,
            n
          ])),
          poissonsRatios: new Map(u.map((V, j) => [
            j,
            a
          ])),
          shearModuli: new Map(u.map((V, j) => [
            j,
            i
          ]))
        };
      }
      const H = {
        supports: E,
        loads: P
      }, x = [
        "Rankine (Ka)",
        "Suelo continuo",
        "Interfaz",
        "Presion agua"
      ];
      try {
        const S = pt(h, u, H, R), v = u.filter((te) => te.length === 3), L = {};
        for (const te of Object.keys(R)) {
          const oe = R[te];
          if (oe && oe instanceof Map) {
            const de = /* @__PURE__ */ new Map();
            let ge = 0;
            for (let _ = 0; _ < u.length; _++) u[_].length === 3 && (oe.has(_) && de.set(ge, oe.get(_)), ge++);
            L[te] = de;
          }
        }
        const N = so(h, v, L, S), D = h.map((te) => [
          te[0],
          0,
          te[1]
        ]);
        if (e.nodes.val = D, e.elements.val = v, S && S.deformations) {
          const te = /* @__PURE__ */ new Map();
          S.deformations.forEach((oe, de) => {
            te.set(de, [
              oe[0],
              oe[2],
              oe[1],
              oe[3],
              oe[5],
              oe[4]
            ]);
          }), e.deformOutputs && (e.deformOutputs.val = {
            deformations: te
          });
        }
        const V = /* @__PURE__ */ new Map();
        E.forEach((te, oe) => V.set(oe, te));
        const j = /* @__PURE__ */ new Map();
        P.forEach((te, oe) => j.set(oe, [
          te[0],
          te[2],
          te[1],
          te[3],
          te[5],
          te[4]
        ])), e.nodeInputs && (e.nodeInputs.val = {
          supports: V,
          loads: j
        }), e.elementInputs && (e.elementInputs.val = {}), e.analyzeOutputs && (e.analyzeOutputs.val = {});
        let B = 0;
        S && S.deformations && S.deformations.forEach((te) => {
          const oe = Math.sqrt(te[0] * te[0] + te[1] * te[1] + te[2] * te[2]);
          B = Math.max(B, oe);
        }), console.log(`Muro Contencion [${x[k]}]: ${h.length} nodos, ${u.length} triangulos`), console.log(`  H=${t}, B=${o}, tw=${n}, tb=${l}, Ka=${r}, gamma=${d}, qs=${I}`), k === 1 && console.log(`  Es=${c}, nus=${m}`), k === 2 && console.log(`  Es=${c}, nus=${m}, kn=${M}, ks=${y}`), k === 3 && console.log(`  gammaW=${p}, Hw=${g}`), console.log(`  max|u| = ${B.toExponential(4)}`);
      } catch (S) {
        console.warn("Muro Contencion failed:", S.message);
      }
      setTimeout(() => st(), 50), Ne();
    }
    function zs() {
      const t = ne("Lx") || 2, o = ne("Ly") || 2, n = ne("t") || 0.5, l = ne("colA") || 0.4, s = ne("colH") || 1.5, f = Math.round(ne("nx") || 8), a = Math.round(ne("ny") || 8), i = ne("E") || 25e6, d = ne("nu") || 0.2, r = ne("P") || -500, c = ne("Mx") || 0, m = ne("My") || 0, w = ne("ks") || 2e4, M = t / f, y = o / a, p = t / 2, g = o / 2, I = l / 2, k = [];
      for (let E = 0; E <= a; E++) for (let P = 0; P <= f; P++) {
        const R = E * (f + 1) + P;
        let H = M, x = y;
        (P === 0 || P === f) && (H = M / 2), (E === 0 || E === a) && (x = y / 2), k.push({
          node: R,
          dof: 0,
          k: w * H * x
        });
      }
      let $ = 0;
      for (let E = 0; E <= a; E++) for (let P = 0; P <= f; P++) Math.abs(P * M - p) <= I + 1e-6 && Math.abs(E * y - g) <= I + 1e-6 && $++;
      const T = r / Math.max($, 1), O = [];
      for (let E = 0; E <= a; E++) for (let P = 0; P <= f; P++) {
        const R = P * M, H = E * y;
        Math.abs(R - p) <= I + 1e-6 && Math.abs(H - g) <= I + 1e-6 && O.push({
          node: E * (f + 1) + P,
          dof: 0,
          value: T
        });
      }
      if (Math.abs(c) > 1e-6) {
        const E = I > 1e-6 ? I : y, P = c / E;
        for (let R = 0; R <= a; R++) for (let H = 0; H <= f; H++) {
          const x = H * M, S = R * y;
          if (Math.abs(x - p) <= I + 1e-6 && Math.abs(S - g) <= I + 1e-6) {
            const v = S - g;
            if (Math.abs(v) > 1e-6) {
              const L = v > 0 ? 1 : -1;
              O.push({
                node: R * (f + 1) + H,
                dof: 0,
                value: L * P / $ * 2
              });
            }
          }
        }
      }
      if (Math.abs(m) > 1e-6) {
        const E = I > 1e-6 ? I : M, P = m / E;
        for (let R = 0; R <= a; R++) for (let H = 0; H <= f; H++) {
          const x = H * M, S = R * y;
          if (Math.abs(x - p) <= I + 1e-6 && Math.abs(S - g) <= I + 1e-6) {
            const v = x - p;
            if (Math.abs(v) > 1e-6) {
              const L = v > 0 ? 1 : -1;
              O.push({
                node: R * (f + 1) + H,
                dof: 0,
                value: L * P / $ * 2
              });
            }
          }
        }
      }
      const u = {
        1: 2,
        2: 1,
        3: 0
      }[jt] ?? 1;
      console.log(`Zapata: ${t}x${o}m, t=${n}m, ${f}x${a} elem`), console.log(`  col=${l}m, P=${r}, Mx=${c}, My=${m}, ks=${w}`);
      try {
        const E = Qn({
          E: i,
          nu: d,
          thickness: n,
          meshLx: t,
          meshLy: o,
          meshNx: f,
          meshNy: a,
          bcType: "none",
          pressure: 0,
          theoryType: u,
          springs: k,
          pointLoads: O
        });
        console.log(`  Solved: w_max = ${E.maxW.toExponential(4)}`);
        const P = E.nodeResults.map((N) => [
          N.x,
          N.y,
          0
        ]), R = P.length;
        P.push([
          p - I,
          g - I,
          0
        ]), P.push([
          p + I,
          g - I,
          0
        ]), P.push([
          p + I,
          g + I,
          0
        ]), P.push([
          p - I,
          g + I,
          0
        ]), P.push([
          p - I,
          g - I,
          s
        ]), P.push([
          p + I,
          g - I,
          s
        ]), P.push([
          p + I,
          g + I,
          s
        ]), P.push([
          p - I,
          g + I,
          s
        ]);
        const H = E.elementResults.map((N) => [
          ...N.nodes
        ]);
        H.push([
          R,
          R + 4
        ]), H.push([
          R + 1,
          R + 5
        ]), H.push([
          R + 2,
          R + 6
        ]), H.push([
          R + 3,
          R + 7
        ]), H.push([
          R + 4,
          R + 5
        ]), H.push([
          R + 5,
          R + 6
        ]), H.push([
          R + 6,
          R + 7
        ]), H.push([
          R + 7,
          R + 4
        ]), H.push([
          R,
          R + 1
        ]), H.push([
          R + 1,
          R + 2
        ]), H.push([
          R + 2,
          R + 3
        ]), H.push([
          R + 3,
          R
        ]), e.nodes.val = P, e.elements.val = H;
        const x = /* @__PURE__ */ new Map();
        E.nodeResults.forEach((N, D) => {
          x.set(D, [
            0,
            0,
            N.w,
            N.bx,
            N.by,
            0
          ]);
        }), e.deformOutputs && (e.deformOutputs.val = {
          deformations: x
        });
        const S = /* @__PURE__ */ new Map();
        E.nodeResults.forEach((N, D) => {
          const V = N.x, j = N.y;
          (V < 1e-6 || V > t - 1e-6 || j < 1e-6 || j > o - 1e-6) && S.set(D, [
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
          const N = E.elementResults.length, D = /* @__PURE__ */ new Map(), V = /* @__PURE__ */ new Map(), j = /* @__PURE__ */ new Map();
          E.elementResults.forEach((B, te) => {
            D.set(te, [
              B.Mxx,
              B.Mxx,
              B.Mxx
            ]), V.set(te, [
              B.Myy,
              B.Myy,
              B.Myy
            ]), j.set(te, [
              B.Mxy,
              B.Mxy,
              B.Mxy
            ]);
          }), e.analyzeOutputs.val = {
            bendingXX: D,
            bendingYY: V,
            bendingXY: j
          };
        }
        const L = De();
        L && (L.settings.shellResults.val = "bendingXX");
      } catch (E) {
        console.warn("Zapata solver failed:", E.message);
      }
      setTimeout(() => st(), 50), Ne();
    }
    function Ls() {
      const t = ne("Lx") || 0.4, o = ne("Ly") || 0.4, n = ne("t") || 0.025, l = ne("dBolt") || 0.022, s = ne("sx") || 0.28, f = ne("sy") || 0.28, a = ne("colA") || 0.2, i = ne("meshSize") || 8e-3, d = ne("E") || 2e8, r = ne("nu") || 0.3, c = d / (2 * (1 + r)), m = ne("P") || -200, w = Math.round(ne("nBolts") || 4), M = t / 2, y = o / 2, p = l / 2, g = a / 2, I = [];
      w >= 4 && (I.push([
        M - s / 2,
        y - f / 2
      ]), I.push([
        M + s / 2,
        y - f / 2
      ]), I.push([
        M + s / 2,
        y + f / 2
      ]), I.push([
        M - s / 2,
        y + f / 2
      ])), w >= 6 && (I.push([
        M,
        y - f / 2
      ]), I.push([
        M,
        y + f / 2
      ])), w >= 8 && (I.push([
        M - s / 2,
        y
      ]), I.push([
        M + s / 2,
        y
      ]));
      const { nodes: k, elements: $ } = lo({
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
      }), T = (x, S) => {
        for (const [v, L] of I) if ((x - v) * (x - v) + (S - L) * (S - L) < p * p) return true;
        return false;
      }, O = $.filter((x) => {
        const S = (k[x[0]][0] + k[x[1]][0] + k[x[2]][0]) / 3, v = (k[x[0]][1] + k[x[1]][1] + k[x[2]][1]) / 3;
        return !T(S, v);
      }), h = k, u = /* @__PURE__ */ new Map();
      for (let x = 0; x < h.length; x++) {
        const S = h[x][0], v = h[x][1];
        for (const [L, N] of I) {
          const D = Math.sqrt((S - L) * (S - L) + (v - N) * (v - N));
          D >= p * 0.7 && D <= p * 1.5 && u.set(x, [
            true,
            true,
            true,
            false,
            false,
            false
          ]);
        }
      }
      const E = /* @__PURE__ */ new Map();
      let P = 0;
      for (let x = 0; x < h.length; x++) {
        const S = h[x][0], v = h[x][1];
        Math.abs(S - M) <= g && Math.abs(v - y) <= g && P++;
      }
      const R = m / Math.max(P, 1);
      for (let x = 0; x < h.length; x++) {
        const S = h[x][0], v = h[x][1];
        if (Math.abs(S - M) <= g && Math.abs(v - y) <= g) {
          const L = E.get(x) || [
            0,
            0,
            0,
            0,
            0,
            0
          ];
          L[2] += R, E.set(x, L);
        }
      }
      const H = {
        elasticities: new Map(O.map((x, S) => [
          S,
          d
        ])),
        elasticitiesOrthogonal: new Map(O.map((x, S) => [
          S,
          d
        ])),
        thicknesses: new Map(O.map((x, S) => [
          S,
          n
        ])),
        poissonsRatios: new Map(O.map((x, S) => [
          S,
          r
        ])),
        shearModuli: new Map(O.map((x, S) => [
          S,
          c
        ]))
      };
      console.log(`Placa Base: ${t * 1e3}x${o * 1e3}mm, t=${n * 1e3}mm, ${w} pernos d=${l * 1e3}mm`), console.log(`  P=${m} kN, col=${a * 1e3}mm, mesh=${i * 1e3}mm`), console.log(`  ${O.length} triangulos, ${h.length} nodos`);
      try {
        const x = pt(h, O, {
          supports: u,
          loads: E
        }, H), S = so(h, O, H, x);
        e.nodes.val = h, e.elements.val = O, x && e.deformOutputs && (e.deformOutputs.val = x), e.nodeInputs && (e.nodeInputs.val = {
          supports: u,
          loads: E
        }), e.elementInputs && (e.elementInputs.val = {}), S && e.analyzeOutputs && (e.analyzeOutputs.val = S);
        let v = 0;
        x && x.deformations && x.deformations.forEach((L) => {
          const N = Math.sqrt(L[0] * L[0] + L[1] * L[1] + L[2] * L[2]);
          v = Math.max(v, N);
        }), console.log(`  max|u| = ${v.toExponential(4)}`);
      } catch (x) {
        console.warn("Placa Base failed:", x.message);
      }
      setTimeout(() => st(), 50), Ne();
    }
    function Cs() {
      const t = ne("colB") || 0.3, o = ne("colH") || 0.3, n = ne("colT") || 8e-3, l = ne("colLen") || 1.5, s = ne("Lx") || 0.45, f = ne("Ly") || 0.45, a = ne("tPlaca") || 0.025, i = ne("dBolt") || 0.022, d = ne("sx") || 0.32, r = ne("sy") || 0.32, c = Math.round(ne("nSubColV") || 6), m = Math.round(ne("nSubColH") || 4), w = Math.round(ne("nSubPlaca") || 10), M = ne("E") || 2e8, y = ne("nu") || 0.3, p = M / (2 * (1 + y)), g = ne("P") || -300, I = s / 2, k = f / 2, $ = i / 2, T = t / 2, O = o / 2, h = [], u = [], E = w, P = s / E, R = f / E, H = (ae, Y) => Y * (E + 1) + ae;
      for (let ae = 0; ae <= E; ae++) for (let Y = 0; Y <= E; Y++) h.push([
        Y * P,
        ae * R,
        0
      ]);
      const x = [
        [
          I - d / 2,
          k - r / 2
        ],
        [
          I + d / 2,
          k - r / 2
        ],
        [
          I + d / 2,
          k + r / 2
        ],
        [
          I - d / 2,
          k + r / 2
        ]
      ], S = (ae, Y) => {
        for (const [le, ue] of x) if ((ae - le) * (ae - le) + (Y - ue) * (Y - ue) < $ * $) return true;
        return false;
      }, v = u.length;
      for (let ae = 0; ae < E; ae++) for (let Y = 0; Y < E; Y++) {
        const le = (Y + 0.5) * P, ue = (ae + 0.5) * R;
        S(le, ue) || u.push([
          H(Y, ae),
          H(Y + 1, ae),
          H(Y + 1, ae + 1),
          H(Y, ae + 1)
        ]);
      }
      const L = u.length - v, N = c, D = m, V = [
        [
          I - T,
          k - O
        ],
        [
          I + T,
          k - O
        ],
        [
          I + T,
          k + O
        ],
        [
          I - T,
          k + O
        ]
      ], j = u.length, B = [
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
      ], te = (ae, Y) => {
        for (let le = 0; le < (E + 1) * (E + 1); le++) if (Math.abs(h[le][0] - ae) < P * 0.3 && Math.abs(h[le][1] - Y) < R * 0.3 && Math.abs(h[le][2]) < 1e-6) return le;
        return -1;
      };
      for (const [ae, Y] of B) {
        const [le, ue] = V[ae], [Z, fe] = V[Y], ze = [];
        for (let He = 0; He <= N; He++) {
          const je = [], tt = He / N * l;
          for (let lt = 0; lt <= D; lt++) {
            const ot = lt / D, ft = le + ot * (Z - le), no = ue + ot * (fe - ue);
            if (He === 0) {
              const Et = te(ft, no);
              if (Et >= 0) {
                je.push(Et);
                continue;
              }
            }
            let Pt = -1;
            for (let Et = 0; Et < h.length; Et++) if (Math.abs(h[Et][0] - ft) < 1e-6 && Math.abs(h[Et][1] - no) < 1e-6 && Math.abs(h[Et][2] - tt) < 1e-6) {
              Pt = Et;
              break;
            }
            Pt >= 0 ? je.push(Pt) : (je.push(h.length), h.push([
              ft,
              no,
              tt
            ]));
          }
          ze.push(je);
        }
        for (let He = 0; He < N; He++) for (let je = 0; je < D; je++) u.push([
          ze[He][je],
          ze[He][je + 1],
          ze[He + 1][je + 1],
          ze[He + 1][je]
        ]);
      }
      const oe = u.length - j, de = /* @__PURE__ */ new Map();
      for (let ae = 0; ae < (E + 1) * (E + 1); ae++) {
        const Y = h[ae][0], le = h[ae][1];
        for (const [ue, Z] of x) {
          const fe = Math.sqrt((Y - ue) * (Y - ue) + (le - Z) * (le - Z));
          fe >= $ * 0.5 && fe <= $ * 2 && de.set(ae, [
            true,
            true,
            true,
            true,
            true,
            true
          ]);
        }
      }
      const ge = /* @__PURE__ */ new Map(), _ = [];
      for (let ae = 0; ae < h.length; ae++) Math.abs(h[ae][2] - l) < 1e-6 && _.push(ae);
      const se = g / Math.max(_.length, 1);
      for (const ae of _) ge.set(ae, [
        0,
        0,
        se,
        0,
        0,
        0
      ]);
      const G = {
        elasticities: /* @__PURE__ */ new Map(),
        poissonsRatios: /* @__PURE__ */ new Map(),
        thicknesses: /* @__PURE__ */ new Map(),
        shearModuli: /* @__PURE__ */ new Map()
      };
      for (let ae = v; ae < v + L; ae++) G.elasticities.set(ae, M), G.poissonsRatios.set(ae, y), G.thicknesses.set(ae, a), G.shearModuli.set(ae, p);
      for (let ae = j; ae < j + oe; ae++) G.elasticities.set(ae, M), G.poissonsRatios.set(ae, y), G.thicknesses.set(ae, n), G.shearModuli.set(ae, p);
      console.log(`Col+Placa 3D: col ${t * 1e3}x${o * 1e3}x${n * 1e3}mm, h=${l}m`), console.log(`  Placa ${s * 1e3}x${f * 1e3}mm, t=${a * 1e3}mm, 4 pernos d=${i * 1e3}mm`), console.log(`  ${L} Q4 placa + ${oe} Q4 columna = ${u.length} total`), console.log(`  ${h.length} nodos, P=${g} kN`);
      try {
        const ae = pt(h, u, {
          supports: de,
          loads: ge
        }, G), Y = so(h, u, G, ae);
        e.nodes.val = h, e.elements.val = u, ae && e.deformOutputs && (e.deformOutputs.val = ae), e.nodeInputs && (e.nodeInputs.val = {
          supports: de,
          loads: ge
        }), e.elementInputs && (e.elementInputs.val = G), Y && e.analyzeOutputs && (e.analyzeOutputs.val = Y);
        let le = 0;
        (ae == null ? void 0 : ae.deformations) && ae.deformations.forEach((ue) => {
          const Z = Math.sqrt(ue[0] * ue[0] + ue[1] * ue[1] + ue[2] * ue[2]);
          le = Math.max(le, Z);
        }), console.log(`  max|u| = ${le.toExponential(4)}`);
      } catch (ae) {
        console.warn("Col+Placa failed:", ae.message), e.nodes.val = h, e.elements.val = u, e.nodeInputs && (e.nodeInputs.val = {
          supports: de,
          loads: ge
        });
      }
      setTimeout(() => st(), 50), Ne();
    }
    function Ts() {
      const t = ne("H") || 6, o = ne("angle") || 45, n = ne("bTop") || 3, l = ne("bBot") || 3, s = ne("meshSize") || 2, f = ne("E") || 5e4, a = ne("nu") || 0.3, i = ne("gamma") || 18, d = ne("c") || 15, r = ne("phi") || 30, c = ne("qs") || 0, m = t / Math.tan(o * Math.PI / 180), w = l + m + n, M = t, y = [
        [
          0,
          -M,
          0
        ],
        [
          w,
          -M,
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
      ], { nodes: p, elements: g } = lo({
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
      }), I = p, k = [], $ = /* @__PURE__ */ new Map();
      for (let O = 0; O < I.length; O++) {
        const h = I[O][0], u = I[O][1];
        Math.abs(u + M) < 1e-6 ? (k.push({
          node: O,
          fixX: true,
          fixY: true
        }), $.set(O, [
          true,
          true,
          true,
          true,
          true,
          true
        ])) : (Math.abs(h) < 1e-6 || Math.abs(h - w) < 1e-6) && (k.push({
          node: O,
          fixX: true,
          fixY: false
        }), $.set(O, [
          true,
          false,
          true,
          true,
          true,
          true
        ]));
      }
      const T = t - s * 0.3;
      try {
        const O = I.map((S) => [
          S[0],
          S[1]
        ]), h = g.map((S) => [
          S[0],
          S[1],
          S[2]
        ]), u = ul({
          nodes: O,
          elements: h,
          E: f,
          nu: a,
          gamma: i,
          c: d,
          phi: r,
          thickness: 1,
          supports: k,
          surcharge: c,
          surfaceYThreshold: T
        }), E = I.map((S) => [
          S[0],
          0,
          S[1]
        ]);
        e.nodes.val = E, e.elements.val = g;
        const P = /* @__PURE__ */ new Map();
        for (let S = 0; S < u.displacements.length; S++) {
          const [v, L] = u.displacements[S];
          P.set(S, [
            v,
            0,
            L,
            0,
            0,
            0
          ]);
        }
        e.deformOutputs && (e.deformOutputs.val = {
          deformations: P
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
        let H = 0;
        for (const [S, v] of u.displacements) {
          const L = Math.sqrt(S * S + v * v);
          H = Math.max(H, L);
        }
        let x = 0;
        for (const S of u.plasticStrain) x = Math.max(x, S);
        console.log(`Talud SRM: ${I.length} nodos, ${g.length} triangulos`), console.log(`  H=${t}, angulo=${o}\xB0, c=${d} kPa, \u03C6=${r}\xB0, \u03B3=${i}`), console.log("  \u2550\u2550\u2550 Strength Reduction Method (Mohr-Coulomb) \u2550\u2550\u2550"), console.log(`  FOS = ${u.fos.toFixed(3)}`), console.log(`  max|u| = ${H.toExponential(4)}`), console.log(`  max \u03B5_pl = ${x.toExponential(4)}`), u.fos < 1 ? console.warn("  \u26A0 TALUD INESTABLE (FOS < 1.0)") : u.fos < 1.5 && console.warn("  \u26A0 FOS < 1.5 \u2014 revisar estabilidad");
      } catch (O) {
        console.warn("Talud SRM failed:", O.message);
      }
      setTimeout(() => st(), 50), Ne();
    }
    let Zt = null, bt = null, Qt = null;
    function Sa() {
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
    function rt(t) {
      const o = Wo.find((n) => n.id === q);
      return t / o.toM;
    }
    function it(t) {
      const o = Wo.find((n) => n.id === q);
      return t * o.toM;
    }
    function $o(t) {
      const o = cs.find((l) => l.id === J.forceId), n = Wo.find((l) => l.id === J.lengthId);
      return t / (o.toKN / (n.toM * n.toM));
    }
    function An(t) {
      const o = cs.find((l) => l.id === J.forceId), n = Wo.find((l) => l.id === J.lengthId);
      return t * (o.toKN / (n.toM * n.toM));
    }
    function Pn() {
      return J.label;
    }
    function Ea() {
      switch (Wo.find((o) => o.id === q).id) {
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
    function ka() {
      const t = $o(20594), o = $o(58840), n = Math.max(1, Math.round((o - t) / 40));
      return [
        Math.round(t),
        Math.round(o),
        n
      ];
    }
    function As(t, o, n, l, s) {
      const f = ke.steelVigaType, a = f === 0 ? gn() : hn();
      if (ke.vigaMat === 0) {
        for (let i = 0; i < o.length; i++) {
          const d = o[i], r = `b${n}${i}`, c = `h${n}${i}`, m = {};
          m[r] = +rt(d.b).toFixed(2), m[c] = +rt(d.h).toFixed(2), t.addBinding(m, r, {
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
          const d = (_a2 = i.target) == null ? void 0 : _a2.key, r = d == null ? void 0 : d.match(new RegExp(`^b${n}(\\d+)$`)), c = d == null ? void 0 : d.match(new RegExp(`^h${n}(\\d+)$`));
          r && (o[parseInt(r[1])].b = it(i.value), Me()), c && (o[parseInt(c[1])].h = it(i.value), Me());
        });
      } else if (f <= 1) {
        for (let i = 0; i < o.length; i++) {
          const d = {};
          d[`p${n}${i}`] = o[i].profileIdx ?? 0, t.addBinding(d, `p${n}${i}`, {
            label: `sv${n}${i + 1}`,
            options: a
          });
        }
        t.on("change", (i) => {
          var _a2, _b;
          const r = (_b = (_a2 = i.target) == null ? void 0 : _a2.key) == null ? void 0 : _b.match(new RegExp(`^p${n}(\\d+)$`));
          r && (o[parseInt(r[1])].profileIdx = i.value, Me());
        });
      } else if (f === 2) {
        for (let i = 0; i < o.length; i++) {
          const d = o[i], r = {}, c = `${n}${i}`;
          r[`bf${c}`] = +rt(d.bf ?? 0.2).toFixed(3), r[`h${c}`] = +rt(d.hf ?? 0.4).toFixed(3), r[`tf${c}`] = +rt(d.tf ?? 0.015).toFixed(3), r[`tw${c}`] = +rt(d.tw ?? 0.01).toFixed(3), t.addBinding(r, `bf${c}`, {
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
          const d = (_a2 = i.target) == null ? void 0 : _a2.key;
          for (let r = 0; r < o.length; r++) {
            const c = `${n}${r}`;
            d === `bf${c}` && (o[r].bf = it(i.value), Me()), d === `h${c}` && (o[r].hf = it(i.value), Me()), d === `tf${c}` && (o[r].tf = it(i.value), Me()), d === `tw${c}` && (o[r].tw = it(i.value), Me());
          }
        });
      } else {
        for (let i = 0; i < o.length; i++) {
          const d = o[i], r = {}, c = `${n}${i}`;
          r[`bc${c}`] = +rt(d.bc ?? 0.2).toFixed(3), r[`hc${c}`] = +rt(d.hc ?? 0.3).toFixed(3), r[`t${c}`] = +rt(d.t ?? 8e-3).toFixed(3), t.addBinding(r, `bc${c}`, {
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
          const d = (_a2 = i.target) == null ? void 0 : _a2.key;
          for (let r = 0; r < o.length; r++) {
            const c = `${n}${r}`;
            d === `bc${c}` && (o[r].bc = it(i.value), Me()), d === `hc${c}` && (o[r].hc = it(i.value), Me()), d === `t${c}` && (o[r].t = it(i.value), Me());
          }
        });
      }
    }
    function Fo() {
      var _a2;
      if (bt) {
        try {
          bt.dispose();
        } catch {
        }
        bt = null;
      }
      const t = document.getElementById("sections");
      if (t && (t.innerHTML = ""), A !== "edificio" && A !== "frame") {
        t && (t.style.display = "none");
        return;
      }
      const o = Sa();
      if (!o) return;
      o.style.display = "";
      const n = z, l = Math.round(((_a2 = U.nPisos) == null ? void 0 : _a2.val) ?? 3), s = Ea(), f = ka(), a = ce.length || 1, i = re.length || 1;
      for (; ke.perFloor.length < l; ) {
        const h = ke.perFloor.length > 0 ? JSON.parse(JSON.stringify(ke.perFloor[ke.perFloor.length - 1])) : wa(a, i);
        ke.perFloor.push(h);
      }
      ke.perFloor.length > l && (ke.perFloor.length = l);
      for (const h of ke.perFloor) {
        for (; h.vigasX.length < a; ) h.vigasX.push(h.vigasX.length > 0 ? {
          ...h.vigasX[h.vigasX.length - 1]
        } : Jt());
        for (h.vigasX.length > a && (h.vigasX.length = a); h.vigasY.length < i; ) h.vigasY.push(h.vigasY.length > 0 ? {
          ...h.vigasY[h.vigasY.length - 1]
        } : Jt());
        h.vigasY.length > i && (h.vigasY.length = i);
      }
      bt = new tn({
        title: `Sections (${n.label})`,
        container: o
      });
      const d = {
        colMat: ke.colMat
      };
      if (bt.addBinding(d, "colMat", {
        label: "Col Material",
        options: {
          Hormigon: 0,
          Acero: 1,
          CFT: 2
        }
      }).on("change", (h) => {
        ke.colMat = h.value, Fo(), Me();
      }), ke.colMat === 0) {
        const h = {
          forma: ke.colShape
        };
        bt.addBinding(h, "forma", {
          label: "Col forma",
          options: {
            Rectangular: 0,
            Circular: 1
          }
        }).on("change", (E) => {
          ke.colShape = E.value, Fo(), Me();
        });
        const u = {
          fc: +$o(ke.fc).toFixed(1)
        };
        bt.addBinding(u, "fc", {
          min: f[0],
          max: f[1],
          step: f[2],
          label: `f'c col (${Pn()})`
        }), bt.on("change", (E) => {
          var _a3;
          ((_a3 = E.target) == null ? void 0 : _a3.key) === "fc" && (ke.fc = An(E.value), Me());
        });
      } else if (ke.colMat === 1) {
        const h = {
          colType: ke.steelColType
        };
        bt.addBinding(h, "colType", {
          label: "Col tipo",
          options: {
            "W profile": 0,
            "HSS profile": 1,
            "I param": 2,
            Tubular: 3
          }
        }).on("change", (u) => {
          ke.steelColType = u.value, Fo(), Me();
        });
      }
      bt.addBlade({
        view: "separator"
      });
      const r = {
        vigaMat: ke.vigaMat
      };
      if (bt.addBinding(r, "vigaMat", {
        label: "Viga Material",
        options: {
          Hormigon: 0,
          Acero: 1
        }
      }).on("change", (h) => {
        ke.vigaMat = h.value, Fo(), Me();
      }), ke.vigaMat === 1) {
        const h = {
          vigaType: ke.steelVigaType
        };
        bt.addBinding(h, "vigaType", {
          label: "Viga tipo",
          options: {
            "W profile": 0,
            "HSS profile": 1,
            "I param": 2,
            Tubular: 3
          }
        }).on("change", (u) => {
          ke.steelVigaType = u.value, Fo(), Me();
        });
      }
      const c = ke.steelColType === 0 ? gn() : hn();
      ke.steelVigaType === 0 ? gn() : hn();
      const m = q === "m" ? [
        5e-3,
        0.1,
        1e-3
      ] : q === "cm" ? [
        0.5,
        10,
        0.1
      ] : q === "mm" ? [
        5,
        100,
        1
      ] : q === "in" ? [
        0.2,
        4,
        0.05
      ] : [
        0.01,
        0.5,
        5e-3
      ];
      for (let h = 0; h < l; h++) {
        const u = ke.perFloor[h], E = bt.addFolder({
          title: `Piso ${h + 1}`,
          expanded: h < 2
        });
        if (ke.colMat === 0) if (ke.colShape === 1) {
          const P = {
            dCol: +rt(u.dCol).toFixed(2)
          };
          E.addBinding(P, "dCol", {
            min: s[0],
            max: s[1],
            step: s[2],
            label: "d col"
          }), E.on("change", (R) => {
            var _a3;
            ((_a3 = R.target) == null ? void 0 : _a3.key) === "dCol" && (u.dCol = it(R.value), Me());
          });
        } else {
          const P = {
            bCol: +rt(u.bCol).toFixed(2),
            hCol: +rt(u.hCol).toFixed(2)
          };
          E.addBinding(P, "bCol", {
            min: s[0],
            max: s[1],
            step: s[2],
            label: "b col"
          }), E.addBinding(P, "hCol", {
            min: s[0],
            max: s[1],
            step: s[2],
            label: "h col"
          }), E.on("change", (R) => {
            var _a3, _b;
            ((_a3 = R.target) == null ? void 0 : _a3.key) === "bCol" && (u.bCol = it(R.value), Me()), ((_b = R.target) == null ? void 0 : _b.key) === "hCol" && (u.hCol = it(R.value), Me());
          });
        }
        else if (ke.colMat === 1) if (ke.steelColType <= 1) {
          const P = {
            col: u.colProfileIdx
          };
          E.addBinding(P, "col", {
            label: "Columna",
            options: c
          }).on("change", (R) => {
            u.colProfileIdx = R.value, Me();
          });
        } else if (ke.steelColType === 2) {
          const P = {
            bf: +rt(u.colBf ?? 0.3).toFixed(3),
            h: +rt(u.colHf ?? 0.3).toFixed(3),
            tf: +rt(u.colTf ?? 0.02).toFixed(3),
            tw: +rt(u.colTw ?? 0.012).toFixed(3)
          };
          E.addBinding(P, "bf", {
            min: s[0],
            max: s[1],
            step: s[2],
            label: "Col bf"
          }), E.addBinding(P, "h", {
            min: s[0],
            max: s[1],
            step: s[2],
            label: "Col h"
          }), E.addBinding(P, "tf", {
            min: m[0],
            max: m[1],
            step: m[2],
            label: "Col tf"
          }), E.addBinding(P, "tw", {
            min: m[0],
            max: m[1],
            step: m[2],
            label: "Col tw"
          }), E.on("change", (R) => {
            var _a3, _b, _c, _d;
            ((_a3 = R.target) == null ? void 0 : _a3.key) === "bf" && (u.colBf = it(R.value), Me()), ((_b = R.target) == null ? void 0 : _b.key) === "h" && (u.colHf = it(R.value), Me()), ((_c = R.target) == null ? void 0 : _c.key) === "tf" && (u.colTf = it(R.value), Me()), ((_d = R.target) == null ? void 0 : _d.key) === "tw" && (u.colTw = it(R.value), Me());
          });
        } else {
          const P = {
            bc: +rt(u.colBc ?? 0.3).toFixed(3),
            hc: +rt(u.colHc ?? 0.3).toFixed(3),
            t: +rt(u.colT ?? 0.01).toFixed(3)
          };
          E.addBinding(P, "bc", {
            min: s[0],
            max: s[1],
            step: s[2],
            label: "Col b"
          }), E.addBinding(P, "hc", {
            min: s[0],
            max: s[1],
            step: s[2],
            label: "Col h"
          }), E.addBinding(P, "t", {
            min: m[0],
            max: m[1],
            step: m[2],
            label: "Col t"
          }), E.on("change", (R) => {
            var _a3, _b, _c;
            ((_a3 = R.target) == null ? void 0 : _a3.key) === "bc" && (u.colBc = it(R.value), Me()), ((_b = R.target) == null ? void 0 : _b.key) === "hc" && (u.colHc = it(R.value), Me()), ((_c = R.target) == null ? void 0 : _c.key) === "t" && (u.colT = it(R.value), Me());
          });
        }
        else {
          const P = {
            bc: +rt(u.colBc ?? 0.3).toFixed(3),
            hc: +rt(u.colHc ?? 0.3).toFixed(3),
            t: +rt(u.colT ?? 0.01).toFixed(3),
            Es: +$o(u.colEs ?? 2e8).toFixed(0),
            nuS: u.colNuS ?? 0.3,
            fc: +$o(u.colFc ?? 28e3).toFixed(1),
            nuC: u.colNuC ?? 0.2
          };
          E.addBinding(P, "bc", {
            min: s[0],
            max: s[1],
            step: s[2],
            label: "Col b"
          }), E.addBinding(P, "hc", {
            min: s[0],
            max: s[1],
            step: s[2],
            label: "Col h"
          }), E.addBinding(P, "t", {
            min: m[0],
            max: m[1],
            step: m[2],
            label: "Col t"
          }), E.addBlade({
            view: "separator"
          });
          const R = +$o(1e8).toFixed(0), H = +$o(3e8).toFixed(0), x = Math.max(1, Math.round((H - R) / 200));
          E.addBinding(P, "Es", {
            min: R,
            max: H,
            step: x,
            label: `Es (${Pn()})`
          }), E.addBinding(P, "nuS", {
            min: 0.15,
            max: 0.45,
            step: 0.01,
            label: "\u03BDs"
          }), E.addBinding(P, "fc", {
            min: f[0],
            max: f[1],
            step: f[2],
            label: `f'c (${Pn()})`
          }), E.addBinding(P, "nuC", {
            min: 0.1,
            max: 0.35,
            step: 0.01,
            label: "\u03BDc"
          }), E.on("change", (S) => {
            var _a3, _b, _c, _d, _e2, _f, _g;
            ((_a3 = S.target) == null ? void 0 : _a3.key) === "bc" && (u.colBc = it(S.value), Me()), ((_b = S.target) == null ? void 0 : _b.key) === "hc" && (u.colHc = it(S.value), Me()), ((_c = S.target) == null ? void 0 : _c.key) === "t" && (u.colT = it(S.value), Me()), ((_d = S.target) == null ? void 0 : _d.key) === "Es" && (u.colEs = An(S.value), Me()), ((_e2 = S.target) == null ? void 0 : _e2.key) === "nuS" && (u.colNuS = S.value, Me()), ((_f = S.target) == null ? void 0 : _f.key) === "fc" && (u.colFc = An(S.value), Me()), ((_g = S.target) == null ? void 0 : _g.key) === "nuC" && (u.colNuC = S.value, Me());
          });
        }
        if (u.vigasX.length > 0) {
          const P = E.addFolder({
            title: `Vigas X (${u.vigasX.length})`,
            expanded: false
          });
          As(P, u.vigasX, "x", s, m);
        }
        if (u.vigasY.length > 0) {
          const P = E.addFolder({
            title: `Vigas Y (${u.vigasY.length})`,
            expanded: false
          });
          As(P, u.vigasY, "y", s, m);
        }
      }
      bt.addBlade({
        view: "separator"
      });
      const w = bt.addFolder({
        title: "Vigas Secundarias",
        expanded: false
      }), M = {
        activar: Ze,
        direccion: xt === "x" ? 0 : 1,
        cantidad: Ve
      };
      w.addBinding(M, "activar", {
        label: "Activar"
      }), w.addBinding(M, "direccion", {
        label: "Corren en",
        options: {
          "X (entre ejes Y)": 0,
          "Y (entre ejes X)": 1
        }
      }), w.addBinding(M, "cantidad", {
        min: 1,
        max: 5,
        step: 1,
        label: "Cantidad/vano"
      }), w.on("change", (h) => {
        var _a3, _b, _c;
        ((_a3 = h.target) == null ? void 0 : _a3.key) === "activar" && (Ze = h.value, Me()), ((_b = h.target) == null ? void 0 : _b.key) === "direccion" && (xt = h.value === 0 ? "x" : "y", Me()), ((_c = h.target) == null ? void 0 : _c.key) === "cantidad" && (Ve = Math.round(h.value), Me());
      }), bt.addBlade({
        view: "separator"
      });
      const y = bt.addFolder({
        title: "Losas de Piso",
        expanded: true
      }), p = {
        activar: qt,
        espesor: +rt(Nt).toFixed(3),
        subdivX: To,
        subdivY: Ao
      };
      y.addBinding(p, "activar", {
        label: "Activar losas"
      }), y.addBinding(p, "espesor", {
        min: s[0],
        max: s[1] * 0.3,
        step: s[2],
        label: `Espesor (${n.length})`
      }), y.addBinding(p, "subdivX", {
        min: 1,
        max: 6,
        step: 1,
        label: "Subdiv. X"
      }), y.addBinding(p, "subdivY", {
        min: 1,
        max: 6,
        step: 1,
        label: "Subdiv. Y"
      }), y.on("change", (h) => {
        var _a3, _b, _c, _d;
        ((_a3 = h.target) == null ? void 0 : _a3.key) === "activar" && (qt = h.value, Me()), ((_b = h.target) == null ? void 0 : _b.key) === "espesor" && (Nt = it(h.value), Me()), ((_c = h.target) == null ? void 0 : _c.key) === "subdivX" && (To = Math.round(h.value), Me()), ((_d = h.target) == null ? void 0 : _d.key) === "subdivY" && (Ao = Math.round(h.value), Me());
      }), bt.addBlade({
        view: "separator"
      });
      const g = bt.addFolder({
        title: "Muros de Corte",
        expanded: true
      }), I = {
        espesor: +rt(Ye).toFixed(3),
        subdivH: nt,
        subdivW: Ke
      };
      g.addBinding(I, "espesor", {
        min: s[0],
        max: s[1],
        step: s[2],
        label: `Espesor (${n.length})`
      }), g.addBinding(I, "subdivH", {
        min: 1,
        max: 6,
        step: 1,
        label: "Subdiv. V"
      }), g.addBinding(I, "subdivW", {
        min: 1,
        max: 6,
        step: 1,
        label: "Subdiv. H"
      }), g.on("change", (h) => {
        var _a3, _b, _c;
        ((_a3 = h.target) == null ? void 0 : _a3.key) === "espesor" && (Ye = it(h.value), Me()), ((_b = h.target) == null ? void 0 : _b.key) === "subdivH" && (nt = Math.round(h.value), Me()), ((_c = h.target) == null ? void 0 : _c.key) === "subdivW" && (Ke = Math.round(h.value), Me());
      });
      const k = ce.length || 1, $ = re.length || 1, T = k + 1, O = $ + 1;
      if (k > 0) {
        const h = g.addFolder({
          title: `Muros dir X (${k} vanos)`,
          expanded: false
        });
        for (let u = 0; u < k; u++) for (let E = 0; E < O; E++) {
          const P = `wx_${u}_${E}`, R = qe.some((S) => S.dir === "x" && S.bay === u && S.axisIdx === E), H = {};
          H[P] = R;
          const x = `Vano X${u + 1} / Eje Y${String.fromCharCode(65 + E)}`;
          h.addBinding(H, P, {
            label: x
          }).on("change", (S) => {
            S.value ? qe.push({
              dir: "x",
              bay: u,
              axisIdx: E,
              floors: [
                -1
              ]
            }) : qe = qe.filter((v) => !(v.dir === "x" && v.bay === u && v.axisIdx === E)), Me();
          });
        }
      }
      if ($ > 0) {
        const h = g.addFolder({
          title: `Muros dir Y (${$} vanos)`,
          expanded: false
        });
        for (let u = 0; u < $; u++) for (let E = 0; E < T; E++) {
          const P = `wy_${u}_${E}`, R = qe.some((S) => S.dir === "y" && S.bay === u && S.axisIdx === E), H = {};
          H[P] = R;
          const x = `Vano Y${u + 1} / Eje X${E + 1}`;
          h.addBinding(H, P, {
            label: x
          }).on("change", (S) => {
            S.value ? qe.push({
              dir: "y",
              bay: u,
              axisIdx: E,
              floors: [
                -1
              ]
            }) : qe = qe.filter((v) => !(v.dir === "y" && v.bay === u && v.axisIdx === E)), Me();
          });
        }
      }
      if (qe.length > 0) {
        g.addBlade({
          view: "separator"
        });
        const h = {
          muros: `${qe.length} ubicaciones`
        };
        g.addBinding(h, "muros", {
          label: "Total",
          readonly: true
        });
      }
    }
    function Kt() {
      const t = document.getElementById("parameters");
      if (!t) return;
      if (be || (be = t.innerHTML), Se) {
        try {
          Se.dispose();
        } catch {
        }
        Se = null;
      }
      if (Zt) {
        try {
          Zt.dispose();
        } catch {
        }
        Zt = null;
      }
      t.innerHTML = "";
      const o = A.charAt(0).toUpperCase() + A.slice(1);
      Se = new tn({
        title: `Parameters \u2014 ${o}`,
        container: t
      });
      const n = hs()[A];
      if (n) {
        const s = {};
        for (const d of n) {
          const r = U[d.key], c = r.min === 0 && r.max === 1 && r.step === 1;
          s[d.key] = c ? r.val >= 0.5 : r.val;
        }
        const f = n.filter((d) => {
          const r = U[d.key];
          return r.min === 0 && r.max === 1 && r.step === 1;
        }), a = n.filter((d) => {
          const r = U[d.key];
          return !(r.min === 0 && r.max === 1 && r.step === 1);
        });
        for (const d of a) {
          const r = U[d.key];
          Se.addBinding(s, d.key, {
            min: r.min,
            max: r.max,
            step: r.step,
            label: r.label
          });
        }
        if (f.length > 0) {
          const d = Se.addFolder({
            title: tr("Apoyos DOFs"),
            expanded: false
          });
          for (const r of f) d.addBinding(s, r.key, {
            label: U[r.key].label
          });
        }
        const i = Se.addFolder({
          title: "Rangos",
          expanded: false
        });
        for (const d of a) {
          const r = {
            min: U[d.key].min,
            max: U[d.key].max
          };
          i.addBinding(r, "min", {
            label: `${d.key} min`,
            step: d.step
          }), i.addBinding(r, "max", {
            label: `${d.key} max`,
            step: d.step
          }), i.on("change", () => {
            U[d.key] && (U[d.key].min = r.min, U[d.key].max = r.max, U[d.key].val < r.min && (U[d.key].val = r.min), U[d.key].val > r.max && (U[d.key].val = r.max)), Kt(), Me();
          });
        }
        Se.on("change", (d) => {
          var _a2, _b;
          const r = (_a2 = d.target) == null ? void 0 : _a2.key;
          if (r && U[r]) {
            if (U[r].val = typeof d.value == "boolean" ? d.value ? 1 : 0 : d.value, A === "edificio" && (r === "nVanosX" || r === "nVanosY" || r === "nPisos")) {
              if (r === "nVanosX" || r === "nVanosY") {
                const c = Math.round(U.nVanosX.val), m = Math.round(U.nVanosY.val);
                for (; ce.length < c; ) ce.push(ce[ce.length - 1] ?? z.defaultSpan);
                for (ce.length > c && (ce.length = c); re.length < m; ) re.push(re[re.length - 1] ?? z.defaultSpan * 0.8);
                re.length > m && (re.length = m);
              }
              if (r === "nPisos" || r === "hPiso") {
                const c = Math.round(U.nPisos.val), m = ((_b = U.hPiso) == null ? void 0 : _b.val) ?? 3;
                for (; ie.length < c; ) ie.push(ie[ie.length - 1] ?? m);
                ie.length > c && (ie.length = c);
              }
              Kt();
            }
            Me();
          }
        });
      }
      if (A === "edificio") {
        if (Qt) {
          try {
            Qt.dispose();
          } catch {
          }
          Qt = null;
        }
        const s = document.getElementById("luces-panel");
        if (s) {
          let f = function() {
            var _a2, _b, _c, _d;
            const d = "ABCDEFGHIJKLMNOPQRSTUVWXYZ", r = ((_a2 = U.Lvix) == null ? void 0 : _a2.val) || 0, c = ((_b = U.Lvdx) == null ? void 0 : _b.val) || 0, m = ((_c = U.Lviy) == null ? void 0 : _c.val) || 0, w = ((_d = U.Lvdy) == null ? void 0 : _d.val) || 0;
            let M = "X: ";
            r > 0 && (M += `\u251C${r.toFixed(1)}\u2524`);
            for (let g = 0; g < ce.length; g++) M += `[${d[g + (r > 0 ? 1 : 0)]}]\u2500\u2500${ce[g].toFixed(1)}\u2500\u2500`;
            M += `[${d[ce.length + (r > 0 ? 1 : 0)]}]`, c > 0 && (M += `\u251C${c.toFixed(1)}\u2524`);
            let y = "Y: ";
            m > 0 && (y += `\u251C${m.toFixed(1)}\u2524`);
            for (let g = 0; g < re.length; g++) y += `[${g + 1 + (m > 0 ? 1 : 0)}]\u2500\u2500${re[g].toFixed(1)}\u2500\u2500`;
            y += `[${re.length + 1 + (m > 0 ? 1 : 0)}]`, w > 0 && (y += `\u251C${w.toFixed(1)}\u2524`);
            let p = "Z: ";
            for (let g = 0; g < ie.length; g++) p += `P${g + 1}=${ie[g].toFixed(1)} `;
            i.textContent = M + `
` + y + `
` + p;
          };
          s.innerHTML = "";
          const a = z;
          try {
            Qt = new tn({
              title: `Luces (${a.length})`,
              container: s
            });
            const d = Qt.addFolder({
              title: "Luces X",
              expanded: true
            });
            for (let c = 0; c < ce.length; c++) {
              const m = c, w = {
                v: ce[c]
              };
              d.addBinding(w, "v", {
                min: a.spanRange[0],
                max: a.spanRange[1],
                step: a.spanRange[2],
                label: `svx${c + 1}`
              }).on("change", (M) => {
                ce[m] = M.value, Me();
              });
            }
            const r = Qt.addFolder({
              title: "Luces Y",
              expanded: true
            });
            for (let c = 0; c < re.length; c++) {
              const m = c, w = {
                v: re[c]
              };
              r.addBinding(w, "v", {
                min: a.spanRange[0],
                max: a.spanRange[1],
                step: a.spanRange[2],
                label: `svy${c + 1}`
              }).on("change", (M) => {
                re[m] = M.value, Me();
              });
            }
            if (ie.length > 0) {
              const c = Qt.addFolder({
                title: "Alturas por Piso",
                expanded: true
              });
              for (let m = 0; m < ie.length; m++) {
                const w = m, M = {
                  v: ie[m]
                };
                c.addBinding(M, "v", {
                  min: a.heightRange[0],
                  max: a.heightRange[1],
                  step: a.heightRange[2],
                  label: `Piso ${m + 1}`
                }).on("change", (y) => {
                  ie[w] = y.value, Me();
                });
              }
            }
          } catch (d) {
            console.error("Luces Tweakpane error:", d);
          }
          const i = document.createElement("div");
          i.style.cssText = "font-family:monospace;font-size:10px;color:#aaa;padding:6px;background:#1a1a2e;border-radius:4px;margin-top:6px;line-height:1.6;white-space:pre;overflow-x:auto;", f(), s.appendChild(i);
        }
      }
      if (Fo(), Se) {
        Se.addBlade({
          view: "separator"
        });
        const s = bn()[A];
        if (s && s.length > 0) {
          const f = {};
          s.forEach((i, d) => {
            f[i.label] = d;
          });
          const a = {
            apoyo: Lt
          };
          Se.addBinding(a, "apoyo", {
            label: "Apoyo",
            options: f
          }).on("change", (i) => {
            Lt = i.value, Me();
          });
        }
        if (A === "placa-3q" || A === "placa-q4") {
          const f = {
            teoria: jt
          };
          Se.addBinding(f, "teoria", {
            label: "Teor\xEDa",
            options: {
              Membrana: 1,
              "Kirchhoff (delgada)": 2,
              "Mindlin (gruesa)": 3
            }
          }).on("change", (a) => {
            jt = a.value, Me();
          });
        }
      }
      const l = xs()[A];
      if (l && l.length > 0) {
        Zt = new tn({
          title: `Cargas Est\xE1ticas \u2014 ${o}`,
          container: t
        });
        const s = {};
        for (const a of l) s[a.key] = Xe[a.key].val;
        for (const a of l) Zt.addBinding(s, a.key, {
          min: Xe[a.key].min,
          max: Xe[a.key].max,
          step: Xe[a.key].step,
          label: Xe[a.key].label
        });
        const f = Zt.addFolder({
          title: "Rangos",
          expanded: false
        });
        for (const a of l) {
          const i = {
            min: Xe[a.key].min,
            max: Xe[a.key].max
          };
          f.addBinding(i, "min", {
            label: `${a.key} min`,
            step: a.step
          }), f.addBinding(i, "max", {
            label: `${a.key} max`,
            step: a.step
          }), f.on("change", () => {
            Xe[a.key] && (Xe[a.key].min = i.min, Xe[a.key].max = i.max, Xe[a.key].val < i.min && (Xe[a.key].val = i.min), Xe[a.key].val > i.max && (Xe[a.key].val = i.max)), Kt(), Me();
          });
        }
        Zt.on("change", (a) => {
          var _a2;
          const i = (_a2 = a.target) == null ? void 0 : _a2.key;
          if (i && Xe[i]) {
            if (Xe[i].val = a.value, e.nodeInputs) {
              const d = e.nodeInputs.val;
              d.supports && (e.nodeInputs.val = {
                supports: d.supports
              });
            }
            setTimeout(() => _n(), 30);
          }
        });
      }
      window.__cad = {
        setParam: (s, f) => {
          if (U[s]) U[s].val = f, Me(), Kt();
          else if (Xe[s]) {
            if (Xe[s].val = f, e.nodeInputs) {
              const a = e.nodeInputs.val;
              a.supports && (e.nodeInputs.val = {
                supports: a.supports
              });
            }
            setTimeout(() => {
              _n(), Kt();
            }, 30);
          }
        },
        getParams: () => {
          const s = {};
          for (const f in U) s[f] = U[f].val;
          for (const f in Xe) s[f] = Xe[f].val;
          return s;
        },
        setGenerator: Be,
        createCustomPanel: (s, f, a) => Ia(s, f, a),
        removeCustomPanel: (s) => {
          Ps(s);
        }
      };
    }
    const Fn = /* @__PURE__ */ new Map();
    function Ia(t, o, n) {
      var _a2;
      Ps(t);
      let l = document.querySelector("#cad3d-custom-panels");
      if (!l) {
        l = document.createElement("div"), l.id = "cad3d-custom-panels";
        const i = document.querySelector("#parameters");
        i ? (_a2 = i.parentElement) == null ? void 0 : _a2.insertBefore(l, i.nextSibling) : document.body.appendChild(l);
      }
      const s = document.createElement("div");
      s.className = "cad3d-custom-panel", s.style.marginBottom = "4px", l.appendChild(s);
      const f = new tn({
        title: t,
        container: s
      }), a = {};
      for (const [i, d] of Object.entries(o)) {
        const r = d.label || i;
        if (Array.isArray(d.value)) {
          a[i] = d.value;
          const c = {
            [i]: d.value.join(", ")
          };
          f.addBinding(c, i, {
            label: r
          }).on("change", (m) => {
            a[i] = m.value.split(",").map((w) => parseFloat(w.trim())).filter((w) => !isNaN(w)), n && n({
              ...a
            });
          });
        } else if (d.options) {
          a[i] = d.value;
          const c = {
            [i]: d.value
          }, m = {};
          for (const w of d.options) m[w] = w;
          f.addBinding(c, i, {
            label: r,
            options: m
          }).on("change", (w) => {
            a[i] = w.value, n && n({
              ...a
            });
          });
        } else if (typeof d.value == "boolean") {
          a[i] = d.value;
          const c = {
            [i]: d.value
          };
          f.addBinding(c, i, {
            label: r
          }).on("change", (m) => {
            a[i] = m.value, n && n({
              ...a
            });
          });
        } else if (typeof d.value == "string") {
          a[i] = d.value;
          const c = {
            [i]: d.value
          };
          f.addBinding(c, i, {
            label: r
          }).on("change", (m) => {
            a[i] = m.value, n && n({
              ...a
            });
          });
        } else {
          a[i] = d.value;
          const c = {
            [i]: d.value
          }, m = {
            label: r
          };
          d.min !== void 0 && (m.min = d.min), d.max !== void 0 && (m.max = d.max), d.step !== void 0 && (m.step = d.step), f.addBinding(c, i, m).on("change", (w) => {
            a[i] = w.value, n && n({
              ...a
            });
          });
        }
      }
      return n && f.addButton({
        title: "Aplicar"
      }).on("click", () => {
        n({
          ...a
        });
      }), Fn.set(t, {
        pane: f,
        values: a
      }), console.log(`Panel "${t}" created with ${Object.keys(o).length} params`), a;
    }
    function Ps(t) {
      const o = Fn.get(t);
      if (o) {
        try {
          o.pane.dispose();
        } catch {
        }
        Fn.delete(t);
      }
    }
    function za() {
      if (Se) {
        try {
          Se.dispose();
        } catch {
        }
        Se = null;
      }
      if (Zt) {
        try {
          Zt.dispose();
        } catch {
        }
        Zt = null;
      }
      if (bt) {
        try {
          bt.dispose();
        } catch {
        }
        bt = null;
      }
      if (Qt) {
        try {
          Qt.dispose();
        } catch {
        }
        Qt = null;
      }
      const t = document.getElementById("sections");
      t && t.remove();
      const o = document.getElementById("right-panels-wrapper"), n = document.getElementById("parameters");
      o && n && (n.style.cssText = "", document.body.appendChild(n), o.remove()), n && be && (n.innerHTML = be);
    }
    const ye = document.createElement("div");
    ye.id = "cad3d-panel";
    const Fs = document.createElement("style");
    Fs.textContent = `
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
  `, document.head.appendChild(Fs), cl() === "light" && document.documentElement.classList.add("awatif-light"), dl((t) => {
      t === "light" ? document.documentElement.classList.add("awatif-light") : document.documentElement.classList.remove("awatif-light"), A && st(true);
    }), ye.innerHTML = `
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
    let gt = null;
    function La() {
      var _a2, _b, _c, _d, _e2, _f;
      const t = e.nodes.val, o = e.elements.val, n = (_a2 = e.nodeInputs) == null ? void 0 : _a2.val, l = (_b = e.elementInputs) == null ? void 0 : _b.val, s = q, f = b, a = [];
      if (a.push("# Awatif FEM \u2014 Model Export"), a.push(`# Generator: ${A || "custom"}`), a.push(`# Units: ${f}, ${s}`), a.push(`# ${(/* @__PURE__ */ new Date()).toISOString()}`), a.push(""), a.push(`## NODES (${t.length})`), a.push("# idx     X          Y          Z"), t.forEach((r, c) => {
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
          const w = r.map((M) => {
            var _a3;
            const y = (_a3 = M.map) == null ? void 0 : _a3.get(m);
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
      const d = (_f = (_e2 = e.deformOutputs) == null ? void 0 : _e2.val) == null ? void 0 : _f.reactions;
      if (d && d.size > 0 && (a.push(`## REACTIONS (${d.size} supports)`), a.push("# node          Rx           Ry           Rz           Mx           My           Mz"), d.forEach((r, c) => {
        const m = r.map((w) => w.toFixed(4).padStart(12)).join(" ");
        a.push(`  ${String(c).padStart(4)}  ${m}`);
      }), a.push("")), A) {
        a.push("## CLI COMMAND");
        const r = Object.entries(U).map(([c, m]) => `${c}=${m.val}`).join(" ");
        a.push(`cad.${A === "edificio" ? "building" : A}(${r})`);
      }
      return a.join(`
`);
    }
    let Jo = false;
    function Ca() {
      var _a2, _b, _c, _d;
      if (gt) {
        gt.remove(), gt = null, Jo = false;
        return;
      }
      const t = La();
      gt = document.createElement("div"), gt.id = "export-overlay", gt.style.cssText = `
      position:fixed; bottom:10px; right:10px; z-index:10000;
      width:720px; max-width:90vw;
      display:flex; flex-direction:column;
      font-family:monospace; color:var(--cad-text,#ccc);
      background:var(--cad-bg,#1a1a2e); border:1px solid var(--cad-border,#333);
      border-radius:8px; box-shadow:0 4px 20px rgba(0,0,0,0.5);
      transition: height 0.2s ease;
    `, gt.innerHTML = `
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
    `, document.body.appendChild(gt), (_a2 = gt.querySelector("#export-close")) == null ? void 0 : _a2.addEventListener("click", () => {
        gt == null ? void 0 : gt.remove(), gt = null, Jo = false;
      }), (_b = gt.querySelector("#export-minimize")) == null ? void 0 : _b.addEventListener("click", () => {
        const o = gt.querySelector("#export-body"), n = gt.querySelector("#export-minimize");
        Jo = !Jo, Jo ? (o.style.display = "none", n.textContent = "\u25A2", n.title = "Restaurar", gt.style.width = "auto") : (o.style.display = "flex", n.textContent = "\u25AC", n.title = "Minimizar", gt.style.width = "720px");
      }), (_c = gt.querySelector("#export-copy")) == null ? void 0 : _c.addEventListener("click", () => {
        const o = gt.querySelector("#export-text");
        navigator.clipboard.writeText(o.value).then(() => {
          const n = gt.querySelector("#export-status");
          n.textContent = "\u2713 Copiado al clipboard", setTimeout(() => n.textContent = "", 2e3);
        });
      }), (_d = gt.querySelector("#export-json")) == null ? void 0 : _d.addEventListener("click", () => {
        var _a3, _b2, _c2, _d2, _e2, _f;
        const o = e.nodes.val, n = e.elements.val, l = (_a3 = e.nodeInputs) == null ? void 0 : _a3.val, s = (_b2 = e.elementInputs) == null ? void 0 : _b2.val, f = {
          generator: A || "custom",
          units: {
            force: b,
            length: q
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
        (l == null ? void 0 : l.supports) && (f.supports = [], l.supports.forEach((c, m) => f.supports.push({
          node: m,
          dofs: c
        }))), (l == null ? void 0 : l.loads) && (f.loads = [], l.loads.forEach((c, m) => f.loads.push({
          node: m,
          forces: c
        }))), s && (f.properties = {}, s.elasticities && (f.properties.E = Object.fromEntries(s.elasticities)), s.areas && (f.properties.A = Object.fromEntries(s.areas)), s.momentsOfInertiaZ && (f.properties.Iz = Object.fromEntries(s.momentsOfInertiaZ)), s.momentsOfInertiaY && (f.properties.Iy = Object.fromEntries(s.momentsOfInertiaY)), s.shearModuli && (f.properties.G = Object.fromEntries(s.shearModuli)), s.torsionalConstants && (f.properties.J = Object.fromEntries(s.torsionalConstants)));
        const a = (_d2 = (_c2 = e.deformOutputs) == null ? void 0 : _c2.val) == null ? void 0 : _d2.deformations;
        a && a.size > 0 && (f.displacements = {}, a.forEach((c, m) => f.displacements[m] = c));
        const i = (_f = (_e2 = e.deformOutputs) == null ? void 0 : _e2.val) == null ? void 0 : _f.reactions;
        i && i.size > 0 && (f.reactions = {}, i.forEach((c, m) => f.reactions[m] = c));
        const d = gt.querySelector("#export-text");
        d.value = JSON.stringify(f, null, 2);
        const r = gt.querySelector("#export-status");
        r.textContent = "Formato JSON activo \u2014 presiona Copy para copiar";
      });
    }
    function Ne() {
      var _a2, _b, _c;
      const t = ye.querySelector("#cad3d-info");
      if (t) {
        const o = e.nodes.val.length, n = e.elements.val, l = n.length, s = ((_c = (_b = (_a2 = e.nodeInputs) == null ? void 0 : _a2.val) == null ? void 0 : _b.supports) == null ? void 0 : _c.size) || 0;
        let f = 0, a = 0, i = 0;
        for (const r of n) r.length === 2 ? f++ : r.length === 3 ? a++ : r.length === 4 && i++;
        let d = `${o}n ${l}e ${s}s`;
        (i > 0 || a > 0) && (d += ` | ${f}fr`, i > 0 && (d += ` ${i}q4`), a > 0 && (d += ` ${a}tri`)), t.textContent = d;
      }
    }
    function qn() {
      var _a2;
      if (!Wt || !e.nodeInputs || !e.elementInputs) return;
      const t = e.nodes.val, o = e.elements.val, n = e.nodeInputs.val, l = e.elementInputs.val;
      if (!(t.length === 0 || o.length === 0) && !(!n.supports || n.supports.size === 0) && !(!l.densities || l.densities.size === 0)) try {
        const s = Math.min(12, t.length * 6 - n.supports.size * 6);
        if (s <= 0) return;
        const f = pl(t, o, n, l, Math.min(s, 12));
        if (f.frequencies && f.frequencies.length > 0) {
          ut = f, ao = t.map((r) => [
            ...r
          ]), Mt = 0;
          const { extent: a } = fo(), i = (_a2 = f.modeShapes) == null ? void 0 : _a2[0];
          if (i) {
            let r = 0;
            for (let c = 0; c < t.length; c++) {
              const m = i[c * 6] || 0, w = i[c * 6 + 1] || 0, M = i[c * 6 + 2] || 0;
              r = Math.max(r, Math.sqrt(m * m + w * w + M * M));
            }
            an = r > 1e-12 ? a * 0.05 / r : 1;
          }
          const d = `${A} \u2014 ${t.length}n ${o.length}e`;
          Vo.render(f, {
            title: d
          }), Vo.div.style.display = "", Ko(), console.log(`Modal: ${f.frequencies.length} modos. f\u2081 = ${f.frequencies[0].toFixed(4)} Hz`);
        }
      } catch (s) {
        console.warn("Modal analysis failed:", s.message), ut = null;
      }
    }
    function Rn() {
      co && (cancelAnimationFrame(co), co = 0), ao.length > 0 && (e.nodes.val = ao.map((t) => [
        ...t
      ])), Vo.div.style.display = "none", ut = null;
    }
    function Ko() {
      var _a2;
      if (co && cancelAnimationFrame(co), !(ut == null ? void 0 : ut.modeShapes) || !ao.length) return;
      const t = ut.modeShapes[Mt];
      if (!t) return;
      const o = ((_a2 = ut.frequencies) == null ? void 0 : _a2[Mt]) || 1, n = Math.max(0.5, Math.min(3, o * 0.1)), l = performance.now(), s = ao.length, f = e.elements.rawVal, { extent: a } = fo(), i = ye.querySelector("#cad3d-modal-scale"), d = i && parseFloat(i.value) || 5;
      let r = 0;
      for (let $ = 0; $ < s; $++) {
        const T = t[$ * 6] || 0, O = t[$ * 6 + 1] || 0, h = t[$ * 6 + 2] || 0;
        r = Math.max(r, Math.sqrt(T * T + O * O + h * h));
      }
      const c = r > 1e-12 ? a * d / 100 / r : 1, m = De();
      if (!m) return;
      let w = null, M = null, y = null;
      m.scene.traverse(($) => {
        var _a3, _b;
        !w && $.isPoints && $.geometry && (w = $), !M && $.isLineSegments && $.geometry && !$.name && (M = $), !y && $.isMesh && ((_a3 = $.material) == null ? void 0 : _a3.transparent) && ((_b = $.material) == null ? void 0 : _b.opacity) < 0.5 && $.geometry && (y = $);
      });
      const p = new Float32Array(s * 3), g = [];
      for (const $ of f) if ($.length === 2) g.push([
        $[0],
        $[1]
      ]);
      else for (let T = 0; T < $.length; T++) g.push([
        $[T],
        $[(T + 1) % $.length]
      ]);
      const I = new Float32Array(g.length * 6);
      function k() {
        const $ = (performance.now() - l) / 1e3, T = Math.sin(2 * Math.PI * n * $) * c;
        for (let O = 0; O < s; O++) {
          const h = ao[O];
          p[O * 3] = h[0] + (t[O * 6] || 0) * T, p[O * 3 + 1] = h[1] + (t[O * 6 + 1] || 0) * T, p[O * 3 + 2] = h[2] + (t[O * 6 + 2] || 0) * T;
        }
        if (w) {
          const O = w.geometry, h = O.getAttribute("position");
          h && h.array.length === p.length ? (h.array.set(p), h.needsUpdate = true) : O.setAttribute("position", new Eo(p.slice(), 3));
        }
        if (M) {
          for (let u = 0; u < g.length; u++) {
            const [E, P] = g[u];
            I[u * 6] = p[E * 3], I[u * 6 + 1] = p[E * 3 + 1], I[u * 6 + 2] = p[E * 3 + 2], I[u * 6 + 3] = p[P * 3], I[u * 6 + 4] = p[P * 3 + 1], I[u * 6 + 5] = p[P * 3 + 2];
          }
          const O = M.geometry, h = O.getAttribute("position");
          h && h.array.length === I.length ? (h.array.set(I), h.needsUpdate = true) : O.setAttribute("position", new Eo(I.slice(), 3));
        }
        if (y) {
          const O = [];
          for (const h of f) if (h.length === 3) {
            const [u, E, P] = h;
            O.push(p[u * 3], p[u * 3 + 1], p[u * 3 + 2]), O.push(p[E * 3], p[E * 3 + 1], p[E * 3 + 2]), O.push(p[P * 3], p[P * 3 + 1], p[P * 3 + 2]);
          } else if (h.length === 4) {
            const [u, E, P, R] = h;
            O.push(p[u * 3], p[u * 3 + 1], p[u * 3 + 2]), O.push(p[E * 3], p[E * 3 + 1], p[E * 3 + 2]), O.push(p[P * 3], p[P * 3 + 1], p[P * 3 + 2]), O.push(p[u * 3], p[u * 3 + 1], p[u * 3 + 2]), O.push(p[P * 3], p[P * 3 + 1], p[P * 3 + 2]), O.push(p[R * 3], p[R * 3 + 1], p[R * 3 + 2]);
          }
          if (O.length > 0) {
            const h = y.geometry, u = new Float32Array(O), E = h.getAttribute("position");
            E && E.array.length === u.length ? (E.array.set(u), E.needsUpdate = true) : h.setAttribute("position", new Eo(u, 3));
          }
        }
        m.render(), co = requestAnimationFrame(k);
      }
      co = requestAnimationFrame(k);
    }
    function _n() {
      var _a2, _b, _c, _d, _e2;
      if (!e.deformOutputs || !e.analyzeOutputs || !e.nodeInputs || !e.elementInputs) return;
      const t = e.nodes.val, o = e.elements.val;
      let n = e.nodeInputs.val;
      const l = e.elementInputs.val;
      if (t.length === 0 || o.length === 0 || !n.supports || n.supports.size === 0) return;
      if (!n.loads || n.loads.size === 0) {
        const y = ne("CM") ?? 0, p = ne("CV") ?? 0, g = y + p, I = ne("Ex") ?? 0, k = ne("Ey") ?? 0;
        if (g === 0 && I === 0 && k === 0) return;
        const $ = /* @__PURE__ */ new Map(), T = [];
        for (let S = 0; S < t.length; S++) n.supports.has(S) || T.push(S);
        const O = (S) => Math.round(S * 1e3) / 1e3, h = /* @__PURE__ */ new Set();
        n.supports.forEach((S, v) => {
          h.add(`${O(t[v][0])},${O(t[v][1])}`);
        });
        const u = /* @__PURE__ */ new Set();
        for (const S of T) h.has(`${O(t[S][0])},${O(t[S][1])}`) && u.add(S);
        const E = /* @__PURE__ */ new Set(), P = /* @__PURE__ */ new Set();
        if (I !== 0 || k !== 0) {
          let S = -1 / 0, v = -1 / 0;
          for (const N of u) S = Math.max(S, O(t[N][0])), v = Math.max(v, O(t[N][1]));
          const L = /* @__PURE__ */ new Map();
          for (const N of u) {
            const D = O(t[N][2]);
            L.has(D) || L.set(D, []), L.get(D).push(N);
          }
          L.forEach((N) => {
            if (I !== 0) {
              const D = /* @__PURE__ */ new Set();
              for (const V of N) if (O(t[V][0]) === S) {
                const j = O(t[V][1]);
                D.has(j) || (D.add(j), E.add(V));
              }
            }
            if (k !== 0) {
              const D = /* @__PURE__ */ new Set();
              for (const V of N) if (O(t[V][1]) === v) {
                const j = O(t[V][0]);
                D.has(j) || (D.add(j), P.add(V));
              }
            }
          });
        }
        const R = 9.81, H = /* @__PURE__ */ new Map();
        for (let S = 0; S < o.length; S++) {
          const v = o[S], L = ((_a2 = l.densities) == null ? void 0 : _a2.get(S)) ?? 0;
          if (!(Math.abs(L) < 1e-15)) {
            if (v.length === 2) {
              const N = ((_b = l.areas) == null ? void 0 : _b.get(S)) ?? 0, D = t[v[0]], V = t[v[1]], j = Math.sqrt((V[0] - D[0]) ** 2 + (V[1] - D[1]) ** 2 + (V[2] - D[2]) ** 2), te = -(L * N * j * R) / 2;
              H.set(v[0], (H.get(v[0]) ?? 0) + te), H.set(v[1], (H.get(v[1]) ?? 0) + te);
            } else if (v.length >= 3) {
              const N = ((_c = l.thicknesses) == null ? void 0 : _c.get(S)) ?? 0;
              let D = 0;
              if (v.length === 3) {
                const [B, te, oe] = v.map((de) => t[de]);
                D = 0.5 * Math.abs((te[0] - B[0]) * (oe[1] - B[1]) - (oe[0] - B[0]) * (te[1] - B[1]));
              } else if (v.length === 4) {
                const [B, te, oe, de] = v.map((ge) => t[ge]);
                if (D = 0.5 * Math.abs((te[0] - B[0]) * (oe[1] - B[1]) - (oe[0] - B[0]) * (te[1] - B[1])) + 0.5 * Math.abs((oe[0] - B[0]) * (de[1] - B[1]) - (de[0] - B[0]) * (oe[1] - B[1])), D < 1e-10) {
                  const ge = [
                    te[0] - B[0],
                    te[1] - B[1],
                    te[2] - B[2]
                  ], _ = [
                    de[0] - B[0],
                    de[1] - B[1],
                    de[2] - B[2]
                  ], se = [
                    ge[1] * _[2] - ge[2] * _[1],
                    ge[2] * _[0] - ge[0] * _[2],
                    ge[0] * _[1] - ge[1] * _[0]
                  ];
                  D = Math.sqrt(se[0] ** 2 + se[1] ** 2 + se[2] ** 2);
                }
              }
              const j = -(L * N * D * R) / v.length;
              for (const B of v) H.set(B, (H.get(B) ?? 0) + j);
            }
          }
        }
        const x = /* @__PURE__ */ new Set();
        for (const S of o) S.length === 2 && (x.add(S[0]), x.add(S[1]));
        for (const S of T) {
          const v = E.has(S) ? I : 0, L = P.has(S) ? k : 0, N = H.get(S) ?? 0, D = x.has(S) ? g : 0, V = N + D;
          (v !== 0 || L !== 0 || Math.abs(V) > 1e-10) && $.set(S, [
            v,
            L,
            V,
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
      let f = 0, a = 0, i = 0;
      for (const y of o) y.length === 2 ? f++ : y.length === 3 ? i++ : y.length === 4 && a++;
      const d = ((_d = n.supports) == null ? void 0 : _d.size) || 0, r = ((_e2 = n.loads) == null ? void 0 : _e2.size) || 0, c = t.length * 6, m = c - d * 6, w = [], M = (y) => w.push(y);
      M('<b style="color:var(--cad-heading)">FEM Solver</b>'), M(`<span style="color:var(--cad-info)">Modelo:</span> ${t.length} nodos, ${o.length} elem`), f && M(`&nbsp;&nbsp;Frames: <b>${f}</b>`), a && M(`&nbsp;&nbsp;Shell Q4: <b>${a}</b>`), i && M(`&nbsp;&nbsp;Triangulos: <b>${i}</b>`), M(`&nbsp;&nbsp;Apoyos: ${d} &nbsp;|&nbsp; Cargas: ${r}`), M(`<span style="color:var(--cad-info)">DOFs:</span> ${c} total, ~${m} libres`), M('<hr style="border-color:var(--cad-border);margin:4px 0">'), M(`<span style="color:#888">1.</span> Ensamblaje <b>K</b> global (${c}&times;${c})`), M("&nbsp;&nbsp;&nbsp;<i>K<sub>global</sub> = &Sigma; T<sup>T</sup> &middot; K<sub>local</sub> &middot; T</i>");
      try {
        const y = pt(t, o, n, l), p = performance.now() - s;
        if (y) {
          e.deformOutputs.val = y, M(`<span style="color:#888">2.</span> <b>K &middot; u = F</b> &rarr; SparseLU &rarr; <span style="color:#00cc88">${p.toFixed(0)} ms</span>`);
          let g = 0, I = -1, k = 0, $ = 0;
          y.deformations && y.deformations.forEach((E, P) => {
            const R = Math.sqrt(E[0] * E[0] + E[1] * E[1] + E[2] * E[2]);
            R > g && (g = R, I = P, k = E[0], $ = E[2]);
          }), M('<span style="color:#888">3.</span> Desplazamientos:'), M(`&nbsp;&nbsp;&nbsp;max|<b>u</b>| = <b style="color:var(--cad-heading)">${g.toExponential(3)}</b> m <span style="color:#666">(nodo ${I})</span>`), M(`&nbsp;&nbsp;&nbsp;u<sub>x</sub> = ${(k * 1e3).toFixed(4)} mm &nbsp;|&nbsp; u<sub>z</sub> = ${($ * 1e3).toFixed(4)} mm`);
          const T = performance.now(), O = so(t, o, l, y), h = performance.now() - T;
          O && (e.analyzeOutputs.val = O, M(`<span style="color:#888">4.</span> Fuerzas internas: <span style="color:#00cc88">${h.toFixed(0)} ms</span>`), M("&nbsp;&nbsp;&nbsp;<i>F<sub>int</sub> = K<sub>local</sub> &middot; T &middot; u</i>"));
          const u = performance.now() - s;
          M('<hr style="border-color:var(--cad-border);margin:4px 0">'), M(`<b style="color:#00cc88">&#10004; Completado: ${u.toFixed(0)} ms</b>`);
        }
      } catch (y) {
        const p = performance.now() - s;
        M(`<b style="color:#ff4444">&#10008; Error (${p.toFixed(0)} ms): ${y.message}</b>`);
      }
      window.__femLog = w, console.log(`FEM Solver: ${t.length}n ${o.length}e \u2192 ${(performance.now() - s).toFixed(0)}ms`), Wt && setTimeout(() => qn(), 50);
    }
    function uo() {
      if (!e.elementInputs) return;
      const t = e.elements.val, o = z, n = {
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
      if ((A === "edificio" || A === "frame") && he.size > 0) {
        const { colMat: s, vigaMat: f, colShape: a, fc: i, perFloor: d } = ke, r = 4700 * Math.sqrt(i / 1e3) * 1e3, c = r / (2 * 1.2), m = 24 / 9.80665, w = o.E, M = o.G, y = o.rho;
        for (let p = 0; p < t.length; p++) {
          if (Ce.has(p)) {
            const v = 4700 * Math.sqrt(i / 1e3) * 1e3, L = 0.2;
            n.elasticities.set(p, v), n.poissonsRatios.set(p, L), n.thicknesses.set(p, Ye), n.shearModuli.set(p, v / (2 * (1 + L))), n.densities.set(p, 24 / 9.80665);
            continue;
          }
          if (yo.has(p)) {
            const v = 4700 * Math.sqrt(i / 1e3) * 1e3, L = 0.2;
            n.elasticities.set(p, v), n.poissonsRatios.set(p, L), n.thicknesses.set(p, Nt), n.shearModuli.set(p, v / (2 * (1 + L))), n.densities.set(p, 24 / 9.80665);
            continue;
          }
          const g = he.has(p), I = Te.get(p) ?? 0, k = d[I] ?? d[0] ?? {
            bCol: 0.4,
            hCol: 0.4,
            dCol: 0.4
          };
          let $, T, O, h;
          if (g) if (s === 0) T = r, O = c, h = m, $ = a === 1 ? ua(k.dCol) : ss(k.bCol, k.hCol), n.sectionShapes.set(p, a === 1 ? {
            type: "circ",
            d: k.dCol
          } : {
            type: "rect",
            b: k.bCol,
            h: k.hCol
          });
          else if (s === 1) {
            T = w, O = M, h = y;
            const v = ke.steelColType;
            if (v <= 1) {
              const L = vo[k.colProfileIdx] ?? vo[0];
              $ = {
                A: L.A,
                Iz: L.Iz,
                Iy: L.Iy,
                J: L.J
              }, n.sectionShapes.set(p, {
                type: "I",
                b: L.bf,
                h: L.d,
                name: L.name
              });
            } else if (v === 2) {
              const L = k.colBf ?? 0.3, N = k.colHf ?? 0.3, D = k.colTf ?? 0.02, V = k.colTw ?? 0.012;
              $ = as(L, N, D, V);
              const j = `I${(N * 100).toFixed(0)}x${(L * 100).toFixed(0)}`;
              n.sectionShapes.set(p, {
                type: "I",
                b: L,
                h: N,
                tf: D,
                tw: V,
                name: j
              });
            } else {
              const L = k.colBc ?? 0.3, N = k.colHc ?? 0.3, D = k.colT ?? 0.01;
              $ = ls(L, N, D);
              const V = `\u25A1${(N * 100).toFixed(0)}x${(L * 100).toFixed(0)}x${(D * 1e3).toFixed(0)}`;
              n.sectionShapes.set(p, {
                type: "HSS",
                b: L,
                h: N,
                tw: D,
                name: V
              });
            }
          } else {
            const v = k.colBc ?? 0.3, L = k.colHc ?? 0.3, N = k.colT ?? 0.01, D = k.colFc ?? 28e3, V = k.colEs ?? 2e8, j = k.colNuS ?? 0.3;
            k.colNuC;
            const B = Ol(v, L, N, V, j, D);
            $ = {
              A: B.A,
              Iz: B.Iz,
              Iy: B.Iy,
              J: B.J
            }, T = B.Es, O = B.Gs;
            const te = 7.85, oe = 24 / 9.80665;
            h = (te * B.A_steel + oe * B.A_conc) / (B.A_steel + B.A_conc);
            const de = `CFT ${(L * 1e3).toFixed(0)}X${(v * 1e3).toFixed(0)}X${(N * 1e3).toFixed(0)}`;
            n.sectionShapes.set(p, {
              type: "CFT",
              b: v,
              h: L,
              tw: N,
              name: de
            });
          }
          else {
            const v = Pe.get(p), L = v ? v.dir === "x" ? k.vigasX : k.vigasY : [], N = v ? L[v.bay] ?? L[0] ?? Jt() : Jt();
            if (f === 0) T = r, O = c, h = m, $ = ss(N.b, N.h), n.sectionShapes.set(p, {
              type: "rect",
              b: N.b,
              h: N.h
            });
            else {
              T = w, O = M, h = y;
              const D = ke.steelVigaType;
              if (D <= 1) {
                const V = vo[N.profileIdx ?? 0] ?? vo[0];
                $ = {
                  A: V.A,
                  Iz: V.Iz,
                  Iy: V.Iy,
                  J: V.J
                }, n.sectionShapes.set(p, {
                  type: "I",
                  b: V.bf,
                  h: V.d,
                  name: V.name
                });
              } else if (D === 2) {
                const V = N.bf ?? 0.2, j = N.hf ?? 0.4, B = N.tf ?? 0.015, te = N.tw ?? 0.01;
                $ = as(V, j, B, te);
                const oe = `I${(j * 100).toFixed(0)}x${(V * 100).toFixed(0)}`;
                n.sectionShapes.set(p, {
                  type: "I",
                  b: V,
                  h: j,
                  tf: B,
                  tw: te,
                  name: oe
                });
              } else {
                const V = N.bc ?? 0.2, j = N.hc ?? 0.3, B = N.t ?? 8e-3;
                $ = ls(V, j, B);
                const te = `\u25A1${(j * 100).toFixed(0)}x${(V * 100).toFixed(0)}x${(B * 1e3).toFixed(0)}`;
                n.sectionShapes.set(p, {
                  type: "HSS",
                  b: V,
                  h: j,
                  tw: B,
                  name: te
                });
              }
            }
          }
          const u = ve.get(p);
          if (u) {
            if ((u.material ?? 1) === 0 ? (T = r, O = c, h = m) : (T = w, O = M, h = y), u.secType === "rect" && u.b && u.h) $ = ss(u.b, u.h), n.sectionShapes.set(p, {
              type: "rect",
              b: u.b,
              h: u.h
            });
            else if (u.secType === "circ" && u.b) $ = ua(u.b), n.sectionShapes.set(p, {
              type: "circ",
              d: u.b
            });
            else if ((u.secType === "W" || u.secType === "HSS") && u.profileIdx !== void 0) {
              const L = vo[u.profileIdx] ?? vo[0];
              $ = {
                A: L.A,
                Iz: L.Iz,
                Iy: L.Iy,
                J: L.J
              }, n.sectionShapes.set(p, {
                type: "I",
                b: L.bf,
                h: L.d,
                name: L.name
              });
            } else if (u.secType === "I-param" && u.bf && u.hf && u.tf && u.tw) {
              $ = as(u.bf, u.hf, u.tf, u.tw);
              const L = `I${(u.hf * 100).toFixed(0)}x${(u.bf * 100).toFixed(0)}`;
              n.sectionShapes.set(p, {
                type: "I",
                b: u.bf,
                h: u.hf,
                tf: u.tf,
                tw: u.tw,
                name: L
              });
            } else if (u.secType === "tubular" && u.bc && u.hc && u.t) {
              $ = ls(u.bc, u.hc, u.t);
              const L = `\u25A1${(u.hc * 100).toFixed(0)}x${(u.bc * 100).toFixed(0)}x${(u.t * 1e3).toFixed(0)}`;
              n.sectionShapes.set(p, {
                type: "HSS",
                b: u.bc,
                h: u.hc,
                tw: u.t,
                name: L
              });
            }
          }
          let E = $.A, P = $.Iy, R = $.Iz, H = $.J, x, S;
          u && (u.modA != null && u.modA !== 1 && (E *= u.modA), u.modI != null && u.modI !== 1 && (P *= u.modI), u.modI3 != null && u.modI3 !== 1 && (R *= u.modI3), u.modJ != null && u.modJ !== 1 && (H *= u.modJ), u.modAs2 != null && (u.modAs2 === 0 ? x = -1 : u.modAs2 !== 1 && (x = u.modAs2 * (5 / 6) * E)), u.modAs3 != null && (u.modAs3 === 0 ? S = -1 : u.modAs3 !== 1 && (S = u.modAs3 * (5 / 6) * E))), n.elasticities.set(p, T), n.shearModuli.set(p, O), n.areas.set(p, E), n.momentsOfInertiaZ.set(p, P), n.momentsOfInertiaY.set(p, R), n.torsionalConstants.set(p, H), n.densities.set(p, h * ((u == null ? void 0 : u.modMass) ?? 1)), x !== void 0 && (n.shearAreasY || (n.shearAreasY = /* @__PURE__ */ new Map()), n.shearAreasY.set(p, x)), S !== void 0 && (n.shearAreasZ || (n.shearAreasZ = /* @__PURE__ */ new Map()), n.shearAreasZ.set(p, S)), u && u.releases12 && u.releases12.some((v) => v) && (n.momentReleases || (n.momentReleases = /* @__PURE__ */ new Map()), n.momentReleases.set(p, u.releases12)), u && u.springs12 && u.springs12.some((v) => v > 0) && (n.partialFixitySprings || (n.partialFixitySprings = /* @__PURE__ */ new Map()), n.partialFixitySprings.set(p, u.springs12));
        }
      } else for (let s = 0; s < t.length; s++) n.elasticities.set(s, o.E), n.shearModuli.set(s, o.G), n.areas.set(s, o.A), n.momentsOfInertiaZ.set(s, o.Iy), n.momentsOfInertiaY.set(s, o.Iz), n.torsionalConstants.set(s, o.J), n.densities.set(s, o.rho);
      e.elementInputs.val = n;
    }
    function On(t) {
      ye.querySelectorAll("[data-ex]").forEach((o) => {
        o.classList.toggle("active", o.dataset.ex === t);
      });
    }
    window.innerWidth <= 600 && ye.classList.add("collapsed"), setTimeout(() => {
      var _a2, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l2, _m, _n2, _o2, _p;
      (_a2 = ye.querySelector("#cad3d-toggle")) == null ? void 0 : _a2.addEventListener("click", (x) => {
        x.stopPropagation(), ye.classList.add("collapsed");
      }), (_b = ye.querySelector("#cad3d-expand")) == null ? void 0 : _b.addEventListener("click", (x) => {
        x.stopPropagation(), ye.classList.remove("collapsed");
      }), ye.querySelectorAll("[data-ex]").forEach((x) => {
        x.addEventListener("click", (S) => {
          S.stopPropagation();
          const v = x.dataset.ex;
          On(v), _e.example(v);
        });
      }), ye.querySelectorAll("[data-view]").forEach((x) => {
        x.addEventListener("click", (S) => {
          S.stopPropagation();
          const v = x.dataset.view;
          mo(v), ye.querySelectorAll("[data-view]").forEach((L) => L.classList.remove("view-active")), x.classList.add("view-active");
        });
      }), (_c = ye.querySelector("#cad3d-btn-clear")) == null ? void 0 : _c.addEventListener("click", (x) => {
        x.stopPropagation(), A = "", ma.val = false, za(), _e.clear();
      }), (_d = ye.querySelector("#cad3d-select")) == null ? void 0 : _d.addEventListener("click", (x) => {
        var _a3;
        x.stopPropagation(), Vt && (Vt = false, Mo()), eo && dn(), Tt = !Tt, (_a3 = ye.querySelector("#cad3d-select")) == null ? void 0 : _a3.classList.toggle("inspect-active", Tt);
        const v = De();
        v && (v.controls.enabled = !Tt), Tt || cn();
      }), (_e2 = ye.querySelector("#cad3d-draw")) == null ? void 0 : _e2.addEventListener("click", (x) => {
        var _a3;
        x.stopPropagation(), Vt && (Vt = false, Mo()), Tt && cn(), eo = !eo, (_a3 = ye.querySelector("#cad3d-draw")) == null ? void 0 : _a3.classList.toggle("inspect-active", eo), eo ? qa() : dn();
      }), (_f = ye.querySelector("#cad3d-inspect")) == null ? void 0 : _f.addEventListener("click", (x) => {
        var _a3;
        x.stopPropagation(), Tt && cn(), eo && dn(), Vt = !Vt, (_a3 = ye.querySelector("#cad3d-inspect")) == null ? void 0 : _a3.classList.toggle("inspect-active", Vt), Vt || Mo();
      }), (_g = ye.querySelector("#cad3d-new-model")) == null ? void 0 : _g.addEventListener("click", (x) => {
        x.stopPropagation(), _e.clear(), Je = null;
      });
      const t = ye.querySelector("#cad3d-tests-menu");
      t && t.addEventListener("change", () => {
        const x = t.value;
        t.value = "", x && o(x);
      });
      function o(x) {
        var _a3, _b2, _c2, _d2, _e3, _f2;
        const L = 15e3 * Math.sqrt(210) * 10, N = 0.2, D = L / (2 * (1 + N)), V = 0.09, j = 0.3 ** 4 / 12, B = 0.141 * 0.3 ** 4, te = 0.25 * 0.4, oe = 0.25 * 0.4 ** 3 / 12, de = 0.4 * 0.25 ** 3 / 12, ge = 1e-3, _ = 5 / 6 * V, se = 5 / 6 * te, G = [];
        function ae(Y, le, ue) {
          const Z = {
            elasticities: /* @__PURE__ */ new Map(),
            shearModuli: /* @__PURE__ */ new Map(),
            areas: /* @__PURE__ */ new Map(),
            momentsOfInertiaZ: /* @__PURE__ */ new Map(),
            momentsOfInertiaY: /* @__PURE__ */ new Map(),
            torsionalConstants: /* @__PURE__ */ new Map(),
            shearAreasY: /* @__PURE__ */ new Map(),
            shearAreasZ: /* @__PURE__ */ new Map()
          };
          for (const fe of le) Z.elasticities.set(fe, L), Z.shearModuli.set(fe, D), Z.areas.set(fe, V), Z.momentsOfInertiaZ.set(fe, j), Z.momentsOfInertiaY.set(fe, j), Z.torsionalConstants.set(fe, B), Z.shearAreasY.set(fe, _), Z.shearAreasZ.set(fe, _);
          for (const fe of ue) Z.elasticities.set(fe, L), Z.shearModuli.set(fe, D), Z.areas.set(fe, te), Z.momentsOfInertiaZ.set(fe, de), Z.momentsOfInertiaY.set(fe, oe), Z.torsionalConstants.set(fe, ge), Z.shearAreasY.set(fe, se), Z.shearAreasZ.set(fe, se);
          return Z;
        }
        if (x === "test-cantilever" || x === "test-all") {
          const ue = 270 / (3 * L * j), Z = [
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
          ], fe = [
            [
              0,
              1
            ]
          ], ze = ae(1, [], []);
          ze.elasticities.set(0, L), ze.shearModuli.set(0, D), ze.areas.set(0, V), ze.momentsOfInertiaZ.set(0, j), ze.momentsOfInertiaY.set(0, j), ze.torsionalConstants.set(0, B);
          const He = pt(Z, fe, {
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
          }, ze);
          G.push({
            name: "Cantilever Beam",
            formulation: "Euler-Bernoulli (PL\xB3/3EI)",
            nodes: Z,
            elements: fe,
            results: [
              {
                label: "Uz tip (cm)",
                awatif: He.deformations.get(1)[2] * 100,
                reference: ue * 100,
                refSource: "Analytical"
              }
            ]
          });
        }
        if (x === "test-portal-1p" || x === "test-all") {
          const Y = [
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
          ], le = [
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
          ], ue = ae(3, [
            0,
            1
          ], [
            2
          ]), Z = pt(Y, le, {
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
          }, ue);
          G.push({
            name: "Portal 1-Story (Timoshenko)",
            formulation: "Frame Timoshenko (As=5/6\xB7A)",
            nodes: Y,
            elements: le,
            results: [
              {
                label: "Ux top (cm)",
                awatif: Z.deformations.get(2)[0] * 100,
                reference: 2.0618,
                refSource: "ETABS 22.6"
              }
            ]
          });
        }
        if (x === "test-portal-2p" || x === "test-all") {
          const Y = [
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
          ], le = [
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
          ], ue = ae(6, [
            0,
            1,
            2,
            3
          ], [
            4,
            5
          ]), Z = pt(Y, le, {
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
          }, ue);
          G.push({
            name: "Portal 2-Story",
            formulation: "Frame Timoshenko",
            nodes: Y,
            elements: le,
            results: [
              {
                label: "Ux Z=3m (cm)",
                awatif: Z.deformations.get(2)[0] * 100,
                reference: 2.5188,
                refSource: "ETABS 22.6"
              },
              {
                label: "Ux Z=6m (cm)",
                awatif: Z.deformations.get(4)[0] * 100,
                reference: 5.6424,
                refSource: "ETABS 22.6"
              }
            ]
          });
        }
        if (x === "test-wall-only" || x === "test-all") {
          const Y = [
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
          ], le = [
            [
              0,
              1,
              2,
              3
            ]
          ], Z = pt(Y, le, {
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
                L
              ]
            ]),
            shearModuli: /* @__PURE__ */ new Map([
              [
                0,
                D
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
                N
              ]
            ])
          });
          G.push({
            name: "Wall Q4 Only",
            formulation: "Membrane (incompatible modes) + Mindlin-Reissner + Hughes-Brezzi drilling",
            nodes: Y,
            elements: le,
            results: [
              {
                label: "Ux top (cm)",
                awatif: Z.deformations.get(2)[0] * 100,
                reference: 0.013519,
                refSource: "ETABS 22.6"
              }
            ]
          });
        }
        if (x === "test-portal-wall" || x === "test-all") {
          const Y = [
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
          ], le = [
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
          ], ue = ae(6, [
            0,
            1,
            2,
            3
          ], [
            4,
            5
          ]);
          ue.elasticities.set(6, L), ue.shearModuli.set(6, D), ue.thicknesses = /* @__PURE__ */ new Map([
            [
              6,
              0.2
            ]
          ]), ue.poissonsRatios = /* @__PURE__ */ new Map([
            [
              6,
              N
            ]
          ]);
          const Z = pt(Y, le, {
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
          }, ue);
          G.push({
            name: "Portal 2-Story + Wall Q4",
            formulation: "Frame Timoshenko + Shell Q4 (Hughes-Brezzi drilling)",
            nodes: Y,
            elements: le,
            results: [
              {
                label: "Ux h=3m (cm)",
                awatif: Z.deformations.get(2)[0] * 100,
                reference: 0.0195,
                refSource: "ETABS 22.6"
              },
              {
                label: "Ux h=6m (cm)",
                awatif: Z.deformations.get(4)[0] * 100,
                reference: 2.1133,
                refSource: "ETABS 22.6"
              }
            ]
          });
        }
        if (x === "test-wilson-beam" || x === "test-all") {
          const He = 0.6666666666666666, je = [
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
          ], tt = [
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
          ], lt = {
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
          }, ot = /* @__PURE__ */ new Map();
          ot.set(0, [
            true,
            true,
            true,
            true,
            true,
            true
          ]), ot.set(5, [
            true,
            true,
            true,
            true,
            true,
            true
          ]);
          const ft = /* @__PURE__ */ new Map();
          ft.set(2, [
            0,
            0.5,
            0,
            0,
            0,
            0
          ]), ft.set(3, [
            0,
            0.5,
            0,
            0,
            0,
            0
          ]);
          const no = 5 ** 3 / (3 * 1500 * He);
          try {
            const Pt = pt(je, tt, {
              supports: ot,
              loads: ft
            }, lt), Et = Math.abs(((_b2 = (_a3 = Pt.deformations) == null ? void 0 : _a3.get(2)) == null ? void 0 : _b2[1]) ?? 0), Oe = Math.abs(((_d2 = (_c2 = Pt.deformations) == null ? void 0 : _c2.get(3)) == null ? void 0 : _d2[1]) ?? 0), Qe = (Et + Oe) / 2, It = Qe / no;
            G.push({
              name: "Wilson Fig 6.2 \u2014 Cantilever Q4",
              formulation: "2 Q4 elements + incompatible modes (Wilson 1971, Table 6.1)",
              nodes: je,
              elements: tt,
              results: [
                {
                  label: "Uy/Uy_exact (cortante)",
                  awatif: It,
                  reference: 0.932,
                  refSource: "Wilson Table 6.1"
                },
                {
                  label: "Uy free end",
                  awatif: Qe,
                  reference: no * 0.932,
                  refSource: "Wilson"
                }
              ]
            });
          } catch (Pt) {
            G.push({
              name: "Wilson Fig 6.2 \u2014 Cantilever Q4",
              formulation: "ERROR: " + Pt.message,
              nodes: je,
              elements: tt,
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
        if (x === "test-scordelis" || x === "test-all") {
          const He = 40 * Math.PI / 180, je = 8, tt = 8, lt = [];
          for (let Oe = 0; Oe <= je; Oe++) for (let Qe = 0; Qe <= tt; Qe++) {
            const It = 25 * Oe / je, dt = He * Qe / tt, $e = 25 * Math.sin(dt), Le = 25 * Math.cos(dt) - 25 * Math.cos(He);
            lt.push([
              It,
              $e,
              Le
            ]);
          }
          const ot = [];
          for (let Oe = 0; Oe < je; Oe++) for (let Qe = 0; Qe < tt; Qe++) {
            const It = Oe * (tt + 1) + Qe, dt = (Oe + 1) * (tt + 1) + Qe, $e = (Oe + 1) * (tt + 1) + (Qe + 1), Le = Oe * (tt + 1) + (Qe + 1);
            ot.push([
              It,
              dt,
              $e,
              Le
            ]);
          }
          const ft = {
            elasticities: /* @__PURE__ */ new Map(),
            shearModuli: /* @__PURE__ */ new Map(),
            thicknesses: /* @__PURE__ */ new Map(),
            poissonsRatios: /* @__PURE__ */ new Map()
          }, no = 432e6 / (2 * 1);
          for (let Oe = 0; Oe < ot.length; Oe++) ft.elasticities.set(Oe, 432e6), ft.shearModuli.set(Oe, no), ft.thicknesses.set(Oe, 0.25), ft.poissonsRatios.set(Oe, 0);
          const Pt = /* @__PURE__ */ new Map();
          for (let Oe = 0; Oe <= je; Oe++) for (let Qe = 0; Qe <= tt; Qe++) {
            const It = Oe * (tt + 1) + Qe, dt = [
              false,
              false,
              false,
              false,
              false,
              false
            ];
            Oe === 0 && (dt[0] = true, dt[4] = true, dt[5] = true), Oe === je && (dt[1] = true, dt[2] = true, dt[3] = true), Qe === 0 && (dt[1] = true, dt[3] = true, dt[5] = true), dt.some(($e) => $e) && Pt.set(It, dt);
          }
          const Et = /* @__PURE__ */ new Map();
          for (const Oe of ot) {
            const Qe = lt[Oe[0]], It = lt[Oe[1]], dt = lt[Oe[2]], $e = lt[Oe[3]], Le = [
              dt[0] - Qe[0],
              dt[1] - Qe[1],
              dt[2] - Qe[2]
            ], Fe = [
              $e[0] - It[0],
              $e[1] - It[1],
              $e[2] - It[2]
            ], Re = Le[1] * Fe[2] - Le[2] * Fe[1], $t = Le[2] * Fe[0] - Le[0] * Fe[2], So = Le[0] * Fe[1] - Le[1] * Fe[0], en = -90 * (0.5 * Math.sqrt(Re * Re + $t * $t + So * So)) / 4;
            for (const pn of Oe) {
              const oa = Et.get(pn) || [
                0,
                0,
                0,
                0,
                0,
                0
              ];
              oa[2] += en, Et.set(pn, oa);
            }
          }
          try {
            const Oe = pt(lt, ot, {
              supports: Pt,
              loads: Et
            }, ft), Qe = tt, It = ((_f2 = (_e3 = Oe.deformations) == null ? void 0 : _e3.get(Qe)) == null ? void 0 : _f2[2]) ?? 0;
            G.push({
              name: "Scordelis-Lo Barrel Vault",
              formulation: `Shell Q4 (${je}x${tt} mesh), Mindlin-Reissner + incompatible modes`,
              nodes: lt,
              elements: ot,
              results: [
                {
                  label: "Uz midspan free edge (ft)",
                  awatif: Math.abs(It),
                  reference: 0.3086,
                  refSource: "Wilson (2004) / MacNeal-Harder"
                }
              ]
            });
          } catch (Oe) {
            G.push({
              name: "Scordelis-Lo Barrel Vault",
              formulation: "ERROR: " + Oe.message,
              nodes: lt,
              elements: ot,
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
        if (f(G), G.length > 0) {
          const Y = G[G.length - 1];
          e.nodes.val = Y.nodes, e.elements.val = Y.elements;
          const le = /* @__PURE__ */ new Map(), ue = /* @__PURE__ */ new Map(), Z = Math.max(...Y.nodes.map((fe) => fe[2]));
          Y.nodes.forEach((fe, ze) => {
            Math.abs(fe[2]) < 0.01 && le.set(ze, [
              true,
              true,
              true,
              true,
              true,
              true
            ]), Math.abs(fe[2] - Z) < 0.01 && ue.set(ze, [
              10,
              0,
              0,
              0,
              0,
              0
            ]);
          }), e.nodeInputs.val = {
            supports: le,
            loads: ue
          }, e.elementInputs.val = {}, e.deformOutputs.val = {}, e.analyzeOutputs.val = {};
        }
      }
      function n(x) {
        const S = 15e3 * Math.sqrt(210) * 10, v = [];
        v.push(`$ File exported from Awatif FEM Validation: ${x.name}`), v.push(" "), v.push("$ PROGRAM INFORMATION"), v.push('  PROGRAM  "ETABS"  VERSION "22.6.0"  '), v.push(""), v.push("$ CONTROLS"), v.push('  UNITS  "TONF"  "M"  "C"  '), v.push("");
        const L = /* @__PURE__ */ new Set();
        x.nodes.forEach((_) => L.add(Math.round(_[1] * 1e4) / 1e4));
        const N = [
          ...L
        ].sort((_, se) => _ - se), D = N.map((_, se) => se === 0 ? "Base" : `Level_${se}`), V = /* @__PURE__ */ new Map();
        N.forEach((_, se) => V.set(_, D[se])), v.push("$ STORIES - IN SEQUENCE FROM TOP");
        for (let _ = N.length - 1; _ >= 1; _--) v.push(`  STORY "${D[_]}"  HEIGHT ${N[_] - N[_ - 1]} MASTERSTORY "Yes"  `);
        v.push(`  STORY "Base"  ELEV ${N[0]} `), v.push(""), v.push("$ MATERIAL PROPERTIES"), v.push('  MATERIAL  "CONC"    TYPE "Concrete"    WEIGHTPERVOLUME 2.4'), v.push(`  MATERIAL  "CONC"    SYMTYPE "Isotropic"  E ${S}  U 0.2  A 1E-05`), v.push(""), v.push("$ FRAME SECTIONS"), v.push('  FRAMESECTION  "COL30"  MATERIAL "CONC"  SHAPE "Concrete Rectangular"  D 0.3 B 0.3 '), v.push('  FRAMESECTION  "VIGA"  MATERIAL "CONC"  SHAPE "Concrete Rectangular"  D 0.4 B 0.25 '), v.push("");
        const j = x.elements.some((_) => _.length === 4);
        j && (v.push("$ WALL/SLAB/DECK SECTIONS"), v.push('  SHELLPROP  "Muro20"  PROPTYPE  "Wall"  MATERIAL "CONC"  MODELINGTYPE "ShellThick"  WALLTHICKNESS 0.2 '), v.push(""));
        const B = /* @__PURE__ */ new Map();
        let te = 0;
        x.nodes.forEach((_) => {
          const se = `${_[0]},${_[2]}`;
          B.has(se) || B.set(se, `${++te}`);
        }), v.push("$ POINT COORDINATES");
        for (const [_, se] of B) {
          const [G, ae] = _.split(",").map(Number);
          v.push(`  POINT "${se}"  ${G} ${ae} `);
        }
        v.push("");
        const oe = (_) => {
          const se = x.nodes[_], G = `${se[0]},${se[2]}`;
          return {
            pt: B.get(G) || "1",
            story: V.get(Math.round(se[1] * 1e4) / 1e4) || "Base"
          };
        };
        v.push("$ LINE CONNECTIVITIES");
        const de = [];
        if (x.elements.forEach((_, se) => {
          if (_.length !== 2) return;
          const G = x.nodes[_[0]], ae = x.nodes[_[1]], Y = Math.abs(ae[1] - G[1]), le = Math.sqrt((ae[0] - G[0]) ** 2 + (ae[2] - G[2]) ** 2), ue = Y > le * 0.5, Z = oe(_[0]), fe = oe(_[1]), ze = ue ? "COL30" : "VIGA";
          ue ? (v.push(`  LINE  "E${se + 1}"  COLUMN  "${Z.pt}"  "${Z.pt}"  1`), de.push(`  LINEASSIGN  "E${se + 1}"  "${fe.story}"  SECTION "${ze}"  `)) : (v.push(`  LINE  "E${se + 1}"  BEAM  "${Z.pt}"  "${fe.pt}"  0`), de.push(`  LINEASSIGN  "E${se + 1}"  "${Z.story}"  SECTION "${ze}"  `));
        }), v.push(""), j) {
          v.push("$ AREA CONNECTIVITIES");
          const _ = [];
          x.elements.forEach((se, G) => {
            if (se.length !== 4) return;
            const ae = se.map((Y) => oe(Y));
            v.push(`  AREA "W${G + 1}"  PANEL  4  "${ae[0].pt}"  "${ae[1].pt}"  "${ae[2].pt}"  "${ae[3].pt}"  1  1  0  0  `), _.push(`  AREAASSIGN  "W${G + 1}"  "${ae[2].story}"  SECTION "Muro20"  `);
          }), v.push(""), v.push("$ AREA ASSIGNS"), _.forEach((se) => v.push(se)), v.push("");
        }
        v.push("$ POINT ASSIGNS"), x.nodes.forEach((_, se) => {
          if (Math.abs(_[1]) < 0.01) {
            const G = oe(se);
            v.push(`  POINTASSIGN  "${G.pt}"  "${G.story}"  RESTRAINT "UX UY UZ RX RY RZ"  `);
          }
        }), v.push(""), v.push("$ LINE ASSIGNS"), de.forEach((_) => v.push(_)), v.push(""), v.push("$ LOAD PATTERNS"), v.push('  LOADPATTERN "Lat"  TYPE  "Other"  SELFWEIGHT  0'), v.push(""), v.push("$ POINT OBJECT LOADS");
        const ge = Math.max(...x.nodes.map((_) => _[1]));
        return x.nodes.forEach((_, se) => {
          if (Math.abs(_[1] - ge) < 0.01) {
            const G = oe(se);
            v.push(`  POINTLOAD  "${G.pt}"  "${G.story}"  "Lat"  TYPE "FORCE"  FX 10`);
          }
        }), v.push(""), v.push("  END"), v.push("$ END OF MODEL FILE"), v.join(`\r
`);
      }
      function l(x) {
        const S = 15e3 * Math.sqrt(210) * 10, v = [];
        v.push(`"""ETABS API Validation: ${x.name}`), v.push('Generated by Awatif FEM Studio"""'), v.push("import comtypes.client, time, math"), v.push(""), v.push("helper = comtypes.client.CreateObject('ETABSv1.Helper')"), v.push("helper = helper.QueryInterface(comtypes.gen.ETABSv1.cHelper)"), v.push('myETABS = helper.CreateObjectProgID("CSI.ETABS.API.ETABSObject")'), v.push("myETABS.ApplicationStart()"), v.push("time.sleep(10)"), v.push("SapModel = myETABS.SapModel"), v.push("SapModel.InitializeNewModel()"), v.push("SapModel.File.NewBlank()"), v.push("SapModel.SetPresentUnits(12)  # tonf_m_C"), v.push(""), v.push(`E = ${S}`), v.push('SapModel.PropMaterial.SetMaterial("CONC", 2)'), v.push('SapModel.PropMaterial.SetMPIsotropic("CONC", E, 0.2, 5.5e-6)'), v.push('SapModel.PropFrame.SetRectangle("COL30", "CONC", 0.30, 0.30)'), v.push('SapModel.PropFrame.SetRectangle("VIGA", "CONC", 0.40, 0.25)'), x.elements.some((D) => D.length === 4) && v.push('SapModel.PropArea.SetWall("Muro20", 6, False, "CONC", 0.20)'), v.push(""), v.push("# Add elements"), v.push("FN = ' '"), x.elements.forEach((D, V) => {
          if (D.length === 2) {
            const j = x.nodes[D[0]], B = x.nodes[D[1]], te = Math.abs(B[1] - j[1]), oe = Math.sqrt((B[0] - j[0]) ** 2 + (B[2] - j[2]) ** 2), de = te > oe * 0.5 ? "COL30" : "VIGA";
            v.push(`[FN,r]=SapModel.FrameObj.AddByCoord(${j[0]},${j[2]},${j[1]}, ${B[0]},${B[2]},${B[1]}, FN,"${de}","E${V + 1}","Global")`);
          } else if (D.length === 4) {
            const j = D.map((B) => x.nodes[B]);
            v.push(`SapModel.AreaObj.AddByCoord(4, [${j.map((B) => B[0]).join(",")}], [${j.map((B) => B[2]).join(",")}], [${j.map((B) => B[1]).join(",")}], "", "Muro20")`);
          }
        }), v.push(""), v.push("# Supports at Z=0"), v.push("names = SapModel.PointObj.GetNameList()"), v.push("for i in range(int(names[0])):"), v.push("    c = SapModel.PointObj.GetCoordCartesian(names[1][i])"), v.push("    if abs(float(c[2])) < 0.01:"), v.push("        SapModel.PointObj.SetRestraint(names[1][i], [True]*6)"), v.push(""), v.push("# Load at top"), v.push('SapModel.LoadPatterns.Add("Lat", 8, 0, True)');
        const N = Math.max(...x.nodes.map((D) => D[1]));
        v.push("names = SapModel.PointObj.GetNameList()"), v.push("for i in range(int(names[0])):"), v.push("    c = SapModel.PointObj.GetCoordCartesian(names[1][i])"), v.push(`    if abs(float(c[2]) - ${N}) < 0.01:`), v.push('        SapModel.PointObj.SetLoadForce(names[1][i], "Lat", [10,0,0,0,0,0])'), v.push(""), v.push(`SapModel.File.Save(r"C:\\Users\\j-b-j\\Downloads\\validation_${x.name.replace(/[^a-zA-Z0-9]/g, "_")}.EDB")`), v.push("time.sleep(1)"), v.push("SapModel.Analyze.RunAnalysis()"), v.push("time.sleep(5)"), v.push(""), v.push("# Results"), v.push("SapModel.Results.Setup.DeselectAllCasesAndCombosForOutput()"), v.push('SapModel.Results.Setup.SetCaseSelectedForOutput("Lat")'), v.push(`print(f"\\n=== ETABS: ${x.name} ===")`), v.push("names = SapModel.PointObj.GetNameList()"), v.push("for i in range(int(names[0])):"), v.push("    name = names[1][i]"), v.push("    c = SapModel.PointObj.GetCoordCartesian(name)"), v.push("    NR=0;Obj=[];Elm=[];AC=[];ST=[];SN=[];U1=[];U2=[];U3=[];R1=[];R2=[];R3=[]"), v.push("    [NR,Obj,Elm,AC,ST,SN,U1,U2,U3,R1,R2,R3,ret]=SapModel.Results.JointDispl(name,0,NR,Obj,Elm,AC,ST,SN,U1,U2,U3,R1,R2,R3)"), v.push("    if NR > 0:"), v.push('        print(f"  {name} Z={float(c[2]):.1f}: Ux={U1[0]*100:.4f} cm")'), v.push(""), v.push('print("\\nAwatif results:")');
        for (const D of x.results) v.push(`print(f"  ${D.label}: Awatif=${D.awatif.toFixed(4)}, ETABS=${D.reference.toFixed(4)}, Ratio={${D.awatif.toFixed(4)}/${D.reference.toFixed(4)}:.4f}")`);
        return v.push("SapModel.View.RefreshView(0, False)"), v.join(`
`);
      }
      function s(x, S) {
        const v = new Blob([
          x
        ], {
          type: "text/plain"
        }), L = URL.createObjectURL(v), N = document.createElement("a");
        N.href = L, N.download = S, N.click(), URL.revokeObjectURL(L);
      }
      function f(x) {
        let S = document.getElementById("test-results-overlay");
        S && S.remove(), S = document.createElement("div"), S.id = "test-results-overlay", S.style.cssText = `position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);
        background:#1a1a2e;color:#eee;border:2px solid #16213e;border-radius:8px;padding:20px;
        z-index:10000;max-width:750px;width:90%;max-height:80vh;overflow-y:auto;font-family:monospace;font-size:13px;
        box-shadow:0 10px 40px rgba(0,0,0,0.5);`;
        let v = `<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px">
        <h3 style="margin:0;color:#00d4ff">Awatif FEM Validation</h3>
        <button onclick="this.parentElement.parentElement.remove()" style="background:none;border:none;color:#888;font-size:18px;cursor:pointer">X</button>
      </div>`, L = true;
        window.__awatifTests = x;
        for (let D = 0; D < x.length; D++) {
          const V = x[D];
          v += '<div style="margin-bottom:16px;border:1px solid #333;border-radius:6px;padding:10px">', v += '<div style="display:flex;justify-content:space-between;align-items:center">', v += `<div style="font-weight:bold;color:#00d4ff">${V.name}</div>`, v += "<div>", v += `<button onclick="window.__awatifDownloadE2k(${D})" style="background:#1e3a5f;color:#aaa;border:1px solid #444;padding:2px 6px;font-size:10px;cursor:pointer;margin-right:4px;border-radius:3px">e2k</button>`, v += `<button onclick="window.__awatifDownloadPy(${D})" style="background:#2a1e3a;color:#aaa;border:1px solid #444;padding:2px 6px;font-size:10px;cursor:pointer;border-radius:3px">py</button>`, v += "</div></div>", v += `<div style="color:#888;font-size:11px;margin-bottom:8px">${V.formulation}</div>`, v += `<table style="width:100%;border-collapse:collapse;font-size:12px">
          <tr style="color:#888"><td style="padding:3px 6px">Measure</td><td style="text-align:right">Awatif</td><td style="text-align:right">Reference</td><td style="text-align:right">Ratio</td><td style="text-align:right">Source</td><td style="text-align:center"></td></tr>`;
          for (const j of V.results) {
            const B = j.reference !== 0 ? j.awatif / j.reference : 1, te = Math.abs(B - 1) < 0.05;
            te || (L = false);
            const oe = te ? "#4caf50" : "#f44336", de = te ? "PASS" : "FAIL";
            v += `<tr style="border-top:1px solid #333">
            <td style="padding:3px 6px">${j.label}</td>
            <td style="text-align:right;color:#fff">${j.awatif.toFixed(4)}</td>
            <td style="text-align:right;color:#aaa">${j.reference.toFixed(4)}</td>
            <td style="text-align:right;color:${oe};font-weight:bold">${B.toFixed(4)}</td>
            <td style="text-align:right;color:#888;font-size:11px">${j.refSource}</td>
            <td style="text-align:center;color:${oe};font-size:10px;font-weight:bold">${de}</td></tr>`;
          }
          v += "</table></div>";
        }
        v += L ? '<div style="color:#4caf50;font-weight:bold;text-align:center;margin-top:8px">ALL TESTS PASSED (< 5% error vs ETABS)</div>' : '<div style="color:#f44336;font-weight:bold;text-align:center;margin-top:8px">Some tests exceeded 5% tolerance</div>', S.innerHTML = v, document.body.appendChild(S), window.__awatifDownloadE2k = (D) => {
          const V = window.__awatifTests[D], j = V.name.replace(/[^a-zA-Z0-9]/g, "_").toLowerCase();
          s(n(V), `${j}.e2k`);
        }, window.__awatifDownloadPy = (D) => {
          const V = window.__awatifTests[D], j = V.name.replace(/[^a-zA-Z0-9]/g, "_").toLowerCase();
          s(l(V), `${j}_etabs.py`);
        };
      }
      (_h = ye.querySelector("#cad3d-export")) == null ? void 0 : _h.addEventListener("click", (x) => {
        x.stopPropagation(), Ca();
      });
      let a = "";
      const i = ye.querySelector("#cad3d-io-menu"), d = ye.querySelector("#cad3d-io-file");
      function r(x, S) {
        e.nodes.val = x.nodes, e.elements.val = x.elements, e.nodeInputs.val = x.nodeInputs, e.elementInputs.val = x.elementInputs, x.sectionShapes && x.elementInputs && (x.elementInputs.sectionShapes = x.sectionShapes), e.deformOutputs.val = {}, e.analyzeOutputs.val = {};
        const v = x.elements.filter((N) => N.length === 2).length, L = x.elements.filter((N) => N.length >= 3).length;
        console.log(`${S} (${x.nodes.length} nodos, ${v} frames, ${L} shells): ${x.nodes.length} nodes, ${x.elements.length} elements`), setTimeout(() => st(), 50);
      }
      function c(x, S) {
        var _a3, _b2, _c2;
        const v = {};
        x.elementInfo.forEach((B) => v[B.category] = (v[B.category] || 0) + 1), (_a3 = document.getElementById("ifc-filter-panel")) == null ? void 0 : _a3.remove();
        const L = document.createElement("div");
        L.id = "ifc-filter-panel", L.style.cssText = `position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);
        background:#1e1e2e;border:2px solid #00ccff;border-radius:12px;padding:20px;
        z-index:1000010;color:#eee;font-family:monospace;font-size:12px;min-width:320px;
        box-shadow:0 8px 32px rgba(0,0,0,0.6);`;
        const N = [
          "column",
          "beam",
          "slab",
          "footing",
          "member",
          "wall"
        ], D = [
          "opening",
          "rebar",
          "plate",
          "fastener",
          "other"
        ], V = {
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
        let j = `<h3 style="color:#00ccff;margin:0 0 12px">IFC \u2192 Modelo Anal\xEDtico</h3>
        <div style="color:#888;margin-bottom:10px">Selecciona qu\xE9 convertir a FEM:</div>
        <div style="border:1px solid #444;border-radius:6px;padding:8px;margin-bottom:8px">
          <div style="color:#33ff33;font-weight:bold;margin-bottom:4px">Estructural</div>`;
        for (const B of N) {
          const te = v[B] || 0;
          if (te === 0) continue;
          const oe = [
            "column",
            "beam",
            "slab"
          ].includes(B) ? "checked" : "";
          j += `<label style="display:flex;align-items:center;gap:6px;padding:2px 0">
          <input type="checkbox" data-ifc-cat="${B}" ${oe}>
          <span>${V[B] || B}</span>
          <span style="color:#888;margin-left:auto">(${te})</span>
        </label>`;
        }
        j += `</div><div style="border:1px solid #333;border-radius:6px;padding:8px;margin-bottom:12px">
        <div style="color:#ff6666;font-weight:bold;margin-bottom:4px">No estructural (solo visual)</div>`;
        for (const B of D) {
          const te = v[B] || 0;
          te !== 0 && (j += `<label style="display:flex;align-items:center;gap:6px;padding:2px 0;color:#888">
          <input type="checkbox" data-ifc-cat="${B}" disabled>
          <span>${V[B] || B}</span>
          <span style="margin-left:auto">(${te})</span>
        </label>`);
        }
        j += `</div>
        <div style="display:flex;gap:8px">
          <button id="ifc-gen-analytical" style="flex:1;padding:8px;background:#0f3460;color:#fff;border:none;border-radius:6px;cursor:pointer;font-size:13px;font-weight:bold">
            \u{1F527} Generar Modelo Anal\xEDtico
          </button>
          <button id="ifc-cancel" style="padding:8px 12px;background:#333;color:#aaa;border:1px solid #555;border-radius:6px;cursor:pointer">\u2715</button>
        </div>`, L.innerHTML = j, document.body.appendChild(L), L.querySelectorAll("input[data-ifc-cat]").forEach((B) => {
          B.addEventListener("change", () => {
            const te = B.dataset.ifcCat, oe = x.detailCategories.get(te);
            if (oe) {
              oe.visible = B.checked;
              const de = De();
              de && de.render();
            }
          });
        }), (_b2 = L.querySelector("#ifc-gen-analytical")) == null ? void 0 : _b2.addEventListener("click", () => {
          var _a4;
          const B = /* @__PURE__ */ new Set();
          L.querySelectorAll("input[data-ifc-cat]:checked").forEach((G) => {
            B.add(G.dataset.ifcCat);
          });
          const te = S.nodes.map((G) => [
            G.x,
            G.y,
            G.z
          ]), oe = [], de = {
            elasticities: /* @__PURE__ */ new Map(),
            shearModuli: /* @__PURE__ */ new Map(),
            areas: /* @__PURE__ */ new Map(),
            momentsOfInertiaZ: /* @__PURE__ */ new Map(),
            momentsOfInertiaY: /* @__PURE__ */ new Map(),
            torsionalConstants: /* @__PURE__ */ new Map(),
            densities: /* @__PURE__ */ new Map(),
            sectionShapes: /* @__PURE__ */ new Map()
          }, ge = {
            supports: /* @__PURE__ */ new Map(),
            loads: /* @__PURE__ */ new Map()
          };
          let _ = 0;
          for (const G of S.elements) if (B.has(G.category) && G.type === "frame" && G.nodeIds.length >= 2) {
            oe.push(G.nodeIds);
            const ae = ((_a4 = S.materials) == null ? void 0 : _a4.get(G.material)) || {
              E: 2132888792e-2,
              nu: 0.2,
              rho: 2.4
            }, Y = G.b || 0.3, le = G.h || 0.3, ue = Y * le, Z = Y * le * le * le / 12, fe = le * Y * Y * Y / 12, ze = Y * le * (Y * Y + le * le) / 12, He = ae.E / (2 * (1 + ae.nu));
            de.elasticities.set(_, ae.E), de.shearModuli.set(_, He), de.areas.set(_, ue), de.momentsOfInertiaZ.set(_, fe), de.momentsOfInertiaY.set(_, Z), de.torsionalConstants.set(_, ze), de.densities.set(_, ae.rho), de.sectionShapes.set(_, {
              type: "rect",
              b: Y,
              h: le,
              name: G.sectionName
            }), _++;
          }
          const se = Math.min(...te.map((G) => G[2]));
          te.forEach((G, ae) => {
            Math.abs(G[2] - se) < 0.05 && ge.supports.set(ae, [
              true,
              true,
              true,
              true,
              true,
              true
            ]);
          });
          for (const [, G] of x.detailCategories) {
            const ae = De();
            ae && ae.scene.remove(G);
          }
          r({
            nodes: te,
            elements: oe,
            nodeInputs: ge,
            elementInputs: de,
            sectionShapes: de.sectionShapes,
            info: {
              nNodes: te.length,
              nFrames: oe.length
            }
          }, "IFC analytical"), L.remove();
        }), (_c2 = L.querySelector("#ifc-cancel")) == null ? void 0 : _c2.addEventListener("click", () => {
          for (const [, te] of x.detailCategories) {
            const oe = De();
            oe && oe.scene.remove(te);
          }
          const B = De();
          B && B.render(), L.remove();
        });
      }
      function m(x) {
        he = /* @__PURE__ */ new Set(), xe = /* @__PURE__ */ new Set(), Te = /* @__PURE__ */ new Map(), Pe = /* @__PURE__ */ new Map();
        const S = /* @__PURE__ */ new Map();
        for (let oe = 0; oe < x.stories.length; oe++) S.set(x.stories[oe].name, oe);
        for (let oe = 0; oe < x.elementTypes.length; oe++) {
          const de = x.elementTypes[oe], ge = x.elementStories[oe], _ = S.get(ge) ?? 0;
          Te.set(oe, _), de === "COLUMN" || de === "BRACE" ? he.add(oe) : xe.add(oe);
        }
        A = "edificio";
        const v = x.grids.filter((oe) => oe.dir === "X").sort((oe, de) => oe.coord - de.coord), L = x.grids.filter((oe) => oe.dir === "Y").sort((oe, de) => oe.coord - de.coord);
        let N, D, V, j;
        if (v.length > 0 || L.length > 0) N = v.map((oe) => oe.coord), D = L.map((oe) => oe.coord), V = v.map((oe) => oe.label), j = L.map((oe) => oe.label);
        else {
          const oe = new Set(x.nodes.map((ge) => ge[0])), de = new Set(x.nodes.map((ge) => ge[1]));
          N = [
            ...oe
          ].sort((ge, _) => ge - _), D = [
            ...de
          ].sort((ge, _) => ge - _), V = N.map((ge, _) => String(_ + 1)), j = D.map((ge, _) => String.fromCharCode(65 + _));
        }
        const B = x.stories.length > 0 ? Math.max(...x.stories.map((oe) => oe.elev)) : Math.max(...x.nodes.map((oe) => oe[2]));
        Ge = N, Ue = D, po = B, setTimeout(() => {
          st(), Go(N, D, B, V, j), In(x.stories, N, D), Nn(), Bn();
        }, 100);
        const te = {
          COLUMN: 0,
          BEAM: 0,
          BRACE: 0
        };
        for (const oe of x.elementTypes) te[oe]++;
        console.log(`E2K grids: X=[${V.join(",")}] Y=[${j.join(",")}]`), console.log(`E2K stories: ${x.stories.map((oe) => `${oe.name}@${oe.elev.toFixed(2)}`).join(", ")}`), console.log(`E2K elements: ${te.COLUMN} columns, ${te.BEAM} beams, ${te.BRACE} braces`), Ne();
      }
      function w(x, S) {
        const v = new Blob([
          x
        ], {
          type: "text/plain"
        }), L = URL.createObjectURL(v), N = document.createElement("a");
        N.href = L, N.download = S, N.click(), URL.revokeObjectURL(L);
      }
      i && i.addEventListener("change", () => {
        if (a = i.value, i.value = "", a.startsWith("import")) a === "import-e2k" ? d.accept = ".e2k,.E2K" : a === "import-s2k" ? d.accept = ".s2k,.S2K,.$2k" : a === "import-ifc" ? d.accept = ".ifc,.IFC" : a === "import-py" ? d.accept = ".py" : a === "import-tcl" && (d.accept = ".tcl"), d.click();
        else if (a.startsWith("export")) {
          const x = {
            nodes: e.nodes.val,
            elements: e.elements.val,
            nodeInputs: e.nodeInputs.val,
            elementInputs: e.elementInputs.val
          };
          try {
            a === "export-e2k" ? w(ml({
              ...x,
              title: "Awatif Model",
              e2kModel: Je ?? void 0
            }), "model.e2k") : a === "export-s2k" ? w(bl({
              ...x,
              title: "Awatif Model"
            }), "model.s2k") : a === "export-py" ? w(Nl(x), "model_opensees.py") : a === "export-tcl" && w(Bl(x), "model_opensees.tcl");
          } catch (S) {
            alert("Export error: " + S.message);
          }
        }
      }), d && d.addEventListener("change", () => {
        var _a3;
        const x = (_a3 = d.files) == null ? void 0 : _a3[0];
        if (!x) return;
        if (a === "import-ifc") {
          const v = new FileReader();
          v.onload = async () => {
            const L = v.result;
            try {
              const N = De();
              if (!N) {
                alert("Viewer not ready");
                return;
              }
              console.log("IFC: Loading 3D geometry...");
              const D = await Jl(N.scene, L);
              console.log(`IFC: ${D.meshCount} meshes loaded, bbox:`, D.bbox);
              const V = new Ee();
              D.bbox.getCenter(V);
              const j = new Ee();
              D.bbox.getSize(j);
              const B = Math.max(j.x, j.y, j.z);
              N.controls.target.copy(V), N.camera.position.set(V.x + B, V.y + B * 0.5, V.z + B), N.camera.lookAt(V), N.controls.maxDistance = B * 5, N.controls.update(), N.render(), window.__ifcLoadResult = D, window.__ifcArrayBuffer = L;
              const te = new FileReader();
              te.onload = () => {
                const oe = te.result, de = Vl(oe);
                window.__ifcAnalytical = de;
                const ge = {};
                D.elementInfo.forEach((_) => ge[_.category] = (ge[_.category] || 0) + 1), console.log("IFC categories:", ge), console.log(`IFC: ${D.elementInfo.size} geometric elements, ${de.elements.length} analytical elements`), c(D, de);
              }, te.readAsText(x);
            } catch (N) {
              alert("IFC error: " + N.message), console.error(N);
            }
          }, v.readAsArrayBuffer(x), d.value = "";
          return;
        }
        const S = new FileReader();
        S.onload = () => {
          const v = S.result;
          try {
            if (a === "import-e2k") {
              const L = gl(v);
              Je = L, r(L, "E2K imported"), m(L);
            } else if (a === "import-s2k") {
              const L = hl(v);
              r({
                nodes: L.nodes,
                elements: L.elements,
                nodeInputs: L.nodeInputs,
                elementInputs: L.elementInputs,
                sectionShapes: L.sectionShapes,
                info: L.info
              }, "S2K imported");
            } else if (a === "import-py") {
              const L = Hl(v);
              r(L, "OpenSeesPy imported");
            } else if (a === "import-tcl") {
              const L = Dl(v);
              r(L, "OpenSees Tcl imported");
            }
          } catch (L) {
            alert("Import error: " + L.message), console.error(L);
          }
        }, S.readAsText(x), d.value = "";
      });
      const M = ye.querySelector("#cad3d-force-unit");
      M && (M.value = b, M.addEventListener("change", (x) => {
        x.stopPropagation(), b = M.value, z = zo(b, q), A && Be(A);
      }));
      const y = ye.querySelector("#cad3d-length-unit");
      y && (y.value = q, y.addEventListener("change", (x) => {
        x.stopPropagation(), q = y.value, z = zo(b, q), A && Be(A);
      })), ye.querySelectorAll("[data-preset]").forEach((x) => {
        x.addEventListener("click", (S) => {
          S.stopPropagation();
          const v = x.dataset.preset, L = W[v];
          L && (b = L.force, q = L.length, J = L.stress, z = zo(b, q), M && (M.value = b), y && (y.value = q), ye.querySelectorAll("[data-preset]").forEach((N) => {
            N.classList.toggle("active", N.dataset.preset === v);
          }), A && Be(A), console.log(`Preset: ${v} \u2192 ${b}+${q}, stress: ${J.label}`));
        });
      }), (_i = ye.querySelector("#cad3d-log")) == null ? void 0 : _i.addEventListener("click", (x) => {
        x.stopPropagation(), ja();
      }), (_j = ye.querySelector("#cad3d-pushover")) == null ? void 0 : _j.addEventListener("click", (x) => {
        x.stopPropagation(), Wa();
      }), (_k = ye.querySelector("#cad3d-nonlinear")) == null ? void 0 : _k.addEventListener("click", (x) => {
        x.stopPropagation(), Va();
      }), (_l2 = ye.querySelector("#cad3d-fem-solver")) == null ? void 0 : _l2.addEventListener("click", (x) => {
        x.stopPropagation(), Xa();
      }), (_m = ye.querySelector("#cad3d-calc")) == null ? void 0 : _m.addEventListener("click", (x) => {
        x.stopPropagation(), na(async () => {
          const { openCalcPanel: S } = await import("./calcPanel-C-MVHoBB.js").then(async (m2) => {
            await m2.__tla;
            return m2;
          });
          return {
            openCalcPanel: S
          };
        }, __vite__mapDeps([0,1,2,3,4,5,6,7])).then(({ openCalcPanel: S }) => {
          var _a3, _b2;
          const v = {
            nodes: e.nodes.val,
            elements: e.elements.val,
            nodeInputs: ((_a3 = e.nodeInputs) == null ? void 0 : _a3.val) ?? {},
            elementInputs: ((_b2 = e.elementInputs) == null ? void 0 : _b2.val) ?? {},
            modelName: A ? A.charAt(0).toUpperCase() + A.slice(1) : "Modelo"
          };
          S(v);
        });
      }), (_n2 = ye.querySelector("#cad3d-modal")) == null ? void 0 : _n2.addEventListener("click", (x) => {
        var _a3, _b2;
        x.stopPropagation(), Wt = !Wt, (_a3 = ye.querySelector("#cad3d-modal")) == null ? void 0 : _a3.classList.toggle("active", Wt);
        const v = ye.querySelector("#cad3d-mode-prev"), L = ye.querySelector("#cad3d-mode-next"), N = ye.querySelector("#cad3d-mode-label"), D = ye.querySelector("#cad3d-modal-scale");
        if (Wt) {
          const V = De();
          ((_b2 = V == null ? void 0 : V.settings) == null ? void 0 : _b2.loads) && (ln = V.settings.loads.rawVal, V.settings.loads.val = false), qn(), v.style.display = "", L.style.display = "", N.style.display = "", D && (D.style.display = ""), p();
        } else Rn(), v.style.display = "none", L.style.display = "none", N.style.display = "none", D && (D.style.display = "none"), A && A !== "placa-q4" && A !== "placa-3q" && Me(), setTimeout(() => {
          var _a4;
          const V = De();
          ((_a4 = V == null ? void 0 : V.settings) == null ? void 0 : _a4.loads) && ln && (V.settings.loads.val = true);
        }, 600);
      });
      function p() {
        var _a3;
        const x = ye.querySelector("#cad3d-mode-label");
        if (!x || !(ut == null ? void 0 : ut.frequencies)) return;
        const S = ut.frequencies[Mt], v = S > 0 ? 1 / S : 0, L = [
          0,
          0,
          0,
          0,
          0,
          0
        ];
        for (let N = 0; N <= Mt; N++) {
          const D = (_a3 = ut.massParticipation) == null ? void 0 : _a3[N];
          if (D) for (let V = 0; V < 6; V++) L[V] += D[V];
        }
        x.textContent = `Modo ${Mt + 1} \u2014 ${S.toFixed(2)} Hz \u2014 T=${v.toFixed(3)}s \u2014 \u03A3Ux=${(L[0] * 100).toFixed(1)}% \u03A3Uy=${(L[1] * 100).toFixed(1)}% \u03A3Rz=${(L[5] * 100).toFixed(1)}%`;
      }
      (_o2 = ye.querySelector("#cad3d-mode-prev")) == null ? void 0 : _o2.addEventListener("click", (x) => {
        if (x.stopPropagation(), !(ut == null ? void 0 : ut.modeShapes)) return;
        Mt = (Mt - 1 + ut.modeShapes.length) % ut.modeShapes.length;
        const S = ut.modeShapes[Mt], { extent: v } = fo();
        let L = 0;
        for (let N = 0; N < ao.length; N++) {
          const D = S[N * 6] || 0, V = S[N * 6 + 1] || 0, j = S[N * 6 + 2] || 0;
          L = Math.max(L, Math.sqrt(D * D + V * V + j * j));
        }
        an = L > 1e-12 ? v * 0.05 / L : 1, Ko(), p();
      }), (_p = ye.querySelector("#cad3d-mode-next")) == null ? void 0 : _p.addEventListener("click", (x) => {
        if (x.stopPropagation(), !(ut == null ? void 0 : ut.modeShapes)) return;
        Mt = (Mt + 1) % ut.modeShapes.length;
        const S = ut.modeShapes[Mt], { extent: v } = fo();
        let L = 0;
        for (let N = 0; N < ao.length; N++) {
          const D = S[N * 6] || 0, V = S[N * 6 + 1] || 0, j = S[N * 6 + 2] || 0;
          L = Math.max(L, Math.sqrt(D * D + V * V + j * j));
        }
        an = L > 1e-12 ? v * 0.05 / L : 1, Ko(), p();
      });
      const g = ye.querySelector("#cad3d-modal-scale");
      g == null ? void 0 : g.addEventListener("mousedown", (x) => x.stopPropagation()), g == null ? void 0 : g.addEventListener("change", () => {
        Wt && (ut == null ? void 0 : ut.modeShapes) && Ko();
      });
      const I = ye.querySelector("#cad3d-cli-toggle"), k = ye.querySelector("#cad3d-cli-panel"), $ = ye.querySelector("#cad3d-cli-output"), T = ye.querySelector("#cad3d-cmd"), O = [];
      let h = -1;
      I == null ? void 0 : I.addEventListener("click", (x) => {
        if (x.stopPropagation(), k) {
          const S = k.style.display !== "none";
          k.style.display = S ? "none" : "block", S || (T == null ? void 0 : T.focus(), $ && !$.textContent && ($.textContent = `CLI ready. Commands:
  cad.addNode(x, y, z)     cad.addFrame(i, j)
  cad.addSupport(n)        cad.addLoad(n, [fx,fy,fz,0,0,0])
  cad.frame([5,5],[3,3])   cad.building([5],[4],[3])
  cad.galpon(12,20,6,3)    cad.clear()
  cad.info()               cad.listNodes()
`));
        }
      }), T == null ? void 0 : T.addEventListener("mousedown", (x) => x.stopPropagation()), document.addEventListener("keydown", (x) => {
        var _a3;
        if ((x.ctrlKey || x.metaKey) && x.key === "z" && !x.shiftKey) {
          x.preventDefault(), Rs();
          return;
        }
        if ((x.ctrlKey || x.metaKey) && (x.key === "y" || x.key === "z" && x.shiftKey)) {
          x.preventDefault(), _s();
          return;
        }
        if ((x.key === "Delete" || x.key === "Backspace") && et.size > 0) {
          x.preventDefault(), et.forEach((S) => K.add(S)), et.clear(), to && (to.remove(), to = null), Me();
          return;
        }
        if (x.key === "Escape") {
          if (eo) if (at !== null) {
            at = null;
            const S = De();
            vt && S && (S.scene.remove(vt), vt.geometry.dispose(), vt.material.dispose(), vt = null), yt && S && (S.scene.remove(yt), yt.geometry.dispose(), yt.material.dispose(), yt = null), S == null ? void 0 : S.render();
          } else dn();
          Tt && cn(), Vt && (Vt = false, Mo(), (_a3 = ye.querySelector("#cad3d-inspect")) == null ? void 0 : _a3.classList.remove("inspect-active"));
        }
      }), T == null ? void 0 : T.addEventListener("keydown", (x) => {
        if (x.stopPropagation(), x.key === "Enter") {
          const S = T.value.trim();
          if (S) {
            O.unshift(S), h = -1, $ && ($.textContent += `> ${S}
`);
            try {
              const v = new Function("cad", `return ${S}`)(_e);
              if (v !== void 0 && $) {
                const L = typeof v == "object" ? JSON.stringify(v, null, 2) : String(v);
                $.textContent += `${L}
`;
              }
            } catch (v) {
              $ && ($.textContent += `ERROR: ${v.message}
`);
            }
            $ && ($.scrollTop = $.scrollHeight), T.value = "";
          }
        } else x.key === "ArrowUp" ? (x.preventDefault(), O.length > 0 && h < O.length - 1 && (h++, T.value = O[h])) : x.key === "ArrowDown" && (x.preventDefault(), h > 0 ? (h--, T.value = O[h]) : (h = -1, T.value = ""));
      });
      let u = false, E = 0, P = 0, R = 0, H = 0;
      ye.addEventListener("mousedown", (x) => {
        const S = x.target.tagName;
        if (S === "BUTTON" || S === "INPUT" || S === "SELECT") return;
        u = true;
        const v = ye.getBoundingClientRect();
        ye.style.bottom = "unset", E = x.clientX, P = x.clientY, R = v.left, H = v.top, x.preventDefault();
      }), window.addEventListener("mousemove", (x) => {
        u && (x.preventDefault(), ye.style.left = R + (x.clientX - E) + "px", ye.style.top = H + (x.clientY - P) + "px");
      }), window.addEventListener("mouseup", () => {
        u = false;
      }), Ne();
    }, 10);
    function De() {
      const t = document.getElementById("viewer");
      return t ? t.__ctx : null;
    }
    function fo() {
      const t = e.nodes.val;
      if (t.length === 0) return {
        center: new Ee(),
        extent: 10
      };
      let o = 1 / 0, n = 1 / 0, l = 1 / 0, s = -1 / 0, f = -1 / 0, a = -1 / 0;
      for (const [r, c, m] of t) r < o && (o = r), r > s && (s = r), c < n && (n = c), c > f && (f = c), m < l && (l = m), m > a && (a = m);
      const i = new Ee((o + s) / 2, (n + f) / 2, (l + a) / 2), d = Math.max(s - o, f - n, a - l, 1);
      return {
        center: i,
        extent: d
      };
    }
    function st(t = false) {
      const o = De();
      if (!o) return;
      const { extent: n } = fo();
      let l;
      n <= 5 ? l = Math.max(1, Math.ceil(n * 1.5)) : n <= 50 ? l = Math.max(5, Math.ceil(n * 1.3 / 5) * 5) : l = Math.max(20, Math.ceil(n * 1.3 / 10) * 10), o.settings.gridSize.val = l, o.scene.children.filter((m) => m.type === "GridHelper").forEach((m) => {
        var _a2, _b;
        (_a2 = m.geometry) == null ? void 0 : _a2.dispose(), (_b = m.material) == null ? void 0 : _b.dispose(), o.scene.remove(m);
      });
      const f = al(), a = new ll(l, 20, f.grid, f.grid);
      a.rotation.x = Math.PI / 2, a.position.set(0.5 * l, 0.5 * l, 0), o.scene.add(a), o.scene.children.filter((m) => m.type === "Group" && m.name !== "gridAxes" && m.name !== "loadsGroup" && (m.name === "viewerAxes" || m.children.some((w) => w instanceof un))).forEach((m) => {
        m.traverse((w) => {
          w.geometry && w.geometry.dispose(), w.material && (w.material.map && w.material.map.dispose(), w.material.dispose());
        }), o.scene.remove(m);
      });
      const d = 0.05 * l, r = new nn();
      r.name = "viewerAxes";
      const c = f.axisArrow;
      r.add(new un(new Ee(1, 0, 0), new Ee(), 1, c, 0.2, 0.2)), r.add(new un(new Ee(0, 1, 0), new Ee(), 1, c, 0.2, 0.2)), r.add(new un(new Ee(0, 0, 1), new Ee(), 1, c, 0.2, 0.2)), r.children.forEach((m) => m.scale.set(d, d, d));
      for (const [m, w, M] of [
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
        const y = document.createElement("canvas");
        y.width = 64, y.height = 64;
        const p = y.getContext("2d");
        p.fillStyle = w, p.font = "bold 50px Arial", p.textAlign = "center", p.textBaseline = "middle", p.fillText(m, 32, 34);
        const g = new Zn(y);
        g.needsUpdate = true;
        const I = new fn(new mn({
          map: g,
          depthTest: false,
          transparent: true
        }));
        I.position.set(M[0], M[1], M[2]), I.scale.set(0.4 * d, 0.4 * d, 1), I.renderOrder = 99, r.add(I);
      }
      o.scene.add(r), t ? o.render() : mo("3d");
    }
    function qs(t, o, n) {
      if (t.length < 2) return n * 10;
      let l = 1 / 0;
      return o > 0 && (l = Math.min(l, Math.abs(t[o] - t[o - 1]))), o < t.length - 1 && (l = Math.min(l, Math.abs(t[o + 1] - t[o]))), l * 0.45 || n * 0.1;
    }
    function mo(t) {
      var _a2;
      const o = De();
      if (!o) return;
      const { center: n, extent: l } = fo(), s = o.renderer.domElement.clientWidth / (o.renderer.domElement.clientHeight || 1), f = l * 0.7;
      o.controls.maxDistance = l * 5, o.controls.minDistance = l * 0.05, o.renderer.clippingPlanes = [];
      const a = () => {
        o.scene.traverse((i) => {
          var _a3;
          if (!i.material) return;
          const d = i.type === "GridHelper" || i.type === "AxesHelper", r = i.isSprite, c = ((_a3 = i.userData) == null ? void 0 : _a3.noClip) === true;
          (d || r || c) && (Array.isArray(i.material) ? i.material.forEach((m) => {
            m.clippingPlanes = [];
          }) : i.material.clippingPlanes = []);
        });
      };
      if (t === "3d") {
        const i = o.perspCamera.fov, d = l / (2 * Math.tan(i * Math.PI / 360)) * 2.2;
        o.perspCamera.position.set(n.x + d * 0.5, n.y - d * 0.8, n.z + d * 0.5), o.controls.target.copy(n), o.setActiveCamera(o.perspCamera);
      } else {
        const i = o.orthoCamera;
        i.left = -f * s, i.right = f * s, i.top = f, i.bottom = -f, i.near = -l * 10, i.far = l * 10, i.updateProjectionMatrix();
        const d = (r, c, m) => {
          i.position.copy(r), i.up.copy(m), o.controls.target.copy(c), i.lookAt(c), o.controls.update();
        };
        if (t === "plan") o.renderer.clippingPlanes = [], d(new Ee(n.x, n.y, n.z + l * 2), new Ee(n.x, n.y, n.z), new Ee(0, 1, 0));
        else if (t.startsWith("plan:")) {
          const r = parseInt(t.split(":")[1]), c = ((_a2 = U.hPiso) == null ? void 0 : _a2.val) ?? 3, m = (r + 1) * c, w = c * 0.45;
          o.renderer.clippingPlanes = [
            new xo(new Ee(0, 0, -1), m + w),
            new xo(new Ee(0, 0, 1), -m + w)
          ], a(), d(new Ee(n.x, n.y, m + l * 2), new Ee(n.x, n.y, m), new Ee(0, 1, 0));
        } else if (t === "elevX") i.position.set(n.x + l * 2, n.y, n.z), i.up.set(0, 0, 1);
        else if (t === "elevY") i.position.set(n.x, n.y - l * 2, n.z), i.up.set(0, 0, 1);
        else if (t.startsWith("axisX:")) {
          const r = parseInt(t.split(":")[1]), c = Ge[r] ?? n.x;
          if (Ue.length > 1) {
            const w = qs(Ge, r, l);
            o.renderer.clippingPlanes = [
              new xo(new Ee(-1, 0, 0), c + w),
              new xo(new Ee(1, 0, 0), -c + w)
            ], a(), i.position.set(n.x + l * 2, n.y, n.z), o.controls.target.set(n.x, n.y, n.z);
          } else i.position.set(n.x, n.y - l * 2, n.z), o.controls.target.copy(n);
          i.up.set(0, 0, 1);
        } else if (t.startsWith("axisY:")) {
          const r = parseInt(t.split(":")[1]), c = Ue[r] ?? n.y;
          if (Ge.length > 1) {
            const w = qs(Ue, r, l);
            o.renderer.clippingPlanes = [
              new xo(new Ee(0, -1, 0), c + w),
              new xo(new Ee(0, 1, 0), -c + w)
            ], a(), i.position.set(n.x, n.y - l * 2, n.z), o.controls.target.set(n.x, n.y, n.z);
          } else i.position.set(n.x + l * 2, n.y, n.z), o.controls.target.copy(n);
          i.up.set(0, 0, 1);
        }
        !t.startsWith("axisX:") && !t.startsWith("axisY:") && o.controls.target.copy(n), o.setActiveCamera(i);
      }
    }
    function Nn() {
      const t = ye.querySelector("#cad3d-axis-buttons");
      if (!t) return;
      if (Ge.length < 2 && Ue.length < 2) {
        t.style.display = "none";
        return;
      }
      t.style.display = "", t.innerHTML = "";
      const o = (f, a, i) => {
        const d = document.createElement("button");
        return d.textContent = f, d.dataset.view = a, d.title = i, d.style.cssText = "min-width:22px;padding:1px 5px;font-weight:bold", d.addEventListener("click", (r) => {
          var _a2;
          r.stopPropagation();
          const c = d.classList.contains("view-active");
          ye.querySelectorAll("[data-view]").forEach((m) => m.classList.remove("view-active")), c ? (mo("3d"), (_a2 = ye.querySelector('[data-view="3d"]')) == null ? void 0 : _a2.classList.add("view-active")) : (mo(a), d.classList.add("view-active"));
        }), d;
      }, n = document.createElement("span");
      n.textContent = "Ejes:", n.style.cssText = "color:#888;font-size:10px;margin-right:2px;align-self:center", t.appendChild(n);
      const l = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      Ge.forEach((f, a) => {
        const i = a < l.length ? l[a] : `X${a}`;
        t.appendChild(o(i, `axisX:${a}`, `Eje ${i} \u2014 elevaci\xF3n mirando en Y`));
      });
      const s = document.createElement("span");
      s.textContent = "|", s.style.cssText = "color:#555;margin:0 3px;align-self:center;font-weight:bold", t.appendChild(s), Ue.forEach((f, a) => {
        const i = `${a + 1}`;
        t.appendChild(o(i, `axisY:${a}`, `Eje ${i} \u2014 elevaci\xF3n mirando en X`));
      });
    }
    function Bn() {
      var _a2;
      const t = ye.querySelector("#cad3d-floor-buttons");
      if (!t) return;
      const o = Math.round(((_a2 = U.nPisos) == null ? void 0 : _a2.val) ?? 0);
      if (o < 1) {
        t.style.display = "none";
        return;
      }
      t.style.display = "", t.innerHTML = "";
      const n = (s, f, a) => {
        const i = document.createElement("button");
        return i.textContent = s, i.dataset.view = f, i.title = a, i.style.cssText = "min-width:22px;padding:1px 5px;font-weight:bold", i.addEventListener("click", (d) => {
          var _a3;
          d.stopPropagation();
          const r = i.classList.contains("view-active");
          ye.querySelectorAll("[data-view]").forEach((c) => c.classList.remove("view-active")), r ? (mo("3d"), (_a3 = ye.querySelector('[data-view="3d"]')) == null ? void 0 : _a3.classList.add("view-active")) : (mo(f), i.classList.add("view-active"));
        }), i;
      }, l = document.createElement("span");
      l.textContent = "Planta:", l.style.cssText = "color:#888;font-size:10px;margin-right:2px;align-self:center", t.appendChild(l);
      for (let s = 0; s < o; s++) t.appendChild(n(`P${s + 1}`, `plan:${s}`, `Planta Piso ${s + 1}`));
    }
    function Ta() {
      mo("3d"), ye.querySelectorAll("[data-view]").forEach((t) => t.classList.toggle("view-active", t.dataset.view === "3d"));
    }
    _e.view = (t) => {
      t = {
        planta: "plan",
        elevationX: "elevX",
        elevationY: "elevY",
        corte: "section"
      }[t] || t, mo(t), ye.querySelectorAll("[data-view]").forEach((n) => n.classList.toggle("view-active", n.dataset.view === t));
    };
    let Vt = false, Tt = false, eo = false, St = "line", _t = [], at = null, vt = null, yt = null, qo = null, Bt = null;
    const ct = {
      node: true,
      grid: true,
      midpoint: true,
      track: true
    }, Hn = 0.5;
    let Dn = [], Ht = null, wo = null;
    const Ro = [], rn = [], Aa = 50;
    function _o() {
      Ro.push({
        nodes: JSON.parse(JSON.stringify(e.nodes.val)),
        elements: JSON.parse(JSON.stringify(e.elements.val))
      }), Ro.length > Aa && Ro.shift(), rn.length = 0;
    }
    function Rs() {
      if (Ro.length === 0) return;
      rn.push({
        nodes: JSON.parse(JSON.stringify(e.nodes.val)),
        elements: JSON.parse(JSON.stringify(e.elements.val))
      });
      const t = Ro.pop();
      e.nodes.val = t.nodes, e.elements.val = t.elements, uo(), e.elementInputs.val = {
        ...e.elementInputs.val
      };
    }
    function _s() {
      if (rn.length === 0) return;
      Ro.push({
        nodes: JSON.parse(JSON.stringify(e.nodes.val)),
        elements: JSON.parse(JSON.stringify(e.elements.val))
      });
      const t = rn.pop();
      e.nodes.val = t.nodes, e.elements.val = t.elements, uo(), e.elementInputs.val = {
        ...e.elementInputs.val
      };
    }
    const et = /* @__PURE__ */ new Set();
    let At = null, bo = [], Ot = null, to = null;
    function jn(t) {
      const o = De();
      if (!o) return;
      const n = e.nodes.val, l = e.elements.val[t];
      if (!l) return;
      const s = [];
      for (let i = 0; i < l.length; i++) {
        const d = n[l[i]], r = n[l[(i + 1) % l.length]];
        s.push(d[0], d[1], d[2], r[0], r[1], r[2]);
      }
      const f = new Dt();
      f.setAttribute("position", new Eo(s, 3));
      const a = new Ho(f, new Do({
        color: 16711935,
        linewidth: 3,
        depthTest: false
      }));
      a.renderOrder = 9998, a.__elemIdx = t, o.scene.add(a), bo.push(a), o.render();
    }
    function go() {
      const t = De();
      bo.forEach((o) => {
        t == null ? void 0 : t.scene.remove(o), o.geometry.dispose(), o.material.dispose();
      }), bo = [], t == null ? void 0 : t.render();
    }
    function ho() {
      to && to.remove();
      const t = X.size > 0 || ee;
      if (et.size === 0 && !t) {
        to = null;
        return;
      }
      const o = document.createElement("div");
      o.style.cssText = "position:fixed;bottom:20px;left:50%;transform:translateX(-50%);background:var(--cad-bg);color:var(--cad-text);border:2px solid var(--cad-heading);border-radius:8px;padding:10px 16px;z-index:10000;font-family:monospace;font-size:13px;display:flex;gap:12px;align-items:center;box-shadow:0 4px 20px var(--cad-shadow);", o.innerHTML = `
      <span style="color:var(--cad-heading);font-weight:bold;">${et.size} elem.</span>
      <button id="sel-assign" style="padding:5px 8px;background:#336699;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:12px;" title="Asignar secci\xF3n">\u{1F4D0}</button>
      <button id="sel-info" style="padding:5px 8px;background:#225588;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:12px;" title="Info del elemento">\u{1F50D}</button>
      <button id="sel-hide" style="padding:5px 8px;background:#665500;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:12px;" title="Ocultar seleccionados">\u{1F441}\u200D\u{1F5E8}</button>
      <button id="sel-isolate" style="padding:5px 8px;background:#006633;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:12px;" title="Aislar (mostrar solo seleccionados)">\u25CE</button>
      <button id="sel-showall" style="padding:5px 8px;background:#444;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:12px;" title="Mostrar todo">\u21BA</button>
      <button id="sel-delete" style="padding:5px 8px;background:#cc3333;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:12px;" title="Eliminar seleccionados">\u{1F5D1}</button>
      <button id="sel-clear" style="padding:5px 8px;background:#555;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:12px;" title="Limpiar selecci\xF3n">\u2715</button>
    `, document.body.appendChild(o), to = o, o.querySelector("#sel-assign").addEventListener("click", () => {
        Ja([
          ...et
        ]);
      }), o.querySelector("#sel-info").addEventListener("click", () => {
        if (et.size === 1) {
          const n = [
            ...et
          ][0];
          Ws(n);
        } else {
          const n = [
            ...et
          ], l = e.nodes.val, s = e.elements.val;
          let f = 0, a = 0, i = 0, d = 0;
          n.forEach((c) => {
            const m = s[c];
            if (m) if (m.length === 2) {
              const w = l[m[0]], M = l[m[1]], y = Math.abs(M[0] - w[0]), p = Math.abs(M[1] - w[1]), g = Math.abs(M[2] - w[2]);
              g > y && g > p ? f++ : a++;
            } else m.length === 3 ? i++ : m.length === 4 && d++;
          });
          const r = [];
          f && r.push(`${f} columnas`), a && r.push(`${a} vigas`), d && r.push(`${d} shells Q4`), i && r.push(`${i} triangulos`), alert(`${n.length} elementos seleccionados:
${r.join(", ")}`);
        }
      }), o.querySelector("#sel-hide").addEventListener("click", () => {
        et.forEach((n) => X.add(n)), et.clear(), go(), ho(), Me();
      }), o.querySelector("#sel-isolate").addEventListener("click", () => {
        ee = true, me.clear(), et.forEach((n) => me.add(n)), et.clear(), go(), ho(), Me();
      }), o.querySelector("#sel-showall").addEventListener("click", () => {
        X.clear(), ee = false, me.clear(), ho(), Me();
      }), o.querySelector("#sel-delete").addEventListener("click", () => {
        _o(), et.forEach((n) => K.add(n)), et.clear(), go(), ho(), Me();
      }), o.querySelector("#sel-clear").addEventListener("click", () => {
        et.clear(), go(), ho();
      });
    }
    function cn() {
      var _a2;
      Tt = false, et.clear(), go(), to && (to.remove(), to = null), (_a2 = ye.querySelector("#cad3d-select")) == null ? void 0 : _a2.classList.remove("inspect-active");
      const o = De();
      o && (o.controls.enabled = true);
    }
    function Mo() {
      if (At) {
        const t = De();
        t == null ? void 0 : t.scene.remove(At), At.geometry.dispose(), At.material.dispose(), At = null, t == null ? void 0 : t.render();
      }
      Ot && (Ot.remove(), Ot = null);
    }
    function Pa(t) {
      Wn();
      const o = De();
      if (!o) return;
      const n = e.nodes.val[t];
      if (!n) return;
      wo = t;
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
      for (const [f, a] of s) {
        const i = new Float32Array([
          n[0] - f[0] * l,
          n[1] - f[1] * l,
          n[2] - f[2] * l,
          n[0] + f[0] * l,
          n[1] + f[1] * l,
          n[2] + f[2] * l
        ]), d = new Dt();
        d.setAttribute("position", new yn(i, 3));
        const r = new Bo({
          color: a,
          dashSize: 0.3,
          gapSize: 0.15,
          transparent: true,
          opacity: 0.4,
          depthTest: false
        }), c = new Ho(d, r);
        c.computeLineDistances(), c.renderOrder = 9990, o.scene.add(c), Dn.push(c);
      }
      o.render();
    }
    function Wn() {
      const t = De();
      for (const o of Dn) t == null ? void 0 : t.scene.remove(o), o.geometry.dispose(), o.material.dispose();
      Dn = [], wo = null, Ht && (Ht.remove(), Ht = null);
    }
    function Os(t, o, n, l) {
      Ht || (Ht = document.createElement("div"), Ht.style.cssText = "position:fixed;pointer-events:none;z-index:10002;background:var(--cad-bg);color:var(--cad-heading);font-family:monospace;font-size:11px;padding:2px 6px;border-radius:3px;white-space:nowrap;border:1px solid var(--cad-border);", document.body.appendChild(Ht));
      const s = l.x - n.x, f = l.y - n.y, a = l.z - n.z, i = Math.sqrt(s * s + f * f + a * a), d = Math.abs(s), r = Math.abs(f), c = Math.abs(a);
      let m = "";
      d > r && d > c ? m = `\u0394X=${s.toFixed(2)}` : r > d && r > c ? m = `\u0394Y=${f.toFixed(2)}` : c > 0.01 && (m = `\u0394Z=${a.toFixed(2)}`), Ht.textContent = `${i.toFixed(3)} m  ${m}`, Ht.style.left = t + 20 + "px", Ht.style.top = o - 10 + "px";
    }
    function Fa(t, o) {
      const l = e.nodes.val[o];
      if (!l) return null;
      const s = new Ee(l[0], l[1], l[2]), f = t.clone(), a = f.clone().sub(s), i = 0.3, d = Math.abs(a.x), r = Math.abs(a.y), c = Math.abs(a.z);
      return r < i && c < i && d > 0.01 ? new Ee(f.x, s.y, s.z) : d < i && c < i && r > 0.01 ? new Ee(s.x, f.y, s.z) : d < i && r < i && c > 0.01 ? new Ee(s.x, s.y, f.z) : null;
    }
    function dn() {
      var _a2;
      const t = De();
      vt && t && (t.scene.remove(vt), vt.geometry.dispose(), vt.material.dispose(), vt = null), yt && t && (t.scene.remove(yt), yt.geometry.dispose(), yt.material.dispose(), yt = null), Wn(), at = null, Bt = null, eo = false, qo && (qo.remove(), qo = null), (_a2 = ye.querySelector("#cad3d-draw")) == null ? void 0 : _a2.classList.remove("inspect-active"), t == null ? void 0 : t.render();
    }
    function qa() {
      qo && qo.remove();
      const t = document.createElement("div");
      t.style.cssText = "position:fixed;bottom:60px;left:50%;transform:translateX(-50%);background:var(--cad-bg);border:1px solid var(--cad-border);border-radius:6px;padding:6px 10px;z-index:10000;display:flex;gap:6px;align-items:center;font-family:monospace;font-size:11px;box-shadow:0 2px 10px var(--cad-shadow);";
      const o = (s) => `padding:4px 10px;border:1px solid ${s ? "#00ccff" : "#555"};background:${s ? "#003355" : "#333"};color:${s ? "#00ccff" : "#ccc"};border-radius:3px;cursor:pointer;font-size:11px;font-family:monospace;`, n = (s) => `padding:3px 6px;border:1px solid ${s ? "#33ff33" : "#444"};background:${s ? "#113311" : "#222"};color:${s ? "#33ff33" : "#888"};border-radius:3px;cursor:pointer;font-size:10px;`;
      t.innerHTML = `
      <span style="color:#00ccff;font-weight:bold;margin-right:4px;">Draw:</span>
      <button id="dt-line" style="${o(St === "line")}">\u{1F4CF} Line</button>
      <button id="dt-arc" style="${o(St === "arc")}">\u2312 Arc</button>
      <button id="dt-node" style="${o(St === "node")}">\u2295 Node</button>
      <button id="dt-area" style="${o(St === "area")}">\u25A2 Area</button>
      <span style="color:#666;margin:0 4px;">|</span>
      <span style="color:#888;font-size:10px;">Snap:</span>
      <button id="ds-node" style="${n(ct.node)}">Node</button>
      <button id="ds-grid" style="${n(ct.grid)}">Grid</button>
      <button id="ds-mid" style="${n(ct.midpoint)}">Mid</button>
      <button id="ds-track" style="${n(ct.track)}">Prolong</button>
      <span style="color:#666;margin:0 4px;">|</span>
      <span style="color:#888;font-size:10px;">Grid:</span>
      <input id="ds-gridsize" type="number" value="${Hn}" step="0.1" min="0.1" max="10" style="width:45px;background:#333;color:#fff;border:1px solid #555;padding:2px;font-size:10px;">
      <span style="color:#888;font-size:10px;">m</span>
      <span style="color:#666;margin:0 4px;">|</span>
      <button id="dt-undo" style="padding:3px 6px;background:#444;color:#ccc;border:1px solid #555;border-radius:3px;cursor:pointer;font-size:10px;" title="Ctrl+Z">\u21A9 Undo</button>
      <button id="dt-redo" style="padding:3px 6px;background:#444;color:#ccc;border:1px solid #555;border-radius:3px;cursor:pointer;font-size:10px;" title="Ctrl+Y">\u21AA Redo</button>
    `, document.body.appendChild(t), qo = t;
      const l = () => {
        const s = t.querySelector("#dt-line"), f = t.querySelector("#dt-arc"), a = t.querySelector("#dt-node"), i = t.querySelector("#dt-area");
        s && (s.style.cssText = o(St === "line")), f && (f.style.cssText = o(St === "arc")), a && (a.style.cssText = o(St === "node")), i && (i.style.cssText = o(St === "area"));
        const d = t.querySelector("#ds-node"), r = t.querySelector("#ds-grid"), c = t.querySelector("#ds-mid"), m = t.querySelector("#ds-track");
        d && (d.style.cssText = n(ct.node)), r && (r.style.cssText = n(ct.grid)), c && (c.style.cssText = n(ct.midpoint)), m && (m.style.cssText = n(ct.track));
      };
      t.querySelector("#dt-line").addEventListener("click", () => {
        St = "line", at = null, Bt = null, _t = [], l();
      }), t.querySelector("#dt-arc").addEventListener("click", () => {
        St = "arc", at = null, Bt = null, _t = [], l();
      }), t.querySelector("#dt-node").addEventListener("click", () => {
        St = "node", at = null, Bt = null, _t = [], l();
      }), t.querySelector("#dt-area").addEventListener("click", () => {
        St = "area", at = null, Bt = null, _t = [], console.log("Area mode: click vertices del poligono. Doble-click o click cerca del 1er punto para cerrar."), l();
      }), t.querySelector("#ds-node").addEventListener("click", () => {
        ct.node = !ct.node, l();
      }), t.querySelector("#ds-grid").addEventListener("click", () => {
        ct.grid = !ct.grid, l();
      }), t.querySelector("#ds-mid").addEventListener("click", () => {
        ct.midpoint = !ct.midpoint, l();
      }), t.querySelector("#ds-track").addEventListener("click", () => {
        ct.track = !ct.track, ct.track || Wn(), l();
      }), t.querySelector("#ds-gridsize").addEventListener("change", (s) => {
        ct.gridSize = parseFloat(s.target.value) || 0.5;
      }), t.querySelector("#dt-undo").addEventListener("click", () => Rs()), t.querySelector("#dt-redo").addEventListener("click", () => _s());
    }
    function Ns(t, o, n, l) {
      const s = l.getBoundingClientRect(), f = (t - s.left) / s.width * 2 - 1, a = -((o - s.top) / s.height) * 2 + 1, i = new la();
      i.setFromCamera(new ra(f, a), n);
      const d = e.nodes.val, r = e.elements.val, c = 0.12;
      if (ct.node) {
        let M = -1, y = 1 / 0;
        for (let p = 0; p < d.length; p++) {
          const g = d[p], I = new Ee(g[0], g[1], g[2]).project(n), k = Math.sqrt((I.x - f) ** 2 + (I.y - a) ** 2);
          k < c && k < y && (y = k, M = p);
        }
        if (M >= 0) return {
          nodeIdx: M,
          worldPos: new Ee(...d[M]),
          snapType: "node"
        };
      }
      if (ct.midpoint) {
        let M = 1 / 0, y = null;
        for (const p of r) {
          if (p.length !== 2) continue;
          const g = d[p[0]], I = d[p[1]], k = new Ee((g[0] + I[0]) / 2, (g[1] + I[1]) / 2, (g[2] + I[2]) / 2), $ = k.clone().project(n), T = Math.sqrt(($.x - f) ** 2 + ($.y - a) ** 2);
          T < c * 0.8 && T < M && (M = T, y = k);
        }
        if (y) return {
          nodeIdx: null,
          worldPos: y,
          snapType: "mid"
        };
      }
      if (ct.grid) {
        const M = new xo(new Ee(0, 0, 1), 0), y = new Ee();
        if (i.ray.intersectPlane(M, y)) {
          const p = ct.gridSize || Hn;
          return y.x = Math.round(y.x / p) * p, y.y = Math.round(y.y / p) * p, y.z = Math.round(y.z / p) * p, {
            nodeIdx: null,
            worldPos: y,
            snapType: "grid"
          };
        }
      }
      const m = new xo(new Ee(0, 0, 1), 0), w = new Ee();
      return i.ray.intersectPlane(m, w), {
        nodeIdx: null,
        worldPos: w,
        snapType: "free"
      };
    }
    function Bs(t) {
      const o = De();
      if (!o) return;
      const n = e.nodes.val;
      if (yt && (o.scene.remove(yt), yt.geometry.dispose(), yt.material.dispose(), yt = null), t.worldPos) {
        const l = t.snapType === "node" ? 16776960 : t.snapType === "mid" ? 16711935 : t.snapType === "grid" ? 65535 : 8947848, s = t.snapType === "node" ? 0.08 : 0.06, f = t.snapType === "mid" ? new tl(s * 2, s * 2, s * 2) : new ol(s, 12, 12), a = new nl({
          color: l,
          transparent: true,
          opacity: 0.8,
          depthTest: false
        });
        yt = new ba(f, a), yt.position.copy(t.worldPos), yt.renderOrder = 9999, o.scene.add(yt);
      }
      if (vt && (o.scene.remove(vt), vt.geometry.dispose(), vt.material.dispose(), vt = null), at !== null && t.worldPos) {
        const l = n[at], s = new Dt();
        if (St === "arc" && Bt !== null) {
          const a = n[Bt], i = Hs(new Ee(l[0], l[1], l[2]), new Ee(a[0], a[1], a[2]), t.worldPos, 16), d = [];
          for (let r = 0; r < i.length - 1; r++) d.push(i[r].x, i[r].y, i[r].z, i[r + 1].x, i[r + 1].y, i[r + 1].z);
          s.setAttribute("position", new Eo(d, 3));
        } else s.setAttribute("position", new Eo([
          l[0],
          l[1],
          l[2],
          t.worldPos.x,
          t.worldPos.y,
          t.worldPos.z
        ], 3));
        const f = new Do({
          color: 65280,
          linewidth: 2,
          depthTest: false
        });
        vt = new ko(s, f), St === "arc" && Bt !== null && (vt = new Ho(s, f)), vt.renderOrder = 9999, o.scene.add(vt);
      }
      o.render();
    }
    function Hs(t, o, n, l) {
      const s = [];
      for (let f = 0; f <= l; f++) {
        const a = f / l, i = o.clone().multiplyScalar(2).sub(t.clone().multiplyScalar(0.5)).sub(n.clone().multiplyScalar(0.5)), d = (1 - a) * (1 - a), r = 2 * (1 - a) * a, c = a * a;
        s.push(new Ee(d * t.x + r * i.x + c * n.x, d * t.y + r * i.y + c * n.y, d * t.z + r * i.z + c * n.z));
      }
      return s;
    }
    function Yn(t) {
      if (t.nodeIdx !== null) return t.nodeIdx;
      if (!t.worldPos) return -1;
      const o = e.nodes.val, n = 1e-3;
      for (let s = 0; s < o.length; s++) if (Math.abs(o[s][0] - t.worldPos.x) < n && Math.abs(o[s][1] - t.worldPos.y) < n && Math.abs(o[s][2] - t.worldPos.z) < n) return s;
      _o();
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
      if (St === "node") {
        if (!t.worldPos) return;
        _o();
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
      if (St === "line") {
        const o = Yn(t);
        if (o < 0) return;
        if (at === null) {
          at = o;
          return;
        }
        if (o === at) return;
        _o();
        const n = [
          ...e.elements.val
        ];
        n.some((s) => s.length === 2 && (s[0] === at && s[1] === o || s[1] === at && s[0] === o)) || (n.push([
          at,
          o
        ]), e.elements.val = n, uo(), e.elementInputs.val = {
          ...e.elementInputs.val
        }), at = o;
        return;
      }
      if (St === "arc") {
        const o = Yn(t);
        if (o < 0) return;
        if (at === null) {
          at = o;
          return;
        }
        if (Bt === null) {
          if (o === at) return;
          Bt = o;
          return;
        }
        if (o === at || o === Bt) return;
        const n = e.nodes.val, l = new Ee(...n[at]), s = new Ee(...n[Bt]), f = new Ee(...n[o]), a = Math.max(4, Math.round(((_a2 = U.nSubViga) == null ? void 0 : _a2.val) ?? 8)), i = Hs(l, s, f, a);
        _o();
        const d = [
          ...e.nodes.val
        ], r = [
          ...e.elements.val
        ];
        let c = at;
        for (let m = 1; m < i.length; m++) {
          let w;
          if (m === i.length - 1) w = o;
          else {
            const M = i[m];
            w = d.length, d.push([
              M.x,
              M.y,
              M.z
            ]);
          }
          r.push([
            c,
            w
          ]), c = w;
        }
        e.nodes.val = d, e.elements.val = r, uo(), e.elementInputs.val = {
          ...e.elementInputs.val
        }, at = o, Bt = null;
        return;
      }
      if (St === "area") {
        const o = Yn(t);
        if (o < 0) return;
        if (_t.length >= 3 && o === _t[0]) {
          _o();
          const n = [
            ...e.nodes.val
          ], l = [
            ...e.elements.val
          ], s = _t.map((f) => n[f]);
          try {
            const f = lo({
              points: s,
              polygon: Array.from({
                length: s.length
              }, (i, d) => d),
              maxMeshSize: Hn || 0.5
            }), a = [];
            for (const i of f.nodes) {
              let d = -1;
              for (let r = 0; r < n.length; r++) {
                const c = Math.abs(n[r][0] - i[0]), m = Math.abs(n[r][1] - i[1]), w = Math.abs(n[r][2] - i[2]);
                if (c < 0.01 && m < 0.01 && w < 0.01) {
                  d = r;
                  break;
                }
              }
              d >= 0 ? a.push(d) : (a.push(n.length), n.push([
                i[0],
                i[1],
                i[2]
              ]));
            }
            for (const i of f.elements) l.push([
              a[i[0]],
              a[i[1]],
              a[i[2]]
            ]);
            e.nodes.val = n, e.elements.val = l, uo(), console.log(`Area: ${f.elements.length} triangulos creados desde ${_t.length} vertices`);
          } catch (f) {
            console.error("Area mesh failed:", f.message);
          }
          _t = [];
          return;
        }
        if (_t.push(o), console.log(`Area vertex ${_t.length}: node ${o}`), _t.length >= 2) {
          const n = _t[_t.length - 2], l = e.nodes.val, s = De();
          if (s) {
            const f = new Dt().setFromPoints([
              new Ee(...l[n]),
              new Ee(...l[o])
            ]), a = new Ho(f, new Do({
              color: 65280,
              linewidth: 2
            }));
            a.name = "area-preview", s.scene.add(a), s.render();
          }
        }
        return;
      }
    }
    function Ds(t) {
      const o = De();
      if (!o) return;
      At && (o.scene.remove(At), At.geometry.dispose(), At.material.dispose());
      const n = e.nodes.val, l = e.elements.val[t];
      if (!l) return;
      const s = [];
      for (let a = 0; a < l.length; a++) {
        const i = n[l[a]], d = n[l[(a + 1) % l.length]];
        s.push(i[0], i[1], i[2], d[0], d[1], d[2]);
      }
      const f = new Dt();
      f.setAttribute("position", new Eo(s, 3)), At = new Ho(f, new Do({
        color: 16776960,
        linewidth: 3,
        depthTest: false
      })), At.renderOrder = 9999, o.scene.add(At), o.render();
    }
    function Vn(t) {
      const o = De();
      if (!o) return -1;
      const n = o.renderer.domElement.getBoundingClientRect(), l = new ra((t.clientX - n.left) / n.width * 2 - 1, -((t.clientY - n.top) / n.height) * 2 + 1), s = new la();
      s.setFromCamera(l, o.controls.object), s.params.Line = {
        threshold: 0.5
      };
      const f = e.nodes.val, a = e.elements.val;
      if (f.length === 0 || a.length === 0) return -1;
      let i = 1 / 0, d = -1;
      const r = s.ray;
      for (let m = 0; m < a.length; m++) {
        const w = a[m];
        if (w.length === 2) {
          const M = new Ee(...f[w[0]]), y = new Ee(...f[w[1]]), p = new sl(M, y), g = new Ee(), I = new Ee();
          r.closestPointToPoint(p.getCenter(new Ee()), g), p.closestPointToPoint(g, true, I);
          const k = g.distanceTo(I);
          k < i && (i = k, d = m);
        } else if (w.length === 3) {
          const M = new Ee(...f[w[0]]), y = new Ee(...f[w[1]]), p = new Ee(...f[w[2]]), g = new Ee();
          if (r.intersectTriangle(M, y, p, false, g)) {
            const k = r.origin.distanceTo(g);
            k < i && (i = k, d = m);
          } else {
            const k = M.add(y).add(p).divideScalar(3), $ = new Ee();
            r.closestPointToPoint(k, $);
            const T = $.distanceTo(k);
            T < i && (i = T, d = m);
          }
        } else if (w.length === 4) {
          const M = new Ee(...f[w[0]]), y = new Ee(...f[w[1]]), p = new Ee(...f[w[2]]), g = new Ee(...f[w[3]]), I = new Ee();
          let k = r.intersectTriangle(M, y, p, false, I);
          if (k) {
            const $ = r.origin.distanceTo(I);
            $ < i && (i = $, d = m);
          }
          if (k = r.intersectTriangle(M, p, g, false, I), k) {
            const $ = r.origin.distanceTo(I);
            $ < i && (i = $, d = m);
          }
        }
      }
      const { extent: c } = fo();
      return i < c * 0.1 ? d : -1;
    }
    function pe(t, o = 4) {
      return Math.abs(t) < 1e-10 ? "0" : Math.abs(t) >= 1e6 ? t.toExponential(2) : Math.abs(t) >= 100 ? t.toFixed(1) : t.toFixed(o);
    }
    function Gn(t, o, n = 12) {
      var _a2;
      const l = Math.min(t.length, n), s = Math.min(((_a2 = t[0]) == null ? void 0 : _a2.length) || 0, n);
      let f = "<table>";
      if (o) {
        f += '<tr><td class="header"></td>';
        for (let a = 0; a < s; a++) f += `<td class="header">${o[a] || a}</td>`;
        f += "</tr>";
      }
      for (let a = 0; a < l; a++) {
        f += "<tr>", o && (f += `<td class="header">${o[a] || a}</td>`);
        for (let i = 0; i < s; i++) {
          const d = t[a][i], r = Math.abs(d) > 1e-10 ? "nonzero" : "";
          f += `<td class="${r}">${pe(d, 2)}</td>`;
        }
        f += "</tr>";
      }
      return f += "</table>", f;
    }
    function Ie(t, o) {
      return `<span class="frac"><span class="frac-num">${t}</span><span class="frac-den">${o}</span></span>`;
    }
    function C(t, o, n) {
      let l = `<span class="var">${t}</span>`;
      return o && (l += `<sub>${o}</sub>`), l;
    }
    function _a(t, o, n, l, s, f, a) {
      const i = 0.8333333333333334 * o, d = 5 / 6 * o, r = d > 0 && s > 0 ? 12 * t * n / (s * d * a ** 2) : 0, c = i > 0 && s > 0 ? 12 * t * l / (s * i * a ** 2) : 0, m = t * o / a, w = s * f / a, M = 12 * t * n / a ** 3 / (1 + r), y = 6 * t * n / a ** 2 / (1 + r), p = 4 * t * n / a * (1 + r / 4) / (1 + r), g = 2 * t * n / a * (1 - r / 2) / (1 + r), I = r > 1e-10 || c > 1e-10;
      return `<div class="fem-eq eq-box">
      <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">Formulaci\xF3n: ${I ? "Timoshenko (con deformaci\xF3n por cortante)" : "Euler-Bernoulli"}</strong></div>
      ${I ? `
      <div style="text-align:left;margin-bottom:6px;color:var(--fem-eq-sub)">
        ${C("A", "s")} = ${Ie("5", "6")} \xB7 ${C("A")} = <span class="highlight">${pe(i)}</span>
        &nbsp;&nbsp; \u03C6<sub>z</sub> = ${Ie("12\xB7" + C("E") + "\xB7" + C("I", "z"), C("G") + "\xB7" + C("A", "s") + "\xB7" + C("L") + "\xB2")} = <span class="highlight">${pe(r)}</span>
        &nbsp;&nbsp; \u03C6<sub>y</sub> = <span class="highlight">${pe(c)}</span>
      </div>
      <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">Coeficientes Timoshenko (Dr. Aguiar):</strong></div>
      <div>${C("t", "z")} = ${Ie("12\xB7" + C("E") + "\xB7" + C("I", "z"), C("L") + "\xB3\xB7(1+\u03C6<sub>z</sub>)")} = <span class="highlight">${pe(M)}</span> &nbsp;(cortante)</div>
      <div>${C("b", "z")} = ${Ie("6\xB7" + C("E") + "\xB7" + C("I", "z"), C("L") + "\xB2\xB7(1+\u03C6<sub>z</sub>)")} = <span class="highlight">${pe(y)}</span> &nbsp;(acoplamiento)</div>
      <div>${C("k", "z")} = ${Ie("4\xB7" + C("E") + "\xB7" + C("I", "z") + "\xB7(1+\u03C6/4)", C("L") + "\xB7(1+\u03C6<sub>z</sub>)")} = <span class="highlight">${pe(p)}</span> &nbsp;(flexi\xF3n diagonal)</div>
      <div>${C("a", "z")} = ${Ie("2\xB7" + C("E") + "\xB7" + C("I", "z") + "\xB7(1\u2212\u03C6/2)", C("L") + "\xB7(1+\u03C6<sub>z</sub>)")} = <span class="highlight">${pe(g)}</span> &nbsp;(flexi\xF3n off-diag)</div>
      ` : `
      <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">Coeficientes de rigidez:</strong></div>
      `}
      <div>${Ie(C("E") + "\xB7" + C("A"), C("L"))} = <span class="highlight">${pe(m)}</span> &nbsp;(axial)</div>
      <div>${Ie(C("G") + "\xB7" + C("J"), C("L"))} = <span class="highlight">${pe(w)}</span> &nbsp;(torsi\xF3n)</div>
      ${I ? "" : `
      <div>${Ie("12\xB7" + C("E") + "\xB7" + C("I", "z"), C("L") + "\xB3")} = <span class="highlight">${pe(M)}</span></div>
      <div>${Ie("4\xB7" + C("E") + "\xB7" + C("I", "z"), C("L"))} = <span class="highlight">${pe(p)}</span></div>
      `}
    </div>
    <div class="fem-eq">
      ${C("k", "local")} = <span class="mat-sym" style="grid-template-columns:repeat(4,auto)">
        <span class="cell">${Ie(C("EA"), C("L"))}</span><span class="cell">0</span><span class="cell dots">\u22EF</span><span class="cell">${Ie("\u2212" + C("EA"), C("L"))}</span>
        <span class="cell">0</span><span class="cell">${C("t", "z")}</span><span class="cell dots">\u22EF</span><span class="cell">${C("b", "z")}</span>
        <span class="cell dots">\u22EE</span><span class="cell dots">\u22EE</span><span class="cell dots">\u22F1</span><span class="cell dots">\u22EE</span>
        <span class="cell">0</span><span class="cell">${C("b", "z")}</span><span class="cell dots">\u22EF</span><span class="cell">${C("k", "z")}</span>
      </span>
      <sub style="color:var(--fem-label)">12\xD712 ${I ? "(Timoshenko)" : "(Euler-Bernoulli)"}</sub>
    </div>
    ${I ? `<div class="fem-eq eq-box" style="margin-top:6px">
      <div style="text-align:left"><strong style="color:var(--fem-section-title)">Matrices de rigidez (Dr. Aguiar, Fig 7.9):</strong></div>
      <div style="margin-top:4px">${C("K", "f")} = ${C("B", "f")}<sup>T</sup> \xB7 ${C("E")}\xB7${C("I")} \xB7 ${C("B", "f")} \xB7 ${C("J")} &nbsp;<sub style="color:var(--fem-label)">(flexi\xF3n, 1 pt Gauss)</sub></div>
      <div>${C("K", "c")} = ${C("B", "c")}<sup>T</sup> \xB7 ${C("G")}\xB7${C("A'")} \xB7 ${C("B", "c")} \xB7 ${C("J")} &nbsp;<sub style="color:var(--fem-label)">(cortante, 2 pts Gauss)</sub></div>
      <div>${C("K", "total")} = ${C("K", "f")} + ${C("K", "c")}</div>
    </div>` : ""}`;
    }
    function Oa(t) {
      if (t.length === 2) {
        const n = ro(t[1], t[0]), l = Lo(n), s = n[0] / l, f = n[1] / l, a = n[2] / l;
        return `<div class="fem-eq eq-box">
        <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">Cosenos directores:</strong></div>
        <div>${C("l")} = cos(\u03B1) = ${Ie("\u0394x", C("L"))} = ${Ie(pe(n[0]), pe(l))} = <span class="highlight">${pe(s)}</span></div>
        <div>${C("m")} = cos(\u03B2) = ${Ie("\u0394y", C("L"))} = ${Ie(pe(n[1]), pe(l))} = <span class="highlight">${pe(f)}</span></div>
        <div>${C("n")} = cos(\u03B3) = ${Ie("\u0394z", C("L"))} = ${Ie(pe(n[2]), pe(l))} = <span class="highlight">${pe(a)}</span></div>
      </div>
      <div class="fem-eq">
        \u03BB = <span class="mat-sym" style="grid-template-columns:repeat(3,auto)">
          <span class="cell">${C("l")}</span><span class="cell">${C("m")}</span><span class="cell">${C("n")}</span>
          <span class="cell">${Ie("\u2212" + C("m"), C("D"))}</span><span class="cell">${Ie(C("l"), C("D"))}</span><span class="cell">0</span>
          <span class="cell">${Ie("\u2212" + C("l") + "\xB7" + C("n"), C("D"))}</span><span class="cell">${Ie("\u2212" + C("m") + "\xB7" + C("n"), C("D"))}</span><span class="cell">${C("D")}</span>
        </span>
        &nbsp; donde ${C("D")} = \u221A(${C("l")}\xB2 + ${C("m")}\xB2)
      </div>
      <div class="fem-eq">
        ${C("T")} = ${C("I", "4")} \u2297 \u03BB &nbsp; <sub style="color:var(--fem-label)">(Kronecker, 12\xD712)</sub>
      </div>`;
      }
      return `<div class="fem-eq">${C("T")} \u2014 sistema local del tri\xE1ngulo (normal \xD7 lados) <sub>18\xD718</sub></div>`;
    }
    function Na() {
      return `<div class="fem-eq">
      ${C("K", "global")} = ${C("T")}<sup>T</sup> \xB7 ${C("k", "local")} \xB7 ${C("T")}
    </div>`;
    }
    function Ba(t) {
      const o = t.map((n) => `6\xB7${n} = ${6 * n}`).join(", ");
      return `<div class="fem-eq eq-box">
      <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">Ensamblaje en K global:</strong></div>
      <div>${C("K", "global")}[${C("i")}, ${C("j")}] += ${C("K", "elem")}[${C("i")}, ${C("j")}]</div>
      <div style="margin-top:4px">donde ${C("i")}, ${C("j")} \u2208 {${o}} + (0..5)</div>
    </div>`;
    }
    function Ha(t) {
      return t ? `<div class="fem-eq eq-box">
        <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">Recuperaci\xF3n de fuerzas:</strong></div>
        <div>${C("u", "local")} = ${C("T")} \xB7 ${C("u", "global")}</div>
        <div>${C("f", "local")} = ${C("k", "local")} \xB7 ${C("u", "local")}</div>
        <div style="margin-top:4px;color:var(--fem-eq-sub)">
          ${C("f")} = [${C("N", "i")}, ${C("V", "y,i")}, ${C("V", "z,i")}, ${C("M", "x,i")}, ${C("M", "y,i")}, ${C("M", "z,i")}, ${C("N", "j")}, \u2026]
        </div>
      </div>` : `<div class="fem-eq eq-box">
      <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">Esfuerzos en placa:</strong></div>
      <div>\u03C3 = ${Ie("1", "2" + C("A"))} \xB7 ${C("D")} \xB7 ${C("B")} \xB7 ${C("u")}</div>
      <div>${C("N", "xx")} = \u03C3<sub>xx</sub> \xB7 ${C("t")} &nbsp;&nbsp; ${C("M", "xx")} = \u03C3<sub>xx</sub> \xB7 ${Ie(C("t") + "\xB3", "12")}</div>
    </div>`;
    }
    function Xn(t, o) {
      const n = t.length;
      let l = '<table><tr><td class="hdr"></td>';
      for (let s = 0; s < n; s++) l += `<td class="hdr">${o[s] || s}</td>`;
      l += "</tr>";
      for (let s = 0; s < n; s++) {
        l += `<tr><td class="hdr">${o[s] || s}</td>`;
        for (let f = 0; f < n; f++) {
          const a = t[s][f], i = (s === f ? "diag " : "") + (Math.abs(a) > 1e-10 ? "nz" : "");
          l += `<td class="${i}">${pe(a, 2)}</td>`;
        }
        l += "</tr>";
      }
      return l += "</table>", l;
    }
    function js() {
      const t = "0", o = Ie(C("EA"), C("L")), n = Ie("\u2212" + C("EA"), C("L")), l = Ie("12" + C("EI", "z"), C("L") + "\xB3"), s = Ie("\u221212" + C("EI", "z"), C("L") + "\xB3"), f = Ie("12" + C("EI", "y"), C("L") + "\xB3"), a = Ie("\u221212" + C("EI", "y"), C("L") + "\xB3"), i = Ie("6" + C("EI", "z"), C("L") + "\xB2"), d = Ie("\u22126" + C("EI", "z"), C("L") + "\xB2"), r = Ie("6" + C("EI", "y"), C("L") + "\xB2"), c = Ie("\u22126" + C("EI", "y"), C("L") + "\xB2"), m = Ie(C("GJ"), C("L")), w = Ie("\u2212" + C("GJ"), C("L")), M = Ie("4" + C("EI", "z"), C("L")), y = Ie("2" + C("EI", "z"), C("L")), p = Ie("4" + C("EI", "y"), C("L")), g = Ie("2" + C("EI", "y"), C("L")), I = '<span style="color:var(--fem-eq-dots);font-style:italic">sym</span>', k = [
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
      ], T = [
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
          f,
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
          p,
          t,
          t,
          t,
          r,
          t,
          g,
          t
        ],
        [
          t,
          i,
          t,
          t,
          t,
          M,
          t,
          d,
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
          d,
          t,
          l,
          t,
          t,
          t,
          d
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
          f,
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
          g,
          t,
          t,
          t,
          r,
          t,
          p,
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
          d,
          t,
          t,
          t,
          M
        ]
      ];
      let O = '<div style="margin-bottom:8px;color:var(--fem-eq-sub);font-size:11px;font-family:monospace">Eq. 6.1 \u2014 Matriz de rigidez de elemento de p\xF3rtico espacial</div>';
      O += '<table><tr><td class="hdr"></td>';
      for (const h of $) O += `<td class="hdr">${h}</td>`;
      O += "</tr>";
      for (let h = 0; h < 12; h++) {
        O += `<tr><td class="hdr">${k[h]}</td>`;
        for (let u = 0; u < 12; u++) if (u < h) O += `<td style="color:var(--fem-border-cell)">${u === 0 && h > 0 ? I : ""}</td>`;
        else {
          const E = T[h][u], P = (h === u ? "diag " : "") + (E !== "0" ? "nz" : "");
          O += `<td class="${P}">${E}</td>`;
        }
        O += "</tr>";
      }
      return O += "</table>", O;
    }
    function Da(t, o, n, l, s, f, a) {
      return `<div class="coeff-grid">${[
        {
          name: `${Ie(C("E") + "\xB7" + C("A"), C("L"))}`,
          calc: `${Ie(pe(t) + "\xD7" + pe(o), pe(a))}`,
          val: t * o / a,
          label: "Axial"
        },
        {
          name: `${Ie("12\xB7" + C("E") + "\xB7" + C("I", "z"), C("L") + "\xB3")}`,
          calc: `${Ie("12\xD7" + pe(t) + "\xD7" + pe(n), pe(a) + "\xB3")}`,
          val: 12 * t * n / a ** 3,
          label: "Corte Y"
        },
        {
          name: `${Ie("6\xB7" + C("E") + "\xB7" + C("I", "z"), C("L") + "\xB2")}`,
          calc: `${Ie("6\xD7" + pe(t) + "\xD7" + pe(n), pe(a) + "\xB2")}`,
          val: 6 * t * n / a ** 2,
          label: "Corte-Momento Z"
        },
        {
          name: `${Ie("12\xB7" + C("E") + "\xB7" + C("I", "y"), C("L") + "\xB3")}`,
          calc: `${Ie("12\xD7" + pe(t) + "\xD7" + pe(l), pe(a) + "\xB3")}`,
          val: 12 * t * l / a ** 3,
          label: "Corte Z"
        },
        {
          name: `${Ie("6\xB7" + C("E") + "\xB7" + C("I", "y"), C("L") + "\xB2")}`,
          calc: `${Ie("6\xD7" + pe(t) + "\xD7" + pe(l), pe(a) + "\xB2")}`,
          val: 6 * t * l / a ** 2,
          label: "Corte-Momento Y"
        },
        {
          name: `${Ie(C("G") + "\xB7" + C("J"), C("L"))}`,
          calc: `${Ie(pe(s) + "\xD7" + pe(f), pe(a))}`,
          val: s * f / a,
          label: "Torsi\xF3n"
        },
        {
          name: `${Ie("4\xB7" + C("E") + "\xB7" + C("I", "z"), C("L"))}`,
          calc: `${Ie("4\xD7" + pe(t) + "\xD7" + pe(n), pe(a))}`,
          val: 4 * t * n / a,
          label: "Flexi\xF3n Z (4EI/L)"
        },
        {
          name: `${Ie("2\xB7" + C("E") + "\xB7" + C("I", "z"), C("L"))}`,
          calc: `${Ie("2\xD7" + pe(t) + "\xD7" + pe(n), pe(a))}`,
          val: 2 * t * n / a,
          label: "Flexi\xF3n Z (2EI/L)"
        },
        {
          name: `${Ie("4\xB7" + C("E") + "\xB7" + C("I", "y"), C("L"))}`,
          calc: `${Ie("4\xD7" + pe(t) + "\xD7" + pe(l), pe(a))}`,
          val: 4 * t * l / a,
          label: "Flexi\xF3n Y (4EI/L)"
        },
        {
          name: `${Ie("2\xB7" + C("E") + "\xB7" + C("I", "y"), C("L"))}`,
          calc: `${Ie("2\xD7" + pe(t) + "\xD7" + pe(l), pe(a))}`,
          val: 2 * t * l / a,
          label: "Flexi\xF3n Y (2EI/L)"
        }
      ].map((d) => `<div class="coeff-item"><div style="color:var(--fem-eq-sub);font-size:10px;font-family:monospace;margin-bottom:2px">${d.label}</div>${d.name} = ${d.calc} = <span class="highlight">${pe(d.val)}</span></div>`).join("")}</div>`;
    }
    function Jn(t, o, n, l) {
      var _a2;
      const s = document.querySelector(".fem-full-overlay");
      s && s.remove();
      const f = document.createElement("div");
      f.className = "fem-full-overlay", f.innerHTML = `
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
    `, document.body.appendChild(f), (_a2 = f.querySelector("#fem-full-close")) == null ? void 0 : _a2.addEventListener("click", () => f.remove()), f.addEventListener("click", (a) => {
        a.target === f && f.remove();
      });
    }
    function Ws(t) {
      var _a2, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l2, _m, _n2, _o2, _p, _q, _r, _s2, _t2, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I, _J, _K, _L, _M, _N, _O;
      Ot && Ot.remove();
      const o = e.nodes.val, n = e.elements.val, l = n[t], s = l.map((h) => o[h]), f = l.length === 2, a = ((_a2 = e.elementInputs) == null ? void 0 : _a2.val) || {}, i = (_b = e.deformOutputs) == null ? void 0 : _b.val, d = (_c = e.analyzeOutputs) == null ? void 0 : _c.val;
      if (f) {
        const h = Lo(ro(s[1], s[0])), u = ((_d = a.elasticities) == null ? void 0 : _d.get(t)) ?? 0, E = ((_e2 = a.areas) == null ? void 0 : _e2.get(t)) ?? 0, P = ((_f = a.momentsOfInertiaZ) == null ? void 0 : _f.get(t)) ?? 0, R = ((_g = a.momentsOfInertiaY) == null ? void 0 : _g.get(t)) ?? 0, H = ((_h = a.shearModuli) == null ? void 0 : _h.get(t)) ?? 0, x = ((_i = a.torsionalConstants) == null ? void 0 : _i.get(t)) ?? 0, S = ((_j = a.momentReleases) == null ? void 0 : _j.get(t)) || [], v = ((_k = a.partialFixitySprings) == null ? void 0 : _k.get(t)) || [], L = [
          "P (Axial)",
          "V2 (Corte)",
          "V3 (Corte)",
          "T (Torsi\xF3n)",
          "M22 (Momento)",
          "M33 (Momento)"
        ];
        let N = "";
        for (let D = 0; D < 6; D++) {
          const V = D, j = D + 6, B = (S.length >= 12 ? S[V] : D >= 3 && S.length >= 6 && S[D - 3]) ? "checked" : "", te = (S.length >= 12 ? S[j] : D >= 3 && S.length >= 6 && S[D]) ? "checked" : "", oe = v.length >= 12 && v[V] > 0 ? v[V].toFixed(1) : "", de = v.length >= 12 && v[j] > 0 ? v[j].toFixed(1) : "";
          N += `<tr>
          <td style="text-align:left;color:var(--fem-key)">${L[D]}</td>
          <td style="text-align:center"><input type="checkbox" data-rel="${V}" ${B}></td>
          <td style="text-align:center"><input type="checkbox" data-rel="${j}" ${te}></td>
          <td><input type="number" data-spr="${V}" value="${oe}" placeholder="0" style="width:50px;background:var(--fem-bg);color:var(--fem-val);border:1px solid var(--fem-border);font-size:10px;text-align:right"></td>
          <td><input type="number" data-spr="${j}" value="${de}" placeholder="0" style="width:50px;background:var(--fem-bg);color:var(--fem-val);border:1px solid var(--fem-border);font-size:10px;text-align:right"></td>
        </tr>`;
        }
        `${l[0]}${l[1]}${pe(h)}${pe(u)}${pe(E)}${pe(P)}${pe(R)}${pe(H)}${pe(x)}${N}`;
      } else {
        const h = ((_l2 = a.elasticities) == null ? void 0 : _l2.get(t)) ?? 0, u = ((_m = a.thicknesses) == null ? void 0 : _m.get(t)) ?? 0, E = ((_n2 = a.poissonsRatios) == null ? void 0 : _n2.get(t)) ?? 0, P = h / (2 * (1 + E)), R = l.length === 4, H = h / (1 - E * E);
        `${l.length}${l.join(", ")}${pe(h)}${pe(P)}${pe(u)}${pe(E)}`, R && (w = `<div class="fem-eq eq-box">
          <div style="text-align:left;margin-bottom:6px"><strong style="color:var(--fem-section-title)">Formulaci\xF3n Q4: Membrana + Mindlin-Reissner + Drilling</strong></div>

          <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">1. Matriz constitutiva (esfuerzo plano):</strong></div>
          <div>${C("D")} = ${Ie(C("E"), "1\u2212\u03BD\xB2")} \xB7 <span class="mat-sym" style="grid-template-columns:repeat(3,auto)">
            <span class="cell">1</span><span class="cell">\u03BD</span><span class="cell">0</span>
            <span class="cell">\u03BD</span><span class="cell">1</span><span class="cell">0</span>
            <span class="cell">0</span><span class="cell">0</span><span class="cell">${Ie("1\u2212\u03BD", "2")}</span>
          </span> = ${Ie(pe(h), "1\u2212" + pe(E) + "\xB2")} = <span class="highlight">${pe(H)}</span></div>

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
          <div>${C("B\u0304", "I")} = ${C("B", "I")} + ${C("B", "IC")} &nbsp; donde &nbsp; ${C("B", "IC")} = \u2212${Ie("1", "V")}\u222B${C("B", "I")} dV</div>
          <div style="color:var(--fem-eq-sub)">Jacobiano del centro para modos incompatibles \u2192 pasa patch test</div>

          <div style="text-align:left;margin-top:8px;margin-bottom:4px"><strong style="color:var(--fem-section-title)">8. Drilling DOF (Hughes-Brezzi 1989):</strong></div>
          <div>${C("K", "drill")} = \u03B1\xB7${C("G")}\xB7${C("t")} \xB7 \u222B${C("B", "d")}<sup>T</sup>\xB7${C("B", "d")} dA &nbsp; donde \u03B1 = 0.5</div>
          <div>${C("B", "d")}[i] = \u03B8<sub>z,i</sub> \u2212 \xBD\xB7(\u2202v/\u2202x \u2212 \u2202u/\u2202y) &nbsp;<sub style="color:var(--fem-label)">(rotaci\xF3n antisim\xE9trica)</sub></div>

          <div style="text-align:left;margin-top:8px;margin-bottom:4px"><strong style="color:var(--fem-section-title)">9. Placa Mindlin-Reissner + MITC4:</strong></div>
          <div>${C("D", "b")} = ${Ie(C("E") + "\xB7" + C("t") + "\xB3", "12\xB7(1\u2212\u03BD\xB2)")} = <span class="highlight">${pe(h * u ** 3 / (12 * (1 - E ** 2)))}</span></div>
          <div>${C("D", "s")} = \u03BA\xB7${C("G")}\xB7${C("t")} = <span class="highlight">${pe(5 / 6 * P * u)}</span> &nbsp; <sub style="color:var(--fem-label)">\u03BA = 5/6</sub></div>
          <div style="color:var(--fem-eq-sub)">MITC4: interpolaci\xF3n de cortante en puntos de atado (tying points)</div>

          <div style="text-align:left;margin-top:8px;margin-bottom:4px"><strong style="color:var(--fem-section-title)">10. Ensamblaje final:</strong></div>
          <div>${C("K", "24\xD724")} = ${C("K", "membrana")}(8\xD78) + ${C("K", "flexi\xF3n")}(12\xD712) + ${C("K", "drilling")}(12\xD712)</div>
          <div style="color:var(--fem-eq-sub)">DOFs por nodo: [u, v, w, \u03B8x, \u03B8y, \u03B8z]</div>
        </div>`);
      }
      let r = "", c = "", m = "", w = "", M = "", y = "", p = "", g = "", I = null, k = null, $ = null, T = [];
      try {
        if (I = $n(s, a, t), k = wn(s), $ = Xt(ds(k), Xt(I, k)), T = f ? [
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
        ], f) {
          const P = Lo(ro(s[1], s[0])), R = ((_o2 = a.elasticities) == null ? void 0 : _o2.get(t)) ?? 0, H = ((_p = a.areas) == null ? void 0 : _p.get(t)) ?? 0, x = ((_q = a.momentsOfInertiaZ) == null ? void 0 : _q.get(t)) ?? 0, S = ((_r = a.momentsOfInertiaY) == null ? void 0 : _r.get(t)) ?? 0, v = ((_s2 = a.shearModuli) == null ? void 0 : _s2.get(t)) ?? 0, L = ((_t2 = a.torsionalConstants) == null ? void 0 : _t2.get(t)) ?? 0;
          w = _a(R, H, x, S, v, L, P);
        }
        M = Oa(s), y = Na(), p = Ba(l), g = Ha(f);
        const h = '<button class="fem-expand-btn" data-full="kLocal">\u26F6 Ver completa</button>', u = '<button class="fem-expand-btn" data-full="T">\u26F6 Ver completa</button>', E = '<button class="fem-expand-btn" data-full="kGlobal">\u26F6 Ver completa</button>';
        r = `<div class="matrix-label">k_local (${I.length}\xD7${I.length}) ${h}</div>${Gn(I, T)}`, c = `<div class="matrix-label">T \u2014 Transformaci\xF3n (${k.length}\xD7${k.length}) ${u}</div>${Gn(k, T)}`, m = `<div class="matrix-label">K_global = T^T \xB7 k \xB7 T ${E}</div>${Gn($, T)}`;
      } catch (h) {
        r = `<div style="color:red">Error: ${h.message}</div>`;
      }
      if (i == null ? void 0 : i.deformations) {
        const h = [
          "ux",
          "uy",
          "uz",
          "\u03B8x",
          "\u03B8y",
          "\u03B8z"
        ];
        l.map((u, E) => {
          var _a3;
          const P = ((_a3 = i.deformations) == null ? void 0 : _a3.get(u)) || [
            0,
            0,
            0,
            0,
            0,
            0
          ], R = h.map((H, x) => `<span class="prop-key">${H}</span>: <span class="${Math.abs(P[x]) > 1e-10 ? "result-val" : ""}">${pe(P[x])}</span>`).join(" &nbsp;");
          return `<div style="margin-bottom:2px"><strong>Nodo ${u}:</strong> ${R}</div>`;
        }).join("");
      }
      if (d && f && (i == null ? void 0 : i.deformations) && I && k) {
        const h = (_u = d.normals) == null ? void 0 : _u.get(t), u = (_v = d.shearsY) == null ? void 0 : _v.get(t), E = (_w = d.shearsZ) == null ? void 0 : _w.get(t), P = (_x = d.torsions) == null ? void 0 : _x.get(t), R = (_y = d.bendingsY) == null ? void 0 : _y.get(t), H = (_z = d.bendingsZ) == null ? void 0 : _z.get(t), x = [
          "ux",
          "uy",
          "uz",
          "\u03B8x",
          "\u03B8y",
          "\u03B8z"
        ], S = [];
        for (const j of l) {
          const B = ((_A = i.deformations) == null ? void 0 : _A.get(j)) || [
            0,
            0,
            0,
            0,
            0,
            0
          ];
          S.push(...B);
        }
        let v = [];
        try {
          v = Xt(k, S);
        } catch {
          v = new Array(12).fill(0);
        }
        let L = [];
        try {
          L = Xt(I, v);
        } catch {
          L = new Array(12).fill(0);
        }
        const N = (j, B) => j.map((te, oe) => `<span style="color:${Math.abs(te) > 1e-10 ? "var(--fem-nonzero)" : "var(--fem-eq-dots)"}">${B[oe % 6]}=${pe(te)}</span>`).join(", "), V = [
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
        ].map((j, B) => `${j}${B < 6 ? "\u1D62" : "\u2C7C"}`);
        `${C("u", "global")}${l.map((j, B) => `<span style="color:var(--fem-label)">nodo ${j}:</span> ${x.map((te, oe) => `<span style="color:${Math.abs(S[B * 6 + oe]) > 1e-10 ? "var(--fem-eq-var)" : "var(--fem-eq-dots)"}">${pe(S[B * 6 + oe])}</span>`).join(", ")}`).join(" | ")}${C("u", "local")}${C("T")}${C("u", "global")}${C("u", "local")}${N(v, [
          ...x,
          ...x
        ])}${C("f", "local")}${C("k", "local")}${C("u", "local")}${C("f", "local")}${L.map((j, B) => `<span style="color:${Math.abs(j) > 1e-10 ? "var(--fem-nonzero)" : "var(--fem-eq-dots)"}">${V[B]}=${pe(j)}</span>`).join(", ")}${C("P", "1")}${C("N", "i")}${pe(L[0])}${C("P", "7")}${C("N", "j")}${pe(L[6])}${C("P", "2")}${C("V", "y,i")}${pe(L[1])}${C("P", "8")}${C("V", "y,j")}${pe(L[7])}${C("P", "3")}${C("V", "z,i")}${pe(L[2])}${C("P", "9")}${C("V", "z,j")}${pe(L[8])}${C("P", "4")}${C("M", "x,i")}${pe(L[3])}${C("P", "10")}${C("M", "x,j")}${pe(L[9])}${C("P", "5")}${C("M", "y,i")}${pe(L[4])}${C("P", "11")}${C("M", "y,j")}${pe(L[10])}${C("P", "6")}${C("M", "z,i")}${pe(L[5])}${C("P", "12")}${C("M", "z,j")}${pe(L[11])}${h ? h.map((j) => pe(j)).join(", ") : "\u2014"}${u ? u.map((j) => pe(j)).join(", ") : "\u2014"}${E ? E.map((j) => pe(j)).join(", ") : "\u2014"}${P ? P.map((j) => pe(j)).join(", ") : "\u2014"}${R ? R.map((j) => pe(j)).join(", ") : "\u2014"}${H ? H.map((j) => pe(j)).join(", ") : "\u2014"}`;
      } else if (d && f) {
        const h = (_B = d.normals) == null ? void 0 : _B.get(t), u = (_C = d.shearsY) == null ? void 0 : _C.get(t), E = (_D = d.shearsZ) == null ? void 0 : _D.get(t), P = (_E = d.torsions) == null ? void 0 : _E.get(t), R = (_F = d.bendingsY) == null ? void 0 : _F.get(t), H = (_G = d.bendingsZ) == null ? void 0 : _G.get(t);
        `${h ? h.map((x) => pe(x)).join(", ") : "\u2014"}${u ? u.map((x) => pe(x)).join(", ") : "\u2014"}${E ? E.map((x) => pe(x)).join(", ") : "\u2014"}${P ? P.map((x) => pe(x)).join(", ") : "\u2014"}${R ? R.map((x) => pe(x)).join(", ") : "\u2014"}${H ? H.map((x) => pe(x)).join(", ") : "\u2014"}`;
      } else if (d && !f) {
        const h = (_H = d.bendingXX) == null ? void 0 : _H.get(t), u = (_I = d.bendingYY) == null ? void 0 : _I.get(t), E = (_J = d.bendingXY) == null ? void 0 : _J.get(t), P = (_K = d.membraneXX) == null ? void 0 : _K.get(t), R = (_L = d.membraneYY) == null ? void 0 : _L.get(t), H = (_M = d.membraneXY) == null ? void 0 : _M.get(t);
        `${h ? h.map((x) => pe(x)).join(", ") : "\u2014"}${u ? u.map((x) => pe(x)).join(", ") : "\u2014"}${E ? E.map((x) => pe(x)).join(", ") : "\u2014"}${P ? P.map((x) => pe(x)).join(", ") : "\u2014"}${R ? R.map((x) => pe(x)).join(", ") : "\u2014"}${H ? H.map((x) => pe(x)).join(", ") : "\u2014"}`;
      }
      `${l[0]}`, 6 * l[0], 6 * l[0] + 5, `${l[1]}`, 6 * l[1], 6 * l[1] + 5, l.length === 3 && (`${l[2]}`, 6 * l[2], 6 * l[2] + 5), o.length * 6, o.length * 6, Ot = Il(t, o, n, a, i, d), Ot.id = "fem-inspect-panel", document.body.appendChild(Ot), (_N = Ot.querySelector("#er-close")) == null ? void 0 : _N.addEventListener("click", () => Mo()), (_O = Ot.querySelector("#rel-apply")) == null ? void 0 : _O.addEventListener("click", () => {
        const h = Ot.querySelectorAll("input[data-rel]"), u = Ot.querySelectorAll("input[data-spr]"), E = new Array(12).fill(false), P = new Array(12).fill(0);
        h.forEach((H) => {
          E[parseInt(H.dataset.rel)] = H.checked;
        }), u.forEach((H) => {
          const x = parseFloat(H.value);
          x > 0 && (P[parseInt(H.dataset.spr)] = x);
        }), a.momentReleases || (a.momentReleases = /* @__PURE__ */ new Map()), a.partialFixitySprings || (a.partialFixitySprings = /* @__PURE__ */ new Map()), E.some((H) => H) ? a.momentReleases.set(t, E) : a.momentReleases.delete(t), P.some((H) => H > 0) ? a.partialFixitySprings.set(t, P) : a.partialFixitySprings.delete(t), console.log(`Releases elem ${t}:`, E.map((H, x) => H ? relIds[x] : "").filter(Boolean).join(" ") || "none"), console.log(`Springs elem ${t}:`, P);
        const R = Ot.querySelector("#rel-apply");
        R.textContent = "\u2713 Aplicado", R.style.background = "#4caf50", setTimeout(() => {
          R.textContent = "Aplicar", R.style.background = "var(--fem-heading)";
        }, 1500);
      });
      const O = f ? (() => {
        var _a3, _b2, _c2, _d2, _e3, _f2;
        const h = Lo(ro(s[1], s[0])), u = ((_a3 = a.elasticities) == null ? void 0 : _a3.get(t)) ?? 0, E = ((_b2 = a.areas) == null ? void 0 : _b2.get(t)) ?? 0, P = ((_c2 = a.momentsOfInertiaZ) == null ? void 0 : _c2.get(t)) ?? 0, R = ((_d2 = a.momentsOfInertiaY) == null ? void 0 : _d2.get(t)) ?? 0, H = ((_e3 = a.shearModuli) == null ? void 0 : _e3.get(t)) ?? 0, x = ((_f2 = a.torsionalConstants) == null ? void 0 : _f2.get(t)) ?? 0;
        return Da(u, E, P, R, H, x, h);
      })() : void 0;
      Ot.querySelectorAll("[data-full]").forEach((h) => {
        h.addEventListener("click", (u) => {
          u.stopPropagation();
          const E = h.dataset.full;
          if (E === "kLocal" && I) {
            const P = f ? js() : "<em>Shell 18\xD718 \u2014 ver tabla num\xE9rica</em>";
            Jn(`Elemento ${t} \u2014 Rigidez Local k_local`, P, Xn(I, T), O);
          } else if (E === "T" && k) Jn(`Elemento ${t} \u2014 Transformaci\xF3n T`, M, Xn(k, T));
          else if (E === "kGlobal" && $) {
            const P = f ? js() : "<em>Shell 18\xD718</em>";
            Jn(`Elemento ${t} \u2014 Rigidez Global K = T^T \xB7 k \xB7 T`, P, Xn($, T), O);
          }
        });
      });
    }
    function Ys() {
      const l = [], s = [];
      for (let y = 0; y <= 8; y++) {
        const p = y / 8, g = 30 * p, k = 12 * (1 - p) * (1 - p * 0.3) / 2, $ = l.length;
        if (l.push([
          -k,
          -k,
          g
        ]), l.push([
          k,
          -k,
          g
        ]), l.push([
          k,
          k,
          g
        ]), l.push([
          -k,
          k,
          g
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
          const T = $ - 4;
          for (let O = 0; O < 4; O++) s.push([
            T + O,
            $ + O
          ]);
          s.push([
            T,
            $ + 1
          ]), s.push([
            T + 1,
            $ + 2
          ]), s.push([
            T + 2,
            $ + 3
          ]), s.push([
            T + 3,
            $
          ]);
        }
      }
      const f = /* @__PURE__ */ new Map();
      for (let y = 0; y < 4; y++) f.set(y, [
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
        supports: f,
        loads: i
      });
      const d = 2e8, r = 77e6, c = 5e-3, m = 2e-6, w = 1e-6, M = {
        elasticities: new Map(s.map((y, p) => [
          p,
          d
        ])),
        shearModuli: new Map(s.map((y, p) => [
          p,
          r
        ])),
        areas: new Map(s.map((y, p) => [
          p,
          c
        ])),
        momentsOfInertiaZ: new Map(s.map((y, p) => [
          p,
          m
        ])),
        momentsOfInertiaY: new Map(s.map((y, p) => [
          p,
          m
        ])),
        torsionalConstants: new Map(s.map((y, p) => [
          p,
          w
        ]))
      };
      e.elementInputs && (e.elementInputs.val = M);
      try {
        const y = pt(l, s, {
          supports: f,
          loads: i
        }, M);
        y && e.deformOutputs && (e.deformOutputs.val = y);
      } catch (y) {
        console.warn("Eiffel deform:", y.message);
      }
      setTimeout(() => st(), 50), Ne(), console.log(`Torre Eiffel: ${l.length} nodos, ${s.length} elementos, H=30m`);
    }
    function Vs() {
      const l = [], s = [];
      for (let M = 0; M <= 20; M++) {
        const y = M / 20, p = 20 * y, g = 20 * (1 - Math.pow(2 * y - 1, 2)), I = 2;
        l.push([
          p,
          -I / 2,
          g
        ]), l.push([
          p,
          I / 2,
          g
        ]);
      }
      for (let M = 0; M < 20; M++) s.push([
        M * 2,
        (M + 1) * 2
      ]), s.push([
        M * 2 + 1,
        (M + 1) * 2 + 1
      ]), s.push([
        M * 2,
        M * 2 + 1
      ]), s.push([
        M * 2,
        (M + 1) * 2 + 1
      ]), s.push([
        M * 2 + 1,
        (M + 1) * 2
      ]);
      s.push([
        20 * 2,
        20 * 2 + 1
      ]);
      const f = /* @__PURE__ */ new Map();
      f.set(0, [
        true,
        true,
        true,
        true,
        true,
        true
      ]), f.set(1, [
        true,
        true,
        true,
        true,
        true,
        true
      ]), f.set(20 * 2, [
        true,
        true,
        true,
        true,
        true,
        true
      ]), f.set(20 * 2 + 1, [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
      const a = /* @__PURE__ */ new Map();
      for (let M = 0; M <= 20; M++) a.set(M * 2, [
        0,
        0,
        -20,
        0,
        0,
        0
      ]), a.set(M * 2 + 1, [
        0,
        0,
        -20,
        0,
        0,
        0
      ]);
      e.nodes.val = l, e.elements.val = s, e.nodeInputs && (e.nodeInputs.val = {
        supports: f,
        loads: a
      });
      const i = 2e8, d = 77e6, r = 0.01, c = 5e-6, m = 2e-6, w = {
        elasticities: new Map(s.map((M, y) => [
          y,
          i
        ])),
        shearModuli: new Map(s.map((M, y) => [
          y,
          d
        ])),
        areas: new Map(s.map((M, y) => [
          y,
          r
        ])),
        momentsOfInertiaZ: new Map(s.map((M, y) => [
          y,
          c
        ])),
        momentsOfInertiaY: new Map(s.map((M, y) => [
          y,
          c
        ])),
        torsionalConstants: new Map(s.map((M, y) => [
          y,
          m
        ]))
      };
      e.elementInputs && (e.elementInputs.val = w);
      try {
        const M = pt(l, s, {
          supports: f,
          loads: a
        }, w);
        M && e.deformOutputs && (e.deformOutputs.val = M);
      } catch (M) {
        console.warn("Arco:", M.message);
      }
      setTimeout(() => st(), 50), Ne(), console.log(`Arco Gateway: ${l.length} nodos, ${s.length} elem, span=20m, H=20m`);
    }
    function Gs() {
      const f = [], a = [];
      for (let p = 0; p <= 16; p++) {
        const g = 60 * p / 16;
        f.push([
          g,
          -6 / 2,
          8
        ]), f.push([
          g,
          6 / 2,
          8
        ]);
      }
      const i = f.length;
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
      const d = [
        Math.round(16 / 3),
        Math.round(2 * 16 / 3)
      ], r = [];
      for (const p of d) {
        const g = 60 * p / 16, I = f.length;
        f.push([
          g,
          -6 / 2,
          0
        ]);
        const k = f.length;
        f.push([
          g,
          6 / 2,
          0
        ]);
        const $ = f.length;
        f.push([
          g,
          -6 / 2,
          28
        ]);
        const T = f.length;
        f.push([
          g,
          6 / 2,
          28
        ]), r.push($, T), a.push([
          I,
          p * 2
        ]), a.push([
          p * 2,
          $
        ]), a.push([
          k,
          p * 2 + 1
        ]), a.push([
          p * 2 + 1,
          T
        ]), a.push([
          $,
          T
        ]);
      }
      for (const p of r) {
        const g = f[p][0];
        for (let I = 0; I <= 16; I++) {
          const k = 60 * I / 16;
          if (Math.abs(k - g) > 60 * 0.05 && Math.abs(k - g) < 60 * 0.45) {
            const $ = f[p][1] < 0 ? I * 2 : I * 2 + 1;
            I % 2 === 0 && a.push([
              p,
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
      for (let p = i; p < i + d.length * 4; p += 4) c.set(p, [
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
      e.nodes.val = f, e.elements.val = a, e.nodeInputs && (e.nodeInputs.val = {
        supports: c,
        loads: m
      });
      const w = 2e8, M = 77e6, y = {
        elasticities: new Map(a.map((p, g) => [
          g,
          w
        ])),
        shearModuli: new Map(a.map((p, g) => [
          g,
          M
        ])),
        areas: new Map(a.map((p, g) => [
          g,
          g < 16 * 3 + 1 ? 0.02 : 1e-3
        ])),
        momentsOfInertiaZ: new Map(a.map((p, g) => [
          g,
          5e-5
        ])),
        momentsOfInertiaY: new Map(a.map((p, g) => [
          g,
          2e-5
        ])),
        torsionalConstants: new Map(a.map((p, g) => [
          g,
          1e-5
        ]))
      };
      e.elementInputs && (e.elementInputs.val = y);
      try {
        const p = pt(f, a, {
          supports: c,
          loads: m
        }, y);
        p && e.deformOutputs && (e.deformOutputs.val = p);
      } catch (p) {
        console.warn("Puente:", p.message);
      }
      setTimeout(() => st(), 50), Ne(), console.log(`Puente atirantado: ${f.length} nodos, ${a.length} elem, span=60m`);
    }
    function Xs() {
      const f = [], a = [];
      for (let g = 0; g <= 12; g++) {
        const I = g * 3.5, k = g * 5 * Math.PI / 180;
        for (let $ = 0; $ < 6; $++) {
          const T = k + 2 * Math.PI * $ / 6, O = 5 * Math.cos(T), h = 5 * Math.sin(T);
          f.push([
            O,
            h,
            I
          ]);
        }
      }
      for (let g = 0; g <= 12; g++) {
        const I = g * 6;
        for (let k = 0; k < 6; k++) a.push([
          I + k,
          I + (k + 1) % 6
        ]);
        if (g < 12) {
          const k = (g + 1) * 6;
          for (let $ = 0; $ < 6; $++) a.push([
            I + $,
            k + $
          ]), a.push([
            I + $,
            k + ($ + 1) % 6
          ]);
        }
      }
      for (let g = 0; g <= 12; g++) {
        const I = f.length;
        f.push([
          0,
          0,
          g * 3.5
        ]);
        const k = g * 6;
        for (let $ = 0; $ < 6; $++) a.push([
          I,
          k + $
        ]);
      }
      const i = 13 * 6;
      for (let g = 0; g < 12; g++) a.push([
        i + g,
        i + g + 1
      ]);
      const d = /* @__PURE__ */ new Map();
      for (let g = 0; g < 6; g++) d.set(g, [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
      d.set(i, [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
      const r = /* @__PURE__ */ new Map();
      for (let g = 1; g <= 12; g++) {
        const I = 10 * g / 12, k = g * 6;
        for (let $ = 0; $ < 6; $++) r.set(k + $, [
          I,
          0,
          -5,
          0,
          0,
          0
        ]);
      }
      e.nodes.val = f, e.elements.val = a, e.nodeInputs && (e.nodeInputs.val = {
        supports: d,
        loads: r
      });
      const c = 2e8, m = 77e6, w = 8e-3, M = 1e-5, y = 5e-6, p = {
        elasticities: new Map(a.map((g, I) => [
          I,
          c
        ])),
        shearModuli: new Map(a.map((g, I) => [
          I,
          m
        ])),
        areas: new Map(a.map((g, I) => [
          I,
          w
        ])),
        momentsOfInertiaZ: new Map(a.map((g, I) => [
          I,
          M
        ])),
        momentsOfInertiaY: new Map(a.map((g, I) => [
          I,
          M
        ])),
        torsionalConstants: new Map(a.map((g, I) => [
          I,
          y
        ]))
      };
      e.elementInputs && (e.elementInputs.val = p);
      try {
        const g = pt(f, a, {
          supports: d,
          loads: r
        }, p);
        g && e.deformOutputs && (e.deformOutputs.val = g);
      } catch (g) {
        console.warn("Twisted:", g.message);
      }
      setTimeout(() => st(), 50), Ne(), console.log(`Torre Twist: ${f.length} nodos, ${a.length} elem, 12 pisos, twist=5deg/piso`);
    }
    function Js() {
      const s = [], f = [];
      for (let p = 0; p <= 20; p++) {
        const g = p / 20, I = p * 3;
        let k = 8 * (1 - g * 0.7);
        g > 0.4 && (k *= 0.85), g > 0.7 && (k *= 0.7);
        const $ = s.length;
        s.push([
          0,
          0,
          I
        ]);
        for (let T = 0; T < 3; T++) {
          const O = T * 2 * Math.PI / 3 - Math.PI / 2, h = k * Math.cos(O), u = k * Math.sin(O), E = s.length;
          s.push([
            h,
            u,
            I
          ]), f.push([
            $,
            E
          ]);
          const P = s.length;
          s.push([
            h * 0.5,
            u * 0.5,
            I
          ]), f.push([
            $,
            P
          ]), f.push([
            P,
            E
          ]);
        }
        for (let T = 0; T < 3; T++) {
          const O = $ + 1 + T * 2, h = $ + 1 + (T + 1) % 3 * 2;
          f.push([
            O,
            h
          ]);
        }
        if (p < 20) {
          const O = $ + 7;
          f.push([
            $,
            O
          ]);
          for (let h = 0; h < 3; h++) f.push([
            $ + 1 + h * 2,
            O + 1 + h * 2
          ]), f.push([
            $ + 2 + h * 2,
            O + 2 + h * 2
          ]), f.push([
            $ + 1 + h * 2,
            O + 2 + h * 2
          ]);
        }
      }
      const a = /* @__PURE__ */ new Map(), i = 1 + 3 * 2;
      for (let p = 0; p < i; p++) a.set(p, [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
      const d = /* @__PURE__ */ new Map();
      for (let p = 1; p <= 20; p++) {
        const g = p * i, I = 5 * p / 20;
        d.set(g, [
          I,
          0,
          -10,
          0,
          0,
          0
        ]);
      }
      e.nodes.val = s, e.elements.val = f, e.nodeInputs && (e.nodeInputs.val = {
        supports: a,
        loads: d
      });
      const r = 35e6, c = 14e6, m = 0.02, w = 5e-5, M = 2e-5, y = {
        elasticities: new Map(f.map((p, g) => [
          g,
          r
        ])),
        shearModuli: new Map(f.map((p, g) => [
          g,
          c
        ])),
        areas: new Map(f.map((p, g) => [
          g,
          m
        ])),
        momentsOfInertiaZ: new Map(f.map((p, g) => [
          g,
          w
        ])),
        momentsOfInertiaY: new Map(f.map((p, g) => [
          g,
          w
        ])),
        torsionalConstants: new Map(f.map((p, g) => [
          g,
          M
        ]))
      };
      e.elementInputs && (e.elementInputs.val = y);
      try {
        const p = pt(s, f, {
          supports: a,
          loads: d
        }, y);
        p && e.deformOutputs && (e.deformOutputs.val = p);
      } catch (p) {
        console.warn("Burj:", p.message);
      }
      setTimeout(() => st(), 50), Ne(), console.log(`Burj Khalifa: ${s.length} nodos, ${f.length} elem, 20 pisos, H=${20 * 3}m`);
    }
    function Ks() {
      const t = [], o = [];
      for (let m = 0; m < 3; m++) {
        const w = m * 12, M = 15 - m * 2, y = 20 - m * 3, p = 8 - m, g = t.length;
        for (let k = 0; k <= 4; k++) {
          const $ = k / 4, T = -p / 2 + p * $, O = y * (1 - $ * $ * 0.3);
          for (let h = 0; h <= 12; h++) {
            const u = h / 12, E = w + O * u, P = M * Math.sin(Math.PI * u) * (1 - $ * $ * 0.5), R = T;
            t.push([
              E,
              R,
              P
            ]);
          }
        }
        const I = 13;
        for (let k = 0; k < 4; k++) for (let $ = 0; $ < 12; $++) {
          const T = g + k * I + $, O = g + k * I + $ + 1, h = g + (k + 1) * I + $ + 1, u = g + (k + 1) * I + $;
          o.push([
            T,
            O,
            h,
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
      const f = /* @__PURE__ */ new Map();
      for (let m = 0; m < t.length; m++) t[m][2] > 2 && f.set(m, [
        0,
        0,
        -5,
        0,
        0,
        0
      ]);
      e.nodes.val = t, e.elements.val = o, e.nodeInputs && (e.nodeInputs.val = {
        supports: s,
        loads: f
      });
      const a = 35e6, i = 0.2, d = 0.15, r = a / (2 * (1 + i)), c = {
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
          d
        ])),
        shearModuli: new Map(o.map((m, w) => [
          w,
          r
        ]))
      };
      e.elementInputs && (e.elementInputs.val = c);
      try {
        const m = pt(t, o, {
          supports: s,
          loads: f
        }, c);
        m && e.deformOutputs && (e.deformOutputs.val = m);
      } catch (m) {
        console.warn("Opera:", m.message);
      }
      setTimeout(() => st(), 50), Ne(), console.log(`Sydney Opera: ${t.length} nodos, ${o.length} shells Q4, 3 velas`);
    }
    function Us() {
      const l = [], s = [];
      for (let y = 0; y <= 15; y++) {
        const p = y / 15, g = y * 3.5, I = 5 * (0.6 + 0.4 * Math.sin(Math.PI * p));
        if (p > 0.9) {
          const k = 5 * (0.6 + 0.4 * Math.sin(Math.PI * 0.9)) * (1 - (p - 0.9) * 8);
          for (let $ = 0; $ < 12; $++) {
            const T = 2 * Math.PI * $ / 12;
            l.push([
              Math.max(k, 1) * Math.cos(T),
              Math.max(k, 1) * Math.sin(T),
              g
            ]);
          }
        } else for (let k = 0; k < 12; k++) {
          const $ = 2 * Math.PI * k / 12;
          l.push([
            I * Math.cos($),
            I * Math.sin($),
            g
          ]);
        }
      }
      for (let y = 0; y < 15; y++) {
        const p = y * 12, g = (y + 1) * 12;
        for (let k = 0; k < 12; k++) s.push([
          p + k,
          p + (k + 1) % 12
        ]);
        const I = y % 2 === 0 ? 1 : -1;
        for (let k = 0; k < 12; k++) {
          const $ = (k + I + 12) % 12;
          s.push([
            p + k,
            g + $
          ]), s.push([
            p + k,
            g + k
          ]);
        }
      }
      const f = 15 * 12;
      for (let y = 0; y < 12; y++) s.push([
        f + y,
        f + (y + 1) % 12
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
        const p = y * 12, g = 3 * y / 15;
        for (let I = 0; I < 12; I += 3) i.set(p + I, [
          g,
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
      const d = 2e8, r = 77e6, c = 6e-3, m = 8e-6, w = 4e-6, M = {
        elasticities: new Map(s.map((y, p) => [
          p,
          d
        ])),
        shearModuli: new Map(s.map((y, p) => [
          p,
          r
        ])),
        areas: new Map(s.map((y, p) => [
          p,
          c
        ])),
        momentsOfInertiaZ: new Map(s.map((y, p) => [
          p,
          m
        ])),
        momentsOfInertiaY: new Map(s.map((y, p) => [
          p,
          m
        ])),
        torsionalConstants: new Map(s.map((y, p) => [
          p,
          w
        ]))
      };
      e.elementInputs && (e.elementInputs.val = M);
      try {
        const y = pt(l, s, {
          supports: a,
          loads: i
        }, M);
        y && e.deformOutputs && (e.deformOutputs.val = y);
      } catch (y) {
        console.warn("Diagrid:", y.message);
      }
      setTimeout(() => st(), 50), Ne(), console.log(`Diagrid Tower: ${l.length} nodos, ${s.length} elem, 15 pisos, H=${15 * 3.5}m`);
    }
    function Kn() {
      var _a2, _b, _c, _d, _e2, _f, _g, _h;
      const t = ((_a2 = U.W) == null ? void 0 : _a2.val) ?? 5, o = ((_b = U.H) == null ? void 0 : _b.val) ?? 3, n = ((_c = U.t) == null ? void 0 : _c.val) ?? 0.2, l = Math.round(((_d = U.nx) == null ? void 0 : _d.val) ?? 8), s = Math.round(((_e2 = U.ny) == null ? void 0 : _e2.val) ?? 6), f = ((_f = U.E) == null ? void 0 : _f.val) ?? 25e6, a = ((_g = U.nu) == null ? void 0 : _g.val) ?? 0.2, i = ((_h = U.P) == null ? void 0 : _h.val) ?? 100, d = f / (2 * (1 + a)), r = t / l, c = o / s, m = [], w = [], M = /* @__PURE__ */ new Map(), y = /* @__PURE__ */ new Map();
      for (let $ = 0; $ <= s; $++) for (let T = 0; T <= l; T++) m.push([
        T * r,
        0,
        $ * c
      ]);
      const p = l + 1;
      for (let $ = 0; $ < s; $++) for (let T = 0; T < l; T++) w.push([
        $ * p + T,
        $ * p + T + 1,
        ($ + 1) * p + T + 1,
        ($ + 1) * p + T
      ]);
      for (let $ = 0; $ <= l; $++) M.set($, [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
      const g = [];
      for (let $ = 0; $ <= l; $++) g.push(s * p + $);
      const I = i / g.length;
      for (const $ of g) y.set($, [
        I,
        0,
        0,
        0,
        0,
        0
      ]);
      e.nodes.val = m, e.elements.val = w, e.nodeInputs && (e.nodeInputs.val = {
        supports: M,
        loads: y
      });
      const k = {
        elasticities: new Map(w.map(($, T) => [
          T,
          f
        ])),
        poissonsRatios: new Map(w.map(($, T) => [
          T,
          a
        ])),
        thicknesses: new Map(w.map(($, T) => [
          T,
          n
        ])),
        shearModuli: new Map(w.map(($, T) => [
          T,
          d
        ])),
        densities: new Map(w.map(($, T) => [
          T,
          24 / 9.80665
        ]))
      };
      e.elementInputs && (e.elementInputs.val = k);
      try {
        const $ = pt(m, w, {
          supports: M,
          loads: y
        }, k);
        if ($ && e.deformOutputs) {
          e.deformOutputs.val = $;
          const T = so(m, w, k, $);
          e.analyzeOutputs && (e.analyzeOutputs.val = T);
          const O = s * p + Math.floor(l / 2), h = $.deformations.get(O), u = h ? h[0] : 0;
          console.log(`Muro Q4: Ux=${u.toExponential(4)} m | OS:4.602e-5 | SAP:4.629e-5 | ETABS:4.582e-5`);
        }
      } catch ($) {
        console.warn("MuroQ4:", $.message);
      }
      setTimeout(() => st(), 50), Ne();
    }
    function Zs() {
      var _a2, _b, _c, _d, _e2, _f, _g, _h;
      const t = ((_a2 = U.L) == null ? void 0 : _a2.val) ?? 6, o = ((_b = U.h) == null ? void 0 : _b.val) ?? 0.5, n = ((_c = U.t) == null ? void 0 : _c.val) ?? 0.2, l = Math.round(((_d = U.nx) == null ? void 0 : _d.val) ?? 12), s = Math.round(((_e2 = U.ny) == null ? void 0 : _e2.val) ?? 4), f = ((_f = U.E) == null ? void 0 : _f.val) ?? 25e6, a = ((_g = U.nu) == null ? void 0 : _g.val) ?? 0.2, i = ((_h = U.P) == null ? void 0 : _h.val) ?? 50, d = f / (2 * (1 + a)), r = t / l, c = o / s, m = [], w = [], M = /* @__PURE__ */ new Map(), y = /* @__PURE__ */ new Map();
      for (let k = 0; k <= s; k++) for (let $ = 0; $ <= l; $++) m.push([
        $ * r,
        0,
        k * c
      ]);
      const p = l + 1;
      for (let k = 0; k < s; k++) for (let $ = 0; $ < l; $++) w.push([
        k * p + $,
        k * p + $ + 1,
        (k + 1) * p + $ + 1,
        (k + 1) * p + $
      ]);
      for (let k = 0; k <= s; k++) M.set(k * p, [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
      const g = Math.floor(s / 2) * p + l;
      y.set(g, [
        0,
        0,
        -i,
        0,
        0,
        0
      ]), e.nodes.val = m, e.elements.val = w, e.nodeInputs && (e.nodeInputs.val = {
        supports: M,
        loads: y
      });
      const I = {
        elasticities: new Map(w.map((k, $) => [
          $,
          f
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
          d
        ])),
        densities: new Map(w.map((k, $) => [
          $,
          24 / 9.80665
        ]))
      };
      e.elementInputs && (e.elementInputs.val = I);
      try {
        const k = pt(m, w, {
          supports: M,
          loads: y
        }, I);
        if (k && e.deformOutputs) {
          e.deformOutputs.val = k;
          const $ = so(m, w, I, k);
          e.analyzeOutputs && (e.analyzeOutputs.val = $);
          const T = k.deformations.get(g), O = T ? T[2] : 0, h = n * o * o * o / 12, u = i * t * t * t / (3 * f * h);
          console.log(`Viga Q4: Uz_tip=${O.toExponential(4)} | Analitico=${u.toExponential(4)} | ratio=${(Math.abs(O) / u).toFixed(4)}`);
        }
      } catch (k) {
        console.warn("VigaQ4:", k.message);
      }
      setTimeout(() => st(), 50), Ne();
    }
    function Qs() {
      var _a2, _b, _c, _d, _e2, _f, _g, _h;
      const t = ((_a2 = U.Lx) == null ? void 0 : _a2.val) ?? 4, o = ((_b = U.Ly) == null ? void 0 : _b.val) ?? 2, n = ((_c = U.t) == null ? void 0 : _c.val) ?? 0.15, l = Math.round(((_d = U.nx) == null ? void 0 : _d.val) ?? 8), s = Math.round(((_e2 = U.ny) == null ? void 0 : _e2.val) ?? 4), f = ((_f = U.E) == null ? void 0 : _f.val) ?? 25e6, a = ((_g = U.nu) == null ? void 0 : _g.val) ?? 0.2, i = ((_h = U.P) == null ? void 0 : _h.val) ?? 20, d = f / (2 * (1 + a)), r = t / l, c = o / s, m = [], w = [], M = /* @__PURE__ */ new Map(), y = /* @__PURE__ */ new Map();
      for (let $ = 0; $ <= s; $++) for (let T = 0; T <= l; T++) m.push([
        T * r,
        0,
        $ * c
      ]);
      const p = l + 1;
      for (let $ = 0; $ < s; $++) for (let T = 0; T < l; T++) w.push([
        $ * p + T,
        $ * p + T + 1,
        ($ + 1) * p + T + 1,
        ($ + 1) * p + T
      ]);
      for (let $ = 0; $ <= s; $++) M.set($ * p, [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
      const g = [];
      for (let $ = 0; $ <= s; $++) g.push($ * p + l);
      const I = i / g.length;
      for (const $ of g) y.set($, [
        0,
        -I,
        0,
        0,
        0,
        0
      ]);
      e.nodes.val = m, e.elements.val = w, e.nodeInputs && (e.nodeInputs.val = {
        supports: M,
        loads: y
      });
      const k = {
        elasticities: new Map(w.map(($, T) => [
          T,
          f
        ])),
        poissonsRatios: new Map(w.map(($, T) => [
          T,
          a
        ])),
        thicknesses: new Map(w.map(($, T) => [
          T,
          n
        ])),
        shearModuli: new Map(w.map(($, T) => [
          T,
          d
        ])),
        densities: new Map(w.map(($, T) => [
          T,
          24 / 9.80665
        ]))
      };
      e.elementInputs && (e.elementInputs.val = k);
      try {
        const $ = pt(m, w, {
          supports: M,
          loads: y
        }, k);
        if ($ && e.deformOutputs) {
          e.deformOutputs.val = $;
          const T = so(m, w, k, $);
          e.analyzeOutputs && (e.analyzeOutputs.val = T);
          const O = (s / 2 | 0) * p + l, h = $.deformations.get(O), u = h ? h[1] : 0;
          console.log(`Placa XY Q4: Uy_tip=${u.toExponential(4)} m`);
        }
      } catch ($) {
        console.warn("PlacaXY:", $.message);
      }
      setTimeout(() => st(), 50), Ne();
    }
    function ea() {
      var _a2, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l2, _m, _n2, _o2, _p, _q, _r, _s2, _t2, _u, _v, _w, _x, _y;
      const t = z, o = ((_a2 = U.Lx) == null ? void 0 : _a2.val) ?? 5.5, n = ((_b = U.Ly) == null ? void 0 : _b.val) ?? 8, l = ((_c = U.H1) == null ? void 0 : _c.val) ?? 3, s = ((_d = U.H2) == null ? void 0 : _d.val) ?? 4, f = Math.round(((_e2 = U.nCol) == null ? void 0 : _e2.val) ?? 4), a = Math.round(((_f = U.nCorr) == null ? void 0 : _f.val) ?? 8), i = ((_g = U.E) == null ? void 0 : _g.val) ?? t.E, d = ((_h = U.t) == null ? void 0 : _h.val) ?? 5e-4, r = ((_i = U.q) == null ? void 0 : _i.val) ?? 1, c = (((_j = U.supUx) == null ? void 0 : _j.val) ?? 1) >= 0.5, m = (((_k = U.supUy) == null ? void 0 : _k.val) ?? 1) >= 0.5, w = (((_l2 = U.supUz) == null ? void 0 : _l2.val) ?? 1) >= 0.5, M = (((_m = U.supRx) == null ? void 0 : _m.val) ?? 1) >= 0.5, y = (((_n2 = U.supRy) == null ? void 0 : _n2.val) ?? 1) >= 0.5, p = (((_o2 = U.supRz) == null ? void 0 : _o2.val) ?? 1) >= 0.5, g = ((_p = U.colD) == null ? void 0 : _p.val) ?? 0.16, I = ((_q = U.colBf) == null ? void 0 : _q.val) ?? 0.16, k = ((_r = U.colTf) == null ? void 0 : _r.val) ?? 0.013, $ = ((_s2 = U.colTw) == null ? void 0 : _s2.val) ?? 8e-3, T = ((_t2 = U.vigD) == null ? void 0 : _t2.val) ?? 0.2, O = ((_u = U.vigBf) == null ? void 0 : _u.val) ?? 0.1, h = ((_v = U.vigTf) == null ? void 0 : _v.val) ?? 85e-4, u = ((_w = U.vigTw) == null ? void 0 : _w.val) ?? 56e-4, E = ((_x = U.corrB) == null ? void 0 : _x.val) ?? 0.06, P = ((_y = U.corrT) == null ? void 0 : _y.val) ?? 4e-3, R = 0.3, H = i / (2 * (1 + R));
      function x($e, Le, Fe, Re) {
        const $t = $e - 2 * Fe, So = 2 * Le * Fe + $t * Re, Qo = (Le * $e * $e * $e - (Le - Re) * $t * $t * $t) / 12, en = (2 * Fe * Le * Le * Le + $t * Re * Re * Re) / 12, pn = (2 * Le * Fe * Fe * Fe + $t * Re * Re * Re) / 3;
        return {
          A: So,
          Iz: Qo,
          Iy: en,
          J: pn
        };
      }
      const S = x(g, I, k, $), v = x(T, O, h, u), L = E * E - (E - 2 * P) * (E - 2 * P), N = (E ** 4 - (E - 2 * P) ** 4) / 12, D = N, V = 2 * P * (E - P) ** 2 * (E - P) ** 2 / (2 * (E - P) + 2 * (E - P)), j = 3, B = [
        0,
        o / 2,
        o
      ], te = [];
      for (let $e = 0; $e < f; $e++) te.push($e * n / (f - 1));
      const oe = /* @__PURE__ */ new Set();
      for (const $e of te) oe.add($e);
      for (let $e = 0; $e < a; $e++) oe.add($e * n / (a - 1));
      const de = Array.from(oe).sort(($e, Le) => $e - Le), ge = de.length;
      function _($e) {
        return l + (s - l) * $e / n;
      }
      const se = [], G = [], ae = [], Y = [];
      for (let $e = 0; $e < j; $e++) {
        const Le = [];
        for (let Re = 0; Re < f; Re++) Le.push(se.length), se.push([
          B[$e],
          te[Re],
          0
        ]);
        ae.push(Le);
        const Fe = [];
        for (let Re = 0; Re < ge; Re++) Fe.push(se.length), se.push([
          B[$e],
          de[Re],
          _(de[Re])
        ]);
        Y.push(Fe);
      }
      const le = /* @__PURE__ */ new Map(), ue = /* @__PURE__ */ new Map(), Z = /* @__PURE__ */ new Map(), fe = /* @__PURE__ */ new Map(), ze = /* @__PURE__ */ new Map(), He = /* @__PURE__ */ new Map(), je = /* @__PURE__ */ new Map(), tt = /* @__PURE__ */ new Map(), lt = /* @__PURE__ */ new Map(), ot = t.rho ?? 7850;
      for (let $e = 0; $e < j; $e++) for (let Le = 0; Le < f; Le++) {
        const Fe = de.indexOf(te[Le]);
        if (Fe < 0) continue;
        const Re = G.length;
        G.push([
          ae[$e][Le],
          Y[$e][Fe]
        ]), le.set(Re, i), ue.set(Re, H), Z.set(Re, S.A), fe.set(Re, S.Iy), ze.set(Re, S.Iz), He.set(Re, S.J), lt.set(Re, ot), je.set(Re, {
          type: "I",
          d: g,
          bf: I,
          tf: k,
          tw: $,
          name: "Col"
        });
        const $t = new Array(12).fill(false);
        $t[10] = true, $t[11] = true, tt.set(Re, $t);
      }
      for (let $e = 0; $e < j; $e++) for (let Le = 0; Le < ge - 1; Le++) {
        const Fe = G.length;
        G.push([
          Y[$e][Le],
          Y[$e][Le + 1]
        ]), le.set(Fe, i), ue.set(Fe, H), Z.set(Fe, v.A), fe.set(Fe, v.Iy), ze.set(Fe, v.Iz), He.set(Fe, v.J), lt.set(Fe, ot), je.set(Fe, {
          type: "I",
          d: T,
          bf: O,
          tf: h,
          tw: u,
          name: "Vig"
        });
      }
      G.length;
      for (let $e = 0; $e < ge; $e++) for (let Le = 0; Le < j - 1; Le++) {
        const Fe = G.length;
        G.push([
          Y[Le][$e],
          Y[Le + 1][$e]
        ]), le.set(Fe, i), ue.set(Fe, H), Z.set(Fe, L), fe.set(Fe, D), ze.set(Fe, N), He.set(Fe, V), lt.set(Fe, ot), je.set(Fe, {
          type: "rect",
          b: E,
          h: E,
          name: "Corr"
        });
        const Re = new Array(12).fill(false);
        Re[4] = true, Re[5] = true, Re[10] = true, Re[11] = true, tt.set(Fe, Re);
      }
      for (let $e = 0; $e < j - 1; $e++) for (let Le = 0; Le < ge - 1; Le++) {
        const Fe = G.length;
        G.push([
          Y[$e][Le],
          Y[$e + 1][Le],
          Y[$e + 1][Le + 1],
          Y[$e][Le + 1]
        ]), le.set(Fe, i), ue.set(Fe, H), lt.set(Fe, ot), le.set(Fe, i);
      }
      const ft = /* @__PURE__ */ new Map(), no = [
        c,
        m,
        w,
        M,
        y,
        p
      ];
      for (let $e = 0; $e < j; $e++) for (let Le = 0; Le < f; Le++) ft.set(ae[$e][Le], no);
      const Pt = /* @__PURE__ */ new Map();
      for (let $e = 0; $e < j; $e++) for (let Le = 0; Le < ge; Le++) {
        let Fe;
        $e === 0 ? Fe = (B[1] - B[0]) / 2 : $e === j - 1 ? Fe = (B[j - 1] - B[j - 2]) / 2 : Fe = (B[$e + 1] - B[$e - 1]) / 2;
        let Re;
        Le === 0 ? Re = (de[1] - de[0]) / 2 : Le === ge - 1 ? Re = (de[ge - 1] - de[ge - 2]) / 2 : Re = (de[Le + 1] - de[Le - 1]) / 2;
        const $t = -r * Fe * Re;
        Pt.set(Y[$e][Le], [
          0,
          0,
          $t,
          0,
          0,
          0
        ]);
      }
      e.nodes.val = se, e.elements.val = G, e.nodeInputs && (e.nodeInputs.val = {
        supports: ft,
        loads: Pt
      });
      const Et = G.filter(($e) => $e.length === 2).length, Oe = {
        elasticities: le,
        shearModuli: ue,
        areas: Z,
        momentsOfInertiaZ: fe,
        momentsOfInertiaY: ze,
        torsionalConstants: He,
        sectionShapes: je,
        momentReleases: tt,
        densities: lt
      }, Qe = /* @__PURE__ */ new Map(), It = /* @__PURE__ */ new Map();
      for (let $e = 0; $e < G.length; $e++) G[$e].length === 4 && (Qe.set($e, d), It.set($e, R));
      Oe.thicknesses = Qe, Oe.poissonsRatios = It, e.elementInputs && (e.elementInputs.val = Oe);
      try {
        const $e = performance.now(), Le = pt(se, G, {
          supports: ft,
          loads: Pt
        }, Oe), Fe = performance.now() - $e;
        if (Le && e.deformOutputs) {
          e.deformOutputs.val = Le;
          const Re = so(se, G, Oe, Le);
          e.analyzeOutputs && (e.analyzeOutputs.val = Re);
          let $t = 0, So = -1;
          Le.deformations.forEach((Qo, en) => {
            Math.abs(Qo[2]) > Math.abs($t) && ($t = Qo[2], So = en);
          }), console.log(`P\xE9rgola: Uz_max=${$t.toExponential(4)} m en nodo ${So} | ${Et} frames + ${G.length - Et} shells | ${Fe.toFixed(0)} ms`);
        }
      } catch ($e) {
        console.warn("Pergola:", $e.message);
      }
      const dt = De();
      dt && (dt.settings.shellResults.val = "displacementZ", dt.settings.deformedShape.val = true), setTimeout(() => st(), 50), Ne();
    }
    function ja() {
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
    function Wa() {
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
        }, n = o("po-colB"), l = o("po-colH"), s = o("po-fc") * 1e3, f = o("po-fy") * 1e3, a = o("po-H"), i = o("po-L"), d = o("po-As") * 1e-4, r = o("po-nbar"), c = o("po-drift") / 100, m = o("po-ncycles"), w = t.querySelector("#pushover-status");
        w.textContent = "Generando historia de desplazamientos...";
        const M = [], y = c * a, p = 40;
        for (let g = 1; g <= m; g++) {
          const I = y * g / m;
          for (let k = 0; k <= p; k++) M.push(I * Math.sin(2 * Math.PI * k / p));
        }
        w.textContent = `Resolviendo pushover (${M.length} pasos)...`;
        try {
          const { cyclicPushover: g } = await na(async () => {
            const { cyclicPushover: k } = await import("./cyclicPushoverCpp-CAjnNGvf.js");
            return {
              cyclicPushover: k
            };
          }, __vite__mapDeps([8,6,7])), I = await g({
            colHeight: a,
            beamLength: i,
            col: {
              b: n,
              h: l,
              fpc: -s,
              Fy_rebar: f,
              E_rebar: 2e8,
              rebar_area: d,
              cover: 0.04,
              n_rebar: r
            },
            beam: {
              b: 0.25,
              h: 0.3,
              fpc: -s,
              Fy_rebar: f,
              E_rebar: 2e8,
              rebar_area: d * 0.7,
              cover: 0.03,
              n_rebar: r
            },
            dispHistory: M
          });
          w.textContent = `Completado: ${I.nSteps} pasos`, Ya(t.querySelector("#pushover-canvas"), I.displacements, I.forces, `Pushover: ${n * 100}x${l * 100}cm, f'c=${s / 1e3}MPa, Fy=${f / 1e3}MPa`);
        } catch (g) {
          w.textContent = `Error: ${g.message}`, console.error("Pushover failed:", g);
        }
      });
    }
    function Ya(t, o, n, l) {
      const s = t.getContext("2d");
      if (!s || o.length === 0) return;
      const f = t.width, a = t.height, i = {
        left: 55,
        right: 15,
        top: 30,
        bottom: 35
      }, d = f - i.left - i.right, r = a - i.top - i.bottom;
      s.fillStyle = "#111118", s.fillRect(0, 0, f, a);
      let c = Math.min(...o), m = Math.max(...o), w = Math.min(...n), M = Math.max(...n);
      c === m && (c -= 0.01, m += 0.01), w === M && (w -= 1, M += 1);
      const y = m - c, p = M - w, g = (T) => i.left + (T - c) / y * d, I = (T) => i.top + r - (T - w) / p * r;
      s.strokeStyle = "#333", s.lineWidth = 0.5, c < 0 && m > 0 && (s.strokeStyle = "#555", s.beginPath(), s.moveTo(g(0), i.top), s.lineTo(g(0), i.top + r), s.stroke()), w < 0 && M > 0 && (s.beginPath(), s.moveTo(i.left, I(0)), s.lineTo(i.left + d, I(0)), s.stroke()), s.strokeStyle = "#ff4444", s.lineWidth = 1.5, s.beginPath(), s.moveTo(g(o[0]), I(n[0]));
      for (let T = 1; T < o.length; T++) s.lineTo(g(o[T]), I(n[T]));
      s.stroke(), s.fillStyle = "#aaa", s.font = "11px monospace", s.textAlign = "center", s.fillText("Desplazamiento (m)", i.left + d / 2, a - 5), s.save(), s.translate(12, i.top + r / 2), s.rotate(-Math.PI / 2), s.fillText("Fuerza (kN)", 0, 0), s.restore(), s.fillStyle = "#ee9b00", s.font = "bold 11px monospace", s.textAlign = "center", s.fillText(l, f / 2, 15), s.fillStyle = "#888", s.font = "9px monospace", s.textAlign = "center";
      const k = y / 5;
      for (let T = 0; T <= 5; T++) {
        const O = c + k * T;
        s.fillText((O * 1e3).toFixed(1), g(O), a - i.bottom + 15);
      }
      s.textAlign = "right";
      const $ = p / 5;
      for (let T = 0; T <= 5; T++) {
        const O = w + $ * T;
        s.fillText(O.toFixed(0), i.left - 5, I(O) + 3);
      }
    }
    let Uo = null;
    function Va() {
      if (Uo) {
        Uo.remove(), Uo = null;
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
    `, document.body.appendChild(t), Uo = t, t.querySelector("#nl-close").addEventListener("click", () => {
        t.remove(), Uo = null;
      }), t.querySelector("#nl-test").addEventListener("click", () => Ga(t));
    }
    function Ga(t) {
      const o = parseFloat(t.querySelector("#nl-fy").value), n = parseFloat(t.querySelector("#nl-e0").value), l = parseFloat(t.querySelector("#nl-b").value), s = parseFloat(t.querySelector("#nl-r0").value), f = parseFloat(t.querySelector("#nl-amp").value), a = parseInt(t.querySelector("#nl-cycles").value), i = 100, d = [];
      for (let D = 0; D < a; D++) {
        const V = f * (1 + D * 0.5);
        for (let j = 0; j < i; j++) {
          const B = j / i * 2 * Math.PI;
          d.push(V * Math.sin(B));
        }
      }
      const r = o / n, c = l * n;
      let m = 0, w = 0, M = -r, y = r, p = 0, g = 0, I = 0, k = 0, $ = 0, T = 0;
      const O = [];
      for (const D of d) {
        let V = M, j = y, B = p, te = g, oe = I, de = k, ge = $, _ = T, se;
        const G = D - m;
        if (Math.abs(G) < 1e-20) {
          O.push(w);
          continue;
        }
        if ((_ === 0 || _ === 3) && (G < 0 ? (_ = 2, te = -r, oe = -o, B = te, de = 0, ge = 0) : (_ = 1, te = r, oe = o, B = te, de = 0, ge = 0)), _ === 2 && G > 0) {
          _ = 1, de = m, ge = w, m < V && (V = m);
          const fe = (j - V) / (2 * 1 * r), ze = 1 + 0 * Math.pow(fe, 0.8);
          te = (o * ze - c * r * ze - ge + n * de) / (n - c), oe = o * ze + c * (te - r * ze), B = j;
        } else if (_ === 1 && G < 0) {
          _ = 2, de = m, ge = w, m > j && (j = m);
          const fe = (j - V) / (2 * 1 * r), ze = 1 + 0 * Math.pow(fe, 0.8);
          te = (-o * ze + c * r * ze - ge + n * de) / (n - c), oe = -o * ze + c * (te + r * ze), B = V;
        }
        const ae = Math.abs((B - te) / r);
        let Y = s - 0.925 * ae / (0.15 + ae);
        Y < 0.1 && (Y = 0.1);
        const le = (D - de) / (te - de), ue = 1 + Math.pow(Math.abs(le), Y), Z = Math.pow(ue, 1 / Y);
        se = l * le + (1 - l) * le / Z, se = se * (oe - ge) + ge, O.push(se), m = D, w = se, M = V, y = j, p = B, g = te, I = oe, k = de, $ = ge, T = _;
      }
      const h = t.querySelector("#nl-canvas"), u = h.getContext("2d"), E = h.width, P = h.height;
      u.clearRect(0, 0, E, P);
      const R = Math.max(...d.map(Math.abs)), H = Math.max(...O.map(Math.abs)), x = (E - 40) / (2 * R), S = (P - 40) / (2 * H), v = E / 2, L = P / 2;
      u.strokeStyle = "#444", u.lineWidth = 1, u.beginPath(), u.moveTo(20, L), u.lineTo(E - 20, L), u.stroke(), u.beginPath(), u.moveTo(v, 20), u.lineTo(v, P - 20), u.stroke(), u.fillStyle = "#888", u.font = "10px monospace", u.textAlign = "center", u.fillText("\u03B5 (strain)", E - 40, L - 5), u.fillText("\u03C3 (stress)", v + 30, 15), u.fillText(`\xB1${(R * 100).toFixed(1)}%`, E - 30, L + 12), u.fillText(`\xB1${(H / 1e3).toFixed(0)} MPa`, v + 40, 30), u.strokeStyle = "#00ccff", u.lineWidth = 1.5, u.beginPath();
      for (let D = 0; D < d.length; D++) {
        const V = v + d[D] * x, j = L - O[D] * S;
        D === 0 ? u.moveTo(V, j) : u.lineTo(V, j);
      }
      u.stroke(), u.strokeStyle = "#ff333366", u.lineWidth = 1, u.setLineDash([
        4,
        4
      ]), u.beginPath(), u.moveTo(20, L - o * S), u.lineTo(E - 20, L - o * S), u.stroke(), u.beginPath(), u.moveTo(20, L + o * S), u.lineTo(E - 20, L + o * S), u.stroke(), u.setLineDash([]), u.fillStyle = "#ff6666", u.font = "9px monospace", u.fillText(`Fy = ${(o / 1e3).toFixed(0)} MPa`, E - 50, L - o * S - 5);
      const N = t.querySelector("#nl-info");
      N.textContent = `Steel02: Fy=${(o / 1e3).toFixed(0)} MPa, E\u2080=${(n / 1e6).toFixed(0)} GPa, b=${l}, R\u2080=${s} \u2014 ${a} ciclos, amp=${(f * 100).toFixed(1)}%`;
    }
    function Xa() {
      var _a2, _b, _c, _d;
      const t = document.querySelector(".rpt-overlay");
      if (t) {
        t.remove();
        return;
      }
      const o = e.nodes.val, n = e.elements.val, l = ((_a2 = e.elementInputs) == null ? void 0 : _a2.val) || {}, s = ((_b = e.nodeInputs) == null ? void 0 : _b.val) || {}, f = (_c = e.deformOutputs) == null ? void 0 : _c.val;
      if ((_d = e.analyzeOutputs) == null ? void 0 : _d.val, !o.length || !n.length) {
        alert("No hay modelo cargado");
        return;
      }
      const a = $l({
        nodes: o,
        elements: n,
        nodeInputs: s,
        elementInputs: l,
        deformOutputs: f
      });
      document.body.appendChild(a);
    }
    let Oo = null;
    function Ja(t) {
      Oo && Oo.remove();
      const o = document.createElement("div");
      o.style.cssText = "position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background:#1a1a2e;color:#eee;border:2px solid #00ccff;border-radius:8px;padding:16px;z-index:10001;width:320px;font-family:monospace;font-size:12px;box-shadow:0 4px 20px rgba(0,0,0,0.5);";
      const n = gn(), l = hn(), s = Object.entries(n).map(([r, c]) => `<option value="${c}">${r}</option>`).join(""), f = Object.entries(l).map(([r, c]) => `<option value="${c}">${r}</option>`).join("");
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
    `, document.body.appendChild(o), Oo = o;
      const a = o.querySelector("#asgn-type"), i = o.querySelector("#asgn-params");
      function d() {
        const r = a.value;
        let c = "";
        r === "rect" ? c = `<div style="display:flex;gap:6px;"><label>b(m):<input id="ap-b" type="number" value="0.30" step="0.05" min="0.1" max="2" style="width:70px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label>
                <label>h(m):<input id="ap-h" type="number" value="0.50" step="0.05" min="0.1" max="2" style="width:70px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label></div>` : r === "circ" ? c = '<label>d(m):<input id="ap-d" type="number" value="0.40" step="0.05" min="0.1" max="2" style="width:70px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label>' : r === "W" ? c = `<select id="ap-profile" style="background:#333;color:#fff;border:1px solid #555;padding:3px;width:100%;">${s}</select>` : r === "HSS" ? c = `<select id="ap-profile" style="background:#333;color:#fff;border:1px solid #555;padding:3px;width:100%;">${f}</select>` : r === "I-param" ? c = `<div style="display:grid;grid-template-columns:1fr 1fr;gap:4px;">
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
      a.addEventListener("change", d), d(), o.querySelector("#asgn-close").addEventListener("click", () => {
        o.remove(), Oo = null;
      }), o.querySelector("#asgn-apply").addEventListener("click", () => {
        var _a2, _b, _c, _d, _e2, _f, _g, _h;
        const r = a.value, c = {
          secType: r
        };
        r === "rect" ? (c.b = parseFloat(o.querySelector("#ap-b").value), c.h = parseFloat(o.querySelector("#ap-h").value), c.material = 0) : r === "circ" ? (c.b = parseFloat(o.querySelector("#ap-d").value), c.material = 0) : r === "W" || r === "HSS" ? (c.profileIdx = parseInt(o.querySelector("#ap-profile").value), c.material = 1) : r === "I-param" ? (c.bf = parseFloat(o.querySelector("#ap-bf").value), c.hf = parseFloat(o.querySelector("#ap-hf").value), c.tf = parseFloat(o.querySelector("#ap-tf").value), c.tw = parseFloat(o.querySelector("#ap-tw").value), c.material = 1) : r === "tubular" && (c.bc = parseFloat(o.querySelector("#ap-bc").value), c.hc = parseFloat(o.querySelector("#ap-hc").value), c.t = parseFloat(o.querySelector("#ap-t").value), c.material = 1);
        const m = new Array(12).fill(false), w = new Array(12).fill(0);
        o.querySelectorAll("input[data-asgn-rel]").forEach((M) => {
          m[parseInt(M.dataset.asgnRel)] = M.checked;
        }), o.querySelectorAll("input[data-asgn-spr]").forEach((M) => {
          const y = parseFloat(M.value);
          y > 0 && (w[parseInt(M.dataset.asgnSpr)] = y);
        }), c.releases12 = m, c.springs12 = w, c.releaseRotStart = m[4] || m[5], c.releaseRotEnd = m[10] || m[11], c.releaseAxial = m[0], c.releaseTorsion = m[3], c.modI = parseFloat((_a2 = o.querySelector("#asgn-mod-i")) == null ? void 0 : _a2.value) || 1, c.modA = parseFloat((_b = o.querySelector("#asgn-mod-a")) == null ? void 0 : _b.value) || 1, c.modJ = parseFloat((_c = o.querySelector("#asgn-mod-j")) == null ? void 0 : _c.value) || 1, c.modAs2 = parseFloat((_d = o.querySelector("#asgn-mod-as2")) == null ? void 0 : _d.value) ?? 1, c.modAs3 = parseFloat((_e2 = o.querySelector("#asgn-mod-as3")) == null ? void 0 : _e2.value) ?? 1, c.modI3 = parseFloat((_f = o.querySelector("#asgn-mod-i3")) == null ? void 0 : _f.value) || 1, c.modMass = parseFloat((_g = o.querySelector("#asgn-mod-mass")) == null ? void 0 : _g.value) || 1, c.modWeight = parseFloat((_h = o.querySelector("#asgn-mod-weight")) == null ? void 0 : _h.value) || 1, t.forEach((M) => ve.set(M, {
          ...c
        })), o.remove(), Oo = null, uo(), e.elementInputs.val = {
          ...e.elementInputs.val
        };
      }), o.querySelector("#asgn-remove").addEventListener("click", () => {
        t.forEach((r) => ve.delete(r)), o.remove(), Oo = null, uo(), e.elementInputs.val = {
          ...e.elementInputs.val
        };
      });
    }
    let No = null;
    function Ka(t) {
      var _a2, _b, _c;
      No && No.remove();
      const o = e.nodes.val, n = e.elements.val[t];
      if (!n || n.length !== 2) return;
      const l = o[n[0]], s = o[n[1]], f = Math.abs(s[0] - l[0]), a = Math.abs(s[1] - l[1]), i = Math.abs(s[2] - l[2]), d = a > f && a > i, r = Math.sqrt(f * f + a * a + i * i), c = Te.get(t) ?? 0, m = (_c = (_b = (_a2 = e.elementInputs) == null ? void 0 : _a2.val) == null ? void 0 : _b.sectionShapes) == null ? void 0 : _c.get(t), w = (m == null ? void 0 : m.name) || (m ? `${m.type} ${((m.b ?? 0) * 100).toFixed(0)}x${((m.h ?? 0) * 100).toFixed(0)}` : "\u2014"), M = document.createElement("div");
      M.style.cssText = "position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background:#1a1a2e;color:#eee;border:2px solid #ff9900;border-radius:8px;padding:16px;z-index:10000;min-width:280px;font-family:monospace;font-size:13px;box-shadow:0 4px 20px rgba(0,0,0,0.5);", M.innerHTML = `
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
        <b style="color:#ff9900;">Elemento ${t}</b>
        <button id="ep-close" style="background:none;border:none;color:#888;cursor:pointer;font-size:18px;">\u2715</button>
      </div>
      <div style="margin-bottom:8px;">
        <span style="color:#888;">Tipo:</span> ${d ? "Columna" : "Viga"} &nbsp;
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
    `, document.body.appendChild(M), No = M, M.querySelector("#ep-close").addEventListener("click", () => {
        M.remove(), No = null, Mo();
      }), M.querySelector("#ep-delete").addEventListener("click", () => {
        K.add(t), M.remove(), No = null, Mo(), Me();
      }), M.querySelector("#ep-inspect").addEventListener("click", () => {
        M.remove(), No = null, Ws(t);
      });
    }
    setTimeout(() => {
      const t = document.getElementById("viewer");
      if (!t) return;
      const o = t.querySelector("canvas");
      if (!o) return;
      let n = null, l = null;
      const s = 5;
      function f(d) {
        const r = De();
        if (!r) return null;
        const c = r.controls.object, m = new Ee(d[0], d[1], d[2]);
        m.project(c);
        const w = o.getBoundingClientRect();
        return {
          x: (m.x + 1) / 2 * w.width,
          y: (-m.y + 1) / 2 * w.height
        };
      }
      function a(d, r, c, m, w) {
        const M = Math.min(d, c), y = Math.max(d, c), p = Math.min(r, m), g = Math.max(r, m), I = e.nodes.val, k = e.elements.val, $ = [];
        for (let T = 0; T < k.length; T++) {
          const O = k[T], h = O.map((u) => f(I[u])).filter(Boolean);
          if (h.length !== 0) if (w) h.every((E) => E.x >= M && E.x <= y && E.y >= p && E.y <= g) && $.push(T);
          else {
            if (h.some((E) => E.x >= M && E.x <= y && E.y >= p && E.y <= g)) {
              $.push(T);
              continue;
            }
            if (O.length === 2) {
              const E = h[0], P = h[1];
              i(E.x, E.y, P.x, P.y, M, p, y, g) && $.push(T);
            }
          }
        }
        return $;
      }
      function i(d, r, c, m, w, M, y, p) {
        const g = (k, $) => k >= w && k <= y && $ >= M && $ <= p;
        if (g(d, r) || g(c, m)) return true;
        const I = (k, $, T, O, h, u, E, P) => {
          const R = (T - k) * (P - u) - (O - $) * (E - h);
          if (Math.abs(R) < 1e-10) return false;
          const H = ((h - k) * (P - u) - (u - $) * (E - h)) / R, x = ((h - k) * (O - $) - (u - $) * (T - k)) / R;
          return H >= 0 && H <= 1 && x >= 0 && x <= 1;
        };
        return I(d, r, c, m, w, M, y, M) || I(d, r, c, m, y, M, y, p) || I(d, r, c, m, w, p, y, p) || I(d, r, c, m, w, M, w, p);
      }
      o.addEventListener("mousedown", (d) => {
        Tt && (n = {
          x: d.offsetX,
          y: d.offsetY
        });
      }), o.addEventListener("mousemove", (d) => {
        if (eo) {
          const c = De();
          if (!c) return;
          const m = Ns(d.clientX, d.clientY, c.camera, c.rendererElm);
          if (ct.track && m.snapType === "node" && m.nodeIdx !== null && m.nodeIdx !== wo && Pa(m.nodeIdx), ct.track && wo !== null && m.worldPos && m.snapType !== "node") {
            const w = Fa(m.worldPos, wo);
            w && (m.worldPos = w, m.snapType = "grid");
          }
          if (wo !== null && m.worldPos) {
            const w = e.nodes.val[wo];
            w && Os(d.clientX, d.clientY, new Ee(...w), m.worldPos);
          } else if (at !== null && m.worldPos) {
            const w = e.nodes.val[at];
            w && Os(d.clientX, d.clientY, new Ee(...w), m.worldPos);
          } else Ht && (Ht.remove(), Ht = null);
          m.nodeIdx, Bs(m), o.style.cursor = m.snapType !== "free" ? "pointer" : "crosshair";
          return;
        }
        if (!Vt && !Tt) return;
        if (Tt && n) {
          const c = d.offsetX - n.x, m = d.offsetY - n.y;
          if (Math.abs(c) > s || Math.abs(m) > s) {
            l || (l = document.createElement("div"), l.style.cssText = "position:absolute;pointer-events:none;z-index:9999;", o.parentElement.style.position = "relative", o.parentElement.appendChild(l));
            const w = c > 0, M = Math.min(n.x, d.offsetX), y = Math.min(n.y, d.offsetY), p = Math.abs(c), g = Math.abs(m);
            l.style.left = M + "px", l.style.top = y + "px", l.style.width = p + "px", l.style.height = g + "px", l.style.border = w ? "2px solid #3399ff" : "2px dashed #33ff33", l.style.background = w ? "rgba(51,153,255,0.1)" : "rgba(51,255,51,0.1)", o.style.cursor = "crosshair";
            return;
          }
        }
        const r = Vn(d);
        if (r >= 0) Ds(r), o.style.cursor = "pointer";
        else {
          if (At) {
            const c = De();
            c == null ? void 0 : c.scene.remove(At), At = null, c == null ? void 0 : c.render();
          }
          o.style.cursor = Tt ? "crosshair" : "";
        }
      }), o.addEventListener("mouseup", (d) => {
        if (Tt && n) {
          const r = d.offsetX - n.x, c = d.offsetY - n.y;
          if (Math.abs(r) > s || Math.abs(c) > s) {
            const m = r > 0, w = a(n.x, n.y, d.offsetX, d.offsetY, m);
            d.ctrlKey || d.metaKey || (et.clear(), go()), w.forEach((y) => {
              et.has(y) || (et.add(y), jn(y));
            }), ho();
          }
          l && (l.remove(), l = null), n = null, o.style.cursor = "crosshair";
          return;
        }
        n = null;
      }), o.addEventListener("click", (d) => {
        if (eo) {
          const r = De();
          if (!r) return;
          const c = Ns(d.clientX, d.clientY, r.camera, r.rendererElm);
          (c.worldPos || c.nodeIdx !== null) && (Ra(c), Bs(c));
          return;
        }
        if (Tt) {
          if (l) return;
          const r = Vn(d), c = d.ctrlKey || d.metaKey;
          if (r >= 0) {
            if (c) if (et.has(r)) {
              et.delete(r);
              const m = bo.findIndex((w) => w.__elemIdx === r);
              if (m >= 0) {
                const w = De();
                w == null ? void 0 : w.scene.remove(bo[m]), bo[m].geometry.dispose(), bo[m].material.dispose(), bo.splice(m, 1), w == null ? void 0 : w.render();
              }
            } else et.add(r), jn(r);
            else et.clear(), go(), et.add(r), jn(r);
            ho();
          } else c || (et.clear(), go(), ho());
          return;
        }
        if (Vt) {
          const r = Vn(d);
          r >= 0 && (Ds(r), Ka(r));
        }
      });
    }, 500);
    const Ua = ia.v;
    jo.derive(() => {
      var _a2;
      ia.v === Ua && (e.nodes.val, e.elements.val, (_a2 = e.nodeInputs) == null ? void 0 : _a2.val, Ne());
    }), _e.modal = (t) => {
      var _a2, _b;
      if (t === void 0 && (t = !Wt), Wt = t, (_a2 = ye.querySelector("#cad3d-modal")) == null ? void 0 : _a2.classList.toggle("active", Wt), Wt) {
        const n = De();
        ((_b = n == null ? void 0 : n.settings) == null ? void 0 : _b.loads) && (ln = n.settings.loads.rawVal, n.settings.loads.val = false), qn(), ye.querySelector("#cad3d-mode-prev").style.display = "", ye.querySelector("#cad3d-mode-next").style.display = "", ye.querySelector("#cad3d-mode-label").style.display = "";
      } else Rn(), ye.querySelector("#cad3d-mode-prev").style.display = "none", ye.querySelector("#cad3d-mode-next").style.display = "none", ye.querySelector("#cad3d-mode-label").style.display = "none", A && A !== "placa-q4" && A !== "placa-3q" && Me(), setTimeout(() => {
        var _a3;
        const n = De();
        ((_a3 = n == null ? void 0 : n.settings) == null ? void 0 : _a3.loads) && ln && (n.settings.loads.val = true);
      }, 600);
      console.log(`Modal analysis: ${Wt ? "ON" : "OFF"}`);
    }, _e.setMode = (t) => {
      var _a2;
      if (!(ut == null ? void 0 : ut.modeShapes)) {
        console.error("No modal results");
        return;
      }
      Mt = Math.max(0, Math.min(t, ut.modeShapes.length - 1));
      const o = ut.modeShapes[Mt], { extent: n } = fo();
      let l = 0;
      for (let f = 0; f < ao.length; f++) {
        const a = o[f * 6] || 0, i = o[f * 6 + 1] || 0, d = o[f * 6 + 2] || 0;
        l = Math.max(l, Math.sqrt(a * a + i * i + d * d));
      }
      an = l > 1e-12 ? n * 0.05 / l : 1, Ko();
      const s = ye.querySelector("#cad3d-mode-label");
      s && ut.frequencies && (s.textContent = `Modo ${Mt + 1} \u2014 ${ut.frequencies[Mt].toFixed(2)} Hz`), console.log(`Modo ${Mt + 1}: f = ${(_a2 = ut.frequencies) == null ? void 0 : _a2[Mt].toFixed(4)} Hz`);
    }, window.cad = _e, console.log("FEM Studio CLI ready. Type cad.help() for commands."), setTimeout(() => {
      document.body.appendChild(ye), document.body.appendChild(Vo.div);
    }, 0), setTimeout(() => {
      e.nodes.val.length === 0 && (Be("muro-q4"), Kn(), On("muro-q4"), setTimeout(() => {
        A === "muro-q4" && Kt();
      }, 200));
    }, 100);
    const Zo = document.createElement("button");
    Zo.id = "mobile-menu-btn", Zo.innerHTML = "\u2630", Zo.addEventListener("click", () => {
      const t = document.getElementById("cad3d-panel");
      t && (t.classList.toggle("mobile-open"), Zo.innerHTML = t.classList.contains("mobile-open") ? "\u2715" : "\u2630");
    }), document.body.appendChild(Zo);
    const oo = document.createElement("button");
    oo.id = "fullscreen-btn", oo.innerHTML = "\u26F6", oo.title = "Pantalla completa", oo.style.cssText = `
    position: fixed; bottom: 20px; right: 78px; z-index: 9999999;
    width: 48px; height: 48px; border-radius: 50%;
    background: linear-gradient(135deg, #333, #555);
    color: white; border: 3px solid rgba(255,255,255,0.2);
    font-size: 22px; cursor: pointer;
    box-shadow: 0 4px 15px rgba(0,0,0,0.4);
    transition: transform 0.2s, box-shadow 0.2s;
    display: flex; align-items: center; justify-content: center;
  `, oo.addEventListener("mouseenter", () => {
      oo.style.transform = "scale(1.15)";
    }), oo.addEventListener("mouseleave", () => {
      oo.style.transform = "scale(1)";
    }), oo.addEventListener("click", () => {
      document.fullscreenElement ? document.exitFullscreen().catch(() => {
      }) : document.documentElement.requestFullscreen().catch(() => {
      });
    }), document.body.appendChild(oo), document.body.appendChild(ql());
    const Gt = document.createElement("button");
    Gt.id = "lang-toggle-btn", Gt.textContent = ns() === "es" ? "EN" : "ES", Gt.title = ns() === "es" ? "Switch to English" : "Cambiar a Espa\xF1ol", Gt.style.cssText = `
    position: fixed; bottom: 20px; right: 136px; z-index: 9999999;
    width: 48px; height: 48px; border-radius: 50%;
    background: linear-gradient(135deg, #1a4a7a, #2a6ab0);
    color: white; border: 3px solid rgba(255,255,255,0.2);
    font-size: 14px; font-weight: bold; cursor: pointer;
    box-shadow: 0 4px 15px rgba(0,0,0,0.4);
    transition: transform 0.2s, box-shadow 0.2s;
    display: flex; align-items: center; justify-content: center;
  `, Gt.addEventListener("mouseenter", () => {
      Gt.style.transform = "scale(1.15)";
    }), Gt.addEventListener("mouseleave", () => {
      Gt.style.transform = "scale(1)";
    }), Gt.addEventListener("click", () => {
      const t = ns() === "es" ? "en" : "es";
      Al(t), Gt.textContent = t === "es" ? "EN" : "ES", Gt.title = t === "es" ? "Switch to English" : "Cambiar a Espa\xF1ol", Fl();
    }), document.body.appendChild(Gt);
    const Un = new URLSearchParams(window.location.search).get("t");
    Un && setTimeout(() => {
      On(Un), _e.example(Un);
    }, 300);
    const ta = document.createElement("span");
    return ta.style.display = "none", ta;
  };
});
export {
  __tla,
  ma as c,
  lr as g
};
