const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./calcPanel-DVrrLUea.js","./getMesh-DLItsoq9.js","./pureFunctionsAny.generated-JAcEVsJ7.js","./analyze-C33Jzs7t.js","./didacticCpp-37CtYHoI.js","./cyclicPushoverCpp-A7gv4Lnh.js"])))=>i.map(i=>d[i]);
import { v as Jo, P as on, g as Va, a as Ua, o as Xa } from "./theme-CzzIlc4y.js";
import { G as sn, b as Ka, M as Qs, D as ea, B as to, c as xn, d as Za, C as Qa, e as ca, V as Oe, P as Eo, R as ta, f as oa, g as jo, h as Wo, i as el, S as tl, j as ol, F as Ao, a as Go, L as Lo, k as nl, l as sl, A as dn, T as Vn, m as pn, n as fn, o as al, p as ll } from "./Text-CBH-tcJP.js";
import { g as vn, b as yn, a as Yo } from "./analyze-C33Jzs7t.js";
import { d as Lt, p as Un, m as rl, s as il, __tla as __tla_0 } from "./didacticCpp-37CtYHoI.js";
import { g as ho, __tla as __tla_1 } from "./getMesh-DLItsoq9.js";
import { n as Po, s as go, m as no, t as os } from "./pureFunctionsAny.generated-JAcEVsJ7.js";
let ia, ml, or;
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
  const cl = "modulepreload", dl = function(e, b) {
    return new URL(e, b).href;
  }, na = {}, sa = function(b, P, M) {
    let Y = Promise.resolve();
    if (P && P.length > 0) {
      const V = document.getElementsByTagName("link"), W = document.querySelector("meta[property=csp-nonce]"), O = (W == null ? void 0 : W.nonce) || (W == null ? void 0 : W.getAttribute("nonce"));
      Y = Promise.allSettled(P.map((j) => {
        if (j = dl(j, M), j in na) return;
        na[j] = true;
        const ye = j.endsWith(".css"), k = ye ? '[rel="stylesheet"]' : "";
        if (!!M) for (let ue = V.length - 1; ue >= 0; ue--) {
          const re = V[ue];
          if (re.href === j && (!ye || re.rel === "stylesheet")) return;
        }
        else if (document.querySelector(`link[href="${j}"]${k}`)) return;
        const he = document.createElement("link");
        if (he.rel = ye ? "stylesheet" : cl, ye || (he.as = "script"), he.crossOrigin = "", he.href = j, O && he.setAttribute("nonce", O), document.head.appendChild(he), ye) return new Promise((ue, re) => {
          he.addEventListener("load", ue), he.addEventListener("error", () => re(new Error(`Unable to preload CSS for ${j}`)));
        });
      }));
    }
    function H(V) {
      const W = new Event("vite:preloadError", {
        cancelable: true
      });
      if (W.payload = V, window.dispatchEvent(W), !W.defaultPrevented) throw V;
    }
    return Y.then((V) => {
      for (const W of V || []) W.status === "rejected" && H(W.reason);
      return b().catch(H);
    });
  }, ts = [
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
  ], Vo = [
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
  const Co = {
    E: 2e8,
    G: 77e6,
    A: 0.01,
    Iz: 833e-7,
    Iy: 833e-7,
    J: 141e-6,
    rho: 7.85
  };
  function Fo(e, b) {
    const P = ts.find((j) => j.id === e), M = Vo.find((j) => j.id === b), Y = P.toKN, H = M.toM, V = (j, ye, k) => k / (Math.pow(Y, j) * Math.pow(H, ye));
    let W, O;
    switch (e) {
      case "kN":
        W = 10, O = [
          -100,
          100,
          1
        ];
        break;
      case "tonf":
        W = 1, O = [
          -20,
          20,
          0.5
        ];
        break;
      case "kgf":
        W = 1e3, O = [
          -1e4,
          1e4,
          100
        ];
        break;
      case "kip":
        W = 10, O = [
          -200,
          200,
          5
        ];
        break;
      case "lb":
        W = 5e3, O = [
          -5e4,
          5e4,
          500
        ];
        break;
      case "N":
        W = 1e4, O = [
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
      E: V(1, -2, Co.E),
      G: V(1, -2, Co.G),
      A: V(0, 2, Co.A),
      Iz: V(0, 4, Co.Iz),
      Iy: V(0, 4, Co.Iy),
      J: V(0, 4, Co.J),
      rho: V(1, -4, Co.rho),
      spanRange: M.spanRange,
      heightRange: M.heightRange,
      defaultSpan: M.defaultSpan,
      defaultHeight: M.defaultHeight,
      defaultForce: W,
      forceRange: O,
      galponSpan: M.galponSpan,
      galponLength: M.galponLength,
      galponHeight: M.galponHeight,
      galponRise: M.galponRise
    };
  }
  Fo("kN", "m"), Fo("kip", "in");
  function un() {
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
    const b = e.force, [P, M, Y] = e.forceRange;
    return {
      truss: [
        {
          key: "CM",
          val: -e.defaultForce,
          min: P,
          max: 0,
          step: Y,
          label: `CM (${b})`
        },
        {
          key: "CV",
          val: 0,
          min: P,
          max: 0,
          step: Y,
          label: `CV (${b})`
        }
      ],
      beams: [
        {
          key: "CM",
          val: 0,
          min: P,
          max: 0,
          step: Y,
          label: `CM (${b})`
        },
        {
          key: "CV",
          val: 0,
          min: P,
          max: 0,
          step: Y,
          label: `CV (${b})`
        },
        {
          key: "Ex",
          val: e.defaultForce,
          min: P,
          max: M,
          step: Y,
          label: `Ex sismo (${b})`
        }
      ],
      "3d": [
        {
          key: "CM",
          val: 0,
          min: P,
          max: 0,
          step: Y,
          label: `CM (${b})`
        },
        {
          key: "CV",
          val: 0,
          min: P,
          max: 0,
          step: Y,
          label: `CV (${b})`
        },
        {
          key: "Ex",
          val: e.defaultForce * 3,
          min: P,
          max: M,
          step: Y,
          label: `Ex sismo (${b})`
        }
      ],
      frame: [
        {
          key: "CM",
          val: -e.defaultForce,
          min: P,
          max: 0,
          step: Y,
          label: `CM (${b})`
        },
        {
          key: "CV",
          val: 0,
          min: P,
          max: 0,
          step: Y,
          label: `CV (${b})`
        },
        {
          key: "Ex",
          val: 0,
          min: P,
          max: M,
          step: Y,
          label: `Ex sismo (${b})`
        }
      ],
      edificio: [
        {
          key: "CM",
          val: -e.defaultForce,
          min: P,
          max: 0,
          step: Y,
          label: `CM (${b})`
        },
        {
          key: "CV",
          val: 0,
          min: P,
          max: 0,
          step: Y,
          label: `CV (${b})`
        },
        {
          key: "Ex",
          val: 0,
          min: P,
          max: M,
          step: Y,
          label: `Ex sismo (${b})`
        },
        {
          key: "Ey",
          val: 0,
          min: P,
          max: M,
          step: Y,
          label: `Ey sismo (${b})`
        }
      ],
      galpon: [
        {
          key: "CM",
          val: -e.defaultForce,
          min: P,
          max: 0,
          step: Y,
          label: `CM (${b})`
        },
        {
          key: "CV",
          val: 0,
          min: P,
          max: 0,
          step: Y,
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
          step: Y,
          label: `CM (${b})`
        }
      ],
      "placa-q4": [
        {
          key: "CM",
          val: 0,
          min: P,
          max: 0,
          step: Y,
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
    function P(M, Y) {
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
      ], V = [
        0,
        0,
        0,
        0,
        0,
        0
      ];
      let W = `<div id="modal-header" style="display:flex; align-items:center; justify-content:space-between; padding:8px 12px; cursor:default;">
  <b style="color:#ff0">\u26A1 MODAL ANALYSIS \u2014 ${Y.title}</b>
  <div style="display:flex; gap:4px; margin-left:12px;">
    <button id="modal-copy" style="padding:2px 8px; font-size:10px; cursor:pointer;
      background:#2d6a4f; color:#fff; border:1px solid #40916c; border-radius:3px;" title="Copiar tabla">\u{1F4CB}</button>
    <button id="modal-minimize" style="padding:2px 8px; font-size:10px; cursor:pointer;
      background:#555; color:#fff; border:1px solid #777; border-radius:3px;" title="Minimizar">\u25AC</button>
  </div>
</div>`;
      if (W += '<div id="modal-body" style="padding:0 12px 10px 12px;">', Y.properties) for (const O of Y.properties) W += `<span style="color:#888">${O}</span>
`;
      W += `<table style="border-collapse:collapse; color:#0f0; font-size:11px; margin-top:4px">
<tr style="color:#ff0; border-bottom:1px solid #ff03">
  <th style="padding:2px 6px">Mode</th>
  <th style="padding:2px 6px">Freq (Hz)</th>
  <th style="padding:2px 6px">Period (s)</th>
  <th style="padding:2px 6px">\u03C9 (rad/s)</th>`;
      for (const O of H) W += `<th style="padding:2px 5px">${O}</th>`;
      if (W += `<th style="padding:2px 5px; color:#0ff">\u03A3Ux</th>
  <th style="padding:2px 5px; color:#0ff">\u03A3Uy</th>
  <th style="padding:2px 5px; color:#0ff">\u03A3Rz</th></tr>`, M.frequencies.forEach((O, j) => {
        var _a2;
        const ye = O > 0 ? 1 / O : 0, k = O * 2 * Math.PI, se = ((_a2 = M.massParticipation) == null ? void 0 : _a2[j]) || [
          0,
          0,
          0,
          0,
          0,
          0
        ];
        for (let he = 0; he < 6; he++) V[he] += se[he];
        W += `<tr style="border-bottom:1px solid #fff1">
  <td style="padding:2px 6px; text-align:center">${j + 1}</td>
  <td style="padding:2px 6px; text-align:right">${O.toFixed(4)}</td>
  <td style="padding:2px 6px; text-align:right">${ye.toFixed(4)}</td>
  <td style="padding:2px 6px; text-align:right">${k.toFixed(2)}</td>`;
        for (let he = 0; he < 6; he++) {
          const ue = (se[he] * 100).toFixed(1), re = se[he] > 0.5 ? "#f00" : se[he] > 0.1 ? "#ff0" : "#0f0";
          W += `<td style="padding:2px 5px; text-align:right; color:${re}">${ue}%</td>`;
        }
        W += `<td style="padding:2px 5px; text-align:right; color:#0ff">${(V[0] * 100).toFixed(1)}%</td>
  <td style="padding:2px 5px; text-align:right; color:#0ff">${(V[1] * 100).toFixed(1)}%</td>
  <td style="padding:2px 5px; text-align:right; color:#0ff">${(V[5] * 100).toFixed(1)}%</td></tr>`;
      }), W += "</table></div>", e.innerHTML = W, b) {
        const O = e.querySelector("#modal-body"), j = e.querySelector("#modal-minimize");
        O && (O.style.display = "none"), j && (j.textContent = "\u25A2", j.title = "Restaurar");
      }
      (_a = e.querySelector("#modal-minimize")) == null ? void 0 : _a.addEventListener("click", () => {
        b = !b;
        const O = e.querySelector("#modal-body"), j = e.querySelector("#modal-minimize");
        b ? (O.style.display = "none", j.textContent = "\u25A2", j.title = "Restaurar") : (O.style.display = "block", j.textContent = "\u25AC", j.title = "Minimizar");
      }), (_b = e.querySelector("#modal-copy")) == null ? void 0 : _b.addEventListener("click", () => {
        const O = [];
        O.push(`Modal Analysis \u2014 ${Y.title}`);
        const j = `Mode  Freq(Hz)  Period(s)  \u03C9(rad/s)  ${H.join("     ")}  \u03A3Ux    \u03A3Uy    \u03A3Rz`;
        O.push(j), O.push("-".repeat(j.length));
        const ye = [
          0,
          0,
          0,
          0,
          0,
          0
        ];
        M.frequencies.forEach((se, he) => {
          var _a2;
          const ue = se > 0 ? 1 / se : 0, re = se * 2 * Math.PI, te = ((_a2 = M.massParticipation) == null ? void 0 : _a2[he]) || [
            0,
            0,
            0,
            0,
            0,
            0
          ];
          for (let _ = 0; _ < 6; _++) ye[_] += te[_];
          const N = te.map((_) => ((_ * 100).toFixed(1) + "%").padStart(6)).join(" ");
          O.push(`${String(he + 1).padStart(4)}  ${se.toFixed(4).padStart(9)}  ${ue.toFixed(4).padStart(9)}  ${re.toFixed(2).padStart(9)}  ${N}  ${(ye[0] * 100).toFixed(1).padStart(5)}%  ${(ye[1] * 100).toFixed(1).padStart(5)}%  ${(ye[5] * 100).toFixed(1).padStart(5)}%`);
        }), navigator.clipboard.writeText(O.join(`
`));
        const k = e.querySelector("#modal-copy");
        k.textContent = "\u2713", setTimeout(() => k.textContent = "\u{1F4CB}", 1500);
      });
    }
    return {
      div: e,
      render: P
    };
  };
  const Fe = 64516e-8, R = 416231e-12, ee = 0.0254, Io = [
    {
      name: "W6x9",
      type: "W",
      A: 2.68 * Fe,
      Iz: 16.4 * R,
      Iy: 2.2 * R,
      J: 0.0405 * R,
      d: 5.9 * ee,
      bf: 3.94 * ee
    },
    {
      name: "W6x15",
      type: "W",
      A: 4.43 * Fe,
      Iz: 29.1 * R,
      Iy: 9.32 * R,
      J: 0.103 * R,
      d: 5.99 * ee,
      bf: 5.99 * ee
    },
    {
      name: "W6x20",
      type: "W",
      A: 5.87 * Fe,
      Iz: 41.4 * R,
      Iy: 13.3 * R,
      J: 0.204 * R,
      d: 6.2 * ee,
      bf: 6.02 * ee
    },
    {
      name: "W8x10",
      type: "W",
      A: 2.96 * Fe,
      Iz: 30.8 * R,
      Iy: 2.09 * R,
      J: 0.0426 * R,
      d: 7.89 * ee,
      bf: 3.94 * ee
    },
    {
      name: "W8x18",
      type: "W",
      A: 5.26 * Fe,
      Iz: 61.9 * R,
      Iy: 7.97 * R,
      J: 0.172 * R,
      d: 8.14 * ee,
      bf: 5.25 * ee
    },
    {
      name: "W8x24",
      type: "W",
      A: 7.08 * Fe,
      Iz: 82.7 * R,
      Iy: 18.3 * R,
      J: 0.346 * R,
      d: 7.93 * ee,
      bf: 6.5 * ee
    },
    {
      name: "W8x31",
      type: "W",
      A: 9.13 * Fe,
      Iz: 110 * R,
      Iy: 37.1 * R,
      J: 0.536 * R,
      d: 8 * ee,
      bf: 7.995 * ee
    },
    {
      name: "W8x40",
      type: "W",
      A: 11.7 * Fe,
      Iz: 146 * R,
      Iy: 49.1 * R,
      J: 0.871 * R,
      d: 8.25 * ee,
      bf: 8.07 * ee
    },
    {
      name: "W8x48",
      type: "W",
      A: 14.1 * Fe,
      Iz: 184 * R,
      Iy: 60.9 * R,
      J: 1.45 * R,
      d: 8.5 * ee,
      bf: 8.11 * ee
    },
    {
      name: "W8x67",
      type: "W",
      A: 19.7 * Fe,
      Iz: 272 * R,
      Iy: 88.6 * R,
      J: 3.54 * R,
      d: 9 * ee,
      bf: 8.28 * ee
    },
    {
      name: "W10x12",
      type: "W",
      A: 3.54 * Fe,
      Iz: 53.8 * R,
      Iy: 2.18 * R,
      J: 0.0547 * R,
      d: 9.87 * ee,
      bf: 3.96 * ee
    },
    {
      name: "W10x22",
      type: "W",
      A: 6.49 * Fe,
      Iz: 118 * R,
      Iy: 11.4 * R,
      J: 0.239 * R,
      d: 10.17 * ee,
      bf: 5.75 * ee
    },
    {
      name: "W10x33",
      type: "W",
      A: 9.71 * Fe,
      Iz: 171 * R,
      Iy: 36.6 * R,
      J: 0.583 * R,
      d: 9.73 * ee,
      bf: 7.96 * ee
    },
    {
      name: "W10x49",
      type: "W",
      A: 14.4 * Fe,
      Iz: 272 * R,
      Iy: 93.4 * R,
      J: 1.39 * R,
      d: 9.98 * ee,
      bf: 10 * ee
    },
    {
      name: "W10x68",
      type: "W",
      A: 20 * Fe,
      Iz: 394 * R,
      Iy: 134 * R,
      J: 3.56 * R,
      d: 10.4 * ee,
      bf: 10.13 * ee
    },
    {
      name: "W10x100",
      type: "W",
      A: 29.4 * Fe,
      Iz: 623 * R,
      Iy: 207 * R,
      J: 10.9 * R,
      d: 11.1 * ee,
      bf: 10.34 * ee
    },
    {
      name: "W12x14",
      type: "W",
      A: 4.16 * Fe,
      Iz: 88.6 * R,
      Iy: 2.36 * R,
      J: 0.0704 * R,
      d: 11.91 * ee,
      bf: 3.97 * ee
    },
    {
      name: "W12x22",
      type: "W",
      A: 6.48 * Fe,
      Iz: 156 * R,
      Iy: 4.66 * R,
      J: 0.293 * R,
      d: 12.31 * ee,
      bf: 4.03 * ee
    },
    {
      name: "W12x26",
      type: "W",
      A: 7.65 * Fe,
      Iz: 204 * R,
      Iy: 17.3 * R,
      J: 0.3 * R,
      d: 12.22 * ee,
      bf: 6.49 * ee
    },
    {
      name: "W12x40",
      type: "W",
      A: 11.7 * Fe,
      Iz: 310 * R,
      Iy: 44.1 * R,
      J: 0.906 * R,
      d: 11.94 * ee,
      bf: 8.01 * ee
    },
    {
      name: "W12x53",
      type: "W",
      A: 15.6 * Fe,
      Iz: 425 * R,
      Iy: 95.8 * R,
      J: 1.58 * R,
      d: 12.06 * ee,
      bf: 9.99 * ee
    },
    {
      name: "W12x72",
      type: "W",
      A: 21.1 * Fe,
      Iz: 597 * R,
      Iy: 195 * R,
      J: 4.05 * R,
      d: 12.25 * ee,
      bf: 12.04 * ee
    },
    {
      name: "W12x96",
      type: "W",
      A: 28.2 * Fe,
      Iz: 833 * R,
      Iy: 270 * R,
      J: 8.44 * R,
      d: 12.71 * ee,
      bf: 12.16 * ee
    },
    {
      name: "W12x120",
      type: "W",
      A: 35.3 * Fe,
      Iz: 1070 * R,
      Iy: 345 * R,
      J: 16 * R,
      d: 13.12 * ee,
      bf: 12.32 * ee
    },
    {
      name: "W14x22",
      type: "W",
      A: 6.49 * Fe,
      Iz: 199 * R,
      Iy: 7 * R,
      J: 0.208 * R,
      d: 13.74 * ee,
      bf: 5 * ee
    },
    {
      name: "W14x30",
      type: "W",
      A: 8.85 * Fe,
      Iz: 291 * R,
      Iy: 19.6 * R,
      J: 0.38 * R,
      d: 13.84 * ee,
      bf: 6.73 * ee
    },
    {
      name: "W14x38",
      type: "W",
      A: 11.2 * Fe,
      Iz: 385 * R,
      Iy: 26.7 * R,
      J: 0.798 * R,
      d: 14.1 * ee,
      bf: 6.77 * ee
    },
    {
      name: "W14x48",
      type: "W",
      A: 14.1 * Fe,
      Iz: 485 * R,
      Iy: 51.4 * R,
      J: 1.45 * R,
      d: 13.79 * ee,
      bf: 8.03 * ee
    },
    {
      name: "W14x61",
      type: "W",
      A: 17.9 * Fe,
      Iz: 640 * R,
      Iy: 107 * R,
      J: 2.19 * R,
      d: 13.89 * ee,
      bf: 9.99 * ee
    },
    {
      name: "W14x82",
      type: "W",
      A: 24 * Fe,
      Iz: 882 * R,
      Iy: 148 * R,
      J: 5.07 * R,
      d: 14.31 * ee,
      bf: 10.13 * ee
    },
    {
      name: "W14x109",
      type: "W",
      A: 32 * Fe,
      Iz: 1240 * R,
      Iy: 447 * R,
      J: 7.12 * R,
      d: 14.32 * ee,
      bf: 14.61 * ee
    },
    {
      name: "W14x132",
      type: "W",
      A: 38.8 * Fe,
      Iz: 1530 * R,
      Iy: 548 * R,
      J: 12.3 * R,
      d: 14.66 * ee,
      bf: 14.73 * ee
    },
    {
      name: "W14x176",
      type: "W",
      A: 51.8 * Fe,
      Iz: 2140 * R,
      Iy: 838 * R,
      J: 23.7 * R,
      d: 15.22 * ee,
      bf: 15.65 * ee
    },
    {
      name: "W16x26",
      type: "W",
      A: 7.68 * Fe,
      Iz: 301 * R,
      Iy: 9.59 * R,
      J: 0.262 * R,
      d: 15.69 * ee,
      bf: 5.5 * ee
    },
    {
      name: "W16x36",
      type: "W",
      A: 10.6 * Fe,
      Iz: 448 * R,
      Iy: 24.5 * R,
      J: 0.545 * R,
      d: 15.86 * ee,
      bf: 6.99 * ee
    },
    {
      name: "W16x50",
      type: "W",
      A: 14.7 * Fe,
      Iz: 659 * R,
      Iy: 37.2 * R,
      J: 1.52 * R,
      d: 16.26 * ee,
      bf: 7.07 * ee
    },
    {
      name: "W16x67",
      type: "W",
      A: 19.7 * Fe,
      Iz: 954 * R,
      Iy: 119 * R,
      J: 2.39 * R,
      d: 16.33 * ee,
      bf: 10.24 * ee
    },
    {
      name: "W16x89",
      type: "W",
      A: 26.2 * Fe,
      Iz: 1300 * R,
      Iy: 163 * R,
      J: 5.45 * R,
      d: 16.75 * ee,
      bf: 10.37 * ee
    },
    {
      name: "W18x35",
      type: "W",
      A: 10.3 * Fe,
      Iz: 510 * R,
      Iy: 15.3 * R,
      J: 0.506 * R,
      d: 17.7 * ee,
      bf: 6 * ee
    },
    {
      name: "W18x50",
      type: "W",
      A: 14.7 * Fe,
      Iz: 800 * R,
      Iy: 40.1 * R,
      J: 1.24 * R,
      d: 17.99 * ee,
      bf: 7.5 * ee
    },
    {
      name: "W18x71",
      type: "W",
      A: 20.8 * Fe,
      Iz: 1170 * R,
      Iy: 60.3 * R,
      J: 3.49 * R,
      d: 18.47 * ee,
      bf: 7.64 * ee
    },
    {
      name: "W18x97",
      type: "W",
      A: 28.5 * Fe,
      Iz: 1750 * R,
      Iy: 201 * R,
      J: 5.86 * R,
      d: 18.59 * ee,
      bf: 11.15 * ee
    },
    {
      name: "W21x44",
      type: "W",
      A: 13 * Fe,
      Iz: 843 * R,
      Iy: 20.7 * R,
      J: 0.77 * R,
      d: 20.66 * ee,
      bf: 6.5 * ee
    },
    {
      name: "W21x62",
      type: "W",
      A: 18.3 * Fe,
      Iz: 1330 * R,
      Iy: 57.5 * R,
      J: 1.83 * R,
      d: 20.99 * ee,
      bf: 8.24 * ee
    },
    {
      name: "W21x83",
      type: "W",
      A: 24.3 * Fe,
      Iz: 1830 * R,
      Iy: 81.4 * R,
      J: 4.34 * R,
      d: 21.43 * ee,
      bf: 8.36 * ee
    },
    {
      name: "W21x111",
      type: "W",
      A: 32.7 * Fe,
      Iz: 2670 * R,
      Iy: 274 * R,
      J: 6.83 * R,
      d: 21.51 * ee,
      bf: 12.34 * ee
    },
    {
      name: "W24x55",
      type: "W",
      A: 16.2 * Fe,
      Iz: 1350 * R,
      Iy: 29.1 * R,
      J: 1.18 * R,
      d: 23.57 * ee,
      bf: 7.01 * ee
    },
    {
      name: "W24x76",
      type: "W",
      A: 22.4 * Fe,
      Iz: 2100 * R,
      Iy: 82.5 * R,
      J: 2.68 * R,
      d: 23.92 * ee,
      bf: 8.99 * ee
    },
    {
      name: "W24x104",
      type: "W",
      A: 30.6 * Fe,
      Iz: 3100 * R,
      Iy: 259 * R,
      J: 4.72 * R,
      d: 24.06 * ee,
      bf: 12.75 * ee
    },
    {
      name: "W24x131",
      type: "W",
      A: 38.5 * Fe,
      Iz: 4020 * R,
      Iy: 340 * R,
      J: 9.5 * R,
      d: 24.48 * ee,
      bf: 12.86 * ee
    },
    {
      name: "W24x146",
      type: "W",
      A: 43 * Fe,
      Iz: 4580 * R,
      Iy: 391 * R,
      J: 12.6 * R,
      d: 24.74 * ee,
      bf: 12.9 * ee
    },
    {
      name: "W24x176",
      type: "W",
      A: 51.7 * Fe,
      Iz: 5680 * R,
      Iy: 479 * R,
      J: 21.2 * R,
      d: 25.24 * ee,
      bf: 12.9 * ee
    },
    {
      name: "W27x84",
      type: "W",
      A: 24.8 * Fe,
      Iz: 2850 * R,
      Iy: 106 * R,
      J: 2.81 * R,
      d: 26.71 * ee,
      bf: 9.96 * ee
    },
    {
      name: "W27x114",
      type: "W",
      A: 33.5 * Fe,
      Iz: 4090 * R,
      Iy: 159 * R,
      J: 6.77 * R,
      d: 27.29 * ee,
      bf: 10.07 * ee
    },
    {
      name: "W30x90",
      type: "W",
      A: 26.4 * Fe,
      Iz: 3610 * R,
      Iy: 115 * R,
      J: 3.06 * R,
      d: 29.53 * ee,
      bf: 10.4 * ee
    },
    {
      name: "W30x116",
      type: "W",
      A: 34.2 * Fe,
      Iz: 4930 * R,
      Iy: 164 * R,
      J: 6.43 * R,
      d: 30.01 * ee,
      bf: 10.5 * ee
    },
    {
      name: "W33x118",
      type: "W",
      A: 34.7 * Fe,
      Iz: 5900 * R,
      Iy: 187 * R,
      J: 5.3 * R,
      d: 32.86 * ee,
      bf: 11.48 * ee
    },
    {
      name: "W36x135",
      type: "W",
      A: 39.7 * Fe,
      Iz: 7800 * R,
      Iy: 225 * R,
      J: 7 * R,
      d: 35.55 * ee,
      bf: 11.95 * ee
    },
    {
      name: "HSS4x4x1/4",
      type: "HSS",
      A: 3.37 * Fe,
      Iz: 8.22 * R,
      Iy: 8.22 * R,
      J: 13.4 * R,
      d: 4 * ee,
      bf: 4 * ee
    },
    {
      name: "HSS4x4x3/8",
      type: "HSS",
      A: 4.78 * Fe,
      Iz: 10.7 * R,
      Iy: 10.7 * R,
      J: 17.9 * R,
      d: 4 * ee,
      bf: 4 * ee
    },
    {
      name: "HSS4x4x1/2",
      type: "HSS",
      A: 6.02 * Fe,
      Iz: 12.3 * R,
      Iy: 12.3 * R,
      J: 21 * R,
      d: 4 * ee,
      bf: 4 * ee
    },
    {
      name: "HSS6x6x1/4",
      type: "HSS",
      A: 5.24 * Fe,
      Iz: 30.3 * R,
      Iy: 30.3 * R,
      J: 48.3 * R,
      d: 6 * ee,
      bf: 6 * ee
    },
    {
      name: "HSS6x6x3/8",
      type: "HSS",
      A: 7.58 * Fe,
      Iz: 41.1 * R,
      Iy: 41.1 * R,
      J: 66.9 * R,
      d: 6 * ee,
      bf: 6 * ee
    },
    {
      name: "HSS6x6x1/2",
      type: "HSS",
      A: 9.74 * Fe,
      Iz: 49.6 * R,
      Iy: 49.6 * R,
      J: 82.2 * R,
      d: 6 * ee,
      bf: 6 * ee
    },
    {
      name: "HSS8x8x1/4",
      type: "HSS",
      A: 7.1 * Fe,
      Iz: 70.7 * R,
      Iy: 70.7 * R,
      J: 112 * R,
      d: 8 * ee,
      bf: 8 * ee
    },
    {
      name: "HSS8x8x3/8",
      type: "HSS",
      A: 10.4 * Fe,
      Iz: 98 * R,
      Iy: 98 * R,
      J: 158 * R,
      d: 8 * ee,
      bf: 8 * ee
    },
    {
      name: "HSS8x8x1/2",
      type: "HSS",
      A: 13.5 * Fe,
      Iz: 122 * R,
      Iy: 122 * R,
      J: 199 * R,
      d: 8 * ee,
      bf: 8 * ee
    },
    {
      name: "HSS10x10x3/8",
      type: "HSS",
      A: 13.2 * Fe,
      Iz: 202 * R,
      Iy: 202 * R,
      J: 323 * R,
      d: 10 * ee,
      bf: 10 * ee
    },
    {
      name: "HSS10x10x1/2",
      type: "HSS",
      A: 17.2 * Fe,
      Iz: 254 * R,
      Iy: 254 * R,
      J: 412 * R,
      d: 10 * ee,
      bf: 10 * ee
    },
    {
      name: "HSS12x12x3/8",
      type: "HSS",
      A: 16 * Fe,
      Iz: 355 * R,
      Iy: 355 * R,
      J: 564 * R,
      d: 12 * ee,
      bf: 12 * ee
    },
    {
      name: "HSS12x12x1/2",
      type: "HSS",
      A: 21 * Fe,
      Iz: 452 * R,
      Iy: 452 * R,
      J: 724 * R,
      d: 12 * ee,
      bf: 12 * ee
    },
    {
      name: "HSS6x4x1/4",
      type: "HSS",
      A: 4.3 * Fe,
      Iz: 18 * R,
      Iy: 9.58 * R,
      J: 22.6 * R,
      d: 6 * ee,
      bf: 4 * ee
    },
    {
      name: "HSS6x4x3/8",
      type: "HSS",
      A: 6.18 * Fe,
      Iz: 23.8 * R,
      Iy: 12.3 * R,
      J: 30.3 * R,
      d: 6 * ee,
      bf: 4 * ee
    },
    {
      name: "HSS8x4x1/4",
      type: "HSS",
      A: 5.24 * Fe,
      Iz: 33.6 * R,
      Iy: 11.8 * R,
      J: 33 * R,
      d: 8 * ee,
      bf: 4 * ee
    },
    {
      name: "HSS8x4x3/8",
      type: "HSS",
      A: 7.58 * Fe,
      Iz: 45.1 * R,
      Iy: 15 * R,
      J: 44.5 * R,
      d: 8 * ee,
      bf: 4 * ee
    },
    {
      name: "HSS8x6x1/4",
      type: "HSS",
      A: 6.17 * Fe,
      Iz: 46.1 * R,
      Iy: 28.2 * R,
      J: 61.3 * R,
      d: 8 * ee,
      bf: 6 * ee
    },
    {
      name: "HSS8x6x3/8",
      type: "HSS",
      A: 8.97 * Fe,
      Iz: 63 * R,
      Iy: 37.5 * R,
      J: 84.6 * R,
      d: 8 * ee,
      bf: 6 * ee
    },
    {
      name: "HSS10x6x3/8",
      type: "HSS",
      A: 10.4 * Fe,
      Iz: 103 * R,
      Iy: 47.1 * R,
      J: 115 * R,
      d: 10 * ee,
      bf: 6 * ee
    },
    {
      name: "HSS12x8x3/8",
      type: "HSS",
      A: 13.2 * Fe,
      Iz: 196 * R,
      Iy: 102 * R,
      J: 249 * R,
      d: 12 * ee,
      bf: 8 * ee
    }
  ];
  function mn() {
    const e = {};
    return Io.forEach((b, P) => {
      b.type === "W" && (e[b.name] = P);
    }), e;
  }
  function bn() {
    const e = {};
    return Io.forEach((b, P) => {
      b.type === "HSS" && (e[b.name] = P);
    }), e;
  }
  function bl(e) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    const { nodes: b, elements: P, elementInputs: M, nodeInputs: Y, deformOutputs: H } = e, V = b.length * 6, W = P.length, O = P.filter((re) => re.length === 2).length, j = P.filter((re) => re.length >= 3).length, ye = document.createElement("div");
    ye.className = "rpt-overlay";
    let k = "";
    k += '<button class="rpt-close" id="rpt-close">\u2715 Close</button>', k += "<h1>Finite Element Analysis \u2014 Step-by-Step Report</h1>", k += '<div class="rpt-subtitle">Complete FEM derivation from element formulation to final results</div>', k += '<hr class="rpt-sep"/>', k += "<h2>1. Input Data</h2>", k += '<table class="rpt-info"><tbody>', k += `<tr><td>Number of nodes</td><td class="val">${b.length}</td></tr>`, k += `<tr><td>Number of elements</td><td class="val">${W} (${O} frames, ${j} shells)</td></tr>`, k += '<tr><td>DOFs per node</td><td class="val">6 (u<sub>x</sub>, u<sub>y</sub>, u<sub>z</sub>, \u03B8<sub>x</sub>, \u03B8<sub>y</sub>, \u03B8<sub>z</sub>)</td></tr>', k += `<tr><td>Total DOFs</td><td class="val">${V}</td></tr>`, k += "</tbody></table>", k += "<h3>1.1 Node Coordinates</h3>", k += '<table class="rpt-data"><thead><tr><th>Node</th><th>x</th><th>y</th><th>z</th></tr></thead><tbody>', b.forEach((re, te) => {
      k += `<tr><td>${te}</td><td>${nt(re[0])}</td><td>${nt(re[1])}</td><td>${nt(re[2])}</td></tr>`;
    }), k += "</tbody></table>", k += "<h3>1.2 Element Connectivity</h3>", k += '<table class="rpt-data"><thead><tr><th>Elem</th><th>Type</th><th>Nodes</th><th>L</th><th>E</th><th>A</th><th>I<sub>z</sub></th><th>I<sub>y</sub></th></tr></thead><tbody>', P.forEach((re, te) => {
      var _a2, _b2, _c2, _d2;
      const N = re.length === 2, _ = re.map((xe) => b[xe]), J = N ? Po(go(_[1], _[0])) : 0, ce = ((_a2 = M.elasticities) == null ? void 0 : _a2.get(te)) ?? 0, $e = ((_b2 = M.areas) == null ? void 0 : _b2.get(te)) ?? 0, Te = ((_c2 = M.momentsOfInertiaZ) == null ? void 0 : _c2.get(te)) ?? 0, Ve = ((_d2 = M.momentsOfInertiaY) == null ? void 0 : _d2.get(te)) ?? 0;
      k += `<tr><td>${te}</td><td>${N ? "Frame" : "Shell"}</td><td>${re.join(" \u2192 ")}</td>`, k += `<td>${nt(J)}</td><td>${nt(ce)}</td><td>${nt($e)}</td><td>${nt(Te)}</td><td>${nt(Ve)}</td></tr>`;
    }), k += "</tbody></table>", k += "<h2>2. Element Formulation</h2>", O > 0 && (k += "<h3>2.1 Frame Element (Euler-Bernoulli Beam)</h3>", k += "<p>Each frame element has 2 nodes and 12 DOFs: [u<sub>x</sub>, u<sub>y</sub>, u<sub>z</sub>, \u03B8<sub>x</sub>, \u03B8<sub>y</sub>, \u03B8<sub>z</sub>] per node.</p>", k += "<h4>2.1.1 Shape Functions</h4>", k += "<p><b>Axial</b> (linear interpolation):</p>", k += '<div class="rpt-eq">N\u2081(\u03BE) = 1 \u2212 \u03BE &nbsp;&nbsp;&nbsp; N\u2082(\u03BE) = \u03BE &nbsp;&nbsp;&nbsp; where \u03BE = x/L \u2208 [0, 1]</div>', k += "<p><b>Bending</b> (Hermite cubic polynomials):</p>", k += '<table class="rpt-eq-table"><tbody>', k += '<tr><td class="eq-name">H\u2081(\u03BE)</td><td>= 1 \u2212 3\u03BE\xB2 + 2\u03BE\xB3</td><td class="eq-desc">displacement at node i</td></tr>', k += '<tr><td class="eq-name">H\u2082(\u03BE)</td><td>= L\u03BE(1 \u2212 \u03BE)\xB2</td><td class="eq-desc">rotation at node i</td></tr>', k += '<tr><td class="eq-name">H\u2083(\u03BE)</td><td>= 3\u03BE\xB2 \u2212 2\u03BE\xB3</td><td class="eq-desc">displacement at node j</td></tr>', k += '<tr><td class="eq-name">H\u2084(\u03BE)</td><td>= L\u03BE\xB2(\u03BE \u2212 1)</td><td class="eq-desc">rotation at node j</td></tr>', k += "</tbody></table>", k += gl(), k += "<p><b>Torsion</b> (linear): same as axial.</p>", k += "<h4>2.1.2 Strain-Displacement Matrix B</h4>", k += "<p>The B matrix relates nodal displacements to internal strains:</p>", k += '<div class="rpt-eq">\u03B5<sub>axial</sub> = du/dx = (1/L)\xB7[\u22121, 1]\xB7{u<sub>i</sub>, u<sub>j</sub>}</div>', k += '<div class="rpt-eq">\u03BA<sub>bending</sub> = d\xB2v/dx\xB2 = B<sub>b</sub>\xB7{v<sub>i</sub>, \u03B8<sub>i</sub>, v<sub>j</sub>, \u03B8<sub>j</sub>}</div>', k += '<div class="rpt-eq">B<sub>b</sub>(\u03BE) = (1/L\xB2)\xB7[\u22126+12\u03BE, L(\u22124+6\u03BE), 6\u221212\u03BE, L(\u22122+6\u03BE)]</div>', k += '<div class="rpt-eq">\u03C6\u2032<sub>torsion</sub> = d\u03B8<sub>x</sub>/dx = (1/L)\xB7[\u22121, 1]\xB7{\u03B8<sub>xi</sub>, \u03B8<sub>xj</sub>}</div>', k += "<h4>2.1.3 Constitutive Relations D</h4>", k += '<table class="rpt-eq-table"><tbody>', k += '<tr><td class="eq-name">Axial:</td><td>\u03C3 = E\xB7\u03B5</td><td>\u2192 D<sub>axial</sub> = E\xB7A</td></tr>', k += '<tr><td class="eq-name">Bending Z:</td><td>M<sub>z</sub> = EI<sub>z</sub>\xB7\u03BA</td><td>\u2192 D<sub>bz</sub> = E\xB7I<sub>z</sub></td></tr>', k += '<tr><td class="eq-name">Bending Y:</td><td>M<sub>y</sub> = EI<sub>y</sub>\xB7\u03BA</td><td>\u2192 D<sub>by</sub> = E\xB7I<sub>y</sub></td></tr>', k += '<tr><td class="eq-name">Torsion:</td><td>T = GJ\xB7\u03C6\u2032</td><td>\u2192 D<sub>torsion</sub> = G\xB7J</td></tr>', k += "</tbody></table>", k += "<h4>2.1.4 Local Stiffness Matrix K<sub>local</sub></h4>", k += "<p>Obtained by analytical integration:</p>", k += '<div class="rpt-eq rpt-eq-highlight">K<sub>local</sub> = \u222B\u2080\u1D38 B\u1D40\xB7D\xB7B dx</div>', k += "<p>Result for Euler-Bernoulli beam (12\xD712 symmetric):</p>", k += '<div class="rpt-eq-small">', k += "K[0,0] = EA/L &nbsp;&nbsp; K[1,1] = 12EI<sub>z</sub>/L\xB3 &nbsp;&nbsp; K[2,2] = 12EI<sub>y</sub>/L\xB3 &nbsp;&nbsp; K[3,3] = GJ/L<br/>", k += "K[4,4] = 4EI<sub>y</sub>/L &nbsp;&nbsp; K[5,5] = 4EI<sub>z</sub>/L &nbsp;&nbsp; K[1,5] = 6EI<sub>z</sub>/L\xB2 &nbsp;&nbsp; K[2,4] = \u22126EI<sub>y</sub>/L\xB2", k += "</div>", k += "<h4>2.1.5 Transformation Matrix T</h4>", k += "<p>Direction cosines of element axis:</p>", k += '<div class="rpt-eq">l = (x<sub>j</sub>\u2212x<sub>i</sub>)/L &nbsp;&nbsp; m = (y<sub>j</sub>\u2212y<sub>i</sub>)/L &nbsp;&nbsp; n = (z<sub>j</sub>\u2212z<sub>i</sub>)/L &nbsp;&nbsp; D = \u221A(l\xB2+m\xB2)</div>', k += '<div class="rpt-eq">\u03BB = [l, m, n; \u2212m/D, l/D, 0; \u2212ln/D, \u2212mn/D, D] &nbsp;&nbsp; (3\xD73)</div>', k += '<div class="rpt-eq rpt-eq-highlight">T = I\u2084 \u2297 \u03BB &nbsp;&nbsp; (12\xD712 block-diagonal, Kronecker product)</div>', k += "<p>Special case for vertical elements (n = \xB11): \u03BB uses fixed axes.</p>", k += "<h4>2.1.6 Global Stiffness Matrix</h4>", k += '<div class="rpt-eq rpt-eq-highlight">K<sub>global</sub> = T\u1D40 \xB7 K<sub>local</sub> \xB7 T</div>'), k += "<h2>3. Numerical Results per Element</h2>", k += "<p>For each element, we compute K<sub>local</sub>, T, and K<sub>global</sub> = T\u1D40\xB7K\xB7T with the actual properties:</p>";
    for (let re = 0; re < W; re++) {
      const te = P[re], N = te.map((at) => b[at]);
      if (!(te.length === 2)) continue;
      const J = Po(go(N[1], N[0])), ce = ((_a = M.elasticities) == null ? void 0 : _a.get(re)) ?? 0, $e = ((_b = M.areas) == null ? void 0 : _b.get(re)) ?? 0, Te = ((_c = M.momentsOfInertiaZ) == null ? void 0 : _c.get(re)) ?? 0, Ve = ((_d = M.momentsOfInertiaY) == null ? void 0 : _d.get(re)) ?? 0, xe = ((_e = M.shearModuli) == null ? void 0 : _e.get(re)) ?? 0, De = ((_f = M.torsionalConstants) == null ? void 0 : _f.get(re)) ?? 0;
      let He = null, be = null, Se = null;
      try {
        He = vn(N, M, re), be = yn(N), Se = no(os(be), no(He, be));
      } catch {
        continue;
      }
      const ze = go(N[1], N[0]), Je = ze[0] / J, st = ze[1] / J, Ue = ze[2] / J;
      k += '<div class="rpt-elem-block">', k += `<h3 class="rpt-elem-title" data-toggle="elem${re}">\u25B6 Element ${re} \u2014 Nodes ${te[0]} \u2192 ${te[1]}, L = ${nt(J)}</h3>`, k += `<div id="rpt-elem${re}" class="rpt-elem-body" style="display:none">`, k += "<h4>Properties (numerical substitution)</h4>", k += '<div class="rpt-eq-small">', k += `E = ${nt(ce)} &nbsp;&nbsp; A = ${nt($e)} &nbsp;&nbsp; I<sub>z</sub> = ${nt(Te)} &nbsp;&nbsp; I<sub>y</sub> = ${nt(Ve)} &nbsp;&nbsp; G = ${nt(xe)} &nbsp;&nbsp; J = ${nt(De)}<br/>`, k += `EA/L = ${nt(ce)}\xB7${nt($e)}/${nt(J)} = <b>${nt(ce * $e / J)}</b><br/>`, k += `12EI<sub>z</sub>/L\xB3 = 12\xB7${nt(ce)}\xB7${nt(Te)}/${nt(J)}\xB3 = <b>${nt(12 * ce * Te / J ** 3)}</b><br/>`, k += `12EI<sub>y</sub>/L\xB3 = 12\xB7${nt(ce)}\xB7${nt(Ve)}/${nt(J)}\xB3 = <b>${nt(12 * ce * Ve / J ** 3)}</b><br/>`, k += `GJ/L = ${nt(xe)}\xB7${nt(De)}/${nt(J)} = <b>${nt(xe * De / J)}</b>`, k += "</div>", k += "<h4>Direction cosines</h4>", k += `<div class="rpt-eq-small">l = ${hn(Je)}, m = ${hn(st)}, n = ${hn(Ue)}, D = ${hn(Math.sqrt(Je ** 2 + st ** 2))}</div>`, k += "<h4>K<sub>local</sub> (12\xD712)</h4>", k += Xn(He, 12), k += "<h4>T \u2014 Transformation (12\xD712)</h4>", k += Xn(be, 12), k += "<h4>K<sub>global</sub> = T\u1D40 \xB7 K<sub>local</sub> \xB7 T</h4>", k += Xn(Se, 12), k += "<h4>Assembly</h4>", k += `<div class="rpt-eq-small">Global DOFs: node ${te[0]} \u2192 [${te[0] * 6}..${te[0] * 6 + 5}], node ${te[1]} \u2192 [${te[1] * 6}..${te[1] * 6 + 5}]</div>`, k += "</div></div>";
    }
    k += "<h2>4. Global Assembly</h2>", k += `<div class="rpt-eq rpt-eq-highlight">K<sub>total</sub> = \u03A3<sub>e=0</sub><sup>${W - 1}</sup> (T<sub>e</sub>\u1D40 \xB7 k<sub>e</sub> \xB7 T<sub>e</sub>)</div>`, k += "<p>Each element contributes its K<sub>global</sub> to the positions determined by its node DOF indices.</p>", k += xl(P, b.length), k += "<h2>5. Boundary Conditions</h2>";
    const se = [
      "u<sub>x</sub>",
      "u<sub>y</sub>",
      "u<sub>z</sub>",
      "\u03B8<sub>x</sub>",
      "\u03B8<sub>y</sub>",
      "\u03B8<sub>z</sub>"
    ], he = [];
    if (k += "<h3>5.1 Supports (fixed DOFs)</h3>", Y.supports && Y.supports.size > 0) {
      k += '<table class="rpt-data"><thead><tr><th>Node</th>';
      for (const re of se) k += `<th>${re}</th>`;
      k += "</tr></thead><tbody>", Y.supports.forEach((re, te) => {
        k += `<tr><td>${te}</td>`, re.forEach((N, _) => {
          N && he.push(te * 6 + _), k += `<td class="${N ? "fixed" : ""}">${N ? "Fixed" : "Free"}</td>`;
        }), k += "</tr>";
      }), k += "</tbody></table>";
    }
    if (k += `<div class="rpt-eq-small">Fixed DOFs: [${he.join(", ")}] \u2192 ${he.length} constraints<br/>`, k += `Free DOFs: ${V} \u2212 ${he.length} = <b>${V - he.length}</b></div>`, k += "<h3>5.2 Applied Loads</h3>", Y.loads && Y.loads.size > 0) {
      k += '<table class="rpt-data"><thead><tr><th>Node</th>';
      const re = [
        "F<sub>x</sub>",
        "F<sub>y</sub>",
        "F<sub>z</sub>",
        "M<sub>x</sub>",
        "M<sub>y</sub>",
        "M<sub>z</sub>"
      ];
      for (const te of re) k += `<th>${te}</th>`;
      k += "</tr></thead><tbody>", Y.loads.forEach((te, N) => {
        k += `<tr><td>${N}</td>`, te.forEach((_) => {
          const J = Math.abs(_) > 1e-10;
          k += `<td class="${J ? "nz" : ""}">${J ? nt(_) : "0"}</td>`;
        }), k += "</tr>";
      }), k += "</tbody></table>";
    }
    if (k += "<h2>6. Solution</h2>", k += "<p>After removing fixed DOFs, the reduced system is:</p>", k += '<div class="rpt-eq rpt-eq-highlight">K<sub>free</sub> \xB7 u<sub>free</sub> = F<sub>free</sub></div>', k += "<p>Solved using LU decomposition with partial pivoting (sparse matrix).</p>", k += "<h3>6.1 Nodal Displacements</h3>", H == null ? void 0 : H.deformations) {
      k += '<table class="rpt-data"><thead><tr><th>Node</th>';
      for (const re of se) k += `<th>${re}</th>`;
      k += "</tr></thead><tbody>", H.deformations.forEach((re, te) => {
        k += `<tr><td>${te}</td>`, re.forEach((N) => {
          const _ = Math.abs(N) > 1e-10;
          k += `<td class="${_ ? "nz" : ""}">${nt(N, 6)}</td>`;
        }), k += "</tr>";
      }), k += "</tbody></table>";
    }
    if (k += "<h3>6.2 Reactions</h3>", k += '<div class="rpt-eq">R = K<sub>total</sub> \xB7 u (extract at fixed DOFs)</div>', H == null ? void 0 : H.reactions) {
      k += '<table class="rpt-data"><thead><tr><th>Node</th>';
      for (const re of se) k += `<th>${re}</th>`;
      k += "</tr></thead><tbody>", H.reactions.forEach((re, te) => {
        k += `<tr><td>${te}</td>`, re.forEach((N) => {
          const _ = Math.abs(N) > 1e-10;
          k += `<td class="${_ ? "nz-react" : ""}">${_ ? nt(N, 4) : "0"}</td>`;
        }), k += "</tr>";
      }), k += "</tbody></table>";
    }
    if (k += "<h2>7. Internal Forces</h2>", k += "<p>For each element, transform global displacements to local and multiply by K<sub>local</sub>:</p>", k += '<div class="rpt-eq">u<sub>local</sub> = T \xB7 u<sub>global</sub></div>', k += '<div class="rpt-eq rpt-eq-highlight">f<sub>local</sub> = K<sub>local</sub> \xB7 u<sub>local</sub></div>', H == null ? void 0 : H.deformations) {
      const re = [
        "N",
        "V<sub>y</sub>",
        "V<sub>z</sub>",
        "M<sub>x</sub>",
        "M<sub>y</sub>",
        "M<sub>z</sub>"
      ];
      k += '<table class="rpt-data"><thead><tr><th>Elem</th><th>Nodes</th>';
      for (const te of re) k += `<th>${te}<sub>i</sub></th>`;
      for (const te of re) k += `<th>${te}<sub>j</sub></th>`;
      k += "</tr></thead><tbody>";
      for (let te = 0; te < W; te++) {
        const N = P[te];
        if (N.length !== 2) continue;
        const _ = N.map((J) => b[J]);
        try {
          const J = vn(_, M, te), ce = yn(_), $e = [];
          for (const xe of N) {
            const De = ((_g = H.deformations) == null ? void 0 : _g.get(xe)) || [
              0,
              0,
              0,
              0,
              0,
              0
            ];
            $e.push(...De);
          }
          const Te = no(ce, $e), Ve = no(J, Te);
          k += `<tr><td>${te}</td><td>${N.join("\u2192")}</td>`;
          for (let xe = 0; xe < 12; xe++) {
            const De = Math.abs(Ve[xe]) > 1e-10;
            k += `<td class="${De ? "nz" : ""}">${nt(Ve[xe], 2)}</td>`;
          }
          k += "</tr>";
        } catch {
        }
      }
      k += "</tbody></table>";
    }
    const ue = `
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
    return ye.innerHTML = ue + k, (_h = ye.querySelector("#rpt-close")) == null ? void 0 : _h.addEventListener("click", () => ye.remove()), ye.querySelectorAll("[data-toggle]").forEach((re) => {
      re.addEventListener("click", () => {
        const te = re.dataset.toggle, N = ye.querySelector(`#rpt-${te}`);
        if (N) {
          const _ = N.style.display !== "none";
          N.style.display = _ ? "none" : "", re.textContent = re.textContent.replace(/^[▼▶]/, _ ? "\u25B6" : "\u25BC");
        }
      });
    }), ye;
  }
  function nt(e, b = 2) {
    return Math.abs(e) < 1e-10 ? "0" : Math.abs(e) >= 1e7 || Math.abs(e) < 0.01 && e !== 0 ? e.toExponential(b) : e.toFixed(b);
  }
  function hn(e) {
    return Math.abs(e) < 1e-10 ? "0" : e.toFixed(4);
  }
  function Xn(e, b) {
    var _a;
    const P = Math.min(b, 12);
    let M = '<div style="overflow-x:auto"><table class="rpt-mtx">';
    for (let Y = 0; Y < P; Y++) {
      M += "<tr>";
      for (let H = 0; H < P; H++) {
        const V = ((_a = e[Y]) == null ? void 0 : _a[H]) ?? 0, W = Math.abs(V) < 1e-10;
        M += `<td class="${W ? "z" : ""} ${Y === H && !W ? "diag" : ""}">${W ? "0" : hl(V)}</td>`;
      }
      M += "</tr>";
    }
    return M += "</table>", b > P && (M += `<div style="color:#888;font-size:9pt">(showing ${P}\xD7${P} of ${b}\xD7${b})</div>`), M += "</div>", M;
  }
  function hl(e) {
    return Math.abs(e) >= 1e6 || Math.abs(e) < 0.01 && e !== 0 ? e.toExponential(1) : Math.abs(e) >= 100 ? e.toFixed(0) : e.toFixed(2);
  }
  function gl() {
    const V = [
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
    let W = '<svg viewBox="0 0 600 180" style="width:100%;max-width:600px;border:1px solid #ddd;border-radius:4px;margin:8px 0;background:#fafafa">';
    W += `<line x1="30" y1="${180 / 2}" x2="570" y2="${180 / 2}" stroke="#ccc" stroke-width="1"/>`, W += '<line x1="30" y1="20" x2="30" y2="160" stroke="#ccc" stroke-width="1"/>', W += `<text x="${600 / 2}" y="175" fill="#888" font-size="10" text-anchor="middle" font-family="sans-serif">\u03BE (0 \u2192 1)</text>`, W += `<text x="25" y="${180 / 2 - 60 - 5}" fill="#888" font-size="9" text-anchor="end" font-family="sans-serif">1</text>`, W += `<text x="25" y="${180 / 2 + 4}" fill="#888" font-size="9" text-anchor="end" font-family="sans-serif">0</text>`;
    for (const O of V) {
      let j = "";
      for (let he = 0; he <= 80; he++) {
        const ue = he / 80, re = 30 + ue * 540, te = 180 / 2 - O.fn(ue) * 60;
        j += (he === 0 ? "M" : "L") + `${re.toFixed(1)},${te.toFixed(1)}`;
      }
      W += `<path d="${j}" fill="none" stroke="${O.color}" stroke-width="2.5"/>`;
      const ye = 0.75, k = 30 + ye * 540 + 8, se = 180 / 2 - O.fn(ye) * 60 - 6;
      W += `<text x="${k}" y="${se}" fill="${O.color}" font-size="11" font-weight="bold" font-family="sans-serif">${O.name}</text>`;
    }
    return W += "</svg>", W;
  }
  function xl(e, b) {
    const P = b * 6, M = Math.min(P, 30);
    let Y = "<p>Assembly contribution map (number = how many elements contribute to each K<sub>total</sub> entry):</p>";
    Y += '<div style="overflow-x:auto"><table class="rpt-assembly-map">', Y += "<tr><td></td>";
    for (let V = 0; V < M; V++) Y += `<td style="color:#003366;font-weight:bold;font-size:7px">${V}</td>`;
    Y += "</tr>";
    const H = Array.from({
      length: M
    }, () => Array(M).fill(0));
    for (let V = 0; V < e.length; V++) {
      const W = e[V].map((O) => O * 6);
      for (const O of W) for (const j of W) for (let ye = 0; ye < 6; ye++) for (let k = 0; k < 6; k++) {
        const se = O + ye, he = j + k;
        se < M && he < M && H[se][he]++;
      }
    }
    for (let V = 0; V < M; V++) {
      Y += `<tr><td style="color:#003366;font-weight:bold;font-size:7px">${V}</td>`;
      for (let W = 0; W < M; W++) {
        const O = H[V][W], j = O === 0 ? "#fff" : O === 1 ? "#e8f0fe" : O === 2 ? "#c6dcf5" : "#a0c4e8", ye = O === 0 ? "" : O.toString();
        Y += `<td style="background:${j};color:#003366">${ye}</td>`;
      }
      Y += "</tr>";
    }
    return Y += "</table></div>", P > M && (Y += `<div style="color:#888;font-size:9pt">(showing ${M}\xD7${M} of ${P}\xD7${P})</div>`), Y;
  }
  let Kn = false;
  function vl(e) {
    if (Kn || window.katex) {
      Kn = true, e();
      return;
    }
    const b = document.createElement("link");
    b.rel = "stylesheet", b.href = "https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css", document.head.appendChild(b);
    const P = document.createElement("script");
    P.src = "https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.js", P.onload = () => {
      Kn = true, e();
    }, document.head.appendChild(P);
  }
  function aa(e, b = false) {
    try {
      if (window.katex) return window.katex.renderToString(e, {
        displayMode: b,
        throwOnError: false
      });
    } catch {
    }
    return `<code class="er-tex-fallback">${e}</code>`;
  }
  function yl(e, b, P, M, Y, H) {
    var _a, _b, _c, _d, _e, _f;
    const V = P[e], W = V.map((be) => b[be]), O = V.length === 2, j = O ? Po(go(W[1], W[0])) : 0, ye = ((_a = M.elasticities) == null ? void 0 : _a.get(e)) ?? 0, k = ((_b = M.areas) == null ? void 0 : _b.get(e)) ?? 0, se = ((_c = M.momentsOfInertiaZ) == null ? void 0 : _c.get(e)) ?? 0, he = ((_d = M.momentsOfInertiaY) == null ? void 0 : _d.get(e)) ?? 0, ue = ((_e = M.shearModuli) == null ? void 0 : _e.get(e)) ?? 0, re = ((_f = M.torsionalConstants) == null ? void 0 : _f.get(e)) ?? 0;
    let te = null, N = null, _ = null;
    try {
      te = vn(W, M, e), N = yn(W), _ = no(os(N), no(te, N));
    } catch {
    }
    const J = O ? go(W[1], W[0]) : [
      0,
      0,
      0
    ], ce = j > 0 ? J[0] / j : 0, $e = j > 0 ? J[1] / j : 0, Te = j > 0 ? J[2] / j : 0, Ve = Math.sqrt(ce ** 2 + $e ** 2), xe = [];
    if ((Y == null ? void 0 : Y.deformations) && O) for (const be of V) {
      const Se = Y.deformations.get(be) || [
        0,
        0,
        0,
        0,
        0,
        0
      ];
      xe.push(...Se);
    }
    let De = [], He = [];
    if (xe.length === 12 && N && te) {
      try {
        De = no(N, xe);
      } catch {
        De = Array(12).fill(0);
      }
      try {
        He = no(te, De);
      } catch {
        He = Array(12).fill(0);
      }
    }
    return {
      elemIdx: e,
      elem: V,
      elmNodes: W,
      isFrame: O,
      L: j,
      E: ye,
      A: k,
      Iz: se,
      Iy: he,
      G: ue,
      J: re,
      kLocal: te,
      T: N,
      kGlobal: _,
      l: ce,
      m: $e,
      n: Te,
      D: Ve,
      uGlobal: xe,
      uLocal: De,
      fLocal: He,
      dOut: Y,
      aOut: H,
      totalNodes: b.length
    };
  }
  function $l(e, b, P, M, Y, H) {
    var _a, _b;
    const V = yl(e, b, P, M, Y, H), W = document.createElement("div");
    return W.className = "er-panel", W.innerHTML = El + `
    <div class="er-header">
      <span class="er-badge">Element ${e}</span>
      <span class="er-type">${V.isFrame ? "Frame" : "Shell"} \u2014 Nodes ${V.elem.join(" \u2192 ")} \u2014 L = ${Ye(V.L)}</span>
      <button class="er-fullscreen" id="er-fullscreen" title="Pantalla completa">\u26F6</button>
      <button class="er-close" id="er-close">\u2715</button>
    </div>
    <div class="er-tabs">
      <button class="er-tab active" data-tab="tabla">Tabla</button>
      <button class="er-tab" data-tab="math">Matematica Explicada</button>
      <button class="er-tab" data-tab="resumen">Resumen</button>
    </div>
    <div class="er-body" id="er-body-tabla">${Ml(V)}</div>
    <div class="er-body" id="er-body-math" style="display:none">${la(V)}</div>
    <div class="er-body" id="er-body-resumen" style="display:none">${wl(V)}</div>
  `, W.querySelectorAll(".er-tab").forEach((O) => {
      O.addEventListener("click", () => {
        W.querySelectorAll(".er-tab").forEach((ye) => ye.classList.remove("active")), O.classList.add("active");
        const j = O.dataset.tab;
        W.querySelectorAll(".er-body").forEach((ye) => ye.style.display = "none"), W.querySelector(`#er-body-${j}`).style.display = "";
      });
    }), (_a = W.querySelector("#er-close")) == null ? void 0 : _a.addEventListener("click", () => W.remove()), (_b = W.querySelector("#er-fullscreen")) == null ? void 0 : _b.addEventListener("click", () => {
      const O = W.classList.toggle("er-fullscreen-mode"), j = W.querySelector("#er-fullscreen");
      j && (j.textContent = O ? "\u22A1" : "\u26F6");
    }), setTimeout(() => {
      const O = W.querySelector("#er-sf-canvas");
      O && Zn(O);
      const j = W.querySelector("#er-sf-canvas-math");
      j && Zn(j);
    }, 50), vl(() => {
      const O = W.querySelector("#er-body-math");
      O && (O.innerHTML = la(V)), setTimeout(() => {
        const j = W.querySelector("#er-sf-canvas-math");
        j && Zn(j);
      }, 50), W.querySelectorAll(".er-deriv-header").forEach((j) => {
        j.addEventListener("click", () => {
          const ye = j.dataset.toggle, k = W.querySelector(`#er-${ye}`);
          k && (k.style.display = k.style.display === "none" ? "" : "none");
        });
      });
    }), W;
  }
  function Ml(e) {
    let b = "";
    if (b += '<div class="er-section-title">1. Propiedades</div>', b += '<table class="er-props">', b += `<tr><td>E</td><td>${Ye(e.E)}</td><td>A</td><td>${Ye(e.A)}</td></tr>`, b += `<tr><td>I<sub>z</sub></td><td>${Ye(e.Iz)}</td><td>I<sub>y</sub></td><td>${Ye(e.Iy)}</td></tr>`, b += `<tr><td>G</td><td>${Ye(e.G)}</td><td>J</td><td>${Ye(e.J)}</td></tr>`, b += "</table>", e.kLocal && (b += `<div class="er-section-title">2. K<sub>local</sub> (${e.kLocal.length}\xD7${e.kLocal.length})</div>`, b += an(e.kLocal)), e.T && (b += '<div class="er-section-title">3. T \u2014 Transformaci\xF3n</div>', b += an(e.T)), e.kGlobal && (b += '<div class="er-section-title">4. K<sub>global</sub> = T<sup>T</sup>\xB7K\xB7T</div>', b += an(e.kGlobal)), b += '<div class="er-section-title">5. Desplazamientos</div>', e.uGlobal.length > 0) {
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
        for (let Y = 0; Y < 6; Y++) {
          const H = e.uGlobal[M * 6 + Y];
          b += `${P[Y]}=<span class="${Math.abs(H) > 1e-10 ? "nz" : ""}">${Ye(H, 6)}</span> `;
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
      for (let M = 0; M < 6; M++) b += `<td class="${Math.abs(e.fLocal[M]) > 1e-10 ? "nz" : ""}">${Ye(e.fLocal[M], 3)}</td>`;
      b += "</tr><tr><td>Nodo j</td>";
      for (let M = 6; M < 12; M++) b += `<td class="${Math.abs(e.fLocal[M]) > 1e-10 ? "nz" : ""}">${Ye(e.fLocal[M], 3)}</td>`;
      b += "</tr></table>";
    } else b += '<div class="er-sub">Sin an\xE1lisis</div>';
    return b;
  }
  function la(e) {
    if (!e.isFrame) return '<div class="er-sub">Shell element math: coming soon</div>';
    let b = "";
    const P = (ye) => aa(ye), M = (ye) => aa(ye, true);
    b += '<div class="er-section-title">1. Geometria del elemento</div>', b += "<p>Viga Euler-Bernoulli con 2 nodos y 6 GDL por nodo:</p>", b += `<div class="er-eq">${M("\\text{DOFs} = [u_x,\\, u_y,\\, u_z,\\, \\theta_x,\\, \\theta_y,\\, \\theta_z] \\quad \\Rightarrow \\quad 12 \\text{ GDL totales}")}</div>`, b += '<div class="er-eq-num">', b += `${P("\\text{Nodo } i")} = (${e.elmNodes[0].map((ye) => Ye(ye)).join(", ")})<br/>`, b += `${P("\\text{Nodo } j")} = (${e.elmNodes[1].map((ye) => Ye(ye)).join(", ")})<br/>`, b += `${M(`L = \\sqrt{(x_j - x_i)^2 + (y_j - y_i)^2 + (z_j - z_i)^2} = \\mathbf{${Ye(e.L)}}`)}`, b += "</div>", b += '<div class="er-section-title">2. Funciones de forma</div>', b += "<p>La viga usa <b>interpolacion lineal</b> para axial/torsion y <b>polinomios cubicos de Hermite</b> para flexion.</p>", b += '<div class="er-subsec">2.1 Axial y Torsion (lineal)</div>', b += `<div class="er-eq">${M("N_1(\\xi) = 1 - \\xi \\qquad N_2(\\xi) = \\xi \\qquad \\text{donde } \\xi = \\frac{x}{L} \\in [0,1]")}</div>`, b += "<p>Primera derivada:</p>", b += `<div class="er-eq">${M("\\frac{dN_1}{d\\xi} = -1 \\qquad \\frac{dN_2}{d\\xi} = 1")}</div>`, b += '<div class="er-subsec">2.2 Flexion (Hermite cubicos)</div>', b += `<p>Las funciones de Hermite garantizan continuidad ${P("C^1")} (desplazamiento y pendiente continuos):</p>`, b += `<div class="er-eq">${M("H_1(\\xi) = 1 - 3\\xi^2 + 2\\xi^3 \\qquad \\text{(desplazamiento nodo } i\\text{)}")}</div>`, b += `<div class="er-eq">${M("H_2(\\xi) = L\\,\\xi\\,(1-\\xi)^2 \\qquad \\text{(rotacion nodo } i\\text{)}")}</div>`, b += `<div class="er-eq">${M("H_3(\\xi) = 3\\xi^2 - 2\\xi^3 \\qquad \\text{(desplazamiento nodo } j\\text{)}")}</div>`, b += `<div class="er-eq">${M("H_4(\\xi) = L\\,\\xi^2(\\xi - 1) \\qquad \\text{(rotacion nodo } j\\text{)}")}</div>`, b += `<div class="er-subsec">Derivadas segunda (curvatura ${P("\\kappa = \\frac{d^2v}{dx^2}")}):</div>`, b += `<div class="er-eq">${M("H_1'' = \\frac{-6}{L^2}(1-2\\xi) \\qquad H_2'' = \\frac{-2}{L}(2-3\\xi)")}</div>`, b += `<div class="er-eq">${M("H_3'' = \\frac{6}{L^2}(1-2\\xi) \\qquad H_4'' = \\frac{-2}{L}(1-3\\xi)")}</div>`, b += '<canvas id="er-sf-canvas-math" width="500" height="250" style="width:100%;border:1px solid var(--fem-border);border-radius:4px;margin:8px 0;"></canvas>', b += '<div class="er-section-title">3. Matriz B (strain-displacement)</div>', b += "<p>La matriz B relaciona desplazamientos nodales con deformaciones internas:</p>", b += `<div class="er-eq">${M("\\boldsymbol{\\varepsilon} = \\mathbf{B} \\cdot \\mathbf{u}")}</div>`, b += '<div class="er-subsec">3.1 Deformacion axial</div>', b += `<div class="er-eq">${M("\\varepsilon_{axial} = \\frac{du}{dx} = \\frac{1}{L} \\begin{bmatrix} -1 & 1 \\end{bmatrix} \\begin{Bmatrix} u_i \\\\ u_j \\end{Bmatrix}")}</div>`, b += `<div class="er-subsec">3.2 Curvatura por flexion (plano XY \u2192 ${P("I_z")})</div>`, b += `<div class="er-eq">${M("\\kappa_z = \\frac{d^2 v}{dx^2} = \\mathbf{B}_{bz} \\cdot \\begin{Bmatrix} v_i \\\\ \\theta_{zi} \\\\ v_j \\\\ \\theta_{zj} \\end{Bmatrix}")}</div>`, b += `<div class="er-eq">${M("\\mathbf{B}_{bz}(\\xi) = \\frac{1}{L^2} \\begin{bmatrix} H_1'' & H_2'' & H_3'' & H_4'' \\end{bmatrix}")}</div>`, b += `<div class="er-subsec">3.3 Curvatura (plano XZ \u2192 ${P("I_y")})</div>`, b += `<div class="er-eq">${M("\\kappa_y = \\frac{d^2 w}{dx^2} = \\mathbf{B}_{by} \\cdot \\begin{Bmatrix} w_i \\\\ \\theta_{yi} \\\\ w_j \\\\ \\theta_{yj} \\end{Bmatrix}")}</div>`, b += '<div class="er-subsec">3.4 Torsion</div>', b += `<div class="er-eq">${M("\\phi' = \\frac{d\\theta_x}{dx} = \\frac{1}{L} \\begin{bmatrix} -1 & 1 \\end{bmatrix} \\begin{Bmatrix} \\theta_{xi} \\\\ \\theta_{xj} \\end{Bmatrix}")}</div>`, b += '<div class="er-section-title">4. Relaciones constitutivas D</div>', b += "<p>Cada modo de deformacion tiene su rigidez material:</p>", b += `<div class="er-eq">${M(`\\text{Axial: } \\sigma = E \\cdot \\varepsilon \\;\\Rightarrow\\; D_{ax} = EA = ${Ye(e.E)} \\times ${Ye(e.A)} = \\mathbf{${Ye(e.E * e.A)}}`)}</div>`, b += `<div class="er-eq">${M(`\\text{Flex Z: } M_z = EI_z \\cdot \\kappa \\;\\Rightarrow\\; D_{bz} = EI_z = ${Ye(e.E)} \\times ${Ye(e.Iz)} = \\mathbf{${Ye(e.E * e.Iz)}}`)}</div>`, b += `<div class="er-eq">${M(`\\text{Flex Y: } M_y = EI_y \\cdot \\kappa \\;\\Rightarrow\\; D_{by} = EI_y = ${Ye(e.E)} \\times ${Ye(e.Iy)} = \\mathbf{${Ye(e.E * e.Iy)}}`)}</div>`, b += `<div class="er-eq">${M(`\\text{Torsion: } T = GJ \\cdot \\phi' \\;\\Rightarrow\\; D_t = GJ = ${Ye(e.G)} \\times ${Ye(e.J)} = \\mathbf{${Ye(e.G * e.J)}}`)}</div>`, b += `<div class="er-section-title">5. Integracion \u2192 ${P("\\mathbf{K}_{local}")}</div>`, b += "<p>La matriz de rigidez local se obtiene integrando analiticamente:</p>", b += `<div class="er-eq er-eq-main">${M("\\mathbf{K}_{local} = \\int_0^L \\mathbf{B}^T \\cdot \\mathbf{D} \\cdot \\mathbf{B} \\; dx")}</div>`;
    const Y = e.E * e.A / e.L, H = e.E * e.Iz / e.L ** 3, V = e.E * e.Iy / e.L ** 3, W = e.G * e.J / e.L;
    if (b += '<div class="er-deriv-block">', b += '<div class="er-deriv-header" data-toggle="deriv-axial">\u{1F4D6} K[0,0] = EA/L \u2014 <i>click para ver derivacion completa</i></div>', b += '<div id="er-deriv-axial" class="er-deriv-body" style="display:none">', b += "<p><b>Paso 1:</b> Funcion de forma axial</p>", b += `<div class="er-eq">${M("u(\\xi) = N_1 \\cdot u_i + N_2 \\cdot u_j = (1-\\xi)\\,u_i + \\xi\\,u_j")}</div>`, b += "<p><b>Paso 2:</b> Derivada (deformacion)</p>", b += `<div class="er-eq">${M("\\varepsilon = \\frac{du}{dx} = \\frac{1}{L}\\frac{du}{d\\xi} = \\frac{1}{L}(-u_i + u_j)")}</div>`, b += `<div class="er-eq">${M("\\mathbf{B}_{ax} = \\frac{1}{L}\\begin{bmatrix} -1 & 1 \\end{bmatrix}")}</div>`, b += `<p><b>Paso 3:</b> Integracion ${P("K = \\int_0^L B^T \\cdot EA \\cdot B \\; dx")}</p>`, b += `<div class="er-eq">${M("K_{ax} = \\int_0^L \\frac{1}{L}\\begin{bmatrix}-1\\\\1\\end{bmatrix} \\cdot EA \\cdot \\frac{1}{L}\\begin{bmatrix}-1 & 1\\end{bmatrix} dx")}</div>`, b += `<div class="er-eq">${M("= \\frac{EA}{L^2} \\begin{bmatrix}1 & -1\\\\-1 & 1\\end{bmatrix} \\int_0^L dx = \\frac{EA}{L^2} \\cdot L \\begin{bmatrix}1 & -1\\\\-1 & 1\\end{bmatrix}")}</div>`, b += `<div class="er-eq er-eq-main">${M(`K_{ax} = \\frac{EA}{L}\\begin{bmatrix}1 & -1\\\\-1 & 1\\end{bmatrix} = \\frac{${Ye(e.E)}\\times${Ye(e.A)}}{${Ye(e.L)}}\\begin{bmatrix}1 & -1\\\\-1 & 1\\end{bmatrix}`)}</div>`, b += `<div class="er-eq">${M(`K[0,0] = K[6,6] = \\frac{EA}{L} = \\mathbf{${Ye(Y)}}`)}</div>`, b += "</div></div>", b += '<div class="er-deriv-block">', b += '<div class="er-deriv-header" data-toggle="deriv-bend">\u{1F4D6} K[1,1] = 12EI<sub>z</sub>/L\xB3 \u2014 <i>click para ver derivacion completa</i></div>', b += '<div id="er-deriv-bend" class="er-deriv-body" style="display:none">', b += `<p><b>Paso 1:</b> Funcion de forma Hermite para ${P("v(\\xi)")}</p>`, b += `<div class="er-eq">${M("v(\\xi) = H_1 v_i + H_2 \\theta_i + H_3 v_j + H_4 \\theta_j")}</div>`, b += "<p><b>Paso 2:</b> Segunda derivada (curvatura)</p>", b += `<div class="er-eq">${M("\\kappa = \\frac{d^2v}{dx^2} = \\frac{1}{L^2}\\frac{d^2v}{d\\xi^2}")}</div>`, b += `<div class="er-eq">${M("H_1'' = -6+12\\xi, \\quad H_2'' = L(-4+6\\xi), \\quad H_3'' = 6-12\\xi, \\quad H_4'' = L(-2+6\\xi)")}</div>`, b += `<div class="er-eq">${M("\\mathbf{B}_b = \\frac{1}{L^2}\\begin{bmatrix} H_1'' & H_2'' & H_3'' & H_4'' \\end{bmatrix}")}</div>`, b += `<p><b>Paso 3:</b> Integracion para K[1,1] (termino ${P("v_i \\cdot v_i")})</p>`, b += `<div class="er-eq">${M("K[1,1] = \\int_0^L \\frac{(H_1'')^2}{L^4} \\cdot EI_z \\; dx = \\frac{EI_z}{L^4} \\int_0^L (-6+12\\xi)^2 \\; dx")}</div>`, b += `<p>Expandimos: ${P("(-6+12\\xi)^2 = 36 - 144\\xi + 144\\xi^2")}</p>`, b += `<div class="er-eq">${M("\\int_0^L (36-144\\xi+144\\xi^2)\\,dx = 36L - 72L + 48L = 12L")}</div>`, b += `<div class="er-eq er-eq-main">${M(`K[1,1] = \\frac{EI_z}{L^4} \\cdot 12L = \\frac{12EI_z}{L^3} = \\frac{12 \\times ${Ye(e.E)} \\times ${Ye(e.Iz)}}{${Ye(e.L)}^3} = \\mathbf{${Ye(12 * H)}}`)}</div>`, b += "</div></div>", b += '<div class="er-deriv-block">', b += '<div class="er-deriv-header" data-toggle="deriv-tors">\u{1F4D6} K[3,3] = GJ/L \u2014 <i>click para ver derivacion</i></div>', b += '<div id="er-deriv-tors" class="er-deriv-body" style="display:none">', b += `<p>Mismo proceso que axial pero con ${P("\\theta_x")} y ${P("GJ")}:</p>`, b += `<div class="er-eq">${M(`K_{torsion} = \\frac{GJ}{L}\\begin{bmatrix}1 & -1\\\\-1 & 1\\end{bmatrix} = \\frac{${Ye(e.G)}\\times${Ye(e.J)}}{${Ye(e.L)}} = \\mathbf{${Ye(W)}}`)}</div>`, b += "</div></div>", b += '<div class="er-deriv-block">', b += '<div class="er-deriv-header" data-toggle="deriv-coup">\u{1F4D6} K[1,5] = 6EI<sub>z</sub>/L\xB2 \u2014 <i>acoplamiento corte-momento</i></div>', b += '<div id="er-deriv-coup" class="er-deriv-body" style="display:none">', b += `<p>Termino cruzado ${P("v_i \\cdot \\theta_{zi}")} (acoplamiento corte-momento):</p>`, b += `<div class="er-eq">${M("K[1,5] = \\frac{EI_z}{L^4} \\int_0^L H_1'' \\cdot H_2'' \\; dx")}</div>`, b += `<div class="er-eq">${M("= \\frac{EI_z}{L^4} \\int_0^L (-6+12\\xi) \\cdot L(-4+6\\xi) \\; dx")}</div>`, b += `<div class="er-eq">${M("= \\frac{EI_z}{L^3} \\int_0^L (24-36\\xi-48\\xi+72\\xi^2) \\; dx = \\frac{EI_z}{L^3} \\cdot 6L")}</div>`, b += `<div class="er-eq er-eq-main">${M(`K[1,5] = \\frac{6EI_z}{L^2} = \\mathbf{${Ye(6 * e.E * e.Iz / e.L ** 2)}}`)}</div>`, b += "</div></div>", b += '<div class="er-subsec">Resumen de coeficientes:</div>', b += `<div class="er-eq">${M(`\\frac{EA}{L} = \\mathbf{${Ye(Y)}} \\qquad \\frac{12EI_z}{L^3} = \\mathbf{${Ye(12 * H)}} \\qquad \\frac{12EI_y}{L^3} = \\mathbf{${Ye(12 * V)}}`)}</div>`, b += `<div class="er-eq">${M(`\\frac{GJ}{L} = \\mathbf{${Ye(W)}} \\qquad \\frac{4EI_y}{L} = \\mathbf{${Ye(4 * e.E * e.Iy / e.L)}} \\qquad \\frac{4EI_z}{L} = \\mathbf{${Ye(4 * e.E * e.Iz / e.L)}}`)}</div>`, b += `<div class="er-eq">${M(`\\frac{6EI_z}{L^2} = \\mathbf{${Ye(6 * e.E * e.Iz / e.L ** 2)}} \\qquad \\frac{6EI_y}{L^2} = \\mathbf{${Ye(6 * e.E * e.Iy / e.L ** 2)}}`)}</div>`, e.kLocal && (b += `<div class="er-subsec">Resultado: ${P("\\mathbf{K}_{local}")} (12x12)</div>`, b += an(e.kLocal)), b += '<div class="er-section-title">6. Transformacion de coordenadas</div>', b += "<p>Los cosenos directores del eje del elemento:</p>", b += `<div class="er-eq">${M(`l = \\frac{x_j - x_i}{L} = ${gn(e.l)} \\qquad m = \\frac{y_j - y_i}{L} = ${gn(e.m)} \\qquad n = \\frac{z_j - z_i}{L} = ${gn(e.n)}`)}</div>`, b += `<div class="er-eq">${M(`D = \\sqrt{l^2 + m^2} = ${gn(e.D)}`)}</div>`, Math.abs(e.n) > 0.999) {
      b += `<p>Caso especial: elemento vertical (${P(`n \\approx ${e.n > 0 ? "+1" : "-1"}`)}):</p>`;
      const ye = e.n > 0 ? "\\boldsymbol{\\lambda} = \\begin{bmatrix} 0 & 0 & 1 \\\\ 0 & 1 & 0 \\\\ -1 & 0 & 0 \\end{bmatrix}" : "\\boldsymbol{\\lambda} = \\begin{bmatrix} 0 & 0 & -1 \\\\ 0 & 1 & 0 \\\\ 1 & 0 & 0 \\end{bmatrix}";
      b += `<div class="er-eq">${M(ye)}</div>`;
    } else b += `<div class="er-eq">${M("\\boldsymbol{\\lambda} = \\begin{bmatrix} l & m & n \\\\ -m/D & l/D & 0 \\\\ -ln/D & -mn/D & D \\end{bmatrix}")}</div>`;
    b += `<div class="er-eq er-eq-main">${M("\\mathbf{T} = \\mathbf{I}_4 \\otimes \\boldsymbol{\\lambda} \\quad \\text{(Kronecker product} \\rightarrow 12 \\times 12 \\text{ bloque-diagonal)}")}</div>`, b += `<div class="er-section-title">7. ${P("\\mathbf{K}_{global}")} = ${P("\\mathbf{T}^T \\cdot \\mathbf{K}_{local} \\cdot \\mathbf{T}")}</div>`, b += "<p>Transformar la rigidez local al sistema global de coordenadas:</p>", b += `<div class="er-eq er-eq-main">${M("\\mathbf{K}_{global} = \\mathbf{T}^T \\cdot \\mathbf{K}_{local} \\cdot \\mathbf{T}")}</div>`, e.kGlobal && (b += an(e.kGlobal)), b += '<div class="er-section-title">8. Ensamblaje</div>';
    const O = e.elem[0] * 6, j = e.elem[1] * 6;
    if (b += `<div class="er-eq">${M(`\\text{Nodo } ${e.elem[0]} \\rightarrow \\text{DOFs } [${O} \\ldots ${O + 5}]`)}</div>`, b += `<div class="er-eq">${M(`\\text{Nodo } ${e.elem[1]} \\rightarrow \\text{DOFs } [${j} \\ldots ${j + 5}]`)}</div>`, b += `<div class="er-eq">${M("\\mathbf{K}_{total}[\\text{DOFs}_i, \\text{DOFs}_j] \\mathrel{+}= \\mathbf{K}_{global}[i, j]")}</div>`, b += '<div class="er-section-title">9. Recuperacion de fuerzas internas</div>', b += `<div class="er-eq">${M("\\mathbf{u}_{local} = \\mathbf{T} \\cdot \\mathbf{u}_{global}")}</div>`, b += `<div class="er-eq er-eq-main">${M("\\mathbf{f}_{local} = \\mathbf{K}_{local} \\cdot \\mathbf{u}_{local}")}</div>`, e.fLocal.length > 0 && e.fLocal.some((ye) => ye !== 0)) {
      const ye = [
        "N",
        "V<sub>y</sub>",
        "V<sub>z</sub>",
        "M<sub>x</sub>",
        "M<sub>y</sub>",
        "M<sub>z</sub>"
      ];
      b += '<table class="er-forces"><tr><th></th>';
      for (const k of ye) b += `<th>${k}</th>`;
      b += `</tr><tr><td>i (${e.elem[0]})</td>`;
      for (let k = 0; k < 6; k++) b += `<td class="${Math.abs(e.fLocal[k]) > 1e-10 ? "nz" : ""}">${Ye(e.fLocal[k], 3)}</td>`;
      b += `</tr><tr><td>j (${e.elem[1]})</td>`;
      for (let k = 6; k < 12; k++) b += `<td class="${Math.abs(e.fLocal[k]) > 1e-10 ? "nz" : ""}">${Ye(e.fLocal[k], 3)}</td>`;
      b += "</tr></table>";
    }
    return b;
  }
  function wl(e) {
    let b = "";
    if (b += `<div class="er-section-title">Resumen \u2014 Elemento ${e.elemIdx}</div>`, b += '<table class="er-props">', b += `<tr><td>Tipo</td><td>${e.isFrame ? "Frame (Euler-Bernoulli)" : "Shell"}</td></tr>`, b += `<tr><td>Nodos</td><td>${e.elem.join(" \u2192 ")}</td></tr>`, b += `<tr><td>Longitud</td><td><b>${Ye(e.L)}</b></td></tr>`, b += `<tr><td>E</td><td>${Ye(e.E)}</td></tr>`, b += `<tr><td>A</td><td>${Ye(e.A)}</td></tr>`, b += "</table>", e.uGlobal.length > 0) {
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
        for (let Y = 0; Y < 6; Y++) {
          const H = e.uGlobal[M * 6 + Y];
          b += `<td class="${Math.abs(H) > 1e-10 ? "nz" : ""}">${Ye(H, 6)}</td>`;
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
      for (let M = 0; M < 6; M++) b += `<td class="${Math.abs(e.fLocal[M]) > 1e-10 ? "nz" : ""}">${Ye(e.fLocal[M], 3)}</td>`;
      b += "</tr><tr><td>Nodo j</td>";
      for (let M = 6; M < 12; M++) b += `<td class="${Math.abs(e.fLocal[M]) > 1e-10 ? "nz" : ""}">${Ye(e.fLocal[M], 3)}</td>`;
      b += "</tr></table>";
    }
    return b;
  }
  function Ye(e, b = 2) {
    return Math.abs(e) < 1e-10 ? "0" : Math.abs(e) >= 1e7 || Math.abs(e) < 0.01 && e !== 0 ? e.toExponential(b) : e.toFixed(b);
  }
  function gn(e) {
    return Math.abs(e) < 1e-10 ? "0" : e.toFixed(4);
  }
  function an(e) {
    var _a;
    const b = e.length, P = Math.min(b, 12);
    let M = '<div style="overflow-x:auto"><table class="er-matrix">';
    for (let Y = 0; Y < P; Y++) {
      M += "<tr>";
      for (let H = 0; H < P; H++) {
        const V = ((_a = e[Y]) == null ? void 0 : _a[H]) ?? 0, W = Math.abs(V) < 1e-10;
        M += `<td class="${W ? "z" : ""} ${Y === H && !W ? "diag" : ""}">${W ? "0" : Sl(V)}</td>`;
      }
      M += "</tr>";
    }
    return M += "</table>", b > P && (M += `<div style="color:var(--fem-label);font-size:9px">(${P}\xD7${P} de ${b}\xD7${b})</div>`), M += "</div>", M;
  }
  function Sl(e) {
    return Math.abs(e) >= 1e6 || Math.abs(e) < 0.01 && e !== 0 ? e.toExponential(1) : Math.abs(e) >= 100 ? e.toFixed(0) : e.toFixed(2);
  }
  function Zn(e) {
    const b = e.getContext("2d");
    if (!b) return;
    const P = e.width, M = e.height, Y = 30, H = P - 2 * Y, V = (M - 3 * Y) / 2;
    b.fillStyle = getComputedStyle(document.body).getPropertyValue("--fem-bg").trim() || "#111", b.fillRect(0, 0, P, M);
    const W = (O, j, ye) => {
      b.strokeStyle = "#333", b.lineWidth = 1, b.strokeRect(Y, O, H, V), b.strokeStyle = "#444", b.beginPath(), b.moveTo(Y, O + V / 2), b.lineTo(Y + H, O + V / 2), b.stroke(), b.fillStyle = "#888", b.font = "11px sans-serif", b.fillText(j, Y + 4, O + 14);
      for (const se of ye) {
        b.strokeStyle = se.color, b.lineWidth = 2.5, b.beginPath();
        for (let he = 0; he <= 100; he++) {
          const ue = he / 100, re = Y + ue * H, te = O + V / 2 - se.fn(ue) * (V / 2 * 0.85);
          he === 0 ? b.moveTo(re, te) : b.lineTo(re, te);
        }
        b.stroke();
      }
      let k = Y + H - 90;
      for (const se of ye) b.fillStyle = se.color, b.font = "bold 10px sans-serif", b.fillText(se.label, k, O + V - 6), k += 36;
      b.fillStyle = "#666", b.font = "9px monospace", b.fillText("0", Y, O + V + 12), b.fillText("1", Y + H - 6, O + V + 12), b.fillText("\u03BE", Y + H / 2, O + V + 12);
    };
    W(Y, "Axial (lineal)", [
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
    ]), W(Y + V + Y, "Flexi\xF3n (Hermite c\xFAbicos)", [
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
</style>`, nn = [
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
  let Mn = false, Ro = null, lo = null, Dt = null, Pt = null;
  function Il() {
    Pt = document.createElement("button"), Pt.id = "help-tour-btn", Pt.innerHTML = "?", Pt.title = "Ayuda interactiva \u2014 Tour guiado", Pt.style.cssText = `
    position: fixed; bottom: 20px; right: 20px; z-index: 9999999;
    width: 48px; height: 48px; border-radius: 50%;
    background: linear-gradient(135deg, #0066cc, #0099ff);
    color: white; border: 3px solid rgba(255,255,255,0.3);
    font-size: 24px; font-weight: bold; cursor: pointer;
    box-shadow: 0 4px 15px rgba(0,102,204,0.4);
    transition: transform 0.2s, box-shadow 0.2s;
    font-family: 'Arial Nova', sans-serif;
    animation: helpPulse 2s infinite;
  `, Pt.addEventListener("mouseenter", () => {
      Pt.style.transform = "scale(1.15)", Pt.style.boxShadow = "0 6px 20px rgba(0,102,204,0.6)";
    }), Pt.addEventListener("mouseleave", () => {
      Pt.style.transform = "scale(1)", Pt.style.boxShadow = "0 4px 15px rgba(0,102,204,0.4)";
    }), Pt.addEventListener("click", () => {
      Mn ? ns() : kl();
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
  `, document.head.appendChild(e), Pt;
  }
  function kl() {
    Mn = true, Pt && (Pt.innerHTML = "\u2715", Pt.style.background = "linear-gradient(135deg, #cc3333, #ff4444)", Pt.style.animation = "none"), Ro = document.createElement("div"), Ro.id = "tour-overlay", Ro.style.cssText = `
    position: fixed; inset: 0; z-index: 9999990;
    pointer-events: none;
  `, document.body.appendChild(Ro), Uo(0);
  }
  function ns() {
    Mn = false, Pt && (Pt.innerHTML = "?", Pt.style.background = "linear-gradient(135deg, #0066cc, #0099ff)", Pt.style.animation = "helpPulse 2s infinite"), lo && (lo.remove(), lo = null), Dt && (Dt.remove(), Dt = null), Ro && (Ro.remove(), Ro = null);
  }
  function Uo(e) {
    var _a, _b;
    if (e >= nn.length) {
      Tl();
      return;
    }
    const b = nn[e], P = document.querySelector(b.selector);
    if (!P) {
      Uo(e + 1);
      return;
    }
    P.scrollIntoView({
      behavior: "smooth",
      block: "nearest"
    }), lo && lo.remove(), Dt && Dt.remove();
    const M = P.getBoundingClientRect(), Y = window.innerWidth, H = window.innerHeight, V = 320, W = 180;
    lo = document.createElement("div"), lo.style.cssText = `
    position: fixed;
    left: ${M.left - 6}px; top: ${M.top - 6}px;
    width: ${M.width + 12}px; height: ${M.height + 12}px;
    border-radius: 8px;
    z-index: 9999991;
    pointer-events: none;
    animation: spotlightPulse 1.5s ease-in-out infinite;
    transition: all 0.3s ease;
  `, document.body.appendChild(lo);
    const O = Y - M.right, j = M.left, ye = H - M.bottom, k = M.top;
    let se = b.position || "bottom";
    se === "bottom" && ye < W + 20 && (se = "top"), se === "top" && k < W + 20 && (se = "right"), se === "right" && O < V + 20 && (se = "left"), se === "left" && j < V + 20 && (se = "bottom");
    let he, ue, re = "";
    switch (se) {
      case "bottom":
        he = M.left + M.width / 2 - V / 2, ue = M.bottom + 14, re = "position:absolute;top:-8px;left:50%;transform:translateX(-50%);width:0;height:0;border-left:8px solid transparent;border-right:8px solid transparent;border-bottom:8px solid #0099ff;";
        break;
      case "top":
        he = M.left + M.width / 2 - V / 2, ue = M.top - W - 14, re = "position:absolute;bottom:-8px;left:50%;transform:translateX(-50%);width:0;height:0;border-left:8px solid transparent;border-right:8px solid transparent;border-top:8px solid #0099ff;";
        break;
      case "right":
        he = M.right + 14, ue = M.top + M.height / 2 - W / 2, re = "position:absolute;left:-8px;top:50%;transform:translateY(-50%);width:0;height:0;border-top:8px solid transparent;border-bottom:8px solid transparent;border-right:8px solid #0099ff;";
        break;
      case "left":
        he = M.left - V - 14, ue = M.top + M.height / 2 - W / 2, re = "position:absolute;right:-8px;top:50%;transform:translateY(-50%);width:0;height:0;border-top:8px solid transparent;border-bottom:8px solid transparent;border-left:8px solid #0099ff;";
        break;
    }
    he = Math.max(10, Math.min(he, Y - V - 10)), ue = Math.max(10, Math.min(ue, H - W - 10)), Dt = document.createElement("div"), Dt.style.cssText = `
    position: fixed;
    left: ${he}px; top: ${ue}px;
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
  `, Dt.innerHTML = `
    <div style="${re}"></div>
    <div style="display:flex;align-items:center;margin-bottom:8px;">
      <span class="tour-hand">\u{1F446}</span>
      <span style="color:#0099ff;font-weight:bold;font-size:15px;">${b.title}</span>
      <span style="margin-left:auto;color:#666;font-size:11px;">${e + 1}/${nn.length}</span>
    </div>
    <p style="margin:0 0 12px 0;font-size:12px;line-height:1.6;color:#bbb;">${b.description}</p>
    <div style="display:flex;gap:8px;justify-content:flex-end;">
      ${e > 0 ? '<button id="tour-prev" style="padding:5px 14px;background:transparent;color:#888;border:1px solid #444;border-radius:6px;cursor:pointer;font-size:11px;">\u25C0 Anterior</button>' : ""}
      <button id="tour-next" style="padding:5px 18px;background:linear-gradient(135deg,#0066cc,#0099ff);color:white;border:none;border-radius:6px;cursor:pointer;font-size:12px;font-weight:bold;">
        ${e < nn.length - 1 ? "Siguiente \u25B6" : "Finalizar \u2713"}
      </button>
    </div>
    <div style="margin-top:8px;display:flex;gap:3px;justify-content:center;">
      ${nn.map((N, _) => `<div style="width:${_ === e ? "16px" : "6px"};height:6px;border-radius:3px;background:${_ === e ? "#0099ff" : _ < e ? "#004488" : "#333"};transition:all 0.3s;"></div>`).join("")}
    </div>
  `, document.body.appendChild(Dt), (_a = Dt.querySelector("#tour-next")) == null ? void 0 : _a.addEventListener("click", () => {
      Uo(e + 1);
    }), (_b = Dt.querySelector("#tour-prev")) == null ? void 0 : _b.addEventListener("click", () => {
      Uo(e - 1);
    });
    const te = (N) => {
      if (!Mn) {
        document.removeEventListener("keydown", te);
        return;
      }
      (N.key === "ArrowRight" || N.key === "Enter") && (Uo(e + 1), document.removeEventListener("keydown", te)), N.key === "ArrowLeft" && (Uo(Math.max(0, e - 1)), document.removeEventListener("keydown", te)), N.key === "Escape" && (ns(), document.removeEventListener("keydown", te));
    };
    document.addEventListener("keydown", te);
  }
  function Tl() {
    var _a;
    lo && (lo.remove(), lo = null), Dt && (Dt.remove(), Dt = null), Dt = document.createElement("div"), Dt.style.cssText = `
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
  `, Dt.innerHTML = `
    <div style="font-size:48px;margin-bottom:12px;">\u{1F393}</div>
    <h3 style="color:#00cc66;margin:0 0 8px 0;font-size:18px;">Tour Completado</h3>
    <p style="color:#888;font-size:12px;line-height:1.6;margin:0 0 16px 0;">
      Ya conoces las herramientas principales.<br>
      Presiona <b style="color:#0099ff">?</b> en cualquier momento para repetir el tour.<br>
      Usa <b style="color:#0099ff">Inspect</b> en un elemento para ver el analisis FEM completo.
    </p>
    <button id="tour-done" style="padding:8px 24px;background:linear-gradient(135deg,#00aa55,#00cc66);color:white;border:none;border-radius:8px;cursor:pointer;font-size:14px;font-weight:bold;">Entendido</button>
  `, document.body.appendChild(Dt), (_a = Dt.querySelector("#tour-done")) == null ? void 0 : _a.addEventListener("click", () => ns());
  }
  function zl(e) {
    var _a;
    const b = e.split(/\r?\n/), P = {
      force: "TONF",
      length: "M"
    }, M = [], Y = /* @__PURE__ */ new Map(), H = /* @__PURE__ */ new Map(), V = /* @__PURE__ */ new Map(), W = [], O = [], j = /* @__PURE__ */ new Map(), ye = /* @__PURE__ */ new Map(), k = [], se = [];
    let he = "", ue = "";
    const re = /* @__PURE__ */ new Map();
    for (const Le of b) {
      const qe = Le.trim();
      if (!qe || qe.startsWith("$")) {
        qe.startsWith("$ ") && (ue = qe.substring(2).trim());
        continue;
      }
      if (ue && (re.has(ue) || re.set(ue, []), re.get(ue).push(Le)), ue === "CONTROLS") {
        const ve = qe.match(/UNITS\s+"([^"]+)"\s+"([^"]+)"/);
        ve && (P.force = ve[1], P.length = ve[2]);
        const Ce = qe.match(/TITLE2\s+"([^"]+)"/);
        Ce && (he = Ce[1]);
      }
      if (ue === "STORIES - IN SEQUENCE FROM TOP") {
        const ve = qe.match(/STORY\s+"([^"]+)"\s+(?:HEIGHT\s+([\d.]+)|ELEV\s+([-\d.]+))/);
        if (ve) {
          const Ce = ve[1], ge = ve[2] ? parseFloat(ve[2]) : 0, ke = ve[3] ? parseFloat(ve[3]) : void 0;
          M.push({
            name: Ce,
            height: ge,
            elev: ke ?? 0
          });
        }
      }
      if (ue === "MATERIAL PROPERTIES") {
        const ve = qe.match(/MATERIAL\s+"([^"]+)"\s+(?:TYPE\s+"([^"]+)")?/);
        if (ve) {
          const Ce = ve[1];
          Y.has(Ce) || Y.set(Ce, {
            type: ve[2] || "",
            E: 0,
            G: 0,
            nu: 0
          });
          const ge = Y.get(Ce);
          ve[2] && (ge.type = ve[2]);
          const ke = qe.match(/\bE\s+([\d.eE+-]+)/);
          ke && (ge.E = parseFloat(ke[1]));
          const Ge = qe.match(/\bU\s+([\d.eE+-]+)/);
          Ge && (ge.nu = parseFloat(Ge[1]), ge.G = ge.E / (2 * (1 + ge.nu)));
          const _e = qe.match(/\bFY\s+([\d.eE+-]+)/);
          _e && (ge.fy = parseFloat(_e[1]));
          const it = qe.match(/\bFC\s+([\d.eE+-]+)/);
          it && (ge.fc = parseFloat(it[1]));
          const mt = qe.match(/WEIGHTPERVOLUME\s+([\d.eE+-]+)/);
          mt && (ge.density = parseFloat(mt[1]));
        }
      }
      if (ue === "FRAME SECTIONS") {
        const ve = qe.match(/FRAMESECTION\s+"([^"]+)"/);
        if (ve) {
          const Ce = ve[1];
          H.has(Ce) || H.set(Ce, {
            material: "",
            shape: "",
            D: 0,
            B: 0,
            TF: 0,
            TW: 0
          });
          const ge = H.get(Ce), ke = qe.match(/MATERIAL\s+"([^"]+)"/);
          ke && (ge.material = ke[1]);
          const Ge = qe.match(/SHAPE\s+"([^"]+)"/);
          Ge && (ge.shape = Ge[1]);
          const _e = qe.match(/\bD\s+([\d.eE+-]+)/);
          _e && (ge.D = parseFloat(_e[1]));
          const it = qe.match(/\bB\s+([\d.eE+-]+)/);
          it && (ge.B = parseFloat(it[1]));
          const mt = qe.match(/\bTF\s+([\d.eE+-]+)/);
          mt && (ge.TF = parseFloat(mt[1]));
          const We = qe.match(/\bTW\s+([\d.eE+-]+)/);
          We && (ge.TW = parseFloat(We[1]));
          const Xe = qe.match(/\bR\s+([\d.eE+-]+)/);
          Xe && (ge.R = parseFloat(Xe[1]));
          const pt = qe.match(/FILLMATERIAL\s+"([^"]+)"/);
          pt && (ge.fillMaterial = pt[1]);
          const lt = qe.match(/I2MOD\s+([\d.eE+-]+)/);
          lt && (ge.modI2 = parseFloat(lt[1]));
          const bt = qe.match(/I3MOD\s+([\d.eE+-]+)/);
          bt && (ge.modI3 = parseFloat(bt[1]));
        }
      }
      if (ue === "POINT COORDINATES") {
        const ve = qe.match(/POINT\s+"([^"]+)"\s+([-\d.eE+]+)\s+([-\d.eE+]+)/);
        ve && V.set(ve[1], [
          parseFloat(ve[2]),
          parseFloat(ve[3])
        ]);
      }
      if (ue === "LINE CONNECTIVITIES") {
        const ve = qe.match(/LINE\s+"([^"]+)"\s+(COLUMN|BEAM|BRACE)\s+"([^"]+)"\s+"([^"]+)"\s+(\d+)/);
        ve && W.push({
          name: ve[1],
          type: ve[2],
          pt1: ve[3],
          pt2: ve[4],
          nStories: parseInt(ve[5])
        });
      }
      if (ue === "POINT ASSIGNS") {
        const ve = qe.match(/POINTASSIGN\s+"([^"]+)"\s+"([^"]+)".*RESTRAINT\s+"([^"]+)"/);
        ve && j.set(`${ve[1]}@${ve[2]}`, ve[3].split(/\s+/));
      }
      if (ue === "LINE ASSIGNS") {
        const ve = qe.match(/LINEASSIGN\s+"([^"]+)"\s+"([^"]+)".*SECTION\s+"([^"]+)"/);
        if (ve) {
          const Ce = {
            story: ve[2],
            section: ve[3],
            rigidZone: 0,
            releases: [],
            angle: 0
          }, ge = qe.match(/RIGIDZONE\s+([\d.eE+-]+)/);
          ge && (Ce.rigidZone = parseFloat(ge[1]));
          const ke = qe.match(/RELEASE\s+"([^"]+)"/);
          ke && (Ce.releases = ke[1].split(/\s+/));
          const Ge = qe.match(/ANG\s+([-\d.eE+]+)/);
          Ge && (Ce.angle = parseFloat(Ge[1])), ye.set(`${ve[1]}@${ve[2]}`, Ce);
        }
      }
      if (ue === "GRIDS") {
        const ve = qe.match(/^\s*GRID\s+"[^"]+"\s+LABEL\s+"([^"]+)"\s+DIR\s+"([XY])"\s+COORD\s+([-\d.eE+]+)/);
        ve && se.push({
          label: ve[1],
          dir: ve[2],
          coord: parseFloat(ve[3])
        });
      }
      if (ue === "FRAME OBJECT LOADS") {
        const ve = qe.match(/LINELOAD\s+"([^"]+)"\s+"([^"]+)"\s+TYPE\s+"([^"]+)"\s+DIR\s+"([^"]+)"\s+LC\s+"([^"]+)"\s+FVAL\s+([-\d.eE+]+)/);
        ve && k.push({
          line: ve[1],
          story: ve[2],
          type: ve[3],
          dir: ve[4],
          lc: ve[5],
          val: parseFloat(ve[6])
        });
      }
      if (ue === "AREA CONNECTIVITIES") {
        const ve = qe.match(/AREA\s+"([^"]+)"\s+\d+\s+(.+)/);
        if (ve) {
          const Ce = ((_a = ve[2].match(/"([^"]+)"/g)) == null ? void 0 : _a.map((ge) => ge.replace(/"/g, ""))) || [];
          O.push({
            name: ve[1],
            pts: Ce,
            nStories: 0
          });
        }
      }
    }
    const te = /* @__PURE__ */ new Map();
    if (M.length > 0) {
      const Le = M.length - 1;
      te.set(M[Le].name, M[Le].elev);
      for (let qe = Le - 1; qe >= 0; qe--) {
        const Ce = te.get(M[qe + 1].name) + M[qe].height;
        M[qe].elev = Ce, te.set(M[qe].name, Ce);
      }
    }
    const N = [], _ = [], J = /* @__PURE__ */ new Map(), ce = (Le, qe) => `${Le}@${qe}`, $e = /* @__PURE__ */ new Set(), Te = /* @__PURE__ */ new Map();
    for (const Le of W) Te.set(Le.name, Le);
    for (const Le of W) for (const [qe, ve] of ye) {
      if (!qe.startsWith(Le.name + "@")) continue;
      const Ce = ve.story, ge = M.findIndex((ke) => ke.name === Ce);
      if (!(ge < 0)) if (Le.type === "COLUMN" || Le.type === "BRACE") {
        $e.add(ce(Le.pt2, Ce));
        const ke = Math.max(Le.nStories, 1), Ge = Math.min(ge + ke, M.length - 1);
        $e.add(ce(Le.pt1, M[Ge].name));
      } else $e.add(ce(Le.pt1, Ce)), $e.add(ce(Le.pt2, Ce));
    }
    for (const [Le] of j) $e.add(Le);
    for (const Le of $e) {
      const [qe, ve] = Le.split("@"), Ce = V.get(qe), ge = te.get(ve);
      Ce === void 0 || ge === void 0 || (N.push([
        Ce[0],
        Ce[1],
        ge
      ]), _.push(Le), J.set(Le, N.length - 1));
    }
    const Ve = [], xe = [], De = [], He = [], be = /* @__PURE__ */ new Map();
    for (const Le of W) for (const [qe, ve] of ye) {
      if (!qe.startsWith(Le.name + "@")) continue;
      const Ce = ve.story, ge = M.findIndex((We) => We.name === Ce);
      if (ge < 0) continue;
      let ke, Ge;
      if (Le.type === "COLUMN" || Le.type === "BRACE") {
        const We = Math.max(Le.nStories, 1), Xe = Math.min(ge + We, M.length - 1);
        ke = ce(Le.pt1, M[Xe].name), Ge = ce(Le.pt2, Ce);
      } else ke = ce(Le.pt1, Ce), Ge = ce(Le.pt2, Ce);
      const _e = J.get(ke), it = J.get(Ge);
      if (_e === void 0 || it === void 0 || _e === it) continue;
      const mt = Ve.length;
      if (Ve.push([
        _e,
        it
      ]), xe.push(Le.name), De.push(Le.type), He.push(Ce), be.set(mt, ve.section), ve.rigidZone > 0 && at.set(mt, [
        ve.rigidZone,
        ve.rigidZone
      ]), ve.releases.length > 0) {
        const We = new Array(12).fill(false), Xe = {
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
        for (const pt of ve.releases) {
          const lt = Xe[pt];
          lt !== void 0 && (We[lt] = true);
        }
        dt.set(mt, We);
      }
    }
    const Se = /* @__PURE__ */ new Map(), ze = /* @__PURE__ */ new Map(), Je = /* @__PURE__ */ new Map(), st = /* @__PURE__ */ new Map(), Ue = /* @__PURE__ */ new Map(), at = /* @__PURE__ */ new Map(), dt = /* @__PURE__ */ new Map(), yt = /* @__PURE__ */ new Map(), kt = /* @__PURE__ */ new Map(), Ct = /* @__PURE__ */ new Map(), ht = /* @__PURE__ */ new Map();
    for (const [Le, qe] of be) {
      const ve = H.get(qe);
      if (!ve) continue;
      const Ce = Y.get(ve.material);
      Ce && (Se.set(Le, Ce.E), ze.set(Le, Ce.G));
      const ge = ve.D, ke = ve.B, Ge = ve.TF, _e = ve.TW;
      let it = 0, mt = 0, We = 0, Xe = 0, pt = 0, lt = 0, bt = "rect";
      switch (ve.shape) {
        case "Concrete Rectangular":
          it = ge * ke, mt = ke * ge ** 3 / 12, We = ge * ke ** 3 / 12, Xe = ke * ge ** 3 * (1 / 3 - 0.21 * (ge / ke) * (1 - ge ** 4 / (12 * ke ** 4))), pt = lt = 5 / 6 * it, bt = "rect";
          break;
        case "Concrete Circle":
          it = Math.PI * ge ** 2 / 4, mt = We = Math.PI * ge ** 4 / 64, Xe = Math.PI * ge ** 4 / 32, pt = lt = 0.9 * it, bt = "circ";
          break;
        case "Steel I/Wide Flange":
          it = 2 * ke * Ge + (ge - 2 * Ge) * _e, mt = (ke * ge ** 3 - (ke - _e) * (ge - 2 * Ge) ** 3) / 12, We = (2 * Ge * ke ** 3 + (ge - 2 * Ge) * _e ** 3) / 12, Xe = (2 * ke * Ge ** 3 + (ge - 2 * Ge) * _e ** 3) / 3, pt = (ge - 2 * Ge) * _e, lt = 2 * ke * Ge * 5 / 6, bt = "I";
          break;
        case "Steel Tube":
          it = ge * ke - (ge - 2 * _e) * (ke - 2 * _e), mt = (ke * ge ** 3 - (ke - 2 * _e) * (ge - 2 * _e) ** 3) / 12, We = (ge * ke ** 3 - (ge - 2 * _e) * (ke - 2 * _e) ** 3) / 12, Xe = 2 * _e * (ge - _e) * (ke - _e) * ((ge - _e) * (ke - _e)) / (ge - _e + (ke - _e)), pt = 2 * ge * _e, lt = 2 * ke * _e, bt = "HSS";
          break;
        case "Filled Steel Tube":
          it = ge * ke, mt = ke * ge ** 3 / 12, We = ge * ke ** 3 / 12, Xe = 2 * _e * (ge - _e) * (ke - _e) * ((ge - _e) * (ke - _e)) / (ge - _e + (ke - _e)), pt = 2 * ge * _e + 5 / 6 * (ge - 2 * _e) * (ke - 2 * _e), lt = 2 * ke * _e + 5 / 6 * (ge - 2 * _e) * (ke - 2 * _e), bt = "CFT";
          break;
        case "Steel Angle": {
          const Ht = Ge || _e;
          it = Ht * (ge + ke - Ht), mt = Ht * (ge ** 3 + ke * Ht ** 2 + Ht ** 2 * (ge - Ht)) / 12, We = Ht * (ke ** 3 + ge * Ht ** 2 + Ht ** 2 * (ke - Ht)) / 12, Xe = (ge + ke - Ht) * Ht ** 3 / 3, pt = ge * Ht, lt = ke * Ht, bt = "L";
          break;
        }
        case "Steel Channel":
        case "Cold Formed C":
          it = 2 * ke * Ge + (ge - 2 * Ge) * _e, mt = (_e * ge ** 3 + 2 * ke * Ge * (ge - Ge) ** 2) / 12, We = (2 * Ge * ke ** 3 + (ge - 2 * Ge) * _e ** 3) / 12, Xe = (2 * ke * Ge ** 3 + (ge - 2 * Ge) * _e ** 3) / 3, pt = (ge - 2 * Ge) * _e, lt = 2 * ke * Ge * 5 / 6, bt = ve.shape === "Cold Formed C" ? "coldC" : "C";
          break;
        case "Steel Double Channel":
          it = 2 * (2 * ke * Ge + (ge - 2 * Ge) * _e), mt = 2 * (_e * ge ** 3 + 2 * ke * Ge * (ge - Ge) ** 2) / 12, We = 2 * (2 * Ge * ke ** 3 + (ge - 2 * Ge) * _e ** 3) / 12, Xe = 2 * (2 * ke * Ge ** 3 + (ge - 2 * Ge) * _e ** 3) / 3, pt = 2 * (ge - 2 * Ge) * _e, lt = 4 * ke * Ge * 5 / 6, bt = "2C";
          break;
        default:
          ge > 0 && ke > 0 && (it = ge * ke, mt = ke * ge ** 3 / 12, We = ge * ke ** 3 / 12, Xe = Math.min(ge, ke) * Math.max(ge, ke) ** 3 / 3 * 0.3, pt = lt = 5 / 6 * it);
          break;
      }
      ve.modI2 && (We *= ve.modI2), ve.modI3 && (mt *= ve.modI3), Je.set(Le, it), yt.set(Le, mt), kt.set(Le, We), Ct.set(Le, Xe), pt > 0 && st.set(Le, pt), lt > 0 && Ue.set(Le, lt), ht.set(Le, {
        type: bt,
        b: ke || void 0,
        h: ge || void 0,
        d: bt === "circ" || bt === "pipe" ? ge : void 0,
        tw: _e || void 0,
        tf: Ge || void 0,
        r: ve.R,
        name: qe
      });
    }
    const ut = /* @__PURE__ */ new Map();
    for (const [Le, qe] of j) {
      const ve = J.get(Le);
      if (ve === void 0) continue;
      const Ce = [
        false,
        false,
        false,
        false,
        false,
        false
      ];
      for (const ge of qe) ge === "UX" && (Ce[0] = true), ge === "UY" && (Ce[1] = true), ge === "UZ" && (Ce[2] = true), ge === "RX" && (Ce[3] = true), ge === "RY" && (Ce[4] = true), ge === "RZ" && (Ce[5] = true);
      ut.set(ve, Ce);
    }
    const ro = /* @__PURE__ */ new Map(), Ne = /* @__PURE__ */ new Map();
    for (let Le = 0; Le < xe.length; Le++) Ne.set(`${xe[Le]}@${He[Le]}`, Le);
    for (const Le of k) {
      const qe = Ne.get(`${Le.line}@${Le.story}`);
      if (qe === void 0) continue;
      const [ve, Ce] = Ve[qe], ge = N[ve], ke = N[Ce], Ge = Math.sqrt((ke[0] - ge[0]) ** 2 + (ke[1] - ge[1]) ** 2 + (ke[2] - ge[2]) ** 2);
      if (Ge < 1e-10) continue;
      const _e = Le.val * Ge / 2;
      let it = 0, mt = 0, We = 0;
      Le.dir === "GRAV" || Le.dir === "GRAVITY" ? We = -_e : Le.dir === "X" ? it = _e : Le.dir === "Y" ? mt = _e : Le.dir === "Z" && (We = -_e);
      for (const Xe of [
        ve,
        Ce
      ]) {
        const pt = ro.get(Xe) || [
          0,
          0,
          0,
          0,
          0,
          0
        ];
        pt[0] += it, pt[1] += mt, pt[2] += We, ro.set(Xe, pt);
      }
    }
    const xt = /* @__PURE__ */ new Map();
    for (const [Le, qe] of be) {
      const ve = H.get(qe);
      if (!ve) continue;
      const Ce = Y.get(ve.material);
      (Ce == null ? void 0 : Ce.density) && xt.set(Le, Ce.density);
    }
    return {
      units: P,
      stories: M.reverse(),
      materials: Y,
      frameSections: H,
      nodes: N,
      nodeNames: _,
      nodeNameToIdx: J,
      elements: Ve,
      elementNames: xe,
      elementTypes: De,
      elementStories: He,
      elementSections: be,
      nodeInputs: {
        supports: ut,
        loads: ro
      },
      elementInputs: {
        elasticities: Se,
        shearModuli: ze,
        areas: Je,
        momentsOfInertiaZ: yt,
        momentsOfInertiaY: kt,
        torsionalConstants: Ct,
        shearAreasY: st,
        shearAreasZ: Ue,
        rigidOffsets: at,
        momentReleases: dt,
        densities: xt,
        sectionShapes: ht
      },
      sectionShapes: ht,
      grids: se,
      info: {
        nNodes: N.length,
        nFrames: Ve.length,
        nAreas: O.length,
        title: he
      },
      rawSections: re
    };
  }
  function tt(e) {
    return e && parseFloat(e) || 0;
  }
  function da(e) {
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
    for (const te of e) {
      const N = te.trimEnd();
      N.endsWith("_") ? P += N.slice(0, -1) + " " : (P += N, b.push(P), P = "");
    }
    P && b.push(P);
    const M = {
      force: "KN",
      length: "m"
    };
    let Y = "UX,UY,UZ,RX,RY,RZ";
    const H = /* @__PURE__ */ new Map(), V = /* @__PURE__ */ new Map(), W = /* @__PURE__ */ new Map(), O = /* @__PURE__ */ new Map(), j = [], ye = [], k = /* @__PURE__ */ new Map(), se = /* @__PURE__ */ new Map(), he = /* @__PURE__ */ new Map(), ue = [];
    let re = "";
    for (const te of b) {
      const N = te.trim();
      if (!N || N.startsWith(";") || N.startsWith("File ")) continue;
      if (N.startsWith("TABLE:")) {
        const J = N.match(/TABLE:\s+"(.+?)"/);
        re = J ? J[1].toUpperCase() : "";
        continue;
      }
      if (N === "END TABLE DATA") {
        re = "";
        continue;
      }
      const _ = da(N);
      switch (re) {
        case "PROGRAM CONTROL": {
          const J = _.get("CurrUnits");
          if (J) {
            const ce = J.split(",").map(($e) => $e.trim());
            ce[0] && (M.force = ce[0]), ce[1] && (M.length = ce[1]);
          }
          break;
        }
        case "MATERIAL PROPERTIES 01 - GENERAL": {
          const J = _.get("Material");
          J && !H.has(J) && H.set(J, {
            E: 0,
            nu: 0,
            G: 0
          });
          break;
        }
        case "MATERIAL PROPERTIES 02 - BASIC MECHANICAL PROPERTIES": {
          const J = _.get("Material");
          if (J) {
            const ce = H.get(J) || {
              E: 0,
              nu: 0,
              G: 0
            };
            ce.E = tt(_.get("E1")), ce.G = tt(_.get("G12")), ce.nu = tt(_.get("U12")), ce.density = tt(_.get("UnitMass")), H.set(J, ce);
          }
          break;
        }
        case "MATERIAL PROPERTIES 03A - STEEL DATA": {
          const J = _.get("Material");
          J && H.has(J) && (H.get(J).fy = tt(_.get("Fy")));
          break;
        }
        case "FRAME SECTION PROPERTIES 01 - GENERAL": {
          const J = _.get("SectionName");
          J && V.set(J, {
            material: _.get("Material") || "",
            shape: _.get("Shape") || "Rectangular",
            D: tt(_.get("t3")),
            B: tt(_.get("t2")),
            TF: tt(_.get("tf")),
            TW: tt(_.get("tw")),
            A: tt(_.get("Area")),
            Iz: tt(_.get("I33")),
            Iy: tt(_.get("I22")),
            J: tt(_.get("TorsConst"))
          });
          break;
        }
        case "AREA SECTION PROPERTIES": {
          const J = _.get("Section");
          J && W.set(J, {
            material: _.get("Material") || "",
            type: _.get("Type") || "Shell",
            thickness: tt(_.get("Thickness"))
          });
          break;
        }
        case "JOINT COORDINATES": {
          const J = _.get("Joint");
          if (J) {
            const ce = tt(_.get("XorR")), $e = tt(_.get("Y")), Te = tt(_.get("Z"));
            O.set(J, [
              ce,
              $e,
              Te
            ]);
          }
          break;
        }
        case "CONNECTIVITY - FRAME": {
          const J = _.get("Frame"), ce = _.get("JointI"), $e = _.get("JointJ");
          J && ce && $e && j.push({
            name: J,
            j1: ce,
            j2: $e
          });
          break;
        }
        case "CONNECTIVITY - AREA": {
          const J = _.get("Area");
          if (J) {
            const ce = parseInt(_.get("NumJoints") || "4"), $e = [];
            for (let Te = 1; Te <= ce; Te++) {
              const Ve = _.get(`Joint${Te}`);
              Ve && $e.push(Ve);
            }
            $e.length >= 3 && ye.push({
              name: J,
              joints: $e
            });
          }
          break;
        }
        case "JOINT RESTRAINT ASSIGNMENTS": {
          const J = _.get("Joint");
          if (J) {
            const ce = [
              ((_a = _.get("U1")) == null ? void 0 : _a.toLowerCase()) === "yes",
              ((_b = _.get("U2")) == null ? void 0 : _b.toLowerCase()) === "yes",
              ((_c = _.get("U3")) == null ? void 0 : _c.toLowerCase()) === "yes",
              ((_d = _.get("R1")) == null ? void 0 : _d.toLowerCase()) === "yes",
              ((_e = _.get("R2")) == null ? void 0 : _e.toLowerCase()) === "yes",
              ((_f = _.get("R3")) == null ? void 0 : _f.toLowerCase()) === "yes"
            ];
            k.set(J, ce);
          }
          break;
        }
        case "FRAME SECTION ASSIGNMENTS": {
          const J = _.get("Frame"), ce = _.get("AnalSect");
          J && ce && se.set(J, ce);
          break;
        }
        case "AREA SECTION ASSIGNMENTS": {
          const J = _.get("Area"), ce = _.get("Section");
          J && ce && he.set(J, ce);
          break;
        }
        case "JOINT LOADS - FORCE": {
          const J = _.get("Joint");
          J && ue.push({
            joint: J,
            fx: tt(_.get("F1")),
            fy: tt(_.get("F2")),
            fz: tt(_.get("F3")),
            mx: tt(_.get("M1")),
            my: tt(_.get("M2")),
            mz: tt(_.get("M3"))
          });
          break;
        }
      }
    }
    return pa(M, Y, H, V, W, O, j, ye, k, se, he, ue);
  }
  function Cl(e) {
    const b = {
      force: "KN",
      length: "m"
    };
    let P = "UX,UY,UZ,RX,RY,RZ";
    const M = /* @__PURE__ */ new Map(), Y = /* @__PURE__ */ new Map(), H = /* @__PURE__ */ new Map(), V = /* @__PURE__ */ new Map(), W = [], O = [], j = /* @__PURE__ */ new Map(), ye = [];
    let k = "", se = "";
    for (const re of e) {
      const te = re.trim();
      if (!te || te.startsWith(";")) continue;
      if (!re.startsWith(" ") && !re.startsWith("	")) {
        const J = te.toUpperCase();
        if (J === "END") break;
        J.startsWith("SHELL SECTION") ? k = "SHELL SECTION" : J.startsWith("FRAME SECTION") ? k = "FRAME SECTION" : k = J.split(/\s+/)[0];
        continue;
      }
      const N = da(te), _ = te.split(/\s+/);
      switch (k) {
        case "SYSTEM": {
          const J = N.get("DOF");
          J && (P = J);
          const ce = N.get("LENGTH");
          ce && (b.length = ce);
          const $e = N.get("FORCE");
          $e && (b.force = $e);
          break;
        }
        case "JOINT": {
          const J = _[0];
          V.set(J, [
            tt(N.get("X")),
            tt(N.get("Y")),
            tt(N.get("Z"))
          ]);
          break;
        }
        case "RESTRAINT": {
          const J = N.get("ADD"), ce = N.get("DOF");
          if (J && ce) {
            const $e = ce.split(","), Te = [
              false,
              false,
              false,
              false,
              false,
              false
            ];
            for (const Ve of $e) {
              const xe = Ve.toUpperCase();
              (xe === "UX" || xe === "U1") && (Te[0] = true), (xe === "UY" || xe === "U2") && (Te[1] = true), (xe === "UZ" || xe === "U3") && (Te[2] = true), (xe === "RX" || xe === "R1") && (Te[3] = true), (xe === "RY" || xe === "R2") && (Te[4] = true), (xe === "RZ" || xe === "R3") && (Te[5] = true);
            }
            j.set(J, Te);
          }
          break;
        }
        case "MATERIAL": {
          const J = N.get("NAME");
          if (J) se = J, M.set(J, {
            E: 0,
            nu: 0,
            G: 0
          });
          else if (se) {
            const ce = M.get(se), $e = N.get("E");
            $e && (ce.E = tt($e));
            const Te = N.get("U");
            Te && (ce.nu = tt(Te)), ce.G = ce.E / (2 * (1 + ce.nu));
            const Ve = N.get("M");
            Ve && (ce.density = tt(Ve));
          }
          break;
        }
        case "SHELL": {
          const J = _[0], ce = N.get("J");
          N.get("SEC"), ce && O.push({
            name: J,
            joints: ce.split(",")
          });
          break;
        }
        case "SHELL SECTION": {
          const J = N.get("NAME");
          J && H.set(J, {
            material: N.get("MAT") || "",
            type: N.get("TYPE") || "Shell",
            thickness: tt(N.get("TH"))
          });
          break;
        }
        case "FRAME": {
          const J = _[0], ce = N.get("J");
          if (ce) {
            const $e = ce.split(",");
            $e.length >= 2 && W.push({
              name: J,
              j1: $e[0],
              j2: $e[1]
            });
          }
          break;
        }
        case "LOAD": {
          const J = N.get("ADD");
          J && ye.push({
            joint: J,
            fx: tt(N.get("UX")),
            fy: tt(N.get("UY")),
            fz: tt(N.get("UZ")),
            mx: tt(N.get("MX")),
            my: tt(N.get("MY")),
            mz: tt(N.get("MZ"))
          });
          break;
        }
      }
    }
    return pa(b, P, M, Y, H, V, W, O, j, /* @__PURE__ */ new Map(), /* @__PURE__ */ new Map(), ye);
  }
  function pa(e, b, P, M, Y, H, V, W, O, j, ye, k) {
    var _a;
    const se = [], he = /* @__PURE__ */ new Map(), ue = [];
    for (const [xe, De] of H) he.set(xe, ue.length), se.push(xe), ue.push(De);
    const re = [], te = [], N = /* @__PURE__ */ new Map();
    for (const xe of V) {
      const De = he.get(xe.j1), He = he.get(xe.j2);
      if (De !== void 0 && He !== void 0) {
        const be = re.length;
        re.push([
          De,
          He
        ]), te.push(xe.name);
        const Se = j.get(xe.name);
        Se && N.set(be, Se);
      }
    }
    const _ = re.length;
    for (const xe of W) {
      const De = xe.joints.map((He) => he.get(He)).filter((He) => He !== void 0);
      if (De.length >= 3) {
        const He = re.length;
        re.push(De), te.push(xe.name);
        const be = ye.get(xe.name);
        be && N.set(He, be);
      }
    }
    const J = re.length - _, ce = {
      elasticities: /* @__PURE__ */ new Map(),
      shearModuli: /* @__PURE__ */ new Map(),
      areas: /* @__PURE__ */ new Map(),
      momentsOfInertiaZ: /* @__PURE__ */ new Map(),
      momentsOfInertiaY: /* @__PURE__ */ new Map(),
      torsionalConstants: /* @__PURE__ */ new Map(),
      densities: /* @__PURE__ */ new Map(),
      thicknesses: /* @__PURE__ */ new Map(),
      poissonsRatios: /* @__PURE__ */ new Map()
    }, $e = /* @__PURE__ */ new Map(), Te = P.values().next().value || {
      E: 29e3,
      nu: 0.3,
      G: 11153
    };
    for (let xe = 0; xe < re.length; xe++) {
      const De = N.get(xe), He = De ? M.get(De) : null, be = De ? Y.get(De) : null;
      if (He || re[xe].length === 2) {
        const Se = He || {
          material: "",
          A: 0,
          Iz: 0,
          Iy: 0,
          J: 0,
          D: 0.3,
          B: 0.3,
          shape: "Rectangular"
        }, ze = P.get(Se.material) || Te, Je = ze.E || Te.E, st = ze.nu || 0.3, Ue = ze.G || Je / (2 * (1 + st));
        ce.elasticities.set(xe, Je), ce.shearModuli.set(xe, Ue), ce.areas.set(xe, Se.A || Se.D * Se.B), ce.momentsOfInertiaZ.set(xe, Se.Iz || Se.B * Se.D ** 3 / 12), ce.momentsOfInertiaY.set(xe, Se.Iy || Se.D * Se.B ** 3 / 12), ce.torsionalConstants.set(xe, Se.J || 0), ce.densities.set(xe, ze.density || 0), ((_a = Se.shape) == null ? void 0 : _a.includes("Wide Flange")) || Se.shape === "I" ? $e.set(xe, {
          type: "I",
          b: Se.B,
          h: Se.D,
          name: De || "I-section"
        }) : $e.set(xe, {
          type: "rect",
          b: Se.B,
          h: Se.D
        });
      } else if (be) {
        const Se = P.get(be.material) || Te, ze = Se.E || Te.E, Je = Se.nu || 0.2, st = Se.G || ze / (2 * (1 + Je));
        ce.elasticities.set(xe, ze), ce.shearModuli.set(xe, st), ce.thicknesses.set(xe, be.thickness), ce.poissonsRatios.set(xe, Je), ce.densities.set(xe, Se.density || 0);
      }
    }
    const Ve = {
      supports: /* @__PURE__ */ new Map(),
      forces: /* @__PURE__ */ new Map()
    };
    for (const [xe, De] of O) {
      const He = he.get(xe);
      He !== void 0 && Ve.supports.set(He, De);
    }
    for (const xe of k) {
      const De = he.get(xe.joint);
      if (De !== void 0) {
        const He = Ve.forces.get(De) || [
          0,
          0,
          0,
          0,
          0,
          0
        ];
        He[0] += xe.fx, He[1] += xe.fy, He[2] += xe.fz, He[3] += xe.mx, He[4] += xe.my, He[5] += xe.mz, Ve.forces.set(De, He);
      }
    }
    return {
      units: e,
      dof: b,
      materials: P,
      frameSections: M,
      shellSections: Y,
      nodes: ue,
      nodeNames: se,
      nodeNameToIdx: he,
      elements: re,
      elementNames: te,
      elementSections: N,
      nodeInputs: Ve,
      elementInputs: ce,
      sectionShapes: $e,
      info: {
        nNodes: ue.length,
        nFrames: _,
        nShells: J,
        title: `SAP2000 (${_} frames, ${J} shells)`
      }
    };
  }
  function Fl(e) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j;
    const { nodes: b, elements: P, nodeInputs: M, elementInputs: Y } = e, H = e.units || {
      force: "KN",
      length: "m"
    }, V = e.title || "Awatif Model", W = [], O = (N) => W.push(N), j = () => W.push(" ");
    O(`File ${V}.$2k was saved on m/d/yy at h:mm:ss`), j(), O('TABLE:  "ACTIVE DEGREES OF FREEDOM"'), O("   UX=Yes   UY=Yes   UZ=Yes   RX=Yes   RY=Yes   RZ=Yes"), j();
    const ye = [], k = [];
    if (P.forEach((N, _) => {
      N.length === 2 ? ye.push(_) : k.push(_);
    }), ye.length > 0) {
      O('TABLE:  "CONNECTIVITY - FRAME"');
      for (const N of ye) {
        const _ = P[N];
        O(`   Frame=${N + 1}   JointI=${_[0] + 1}   JointJ=${_[1] + 1}   IsCurved=No`);
      }
      j();
    }
    if (k.length > 0) {
      O('TABLE:  "CONNECTIVITY - AREA"');
      for (const N of k) {
        const _ = P[N], J = _.map((ce, $e) => `Joint${$e + 1}=${ce + 1}`).join("   ");
        O(`   Area=${N + 1}   NumJoints=${_.length}   ${J}`);
      }
      j();
    }
    O('TABLE:  "COORDINATE SYSTEMS"'), O("   Name=GLOBAL   Type=Cartesian   X=0   Y=0   Z=0   AboutZ=0   AboutY=0   AboutX=0"), j(), O('TABLE:  "DATABASE FORMAT TYPES"'), O("   UnitsCurr=Yes   OverrideE=No"), j();
    const se = /* @__PURE__ */ new Map(), he = /* @__PURE__ */ new Map();
    for (const N of ye) {
      const _ = ((_a = Y.areas) == null ? void 0 : _a.get(N)) || 0, J = ((_b = Y.momentsOfInertiaZ) == null ? void 0 : _b.get(N)) || 0, ce = ((_c = Y.momentsOfInertiaY) == null ? void 0 : _c.get(N)) || 0, $e = ((_d = Y.torsionalConstants) == null ? void 0 : _d.get(N)) || 0, Te = ((_e = Y.elasticities) == null ? void 0 : _e.get(N)) || 0, Ve = `MAT_${Math.round(Te)}`, xe = `A${_.toPrecision(6)}_Iz${J.toPrecision(6)}`;
      if (!se.has(xe)) {
        let He = 0.3, be = 0.3;
        _ > 0 && J > 0 && (He = Math.sqrt(12 * J / _), be = _ / He), se.set(xe, {
          A: _,
          Iz: J,
          Iy: ce,
          J: $e,
          b: be,
          h: He,
          matKey: Ve
        });
      }
      const De = [
        ...se.keys()
      ].indexOf(xe) + 1;
      he.set(N, `SEC${De}`);
    }
    if (ye.length > 0) {
      O('TABLE:  "FRAME SECTION ASSIGNMENTS"');
      for (const N of ye) {
        const _ = he.get(N) || "SEC1";
        O(`   Frame=${N + 1}   AutoSelect=N.A.   AnalSect=${_}   MatProp=Default`);
      }
      j();
    }
    if (se.size > 0) {
      O('TABLE:  "FRAME SECTION PROPERTIES 01 - GENERAL"');
      let N = 0;
      for (const [, _] of se) {
        N++;
        const J = _.A * 5 / 6;
        O(`   SectionName=SEC${N}   Material=${_.matKey}   Shape=Rectangular   t3=${Et(_.h)}   t2=${Et(_.b)}   Area=${Et(_.A)}   TorsConst=${Et(_.J)}   I33=${Et(_.Iz)}   I22=${Et(_.Iy)}   I23=0   AS2=${Et(J)}   AS3=${Et(J)} _`), O("        Color=Blue   FromFile=No   AMod=1   A2Mod=1   A3Mod=1   JMod=1   I2Mod=1   I3Mod=1   MMod=1   WMod=1");
      }
      j();
    }
    const ue = /* @__PURE__ */ new Map(), re = /* @__PURE__ */ new Map();
    for (const N of k) {
      const _ = ((_f = Y.thicknesses) == null ? void 0 : _f.get(N)) || 0.1, J = ((_g = Y.elasticities) == null ? void 0 : _g.get(N)) || 0, ce = `MAT_${Math.round(J)}`, $e = `t${_.toPrecision(6)}`;
      ue.has($e) || ue.set($e, {
        t: _,
        matKey: ce
      });
      const Te = [
        ...ue.keys()
      ].indexOf($e) + 1;
      re.set(N, `SSEC${Te}`);
    }
    if (k.length > 0) {
      O('TABLE:  "AREA SECTION ASSIGNMENTS"');
      for (const _ of k) {
        const J = re.get(_) || "SSEC1";
        O(`   Area=${_ + 1}   Section=${J}   MatProp=Default`);
      }
      j(), O('TABLE:  "AREA SECTION PROPERTIES"');
      let N = 0;
      for (const [, _] of ue) N++, O(`   Section=SSEC${N}   Material=${_.matKey}   MatAngle=0   AreaType=Shell   Type=ShellThin   DrillDOF=Yes   Thickness=${Et(_.t)}   BendThick=${Et(_.t)}   Color=Cyan`);
      j();
    }
    O('TABLE:  "JOINT COORDINATES"');
    for (let N = 0; N < b.length; N++) {
      const _ = b[N];
      O(`   Joint=${N + 1}   CoordSys=GLOBAL   CoordType=Cartesian   XorR=${Et(_[0])}   Y=${Et(_[1])}   Z=${Et(_[2])}   SpecialJt=No`);
    }
    if (j(), M.supports && M.supports.size > 0) {
      O('TABLE:  "JOINT RESTRAINT ASSIGNMENTS"');
      for (const [N, _] of M.supports) {
        if (!_.some((ce) => ce)) continue;
        const J = (ce) => ce ? "Yes" : "No";
        O(`   Joint=${N + 1}   U1=${J(_[0])}   U2=${J(_[1])}   U3=${J(_[2])}   R1=${J(_[3])}   R2=${J(_[4])}   R3=${J(_[5])}`);
      }
      j();
    }
    if (O('TABLE:  "LOAD PATTERN DEFINITIONS"'), O("   LoadPat=DEAD   DesignType=Dead   SelfWtMult=0"), j(), O('TABLE:  "LOAD CASE DEFINITIONS"'), O('   Case=DEAD   Type=LinStatic   InitialCond=Zero   DesTypeOpt="Prog Det"   DesignType=Dead   DesActOpt="Prog Det"   DesignAct=Non-Composite   AutoType=None   RunCase=Yes'), j(), O('TABLE:  "CASE - STATIC 1 - LOAD ASSIGNMENTS"'), O('   Case=DEAD   LoadType="Load pattern"   LoadName=DEAD   LoadSF=1'), j(), M.forces && M.forces.size > 0) {
      O('TABLE:  "JOINT LOADS - FORCE"');
      for (const [N, _] of M.forces) _.some((J) => Math.abs(J) > 1e-12) && O(`   Joint=${N + 1}   LoadPat=DEAD   CoordSys=GLOBAL   F1=${Et(_[0])}   F2=${Et(_[1])}   F3=${Et(_[2])}   M1=${Et(_[3])}   M2=${Et(_[4])}   M3=${Et(_[5])}`);
      j();
    }
    const te = /* @__PURE__ */ new Map();
    for (let N = 0; N < P.length; N++) {
      const _ = ((_h = Y.elasticities) == null ? void 0 : _h.get(N)) || 0, J = ((_i = Y.shearModuli) == null ? void 0 : _i.get(N)) || 0, ce = _ > 0 && J > 0 ? Math.max(0, Math.min(0.5, _ / (2 * J) - 1)) : 0.2, $e = ((_j = Y.densities) == null ? void 0 : _j.get(N)) || 0, Te = `MAT_${Math.round(_)}`;
      te.has(Te) || te.set(Te, {
        E: _,
        nu: ce,
        G: J,
        rho: $e
      });
    }
    O('TABLE:  "MATERIAL PROPERTIES 01 - GENERAL"');
    for (const [N] of te) O(`   Material=${N}   Type=Concrete   SymType=Isotropic   TempDepend=No   Color=Green`);
    j(), O('TABLE:  "MATERIAL PROPERTIES 02 - BASIC MECHANICAL PROPERTIES"');
    for (const [N, _] of te) O(`   Material=${N}   UnitWeight=${Et(_.rho * 9.81)}   UnitMass=${Et(_.rho)}   E1=${Et(_.E)}   G12=${Et(_.G)}   U12=${Et(_.nu)}   A1=9.9E-06`);
    j(), O('TABLE:  "MATERIAL PROPERTIES 03B - CONCRETE DATA"');
    for (const [N] of te) O(`   Material=${N}   Fc=27579   eFc=27579   LtWtConc=No   SSCurveOpt=Mander   SSHysType=Takeda   SFc=0.00222   SCap=0.005   FinalSlope=-0.1   FAngle=0   DAngle=0`);
    return j(), O('TABLE:  "PROGRAM CONTROL"'), O(`   ProgramName=SAP2000   Version=24.1.0   CurrUnits="${H.force}, ${H.length}, C"   SteelCode="AISC 360-16"   ConcCode="ACI 318-19"   AlumCode="AA 2015"   ColdCode=AISI-16   RegenHinge=Yes`), j(), O("END TABLE DATA"), O(""), W.join(`\r
`);
  }
  function Et(e) {
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
    for (const Y of M) {
      const H = e.get(Y);
      if (!(!H || H.length === 0)) {
        P.push(`$ ${Y}`);
        for (const V of H) P.push(V);
        P.push("");
      }
    }
    for (const [Y, H] of e) if (!M.includes(Y) && H.length !== 0) {
      P.push(`$ ${Y}`);
      for (const V of H) P.push(V);
      P.push("");
    }
    return P.push("  END"), P.push("$ END OF MODEL FILE"), P.join(`\r
`);
  }
  function Ol(e) {
    var _a, _b, _c, _d;
    const { nodes: b, elements: P, nodeInputs: M, elementInputs: Y, title: H, units: V } = e, W = (V == null ? void 0 : V.force) || "TONF", O = (V == null ? void 0 : V.length) || "M", j = [], ye = (be) => Math.round(be * 1e4) / 1e4;
    j.push("$ File exported from Awatif FEM Studio"), j.push(""), j.push("$ PROGRAM INFORMATION"), j.push('  PROGRAM  "AWATIF"  VERSION "1.0.0"  '), j.push(""), j.push("$ CONTROLS"), j.push(`  UNITS  "${W}"  "${O}"  "C"  `), H && j.push(`  TITLE2  "${H}"  `), j.push("");
    const k = /* @__PURE__ */ new Set();
    b.forEach((be) => k.add(ye(be[1])));
    const se = [
      ...k
    ].sort((be, Se) => be - Se), he = [], ue = /* @__PURE__ */ new Map();
    he.push("Base"), ue.set(se[0], "Base");
    for (let be = 1; be < se.length; be++) {
      const Se = `Level_${be}`;
      he.push(Se), ue.set(se[be], Se);
    }
    j.push("$ STORIES - IN SEQUENCE FROM TOP");
    for (let be = se.length - 1; be >= 1; be--) j.push(`  STORY "${he[be]}"  HEIGHT ${ye(se[be] - se[be - 1])} MASTERSTORY "Yes"  `);
    se.length > 0 && j.push(`  STORY "Base"  ELEV ${se[0]} `), j.push(""), P.some((be) => be.length === 4) && (j.push("$ DIAPHRAGM NAMES"), j.push('  DIAPHRAGM "D1"    TYPE RIGID'), j.push("")), j.push("$ MATERIAL PROPERTIES");
    const te = /* @__PURE__ */ new Set();
    (_a = Y.elasticities) == null ? void 0 : _a.forEach((be) => te.add(be));
    const N = /* @__PURE__ */ new Map();
    let _ = 0;
    for (const be of te) {
      const Se = `Mat_${++_}`;
      N.set(be, Se), j.push(`  MATERIAL  "${Se}"    TYPE "Concrete"    WEIGHTPERVOLUME 2.4`), j.push(`  MATERIAL  "${Se}"    SYMTYPE "Isotropic"  E ${be}  U 0.2  A 1E-05`);
    }
    j.push(""), j.push("$ FRAME SECTIONS");
    const J = /* @__PURE__ */ new Set(), ce = /* @__PURE__ */ new Map(), $e = /* @__PURE__ */ new Map();
    P.forEach((be, Se) => {
      var _a2, _b2;
      if (be.length !== 2) return;
      const ze = (_a2 = Y.sectionShapes) == null ? void 0 : _a2.get(Se), Je = ((_b2 = Y.elasticities) == null ? void 0 : _b2.get(Se)) ?? 0, st = N.get(Je) || "Mat_1", Ue = (ze == null ? void 0 : ze.h) ?? 0, at = (ze == null ? void 0 : ze.b) ?? 0, dt = (ze == null ? void 0 : ze.d) ?? 0, yt = (ze == null ? void 0 : ze.tf) ?? 0, kt = (ze == null ? void 0 : ze.tw) ?? 0, Ct = (ze == null ? void 0 : ze.type) || "rect", ht = `${Ct}_${Ue}_${at}_${dt}_${yt}_${kt}`;
      (ze == null ? void 0 : ze.name) && !$e.has(ht) && $e.set(ht, ze.name);
      let ut = $e.get(ht);
      if (ut || (Ct === "rect" ? ut = `R${ye(at * 100)}x${ye(Ue * 100)}` : Ct === "circ" ? ut = `C_D${ye(dt * 100)}` : Ct === "I" ? ut = `I_${ye(Ue * 100)}` : ut = `Sec_${J.size + 1}`, $e.set(ht, ut)), ce.set(Se, ut), J.has(ut)) return;
      J.add(ut);
      const Ne = {
        rect: "Concrete Rectangular",
        circ: "Concrete Circle",
        I: "Steel I/Wide Flange",
        HSS: "Steel Tube",
        pipe: "Steel Pipe",
        L: "Steel Angle",
        C: "Steel Channel",
        "2C": "Steel Double Channel"
      }[Ct] || "Concrete Rectangular";
      let xt = `  FRAMESECTION  "${ut}"  MATERIAL "${st}"  SHAPE "${Ne}"`;
      Ue && (xt += `  D ${Ue}`), at && (xt += `  B ${at}`), dt && !Ue && (xt += `  D ${dt}`), yt && (xt += `  TF ${yt}`), kt && (xt += `  TW ${kt}`), j.push(xt);
    }), j.push("");
    const Te = /* @__PURE__ */ new Map();
    let Ve = 0;
    b.forEach((be) => {
      const Se = `${ye(be[0])},${ye(be[2])}`;
      Te.has(Se) || Te.set(Se, `${++Ve}`);
    }), j.push("$ POINT COORDINATES");
    for (const [be, Se] of Te) {
      const [ze, Je] = be.split(",").map(Number);
      j.push(`  POINT "${Se}"  ${ze} ${Je} `);
    }
    j.push("");
    const xe = (be) => {
      const Se = b[be], ze = `${ye(Se[0])},${ye(Se[2])}`;
      return {
        pt: Te.get(ze) || "1",
        story: ue.get(ye(Se[1])) || "Base"
      };
    };
    j.push("$ LINE CONNECTIVITIES");
    const De = [];
    P.forEach((be, Se) => {
      if (be.length !== 2) return;
      const ze = Nl(b, be), Je = ce.get(Se) || `Sec_${Se}`;
      if (ze === "BEAM") {
        const st = xe(be[0]), Ue = xe(be[1]);
        j.push(`  LINE  "E${Se + 1}"  BEAM  "${st.pt}"  "${Ue.pt}"  0`), De.push(`  LINEASSIGN  "E${Se + 1}"  "${st.story}"  SECTION "${Je}"  MINNUMSTA 3 AUTOMESH "YES"  MESHATINTERSECTIONS "YES"  `);
      } else {
        const st = b[be[0]][1] <= b[be[1]][1] ? be[0] : be[1], Ue = b[be[0]][1] <= b[be[1]][1] ? be[1] : be[0];
        xe(st);
        const at = xe(Ue), dt = ye(b[st][1]), yt = ye(b[Ue][1]), kt = se.indexOf(dt), Ct = se.indexOf(yt), ht = Math.max(1, Ct >= 0 && kt >= 0 ? Ct - kt : 1);
        j.push(`  LINE  "E${Se + 1}"  ${ze}  "${at.pt}"  "${at.pt}"  ${ht}`);
        for (let ut = 0; ut < ht; ut++) {
          const ro = Ct - ut;
          ro >= 0 && ro < he.length && De.push(`  LINEASSIGN  "E${Se + 1}"  "${he[ro]}"  SECTION "${Je}"  MINNUMSTA 3 AUTOMESH "YES"  MESHATINTERSECTIONS "YES"  `);
        }
      }
    }), j.push(""), j.push("$ POINT ASSIGNS"), (_b = M.supports) == null ? void 0 : _b.forEach((be, Se) => {
      const ze = [];
      if (be[0] && ze.push("UX"), be[1] && ze.push("UY"), be[2] && ze.push("UZ"), be[3] && ze.push("RX"), be[4] && ze.push("RY"), be[5] && ze.push("RZ"), ze.length > 0) {
        const Je = xe(Se);
        j.push(`  POINTASSIGN  "${Je.pt}"  "${Je.story}"  RESTRAINT "${ze.join(" ")}"  `);
      }
    }), j.push(""), j.push("$ LINE ASSIGNS"), De.forEach((be) => j.push(be)), j.push("");
    const He = [];
    if (P.forEach((be, Se) => {
      if (be.length === 4) {
        const ze = b[be[0]], Je = b[be[1]], st = b[be[2]], Ue = [
          Je[0] - ze[0],
          Je[1] - ze[1],
          Je[2] - ze[2]
        ], at = [
          st[0] - ze[0],
          st[1] - ze[1],
          st[2] - ze[2]
        ], dt = Math.abs(Ue[2] * at[0] - Ue[0] * at[2]), yt = Math.sqrt((Ue[1] * at[2] - Ue[2] * at[1]) ** 2 + dt ** 2 + (Ue[0] * at[1] - Ue[1] * at[0]) ** 2), kt = yt > 1e-10 && dt / yt < 0.5;
        He.push({
          idx: Se,
          el: be,
          isWall: kt
        });
      }
    }), He.some((be) => !be.isWall)) {
      j.push("$ SLAB PROPERTIES");
      const be = ((_c = Y.thicknesses) == null ? void 0 : _c.values().next().value) ?? 0.15;
      j.push(`  SHELLPROP  "Losa"  PROPTYPE  "Slab"  MATERIAL "${N.values().next().value || "Mat_1"}"  MODELINGTYPE "ShellThin"  SLABTYPE "Slab"  SLABTHICKNESS ${be} `), j.push("");
    }
    if (He.some((be) => be.isWall)) {
      j.push("$ WALL PROPERTIES");
      const be = ((_d = Y.thicknesses) == null ? void 0 : _d.values().next().value) ?? 0.2;
      j.push(`  SHELLPROP  "Muro"  PROPTYPE  "Wall"  MATERIAL "${N.values().next().value || "Mat_1"}"  MODELINGTYPE "ShellThick"  WALLTHICKNESS ${be} `), j.push("");
    }
    if (He.length > 0) {
      j.push("$ AREA CONNECTIVITIES");
      const be = [];
      He.forEach((Se, ze) => {
        const { el: Je, isWall: st } = Se, Ue = st ? `W${ze + 1}` : `F${ze + 1}`, at = st ? "PANEL" : "FLOOR", dt = Je.map((yt) => xe(yt));
        if (st) {
          const yt = b[Je[0]][1] <= b[Je[2]][1] ? 0 : 2, kt = b[Je[1]][1] <= b[Je[3]][1] ? 1 : 3;
          j.push(`  AREA "${Ue}"  ${at}  4  "${dt[yt].pt}"  "${dt[kt].pt}"  "${dt[kt].pt}"  "${dt[yt].pt}"  1  1  0  0  `);
          const Ct = dt[yt === 0 ? 2 : 0].story;
          be.push(`  AREAASSIGN  "${Ue}"  "${Ct}"  SECTION "Muro"  OBJMESHTYPE "DEFAULT"  ADDRESTRAINT "Yes"  CARDINALPOINT "MIDDLE"  TRANSFORMSTIFFNESSFOROFFSETS "No"  `);
        } else j.push(`  AREA "${Ue}"  ${at}  4  "${dt[0].pt}"  "${dt[1].pt}"  "${dt[2].pt}"  "${dt[3].pt}"  0  0  0  0  `), be.push(`  AREAASSIGN  "${Ue}"  "${dt[0].story}"  SECTION "Losa"  DIAPH  "D1"  OBJMESHTYPE "DEFAULT"  ADDRESTRAINT "Yes"  CARDINALPOINT "TOP"  TRANSFORMSTIFFNESSFOROFFSETS "No"  `);
      }), j.push(""), j.push("$ AREA ASSIGNS"), be.forEach((Se) => j.push(Se)), j.push("");
    }
    return j.push("$ LOAD PATTERNS"), j.push('  LOADPATTERN "Dead"  TYPE  "Dead"  SELFWEIGHT  1'), j.push('  LOADPATTERN "Live"  TYPE  "Live"  SELFWEIGHT  0'), j.push(""), M.loads && M.loads.size > 0 && (j.push("$ POINT OBJECT LOADS"), M.loads.forEach((be, Se) => {
      const [ze, Je, st] = be, Ue = xe(Se);
      Math.abs(ze) > 1e-10 && j.push(`  POINTLOAD  "${Ue.pt}"  "${Ue.story}"  "Dead"  TYPE "FORCE"  FX ${ze}`), Math.abs(Je) > 1e-10 && j.push(`  POINTLOAD  "${Ue.pt}"  "${Ue.story}"  "Dead"  TYPE "FORCE"  FY ${Je}`), Math.abs(st) > 1e-10 && j.push(`  POINTLOAD  "${Ue.pt}"  "${Ue.story}"  "Dead"  TYPE "FORCE"  FZ ${st}`);
    }), j.push("")), j.push("  END"), j.push("$ END OF MODEL FILE"), j.join(`\r
`);
  }
  function Nl(e, b) {
    const P = e[b[0]], M = e[b[1]], Y = Math.abs(M[1] - P[1]), H = Math.sqrt((M[0] - P[0]) ** 2 + (M[2] - P[2]) ** 2), V = Y > H * 0.5;
    return V && H > 0.01 ? "BRACE" : V ? "COLUMN" : "BEAM";
  }
  function ql(e) {
    var _a, _b;
    const { nodes: b, elements: P, nodeInputs: M, elementInputs: Y } = e, H = [];
    return H.push("# OpenSeesPy model exported from Awatif FEM Studio"), H.push(`# ${b.length} nodes, ${P.length} elements`), H.push(""), H.push("import openseespy.opensees as ops"), H.push(""), H.push("ops.wipe()"), H.push("ops.model('basic', '-ndm', 3, '-ndf', 6)"), H.push(""), H.push("# --- Nodes ---"), b.forEach((V, W) => {
      H.push(`ops.node(${W + 1}, ${V[0]}, ${V[1]}, ${V[2]})`);
    }), H.push(""), H.push("# --- Boundary Conditions ---"), (_a = M.supports) == null ? void 0 : _a.forEach((V, W) => {
      const O = V.map((j) => j ? 1 : 0).join(", ");
      H.push(`ops.fix(${W + 1}, ${O})`);
    }), H.push(""), H.push("# --- Geometric Transformations ---"), H.push("ops.geomTransf('Linear', 1, 0.0, 0.0, 1.0)  # beams (vecxz = Z)"), H.push("ops.geomTransf('Linear', 2, -1.0, 0.0, 0.0)  # columns (vecxz = -X)"), H.push(""), H.push("# --- Elements (elasticBeamColumn) ---"), P.forEach((V, W) => {
      var _a2, _b2, _c, _d, _e, _f;
      if (V.length !== 2) return;
      const O = b[V[0]], j = b[V[1]], k = Math.abs(j[2] - O[2]) > Math.max(Math.abs(j[0] - O[0]), Math.abs(j[1] - O[1])) ? 2 : 1, se = ((_a2 = Y.areas) == null ? void 0 : _a2.get(W)) ?? 1, he = ((_b2 = Y.elasticities) == null ? void 0 : _b2.get(W)) ?? 2e5, ue = ((_c = Y.shearModuli) == null ? void 0 : _c.get(W)) ?? 8e4, re = ((_d = Y.torsionalConstants) == null ? void 0 : _d.get(W)) ?? 1, te = ((_e = Y.momentsOfInertiaY) == null ? void 0 : _e.get(W)) ?? 1, N = ((_f = Y.momentsOfInertiaZ) == null ? void 0 : _f.get(W)) ?? 1;
      H.push(`ops.element('elasticBeamColumn', ${W + 1}, ${V[0] + 1}, ${V[1] + 1}, ${se}, ${he}, ${ue}, ${re}, ${te}, ${N}, ${k})`);
    }), H.push(""), M.loads && M.loads.size > 0 && (H.push("# --- Loads ---"), H.push("ops.timeSeries('Linear', 1)"), H.push("ops.pattern('Plain', 1, 1)"), M.loads.forEach((V, W) => {
      const O = V.map((j) => j).join(", ");
      H.push(`ops.load(${W + 1}, ${O})`);
    }), H.push("")), H.push("# --- Analysis ---"), H.push("ops.system('BandGeneral')"), H.push("ops.numberer('RCM')"), H.push("ops.constraints('Plain')"), H.push("ops.integrator('LoadControl', 1.0)"), H.push("ops.algorithm('Linear')"), H.push("ops.analysis('Static')"), H.push("ops.analyze(1)"), H.push(""), H.push("# --- Results ---"), H.push('print("\\n=== Displacements ===")'), b.forEach((V, W) => {
      H.push(`print(f"Node {${W + 1}}: {ops.nodeDisp(${W + 1})}")`);
    }), H.push(""), H.push('print("\\n=== Reactions ===")'), H.push("ops.reactions()"), (_b = M.supports) == null ? void 0 : _b.forEach((V, W) => {
      H.push(`print(f"Node {${W + 1}}: {ops.nodeReaction(${W + 1})}")`);
    }), H.join(`
`);
  }
  function _l(e) {
    var _a, _b;
    const { nodes: b, elements: P, nodeInputs: M, elementInputs: Y } = e, H = [];
    return H.push("# OpenSees Tcl model exported from Awatif FEM Studio"), H.push(`# ${b.length} nodes, ${P.length} elements`), H.push(""), H.push("wipe"), H.push("model basic -ndm 3 -ndf 6"), H.push(""), H.push("# --- Nodes ---"), b.forEach((V, W) => {
      H.push(`node ${W + 1} ${V[0]} ${V[1]} ${V[2]}`);
    }), H.push(""), H.push("# --- Boundary Conditions ---"), (_a = M.supports) == null ? void 0 : _a.forEach((V, W) => {
      const O = V.map((j) => j ? 1 : 0).join(" ");
      H.push(`fix ${W + 1} ${O}`);
    }), H.push(""), H.push("# --- Geometric Transformations ---"), H.push("geomTransf Linear 1 0.0 0.0 1.0"), H.push("geomTransf Linear 2 -1.0 0.0 0.0"), H.push(""), H.push("# --- Elements ---"), P.forEach((V, W) => {
      var _a2, _b2, _c, _d, _e, _f;
      if (V.length !== 2) return;
      const O = b[V[0]], j = b[V[1]], k = Math.abs(j[2] - O[2]) > Math.max(Math.abs(j[0] - O[0]), Math.abs(j[1] - O[1])) ? 2 : 1, se = ((_a2 = Y.areas) == null ? void 0 : _a2.get(W)) ?? 1, he = ((_b2 = Y.elasticities) == null ? void 0 : _b2.get(W)) ?? 2e5, ue = ((_c = Y.shearModuli) == null ? void 0 : _c.get(W)) ?? 8e4, re = ((_d = Y.torsionalConstants) == null ? void 0 : _d.get(W)) ?? 1, te = ((_e = Y.momentsOfInertiaY) == null ? void 0 : _e.get(W)) ?? 1, N = ((_f = Y.momentsOfInertiaZ) == null ? void 0 : _f.get(W)) ?? 1;
      H.push(`element elasticBeamColumn ${W + 1} ${V[0] + 1} ${V[1] + 1} ${se} ${he} ${ue} ${re} ${te} ${N} ${k}`);
    }), H.push(""), M.loads && M.loads.size > 0 && (H.push("# --- Loads ---"), H.push("timeSeries Linear 1"), H.push("pattern Plain 1 1 {"), M.loads.forEach((V, W) => {
      const O = V.map((j) => j).join(" ");
      H.push(`  load ${W + 1} ${O}`);
    }), H.push("}"), H.push("")), H.push("# --- Analysis ---"), H.push("system BandGeneral"), H.push("numberer RCM"), H.push("constraints Plain"), H.push("integrator LoadControl 1.0"), H.push("algorithm Linear"), H.push("analysis Static"), H.push("analyze 1"), H.push(""), H.push("# --- Results ---"), H.push('puts "\\n=== Displacements ==="'), b.forEach((V, W) => {
      H.push(`puts "Node ${W + 1}: [nodeDisp ${W + 1}]"`);
    }), H.push('puts "\\n=== Reactions ==="'), H.push("reactions"), (_b = M.supports) == null ? void 0 : _b.forEach((V, W) => {
      H.push(`puts "Node ${W + 1}: [nodeReaction ${W + 1}]"`);
    }), H.join(`
`);
  }
  function Bl(e) {
    const b = [], P = [], M = /* @__PURE__ */ new Map(), Y = /* @__PURE__ */ new Map(), H = /* @__PURE__ */ new Map(), V = /* @__PURE__ */ new Map(), W = /* @__PURE__ */ new Map(), O = /* @__PURE__ */ new Map(), j = /* @__PURE__ */ new Map(), ye = /* @__PURE__ */ new Map(), k = /* @__PURE__ */ new Map(), se = /* @__PURE__ */ new Map();
    for (const he of e.split(/\r?\n/)) {
      const ue = he.trim(), re = ue.match(/ops\.node\(\s*(\d+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)/);
      if (re) {
        const J = parseInt(re[1]), ce = b.length;
        b.push([
          parseFloat(re[2]),
          parseFloat(re[3]),
          parseFloat(re[4])
        ]), k.set(J, ce);
        continue;
      }
      const te = ue.match(/ops\.fix\(\s*(\d+)\s*,\s*(\d)\s*,\s*(\d)\s*,\s*(\d)\s*,\s*(\d)\s*,\s*(\d)\s*,\s*(\d)/);
      if (te) {
        const J = parseInt(te[1]), ce = k.get(J);
        ce !== void 0 && M.set(ce, [
          te[2] === "1",
          te[3] === "1",
          te[4] === "1",
          te[5] === "1",
          te[6] === "1",
          te[7] === "1"
        ]);
        continue;
      }
      const N = ue.match(/ops\.element\(\s*'elasticBeamColumn'\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)/);
      if (N) {
        const J = parseInt(N[1]), ce = k.get(parseInt(N[2])), $e = k.get(parseInt(N[3]));
        if (ce !== void 0 && $e !== void 0) {
          const Te = P.length;
          P.push([
            ce,
            $e
          ]), se.set(J, Te), W.set(Te, parseFloat(N[4])), H.set(Te, parseFloat(N[5])), V.set(Te, parseFloat(N[6])), ye.set(Te, parseFloat(N[7])), O.set(Te, parseFloat(N[8])), j.set(Te, parseFloat(N[9]));
        }
        continue;
      }
      const _ = ue.match(/ops\.load\(\s*(\d+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)/);
      if (_) {
        const J = k.get(parseInt(_[1]));
        J !== void 0 && Y.set(J, [
          parseFloat(_[2]),
          parseFloat(_[3]),
          parseFloat(_[4]),
          parseFloat(_[5]),
          parseFloat(_[6]),
          parseFloat(_[7])
        ]);
      }
    }
    return {
      nodes: b,
      elements: P,
      nodeInputs: {
        supports: M,
        loads: Y
      },
      elementInputs: {
        elasticities: H,
        shearModuli: V,
        areas: W,
        momentsOfInertiaY: O,
        momentsOfInertiaZ: j,
        torsionalConstants: ye
      }
    };
  }
  function Dl(e) {
    const b = [], P = [], M = /* @__PURE__ */ new Map(), Y = /* @__PURE__ */ new Map(), H = /* @__PURE__ */ new Map(), V = /* @__PURE__ */ new Map(), W = /* @__PURE__ */ new Map(), O = /* @__PURE__ */ new Map(), j = /* @__PURE__ */ new Map(), ye = /* @__PURE__ */ new Map(), k = /* @__PURE__ */ new Map();
    for (const se of e.split(/\r?\n/)) {
      const he = se.trim();
      if (he.startsWith("#") || he.startsWith("//")) continue;
      const ue = he.split(/\s+/);
      if (ue[0] === "node" && ue.length >= 5) {
        const re = parseInt(ue[1]), te = b.length;
        b.push([
          parseFloat(ue[2]),
          parseFloat(ue[3]),
          parseFloat(ue[4])
        ]), k.set(re, te);
        continue;
      }
      if (ue[0] === "fix" && ue.length >= 8) {
        const re = k.get(parseInt(ue[1]));
        re !== void 0 && M.set(re, [
          ue[2] === "1",
          ue[3] === "1",
          ue[4] === "1",
          ue[5] === "1",
          ue[6] === "1",
          ue[7] === "1"
        ]);
        continue;
      }
      if (ue[0] === "element" && ue[1] === "elasticBeamColumn" && ue.length >= 12) {
        const re = k.get(parseInt(ue[3])), te = k.get(parseInt(ue[4]));
        if (re !== void 0 && te !== void 0) {
          const N = P.length;
          P.push([
            re,
            te
          ]), W.set(N, parseFloat(ue[5])), H.set(N, parseFloat(ue[6])), V.set(N, parseFloat(ue[7])), ye.set(N, parseFloat(ue[8])), O.set(N, parseFloat(ue[9])), j.set(N, parseFloat(ue[10]));
        }
        continue;
      }
      if (ue[0] === "load" && ue.length >= 8) {
        const re = k.get(parseInt(ue[1]));
        re !== void 0 && Y.set(re, [
          parseFloat(ue[2]),
          parseFloat(ue[3]),
          parseFloat(ue[4]),
          parseFloat(ue[5]),
          parseFloat(ue[6]),
          parseFloat(ue[7])
        ]);
      }
    }
    return {
      nodes: b,
      elements: P,
      nodeInputs: {
        supports: M,
        loads: Y
      },
      elementInputs: {
        elasticities: H,
        shearModuli: V,
        areas: W,
        momentsOfInertiaY: O,
        momentsOfInertiaZ: j,
        torsionalConstants: ye
      }
    };
  }
  function Ut(e) {
    const b = [];
    let P = 0, M = false, Y = "";
    for (let H = 0; H < e.length; H++) {
      const V = e[H];
      if (V === "'" && (H === 0 || e[H - 1] !== "\\")) {
        M = !M, Y += V;
        continue;
      }
      if (M) {
        Y += V;
        continue;
      }
      if (V === "(") {
        P++, Y += V;
        continue;
      }
      if (V === ")") {
        P--, Y += V;
        continue;
      }
      if (V === "," && P === 0) {
        b.push(Y.trim()), Y = "";
        continue;
      }
      Y += V;
    }
    return Y.trim() && b.push(Y.trim()), b;
  }
  function fa(e, b) {
    const P = Ut(e);
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
    }, P = {}, M = {}, Y = e.match(/FILE_SCHEMA\s*\(\s*\(\s*'([^']*)'/i);
    Y && (b.schema = Y[1]);
    const H = /^#(\d+)\s*=\s*([A-Z][A-Z0-9_]*)\s*\(([\s\S]*?)\)\s*;\s*$/gm;
    let V;
    for (; (V = H.exec(e)) !== null; ) {
      const W = parseInt(V[1]), O = V[2].toUpperCase();
      P[W] = {
        id: W,
        type: O,
        args: V[3]
      }, M[O] || (M[O] = []), M[O].push(W);
    }
    if (M.IFCPROJECT) {
      const W = P[M.IFCPROJECT[0]];
      if (W) {
        const O = fa(W.args, 2);
        O && (b.project = O);
      }
    }
    return {
      meta: b,
      entities: P,
      typeIndex: M
    };
  }
  function Wt(e, b) {
    const P = b.match(/#(\d+)/);
    return P && e[parseInt(P[1])] || null;
  }
  function ua(e, b) {
    const P = Ut(b.args), M = Wt(e, P[0]), Y = M ? jl(e, M) : [
      0,
      0,
      0
    ];
    let H = [
      0,
      0,
      1
    ], V = [
      1,
      0,
      0
    ];
    if (P[1] && P[1] !== "$") {
      const W = Wt(e, P[1]);
      W && (H = ra(e, W));
    }
    if (P[2] && P[2] !== "$") {
      const W = Wt(e, P[2]);
      W && (V = ra(e, W));
    }
    return {
      origin: Y,
      dirZ: H,
      dirX: V
    };
  }
  function jl(e, b) {
    return b.args.replace(/[()]/g, "").split(",").map((M) => parseFloat(M.trim())).filter((M) => !isNaN(M));
  }
  function ra(e, b) {
    return b.args.replace(/[()]/g, "").split(",").map((M) => parseFloat(M.trim())).filter((M) => !isNaN(M));
  }
  function ma(e, b) {
    const P = Ut(b.args), M = Wt(e, P[1]);
    let Y = {
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
    if (M && (Y = ua(e, M)), P[0] && P[0] !== "$") {
      const H = Wt(e, P[0]);
      if (H && H.type === "IFCLOCALPLACEMENT") {
        const V = ma(e, H), W = es(Y.origin, V.dirX, Qn(V.dirZ, V.dirX), V.dirZ);
        Y.origin = [
          V.origin[0] + W[0],
          V.origin[1] + W[1],
          V.origin[2] + W[2]
        ], Y.dirZ = es(Y.dirZ, V.dirX, Qn(V.dirZ, V.dirX), V.dirZ), Y.dirX = es(Y.dirX, V.dirX, Qn(V.dirZ, V.dirX), V.dirZ);
      }
    }
    return Y;
  }
  function Qn(e, b) {
    return [
      e[1] * b[2] - e[2] * b[1],
      e[2] * b[0] - e[0] * b[2],
      e[0] * b[1] - e[1] * b[0]
    ];
  }
  function es(e, b, P, M) {
    return [
      e[0] * b[0] + e[1] * P[0] + e[2] * M[0],
      e[0] * b[1] + e[1] * P[1] + e[2] * M[1],
      e[0] * b[2] + e[1] * P[2] + e[2] * M[2]
    ];
  }
  const Wl = 0.01;
  function Gl(e) {
    const b = Hl(e), { entities: P, typeIndex: M } = b, Y = [], H = [], V = /* @__PURE__ */ new Map();
    V.set("Hormigon", {
      E: 2132888792e-2,
      nu: 0.2,
      rho: 2.4
    }), V.set("Acero", {
      E: 2e8,
      nu: 0.3,
      rho: 7.85
    });
    let W = 0, O = 0;
    function j(te, N, _) {
      for (const J of Y) {
        const ce = J.x - te, $e = J.y - N, Te = J.z - _;
        if (Math.sqrt(ce * ce + $e * $e + Te * Te) < Wl) return J.id;
      }
      return Y.push({
        id: W,
        x: te,
        y: N,
        z: _
      }), W++;
    }
    function ye(te) {
      const N = fa(te.args, 2) || "", _ = M.IFCRELASSOCIATESMATERIAL || [];
      for (const ce of _) {
        const $e = P[ce];
        if (!$e) continue;
        const Te = Ut($e.args);
        if ((Te[4] || Te[3] || "").includes(`#${te.id}`)) {
          const xe = Te[5] || Te[4] || "", De = Wt(P, xe);
          if (De) return k(De);
        }
      }
      const J = N.match(/(\d+)\s*[xX×]\s*(\d+)/);
      return J ? {
        b: parseFloat(J[1]) / 100,
        h: parseFloat(J[2]) / 100,
        name: N
      } : {
        b: 0.3,
        h: 0.3,
        name: N || "Default"
      };
    }
    function k(te) {
      const N = te.type;
      if (N === "IFCRECTANGLEPROFILEDEF") {
        const _ = Ut(te.args), J = (_[1] || "").replace(/'/g, ""), ce = parseFloat(_[3]) || 0.3, $e = parseFloat(_[4]) || 0.3;
        return {
          b: ce,
          h: $e,
          name: J
        };
      }
      if (N === "IFCMATERIALPROFILE") {
        const _ = Ut(te.args), J = _[2] || _[1] || "", ce = Wt(P, J);
        if (ce) return k(ce);
      }
      if (N === "IFCMATERIALPROFILESET") {
        const _ = Ut(te.args), ce = (_[2] || _[1] || "").match(/#(\d+)/);
        if (ce) {
          const $e = P[parseInt(ce[1])];
          if ($e) return k($e);
        }
      }
      if (N === "IFCMATERIALPROFILESETUSAGE") {
        const J = Ut(te.args)[0], ce = Wt(P, J);
        if (ce) return k(ce);
      }
      return {
        b: 0.3,
        h: 0.3,
        name: "Unknown"
      };
    }
    function se(te, N, _, J) {
      const ce = M[te] || [];
      for (const $e of ce) {
        const Te = P[$e];
        if (!Te) continue;
        const Ve = Ut(Te.args), xe = Ve[5] || Ve[4] || "", De = Wt(P, xe);
        if (!De) continue;
        const He = ma(P, De), be = ye(Te);
        let Se = J, ze = null, Je = null;
        const st = Ve[6] || Ve[5] || "", Ue = Wt(P, st);
        if (Ue) {
          const ut = $n(P, Ue);
          ut && (Se = ut.depth || J, ze = ut.origin, Je = ut.direction);
        }
        const at = ze ? ze[0] : He.origin[0], dt = ze ? ze[1] : He.origin[1], yt = ze ? ze[2] : He.origin[2], kt = Je || (_ === "Z" ? He.dirZ : He.dirX), Ct = j(at, dt, yt), ht = j(at + kt[0] * Se, dt + kt[1] * Se, yt + kt[2] * Se);
        H.push({
          id: O++,
          type: "frame",
          nodeIds: [
            Ct,
            ht
          ],
          category: N,
          sectionName: be.name,
          b: be.b,
          h: be.h,
          material: "Hormigon",
          expressID: $e
        });
      }
    }
    se("IFCCOLUMN", "column", "Z", 3), se("IFCBEAM", "beam", "X", 5), se("IFCMEMBER", "diagonal", "X", 4), se("IFCPILE", "pile", "Z", 10), se("IFCSTAIRFLIGHT", "stair", "X", 3), se("IFCRAMPFLIGHT", "ramp", "X", 4);
    function he(te, N, _) {
      const J = M[te] || [];
      for (const ce of J) {
        const $e = P[ce];
        if (!$e) continue;
        const Te = Ut($e.args), Ve = Te[5] || Te[4] || "";
        if (!Wt(P, Ve)) continue;
        let De = _;
        const He = Te[6] || Te[5] || "", be = Wt(P, He);
        be && (De = Yl(P, be) || _);
        const Se = N === "slab" ? `Losa e=${(De * 100).toFixed(0)}cm` : N === "wall" ? `Muro e=${(De * 100).toFixed(0)}cm` : N === "footing" ? `Zapata e=${(De * 100).toFixed(0)}cm` : `${N} e=${(De * 100).toFixed(0)}cm`;
        H.push({
          id: O++,
          type: "shell",
          nodeIds: [],
          category: N,
          sectionName: Se,
          b: De,
          h: De,
          material: "Hormigon",
          expressID: ce
        });
      }
    }
    he("IFCSLAB", "slab", 0.15), he("IFCWALL", "wall", 0.2), he("IFCWALLSTANDARDCASE", "wall", 0.2), he("IFCFOOTING", "footing", 0.5), he("IFCROOF", "slab", 0.12);
    const ue = [], re = M.IFCBUILDINGSTOREY || [];
    for (const te of re) {
      const N = P[te];
      if (!N) continue;
      const _ = Ut(N.args), J = (_[2] || "").replace(/'/g, ""), ce = parseFloat(_[9]) || 0;
      ue.push({
        name: J,
        elevation: ce
      });
    }
    return ue.sort((te, N) => te.elevation - N.elevation), {
      nodes: Y,
      elements: H,
      materials: V,
      levels: ue,
      projectName: b.meta.project,
      schema: b.meta.schema
    };
  }
  function $n(e, b) {
    const P = Ut(b.args);
    for (const M of P) {
      const Y = M.match(/#(\d+)/g) || [];
      for (const H of Y) {
        const V = parseInt(H.replace("#", "")), W = e[V];
        if (W) {
          if (W.type === "IFCEXTRUDEDAREASOLID") {
            const O = Ut(W.args), j = parseFloat(O[3]) || 0, ye = Wt(e, O[1]);
            let k = [
              0,
              0,
              0
            ];
            ye && (k = ua(e, ye).origin);
            const se = Wt(e, O[2]);
            let he = [
              0,
              0,
              1
            ];
            if (se && se.type === "IFCDIRECTION") {
              const ue = se.args.match(/[-+]?\d*\.?\d+(?:[eE][-+]?\d+)?/g);
              ue && ue.length >= 3 && (he = ue.map(Number));
            }
            return {
              depth: j,
              origin: k,
              direction: he
            };
          }
          if (W.type === "IFCSHAPEREPRESENTATION") {
            const O = $n(e, W);
            if (O) return O;
          }
          if (W.type === "IFCMAPPEDITEM") {
            const O = Ut(W.args), j = Wt(e, O[0]);
            if (j && j.type === "IFCREPRESENTATIONMAP") {
              const ye = Ut(j.args), k = Wt(e, ye[1]);
              if (k) {
                const se = $n(e, k);
                if (se) return se;
              }
            }
          }
        }
      }
    }
    return null;
  }
  function Yl(e, b) {
    const P = $n(e, b);
    return P ? P.depth : null;
  }
  const ba = [
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
  ], ga = /* @__PURE__ */ new Map();
  for (const [e, b] of ba) ga.set(e, b);
  function Jl(e) {
    return ga.get(e) ?? "other";
  }
  new Set(ha);
  async function Vl(e, b) {
    var _a, _b;
    const P = window.WebIFC;
    if (!P) throw new Error("web-ifc no disponible. Verifica que web-ifc-api-iife.js se carg\xF3.");
    const M = new P.IfcAPI(), Y = window.location.pathname.replace(/\/[^/]*$/, "/");
    M.SetWasmPath(Y), await M.Init();
    const H = M.OpenModel(new Uint8Array(b)), V = /* @__PURE__ */ new Map(), W = /* @__PURE__ */ new Map(), O = {
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
    for (const [he] of ba) {
      const ue = Jl(he);
      try {
        const re = M.GetLineIDsWithType(H, he);
        for (let te = 0; te < re.size(); te++) {
          const N = re.get(te);
          V.set(N, ue);
          let _ = "";
          try {
            const J = M.GetLine(H, N);
            _ = ((_a = J == null ? void 0 : J.Name) == null ? void 0 : _a.value) || ((_b = J == null ? void 0 : J.Description) == null ? void 0 : _b.value) || "";
          } catch {
          }
          W.set(N, {
            expressID: N,
            category: ue,
            name: _,
            typeName: O[he] || "Otro"
          });
        }
      } catch {
      }
    }
    const j = /* @__PURE__ */ new Map();
    for (const he of ha) {
      const ue = new sn();
      ue.name = `ifc-${he}`, e.add(ue), j.set(he, ue);
    }
    const ye = new Ka();
    let k = 0;
    const se = new Qs({
      color: 13421772,
      transparent: true,
      opacity: 0.9,
      side: ea
    });
    return M.StreamAllMeshes(H, (he) => {
      const ue = V.get(he.expressID) ?? "other", re = j.get(ue), te = he.geometries;
      for (let N = 0; N < te.size(); N++) {
        const _ = te.get(N), J = M.GetGeometry(H, _.geometryExpressID), ce = M.GetVertexArray(J.GetVertexData(), J.GetVertexDataSize()), $e = M.GetIndexArray(J.GetIndexData(), J.GetIndexDataSize()), Te = new to(), Ve = new Float32Array(ce.length / 2), xe = new Float32Array(ce.length / 2);
        for (let ze = 0; ze < ce.length; ze += 6) {
          const Je = ze / 2;
          Ve[Je] = ce[ze], Ve[Je + 1] = ce[ze + 1], Ve[Je + 2] = ce[ze + 2], xe[Je] = ce[ze + 3], xe[Je + 1] = ce[ze + 4], xe[Je + 2] = ce[ze + 5];
        }
        Te.setAttribute("position", new xn(Ve, 3)), Te.setAttribute("normal", new xn(xe, 3)), Te.setIndex(new xn(new Uint32Array($e), 1));
        const De = new Za();
        De.fromArray(_.flatTransformation);
        let He;
        const be = _.color;
        be && (be.x !== 1 || be.y !== 1 || be.z !== 1) ? He = new Qs({
          color: new Qa(be.x, be.y, be.z),
          transparent: be.w < 1,
          opacity: be.w,
          side: ea
        }) : He = se, He._origOpacity = He.opacity;
        const Se = new ca(Te, He);
        Se.applyMatrix4(De), Se.userData.expressID = he.expressID, Se.userData.category = ue, re.add(Se), ye.expandByObject(Se), k++, J.delete();
      }
    }), M.CloseModel(H), {
      meshCount: k,
      bbox: ye,
      detailCategories: j,
      elementInfo: W
    };
  }
  ia = Jo.state(false);
  or = function(e) {
    e.nodeInputs || (e.nodeInputs = Jo.state({})), e.elementInputs || (e.elementInputs = Jo.state({})), e.deformOutputs || (e.deformOutputs = Jo.state({})), e.analyzeOutputs || (e.analyzeOutputs = Jo.state({}));
    let b = "tonf", P = "m", M = Fo(b, P), Y = {
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
    }, V = /* @__PURE__ */ new Set(), W = /* @__PURE__ */ new Set();
    let O = false;
    const j = /* @__PURE__ */ new Set(), ye = /* @__PURE__ */ new Map();
    let k = "", se = {}, he = null, ue = "", re = [], te = [], N = [], _ = /* @__PURE__ */ new Set(), J = /* @__PURE__ */ new Set(), ce = /* @__PURE__ */ new Set(), $e = /* @__PURE__ */ new Map(), Te = /* @__PURE__ */ new Map(), Ve = null, xe = [], De = 0.2, He = 2, be = 2, Se = false, ze = 2, Je = "x", st = /* @__PURE__ */ new Set(), Ue = true, at = 0.15, dt = 2, yt = 2, kt = /* @__PURE__ */ new Set(), Ct = false, ht = "perimeter";
    const ut = () => ({
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
    }), ro = (t, o) => ({
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
      }, ut),
      vigasY: Array.from({
        length: o
      }, ut)
    }), Ne = {
      colMat: 0,
      vigaMat: 0,
      colShape: 0,
      fc: 20594,
      steelColType: 0,
      steelVigaType: 0,
      perFloor: []
    };
    let xt = 0, Le = 3, qe = false, ve = 0, Ce = null, ge = 0, ke = [], Ge = 1, _e = true;
    const it = ml();
    it.div.style.display = "none";
    function mt() {
      const t = un()[k];
      return t && t[xt] ? t[xt].dofs : [
        true,
        true,
        true,
        true,
        true,
        true
      ];
    }
    let We = [], Xe = [], pt = 0, lt = [], bt = null;
    function Ht() {
      if (!bt) return;
      const t = et();
      t && t.scene.remove(bt), bt.traverse((o) => {
        if (o.geometry && o.geometry.dispose(), o.material) {
          const n = o.material;
          n.map && n.map.dispose(), n.dispose();
        }
      }), bt = null;
    }
    function ss(t, o, n, l, a) {
      Ht();
      const p = et();
      if (!p) return;
      bt = new sn(), bt.name = "refGrid";
      const s = Math.min(...t), r = Math.max(...t), f = Math.min(...o), c = Math.max(...o), d = Math.max(...n), m = r - s || 1, E = c - f || 1, w = 3359829, v = 2241348;
      for (const h of n) {
        for (const I of o) {
          const z = new to().setFromPoints([
            new Oe(s, h, I),
            new Oe(r, h, I)
          ]), T = new jo({
            color: w,
            dashSize: m * 0.015,
            gapSize: m * 0.01,
            transparent: true,
            opacity: 0.25
          }), B = new Lo(z, T);
          B.computeLineDistances(), B.renderOrder = -10, bt.add(B);
        }
        for (const I of t) {
          const z = new to().setFromPoints([
            new Oe(I, h, f),
            new Oe(I, h, c)
          ]), T = new jo({
            color: w,
            dashSize: E * 0.015,
            gapSize: E * 0.01,
            transparent: true,
            opacity: 0.25
          }), B = new Lo(z, T);
          B.computeLineDistances(), B.renderOrder = -10, bt.add(B);
        }
      }
      for (const h of t) for (const I of o) {
        const z = new to().setFromPoints([
          new Oe(h, 0, I),
          new Oe(h, d, I)
        ]), T = new jo({
          color: v,
          dashSize: d * 0.01,
          gapSize: d * 8e-3,
          transparent: true,
          opacity: 0.15
        }), B = new Lo(z, T);
        B.computeLineDistances(), B.renderOrder = -10, bt.add(B);
      }
      const u = Math.min(m, E) * 0.015;
      for (const h of n) for (const I of t) for (const z of o) {
        const T = [
          new Oe(I - u, h, z),
          new Oe(I + u, h, z),
          new Oe(I, h, z - u),
          new Oe(I, h, z + u)
        ], B = new to().setFromPoints(T), D = new Go({
          color: 5596791,
          transparent: true,
          opacity: 0.4
        }), x = new Wo(B, D);
        x.renderOrder = -5, bt.add(x);
      }
      bt.traverse((h) => {
        h.material && (Array.isArray(h.material) ? h.material.forEach((I) => {
          I.clippingPlanes = [];
        }) : h.material.clippingPlanes = []);
      }), p.scene.add(bt), p.render();
    }
    let Rt = null;
    function as() {
      if (!Rt) return;
      const t = et();
      t && t.scene.remove(Rt), Rt.traverse((o) => {
        if (o.geometry && o.geometry.dispose(), o.material) {
          const n = o.material;
          n.map && n.map.dispose(), n.dispose();
        }
      }), Rt = null;
    }
    function Xo(t, o, n, l, a) {
      as();
      const p = et();
      if (!p) return;
      Rt = new sn(), Rt.name = "gridAxes";
      const s = Math.min(...t), r = Math.max(...t), f = Math.min(...o), c = Math.max(...o), d = r - s || 1, m = c - f || 1, E = Math.max(d, m), w = E * 0.08, v = l || t.map((x, i) => String.fromCharCode(65 + i)), u = a || o.map((x, i) => String(i + 1)), h = E * 0.018, I = o.length <= 1, z = 8947848;
      for (let x = 0; x < t.length; x++) {
        const i = t[x];
        if (I) {
          const $ = -w - h * 1.5;
          In(i, 0, 0, i, 0, $ + h, z, Rt), kn(v[x] || `${x}`, i, 0, $, h, Rt);
        } else {
          const $ = f - w - h * 1.5;
          In(i, f, 0, i, $ + h, 0, z, Rt), kn(v[x] || `${x}`, i, $, 0, h, Rt);
        }
      }
      if (!I) for (let x = 0; x < o.length; x++) {
        const i = o[x], $ = s - w - h * 1.5;
        In(s, i, 0, $ + h, i, 0, z, Rt), kn(u[x] || `${x}`, $, i, 0, h, Rt);
      }
      const T = h * 1.8, B = w * 1.2, D = w * 1.2;
      for (let x = 0; x < t.length - 1; x++) {
        const i = t[x], $ = t[x + 1], A = Math.abs($ - i), F = (i + $) / 2, G = `${A.toFixed(2)} m`;
        I ? (Sn(G, F, 0, -B, T, Rt), En(i, 0, -B * 0.7, $, 0, -B * 0.7, 16763904, Rt)) : (Sn(G, F, f - D, 0, T, Rt), En(i, f - D * 0.7, 0, $, f - D * 0.7, 0, 16763904, Rt));
      }
      if (!I) for (let x = 0; x < o.length - 1; x++) {
        const i = o[x], $ = o[x + 1], A = Math.abs($ - i), F = (i + $) / 2, G = `${A.toFixed(2)} m`;
        Sn(G, s - B, F, 0, T, Rt), En(s - B * 0.7, i, 0, s - B * 0.7, $, 0, 16763904, Rt);
      }
      Rt.traverse((x) => {
        x.material && (Array.isArray(x.material) ? x.material.forEach((i) => {
          i.clippingPlanes = [];
        }) : x.material.clippingPlanes = []);
      }), p.scene.add(Rt), p.render();
    }
    let Gt = null;
    function ls() {
      if (!Gt) return;
      const t = et();
      t && t.scene.remove(Gt), Gt.traverse((o) => {
        if (o.geometry && o.geometry.dispose(), o.material) {
          const n = o.material;
          n.map && n.map.dispose(), n.dispose();
        }
      }), Gt = null;
    }
    function wn(t, o, n) {
      if (ls(), t.length === 0) return;
      const l = et();
      if (!l) return;
      Gt = new sn(), Gt.name = "storyLevels";
      const a = Math.min(...o), p = Math.max(...o), s = Math.min(...n), r = Math.max(...n), f = p - a || 1, c = r - s || 1, d = Math.max(f, c), m = d * 0.06, E = n.length <= 1, w = 4491519, v = d * 0.015;
      for (const u of t) {
        const h = u.elev;
        E ? (Ko(a - m, 0, h, p + m, 0, h, w, Gt), rs(u.name, p + m * 1.5, 0, h, v, Gt)) : (Ko(a, s, h, p, s, h, w, Gt), Ko(p, s, h, p, r, h, w, Gt), Ko(p, r, h, a, r, h, w, Gt), Ko(a, r, h, a, s, h, w, Gt), rs(u.name, a - m * 1.5, s, h, v, Gt));
      }
      Gt.traverse((u) => {
        u.material && (Array.isArray(u.material) ? u.material.forEach((h) => {
          h.clippingPlanes = [];
        }) : u.material.clippingPlanes = []);
      }), l.scene.add(Gt), l.render();
    }
    function Ko(t, o, n, l, a, p, s, r) {
      const f = Math.sqrt((l - t) ** 2 + (a - o) ** 2 + (p - n) ** 2) || 1, c = new to().setFromPoints([
        new Oe(t, o, n),
        new Oe(l, a, p)
      ]), d = new jo({
        color: s,
        dashSize: f * 0.02,
        gapSize: f * 0.01,
        transparent: true,
        opacity: 0.5
      }), m = new Lo(c, d);
      m.computeLineDistances(), m.renderOrder = 50, r.add(m);
    }
    function rs(t, o, n, l, a, p) {
      const s = document.createElement("canvas"), r = 512, f = 64;
      s.width = r, s.height = f;
      const c = s.getContext("2d");
      c.fillStyle = "rgba(30,60,120,0.8)";
      const d = 8;
      c.beginPath(), c.moveTo(d, 0), c.lineTo(r - d, 0), c.quadraticCurveTo(r, 0, r, d), c.lineTo(r, f - d), c.quadraticCurveTo(r, f, r - d, f), c.lineTo(d, f), c.quadraticCurveTo(0, f, 0, f - d), c.lineTo(0, d), c.quadraticCurveTo(0, 0, d, 0), c.closePath(), c.fill(), c.fillStyle = "#88bbff", c.font = "bold 38px monospace", c.textAlign = "center", c.textBaseline = "middle", c.fillText(t, r / 2, f / 2);
      const m = new Vn(s);
      m.needsUpdate = true;
      const E = new fn({
        map: m,
        depthTest: false,
        transparent: true
      }), w = new pn(E);
      w.position.set(o, n, l), w.scale.set(a * 8, a, 1), w.renderOrder = 101, p.add(w);
    }
    function Sn(t, o, n, l, a, p) {
      const s = document.createElement("canvas"), r = 256, f = 64;
      s.width = r, s.height = f;
      const c = s.getContext("2d");
      c.fillStyle = "rgba(0,0,0,0.75)";
      const d = 8;
      c.beginPath(), c.moveTo(d, 0), c.lineTo(r - d, 0), c.quadraticCurveTo(r, 0, r, d), c.lineTo(r, f - d), c.quadraticCurveTo(r, f, r - d, f), c.lineTo(d, f), c.quadraticCurveTo(0, f, 0, f - d), c.lineTo(0, d), c.quadraticCurveTo(0, 0, d, 0), c.closePath(), c.fill(), c.fillStyle = "#ffcc00", c.font = "bold 36px monospace", c.textAlign = "center", c.textBaseline = "middle", c.fillText(t, r / 2, f / 2);
      const m = new al(s);
      m.minFilter = ll;
      const E = new fn({
        map: m,
        transparent: true,
        depthTest: false
      }), w = new pn(E);
      w.position.set(o, n, l);
      const v = r / f;
      w.scale.set(a * v, a, 1), w.renderOrder = 999, p.add(w);
    }
    function En(t, o, n, l, a, p, s, r) {
      const f = [
        new Oe(t, o, n),
        new Oe(l, a, p)
      ], c = new to().setFromPoints(f), d = new Go({
        color: s,
        transparent: true,
        opacity: 0.6,
        depthTest: false
      }), m = new Lo(c, d);
      m.renderOrder = 998, r.add(m);
    }
    function In(t, o, n, l, a, p, s, r) {
      const f = new to().setFromPoints([
        new Oe(t, o, n),
        new Oe(l, a, p)
      ]), c = new jo({
        color: s,
        dashSize: 0.15 * Math.max(Math.abs(l - t), Math.abs(a - o), Math.abs(p - n), 0.1),
        gapSize: 0.1 * Math.max(Math.abs(l - t), Math.abs(a - o), Math.abs(p - n), 0.1),
        transparent: true,
        opacity: 0.6
      }), d = new Lo(f, c);
      d.computeLineDistances(), r.add(d);
    }
    function kn(t, o, n, l, a, p) {
      const s = document.createElement("canvas"), r = 128;
      s.width = r, s.height = r;
      const f = s.getContext("2d");
      f.beginPath(), f.arc(r / 2, r / 2, r * 0.42, 0, Math.PI * 2), f.fillStyle = "rgba(255,255,255,0.9)", f.fill(), f.lineWidth = r * 0.04, f.strokeStyle = "#555", f.stroke(), f.fillStyle = "#222", f.font = `bold ${r * 0.45}px Arial`, f.textAlign = "center", f.textBaseline = "middle", f.fillText(t, r / 2, r / 2 + r * 0.02);
      const c = new Vn(s);
      c.needsUpdate = true;
      const d = new fn({
        map: c,
        depthTest: false,
        transparent: true
      }), m = new pn(d);
      m.position.set(o, n, l);
      const E = a * 2;
      m.scale.set(E, E, 1), m.renderOrder = 100, p.add(m);
    }
    const Ke = {
      addNode(t, o, n) {
        const l = [
          ...e.nodes.val
        ], a = l.length;
        return l.push([
          t,
          o,
          n
        ]), e.nodes.val = l, console.log(`Node ${a} at (${t}, ${o}, ${n})`), Ze(), a;
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
          const p = l > t ? l - 1 : l, s = a > t ? a - 1 : a;
          return l === t || a === t ? null : [
            p,
            s
          ];
        }).filter((l) => l !== null);
        e.nodes.val = o, e.elements.val = n, console.log(`Node ${t} removed`), Ze();
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
        ]), e.elements.val = n, console.log(`Element ${l}: node ${t} -> node ${o}`), Ze(), l;
      },
      removeFrame(t) {
        const o = [
          ...e.elements.val
        ];
        if (t < 0 || t >= o.length) {
          console.error(`Element ${t} not found`);
          return;
        }
        o.splice(t, 1), e.elements.val = o, console.log(`Element ${t} removed`), Ze();
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
        ]), n.supports = l, e.nodeInputs.val = n, console.log(`Support added at node ${t}`), Ze();
      },
      removeSupport(t) {
        if (!e.nodeInputs) return;
        const o = {
          ...e.nodeInputs.val
        }, n = new Map(o.supports || []);
        n.delete(t), o.supports = n, e.nodeInputs.val = o, console.log(`Support removed from node ${t}`), Ze();
      },
      addLoad(t, o) {
        if (!e.nodeInputs) return;
        const n = {
          ...e.nodeInputs.val
        }, l = new Map(n.loads || []);
        l.set(t, o), n.loads = l, e.nodeInputs.val = n, console.log(`Load added at node ${t}: [${o.join(", ")}]`), Ze();
      },
      removeLoad(t) {
        if (!e.nodeInputs) return;
        const o = {
          ...e.nodeInputs.val
        }, n = new Map(o.loads || []);
        n.delete(t), o.loads = n, e.nodeInputs.val = o, console.log(`Load removed from node ${t}`), Ze();
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
      set(t, o) {
        var _a2, _b, _c, _d;
        const n = Ae.querySelectorAll("input[type=checkbox]");
        for (const l of n) {
          const a = ((_b = (_a2 = l.closest("label")) == null ? void 0 : _a2.textContent) == null ? void 0 : _b.trim()) || ((_d = (_c = l.parentElement) == null ? void 0 : _c.textContent) == null ? void 0 : _d.trim()) || "", p = l.id || "";
          if (a.toLowerCase().includes(t.toLowerCase()) || p.toLowerCase().includes(t.toLowerCase())) {
            const s = l;
            return s.checked = o !== void 0 ? o : !s.checked, s.dispatchEvent(new Event("change", {
              bubbles: true
            })), console.log(`${a || p}: ${s.checked}`), s.checked;
          }
        }
        console.log(`Setting "${t}" not found. Use cad.settings() to list.`);
      },
      settings() {
        const t = Ae.querySelectorAll("input[type=checkbox]"), o = {};
        return t.forEach((n) => {
          var _a2, _b, _c, _d;
          const l = n, a = ((_b = (_a2 = l.closest("label")) == null ? void 0 : _a2.textContent) == null ? void 0 : _b.trim()) || ((_d = (_c = l.parentElement) == null ? void 0 : _c.textContent) == null ? void 0 : _d.trim()) || l.id || "?";
          o[a] = l.checked;
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
          Ht(), console.log("Reference grid cleared");
          return;
        }
        const l = [
          0
        ];
        for (const s of t) l.push(l[l.length - 1] + s);
        const a = [
          0
        ];
        for (const s of o || [
          0
        ]) a.push(a[a.length - 1] + s);
        const p = [
          0
        ];
        for (const s of n || [
          3
        ]) p.push(p[p.length - 1] + s);
        ss(l, a, p), We = l.map((s, r) => ({
          label: String.fromCharCode(65 + r),
          coord: s
        })), Xe = a.map((s, r) => ({
          label: `${r + 1}`,
          coord: s
        })), pt = p[p.length - 1], lt = p.map((s, r) => ({
          label: r === 0 ? "Base" : `P${r}`,
          elev: s
        })), Xo(We.map((s) => s.coord), Xe.map((s) => s.coord), pt, We.map((s) => s.label), Xe.map((s) => s.label));
        {
          const s = p.map((r, f) => ({
            name: f === 0 ? "Base" : `P${f}`,
            height: f > 0 ? r - p[f - 1] : 0,
            elev: r
          }));
          wn(s, We.map((r) => r.coord), Xe.map((r) => r.coord));
        }
        return console.log(`RefGrid: X=[${l}] Z=[${a}] Y=[${p}]`), {
          xCoords: l,
          zCoords: a,
          yLevels: p
        };
      },
      build(t) {
        var _a2;
        if (We.length === 0 || lt.length < 2) {
          console.log("Error: call cad.refgrid() first to define axes and levels");
          return;
        }
        const o = (t == null ? void 0 : t.col) || "40x40", n = (t == null ? void 0 : t.viga) || "30x40", l = (t == null ? void 0 : t.fc) || 210, [a, p] = o.split("x").map((q) => parseFloat(q) / 100), [s, r] = n.split("x").map((q) => parseFloat(q) / 100), f = We.map((q) => q.coord), c = Xe.map((q) => q.coord), d = lt.map((q) => q.elev), m = f.length, E = c.length, w = d.length, v = w - 1, u = [], h = {};
        for (let q = 0; q < w; q++) for (let fe = 0; fe < E; fe++) for (let oe = 0; oe < m; oe++) h[`${oe},${fe},${q}`] = u.length, u.push([
          f[oe],
          c[fe],
          d[q]
        ]);
        const I = [], z = /* @__PURE__ */ new Set(), T = /* @__PURE__ */ new Set(), B = /* @__PURE__ */ new Map();
        for (let q = 0; q < v; q++) for (let fe = 0; fe < E; fe++) for (let oe = 0; oe < m; oe++) {
          const pe = I.length;
          I.push([
            h[`${oe},${fe},${q}`],
            h[`${oe},${fe},${q + 1}`]
          ]), z.add(pe), B.set(pe, q);
        }
        for (let q = 1; q < w; q++) for (let fe = 0; fe < E; fe++) for (let oe = 0; oe < m - 1; oe++) {
          const pe = I.length;
          I.push([
            h[`${oe},${fe},${q}`],
            h[`${oe + 1},${fe},${q}`]
          ]), T.add(pe), B.set(pe, q - 1);
        }
        for (let q = 1; q < w; q++) for (let fe = 0; fe < m; fe++) for (let oe = 0; oe < E - 1; oe++) {
          const pe = I.length;
          I.push([
            h[`${fe},${oe},${q}`],
            h[`${fe},${oe + 1},${q}`]
          ]), T.add(pe), B.set(pe, q - 1);
        }
        const D = ((_a2 = t == null ? void 0 : t.braces) == null ? void 0 : _a2.toLowerCase()) || "", x = /* @__PURE__ */ new Set();
        if (D) {
          const q = D === "all" || D === "x" || D === "perimeter", fe = D === "all" || D === "y" || D === "perimeter";
          for (let oe = 0; oe < v; oe++) {
            if (q) for (let pe = 0; pe < E; pe++) {
              if (D === "perimeter" && pe !== 0 && pe !== E - 1) continue;
              const Q = Math.floor((m - 1) / 2);
              for (let me = 0; me < m - 1; me++) {
                if (D === "perimeter" && me !== Q) continue;
                const we = I.length;
                I.push([
                  h[`${me},${pe},${oe}`],
                  h[`${me + 1},${pe},${oe + 1}`]
                ]), x.add(we), B.set(we, oe);
                const ne = I.length;
                I.push([
                  h[`${me + 1},${pe},${oe}`],
                  h[`${me},${pe},${oe + 1}`]
                ]), x.add(ne), B.set(ne, oe);
              }
            }
            if (fe) for (let pe = 0; pe < m; pe++) {
              if (D === "perimeter" && pe !== 0 && pe !== m - 1) continue;
              const Q = Math.floor((E - 1) / 2);
              for (let me = 0; me < E - 1; me++) {
                if (D === "perimeter" && me !== Q) continue;
                const we = I.length;
                I.push([
                  h[`${pe},${me},${oe}`],
                  h[`${pe},${me + 1},${oe + 1}`]
                ]), x.add(we), B.set(we, oe);
                const ne = I.length;
                I.push([
                  h[`${pe},${me + 1},${oe}`],
                  h[`${pe},${me},${oe + 1}`]
                ]), x.add(ne), B.set(ne, oe);
              }
            }
          }
        }
        const i = 15100 * Math.sqrt(l) * 10, $ = i / (2 * (1 + 0.2)), A = a * p, F = a * p ** 3 / 12, G = p * a ** 3 / 12, g = a * p * (a ** 2 + p ** 2) / 12, S = s * r, y = s * r ** 3 / 12, C = r * s ** 3 / 12, X = s * r * (s ** 2 + r ** 2) / 12, U = /* @__PURE__ */ new Map(), ae = /* @__PURE__ */ new Map(), Z = /* @__PURE__ */ new Map(), K = /* @__PURE__ */ new Map(), de = /* @__PURE__ */ new Map(), ie = /* @__PURE__ */ new Map(), Ie = /* @__PURE__ */ new Map();
        for (let q = 0; q < I.length; q++) U.set(q, i), ae.set(q, $), z.has(q) ? (Z.set(q, A), K.set(q, F), de.set(q, G), ie.set(q, g), Ie.set(q, {
          type: "rect",
          b: a,
          h: p,
          name: `COL${o}`
        })) : x.has(q) ? (Z.set(q, A), K.set(q, F), de.set(q, G), ie.set(q, g), Ie.set(q, {
          type: "rect",
          b: a,
          h: p,
          name: `BR${o}`
        })) : (Z.set(q, S), K.set(q, y), de.set(q, C), ie.set(q, X), Ie.set(q, {
          type: "rect",
          b: s,
          h: r,
          name: `V${n}`
        }));
        const Re = /* @__PURE__ */ new Map();
        for (let q = 0; q < E; q++) for (let fe = 0; fe < m; fe++) Re.set(h[`${fe},${q},0`], [
          true,
          true,
          true,
          true,
          true,
          true
        ]);
        return e.nodes.val = u, e.elements.val = I, e.nodeInputs.val = {
          supports: Re,
          loads: /* @__PURE__ */ new Map()
        }, e.elementInputs.val = {
          elasticities: U,
          shearModuli: ae,
          areas: Z,
          momentsOfInertiaZ: K,
          momentsOfInertiaY: de,
          torsionalConstants: ie,
          sectionShapes: Ie
        }, _ = z, J = T, $e = B, console.log(`Built: ${u.length} nodes, ${I.length} elements (${z.size} cols, ${T.size} beams, ${x.size} braces)`), console.log(`  Col: ${o}, Viga: ${n}, f'c=${l}${D ? `, braces=${D}` : ""}`), {
          nodes: u.length,
          elements: I.length
        };
      },
      addCol(t, o, n) {
        var _a2, _b, _c, _d, _e2, _f;
        const l = We.findIndex((v) => v.label === t), a = Xe.findIndex((v) => v.label === o);
        if (l < 0) {
          console.log(`Axis "${t}" not found. Available: ${We.map((v) => v.label)}`);
          return;
        }
        if (a < 0) {
          console.log(`Axis "${o}" not found. Available: ${Xe.map((v) => v.label)}`);
          return;
        }
        const p = We[l].coord, s = Xe[a].coord, r = [
          ...e.nodes.val
        ], f = [
          ...((_a2 = e.elements) == null ? void 0 : _a2.val) || []
        ];
        (_b = e.elementInputs) == null ? void 0 : _b.val;
        const c = (v) => {
          const u = r.findIndex((h) => Math.abs(h[0] - p) < 1e-3 && Math.abs(h[1] - s) < 1e-3 && Math.abs(h[2] - v) < 1e-3);
          return u >= 0 ? u : (r.push([
            p,
            s,
            v
          ]), r.length - 1);
        }, d = n ? [
          lt.findIndex((v) => v.label === n)
        ] : Array.from({
          length: lt.length - 1
        }, (v, u) => u + 1), m = new Map(((_d = (_c = e.nodeInputs) == null ? void 0 : _c.val) == null ? void 0 : _d.supports) || []), E = c(lt[0].elev);
        m.has(E) || m.set(E, [
          true,
          true,
          true,
          true,
          true,
          true
        ]);
        let w = 0;
        for (const v of d) {
          if (v < 1 || v >= lt.length) continue;
          const u = c(lt[v - 1].elev), h = c(lt[v].elev);
          f.push([
            u,
            h
          ]), _.add(f.length - 1), $e.set(f.length - 1, v - 1), w++;
        }
        return e.nodes.val = r, e.elements.val = f, e.nodeInputs.val = {
          ...e.nodeInputs.val,
          supports: m,
          loads: ((_f = (_e2 = e.nodeInputs) == null ? void 0 : _e2.val) == null ? void 0 : _f.loads) || /* @__PURE__ */ new Map()
        }, console.log(`Added ${w} column(s) at ${t}-${o}${n ? ` story ${n}` : ""}`), w;
      },
      addBeam(t, o, n, l, a) {
        var _a2;
        const p = We.findIndex((B) => B.label === t), s = Xe.findIndex((B) => B.label === o), r = We.findIndex((B) => B.label === n), f = Xe.findIndex((B) => B.label === l), c = lt.findIndex((B) => B.label === a);
        if (p < 0 || s < 0 || r < 0 || f < 0) {
          console.log("Axis not found");
          return;
        }
        if (c < 1) {
          console.log(`Story "${a}" not found. Available: ${lt.filter((B) => B.label !== "Base").map((B) => B.label)}`);
          return;
        }
        const d = We[p].coord, m = Xe[s].coord, E = We[r].coord, w = Xe[f].coord, v = lt[c].elev, u = [
          ...e.nodes.val
        ], h = [
          ...((_a2 = e.elements) == null ? void 0 : _a2.val) || []
        ], I = (B, D, x) => {
          const i = u.findIndex(($) => Math.abs($[0] - B) < 1e-3 && Math.abs($[1] - D) < 1e-3 && Math.abs($[2] - x) < 1e-3);
          return i >= 0 ? i : (u.push([
            B,
            D,
            x
          ]), u.length - 1);
        }, z = I(d, m, v), T = I(E, w, v);
        return h.push([
          z,
          T
        ]), J.add(h.length - 1), $e.set(h.length - 1, c - 1), e.nodes.val = u, e.elements.val = h, console.log(`Added beam ${t}-${o} \u2192 ${n}-${l} at ${a}`), h.length - 1;
      },
      addBrace(t, o, n, l, a, p) {
        var _a2;
        const s = We.findIndex((i) => i.label === t), r = Xe.findIndex((i) => i.label === o), f = lt.findIndex((i) => i.label === n), c = We.findIndex((i) => i.label === l), d = Xe.findIndex((i) => i.label === a), m = lt.findIndex((i) => i.label === p);
        if (s < 0 || r < 0 || f < 0) {
          console.log(`Point 1 not found: ${t}-${o}@${n}`);
          return;
        }
        if (c < 0 || d < 0 || m < 0) {
          console.log(`Point 2 not found: ${l}-${a}@${p}`);
          return;
        }
        const E = We[s].coord, w = Xe[r].coord, v = lt[f].elev, u = We[c].coord, h = Xe[d].coord, I = lt[m].elev, z = [
          ...e.nodes.val
        ], T = [
          ...((_a2 = e.elements) == null ? void 0 : _a2.val) || []
        ], B = (i, $, A) => {
          const F = z.findIndex((G) => Math.abs(G[0] - i) < 1e-3 && Math.abs(G[1] - $) < 1e-3 && Math.abs(G[2] - A) < 1e-3);
          return F >= 0 ? F : (z.push([
            i,
            $,
            A
          ]), z.length - 1);
        }, D = B(E, w, v), x = B(u, h, I);
        return T.push([
          D,
          x
        ]), $e.set(T.length - 1, Math.min(f, m)), e.nodes.val = z, e.elements.val = T, console.log(`Added brace ${t}-${o}@${n} \u2192 ${l}-${a}@${p}`), T.length - 1;
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
        Ke.clear();
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
        ], a = (t == null ? void 0 : t.col) || "40x40", p = (t == null ? void 0 : t.viga) || "30x40", s = (t == null ? void 0 : t.fc) || 210, [r, f] = a.split("x").map((Q) => parseFloat(Q) / 100), [c, d] = p.split("x").map((Q) => parseFloat(Q) / 100), m = [
          0
        ];
        for (const Q of o) m.push(m[m.length - 1] + Q);
        const E = [
          0
        ];
        for (const Q of n) E.push(E[E.length - 1] + Q);
        const w = [
          0
        ];
        for (const Q of l) w.push(w[w.length - 1] + Q);
        const v = m.length, u = E.length, h = w.length, I = l.length, z = [], T = {};
        for (let Q = 0; Q < h; Q++) for (let me = 0; me < u; me++) for (let we = 0; we < v; we++) T[`${we},${Q},${me}`] = z.length, z.push([
          m[we],
          w[Q],
          E[me]
        ]);
        const B = [], D = /* @__PURE__ */ new Set(), x = /* @__PURE__ */ new Set(), i = /* @__PURE__ */ new Map();
        for (let Q = 0; Q < I; Q++) for (let me = 0; me < u; me++) for (let we = 0; we < v; we++) {
          const ne = B.length;
          B.push([
            T[`${we},${Q},${me}`],
            T[`${we},${Q + 1},${me}`]
          ]), D.add(ne), i.set(ne, Q);
        }
        for (let Q = 1; Q < h; Q++) for (let me = 0; me < u; me++) for (let we = 0; we < v - 1; we++) {
          const ne = B.length;
          B.push([
            T[`${we},${Q},${me}`],
            T[`${we + 1},${Q},${me}`]
          ]), x.add(ne), i.set(ne, Q - 1);
        }
        for (let Q = 1; Q < h; Q++) for (let me = 0; me < v; me++) for (let we = 0; we < u - 1; we++) {
          const ne = B.length;
          B.push([
            T[`${me},${Q},${we}`],
            T[`${me},${Q},${we + 1}`]
          ]), x.add(ne), i.set(ne, Q - 1);
        }
        const A = 15100 * Math.sqrt(s) * 10, F = A / (2 * (1 + 0.2)), G = r * f, g = r * f ** 3 / 12, S = f * r ** 3 / 12, y = r * f * (r ** 2 + f ** 2) / 12, C = c * d, X = c * d ** 3 / 12, U = d * c ** 3 / 12, ae = c * d * (c ** 2 + d ** 2) / 12, Z = /* @__PURE__ */ new Map(), K = /* @__PURE__ */ new Map(), de = /* @__PURE__ */ new Map(), ie = /* @__PURE__ */ new Map(), Ie = /* @__PURE__ */ new Map(), Re = /* @__PURE__ */ new Map(), q = /* @__PURE__ */ new Map();
        for (let Q = 0; Q < B.length; Q++) Z.set(Q, A), K.set(Q, F), D.has(Q) ? (de.set(Q, G), ie.set(Q, g), Ie.set(Q, S), Re.set(Q, y), q.set(Q, {
          type: "rect",
          b: r,
          h: f,
          name: `COL${a}`
        })) : (de.set(Q, C), ie.set(Q, X), Ie.set(Q, U), Re.set(Q, ae), q.set(Q, {
          type: "rect",
          b: c,
          h: d,
          name: `V${p}`
        }));
        const fe = /* @__PURE__ */ new Map();
        for (let Q = 0; Q < u; Q++) for (let me = 0; me < v; me++) fe.set(T[`${me},0,${Q}`], [
          true,
          true,
          true,
          true,
          true,
          true
        ]);
        e.nodes.val = z, e.elements.val = B, e.nodeInputs.val = {
          supports: fe,
          loads: /* @__PURE__ */ new Map()
        }, e.elementInputs.val = {
          elasticities: Z,
          shearModuli: K,
          areas: de,
          momentsOfInertiaZ: ie,
          momentsOfInertiaY: Ie,
          torsionalConstants: Re,
          sectionShapes: q
        }, _ = D, J = x, $e = i, We = m.map((Q, me) => ({
          label: String.fromCharCode(65 + me),
          coord: Q
        })), Xe = E.map((Q, me) => ({
          label: `${me + 1}`,
          coord: Q
        })), pt = w[w.length - 1], Xo(We.map((Q) => Q.coord), Xe.map((Q) => Q.coord), pt, We.map((Q) => Q.label), Xe.map((Q) => Q.label));
        {
          const Q = w.map((me, we) => ({
            name: we === 0 ? "Base" : `P${we}`,
            height: we > 0 ? me - w[we - 1] : 0,
            elev: me
          }));
          wn(Q, m, E);
        }
        const oe = Ae.querySelector("#cad3d-axis-buttons");
        if (oe) {
          oe.style.display = "flex";
          const Q = We.map((we) => we.label), me = Xe.map((we) => we.label);
          oe.innerHTML = '<span style="font-size:10px;color:var(--cad-heading);margin-right:4px">Ejes:</span>';
          for (const we of Q) oe.innerHTML += `<button class="axis-btn" data-axis="x" data-label="${we}">${we}</button>`;
          oe.innerHTML += '<span style="margin:0 2px">|</span>';
          for (const we of me) oe.innerHTML += `<button class="axis-btn" data-axis="y" data-label="${we}">${we}</button>`;
        }
        const pe = Ae.querySelector("#cad3d-floor-buttons");
        if (pe) {
          pe.style.display = "flex", pe.innerHTML = '<span style="font-size:10px;color:var(--cad-heading);margin-right:4px">Planta:</span>';
          for (let Q = 0; Q < I; Q++) pe.innerHTML += `<button class="floor-btn" data-floor="${Q}">P${Q + 1}</button>`;
        }
        return ss(m, E, w), Ze(), console.log(`Model3D: ${z.length}n ${B.length}e | ${v}x${u} grid, ${I} floors | COL${a} V${p} f'c=${s}`), {
          nodes: z.length,
          elements: B.length,
          columns: D.size,
          beams: x.size
        };
      },
      clear() {
        e.nodes.val = [], e.elements.val = [], e.nodeInputs && (e.nodeInputs.val = {}), e.elementInputs && (e.elementInputs.val = {}), _ = /* @__PURE__ */ new Set(), J = /* @__PURE__ */ new Set(), $e = /* @__PURE__ */ new Map(), Te = /* @__PURE__ */ new Map(), We = [], Xe = [], pt = 0, as(), ls(), Ht();
        const t = Ae.querySelector("#cad3d-axis-buttons");
        t && (t.style.display = "none", t.innerHTML = ""), console.log("Model cleared"), Ze();
      },
      frame(t, o, n = 0, l = 0) {
        Ke.clear();
        const a = [];
        n > 0 && a.push(-n);
        let p = 0;
        a.push(p);
        for (const v of t) p += v, a.push(p);
        l > 0 && a.push(p + l);
        const s = [
          0
        ];
        let r = 0;
        for (const v of o) r += v, s.push(r);
        const f = (v) => n > 0 && v === 0 || l > 0 && v === a.length - 1, c = {}, d = [];
        for (let v = 0; v < s.length; v++) for (let u = 0; u < a.length; u++) v === 0 && f(u) || (c[`${u},${v}`] = d.length, d.push([
          a[u],
          0,
          s[v]
        ]));
        const m = [];
        _ = /* @__PURE__ */ new Set(), J = /* @__PURE__ */ new Set();
        for (let v = 0; v < s.length - 1; v++) for (let u = 0; u < a.length; u++) f(u) || (_.add(m.length), m.push([
          c[`${u},${v}`],
          c[`${u},${v + 1}`]
        ]));
        for (let v = 1; v < s.length; v++) for (let u = 0; u < a.length - 1; u++) J.add(m.length), m.push([
          c[`${u},${v}`],
          c[`${u + 1},${v}`]
        ]);
        const E = /* @__PURE__ */ new Map(), w = mt();
        for (let v = 0; v < a.length; v++) {
          if (f(v)) continue;
          const u = `${v},0`;
          c[u] !== void 0 && E.set(c[u], [
            ...w
          ]);
        }
        return e.nodes.val = d, e.elements.val = m, e.nodeInputs && (e.nodeInputs.val = {
          supports: E
        }), We = [
          ...a
        ], Xe = [
          0
        ], pt = s[s.length - 1] || 0, setTimeout(() => {
          It(), Xo(a, [
            0
          ]), Nn(), qn();
        }, 50), Ze(), {
          nodes: d.length,
          elements: m.length
        };
      },
      building(t, o, n, l = 3, a = 0, p = 0, s = 0, r = 0, f = 1) {
        Ke.clear();
        const c = [];
        a > 0 && c.push(-a), c.push(0);
        for (const i of t) c.push(c[c.length - 1] + i);
        p > 0 && c.push(c[c.length - 1] + p);
        const d = [];
        s > 0 && d.push(-s), d.push(0);
        for (const i of o) d.push(d[d.length - 1] + i);
        r > 0 && d.push(d[d.length - 1] + r);
        const m = [
          0
        ];
        for (const i of n) m.push(m[m.length - 1] + i);
        const E = (i) => a > 0 && i === 0 || p > 0 && i === c.length - 1, w = (i) => s > 0 && i === 0 || r > 0 && i === d.length - 1, v = (i, $) => E(i) || w($), u = [], h = {};
        for (let i = 0; i < m.length; i++) for (let $ = 0; $ < d.length; $++) for (let A = 0; A < c.length; A++) i === 0 && v(A, $) || (h[`${A},${$},${i}`] = u.length, u.push([
          c[A],
          d[$],
          m[i]
        ]));
        const I = u.length, z = [];
        _ = /* @__PURE__ */ new Set(), J = /* @__PURE__ */ new Set(), $e = /* @__PURE__ */ new Map();
        const T = [];
        for (let i = 0; i < m.length - 1; i++) for (let $ = 0; $ < d.length; $++) for (let A = 0; A < c.length; A++) v(A, $) || T.push({
          el: [
            h[`${A},${$},${i}`],
            h[`${A},${$},${i + 1}`]
          ],
          floor: i
        });
        for (const { el: [i, $], floor: A } of T) {
          if (f <= 1) {
            _.add(z.length), $e.set(z.length, A), z.push([
              i,
              $
            ]);
            continue;
          }
          const F = u[i], G = u[$];
          let g = i;
          for (let S = 1; S < f; S++) {
            const y = S / f, C = u.length;
            u.push([
              F[0] + (G[0] - F[0]) * y,
              F[1] + (G[1] - F[1]) * y,
              F[2] + (G[2] - F[2]) * y
            ]), _.add(z.length), $e.set(z.length, A), z.push([
              g,
              C
            ]), g = C;
          }
          _.add(z.length), $e.set(z.length, A), z.push([
            g,
            $
          ]);
        }
        Te = /* @__PURE__ */ new Map();
        const B = [];
        for (let i = 1; i < m.length; i++) for (let $ = 0; $ < d.length; $++) for (let A = 0; A < c.length - 1; A++) B.push({
          el: [
            h[`${A},${$},${i}`],
            h[`${A + 1},${$},${i}`]
          ],
          floor: i - 1,
          dir: "x",
          bay: A
        });
        for (let i = 1; i < m.length; i++) for (let $ = 0; $ < c.length; $++) for (let A = 0; A < d.length - 1; A++) B.push({
          el: [
            h[`${$},${A},${i}`],
            h[`${$},${A + 1},${i}`]
          ],
          floor: i - 1,
          dir: "y",
          bay: A
        });
        for (const { el: [i, $], floor: A, dir: F, bay: G } of B) {
          const g = u[i], S = u[$];
          let y = i;
          for (let X = 1; X < l; X++) {
            const U = X / l, ae = u.length;
            u.push([
              g[0] + (S[0] - g[0]) * U,
              g[1] + (S[1] - g[1]) * U,
              g[2] + (S[2] - g[2]) * U
            ]);
            const Z = z.length;
            J.add(Z), $e.set(Z, A), Te.set(Z, {
              dir: F,
              bay: G
            }), z.push([
              y,
              ae
            ]), y = ae;
          }
          const C = z.length;
          J.add(C), $e.set(C, A), Te.set(C, {
            dir: F,
            bay: G
          }), z.push([
            y,
            $
          ]);
        }
        if (st = /* @__PURE__ */ new Set(), Se && ze > 0) {
          const i = ($, A, F) => {
            for (let g = 0; g < u.length; g++) if (Math.abs(u[g][0] - $) < 1e-6 && Math.abs(u[g][1] - A) < 1e-6 && Math.abs(u[g][2] - F) < 1e-6) return g;
            const G = u.length;
            return u.push([
              $,
              A,
              F
            ]), G;
          };
          for (let $ = 1; $ < m.length; $++) if (Je === "x") for (let A = 0; A < d.length - 1; A++) {
            const F = d[A], G = d[A + 1];
            for (let g = 1; g <= ze; g++) {
              const S = F + g / (ze + 1) * (G - F), y = [];
              for (let C = 0; C < c.length; C++) y.push(i(c[C], S, m[$]));
              for (let C = 0; C < c.length - 1; C++) {
                const X = z.length;
                st.add(X), J.add(X), $e.set(X, $ - 1), Te.set(X, {
                  dir: "x",
                  bay: C
                }), z.push([
                  y[C],
                  y[C + 1]
                ]);
              }
            }
          }
          else for (let A = 0; A < c.length - 1; A++) {
            const F = c[A], G = c[A + 1];
            for (let g = 1; g <= ze; g++) {
              const S = F + g / (ze + 1) * (G - F), y = [];
              for (let C = 0; C < d.length; C++) y.push(i(S, d[C], m[$]));
              for (let C = 0; C < d.length - 1; C++) {
                const X = z.length;
                st.add(X), J.add(X), $e.set(X, $ - 1), Te.set(X, {
                  dir: "y",
                  bay: C
                }), z.push([
                  y[C],
                  y[C + 1]
                ]);
              }
            }
          }
        }
        const D = /* @__PURE__ */ new Map(), x = mt();
        for (let i = 0; i < d.length; i++) for (let $ = 0; $ < c.length; $++) v($, i) || D.set(h[`${$},${i},0`], [
          ...x
        ]);
        ce = /* @__PURE__ */ new Set();
        for (const i of xe) {
          const $ = m.length - 1, A = i.floors.includes(-1) ? Array.from({
            length: $
          }, (F, G) => G) : i.floors.filter((F) => F < $);
          for (const F of A) {
            let G, g, S, y;
            i.dir === "x" ? (G = i.bay, S = i.bay + 1, g = i.axisIdx, y = i.axisIdx) : (G = i.axisIdx, S = i.axisIdx, g = i.bay, y = i.bay + 1);
            const C = h[`${G},${g},${F}`], X = h[`${G},${g},${F + 1}`];
            let U, ae;
            if (i.dir === "x" ? (U = h[`${S},${y},${F}`], ae = h[`${S},${y},${F + 1}`]) : (U = h[`${S},${y},${F}`], ae = h[`${S},${y},${F + 1}`]), C === void 0 || U === void 0 || X === void 0 || ae === void 0) continue;
            const Z = be, K = He, de = u[C], ie = u[U], Ie = u[X], Re = u[ae], q = [];
            for (let fe = 0; fe <= K; fe++) {
              const oe = [], pe = fe / K;
              for (let Q = 0; Q <= Z; Q++) {
                const me = Q / Z, we = (1 - pe) * ((1 - me) * de[0] + me * ie[0]) + pe * ((1 - me) * Ie[0] + me * Re[0]), ne = (1 - pe) * ((1 - me) * de[1] + me * ie[1]) + pe * ((1 - me) * Ie[1] + me * Re[1]), Ee = (1 - pe) * ((1 - me) * de[2] + me * ie[2]) + pe * ((1 - me) * Ie[2] + me * Re[2]);
                fe === 0 && Q === 0 ? oe.push(C) : fe === 0 && Q === Z ? oe.push(U) : fe === K && Q === 0 ? oe.push(X) : fe === K && Q === Z ? oe.push(ae) : (oe.push(u.length), u.push([
                  we,
                  ne,
                  Ee
                ]));
              }
              q.push(oe);
            }
            for (let fe = 0; fe < K; fe++) for (let oe = 0; oe < Z; oe++) {
              const pe = q[fe][oe], Q = q[fe][oe + 1], me = q[fe + 1][oe + 1], we = q[fe + 1][oe], ne = z.length;
              ce.add(ne), $e.set(ne, F), z.push([
                pe,
                Q,
                me,
                we
              ]);
            }
            if (F === 0) for (let fe = 0; fe <= Z; fe++) {
              const oe = q[0][fe];
              oe >= I && D.set(oe, [
                ...x
              ]);
            }
          }
        }
        if (kt = /* @__PURE__ */ new Set(), Ue) {
          const i = l, $ = l, A = /* @__PURE__ */ new Map(), F = (G, g, S) => `${Math.round(G * 1e4)},${Math.round(g * 1e4)},${Math.round(S * 1e4)}`;
          for (let G = 0; G < u.length; G++) A.set(F(u[G][0], u[G][1], u[G][2]), G);
          for (let G = 1; G < m.length; G++) {
            const g = m[G];
            for (let S = 0; S < c.length - 1; S++) for (let y = 0; y < d.length - 1; y++) {
              const C = c[S], X = c[S + 1], U = d[y], ae = d[y + 1], Z = [];
              for (let K = 0; K <= $; K++) {
                const de = [];
                for (let ie = 0; ie <= i; ie++) {
                  const Ie = C + ie / i * (X - C), Re = U + K / $ * (ae - U);
                  if (K === 0 && ie === 0) de.push(h[`${S},${y},${G}`]);
                  else if (K === 0 && ie === i) de.push(h[`${S + 1},${y},${G}`]);
                  else if (K === $ && ie === 0) de.push(h[`${S},${y + 1},${G}`]);
                  else if (K === $ && ie === i) de.push(h[`${S + 1},${y + 1},${G}`]);
                  else {
                    const q = F(Ie, Re, g), fe = A.get(q);
                    if (fe !== void 0) de.push(fe);
                    else {
                      const oe = u.length;
                      u.push([
                        Ie,
                        Re,
                        g
                      ]), A.set(q, oe), de.push(oe);
                    }
                  }
                }
                Z.push(de);
              }
              for (let K = 0; K < $; K++) for (let de = 0; de < i; de++) {
                const ie = Z[K][de], Ie = Z[K][de + 1], Re = Z[K + 1][de + 1], q = Z[K + 1][de], fe = z.length;
                kt.add(fe), $e.set(fe, G - 1), z.push([
                  ie,
                  Ie,
                  Re,
                  q
                ]);
              }
            }
          }
        }
        if (Ct && ht) {
          const i = ht === "all" || ht === "x" || ht === "perimeter", $ = ht === "all" || ht === "y" || ht === "perimeter", A = m.length - 1;
          for (let F = 0; F < A; F++) {
            if (i) for (let G = 0; G < d.length; G++) {
              if (ht === "perimeter" && G !== 0 && G !== d.length - 1) continue;
              const g = Math.floor((c.length - 1) / 2);
              for (let S = 0; S < c.length - 1; S++) {
                if (ht === "perimeter" && S !== g || v(S, G) || v(S + 1, G)) continue;
                const y = h[`${S},${G},${F}`], C = h[`${S + 1},${G},${F + 1}`], X = h[`${S + 1},${G},${F}`], U = h[`${S},${G},${F + 1}`];
                y !== void 0 && C !== void 0 && (z.push([
                  y,
                  C
                ]), $e.set(z.length - 1, F)), X !== void 0 && U !== void 0 && (z.push([
                  X,
                  U
                ]), $e.set(z.length - 1, F));
              }
            }
            if ($) for (let G = 0; G < c.length; G++) {
              if (ht === "perimeter" && G !== 0 && G !== c.length - 1) continue;
              const g = Math.floor((d.length - 1) / 2);
              for (let S = 0; S < d.length - 1; S++) {
                if (ht === "perimeter" && S !== g || v(G, S) || v(G, S + 1)) continue;
                const y = h[`${G},${S},${F}`], C = h[`${G},${S + 1},${F + 1}`], X = h[`${G},${S + 1},${F}`], U = h[`${G},${S},${F + 1}`];
                y !== void 0 && C !== void 0 && (z.push([
                  y,
                  C
                ]), $e.set(z.length - 1, F)), X !== void 0 && U !== void 0 && (z.push([
                  X,
                  U
                ]), $e.set(z.length - 1, F));
              }
            }
          }
        }
        return e.nodes.val = u, e.elements.val = z, e.nodeInputs && (e.nodeInputs.val = {
          supports: D
        }), We = [
          ...c
        ], Xe = [
          ...d
        ], pt = m[m.length - 1] || 0, setTimeout(() => {
          It(), Xo(c, d), Nn(), qn();
        }, 50), Ze(), {
          nodes: u.length,
          elements: z.length,
          nJointNodes: I
        };
      },
      galpon(t = 12, o = 20, n = 6, l = 3, a = 8, p = 4) {
        Ke.clear();
        const s = [], r = [], f = (w) => n + l * (1 - Math.pow(2 * w / t - 1, 2)), c = [], d = p + 1;
        for (let w = 0; w < d; w++) {
          const v = [], u = o / p * w;
          v.push(s.length), s.push([
            0,
            u,
            0
          ]), v.push(s.length), s.push([
            t,
            u,
            0
          ]), v.push(s.length), s.push([
            0,
            u,
            n
          ]);
          for (let h = 1; h < a; h++) {
            const I = t / a * h;
            v.push(s.length), s.push([
              I,
              u,
              f(I)
            ]);
          }
          v.push(s.length), s.push([
            t,
            u,
            n
          ]), c.push(v);
        }
        for (let w = 0; w < d; w++) {
          const v = c[w];
          r.push([
            v[0],
            v[2]
          ]), r.push([
            v[1],
            v[v.length - 1]
          ]);
          for (let u = 2; u < v.length - 1; u++) r.push([
            v[u],
            v[u + 1]
          ]);
        }
        for (let w = 0; w < p; w++) for (let v = 2; v < c[0].length; v++) r.push([
          c[w][v],
          c[w + 1][v]
        ]);
        for (let w = 0; w < p; w++) for (let v = 2; v < c[0].length - 1; v += 2) r.push([
          c[w][v],
          c[w + 1][v + 1]
        ]);
        const m = /* @__PURE__ */ new Map(), E = mt();
        for (let w = 0; w < d; w++) m.set(c[w][0], [
          ...E
        ]), m.set(c[w][1], [
          ...E
        ]);
        return e.nodes.val = s, e.elements.val = r, e.nodeInputs && (e.nodeInputs.val = {
          supports: m
        }), Ze(), {
          nodes: s.length,
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
            Ne.colMat = 1, Ne.vigaMat = 1, Ke.clear(), Qe("truss"), ds();
            break;
          }
          case "beams": {
            Ne.colMat = 0, Ne.vigaMat = 0, Ne.colShape = 0, Ke.clear(), Qe("beams"), ps();
            break;
          }
          case "3d":
          case "3d-structure":
          case "torre": {
            Ne.colMat = 1, Ne.vigaMat = 1, Ke.clear(), Qe("3d"), fs();
            break;
          }
          case "portico": {
            Ne.colMat = 0, Ne.vigaMat = 0, Ne.colShape = 0, Qe("frame"), Pe();
            break;
          }
          case "edificio": {
            Qe("edificio"), Ne.colMat = 0, Ne.vigaMat = 0, Ne.colShape = 0, xe = [], Ue = false, Se = false, Ct = false, Pe();
            break;
          }
          case "edif-acero":
          case "edificio-acero": {
            Qe("edificio"), Ne.colMat = 1, Ne.vigaMat = 1, Ne.steelColType = 0, Ne.steelVigaType = 0, xe = [], Se = true, ze = 2;
            const o = re.reduce((l, a) => l + a, 0) / re.length, n = te.reduce((l, a) => l + a, 0) / te.length;
            Je = o >= n ? "y" : "x", Ue = true, at = 0.08, Ct = false, Pe();
            break;
          }
          case "edif-acero-diag":
          case "edificio-acero-diag": {
            Qe("edificio"), Ne.colMat = 1, Ne.vigaMat = 1, Ne.steelColType = 0, Ne.steelVigaType = 0, xe = [], Se = true, ze = 2;
            const o = re.reduce((l, a) => l + a, 0) / re.length, n = te.reduce((l, a) => l + a, 0) / te.length;
            Je = o >= n ? "y" : "x", Ue = true, at = 0.08, Ct = true, ht = "perimeter", Pe();
            break;
          }
          case "edif-muros":
          case "edificio-muros": {
            Qe("edificio"), Ne.colMat = 0, Ne.vigaMat = 0, Ne.colShape = 0, Se = false;
            const o = Math.round(((_a2 = se.nVanosX) == null ? void 0 : _a2.val) ?? 2), n = Math.round(((_b = se.nVanosY) == null ? void 0 : _b.val) ?? 2);
            xe = [
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
            ], Ue = true, at = 0.15, Pe();
            break;
          }
          case "edif-mixto":
          case "edificio-mixto": {
            Qe("edificio"), Ne.colMat = 2, Ne.vigaMat = 0, Se = false;
            const o = Math.round(((_c = se.nVanosX) == null ? void 0 : _c.val) ?? 2), n = Math.round(((_d = se.nVanosY) == null ? void 0 : _d.val) ?? 2);
            xe = [
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
            ], Ue = true, at = 0.12, Pe();
            break;
          }
          case "mezanine":
          case "mezzanine": {
            Qe("edificio"), se.nPisos && (se.nPisos.val = 1), se.hPiso && (se.hPiso.val = 4.5), se.nVanosX && (se.nVanosX.val = 3), se.nVanosY && (se.nVanosY.val = 2), se.nSubViga && (se.nSubViga.val = 3), re = [
              6,
              6,
              6
            ], te = [
              5,
              5
            ], Ne.colMat = 1, Ne.vigaMat = 1, Ne.steelColType = 0, Ne.steelVigaType = 0, xe = [], Se = true, ze = 2, Je = re[0] >= te[0] ? "y" : "x", Ue = true, at = 0.08, dt = 3, yt = 3, Pe();
            break;
          }
          case "galpon": {
            Qe("galpon"), Ne.colMat = 1, Ne.vigaMat = 1, Pe();
            break;
          }
          case "barra": {
            Qe("barra"), Pe();
            break;
          }
          case "placa3q":
          case "plate3q":
          case "placa-3q": {
            Ke.clear(), Qe("placa-3q"), us();
            break;
          }
          case "placa":
          case "plate":
          case "plate-q4":
          case "placa-q4": {
            Ke.clear(), Qe("placa-q4"), ms();
            break;
          }
          case "losa-rect":
          case "rectangular-slab": {
            Ke.clear(), Qe("losa-rect"), bs();
            break;
          }
          case "losa-plana":
          case "flat-slab": {
            Ke.clear(), Qe("losa-plana"), hs();
            break;
          }
          case "viga-alta":
          case "deep-beam": {
            Ke.clear(), Qe("viga-alta"), gs();
            break;
          }
          case "muro-contencion":
          case "retaining-wall": {
            Ke.clear(), Qe("muro-contencion"), xs();
            break;
          }
          case "zapata":
          case "footing": {
            Ke.clear(), Qe("zapata"), vs();
            break;
          }
          case "placa-orificios":
          case "plate-holes":
          case "placa-base": {
            Ke.clear(), Qe("placa-orificios"), ys();
            break;
          }
          case "col-placa":
          case "columna-placa": {
            Ke.clear(), Qe("col-placa"), $s();
            break;
          }
          case "talud":
          case "slope": {
            Ke.clear(), Qe("talud"), Ms();
            break;
          }
          case "eiffel":
          case "torre-eiffel": {
            Ke.clear(), Qe("eiffel"), qs();
            break;
          }
          case "arco":
          case "arco-gateway": {
            Ke.clear(), Qe("arco"), _s();
            break;
          }
          case "puente":
          case "puente-colgante": {
            Ke.clear(), Qe("puente"), Bs();
            break;
          }
          case "twisted":
          case "torre-twisted":
          case "turning-torso": {
            Ke.clear(), Qe("twisted"), Ds();
            break;
          }
          case "burj":
          case "burj-khalifa": {
            Ke.clear(), Qe("burj"), Hs();
            break;
          }
          case "opera":
          case "sydney-opera": {
            Ke.clear(), Qe("opera"), js();
            break;
          }
          case "diagrid":
          case "gherkin": {
            Ke.clear(), Qe("diagrid"), Ws();
            break;
          }
          case "placa-hss":
          case "placa-hss-weld": {
            Ke.clear(), Qe("placa-hss"), Ys();
            break;
          }
          case "edif-5p":
          case "edificio-5p": {
            Ke.clear(), Qe("edif-5p"), Gs();
            break;
          }
          default:
            console.error(`Ejemplo desconocido: "${t}".`);
        }
      },
      plateQ4(t = 10, o = 10, n = 16, l = 16, a = "simply-supported", p = -10, s = 0.2, r = 3e7, f = 0.3, c = 0) {
        console.log(`Plate Q4 [${[
          "Mindlin (gruesa)",
          "Kirchhoff (delgada)",
          "Membrane"
        ][c]}]: ${t}\xD7${o}, ${n}\xD7${l} elem, BC=${a}, q=${p}, t=${s}`);
        const m = performance.now(), E = Un({
          E: r,
          nu: f,
          thickness: s,
          meshLx: t,
          meshLy: o,
          meshNx: n,
          meshNy: l,
          bcType: a,
          pressure: p,
          theoryType: c
        }), w = performance.now() - m;
        console.log(`Solved in ${w.toFixed(1)} ms`), console.log(`w_max = ${E.maxW.toExponential(6)}`), console.log(`w_center = ${(E.centerW ?? 0).toExponential(6)}`), console.log(`Mxx_max = ${E.maxMxx.toExponential(4)}, Myy_max = ${E.maxMyy.toExponential(4)}`), console.log(`Mxy_max = ${E.maxMxy.toExponential(4)}`), console.log(`Qx_max = ${E.maxQx.toExponential(4)}, Qy_max = ${E.maxQy.toExponential(4)}`);
        const v = E.nodeResults.map((T) => [
          T.x,
          T.y,
          0
        ]), u = E.elementResults.map((T) => [
          ...T.nodes
        ]);
        e.nodes.val = v, e.elements.val = u;
        const h = /* @__PURE__ */ new Map();
        E.nodeResults.forEach((T, B) => {
          h.set(B, [
            0,
            0,
            T.w,
            T.bx,
            T.by,
            0
          ]);
        }), e.deformOutputs && (e.deformOutputs.val = {
          deformations: h
        });
        const I = /* @__PURE__ */ new Map();
        E.nodeResults.forEach((T, B) => {
          (T.x < 1e-10 || T.x > t - 1e-10 || T.y < 1e-10 || T.y > o - 1e-10) && I.set(B, [
            true,
            true,
            true,
            true,
            true,
            true
          ]);
        });
        const z = /* @__PURE__ */ new Map();
        if (Math.abs(p) > 1e-30) {
          const T = p * t * o / v.length;
          v.forEach((B, D) => {
            I.has(D) || z.set(D, [
              0,
              0,
              T,
              0,
              0,
              0
            ]);
          });
        }
        if (e.nodeInputs && (e.nodeInputs.val = {
          supports: I,
          loads: z
        }), e.elementInputs && (e.elementInputs.val = {}), e.analyzeOutputs) {
          const T = /* @__PURE__ */ new Map(), B = /* @__PURE__ */ new Map(), D = /* @__PURE__ */ new Map();
          E.elementResults.forEach((x, i) => {
            T.set(i, [
              x.Mxx,
              x.Mxx,
              x.Mxx
            ]), B.set(i, [
              x.Myy,
              x.Myy,
              x.Myy
            ]), D.set(i, [
              x.Mxy,
              x.Mxy,
              x.Mxy
            ]);
          }), e.analyzeOutputs.val = {
            bendingXX: T,
            bendingYY: B,
            bendingXY: D
          };
        }
        return setTimeout(() => It(), 50), Ze(), E;
      },
      set(t, o) {
        se[t] ? (se[t].val = o, console.log(`${t} = ${o}`), so(), Pe()) : ft[t] ? (ft[t].val = o, console.log(`${t} = ${o}`), so(), Pe()) : console.error(`Par\xE1metro "${t}" no encontrado. Disponibles: ${Object.keys({
          ...se,
          ...ft
        }).join(", ")}`);
      },
      get(t) {
        if (!t) {
          const o = {};
          for (const l in se) o[l] = se[l].val;
          for (const l in ft) o[l] = ft[l].val;
          o.plateTheory = Le, o.supportType = xt;
          const n = un()[k];
          return n && n[xt] && (o.supportLabel = n[xt].label), console.table(o), o;
        }
        if (se[t]) return se[t].val;
        if (ft[t]) return ft[t].val;
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
        }[t.toLowerCase()] || 3), Le = t, console.log(`Teor\xEDa de placa: ${{
          1: "Membrana",
          2: "Kirchhoff (delgada)",
          3: "Mindlin (gruesa)"
        }[Le] || Le}`), k.includes("placa") && (so(), Pe());
      },
      setBc(t) {
        const o = un()[k];
        if (!o || o.length === 0) {
          console.error("No support options for current generator");
          return;
        }
        if (typeof t == "string") {
          const n = o.findIndex((l) => l.label.toLowerCase().includes(t.toLowerCase()));
          t = n >= 0 ? n : 0;
        }
        xt = t, xt >= o.length && (xt = 0), console.log(`Apoyo: ${o[xt].label} \u2192 DOFs: [${o[xt].dofs.map((n) => n ? "1" : "0").join(",")}]`), so(), Pe();
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
        t && (b = t), o && (P = o), M = Fo(b, P);
        const n = Ae.querySelector("#cad3d-force-unit"), l = Ae.querySelector("#cad3d-length-unit");
        return n && (n.textContent = b), l && (l.textContent = P), k && Qe(k), console.log(`Unidades: ${M.label} | E=${M.E.toExponential(3)} ${M.stress}`), M.id;
      },
      view(t) {
      },
      get mesh() {
        return e;
      }
    };
    function is() {
      return fl(M);
    }
    function cs() {
      return ul(M);
    }
    let ft = {};
    function Qe(t) {
      var _a2, _b, _c, _d;
      k = t, ia.val = true, xt = 0, ge && Cn(), se = {};
      const o = is()[t];
      if (o) for (const l of o) se[l.key] = {
        val: l.val,
        min: l.min,
        max: l.max,
        step: l.step,
        label: l.label
      };
      ft = {};
      const n = cs()[t];
      if (n) for (const l of n) ft[l.key] = {
        val: l.val,
        min: l.min,
        max: l.max,
        step: l.step,
        label: l.label
      };
      if (t === "edificio") {
        const l = Math.round(((_a2 = se.nVanosX) == null ? void 0 : _a2.val) ?? 2), a = Math.round(((_b = se.nVanosY) == null ? void 0 : _b.val) ?? 2);
        re = Array(l).fill(M.defaultSpan), te = Array(a).fill(M.defaultSpan * 0.8);
        const p = Math.round(((_c = se.nPisos) == null ? void 0 : _c.val) ?? 3), s = ((_d = se.hPiso) == null ? void 0 : _d.val) ?? 3;
        N = Array(p).fill(s);
      }
      so(), setTimeout(() => {
        ka(), Pe();
      }, 50);
    }
    function le(t) {
      var _a2, _b;
      return ((_a2 = se[t]) == null ? void 0 : _a2.val) ?? ((_b = ft[t]) == null ? void 0 : _b.val) ?? 0;
    }
    function Pe() {
      switch (k) {
        case "truss":
          ds();
          break;
        case "beams":
          ps();
          break;
        case "3d":
          fs();
          break;
        case "frame": {
          const o = Math.round(le("nVanos")), n = le("spanV"), l = Math.round(le("nPisos")), a = le("hPiso");
          Ke.frame(Array(o).fill(n), Array(l).fill(a));
          break;
        }
        case "edificio": {
          const o = le("Lvix") || 0, n = le("Lvdx") || 0, l = le("Lviy") || 0, a = le("Lvdy") || 0, p = Math.max(1, Math.round(le("nSubViga") || 3)), s = Math.max(1, Math.round(le("nSubCol") || 1)), r = le("hPiso"), f = N.length > 0 ? [
            ...N
          ] : Array(Math.round(le("nPisos"))).fill(r);
          Ke.building([
            ...re
          ], [
            ...te
          ], f, p, o, n, l, a, s);
          break;
        }
        case "galpon":
          Ke.galpon(le("span"), le("length"), le("height"), le("archRise"), Math.round(le("xDiv")), Math.round(le("yDiv")));
          break;
        case "barra":
          xa();
          break;
        case "placa-3q":
          us();
          break;
        case "placa-q4":
          ms();
          break;
        case "losa-rect":
          bs();
          break;
        case "losa-plana":
          hs();
          break;
        case "viga-alta":
          gs();
          break;
        case "muro-contencion":
          xs();
          break;
        case "zapata":
          vs();
          break;
        case "placa-orificios":
          ys();
          break;
        case "col-placa":
          $s();
          break;
        case "talud":
          Ms();
          break;
        case "eiffel":
          qs();
          break;
        case "arco":
          _s();
          break;
        case "puente":
          Bs();
          break;
        case "twisted":
          Ds();
          break;
        case "burj":
          Hs();
          break;
        case "opera":
          js();
          break;
        case "diagrid":
          Ws();
          break;
        case "placa-hss":
          Ys();
          break;
        case "edif-5p":
          Gs();
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
        "diagrid",
        "placa-hss",
        "edif-5p"
      ].includes(k)) {
        if (V.size > 0 || W.size > 0 || O) {
          const o = e.elements.val, n = o.filter((l, a) => !(V.has(a) || W.has(a) || O && !j.has(a)));
          n.length !== o.length && (e.elements.val = n);
        }
        setTimeout(() => {
          xo(), Fn();
        }, 30);
      }
    }
    function ds() {
      const t = le("span"), o = Math.round(le("divisions")), n = le("height"), l = t / o, a = [], p = [];
      for (let d = 0; d <= o; d++) a.push([
        l * d,
        0,
        0
      ]);
      for (let d = 0; d <= o; d++) a.push([
        l * d,
        0,
        n
      ]);
      const s = o + 1;
      for (let d = 0; d < o; d++) p.push([
        d,
        d + 1
      ]);
      for (let d = 0; d < o; d++) p.push([
        s + d,
        s + d + 1
      ]);
      for (let d = 0; d <= o; d++) p.push([
        d,
        s + d
      ]);
      for (let d = 0; d < o; d++) d < o / 2 ? p.push([
        d,
        s + d + 1
      ]) : p.push([
        s + d,
        d + 1
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
      ]), f = (le("CM") ?? 0) + (le("CV") ?? 0), c = /* @__PURE__ */ new Map();
      if (f !== 0) for (let d = 0; d <= o; d++) c.set(d, [
        0,
        0,
        f,
        0,
        0,
        0
      ]);
      e.nodes.val = a, e.elements.val = p, e.nodeInputs && (e.nodeInputs.val = {
        supports: r,
        loads: c
      }), Ze();
    }
    function ps() {
      const t = le("width"), o = le("height"), n = le("Ex") ?? 0, l = (le("CM") ?? 0) + (le("CV") ?? 0), a = Math.max(1, Math.round(le("nSub") || 4)), p = [
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
      ], s = [];
      s.push([
        0,
        1
      ], [
        2,
        3
      ]);
      const r = [
        0,
        0,
        o
      ], f = [
        t,
        0,
        o
      ];
      let c = 1;
      for (let m = 1; m < a; m++) {
        const E = m / a, w = p.length;
        p.push([
          r[0] + (f[0] - r[0]) * E,
          r[1] + (f[1] - r[1]) * E,
          r[2] + (f[2] - r[2]) * E
        ]), s.push([
          c,
          w
        ]), c = w;
      }
      s.push([
        c,
        2
      ]);
      const d = /* @__PURE__ */ new Map();
      if (n !== 0 && l === 0) d.set(2, [
        n,
        0,
        0,
        0,
        0,
        0
      ]);
      else if (l !== 0 && n === 0) for (let m = 1; m < p.length; m++) m === 0 || m === 3 || d.set(m, [
        0,
        0,
        l,
        0,
        0,
        0
      ]);
      else if (n !== 0 && l !== 0) for (let m = 1; m < p.length; m++) m === 0 || m === 3 || d.set(m, [
        m === 2 ? n : 0,
        0,
        l,
        0,
        0,
        0
      ]);
      e.nodes.val = p, e.elements.val = s, e.nodeInputs && (e.nodeInputs.val = {
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
        loads: d
      }), Ze();
    }
    function fs() {
      const t = le("dx"), o = le("dy"), n = le("dz"), l = Math.round(le("stories")), a = Math.max(1, Math.round(le("nSub") || 3)), p = [];
      for (let u = 0; u <= l; u++) p.push([
        0,
        0,
        n * u
      ], [
        t,
        0,
        n * u
      ], [
        t,
        o,
        n * u
      ], [
        0,
        o,
        n * u
      ]);
      const s = p.length, r = [
        ...p
      ], f = [];
      for (let u = 0; u < l; u++) for (let h = 0; h < 4; h++) f.push([
        u * 4 + h,
        (u + 1) * 4 + h
      ]);
      for (let u = 0; u < l; u++) {
        const h = u * 4;
        f.push([
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
      const c = [];
      for (let u = 1; u <= l; u++) {
        const h = u * 4;
        c.push([
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
      for (const [u, h] of c) {
        const I = p[u], z = p[h];
        let T = u;
        for (let B = 1; B < a; B++) {
          const D = B / a, x = r.length;
          r.push([
            I[0] + (z[0] - I[0]) * D,
            I[1] + (z[1] - I[1]) * D,
            I[2] + (z[2] - I[2]) * D
          ]), f.push([
            T,
            x
          ]), T = x;
        }
        f.push([
          T,
          h
        ]);
      }
      const d = /* @__PURE__ */ new Map();
      for (let u = 0; u < 4; u++) d.set(u, [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
      const m = le("Ex") ?? 0, E = (le("CM") ?? 0) + (le("CV") ?? 0), w = s - 2, v = /* @__PURE__ */ new Map();
      if (m !== 0 && E === 0) v.set(w, [
        m,
        0,
        0,
        0,
        0,
        0
      ]);
      else if (E !== 0 && m === 0) for (let u = 0; u < r.length; u++) d.has(u) || v.set(u, [
        0,
        0,
        E,
        0,
        0,
        0
      ]);
      else if (m !== 0 && E !== 0) for (let u = 0; u < r.length; u++) d.has(u) || v.set(u, [
        u === w ? m : 0,
        0,
        E,
        0,
        0,
        0
      ]);
      e.nodes.val = r, e.elements.val = f, e.nodeInputs && (e.nodeInputs.val = {
        supports: d,
        loads: v
      }), Ze();
    }
    function xa() {
      const t = le("L"), o = Math.round(le("nElem")), n = le("F"), l = t / o, a = [], p = [];
      for (let f = 0; f <= o; f++) a.push([
        l * f,
        0,
        0
      ]);
      for (let f = 0; f < o; f++) p.push([
        f,
        f + 1
      ]);
      const s = /* @__PURE__ */ new Map([
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
      e.nodes.val = a, e.elements.val = p, e.nodeInputs && (e.nodeInputs.val = {
        supports: s,
        loads: r
      }), Ze();
    }
    function us() {
      const t = le("Lx") || 15, o = le("Ly") || 10, n = le("meshSize") || 0.5, l = le("q") || -3, a = le("t") || 1, p = le("E") || 3e7, s = le("nu") || 0.3, r = p / (2 * (1 + s)), f = Le === 1 ? "Membrana" : Le === 2 ? "Kirchhoff" : "Mindlin", { nodes: c, elements: d, boundaryIndices: m } = ho({
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
      }), E = t * o, w = l * E / c.length, v = new Map(m.map((h) => [
        h,
        [
          true,
          true,
          true,
          true,
          true,
          true
        ]
      ])), u = new Map(c.map((h, I) => [
        I,
        [
          0,
          0,
          w,
          0,
          0,
          0
        ]
      ]));
      e.nodes.val = c, e.elements.val = d, e.nodeInputs && (e.nodeInputs.val = {
        supports: v,
        loads: u
      }), e.elementInputs && (e.elementInputs.val = {
        elasticities: new Map(d.map((h, I) => [
          I,
          p
        ])),
        elasticitiesOrthogonal: new Map(d.map((h, I) => [
          I,
          p
        ])),
        thicknesses: new Map(d.map((h, I) => [
          I,
          a
        ])),
        poissonsRatios: new Map(d.map((h, I) => [
          I,
          s
        ])),
        shearModuli: new Map(d.map((h, I) => [
          I,
          r
        ]))
      });
      try {
        const h = Lt(c, d, e.nodeInputs.val, e.elementInputs.val);
        h && e.deformOutputs && (e.deformOutputs.val = h);
        const I = Yo(c, d, e.elementInputs.val, h);
        I && e.analyzeOutputs && (e.analyzeOutputs.val = I), console.log(`Plate 3Q [${f}]: ${c.length} nodes, ${d.length} triangles, t=${a}, E=${p}, \u03BD=${s}`);
      } catch (h) {
        console.warn("Plate 3Q analysis failed:", h.message);
      }
      setTimeout(() => It(), 50), Ze();
    }
    function ms() {
      const t = le("Lx") || 10, o = le("Ly") || 10, n = Math.round(le("nx") || 16), l = Math.round(le("ny") || 16), a = le("t") || 0.2, p = le("q") || -10, s = le("E") || 3e7, r = le("nu") || 0.3, f = xt === 1 ? "clamped" : "simply-supported", d = {
        1: 2,
        2: 1,
        3: 0
      }[Le] ?? 0;
      return Ke.plateQ4(t, o, n, l, f, p, a, s, r, d);
    }
    function bs() {
      const t = le("a") || 6, o = le("b") || 4, n = Math.round(le("nx") || 12), l = Math.round(le("ny") || 8), a = le("t") || 0.1, p = le("q") || -10, s = le("E") || 35e6, r = le("nu") || 0.15, c = {
        1: 2,
        2: 1,
        3: 0
      }[Le] ?? 0, d = Ke.plateQ4(t, o, n, l, "simply-supported", p, a, s, r, c), m = s * a * a * a / (12 * (1 - r * r));
      let E = 0;
      for (let w = 1; w <= 19; w += 2) for (let v = 1; v <= 19; v += 2) {
        const u = w * w / (t * t) + v * v / (o * o);
        E += 1 / (w * v * u * u);
      }
      if (E *= 16 * Math.abs(p) / (Math.PI ** 6 * m), console.log(`\u{1F4D0} Navier anal\xEDtico w_center = ${E.toExponential(6)}`), d) {
        const w = Math.abs((Math.abs(d.centerW || 0) - E) / E * 100);
        console.log(`   WASM w_center = ${(d.centerW || 0).toExponential(6)}, error = ${w.toFixed(2)}%`);
      }
      return d;
    }
    function hs() {
      const t = le("t") || 0.2, o = le("q") || -10, n = le("E") || 35e6, l = le("nu") || 0.2, a = le("meshSize") || 0.6, p = [
        3.6,
        4.2,
        4.2,
        3.6
      ], s = [
        3,
        3.6,
        3
      ], r = p.reduce((g, S) => g + S, 0), f = s.reduce((g, S) => g + S, 0), c = [
        0
      ];
      for (const g of p) c.push(c[c.length - 1] + g);
      const d = [
        0
      ];
      for (const g of s) d.push(d[d.length - 1] + g);
      const m = Math.max(2, Math.round(r / a)), E = Math.max(2, Math.round(f / a)), w = r / m, v = f / E, u = [];
      for (let g = 0; g <= E; g++) for (let S = 0; S <= m; S++) u.push([
        S * w,
        g * v
      ]);
      const h = [], I = /* @__PURE__ */ new Set();
      for (const g of c) for (const S of d) {
        let y = 1 / 0, C = 0;
        for (let X = 0; X < u.length; X++) {
          const U = Math.hypot(u[X][0] - g, u[X][1] - S);
          U < y && (y = U, C = X);
        }
        I.has(C) || (I.add(C), h.push({
          node: C,
          dof: 0,
          k: 1e15
        }));
      }
      const T = {
        1: 2,
        2: 1,
        3: 0
      }[Le] ?? 1;
      console.log(`Losa Plana Q4 [${[
        "Mindlin",
        "Kirchhoff",
        "Membrane"
      ][T]}]: ${r}\xD7${f}m, ${m}\xD7${E} elem, ${I.size} columnas`);
      const B = performance.now(), D = Un({
        E: n,
        nu: l,
        thickness: t,
        meshLx: r,
        meshLy: f,
        meshNx: m,
        meshNy: E,
        bcType: "none",
        pressure: o,
        theoryType: T,
        springs: h
      }), x = performance.now() - B;
      console.log(`Solved in ${x.toFixed(1)} ms, w_max = ${D.maxW.toExponential(4)}`);
      const i = D.nodeResults.map((g) => [
        g.x,
        g.y,
        0
      ]), $ = D.elementResults.map((g) => [
        ...g.nodes
      ]);
      e.nodes.val = i, e.elements.val = $;
      const A = /* @__PURE__ */ new Map();
      D.nodeResults.forEach((g, S) => {
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
      const F = /* @__PURE__ */ new Map();
      for (const g of I) F.set(g, [
        true,
        true,
        true,
        false,
        false,
        false
      ]);
      const G = /* @__PURE__ */ new Map();
      if (Math.abs(o) > 1e-30) {
        const g = o * r * f / i.length;
        i.forEach((S, y) => {
          F.has(y) || G.set(y, [
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
        supports: F,
        loads: G
      }), e.elementInputs && (e.elementInputs.val = {}), e.analyzeOutputs) {
        const g = /* @__PURE__ */ new Map(), S = /* @__PURE__ */ new Map(), y = /* @__PURE__ */ new Map();
        D.elementResults.forEach((C, X) => {
          g.set(X, [
            C.Mxx,
            C.Mxx,
            C.Mxx
          ]), S.set(X, [
            C.Myy,
            C.Myy,
            C.Myy
          ]), y.set(X, [
            C.Mxy,
            C.Mxy,
            C.Mxy
          ]);
        }), e.analyzeOutputs.val = {
          bendingXX: g,
          bendingYY: S,
          bendingXY: y
        };
      }
      setTimeout(() => It(), 50), Ze();
    }
    function gs() {
      const t = le("L") || 4, o = le("H") || 2, n = le("t") || 0.1, l = le("E") || 2e7, a = le("nu") || 0.2, p = l / (2 * (1 + a)), s = le("q") || -100, r = le("b") || 0.8, f = le("meshSize") || 0.2, { nodes: c, elements: d, boundaryIndices: m } = ho({
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
        maxMeshSize: f
      }), E = c, w = 0.4, v = /* @__PURE__ */ new Map();
      for (let x = 0; x < E.length; x++) {
        const i = E[x][0], $ = E[x][1];
        Math.abs($) < 1e-6 && (i <= w + 1e-6 || i >= t - w - 1e-6) && v.set(x, [
          true,
          true,
          true,
          true,
          true,
          true
        ]);
      }
      const u = (t - r) / 2, h = u + r, I = [];
      for (let x = 0; x < E.length; x++) if (Math.abs(E[x][1] - o) < 1e-6) {
        const i = E[x][0];
        i >= u - 1e-6 && i <= h + 1e-6 && I.push(x);
      }
      const z = s * r / Math.max(I.length, 1), T = /* @__PURE__ */ new Map();
      for (const x of I) T.set(x, [
        0,
        z,
        0,
        0,
        0,
        0
      ]);
      const B = {
        elasticities: new Map(d.map((x, i) => [
          i,
          l
        ])),
        elasticitiesOrthogonal: new Map(d.map((x, i) => [
          i,
          l
        ])),
        thicknesses: new Map(d.map((x, i) => [
          i,
          n
        ])),
        poissonsRatios: new Map(d.map((x, i) => [
          i,
          a
        ])),
        shearModuli: new Map(d.map((x, i) => [
          i,
          p
        ]))
      }, D = {
        supports: v,
        loads: T
      };
      try {
        const x = Lt(E, d, D, B), i = Yo(E, d, B, x), $ = E.map((F) => [
          F[0],
          0,
          F[1]
        ]);
        if (e.nodes.val = $, e.elements.val = d, x && x.deformations) {
          const F = /* @__PURE__ */ new Map();
          x.deformations.forEach((G, g) => {
            F.set(g, [
              G[0],
              G[2],
              G[1],
              G[3],
              G[5],
              G[4]
            ]);
          }), e.deformOutputs && (e.deformOutputs.val = {
            deformations: F
          });
        }
        if (e.nodeInputs) {
          const F = /* @__PURE__ */ new Map();
          v.forEach((g, S) => F.set(S, g));
          const G = /* @__PURE__ */ new Map();
          T.forEach((g, S) => G.set(S, [
            g[0],
            g[2],
            g[1],
            g[3],
            g[5],
            g[4]
          ])), e.nodeInputs && (e.nodeInputs.val = {
            supports: F,
            loads: G
          });
        }
        e.elementInputs && (e.elementInputs.val = {}), e.analyzeOutputs && (e.analyzeOutputs.val = {});
        let A = 0;
        x && x.deformations && x.deformations.forEach((F) => {
          const G = Math.sqrt(F[0] * F[0] + F[1] * F[1] + F[2] * F[2]);
          A = Math.max(A, G);
        }), console.log(`Viga Alta: ${E.length} nodos, ${d.length} triangulos`), console.log(`  L=${t}, H=${o}, t=${n}, E=${l}, nu=${a}`), console.log(`  Carga: q=${s} kN/m sobre ${r}m central`), console.log(`  max|u| = ${A.toExponential(4)}`);
      } catch (x) {
        console.warn("Viga Alta analysis failed:", x.message);
      }
      setTimeout(() => It(), 50), Ze();
    }
    function xs() {
      const t = le("H") || 4, o = le("B") || 3, n = le("tw") || 0.3, l = le("tb") || 0.4, a = le("meshSize") || 0.2, p = le("E") || 25e6, s = le("nu") || 0.2, r = p / (2 * (1 + s)), f = le("gamma") || 18, c = le("Ka") || 0.33, d = le("Es") || 5e4, m = le("nus") || 0.3, E = d / (2 * (1 + m)), w = le("kn") || 1e6, v = le("ks") || 1e4, u = le("gammaW") || 9.81, h = le("Hw") || 3.5, I = le("qs") || 0, z = xt, T = o * 0.3, B = o * 0.7, D = [
        [
          -T,
          0,
          0
        ],
        [
          B,
          0,
          0
        ],
        [
          B,
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
          -T,
          l,
          0
        ]
      ];
      let x = [], i = [], $ = /* @__PURE__ */ new Map(), A = /* @__PURE__ */ new Map(), F;
      if (z === 0) {
        const S = ho({
          points: D,
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
        x = S.nodes, i = S.elements;
        for (let C = 0; C < x.length; C++) Math.abs(x[C][1]) < 1e-6 && $.set(C, [
          true,
          true,
          true,
          true,
          true,
          true
        ]);
        const y = [];
        for (let C = 0; C < x.length; C++) {
          const X = x[C][0], U = x[C][1];
          Math.abs(X - n) < a * 0.6 && U >= l - 1e-6 && y.push({
            idx: C,
            y: U
          });
        }
        y.sort((C, X) => C.y - X.y);
        for (let C = 0; C < y.length; C++) {
          const { idx: X, y: U } = y[C], ae = l + t - U, Z = c * f * ae + c * I;
          let K = a;
          C > 0 && C < y.length - 1 ? K = (y[C + 1].y - y[C - 1].y) / 2 : C === 0 && y.length > 1 ? K = (y[1].y - y[0].y) / 2 : C === y.length - 1 && y.length > 1 && (K = (y[C].y - y[C - 1].y) / 2);
          const de = Z * K;
          Math.abs(de) > 1e-10 && A.set(X, [
            de,
            0,
            0,
            0,
            0,
            0
          ]);
        }
        F = {
          elasticities: new Map(i.map((C, X) => [
            X,
            p
          ])),
          elasticitiesOrthogonal: new Map(i.map((C, X) => [
            X,
            p
          ])),
          thicknesses: new Map(i.map((C, X) => [
            X,
            n
          ])),
          poissonsRatios: new Map(i.map((C, X) => [
            X,
            s
          ])),
          shearModuli: new Map(i.map((C, X) => [
            X,
            r
          ]))
        };
      } else if (z === 1 || z === 2) {
        const S = B, y = l + t;
        if (z === 2) {
          const C = [
            [
              -T,
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
              n,
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
              -T,
              l,
              0
            ]
          ], X = Math.max(3, Math.ceil((y - l) / a)), U = [];
          for (let ne = 0; ne <= X; ne++) U.push([
            n,
            l + ne * (y - l) / X,
            0
          ]);
          const ae = ho({
            points: [
              ...C,
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
            maxMeshSize: a
          });
          x = ae.nodes, i = ae.elements;
          const Z = a * 0.4, K = [];
          for (let ne = 0; ne < x.length; ne++) {
            const Ee = x[ne][0], je = x[ne][1];
            Math.abs(Ee - n) < Z && je >= l - Z && K.push(ne);
          }
          K.sort((ne, Ee) => x[ne][1] - x[Ee][1]);
          const de = [
            K[0]
          ];
          for (let ne = 1; ne < K.length; ne++) {
            const Ee = x[K[ne]][1] - x[de[de.length - 1]][1];
            Math.abs(Ee) > a * 0.05 && de.push(K[ne]);
          }
          K.length = 0, K.push(...de);
          const ie = /* @__PURE__ */ new Map();
          for (const ne of K) {
            const Ee = x.length;
            x.push([
              x[ne][0],
              x[ne][1],
              x[ne][2]
            ]), ie.set(ne, Ee);
          }
          const Ie = i.length, Re = [];
          for (let ne = 0; ne < Ie; ne++) {
            const Ee = i[ne], je = (x[Ee[0]][0] + x[Ee[1]][0] + x[Ee[2]][0]) / 3, rt = (x[Ee[0]][1] + x[Ee[1]][1] + x[Ee[2]][1]) / 3, ct = je >= -T && je <= B && rt >= 0 && rt <= l, At = je >= 0 && je <= n && rt >= l && rt <= l + t, _t = ct || At;
            if (Re.push(!_t), !_t) for (let Ft = 0; Ft < Ee.length; Ft++) {
              const Bt = ie.get(Ee[Ft]);
              Bt !== void 0 && (Ee[Ft] = Bt);
            }
          }
          const q = i.length;
          for (let ne = 0; ne < K.length - 1; ne++) {
            const Ee = K[ne], je = K[ne + 1], rt = ie.get(Ee), ct = ie.get(je);
            i.push([
              je,
              Ee,
              rt,
              ct
            ]);
          }
          const fe = i.length - q, oe = /* @__PURE__ */ new Map(), pe = /* @__PURE__ */ new Map(), Q = /* @__PURE__ */ new Map(), me = /* @__PURE__ */ new Map(), we = /* @__PURE__ */ new Map();
          for (let ne = 0; ne < Ie; ne++) Re[ne] ? (oe.set(ne, d), pe.set(ne, d), me.set(ne, m), we.set(ne, E), Q.set(ne, 1)) : (oe.set(ne, p), pe.set(ne, p), me.set(ne, s), we.set(ne, r), Q.set(ne, 1));
          for (let ne = q; ne < i.length; ne++) oe.set(ne, w), pe.set(ne, 0), me.set(ne, 0), we.set(ne, v), Q.set(ne, 0);
          F = {
            elasticities: oe,
            elasticitiesOrthogonal: pe,
            thicknesses: Q,
            poissonsRatios: me,
            shearModuli: we
          };
          for (let ne = 0; ne < x.length; ne++) {
            const Ee = x[ne][0], je = x[ne][1];
            Math.abs(je) < 1e-6 ? $.set(ne, [
              true,
              true,
              true,
              true,
              true,
              true
            ]) : Math.abs(Ee - S) < a * 0.1 && $.set(ne, [
              true,
              false,
              true,
              true,
              true,
              true
            ]);
          }
          for (let ne = 0; ne < Ie; ne++) {
            if (!Re[ne]) continue;
            const Ee = i[ne], je = x[Ee[0]], rt = x[Ee[1]], ct = x[Ee[2]], At = Math.abs((rt[0] - je[0]) * (ct[1] - je[1]) - (ct[0] - je[0]) * (rt[1] - je[1])) / 2, _t = -f * At / 3;
            for (const Ft of Ee) {
              const Bt = A.get(Ft) || [
                0,
                0,
                0,
                0,
                0,
                0
              ];
              Bt[1] += _t, A.set(Ft, Bt);
            }
          }
          if (I > 0) {
            const ne = [];
            for (let Ee = 0; Ee < x.length; Ee++) {
              const je = x[Ee][0], rt = x[Ee][1];
              Math.abs(rt - y) < a * 0.1 && je > n - 1e-6 && ne.push({
                idx: Ee,
                x: je
              });
            }
            ne.sort((Ee, je) => Ee.x - je.x);
            for (let Ee = 0; Ee < ne.length; Ee++) {
              let je = a;
              Ee > 0 && Ee < ne.length - 1 ? je = (ne[Ee + 1].x - ne[Ee - 1].x) / 2 : Ee === 0 && ne.length > 1 ? je = (ne[1].x - ne[0].x) / 2 : Ee === ne.length - 1 && ne.length > 1 && (je = (ne[Ee].x - ne[Ee - 1].x) / 2);
              const rt = -I * je, ct = A.get(ne[Ee].idx) || [
                0,
                0,
                0,
                0,
                0,
                0
              ];
              ct[1] += rt, A.set(ne[Ee].idx, ct);
            }
          }
          console.log(`  Interfaz Goodman: ${K.length} nodos interfaz, ${fe} elem interfaz, kn=${w}, ks=${v}`);
        } else {
          const C = [
            [
              -T,
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
              n,
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
              -T,
              l,
              0
            ]
          ], X = [
            [
              n,
              l,
              0
            ]
          ], U = ho({
            points: [
              ...C,
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
            maxMeshSize: a
          });
          x = U.nodes, i = U.elements;
          const ae = (q) => {
            const fe = (x[q[0]][0] + x[q[1]][0] + x[q[2]][0]) / 3, oe = (x[q[0]][1] + x[q[1]][1] + x[q[2]][1]) / 3, pe = fe >= -T && fe <= B && oe >= 0 && oe <= l, Q = fe >= 0 && fe <= n && oe >= l && oe <= l + t;
            return pe || Q;
          }, Z = /* @__PURE__ */ new Map(), K = /* @__PURE__ */ new Map(), de = /* @__PURE__ */ new Map(), ie = /* @__PURE__ */ new Map(), Ie = /* @__PURE__ */ new Map(), Re = [];
          for (let q = 0; q < i.length; q++) {
            const fe = ae(i[q]);
            Re.push(!fe), fe ? (Z.set(q, p), K.set(q, p), ie.set(q, s), Ie.set(q, r), de.set(q, 1)) : (Z.set(q, d), K.set(q, d), ie.set(q, m), Ie.set(q, E), de.set(q, 1));
          }
          F = {
            elasticities: Z,
            elasticitiesOrthogonal: K,
            thicknesses: de,
            poissonsRatios: ie,
            shearModuli: Ie
          };
          for (let q = 0; q < x.length; q++) {
            const fe = x[q][0], oe = x[q][1];
            Math.abs(oe) < 1e-6 ? $.set(q, [
              true,
              true,
              true,
              true,
              true,
              true
            ]) : Math.abs(fe - S) < a * 0.1 && $.set(q, [
              true,
              false,
              true,
              true,
              true,
              true
            ]);
          }
          for (let q = 0; q < i.length; q++) {
            if (!Re[q]) continue;
            const fe = i[q], oe = x[fe[0]], pe = x[fe[1]], Q = x[fe[2]], me = Math.abs((pe[0] - oe[0]) * (Q[1] - oe[1]) - (Q[0] - oe[0]) * (pe[1] - oe[1])) / 2, we = -f * me / 3;
            for (const ne of fe) {
              const Ee = A.get(ne) || [
                0,
                0,
                0,
                0,
                0,
                0
              ];
              Ee[1] += we, A.set(ne, Ee);
            }
          }
          if (I > 0) {
            const q = [];
            for (let fe = 0; fe < x.length; fe++) {
              const oe = x[fe][0], pe = x[fe][1];
              Math.abs(pe - y) < a * 0.1 && oe > n - 1e-6 && q.push({
                idx: fe,
                x: oe
              });
            }
            q.sort((fe, oe) => fe.x - oe.x);
            for (let fe = 0; fe < q.length; fe++) {
              let oe = a;
              fe > 0 && fe < q.length - 1 ? oe = (q[fe + 1].x - q[fe - 1].x) / 2 : fe === 0 && q.length > 1 ? oe = (q[1].x - q[0].x) / 2 : fe === q.length - 1 && q.length > 1 && (oe = (q[fe].x - q[fe - 1].x) / 2);
              const pe = -I * oe, Q = A.get(q[fe].idx) || [
                0,
                0,
                0,
                0,
                0,
                0
              ];
              Q[1] += pe, A.set(q[fe].idx, Q);
            }
          }
        }
      }
      if (z === 3) {
        const S = ho({
          points: D,
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
        x = S.nodes, i = S.elements;
        for (let ae = 0; ae < x.length; ae++) Math.abs(x[ae][1]) < 1e-6 && $.set(ae, [
          true,
          true,
          true,
          true,
          true,
          true
        ]);
        const y = l + t, C = Math.min(h, t), X = y - C, U = [];
        for (let ae = 0; ae < x.length; ae++) {
          const Z = x[ae][0], K = x[ae][1];
          Math.abs(Z - n) < a * 0.6 && K >= l - 1e-6 && U.push({
            idx: ae,
            y: K
          });
        }
        U.sort((ae, Z) => ae.y - Z.y);
        for (let ae = 0; ae < U.length; ae++) {
          const { idx: Z, y: K } = U[ae], de = Math.max(0, y - K);
          if (de <= 0 || K < X - 1e-6) continue;
          const ie = Math.min(de, C), Ie = u * ie;
          let Re = a;
          ae > 0 && ae < U.length - 1 ? Re = (U[ae + 1].y - U[ae - 1].y) / 2 : ae === 0 && U.length > 1 ? Re = (U[1].y - U[0].y) / 2 : ae === U.length - 1 && U.length > 1 && (Re = (U[ae].y - U[ae - 1].y) / 2);
          const q = Ie * Re;
          Math.abs(q) > 1e-10 && A.set(Z, [
            q,
            0,
            0,
            0,
            0,
            0
          ]);
        }
        F = {
          elasticities: new Map(i.map((ae, Z) => [
            Z,
            p
          ])),
          elasticitiesOrthogonal: new Map(i.map((ae, Z) => [
            Z,
            p
          ])),
          thicknesses: new Map(i.map((ae, Z) => [
            Z,
            n
          ])),
          poissonsRatios: new Map(i.map((ae, Z) => [
            Z,
            s
          ])),
          shearModuli: new Map(i.map((ae, Z) => [
            Z,
            r
          ]))
        };
      }
      const G = {
        supports: $,
        loads: A
      }, g = [
        "Rankine (Ka)",
        "Suelo continuo",
        "Interfaz",
        "Presion agua"
      ];
      try {
        const S = Lt(x, i, G, F), y = i.filter((de) => de.length === 3), C = {};
        for (const de of Object.keys(F)) {
          const ie = F[de];
          if (ie && ie instanceof Map) {
            const Ie = /* @__PURE__ */ new Map();
            let Re = 0;
            for (let q = 0; q < i.length; q++) i[q].length === 3 && (ie.has(q) && Ie.set(Re, ie.get(q)), Re++);
            C[de] = Ie;
          }
        }
        const X = Yo(x, y, C, S), U = x.map((de) => [
          de[0],
          0,
          de[1]
        ]);
        if (e.nodes.val = U, e.elements.val = y, S && S.deformations) {
          const de = /* @__PURE__ */ new Map();
          S.deformations.forEach((ie, Ie) => {
            de.set(Ie, [
              ie[0],
              ie[2],
              ie[1],
              ie[3],
              ie[5],
              ie[4]
            ]);
          }), e.deformOutputs && (e.deformOutputs.val = {
            deformations: de
          });
        }
        const ae = /* @__PURE__ */ new Map();
        $.forEach((de, ie) => ae.set(ie, de));
        const Z = /* @__PURE__ */ new Map();
        A.forEach((de, ie) => Z.set(ie, [
          de[0],
          de[2],
          de[1],
          de[3],
          de[5],
          de[4]
        ])), e.nodeInputs && (e.nodeInputs.val = {
          supports: ae,
          loads: Z
        }), e.elementInputs && (e.elementInputs.val = {}), e.analyzeOutputs && (e.analyzeOutputs.val = {});
        let K = 0;
        S && S.deformations && S.deformations.forEach((de) => {
          const ie = Math.sqrt(de[0] * de[0] + de[1] * de[1] + de[2] * de[2]);
          K = Math.max(K, ie);
        }), console.log(`Muro Contencion [${g[z]}]: ${x.length} nodos, ${i.length} triangulos`), console.log(`  H=${t}, B=${o}, tw=${n}, tb=${l}, Ka=${c}, gamma=${f}, qs=${I}`), z === 1 && console.log(`  Es=${d}, nus=${m}`), z === 2 && console.log(`  Es=${d}, nus=${m}, kn=${w}, ks=${v}`), z === 3 && console.log(`  gammaW=${u}, Hw=${h}`), console.log(`  max|u| = ${K.toExponential(4)}`);
      } catch (S) {
        console.warn("Muro Contencion failed:", S.message);
      }
      setTimeout(() => It(), 50), Ze();
    }
    function vs() {
      const t = le("Lx") || 2, o = le("Ly") || 2, n = le("t") || 0.5, l = le("colA") || 0.4, a = le("colH") || 1.5, p = Math.round(le("nx") || 8), s = Math.round(le("ny") || 8), r = le("E") || 25e6, f = le("nu") || 0.2, c = le("P") || -500, d = le("Mx") || 0, m = le("My") || 0, E = le("ks") || 2e4, w = t / p, v = o / s, u = t / 2, h = o / 2, I = l / 2, z = [];
      for (let $ = 0; $ <= s; $++) for (let A = 0; A <= p; A++) {
        const F = $ * (p + 1) + A;
        let G = w, g = v;
        (A === 0 || A === p) && (G = w / 2), ($ === 0 || $ === s) && (g = v / 2), z.push({
          node: F,
          dof: 0,
          k: E * G * g
        });
      }
      let T = 0;
      for (let $ = 0; $ <= s; $++) for (let A = 0; A <= p; A++) Math.abs(A * w - u) <= I + 1e-6 && Math.abs($ * v - h) <= I + 1e-6 && T++;
      const B = c / Math.max(T, 1), D = [];
      for (let $ = 0; $ <= s; $++) for (let A = 0; A <= p; A++) {
        const F = A * w, G = $ * v;
        Math.abs(F - u) <= I + 1e-6 && Math.abs(G - h) <= I + 1e-6 && D.push({
          node: $ * (p + 1) + A,
          dof: 0,
          value: B
        });
      }
      if (Math.abs(d) > 1e-6) {
        const $ = I > 1e-6 ? I : v, A = d / $;
        for (let F = 0; F <= s; F++) for (let G = 0; G <= p; G++) {
          const g = G * w, S = F * v;
          if (Math.abs(g - u) <= I + 1e-6 && Math.abs(S - h) <= I + 1e-6) {
            const y = S - h;
            if (Math.abs(y) > 1e-6) {
              const C = y > 0 ? 1 : -1;
              D.push({
                node: F * (p + 1) + G,
                dof: 0,
                value: C * A / T * 2
              });
            }
          }
        }
      }
      if (Math.abs(m) > 1e-6) {
        const $ = I > 1e-6 ? I : w, A = m / $;
        for (let F = 0; F <= s; F++) for (let G = 0; G <= p; G++) {
          const g = G * w, S = F * v;
          if (Math.abs(g - u) <= I + 1e-6 && Math.abs(S - h) <= I + 1e-6) {
            const y = g - u;
            if (Math.abs(y) > 1e-6) {
              const C = y > 0 ? 1 : -1;
              D.push({
                node: F * (p + 1) + G,
                dof: 0,
                value: C * A / T * 2
              });
            }
          }
        }
      }
      const i = {
        1: 2,
        2: 1,
        3: 0
      }[Le] ?? 1;
      console.log(`Zapata: ${t}x${o}m, t=${n}m, ${p}x${s} elem`), console.log(`  col=${l}m, P=${c}, Mx=${d}, My=${m}, ks=${E}`);
      try {
        const $ = Un({
          E: r,
          nu: f,
          thickness: n,
          meshLx: t,
          meshLy: o,
          meshNx: p,
          meshNy: s,
          bcType: "none",
          pressure: 0,
          theoryType: i,
          springs: z,
          pointLoads: D
        });
        console.log(`  Solved: w_max = ${$.maxW.toExponential(4)}`);
        const A = $.nodeResults.map((X) => [
          X.x,
          X.y,
          0
        ]), F = A.length;
        A.push([
          u - I,
          h - I,
          0
        ]), A.push([
          u + I,
          h - I,
          0
        ]), A.push([
          u + I,
          h + I,
          0
        ]), A.push([
          u - I,
          h + I,
          0
        ]), A.push([
          u - I,
          h - I,
          a
        ]), A.push([
          u + I,
          h - I,
          a
        ]), A.push([
          u + I,
          h + I,
          a
        ]), A.push([
          u - I,
          h + I,
          a
        ]);
        const G = $.elementResults.map((X) => [
          ...X.nodes
        ]);
        G.push([
          F,
          F + 4
        ]), G.push([
          F + 1,
          F + 5
        ]), G.push([
          F + 2,
          F + 6
        ]), G.push([
          F + 3,
          F + 7
        ]), G.push([
          F + 4,
          F + 5
        ]), G.push([
          F + 5,
          F + 6
        ]), G.push([
          F + 6,
          F + 7
        ]), G.push([
          F + 7,
          F + 4
        ]), G.push([
          F,
          F + 1
        ]), G.push([
          F + 1,
          F + 2
        ]), G.push([
          F + 2,
          F + 3
        ]), G.push([
          F + 3,
          F
        ]), e.nodes.val = A, e.elements.val = G;
        const g = /* @__PURE__ */ new Map();
        $.nodeResults.forEach((X, U) => {
          g.set(U, [
            0,
            0,
            X.w,
            X.bx,
            X.by,
            0
          ]);
        }), e.deformOutputs && (e.deformOutputs.val = {
          deformations: g
        });
        const S = /* @__PURE__ */ new Map();
        $.nodeResults.forEach((X, U) => {
          const ae = X.x, Z = X.y;
          (ae < 1e-6 || ae > t - 1e-6 || Z < 1e-6 || Z > o - 1e-6) && S.set(U, [
            false,
            false,
            true,
            false,
            false,
            false
          ]);
        });
        const y = /* @__PURE__ */ new Map();
        if (y.set(F + 4, [
          0,
          0,
          c / 4,
          0,
          0,
          0
        ]), y.set(F + 5, [
          0,
          0,
          c / 4,
          0,
          0,
          0
        ]), y.set(F + 6, [
          0,
          0,
          c / 4,
          0,
          0,
          0
        ]), y.set(F + 7, [
          0,
          0,
          c / 4,
          0,
          0,
          0
        ]), e.nodeInputs && (e.nodeInputs.val = {
          supports: S,
          loads: y
        }), e.elementInputs && (e.elementInputs.val = {}), e.analyzeOutputs) {
          const X = $.elementResults.length, U = /* @__PURE__ */ new Map(), ae = /* @__PURE__ */ new Map(), Z = /* @__PURE__ */ new Map();
          $.elementResults.forEach((K, de) => {
            U.set(de, [
              K.Mxx,
              K.Mxx,
              K.Mxx
            ]), ae.set(de, [
              K.Myy,
              K.Myy,
              K.Myy
            ]), Z.set(de, [
              K.Mxy,
              K.Mxy,
              K.Mxy
            ]);
          }), e.analyzeOutputs.val = {
            bendingXX: U,
            bendingYY: ae,
            bendingXY: Z
          };
        }
        const C = et();
        C && (C.settings.shellResults.val = "bendingXX");
      } catch ($) {
        console.warn("Zapata solver failed:", $.message);
      }
      setTimeout(() => It(), 50), Ze();
    }
    function ys() {
      const t = le("Lx") || 0.4, o = le("Ly") || 0.4, n = le("t") || 0.025, l = le("dBolt") || 0.022, a = le("sx") || 0.28, p = le("sy") || 0.28, s = le("colA") || 0.2, r = le("meshSize") || 8e-3, f = le("E") || 2e8, c = le("nu") || 0.3, d = f / (2 * (1 + c)), m = le("P") || -200, E = Math.round(le("nBolts") || 4), w = t / 2, v = o / 2, u = l / 2, h = s / 2, I = [];
      E >= 4 && (I.push([
        w - a / 2,
        v - p / 2
      ]), I.push([
        w + a / 2,
        v - p / 2
      ]), I.push([
        w + a / 2,
        v + p / 2
      ]), I.push([
        w - a / 2,
        v + p / 2
      ])), E >= 6 && (I.push([
        w,
        v - p / 2
      ]), I.push([
        w,
        v + p / 2
      ])), E >= 8 && (I.push([
        w - a / 2,
        v
      ]), I.push([
        w + a / 2,
        v
      ]));
      const { nodes: z, elements: T } = ho({
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
        maxMeshSize: r
      }), B = (g, S) => {
        for (const [y, C] of I) if ((g - y) * (g - y) + (S - C) * (S - C) < u * u) return true;
        return false;
      }, D = T.filter((g) => {
        const S = (z[g[0]][0] + z[g[1]][0] + z[g[2]][0]) / 3, y = (z[g[0]][1] + z[g[1]][1] + z[g[2]][1]) / 3;
        return !B(S, y);
      }), x = z, i = /* @__PURE__ */ new Map();
      for (let g = 0; g < x.length; g++) {
        const S = x[g][0], y = x[g][1];
        for (const [C, X] of I) {
          const U = Math.sqrt((S - C) * (S - C) + (y - X) * (y - X));
          U >= u * 0.7 && U <= u * 1.5 && i.set(g, [
            true,
            true,
            true,
            false,
            false,
            false
          ]);
        }
      }
      const $ = /* @__PURE__ */ new Map();
      let A = 0;
      for (let g = 0; g < x.length; g++) {
        const S = x[g][0], y = x[g][1];
        Math.abs(S - w) <= h && Math.abs(y - v) <= h && A++;
      }
      const F = m / Math.max(A, 1);
      for (let g = 0; g < x.length; g++) {
        const S = x[g][0], y = x[g][1];
        if (Math.abs(S - w) <= h && Math.abs(y - v) <= h) {
          const C = $.get(g) || [
            0,
            0,
            0,
            0,
            0,
            0
          ];
          C[2] += F, $.set(g, C);
        }
      }
      const G = {
        elasticities: new Map(D.map((g, S) => [
          S,
          f
        ])),
        elasticitiesOrthogonal: new Map(D.map((g, S) => [
          S,
          f
        ])),
        thicknesses: new Map(D.map((g, S) => [
          S,
          n
        ])),
        poissonsRatios: new Map(D.map((g, S) => [
          S,
          c
        ])),
        shearModuli: new Map(D.map((g, S) => [
          S,
          d
        ]))
      };
      console.log(`Placa Base: ${t * 1e3}x${o * 1e3}mm, t=${n * 1e3}mm, ${E} pernos d=${l * 1e3}mm`), console.log(`  P=${m} kN, col=${s * 1e3}mm, mesh=${r * 1e3}mm`), console.log(`  ${D.length} triangulos, ${x.length} nodos`);
      try {
        const g = Lt(x, D, {
          supports: i,
          loads: $
        }, G), S = Yo(x, D, G, g);
        e.nodes.val = x, e.elements.val = D, g && e.deformOutputs && (e.deformOutputs.val = g), e.nodeInputs && (e.nodeInputs.val = {
          supports: i,
          loads: $
        }), e.elementInputs && (e.elementInputs.val = {}), S && e.analyzeOutputs && (e.analyzeOutputs.val = S);
        let y = 0;
        g && g.deformations && g.deformations.forEach((C) => {
          const X = Math.sqrt(C[0] * C[0] + C[1] * C[1] + C[2] * C[2]);
          y = Math.max(y, X);
        }), console.log(`  max|u| = ${y.toExponential(4)}`);
      } catch (g) {
        console.warn("Placa Base failed:", g.message);
      }
      setTimeout(() => It(), 50), Ze();
    }
    function $s() {
      const t = le("colB") || 0.3, o = le("colH") || 0.3, n = le("colT") || 8e-3, l = le("colLen") || 1.5, a = le("Lx") || 0.45, p = le("Ly") || 0.45, s = le("tPlaca") || 0.025, r = le("dBolt") || 0.022, f = le("sx") || 0.32, c = le("sy") || 0.32, d = Math.round(le("nSubColV") || 6), m = Math.round(le("nSubColH") || 4), E = Math.round(le("nSubPlaca") || 10), w = le("E") || 2e8, v = le("nu") || 0.3, u = w / (2 * (1 + v)), h = le("P") || -300, I = a / 2, z = p / 2, T = r / 2, B = t / 2, D = o / 2, x = [], i = [], $ = E, A = a / $, F = p / $, G = (pe, Q) => Q * ($ + 1) + pe;
      for (let pe = 0; pe <= $; pe++) for (let Q = 0; Q <= $; Q++) x.push([
        Q * A,
        pe * F,
        0
      ]);
      const g = [
        [
          I - f / 2,
          z - c / 2
        ],
        [
          I + f / 2,
          z - c / 2
        ],
        [
          I + f / 2,
          z + c / 2
        ],
        [
          I - f / 2,
          z + c / 2
        ]
      ], S = (pe, Q) => {
        for (const [me, we] of g) if ((pe - me) * (pe - me) + (Q - we) * (Q - we) < T * T) return true;
        return false;
      }, y = i.length;
      for (let pe = 0; pe < $; pe++) for (let Q = 0; Q < $; Q++) {
        const me = (Q + 0.5) * A, we = (pe + 0.5) * F;
        S(me, we) || i.push([
          G(Q, pe),
          G(Q + 1, pe),
          G(Q + 1, pe + 1),
          G(Q, pe + 1)
        ]);
      }
      const C = i.length - y, X = d, U = m, ae = [
        [
          I - B,
          z - D
        ],
        [
          I + B,
          z - D
        ],
        [
          I + B,
          z + D
        ],
        [
          I - B,
          z + D
        ]
      ], Z = i.length, K = [
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
      ], de = (pe, Q) => {
        for (let me = 0; me < ($ + 1) * ($ + 1); me++) if (Math.abs(x[me][0] - pe) < A * 0.3 && Math.abs(x[me][1] - Q) < F * 0.3 && Math.abs(x[me][2]) < 1e-6) return me;
        return -1;
      };
      for (const [pe, Q] of K) {
        const [me, we] = ae[pe], [ne, Ee] = ae[Q], je = [];
        for (let rt = 0; rt <= X; rt++) {
          const ct = [], At = rt / X * l;
          for (let _t = 0; _t <= U; _t++) {
            const Ft = _t / U, Bt = me + Ft * (ne - me), So = we + Ft * (Ee - we);
            if (rt === 0) {
              const Vt = de(Bt, So);
              if (Vt >= 0) {
                ct.push(Vt);
                continue;
              }
            }
            let ao = -1;
            for (let Vt = 0; Vt < x.length; Vt++) if (Math.abs(x[Vt][0] - Bt) < 1e-6 && Math.abs(x[Vt][1] - So) < 1e-6 && Math.abs(x[Vt][2] - At) < 1e-6) {
              ao = Vt;
              break;
            }
            ao >= 0 ? ct.push(ao) : (ct.push(x.length), x.push([
              Bt,
              So,
              At
            ]));
          }
          je.push(ct);
        }
        for (let rt = 0; rt < X; rt++) for (let ct = 0; ct < U; ct++) i.push([
          je[rt][ct],
          je[rt][ct + 1],
          je[rt + 1][ct + 1],
          je[rt + 1][ct]
        ]);
      }
      const ie = i.length - Z, Ie = /* @__PURE__ */ new Map();
      for (let pe = 0; pe < ($ + 1) * ($ + 1); pe++) {
        const Q = x[pe][0], me = x[pe][1];
        for (const [we, ne] of g) {
          const Ee = Math.sqrt((Q - we) * (Q - we) + (me - ne) * (me - ne));
          Ee >= T * 0.5 && Ee <= T * 2 && Ie.set(pe, [
            true,
            true,
            true,
            true,
            true,
            true
          ]);
        }
      }
      const Re = /* @__PURE__ */ new Map(), q = [];
      for (let pe = 0; pe < x.length; pe++) Math.abs(x[pe][2] - l) < 1e-6 && q.push(pe);
      const fe = h / Math.max(q.length, 1);
      for (const pe of q) Re.set(pe, [
        0,
        0,
        fe,
        0,
        0,
        0
      ]);
      const oe = {
        elasticities: /* @__PURE__ */ new Map(),
        poissonsRatios: /* @__PURE__ */ new Map(),
        thicknesses: /* @__PURE__ */ new Map(),
        shearModuli: /* @__PURE__ */ new Map()
      };
      for (let pe = y; pe < y + C; pe++) oe.elasticities.set(pe, w), oe.poissonsRatios.set(pe, v), oe.thicknesses.set(pe, s), oe.shearModuli.set(pe, u);
      for (let pe = Z; pe < Z + ie; pe++) oe.elasticities.set(pe, w), oe.poissonsRatios.set(pe, v), oe.thicknesses.set(pe, n), oe.shearModuli.set(pe, u);
      console.log(`Col+Placa 3D: col ${t * 1e3}x${o * 1e3}x${n * 1e3}mm, h=${l}m`), console.log(`  Placa ${a * 1e3}x${p * 1e3}mm, t=${s * 1e3}mm, 4 pernos d=${r * 1e3}mm`), console.log(`  ${C} Q4 placa + ${ie} Q4 columna = ${i.length} total`), console.log(`  ${x.length} nodos, P=${h} kN`);
      try {
        const pe = Lt(x, i, {
          supports: Ie,
          loads: Re
        }, oe), Q = Yo(x, i, oe, pe);
        e.nodes.val = x, e.elements.val = i, pe && e.deformOutputs && (e.deformOutputs.val = pe), e.nodeInputs && (e.nodeInputs.val = {
          supports: Ie,
          loads: Re
        }), e.elementInputs && (e.elementInputs.val = oe), Q && e.analyzeOutputs && (e.analyzeOutputs.val = Q);
        let me = 0;
        (pe == null ? void 0 : pe.deformations) && pe.deformations.forEach((we) => {
          const ne = Math.sqrt(we[0] * we[0] + we[1] * we[1] + we[2] * we[2]);
          me = Math.max(me, ne);
        }), console.log(`  max|u| = ${me.toExponential(4)}`);
      } catch (pe) {
        console.warn("Col+Placa failed:", pe.message), e.nodes.val = x, e.elements.val = i, e.nodeInputs && (e.nodeInputs.val = {
          supports: Ie,
          loads: Re
        });
      }
      setTimeout(() => It(), 50), Ze();
    }
    function Ms() {
      const t = le("H") || 6, o = le("angle") || 45, n = le("bTop") || 3, l = le("bBot") || 3, a = le("meshSize") || 2, p = le("E") || 5e4, s = le("nu") || 0.3, r = le("gamma") || 18, f = le("c") || 15, c = le("phi") || 30, d = le("qs") || 0, m = t / Math.tan(o * Math.PI / 180), E = l + m + n, w = t, v = [
        [
          0,
          -w,
          0
        ],
        [
          E,
          -w,
          0
        ],
        [
          E,
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
      ], { nodes: u, elements: h } = ho({
        points: v,
        polygon: [
          0,
          1,
          2,
          3,
          4,
          5
        ],
        maxMeshSize: a
      }), I = u, z = [], T = /* @__PURE__ */ new Map();
      for (let D = 0; D < I.length; D++) {
        const x = I[D][0], i = I[D][1];
        Math.abs(i + w) < 1e-6 ? (z.push({
          node: D,
          fixX: true,
          fixY: true
        }), T.set(D, [
          true,
          true,
          true,
          true,
          true,
          true
        ])) : (Math.abs(x) < 1e-6 || Math.abs(x - E) < 1e-6) && (z.push({
          node: D,
          fixX: true,
          fixY: false
        }), T.set(D, [
          true,
          false,
          true,
          true,
          true,
          true
        ]));
      }
      const B = t - a * 0.3;
      try {
        const D = I.map((S) => [
          S[0],
          S[1]
        ]), x = h.map((S) => [
          S[0],
          S[1],
          S[2]
        ]), i = il({
          nodes: D,
          elements: x,
          E: p,
          nu: s,
          gamma: r,
          c: f,
          phi: c,
          thickness: 1,
          supports: z,
          surcharge: d,
          surfaceYThreshold: B
        }), $ = I.map((S) => [
          S[0],
          0,
          S[1]
        ]);
        e.nodes.val = $, e.elements.val = h;
        const A = /* @__PURE__ */ new Map();
        for (let S = 0; S < i.displacements.length; S++) {
          const [y, C] = i.displacements[S];
          A.set(S, [
            y,
            0,
            C,
            0,
            0,
            0
          ]);
        }
        e.deformOutputs && (e.deformOutputs.val = {
          deformations: A
        }), e.nodeInputs && (e.nodeInputs.val = {
          supports: T
        }), e.elementInputs && (e.elementInputs.val = {});
        const F = /* @__PURE__ */ new Map();
        for (let S = 0; S < i.plasticStrain.length; S++) {
          const y = i.plasticStrain[S];
          F.set(S, [
            y,
            y,
            y
          ]);
        }
        e.analyzeOutputs && (e.analyzeOutputs.val = {
          membraneXX: F
        });
        let G = 0;
        for (const [S, y] of i.displacements) {
          const C = Math.sqrt(S * S + y * y);
          G = Math.max(G, C);
        }
        let g = 0;
        for (const S of i.plasticStrain) g = Math.max(g, S);
        console.log(`Talud SRM: ${I.length} nodos, ${h.length} triangulos`), console.log(`  H=${t}, angulo=${o}\xB0, c=${f} kPa, \u03C6=${c}\xB0, \u03B3=${r}`), console.log("  \u2550\u2550\u2550 Strength Reduction Method (Mohr-Coulomb) \u2550\u2550\u2550"), console.log(`  FOS = ${i.fos.toFixed(3)}`), console.log(`  max|u| = ${G.toExponential(4)}`), console.log(`  max \u03B5_pl = ${g.toExponential(4)}`), i.fos < 1 ? console.warn("  \u26A0 TALUD INESTABLE (FOS < 1.0)") : i.fos < 1.5 && console.warn("  \u26A0 FOS < 1.5 \u2014 revisar estabilidad");
      } catch (D) {
        console.warn("Talud SRM failed:", D.message);
      }
      setTimeout(() => It(), 50), Ze();
    }
    let io = null, Tt = null, co = null;
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
    function $t(t) {
      const o = Vo.find((n) => n.id === P);
      return t / o.toM;
    }
    function Mt(t) {
      const o = Vo.find((n) => n.id === P);
      return t * o.toM;
    }
    function ko(t) {
      const o = ts.find((l) => l.id === Y.forceId), n = Vo.find((l) => l.id === Y.lengthId);
      return t / (o.toKN / (n.toM * n.toM));
    }
    function Tn(t) {
      const o = ts.find((l) => l.id === Y.forceId), n = Vo.find((l) => l.id === Y.lengthId);
      return t * (o.toKN / (n.toM * n.toM));
    }
    function zn() {
      return Y.label;
    }
    function ya() {
      switch (Vo.find((o) => o.id === P).id) {
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
      const t = ko(20594), o = ko(58840), n = Math.max(1, Math.round((o - t) / 40));
      return [
        Math.round(t),
        Math.round(o),
        n
      ];
    }
    function ws(t, o, n, l, a) {
      const p = Ne.steelVigaType, s = p === 0 ? mn() : bn();
      if (Ne.vigaMat === 0) {
        for (let r = 0; r < o.length; r++) {
          const f = o[r], c = `b${n}${r}`, d = `h${n}${r}`, m = {};
          m[c] = +$t(f.b).toFixed(2), m[d] = +$t(f.h).toFixed(2), t.addBinding(m, c, {
            min: l[0],
            max: l[1],
            step: l[2],
            label: `b sv${n}${r + 1}`
          }), t.addBinding(m, d, {
            min: l[0],
            max: l[1],
            step: l[2],
            label: `h sv${n}${r + 1}`
          });
        }
        t.on("change", (r) => {
          var _a2;
          const f = (_a2 = r.target) == null ? void 0 : _a2.key, c = f == null ? void 0 : f.match(new RegExp(`^b${n}(\\d+)$`)), d = f == null ? void 0 : f.match(new RegExp(`^h${n}(\\d+)$`));
          c && (o[parseInt(c[1])].b = Mt(r.value), Pe()), d && (o[parseInt(d[1])].h = Mt(r.value), Pe());
        });
      } else if (p <= 1) {
        for (let r = 0; r < o.length; r++) {
          const f = {};
          f[`p${n}${r}`] = o[r].profileIdx ?? 0, t.addBinding(f, `p${n}${r}`, {
            label: `sv${n}${r + 1}`,
            options: s
          });
        }
        t.on("change", (r) => {
          var _a2, _b;
          const c = (_b = (_a2 = r.target) == null ? void 0 : _a2.key) == null ? void 0 : _b.match(new RegExp(`^p${n}(\\d+)$`));
          c && (o[parseInt(c[1])].profileIdx = r.value, Pe());
        });
      } else if (p === 2) {
        for (let r = 0; r < o.length; r++) {
          const f = o[r], c = {}, d = `${n}${r}`;
          c[`bf${d}`] = +$t(f.bf ?? 0.2).toFixed(3), c[`h${d}`] = +$t(f.hf ?? 0.4).toFixed(3), c[`tf${d}`] = +$t(f.tf ?? 0.015).toFixed(3), c[`tw${d}`] = +$t(f.tw ?? 0.01).toFixed(3), t.addBinding(c, `bf${d}`, {
            min: l[0],
            max: l[1],
            step: l[2],
            label: `bf sv${n}${r + 1}`
          }), t.addBinding(c, `h${d}`, {
            min: l[0],
            max: l[1],
            step: l[2],
            label: `h sv${n}${r + 1}`
          }), t.addBinding(c, `tf${d}`, {
            min: a[0],
            max: a[1],
            step: a[2],
            label: `tf sv${n}${r + 1}`
          }), t.addBinding(c, `tw${d}`, {
            min: a[0],
            max: a[1],
            step: a[2],
            label: `tw sv${n}${r + 1}`
          });
        }
        t.on("change", (r) => {
          var _a2;
          const f = (_a2 = r.target) == null ? void 0 : _a2.key;
          for (let c = 0; c < o.length; c++) {
            const d = `${n}${c}`;
            f === `bf${d}` && (o[c].bf = Mt(r.value), Pe()), f === `h${d}` && (o[c].hf = Mt(r.value), Pe()), f === `tf${d}` && (o[c].tf = Mt(r.value), Pe()), f === `tw${d}` && (o[c].tw = Mt(r.value), Pe());
          }
        });
      } else {
        for (let r = 0; r < o.length; r++) {
          const f = o[r], c = {}, d = `${n}${r}`;
          c[`bc${d}`] = +$t(f.bc ?? 0.2).toFixed(3), c[`hc${d}`] = +$t(f.hc ?? 0.3).toFixed(3), c[`t${d}`] = +$t(f.t ?? 8e-3).toFixed(3), t.addBinding(c, `bc${d}`, {
            min: l[0],
            max: l[1],
            step: l[2],
            label: `b sv${n}${r + 1}`
          }), t.addBinding(c, `hc${d}`, {
            min: l[0],
            max: l[1],
            step: l[2],
            label: `h sv${n}${r + 1}`
          }), t.addBinding(c, `t${d}`, {
            min: a[0],
            max: a[1],
            step: a[2],
            label: `t sv${n}${r + 1}`
          });
        }
        t.on("change", (r) => {
          var _a2;
          const f = (_a2 = r.target) == null ? void 0 : _a2.key;
          for (let c = 0; c < o.length; c++) {
            const d = `${n}${c}`;
            f === `bc${d}` && (o[c].bc = Mt(r.value), Pe()), f === `hc${d}` && (o[c].hc = Mt(r.value), Pe()), f === `t${d}` && (o[c].t = Mt(r.value), Pe());
          }
        });
      }
    }
    function Oo() {
      var _a2;
      if (Tt) {
        try {
          Tt.dispose();
        } catch {
        }
        Tt = null;
      }
      const t = document.getElementById("sections");
      if (t && (t.innerHTML = ""), k !== "edificio" && k !== "frame") {
        t && (t.style.display = "none");
        return;
      }
      const o = va();
      if (!o) return;
      o.style.display = "";
      const n = M, l = Math.round(((_a2 = se.nPisos) == null ? void 0 : _a2.val) ?? 3), a = ya(), p = $a(), s = re.length || 1, r = te.length || 1;
      for (; Ne.perFloor.length < l; ) {
        const x = Ne.perFloor.length > 0 ? JSON.parse(JSON.stringify(Ne.perFloor[Ne.perFloor.length - 1])) : ro(s, r);
        Ne.perFloor.push(x);
      }
      Ne.perFloor.length > l && (Ne.perFloor.length = l);
      for (const x of Ne.perFloor) {
        for (; x.vigasX.length < s; ) x.vigasX.push(x.vigasX.length > 0 ? {
          ...x.vigasX[x.vigasX.length - 1]
        } : ut());
        for (x.vigasX.length > s && (x.vigasX.length = s); x.vigasY.length < r; ) x.vigasY.push(x.vigasY.length > 0 ? {
          ...x.vigasY[x.vigasY.length - 1]
        } : ut());
        x.vigasY.length > r && (x.vigasY.length = r);
      }
      Tt = new on({
        title: `Sections (${n.label})`,
        container: o
      });
      const f = {
        colMat: Ne.colMat
      };
      if (Tt.addBinding(f, "colMat", {
        label: "Col Material",
        options: {
          Hormigon: 0,
          Acero: 1,
          CFT: 2
        }
      }).on("change", (x) => {
        Ne.colMat = x.value, Oo(), Pe();
      }), Ne.colMat === 0) {
        const x = {
          forma: Ne.colShape
        };
        Tt.addBinding(x, "forma", {
          label: "Col forma",
          options: {
            Rectangular: 0,
            Circular: 1
          }
        }).on("change", ($) => {
          Ne.colShape = $.value, Oo(), Pe();
        });
        const i = {
          fc: +ko(Ne.fc).toFixed(1)
        };
        Tt.addBinding(i, "fc", {
          min: p[0],
          max: p[1],
          step: p[2],
          label: `f'c col (${zn()})`
        }), Tt.on("change", ($) => {
          var _a3;
          ((_a3 = $.target) == null ? void 0 : _a3.key) === "fc" && (Ne.fc = Tn($.value), Pe());
        });
      } else if (Ne.colMat === 1) {
        const x = {
          colType: Ne.steelColType
        };
        Tt.addBinding(x, "colType", {
          label: "Col tipo",
          options: {
            "W profile": 0,
            "HSS profile": 1,
            "I param": 2,
            Tubular: 3
          }
        }).on("change", (i) => {
          Ne.steelColType = i.value, Oo(), Pe();
        });
      }
      Tt.addBlade({
        view: "separator"
      });
      const c = {
        vigaMat: Ne.vigaMat
      };
      if (Tt.addBinding(c, "vigaMat", {
        label: "Viga Material",
        options: {
          Hormigon: 0,
          Acero: 1
        }
      }).on("change", (x) => {
        Ne.vigaMat = x.value, Oo(), Pe();
      }), Ne.vigaMat === 1) {
        const x = {
          vigaType: Ne.steelVigaType
        };
        Tt.addBinding(x, "vigaType", {
          label: "Viga tipo",
          options: {
            "W profile": 0,
            "HSS profile": 1,
            "I param": 2,
            Tubular: 3
          }
        }).on("change", (i) => {
          Ne.steelVigaType = i.value, Oo(), Pe();
        });
      }
      const d = Ne.steelColType === 0 ? mn() : bn();
      Ne.steelVigaType === 0 ? mn() : bn();
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
        const i = Ne.perFloor[x], $ = Tt.addFolder({
          title: `Piso ${x + 1}`,
          expanded: x < 2
        });
        if (Ne.colMat === 0) if (Ne.colShape === 1) {
          const A = {
            dCol: +$t(i.dCol).toFixed(2)
          };
          $.addBinding(A, "dCol", {
            min: a[0],
            max: a[1],
            step: a[2],
            label: "d col"
          }), $.on("change", (F) => {
            var _a3;
            ((_a3 = F.target) == null ? void 0 : _a3.key) === "dCol" && (i.dCol = Mt(F.value), Pe());
          });
        } else {
          const A = {
            bCol: +$t(i.bCol).toFixed(2),
            hCol: +$t(i.hCol).toFixed(2)
          };
          $.addBinding(A, "bCol", {
            min: a[0],
            max: a[1],
            step: a[2],
            label: "b col"
          }), $.addBinding(A, "hCol", {
            min: a[0],
            max: a[1],
            step: a[2],
            label: "h col"
          }), $.on("change", (F) => {
            var _a3, _b;
            ((_a3 = F.target) == null ? void 0 : _a3.key) === "bCol" && (i.bCol = Mt(F.value), Pe()), ((_b = F.target) == null ? void 0 : _b.key) === "hCol" && (i.hCol = Mt(F.value), Pe());
          });
        }
        else if (Ne.colMat === 1) if (Ne.steelColType <= 1) {
          const A = {
            col: i.colProfileIdx
          };
          $.addBinding(A, "col", {
            label: "Columna",
            options: d
          }).on("change", (F) => {
            i.colProfileIdx = F.value, Pe();
          });
        } else if (Ne.steelColType === 2) {
          const A = {
            bf: +$t(i.colBf ?? 0.3).toFixed(3),
            h: +$t(i.colHf ?? 0.3).toFixed(3),
            tf: +$t(i.colTf ?? 0.02).toFixed(3),
            tw: +$t(i.colTw ?? 0.012).toFixed(3)
          };
          $.addBinding(A, "bf", {
            min: a[0],
            max: a[1],
            step: a[2],
            label: "Col bf"
          }), $.addBinding(A, "h", {
            min: a[0],
            max: a[1],
            step: a[2],
            label: "Col h"
          }), $.addBinding(A, "tf", {
            min: m[0],
            max: m[1],
            step: m[2],
            label: "Col tf"
          }), $.addBinding(A, "tw", {
            min: m[0],
            max: m[1],
            step: m[2],
            label: "Col tw"
          }), $.on("change", (F) => {
            var _a3, _b, _c, _d;
            ((_a3 = F.target) == null ? void 0 : _a3.key) === "bf" && (i.colBf = Mt(F.value), Pe()), ((_b = F.target) == null ? void 0 : _b.key) === "h" && (i.colHf = Mt(F.value), Pe()), ((_c = F.target) == null ? void 0 : _c.key) === "tf" && (i.colTf = Mt(F.value), Pe()), ((_d = F.target) == null ? void 0 : _d.key) === "tw" && (i.colTw = Mt(F.value), Pe());
          });
        } else {
          const A = {
            bc: +$t(i.colBc ?? 0.3).toFixed(3),
            hc: +$t(i.colHc ?? 0.3).toFixed(3),
            t: +$t(i.colT ?? 0.01).toFixed(3)
          };
          $.addBinding(A, "bc", {
            min: a[0],
            max: a[1],
            step: a[2],
            label: "Col b"
          }), $.addBinding(A, "hc", {
            min: a[0],
            max: a[1],
            step: a[2],
            label: "Col h"
          }), $.addBinding(A, "t", {
            min: m[0],
            max: m[1],
            step: m[2],
            label: "Col t"
          }), $.on("change", (F) => {
            var _a3, _b, _c;
            ((_a3 = F.target) == null ? void 0 : _a3.key) === "bc" && (i.colBc = Mt(F.value), Pe()), ((_b = F.target) == null ? void 0 : _b.key) === "hc" && (i.colHc = Mt(F.value), Pe()), ((_c = F.target) == null ? void 0 : _c.key) === "t" && (i.colT = Mt(F.value), Pe());
          });
        }
        else {
          const A = {
            bc: +$t(i.colBc ?? 0.3).toFixed(3),
            hc: +$t(i.colHc ?? 0.3).toFixed(3),
            t: +$t(i.colT ?? 0.01).toFixed(3),
            Es: +ko(i.colEs ?? 2e8).toFixed(0),
            nuS: i.colNuS ?? 0.3,
            fc: +ko(i.colFc ?? 28e3).toFixed(1),
            nuC: i.colNuC ?? 0.2
          };
          $.addBinding(A, "bc", {
            min: a[0],
            max: a[1],
            step: a[2],
            label: "Col b"
          }), $.addBinding(A, "hc", {
            min: a[0],
            max: a[1],
            step: a[2],
            label: "Col h"
          }), $.addBinding(A, "t", {
            min: m[0],
            max: m[1],
            step: m[2],
            label: "Col t"
          }), $.addBlade({
            view: "separator"
          });
          const F = +ko(1e8).toFixed(0), G = +ko(3e8).toFixed(0), g = Math.max(1, Math.round((G - F) / 200));
          $.addBinding(A, "Es", {
            min: F,
            max: G,
            step: g,
            label: `Es (${zn()})`
          }), $.addBinding(A, "nuS", {
            min: 0.15,
            max: 0.45,
            step: 0.01,
            label: "\u03BDs"
          }), $.addBinding(A, "fc", {
            min: p[0],
            max: p[1],
            step: p[2],
            label: `f'c (${zn()})`
          }), $.addBinding(A, "nuC", {
            min: 0.1,
            max: 0.35,
            step: 0.01,
            label: "\u03BDc"
          }), $.on("change", (S) => {
            var _a3, _b, _c, _d, _e2, _f, _g;
            ((_a3 = S.target) == null ? void 0 : _a3.key) === "bc" && (i.colBc = Mt(S.value), Pe()), ((_b = S.target) == null ? void 0 : _b.key) === "hc" && (i.colHc = Mt(S.value), Pe()), ((_c = S.target) == null ? void 0 : _c.key) === "t" && (i.colT = Mt(S.value), Pe()), ((_d = S.target) == null ? void 0 : _d.key) === "Es" && (i.colEs = Tn(S.value), Pe()), ((_e2 = S.target) == null ? void 0 : _e2.key) === "nuS" && (i.colNuS = S.value, Pe()), ((_f = S.target) == null ? void 0 : _f.key) === "fc" && (i.colFc = Tn(S.value), Pe()), ((_g = S.target) == null ? void 0 : _g.key) === "nuC" && (i.colNuC = S.value, Pe());
          });
        }
        if (i.vigasX.length > 0) {
          const A = $.addFolder({
            title: `Vigas X (${i.vigasX.length})`,
            expanded: false
          });
          ws(A, i.vigasX, "x", a, m);
        }
        if (i.vigasY.length > 0) {
          const A = $.addFolder({
            title: `Vigas Y (${i.vigasY.length})`,
            expanded: false
          });
          ws(A, i.vigasY, "y", a, m);
        }
      }
      Tt.addBlade({
        view: "separator"
      });
      const E = Tt.addFolder({
        title: "Vigas Secundarias",
        expanded: false
      }), w = {
        activar: Se,
        direccion: Je === "x" ? 0 : 1,
        cantidad: ze
      };
      E.addBinding(w, "activar", {
        label: "Activar"
      }), E.addBinding(w, "direccion", {
        label: "Corren en",
        options: {
          "X (entre ejes Y)": 0,
          "Y (entre ejes X)": 1
        }
      }), E.addBinding(w, "cantidad", {
        min: 1,
        max: 5,
        step: 1,
        label: "Cantidad/vano"
      }), E.on("change", (x) => {
        var _a3, _b, _c;
        ((_a3 = x.target) == null ? void 0 : _a3.key) === "activar" && (Se = x.value, Pe()), ((_b = x.target) == null ? void 0 : _b.key) === "direccion" && (Je = x.value === 0 ? "x" : "y", Pe()), ((_c = x.target) == null ? void 0 : _c.key) === "cantidad" && (ze = Math.round(x.value), Pe());
      }), Tt.addBlade({
        view: "separator"
      });
      const v = Tt.addFolder({
        title: "Losas de Piso",
        expanded: true
      }), u = {
        activar: Ue,
        espesor: +$t(at).toFixed(3),
        subdivX: dt,
        subdivY: yt
      };
      v.addBinding(u, "activar", {
        label: "Activar losas"
      }), v.addBinding(u, "espesor", {
        min: a[0],
        max: a[1] * 0.3,
        step: a[2],
        label: `Espesor (${n.length})`
      }), v.addBinding(u, "subdivX", {
        min: 1,
        max: 6,
        step: 1,
        label: "Subdiv. X"
      }), v.addBinding(u, "subdivY", {
        min: 1,
        max: 6,
        step: 1,
        label: "Subdiv. Y"
      }), v.on("change", (x) => {
        var _a3, _b, _c, _d;
        ((_a3 = x.target) == null ? void 0 : _a3.key) === "activar" && (Ue = x.value, Pe()), ((_b = x.target) == null ? void 0 : _b.key) === "espesor" && (at = Mt(x.value), Pe()), ((_c = x.target) == null ? void 0 : _c.key) === "subdivX" && (dt = Math.round(x.value), Pe()), ((_d = x.target) == null ? void 0 : _d.key) === "subdivY" && (yt = Math.round(x.value), Pe());
      }), Tt.addBlade({
        view: "separator"
      });
      const h = Tt.addFolder({
        title: "Muros de Corte",
        expanded: true
      }), I = {
        espesor: +$t(De).toFixed(3),
        subdivH: He,
        subdivW: be
      };
      h.addBinding(I, "espesor", {
        min: a[0],
        max: a[1],
        step: a[2],
        label: `Espesor (${n.length})`
      }), h.addBinding(I, "subdivH", {
        min: 1,
        max: 6,
        step: 1,
        label: "Subdiv. V"
      }), h.addBinding(I, "subdivW", {
        min: 1,
        max: 6,
        step: 1,
        label: "Subdiv. H"
      }), h.on("change", (x) => {
        var _a3, _b, _c;
        ((_a3 = x.target) == null ? void 0 : _a3.key) === "espesor" && (De = Mt(x.value), Pe()), ((_b = x.target) == null ? void 0 : _b.key) === "subdivH" && (He = Math.round(x.value), Pe()), ((_c = x.target) == null ? void 0 : _c.key) === "subdivW" && (be = Math.round(x.value), Pe());
      });
      const z = re.length || 1, T = te.length || 1, B = z + 1, D = T + 1;
      if (z > 0) {
        const x = h.addFolder({
          title: `Muros dir X (${z} vanos)`,
          expanded: false
        });
        for (let i = 0; i < z; i++) for (let $ = 0; $ < D; $++) {
          const A = `wx_${i}_${$}`, F = xe.some((S) => S.dir === "x" && S.bay === i && S.axisIdx === $), G = {};
          G[A] = F;
          const g = `Vano X${i + 1} / Eje Y${String.fromCharCode(65 + $)}`;
          x.addBinding(G, A, {
            label: g
          }).on("change", (S) => {
            S.value ? xe.push({
              dir: "x",
              bay: i,
              axisIdx: $,
              floors: [
                -1
              ]
            }) : xe = xe.filter((y) => !(y.dir === "x" && y.bay === i && y.axisIdx === $)), Pe();
          });
        }
      }
      if (T > 0) {
        const x = h.addFolder({
          title: `Muros dir Y (${T} vanos)`,
          expanded: false
        });
        for (let i = 0; i < T; i++) for (let $ = 0; $ < B; $++) {
          const A = `wy_${i}_${$}`, F = xe.some((S) => S.dir === "y" && S.bay === i && S.axisIdx === $), G = {};
          G[A] = F;
          const g = `Vano Y${i + 1} / Eje X${$ + 1}`;
          x.addBinding(G, A, {
            label: g
          }).on("change", (S) => {
            S.value ? xe.push({
              dir: "y",
              bay: i,
              axisIdx: $,
              floors: [
                -1
              ]
            }) : xe = xe.filter((y) => !(y.dir === "y" && y.bay === i && y.axisIdx === $)), Pe();
          });
        }
      }
      if (xe.length > 0) {
        h.addBlade({
          view: "separator"
        });
        const x = {
          muros: `${xe.length} ubicaciones`
        };
        h.addBinding(x, "muros", {
          label: "Total",
          readonly: true
        });
      }
    }
    function so() {
      const t = document.getElementById("parameters");
      if (!t) return;
      if (ue || (ue = t.innerHTML), he) {
        try {
          he.dispose();
        } catch {
        }
        he = null;
      }
      if (io) {
        try {
          io.dispose();
        } catch {
        }
        io = null;
      }
      t.innerHTML = "";
      const o = k.charAt(0).toUpperCase() + k.slice(1);
      he = new on({
        title: `Parameters \u2014 ${o}`,
        container: t
      });
      const n = is()[k];
      if (n) {
        const a = {};
        for (const s of n) a[s.key] = se[s.key].val;
        for (const s of n) he.addBinding(a, s.key, {
          min: se[s.key].min,
          max: se[s.key].max,
          step: se[s.key].step,
          label: se[s.key].label
        });
        const p = he.addFolder({
          title: "Rangos",
          expanded: false
        });
        for (const s of n) {
          const r = {
            min: se[s.key].min,
            max: se[s.key].max
          };
          p.addBinding(r, "min", {
            label: `${s.key} min`,
            step: s.step
          }), p.addBinding(r, "max", {
            label: `${s.key} max`,
            step: s.step
          }), p.on("change", () => {
            se[s.key] && (se[s.key].min = r.min, se[s.key].max = r.max, se[s.key].val < r.min && (se[s.key].val = r.min), se[s.key].val > r.max && (se[s.key].val = r.max)), so(), Pe();
          });
        }
        he.on("change", (s) => {
          var _a2, _b;
          const r = (_a2 = s.target) == null ? void 0 : _a2.key;
          if (r && se[r]) {
            if (se[r].val = s.value, k === "edificio" && (r === "nVanosX" || r === "nVanosY" || r === "nPisos")) {
              if (r === "nVanosX" || r === "nVanosY") {
                const f = Math.round(se.nVanosX.val), c = Math.round(se.nVanosY.val);
                for (; re.length < f; ) re.push(re[re.length - 1] ?? M.defaultSpan);
                for (re.length > f && (re.length = f); te.length < c; ) te.push(te[te.length - 1] ?? M.defaultSpan * 0.8);
                te.length > c && (te.length = c);
              }
              if (r === "nPisos" || r === "hPiso") {
                const f = Math.round(se.nPisos.val), c = ((_b = se.hPiso) == null ? void 0 : _b.val) ?? 3;
                for (; N.length < f; ) N.push(N[N.length - 1] ?? c);
                N.length > f && (N.length = f);
              }
              so();
            }
            Pe();
          }
        });
      }
      if (k === "edificio") {
        if (co) {
          try {
            co.dispose();
          } catch {
          }
          co = null;
        }
        const a = document.getElementById("luces-panel");
        if (a) {
          let p = function() {
            var _a2, _b, _c, _d;
            const f = "ABCDEFGHIJKLMNOPQRSTUVWXYZ", c = ((_a2 = se.Lvix) == null ? void 0 : _a2.val) || 0, d = ((_b = se.Lvdx) == null ? void 0 : _b.val) || 0, m = ((_c = se.Lviy) == null ? void 0 : _c.val) || 0, E = ((_d = se.Lvdy) == null ? void 0 : _d.val) || 0;
            let w = "X: ";
            c > 0 && (w += `\u251C${c.toFixed(1)}\u2524`);
            for (let h = 0; h < re.length; h++) w += `[${f[h + (c > 0 ? 1 : 0)]}]\u2500\u2500${re[h].toFixed(1)}\u2500\u2500`;
            w += `[${f[re.length + (c > 0 ? 1 : 0)]}]`, d > 0 && (w += `\u251C${d.toFixed(1)}\u2524`);
            let v = "Y: ";
            m > 0 && (v += `\u251C${m.toFixed(1)}\u2524`);
            for (let h = 0; h < te.length; h++) v += `[${h + 1 + (m > 0 ? 1 : 0)}]\u2500\u2500${te[h].toFixed(1)}\u2500\u2500`;
            v += `[${te.length + 1 + (m > 0 ? 1 : 0)}]`, E > 0 && (v += `\u251C${E.toFixed(1)}\u2524`);
            let u = "Z: ";
            for (let h = 0; h < N.length; h++) u += `P${h + 1}=${N[h].toFixed(1)} `;
            r.textContent = w + `
` + v + `
` + u;
          };
          a.innerHTML = "";
          const s = M;
          try {
            co = new on({
              title: `Luces (${s.length})`,
              container: a
            });
            const f = co.addFolder({
              title: "Luces X",
              expanded: true
            });
            for (let d = 0; d < re.length; d++) {
              const m = d, E = {
                v: re[d]
              };
              f.addBinding(E, "v", {
                min: s.spanRange[0],
                max: s.spanRange[1],
                step: s.spanRange[2],
                label: `svx${d + 1}`
              }).on("change", (w) => {
                re[m] = w.value, Pe();
              });
            }
            const c = co.addFolder({
              title: "Luces Y",
              expanded: true
            });
            for (let d = 0; d < te.length; d++) {
              const m = d, E = {
                v: te[d]
              };
              c.addBinding(E, "v", {
                min: s.spanRange[0],
                max: s.spanRange[1],
                step: s.spanRange[2],
                label: `svy${d + 1}`
              }).on("change", (w) => {
                te[m] = w.value, Pe();
              });
            }
            if (N.length > 0) {
              const d = co.addFolder({
                title: "Alturas por Piso",
                expanded: true
              });
              for (let m = 0; m < N.length; m++) {
                const E = m, w = {
                  v: N[m]
                };
                d.addBinding(w, "v", {
                  min: s.heightRange[0],
                  max: s.heightRange[1],
                  step: s.heightRange[2],
                  label: `Piso ${m + 1}`
                }).on("change", (v) => {
                  N[E] = v.value, Pe();
                });
              }
            }
          } catch (f) {
            console.error("Luces Tweakpane error:", f);
          }
          const r = document.createElement("div");
          r.style.cssText = "font-family:monospace;font-size:10px;color:#aaa;padding:6px;background:#1a1a2e;border-radius:4px;margin-top:6px;line-height:1.6;white-space:pre;overflow-x:auto;", p(), a.appendChild(r);
        }
      }
      if (Oo(), he) {
        he.addBlade({
          view: "separator"
        });
        const a = un()[k];
        if (a && a.length > 0) {
          const p = {};
          a.forEach((r, f) => {
            p[r.label] = f;
          });
          const s = {
            apoyo: xt
          };
          he.addBinding(s, "apoyo", {
            label: "Apoyo",
            options: p
          }).on("change", (r) => {
            xt = r.value, Pe();
          });
        }
        if (k === "placa-3q" || k === "placa-q4") {
          const p = {
            teoria: Le
          };
          he.addBinding(p, "teoria", {
            label: "Teor\xEDa",
            options: {
              Membrana: 1,
              "Kirchhoff (delgada)": 2,
              "Mindlin (gruesa)": 3
            }
          }).on("change", (s) => {
            Le = s.value, Pe();
          });
        }
      }
      const l = cs()[k];
      if (l && l.length > 0) {
        io = new on({
          title: `Cargas Est\xE1ticas \u2014 ${o}`,
          container: t
        });
        const a = {};
        for (const s of l) a[s.key] = ft[s.key].val;
        for (const s of l) io.addBinding(a, s.key, {
          min: ft[s.key].min,
          max: ft[s.key].max,
          step: ft[s.key].step,
          label: ft[s.key].label
        });
        const p = io.addFolder({
          title: "Rangos",
          expanded: false
        });
        for (const s of l) {
          const r = {
            min: ft[s.key].min,
            max: ft[s.key].max
          };
          p.addBinding(r, "min", {
            label: `${s.key} min`,
            step: s.step
          }), p.addBinding(r, "max", {
            label: `${s.key} max`,
            step: s.step
          }), p.on("change", () => {
            ft[s.key] && (ft[s.key].min = r.min, ft[s.key].max = r.max, ft[s.key].val < r.min && (ft[s.key].val = r.min), ft[s.key].val > r.max && (ft[s.key].val = r.max)), so(), Pe();
          });
        }
        io.on("change", (s) => {
          var _a2;
          const r = (_a2 = s.target) == null ? void 0 : _a2.key;
          if (r && ft[r]) {
            if (ft[r].val = s.value, e.nodeInputs) {
              const f = e.nodeInputs.val;
              f.supports && (e.nodeInputs.val = {
                supports: f.supports
              });
            }
            setTimeout(() => Fn(), 30);
          }
        });
      }
      window.__cad = {
        setParam: (a, p) => {
          if (se[a]) se[a].val = p, Pe(), so();
          else if (ft[a]) {
            if (ft[a].val = p, e.nodeInputs) {
              const s = e.nodeInputs.val;
              s.supports && (e.nodeInputs.val = {
                supports: s.supports
              });
            }
            setTimeout(() => {
              Fn(), so();
            }, 30);
          }
        },
        getParams: () => {
          const a = {};
          for (const p in se) a[p] = se[p].val;
          for (const p in ft) a[p] = ft[p].val;
          return a;
        },
        setGenerator: Qe,
        createCustomPanel: (a, p, s) => Ma(a, p, s),
        removeCustomPanel: (a) => {
          Ss(a);
        }
      };
    }
    const An = /* @__PURE__ */ new Map();
    function Ma(t, o, n) {
      var _a2;
      Ss(t);
      let l = document.querySelector("#cad3d-custom-panels");
      if (!l) {
        l = document.createElement("div"), l.id = "cad3d-custom-panels";
        const r = document.querySelector("#parameters");
        r ? (_a2 = r.parentElement) == null ? void 0 : _a2.insertBefore(l, r.nextSibling) : document.body.appendChild(l);
      }
      const a = document.createElement("div");
      a.className = "cad3d-custom-panel", a.style.marginBottom = "4px", l.appendChild(a);
      const p = new on({
        title: t,
        container: a
      }), s = {};
      for (const [r, f] of Object.entries(o)) {
        const c = f.label || r;
        if (Array.isArray(f.value)) {
          s[r] = f.value;
          const d = {
            [r]: f.value.join(", ")
          };
          p.addBinding(d, r, {
            label: c
          }).on("change", (m) => {
            s[r] = m.value.split(",").map((E) => parseFloat(E.trim())).filter((E) => !isNaN(E)), n && n({
              ...s
            });
          });
        } else if (f.options) {
          s[r] = f.value;
          const d = {
            [r]: f.value
          }, m = {};
          for (const E of f.options) m[E] = E;
          p.addBinding(d, r, {
            label: c,
            options: m
          }).on("change", (E) => {
            s[r] = E.value, n && n({
              ...s
            });
          });
        } else if (typeof f.value == "boolean") {
          s[r] = f.value;
          const d = {
            [r]: f.value
          };
          p.addBinding(d, r, {
            label: c
          }).on("change", (m) => {
            s[r] = m.value, n && n({
              ...s
            });
          });
        } else if (typeof f.value == "string") {
          s[r] = f.value;
          const d = {
            [r]: f.value
          };
          p.addBinding(d, r, {
            label: c
          }).on("change", (m) => {
            s[r] = m.value, n && n({
              ...s
            });
          });
        } else {
          s[r] = f.value;
          const d = {
            [r]: f.value
          }, m = {
            label: c
          };
          f.min !== void 0 && (m.min = f.min), f.max !== void 0 && (m.max = f.max), f.step !== void 0 && (m.step = f.step), p.addBinding(d, r, m).on("change", (E) => {
            s[r] = E.value, n && n({
              ...s
            });
          });
        }
      }
      return n && p.addButton({
        title: "Aplicar"
      }).on("click", () => {
        n({
          ...s
        });
      }), An.set(t, {
        pane: p,
        values: s
      }), console.log(`Panel "${t}" created with ${Object.keys(o).length} params`), s;
    }
    function Ss(t) {
      const o = An.get(t);
      if (o) {
        try {
          o.pane.dispose();
        } catch {
        }
        An.delete(t);
      }
    }
    function wa() {
      if (he) {
        try {
          he.dispose();
        } catch {
        }
        he = null;
      }
      if (io) {
        try {
          io.dispose();
        } catch {
        }
        io = null;
      }
      if (Tt) {
        try {
          Tt.dispose();
        } catch {
        }
        Tt = null;
      }
      if (co) {
        try {
          co.dispose();
        } catch {
        }
        co = null;
      }
      const t = document.getElementById("sections");
      t && t.remove();
      const o = document.getElementById("right-panels-wrapper"), n = document.getElementById("parameters");
      o && n && (n.style.cssText = "", document.body.appendChild(n), o.remove()), n && ue && (n.innerHTML = ue);
    }
    const Ae = document.createElement("div");
    Ae.id = "cad3d-panel";
    const Es = document.createElement("style");
    Es.textContent = `
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
  `, document.head.appendChild(Es), Ua() === "light" && document.documentElement.classList.add("awatif-light"), Xa((t) => {
      t === "light" ? document.documentElement.classList.add("awatif-light") : document.documentElement.classList.remove("awatif-light"), k && It(true);
    }), Ae.innerHTML = `
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
        <button data-ex="placa-hss">Placa HSS</button>
        <button data-ex="edif-5p">Edif. 5P</button>
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
    let zt = null;
    function Sa() {
      var _a2, _b, _c, _d, _e2, _f;
      const t = e.nodes.val, o = e.elements.val, n = (_a2 = e.nodeInputs) == null ? void 0 : _a2.val, l = (_b = e.elementInputs) == null ? void 0 : _b.val, a = P, p = b, s = [];
      if (s.push("# Awatif FEM \u2014 Model Export"), s.push(`# Generator: ${k || "custom"}`), s.push(`# Units: ${p}, ${a}`), s.push(`# ${(/* @__PURE__ */ new Date()).toISOString()}`), s.push(""), s.push(`## NODES (${t.length})`), s.push("# idx     X          Y          Z"), t.forEach((c, d) => {
        s.push(`  ${String(d).padStart(4)}  ${c[0].toFixed(4).padStart(10)}  ${c[1].toFixed(4).padStart(10)}  ${c[2].toFixed(4).padStart(10)}`);
      }), s.push(""), s.push(`## ELEMENTS (${o.length})`), s.push("# idx    nodeI  nodeJ"), o.forEach((c, d) => {
        const m = c.map((E) => String(E).padStart(6)).join("");
        s.push(`  ${String(d).padStart(4)}  ${m}`);
      }), s.push(""), (n == null ? void 0 : n.supports) && n.supports.size > 0 && (s.push(`## SUPPORTS (${n.supports.size})`), s.push("# node   Ux  Uy  Uz  Rx  Ry  Rz"), n.supports.forEach((c, d) => {
        const m = c.map((E) => E ? "  1" : "  0").join("");
        s.push(`  ${String(d).padStart(4)} ${m}`);
      }), s.push("")), (n == null ? void 0 : n.loads) && n.loads.size > 0 && (s.push(`## LOADS (${n.loads.size})`), s.push("# node         Fx          Fy          Fz          Mx          My          Mz"), n.loads.forEach((c, d) => {
        const m = c.map((E) => E.toFixed(3).padStart(11)).join(" ");
        s.push(`  ${String(d).padStart(4)}  ${m}`);
      }), s.push("")), l) {
        s.push("## ELEMENT PROPERTIES");
        const c = [
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
        ], d = "# elem  " + c.map((m) => m.name.padStart(12)).join(" ");
        s.push(d);
        for (let m = 0; m < o.length; m++) {
          const E = c.map((w) => {
            var _a3;
            const v = (_a3 = w.map) == null ? void 0 : _a3.get(m);
            return v !== void 0 ? v.toExponential(4).padStart(12) : "           -";
          }).join(" ");
          s.push(`  ${String(m).padStart(4)}  ${E}`);
        }
        s.push("");
      }
      const r = (_d = (_c = e.deformOutputs) == null ? void 0 : _c.val) == null ? void 0 : _d.deformations;
      r && r.size > 0 && (s.push(`## DISPLACEMENTS (${r.size} nodes)`), s.push("# node          Ux           Uy           Uz           Rx           Ry           Rz"), r.forEach((c, d) => {
        const m = c.map((E) => E.toExponential(4).padStart(12)).join(" ");
        s.push(`  ${String(d).padStart(4)}  ${m}`);
      }), s.push(""));
      const f = (_f = (_e2 = e.deformOutputs) == null ? void 0 : _e2.val) == null ? void 0 : _f.reactions;
      if (f && f.size > 0 && (s.push(`## REACTIONS (${f.size} supports)`), s.push("# node          Rx           Ry           Rz           Mx           My           Mz"), f.forEach((c, d) => {
        const m = c.map((E) => E.toFixed(4).padStart(12)).join(" ");
        s.push(`  ${String(d).padStart(4)}  ${m}`);
      }), s.push("")), k) {
        s.push("## CLI COMMAND");
        const c = Object.entries(se).map(([d, m]) => `${d}=${m.val}`).join(" ");
        s.push(`cad.${k === "edificio" ? "building" : k}(${c})`);
      }
      return s.join(`
`);
    }
    let Zo = false;
    function Ea() {
      var _a2, _b, _c, _d;
      if (zt) {
        zt.remove(), zt = null, Zo = false;
        return;
      }
      const t = Sa();
      zt = document.createElement("div"), zt.id = "export-overlay", zt.style.cssText = `
      position:fixed; bottom:10px; right:10px; z-index:10000;
      width:720px; max-width:90vw;
      display:flex; flex-direction:column;
      font-family:monospace; color:var(--cad-text,#ccc);
      background:var(--cad-bg,#1a1a2e); border:1px solid var(--cad-border,#333);
      border-radius:8px; box-shadow:0 4px 20px rgba(0,0,0,0.5);
      transition: height 0.2s ease;
    `, zt.innerHTML = `
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
    `, document.body.appendChild(zt), (_a2 = zt.querySelector("#export-close")) == null ? void 0 : _a2.addEventListener("click", () => {
        zt == null ? void 0 : zt.remove(), zt = null, Zo = false;
      }), (_b = zt.querySelector("#export-minimize")) == null ? void 0 : _b.addEventListener("click", () => {
        const o = zt.querySelector("#export-body"), n = zt.querySelector("#export-minimize");
        Zo = !Zo, Zo ? (o.style.display = "none", n.textContent = "\u25A2", n.title = "Restaurar", zt.style.width = "auto") : (o.style.display = "flex", n.textContent = "\u25AC", n.title = "Minimizar", zt.style.width = "720px");
      }), (_c = zt.querySelector("#export-copy")) == null ? void 0 : _c.addEventListener("click", () => {
        const o = zt.querySelector("#export-text");
        navigator.clipboard.writeText(o.value).then(() => {
          const n = zt.querySelector("#export-status");
          n.textContent = "\u2713 Copiado al clipboard", setTimeout(() => n.textContent = "", 2e3);
        });
      }), (_d = zt.querySelector("#export-json")) == null ? void 0 : _d.addEventListener("click", () => {
        var _a3, _b2, _c2, _d2, _e2, _f;
        const o = e.nodes.val, n = e.elements.val, l = (_a3 = e.nodeInputs) == null ? void 0 : _a3.val, a = (_b2 = e.elementInputs) == null ? void 0 : _b2.val, p = {
          generator: k || "custom",
          units: {
            force: b,
            length: P
          },
          nodes: o.map((d, m) => ({
            id: m,
            x: d[0],
            y: d[1],
            z: d[2]
          })),
          elements: n.map((d, m) => ({
            id: m,
            nodes: d
          }))
        };
        (l == null ? void 0 : l.supports) && (p.supports = [], l.supports.forEach((d, m) => p.supports.push({
          node: m,
          dofs: d
        }))), (l == null ? void 0 : l.loads) && (p.loads = [], l.loads.forEach((d, m) => p.loads.push({
          node: m,
          forces: d
        }))), a && (p.properties = {}, a.elasticities && (p.properties.E = Object.fromEntries(a.elasticities)), a.areas && (p.properties.A = Object.fromEntries(a.areas)), a.momentsOfInertiaZ && (p.properties.Iz = Object.fromEntries(a.momentsOfInertiaZ)), a.momentsOfInertiaY && (p.properties.Iy = Object.fromEntries(a.momentsOfInertiaY)), a.shearModuli && (p.properties.G = Object.fromEntries(a.shearModuli)), a.torsionalConstants && (p.properties.J = Object.fromEntries(a.torsionalConstants)));
        const s = (_d2 = (_c2 = e.deformOutputs) == null ? void 0 : _c2.val) == null ? void 0 : _d2.deformations;
        s && s.size > 0 && (p.displacements = {}, s.forEach((d, m) => p.displacements[m] = d));
        const r = (_f = (_e2 = e.deformOutputs) == null ? void 0 : _e2.val) == null ? void 0 : _f.reactions;
        r && r.size > 0 && (p.reactions = {}, r.forEach((d, m) => p.reactions[m] = d));
        const f = zt.querySelector("#export-text");
        f.value = JSON.stringify(p, null, 2);
        const c = zt.querySelector("#export-status");
        c.textContent = "Formato JSON activo \u2014 presiona Copy para copiar";
      });
    }
    function Ze() {
      var _a2, _b, _c;
      const t = Ae.querySelector("#cad3d-info");
      if (t) {
        const o = e.nodes.val.length, n = e.elements.val, l = n.length, a = ((_c = (_b = (_a2 = e.nodeInputs) == null ? void 0 : _a2.val) == null ? void 0 : _b.supports) == null ? void 0 : _c.size) || 0;
        let p = 0, s = 0, r = 0;
        for (const c of n) c.length === 2 ? p++ : c.length === 3 ? s++ : c.length === 4 && r++;
        let f = `${o}n ${l}e ${a}s`;
        (r > 0 || s > 0) && (f += ` | ${p}fr`, r > 0 && (f += ` ${r}q4`), s > 0 && (f += ` ${s}tri`)), t.textContent = f;
      }
    }
    function Ln() {
      var _a2;
      if (!qe || !e.nodeInputs || !e.elementInputs) return;
      const t = e.nodes.val, o = e.elements.val, n = e.nodeInputs.val, l = e.elementInputs.val;
      if (!(t.length === 0 || o.length === 0) && !(!n.supports || n.supports.size === 0) && !(!l.densities || l.densities.size === 0)) try {
        const a = Math.min(12, t.length * 6 - n.supports.size * 6);
        if (a <= 0) return;
        const p = rl(t, o, n, l, Math.min(a, 12));
        if (p.frequencies && p.frequencies.length > 0) {
          Ce = p, ke = t.map((c) => [
            ...c
          ]), ve = 0;
          const { extent: s } = vo(), r = (_a2 = p.modeShapes) == null ? void 0 : _a2[0];
          if (r) {
            let c = 0;
            for (let d = 0; d < t.length; d++) {
              const m = r[d * 6] || 0, E = r[d * 6 + 1] || 0, w = r[d * 6 + 2] || 0;
              c = Math.max(c, Math.sqrt(m * m + E * E + w * w));
            }
            Ge = c > 1e-12 ? s * 0.05 / c : 1;
          }
          const f = `${k} \u2014 ${t.length}n ${o.length}e`;
          it.render(p, {
            title: f
          }), it.div.style.display = "", Qo(), console.log(`Modal: ${p.frequencies.length} modos. f\u2081 = ${p.frequencies[0].toFixed(4)} Hz`);
        }
      } catch (a) {
        console.warn("Modal analysis failed:", a.message), Ce = null;
      }
    }
    function Cn() {
      ge && (cancelAnimationFrame(ge), ge = 0), ke.length > 0 && (e.nodes.val = ke.map((t) => [
        ...t
      ])), it.div.style.display = "none", Ce = null;
    }
    function Qo() {
      var _a2;
      if (ge && cancelAnimationFrame(ge), !(Ce == null ? void 0 : Ce.modeShapes) || !ke.length) return;
      const t = Ce.modeShapes[ve];
      if (!t) return;
      const o = ((_a2 = Ce.frequencies) == null ? void 0 : _a2[ve]) || 1, n = Math.max(0.5, Math.min(3, o * 0.1)), l = performance.now(), a = ke.length, p = e.elements.rawVal, { extent: s } = vo(), r = Ae.querySelector("#cad3d-modal-scale"), f = r && parseFloat(r.value) || 5;
      let c = 0;
      for (let T = 0; T < a; T++) {
        const B = t[T * 6] || 0, D = t[T * 6 + 1] || 0, x = t[T * 6 + 2] || 0;
        c = Math.max(c, Math.sqrt(B * B + D * D + x * x));
      }
      const d = c > 1e-12 ? s * f / 100 / c : 1, m = et();
      if (!m) return;
      let E = null, w = null, v = null;
      m.scene.traverse((T) => {
        var _a3, _b;
        !E && T.isPoints && T.geometry && (E = T), !w && T.isLineSegments && T.geometry && !T.name && (w = T), !v && T.isMesh && ((_a3 = T.material) == null ? void 0 : _a3.transparent) && ((_b = T.material) == null ? void 0 : _b.opacity) < 0.5 && T.geometry && (v = T);
      });
      const u = new Float32Array(a * 3), h = [];
      for (const T of p) if (T.length === 2) h.push([
        T[0],
        T[1]
      ]);
      else for (let B = 0; B < T.length; B++) h.push([
        T[B],
        T[(B + 1) % T.length]
      ]);
      const I = new Float32Array(h.length * 6);
      function z() {
        const T = (performance.now() - l) / 1e3, B = Math.sin(2 * Math.PI * n * T) * d;
        for (let D = 0; D < a; D++) {
          const x = ke[D];
          u[D * 3] = x[0] + (t[D * 6] || 0) * B, u[D * 3 + 1] = x[1] + (t[D * 6 + 1] || 0) * B, u[D * 3 + 2] = x[2] + (t[D * 6 + 2] || 0) * B;
        }
        if (E) {
          const D = E.geometry, x = D.getAttribute("position");
          x && x.array.length === u.length ? (x.array.set(u), x.needsUpdate = true) : D.setAttribute("position", new Ao(u.slice(), 3));
        }
        if (w) {
          for (let i = 0; i < h.length; i++) {
            const [$, A] = h[i];
            I[i * 6] = u[$ * 3], I[i * 6 + 1] = u[$ * 3 + 1], I[i * 6 + 2] = u[$ * 3 + 2], I[i * 6 + 3] = u[A * 3], I[i * 6 + 4] = u[A * 3 + 1], I[i * 6 + 5] = u[A * 3 + 2];
          }
          const D = w.geometry, x = D.getAttribute("position");
          x && x.array.length === I.length ? (x.array.set(I), x.needsUpdate = true) : D.setAttribute("position", new Ao(I.slice(), 3));
        }
        if (v) {
          const D = [];
          for (const x of p) if (x.length === 3) {
            const [i, $, A] = x;
            D.push(u[i * 3], u[i * 3 + 1], u[i * 3 + 2]), D.push(u[$ * 3], u[$ * 3 + 1], u[$ * 3 + 2]), D.push(u[A * 3], u[A * 3 + 1], u[A * 3 + 2]);
          } else if (x.length === 4) {
            const [i, $, A, F] = x;
            D.push(u[i * 3], u[i * 3 + 1], u[i * 3 + 2]), D.push(u[$ * 3], u[$ * 3 + 1], u[$ * 3 + 2]), D.push(u[A * 3], u[A * 3 + 1], u[A * 3 + 2]), D.push(u[i * 3], u[i * 3 + 1], u[i * 3 + 2]), D.push(u[A * 3], u[A * 3 + 1], u[A * 3 + 2]), D.push(u[F * 3], u[F * 3 + 1], u[F * 3 + 2]);
          }
          if (D.length > 0) {
            const x = v.geometry, i = new Float32Array(D), $ = x.getAttribute("position");
            $ && $.array.length === i.length ? ($.array.set(i), $.needsUpdate = true) : x.setAttribute("position", new Ao(i, 3));
          }
        }
        m.render(), ge = requestAnimationFrame(z);
      }
      ge = requestAnimationFrame(z);
    }
    function Fn() {
      var _a2, _b, _c, _d, _e2;
      if (!e.deformOutputs || !e.analyzeOutputs || !e.nodeInputs || !e.elementInputs) return;
      const t = e.nodes.val, o = e.elements.val;
      let n = e.nodeInputs.val;
      const l = e.elementInputs.val;
      if (t.length === 0 || o.length === 0 || !n.supports || n.supports.size === 0) return;
      if (!n.loads || n.loads.size === 0) {
        const v = le("CM") ?? 0, u = le("CV") ?? 0, h = v + u, I = le("Ex") ?? 0, z = le("Ey") ?? 0;
        if (h === 0 && I === 0 && z === 0) return;
        const T = /* @__PURE__ */ new Map(), B = [];
        for (let S = 0; S < t.length; S++) n.supports.has(S) || B.push(S);
        const D = (S) => Math.round(S * 1e3) / 1e3, x = /* @__PURE__ */ new Set();
        n.supports.forEach((S, y) => {
          x.add(`${D(t[y][0])},${D(t[y][1])}`);
        });
        const i = /* @__PURE__ */ new Set();
        for (const S of B) x.has(`${D(t[S][0])},${D(t[S][1])}`) && i.add(S);
        const $ = /* @__PURE__ */ new Set(), A = /* @__PURE__ */ new Set();
        if (I !== 0 || z !== 0) {
          let S = -1 / 0, y = -1 / 0;
          for (const X of i) S = Math.max(S, D(t[X][0])), y = Math.max(y, D(t[X][1]));
          const C = /* @__PURE__ */ new Map();
          for (const X of i) {
            const U = D(t[X][2]);
            C.has(U) || C.set(U, []), C.get(U).push(X);
          }
          C.forEach((X) => {
            if (I !== 0) {
              const U = /* @__PURE__ */ new Set();
              for (const ae of X) if (D(t[ae][0]) === S) {
                const Z = D(t[ae][1]);
                U.has(Z) || (U.add(Z), $.add(ae));
              }
            }
            if (z !== 0) {
              const U = /* @__PURE__ */ new Set();
              for (const ae of X) if (D(t[ae][1]) === y) {
                const Z = D(t[ae][0]);
                U.has(Z) || (U.add(Z), A.add(ae));
              }
            }
          });
        }
        const F = 9.81, G = /* @__PURE__ */ new Map();
        for (let S = 0; S < o.length; S++) {
          const y = o[S], C = ((_a2 = l.densities) == null ? void 0 : _a2.get(S)) ?? 0;
          if (!(Math.abs(C) < 1e-15)) {
            if (y.length === 2) {
              const X = ((_b = l.areas) == null ? void 0 : _b.get(S)) ?? 0, U = t[y[0]], ae = t[y[1]], Z = Math.sqrt((ae[0] - U[0]) ** 2 + (ae[1] - U[1]) ** 2 + (ae[2] - U[2]) ** 2), de = -(C * X * Z * F) / 2;
              G.set(y[0], (G.get(y[0]) ?? 0) + de), G.set(y[1], (G.get(y[1]) ?? 0) + de);
            } else if (y.length >= 3) {
              const X = ((_c = l.thicknesses) == null ? void 0 : _c.get(S)) ?? 0;
              let U = 0;
              if (y.length === 3) {
                const [K, de, ie] = y.map((Ie) => t[Ie]);
                U = 0.5 * Math.abs((de[0] - K[0]) * (ie[1] - K[1]) - (ie[0] - K[0]) * (de[1] - K[1]));
              } else if (y.length === 4) {
                const [K, de, ie, Ie] = y.map((Re) => t[Re]);
                if (U = 0.5 * Math.abs((de[0] - K[0]) * (ie[1] - K[1]) - (ie[0] - K[0]) * (de[1] - K[1])) + 0.5 * Math.abs((ie[0] - K[0]) * (Ie[1] - K[1]) - (Ie[0] - K[0]) * (ie[1] - K[1])), U < 1e-10) {
                  const Re = [
                    de[0] - K[0],
                    de[1] - K[1],
                    de[2] - K[2]
                  ], q = [
                    Ie[0] - K[0],
                    Ie[1] - K[1],
                    Ie[2] - K[2]
                  ], fe = [
                    Re[1] * q[2] - Re[2] * q[1],
                    Re[2] * q[0] - Re[0] * q[2],
                    Re[0] * q[1] - Re[1] * q[0]
                  ];
                  U = Math.sqrt(fe[0] ** 2 + fe[1] ** 2 + fe[2] ** 2);
                }
              }
              const Z = -(C * X * U * F) / y.length;
              for (const K of y) G.set(K, (G.get(K) ?? 0) + Z);
            }
          }
        }
        const g = /* @__PURE__ */ new Set();
        for (const S of o) S.length === 2 && (g.add(S[0]), g.add(S[1]));
        for (const S of B) {
          const y = $.has(S) ? I : 0, C = A.has(S) ? z : 0, X = G.get(S) ?? 0, U = g.has(S) ? h : 0, ae = X + U;
          (y !== 0 || C !== 0 || Math.abs(ae) > 1e-10) && T.set(S, [
            y,
            C,
            ae,
            0,
            0,
            0
          ]);
        }
        n = {
          ...n,
          loads: T
        }, e.nodeInputs.val = n;
      }
      const a = performance.now();
      let p = 0, s = 0, r = 0;
      for (const v of o) v.length === 2 ? p++ : v.length === 3 ? r++ : v.length === 4 && s++;
      const f = ((_d = n.supports) == null ? void 0 : _d.size) || 0, c = ((_e2 = n.loads) == null ? void 0 : _e2.size) || 0, d = t.length * 6, m = d - f * 6, E = [], w = (v) => E.push(v);
      w('<b style="color:var(--cad-heading)">FEM Solver</b>'), w(`<span style="color:var(--cad-info)">Modelo:</span> ${t.length} nodos, ${o.length} elem`), p && w(`&nbsp;&nbsp;Frames: <b>${p}</b>`), s && w(`&nbsp;&nbsp;Shell Q4: <b>${s}</b>`), r && w(`&nbsp;&nbsp;Triangulos: <b>${r}</b>`), w(`&nbsp;&nbsp;Apoyos: ${f} &nbsp;|&nbsp; Cargas: ${c}`), w(`<span style="color:var(--cad-info)">DOFs:</span> ${d} total, ~${m} libres`), w('<hr style="border-color:var(--cad-border);margin:4px 0">'), w(`<span style="color:#888">1.</span> Ensamblaje <b>K</b> global (${d}&times;${d})`), w("&nbsp;&nbsp;&nbsp;<i>K<sub>global</sub> = &Sigma; T<sup>T</sup> &middot; K<sub>local</sub> &middot; T</i>");
      try {
        const v = Lt(t, o, n, l), u = performance.now() - a;
        if (v) {
          e.deformOutputs.val = v, w(`<span style="color:#888">2.</span> <b>K &middot; u = F</b> &rarr; SparseLU &rarr; <span style="color:#00cc88">${u.toFixed(0)} ms</span>`);
          let h = 0, I = -1, z = 0, T = 0;
          v.deformations && v.deformations.forEach(($, A) => {
            const F = Math.sqrt($[0] * $[0] + $[1] * $[1] + $[2] * $[2]);
            F > h && (h = F, I = A, z = $[0], T = $[2]);
          }), w('<span style="color:#888">3.</span> Desplazamientos:'), w(`&nbsp;&nbsp;&nbsp;max|<b>u</b>| = <b style="color:var(--cad-heading)">${h.toExponential(3)}</b> m <span style="color:#666">(nodo ${I})</span>`), w(`&nbsp;&nbsp;&nbsp;u<sub>x</sub> = ${(z * 1e3).toFixed(4)} mm &nbsp;|&nbsp; u<sub>z</sub> = ${(T * 1e3).toFixed(4)} mm`);
          const B = performance.now(), D = Yo(t, o, l, v), x = performance.now() - B;
          D && (e.analyzeOutputs.val = D, w(`<span style="color:#888">4.</span> Fuerzas internas: <span style="color:#00cc88">${x.toFixed(0)} ms</span>`), w("&nbsp;&nbsp;&nbsp;<i>F<sub>int</sub> = K<sub>local</sub> &middot; T &middot; u</i>"));
          const i = performance.now() - a;
          w('<hr style="border-color:var(--cad-border);margin:4px 0">'), w(`<b style="color:#00cc88">&#10004; Completado: ${i.toFixed(0)} ms</b>`);
        }
      } catch (v) {
        const u = performance.now() - a;
        w(`<b style="color:#ff4444">&#10008; Error (${u.toFixed(0)} ms): ${v.message}</b>`);
      }
      window.__femLog = E, console.log(`FEM Solver: ${t.length}n ${o.length}e \u2192 ${(performance.now() - a).toFixed(0)}ms`), qe && setTimeout(() => Ln(), 50);
    }
    function Pn(t, o) {
      const n = t * o, l = t * o * o * o / 12, a = o * t * t * t / 12, p = Math.min(t, o), s = Math.max(t, o), r = p * p * p * s * (1 / 3 - 0.21 * p / s * (1 - p * p * p * p / (12 * s * s * s * s)));
      return {
        A: n,
        Iz: l,
        Iy: a,
        J: r
      };
    }
    function Is(t) {
      const o = t / 2, n = Math.PI * o * o, l = Math.PI * o * o * o * o / 4, a = Math.PI * o * o * o * o / 2;
      return {
        A: n,
        Iz: l,
        Iy: l,
        J: a
      };
    }
    function Rn(t, o, n, l) {
      const a = o - 2 * n, p = 2 * t * n + a * l, s = (t * o * o * o - (t - l) * a * a * a) / 12, r = (2 * n * t * t * t + a * l * l * l) / 12, f = (2 * t * n * n * n + a * l * l * l) / 3;
      return {
        A: p,
        Iz: s,
        Iy: r,
        J: f
      };
    }
    function On(t, o, n) {
      const l = t - 2 * n, a = o - 2 * n, p = t * o - l * a, s = (t * o * o * o - l * a * a * a) / 12, r = (o * t * t * t - a * l * l * l) / 12, f = (t - n) * (o - n), c = 2 * ((t - n) / n + (o - n) / n), d = 4 * f * f / (c > 0 ? c : 1);
      return {
        A: p,
        Iz: s,
        Iy: r,
        J: d
      };
    }
    function Ia(t, o, n, l, a, p, s) {
      const f = 4700 * Math.sqrt(p / 1e3) * 1e3 / l, c = t - 2 * n, d = o - 2 * n, m = t * o - c * d, E = (t * o * o * o - c * d * d * d) / 12, w = (o * t * t * t - d * c * c * c) / 12, v = c * d, u = c * d * d * d / 12, h = d * c * c * c / 12, I = m + f * v, z = E + f * u, T = w + f * h, B = l / (2 * (1 + a)), D = (t - n) * (o - n), x = 2 * ((t - n) / n + (o - n) / n), i = 4 * D * D / (x > 0 ? x : 1);
      return {
        A: I,
        Iz: z,
        Iy: T,
        J: i,
        Es: l,
        Gs: B,
        A_steel: m,
        A_conc: v
      };
    }
    function xo() {
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
      if ((k === "edificio" || k === "frame") && _.size > 0) {
        const { colMat: a, vigaMat: p, colShape: s, fc: r, perFloor: f } = Ne, c = 4700 * Math.sqrt(r / 1e3) * 1e3, d = c / (2 * 1.2), m = 24 / 9.80665, E = o.E, w = o.G, v = o.rho;
        for (let u = 0; u < t.length; u++) {
          if (ce.has(u)) {
            const $ = 4700 * Math.sqrt(r / 1e3) * 1e3, A = 0.2;
            n.elasticities.set(u, $), n.poissonsRatios.set(u, A), n.thicknesses.set(u, De), n.shearModuli.set(u, $ / (2 * (1 + A))), n.densities.set(u, 24 / 9.80665);
            continue;
          }
          if (kt.has(u)) {
            const $ = 4700 * Math.sqrt(r / 1e3) * 1e3, A = 0.2;
            n.elasticities.set(u, $), n.poissonsRatios.set(u, A), n.thicknesses.set(u, at), n.shearModuli.set(u, $ / (2 * (1 + A))), n.densities.set(u, 24 / 9.80665);
            continue;
          }
          const h = _.has(u), I = $e.get(u) ?? 0, z = f[I] ?? f[0] ?? {
            bCol: 0.4,
            hCol: 0.4,
            dCol: 0.4
          };
          let T, B, D, x;
          if (h) if (a === 0) B = c, D = d, x = m, T = s === 1 ? Is(z.dCol) : Pn(z.bCol, z.hCol), n.sectionShapes.set(u, s === 1 ? {
            type: "circ",
            d: z.dCol
          } : {
            type: "rect",
            b: z.bCol,
            h: z.hCol
          });
          else if (a === 1) {
            B = E, D = w, x = v;
            const $ = Ne.steelColType;
            if ($ <= 1) {
              const A = Io[z.colProfileIdx] ?? Io[0];
              T = {
                A: A.A,
                Iz: A.Iz,
                Iy: A.Iy,
                J: A.J
              }, n.sectionShapes.set(u, {
                type: "I",
                b: A.bf,
                h: A.d,
                name: A.name
              });
            } else if ($ === 2) {
              const A = z.colBf ?? 0.3, F = z.colHf ?? 0.3, G = z.colTf ?? 0.02, g = z.colTw ?? 0.012;
              T = Rn(A, F, G, g);
              const S = `I${(F * 100).toFixed(0)}x${(A * 100).toFixed(0)}`;
              n.sectionShapes.set(u, {
                type: "I",
                b: A,
                h: F,
                tf: G,
                tw: g,
                name: S
              });
            } else {
              const A = z.colBc ?? 0.3, F = z.colHc ?? 0.3, G = z.colT ?? 0.01;
              T = On(A, F, G);
              const g = `\u25A1${(F * 100).toFixed(0)}x${(A * 100).toFixed(0)}x${(G * 1e3).toFixed(0)}`;
              n.sectionShapes.set(u, {
                type: "HSS",
                b: A,
                h: F,
                tw: G,
                name: g
              });
            }
          } else {
            const $ = z.colBc ?? 0.3, A = z.colHc ?? 0.3, F = z.colT ?? 0.01, G = z.colFc ?? 28e3, g = z.colEs ?? 2e8, S = z.colNuS ?? 0.3;
            z.colNuC;
            const y = Ia($, A, F, g, S, G);
            T = {
              A: y.A,
              Iz: y.Iz,
              Iy: y.Iy,
              J: y.J
            }, B = y.Es, D = y.Gs;
            const C = 7.85, X = 24 / 9.80665;
            x = (C * y.A_steel + X * y.A_conc) / (y.A_steel + y.A_conc);
            const U = `CFT ${(A * 1e3).toFixed(0)}X${($ * 1e3).toFixed(0)}X${(F * 1e3).toFixed(0)}`;
            n.sectionShapes.set(u, {
              type: "CFT",
              b: $,
              h: A,
              tw: F,
              name: U
            });
          }
          else {
            const $ = Te.get(u), A = $ ? $.dir === "x" ? z.vigasX : z.vigasY : [], F = $ ? A[$.bay] ?? A[0] ?? ut() : ut();
            if (p === 0) B = c, D = d, x = m, T = Pn(F.b, F.h), n.sectionShapes.set(u, {
              type: "rect",
              b: F.b,
              h: F.h
            });
            else {
              B = E, D = w, x = v;
              const G = Ne.steelVigaType;
              if (G <= 1) {
                const g = Io[F.profileIdx ?? 0] ?? Io[0];
                T = {
                  A: g.A,
                  Iz: g.Iz,
                  Iy: g.Iy,
                  J: g.J
                }, n.sectionShapes.set(u, {
                  type: "I",
                  b: g.bf,
                  h: g.d,
                  name: g.name
                });
              } else if (G === 2) {
                const g = F.bf ?? 0.2, S = F.hf ?? 0.4, y = F.tf ?? 0.015, C = F.tw ?? 0.01;
                T = Rn(g, S, y, C);
                const X = `I${(S * 100).toFixed(0)}x${(g * 100).toFixed(0)}`;
                n.sectionShapes.set(u, {
                  type: "I",
                  b: g,
                  h: S,
                  tf: y,
                  tw: C,
                  name: X
                });
              } else {
                const g = F.bc ?? 0.2, S = F.hc ?? 0.3, y = F.t ?? 8e-3;
                T = On(g, S, y);
                const C = `\u25A1${(S * 100).toFixed(0)}x${(g * 100).toFixed(0)}x${(y * 1e3).toFixed(0)}`;
                n.sectionShapes.set(u, {
                  type: "HSS",
                  b: g,
                  h: S,
                  tw: y,
                  name: C
                });
              }
            }
          }
          const i = ye.get(u);
          if (i) {
            if ((i.material ?? 1) === 0 ? (B = c, D = d, x = m) : (B = E, D = w, x = v), i.secType === "rect" && i.b && i.h) T = Pn(i.b, i.h), n.sectionShapes.set(u, {
              type: "rect",
              b: i.b,
              h: i.h
            });
            else if (i.secType === "circ" && i.b) T = Is(i.b), n.sectionShapes.set(u, {
              type: "circ",
              d: i.b
            });
            else if ((i.secType === "W" || i.secType === "HSS") && i.profileIdx !== void 0) {
              const A = Io[i.profileIdx] ?? Io[0];
              T = {
                A: A.A,
                Iz: A.Iz,
                Iy: A.Iy,
                J: A.J
              }, n.sectionShapes.set(u, {
                type: "I",
                b: A.bf,
                h: A.d,
                name: A.name
              });
            } else if (i.secType === "I-param" && i.bf && i.hf && i.tf && i.tw) {
              T = Rn(i.bf, i.hf, i.tf, i.tw);
              const A = `I${(i.hf * 100).toFixed(0)}x${(i.bf * 100).toFixed(0)}`;
              n.sectionShapes.set(u, {
                type: "I",
                b: i.bf,
                h: i.hf,
                tf: i.tf,
                tw: i.tw,
                name: A
              });
            } else if (i.secType === "tubular" && i.bc && i.hc && i.t) {
              T = On(i.bc, i.hc, i.t);
              const A = `\u25A1${(i.hc * 100).toFixed(0)}x${(i.bc * 100).toFixed(0)}x${(i.t * 1e3).toFixed(0)}`;
              n.sectionShapes.set(u, {
                type: "HSS",
                b: i.bc,
                h: i.hc,
                tw: i.t,
                name: A
              });
            }
          }
          n.elasticities.set(u, B), n.shearModuli.set(u, D), n.areas.set(u, T.A), n.momentsOfInertiaZ.set(u, T.Iy), n.momentsOfInertiaY.set(u, T.Iz), n.torsionalConstants.set(u, T.J), n.densities.set(u, x), i && i.releases12 && i.releases12.some(($) => $) && (n.momentReleases || (n.momentReleases = /* @__PURE__ */ new Map()), n.momentReleases.set(u, i.releases12)), i && i.springs12 && i.springs12.some(($) => $ > 0) && (n.partialFixitySprings || (n.partialFixitySprings = /* @__PURE__ */ new Map()), n.partialFixitySprings.set(u, i.springs12));
        }
      } else for (let a = 0; a < t.length; a++) n.elasticities.set(a, o.E), n.shearModuli.set(a, o.G), n.areas.set(a, o.A), n.momentsOfInertiaZ.set(a, o.Iy), n.momentsOfInertiaY.set(a, o.Iz), n.torsionalConstants.set(a, o.J), n.densities.set(a, o.rho);
      e.elementInputs.val = n;
    }
    function ks(t) {
      Ae.querySelectorAll("[data-ex]").forEach((o) => {
        o.classList.toggle("active", o.dataset.ex === t);
      });
    }
    window.innerWidth <= 600 && Ae.classList.add("collapsed"), setTimeout(() => {
      var _a2, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l2, _m, _n2, _o2, _p;
      (_a2 = Ae.querySelector("#cad3d-toggle")) == null ? void 0 : _a2.addEventListener("click", (g) => {
        g.stopPropagation(), Ae.classList.add("collapsed");
      }), (_b = Ae.querySelector("#cad3d-expand")) == null ? void 0 : _b.addEventListener("click", (g) => {
        g.stopPropagation(), Ae.classList.remove("collapsed");
      }), Ae.querySelectorAll("[data-ex]").forEach((g) => {
        g.addEventListener("click", (S) => {
          S.stopPropagation();
          const y = g.dataset.ex;
          ks(y), Ke.example(y);
        });
      }), Ae.querySelectorAll("[data-view]").forEach((g) => {
        g.addEventListener("click", (S) => {
          S.stopPropagation();
          const y = g.dataset.view;
          yo(y), Ae.querySelectorAll("[data-view]").forEach((C) => C.classList.remove("view-active")), g.classList.add("view-active");
        });
      }), (_c = Ae.querySelector("#cad3d-btn-clear")) == null ? void 0 : _c.addEventListener("click", (g) => {
        g.stopPropagation(), k = "", ia.val = false, wa(), Ke.clear();
      }), (_d = Ae.querySelector("#cad3d-select")) == null ? void 0 : _d.addEventListener("click", (g) => {
        var _a3;
        g.stopPropagation(), oo && (oo = false, zo()), po && cn(), Yt = !Yt, (_a3 = Ae.querySelector("#cad3d-select")) == null ? void 0 : _a3.classList.toggle("inspect-active", Yt);
        const y = et();
        y && (y.controls.enabled = !Yt), Yt || rn();
      }), (_e2 = Ae.querySelector("#cad3d-draw")) == null ? void 0 : _e2.addEventListener("click", (g) => {
        var _a3;
        g.stopPropagation(), oo && (oo = false, zo()), Yt && rn(), po = !po, (_a3 = Ae.querySelector("#cad3d-draw")) == null ? void 0 : _a3.classList.toggle("inspect-active", po), po ? La() : cn();
      }), (_f = Ae.querySelector("#cad3d-inspect")) == null ? void 0 : _f.addEventListener("click", (g) => {
        var _a3;
        g.stopPropagation(), Yt && rn(), po && cn(), oo = !oo, (_a3 = Ae.querySelector("#cad3d-inspect")) == null ? void 0 : _a3.classList.toggle("inspect-active", oo), oo || zo();
      }), (_g = Ae.querySelector("#cad3d-new-model")) == null ? void 0 : _g.addEventListener("click", (g) => {
        g.stopPropagation(), Ke.clear(), Ve = null;
      });
      const t = Ae.querySelector("#cad3d-tests-menu");
      t && t.addEventListener("change", () => {
        const g = t.value;
        t.value = "", g && o(g);
      });
      function o(g) {
        var _a3, _b2, _c2, _d2, _e3, _f2;
        const C = 15e3 * Math.sqrt(210) * 10, X = 0.2, U = C / (2 * (1 + X)), ae = 0.09, Z = 0.3 ** 4 / 12, K = 0.141 * 0.3 ** 4, de = 0.25 * 0.4, ie = 0.25 * 0.4 ** 3 / 12, Ie = 0.4 * 0.25 ** 3 / 12, Re = 1e-3, q = 5 / 6 * ae, fe = 5 / 6 * de, oe = [];
        function pe(Q, me, we) {
          const ne = {
            elasticities: /* @__PURE__ */ new Map(),
            shearModuli: /* @__PURE__ */ new Map(),
            areas: /* @__PURE__ */ new Map(),
            momentsOfInertiaZ: /* @__PURE__ */ new Map(),
            momentsOfInertiaY: /* @__PURE__ */ new Map(),
            torsionalConstants: /* @__PURE__ */ new Map(),
            shearAreasY: /* @__PURE__ */ new Map(),
            shearAreasZ: /* @__PURE__ */ new Map()
          };
          for (const Ee of me) ne.elasticities.set(Ee, C), ne.shearModuli.set(Ee, U), ne.areas.set(Ee, ae), ne.momentsOfInertiaZ.set(Ee, Z), ne.momentsOfInertiaY.set(Ee, Z), ne.torsionalConstants.set(Ee, K), ne.shearAreasY.set(Ee, q), ne.shearAreasZ.set(Ee, q);
          for (const Ee of we) ne.elasticities.set(Ee, C), ne.shearModuli.set(Ee, U), ne.areas.set(Ee, de), ne.momentsOfInertiaZ.set(Ee, Ie), ne.momentsOfInertiaY.set(Ee, ie), ne.torsionalConstants.set(Ee, Re), ne.shearAreasY.set(Ee, fe), ne.shearAreasZ.set(Ee, fe);
          return ne;
        }
        if (g === "test-cantilever" || g === "test-all") {
          const we = 270 / (3 * C * Z), ne = [
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
          ], je = pe(1, [], []);
          je.elasticities.set(0, C), je.shearModuli.set(0, U), je.areas.set(0, ae), je.momentsOfInertiaZ.set(0, Z), je.momentsOfInertiaY.set(0, Z), je.torsionalConstants.set(0, K);
          const rt = Lt(ne, Ee, {
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
          }, je);
          oe.push({
            name: "Cantilever Beam",
            formulation: "Euler-Bernoulli (PL\xB3/3EI)",
            nodes: ne,
            elements: Ee,
            results: [
              {
                label: "Uz tip (cm)",
                awatif: rt.deformations.get(1)[2] * 100,
                reference: we * 100,
                refSource: "Analytical"
              }
            ]
          });
        }
        if (g === "test-portal-1p" || g === "test-all") {
          const Q = [
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
          ], me = [
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
          ], we = pe(3, [
            0,
            1
          ], [
            2
          ]), ne = Lt(Q, me, {
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
          }, we);
          oe.push({
            name: "Portal 1-Story (Timoshenko)",
            formulation: "Frame Timoshenko (As=5/6\xB7A)",
            nodes: Q,
            elements: me,
            results: [
              {
                label: "Ux top (cm)",
                awatif: ne.deformations.get(2)[0] * 100,
                reference: 2.0618,
                refSource: "ETABS 22.6"
              }
            ]
          });
        }
        if (g === "test-portal-2p" || g === "test-all") {
          const Q = [
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
          ], me = [
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
          ], we = pe(6, [
            0,
            1,
            2,
            3
          ], [
            4,
            5
          ]), ne = Lt(Q, me, {
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
          }, we);
          oe.push({
            name: "Portal 2-Story",
            formulation: "Frame Timoshenko",
            nodes: Q,
            elements: me,
            results: [
              {
                label: "Ux Z=3m (cm)",
                awatif: ne.deformations.get(2)[0] * 100,
                reference: 2.5188,
                refSource: "ETABS 22.6"
              },
              {
                label: "Ux Z=6m (cm)",
                awatif: ne.deformations.get(4)[0] * 100,
                reference: 5.6424,
                refSource: "ETABS 22.6"
              }
            ]
          });
        }
        if (g === "test-wall-only" || g === "test-all") {
          const Q = [
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
          ], me = [
            [
              0,
              1,
              2,
              3
            ]
          ], ne = Lt(Q, me, {
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
                C
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
                X
              ]
            ])
          });
          oe.push({
            name: "Wall Q4 Only",
            formulation: "Membrane (incompatible modes) + Mindlin-Reissner + Hughes-Brezzi drilling",
            nodes: Q,
            elements: me,
            results: [
              {
                label: "Ux top (cm)",
                awatif: ne.deformations.get(2)[0] * 100,
                reference: 0.013519,
                refSource: "ETABS 22.6"
              }
            ]
          });
        }
        if (g === "test-portal-wall" || g === "test-all") {
          const Q = [
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
          ], me = [
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
          ], we = pe(6, [
            0,
            1,
            2,
            3
          ], [
            4,
            5
          ]);
          we.elasticities.set(6, C), we.shearModuli.set(6, U), we.thicknesses = /* @__PURE__ */ new Map([
            [
              6,
              0.2
            ]
          ]), we.poissonsRatios = /* @__PURE__ */ new Map([
            [
              6,
              X
            ]
          ]);
          const ne = Lt(Q, me, {
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
          }, we);
          oe.push({
            name: "Portal 2-Story + Wall Q4",
            formulation: "Frame Timoshenko + Shell Q4 (Hughes-Brezzi drilling)",
            nodes: Q,
            elements: me,
            results: [
              {
                label: "Ux h=3m (cm)",
                awatif: ne.deformations.get(2)[0] * 100,
                reference: 0.0195,
                refSource: "ETABS 22.6"
              },
              {
                label: "Ux h=6m (cm)",
                awatif: ne.deformations.get(4)[0] * 100,
                reference: 2.1133,
                refSource: "ETABS 22.6"
              }
            ]
          });
        }
        if (g === "test-wilson-beam" || g === "test-all") {
          const rt = 0.6666666666666666, ct = [
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
          ], At = [
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
          ], _t = {
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
          }, Ft = /* @__PURE__ */ new Map();
          Ft.set(0, [
            true,
            true,
            true,
            true,
            true,
            true
          ]), Ft.set(5, [
            true,
            true,
            true,
            true,
            true,
            true
          ]);
          const Bt = /* @__PURE__ */ new Map();
          Bt.set(2, [
            0,
            0.5,
            0,
            0,
            0,
            0
          ]), Bt.set(3, [
            0,
            0.5,
            0,
            0,
            0,
            0
          ]);
          const So = 5 ** 3 / (3 * 1500 * rt);
          try {
            const ao = Lt(ct, At, {
              supports: Ft,
              loads: Bt
            }, _t), Vt = Math.abs(((_b2 = (_a3 = ao.deformations) == null ? void 0 : _a3.get(2)) == null ? void 0 : _b2[1]) ?? 0), ot = Math.abs(((_d2 = (_c2 = ao.deformations) == null ? void 0 : _c2.get(3)) == null ? void 0 : _d2[1]) ?? 0), St = (Vt + ot) / 2, eo = St / So;
            oe.push({
              name: "Wilson Fig 6.2 \u2014 Cantilever Q4",
              formulation: "2 Q4 elements + incompatible modes (Wilson 1971, Table 6.1)",
              nodes: ct,
              elements: At,
              results: [
                {
                  label: "Uy/Uy_exact (cortante)",
                  awatif: eo,
                  reference: 0.932,
                  refSource: "Wilson Table 6.1"
                },
                {
                  label: "Uy free end",
                  awatif: St,
                  reference: So * 0.932,
                  refSource: "Wilson"
                }
              ]
            });
          } catch (ao) {
            oe.push({
              name: "Wilson Fig 6.2 \u2014 Cantilever Q4",
              formulation: "ERROR: " + ao.message,
              nodes: ct,
              elements: At,
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
          const rt = 40 * Math.PI / 180, ct = 8, At = 8, _t = [];
          for (let ot = 0; ot <= ct; ot++) for (let St = 0; St <= At; St++) {
            const eo = 25 * ot / ct, Ot = rt * St / At, bo = 25 * Math.sin(Ot), mo = 25 * Math.cos(Ot) - 25 * Math.cos(rt);
            _t.push([
              eo,
              bo,
              mo
            ]);
          }
          const Ft = [];
          for (let ot = 0; ot < ct; ot++) for (let St = 0; St < At; St++) {
            const eo = ot * (At + 1) + St, Ot = (ot + 1) * (At + 1) + St, bo = (ot + 1) * (At + 1) + (St + 1), mo = ot * (At + 1) + (St + 1);
            Ft.push([
              eo,
              Ot,
              bo,
              mo
            ]);
          }
          const Bt = {
            elasticities: /* @__PURE__ */ new Map(),
            shearModuli: /* @__PURE__ */ new Map(),
            thicknesses: /* @__PURE__ */ new Map(),
            poissonsRatios: /* @__PURE__ */ new Map()
          }, So = 432e6 / (2 * 1);
          for (let ot = 0; ot < Ft.length; ot++) Bt.elasticities.set(ot, 432e6), Bt.shearModuli.set(ot, So), Bt.thicknesses.set(ot, 0.25), Bt.poissonsRatios.set(ot, 0);
          const ao = /* @__PURE__ */ new Map();
          for (let ot = 0; ot <= ct; ot++) for (let St = 0; St <= At; St++) {
            const eo = ot * (At + 1) + St, Ot = [
              false,
              false,
              false,
              false,
              false,
              false
            ];
            ot === 0 && (Ot[0] = true, Ot[4] = true, Ot[5] = true), ot === ct && (Ot[1] = true, Ot[2] = true, Ot[3] = true), St === 0 && (Ot[1] = true, Ot[3] = true, Ot[5] = true), Ot.some((bo) => bo) && ao.set(eo, Ot);
          }
          const Vt = /* @__PURE__ */ new Map();
          for (const ot of Ft) {
            const St = _t[ot[0]], eo = _t[ot[1]], Ot = _t[ot[2]], bo = _t[ot[3]], mo = [
              Ot[0] - St[0],
              Ot[1] - St[1],
              Ot[2] - St[2]
            ], Ho = [
              bo[0] - eo[0],
              bo[1] - eo[1],
              bo[2] - eo[2]
            ], Vs = mo[1] * Ho[2] - mo[2] * Ho[1], Us = mo[2] * Ho[0] - mo[0] * Ho[2], Xs = mo[0] * Ho[1] - mo[1] * Ho[0], Ja = -90 * (0.5 * Math.sqrt(Vs * Vs + Us * Us + Xs * Xs)) / 4;
            for (const Ks of ot) {
              const Zs = Vt.get(Ks) || [
                0,
                0,
                0,
                0,
                0,
                0
              ];
              Zs[2] += Ja, Vt.set(Ks, Zs);
            }
          }
          try {
            const ot = Lt(_t, Ft, {
              supports: ao,
              loads: Vt
            }, Bt), St = At, eo = ((_f2 = (_e3 = ot.deformations) == null ? void 0 : _e3.get(St)) == null ? void 0 : _f2[2]) ?? 0;
            oe.push({
              name: "Scordelis-Lo Barrel Vault",
              formulation: `Shell Q4 (${ct}x${At} mesh), Mindlin-Reissner + incompatible modes`,
              nodes: _t,
              elements: Ft,
              results: [
                {
                  label: "Uz midspan free edge (ft)",
                  awatif: Math.abs(eo),
                  reference: 0.3086,
                  refSource: "Wilson (2004) / MacNeal-Harder"
                }
              ]
            });
          } catch (ot) {
            oe.push({
              name: "Scordelis-Lo Barrel Vault",
              formulation: "ERROR: " + ot.message,
              nodes: _t,
              elements: Ft,
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
        if (p(oe), oe.length > 0) {
          const Q = oe[oe.length - 1];
          e.nodes.val = Q.nodes, e.elements.val = Q.elements;
          const me = /* @__PURE__ */ new Map(), we = /* @__PURE__ */ new Map(), ne = Math.max(...Q.nodes.map((Ee) => Ee[2]));
          Q.nodes.forEach((Ee, je) => {
            Math.abs(Ee[2]) < 0.01 && me.set(je, [
              true,
              true,
              true,
              true,
              true,
              true
            ]), Math.abs(Ee[2] - ne) < 0.01 && we.set(je, [
              10,
              0,
              0,
              0,
              0,
              0
            ]);
          }), e.nodeInputs.val = {
            supports: me,
            loads: we
          }, e.elementInputs.val = {}, e.deformOutputs.val = {}, e.analyzeOutputs.val = {};
        }
      }
      function n(g) {
        const S = 15e3 * Math.sqrt(210) * 10, y = [];
        y.push(`$ File exported from Awatif FEM Validation: ${g.name}`), y.push(" "), y.push("$ PROGRAM INFORMATION"), y.push('  PROGRAM  "ETABS"  VERSION "22.6.0"  '), y.push(""), y.push("$ CONTROLS"), y.push('  UNITS  "TONF"  "M"  "C"  '), y.push("");
        const C = /* @__PURE__ */ new Set();
        g.nodes.forEach((q) => C.add(Math.round(q[1] * 1e4) / 1e4));
        const X = [
          ...C
        ].sort((q, fe) => q - fe), U = X.map((q, fe) => fe === 0 ? "Base" : `Level_${fe}`), ae = /* @__PURE__ */ new Map();
        X.forEach((q, fe) => ae.set(q, U[fe])), y.push("$ STORIES - IN SEQUENCE FROM TOP");
        for (let q = X.length - 1; q >= 1; q--) y.push(`  STORY "${U[q]}"  HEIGHT ${X[q] - X[q - 1]} MASTERSTORY "Yes"  `);
        y.push(`  STORY "Base"  ELEV ${X[0]} `), y.push(""), y.push("$ MATERIAL PROPERTIES"), y.push('  MATERIAL  "CONC"    TYPE "Concrete"    WEIGHTPERVOLUME 2.4'), y.push(`  MATERIAL  "CONC"    SYMTYPE "Isotropic"  E ${S}  U 0.2  A 1E-05`), y.push(""), y.push("$ FRAME SECTIONS"), y.push('  FRAMESECTION  "COL30"  MATERIAL "CONC"  SHAPE "Concrete Rectangular"  D 0.3 B 0.3 '), y.push('  FRAMESECTION  "VIGA"  MATERIAL "CONC"  SHAPE "Concrete Rectangular"  D 0.4 B 0.25 '), y.push("");
        const Z = g.elements.some((q) => q.length === 4);
        Z && (y.push("$ WALL/SLAB/DECK SECTIONS"), y.push('  SHELLPROP  "Muro20"  PROPTYPE  "Wall"  MATERIAL "CONC"  MODELINGTYPE "ShellThick"  WALLTHICKNESS 0.2 '), y.push(""));
        const K = /* @__PURE__ */ new Map();
        let de = 0;
        g.nodes.forEach((q) => {
          const fe = `${q[0]},${q[2]}`;
          K.has(fe) || K.set(fe, `${++de}`);
        }), y.push("$ POINT COORDINATES");
        for (const [q, fe] of K) {
          const [oe, pe] = q.split(",").map(Number);
          y.push(`  POINT "${fe}"  ${oe} ${pe} `);
        }
        y.push("");
        const ie = (q) => {
          const fe = g.nodes[q], oe = `${fe[0]},${fe[2]}`;
          return {
            pt: K.get(oe) || "1",
            story: ae.get(Math.round(fe[1] * 1e4) / 1e4) || "Base"
          };
        };
        y.push("$ LINE CONNECTIVITIES");
        const Ie = [];
        if (g.elements.forEach((q, fe) => {
          if (q.length !== 2) return;
          const oe = g.nodes[q[0]], pe = g.nodes[q[1]], Q = Math.abs(pe[1] - oe[1]), me = Math.sqrt((pe[0] - oe[0]) ** 2 + (pe[2] - oe[2]) ** 2), we = Q > me * 0.5, ne = ie(q[0]), Ee = ie(q[1]), je = we ? "COL30" : "VIGA";
          we ? (y.push(`  LINE  "E${fe + 1}"  COLUMN  "${ne.pt}"  "${ne.pt}"  1`), Ie.push(`  LINEASSIGN  "E${fe + 1}"  "${Ee.story}"  SECTION "${je}"  `)) : (y.push(`  LINE  "E${fe + 1}"  BEAM  "${ne.pt}"  "${Ee.pt}"  0`), Ie.push(`  LINEASSIGN  "E${fe + 1}"  "${ne.story}"  SECTION "${je}"  `));
        }), y.push(""), Z) {
          y.push("$ AREA CONNECTIVITIES");
          const q = [];
          g.elements.forEach((fe, oe) => {
            if (fe.length !== 4) return;
            const pe = fe.map((Q) => ie(Q));
            y.push(`  AREA "W${oe + 1}"  PANEL  4  "${pe[0].pt}"  "${pe[1].pt}"  "${pe[2].pt}"  "${pe[3].pt}"  1  1  0  0  `), q.push(`  AREAASSIGN  "W${oe + 1}"  "${pe[2].story}"  SECTION "Muro20"  `);
          }), y.push(""), y.push("$ AREA ASSIGNS"), q.forEach((fe) => y.push(fe)), y.push("");
        }
        y.push("$ POINT ASSIGNS"), g.nodes.forEach((q, fe) => {
          if (Math.abs(q[1]) < 0.01) {
            const oe = ie(fe);
            y.push(`  POINTASSIGN  "${oe.pt}"  "${oe.story}"  RESTRAINT "UX UY UZ RX RY RZ"  `);
          }
        }), y.push(""), y.push("$ LINE ASSIGNS"), Ie.forEach((q) => y.push(q)), y.push(""), y.push("$ LOAD PATTERNS"), y.push('  LOADPATTERN "Lat"  TYPE  "Other"  SELFWEIGHT  0'), y.push(""), y.push("$ POINT OBJECT LOADS");
        const Re = Math.max(...g.nodes.map((q) => q[1]));
        return g.nodes.forEach((q, fe) => {
          if (Math.abs(q[1] - Re) < 0.01) {
            const oe = ie(fe);
            y.push(`  POINTLOAD  "${oe.pt}"  "${oe.story}"  "Lat"  TYPE "FORCE"  FX 10`);
          }
        }), y.push(""), y.push("  END"), y.push("$ END OF MODEL FILE"), y.join(`\r
`);
      }
      function l(g) {
        const S = 15e3 * Math.sqrt(210) * 10, y = [];
        y.push(`"""ETABS API Validation: ${g.name}`), y.push('Generated by Awatif FEM Studio"""'), y.push("import comtypes.client, time, math"), y.push(""), y.push("helper = comtypes.client.CreateObject('ETABSv1.Helper')"), y.push("helper = helper.QueryInterface(comtypes.gen.ETABSv1.cHelper)"), y.push('myETABS = helper.CreateObjectProgID("CSI.ETABS.API.ETABSObject")'), y.push("myETABS.ApplicationStart()"), y.push("time.sleep(10)"), y.push("SapModel = myETABS.SapModel"), y.push("SapModel.InitializeNewModel()"), y.push("SapModel.File.NewBlank()"), y.push("SapModel.SetPresentUnits(12)  # tonf_m_C"), y.push(""), y.push(`E = ${S}`), y.push('SapModel.PropMaterial.SetMaterial("CONC", 2)'), y.push('SapModel.PropMaterial.SetMPIsotropic("CONC", E, 0.2, 5.5e-6)'), y.push('SapModel.PropFrame.SetRectangle("COL30", "CONC", 0.30, 0.30)'), y.push('SapModel.PropFrame.SetRectangle("VIGA", "CONC", 0.40, 0.25)'), g.elements.some((U) => U.length === 4) && y.push('SapModel.PropArea.SetWall("Muro20", 6, False, "CONC", 0.20)'), y.push(""), y.push("# Add elements"), y.push("FN = ' '"), g.elements.forEach((U, ae) => {
          if (U.length === 2) {
            const Z = g.nodes[U[0]], K = g.nodes[U[1]], de = Math.abs(K[1] - Z[1]), ie = Math.sqrt((K[0] - Z[0]) ** 2 + (K[2] - Z[2]) ** 2), Ie = de > ie * 0.5 ? "COL30" : "VIGA";
            y.push(`[FN,r]=SapModel.FrameObj.AddByCoord(${Z[0]},${Z[2]},${Z[1]}, ${K[0]},${K[2]},${K[1]}, FN,"${Ie}","E${ae + 1}","Global")`);
          } else if (U.length === 4) {
            const Z = U.map((K) => g.nodes[K]);
            y.push(`SapModel.AreaObj.AddByCoord(4, [${Z.map((K) => K[0]).join(",")}], [${Z.map((K) => K[2]).join(",")}], [${Z.map((K) => K[1]).join(",")}], "", "Muro20")`);
          }
        }), y.push(""), y.push("# Supports at Z=0"), y.push("names = SapModel.PointObj.GetNameList()"), y.push("for i in range(int(names[0])):"), y.push("    c = SapModel.PointObj.GetCoordCartesian(names[1][i])"), y.push("    if abs(float(c[2])) < 0.01:"), y.push("        SapModel.PointObj.SetRestraint(names[1][i], [True]*6)"), y.push(""), y.push("# Load at top"), y.push('SapModel.LoadPatterns.Add("Lat", 8, 0, True)');
        const X = Math.max(...g.nodes.map((U) => U[1]));
        y.push("names = SapModel.PointObj.GetNameList()"), y.push("for i in range(int(names[0])):"), y.push("    c = SapModel.PointObj.GetCoordCartesian(names[1][i])"), y.push(`    if abs(float(c[2]) - ${X}) < 0.01:`), y.push('        SapModel.PointObj.SetLoadForce(names[1][i], "Lat", [10,0,0,0,0,0])'), y.push(""), y.push(`SapModel.File.Save(r"C:\\Users\\j-b-j\\Downloads\\validation_${g.name.replace(/[^a-zA-Z0-9]/g, "_")}.EDB")`), y.push("time.sleep(1)"), y.push("SapModel.Analyze.RunAnalysis()"), y.push("time.sleep(5)"), y.push(""), y.push("# Results"), y.push("SapModel.Results.Setup.DeselectAllCasesAndCombosForOutput()"), y.push('SapModel.Results.Setup.SetCaseSelectedForOutput("Lat")'), y.push(`print(f"\\n=== ETABS: ${g.name} ===")`), y.push("names = SapModel.PointObj.GetNameList()"), y.push("for i in range(int(names[0])):"), y.push("    name = names[1][i]"), y.push("    c = SapModel.PointObj.GetCoordCartesian(name)"), y.push("    NR=0;Obj=[];Elm=[];AC=[];ST=[];SN=[];U1=[];U2=[];U3=[];R1=[];R2=[];R3=[]"), y.push("    [NR,Obj,Elm,AC,ST,SN,U1,U2,U3,R1,R2,R3,ret]=SapModel.Results.JointDispl(name,0,NR,Obj,Elm,AC,ST,SN,U1,U2,U3,R1,R2,R3)"), y.push("    if NR > 0:"), y.push('        print(f"  {name} Z={float(c[2]):.1f}: Ux={U1[0]*100:.4f} cm")'), y.push(""), y.push('print("\\nAwatif results:")');
        for (const U of g.results) y.push(`print(f"  ${U.label}: Awatif=${U.awatif.toFixed(4)}, ETABS=${U.reference.toFixed(4)}, Ratio={${U.awatif.toFixed(4)}/${U.reference.toFixed(4)}:.4f}")`);
        return y.push("SapModel.View.RefreshView(0, False)"), y.join(`
`);
      }
      function a(g, S) {
        const y = new Blob([
          g
        ], {
          type: "text/plain"
        }), C = URL.createObjectURL(y), X = document.createElement("a");
        X.href = C, X.download = S, X.click(), URL.revokeObjectURL(C);
      }
      function p(g) {
        let S = document.getElementById("test-results-overlay");
        S && S.remove(), S = document.createElement("div"), S.id = "test-results-overlay", S.style.cssText = `position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);
        background:#1a1a2e;color:#eee;border:2px solid #16213e;border-radius:8px;padding:20px;
        z-index:10000;max-width:750px;width:90%;max-height:80vh;overflow-y:auto;font-family:monospace;font-size:13px;
        box-shadow:0 10px 40px rgba(0,0,0,0.5);`;
        let y = `<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px">
        <h3 style="margin:0;color:#00d4ff">Awatif FEM Validation</h3>
        <button onclick="this.parentElement.parentElement.remove()" style="background:none;border:none;color:#888;font-size:18px;cursor:pointer">X</button>
      </div>`, C = true;
        window.__awatifTests = g;
        for (let U = 0; U < g.length; U++) {
          const ae = g[U];
          y += '<div style="margin-bottom:16px;border:1px solid #333;border-radius:6px;padding:10px">', y += '<div style="display:flex;justify-content:space-between;align-items:center">', y += `<div style="font-weight:bold;color:#00d4ff">${ae.name}</div>`, y += "<div>", y += `<button onclick="window.__awatifDownloadE2k(${U})" style="background:#1e3a5f;color:#aaa;border:1px solid #444;padding:2px 6px;font-size:10px;cursor:pointer;margin-right:4px;border-radius:3px">e2k</button>`, y += `<button onclick="window.__awatifDownloadPy(${U})" style="background:#2a1e3a;color:#aaa;border:1px solid #444;padding:2px 6px;font-size:10px;cursor:pointer;border-radius:3px">py</button>`, y += "</div></div>", y += `<div style="color:#888;font-size:11px;margin-bottom:8px">${ae.formulation}</div>`, y += `<table style="width:100%;border-collapse:collapse;font-size:12px">
          <tr style="color:#888"><td style="padding:3px 6px">Measure</td><td style="text-align:right">Awatif</td><td style="text-align:right">Reference</td><td style="text-align:right">Ratio</td><td style="text-align:right">Source</td><td style="text-align:center"></td></tr>`;
          for (const Z of ae.results) {
            const K = Z.reference !== 0 ? Z.awatif / Z.reference : 1, de = Math.abs(K - 1) < 0.05;
            de || (C = false);
            const ie = de ? "#4caf50" : "#f44336", Ie = de ? "PASS" : "FAIL";
            y += `<tr style="border-top:1px solid #333">
            <td style="padding:3px 6px">${Z.label}</td>
            <td style="text-align:right;color:#fff">${Z.awatif.toFixed(4)}</td>
            <td style="text-align:right;color:#aaa">${Z.reference.toFixed(4)}</td>
            <td style="text-align:right;color:${ie};font-weight:bold">${K.toFixed(4)}</td>
            <td style="text-align:right;color:#888;font-size:11px">${Z.refSource}</td>
            <td style="text-align:center;color:${ie};font-size:10px;font-weight:bold">${Ie}</td></tr>`;
          }
          y += "</table></div>";
        }
        y += C ? '<div style="color:#4caf50;font-weight:bold;text-align:center;margin-top:8px">ALL TESTS PASSED (< 5% error vs ETABS)</div>' : '<div style="color:#f44336;font-weight:bold;text-align:center;margin-top:8px">Some tests exceeded 5% tolerance</div>', S.innerHTML = y, document.body.appendChild(S), window.__awatifDownloadE2k = (U) => {
          const ae = window.__awatifTests[U], Z = ae.name.replace(/[^a-zA-Z0-9]/g, "_").toLowerCase();
          a(n(ae), `${Z}.e2k`);
        }, window.__awatifDownloadPy = (U) => {
          const ae = window.__awatifTests[U], Z = ae.name.replace(/[^a-zA-Z0-9]/g, "_").toLowerCase();
          a(l(ae), `${Z}_etabs.py`);
        };
      }
      (_h = Ae.querySelector("#cad3d-export")) == null ? void 0 : _h.addEventListener("click", (g) => {
        g.stopPropagation(), Ea();
      });
      let s = "";
      const r = Ae.querySelector("#cad3d-io-menu"), f = Ae.querySelector("#cad3d-io-file");
      function c(g, S) {
        e.nodes.val = g.nodes, e.elements.val = g.elements, e.nodeInputs.val = g.nodeInputs, e.elementInputs.val = g.elementInputs, g.sectionShapes && g.elementInputs && (g.elementInputs.sectionShapes = g.sectionShapes), e.deformOutputs.val = {}, e.analyzeOutputs.val = {};
        const y = g.elements.filter((X) => X.length === 2).length, C = g.elements.filter((X) => X.length >= 3).length;
        console.log(`${S} (${g.nodes.length} nodos, ${y} frames, ${C} shells): ${g.nodes.length} nodes, ${g.elements.length} elements`), setTimeout(() => It(), 50);
      }
      function d(g, S) {
        var _a3, _b2, _c2;
        const y = {};
        g.elementInfo.forEach((K) => y[K.category] = (y[K.category] || 0) + 1), (_a3 = document.getElementById("ifc-filter-panel")) == null ? void 0 : _a3.remove();
        const C = document.createElement("div");
        C.id = "ifc-filter-panel", C.style.cssText = `position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);
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
        let Z = `<h3 style="color:#00ccff;margin:0 0 12px">IFC \u2192 Modelo Anal\xEDtico</h3>
        <div style="color:#888;margin-bottom:10px">Selecciona qu\xE9 convertir a FEM:</div>
        <div style="border:1px solid #444;border-radius:6px;padding:8px;margin-bottom:8px">
          <div style="color:#33ff33;font-weight:bold;margin-bottom:4px">Estructural</div>`;
        for (const K of X) {
          const de = y[K] || 0;
          if (de === 0) continue;
          const ie = [
            "column",
            "beam",
            "slab"
          ].includes(K) ? "checked" : "";
          Z += `<label style="display:flex;align-items:center;gap:6px;padding:2px 0">
          <input type="checkbox" data-ifc-cat="${K}" ${ie}>
          <span>${ae[K] || K}</span>
          <span style="color:#888;margin-left:auto">(${de})</span>
        </label>`;
        }
        Z += `</div><div style="border:1px solid #333;border-radius:6px;padding:8px;margin-bottom:12px">
        <div style="color:#ff6666;font-weight:bold;margin-bottom:4px">No estructural (solo visual)</div>`;
        for (const K of U) {
          const de = y[K] || 0;
          de !== 0 && (Z += `<label style="display:flex;align-items:center;gap:6px;padding:2px 0;color:#888">
          <input type="checkbox" data-ifc-cat="${K}" disabled>
          <span>${ae[K] || K}</span>
          <span style="margin-left:auto">(${de})</span>
        </label>`);
        }
        Z += `</div>
        <div style="display:flex;gap:8px">
          <button id="ifc-gen-analytical" style="flex:1;padding:8px;background:#0f3460;color:#fff;border:none;border-radius:6px;cursor:pointer;font-size:13px;font-weight:bold">
            \u{1F527} Generar Modelo Anal\xEDtico
          </button>
          <button id="ifc-cancel" style="padding:8px 12px;background:#333;color:#aaa;border:1px solid #555;border-radius:6px;cursor:pointer">\u2715</button>
        </div>`, C.innerHTML = Z, document.body.appendChild(C), C.querySelectorAll("input[data-ifc-cat]").forEach((K) => {
          K.addEventListener("change", () => {
            const de = K.dataset.ifcCat, ie = g.detailCategories.get(de);
            if (ie) {
              ie.visible = K.checked;
              const Ie = et();
              Ie && Ie.render();
            }
          });
        }), (_b2 = C.querySelector("#ifc-gen-analytical")) == null ? void 0 : _b2.addEventListener("click", () => {
          var _a4;
          const K = /* @__PURE__ */ new Set();
          C.querySelectorAll("input[data-ifc-cat]:checked").forEach((oe) => {
            K.add(oe.dataset.ifcCat);
          });
          const de = S.nodes.map((oe) => [
            oe.x,
            oe.y,
            oe.z
          ]), ie = [], Ie = {
            elasticities: /* @__PURE__ */ new Map(),
            shearModuli: /* @__PURE__ */ new Map(),
            areas: /* @__PURE__ */ new Map(),
            momentsOfInertiaZ: /* @__PURE__ */ new Map(),
            momentsOfInertiaY: /* @__PURE__ */ new Map(),
            torsionalConstants: /* @__PURE__ */ new Map(),
            densities: /* @__PURE__ */ new Map(),
            sectionShapes: /* @__PURE__ */ new Map()
          }, Re = {
            supports: /* @__PURE__ */ new Map(),
            loads: /* @__PURE__ */ new Map()
          };
          let q = 0;
          for (const oe of S.elements) if (K.has(oe.category) && oe.type === "frame" && oe.nodeIds.length >= 2) {
            ie.push(oe.nodeIds);
            const pe = ((_a4 = S.materials) == null ? void 0 : _a4.get(oe.material)) || {
              E: 2132888792e-2,
              nu: 0.2,
              rho: 2.4
            }, Q = oe.b || 0.3, me = oe.h || 0.3, we = Q * me, ne = Q * me * me * me / 12, Ee = me * Q * Q * Q / 12, je = Q * me * (Q * Q + me * me) / 12, rt = pe.E / (2 * (1 + pe.nu));
            Ie.elasticities.set(q, pe.E), Ie.shearModuli.set(q, rt), Ie.areas.set(q, we), Ie.momentsOfInertiaZ.set(q, Ee), Ie.momentsOfInertiaY.set(q, ne), Ie.torsionalConstants.set(q, je), Ie.densities.set(q, pe.rho), Ie.sectionShapes.set(q, {
              type: "rect",
              b: Q,
              h: me,
              name: oe.sectionName
            }), q++;
          }
          const fe = Math.min(...de.map((oe) => oe[2]));
          de.forEach((oe, pe) => {
            Math.abs(oe[2] - fe) < 0.05 && Re.supports.set(pe, [
              true,
              true,
              true,
              true,
              true,
              true
            ]);
          });
          for (const [, oe] of g.detailCategories) {
            const pe = et();
            pe && pe.scene.remove(oe);
          }
          c({
            nodes: de,
            elements: ie,
            nodeInputs: Re,
            elementInputs: Ie,
            sectionShapes: Ie.sectionShapes,
            info: {
              nNodes: de.length,
              nFrames: ie.length
            }
          }, "IFC analytical"), C.remove();
        }), (_c2 = C.querySelector("#ifc-cancel")) == null ? void 0 : _c2.addEventListener("click", () => {
          for (const [, de] of g.detailCategories) {
            const ie = et();
            ie && ie.scene.remove(de);
          }
          const K = et();
          K && K.render(), C.remove();
        });
      }
      function m(g) {
        _ = /* @__PURE__ */ new Set(), J = /* @__PURE__ */ new Set(), $e = /* @__PURE__ */ new Map(), Te = /* @__PURE__ */ new Map();
        const S = /* @__PURE__ */ new Map();
        for (let ie = 0; ie < g.stories.length; ie++) S.set(g.stories[ie].name, ie);
        for (let ie = 0; ie < g.elementTypes.length; ie++) {
          const Ie = g.elementTypes[ie], Re = g.elementStories[ie], q = S.get(Re) ?? 0;
          $e.set(ie, q), Ie === "COLUMN" || Ie === "BRACE" ? _.add(ie) : J.add(ie);
        }
        k = "edificio";
        const y = g.grids.filter((ie) => ie.dir === "X").sort((ie, Ie) => ie.coord - Ie.coord), C = g.grids.filter((ie) => ie.dir === "Y").sort((ie, Ie) => ie.coord - Ie.coord);
        let X, U, ae, Z;
        if (y.length > 0 || C.length > 0) X = y.map((ie) => ie.coord), U = C.map((ie) => ie.coord), ae = y.map((ie) => ie.label), Z = C.map((ie) => ie.label);
        else {
          const ie = new Set(g.nodes.map((Re) => Re[0])), Ie = new Set(g.nodes.map((Re) => Re[1]));
          X = [
            ...ie
          ].sort((Re, q) => Re - q), U = [
            ...Ie
          ].sort((Re, q) => Re - q), ae = X.map((Re, q) => String(q + 1)), Z = U.map((Re, q) => String.fromCharCode(65 + q));
        }
        const K = g.stories.length > 0 ? Math.max(...g.stories.map((ie) => ie.elev)) : Math.max(...g.nodes.map((ie) => ie[2]));
        We = X, Xe = U, pt = K, setTimeout(() => {
          It(), Xo(X, U, K, ae, Z), wn(g.stories, X, U), Nn(), qn();
        }, 100);
        const de = {
          COLUMN: 0,
          BEAM: 0,
          BRACE: 0
        };
        for (const ie of g.elementTypes) de[ie]++;
        console.log(`E2K grids: X=[${ae.join(",")}] Y=[${Z.join(",")}]`), console.log(`E2K stories: ${g.stories.map((ie) => `${ie.name}@${ie.elev.toFixed(2)}`).join(", ")}`), console.log(`E2K elements: ${de.COLUMN} columns, ${de.BEAM} beams, ${de.BRACE} braces`), Ze();
      }
      function E(g, S) {
        const y = new Blob([
          g
        ], {
          type: "text/plain"
        }), C = URL.createObjectURL(y), X = document.createElement("a");
        X.href = C, X.download = S, X.click(), URL.revokeObjectURL(C);
      }
      r && r.addEventListener("change", () => {
        if (s = r.value, r.value = "", s.startsWith("import")) s === "import-e2k" ? f.accept = ".e2k,.E2K" : s === "import-s2k" ? f.accept = ".s2k,.S2K,.$2k" : s === "import-ifc" ? f.accept = ".ifc,.IFC" : s === "import-py" ? f.accept = ".py" : s === "import-tcl" && (f.accept = ".tcl"), f.click();
        else if (s.startsWith("export")) {
          const g = {
            nodes: e.nodes.val,
            elements: e.elements.val,
            nodeInputs: e.nodeInputs.val,
            elementInputs: e.elementInputs.val
          };
          try {
            s === "export-e2k" ? E(Pl({
              ...g,
              title: "Awatif Model",
              e2kModel: Ve ?? void 0
            }), "model.e2k") : s === "export-s2k" ? E(Fl({
              ...g,
              title: "Awatif Model"
            }), "model.s2k") : s === "export-py" ? E(ql(g), "model_opensees.py") : s === "export-tcl" && E(_l(g), "model_opensees.tcl");
          } catch (S) {
            alert("Export error: " + S.message);
          }
        }
      }), f && f.addEventListener("change", () => {
        var _a3;
        const g = (_a3 = f.files) == null ? void 0 : _a3[0];
        if (!g) return;
        if (s === "import-ifc") {
          const y = new FileReader();
          y.onload = async () => {
            const C = y.result;
            try {
              const X = et();
              if (!X) {
                alert("Viewer not ready");
                return;
              }
              console.log("IFC: Loading 3D geometry...");
              const U = await Vl(X.scene, C);
              console.log(`IFC: ${U.meshCount} meshes loaded, bbox:`, U.bbox);
              const ae = new Oe();
              U.bbox.getCenter(ae);
              const Z = new Oe();
              U.bbox.getSize(Z);
              const K = Math.max(Z.x, Z.y, Z.z);
              X.controls.target.copy(ae), X.camera.position.set(ae.x + K, ae.y + K * 0.5, ae.z + K), X.camera.lookAt(ae), X.controls.maxDistance = K * 5, X.controls.update(), X.render(), window.__ifcLoadResult = U, window.__ifcArrayBuffer = C;
              const de = new FileReader();
              de.onload = () => {
                const ie = de.result, Ie = Gl(ie);
                window.__ifcAnalytical = Ie;
                const Re = {};
                U.elementInfo.forEach((q) => Re[q.category] = (Re[q.category] || 0) + 1), console.log("IFC categories:", Re), console.log(`IFC: ${U.elementInfo.size} geometric elements, ${Ie.elements.length} analytical elements`), d(U, Ie);
              }, de.readAsText(g);
            } catch (X) {
              alert("IFC error: " + X.message), console.error(X);
            }
          }, y.readAsArrayBuffer(g), f.value = "";
          return;
        }
        const S = new FileReader();
        S.onload = () => {
          const y = S.result;
          try {
            if (s === "import-e2k") {
              const C = zl(y);
              Ve = C, c(C, "E2K imported"), m(C);
            } else if (s === "import-s2k") {
              const C = Al(y);
              c({
                nodes: C.nodes,
                elements: C.elements,
                nodeInputs: C.nodeInputs,
                elementInputs: C.elementInputs,
                sectionShapes: C.sectionShapes,
                info: C.info
              }, "S2K imported");
            } else if (s === "import-py") {
              const C = Bl(y);
              c(C, "OpenSeesPy imported");
            } else if (s === "import-tcl") {
              const C = Dl(y);
              c(C, "OpenSees Tcl imported");
            }
          } catch (C) {
            alert("Import error: " + C.message), console.error(C);
          }
        }, S.readAsText(g), f.value = "";
      });
      const w = Ae.querySelector("#cad3d-force-unit");
      w && (w.value = b, w.addEventListener("change", (g) => {
        g.stopPropagation(), b = w.value, M = Fo(b, P), k && Qe(k);
      }));
      const v = Ae.querySelector("#cad3d-length-unit");
      v && (v.value = P, v.addEventListener("change", (g) => {
        g.stopPropagation(), P = v.value, M = Fo(b, P), k && Qe(k);
      })), Ae.querySelectorAll("[data-preset]").forEach((g) => {
        g.addEventListener("click", (S) => {
          S.stopPropagation();
          const y = g.dataset.preset, C = H[y];
          C && (b = C.force, P = C.length, Y = C.stress, M = Fo(b, P), w && (w.value = b), v && (v.value = P), Ae.querySelectorAll("[data-preset]").forEach((X) => {
            X.classList.toggle("active", X.dataset.preset === y);
          }), k && Qe(k), console.log(`Preset: ${y} \u2192 ${b}+${P}, stress: ${Y.label}`));
        });
      }), (_i = Ae.querySelector("#cad3d-log")) == null ? void 0 : _i.addEventListener("click", (g) => {
        g.stopPropagation(), _a();
      }), (_j = Ae.querySelector("#cad3d-pushover")) == null ? void 0 : _j.addEventListener("click", (g) => {
        g.stopPropagation(), Ba();
      }), (_k = Ae.querySelector("#cad3d-nonlinear")) == null ? void 0 : _k.addEventListener("click", (g) => {
        g.stopPropagation(), Ha();
      }), (_l2 = Ae.querySelector("#cad3d-fem-solver")) == null ? void 0 : _l2.addEventListener("click", (g) => {
        g.stopPropagation(), Wa();
      }), (_m = Ae.querySelector("#cad3d-calc")) == null ? void 0 : _m.addEventListener("click", (g) => {
        g.stopPropagation(), sa(async () => {
          const { openCalcPanel: S } = await import("./calcPanel-DVrrLUea.js").then(async (m2) => {
            await m2.__tla;
            return m2;
          });
          return {
            openCalcPanel: S
          };
        }, __vite__mapDeps([0,1,2,3,4]), import.meta.url).then(({ openCalcPanel: S }) => {
          var _a3, _b2;
          const y = {
            nodes: e.nodes.val,
            elements: e.elements.val,
            nodeInputs: ((_a3 = e.nodeInputs) == null ? void 0 : _a3.val) ?? {},
            elementInputs: ((_b2 = e.elementInputs) == null ? void 0 : _b2.val) ?? {},
            modelName: k ? k.charAt(0).toUpperCase() + k.slice(1) : "Modelo"
          };
          S(y);
        });
      }), (_n2 = Ae.querySelector("#cad3d-modal")) == null ? void 0 : _n2.addEventListener("click", (g) => {
        var _a3, _b2;
        g.stopPropagation(), qe = !qe, (_a3 = Ae.querySelector("#cad3d-modal")) == null ? void 0 : _a3.classList.toggle("active", qe);
        const y = Ae.querySelector("#cad3d-mode-prev"), C = Ae.querySelector("#cad3d-mode-next"), X = Ae.querySelector("#cad3d-mode-label"), U = Ae.querySelector("#cad3d-modal-scale");
        if (qe) {
          const ae = et();
          ((_b2 = ae == null ? void 0 : ae.settings) == null ? void 0 : _b2.loads) && (_e = ae.settings.loads.rawVal, ae.settings.loads.val = false), Ln(), y.style.display = "", C.style.display = "", X.style.display = "", U && (U.style.display = ""), u();
        } else Cn(), y.style.display = "none", C.style.display = "none", X.style.display = "none", U && (U.style.display = "none"), k && k !== "placa-q4" && k !== "placa-3q" && Pe(), setTimeout(() => {
          var _a4;
          const ae = et();
          ((_a4 = ae == null ? void 0 : ae.settings) == null ? void 0 : _a4.loads) && _e && (ae.settings.loads.val = true);
        }, 600);
      });
      function u() {
        var _a3;
        const g = Ae.querySelector("#cad3d-mode-label");
        if (!g || !(Ce == null ? void 0 : Ce.frequencies)) return;
        const S = Ce.frequencies[ve], y = S > 0 ? 1 / S : 0, C = [
          0,
          0,
          0,
          0,
          0,
          0
        ];
        for (let X = 0; X <= ve; X++) {
          const U = (_a3 = Ce.massParticipation) == null ? void 0 : _a3[X];
          if (U) for (let ae = 0; ae < 6; ae++) C[ae] += U[ae];
        }
        g.textContent = `Modo ${ve + 1} \u2014 ${S.toFixed(2)} Hz \u2014 T=${y.toFixed(3)}s \u2014 \u03A3Ux=${(C[0] * 100).toFixed(1)}% \u03A3Uy=${(C[1] * 100).toFixed(1)}% \u03A3Rz=${(C[5] * 100).toFixed(1)}%`;
      }
      (_o2 = Ae.querySelector("#cad3d-mode-prev")) == null ? void 0 : _o2.addEventListener("click", (g) => {
        if (g.stopPropagation(), !(Ce == null ? void 0 : Ce.modeShapes)) return;
        ve = (ve - 1 + Ce.modeShapes.length) % Ce.modeShapes.length;
        const S = Ce.modeShapes[ve], { extent: y } = vo();
        let C = 0;
        for (let X = 0; X < ke.length; X++) {
          const U = S[X * 6] || 0, ae = S[X * 6 + 1] || 0, Z = S[X * 6 + 2] || 0;
          C = Math.max(C, Math.sqrt(U * U + ae * ae + Z * Z));
        }
        Ge = C > 1e-12 ? y * 0.05 / C : 1, Qo(), u();
      }), (_p = Ae.querySelector("#cad3d-mode-next")) == null ? void 0 : _p.addEventListener("click", (g) => {
        if (g.stopPropagation(), !(Ce == null ? void 0 : Ce.modeShapes)) return;
        ve = (ve + 1) % Ce.modeShapes.length;
        const S = Ce.modeShapes[ve], { extent: y } = vo();
        let C = 0;
        for (let X = 0; X < ke.length; X++) {
          const U = S[X * 6] || 0, ae = S[X * 6 + 1] || 0, Z = S[X * 6 + 2] || 0;
          C = Math.max(C, Math.sqrt(U * U + ae * ae + Z * Z));
        }
        Ge = C > 1e-12 ? y * 0.05 / C : 1, Qo(), u();
      });
      const h = Ae.querySelector("#cad3d-modal-scale");
      h == null ? void 0 : h.addEventListener("mousedown", (g) => g.stopPropagation()), h == null ? void 0 : h.addEventListener("change", () => {
        qe && (Ce == null ? void 0 : Ce.modeShapes) && Qo();
      });
      const I = Ae.querySelector("#cad3d-cli-toggle"), z = Ae.querySelector("#cad3d-cli-panel"), T = Ae.querySelector("#cad3d-cli-output"), B = Ae.querySelector("#cad3d-cmd"), D = [];
      let x = -1;
      I == null ? void 0 : I.addEventListener("click", (g) => {
        if (g.stopPropagation(), z) {
          const S = z.style.display !== "none";
          z.style.display = S ? "none" : "block", S || (B == null ? void 0 : B.focus(), T && !T.textContent && (T.textContent = `CLI ready. Commands:
  cad.addNode(x, y, z)     cad.addFrame(i, j)
  cad.addSupport(n)        cad.addLoad(n, [fx,fy,fz,0,0,0])
  cad.frame([5,5],[3,3])   cad.building([5],[4],[3])
  cad.galpon(12,20,6,3)    cad.clear()
  cad.info()               cad.listNodes()
`));
        }
      }), B == null ? void 0 : B.addEventListener("mousedown", (g) => g.stopPropagation()), document.addEventListener("keydown", (g) => {
        var _a3;
        if ((g.ctrlKey || g.metaKey) && g.key === "z" && !g.shiftKey) {
          g.preventDefault(), zs();
          return;
        }
        if ((g.ctrlKey || g.metaKey) && (g.key === "y" || g.key === "z" && g.shiftKey)) {
          g.preventDefault(), As();
          return;
        }
        if ((g.key === "Delete" || g.key === "Backspace") && gt.size > 0) {
          g.preventDefault(), gt.forEach((S) => V.add(S)), gt.clear(), fo && (fo.remove(), fo = null), Pe();
          return;
        }
        if (g.key === "Escape") {
          if (po) if (vt !== null) {
            vt = null;
            const S = et();
            Nt && S && (S.scene.remove(Nt), Nt.geometry.dispose(), Nt.material.dispose(), Nt = null), qt && S && (S.scene.remove(qt), qt.geometry.dispose(), qt.material.dispose(), qt = null), S == null ? void 0 : S.render();
          } else cn();
          Yt && rn(), oo && (oo = false, zo(), (_a3 = Ae.querySelector("#cad3d-inspect")) == null ? void 0 : _a3.classList.remove("inspect-active"));
        }
      }), B == null ? void 0 : B.addEventListener("keydown", (g) => {
        if (g.stopPropagation(), g.key === "Enter") {
          const S = B.value.trim();
          if (S) {
            D.unshift(S), x = -1, T && (T.textContent += `> ${S}
`);
            try {
              const y = new Function("cad", `return ${S}`)(Ke);
              if (y !== void 0 && T) {
                const C = typeof y == "object" ? JSON.stringify(y, null, 2) : String(y);
                T.textContent += `${C}
`;
              }
            } catch (y) {
              T && (T.textContent += `ERROR: ${y.message}
`);
            }
            T && (T.scrollTop = T.scrollHeight), B.value = "";
          }
        } else g.key === "ArrowUp" ? (g.preventDefault(), D.length > 0 && x < D.length - 1 && (x++, B.value = D[x])) : g.key === "ArrowDown" && (g.preventDefault(), x > 0 ? (x--, B.value = D[x]) : (x = -1, B.value = ""));
      });
      let i = false, $ = 0, A = 0, F = 0, G = 0;
      Ae.addEventListener("mousedown", (g) => {
        const S = g.target.tagName;
        if (S === "BUTTON" || S === "INPUT" || S === "SELECT") return;
        i = true;
        const y = Ae.getBoundingClientRect();
        Ae.style.bottom = "unset", $ = g.clientX, A = g.clientY, F = y.left, G = y.top, g.preventDefault();
      }), window.addEventListener("mousemove", (g) => {
        i && (g.preventDefault(), Ae.style.left = F + (g.clientX - $) + "px", Ae.style.top = G + (g.clientY - A) + "px");
      }), window.addEventListener("mouseup", () => {
        i = false;
      }), Ze();
    }, 10);
    function et() {
      const t = document.getElementById("viewer");
      return t ? t.__ctx : null;
    }
    function vo() {
      const t = e.nodes.val;
      if (t.length === 0) return {
        center: new Oe(),
        extent: 10
      };
      let o = 1 / 0, n = 1 / 0, l = 1 / 0, a = -1 / 0, p = -1 / 0, s = -1 / 0;
      for (const [c, d, m] of t) c < o && (o = c), c > a && (a = c), d < n && (n = d), d > p && (p = d), m < l && (l = m), m > s && (s = m);
      const r = new Oe((o + a) / 2, (n + p) / 2, (l + s) / 2), f = Math.max(a - o, p - n, s - l, 1);
      return {
        center: r,
        extent: f
      };
    }
    function It(t = false) {
      const o = et();
      if (!o) return;
      const { extent: n } = vo();
      let l;
      n <= 5 ? l = Math.max(1, Math.ceil(n * 1.5)) : n <= 50 ? l = Math.max(5, Math.ceil(n * 1.3 / 5) * 5) : l = Math.max(20, Math.ceil(n * 1.3 / 10) * 10), o.settings.gridSize.val = l, o.scene.children.filter((m) => m.type === "GridHelper").forEach((m) => {
        var _a2, _b;
        (_a2 = m.geometry) == null ? void 0 : _a2.dispose(), (_b = m.material) == null ? void 0 : _b.dispose(), o.scene.remove(m);
      });
      const p = Va(), s = new sl(l, 20, p.grid, p.grid);
      s.rotation.x = Math.PI / 2, s.position.set(0.5 * l, 0.5 * l, 0), o.scene.add(s), o.scene.children.filter((m) => m.type === "Group" && m.name !== "gridAxes" && m.name !== "loadsGroup" && (m.name === "viewerAxes" || m.children.some((E) => E instanceof dn))).forEach((m) => {
        m.traverse((E) => {
          E.geometry && E.geometry.dispose(), E.material && (E.material.map && E.material.map.dispose(), E.material.dispose());
        }), o.scene.remove(m);
      });
      const f = 0.05 * l, c = new sn();
      c.name = "viewerAxes";
      const d = p.axisArrow;
      c.add(new dn(new Oe(1, 0, 0), new Oe(), 1, d, 0.2, 0.2)), c.add(new dn(new Oe(0, 1, 0), new Oe(), 1, d, 0.2, 0.2)), c.add(new dn(new Oe(0, 0, 1), new Oe(), 1, d, 0.2, 0.2)), c.children.forEach((m) => m.scale.set(f, f, f));
      for (const [m, E, w] of [
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
        const v = document.createElement("canvas");
        v.width = 64, v.height = 64;
        const u = v.getContext("2d");
        u.fillStyle = E, u.font = "bold 50px Arial", u.textAlign = "center", u.textBaseline = "middle", u.fillText(m, 32, 34);
        const h = new Vn(v);
        h.needsUpdate = true;
        const I = new pn(new fn({
          map: h,
          depthTest: false,
          transparent: true
        }));
        I.position.set(w[0], w[1], w[2]), I.scale.set(0.4 * f, 0.4 * f, 1), I.renderOrder = 99, c.add(I);
      }
      o.scene.add(c), t ? o.render() : yo("3d");
    }
    function Ts(t, o, n) {
      if (t.length < 2) return n * 10;
      let l = 1 / 0;
      return o > 0 && (l = Math.min(l, Math.abs(t[o] - t[o - 1]))), o < t.length - 1 && (l = Math.min(l, Math.abs(t[o + 1] - t[o]))), l * 0.45 || n * 0.1;
    }
    function yo(t) {
      var _a2;
      const o = et();
      if (!o) return;
      const { center: n, extent: l } = vo(), a = o.renderer.domElement.clientWidth / (o.renderer.domElement.clientHeight || 1), p = l * 0.7;
      o.controls.maxDistance = l * 5, o.controls.minDistance = l * 0.05, o.renderer.clippingPlanes = [];
      const s = () => {
        o.scene.traverse((r) => {
          var _a3;
          if (!r.material) return;
          const f = r.type === "GridHelper" || r.type === "AxesHelper", c = r.isSprite, d = ((_a3 = r.userData) == null ? void 0 : _a3.noClip) === true;
          (f || c || d) && (Array.isArray(r.material) ? r.material.forEach((m) => {
            m.clippingPlanes = [];
          }) : r.material.clippingPlanes = []);
        });
      };
      if (t === "3d") {
        const r = o.perspCamera.fov, f = l / (2 * Math.tan(r * Math.PI / 360)) * 2.2;
        o.perspCamera.position.set(n.x + f * 0.5, n.y - f * 0.8, n.z + f * 0.5), o.controls.target.copy(n), o.setActiveCamera(o.perspCamera);
      } else {
        const r = o.orthoCamera;
        r.left = -p * a, r.right = p * a, r.top = p, r.bottom = -p, r.near = -l * 10, r.far = l * 10, r.updateProjectionMatrix();
        const f = (c, d, m) => {
          r.position.copy(c), r.up.copy(m), o.controls.target.copy(d), r.lookAt(d), o.controls.update();
        };
        if (t === "plan") o.renderer.clippingPlanes = [], f(new Oe(n.x, n.y, n.z + l * 2), new Oe(n.x, n.y, n.z), new Oe(0, 1, 0));
        else if (t.startsWith("plan:")) {
          const c = parseInt(t.split(":")[1]), d = ((_a2 = se.hPiso) == null ? void 0 : _a2.val) ?? 3, m = (c + 1) * d, E = d * 0.45;
          o.renderer.clippingPlanes = [
            new Eo(new Oe(0, 0, -1), m + E),
            new Eo(new Oe(0, 0, 1), -m + E)
          ], s(), f(new Oe(n.x, n.y, m + l * 2), new Oe(n.x, n.y, m), new Oe(0, 1, 0));
        } else if (t === "elevX") r.position.set(n.x + l * 2, n.y, n.z), r.up.set(0, 0, 1);
        else if (t === "elevY") r.position.set(n.x, n.y - l * 2, n.z), r.up.set(0, 0, 1);
        else if (t.startsWith("axisX:")) {
          const c = parseInt(t.split(":")[1]), d = We[c] ?? n.x;
          if (Xe.length > 1) {
            const E = Ts(We, c, l);
            o.renderer.clippingPlanes = [
              new Eo(new Oe(-1, 0, 0), d + E),
              new Eo(new Oe(1, 0, 0), -d + E)
            ], s(), r.position.set(n.x + l * 2, n.y, n.z), o.controls.target.set(n.x, n.y, n.z);
          } else r.position.set(n.x, n.y - l * 2, n.z), o.controls.target.copy(n);
          r.up.set(0, 0, 1);
        } else if (t.startsWith("axisY:")) {
          const c = parseInt(t.split(":")[1]), d = Xe[c] ?? n.y;
          if (We.length > 1) {
            const E = Ts(Xe, c, l);
            o.renderer.clippingPlanes = [
              new Eo(new Oe(0, -1, 0), d + E),
              new Eo(new Oe(0, 1, 0), -d + E)
            ], s(), r.position.set(n.x, n.y - l * 2, n.z), o.controls.target.set(n.x, n.y, n.z);
          } else r.position.set(n.x + l * 2, n.y, n.z), o.controls.target.copy(n);
          r.up.set(0, 0, 1);
        }
        !t.startsWith("axisX:") && !t.startsWith("axisY:") && o.controls.target.copy(n), o.setActiveCamera(r);
      }
    }
    function Nn() {
      const t = Ae.querySelector("#cad3d-axis-buttons");
      if (!t) return;
      if (We.length < 2 && Xe.length < 2) {
        t.style.display = "none";
        return;
      }
      t.style.display = "", t.innerHTML = "";
      const o = (p, s, r) => {
        const f = document.createElement("button");
        return f.textContent = p, f.dataset.view = s, f.title = r, f.style.cssText = "min-width:22px;padding:1px 5px;font-weight:bold", f.addEventListener("click", (c) => {
          var _a2;
          c.stopPropagation();
          const d = f.classList.contains("view-active");
          Ae.querySelectorAll("[data-view]").forEach((m) => m.classList.remove("view-active")), d ? (yo("3d"), (_a2 = Ae.querySelector('[data-view="3d"]')) == null ? void 0 : _a2.classList.add("view-active")) : (yo(s), f.classList.add("view-active"));
        }), f;
      }, n = document.createElement("span");
      n.textContent = "Ejes:", n.style.cssText = "color:#888;font-size:10px;margin-right:2px;align-self:center", t.appendChild(n);
      const l = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      We.forEach((p, s) => {
        const r = s < l.length ? l[s] : `X${s}`;
        t.appendChild(o(r, `axisX:${s}`, `Eje ${r} \u2014 elevaci\xF3n mirando en Y`));
      });
      const a = document.createElement("span");
      a.textContent = "|", a.style.cssText = "color:#555;margin:0 3px;align-self:center;font-weight:bold", t.appendChild(a), Xe.forEach((p, s) => {
        const r = `${s + 1}`;
        t.appendChild(o(r, `axisY:${s}`, `Eje ${r} \u2014 elevaci\xF3n mirando en X`));
      });
    }
    function qn() {
      var _a2;
      const t = Ae.querySelector("#cad3d-floor-buttons");
      if (!t) return;
      const o = Math.round(((_a2 = se.nPisos) == null ? void 0 : _a2.val) ?? 0);
      if (o < 1) {
        t.style.display = "none";
        return;
      }
      t.style.display = "", t.innerHTML = "";
      const n = (a, p, s) => {
        const r = document.createElement("button");
        return r.textContent = a, r.dataset.view = p, r.title = s, r.style.cssText = "min-width:22px;padding:1px 5px;font-weight:bold", r.addEventListener("click", (f) => {
          var _a3;
          f.stopPropagation();
          const c = r.classList.contains("view-active");
          Ae.querySelectorAll("[data-view]").forEach((d) => d.classList.remove("view-active")), c ? (yo("3d"), (_a3 = Ae.querySelector('[data-view="3d"]')) == null ? void 0 : _a3.classList.add("view-active")) : (yo(p), r.classList.add("view-active"));
        }), r;
      }, l = document.createElement("span");
      l.textContent = "Planta:", l.style.cssText = "color:#888;font-size:10px;margin-right:2px;align-self:center", t.appendChild(l);
      for (let a = 0; a < o; a++) t.appendChild(n(`P${a + 1}`, `plan:${a}`, `Planta Piso ${a + 1}`));
    }
    function ka() {
      yo("3d"), Ae.querySelectorAll("[data-view]").forEach((t) => t.classList.toggle("view-active", t.dataset.view === "3d"));
    }
    Ke.view = (t) => {
      t = {
        planta: "plan",
        elevationX: "elevX",
        elevationY: "elevY",
        corte: "section"
      }[t] || t, yo(t), Ae.querySelectorAll("[data-view]").forEach((n) => n.classList.toggle("view-active", n.dataset.view === t));
    };
    let oo = false, Yt = false, po = false, jt = "line", Xt = [], vt = null, Nt = null, qt = null, No = null, Zt = null;
    const wt = {
      node: true,
      grid: true,
      midpoint: true,
      track: true
    }, _n = 0.5;
    let Bn = [], Qt = null, To = null;
    const qo = [], ln = [], Ta = 50;
    function _o() {
      qo.push({
        nodes: JSON.parse(JSON.stringify(e.nodes.val)),
        elements: JSON.parse(JSON.stringify(e.elements.val))
      }), qo.length > Ta && qo.shift(), ln.length = 0;
    }
    function zs() {
      if (qo.length === 0) return;
      ln.push({
        nodes: JSON.parse(JSON.stringify(e.nodes.val)),
        elements: JSON.parse(JSON.stringify(e.elements.val))
      });
      const t = qo.pop();
      e.nodes.val = t.nodes, e.elements.val = t.elements, xo(), e.elementInputs.val = {
        ...e.elementInputs.val
      };
    }
    function As() {
      if (ln.length === 0) return;
      qo.push({
        nodes: JSON.parse(JSON.stringify(e.nodes.val)),
        elements: JSON.parse(JSON.stringify(e.elements.val))
      });
      const t = ln.pop();
      e.nodes.val = t.nodes, e.elements.val = t.elements, xo(), e.elementInputs.val = {
        ...e.elementInputs.val
      };
    }
    const gt = /* @__PURE__ */ new Set();
    let Jt = null, $o = [], Kt = null, fo = null;
    function Dn(t) {
      const o = et();
      if (!o) return;
      const n = e.nodes.val, l = e.elements.val[t];
      if (!l) return;
      const a = [];
      for (let r = 0; r < l.length; r++) {
        const f = n[l[r]], c = n[l[(r + 1) % l.length]];
        a.push(f[0], f[1], f[2], c[0], c[1], c[2]);
      }
      const p = new to();
      p.setAttribute("position", new Ao(a, 3));
      const s = new Wo(p, new Go({
        color: 16711935,
        linewidth: 3,
        depthTest: false
      }));
      s.renderOrder = 9998, s.__elemIdx = t, o.scene.add(s), $o.push(s), o.render();
    }
    function Mo() {
      const t = et();
      $o.forEach((o) => {
        t == null ? void 0 : t.scene.remove(o), o.geometry.dispose(), o.material.dispose();
      }), $o = [], t == null ? void 0 : t.render();
    }
    function wo() {
      fo && fo.remove();
      const t = W.size > 0 || O;
      if (gt.size === 0 && !t) {
        fo = null;
        return;
      }
      const o = document.createElement("div");
      o.style.cssText = "position:fixed;bottom:20px;left:50%;transform:translateX(-50%);background:var(--cad-bg);color:var(--cad-text);border:2px solid var(--cad-heading);border-radius:8px;padding:10px 16px;z-index:10000;font-family:monospace;font-size:13px;display:flex;gap:12px;align-items:center;box-shadow:0 4px 20px var(--cad-shadow);", o.innerHTML = `
      <span style="color:var(--cad-heading);font-weight:bold;">${gt.size} elem.</span>
      <button id="sel-assign" style="padding:5px 8px;background:#336699;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:12px;" title="Asignar secci\xF3n">\u{1F4D0}</button>
      <button id="sel-info" style="padding:5px 8px;background:#225588;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:12px;" title="Info del elemento">\u{1F50D}</button>
      <button id="sel-hide" style="padding:5px 8px;background:#665500;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:12px;" title="Ocultar seleccionados">\u{1F441}\u200D\u{1F5E8}</button>
      <button id="sel-isolate" style="padding:5px 8px;background:#006633;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:12px;" title="Aislar (mostrar solo seleccionados)">\u25CE</button>
      <button id="sel-showall" style="padding:5px 8px;background:#444;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:12px;" title="Mostrar todo">\u21BA</button>
      <button id="sel-delete" style="padding:5px 8px;background:#cc3333;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:12px;" title="Eliminar seleccionados">\u{1F5D1}</button>
      <button id="sel-clear" style="padding:5px 8px;background:#555;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:12px;" title="Limpiar selecci\xF3n">\u2715</button>
    `, document.body.appendChild(o), fo = o, o.querySelector("#sel-assign").addEventListener("click", () => {
        Ga([
          ...gt
        ]);
      }), o.querySelector("#sel-info").addEventListener("click", () => {
        if (gt.size === 1) {
          const n = [
            ...gt
          ][0];
          Ns(n);
        } else {
          const n = [
            ...gt
          ], l = e.nodes.val, a = e.elements.val;
          let p = 0, s = 0, r = 0, f = 0;
          n.forEach((d) => {
            const m = a[d];
            if (m) if (m.length === 2) {
              const E = l[m[0]], w = l[m[1]], v = Math.abs(w[0] - E[0]), u = Math.abs(w[1] - E[1]), h = Math.abs(w[2] - E[2]);
              h > v && h > u ? p++ : s++;
            } else m.length === 3 ? r++ : m.length === 4 && f++;
          });
          const c = [];
          p && c.push(`${p} columnas`), s && c.push(`${s} vigas`), f && c.push(`${f} shells Q4`), r && c.push(`${r} triangulos`), alert(`${n.length} elementos seleccionados:
${c.join(", ")}`);
        }
      }), o.querySelector("#sel-hide").addEventListener("click", () => {
        gt.forEach((n) => W.add(n)), gt.clear(), Mo(), wo(), Pe();
      }), o.querySelector("#sel-isolate").addEventListener("click", () => {
        O = true, j.clear(), gt.forEach((n) => j.add(n)), gt.clear(), Mo(), wo(), Pe();
      }), o.querySelector("#sel-showall").addEventListener("click", () => {
        W.clear(), O = false, j.clear(), wo(), Pe();
      }), o.querySelector("#sel-delete").addEventListener("click", () => {
        _o(), gt.forEach((n) => V.add(n)), gt.clear(), Mo(), wo(), Pe();
      }), o.querySelector("#sel-clear").addEventListener("click", () => {
        gt.clear(), Mo(), wo();
      });
    }
    function rn() {
      var _a2;
      Yt = false, gt.clear(), Mo(), fo && (fo.remove(), fo = null), (_a2 = Ae.querySelector("#cad3d-select")) == null ? void 0 : _a2.classList.remove("inspect-active");
      const o = et();
      o && (o.controls.enabled = true);
    }
    function zo() {
      if (Jt) {
        const t = et();
        t == null ? void 0 : t.scene.remove(Jt), Jt.geometry.dispose(), Jt.material.dispose(), Jt = null, t == null ? void 0 : t.render();
      }
      Kt && (Kt.remove(), Kt = null);
    }
    function za(t) {
      Hn();
      const o = et();
      if (!o) return;
      const n = e.nodes.val[t];
      if (!n) return;
      To = t;
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
      for (const [p, s] of a) {
        const r = new Float32Array([
          n[0] - p[0] * l,
          n[1] - p[1] * l,
          n[2] - p[2] * l,
          n[0] + p[0] * l,
          n[1] + p[1] * l,
          n[2] + p[2] * l
        ]), f = new to();
        f.setAttribute("position", new xn(r, 3));
        const c = new jo({
          color: s,
          dashSize: 0.3,
          gapSize: 0.15,
          transparent: true,
          opacity: 0.4,
          depthTest: false
        }), d = new Wo(f, c);
        d.computeLineDistances(), d.renderOrder = 9990, o.scene.add(d), Bn.push(d);
      }
      o.render();
    }
    function Hn() {
      const t = et();
      for (const o of Bn) t == null ? void 0 : t.scene.remove(o), o.geometry.dispose(), o.material.dispose();
      Bn = [], To = null, Qt && (Qt.remove(), Qt = null);
    }
    function Ls(t, o, n, l) {
      Qt || (Qt = document.createElement("div"), Qt.style.cssText = "position:fixed;pointer-events:none;z-index:10002;background:var(--cad-bg);color:var(--cad-heading);font-family:monospace;font-size:11px;padding:2px 6px;border-radius:3px;white-space:nowrap;border:1px solid var(--cad-border);", document.body.appendChild(Qt));
      const a = l.x - n.x, p = l.y - n.y, s = l.z - n.z, r = Math.sqrt(a * a + p * p + s * s), f = Math.abs(a), c = Math.abs(p), d = Math.abs(s);
      let m = "";
      f > c && f > d ? m = `\u0394X=${a.toFixed(2)}` : c > f && c > d ? m = `\u0394Y=${p.toFixed(2)}` : d > 0.01 && (m = `\u0394Z=${s.toFixed(2)}`), Qt.textContent = `${r.toFixed(3)} m  ${m}`, Qt.style.left = t + 20 + "px", Qt.style.top = o - 10 + "px";
    }
    function Aa(t, o) {
      const l = e.nodes.val[o];
      if (!l) return null;
      const a = new Oe(l[0], l[1], l[2]), p = t.clone(), s = p.clone().sub(a), r = 0.3, f = Math.abs(s.x), c = Math.abs(s.y), d = Math.abs(s.z);
      return c < r && d < r && f > 0.01 ? new Oe(p.x, a.y, a.z) : f < r && d < r && c > 0.01 ? new Oe(a.x, p.y, a.z) : f < r && c < r && d > 0.01 ? new Oe(a.x, a.y, p.z) : null;
    }
    function cn() {
      var _a2;
      const t = et();
      Nt && t && (t.scene.remove(Nt), Nt.geometry.dispose(), Nt.material.dispose(), Nt = null), qt && t && (t.scene.remove(qt), qt.geometry.dispose(), qt.material.dispose(), qt = null), Hn(), vt = null, Zt = null, po = false, No && (No.remove(), No = null), (_a2 = Ae.querySelector("#cad3d-draw")) == null ? void 0 : _a2.classList.remove("inspect-active"), t == null ? void 0 : t.render();
    }
    function La() {
      No && No.remove();
      const t = document.createElement("div");
      t.style.cssText = "position:fixed;bottom:60px;left:50%;transform:translateX(-50%);background:var(--cad-bg);border:1px solid var(--cad-border);border-radius:6px;padding:6px 10px;z-index:10000;display:flex;gap:6px;align-items:center;font-family:monospace;font-size:11px;box-shadow:0 2px 10px var(--cad-shadow);";
      const o = (a) => `padding:4px 10px;border:1px solid ${a ? "#00ccff" : "#555"};background:${a ? "#003355" : "#333"};color:${a ? "#00ccff" : "#ccc"};border-radius:3px;cursor:pointer;font-size:11px;font-family:monospace;`, n = (a) => `padding:3px 6px;border:1px solid ${a ? "#33ff33" : "#444"};background:${a ? "#113311" : "#222"};color:${a ? "#33ff33" : "#888"};border-radius:3px;cursor:pointer;font-size:10px;`;
      t.innerHTML = `
      <span style="color:#00ccff;font-weight:bold;margin-right:4px;">Draw:</span>
      <button id="dt-line" style="${o(jt === "line")}">\u{1F4CF} Line</button>
      <button id="dt-arc" style="${o(jt === "arc")}">\u2312 Arc</button>
      <button id="dt-node" style="${o(jt === "node")}">\u2295 Node</button>
      <button id="dt-area" style="${o(jt === "area")}">\u25A2 Area</button>
      <span style="color:#666;margin:0 4px;">|</span>
      <span style="color:#888;font-size:10px;">Snap:</span>
      <button id="ds-node" style="${n(wt.node)}">Node</button>
      <button id="ds-grid" style="${n(wt.grid)}">Grid</button>
      <button id="ds-mid" style="${n(wt.midpoint)}">Mid</button>
      <button id="ds-track" style="${n(wt.track)}">Prolong</button>
      <span style="color:#666;margin:0 4px;">|</span>
      <span style="color:#888;font-size:10px;">Grid:</span>
      <input id="ds-gridsize" type="number" value="${_n}" step="0.1" min="0.1" max="10" style="width:45px;background:#333;color:#fff;border:1px solid #555;padding:2px;font-size:10px;">
      <span style="color:#888;font-size:10px;">m</span>
      <span style="color:#666;margin:0 4px;">|</span>
      <button id="dt-undo" style="padding:3px 6px;background:#444;color:#ccc;border:1px solid #555;border-radius:3px;cursor:pointer;font-size:10px;" title="Ctrl+Z">\u21A9 Undo</button>
      <button id="dt-redo" style="padding:3px 6px;background:#444;color:#ccc;border:1px solid #555;border-radius:3px;cursor:pointer;font-size:10px;" title="Ctrl+Y">\u21AA Redo</button>
    `, document.body.appendChild(t), No = t;
      const l = () => {
        const a = t.querySelector("#dt-line"), p = t.querySelector("#dt-arc"), s = t.querySelector("#dt-node"), r = t.querySelector("#dt-area");
        a && (a.style.cssText = o(jt === "line")), p && (p.style.cssText = o(jt === "arc")), s && (s.style.cssText = o(jt === "node")), r && (r.style.cssText = o(jt === "area"));
        const f = t.querySelector("#ds-node"), c = t.querySelector("#ds-grid"), d = t.querySelector("#ds-mid"), m = t.querySelector("#ds-track");
        f && (f.style.cssText = n(wt.node)), c && (c.style.cssText = n(wt.grid)), d && (d.style.cssText = n(wt.midpoint)), m && (m.style.cssText = n(wt.track));
      };
      t.querySelector("#dt-line").addEventListener("click", () => {
        jt = "line", vt = null, Zt = null, Xt = [], l();
      }), t.querySelector("#dt-arc").addEventListener("click", () => {
        jt = "arc", vt = null, Zt = null, Xt = [], l();
      }), t.querySelector("#dt-node").addEventListener("click", () => {
        jt = "node", vt = null, Zt = null, Xt = [], l();
      }), t.querySelector("#dt-area").addEventListener("click", () => {
        jt = "area", vt = null, Zt = null, Xt = [], console.log("Area mode: click vertices del poligono. Doble-click o click cerca del 1er punto para cerrar."), l();
      }), t.querySelector("#ds-node").addEventListener("click", () => {
        wt.node = !wt.node, l();
      }), t.querySelector("#ds-grid").addEventListener("click", () => {
        wt.grid = !wt.grid, l();
      }), t.querySelector("#ds-mid").addEventListener("click", () => {
        wt.midpoint = !wt.midpoint, l();
      }), t.querySelector("#ds-track").addEventListener("click", () => {
        wt.track = !wt.track, wt.track || Hn(), l();
      }), t.querySelector("#ds-gridsize").addEventListener("change", (a) => {
        wt.gridSize = parseFloat(a.target.value) || 0.5;
      }), t.querySelector("#dt-undo").addEventListener("click", () => zs()), t.querySelector("#dt-redo").addEventListener("click", () => As());
    }
    function Cs(t, o, n, l) {
      const a = l.getBoundingClientRect(), p = (t - a.left) / a.width * 2 - 1, s = -((o - a.top) / a.height) * 2 + 1, r = new ta();
      r.setFromCamera(new oa(p, s), n);
      const f = e.nodes.val, c = e.elements.val, d = 0.12;
      if (wt.node) {
        let w = -1, v = 1 / 0;
        for (let u = 0; u < f.length; u++) {
          const h = f[u], I = new Oe(h[0], h[1], h[2]).project(n), z = Math.sqrt((I.x - p) ** 2 + (I.y - s) ** 2);
          z < d && z < v && (v = z, w = u);
        }
        if (w >= 0) return {
          nodeIdx: w,
          worldPos: new Oe(...f[w]),
          snapType: "node"
        };
      }
      if (wt.midpoint) {
        let w = 1 / 0, v = null;
        for (const u of c) {
          if (u.length !== 2) continue;
          const h = f[u[0]], I = f[u[1]], z = new Oe((h[0] + I[0]) / 2, (h[1] + I[1]) / 2, (h[2] + I[2]) / 2), T = z.clone().project(n), B = Math.sqrt((T.x - p) ** 2 + (T.y - s) ** 2);
          B < d * 0.8 && B < w && (w = B, v = z);
        }
        if (v) return {
          nodeIdx: null,
          worldPos: v,
          snapType: "mid"
        };
      }
      if (wt.grid) {
        const w = new Eo(new Oe(0, 0, 1), 0), v = new Oe();
        if (r.ray.intersectPlane(w, v)) {
          const u = wt.gridSize || _n;
          return v.x = Math.round(v.x / u) * u, v.y = Math.round(v.y / u) * u, v.z = Math.round(v.z / u) * u, {
            nodeIdx: null,
            worldPos: v,
            snapType: "grid"
          };
        }
      }
      const m = new Eo(new Oe(0, 0, 1), 0), E = new Oe();
      return r.ray.intersectPlane(m, E), {
        nodeIdx: null,
        worldPos: E,
        snapType: "free"
      };
    }
    function Fs(t) {
      const o = et();
      if (!o) return;
      const n = e.nodes.val;
      if (qt && (o.scene.remove(qt), qt.geometry.dispose(), qt.material.dispose(), qt = null), t.worldPos) {
        const l = t.snapType === "node" ? 16776960 : t.snapType === "mid" ? 16711935 : t.snapType === "grid" ? 65535 : 8947848, a = t.snapType === "node" ? 0.08 : 0.06, p = t.snapType === "mid" ? new el(a * 2, a * 2, a * 2) : new tl(a, 12, 12), s = new ol({
          color: l,
          transparent: true,
          opacity: 0.8,
          depthTest: false
        });
        qt = new ca(p, s), qt.position.copy(t.worldPos), qt.renderOrder = 9999, o.scene.add(qt);
      }
      if (Nt && (o.scene.remove(Nt), Nt.geometry.dispose(), Nt.material.dispose(), Nt = null), vt !== null && t.worldPos) {
        const l = n[vt], a = new to();
        if (jt === "arc" && Zt !== null) {
          const s = n[Zt], r = Ps(new Oe(l[0], l[1], l[2]), new Oe(s[0], s[1], s[2]), t.worldPos, 16), f = [];
          for (let c = 0; c < r.length - 1; c++) f.push(r[c].x, r[c].y, r[c].z, r[c + 1].x, r[c + 1].y, r[c + 1].z);
          a.setAttribute("position", new Ao(f, 3));
        } else a.setAttribute("position", new Ao([
          l[0],
          l[1],
          l[2],
          t.worldPos.x,
          t.worldPos.y,
          t.worldPos.z
        ], 3));
        const p = new Go({
          color: 65280,
          linewidth: 2,
          depthTest: false
        });
        Nt = new Lo(a, p), jt === "arc" && Zt !== null && (Nt = new Wo(a, p)), Nt.renderOrder = 9999, o.scene.add(Nt);
      }
      o.render();
    }
    function Ps(t, o, n, l) {
      const a = [];
      for (let p = 0; p <= l; p++) {
        const s = p / l, r = o.clone().multiplyScalar(2).sub(t.clone().multiplyScalar(0.5)).sub(n.clone().multiplyScalar(0.5)), f = (1 - s) * (1 - s), c = 2 * (1 - s) * s, d = s * s;
        a.push(new Oe(f * t.x + c * r.x + d * n.x, f * t.y + c * r.y + d * n.y, f * t.z + c * r.z + d * n.z));
      }
      return a;
    }
    function jn(t) {
      if (t.nodeIdx !== null) return t.nodeIdx;
      if (!t.worldPos) return -1;
      const o = e.nodes.val, n = 1e-3;
      for (let a = 0; a < o.length; a++) if (Math.abs(o[a][0] - t.worldPos.x) < n && Math.abs(o[a][1] - t.worldPos.y) < n && Math.abs(o[a][2] - t.worldPos.z) < n) return a;
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
    function Ca(t) {
      var _a2;
      if (jt === "node") {
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
      if (jt === "line") {
        const o = jn(t);
        if (o < 0) return;
        if (vt === null) {
          vt = o;
          return;
        }
        if (o === vt) return;
        _o();
        const n = [
          ...e.elements.val
        ];
        n.some((a) => a.length === 2 && (a[0] === vt && a[1] === o || a[1] === vt && a[0] === o)) || (n.push([
          vt,
          o
        ]), e.elements.val = n, xo(), e.elementInputs.val = {
          ...e.elementInputs.val
        }), vt = o;
        return;
      }
      if (jt === "arc") {
        const o = jn(t);
        if (o < 0) return;
        if (vt === null) {
          vt = o;
          return;
        }
        if (Zt === null) {
          if (o === vt) return;
          Zt = o;
          return;
        }
        if (o === vt || o === Zt) return;
        const n = e.nodes.val, l = new Oe(...n[vt]), a = new Oe(...n[Zt]), p = new Oe(...n[o]), s = Math.max(4, Math.round(((_a2 = se.nSubViga) == null ? void 0 : _a2.val) ?? 8)), r = Ps(l, a, p, s);
        _o();
        const f = [
          ...e.nodes.val
        ], c = [
          ...e.elements.val
        ];
        let d = vt;
        for (let m = 1; m < r.length; m++) {
          let E;
          if (m === r.length - 1) E = o;
          else {
            const w = r[m];
            E = f.length, f.push([
              w.x,
              w.y,
              w.z
            ]);
          }
          c.push([
            d,
            E
          ]), d = E;
        }
        e.nodes.val = f, e.elements.val = c, xo(), e.elementInputs.val = {
          ...e.elementInputs.val
        }, vt = o, Zt = null;
        return;
      }
      if (jt === "area") {
        const o = jn(t);
        if (o < 0) return;
        if (Xt.length >= 3 && o === Xt[0]) {
          _o();
          const n = [
            ...e.nodes.val
          ], l = [
            ...e.elements.val
          ], a = Xt.map((p) => n[p]);
          try {
            const p = ho({
              points: a,
              polygon: Array.from({
                length: a.length
              }, (r, f) => f),
              maxMeshSize: _n || 0.5
            }), s = [];
            for (const r of p.nodes) {
              let f = -1;
              for (let c = 0; c < n.length; c++) {
                const d = Math.abs(n[c][0] - r[0]), m = Math.abs(n[c][1] - r[1]), E = Math.abs(n[c][2] - r[2]);
                if (d < 0.01 && m < 0.01 && E < 0.01) {
                  f = c;
                  break;
                }
              }
              f >= 0 ? s.push(f) : (s.push(n.length), n.push([
                r[0],
                r[1],
                r[2]
              ]));
            }
            for (const r of p.elements) l.push([
              s[r[0]],
              s[r[1]],
              s[r[2]]
            ]);
            e.nodes.val = n, e.elements.val = l, xo(), console.log(`Area: ${p.elements.length} triangulos creados desde ${Xt.length} vertices`);
          } catch (p) {
            console.error("Area mesh failed:", p.message);
          }
          Xt = [];
          return;
        }
        if (Xt.push(o), console.log(`Area vertex ${Xt.length}: node ${o}`), Xt.length >= 2) {
          const n = Xt[Xt.length - 2], l = e.nodes.val, a = et();
          if (a) {
            const p = new to().setFromPoints([
              new Oe(...l[n]),
              new Oe(...l[o])
            ]), s = new Wo(p, new Go({
              color: 65280,
              linewidth: 2
            }));
            s.name = "area-preview", a.scene.add(s), a.render();
          }
        }
        return;
      }
    }
    function Rs(t) {
      const o = et();
      if (!o) return;
      Jt && (o.scene.remove(Jt), Jt.geometry.dispose(), Jt.material.dispose());
      const n = e.nodes.val, l = e.elements.val[t];
      if (!l) return;
      const a = [];
      for (let s = 0; s < l.length; s++) {
        const r = n[l[s]], f = n[l[(s + 1) % l.length]];
        a.push(r[0], r[1], r[2], f[0], f[1], f[2]);
      }
      const p = new to();
      p.setAttribute("position", new Ao(a, 3)), Jt = new Wo(p, new Go({
        color: 16776960,
        linewidth: 3,
        depthTest: false
      })), Jt.renderOrder = 9999, o.scene.add(Jt), o.render();
    }
    function Wn(t) {
      const o = et();
      if (!o) return -1;
      const n = o.renderer.domElement.getBoundingClientRect(), l = new oa((t.clientX - n.left) / n.width * 2 - 1, -((t.clientY - n.top) / n.height) * 2 + 1), a = new ta();
      a.setFromCamera(l, o.controls.object), a.params.Line = {
        threshold: 0.5
      };
      const p = e.nodes.val, s = e.elements.val;
      if (p.length === 0 || s.length === 0) return -1;
      let r = 1 / 0, f = -1;
      const c = a.ray;
      for (let m = 0; m < s.length; m++) {
        const E = s[m];
        if (E.length === 2) {
          const w = new Oe(...p[E[0]]), v = new Oe(...p[E[1]]), u = new nl(w, v), h = new Oe(), I = new Oe();
          c.closestPointToPoint(u.getCenter(new Oe()), h), u.closestPointToPoint(h, true, I);
          const z = h.distanceTo(I);
          z < r && (r = z, f = m);
        } else if (E.length === 3) {
          const w = new Oe(...p[E[0]]), v = new Oe(...p[E[1]]), u = new Oe(...p[E[2]]), h = new Oe();
          if (c.intersectTriangle(w, v, u, false, h)) {
            const z = c.origin.distanceTo(h);
            z < r && (r = z, f = m);
          } else {
            const z = w.add(v).add(u).divideScalar(3), T = new Oe();
            c.closestPointToPoint(z, T);
            const B = T.distanceTo(z);
            B < r && (r = B, f = m);
          }
        } else if (E.length === 4) {
          const w = new Oe(...p[E[0]]), v = new Oe(...p[E[1]]), u = new Oe(...p[E[2]]), h = new Oe(...p[E[3]]), I = new Oe();
          let z = c.intersectTriangle(w, v, u, false, I);
          if (z) {
            const T = c.origin.distanceTo(I);
            T < r && (r = T, f = m);
          }
          if (z = c.intersectTriangle(w, u, h, false, I), z) {
            const T = c.origin.distanceTo(I);
            T < r && (r = T, f = m);
          }
        }
      }
      const { extent: d } = vo();
      return r < d * 0.1 ? f : -1;
    }
    function Me(t, o = 4) {
      return Math.abs(t) < 1e-10 ? "0" : Math.abs(t) >= 1e6 ? t.toExponential(2) : Math.abs(t) >= 100 ? t.toFixed(1) : t.toFixed(o);
    }
    function Gn(t, o, n = 12) {
      var _a2;
      const l = Math.min(t.length, n), a = Math.min(((_a2 = t[0]) == null ? void 0 : _a2.length) || 0, n);
      let p = "<table>";
      if (o) {
        p += '<tr><td class="header"></td>';
        for (let s = 0; s < a; s++) p += `<td class="header">${o[s] || s}</td>`;
        p += "</tr>";
      }
      for (let s = 0; s < l; s++) {
        p += "<tr>", o && (p += `<td class="header">${o[s] || s}</td>`);
        for (let r = 0; r < a; r++) {
          const f = t[s][r], c = Math.abs(f) > 1e-10 ? "nonzero" : "";
          p += `<td class="${c}">${Me(f, 2)}</td>`;
        }
        p += "</tr>";
      }
      return p += "</table>", p;
    }
    function Be(t, o) {
      return `<span class="frac"><span class="frac-num">${t}</span><span class="frac-den">${o}</span></span>`;
    }
    function L(t, o, n) {
      let l = `<span class="var">${t}</span>`;
      return o && (l += `<sub>${o}</sub>`), l;
    }
    function Fa(t, o, n, l, a, p, s) {
      const r = 0.8333333333333334 * o, f = 5 / 6 * o, c = f > 0 && a > 0 ? 12 * t * n / (a * f * s ** 2) : 0, d = r > 0 && a > 0 ? 12 * t * l / (a * r * s ** 2) : 0, m = t * o / s, E = a * p / s, w = 12 * t * n / s ** 3 / (1 + c), v = 6 * t * n / s ** 2 / (1 + c), u = 4 * t * n / s * (1 + c / 4) / (1 + c), h = 2 * t * n / s * (1 - c / 2) / (1 + c), I = c > 1e-10 || d > 1e-10;
      return `<div class="fem-eq eq-box">
      <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">Formulaci\xF3n: ${I ? "Timoshenko (con deformaci\xF3n por cortante)" : "Euler-Bernoulli"}</strong></div>
      ${I ? `
      <div style="text-align:left;margin-bottom:6px;color:var(--fem-eq-sub)">
        ${L("A", "s")} = ${Be("5", "6")} \xB7 ${L("A")} = <span class="highlight">${Me(r)}</span>
        &nbsp;&nbsp; \u03C6<sub>z</sub> = ${Be("12\xB7" + L("E") + "\xB7" + L("I", "z"), L("G") + "\xB7" + L("A", "s") + "\xB7" + L("L") + "\xB2")} = <span class="highlight">${Me(c)}</span>
        &nbsp;&nbsp; \u03C6<sub>y</sub> = <span class="highlight">${Me(d)}</span>
      </div>
      <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">Coeficientes Timoshenko (Dr. Aguiar):</strong></div>
      <div>${L("t", "z")} = ${Be("12\xB7" + L("E") + "\xB7" + L("I", "z"), L("L") + "\xB3\xB7(1+\u03C6<sub>z</sub>)")} = <span class="highlight">${Me(w)}</span> &nbsp;(cortante)</div>
      <div>${L("b", "z")} = ${Be("6\xB7" + L("E") + "\xB7" + L("I", "z"), L("L") + "\xB2\xB7(1+\u03C6<sub>z</sub>)")} = <span class="highlight">${Me(v)}</span> &nbsp;(acoplamiento)</div>
      <div>${L("k", "z")} = ${Be("4\xB7" + L("E") + "\xB7" + L("I", "z") + "\xB7(1+\u03C6/4)", L("L") + "\xB7(1+\u03C6<sub>z</sub>)")} = <span class="highlight">${Me(u)}</span> &nbsp;(flexi\xF3n diagonal)</div>
      <div>${L("a", "z")} = ${Be("2\xB7" + L("E") + "\xB7" + L("I", "z") + "\xB7(1\u2212\u03C6/2)", L("L") + "\xB7(1+\u03C6<sub>z</sub>)")} = <span class="highlight">${Me(h)}</span> &nbsp;(flexi\xF3n off-diag)</div>
      ` : `
      <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">Coeficientes de rigidez:</strong></div>
      `}
      <div>${Be(L("E") + "\xB7" + L("A"), L("L"))} = <span class="highlight">${Me(m)}</span> &nbsp;(axial)</div>
      <div>${Be(L("G") + "\xB7" + L("J"), L("L"))} = <span class="highlight">${Me(E)}</span> &nbsp;(torsi\xF3n)</div>
      ${I ? "" : `
      <div>${Be("12\xB7" + L("E") + "\xB7" + L("I", "z"), L("L") + "\xB3")} = <span class="highlight">${Me(w)}</span></div>
      <div>${Be("4\xB7" + L("E") + "\xB7" + L("I", "z"), L("L"))} = <span class="highlight">${Me(u)}</span></div>
      `}
    </div>
    <div class="fem-eq">
      ${L("k", "local")} = <span class="mat-sym" style="grid-template-columns:repeat(4,auto)">
        <span class="cell">${Be(L("EA"), L("L"))}</span><span class="cell">0</span><span class="cell dots">\u22EF</span><span class="cell">${Be("\u2212" + L("EA"), L("L"))}</span>
        <span class="cell">0</span><span class="cell">${L("t", "z")}</span><span class="cell dots">\u22EF</span><span class="cell">${L("b", "z")}</span>
        <span class="cell dots">\u22EE</span><span class="cell dots">\u22EE</span><span class="cell dots">\u22F1</span><span class="cell dots">\u22EE</span>
        <span class="cell">0</span><span class="cell">${L("b", "z")}</span><span class="cell dots">\u22EF</span><span class="cell">${L("k", "z")}</span>
      </span>
      <sub style="color:var(--fem-label)">12\xD712 ${I ? "(Timoshenko)" : "(Euler-Bernoulli)"}</sub>
    </div>
    ${I ? `<div class="fem-eq eq-box" style="margin-top:6px">
      <div style="text-align:left"><strong style="color:var(--fem-section-title)">Matrices de rigidez (Dr. Aguiar, Fig 7.9):</strong></div>
      <div style="margin-top:4px">${L("K", "f")} = ${L("B", "f")}<sup>T</sup> \xB7 ${L("E")}\xB7${L("I")} \xB7 ${L("B", "f")} \xB7 ${L("J")} &nbsp;<sub style="color:var(--fem-label)">(flexi\xF3n, 1 pt Gauss)</sub></div>
      <div>${L("K", "c")} = ${L("B", "c")}<sup>T</sup> \xB7 ${L("G")}\xB7${L("A'")} \xB7 ${L("B", "c")} \xB7 ${L("J")} &nbsp;<sub style="color:var(--fem-label)">(cortante, 2 pts Gauss)</sub></div>
      <div>${L("K", "total")} = ${L("K", "f")} + ${L("K", "c")}</div>
    </div>` : ""}`;
    }
    function Pa(t) {
      if (t.length === 2) {
        const n = go(t[1], t[0]), l = Po(n), a = n[0] / l, p = n[1] / l, s = n[2] / l;
        return `<div class="fem-eq eq-box">
        <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">Cosenos directores:</strong></div>
        <div>${L("l")} = cos(\u03B1) = ${Be("\u0394x", L("L"))} = ${Be(Me(n[0]), Me(l))} = <span class="highlight">${Me(a)}</span></div>
        <div>${L("m")} = cos(\u03B2) = ${Be("\u0394y", L("L"))} = ${Be(Me(n[1]), Me(l))} = <span class="highlight">${Me(p)}</span></div>
        <div>${L("n")} = cos(\u03B3) = ${Be("\u0394z", L("L"))} = ${Be(Me(n[2]), Me(l))} = <span class="highlight">${Me(s)}</span></div>
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
    function Ra() {
      return `<div class="fem-eq">
      ${L("K", "global")} = ${L("T")}<sup>T</sup> \xB7 ${L("k", "local")} \xB7 ${L("T")}
    </div>`;
    }
    function Oa(t) {
      const o = t.map((n) => `6\xB7${n} = ${6 * n}`).join(", ");
      return `<div class="fem-eq eq-box">
      <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">Ensamblaje en K global:</strong></div>
      <div>${L("K", "global")}[${L("i")}, ${L("j")}] += ${L("K", "elem")}[${L("i")}, ${L("j")}]</div>
      <div style="margin-top:4px">donde ${L("i")}, ${L("j")} \u2208 {${o}} + (0..5)</div>
    </div>`;
    }
    function Na(t) {
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
    function Yn(t, o) {
      const n = t.length;
      let l = '<table><tr><td class="hdr"></td>';
      for (let a = 0; a < n; a++) l += `<td class="hdr">${o[a] || a}</td>`;
      l += "</tr>";
      for (let a = 0; a < n; a++) {
        l += `<tr><td class="hdr">${o[a] || a}</td>`;
        for (let p = 0; p < n; p++) {
          const s = t[a][p], r = (a === p ? "diag " : "") + (Math.abs(s) > 1e-10 ? "nz" : "");
          l += `<td class="${r}">${Me(s, 2)}</td>`;
        }
        l += "</tr>";
      }
      return l += "</table>", l;
    }
    function Os() {
      const t = "0", o = Be(L("EA"), L("L")), n = Be("\u2212" + L("EA"), L("L")), l = Be("12" + L("EI", "z"), L("L") + "\xB3"), a = Be("\u221212" + L("EI", "z"), L("L") + "\xB3"), p = Be("12" + L("EI", "y"), L("L") + "\xB3"), s = Be("\u221212" + L("EI", "y"), L("L") + "\xB3"), r = Be("6" + L("EI", "z"), L("L") + "\xB2"), f = Be("\u22126" + L("EI", "z"), L("L") + "\xB2"), c = Be("6" + L("EI", "y"), L("L") + "\xB2"), d = Be("\u22126" + L("EI", "y"), L("L") + "\xB2"), m = Be(L("GJ"), L("L")), E = Be("\u2212" + L("GJ"), L("L")), w = Be("4" + L("EI", "z"), L("L")), v = Be("2" + L("EI", "z"), L("L")), u = Be("4" + L("EI", "y"), L("L")), h = Be("2" + L("EI", "y"), L("L")), I = '<span style="color:var(--fem-eq-dots);font-style:italic">sym</span>', z = [
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
      ], T = [
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
      ], B = [
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
          r,
          t,
          a,
          t,
          t,
          t,
          r
        ],
        [
          t,
          t,
          p,
          t,
          d,
          t,
          t,
          t,
          s,
          t,
          d,
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
          E,
          t,
          t
        ],
        [
          t,
          t,
          d,
          t,
          u,
          t,
          t,
          t,
          c,
          t,
          h,
          t
        ],
        [
          t,
          r,
          t,
          t,
          t,
          w,
          t,
          f,
          t,
          t,
          t,
          v
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
          s,
          t,
          c,
          t,
          t,
          t,
          p,
          t,
          c,
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
          m,
          t,
          t
        ],
        [
          t,
          t,
          d,
          t,
          h,
          t,
          t,
          t,
          c,
          t,
          u,
          t
        ],
        [
          t,
          r,
          t,
          t,
          t,
          v,
          t,
          f,
          t,
          t,
          t,
          w
        ]
      ];
      let D = '<div style="margin-bottom:8px;color:var(--fem-eq-sub);font-size:11px;font-family:monospace">Eq. 6.1 \u2014 Matriz de rigidez de elemento de p\xF3rtico espacial</div>';
      D += '<table><tr><td class="hdr"></td>';
      for (const x of T) D += `<td class="hdr">${x}</td>`;
      D += "</tr>";
      for (let x = 0; x < 12; x++) {
        D += `<tr><td class="hdr">${z[x]}</td>`;
        for (let i = 0; i < 12; i++) if (i < x) D += `<td style="color:var(--fem-border-cell)">${i === 0 && x > 0 ? I : ""}</td>`;
        else {
          const $ = B[x][i], A = (x === i ? "diag " : "") + ($ !== "0" ? "nz" : "");
          D += `<td class="${A}">${$}</td>`;
        }
        D += "</tr>";
      }
      return D += "</table>", D;
    }
    function qa(t, o, n, l, a, p, s) {
      return `<div class="coeff-grid">${[
        {
          name: `${Be(L("E") + "\xB7" + L("A"), L("L"))}`,
          calc: `${Be(Me(t) + "\xD7" + Me(o), Me(s))}`,
          val: t * o / s,
          label: "Axial"
        },
        {
          name: `${Be("12\xB7" + L("E") + "\xB7" + L("I", "z"), L("L") + "\xB3")}`,
          calc: `${Be("12\xD7" + Me(t) + "\xD7" + Me(n), Me(s) + "\xB3")}`,
          val: 12 * t * n / s ** 3,
          label: "Corte Y"
        },
        {
          name: `${Be("6\xB7" + L("E") + "\xB7" + L("I", "z"), L("L") + "\xB2")}`,
          calc: `${Be("6\xD7" + Me(t) + "\xD7" + Me(n), Me(s) + "\xB2")}`,
          val: 6 * t * n / s ** 2,
          label: "Corte-Momento Z"
        },
        {
          name: `${Be("12\xB7" + L("E") + "\xB7" + L("I", "y"), L("L") + "\xB3")}`,
          calc: `${Be("12\xD7" + Me(t) + "\xD7" + Me(l), Me(s) + "\xB3")}`,
          val: 12 * t * l / s ** 3,
          label: "Corte Z"
        },
        {
          name: `${Be("6\xB7" + L("E") + "\xB7" + L("I", "y"), L("L") + "\xB2")}`,
          calc: `${Be("6\xD7" + Me(t) + "\xD7" + Me(l), Me(s) + "\xB2")}`,
          val: 6 * t * l / s ** 2,
          label: "Corte-Momento Y"
        },
        {
          name: `${Be(L("G") + "\xB7" + L("J"), L("L"))}`,
          calc: `${Be(Me(a) + "\xD7" + Me(p), Me(s))}`,
          val: a * p / s,
          label: "Torsi\xF3n"
        },
        {
          name: `${Be("4\xB7" + L("E") + "\xB7" + L("I", "z"), L("L"))}`,
          calc: `${Be("4\xD7" + Me(t) + "\xD7" + Me(n), Me(s))}`,
          val: 4 * t * n / s,
          label: "Flexi\xF3n Z (4EI/L)"
        },
        {
          name: `${Be("2\xB7" + L("E") + "\xB7" + L("I", "z"), L("L"))}`,
          calc: `${Be("2\xD7" + Me(t) + "\xD7" + Me(n), Me(s))}`,
          val: 2 * t * n / s,
          label: "Flexi\xF3n Z (2EI/L)"
        },
        {
          name: `${Be("4\xB7" + L("E") + "\xB7" + L("I", "y"), L("L"))}`,
          calc: `${Be("4\xD7" + Me(t) + "\xD7" + Me(l), Me(s))}`,
          val: 4 * t * l / s,
          label: "Flexi\xF3n Y (4EI/L)"
        },
        {
          name: `${Be("2\xB7" + L("E") + "\xB7" + L("I", "y"), L("L"))}`,
          calc: `${Be("2\xD7" + Me(t) + "\xD7" + Me(l), Me(s))}`,
          val: 2 * t * l / s,
          label: "Flexi\xF3n Y (2EI/L)"
        }
      ].map((f) => `<div class="coeff-item"><div style="color:var(--fem-eq-sub);font-size:10px;font-family:monospace;margin-bottom:2px">${f.label}</div>${f.name} = ${f.calc} = <span class="highlight">${Me(f.val)}</span></div>`).join("")}</div>`;
    }
    function Jn(t, o, n, l) {
      var _a2;
      const a = document.querySelector(".fem-full-overlay");
      a && a.remove();
      const p = document.createElement("div");
      p.className = "fem-full-overlay", p.innerHTML = `
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
    `, document.body.appendChild(p), (_a2 = p.querySelector("#fem-full-close")) == null ? void 0 : _a2.addEventListener("click", () => p.remove()), p.addEventListener("click", (s) => {
        s.target === p && p.remove();
      });
    }
    function Ns(t) {
      var _a2, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l2, _m, _n2, _o2, _p, _q, _r, _s2, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I, _J, _K, _L, _M, _N, _O;
      Kt && Kt.remove();
      const o = e.nodes.val, n = e.elements.val, l = n[t], a = l.map((x) => o[x]), p = l.length === 2, s = ((_a2 = e.elementInputs) == null ? void 0 : _a2.val) || {}, r = (_b = e.deformOutputs) == null ? void 0 : _b.val, f = (_c = e.analyzeOutputs) == null ? void 0 : _c.val;
      if (p) {
        const x = Po(go(a[1], a[0])), i = ((_d = s.elasticities) == null ? void 0 : _d.get(t)) ?? 0, $ = ((_e2 = s.areas) == null ? void 0 : _e2.get(t)) ?? 0, A = ((_f = s.momentsOfInertiaZ) == null ? void 0 : _f.get(t)) ?? 0, F = ((_g = s.momentsOfInertiaY) == null ? void 0 : _g.get(t)) ?? 0, G = ((_h = s.shearModuli) == null ? void 0 : _h.get(t)) ?? 0, g = ((_i = s.torsionalConstants) == null ? void 0 : _i.get(t)) ?? 0, S = ((_j = s.momentReleases) == null ? void 0 : _j.get(t)) || [], y = ((_k = s.partialFixitySprings) == null ? void 0 : _k.get(t)) || [], C = [
          "P (Axial)",
          "V2 (Corte)",
          "V3 (Corte)",
          "T (Torsi\xF3n)",
          "M22 (Momento)",
          "M33 (Momento)"
        ];
        let X = "";
        for (let U = 0; U < 6; U++) {
          const ae = U, Z = U + 6, K = (S.length >= 12 ? S[ae] : U >= 3 && S.length >= 6 && S[U - 3]) ? "checked" : "", de = (S.length >= 12 ? S[Z] : U >= 3 && S.length >= 6 && S[U]) ? "checked" : "", ie = y.length >= 12 && y[ae] > 0 ? y[ae].toFixed(1) : "", Ie = y.length >= 12 && y[Z] > 0 ? y[Z].toFixed(1) : "";
          X += `<tr>
          <td style="text-align:left;color:var(--fem-key)">${C[U]}</td>
          <td style="text-align:center"><input type="checkbox" data-rel="${ae}" ${K}></td>
          <td style="text-align:center"><input type="checkbox" data-rel="${Z}" ${de}></td>
          <td><input type="number" data-spr="${ae}" value="${ie}" placeholder="0" style="width:50px;background:var(--fem-bg);color:var(--fem-val);border:1px solid var(--fem-border);font-size:10px;text-align:right"></td>
          <td><input type="number" data-spr="${Z}" value="${Ie}" placeholder="0" style="width:50px;background:var(--fem-bg);color:var(--fem-val);border:1px solid var(--fem-border);font-size:10px;text-align:right"></td>
        </tr>`;
        }
        `${l[0]}${l[1]}${Me(x)}${Me(i)}${Me($)}${Me(A)}${Me(F)}${Me(G)}${Me(g)}${X}`;
      } else {
        const x = ((_l2 = s.elasticities) == null ? void 0 : _l2.get(t)) ?? 0, i = ((_m = s.thicknesses) == null ? void 0 : _m.get(t)) ?? 0, $ = ((_n2 = s.poissonsRatios) == null ? void 0 : _n2.get(t)) ?? 0, A = x / (2 * (1 + $)), F = l.length === 4, G = x / (1 - $ * $);
        `${l.length}${l.join(", ")}${Me(x)}${Me(A)}${Me(i)}${Me($)}`, F && (E = `<div class="fem-eq eq-box">
          <div style="text-align:left;margin-bottom:6px"><strong style="color:var(--fem-section-title)">Formulaci\xF3n Q4: Membrana + Mindlin-Reissner + Drilling</strong></div>

          <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">1. Matriz constitutiva (esfuerzo plano):</strong></div>
          <div>${L("D")} = ${Be(L("E"), "1\u2212\u03BD\xB2")} \xB7 <span class="mat-sym" style="grid-template-columns:repeat(3,auto)">
            <span class="cell">1</span><span class="cell">\u03BD</span><span class="cell">0</span>
            <span class="cell">\u03BD</span><span class="cell">1</span><span class="cell">0</span>
            <span class="cell">0</span><span class="cell">0</span><span class="cell">${Be("1\u2212\u03BD", "2")}</span>
          </span> = ${Be(Me(x), "1\u2212" + Me($) + "\xB2")} = <span class="highlight">${Me(G)}</span></div>

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
          <div>${L("D", "b")} = ${Be(L("E") + "\xB7" + L("t") + "\xB3", "12\xB7(1\u2212\u03BD\xB2)")} = <span class="highlight">${Me(x * i ** 3 / (12 * (1 - $ ** 2)))}</span></div>
          <div>${L("D", "s")} = \u03BA\xB7${L("G")}\xB7${L("t")} = <span class="highlight">${Me(5 / 6 * A * i)}</span> &nbsp; <sub style="color:var(--fem-label)">\u03BA = 5/6</sub></div>
          <div style="color:var(--fem-eq-sub)">MITC4: interpolaci\xF3n de cortante en puntos de atado (tying points)</div>

          <div style="text-align:left;margin-top:8px;margin-bottom:4px"><strong style="color:var(--fem-section-title)">10. Ensamblaje final:</strong></div>
          <div>${L("K", "24\xD724")} = ${L("K", "membrana")}(8\xD78) + ${L("K", "flexi\xF3n")}(12\xD712) + ${L("K", "drilling")}(12\xD712)</div>
          <div style="color:var(--fem-eq-sub)">DOFs por nodo: [u, v, w, \u03B8x, \u03B8y, \u03B8z]</div>
        </div>`);
      }
      let c = "", d = "", m = "", E = "", w = "", v = "", u = "", h = "", I = null, z = null, T = null, B = [];
      try {
        if (I = vn(a, s, t), z = yn(a), T = no(os(z), no(I, z)), B = p ? [
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
        ], p) {
          const A = Po(go(a[1], a[0])), F = ((_o2 = s.elasticities) == null ? void 0 : _o2.get(t)) ?? 0, G = ((_p = s.areas) == null ? void 0 : _p.get(t)) ?? 0, g = ((_q = s.momentsOfInertiaZ) == null ? void 0 : _q.get(t)) ?? 0, S = ((_r = s.momentsOfInertiaY) == null ? void 0 : _r.get(t)) ?? 0, y = ((_s2 = s.shearModuli) == null ? void 0 : _s2.get(t)) ?? 0, C = ((_t = s.torsionalConstants) == null ? void 0 : _t.get(t)) ?? 0;
          E = Fa(F, G, g, S, y, C, A);
        }
        w = Pa(a), v = Ra(), u = Oa(l), h = Na(p);
        const x = '<button class="fem-expand-btn" data-full="kLocal">\u26F6 Ver completa</button>', i = '<button class="fem-expand-btn" data-full="T">\u26F6 Ver completa</button>', $ = '<button class="fem-expand-btn" data-full="kGlobal">\u26F6 Ver completa</button>';
        c = `<div class="matrix-label">k_local (${I.length}\xD7${I.length}) ${x}</div>${Gn(I, B)}`, d = `<div class="matrix-label">T \u2014 Transformaci\xF3n (${z.length}\xD7${z.length}) ${i}</div>${Gn(z, B)}`, m = `<div class="matrix-label">K_global = T^T \xB7 k \xB7 T ${$}</div>${Gn(T, B)}`;
      } catch (x) {
        c = `<div style="color:red">Error: ${x.message}</div>`;
      }
      if (r == null ? void 0 : r.deformations) {
        const x = [
          "ux",
          "uy",
          "uz",
          "\u03B8x",
          "\u03B8y",
          "\u03B8z"
        ];
        l.map((i, $) => {
          var _a3;
          const A = ((_a3 = r.deformations) == null ? void 0 : _a3.get(i)) || [
            0,
            0,
            0,
            0,
            0,
            0
          ], F = x.map((G, g) => `<span class="prop-key">${G}</span>: <span class="${Math.abs(A[g]) > 1e-10 ? "result-val" : ""}">${Me(A[g])}</span>`).join(" &nbsp;");
          return `<div style="margin-bottom:2px"><strong>Nodo ${i}:</strong> ${F}</div>`;
        }).join("");
      }
      if (f && p && (r == null ? void 0 : r.deformations) && I && z) {
        const x = (_u = f.normals) == null ? void 0 : _u.get(t), i = (_v = f.shearsY) == null ? void 0 : _v.get(t), $ = (_w = f.shearsZ) == null ? void 0 : _w.get(t), A = (_x = f.torsions) == null ? void 0 : _x.get(t), F = (_y = f.bendingsY) == null ? void 0 : _y.get(t), G = (_z = f.bendingsZ) == null ? void 0 : _z.get(t), g = [
          "ux",
          "uy",
          "uz",
          "\u03B8x",
          "\u03B8y",
          "\u03B8z"
        ], S = [];
        for (const Z of l) {
          const K = ((_A = r.deformations) == null ? void 0 : _A.get(Z)) || [
            0,
            0,
            0,
            0,
            0,
            0
          ];
          S.push(...K);
        }
        let y = [];
        try {
          y = no(z, S);
        } catch {
          y = new Array(12).fill(0);
        }
        let C = [];
        try {
          C = no(I, y);
        } catch {
          C = new Array(12).fill(0);
        }
        const X = (Z, K) => Z.map((de, ie) => `<span style="color:${Math.abs(de) > 1e-10 ? "var(--fem-nonzero)" : "var(--fem-eq-dots)"}">${K[ie % 6]}=${Me(de)}</span>`).join(", "), ae = [
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
        ].map((Z, K) => `${Z}${K < 6 ? "\u1D62" : "\u2C7C"}`);
        `${L("u", "global")}${l.map((Z, K) => `<span style="color:var(--fem-label)">nodo ${Z}:</span> ${g.map((de, ie) => `<span style="color:${Math.abs(S[K * 6 + ie]) > 1e-10 ? "var(--fem-eq-var)" : "var(--fem-eq-dots)"}">${Me(S[K * 6 + ie])}</span>`).join(", ")}`).join(" | ")}${L("u", "local")}${L("T")}${L("u", "global")}${L("u", "local")}${X(y, [
          ...g,
          ...g
        ])}${L("f", "local")}${L("k", "local")}${L("u", "local")}${L("f", "local")}${C.map((Z, K) => `<span style="color:${Math.abs(Z) > 1e-10 ? "var(--fem-nonzero)" : "var(--fem-eq-dots)"}">${ae[K]}=${Me(Z)}</span>`).join(", ")}${L("P", "1")}${L("N", "i")}${Me(C[0])}${L("P", "7")}${L("N", "j")}${Me(C[6])}${L("P", "2")}${L("V", "y,i")}${Me(C[1])}${L("P", "8")}${L("V", "y,j")}${Me(C[7])}${L("P", "3")}${L("V", "z,i")}${Me(C[2])}${L("P", "9")}${L("V", "z,j")}${Me(C[8])}${L("P", "4")}${L("M", "x,i")}${Me(C[3])}${L("P", "10")}${L("M", "x,j")}${Me(C[9])}${L("P", "5")}${L("M", "y,i")}${Me(C[4])}${L("P", "11")}${L("M", "y,j")}${Me(C[10])}${L("P", "6")}${L("M", "z,i")}${Me(C[5])}${L("P", "12")}${L("M", "z,j")}${Me(C[11])}${x ? x.map((Z) => Me(Z)).join(", ") : "\u2014"}${i ? i.map((Z) => Me(Z)).join(", ") : "\u2014"}${$ ? $.map((Z) => Me(Z)).join(", ") : "\u2014"}${A ? A.map((Z) => Me(Z)).join(", ") : "\u2014"}${F ? F.map((Z) => Me(Z)).join(", ") : "\u2014"}${G ? G.map((Z) => Me(Z)).join(", ") : "\u2014"}`;
      } else if (f && p) {
        const x = (_B = f.normals) == null ? void 0 : _B.get(t), i = (_C = f.shearsY) == null ? void 0 : _C.get(t), $ = (_D = f.shearsZ) == null ? void 0 : _D.get(t), A = (_E = f.torsions) == null ? void 0 : _E.get(t), F = (_F = f.bendingsY) == null ? void 0 : _F.get(t), G = (_G = f.bendingsZ) == null ? void 0 : _G.get(t);
        `${x ? x.map((g) => Me(g)).join(", ") : "\u2014"}${i ? i.map((g) => Me(g)).join(", ") : "\u2014"}${$ ? $.map((g) => Me(g)).join(", ") : "\u2014"}${A ? A.map((g) => Me(g)).join(", ") : "\u2014"}${F ? F.map((g) => Me(g)).join(", ") : "\u2014"}${G ? G.map((g) => Me(g)).join(", ") : "\u2014"}`;
      } else if (f && !p) {
        const x = (_H = f.bendingXX) == null ? void 0 : _H.get(t), i = (_I = f.bendingYY) == null ? void 0 : _I.get(t), $ = (_J = f.bendingXY) == null ? void 0 : _J.get(t), A = (_K = f.membraneXX) == null ? void 0 : _K.get(t), F = (_L = f.membraneYY) == null ? void 0 : _L.get(t), G = (_M = f.membraneXY) == null ? void 0 : _M.get(t);
        `${x ? x.map((g) => Me(g)).join(", ") : "\u2014"}${i ? i.map((g) => Me(g)).join(", ") : "\u2014"}${$ ? $.map((g) => Me(g)).join(", ") : "\u2014"}${A ? A.map((g) => Me(g)).join(", ") : "\u2014"}${F ? F.map((g) => Me(g)).join(", ") : "\u2014"}${G ? G.map((g) => Me(g)).join(", ") : "\u2014"}`;
      }
      `${l[0]}`, 6 * l[0], 6 * l[0] + 5, `${l[1]}`, 6 * l[1], 6 * l[1] + 5, l.length === 3 && (`${l[2]}`, 6 * l[2], 6 * l[2] + 5), o.length * 6, o.length * 6, Kt = $l(t, o, n, s, r, f), Kt.id = "fem-inspect-panel", document.body.appendChild(Kt), (_N = Kt.querySelector("#er-close")) == null ? void 0 : _N.addEventListener("click", () => zo()), (_O = Kt.querySelector("#rel-apply")) == null ? void 0 : _O.addEventListener("click", () => {
        const x = Kt.querySelectorAll("input[data-rel]"), i = Kt.querySelectorAll("input[data-spr]"), $ = new Array(12).fill(false), A = new Array(12).fill(0);
        x.forEach((G) => {
          $[parseInt(G.dataset.rel)] = G.checked;
        }), i.forEach((G) => {
          const g = parseFloat(G.value);
          g > 0 && (A[parseInt(G.dataset.spr)] = g);
        }), s.momentReleases || (s.momentReleases = /* @__PURE__ */ new Map()), s.partialFixitySprings || (s.partialFixitySprings = /* @__PURE__ */ new Map()), $.some((G) => G) ? s.momentReleases.set(t, $) : s.momentReleases.delete(t), A.some((G) => G > 0) ? s.partialFixitySprings.set(t, A) : s.partialFixitySprings.delete(t), console.log(`Releases elem ${t}:`, $.map((G, g) => G ? relIds[g] : "").filter(Boolean).join(" ") || "none"), console.log(`Springs elem ${t}:`, A);
        const F = Kt.querySelector("#rel-apply");
        F.textContent = "\u2713 Aplicado", F.style.background = "#4caf50", setTimeout(() => {
          F.textContent = "Aplicar", F.style.background = "var(--fem-heading)";
        }, 1500);
      });
      const D = p ? (() => {
        var _a3, _b2, _c2, _d2, _e3, _f2;
        const x = Po(go(a[1], a[0])), i = ((_a3 = s.elasticities) == null ? void 0 : _a3.get(t)) ?? 0, $ = ((_b2 = s.areas) == null ? void 0 : _b2.get(t)) ?? 0, A = ((_c2 = s.momentsOfInertiaZ) == null ? void 0 : _c2.get(t)) ?? 0, F = ((_d2 = s.momentsOfInertiaY) == null ? void 0 : _d2.get(t)) ?? 0, G = ((_e3 = s.shearModuli) == null ? void 0 : _e3.get(t)) ?? 0, g = ((_f2 = s.torsionalConstants) == null ? void 0 : _f2.get(t)) ?? 0;
        return qa(i, $, A, F, G, g, x);
      })() : void 0;
      Kt.querySelectorAll("[data-full]").forEach((x) => {
        x.addEventListener("click", (i) => {
          i.stopPropagation();
          const $ = x.dataset.full;
          if ($ === "kLocal" && I) {
            const A = p ? Os() : "<em>Shell 18\xD718 \u2014 ver tabla num\xE9rica</em>";
            Jn(`Elemento ${t} \u2014 Rigidez Local k_local`, A, Yn(I, B), D);
          } else if ($ === "T" && z) Jn(`Elemento ${t} \u2014 Transformaci\xF3n T`, w, Yn(z, B));
          else if ($ === "kGlobal" && T) {
            const A = p ? Os() : "<em>Shell 18\xD718</em>";
            Jn(`Elemento ${t} \u2014 Rigidez Global K = T^T \xB7 k \xB7 T`, A, Yn(T, B), D);
          }
        });
      });
    }
    function qs() {
      const l = [], a = [];
      for (let v = 0; v <= 8; v++) {
        const u = v / 8, h = 30 * u, z = 12 * (1 - u) * (1 - u * 0.3) / 2, T = l.length;
        if (l.push([
          -z,
          -z,
          h
        ]), l.push([
          z,
          -z,
          h
        ]), l.push([
          z,
          z,
          h
        ]), l.push([
          -z,
          z,
          h
        ]), a.push([
          T,
          T + 1
        ]), a.push([
          T + 1,
          T + 2
        ]), a.push([
          T + 2,
          T + 3
        ]), a.push([
          T + 3,
          T
        ]), v > 0 && v < 8 && (a.push([
          T,
          T + 2
        ]), a.push([
          T + 1,
          T + 3
        ])), v > 0) {
          const B = T - 4;
          for (let D = 0; D < 4; D++) a.push([
            B + D,
            T + D
          ]);
          a.push([
            B,
            T + 1
          ]), a.push([
            B + 1,
            T + 2
          ]), a.push([
            B + 2,
            T + 3
          ]), a.push([
            B + 3,
            T
          ]);
        }
      }
      const p = /* @__PURE__ */ new Map();
      for (let v = 0; v < 4; v++) p.set(v, [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
      const s = l.length - 4, r = /* @__PURE__ */ new Map();
      for (let v = 0; v < 4; v++) r.set(s + v, [
        0,
        0,
        -50,
        0,
        0,
        0
      ]);
      e.nodes.val = l, e.elements.val = a, e.nodeInputs && (e.nodeInputs.val = {
        supports: p,
        loads: r
      });
      const f = 2e8, c = 77e6, d = 5e-3, m = 2e-6, E = 1e-6, w = {
        elasticities: new Map(a.map((v, u) => [
          u,
          f
        ])),
        shearModuli: new Map(a.map((v, u) => [
          u,
          c
        ])),
        areas: new Map(a.map((v, u) => [
          u,
          d
        ])),
        momentsOfInertiaZ: new Map(a.map((v, u) => [
          u,
          m
        ])),
        momentsOfInertiaY: new Map(a.map((v, u) => [
          u,
          m
        ])),
        torsionalConstants: new Map(a.map((v, u) => [
          u,
          E
        ]))
      };
      e.elementInputs && (e.elementInputs.val = w);
      try {
        const v = Lt(l, a, {
          supports: p,
          loads: r
        }, w);
        v && e.deformOutputs && (e.deformOutputs.val = v);
      } catch (v) {
        console.warn("Eiffel deform:", v.message);
      }
      setTimeout(() => It(), 50), Ze(), console.log(`Torre Eiffel: ${l.length} nodos, ${a.length} elementos, H=30m`);
    }
    function _s() {
      const l = [], a = [];
      for (let w = 0; w <= 20; w++) {
        const v = w / 20, u = 20 * v, h = 20 * (1 - Math.pow(2 * v - 1, 2)), I = 2;
        l.push([
          u,
          -2 / 2,
          h
        ]), l.push([
          u,
          I / 2,
          h
        ]);
      }
      for (let w = 0; w < 20; w++) a.push([
        w * 2,
        (w + 1) * 2
      ]), a.push([
        w * 2 + 1,
        (w + 1) * 2 + 1
      ]), a.push([
        w * 2,
        w * 2 + 1
      ]), a.push([
        w * 2,
        (w + 1) * 2 + 1
      ]), a.push([
        w * 2 + 1,
        (w + 1) * 2
      ]);
      a.push([
        20 * 2,
        20 * 2 + 1
      ]);
      const p = /* @__PURE__ */ new Map();
      p.set(0, [
        true,
        true,
        true,
        true,
        true,
        true
      ]), p.set(1, [
        true,
        true,
        true,
        true,
        true,
        true
      ]), p.set(20 * 2, [
        true,
        true,
        true,
        true,
        true,
        true
      ]), p.set(20 * 2 + 1, [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
      const s = /* @__PURE__ */ new Map();
      for (let w = 0; w <= 20; w++) s.set(w * 2, [
        0,
        0,
        -20,
        0,
        0,
        0
      ]), s.set(w * 2 + 1, [
        0,
        0,
        -20,
        0,
        0,
        0
      ]);
      e.nodes.val = l, e.elements.val = a, e.nodeInputs && (e.nodeInputs.val = {
        supports: p,
        loads: s
      });
      const r = 2e8, f = 77e6, c = 0.01, d = 5e-6, m = 2e-6, E = {
        elasticities: new Map(a.map((w, v) => [
          v,
          r
        ])),
        shearModuli: new Map(a.map((w, v) => [
          v,
          f
        ])),
        areas: new Map(a.map((w, v) => [
          v,
          c
        ])),
        momentsOfInertiaZ: new Map(a.map((w, v) => [
          v,
          d
        ])),
        momentsOfInertiaY: new Map(a.map((w, v) => [
          v,
          d
        ])),
        torsionalConstants: new Map(a.map((w, v) => [
          v,
          m
        ]))
      };
      e.elementInputs && (e.elementInputs.val = E);
      try {
        const w = Lt(l, a, {
          supports: p,
          loads: s
        }, E);
        w && e.deformOutputs && (e.deformOutputs.val = w);
      } catch (w) {
        console.warn("Arco:", w.message);
      }
      setTimeout(() => It(), 50), Ze(), console.log(`Arco Gateway: ${l.length} nodos, ${a.length} elem, span=20m, H=20m`);
    }
    function Bs() {
      const p = [], s = [];
      for (let u = 0; u <= 16; u++) {
        const h = 60 * u / 16;
        p.push([
          h,
          -6 / 2,
          8
        ]), p.push([
          h,
          6 / 2,
          8
        ]);
      }
      const r = p.length;
      for (let u = 0; u < 16; u++) s.push([
        u * 2,
        (u + 1) * 2
      ]), s.push([
        u * 2 + 1,
        (u + 1) * 2 + 1
      ]), s.push([
        u * 2,
        u * 2 + 1
      ]);
      s.push([
        16 * 2,
        16 * 2 + 1
      ]);
      const f = [
        Math.round(16 / 3),
        Math.round(2 * 16 / 3)
      ], c = [];
      for (const u of f) {
        const h = 60 * u / 16, I = p.length;
        p.push([
          h,
          -6 / 2,
          0
        ]);
        const z = p.length;
        p.push([
          h,
          6 / 2,
          0
        ]);
        const T = p.length;
        p.push([
          h,
          -6 / 2,
          28
        ]);
        const B = p.length;
        p.push([
          h,
          6 / 2,
          28
        ]), c.push(T, B), s.push([
          I,
          u * 2
        ]), s.push([
          u * 2,
          T
        ]), s.push([
          z,
          u * 2 + 1
        ]), s.push([
          u * 2 + 1,
          B
        ]), s.push([
          T,
          B
        ]);
      }
      for (const u of c) {
        const h = p[u][0];
        for (let I = 0; I <= 16; I++) {
          const z = 60 * I / 16;
          if (Math.abs(z - h) > 60 * 0.05 && Math.abs(z - h) < 60 * 0.45) {
            const T = p[u][1] < 0 ? I * 2 : I * 2 + 1;
            I % 2 === 0 && s.push([
              u,
              T
            ]);
          }
        }
      }
      const d = /* @__PURE__ */ new Map();
      d.set(0, [
        true,
        true,
        true,
        false,
        false,
        false
      ]), d.set(1, [
        true,
        true,
        true,
        false,
        false,
        false
      ]), d.set(16 * 2, [
        false,
        true,
        true,
        false,
        false,
        false
      ]), d.set(16 * 2 + 1, [
        false,
        true,
        true,
        false,
        false,
        false
      ]);
      for (let u = r; u < r + f.length * 4; u += 4) d.set(u, [
        true,
        true,
        true,
        true,
        true,
        true
      ]), d.set(u + 1, [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
      const m = /* @__PURE__ */ new Map();
      for (let u = 0; u <= 16; u++) m.set(u * 2, [
        0,
        0,
        -30,
        0,
        0,
        0
      ]), m.set(u * 2 + 1, [
        0,
        0,
        -30,
        0,
        0,
        0
      ]);
      e.nodes.val = p, e.elements.val = s, e.nodeInputs && (e.nodeInputs.val = {
        supports: d,
        loads: m
      });
      const E = 2e8, w = 77e6, v = {
        elasticities: new Map(s.map((u, h) => [
          h,
          E
        ])),
        shearModuli: new Map(s.map((u, h) => [
          h,
          w
        ])),
        areas: new Map(s.map((u, h) => [
          h,
          h < 16 * 3 + 1 ? 0.02 : 1e-3
        ])),
        momentsOfInertiaZ: new Map(s.map((u, h) => [
          h,
          5e-5
        ])),
        momentsOfInertiaY: new Map(s.map((u, h) => [
          h,
          2e-5
        ])),
        torsionalConstants: new Map(s.map((u, h) => [
          h,
          1e-5
        ]))
      };
      e.elementInputs && (e.elementInputs.val = v);
      try {
        const u = Lt(p, s, {
          supports: d,
          loads: m
        }, v);
        u && e.deformOutputs && (e.deformOutputs.val = u);
      } catch (u) {
        console.warn("Puente:", u.message);
      }
      setTimeout(() => It(), 50), Ze(), console.log(`Puente atirantado: ${p.length} nodos, ${s.length} elem, span=60m`);
    }
    function Ds() {
      const p = [], s = [];
      for (let h = 0; h <= 12; h++) {
        const I = h * 3.5, z = h * 5 * Math.PI / 180;
        for (let T = 0; T < 6; T++) {
          const B = z + 2 * Math.PI * T / 6, D = 5 * Math.cos(B), x = 5 * Math.sin(B);
          p.push([
            D,
            x,
            I
          ]);
        }
      }
      for (let h = 0; h <= 12; h++) {
        const I = h * 6;
        for (let z = 0; z < 6; z++) s.push([
          I + z,
          I + (z + 1) % 6
        ]);
        if (h < 12) {
          const z = (h + 1) * 6;
          for (let T = 0; T < 6; T++) s.push([
            I + T,
            z + T
          ]), s.push([
            I + T,
            z + (T + 1) % 6
          ]);
        }
      }
      for (let h = 0; h <= 12; h++) {
        const I = p.length;
        p.push([
          0,
          0,
          h * 3.5
        ]);
        const z = h * 6;
        for (let T = 0; T < 6; T++) s.push([
          I,
          z + T
        ]);
      }
      const r = 13 * 6;
      for (let h = 0; h < 12; h++) s.push([
        r + h,
        r + h + 1
      ]);
      const f = /* @__PURE__ */ new Map();
      for (let h = 0; h < 6; h++) f.set(h, [
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
      const c = /* @__PURE__ */ new Map();
      for (let h = 1; h <= 12; h++) {
        const I = 10 * h / 12, z = h * 6;
        for (let T = 0; T < 6; T++) c.set(z + T, [
          I,
          0,
          -5,
          0,
          0,
          0
        ]);
      }
      e.nodes.val = p, e.elements.val = s, e.nodeInputs && (e.nodeInputs.val = {
        supports: f,
        loads: c
      });
      const d = 2e8, m = 77e6, E = 8e-3, w = 1e-5, v = 5e-6, u = {
        elasticities: new Map(s.map((h, I) => [
          I,
          d
        ])),
        shearModuli: new Map(s.map((h, I) => [
          I,
          m
        ])),
        areas: new Map(s.map((h, I) => [
          I,
          E
        ])),
        momentsOfInertiaZ: new Map(s.map((h, I) => [
          I,
          w
        ])),
        momentsOfInertiaY: new Map(s.map((h, I) => [
          I,
          w
        ])),
        torsionalConstants: new Map(s.map((h, I) => [
          I,
          v
        ]))
      };
      e.elementInputs && (e.elementInputs.val = u);
      try {
        const h = Lt(p, s, {
          supports: f,
          loads: c
        }, u);
        h && e.deformOutputs && (e.deformOutputs.val = h);
      } catch (h) {
        console.warn("Twisted:", h.message);
      }
      setTimeout(() => It(), 50), Ze(), console.log(`Torre Twist: ${p.length} nodos, ${s.length} elem, 12 pisos, twist=5deg/piso`);
    }
    function Hs() {
      const a = [], p = [];
      for (let u = 0; u <= 20; u++) {
        const h = u / 20, I = u * 3;
        let z = 8 * (1 - h * 0.7);
        h > 0.4 && (z *= 0.85), h > 0.7 && (z *= 0.7);
        const T = a.length;
        a.push([
          0,
          0,
          I
        ]);
        for (let B = 0; B < 3; B++) {
          const D = B * 2 * Math.PI / 3 - Math.PI / 2, x = z * Math.cos(D), i = z * Math.sin(D), $ = a.length;
          a.push([
            x,
            i,
            I
          ]), p.push([
            T,
            $
          ]);
          const A = a.length;
          a.push([
            x * 0.5,
            i * 0.5,
            I
          ]), p.push([
            T,
            A
          ]), p.push([
            A,
            $
          ]);
        }
        for (let B = 0; B < 3; B++) {
          const D = T + 1 + B * 2, x = T + 1 + (B + 1) % 3 * 2;
          p.push([
            D,
            x
          ]);
        }
        if (u < 20) {
          const D = T + 7;
          p.push([
            T,
            D
          ]);
          for (let x = 0; x < 3; x++) p.push([
            T + 1 + x * 2,
            D + 1 + x * 2
          ]), p.push([
            T + 2 + x * 2,
            D + 2 + x * 2
          ]), p.push([
            T + 1 + x * 2,
            D + 2 + x * 2
          ]);
        }
      }
      const s = /* @__PURE__ */ new Map(), r = 1 + 3 * 2;
      for (let u = 0; u < r; u++) s.set(u, [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
      const f = /* @__PURE__ */ new Map();
      for (let u = 1; u <= 20; u++) {
        const h = u * r, I = 5 * u / 20;
        f.set(h, [
          I,
          0,
          -10,
          0,
          0,
          0
        ]);
      }
      e.nodes.val = a, e.elements.val = p, e.nodeInputs && (e.nodeInputs.val = {
        supports: s,
        loads: f
      });
      const c = 35e6, d = 14e6, m = 0.02, E = 5e-5, w = 2e-5, v = {
        elasticities: new Map(p.map((u, h) => [
          h,
          c
        ])),
        shearModuli: new Map(p.map((u, h) => [
          h,
          d
        ])),
        areas: new Map(p.map((u, h) => [
          h,
          m
        ])),
        momentsOfInertiaZ: new Map(p.map((u, h) => [
          h,
          E
        ])),
        momentsOfInertiaY: new Map(p.map((u, h) => [
          h,
          E
        ])),
        torsionalConstants: new Map(p.map((u, h) => [
          h,
          w
        ]))
      };
      e.elementInputs && (e.elementInputs.val = v);
      try {
        const u = Lt(a, p, {
          supports: s,
          loads: f
        }, v);
        u && e.deformOutputs && (e.deformOutputs.val = u);
      } catch (u) {
        console.warn("Burj:", u.message);
      }
      setTimeout(() => It(), 50), Ze(), console.log(`Burj Khalifa: ${a.length} nodos, ${p.length} elem, 20 pisos, H=${20 * 3}m`);
    }
    function js() {
      const t = [], o = [];
      for (let m = 0; m < 3; m++) {
        const E = m * 12, w = 15 - m * 2, v = 20 - m * 3, u = 8 - m, h = t.length;
        for (let z = 0; z <= 4; z++) {
          const T = z / 4, B = -u / 2 + u * T, D = v * (1 - T * T * 0.3);
          for (let x = 0; x <= 12; x++) {
            const i = x / 12, $ = E + D * i, A = w * Math.sin(Math.PI * i) * (1 - T * T * 0.5), F = B;
            t.push([
              $,
              F,
              A
            ]);
          }
        }
        const I = 13;
        for (let z = 0; z < 4; z++) for (let T = 0; T < 12; T++) {
          const B = h + z * I + T, D = h + z * I + T + 1, x = h + (z + 1) * I + T + 1, i = h + (z + 1) * I + T;
          o.push([
            B,
            D,
            x,
            i
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
      const p = /* @__PURE__ */ new Map();
      for (let m = 0; m < t.length; m++) t[m][2] > 2 && p.set(m, [
        0,
        0,
        -5,
        0,
        0,
        0
      ]);
      e.nodes.val = t, e.elements.val = o, e.nodeInputs && (e.nodeInputs.val = {
        supports: a,
        loads: p
      });
      const s = 35e6, r = 0.2, f = 0.15, c = s / (2 * (1 + r)), d = {
        elasticities: new Map(o.map((m, E) => [
          E,
          s
        ])),
        poissonsRatios: new Map(o.map((m, E) => [
          E,
          r
        ])),
        thicknesses: new Map(o.map((m, E) => [
          E,
          f
        ])),
        shearModuli: new Map(o.map((m, E) => [
          E,
          c
        ]))
      };
      e.elementInputs && (e.elementInputs.val = d);
      try {
        const m = Lt(t, o, {
          supports: a,
          loads: p
        }, d);
        m && e.deformOutputs && (e.deformOutputs.val = m);
      } catch (m) {
        console.warn("Opera:", m.message);
      }
      setTimeout(() => It(), 50), Ze(), console.log(`Sydney Opera: ${t.length} nodos, ${o.length} shells Q4, 3 velas`);
    }
    function Ws() {
      const l = [], a = [];
      for (let v = 0; v <= 15; v++) {
        const u = v / 15, h = v * 3.5, I = 5 * (0.6 + 0.4 * Math.sin(Math.PI * u));
        if (u > 0.9) {
          const z = 5 * (0.6 + 0.4 * Math.sin(Math.PI * 0.9)) * (1 - (u - 0.9) * 8);
          for (let T = 0; T < 12; T++) {
            const B = 2 * Math.PI * T / 12;
            l.push([
              Math.max(z, 1) * Math.cos(B),
              Math.max(z, 1) * Math.sin(B),
              h
            ]);
          }
        } else for (let z = 0; z < 12; z++) {
          const T = 2 * Math.PI * z / 12;
          l.push([
            I * Math.cos(T),
            I * Math.sin(T),
            h
          ]);
        }
      }
      for (let v = 0; v < 15; v++) {
        const u = v * 12, h = (v + 1) * 12;
        for (let z = 0; z < 12; z++) a.push([
          u + z,
          u + (z + 1) % 12
        ]);
        const I = v % 2 === 0 ? 1 : -1;
        for (let z = 0; z < 12; z++) {
          const T = (z + I + 12) % 12;
          a.push([
            u + z,
            h + T
          ]), a.push([
            u + z,
            h + z
          ]);
        }
      }
      const p = 15 * 12;
      for (let v = 0; v < 12; v++) a.push([
        p + v,
        p + (v + 1) % 12
      ]);
      const s = /* @__PURE__ */ new Map();
      for (let v = 0; v < 12; v++) s.set(v, [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
      const r = /* @__PURE__ */ new Map();
      for (let v = 1; v <= 15; v++) {
        const u = v * 12, h = 3 * v / 15;
        for (let I = 0; I < 12; I += 3) r.set(u + I, [
          h,
          0,
          -8,
          0,
          0,
          0
        ]);
      }
      e.nodes.val = l, e.elements.val = a, e.nodeInputs && (e.nodeInputs.val = {
        supports: s,
        loads: r
      });
      const f = 2e8, c = 77e6, d = 6e-3, m = 8e-6, E = 4e-6, w = {
        elasticities: new Map(a.map((v, u) => [
          u,
          f
        ])),
        shearModuli: new Map(a.map((v, u) => [
          u,
          c
        ])),
        areas: new Map(a.map((v, u) => [
          u,
          d
        ])),
        momentsOfInertiaZ: new Map(a.map((v, u) => [
          u,
          m
        ])),
        momentsOfInertiaY: new Map(a.map((v, u) => [
          u,
          m
        ])),
        torsionalConstants: new Map(a.map((v, u) => [
          u,
          E
        ]))
      };
      e.elementInputs && (e.elementInputs.val = w);
      try {
        const v = Lt(l, a, {
          supports: s,
          loads: r
        }, w);
        v && e.deformOutputs && (e.deformOutputs.val = v);
      } catch (v) {
        console.warn("Diagrid:", v.message);
      }
      setTimeout(() => It(), 50), Ze(), console.log(`Diagrid Tower: ${l.length} nodos, ${a.length} elem, 15 pisos, H=${15 * 3.5}m`);
    }
    function Gs() {
      const t = [], o = [], n = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map(), a = 3, p = 5, s = [
        0,
        5,
        10
      ], r = [
        0,
        4,
        8
      ], f = p + 1;
      for (let i = 0; i < f; i++) {
        const $ = i * a;
        for (const A of r) for (const F of s) t.push([
          F,
          A,
          $
        ]);
      }
      for (let i = 0; i < 9; i++) n.set(i, [
        1,
        1,
        1,
        1,
        1,
        1
      ]);
      for (let i = 0; i < p; i++) for (let $ = 0; $ < 9; $++) o.push([
        i * 9 + $,
        (i + 1) * 9 + $
      ]);
      const c = [
        [
          0,
          1
        ],
        [
          1,
          2
        ],
        [
          3,
          4
        ],
        [
          4,
          5
        ],
        [
          6,
          7
        ],
        [
          7,
          8
        ]
      ], d = [
        [
          0,
          3
        ],
        [
          3,
          6
        ],
        [
          1,
          4
        ],
        [
          4,
          7
        ],
        [
          2,
          5
        ],
        [
          5,
          8
        ]
      ];
      for (let i = 1; i <= p; i++) {
        const $ = i * 9;
        for (const [A, F] of c) o.push([
          $ + A,
          $ + F
        ]);
        for (const [A, F] of d) o.push([
          $ + A,
          $ + F
        ]);
      }
      const m = p * 9;
      for (let i = 0; i < 9; i++) l.set(m + i, [
        100 / 9,
        0,
        0,
        0,
        0,
        0
      ]);
      e.nodes.val = t, e.elements.val = o, e.nodeInputs && (e.nodeInputs.val = {
        supports: n,
        loads: l
      });
      const E = 25e6, w = 10417e3, v = p * 9, u = 0.16, h = 0.4 ** 4 / 12, I = 3605e-6, z = 0.125, T = 0.25 * 0.5 ** 3 / 12, B = 0.5 * 0.25 ** 3 / 12, D = 1788e-6, x = {
        elasticities: new Map(o.map((i, $) => [
          $,
          E
        ])),
        shearModuli: new Map(o.map((i, $) => [
          $,
          w
        ])),
        areas: new Map(o.map((i, $) => [
          $,
          $ < v ? u : z
        ])),
        momentsOfInertiaZ: new Map(o.map((i, $) => [
          $,
          $ < v ? h : T
        ])),
        momentsOfInertiaY: new Map(o.map((i, $) => [
          $,
          $ < v ? h : B
        ])),
        torsionalConstants: new Map(o.map((i, $) => [
          $,
          $ < v ? I : D
        ]))
      };
      e.elementInputs && (e.elementInputs.val = x);
      try {
        const i = Lt(t, o, {
          supports: n,
          loads: l
        }, x);
        i && e.deformOutputs && (e.deformOutputs.val = i);
      } catch (i) {
        console.warn("Edif5P:", i.message);
      }
      setTimeout(() => It(), 50), Ze(), console.log(`Edificio 5P: ${t.length} nodos, ${o.length} elem, 10x8m, 5 pisos`);
    }
    function Ys() {
      const t = [], o = [], n = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map(), a = 0.4, p = 0.2, s = 0.5, r = 4, f = 4, c = a / r, d = a / f, m = r + 1;
      for (let i = 0; i <= f; i++) for (let $ = 0; $ <= r; $++) t.push([
        $ * c,
        i * d,
        0
      ]);
      const E = a / 2, w = a / 2, v = p / 2, u = t.length;
      t.push([
        E - v,
        w - v,
        0
      ]), t.push([
        E + v,
        w - v,
        0
      ]), t.push([
        E + v,
        w + v,
        0
      ]), t.push([
        E - v,
        w + v,
        0
      ]);
      const h = t.length;
      t.push([
        E - v,
        w - v,
        s
      ]), t.push([
        E + v,
        w - v,
        s
      ]), t.push([
        E + v,
        w + v,
        s
      ]), t.push([
        E - v,
        w + v,
        s
      ]);
      for (let i = 0; i < 4; i++) o.push([
        u + i,
        h + i
      ]);
      o.push([
        h,
        h + 1
      ]), o.push([
        h + 1,
        h + 2
      ]), o.push([
        h + 2,
        h + 3
      ]), o.push([
        h + 3,
        h
      ]);
      for (let i = 0; i <= f; i++) for (let $ = 0; $ < r; $++) o.push([
        i * m + $,
        i * m + $ + 1
      ]);
      for (let i = 0; i <= r; i++) for (let $ = 0; $ < f; $++) o.push([
        $ * m + i,
        ($ + 1) * m + i
      ]);
      n.set(0, [
        1,
        1,
        1,
        1,
        1,
        1
      ]), n.set(r, [
        1,
        1,
        1,
        1,
        1,
        1
      ]), n.set(f * m, [
        1,
        1,
        1,
        1,
        1,
        1
      ]), n.set(f * m + r, [
        1,
        1,
        1,
        1,
        1,
        1
      ]);
      for (let i = 0; i < 4; i++) l.set(h + i, [
        0,
        0,
        -500 / 4,
        0,
        0,
        0
      ]);
      e.nodes.val = t, e.elements.val = o, e.nodeInputs && (e.nodeInputs.val = {
        supports: n,
        loads: l
      });
      const I = 2e8, z = 77e6, T = 2e-3, B = 1e-6, D = 5e-7, x = {
        elasticities: new Map(o.map((i, $) => [
          $,
          I
        ])),
        shearModuli: new Map(o.map((i, $) => [
          $,
          z
        ])),
        areas: new Map(o.map((i, $) => [
          $,
          T
        ])),
        momentsOfInertiaZ: new Map(o.map((i, $) => [
          $,
          B
        ])),
        momentsOfInertiaY: new Map(o.map((i, $) => [
          $,
          B
        ])),
        torsionalConstants: new Map(o.map((i, $) => [
          $,
          D
        ]))
      };
      e.elementInputs && (e.elementInputs.val = x);
      try {
        const i = Lt(t, o, {
          supports: n,
          loads: l
        }, x);
        i && e.deformOutputs && (e.deformOutputs.val = i);
      } catch (i) {
        console.warn("PlacaHSS:", i.message);
      }
      setTimeout(() => It(), 50), Ze(), console.log(`Placa Base HSS: ${t.length} nodos, ${o.length} elem, P=-500kN`);
    }
    function _a() {
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
    function Ba() {
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
        }, n = o("po-colB"), l = o("po-colH"), a = o("po-fc") * 1e3, p = o("po-fy") * 1e3, s = o("po-H"), r = o("po-L"), f = o("po-As") * 1e-4, c = o("po-nbar"), d = o("po-drift") / 100, m = o("po-ncycles"), E = t.querySelector("#pushover-status");
        E.textContent = "Generando historia de desplazamientos...";
        const w = [], v = d * s, u = 40;
        for (let h = 1; h <= m; h++) {
          const I = v * h / m;
          for (let z = 0; z <= u; z++) w.push(I * Math.sin(2 * Math.PI * z / u));
        }
        E.textContent = `Resolviendo pushover (${w.length} pasos)...`;
        try {
          const { cyclicPushover: h } = await sa(async () => {
            const { cyclicPushover: z } = await import("./cyclicPushoverCpp-A7gv4Lnh.js").then(async (m2) => {
              await m2.__tla;
              return m2;
            });
            return {
              cyclicPushover: z
            };
          }, __vite__mapDeps([5,4]), import.meta.url), I = await h({
            colHeight: s,
            beamLength: r,
            col: {
              b: n,
              h: l,
              fpc: -a,
              Fy_rebar: p,
              E_rebar: 2e8,
              rebar_area: f,
              cover: 0.04,
              n_rebar: c
            },
            beam: {
              b: 0.25,
              h: 0.3,
              fpc: -a,
              Fy_rebar: p,
              E_rebar: 2e8,
              rebar_area: f * 0.7,
              cover: 0.03,
              n_rebar: c
            },
            dispHistory: w
          });
          E.textContent = `Completado: ${I.nSteps} pasos`, Da(t.querySelector("#pushover-canvas"), I.displacements, I.forces, `Pushover: ${n * 100}x${l * 100}cm, f'c=${a / 1e3}MPa, Fy=${p / 1e3}MPa`);
        } catch (h) {
          E.textContent = `Error: ${h.message}`, console.error("Pushover failed:", h);
        }
      });
    }
    function Da(t, o, n, l) {
      const a = t.getContext("2d");
      if (!a || o.length === 0) return;
      const p = t.width, s = t.height, r = {
        left: 55,
        right: 15,
        top: 30,
        bottom: 35
      }, f = p - r.left - r.right, c = s - r.top - r.bottom;
      a.fillStyle = "#111118", a.fillRect(0, 0, p, s);
      let d = Math.min(...o), m = Math.max(...o), E = Math.min(...n), w = Math.max(...n);
      d === m && (d -= 0.01, m += 0.01), E === w && (E -= 1, w += 1);
      const v = m - d, u = w - E, h = (B) => r.left + (B - d) / v * f, I = (B) => r.top + c - (B - E) / u * c;
      a.strokeStyle = "#333", a.lineWidth = 0.5, d < 0 && m > 0 && (a.strokeStyle = "#555", a.beginPath(), a.moveTo(h(0), r.top), a.lineTo(h(0), r.top + c), a.stroke()), E < 0 && w > 0 && (a.beginPath(), a.moveTo(r.left, I(0)), a.lineTo(r.left + f, I(0)), a.stroke()), a.strokeStyle = "#ff4444", a.lineWidth = 1.5, a.beginPath(), a.moveTo(h(o[0]), I(n[0]));
      for (let B = 1; B < o.length; B++) a.lineTo(h(o[B]), I(n[B]));
      a.stroke(), a.fillStyle = "#aaa", a.font = "11px monospace", a.textAlign = "center", a.fillText("Desplazamiento (m)", r.left + f / 2, s - 5), a.save(), a.translate(12, r.top + c / 2), a.rotate(-Math.PI / 2), a.fillText("Fuerza (kN)", 0, 0), a.restore(), a.fillStyle = "#ee9b00", a.font = "bold 11px monospace", a.textAlign = "center", a.fillText(l, p / 2, 15), a.fillStyle = "#888", a.font = "9px monospace", a.textAlign = "center";
      const z = v / 5;
      for (let B = 0; B <= 5; B++) {
        const D = d + z * B;
        a.fillText((D * 1e3).toFixed(1), h(D), s - r.bottom + 15);
      }
      a.textAlign = "right";
      const T = u / 5;
      for (let B = 0; B <= 5; B++) {
        const D = E + T * B;
        a.fillText(D.toFixed(0), r.left - 5, I(D) + 3);
      }
    }
    let en = null;
    function Ha() {
      if (en) {
        en.remove(), en = null;
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
    `, document.body.appendChild(t), en = t, t.querySelector("#nl-close").addEventListener("click", () => {
        t.remove(), en = null;
      }), t.querySelector("#nl-test").addEventListener("click", () => ja(t));
    }
    function ja(t) {
      const o = parseFloat(t.querySelector("#nl-fy").value), n = parseFloat(t.querySelector("#nl-e0").value), l = parseFloat(t.querySelector("#nl-b").value), a = parseFloat(t.querySelector("#nl-r0").value), p = parseFloat(t.querySelector("#nl-amp").value), s = parseInt(t.querySelector("#nl-cycles").value), r = 100, f = [];
      for (let U = 0; U < s; U++) {
        const ae = p * (1 + U * 0.5);
        for (let Z = 0; Z < r; Z++) {
          const K = Z / r * 2 * Math.PI;
          f.push(ae * Math.sin(K));
        }
      }
      const c = o / n, d = l * n;
      let m = 0, E = 0, w = -c, v = c, u = 0, h = 0, I = 0, z = 0, T = 0, B = 0;
      const D = [];
      for (const U of f) {
        let ae = w, Z = v, K = u, de = h, ie = I, Ie = z, Re = T, q = B, fe;
        const oe = U - m;
        if (Math.abs(oe) < 1e-20) {
          D.push(E);
          continue;
        }
        if ((q === 0 || q === 3) && (oe < 0 ? (q = 2, de = -c, ie = -o, K = de, Ie = 0, Re = 0) : (q = 1, de = c, ie = o, K = de, Ie = 0, Re = 0)), q === 2 && oe > 0) {
          q = 1, Ie = m, Re = E, m < ae && (ae = m);
          const Ee = (Z - ae) / (2 * 1 * c), je = 1 + 0 * Math.pow(Ee, 0.8);
          de = (o * je - d * c * je - Re + n * Ie) / (n - d), ie = o * je + d * (de - c * je), K = Z;
        } else if (q === 1 && oe < 0) {
          q = 2, Ie = m, Re = E, m > Z && (Z = m);
          const Ee = (Z - ae) / (2 * 1 * c), je = 1 + 0 * Math.pow(Ee, 0.8);
          de = (-o * je + d * c * je - Re + n * Ie) / (n - d), ie = -o * je + d * (de + c * je), K = ae;
        }
        const pe = Math.abs((K - de) / c);
        let Q = a - 0.925 * pe / (0.15 + pe);
        Q < 0.1 && (Q = 0.1);
        const me = (U - Ie) / (de - Ie), we = 1 + Math.pow(Math.abs(me), Q), ne = Math.pow(we, 1 / Q);
        fe = l * me + (1 - l) * me / ne, fe = fe * (ie - Re) + Re, D.push(fe), m = U, E = fe, w = ae, v = Z, u = K, h = de, I = ie, z = Ie, T = Re, B = q;
      }
      const x = t.querySelector("#nl-canvas"), i = x.getContext("2d"), $ = x.width, A = x.height;
      i.clearRect(0, 0, $, A);
      const F = Math.max(...f.map(Math.abs)), G = Math.max(...D.map(Math.abs)), g = ($ - 40) / (2 * F), S = (A - 40) / (2 * G), y = $ / 2, C = A / 2;
      i.strokeStyle = "#444", i.lineWidth = 1, i.beginPath(), i.moveTo(20, C), i.lineTo($ - 20, C), i.stroke(), i.beginPath(), i.moveTo(y, 20), i.lineTo(y, A - 20), i.stroke(), i.fillStyle = "#888", i.font = "10px monospace", i.textAlign = "center", i.fillText("\u03B5 (strain)", $ - 40, C - 5), i.fillText("\u03C3 (stress)", y + 30, 15), i.fillText(`\xB1${(F * 100).toFixed(1)}%`, $ - 30, C + 12), i.fillText(`\xB1${(G / 1e3).toFixed(0)} MPa`, y + 40, 30), i.strokeStyle = "#00ccff", i.lineWidth = 1.5, i.beginPath();
      for (let U = 0; U < f.length; U++) {
        const ae = y + f[U] * g, Z = C - D[U] * S;
        U === 0 ? i.moveTo(ae, Z) : i.lineTo(ae, Z);
      }
      i.stroke(), i.strokeStyle = "#ff333366", i.lineWidth = 1, i.setLineDash([
        4,
        4
      ]), i.beginPath(), i.moveTo(20, C - o * S), i.lineTo($ - 20, C - o * S), i.stroke(), i.beginPath(), i.moveTo(20, C + o * S), i.lineTo($ - 20, C + o * S), i.stroke(), i.setLineDash([]), i.fillStyle = "#ff6666", i.font = "9px monospace", i.fillText(`Fy = ${(o / 1e3).toFixed(0)} MPa`, $ - 50, C - o * S - 5);
      const X = t.querySelector("#nl-info");
      X.textContent = `Steel02: Fy=${(o / 1e3).toFixed(0)} MPa, E\u2080=${(n / 1e6).toFixed(0)} GPa, b=${l}, R\u2080=${a} \u2014 ${s} ciclos, amp=${(p * 100).toFixed(1)}%`;
    }
    function Wa() {
      var _a2, _b, _c, _d;
      const t = document.querySelector(".rpt-overlay");
      if (t) {
        t.remove();
        return;
      }
      const o = e.nodes.val, n = e.elements.val, l = ((_a2 = e.elementInputs) == null ? void 0 : _a2.val) || {}, a = ((_b = e.nodeInputs) == null ? void 0 : _b.val) || {}, p = (_c = e.deformOutputs) == null ? void 0 : _c.val;
      if ((_d = e.analyzeOutputs) == null ? void 0 : _d.val, !o.length || !n.length) {
        alert("No hay modelo cargado");
        return;
      }
      const s = bl({
        nodes: o,
        elements: n,
        nodeInputs: a,
        elementInputs: l,
        deformOutputs: p
      });
      document.body.appendChild(s);
    }
    let Bo = null;
    function Ga(t) {
      Bo && Bo.remove();
      const o = document.createElement("div");
      o.style.cssText = "position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background:#1a1a2e;color:#eee;border:2px solid #00ccff;border-radius:8px;padding:16px;z-index:10001;width:320px;font-family:monospace;font-size:12px;box-shadow:0 4px 20px rgba(0,0,0,0.5);";
      const n = mn(), l = bn(), a = Object.entries(n).map(([c, d]) => `<option value="${d}">${c}</option>`).join(""), p = Object.entries(l).map(([c, d]) => `<option value="${d}">${c}</option>`).join("");
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
    `, document.body.appendChild(o), Bo = o;
      const s = o.querySelector("#asgn-type"), r = o.querySelector("#asgn-params");
      function f() {
        const c = s.value;
        let d = "";
        c === "rect" ? d = `<div style="display:flex;gap:6px;"><label>b(m):<input id="ap-b" type="number" value="0.30" step="0.05" min="0.1" max="2" style="width:70px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label>
                <label>h(m):<input id="ap-h" type="number" value="0.50" step="0.05" min="0.1" max="2" style="width:70px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label></div>` : c === "circ" ? d = '<label>d(m):<input id="ap-d" type="number" value="0.40" step="0.05" min="0.1" max="2" style="width:70px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label>' : c === "W" ? d = `<select id="ap-profile" style="background:#333;color:#fff;border:1px solid #555;padding:3px;width:100%;">${a}</select>` : c === "HSS" ? d = `<select id="ap-profile" style="background:#333;color:#fff;border:1px solid #555;padding:3px;width:100%;">${p}</select>` : c === "I-param" ? d = `<div style="display:grid;grid-template-columns:1fr 1fr;gap:4px;">
          <label>bf(m):<input id="ap-bf" type="number" value="0.20" step="0.01" style="width:65px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label>
          <label>h(m):<input id="ap-hf" type="number" value="0.40" step="0.01" style="width:65px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label>
          <label>tf(m):<input id="ap-tf" type="number" value="0.015" step="0.001" style="width:65px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label>
          <label>tw(m):<input id="ap-tw" type="number" value="0.010" step="0.001" style="width:65px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label>
        </div>` : c === "tubular" && (d = `<div style="display:flex;gap:6px;">
          <label>b(m):<input id="ap-bc" type="number" value="0.20" step="0.01" style="width:60px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label>
          <label>h(m):<input id="ap-hc" type="number" value="0.30" step="0.01" style="width:60px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label>
          <label>t(m):<input id="ap-t" type="number" value="0.008" step="0.001" style="width:60px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label>
        </div>`), r.innerHTML = d;
      }
      s.addEventListener("change", f), f(), o.querySelector("#asgn-close").addEventListener("click", () => {
        o.remove(), Bo = null;
      }), o.querySelector("#asgn-apply").addEventListener("click", () => {
        var _a2, _b, _c, _d, _e2, _f, _g, _h;
        const c = s.value, d = {
          secType: c
        };
        c === "rect" ? (d.b = parseFloat(o.querySelector("#ap-b").value), d.h = parseFloat(o.querySelector("#ap-h").value), d.material = 0) : c === "circ" ? (d.b = parseFloat(o.querySelector("#ap-d").value), d.material = 0) : c === "W" || c === "HSS" ? (d.profileIdx = parseInt(o.querySelector("#ap-profile").value), d.material = 1) : c === "I-param" ? (d.bf = parseFloat(o.querySelector("#ap-bf").value), d.hf = parseFloat(o.querySelector("#ap-hf").value), d.tf = parseFloat(o.querySelector("#ap-tf").value), d.tw = parseFloat(o.querySelector("#ap-tw").value), d.material = 1) : c === "tubular" && (d.bc = parseFloat(o.querySelector("#ap-bc").value), d.hc = parseFloat(o.querySelector("#ap-hc").value), d.t = parseFloat(o.querySelector("#ap-t").value), d.material = 1);
        const m = new Array(12).fill(false), E = new Array(12).fill(0);
        o.querySelectorAll("input[data-asgn-rel]").forEach((w) => {
          m[parseInt(w.dataset.asgnRel)] = w.checked;
        }), o.querySelectorAll("input[data-asgn-spr]").forEach((w) => {
          const v = parseFloat(w.value);
          v > 0 && (E[parseInt(w.dataset.asgnSpr)] = v);
        }), d.releases12 = m, d.springs12 = E, d.releaseRotStart = m[4] || m[5], d.releaseRotEnd = m[10] || m[11], d.releaseAxial = m[0], d.releaseTorsion = m[3], d.modI = parseFloat((_a2 = o.querySelector("#asgn-mod-i")) == null ? void 0 : _a2.value) || 1, d.modA = parseFloat((_b = o.querySelector("#asgn-mod-a")) == null ? void 0 : _b.value) || 1, d.modJ = parseFloat((_c = o.querySelector("#asgn-mod-j")) == null ? void 0 : _c.value) || 1, d.modAs2 = parseFloat((_d = o.querySelector("#asgn-mod-as2")) == null ? void 0 : _d.value) ?? 1, d.modAs3 = parseFloat((_e2 = o.querySelector("#asgn-mod-as3")) == null ? void 0 : _e2.value) ?? 1, d.modI3 = parseFloat((_f = o.querySelector("#asgn-mod-i3")) == null ? void 0 : _f.value) || 1, d.modMass = parseFloat((_g = o.querySelector("#asgn-mod-mass")) == null ? void 0 : _g.value) || 1, d.modWeight = parseFloat((_h = o.querySelector("#asgn-mod-weight")) == null ? void 0 : _h.value) || 1, t.forEach((w) => ye.set(w, {
          ...d
        })), o.remove(), Bo = null, xo(), e.elementInputs.val = {
          ...e.elementInputs.val
        };
      }), o.querySelector("#asgn-remove").addEventListener("click", () => {
        t.forEach((c) => ye.delete(c)), o.remove(), Bo = null, xo(), e.elementInputs.val = {
          ...e.elementInputs.val
        };
      });
    }
    let Do = null;
    function Ya(t) {
      var _a2, _b, _c;
      Do && Do.remove();
      const o = e.nodes.val, n = e.elements.val[t];
      if (!n || n.length !== 2) return;
      const l = o[n[0]], a = o[n[1]], p = Math.abs(a[0] - l[0]), s = Math.abs(a[1] - l[1]), r = Math.abs(a[2] - l[2]), f = s > p && s > r, c = Math.sqrt(p * p + s * s + r * r), d = $e.get(t) ?? 0, m = (_c = (_b = (_a2 = e.elementInputs) == null ? void 0 : _a2.val) == null ? void 0 : _b.sectionShapes) == null ? void 0 : _c.get(t), E = (m == null ? void 0 : m.name) || (m ? `${m.type} ${((m.b ?? 0) * 100).toFixed(0)}x${((m.h ?? 0) * 100).toFixed(0)}` : "\u2014"), w = document.createElement("div");
      w.style.cssText = "position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background:#1a1a2e;color:#eee;border:2px solid #ff9900;border-radius:8px;padding:16px;z-index:10000;min-width:280px;font-family:monospace;font-size:13px;box-shadow:0 4px 20px rgba(0,0,0,0.5);", w.innerHTML = `
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
        <b style="color:#ff9900;">Elemento ${t}</b>
        <button id="ep-close" style="background:none;border:none;color:#888;cursor:pointer;font-size:18px;">\u2715</button>
      </div>
      <div style="margin-bottom:8px;">
        <span style="color:#888;">Tipo:</span> ${f ? "Columna" : "Viga"} &nbsp;
        <span style="color:#888;">Piso:</span> ${d + 1} &nbsp;
        <span style="color:#888;">L:</span> ${c.toFixed(3)} m
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
    `, document.body.appendChild(w), Do = w, w.querySelector("#ep-close").addEventListener("click", () => {
        w.remove(), Do = null, zo();
      }), w.querySelector("#ep-delete").addEventListener("click", () => {
        V.add(t), w.remove(), Do = null, zo(), Pe();
      }), w.querySelector("#ep-inspect").addEventListener("click", () => {
        w.remove(), Do = null, Ns(t);
      });
    }
    setTimeout(() => {
      const t = document.getElementById("viewer");
      if (!t) return;
      const o = t.querySelector("canvas");
      if (!o) return;
      let n = null, l = null;
      const a = 5;
      function p(f) {
        const c = et();
        if (!c) return null;
        const d = c.controls.object, m = new Oe(f[0], f[1], f[2]);
        m.project(d);
        const E = o.getBoundingClientRect();
        return {
          x: (m.x + 1) / 2 * E.width,
          y: (-m.y + 1) / 2 * E.height
        };
      }
      function s(f, c, d, m, E) {
        const w = Math.min(f, d), v = Math.max(f, d), u = Math.min(c, m), h = Math.max(c, m), I = e.nodes.val, z = e.elements.val, T = [];
        for (let B = 0; B < z.length; B++) {
          const D = z[B], x = D.map((i) => p(I[i])).filter(Boolean);
          if (x.length !== 0) if (E) x.every(($) => $.x >= w && $.x <= v && $.y >= u && $.y <= h) && T.push(B);
          else {
            if (x.some(($) => $.x >= w && $.x <= v && $.y >= u && $.y <= h)) {
              T.push(B);
              continue;
            }
            if (D.length === 2) {
              const $ = x[0], A = x[1];
              r($.x, $.y, A.x, A.y, w, u, v, h) && T.push(B);
            }
          }
        }
        return T;
      }
      function r(f, c, d, m, E, w, v, u) {
        const h = (z, T) => z >= E && z <= v && T >= w && T <= u;
        if (h(f, c) || h(d, m)) return true;
        const I = (z, T, B, D, x, i, $, A) => {
          const F = (B - z) * (A - i) - (D - T) * ($ - x);
          if (Math.abs(F) < 1e-10) return false;
          const G = ((x - z) * (A - i) - (i - T) * ($ - x)) / F, g = ((x - z) * (D - T) - (i - T) * (B - z)) / F;
          return G >= 0 && G <= 1 && g >= 0 && g <= 1;
        };
        return I(f, c, d, m, E, w, v, w) || I(f, c, d, m, v, w, v, u) || I(f, c, d, m, E, u, v, u) || I(f, c, d, m, E, w, E, u);
      }
      o.addEventListener("mousedown", (f) => {
        Yt && (n = {
          x: f.offsetX,
          y: f.offsetY
        });
      }), o.addEventListener("mousemove", (f) => {
        if (po) {
          const d = et();
          if (!d) return;
          const m = Cs(f.clientX, f.clientY, d.camera, d.rendererElm);
          if (wt.track && m.snapType === "node" && m.nodeIdx !== null && m.nodeIdx !== To && za(m.nodeIdx), wt.track && To !== null && m.worldPos && m.snapType !== "node") {
            const E = Aa(m.worldPos, To);
            E && (m.worldPos = E, m.snapType = "grid");
          }
          if (To !== null && m.worldPos) {
            const E = e.nodes.val[To];
            E && Ls(f.clientX, f.clientY, new Oe(...E), m.worldPos);
          } else if (vt !== null && m.worldPos) {
            const E = e.nodes.val[vt];
            E && Ls(f.clientX, f.clientY, new Oe(...E), m.worldPos);
          } else Qt && (Qt.remove(), Qt = null);
          m.nodeIdx, Fs(m), o.style.cursor = m.snapType !== "free" ? "pointer" : "crosshair";
          return;
        }
        if (!oo && !Yt) return;
        if (Yt && n) {
          const d = f.offsetX - n.x, m = f.offsetY - n.y;
          if (Math.abs(d) > a || Math.abs(m) > a) {
            l || (l = document.createElement("div"), l.style.cssText = "position:absolute;pointer-events:none;z-index:9999;", o.parentElement.style.position = "relative", o.parentElement.appendChild(l));
            const E = d > 0, w = Math.min(n.x, f.offsetX), v = Math.min(n.y, f.offsetY), u = Math.abs(d), h = Math.abs(m);
            l.style.left = w + "px", l.style.top = v + "px", l.style.width = u + "px", l.style.height = h + "px", l.style.border = E ? "2px solid #3399ff" : "2px dashed #33ff33", l.style.background = E ? "rgba(51,153,255,0.1)" : "rgba(51,255,51,0.1)", o.style.cursor = "crosshair";
            return;
          }
        }
        const c = Wn(f);
        if (c >= 0) Rs(c), o.style.cursor = "pointer";
        else {
          if (Jt) {
            const d = et();
            d == null ? void 0 : d.scene.remove(Jt), Jt = null, d == null ? void 0 : d.render();
          }
          o.style.cursor = Yt ? "crosshair" : "";
        }
      }), o.addEventListener("mouseup", (f) => {
        if (Yt && n) {
          const c = f.offsetX - n.x, d = f.offsetY - n.y;
          if (Math.abs(c) > a || Math.abs(d) > a) {
            const m = c > 0, E = s(n.x, n.y, f.offsetX, f.offsetY, m);
            f.ctrlKey || f.metaKey || (gt.clear(), Mo()), E.forEach((v) => {
              gt.has(v) || (gt.add(v), Dn(v));
            }), wo();
          }
          l && (l.remove(), l = null), n = null, o.style.cursor = "crosshair";
          return;
        }
        n = null;
      }), o.addEventListener("click", (f) => {
        if (po) {
          const c = et();
          if (!c) return;
          const d = Cs(f.clientX, f.clientY, c.camera, c.rendererElm);
          (d.worldPos || d.nodeIdx !== null) && (Ca(d), Fs(d));
          return;
        }
        if (Yt) {
          if (l) return;
          const c = Wn(f), d = f.ctrlKey || f.metaKey;
          if (c >= 0) {
            if (d) if (gt.has(c)) {
              gt.delete(c);
              const m = $o.findIndex((E) => E.__elemIdx === c);
              if (m >= 0) {
                const E = et();
                E == null ? void 0 : E.scene.remove($o[m]), $o[m].geometry.dispose(), $o[m].material.dispose(), $o.splice(m, 1), E == null ? void 0 : E.render();
              }
            } else gt.add(c), Dn(c);
            else gt.clear(), Mo(), gt.add(c), Dn(c);
            wo();
          } else d || (gt.clear(), Mo(), wo());
          return;
        }
        if (oo) {
          const c = Wn(f);
          c >= 0 && (Rs(c), Ya(c));
        }
      });
    }, 500), Jo.derive(() => {
      var _a2;
      e.nodes.val, e.elements.val, (_a2 = e.nodeInputs) == null ? void 0 : _a2.val, Ze();
    }), Ke.modal = (t) => {
      var _a2, _b;
      if (t === void 0 && (t = !qe), qe = t, (_a2 = Ae.querySelector("#cad3d-modal")) == null ? void 0 : _a2.classList.toggle("active", qe), qe) {
        const n = et();
        ((_b = n == null ? void 0 : n.settings) == null ? void 0 : _b.loads) && (_e = n.settings.loads.rawVal, n.settings.loads.val = false), Ln(), Ae.querySelector("#cad3d-mode-prev").style.display = "", Ae.querySelector("#cad3d-mode-next").style.display = "", Ae.querySelector("#cad3d-mode-label").style.display = "";
      } else Cn(), Ae.querySelector("#cad3d-mode-prev").style.display = "none", Ae.querySelector("#cad3d-mode-next").style.display = "none", Ae.querySelector("#cad3d-mode-label").style.display = "none", k && k !== "placa-q4" && k !== "placa-3q" && Pe(), setTimeout(() => {
        var _a3;
        const n = et();
        ((_a3 = n == null ? void 0 : n.settings) == null ? void 0 : _a3.loads) && _e && (n.settings.loads.val = true);
      }, 600);
      console.log(`Modal analysis: ${qe ? "ON" : "OFF"}`);
    }, Ke.setMode = (t) => {
      var _a2;
      if (!(Ce == null ? void 0 : Ce.modeShapes)) {
        console.error("No modal results");
        return;
      }
      ve = Math.max(0, Math.min(t, Ce.modeShapes.length - 1));
      const o = Ce.modeShapes[ve], { extent: n } = vo();
      let l = 0;
      for (let p = 0; p < ke.length; p++) {
        const s = o[p * 6] || 0, r = o[p * 6 + 1] || 0, f = o[p * 6 + 2] || 0;
        l = Math.max(l, Math.sqrt(s * s + r * r + f * f));
      }
      Ge = l > 1e-12 ? n * 0.05 / l : 1, Qo();
      const a = Ae.querySelector("#cad3d-mode-label");
      a && Ce.frequencies && (a.textContent = `Modo ${ve + 1} \u2014 ${Ce.frequencies[ve].toFixed(2)} Hz`), console.log(`Modo ${ve + 1}: f = ${(_a2 = Ce.frequencies) == null ? void 0 : _a2[ve].toFixed(4)} Hz`);
    }, window.cad = Ke, console.log("FEM Studio CLI ready. Type cad.help() for commands."), setTimeout(() => {
      document.body.appendChild(Ae), document.body.appendChild(it.div);
    }, 0), setTimeout(() => {
      e.nodes.val.length === 0 && (Qe("edificio"), Pe(), ks("edificio"), setTimeout(() => {
        k === "edificio" && so();
      }, 200));
    }, 100);
    const tn = document.createElement("button");
    tn.id = "mobile-menu-btn", tn.innerHTML = "\u2630", tn.addEventListener("click", () => {
      const t = document.getElementById("cad3d-panel");
      t && (t.classList.toggle("mobile-open"), tn.innerHTML = t.classList.contains("mobile-open") ? "\u2715" : "\u2630");
    }), document.body.appendChild(tn);
    const uo = document.createElement("button");
    uo.id = "fullscreen-btn", uo.innerHTML = "\u26F6", uo.title = "Pantalla completa", uo.style.cssText = `
    position: fixed; bottom: 20px; right: 78px; z-index: 9999999;
    width: 48px; height: 48px; border-radius: 50%;
    background: linear-gradient(135deg, #333, #555);
    color: white; border: 3px solid rgba(255,255,255,0.2);
    font-size: 22px; cursor: pointer;
    box-shadow: 0 4px 15px rgba(0,0,0,0.4);
    transition: transform 0.2s, box-shadow 0.2s;
    display: flex; align-items: center; justify-content: center;
  `, uo.addEventListener("mouseenter", () => {
      uo.style.transform = "scale(1.15)";
    }), uo.addEventListener("mouseleave", () => {
      uo.style.transform = "scale(1)";
    }), uo.addEventListener("click", () => {
      document.fullscreenElement ? document.exitFullscreen().catch(() => {
      }) : document.documentElement.requestFullscreen().catch(() => {
      });
    }), document.body.appendChild(uo), document.body.appendChild(Il());
    const Js = document.createElement("span");
    return Js.style.display = "none", Js;
  };
});
export {
  __tla,
  ia as a,
  ml as c,
  or as g
};
