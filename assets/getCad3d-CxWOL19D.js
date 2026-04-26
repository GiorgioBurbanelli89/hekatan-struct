const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/calcPanel-B5_SSEwc.js","assets/getMesh-CMOA6JCi.js","assets/__vite-browser-external-D7Ct-6yo.js","assets/pureFunctionsAny.generated-DeJSBP3k.js","assets/analyze-BydHtRcI.js","assets/didacticCpp-B5f-GyHC.js","assets/deform-CGyu4ATa.js","assets/cyclicPushoverCpp-9OuQqSct.js"])))=>i.map(i=>d[i]);
import { _ as ra, __tla as __tla_0 } from "./deform-CGyu4ATa.js";
import { v as Ko, P as cn, g as nl, a as sl, o as al } from "./theme-2eEBQPmF.js";
import { G as pn, H as ll, M as ia, D as ca, B as ro, f as Sn, k as rl, r as il, b as xa, V as Ne, z as Lo, l as da, j as pa, I as Jo, d as Xo, c as cl, S as dl, e as pl, F as Oo, L as Uo, a as No, J as fl, y as ul, w as hn, K as ss, p as xn, o as vn, m as ml, n as gl } from "./Text-CRP5ss3E.js";
import { a as fa } from "./exampleVersion-D1A_5i59.js";
import { g as In, b as kn, a as $o } from "./analyze-BydHtRcI.js";
import { d as Ft, p as as, m as bl, s as hl, __tla as __tla_1 } from "./didacticCpp-B5f-GyHC.js";
import { g as Mo, __tla as __tla_2 } from "./getMesh-CMOA6JCi.js";
import { c as xl } from "./renderModalTable-H-0rlxOz.js";
import { n as Bo, s as wo, m as po, t as us } from "./pureFunctionsAny.generated-DeJSBP3k.js";
let ha, gr;
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
  })(),
  (() => {
    try {
      return __tla_2;
    } catch {
    }
  })()
]).then(async () => {
  const fs = [
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
  ], Zo = [
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
  function vl(e, g) {
    return e === "kN" && g === "m" ? "kPa" : e === "kN" && g === "mm" || e === "N" && g === "mm" ? "MPa" : e === "N" && g === "m" ? "Pa" : e === "kip" && g === "in" ? "ksi" : e === "kip" && g === "ft" ? "ksf" : `${e}/${g}\xB2`;
  }
  const qo = {
    E: 2e8,
    G: 77e6,
    A: 0.01,
    Iz: 833e-7,
    Iy: 833e-7,
    J: 141e-6,
    rho: 7.85
  };
  function _o(e, g) {
    const F = fs.find((Q) => Q.id === e), E = Zo.find((Q) => Q.id === g), J = F.toKN, H = E.toM, ee = (Q, we, A) => A / (Math.pow(J, Q) * Math.pow(H, we));
    let U, j;
    switch (e) {
      case "kN":
        U = 10, j = [
          -100,
          100,
          1
        ];
        break;
      case "tonf":
        U = 1, j = [
          -20,
          20,
          0.5
        ];
        break;
      case "kgf":
        U = 1e3, j = [
          -1e4,
          1e4,
          100
        ];
        break;
      case "kip":
        U = 10, j = [
          -200,
          200,
          5
        ];
        break;
      case "lb":
        U = 5e3, j = [
          -5e4,
          5e4,
          500
        ];
        break;
      case "N":
        U = 1e4, j = [
          -1e5,
          1e5,
          1e3
        ];
        break;
    }
    return {
      id: `${e}-${g}`,
      label: `${F.label}, ${E.label}`,
      force: F.label,
      length: E.label,
      stress: vl(e, g),
      moment: `${F.label}\xB7${E.label}`,
      E: ee(1, -2, qo.E),
      G: ee(1, -2, qo.G),
      A: ee(0, 2, qo.A),
      Iz: ee(0, 4, qo.Iz),
      Iy: ee(0, 4, qo.Iy),
      J: ee(0, 4, qo.J),
      rho: ee(1, -4, qo.rho),
      spanRange: E.spanRange,
      heightRange: E.heightRange,
      defaultSpan: E.defaultSpan,
      defaultHeight: E.defaultHeight,
      defaultForce: U,
      forceRange: j,
      galponSpan: E.galponSpan,
      galponLength: E.galponLength,
      galponHeight: E.galponHeight,
      galponRise: E.galponRise
    };
  }
  _o("kN", "m"), _o("kip", "in");
  function yn() {
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
  function yl(e) {
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
  function $l(e) {
    const g = e.force, [F, E, J] = e.forceRange;
    return {
      truss: [
        {
          key: "CM",
          val: -e.defaultForce,
          min: F,
          max: 0,
          step: J,
          label: `CM (${g})`
        },
        {
          key: "CV",
          val: 0,
          min: F,
          max: 0,
          step: J,
          label: `CV (${g})`
        }
      ],
      beams: [
        {
          key: "CM",
          val: 0,
          min: F,
          max: 0,
          step: J,
          label: `CM (${g})`
        },
        {
          key: "CV",
          val: 0,
          min: F,
          max: 0,
          step: J,
          label: `CV (${g})`
        },
        {
          key: "Ex",
          val: e.defaultForce,
          min: F,
          max: E,
          step: J,
          label: `Ex sismo (${g})`
        }
      ],
      "3d": [
        {
          key: "CM",
          val: 0,
          min: F,
          max: 0,
          step: J,
          label: `CM (${g})`
        },
        {
          key: "CV",
          val: 0,
          min: F,
          max: 0,
          step: J,
          label: `CV (${g})`
        },
        {
          key: "Ex",
          val: e.defaultForce * 3,
          min: F,
          max: E,
          step: J,
          label: `Ex sismo (${g})`
        }
      ],
      frame: [
        {
          key: "CM",
          val: -e.defaultForce,
          min: F,
          max: 0,
          step: J,
          label: `CM (${g})`
        },
        {
          key: "CV",
          val: 0,
          min: F,
          max: 0,
          step: J,
          label: `CV (${g})`
        },
        {
          key: "Ex",
          val: 0,
          min: F,
          max: E,
          step: J,
          label: `Ex sismo (${g})`
        }
      ],
      edificio: [
        {
          key: "CM",
          val: -e.defaultForce,
          min: F,
          max: 0,
          step: J,
          label: `CM (${g})`
        },
        {
          key: "CV",
          val: 0,
          min: F,
          max: 0,
          step: J,
          label: `CV (${g})`
        },
        {
          key: "Ex",
          val: 0,
          min: F,
          max: E,
          step: J,
          label: `Ex sismo (${g})`
        },
        {
          key: "Ey",
          val: 0,
          min: F,
          max: E,
          step: J,
          label: `Ey sismo (${g})`
        }
      ],
      galpon: [
        {
          key: "CM",
          val: -e.defaultForce,
          min: F,
          max: 0,
          step: J,
          label: `CM (${g})`
        },
        {
          key: "CV",
          val: 0,
          min: F,
          max: 0,
          step: J,
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
          min: F,
          max: 0,
          step: J,
          label: `CM (${g})`
        }
      ],
      "placa-q4": [
        {
          key: "CM",
          val: 0,
          min: F,
          max: 0,
          step: J,
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
  const Re = 64516e-8, O = 416231e-12, ne = 0.0254, zo = [
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
  function $n() {
    const e = {};
    return zo.forEach((g, F) => {
      g.type === "W" && (e[g.name] = F);
    }), e;
  }
  function Mn() {
    const e = {};
    return zo.forEach((g, F) => {
      g.type === "HSS" && (e[g.name] = F);
    }), e;
  }
  function Ml(e) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    const { nodes: g, elements: F, elementInputs: E, nodeInputs: J, deformOutputs: H } = e, ee = g.length * 6, U = F.length, j = F.filter((fe) => fe.length === 2).length, Q = F.filter((fe) => fe.length >= 3).length, we = document.createElement("div");
    we.className = "rpt-overlay";
    let A = "";
    A += '<button class="rpt-close" id="rpt-close">\u2715 Close</button>', A += "<h1>Finite Element Analysis \u2014 Step-by-Step Report</h1>", A += '<div class="rpt-subtitle">Complete FEM derivation from element formulation to final results</div>', A += '<hr class="rpt-sep"/>', A += "<h2>1. Input Data</h2>", A += '<table class="rpt-info"><tbody>', A += `<tr><td>Number of nodes</td><td class="val">${g.length}</td></tr>`, A += `<tr><td>Number of elements</td><td class="val">${U} (${j} frames, ${Q} shells)</td></tr>`, A += '<tr><td>DOFs per node</td><td class="val">6 (u<sub>x</sub>, u<sub>y</sub>, u<sub>z</sub>, \u03B8<sub>x</sub>, \u03B8<sub>y</sub>, \u03B8<sub>z</sub>)</td></tr>', A += `<tr><td>Total DOFs</td><td class="val">${ee}</td></tr>`, A += "</tbody></table>", A += "<h3>1.1 Node Coordinates</h3>", A += '<table class="rpt-data"><thead><tr><th>Node</th><th>x</th><th>y</th><th>z</th></tr></thead><tbody>', g.forEach((fe, se) => {
      A += `<tr><td>${se}</td><td>${ct(fe[0])}</td><td>${ct(fe[1])}</td><td>${ct(fe[2])}</td></tr>`;
    }), A += "</tbody></table>", A += "<h3>1.2 Element Connectivity</h3>", A += '<table class="rpt-data"><thead><tr><th>Elem</th><th>Type</th><th>Nodes</th><th>L</th><th>E</th><th>A</th><th>I<sub>z</sub></th><th>I<sub>y</sub></th></tr></thead><tbody>', F.forEach((fe, se) => {
      var _a2, _b2, _c2, _d2;
      const q = fe.length === 2, B = fe.map((he) => g[he]), W = q ? Bo(wo(B[1], B[0])) : 0, pe = ((_a2 = E.elasticities) == null ? void 0 : _a2.get(se)) ?? 0, ve = ((_b2 = E.areas) == null ? void 0 : _b2.get(se)) ?? 0, Ae = ((_c2 = E.momentsOfInertiaZ) == null ? void 0 : _c2.get(se)) ?? 0, Ue = ((_d2 = E.momentsOfInertiaY) == null ? void 0 : _d2.get(se)) ?? 0;
      A += `<tr><td>${se}</td><td>${q ? "Frame" : "Shell"}</td><td>${fe.join(" \u2192 ")}</td>`, A += `<td>${ct(W)}</td><td>${ct(pe)}</td><td>${ct(ve)}</td><td>${ct(Ae)}</td><td>${ct(Ue)}</td></tr>`;
    }), A += "</tbody></table>", A += "<h2>2. Element Formulation</h2>", j > 0 && (A += "<h3>2.1 Frame Element (Euler-Bernoulli Beam)</h3>", A += "<p>Each frame element has 2 nodes and 12 DOFs: [u<sub>x</sub>, u<sub>y</sub>, u<sub>z</sub>, \u03B8<sub>x</sub>, \u03B8<sub>y</sub>, \u03B8<sub>z</sub>] per node.</p>", A += "<h4>2.1.1 Shape Functions</h4>", A += "<p><b>Axial</b> (linear interpolation):</p>", A += '<div class="rpt-eq">N\u2081(\u03BE) = 1 \u2212 \u03BE &nbsp;&nbsp;&nbsp; N\u2082(\u03BE) = \u03BE &nbsp;&nbsp;&nbsp; where \u03BE = x/L \u2208 [0, 1]</div>', A += "<p><b>Bending</b> (Hermite cubic polynomials):</p>", A += '<table class="rpt-eq-table"><tbody>', A += '<tr><td class="eq-name">H\u2081(\u03BE)</td><td>= 1 \u2212 3\u03BE\xB2 + 2\u03BE\xB3</td><td class="eq-desc">displacement at node i</td></tr>', A += '<tr><td class="eq-name">H\u2082(\u03BE)</td><td>= L\u03BE(1 \u2212 \u03BE)\xB2</td><td class="eq-desc">rotation at node i</td></tr>', A += '<tr><td class="eq-name">H\u2083(\u03BE)</td><td>= 3\u03BE\xB2 \u2212 2\u03BE\xB3</td><td class="eq-desc">displacement at node j</td></tr>', A += '<tr><td class="eq-name">H\u2084(\u03BE)</td><td>= L\u03BE\xB2(\u03BE \u2212 1)</td><td class="eq-desc">rotation at node j</td></tr>', A += "</tbody></table>", A += El(), A += "<p><b>Torsion</b> (linear): same as axial.</p>", A += "<h4>2.1.2 Strain-Displacement Matrix B</h4>", A += "<p>The B matrix relates nodal displacements to internal strains:</p>", A += '<div class="rpt-eq">\u03B5<sub>axial</sub> = du/dx = (1/L)\xB7[\u22121, 1]\xB7{u<sub>i</sub>, u<sub>j</sub>}</div>', A += '<div class="rpt-eq">\u03BA<sub>bending</sub> = d\xB2v/dx\xB2 = B<sub>b</sub>\xB7{v<sub>i</sub>, \u03B8<sub>i</sub>, v<sub>j</sub>, \u03B8<sub>j</sub>}</div>', A += '<div class="rpt-eq">B<sub>b</sub>(\u03BE) = (1/L\xB2)\xB7[\u22126+12\u03BE, L(\u22124+6\u03BE), 6\u221212\u03BE, L(\u22122+6\u03BE)]</div>', A += '<div class="rpt-eq">\u03C6\u2032<sub>torsion</sub> = d\u03B8<sub>x</sub>/dx = (1/L)\xB7[\u22121, 1]\xB7{\u03B8<sub>xi</sub>, \u03B8<sub>xj</sub>}</div>', A += "<h4>2.1.3 Constitutive Relations D</h4>", A += '<table class="rpt-eq-table"><tbody>', A += '<tr><td class="eq-name">Axial:</td><td>\u03C3 = E\xB7\u03B5</td><td>\u2192 D<sub>axial</sub> = E\xB7A</td></tr>', A += '<tr><td class="eq-name">Bending Z:</td><td>M<sub>z</sub> = EI<sub>z</sub>\xB7\u03BA</td><td>\u2192 D<sub>bz</sub> = E\xB7I<sub>z</sub></td></tr>', A += '<tr><td class="eq-name">Bending Y:</td><td>M<sub>y</sub> = EI<sub>y</sub>\xB7\u03BA</td><td>\u2192 D<sub>by</sub> = E\xB7I<sub>y</sub></td></tr>', A += '<tr><td class="eq-name">Torsion:</td><td>T = GJ\xB7\u03C6\u2032</td><td>\u2192 D<sub>torsion</sub> = G\xB7J</td></tr>', A += "</tbody></table>", A += "<h4>2.1.4 Local Stiffness Matrix K<sub>local</sub></h4>", A += "<p>Obtained by analytical integration:</p>", A += '<div class="rpt-eq rpt-eq-highlight">K<sub>local</sub> = \u222B\u2080\u1D38 B\u1D40\xB7D\xB7B dx</div>', A += "<p>Result for Euler-Bernoulli beam (12\xD712 symmetric):</p>", A += '<div class="rpt-eq-small">', A += "K[0,0] = EA/L &nbsp;&nbsp; K[1,1] = 12EI<sub>z</sub>/L\xB3 &nbsp;&nbsp; K[2,2] = 12EI<sub>y</sub>/L\xB3 &nbsp;&nbsp; K[3,3] = GJ/L<br/>", A += "K[4,4] = 4EI<sub>y</sub>/L &nbsp;&nbsp; K[5,5] = 4EI<sub>z</sub>/L &nbsp;&nbsp; K[1,5] = 6EI<sub>z</sub>/L\xB2 &nbsp;&nbsp; K[2,4] = \u22126EI<sub>y</sub>/L\xB2", A += "</div>", A += "<h4>2.1.5 Transformation Matrix T</h4>", A += "<p>Direction cosines of element axis:</p>", A += '<div class="rpt-eq">l = (x<sub>j</sub>\u2212x<sub>i</sub>)/L &nbsp;&nbsp; m = (y<sub>j</sub>\u2212y<sub>i</sub>)/L &nbsp;&nbsp; n = (z<sub>j</sub>\u2212z<sub>i</sub>)/L &nbsp;&nbsp; D = \u221A(l\xB2+m\xB2)</div>', A += '<div class="rpt-eq">\u03BB = [l, m, n; \u2212m/D, l/D, 0; \u2212ln/D, \u2212mn/D, D] &nbsp;&nbsp; (3\xD73)</div>', A += '<div class="rpt-eq rpt-eq-highlight">T = I\u2084 \u2297 \u03BB &nbsp;&nbsp; (12\xD712 block-diagonal, Kronecker product)</div>', A += "<p>Special case for vertical elements (n = \xB11): \u03BB uses fixed axes.</p>", A += "<h4>2.1.6 Global Stiffness Matrix</h4>", A += '<div class="rpt-eq rpt-eq-highlight">K<sub>global</sub> = T\u1D40 \xB7 K<sub>local</sub> \xB7 T</div>'), A += "<h2>3. Numerical Results per Element</h2>", A += "<p>For each element, we compute K<sub>local</sub>, T, and K<sub>global</sub> = T\u1D40\xB7K\xB7T with the actual properties:</p>";
    for (let fe = 0; fe < U; fe++) {
      const se = F[fe], q = se.map((pt) => g[pt]);
      if (!(se.length === 2)) continue;
      const W = Bo(wo(q[1], q[0])), pe = ((_a = E.elasticities) == null ? void 0 : _a.get(fe)) ?? 0, ve = ((_b = E.areas) == null ? void 0 : _b.get(fe)) ?? 0, Ae = ((_c = E.momentsOfInertiaZ) == null ? void 0 : _c.get(fe)) ?? 0, Ue = ((_d = E.momentsOfInertiaY) == null ? void 0 : _d.get(fe)) ?? 0, he = ((_e = E.shearModuli) == null ? void 0 : _e.get(fe)) ?? 0, je = ((_f = E.torsionalConstants) == null ? void 0 : _f.get(fe)) ?? 0;
      let We = null, ge = null, Ie = null;
      try {
        We = In(q, E, fe), ge = kn(q), Ie = po(us(ge), po(We, ge));
      } catch {
        continue;
      }
      const Le = wo(q[1], q[0]), Xe = Le[0] / W, dt = Le[1] / W, Ke = Le[2] / W;
      A += '<div class="rpt-elem-block">', A += `<h3 class="rpt-elem-title" data-toggle="elem${fe}">\u25B6 Element ${fe} \u2014 Nodes ${se[0]} \u2192 ${se[1]}, L = ${ct(W)}</h3>`, A += `<div id="rpt-elem${fe}" class="rpt-elem-body" style="display:none">`, A += "<h4>Properties (numerical substitution)</h4>", A += '<div class="rpt-eq-small">', A += `E = ${ct(pe)} &nbsp;&nbsp; A = ${ct(ve)} &nbsp;&nbsp; I<sub>z</sub> = ${ct(Ae)} &nbsp;&nbsp; I<sub>y</sub> = ${ct(Ue)} &nbsp;&nbsp; G = ${ct(he)} &nbsp;&nbsp; J = ${ct(je)}<br/>`, A += `EA/L = ${ct(pe)}\xB7${ct(ve)}/${ct(W)} = <b>${ct(pe * ve / W)}</b><br/>`, A += `12EI<sub>z</sub>/L\xB3 = 12\xB7${ct(pe)}\xB7${ct(Ae)}/${ct(W)}\xB3 = <b>${ct(12 * pe * Ae / W ** 3)}</b><br/>`, A += `12EI<sub>y</sub>/L\xB3 = 12\xB7${ct(pe)}\xB7${ct(Ue)}/${ct(W)}\xB3 = <b>${ct(12 * pe * Ue / W ** 3)}</b><br/>`, A += `GJ/L = ${ct(he)}\xB7${ct(je)}/${ct(W)} = <b>${ct(he * je / W)}</b>`, A += "</div>", A += "<h4>Direction cosines</h4>", A += `<div class="rpt-eq-small">l = ${wn(Xe)}, m = ${wn(dt)}, n = ${wn(Ke)}, D = ${wn(Math.sqrt(Xe ** 2 + dt ** 2))}</div>`, A += "<h4>K<sub>local</sub> (12\xD712)</h4>", A += ls(We, 12), A += "<h4>T \u2014 Transformation (12\xD712)</h4>", A += ls(ge, 12), A += "<h4>K<sub>global</sub> = T\u1D40 \xB7 K<sub>local</sub> \xB7 T</h4>", A += ls(Ie, 12), A += "<h4>Assembly</h4>", A += `<div class="rpt-eq-small">Global DOFs: node ${se[0]} \u2192 [${se[0] * 6}..${se[0] * 6 + 5}], node ${se[1]} \u2192 [${se[1] * 6}..${se[1] * 6 + 5}]</div>`, A += "</div></div>";
    }
    A += "<h2>4. Global Assembly</h2>", A += `<div class="rpt-eq rpt-eq-highlight">K<sub>total</sub> = \u03A3<sub>e=0</sub><sup>${U - 1}</sup> (T<sub>e</sub>\u1D40 \xB7 k<sub>e</sub> \xB7 T<sub>e</sub>)</div>`, A += "<p>Each element contributes its K<sub>global</sub> to the positions determined by its node DOF indices.</p>", A += Sl(F, g.length), A += "<h2>5. Boundary Conditions</h2>";
    const Y = [
      "u<sub>x</sub>",
      "u<sub>y</sub>",
      "u<sub>z</sub>",
      "\u03B8<sub>x</sub>",
      "\u03B8<sub>y</sub>",
      "\u03B8<sub>z</sub>"
    ], Se = [];
    if (A += "<h3>5.1 Supports (fixed DOFs)</h3>", J.supports && J.supports.size > 0) {
      A += '<table class="rpt-data"><thead><tr><th>Node</th>';
      for (const fe of Y) A += `<th>${fe}</th>`;
      A += "</tr></thead><tbody>", J.supports.forEach((fe, se) => {
        A += `<tr><td>${se}</td>`, fe.forEach((q, B) => {
          q && Se.push(se * 6 + B), A += `<td class="${q ? "fixed" : ""}">${q ? "Fixed" : "Free"}</td>`;
        }), A += "</tr>";
      }), A += "</tbody></table>";
    }
    if (A += `<div class="rpt-eq-small">Fixed DOFs: [${Se.join(", ")}] \u2192 ${Se.length} constraints<br/>`, A += `Free DOFs: ${ee} \u2212 ${Se.length} = <b>${ee - Se.length}</b></div>`, A += "<h3>5.2 Applied Loads</h3>", J.loads && J.loads.size > 0) {
      A += '<table class="rpt-data"><thead><tr><th>Node</th>';
      const fe = [
        "F<sub>x</sub>",
        "F<sub>y</sub>",
        "F<sub>z</sub>",
        "M<sub>x</sub>",
        "M<sub>y</sub>",
        "M<sub>z</sub>"
      ];
      for (const se of fe) A += `<th>${se}</th>`;
      A += "</tr></thead><tbody>", J.loads.forEach((se, q) => {
        A += `<tr><td>${q}</td>`, se.forEach((B) => {
          const W = Math.abs(B) > 1e-10;
          A += `<td class="${W ? "nz" : ""}">${W ? ct(B) : "0"}</td>`;
        }), A += "</tr>";
      }), A += "</tbody></table>";
    }
    if (A += "<h2>6. Solution</h2>", A += "<p>After removing fixed DOFs, the reduced system is:</p>", A += '<div class="rpt-eq rpt-eq-highlight">K<sub>free</sub> \xB7 u<sub>free</sub> = F<sub>free</sub></div>', A += "<p>Solved using LU decomposition with partial pivoting (sparse matrix).</p>", A += "<h3>6.1 Nodal Displacements</h3>", H == null ? void 0 : H.deformations) {
      A += '<table class="rpt-data"><thead><tr><th>Node</th>';
      for (const fe of Y) A += `<th>${fe}</th>`;
      A += "</tr></thead><tbody>", H.deformations.forEach((fe, se) => {
        A += `<tr><td>${se}</td>`, fe.forEach((q) => {
          const B = Math.abs(q) > 1e-10;
          A += `<td class="${B ? "nz" : ""}">${ct(q, 6)}</td>`;
        }), A += "</tr>";
      }), A += "</tbody></table>";
    }
    if (A += "<h3>6.2 Reactions</h3>", A += '<div class="rpt-eq">R = K<sub>total</sub> \xB7 u (extract at fixed DOFs)</div>', H == null ? void 0 : H.reactions) {
      A += '<table class="rpt-data"><thead><tr><th>Node</th>';
      for (const fe of Y) A += `<th>${fe}</th>`;
      A += "</tr></thead><tbody>", H.reactions.forEach((fe, se) => {
        A += `<tr><td>${se}</td>`, fe.forEach((q) => {
          const B = Math.abs(q) > 1e-10;
          A += `<td class="${B ? "nz-react" : ""}">${B ? ct(q, 4) : "0"}</td>`;
        }), A += "</tr>";
      }), A += "</tbody></table>";
    }
    if (A += "<h2>7. Internal Forces</h2>", A += "<p>For each element, transform global displacements to local and multiply by K<sub>local</sub>:</p>", A += '<div class="rpt-eq">u<sub>local</sub> = T \xB7 u<sub>global</sub></div>', A += '<div class="rpt-eq rpt-eq-highlight">f<sub>local</sub> = K<sub>local</sub> \xB7 u<sub>local</sub></div>', H == null ? void 0 : H.deformations) {
      const fe = [
        "N",
        "V<sub>y</sub>",
        "V<sub>z</sub>",
        "M<sub>x</sub>",
        "M<sub>y</sub>",
        "M<sub>z</sub>"
      ];
      A += '<table class="rpt-data"><thead><tr><th>Elem</th><th>Nodes</th>';
      for (const se of fe) A += `<th>${se}<sub>i</sub></th>`;
      for (const se of fe) A += `<th>${se}<sub>j</sub></th>`;
      A += "</tr></thead><tbody>";
      for (let se = 0; se < U; se++) {
        const q = F[se];
        if (q.length !== 2) continue;
        const B = q.map((W) => g[W]);
        try {
          const W = In(B, E, se), pe = kn(B), ve = [];
          for (const he of q) {
            const je = ((_g = H.deformations) == null ? void 0 : _g.get(he)) || [
              0,
              0,
              0,
              0,
              0,
              0
            ];
            ve.push(...je);
          }
          const Ae = po(pe, ve), Ue = po(W, Ae);
          A += `<tr><td>${se}</td><td>${q.join("\u2192")}</td>`;
          for (let he = 0; he < 12; he++) {
            const je = Math.abs(Ue[he]) > 1e-10;
            A += `<td class="${je ? "nz" : ""}">${ct(Ue[he], 2)}</td>`;
          }
          A += "</tr>";
        } catch {
        }
      }
      A += "</tbody></table>";
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
    return we.innerHTML = me + A, (_h = we.querySelector("#rpt-close")) == null ? void 0 : _h.addEventListener("click", () => we.remove()), we.querySelectorAll("[data-toggle]").forEach((fe) => {
      fe.addEventListener("click", () => {
        const se = fe.dataset.toggle, q = we.querySelector(`#rpt-${se}`);
        if (q) {
          const B = q.style.display !== "none";
          q.style.display = B ? "none" : "", fe.textContent = fe.textContent.replace(/^[▼▶]/, B ? "\u25B6" : "\u25BC");
        }
      });
    }), we;
  }
  function ct(e, g = 2) {
    return Math.abs(e) < 1e-10 ? "0" : Math.abs(e) >= 1e7 || Math.abs(e) < 0.01 && e !== 0 ? e.toExponential(g) : e.toFixed(g);
  }
  function wn(e) {
    return Math.abs(e) < 1e-10 ? "0" : e.toFixed(4);
  }
  function ls(e, g) {
    var _a;
    const F = Math.min(g, 12);
    let E = '<div style="overflow-x:auto"><table class="rpt-mtx">';
    for (let J = 0; J < F; J++) {
      E += "<tr>";
      for (let H = 0; H < F; H++) {
        const ee = ((_a = e[J]) == null ? void 0 : _a[H]) ?? 0, U = Math.abs(ee) < 1e-10;
        E += `<td class="${U ? "z" : ""} ${J === H && !U ? "diag" : ""}">${U ? "0" : wl(ee)}</td>`;
      }
      E += "</tr>";
    }
    return E += "</table>", g > F && (E += `<div style="color:#888;font-size:9pt">(showing ${F}\xD7${F} of ${g}\xD7${g})</div>`), E += "</div>", E;
  }
  function wl(e) {
    return Math.abs(e) >= 1e6 || Math.abs(e) < 0.01 && e !== 0 ? e.toExponential(1) : Math.abs(e) >= 100 ? e.toFixed(0) : e.toFixed(2);
  }
  function El() {
    const ee = [
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
    let U = '<svg viewBox="0 0 600 180" style="width:100%;max-width:600px;border:1px solid #ddd;border-radius:4px;margin:8px 0;background:#fafafa">';
    U += `<line x1="30" y1="${180 / 2}" x2="570" y2="${180 / 2}" stroke="#ccc" stroke-width="1"/>`, U += '<line x1="30" y1="20" x2="30" y2="160" stroke="#ccc" stroke-width="1"/>', U += `<text x="${600 / 2}" y="175" fill="#888" font-size="10" text-anchor="middle" font-family="sans-serif">\u03BE (0 \u2192 1)</text>`, U += `<text x="25" y="${180 / 2 - 60 - 5}" fill="#888" font-size="9" text-anchor="end" font-family="sans-serif">1</text>`, U += `<text x="25" y="${180 / 2 + 4}" fill="#888" font-size="9" text-anchor="end" font-family="sans-serif">0</text>`;
    for (const j of ee) {
      let Q = "";
      for (let Se = 0; Se <= 80; Se++) {
        const me = Se / 80, fe = 30 + me * 540, se = 180 / 2 - j.fn(me) * 60;
        Q += (Se === 0 ? "M" : "L") + `${fe.toFixed(1)},${se.toFixed(1)}`;
      }
      U += `<path d="${Q}" fill="none" stroke="${j.color}" stroke-width="2.5"/>`;
      const we = 0.75, A = 30 + we * 540 + 8, Y = 180 / 2 - j.fn(we) * 60 - 6;
      U += `<text x="${A}" y="${Y}" fill="${j.color}" font-size="11" font-weight="bold" font-family="sans-serif">${j.name}</text>`;
    }
    return U += "</svg>", U;
  }
  function Sl(e, g) {
    const F = g * 6, E = Math.min(F, 30);
    let J = "<p>Assembly contribution map (number = how many elements contribute to each K<sub>total</sub> entry):</p>";
    J += '<div style="overflow-x:auto"><table class="rpt-assembly-map">', J += "<tr><td></td>";
    for (let ee = 0; ee < E; ee++) J += `<td style="color:#003366;font-weight:bold;font-size:7px">${ee}</td>`;
    J += "</tr>";
    const H = Array.from({
      length: E
    }, () => Array(E).fill(0));
    for (let ee = 0; ee < e.length; ee++) {
      const U = e[ee].map((j) => j * 6);
      for (const j of U) for (const Q of U) for (let we = 0; we < 6; we++) for (let A = 0; A < 6; A++) {
        const Y = j + we, Se = Q + A;
        Y < E && Se < E && H[Y][Se]++;
      }
    }
    for (let ee = 0; ee < E; ee++) {
      J += `<tr><td style="color:#003366;font-weight:bold;font-size:7px">${ee}</td>`;
      for (let U = 0; U < E; U++) {
        const j = H[ee][U], Q = j === 0 ? "#fff" : j === 1 ? "#e8f0fe" : j === 2 ? "#c6dcf5" : "#a0c4e8", we = j === 0 ? "" : j.toString();
        J += `<td style="background:${Q};color:#003366">${we}</td>`;
      }
      J += "</tr>";
    }
    return J += "</table></div>", F > E && (J += `<div style="color:#888;font-size:9pt">(showing ${E}\xD7${E} of ${F}\xD7${F})</div>`), J;
  }
  let rs = false;
  function Il(e) {
    if (rs || window.katex) {
      rs = true, e();
      return;
    }
    const g = document.createElement("link");
    g.rel = "stylesheet", g.href = "https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css", document.head.appendChild(g);
    const F = document.createElement("script");
    F.src = "https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.js", F.onload = () => {
      rs = true, e();
    }, document.head.appendChild(F);
  }
  function ua(e, g = false) {
    try {
      if (window.katex) return window.katex.renderToString(e, {
        displayMode: g,
        throwOnError: false
      });
    } catch {
    }
    return `<code class="er-tex-fallback">${e}</code>`;
  }
  function kl(e, g, F, E, J, H) {
    var _a, _b, _c, _d, _e, _f;
    const ee = F[e], U = ee.map((ge) => g[ge]), j = ee.length === 2, Q = j ? Bo(wo(U[1], U[0])) : 0, we = ((_a = E.elasticities) == null ? void 0 : _a.get(e)) ?? 0, A = ((_b = E.areas) == null ? void 0 : _b.get(e)) ?? 0, Y = ((_c = E.momentsOfInertiaZ) == null ? void 0 : _c.get(e)) ?? 0, Se = ((_d = E.momentsOfInertiaY) == null ? void 0 : _d.get(e)) ?? 0, me = ((_e = E.shearModuli) == null ? void 0 : _e.get(e)) ?? 0, fe = ((_f = E.torsionalConstants) == null ? void 0 : _f.get(e)) ?? 0;
    let se = null, q = null, B = null;
    try {
      se = In(U, E, e), q = kn(U), B = po(us(q), po(se, q));
    } catch {
    }
    const W = j ? wo(U[1], U[0]) : [
      0,
      0,
      0
    ], pe = Q > 0 ? W[0] / Q : 0, ve = Q > 0 ? W[1] / Q : 0, Ae = Q > 0 ? W[2] / Q : 0, Ue = Math.sqrt(pe ** 2 + ve ** 2), he = [];
    if ((J == null ? void 0 : J.deformations) && j) for (const ge of ee) {
      const Ie = J.deformations.get(ge) || [
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
        je = po(q, he);
      } catch {
        je = Array(12).fill(0);
      }
      try {
        We = po(se, je);
      } catch {
        We = Array(12).fill(0);
      }
    }
    return {
      elemIdx: e,
      elem: ee,
      elmNodes: U,
      isFrame: j,
      L: Q,
      E: we,
      A,
      Iz: Y,
      Iy: Se,
      G: me,
      J: fe,
      kLocal: se,
      T: q,
      kGlobal: B,
      l: pe,
      m: ve,
      n: Ae,
      D: Ue,
      uGlobal: he,
      uLocal: je,
      fLocal: We,
      dOut: J,
      aOut: H,
      totalNodes: g.length
    };
  }
  function Tl(e, g, F, E, J, H) {
    var _a, _b;
    const ee = kl(e, g, F, E, J, H), U = document.createElement("div");
    return U.className = "er-panel", U.innerHTML = Cl + `
    <div class="er-header">
      <span class="er-badge">Element ${e}</span>
      <span class="er-type">${ee.isFrame ? "Frame" : "Shell"} \u2014 Nodes ${ee.elem.join(" \u2192 ")} \u2014 L = ${Je(ee.L)}</span>
      <button class="er-fullscreen" id="er-fullscreen" title="Pantalla completa">\u26F6</button>
      <button class="er-close" id="er-close">\u2715</button>
    </div>
    <div class="er-tabs">
      <button class="er-tab active" data-tab="tabla">Tabla</button>
      <button class="er-tab" data-tab="math">Matematica Explicada</button>
      <button class="er-tab" data-tab="resumen">Resumen</button>
    </div>
    <div class="er-body" id="er-body-tabla">${Al(ee)}</div>
    <div class="er-body" id="er-body-math" style="display:none">${ma(ee)}</div>
    <div class="er-body" id="er-body-resumen" style="display:none">${Ll(ee)}</div>
  `, U.querySelectorAll(".er-tab").forEach((j) => {
      j.addEventListener("click", () => {
        U.querySelectorAll(".er-tab").forEach((we) => we.classList.remove("active")), j.classList.add("active");
        const Q = j.dataset.tab;
        U.querySelectorAll(".er-body").forEach((we) => we.style.display = "none"), U.querySelector(`#er-body-${Q}`).style.display = "";
      });
    }), (_a = U.querySelector("#er-close")) == null ? void 0 : _a.addEventListener("click", () => U.remove()), (_b = U.querySelector("#er-fullscreen")) == null ? void 0 : _b.addEventListener("click", () => {
      const j = U.classList.toggle("er-fullscreen-mode"), Q = U.querySelector("#er-fullscreen");
      Q && (Q.textContent = j ? "\u22A1" : "\u26F6");
    }), setTimeout(() => {
      const j = U.querySelector("#er-sf-canvas");
      j && is(j);
      const Q = U.querySelector("#er-sf-canvas-math");
      Q && is(Q);
    }, 50), Il(() => {
      const j = U.querySelector("#er-body-math");
      j && (j.innerHTML = ma(ee)), setTimeout(() => {
        const Q = U.querySelector("#er-sf-canvas-math");
        Q && is(Q);
      }, 50), U.querySelectorAll(".er-deriv-header").forEach((Q) => {
        Q.addEventListener("click", () => {
          const we = Q.dataset.toggle, A = U.querySelector(`#er-${we}`);
          A && (A.style.display = A.style.display === "none" ? "" : "none");
        });
      });
    }), U;
  }
  function Al(e) {
    let g = "";
    if (g += '<div class="er-section-title">1. Propiedades</div>', g += '<table class="er-props">', g += `<tr><td>E</td><td>${Je(e.E)}</td><td>A</td><td>${Je(e.A)}</td></tr>`, g += `<tr><td>I<sub>z</sub></td><td>${Je(e.Iz)}</td><td>I<sub>y</sub></td><td>${Je(e.Iy)}</td></tr>`, g += `<tr><td>G</td><td>${Je(e.G)}</td><td>J</td><td>${Je(e.J)}</td></tr>`, g += "</table>", e.kLocal && (g += `<div class="er-section-title">2. K<sub>local</sub> (${e.kLocal.length}\xD7${e.kLocal.length})</div>`, g += fn(e.kLocal)), e.T && (g += '<div class="er-section-title">3. T \u2014 Transformaci\xF3n</div>', g += fn(e.T)), e.kGlobal && (g += '<div class="er-section-title">4. K<sub>global</sub> = T<sup>T</sup>\xB7K\xB7T</div>', g += fn(e.kGlobal)), g += '<div class="er-section-title">5. Desplazamientos</div>', e.uGlobal.length > 0) {
      const F = [
        "u<sub>x</sub>",
        "u<sub>y</sub>",
        "u<sub>z</sub>",
        "\u03B8<sub>x</sub>",
        "\u03B8<sub>y</sub>",
        "\u03B8<sub>z</sub>"
      ];
      for (let E = 0; E < e.elem.length; E++) {
        g += `<div class="er-sub">Nodo ${e.elem[E]}: `;
        for (let J = 0; J < 6; J++) {
          const H = e.uGlobal[E * 6 + J];
          g += `${F[J]}=<span class="${Math.abs(H) > 1e-10 ? "nz" : ""}">${Je(H, 6)}</span> `;
        }
        g += "</div>";
      }
    } else g += '<div class="er-sub">Sin an\xE1lisis</div>';
    if (g += '<div class="er-section-title">6. Fuerzas internas</div>', e.fLocal.length > 0 && e.fLocal.some((F) => F !== 0)) {
      const F = [
        "N",
        "V<sub>y</sub>",
        "V<sub>z</sub>",
        "M<sub>x</sub>",
        "M<sub>y</sub>",
        "M<sub>z</sub>"
      ];
      g += '<table class="er-forces"><tr><th></th>';
      for (const E of F) g += `<th>${E}</th>`;
      g += "</tr>", g += "<tr><td>Nodo i</td>";
      for (let E = 0; E < 6; E++) g += `<td class="${Math.abs(e.fLocal[E]) > 1e-10 ? "nz" : ""}">${Je(e.fLocal[E], 3)}</td>`;
      g += "</tr><tr><td>Nodo j</td>";
      for (let E = 6; E < 12; E++) g += `<td class="${Math.abs(e.fLocal[E]) > 1e-10 ? "nz" : ""}">${Je(e.fLocal[E], 3)}</td>`;
      g += "</tr></table>";
    } else g += '<div class="er-sub">Sin an\xE1lisis</div>';
    return g;
  }
  function ma(e) {
    if (!e.isFrame) return '<div class="er-sub">Shell element math: coming soon</div>';
    let g = "";
    const F = (we) => ua(we), E = (we) => ua(we, true);
    g += '<div class="er-section-title">1. Geometria del elemento</div>', g += "<p>Viga Euler-Bernoulli con 2 nodos y 6 GDL por nodo:</p>", g += `<div class="er-eq">${E("\\text{DOFs} = [u_x,\\, u_y,\\, u_z,\\, \\theta_x,\\, \\theta_y,\\, \\theta_z] \\quad \\Rightarrow \\quad 12 \\text{ GDL totales}")}</div>`, g += '<div class="er-eq-num">', g += `${F("\\text{Nodo } i")} = (${e.elmNodes[0].map((we) => Je(we)).join(", ")})<br/>`, g += `${F("\\text{Nodo } j")} = (${e.elmNodes[1].map((we) => Je(we)).join(", ")})<br/>`, g += `${E(`L = \\sqrt{(x_j - x_i)^2 + (y_j - y_i)^2 + (z_j - z_i)^2} = \\mathbf{${Je(e.L)}}`)}`, g += "</div>", g += '<div class="er-section-title">2. Funciones de forma</div>', g += "<p>La viga usa <b>interpolacion lineal</b> para axial/torsion y <b>polinomios cubicos de Hermite</b> para flexion.</p>", g += '<div class="er-subsec">2.1 Axial y Torsion (lineal)</div>', g += `<div class="er-eq">${E("N_1(\\xi) = 1 - \\xi \\qquad N_2(\\xi) = \\xi \\qquad \\text{donde } \\xi = \\frac{x}{L} \\in [0,1]")}</div>`, g += "<p>Primera derivada:</p>", g += `<div class="er-eq">${E("\\frac{dN_1}{d\\xi} = -1 \\qquad \\frac{dN_2}{d\\xi} = 1")}</div>`, g += '<div class="er-subsec">2.2 Flexion (Hermite cubicos)</div>', g += `<p>Las funciones de Hermite garantizan continuidad ${F("C^1")} (desplazamiento y pendiente continuos):</p>`, g += `<div class="er-eq">${E("H_1(\\xi) = 1 - 3\\xi^2 + 2\\xi^3 \\qquad \\text{(desplazamiento nodo } i\\text{)}")}</div>`, g += `<div class="er-eq">${E("H_2(\\xi) = L\\,\\xi\\,(1-\\xi)^2 \\qquad \\text{(rotacion nodo } i\\text{)}")}</div>`, g += `<div class="er-eq">${E("H_3(\\xi) = 3\\xi^2 - 2\\xi^3 \\qquad \\text{(desplazamiento nodo } j\\text{)}")}</div>`, g += `<div class="er-eq">${E("H_4(\\xi) = L\\,\\xi^2(\\xi - 1) \\qquad \\text{(rotacion nodo } j\\text{)}")}</div>`, g += `<div class="er-subsec">Derivadas segunda (curvatura ${F("\\kappa = \\frac{d^2v}{dx^2}")}):</div>`, g += `<div class="er-eq">${E("H_1'' = \\frac{-6}{L^2}(1-2\\xi) \\qquad H_2'' = \\frac{-2}{L}(2-3\\xi)")}</div>`, g += `<div class="er-eq">${E("H_3'' = \\frac{6}{L^2}(1-2\\xi) \\qquad H_4'' = \\frac{-2}{L}(1-3\\xi)")}</div>`, g += '<canvas id="er-sf-canvas-math" width="500" height="250" style="width:100%;border:1px solid var(--fem-border);border-radius:4px;margin:8px 0;"></canvas>', g += '<div class="er-section-title">3. Matriz B (strain-displacement)</div>', g += "<p>La matriz B relaciona desplazamientos nodales con deformaciones internas:</p>", g += `<div class="er-eq">${E("\\boldsymbol{\\varepsilon} = \\mathbf{B} \\cdot \\mathbf{u}")}</div>`, g += '<div class="er-subsec">3.1 Deformacion axial</div>', g += `<div class="er-eq">${E("\\varepsilon_{axial} = \\frac{du}{dx} = \\frac{1}{L} \\begin{bmatrix} -1 & 1 \\end{bmatrix} \\begin{Bmatrix} u_i \\\\ u_j \\end{Bmatrix}")}</div>`, g += `<div class="er-subsec">3.2 Curvatura por flexion (plano XY \u2192 ${F("I_z")})</div>`, g += `<div class="er-eq">${E("\\kappa_z = \\frac{d^2 v}{dx^2} = \\mathbf{B}_{bz} \\cdot \\begin{Bmatrix} v_i \\\\ \\theta_{zi} \\\\ v_j \\\\ \\theta_{zj} \\end{Bmatrix}")}</div>`, g += `<div class="er-eq">${E("\\mathbf{B}_{bz}(\\xi) = \\frac{1}{L^2} \\begin{bmatrix} H_1'' & H_2'' & H_3'' & H_4'' \\end{bmatrix}")}</div>`, g += `<div class="er-subsec">3.3 Curvatura (plano XZ \u2192 ${F("I_y")})</div>`, g += `<div class="er-eq">${E("\\kappa_y = \\frac{d^2 w}{dx^2} = \\mathbf{B}_{by} \\cdot \\begin{Bmatrix} w_i \\\\ \\theta_{yi} \\\\ w_j \\\\ \\theta_{yj} \\end{Bmatrix}")}</div>`, g += '<div class="er-subsec">3.4 Torsion</div>', g += `<div class="er-eq">${E("\\phi' = \\frac{d\\theta_x}{dx} = \\frac{1}{L} \\begin{bmatrix} -1 & 1 \\end{bmatrix} \\begin{Bmatrix} \\theta_{xi} \\\\ \\theta_{xj} \\end{Bmatrix}")}</div>`, g += '<div class="er-section-title">4. Relaciones constitutivas D</div>', g += "<p>Cada modo de deformacion tiene su rigidez material:</p>", g += `<div class="er-eq">${E(`\\text{Axial: } \\sigma = E \\cdot \\varepsilon \\;\\Rightarrow\\; D_{ax} = EA = ${Je(e.E)} \\times ${Je(e.A)} = \\mathbf{${Je(e.E * e.A)}}`)}</div>`, g += `<div class="er-eq">${E(`\\text{Flex Z: } M_z = EI_z \\cdot \\kappa \\;\\Rightarrow\\; D_{bz} = EI_z = ${Je(e.E)} \\times ${Je(e.Iz)} = \\mathbf{${Je(e.E * e.Iz)}}`)}</div>`, g += `<div class="er-eq">${E(`\\text{Flex Y: } M_y = EI_y \\cdot \\kappa \\;\\Rightarrow\\; D_{by} = EI_y = ${Je(e.E)} \\times ${Je(e.Iy)} = \\mathbf{${Je(e.E * e.Iy)}}`)}</div>`, g += `<div class="er-eq">${E(`\\text{Torsion: } T = GJ \\cdot \\phi' \\;\\Rightarrow\\; D_t = GJ = ${Je(e.G)} \\times ${Je(e.J)} = \\mathbf{${Je(e.G * e.J)}}`)}</div>`, g += `<div class="er-section-title">5. Integracion \u2192 ${F("\\mathbf{K}_{local}")}</div>`, g += "<p>La matriz de rigidez local se obtiene integrando analiticamente:</p>", g += `<div class="er-eq er-eq-main">${E("\\mathbf{K}_{local} = \\int_0^L \\mathbf{B}^T \\cdot \\mathbf{D} \\cdot \\mathbf{B} \\; dx")}</div>`;
    const J = e.E * e.A / e.L, H = e.E * e.Iz / e.L ** 3, ee = e.E * e.Iy / e.L ** 3, U = e.G * e.J / e.L;
    if (g += '<div class="er-deriv-block">', g += '<div class="er-deriv-header" data-toggle="deriv-axial">\u{1F4D6} K[0,0] = EA/L \u2014 <i>click para ver derivacion completa</i></div>', g += '<div id="er-deriv-axial" class="er-deriv-body" style="display:none">', g += "<p><b>Paso 1:</b> Funcion de forma axial</p>", g += `<div class="er-eq">${E("u(\\xi) = N_1 \\cdot u_i + N_2 \\cdot u_j = (1-\\xi)\\,u_i + \\xi\\,u_j")}</div>`, g += "<p><b>Paso 2:</b> Derivada (deformacion)</p>", g += `<div class="er-eq">${E("\\varepsilon = \\frac{du}{dx} = \\frac{1}{L}\\frac{du}{d\\xi} = \\frac{1}{L}(-u_i + u_j)")}</div>`, g += `<div class="er-eq">${E("\\mathbf{B}_{ax} = \\frac{1}{L}\\begin{bmatrix} -1 & 1 \\end{bmatrix}")}</div>`, g += `<p><b>Paso 3:</b> Integracion ${F("K = \\int_0^L B^T \\cdot EA \\cdot B \\; dx")}</p>`, g += `<div class="er-eq">${E("K_{ax} = \\int_0^L \\frac{1}{L}\\begin{bmatrix}-1\\\\1\\end{bmatrix} \\cdot EA \\cdot \\frac{1}{L}\\begin{bmatrix}-1 & 1\\end{bmatrix} dx")}</div>`, g += `<div class="er-eq">${E("= \\frac{EA}{L^2} \\begin{bmatrix}1 & -1\\\\-1 & 1\\end{bmatrix} \\int_0^L dx = \\frac{EA}{L^2} \\cdot L \\begin{bmatrix}1 & -1\\\\-1 & 1\\end{bmatrix}")}</div>`, g += `<div class="er-eq er-eq-main">${E(`K_{ax} = \\frac{EA}{L}\\begin{bmatrix}1 & -1\\\\-1 & 1\\end{bmatrix} = \\frac{${Je(e.E)}\\times${Je(e.A)}}{${Je(e.L)}}\\begin{bmatrix}1 & -1\\\\-1 & 1\\end{bmatrix}`)}</div>`, g += `<div class="er-eq">${E(`K[0,0] = K[6,6] = \\frac{EA}{L} = \\mathbf{${Je(J)}}`)}</div>`, g += "</div></div>", g += '<div class="er-deriv-block">', g += '<div class="er-deriv-header" data-toggle="deriv-bend">\u{1F4D6} K[1,1] = 12EI<sub>z</sub>/L\xB3 \u2014 <i>click para ver derivacion completa</i></div>', g += '<div id="er-deriv-bend" class="er-deriv-body" style="display:none">', g += `<p><b>Paso 1:</b> Funcion de forma Hermite para ${F("v(\\xi)")}</p>`, g += `<div class="er-eq">${E("v(\\xi) = H_1 v_i + H_2 \\theta_i + H_3 v_j + H_4 \\theta_j")}</div>`, g += "<p><b>Paso 2:</b> Segunda derivada (curvatura)</p>", g += `<div class="er-eq">${E("\\kappa = \\frac{d^2v}{dx^2} = \\frac{1}{L^2}\\frac{d^2v}{d\\xi^2}")}</div>`, g += `<div class="er-eq">${E("H_1'' = -6+12\\xi, \\quad H_2'' = L(-4+6\\xi), \\quad H_3'' = 6-12\\xi, \\quad H_4'' = L(-2+6\\xi)")}</div>`, g += `<div class="er-eq">${E("\\mathbf{B}_b = \\frac{1}{L^2}\\begin{bmatrix} H_1'' & H_2'' & H_3'' & H_4'' \\end{bmatrix}")}</div>`, g += `<p><b>Paso 3:</b> Integracion para K[1,1] (termino ${F("v_i \\cdot v_i")})</p>`, g += `<div class="er-eq">${E("K[1,1] = \\int_0^L \\frac{(H_1'')^2}{L^4} \\cdot EI_z \\; dx = \\frac{EI_z}{L^4} \\int_0^L (-6+12\\xi)^2 \\; dx")}</div>`, g += `<p>Expandimos: ${F("(-6+12\\xi)^2 = 36 - 144\\xi + 144\\xi^2")}</p>`, g += `<div class="er-eq">${E("\\int_0^L (36-144\\xi+144\\xi^2)\\,dx = 36L - 72L + 48L = 12L")}</div>`, g += `<div class="er-eq er-eq-main">${E(`K[1,1] = \\frac{EI_z}{L^4} \\cdot 12L = \\frac{12EI_z}{L^3} = \\frac{12 \\times ${Je(e.E)} \\times ${Je(e.Iz)}}{${Je(e.L)}^3} = \\mathbf{${Je(12 * H)}}`)}</div>`, g += "</div></div>", g += '<div class="er-deriv-block">', g += '<div class="er-deriv-header" data-toggle="deriv-tors">\u{1F4D6} K[3,3] = GJ/L \u2014 <i>click para ver derivacion</i></div>', g += '<div id="er-deriv-tors" class="er-deriv-body" style="display:none">', g += `<p>Mismo proceso que axial pero con ${F("\\theta_x")} y ${F("GJ")}:</p>`, g += `<div class="er-eq">${E(`K_{torsion} = \\frac{GJ}{L}\\begin{bmatrix}1 & -1\\\\-1 & 1\\end{bmatrix} = \\frac{${Je(e.G)}\\times${Je(e.J)}}{${Je(e.L)}} = \\mathbf{${Je(U)}}`)}</div>`, g += "</div></div>", g += '<div class="er-deriv-block">', g += '<div class="er-deriv-header" data-toggle="deriv-coup">\u{1F4D6} K[1,5] = 6EI<sub>z</sub>/L\xB2 \u2014 <i>acoplamiento corte-momento</i></div>', g += '<div id="er-deriv-coup" class="er-deriv-body" style="display:none">', g += `<p>Termino cruzado ${F("v_i \\cdot \\theta_{zi}")} (acoplamiento corte-momento):</p>`, g += `<div class="er-eq">${E("K[1,5] = \\frac{EI_z}{L^4} \\int_0^L H_1'' \\cdot H_2'' \\; dx")}</div>`, g += `<div class="er-eq">${E("= \\frac{EI_z}{L^4} \\int_0^L (-6+12\\xi) \\cdot L(-4+6\\xi) \\; dx")}</div>`, g += `<div class="er-eq">${E("= \\frac{EI_z}{L^3} \\int_0^L (24-36\\xi-48\\xi+72\\xi^2) \\; dx = \\frac{EI_z}{L^3} \\cdot 6L")}</div>`, g += `<div class="er-eq er-eq-main">${E(`K[1,5] = \\frac{6EI_z}{L^2} = \\mathbf{${Je(6 * e.E * e.Iz / e.L ** 2)}}`)}</div>`, g += "</div></div>", g += '<div class="er-subsec">Resumen de coeficientes:</div>', g += `<div class="er-eq">${E(`\\frac{EA}{L} = \\mathbf{${Je(J)}} \\qquad \\frac{12EI_z}{L^3} = \\mathbf{${Je(12 * H)}} \\qquad \\frac{12EI_y}{L^3} = \\mathbf{${Je(12 * ee)}}`)}</div>`, g += `<div class="er-eq">${E(`\\frac{GJ}{L} = \\mathbf{${Je(U)}} \\qquad \\frac{4EI_y}{L} = \\mathbf{${Je(4 * e.E * e.Iy / e.L)}} \\qquad \\frac{4EI_z}{L} = \\mathbf{${Je(4 * e.E * e.Iz / e.L)}}`)}</div>`, g += `<div class="er-eq">${E(`\\frac{6EI_z}{L^2} = \\mathbf{${Je(6 * e.E * e.Iz / e.L ** 2)}} \\qquad \\frac{6EI_y}{L^2} = \\mathbf{${Je(6 * e.E * e.Iy / e.L ** 2)}}`)}</div>`, e.kLocal && (g += `<div class="er-subsec">Resultado: ${F("\\mathbf{K}_{local}")} (12x12)</div>`, g += fn(e.kLocal)), g += '<div class="er-section-title">6. Transformacion de coordenadas</div>', g += "<p>Los cosenos directores del eje del elemento:</p>", g += `<div class="er-eq">${E(`l = \\frac{x_j - x_i}{L} = ${En(e.l)} \\qquad m = \\frac{y_j - y_i}{L} = ${En(e.m)} \\qquad n = \\frac{z_j - z_i}{L} = ${En(e.n)}`)}</div>`, g += `<div class="er-eq">${E(`D = \\sqrt{l^2 + m^2} = ${En(e.D)}`)}</div>`, Math.abs(e.n) > 0.999) {
      g += `<p>Caso especial: elemento vertical (${F(`n \\approx ${e.n > 0 ? "+1" : "-1"}`)}):</p>`;
      const we = e.n > 0 ? "\\boldsymbol{\\lambda} = \\begin{bmatrix} 0 & 0 & 1 \\\\ 0 & 1 & 0 \\\\ -1 & 0 & 0 \\end{bmatrix}" : "\\boldsymbol{\\lambda} = \\begin{bmatrix} 0 & 0 & -1 \\\\ 0 & 1 & 0 \\\\ 1 & 0 & 0 \\end{bmatrix}";
      g += `<div class="er-eq">${E(we)}</div>`;
    } else g += `<div class="er-eq">${E("\\boldsymbol{\\lambda} = \\begin{bmatrix} l & m & n \\\\ -m/D & l/D & 0 \\\\ -ln/D & -mn/D & D \\end{bmatrix}")}</div>`;
    g += `<div class="er-eq er-eq-main">${E("\\mathbf{T} = \\mathbf{I}_4 \\otimes \\boldsymbol{\\lambda} \\quad \\text{(Kronecker product} \\rightarrow 12 \\times 12 \\text{ bloque-diagonal)}")}</div>`, g += `<div class="er-section-title">7. ${F("\\mathbf{K}_{global}")} = ${F("\\mathbf{T}^T \\cdot \\mathbf{K}_{local} \\cdot \\mathbf{T}")}</div>`, g += "<p>Transformar la rigidez local al sistema global de coordenadas:</p>", g += `<div class="er-eq er-eq-main">${E("\\mathbf{K}_{global} = \\mathbf{T}^T \\cdot \\mathbf{K}_{local} \\cdot \\mathbf{T}")}</div>`, e.kGlobal && (g += fn(e.kGlobal)), g += '<div class="er-section-title">8. Ensamblaje</div>';
    const j = e.elem[0] * 6, Q = e.elem[1] * 6;
    if (g += `<div class="er-eq">${E(`\\text{Nodo } ${e.elem[0]} \\rightarrow \\text{DOFs } [${j} \\ldots ${j + 5}]`)}</div>`, g += `<div class="er-eq">${E(`\\text{Nodo } ${e.elem[1]} \\rightarrow \\text{DOFs } [${Q} \\ldots ${Q + 5}]`)}</div>`, g += `<div class="er-eq">${E("\\mathbf{K}_{total}[\\text{DOFs}_i, \\text{DOFs}_j] \\mathrel{+}= \\mathbf{K}_{global}[i, j]")}</div>`, g += '<div class="er-section-title">9. Recuperacion de fuerzas internas</div>', g += `<div class="er-eq">${E("\\mathbf{u}_{local} = \\mathbf{T} \\cdot \\mathbf{u}_{global}")}</div>`, g += `<div class="er-eq er-eq-main">${E("\\mathbf{f}_{local} = \\mathbf{K}_{local} \\cdot \\mathbf{u}_{local}")}</div>`, e.fLocal.length > 0 && e.fLocal.some((we) => we !== 0)) {
      const we = [
        "N",
        "V<sub>y</sub>",
        "V<sub>z</sub>",
        "M<sub>x</sub>",
        "M<sub>y</sub>",
        "M<sub>z</sub>"
      ];
      g += '<table class="er-forces"><tr><th></th>';
      for (const A of we) g += `<th>${A}</th>`;
      g += `</tr><tr><td>i (${e.elem[0]})</td>`;
      for (let A = 0; A < 6; A++) g += `<td class="${Math.abs(e.fLocal[A]) > 1e-10 ? "nz" : ""}">${Je(e.fLocal[A], 3)}</td>`;
      g += `</tr><tr><td>j (${e.elem[1]})</td>`;
      for (let A = 6; A < 12; A++) g += `<td class="${Math.abs(e.fLocal[A]) > 1e-10 ? "nz" : ""}">${Je(e.fLocal[A], 3)}</td>`;
      g += "</tr></table>";
    }
    return g;
  }
  function Ll(e) {
    let g = "";
    if (g += `<div class="er-section-title">Resumen \u2014 Elemento ${e.elemIdx}</div>`, g += '<table class="er-props">', g += `<tr><td>Tipo</td><td>${e.isFrame ? "Frame (Euler-Bernoulli)" : "Shell"}</td></tr>`, g += `<tr><td>Nodos</td><td>${e.elem.join(" \u2192 ")}</td></tr>`, g += `<tr><td>Longitud</td><td><b>${Je(e.L)}</b></td></tr>`, g += `<tr><td>E</td><td>${Je(e.E)}</td></tr>`, g += `<tr><td>A</td><td>${Je(e.A)}</td></tr>`, g += "</table>", e.uGlobal.length > 0) {
      g += '<div class="er-section-title">Desplazamientos</div>';
      const F = [
        "u<sub>x</sub>",
        "u<sub>y</sub>",
        "u<sub>z</sub>",
        "\u03B8<sub>x</sub>",
        "\u03B8<sub>y</sub>",
        "\u03B8<sub>z</sub>"
      ];
      g += '<table class="er-forces"><tr><th>Nodo</th>';
      for (const E of F) g += `<th>${E}</th>`;
      g += "</tr>";
      for (let E = 0; E < e.elem.length; E++) {
        g += `<tr><td>${e.elem[E]}</td>`;
        for (let J = 0; J < 6; J++) {
          const H = e.uGlobal[E * 6 + J];
          g += `<td class="${Math.abs(H) > 1e-10 ? "nz" : ""}">${Je(H, 6)}</td>`;
        }
        g += "</tr>";
      }
      g += "</table>";
    }
    if (e.fLocal.length > 0 && e.fLocal.some((F) => F !== 0)) {
      g += '<div class="er-section-title">Fuerzas internas</div>';
      const F = [
        "N",
        "V<sub>y</sub>",
        "V<sub>z</sub>",
        "M<sub>x</sub>",
        "M<sub>y</sub>",
        "M<sub>z</sub>"
      ];
      g += '<table class="er-forces"><tr><th></th>';
      for (const E of F) g += `<th>${E}</th>`;
      g += "</tr><tr><td>Nodo i</td>";
      for (let E = 0; E < 6; E++) g += `<td class="${Math.abs(e.fLocal[E]) > 1e-10 ? "nz" : ""}">${Je(e.fLocal[E], 3)}</td>`;
      g += "</tr><tr><td>Nodo j</td>";
      for (let E = 6; E < 12; E++) g += `<td class="${Math.abs(e.fLocal[E]) > 1e-10 ? "nz" : ""}">${Je(e.fLocal[E], 3)}</td>`;
      g += "</tr></table>";
    }
    return g;
  }
  function Je(e, g = 2) {
    return Math.abs(e) < 1e-10 ? "0" : Math.abs(e) >= 1e7 || Math.abs(e) < 0.01 && e !== 0 ? e.toExponential(g) : e.toFixed(g);
  }
  function En(e) {
    return Math.abs(e) < 1e-10 ? "0" : e.toFixed(4);
  }
  function fn(e) {
    var _a;
    const g = e.length, F = Math.min(g, 12);
    let E = '<div style="overflow-x:auto"><table class="er-matrix">';
    for (let J = 0; J < F; J++) {
      E += "<tr>";
      for (let H = 0; H < F; H++) {
        const ee = ((_a = e[J]) == null ? void 0 : _a[H]) ?? 0, U = Math.abs(ee) < 1e-10;
        E += `<td class="${U ? "z" : ""} ${J === H && !U ? "diag" : ""}">${U ? "0" : zl(ee)}</td>`;
      }
      E += "</tr>";
    }
    return E += "</table>", g > F && (E += `<div style="color:var(--fem-label);font-size:9px">(${F}\xD7${F} de ${g}\xD7${g})</div>`), E += "</div>", E;
  }
  function zl(e) {
    return Math.abs(e) >= 1e6 || Math.abs(e) < 0.01 && e !== 0 ? e.toExponential(1) : Math.abs(e) >= 100 ? e.toFixed(0) : e.toFixed(2);
  }
  function is(e) {
    const g = e.getContext("2d");
    if (!g) return;
    const F = e.width, E = e.height, J = 30, H = F - 2 * J, ee = (E - 3 * J) / 2;
    g.fillStyle = getComputedStyle(document.body).getPropertyValue("--fem-bg").trim() || "#111", g.fillRect(0, 0, F, E);
    const U = (j, Q, we) => {
      g.strokeStyle = "#333", g.lineWidth = 1, g.strokeRect(J, j, H, ee), g.strokeStyle = "#444", g.beginPath(), g.moveTo(J, j + ee / 2), g.lineTo(J + H, j + ee / 2), g.stroke(), g.fillStyle = "#888", g.font = "11px sans-serif", g.fillText(Q, J + 4, j + 14);
      for (const Y of we) {
        g.strokeStyle = Y.color, g.lineWidth = 2.5, g.beginPath();
        for (let Se = 0; Se <= 100; Se++) {
          const me = Se / 100, fe = J + me * H, se = j + ee / 2 - Y.fn(me) * (ee / 2 * 0.85);
          Se === 0 ? g.moveTo(fe, se) : g.lineTo(fe, se);
        }
        g.stroke();
      }
      let A = J + H - 90;
      for (const Y of we) g.fillStyle = Y.color, g.font = "bold 10px sans-serif", g.fillText(Y.label, A, j + ee - 6), A += 36;
      g.fillStyle = "#666", g.font = "9px monospace", g.fillText("0", J, j + ee + 12), g.fillText("1", J + H - 6, j + ee + 12), g.fillText("\u03BE", J + H / 2, j + ee + 12);
    };
    U(J, "Axial (lineal)", [
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
    ]), U(J + ee + J, "Flexi\xF3n (Hermite c\xFAbicos)", [
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
  const Cl = `<style>
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
  let ms = typeof localStorage < "u" && localStorage.getItem("hk_lang") || "es";
  function cs() {
    return ms;
  }
  function Pl(e) {
    ms = e, typeof localStorage < "u" && localStorage.setItem("hk_lang", e);
  }
  const Fl = {
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
  function ga(e) {
    const g = Fl[e];
    return g ? ms === "es" ? g[0] : g[1] : e;
  }
  function Rl() {
    document.querySelectorAll("[data-i18n]").forEach((e) => {
      const g = e.dataset.i18n, F = ga(g);
      e.tagName === "INPUT" || e.tagName === "SELECT" ? e.placeholder = F : e.textContent = F;
    }), document.querySelectorAll("[data-i18n-title]").forEach((e) => {
      const g = e.dataset.i18nTitle;
      e.title = ga(g);
    });
  }
  const dn = [
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
  let An = false, Do = null, uo = null, Gt = null, Nt = null;
  function Ol() {
    Nt = document.createElement("button"), Nt.id = "help-tour-btn", Nt.innerHTML = "?", Nt.title = "Ayuda interactiva \u2014 Tour guiado";
    let e = false;
    const g = (E) => {
      Nt.style.cssText = E ? "position:fixed;bottom:5px;right:5px;z-index:9999999;width:20px;height:20px;border-radius:50%;background:#555;color:#aaa;border:1px solid #777;font-size:10px;cursor:pointer;opacity:0.5;transition:all 0.2s;" : "position:fixed;bottom:20px;right:20px;z-index:9999999;width:36px;height:36px;border-radius:50%;background:linear-gradient(135deg,#0066cc,#0099ff);color:white;border:2px solid rgba(255,255,255,0.3);font-size:18px;font-weight:bold;cursor:pointer;box-shadow:0 2px 10px rgba(0,102,204,0.3);transition:all 0.2s;font-family:'Arial Nova',sans-serif;";
    };
    g(false), Nt.addEventListener("contextmenu", (E) => {
      E.preventDefault(), e = !e, g(e), Nt.innerHTML = "?";
    }), Nt.addEventListener("mouseenter", () => {
      Nt.style.transform = "scale(1.15)", Nt.style.boxShadow = "0 6px 20px rgba(0,102,204,0.6)";
    }), Nt.addEventListener("mouseleave", () => {
      Nt.style.transform = "scale(1)", Nt.style.boxShadow = "0 4px 15px rgba(0,102,204,0.4)";
    }), Nt.addEventListener("click", () => {
      An ? gs() : Nl();
    });
    const F = document.createElement("style");
    return F.textContent = `
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
  `, document.head.appendChild(F), Nt;
  }
  function Nl() {
    An = true, Nt && (Nt.innerHTML = "\u2715", Nt.style.background = "linear-gradient(135deg, #cc3333, #ff4444)", Nt.style.animation = "none"), Do = document.createElement("div"), Do.id = "tour-overlay", Do.style.cssText = `
    position: fixed; inset: 0; z-index: 9999990;
    pointer-events: none;
  `, document.body.appendChild(Do), Qo(0);
  }
  function gs() {
    An = false, Nt && (Nt.innerHTML = "?", Nt.style.background = "linear-gradient(135deg, #0066cc, #0099ff)", Nt.style.animation = "helpPulse 2s infinite"), uo && (uo.remove(), uo = null), Gt && (Gt.remove(), Gt = null), Do && (Do.remove(), Do = null);
  }
  function Qo(e) {
    var _a, _b;
    if (e >= dn.length) {
      ql();
      return;
    }
    const g = dn[e], F = document.querySelector(g.selector);
    if (!F) {
      Qo(e + 1);
      return;
    }
    F.scrollIntoView({
      behavior: "smooth",
      block: "nearest"
    }), uo && uo.remove(), Gt && Gt.remove();
    const E = F.getBoundingClientRect(), J = window.innerWidth, H = window.innerHeight, ee = 320, U = 180;
    uo = document.createElement("div"), uo.style.cssText = `
    position: fixed;
    left: ${E.left - 6}px; top: ${E.top - 6}px;
    width: ${E.width + 12}px; height: ${E.height + 12}px;
    border-radius: 8px;
    z-index: 9999991;
    pointer-events: none;
    animation: spotlightPulse 1.5s ease-in-out infinite;
    transition: all 0.3s ease;
  `, document.body.appendChild(uo);
    const j = J - E.right, Q = E.left, we = H - E.bottom, A = E.top;
    let Y = g.position || "bottom";
    Y === "bottom" && we < U + 20 && (Y = "top"), Y === "top" && A < U + 20 && (Y = "right"), Y === "right" && j < ee + 20 && (Y = "left"), Y === "left" && Q < ee + 20 && (Y = "bottom");
    let Se, me, fe = "";
    switch (Y) {
      case "bottom":
        Se = E.left + E.width / 2 - ee / 2, me = E.bottom + 14, fe = "position:absolute;top:-8px;left:50%;transform:translateX(-50%);width:0;height:0;border-left:8px solid transparent;border-right:8px solid transparent;border-bottom:8px solid #0099ff;";
        break;
      case "top":
        Se = E.left + E.width / 2 - ee / 2, me = E.top - U - 14, fe = "position:absolute;bottom:-8px;left:50%;transform:translateX(-50%);width:0;height:0;border-left:8px solid transparent;border-right:8px solid transparent;border-top:8px solid #0099ff;";
        break;
      case "right":
        Se = E.right + 14, me = E.top + E.height / 2 - U / 2, fe = "position:absolute;left:-8px;top:50%;transform:translateY(-50%);width:0;height:0;border-top:8px solid transparent;border-bottom:8px solid transparent;border-right:8px solid #0099ff;";
        break;
      case "left":
        Se = E.left - ee - 14, me = E.top + E.height / 2 - U / 2, fe = "position:absolute;right:-8px;top:50%;transform:translateY(-50%);width:0;height:0;border-top:8px solid transparent;border-bottom:8px solid transparent;border-left:8px solid #0099ff;";
        break;
    }
    Se = Math.max(10, Math.min(Se, J - ee - 10)), me = Math.max(10, Math.min(me, H - U - 10)), Gt = document.createElement("div"), Gt.style.cssText = `
    position: fixed;
    left: ${Se}px; top: ${me}px;
    width: ${ee}px;
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
  `, Gt.innerHTML = `
    <div style="${fe}"></div>
    <div style="display:flex;align-items:center;margin-bottom:8px;">
      <span class="tour-hand">\u{1F446}</span>
      <span style="color:#0099ff;font-weight:bold;font-size:15px;">${g.title}</span>
      <span style="margin-left:auto;color:#666;font-size:11px;">${e + 1}/${dn.length}</span>
    </div>
    <p style="margin:0 0 12px 0;font-size:12px;line-height:1.6;color:#bbb;">${g.description}</p>
    <div style="display:flex;gap:8px;justify-content:flex-end;">
      ${e > 0 ? '<button id="tour-prev" style="padding:5px 14px;background:transparent;color:#888;border:1px solid #444;border-radius:6px;cursor:pointer;font-size:11px;">\u25C0 Anterior</button>' : ""}
      <button id="tour-next" style="padding:5px 18px;background:linear-gradient(135deg,#0066cc,#0099ff);color:white;border:none;border-radius:6px;cursor:pointer;font-size:12px;font-weight:bold;">
        ${e < dn.length - 1 ? "Siguiente \u25B6" : "Finalizar \u2713"}
      </button>
    </div>
    <div style="margin-top:8px;display:flex;gap:3px;justify-content:center;">
      ${dn.map((q, B) => `<div style="width:${B === e ? "16px" : "6px"};height:6px;border-radius:3px;background:${B === e ? "#0099ff" : B < e ? "#004488" : "#333"};transition:all 0.3s;"></div>`).join("")}
    </div>
  `, document.body.appendChild(Gt), (_a = Gt.querySelector("#tour-next")) == null ? void 0 : _a.addEventListener("click", () => {
      Qo(e + 1);
    }), (_b = Gt.querySelector("#tour-prev")) == null ? void 0 : _b.addEventListener("click", () => {
      Qo(e - 1);
    });
    const se = (q) => {
      if (!An) {
        document.removeEventListener("keydown", se);
        return;
      }
      (q.key === "ArrowRight" || q.key === "Enter") && (Qo(e + 1), document.removeEventListener("keydown", se)), q.key === "ArrowLeft" && (Qo(Math.max(0, e - 1)), document.removeEventListener("keydown", se)), q.key === "Escape" && (gs(), document.removeEventListener("keydown", se));
    };
    document.addEventListener("keydown", se);
  }
  function ql() {
    var _a;
    uo && (uo.remove(), uo = null), Gt && (Gt.remove(), Gt = null), Gt = document.createElement("div"), Gt.style.cssText = `
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
  `, Gt.innerHTML = `
    <div style="font-size:48px;margin-bottom:12px;">\u{1F393}</div>
    <h3 style="color:#00cc66;margin:0 0 8px 0;font-size:18px;">Tour Completado</h3>
    <p style="color:#888;font-size:12px;line-height:1.6;margin:0 0 16px 0;">
      Ya conoces las herramientas principales.<br>
      Presiona <b style="color:#0099ff">?</b> en cualquier momento para repetir el tour.<br>
      Usa <b style="color:#0099ff">Inspect</b> en un elemento para ver el analisis FEM completo.
    </p>
    <button id="tour-done" style="padding:8px 24px;background:linear-gradient(135deg,#00aa55,#00cc66);color:white;border:none;border-radius:8px;cursor:pointer;font-size:14px;font-weight:bold;">Entendido</button>
  `, document.body.appendChild(Gt), (_a = Gt.querySelector("#tour-done")) == null ? void 0 : _a.addEventListener("click", () => gs());
  }
  function _l(e) {
    var _a;
    const g = e.split(/\r?\n/), F = {
      force: "TONF",
      length: "M"
    }, E = [], J = /* @__PURE__ */ new Map(), H = /* @__PURE__ */ new Map(), ee = /* @__PURE__ */ new Map(), U = [], j = [], Q = /* @__PURE__ */ new Map(), we = /* @__PURE__ */ new Map(), A = [], Y = [];
    let Se = "", me = "";
    const fe = /* @__PURE__ */ new Map();
    for (const Ce of g) {
      const _e = Ce.trim();
      if (!_e || _e.startsWith("$")) {
        _e.startsWith("$ ") && (me = _e.substring(2).trim());
        continue;
      }
      if (me && (fe.has(me) || fe.set(me, []), fe.get(me).push(Ce)), me === "CONTROLS") {
        const xe = _e.match(/UNITS\s+"([^"]+)"\s+"([^"]+)"/);
        xe && (F.force = xe[1], F.length = xe[2]);
        const Pe = _e.match(/TITLE2\s+"([^"]+)"/);
        Pe && (Se = Pe[1]);
      }
      if (me === "STORIES - IN SEQUENCE FROM TOP") {
        const xe = _e.match(/STORY\s+"([^"]+)"\s+(?:HEIGHT\s+([\d.]+)|ELEV\s+([-\d.]+))/);
        if (xe) {
          const Pe = xe[1], be = xe[2] ? parseFloat(xe[2]) : 0, ke = xe[3] ? parseFloat(xe[3]) : void 0;
          E.push({
            name: Pe,
            height: be,
            elev: ke ?? 0
          });
        }
      }
      if (me === "MATERIAL PROPERTIES") {
        const xe = _e.match(/MATERIAL\s+"([^"]+)"\s+(?:TYPE\s+"([^"]+)")?/);
        if (xe) {
          const Pe = xe[1];
          J.has(Pe) || J.set(Pe, {
            type: xe[2] || "",
            E: 0,
            G: 0,
            nu: 0
          });
          const be = J.get(Pe);
          xe[2] && (be.type = xe[2]);
          const ke = _e.match(/\bE\s+([\d.eE+-]+)/);
          ke && (be.E = parseFloat(ke[1]));
          const Ve = _e.match(/\bU\s+([\d.eE+-]+)/);
          Ve && (be.nu = parseFloat(Ve[1]), be.G = be.E / (2 * (1 + be.nu)));
          const Be = _e.match(/\bFY\s+([\d.eE+-]+)/);
          Be && (be.fy = parseFloat(Be[1]));
          const ut = _e.match(/\bFC\s+([\d.eE+-]+)/);
          ut && (be.fc = parseFloat(ut[1]));
          const xt = _e.match(/WEIGHTPERVOLUME\s+([\d.eE+-]+)/);
          xt && (be.density = parseFloat(xt[1]));
        }
      }
      if (me === "FRAME SECTIONS") {
        const xe = _e.match(/FRAMESECTION\s+"([^"]+)"/);
        if (xe) {
          const Pe = xe[1];
          H.has(Pe) || H.set(Pe, {
            material: "",
            shape: "",
            D: 0,
            B: 0,
            TF: 0,
            TW: 0
          });
          const be = H.get(Pe), ke = _e.match(/MATERIAL\s+"([^"]+)"/);
          ke && (be.material = ke[1]);
          const Ve = _e.match(/SHAPE\s+"([^"]+)"/);
          Ve && (be.shape = Ve[1]);
          const Be = _e.match(/\bD\s+([\d.eE+-]+)/);
          Be && (be.D = parseFloat(Be[1]));
          const ut = _e.match(/\bB\s+([\d.eE+-]+)/);
          ut && (be.B = parseFloat(ut[1]));
          const xt = _e.match(/\bTF\s+([\d.eE+-]+)/);
          xt && (be.TF = parseFloat(xt[1]));
          const Ge = _e.match(/\bTW\s+([\d.eE+-]+)/);
          Ge && (be.TW = parseFloat(Ge[1]));
          const Ze = _e.match(/\bR\s+([\d.eE+-]+)/);
          Ze && (be.R = parseFloat(Ze[1]));
          const gt = _e.match(/FILLMATERIAL\s+"([^"]+)"/);
          gt && (be.fillMaterial = gt[1]);
          const ft = _e.match(/I2MOD\s+([\d.eE+-]+)/);
          ft && (be.modI2 = parseFloat(ft[1]));
          const vt = _e.match(/I3MOD\s+([\d.eE+-]+)/);
          vt && (be.modI3 = parseFloat(vt[1]));
        }
      }
      if (me === "POINT COORDINATES") {
        const xe = _e.match(/POINT\s+"([^"]+)"\s+([-\d.eE+]+)\s+([-\d.eE+]+)/);
        xe && ee.set(xe[1], [
          parseFloat(xe[2]),
          parseFloat(xe[3])
        ]);
      }
      if (me === "LINE CONNECTIVITIES") {
        const xe = _e.match(/LINE\s+"([^"]+)"\s+(COLUMN|BEAM|BRACE)\s+"([^"]+)"\s+"([^"]+)"\s+(\d+)/);
        xe && U.push({
          name: xe[1],
          type: xe[2],
          pt1: xe[3],
          pt2: xe[4],
          nStories: parseInt(xe[5])
        });
      }
      if (me === "POINT ASSIGNS") {
        const xe = _e.match(/POINTASSIGN\s+"([^"]+)"\s+"([^"]+)".*RESTRAINT\s+"([^"]+)"/);
        xe && Q.set(`${xe[1]}@${xe[2]}`, xe[3].split(/\s+/));
      }
      if (me === "LINE ASSIGNS") {
        const xe = _e.match(/LINEASSIGN\s+"([^"]+)"\s+"([^"]+)".*SECTION\s+"([^"]+)"/);
        if (xe) {
          const Pe = {
            story: xe[2],
            section: xe[3],
            rigidZone: 0,
            releases: [],
            angle: 0
          }, be = _e.match(/RIGIDZONE\s+([\d.eE+-]+)/);
          be && (Pe.rigidZone = parseFloat(be[1]));
          const ke = _e.match(/RELEASE\s+"([^"]+)"/);
          ke && (Pe.releases = ke[1].split(/\s+/));
          const Ve = _e.match(/ANG\s+([-\d.eE+]+)/);
          Ve && (Pe.angle = parseFloat(Ve[1])), we.set(`${xe[1]}@${xe[2]}`, Pe);
        }
      }
      if (me === "GRIDS") {
        const xe = _e.match(/^\s*GRID\s+"[^"]+"\s+LABEL\s+"([^"]+)"\s+DIR\s+"([XY])"\s+COORD\s+([-\d.eE+]+)/);
        xe && Y.push({
          label: xe[1],
          dir: xe[2],
          coord: parseFloat(xe[3])
        });
      }
      if (me === "FRAME OBJECT LOADS") {
        const xe = _e.match(/LINELOAD\s+"([^"]+)"\s+"([^"]+)"\s+TYPE\s+"([^"]+)"\s+DIR\s+"([^"]+)"\s+LC\s+"([^"]+)"\s+FVAL\s+([-\d.eE+]+)/);
        xe && A.push({
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
          const Pe = ((_a = xe[2].match(/"([^"]+)"/g)) == null ? void 0 : _a.map((be) => be.replace(/"/g, ""))) || [];
          j.push({
            name: xe[1],
            pts: Pe,
            nStories: 0
          });
        }
      }
    }
    const se = /* @__PURE__ */ new Map();
    if (E.length > 0) {
      const Ce = E.length - 1;
      se.set(E[Ce].name, E[Ce].elev);
      for (let _e = Ce - 1; _e >= 0; _e--) {
        const Pe = se.get(E[_e + 1].name) + E[_e].height;
        E[_e].elev = Pe, se.set(E[_e].name, Pe);
      }
    }
    const q = [], B = [], W = /* @__PURE__ */ new Map(), pe = (Ce, _e) => `${Ce}@${_e}`, ve = /* @__PURE__ */ new Set(), Ae = /* @__PURE__ */ new Map();
    for (const Ce of U) Ae.set(Ce.name, Ce);
    for (const Ce of U) for (const [_e, xe] of we) {
      if (!_e.startsWith(Ce.name + "@")) continue;
      const Pe = xe.story, be = E.findIndex((ke) => ke.name === Pe);
      if (!(be < 0)) if (Ce.type === "COLUMN" || Ce.type === "BRACE") {
        ve.add(pe(Ce.pt2, Pe));
        const ke = Math.max(Ce.nStories, 1), Ve = Math.min(be + ke, E.length - 1);
        ve.add(pe(Ce.pt1, E[Ve].name));
      } else ve.add(pe(Ce.pt1, Pe)), ve.add(pe(Ce.pt2, Pe));
    }
    for (const [Ce] of Q) ve.add(Ce);
    for (const Ce of ve) {
      const [_e, xe] = Ce.split("@"), Pe = ee.get(_e), be = se.get(xe);
      Pe === void 0 || be === void 0 || (q.push([
        Pe[0],
        Pe[1],
        be
      ]), B.push(Ce), W.set(Ce, q.length - 1));
    }
    const Ue = [], he = [], je = [], We = [], ge = /* @__PURE__ */ new Map();
    for (const Ce of U) for (const [_e, xe] of we) {
      if (!_e.startsWith(Ce.name + "@")) continue;
      const Pe = xe.story, be = E.findIndex((Ge) => Ge.name === Pe);
      if (be < 0) continue;
      let ke, Ve;
      if (Ce.type === "COLUMN" || Ce.type === "BRACE") {
        const Ge = Math.max(Ce.nStories, 1), Ze = Math.min(be + Ge, E.length - 1);
        ke = pe(Ce.pt1, E[Ze].name), Ve = pe(Ce.pt2, Pe);
      } else ke = pe(Ce.pt1, Pe), Ve = pe(Ce.pt2, Pe);
      const Be = W.get(ke), ut = W.get(Ve);
      if (Be === void 0 || ut === void 0 || Be === ut) continue;
      const xt = Ue.length;
      if (Ue.push([
        Be,
        ut
      ]), he.push(Ce.name), je.push(Ce.type), We.push(Pe), ge.set(xt, xe.section), xe.rigidZone > 0 && pt.set(xt, [
        xe.rigidZone,
        xe.rigidZone
      ]), xe.releases.length > 0) {
        const Ge = new Array(12).fill(false), Ze = {
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
        for (const gt of xe.releases) {
          const ft = Ze[gt];
          ft !== void 0 && (Ge[ft] = true);
        }
        mt.set(xt, Ge);
      }
    }
    const Ie = /* @__PURE__ */ new Map(), Le = /* @__PURE__ */ new Map(), Xe = /* @__PURE__ */ new Map(), dt = /* @__PURE__ */ new Map(), Ke = /* @__PURE__ */ new Map(), pt = /* @__PURE__ */ new Map(), mt = /* @__PURE__ */ new Map(), At = /* @__PURE__ */ new Map(), qt = /* @__PURE__ */ new Map(), Dt = /* @__PURE__ */ new Map(), $t = /* @__PURE__ */ new Map();
    for (const [Ce, _e] of ge) {
      const xe = H.get(_e);
      if (!xe) continue;
      const Pe = J.get(xe.material);
      Pe && (Ie.set(Ce, Pe.E), Le.set(Ce, Pe.G));
      const be = xe.D, ke = xe.B, Ve = xe.TF, Be = xe.TW;
      let ut = 0, xt = 0, Ge = 0, Ze = 0, gt = 0, ft = 0, vt = "rect";
      switch (xe.shape) {
        case "Concrete Rectangular":
          ut = be * ke, xt = ke * be ** 3 / 12, Ge = be * ke ** 3 / 12, Ze = ke * be ** 3 * (1 / 3 - 0.21 * (be / ke) * (1 - be ** 4 / (12 * ke ** 4))), gt = ft = 5 / 6 * ut, vt = "rect";
          break;
        case "Concrete Circle":
          ut = Math.PI * be ** 2 / 4, xt = Ge = Math.PI * be ** 4 / 64, Ze = Math.PI * be ** 4 / 32, gt = ft = 0.9 * ut, vt = "circ";
          break;
        case "Steel I/Wide Flange":
          ut = 2 * ke * Ve + (be - 2 * Ve) * Be, xt = (ke * be ** 3 - (ke - Be) * (be - 2 * Ve) ** 3) / 12, Ge = (2 * Ve * ke ** 3 + (be - 2 * Ve) * Be ** 3) / 12, Ze = (2 * ke * Ve ** 3 + (be - 2 * Ve) * Be ** 3) / 3, gt = (be - 2 * Ve) * Be, ft = 2 * ke * Ve * 5 / 6, vt = "I";
          break;
        case "Steel Tube":
          ut = be * ke - (be - 2 * Be) * (ke - 2 * Be), xt = (ke * be ** 3 - (ke - 2 * Be) * (be - 2 * Be) ** 3) / 12, Ge = (be * ke ** 3 - (be - 2 * Be) * (ke - 2 * Be) ** 3) / 12, Ze = 2 * Be * (be - Be) * (ke - Be) * ((be - Be) * (ke - Be)) / (be - Be + (ke - Be)), gt = 2 * be * Be, ft = 2 * ke * Be, vt = "HSS";
          break;
        case "Filled Steel Tube":
          ut = be * ke, xt = ke * be ** 3 / 12, Ge = be * ke ** 3 / 12, Ze = 2 * Be * (be - Be) * (ke - Be) * ((be - Be) * (ke - Be)) / (be - Be + (ke - Be)), gt = 2 * be * Be + 5 / 6 * (be - 2 * Be) * (ke - 2 * Be), ft = 2 * ke * Be + 5 / 6 * (be - 2 * Be) * (ke - 2 * Be), vt = "CFT";
          break;
        case "Steel Angle": {
          const Vt = Ve || Be;
          ut = Vt * (be + ke - Vt), xt = Vt * (be ** 3 + ke * Vt ** 2 + Vt ** 2 * (be - Vt)) / 12, Ge = Vt * (ke ** 3 + be * Vt ** 2 + Vt ** 2 * (ke - Vt)) / 12, Ze = (be + ke - Vt) * Vt ** 3 / 3, gt = be * Vt, ft = ke * Vt, vt = "L";
          break;
        }
        case "Steel Channel":
        case "Cold Formed C":
          ut = 2 * ke * Ve + (be - 2 * Ve) * Be, xt = (Be * be ** 3 + 2 * ke * Ve * (be - Ve) ** 2) / 12, Ge = (2 * Ve * ke ** 3 + (be - 2 * Ve) * Be ** 3) / 12, Ze = (2 * ke * Ve ** 3 + (be - 2 * Ve) * Be ** 3) / 3, gt = (be - 2 * Ve) * Be, ft = 2 * ke * Ve * 5 / 6, vt = xe.shape === "Cold Formed C" ? "coldC" : "C";
          break;
        case "Steel Double Channel":
          ut = 2 * (2 * ke * Ve + (be - 2 * Ve) * Be), xt = 2 * (Be * be ** 3 + 2 * ke * Ve * (be - Ve) ** 2) / 12, Ge = 2 * (2 * Ve * ke ** 3 + (be - 2 * Ve) * Be ** 3) / 12, Ze = 2 * (2 * ke * Ve ** 3 + (be - 2 * Ve) * Be ** 3) / 3, gt = 2 * (be - 2 * Ve) * Be, ft = 4 * ke * Ve * 5 / 6, vt = "2C";
          break;
        default:
          be > 0 && ke > 0 && (ut = be * ke, xt = ke * be ** 3 / 12, Ge = be * ke ** 3 / 12, Ze = Math.min(be, ke) * Math.max(be, ke) ** 3 / 3 * 0.3, gt = ft = 5 / 6 * ut);
          break;
      }
      xe.modI2 && (Ge *= xe.modI2), xe.modI3 && (xt *= xe.modI3), Xe.set(Ce, ut), At.set(Ce, xt), qt.set(Ce, Ge), Dt.set(Ce, Ze), gt > 0 && dt.set(Ce, gt), ft > 0 && Ke.set(Ce, ft), $t.set(Ce, {
        type: vt,
        b: ke || void 0,
        h: be || void 0,
        d: vt === "circ" || vt === "pipe" ? be : void 0,
        tw: Be || void 0,
        tf: Ve || void 0,
        r: xe.R,
        name: _e
      });
    }
    const ht = /* @__PURE__ */ new Map();
    for (const [Ce, _e] of Q) {
      const xe = W.get(Ce);
      if (xe === void 0) continue;
      const Pe = [
        false,
        false,
        false,
        false,
        false,
        false
      ];
      for (const be of _e) be === "UX" && (Pe[0] = true), be === "UY" && (Pe[1] = true), be === "UZ" && (Pe[2] = true), be === "RX" && (Pe[3] = true), be === "RY" && (Pe[4] = true), be === "RZ" && (Pe[5] = true);
      ht.set(xe, Pe);
    }
    const mo = /* @__PURE__ */ new Map(), qe = /* @__PURE__ */ new Map();
    for (let Ce = 0; Ce < he.length; Ce++) qe.set(`${he[Ce]}@${We[Ce]}`, Ce);
    for (const Ce of A) {
      const _e = qe.get(`${Ce.line}@${Ce.story}`);
      if (_e === void 0) continue;
      const [xe, Pe] = Ue[_e], be = q[xe], ke = q[Pe], Ve = Math.sqrt((ke[0] - be[0]) ** 2 + (ke[1] - be[1]) ** 2 + (ke[2] - be[2]) ** 2);
      if (Ve < 1e-10) continue;
      const Be = Ce.val * Ve / 2;
      let ut = 0, xt = 0, Ge = 0;
      Ce.dir === "GRAV" || Ce.dir === "GRAVITY" ? Ge = -Be : Ce.dir === "X" ? ut = Be : Ce.dir === "Y" ? xt = Be : Ce.dir === "Z" && (Ge = -Be);
      for (const Ze of [
        xe,
        Pe
      ]) {
        const gt = mo.get(Ze) || [
          0,
          0,
          0,
          0,
          0,
          0
        ];
        gt[0] += ut, gt[1] += xt, gt[2] += Ge, mo.set(Ze, gt);
      }
    }
    const St = /* @__PURE__ */ new Map();
    for (const [Ce, _e] of ge) {
      const xe = H.get(_e);
      if (!xe) continue;
      const Pe = J.get(xe.material);
      (Pe == null ? void 0 : Pe.density) && St.set(Ce, Pe.density);
    }
    return {
      units: F,
      stories: E.reverse(),
      materials: J,
      frameSections: H,
      nodes: q,
      nodeNames: B,
      nodeNameToIdx: W,
      elements: Ue,
      elementNames: he,
      elementTypes: je,
      elementStories: We,
      elementSections: ge,
      nodeInputs: {
        supports: ht,
        loads: mo
      },
      elementInputs: {
        elasticities: Ie,
        shearModuli: Le,
        areas: Xe,
        momentsOfInertiaZ: At,
        momentsOfInertiaY: qt,
        torsionalConstants: Dt,
        shearAreasY: dt,
        shearAreasZ: Ke,
        rigidOffsets: pt,
        momentReleases: mt,
        densities: St,
        sectionShapes: $t
      },
      sectionShapes: $t,
      grids: Y,
      info: {
        nNodes: q.length,
        nFrames: Ue.length,
        nAreas: j.length,
        title: Se
      },
      rawSections: fe
    };
  }
  function it(e) {
    return e && parseFloat(e) || 0;
  }
  function va(e) {
    const g = /* @__PURE__ */ new Map(), F = /(\w+)\s*=\s*(?:"([^"]*?)"|(\S+))/g;
    let E;
    for (; (E = F.exec(e)) !== null; ) g.set(E[1], E[2] !== void 0 ? E[2] : E[3]);
    return g;
  }
  function Bl(e) {
    const g = e.split(/\r?\n/);
    return g.some((E) => E.trim().startsWith("TABLE:")) ? Dl(g) : Hl(g);
  }
  function Dl(e) {
    var _a, _b, _c, _d, _e, _f;
    const g = [];
    let F = "";
    for (const se of e) {
      const q = se.trimEnd();
      q.endsWith("_") ? F += q.slice(0, -1) + " " : (F += q, g.push(F), F = "");
    }
    F && g.push(F);
    const E = {
      force: "KN",
      length: "m"
    };
    let J = "UX,UY,UZ,RX,RY,RZ";
    const H = /* @__PURE__ */ new Map(), ee = /* @__PURE__ */ new Map(), U = /* @__PURE__ */ new Map(), j = /* @__PURE__ */ new Map(), Q = [], we = [], A = /* @__PURE__ */ new Map(), Y = /* @__PURE__ */ new Map(), Se = /* @__PURE__ */ new Map(), me = [];
    let fe = "";
    for (const se of g) {
      const q = se.trim();
      if (!q || q.startsWith(";") || q.startsWith("File ")) continue;
      if (q.startsWith("TABLE:")) {
        const W = q.match(/TABLE:\s+"(.+?)"/);
        fe = W ? W[1].toUpperCase() : "";
        continue;
      }
      if (q === "END TABLE DATA") {
        fe = "";
        continue;
      }
      const B = va(q);
      switch (fe) {
        case "PROGRAM CONTROL": {
          const W = B.get("CurrUnits");
          if (W) {
            const pe = W.split(",").map((ve) => ve.trim());
            pe[0] && (E.force = pe[0]), pe[1] && (E.length = pe[1]);
          }
          break;
        }
        case "MATERIAL PROPERTIES 01 - GENERAL": {
          const W = B.get("Material");
          W && !H.has(W) && H.set(W, {
            E: 0,
            nu: 0,
            G: 0
          });
          break;
        }
        case "MATERIAL PROPERTIES 02 - BASIC MECHANICAL PROPERTIES": {
          const W = B.get("Material");
          if (W) {
            const pe = H.get(W) || {
              E: 0,
              nu: 0,
              G: 0
            };
            pe.E = it(B.get("E1")), pe.G = it(B.get("G12")), pe.nu = it(B.get("U12")), pe.density = it(B.get("UnitMass")), H.set(W, pe);
          }
          break;
        }
        case "MATERIAL PROPERTIES 03A - STEEL DATA": {
          const W = B.get("Material");
          W && H.has(W) && (H.get(W).fy = it(B.get("Fy")));
          break;
        }
        case "FRAME SECTION PROPERTIES 01 - GENERAL": {
          const W = B.get("SectionName");
          W && ee.set(W, {
            material: B.get("Material") || "",
            shape: B.get("Shape") || "Rectangular",
            D: it(B.get("t3")),
            B: it(B.get("t2")),
            TF: it(B.get("tf")),
            TW: it(B.get("tw")),
            A: it(B.get("Area")),
            Iz: it(B.get("I33")),
            Iy: it(B.get("I22")),
            J: it(B.get("TorsConst"))
          });
          break;
        }
        case "AREA SECTION PROPERTIES": {
          const W = B.get("Section");
          W && U.set(W, {
            material: B.get("Material") || "",
            type: B.get("Type") || "Shell",
            thickness: it(B.get("Thickness"))
          });
          break;
        }
        case "JOINT COORDINATES": {
          const W = B.get("Joint");
          if (W) {
            const pe = it(B.get("XorR")), ve = it(B.get("Y")), Ae = it(B.get("Z"));
            j.set(W, [
              pe,
              ve,
              Ae
            ]);
          }
          break;
        }
        case "CONNECTIVITY - FRAME": {
          const W = B.get("Frame"), pe = B.get("JointI"), ve = B.get("JointJ");
          W && pe && ve && Q.push({
            name: W,
            j1: pe,
            j2: ve
          });
          break;
        }
        case "CONNECTIVITY - AREA": {
          const W = B.get("Area");
          if (W) {
            const pe = parseInt(B.get("NumJoints") || "4"), ve = [];
            for (let Ae = 1; Ae <= pe; Ae++) {
              const Ue = B.get(`Joint${Ae}`);
              Ue && ve.push(Ue);
            }
            ve.length >= 3 && we.push({
              name: W,
              joints: ve
            });
          }
          break;
        }
        case "JOINT RESTRAINT ASSIGNMENTS": {
          const W = B.get("Joint");
          if (W) {
            const pe = [
              ((_a = B.get("U1")) == null ? void 0 : _a.toLowerCase()) === "yes",
              ((_b = B.get("U2")) == null ? void 0 : _b.toLowerCase()) === "yes",
              ((_c = B.get("U3")) == null ? void 0 : _c.toLowerCase()) === "yes",
              ((_d = B.get("R1")) == null ? void 0 : _d.toLowerCase()) === "yes",
              ((_e = B.get("R2")) == null ? void 0 : _e.toLowerCase()) === "yes",
              ((_f = B.get("R3")) == null ? void 0 : _f.toLowerCase()) === "yes"
            ];
            A.set(W, pe);
          }
          break;
        }
        case "FRAME SECTION ASSIGNMENTS": {
          const W = B.get("Frame"), pe = B.get("AnalSect");
          W && pe && Y.set(W, pe);
          break;
        }
        case "AREA SECTION ASSIGNMENTS": {
          const W = B.get("Area"), pe = B.get("Section");
          W && pe && Se.set(W, pe);
          break;
        }
        case "JOINT LOADS - FORCE": {
          const W = B.get("Joint");
          W && me.push({
            joint: W,
            fx: it(B.get("F1")),
            fy: it(B.get("F2")),
            fz: it(B.get("F3")),
            mx: it(B.get("M1")),
            my: it(B.get("M2")),
            mz: it(B.get("M3"))
          });
          break;
        }
      }
    }
    return ya(E, J, H, ee, U, j, Q, we, A, Y, Se, me);
  }
  function Hl(e) {
    const g = {
      force: "KN",
      length: "m"
    };
    let F = "UX,UY,UZ,RX,RY,RZ";
    const E = /* @__PURE__ */ new Map(), J = /* @__PURE__ */ new Map(), H = /* @__PURE__ */ new Map(), ee = /* @__PURE__ */ new Map(), U = [], j = [], Q = /* @__PURE__ */ new Map(), we = [];
    let A = "", Y = "";
    for (const fe of e) {
      const se = fe.trim();
      if (!se || se.startsWith(";")) continue;
      if (!fe.startsWith(" ") && !fe.startsWith("	")) {
        const W = se.toUpperCase();
        if (W === "END") break;
        W.startsWith("SHELL SECTION") ? A = "SHELL SECTION" : W.startsWith("FRAME SECTION") ? A = "FRAME SECTION" : A = W.split(/\s+/)[0];
        continue;
      }
      const q = va(se), B = se.split(/\s+/);
      switch (A) {
        case "SYSTEM": {
          const W = q.get("DOF");
          W && (F = W);
          const pe = q.get("LENGTH");
          pe && (g.length = pe);
          const ve = q.get("FORCE");
          ve && (g.force = ve);
          break;
        }
        case "JOINT": {
          const W = B[0];
          ee.set(W, [
            it(q.get("X")),
            it(q.get("Y")),
            it(q.get("Z"))
          ]);
          break;
        }
        case "RESTRAINT": {
          const W = q.get("ADD"), pe = q.get("DOF");
          if (W && pe) {
            const ve = pe.split(","), Ae = [
              false,
              false,
              false,
              false,
              false,
              false
            ];
            for (const Ue of ve) {
              const he = Ue.toUpperCase();
              (he === "UX" || he === "U1") && (Ae[0] = true), (he === "UY" || he === "U2") && (Ae[1] = true), (he === "UZ" || he === "U3") && (Ae[2] = true), (he === "RX" || he === "R1") && (Ae[3] = true), (he === "RY" || he === "R2") && (Ae[4] = true), (he === "RZ" || he === "R3") && (Ae[5] = true);
            }
            Q.set(W, Ae);
          }
          break;
        }
        case "MATERIAL": {
          const W = q.get("NAME");
          if (W) Y = W, E.set(W, {
            E: 0,
            nu: 0,
            G: 0
          });
          else if (Y) {
            const pe = E.get(Y), ve = q.get("E");
            ve && (pe.E = it(ve));
            const Ae = q.get("U");
            Ae && (pe.nu = it(Ae)), pe.G = pe.E / (2 * (1 + pe.nu));
            const Ue = q.get("M");
            Ue && (pe.density = it(Ue));
          }
          break;
        }
        case "SHELL": {
          const W = B[0], pe = q.get("J");
          q.get("SEC"), pe && j.push({
            name: W,
            joints: pe.split(",")
          });
          break;
        }
        case "SHELL SECTION": {
          const W = q.get("NAME");
          W && H.set(W, {
            material: q.get("MAT") || "",
            type: q.get("TYPE") || "Shell",
            thickness: it(q.get("TH"))
          });
          break;
        }
        case "FRAME": {
          const W = B[0], pe = q.get("J");
          if (pe) {
            const ve = pe.split(",");
            ve.length >= 2 && U.push({
              name: W,
              j1: ve[0],
              j2: ve[1]
            });
          }
          break;
        }
        case "LOAD": {
          const W = q.get("ADD");
          W && we.push({
            joint: W,
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
    return ya(g, F, E, J, H, ee, U, j, Q, /* @__PURE__ */ new Map(), /* @__PURE__ */ new Map(), we);
  }
  function ya(e, g, F, E, J, H, ee, U, j, Q, we, A) {
    var _a;
    const Y = [], Se = /* @__PURE__ */ new Map(), me = [];
    for (const [he, je] of H) Se.set(he, me.length), Y.push(he), me.push(je);
    const fe = [], se = [], q = /* @__PURE__ */ new Map();
    for (const he of ee) {
      const je = Se.get(he.j1), We = Se.get(he.j2);
      if (je !== void 0 && We !== void 0) {
        const ge = fe.length;
        fe.push([
          je,
          We
        ]), se.push(he.name);
        const Ie = Q.get(he.name);
        Ie && q.set(ge, Ie);
      }
    }
    const B = fe.length;
    for (const he of U) {
      const je = he.joints.map((We) => Se.get(We)).filter((We) => We !== void 0);
      if (je.length >= 3) {
        const We = fe.length;
        fe.push(je), se.push(he.name);
        const ge = we.get(he.name);
        ge && q.set(We, ge);
      }
    }
    const W = fe.length - B, pe = {
      elasticities: /* @__PURE__ */ new Map(),
      shearModuli: /* @__PURE__ */ new Map(),
      areas: /* @__PURE__ */ new Map(),
      momentsOfInertiaZ: /* @__PURE__ */ new Map(),
      momentsOfInertiaY: /* @__PURE__ */ new Map(),
      torsionalConstants: /* @__PURE__ */ new Map(),
      densities: /* @__PURE__ */ new Map(),
      thicknesses: /* @__PURE__ */ new Map(),
      poissonsRatios: /* @__PURE__ */ new Map()
    }, ve = /* @__PURE__ */ new Map(), Ae = F.values().next().value || {
      E: 29e3,
      nu: 0.3,
      G: 11153
    };
    for (let he = 0; he < fe.length; he++) {
      const je = q.get(he), We = je ? E.get(je) : null, ge = je ? J.get(je) : null;
      if (We || fe[he].length === 2) {
        const Ie = We || {
          material: "",
          A: 0,
          Iz: 0,
          Iy: 0,
          J: 0,
          D: 0.3,
          B: 0.3,
          shape: "Rectangular"
        }, Le = F.get(Ie.material) || Ae, Xe = Le.E || Ae.E, dt = Le.nu || 0.3, Ke = Le.G || Xe / (2 * (1 + dt));
        pe.elasticities.set(he, Xe), pe.shearModuli.set(he, Ke), pe.areas.set(he, Ie.A || Ie.D * Ie.B), pe.momentsOfInertiaZ.set(he, Ie.Iz || Ie.B * Ie.D ** 3 / 12), pe.momentsOfInertiaY.set(he, Ie.Iy || Ie.D * Ie.B ** 3 / 12), pe.torsionalConstants.set(he, Ie.J || 0), pe.densities.set(he, Le.density || 0), ((_a = Ie.shape) == null ? void 0 : _a.includes("Wide Flange")) || Ie.shape === "I" ? ve.set(he, {
          type: "I",
          b: Ie.B,
          h: Ie.D,
          name: je || "I-section"
        }) : ve.set(he, {
          type: "rect",
          b: Ie.B,
          h: Ie.D
        });
      } else if (ge) {
        const Ie = F.get(ge.material) || Ae, Le = Ie.E || Ae.E, Xe = Ie.nu || 0.2, dt = Ie.G || Le / (2 * (1 + Xe));
        pe.elasticities.set(he, Le), pe.shearModuli.set(he, dt), pe.thicknesses.set(he, ge.thickness), pe.poissonsRatios.set(he, Xe), pe.densities.set(he, Ie.density || 0);
      }
    }
    const Ue = {
      supports: /* @__PURE__ */ new Map(),
      forces: /* @__PURE__ */ new Map()
    };
    for (const [he, je] of j) {
      const We = Se.get(he);
      We !== void 0 && Ue.supports.set(We, je);
    }
    for (const he of A) {
      const je = Se.get(he.joint);
      if (je !== void 0) {
        const We = Ue.forces.get(je) || [
          0,
          0,
          0,
          0,
          0,
          0
        ];
        We[0] += he.fx, We[1] += he.fy, We[2] += he.fz, We[3] += he.mx, We[4] += he.my, We[5] += he.mz, Ue.forces.set(je, We);
      }
    }
    return {
      units: e,
      dof: g,
      materials: F,
      frameSections: E,
      shellSections: J,
      nodes: me,
      nodeNames: Y,
      nodeNameToIdx: Se,
      elements: fe,
      elementNames: se,
      elementSections: q,
      nodeInputs: Ue,
      elementInputs: pe,
      sectionShapes: ve,
      info: {
        nNodes: me.length,
        nFrames: B,
        nShells: W,
        title: `SAP2000 (${B} frames, ${W} shells)`
      }
    };
  }
  function jl(e) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j;
    const { nodes: g, elements: F, nodeInputs: E, elementInputs: J } = e, H = e.units || {
      force: "KN",
      length: "m"
    }, ee = e.title || "Awatif Model", U = [], j = (q) => U.push(q), Q = () => U.push(" ");
    j(`File ${ee}.$2k was saved on m/d/yy at h:mm:ss`), Q(), j('TABLE:  "ACTIVE DEGREES OF FREEDOM"'), j("   UX=Yes   UY=Yes   UZ=Yes   RX=Yes   RY=Yes   RZ=Yes"), Q();
    const we = [], A = [];
    if (F.forEach((q, B) => {
      q.length === 2 ? we.push(B) : A.push(B);
    }), we.length > 0) {
      j('TABLE:  "CONNECTIVITY - FRAME"');
      for (const q of we) {
        const B = F[q];
        j(`   Frame=${q + 1}   JointI=${B[0] + 1}   JointJ=${B[1] + 1}   IsCurved=No`);
      }
      Q();
    }
    if (A.length > 0) {
      j('TABLE:  "CONNECTIVITY - AREA"');
      for (const q of A) {
        const B = F[q], W = B.map((pe, ve) => `Joint${ve + 1}=${pe + 1}`).join("   ");
        j(`   Area=${q + 1}   NumJoints=${B.length}   ${W}`);
      }
      Q();
    }
    j('TABLE:  "COORDINATE SYSTEMS"'), j("   Name=GLOBAL   Type=Cartesian   X=0   Y=0   Z=0   AboutZ=0   AboutY=0   AboutX=0"), Q(), j('TABLE:  "DATABASE FORMAT TYPES"'), j("   UnitsCurr=Yes   OverrideE=No"), Q();
    const Y = /* @__PURE__ */ new Map(), Se = /* @__PURE__ */ new Map();
    for (const q of we) {
      const B = ((_a = J.areas) == null ? void 0 : _a.get(q)) || 0, W = ((_b = J.momentsOfInertiaZ) == null ? void 0 : _b.get(q)) || 0, pe = ((_c = J.momentsOfInertiaY) == null ? void 0 : _c.get(q)) || 0, ve = ((_d = J.torsionalConstants) == null ? void 0 : _d.get(q)) || 0, Ae = ((_e = J.elasticities) == null ? void 0 : _e.get(q)) || 0, Ue = `MAT_${Math.round(Ae)}`, he = `A${B.toPrecision(6)}_Iz${W.toPrecision(6)}`;
      if (!Y.has(he)) {
        let We = 0.3, ge = 0.3;
        B > 0 && W > 0 && (We = Math.sqrt(12 * W / B), ge = B / We), Y.set(he, {
          A: B,
          Iz: W,
          Iy: pe,
          J: ve,
          b: ge,
          h: We,
          matKey: Ue
        });
      }
      const je = [
        ...Y.keys()
      ].indexOf(he) + 1;
      Se.set(q, `SEC${je}`);
    }
    if (we.length > 0) {
      j('TABLE:  "FRAME SECTION ASSIGNMENTS"');
      for (const q of we) {
        const B = Se.get(q) || "SEC1";
        j(`   Frame=${q + 1}   AutoSelect=N.A.   AnalSect=${B}   MatProp=Default`);
      }
      Q();
    }
    if (Y.size > 0) {
      j('TABLE:  "FRAME SECTION PROPERTIES 01 - GENERAL"');
      let q = 0;
      for (const [, B] of Y) {
        q++;
        const W = B.A * 5 / 6;
        j(`   SectionName=SEC${q}   Material=${B.matKey}   Shape=Rectangular   t3=${Rt(B.h)}   t2=${Rt(B.b)}   Area=${Rt(B.A)}   TorsConst=${Rt(B.J)}   I33=${Rt(B.Iz)}   I22=${Rt(B.Iy)}   I23=0   AS2=${Rt(W)}   AS3=${Rt(W)} _`), j("        Color=Blue   FromFile=No   AMod=1   A2Mod=1   A3Mod=1   JMod=1   I2Mod=1   I3Mod=1   MMod=1   WMod=1");
      }
      Q();
    }
    const me = /* @__PURE__ */ new Map(), fe = /* @__PURE__ */ new Map();
    for (const q of A) {
      const B = ((_f = J.thicknesses) == null ? void 0 : _f.get(q)) || 0.1, W = ((_g = J.elasticities) == null ? void 0 : _g.get(q)) || 0, pe = `MAT_${Math.round(W)}`, ve = `t${B.toPrecision(6)}`;
      me.has(ve) || me.set(ve, {
        t: B,
        matKey: pe
      });
      const Ae = [
        ...me.keys()
      ].indexOf(ve) + 1;
      fe.set(q, `SSEC${Ae}`);
    }
    if (A.length > 0) {
      j('TABLE:  "AREA SECTION ASSIGNMENTS"');
      for (const B of A) {
        const W = fe.get(B) || "SSEC1";
        j(`   Area=${B + 1}   Section=${W}   MatProp=Default`);
      }
      Q(), j('TABLE:  "AREA SECTION PROPERTIES"');
      let q = 0;
      for (const [, B] of me) q++, j(`   Section=SSEC${q}   Material=${B.matKey}   MatAngle=0   AreaType=Shell   Type=ShellThin   DrillDOF=Yes   Thickness=${Rt(B.t)}   BendThick=${Rt(B.t)}   Color=Cyan`);
      Q();
    }
    j('TABLE:  "JOINT COORDINATES"');
    for (let q = 0; q < g.length; q++) {
      const B = g[q];
      j(`   Joint=${q + 1}   CoordSys=GLOBAL   CoordType=Cartesian   XorR=${Rt(B[0])}   Y=${Rt(B[1])}   Z=${Rt(B[2])}   SpecialJt=No`);
    }
    if (Q(), E.supports && E.supports.size > 0) {
      j('TABLE:  "JOINT RESTRAINT ASSIGNMENTS"');
      for (const [q, B] of E.supports) {
        if (!B.some((pe) => pe)) continue;
        const W = (pe) => pe ? "Yes" : "No";
        j(`   Joint=${q + 1}   U1=${W(B[0])}   U2=${W(B[1])}   U3=${W(B[2])}   R1=${W(B[3])}   R2=${W(B[4])}   R3=${W(B[5])}`);
      }
      Q();
    }
    if (j('TABLE:  "LOAD PATTERN DEFINITIONS"'), j("   LoadPat=DEAD   DesignType=Dead   SelfWtMult=0"), Q(), j('TABLE:  "LOAD CASE DEFINITIONS"'), j('   Case=DEAD   Type=LinStatic   InitialCond=Zero   DesTypeOpt="Prog Det"   DesignType=Dead   DesActOpt="Prog Det"   DesignAct=Non-Composite   AutoType=None   RunCase=Yes'), Q(), j('TABLE:  "CASE - STATIC 1 - LOAD ASSIGNMENTS"'), j('   Case=DEAD   LoadType="Load pattern"   LoadName=DEAD   LoadSF=1'), Q(), E.forces && E.forces.size > 0) {
      j('TABLE:  "JOINT LOADS - FORCE"');
      for (const [q, B] of E.forces) B.some((W) => Math.abs(W) > 1e-12) && j(`   Joint=${q + 1}   LoadPat=DEAD   CoordSys=GLOBAL   F1=${Rt(B[0])}   F2=${Rt(B[1])}   F3=${Rt(B[2])}   M1=${Rt(B[3])}   M2=${Rt(B[4])}   M3=${Rt(B[5])}`);
      Q();
    }
    const se = /* @__PURE__ */ new Map();
    for (let q = 0; q < F.length; q++) {
      const B = ((_h = J.elasticities) == null ? void 0 : _h.get(q)) || 0, W = ((_i = J.shearModuli) == null ? void 0 : _i.get(q)) || 0, pe = B > 0 && W > 0 ? Math.max(0, Math.min(0.5, B / (2 * W) - 1)) : 0.2, ve = ((_j = J.densities) == null ? void 0 : _j.get(q)) || 0, Ae = `MAT_${Math.round(B)}`;
      se.has(Ae) || se.set(Ae, {
        E: B,
        nu: pe,
        G: W,
        rho: ve
      });
    }
    j('TABLE:  "MATERIAL PROPERTIES 01 - GENERAL"');
    for (const [q] of se) j(`   Material=${q}   Type=Concrete   SymType=Isotropic   TempDepend=No   Color=Green`);
    Q(), j('TABLE:  "MATERIAL PROPERTIES 02 - BASIC MECHANICAL PROPERTIES"');
    for (const [q, B] of se) j(`   Material=${q}   UnitWeight=${Rt(B.rho * 9.81)}   UnitMass=${Rt(B.rho)}   E1=${Rt(B.E)}   G12=${Rt(B.G)}   U12=${Rt(B.nu)}   A1=9.9E-06`);
    Q(), j('TABLE:  "MATERIAL PROPERTIES 03B - CONCRETE DATA"');
    for (const [q] of se) j(`   Material=${q}   Fc=27579   eFc=27579   LtWtConc=No   SSCurveOpt=Mander   SSHysType=Takeda   SFc=0.00222   SCap=0.005   FinalSlope=-0.1   FAngle=0   DAngle=0`);
    return Q(), j('TABLE:  "PROGRAM CONTROL"'), j(`   ProgramName=SAP2000   Version=24.1.0   CurrUnits="${H.force}, ${H.length}, C"   SteelCode="AISC 360-16"   ConcCode="ACI 318-19"   AlumCode="AA 2015"   ColdCode=AISI-16   RegenHinge=Yes`), Q(), j("END TABLE DATA"), j(""), U.join(`\r
`);
  }
  function Rt(e) {
    return e === 0 || Math.abs(e) < 1e-15 ? "0" : Math.abs(e) >= 1e6 || Math.abs(e) < 1e-3 && Math.abs(e) > 0 ? e.toExponential(8) : parseFloat(e.toPrecision(10)).toString();
  }
  function Wl(e) {
    const { e2kModel: g } = e, F = g == null ? void 0 : g.rawSections;
    return F && F.size > 0 ? Yl(F) : Gl(e);
  }
  function Yl(e, g) {
    const F = [], E = [
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
    F.push("$ File exported from Awatif FEM Studio (round-trip)"), F.push("");
    for (const J of E) {
      const H = e.get(J);
      if (!(!H || H.length === 0)) {
        F.push(`$ ${J}`);
        for (const ee of H) F.push(ee);
        F.push("");
      }
    }
    for (const [J, H] of e) if (!E.includes(J) && H.length !== 0) {
      F.push(`$ ${J}`);
      for (const ee of H) F.push(ee);
      F.push("");
    }
    return F.push("  END"), F.push("$ END OF MODEL FILE"), F.join(`\r
`);
  }
  function Gl(e) {
    var _a, _b, _c, _d;
    const { nodes: g, elements: F, nodeInputs: E, elementInputs: J, title: H, units: ee } = e, U = (ee == null ? void 0 : ee.force) || "TONF", j = (ee == null ? void 0 : ee.length) || "M", Q = [], we = (ge) => Math.round(ge * 1e4) / 1e4;
    Q.push("$ File exported from Awatif FEM Studio"), Q.push(""), Q.push("$ PROGRAM INFORMATION"), Q.push('  PROGRAM  "AWATIF"  VERSION "1.0.0"  '), Q.push(""), Q.push("$ CONTROLS"), Q.push(`  UNITS  "${U}"  "${j}"  "C"  `), H && Q.push(`  TITLE2  "${H}"  `), Q.push("");
    const A = /* @__PURE__ */ new Set();
    g.forEach((ge) => A.add(we(ge[1])));
    const Y = [
      ...A
    ].sort((ge, Ie) => ge - Ie), Se = [], me = /* @__PURE__ */ new Map();
    Se.push("Base"), me.set(Y[0], "Base");
    for (let ge = 1; ge < Y.length; ge++) {
      const Ie = `Level_${ge}`;
      Se.push(Ie), me.set(Y[ge], Ie);
    }
    Q.push("$ STORIES - IN SEQUENCE FROM TOP");
    for (let ge = Y.length - 1; ge >= 1; ge--) Q.push(`  STORY "${Se[ge]}"  HEIGHT ${we(Y[ge] - Y[ge - 1])} MASTERSTORY "Yes"  `);
    Y.length > 0 && Q.push(`  STORY "Base"  ELEV ${Y[0]} `), Q.push(""), F.some((ge) => ge.length === 4) && (Q.push("$ DIAPHRAGM NAMES"), Q.push('  DIAPHRAGM "D1"    TYPE RIGID'), Q.push("")), Q.push("$ MATERIAL PROPERTIES");
    const se = /* @__PURE__ */ new Set();
    (_a = J.elasticities) == null ? void 0 : _a.forEach((ge) => se.add(ge));
    const q = /* @__PURE__ */ new Map();
    let B = 0;
    for (const ge of se) {
      const Ie = `Mat_${++B}`;
      q.set(ge, Ie), Q.push(`  MATERIAL  "${Ie}"    TYPE "Concrete"    WEIGHTPERVOLUME 2.4`), Q.push(`  MATERIAL  "${Ie}"    SYMTYPE "Isotropic"  E ${ge}  U 0.2  A 1E-05`);
    }
    Q.push(""), Q.push("$ FRAME SECTIONS");
    const W = /* @__PURE__ */ new Set(), pe = /* @__PURE__ */ new Map(), ve = /* @__PURE__ */ new Map();
    F.forEach((ge, Ie) => {
      var _a2, _b2;
      if (ge.length !== 2) return;
      const Le = (_a2 = J.sectionShapes) == null ? void 0 : _a2.get(Ie), Xe = ((_b2 = J.elasticities) == null ? void 0 : _b2.get(Ie)) ?? 0, dt = q.get(Xe) || "Mat_1", Ke = (Le == null ? void 0 : Le.h) ?? 0, pt = (Le == null ? void 0 : Le.b) ?? 0, mt = (Le == null ? void 0 : Le.d) ?? 0, At = (Le == null ? void 0 : Le.tf) ?? 0, qt = (Le == null ? void 0 : Le.tw) ?? 0, Dt = (Le == null ? void 0 : Le.type) || "rect", $t = `${Dt}_${Ke}_${pt}_${mt}_${At}_${qt}`;
      (Le == null ? void 0 : Le.name) && !ve.has($t) && ve.set($t, Le.name);
      let ht = ve.get($t);
      if (ht || (Dt === "rect" ? ht = `R${we(pt * 100)}x${we(Ke * 100)}` : Dt === "circ" ? ht = `C_D${we(mt * 100)}` : Dt === "I" ? ht = `I_${we(Ke * 100)}` : ht = `Sec_${W.size + 1}`, ve.set($t, ht)), pe.set(Ie, ht), W.has(ht)) return;
      W.add(ht);
      const qe = {
        rect: "Concrete Rectangular",
        circ: "Concrete Circle",
        I: "Steel I/Wide Flange",
        HSS: "Steel Tube",
        pipe: "Steel Pipe",
        L: "Steel Angle",
        C: "Steel Channel",
        "2C": "Steel Double Channel"
      }[Dt] || "Concrete Rectangular";
      let St = `  FRAMESECTION  "${ht}"  MATERIAL "${dt}"  SHAPE "${qe}"`;
      Ke && (St += `  D ${Ke}`), pt && (St += `  B ${pt}`), mt && !Ke && (St += `  D ${mt}`), At && (St += `  TF ${At}`), qt && (St += `  TW ${qt}`), Q.push(St);
    }), Q.push("");
    const Ae = /* @__PURE__ */ new Map();
    let Ue = 0;
    g.forEach((ge) => {
      const Ie = `${we(ge[0])},${we(ge[2])}`;
      Ae.has(Ie) || Ae.set(Ie, `${++Ue}`);
    }), Q.push("$ POINT COORDINATES");
    for (const [ge, Ie] of Ae) {
      const [Le, Xe] = ge.split(",").map(Number);
      Q.push(`  POINT "${Ie}"  ${Le} ${Xe} `);
    }
    Q.push("");
    const he = (ge) => {
      const Ie = g[ge], Le = `${we(Ie[0])},${we(Ie[2])}`;
      return {
        pt: Ae.get(Le) || "1",
        story: me.get(we(Ie[1])) || "Base"
      };
    };
    Q.push("$ LINE CONNECTIVITIES");
    const je = [];
    F.forEach((ge, Ie) => {
      if (ge.length !== 2) return;
      const Le = Vl(g, ge), Xe = pe.get(Ie) || `Sec_${Ie}`;
      if (Le === "BEAM") {
        const dt = he(ge[0]), Ke = he(ge[1]);
        Q.push(`  LINE  "E${Ie + 1}"  BEAM  "${dt.pt}"  "${Ke.pt}"  0`), je.push(`  LINEASSIGN  "E${Ie + 1}"  "${dt.story}"  SECTION "${Xe}"  MINNUMSTA 3 AUTOMESH "YES"  MESHATINTERSECTIONS "YES"  `);
      } else {
        const dt = g[ge[0]][1] <= g[ge[1]][1] ? ge[0] : ge[1], Ke = g[ge[0]][1] <= g[ge[1]][1] ? ge[1] : ge[0];
        he(dt);
        const pt = he(Ke), mt = we(g[dt][1]), At = we(g[Ke][1]), qt = Y.indexOf(mt), Dt = Y.indexOf(At), $t = Math.max(1, Dt >= 0 && qt >= 0 ? Dt - qt : 1);
        Q.push(`  LINE  "E${Ie + 1}"  ${Le}  "${pt.pt}"  "${pt.pt}"  ${$t}`);
        for (let ht = 0; ht < $t; ht++) {
          const mo = Dt - ht;
          mo >= 0 && mo < Se.length && je.push(`  LINEASSIGN  "E${Ie + 1}"  "${Se[mo]}"  SECTION "${Xe}"  MINNUMSTA 3 AUTOMESH "YES"  MESHATINTERSECTIONS "YES"  `);
        }
      }
    }), Q.push(""), Q.push("$ POINT ASSIGNS"), (_b = E.supports) == null ? void 0 : _b.forEach((ge, Ie) => {
      const Le = [];
      if (ge[0] && Le.push("UX"), ge[1] && Le.push("UY"), ge[2] && Le.push("UZ"), ge[3] && Le.push("RX"), ge[4] && Le.push("RY"), ge[5] && Le.push("RZ"), Le.length > 0) {
        const Xe = he(Ie);
        Q.push(`  POINTASSIGN  "${Xe.pt}"  "${Xe.story}"  RESTRAINT "${Le.join(" ")}"  `);
      }
    }), Q.push(""), Q.push("$ LINE ASSIGNS"), je.forEach((ge) => Q.push(ge)), Q.push("");
    const We = [];
    if (F.forEach((ge, Ie) => {
      if (ge.length === 4) {
        const Le = g[ge[0]], Xe = g[ge[1]], dt = g[ge[2]], Ke = [
          Xe[0] - Le[0],
          Xe[1] - Le[1],
          Xe[2] - Le[2]
        ], pt = [
          dt[0] - Le[0],
          dt[1] - Le[1],
          dt[2] - Le[2]
        ], mt = Math.abs(Ke[2] * pt[0] - Ke[0] * pt[2]), At = Math.sqrt((Ke[1] * pt[2] - Ke[2] * pt[1]) ** 2 + mt ** 2 + (Ke[0] * pt[1] - Ke[1] * pt[0]) ** 2), qt = At > 1e-10 && mt / At < 0.5;
        We.push({
          idx: Ie,
          el: ge,
          isWall: qt
        });
      }
    }), We.some((ge) => !ge.isWall)) {
      Q.push("$ SLAB PROPERTIES");
      const ge = ((_c = J.thicknesses) == null ? void 0 : _c.values().next().value) ?? 0.15;
      Q.push(`  SHELLPROP  "Losa"  PROPTYPE  "Slab"  MATERIAL "${q.values().next().value || "Mat_1"}"  MODELINGTYPE "ShellThin"  SLABTYPE "Slab"  SLABTHICKNESS ${ge} `), Q.push("");
    }
    if (We.some((ge) => ge.isWall)) {
      Q.push("$ WALL PROPERTIES");
      const ge = ((_d = J.thicknesses) == null ? void 0 : _d.values().next().value) ?? 0.2;
      Q.push(`  SHELLPROP  "Muro"  PROPTYPE  "Wall"  MATERIAL "${q.values().next().value || "Mat_1"}"  MODELINGTYPE "ShellThick"  WALLTHICKNESS ${ge} `), Q.push("");
    }
    if (We.length > 0) {
      Q.push("$ AREA CONNECTIVITIES");
      const ge = [];
      We.forEach((Ie, Le) => {
        const { el: Xe, isWall: dt } = Ie, Ke = dt ? `W${Le + 1}` : `F${Le + 1}`, pt = dt ? "PANEL" : "FLOOR", mt = Xe.map((At) => he(At));
        if (dt) {
          const At = g[Xe[0]][1] <= g[Xe[2]][1] ? 0 : 2, qt = g[Xe[1]][1] <= g[Xe[3]][1] ? 1 : 3;
          Q.push(`  AREA "${Ke}"  ${pt}  4  "${mt[At].pt}"  "${mt[qt].pt}"  "${mt[qt].pt}"  "${mt[At].pt}"  1  1  0  0  `);
          const Dt = mt[At === 0 ? 2 : 0].story;
          ge.push(`  AREAASSIGN  "${Ke}"  "${Dt}"  SECTION "Muro"  OBJMESHTYPE "DEFAULT"  ADDRESTRAINT "Yes"  CARDINALPOINT "MIDDLE"  TRANSFORMSTIFFNESSFOROFFSETS "No"  `);
        } else Q.push(`  AREA "${Ke}"  ${pt}  4  "${mt[0].pt}"  "${mt[1].pt}"  "${mt[2].pt}"  "${mt[3].pt}"  0  0  0  0  `), ge.push(`  AREAASSIGN  "${Ke}"  "${mt[0].story}"  SECTION "Losa"  DIAPH  "D1"  OBJMESHTYPE "DEFAULT"  ADDRESTRAINT "Yes"  CARDINALPOINT "TOP"  TRANSFORMSTIFFNESSFOROFFSETS "No"  `);
      }), Q.push(""), Q.push("$ AREA ASSIGNS"), ge.forEach((Ie) => Q.push(Ie)), Q.push("");
    }
    return Q.push("$ LOAD PATTERNS"), Q.push('  LOADPATTERN "Dead"  TYPE  "Dead"  SELFWEIGHT  1'), Q.push('  LOADPATTERN "Live"  TYPE  "Live"  SELFWEIGHT  0'), Q.push(""), E.loads && E.loads.size > 0 && (Q.push("$ POINT OBJECT LOADS"), E.loads.forEach((ge, Ie) => {
      const [Le, Xe, dt] = ge, Ke = he(Ie);
      Math.abs(Le) > 1e-10 && Q.push(`  POINTLOAD  "${Ke.pt}"  "${Ke.story}"  "Dead"  TYPE "FORCE"  FX ${Le}`), Math.abs(Xe) > 1e-10 && Q.push(`  POINTLOAD  "${Ke.pt}"  "${Ke.story}"  "Dead"  TYPE "FORCE"  FY ${Xe}`), Math.abs(dt) > 1e-10 && Q.push(`  POINTLOAD  "${Ke.pt}"  "${Ke.story}"  "Dead"  TYPE "FORCE"  FZ ${dt}`);
    }), Q.push("")), Q.push("  END"), Q.push("$ END OF MODEL FILE"), Q.join(`\r
`);
  }
  function Vl(e, g) {
    const F = e[g[0]], E = e[g[1]], J = Math.abs(E[1] - F[1]), H = Math.sqrt((E[0] - F[0]) ** 2 + (E[2] - F[2]) ** 2), ee = J > H * 0.5;
    return ee && H > 0.01 ? "BRACE" : ee ? "COLUMN" : "BEAM";
  }
  function Jl(e) {
    var _a, _b;
    const { nodes: g, elements: F, nodeInputs: E, elementInputs: J } = e, H = [];
    return H.push("# OpenSeesPy model exported from Awatif FEM Studio"), H.push(`# ${g.length} nodes, ${F.length} elements`), H.push(""), H.push("import openseespy.opensees as ops"), H.push(""), H.push("ops.wipe()"), H.push("ops.model('basic', '-ndm', 3, '-ndf', 6)"), H.push(""), H.push("# --- Nodes ---"), g.forEach((ee, U) => {
      H.push(`ops.node(${U + 1}, ${ee[0]}, ${ee[1]}, ${ee[2]})`);
    }), H.push(""), H.push("# --- Boundary Conditions ---"), (_a = E.supports) == null ? void 0 : _a.forEach((ee, U) => {
      const j = ee.map((Q) => Q ? 1 : 0).join(", ");
      H.push(`ops.fix(${U + 1}, ${j})`);
    }), H.push(""), H.push("# --- Geometric Transformations ---"), H.push("ops.geomTransf('Linear', 1, 0.0, 0.0, 1.0)  # beams (vecxz = Z)"), H.push("ops.geomTransf('Linear', 2, -1.0, 0.0, 0.0)  # columns (vecxz = -X)"), H.push(""), H.push("# --- Elements (elasticBeamColumn) ---"), F.forEach((ee, U) => {
      var _a2, _b2, _c, _d, _e, _f;
      if (ee.length !== 2) return;
      const j = g[ee[0]], Q = g[ee[1]], A = Math.abs(Q[2] - j[2]) > Math.max(Math.abs(Q[0] - j[0]), Math.abs(Q[1] - j[1])) ? 2 : 1, Y = ((_a2 = J.areas) == null ? void 0 : _a2.get(U)) ?? 1, Se = ((_b2 = J.elasticities) == null ? void 0 : _b2.get(U)) ?? 2e5, me = ((_c = J.shearModuli) == null ? void 0 : _c.get(U)) ?? 8e4, fe = ((_d = J.torsionalConstants) == null ? void 0 : _d.get(U)) ?? 1, se = ((_e = J.momentsOfInertiaY) == null ? void 0 : _e.get(U)) ?? 1, q = ((_f = J.momentsOfInertiaZ) == null ? void 0 : _f.get(U)) ?? 1;
      H.push(`ops.element('elasticBeamColumn', ${U + 1}, ${ee[0] + 1}, ${ee[1] + 1}, ${Y}, ${Se}, ${me}, ${fe}, ${se}, ${q}, ${A})`);
    }), H.push(""), E.loads && E.loads.size > 0 && (H.push("# --- Loads ---"), H.push("ops.timeSeries('Linear', 1)"), H.push("ops.pattern('Plain', 1, 1)"), E.loads.forEach((ee, U) => {
      const j = ee.map((Q) => Q).join(", ");
      H.push(`ops.load(${U + 1}, ${j})`);
    }), H.push("")), H.push("# --- Analysis ---"), H.push("ops.system('BandGeneral')"), H.push("ops.numberer('RCM')"), H.push("ops.constraints('Plain')"), H.push("ops.integrator('LoadControl', 1.0)"), H.push("ops.algorithm('Linear')"), H.push("ops.analysis('Static')"), H.push("ops.analyze(1)"), H.push(""), H.push("# --- Results ---"), H.push('print("\\n=== Displacements ===")'), g.forEach((ee, U) => {
      H.push(`print(f"Node {${U + 1}}: {ops.nodeDisp(${U + 1})}")`);
    }), H.push(""), H.push('print("\\n=== Reactions ===")'), H.push("ops.reactions()"), (_b = E.supports) == null ? void 0 : _b.forEach((ee, U) => {
      H.push(`print(f"Node {${U + 1}}: {ops.nodeReaction(${U + 1})}")`);
    }), H.join(`
`);
  }
  function Xl(e) {
    var _a, _b;
    const { nodes: g, elements: F, nodeInputs: E, elementInputs: J } = e, H = [];
    return H.push("# OpenSees Tcl model exported from Awatif FEM Studio"), H.push(`# ${g.length} nodes, ${F.length} elements`), H.push(""), H.push("wipe"), H.push("model basic -ndm 3 -ndf 6"), H.push(""), H.push("# --- Nodes ---"), g.forEach((ee, U) => {
      H.push(`node ${U + 1} ${ee[0]} ${ee[1]} ${ee[2]}`);
    }), H.push(""), H.push("# --- Boundary Conditions ---"), (_a = E.supports) == null ? void 0 : _a.forEach((ee, U) => {
      const j = ee.map((Q) => Q ? 1 : 0).join(" ");
      H.push(`fix ${U + 1} ${j}`);
    }), H.push(""), H.push("# --- Geometric Transformations ---"), H.push("geomTransf Linear 1 0.0 0.0 1.0"), H.push("geomTransf Linear 2 -1.0 0.0 0.0"), H.push(""), H.push("# --- Elements ---"), F.forEach((ee, U) => {
      var _a2, _b2, _c, _d, _e, _f;
      if (ee.length !== 2) return;
      const j = g[ee[0]], Q = g[ee[1]], A = Math.abs(Q[2] - j[2]) > Math.max(Math.abs(Q[0] - j[0]), Math.abs(Q[1] - j[1])) ? 2 : 1, Y = ((_a2 = J.areas) == null ? void 0 : _a2.get(U)) ?? 1, Se = ((_b2 = J.elasticities) == null ? void 0 : _b2.get(U)) ?? 2e5, me = ((_c = J.shearModuli) == null ? void 0 : _c.get(U)) ?? 8e4, fe = ((_d = J.torsionalConstants) == null ? void 0 : _d.get(U)) ?? 1, se = ((_e = J.momentsOfInertiaY) == null ? void 0 : _e.get(U)) ?? 1, q = ((_f = J.momentsOfInertiaZ) == null ? void 0 : _f.get(U)) ?? 1;
      H.push(`element elasticBeamColumn ${U + 1} ${ee[0] + 1} ${ee[1] + 1} ${Y} ${Se} ${me} ${fe} ${se} ${q} ${A}`);
    }), H.push(""), E.loads && E.loads.size > 0 && (H.push("# --- Loads ---"), H.push("timeSeries Linear 1"), H.push("pattern Plain 1 1 {"), E.loads.forEach((ee, U) => {
      const j = ee.map((Q) => Q).join(" ");
      H.push(`  load ${U + 1} ${j}`);
    }), H.push("}"), H.push("")), H.push("# --- Analysis ---"), H.push("system BandGeneral"), H.push("numberer RCM"), H.push("constraints Plain"), H.push("integrator LoadControl 1.0"), H.push("algorithm Linear"), H.push("analysis Static"), H.push("analyze 1"), H.push(""), H.push("# --- Results ---"), H.push('puts "\\n=== Displacements ==="'), g.forEach((ee, U) => {
      H.push(`puts "Node ${U + 1}: [nodeDisp ${U + 1}]"`);
    }), H.push('puts "\\n=== Reactions ==="'), H.push("reactions"), (_b = E.supports) == null ? void 0 : _b.forEach((ee, U) => {
      H.push(`puts "Node ${U + 1}: [nodeReaction ${U + 1}]"`);
    }), H.join(`
`);
  }
  function Ul(e) {
    const g = [], F = [], E = /* @__PURE__ */ new Map(), J = /* @__PURE__ */ new Map(), H = /* @__PURE__ */ new Map(), ee = /* @__PURE__ */ new Map(), U = /* @__PURE__ */ new Map(), j = /* @__PURE__ */ new Map(), Q = /* @__PURE__ */ new Map(), we = /* @__PURE__ */ new Map(), A = /* @__PURE__ */ new Map(), Y = /* @__PURE__ */ new Map();
    for (const Se of e.split(/\r?\n/)) {
      const me = Se.trim(), fe = me.match(/ops\.node\(\s*(\d+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)/);
      if (fe) {
        const W = parseInt(fe[1]), pe = g.length;
        g.push([
          parseFloat(fe[2]),
          parseFloat(fe[3]),
          parseFloat(fe[4])
        ]), A.set(W, pe);
        continue;
      }
      const se = me.match(/ops\.fix\(\s*(\d+)\s*,\s*(\d)\s*,\s*(\d)\s*,\s*(\d)\s*,\s*(\d)\s*,\s*(\d)\s*,\s*(\d)/);
      if (se) {
        const W = parseInt(se[1]), pe = A.get(W);
        pe !== void 0 && E.set(pe, [
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
        const W = parseInt(q[1]), pe = A.get(parseInt(q[2])), ve = A.get(parseInt(q[3]));
        if (pe !== void 0 && ve !== void 0) {
          const Ae = F.length;
          F.push([
            pe,
            ve
          ]), Y.set(W, Ae), U.set(Ae, parseFloat(q[4])), H.set(Ae, parseFloat(q[5])), ee.set(Ae, parseFloat(q[6])), we.set(Ae, parseFloat(q[7])), j.set(Ae, parseFloat(q[8])), Q.set(Ae, parseFloat(q[9]));
        }
        continue;
      }
      const B = me.match(/ops\.load\(\s*(\d+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)/);
      if (B) {
        const W = A.get(parseInt(B[1]));
        W !== void 0 && J.set(W, [
          parseFloat(B[2]),
          parseFloat(B[3]),
          parseFloat(B[4]),
          parseFloat(B[5]),
          parseFloat(B[6]),
          parseFloat(B[7])
        ]);
      }
    }
    return {
      nodes: g,
      elements: F,
      nodeInputs: {
        supports: E,
        loads: J
      },
      elementInputs: {
        elasticities: H,
        shearModuli: ee,
        areas: U,
        momentsOfInertiaY: j,
        momentsOfInertiaZ: Q,
        torsionalConstants: we
      }
    };
  }
  function Kl(e) {
    const g = [], F = [], E = /* @__PURE__ */ new Map(), J = /* @__PURE__ */ new Map(), H = /* @__PURE__ */ new Map(), ee = /* @__PURE__ */ new Map(), U = /* @__PURE__ */ new Map(), j = /* @__PURE__ */ new Map(), Q = /* @__PURE__ */ new Map(), we = /* @__PURE__ */ new Map(), A = /* @__PURE__ */ new Map();
    for (const Y of e.split(/\r?\n/)) {
      const Se = Y.trim();
      if (Se.startsWith("#") || Se.startsWith("//")) continue;
      const me = Se.split(/\s+/);
      if (me[0] === "node" && me.length >= 5) {
        const fe = parseInt(me[1]), se = g.length;
        g.push([
          parseFloat(me[2]),
          parseFloat(me[3]),
          parseFloat(me[4])
        ]), A.set(fe, se);
        continue;
      }
      if (me[0] === "fix" && me.length >= 8) {
        const fe = A.get(parseInt(me[1]));
        fe !== void 0 && E.set(fe, [
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
        const fe = A.get(parseInt(me[3])), se = A.get(parseInt(me[4]));
        if (fe !== void 0 && se !== void 0) {
          const q = F.length;
          F.push([
            fe,
            se
          ]), U.set(q, parseFloat(me[5])), H.set(q, parseFloat(me[6])), ee.set(q, parseFloat(me[7])), we.set(q, parseFloat(me[8])), j.set(q, parseFloat(me[9])), Q.set(q, parseFloat(me[10]));
        }
        continue;
      }
      if (me[0] === "load" && me.length >= 8) {
        const fe = A.get(parseInt(me[1]));
        fe !== void 0 && J.set(fe, [
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
      nodes: g,
      elements: F,
      nodeInputs: {
        supports: E,
        loads: J
      },
      elementInputs: {
        elasticities: H,
        shearModuli: ee,
        areas: U,
        momentsOfInertiaY: j,
        momentsOfInertiaZ: Q,
        torsionalConstants: we
      }
    };
  }
  function oo(e) {
    const g = [];
    let F = 0, E = false, J = "";
    for (let H = 0; H < e.length; H++) {
      const ee = e[H];
      if (ee === "'" && (H === 0 || e[H - 1] !== "\\")) {
        E = !E, J += ee;
        continue;
      }
      if (E) {
        J += ee;
        continue;
      }
      if (ee === "(") {
        F++, J += ee;
        continue;
      }
      if (ee === ")") {
        F--, J += ee;
        continue;
      }
      if (ee === "," && F === 0) {
        g.push(J.trim()), J = "";
        continue;
      }
      J += ee;
    }
    return J.trim() && g.push(J.trim()), g;
  }
  function $a(e, g) {
    const F = oo(e);
    if (g < F.length) {
      let E = F[g].trim();
      return E.startsWith("'") && E.endsWith("'") && (E = E.slice(1, -1)), E === "$" ? null : E;
    }
    return null;
  }
  function Zl(e) {
    const g = {
      schema: "",
      project: "",
      app: ""
    }, F = {}, E = {}, J = e.match(/FILE_SCHEMA\s*\(\s*\(\s*'([^']*)'/i);
    J && (g.schema = J[1]);
    const H = /^#(\d+)\s*=\s*([A-Z][A-Z0-9_]*)\s*\(([\s\S]*?)\)\s*;\s*$/gm;
    let ee;
    for (; (ee = H.exec(e)) !== null; ) {
      const U = parseInt(ee[1]), j = ee[2].toUpperCase();
      F[U] = {
        id: U,
        type: j,
        args: ee[3]
      }, E[j] || (E[j] = []), E[j].push(U);
    }
    if (E.IFCPROJECT) {
      const U = F[E.IFCPROJECT[0]];
      if (U) {
        const j = $a(U.args, 2);
        j && (g.project = j);
      }
    }
    return {
      meta: g,
      entities: F,
      typeIndex: E
    };
  }
  function Kt(e, g) {
    const F = g.match(/#(\d+)/);
    return F && e[parseInt(F[1])] || null;
  }
  function Ma(e, g) {
    const F = oo(g.args), E = Kt(e, F[0]), J = E ? Ql(e, E) : [
      0,
      0,
      0
    ];
    let H = [
      0,
      0,
      1
    ], ee = [
      1,
      0,
      0
    ];
    if (F[1] && F[1] !== "$") {
      const U = Kt(e, F[1]);
      U && (H = ba(e, U));
    }
    if (F[2] && F[2] !== "$") {
      const U = Kt(e, F[2]);
      U && (ee = ba(e, U));
    }
    return {
      origin: J,
      dirZ: H,
      dirX: ee
    };
  }
  function Ql(e, g) {
    return g.args.replace(/[()]/g, "").split(",").map((E) => parseFloat(E.trim())).filter((E) => !isNaN(E));
  }
  function ba(e, g) {
    return g.args.replace(/[()]/g, "").split(",").map((E) => parseFloat(E.trim())).filter((E) => !isNaN(E));
  }
  function wa(e, g) {
    const F = oo(g.args), E = Kt(e, F[1]);
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
    if (E && (J = Ma(e, E)), F[0] && F[0] !== "$") {
      const H = Kt(e, F[0]);
      if (H && H.type === "IFCLOCALPLACEMENT") {
        const ee = wa(e, H), U = ps(J.origin, ee.dirX, ds(ee.dirZ, ee.dirX), ee.dirZ);
        J.origin = [
          ee.origin[0] + U[0],
          ee.origin[1] + U[1],
          ee.origin[2] + U[2]
        ], J.dirZ = ps(J.dirZ, ee.dirX, ds(ee.dirZ, ee.dirX), ee.dirZ), J.dirX = ps(J.dirX, ee.dirX, ds(ee.dirZ, ee.dirX), ee.dirZ);
      }
    }
    return J;
  }
  function ds(e, g) {
    return [
      e[1] * g[2] - e[2] * g[1],
      e[2] * g[0] - e[0] * g[2],
      e[0] * g[1] - e[1] * g[0]
    ];
  }
  function ps(e, g, F, E) {
    return [
      e[0] * g[0] + e[1] * F[0] + e[2] * E[0],
      e[0] * g[1] + e[1] * F[1] + e[2] * E[1],
      e[0] * g[2] + e[1] * F[2] + e[2] * E[2]
    ];
  }
  const er = 0.01;
  function or(e) {
    const g = Zl(e), { entities: F, typeIndex: E } = g, J = [], H = [], ee = /* @__PURE__ */ new Map();
    ee.set("Hormigon", {
      E: 2132888792e-2,
      nu: 0.2,
      rho: 2.4
    }), ee.set("Acero", {
      E: 2e8,
      nu: 0.3,
      rho: 7.85
    });
    let U = 0, j = 0;
    function Q(se, q, B) {
      for (const W of J) {
        const pe = W.x - se, ve = W.y - q, Ae = W.z - B;
        if (Math.sqrt(pe * pe + ve * ve + Ae * Ae) < er) return W.id;
      }
      return J.push({
        id: U,
        x: se,
        y: q,
        z: B
      }), U++;
    }
    function we(se) {
      const q = $a(se.args, 2) || "", B = E.IFCRELASSOCIATESMATERIAL || [];
      for (const pe of B) {
        const ve = F[pe];
        if (!ve) continue;
        const Ae = oo(ve.args);
        if ((Ae[4] || Ae[3] || "").includes(`#${se.id}`)) {
          const he = Ae[5] || Ae[4] || "", je = Kt(F, he);
          if (je) return A(je);
        }
      }
      const W = q.match(/(\d+)\s*[xX×]\s*(\d+)/);
      return W ? {
        b: parseFloat(W[1]) / 100,
        h: parseFloat(W[2]) / 100,
        name: q
      } : {
        b: 0.3,
        h: 0.3,
        name: q || "Default"
      };
    }
    function A(se) {
      const q = se.type;
      if (q === "IFCRECTANGLEPROFILEDEF") {
        const B = oo(se.args), W = (B[1] || "").replace(/'/g, ""), pe = parseFloat(B[3]) || 0.3, ve = parseFloat(B[4]) || 0.3;
        return {
          b: pe,
          h: ve,
          name: W
        };
      }
      if (q === "IFCMATERIALPROFILE") {
        const B = oo(se.args), W = B[2] || B[1] || "", pe = Kt(F, W);
        if (pe) return A(pe);
      }
      if (q === "IFCMATERIALPROFILESET") {
        const B = oo(se.args), pe = (B[2] || B[1] || "").match(/#(\d+)/);
        if (pe) {
          const ve = F[parseInt(pe[1])];
          if (ve) return A(ve);
        }
      }
      if (q === "IFCMATERIALPROFILESETUSAGE") {
        const W = oo(se.args)[0], pe = Kt(F, W);
        if (pe) return A(pe);
      }
      return {
        b: 0.3,
        h: 0.3,
        name: "Unknown"
      };
    }
    function Y(se, q, B, W) {
      const pe = E[se] || [];
      for (const ve of pe) {
        const Ae = F[ve];
        if (!Ae) continue;
        const Ue = oo(Ae.args), he = Ue[5] || Ue[4] || "", je = Kt(F, he);
        if (!je) continue;
        const We = wa(F, je), ge = we(Ae);
        let Ie = W, Le = null, Xe = null;
        const dt = Ue[6] || Ue[5] || "", Ke = Kt(F, dt);
        if (Ke) {
          const ht = Tn(F, Ke);
          ht && (Ie = ht.depth || W, Le = ht.origin, Xe = ht.direction);
        }
        const pt = Le ? Le[0] : We.origin[0], mt = Le ? Le[1] : We.origin[1], At = Le ? Le[2] : We.origin[2], qt = Xe || (B === "Z" ? We.dirZ : We.dirX), Dt = Q(pt, mt, At), $t = Q(pt + qt[0] * Ie, mt + qt[1] * Ie, At + qt[2] * Ie);
        H.push({
          id: j++,
          type: "frame",
          nodeIds: [
            Dt,
            $t
          ],
          category: q,
          sectionName: ge.name,
          b: ge.b,
          h: ge.h,
          material: "Hormigon",
          expressID: ve
        });
      }
    }
    Y("IFCCOLUMN", "column", "Z", 3), Y("IFCBEAM", "beam", "X", 5), Y("IFCMEMBER", "diagonal", "X", 4), Y("IFCPILE", "pile", "Z", 10), Y("IFCSTAIRFLIGHT", "stair", "X", 3), Y("IFCRAMPFLIGHT", "ramp", "X", 4);
    function Se(se, q, B) {
      const W = E[se] || [];
      for (const pe of W) {
        const ve = F[pe];
        if (!ve) continue;
        const Ae = oo(ve.args), Ue = Ae[5] || Ae[4] || "";
        if (!Kt(F, Ue)) continue;
        let je = B;
        const We = Ae[6] || Ae[5] || "", ge = Kt(F, We);
        ge && (je = nr(F, ge) || B);
        const Ie = q === "slab" ? `Losa e=${(je * 100).toFixed(0)}cm` : q === "wall" ? `Muro e=${(je * 100).toFixed(0)}cm` : q === "footing" ? `Zapata e=${(je * 100).toFixed(0)}cm` : `${q} e=${(je * 100).toFixed(0)}cm`;
        H.push({
          id: j++,
          type: "shell",
          nodeIds: [],
          category: q,
          sectionName: Ie,
          b: je,
          h: je,
          material: "Hormigon",
          expressID: pe
        });
      }
    }
    Se("IFCSLAB", "slab", 0.15), Se("IFCWALL", "wall", 0.2), Se("IFCWALLSTANDARDCASE", "wall", 0.2), Se("IFCFOOTING", "footing", 0.5), Se("IFCROOF", "slab", 0.12);
    const me = [], fe = E.IFCBUILDINGSTOREY || [];
    for (const se of fe) {
      const q = F[se];
      if (!q) continue;
      const B = oo(q.args), W = (B[2] || "").replace(/'/g, ""), pe = parseFloat(B[9]) || 0;
      me.push({
        name: W,
        elevation: pe
      });
    }
    return me.sort((se, q) => se.elevation - q.elevation), {
      nodes: J,
      elements: H,
      materials: ee,
      levels: me,
      projectName: g.meta.project,
      schema: g.meta.schema
    };
  }
  function Tn(e, g) {
    const F = oo(g.args);
    for (const E of F) {
      const J = E.match(/#(\d+)/g) || [];
      for (const H of J) {
        const ee = parseInt(H.replace("#", "")), U = e[ee];
        if (U) {
          if (U.type === "IFCEXTRUDEDAREASOLID") {
            const j = oo(U.args), Q = parseFloat(j[3]) || 0, we = Kt(e, j[1]);
            let A = [
              0,
              0,
              0
            ];
            we && (A = Ma(e, we).origin);
            const Y = Kt(e, j[2]);
            let Se = [
              0,
              0,
              1
            ];
            if (Y && Y.type === "IFCDIRECTION") {
              const me = Y.args.match(/[-+]?\d*\.?\d+(?:[eE][-+]?\d+)?/g);
              me && me.length >= 3 && (Se = me.map(Number));
            }
            return {
              depth: Q,
              origin: A,
              direction: Se
            };
          }
          if (U.type === "IFCSHAPEREPRESENTATION") {
            const j = Tn(e, U);
            if (j) return j;
          }
          if (U.type === "IFCMAPPEDITEM") {
            const j = oo(U.args), Q = Kt(e, j[0]);
            if (Q && Q.type === "IFCREPRESENTATIONMAP") {
              const we = oo(Q.args), A = Kt(e, we[1]);
              if (A) {
                const Y = Tn(e, A);
                if (Y) return Y;
              }
            }
          }
        }
      }
    }
    return null;
  }
  function nr(e, g) {
    const F = Tn(e, g);
    return F ? F.depth : null;
  }
  const Ea = [
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
  ], Sa = [
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
  ], Ia = /* @__PURE__ */ new Map();
  for (const [e, g] of Ea) Ia.set(e, g);
  function sr(e) {
    return Ia.get(e) ?? "other";
  }
  new Set(Sa);
  async function ar(e, g) {
    var _a, _b;
    const F = window.WebIFC;
    if (!F) throw new Error("web-ifc no disponible. Verifica que web-ifc-api-iife.js se carg\xF3.");
    const E = new F.IfcAPI(), J = window.location.pathname.replace(/\/[^/]*$/, "/");
    E.SetWasmPath(J), await E.Init();
    const H = E.OpenModel(new Uint8Array(g)), ee = /* @__PURE__ */ new Map(), U = /* @__PURE__ */ new Map(), j = {
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
    for (const [Se] of Ea) {
      const me = sr(Se);
      try {
        const fe = E.GetLineIDsWithType(H, Se);
        for (let se = 0; se < fe.size(); se++) {
          const q = fe.get(se);
          ee.set(q, me);
          let B = "";
          try {
            const W = E.GetLine(H, q);
            B = ((_a = W == null ? void 0 : W.Name) == null ? void 0 : _a.value) || ((_b = W == null ? void 0 : W.Description) == null ? void 0 : _b.value) || "";
          } catch {
          }
          U.set(q, {
            expressID: q,
            category: me,
            name: B,
            typeName: j[Se] || "Otro"
          });
        }
      } catch {
      }
    }
    const Q = /* @__PURE__ */ new Map();
    for (const Se of Sa) {
      const me = new pn();
      me.name = `ifc-${Se}`, e.add(me), Q.set(Se, me);
    }
    const we = new ll();
    let A = 0;
    const Y = new ia({
      color: 13421772,
      transparent: true,
      opacity: 0.9,
      side: ca
    });
    return E.StreamAllMeshes(H, (Se) => {
      const me = ee.get(Se.expressID) ?? "other", fe = Q.get(me), se = Se.geometries;
      for (let q = 0; q < se.size(); q++) {
        const B = se.get(q), W = E.GetGeometry(H, B.geometryExpressID), pe = E.GetVertexArray(W.GetVertexData(), W.GetVertexDataSize()), ve = E.GetIndexArray(W.GetIndexData(), W.GetIndexDataSize()), Ae = new ro(), Ue = new Float32Array(pe.length / 2), he = new Float32Array(pe.length / 2);
        for (let Le = 0; Le < pe.length; Le += 6) {
          const Xe = Le / 2;
          Ue[Xe] = pe[Le], Ue[Xe + 1] = pe[Le + 1], Ue[Xe + 2] = pe[Le + 2], he[Xe] = pe[Le + 3], he[Xe + 1] = pe[Le + 4], he[Xe + 2] = pe[Le + 5];
        }
        Ae.setAttribute("position", new Sn(Ue, 3)), Ae.setAttribute("normal", new Sn(he, 3)), Ae.setIndex(new Sn(new Uint32Array(ve), 1));
        const je = new rl();
        je.fromArray(B.flatTransformation);
        let We;
        const ge = B.color;
        ge && (ge.x !== 1 || ge.y !== 1 || ge.z !== 1) ? We = new ia({
          color: new il(ge.x, ge.y, ge.z),
          transparent: ge.w < 1,
          opacity: ge.w,
          side: ca
        }) : We = Y, We._origOpacity = We.opacity;
        const Ie = new xa(Ae, We);
        Ie.applyMatrix4(je), Ie.userData.expressID = Se.expressID, Ie.userData.category = me, fe.add(Ie), we.expandByObject(Ie), A++, W.delete();
      }
    }), E.CloseModel(H), {
      meshCount: A,
      bbox: we,
      detailCategories: Q,
      elementInfo: U
    };
  }
  ha = Ko.state(false);
  gr = function(e) {
    e.nodeInputs || (e.nodeInputs = Ko.state({})), e.elementInputs || (e.elementInputs = Ko.state({})), e.deformOutputs || (e.deformOutputs = Ko.state({})), e.analyzeOutputs || (e.analyzeOutputs = Ko.state({}));
    let g = "tonf", F = "m", E = _o(g, F), J = {
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
    }, ee = /* @__PURE__ */ new Set(), U = /* @__PURE__ */ new Set();
    let j = false;
    const Q = /* @__PURE__ */ new Set(), we = /* @__PURE__ */ new Map();
    let A = "", Y = {}, Se = null, me = "", fe = [], se = [], q = [], B = /* @__PURE__ */ new Set(), W = /* @__PURE__ */ new Set(), pe = /* @__PURE__ */ new Set(), ve = /* @__PURE__ */ new Map(), Ae = /* @__PURE__ */ new Map(), Ue = null, he = [], je = 0.2, We = 2, ge = 2, Ie = false, Le = 2, Xe = "x", dt = /* @__PURE__ */ new Set(), Ke = true, pt = 0.15, mt = 2, At = 2, qt = /* @__PURE__ */ new Set(), Dt = false, $t = "perimeter";
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
    }), mo = (t, o) => ({
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
    let St = 0, Ce = 3, _e = false, xe = 0, Pe = null, be = 0, ke = [], Ve = 1, Be = true;
    const ut = xl();
    ut.div.style.display = "none";
    function xt() {
      const t = yn()[A];
      return t && t[St] ? t[St].dofs : [
        true,
        true,
        true,
        true,
        true,
        true
      ];
    }
    let Ge = [], Ze = [], gt = 0, ft = [], vt = null;
    function Vt() {
      if (!vt) return;
      const t = lt();
      t && t.scene.remove(vt), vt.traverse((o) => {
        if (o.geometry && o.geometry.dispose(), o.material) {
          const n = o.material;
          n.map && n.map.dispose(), n.dispose();
        }
      }), vt = null;
    }
    function bs(t, o, n, l, s) {
      Vt();
      const d = lt();
      if (!d) return;
      vt = new pn(), vt.name = "refGrid";
      const a = Math.min(...t), i = Math.max(...t), p = Math.min(...o), r = Math.max(...o), c = Math.max(...n), m = i - a || 1, M = r - p || 1, w = 3359829, y = 2241348;
      for (const h of n) {
        for (const T of o) {
          const k = new ro().setFromPoints([
            new Ne(a, h, T),
            new Ne(i, h, T)
          ]), $ = new Jo({
            color: w,
            dashSize: m * 0.015,
            gapSize: m * 0.01,
            transparent: true,
            opacity: 0.25
          }), C = new No(k, $);
          C.computeLineDistances(), C.renderOrder = -10, vt.add(C);
        }
        for (const T of t) {
          const k = new ro().setFromPoints([
            new Ne(T, h, p),
            new Ne(T, h, r)
          ]), $ = new Jo({
            color: w,
            dashSize: M * 0.015,
            gapSize: M * 0.01,
            transparent: true,
            opacity: 0.25
          }), C = new No(k, $);
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
        }), C = new No(k, $);
        C.computeLineDistances(), C.renderOrder = -10, vt.add(C);
      }
      const f = Math.min(m, M) * 0.015;
      for (const h of n) for (const T of t) for (const k of o) {
        const $ = [
          new Ne(T - f, h, k),
          new Ne(T + f, h, k),
          new Ne(T, h, k - f),
          new Ne(T, h, k + f)
        ], C = new ro().setFromPoints($), _ = new Uo({
          color: 5596791,
          transparent: true,
          opacity: 0.4
        }), x = new Xo(C, _);
        x.renderOrder = -5, vt.add(x);
      }
      vt.traverse((h) => {
        h.material && (Array.isArray(h.material) ? h.material.forEach((T) => {
          T.clippingPlanes = [];
        }) : h.material.clippingPlanes = []);
      }), d.scene.add(vt), d.render();
    }
    let Ht = null;
    function hs() {
      if (!Ht) return;
      const t = lt();
      t && t.scene.remove(Ht), Ht.traverse((o) => {
        if (o.geometry && o.geometry.dispose(), o.material) {
          const n = o.material;
          n.map && n.map.dispose(), n.dispose();
        }
      }), Ht = null;
    }
    function en(t, o, n, l, s) {
      hs();
      const d = lt();
      if (!d) return;
      Ht = new pn(), Ht.name = "gridAxes";
      const a = Math.min(...t), i = Math.max(...t), p = Math.min(...o), r = Math.max(...o), c = i - a || 1, m = r - p || 1, M = Math.max(c, m), w = M * 0.08, y = l || t.map((x, u) => String.fromCharCode(65 + u)), f = s || o.map((x, u) => String(u + 1)), h = M * 0.018, T = o.length <= 1, k = 8947848;
      for (let x = 0; x < t.length; x++) {
        const u = t[x];
        if (T) {
          const I = -w - h * 1.5;
          Pn(u, 0, 0, u, 0, I + h, k, Ht), Fn(y[x] || `${x}`, u, 0, I, h, Ht);
        } else {
          const I = p - w - h * 1.5;
          Pn(u, p, 0, u, I + h, 0, k, Ht), Fn(y[x] || `${x}`, u, I, 0, h, Ht);
        }
      }
      if (!T) for (let x = 0; x < o.length; x++) {
        const u = o[x], I = a - w - h * 1.5;
        Pn(a, u, 0, I + h, u, 0, k, Ht), Fn(f[x] || `${x}`, I, u, 0, h, Ht);
      }
      const $ = h * 1.8, C = w * 1.2, _ = w * 1.2;
      for (let x = 0; x < t.length - 1; x++) {
        const u = t[x], I = t[x + 1], L = Math.abs(I - u), R = (u + I) / 2, D = `${L.toFixed(2)} m`;
        T ? (zn(D, R, 0, -C, $, Ht), Cn(u, 0, -C * 0.7, I, 0, -C * 0.7, 16763904, Ht)) : (zn(D, R, p - _, 0, $, Ht), Cn(u, p - _ * 0.7, 0, I, p - _ * 0.7, 0, 16763904, Ht));
      }
      if (!T) for (let x = 0; x < o.length - 1; x++) {
        const u = o[x], I = o[x + 1], L = Math.abs(I - u), R = (u + I) / 2, D = `${L.toFixed(2)} m`;
        zn(D, a - C, R, 0, $, Ht), Cn(a - C * 0.7, u, 0, a - C * 0.7, I, 0, 16763904, Ht);
      }
      Ht.traverse((x) => {
        x.material && (Array.isArray(x.material) ? x.material.forEach((u) => {
          u.clippingPlanes = [];
        }) : x.material.clippingPlanes = []);
      }), d.scene.add(Ht), d.render();
    }
    let Zt = null;
    function xs() {
      if (!Zt) return;
      const t = lt();
      t && t.scene.remove(Zt), Zt.traverse((o) => {
        if (o.geometry && o.geometry.dispose(), o.material) {
          const n = o.material;
          n.map && n.map.dispose(), n.dispose();
        }
      }), Zt = null;
    }
    function Ln(t, o, n) {
      if (xs(), t.length === 0) return;
      const l = lt();
      if (!l) return;
      Zt = new pn(), Zt.name = "storyLevels";
      const s = Math.min(...o), d = Math.max(...o), a = Math.min(...n), i = Math.max(...n), p = d - s || 1, r = i - a || 1, c = Math.max(p, r), m = c * 0.06, M = n.length <= 1, w = 4491519, y = c * 0.015;
      for (const f of t) {
        const h = f.elev;
        M ? (tn(s - m, 0, h, d + m, 0, h, w, Zt), vs(f.name, d + m * 1.5, 0, h, y, Zt)) : (tn(s, a, h, d, a, h, w, Zt), tn(d, a, h, d, i, h, w, Zt), tn(d, i, h, s, i, h, w, Zt), tn(s, i, h, s, a, h, w, Zt), vs(f.name, s - m * 1.5, a, h, y, Zt));
      }
      Zt.traverse((f) => {
        f.material && (Array.isArray(f.material) ? f.material.forEach((h) => {
          h.clippingPlanes = [];
        }) : f.material.clippingPlanes = []);
      }), l.scene.add(Zt), l.render();
    }
    function tn(t, o, n, l, s, d, a, i) {
      const p = Math.sqrt((l - t) ** 2 + (s - o) ** 2 + (d - n) ** 2) || 1, r = new ro().setFromPoints([
        new Ne(t, o, n),
        new Ne(l, s, d)
      ]), c = new Jo({
        color: a,
        dashSize: p * 0.02,
        gapSize: p * 0.01,
        transparent: true,
        opacity: 0.5
      }), m = new No(r, c);
      m.computeLineDistances(), m.renderOrder = 50, i.add(m);
    }
    function vs(t, o, n, l, s, d) {
      const a = document.createElement("canvas"), i = 512, p = 64;
      a.width = i, a.height = p;
      const r = a.getContext("2d");
      r.fillStyle = "rgba(30,60,120,0.8)";
      const c = 8;
      r.beginPath(), r.moveTo(c, 0), r.lineTo(i - c, 0), r.quadraticCurveTo(i, 0, i, c), r.lineTo(i, p - c), r.quadraticCurveTo(i, p, i - c, p), r.lineTo(c, p), r.quadraticCurveTo(0, p, 0, p - c), r.lineTo(0, c), r.quadraticCurveTo(0, 0, c, 0), r.closePath(), r.fill(), r.fillStyle = "#88bbff", r.font = "bold 38px monospace", r.textAlign = "center", r.textBaseline = "middle", r.fillText(t, i / 2, p / 2);
      const m = new ss(a);
      m.needsUpdate = true;
      const M = new vn({
        map: m,
        depthTest: false,
        transparent: true
      }), w = new xn(M);
      w.position.set(o, n, l), w.scale.set(s * 8, s, 1), w.renderOrder = 101, d.add(w);
    }
    function zn(t, o, n, l, s, d) {
      const a = document.createElement("canvas"), i = 256, p = 64;
      a.width = i, a.height = p;
      const r = a.getContext("2d");
      r.fillStyle = "rgba(0,0,0,0.75)";
      const c = 8;
      r.beginPath(), r.moveTo(c, 0), r.lineTo(i - c, 0), r.quadraticCurveTo(i, 0, i, c), r.lineTo(i, p - c), r.quadraticCurveTo(i, p, i - c, p), r.lineTo(c, p), r.quadraticCurveTo(0, p, 0, p - c), r.lineTo(0, c), r.quadraticCurveTo(0, 0, c, 0), r.closePath(), r.fill(), r.fillStyle = "#ffcc00", r.font = "bold 36px monospace", r.textAlign = "center", r.textBaseline = "middle", r.fillText(t, i / 2, p / 2);
      const m = new ml(a);
      m.minFilter = gl;
      const M = new vn({
        map: m,
        transparent: true,
        depthTest: false
      }), w = new xn(M);
      w.position.set(o, n, l);
      const y = i / p;
      w.scale.set(s * y, s, 1), w.renderOrder = 999, d.add(w);
    }
    function Cn(t, o, n, l, s, d, a, i) {
      const p = [
        new Ne(t, o, n),
        new Ne(l, s, d)
      ], r = new ro().setFromPoints(p), c = new Uo({
        color: a,
        transparent: true,
        opacity: 0.6,
        depthTest: false
      }), m = new No(r, c);
      m.renderOrder = 998, i.add(m);
    }
    function Pn(t, o, n, l, s, d, a, i) {
      const p = new ro().setFromPoints([
        new Ne(t, o, n),
        new Ne(l, s, d)
      ]), r = new Jo({
        color: a,
        dashSize: 0.15 * Math.max(Math.abs(l - t), Math.abs(s - o), Math.abs(d - n), 0.1),
        gapSize: 0.1 * Math.max(Math.abs(l - t), Math.abs(s - o), Math.abs(d - n), 0.1),
        transparent: true,
        opacity: 0.6
      }), c = new No(p, r);
      c.computeLineDistances(), i.add(c);
    }
    function Fn(t, o, n, l, s, d) {
      const a = document.createElement("canvas"), i = 128;
      a.width = i, a.height = i;
      const p = a.getContext("2d");
      p.beginPath(), p.arc(i / 2, i / 2, i * 0.42, 0, Math.PI * 2), p.fillStyle = "rgba(255,255,255,0.9)", p.fill(), p.lineWidth = i * 0.04, p.strokeStyle = "#555", p.stroke(), p.fillStyle = "#222", p.font = `bold ${i * 0.45}px Arial`, p.textAlign = "center", p.textBaseline = "middle", p.fillText(t, i / 2, i / 2 + i * 0.02);
      const r = new ss(a);
      r.needsUpdate = true;
      const c = new vn({
        map: r,
        depthTest: false,
        transparent: true
      }), m = new xn(c);
      m.position.set(o, n, l);
      const M = s * 2;
      m.scale.set(M, M, 1), m.renderOrder = 100, d.add(m);
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
        const n = ze.querySelectorAll("input[type=checkbox]");
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
        const t = ze.querySelectorAll("input[type=checkbox]"), o = {};
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
          Vt(), console.log("Reference grid cleared");
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
        bs(l, s, d), Ge = l.map((a, i) => ({
          label: String.fromCharCode(65 + i),
          coord: a
        })), Ze = s.map((a, i) => ({
          label: `${i + 1}`,
          coord: a
        })), gt = d[d.length - 1], ft = d.map((a, i) => ({
          label: i === 0 ? "Base" : `P${i}`,
          elev: a
        })), en(Ge.map((a) => a.coord), Ze.map((a) => a.coord), gt, Ge.map((a) => a.label), Ze.map((a) => a.label));
        {
          const a = d.map((i, p) => ({
            name: p === 0 ? "Base" : `P${p}`,
            height: p > 0 ? i - d[p - 1] : 0,
            elev: i
          }));
          Ln(a, Ge.map((i) => i.coord), Ze.map((i) => i.coord));
        }
        return console.log(`RefGrid: X=[${l}] Z=[${s}] Y=[${d}]`), {
          xCoords: l,
          zCoords: s,
          yLevels: d
        };
      },
      build(t) {
        var _a2;
        if (Ge.length === 0 || ft.length < 2) {
          console.log("Error: call cad.refgrid() first to define axes and levels");
          return;
        }
        const o = (t == null ? void 0 : t.col) || "40x40", n = (t == null ? void 0 : t.viga) || "30x40", l = (t == null ? void 0 : t.fc) || 210, [s, d] = o.split("x").map((N) => parseFloat(N) / 100), [a, i] = n.split("x").map((N) => parseFloat(N) / 100), p = Ge.map((N) => N.coord), r = Ze.map((N) => N.coord), c = ft.map((N) => N.elev), m = p.length, M = r.length, w = c.length, y = w - 1, f = [], h = {};
        for (let N = 0; N < w; N++) for (let ie = 0; ie < M; ie++) for (let te = 0; te < m; te++) h[`${te},${ie},${N}`] = f.length, f.push([
          p[te],
          r[ie],
          c[N]
        ]);
        const T = [], k = /* @__PURE__ */ new Set(), $ = /* @__PURE__ */ new Set(), C = /* @__PURE__ */ new Map();
        for (let N = 0; N < y; N++) for (let ie = 0; ie < M; ie++) for (let te = 0; te < m; te++) {
          const de = T.length;
          T.push([
            h[`${te},${ie},${N}`],
            h[`${te},${ie},${N + 1}`]
          ]), k.add(de), C.set(de, N);
        }
        for (let N = 1; N < w; N++) for (let ie = 0; ie < M; ie++) for (let te = 0; te < m - 1; te++) {
          const de = T.length;
          T.push([
            h[`${te},${ie},${N}`],
            h[`${te + 1},${ie},${N}`]
          ]), $.add(de), C.set(de, N - 1);
        }
        for (let N = 1; N < w; N++) for (let ie = 0; ie < m; ie++) for (let te = 0; te < M - 1; te++) {
          const de = T.length;
          T.push([
            h[`${ie},${te},${N}`],
            h[`${ie},${te + 1},${N}`]
          ]), $.add(de), C.set(de, N - 1);
        }
        const _ = ((_a2 = t == null ? void 0 : t.braces) == null ? void 0 : _a2.toLowerCase()) || "", x = /* @__PURE__ */ new Set();
        if (_) {
          const N = _ === "all" || _ === "x" || _ === "perimeter", ie = _ === "all" || _ === "y" || _ === "perimeter";
          for (let te = 0; te < y; te++) {
            if (N) for (let de = 0; de < M; de++) {
              if (_ === "perimeter" && de !== 0 && de !== M - 1) continue;
              const Z = Math.floor((m - 1) / 2);
              for (let ue = 0; ue < m - 1; ue++) {
                if (_ === "perimeter" && ue !== Z) continue;
                const Me = T.length;
                T.push([
                  h[`${ue},${de},${te}`],
                  h[`${ue + 1},${de},${te + 1}`]
                ]), x.add(Me), C.set(Me, te);
                const oe = T.length;
                T.push([
                  h[`${ue + 1},${de},${te}`],
                  h[`${ue},${de},${te + 1}`]
                ]), x.add(oe), C.set(oe, te);
              }
            }
            if (ie) for (let de = 0; de < m; de++) {
              if (_ === "perimeter" && de !== 0 && de !== m - 1) continue;
              const Z = Math.floor((M - 1) / 2);
              for (let ue = 0; ue < M - 1; ue++) {
                if (_ === "perimeter" && ue !== Z) continue;
                const Me = T.length;
                T.push([
                  h[`${de},${ue},${te}`],
                  h[`${de},${ue + 1},${te + 1}`]
                ]), x.add(Me), C.set(Me, te);
                const oe = T.length;
                T.push([
                  h[`${de},${ue + 1},${te}`],
                  h[`${de},${ue},${te + 1}`]
                ]), x.add(oe), C.set(oe, te);
              }
            }
          }
        }
        const u = 15100 * Math.sqrt(l) * 10, I = u / (2 * (1 + 0.2)), L = s * d, R = s * d ** 3 / 12, D = d * s ** 3 / 12, b = s * d * (s ** 2 + d ** 2) / 12, S = a * i, v = a * i ** 3 / 12, P = i * a ** 3 / 12, X = a * i * (a ** 2 + i ** 2) / 12, G = /* @__PURE__ */ new Map(), ae = /* @__PURE__ */ new Map(), K = /* @__PURE__ */ new Map(), V = /* @__PURE__ */ new Map(), ce = /* @__PURE__ */ new Map(), re = /* @__PURE__ */ new Map(), ye = /* @__PURE__ */ new Map();
        for (let N = 0; N < T.length; N++) G.set(N, u), ae.set(N, I), k.has(N) ? (K.set(N, L), V.set(N, R), ce.set(N, D), re.set(N, b), ye.set(N, {
          type: "rect",
          b: s,
          h: d,
          name: `COL${o}`
        })) : x.has(N) ? (K.set(N, L), V.set(N, R), ce.set(N, D), re.set(N, b), ye.set(N, {
          type: "rect",
          b: s,
          h: d,
          name: `BR${o}`
        })) : (K.set(N, S), V.set(N, v), ce.set(N, P), re.set(N, X), ye.set(N, {
          type: "rect",
          b: a,
          h: i,
          name: `V${n}`
        }));
        const Te = /* @__PURE__ */ new Map();
        for (let N = 0; N < M; N++) for (let ie = 0; ie < m; ie++) Te.set(h[`${ie},${N},0`], [
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
          elasticities: G,
          shearModuli: ae,
          areas: K,
          momentsOfInertiaZ: V,
          momentsOfInertiaY: ce,
          torsionalConstants: re,
          sectionShapes: ye
        }, B = k, W = $, ve = C, console.log(`Built: ${f.length} nodes, ${T.length} elements (${k.size} cols, ${$.size} beams, ${x.size} braces)`), console.log(`  Col: ${o}, Viga: ${n}, f'c=${l}${_ ? `, braces=${_}` : ""}`), {
          nodes: f.length,
          elements: T.length
        };
      },
      addCol(t, o, n) {
        var _a2, _b, _c, _d, _e2, _f;
        const l = Ge.findIndex((y) => y.label === t), s = Ze.findIndex((y) => y.label === o);
        if (l < 0) {
          console.log(`Axis "${t}" not found. Available: ${Ge.map((y) => y.label)}`);
          return;
        }
        if (s < 0) {
          console.log(`Axis "${o}" not found. Available: ${Ze.map((y) => y.label)}`);
          return;
        }
        const d = Ge[l].coord, a = Ze[s].coord, i = [
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
        }, (y, f) => f + 1), m = new Map(((_d = (_c = e.nodeInputs) == null ? void 0 : _c.val) == null ? void 0 : _d.supports) || []), M = r(ft[0].elev);
        m.has(M) || m.set(M, [
          true,
          true,
          true,
          true,
          true,
          true
        ]);
        let w = 0;
        for (const y of c) {
          if (y < 1 || y >= ft.length) continue;
          const f = r(ft[y - 1].elev), h = r(ft[y].elev);
          p.push([
            f,
            h
          ]), B.add(p.length - 1), ve.set(p.length - 1, y - 1), w++;
        }
        return e.nodes.val = i, e.elements.val = p, e.nodeInputs.val = {
          ...e.nodeInputs.val,
          supports: m,
          loads: ((_f = (_e2 = e.nodeInputs) == null ? void 0 : _e2.val) == null ? void 0 : _f.loads) || /* @__PURE__ */ new Map()
        }, console.log(`Added ${w} column(s) at ${t}-${o}${n ? ` story ${n}` : ""}`), w;
      },
      addBeam(t, o, n, l, s) {
        var _a2;
        const d = Ge.findIndex((C) => C.label === t), a = Ze.findIndex((C) => C.label === o), i = Ge.findIndex((C) => C.label === n), p = Ze.findIndex((C) => C.label === l), r = ft.findIndex((C) => C.label === s);
        if (d < 0 || a < 0 || i < 0 || p < 0) {
          console.log("Axis not found");
          return;
        }
        if (r < 1) {
          console.log(`Story "${s}" not found. Available: ${ft.filter((C) => C.label !== "Base").map((C) => C.label)}`);
          return;
        }
        const c = Ge[d].coord, m = Ze[a].coord, M = Ge[i].coord, w = Ze[p].coord, y = ft[r].elev, f = [
          ...e.nodes.val
        ], h = [
          ...((_a2 = e.elements) == null ? void 0 : _a2.val) || []
        ], T = (C, _, x) => {
          const u = f.findIndex((I) => Math.abs(I[0] - C) < 1e-3 && Math.abs(I[1] - _) < 1e-3 && Math.abs(I[2] - x) < 1e-3);
          return u >= 0 ? u : (f.push([
            C,
            _,
            x
          ]), f.length - 1);
        }, k = T(c, m, y), $ = T(M, w, y);
        return h.push([
          k,
          $
        ]), W.add(h.length - 1), ve.set(h.length - 1, r - 1), e.nodes.val = f, e.elements.val = h, console.log(`Added beam ${t}-${o} \u2192 ${n}-${l} at ${s}`), h.length - 1;
      },
      addBrace(t, o, n, l, s, d) {
        var _a2;
        const a = Ge.findIndex((u) => u.label === t), i = Ze.findIndex((u) => u.label === o), p = ft.findIndex((u) => u.label === n), r = Ge.findIndex((u) => u.label === l), c = Ze.findIndex((u) => u.label === s), m = ft.findIndex((u) => u.label === d);
        if (a < 0 || i < 0 || p < 0) {
          console.log(`Point 1 not found: ${t}-${o}@${n}`);
          return;
        }
        if (r < 0 || c < 0 || m < 0) {
          console.log(`Point 2 not found: ${l}-${s}@${d}`);
          return;
        }
        const M = Ge[a].coord, w = Ze[i].coord, y = ft[p].elev, f = Ge[r].coord, h = Ze[c].coord, T = ft[m].elev, k = [
          ...e.nodes.val
        ], $ = [
          ...((_a2 = e.elements) == null ? void 0 : _a2.val) || []
        ], C = (u, I, L) => {
          const R = k.findIndex((D) => Math.abs(D[0] - u) < 1e-3 && Math.abs(D[1] - I) < 1e-3 && Math.abs(D[2] - L) < 1e-3);
          return R >= 0 ? R : (k.push([
            u,
            I,
            L
          ]), k.length - 1);
        }, _ = C(M, w, y), x = C(f, h, T);
        return $.push([
          _,
          x
        ]), ve.set($.length - 1, Math.min(p, m)), e.nodes.val = k, e.elements.val = $, console.log(`Added brace ${t}-${o}@${n} \u2192 ${l}-${s}@${d}`), $.length - 1;
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
        ], s = (t == null ? void 0 : t.col) || "40x40", d = (t == null ? void 0 : t.viga) || "30x40", a = (t == null ? void 0 : t.fc) || 210, [i, p] = s.split("x").map((Z) => parseFloat(Z) / 100), [r, c] = d.split("x").map((Z) => parseFloat(Z) / 100), m = [
          0
        ];
        for (const Z of o) m.push(m[m.length - 1] + Z);
        const M = [
          0
        ];
        for (const Z of n) M.push(M[M.length - 1] + Z);
        const w = [
          0
        ];
        for (const Z of l) w.push(w[w.length - 1] + Z);
        const y = m.length, f = M.length, h = w.length, T = l.length, k = [], $ = {};
        for (let Z = 0; Z < h; Z++) for (let ue = 0; ue < f; ue++) for (let Me = 0; Me < y; Me++) $[`${Me},${Z},${ue}`] = k.length, k.push([
          m[Me],
          w[Z],
          M[ue]
        ]);
        const C = [], _ = /* @__PURE__ */ new Set(), x = /* @__PURE__ */ new Set(), u = /* @__PURE__ */ new Map();
        for (let Z = 0; Z < T; Z++) for (let ue = 0; ue < f; ue++) for (let Me = 0; Me < y; Me++) {
          const oe = C.length;
          C.push([
            $[`${Me},${Z},${ue}`],
            $[`${Me},${Z + 1},${ue}`]
          ]), _.add(oe), u.set(oe, Z);
        }
        for (let Z = 1; Z < h; Z++) for (let ue = 0; ue < f; ue++) for (let Me = 0; Me < y - 1; Me++) {
          const oe = C.length;
          C.push([
            $[`${Me},${Z},${ue}`],
            $[`${Me + 1},${Z},${ue}`]
          ]), x.add(oe), u.set(oe, Z - 1);
        }
        for (let Z = 1; Z < h; Z++) for (let ue = 0; ue < y; ue++) for (let Me = 0; Me < f - 1; Me++) {
          const oe = C.length;
          C.push([
            $[`${ue},${Z},${Me}`],
            $[`${ue},${Z},${Me + 1}`]
          ]), x.add(oe), u.set(oe, Z - 1);
        }
        const L = 15100 * Math.sqrt(a) * 10, R = L / (2 * (1 + 0.2)), D = i * p, b = i * p ** 3 / 12, S = p * i ** 3 / 12, v = i * p * (i ** 2 + p ** 2) / 12, P = r * c, X = r * c ** 3 / 12, G = c * r ** 3 / 12, ae = r * c * (r ** 2 + c ** 2) / 12, K = /* @__PURE__ */ new Map(), V = /* @__PURE__ */ new Map(), ce = /* @__PURE__ */ new Map(), re = /* @__PURE__ */ new Map(), ye = /* @__PURE__ */ new Map(), Te = /* @__PURE__ */ new Map(), N = /* @__PURE__ */ new Map();
        for (let Z = 0; Z < C.length; Z++) K.set(Z, L), V.set(Z, R), _.has(Z) ? (ce.set(Z, D), re.set(Z, b), ye.set(Z, S), Te.set(Z, v), N.set(Z, {
          type: "rect",
          b: i,
          h: p,
          name: `COL${s}`
        })) : (ce.set(Z, P), re.set(Z, X), ye.set(Z, G), Te.set(Z, ae), N.set(Z, {
          type: "rect",
          b: r,
          h: c,
          name: `V${d}`
        }));
        const ie = /* @__PURE__ */ new Map();
        for (let Z = 0; Z < f; Z++) for (let ue = 0; ue < y; ue++) ie.set($[`${ue},0,${Z}`], [
          true,
          true,
          true,
          true,
          true,
          true
        ]);
        e.nodes.val = k, e.elements.val = C, e.nodeInputs.val = {
          supports: ie,
          loads: /* @__PURE__ */ new Map()
        }, e.elementInputs.val = {
          elasticities: K,
          shearModuli: V,
          areas: ce,
          momentsOfInertiaZ: re,
          momentsOfInertiaY: ye,
          torsionalConstants: Te,
          sectionShapes: N
        }, B = _, W = x, ve = u, Ge = m.map((Z, ue) => ({
          label: String.fromCharCode(65 + ue),
          coord: Z
        })), Ze = M.map((Z, ue) => ({
          label: `${ue + 1}`,
          coord: Z
        })), gt = w[w.length - 1], en(Ge.map((Z) => Z.coord), Ze.map((Z) => Z.coord), gt, Ge.map((Z) => Z.label), Ze.map((Z) => Z.label));
        {
          const Z = w.map((ue, Me) => ({
            name: Me === 0 ? "Base" : `P${Me}`,
            height: Me > 0 ? ue - w[Me - 1] : 0,
            elev: ue
          }));
          Ln(Z, m, M);
        }
        const te = ze.querySelector("#cad3d-axis-buttons");
        if (te) {
          te.style.display = "flex";
          const Z = Ge.map((Me) => Me.label), ue = Ze.map((Me) => Me.label);
          te.innerHTML = '<span style="font-size:10px;color:var(--cad-heading);margin-right:4px">Ejes:</span>';
          for (const Me of Z) te.innerHTML += `<button class="axis-btn" data-axis="x" data-label="${Me}">${Me}</button>`;
          te.innerHTML += '<span style="margin:0 2px">|</span>';
          for (const Me of ue) te.innerHTML += `<button class="axis-btn" data-axis="y" data-label="${Me}">${Me}</button>`;
        }
        const de = ze.querySelector("#cad3d-floor-buttons");
        if (de) {
          de.style.display = "flex", de.innerHTML = '<span style="font-size:10px;color:var(--cad-heading);margin-right:4px">Planta:</span>';
          for (let Z = 0; Z < T; Z++) de.innerHTML += `<button class="floor-btn" data-floor="${Z}">P${Z + 1}</button>`;
        }
        return bs(m, M, w), nt(), console.log(`Model3D: ${k.length}n ${C.length}e | ${y}x${f} grid, ${T} floors | COL${s} V${d} f'c=${a}`), {
          nodes: k.length,
          elements: C.length,
          columns: _.size,
          beams: x.size
        };
      },
      clear() {
        e.nodes.val = [], e.elements.val = [], e.nodeInputs && (e.nodeInputs.val = {}), e.elementInputs && (e.elementInputs.val = {}), B = /* @__PURE__ */ new Set(), W = /* @__PURE__ */ new Set(), ve = /* @__PURE__ */ new Map(), Ae = /* @__PURE__ */ new Map(), Ge = [], Ze = [], gt = 0, hs(), xs(), Vt();
        const t = ze.querySelector("#cad3d-axis-buttons");
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
        B = /* @__PURE__ */ new Set(), W = /* @__PURE__ */ new Set();
        for (let y = 0; y < a.length - 1; y++) for (let f = 0; f < s.length; f++) p(f) || (B.add(m.length), m.push([
          r[`${f},${y}`],
          r[`${f},${y + 1}`]
        ]));
        for (let y = 1; y < a.length; y++) for (let f = 0; f < s.length - 1; f++) W.add(m.length), m.push([
          r[`${f},${y}`],
          r[`${f + 1},${y}`]
        ]);
        const M = /* @__PURE__ */ new Map(), w = xt();
        for (let y = 0; y < s.length; y++) {
          if (p(y)) continue;
          const f = `${y},0`;
          r[f] !== void 0 && M.set(r[f], [
            ...w
          ]);
        }
        return e.nodes.val = c, e.elements.val = m, e.nodeInputs && (e.nodeInputs.val = {
          supports: M
        }), Ge = [
          ...s
        ], Ze = [
          0
        ], gt = a[a.length - 1] || 0, setTimeout(() => {
          It(), en(s, [
            0
          ]), Yn(), Gn();
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
        const M = (u) => s > 0 && u === 0 || d > 0 && u === r.length - 1, w = (u) => a > 0 && u === 0 || i > 0 && u === c.length - 1, y = (u, I) => M(u) || w(I), f = [], h = {};
        for (let u = 0; u < m.length; u++) for (let I = 0; I < c.length; I++) for (let L = 0; L < r.length; L++) u === 0 && y(L, I) || (h[`${L},${I},${u}`] = f.length, f.push([
          r[L],
          c[I],
          m[u]
        ]));
        const T = f.length, k = [];
        B = /* @__PURE__ */ new Set(), W = /* @__PURE__ */ new Set(), ve = /* @__PURE__ */ new Map();
        const $ = [];
        for (let u = 0; u < m.length - 1; u++) for (let I = 0; I < c.length; I++) for (let L = 0; L < r.length; L++) y(L, I) || $.push({
          el: [
            h[`${L},${I},${u}`],
            h[`${L},${I},${u + 1}`]
          ],
          floor: u
        });
        for (const { el: [u, I], floor: L } of $) {
          if (p <= 1) {
            B.add(k.length), ve.set(k.length, L), k.push([
              u,
              I
            ]);
            continue;
          }
          const R = f[u], D = f[I];
          let b = u;
          for (let S = 1; S < p; S++) {
            const v = S / p, P = f.length;
            f.push([
              R[0] + (D[0] - R[0]) * v,
              R[1] + (D[1] - R[1]) * v,
              R[2] + (D[2] - R[2]) * v
            ]), B.add(k.length), ve.set(k.length, L), k.push([
              b,
              P
            ]), b = P;
          }
          B.add(k.length), ve.set(k.length, L), k.push([
            b,
            I
          ]);
        }
        Ae = /* @__PURE__ */ new Map();
        const C = [];
        for (let u = 1; u < m.length; u++) for (let I = 0; I < c.length; I++) for (let L = 0; L < r.length - 1; L++) C.push({
          el: [
            h[`${L},${I},${u}`],
            h[`${L + 1},${I},${u}`]
          ],
          floor: u - 1,
          dir: "x",
          bay: L
        });
        for (let u = 1; u < m.length; u++) for (let I = 0; I < r.length; I++) for (let L = 0; L < c.length - 1; L++) C.push({
          el: [
            h[`${I},${L},${u}`],
            h[`${I},${L + 1},${u}`]
          ],
          floor: u - 1,
          dir: "y",
          bay: L
        });
        for (const { el: [u, I], floor: L, dir: R, bay: D } of C) {
          const b = f[u], S = f[I];
          let v = u;
          for (let X = 1; X < l; X++) {
            const G = X / l, ae = f.length;
            f.push([
              b[0] + (S[0] - b[0]) * G,
              b[1] + (S[1] - b[1]) * G,
              b[2] + (S[2] - b[2]) * G
            ]);
            const K = k.length;
            W.add(K), ve.set(K, L), Ae.set(K, {
              dir: R,
              bay: D
            }), k.push([
              v,
              ae
            ]), v = ae;
          }
          const P = k.length;
          W.add(P), ve.set(P, L), Ae.set(P, {
            dir: R,
            bay: D
          }), k.push([
            v,
            I
          ]);
        }
        if (dt = /* @__PURE__ */ new Set(), Ie && Le > 0) {
          const u = (I, L, R) => {
            for (let b = 0; b < f.length; b++) if (Math.abs(f[b][0] - I) < 1e-6 && Math.abs(f[b][1] - L) < 1e-6 && Math.abs(f[b][2] - R) < 1e-6) return b;
            const D = f.length;
            return f.push([
              I,
              L,
              R
            ]), D;
          };
          for (let I = 1; I < m.length; I++) if (Xe === "x") for (let L = 0; L < c.length - 1; L++) {
            const R = c[L], D = c[L + 1];
            for (let b = 1; b <= Le; b++) {
              const S = R + b / (Le + 1) * (D - R), v = [];
              for (let P = 0; P < r.length; P++) v.push(u(r[P], S, m[I]));
              for (let P = 0; P < r.length - 1; P++) {
                const X = k.length;
                dt.add(X), W.add(X), ve.set(X, I - 1), Ae.set(X, {
                  dir: "x",
                  bay: P
                }), k.push([
                  v[P],
                  v[P + 1]
                ]);
              }
            }
          }
          else for (let L = 0; L < r.length - 1; L++) {
            const R = r[L], D = r[L + 1];
            for (let b = 1; b <= Le; b++) {
              const S = R + b / (Le + 1) * (D - R), v = [];
              for (let P = 0; P < c.length; P++) v.push(u(S, c[P], m[I]));
              for (let P = 0; P < c.length - 1; P++) {
                const X = k.length;
                dt.add(X), W.add(X), ve.set(X, I - 1), Ae.set(X, {
                  dir: "y",
                  bay: P
                }), k.push([
                  v[P],
                  v[P + 1]
                ]);
              }
            }
          }
        }
        const _ = /* @__PURE__ */ new Map(), x = xt();
        for (let u = 0; u < c.length; u++) for (let I = 0; I < r.length; I++) y(I, u) || _.set(h[`${I},${u},0`], [
          ...x
        ]);
        pe = /* @__PURE__ */ new Set();
        for (const u of he) {
          const I = m.length - 1, L = u.floors.includes(-1) ? Array.from({
            length: I
          }, (R, D) => D) : u.floors.filter((R) => R < I);
          for (const R of L) {
            let D, b, S, v;
            u.dir === "x" ? (D = u.bay, S = u.bay + 1, b = u.axisIdx, v = u.axisIdx) : (D = u.axisIdx, S = u.axisIdx, b = u.bay, v = u.bay + 1);
            const P = h[`${D},${b},${R}`], X = h[`${D},${b},${R + 1}`];
            let G, ae;
            if (u.dir === "x" ? (G = h[`${S},${v},${R}`], ae = h[`${S},${v},${R + 1}`]) : (G = h[`${S},${v},${R}`], ae = h[`${S},${v},${R + 1}`]), P === void 0 || G === void 0 || X === void 0 || ae === void 0) continue;
            const K = ge, V = We, ce = f[P], re = f[G], ye = f[X], Te = f[ae], N = [];
            for (let ie = 0; ie <= V; ie++) {
              const te = [], de = ie / V;
              for (let Z = 0; Z <= K; Z++) {
                const ue = Z / K, Me = (1 - de) * ((1 - ue) * ce[0] + ue * re[0]) + de * ((1 - ue) * ye[0] + ue * Te[0]), oe = (1 - de) * ((1 - ue) * ce[1] + ue * re[1]) + de * ((1 - ue) * ye[1] + ue * Te[1]), Ee = (1 - de) * ((1 - ue) * ce[2] + ue * re[2]) + de * ((1 - ue) * ye[2] + ue * Te[2]);
                ie === 0 && Z === 0 ? te.push(P) : ie === 0 && Z === K ? te.push(G) : ie === V && Z === 0 ? te.push(X) : ie === V && Z === K ? te.push(ae) : (te.push(f.length), f.push([
                  Me,
                  oe,
                  Ee
                ]));
              }
              N.push(te);
            }
            for (let ie = 0; ie < V; ie++) for (let te = 0; te < K; te++) {
              const de = N[ie][te], Z = N[ie][te + 1], ue = N[ie + 1][te + 1], Me = N[ie + 1][te], oe = k.length;
              pe.add(oe), ve.set(oe, R), k.push([
                de,
                Z,
                ue,
                Me
              ]);
            }
            if (R === 0) for (let ie = 0; ie <= K; ie++) {
              const te = N[0][ie];
              te >= T && _.set(te, [
                ...x
              ]);
            }
          }
        }
        if (qt = /* @__PURE__ */ new Set(), Ke) {
          const u = l, I = l, L = /* @__PURE__ */ new Map(), R = (D, b, S) => `${Math.round(D * 1e4)},${Math.round(b * 1e4)},${Math.round(S * 1e4)}`;
          for (let D = 0; D < f.length; D++) L.set(R(f[D][0], f[D][1], f[D][2]), D);
          for (let D = 1; D < m.length; D++) {
            const b = m[D];
            for (let S = 0; S < r.length - 1; S++) for (let v = 0; v < c.length - 1; v++) {
              const P = r[S], X = r[S + 1], G = c[v], ae = c[v + 1], K = [];
              for (let V = 0; V <= I; V++) {
                const ce = [];
                for (let re = 0; re <= u; re++) {
                  const ye = P + re / u * (X - P), Te = G + V / I * (ae - G);
                  if (V === 0 && re === 0) ce.push(h[`${S},${v},${D}`]);
                  else if (V === 0 && re === u) ce.push(h[`${S + 1},${v},${D}`]);
                  else if (V === I && re === 0) ce.push(h[`${S},${v + 1},${D}`]);
                  else if (V === I && re === u) ce.push(h[`${S + 1},${v + 1},${D}`]);
                  else {
                    const N = R(ye, Te, b), ie = L.get(N);
                    if (ie !== void 0) ce.push(ie);
                    else {
                      const te = f.length;
                      f.push([
                        ye,
                        Te,
                        b
                      ]), L.set(N, te), ce.push(te);
                    }
                  }
                }
                K.push(ce);
              }
              for (let V = 0; V < I; V++) for (let ce = 0; ce < u; ce++) {
                const re = K[V][ce], ye = K[V][ce + 1], Te = K[V + 1][ce + 1], N = K[V + 1][ce], ie = k.length;
                qt.add(ie), ve.set(ie, D - 1), k.push([
                  re,
                  ye,
                  Te,
                  N
                ]);
              }
            }
          }
        }
        if (Dt && $t) {
          const u = $t === "all" || $t === "x" || $t === "perimeter", I = $t === "all" || $t === "y" || $t === "perimeter", L = m.length - 1;
          for (let R = 0; R < L; R++) {
            if (u) for (let D = 0; D < c.length; D++) {
              if ($t === "perimeter" && D !== 0 && D !== c.length - 1) continue;
              const b = Math.floor((r.length - 1) / 2);
              for (let S = 0; S < r.length - 1; S++) {
                if ($t === "perimeter" && S !== b || y(S, D) || y(S + 1, D)) continue;
                const v = h[`${S},${D},${R}`], P = h[`${S + 1},${D},${R + 1}`], X = h[`${S + 1},${D},${R}`], G = h[`${S},${D},${R + 1}`];
                v !== void 0 && P !== void 0 && (k.push([
                  v,
                  P
                ]), ve.set(k.length - 1, R)), X !== void 0 && G !== void 0 && (k.push([
                  X,
                  G
                ]), ve.set(k.length - 1, R));
              }
            }
            if (I) for (let D = 0; D < r.length; D++) {
              if ($t === "perimeter" && D !== 0 && D !== r.length - 1) continue;
              const b = Math.floor((c.length - 1) / 2);
              for (let S = 0; S < c.length - 1; S++) {
                if ($t === "perimeter" && S !== b || y(D, S) || y(D, S + 1)) continue;
                const v = h[`${D},${S},${R}`], P = h[`${D},${S + 1},${R + 1}`], X = h[`${D},${S + 1},${R}`], G = h[`${D},${S},${R + 1}`];
                v !== void 0 && P !== void 0 && (k.push([
                  v,
                  P
                ]), ve.set(k.length - 1, R)), X !== void 0 && G !== void 0 && (k.push([
                  X,
                  G
                ]), ve.set(k.length - 1, R));
              }
            }
          }
        }
        return e.nodes.val = f, e.elements.val = k, e.nodeInputs && (e.nodeInputs.val = {
          supports: _
        }), Ge = [
          ...r
        ], Ze = [
          ...c
        ], gt = m[m.length - 1] || 0, setTimeout(() => {
          It(), en(r, c), Yn(), Gn();
        }, 50), nt(), {
          nodes: f.length,
          elements: k.length,
          nJointNodes: T
        };
      },
      galpon(t = 12, o = 20, n = 6, l = 3, s = 8, d = 4) {
        tt.clear();
        const a = [], i = [], p = (w) => n + l * (1 - Math.pow(2 * w / t - 1, 2)), r = [], c = d + 1;
        for (let w = 0; w < c; w++) {
          const y = [], f = o / d * w;
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
        for (let w = 0; w < c; w++) {
          const y = r[w];
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
        for (let w = 0; w < d; w++) for (let y = 2; y < r[0].length; y++) i.push([
          r[w][y],
          r[w + 1][y]
        ]);
        for (let w = 0; w < d; w++) for (let y = 2; y < r[0].length - 1; y += 2) i.push([
          r[w][y],
          r[w + 1][y + 1]
        ]);
        const m = /* @__PURE__ */ new Map(), M = xt();
        for (let w = 0; w < c; w++) m.set(r[w][0], [
          ...M
        ]), m.set(r[w][1], [
          ...M
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
            qe.colMat = 1, qe.vigaMat = 1, tt.clear(), st("truss"), Ms();
            break;
          }
          case "beams": {
            qe.colMat = 0, qe.vigaMat = 0, qe.colShape = 0, tt.clear(), st("beams"), ws();
            break;
          }
          case "3d":
          case "3d-structure":
          case "torre": {
            qe.colMat = 1, qe.vigaMat = 1, tt.clear(), st("3d"), Es();
            break;
          }
          case "portico": {
            qe.colMat = 0, qe.vigaMat = 0, qe.colShape = 0, st("frame"), Oe();
            break;
          }
          case "edificio": {
            st("edificio"), qe.colMat = 0, qe.vigaMat = 0, qe.colShape = 0, he = [], Ke = false, Ie = false, Dt = false, Oe();
            break;
          }
          case "edif-acero":
          case "edificio-acero": {
            st("edificio"), qe.colMat = 1, qe.vigaMat = 1, qe.steelColType = 0, qe.steelVigaType = 0, he = [], Ie = true, Le = 2;
            const o = fe.reduce((l, s) => l + s, 0) / fe.length, n = se.reduce((l, s) => l + s, 0) / se.length;
            Xe = o >= n ? "y" : "x", Ke = true, pt = 0.08, Dt = false, Oe();
            break;
          }
          case "edif-acero-diag":
          case "edificio-acero-diag": {
            st("edificio"), qe.colMat = 1, qe.vigaMat = 1, qe.steelColType = 0, qe.steelVigaType = 0, he = [], Ie = true, Le = 2;
            const o = fe.reduce((l, s) => l + s, 0) / fe.length, n = se.reduce((l, s) => l + s, 0) / se.length;
            Xe = o >= n ? "y" : "x", Ke = true, pt = 0.08, Dt = true, $t = "perimeter", Oe();
            break;
          }
          case "edif-muros":
          case "edificio-muros": {
            st("edificio"), qe.colMat = 0, qe.vigaMat = 0, qe.colShape = 0, Ie = false;
            const o = Math.round(((_a2 = Y.nVanosX) == null ? void 0 : _a2.val) ?? 2), n = Math.round(((_b = Y.nVanosY) == null ? void 0 : _b.val) ?? 2);
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
            const o = Math.round(((_c = Y.nVanosX) == null ? void 0 : _c.val) ?? 2), n = Math.round(((_d = Y.nVanosY) == null ? void 0 : _d.val) ?? 2);
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
            st("edificio"), Y.nPisos && (Y.nPisos.val = 1), Y.hPiso && (Y.hPiso.val = 4.5), Y.nVanosX && (Y.nVanosX.val = 3), Y.nVanosY && (Y.nVanosY.val = 2), Y.nSubViga && (Y.nSubViga.val = 3), fe = [
              6,
              6,
              6
            ], se = [
              5,
              5
            ], qe.colMat = 1, qe.vigaMat = 1, qe.steelColType = 0, qe.steelVigaType = 0, he = [], Ie = true, Le = 2, Xe = fe[0] >= se[0] ? "y" : "x", Ke = true, pt = 0.08, mt = 3, At = 3, Oe();
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
            tt.clear(), st("placa-3q"), Ss();
            break;
          }
          case "placa":
          case "plate":
          case "plate-q4":
          case "placa-q4": {
            tt.clear(), st("placa-q4"), Is();
            break;
          }
          case "losa-rect":
          case "rectangular-slab": {
            tt.clear(), st("losa-rect"), ks();
            break;
          }
          case "losa-plana":
          case "flat-slab": {
            tt.clear(), st("losa-plana"), Ts();
            break;
          }
          case "viga-alta":
          case "deep-beam": {
            tt.clear(), st("viga-alta"), As();
            break;
          }
          case "muro-contencion":
          case "retaining-wall": {
            tt.clear(), st("muro-contencion"), Ls();
            break;
          }
          case "zapata":
          case "footing": {
            tt.clear(), st("zapata"), zs();
            break;
          }
          case "placa-orificios":
          case "plate-holes":
          case "placa-base": {
            tt.clear(), st("placa-orificios"), Cs();
            break;
          }
          case "col-placa":
          case "columna-placa": {
            tt.clear(), st("col-placa"), Ps();
            break;
          }
          case "talud":
          case "slope": {
            tt.clear(), st("talud"), Fs();
            break;
          }
          case "eiffel":
          case "torre-eiffel": {
            tt.clear(), st("eiffel"), Xs();
            break;
          }
          case "arco":
          case "arco-gateway": {
            tt.clear(), st("arco"), Us();
            break;
          }
          case "puente":
          case "puente-colgante": {
            tt.clear(), st("puente"), Ks();
            break;
          }
          case "twisted":
          case "torre-twisted":
          case "turning-torso": {
            tt.clear(), st("twisted"), Zs();
            break;
          }
          case "burj":
          case "burj-khalifa": {
            tt.clear(), st("burj"), Qs();
            break;
          }
          case "opera":
          case "sydney-opera": {
            tt.clear(), st("opera"), ea();
            break;
          }
          case "diagrid":
          case "gherkin": {
            tt.clear(), st("diagrid"), ta();
            break;
          }
          case "muro-q4":
          case "shear-wall":
          case "muro-cantilever": {
            tt.clear(), st("muro-q4"), os();
            break;
          }
          case "viga-q4":
          case "cantilever-beam":
          case "viga-cantilever": {
            tt.clear(), st("viga-q4"), oa();
            break;
          }
          case "placa-xy":
          case "placa-cantilever":
          case "losa-cantilever": {
            tt.clear(), st("placa-xy"), na();
            break;
          }
          case "pergola": {
            tt.clear(), st("pergola"), sa();
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
        const m = performance.now(), M = as({
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
        }), w = performance.now() - m;
        console.log(`Solved in ${w.toFixed(1)} ms`), console.log(`w_max = ${M.maxW.toExponential(6)}`), console.log(`w_center = ${(M.centerW ?? 0).toExponential(6)}`), console.log(`Mxx_max = ${M.maxMxx.toExponential(4)}, Myy_max = ${M.maxMyy.toExponential(4)}`), console.log(`Mxy_max = ${M.maxMxy.toExponential(4)}`), console.log(`Qx_max = ${M.maxQx.toExponential(4)}, Qy_max = ${M.maxQy.toExponential(4)}`);
        const y = M.nodeResults.map(($) => [
          $.x,
          $.y,
          0
        ]), f = M.elementResults.map(($) => [
          ...$.nodes
        ]);
        e.nodes.val = y, e.elements.val = f;
        const h = /* @__PURE__ */ new Map();
        M.nodeResults.forEach(($, C) => {
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
        M.nodeResults.forEach(($, C) => {
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
          y.forEach((C, _) => {
            T.has(_) || k.set(_, [
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
          const $ = /* @__PURE__ */ new Map(), C = /* @__PURE__ */ new Map(), _ = /* @__PURE__ */ new Map();
          M.elementResults.forEach((x, u) => {
            $.set(u, [
              x.Mxx,
              x.Mxx,
              x.Mxx
            ]), C.set(u, [
              x.Myy,
              x.Myy,
              x.Myy
            ]), _.set(u, [
              x.Mxy,
              x.Mxy,
              x.Mxy
            ]);
          }), e.analyzeOutputs.val = {
            bendingXX: $,
            bendingYY: C,
            bendingXY: _
          };
        }
        return setTimeout(() => It(), 50), nt(), M;
      },
      setParam(t, o) {
        Y[t] ? (Y[t].val = o, console.log(`${t} = ${o}`), fo(), Oe()) : bt[t] ? (bt[t].val = o, console.log(`${t} = ${o}`), fo(), Oe()) : console.error(`Par\xE1metro "${t}" no encontrado. Disponibles: ${Object.keys({
          ...Y,
          ...bt
        }).join(", ")}`);
      },
      get(t) {
        if (!t) {
          const o = {};
          for (const l in Y) o[l] = Y[l].val;
          for (const l in bt) o[l] = bt[l].val;
          o.plateTheory = Ce, o.supportType = St;
          const n = yn()[A];
          return n && n[St] && (o.supportLabel = n[St].label), console.table(o), o;
        }
        if (Y[t]) return Y[t].val;
        if (bt[t]) return bt[t].val;
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
        }[Ce] || Ce}`), A.includes("placa") && (fo(), Oe());
      },
      setBc(t) {
        const o = yn()[A];
        if (!o || o.length === 0) {
          console.error("No support options for current generator");
          return;
        }
        if (typeof t == "string") {
          const n = o.findIndex((l) => l.label.toLowerCase().includes(t.toLowerCase()));
          t = n >= 0 ? n : 0;
        }
        St = t, St >= o.length && (St = 0), console.log(`Apoyo: ${o[St].label} \u2192 DOFs: [${o[St].dofs.map((n) => n ? "1" : "0").join(",")}]`), fo(), Oe();
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
        t && (g = t), o && (F = o), E = _o(g, F);
        const n = ze.querySelector("#cad3d-force-unit"), l = ze.querySelector("#cad3d-length-unit");
        return n && (n.textContent = g), l && (l.textContent = F), A && st(A), console.log(`Unidades: ${E.label} | E=${E.E.toExponential(3)} ${E.stress}`), E.id;
      },
      view(t) {
      },
      get mesh() {
        return e;
      }
    };
    function ys() {
      return yl(E);
    }
    function $s() {
      return $l(E);
    }
    let bt = {};
    function st(t) {
      var _a2, _b, _c, _d;
      A = t, ha.val = true, St = 0, be && _n(), Y = {};
      const o = ys()[t];
      if (o) for (const l of o) Y[l.key] = {
        val: l.val,
        min: l.min,
        max: l.max,
        step: l.step,
        label: l.label
      };
      bt = {};
      const n = $s()[t];
      if (n) for (const l of n) bt[l.key] = {
        val: l.val,
        min: l.min,
        max: l.max,
        step: l.step,
        label: l.label
      };
      if (t === "edificio") {
        const l = Math.round(((_a2 = Y.nVanosX) == null ? void 0 : _a2.val) ?? 2), s = Math.round(((_b = Y.nVanosY) == null ? void 0 : _b.val) ?? 2);
        fe = Array(l).fill(E.defaultSpan), se = Array(s).fill(E.defaultSpan * 0.8);
        const d = Math.round(((_c = Y.nPisos) == null ? void 0 : _c.val) ?? 3), a = ((_d = Y.hPiso) == null ? void 0 : _d.val) ?? 3;
        q = Array(d).fill(a);
      }
      fo(), setTimeout(() => {
        Oa(), Oe();
      }, 50);
    }
    function le(t) {
      var _a2, _b;
      return ((_a2 = Y[t]) == null ? void 0 : _a2.val) ?? ((_b = bt[t]) == null ? void 0 : _b.val) ?? 0;
    }
    function Oe() {
      switch (A) {
        case "truss":
          Ms();
          break;
        case "beams":
          ws();
          break;
        case "3d":
          Es();
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
            ...fe
          ], [
            ...se
          ], p, d, o, n, l, s, a);
          break;
        }
        case "galpon":
          tt.galpon(le("span"), le("length"), le("height"), le("archRise"), Math.round(le("xDiv")), Math.round(le("yDiv")));
          break;
        case "barra":
          ka();
          break;
        case "placa-3q":
          Ss();
          break;
        case "placa-q4":
          Is();
          break;
        case "losa-rect":
          ks();
          break;
        case "losa-plana":
          Ts();
          break;
        case "viga-alta":
          As();
          break;
        case "muro-contencion":
          Ls();
          break;
        case "zapata":
          zs();
          break;
        case "placa-orificios":
          Cs();
          break;
        case "col-placa":
          Ps();
          break;
        case "talud":
          Fs();
          break;
        case "eiffel":
          Xs();
          break;
        case "arco":
          Us();
          break;
        case "puente":
          Ks();
          break;
        case "twisted":
          Zs();
          break;
        case "burj":
          Qs();
          break;
        case "opera":
          ea();
          break;
        case "diagrid":
          ta();
          break;
        case "muro-q4":
          os();
          break;
        case "viga-q4":
          oa();
          break;
        case "placa-xy":
          na();
          break;
        case "pergola":
          sa();
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
        if (ee.size > 0 || U.size > 0 || j) {
          const o = e.elements.val, n = o.filter((l, s) => !(ee.has(s) || U.has(s) || j && !Q.has(s)));
          n.length !== o.length && (e.elements.val = n);
        }
        setTimeout(() => {
          Eo(), Bn();
        }, 30);
      }
    }
    function Ms() {
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
    function ws() {
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
        const M = m / s, w = d.length;
        d.push([
          i[0] + (p[0] - i[0]) * M,
          i[1] + (p[1] - i[1]) * M,
          i[2] + (p[2] - i[2]) * M
        ]), a.push([
          r,
          w
        ]), r = w;
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
    function Es() {
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
          const _ = C / s, x = i.length;
          i.push([
            T[0] + (k[0] - T[0]) * _,
            T[1] + (k[1] - T[1]) * _,
            T[2] + (k[2] - T[2]) * _
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
      const m = le("Ex") ?? 0, M = (le("CM") ?? 0) + (le("CV") ?? 0), w = a - 2, y = /* @__PURE__ */ new Map();
      if (m !== 0 && M === 0) y.set(w, [
        m,
        0,
        0,
        0,
        0,
        0
      ]);
      else if (M !== 0 && m === 0) for (let f = 0; f < i.length; f++) c.has(f) || y.set(f, [
        0,
        0,
        M,
        0,
        0,
        0
      ]);
      else if (m !== 0 && M !== 0) for (let f = 0; f < i.length; f++) c.has(f) || y.set(f, [
        f === w ? m : 0,
        0,
        M,
        0,
        0,
        0
      ]);
      e.nodes.val = i, e.elements.val = p, e.nodeInputs && (e.nodeInputs.val = {
        supports: c,
        loads: y
      }), nt();
    }
    function ka() {
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
    function Ss() {
      const t = le("Lx") || 15, o = le("Ly") || 10, n = le("meshSize") || 0.5, l = le("q") || -3, s = le("t") || 1, d = le("E") || 3e7, a = le("nu") || 0.3, i = d / (2 * (1 + a)), p = Ce === 1 ? "Membrana" : Ce === 2 ? "Kirchhoff" : "Mindlin", { nodes: r, elements: c, boundaryIndices: m } = Mo({
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
      }), M = t * o, w = l * M / r.length, y = new Map(m.map((h) => [
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
          w,
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
        const h = Ft(r, c, e.nodeInputs.val, e.elementInputs.val);
        h && e.deformOutputs && (e.deformOutputs.val = h);
        const T = $o(r, c, e.elementInputs.val, h);
        T && e.analyzeOutputs && (e.analyzeOutputs.val = T), console.log(`Plate 3Q [${p}]: ${r.length} nodes, ${c.length} triangles, t=${s}, E=${d}, \u03BD=${a}`);
      } catch (h) {
        console.warn("Plate 3Q analysis failed:", h.message);
      }
      setTimeout(() => It(), 50), nt();
    }
    function Is() {
      const t = le("Lx") || 10, o = le("Ly") || 10, n = Math.round(le("nx") || 16), l = Math.round(le("ny") || 16), s = le("t") || 0.2, d = le("q") || -10, a = le("E") || 3e7, i = le("nu") || 0.3, p = St === 1 ? "clamped" : "simply-supported", c = {
        1: 2,
        2: 1,
        3: 0
      }[Ce] ?? 0;
      return tt.plateQ4(t, o, n, l, p, d, s, a, i, c);
    }
    function ks() {
      const t = le("a") || 6, o = le("b") || 4, n = Math.round(le("nx") || 12), l = Math.round(le("ny") || 8), s = le("t") || 0.1, d = le("q") || -10, a = le("E") || 35e6, i = le("nu") || 0.15, r = {
        1: 2,
        2: 1,
        3: 0
      }[Ce] ?? 0, c = tt.plateQ4(t, o, n, l, "simply-supported", d, s, a, i, r), m = a * s * s * s / (12 * (1 - i * i));
      let M = 0;
      for (let w = 1; w <= 19; w += 2) for (let y = 1; y <= 19; y += 2) {
        const f = w * w / (t * t) + y * y / (o * o);
        M += 1 / (w * y * f * f);
      }
      if (M *= 16 * Math.abs(d) / (Math.PI ** 6 * m), console.log(`\u{1F4D0} Navier anal\xEDtico w_center = ${M.toExponential(6)}`), c) {
        const w = Math.abs((Math.abs(c.centerW || 0) - M) / M * 100);
        console.log(`   WASM w_center = ${(c.centerW || 0).toExponential(6)}, error = ${w.toFixed(2)}%`);
      }
      return c;
    }
    function Ts() {
      const t = le("t") || 0.2, o = le("q") || -10, n = le("E") || 35e6, l = le("nu") || 0.2, s = le("meshSize") || 0.6, d = [
        3.6,
        4.2,
        4.2,
        3.6
      ], a = [
        3,
        3.6,
        3
      ], i = d.reduce((b, S) => b + S, 0), p = a.reduce((b, S) => b + S, 0), r = [
        0
      ];
      for (const b of d) r.push(r[r.length - 1] + b);
      const c = [
        0
      ];
      for (const b of a) c.push(c[c.length - 1] + b);
      const m = Math.max(2, Math.round(i / s)), M = Math.max(2, Math.round(p / s)), w = i / m, y = p / M, f = [];
      for (let b = 0; b <= M; b++) for (let S = 0; S <= m; S++) f.push([
        S * w,
        b * y
      ]);
      const h = [], T = /* @__PURE__ */ new Set();
      for (const b of r) for (const S of c) {
        let v = 1 / 0, P = 0;
        for (let X = 0; X < f.length; X++) {
          const G = Math.hypot(f[X][0] - b, f[X][1] - S);
          G < v && (v = G, P = X);
        }
        T.has(P) || (T.add(P), h.push({
          node: P,
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
      ][$]}]: ${i}\xD7${p}m, ${m}\xD7${M} elem, ${T.size} columnas`);
      const C = performance.now(), _ = as({
        E: n,
        nu: l,
        thickness: t,
        meshLx: i,
        meshLy: p,
        meshNx: m,
        meshNy: M,
        bcType: "none",
        pressure: o,
        theoryType: $,
        springs: h
      }), x = performance.now() - C;
      console.log(`Solved in ${x.toFixed(1)} ms, w_max = ${_.maxW.toExponential(4)}`);
      const u = _.nodeResults.map((b) => [
        b.x,
        b.y,
        0
      ]), I = _.elementResults.map((b) => [
        ...b.nodes
      ]);
      e.nodes.val = u, e.elements.val = I;
      const L = /* @__PURE__ */ new Map();
      _.nodeResults.forEach((b, S) => {
        L.set(S, [
          0,
          0,
          b.w,
          b.bx,
          b.by,
          0
        ]);
      }), e.deformOutputs && (e.deformOutputs.val = {
        deformations: L
      });
      const R = /* @__PURE__ */ new Map();
      for (const b of T) R.set(b, [
        true,
        true,
        true,
        false,
        false,
        false
      ]);
      const D = /* @__PURE__ */ new Map();
      if (Math.abs(o) > 1e-30) {
        const b = o * i * p / u.length;
        u.forEach((S, v) => {
          R.has(v) || D.set(v, [
            0,
            0,
            b,
            0,
            0,
            0
          ]);
        });
      }
      if (e.nodeInputs && (e.nodeInputs.val = {
        supports: R,
        loads: D
      }), e.elementInputs && (e.elementInputs.val = {}), e.analyzeOutputs) {
        const b = /* @__PURE__ */ new Map(), S = /* @__PURE__ */ new Map(), v = /* @__PURE__ */ new Map();
        _.elementResults.forEach((P, X) => {
          b.set(X, [
            P.Mxx,
            P.Mxx,
            P.Mxx
          ]), S.set(X, [
            P.Myy,
            P.Myy,
            P.Myy
          ]), v.set(X, [
            P.Mxy,
            P.Mxy,
            P.Mxy
          ]);
        }), e.analyzeOutputs.val = {
          bendingXX: b,
          bendingYY: S,
          bendingXY: v
        };
      }
      setTimeout(() => It(), 50), nt();
    }
    function As() {
      const t = le("L") || 4, o = le("H") || 2, n = le("t") || 0.1, l = le("E") || 2e7, s = le("nu") || 0.2, d = l / (2 * (1 + s)), a = le("q") || -100, i = le("b") || 0.8, p = le("meshSize") || 0.2, { nodes: r, elements: c, boundaryIndices: m } = Mo({
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
      }), M = r, w = 0.4, y = /* @__PURE__ */ new Map();
      for (let x = 0; x < M.length; x++) {
        const u = M[x][0], I = M[x][1];
        Math.abs(I) < 1e-6 && (u <= w + 1e-6 || u >= t - w - 1e-6) && y.set(x, [
          true,
          true,
          true,
          true,
          true,
          true
        ]);
      }
      const f = (t - i) / 2, h = f + i, T = [];
      for (let x = 0; x < M.length; x++) if (Math.abs(M[x][1] - o) < 1e-6) {
        const u = M[x][0];
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
      }, _ = {
        supports: y,
        loads: $
      };
      try {
        const x = Ft(M, c, _, C), u = $o(M, c, C, x), I = M.map((R) => [
          R[0],
          0,
          R[1]
        ]);
        if (e.nodes.val = I, e.elements.val = c, x && x.deformations) {
          const R = /* @__PURE__ */ new Map();
          x.deformations.forEach((D, b) => {
            R.set(b, [
              D[0],
              D[2],
              D[1],
              D[3],
              D[5],
              D[4]
            ]);
          }), e.deformOutputs && (e.deformOutputs.val = {
            deformations: R
          });
        }
        if (e.nodeInputs) {
          const R = /* @__PURE__ */ new Map();
          y.forEach((b, S) => R.set(S, b));
          const D = /* @__PURE__ */ new Map();
          $.forEach((b, S) => D.set(S, [
            b[0],
            b[2],
            b[1],
            b[3],
            b[5],
            b[4]
          ])), e.nodeInputs && (e.nodeInputs.val = {
            supports: R,
            loads: D
          });
        }
        e.elementInputs && (e.elementInputs.val = {}), e.analyzeOutputs && (e.analyzeOutputs.val = {});
        let L = 0;
        x && x.deformations && x.deformations.forEach((R) => {
          const D = Math.sqrt(R[0] * R[0] + R[1] * R[1] + R[2] * R[2]);
          L = Math.max(L, D);
        }), console.log(`Viga Alta: ${M.length} nodos, ${c.length} triangulos`), console.log(`  L=${t}, H=${o}, t=${n}, E=${l}, nu=${s}`), console.log(`  Carga: q=${a} kN/m sobre ${i}m central`), console.log(`  max|u| = ${L.toExponential(4)}`);
      } catch (x) {
        console.warn("Viga Alta analysis failed:", x.message);
      }
      setTimeout(() => It(), 50), nt();
    }
    function Ls() {
      const t = le("H") || 4, o = le("B") || 3, n = le("tw") || 0.3, l = le("tb") || 0.4, s = le("meshSize") || 0.2, d = le("E") || 25e6, a = le("nu") || 0.2, i = d / (2 * (1 + a)), p = le("gamma") || 18, r = le("Ka") || 0.33, c = le("Es") || 5e4, m = le("nus") || 0.3, M = c / (2 * (1 + m)), w = le("kn") || 1e6, y = le("ks") || 1e4, f = le("gammaW") || 9.81, h = le("Hw") || 3.5, T = le("qs") || 0, k = St, $ = o * 0.3, C = o * 0.7, _ = [
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
      let x = [], u = [], I = /* @__PURE__ */ new Map(), L = /* @__PURE__ */ new Map(), R;
      if (k === 0) {
        const S = Mo({
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
        x = S.nodes, u = S.elements;
        for (let P = 0; P < x.length; P++) Math.abs(x[P][1]) < 1e-6 && I.set(P, [
          true,
          true,
          true,
          true,
          true,
          true
        ]);
        const v = [];
        for (let P = 0; P < x.length; P++) {
          const X = x[P][0], G = x[P][1];
          Math.abs(X - n) < s * 0.6 && G >= l - 1e-6 && v.push({
            idx: P,
            y: G
          });
        }
        v.sort((P, X) => P.y - X.y);
        for (let P = 0; P < v.length; P++) {
          const { idx: X, y: G } = v[P], ae = l + t - G, K = r * p * ae + r * T;
          let V = s;
          P > 0 && P < v.length - 1 ? V = (v[P + 1].y - v[P - 1].y) / 2 : P === 0 && v.length > 1 ? V = (v[1].y - v[0].y) / 2 : P === v.length - 1 && v.length > 1 && (V = (v[P].y - v[P - 1].y) / 2);
          const ce = K * V;
          Math.abs(ce) > 1e-10 && L.set(X, [
            ce,
            0,
            0,
            0,
            0,
            0
          ]);
        }
        R = {
          elasticities: new Map(u.map((P, X) => [
            X,
            d
          ])),
          elasticitiesOrthogonal: new Map(u.map((P, X) => [
            X,
            d
          ])),
          thicknesses: new Map(u.map((P, X) => [
            X,
            n
          ])),
          poissonsRatios: new Map(u.map((P, X) => [
            X,
            a
          ])),
          shearModuli: new Map(u.map((P, X) => [
            X,
            i
          ]))
        };
      } else if (k === 1 || k === 2) {
        const S = C, v = l + t;
        if (k === 2) {
          const P = [
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
          ], X = Math.max(3, Math.ceil((v - l) / s)), G = [];
          for (let oe = 0; oe <= X; oe++) G.push([
            n,
            l + oe * (v - l) / X,
            0
          ]);
          const ae = Mo({
            points: [
              ...P,
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
          x = ae.nodes, u = ae.elements;
          const K = s * 0.4, V = [];
          for (let oe = 0; oe < x.length; oe++) {
            const Ee = x[oe][0], He = x[oe][1];
            Math.abs(Ee - n) < K && He >= l - K && V.push(oe);
          }
          V.sort((oe, Ee) => x[oe][1] - x[Ee][1]);
          const ce = [
            V[0]
          ];
          for (let oe = 1; oe < V.length; oe++) {
            const Ee = x[V[oe]][1] - x[ce[ce.length - 1]][1];
            Math.abs(Ee) > s * 0.05 && ce.push(V[oe]);
          }
          V.length = 0, V.push(...ce);
          const re = /* @__PURE__ */ new Map();
          for (const oe of V) {
            const Ee = x.length;
            x.push([
              x[oe][0],
              x[oe][1],
              x[oe][2]
            ]), re.set(oe, Ee);
          }
          const ye = u.length, Te = [];
          for (let oe = 0; oe < ye; oe++) {
            const Ee = u[oe], He = (x[Ee[0]][0] + x[Ee[1]][0] + x[Ee[2]][0]) / 3, at = (x[Ee[0]][1] + x[Ee[1]][1] + x[Ee[2]][1]) / 3, rt = He >= -$ && He <= C && at >= 0 && at <= l, wt = He >= 0 && He <= n && at >= l && at <= l + t, Tt = rt || wt;
            if (Te.push(!Tt), !Tt) for (let Et = 0; Et < Ee.length; Et++) {
              const Ot = re.get(Ee[Et]);
              Ot !== void 0 && (Ee[Et] = Ot);
            }
          }
          const N = u.length;
          for (let oe = 0; oe < V.length - 1; oe++) {
            const Ee = V[oe], He = V[oe + 1], at = re.get(Ee), rt = re.get(He);
            u.push([
              He,
              Ee,
              at,
              rt
            ]);
          }
          const ie = u.length - N, te = /* @__PURE__ */ new Map(), de = /* @__PURE__ */ new Map(), Z = /* @__PURE__ */ new Map(), ue = /* @__PURE__ */ new Map(), Me = /* @__PURE__ */ new Map();
          for (let oe = 0; oe < ye; oe++) Te[oe] ? (te.set(oe, c), de.set(oe, c), ue.set(oe, m), Me.set(oe, M), Z.set(oe, 1)) : (te.set(oe, d), de.set(oe, d), ue.set(oe, a), Me.set(oe, i), Z.set(oe, 1));
          for (let oe = N; oe < u.length; oe++) te.set(oe, w), de.set(oe, 0), ue.set(oe, 0), Me.set(oe, y), Z.set(oe, 0);
          R = {
            elasticities: te,
            elasticitiesOrthogonal: de,
            thicknesses: Z,
            poissonsRatios: ue,
            shearModuli: Me
          };
          for (let oe = 0; oe < x.length; oe++) {
            const Ee = x[oe][0], He = x[oe][1];
            Math.abs(He) < 1e-6 ? I.set(oe, [
              true,
              true,
              true,
              true,
              true,
              true
            ]) : Math.abs(Ee - S) < s * 0.1 && I.set(oe, [
              true,
              false,
              true,
              true,
              true,
              true
            ]);
          }
          for (let oe = 0; oe < ye; oe++) {
            if (!Te[oe]) continue;
            const Ee = u[oe], He = x[Ee[0]], at = x[Ee[1]], rt = x[Ee[2]], wt = Math.abs((at[0] - He[0]) * (rt[1] - He[1]) - (rt[0] - He[0]) * (at[1] - He[1])) / 2, Tt = -p * wt / 3;
            for (const Et of Ee) {
              const Ot = L.get(Et) || [
                0,
                0,
                0,
                0,
                0,
                0
              ];
              Ot[1] += Tt, L.set(Et, Ot);
            }
          }
          if (T > 0) {
            const oe = [];
            for (let Ee = 0; Ee < x.length; Ee++) {
              const He = x[Ee][0], at = x[Ee][1];
              Math.abs(at - v) < s * 0.1 && He > n - 1e-6 && oe.push({
                idx: Ee,
                x: He
              });
            }
            oe.sort((Ee, He) => Ee.x - He.x);
            for (let Ee = 0; Ee < oe.length; Ee++) {
              let He = s;
              Ee > 0 && Ee < oe.length - 1 ? He = (oe[Ee + 1].x - oe[Ee - 1].x) / 2 : Ee === 0 && oe.length > 1 ? He = (oe[1].x - oe[0].x) / 2 : Ee === oe.length - 1 && oe.length > 1 && (He = (oe[Ee].x - oe[Ee - 1].x) / 2);
              const at = -T * He, rt = L.get(oe[Ee].idx) || [
                0,
                0,
                0,
                0,
                0,
                0
              ];
              rt[1] += at, L.set(oe[Ee].idx, rt);
            }
          }
          console.log(`  Interfaz Goodman: ${V.length} nodos interfaz, ${ie} elem interfaz, kn=${w}, ks=${y}`);
        } else {
          const P = [
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
          ], X = [
            [
              n,
              l,
              0
            ]
          ], G = Mo({
            points: [
              ...P,
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
          x = G.nodes, u = G.elements;
          const ae = (N) => {
            const ie = (x[N[0]][0] + x[N[1]][0] + x[N[2]][0]) / 3, te = (x[N[0]][1] + x[N[1]][1] + x[N[2]][1]) / 3, de = ie >= -$ && ie <= C && te >= 0 && te <= l, Z = ie >= 0 && ie <= n && te >= l && te <= l + t;
            return de || Z;
          }, K = /* @__PURE__ */ new Map(), V = /* @__PURE__ */ new Map(), ce = /* @__PURE__ */ new Map(), re = /* @__PURE__ */ new Map(), ye = /* @__PURE__ */ new Map(), Te = [];
          for (let N = 0; N < u.length; N++) {
            const ie = ae(u[N]);
            Te.push(!ie), ie ? (K.set(N, d), V.set(N, d), re.set(N, a), ye.set(N, i), ce.set(N, 1)) : (K.set(N, c), V.set(N, c), re.set(N, m), ye.set(N, M), ce.set(N, 1));
          }
          R = {
            elasticities: K,
            elasticitiesOrthogonal: V,
            thicknesses: ce,
            poissonsRatios: re,
            shearModuli: ye
          };
          for (let N = 0; N < x.length; N++) {
            const ie = x[N][0], te = x[N][1];
            Math.abs(te) < 1e-6 ? I.set(N, [
              true,
              true,
              true,
              true,
              true,
              true
            ]) : Math.abs(ie - S) < s * 0.1 && I.set(N, [
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
            const ie = u[N], te = x[ie[0]], de = x[ie[1]], Z = x[ie[2]], ue = Math.abs((de[0] - te[0]) * (Z[1] - te[1]) - (Z[0] - te[0]) * (de[1] - te[1])) / 2, Me = -p * ue / 3;
            for (const oe of ie) {
              const Ee = L.get(oe) || [
                0,
                0,
                0,
                0,
                0,
                0
              ];
              Ee[1] += Me, L.set(oe, Ee);
            }
          }
          if (T > 0) {
            const N = [];
            for (let ie = 0; ie < x.length; ie++) {
              const te = x[ie][0], de = x[ie][1];
              Math.abs(de - v) < s * 0.1 && te > n - 1e-6 && N.push({
                idx: ie,
                x: te
              });
            }
            N.sort((ie, te) => ie.x - te.x);
            for (let ie = 0; ie < N.length; ie++) {
              let te = s;
              ie > 0 && ie < N.length - 1 ? te = (N[ie + 1].x - N[ie - 1].x) / 2 : ie === 0 && N.length > 1 ? te = (N[1].x - N[0].x) / 2 : ie === N.length - 1 && N.length > 1 && (te = (N[ie].x - N[ie - 1].x) / 2);
              const de = -T * te, Z = L.get(N[ie].idx) || [
                0,
                0,
                0,
                0,
                0,
                0
              ];
              Z[1] += de, L.set(N[ie].idx, Z);
            }
          }
        }
      }
      if (k === 3) {
        const S = Mo({
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
        x = S.nodes, u = S.elements;
        for (let ae = 0; ae < x.length; ae++) Math.abs(x[ae][1]) < 1e-6 && I.set(ae, [
          true,
          true,
          true,
          true,
          true,
          true
        ]);
        const v = l + t, P = Math.min(h, t), X = v - P, G = [];
        for (let ae = 0; ae < x.length; ae++) {
          const K = x[ae][0], V = x[ae][1];
          Math.abs(K - n) < s * 0.6 && V >= l - 1e-6 && G.push({
            idx: ae,
            y: V
          });
        }
        G.sort((ae, K) => ae.y - K.y);
        for (let ae = 0; ae < G.length; ae++) {
          const { idx: K, y: V } = G[ae], ce = Math.max(0, v - V);
          if (ce <= 0 || V < X - 1e-6) continue;
          const re = Math.min(ce, P), ye = f * re;
          let Te = s;
          ae > 0 && ae < G.length - 1 ? Te = (G[ae + 1].y - G[ae - 1].y) / 2 : ae === 0 && G.length > 1 ? Te = (G[1].y - G[0].y) / 2 : ae === G.length - 1 && G.length > 1 && (Te = (G[ae].y - G[ae - 1].y) / 2);
          const N = ye * Te;
          Math.abs(N) > 1e-10 && L.set(K, [
            N,
            0,
            0,
            0,
            0,
            0
          ]);
        }
        R = {
          elasticities: new Map(u.map((ae, K) => [
            K,
            d
          ])),
          elasticitiesOrthogonal: new Map(u.map((ae, K) => [
            K,
            d
          ])),
          thicknesses: new Map(u.map((ae, K) => [
            K,
            n
          ])),
          poissonsRatios: new Map(u.map((ae, K) => [
            K,
            a
          ])),
          shearModuli: new Map(u.map((ae, K) => [
            K,
            i
          ]))
        };
      }
      const D = {
        supports: I,
        loads: L
      }, b = [
        "Rankine (Ka)",
        "Suelo continuo",
        "Interfaz",
        "Presion agua"
      ];
      try {
        const S = Ft(x, u, D, R), v = u.filter((ce) => ce.length === 3), P = {};
        for (const ce of Object.keys(R)) {
          const re = R[ce];
          if (re && re instanceof Map) {
            const ye = /* @__PURE__ */ new Map();
            let Te = 0;
            for (let N = 0; N < u.length; N++) u[N].length === 3 && (re.has(N) && ye.set(Te, re.get(N)), Te++);
            P[ce] = ye;
          }
        }
        const X = $o(x, v, P, S), G = x.map((ce) => [
          ce[0],
          0,
          ce[1]
        ]);
        if (e.nodes.val = G, e.elements.val = v, S && S.deformations) {
          const ce = /* @__PURE__ */ new Map();
          S.deformations.forEach((re, ye) => {
            ce.set(ye, [
              re[0],
              re[2],
              re[1],
              re[3],
              re[5],
              re[4]
            ]);
          }), e.deformOutputs && (e.deformOutputs.val = {
            deformations: ce
          });
        }
        const ae = /* @__PURE__ */ new Map();
        I.forEach((ce, re) => ae.set(re, ce));
        const K = /* @__PURE__ */ new Map();
        L.forEach((ce, re) => K.set(re, [
          ce[0],
          ce[2],
          ce[1],
          ce[3],
          ce[5],
          ce[4]
        ])), e.nodeInputs && (e.nodeInputs.val = {
          supports: ae,
          loads: K
        }), e.elementInputs && (e.elementInputs.val = {}), e.analyzeOutputs && (e.analyzeOutputs.val = {});
        let V = 0;
        S && S.deformations && S.deformations.forEach((ce) => {
          const re = Math.sqrt(ce[0] * ce[0] + ce[1] * ce[1] + ce[2] * ce[2]);
          V = Math.max(V, re);
        }), console.log(`Muro Contencion [${b[k]}]: ${x.length} nodos, ${u.length} triangulos`), console.log(`  H=${t}, B=${o}, tw=${n}, tb=${l}, Ka=${r}, gamma=${p}, qs=${T}`), k === 1 && console.log(`  Es=${c}, nus=${m}`), k === 2 && console.log(`  Es=${c}, nus=${m}, kn=${w}, ks=${y}`), k === 3 && console.log(`  gammaW=${f}, Hw=${h}`), console.log(`  max|u| = ${V.toExponential(4)}`);
      } catch (S) {
        console.warn("Muro Contencion failed:", S.message);
      }
      setTimeout(() => It(), 50), nt();
    }
    function zs() {
      const t = le("Lx") || 2, o = le("Ly") || 2, n = le("t") || 0.5, l = le("colA") || 0.4, s = le("colH") || 1.5, d = Math.round(le("nx") || 8), a = Math.round(le("ny") || 8), i = le("E") || 25e6, p = le("nu") || 0.2, r = le("P") || -500, c = le("Mx") || 0, m = le("My") || 0, M = le("ks") || 2e4, w = t / d, y = o / a, f = t / 2, h = o / 2, T = l / 2, k = [];
      for (let I = 0; I <= a; I++) for (let L = 0; L <= d; L++) {
        const R = I * (d + 1) + L;
        let D = w, b = y;
        (L === 0 || L === d) && (D = w / 2), (I === 0 || I === a) && (b = y / 2), k.push({
          node: R,
          dof: 0,
          k: M * D * b
        });
      }
      let $ = 0;
      for (let I = 0; I <= a; I++) for (let L = 0; L <= d; L++) Math.abs(L * w - f) <= T + 1e-6 && Math.abs(I * y - h) <= T + 1e-6 && $++;
      const C = r / Math.max($, 1), _ = [];
      for (let I = 0; I <= a; I++) for (let L = 0; L <= d; L++) {
        const R = L * w, D = I * y;
        Math.abs(R - f) <= T + 1e-6 && Math.abs(D - h) <= T + 1e-6 && _.push({
          node: I * (d + 1) + L,
          dof: 0,
          value: C
        });
      }
      if (Math.abs(c) > 1e-6) {
        const I = T > 1e-6 ? T : y, L = c / I;
        for (let R = 0; R <= a; R++) for (let D = 0; D <= d; D++) {
          const b = D * w, S = R * y;
          if (Math.abs(b - f) <= T + 1e-6 && Math.abs(S - h) <= T + 1e-6) {
            const v = S - h;
            if (Math.abs(v) > 1e-6) {
              const P = v > 0 ? 1 : -1;
              _.push({
                node: R * (d + 1) + D,
                dof: 0,
                value: P * L / $ * 2
              });
            }
          }
        }
      }
      if (Math.abs(m) > 1e-6) {
        const I = T > 1e-6 ? T : w, L = m / I;
        for (let R = 0; R <= a; R++) for (let D = 0; D <= d; D++) {
          const b = D * w, S = R * y;
          if (Math.abs(b - f) <= T + 1e-6 && Math.abs(S - h) <= T + 1e-6) {
            const v = b - f;
            if (Math.abs(v) > 1e-6) {
              const P = v > 0 ? 1 : -1;
              _.push({
                node: R * (d + 1) + D,
                dof: 0,
                value: P * L / $ * 2
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
      console.log(`Zapata: ${t}x${o}m, t=${n}m, ${d}x${a} elem`), console.log(`  col=${l}m, P=${r}, Mx=${c}, My=${m}, ks=${M}`);
      try {
        const I = as({
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
          pointLoads: _
        });
        console.log(`  Solved: w_max = ${I.maxW.toExponential(4)}`);
        const L = I.nodeResults.map((X) => [
          X.x,
          X.y,
          0
        ]), R = L.length;
        L.push([
          f - T,
          h - T,
          0
        ]), L.push([
          f + T,
          h - T,
          0
        ]), L.push([
          f + T,
          h + T,
          0
        ]), L.push([
          f - T,
          h + T,
          0
        ]), L.push([
          f - T,
          h - T,
          s
        ]), L.push([
          f + T,
          h - T,
          s
        ]), L.push([
          f + T,
          h + T,
          s
        ]), L.push([
          f - T,
          h + T,
          s
        ]);
        const D = I.elementResults.map((X) => [
          ...X.nodes
        ]);
        D.push([
          R,
          R + 4
        ]), D.push([
          R + 1,
          R + 5
        ]), D.push([
          R + 2,
          R + 6
        ]), D.push([
          R + 3,
          R + 7
        ]), D.push([
          R + 4,
          R + 5
        ]), D.push([
          R + 5,
          R + 6
        ]), D.push([
          R + 6,
          R + 7
        ]), D.push([
          R + 7,
          R + 4
        ]), D.push([
          R,
          R + 1
        ]), D.push([
          R + 1,
          R + 2
        ]), D.push([
          R + 2,
          R + 3
        ]), D.push([
          R + 3,
          R
        ]), e.nodes.val = L, e.elements.val = D;
        const b = /* @__PURE__ */ new Map();
        I.nodeResults.forEach((X, G) => {
          b.set(G, [
            0,
            0,
            X.w,
            X.bx,
            X.by,
            0
          ]);
        }), e.deformOutputs && (e.deformOutputs.val = {
          deformations: b
        });
        const S = /* @__PURE__ */ new Map();
        I.nodeResults.forEach((X, G) => {
          const ae = X.x, K = X.y;
          (ae < 1e-6 || ae > t - 1e-6 || K < 1e-6 || K > o - 1e-6) && S.set(G, [
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
          const X = I.elementResults.length, G = /* @__PURE__ */ new Map(), ae = /* @__PURE__ */ new Map(), K = /* @__PURE__ */ new Map();
          I.elementResults.forEach((V, ce) => {
            G.set(ce, [
              V.Mxx,
              V.Mxx,
              V.Mxx
            ]), ae.set(ce, [
              V.Myy,
              V.Myy,
              V.Myy
            ]), K.set(ce, [
              V.Mxy,
              V.Mxy,
              V.Mxy
            ]);
          }), e.analyzeOutputs.val = {
            bendingXX: G,
            bendingYY: ae,
            bendingXY: K
          };
        }
        const P = lt();
        P && (P.settings.shellResults.val = "bendingXX");
      } catch (I) {
        console.warn("Zapata solver failed:", I.message);
      }
      setTimeout(() => It(), 50), nt();
    }
    function Cs() {
      const t = le("Lx") || 0.4, o = le("Ly") || 0.4, n = le("t") || 0.025, l = le("dBolt") || 0.022, s = le("sx") || 0.28, d = le("sy") || 0.28, a = le("colA") || 0.2, i = le("meshSize") || 8e-3, p = le("E") || 2e8, r = le("nu") || 0.3, c = p / (2 * (1 + r)), m = le("P") || -200, M = Math.round(le("nBolts") || 4), w = t / 2, y = o / 2, f = l / 2, h = a / 2, T = [];
      M >= 4 && (T.push([
        w - s / 2,
        y - d / 2
      ]), T.push([
        w + s / 2,
        y - d / 2
      ]), T.push([
        w + s / 2,
        y + d / 2
      ]), T.push([
        w - s / 2,
        y + d / 2
      ])), M >= 6 && (T.push([
        w,
        y - d / 2
      ]), T.push([
        w,
        y + d / 2
      ])), M >= 8 && (T.push([
        w - s / 2,
        y
      ]), T.push([
        w + s / 2,
        y
      ]));
      const { nodes: k, elements: $ } = Mo({
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
      }), C = (b, S) => {
        for (const [v, P] of T) if ((b - v) * (b - v) + (S - P) * (S - P) < f * f) return true;
        return false;
      }, _ = $.filter((b) => {
        const S = (k[b[0]][0] + k[b[1]][0] + k[b[2]][0]) / 3, v = (k[b[0]][1] + k[b[1]][1] + k[b[2]][1]) / 3;
        return !C(S, v);
      }), x = k, u = /* @__PURE__ */ new Map();
      for (let b = 0; b < x.length; b++) {
        const S = x[b][0], v = x[b][1];
        for (const [P, X] of T) {
          const G = Math.sqrt((S - P) * (S - P) + (v - X) * (v - X));
          G >= f * 0.7 && G <= f * 1.5 && u.set(b, [
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
      let L = 0;
      for (let b = 0; b < x.length; b++) {
        const S = x[b][0], v = x[b][1];
        Math.abs(S - w) <= h && Math.abs(v - y) <= h && L++;
      }
      const R = m / Math.max(L, 1);
      for (let b = 0; b < x.length; b++) {
        const S = x[b][0], v = x[b][1];
        if (Math.abs(S - w) <= h && Math.abs(v - y) <= h) {
          const P = I.get(b) || [
            0,
            0,
            0,
            0,
            0,
            0
          ];
          P[2] += R, I.set(b, P);
        }
      }
      const D = {
        elasticities: new Map(_.map((b, S) => [
          S,
          p
        ])),
        elasticitiesOrthogonal: new Map(_.map((b, S) => [
          S,
          p
        ])),
        thicknesses: new Map(_.map((b, S) => [
          S,
          n
        ])),
        poissonsRatios: new Map(_.map((b, S) => [
          S,
          r
        ])),
        shearModuli: new Map(_.map((b, S) => [
          S,
          c
        ]))
      };
      console.log(`Placa Base: ${t * 1e3}x${o * 1e3}mm, t=${n * 1e3}mm, ${M} pernos d=${l * 1e3}mm`), console.log(`  P=${m} kN, col=${a * 1e3}mm, mesh=${i * 1e3}mm`), console.log(`  ${_.length} triangulos, ${x.length} nodos`);
      try {
        const b = Ft(x, _, {
          supports: u,
          loads: I
        }, D), S = $o(x, _, D, b);
        e.nodes.val = x, e.elements.val = _, b && e.deformOutputs && (e.deformOutputs.val = b), e.nodeInputs && (e.nodeInputs.val = {
          supports: u,
          loads: I
        }), e.elementInputs && (e.elementInputs.val = {}), S && e.analyzeOutputs && (e.analyzeOutputs.val = S);
        let v = 0;
        b && b.deformations && b.deformations.forEach((P) => {
          const X = Math.sqrt(P[0] * P[0] + P[1] * P[1] + P[2] * P[2]);
          v = Math.max(v, X);
        }), console.log(`  max|u| = ${v.toExponential(4)}`);
      } catch (b) {
        console.warn("Placa Base failed:", b.message);
      }
      setTimeout(() => It(), 50), nt();
    }
    function Ps() {
      const t = le("colB") || 0.3, o = le("colH") || 0.3, n = le("colT") || 8e-3, l = le("colLen") || 1.5, s = le("Lx") || 0.45, d = le("Ly") || 0.45, a = le("tPlaca") || 0.025, i = le("dBolt") || 0.022, p = le("sx") || 0.32, r = le("sy") || 0.32, c = Math.round(le("nSubColV") || 6), m = Math.round(le("nSubColH") || 4), M = Math.round(le("nSubPlaca") || 10), w = le("E") || 2e8, y = le("nu") || 0.3, f = w / (2 * (1 + y)), h = le("P") || -300, T = s / 2, k = d / 2, $ = i / 2, C = t / 2, _ = o / 2, x = [], u = [], I = M, L = s / I, R = d / I, D = (de, Z) => Z * (I + 1) + de;
      for (let de = 0; de <= I; de++) for (let Z = 0; Z <= I; Z++) x.push([
        Z * L,
        de * R,
        0
      ]);
      const b = [
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
      ], S = (de, Z) => {
        for (const [ue, Me] of b) if ((de - ue) * (de - ue) + (Z - Me) * (Z - Me) < $ * $) return true;
        return false;
      }, v = u.length;
      for (let de = 0; de < I; de++) for (let Z = 0; Z < I; Z++) {
        const ue = (Z + 0.5) * L, Me = (de + 0.5) * R;
        S(ue, Me) || u.push([
          D(Z, de),
          D(Z + 1, de),
          D(Z + 1, de + 1),
          D(Z, de + 1)
        ]);
      }
      const P = u.length - v, X = c, G = m, ae = [
        [
          T - C,
          k - _
        ],
        [
          T + C,
          k - _
        ],
        [
          T + C,
          k + _
        ],
        [
          T - C,
          k + _
        ]
      ], K = u.length, V = [
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
      ], ce = (de, Z) => {
        for (let ue = 0; ue < (I + 1) * (I + 1); ue++) if (Math.abs(x[ue][0] - de) < L * 0.3 && Math.abs(x[ue][1] - Z) < R * 0.3 && Math.abs(x[ue][2]) < 1e-6) return ue;
        return -1;
      };
      for (const [de, Z] of V) {
        const [ue, Me] = ae[de], [oe, Ee] = ae[Z], He = [];
        for (let at = 0; at <= X; at++) {
          const rt = [], wt = at / X * l;
          for (let Tt = 0; Tt <= G; Tt++) {
            const Et = Tt / G, Ot = ue + Et * (oe - ue), yo = Me + Et * (Ee - Me);
            if (at === 0) {
              const Xt = ce(Ot, yo);
              if (Xt >= 0) {
                rt.push(Xt);
                continue;
              }
            }
            let to = -1;
            for (let Xt = 0; Xt < x.length; Xt++) if (Math.abs(x[Xt][0] - Ot) < 1e-6 && Math.abs(x[Xt][1] - yo) < 1e-6 && Math.abs(x[Xt][2] - wt) < 1e-6) {
              to = Xt;
              break;
            }
            to >= 0 ? rt.push(to) : (rt.push(x.length), x.push([
              Ot,
              yo,
              wt
            ]));
          }
          He.push(rt);
        }
        for (let at = 0; at < X; at++) for (let rt = 0; rt < G; rt++) u.push([
          He[at][rt],
          He[at][rt + 1],
          He[at + 1][rt + 1],
          He[at + 1][rt]
        ]);
      }
      const re = u.length - K, ye = /* @__PURE__ */ new Map();
      for (let de = 0; de < (I + 1) * (I + 1); de++) {
        const Z = x[de][0], ue = x[de][1];
        for (const [Me, oe] of b) {
          const Ee = Math.sqrt((Z - Me) * (Z - Me) + (ue - oe) * (ue - oe));
          Ee >= $ * 0.5 && Ee <= $ * 2 && ye.set(de, [
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
      const ie = h / Math.max(N.length, 1);
      for (const de of N) Te.set(de, [
        0,
        0,
        ie,
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
      for (let de = v; de < v + P; de++) te.elasticities.set(de, w), te.poissonsRatios.set(de, y), te.thicknesses.set(de, a), te.shearModuli.set(de, f);
      for (let de = K; de < K + re; de++) te.elasticities.set(de, w), te.poissonsRatios.set(de, y), te.thicknesses.set(de, n), te.shearModuli.set(de, f);
      console.log(`Col+Placa 3D: col ${t * 1e3}x${o * 1e3}x${n * 1e3}mm, h=${l}m`), console.log(`  Placa ${s * 1e3}x${d * 1e3}mm, t=${a * 1e3}mm, 4 pernos d=${i * 1e3}mm`), console.log(`  ${P} Q4 placa + ${re} Q4 columna = ${u.length} total`), console.log(`  ${x.length} nodos, P=${h} kN`);
      try {
        const de = Ft(x, u, {
          supports: ye,
          loads: Te
        }, te), Z = $o(x, u, te, de);
        e.nodes.val = x, e.elements.val = u, de && e.deformOutputs && (e.deformOutputs.val = de), e.nodeInputs && (e.nodeInputs.val = {
          supports: ye,
          loads: Te
        }), e.elementInputs && (e.elementInputs.val = te), Z && e.analyzeOutputs && (e.analyzeOutputs.val = Z);
        let ue = 0;
        (de == null ? void 0 : de.deformations) && de.deformations.forEach((Me) => {
          const oe = Math.sqrt(Me[0] * Me[0] + Me[1] * Me[1] + Me[2] * Me[2]);
          ue = Math.max(ue, oe);
        }), console.log(`  max|u| = ${ue.toExponential(4)}`);
      } catch (de) {
        console.warn("Col+Placa failed:", de.message), e.nodes.val = x, e.elements.val = u, e.nodeInputs && (e.nodeInputs.val = {
          supports: ye,
          loads: Te
        });
      }
      setTimeout(() => It(), 50), nt();
    }
    function Fs() {
      const t = le("H") || 6, o = le("angle") || 45, n = le("bTop") || 3, l = le("bBot") || 3, s = le("meshSize") || 2, d = le("E") || 5e4, a = le("nu") || 0.3, i = le("gamma") || 18, p = le("c") || 15, r = le("phi") || 30, c = le("qs") || 0, m = t / Math.tan(o * Math.PI / 180), M = l + m + n, w = t, y = [
        [
          0,
          -w,
          0
        ],
        [
          M,
          -w,
          0
        ],
        [
          M,
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
      ], { nodes: f, elements: h } = Mo({
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
      for (let _ = 0; _ < T.length; _++) {
        const x = T[_][0], u = T[_][1];
        Math.abs(u + w) < 1e-6 ? (k.push({
          node: _,
          fixX: true,
          fixY: true
        }), $.set(_, [
          true,
          true,
          true,
          true,
          true,
          true
        ])) : (Math.abs(x) < 1e-6 || Math.abs(x - M) < 1e-6) && (k.push({
          node: _,
          fixX: true,
          fixY: false
        }), $.set(_, [
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
        const _ = T.map((S) => [
          S[0],
          S[1]
        ]), x = h.map((S) => [
          S[0],
          S[1],
          S[2]
        ]), u = hl({
          nodes: _,
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
        const L = /* @__PURE__ */ new Map();
        for (let S = 0; S < u.displacements.length; S++) {
          const [v, P] = u.displacements[S];
          L.set(S, [
            v,
            0,
            P,
            0,
            0,
            0
          ]);
        }
        e.deformOutputs && (e.deformOutputs.val = {
          deformations: L
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
        let D = 0;
        for (const [S, v] of u.displacements) {
          const P = Math.sqrt(S * S + v * v);
          D = Math.max(D, P);
        }
        let b = 0;
        for (const S of u.plasticStrain) b = Math.max(b, S);
        console.log(`Talud SRM: ${T.length} nodos, ${h.length} triangulos`), console.log(`  H=${t}, angulo=${o}\xB0, c=${p} kPa, \u03C6=${r}\xB0, \u03B3=${i}`), console.log("  \u2550\u2550\u2550 Strength Reduction Method (Mohr-Coulomb) \u2550\u2550\u2550"), console.log(`  FOS = ${u.fos.toFixed(3)}`), console.log(`  max|u| = ${D.toExponential(4)}`), console.log(`  max \u03B5_pl = ${b.toExponential(4)}`), u.fos < 1 ? console.warn("  \u26A0 TALUD INESTABLE (FOS < 1.0)") : u.fos < 1.5 && console.warn("  \u26A0 FOS < 1.5 \u2014 revisar estabilidad");
      } catch (_) {
        console.warn("Talud SRM failed:", _.message);
      }
      setTimeout(() => It(), 50), nt();
    }
    let go = null, _t = null, bo = null;
    function Ta() {
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
    function Lt(t) {
      const o = Zo.find((n) => n.id === F);
      return t / o.toM;
    }
    function zt(t) {
      const o = Zo.find((n) => n.id === F);
      return t * o.toM;
    }
    function Co(t) {
      const o = fs.find((l) => l.id === J.forceId), n = Zo.find((l) => l.id === J.lengthId);
      return t / (o.toKN / (n.toM * n.toM));
    }
    function Rn(t) {
      const o = fs.find((l) => l.id === J.forceId), n = Zo.find((l) => l.id === J.lengthId);
      return t * (o.toKN / (n.toM * n.toM));
    }
    function On() {
      return J.label;
    }
    function Aa() {
      switch (Zo.find((o) => o.id === F).id) {
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
    function La() {
      const t = Co(20594), o = Co(58840), n = Math.max(1, Math.round((o - t) / 40));
      return [
        Math.round(t),
        Math.round(o),
        n
      ];
    }
    function Rs(t, o, n, l, s) {
      const d = qe.steelVigaType, a = d === 0 ? $n() : Mn();
      if (qe.vigaMat === 0) {
        for (let i = 0; i < o.length; i++) {
          const p = o[i], r = `b${n}${i}`, c = `h${n}${i}`, m = {};
          m[r] = +Lt(p.b).toFixed(2), m[c] = +Lt(p.h).toFixed(2), t.addBinding(m, r, {
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
          r && (o[parseInt(r[1])].b = zt(i.value), Oe()), c && (o[parseInt(c[1])].h = zt(i.value), Oe());
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
          r[`bf${c}`] = +Lt(p.bf ?? 0.2).toFixed(3), r[`h${c}`] = +Lt(p.hf ?? 0.4).toFixed(3), r[`tf${c}`] = +Lt(p.tf ?? 0.015).toFixed(3), r[`tw${c}`] = +Lt(p.tw ?? 0.01).toFixed(3), t.addBinding(r, `bf${c}`, {
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
            p === `bf${c}` && (o[r].bf = zt(i.value), Oe()), p === `h${c}` && (o[r].hf = zt(i.value), Oe()), p === `tf${c}` && (o[r].tf = zt(i.value), Oe()), p === `tw${c}` && (o[r].tw = zt(i.value), Oe());
          }
        });
      } else {
        for (let i = 0; i < o.length; i++) {
          const p = o[i], r = {}, c = `${n}${i}`;
          r[`bc${c}`] = +Lt(p.bc ?? 0.2).toFixed(3), r[`hc${c}`] = +Lt(p.hc ?? 0.3).toFixed(3), r[`t${c}`] = +Lt(p.t ?? 8e-3).toFixed(3), t.addBinding(r, `bc${c}`, {
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
            p === `bc${c}` && (o[r].bc = zt(i.value), Oe()), p === `hc${c}` && (o[r].hc = zt(i.value), Oe()), p === `t${c}` && (o[r].t = zt(i.value), Oe());
          }
        });
      }
    }
    function Ho() {
      var _a2;
      if (_t) {
        try {
          _t.dispose();
        } catch {
        }
        _t = null;
      }
      const t = document.getElementById("sections");
      if (t && (t.innerHTML = ""), A !== "edificio" && A !== "frame") {
        t && (t.style.display = "none");
        return;
      }
      const o = Ta();
      if (!o) return;
      o.style.display = "";
      const n = E, l = Math.round(((_a2 = Y.nPisos) == null ? void 0 : _a2.val) ?? 3), s = Aa(), d = La(), a = fe.length || 1, i = se.length || 1;
      for (; qe.perFloor.length < l; ) {
        const x = qe.perFloor.length > 0 ? JSON.parse(JSON.stringify(qe.perFloor[qe.perFloor.length - 1])) : mo(a, i);
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
      _t = new cn({
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
        qe.colMat = x.value, Ho(), Oe();
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
          qe.colShape = I.value, Ho(), Oe();
        });
        const u = {
          fc: +Co(qe.fc).toFixed(1)
        };
        _t.addBinding(u, "fc", {
          min: d[0],
          max: d[1],
          step: d[2],
          label: `f'c col (${On()})`
        }), _t.on("change", (I) => {
          var _a3;
          ((_a3 = I.target) == null ? void 0 : _a3.key) === "fc" && (qe.fc = Rn(I.value), Oe());
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
          qe.steelColType = u.value, Ho(), Oe();
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
        qe.vigaMat = x.value, Ho(), Oe();
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
          qe.steelVigaType = u.value, Ho(), Oe();
        });
      }
      const c = qe.steelColType === 0 ? $n() : Mn();
      qe.steelVigaType === 0 ? $n() : Mn();
      const m = F === "m" ? [
        5e-3,
        0.1,
        1e-3
      ] : F === "cm" ? [
        0.5,
        10,
        0.1
      ] : F === "mm" ? [
        5,
        100,
        1
      ] : F === "in" ? [
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
          const L = {
            dCol: +Lt(u.dCol).toFixed(2)
          };
          I.addBinding(L, "dCol", {
            min: s[0],
            max: s[1],
            step: s[2],
            label: "d col"
          }), I.on("change", (R) => {
            var _a3;
            ((_a3 = R.target) == null ? void 0 : _a3.key) === "dCol" && (u.dCol = zt(R.value), Oe());
          });
        } else {
          const L = {
            bCol: +Lt(u.bCol).toFixed(2),
            hCol: +Lt(u.hCol).toFixed(2)
          };
          I.addBinding(L, "bCol", {
            min: s[0],
            max: s[1],
            step: s[2],
            label: "b col"
          }), I.addBinding(L, "hCol", {
            min: s[0],
            max: s[1],
            step: s[2],
            label: "h col"
          }), I.on("change", (R) => {
            var _a3, _b;
            ((_a3 = R.target) == null ? void 0 : _a3.key) === "bCol" && (u.bCol = zt(R.value), Oe()), ((_b = R.target) == null ? void 0 : _b.key) === "hCol" && (u.hCol = zt(R.value), Oe());
          });
        }
        else if (qe.colMat === 1) if (qe.steelColType <= 1) {
          const L = {
            col: u.colProfileIdx
          };
          I.addBinding(L, "col", {
            label: "Columna",
            options: c
          }).on("change", (R) => {
            u.colProfileIdx = R.value, Oe();
          });
        } else if (qe.steelColType === 2) {
          const L = {
            bf: +Lt(u.colBf ?? 0.3).toFixed(3),
            h: +Lt(u.colHf ?? 0.3).toFixed(3),
            tf: +Lt(u.colTf ?? 0.02).toFixed(3),
            tw: +Lt(u.colTw ?? 0.012).toFixed(3)
          };
          I.addBinding(L, "bf", {
            min: s[0],
            max: s[1],
            step: s[2],
            label: "Col bf"
          }), I.addBinding(L, "h", {
            min: s[0],
            max: s[1],
            step: s[2],
            label: "Col h"
          }), I.addBinding(L, "tf", {
            min: m[0],
            max: m[1],
            step: m[2],
            label: "Col tf"
          }), I.addBinding(L, "tw", {
            min: m[0],
            max: m[1],
            step: m[2],
            label: "Col tw"
          }), I.on("change", (R) => {
            var _a3, _b, _c, _d;
            ((_a3 = R.target) == null ? void 0 : _a3.key) === "bf" && (u.colBf = zt(R.value), Oe()), ((_b = R.target) == null ? void 0 : _b.key) === "h" && (u.colHf = zt(R.value), Oe()), ((_c = R.target) == null ? void 0 : _c.key) === "tf" && (u.colTf = zt(R.value), Oe()), ((_d = R.target) == null ? void 0 : _d.key) === "tw" && (u.colTw = zt(R.value), Oe());
          });
        } else {
          const L = {
            bc: +Lt(u.colBc ?? 0.3).toFixed(3),
            hc: +Lt(u.colHc ?? 0.3).toFixed(3),
            t: +Lt(u.colT ?? 0.01).toFixed(3)
          };
          I.addBinding(L, "bc", {
            min: s[0],
            max: s[1],
            step: s[2],
            label: "Col b"
          }), I.addBinding(L, "hc", {
            min: s[0],
            max: s[1],
            step: s[2],
            label: "Col h"
          }), I.addBinding(L, "t", {
            min: m[0],
            max: m[1],
            step: m[2],
            label: "Col t"
          }), I.on("change", (R) => {
            var _a3, _b, _c;
            ((_a3 = R.target) == null ? void 0 : _a3.key) === "bc" && (u.colBc = zt(R.value), Oe()), ((_b = R.target) == null ? void 0 : _b.key) === "hc" && (u.colHc = zt(R.value), Oe()), ((_c = R.target) == null ? void 0 : _c.key) === "t" && (u.colT = zt(R.value), Oe());
          });
        }
        else {
          const L = {
            bc: +Lt(u.colBc ?? 0.3).toFixed(3),
            hc: +Lt(u.colHc ?? 0.3).toFixed(3),
            t: +Lt(u.colT ?? 0.01).toFixed(3),
            Es: +Co(u.colEs ?? 2e8).toFixed(0),
            nuS: u.colNuS ?? 0.3,
            fc: +Co(u.colFc ?? 28e3).toFixed(1),
            nuC: u.colNuC ?? 0.2
          };
          I.addBinding(L, "bc", {
            min: s[0],
            max: s[1],
            step: s[2],
            label: "Col b"
          }), I.addBinding(L, "hc", {
            min: s[0],
            max: s[1],
            step: s[2],
            label: "Col h"
          }), I.addBinding(L, "t", {
            min: m[0],
            max: m[1],
            step: m[2],
            label: "Col t"
          }), I.addBlade({
            view: "separator"
          });
          const R = +Co(1e8).toFixed(0), D = +Co(3e8).toFixed(0), b = Math.max(1, Math.round((D - R) / 200));
          I.addBinding(L, "Es", {
            min: R,
            max: D,
            step: b,
            label: `Es (${On()})`
          }), I.addBinding(L, "nuS", {
            min: 0.15,
            max: 0.45,
            step: 0.01,
            label: "\u03BDs"
          }), I.addBinding(L, "fc", {
            min: d[0],
            max: d[1],
            step: d[2],
            label: `f'c (${On()})`
          }), I.addBinding(L, "nuC", {
            min: 0.1,
            max: 0.35,
            step: 0.01,
            label: "\u03BDc"
          }), I.on("change", (S) => {
            var _a3, _b, _c, _d, _e2, _f, _g;
            ((_a3 = S.target) == null ? void 0 : _a3.key) === "bc" && (u.colBc = zt(S.value), Oe()), ((_b = S.target) == null ? void 0 : _b.key) === "hc" && (u.colHc = zt(S.value), Oe()), ((_c = S.target) == null ? void 0 : _c.key) === "t" && (u.colT = zt(S.value), Oe()), ((_d = S.target) == null ? void 0 : _d.key) === "Es" && (u.colEs = Rn(S.value), Oe()), ((_e2 = S.target) == null ? void 0 : _e2.key) === "nuS" && (u.colNuS = S.value, Oe()), ((_f = S.target) == null ? void 0 : _f.key) === "fc" && (u.colFc = Rn(S.value), Oe()), ((_g = S.target) == null ? void 0 : _g.key) === "nuC" && (u.colNuC = S.value, Oe());
          });
        }
        if (u.vigasX.length > 0) {
          const L = I.addFolder({
            title: `Vigas X (${u.vigasX.length})`,
            expanded: false
          });
          Rs(L, u.vigasX, "x", s, m);
        }
        if (u.vigasY.length > 0) {
          const L = I.addFolder({
            title: `Vigas Y (${u.vigasY.length})`,
            expanded: false
          });
          Rs(L, u.vigasY, "y", s, m);
        }
      }
      _t.addBlade({
        view: "separator"
      });
      const M = _t.addFolder({
        title: "Vigas Secundarias",
        expanded: false
      }), w = {
        activar: Ie,
        direccion: Xe === "x" ? 0 : 1,
        cantidad: Le
      };
      M.addBinding(w, "activar", {
        label: "Activar"
      }), M.addBinding(w, "direccion", {
        label: "Corren en",
        options: {
          "X (entre ejes Y)": 0,
          "Y (entre ejes X)": 1
        }
      }), M.addBinding(w, "cantidad", {
        min: 1,
        max: 5,
        step: 1,
        label: "Cantidad/vano"
      }), M.on("change", (x) => {
        var _a3, _b, _c;
        ((_a3 = x.target) == null ? void 0 : _a3.key) === "activar" && (Ie = x.value, Oe()), ((_b = x.target) == null ? void 0 : _b.key) === "direccion" && (Xe = x.value === 0 ? "x" : "y", Oe()), ((_c = x.target) == null ? void 0 : _c.key) === "cantidad" && (Le = Math.round(x.value), Oe());
      }), _t.addBlade({
        view: "separator"
      });
      const y = _t.addFolder({
        title: "Losas de Piso",
        expanded: true
      }), f = {
        activar: Ke,
        espesor: +Lt(pt).toFixed(3),
        subdivX: mt,
        subdivY: At
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
        ((_a3 = x.target) == null ? void 0 : _a3.key) === "activar" && (Ke = x.value, Oe()), ((_b = x.target) == null ? void 0 : _b.key) === "espesor" && (pt = zt(x.value), Oe()), ((_c = x.target) == null ? void 0 : _c.key) === "subdivX" && (mt = Math.round(x.value), Oe()), ((_d = x.target) == null ? void 0 : _d.key) === "subdivY" && (At = Math.round(x.value), Oe());
      }), _t.addBlade({
        view: "separator"
      });
      const h = _t.addFolder({
        title: "Muros de Corte",
        expanded: true
      }), T = {
        espesor: +Lt(je).toFixed(3),
        subdivH: We,
        subdivW: ge
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
        ((_a3 = x.target) == null ? void 0 : _a3.key) === "espesor" && (je = zt(x.value), Oe()), ((_b = x.target) == null ? void 0 : _b.key) === "subdivH" && (We = Math.round(x.value), Oe()), ((_c = x.target) == null ? void 0 : _c.key) === "subdivW" && (ge = Math.round(x.value), Oe());
      });
      const k = fe.length || 1, $ = se.length || 1, C = k + 1, _ = $ + 1;
      if (k > 0) {
        const x = h.addFolder({
          title: `Muros dir X (${k} vanos)`,
          expanded: false
        });
        for (let u = 0; u < k; u++) for (let I = 0; I < _; I++) {
          const L = `wx_${u}_${I}`, R = he.some((S) => S.dir === "x" && S.bay === u && S.axisIdx === I), D = {};
          D[L] = R;
          const b = `Vano X${u + 1} / Eje Y${String.fromCharCode(65 + I)}`;
          x.addBinding(D, L, {
            label: b
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
          const L = `wy_${u}_${I}`, R = he.some((S) => S.dir === "y" && S.bay === u && S.axisIdx === I), D = {};
          D[L] = R;
          const b = `Vano Y${u + 1} / Eje X${I + 1}`;
          x.addBinding(D, L, {
            label: b
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
    function fo() {
      const t = document.getElementById("parameters");
      if (!t) return;
      if (me || (me = t.innerHTML), Se) {
        try {
          Se.dispose();
        } catch {
        }
        Se = null;
      }
      if (go) {
        try {
          go.dispose();
        } catch {
        }
        go = null;
      }
      t.innerHTML = "";
      const o = A.charAt(0).toUpperCase() + A.slice(1);
      Se = new cn({
        title: `Parameters \u2014 ${o}`,
        container: t
      });
      const n = ys()[A];
      if (n) {
        const s = {};
        for (const p of n) {
          const r = Y[p.key], c = r.min === 0 && r.max === 1 && r.step === 1;
          s[p.key] = c ? r.val >= 0.5 : r.val;
        }
        const d = n.filter((p) => {
          const r = Y[p.key];
          return r.min === 0 && r.max === 1 && r.step === 1;
        }), a = n.filter((p) => {
          const r = Y[p.key];
          return !(r.min === 0 && r.max === 1 && r.step === 1);
        });
        for (const p of a) {
          const r = Y[p.key];
          Se.addBinding(s, p.key, {
            min: r.min,
            max: r.max,
            step: r.step,
            label: r.label
          });
        }
        if (d.length > 0) {
          const p = Se.addFolder({
            title: tr("Apoyos DOFs"),
            expanded: false
          });
          for (const r of d) p.addBinding(s, r.key, {
            label: Y[r.key].label
          });
        }
        const i = Se.addFolder({
          title: "Rangos",
          expanded: false
        });
        for (const p of a) {
          const r = {
            min: Y[p.key].min,
            max: Y[p.key].max
          };
          i.addBinding(r, "min", {
            label: `${p.key} min`,
            step: p.step
          }), i.addBinding(r, "max", {
            label: `${p.key} max`,
            step: p.step
          }), i.on("change", () => {
            Y[p.key] && (Y[p.key].min = r.min, Y[p.key].max = r.max, Y[p.key].val < r.min && (Y[p.key].val = r.min), Y[p.key].val > r.max && (Y[p.key].val = r.max)), fo(), Oe();
          });
        }
        Se.on("change", (p) => {
          var _a2, _b;
          const r = (_a2 = p.target) == null ? void 0 : _a2.key;
          if (r && Y[r]) {
            if (Y[r].val = typeof p.value == "boolean" ? p.value ? 1 : 0 : p.value, A === "edificio" && (r === "nVanosX" || r === "nVanosY" || r === "nPisos")) {
              if (r === "nVanosX" || r === "nVanosY") {
                const c = Math.round(Y.nVanosX.val), m = Math.round(Y.nVanosY.val);
                for (; fe.length < c; ) fe.push(fe[fe.length - 1] ?? E.defaultSpan);
                for (fe.length > c && (fe.length = c); se.length < m; ) se.push(se[se.length - 1] ?? E.defaultSpan * 0.8);
                se.length > m && (se.length = m);
              }
              if (r === "nPisos" || r === "hPiso") {
                const c = Math.round(Y.nPisos.val), m = ((_b = Y.hPiso) == null ? void 0 : _b.val) ?? 3;
                for (; q.length < c; ) q.push(q[q.length - 1] ?? m);
                q.length > c && (q.length = c);
              }
              fo();
            }
            Oe();
          }
        });
      }
      if (A === "edificio") {
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
            const p = "ABCDEFGHIJKLMNOPQRSTUVWXYZ", r = ((_a2 = Y.Lvix) == null ? void 0 : _a2.val) || 0, c = ((_b = Y.Lvdx) == null ? void 0 : _b.val) || 0, m = ((_c = Y.Lviy) == null ? void 0 : _c.val) || 0, M = ((_d = Y.Lvdy) == null ? void 0 : _d.val) || 0;
            let w = "X: ";
            r > 0 && (w += `\u251C${r.toFixed(1)}\u2524`);
            for (let h = 0; h < fe.length; h++) w += `[${p[h + (r > 0 ? 1 : 0)]}]\u2500\u2500${fe[h].toFixed(1)}\u2500\u2500`;
            w += `[${p[fe.length + (r > 0 ? 1 : 0)]}]`, c > 0 && (w += `\u251C${c.toFixed(1)}\u2524`);
            let y = "Y: ";
            m > 0 && (y += `\u251C${m.toFixed(1)}\u2524`);
            for (let h = 0; h < se.length; h++) y += `[${h + 1 + (m > 0 ? 1 : 0)}]\u2500\u2500${se[h].toFixed(1)}\u2500\u2500`;
            y += `[${se.length + 1 + (m > 0 ? 1 : 0)}]`, M > 0 && (y += `\u251C${M.toFixed(1)}\u2524`);
            let f = "Z: ";
            for (let h = 0; h < q.length; h++) f += `P${h + 1}=${q[h].toFixed(1)} `;
            i.textContent = w + `
` + y + `
` + f;
          };
          s.innerHTML = "";
          const a = E;
          try {
            bo = new cn({
              title: `Luces (${a.length})`,
              container: s
            });
            const p = bo.addFolder({
              title: "Luces X",
              expanded: true
            });
            for (let c = 0; c < fe.length; c++) {
              const m = c, M = {
                v: fe[c]
              };
              p.addBinding(M, "v", {
                min: a.spanRange[0],
                max: a.spanRange[1],
                step: a.spanRange[2],
                label: `svx${c + 1}`
              }).on("change", (w) => {
                fe[m] = w.value, Oe();
              });
            }
            const r = bo.addFolder({
              title: "Luces Y",
              expanded: true
            });
            for (let c = 0; c < se.length; c++) {
              const m = c, M = {
                v: se[c]
              };
              r.addBinding(M, "v", {
                min: a.spanRange[0],
                max: a.spanRange[1],
                step: a.spanRange[2],
                label: `svy${c + 1}`
              }).on("change", (w) => {
                se[m] = w.value, Oe();
              });
            }
            if (q.length > 0) {
              const c = bo.addFolder({
                title: "Alturas por Piso",
                expanded: true
              });
              for (let m = 0; m < q.length; m++) {
                const M = m, w = {
                  v: q[m]
                };
                c.addBinding(w, "v", {
                  min: a.heightRange[0],
                  max: a.heightRange[1],
                  step: a.heightRange[2],
                  label: `Piso ${m + 1}`
                }).on("change", (y) => {
                  q[M] = y.value, Oe();
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
      if (Ho(), Se) {
        Se.addBlade({
          view: "separator"
        });
        const s = yn()[A];
        if (s && s.length > 0) {
          const d = {};
          s.forEach((i, p) => {
            d[i.label] = p;
          });
          const a = {
            apoyo: St
          };
          Se.addBinding(a, "apoyo", {
            label: "Apoyo",
            options: d
          }).on("change", (i) => {
            St = i.value, Oe();
          });
        }
        if (A === "placa-3q" || A === "placa-q4") {
          const d = {
            teoria: Ce
          };
          Se.addBinding(d, "teoria", {
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
      const l = $s()[A];
      if (l && l.length > 0) {
        go = new cn({
          title: `Cargas Est\xE1ticas \u2014 ${o}`,
          container: t
        });
        const s = {};
        for (const a of l) s[a.key] = bt[a.key].val;
        for (const a of l) go.addBinding(s, a.key, {
          min: bt[a.key].min,
          max: bt[a.key].max,
          step: bt[a.key].step,
          label: bt[a.key].label
        });
        const d = go.addFolder({
          title: "Rangos",
          expanded: false
        });
        for (const a of l) {
          const i = {
            min: bt[a.key].min,
            max: bt[a.key].max
          };
          d.addBinding(i, "min", {
            label: `${a.key} min`,
            step: a.step
          }), d.addBinding(i, "max", {
            label: `${a.key} max`,
            step: a.step
          }), d.on("change", () => {
            bt[a.key] && (bt[a.key].min = i.min, bt[a.key].max = i.max, bt[a.key].val < i.min && (bt[a.key].val = i.min), bt[a.key].val > i.max && (bt[a.key].val = i.max)), fo(), Oe();
          });
        }
        go.on("change", (a) => {
          var _a2;
          const i = (_a2 = a.target) == null ? void 0 : _a2.key;
          if (i && bt[i]) {
            if (bt[i].val = a.value, e.nodeInputs) {
              const p = e.nodeInputs.val;
              p.supports && (e.nodeInputs.val = {
                supports: p.supports
              });
            }
            setTimeout(() => Bn(), 30);
          }
        });
      }
      window.__cad = {
        setParam: (s, d) => {
          if (Y[s]) Y[s].val = d, Oe(), fo();
          else if (bt[s]) {
            if (bt[s].val = d, e.nodeInputs) {
              const a = e.nodeInputs.val;
              a.supports && (e.nodeInputs.val = {
                supports: a.supports
              });
            }
            setTimeout(() => {
              Bn(), fo();
            }, 30);
          }
        },
        getParams: () => {
          const s = {};
          for (const d in Y) s[d] = Y[d].val;
          for (const d in bt) s[d] = bt[d].val;
          return s;
        },
        setGenerator: st,
        createCustomPanel: (s, d, a) => za(s, d, a),
        removeCustomPanel: (s) => {
          Os(s);
        }
      };
    }
    const Nn = /* @__PURE__ */ new Map();
    function za(t, o, n) {
      var _a2;
      Os(t);
      let l = document.querySelector("#cad3d-custom-panels");
      if (!l) {
        l = document.createElement("div"), l.id = "cad3d-custom-panels";
        const i = document.querySelector("#parameters");
        i ? (_a2 = i.parentElement) == null ? void 0 : _a2.insertBefore(l, i.nextSibling) : document.body.appendChild(l);
      }
      const s = document.createElement("div");
      s.className = "cad3d-custom-panel", s.style.marginBottom = "4px", l.appendChild(s);
      const d = new cn({
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
            a[i] = m.value.split(",").map((M) => parseFloat(M.trim())).filter((M) => !isNaN(M)), n && n({
              ...a
            });
          });
        } else if (p.options) {
          a[i] = p.value;
          const c = {
            [i]: p.value
          }, m = {};
          for (const M of p.options) m[M] = M;
          d.addBinding(c, i, {
            label: r,
            options: m
          }).on("change", (M) => {
            a[i] = M.value, n && n({
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
          p.min !== void 0 && (m.min = p.min), p.max !== void 0 && (m.max = p.max), p.step !== void 0 && (m.step = p.step), d.addBinding(c, i, m).on("change", (M) => {
            a[i] = M.value, n && n({
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
      }), Nn.set(t, {
        pane: d,
        values: a
      }), console.log(`Panel "${t}" created with ${Object.keys(o).length} params`), a;
    }
    function Os(t) {
      const o = Nn.get(t);
      if (o) {
        try {
          o.pane.dispose();
        } catch {
        }
        Nn.delete(t);
      }
    }
    function Ca() {
      if (Se) {
        try {
          Se.dispose();
        } catch {
        }
        Se = null;
      }
      if (go) {
        try {
          go.dispose();
        } catch {
        }
        go = null;
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
    const ze = document.createElement("div");
    ze.id = "cad3d-panel";
    const Ns = document.createElement("style");
    Ns.textContent = `
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
  `, document.head.appendChild(Ns), sl() === "light" && document.documentElement.classList.add("awatif-light"), al((t) => {
      t === "light" ? document.documentElement.classList.add("awatif-light") : document.documentElement.classList.remove("awatif-light"), A && It(true);
    }), ze.innerHTML = `
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
    let Bt = null;
    function Pa() {
      var _a2, _b, _c, _d, _e2, _f;
      const t = e.nodes.val, o = e.elements.val, n = (_a2 = e.nodeInputs) == null ? void 0 : _a2.val, l = (_b = e.elementInputs) == null ? void 0 : _b.val, s = F, d = g, a = [];
      if (a.push("# Awatif FEM \u2014 Model Export"), a.push(`# Generator: ${A || "custom"}`), a.push(`# Units: ${d}, ${s}`), a.push(`# ${(/* @__PURE__ */ new Date()).toISOString()}`), a.push(""), a.push(`## NODES (${t.length})`), a.push("# idx     X          Y          Z"), t.forEach((r, c) => {
        a.push(`  ${String(c).padStart(4)}  ${r[0].toFixed(4).padStart(10)}  ${r[1].toFixed(4).padStart(10)}  ${r[2].toFixed(4).padStart(10)}`);
      }), a.push(""), a.push(`## ELEMENTS (${o.length})`), a.push("# idx    nodeI  nodeJ"), o.forEach((r, c) => {
        const m = r.map((M) => String(M).padStart(6)).join("");
        a.push(`  ${String(c).padStart(4)}  ${m}`);
      }), a.push(""), (n == null ? void 0 : n.supports) && n.supports.size > 0 && (a.push(`## SUPPORTS (${n.supports.size})`), a.push("# node   Ux  Uy  Uz  Rx  Ry  Rz"), n.supports.forEach((r, c) => {
        const m = r.map((M) => M ? "  1" : "  0").join("");
        a.push(`  ${String(c).padStart(4)} ${m}`);
      }), a.push("")), (n == null ? void 0 : n.loads) && n.loads.size > 0 && (a.push(`## LOADS (${n.loads.size})`), a.push("# node         Fx          Fy          Fz          Mx          My          Mz"), n.loads.forEach((r, c) => {
        const m = r.map((M) => M.toFixed(3).padStart(11)).join(" ");
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
          const M = r.map((w) => {
            var _a3;
            const y = (_a3 = w.map) == null ? void 0 : _a3.get(m);
            return y !== void 0 ? y.toExponential(4).padStart(12) : "           -";
          }).join(" ");
          a.push(`  ${String(m).padStart(4)}  ${M}`);
        }
        a.push("");
      }
      const i = (_d = (_c = e.deformOutputs) == null ? void 0 : _c.val) == null ? void 0 : _d.deformations;
      i && i.size > 0 && (a.push(`## DISPLACEMENTS (${i.size} nodes)`), a.push("# node          Ux           Uy           Uz           Rx           Ry           Rz"), i.forEach((r, c) => {
        const m = r.map((M) => M.toExponential(4).padStart(12)).join(" ");
        a.push(`  ${String(c).padStart(4)}  ${m}`);
      }), a.push(""));
      const p = (_f = (_e2 = e.deformOutputs) == null ? void 0 : _e2.val) == null ? void 0 : _f.reactions;
      if (p && p.size > 0 && (a.push(`## REACTIONS (${p.size} supports)`), a.push("# node          Rx           Ry           Rz           Mx           My           Mz"), p.forEach((r, c) => {
        const m = r.map((M) => M.toFixed(4).padStart(12)).join(" ");
        a.push(`  ${String(c).padStart(4)}  ${m}`);
      }), a.push("")), A) {
        a.push("## CLI COMMAND");
        const r = Object.entries(Y).map(([c, m]) => `${c}=${m.val}`).join(" ");
        a.push(`cad.${A === "edificio" ? "building" : A}(${r})`);
      }
      return a.join(`
`);
    }
    let on = false;
    function Fa() {
      var _a2, _b, _c, _d;
      if (Bt) {
        Bt.remove(), Bt = null, on = false;
        return;
      }
      const t = Pa();
      Bt = document.createElement("div"), Bt.id = "export-overlay", Bt.style.cssText = `
      position:fixed; bottom:10px; right:10px; z-index:10000;
      width:720px; max-width:90vw;
      display:flex; flex-direction:column;
      font-family:monospace; color:var(--cad-text,#ccc);
      background:var(--cad-bg,#1a1a2e); border:1px solid var(--cad-border,#333);
      border-radius:8px; box-shadow:0 4px 20px rgba(0,0,0,0.5);
      transition: height 0.2s ease;
    `, Bt.innerHTML = `
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
    `, document.body.appendChild(Bt), (_a2 = Bt.querySelector("#export-close")) == null ? void 0 : _a2.addEventListener("click", () => {
        Bt == null ? void 0 : Bt.remove(), Bt = null, on = false;
      }), (_b = Bt.querySelector("#export-minimize")) == null ? void 0 : _b.addEventListener("click", () => {
        const o = Bt.querySelector("#export-body"), n = Bt.querySelector("#export-minimize");
        on = !on, on ? (o.style.display = "none", n.textContent = "\u25A2", n.title = "Restaurar", Bt.style.width = "auto") : (o.style.display = "flex", n.textContent = "\u25AC", n.title = "Minimizar", Bt.style.width = "720px");
      }), (_c = Bt.querySelector("#export-copy")) == null ? void 0 : _c.addEventListener("click", () => {
        const o = Bt.querySelector("#export-text");
        navigator.clipboard.writeText(o.value).then(() => {
          const n = Bt.querySelector("#export-status");
          n.textContent = "\u2713 Copiado al clipboard", setTimeout(() => n.textContent = "", 2e3);
        });
      }), (_d = Bt.querySelector("#export-json")) == null ? void 0 : _d.addEventListener("click", () => {
        var _a3, _b2, _c2, _d2, _e2, _f;
        const o = e.nodes.val, n = e.elements.val, l = (_a3 = e.nodeInputs) == null ? void 0 : _a3.val, s = (_b2 = e.elementInputs) == null ? void 0 : _b2.val, d = {
          generator: A || "custom",
          units: {
            force: g,
            length: F
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
        const p = Bt.querySelector("#export-text");
        p.value = JSON.stringify(d, null, 2);
        const r = Bt.querySelector("#export-status");
        r.textContent = "Formato JSON activo \u2014 presiona Copy para copiar";
      });
    }
    function nt() {
      var _a2, _b, _c;
      const t = ze.querySelector("#cad3d-info");
      if (t) {
        const o = e.nodes.val.length, n = e.elements.val, l = n.length, s = ((_c = (_b = (_a2 = e.nodeInputs) == null ? void 0 : _a2.val) == null ? void 0 : _b.supports) == null ? void 0 : _c.size) || 0;
        let d = 0, a = 0, i = 0;
        for (const r of n) r.length === 2 ? d++ : r.length === 3 ? a++ : r.length === 4 && i++;
        let p = `${o}n ${l}e ${s}s`;
        (i > 0 || a > 0) && (p += ` | ${d}fr`, i > 0 && (p += ` ${i}q4`), a > 0 && (p += ` ${a}tri`)), t.textContent = p;
      }
    }
    function qn() {
      var _a2;
      if (!_e || !e.nodeInputs || !e.elementInputs) return;
      const t = e.nodes.val, o = e.elements.val, n = e.nodeInputs.val, l = e.elementInputs.val;
      if (!(t.length === 0 || o.length === 0) && !(!n.supports || n.supports.size === 0) && !(!l.densities || l.densities.size === 0)) try {
        const s = Math.min(12, t.length * 6 - n.supports.size * 6);
        if (s <= 0) return;
        const d = bl(t, o, n, l, Math.min(s, 12));
        if (d.frequencies && d.frequencies.length > 0) {
          Pe = d, ke = t.map((r) => [
            ...r
          ]), xe = 0;
          const { extent: a } = So(), i = (_a2 = d.modeShapes) == null ? void 0 : _a2[0];
          if (i) {
            let r = 0;
            for (let c = 0; c < t.length; c++) {
              const m = i[c * 6] || 0, M = i[c * 6 + 1] || 0, w = i[c * 6 + 2] || 0;
              r = Math.max(r, Math.sqrt(m * m + M * M + w * w));
            }
            Ve = r > 1e-12 ? a * 0.05 / r : 1;
          }
          const p = `${A} \u2014 ${t.length}n ${o.length}e`;
          ut.render(d, {
            title: p
          }), ut.div.style.display = "", nn(), console.log(`Modal: ${d.frequencies.length} modos. f\u2081 = ${d.frequencies[0].toFixed(4)} Hz`);
        }
      } catch (s) {
        console.warn("Modal analysis failed:", s.message), Pe = null;
      }
    }
    function _n() {
      be && (cancelAnimationFrame(be), be = 0), ke.length > 0 && (e.nodes.val = ke.map((t) => [
        ...t
      ])), ut.div.style.display = "none", Pe = null;
    }
    function nn() {
      var _a2;
      if (be && cancelAnimationFrame(be), !(Pe == null ? void 0 : Pe.modeShapes) || !ke.length) return;
      const t = Pe.modeShapes[xe];
      if (!t) return;
      const o = ((_a2 = Pe.frequencies) == null ? void 0 : _a2[xe]) || 1, n = Math.max(0.5, Math.min(3, o * 0.1)), l = performance.now(), s = ke.length, d = e.elements.rawVal, { extent: a } = So(), i = ze.querySelector("#cad3d-modal-scale"), p = i && parseFloat(i.value) || 5;
      let r = 0;
      for (let $ = 0; $ < s; $++) {
        const C = t[$ * 6] || 0, _ = t[$ * 6 + 1] || 0, x = t[$ * 6 + 2] || 0;
        r = Math.max(r, Math.sqrt(C * C + _ * _ + x * x));
      }
      const c = r > 1e-12 ? a * p / 100 / r : 1, m = lt();
      if (!m) return;
      let M = null, w = null, y = null;
      m.scene.traverse(($) => {
        var _a3, _b;
        !M && $.isPoints && $.geometry && (M = $), !w && $.isLineSegments && $.geometry && !$.name && (w = $), !y && $.isMesh && ((_a3 = $.material) == null ? void 0 : _a3.transparent) && ((_b = $.material) == null ? void 0 : _b.opacity) < 0.5 && $.geometry && (y = $);
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
        for (let _ = 0; _ < s; _++) {
          const x = ke[_];
          f[_ * 3] = x[0] + (t[_ * 6] || 0) * C, f[_ * 3 + 1] = x[1] + (t[_ * 6 + 1] || 0) * C, f[_ * 3 + 2] = x[2] + (t[_ * 6 + 2] || 0) * C;
        }
        if (M) {
          const _ = M.geometry, x = _.getAttribute("position");
          x && x.array.length === f.length ? (x.array.set(f), x.needsUpdate = true) : _.setAttribute("position", new Oo(f.slice(), 3));
        }
        if (w) {
          for (let u = 0; u < h.length; u++) {
            const [I, L] = h[u];
            T[u * 6] = f[I * 3], T[u * 6 + 1] = f[I * 3 + 1], T[u * 6 + 2] = f[I * 3 + 2], T[u * 6 + 3] = f[L * 3], T[u * 6 + 4] = f[L * 3 + 1], T[u * 6 + 5] = f[L * 3 + 2];
          }
          const _ = w.geometry, x = _.getAttribute("position");
          x && x.array.length === T.length ? (x.array.set(T), x.needsUpdate = true) : _.setAttribute("position", new Oo(T.slice(), 3));
        }
        if (y) {
          const _ = [];
          for (const x of d) if (x.length === 3) {
            const [u, I, L] = x;
            _.push(f[u * 3], f[u * 3 + 1], f[u * 3 + 2]), _.push(f[I * 3], f[I * 3 + 1], f[I * 3 + 2]), _.push(f[L * 3], f[L * 3 + 1], f[L * 3 + 2]);
          } else if (x.length === 4) {
            const [u, I, L, R] = x;
            _.push(f[u * 3], f[u * 3 + 1], f[u * 3 + 2]), _.push(f[I * 3], f[I * 3 + 1], f[I * 3 + 2]), _.push(f[L * 3], f[L * 3 + 1], f[L * 3 + 2]), _.push(f[u * 3], f[u * 3 + 1], f[u * 3 + 2]), _.push(f[L * 3], f[L * 3 + 1], f[L * 3 + 2]), _.push(f[R * 3], f[R * 3 + 1], f[R * 3 + 2]);
          }
          if (_.length > 0) {
            const x = y.geometry, u = new Float32Array(_), I = x.getAttribute("position");
            I && I.array.length === u.length ? (I.array.set(u), I.needsUpdate = true) : x.setAttribute("position", new Oo(u, 3));
          }
        }
        m.render(), be = requestAnimationFrame(k);
      }
      be = requestAnimationFrame(k);
    }
    function Bn() {
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
        const _ = (S) => Math.round(S * 1e3) / 1e3, x = /* @__PURE__ */ new Set();
        n.supports.forEach((S, v) => {
          x.add(`${_(t[v][0])},${_(t[v][1])}`);
        });
        const u = /* @__PURE__ */ new Set();
        for (const S of C) x.has(`${_(t[S][0])},${_(t[S][1])}`) && u.add(S);
        const I = /* @__PURE__ */ new Set(), L = /* @__PURE__ */ new Set();
        if (T !== 0 || k !== 0) {
          let S = -1 / 0, v = -1 / 0;
          for (const X of u) S = Math.max(S, _(t[X][0])), v = Math.max(v, _(t[X][1]));
          const P = /* @__PURE__ */ new Map();
          for (const X of u) {
            const G = _(t[X][2]);
            P.has(G) || P.set(G, []), P.get(G).push(X);
          }
          P.forEach((X) => {
            if (T !== 0) {
              const G = /* @__PURE__ */ new Set();
              for (const ae of X) if (_(t[ae][0]) === S) {
                const K = _(t[ae][1]);
                G.has(K) || (G.add(K), I.add(ae));
              }
            }
            if (k !== 0) {
              const G = /* @__PURE__ */ new Set();
              for (const ae of X) if (_(t[ae][1]) === v) {
                const K = _(t[ae][0]);
                G.has(K) || (G.add(K), L.add(ae));
              }
            }
          });
        }
        const R = 9.81, D = /* @__PURE__ */ new Map();
        for (let S = 0; S < o.length; S++) {
          const v = o[S], P = ((_a2 = l.densities) == null ? void 0 : _a2.get(S)) ?? 0;
          if (!(Math.abs(P) < 1e-15)) {
            if (v.length === 2) {
              const X = ((_b = l.areas) == null ? void 0 : _b.get(S)) ?? 0, G = t[v[0]], ae = t[v[1]], K = Math.sqrt((ae[0] - G[0]) ** 2 + (ae[1] - G[1]) ** 2 + (ae[2] - G[2]) ** 2), ce = -(P * X * K * R) / 2;
              D.set(v[0], (D.get(v[0]) ?? 0) + ce), D.set(v[1], (D.get(v[1]) ?? 0) + ce);
            } else if (v.length >= 3) {
              const X = ((_c = l.thicknesses) == null ? void 0 : _c.get(S)) ?? 0;
              let G = 0;
              if (v.length === 3) {
                const [V, ce, re] = v.map((ye) => t[ye]);
                G = 0.5 * Math.abs((ce[0] - V[0]) * (re[1] - V[1]) - (re[0] - V[0]) * (ce[1] - V[1]));
              } else if (v.length === 4) {
                const [V, ce, re, ye] = v.map((Te) => t[Te]);
                if (G = 0.5 * Math.abs((ce[0] - V[0]) * (re[1] - V[1]) - (re[0] - V[0]) * (ce[1] - V[1])) + 0.5 * Math.abs((re[0] - V[0]) * (ye[1] - V[1]) - (ye[0] - V[0]) * (re[1] - V[1])), G < 1e-10) {
                  const Te = [
                    ce[0] - V[0],
                    ce[1] - V[1],
                    ce[2] - V[2]
                  ], N = [
                    ye[0] - V[0],
                    ye[1] - V[1],
                    ye[2] - V[2]
                  ], ie = [
                    Te[1] * N[2] - Te[2] * N[1],
                    Te[2] * N[0] - Te[0] * N[2],
                    Te[0] * N[1] - Te[1] * N[0]
                  ];
                  G = Math.sqrt(ie[0] ** 2 + ie[1] ** 2 + ie[2] ** 2);
                }
              }
              const K = -(P * X * G * R) / v.length;
              for (const V of v) D.set(V, (D.get(V) ?? 0) + K);
            }
          }
        }
        const b = /* @__PURE__ */ new Set();
        for (const S of o) S.length === 2 && (b.add(S[0]), b.add(S[1]));
        for (const S of C) {
          const v = I.has(S) ? T : 0, P = L.has(S) ? k : 0, X = D.get(S) ?? 0, G = b.has(S) ? h : 0, ae = X + G;
          (v !== 0 || P !== 0 || Math.abs(ae) > 1e-10) && $.set(S, [
            v,
            P,
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
      const p = ((_d = n.supports) == null ? void 0 : _d.size) || 0, r = ((_e2 = n.loads) == null ? void 0 : _e2.size) || 0, c = t.length * 6, m = c - p * 6, M = [], w = (y) => M.push(y);
      w('<b style="color:var(--cad-heading)">FEM Solver</b>'), w(`<span style="color:var(--cad-info)">Modelo:</span> ${t.length} nodos, ${o.length} elem`), d && w(`&nbsp;&nbsp;Frames: <b>${d}</b>`), a && w(`&nbsp;&nbsp;Shell Q4: <b>${a}</b>`), i && w(`&nbsp;&nbsp;Triangulos: <b>${i}</b>`), w(`&nbsp;&nbsp;Apoyos: ${p} &nbsp;|&nbsp; Cargas: ${r}`), w(`<span style="color:var(--cad-info)">DOFs:</span> ${c} total, ~${m} libres`), w('<hr style="border-color:var(--cad-border);margin:4px 0">'), w(`<span style="color:#888">1.</span> Ensamblaje <b>K</b> global (${c}&times;${c})`), w("&nbsp;&nbsp;&nbsp;<i>K<sub>global</sub> = &Sigma; T<sup>T</sup> &middot; K<sub>local</sub> &middot; T</i>");
      try {
        const y = Ft(t, o, n, l), f = performance.now() - s;
        if (y) {
          e.deformOutputs.val = y, w(`<span style="color:#888">2.</span> <b>K &middot; u = F</b> &rarr; SparseLU &rarr; <span style="color:#00cc88">${f.toFixed(0)} ms</span>`);
          let h = 0, T = -1, k = 0, $ = 0;
          y.deformations && y.deformations.forEach((I, L) => {
            const R = Math.sqrt(I[0] * I[0] + I[1] * I[1] + I[2] * I[2]);
            R > h && (h = R, T = L, k = I[0], $ = I[2]);
          }), w('<span style="color:#888">3.</span> Desplazamientos:'), w(`&nbsp;&nbsp;&nbsp;max|<b>u</b>| = <b style="color:var(--cad-heading)">${h.toExponential(3)}</b> m <span style="color:#666">(nodo ${T})</span>`), w(`&nbsp;&nbsp;&nbsp;u<sub>x</sub> = ${(k * 1e3).toFixed(4)} mm &nbsp;|&nbsp; u<sub>z</sub> = ${($ * 1e3).toFixed(4)} mm`);
          const C = performance.now(), _ = $o(t, o, l, y), x = performance.now() - C;
          _ && (e.analyzeOutputs.val = _, w(`<span style="color:#888">4.</span> Fuerzas internas: <span style="color:#00cc88">${x.toFixed(0)} ms</span>`), w("&nbsp;&nbsp;&nbsp;<i>F<sub>int</sub> = K<sub>local</sub> &middot; T &middot; u</i>"));
          const u = performance.now() - s;
          w('<hr style="border-color:var(--cad-border);margin:4px 0">'), w(`<b style="color:#00cc88">&#10004; Completado: ${u.toFixed(0)} ms</b>`);
        }
      } catch (y) {
        const f = performance.now() - s;
        w(`<b style="color:#ff4444">&#10008; Error (${f.toFixed(0)} ms): ${y.message}</b>`);
      }
      window.__femLog = M, console.log(`FEM Solver: ${t.length}n ${o.length}e \u2192 ${(performance.now() - s).toFixed(0)}ms`), _e && setTimeout(() => qn(), 50);
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
    function qs(t) {
      const o = t / 2, n = Math.PI * o * o, l = Math.PI * o * o * o * o / 4, s = Math.PI * o * o * o * o / 2;
      return {
        A: n,
        Iz: l,
        Iy: l,
        J: s
      };
    }
    function Hn(t, o, n, l) {
      const s = o - 2 * n, d = 2 * t * n + s * l, a = (t * o * o * o - (t - l) * s * s * s) / 12, i = (2 * n * t * t * t + s * l * l * l) / 12, p = (2 * t * n * n * n + s * l * l * l) / 3;
      return {
        A: d,
        Iz: a,
        Iy: i,
        J: p
      };
    }
    function jn(t, o, n) {
      const l = t - 2 * n, s = o - 2 * n, d = t * o - l * s, a = (t * o * o * o - l * s * s * s) / 12, i = (o * t * t * t - s * l * l * l) / 12, p = (t - n) * (o - n), r = 2 * ((t - n) / n + (o - n) / n), c = 4 * p * p / (r > 0 ? r : 1);
      return {
        A: d,
        Iz: a,
        Iy: i,
        J: c
      };
    }
    function Ra(t, o, n, l, s, d, a) {
      const p = 4700 * Math.sqrt(d / 1e3) * 1e3 / l, r = t - 2 * n, c = o - 2 * n, m = t * o - r * c, M = (t * o * o * o - r * c * c * c) / 12, w = (o * t * t * t - c * r * r * r) / 12, y = r * c, f = r * c * c * c / 12, h = c * r * r * r / 12, T = m + p * y, k = M + p * f, $ = w + p * h, C = l / (2 * (1 + s)), _ = (t - n) * (o - n), x = 2 * ((t - n) / n + (o - n) / n), u = 4 * _ * _ / (x > 0 ? x : 1);
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
    function Eo() {
      if (!e.elementInputs) return;
      const t = e.elements.val, o = E, n = {
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
      if ((A === "edificio" || A === "frame") && B.size > 0) {
        const { colMat: s, vigaMat: d, colShape: a, fc: i, perFloor: p } = qe, r = 4700 * Math.sqrt(i / 1e3) * 1e3, c = r / (2 * 1.2), m = 24 / 9.80665, M = o.E, w = o.G, y = o.rho;
        for (let f = 0; f < t.length; f++) {
          if (pe.has(f)) {
            const I = 4700 * Math.sqrt(i / 1e3) * 1e3, L = 0.2;
            n.elasticities.set(f, I), n.poissonsRatios.set(f, L), n.thicknesses.set(f, je), n.shearModuli.set(f, I / (2 * (1 + L))), n.densities.set(f, 24 / 9.80665);
            continue;
          }
          if (qt.has(f)) {
            const I = 4700 * Math.sqrt(i / 1e3) * 1e3, L = 0.2;
            n.elasticities.set(f, I), n.poissonsRatios.set(f, L), n.thicknesses.set(f, pt), n.shearModuli.set(f, I / (2 * (1 + L))), n.densities.set(f, 24 / 9.80665);
            continue;
          }
          const h = B.has(f), T = ve.get(f) ?? 0, k = p[T] ?? p[0] ?? {
            bCol: 0.4,
            hCol: 0.4,
            dCol: 0.4
          };
          let $, C, _, x;
          if (h) if (s === 0) C = r, _ = c, x = m, $ = a === 1 ? qs(k.dCol) : Dn(k.bCol, k.hCol), n.sectionShapes.set(f, a === 1 ? {
            type: "circ",
            d: k.dCol
          } : {
            type: "rect",
            b: k.bCol,
            h: k.hCol
          });
          else if (s === 1) {
            C = M, _ = w, x = y;
            const I = qe.steelColType;
            if (I <= 1) {
              const L = zo[k.colProfileIdx] ?? zo[0];
              $ = {
                A: L.A,
                Iz: L.Iz,
                Iy: L.Iy,
                J: L.J
              }, n.sectionShapes.set(f, {
                type: "I",
                b: L.bf,
                h: L.d,
                name: L.name
              });
            } else if (I === 2) {
              const L = k.colBf ?? 0.3, R = k.colHf ?? 0.3, D = k.colTf ?? 0.02, b = k.colTw ?? 0.012;
              $ = Hn(L, R, D, b);
              const S = `I${(R * 100).toFixed(0)}x${(L * 100).toFixed(0)}`;
              n.sectionShapes.set(f, {
                type: "I",
                b: L,
                h: R,
                tf: D,
                tw: b,
                name: S
              });
            } else {
              const L = k.colBc ?? 0.3, R = k.colHc ?? 0.3, D = k.colT ?? 0.01;
              $ = jn(L, R, D);
              const b = `\u25A1${(R * 100).toFixed(0)}x${(L * 100).toFixed(0)}x${(D * 1e3).toFixed(0)}`;
              n.sectionShapes.set(f, {
                type: "HSS",
                b: L,
                h: R,
                tw: D,
                name: b
              });
            }
          } else {
            const I = k.colBc ?? 0.3, L = k.colHc ?? 0.3, R = k.colT ?? 0.01, D = k.colFc ?? 28e3, b = k.colEs ?? 2e8, S = k.colNuS ?? 0.3;
            k.colNuC;
            const v = Ra(I, L, R, b, S, D);
            $ = {
              A: v.A,
              Iz: v.Iz,
              Iy: v.Iy,
              J: v.J
            }, C = v.Es, _ = v.Gs;
            const P = 7.85, X = 24 / 9.80665;
            x = (P * v.A_steel + X * v.A_conc) / (v.A_steel + v.A_conc);
            const G = `CFT ${(L * 1e3).toFixed(0)}X${(I * 1e3).toFixed(0)}X${(R * 1e3).toFixed(0)}`;
            n.sectionShapes.set(f, {
              type: "CFT",
              b: I,
              h: L,
              tw: R,
              name: G
            });
          }
          else {
            const I = Ae.get(f), L = I ? I.dir === "x" ? k.vigasX : k.vigasY : [], R = I ? L[I.bay] ?? L[0] ?? ht() : ht();
            if (d === 0) C = r, _ = c, x = m, $ = Dn(R.b, R.h), n.sectionShapes.set(f, {
              type: "rect",
              b: R.b,
              h: R.h
            });
            else {
              C = M, _ = w, x = y;
              const D = qe.steelVigaType;
              if (D <= 1) {
                const b = zo[R.profileIdx ?? 0] ?? zo[0];
                $ = {
                  A: b.A,
                  Iz: b.Iz,
                  Iy: b.Iy,
                  J: b.J
                }, n.sectionShapes.set(f, {
                  type: "I",
                  b: b.bf,
                  h: b.d,
                  name: b.name
                });
              } else if (D === 2) {
                const b = R.bf ?? 0.2, S = R.hf ?? 0.4, v = R.tf ?? 0.015, P = R.tw ?? 0.01;
                $ = Hn(b, S, v, P);
                const X = `I${(S * 100).toFixed(0)}x${(b * 100).toFixed(0)}`;
                n.sectionShapes.set(f, {
                  type: "I",
                  b,
                  h: S,
                  tf: v,
                  tw: P,
                  name: X
                });
              } else {
                const b = R.bc ?? 0.2, S = R.hc ?? 0.3, v = R.t ?? 8e-3;
                $ = jn(b, S, v);
                const P = `\u25A1${(S * 100).toFixed(0)}x${(b * 100).toFixed(0)}x${(v * 1e3).toFixed(0)}`;
                n.sectionShapes.set(f, {
                  type: "HSS",
                  b,
                  h: S,
                  tw: v,
                  name: P
                });
              }
            }
          }
          const u = we.get(f);
          if (u) {
            if ((u.material ?? 1) === 0 ? (C = r, _ = c, x = m) : (C = M, _ = w, x = y), u.secType === "rect" && u.b && u.h) $ = Dn(u.b, u.h), n.sectionShapes.set(f, {
              type: "rect",
              b: u.b,
              h: u.h
            });
            else if (u.secType === "circ" && u.b) $ = qs(u.b), n.sectionShapes.set(f, {
              type: "circ",
              d: u.b
            });
            else if ((u.secType === "W" || u.secType === "HSS") && u.profileIdx !== void 0) {
              const L = zo[u.profileIdx] ?? zo[0];
              $ = {
                A: L.A,
                Iz: L.Iz,
                Iy: L.Iy,
                J: L.J
              }, n.sectionShapes.set(f, {
                type: "I",
                b: L.bf,
                h: L.d,
                name: L.name
              });
            } else if (u.secType === "I-param" && u.bf && u.hf && u.tf && u.tw) {
              $ = Hn(u.bf, u.hf, u.tf, u.tw);
              const L = `I${(u.hf * 100).toFixed(0)}x${(u.bf * 100).toFixed(0)}`;
              n.sectionShapes.set(f, {
                type: "I",
                b: u.bf,
                h: u.hf,
                tf: u.tf,
                tw: u.tw,
                name: L
              });
            } else if (u.secType === "tubular" && u.bc && u.hc && u.t) {
              $ = jn(u.bc, u.hc, u.t);
              const L = `\u25A1${(u.hc * 100).toFixed(0)}x${(u.bc * 100).toFixed(0)}x${(u.t * 1e3).toFixed(0)}`;
              n.sectionShapes.set(f, {
                type: "HSS",
                b: u.bc,
                h: u.hc,
                tw: u.t,
                name: L
              });
            }
          }
          n.elasticities.set(f, C), n.shearModuli.set(f, _), n.areas.set(f, $.A), n.momentsOfInertiaZ.set(f, $.Iy), n.momentsOfInertiaY.set(f, $.Iz), n.torsionalConstants.set(f, $.J), n.densities.set(f, x), u && u.releases12 && u.releases12.some((I) => I) && (n.momentReleases || (n.momentReleases = /* @__PURE__ */ new Map()), n.momentReleases.set(f, u.releases12)), u && u.springs12 && u.springs12.some((I) => I > 0) && (n.partialFixitySprings || (n.partialFixitySprings = /* @__PURE__ */ new Map()), n.partialFixitySprings.set(f, u.springs12));
        }
      } else for (let s = 0; s < t.length; s++) n.elasticities.set(s, o.E), n.shearModuli.set(s, o.G), n.areas.set(s, o.A), n.momentsOfInertiaZ.set(s, o.Iy), n.momentsOfInertiaY.set(s, o.Iz), n.torsionalConstants.set(s, o.J), n.densities.set(s, o.rho);
      e.elementInputs.val = n;
    }
    function Wn(t) {
      ze.querySelectorAll("[data-ex]").forEach((o) => {
        o.classList.toggle("active", o.dataset.ex === t);
      });
    }
    window.innerWidth <= 600 && ze.classList.add("collapsed"), setTimeout(() => {
      var _a2, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l2, _m, _n2, _o2, _p;
      (_a2 = ze.querySelector("#cad3d-toggle")) == null ? void 0 : _a2.addEventListener("click", (b) => {
        b.stopPropagation(), ze.classList.add("collapsed");
      }), (_b = ze.querySelector("#cad3d-expand")) == null ? void 0 : _b.addEventListener("click", (b) => {
        b.stopPropagation(), ze.classList.remove("collapsed");
      }), ze.querySelectorAll("[data-ex]").forEach((b) => {
        b.addEventListener("click", (S) => {
          S.stopPropagation();
          const v = b.dataset.ex;
          Wn(v), tt.example(v);
        });
      }), ze.querySelectorAll("[data-view]").forEach((b) => {
        b.addEventListener("click", (S) => {
          S.stopPropagation();
          const v = b.dataset.view;
          Io(v), ze.querySelectorAll("[data-view]").forEach((P) => P.classList.remove("view-active")), b.classList.add("view-active");
        });
      }), (_c = ze.querySelector("#cad3d-btn-clear")) == null ? void 0 : _c.addEventListener("click", (b) => {
        b.stopPropagation(), A = "", ha.val = false, Ca(), tt.clear();
      }), (_d = ze.querySelector("#cad3d-select")) == null ? void 0 : _d.addEventListener("click", (b) => {
        var _a3;
        b.stopPropagation(), io && (io = false, Fo()), ho && gn(), Qt = !Qt, (_a3 = ze.querySelector("#cad3d-select")) == null ? void 0 : _a3.classList.toggle("inspect-active", Qt);
        const v = lt();
        v && (v.controls.enabled = !Qt), Qt || mn();
      }), (_e2 = ze.querySelector("#cad3d-draw")) == null ? void 0 : _e2.addEventListener("click", (b) => {
        var _a3;
        b.stopPropagation(), io && (io = false, Fo()), Qt && mn(), ho = !ho, (_a3 = ze.querySelector("#cad3d-draw")) == null ? void 0 : _a3.classList.toggle("inspect-active", ho), ho ? Ba() : gn();
      }), (_f = ze.querySelector("#cad3d-inspect")) == null ? void 0 : _f.addEventListener("click", (b) => {
        var _a3;
        b.stopPropagation(), Qt && mn(), ho && gn(), io = !io, (_a3 = ze.querySelector("#cad3d-inspect")) == null ? void 0 : _a3.classList.toggle("inspect-active", io), io || Fo();
      }), (_g = ze.querySelector("#cad3d-new-model")) == null ? void 0 : _g.addEventListener("click", (b) => {
        b.stopPropagation(), tt.clear(), Ue = null;
      });
      const t = ze.querySelector("#cad3d-tests-menu");
      t && t.addEventListener("change", () => {
        const b = t.value;
        t.value = "", b && o(b);
      });
      function o(b) {
        var _a3, _b2, _c2, _d2, _e3, _f2;
        const P = 15e3 * Math.sqrt(210) * 10, X = 0.2, G = P / (2 * (1 + X)), ae = 0.09, K = 0.3 ** 4 / 12, V = 0.141 * 0.3 ** 4, ce = 0.25 * 0.4, re = 0.25 * 0.4 ** 3 / 12, ye = 0.4 * 0.25 ** 3 / 12, Te = 1e-3, N = 5 / 6 * ae, ie = 5 / 6 * ce, te = [];
        function de(Z, ue, Me) {
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
          for (const Ee of ue) oe.elasticities.set(Ee, P), oe.shearModuli.set(Ee, G), oe.areas.set(Ee, ae), oe.momentsOfInertiaZ.set(Ee, K), oe.momentsOfInertiaY.set(Ee, K), oe.torsionalConstants.set(Ee, V), oe.shearAreasY.set(Ee, N), oe.shearAreasZ.set(Ee, N);
          for (const Ee of Me) oe.elasticities.set(Ee, P), oe.shearModuli.set(Ee, G), oe.areas.set(Ee, ce), oe.momentsOfInertiaZ.set(Ee, ye), oe.momentsOfInertiaY.set(Ee, re), oe.torsionalConstants.set(Ee, Te), oe.shearAreasY.set(Ee, ie), oe.shearAreasZ.set(Ee, ie);
          return oe;
        }
        if (b === "test-cantilever" || b === "test-all") {
          const Me = 270 / (3 * P * K), oe = [
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
          ], Ee = [
            [
              0,
              1
            ]
          ], He = de(1, [], []);
          He.elasticities.set(0, P), He.shearModuli.set(0, G), He.areas.set(0, ae), He.momentsOfInertiaZ.set(0, K), He.momentsOfInertiaY.set(0, K), He.torsionalConstants.set(0, V);
          const at = Ft(oe, Ee, {
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
            elements: Ee,
            results: [
              {
                label: "Uz tip (cm)",
                awatif: at.deformations.get(1)[2] * 100,
                reference: Me * 100,
                refSource: "Analytical"
              }
            ]
          });
        }
        if (b === "test-portal-1p" || b === "test-all") {
          const Z = [
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
          ], Me = de(3, [
            0,
            1
          ], [
            2
          ]), oe = Ft(Z, ue, {
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
          }, Me);
          te.push({
            name: "Portal 1-Story (Timoshenko)",
            formulation: "Frame Timoshenko (As=5/6\xB7A)",
            nodes: Z,
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
        if (b === "test-portal-2p" || b === "test-all") {
          const Z = [
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
          ], Me = de(6, [
            0,
            1,
            2,
            3
          ], [
            4,
            5
          ]), oe = Ft(Z, ue, {
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
          }, Me);
          te.push({
            name: "Portal 2-Story",
            formulation: "Frame Timoshenko",
            nodes: Z,
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
        if (b === "test-wall-only" || b === "test-all") {
          const Z = [
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
          ], oe = Ft(Z, ue, {
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
                P
              ]
            ]),
            shearModuli: /* @__PURE__ */ new Map([
              [
                0,
                G
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
                X
              ]
            ])
          });
          te.push({
            name: "Wall Q4 Only",
            formulation: "Membrane (incompatible modes) + Mindlin-Reissner + Hughes-Brezzi drilling",
            nodes: Z,
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
        if (b === "test-portal-wall" || b === "test-all") {
          const Z = [
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
          ], Me = de(6, [
            0,
            1,
            2,
            3
          ], [
            4,
            5
          ]);
          Me.elasticities.set(6, P), Me.shearModuli.set(6, G), Me.thicknesses = /* @__PURE__ */ new Map([
            [
              6,
              0.2
            ]
          ]), Me.poissonsRatios = /* @__PURE__ */ new Map([
            [
              6,
              X
            ]
          ]);
          const oe = Ft(Z, ue, {
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
          }, Me);
          te.push({
            name: "Portal 2-Story + Wall Q4",
            formulation: "Frame Timoshenko + Shell Q4 (Hughes-Brezzi drilling)",
            nodes: Z,
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
        if (b === "test-wilson-beam" || b === "test-all") {
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
          const yo = 5 ** 3 / (3 * 1500 * at);
          try {
            const to = Ft(rt, wt, {
              supports: Et,
              loads: Ot
            }, Tt), Xt = Math.abs(((_b2 = (_a3 = to.deformations) == null ? void 0 : _a3.get(2)) == null ? void 0 : _b2[1]) ?? 0), ot = Math.abs(((_d2 = (_c2 = to.deformations) == null ? void 0 : _c2.get(3)) == null ? void 0 : _d2[1]) ?? 0), yt = (Xt + ot) / 2, Ut = yt / yo;
            te.push({
              name: "Wilson Fig 6.2 \u2014 Cantilever Q4",
              formulation: "2 Q4 elements + incompatible modes (Wilson 1971, Table 6.1)",
              nodes: rt,
              elements: wt,
              results: [
                {
                  label: "Uy/Uy_exact (cortante)",
                  awatif: Ut,
                  reference: 0.932,
                  refSource: "Wilson Table 6.1"
                },
                {
                  label: "Uy free end",
                  awatif: yt,
                  reference: yo * 0.932,
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
        if (b === "test-scordelis" || b === "test-all") {
          const at = 40 * Math.PI / 180, rt = 8, wt = 8, Tt = [];
          for (let ot = 0; ot <= rt; ot++) for (let yt = 0; yt <= wt; yt++) {
            const Ut = 25 * ot / rt, Pt = at * yt / wt, Fe = 25 * Math.sin(Pt), Ye = 25 * Math.cos(Pt) - 25 * Math.cos(at);
            Tt.push([
              Ut,
              Fe,
              Ye
            ]);
          }
          const Et = [];
          for (let ot = 0; ot < rt; ot++) for (let yt = 0; yt < wt; yt++) {
            const Ut = ot * (wt + 1) + yt, Pt = (ot + 1) * (wt + 1) + yt, Fe = (ot + 1) * (wt + 1) + (yt + 1), Ye = ot * (wt + 1) + (yt + 1);
            Et.push([
              Ut,
              Pt,
              Fe,
              Ye
            ]);
          }
          const Ot = {
            elasticities: /* @__PURE__ */ new Map(),
            shearModuli: /* @__PURE__ */ new Map(),
            thicknesses: /* @__PURE__ */ new Map(),
            poissonsRatios: /* @__PURE__ */ new Map()
          }, yo = 432e6 / (2 * 1);
          for (let ot = 0; ot < Et.length; ot++) Ot.elasticities.set(ot, 432e6), Ot.shearModuli.set(ot, yo), Ot.thicknesses.set(ot, 0.25), Ot.poissonsRatios.set(ot, 0);
          const to = /* @__PURE__ */ new Map();
          for (let ot = 0; ot <= rt; ot++) for (let yt = 0; yt <= wt; yt++) {
            const Ut = ot * (wt + 1) + yt, Pt = [
              false,
              false,
              false,
              false,
              false,
              false
            ];
            ot === 0 && (Pt[0] = true, Pt[4] = true, Pt[5] = true), ot === rt && (Pt[1] = true, Pt[2] = true, Pt[3] = true), yt === 0 && (Pt[1] = true, Pt[3] = true, Pt[5] = true), Pt.some((Fe) => Fe) && to.set(Ut, Pt);
          }
          const Xt = /* @__PURE__ */ new Map();
          for (const ot of Et) {
            const yt = Tt[ot[0]], Ut = Tt[ot[1]], Pt = Tt[ot[2]], Fe = Tt[ot[3]], Ye = [
              Pt[0] - yt[0],
              Pt[1] - yt[1],
              Pt[2] - yt[2]
            ], Qe = [
              Fe[0] - Ut[0],
              Fe[1] - Ut[1],
              Fe[2] - Ut[2]
            ], et = Ye[1] * Qe[2] - Ye[2] * Qe[1], Yt = Ye[2] * Qe[0] - Ye[0] * Qe[2], Ro = Ye[0] * Qe[1] - Ye[1] * Qe[0], rn = -90 * (0.5 * Math.sqrt(et * et + Yt * Yt + Ro * Ro)) / 4;
            for (const bn of ot) {
              const la = Xt.get(bn) || [
                0,
                0,
                0,
                0,
                0,
                0
              ];
              la[2] += rn, Xt.set(bn, la);
            }
          }
          try {
            const ot = Ft(Tt, Et, {
              supports: to,
              loads: Xt
            }, Ot), yt = wt, Ut = ((_f2 = (_e3 = ot.deformations) == null ? void 0 : _e3.get(yt)) == null ? void 0 : _f2[2]) ?? 0;
            te.push({
              name: "Scordelis-Lo Barrel Vault",
              formulation: `Shell Q4 (${rt}x${wt} mesh), Mindlin-Reissner + incompatible modes`,
              nodes: Tt,
              elements: Et,
              results: [
                {
                  label: "Uz midspan free edge (ft)",
                  awatif: Math.abs(Ut),
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
          const Z = te[te.length - 1];
          e.nodes.val = Z.nodes, e.elements.val = Z.elements;
          const ue = /* @__PURE__ */ new Map(), Me = /* @__PURE__ */ new Map(), oe = Math.max(...Z.nodes.map((Ee) => Ee[2]));
          Z.nodes.forEach((Ee, He) => {
            Math.abs(Ee[2]) < 0.01 && ue.set(He, [
              true,
              true,
              true,
              true,
              true,
              true
            ]), Math.abs(Ee[2] - oe) < 0.01 && Me.set(He, [
              10,
              0,
              0,
              0,
              0,
              0
            ]);
          }), e.nodeInputs.val = {
            supports: ue,
            loads: Me
          }, e.elementInputs.val = {}, e.deformOutputs.val = {}, e.analyzeOutputs.val = {};
        }
      }
      function n(b) {
        const S = 15e3 * Math.sqrt(210) * 10, v = [];
        v.push(`$ File exported from Awatif FEM Validation: ${b.name}`), v.push(" "), v.push("$ PROGRAM INFORMATION"), v.push('  PROGRAM  "ETABS"  VERSION "22.6.0"  '), v.push(""), v.push("$ CONTROLS"), v.push('  UNITS  "TONF"  "M"  "C"  '), v.push("");
        const P = /* @__PURE__ */ new Set();
        b.nodes.forEach((N) => P.add(Math.round(N[1] * 1e4) / 1e4));
        const X = [
          ...P
        ].sort((N, ie) => N - ie), G = X.map((N, ie) => ie === 0 ? "Base" : `Level_${ie}`), ae = /* @__PURE__ */ new Map();
        X.forEach((N, ie) => ae.set(N, G[ie])), v.push("$ STORIES - IN SEQUENCE FROM TOP");
        for (let N = X.length - 1; N >= 1; N--) v.push(`  STORY "${G[N]}"  HEIGHT ${X[N] - X[N - 1]} MASTERSTORY "Yes"  `);
        v.push(`  STORY "Base"  ELEV ${X[0]} `), v.push(""), v.push("$ MATERIAL PROPERTIES"), v.push('  MATERIAL  "CONC"    TYPE "Concrete"    WEIGHTPERVOLUME 2.4'), v.push(`  MATERIAL  "CONC"    SYMTYPE "Isotropic"  E ${S}  U 0.2  A 1E-05`), v.push(""), v.push("$ FRAME SECTIONS"), v.push('  FRAMESECTION  "COL30"  MATERIAL "CONC"  SHAPE "Concrete Rectangular"  D 0.3 B 0.3 '), v.push('  FRAMESECTION  "VIGA"  MATERIAL "CONC"  SHAPE "Concrete Rectangular"  D 0.4 B 0.25 '), v.push("");
        const K = b.elements.some((N) => N.length === 4);
        K && (v.push("$ WALL/SLAB/DECK SECTIONS"), v.push('  SHELLPROP  "Muro20"  PROPTYPE  "Wall"  MATERIAL "CONC"  MODELINGTYPE "ShellThick"  WALLTHICKNESS 0.2 '), v.push(""));
        const V = /* @__PURE__ */ new Map();
        let ce = 0;
        b.nodes.forEach((N) => {
          const ie = `${N[0]},${N[2]}`;
          V.has(ie) || V.set(ie, `${++ce}`);
        }), v.push("$ POINT COORDINATES");
        for (const [N, ie] of V) {
          const [te, de] = N.split(",").map(Number);
          v.push(`  POINT "${ie}"  ${te} ${de} `);
        }
        v.push("");
        const re = (N) => {
          const ie = b.nodes[N], te = `${ie[0]},${ie[2]}`;
          return {
            pt: V.get(te) || "1",
            story: ae.get(Math.round(ie[1] * 1e4) / 1e4) || "Base"
          };
        };
        v.push("$ LINE CONNECTIVITIES");
        const ye = [];
        if (b.elements.forEach((N, ie) => {
          if (N.length !== 2) return;
          const te = b.nodes[N[0]], de = b.nodes[N[1]], Z = Math.abs(de[1] - te[1]), ue = Math.sqrt((de[0] - te[0]) ** 2 + (de[2] - te[2]) ** 2), Me = Z > ue * 0.5, oe = re(N[0]), Ee = re(N[1]), He = Me ? "COL30" : "VIGA";
          Me ? (v.push(`  LINE  "E${ie + 1}"  COLUMN  "${oe.pt}"  "${oe.pt}"  1`), ye.push(`  LINEASSIGN  "E${ie + 1}"  "${Ee.story}"  SECTION "${He}"  `)) : (v.push(`  LINE  "E${ie + 1}"  BEAM  "${oe.pt}"  "${Ee.pt}"  0`), ye.push(`  LINEASSIGN  "E${ie + 1}"  "${oe.story}"  SECTION "${He}"  `));
        }), v.push(""), K) {
          v.push("$ AREA CONNECTIVITIES");
          const N = [];
          b.elements.forEach((ie, te) => {
            if (ie.length !== 4) return;
            const de = ie.map((Z) => re(Z));
            v.push(`  AREA "W${te + 1}"  PANEL  4  "${de[0].pt}"  "${de[1].pt}"  "${de[2].pt}"  "${de[3].pt}"  1  1  0  0  `), N.push(`  AREAASSIGN  "W${te + 1}"  "${de[2].story}"  SECTION "Muro20"  `);
          }), v.push(""), v.push("$ AREA ASSIGNS"), N.forEach((ie) => v.push(ie)), v.push("");
        }
        v.push("$ POINT ASSIGNS"), b.nodes.forEach((N, ie) => {
          if (Math.abs(N[1]) < 0.01) {
            const te = re(ie);
            v.push(`  POINTASSIGN  "${te.pt}"  "${te.story}"  RESTRAINT "UX UY UZ RX RY RZ"  `);
          }
        }), v.push(""), v.push("$ LINE ASSIGNS"), ye.forEach((N) => v.push(N)), v.push(""), v.push("$ LOAD PATTERNS"), v.push('  LOADPATTERN "Lat"  TYPE  "Other"  SELFWEIGHT  0'), v.push(""), v.push("$ POINT OBJECT LOADS");
        const Te = Math.max(...b.nodes.map((N) => N[1]));
        return b.nodes.forEach((N, ie) => {
          if (Math.abs(N[1] - Te) < 0.01) {
            const te = re(ie);
            v.push(`  POINTLOAD  "${te.pt}"  "${te.story}"  "Lat"  TYPE "FORCE"  FX 10`);
          }
        }), v.push(""), v.push("  END"), v.push("$ END OF MODEL FILE"), v.join(`\r
`);
      }
      function l(b) {
        const S = 15e3 * Math.sqrt(210) * 10, v = [];
        v.push(`"""ETABS API Validation: ${b.name}`), v.push('Generated by Awatif FEM Studio"""'), v.push("import comtypes.client, time, math"), v.push(""), v.push("helper = comtypes.client.CreateObject('ETABSv1.Helper')"), v.push("helper = helper.QueryInterface(comtypes.gen.ETABSv1.cHelper)"), v.push('myETABS = helper.CreateObjectProgID("CSI.ETABS.API.ETABSObject")'), v.push("myETABS.ApplicationStart()"), v.push("time.sleep(10)"), v.push("SapModel = myETABS.SapModel"), v.push("SapModel.InitializeNewModel()"), v.push("SapModel.File.NewBlank()"), v.push("SapModel.SetPresentUnits(12)  # tonf_m_C"), v.push(""), v.push(`E = ${S}`), v.push('SapModel.PropMaterial.SetMaterial("CONC", 2)'), v.push('SapModel.PropMaterial.SetMPIsotropic("CONC", E, 0.2, 5.5e-6)'), v.push('SapModel.PropFrame.SetRectangle("COL30", "CONC", 0.30, 0.30)'), v.push('SapModel.PropFrame.SetRectangle("VIGA", "CONC", 0.40, 0.25)'), b.elements.some((G) => G.length === 4) && v.push('SapModel.PropArea.SetWall("Muro20", 6, False, "CONC", 0.20)'), v.push(""), v.push("# Add elements"), v.push("FN = ' '"), b.elements.forEach((G, ae) => {
          if (G.length === 2) {
            const K = b.nodes[G[0]], V = b.nodes[G[1]], ce = Math.abs(V[1] - K[1]), re = Math.sqrt((V[0] - K[0]) ** 2 + (V[2] - K[2]) ** 2), ye = ce > re * 0.5 ? "COL30" : "VIGA";
            v.push(`[FN,r]=SapModel.FrameObj.AddByCoord(${K[0]},${K[2]},${K[1]}, ${V[0]},${V[2]},${V[1]}, FN,"${ye}","E${ae + 1}","Global")`);
          } else if (G.length === 4) {
            const K = G.map((V) => b.nodes[V]);
            v.push(`SapModel.AreaObj.AddByCoord(4, [${K.map((V) => V[0]).join(",")}], [${K.map((V) => V[2]).join(",")}], [${K.map((V) => V[1]).join(",")}], "", "Muro20")`);
          }
        }), v.push(""), v.push("# Supports at Z=0"), v.push("names = SapModel.PointObj.GetNameList()"), v.push("for i in range(int(names[0])):"), v.push("    c = SapModel.PointObj.GetCoordCartesian(names[1][i])"), v.push("    if abs(float(c[2])) < 0.01:"), v.push("        SapModel.PointObj.SetRestraint(names[1][i], [True]*6)"), v.push(""), v.push("# Load at top"), v.push('SapModel.LoadPatterns.Add("Lat", 8, 0, True)');
        const X = Math.max(...b.nodes.map((G) => G[1]));
        v.push("names = SapModel.PointObj.GetNameList()"), v.push("for i in range(int(names[0])):"), v.push("    c = SapModel.PointObj.GetCoordCartesian(names[1][i])"), v.push(`    if abs(float(c[2]) - ${X}) < 0.01:`), v.push('        SapModel.PointObj.SetLoadForce(names[1][i], "Lat", [10,0,0,0,0,0])'), v.push(""), v.push(`SapModel.File.Save(r"C:\\Users\\j-b-j\\Downloads\\validation_${b.name.replace(/[^a-zA-Z0-9]/g, "_")}.EDB")`), v.push("time.sleep(1)"), v.push("SapModel.Analyze.RunAnalysis()"), v.push("time.sleep(5)"), v.push(""), v.push("# Results"), v.push("SapModel.Results.Setup.DeselectAllCasesAndCombosForOutput()"), v.push('SapModel.Results.Setup.SetCaseSelectedForOutput("Lat")'), v.push(`print(f"\\n=== ETABS: ${b.name} ===")`), v.push("names = SapModel.PointObj.GetNameList()"), v.push("for i in range(int(names[0])):"), v.push("    name = names[1][i]"), v.push("    c = SapModel.PointObj.GetCoordCartesian(name)"), v.push("    NR=0;Obj=[];Elm=[];AC=[];ST=[];SN=[];U1=[];U2=[];U3=[];R1=[];R2=[];R3=[]"), v.push("    [NR,Obj,Elm,AC,ST,SN,U1,U2,U3,R1,R2,R3,ret]=SapModel.Results.JointDispl(name,0,NR,Obj,Elm,AC,ST,SN,U1,U2,U3,R1,R2,R3)"), v.push("    if NR > 0:"), v.push('        print(f"  {name} Z={float(c[2]):.1f}: Ux={U1[0]*100:.4f} cm")'), v.push(""), v.push('print("\\nAwatif results:")');
        for (const G of b.results) v.push(`print(f"  ${G.label}: Awatif=${G.awatif.toFixed(4)}, ETABS=${G.reference.toFixed(4)}, Ratio={${G.awatif.toFixed(4)}/${G.reference.toFixed(4)}:.4f}")`);
        return v.push("SapModel.View.RefreshView(0, False)"), v.join(`
`);
      }
      function s(b, S) {
        const v = new Blob([
          b
        ], {
          type: "text/plain"
        }), P = URL.createObjectURL(v), X = document.createElement("a");
        X.href = P, X.download = S, X.click(), URL.revokeObjectURL(P);
      }
      function d(b) {
        let S = document.getElementById("test-results-overlay");
        S && S.remove(), S = document.createElement("div"), S.id = "test-results-overlay", S.style.cssText = `position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);
        background:#1a1a2e;color:#eee;border:2px solid #16213e;border-radius:8px;padding:20px;
        z-index:10000;max-width:750px;width:90%;max-height:80vh;overflow-y:auto;font-family:monospace;font-size:13px;
        box-shadow:0 10px 40px rgba(0,0,0,0.5);`;
        let v = `<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px">
        <h3 style="margin:0;color:#00d4ff">Awatif FEM Validation</h3>
        <button onclick="this.parentElement.parentElement.remove()" style="background:none;border:none;color:#888;font-size:18px;cursor:pointer">X</button>
      </div>`, P = true;
        window.__awatifTests = b;
        for (let G = 0; G < b.length; G++) {
          const ae = b[G];
          v += '<div style="margin-bottom:16px;border:1px solid #333;border-radius:6px;padding:10px">', v += '<div style="display:flex;justify-content:space-between;align-items:center">', v += `<div style="font-weight:bold;color:#00d4ff">${ae.name}</div>`, v += "<div>", v += `<button onclick="window.__awatifDownloadE2k(${G})" style="background:#1e3a5f;color:#aaa;border:1px solid #444;padding:2px 6px;font-size:10px;cursor:pointer;margin-right:4px;border-radius:3px">e2k</button>`, v += `<button onclick="window.__awatifDownloadPy(${G})" style="background:#2a1e3a;color:#aaa;border:1px solid #444;padding:2px 6px;font-size:10px;cursor:pointer;border-radius:3px">py</button>`, v += "</div></div>", v += `<div style="color:#888;font-size:11px;margin-bottom:8px">${ae.formulation}</div>`, v += `<table style="width:100%;border-collapse:collapse;font-size:12px">
          <tr style="color:#888"><td style="padding:3px 6px">Measure</td><td style="text-align:right">Awatif</td><td style="text-align:right">Reference</td><td style="text-align:right">Ratio</td><td style="text-align:right">Source</td><td style="text-align:center"></td></tr>`;
          for (const K of ae.results) {
            const V = K.reference !== 0 ? K.awatif / K.reference : 1, ce = Math.abs(V - 1) < 0.05;
            ce || (P = false);
            const re = ce ? "#4caf50" : "#f44336", ye = ce ? "PASS" : "FAIL";
            v += `<tr style="border-top:1px solid #333">
            <td style="padding:3px 6px">${K.label}</td>
            <td style="text-align:right;color:#fff">${K.awatif.toFixed(4)}</td>
            <td style="text-align:right;color:#aaa">${K.reference.toFixed(4)}</td>
            <td style="text-align:right;color:${re};font-weight:bold">${V.toFixed(4)}</td>
            <td style="text-align:right;color:#888;font-size:11px">${K.refSource}</td>
            <td style="text-align:center;color:${re};font-size:10px;font-weight:bold">${ye}</td></tr>`;
          }
          v += "</table></div>";
        }
        v += P ? '<div style="color:#4caf50;font-weight:bold;text-align:center;margin-top:8px">ALL TESTS PASSED (< 5% error vs ETABS)</div>' : '<div style="color:#f44336;font-weight:bold;text-align:center;margin-top:8px">Some tests exceeded 5% tolerance</div>', S.innerHTML = v, document.body.appendChild(S), window.__awatifDownloadE2k = (G) => {
          const ae = window.__awatifTests[G], K = ae.name.replace(/[^a-zA-Z0-9]/g, "_").toLowerCase();
          s(n(ae), `${K}.e2k`);
        }, window.__awatifDownloadPy = (G) => {
          const ae = window.__awatifTests[G], K = ae.name.replace(/[^a-zA-Z0-9]/g, "_").toLowerCase();
          s(l(ae), `${K}_etabs.py`);
        };
      }
      (_h = ze.querySelector("#cad3d-export")) == null ? void 0 : _h.addEventListener("click", (b) => {
        b.stopPropagation(), Fa();
      });
      let a = "";
      const i = ze.querySelector("#cad3d-io-menu"), p = ze.querySelector("#cad3d-io-file");
      function r(b, S) {
        e.nodes.val = b.nodes, e.elements.val = b.elements, e.nodeInputs.val = b.nodeInputs, e.elementInputs.val = b.elementInputs, b.sectionShapes && b.elementInputs && (b.elementInputs.sectionShapes = b.sectionShapes), e.deformOutputs.val = {}, e.analyzeOutputs.val = {};
        const v = b.elements.filter((X) => X.length === 2).length, P = b.elements.filter((X) => X.length >= 3).length;
        console.log(`${S} (${b.nodes.length} nodos, ${v} frames, ${P} shells): ${b.nodes.length} nodes, ${b.elements.length} elements`), setTimeout(() => It(), 50);
      }
      function c(b, S) {
        var _a3, _b2, _c2;
        const v = {};
        b.elementInfo.forEach((V) => v[V.category] = (v[V.category] || 0) + 1), (_a3 = document.getElementById("ifc-filter-panel")) == null ? void 0 : _a3.remove();
        const P = document.createElement("div");
        P.id = "ifc-filter-panel", P.style.cssText = `position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);
        background:#1e1e2e;border:2px solid #00ccff;border-radius:12px;padding:20px;
        z-index:1000010;color:#eee;font-family:monospace;font-size:12px;min-width:320px;
        box-shadow:0 8px 32px rgba(0,0,0,0.6);`;
        const X = [
          "column",
          "beam",
          "slab",
          "footing",
          "member",
          "wall"
        ], G = [
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
        let K = `<h3 style="color:#00ccff;margin:0 0 12px">IFC \u2192 Modelo Anal\xEDtico</h3>
        <div style="color:#888;margin-bottom:10px">Selecciona qu\xE9 convertir a FEM:</div>
        <div style="border:1px solid #444;border-radius:6px;padding:8px;margin-bottom:8px">
          <div style="color:#33ff33;font-weight:bold;margin-bottom:4px">Estructural</div>`;
        for (const V of X) {
          const ce = v[V] || 0;
          if (ce === 0) continue;
          const re = [
            "column",
            "beam",
            "slab"
          ].includes(V) ? "checked" : "";
          K += `<label style="display:flex;align-items:center;gap:6px;padding:2px 0">
          <input type="checkbox" data-ifc-cat="${V}" ${re}>
          <span>${ae[V] || V}</span>
          <span style="color:#888;margin-left:auto">(${ce})</span>
        </label>`;
        }
        K += `</div><div style="border:1px solid #333;border-radius:6px;padding:8px;margin-bottom:12px">
        <div style="color:#ff6666;font-weight:bold;margin-bottom:4px">No estructural (solo visual)</div>`;
        for (const V of G) {
          const ce = v[V] || 0;
          ce !== 0 && (K += `<label style="display:flex;align-items:center;gap:6px;padding:2px 0;color:#888">
          <input type="checkbox" data-ifc-cat="${V}" disabled>
          <span>${ae[V] || V}</span>
          <span style="margin-left:auto">(${ce})</span>
        </label>`);
        }
        K += `</div>
        <div style="display:flex;gap:8px">
          <button id="ifc-gen-analytical" style="flex:1;padding:8px;background:#0f3460;color:#fff;border:none;border-radius:6px;cursor:pointer;font-size:13px;font-weight:bold">
            \u{1F527} Generar Modelo Anal\xEDtico
          </button>
          <button id="ifc-cancel" style="padding:8px 12px;background:#333;color:#aaa;border:1px solid #555;border-radius:6px;cursor:pointer">\u2715</button>
        </div>`, P.innerHTML = K, document.body.appendChild(P), P.querySelectorAll("input[data-ifc-cat]").forEach((V) => {
          V.addEventListener("change", () => {
            const ce = V.dataset.ifcCat, re = b.detailCategories.get(ce);
            if (re) {
              re.visible = V.checked;
              const ye = lt();
              ye && ye.render();
            }
          });
        }), (_b2 = P.querySelector("#ifc-gen-analytical")) == null ? void 0 : _b2.addEventListener("click", () => {
          var _a4;
          const V = /* @__PURE__ */ new Set();
          P.querySelectorAll("input[data-ifc-cat]:checked").forEach((te) => {
            V.add(te.dataset.ifcCat);
          });
          const ce = S.nodes.map((te) => [
            te.x,
            te.y,
            te.z
          ]), re = [], ye = {
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
          for (const te of S.elements) if (V.has(te.category) && te.type === "frame" && te.nodeIds.length >= 2) {
            re.push(te.nodeIds);
            const de = ((_a4 = S.materials) == null ? void 0 : _a4.get(te.material)) || {
              E: 2132888792e-2,
              nu: 0.2,
              rho: 2.4
            }, Z = te.b || 0.3, ue = te.h || 0.3, Me = Z * ue, oe = Z * ue * ue * ue / 12, Ee = ue * Z * Z * Z / 12, He = Z * ue * (Z * Z + ue * ue) / 12, at = de.E / (2 * (1 + de.nu));
            ye.elasticities.set(N, de.E), ye.shearModuli.set(N, at), ye.areas.set(N, Me), ye.momentsOfInertiaZ.set(N, Ee), ye.momentsOfInertiaY.set(N, oe), ye.torsionalConstants.set(N, He), ye.densities.set(N, de.rho), ye.sectionShapes.set(N, {
              type: "rect",
              b: Z,
              h: ue,
              name: te.sectionName
            }), N++;
          }
          const ie = Math.min(...ce.map((te) => te[2]));
          ce.forEach((te, de) => {
            Math.abs(te[2] - ie) < 0.05 && Te.supports.set(de, [
              true,
              true,
              true,
              true,
              true,
              true
            ]);
          });
          for (const [, te] of b.detailCategories) {
            const de = lt();
            de && de.scene.remove(te);
          }
          r({
            nodes: ce,
            elements: re,
            nodeInputs: Te,
            elementInputs: ye,
            sectionShapes: ye.sectionShapes,
            info: {
              nNodes: ce.length,
              nFrames: re.length
            }
          }, "IFC analytical"), P.remove();
        }), (_c2 = P.querySelector("#ifc-cancel")) == null ? void 0 : _c2.addEventListener("click", () => {
          for (const [, ce] of b.detailCategories) {
            const re = lt();
            re && re.scene.remove(ce);
          }
          const V = lt();
          V && V.render(), P.remove();
        });
      }
      function m(b) {
        B = /* @__PURE__ */ new Set(), W = /* @__PURE__ */ new Set(), ve = /* @__PURE__ */ new Map(), Ae = /* @__PURE__ */ new Map();
        const S = /* @__PURE__ */ new Map();
        for (let re = 0; re < b.stories.length; re++) S.set(b.stories[re].name, re);
        for (let re = 0; re < b.elementTypes.length; re++) {
          const ye = b.elementTypes[re], Te = b.elementStories[re], N = S.get(Te) ?? 0;
          ve.set(re, N), ye === "COLUMN" || ye === "BRACE" ? B.add(re) : W.add(re);
        }
        A = "edificio";
        const v = b.grids.filter((re) => re.dir === "X").sort((re, ye) => re.coord - ye.coord), P = b.grids.filter((re) => re.dir === "Y").sort((re, ye) => re.coord - ye.coord);
        let X, G, ae, K;
        if (v.length > 0 || P.length > 0) X = v.map((re) => re.coord), G = P.map((re) => re.coord), ae = v.map((re) => re.label), K = P.map((re) => re.label);
        else {
          const re = new Set(b.nodes.map((Te) => Te[0])), ye = new Set(b.nodes.map((Te) => Te[1]));
          X = [
            ...re
          ].sort((Te, N) => Te - N), G = [
            ...ye
          ].sort((Te, N) => Te - N), ae = X.map((Te, N) => String(N + 1)), K = G.map((Te, N) => String.fromCharCode(65 + N));
        }
        const V = b.stories.length > 0 ? Math.max(...b.stories.map((re) => re.elev)) : Math.max(...b.nodes.map((re) => re[2]));
        Ge = X, Ze = G, gt = V, setTimeout(() => {
          It(), en(X, G, V, ae, K), Ln(b.stories, X, G), Yn(), Gn();
        }, 100);
        const ce = {
          COLUMN: 0,
          BEAM: 0,
          BRACE: 0
        };
        for (const re of b.elementTypes) ce[re]++;
        console.log(`E2K grids: X=[${ae.join(",")}] Y=[${K.join(",")}]`), console.log(`E2K stories: ${b.stories.map((re) => `${re.name}@${re.elev.toFixed(2)}`).join(", ")}`), console.log(`E2K elements: ${ce.COLUMN} columns, ${ce.BEAM} beams, ${ce.BRACE} braces`), nt();
      }
      function M(b, S) {
        const v = new Blob([
          b
        ], {
          type: "text/plain"
        }), P = URL.createObjectURL(v), X = document.createElement("a");
        X.href = P, X.download = S, X.click(), URL.revokeObjectURL(P);
      }
      i && i.addEventListener("change", () => {
        if (a = i.value, i.value = "", a.startsWith("import")) a === "import-e2k" ? p.accept = ".e2k,.E2K" : a === "import-s2k" ? p.accept = ".s2k,.S2K,.$2k" : a === "import-ifc" ? p.accept = ".ifc,.IFC" : a === "import-py" ? p.accept = ".py" : a === "import-tcl" && (p.accept = ".tcl"), p.click();
        else if (a.startsWith("export")) {
          const b = {
            nodes: e.nodes.val,
            elements: e.elements.val,
            nodeInputs: e.nodeInputs.val,
            elementInputs: e.elementInputs.val
          };
          try {
            a === "export-e2k" ? M(Wl({
              ...b,
              title: "Awatif Model",
              e2kModel: Ue ?? void 0
            }), "model.e2k") : a === "export-s2k" ? M(jl({
              ...b,
              title: "Awatif Model"
            }), "model.s2k") : a === "export-py" ? M(Jl(b), "model_opensees.py") : a === "export-tcl" && M(Xl(b), "model_opensees.tcl");
          } catch (S) {
            alert("Export error: " + S.message);
          }
        }
      }), p && p.addEventListener("change", () => {
        var _a3;
        const b = (_a3 = p.files) == null ? void 0 : _a3[0];
        if (!b) return;
        if (a === "import-ifc") {
          const v = new FileReader();
          v.onload = async () => {
            const P = v.result;
            try {
              const X = lt();
              if (!X) {
                alert("Viewer not ready");
                return;
              }
              console.log("IFC: Loading 3D geometry...");
              const G = await ar(X.scene, P);
              console.log(`IFC: ${G.meshCount} meshes loaded, bbox:`, G.bbox);
              const ae = new Ne();
              G.bbox.getCenter(ae);
              const K = new Ne();
              G.bbox.getSize(K);
              const V = Math.max(K.x, K.y, K.z);
              X.controls.target.copy(ae), X.camera.position.set(ae.x + V, ae.y + V * 0.5, ae.z + V), X.camera.lookAt(ae), X.controls.maxDistance = V * 5, X.controls.update(), X.render(), window.__ifcLoadResult = G, window.__ifcArrayBuffer = P;
              const ce = new FileReader();
              ce.onload = () => {
                const re = ce.result, ye = or(re);
                window.__ifcAnalytical = ye;
                const Te = {};
                G.elementInfo.forEach((N) => Te[N.category] = (Te[N.category] || 0) + 1), console.log("IFC categories:", Te), console.log(`IFC: ${G.elementInfo.size} geometric elements, ${ye.elements.length} analytical elements`), c(G, ye);
              }, ce.readAsText(b);
            } catch (X) {
              alert("IFC error: " + X.message), console.error(X);
            }
          }, v.readAsArrayBuffer(b), p.value = "";
          return;
        }
        const S = new FileReader();
        S.onload = () => {
          const v = S.result;
          try {
            if (a === "import-e2k") {
              const P = _l(v);
              Ue = P, r(P, "E2K imported"), m(P);
            } else if (a === "import-s2k") {
              const P = Bl(v);
              r({
                nodes: P.nodes,
                elements: P.elements,
                nodeInputs: P.nodeInputs,
                elementInputs: P.elementInputs,
                sectionShapes: P.sectionShapes,
                info: P.info
              }, "S2K imported");
            } else if (a === "import-py") {
              const P = Ul(v);
              r(P, "OpenSeesPy imported");
            } else if (a === "import-tcl") {
              const P = Kl(v);
              r(P, "OpenSees Tcl imported");
            }
          } catch (P) {
            alert("Import error: " + P.message), console.error(P);
          }
        }, S.readAsText(b), p.value = "";
      });
      const w = ze.querySelector("#cad3d-force-unit");
      w && (w.value = g, w.addEventListener("change", (b) => {
        b.stopPropagation(), g = w.value, E = _o(g, F), A && st(A);
      }));
      const y = ze.querySelector("#cad3d-length-unit");
      y && (y.value = F, y.addEventListener("change", (b) => {
        b.stopPropagation(), F = y.value, E = _o(g, F), A && st(A);
      })), ze.querySelectorAll("[data-preset]").forEach((b) => {
        b.addEventListener("click", (S) => {
          S.stopPropagation();
          const v = b.dataset.preset, P = H[v];
          P && (g = P.force, F = P.length, J = P.stress, E = _o(g, F), w && (w.value = g), y && (y.value = F), ze.querySelectorAll("[data-preset]").forEach((X) => {
            X.classList.toggle("active", X.dataset.preset === v);
          }), A && st(A), console.log(`Preset: ${v} \u2192 ${g}+${F}, stress: ${J.label}`));
        });
      }), (_i = ze.querySelector("#cad3d-log")) == null ? void 0 : _i.addEventListener("click", (b) => {
        b.stopPropagation(), Ja();
      }), (_j = ze.querySelector("#cad3d-pushover")) == null ? void 0 : _j.addEventListener("click", (b) => {
        b.stopPropagation(), Xa();
      }), (_k = ze.querySelector("#cad3d-nonlinear")) == null ? void 0 : _k.addEventListener("click", (b) => {
        b.stopPropagation(), Ka();
      }), (_l2 = ze.querySelector("#cad3d-fem-solver")) == null ? void 0 : _l2.addEventListener("click", (b) => {
        b.stopPropagation(), Qa();
      }), (_m = ze.querySelector("#cad3d-calc")) == null ? void 0 : _m.addEventListener("click", (b) => {
        b.stopPropagation(), ra(async () => {
          const { openCalcPanel: S } = await import("./calcPanel-B5_SSEwc.js").then(async (m2) => {
            await m2.__tla;
            return m2;
          });
          return {
            openCalcPanel: S
          };
        }, __vite__mapDeps([0,1,2,3,4,5,6])).then(({ openCalcPanel: S }) => {
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
      }), (_n2 = ze.querySelector("#cad3d-modal")) == null ? void 0 : _n2.addEventListener("click", (b) => {
        var _a3, _b2;
        b.stopPropagation(), _e = !_e, (_a3 = ze.querySelector("#cad3d-modal")) == null ? void 0 : _a3.classList.toggle("active", _e);
        const v = ze.querySelector("#cad3d-mode-prev"), P = ze.querySelector("#cad3d-mode-next"), X = ze.querySelector("#cad3d-mode-label"), G = ze.querySelector("#cad3d-modal-scale");
        if (_e) {
          const ae = lt();
          ((_b2 = ae == null ? void 0 : ae.settings) == null ? void 0 : _b2.loads) && (Be = ae.settings.loads.rawVal, ae.settings.loads.val = false), qn(), v.style.display = "", P.style.display = "", X.style.display = "", G && (G.style.display = ""), f();
        } else _n(), v.style.display = "none", P.style.display = "none", X.style.display = "none", G && (G.style.display = "none"), A && A !== "placa-q4" && A !== "placa-3q" && Oe(), setTimeout(() => {
          var _a4;
          const ae = lt();
          ((_a4 = ae == null ? void 0 : ae.settings) == null ? void 0 : _a4.loads) && Be && (ae.settings.loads.val = true);
        }, 600);
      });
      function f() {
        var _a3;
        const b = ze.querySelector("#cad3d-mode-label");
        if (!b || !(Pe == null ? void 0 : Pe.frequencies)) return;
        const S = Pe.frequencies[xe], v = S > 0 ? 1 / S : 0, P = [
          0,
          0,
          0,
          0,
          0,
          0
        ];
        for (let X = 0; X <= xe; X++) {
          const G = (_a3 = Pe.massParticipation) == null ? void 0 : _a3[X];
          if (G) for (let ae = 0; ae < 6; ae++) P[ae] += G[ae];
        }
        b.textContent = `Modo ${xe + 1} \u2014 ${S.toFixed(2)} Hz \u2014 T=${v.toFixed(3)}s \u2014 \u03A3Ux=${(P[0] * 100).toFixed(1)}% \u03A3Uy=${(P[1] * 100).toFixed(1)}% \u03A3Rz=${(P[5] * 100).toFixed(1)}%`;
      }
      (_o2 = ze.querySelector("#cad3d-mode-prev")) == null ? void 0 : _o2.addEventListener("click", (b) => {
        if (b.stopPropagation(), !(Pe == null ? void 0 : Pe.modeShapes)) return;
        xe = (xe - 1 + Pe.modeShapes.length) % Pe.modeShapes.length;
        const S = Pe.modeShapes[xe], { extent: v } = So();
        let P = 0;
        for (let X = 0; X < ke.length; X++) {
          const G = S[X * 6] || 0, ae = S[X * 6 + 1] || 0, K = S[X * 6 + 2] || 0;
          P = Math.max(P, Math.sqrt(G * G + ae * ae + K * K));
        }
        Ve = P > 1e-12 ? v * 0.05 / P : 1, nn(), f();
      }), (_p = ze.querySelector("#cad3d-mode-next")) == null ? void 0 : _p.addEventListener("click", (b) => {
        if (b.stopPropagation(), !(Pe == null ? void 0 : Pe.modeShapes)) return;
        xe = (xe + 1) % Pe.modeShapes.length;
        const S = Pe.modeShapes[xe], { extent: v } = So();
        let P = 0;
        for (let X = 0; X < ke.length; X++) {
          const G = S[X * 6] || 0, ae = S[X * 6 + 1] || 0, K = S[X * 6 + 2] || 0;
          P = Math.max(P, Math.sqrt(G * G + ae * ae + K * K));
        }
        Ve = P > 1e-12 ? v * 0.05 / P : 1, nn(), f();
      });
      const h = ze.querySelector("#cad3d-modal-scale");
      h == null ? void 0 : h.addEventListener("mousedown", (b) => b.stopPropagation()), h == null ? void 0 : h.addEventListener("change", () => {
        _e && (Pe == null ? void 0 : Pe.modeShapes) && nn();
      });
      const T = ze.querySelector("#cad3d-cli-toggle"), k = ze.querySelector("#cad3d-cli-panel"), $ = ze.querySelector("#cad3d-cli-output"), C = ze.querySelector("#cad3d-cmd"), _ = [];
      let x = -1;
      T == null ? void 0 : T.addEventListener("click", (b) => {
        if (b.stopPropagation(), k) {
          const S = k.style.display !== "none";
          k.style.display = S ? "none" : "block", S || (C == null ? void 0 : C.focus(), $ && !$.textContent && ($.textContent = `CLI ready. Commands:
  cad.addNode(x, y, z)     cad.addFrame(i, j)
  cad.addSupport(n)        cad.addLoad(n, [fx,fy,fz,0,0,0])
  cad.frame([5,5],[3,3])   cad.building([5],[4],[3])
  cad.galpon(12,20,6,3)    cad.clear()
  cad.info()               cad.listNodes()
`));
        }
      }), C == null ? void 0 : C.addEventListener("mousedown", (b) => b.stopPropagation()), document.addEventListener("keydown", (b) => {
        var _a3;
        if ((b.ctrlKey || b.metaKey) && b.key === "z" && !b.shiftKey) {
          b.preventDefault(), Bs();
          return;
        }
        if ((b.ctrlKey || b.metaKey) && (b.key === "y" || b.key === "z" && b.shiftKey)) {
          b.preventDefault(), Ds();
          return;
        }
        if ((b.key === "Delete" || b.key === "Backspace") && Mt.size > 0) {
          b.preventDefault(), Mt.forEach((S) => ee.add(S)), Mt.clear(), xo && (xo.remove(), xo = null), Oe();
          return;
        }
        if (b.key === "Escape") {
          if (ho) if (kt !== null) {
            kt = null;
            const S = lt();
            jt && S && (S.scene.remove(jt), jt.geometry.dispose(), jt.material.dispose(), jt = null), Wt && S && (S.scene.remove(Wt), Wt.geometry.dispose(), Wt.material.dispose(), Wt = null), S == null ? void 0 : S.render();
          } else gn();
          Qt && mn(), io && (io = false, Fo(), (_a3 = ze.querySelector("#cad3d-inspect")) == null ? void 0 : _a3.classList.remove("inspect-active"));
        }
      }), C == null ? void 0 : C.addEventListener("keydown", (b) => {
        if (b.stopPropagation(), b.key === "Enter") {
          const S = C.value.trim();
          if (S) {
            _.unshift(S), x = -1, $ && ($.textContent += `> ${S}
`);
            try {
              const v = new Function("cad", `return ${S}`)(tt);
              if (v !== void 0 && $) {
                const P = typeof v == "object" ? JSON.stringify(v, null, 2) : String(v);
                $.textContent += `${P}
`;
              }
            } catch (v) {
              $ && ($.textContent += `ERROR: ${v.message}
`);
            }
            $ && ($.scrollTop = $.scrollHeight), C.value = "";
          }
        } else b.key === "ArrowUp" ? (b.preventDefault(), _.length > 0 && x < _.length - 1 && (x++, C.value = _[x])) : b.key === "ArrowDown" && (b.preventDefault(), x > 0 ? (x--, C.value = _[x]) : (x = -1, C.value = ""));
      });
      let u = false, I = 0, L = 0, R = 0, D = 0;
      ze.addEventListener("mousedown", (b) => {
        const S = b.target.tagName;
        if (S === "BUTTON" || S === "INPUT" || S === "SELECT") return;
        u = true;
        const v = ze.getBoundingClientRect();
        ze.style.bottom = "unset", I = b.clientX, L = b.clientY, R = v.left, D = v.top, b.preventDefault();
      }), window.addEventListener("mousemove", (b) => {
        u && (b.preventDefault(), ze.style.left = R + (b.clientX - I) + "px", ze.style.top = D + (b.clientY - L) + "px");
      }), window.addEventListener("mouseup", () => {
        u = false;
      }), nt();
    }, 10);
    function lt() {
      const t = document.getElementById("viewer");
      return t ? t.__ctx : null;
    }
    function So() {
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
      const { extent: n } = So();
      let l;
      n <= 5 ? l = Math.max(1, Math.ceil(n * 1.5)) : n <= 50 ? l = Math.max(5, Math.ceil(n * 1.3 / 5) * 5) : l = Math.max(20, Math.ceil(n * 1.3 / 10) * 10), o.settings.gridSize.val = l, o.scene.children.filter((m) => m.type === "GridHelper").forEach((m) => {
        var _a2, _b;
        (_a2 = m.geometry) == null ? void 0 : _a2.dispose(), (_b = m.material) == null ? void 0 : _b.dispose(), o.scene.remove(m);
      });
      const d = nl(), a = new ul(l, 20, d.grid, d.grid);
      a.rotation.x = Math.PI / 2, a.position.set(0.5 * l, 0.5 * l, 0), o.scene.add(a), o.scene.children.filter((m) => m.type === "Group" && m.name !== "gridAxes" && m.name !== "loadsGroup" && (m.name === "viewerAxes" || m.children.some((M) => M instanceof hn))).forEach((m) => {
        m.traverse((M) => {
          M.geometry && M.geometry.dispose(), M.material && (M.material.map && M.material.map.dispose(), M.material.dispose());
        }), o.scene.remove(m);
      });
      const p = 0.05 * l, r = new pn();
      r.name = "viewerAxes";
      const c = d.axisArrow;
      r.add(new hn(new Ne(1, 0, 0), new Ne(), 1, c, 0.2, 0.2)), r.add(new hn(new Ne(0, 1, 0), new Ne(), 1, c, 0.2, 0.2)), r.add(new hn(new Ne(0, 0, 1), new Ne(), 1, c, 0.2, 0.2)), r.children.forEach((m) => m.scale.set(p, p, p));
      for (const [m, M, w] of [
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
        f.fillStyle = M, f.font = "bold 50px Arial", f.textAlign = "center", f.textBaseline = "middle", f.fillText(m, 32, 34);
        const h = new ss(y);
        h.needsUpdate = true;
        const T = new xn(new vn({
          map: h,
          depthTest: false,
          transparent: true
        }));
        T.position.set(w[0], w[1], w[2]), T.scale.set(0.4 * p, 0.4 * p, 1), T.renderOrder = 99, r.add(T);
      }
      o.scene.add(r), t ? o.render() : Io("3d");
    }
    function _s(t, o, n) {
      if (t.length < 2) return n * 10;
      let l = 1 / 0;
      return o > 0 && (l = Math.min(l, Math.abs(t[o] - t[o - 1]))), o < t.length - 1 && (l = Math.min(l, Math.abs(t[o + 1] - t[o]))), l * 0.45 || n * 0.1;
    }
    function Io(t) {
      var _a2;
      const o = lt();
      if (!o) return;
      const { center: n, extent: l } = So(), s = o.renderer.domElement.clientWidth / (o.renderer.domElement.clientHeight || 1), d = l * 0.7;
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
          const r = parseInt(t.split(":")[1]), c = ((_a2 = Y.hPiso) == null ? void 0 : _a2.val) ?? 3, m = (r + 1) * c, M = c * 0.45;
          o.renderer.clippingPlanes = [
            new Lo(new Ne(0, 0, -1), m + M),
            new Lo(new Ne(0, 0, 1), -m + M)
          ], a(), p(new Ne(n.x, n.y, m + l * 2), new Ne(n.x, n.y, m), new Ne(0, 1, 0));
        } else if (t === "elevX") i.position.set(n.x + l * 2, n.y, n.z), i.up.set(0, 0, 1);
        else if (t === "elevY") i.position.set(n.x, n.y - l * 2, n.z), i.up.set(0, 0, 1);
        else if (t.startsWith("axisX:")) {
          const r = parseInt(t.split(":")[1]), c = Ge[r] ?? n.x;
          if (Ze.length > 1) {
            const M = _s(Ge, r, l);
            o.renderer.clippingPlanes = [
              new Lo(new Ne(-1, 0, 0), c + M),
              new Lo(new Ne(1, 0, 0), -c + M)
            ], a(), i.position.set(n.x + l * 2, n.y, n.z), o.controls.target.set(n.x, n.y, n.z);
          } else i.position.set(n.x, n.y - l * 2, n.z), o.controls.target.copy(n);
          i.up.set(0, 0, 1);
        } else if (t.startsWith("axisY:")) {
          const r = parseInt(t.split(":")[1]), c = Ze[r] ?? n.y;
          if (Ge.length > 1) {
            const M = _s(Ze, r, l);
            o.renderer.clippingPlanes = [
              new Lo(new Ne(0, -1, 0), c + M),
              new Lo(new Ne(0, 1, 0), -c + M)
            ], a(), i.position.set(n.x, n.y - l * 2, n.z), o.controls.target.set(n.x, n.y, n.z);
          } else i.position.set(n.x + l * 2, n.y, n.z), o.controls.target.copy(n);
          i.up.set(0, 0, 1);
        }
        !t.startsWith("axisX:") && !t.startsWith("axisY:") && o.controls.target.copy(n), o.setActiveCamera(i);
      }
    }
    function Yn() {
      const t = ze.querySelector("#cad3d-axis-buttons");
      if (!t) return;
      if (Ge.length < 2 && Ze.length < 2) {
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
          ze.querySelectorAll("[data-view]").forEach((m) => m.classList.remove("view-active")), c ? (Io("3d"), (_a2 = ze.querySelector('[data-view="3d"]')) == null ? void 0 : _a2.classList.add("view-active")) : (Io(a), p.classList.add("view-active"));
        }), p;
      }, n = document.createElement("span");
      n.textContent = "Ejes:", n.style.cssText = "color:#888;font-size:10px;margin-right:2px;align-self:center", t.appendChild(n);
      const l = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      Ge.forEach((d, a) => {
        const i = a < l.length ? l[a] : `X${a}`;
        t.appendChild(o(i, `axisX:${a}`, `Eje ${i} \u2014 elevaci\xF3n mirando en Y`));
      });
      const s = document.createElement("span");
      s.textContent = "|", s.style.cssText = "color:#555;margin:0 3px;align-self:center;font-weight:bold", t.appendChild(s), Ze.forEach((d, a) => {
        const i = `${a + 1}`;
        t.appendChild(o(i, `axisY:${a}`, `Eje ${i} \u2014 elevaci\xF3n mirando en X`));
      });
    }
    function Gn() {
      var _a2;
      const t = ze.querySelector("#cad3d-floor-buttons");
      if (!t) return;
      const o = Math.round(((_a2 = Y.nPisos) == null ? void 0 : _a2.val) ?? 0);
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
          ze.querySelectorAll("[data-view]").forEach((c) => c.classList.remove("view-active")), r ? (Io("3d"), (_a3 = ze.querySelector('[data-view="3d"]')) == null ? void 0 : _a3.classList.add("view-active")) : (Io(d), i.classList.add("view-active"));
        }), i;
      }, l = document.createElement("span");
      l.textContent = "Planta:", l.style.cssText = "color:#888;font-size:10px;margin-right:2px;align-self:center", t.appendChild(l);
      for (let s = 0; s < o; s++) t.appendChild(n(`P${s + 1}`, `plan:${s}`, `Planta Piso ${s + 1}`));
    }
    function Oa() {
      Io("3d"), ze.querySelectorAll("[data-view]").forEach((t) => t.classList.toggle("view-active", t.dataset.view === "3d"));
    }
    tt.view = (t) => {
      t = {
        planta: "plan",
        elevationX: "elevX",
        elevationY: "elevY",
        corte: "section"
      }[t] || t, Io(t), ze.querySelectorAll("[data-view]").forEach((n) => n.classList.toggle("view-active", n.dataset.view === t));
    };
    let io = false, Qt = false, ho = false, Jt = "line", no = [], kt = null, jt = null, Wt = null, jo = null, ao = null;
    const Ct = {
      node: true,
      grid: true,
      midpoint: true,
      track: true
    }, Vn = 0.5;
    let Jn = [], lo = null, Po = null;
    const Wo = [], un = [], Na = 50;
    function Yo() {
      Wo.push({
        nodes: JSON.parse(JSON.stringify(e.nodes.val)),
        elements: JSON.parse(JSON.stringify(e.elements.val))
      }), Wo.length > Na && Wo.shift(), un.length = 0;
    }
    function Bs() {
      if (Wo.length === 0) return;
      un.push({
        nodes: JSON.parse(JSON.stringify(e.nodes.val)),
        elements: JSON.parse(JSON.stringify(e.elements.val))
      });
      const t = Wo.pop();
      e.nodes.val = t.nodes, e.elements.val = t.elements, Eo(), e.elementInputs.val = {
        ...e.elementInputs.val
      };
    }
    function Ds() {
      if (un.length === 0) return;
      Wo.push({
        nodes: JSON.parse(JSON.stringify(e.nodes.val)),
        elements: JSON.parse(JSON.stringify(e.elements.val))
      });
      const t = un.pop();
      e.nodes.val = t.nodes, e.elements.val = t.elements, Eo(), e.elementInputs.val = {
        ...e.elementInputs.val
      };
    }
    const Mt = /* @__PURE__ */ new Set();
    let eo = null, ko = [], so = null, xo = null;
    function Xn(t) {
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
      d.setAttribute("position", new Oo(s, 3));
      const a = new Xo(d, new Uo({
        color: 16711935,
        linewidth: 3,
        depthTest: false
      }));
      a.renderOrder = 9998, a.__elemIdx = t, o.scene.add(a), ko.push(a), o.render();
    }
    function To() {
      const t = lt();
      ko.forEach((o) => {
        t == null ? void 0 : t.scene.remove(o), o.geometry.dispose(), o.material.dispose();
      }), ko = [], t == null ? void 0 : t.render();
    }
    function Ao() {
      xo && xo.remove();
      const t = U.size > 0 || j;
      if (Mt.size === 0 && !t) {
        xo = null;
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
    `, document.body.appendChild(o), xo = o, o.querySelector("#sel-assign").addEventListener("click", () => {
        el([
          ...Mt
        ]);
      }), o.querySelector("#sel-info").addEventListener("click", () => {
        if (Mt.size === 1) {
          const n = [
            ...Mt
          ][0];
          Js(n);
        } else {
          const n = [
            ...Mt
          ], l = e.nodes.val, s = e.elements.val;
          let d = 0, a = 0, i = 0, p = 0;
          n.forEach((c) => {
            const m = s[c];
            if (m) if (m.length === 2) {
              const M = l[m[0]], w = l[m[1]], y = Math.abs(w[0] - M[0]), f = Math.abs(w[1] - M[1]), h = Math.abs(w[2] - M[2]);
              h > y && h > f ? d++ : a++;
            } else m.length === 3 ? i++ : m.length === 4 && p++;
          });
          const r = [];
          d && r.push(`${d} columnas`), a && r.push(`${a} vigas`), p && r.push(`${p} shells Q4`), i && r.push(`${i} triangulos`), alert(`${n.length} elementos seleccionados:
${r.join(", ")}`);
        }
      }), o.querySelector("#sel-hide").addEventListener("click", () => {
        Mt.forEach((n) => U.add(n)), Mt.clear(), To(), Ao(), Oe();
      }), o.querySelector("#sel-isolate").addEventListener("click", () => {
        j = true, Q.clear(), Mt.forEach((n) => Q.add(n)), Mt.clear(), To(), Ao(), Oe();
      }), o.querySelector("#sel-showall").addEventListener("click", () => {
        U.clear(), j = false, Q.clear(), Ao(), Oe();
      }), o.querySelector("#sel-delete").addEventListener("click", () => {
        Yo(), Mt.forEach((n) => ee.add(n)), Mt.clear(), To(), Ao(), Oe();
      }), o.querySelector("#sel-clear").addEventListener("click", () => {
        Mt.clear(), To(), Ao();
      });
    }
    function mn() {
      var _a2;
      Qt = false, Mt.clear(), To(), xo && (xo.remove(), xo = null), (_a2 = ze.querySelector("#cad3d-select")) == null ? void 0 : _a2.classList.remove("inspect-active");
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
    function qa(t) {
      Un();
      const o = lt();
      if (!o) return;
      const n = e.nodes.val[t];
      if (!n) return;
      Po = t;
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
        p.setAttribute("position", new Sn(i, 3));
        const r = new Jo({
          color: a,
          dashSize: 0.3,
          gapSize: 0.15,
          transparent: true,
          opacity: 0.4,
          depthTest: false
        }), c = new Xo(p, r);
        c.computeLineDistances(), c.renderOrder = 9990, o.scene.add(c), Jn.push(c);
      }
      o.render();
    }
    function Un() {
      const t = lt();
      for (const o of Jn) t == null ? void 0 : t.scene.remove(o), o.geometry.dispose(), o.material.dispose();
      Jn = [], Po = null, lo && (lo.remove(), lo = null);
    }
    function Hs(t, o, n, l) {
      lo || (lo = document.createElement("div"), lo.style.cssText = "position:fixed;pointer-events:none;z-index:10002;background:var(--cad-bg);color:var(--cad-heading);font-family:monospace;font-size:11px;padding:2px 6px;border-radius:3px;white-space:nowrap;border:1px solid var(--cad-border);", document.body.appendChild(lo));
      const s = l.x - n.x, d = l.y - n.y, a = l.z - n.z, i = Math.sqrt(s * s + d * d + a * a), p = Math.abs(s), r = Math.abs(d), c = Math.abs(a);
      let m = "";
      p > r && p > c ? m = `\u0394X=${s.toFixed(2)}` : r > p && r > c ? m = `\u0394Y=${d.toFixed(2)}` : c > 0.01 && (m = `\u0394Z=${a.toFixed(2)}`), lo.textContent = `${i.toFixed(3)} m  ${m}`, lo.style.left = t + 20 + "px", lo.style.top = o - 10 + "px";
    }
    function _a(t, o) {
      const l = e.nodes.val[o];
      if (!l) return null;
      const s = new Ne(l[0], l[1], l[2]), d = t.clone(), a = d.clone().sub(s), i = 0.3, p = Math.abs(a.x), r = Math.abs(a.y), c = Math.abs(a.z);
      return r < i && c < i && p > 0.01 ? new Ne(d.x, s.y, s.z) : p < i && c < i && r > 0.01 ? new Ne(s.x, d.y, s.z) : p < i && r < i && c > 0.01 ? new Ne(s.x, s.y, d.z) : null;
    }
    function gn() {
      var _a2;
      const t = lt();
      jt && t && (t.scene.remove(jt), jt.geometry.dispose(), jt.material.dispose(), jt = null), Wt && t && (t.scene.remove(Wt), Wt.geometry.dispose(), Wt.material.dispose(), Wt = null), Un(), kt = null, ao = null, ho = false, jo && (jo.remove(), jo = null), (_a2 = ze.querySelector("#cad3d-draw")) == null ? void 0 : _a2.classList.remove("inspect-active"), t == null ? void 0 : t.render();
    }
    function Ba() {
      jo && jo.remove();
      const t = document.createElement("div");
      t.style.cssText = "position:fixed;bottom:60px;left:50%;transform:translateX(-50%);background:var(--cad-bg);border:1px solid var(--cad-border);border-radius:6px;padding:6px 10px;z-index:10000;display:flex;gap:6px;align-items:center;font-family:monospace;font-size:11px;box-shadow:0 2px 10px var(--cad-shadow);";
      const o = (s) => `padding:4px 10px;border:1px solid ${s ? "#00ccff" : "#555"};background:${s ? "#003355" : "#333"};color:${s ? "#00ccff" : "#ccc"};border-radius:3px;cursor:pointer;font-size:11px;font-family:monospace;`, n = (s) => `padding:3px 6px;border:1px solid ${s ? "#33ff33" : "#444"};background:${s ? "#113311" : "#222"};color:${s ? "#33ff33" : "#888"};border-radius:3px;cursor:pointer;font-size:10px;`;
      t.innerHTML = `
      <span style="color:#00ccff;font-weight:bold;margin-right:4px;">Draw:</span>
      <button id="dt-line" style="${o(Jt === "line")}">\u{1F4CF} Line</button>
      <button id="dt-arc" style="${o(Jt === "arc")}">\u2312 Arc</button>
      <button id="dt-node" style="${o(Jt === "node")}">\u2295 Node</button>
      <button id="dt-area" style="${o(Jt === "area")}">\u25A2 Area</button>
      <span style="color:#666;margin:0 4px;">|</span>
      <span style="color:#888;font-size:10px;">Snap:</span>
      <button id="ds-node" style="${n(Ct.node)}">Node</button>
      <button id="ds-grid" style="${n(Ct.grid)}">Grid</button>
      <button id="ds-mid" style="${n(Ct.midpoint)}">Mid</button>
      <button id="ds-track" style="${n(Ct.track)}">Prolong</button>
      <span style="color:#666;margin:0 4px;">|</span>
      <span style="color:#888;font-size:10px;">Grid:</span>
      <input id="ds-gridsize" type="number" value="${Vn}" step="0.1" min="0.1" max="10" style="width:45px;background:#333;color:#fff;border:1px solid #555;padding:2px;font-size:10px;">
      <span style="color:#888;font-size:10px;">m</span>
      <span style="color:#666;margin:0 4px;">|</span>
      <button id="dt-undo" style="padding:3px 6px;background:#444;color:#ccc;border:1px solid #555;border-radius:3px;cursor:pointer;font-size:10px;" title="Ctrl+Z">\u21A9 Undo</button>
      <button id="dt-redo" style="padding:3px 6px;background:#444;color:#ccc;border:1px solid #555;border-radius:3px;cursor:pointer;font-size:10px;" title="Ctrl+Y">\u21AA Redo</button>
    `, document.body.appendChild(t), jo = t;
      const l = () => {
        const s = t.querySelector("#dt-line"), d = t.querySelector("#dt-arc"), a = t.querySelector("#dt-node"), i = t.querySelector("#dt-area");
        s && (s.style.cssText = o(Jt === "line")), d && (d.style.cssText = o(Jt === "arc")), a && (a.style.cssText = o(Jt === "node")), i && (i.style.cssText = o(Jt === "area"));
        const p = t.querySelector("#ds-node"), r = t.querySelector("#ds-grid"), c = t.querySelector("#ds-mid"), m = t.querySelector("#ds-track");
        p && (p.style.cssText = n(Ct.node)), r && (r.style.cssText = n(Ct.grid)), c && (c.style.cssText = n(Ct.midpoint)), m && (m.style.cssText = n(Ct.track));
      };
      t.querySelector("#dt-line").addEventListener("click", () => {
        Jt = "line", kt = null, ao = null, no = [], l();
      }), t.querySelector("#dt-arc").addEventListener("click", () => {
        Jt = "arc", kt = null, ao = null, no = [], l();
      }), t.querySelector("#dt-node").addEventListener("click", () => {
        Jt = "node", kt = null, ao = null, no = [], l();
      }), t.querySelector("#dt-area").addEventListener("click", () => {
        Jt = "area", kt = null, ao = null, no = [], console.log("Area mode: click vertices del poligono. Doble-click o click cerca del 1er punto para cerrar."), l();
      }), t.querySelector("#ds-node").addEventListener("click", () => {
        Ct.node = !Ct.node, l();
      }), t.querySelector("#ds-grid").addEventListener("click", () => {
        Ct.grid = !Ct.grid, l();
      }), t.querySelector("#ds-mid").addEventListener("click", () => {
        Ct.midpoint = !Ct.midpoint, l();
      }), t.querySelector("#ds-track").addEventListener("click", () => {
        Ct.track = !Ct.track, Ct.track || Un(), l();
      }), t.querySelector("#ds-gridsize").addEventListener("change", (s) => {
        Ct.gridSize = parseFloat(s.target.value) || 0.5;
      }), t.querySelector("#dt-undo").addEventListener("click", () => Bs()), t.querySelector("#dt-redo").addEventListener("click", () => Ds());
    }
    function js(t, o, n, l) {
      const s = l.getBoundingClientRect(), d = (t - s.left) / s.width * 2 - 1, a = -((o - s.top) / s.height) * 2 + 1, i = new da();
      i.setFromCamera(new pa(d, a), n);
      const p = e.nodes.val, r = e.elements.val, c = 0.12;
      if (Ct.node) {
        let w = -1, y = 1 / 0;
        for (let f = 0; f < p.length; f++) {
          const h = p[f], T = new Ne(h[0], h[1], h[2]).project(n), k = Math.sqrt((T.x - d) ** 2 + (T.y - a) ** 2);
          k < c && k < y && (y = k, w = f);
        }
        if (w >= 0) return {
          nodeIdx: w,
          worldPos: new Ne(...p[w]),
          snapType: "node"
        };
      }
      if (Ct.midpoint) {
        let w = 1 / 0, y = null;
        for (const f of r) {
          if (f.length !== 2) continue;
          const h = p[f[0]], T = p[f[1]], k = new Ne((h[0] + T[0]) / 2, (h[1] + T[1]) / 2, (h[2] + T[2]) / 2), $ = k.clone().project(n), C = Math.sqrt(($.x - d) ** 2 + ($.y - a) ** 2);
          C < c * 0.8 && C < w && (w = C, y = k);
        }
        if (y) return {
          nodeIdx: null,
          worldPos: y,
          snapType: "mid"
        };
      }
      if (Ct.grid) {
        const w = new Lo(new Ne(0, 0, 1), 0), y = new Ne();
        if (i.ray.intersectPlane(w, y)) {
          const f = Ct.gridSize || Vn;
          return y.x = Math.round(y.x / f) * f, y.y = Math.round(y.y / f) * f, y.z = Math.round(y.z / f) * f, {
            nodeIdx: null,
            worldPos: y,
            snapType: "grid"
          };
        }
      }
      const m = new Lo(new Ne(0, 0, 1), 0), M = new Ne();
      return i.ray.intersectPlane(m, M), {
        nodeIdx: null,
        worldPos: M,
        snapType: "free"
      };
    }
    function Ws(t) {
      const o = lt();
      if (!o) return;
      const n = e.nodes.val;
      if (Wt && (o.scene.remove(Wt), Wt.geometry.dispose(), Wt.material.dispose(), Wt = null), t.worldPos) {
        const l = t.snapType === "node" ? 16776960 : t.snapType === "mid" ? 16711935 : t.snapType === "grid" ? 65535 : 8947848, s = t.snapType === "node" ? 0.08 : 0.06, d = t.snapType === "mid" ? new cl(s * 2, s * 2, s * 2) : new dl(s, 12, 12), a = new pl({
          color: l,
          transparent: true,
          opacity: 0.8,
          depthTest: false
        });
        Wt = new xa(d, a), Wt.position.copy(t.worldPos), Wt.renderOrder = 9999, o.scene.add(Wt);
      }
      if (jt && (o.scene.remove(jt), jt.geometry.dispose(), jt.material.dispose(), jt = null), kt !== null && t.worldPos) {
        const l = n[kt], s = new ro();
        if (Jt === "arc" && ao !== null) {
          const a = n[ao], i = Ys(new Ne(l[0], l[1], l[2]), new Ne(a[0], a[1], a[2]), t.worldPos, 16), p = [];
          for (let r = 0; r < i.length - 1; r++) p.push(i[r].x, i[r].y, i[r].z, i[r + 1].x, i[r + 1].y, i[r + 1].z);
          s.setAttribute("position", new Oo(p, 3));
        } else s.setAttribute("position", new Oo([
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
        jt = new No(s, d), Jt === "arc" && ao !== null && (jt = new Xo(s, d)), jt.renderOrder = 9999, o.scene.add(jt);
      }
      o.render();
    }
    function Ys(t, o, n, l) {
      const s = [];
      for (let d = 0; d <= l; d++) {
        const a = d / l, i = o.clone().multiplyScalar(2).sub(t.clone().multiplyScalar(0.5)).sub(n.clone().multiplyScalar(0.5)), p = (1 - a) * (1 - a), r = 2 * (1 - a) * a, c = a * a;
        s.push(new Ne(p * t.x + r * i.x + c * n.x, p * t.y + r * i.y + c * n.y, p * t.z + r * i.z + c * n.z));
      }
      return s;
    }
    function Kn(t) {
      if (t.nodeIdx !== null) return t.nodeIdx;
      if (!t.worldPos) return -1;
      const o = e.nodes.val, n = 1e-3;
      for (let s = 0; s < o.length; s++) if (Math.abs(o[s][0] - t.worldPos.x) < n && Math.abs(o[s][1] - t.worldPos.y) < n && Math.abs(o[s][2] - t.worldPos.z) < n) return s;
      Yo();
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
    function Da(t) {
      var _a2;
      if (Jt === "node") {
        if (!t.worldPos) return;
        Yo();
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
      if (Jt === "line") {
        const o = Kn(t);
        if (o < 0) return;
        if (kt === null) {
          kt = o;
          return;
        }
        if (o === kt) return;
        Yo();
        const n = [
          ...e.elements.val
        ];
        n.some((s) => s.length === 2 && (s[0] === kt && s[1] === o || s[1] === kt && s[0] === o)) || (n.push([
          kt,
          o
        ]), e.elements.val = n, Eo(), e.elementInputs.val = {
          ...e.elementInputs.val
        }), kt = o;
        return;
      }
      if (Jt === "arc") {
        const o = Kn(t);
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
        const n = e.nodes.val, l = new Ne(...n[kt]), s = new Ne(...n[ao]), d = new Ne(...n[o]), a = Math.max(4, Math.round(((_a2 = Y.nSubViga) == null ? void 0 : _a2.val) ?? 8)), i = Ys(l, s, d, a);
        Yo();
        const p = [
          ...e.nodes.val
        ], r = [
          ...e.elements.val
        ];
        let c = kt;
        for (let m = 1; m < i.length; m++) {
          let M;
          if (m === i.length - 1) M = o;
          else {
            const w = i[m];
            M = p.length, p.push([
              w.x,
              w.y,
              w.z
            ]);
          }
          r.push([
            c,
            M
          ]), c = M;
        }
        e.nodes.val = p, e.elements.val = r, Eo(), e.elementInputs.val = {
          ...e.elementInputs.val
        }, kt = o, ao = null;
        return;
      }
      if (Jt === "area") {
        const o = Kn(t);
        if (o < 0) return;
        if (no.length >= 3 && o === no[0]) {
          Yo();
          const n = [
            ...e.nodes.val
          ], l = [
            ...e.elements.val
          ], s = no.map((d) => n[d]);
          try {
            const d = Mo({
              points: s,
              polygon: Array.from({
                length: s.length
              }, (i, p) => p),
              maxMeshSize: Vn || 0.5
            }), a = [];
            for (const i of d.nodes) {
              let p = -1;
              for (let r = 0; r < n.length; r++) {
                const c = Math.abs(n[r][0] - i[0]), m = Math.abs(n[r][1] - i[1]), M = Math.abs(n[r][2] - i[2]);
                if (c < 0.01 && m < 0.01 && M < 0.01) {
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
            e.nodes.val = n, e.elements.val = l, Eo(), console.log(`Area: ${d.elements.length} triangulos creados desde ${no.length} vertices`);
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
            ]), a = new Xo(d, new Uo({
              color: 65280,
              linewidth: 2
            }));
            a.name = "area-preview", s.scene.add(a), s.render();
          }
        }
        return;
      }
    }
    function Gs(t) {
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
      d.setAttribute("position", new Oo(s, 3)), eo = new Xo(d, new Uo({
        color: 16776960,
        linewidth: 3,
        depthTest: false
      })), eo.renderOrder = 9999, o.scene.add(eo), o.render();
    }
    function Zn(t) {
      const o = lt();
      if (!o) return -1;
      const n = o.renderer.domElement.getBoundingClientRect(), l = new pa((t.clientX - n.left) / n.width * 2 - 1, -((t.clientY - n.top) / n.height) * 2 + 1), s = new da();
      s.setFromCamera(l, o.controls.object), s.params.Line = {
        threshold: 0.5
      };
      const d = e.nodes.val, a = e.elements.val;
      if (d.length === 0 || a.length === 0) return -1;
      let i = 1 / 0, p = -1;
      const r = s.ray;
      for (let m = 0; m < a.length; m++) {
        const M = a[m];
        if (M.length === 2) {
          const w = new Ne(...d[M[0]]), y = new Ne(...d[M[1]]), f = new fl(w, y), h = new Ne(), T = new Ne();
          r.closestPointToPoint(f.getCenter(new Ne()), h), f.closestPointToPoint(h, true, T);
          const k = h.distanceTo(T);
          k < i && (i = k, p = m);
        } else if (M.length === 3) {
          const w = new Ne(...d[M[0]]), y = new Ne(...d[M[1]]), f = new Ne(...d[M[2]]), h = new Ne();
          if (r.intersectTriangle(w, y, f, false, h)) {
            const k = r.origin.distanceTo(h);
            k < i && (i = k, p = m);
          } else {
            const k = w.add(y).add(f).divideScalar(3), $ = new Ne();
            r.closestPointToPoint(k, $);
            const C = $.distanceTo(k);
            C < i && (i = C, p = m);
          }
        } else if (M.length === 4) {
          const w = new Ne(...d[M[0]]), y = new Ne(...d[M[1]]), f = new Ne(...d[M[2]]), h = new Ne(...d[M[3]]), T = new Ne();
          let k = r.intersectTriangle(w, y, f, false, T);
          if (k) {
            const $ = r.origin.distanceTo(T);
            $ < i && (i = $, p = m);
          }
          if (k = r.intersectTriangle(w, f, h, false, T), k) {
            const $ = r.origin.distanceTo(T);
            $ < i && (i = $, p = m);
          }
        }
      }
      const { extent: c } = So();
      return i < c * 0.1 ? p : -1;
    }
    function $e(t, o = 4) {
      return Math.abs(t) < 1e-10 ? "0" : Math.abs(t) >= 1e6 ? t.toExponential(2) : Math.abs(t) >= 100 ? t.toFixed(1) : t.toFixed(o);
    }
    function Qn(t, o, n = 12) {
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
          d += `<td class="${r}">${$e(p, 2)}</td>`;
        }
        d += "</tr>";
      }
      return d += "</table>", d;
    }
    function De(t, o) {
      return `<span class="frac"><span class="frac-num">${t}</span><span class="frac-den">${o}</span></span>`;
    }
    function z(t, o, n) {
      let l = `<span class="var">${t}</span>`;
      return o && (l += `<sub>${o}</sub>`), l;
    }
    function Ha(t, o, n, l, s, d, a) {
      const i = 0.8333333333333334 * o, p = 5 / 6 * o, r = p > 0 && s > 0 ? 12 * t * n / (s * p * a ** 2) : 0, c = i > 0 && s > 0 ? 12 * t * l / (s * i * a ** 2) : 0, m = t * o / a, M = s * d / a, w = 12 * t * n / a ** 3 / (1 + r), y = 6 * t * n / a ** 2 / (1 + r), f = 4 * t * n / a * (1 + r / 4) / (1 + r), h = 2 * t * n / a * (1 - r / 2) / (1 + r), T = r > 1e-10 || c > 1e-10;
      return `<div class="fem-eq eq-box">
      <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">Formulaci\xF3n: ${T ? "Timoshenko (con deformaci\xF3n por cortante)" : "Euler-Bernoulli"}</strong></div>
      ${T ? `
      <div style="text-align:left;margin-bottom:6px;color:var(--fem-eq-sub)">
        ${z("A", "s")} = ${De("5", "6")} \xB7 ${z("A")} = <span class="highlight">${$e(i)}</span>
        &nbsp;&nbsp; \u03C6<sub>z</sub> = ${De("12\xB7" + z("E") + "\xB7" + z("I", "z"), z("G") + "\xB7" + z("A", "s") + "\xB7" + z("L") + "\xB2")} = <span class="highlight">${$e(r)}</span>
        &nbsp;&nbsp; \u03C6<sub>y</sub> = <span class="highlight">${$e(c)}</span>
      </div>
      <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">Coeficientes Timoshenko (Dr. Aguiar):</strong></div>
      <div>${z("t", "z")} = ${De("12\xB7" + z("E") + "\xB7" + z("I", "z"), z("L") + "\xB3\xB7(1+\u03C6<sub>z</sub>)")} = <span class="highlight">${$e(w)}</span> &nbsp;(cortante)</div>
      <div>${z("b", "z")} = ${De("6\xB7" + z("E") + "\xB7" + z("I", "z"), z("L") + "\xB2\xB7(1+\u03C6<sub>z</sub>)")} = <span class="highlight">${$e(y)}</span> &nbsp;(acoplamiento)</div>
      <div>${z("k", "z")} = ${De("4\xB7" + z("E") + "\xB7" + z("I", "z") + "\xB7(1+\u03C6/4)", z("L") + "\xB7(1+\u03C6<sub>z</sub>)")} = <span class="highlight">${$e(f)}</span> &nbsp;(flexi\xF3n diagonal)</div>
      <div>${z("a", "z")} = ${De("2\xB7" + z("E") + "\xB7" + z("I", "z") + "\xB7(1\u2212\u03C6/2)", z("L") + "\xB7(1+\u03C6<sub>z</sub>)")} = <span class="highlight">${$e(h)}</span> &nbsp;(flexi\xF3n off-diag)</div>
      ` : `
      <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">Coeficientes de rigidez:</strong></div>
      `}
      <div>${De(z("E") + "\xB7" + z("A"), z("L"))} = <span class="highlight">${$e(m)}</span> &nbsp;(axial)</div>
      <div>${De(z("G") + "\xB7" + z("J"), z("L"))} = <span class="highlight">${$e(M)}</span> &nbsp;(torsi\xF3n)</div>
      ${T ? "" : `
      <div>${De("12\xB7" + z("E") + "\xB7" + z("I", "z"), z("L") + "\xB3")} = <span class="highlight">${$e(w)}</span></div>
      <div>${De("4\xB7" + z("E") + "\xB7" + z("I", "z"), z("L"))} = <span class="highlight">${$e(f)}</span></div>
      `}
    </div>
    <div class="fem-eq">
      ${z("k", "local")} = <span class="mat-sym" style="grid-template-columns:repeat(4,auto)">
        <span class="cell">${De(z("EA"), z("L"))}</span><span class="cell">0</span><span class="cell dots">\u22EF</span><span class="cell">${De("\u2212" + z("EA"), z("L"))}</span>
        <span class="cell">0</span><span class="cell">${z("t", "z")}</span><span class="cell dots">\u22EF</span><span class="cell">${z("b", "z")}</span>
        <span class="cell dots">\u22EE</span><span class="cell dots">\u22EE</span><span class="cell dots">\u22F1</span><span class="cell dots">\u22EE</span>
        <span class="cell">0</span><span class="cell">${z("b", "z")}</span><span class="cell dots">\u22EF</span><span class="cell">${z("k", "z")}</span>
      </span>
      <sub style="color:var(--fem-label)">12\xD712 ${T ? "(Timoshenko)" : "(Euler-Bernoulli)"}</sub>
    </div>
    ${T ? `<div class="fem-eq eq-box" style="margin-top:6px">
      <div style="text-align:left"><strong style="color:var(--fem-section-title)">Matrices de rigidez (Dr. Aguiar, Fig 7.9):</strong></div>
      <div style="margin-top:4px">${z("K", "f")} = ${z("B", "f")}<sup>T</sup> \xB7 ${z("E")}\xB7${z("I")} \xB7 ${z("B", "f")} \xB7 ${z("J")} &nbsp;<sub style="color:var(--fem-label)">(flexi\xF3n, 1 pt Gauss)</sub></div>
      <div>${z("K", "c")} = ${z("B", "c")}<sup>T</sup> \xB7 ${z("G")}\xB7${z("A'")} \xB7 ${z("B", "c")} \xB7 ${z("J")} &nbsp;<sub style="color:var(--fem-label)">(cortante, 2 pts Gauss)</sub></div>
      <div>${z("K", "total")} = ${z("K", "f")} + ${z("K", "c")}</div>
    </div>` : ""}`;
    }
    function ja(t) {
      if (t.length === 2) {
        const n = wo(t[1], t[0]), l = Bo(n), s = n[0] / l, d = n[1] / l, a = n[2] / l;
        return `<div class="fem-eq eq-box">
        <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">Cosenos directores:</strong></div>
        <div>${z("l")} = cos(\u03B1) = ${De("\u0394x", z("L"))} = ${De($e(n[0]), $e(l))} = <span class="highlight">${$e(s)}</span></div>
        <div>${z("m")} = cos(\u03B2) = ${De("\u0394y", z("L"))} = ${De($e(n[1]), $e(l))} = <span class="highlight">${$e(d)}</span></div>
        <div>${z("n")} = cos(\u03B3) = ${De("\u0394z", z("L"))} = ${De($e(n[2]), $e(l))} = <span class="highlight">${$e(a)}</span></div>
      </div>
      <div class="fem-eq">
        \u03BB = <span class="mat-sym" style="grid-template-columns:repeat(3,auto)">
          <span class="cell">${z("l")}</span><span class="cell">${z("m")}</span><span class="cell">${z("n")}</span>
          <span class="cell">${De("\u2212" + z("m"), z("D"))}</span><span class="cell">${De(z("l"), z("D"))}</span><span class="cell">0</span>
          <span class="cell">${De("\u2212" + z("l") + "\xB7" + z("n"), z("D"))}</span><span class="cell">${De("\u2212" + z("m") + "\xB7" + z("n"), z("D"))}</span><span class="cell">${z("D")}</span>
        </span>
        &nbsp; donde ${z("D")} = \u221A(${z("l")}\xB2 + ${z("m")}\xB2)
      </div>
      <div class="fem-eq">
        ${z("T")} = ${z("I", "4")} \u2297 \u03BB &nbsp; <sub style="color:var(--fem-label)">(Kronecker, 12\xD712)</sub>
      </div>`;
      }
      return `<div class="fem-eq">${z("T")} \u2014 sistema local del tri\xE1ngulo (normal \xD7 lados) <sub>18\xD718</sub></div>`;
    }
    function Wa() {
      return `<div class="fem-eq">
      ${z("K", "global")} = ${z("T")}<sup>T</sup> \xB7 ${z("k", "local")} \xB7 ${z("T")}
    </div>`;
    }
    function Ya(t) {
      const o = t.map((n) => `6\xB7${n} = ${6 * n}`).join(", ");
      return `<div class="fem-eq eq-box">
      <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">Ensamblaje en K global:</strong></div>
      <div>${z("K", "global")}[${z("i")}, ${z("j")}] += ${z("K", "elem")}[${z("i")}, ${z("j")}]</div>
      <div style="margin-top:4px">donde ${z("i")}, ${z("j")} \u2208 {${o}} + (0..5)</div>
    </div>`;
    }
    function Ga(t) {
      return t ? `<div class="fem-eq eq-box">
        <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">Recuperaci\xF3n de fuerzas:</strong></div>
        <div>${z("u", "local")} = ${z("T")} \xB7 ${z("u", "global")}</div>
        <div>${z("f", "local")} = ${z("k", "local")} \xB7 ${z("u", "local")}</div>
        <div style="margin-top:4px;color:var(--fem-eq-sub)">
          ${z("f")} = [${z("N", "i")}, ${z("V", "y,i")}, ${z("V", "z,i")}, ${z("M", "x,i")}, ${z("M", "y,i")}, ${z("M", "z,i")}, ${z("N", "j")}, \u2026]
        </div>
      </div>` : `<div class="fem-eq eq-box">
      <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">Esfuerzos en placa:</strong></div>
      <div>\u03C3 = ${De("1", "2" + z("A"))} \xB7 ${z("D")} \xB7 ${z("B")} \xB7 ${z("u")}</div>
      <div>${z("N", "xx")} = \u03C3<sub>xx</sub> \xB7 ${z("t")} &nbsp;&nbsp; ${z("M", "xx")} = \u03C3<sub>xx</sub> \xB7 ${De(z("t") + "\xB3", "12")}</div>
    </div>`;
    }
    function es(t, o) {
      const n = t.length;
      let l = '<table><tr><td class="hdr"></td>';
      for (let s = 0; s < n; s++) l += `<td class="hdr">${o[s] || s}</td>`;
      l += "</tr>";
      for (let s = 0; s < n; s++) {
        l += `<tr><td class="hdr">${o[s] || s}</td>`;
        for (let d = 0; d < n; d++) {
          const a = t[s][d], i = (s === d ? "diag " : "") + (Math.abs(a) > 1e-10 ? "nz" : "");
          l += `<td class="${i}">${$e(a, 2)}</td>`;
        }
        l += "</tr>";
      }
      return l += "</table>", l;
    }
    function Vs() {
      const t = "0", o = De(z("EA"), z("L")), n = De("\u2212" + z("EA"), z("L")), l = De("12" + z("EI", "z"), z("L") + "\xB3"), s = De("\u221212" + z("EI", "z"), z("L") + "\xB3"), d = De("12" + z("EI", "y"), z("L") + "\xB3"), a = De("\u221212" + z("EI", "y"), z("L") + "\xB3"), i = De("6" + z("EI", "z"), z("L") + "\xB2"), p = De("\u22126" + z("EI", "z"), z("L") + "\xB2"), r = De("6" + z("EI", "y"), z("L") + "\xB2"), c = De("\u22126" + z("EI", "y"), z("L") + "\xB2"), m = De(z("GJ"), z("L")), M = De("\u2212" + z("GJ"), z("L")), w = De("4" + z("EI", "z"), z("L")), y = De("2" + z("EI", "z"), z("L")), f = De("4" + z("EI", "y"), z("L")), h = De("2" + z("EI", "y"), z("L")), T = '<span style="color:var(--fem-eq-dots);font-style:italic">sym</span>', k = [
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
          M,
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
          w,
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
          M,
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
          w
        ]
      ];
      let _ = '<div style="margin-bottom:8px;color:var(--fem-eq-sub);font-size:11px;font-family:monospace">Eq. 6.1 \u2014 Matriz de rigidez de elemento de p\xF3rtico espacial</div>';
      _ += '<table><tr><td class="hdr"></td>';
      for (const x of $) _ += `<td class="hdr">${x}</td>`;
      _ += "</tr>";
      for (let x = 0; x < 12; x++) {
        _ += `<tr><td class="hdr">${k[x]}</td>`;
        for (let u = 0; u < 12; u++) if (u < x) _ += `<td style="color:var(--fem-border-cell)">${u === 0 && x > 0 ? T : ""}</td>`;
        else {
          const I = C[x][u], L = (x === u ? "diag " : "") + (I !== "0" ? "nz" : "");
          _ += `<td class="${L}">${I}</td>`;
        }
        _ += "</tr>";
      }
      return _ += "</table>", _;
    }
    function Va(t, o, n, l, s, d, a) {
      return `<div class="coeff-grid">${[
        {
          name: `${De(z("E") + "\xB7" + z("A"), z("L"))}`,
          calc: `${De($e(t) + "\xD7" + $e(o), $e(a))}`,
          val: t * o / a,
          label: "Axial"
        },
        {
          name: `${De("12\xB7" + z("E") + "\xB7" + z("I", "z"), z("L") + "\xB3")}`,
          calc: `${De("12\xD7" + $e(t) + "\xD7" + $e(n), $e(a) + "\xB3")}`,
          val: 12 * t * n / a ** 3,
          label: "Corte Y"
        },
        {
          name: `${De("6\xB7" + z("E") + "\xB7" + z("I", "z"), z("L") + "\xB2")}`,
          calc: `${De("6\xD7" + $e(t) + "\xD7" + $e(n), $e(a) + "\xB2")}`,
          val: 6 * t * n / a ** 2,
          label: "Corte-Momento Z"
        },
        {
          name: `${De("12\xB7" + z("E") + "\xB7" + z("I", "y"), z("L") + "\xB3")}`,
          calc: `${De("12\xD7" + $e(t) + "\xD7" + $e(l), $e(a) + "\xB3")}`,
          val: 12 * t * l / a ** 3,
          label: "Corte Z"
        },
        {
          name: `${De("6\xB7" + z("E") + "\xB7" + z("I", "y"), z("L") + "\xB2")}`,
          calc: `${De("6\xD7" + $e(t) + "\xD7" + $e(l), $e(a) + "\xB2")}`,
          val: 6 * t * l / a ** 2,
          label: "Corte-Momento Y"
        },
        {
          name: `${De(z("G") + "\xB7" + z("J"), z("L"))}`,
          calc: `${De($e(s) + "\xD7" + $e(d), $e(a))}`,
          val: s * d / a,
          label: "Torsi\xF3n"
        },
        {
          name: `${De("4\xB7" + z("E") + "\xB7" + z("I", "z"), z("L"))}`,
          calc: `${De("4\xD7" + $e(t) + "\xD7" + $e(n), $e(a))}`,
          val: 4 * t * n / a,
          label: "Flexi\xF3n Z (4EI/L)"
        },
        {
          name: `${De("2\xB7" + z("E") + "\xB7" + z("I", "z"), z("L"))}`,
          calc: `${De("2\xD7" + $e(t) + "\xD7" + $e(n), $e(a))}`,
          val: 2 * t * n / a,
          label: "Flexi\xF3n Z (2EI/L)"
        },
        {
          name: `${De("4\xB7" + z("E") + "\xB7" + z("I", "y"), z("L"))}`,
          calc: `${De("4\xD7" + $e(t) + "\xD7" + $e(l), $e(a))}`,
          val: 4 * t * l / a,
          label: "Flexi\xF3n Y (4EI/L)"
        },
        {
          name: `${De("2\xB7" + z("E") + "\xB7" + z("I", "y"), z("L"))}`,
          calc: `${De("2\xD7" + $e(t) + "\xD7" + $e(l), $e(a))}`,
          val: 2 * t * l / a,
          label: "Flexi\xF3n Y (2EI/L)"
        }
      ].map((p) => `<div class="coeff-item"><div style="color:var(--fem-eq-sub);font-size:10px;font-family:monospace;margin-bottom:2px">${p.label}</div>${p.name} = ${p.calc} = <span class="highlight">${$e(p.val)}</span></div>`).join("")}</div>`;
    }
    function ts(t, o, n, l) {
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
    function Js(t) {
      var _a2, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l2, _m, _n2, _o2, _p, _q, _r, _s2, _t2, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I, _J, _K, _L, _M, _N, _O;
      so && so.remove();
      const o = e.nodes.val, n = e.elements.val, l = n[t], s = l.map((x) => o[x]), d = l.length === 2, a = ((_a2 = e.elementInputs) == null ? void 0 : _a2.val) || {}, i = (_b = e.deformOutputs) == null ? void 0 : _b.val, p = (_c = e.analyzeOutputs) == null ? void 0 : _c.val;
      if (d) {
        const x = Bo(wo(s[1], s[0])), u = ((_d = a.elasticities) == null ? void 0 : _d.get(t)) ?? 0, I = ((_e2 = a.areas) == null ? void 0 : _e2.get(t)) ?? 0, L = ((_f = a.momentsOfInertiaZ) == null ? void 0 : _f.get(t)) ?? 0, R = ((_g = a.momentsOfInertiaY) == null ? void 0 : _g.get(t)) ?? 0, D = ((_h = a.shearModuli) == null ? void 0 : _h.get(t)) ?? 0, b = ((_i = a.torsionalConstants) == null ? void 0 : _i.get(t)) ?? 0, S = ((_j = a.momentReleases) == null ? void 0 : _j.get(t)) || [], v = ((_k = a.partialFixitySprings) == null ? void 0 : _k.get(t)) || [], P = [
          "P (Axial)",
          "V2 (Corte)",
          "V3 (Corte)",
          "T (Torsi\xF3n)",
          "M22 (Momento)",
          "M33 (Momento)"
        ];
        let X = "";
        for (let G = 0; G < 6; G++) {
          const ae = G, K = G + 6, V = (S.length >= 12 ? S[ae] : G >= 3 && S.length >= 6 && S[G - 3]) ? "checked" : "", ce = (S.length >= 12 ? S[K] : G >= 3 && S.length >= 6 && S[G]) ? "checked" : "", re = v.length >= 12 && v[ae] > 0 ? v[ae].toFixed(1) : "", ye = v.length >= 12 && v[K] > 0 ? v[K].toFixed(1) : "";
          X += `<tr>
          <td style="text-align:left;color:var(--fem-key)">${P[G]}</td>
          <td style="text-align:center"><input type="checkbox" data-rel="${ae}" ${V}></td>
          <td style="text-align:center"><input type="checkbox" data-rel="${K}" ${ce}></td>
          <td><input type="number" data-spr="${ae}" value="${re}" placeholder="0" style="width:50px;background:var(--fem-bg);color:var(--fem-val);border:1px solid var(--fem-border);font-size:10px;text-align:right"></td>
          <td><input type="number" data-spr="${K}" value="${ye}" placeholder="0" style="width:50px;background:var(--fem-bg);color:var(--fem-val);border:1px solid var(--fem-border);font-size:10px;text-align:right"></td>
        </tr>`;
        }
        `${l[0]}${l[1]}${$e(x)}${$e(u)}${$e(I)}${$e(L)}${$e(R)}${$e(D)}${$e(b)}${X}`;
      } else {
        const x = ((_l2 = a.elasticities) == null ? void 0 : _l2.get(t)) ?? 0, u = ((_m = a.thicknesses) == null ? void 0 : _m.get(t)) ?? 0, I = ((_n2 = a.poissonsRatios) == null ? void 0 : _n2.get(t)) ?? 0, L = x / (2 * (1 + I)), R = l.length === 4, D = x / (1 - I * I);
        `${l.length}${l.join(", ")}${$e(x)}${$e(L)}${$e(u)}${$e(I)}`, R && (M = `<div class="fem-eq eq-box">
          <div style="text-align:left;margin-bottom:6px"><strong style="color:var(--fem-section-title)">Formulaci\xF3n Q4: Membrana + Mindlin-Reissner + Drilling</strong></div>

          <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">1. Matriz constitutiva (esfuerzo plano):</strong></div>
          <div>${z("D")} = ${De(z("E"), "1\u2212\u03BD\xB2")} \xB7 <span class="mat-sym" style="grid-template-columns:repeat(3,auto)">
            <span class="cell">1</span><span class="cell">\u03BD</span><span class="cell">0</span>
            <span class="cell">\u03BD</span><span class="cell">1</span><span class="cell">0</span>
            <span class="cell">0</span><span class="cell">0</span><span class="cell">${De("1\u2212\u03BD", "2")}</span>
          </span> = ${De($e(x), "1\u2212" + $e(I) + "\xB2")} = <span class="highlight">${$e(D)}</span></div>

          <div style="text-align:left;margin-top:8px;margin-bottom:4px"><strong style="color:var(--fem-section-title)">2. Funciones de forma (Ec. 6.2, Wilson):</strong></div>
          <div>${z("N", "i")} = \xBC\xB7(1\xB1\u03BE)\xB7(1\xB1\u03B7) &nbsp;&nbsp; <sub style="color:var(--fem-label)">i = 1..4 (bilineal)</sub></div>

          <div style="text-align:left;margin-top:8px;margin-bottom:4px"><strong style="color:var(--fem-section-title)">3. Modos incompatibles (Ec. 6.13, Wilson 1971):</strong></div>
          <div>${z("N", "5")} = 1 \u2212 \u03BE\xB2 &nbsp;&nbsp; ${z("N", "6")} = 1 \u2212 \u03B7\xB2</div>
          <div style="margin-top:4px">${z("u", "x")} = \u03A3${z("N", "i")}\xB7${z("u", "xi")} + \u03B1\u2081\xB7${z("N", "5")} + \u03B1\u2082\xB7${z("N", "6")} &nbsp;<sub style="color:var(--fem-label)">(Ec. 6.12)</sub></div>
          <div>${z("u", "y")} = \u03A3${z("N", "i")}\xB7${z("u", "yi")} + \u03B1\u2083\xB7${z("N", "5")} + \u03B1\u2084\xB7${z("N", "6")}</div>

          <div style="text-align:left;margin-top:8px;margin-bottom:4px"><strong style="color:var(--fem-section-title)">4. Deformaci\xF3n-desplazamiento (Ec. 6.3):</strong></div>
          <div>${z("d")} = [${z("B", "C")} &nbsp; ${z("B", "I")}] \xB7 [${z("u")} &nbsp; \u03B1]<sup>T</sup></div>

          <div style="text-align:left;margin-top:8px;margin-bottom:4px"><strong style="color:var(--fem-section-title)">5. Submatrices de rigidez (Ec. 6.9):</strong></div>
          <div>${z("k", "CC")} = \u222B${z("B", "C")}<sup>T</sup>\xB7${z("E")}\xB7${z("B", "C")} dV &nbsp;<sub style="color:var(--fem-label)">(8\xD78 est\xE1ndar)</sub></div>
          <div>${z("k", "CI")} = \u222B${z("B", "C")}<sup>T</sup>\xB7${z("E")}\xB7${z("B\u0304", "I")} dV &nbsp;<sub style="color:var(--fem-label)">(8\xD74 acoplamiento)</sub></div>
          <div>${z("k", "II")} = \u222B${z("B\u0304", "I")}<sup>T</sup>\xB7${z("E")}\xB7${z("B\u0304", "I")} dV &nbsp;<sub style="color:var(--fem-label)">(4\xD74 modos internos)</sub></div>

          <div style="text-align:left;margin-top:8px;margin-bottom:4px"><strong style="color:var(--fem-section-title)">6. Condensaci\xF3n est\xE1tica (Ec. 6.11):</strong></div>
          <div style="font-size:13px"><span class="highlight">${z("k", "C")} = ${z("k", "CC")} \u2212 ${z("k", "CI")} \xB7 ${z("k", "II")}\u207B\xB9 \xB7 ${z("k", "IC")}</span></div>
          <div style="margin-top:4px;color:var(--fem-eq-sub)">Los 4 modos incompatibles \u03B1 se eliminan antes del ensamblaje global</div>

          <div style="text-align:left;margin-top:8px;margin-bottom:4px"><strong style="color:var(--fem-section-title)">7. Correcci\xF3n de Taylor (Ec. 6.7):</strong></div>
          <div>${z("B\u0304", "I")} = ${z("B", "I")} + ${z("B", "IC")} &nbsp; donde &nbsp; ${z("B", "IC")} = \u2212${De("1", "V")}\u222B${z("B", "I")} dV</div>
          <div style="color:var(--fem-eq-sub)">Jacobiano del centro para modos incompatibles \u2192 pasa patch test</div>

          <div style="text-align:left;margin-top:8px;margin-bottom:4px"><strong style="color:var(--fem-section-title)">8. Drilling DOF (Hughes-Brezzi 1989):</strong></div>
          <div>${z("K", "drill")} = \u03B1\xB7${z("G")}\xB7${z("t")} \xB7 \u222B${z("B", "d")}<sup>T</sup>\xB7${z("B", "d")} dA &nbsp; donde \u03B1 = 0.5</div>
          <div>${z("B", "d")}[i] = \u03B8<sub>z,i</sub> \u2212 \xBD\xB7(\u2202v/\u2202x \u2212 \u2202u/\u2202y) &nbsp;<sub style="color:var(--fem-label)">(rotaci\xF3n antisim\xE9trica)</sub></div>

          <div style="text-align:left;margin-top:8px;margin-bottom:4px"><strong style="color:var(--fem-section-title)">9. Placa Mindlin-Reissner + MITC4:</strong></div>
          <div>${z("D", "b")} = ${De(z("E") + "\xB7" + z("t") + "\xB3", "12\xB7(1\u2212\u03BD\xB2)")} = <span class="highlight">${$e(x * u ** 3 / (12 * (1 - I ** 2)))}</span></div>
          <div>${z("D", "s")} = \u03BA\xB7${z("G")}\xB7${z("t")} = <span class="highlight">${$e(5 / 6 * L * u)}</span> &nbsp; <sub style="color:var(--fem-label)">\u03BA = 5/6</sub></div>
          <div style="color:var(--fem-eq-sub)">MITC4: interpolaci\xF3n de cortante en puntos de atado (tying points)</div>

          <div style="text-align:left;margin-top:8px;margin-bottom:4px"><strong style="color:var(--fem-section-title)">10. Ensamblaje final:</strong></div>
          <div>${z("K", "24\xD724")} = ${z("K", "membrana")}(8\xD78) + ${z("K", "flexi\xF3n")}(12\xD712) + ${z("K", "drilling")}(12\xD712)</div>
          <div style="color:var(--fem-eq-sub)">DOFs por nodo: [u, v, w, \u03B8x, \u03B8y, \u03B8z]</div>
        </div>`);
      }
      let r = "", c = "", m = "", M = "", w = "", y = "", f = "", h = "", T = null, k = null, $ = null, C = [];
      try {
        if (T = In(s, a, t), k = kn(s), $ = po(us(k), po(T, k)), C = d ? [
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
          const L = Bo(wo(s[1], s[0])), R = ((_o2 = a.elasticities) == null ? void 0 : _o2.get(t)) ?? 0, D = ((_p = a.areas) == null ? void 0 : _p.get(t)) ?? 0, b = ((_q = a.momentsOfInertiaZ) == null ? void 0 : _q.get(t)) ?? 0, S = ((_r = a.momentsOfInertiaY) == null ? void 0 : _r.get(t)) ?? 0, v = ((_s2 = a.shearModuli) == null ? void 0 : _s2.get(t)) ?? 0, P = ((_t2 = a.torsionalConstants) == null ? void 0 : _t2.get(t)) ?? 0;
          M = Ha(R, D, b, S, v, P, L);
        }
        w = ja(s), y = Wa(), f = Ya(l), h = Ga(d);
        const x = '<button class="fem-expand-btn" data-full="kLocal">\u26F6 Ver completa</button>', u = '<button class="fem-expand-btn" data-full="T">\u26F6 Ver completa</button>', I = '<button class="fem-expand-btn" data-full="kGlobal">\u26F6 Ver completa</button>';
        r = `<div class="matrix-label">k_local (${T.length}\xD7${T.length}) ${x}</div>${Qn(T, C)}`, c = `<div class="matrix-label">T \u2014 Transformaci\xF3n (${k.length}\xD7${k.length}) ${u}</div>${Qn(k, C)}`, m = `<div class="matrix-label">K_global = T^T \xB7 k \xB7 T ${I}</div>${Qn($, C)}`;
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
          const L = ((_a3 = i.deformations) == null ? void 0 : _a3.get(u)) || [
            0,
            0,
            0,
            0,
            0,
            0
          ], R = x.map((D, b) => `<span class="prop-key">${D}</span>: <span class="${Math.abs(L[b]) > 1e-10 ? "result-val" : ""}">${$e(L[b])}</span>`).join(" &nbsp;");
          return `<div style="margin-bottom:2px"><strong>Nodo ${u}:</strong> ${R}</div>`;
        }).join("");
      }
      if (p && d && (i == null ? void 0 : i.deformations) && T && k) {
        const x = (_u = p.normals) == null ? void 0 : _u.get(t), u = (_v = p.shearsY) == null ? void 0 : _v.get(t), I = (_w = p.shearsZ) == null ? void 0 : _w.get(t), L = (_x = p.torsions) == null ? void 0 : _x.get(t), R = (_y = p.bendingsY) == null ? void 0 : _y.get(t), D = (_z = p.bendingsZ) == null ? void 0 : _z.get(t), b = [
          "ux",
          "uy",
          "uz",
          "\u03B8x",
          "\u03B8y",
          "\u03B8z"
        ], S = [];
        for (const K of l) {
          const V = ((_A = i.deformations) == null ? void 0 : _A.get(K)) || [
            0,
            0,
            0,
            0,
            0,
            0
          ];
          S.push(...V);
        }
        let v = [];
        try {
          v = po(k, S);
        } catch {
          v = new Array(12).fill(0);
        }
        let P = [];
        try {
          P = po(T, v);
        } catch {
          P = new Array(12).fill(0);
        }
        const X = (K, V) => K.map((ce, re) => `<span style="color:${Math.abs(ce) > 1e-10 ? "var(--fem-nonzero)" : "var(--fem-eq-dots)"}">${V[re % 6]}=${$e(ce)}</span>`).join(", "), ae = [
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
        ].map((K, V) => `${K}${V < 6 ? "\u1D62" : "\u2C7C"}`);
        `${z("u", "global")}${l.map((K, V) => `<span style="color:var(--fem-label)">nodo ${K}:</span> ${b.map((ce, re) => `<span style="color:${Math.abs(S[V * 6 + re]) > 1e-10 ? "var(--fem-eq-var)" : "var(--fem-eq-dots)"}">${$e(S[V * 6 + re])}</span>`).join(", ")}`).join(" | ")}${z("u", "local")}${z("T")}${z("u", "global")}${z("u", "local")}${X(v, [
          ...b,
          ...b
        ])}${z("f", "local")}${z("k", "local")}${z("u", "local")}${z("f", "local")}${P.map((K, V) => `<span style="color:${Math.abs(K) > 1e-10 ? "var(--fem-nonzero)" : "var(--fem-eq-dots)"}">${ae[V]}=${$e(K)}</span>`).join(", ")}${z("P", "1")}${z("N", "i")}${$e(P[0])}${z("P", "7")}${z("N", "j")}${$e(P[6])}${z("P", "2")}${z("V", "y,i")}${$e(P[1])}${z("P", "8")}${z("V", "y,j")}${$e(P[7])}${z("P", "3")}${z("V", "z,i")}${$e(P[2])}${z("P", "9")}${z("V", "z,j")}${$e(P[8])}${z("P", "4")}${z("M", "x,i")}${$e(P[3])}${z("P", "10")}${z("M", "x,j")}${$e(P[9])}${z("P", "5")}${z("M", "y,i")}${$e(P[4])}${z("P", "11")}${z("M", "y,j")}${$e(P[10])}${z("P", "6")}${z("M", "z,i")}${$e(P[5])}${z("P", "12")}${z("M", "z,j")}${$e(P[11])}${x ? x.map((K) => $e(K)).join(", ") : "\u2014"}${u ? u.map((K) => $e(K)).join(", ") : "\u2014"}${I ? I.map((K) => $e(K)).join(", ") : "\u2014"}${L ? L.map((K) => $e(K)).join(", ") : "\u2014"}${R ? R.map((K) => $e(K)).join(", ") : "\u2014"}${D ? D.map((K) => $e(K)).join(", ") : "\u2014"}`;
      } else if (p && d) {
        const x = (_B = p.normals) == null ? void 0 : _B.get(t), u = (_C = p.shearsY) == null ? void 0 : _C.get(t), I = (_D = p.shearsZ) == null ? void 0 : _D.get(t), L = (_E = p.torsions) == null ? void 0 : _E.get(t), R = (_F = p.bendingsY) == null ? void 0 : _F.get(t), D = (_G = p.bendingsZ) == null ? void 0 : _G.get(t);
        `${x ? x.map((b) => $e(b)).join(", ") : "\u2014"}${u ? u.map((b) => $e(b)).join(", ") : "\u2014"}${I ? I.map((b) => $e(b)).join(", ") : "\u2014"}${L ? L.map((b) => $e(b)).join(", ") : "\u2014"}${R ? R.map((b) => $e(b)).join(", ") : "\u2014"}${D ? D.map((b) => $e(b)).join(", ") : "\u2014"}`;
      } else if (p && !d) {
        const x = (_H = p.bendingXX) == null ? void 0 : _H.get(t), u = (_I = p.bendingYY) == null ? void 0 : _I.get(t), I = (_J = p.bendingXY) == null ? void 0 : _J.get(t), L = (_K = p.membraneXX) == null ? void 0 : _K.get(t), R = (_L = p.membraneYY) == null ? void 0 : _L.get(t), D = (_M = p.membraneXY) == null ? void 0 : _M.get(t);
        `${x ? x.map((b) => $e(b)).join(", ") : "\u2014"}${u ? u.map((b) => $e(b)).join(", ") : "\u2014"}${I ? I.map((b) => $e(b)).join(", ") : "\u2014"}${L ? L.map((b) => $e(b)).join(", ") : "\u2014"}${R ? R.map((b) => $e(b)).join(", ") : "\u2014"}${D ? D.map((b) => $e(b)).join(", ") : "\u2014"}`;
      }
      `${l[0]}`, 6 * l[0], 6 * l[0] + 5, `${l[1]}`, 6 * l[1], 6 * l[1] + 5, l.length === 3 && (`${l[2]}`, 6 * l[2], 6 * l[2] + 5), o.length * 6, o.length * 6, so = Tl(t, o, n, a, i, p), so.id = "fem-inspect-panel", document.body.appendChild(so), (_N = so.querySelector("#er-close")) == null ? void 0 : _N.addEventListener("click", () => Fo()), (_O = so.querySelector("#rel-apply")) == null ? void 0 : _O.addEventListener("click", () => {
        const x = so.querySelectorAll("input[data-rel]"), u = so.querySelectorAll("input[data-spr]"), I = new Array(12).fill(false), L = new Array(12).fill(0);
        x.forEach((D) => {
          I[parseInt(D.dataset.rel)] = D.checked;
        }), u.forEach((D) => {
          const b = parseFloat(D.value);
          b > 0 && (L[parseInt(D.dataset.spr)] = b);
        }), a.momentReleases || (a.momentReleases = /* @__PURE__ */ new Map()), a.partialFixitySprings || (a.partialFixitySprings = /* @__PURE__ */ new Map()), I.some((D) => D) ? a.momentReleases.set(t, I) : a.momentReleases.delete(t), L.some((D) => D > 0) ? a.partialFixitySprings.set(t, L) : a.partialFixitySprings.delete(t), console.log(`Releases elem ${t}:`, I.map((D, b) => D ? relIds[b] : "").filter(Boolean).join(" ") || "none"), console.log(`Springs elem ${t}:`, L);
        const R = so.querySelector("#rel-apply");
        R.textContent = "\u2713 Aplicado", R.style.background = "#4caf50", setTimeout(() => {
          R.textContent = "Aplicar", R.style.background = "var(--fem-heading)";
        }, 1500);
      });
      const _ = d ? (() => {
        var _a3, _b2, _c2, _d2, _e3, _f2;
        const x = Bo(wo(s[1], s[0])), u = ((_a3 = a.elasticities) == null ? void 0 : _a3.get(t)) ?? 0, I = ((_b2 = a.areas) == null ? void 0 : _b2.get(t)) ?? 0, L = ((_c2 = a.momentsOfInertiaZ) == null ? void 0 : _c2.get(t)) ?? 0, R = ((_d2 = a.momentsOfInertiaY) == null ? void 0 : _d2.get(t)) ?? 0, D = ((_e3 = a.shearModuli) == null ? void 0 : _e3.get(t)) ?? 0, b = ((_f2 = a.torsionalConstants) == null ? void 0 : _f2.get(t)) ?? 0;
        return Va(u, I, L, R, D, b, x);
      })() : void 0;
      so.querySelectorAll("[data-full]").forEach((x) => {
        x.addEventListener("click", (u) => {
          u.stopPropagation();
          const I = x.dataset.full;
          if (I === "kLocal" && T) {
            const L = d ? Vs() : "<em>Shell 18\xD718 \u2014 ver tabla num\xE9rica</em>";
            ts(`Elemento ${t} \u2014 Rigidez Local k_local`, L, es(T, C), _);
          } else if (I === "T" && k) ts(`Elemento ${t} \u2014 Transformaci\xF3n T`, w, es(k, C));
          else if (I === "kGlobal" && $) {
            const L = d ? Vs() : "<em>Shell 18\xD718</em>";
            ts(`Elemento ${t} \u2014 Rigidez Global K = T^T \xB7 k \xB7 T`, L, es($, C), _);
          }
        });
      });
    }
    function Xs() {
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
          for (let _ = 0; _ < 4; _++) s.push([
            C + _,
            $ + _
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
      const p = 2e8, r = 77e6, c = 5e-3, m = 2e-6, M = 1e-6, w = {
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
          M
        ]))
      };
      e.elementInputs && (e.elementInputs.val = w);
      try {
        const y = Ft(l, s, {
          supports: d,
          loads: i
        }, w);
        y && e.deformOutputs && (e.deformOutputs.val = y);
      } catch (y) {
        console.warn("Eiffel deform:", y.message);
      }
      setTimeout(() => It(), 50), nt(), console.log(`Torre Eiffel: ${l.length} nodos, ${s.length} elementos, H=30m`);
    }
    function Us() {
      const l = [], s = [];
      for (let w = 0; w <= 20; w++) {
        const y = w / 20, f = 20 * y, h = 20 * (1 - Math.pow(2 * y - 1, 2)), T = 2;
        l.push([
          f,
          -T / 2,
          h
        ]), l.push([
          f,
          T / 2,
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
      e.nodes.val = l, e.elements.val = s, e.nodeInputs && (e.nodeInputs.val = {
        supports: d,
        loads: a
      });
      const i = 2e8, p = 77e6, r = 0.01, c = 5e-6, m = 2e-6, M = {
        elasticities: new Map(s.map((w, y) => [
          y,
          i
        ])),
        shearModuli: new Map(s.map((w, y) => [
          y,
          p
        ])),
        areas: new Map(s.map((w, y) => [
          y,
          r
        ])),
        momentsOfInertiaZ: new Map(s.map((w, y) => [
          y,
          c
        ])),
        momentsOfInertiaY: new Map(s.map((w, y) => [
          y,
          c
        ])),
        torsionalConstants: new Map(s.map((w, y) => [
          y,
          m
        ]))
      };
      e.elementInputs && (e.elementInputs.val = M);
      try {
        const w = Ft(l, s, {
          supports: d,
          loads: a
        }, M);
        w && e.deformOutputs && (e.deformOutputs.val = w);
      } catch (w) {
        console.warn("Arco:", w.message);
      }
      setTimeout(() => It(), 50), nt(), console.log(`Arco Gateway: ${l.length} nodos, ${s.length} elem, span=20m, H=20m`);
    }
    function Ks() {
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
      const M = 2e8, w = 77e6, y = {
        elasticities: new Map(a.map((f, h) => [
          h,
          M
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
      e.elementInputs && (e.elementInputs.val = y);
      try {
        const f = Ft(d, a, {
          supports: c,
          loads: m
        }, y);
        f && e.deformOutputs && (e.deformOutputs.val = f);
      } catch (f) {
        console.warn("Puente:", f.message);
      }
      setTimeout(() => It(), 50), nt(), console.log(`Puente atirantado: ${d.length} nodos, ${a.length} elem, span=60m`);
    }
    function Zs() {
      const d = [], a = [];
      for (let h = 0; h <= 12; h++) {
        const T = h * 3.5, k = h * 5 * Math.PI / 180;
        for (let $ = 0; $ < 6; $++) {
          const C = k + 2 * Math.PI * $ / 6, _ = 5 * Math.cos(C), x = 5 * Math.sin(C);
          d.push([
            _,
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
      const c = 2e8, m = 77e6, M = 8e-3, w = 1e-5, y = 5e-6, f = {
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
          M
        ])),
        momentsOfInertiaZ: new Map(a.map((h, T) => [
          T,
          w
        ])),
        momentsOfInertiaY: new Map(a.map((h, T) => [
          T,
          w
        ])),
        torsionalConstants: new Map(a.map((h, T) => [
          T,
          y
        ]))
      };
      e.elementInputs && (e.elementInputs.val = f);
      try {
        const h = Ft(d, a, {
          supports: p,
          loads: r
        }, f);
        h && e.deformOutputs && (e.deformOutputs.val = h);
      } catch (h) {
        console.warn("Twisted:", h.message);
      }
      setTimeout(() => It(), 50), nt(), console.log(`Torre Twist: ${d.length} nodos, ${a.length} elem, 12 pisos, twist=5deg/piso`);
    }
    function Qs() {
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
          const _ = C * 2 * Math.PI / 3 - Math.PI / 2, x = k * Math.cos(_), u = k * Math.sin(_), I = s.length;
          s.push([
            x,
            u,
            T
          ]), d.push([
            $,
            I
          ]);
          const L = s.length;
          s.push([
            x * 0.5,
            u * 0.5,
            T
          ]), d.push([
            $,
            L
          ]), d.push([
            L,
            I
          ]);
        }
        for (let C = 0; C < 3; C++) {
          const _ = $ + 1 + C * 2, x = $ + 1 + (C + 1) % 3 * 2;
          d.push([
            _,
            x
          ]);
        }
        if (f < 20) {
          const _ = $ + 7;
          d.push([
            $,
            _
          ]);
          for (let x = 0; x < 3; x++) d.push([
            $ + 1 + x * 2,
            _ + 1 + x * 2
          ]), d.push([
            $ + 2 + x * 2,
            _ + 2 + x * 2
          ]), d.push([
            $ + 1 + x * 2,
            _ + 2 + x * 2
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
      const r = 35e6, c = 14e6, m = 0.02, M = 5e-5, w = 2e-5, y = {
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
          M
        ])),
        momentsOfInertiaY: new Map(d.map((f, h) => [
          h,
          M
        ])),
        torsionalConstants: new Map(d.map((f, h) => [
          h,
          w
        ]))
      };
      e.elementInputs && (e.elementInputs.val = y);
      try {
        const f = Ft(s, d, {
          supports: a,
          loads: p
        }, y);
        f && e.deformOutputs && (e.deformOutputs.val = f);
      } catch (f) {
        console.warn("Burj:", f.message);
      }
      setTimeout(() => It(), 50), nt(), console.log(`Burj Khalifa: ${s.length} nodos, ${d.length} elem, 20 pisos, H=${20 * 3}m`);
    }
    function ea() {
      const t = [], o = [];
      for (let m = 0; m < 3; m++) {
        const M = m * 12, w = 15 - m * 2, y = 20 - m * 3, f = 8 - m, h = t.length;
        for (let k = 0; k <= 4; k++) {
          const $ = k / 4, C = -f / 2 + f * $, _ = y * (1 - $ * $ * 0.3);
          for (let x = 0; x <= 12; x++) {
            const u = x / 12, I = M + _ * u, L = w * Math.sin(Math.PI * u) * (1 - $ * $ * 0.5), R = C;
            t.push([
              I,
              R,
              L
            ]);
          }
        }
        const T = 13;
        for (let k = 0; k < 4; k++) for (let $ = 0; $ < 12; $++) {
          const C = h + k * T + $, _ = h + k * T + $ + 1, x = h + (k + 1) * T + $ + 1, u = h + (k + 1) * T + $;
          o.push([
            C,
            _,
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
        elasticities: new Map(o.map((m, M) => [
          M,
          a
        ])),
        poissonsRatios: new Map(o.map((m, M) => [
          M,
          i
        ])),
        thicknesses: new Map(o.map((m, M) => [
          M,
          p
        ])),
        shearModuli: new Map(o.map((m, M) => [
          M,
          r
        ]))
      };
      e.elementInputs && (e.elementInputs.val = c);
      try {
        const m = Ft(t, o, {
          supports: s,
          loads: d
        }, c);
        m && e.deformOutputs && (e.deformOutputs.val = m);
      } catch (m) {
        console.warn("Opera:", m.message);
      }
      setTimeout(() => It(), 50), nt(), console.log(`Sydney Opera: ${t.length} nodos, ${o.length} shells Q4, 3 velas`);
    }
    function ta() {
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
      const p = 2e8, r = 77e6, c = 6e-3, m = 8e-6, M = 4e-6, w = {
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
          M
        ]))
      };
      e.elementInputs && (e.elementInputs.val = w);
      try {
        const y = Ft(l, s, {
          supports: a,
          loads: i
        }, w);
        y && e.deformOutputs && (e.deformOutputs.val = y);
      } catch (y) {
        console.warn("Diagrid:", y.message);
      }
      setTimeout(() => It(), 50), nt(), console.log(`Diagrid Tower: ${l.length} nodos, ${s.length} elem, 15 pisos, H=${15 * 3.5}m`);
    }
    function os() {
      var _a2, _b, _c, _d, _e2, _f, _g, _h;
      const t = ((_a2 = Y.W) == null ? void 0 : _a2.val) ?? 5, o = ((_b = Y.H) == null ? void 0 : _b.val) ?? 3, n = ((_c = Y.t) == null ? void 0 : _c.val) ?? 0.2, l = Math.round(((_d = Y.nx) == null ? void 0 : _d.val) ?? 8), s = Math.round(((_e2 = Y.ny) == null ? void 0 : _e2.val) ?? 6), d = ((_f = Y.E) == null ? void 0 : _f.val) ?? 25e6, a = ((_g = Y.nu) == null ? void 0 : _g.val) ?? 0.2, i = ((_h = Y.P) == null ? void 0 : _h.val) ?? 100, p = d / (2 * (1 + a)), r = t / l, c = o / s, m = [], M = [], w = /* @__PURE__ */ new Map(), y = /* @__PURE__ */ new Map();
      for (let $ = 0; $ <= s; $++) for (let C = 0; C <= l; C++) m.push([
        C * r,
        0,
        $ * c
      ]);
      const f = l + 1;
      for (let $ = 0; $ < s; $++) for (let C = 0; C < l; C++) M.push([
        $ * f + C,
        $ * f + C + 1,
        ($ + 1) * f + C + 1,
        ($ + 1) * f + C
      ]);
      for (let $ = 0; $ <= l; $++) w.set($, [
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
      e.nodes.val = m, e.elements.val = M, e.nodeInputs && (e.nodeInputs.val = {
        supports: w,
        loads: y
      });
      const k = {
        elasticities: new Map(M.map(($, C) => [
          C,
          d
        ])),
        poissonsRatios: new Map(M.map(($, C) => [
          C,
          a
        ])),
        thicknesses: new Map(M.map(($, C) => [
          C,
          n
        ])),
        shearModuli: new Map(M.map(($, C) => [
          C,
          p
        ])),
        densities: new Map(M.map(($, C) => [
          C,
          24 / 9.80665
        ]))
      };
      e.elementInputs && (e.elementInputs.val = k);
      try {
        const $ = Ft(m, M, {
          supports: w,
          loads: y
        }, k);
        if ($ && e.deformOutputs) {
          e.deformOutputs.val = $;
          const C = $o(m, M, k, $);
          e.analyzeOutputs && (e.analyzeOutputs.val = C);
          const _ = s * f + Math.floor(l / 2), x = $.deformations.get(_), u = x ? x[0] : 0;
          console.log(`Muro Q4: Ux=${u.toExponential(4)} m | OS:4.602e-5 | SAP:4.629e-5 | ETABS:4.582e-5`);
        }
      } catch ($) {
        console.warn("MuroQ4:", $.message);
      }
      setTimeout(() => It(), 50), nt();
    }
    function oa() {
      var _a2, _b, _c, _d, _e2, _f, _g, _h;
      const t = ((_a2 = Y.L) == null ? void 0 : _a2.val) ?? 6, o = ((_b = Y.h) == null ? void 0 : _b.val) ?? 0.5, n = ((_c = Y.t) == null ? void 0 : _c.val) ?? 0.2, l = Math.round(((_d = Y.nx) == null ? void 0 : _d.val) ?? 12), s = Math.round(((_e2 = Y.ny) == null ? void 0 : _e2.val) ?? 4), d = ((_f = Y.E) == null ? void 0 : _f.val) ?? 25e6, a = ((_g = Y.nu) == null ? void 0 : _g.val) ?? 0.2, i = ((_h = Y.P) == null ? void 0 : _h.val) ?? 50, p = d / (2 * (1 + a)), r = t / l, c = o / s, m = [], M = [], w = /* @__PURE__ */ new Map(), y = /* @__PURE__ */ new Map();
      for (let k = 0; k <= s; k++) for (let $ = 0; $ <= l; $++) m.push([
        $ * r,
        0,
        k * c
      ]);
      const f = l + 1;
      for (let k = 0; k < s; k++) for (let $ = 0; $ < l; $++) M.push([
        k * f + $,
        k * f + $ + 1,
        (k + 1) * f + $ + 1,
        (k + 1) * f + $
      ]);
      for (let k = 0; k <= s; k++) w.set(k * f, [
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
      ]), e.nodes.val = m, e.elements.val = M, e.nodeInputs && (e.nodeInputs.val = {
        supports: w,
        loads: y
      });
      const T = {
        elasticities: new Map(M.map((k, $) => [
          $,
          d
        ])),
        poissonsRatios: new Map(M.map((k, $) => [
          $,
          a
        ])),
        thicknesses: new Map(M.map((k, $) => [
          $,
          n
        ])),
        shearModuli: new Map(M.map((k, $) => [
          $,
          p
        ])),
        densities: new Map(M.map((k, $) => [
          $,
          24 / 9.80665
        ]))
      };
      e.elementInputs && (e.elementInputs.val = T);
      try {
        const k = Ft(m, M, {
          supports: w,
          loads: y
        }, T);
        if (k && e.deformOutputs) {
          e.deformOutputs.val = k;
          const $ = $o(m, M, T, k);
          e.analyzeOutputs && (e.analyzeOutputs.val = $);
          const C = k.deformations.get(h), _ = C ? C[2] : 0, x = n * o * o * o / 12, u = i * t * t * t / (3 * d * x);
          console.log(`Viga Q4: Uz_tip=${_.toExponential(4)} | Analitico=${u.toExponential(4)} | ratio=${(Math.abs(_) / u).toFixed(4)}`);
        }
      } catch (k) {
        console.warn("VigaQ4:", k.message);
      }
      setTimeout(() => It(), 50), nt();
    }
    function na() {
      var _a2, _b, _c, _d, _e2, _f, _g, _h;
      const t = ((_a2 = Y.Lx) == null ? void 0 : _a2.val) ?? 4, o = ((_b = Y.Ly) == null ? void 0 : _b.val) ?? 2, n = ((_c = Y.t) == null ? void 0 : _c.val) ?? 0.15, l = Math.round(((_d = Y.nx) == null ? void 0 : _d.val) ?? 8), s = Math.round(((_e2 = Y.ny) == null ? void 0 : _e2.val) ?? 4), d = ((_f = Y.E) == null ? void 0 : _f.val) ?? 25e6, a = ((_g = Y.nu) == null ? void 0 : _g.val) ?? 0.2, i = ((_h = Y.P) == null ? void 0 : _h.val) ?? 20, p = d / (2 * (1 + a)), r = t / l, c = o / s, m = [], M = [], w = /* @__PURE__ */ new Map(), y = /* @__PURE__ */ new Map();
      for (let $ = 0; $ <= s; $++) for (let C = 0; C <= l; C++) m.push([
        C * r,
        0,
        $ * c
      ]);
      const f = l + 1;
      for (let $ = 0; $ < s; $++) for (let C = 0; C < l; C++) M.push([
        $ * f + C,
        $ * f + C + 1,
        ($ + 1) * f + C + 1,
        ($ + 1) * f + C
      ]);
      for (let $ = 0; $ <= s; $++) w.set($ * f, [
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
      e.nodes.val = m, e.elements.val = M, e.nodeInputs && (e.nodeInputs.val = {
        supports: w,
        loads: y
      });
      const k = {
        elasticities: new Map(M.map(($, C) => [
          C,
          d
        ])),
        poissonsRatios: new Map(M.map(($, C) => [
          C,
          a
        ])),
        thicknesses: new Map(M.map(($, C) => [
          C,
          n
        ])),
        shearModuli: new Map(M.map(($, C) => [
          C,
          p
        ])),
        densities: new Map(M.map(($, C) => [
          C,
          24 / 9.80665
        ]))
      };
      e.elementInputs && (e.elementInputs.val = k);
      try {
        const $ = Ft(m, M, {
          supports: w,
          loads: y
        }, k);
        if ($ && e.deformOutputs) {
          e.deformOutputs.val = $;
          const C = $o(m, M, k, $);
          e.analyzeOutputs && (e.analyzeOutputs.val = C);
          const _ = (s / 2 | 0) * f + l, x = $.deformations.get(_), u = x ? x[1] : 0;
          console.log(`Placa XY Q4: Uy_tip=${u.toExponential(4)} m`);
        }
      } catch ($) {
        console.warn("PlacaXY:", $.message);
      }
      setTimeout(() => It(), 50), nt();
    }
    function sa() {
      var _a2, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l2, _m, _n2, _o2, _p, _q, _r, _s2, _t2, _u, _v, _w, _x, _y;
      const t = E, o = ((_a2 = Y.Lx) == null ? void 0 : _a2.val) ?? 5.5, n = ((_b = Y.Ly) == null ? void 0 : _b.val) ?? 8, l = ((_c = Y.H1) == null ? void 0 : _c.val) ?? 3, s = ((_d = Y.H2) == null ? void 0 : _d.val) ?? 4, d = Math.round(((_e2 = Y.nCol) == null ? void 0 : _e2.val) ?? 4), a = Math.round(((_f = Y.nCorr) == null ? void 0 : _f.val) ?? 8), i = ((_g = Y.E) == null ? void 0 : _g.val) ?? t.E, p = ((_h = Y.t) == null ? void 0 : _h.val) ?? 5e-4, r = ((_i = Y.q) == null ? void 0 : _i.val) ?? 1, c = (((_j = Y.supUx) == null ? void 0 : _j.val) ?? 1) >= 0.5, m = (((_k = Y.supUy) == null ? void 0 : _k.val) ?? 1) >= 0.5, M = (((_l2 = Y.supUz) == null ? void 0 : _l2.val) ?? 1) >= 0.5, w = (((_m = Y.supRx) == null ? void 0 : _m.val) ?? 1) >= 0.5, y = (((_n2 = Y.supRy) == null ? void 0 : _n2.val) ?? 1) >= 0.5, f = (((_o2 = Y.supRz) == null ? void 0 : _o2.val) ?? 1) >= 0.5, h = ((_p = Y.colD) == null ? void 0 : _p.val) ?? 0.16, T = ((_q = Y.colBf) == null ? void 0 : _q.val) ?? 0.16, k = ((_r = Y.colTf) == null ? void 0 : _r.val) ?? 0.013, $ = ((_s2 = Y.colTw) == null ? void 0 : _s2.val) ?? 8e-3, C = ((_t2 = Y.vigD) == null ? void 0 : _t2.val) ?? 0.2, _ = ((_u = Y.vigBf) == null ? void 0 : _u.val) ?? 0.1, x = ((_v = Y.vigTf) == null ? void 0 : _v.val) ?? 85e-4, u = ((_w = Y.vigTw) == null ? void 0 : _w.val) ?? 56e-4, I = ((_x = Y.corrB) == null ? void 0 : _x.val) ?? 0.06, L = ((_y = Y.corrT) == null ? void 0 : _y.val) ?? 4e-3, R = 0.3, D = i / (2 * (1 + R));
      function b(Fe, Ye, Qe, et) {
        const Yt = Fe - 2 * Qe, Ro = 2 * Ye * Qe + Yt * et, ln = (Ye * Fe * Fe * Fe - (Ye - et) * Yt * Yt * Yt) / 12, rn = (2 * Qe * Ye * Ye * Ye + Yt * et * et * et) / 12, bn = (2 * Ye * Qe * Qe * Qe + Yt * et * et * et) / 3;
        return {
          A: Ro,
          Iz: ln,
          Iy: rn,
          J: bn
        };
      }
      const S = b(h, T, k, $), v = b(C, _, x, u), P = I * I - (I - 2 * L) * (I - 2 * L), X = (I ** 4 - (I - 2 * L) ** 4) / 12, G = X, ae = 2 * L * (I - L) ** 2 * (I - L) ** 2 / (2 * (I - L) + 2 * (I - L)), K = 3, V = [
        0,
        o / 2,
        o
      ], ce = [];
      for (let Fe = 0; Fe < d; Fe++) ce.push(Fe * n / (d - 1));
      const re = /* @__PURE__ */ new Set();
      for (const Fe of ce) re.add(Fe);
      for (let Fe = 0; Fe < a; Fe++) re.add(Fe * n / (a - 1));
      const ye = Array.from(re).sort((Fe, Ye) => Fe - Ye), Te = ye.length;
      function N(Fe) {
        return l + (s - l) * Fe / n;
      }
      const ie = [], te = [], de = [], Z = [];
      for (let Fe = 0; Fe < K; Fe++) {
        const Ye = [];
        for (let et = 0; et < d; et++) Ye.push(ie.length), ie.push([
          V[Fe],
          ce[et],
          0
        ]);
        de.push(Ye);
        const Qe = [];
        for (let et = 0; et < Te; et++) Qe.push(ie.length), ie.push([
          V[Fe],
          ye[et],
          N(ye[et])
        ]);
        Z.push(Qe);
      }
      const ue = /* @__PURE__ */ new Map(), Me = /* @__PURE__ */ new Map(), oe = /* @__PURE__ */ new Map(), Ee = /* @__PURE__ */ new Map(), He = /* @__PURE__ */ new Map(), at = /* @__PURE__ */ new Map(), rt = /* @__PURE__ */ new Map(), wt = /* @__PURE__ */ new Map(), Tt = /* @__PURE__ */ new Map(), Et = t.rho ?? 7850;
      for (let Fe = 0; Fe < K; Fe++) for (let Ye = 0; Ye < d; Ye++) {
        const Qe = ye.indexOf(ce[Ye]);
        if (Qe < 0) continue;
        const et = te.length;
        te.push([
          de[Fe][Ye],
          Z[Fe][Qe]
        ]), ue.set(et, i), Me.set(et, D), oe.set(et, S.A), Ee.set(et, S.Iy), He.set(et, S.Iz), at.set(et, S.J), Tt.set(et, Et), rt.set(et, {
          type: "I",
          d: h,
          bf: T,
          tf: k,
          tw: $,
          name: "Col"
        });
        const Yt = new Array(12).fill(false);
        Yt[10] = true, Yt[11] = true, wt.set(et, Yt);
      }
      for (let Fe = 0; Fe < K; Fe++) for (let Ye = 0; Ye < Te - 1; Ye++) {
        const Qe = te.length;
        te.push([
          Z[Fe][Ye],
          Z[Fe][Ye + 1]
        ]), ue.set(Qe, i), Me.set(Qe, D), oe.set(Qe, v.A), Ee.set(Qe, v.Iy), He.set(Qe, v.Iz), at.set(Qe, v.J), Tt.set(Qe, Et), rt.set(Qe, {
          type: "I",
          d: C,
          bf: _,
          tf: x,
          tw: u,
          name: "Vig"
        });
      }
      te.length;
      for (let Fe = 0; Fe < Te; Fe++) for (let Ye = 0; Ye < K - 1; Ye++) {
        const Qe = te.length;
        te.push([
          Z[Ye][Fe],
          Z[Ye + 1][Fe]
        ]), ue.set(Qe, i), Me.set(Qe, D), oe.set(Qe, P), Ee.set(Qe, G), He.set(Qe, X), at.set(Qe, ae), Tt.set(Qe, Et), rt.set(Qe, {
          type: "rect",
          b: I,
          h: I,
          name: "Corr"
        });
        const et = new Array(12).fill(false);
        et[4] = true, et[5] = true, et[10] = true, et[11] = true, wt.set(Qe, et);
      }
      for (let Fe = 0; Fe < K - 1; Fe++) for (let Ye = 0; Ye < Te - 1; Ye++) {
        const Qe = te.length;
        te.push([
          Z[Fe][Ye],
          Z[Fe + 1][Ye],
          Z[Fe + 1][Ye + 1],
          Z[Fe][Ye + 1]
        ]), ue.set(Qe, i), Me.set(Qe, D), Tt.set(Qe, Et), ue.set(Qe, i);
      }
      const Ot = /* @__PURE__ */ new Map(), yo = [
        c,
        m,
        M,
        w,
        y,
        f
      ];
      for (let Fe = 0; Fe < K; Fe++) for (let Ye = 0; Ye < d; Ye++) Ot.set(de[Fe][Ye], yo);
      const to = /* @__PURE__ */ new Map();
      for (let Fe = 0; Fe < K; Fe++) for (let Ye = 0; Ye < Te; Ye++) {
        let Qe;
        Fe === 0 ? Qe = (V[1] - V[0]) / 2 : Fe === K - 1 ? Qe = (V[K - 1] - V[K - 2]) / 2 : Qe = (V[Fe + 1] - V[Fe - 1]) / 2;
        let et;
        Ye === 0 ? et = (ye[1] - ye[0]) / 2 : Ye === Te - 1 ? et = (ye[Te - 1] - ye[Te - 2]) / 2 : et = (ye[Ye + 1] - ye[Ye - 1]) / 2;
        const Yt = -r * Qe * et;
        to.set(Z[Fe][Ye], [
          0,
          0,
          Yt,
          0,
          0,
          0
        ]);
      }
      e.nodes.val = ie, e.elements.val = te, e.nodeInputs && (e.nodeInputs.val = {
        supports: Ot,
        loads: to
      });
      const Xt = te.filter((Fe) => Fe.length === 2).length, ot = {
        elasticities: ue,
        shearModuli: Me,
        areas: oe,
        momentsOfInertiaZ: Ee,
        momentsOfInertiaY: He,
        torsionalConstants: at,
        sectionShapes: rt,
        momentReleases: wt,
        densities: Tt
      }, yt = /* @__PURE__ */ new Map(), Ut = /* @__PURE__ */ new Map();
      for (let Fe = 0; Fe < te.length; Fe++) te[Fe].length === 4 && (yt.set(Fe, p), Ut.set(Fe, R));
      ot.thicknesses = yt, ot.poissonsRatios = Ut, e.elementInputs && (e.elementInputs.val = ot);
      try {
        const Fe = performance.now(), Ye = Ft(ie, te, {
          supports: Ot,
          loads: to
        }, ot), Qe = performance.now() - Fe;
        if (Ye && e.deformOutputs) {
          e.deformOutputs.val = Ye;
          const et = $o(ie, te, ot, Ye);
          e.analyzeOutputs && (e.analyzeOutputs.val = et);
          let Yt = 0, Ro = -1;
          Ye.deformations.forEach((ln, rn) => {
            Math.abs(ln[2]) > Math.abs(Yt) && (Yt = ln[2], Ro = rn);
          }), console.log(`P\xE9rgola: Uz_max=${Yt.toExponential(4)} m en nodo ${Ro} | ${Xt} frames + ${te.length - Xt} shells | ${Qe.toFixed(0)} ms`);
        }
      } catch (Fe) {
        console.warn("Pergola:", Fe.message);
      }
      const Pt = lt();
      Pt && (Pt.settings.shellResults.val = "displacementZ", Pt.settings.deformedShape.val = true), setTimeout(() => It(), 50), nt();
    }
    function Ja() {
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
    function Xa() {
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
        }, n = o("po-colB"), l = o("po-colH"), s = o("po-fc") * 1e3, d = o("po-fy") * 1e3, a = o("po-H"), i = o("po-L"), p = o("po-As") * 1e-4, r = o("po-nbar"), c = o("po-drift") / 100, m = o("po-ncycles"), M = t.querySelector("#pushover-status");
        M.textContent = "Generando historia de desplazamientos...";
        const w = [], y = c * a, f = 40;
        for (let h = 1; h <= m; h++) {
          const T = y * h / m;
          for (let k = 0; k <= f; k++) w.push(T * Math.sin(2 * Math.PI * k / f));
        }
        M.textContent = `Resolviendo pushover (${w.length} pasos)...`;
        try {
          const { cyclicPushover: h } = await ra(async () => {
            const { cyclicPushover: k } = await import("./cyclicPushoverCpp-9OuQqSct.js");
            return {
              cyclicPushover: k
            };
          }, __vite__mapDeps([7,6])), T = await h({
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
            dispHistory: w
          });
          M.textContent = `Completado: ${T.nSteps} pasos`, Ua(t.querySelector("#pushover-canvas"), T.displacements, T.forces, `Pushover: ${n * 100}x${l * 100}cm, f'c=${s / 1e3}MPa, Fy=${d / 1e3}MPa`);
        } catch (h) {
          M.textContent = `Error: ${h.message}`, console.error("Pushover failed:", h);
        }
      });
    }
    function Ua(t, o, n, l) {
      const s = t.getContext("2d");
      if (!s || o.length === 0) return;
      const d = t.width, a = t.height, i = {
        left: 55,
        right: 15,
        top: 30,
        bottom: 35
      }, p = d - i.left - i.right, r = a - i.top - i.bottom;
      s.fillStyle = "#111118", s.fillRect(0, 0, d, a);
      let c = Math.min(...o), m = Math.max(...o), M = Math.min(...n), w = Math.max(...n);
      c === m && (c -= 0.01, m += 0.01), M === w && (M -= 1, w += 1);
      const y = m - c, f = w - M, h = (C) => i.left + (C - c) / y * p, T = (C) => i.top + r - (C - M) / f * r;
      s.strokeStyle = "#333", s.lineWidth = 0.5, c < 0 && m > 0 && (s.strokeStyle = "#555", s.beginPath(), s.moveTo(h(0), i.top), s.lineTo(h(0), i.top + r), s.stroke()), M < 0 && w > 0 && (s.beginPath(), s.moveTo(i.left, T(0)), s.lineTo(i.left + p, T(0)), s.stroke()), s.strokeStyle = "#ff4444", s.lineWidth = 1.5, s.beginPath(), s.moveTo(h(o[0]), T(n[0]));
      for (let C = 1; C < o.length; C++) s.lineTo(h(o[C]), T(n[C]));
      s.stroke(), s.fillStyle = "#aaa", s.font = "11px monospace", s.textAlign = "center", s.fillText("Desplazamiento (m)", i.left + p / 2, a - 5), s.save(), s.translate(12, i.top + r / 2), s.rotate(-Math.PI / 2), s.fillText("Fuerza (kN)", 0, 0), s.restore(), s.fillStyle = "#ee9b00", s.font = "bold 11px monospace", s.textAlign = "center", s.fillText(l, d / 2, 15), s.fillStyle = "#888", s.font = "9px monospace", s.textAlign = "center";
      const k = y / 5;
      for (let C = 0; C <= 5; C++) {
        const _ = c + k * C;
        s.fillText((_ * 1e3).toFixed(1), h(_), a - i.bottom + 15);
      }
      s.textAlign = "right";
      const $ = f / 5;
      for (let C = 0; C <= 5; C++) {
        const _ = M + $ * C;
        s.fillText(_.toFixed(0), i.left - 5, T(_) + 3);
      }
    }
    let sn = null;
    function Ka() {
      if (sn) {
        sn.remove(), sn = null;
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
    `, document.body.appendChild(t), sn = t, t.querySelector("#nl-close").addEventListener("click", () => {
        t.remove(), sn = null;
      }), t.querySelector("#nl-test").addEventListener("click", () => Za(t));
    }
    function Za(t) {
      const o = parseFloat(t.querySelector("#nl-fy").value), n = parseFloat(t.querySelector("#nl-e0").value), l = parseFloat(t.querySelector("#nl-b").value), s = parseFloat(t.querySelector("#nl-r0").value), d = parseFloat(t.querySelector("#nl-amp").value), a = parseInt(t.querySelector("#nl-cycles").value), i = 100, p = [];
      for (let G = 0; G < a; G++) {
        const ae = d * (1 + G * 0.5);
        for (let K = 0; K < i; K++) {
          const V = K / i * 2 * Math.PI;
          p.push(ae * Math.sin(V));
        }
      }
      const r = o / n, c = l * n;
      let m = 0, M = 0, w = -r, y = r, f = 0, h = 0, T = 0, k = 0, $ = 0, C = 0;
      const _ = [];
      for (const G of p) {
        let ae = w, K = y, V = f, ce = h, re = T, ye = k, Te = $, N = C, ie;
        const te = G - m;
        if (Math.abs(te) < 1e-20) {
          _.push(M);
          continue;
        }
        if ((N === 0 || N === 3) && (te < 0 ? (N = 2, ce = -r, re = -o, V = ce, ye = 0, Te = 0) : (N = 1, ce = r, re = o, V = ce, ye = 0, Te = 0)), N === 2 && te > 0) {
          N = 1, ye = m, Te = M, m < ae && (ae = m);
          const Ee = (K - ae) / (2 * 1 * r), He = 1 + 0 * Math.pow(Ee, 0.8);
          ce = (o * He - c * r * He - Te + n * ye) / (n - c), re = o * He + c * (ce - r * He), V = K;
        } else if (N === 1 && te < 0) {
          N = 2, ye = m, Te = M, m > K && (K = m);
          const Ee = (K - ae) / (2 * 1 * r), He = 1 + 0 * Math.pow(Ee, 0.8);
          ce = (-o * He + c * r * He - Te + n * ye) / (n - c), re = -o * He + c * (ce + r * He), V = ae;
        }
        const de = Math.abs((V - ce) / r);
        let Z = s - 0.925 * de / (0.15 + de);
        Z < 0.1 && (Z = 0.1);
        const ue = (G - ye) / (ce - ye), Me = 1 + Math.pow(Math.abs(ue), Z), oe = Math.pow(Me, 1 / Z);
        ie = l * ue + (1 - l) * ue / oe, ie = ie * (re - Te) + Te, _.push(ie), m = G, M = ie, w = ae, y = K, f = V, h = ce, T = re, k = ye, $ = Te, C = N;
      }
      const x = t.querySelector("#nl-canvas"), u = x.getContext("2d"), I = x.width, L = x.height;
      u.clearRect(0, 0, I, L);
      const R = Math.max(...p.map(Math.abs)), D = Math.max(..._.map(Math.abs)), b = (I - 40) / (2 * R), S = (L - 40) / (2 * D), v = I / 2, P = L / 2;
      u.strokeStyle = "#444", u.lineWidth = 1, u.beginPath(), u.moveTo(20, P), u.lineTo(I - 20, P), u.stroke(), u.beginPath(), u.moveTo(v, 20), u.lineTo(v, L - 20), u.stroke(), u.fillStyle = "#888", u.font = "10px monospace", u.textAlign = "center", u.fillText("\u03B5 (strain)", I - 40, P - 5), u.fillText("\u03C3 (stress)", v + 30, 15), u.fillText(`\xB1${(R * 100).toFixed(1)}%`, I - 30, P + 12), u.fillText(`\xB1${(D / 1e3).toFixed(0)} MPa`, v + 40, 30), u.strokeStyle = "#00ccff", u.lineWidth = 1.5, u.beginPath();
      for (let G = 0; G < p.length; G++) {
        const ae = v + p[G] * b, K = P - _[G] * S;
        G === 0 ? u.moveTo(ae, K) : u.lineTo(ae, K);
      }
      u.stroke(), u.strokeStyle = "#ff333366", u.lineWidth = 1, u.setLineDash([
        4,
        4
      ]), u.beginPath(), u.moveTo(20, P - o * S), u.lineTo(I - 20, P - o * S), u.stroke(), u.beginPath(), u.moveTo(20, P + o * S), u.lineTo(I - 20, P + o * S), u.stroke(), u.setLineDash([]), u.fillStyle = "#ff6666", u.font = "9px monospace", u.fillText(`Fy = ${(o / 1e3).toFixed(0)} MPa`, I - 50, P - o * S - 5);
      const X = t.querySelector("#nl-info");
      X.textContent = `Steel02: Fy=${(o / 1e3).toFixed(0)} MPa, E\u2080=${(n / 1e6).toFixed(0)} GPa, b=${l}, R\u2080=${s} \u2014 ${a} ciclos, amp=${(d * 100).toFixed(1)}%`;
    }
    function Qa() {
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
      const a = Ml({
        nodes: o,
        elements: n,
        nodeInputs: s,
        elementInputs: l,
        deformOutputs: d
      });
      document.body.appendChild(a);
    }
    let Go = null;
    function el(t) {
      Go && Go.remove();
      const o = document.createElement("div");
      o.style.cssText = "position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background:#1a1a2e;color:#eee;border:2px solid #00ccff;border-radius:8px;padding:16px;z-index:10001;width:320px;font-family:monospace;font-size:12px;box-shadow:0 4px 20px rgba(0,0,0,0.5);";
      const n = $n(), l = Mn(), s = Object.entries(n).map(([r, c]) => `<option value="${c}">${r}</option>`).join(""), d = Object.entries(l).map(([r, c]) => `<option value="${c}">${r}</option>`).join("");
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
        const m = new Array(12).fill(false), M = new Array(12).fill(0);
        o.querySelectorAll("input[data-asgn-rel]").forEach((w) => {
          m[parseInt(w.dataset.asgnRel)] = w.checked;
        }), o.querySelectorAll("input[data-asgn-spr]").forEach((w) => {
          const y = parseFloat(w.value);
          y > 0 && (M[parseInt(w.dataset.asgnSpr)] = y);
        }), c.releases12 = m, c.springs12 = M, c.releaseRotStart = m[4] || m[5], c.releaseRotEnd = m[10] || m[11], c.releaseAxial = m[0], c.releaseTorsion = m[3], c.modI = parseFloat((_a2 = o.querySelector("#asgn-mod-i")) == null ? void 0 : _a2.value) || 1, c.modA = parseFloat((_b = o.querySelector("#asgn-mod-a")) == null ? void 0 : _b.value) || 1, c.modJ = parseFloat((_c = o.querySelector("#asgn-mod-j")) == null ? void 0 : _c.value) || 1, c.modAs2 = parseFloat((_d = o.querySelector("#asgn-mod-as2")) == null ? void 0 : _d.value) ?? 1, c.modAs3 = parseFloat((_e2 = o.querySelector("#asgn-mod-as3")) == null ? void 0 : _e2.value) ?? 1, c.modI3 = parseFloat((_f = o.querySelector("#asgn-mod-i3")) == null ? void 0 : _f.value) || 1, c.modMass = parseFloat((_g = o.querySelector("#asgn-mod-mass")) == null ? void 0 : _g.value) || 1, c.modWeight = parseFloat((_h = o.querySelector("#asgn-mod-weight")) == null ? void 0 : _h.value) || 1, t.forEach((w) => we.set(w, {
          ...c
        })), o.remove(), Go = null, Eo(), e.elementInputs.val = {
          ...e.elementInputs.val
        };
      }), o.querySelector("#asgn-remove").addEventListener("click", () => {
        t.forEach((r) => we.delete(r)), o.remove(), Go = null, Eo(), e.elementInputs.val = {
          ...e.elementInputs.val
        };
      });
    }
    let Vo = null;
    function tl(t) {
      var _a2, _b, _c;
      Vo && Vo.remove();
      const o = e.nodes.val, n = e.elements.val[t];
      if (!n || n.length !== 2) return;
      const l = o[n[0]], s = o[n[1]], d = Math.abs(s[0] - l[0]), a = Math.abs(s[1] - l[1]), i = Math.abs(s[2] - l[2]), p = a > d && a > i, r = Math.sqrt(d * d + a * a + i * i), c = ve.get(t) ?? 0, m = (_c = (_b = (_a2 = e.elementInputs) == null ? void 0 : _a2.val) == null ? void 0 : _b.sectionShapes) == null ? void 0 : _c.get(t), M = (m == null ? void 0 : m.name) || (m ? `${m.type} ${((m.b ?? 0) * 100).toFixed(0)}x${((m.h ?? 0) * 100).toFixed(0)}` : "\u2014"), w = document.createElement("div");
      w.style.cssText = "position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background:#1a1a2e;color:#eee;border:2px solid #ff9900;border-radius:8px;padding:16px;z-index:10000;min-width:280px;font-family:monospace;font-size:13px;box-shadow:0 4px 20px rgba(0,0,0,0.5);", w.innerHTML = `
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
        <span style="color:#888;">Secci\xF3n:</span> <span style="color:#00ccff;">${M}</span>
      </div>
      <div style="margin-bottom:8px;">
        <span style="color:#888;">Nodos:</span> ${n[0]} \u2192 ${n[1]}
      </div>
      <hr style="border-color:#333;margin:12px 0;">
      <div style="display:flex;gap:8px;">
        <button id="ep-delete" style="flex:1;padding:8px;background:#cc3333;color:#fff;border:none;border-radius:4px;cursor:pointer;font-weight:bold;">\u{1F5D1} Eliminar</button>
        <button id="ep-inspect" style="flex:1;padding:8px;background:#336699;color:#fff;border:none;border-radius:4px;cursor:pointer;font-weight:bold;">\u{1F50D} Inspect</button>
      </div>
    `, document.body.appendChild(w), Vo = w, w.querySelector("#ep-close").addEventListener("click", () => {
        w.remove(), Vo = null, Fo();
      }), w.querySelector("#ep-delete").addEventListener("click", () => {
        ee.add(t), w.remove(), Vo = null, Fo(), Oe();
      }), w.querySelector("#ep-inspect").addEventListener("click", () => {
        w.remove(), Vo = null, Js(t);
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
        const M = o.getBoundingClientRect();
        return {
          x: (m.x + 1) / 2 * M.width,
          y: (-m.y + 1) / 2 * M.height
        };
      }
      function a(p, r, c, m, M) {
        const w = Math.min(p, c), y = Math.max(p, c), f = Math.min(r, m), h = Math.max(r, m), T = e.nodes.val, k = e.elements.val, $ = [];
        for (let C = 0; C < k.length; C++) {
          const _ = k[C], x = _.map((u) => d(T[u])).filter(Boolean);
          if (x.length !== 0) if (M) x.every((I) => I.x >= w && I.x <= y && I.y >= f && I.y <= h) && $.push(C);
          else {
            if (x.some((I) => I.x >= w && I.x <= y && I.y >= f && I.y <= h)) {
              $.push(C);
              continue;
            }
            if (_.length === 2) {
              const I = x[0], L = x[1];
              i(I.x, I.y, L.x, L.y, w, f, y, h) && $.push(C);
            }
          }
        }
        return $;
      }
      function i(p, r, c, m, M, w, y, f) {
        const h = (k, $) => k >= M && k <= y && $ >= w && $ <= f;
        if (h(p, r) || h(c, m)) return true;
        const T = (k, $, C, _, x, u, I, L) => {
          const R = (C - k) * (L - u) - (_ - $) * (I - x);
          if (Math.abs(R) < 1e-10) return false;
          const D = ((x - k) * (L - u) - (u - $) * (I - x)) / R, b = ((x - k) * (_ - $) - (u - $) * (C - k)) / R;
          return D >= 0 && D <= 1 && b >= 0 && b <= 1;
        };
        return T(p, r, c, m, M, w, y, w) || T(p, r, c, m, y, w, y, f) || T(p, r, c, m, M, f, y, f) || T(p, r, c, m, M, w, M, f);
      }
      o.addEventListener("mousedown", (p) => {
        Qt && (n = {
          x: p.offsetX,
          y: p.offsetY
        });
      }), o.addEventListener("mousemove", (p) => {
        if (ho) {
          const c = lt();
          if (!c) return;
          const m = js(p.clientX, p.clientY, c.camera, c.rendererElm);
          if (Ct.track && m.snapType === "node" && m.nodeIdx !== null && m.nodeIdx !== Po && qa(m.nodeIdx), Ct.track && Po !== null && m.worldPos && m.snapType !== "node") {
            const M = _a(m.worldPos, Po);
            M && (m.worldPos = M, m.snapType = "grid");
          }
          if (Po !== null && m.worldPos) {
            const M = e.nodes.val[Po];
            M && Hs(p.clientX, p.clientY, new Ne(...M), m.worldPos);
          } else if (kt !== null && m.worldPos) {
            const M = e.nodes.val[kt];
            M && Hs(p.clientX, p.clientY, new Ne(...M), m.worldPos);
          } else lo && (lo.remove(), lo = null);
          m.nodeIdx, Ws(m), o.style.cursor = m.snapType !== "free" ? "pointer" : "crosshair";
          return;
        }
        if (!io && !Qt) return;
        if (Qt && n) {
          const c = p.offsetX - n.x, m = p.offsetY - n.y;
          if (Math.abs(c) > s || Math.abs(m) > s) {
            l || (l = document.createElement("div"), l.style.cssText = "position:absolute;pointer-events:none;z-index:9999;", o.parentElement.style.position = "relative", o.parentElement.appendChild(l));
            const M = c > 0, w = Math.min(n.x, p.offsetX), y = Math.min(n.y, p.offsetY), f = Math.abs(c), h = Math.abs(m);
            l.style.left = w + "px", l.style.top = y + "px", l.style.width = f + "px", l.style.height = h + "px", l.style.border = M ? "2px solid #3399ff" : "2px dashed #33ff33", l.style.background = M ? "rgba(51,153,255,0.1)" : "rgba(51,255,51,0.1)", o.style.cursor = "crosshair";
            return;
          }
        }
        const r = Zn(p);
        if (r >= 0) Gs(r), o.style.cursor = "pointer";
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
            const m = r > 0, M = a(n.x, n.y, p.offsetX, p.offsetY, m);
            p.ctrlKey || p.metaKey || (Mt.clear(), To()), M.forEach((y) => {
              Mt.has(y) || (Mt.add(y), Xn(y));
            }), Ao();
          }
          l && (l.remove(), l = null), n = null, o.style.cursor = "crosshair";
          return;
        }
        n = null;
      }), o.addEventListener("click", (p) => {
        if (ho) {
          const r = lt();
          if (!r) return;
          const c = js(p.clientX, p.clientY, r.camera, r.rendererElm);
          (c.worldPos || c.nodeIdx !== null) && (Da(c), Ws(c));
          return;
        }
        if (Qt) {
          if (l) return;
          const r = Zn(p), c = p.ctrlKey || p.metaKey;
          if (r >= 0) {
            if (c) if (Mt.has(r)) {
              Mt.delete(r);
              const m = ko.findIndex((M) => M.__elemIdx === r);
              if (m >= 0) {
                const M = lt();
                M == null ? void 0 : M.scene.remove(ko[m]), ko[m].geometry.dispose(), ko[m].material.dispose(), ko.splice(m, 1), M == null ? void 0 : M.render();
              }
            } else Mt.add(r), Xn(r);
            else Mt.clear(), To(), Mt.add(r), Xn(r);
            Ao();
          } else c || (Mt.clear(), To(), Ao());
          return;
        }
        if (io) {
          const r = Zn(p);
          r >= 0 && (Gs(r), tl(r));
        }
      });
    }, 500);
    const ol = fa.v;
    Ko.derive(() => {
      var _a2;
      fa.v === ol && (e.nodes.val, e.elements.val, (_a2 = e.nodeInputs) == null ? void 0 : _a2.val, nt());
    }), tt.modal = (t) => {
      var _a2, _b;
      if (t === void 0 && (t = !_e), _e = t, (_a2 = ze.querySelector("#cad3d-modal")) == null ? void 0 : _a2.classList.toggle("active", _e), _e) {
        const n = lt();
        ((_b = n == null ? void 0 : n.settings) == null ? void 0 : _b.loads) && (Be = n.settings.loads.rawVal, n.settings.loads.val = false), qn(), ze.querySelector("#cad3d-mode-prev").style.display = "", ze.querySelector("#cad3d-mode-next").style.display = "", ze.querySelector("#cad3d-mode-label").style.display = "";
      } else _n(), ze.querySelector("#cad3d-mode-prev").style.display = "none", ze.querySelector("#cad3d-mode-next").style.display = "none", ze.querySelector("#cad3d-mode-label").style.display = "none", A && A !== "placa-q4" && A !== "placa-3q" && Oe(), setTimeout(() => {
        var _a3;
        const n = lt();
        ((_a3 = n == null ? void 0 : n.settings) == null ? void 0 : _a3.loads) && Be && (n.settings.loads.val = true);
      }, 600);
      console.log(`Modal analysis: ${_e ? "ON" : "OFF"}`);
    }, tt.setMode = (t) => {
      var _a2;
      if (!(Pe == null ? void 0 : Pe.modeShapes)) {
        console.error("No modal results");
        return;
      }
      xe = Math.max(0, Math.min(t, Pe.modeShapes.length - 1));
      const o = Pe.modeShapes[xe], { extent: n } = So();
      let l = 0;
      for (let d = 0; d < ke.length; d++) {
        const a = o[d * 6] || 0, i = o[d * 6 + 1] || 0, p = o[d * 6 + 2] || 0;
        l = Math.max(l, Math.sqrt(a * a + i * i + p * p));
      }
      Ve = l > 1e-12 ? n * 0.05 / l : 1, nn();
      const s = ze.querySelector("#cad3d-mode-label");
      s && Pe.frequencies && (s.textContent = `Modo ${xe + 1} \u2014 ${Pe.frequencies[xe].toFixed(2)} Hz`), console.log(`Modo ${xe + 1}: f = ${(_a2 = Pe.frequencies) == null ? void 0 : _a2[xe].toFixed(4)} Hz`);
    }, window.cad = tt, console.log("FEM Studio CLI ready. Type cad.help() for commands."), setTimeout(() => {
      document.body.appendChild(ze), document.body.appendChild(ut.div);
    }, 0), setTimeout(() => {
      e.nodes.val.length === 0 && (st("muro-q4"), os(), Wn("muro-q4"), setTimeout(() => {
        A === "muro-q4" && fo();
      }, 200));
    }, 100);
    const an = document.createElement("button");
    an.id = "mobile-menu-btn", an.innerHTML = "\u2630", an.addEventListener("click", () => {
      const t = document.getElementById("cad3d-panel");
      t && (t.classList.toggle("mobile-open"), an.innerHTML = t.classList.contains("mobile-open") ? "\u2715" : "\u2630");
    }), document.body.appendChild(an);
    const vo = document.createElement("button");
    vo.id = "fullscreen-btn", vo.innerHTML = "\u26F6", vo.title = "Pantalla completa", vo.style.cssText = `
    position: fixed; bottom: 20px; right: 78px; z-index: 9999999;
    width: 48px; height: 48px; border-radius: 50%;
    background: linear-gradient(135deg, #333, #555);
    color: white; border: 3px solid rgba(255,255,255,0.2);
    font-size: 22px; cursor: pointer;
    box-shadow: 0 4px 15px rgba(0,0,0,0.4);
    transition: transform 0.2s, box-shadow 0.2s;
    display: flex; align-items: center; justify-content: center;
  `, vo.addEventListener("mouseenter", () => {
      vo.style.transform = "scale(1.15)";
    }), vo.addEventListener("mouseleave", () => {
      vo.style.transform = "scale(1)";
    }), vo.addEventListener("click", () => {
      document.fullscreenElement ? document.exitFullscreen().catch(() => {
      }) : document.documentElement.requestFullscreen().catch(() => {
      });
    }), document.body.appendChild(vo), document.body.appendChild(Ol());
    const co = document.createElement("button");
    co.id = "lang-toggle-btn", co.textContent = cs() === "es" ? "EN" : "ES", co.title = cs() === "es" ? "Switch to English" : "Cambiar a Espa\xF1ol", co.style.cssText = `
    position: fixed; bottom: 20px; right: 136px; z-index: 9999999;
    width: 48px; height: 48px; border-radius: 50%;
    background: linear-gradient(135deg, #1a4a7a, #2a6ab0);
    color: white; border: 3px solid rgba(255,255,255,0.2);
    font-size: 14px; font-weight: bold; cursor: pointer;
    box-shadow: 0 4px 15px rgba(0,0,0,0.4);
    transition: transform 0.2s, box-shadow 0.2s;
    display: flex; align-items: center; justify-content: center;
  `, co.addEventListener("mouseenter", () => {
      co.style.transform = "scale(1.15)";
    }), co.addEventListener("mouseleave", () => {
      co.style.transform = "scale(1)";
    }), co.addEventListener("click", () => {
      const t = cs() === "es" ? "en" : "es";
      Pl(t), co.textContent = t === "es" ? "EN" : "ES", co.title = t === "es" ? "Switch to English" : "Cambiar a Espa\xF1ol", Rl();
    }), document.body.appendChild(co);
    const ns = new URLSearchParams(window.location.search).get("t");
    ns && setTimeout(() => {
      Wn(ns), tt.example(ns);
    }, 300);
    const aa = document.createElement("span");
    return aa.style.display = "none", aa;
  };
});
export {
  __tla,
  ha as c,
  gr as g
};
