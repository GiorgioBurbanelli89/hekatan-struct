const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/calcPanel-Cyw7vzQ9.js","assets/getMesh-DMDY1xW7.js","assets/pureFunctionsAny.generated-JAcEVsJ7.js","assets/analyze-C33Jzs7t.js","assets/didacticCpp-CaRzrnvk.js","assets/cyclicPushoverCpp-BipHDx7d.js"])))=>i.map(i=>d[i]);
import { v as Jo, P as on, g as Ya, a as Ja, o as Va } from "./theme-CzzIlc4y.js";
import { G as sn, b as Ua, M as Ks, D as Zs, B as to, c as xn, d as Xa, C as Ka, e as ra, V as Ne, P as Eo, R as Qs, f as ea, g as jo, h as Wo, i as Za, S as Qa, j as el, F as zo, a as Go, L as Lo, k as tl, l as ol, A as dn, T as Vn, m as pn, n as fn, o as nl, p as sl } from "./Text-CBH-tcJP.js";
import { g as vn, b as yn, a as Yo } from "./analyze-C33Jzs7t.js";
import { d as Nt, p as Un, m as al, s as ll, __tla as __tla_0 } from "./didacticCpp-CaRzrnvk.js";
import { g as ho, __tla as __tla_1 } from "./getMesh-DMDY1xW7.js";
import { n as Ro, s as go, m as no, t as os } from "./pureFunctionsAny.generated-JAcEVsJ7.js";
let la, fl, er;
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
  const rl = "modulepreload", il = function(e) {
    return "/awatif-workspace/" + e;
  }, ta = {}, oa = function(b, F, $) {
    let Y = Promise.resolve();
    if (F && F.length > 0) {
      document.getElementsByTagName("link");
      const V = document.querySelector("meta[property=csp-nonce]"), j = (V == null ? void 0 : V.nonce) || (V == null ? void 0 : V.getAttribute("nonce"));
      Y = Promise.allSettled(F.map((N) => {
        if (N = il(N), N in ta) return;
        ta[N] = true;
        const G = N.endsWith(".css"), ye = G ? '[rel="stylesheet"]' : "";
        if (document.querySelector(`link[href="${N}"]${ye}`)) return;
        const k = document.createElement("link");
        if (k.rel = G ? "stylesheet" : rl, G || (k.as = "script"), k.crossOrigin = "", k.href = N, j && k.setAttribute("nonce", j), document.head.appendChild(k), G) return new Promise((ne, ve) => {
          k.addEventListener("load", ne), k.addEventListener("error", () => ve(new Error(`Unable to preload CSS for ${N}`)));
        });
      }));
    }
    function D(V) {
      const j = new Event("vite:preloadError", {
        cancelable: true
      });
      if (j.payload = V, window.dispatchEvent(j), !j.defaultPrevented) throw V;
    }
    return Y.then((V) => {
      for (const j of V || []) j.status === "rejected" && D(j.reason);
      return b().catch(D);
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
  function cl(e, b) {
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
    const F = ts.find((G) => G.id === e), $ = Vo.find((G) => G.id === b), Y = F.toKN, D = $.toM, V = (G, ye, k) => k / (Math.pow(Y, G) * Math.pow(D, ye));
    let j, N;
    switch (e) {
      case "kN":
        j = 10, N = [
          -100,
          100,
          1
        ];
        break;
      case "tonf":
        j = 1, N = [
          -20,
          20,
          0.5
        ];
        break;
      case "kgf":
        j = 1e3, N = [
          -1e4,
          1e4,
          100
        ];
        break;
      case "kip":
        j = 10, N = [
          -200,
          200,
          5
        ];
        break;
      case "lb":
        j = 5e3, N = [
          -5e4,
          5e4,
          500
        ];
        break;
      case "N":
        j = 1e4, N = [
          -1e5,
          1e5,
          1e3
        ];
        break;
    }
    return {
      id: `${e}-${b}`,
      label: `${F.label}, ${$.label}`,
      force: F.label,
      length: $.label,
      stress: cl(e, b),
      moment: `${F.label}\xB7${$.label}`,
      E: V(1, -2, Co.E),
      G: V(1, -2, Co.G),
      A: V(0, 2, Co.A),
      Iz: V(0, 4, Co.Iz),
      Iy: V(0, 4, Co.Iy),
      J: V(0, 4, Co.J),
      rho: V(1, -4, Co.rho),
      spanRange: $.spanRange,
      heightRange: $.heightRange,
      defaultSpan: $.defaultSpan,
      defaultHeight: $.defaultHeight,
      defaultForce: j,
      forceRange: N,
      galponSpan: $.galponSpan,
      galponLength: $.galponLength,
      galponHeight: $.galponHeight,
      galponRise: $.galponRise
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
  function dl(e) {
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
  function pl(e) {
    const b = e.force, [F, $, Y] = e.forceRange;
    return {
      truss: [
        {
          key: "CM",
          val: -e.defaultForce,
          min: F,
          max: 0,
          step: Y,
          label: `CM (${b})`
        },
        {
          key: "CV",
          val: 0,
          min: F,
          max: 0,
          step: Y,
          label: `CV (${b})`
        }
      ],
      beams: [
        {
          key: "CM",
          val: 0,
          min: F,
          max: 0,
          step: Y,
          label: `CM (${b})`
        },
        {
          key: "CV",
          val: 0,
          min: F,
          max: 0,
          step: Y,
          label: `CV (${b})`
        },
        {
          key: "Ex",
          val: e.defaultForce,
          min: F,
          max: $,
          step: Y,
          label: `Ex sismo (${b})`
        }
      ],
      "3d": [
        {
          key: "CM",
          val: 0,
          min: F,
          max: 0,
          step: Y,
          label: `CM (${b})`
        },
        {
          key: "CV",
          val: 0,
          min: F,
          max: 0,
          step: Y,
          label: `CV (${b})`
        },
        {
          key: "Ex",
          val: e.defaultForce * 3,
          min: F,
          max: $,
          step: Y,
          label: `Ex sismo (${b})`
        }
      ],
      frame: [
        {
          key: "CM",
          val: -e.defaultForce,
          min: F,
          max: 0,
          step: Y,
          label: `CM (${b})`
        },
        {
          key: "CV",
          val: 0,
          min: F,
          max: 0,
          step: Y,
          label: `CV (${b})`
        },
        {
          key: "Ex",
          val: 0,
          min: F,
          max: $,
          step: Y,
          label: `Ex sismo (${b})`
        }
      ],
      edificio: [
        {
          key: "CM",
          val: -e.defaultForce,
          min: F,
          max: 0,
          step: Y,
          label: `CM (${b})`
        },
        {
          key: "CV",
          val: 0,
          min: F,
          max: 0,
          step: Y,
          label: `CV (${b})`
        },
        {
          key: "Ex",
          val: 0,
          min: F,
          max: $,
          step: Y,
          label: `Ex sismo (${b})`
        },
        {
          key: "Ey",
          val: 0,
          min: F,
          max: $,
          step: Y,
          label: `Ey sismo (${b})`
        }
      ],
      galpon: [
        {
          key: "CM",
          val: -e.defaultForce,
          min: F,
          max: 0,
          step: Y,
          label: `CM (${b})`
        },
        {
          key: "CV",
          val: 0,
          min: F,
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
          min: F,
          max: 0,
          step: Y,
          label: `CM (${b})`
        }
      ],
      "placa-q4": [
        {
          key: "CM",
          val: 0,
          min: F,
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
  fl = function() {
    const e = document.createElement("div");
    e.id = "modal-results", e.style.cssText = `
    position: fixed; bottom: 10px; left: 10px; z-index: 9999;
    background: rgba(0,0,0,0.92); color: #0f0; font-family: monospace;
    font-size: 12px; border-radius: 6px;
    max-width: 720px; overflow-x: auto; pointer-events: auto;
    border: 1px solid #0f03;
  `;
    let b = false;
    function F($, Y) {
      var _a, _b;
      if (!$.frequencies || $.frequencies.length === 0) {
        e.innerHTML = "<b style='padding:12px;display:block'>Modal: no results</b>";
        return;
      }
      const D = [
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
  <b style="color:#ff0">\u26A1 MODAL ANALYSIS \u2014 ${Y.title}</b>
  <div style="display:flex; gap:4px; margin-left:12px;">
    <button id="modal-copy" style="padding:2px 8px; font-size:10px; cursor:pointer;
      background:#2d6a4f; color:#fff; border:1px solid #40916c; border-radius:3px;" title="Copiar tabla">\u{1F4CB}</button>
    <button id="modal-minimize" style="padding:2px 8px; font-size:10px; cursor:pointer;
      background:#555; color:#fff; border:1px solid #777; border-radius:3px;" title="Minimizar">\u25AC</button>
  </div>
</div>`;
      if (j += '<div id="modal-body" style="padding:0 12px 10px 12px;">', Y.properties) for (const N of Y.properties) j += `<span style="color:#888">${N}</span>
`;
      j += `<table style="border-collapse:collapse; color:#0f0; font-size:11px; margin-top:4px">
<tr style="color:#ff0; border-bottom:1px solid #ff03">
  <th style="padding:2px 6px">Mode</th>
  <th style="padding:2px 6px">Freq (Hz)</th>
  <th style="padding:2px 6px">Period (s)</th>
  <th style="padding:2px 6px">\u03C9 (rad/s)</th>`;
      for (const N of D) j += `<th style="padding:2px 5px">${N}</th>`;
      if (j += `<th style="padding:2px 5px; color:#0ff">\u03A3Ux</th>
  <th style="padding:2px 5px; color:#0ff">\u03A3Uy</th>
  <th style="padding:2px 5px; color:#0ff">\u03A3Rz</th></tr>`, $.frequencies.forEach((N, G) => {
        var _a2;
        const ye = N > 0 ? 1 / N : 0, k = N * 2 * Math.PI, ne = ((_a2 = $.massParticipation) == null ? void 0 : _a2[G]) || [
          0,
          0,
          0,
          0,
          0,
          0
        ];
        for (let ve = 0; ve < 6; ve++) V[ve] += ne[ve];
        j += `<tr style="border-bottom:1px solid #fff1">
  <td style="padding:2px 6px; text-align:center">${G + 1}</td>
  <td style="padding:2px 6px; text-align:right">${N.toFixed(4)}</td>
  <td style="padding:2px 6px; text-align:right">${ye.toFixed(4)}</td>
  <td style="padding:2px 6px; text-align:right">${k.toFixed(2)}</td>`;
        for (let ve = 0; ve < 6; ve++) {
          const me = (ne[ve] * 100).toFixed(1), ie = ne[ve] > 0.5 ? "#f00" : ne[ve] > 0.1 ? "#ff0" : "#0f0";
          j += `<td style="padding:2px 5px; text-align:right; color:${ie}">${me}%</td>`;
        }
        j += `<td style="padding:2px 5px; text-align:right; color:#0ff">${(V[0] * 100).toFixed(1)}%</td>
  <td style="padding:2px 5px; text-align:right; color:#0ff">${(V[1] * 100).toFixed(1)}%</td>
  <td style="padding:2px 5px; text-align:right; color:#0ff">${(V[5] * 100).toFixed(1)}%</td></tr>`;
      }), j += "</table></div>", e.innerHTML = j, b) {
        const N = e.querySelector("#modal-body"), G = e.querySelector("#modal-minimize");
        N && (N.style.display = "none"), G && (G.textContent = "\u25A2", G.title = "Restaurar");
      }
      (_a = e.querySelector("#modal-minimize")) == null ? void 0 : _a.addEventListener("click", () => {
        b = !b;
        const N = e.querySelector("#modal-body"), G = e.querySelector("#modal-minimize");
        b ? (N.style.display = "none", G.textContent = "\u25A2", G.title = "Restaurar") : (N.style.display = "block", G.textContent = "\u25AC", G.title = "Minimizar");
      }), (_b = e.querySelector("#modal-copy")) == null ? void 0 : _b.addEventListener("click", () => {
        const N = [];
        N.push(`Modal Analysis \u2014 ${Y.title}`);
        const G = `Mode  Freq(Hz)  Period(s)  \u03C9(rad/s)  ${D.join("     ")}  \u03A3Ux    \u03A3Uy    \u03A3Rz`;
        N.push(G), N.push("-".repeat(G.length));
        const ye = [
          0,
          0,
          0,
          0,
          0,
          0
        ];
        $.frequencies.forEach((ne, ve) => {
          var _a2;
          const me = ne > 0 ? 1 / ne : 0, ie = ne * 2 * Math.PI, te = ((_a2 = $.massParticipation) == null ? void 0 : _a2[ve]) || [
            0,
            0,
            0,
            0,
            0,
            0
          ];
          for (let _ = 0; _ < 6; _++) ye[_] += te[_];
          const O = te.map((_) => ((_ * 100).toFixed(1) + "%").padStart(6)).join(" ");
          N.push(`${String(ve + 1).padStart(4)}  ${ne.toFixed(4).padStart(9)}  ${me.toFixed(4).padStart(9)}  ${ie.toFixed(2).padStart(9)}  ${O}  ${(ye[0] * 100).toFixed(1).padStart(5)}%  ${(ye[1] * 100).toFixed(1).padStart(5)}%  ${(ye[5] * 100).toFixed(1).padStart(5)}%`);
        }), navigator.clipboard.writeText(N.join(`
`));
        const k = e.querySelector("#modal-copy");
        k.textContent = "\u2713", setTimeout(() => k.textContent = "\u{1F4CB}", 1500);
      });
    }
    return {
      div: e,
      render: F
    };
  };
  const Fe = 64516e-8, P = 416231e-12, ee = 0.0254, Io = [
    {
      name: "W6x9",
      type: "W",
      A: 2.68 * Fe,
      Iz: 16.4 * P,
      Iy: 2.2 * P,
      J: 0.0405 * P,
      d: 5.9 * ee,
      bf: 3.94 * ee
    },
    {
      name: "W6x15",
      type: "W",
      A: 4.43 * Fe,
      Iz: 29.1 * P,
      Iy: 9.32 * P,
      J: 0.103 * P,
      d: 5.99 * ee,
      bf: 5.99 * ee
    },
    {
      name: "W6x20",
      type: "W",
      A: 5.87 * Fe,
      Iz: 41.4 * P,
      Iy: 13.3 * P,
      J: 0.204 * P,
      d: 6.2 * ee,
      bf: 6.02 * ee
    },
    {
      name: "W8x10",
      type: "W",
      A: 2.96 * Fe,
      Iz: 30.8 * P,
      Iy: 2.09 * P,
      J: 0.0426 * P,
      d: 7.89 * ee,
      bf: 3.94 * ee
    },
    {
      name: "W8x18",
      type: "W",
      A: 5.26 * Fe,
      Iz: 61.9 * P,
      Iy: 7.97 * P,
      J: 0.172 * P,
      d: 8.14 * ee,
      bf: 5.25 * ee
    },
    {
      name: "W8x24",
      type: "W",
      A: 7.08 * Fe,
      Iz: 82.7 * P,
      Iy: 18.3 * P,
      J: 0.346 * P,
      d: 7.93 * ee,
      bf: 6.5 * ee
    },
    {
      name: "W8x31",
      type: "W",
      A: 9.13 * Fe,
      Iz: 110 * P,
      Iy: 37.1 * P,
      J: 0.536 * P,
      d: 8 * ee,
      bf: 7.995 * ee
    },
    {
      name: "W8x40",
      type: "W",
      A: 11.7 * Fe,
      Iz: 146 * P,
      Iy: 49.1 * P,
      J: 0.871 * P,
      d: 8.25 * ee,
      bf: 8.07 * ee
    },
    {
      name: "W8x48",
      type: "W",
      A: 14.1 * Fe,
      Iz: 184 * P,
      Iy: 60.9 * P,
      J: 1.45 * P,
      d: 8.5 * ee,
      bf: 8.11 * ee
    },
    {
      name: "W8x67",
      type: "W",
      A: 19.7 * Fe,
      Iz: 272 * P,
      Iy: 88.6 * P,
      J: 3.54 * P,
      d: 9 * ee,
      bf: 8.28 * ee
    },
    {
      name: "W10x12",
      type: "W",
      A: 3.54 * Fe,
      Iz: 53.8 * P,
      Iy: 2.18 * P,
      J: 0.0547 * P,
      d: 9.87 * ee,
      bf: 3.96 * ee
    },
    {
      name: "W10x22",
      type: "W",
      A: 6.49 * Fe,
      Iz: 118 * P,
      Iy: 11.4 * P,
      J: 0.239 * P,
      d: 10.17 * ee,
      bf: 5.75 * ee
    },
    {
      name: "W10x33",
      type: "W",
      A: 9.71 * Fe,
      Iz: 171 * P,
      Iy: 36.6 * P,
      J: 0.583 * P,
      d: 9.73 * ee,
      bf: 7.96 * ee
    },
    {
      name: "W10x49",
      type: "W",
      A: 14.4 * Fe,
      Iz: 272 * P,
      Iy: 93.4 * P,
      J: 1.39 * P,
      d: 9.98 * ee,
      bf: 10 * ee
    },
    {
      name: "W10x68",
      type: "W",
      A: 20 * Fe,
      Iz: 394 * P,
      Iy: 134 * P,
      J: 3.56 * P,
      d: 10.4 * ee,
      bf: 10.13 * ee
    },
    {
      name: "W10x100",
      type: "W",
      A: 29.4 * Fe,
      Iz: 623 * P,
      Iy: 207 * P,
      J: 10.9 * P,
      d: 11.1 * ee,
      bf: 10.34 * ee
    },
    {
      name: "W12x14",
      type: "W",
      A: 4.16 * Fe,
      Iz: 88.6 * P,
      Iy: 2.36 * P,
      J: 0.0704 * P,
      d: 11.91 * ee,
      bf: 3.97 * ee
    },
    {
      name: "W12x22",
      type: "W",
      A: 6.48 * Fe,
      Iz: 156 * P,
      Iy: 4.66 * P,
      J: 0.293 * P,
      d: 12.31 * ee,
      bf: 4.03 * ee
    },
    {
      name: "W12x26",
      type: "W",
      A: 7.65 * Fe,
      Iz: 204 * P,
      Iy: 17.3 * P,
      J: 0.3 * P,
      d: 12.22 * ee,
      bf: 6.49 * ee
    },
    {
      name: "W12x40",
      type: "W",
      A: 11.7 * Fe,
      Iz: 310 * P,
      Iy: 44.1 * P,
      J: 0.906 * P,
      d: 11.94 * ee,
      bf: 8.01 * ee
    },
    {
      name: "W12x53",
      type: "W",
      A: 15.6 * Fe,
      Iz: 425 * P,
      Iy: 95.8 * P,
      J: 1.58 * P,
      d: 12.06 * ee,
      bf: 9.99 * ee
    },
    {
      name: "W12x72",
      type: "W",
      A: 21.1 * Fe,
      Iz: 597 * P,
      Iy: 195 * P,
      J: 4.05 * P,
      d: 12.25 * ee,
      bf: 12.04 * ee
    },
    {
      name: "W12x96",
      type: "W",
      A: 28.2 * Fe,
      Iz: 833 * P,
      Iy: 270 * P,
      J: 8.44 * P,
      d: 12.71 * ee,
      bf: 12.16 * ee
    },
    {
      name: "W12x120",
      type: "W",
      A: 35.3 * Fe,
      Iz: 1070 * P,
      Iy: 345 * P,
      J: 16 * P,
      d: 13.12 * ee,
      bf: 12.32 * ee
    },
    {
      name: "W14x22",
      type: "W",
      A: 6.49 * Fe,
      Iz: 199 * P,
      Iy: 7 * P,
      J: 0.208 * P,
      d: 13.74 * ee,
      bf: 5 * ee
    },
    {
      name: "W14x30",
      type: "W",
      A: 8.85 * Fe,
      Iz: 291 * P,
      Iy: 19.6 * P,
      J: 0.38 * P,
      d: 13.84 * ee,
      bf: 6.73 * ee
    },
    {
      name: "W14x38",
      type: "W",
      A: 11.2 * Fe,
      Iz: 385 * P,
      Iy: 26.7 * P,
      J: 0.798 * P,
      d: 14.1 * ee,
      bf: 6.77 * ee
    },
    {
      name: "W14x48",
      type: "W",
      A: 14.1 * Fe,
      Iz: 485 * P,
      Iy: 51.4 * P,
      J: 1.45 * P,
      d: 13.79 * ee,
      bf: 8.03 * ee
    },
    {
      name: "W14x61",
      type: "W",
      A: 17.9 * Fe,
      Iz: 640 * P,
      Iy: 107 * P,
      J: 2.19 * P,
      d: 13.89 * ee,
      bf: 9.99 * ee
    },
    {
      name: "W14x82",
      type: "W",
      A: 24 * Fe,
      Iz: 882 * P,
      Iy: 148 * P,
      J: 5.07 * P,
      d: 14.31 * ee,
      bf: 10.13 * ee
    },
    {
      name: "W14x109",
      type: "W",
      A: 32 * Fe,
      Iz: 1240 * P,
      Iy: 447 * P,
      J: 7.12 * P,
      d: 14.32 * ee,
      bf: 14.61 * ee
    },
    {
      name: "W14x132",
      type: "W",
      A: 38.8 * Fe,
      Iz: 1530 * P,
      Iy: 548 * P,
      J: 12.3 * P,
      d: 14.66 * ee,
      bf: 14.73 * ee
    },
    {
      name: "W14x176",
      type: "W",
      A: 51.8 * Fe,
      Iz: 2140 * P,
      Iy: 838 * P,
      J: 23.7 * P,
      d: 15.22 * ee,
      bf: 15.65 * ee
    },
    {
      name: "W16x26",
      type: "W",
      A: 7.68 * Fe,
      Iz: 301 * P,
      Iy: 9.59 * P,
      J: 0.262 * P,
      d: 15.69 * ee,
      bf: 5.5 * ee
    },
    {
      name: "W16x36",
      type: "W",
      A: 10.6 * Fe,
      Iz: 448 * P,
      Iy: 24.5 * P,
      J: 0.545 * P,
      d: 15.86 * ee,
      bf: 6.99 * ee
    },
    {
      name: "W16x50",
      type: "W",
      A: 14.7 * Fe,
      Iz: 659 * P,
      Iy: 37.2 * P,
      J: 1.52 * P,
      d: 16.26 * ee,
      bf: 7.07 * ee
    },
    {
      name: "W16x67",
      type: "W",
      A: 19.7 * Fe,
      Iz: 954 * P,
      Iy: 119 * P,
      J: 2.39 * P,
      d: 16.33 * ee,
      bf: 10.24 * ee
    },
    {
      name: "W16x89",
      type: "W",
      A: 26.2 * Fe,
      Iz: 1300 * P,
      Iy: 163 * P,
      J: 5.45 * P,
      d: 16.75 * ee,
      bf: 10.37 * ee
    },
    {
      name: "W18x35",
      type: "W",
      A: 10.3 * Fe,
      Iz: 510 * P,
      Iy: 15.3 * P,
      J: 0.506 * P,
      d: 17.7 * ee,
      bf: 6 * ee
    },
    {
      name: "W18x50",
      type: "W",
      A: 14.7 * Fe,
      Iz: 800 * P,
      Iy: 40.1 * P,
      J: 1.24 * P,
      d: 17.99 * ee,
      bf: 7.5 * ee
    },
    {
      name: "W18x71",
      type: "W",
      A: 20.8 * Fe,
      Iz: 1170 * P,
      Iy: 60.3 * P,
      J: 3.49 * P,
      d: 18.47 * ee,
      bf: 7.64 * ee
    },
    {
      name: "W18x97",
      type: "W",
      A: 28.5 * Fe,
      Iz: 1750 * P,
      Iy: 201 * P,
      J: 5.86 * P,
      d: 18.59 * ee,
      bf: 11.15 * ee
    },
    {
      name: "W21x44",
      type: "W",
      A: 13 * Fe,
      Iz: 843 * P,
      Iy: 20.7 * P,
      J: 0.77 * P,
      d: 20.66 * ee,
      bf: 6.5 * ee
    },
    {
      name: "W21x62",
      type: "W",
      A: 18.3 * Fe,
      Iz: 1330 * P,
      Iy: 57.5 * P,
      J: 1.83 * P,
      d: 20.99 * ee,
      bf: 8.24 * ee
    },
    {
      name: "W21x83",
      type: "W",
      A: 24.3 * Fe,
      Iz: 1830 * P,
      Iy: 81.4 * P,
      J: 4.34 * P,
      d: 21.43 * ee,
      bf: 8.36 * ee
    },
    {
      name: "W21x111",
      type: "W",
      A: 32.7 * Fe,
      Iz: 2670 * P,
      Iy: 274 * P,
      J: 6.83 * P,
      d: 21.51 * ee,
      bf: 12.34 * ee
    },
    {
      name: "W24x55",
      type: "W",
      A: 16.2 * Fe,
      Iz: 1350 * P,
      Iy: 29.1 * P,
      J: 1.18 * P,
      d: 23.57 * ee,
      bf: 7.01 * ee
    },
    {
      name: "W24x76",
      type: "W",
      A: 22.4 * Fe,
      Iz: 2100 * P,
      Iy: 82.5 * P,
      J: 2.68 * P,
      d: 23.92 * ee,
      bf: 8.99 * ee
    },
    {
      name: "W24x104",
      type: "W",
      A: 30.6 * Fe,
      Iz: 3100 * P,
      Iy: 259 * P,
      J: 4.72 * P,
      d: 24.06 * ee,
      bf: 12.75 * ee
    },
    {
      name: "W24x131",
      type: "W",
      A: 38.5 * Fe,
      Iz: 4020 * P,
      Iy: 340 * P,
      J: 9.5 * P,
      d: 24.48 * ee,
      bf: 12.86 * ee
    },
    {
      name: "W24x146",
      type: "W",
      A: 43 * Fe,
      Iz: 4580 * P,
      Iy: 391 * P,
      J: 12.6 * P,
      d: 24.74 * ee,
      bf: 12.9 * ee
    },
    {
      name: "W24x176",
      type: "W",
      A: 51.7 * Fe,
      Iz: 5680 * P,
      Iy: 479 * P,
      J: 21.2 * P,
      d: 25.24 * ee,
      bf: 12.9 * ee
    },
    {
      name: "W27x84",
      type: "W",
      A: 24.8 * Fe,
      Iz: 2850 * P,
      Iy: 106 * P,
      J: 2.81 * P,
      d: 26.71 * ee,
      bf: 9.96 * ee
    },
    {
      name: "W27x114",
      type: "W",
      A: 33.5 * Fe,
      Iz: 4090 * P,
      Iy: 159 * P,
      J: 6.77 * P,
      d: 27.29 * ee,
      bf: 10.07 * ee
    },
    {
      name: "W30x90",
      type: "W",
      A: 26.4 * Fe,
      Iz: 3610 * P,
      Iy: 115 * P,
      J: 3.06 * P,
      d: 29.53 * ee,
      bf: 10.4 * ee
    },
    {
      name: "W30x116",
      type: "W",
      A: 34.2 * Fe,
      Iz: 4930 * P,
      Iy: 164 * P,
      J: 6.43 * P,
      d: 30.01 * ee,
      bf: 10.5 * ee
    },
    {
      name: "W33x118",
      type: "W",
      A: 34.7 * Fe,
      Iz: 5900 * P,
      Iy: 187 * P,
      J: 5.3 * P,
      d: 32.86 * ee,
      bf: 11.48 * ee
    },
    {
      name: "W36x135",
      type: "W",
      A: 39.7 * Fe,
      Iz: 7800 * P,
      Iy: 225 * P,
      J: 7 * P,
      d: 35.55 * ee,
      bf: 11.95 * ee
    },
    {
      name: "HSS4x4x1/4",
      type: "HSS",
      A: 3.37 * Fe,
      Iz: 8.22 * P,
      Iy: 8.22 * P,
      J: 13.4 * P,
      d: 4 * ee,
      bf: 4 * ee
    },
    {
      name: "HSS4x4x3/8",
      type: "HSS",
      A: 4.78 * Fe,
      Iz: 10.7 * P,
      Iy: 10.7 * P,
      J: 17.9 * P,
      d: 4 * ee,
      bf: 4 * ee
    },
    {
      name: "HSS4x4x1/2",
      type: "HSS",
      A: 6.02 * Fe,
      Iz: 12.3 * P,
      Iy: 12.3 * P,
      J: 21 * P,
      d: 4 * ee,
      bf: 4 * ee
    },
    {
      name: "HSS6x6x1/4",
      type: "HSS",
      A: 5.24 * Fe,
      Iz: 30.3 * P,
      Iy: 30.3 * P,
      J: 48.3 * P,
      d: 6 * ee,
      bf: 6 * ee
    },
    {
      name: "HSS6x6x3/8",
      type: "HSS",
      A: 7.58 * Fe,
      Iz: 41.1 * P,
      Iy: 41.1 * P,
      J: 66.9 * P,
      d: 6 * ee,
      bf: 6 * ee
    },
    {
      name: "HSS6x6x1/2",
      type: "HSS",
      A: 9.74 * Fe,
      Iz: 49.6 * P,
      Iy: 49.6 * P,
      J: 82.2 * P,
      d: 6 * ee,
      bf: 6 * ee
    },
    {
      name: "HSS8x8x1/4",
      type: "HSS",
      A: 7.1 * Fe,
      Iz: 70.7 * P,
      Iy: 70.7 * P,
      J: 112 * P,
      d: 8 * ee,
      bf: 8 * ee
    },
    {
      name: "HSS8x8x3/8",
      type: "HSS",
      A: 10.4 * Fe,
      Iz: 98 * P,
      Iy: 98 * P,
      J: 158 * P,
      d: 8 * ee,
      bf: 8 * ee
    },
    {
      name: "HSS8x8x1/2",
      type: "HSS",
      A: 13.5 * Fe,
      Iz: 122 * P,
      Iy: 122 * P,
      J: 199 * P,
      d: 8 * ee,
      bf: 8 * ee
    },
    {
      name: "HSS10x10x3/8",
      type: "HSS",
      A: 13.2 * Fe,
      Iz: 202 * P,
      Iy: 202 * P,
      J: 323 * P,
      d: 10 * ee,
      bf: 10 * ee
    },
    {
      name: "HSS10x10x1/2",
      type: "HSS",
      A: 17.2 * Fe,
      Iz: 254 * P,
      Iy: 254 * P,
      J: 412 * P,
      d: 10 * ee,
      bf: 10 * ee
    },
    {
      name: "HSS12x12x3/8",
      type: "HSS",
      A: 16 * Fe,
      Iz: 355 * P,
      Iy: 355 * P,
      J: 564 * P,
      d: 12 * ee,
      bf: 12 * ee
    },
    {
      name: "HSS12x12x1/2",
      type: "HSS",
      A: 21 * Fe,
      Iz: 452 * P,
      Iy: 452 * P,
      J: 724 * P,
      d: 12 * ee,
      bf: 12 * ee
    },
    {
      name: "HSS6x4x1/4",
      type: "HSS",
      A: 4.3 * Fe,
      Iz: 18 * P,
      Iy: 9.58 * P,
      J: 22.6 * P,
      d: 6 * ee,
      bf: 4 * ee
    },
    {
      name: "HSS6x4x3/8",
      type: "HSS",
      A: 6.18 * Fe,
      Iz: 23.8 * P,
      Iy: 12.3 * P,
      J: 30.3 * P,
      d: 6 * ee,
      bf: 4 * ee
    },
    {
      name: "HSS8x4x1/4",
      type: "HSS",
      A: 5.24 * Fe,
      Iz: 33.6 * P,
      Iy: 11.8 * P,
      J: 33 * P,
      d: 8 * ee,
      bf: 4 * ee
    },
    {
      name: "HSS8x4x3/8",
      type: "HSS",
      A: 7.58 * Fe,
      Iz: 45.1 * P,
      Iy: 15 * P,
      J: 44.5 * P,
      d: 8 * ee,
      bf: 4 * ee
    },
    {
      name: "HSS8x6x1/4",
      type: "HSS",
      A: 6.17 * Fe,
      Iz: 46.1 * P,
      Iy: 28.2 * P,
      J: 61.3 * P,
      d: 8 * ee,
      bf: 6 * ee
    },
    {
      name: "HSS8x6x3/8",
      type: "HSS",
      A: 8.97 * Fe,
      Iz: 63 * P,
      Iy: 37.5 * P,
      J: 84.6 * P,
      d: 8 * ee,
      bf: 6 * ee
    },
    {
      name: "HSS10x6x3/8",
      type: "HSS",
      A: 10.4 * Fe,
      Iz: 103 * P,
      Iy: 47.1 * P,
      J: 115 * P,
      d: 10 * ee,
      bf: 6 * ee
    },
    {
      name: "HSS12x8x3/8",
      type: "HSS",
      A: 13.2 * Fe,
      Iz: 196 * P,
      Iy: 102 * P,
      J: 249 * P,
      d: 12 * ee,
      bf: 8 * ee
    }
  ];
  function mn() {
    const e = {};
    return Io.forEach((b, F) => {
      b.type === "W" && (e[b.name] = F);
    }), e;
  }
  function bn() {
    const e = {};
    return Io.forEach((b, F) => {
      b.type === "HSS" && (e[b.name] = F);
    }), e;
  }
  function ul(e) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    const { nodes: b, elements: F, elementInputs: $, nodeInputs: Y, deformOutputs: D } = e, V = b.length * 6, j = F.length, N = F.filter((ie) => ie.length === 2).length, G = F.filter((ie) => ie.length >= 3).length, ye = document.createElement("div");
    ye.className = "rpt-overlay";
    let k = "";
    k += '<button class="rpt-close" id="rpt-close">\u2715 Close</button>', k += "<h1>Finite Element Analysis \u2014 Step-by-Step Report</h1>", k += '<div class="rpt-subtitle">Complete FEM derivation from element formulation to final results</div>', k += '<hr class="rpt-sep"/>', k += "<h2>1. Input Data</h2>", k += '<table class="rpt-info"><tbody>', k += `<tr><td>Number of nodes</td><td class="val">${b.length}</td></tr>`, k += `<tr><td>Number of elements</td><td class="val">${j} (${N} frames, ${G} shells)</td></tr>`, k += '<tr><td>DOFs per node</td><td class="val">6 (u<sub>x</sub>, u<sub>y</sub>, u<sub>z</sub>, \u03B8<sub>x</sub>, \u03B8<sub>y</sub>, \u03B8<sub>z</sub>)</td></tr>', k += `<tr><td>Total DOFs</td><td class="val">${V}</td></tr>`, k += "</tbody></table>", k += "<h3>1.1 Node Coordinates</h3>", k += '<table class="rpt-data"><thead><tr><th>Node</th><th>x</th><th>y</th><th>z</th></tr></thead><tbody>', b.forEach((ie, te) => {
      k += `<tr><td>${te}</td><td>${nt(ie[0])}</td><td>${nt(ie[1])}</td><td>${nt(ie[2])}</td></tr>`;
    }), k += "</tbody></table>", k += "<h3>1.2 Element Connectivity</h3>", k += '<table class="rpt-data"><thead><tr><th>Elem</th><th>Type</th><th>Nodes</th><th>L</th><th>E</th><th>A</th><th>I<sub>z</sub></th><th>I<sub>y</sub></th></tr></thead><tbody>', F.forEach((ie, te) => {
      var _a2, _b2, _c2, _d2;
      const O = ie.length === 2, _ = ie.map((ge) => b[ge]), J = O ? Ro(go(_[1], _[0])) : 0, ce = ((_a2 = $.elasticities) == null ? void 0 : _a2.get(te)) ?? 0, $e = ((_b2 = $.areas) == null ? void 0 : _b2.get(te)) ?? 0, Te = ((_c2 = $.momentsOfInertiaZ) == null ? void 0 : _c2.get(te)) ?? 0, Ve = ((_d2 = $.momentsOfInertiaY) == null ? void 0 : _d2.get(te)) ?? 0;
      k += `<tr><td>${te}</td><td>${O ? "Frame" : "Shell"}</td><td>${ie.join(" \u2192 ")}</td>`, k += `<td>${nt(J)}</td><td>${nt(ce)}</td><td>${nt($e)}</td><td>${nt(Te)}</td><td>${nt(Ve)}</td></tr>`;
    }), k += "</tbody></table>", k += "<h2>2. Element Formulation</h2>", N > 0 && (k += "<h3>2.1 Frame Element (Euler-Bernoulli Beam)</h3>", k += "<p>Each frame element has 2 nodes and 12 DOFs: [u<sub>x</sub>, u<sub>y</sub>, u<sub>z</sub>, \u03B8<sub>x</sub>, \u03B8<sub>y</sub>, \u03B8<sub>z</sub>] per node.</p>", k += "<h4>2.1.1 Shape Functions</h4>", k += "<p><b>Axial</b> (linear interpolation):</p>", k += '<div class="rpt-eq">N\u2081(\u03BE) = 1 \u2212 \u03BE &nbsp;&nbsp;&nbsp; N\u2082(\u03BE) = \u03BE &nbsp;&nbsp;&nbsp; where \u03BE = x/L \u2208 [0, 1]</div>', k += "<p><b>Bending</b> (Hermite cubic polynomials):</p>", k += '<table class="rpt-eq-table"><tbody>', k += '<tr><td class="eq-name">H\u2081(\u03BE)</td><td>= 1 \u2212 3\u03BE\xB2 + 2\u03BE\xB3</td><td class="eq-desc">displacement at node i</td></tr>', k += '<tr><td class="eq-name">H\u2082(\u03BE)</td><td>= L\u03BE(1 \u2212 \u03BE)\xB2</td><td class="eq-desc">rotation at node i</td></tr>', k += '<tr><td class="eq-name">H\u2083(\u03BE)</td><td>= 3\u03BE\xB2 \u2212 2\u03BE\xB3</td><td class="eq-desc">displacement at node j</td></tr>', k += '<tr><td class="eq-name">H\u2084(\u03BE)</td><td>= L\u03BE\xB2(\u03BE \u2212 1)</td><td class="eq-desc">rotation at node j</td></tr>', k += "</tbody></table>", k += bl(), k += "<p><b>Torsion</b> (linear): same as axial.</p>", k += "<h4>2.1.2 Strain-Displacement Matrix B</h4>", k += "<p>The B matrix relates nodal displacements to internal strains:</p>", k += '<div class="rpt-eq">\u03B5<sub>axial</sub> = du/dx = (1/L)\xB7[\u22121, 1]\xB7{u<sub>i</sub>, u<sub>j</sub>}</div>', k += '<div class="rpt-eq">\u03BA<sub>bending</sub> = d\xB2v/dx\xB2 = B<sub>b</sub>\xB7{v<sub>i</sub>, \u03B8<sub>i</sub>, v<sub>j</sub>, \u03B8<sub>j</sub>}</div>', k += '<div class="rpt-eq">B<sub>b</sub>(\u03BE) = (1/L\xB2)\xB7[\u22126+12\u03BE, L(\u22124+6\u03BE), 6\u221212\u03BE, L(\u22122+6\u03BE)]</div>', k += '<div class="rpt-eq">\u03C6\u2032<sub>torsion</sub> = d\u03B8<sub>x</sub>/dx = (1/L)\xB7[\u22121, 1]\xB7{\u03B8<sub>xi</sub>, \u03B8<sub>xj</sub>}</div>', k += "<h4>2.1.3 Constitutive Relations D</h4>", k += '<table class="rpt-eq-table"><tbody>', k += '<tr><td class="eq-name">Axial:</td><td>\u03C3 = E\xB7\u03B5</td><td>\u2192 D<sub>axial</sub> = E\xB7A</td></tr>', k += '<tr><td class="eq-name">Bending Z:</td><td>M<sub>z</sub> = EI<sub>z</sub>\xB7\u03BA</td><td>\u2192 D<sub>bz</sub> = E\xB7I<sub>z</sub></td></tr>', k += '<tr><td class="eq-name">Bending Y:</td><td>M<sub>y</sub> = EI<sub>y</sub>\xB7\u03BA</td><td>\u2192 D<sub>by</sub> = E\xB7I<sub>y</sub></td></tr>', k += '<tr><td class="eq-name">Torsion:</td><td>T = GJ\xB7\u03C6\u2032</td><td>\u2192 D<sub>torsion</sub> = G\xB7J</td></tr>', k += "</tbody></table>", k += "<h4>2.1.4 Local Stiffness Matrix K<sub>local</sub></h4>", k += "<p>Obtained by analytical integration:</p>", k += '<div class="rpt-eq rpt-eq-highlight">K<sub>local</sub> = \u222B\u2080\u1D38 B\u1D40\xB7D\xB7B dx</div>', k += "<p>Result for Euler-Bernoulli beam (12\xD712 symmetric):</p>", k += '<div class="rpt-eq-small">', k += "K[0,0] = EA/L &nbsp;&nbsp; K[1,1] = 12EI<sub>z</sub>/L\xB3 &nbsp;&nbsp; K[2,2] = 12EI<sub>y</sub>/L\xB3 &nbsp;&nbsp; K[3,3] = GJ/L<br/>", k += "K[4,4] = 4EI<sub>y</sub>/L &nbsp;&nbsp; K[5,5] = 4EI<sub>z</sub>/L &nbsp;&nbsp; K[1,5] = 6EI<sub>z</sub>/L\xB2 &nbsp;&nbsp; K[2,4] = \u22126EI<sub>y</sub>/L\xB2", k += "</div>", k += "<h4>2.1.5 Transformation Matrix T</h4>", k += "<p>Direction cosines of element axis:</p>", k += '<div class="rpt-eq">l = (x<sub>j</sub>\u2212x<sub>i</sub>)/L &nbsp;&nbsp; m = (y<sub>j</sub>\u2212y<sub>i</sub>)/L &nbsp;&nbsp; n = (z<sub>j</sub>\u2212z<sub>i</sub>)/L &nbsp;&nbsp; D = \u221A(l\xB2+m\xB2)</div>', k += '<div class="rpt-eq">\u03BB = [l, m, n; \u2212m/D, l/D, 0; \u2212ln/D, \u2212mn/D, D] &nbsp;&nbsp; (3\xD73)</div>', k += '<div class="rpt-eq rpt-eq-highlight">T = I\u2084 \u2297 \u03BB &nbsp;&nbsp; (12\xD712 block-diagonal, Kronecker product)</div>', k += "<p>Special case for vertical elements (n = \xB11): \u03BB uses fixed axes.</p>", k += "<h4>2.1.6 Global Stiffness Matrix</h4>", k += '<div class="rpt-eq rpt-eq-highlight">K<sub>global</sub> = T\u1D40 \xB7 K<sub>local</sub> \xB7 T</div>'), k += "<h2>3. Numerical Results per Element</h2>", k += "<p>For each element, we compute K<sub>local</sub>, T, and K<sub>global</sub> = T\u1D40\xB7K\xB7T with the actual properties:</p>";
    for (let ie = 0; ie < j; ie++) {
      const te = F[ie], O = te.map((at) => b[at]);
      if (!(te.length === 2)) continue;
      const J = Ro(go(O[1], O[0])), ce = ((_a = $.elasticities) == null ? void 0 : _a.get(ie)) ?? 0, $e = ((_b = $.areas) == null ? void 0 : _b.get(ie)) ?? 0, Te = ((_c = $.momentsOfInertiaZ) == null ? void 0 : _c.get(ie)) ?? 0, Ve = ((_d = $.momentsOfInertiaY) == null ? void 0 : _d.get(ie)) ?? 0, ge = ((_e = $.shearModuli) == null ? void 0 : _e.get(ie)) ?? 0, De = ((_f = $.torsionalConstants) == null ? void 0 : _f.get(ie)) ?? 0;
      let He = null, be = null, Se = null;
      try {
        He = vn(O, $, ie), be = yn(O), Se = no(os(be), no(He, be));
      } catch {
        continue;
      }
      const Ae = go(O[1], O[0]), Je = Ae[0] / J, st = Ae[1] / J, Ue = Ae[2] / J;
      k += '<div class="rpt-elem-block">', k += `<h3 class="rpt-elem-title" data-toggle="elem${ie}">\u25B6 Element ${ie} \u2014 Nodes ${te[0]} \u2192 ${te[1]}, L = ${nt(J)}</h3>`, k += `<div id="rpt-elem${ie}" class="rpt-elem-body" style="display:none">`, k += "<h4>Properties (numerical substitution)</h4>", k += '<div class="rpt-eq-small">', k += `E = ${nt(ce)} &nbsp;&nbsp; A = ${nt($e)} &nbsp;&nbsp; I<sub>z</sub> = ${nt(Te)} &nbsp;&nbsp; I<sub>y</sub> = ${nt(Ve)} &nbsp;&nbsp; G = ${nt(ge)} &nbsp;&nbsp; J = ${nt(De)}<br/>`, k += `EA/L = ${nt(ce)}\xB7${nt($e)}/${nt(J)} = <b>${nt(ce * $e / J)}</b><br/>`, k += `12EI<sub>z</sub>/L\xB3 = 12\xB7${nt(ce)}\xB7${nt(Te)}/${nt(J)}\xB3 = <b>${nt(12 * ce * Te / J ** 3)}</b><br/>`, k += `12EI<sub>y</sub>/L\xB3 = 12\xB7${nt(ce)}\xB7${nt(Ve)}/${nt(J)}\xB3 = <b>${nt(12 * ce * Ve / J ** 3)}</b><br/>`, k += `GJ/L = ${nt(ge)}\xB7${nt(De)}/${nt(J)} = <b>${nt(ge * De / J)}</b>`, k += "</div>", k += "<h4>Direction cosines</h4>", k += `<div class="rpt-eq-small">l = ${hn(Je)}, m = ${hn(st)}, n = ${hn(Ue)}, D = ${hn(Math.sqrt(Je ** 2 + st ** 2))}</div>`, k += "<h4>K<sub>local</sub> (12\xD712)</h4>", k += Xn(He, 12), k += "<h4>T \u2014 Transformation (12\xD712)</h4>", k += Xn(be, 12), k += "<h4>K<sub>global</sub> = T\u1D40 \xB7 K<sub>local</sub> \xB7 T</h4>", k += Xn(Se, 12), k += "<h4>Assembly</h4>", k += `<div class="rpt-eq-small">Global DOFs: node ${te[0]} \u2192 [${te[0] * 6}..${te[0] * 6 + 5}], node ${te[1]} \u2192 [${te[1] * 6}..${te[1] * 6 + 5}]</div>`, k += "</div></div>";
    }
    k += "<h2>4. Global Assembly</h2>", k += `<div class="rpt-eq rpt-eq-highlight">K<sub>total</sub> = \u03A3<sub>e=0</sub><sup>${j - 1}</sup> (T<sub>e</sub>\u1D40 \xB7 k<sub>e</sub> \xB7 T<sub>e</sub>)</div>`, k += "<p>Each element contributes its K<sub>global</sub> to the positions determined by its node DOF indices.</p>", k += hl(F, b.length), k += "<h2>5. Boundary Conditions</h2>";
    const ne = [
      "u<sub>x</sub>",
      "u<sub>y</sub>",
      "u<sub>z</sub>",
      "\u03B8<sub>x</sub>",
      "\u03B8<sub>y</sub>",
      "\u03B8<sub>z</sub>"
    ], ve = [];
    if (k += "<h3>5.1 Supports (fixed DOFs)</h3>", Y.supports && Y.supports.size > 0) {
      k += '<table class="rpt-data"><thead><tr><th>Node</th>';
      for (const ie of ne) k += `<th>${ie}</th>`;
      k += "</tr></thead><tbody>", Y.supports.forEach((ie, te) => {
        k += `<tr><td>${te}</td>`, ie.forEach((O, _) => {
          O && ve.push(te * 6 + _), k += `<td class="${O ? "fixed" : ""}">${O ? "Fixed" : "Free"}</td>`;
        }), k += "</tr>";
      }), k += "</tbody></table>";
    }
    if (k += `<div class="rpt-eq-small">Fixed DOFs: [${ve.join(", ")}] \u2192 ${ve.length} constraints<br/>`, k += `Free DOFs: ${V} \u2212 ${ve.length} = <b>${V - ve.length}</b></div>`, k += "<h3>5.2 Applied Loads</h3>", Y.loads && Y.loads.size > 0) {
      k += '<table class="rpt-data"><thead><tr><th>Node</th>';
      const ie = [
        "F<sub>x</sub>",
        "F<sub>y</sub>",
        "F<sub>z</sub>",
        "M<sub>x</sub>",
        "M<sub>y</sub>",
        "M<sub>z</sub>"
      ];
      for (const te of ie) k += `<th>${te}</th>`;
      k += "</tr></thead><tbody>", Y.loads.forEach((te, O) => {
        k += `<tr><td>${O}</td>`, te.forEach((_) => {
          const J = Math.abs(_) > 1e-10;
          k += `<td class="${J ? "nz" : ""}">${J ? nt(_) : "0"}</td>`;
        }), k += "</tr>";
      }), k += "</tbody></table>";
    }
    if (k += "<h2>6. Solution</h2>", k += "<p>After removing fixed DOFs, the reduced system is:</p>", k += '<div class="rpt-eq rpt-eq-highlight">K<sub>free</sub> \xB7 u<sub>free</sub> = F<sub>free</sub></div>', k += "<p>Solved using LU decomposition with partial pivoting (sparse matrix).</p>", k += "<h3>6.1 Nodal Displacements</h3>", D == null ? void 0 : D.deformations) {
      k += '<table class="rpt-data"><thead><tr><th>Node</th>';
      for (const ie of ne) k += `<th>${ie}</th>`;
      k += "</tr></thead><tbody>", D.deformations.forEach((ie, te) => {
        k += `<tr><td>${te}</td>`, ie.forEach((O) => {
          const _ = Math.abs(O) > 1e-10;
          k += `<td class="${_ ? "nz" : ""}">${nt(O, 6)}</td>`;
        }), k += "</tr>";
      }), k += "</tbody></table>";
    }
    if (k += "<h3>6.2 Reactions</h3>", k += '<div class="rpt-eq">R = K<sub>total</sub> \xB7 u (extract at fixed DOFs)</div>', D == null ? void 0 : D.reactions) {
      k += '<table class="rpt-data"><thead><tr><th>Node</th>';
      for (const ie of ne) k += `<th>${ie}</th>`;
      k += "</tr></thead><tbody>", D.reactions.forEach((ie, te) => {
        k += `<tr><td>${te}</td>`, ie.forEach((O) => {
          const _ = Math.abs(O) > 1e-10;
          k += `<td class="${_ ? "nz-react" : ""}">${_ ? nt(O, 4) : "0"}</td>`;
        }), k += "</tr>";
      }), k += "</tbody></table>";
    }
    if (k += "<h2>7. Internal Forces</h2>", k += "<p>For each element, transform global displacements to local and multiply by K<sub>local</sub>:</p>", k += '<div class="rpt-eq">u<sub>local</sub> = T \xB7 u<sub>global</sub></div>', k += '<div class="rpt-eq rpt-eq-highlight">f<sub>local</sub> = K<sub>local</sub> \xB7 u<sub>local</sub></div>', D == null ? void 0 : D.deformations) {
      const ie = [
        "N",
        "V<sub>y</sub>",
        "V<sub>z</sub>",
        "M<sub>x</sub>",
        "M<sub>y</sub>",
        "M<sub>z</sub>"
      ];
      k += '<table class="rpt-data"><thead><tr><th>Elem</th><th>Nodes</th>';
      for (const te of ie) k += `<th>${te}<sub>i</sub></th>`;
      for (const te of ie) k += `<th>${te}<sub>j</sub></th>`;
      k += "</tr></thead><tbody>";
      for (let te = 0; te < j; te++) {
        const O = F[te];
        if (O.length !== 2) continue;
        const _ = O.map((J) => b[J]);
        try {
          const J = vn(_, $, te), ce = yn(_), $e = [];
          for (const ge of O) {
            const De = ((_g = D.deformations) == null ? void 0 : _g.get(ge)) || [
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
          k += `<tr><td>${te}</td><td>${O.join("\u2192")}</td>`;
          for (let ge = 0; ge < 12; ge++) {
            const De = Math.abs(Ve[ge]) > 1e-10;
            k += `<td class="${De ? "nz" : ""}">${nt(Ve[ge], 2)}</td>`;
          }
          k += "</tr>";
        } catch {
        }
      }
      k += "</tbody></table>";
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
    return ye.innerHTML = me + k, (_h = ye.querySelector("#rpt-close")) == null ? void 0 : _h.addEventListener("click", () => ye.remove()), ye.querySelectorAll("[data-toggle]").forEach((ie) => {
      ie.addEventListener("click", () => {
        const te = ie.dataset.toggle, O = ye.querySelector(`#rpt-${te}`);
        if (O) {
          const _ = O.style.display !== "none";
          O.style.display = _ ? "none" : "", ie.textContent = ie.textContent.replace(/^[▼▶]/, _ ? "\u25B6" : "\u25BC");
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
    const F = Math.min(b, 12);
    let $ = '<div style="overflow-x:auto"><table class="rpt-mtx">';
    for (let Y = 0; Y < F; Y++) {
      $ += "<tr>";
      for (let D = 0; D < F; D++) {
        const V = ((_a = e[Y]) == null ? void 0 : _a[D]) ?? 0, j = Math.abs(V) < 1e-10;
        $ += `<td class="${j ? "z" : ""} ${Y === D && !j ? "diag" : ""}">${j ? "0" : ml(V)}</td>`;
      }
      $ += "</tr>";
    }
    return $ += "</table>", b > F && ($ += `<div style="color:#888;font-size:9pt">(showing ${F}\xD7${F} of ${b}\xD7${b})</div>`), $ += "</div>", $;
  }
  function ml(e) {
    return Math.abs(e) >= 1e6 || Math.abs(e) < 0.01 && e !== 0 ? e.toExponential(1) : Math.abs(e) >= 100 ? e.toFixed(0) : e.toFixed(2);
  }
  function bl() {
    const V = [
      {
        name: "H\u2081",
        color: "#c44",
        fn: (N) => 1 - 3 * N ** 2 + 2 * N ** 3
      },
      {
        name: "H\u2082/L",
        color: "#2a9d8f",
        fn: (N) => N * (1 - N) ** 2
      },
      {
        name: "H\u2083",
        color: "#264653",
        fn: (N) => 3 * N ** 2 - 2 * N ** 3
      },
      {
        name: "H\u2084/L",
        color: "#e9c46a",
        fn: (N) => N ** 2 * (N - 1)
      }
    ];
    let j = '<svg viewBox="0 0 600 180" style="width:100%;max-width:600px;border:1px solid #ddd;border-radius:4px;margin:8px 0;background:#fafafa">';
    j += `<line x1="30" y1="${180 / 2}" x2="570" y2="${180 / 2}" stroke="#ccc" stroke-width="1"/>`, j += '<line x1="30" y1="20" x2="30" y2="160" stroke="#ccc" stroke-width="1"/>', j += `<text x="${600 / 2}" y="175" fill="#888" font-size="10" text-anchor="middle" font-family="sans-serif">\u03BE (0 \u2192 1)</text>`, j += `<text x="25" y="${180 / 2 - 60 - 5}" fill="#888" font-size="9" text-anchor="end" font-family="sans-serif">1</text>`, j += `<text x="25" y="${180 / 2 + 4}" fill="#888" font-size="9" text-anchor="end" font-family="sans-serif">0</text>`;
    for (const N of V) {
      let G = "";
      for (let ve = 0; ve <= 80; ve++) {
        const me = ve / 80, ie = 30 + me * 540, te = 180 / 2 - N.fn(me) * 60;
        G += (ve === 0 ? "M" : "L") + `${ie.toFixed(1)},${te.toFixed(1)}`;
      }
      j += `<path d="${G}" fill="none" stroke="${N.color}" stroke-width="2.5"/>`;
      const ye = 0.75, k = 30 + ye * 540 + 8, ne = 180 / 2 - N.fn(ye) * 60 - 6;
      j += `<text x="${k}" y="${ne}" fill="${N.color}" font-size="11" font-weight="bold" font-family="sans-serif">${N.name}</text>`;
    }
    return j += "</svg>", j;
  }
  function hl(e, b) {
    const F = b * 6, $ = Math.min(F, 30);
    let Y = "<p>Assembly contribution map (number = how many elements contribute to each K<sub>total</sub> entry):</p>";
    Y += '<div style="overflow-x:auto"><table class="rpt-assembly-map">', Y += "<tr><td></td>";
    for (let V = 0; V < $; V++) Y += `<td style="color:#003366;font-weight:bold;font-size:7px">${V}</td>`;
    Y += "</tr>";
    const D = Array.from({
      length: $
    }, () => Array($).fill(0));
    for (let V = 0; V < e.length; V++) {
      const j = e[V].map((N) => N * 6);
      for (const N of j) for (const G of j) for (let ye = 0; ye < 6; ye++) for (let k = 0; k < 6; k++) {
        const ne = N + ye, ve = G + k;
        ne < $ && ve < $ && D[ne][ve]++;
      }
    }
    for (let V = 0; V < $; V++) {
      Y += `<tr><td style="color:#003366;font-weight:bold;font-size:7px">${V}</td>`;
      for (let j = 0; j < $; j++) {
        const N = D[V][j], G = N === 0 ? "#fff" : N === 1 ? "#e8f0fe" : N === 2 ? "#c6dcf5" : "#a0c4e8", ye = N === 0 ? "" : N.toString();
        Y += `<td style="background:${G};color:#003366">${ye}</td>`;
      }
      Y += "</tr>";
    }
    return Y += "</table></div>", F > $ && (Y += `<div style="color:#888;font-size:9pt">(showing ${$}\xD7${$} of ${F}\xD7${F})</div>`), Y;
  }
  let Kn = false;
  function gl(e) {
    if (Kn || window.katex) {
      Kn = true, e();
      return;
    }
    const b = document.createElement("link");
    b.rel = "stylesheet", b.href = "https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css", document.head.appendChild(b);
    const F = document.createElement("script");
    F.src = "https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.js", F.onload = () => {
      Kn = true, e();
    }, document.head.appendChild(F);
  }
  function na(e, b = false) {
    try {
      if (window.katex) return window.katex.renderToString(e, {
        displayMode: b,
        throwOnError: false
      });
    } catch {
    }
    return `<code class="er-tex-fallback">${e}</code>`;
  }
  function xl(e, b, F, $, Y, D) {
    var _a, _b, _c, _d, _e, _f;
    const V = F[e], j = V.map((be) => b[be]), N = V.length === 2, G = N ? Ro(go(j[1], j[0])) : 0, ye = ((_a = $.elasticities) == null ? void 0 : _a.get(e)) ?? 0, k = ((_b = $.areas) == null ? void 0 : _b.get(e)) ?? 0, ne = ((_c = $.momentsOfInertiaZ) == null ? void 0 : _c.get(e)) ?? 0, ve = ((_d = $.momentsOfInertiaY) == null ? void 0 : _d.get(e)) ?? 0, me = ((_e = $.shearModuli) == null ? void 0 : _e.get(e)) ?? 0, ie = ((_f = $.torsionalConstants) == null ? void 0 : _f.get(e)) ?? 0;
    let te = null, O = null, _ = null;
    try {
      te = vn(j, $, e), O = yn(j), _ = no(os(O), no(te, O));
    } catch {
    }
    const J = N ? go(j[1], j[0]) : [
      0,
      0,
      0
    ], ce = G > 0 ? J[0] / G : 0, $e = G > 0 ? J[1] / G : 0, Te = G > 0 ? J[2] / G : 0, Ve = Math.sqrt(ce ** 2 + $e ** 2), ge = [];
    if ((Y == null ? void 0 : Y.deformations) && N) for (const be of V) {
      const Se = Y.deformations.get(be) || [
        0,
        0,
        0,
        0,
        0,
        0
      ];
      ge.push(...Se);
    }
    let De = [], He = [];
    if (ge.length === 12 && O && te) {
      try {
        De = no(O, ge);
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
      elmNodes: j,
      isFrame: N,
      L: G,
      E: ye,
      A: k,
      Iz: ne,
      Iy: ve,
      G: me,
      J: ie,
      kLocal: te,
      T: O,
      kGlobal: _,
      l: ce,
      m: $e,
      n: Te,
      D: Ve,
      uGlobal: ge,
      uLocal: De,
      fLocal: He,
      dOut: Y,
      aOut: D,
      totalNodes: b.length
    };
  }
  function vl(e, b, F, $, Y, D) {
    var _a, _b;
    const V = xl(e, b, F, $, Y, D), j = document.createElement("div");
    return j.className = "er-panel", j.innerHTML = wl + `
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
    <div class="er-body" id="er-body-tabla">${yl(V)}</div>
    <div class="er-body" id="er-body-math" style="display:none">${sa(V)}</div>
    <div class="er-body" id="er-body-resumen" style="display:none">${$l(V)}</div>
  `, j.querySelectorAll(".er-tab").forEach((N) => {
      N.addEventListener("click", () => {
        j.querySelectorAll(".er-tab").forEach((ye) => ye.classList.remove("active")), N.classList.add("active");
        const G = N.dataset.tab;
        j.querySelectorAll(".er-body").forEach((ye) => ye.style.display = "none"), j.querySelector(`#er-body-${G}`).style.display = "";
      });
    }), (_a = j.querySelector("#er-close")) == null ? void 0 : _a.addEventListener("click", () => j.remove()), (_b = j.querySelector("#er-fullscreen")) == null ? void 0 : _b.addEventListener("click", () => {
      const N = j.classList.toggle("er-fullscreen-mode"), G = j.querySelector("#er-fullscreen");
      G && (G.textContent = N ? "\u22A1" : "\u26F6");
    }), setTimeout(() => {
      const N = j.querySelector("#er-sf-canvas");
      N && Zn(N);
      const G = j.querySelector("#er-sf-canvas-math");
      G && Zn(G);
    }, 50), gl(() => {
      const N = j.querySelector("#er-body-math");
      N && (N.innerHTML = sa(V)), setTimeout(() => {
        const G = j.querySelector("#er-sf-canvas-math");
        G && Zn(G);
      }, 50), j.querySelectorAll(".er-deriv-header").forEach((G) => {
        G.addEventListener("click", () => {
          const ye = G.dataset.toggle, k = j.querySelector(`#er-${ye}`);
          k && (k.style.display = k.style.display === "none" ? "" : "none");
        });
      });
    }), j;
  }
  function yl(e) {
    let b = "";
    if (b += '<div class="er-section-title">1. Propiedades</div>', b += '<table class="er-props">', b += `<tr><td>E</td><td>${Ye(e.E)}</td><td>A</td><td>${Ye(e.A)}</td></tr>`, b += `<tr><td>I<sub>z</sub></td><td>${Ye(e.Iz)}</td><td>I<sub>y</sub></td><td>${Ye(e.Iy)}</td></tr>`, b += `<tr><td>G</td><td>${Ye(e.G)}</td><td>J</td><td>${Ye(e.J)}</td></tr>`, b += "</table>", e.kLocal && (b += `<div class="er-section-title">2. K<sub>local</sub> (${e.kLocal.length}\xD7${e.kLocal.length})</div>`, b += an(e.kLocal)), e.T && (b += '<div class="er-section-title">3. T \u2014 Transformaci\xF3n</div>', b += an(e.T)), e.kGlobal && (b += '<div class="er-section-title">4. K<sub>global</sub> = T<sup>T</sup>\xB7K\xB7T</div>', b += an(e.kGlobal)), b += '<div class="er-section-title">5. Desplazamientos</div>', e.uGlobal.length > 0) {
      const F = [
        "u<sub>x</sub>",
        "u<sub>y</sub>",
        "u<sub>z</sub>",
        "\u03B8<sub>x</sub>",
        "\u03B8<sub>y</sub>",
        "\u03B8<sub>z</sub>"
      ];
      for (let $ = 0; $ < e.elem.length; $++) {
        b += `<div class="er-sub">Nodo ${e.elem[$]}: `;
        for (let Y = 0; Y < 6; Y++) {
          const D = e.uGlobal[$ * 6 + Y];
          b += `${F[Y]}=<span class="${Math.abs(D) > 1e-10 ? "nz" : ""}">${Ye(D, 6)}</span> `;
        }
        b += "</div>";
      }
    } else b += '<div class="er-sub">Sin an\xE1lisis</div>';
    if (b += '<div class="er-section-title">6. Fuerzas internas</div>', e.fLocal.length > 0 && e.fLocal.some((F) => F !== 0)) {
      const F = [
        "N",
        "V<sub>y</sub>",
        "V<sub>z</sub>",
        "M<sub>x</sub>",
        "M<sub>y</sub>",
        "M<sub>z</sub>"
      ];
      b += '<table class="er-forces"><tr><th></th>';
      for (const $ of F) b += `<th>${$}</th>`;
      b += "</tr>", b += "<tr><td>Nodo i</td>";
      for (let $ = 0; $ < 6; $++) b += `<td class="${Math.abs(e.fLocal[$]) > 1e-10 ? "nz" : ""}">${Ye(e.fLocal[$], 3)}</td>`;
      b += "</tr><tr><td>Nodo j</td>";
      for (let $ = 6; $ < 12; $++) b += `<td class="${Math.abs(e.fLocal[$]) > 1e-10 ? "nz" : ""}">${Ye(e.fLocal[$], 3)}</td>`;
      b += "</tr></table>";
    } else b += '<div class="er-sub">Sin an\xE1lisis</div>';
    return b;
  }
  function sa(e) {
    if (!e.isFrame) return '<div class="er-sub">Shell element math: coming soon</div>';
    let b = "";
    const F = (ye) => na(ye), $ = (ye) => na(ye, true);
    b += '<div class="er-section-title">1. Geometria del elemento</div>', b += "<p>Viga Euler-Bernoulli con 2 nodos y 6 GDL por nodo:</p>", b += `<div class="er-eq">${$("\\text{DOFs} = [u_x,\\, u_y,\\, u_z,\\, \\theta_x,\\, \\theta_y,\\, \\theta_z] \\quad \\Rightarrow \\quad 12 \\text{ GDL totales}")}</div>`, b += '<div class="er-eq-num">', b += `${F("\\text{Nodo } i")} = (${e.elmNodes[0].map((ye) => Ye(ye)).join(", ")})<br/>`, b += `${F("\\text{Nodo } j")} = (${e.elmNodes[1].map((ye) => Ye(ye)).join(", ")})<br/>`, b += `${$(`L = \\sqrt{(x_j - x_i)^2 + (y_j - y_i)^2 + (z_j - z_i)^2} = \\mathbf{${Ye(e.L)}}`)}`, b += "</div>", b += '<div class="er-section-title">2. Funciones de forma</div>', b += "<p>La viga usa <b>interpolacion lineal</b> para axial/torsion y <b>polinomios cubicos de Hermite</b> para flexion.</p>", b += '<div class="er-subsec">2.1 Axial y Torsion (lineal)</div>', b += `<div class="er-eq">${$("N_1(\\xi) = 1 - \\xi \\qquad N_2(\\xi) = \\xi \\qquad \\text{donde } \\xi = \\frac{x}{L} \\in [0,1]")}</div>`, b += "<p>Primera derivada:</p>", b += `<div class="er-eq">${$("\\frac{dN_1}{d\\xi} = -1 \\qquad \\frac{dN_2}{d\\xi} = 1")}</div>`, b += '<div class="er-subsec">2.2 Flexion (Hermite cubicos)</div>', b += `<p>Las funciones de Hermite garantizan continuidad ${F("C^1")} (desplazamiento y pendiente continuos):</p>`, b += `<div class="er-eq">${$("H_1(\\xi) = 1 - 3\\xi^2 + 2\\xi^3 \\qquad \\text{(desplazamiento nodo } i\\text{)}")}</div>`, b += `<div class="er-eq">${$("H_2(\\xi) = L\\,\\xi\\,(1-\\xi)^2 \\qquad \\text{(rotacion nodo } i\\text{)}")}</div>`, b += `<div class="er-eq">${$("H_3(\\xi) = 3\\xi^2 - 2\\xi^3 \\qquad \\text{(desplazamiento nodo } j\\text{)}")}</div>`, b += `<div class="er-eq">${$("H_4(\\xi) = L\\,\\xi^2(\\xi - 1) \\qquad \\text{(rotacion nodo } j\\text{)}")}</div>`, b += `<div class="er-subsec">Derivadas segunda (curvatura ${F("\\kappa = \\frac{d^2v}{dx^2}")}):</div>`, b += `<div class="er-eq">${$("H_1'' = \\frac{-6}{L^2}(1-2\\xi) \\qquad H_2'' = \\frac{-2}{L}(2-3\\xi)")}</div>`, b += `<div class="er-eq">${$("H_3'' = \\frac{6}{L^2}(1-2\\xi) \\qquad H_4'' = \\frac{-2}{L}(1-3\\xi)")}</div>`, b += '<canvas id="er-sf-canvas-math" width="500" height="250" style="width:100%;border:1px solid var(--fem-border);border-radius:4px;margin:8px 0;"></canvas>', b += '<div class="er-section-title">3. Matriz B (strain-displacement)</div>', b += "<p>La matriz B relaciona desplazamientos nodales con deformaciones internas:</p>", b += `<div class="er-eq">${$("\\boldsymbol{\\varepsilon} = \\mathbf{B} \\cdot \\mathbf{u}")}</div>`, b += '<div class="er-subsec">3.1 Deformacion axial</div>', b += `<div class="er-eq">${$("\\varepsilon_{axial} = \\frac{du}{dx} = \\frac{1}{L} \\begin{bmatrix} -1 & 1 \\end{bmatrix} \\begin{Bmatrix} u_i \\\\ u_j \\end{Bmatrix}")}</div>`, b += `<div class="er-subsec">3.2 Curvatura por flexion (plano XY \u2192 ${F("I_z")})</div>`, b += `<div class="er-eq">${$("\\kappa_z = \\frac{d^2 v}{dx^2} = \\mathbf{B}_{bz} \\cdot \\begin{Bmatrix} v_i \\\\ \\theta_{zi} \\\\ v_j \\\\ \\theta_{zj} \\end{Bmatrix}")}</div>`, b += `<div class="er-eq">${$("\\mathbf{B}_{bz}(\\xi) = \\frac{1}{L^2} \\begin{bmatrix} H_1'' & H_2'' & H_3'' & H_4'' \\end{bmatrix}")}</div>`, b += `<div class="er-subsec">3.3 Curvatura (plano XZ \u2192 ${F("I_y")})</div>`, b += `<div class="er-eq">${$("\\kappa_y = \\frac{d^2 w}{dx^2} = \\mathbf{B}_{by} \\cdot \\begin{Bmatrix} w_i \\\\ \\theta_{yi} \\\\ w_j \\\\ \\theta_{yj} \\end{Bmatrix}")}</div>`, b += '<div class="er-subsec">3.4 Torsion</div>', b += `<div class="er-eq">${$("\\phi' = \\frac{d\\theta_x}{dx} = \\frac{1}{L} \\begin{bmatrix} -1 & 1 \\end{bmatrix} \\begin{Bmatrix} \\theta_{xi} \\\\ \\theta_{xj} \\end{Bmatrix}")}</div>`, b += '<div class="er-section-title">4. Relaciones constitutivas D</div>', b += "<p>Cada modo de deformacion tiene su rigidez material:</p>", b += `<div class="er-eq">${$(`\\text{Axial: } \\sigma = E \\cdot \\varepsilon \\;\\Rightarrow\\; D_{ax} = EA = ${Ye(e.E)} \\times ${Ye(e.A)} = \\mathbf{${Ye(e.E * e.A)}}`)}</div>`, b += `<div class="er-eq">${$(`\\text{Flex Z: } M_z = EI_z \\cdot \\kappa \\;\\Rightarrow\\; D_{bz} = EI_z = ${Ye(e.E)} \\times ${Ye(e.Iz)} = \\mathbf{${Ye(e.E * e.Iz)}}`)}</div>`, b += `<div class="er-eq">${$(`\\text{Flex Y: } M_y = EI_y \\cdot \\kappa \\;\\Rightarrow\\; D_{by} = EI_y = ${Ye(e.E)} \\times ${Ye(e.Iy)} = \\mathbf{${Ye(e.E * e.Iy)}}`)}</div>`, b += `<div class="er-eq">${$(`\\text{Torsion: } T = GJ \\cdot \\phi' \\;\\Rightarrow\\; D_t = GJ = ${Ye(e.G)} \\times ${Ye(e.J)} = \\mathbf{${Ye(e.G * e.J)}}`)}</div>`, b += `<div class="er-section-title">5. Integracion \u2192 ${F("\\mathbf{K}_{local}")}</div>`, b += "<p>La matriz de rigidez local se obtiene integrando analiticamente:</p>", b += `<div class="er-eq er-eq-main">${$("\\mathbf{K}_{local} = \\int_0^L \\mathbf{B}^T \\cdot \\mathbf{D} \\cdot \\mathbf{B} \\; dx")}</div>`;
    const Y = e.E * e.A / e.L, D = e.E * e.Iz / e.L ** 3, V = e.E * e.Iy / e.L ** 3, j = e.G * e.J / e.L;
    if (b += '<div class="er-deriv-block">', b += '<div class="er-deriv-header" data-toggle="deriv-axial">\u{1F4D6} K[0,0] = EA/L \u2014 <i>click para ver derivacion completa</i></div>', b += '<div id="er-deriv-axial" class="er-deriv-body" style="display:none">', b += "<p><b>Paso 1:</b> Funcion de forma axial</p>", b += `<div class="er-eq">${$("u(\\xi) = N_1 \\cdot u_i + N_2 \\cdot u_j = (1-\\xi)\\,u_i + \\xi\\,u_j")}</div>`, b += "<p><b>Paso 2:</b> Derivada (deformacion)</p>", b += `<div class="er-eq">${$("\\varepsilon = \\frac{du}{dx} = \\frac{1}{L}\\frac{du}{d\\xi} = \\frac{1}{L}(-u_i + u_j)")}</div>`, b += `<div class="er-eq">${$("\\mathbf{B}_{ax} = \\frac{1}{L}\\begin{bmatrix} -1 & 1 \\end{bmatrix}")}</div>`, b += `<p><b>Paso 3:</b> Integracion ${F("K = \\int_0^L B^T \\cdot EA \\cdot B \\; dx")}</p>`, b += `<div class="er-eq">${$("K_{ax} = \\int_0^L \\frac{1}{L}\\begin{bmatrix}-1\\\\1\\end{bmatrix} \\cdot EA \\cdot \\frac{1}{L}\\begin{bmatrix}-1 & 1\\end{bmatrix} dx")}</div>`, b += `<div class="er-eq">${$("= \\frac{EA}{L^2} \\begin{bmatrix}1 & -1\\\\-1 & 1\\end{bmatrix} \\int_0^L dx = \\frac{EA}{L^2} \\cdot L \\begin{bmatrix}1 & -1\\\\-1 & 1\\end{bmatrix}")}</div>`, b += `<div class="er-eq er-eq-main">${$(`K_{ax} = \\frac{EA}{L}\\begin{bmatrix}1 & -1\\\\-1 & 1\\end{bmatrix} = \\frac{${Ye(e.E)}\\times${Ye(e.A)}}{${Ye(e.L)}}\\begin{bmatrix}1 & -1\\\\-1 & 1\\end{bmatrix}`)}</div>`, b += `<div class="er-eq">${$(`K[0,0] = K[6,6] = \\frac{EA}{L} = \\mathbf{${Ye(Y)}}`)}</div>`, b += "</div></div>", b += '<div class="er-deriv-block">', b += '<div class="er-deriv-header" data-toggle="deriv-bend">\u{1F4D6} K[1,1] = 12EI<sub>z</sub>/L\xB3 \u2014 <i>click para ver derivacion completa</i></div>', b += '<div id="er-deriv-bend" class="er-deriv-body" style="display:none">', b += `<p><b>Paso 1:</b> Funcion de forma Hermite para ${F("v(\\xi)")}</p>`, b += `<div class="er-eq">${$("v(\\xi) = H_1 v_i + H_2 \\theta_i + H_3 v_j + H_4 \\theta_j")}</div>`, b += "<p><b>Paso 2:</b> Segunda derivada (curvatura)</p>", b += `<div class="er-eq">${$("\\kappa = \\frac{d^2v}{dx^2} = \\frac{1}{L^2}\\frac{d^2v}{d\\xi^2}")}</div>`, b += `<div class="er-eq">${$("H_1'' = -6+12\\xi, \\quad H_2'' = L(-4+6\\xi), \\quad H_3'' = 6-12\\xi, \\quad H_4'' = L(-2+6\\xi)")}</div>`, b += `<div class="er-eq">${$("\\mathbf{B}_b = \\frac{1}{L^2}\\begin{bmatrix} H_1'' & H_2'' & H_3'' & H_4'' \\end{bmatrix}")}</div>`, b += `<p><b>Paso 3:</b> Integracion para K[1,1] (termino ${F("v_i \\cdot v_i")})</p>`, b += `<div class="er-eq">${$("K[1,1] = \\int_0^L \\frac{(H_1'')^2}{L^4} \\cdot EI_z \\; dx = \\frac{EI_z}{L^4} \\int_0^L (-6+12\\xi)^2 \\; dx")}</div>`, b += `<p>Expandimos: ${F("(-6+12\\xi)^2 = 36 - 144\\xi + 144\\xi^2")}</p>`, b += `<div class="er-eq">${$("\\int_0^L (36-144\\xi+144\\xi^2)\\,dx = 36L - 72L + 48L = 12L")}</div>`, b += `<div class="er-eq er-eq-main">${$(`K[1,1] = \\frac{EI_z}{L^4} \\cdot 12L = \\frac{12EI_z}{L^3} = \\frac{12 \\times ${Ye(e.E)} \\times ${Ye(e.Iz)}}{${Ye(e.L)}^3} = \\mathbf{${Ye(12 * D)}}`)}</div>`, b += "</div></div>", b += '<div class="er-deriv-block">', b += '<div class="er-deriv-header" data-toggle="deriv-tors">\u{1F4D6} K[3,3] = GJ/L \u2014 <i>click para ver derivacion</i></div>', b += '<div id="er-deriv-tors" class="er-deriv-body" style="display:none">', b += `<p>Mismo proceso que axial pero con ${F("\\theta_x")} y ${F("GJ")}:</p>`, b += `<div class="er-eq">${$(`K_{torsion} = \\frac{GJ}{L}\\begin{bmatrix}1 & -1\\\\-1 & 1\\end{bmatrix} = \\frac{${Ye(e.G)}\\times${Ye(e.J)}}{${Ye(e.L)}} = \\mathbf{${Ye(j)}}`)}</div>`, b += "</div></div>", b += '<div class="er-deriv-block">', b += '<div class="er-deriv-header" data-toggle="deriv-coup">\u{1F4D6} K[1,5] = 6EI<sub>z</sub>/L\xB2 \u2014 <i>acoplamiento corte-momento</i></div>', b += '<div id="er-deriv-coup" class="er-deriv-body" style="display:none">', b += `<p>Termino cruzado ${F("v_i \\cdot \\theta_{zi}")} (acoplamiento corte-momento):</p>`, b += `<div class="er-eq">${$("K[1,5] = \\frac{EI_z}{L^4} \\int_0^L H_1'' \\cdot H_2'' \\; dx")}</div>`, b += `<div class="er-eq">${$("= \\frac{EI_z}{L^4} \\int_0^L (-6+12\\xi) \\cdot L(-4+6\\xi) \\; dx")}</div>`, b += `<div class="er-eq">${$("= \\frac{EI_z}{L^3} \\int_0^L (24-36\\xi-48\\xi+72\\xi^2) \\; dx = \\frac{EI_z}{L^3} \\cdot 6L")}</div>`, b += `<div class="er-eq er-eq-main">${$(`K[1,5] = \\frac{6EI_z}{L^2} = \\mathbf{${Ye(6 * e.E * e.Iz / e.L ** 2)}}`)}</div>`, b += "</div></div>", b += '<div class="er-subsec">Resumen de coeficientes:</div>', b += `<div class="er-eq">${$(`\\frac{EA}{L} = \\mathbf{${Ye(Y)}} \\qquad \\frac{12EI_z}{L^3} = \\mathbf{${Ye(12 * D)}} \\qquad \\frac{12EI_y}{L^3} = \\mathbf{${Ye(12 * V)}}`)}</div>`, b += `<div class="er-eq">${$(`\\frac{GJ}{L} = \\mathbf{${Ye(j)}} \\qquad \\frac{4EI_y}{L} = \\mathbf{${Ye(4 * e.E * e.Iy / e.L)}} \\qquad \\frac{4EI_z}{L} = \\mathbf{${Ye(4 * e.E * e.Iz / e.L)}}`)}</div>`, b += `<div class="er-eq">${$(`\\frac{6EI_z}{L^2} = \\mathbf{${Ye(6 * e.E * e.Iz / e.L ** 2)}} \\qquad \\frac{6EI_y}{L^2} = \\mathbf{${Ye(6 * e.E * e.Iy / e.L ** 2)}}`)}</div>`, e.kLocal && (b += `<div class="er-subsec">Resultado: ${F("\\mathbf{K}_{local}")} (12x12)</div>`, b += an(e.kLocal)), b += '<div class="er-section-title">6. Transformacion de coordenadas</div>', b += "<p>Los cosenos directores del eje del elemento:</p>", b += `<div class="er-eq">${$(`l = \\frac{x_j - x_i}{L} = ${gn(e.l)} \\qquad m = \\frac{y_j - y_i}{L} = ${gn(e.m)} \\qquad n = \\frac{z_j - z_i}{L} = ${gn(e.n)}`)}</div>`, b += `<div class="er-eq">${$(`D = \\sqrt{l^2 + m^2} = ${gn(e.D)}`)}</div>`, Math.abs(e.n) > 0.999) {
      b += `<p>Caso especial: elemento vertical (${F(`n \\approx ${e.n > 0 ? "+1" : "-1"}`)}):</p>`;
      const ye = e.n > 0 ? "\\boldsymbol{\\lambda} = \\begin{bmatrix} 0 & 0 & 1 \\\\ 0 & 1 & 0 \\\\ -1 & 0 & 0 \\end{bmatrix}" : "\\boldsymbol{\\lambda} = \\begin{bmatrix} 0 & 0 & -1 \\\\ 0 & 1 & 0 \\\\ 1 & 0 & 0 \\end{bmatrix}";
      b += `<div class="er-eq">${$(ye)}</div>`;
    } else b += `<div class="er-eq">${$("\\boldsymbol{\\lambda} = \\begin{bmatrix} l & m & n \\\\ -m/D & l/D & 0 \\\\ -ln/D & -mn/D & D \\end{bmatrix}")}</div>`;
    b += `<div class="er-eq er-eq-main">${$("\\mathbf{T} = \\mathbf{I}_4 \\otimes \\boldsymbol{\\lambda} \\quad \\text{(Kronecker product} \\rightarrow 12 \\times 12 \\text{ bloque-diagonal)}")}</div>`, b += `<div class="er-section-title">7. ${F("\\mathbf{K}_{global}")} = ${F("\\mathbf{T}^T \\cdot \\mathbf{K}_{local} \\cdot \\mathbf{T}")}</div>`, b += "<p>Transformar la rigidez local al sistema global de coordenadas:</p>", b += `<div class="er-eq er-eq-main">${$("\\mathbf{K}_{global} = \\mathbf{T}^T \\cdot \\mathbf{K}_{local} \\cdot \\mathbf{T}")}</div>`, e.kGlobal && (b += an(e.kGlobal)), b += '<div class="er-section-title">8. Ensamblaje</div>';
    const N = e.elem[0] * 6, G = e.elem[1] * 6;
    if (b += `<div class="er-eq">${$(`\\text{Nodo } ${e.elem[0]} \\rightarrow \\text{DOFs } [${N} \\ldots ${N + 5}]`)}</div>`, b += `<div class="er-eq">${$(`\\text{Nodo } ${e.elem[1]} \\rightarrow \\text{DOFs } [${G} \\ldots ${G + 5}]`)}</div>`, b += `<div class="er-eq">${$("\\mathbf{K}_{total}[\\text{DOFs}_i, \\text{DOFs}_j] \\mathrel{+}= \\mathbf{K}_{global}[i, j]")}</div>`, b += '<div class="er-section-title">9. Recuperacion de fuerzas internas</div>', b += `<div class="er-eq">${$("\\mathbf{u}_{local} = \\mathbf{T} \\cdot \\mathbf{u}_{global}")}</div>`, b += `<div class="er-eq er-eq-main">${$("\\mathbf{f}_{local} = \\mathbf{K}_{local} \\cdot \\mathbf{u}_{local}")}</div>`, e.fLocal.length > 0 && e.fLocal.some((ye) => ye !== 0)) {
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
  function $l(e) {
    let b = "";
    if (b += `<div class="er-section-title">Resumen \u2014 Elemento ${e.elemIdx}</div>`, b += '<table class="er-props">', b += `<tr><td>Tipo</td><td>${e.isFrame ? "Frame (Euler-Bernoulli)" : "Shell"}</td></tr>`, b += `<tr><td>Nodos</td><td>${e.elem.join(" \u2192 ")}</td></tr>`, b += `<tr><td>Longitud</td><td><b>${Ye(e.L)}</b></td></tr>`, b += `<tr><td>E</td><td>${Ye(e.E)}</td></tr>`, b += `<tr><td>A</td><td>${Ye(e.A)}</td></tr>`, b += "</table>", e.uGlobal.length > 0) {
      b += '<div class="er-section-title">Desplazamientos</div>';
      const F = [
        "u<sub>x</sub>",
        "u<sub>y</sub>",
        "u<sub>z</sub>",
        "\u03B8<sub>x</sub>",
        "\u03B8<sub>y</sub>",
        "\u03B8<sub>z</sub>"
      ];
      b += '<table class="er-forces"><tr><th>Nodo</th>';
      for (const $ of F) b += `<th>${$}</th>`;
      b += "</tr>";
      for (let $ = 0; $ < e.elem.length; $++) {
        b += `<tr><td>${e.elem[$]}</td>`;
        for (let Y = 0; Y < 6; Y++) {
          const D = e.uGlobal[$ * 6 + Y];
          b += `<td class="${Math.abs(D) > 1e-10 ? "nz" : ""}">${Ye(D, 6)}</td>`;
        }
        b += "</tr>";
      }
      b += "</table>";
    }
    if (e.fLocal.length > 0 && e.fLocal.some((F) => F !== 0)) {
      b += '<div class="er-section-title">Fuerzas internas</div>';
      const F = [
        "N",
        "V<sub>y</sub>",
        "V<sub>z</sub>",
        "M<sub>x</sub>",
        "M<sub>y</sub>",
        "M<sub>z</sub>"
      ];
      b += '<table class="er-forces"><tr><th></th>';
      for (const $ of F) b += `<th>${$}</th>`;
      b += "</tr><tr><td>Nodo i</td>";
      for (let $ = 0; $ < 6; $++) b += `<td class="${Math.abs(e.fLocal[$]) > 1e-10 ? "nz" : ""}">${Ye(e.fLocal[$], 3)}</td>`;
      b += "</tr><tr><td>Nodo j</td>";
      for (let $ = 6; $ < 12; $++) b += `<td class="${Math.abs(e.fLocal[$]) > 1e-10 ? "nz" : ""}">${Ye(e.fLocal[$], 3)}</td>`;
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
    const b = e.length, F = Math.min(b, 12);
    let $ = '<div style="overflow-x:auto"><table class="er-matrix">';
    for (let Y = 0; Y < F; Y++) {
      $ += "<tr>";
      for (let D = 0; D < F; D++) {
        const V = ((_a = e[Y]) == null ? void 0 : _a[D]) ?? 0, j = Math.abs(V) < 1e-10;
        $ += `<td class="${j ? "z" : ""} ${Y === D && !j ? "diag" : ""}">${j ? "0" : Ml(V)}</td>`;
      }
      $ += "</tr>";
    }
    return $ += "</table>", b > F && ($ += `<div style="color:var(--fem-label);font-size:9px">(${F}\xD7${F} de ${b}\xD7${b})</div>`), $ += "</div>", $;
  }
  function Ml(e) {
    return Math.abs(e) >= 1e6 || Math.abs(e) < 0.01 && e !== 0 ? e.toExponential(1) : Math.abs(e) >= 100 ? e.toFixed(0) : e.toFixed(2);
  }
  function Zn(e) {
    const b = e.getContext("2d");
    if (!b) return;
    const F = e.width, $ = e.height, Y = 30, D = F - 2 * Y, V = ($ - 3 * Y) / 2;
    b.fillStyle = getComputedStyle(document.body).getPropertyValue("--fem-bg").trim() || "#111", b.fillRect(0, 0, F, $);
    const j = (N, G, ye) => {
      b.strokeStyle = "#333", b.lineWidth = 1, b.strokeRect(Y, N, D, V), b.strokeStyle = "#444", b.beginPath(), b.moveTo(Y, N + V / 2), b.lineTo(Y + D, N + V / 2), b.stroke(), b.fillStyle = "#888", b.font = "11px sans-serif", b.fillText(G, Y + 4, N + 14);
      for (const ne of ye) {
        b.strokeStyle = ne.color, b.lineWidth = 2.5, b.beginPath();
        for (let ve = 0; ve <= 100; ve++) {
          const me = ve / 100, ie = Y + me * D, te = N + V / 2 - ne.fn(me) * (V / 2 * 0.85);
          ve === 0 ? b.moveTo(ie, te) : b.lineTo(ie, te);
        }
        b.stroke();
      }
      let k = Y + D - 90;
      for (const ne of ye) b.fillStyle = ne.color, b.font = "bold 10px sans-serif", b.fillText(ne.label, k, N + V - 6), k += 36;
      b.fillStyle = "#666", b.font = "9px monospace", b.fillText("0", Y, N + V + 12), b.fillText("1", Y + D - 6, N + V + 12), b.fillText("\u03BE", Y + D / 2, N + V + 12);
    };
    j(Y, "Axial (lineal)", [
      {
        fn: (N) => 1 - N,
        color: "#ff6600",
        label: "N\u2081"
      },
      {
        fn: (N) => N,
        color: "#00ccff",
        label: "N\u2082"
      }
    ]), j(Y + V + Y, "Flexi\xF3n (Hermite c\xFAbicos)", [
      {
        fn: (N) => 1 - 3 * N * N + 2 * N * N * N,
        color: "#ff6600",
        label: "H\u2081"
      },
      {
        fn: (N) => N * (1 - N) * (1 - N),
        color: "#ffcc00",
        label: "H\u2082"
      },
      {
        fn: (N) => 3 * N * N - 2 * N * N * N,
        color: "#00ccff",
        label: "H\u2083"
      },
      {
        fn: (N) => N * N * (N - 1),
        color: "#00ff66",
        label: "H\u2084"
      }
    ]);
  }
  const wl = `<style>
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
  let Mn = false, Po = null, lo = null, Dt = null, Ft = null;
  function Sl() {
    Ft = document.createElement("button"), Ft.id = "help-tour-btn", Ft.innerHTML = "?", Ft.title = "Ayuda interactiva \u2014 Tour guiado", Ft.style.cssText = `
    position: fixed; bottom: 20px; right: 20px; z-index: 9999999;
    width: 48px; height: 48px; border-radius: 50%;
    background: linear-gradient(135deg, #0066cc, #0099ff);
    color: white; border: 3px solid rgba(255,255,255,0.3);
    font-size: 24px; font-weight: bold; cursor: pointer;
    box-shadow: 0 4px 15px rgba(0,102,204,0.4);
    transition: transform 0.2s, box-shadow 0.2s;
    font-family: 'Arial Nova', sans-serif;
    animation: helpPulse 2s infinite;
  `, Ft.addEventListener("mouseenter", () => {
      Ft.style.transform = "scale(1.15)", Ft.style.boxShadow = "0 6px 20px rgba(0,102,204,0.6)";
    }), Ft.addEventListener("mouseleave", () => {
      Ft.style.transform = "scale(1)", Ft.style.boxShadow = "0 4px 15px rgba(0,102,204,0.4)";
    }), Ft.addEventListener("click", () => {
      Mn ? ns() : El();
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
  `, document.head.appendChild(e), Ft;
  }
  function El() {
    Mn = true, Ft && (Ft.innerHTML = "\u2715", Ft.style.background = "linear-gradient(135deg, #cc3333, #ff4444)", Ft.style.animation = "none"), Po = document.createElement("div"), Po.id = "tour-overlay", Po.style.cssText = `
    position: fixed; inset: 0; z-index: 9999990;
    pointer-events: none;
  `, document.body.appendChild(Po), Uo(0);
  }
  function ns() {
    Mn = false, Ft && (Ft.innerHTML = "?", Ft.style.background = "linear-gradient(135deg, #0066cc, #0099ff)", Ft.style.animation = "helpPulse 2s infinite"), lo && (lo.remove(), lo = null), Dt && (Dt.remove(), Dt = null), Po && (Po.remove(), Po = null);
  }
  function Uo(e) {
    var _a, _b;
    if (e >= nn.length) {
      Il();
      return;
    }
    const b = nn[e], F = document.querySelector(b.selector);
    if (!F) {
      Uo(e + 1);
      return;
    }
    F.scrollIntoView({
      behavior: "smooth",
      block: "nearest"
    }), lo && lo.remove(), Dt && Dt.remove();
    const $ = F.getBoundingClientRect(), Y = window.innerWidth, D = window.innerHeight, V = 320, j = 180;
    lo = document.createElement("div"), lo.style.cssText = `
    position: fixed;
    left: ${$.left - 6}px; top: ${$.top - 6}px;
    width: ${$.width + 12}px; height: ${$.height + 12}px;
    border-radius: 8px;
    z-index: 9999991;
    pointer-events: none;
    animation: spotlightPulse 1.5s ease-in-out infinite;
    transition: all 0.3s ease;
  `, document.body.appendChild(lo);
    const N = Y - $.right, G = $.left, ye = D - $.bottom, k = $.top;
    let ne = b.position || "bottom";
    ne === "bottom" && ye < j + 20 && (ne = "top"), ne === "top" && k < j + 20 && (ne = "right"), ne === "right" && N < V + 20 && (ne = "left"), ne === "left" && G < V + 20 && (ne = "bottom");
    let ve, me, ie = "";
    switch (ne) {
      case "bottom":
        ve = $.left + $.width / 2 - V / 2, me = $.bottom + 14, ie = "position:absolute;top:-8px;left:50%;transform:translateX(-50%);width:0;height:0;border-left:8px solid transparent;border-right:8px solid transparent;border-bottom:8px solid #0099ff;";
        break;
      case "top":
        ve = $.left + $.width / 2 - V / 2, me = $.top - j - 14, ie = "position:absolute;bottom:-8px;left:50%;transform:translateX(-50%);width:0;height:0;border-left:8px solid transparent;border-right:8px solid transparent;border-top:8px solid #0099ff;";
        break;
      case "right":
        ve = $.right + 14, me = $.top + $.height / 2 - j / 2, ie = "position:absolute;left:-8px;top:50%;transform:translateY(-50%);width:0;height:0;border-top:8px solid transparent;border-bottom:8px solid transparent;border-right:8px solid #0099ff;";
        break;
      case "left":
        ve = $.left - V - 14, me = $.top + $.height / 2 - j / 2, ie = "position:absolute;right:-8px;top:50%;transform:translateY(-50%);width:0;height:0;border-top:8px solid transparent;border-bottom:8px solid transparent;border-left:8px solid #0099ff;";
        break;
    }
    ve = Math.max(10, Math.min(ve, Y - V - 10)), me = Math.max(10, Math.min(me, D - j - 10)), Dt = document.createElement("div"), Dt.style.cssText = `
    position: fixed;
    left: ${ve}px; top: ${me}px;
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
    <div style="${ie}"></div>
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
      ${nn.map((O, _) => `<div style="width:${_ === e ? "16px" : "6px"};height:6px;border-radius:3px;background:${_ === e ? "#0099ff" : _ < e ? "#004488" : "#333"};transition:all 0.3s;"></div>`).join("")}
    </div>
  `, document.body.appendChild(Dt), (_a = Dt.querySelector("#tour-next")) == null ? void 0 : _a.addEventListener("click", () => {
      Uo(e + 1);
    }), (_b = Dt.querySelector("#tour-prev")) == null ? void 0 : _b.addEventListener("click", () => {
      Uo(e - 1);
    });
    const te = (O) => {
      if (!Mn) {
        document.removeEventListener("keydown", te);
        return;
      }
      (O.key === "ArrowRight" || O.key === "Enter") && (Uo(e + 1), document.removeEventListener("keydown", te)), O.key === "ArrowLeft" && (Uo(Math.max(0, e - 1)), document.removeEventListener("keydown", te)), O.key === "Escape" && (ns(), document.removeEventListener("keydown", te));
    };
    document.addEventListener("keydown", te);
  }
  function Il() {
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
  function kl(e) {
    var _a;
    const b = e.split(/\r?\n/), F = {
      force: "TONF",
      length: "M"
    }, $ = [], Y = /* @__PURE__ */ new Map(), D = /* @__PURE__ */ new Map(), V = /* @__PURE__ */ new Map(), j = [], N = [], G = /* @__PURE__ */ new Map(), ye = /* @__PURE__ */ new Map(), k = [], ne = [];
    let ve = "", me = "";
    const ie = /* @__PURE__ */ new Map();
    for (const Le of b) {
      const qe = Le.trim();
      if (!qe || qe.startsWith("$")) {
        qe.startsWith("$ ") && (me = qe.substring(2).trim());
        continue;
      }
      if (me && (ie.has(me) || ie.set(me, []), ie.get(me).push(Le)), me === "CONTROLS") {
        const xe = qe.match(/UNITS\s+"([^"]+)"\s+"([^"]+)"/);
        xe && (F.force = xe[1], F.length = xe[2]);
        const Ce = qe.match(/TITLE2\s+"([^"]+)"/);
        Ce && (ve = Ce[1]);
      }
      if (me === "STORIES - IN SEQUENCE FROM TOP") {
        const xe = qe.match(/STORY\s+"([^"]+)"\s+(?:HEIGHT\s+([\d.]+)|ELEV\s+([-\d.]+))/);
        if (xe) {
          const Ce = xe[1], he = xe[2] ? parseFloat(xe[2]) : 0, ke = xe[3] ? parseFloat(xe[3]) : void 0;
          $.push({
            name: Ce,
            height: he,
            elev: ke ?? 0
          });
        }
      }
      if (me === "MATERIAL PROPERTIES") {
        const xe = qe.match(/MATERIAL\s+"([^"]+)"\s+(?:TYPE\s+"([^"]+)")?/);
        if (xe) {
          const Ce = xe[1];
          Y.has(Ce) || Y.set(Ce, {
            type: xe[2] || "",
            E: 0,
            G: 0,
            nu: 0
          });
          const he = Y.get(Ce);
          xe[2] && (he.type = xe[2]);
          const ke = qe.match(/\bE\s+([\d.eE+-]+)/);
          ke && (he.E = parseFloat(ke[1]));
          const Ge = qe.match(/\bU\s+([\d.eE+-]+)/);
          Ge && (he.nu = parseFloat(Ge[1]), he.G = he.E / (2 * (1 + he.nu)));
          const _e = qe.match(/\bFY\s+([\d.eE+-]+)/);
          _e && (he.fy = parseFloat(_e[1]));
          const it = qe.match(/\bFC\s+([\d.eE+-]+)/);
          it && (he.fc = parseFloat(it[1]));
          const mt = qe.match(/WEIGHTPERVOLUME\s+([\d.eE+-]+)/);
          mt && (he.density = parseFloat(mt[1]));
        }
      }
      if (me === "FRAME SECTIONS") {
        const xe = qe.match(/FRAMESECTION\s+"([^"]+)"/);
        if (xe) {
          const Ce = xe[1];
          D.has(Ce) || D.set(Ce, {
            material: "",
            shape: "",
            D: 0,
            B: 0,
            TF: 0,
            TW: 0
          });
          const he = D.get(Ce), ke = qe.match(/MATERIAL\s+"([^"]+)"/);
          ke && (he.material = ke[1]);
          const Ge = qe.match(/SHAPE\s+"([^"]+)"/);
          Ge && (he.shape = Ge[1]);
          const _e = qe.match(/\bD\s+([\d.eE+-]+)/);
          _e && (he.D = parseFloat(_e[1]));
          const it = qe.match(/\bB\s+([\d.eE+-]+)/);
          it && (he.B = parseFloat(it[1]));
          const mt = qe.match(/\bTF\s+([\d.eE+-]+)/);
          mt && (he.TF = parseFloat(mt[1]));
          const We = qe.match(/\bTW\s+([\d.eE+-]+)/);
          We && (he.TW = parseFloat(We[1]));
          const Xe = qe.match(/\bR\s+([\d.eE+-]+)/);
          Xe && (he.R = parseFloat(Xe[1]));
          const pt = qe.match(/FILLMATERIAL\s+"([^"]+)"/);
          pt && (he.fillMaterial = pt[1]);
          const lt = qe.match(/I2MOD\s+([\d.eE+-]+)/);
          lt && (he.modI2 = parseFloat(lt[1]));
          const bt = qe.match(/I3MOD\s+([\d.eE+-]+)/);
          bt && (he.modI3 = parseFloat(bt[1]));
        }
      }
      if (me === "POINT COORDINATES") {
        const xe = qe.match(/POINT\s+"([^"]+)"\s+([-\d.eE+]+)\s+([-\d.eE+]+)/);
        xe && V.set(xe[1], [
          parseFloat(xe[2]),
          parseFloat(xe[3])
        ]);
      }
      if (me === "LINE CONNECTIVITIES") {
        const xe = qe.match(/LINE\s+"([^"]+)"\s+(COLUMN|BEAM|BRACE)\s+"([^"]+)"\s+"([^"]+)"\s+(\d+)/);
        xe && j.push({
          name: xe[1],
          type: xe[2],
          pt1: xe[3],
          pt2: xe[4],
          nStories: parseInt(xe[5])
        });
      }
      if (me === "POINT ASSIGNS") {
        const xe = qe.match(/POINTASSIGN\s+"([^"]+)"\s+"([^"]+)".*RESTRAINT\s+"([^"]+)"/);
        xe && G.set(`${xe[1]}@${xe[2]}`, xe[3].split(/\s+/));
      }
      if (me === "LINE ASSIGNS") {
        const xe = qe.match(/LINEASSIGN\s+"([^"]+)"\s+"([^"]+)".*SECTION\s+"([^"]+)"/);
        if (xe) {
          const Ce = {
            story: xe[2],
            section: xe[3],
            rigidZone: 0,
            releases: [],
            angle: 0
          }, he = qe.match(/RIGIDZONE\s+([\d.eE+-]+)/);
          he && (Ce.rigidZone = parseFloat(he[1]));
          const ke = qe.match(/RELEASE\s+"([^"]+)"/);
          ke && (Ce.releases = ke[1].split(/\s+/));
          const Ge = qe.match(/ANG\s+([-\d.eE+]+)/);
          Ge && (Ce.angle = parseFloat(Ge[1])), ye.set(`${xe[1]}@${xe[2]}`, Ce);
        }
      }
      if (me === "GRIDS") {
        const xe = qe.match(/^\s*GRID\s+"[^"]+"\s+LABEL\s+"([^"]+)"\s+DIR\s+"([XY])"\s+COORD\s+([-\d.eE+]+)/);
        xe && ne.push({
          label: xe[1],
          dir: xe[2],
          coord: parseFloat(xe[3])
        });
      }
      if (me === "FRAME OBJECT LOADS") {
        const xe = qe.match(/LINELOAD\s+"([^"]+)"\s+"([^"]+)"\s+TYPE\s+"([^"]+)"\s+DIR\s+"([^"]+)"\s+LC\s+"([^"]+)"\s+FVAL\s+([-\d.eE+]+)/);
        xe && k.push({
          line: xe[1],
          story: xe[2],
          type: xe[3],
          dir: xe[4],
          lc: xe[5],
          val: parseFloat(xe[6])
        });
      }
      if (me === "AREA CONNECTIVITIES") {
        const xe = qe.match(/AREA\s+"([^"]+)"\s+\d+\s+(.+)/);
        if (xe) {
          const Ce = ((_a = xe[2].match(/"([^"]+)"/g)) == null ? void 0 : _a.map((he) => he.replace(/"/g, ""))) || [];
          N.push({
            name: xe[1],
            pts: Ce,
            nStories: 0
          });
        }
      }
    }
    const te = /* @__PURE__ */ new Map();
    if ($.length > 0) {
      const Le = $.length - 1;
      te.set($[Le].name, $[Le].elev);
      for (let qe = Le - 1; qe >= 0; qe--) {
        const Ce = te.get($[qe + 1].name) + $[qe].height;
        $[qe].elev = Ce, te.set($[qe].name, Ce);
      }
    }
    const O = [], _ = [], J = /* @__PURE__ */ new Map(), ce = (Le, qe) => `${Le}@${qe}`, $e = /* @__PURE__ */ new Set(), Te = /* @__PURE__ */ new Map();
    for (const Le of j) Te.set(Le.name, Le);
    for (const Le of j) for (const [qe, xe] of ye) {
      if (!qe.startsWith(Le.name + "@")) continue;
      const Ce = xe.story, he = $.findIndex((ke) => ke.name === Ce);
      if (!(he < 0)) if (Le.type === "COLUMN" || Le.type === "BRACE") {
        $e.add(ce(Le.pt2, Ce));
        const ke = Math.max(Le.nStories, 1), Ge = Math.min(he + ke, $.length - 1);
        $e.add(ce(Le.pt1, $[Ge].name));
      } else $e.add(ce(Le.pt1, Ce)), $e.add(ce(Le.pt2, Ce));
    }
    for (const [Le] of G) $e.add(Le);
    for (const Le of $e) {
      const [qe, xe] = Le.split("@"), Ce = V.get(qe), he = te.get(xe);
      Ce === void 0 || he === void 0 || (O.push([
        Ce[0],
        Ce[1],
        he
      ]), _.push(Le), J.set(Le, O.length - 1));
    }
    const Ve = [], ge = [], De = [], He = [], be = /* @__PURE__ */ new Map();
    for (const Le of j) for (const [qe, xe] of ye) {
      if (!qe.startsWith(Le.name + "@")) continue;
      const Ce = xe.story, he = $.findIndex((We) => We.name === Ce);
      if (he < 0) continue;
      let ke, Ge;
      if (Le.type === "COLUMN" || Le.type === "BRACE") {
        const We = Math.max(Le.nStories, 1), Xe = Math.min(he + We, $.length - 1);
        ke = ce(Le.pt1, $[Xe].name), Ge = ce(Le.pt2, Ce);
      } else ke = ce(Le.pt1, Ce), Ge = ce(Le.pt2, Ce);
      const _e = J.get(ke), it = J.get(Ge);
      if (_e === void 0 || it === void 0 || _e === it) continue;
      const mt = Ve.length;
      if (Ve.push([
        _e,
        it
      ]), ge.push(Le.name), De.push(Le.type), He.push(Ce), be.set(mt, xe.section), xe.rigidZone > 0 && at.set(mt, [
        xe.rigidZone,
        xe.rigidZone
      ]), xe.releases.length > 0) {
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
        for (const pt of xe.releases) {
          const lt = Xe[pt];
          lt !== void 0 && (We[lt] = true);
        }
        dt.set(mt, We);
      }
    }
    const Se = /* @__PURE__ */ new Map(), Ae = /* @__PURE__ */ new Map(), Je = /* @__PURE__ */ new Map(), st = /* @__PURE__ */ new Map(), Ue = /* @__PURE__ */ new Map(), at = /* @__PURE__ */ new Map(), dt = /* @__PURE__ */ new Map(), yt = /* @__PURE__ */ new Map(), It = /* @__PURE__ */ new Map(), zt = /* @__PURE__ */ new Map(), ht = /* @__PURE__ */ new Map();
    for (const [Le, qe] of be) {
      const xe = D.get(qe);
      if (!xe) continue;
      const Ce = Y.get(xe.material);
      Ce && (Se.set(Le, Ce.E), Ae.set(Le, Ce.G));
      const he = xe.D, ke = xe.B, Ge = xe.TF, _e = xe.TW;
      let it = 0, mt = 0, We = 0, Xe = 0, pt = 0, lt = 0, bt = "rect";
      switch (xe.shape) {
        case "Concrete Rectangular":
          it = he * ke, mt = ke * he ** 3 / 12, We = he * ke ** 3 / 12, Xe = ke * he ** 3 * (1 / 3 - 0.21 * (he / ke) * (1 - he ** 4 / (12 * ke ** 4))), pt = lt = 5 / 6 * it, bt = "rect";
          break;
        case "Concrete Circle":
          it = Math.PI * he ** 2 / 4, mt = We = Math.PI * he ** 4 / 64, Xe = Math.PI * he ** 4 / 32, pt = lt = 0.9 * it, bt = "circ";
          break;
        case "Steel I/Wide Flange":
          it = 2 * ke * Ge + (he - 2 * Ge) * _e, mt = (ke * he ** 3 - (ke - _e) * (he - 2 * Ge) ** 3) / 12, We = (2 * Ge * ke ** 3 + (he - 2 * Ge) * _e ** 3) / 12, Xe = (2 * ke * Ge ** 3 + (he - 2 * Ge) * _e ** 3) / 3, pt = (he - 2 * Ge) * _e, lt = 2 * ke * Ge * 5 / 6, bt = "I";
          break;
        case "Steel Tube":
          it = he * ke - (he - 2 * _e) * (ke - 2 * _e), mt = (ke * he ** 3 - (ke - 2 * _e) * (he - 2 * _e) ** 3) / 12, We = (he * ke ** 3 - (he - 2 * _e) * (ke - 2 * _e) ** 3) / 12, Xe = 2 * _e * (he - _e) * (ke - _e) * ((he - _e) * (ke - _e)) / (he - _e + (ke - _e)), pt = 2 * he * _e, lt = 2 * ke * _e, bt = "HSS";
          break;
        case "Filled Steel Tube":
          it = he * ke, mt = ke * he ** 3 / 12, We = he * ke ** 3 / 12, Xe = 2 * _e * (he - _e) * (ke - _e) * ((he - _e) * (ke - _e)) / (he - _e + (ke - _e)), pt = 2 * he * _e + 5 / 6 * (he - 2 * _e) * (ke - 2 * _e), lt = 2 * ke * _e + 5 / 6 * (he - 2 * _e) * (ke - 2 * _e), bt = "CFT";
          break;
        case "Steel Angle": {
          const Ht = Ge || _e;
          it = Ht * (he + ke - Ht), mt = Ht * (he ** 3 + ke * Ht ** 2 + Ht ** 2 * (he - Ht)) / 12, We = Ht * (ke ** 3 + he * Ht ** 2 + Ht ** 2 * (ke - Ht)) / 12, Xe = (he + ke - Ht) * Ht ** 3 / 3, pt = he * Ht, lt = ke * Ht, bt = "L";
          break;
        }
        case "Steel Channel":
        case "Cold Formed C":
          it = 2 * ke * Ge + (he - 2 * Ge) * _e, mt = (_e * he ** 3 + 2 * ke * Ge * (he - Ge) ** 2) / 12, We = (2 * Ge * ke ** 3 + (he - 2 * Ge) * _e ** 3) / 12, Xe = (2 * ke * Ge ** 3 + (he - 2 * Ge) * _e ** 3) / 3, pt = (he - 2 * Ge) * _e, lt = 2 * ke * Ge * 5 / 6, bt = xe.shape === "Cold Formed C" ? "coldC" : "C";
          break;
        case "Steel Double Channel":
          it = 2 * (2 * ke * Ge + (he - 2 * Ge) * _e), mt = 2 * (_e * he ** 3 + 2 * ke * Ge * (he - Ge) ** 2) / 12, We = 2 * (2 * Ge * ke ** 3 + (he - 2 * Ge) * _e ** 3) / 12, Xe = 2 * (2 * ke * Ge ** 3 + (he - 2 * Ge) * _e ** 3) / 3, pt = 2 * (he - 2 * Ge) * _e, lt = 4 * ke * Ge * 5 / 6, bt = "2C";
          break;
        default:
          he > 0 && ke > 0 && (it = he * ke, mt = ke * he ** 3 / 12, We = he * ke ** 3 / 12, Xe = Math.min(he, ke) * Math.max(he, ke) ** 3 / 3 * 0.3, pt = lt = 5 / 6 * it);
          break;
      }
      xe.modI2 && (We *= xe.modI2), xe.modI3 && (mt *= xe.modI3), Je.set(Le, it), yt.set(Le, mt), It.set(Le, We), zt.set(Le, Xe), pt > 0 && st.set(Le, pt), lt > 0 && Ue.set(Le, lt), ht.set(Le, {
        type: bt,
        b: ke || void 0,
        h: he || void 0,
        d: bt === "circ" || bt === "pipe" ? he : void 0,
        tw: _e || void 0,
        tf: Ge || void 0,
        r: xe.R,
        name: qe
      });
    }
    const ut = /* @__PURE__ */ new Map();
    for (const [Le, qe] of G) {
      const xe = J.get(Le);
      if (xe === void 0) continue;
      const Ce = [
        false,
        false,
        false,
        false,
        false,
        false
      ];
      for (const he of qe) he === "UX" && (Ce[0] = true), he === "UY" && (Ce[1] = true), he === "UZ" && (Ce[2] = true), he === "RX" && (Ce[3] = true), he === "RY" && (Ce[4] = true), he === "RZ" && (Ce[5] = true);
      ut.set(xe, Ce);
    }
    const ro = /* @__PURE__ */ new Map(), Oe = /* @__PURE__ */ new Map();
    for (let Le = 0; Le < ge.length; Le++) Oe.set(`${ge[Le]}@${He[Le]}`, Le);
    for (const Le of k) {
      const qe = Oe.get(`${Le.line}@${Le.story}`);
      if (qe === void 0) continue;
      const [xe, Ce] = Ve[qe], he = O[xe], ke = O[Ce], Ge = Math.sqrt((ke[0] - he[0]) ** 2 + (ke[1] - he[1]) ** 2 + (ke[2] - he[2]) ** 2);
      if (Ge < 1e-10) continue;
      const _e = Le.val * Ge / 2;
      let it = 0, mt = 0, We = 0;
      Le.dir === "GRAV" || Le.dir === "GRAVITY" ? We = -_e : Le.dir === "X" ? it = _e : Le.dir === "Y" ? mt = _e : Le.dir === "Z" && (We = -_e);
      for (const Xe of [
        xe,
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
      const xe = D.get(qe);
      if (!xe) continue;
      const Ce = Y.get(xe.material);
      (Ce == null ? void 0 : Ce.density) && xt.set(Le, Ce.density);
    }
    return {
      units: F,
      stories: $.reverse(),
      materials: Y,
      frameSections: D,
      nodes: O,
      nodeNames: _,
      nodeNameToIdx: J,
      elements: Ve,
      elementNames: ge,
      elementTypes: De,
      elementStories: He,
      elementSections: be,
      nodeInputs: {
        supports: ut,
        loads: ro
      },
      elementInputs: {
        elasticities: Se,
        shearModuli: Ae,
        areas: Je,
        momentsOfInertiaZ: yt,
        momentsOfInertiaY: It,
        torsionalConstants: zt,
        shearAreasY: st,
        shearAreasZ: Ue,
        rigidOffsets: at,
        momentReleases: dt,
        densities: xt,
        sectionShapes: ht
      },
      sectionShapes: ht,
      grids: ne,
      info: {
        nNodes: O.length,
        nFrames: Ve.length,
        nAreas: N.length,
        title: ve
      },
      rawSections: ie
    };
  }
  function et(e) {
    return e && parseFloat(e) || 0;
  }
  function ia(e) {
    const b = /* @__PURE__ */ new Map(), F = /(\w+)\s*=\s*(?:"([^"]*?)"|(\S+))/g;
    let $;
    for (; ($ = F.exec(e)) !== null; ) b.set($[1], $[2] !== void 0 ? $[2] : $[3]);
    return b;
  }
  function Tl(e) {
    const b = e.split(/\r?\n/);
    return b.some(($) => $.trim().startsWith("TABLE:")) ? Al(b) : zl(b);
  }
  function Al(e) {
    var _a, _b, _c, _d, _e, _f;
    const b = [];
    let F = "";
    for (const te of e) {
      const O = te.trimEnd();
      O.endsWith("_") ? F += O.slice(0, -1) + " " : (F += O, b.push(F), F = "");
    }
    F && b.push(F);
    const $ = {
      force: "KN",
      length: "m"
    };
    let Y = "UX,UY,UZ,RX,RY,RZ";
    const D = /* @__PURE__ */ new Map(), V = /* @__PURE__ */ new Map(), j = /* @__PURE__ */ new Map(), N = /* @__PURE__ */ new Map(), G = [], ye = [], k = /* @__PURE__ */ new Map(), ne = /* @__PURE__ */ new Map(), ve = /* @__PURE__ */ new Map(), me = [];
    let ie = "";
    for (const te of b) {
      const O = te.trim();
      if (!O || O.startsWith(";") || O.startsWith("File ")) continue;
      if (O.startsWith("TABLE:")) {
        const J = O.match(/TABLE:\s+"(.+?)"/);
        ie = J ? J[1].toUpperCase() : "";
        continue;
      }
      if (O === "END TABLE DATA") {
        ie = "";
        continue;
      }
      const _ = ia(O);
      switch (ie) {
        case "PROGRAM CONTROL": {
          const J = _.get("CurrUnits");
          if (J) {
            const ce = J.split(",").map(($e) => $e.trim());
            ce[0] && ($.force = ce[0]), ce[1] && ($.length = ce[1]);
          }
          break;
        }
        case "MATERIAL PROPERTIES 01 - GENERAL": {
          const J = _.get("Material");
          J && !D.has(J) && D.set(J, {
            E: 0,
            nu: 0,
            G: 0
          });
          break;
        }
        case "MATERIAL PROPERTIES 02 - BASIC MECHANICAL PROPERTIES": {
          const J = _.get("Material");
          if (J) {
            const ce = D.get(J) || {
              E: 0,
              nu: 0,
              G: 0
            };
            ce.E = et(_.get("E1")), ce.G = et(_.get("G12")), ce.nu = et(_.get("U12")), ce.density = et(_.get("UnitMass")), D.set(J, ce);
          }
          break;
        }
        case "MATERIAL PROPERTIES 03A - STEEL DATA": {
          const J = _.get("Material");
          J && D.has(J) && (D.get(J).fy = et(_.get("Fy")));
          break;
        }
        case "FRAME SECTION PROPERTIES 01 - GENERAL": {
          const J = _.get("SectionName");
          J && V.set(J, {
            material: _.get("Material") || "",
            shape: _.get("Shape") || "Rectangular",
            D: et(_.get("t3")),
            B: et(_.get("t2")),
            TF: et(_.get("tf")),
            TW: et(_.get("tw")),
            A: et(_.get("Area")),
            Iz: et(_.get("I33")),
            Iy: et(_.get("I22")),
            J: et(_.get("TorsConst"))
          });
          break;
        }
        case "AREA SECTION PROPERTIES": {
          const J = _.get("Section");
          J && j.set(J, {
            material: _.get("Material") || "",
            type: _.get("Type") || "Shell",
            thickness: et(_.get("Thickness"))
          });
          break;
        }
        case "JOINT COORDINATES": {
          const J = _.get("Joint");
          if (J) {
            const ce = et(_.get("XorR")), $e = et(_.get("Y")), Te = et(_.get("Z"));
            N.set(J, [
              ce,
              $e,
              Te
            ]);
          }
          break;
        }
        case "CONNECTIVITY - FRAME": {
          const J = _.get("Frame"), ce = _.get("JointI"), $e = _.get("JointJ");
          J && ce && $e && G.push({
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
          J && ce && ne.set(J, ce);
          break;
        }
        case "AREA SECTION ASSIGNMENTS": {
          const J = _.get("Area"), ce = _.get("Section");
          J && ce && ve.set(J, ce);
          break;
        }
        case "JOINT LOADS - FORCE": {
          const J = _.get("Joint");
          J && me.push({
            joint: J,
            fx: et(_.get("F1")),
            fy: et(_.get("F2")),
            fz: et(_.get("F3")),
            mx: et(_.get("M1")),
            my: et(_.get("M2")),
            mz: et(_.get("M3"))
          });
          break;
        }
      }
    }
    return ca($, Y, D, V, j, N, G, ye, k, ne, ve, me);
  }
  function zl(e) {
    const b = {
      force: "KN",
      length: "m"
    };
    let F = "UX,UY,UZ,RX,RY,RZ";
    const $ = /* @__PURE__ */ new Map(), Y = /* @__PURE__ */ new Map(), D = /* @__PURE__ */ new Map(), V = /* @__PURE__ */ new Map(), j = [], N = [], G = /* @__PURE__ */ new Map(), ye = [];
    let k = "", ne = "";
    for (const ie of e) {
      const te = ie.trim();
      if (!te || te.startsWith(";")) continue;
      if (!ie.startsWith(" ") && !ie.startsWith("	")) {
        const J = te.toUpperCase();
        if (J === "END") break;
        J.startsWith("SHELL SECTION") ? k = "SHELL SECTION" : J.startsWith("FRAME SECTION") ? k = "FRAME SECTION" : k = J.split(/\s+/)[0];
        continue;
      }
      const O = ia(te), _ = te.split(/\s+/);
      switch (k) {
        case "SYSTEM": {
          const J = O.get("DOF");
          J && (F = J);
          const ce = O.get("LENGTH");
          ce && (b.length = ce);
          const $e = O.get("FORCE");
          $e && (b.force = $e);
          break;
        }
        case "JOINT": {
          const J = _[0];
          V.set(J, [
            et(O.get("X")),
            et(O.get("Y")),
            et(O.get("Z"))
          ]);
          break;
        }
        case "RESTRAINT": {
          const J = O.get("ADD"), ce = O.get("DOF");
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
              const ge = Ve.toUpperCase();
              (ge === "UX" || ge === "U1") && (Te[0] = true), (ge === "UY" || ge === "U2") && (Te[1] = true), (ge === "UZ" || ge === "U3") && (Te[2] = true), (ge === "RX" || ge === "R1") && (Te[3] = true), (ge === "RY" || ge === "R2") && (Te[4] = true), (ge === "RZ" || ge === "R3") && (Te[5] = true);
            }
            G.set(J, Te);
          }
          break;
        }
        case "MATERIAL": {
          const J = O.get("NAME");
          if (J) ne = J, $.set(J, {
            E: 0,
            nu: 0,
            G: 0
          });
          else if (ne) {
            const ce = $.get(ne), $e = O.get("E");
            $e && (ce.E = et($e));
            const Te = O.get("U");
            Te && (ce.nu = et(Te)), ce.G = ce.E / (2 * (1 + ce.nu));
            const Ve = O.get("M");
            Ve && (ce.density = et(Ve));
          }
          break;
        }
        case "SHELL": {
          const J = _[0], ce = O.get("J");
          O.get("SEC"), ce && N.push({
            name: J,
            joints: ce.split(",")
          });
          break;
        }
        case "SHELL SECTION": {
          const J = O.get("NAME");
          J && D.set(J, {
            material: O.get("MAT") || "",
            type: O.get("TYPE") || "Shell",
            thickness: et(O.get("TH"))
          });
          break;
        }
        case "FRAME": {
          const J = _[0], ce = O.get("J");
          if (ce) {
            const $e = ce.split(",");
            $e.length >= 2 && j.push({
              name: J,
              j1: $e[0],
              j2: $e[1]
            });
          }
          break;
        }
        case "LOAD": {
          const J = O.get("ADD");
          J && ye.push({
            joint: J,
            fx: et(O.get("UX")),
            fy: et(O.get("UY")),
            fz: et(O.get("UZ")),
            mx: et(O.get("MX")),
            my: et(O.get("MY")),
            mz: et(O.get("MZ"))
          });
          break;
        }
      }
    }
    return ca(b, F, $, Y, D, V, j, N, G, /* @__PURE__ */ new Map(), /* @__PURE__ */ new Map(), ye);
  }
  function ca(e, b, F, $, Y, D, V, j, N, G, ye, k) {
    var _a;
    const ne = [], ve = /* @__PURE__ */ new Map(), me = [];
    for (const [ge, De] of D) ve.set(ge, me.length), ne.push(ge), me.push(De);
    const ie = [], te = [], O = /* @__PURE__ */ new Map();
    for (const ge of V) {
      const De = ve.get(ge.j1), He = ve.get(ge.j2);
      if (De !== void 0 && He !== void 0) {
        const be = ie.length;
        ie.push([
          De,
          He
        ]), te.push(ge.name);
        const Se = G.get(ge.name);
        Se && O.set(be, Se);
      }
    }
    const _ = ie.length;
    for (const ge of j) {
      const De = ge.joints.map((He) => ve.get(He)).filter((He) => He !== void 0);
      if (De.length >= 3) {
        const He = ie.length;
        ie.push(De), te.push(ge.name);
        const be = ye.get(ge.name);
        be && O.set(He, be);
      }
    }
    const J = ie.length - _, ce = {
      elasticities: /* @__PURE__ */ new Map(),
      shearModuli: /* @__PURE__ */ new Map(),
      areas: /* @__PURE__ */ new Map(),
      momentsOfInertiaZ: /* @__PURE__ */ new Map(),
      momentsOfInertiaY: /* @__PURE__ */ new Map(),
      torsionalConstants: /* @__PURE__ */ new Map(),
      densities: /* @__PURE__ */ new Map(),
      thicknesses: /* @__PURE__ */ new Map(),
      poissonsRatios: /* @__PURE__ */ new Map()
    }, $e = /* @__PURE__ */ new Map(), Te = F.values().next().value || {
      E: 29e3,
      nu: 0.3,
      G: 11153
    };
    for (let ge = 0; ge < ie.length; ge++) {
      const De = O.get(ge), He = De ? $.get(De) : null, be = De ? Y.get(De) : null;
      if (He || ie[ge].length === 2) {
        const Se = He || {
          material: "",
          A: 0,
          Iz: 0,
          Iy: 0,
          J: 0,
          D: 0.3,
          B: 0.3,
          shape: "Rectangular"
        }, Ae = F.get(Se.material) || Te, Je = Ae.E || Te.E, st = Ae.nu || 0.3, Ue = Ae.G || Je / (2 * (1 + st));
        ce.elasticities.set(ge, Je), ce.shearModuli.set(ge, Ue), ce.areas.set(ge, Se.A || Se.D * Se.B), ce.momentsOfInertiaZ.set(ge, Se.Iz || Se.B * Se.D ** 3 / 12), ce.momentsOfInertiaY.set(ge, Se.Iy || Se.D * Se.B ** 3 / 12), ce.torsionalConstants.set(ge, Se.J || 0), ce.densities.set(ge, Ae.density || 0), ((_a = Se.shape) == null ? void 0 : _a.includes("Wide Flange")) || Se.shape === "I" ? $e.set(ge, {
          type: "I",
          b: Se.B,
          h: Se.D,
          name: De || "I-section"
        }) : $e.set(ge, {
          type: "rect",
          b: Se.B,
          h: Se.D
        });
      } else if (be) {
        const Se = F.get(be.material) || Te, Ae = Se.E || Te.E, Je = Se.nu || 0.2, st = Se.G || Ae / (2 * (1 + Je));
        ce.elasticities.set(ge, Ae), ce.shearModuli.set(ge, st), ce.thicknesses.set(ge, be.thickness), ce.poissonsRatios.set(ge, Je), ce.densities.set(ge, Se.density || 0);
      }
    }
    const Ve = {
      supports: /* @__PURE__ */ new Map(),
      forces: /* @__PURE__ */ new Map()
    };
    for (const [ge, De] of N) {
      const He = ve.get(ge);
      He !== void 0 && Ve.supports.set(He, De);
    }
    for (const ge of k) {
      const De = ve.get(ge.joint);
      if (De !== void 0) {
        const He = Ve.forces.get(De) || [
          0,
          0,
          0,
          0,
          0,
          0
        ];
        He[0] += ge.fx, He[1] += ge.fy, He[2] += ge.fz, He[3] += ge.mx, He[4] += ge.my, He[5] += ge.mz, Ve.forces.set(De, He);
      }
    }
    return {
      units: e,
      dof: b,
      materials: F,
      frameSections: $,
      shellSections: Y,
      nodes: me,
      nodeNames: ne,
      nodeNameToIdx: ve,
      elements: ie,
      elementNames: te,
      elementSections: O,
      nodeInputs: Ve,
      elementInputs: ce,
      sectionShapes: $e,
      info: {
        nNodes: me.length,
        nFrames: _,
        nShells: J,
        title: `SAP2000 (${_} frames, ${J} shells)`
      }
    };
  }
  function Ll(e) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j;
    const { nodes: b, elements: F, nodeInputs: $, elementInputs: Y } = e, D = e.units || {
      force: "KN",
      length: "m"
    }, V = e.title || "Awatif Model", j = [], N = (O) => j.push(O), G = () => j.push(" ");
    N(`File ${V}.$2k was saved on m/d/yy at h:mm:ss`), G(), N('TABLE:  "ACTIVE DEGREES OF FREEDOM"'), N("   UX=Yes   UY=Yes   UZ=Yes   RX=Yes   RY=Yes   RZ=Yes"), G();
    const ye = [], k = [];
    if (F.forEach((O, _) => {
      O.length === 2 ? ye.push(_) : k.push(_);
    }), ye.length > 0) {
      N('TABLE:  "CONNECTIVITY - FRAME"');
      for (const O of ye) {
        const _ = F[O];
        N(`   Frame=${O + 1}   JointI=${_[0] + 1}   JointJ=${_[1] + 1}   IsCurved=No`);
      }
      G();
    }
    if (k.length > 0) {
      N('TABLE:  "CONNECTIVITY - AREA"');
      for (const O of k) {
        const _ = F[O], J = _.map((ce, $e) => `Joint${$e + 1}=${ce + 1}`).join("   ");
        N(`   Area=${O + 1}   NumJoints=${_.length}   ${J}`);
      }
      G();
    }
    N('TABLE:  "COORDINATE SYSTEMS"'), N("   Name=GLOBAL   Type=Cartesian   X=0   Y=0   Z=0   AboutZ=0   AboutY=0   AboutX=0"), G(), N('TABLE:  "DATABASE FORMAT TYPES"'), N("   UnitsCurr=Yes   OverrideE=No"), G();
    const ne = /* @__PURE__ */ new Map(), ve = /* @__PURE__ */ new Map();
    for (const O of ye) {
      const _ = ((_a = Y.areas) == null ? void 0 : _a.get(O)) || 0, J = ((_b = Y.momentsOfInertiaZ) == null ? void 0 : _b.get(O)) || 0, ce = ((_c = Y.momentsOfInertiaY) == null ? void 0 : _c.get(O)) || 0, $e = ((_d = Y.torsionalConstants) == null ? void 0 : _d.get(O)) || 0, Te = ((_e = Y.elasticities) == null ? void 0 : _e.get(O)) || 0, Ve = `MAT_${Math.round(Te)}`, ge = `A${_.toPrecision(6)}_Iz${J.toPrecision(6)}`;
      if (!ne.has(ge)) {
        let He = 0.3, be = 0.3;
        _ > 0 && J > 0 && (He = Math.sqrt(12 * J / _), be = _ / He), ne.set(ge, {
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
        ...ne.keys()
      ].indexOf(ge) + 1;
      ve.set(O, `SEC${De}`);
    }
    if (ye.length > 0) {
      N('TABLE:  "FRAME SECTION ASSIGNMENTS"');
      for (const O of ye) {
        const _ = ve.get(O) || "SEC1";
        N(`   Frame=${O + 1}   AutoSelect=N.A.   AnalSect=${_}   MatProp=Default`);
      }
      G();
    }
    if (ne.size > 0) {
      N('TABLE:  "FRAME SECTION PROPERTIES 01 - GENERAL"');
      let O = 0;
      for (const [, _] of ne) {
        O++;
        const J = _.A * 5 / 6;
        N(`   SectionName=SEC${O}   Material=${_.matKey}   Shape=Rectangular   t3=${Et(_.h)}   t2=${Et(_.b)}   Area=${Et(_.A)}   TorsConst=${Et(_.J)}   I33=${Et(_.Iz)}   I22=${Et(_.Iy)}   I23=0   AS2=${Et(J)}   AS3=${Et(J)} _`), N("        Color=Blue   FromFile=No   AMod=1   A2Mod=1   A3Mod=1   JMod=1   I2Mod=1   I3Mod=1   MMod=1   WMod=1");
      }
      G();
    }
    const me = /* @__PURE__ */ new Map(), ie = /* @__PURE__ */ new Map();
    for (const O of k) {
      const _ = ((_f = Y.thicknesses) == null ? void 0 : _f.get(O)) || 0.1, J = ((_g = Y.elasticities) == null ? void 0 : _g.get(O)) || 0, ce = `MAT_${Math.round(J)}`, $e = `t${_.toPrecision(6)}`;
      me.has($e) || me.set($e, {
        t: _,
        matKey: ce
      });
      const Te = [
        ...me.keys()
      ].indexOf($e) + 1;
      ie.set(O, `SSEC${Te}`);
    }
    if (k.length > 0) {
      N('TABLE:  "AREA SECTION ASSIGNMENTS"');
      for (const _ of k) {
        const J = ie.get(_) || "SSEC1";
        N(`   Area=${_ + 1}   Section=${J}   MatProp=Default`);
      }
      G(), N('TABLE:  "AREA SECTION PROPERTIES"');
      let O = 0;
      for (const [, _] of me) O++, N(`   Section=SSEC${O}   Material=${_.matKey}   MatAngle=0   AreaType=Shell   Type=ShellThin   DrillDOF=Yes   Thickness=${Et(_.t)}   BendThick=${Et(_.t)}   Color=Cyan`);
      G();
    }
    N('TABLE:  "JOINT COORDINATES"');
    for (let O = 0; O < b.length; O++) {
      const _ = b[O];
      N(`   Joint=${O + 1}   CoordSys=GLOBAL   CoordType=Cartesian   XorR=${Et(_[0])}   Y=${Et(_[1])}   Z=${Et(_[2])}   SpecialJt=No`);
    }
    if (G(), $.supports && $.supports.size > 0) {
      N('TABLE:  "JOINT RESTRAINT ASSIGNMENTS"');
      for (const [O, _] of $.supports) {
        if (!_.some((ce) => ce)) continue;
        const J = (ce) => ce ? "Yes" : "No";
        N(`   Joint=${O + 1}   U1=${J(_[0])}   U2=${J(_[1])}   U3=${J(_[2])}   R1=${J(_[3])}   R2=${J(_[4])}   R3=${J(_[5])}`);
      }
      G();
    }
    if (N('TABLE:  "LOAD PATTERN DEFINITIONS"'), N("   LoadPat=DEAD   DesignType=Dead   SelfWtMult=0"), G(), N('TABLE:  "LOAD CASE DEFINITIONS"'), N('   Case=DEAD   Type=LinStatic   InitialCond=Zero   DesTypeOpt="Prog Det"   DesignType=Dead   DesActOpt="Prog Det"   DesignAct=Non-Composite   AutoType=None   RunCase=Yes'), G(), N('TABLE:  "CASE - STATIC 1 - LOAD ASSIGNMENTS"'), N('   Case=DEAD   LoadType="Load pattern"   LoadName=DEAD   LoadSF=1'), G(), $.forces && $.forces.size > 0) {
      N('TABLE:  "JOINT LOADS - FORCE"');
      for (const [O, _] of $.forces) _.some((J) => Math.abs(J) > 1e-12) && N(`   Joint=${O + 1}   LoadPat=DEAD   CoordSys=GLOBAL   F1=${Et(_[0])}   F2=${Et(_[1])}   F3=${Et(_[2])}   M1=${Et(_[3])}   M2=${Et(_[4])}   M3=${Et(_[5])}`);
      G();
    }
    const te = /* @__PURE__ */ new Map();
    for (let O = 0; O < F.length; O++) {
      const _ = ((_h = Y.elasticities) == null ? void 0 : _h.get(O)) || 0, J = ((_i = Y.shearModuli) == null ? void 0 : _i.get(O)) || 0, ce = _ > 0 && J > 0 ? Math.max(0, Math.min(0.5, _ / (2 * J) - 1)) : 0.2, $e = ((_j = Y.densities) == null ? void 0 : _j.get(O)) || 0, Te = `MAT_${Math.round(_)}`;
      te.has(Te) || te.set(Te, {
        E: _,
        nu: ce,
        G: J,
        rho: $e
      });
    }
    N('TABLE:  "MATERIAL PROPERTIES 01 - GENERAL"');
    for (const [O] of te) N(`   Material=${O}   Type=Concrete   SymType=Isotropic   TempDepend=No   Color=Green`);
    G(), N('TABLE:  "MATERIAL PROPERTIES 02 - BASIC MECHANICAL PROPERTIES"');
    for (const [O, _] of te) N(`   Material=${O}   UnitWeight=${Et(_.rho * 9.81)}   UnitMass=${Et(_.rho)}   E1=${Et(_.E)}   G12=${Et(_.G)}   U12=${Et(_.nu)}   A1=9.9E-06`);
    G(), N('TABLE:  "MATERIAL PROPERTIES 03B - CONCRETE DATA"');
    for (const [O] of te) N(`   Material=${O}   Fc=27579   eFc=27579   LtWtConc=No   SSCurveOpt=Mander   SSHysType=Takeda   SFc=0.00222   SCap=0.005   FinalSlope=-0.1   FAngle=0   DAngle=0`);
    return G(), N('TABLE:  "PROGRAM CONTROL"'), N(`   ProgramName=SAP2000   Version=24.1.0   CurrUnits="${D.force}, ${D.length}, C"   SteelCode="AISC 360-16"   ConcCode="ACI 318-19"   AlumCode="AA 2015"   ColdCode=AISI-16   RegenHinge=Yes`), G(), N("END TABLE DATA"), N(""), j.join(`\r
`);
  }
  function Et(e) {
    return e === 0 || Math.abs(e) < 1e-15 ? "0" : Math.abs(e) >= 1e6 || Math.abs(e) < 1e-3 && Math.abs(e) > 0 ? e.toExponential(8) : parseFloat(e.toPrecision(10)).toString();
  }
  function Cl(e) {
    const { e2kModel: b } = e, F = b == null ? void 0 : b.rawSections;
    return F && F.size > 0 ? Fl(F) : Rl(e);
  }
  function Fl(e, b) {
    const F = [], $ = [
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
    for (const Y of $) {
      const D = e.get(Y);
      if (!(!D || D.length === 0)) {
        F.push(`$ ${Y}`);
        for (const V of D) F.push(V);
        F.push("");
      }
    }
    for (const [Y, D] of e) if (!$.includes(Y) && D.length !== 0) {
      F.push(`$ ${Y}`);
      for (const V of D) F.push(V);
      F.push("");
    }
    return F.push("  END"), F.push("$ END OF MODEL FILE"), F.join(`\r
`);
  }
  function Rl(e) {
    var _a, _b, _c, _d;
    const { nodes: b, elements: F, nodeInputs: $, elementInputs: Y, title: D, units: V } = e, j = (V == null ? void 0 : V.force) || "TONF", N = (V == null ? void 0 : V.length) || "M", G = [], ye = (be) => Math.round(be * 1e4) / 1e4;
    G.push("$ File exported from Awatif FEM Studio"), G.push(""), G.push("$ PROGRAM INFORMATION"), G.push('  PROGRAM  "AWATIF"  VERSION "1.0.0"  '), G.push(""), G.push("$ CONTROLS"), G.push(`  UNITS  "${j}"  "${N}"  "C"  `), D && G.push(`  TITLE2  "${D}"  `), G.push("");
    const k = /* @__PURE__ */ new Set();
    b.forEach((be) => k.add(ye(be[1])));
    const ne = [
      ...k
    ].sort((be, Se) => be - Se), ve = [], me = /* @__PURE__ */ new Map();
    ve.push("Base"), me.set(ne[0], "Base");
    for (let be = 1; be < ne.length; be++) {
      const Se = `Level_${be}`;
      ve.push(Se), me.set(ne[be], Se);
    }
    G.push("$ STORIES - IN SEQUENCE FROM TOP");
    for (let be = ne.length - 1; be >= 1; be--) G.push(`  STORY "${ve[be]}"  HEIGHT ${ye(ne[be] - ne[be - 1])} MASTERSTORY "Yes"  `);
    ne.length > 0 && G.push(`  STORY "Base"  ELEV ${ne[0]} `), G.push(""), F.some((be) => be.length === 4) && (G.push("$ DIAPHRAGM NAMES"), G.push('  DIAPHRAGM "D1"    TYPE RIGID'), G.push("")), G.push("$ MATERIAL PROPERTIES");
    const te = /* @__PURE__ */ new Set();
    (_a = Y.elasticities) == null ? void 0 : _a.forEach((be) => te.add(be));
    const O = /* @__PURE__ */ new Map();
    let _ = 0;
    for (const be of te) {
      const Se = `Mat_${++_}`;
      O.set(be, Se), G.push(`  MATERIAL  "${Se}"    TYPE "Concrete"    WEIGHTPERVOLUME 2.4`), G.push(`  MATERIAL  "${Se}"    SYMTYPE "Isotropic"  E ${be}  U 0.2  A 1E-05`);
    }
    G.push(""), G.push("$ FRAME SECTIONS");
    const J = /* @__PURE__ */ new Set(), ce = /* @__PURE__ */ new Map(), $e = /* @__PURE__ */ new Map();
    F.forEach((be, Se) => {
      var _a2, _b2;
      if (be.length !== 2) return;
      const Ae = (_a2 = Y.sectionShapes) == null ? void 0 : _a2.get(Se), Je = ((_b2 = Y.elasticities) == null ? void 0 : _b2.get(Se)) ?? 0, st = O.get(Je) || "Mat_1", Ue = (Ae == null ? void 0 : Ae.h) ?? 0, at = (Ae == null ? void 0 : Ae.b) ?? 0, dt = (Ae == null ? void 0 : Ae.d) ?? 0, yt = (Ae == null ? void 0 : Ae.tf) ?? 0, It = (Ae == null ? void 0 : Ae.tw) ?? 0, zt = (Ae == null ? void 0 : Ae.type) || "rect", ht = `${zt}_${Ue}_${at}_${dt}_${yt}_${It}`;
      (Ae == null ? void 0 : Ae.name) && !$e.has(ht) && $e.set(ht, Ae.name);
      let ut = $e.get(ht);
      if (ut || (zt === "rect" ? ut = `R${ye(at * 100)}x${ye(Ue * 100)}` : zt === "circ" ? ut = `C_D${ye(dt * 100)}` : zt === "I" ? ut = `I_${ye(Ue * 100)}` : ut = `Sec_${J.size + 1}`, $e.set(ht, ut)), ce.set(Se, ut), J.has(ut)) return;
      J.add(ut);
      const Oe = {
        rect: "Concrete Rectangular",
        circ: "Concrete Circle",
        I: "Steel I/Wide Flange",
        HSS: "Steel Tube",
        pipe: "Steel Pipe",
        L: "Steel Angle",
        C: "Steel Channel",
        "2C": "Steel Double Channel"
      }[zt] || "Concrete Rectangular";
      let xt = `  FRAMESECTION  "${ut}"  MATERIAL "${st}"  SHAPE "${Oe}"`;
      Ue && (xt += `  D ${Ue}`), at && (xt += `  B ${at}`), dt && !Ue && (xt += `  D ${dt}`), yt && (xt += `  TF ${yt}`), It && (xt += `  TW ${It}`), G.push(xt);
    }), G.push("");
    const Te = /* @__PURE__ */ new Map();
    let Ve = 0;
    b.forEach((be) => {
      const Se = `${ye(be[0])},${ye(be[2])}`;
      Te.has(Se) || Te.set(Se, `${++Ve}`);
    }), G.push("$ POINT COORDINATES");
    for (const [be, Se] of Te) {
      const [Ae, Je] = be.split(",").map(Number);
      G.push(`  POINT "${Se}"  ${Ae} ${Je} `);
    }
    G.push("");
    const ge = (be) => {
      const Se = b[be], Ae = `${ye(Se[0])},${ye(Se[2])}`;
      return {
        pt: Te.get(Ae) || "1",
        story: me.get(ye(Se[1])) || "Base"
      };
    };
    G.push("$ LINE CONNECTIVITIES");
    const De = [];
    F.forEach((be, Se) => {
      if (be.length !== 2) return;
      const Ae = Pl(b, be), Je = ce.get(Se) || `Sec_${Se}`;
      if (Ae === "BEAM") {
        const st = ge(be[0]), Ue = ge(be[1]);
        G.push(`  LINE  "E${Se + 1}"  BEAM  "${st.pt}"  "${Ue.pt}"  0`), De.push(`  LINEASSIGN  "E${Se + 1}"  "${st.story}"  SECTION "${Je}"  MINNUMSTA 3 AUTOMESH "YES"  MESHATINTERSECTIONS "YES"  `);
      } else {
        const st = b[be[0]][1] <= b[be[1]][1] ? be[0] : be[1], Ue = b[be[0]][1] <= b[be[1]][1] ? be[1] : be[0];
        ge(st);
        const at = ge(Ue), dt = ye(b[st][1]), yt = ye(b[Ue][1]), It = ne.indexOf(dt), zt = ne.indexOf(yt), ht = Math.max(1, zt >= 0 && It >= 0 ? zt - It : 1);
        G.push(`  LINE  "E${Se + 1}"  ${Ae}  "${at.pt}"  "${at.pt}"  ${ht}`);
        for (let ut = 0; ut < ht; ut++) {
          const ro = zt - ut;
          ro >= 0 && ro < ve.length && De.push(`  LINEASSIGN  "E${Se + 1}"  "${ve[ro]}"  SECTION "${Je}"  MINNUMSTA 3 AUTOMESH "YES"  MESHATINTERSECTIONS "YES"  `);
        }
      }
    }), G.push(""), G.push("$ POINT ASSIGNS"), (_b = $.supports) == null ? void 0 : _b.forEach((be, Se) => {
      const Ae = [];
      if (be[0] && Ae.push("UX"), be[1] && Ae.push("UY"), be[2] && Ae.push("UZ"), be[3] && Ae.push("RX"), be[4] && Ae.push("RY"), be[5] && Ae.push("RZ"), Ae.length > 0) {
        const Je = ge(Se);
        G.push(`  POINTASSIGN  "${Je.pt}"  "${Je.story}"  RESTRAINT "${Ae.join(" ")}"  `);
      }
    }), G.push(""), G.push("$ LINE ASSIGNS"), De.forEach((be) => G.push(be)), G.push("");
    const He = [];
    if (F.forEach((be, Se) => {
      if (be.length === 4) {
        const Ae = b[be[0]], Je = b[be[1]], st = b[be[2]], Ue = [
          Je[0] - Ae[0],
          Je[1] - Ae[1],
          Je[2] - Ae[2]
        ], at = [
          st[0] - Ae[0],
          st[1] - Ae[1],
          st[2] - Ae[2]
        ], dt = Math.abs(Ue[2] * at[0] - Ue[0] * at[2]), yt = Math.sqrt((Ue[1] * at[2] - Ue[2] * at[1]) ** 2 + dt ** 2 + (Ue[0] * at[1] - Ue[1] * at[0]) ** 2), It = yt > 1e-10 && dt / yt < 0.5;
        He.push({
          idx: Se,
          el: be,
          isWall: It
        });
      }
    }), He.some((be) => !be.isWall)) {
      G.push("$ SLAB PROPERTIES");
      const be = ((_c = Y.thicknesses) == null ? void 0 : _c.values().next().value) ?? 0.15;
      G.push(`  SHELLPROP  "Losa"  PROPTYPE  "Slab"  MATERIAL "${O.values().next().value || "Mat_1"}"  MODELINGTYPE "ShellThin"  SLABTYPE "Slab"  SLABTHICKNESS ${be} `), G.push("");
    }
    if (He.some((be) => be.isWall)) {
      G.push("$ WALL PROPERTIES");
      const be = ((_d = Y.thicknesses) == null ? void 0 : _d.values().next().value) ?? 0.2;
      G.push(`  SHELLPROP  "Muro"  PROPTYPE  "Wall"  MATERIAL "${O.values().next().value || "Mat_1"}"  MODELINGTYPE "ShellThick"  WALLTHICKNESS ${be} `), G.push("");
    }
    if (He.length > 0) {
      G.push("$ AREA CONNECTIVITIES");
      const be = [];
      He.forEach((Se, Ae) => {
        const { el: Je, isWall: st } = Se, Ue = st ? `W${Ae + 1}` : `F${Ae + 1}`, at = st ? "PANEL" : "FLOOR", dt = Je.map((yt) => ge(yt));
        if (st) {
          const yt = b[Je[0]][1] <= b[Je[2]][1] ? 0 : 2, It = b[Je[1]][1] <= b[Je[3]][1] ? 1 : 3;
          G.push(`  AREA "${Ue}"  ${at}  4  "${dt[yt].pt}"  "${dt[It].pt}"  "${dt[It].pt}"  "${dt[yt].pt}"  1  1  0  0  `);
          const zt = dt[yt === 0 ? 2 : 0].story;
          be.push(`  AREAASSIGN  "${Ue}"  "${zt}"  SECTION "Muro"  OBJMESHTYPE "DEFAULT"  ADDRESTRAINT "Yes"  CARDINALPOINT "MIDDLE"  TRANSFORMSTIFFNESSFOROFFSETS "No"  `);
        } else G.push(`  AREA "${Ue}"  ${at}  4  "${dt[0].pt}"  "${dt[1].pt}"  "${dt[2].pt}"  "${dt[3].pt}"  0  0  0  0  `), be.push(`  AREAASSIGN  "${Ue}"  "${dt[0].story}"  SECTION "Losa"  DIAPH  "D1"  OBJMESHTYPE "DEFAULT"  ADDRESTRAINT "Yes"  CARDINALPOINT "TOP"  TRANSFORMSTIFFNESSFOROFFSETS "No"  `);
      }), G.push(""), G.push("$ AREA ASSIGNS"), be.forEach((Se) => G.push(Se)), G.push("");
    }
    return G.push("$ LOAD PATTERNS"), G.push('  LOADPATTERN "Dead"  TYPE  "Dead"  SELFWEIGHT  1'), G.push('  LOADPATTERN "Live"  TYPE  "Live"  SELFWEIGHT  0'), G.push(""), $.loads && $.loads.size > 0 && (G.push("$ POINT OBJECT LOADS"), $.loads.forEach((be, Se) => {
      const [Ae, Je, st] = be, Ue = ge(Se);
      Math.abs(Ae) > 1e-10 && G.push(`  POINTLOAD  "${Ue.pt}"  "${Ue.story}"  "Dead"  TYPE "FORCE"  FX ${Ae}`), Math.abs(Je) > 1e-10 && G.push(`  POINTLOAD  "${Ue.pt}"  "${Ue.story}"  "Dead"  TYPE "FORCE"  FY ${Je}`), Math.abs(st) > 1e-10 && G.push(`  POINTLOAD  "${Ue.pt}"  "${Ue.story}"  "Dead"  TYPE "FORCE"  FZ ${st}`);
    }), G.push("")), G.push("  END"), G.push("$ END OF MODEL FILE"), G.join(`\r
`);
  }
  function Pl(e, b) {
    const F = e[b[0]], $ = e[b[1]], Y = Math.abs($[1] - F[1]), D = Math.sqrt(($[0] - F[0]) ** 2 + ($[2] - F[2]) ** 2), V = Y > D * 0.5;
    return V && D > 0.01 ? "BRACE" : V ? "COLUMN" : "BEAM";
  }
  function Nl(e) {
    var _a, _b;
    const { nodes: b, elements: F, nodeInputs: $, elementInputs: Y } = e, D = [];
    return D.push("# OpenSeesPy model exported from Awatif FEM Studio"), D.push(`# ${b.length} nodes, ${F.length} elements`), D.push(""), D.push("import openseespy.opensees as ops"), D.push(""), D.push("ops.wipe()"), D.push("ops.model('basic', '-ndm', 3, '-ndf', 6)"), D.push(""), D.push("# --- Nodes ---"), b.forEach((V, j) => {
      D.push(`ops.node(${j + 1}, ${V[0]}, ${V[1]}, ${V[2]})`);
    }), D.push(""), D.push("# --- Boundary Conditions ---"), (_a = $.supports) == null ? void 0 : _a.forEach((V, j) => {
      const N = V.map((G) => G ? 1 : 0).join(", ");
      D.push(`ops.fix(${j + 1}, ${N})`);
    }), D.push(""), D.push("# --- Geometric Transformations ---"), D.push("ops.geomTransf('Linear', 1, 0.0, 0.0, 1.0)  # beams (vecxz = Z)"), D.push("ops.geomTransf('Linear', 2, -1.0, 0.0, 0.0)  # columns (vecxz = -X)"), D.push(""), D.push("# --- Elements (elasticBeamColumn) ---"), F.forEach((V, j) => {
      var _a2, _b2, _c, _d, _e, _f;
      if (V.length !== 2) return;
      const N = b[V[0]], G = b[V[1]], k = Math.abs(G[2] - N[2]) > Math.max(Math.abs(G[0] - N[0]), Math.abs(G[1] - N[1])) ? 2 : 1, ne = ((_a2 = Y.areas) == null ? void 0 : _a2.get(j)) ?? 1, ve = ((_b2 = Y.elasticities) == null ? void 0 : _b2.get(j)) ?? 2e5, me = ((_c = Y.shearModuli) == null ? void 0 : _c.get(j)) ?? 8e4, ie = ((_d = Y.torsionalConstants) == null ? void 0 : _d.get(j)) ?? 1, te = ((_e = Y.momentsOfInertiaY) == null ? void 0 : _e.get(j)) ?? 1, O = ((_f = Y.momentsOfInertiaZ) == null ? void 0 : _f.get(j)) ?? 1;
      D.push(`ops.element('elasticBeamColumn', ${j + 1}, ${V[0] + 1}, ${V[1] + 1}, ${ne}, ${ve}, ${me}, ${ie}, ${te}, ${O}, ${k})`);
    }), D.push(""), $.loads && $.loads.size > 0 && (D.push("# --- Loads ---"), D.push("ops.timeSeries('Linear', 1)"), D.push("ops.pattern('Plain', 1, 1)"), $.loads.forEach((V, j) => {
      const N = V.map((G) => G).join(", ");
      D.push(`ops.load(${j + 1}, ${N})`);
    }), D.push("")), D.push("# --- Analysis ---"), D.push("ops.system('BandGeneral')"), D.push("ops.numberer('RCM')"), D.push("ops.constraints('Plain')"), D.push("ops.integrator('LoadControl', 1.0)"), D.push("ops.algorithm('Linear')"), D.push("ops.analysis('Static')"), D.push("ops.analyze(1)"), D.push(""), D.push("# --- Results ---"), D.push('print("\\n=== Displacements ===")'), b.forEach((V, j) => {
      D.push(`print(f"Node {${j + 1}}: {ops.nodeDisp(${j + 1})}")`);
    }), D.push(""), D.push('print("\\n=== Reactions ===")'), D.push("ops.reactions()"), (_b = $.supports) == null ? void 0 : _b.forEach((V, j) => {
      D.push(`print(f"Node {${j + 1}}: {ops.nodeReaction(${j + 1})}")`);
    }), D.join(`
`);
  }
  function Ol(e) {
    var _a, _b;
    const { nodes: b, elements: F, nodeInputs: $, elementInputs: Y } = e, D = [];
    return D.push("# OpenSees Tcl model exported from Awatif FEM Studio"), D.push(`# ${b.length} nodes, ${F.length} elements`), D.push(""), D.push("wipe"), D.push("model basic -ndm 3 -ndf 6"), D.push(""), D.push("# --- Nodes ---"), b.forEach((V, j) => {
      D.push(`node ${j + 1} ${V[0]} ${V[1]} ${V[2]}`);
    }), D.push(""), D.push("# --- Boundary Conditions ---"), (_a = $.supports) == null ? void 0 : _a.forEach((V, j) => {
      const N = V.map((G) => G ? 1 : 0).join(" ");
      D.push(`fix ${j + 1} ${N}`);
    }), D.push(""), D.push("# --- Geometric Transformations ---"), D.push("geomTransf Linear 1 0.0 0.0 1.0"), D.push("geomTransf Linear 2 -1.0 0.0 0.0"), D.push(""), D.push("# --- Elements ---"), F.forEach((V, j) => {
      var _a2, _b2, _c, _d, _e, _f;
      if (V.length !== 2) return;
      const N = b[V[0]], G = b[V[1]], k = Math.abs(G[2] - N[2]) > Math.max(Math.abs(G[0] - N[0]), Math.abs(G[1] - N[1])) ? 2 : 1, ne = ((_a2 = Y.areas) == null ? void 0 : _a2.get(j)) ?? 1, ve = ((_b2 = Y.elasticities) == null ? void 0 : _b2.get(j)) ?? 2e5, me = ((_c = Y.shearModuli) == null ? void 0 : _c.get(j)) ?? 8e4, ie = ((_d = Y.torsionalConstants) == null ? void 0 : _d.get(j)) ?? 1, te = ((_e = Y.momentsOfInertiaY) == null ? void 0 : _e.get(j)) ?? 1, O = ((_f = Y.momentsOfInertiaZ) == null ? void 0 : _f.get(j)) ?? 1;
      D.push(`element elasticBeamColumn ${j + 1} ${V[0] + 1} ${V[1] + 1} ${ne} ${ve} ${me} ${ie} ${te} ${O} ${k}`);
    }), D.push(""), $.loads && $.loads.size > 0 && (D.push("# --- Loads ---"), D.push("timeSeries Linear 1"), D.push("pattern Plain 1 1 {"), $.loads.forEach((V, j) => {
      const N = V.map((G) => G).join(" ");
      D.push(`  load ${j + 1} ${N}`);
    }), D.push("}"), D.push("")), D.push("# --- Analysis ---"), D.push("system BandGeneral"), D.push("numberer RCM"), D.push("constraints Plain"), D.push("integrator LoadControl 1.0"), D.push("algorithm Linear"), D.push("analysis Static"), D.push("analyze 1"), D.push(""), D.push("# --- Results ---"), D.push('puts "\\n=== Displacements ==="'), b.forEach((V, j) => {
      D.push(`puts "Node ${j + 1}: [nodeDisp ${j + 1}]"`);
    }), D.push('puts "\\n=== Reactions ==="'), D.push("reactions"), (_b = $.supports) == null ? void 0 : _b.forEach((V, j) => {
      D.push(`puts "Node ${j + 1}: [nodeReaction ${j + 1}]"`);
    }), D.join(`
`);
  }
  function ql(e) {
    const b = [], F = [], $ = /* @__PURE__ */ new Map(), Y = /* @__PURE__ */ new Map(), D = /* @__PURE__ */ new Map(), V = /* @__PURE__ */ new Map(), j = /* @__PURE__ */ new Map(), N = /* @__PURE__ */ new Map(), G = /* @__PURE__ */ new Map(), ye = /* @__PURE__ */ new Map(), k = /* @__PURE__ */ new Map(), ne = /* @__PURE__ */ new Map();
    for (const ve of e.split(/\r?\n/)) {
      const me = ve.trim(), ie = me.match(/ops\.node\(\s*(\d+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)/);
      if (ie) {
        const J = parseInt(ie[1]), ce = b.length;
        b.push([
          parseFloat(ie[2]),
          parseFloat(ie[3]),
          parseFloat(ie[4])
        ]), k.set(J, ce);
        continue;
      }
      const te = me.match(/ops\.fix\(\s*(\d+)\s*,\s*(\d)\s*,\s*(\d)\s*,\s*(\d)\s*,\s*(\d)\s*,\s*(\d)\s*,\s*(\d)/);
      if (te) {
        const J = parseInt(te[1]), ce = k.get(J);
        ce !== void 0 && $.set(ce, [
          te[2] === "1",
          te[3] === "1",
          te[4] === "1",
          te[5] === "1",
          te[6] === "1",
          te[7] === "1"
        ]);
        continue;
      }
      const O = me.match(/ops\.element\(\s*'elasticBeamColumn'\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)/);
      if (O) {
        const J = parseInt(O[1]), ce = k.get(parseInt(O[2])), $e = k.get(parseInt(O[3]));
        if (ce !== void 0 && $e !== void 0) {
          const Te = F.length;
          F.push([
            ce,
            $e
          ]), ne.set(J, Te), j.set(Te, parseFloat(O[4])), D.set(Te, parseFloat(O[5])), V.set(Te, parseFloat(O[6])), ye.set(Te, parseFloat(O[7])), N.set(Te, parseFloat(O[8])), G.set(Te, parseFloat(O[9]));
        }
        continue;
      }
      const _ = me.match(/ops\.load\(\s*(\d+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)/);
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
      elements: F,
      nodeInputs: {
        supports: $,
        loads: Y
      },
      elementInputs: {
        elasticities: D,
        shearModuli: V,
        areas: j,
        momentsOfInertiaY: N,
        momentsOfInertiaZ: G,
        torsionalConstants: ye
      }
    };
  }
  function _l(e) {
    const b = [], F = [], $ = /* @__PURE__ */ new Map(), Y = /* @__PURE__ */ new Map(), D = /* @__PURE__ */ new Map(), V = /* @__PURE__ */ new Map(), j = /* @__PURE__ */ new Map(), N = /* @__PURE__ */ new Map(), G = /* @__PURE__ */ new Map(), ye = /* @__PURE__ */ new Map(), k = /* @__PURE__ */ new Map();
    for (const ne of e.split(/\r?\n/)) {
      const ve = ne.trim();
      if (ve.startsWith("#") || ve.startsWith("//")) continue;
      const me = ve.split(/\s+/);
      if (me[0] === "node" && me.length >= 5) {
        const ie = parseInt(me[1]), te = b.length;
        b.push([
          parseFloat(me[2]),
          parseFloat(me[3]),
          parseFloat(me[4])
        ]), k.set(ie, te);
        continue;
      }
      if (me[0] === "fix" && me.length >= 8) {
        const ie = k.get(parseInt(me[1]));
        ie !== void 0 && $.set(ie, [
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
        const ie = k.get(parseInt(me[3])), te = k.get(parseInt(me[4]));
        if (ie !== void 0 && te !== void 0) {
          const O = F.length;
          F.push([
            ie,
            te
          ]), j.set(O, parseFloat(me[5])), D.set(O, parseFloat(me[6])), V.set(O, parseFloat(me[7])), ye.set(O, parseFloat(me[8])), N.set(O, parseFloat(me[9])), G.set(O, parseFloat(me[10]));
        }
        continue;
      }
      if (me[0] === "load" && me.length >= 8) {
        const ie = k.get(parseInt(me[1]));
        ie !== void 0 && Y.set(ie, [
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
      elements: F,
      nodeInputs: {
        supports: $,
        loads: Y
      },
      elementInputs: {
        elasticities: D,
        shearModuli: V,
        areas: j,
        momentsOfInertiaY: N,
        momentsOfInertiaZ: G,
        torsionalConstants: ye
      }
    };
  }
  function Ut(e) {
    const b = [];
    let F = 0, $ = false, Y = "";
    for (let D = 0; D < e.length; D++) {
      const V = e[D];
      if (V === "'" && (D === 0 || e[D - 1] !== "\\")) {
        $ = !$, Y += V;
        continue;
      }
      if ($) {
        Y += V;
        continue;
      }
      if (V === "(") {
        F++, Y += V;
        continue;
      }
      if (V === ")") {
        F--, Y += V;
        continue;
      }
      if (V === "," && F === 0) {
        b.push(Y.trim()), Y = "";
        continue;
      }
      Y += V;
    }
    return Y.trim() && b.push(Y.trim()), b;
  }
  function da(e, b) {
    const F = Ut(e);
    if (b < F.length) {
      let $ = F[b].trim();
      return $.startsWith("'") && $.endsWith("'") && ($ = $.slice(1, -1)), $ === "$" ? null : $;
    }
    return null;
  }
  function Bl(e) {
    const b = {
      schema: "",
      project: "",
      app: ""
    }, F = {}, $ = {}, Y = e.match(/FILE_SCHEMA\s*\(\s*\(\s*'([^']*)'/i);
    Y && (b.schema = Y[1]);
    const D = /^#(\d+)\s*=\s*([A-Z][A-Z0-9_]*)\s*\(([\s\S]*?)\)\s*;\s*$/gm;
    let V;
    for (; (V = D.exec(e)) !== null; ) {
      const j = parseInt(V[1]), N = V[2].toUpperCase();
      F[j] = {
        id: j,
        type: N,
        args: V[3]
      }, $[N] || ($[N] = []), $[N].push(j);
    }
    if ($.IFCPROJECT) {
      const j = F[$.IFCPROJECT[0]];
      if (j) {
        const N = da(j.args, 2);
        N && (b.project = N);
      }
    }
    return {
      meta: b,
      entities: F,
      typeIndex: $
    };
  }
  function Wt(e, b) {
    const F = b.match(/#(\d+)/);
    return F && e[parseInt(F[1])] || null;
  }
  function pa(e, b) {
    const F = Ut(b.args), $ = Wt(e, F[0]), Y = $ ? Dl(e, $) : [
      0,
      0,
      0
    ];
    let D = [
      0,
      0,
      1
    ], V = [
      1,
      0,
      0
    ];
    if (F[1] && F[1] !== "$") {
      const j = Wt(e, F[1]);
      j && (D = aa(e, j));
    }
    if (F[2] && F[2] !== "$") {
      const j = Wt(e, F[2]);
      j && (V = aa(e, j));
    }
    return {
      origin: Y,
      dirZ: D,
      dirX: V
    };
  }
  function Dl(e, b) {
    return b.args.replace(/[()]/g, "").split(",").map(($) => parseFloat($.trim())).filter(($) => !isNaN($));
  }
  function aa(e, b) {
    return b.args.replace(/[()]/g, "").split(",").map(($) => parseFloat($.trim())).filter(($) => !isNaN($));
  }
  function fa(e, b) {
    const F = Ut(b.args), $ = Wt(e, F[1]);
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
    if ($ && (Y = pa(e, $)), F[0] && F[0] !== "$") {
      const D = Wt(e, F[0]);
      if (D && D.type === "IFCLOCALPLACEMENT") {
        const V = fa(e, D), j = es(Y.origin, V.dirX, Qn(V.dirZ, V.dirX), V.dirZ);
        Y.origin = [
          V.origin[0] + j[0],
          V.origin[1] + j[1],
          V.origin[2] + j[2]
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
  function es(e, b, F, $) {
    return [
      e[0] * b[0] + e[1] * F[0] + e[2] * $[0],
      e[0] * b[1] + e[1] * F[1] + e[2] * $[1],
      e[0] * b[2] + e[1] * F[2] + e[2] * $[2]
    ];
  }
  const Hl = 0.01;
  function jl(e) {
    const b = Bl(e), { entities: F, typeIndex: $ } = b, Y = [], D = [], V = /* @__PURE__ */ new Map();
    V.set("Hormigon", {
      E: 2132888792e-2,
      nu: 0.2,
      rho: 2.4
    }), V.set("Acero", {
      E: 2e8,
      nu: 0.3,
      rho: 7.85
    });
    let j = 0, N = 0;
    function G(te, O, _) {
      for (const J of Y) {
        const ce = J.x - te, $e = J.y - O, Te = J.z - _;
        if (Math.sqrt(ce * ce + $e * $e + Te * Te) < Hl) return J.id;
      }
      return Y.push({
        id: j,
        x: te,
        y: O,
        z: _
      }), j++;
    }
    function ye(te) {
      const O = da(te.args, 2) || "", _ = $.IFCRELASSOCIATESMATERIAL || [];
      for (const ce of _) {
        const $e = F[ce];
        if (!$e) continue;
        const Te = Ut($e.args);
        if ((Te[4] || Te[3] || "").includes(`#${te.id}`)) {
          const ge = Te[5] || Te[4] || "", De = Wt(F, ge);
          if (De) return k(De);
        }
      }
      const J = O.match(/(\d+)\s*[xX×]\s*(\d+)/);
      return J ? {
        b: parseFloat(J[1]) / 100,
        h: parseFloat(J[2]) / 100,
        name: O
      } : {
        b: 0.3,
        h: 0.3,
        name: O || "Default"
      };
    }
    function k(te) {
      const O = te.type;
      if (O === "IFCRECTANGLEPROFILEDEF") {
        const _ = Ut(te.args), J = (_[1] || "").replace(/'/g, ""), ce = parseFloat(_[3]) || 0.3, $e = parseFloat(_[4]) || 0.3;
        return {
          b: ce,
          h: $e,
          name: J
        };
      }
      if (O === "IFCMATERIALPROFILE") {
        const _ = Ut(te.args), J = _[2] || _[1] || "", ce = Wt(F, J);
        if (ce) return k(ce);
      }
      if (O === "IFCMATERIALPROFILESET") {
        const _ = Ut(te.args), ce = (_[2] || _[1] || "").match(/#(\d+)/);
        if (ce) {
          const $e = F[parseInt(ce[1])];
          if ($e) return k($e);
        }
      }
      if (O === "IFCMATERIALPROFILESETUSAGE") {
        const J = Ut(te.args)[0], ce = Wt(F, J);
        if (ce) return k(ce);
      }
      return {
        b: 0.3,
        h: 0.3,
        name: "Unknown"
      };
    }
    function ne(te, O, _, J) {
      const ce = $[te] || [];
      for (const $e of ce) {
        const Te = F[$e];
        if (!Te) continue;
        const Ve = Ut(Te.args), ge = Ve[5] || Ve[4] || "", De = Wt(F, ge);
        if (!De) continue;
        const He = fa(F, De), be = ye(Te);
        let Se = J, Ae = null, Je = null;
        const st = Ve[6] || Ve[5] || "", Ue = Wt(F, st);
        if (Ue) {
          const ut = $n(F, Ue);
          ut && (Se = ut.depth || J, Ae = ut.origin, Je = ut.direction);
        }
        const at = Ae ? Ae[0] : He.origin[0], dt = Ae ? Ae[1] : He.origin[1], yt = Ae ? Ae[2] : He.origin[2], It = Je || (_ === "Z" ? He.dirZ : He.dirX), zt = G(at, dt, yt), ht = G(at + It[0] * Se, dt + It[1] * Se, yt + It[2] * Se);
        D.push({
          id: N++,
          type: "frame",
          nodeIds: [
            zt,
            ht
          ],
          category: O,
          sectionName: be.name,
          b: be.b,
          h: be.h,
          material: "Hormigon",
          expressID: $e
        });
      }
    }
    ne("IFCCOLUMN", "column", "Z", 3), ne("IFCBEAM", "beam", "X", 5), ne("IFCMEMBER", "diagonal", "X", 4), ne("IFCPILE", "pile", "Z", 10), ne("IFCSTAIRFLIGHT", "stair", "X", 3), ne("IFCRAMPFLIGHT", "ramp", "X", 4);
    function ve(te, O, _) {
      const J = $[te] || [];
      for (const ce of J) {
        const $e = F[ce];
        if (!$e) continue;
        const Te = Ut($e.args), Ve = Te[5] || Te[4] || "";
        if (!Wt(F, Ve)) continue;
        let De = _;
        const He = Te[6] || Te[5] || "", be = Wt(F, He);
        be && (De = Wl(F, be) || _);
        const Se = O === "slab" ? `Losa e=${(De * 100).toFixed(0)}cm` : O === "wall" ? `Muro e=${(De * 100).toFixed(0)}cm` : O === "footing" ? `Zapata e=${(De * 100).toFixed(0)}cm` : `${O} e=${(De * 100).toFixed(0)}cm`;
        D.push({
          id: N++,
          type: "shell",
          nodeIds: [],
          category: O,
          sectionName: Se,
          b: De,
          h: De,
          material: "Hormigon",
          expressID: ce
        });
      }
    }
    ve("IFCSLAB", "slab", 0.15), ve("IFCWALL", "wall", 0.2), ve("IFCWALLSTANDARDCASE", "wall", 0.2), ve("IFCFOOTING", "footing", 0.5), ve("IFCROOF", "slab", 0.12);
    const me = [], ie = $.IFCBUILDINGSTOREY || [];
    for (const te of ie) {
      const O = F[te];
      if (!O) continue;
      const _ = Ut(O.args), J = (_[2] || "").replace(/'/g, ""), ce = parseFloat(_[9]) || 0;
      me.push({
        name: J,
        elevation: ce
      });
    }
    return me.sort((te, O) => te.elevation - O.elevation), {
      nodes: Y,
      elements: D,
      materials: V,
      levels: me,
      projectName: b.meta.project,
      schema: b.meta.schema
    };
  }
  function $n(e, b) {
    const F = Ut(b.args);
    for (const $ of F) {
      const Y = $.match(/#(\d+)/g) || [];
      for (const D of Y) {
        const V = parseInt(D.replace("#", "")), j = e[V];
        if (j) {
          if (j.type === "IFCEXTRUDEDAREASOLID") {
            const N = Ut(j.args), G = parseFloat(N[3]) || 0, ye = Wt(e, N[1]);
            let k = [
              0,
              0,
              0
            ];
            ye && (k = pa(e, ye).origin);
            const ne = Wt(e, N[2]);
            let ve = [
              0,
              0,
              1
            ];
            if (ne && ne.type === "IFCDIRECTION") {
              const me = ne.args.match(/[-+]?\d*\.?\d+(?:[eE][-+]?\d+)?/g);
              me && me.length >= 3 && (ve = me.map(Number));
            }
            return {
              depth: G,
              origin: k,
              direction: ve
            };
          }
          if (j.type === "IFCSHAPEREPRESENTATION") {
            const N = $n(e, j);
            if (N) return N;
          }
          if (j.type === "IFCMAPPEDITEM") {
            const N = Ut(j.args), G = Wt(e, N[0]);
            if (G && G.type === "IFCREPRESENTATIONMAP") {
              const ye = Ut(G.args), k = Wt(e, ye[1]);
              if (k) {
                const ne = $n(e, k);
                if (ne) return ne;
              }
            }
          }
        }
      }
    }
    return null;
  }
  function Wl(e, b) {
    const F = $n(e, b);
    return F ? F.depth : null;
  }
  const ua = [
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
  ], ma = [
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
  ], ba = /* @__PURE__ */ new Map();
  for (const [e, b] of ua) ba.set(e, b);
  function Gl(e) {
    return ba.get(e) ?? "other";
  }
  new Set(ma);
  async function Yl(e, b) {
    var _a, _b;
    const F = window.WebIFC;
    if (!F) throw new Error("web-ifc no disponible. Verifica que web-ifc-api-iife.js se carg\xF3.");
    const $ = new F.IfcAPI(), Y = window.location.pathname.replace(/\/[^/]*$/, "/");
    $.SetWasmPath(Y), await $.Init();
    const D = $.OpenModel(new Uint8Array(b)), V = /* @__PURE__ */ new Map(), j = /* @__PURE__ */ new Map(), N = {
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
    for (const [ve] of ua) {
      const me = Gl(ve);
      try {
        const ie = $.GetLineIDsWithType(D, ve);
        for (let te = 0; te < ie.size(); te++) {
          const O = ie.get(te);
          V.set(O, me);
          let _ = "";
          try {
            const J = $.GetLine(D, O);
            _ = ((_a = J == null ? void 0 : J.Name) == null ? void 0 : _a.value) || ((_b = J == null ? void 0 : J.Description) == null ? void 0 : _b.value) || "";
          } catch {
          }
          j.set(O, {
            expressID: O,
            category: me,
            name: _,
            typeName: N[ve] || "Otro"
          });
        }
      } catch {
      }
    }
    const G = /* @__PURE__ */ new Map();
    for (const ve of ma) {
      const me = new sn();
      me.name = `ifc-${ve}`, e.add(me), G.set(ve, me);
    }
    const ye = new Ua();
    let k = 0;
    const ne = new Ks({
      color: 13421772,
      transparent: true,
      opacity: 0.9,
      side: Zs
    });
    return $.StreamAllMeshes(D, (ve) => {
      const me = V.get(ve.expressID) ?? "other", ie = G.get(me), te = ve.geometries;
      for (let O = 0; O < te.size(); O++) {
        const _ = te.get(O), J = $.GetGeometry(D, _.geometryExpressID), ce = $.GetVertexArray(J.GetVertexData(), J.GetVertexDataSize()), $e = $.GetIndexArray(J.GetIndexData(), J.GetIndexDataSize()), Te = new to(), Ve = new Float32Array(ce.length / 2), ge = new Float32Array(ce.length / 2);
        for (let Ae = 0; Ae < ce.length; Ae += 6) {
          const Je = Ae / 2;
          Ve[Je] = ce[Ae], Ve[Je + 1] = ce[Ae + 1], Ve[Je + 2] = ce[Ae + 2], ge[Je] = ce[Ae + 3], ge[Je + 1] = ce[Ae + 4], ge[Je + 2] = ce[Ae + 5];
        }
        Te.setAttribute("position", new xn(Ve, 3)), Te.setAttribute("normal", new xn(ge, 3)), Te.setIndex(new xn(new Uint32Array($e), 1));
        const De = new Xa();
        De.fromArray(_.flatTransformation);
        let He;
        const be = _.color;
        be && (be.x !== 1 || be.y !== 1 || be.z !== 1) ? He = new Ks({
          color: new Ka(be.x, be.y, be.z),
          transparent: be.w < 1,
          opacity: be.w,
          side: Zs
        }) : He = ne, He._origOpacity = He.opacity;
        const Se = new ra(Te, He);
        Se.applyMatrix4(De), Se.userData.expressID = ve.expressID, Se.userData.category = me, ie.add(Se), ye.expandByObject(Se), k++, J.delete();
      }
    }), $.CloseModel(D), {
      meshCount: k,
      bbox: ye,
      detailCategories: G,
      elementInfo: j
    };
  }
  la = Jo.state(false);
  er = function(e) {
    e.nodeInputs || (e.nodeInputs = Jo.state({})), e.elementInputs || (e.elementInputs = Jo.state({})), e.deformOutputs || (e.deformOutputs = Jo.state({})), e.analyzeOutputs || (e.analyzeOutputs = Jo.state({}));
    let b = "tonf", F = "m", $ = Fo(b, F), Y = {
      forceId: "kgf",
      lengthId: "cm",
      label: "kgf/cm\xB2"
    };
    const D = {
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
    let N = false;
    const G = /* @__PURE__ */ new Set(), ye = /* @__PURE__ */ new Map();
    let k = "", ne = {}, ve = null, me = "", ie = [], te = [], O = [], _ = /* @__PURE__ */ new Set(), J = /* @__PURE__ */ new Set(), ce = /* @__PURE__ */ new Set(), $e = /* @__PURE__ */ new Map(), Te = /* @__PURE__ */ new Map(), Ve = null, ge = [], De = 0.2, He = 2, be = 2, Se = false, Ae = 2, Je = "x", st = /* @__PURE__ */ new Set(), Ue = true, at = 0.15, dt = 2, yt = 2, It = /* @__PURE__ */ new Set(), zt = false, ht = "perimeter";
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
    }), Oe = {
      colMat: 0,
      vigaMat: 0,
      colShape: 0,
      fc: 20594,
      steelColType: 0,
      steelVigaType: 0,
      perFloor: []
    };
    let xt = 0, Le = 3, qe = false, xe = 0, Ce = null, he = 0, ke = [], Ge = 1, _e = true;
    const it = fl();
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
      const t = Ze();
      t && t.scene.remove(bt), bt.traverse((o) => {
        if (o.geometry && o.geometry.dispose(), o.material) {
          const n = o.material;
          n.map && n.map.dispose(), n.dispose();
        }
      }), bt = null;
    }
    function ss(t, o, n, l, a) {
      Ht();
      const d = Ze();
      if (!d) return;
      bt = new sn(), bt.name = "refGrid";
      const s = Math.min(...t), r = Math.max(...t), p = Math.min(...o), i = Math.max(...o), c = Math.max(...n), m = r - s || 1, E = i - p || 1, w = 3359829, y = 2241348;
      for (const g of n) {
        for (const I of o) {
          const A = new to().setFromPoints([
            new Ne(s, g, I),
            new Ne(r, g, I)
          ]), T = new jo({
            color: w,
            dashSize: m * 0.015,
            gapSize: m * 0.01,
            transparent: true,
            opacity: 0.25
          }), B = new Lo(A, T);
          B.computeLineDistances(), B.renderOrder = -10, bt.add(B);
        }
        for (const I of t) {
          const A = new to().setFromPoints([
            new Ne(I, g, p),
            new Ne(I, g, i)
          ]), T = new jo({
            color: w,
            dashSize: E * 0.015,
            gapSize: E * 0.01,
            transparent: true,
            opacity: 0.25
          }), B = new Lo(A, T);
          B.computeLineDistances(), B.renderOrder = -10, bt.add(B);
        }
      }
      for (const g of t) for (const I of o) {
        const A = new to().setFromPoints([
          new Ne(g, 0, I),
          new Ne(g, c, I)
        ]), T = new jo({
          color: y,
          dashSize: c * 0.01,
          gapSize: c * 8e-3,
          transparent: true,
          opacity: 0.15
        }), B = new Lo(A, T);
        B.computeLineDistances(), B.renderOrder = -10, bt.add(B);
      }
      const f = Math.min(m, E) * 0.015;
      for (const g of n) for (const I of t) for (const A of o) {
        const T = [
          new Ne(I - f, g, A),
          new Ne(I + f, g, A),
          new Ne(I, g, A - f),
          new Ne(I, g, A + f)
        ], B = new to().setFromPoints(T), H = new Go({
          color: 5596791,
          transparent: true,
          opacity: 0.4
        }), x = new Wo(B, H);
        x.renderOrder = -5, bt.add(x);
      }
      bt.traverse((g) => {
        g.material && (Array.isArray(g.material) ? g.material.forEach((I) => {
          I.clippingPlanes = [];
        }) : g.material.clippingPlanes = []);
      }), d.scene.add(bt), d.render();
    }
    let Rt = null;
    function as() {
      if (!Rt) return;
      const t = Ze();
      t && t.scene.remove(Rt), Rt.traverse((o) => {
        if (o.geometry && o.geometry.dispose(), o.material) {
          const n = o.material;
          n.map && n.map.dispose(), n.dispose();
        }
      }), Rt = null;
    }
    function Xo(t, o, n, l, a) {
      as();
      const d = Ze();
      if (!d) return;
      Rt = new sn(), Rt.name = "gridAxes";
      const s = Math.min(...t), r = Math.max(...t), p = Math.min(...o), i = Math.max(...o), c = r - s || 1, m = i - p || 1, E = Math.max(c, m), w = E * 0.08, y = l || t.map((x, u) => String.fromCharCode(65 + u)), f = a || o.map((x, u) => String(u + 1)), g = E * 0.018, I = o.length <= 1, A = 8947848;
      for (let x = 0; x < t.length; x++) {
        const u = t[x];
        if (I) {
          const S = -w - g * 1.5;
          In(u, 0, 0, u, 0, S + g, A, Rt), kn(y[x] || `${x}`, u, 0, S, g, Rt);
        } else {
          const S = p - w - g * 1.5;
          In(u, p, 0, u, S + g, 0, A, Rt), kn(y[x] || `${x}`, u, S, 0, g, Rt);
        }
      }
      if (!I) for (let x = 0; x < o.length; x++) {
        const u = o[x], S = s - w - g * 1.5;
        In(s, u, 0, S + g, u, 0, A, Rt), kn(f[x] || `${x}`, S, u, 0, g, Rt);
      }
      const T = g * 1.8, B = w * 1.2, H = w * 1.2;
      for (let x = 0; x < t.length - 1; x++) {
        const u = t[x], S = t[x + 1], L = Math.abs(S - u), R = (u + S) / 2, W = `${L.toFixed(2)} m`;
        I ? (Sn(W, R, 0, -B, T, Rt), En(u, 0, -B * 0.7, S, 0, -B * 0.7, 16763904, Rt)) : (Sn(W, R, p - H, 0, T, Rt), En(u, p - H * 0.7, 0, S, p - H * 0.7, 0, 16763904, Rt));
      }
      if (!I) for (let x = 0; x < o.length - 1; x++) {
        const u = o[x], S = o[x + 1], L = Math.abs(S - u), R = (u + S) / 2, W = `${L.toFixed(2)} m`;
        Sn(W, s - B, R, 0, T, Rt), En(s - B * 0.7, u, 0, s - B * 0.7, S, 0, 16763904, Rt);
      }
      Rt.traverse((x) => {
        x.material && (Array.isArray(x.material) ? x.material.forEach((u) => {
          u.clippingPlanes = [];
        }) : x.material.clippingPlanes = []);
      }), d.scene.add(Rt), d.render();
    }
    let Gt = null;
    function ls() {
      if (!Gt) return;
      const t = Ze();
      t && t.scene.remove(Gt), Gt.traverse((o) => {
        if (o.geometry && o.geometry.dispose(), o.material) {
          const n = o.material;
          n.map && n.map.dispose(), n.dispose();
        }
      }), Gt = null;
    }
    function wn(t, o, n) {
      if (ls(), t.length === 0) return;
      const l = Ze();
      if (!l) return;
      Gt = new sn(), Gt.name = "storyLevels";
      const a = Math.min(...o), d = Math.max(...o), s = Math.min(...n), r = Math.max(...n), p = d - a || 1, i = r - s || 1, c = Math.max(p, i), m = c * 0.06, E = n.length <= 1, w = 4491519, y = c * 0.015;
      for (const f of t) {
        const g = f.elev;
        E ? (Ko(a - m, 0, g, d + m, 0, g, w, Gt), rs(f.name, d + m * 1.5, 0, g, y, Gt)) : (Ko(a, s, g, d, s, g, w, Gt), Ko(d, s, g, d, r, g, w, Gt), Ko(d, r, g, a, r, g, w, Gt), Ko(a, r, g, a, s, g, w, Gt), rs(f.name, a - m * 1.5, s, g, y, Gt));
      }
      Gt.traverse((f) => {
        f.material && (Array.isArray(f.material) ? f.material.forEach((g) => {
          g.clippingPlanes = [];
        }) : f.material.clippingPlanes = []);
      }), l.scene.add(Gt), l.render();
    }
    function Ko(t, o, n, l, a, d, s, r) {
      const p = Math.sqrt((l - t) ** 2 + (a - o) ** 2 + (d - n) ** 2) || 1, i = new to().setFromPoints([
        new Ne(t, o, n),
        new Ne(l, a, d)
      ]), c = new jo({
        color: s,
        dashSize: p * 0.02,
        gapSize: p * 0.01,
        transparent: true,
        opacity: 0.5
      }), m = new Lo(i, c);
      m.computeLineDistances(), m.renderOrder = 50, r.add(m);
    }
    function rs(t, o, n, l, a, d) {
      const s = document.createElement("canvas"), r = 512, p = 64;
      s.width = r, s.height = p;
      const i = s.getContext("2d");
      i.fillStyle = "rgba(30,60,120,0.8)";
      const c = 8;
      i.beginPath(), i.moveTo(c, 0), i.lineTo(r - c, 0), i.quadraticCurveTo(r, 0, r, c), i.lineTo(r, p - c), i.quadraticCurveTo(r, p, r - c, p), i.lineTo(c, p), i.quadraticCurveTo(0, p, 0, p - c), i.lineTo(0, c), i.quadraticCurveTo(0, 0, c, 0), i.closePath(), i.fill(), i.fillStyle = "#88bbff", i.font = "bold 38px monospace", i.textAlign = "center", i.textBaseline = "middle", i.fillText(t, r / 2, p / 2);
      const m = new Vn(s);
      m.needsUpdate = true;
      const E = new fn({
        map: m,
        depthTest: false,
        transparent: true
      }), w = new pn(E);
      w.position.set(o, n, l), w.scale.set(a * 8, a, 1), w.renderOrder = 101, d.add(w);
    }
    function Sn(t, o, n, l, a, d) {
      const s = document.createElement("canvas"), r = 256, p = 64;
      s.width = r, s.height = p;
      const i = s.getContext("2d");
      i.fillStyle = "rgba(0,0,0,0.75)";
      const c = 8;
      i.beginPath(), i.moveTo(c, 0), i.lineTo(r - c, 0), i.quadraticCurveTo(r, 0, r, c), i.lineTo(r, p - c), i.quadraticCurveTo(r, p, r - c, p), i.lineTo(c, p), i.quadraticCurveTo(0, p, 0, p - c), i.lineTo(0, c), i.quadraticCurveTo(0, 0, c, 0), i.closePath(), i.fill(), i.fillStyle = "#ffcc00", i.font = "bold 36px monospace", i.textAlign = "center", i.textBaseline = "middle", i.fillText(t, r / 2, p / 2);
      const m = new nl(s);
      m.minFilter = sl;
      const E = new fn({
        map: m,
        transparent: true,
        depthTest: false
      }), w = new pn(E);
      w.position.set(o, n, l);
      const y = r / p;
      w.scale.set(a * y, a, 1), w.renderOrder = 999, d.add(w);
    }
    function En(t, o, n, l, a, d, s, r) {
      const p = [
        new Ne(t, o, n),
        new Ne(l, a, d)
      ], i = new to().setFromPoints(p), c = new Go({
        color: s,
        transparent: true,
        opacity: 0.6,
        depthTest: false
      }), m = new Lo(i, c);
      m.renderOrder = 998, r.add(m);
    }
    function In(t, o, n, l, a, d, s, r) {
      const p = new to().setFromPoints([
        new Ne(t, o, n),
        new Ne(l, a, d)
      ]), i = new jo({
        color: s,
        dashSize: 0.15 * Math.max(Math.abs(l - t), Math.abs(a - o), Math.abs(d - n), 0.1),
        gapSize: 0.1 * Math.max(Math.abs(l - t), Math.abs(a - o), Math.abs(d - n), 0.1),
        transparent: true,
        opacity: 0.6
      }), c = new Lo(p, i);
      c.computeLineDistances(), r.add(c);
    }
    function kn(t, o, n, l, a, d) {
      const s = document.createElement("canvas"), r = 128;
      s.width = r, s.height = r;
      const p = s.getContext("2d");
      p.beginPath(), p.arc(r / 2, r / 2, r * 0.42, 0, Math.PI * 2), p.fillStyle = "rgba(255,255,255,0.9)", p.fill(), p.lineWidth = r * 0.04, p.strokeStyle = "#555", p.stroke(), p.fillStyle = "#222", p.font = `bold ${r * 0.45}px Arial`, p.textAlign = "center", p.textBaseline = "middle", p.fillText(t, r / 2, r / 2 + r * 0.02);
      const i = new Vn(s);
      i.needsUpdate = true;
      const c = new fn({
        map: i,
        depthTest: false,
        transparent: true
      }), m = new pn(c);
      m.position.set(o, n, l);
      const E = a * 2;
      m.scale.set(E, E, 1), m.renderOrder = 100, d.add(m);
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
        ]), e.nodes.val = l, console.log(`Node ${a} at (${t}, ${o}, ${n})`), Qe(), a;
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
          const d = l > t ? l - 1 : l, s = a > t ? a - 1 : a;
          return l === t || a === t ? null : [
            d,
            s
          ];
        }).filter((l) => l !== null);
        e.nodes.val = o, e.elements.val = n, console.log(`Node ${t} removed`), Qe();
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
        ]), e.elements.val = n, console.log(`Element ${l}: node ${t} -> node ${o}`), Qe(), l;
      },
      removeFrame(t) {
        const o = [
          ...e.elements.val
        ];
        if (t < 0 || t >= o.length) {
          console.error(`Element ${t} not found`);
          return;
        }
        o.splice(t, 1), e.elements.val = o, console.log(`Element ${t} removed`), Qe();
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
        ]), n.supports = l, e.nodeInputs.val = n, console.log(`Support added at node ${t}`), Qe();
      },
      removeSupport(t) {
        if (!e.nodeInputs) return;
        const o = {
          ...e.nodeInputs.val
        }, n = new Map(o.supports || []);
        n.delete(t), o.supports = n, e.nodeInputs.val = o, console.log(`Support removed from node ${t}`), Qe();
      },
      addLoad(t, o) {
        if (!e.nodeInputs) return;
        const n = {
          ...e.nodeInputs.val
        }, l = new Map(n.loads || []);
        l.set(t, o), n.loads = l, e.nodeInputs.val = n, console.log(`Load added at node ${t}: [${o.join(", ")}]`), Qe();
      },
      removeLoad(t) {
        if (!e.nodeInputs) return;
        const o = {
          ...e.nodeInputs.val
        }, n = new Map(o.loads || []);
        n.delete(t), o.loads = n, e.nodeInputs.val = o, console.log(`Load removed from node ${t}`), Qe();
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
        const n = ze.querySelectorAll("input[type=checkbox]");
        for (const l of n) {
          const a = ((_b = (_a2 = l.closest("label")) == null ? void 0 : _a2.textContent) == null ? void 0 : _b.trim()) || ((_d = (_c = l.parentElement) == null ? void 0 : _c.textContent) == null ? void 0 : _d.trim()) || "", d = l.id || "";
          if (a.toLowerCase().includes(t.toLowerCase()) || d.toLowerCase().includes(t.toLowerCase())) {
            const s = l;
            return s.checked = o !== void 0 ? o : !s.checked, s.dispatchEvent(new Event("change", {
              bubbles: true
            })), console.log(`${a || d}: ${s.checked}`), s.checked;
          }
        }
        console.log(`Setting "${t}" not found. Use cad.settings() to list.`);
      },
      settings() {
        const t = ze.querySelectorAll("input[type=checkbox]"), o = {};
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
        const d = [
          0
        ];
        for (const s of n || [
          3
        ]) d.push(d[d.length - 1] + s);
        ss(l, a, d), We = l.map((s, r) => ({
          label: String.fromCharCode(65 + r),
          coord: s
        })), Xe = a.map((s, r) => ({
          label: `${r + 1}`,
          coord: s
        })), pt = d[d.length - 1], lt = d.map((s, r) => ({
          label: r === 0 ? "Base" : `P${r}`,
          elev: s
        })), Xo(We.map((s) => s.coord), Xe.map((s) => s.coord), pt, We.map((s) => s.label), Xe.map((s) => s.label));
        {
          const s = d.map((r, p) => ({
            name: p === 0 ? "Base" : `P${p}`,
            height: p > 0 ? r - d[p - 1] : 0,
            elev: r
          }));
          wn(s, We.map((r) => r.coord), Xe.map((r) => r.coord));
        }
        return console.log(`RefGrid: X=[${l}] Z=[${a}] Y=[${d}]`), {
          xCoords: l,
          zCoords: a,
          yLevels: d
        };
      },
      build(t) {
        var _a2;
        if (We.length === 0 || lt.length < 2) {
          console.log("Error: call cad.refgrid() first to define axes and levels");
          return;
        }
        const o = (t == null ? void 0 : t.col) || "40x40", n = (t == null ? void 0 : t.viga) || "30x40", l = (t == null ? void 0 : t.fc) || 210, [a, d] = o.split("x").map((q) => parseFloat(q) / 100), [s, r] = n.split("x").map((q) => parseFloat(q) / 100), p = We.map((q) => q.coord), i = Xe.map((q) => q.coord), c = lt.map((q) => q.elev), m = p.length, E = i.length, w = c.length, y = w - 1, f = [], g = {};
        for (let q = 0; q < w; q++) for (let fe = 0; fe < E; fe++) for (let oe = 0; oe < m; oe++) g[`${oe},${fe},${q}`] = f.length, f.push([
          p[oe],
          i[fe],
          c[q]
        ]);
        const I = [], A = /* @__PURE__ */ new Set(), T = /* @__PURE__ */ new Set(), B = /* @__PURE__ */ new Map();
        for (let q = 0; q < y; q++) for (let fe = 0; fe < E; fe++) for (let oe = 0; oe < m; oe++) {
          const pe = I.length;
          I.push([
            g[`${oe},${fe},${q}`],
            g[`${oe},${fe},${q + 1}`]
          ]), A.add(pe), B.set(pe, q);
        }
        for (let q = 1; q < w; q++) for (let fe = 0; fe < E; fe++) for (let oe = 0; oe < m - 1; oe++) {
          const pe = I.length;
          I.push([
            g[`${oe},${fe},${q}`],
            g[`${oe + 1},${fe},${q}`]
          ]), T.add(pe), B.set(pe, q - 1);
        }
        for (let q = 1; q < w; q++) for (let fe = 0; fe < m; fe++) for (let oe = 0; oe < E - 1; oe++) {
          const pe = I.length;
          I.push([
            g[`${fe},${oe},${q}`],
            g[`${fe},${oe + 1},${q}`]
          ]), T.add(pe), B.set(pe, q - 1);
        }
        const H = ((_a2 = t == null ? void 0 : t.braces) == null ? void 0 : _a2.toLowerCase()) || "", x = /* @__PURE__ */ new Set();
        if (H) {
          const q = H === "all" || H === "x" || H === "perimeter", fe = H === "all" || H === "y" || H === "perimeter";
          for (let oe = 0; oe < y; oe++) {
            if (q) for (let pe = 0; pe < E; pe++) {
              if (H === "perimeter" && pe !== 0 && pe !== E - 1) continue;
              const Q = Math.floor((m - 1) / 2);
              for (let ue = 0; ue < m - 1; ue++) {
                if (H === "perimeter" && ue !== Q) continue;
                const we = I.length;
                I.push([
                  g[`${ue},${pe},${oe}`],
                  g[`${ue + 1},${pe},${oe + 1}`]
                ]), x.add(we), B.set(we, oe);
                const se = I.length;
                I.push([
                  g[`${ue + 1},${pe},${oe}`],
                  g[`${ue},${pe},${oe + 1}`]
                ]), x.add(se), B.set(se, oe);
              }
            }
            if (fe) for (let pe = 0; pe < m; pe++) {
              if (H === "perimeter" && pe !== 0 && pe !== m - 1) continue;
              const Q = Math.floor((E - 1) / 2);
              for (let ue = 0; ue < E - 1; ue++) {
                if (H === "perimeter" && ue !== Q) continue;
                const we = I.length;
                I.push([
                  g[`${pe},${ue},${oe}`],
                  g[`${pe},${ue + 1},${oe + 1}`]
                ]), x.add(we), B.set(we, oe);
                const se = I.length;
                I.push([
                  g[`${pe},${ue + 1},${oe}`],
                  g[`${pe},${ue},${oe + 1}`]
                ]), x.add(se), B.set(se, oe);
              }
            }
          }
        }
        const u = 15100 * Math.sqrt(l) * 10, S = u / (2 * (1 + 0.2)), L = a * d, R = a * d ** 3 / 12, W = d * a ** 3 / 12, h = a * d * (a ** 2 + d ** 2) / 12, M = s * r, v = s * r ** 3 / 12, C = r * s ** 3 / 12, X = s * r * (s ** 2 + r ** 2) / 12, U = /* @__PURE__ */ new Map(), ae = /* @__PURE__ */ new Map(), Z = /* @__PURE__ */ new Map(), K = /* @__PURE__ */ new Map(), de = /* @__PURE__ */ new Map(), re = /* @__PURE__ */ new Map(), Ie = /* @__PURE__ */ new Map();
        for (let q = 0; q < I.length; q++) U.set(q, u), ae.set(q, S), A.has(q) ? (Z.set(q, L), K.set(q, R), de.set(q, W), re.set(q, h), Ie.set(q, {
          type: "rect",
          b: a,
          h: d,
          name: `COL${o}`
        })) : x.has(q) ? (Z.set(q, L), K.set(q, R), de.set(q, W), re.set(q, h), Ie.set(q, {
          type: "rect",
          b: a,
          h: d,
          name: `BR${o}`
        })) : (Z.set(q, M), K.set(q, v), de.set(q, C), re.set(q, X), Ie.set(q, {
          type: "rect",
          b: s,
          h: r,
          name: `V${n}`
        }));
        const Pe = /* @__PURE__ */ new Map();
        for (let q = 0; q < E; q++) for (let fe = 0; fe < m; fe++) Pe.set(g[`${fe},${q},0`], [
          true,
          true,
          true,
          true,
          true,
          true
        ]);
        return e.nodes.val = f, e.elements.val = I, e.nodeInputs.val = {
          supports: Pe,
          loads: /* @__PURE__ */ new Map()
        }, e.elementInputs.val = {
          elasticities: U,
          shearModuli: ae,
          areas: Z,
          momentsOfInertiaZ: K,
          momentsOfInertiaY: de,
          torsionalConstants: re,
          sectionShapes: Ie
        }, _ = A, J = T, $e = B, console.log(`Built: ${f.length} nodes, ${I.length} elements (${A.size} cols, ${T.size} beams, ${x.size} braces)`), console.log(`  Col: ${o}, Viga: ${n}, f'c=${l}${H ? `, braces=${H}` : ""}`), {
          nodes: f.length,
          elements: I.length
        };
      },
      addCol(t, o, n) {
        var _a2, _b, _c, _d, _e2, _f;
        const l = We.findIndex((y) => y.label === t), a = Xe.findIndex((y) => y.label === o);
        if (l < 0) {
          console.log(`Axis "${t}" not found. Available: ${We.map((y) => y.label)}`);
          return;
        }
        if (a < 0) {
          console.log(`Axis "${o}" not found. Available: ${Xe.map((y) => y.label)}`);
          return;
        }
        const d = We[l].coord, s = Xe[a].coord, r = [
          ...e.nodes.val
        ], p = [
          ...((_a2 = e.elements) == null ? void 0 : _a2.val) || []
        ];
        (_b = e.elementInputs) == null ? void 0 : _b.val;
        const i = (y) => {
          const f = r.findIndex((g) => Math.abs(g[0] - d) < 1e-3 && Math.abs(g[1] - s) < 1e-3 && Math.abs(g[2] - y) < 1e-3);
          return f >= 0 ? f : (r.push([
            d,
            s,
            y
          ]), r.length - 1);
        }, c = n ? [
          lt.findIndex((y) => y.label === n)
        ] : Array.from({
          length: lt.length - 1
        }, (y, f) => f + 1), m = new Map(((_d = (_c = e.nodeInputs) == null ? void 0 : _c.val) == null ? void 0 : _d.supports) || []), E = i(lt[0].elev);
        m.has(E) || m.set(E, [
          true,
          true,
          true,
          true,
          true,
          true
        ]);
        let w = 0;
        for (const y of c) {
          if (y < 1 || y >= lt.length) continue;
          const f = i(lt[y - 1].elev), g = i(lt[y].elev);
          p.push([
            f,
            g
          ]), _.add(p.length - 1), $e.set(p.length - 1, y - 1), w++;
        }
        return e.nodes.val = r, e.elements.val = p, e.nodeInputs.val = {
          ...e.nodeInputs.val,
          supports: m,
          loads: ((_f = (_e2 = e.nodeInputs) == null ? void 0 : _e2.val) == null ? void 0 : _f.loads) || /* @__PURE__ */ new Map()
        }, console.log(`Added ${w} column(s) at ${t}-${o}${n ? ` story ${n}` : ""}`), w;
      },
      addBeam(t, o, n, l, a) {
        var _a2;
        const d = We.findIndex((B) => B.label === t), s = Xe.findIndex((B) => B.label === o), r = We.findIndex((B) => B.label === n), p = Xe.findIndex((B) => B.label === l), i = lt.findIndex((B) => B.label === a);
        if (d < 0 || s < 0 || r < 0 || p < 0) {
          console.log("Axis not found");
          return;
        }
        if (i < 1) {
          console.log(`Story "${a}" not found. Available: ${lt.filter((B) => B.label !== "Base").map((B) => B.label)}`);
          return;
        }
        const c = We[d].coord, m = Xe[s].coord, E = We[r].coord, w = Xe[p].coord, y = lt[i].elev, f = [
          ...e.nodes.val
        ], g = [
          ...((_a2 = e.elements) == null ? void 0 : _a2.val) || []
        ], I = (B, H, x) => {
          const u = f.findIndex((S) => Math.abs(S[0] - B) < 1e-3 && Math.abs(S[1] - H) < 1e-3 && Math.abs(S[2] - x) < 1e-3);
          return u >= 0 ? u : (f.push([
            B,
            H,
            x
          ]), f.length - 1);
        }, A = I(c, m, y), T = I(E, w, y);
        return g.push([
          A,
          T
        ]), J.add(g.length - 1), $e.set(g.length - 1, i - 1), e.nodes.val = f, e.elements.val = g, console.log(`Added beam ${t}-${o} \u2192 ${n}-${l} at ${a}`), g.length - 1;
      },
      addBrace(t, o, n, l, a, d) {
        var _a2;
        const s = We.findIndex((u) => u.label === t), r = Xe.findIndex((u) => u.label === o), p = lt.findIndex((u) => u.label === n), i = We.findIndex((u) => u.label === l), c = Xe.findIndex((u) => u.label === a), m = lt.findIndex((u) => u.label === d);
        if (s < 0 || r < 0 || p < 0) {
          console.log(`Point 1 not found: ${t}-${o}@${n}`);
          return;
        }
        if (i < 0 || c < 0 || m < 0) {
          console.log(`Point 2 not found: ${l}-${a}@${d}`);
          return;
        }
        const E = We[s].coord, w = Xe[r].coord, y = lt[p].elev, f = We[i].coord, g = Xe[c].coord, I = lt[m].elev, A = [
          ...e.nodes.val
        ], T = [
          ...((_a2 = e.elements) == null ? void 0 : _a2.val) || []
        ], B = (u, S, L) => {
          const R = A.findIndex((W) => Math.abs(W[0] - u) < 1e-3 && Math.abs(W[1] - S) < 1e-3 && Math.abs(W[2] - L) < 1e-3);
          return R >= 0 ? R : (A.push([
            u,
            S,
            L
          ]), A.length - 1);
        }, H = B(E, w, y), x = B(f, g, I);
        return T.push([
          H,
          x
        ]), $e.set(T.length - 1, Math.min(p, m)), e.nodes.val = A, e.elements.val = T, console.log(`Added brace ${t}-${o}@${n} \u2192 ${l}-${a}@${d}`), T.length - 1;
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
        ], a = (t == null ? void 0 : t.col) || "40x40", d = (t == null ? void 0 : t.viga) || "30x40", s = (t == null ? void 0 : t.fc) || 210, [r, p] = a.split("x").map((Q) => parseFloat(Q) / 100), [i, c] = d.split("x").map((Q) => parseFloat(Q) / 100), m = [
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
        const y = m.length, f = E.length, g = w.length, I = l.length, A = [], T = {};
        for (let Q = 0; Q < g; Q++) for (let ue = 0; ue < f; ue++) for (let we = 0; we < y; we++) T[`${we},${Q},${ue}`] = A.length, A.push([
          m[we],
          w[Q],
          E[ue]
        ]);
        const B = [], H = /* @__PURE__ */ new Set(), x = /* @__PURE__ */ new Set(), u = /* @__PURE__ */ new Map();
        for (let Q = 0; Q < I; Q++) for (let ue = 0; ue < f; ue++) for (let we = 0; we < y; we++) {
          const se = B.length;
          B.push([
            T[`${we},${Q},${ue}`],
            T[`${we},${Q + 1},${ue}`]
          ]), H.add(se), u.set(se, Q);
        }
        for (let Q = 1; Q < g; Q++) for (let ue = 0; ue < f; ue++) for (let we = 0; we < y - 1; we++) {
          const se = B.length;
          B.push([
            T[`${we},${Q},${ue}`],
            T[`${we + 1},${Q},${ue}`]
          ]), x.add(se), u.set(se, Q - 1);
        }
        for (let Q = 1; Q < g; Q++) for (let ue = 0; ue < y; ue++) for (let we = 0; we < f - 1; we++) {
          const se = B.length;
          B.push([
            T[`${ue},${Q},${we}`],
            T[`${ue},${Q},${we + 1}`]
          ]), x.add(se), u.set(se, Q - 1);
        }
        const L = 15100 * Math.sqrt(s) * 10, R = L / (2 * (1 + 0.2)), W = r * p, h = r * p ** 3 / 12, M = p * r ** 3 / 12, v = r * p * (r ** 2 + p ** 2) / 12, C = i * c, X = i * c ** 3 / 12, U = c * i ** 3 / 12, ae = i * c * (i ** 2 + c ** 2) / 12, Z = /* @__PURE__ */ new Map(), K = /* @__PURE__ */ new Map(), de = /* @__PURE__ */ new Map(), re = /* @__PURE__ */ new Map(), Ie = /* @__PURE__ */ new Map(), Pe = /* @__PURE__ */ new Map(), q = /* @__PURE__ */ new Map();
        for (let Q = 0; Q < B.length; Q++) Z.set(Q, L), K.set(Q, R), H.has(Q) ? (de.set(Q, W), re.set(Q, h), Ie.set(Q, M), Pe.set(Q, v), q.set(Q, {
          type: "rect",
          b: r,
          h: p,
          name: `COL${a}`
        })) : (de.set(Q, C), re.set(Q, X), Ie.set(Q, U), Pe.set(Q, ae), q.set(Q, {
          type: "rect",
          b: i,
          h: c,
          name: `V${d}`
        }));
        const fe = /* @__PURE__ */ new Map();
        for (let Q = 0; Q < f; Q++) for (let ue = 0; ue < y; ue++) fe.set(T[`${ue},0,${Q}`], [
          true,
          true,
          true,
          true,
          true,
          true
        ]);
        e.nodes.val = A, e.elements.val = B, e.nodeInputs.val = {
          supports: fe,
          loads: /* @__PURE__ */ new Map()
        }, e.elementInputs.val = {
          elasticities: Z,
          shearModuli: K,
          areas: de,
          momentsOfInertiaZ: re,
          momentsOfInertiaY: Ie,
          torsionalConstants: Pe,
          sectionShapes: q
        }, _ = H, J = x, $e = u, We = m.map((Q, ue) => ({
          label: String.fromCharCode(65 + ue),
          coord: Q
        })), Xe = E.map((Q, ue) => ({
          label: `${ue + 1}`,
          coord: Q
        })), pt = w[w.length - 1], Xo(We.map((Q) => Q.coord), Xe.map((Q) => Q.coord), pt, We.map((Q) => Q.label), Xe.map((Q) => Q.label));
        {
          const Q = w.map((ue, we) => ({
            name: we === 0 ? "Base" : `P${we}`,
            height: we > 0 ? ue - w[we - 1] : 0,
            elev: ue
          }));
          wn(Q, m, E);
        }
        const oe = ze.querySelector("#cad3d-axis-buttons");
        if (oe) {
          oe.style.display = "flex";
          const Q = We.map((we) => we.label), ue = Xe.map((we) => we.label);
          oe.innerHTML = '<span style="font-size:10px;color:var(--cad-heading);margin-right:4px">Ejes:</span>';
          for (const we of Q) oe.innerHTML += `<button class="axis-btn" data-axis="x" data-label="${we}">${we}</button>`;
          oe.innerHTML += '<span style="margin:0 2px">|</span>';
          for (const we of ue) oe.innerHTML += `<button class="axis-btn" data-axis="y" data-label="${we}">${we}</button>`;
        }
        const pe = ze.querySelector("#cad3d-floor-buttons");
        if (pe) {
          pe.style.display = "flex", pe.innerHTML = '<span style="font-size:10px;color:var(--cad-heading);margin-right:4px">Planta:</span>';
          for (let Q = 0; Q < I; Q++) pe.innerHTML += `<button class="floor-btn" data-floor="${Q}">P${Q + 1}</button>`;
        }
        return ss(m, E, w), Qe(), console.log(`Model3D: ${A.length}n ${B.length}e | ${y}x${f} grid, ${I} floors | COL${a} V${d} f'c=${s}`), {
          nodes: A.length,
          elements: B.length,
          columns: H.size,
          beams: x.size
        };
      },
      clear() {
        e.nodes.val = [], e.elements.val = [], e.nodeInputs && (e.nodeInputs.val = {}), e.elementInputs && (e.elementInputs.val = {}), _ = /* @__PURE__ */ new Set(), J = /* @__PURE__ */ new Set(), $e = /* @__PURE__ */ new Map(), Te = /* @__PURE__ */ new Map(), We = [], Xe = [], pt = 0, as(), ls(), Ht();
        const t = ze.querySelector("#cad3d-axis-buttons");
        t && (t.style.display = "none", t.innerHTML = ""), console.log("Model cleared"), Qe();
      },
      frame(t, o, n = 0, l = 0) {
        Ke.clear();
        const a = [];
        n > 0 && a.push(-n);
        let d = 0;
        a.push(d);
        for (const y of t) d += y, a.push(d);
        l > 0 && a.push(d + l);
        const s = [
          0
        ];
        let r = 0;
        for (const y of o) r += y, s.push(r);
        const p = (y) => n > 0 && y === 0 || l > 0 && y === a.length - 1, i = {}, c = [];
        for (let y = 0; y < s.length; y++) for (let f = 0; f < a.length; f++) y === 0 && p(f) || (i[`${f},${y}`] = c.length, c.push([
          a[f],
          0,
          s[y]
        ]));
        const m = [];
        _ = /* @__PURE__ */ new Set(), J = /* @__PURE__ */ new Set();
        for (let y = 0; y < s.length - 1; y++) for (let f = 0; f < a.length; f++) p(f) || (_.add(m.length), m.push([
          i[`${f},${y}`],
          i[`${f},${y + 1}`]
        ]));
        for (let y = 1; y < s.length; y++) for (let f = 0; f < a.length - 1; f++) J.add(m.length), m.push([
          i[`${f},${y}`],
          i[`${f + 1},${y}`]
        ]);
        const E = /* @__PURE__ */ new Map(), w = mt();
        for (let y = 0; y < a.length; y++) {
          if (p(y)) continue;
          const f = `${y},0`;
          i[f] !== void 0 && E.set(i[f], [
            ...w
          ]);
        }
        return e.nodes.val = c, e.elements.val = m, e.nodeInputs && (e.nodeInputs.val = {
          supports: E
        }), We = [
          ...a
        ], Xe = [
          0
        ], pt = s[s.length - 1] || 0, setTimeout(() => {
          Lt(), Xo(a, [
            0
          ]), On(), qn();
        }, 50), Qe(), {
          nodes: c.length,
          elements: m.length
        };
      },
      building(t, o, n, l = 3, a = 0, d = 0, s = 0, r = 0, p = 1) {
        Ke.clear();
        const i = [];
        a > 0 && i.push(-a), i.push(0);
        for (const u of t) i.push(i[i.length - 1] + u);
        d > 0 && i.push(i[i.length - 1] + d);
        const c = [];
        s > 0 && c.push(-s), c.push(0);
        for (const u of o) c.push(c[c.length - 1] + u);
        r > 0 && c.push(c[c.length - 1] + r);
        const m = [
          0
        ];
        for (const u of n) m.push(m[m.length - 1] + u);
        const E = (u) => a > 0 && u === 0 || d > 0 && u === i.length - 1, w = (u) => s > 0 && u === 0 || r > 0 && u === c.length - 1, y = (u, S) => E(u) || w(S), f = [], g = {};
        for (let u = 0; u < m.length; u++) for (let S = 0; S < c.length; S++) for (let L = 0; L < i.length; L++) u === 0 && y(L, S) || (g[`${L},${S},${u}`] = f.length, f.push([
          i[L],
          c[S],
          m[u]
        ]));
        const I = f.length, A = [];
        _ = /* @__PURE__ */ new Set(), J = /* @__PURE__ */ new Set(), $e = /* @__PURE__ */ new Map();
        const T = [];
        for (let u = 0; u < m.length - 1; u++) for (let S = 0; S < c.length; S++) for (let L = 0; L < i.length; L++) y(L, S) || T.push({
          el: [
            g[`${L},${S},${u}`],
            g[`${L},${S},${u + 1}`]
          ],
          floor: u
        });
        for (const { el: [u, S], floor: L } of T) {
          if (p <= 1) {
            _.add(A.length), $e.set(A.length, L), A.push([
              u,
              S
            ]);
            continue;
          }
          const R = f[u], W = f[S];
          let h = u;
          for (let M = 1; M < p; M++) {
            const v = M / p, C = f.length;
            f.push([
              R[0] + (W[0] - R[0]) * v,
              R[1] + (W[1] - R[1]) * v,
              R[2] + (W[2] - R[2]) * v
            ]), _.add(A.length), $e.set(A.length, L), A.push([
              h,
              C
            ]), h = C;
          }
          _.add(A.length), $e.set(A.length, L), A.push([
            h,
            S
          ]);
        }
        Te = /* @__PURE__ */ new Map();
        const B = [];
        for (let u = 1; u < m.length; u++) for (let S = 0; S < c.length; S++) for (let L = 0; L < i.length - 1; L++) B.push({
          el: [
            g[`${L},${S},${u}`],
            g[`${L + 1},${S},${u}`]
          ],
          floor: u - 1,
          dir: "x",
          bay: L
        });
        for (let u = 1; u < m.length; u++) for (let S = 0; S < i.length; S++) for (let L = 0; L < c.length - 1; L++) B.push({
          el: [
            g[`${S},${L},${u}`],
            g[`${S},${L + 1},${u}`]
          ],
          floor: u - 1,
          dir: "y",
          bay: L
        });
        for (const { el: [u, S], floor: L, dir: R, bay: W } of B) {
          const h = f[u], M = f[S];
          let v = u;
          for (let X = 1; X < l; X++) {
            const U = X / l, ae = f.length;
            f.push([
              h[0] + (M[0] - h[0]) * U,
              h[1] + (M[1] - h[1]) * U,
              h[2] + (M[2] - h[2]) * U
            ]);
            const Z = A.length;
            J.add(Z), $e.set(Z, L), Te.set(Z, {
              dir: R,
              bay: W
            }), A.push([
              v,
              ae
            ]), v = ae;
          }
          const C = A.length;
          J.add(C), $e.set(C, L), Te.set(C, {
            dir: R,
            bay: W
          }), A.push([
            v,
            S
          ]);
        }
        if (st = /* @__PURE__ */ new Set(), Se && Ae > 0) {
          const u = (S, L, R) => {
            for (let h = 0; h < f.length; h++) if (Math.abs(f[h][0] - S) < 1e-6 && Math.abs(f[h][1] - L) < 1e-6 && Math.abs(f[h][2] - R) < 1e-6) return h;
            const W = f.length;
            return f.push([
              S,
              L,
              R
            ]), W;
          };
          for (let S = 1; S < m.length; S++) if (Je === "x") for (let L = 0; L < c.length - 1; L++) {
            const R = c[L], W = c[L + 1];
            for (let h = 1; h <= Ae; h++) {
              const M = R + h / (Ae + 1) * (W - R), v = [];
              for (let C = 0; C < i.length; C++) v.push(u(i[C], M, m[S]));
              for (let C = 0; C < i.length - 1; C++) {
                const X = A.length;
                st.add(X), J.add(X), $e.set(X, S - 1), Te.set(X, {
                  dir: "x",
                  bay: C
                }), A.push([
                  v[C],
                  v[C + 1]
                ]);
              }
            }
          }
          else for (let L = 0; L < i.length - 1; L++) {
            const R = i[L], W = i[L + 1];
            for (let h = 1; h <= Ae; h++) {
              const M = R + h / (Ae + 1) * (W - R), v = [];
              for (let C = 0; C < c.length; C++) v.push(u(M, c[C], m[S]));
              for (let C = 0; C < c.length - 1; C++) {
                const X = A.length;
                st.add(X), J.add(X), $e.set(X, S - 1), Te.set(X, {
                  dir: "y",
                  bay: C
                }), A.push([
                  v[C],
                  v[C + 1]
                ]);
              }
            }
          }
        }
        const H = /* @__PURE__ */ new Map(), x = mt();
        for (let u = 0; u < c.length; u++) for (let S = 0; S < i.length; S++) y(S, u) || H.set(g[`${S},${u},0`], [
          ...x
        ]);
        ce = /* @__PURE__ */ new Set();
        for (const u of ge) {
          const S = m.length - 1, L = u.floors.includes(-1) ? Array.from({
            length: S
          }, (R, W) => W) : u.floors.filter((R) => R < S);
          for (const R of L) {
            let W, h, M, v;
            u.dir === "x" ? (W = u.bay, M = u.bay + 1, h = u.axisIdx, v = u.axisIdx) : (W = u.axisIdx, M = u.axisIdx, h = u.bay, v = u.bay + 1);
            const C = g[`${W},${h},${R}`], X = g[`${W},${h},${R + 1}`];
            let U, ae;
            if (u.dir === "x" ? (U = g[`${M},${v},${R}`], ae = g[`${M},${v},${R + 1}`]) : (U = g[`${M},${v},${R}`], ae = g[`${M},${v},${R + 1}`]), C === void 0 || U === void 0 || X === void 0 || ae === void 0) continue;
            const Z = be, K = He, de = f[C], re = f[U], Ie = f[X], Pe = f[ae], q = [];
            for (let fe = 0; fe <= K; fe++) {
              const oe = [], pe = fe / K;
              for (let Q = 0; Q <= Z; Q++) {
                const ue = Q / Z, we = (1 - pe) * ((1 - ue) * de[0] + ue * re[0]) + pe * ((1 - ue) * Ie[0] + ue * Pe[0]), se = (1 - pe) * ((1 - ue) * de[1] + ue * re[1]) + pe * ((1 - ue) * Ie[1] + ue * Pe[1]), Ee = (1 - pe) * ((1 - ue) * de[2] + ue * re[2]) + pe * ((1 - ue) * Ie[2] + ue * Pe[2]);
                fe === 0 && Q === 0 ? oe.push(C) : fe === 0 && Q === Z ? oe.push(U) : fe === K && Q === 0 ? oe.push(X) : fe === K && Q === Z ? oe.push(ae) : (oe.push(f.length), f.push([
                  we,
                  se,
                  Ee
                ]));
              }
              q.push(oe);
            }
            for (let fe = 0; fe < K; fe++) for (let oe = 0; oe < Z; oe++) {
              const pe = q[fe][oe], Q = q[fe][oe + 1], ue = q[fe + 1][oe + 1], we = q[fe + 1][oe], se = A.length;
              ce.add(se), $e.set(se, R), A.push([
                pe,
                Q,
                ue,
                we
              ]);
            }
            if (R === 0) for (let fe = 0; fe <= Z; fe++) {
              const oe = q[0][fe];
              oe >= I && H.set(oe, [
                ...x
              ]);
            }
          }
        }
        if (It = /* @__PURE__ */ new Set(), Ue) {
          const u = l, S = l, L = /* @__PURE__ */ new Map(), R = (W, h, M) => `${Math.round(W * 1e4)},${Math.round(h * 1e4)},${Math.round(M * 1e4)}`;
          for (let W = 0; W < f.length; W++) L.set(R(f[W][0], f[W][1], f[W][2]), W);
          for (let W = 1; W < m.length; W++) {
            const h = m[W];
            for (let M = 0; M < i.length - 1; M++) for (let v = 0; v < c.length - 1; v++) {
              const C = i[M], X = i[M + 1], U = c[v], ae = c[v + 1], Z = [];
              for (let K = 0; K <= S; K++) {
                const de = [];
                for (let re = 0; re <= u; re++) {
                  const Ie = C + re / u * (X - C), Pe = U + K / S * (ae - U);
                  if (K === 0 && re === 0) de.push(g[`${M},${v},${W}`]);
                  else if (K === 0 && re === u) de.push(g[`${M + 1},${v},${W}`]);
                  else if (K === S && re === 0) de.push(g[`${M},${v + 1},${W}`]);
                  else if (K === S && re === u) de.push(g[`${M + 1},${v + 1},${W}`]);
                  else {
                    const q = R(Ie, Pe, h), fe = L.get(q);
                    if (fe !== void 0) de.push(fe);
                    else {
                      const oe = f.length;
                      f.push([
                        Ie,
                        Pe,
                        h
                      ]), L.set(q, oe), de.push(oe);
                    }
                  }
                }
                Z.push(de);
              }
              for (let K = 0; K < S; K++) for (let de = 0; de < u; de++) {
                const re = Z[K][de], Ie = Z[K][de + 1], Pe = Z[K + 1][de + 1], q = Z[K + 1][de], fe = A.length;
                It.add(fe), $e.set(fe, W - 1), A.push([
                  re,
                  Ie,
                  Pe,
                  q
                ]);
              }
            }
          }
        }
        if (zt && ht) {
          const u = ht === "all" || ht === "x" || ht === "perimeter", S = ht === "all" || ht === "y" || ht === "perimeter", L = m.length - 1;
          for (let R = 0; R < L; R++) {
            if (u) for (let W = 0; W < c.length; W++) {
              if (ht === "perimeter" && W !== 0 && W !== c.length - 1) continue;
              const h = Math.floor((i.length - 1) / 2);
              for (let M = 0; M < i.length - 1; M++) {
                if (ht === "perimeter" && M !== h || y(M, W) || y(M + 1, W)) continue;
                const v = g[`${M},${W},${R}`], C = g[`${M + 1},${W},${R + 1}`], X = g[`${M + 1},${W},${R}`], U = g[`${M},${W},${R + 1}`];
                v !== void 0 && C !== void 0 && (A.push([
                  v,
                  C
                ]), $e.set(A.length - 1, R)), X !== void 0 && U !== void 0 && (A.push([
                  X,
                  U
                ]), $e.set(A.length - 1, R));
              }
            }
            if (S) for (let W = 0; W < i.length; W++) {
              if (ht === "perimeter" && W !== 0 && W !== i.length - 1) continue;
              const h = Math.floor((c.length - 1) / 2);
              for (let M = 0; M < c.length - 1; M++) {
                if (ht === "perimeter" && M !== h || y(W, M) || y(W, M + 1)) continue;
                const v = g[`${W},${M},${R}`], C = g[`${W},${M + 1},${R + 1}`], X = g[`${W},${M + 1},${R}`], U = g[`${W},${M},${R + 1}`];
                v !== void 0 && C !== void 0 && (A.push([
                  v,
                  C
                ]), $e.set(A.length - 1, R)), X !== void 0 && U !== void 0 && (A.push([
                  X,
                  U
                ]), $e.set(A.length - 1, R));
              }
            }
          }
        }
        return e.nodes.val = f, e.elements.val = A, e.nodeInputs && (e.nodeInputs.val = {
          supports: H
        }), We = [
          ...i
        ], Xe = [
          ...c
        ], pt = m[m.length - 1] || 0, setTimeout(() => {
          Lt(), Xo(i, c), On(), qn();
        }, 50), Qe(), {
          nodes: f.length,
          elements: A.length,
          nJointNodes: I
        };
      },
      galpon(t = 12, o = 20, n = 6, l = 3, a = 8, d = 4) {
        Ke.clear();
        const s = [], r = [], p = (w) => n + l * (1 - Math.pow(2 * w / t - 1, 2)), i = [], c = d + 1;
        for (let w = 0; w < c; w++) {
          const y = [], f = o / d * w;
          y.push(s.length), s.push([
            0,
            f,
            0
          ]), y.push(s.length), s.push([
            t,
            f,
            0
          ]), y.push(s.length), s.push([
            0,
            f,
            n
          ]);
          for (let g = 1; g < a; g++) {
            const I = t / a * g;
            y.push(s.length), s.push([
              I,
              f,
              p(I)
            ]);
          }
          y.push(s.length), s.push([
            t,
            f,
            n
          ]), i.push(y);
        }
        for (let w = 0; w < c; w++) {
          const y = i[w];
          r.push([
            y[0],
            y[2]
          ]), r.push([
            y[1],
            y[y.length - 1]
          ]);
          for (let f = 2; f < y.length - 1; f++) r.push([
            y[f],
            y[f + 1]
          ]);
        }
        for (let w = 0; w < d; w++) for (let y = 2; y < i[0].length; y++) r.push([
          i[w][y],
          i[w + 1][y]
        ]);
        for (let w = 0; w < d; w++) for (let y = 2; y < i[0].length - 1; y += 2) r.push([
          i[w][y],
          i[w + 1][y + 1]
        ]);
        const m = /* @__PURE__ */ new Map(), E = mt();
        for (let w = 0; w < c; w++) m.set(i[w][0], [
          ...E
        ]), m.set(i[w][1], [
          ...E
        ]);
        return e.nodes.val = s, e.elements.val = r, e.nodeInputs && (e.nodeInputs.val = {
          supports: m
        }), Qe(), {
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
            Oe.colMat = 1, Oe.vigaMat = 1, Ke.clear(), tt("truss"), ds();
            break;
          }
          case "beams": {
            Oe.colMat = 0, Oe.vigaMat = 0, Oe.colShape = 0, Ke.clear(), tt("beams"), ps();
            break;
          }
          case "3d":
          case "3d-structure":
          case "torre": {
            Oe.colMat = 1, Oe.vigaMat = 1, Ke.clear(), tt("3d"), fs();
            break;
          }
          case "portico": {
            Oe.colMat = 0, Oe.vigaMat = 0, Oe.colShape = 0, tt("frame"), Re();
            break;
          }
          case "edificio": {
            tt("edificio"), Oe.colMat = 0, Oe.vigaMat = 0, Oe.colShape = 0, ge = [], Ue = false, Se = false, zt = false, Re();
            break;
          }
          case "edif-acero":
          case "edificio-acero": {
            tt("edificio"), Oe.colMat = 1, Oe.vigaMat = 1, Oe.steelColType = 0, Oe.steelVigaType = 0, ge = [], Se = true, Ae = 2;
            const o = ie.reduce((l, a) => l + a, 0) / ie.length, n = te.reduce((l, a) => l + a, 0) / te.length;
            Je = o >= n ? "y" : "x", Ue = true, at = 0.08, zt = false, Re();
            break;
          }
          case "edif-acero-diag":
          case "edificio-acero-diag": {
            tt("edificio"), Oe.colMat = 1, Oe.vigaMat = 1, Oe.steelColType = 0, Oe.steelVigaType = 0, ge = [], Se = true, Ae = 2;
            const o = ie.reduce((l, a) => l + a, 0) / ie.length, n = te.reduce((l, a) => l + a, 0) / te.length;
            Je = o >= n ? "y" : "x", Ue = true, at = 0.08, zt = true, ht = "perimeter", Re();
            break;
          }
          case "edif-muros":
          case "edificio-muros": {
            tt("edificio"), Oe.colMat = 0, Oe.vigaMat = 0, Oe.colShape = 0, Se = false;
            const o = Math.round(((_a2 = ne.nVanosX) == null ? void 0 : _a2.val) ?? 2), n = Math.round(((_b = ne.nVanosY) == null ? void 0 : _b.val) ?? 2);
            ge = [
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
            ], Ue = true, at = 0.15, Re();
            break;
          }
          case "edif-mixto":
          case "edificio-mixto": {
            tt("edificio"), Oe.colMat = 2, Oe.vigaMat = 0, Se = false;
            const o = Math.round(((_c = ne.nVanosX) == null ? void 0 : _c.val) ?? 2), n = Math.round(((_d = ne.nVanosY) == null ? void 0 : _d.val) ?? 2);
            ge = [
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
            ], Ue = true, at = 0.12, Re();
            break;
          }
          case "mezanine":
          case "mezzanine": {
            tt("edificio"), ne.nPisos && (ne.nPisos.val = 1), ne.hPiso && (ne.hPiso.val = 4.5), ne.nVanosX && (ne.nVanosX.val = 3), ne.nVanosY && (ne.nVanosY.val = 2), ne.nSubViga && (ne.nSubViga.val = 3), ie = [
              6,
              6,
              6
            ], te = [
              5,
              5
            ], Oe.colMat = 1, Oe.vigaMat = 1, Oe.steelColType = 0, Oe.steelVigaType = 0, ge = [], Se = true, Ae = 2, Je = ie[0] >= te[0] ? "y" : "x", Ue = true, at = 0.08, dt = 3, yt = 3, Re();
            break;
          }
          case "galpon": {
            tt("galpon"), Oe.colMat = 1, Oe.vigaMat = 1, Re();
            break;
          }
          case "barra": {
            tt("barra"), Re();
            break;
          }
          case "placa3q":
          case "plate3q":
          case "placa-3q": {
            Ke.clear(), tt("placa-3q"), us();
            break;
          }
          case "placa":
          case "plate":
          case "plate-q4":
          case "placa-q4": {
            Ke.clear(), tt("placa-q4"), ms();
            break;
          }
          case "losa-rect":
          case "rectangular-slab": {
            Ke.clear(), tt("losa-rect"), bs();
            break;
          }
          case "losa-plana":
          case "flat-slab": {
            Ke.clear(), tt("losa-plana"), hs();
            break;
          }
          case "viga-alta":
          case "deep-beam": {
            Ke.clear(), tt("viga-alta"), gs();
            break;
          }
          case "muro-contencion":
          case "retaining-wall": {
            Ke.clear(), tt("muro-contencion"), xs();
            break;
          }
          case "zapata":
          case "footing": {
            Ke.clear(), tt("zapata"), vs();
            break;
          }
          case "placa-orificios":
          case "plate-holes":
          case "placa-base": {
            Ke.clear(), tt("placa-orificios"), ys();
            break;
          }
          case "col-placa":
          case "columna-placa": {
            Ke.clear(), tt("col-placa"), $s();
            break;
          }
          case "talud":
          case "slope": {
            Ke.clear(), tt("talud"), Ms();
            break;
          }
          case "eiffel":
          case "torre-eiffel": {
            Ke.clear(), tt("eiffel"), qs();
            break;
          }
          case "arco":
          case "arco-gateway": {
            Ke.clear(), tt("arco"), _s();
            break;
          }
          case "puente":
          case "puente-colgante": {
            Ke.clear(), tt("puente"), Bs();
            break;
          }
          case "twisted":
          case "torre-twisted":
          case "turning-torso": {
            Ke.clear(), tt("twisted"), Ds();
            break;
          }
          case "burj":
          case "burj-khalifa": {
            Ke.clear(), tt("burj"), Hs();
            break;
          }
          case "opera":
          case "sydney-opera": {
            Ke.clear(), tt("opera"), js();
            break;
          }
          case "diagrid":
          case "gherkin": {
            Ke.clear(), tt("diagrid"), Ws();
            break;
          }
          default:
            console.error(`Ejemplo desconocido: "${t}".`);
        }
      },
      plateQ4(t = 10, o = 10, n = 16, l = 16, a = "simply-supported", d = -10, s = 0.2, r = 3e7, p = 0.3, i = 0) {
        console.log(`Plate Q4 [${[
          "Mindlin (gruesa)",
          "Kirchhoff (delgada)",
          "Membrane"
        ][i]}]: ${t}\xD7${o}, ${n}\xD7${l} elem, BC=${a}, q=${d}, t=${s}`);
        const m = performance.now(), E = Un({
          E: r,
          nu: p,
          thickness: s,
          meshLx: t,
          meshLy: o,
          meshNx: n,
          meshNy: l,
          bcType: a,
          pressure: d,
          theoryType: i
        }), w = performance.now() - m;
        console.log(`Solved in ${w.toFixed(1)} ms`), console.log(`w_max = ${E.maxW.toExponential(6)}`), console.log(`w_center = ${(E.centerW ?? 0).toExponential(6)}`), console.log(`Mxx_max = ${E.maxMxx.toExponential(4)}, Myy_max = ${E.maxMyy.toExponential(4)}`), console.log(`Mxy_max = ${E.maxMxy.toExponential(4)}`), console.log(`Qx_max = ${E.maxQx.toExponential(4)}, Qy_max = ${E.maxQy.toExponential(4)}`);
        const y = E.nodeResults.map((T) => [
          T.x,
          T.y,
          0
        ]), f = E.elementResults.map((T) => [
          ...T.nodes
        ]);
        e.nodes.val = y, e.elements.val = f;
        const g = /* @__PURE__ */ new Map();
        E.nodeResults.forEach((T, B) => {
          g.set(B, [
            0,
            0,
            T.w,
            T.bx,
            T.by,
            0
          ]);
        }), e.deformOutputs && (e.deformOutputs.val = {
          deformations: g
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
        const A = /* @__PURE__ */ new Map();
        if (Math.abs(d) > 1e-30) {
          const T = d * t * o / y.length;
          y.forEach((B, H) => {
            I.has(H) || A.set(H, [
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
          loads: A
        }), e.elementInputs && (e.elementInputs.val = {}), e.analyzeOutputs) {
          const T = /* @__PURE__ */ new Map(), B = /* @__PURE__ */ new Map(), H = /* @__PURE__ */ new Map();
          E.elementResults.forEach((x, u) => {
            T.set(u, [
              x.Mxx,
              x.Mxx,
              x.Mxx
            ]), B.set(u, [
              x.Myy,
              x.Myy,
              x.Myy
            ]), H.set(u, [
              x.Mxy,
              x.Mxy,
              x.Mxy
            ]);
          }), e.analyzeOutputs.val = {
            bendingXX: T,
            bendingYY: B,
            bendingXY: H
          };
        }
        return setTimeout(() => Lt(), 50), Qe(), E;
      },
      set(t, o) {
        ne[t] ? (ne[t].val = o, console.log(`${t} = ${o}`), so(), Re()) : ft[t] ? (ft[t].val = o, console.log(`${t} = ${o}`), so(), Re()) : console.error(`Par\xE1metro "${t}" no encontrado. Disponibles: ${Object.keys({
          ...ne,
          ...ft
        }).join(", ")}`);
      },
      get(t) {
        if (!t) {
          const o = {};
          for (const l in ne) o[l] = ne[l].val;
          for (const l in ft) o[l] = ft[l].val;
          o.plateTheory = Le, o.supportType = xt;
          const n = un()[k];
          return n && n[xt] && (o.supportLabel = n[xt].label), console.table(o), o;
        }
        if (ne[t]) return ne[t].val;
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
        }[Le] || Le}`), k.includes("placa") && (so(), Re());
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
        xt = t, xt >= o.length && (xt = 0), console.log(`Apoyo: ${o[xt].label} \u2192 DOFs: [${o[xt].dofs.map((n) => n ? "1" : "0").join(",")}]`), so(), Re();
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
        t && (b = t), o && (F = o), $ = Fo(b, F);
        const n = ze.querySelector("#cad3d-force-unit"), l = ze.querySelector("#cad3d-length-unit");
        return n && (n.textContent = b), l && (l.textContent = F), k && tt(k), console.log(`Unidades: ${$.label} | E=${$.E.toExponential(3)} ${$.stress}`), $.id;
      },
      view(t) {
      },
      get mesh() {
        return e;
      }
    };
    function is() {
      return dl($);
    }
    function cs() {
      return pl($);
    }
    let ft = {};
    function tt(t) {
      var _a2, _b, _c, _d;
      k = t, la.val = true, xt = 0, he && Cn(), ne = {};
      const o = is()[t];
      if (o) for (const l of o) ne[l.key] = {
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
        const l = Math.round(((_a2 = ne.nVanosX) == null ? void 0 : _a2.val) ?? 2), a = Math.round(((_b = ne.nVanosY) == null ? void 0 : _b.val) ?? 2);
        ie = Array(l).fill($.defaultSpan), te = Array(a).fill($.defaultSpan * 0.8);
        const d = Math.round(((_c = ne.nPisos) == null ? void 0 : _c.val) ?? 3), s = ((_d = ne.hPiso) == null ? void 0 : _d.val) ?? 3;
        O = Array(d).fill(s);
      }
      so(), setTimeout(() => {
        Ea(), Re();
      }, 50);
    }
    function le(t) {
      var _a2, _b;
      return ((_a2 = ne[t]) == null ? void 0 : _a2.val) ?? ((_b = ft[t]) == null ? void 0 : _b.val) ?? 0;
    }
    function Re() {
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
          const o = le("Lvix") || 0, n = le("Lvdx") || 0, l = le("Lviy") || 0, a = le("Lvdy") || 0, d = Math.max(1, Math.round(le("nSubViga") || 3)), s = Math.max(1, Math.round(le("nSubCol") || 1)), r = le("hPiso"), p = O.length > 0 ? [
            ...O
          ] : Array(Math.round(le("nPisos"))).fill(r);
          Ke.building([
            ...ie
          ], [
            ...te
          ], p, d, o, n, l, a, s);
          break;
        }
        case "galpon":
          Ke.galpon(le("span"), le("length"), le("height"), le("archRise"), Math.round(le("xDiv")), Math.round(le("yDiv")));
          break;
        case "barra":
          ha();
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
        if (V.size > 0 || j.size > 0 || N) {
          const o = e.elements.val, n = o.filter((l, a) => !(V.has(a) || j.has(a) || N && !G.has(a)));
          n.length !== o.length && (e.elements.val = n);
        }
        setTimeout(() => {
          xo(), Fn();
        }, 30);
      }
    }
    function ds() {
      const t = le("span"), o = Math.round(le("divisions")), n = le("height"), l = t / o, a = [], d = [];
      for (let c = 0; c <= o; c++) a.push([
        l * c,
        0,
        0
      ]);
      for (let c = 0; c <= o; c++) a.push([
        l * c,
        0,
        n
      ]);
      const s = o + 1;
      for (let c = 0; c < o; c++) d.push([
        c,
        c + 1
      ]);
      for (let c = 0; c < o; c++) d.push([
        s + c,
        s + c + 1
      ]);
      for (let c = 0; c <= o; c++) d.push([
        c,
        s + c
      ]);
      for (let c = 0; c < o; c++) c < o / 2 ? d.push([
        c,
        s + c + 1
      ]) : d.push([
        s + c,
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
      ]), p = (le("CM") ?? 0) + (le("CV") ?? 0), i = /* @__PURE__ */ new Map();
      if (p !== 0) for (let c = 0; c <= o; c++) i.set(c, [
        0,
        0,
        p,
        0,
        0,
        0
      ]);
      e.nodes.val = a, e.elements.val = d, e.nodeInputs && (e.nodeInputs.val = {
        supports: r,
        loads: i
      }), Qe();
    }
    function ps() {
      const t = le("width"), o = le("height"), n = le("Ex") ?? 0, l = (le("CM") ?? 0) + (le("CV") ?? 0), a = Math.max(1, Math.round(le("nSub") || 4)), d = [
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
      ], p = [
        t,
        0,
        o
      ];
      let i = 1;
      for (let m = 1; m < a; m++) {
        const E = m / a, w = d.length;
        d.push([
          r[0] + (p[0] - r[0]) * E,
          r[1] + (p[1] - r[1]) * E,
          r[2] + (p[2] - r[2]) * E
        ]), s.push([
          i,
          w
        ]), i = w;
      }
      s.push([
        i,
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
      e.nodes.val = d, e.elements.val = s, e.nodeInputs && (e.nodeInputs.val = {
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
      }), Qe();
    }
    function fs() {
      const t = le("dx"), o = le("dy"), n = le("dz"), l = Math.round(le("stories")), a = Math.max(1, Math.round(le("nSub") || 3)), d = [];
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
      const s = d.length, r = [
        ...d
      ], p = [];
      for (let f = 0; f < l; f++) for (let g = 0; g < 4; g++) p.push([
        f * 4 + g,
        (f + 1) * 4 + g
      ]);
      for (let f = 0; f < l; f++) {
        const g = f * 4;
        p.push([
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
      const i = [];
      for (let f = 1; f <= l; f++) {
        const g = f * 4;
        i.push([
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
      for (const [f, g] of i) {
        const I = d[f], A = d[g];
        let T = f;
        for (let B = 1; B < a; B++) {
          const H = B / a, x = r.length;
          r.push([
            I[0] + (A[0] - I[0]) * H,
            I[1] + (A[1] - I[1]) * H,
            I[2] + (A[2] - I[2]) * H
          ]), p.push([
            T,
            x
          ]), T = x;
        }
        p.push([
          T,
          g
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
      const m = le("Ex") ?? 0, E = (le("CM") ?? 0) + (le("CV") ?? 0), w = s - 2, y = /* @__PURE__ */ new Map();
      if (m !== 0 && E === 0) y.set(w, [
        m,
        0,
        0,
        0,
        0,
        0
      ]);
      else if (E !== 0 && m === 0) for (let f = 0; f < r.length; f++) c.has(f) || y.set(f, [
        0,
        0,
        E,
        0,
        0,
        0
      ]);
      else if (m !== 0 && E !== 0) for (let f = 0; f < r.length; f++) c.has(f) || y.set(f, [
        f === w ? m : 0,
        0,
        E,
        0,
        0,
        0
      ]);
      e.nodes.val = r, e.elements.val = p, e.nodeInputs && (e.nodeInputs.val = {
        supports: c,
        loads: y
      }), Qe();
    }
    function ha() {
      const t = le("L"), o = Math.round(le("nElem")), n = le("F"), l = t / o, a = [], d = [];
      for (let p = 0; p <= o; p++) a.push([
        l * p,
        0,
        0
      ]);
      for (let p = 0; p < o; p++) d.push([
        p,
        p + 1
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
      e.nodes.val = a, e.elements.val = d, e.nodeInputs && (e.nodeInputs.val = {
        supports: s,
        loads: r
      }), Qe();
    }
    function us() {
      const t = le("Lx") || 15, o = le("Ly") || 10, n = le("meshSize") || 0.5, l = le("q") || -3, a = le("t") || 1, d = le("E") || 3e7, s = le("nu") || 0.3, r = d / (2 * (1 + s)), p = Le === 1 ? "Membrana" : Le === 2 ? "Kirchhoff" : "Mindlin", { nodes: i, elements: c, boundaryIndices: m } = ho({
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
      }), E = t * o, w = l * E / i.length, y = new Map(m.map((g) => [
        g,
        [
          true,
          true,
          true,
          true,
          true,
          true
        ]
      ])), f = new Map(i.map((g, I) => [
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
      e.nodes.val = i, e.elements.val = c, e.nodeInputs && (e.nodeInputs.val = {
        supports: y,
        loads: f
      }), e.elementInputs && (e.elementInputs.val = {
        elasticities: new Map(c.map((g, I) => [
          I,
          d
        ])),
        elasticitiesOrthogonal: new Map(c.map((g, I) => [
          I,
          d
        ])),
        thicknesses: new Map(c.map((g, I) => [
          I,
          a
        ])),
        poissonsRatios: new Map(c.map((g, I) => [
          I,
          s
        ])),
        shearModuli: new Map(c.map((g, I) => [
          I,
          r
        ]))
      });
      try {
        const g = Nt(i, c, e.nodeInputs.val, e.elementInputs.val);
        g && e.deformOutputs && (e.deformOutputs.val = g);
        const I = Yo(i, c, e.elementInputs.val, g);
        I && e.analyzeOutputs && (e.analyzeOutputs.val = I), console.log(`Plate 3Q [${p}]: ${i.length} nodes, ${c.length} triangles, t=${a}, E=${d}, \u03BD=${s}`);
      } catch (g) {
        console.warn("Plate 3Q analysis failed:", g.message);
      }
      setTimeout(() => Lt(), 50), Qe();
    }
    function ms() {
      const t = le("Lx") || 10, o = le("Ly") || 10, n = Math.round(le("nx") || 16), l = Math.round(le("ny") || 16), a = le("t") || 0.2, d = le("q") || -10, s = le("E") || 3e7, r = le("nu") || 0.3, p = xt === 1 ? "clamped" : "simply-supported", c = {
        1: 2,
        2: 1,
        3: 0
      }[Le] ?? 0;
      return Ke.plateQ4(t, o, n, l, p, d, a, s, r, c);
    }
    function bs() {
      const t = le("a") || 6, o = le("b") || 4, n = Math.round(le("nx") || 12), l = Math.round(le("ny") || 8), a = le("t") || 0.1, d = le("q") || -10, s = le("E") || 35e6, r = le("nu") || 0.15, i = {
        1: 2,
        2: 1,
        3: 0
      }[Le] ?? 0, c = Ke.plateQ4(t, o, n, l, "simply-supported", d, a, s, r, i), m = s * a * a * a / (12 * (1 - r * r));
      let E = 0;
      for (let w = 1; w <= 19; w += 2) for (let y = 1; y <= 19; y += 2) {
        const f = w * w / (t * t) + y * y / (o * o);
        E += 1 / (w * y * f * f);
      }
      if (E *= 16 * Math.abs(d) / (Math.PI ** 6 * m), console.log(`\u{1F4D0} Navier anal\xEDtico w_center = ${E.toExponential(6)}`), c) {
        const w = Math.abs((Math.abs(c.centerW || 0) - E) / E * 100);
        console.log(`   WASM w_center = ${(c.centerW || 0).toExponential(6)}, error = ${w.toFixed(2)}%`);
      }
      return c;
    }
    function hs() {
      const t = le("t") || 0.2, o = le("q") || -10, n = le("E") || 35e6, l = le("nu") || 0.2, a = le("meshSize") || 0.6, d = [
        3.6,
        4.2,
        4.2,
        3.6
      ], s = [
        3,
        3.6,
        3
      ], r = d.reduce((h, M) => h + M, 0), p = s.reduce((h, M) => h + M, 0), i = [
        0
      ];
      for (const h of d) i.push(i[i.length - 1] + h);
      const c = [
        0
      ];
      for (const h of s) c.push(c[c.length - 1] + h);
      const m = Math.max(2, Math.round(r / a)), E = Math.max(2, Math.round(p / a)), w = r / m, y = p / E, f = [];
      for (let h = 0; h <= E; h++) for (let M = 0; M <= m; M++) f.push([
        M * w,
        h * y
      ]);
      const g = [], I = /* @__PURE__ */ new Set();
      for (const h of i) for (const M of c) {
        let v = 1 / 0, C = 0;
        for (let X = 0; X < f.length; X++) {
          const U = Math.hypot(f[X][0] - h, f[X][1] - M);
          U < v && (v = U, C = X);
        }
        I.has(C) || (I.add(C), g.push({
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
      ][T]}]: ${r}\xD7${p}m, ${m}\xD7${E} elem, ${I.size} columnas`);
      const B = performance.now(), H = Un({
        E: n,
        nu: l,
        thickness: t,
        meshLx: r,
        meshLy: p,
        meshNx: m,
        meshNy: E,
        bcType: "none",
        pressure: o,
        theoryType: T,
        springs: g
      }), x = performance.now() - B;
      console.log(`Solved in ${x.toFixed(1)} ms, w_max = ${H.maxW.toExponential(4)}`);
      const u = H.nodeResults.map((h) => [
        h.x,
        h.y,
        0
      ]), S = H.elementResults.map((h) => [
        ...h.nodes
      ]);
      e.nodes.val = u, e.elements.val = S;
      const L = /* @__PURE__ */ new Map();
      H.nodeResults.forEach((h, M) => {
        L.set(M, [
          0,
          0,
          h.w,
          h.bx,
          h.by,
          0
        ]);
      }), e.deformOutputs && (e.deformOutputs.val = {
        deformations: L
      });
      const R = /* @__PURE__ */ new Map();
      for (const h of I) R.set(h, [
        true,
        true,
        true,
        false,
        false,
        false
      ]);
      const W = /* @__PURE__ */ new Map();
      if (Math.abs(o) > 1e-30) {
        const h = o * r * p / u.length;
        u.forEach((M, v) => {
          R.has(v) || W.set(v, [
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
        supports: R,
        loads: W
      }), e.elementInputs && (e.elementInputs.val = {}), e.analyzeOutputs) {
        const h = /* @__PURE__ */ new Map(), M = /* @__PURE__ */ new Map(), v = /* @__PURE__ */ new Map();
        H.elementResults.forEach((C, X) => {
          h.set(X, [
            C.Mxx,
            C.Mxx,
            C.Mxx
          ]), M.set(X, [
            C.Myy,
            C.Myy,
            C.Myy
          ]), v.set(X, [
            C.Mxy,
            C.Mxy,
            C.Mxy
          ]);
        }), e.analyzeOutputs.val = {
          bendingXX: h,
          bendingYY: M,
          bendingXY: v
        };
      }
      setTimeout(() => Lt(), 50), Qe();
    }
    function gs() {
      const t = le("L") || 4, o = le("H") || 2, n = le("t") || 0.1, l = le("E") || 2e7, a = le("nu") || 0.2, d = l / (2 * (1 + a)), s = le("q") || -100, r = le("b") || 0.8, p = le("meshSize") || 0.2, { nodes: i, elements: c, boundaryIndices: m } = ho({
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
      }), E = i, w = 0.4, y = /* @__PURE__ */ new Map();
      for (let x = 0; x < E.length; x++) {
        const u = E[x][0], S = E[x][1];
        Math.abs(S) < 1e-6 && (u <= w + 1e-6 || u >= t - w - 1e-6) && y.set(x, [
          true,
          true,
          true,
          true,
          true,
          true
        ]);
      }
      const f = (t - r) / 2, g = f + r, I = [];
      for (let x = 0; x < E.length; x++) if (Math.abs(E[x][1] - o) < 1e-6) {
        const u = E[x][0];
        u >= f - 1e-6 && u <= g + 1e-6 && I.push(x);
      }
      const A = s * r / Math.max(I.length, 1), T = /* @__PURE__ */ new Map();
      for (const x of I) T.set(x, [
        0,
        A,
        0,
        0,
        0,
        0
      ]);
      const B = {
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
          a
        ])),
        shearModuli: new Map(c.map((x, u) => [
          u,
          d
        ]))
      }, H = {
        supports: y,
        loads: T
      };
      try {
        const x = Nt(E, c, H, B), u = Yo(E, c, B, x), S = E.map((R) => [
          R[0],
          0,
          R[1]
        ]);
        if (e.nodes.val = S, e.elements.val = c, x && x.deformations) {
          const R = /* @__PURE__ */ new Map();
          x.deformations.forEach((W, h) => {
            R.set(h, [
              W[0],
              W[2],
              W[1],
              W[3],
              W[5],
              W[4]
            ]);
          }), e.deformOutputs && (e.deformOutputs.val = {
            deformations: R
          });
        }
        if (e.nodeInputs) {
          const R = /* @__PURE__ */ new Map();
          y.forEach((h, M) => R.set(M, h));
          const W = /* @__PURE__ */ new Map();
          T.forEach((h, M) => W.set(M, [
            h[0],
            h[2],
            h[1],
            h[3],
            h[5],
            h[4]
          ])), e.nodeInputs && (e.nodeInputs.val = {
            supports: R,
            loads: W
          });
        }
        e.elementInputs && (e.elementInputs.val = {}), e.analyzeOutputs && (e.analyzeOutputs.val = {});
        let L = 0;
        x && x.deformations && x.deformations.forEach((R) => {
          const W = Math.sqrt(R[0] * R[0] + R[1] * R[1] + R[2] * R[2]);
          L = Math.max(L, W);
        }), console.log(`Viga Alta: ${E.length} nodos, ${c.length} triangulos`), console.log(`  L=${t}, H=${o}, t=${n}, E=${l}, nu=${a}`), console.log(`  Carga: q=${s} kN/m sobre ${r}m central`), console.log(`  max|u| = ${L.toExponential(4)}`);
      } catch (x) {
        console.warn("Viga Alta analysis failed:", x.message);
      }
      setTimeout(() => Lt(), 50), Qe();
    }
    function xs() {
      const t = le("H") || 4, o = le("B") || 3, n = le("tw") || 0.3, l = le("tb") || 0.4, a = le("meshSize") || 0.2, d = le("E") || 25e6, s = le("nu") || 0.2, r = d / (2 * (1 + s)), p = le("gamma") || 18, i = le("Ka") || 0.33, c = le("Es") || 5e4, m = le("nus") || 0.3, E = c / (2 * (1 + m)), w = le("kn") || 1e6, y = le("ks") || 1e4, f = le("gammaW") || 9.81, g = le("Hw") || 3.5, I = le("qs") || 0, A = xt, T = o * 0.3, B = o * 0.7, H = [
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
      let x = [], u = [], S = /* @__PURE__ */ new Map(), L = /* @__PURE__ */ new Map(), R;
      if (A === 0) {
        const M = ho({
          points: H,
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
        x = M.nodes, u = M.elements;
        for (let C = 0; C < x.length; C++) Math.abs(x[C][1]) < 1e-6 && S.set(C, [
          true,
          true,
          true,
          true,
          true,
          true
        ]);
        const v = [];
        for (let C = 0; C < x.length; C++) {
          const X = x[C][0], U = x[C][1];
          Math.abs(X - n) < a * 0.6 && U >= l - 1e-6 && v.push({
            idx: C,
            y: U
          });
        }
        v.sort((C, X) => C.y - X.y);
        for (let C = 0; C < v.length; C++) {
          const { idx: X, y: U } = v[C], ae = l + t - U, Z = i * p * ae + i * I;
          let K = a;
          C > 0 && C < v.length - 1 ? K = (v[C + 1].y - v[C - 1].y) / 2 : C === 0 && v.length > 1 ? K = (v[1].y - v[0].y) / 2 : C === v.length - 1 && v.length > 1 && (K = (v[C].y - v[C - 1].y) / 2);
          const de = Z * K;
          Math.abs(de) > 1e-10 && L.set(X, [
            de,
            0,
            0,
            0,
            0,
            0
          ]);
        }
        R = {
          elasticities: new Map(u.map((C, X) => [
            X,
            d
          ])),
          elasticitiesOrthogonal: new Map(u.map((C, X) => [
            X,
            d
          ])),
          thicknesses: new Map(u.map((C, X) => [
            X,
            n
          ])),
          poissonsRatios: new Map(u.map((C, X) => [
            X,
            s
          ])),
          shearModuli: new Map(u.map((C, X) => [
            X,
            r
          ]))
        };
      } else if (A === 1 || A === 2) {
        const M = B, v = l + t;
        if (A === 2) {
          const C = [
            [
              -T,
              0,
              0
            ],
            [
              M,
              0,
              0
            ],
            [
              M,
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
              -T,
              l,
              0
            ]
          ], X = Math.max(3, Math.ceil((v - l) / a)), U = [];
          for (let se = 0; se <= X; se++) U.push([
            n,
            l + se * (v - l) / X,
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
          x = ae.nodes, u = ae.elements;
          const Z = a * 0.4, K = [];
          for (let se = 0; se < x.length; se++) {
            const Ee = x[se][0], je = x[se][1];
            Math.abs(Ee - n) < Z && je >= l - Z && K.push(se);
          }
          K.sort((se, Ee) => x[se][1] - x[Ee][1]);
          const de = [
            K[0]
          ];
          for (let se = 1; se < K.length; se++) {
            const Ee = x[K[se]][1] - x[de[de.length - 1]][1];
            Math.abs(Ee) > a * 0.05 && de.push(K[se]);
          }
          K.length = 0, K.push(...de);
          const re = /* @__PURE__ */ new Map();
          for (const se of K) {
            const Ee = x.length;
            x.push([
              x[se][0],
              x[se][1],
              x[se][2]
            ]), re.set(se, Ee);
          }
          const Ie = u.length, Pe = [];
          for (let se = 0; se < Ie; se++) {
            const Ee = u[se], je = (x[Ee[0]][0] + x[Ee[1]][0] + x[Ee[2]][0]) / 3, rt = (x[Ee[0]][1] + x[Ee[1]][1] + x[Ee[2]][1]) / 3, ct = je >= -T && je <= B && rt >= 0 && rt <= l, At = je >= 0 && je <= n && rt >= l && rt <= l + t, _t = ct || At;
            if (Pe.push(!_t), !_t) for (let Ct = 0; Ct < Ee.length; Ct++) {
              const Bt = re.get(Ee[Ct]);
              Bt !== void 0 && (Ee[Ct] = Bt);
            }
          }
          const q = u.length;
          for (let se = 0; se < K.length - 1; se++) {
            const Ee = K[se], je = K[se + 1], rt = re.get(Ee), ct = re.get(je);
            u.push([
              je,
              Ee,
              rt,
              ct
            ]);
          }
          const fe = u.length - q, oe = /* @__PURE__ */ new Map(), pe = /* @__PURE__ */ new Map(), Q = /* @__PURE__ */ new Map(), ue = /* @__PURE__ */ new Map(), we = /* @__PURE__ */ new Map();
          for (let se = 0; se < Ie; se++) Pe[se] ? (oe.set(se, c), pe.set(se, c), ue.set(se, m), we.set(se, E), Q.set(se, 1)) : (oe.set(se, d), pe.set(se, d), ue.set(se, s), we.set(se, r), Q.set(se, 1));
          for (let se = q; se < u.length; se++) oe.set(se, w), pe.set(se, 0), ue.set(se, 0), we.set(se, y), Q.set(se, 0);
          R = {
            elasticities: oe,
            elasticitiesOrthogonal: pe,
            thicknesses: Q,
            poissonsRatios: ue,
            shearModuli: we
          };
          for (let se = 0; se < x.length; se++) {
            const Ee = x[se][0], je = x[se][1];
            Math.abs(je) < 1e-6 ? S.set(se, [
              true,
              true,
              true,
              true,
              true,
              true
            ]) : Math.abs(Ee - M) < a * 0.1 && S.set(se, [
              true,
              false,
              true,
              true,
              true,
              true
            ]);
          }
          for (let se = 0; se < Ie; se++) {
            if (!Pe[se]) continue;
            const Ee = u[se], je = x[Ee[0]], rt = x[Ee[1]], ct = x[Ee[2]], At = Math.abs((rt[0] - je[0]) * (ct[1] - je[1]) - (ct[0] - je[0]) * (rt[1] - je[1])) / 2, _t = -p * At / 3;
            for (const Ct of Ee) {
              const Bt = L.get(Ct) || [
                0,
                0,
                0,
                0,
                0,
                0
              ];
              Bt[1] += _t, L.set(Ct, Bt);
            }
          }
          if (I > 0) {
            const se = [];
            for (let Ee = 0; Ee < x.length; Ee++) {
              const je = x[Ee][0], rt = x[Ee][1];
              Math.abs(rt - v) < a * 0.1 && je > n - 1e-6 && se.push({
                idx: Ee,
                x: je
              });
            }
            se.sort((Ee, je) => Ee.x - je.x);
            for (let Ee = 0; Ee < se.length; Ee++) {
              let je = a;
              Ee > 0 && Ee < se.length - 1 ? je = (se[Ee + 1].x - se[Ee - 1].x) / 2 : Ee === 0 && se.length > 1 ? je = (se[1].x - se[0].x) / 2 : Ee === se.length - 1 && se.length > 1 && (je = (se[Ee].x - se[Ee - 1].x) / 2);
              const rt = -I * je, ct = L.get(se[Ee].idx) || [
                0,
                0,
                0,
                0,
                0,
                0
              ];
              ct[1] += rt, L.set(se[Ee].idx, ct);
            }
          }
          console.log(`  Interfaz Goodman: ${K.length} nodos interfaz, ${fe} elem interfaz, kn=${w}, ks=${y}`);
        } else {
          const C = [
            [
              -T,
              0,
              0
            ],
            [
              M,
              0,
              0
            ],
            [
              M,
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
          x = U.nodes, u = U.elements;
          const ae = (q) => {
            const fe = (x[q[0]][0] + x[q[1]][0] + x[q[2]][0]) / 3, oe = (x[q[0]][1] + x[q[1]][1] + x[q[2]][1]) / 3, pe = fe >= -T && fe <= B && oe >= 0 && oe <= l, Q = fe >= 0 && fe <= n && oe >= l && oe <= l + t;
            return pe || Q;
          }, Z = /* @__PURE__ */ new Map(), K = /* @__PURE__ */ new Map(), de = /* @__PURE__ */ new Map(), re = /* @__PURE__ */ new Map(), Ie = /* @__PURE__ */ new Map(), Pe = [];
          for (let q = 0; q < u.length; q++) {
            const fe = ae(u[q]);
            Pe.push(!fe), fe ? (Z.set(q, d), K.set(q, d), re.set(q, s), Ie.set(q, r), de.set(q, 1)) : (Z.set(q, c), K.set(q, c), re.set(q, m), Ie.set(q, E), de.set(q, 1));
          }
          R = {
            elasticities: Z,
            elasticitiesOrthogonal: K,
            thicknesses: de,
            poissonsRatios: re,
            shearModuli: Ie
          };
          for (let q = 0; q < x.length; q++) {
            const fe = x[q][0], oe = x[q][1];
            Math.abs(oe) < 1e-6 ? S.set(q, [
              true,
              true,
              true,
              true,
              true,
              true
            ]) : Math.abs(fe - M) < a * 0.1 && S.set(q, [
              true,
              false,
              true,
              true,
              true,
              true
            ]);
          }
          for (let q = 0; q < u.length; q++) {
            if (!Pe[q]) continue;
            const fe = u[q], oe = x[fe[0]], pe = x[fe[1]], Q = x[fe[2]], ue = Math.abs((pe[0] - oe[0]) * (Q[1] - oe[1]) - (Q[0] - oe[0]) * (pe[1] - oe[1])) / 2, we = -p * ue / 3;
            for (const se of fe) {
              const Ee = L.get(se) || [
                0,
                0,
                0,
                0,
                0,
                0
              ];
              Ee[1] += we, L.set(se, Ee);
            }
          }
          if (I > 0) {
            const q = [];
            for (let fe = 0; fe < x.length; fe++) {
              const oe = x[fe][0], pe = x[fe][1];
              Math.abs(pe - v) < a * 0.1 && oe > n - 1e-6 && q.push({
                idx: fe,
                x: oe
              });
            }
            q.sort((fe, oe) => fe.x - oe.x);
            for (let fe = 0; fe < q.length; fe++) {
              let oe = a;
              fe > 0 && fe < q.length - 1 ? oe = (q[fe + 1].x - q[fe - 1].x) / 2 : fe === 0 && q.length > 1 ? oe = (q[1].x - q[0].x) / 2 : fe === q.length - 1 && q.length > 1 && (oe = (q[fe].x - q[fe - 1].x) / 2);
              const pe = -I * oe, Q = L.get(q[fe].idx) || [
                0,
                0,
                0,
                0,
                0,
                0
              ];
              Q[1] += pe, L.set(q[fe].idx, Q);
            }
          }
        }
      }
      if (A === 3) {
        const M = ho({
          points: H,
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
        x = M.nodes, u = M.elements;
        for (let ae = 0; ae < x.length; ae++) Math.abs(x[ae][1]) < 1e-6 && S.set(ae, [
          true,
          true,
          true,
          true,
          true,
          true
        ]);
        const v = l + t, C = Math.min(g, t), X = v - C, U = [];
        for (let ae = 0; ae < x.length; ae++) {
          const Z = x[ae][0], K = x[ae][1];
          Math.abs(Z - n) < a * 0.6 && K >= l - 1e-6 && U.push({
            idx: ae,
            y: K
          });
        }
        U.sort((ae, Z) => ae.y - Z.y);
        for (let ae = 0; ae < U.length; ae++) {
          const { idx: Z, y: K } = U[ae], de = Math.max(0, v - K);
          if (de <= 0 || K < X - 1e-6) continue;
          const re = Math.min(de, C), Ie = f * re;
          let Pe = a;
          ae > 0 && ae < U.length - 1 ? Pe = (U[ae + 1].y - U[ae - 1].y) / 2 : ae === 0 && U.length > 1 ? Pe = (U[1].y - U[0].y) / 2 : ae === U.length - 1 && U.length > 1 && (Pe = (U[ae].y - U[ae - 1].y) / 2);
          const q = Ie * Pe;
          Math.abs(q) > 1e-10 && L.set(Z, [
            q,
            0,
            0,
            0,
            0,
            0
          ]);
        }
        R = {
          elasticities: new Map(u.map((ae, Z) => [
            Z,
            d
          ])),
          elasticitiesOrthogonal: new Map(u.map((ae, Z) => [
            Z,
            d
          ])),
          thicknesses: new Map(u.map((ae, Z) => [
            Z,
            n
          ])),
          poissonsRatios: new Map(u.map((ae, Z) => [
            Z,
            s
          ])),
          shearModuli: new Map(u.map((ae, Z) => [
            Z,
            r
          ]))
        };
      }
      const W = {
        supports: S,
        loads: L
      }, h = [
        "Rankine (Ka)",
        "Suelo continuo",
        "Interfaz",
        "Presion agua"
      ];
      try {
        const M = Nt(x, u, W, R), v = u.filter((de) => de.length === 3), C = {};
        for (const de of Object.keys(R)) {
          const re = R[de];
          if (re && re instanceof Map) {
            const Ie = /* @__PURE__ */ new Map();
            let Pe = 0;
            for (let q = 0; q < u.length; q++) u[q].length === 3 && (re.has(q) && Ie.set(Pe, re.get(q)), Pe++);
            C[de] = Ie;
          }
        }
        const X = Yo(x, v, C, M), U = x.map((de) => [
          de[0],
          0,
          de[1]
        ]);
        if (e.nodes.val = U, e.elements.val = v, M && M.deformations) {
          const de = /* @__PURE__ */ new Map();
          M.deformations.forEach((re, Ie) => {
            de.set(Ie, [
              re[0],
              re[2],
              re[1],
              re[3],
              re[5],
              re[4]
            ]);
          }), e.deformOutputs && (e.deformOutputs.val = {
            deformations: de
          });
        }
        const ae = /* @__PURE__ */ new Map();
        S.forEach((de, re) => ae.set(re, de));
        const Z = /* @__PURE__ */ new Map();
        L.forEach((de, re) => Z.set(re, [
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
        M && M.deformations && M.deformations.forEach((de) => {
          const re = Math.sqrt(de[0] * de[0] + de[1] * de[1] + de[2] * de[2]);
          K = Math.max(K, re);
        }), console.log(`Muro Contencion [${h[A]}]: ${x.length} nodos, ${u.length} triangulos`), console.log(`  H=${t}, B=${o}, tw=${n}, tb=${l}, Ka=${i}, gamma=${p}, qs=${I}`), A === 1 && console.log(`  Es=${c}, nus=${m}`), A === 2 && console.log(`  Es=${c}, nus=${m}, kn=${w}, ks=${y}`), A === 3 && console.log(`  gammaW=${f}, Hw=${g}`), console.log(`  max|u| = ${K.toExponential(4)}`);
      } catch (M) {
        console.warn("Muro Contencion failed:", M.message);
      }
      setTimeout(() => Lt(), 50), Qe();
    }
    function vs() {
      const t = le("Lx") || 2, o = le("Ly") || 2, n = le("t") || 0.5, l = le("colA") || 0.4, a = le("colH") || 1.5, d = Math.round(le("nx") || 8), s = Math.round(le("ny") || 8), r = le("E") || 25e6, p = le("nu") || 0.2, i = le("P") || -500, c = le("Mx") || 0, m = le("My") || 0, E = le("ks") || 2e4, w = t / d, y = o / s, f = t / 2, g = o / 2, I = l / 2, A = [];
      for (let S = 0; S <= s; S++) for (let L = 0; L <= d; L++) {
        const R = S * (d + 1) + L;
        let W = w, h = y;
        (L === 0 || L === d) && (W = w / 2), (S === 0 || S === s) && (h = y / 2), A.push({
          node: R,
          dof: 0,
          k: E * W * h
        });
      }
      let T = 0;
      for (let S = 0; S <= s; S++) for (let L = 0; L <= d; L++) Math.abs(L * w - f) <= I + 1e-6 && Math.abs(S * y - g) <= I + 1e-6 && T++;
      const B = i / Math.max(T, 1), H = [];
      for (let S = 0; S <= s; S++) for (let L = 0; L <= d; L++) {
        const R = L * w, W = S * y;
        Math.abs(R - f) <= I + 1e-6 && Math.abs(W - g) <= I + 1e-6 && H.push({
          node: S * (d + 1) + L,
          dof: 0,
          value: B
        });
      }
      if (Math.abs(c) > 1e-6) {
        const S = I > 1e-6 ? I : y, L = c / S;
        for (let R = 0; R <= s; R++) for (let W = 0; W <= d; W++) {
          const h = W * w, M = R * y;
          if (Math.abs(h - f) <= I + 1e-6 && Math.abs(M - g) <= I + 1e-6) {
            const v = M - g;
            if (Math.abs(v) > 1e-6) {
              const C = v > 0 ? 1 : -1;
              H.push({
                node: R * (d + 1) + W,
                dof: 0,
                value: C * L / T * 2
              });
            }
          }
        }
      }
      if (Math.abs(m) > 1e-6) {
        const S = I > 1e-6 ? I : w, L = m / S;
        for (let R = 0; R <= s; R++) for (let W = 0; W <= d; W++) {
          const h = W * w, M = R * y;
          if (Math.abs(h - f) <= I + 1e-6 && Math.abs(M - g) <= I + 1e-6) {
            const v = h - f;
            if (Math.abs(v) > 1e-6) {
              const C = v > 0 ? 1 : -1;
              H.push({
                node: R * (d + 1) + W,
                dof: 0,
                value: C * L / T * 2
              });
            }
          }
        }
      }
      const u = {
        1: 2,
        2: 1,
        3: 0
      }[Le] ?? 1;
      console.log(`Zapata: ${t}x${o}m, t=${n}m, ${d}x${s} elem`), console.log(`  col=${l}m, P=${i}, Mx=${c}, My=${m}, ks=${E}`);
      try {
        const S = Un({
          E: r,
          nu: p,
          thickness: n,
          meshLx: t,
          meshLy: o,
          meshNx: d,
          meshNy: s,
          bcType: "none",
          pressure: 0,
          theoryType: u,
          springs: A,
          pointLoads: H
        });
        console.log(`  Solved: w_max = ${S.maxW.toExponential(4)}`);
        const L = S.nodeResults.map((X) => [
          X.x,
          X.y,
          0
        ]), R = L.length;
        L.push([
          f - I,
          g - I,
          0
        ]), L.push([
          f + I,
          g - I,
          0
        ]), L.push([
          f + I,
          g + I,
          0
        ]), L.push([
          f - I,
          g + I,
          0
        ]), L.push([
          f - I,
          g - I,
          a
        ]), L.push([
          f + I,
          g - I,
          a
        ]), L.push([
          f + I,
          g + I,
          a
        ]), L.push([
          f - I,
          g + I,
          a
        ]);
        const W = S.elementResults.map((X) => [
          ...X.nodes
        ]);
        W.push([
          R,
          R + 4
        ]), W.push([
          R + 1,
          R + 5
        ]), W.push([
          R + 2,
          R + 6
        ]), W.push([
          R + 3,
          R + 7
        ]), W.push([
          R + 4,
          R + 5
        ]), W.push([
          R + 5,
          R + 6
        ]), W.push([
          R + 6,
          R + 7
        ]), W.push([
          R + 7,
          R + 4
        ]), W.push([
          R,
          R + 1
        ]), W.push([
          R + 1,
          R + 2
        ]), W.push([
          R + 2,
          R + 3
        ]), W.push([
          R + 3,
          R
        ]), e.nodes.val = L, e.elements.val = W;
        const h = /* @__PURE__ */ new Map();
        S.nodeResults.forEach((X, U) => {
          h.set(U, [
            0,
            0,
            X.w,
            X.bx,
            X.by,
            0
          ]);
        }), e.deformOutputs && (e.deformOutputs.val = {
          deformations: h
        });
        const M = /* @__PURE__ */ new Map();
        S.nodeResults.forEach((X, U) => {
          const ae = X.x, Z = X.y;
          (ae < 1e-6 || ae > t - 1e-6 || Z < 1e-6 || Z > o - 1e-6) && M.set(U, [
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
          i / 4,
          0,
          0,
          0
        ]), v.set(R + 5, [
          0,
          0,
          i / 4,
          0,
          0,
          0
        ]), v.set(R + 6, [
          0,
          0,
          i / 4,
          0,
          0,
          0
        ]), v.set(R + 7, [
          0,
          0,
          i / 4,
          0,
          0,
          0
        ]), e.nodeInputs && (e.nodeInputs.val = {
          supports: M,
          loads: v
        }), e.elementInputs && (e.elementInputs.val = {}), e.analyzeOutputs) {
          const X = S.elementResults.length, U = /* @__PURE__ */ new Map(), ae = /* @__PURE__ */ new Map(), Z = /* @__PURE__ */ new Map();
          S.elementResults.forEach((K, de) => {
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
        const C = Ze();
        C && (C.settings.shellResults.val = "bendingXX");
      } catch (S) {
        console.warn("Zapata solver failed:", S.message);
      }
      setTimeout(() => Lt(), 50), Qe();
    }
    function ys() {
      const t = le("Lx") || 0.4, o = le("Ly") || 0.4, n = le("t") || 0.025, l = le("dBolt") || 0.022, a = le("sx") || 0.28, d = le("sy") || 0.28, s = le("colA") || 0.2, r = le("meshSize") || 8e-3, p = le("E") || 2e8, i = le("nu") || 0.3, c = p / (2 * (1 + i)), m = le("P") || -200, E = Math.round(le("nBolts") || 4), w = t / 2, y = o / 2, f = l / 2, g = s / 2, I = [];
      E >= 4 && (I.push([
        w - a / 2,
        y - d / 2
      ]), I.push([
        w + a / 2,
        y - d / 2
      ]), I.push([
        w + a / 2,
        y + d / 2
      ]), I.push([
        w - a / 2,
        y + d / 2
      ])), E >= 6 && (I.push([
        w,
        y - d / 2
      ]), I.push([
        w,
        y + d / 2
      ])), E >= 8 && (I.push([
        w - a / 2,
        y
      ]), I.push([
        w + a / 2,
        y
      ]));
      const { nodes: A, elements: T } = ho({
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
      }), B = (h, M) => {
        for (const [v, C] of I) if ((h - v) * (h - v) + (M - C) * (M - C) < f * f) return true;
        return false;
      }, H = T.filter((h) => {
        const M = (A[h[0]][0] + A[h[1]][0] + A[h[2]][0]) / 3, v = (A[h[0]][1] + A[h[1]][1] + A[h[2]][1]) / 3;
        return !B(M, v);
      }), x = A, u = /* @__PURE__ */ new Map();
      for (let h = 0; h < x.length; h++) {
        const M = x[h][0], v = x[h][1];
        for (const [C, X] of I) {
          const U = Math.sqrt((M - C) * (M - C) + (v - X) * (v - X));
          U >= f * 0.7 && U <= f * 1.5 && u.set(h, [
            true,
            true,
            true,
            false,
            false,
            false
          ]);
        }
      }
      const S = /* @__PURE__ */ new Map();
      let L = 0;
      for (let h = 0; h < x.length; h++) {
        const M = x[h][0], v = x[h][1];
        Math.abs(M - w) <= g && Math.abs(v - y) <= g && L++;
      }
      const R = m / Math.max(L, 1);
      for (let h = 0; h < x.length; h++) {
        const M = x[h][0], v = x[h][1];
        if (Math.abs(M - w) <= g && Math.abs(v - y) <= g) {
          const C = S.get(h) || [
            0,
            0,
            0,
            0,
            0,
            0
          ];
          C[2] += R, S.set(h, C);
        }
      }
      const W = {
        elasticities: new Map(H.map((h, M) => [
          M,
          p
        ])),
        elasticitiesOrthogonal: new Map(H.map((h, M) => [
          M,
          p
        ])),
        thicknesses: new Map(H.map((h, M) => [
          M,
          n
        ])),
        poissonsRatios: new Map(H.map((h, M) => [
          M,
          i
        ])),
        shearModuli: new Map(H.map((h, M) => [
          M,
          c
        ]))
      };
      console.log(`Placa Base: ${t * 1e3}x${o * 1e3}mm, t=${n * 1e3}mm, ${E} pernos d=${l * 1e3}mm`), console.log(`  P=${m} kN, col=${s * 1e3}mm, mesh=${r * 1e3}mm`), console.log(`  ${H.length} triangulos, ${x.length} nodos`);
      try {
        const h = Nt(x, H, {
          supports: u,
          loads: S
        }, W), M = Yo(x, H, W, h);
        e.nodes.val = x, e.elements.val = H, h && e.deformOutputs && (e.deformOutputs.val = h), e.nodeInputs && (e.nodeInputs.val = {
          supports: u,
          loads: S
        }), e.elementInputs && (e.elementInputs.val = {}), M && e.analyzeOutputs && (e.analyzeOutputs.val = M);
        let v = 0;
        h && h.deformations && h.deformations.forEach((C) => {
          const X = Math.sqrt(C[0] * C[0] + C[1] * C[1] + C[2] * C[2]);
          v = Math.max(v, X);
        }), console.log(`  max|u| = ${v.toExponential(4)}`);
      } catch (h) {
        console.warn("Placa Base failed:", h.message);
      }
      setTimeout(() => Lt(), 50), Qe();
    }
    function $s() {
      const t = le("colB") || 0.3, o = le("colH") || 0.3, n = le("colT") || 8e-3, l = le("colLen") || 1.5, a = le("Lx") || 0.45, d = le("Ly") || 0.45, s = le("tPlaca") || 0.025, r = le("dBolt") || 0.022, p = le("sx") || 0.32, i = le("sy") || 0.32, c = Math.round(le("nSubColV") || 6), m = Math.round(le("nSubColH") || 4), E = Math.round(le("nSubPlaca") || 10), w = le("E") || 2e8, y = le("nu") || 0.3, f = w / (2 * (1 + y)), g = le("P") || -300, I = a / 2, A = d / 2, T = r / 2, B = t / 2, H = o / 2, x = [], u = [], S = E, L = a / S, R = d / S, W = (pe, Q) => Q * (S + 1) + pe;
      for (let pe = 0; pe <= S; pe++) for (let Q = 0; Q <= S; Q++) x.push([
        Q * L,
        pe * R,
        0
      ]);
      const h = [
        [
          I - p / 2,
          A - i / 2
        ],
        [
          I + p / 2,
          A - i / 2
        ],
        [
          I + p / 2,
          A + i / 2
        ],
        [
          I - p / 2,
          A + i / 2
        ]
      ], M = (pe, Q) => {
        for (const [ue, we] of h) if ((pe - ue) * (pe - ue) + (Q - we) * (Q - we) < T * T) return true;
        return false;
      }, v = u.length;
      for (let pe = 0; pe < S; pe++) for (let Q = 0; Q < S; Q++) {
        const ue = (Q + 0.5) * L, we = (pe + 0.5) * R;
        M(ue, we) || u.push([
          W(Q, pe),
          W(Q + 1, pe),
          W(Q + 1, pe + 1),
          W(Q, pe + 1)
        ]);
      }
      const C = u.length - v, X = c, U = m, ae = [
        [
          I - B,
          A - H
        ],
        [
          I + B,
          A - H
        ],
        [
          I + B,
          A + H
        ],
        [
          I - B,
          A + H
        ]
      ], Z = u.length, K = [
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
        for (let ue = 0; ue < (S + 1) * (S + 1); ue++) if (Math.abs(x[ue][0] - pe) < L * 0.3 && Math.abs(x[ue][1] - Q) < R * 0.3 && Math.abs(x[ue][2]) < 1e-6) return ue;
        return -1;
      };
      for (const [pe, Q] of K) {
        const [ue, we] = ae[pe], [se, Ee] = ae[Q], je = [];
        for (let rt = 0; rt <= X; rt++) {
          const ct = [], At = rt / X * l;
          for (let _t = 0; _t <= U; _t++) {
            const Ct = _t / U, Bt = ue + Ct * (se - ue), So = we + Ct * (Ee - we);
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
        for (let rt = 0; rt < X; rt++) for (let ct = 0; ct < U; ct++) u.push([
          je[rt][ct],
          je[rt][ct + 1],
          je[rt + 1][ct + 1],
          je[rt + 1][ct]
        ]);
      }
      const re = u.length - Z, Ie = /* @__PURE__ */ new Map();
      for (let pe = 0; pe < (S + 1) * (S + 1); pe++) {
        const Q = x[pe][0], ue = x[pe][1];
        for (const [we, se] of h) {
          const Ee = Math.sqrt((Q - we) * (Q - we) + (ue - se) * (ue - se));
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
      const Pe = /* @__PURE__ */ new Map(), q = [];
      for (let pe = 0; pe < x.length; pe++) Math.abs(x[pe][2] - l) < 1e-6 && q.push(pe);
      const fe = g / Math.max(q.length, 1);
      for (const pe of q) Pe.set(pe, [
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
      for (let pe = v; pe < v + C; pe++) oe.elasticities.set(pe, w), oe.poissonsRatios.set(pe, y), oe.thicknesses.set(pe, s), oe.shearModuli.set(pe, f);
      for (let pe = Z; pe < Z + re; pe++) oe.elasticities.set(pe, w), oe.poissonsRatios.set(pe, y), oe.thicknesses.set(pe, n), oe.shearModuli.set(pe, f);
      console.log(`Col+Placa 3D: col ${t * 1e3}x${o * 1e3}x${n * 1e3}mm, h=${l}m`), console.log(`  Placa ${a * 1e3}x${d * 1e3}mm, t=${s * 1e3}mm, 4 pernos d=${r * 1e3}mm`), console.log(`  ${C} Q4 placa + ${re} Q4 columna = ${u.length} total`), console.log(`  ${x.length} nodos, P=${g} kN`);
      try {
        const pe = Nt(x, u, {
          supports: Ie,
          loads: Pe
        }, oe), Q = Yo(x, u, oe, pe);
        e.nodes.val = x, e.elements.val = u, pe && e.deformOutputs && (e.deformOutputs.val = pe), e.nodeInputs && (e.nodeInputs.val = {
          supports: Ie,
          loads: Pe
        }), e.elementInputs && (e.elementInputs.val = oe), Q && e.analyzeOutputs && (e.analyzeOutputs.val = Q);
        let ue = 0;
        (pe == null ? void 0 : pe.deformations) && pe.deformations.forEach((we) => {
          const se = Math.sqrt(we[0] * we[0] + we[1] * we[1] + we[2] * we[2]);
          ue = Math.max(ue, se);
        }), console.log(`  max|u| = ${ue.toExponential(4)}`);
      } catch (pe) {
        console.warn("Col+Placa failed:", pe.message), e.nodes.val = x, e.elements.val = u, e.nodeInputs && (e.nodeInputs.val = {
          supports: Ie,
          loads: Pe
        });
      }
      setTimeout(() => Lt(), 50), Qe();
    }
    function Ms() {
      const t = le("H") || 6, o = le("angle") || 45, n = le("bTop") || 3, l = le("bBot") || 3, a = le("meshSize") || 2, d = le("E") || 5e4, s = le("nu") || 0.3, r = le("gamma") || 18, p = le("c") || 15, i = le("phi") || 30, c = le("qs") || 0, m = t / Math.tan(o * Math.PI / 180), E = l + m + n, w = t, y = [
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
      ], { nodes: f, elements: g } = ho({
        points: y,
        polygon: [
          0,
          1,
          2,
          3,
          4,
          5
        ],
        maxMeshSize: a
      }), I = f, A = [], T = /* @__PURE__ */ new Map();
      for (let H = 0; H < I.length; H++) {
        const x = I[H][0], u = I[H][1];
        Math.abs(u + w) < 1e-6 ? (A.push({
          node: H,
          fixX: true,
          fixY: true
        }), T.set(H, [
          true,
          true,
          true,
          true,
          true,
          true
        ])) : (Math.abs(x) < 1e-6 || Math.abs(x - E) < 1e-6) && (A.push({
          node: H,
          fixX: true,
          fixY: false
        }), T.set(H, [
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
        const H = I.map((M) => [
          M[0],
          M[1]
        ]), x = g.map((M) => [
          M[0],
          M[1],
          M[2]
        ]), u = ll({
          nodes: H,
          elements: x,
          E: d,
          nu: s,
          gamma: r,
          c: p,
          phi: i,
          thickness: 1,
          supports: A,
          surcharge: c,
          surfaceYThreshold: B
        }), S = I.map((M) => [
          M[0],
          0,
          M[1]
        ]);
        e.nodes.val = S, e.elements.val = g;
        const L = /* @__PURE__ */ new Map();
        for (let M = 0; M < u.displacements.length; M++) {
          const [v, C] = u.displacements[M];
          L.set(M, [
            v,
            0,
            C,
            0,
            0,
            0
          ]);
        }
        e.deformOutputs && (e.deformOutputs.val = {
          deformations: L
        }), e.nodeInputs && (e.nodeInputs.val = {
          supports: T
        }), e.elementInputs && (e.elementInputs.val = {});
        const R = /* @__PURE__ */ new Map();
        for (let M = 0; M < u.plasticStrain.length; M++) {
          const v = u.plasticStrain[M];
          R.set(M, [
            v,
            v,
            v
          ]);
        }
        e.analyzeOutputs && (e.analyzeOutputs.val = {
          membraneXX: R
        });
        let W = 0;
        for (const [M, v] of u.displacements) {
          const C = Math.sqrt(M * M + v * v);
          W = Math.max(W, C);
        }
        let h = 0;
        for (const M of u.plasticStrain) h = Math.max(h, M);
        console.log(`Talud SRM: ${I.length} nodos, ${g.length} triangulos`), console.log(`  H=${t}, angulo=${o}\xB0, c=${p} kPa, \u03C6=${i}\xB0, \u03B3=${r}`), console.log("  \u2550\u2550\u2550 Strength Reduction Method (Mohr-Coulomb) \u2550\u2550\u2550"), console.log(`  FOS = ${u.fos.toFixed(3)}`), console.log(`  max|u| = ${W.toExponential(4)}`), console.log(`  max \u03B5_pl = ${h.toExponential(4)}`), u.fos < 1 ? console.warn("  \u26A0 TALUD INESTABLE (FOS < 1.0)") : u.fos < 1.5 && console.warn("  \u26A0 FOS < 1.5 \u2014 revisar estabilidad");
      } catch (H) {
        console.warn("Talud SRM failed:", H.message);
      }
      setTimeout(() => Lt(), 50), Qe();
    }
    let io = null, kt = null, co = null;
    function ga() {
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
      const o = Vo.find((n) => n.id === F);
      return t / o.toM;
    }
    function Mt(t) {
      const o = Vo.find((n) => n.id === F);
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
    function An() {
      return Y.label;
    }
    function xa() {
      switch (Vo.find((o) => o.id === F).id) {
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
    function va() {
      const t = ko(20594), o = ko(58840), n = Math.max(1, Math.round((o - t) / 40));
      return [
        Math.round(t),
        Math.round(o),
        n
      ];
    }
    function ws(t, o, n, l, a) {
      const d = Oe.steelVigaType, s = d === 0 ? mn() : bn();
      if (Oe.vigaMat === 0) {
        for (let r = 0; r < o.length; r++) {
          const p = o[r], i = `b${n}${r}`, c = `h${n}${r}`, m = {};
          m[i] = +$t(p.b).toFixed(2), m[c] = +$t(p.h).toFixed(2), t.addBinding(m, i, {
            min: l[0],
            max: l[1],
            step: l[2],
            label: `b sv${n}${r + 1}`
          }), t.addBinding(m, c, {
            min: l[0],
            max: l[1],
            step: l[2],
            label: `h sv${n}${r + 1}`
          });
        }
        t.on("change", (r) => {
          var _a2;
          const p = (_a2 = r.target) == null ? void 0 : _a2.key, i = p == null ? void 0 : p.match(new RegExp(`^b${n}(\\d+)$`)), c = p == null ? void 0 : p.match(new RegExp(`^h${n}(\\d+)$`));
          i && (o[parseInt(i[1])].b = Mt(r.value), Re()), c && (o[parseInt(c[1])].h = Mt(r.value), Re());
        });
      } else if (d <= 1) {
        for (let r = 0; r < o.length; r++) {
          const p = {};
          p[`p${n}${r}`] = o[r].profileIdx ?? 0, t.addBinding(p, `p${n}${r}`, {
            label: `sv${n}${r + 1}`,
            options: s
          });
        }
        t.on("change", (r) => {
          var _a2, _b;
          const i = (_b = (_a2 = r.target) == null ? void 0 : _a2.key) == null ? void 0 : _b.match(new RegExp(`^p${n}(\\d+)$`));
          i && (o[parseInt(i[1])].profileIdx = r.value, Re());
        });
      } else if (d === 2) {
        for (let r = 0; r < o.length; r++) {
          const p = o[r], i = {}, c = `${n}${r}`;
          i[`bf${c}`] = +$t(p.bf ?? 0.2).toFixed(3), i[`h${c}`] = +$t(p.hf ?? 0.4).toFixed(3), i[`tf${c}`] = +$t(p.tf ?? 0.015).toFixed(3), i[`tw${c}`] = +$t(p.tw ?? 0.01).toFixed(3), t.addBinding(i, `bf${c}`, {
            min: l[0],
            max: l[1],
            step: l[2],
            label: `bf sv${n}${r + 1}`
          }), t.addBinding(i, `h${c}`, {
            min: l[0],
            max: l[1],
            step: l[2],
            label: `h sv${n}${r + 1}`
          }), t.addBinding(i, `tf${c}`, {
            min: a[0],
            max: a[1],
            step: a[2],
            label: `tf sv${n}${r + 1}`
          }), t.addBinding(i, `tw${c}`, {
            min: a[0],
            max: a[1],
            step: a[2],
            label: `tw sv${n}${r + 1}`
          });
        }
        t.on("change", (r) => {
          var _a2;
          const p = (_a2 = r.target) == null ? void 0 : _a2.key;
          for (let i = 0; i < o.length; i++) {
            const c = `${n}${i}`;
            p === `bf${c}` && (o[i].bf = Mt(r.value), Re()), p === `h${c}` && (o[i].hf = Mt(r.value), Re()), p === `tf${c}` && (o[i].tf = Mt(r.value), Re()), p === `tw${c}` && (o[i].tw = Mt(r.value), Re());
          }
        });
      } else {
        for (let r = 0; r < o.length; r++) {
          const p = o[r], i = {}, c = `${n}${r}`;
          i[`bc${c}`] = +$t(p.bc ?? 0.2).toFixed(3), i[`hc${c}`] = +$t(p.hc ?? 0.3).toFixed(3), i[`t${c}`] = +$t(p.t ?? 8e-3).toFixed(3), t.addBinding(i, `bc${c}`, {
            min: l[0],
            max: l[1],
            step: l[2],
            label: `b sv${n}${r + 1}`
          }), t.addBinding(i, `hc${c}`, {
            min: l[0],
            max: l[1],
            step: l[2],
            label: `h sv${n}${r + 1}`
          }), t.addBinding(i, `t${c}`, {
            min: a[0],
            max: a[1],
            step: a[2],
            label: `t sv${n}${r + 1}`
          });
        }
        t.on("change", (r) => {
          var _a2;
          const p = (_a2 = r.target) == null ? void 0 : _a2.key;
          for (let i = 0; i < o.length; i++) {
            const c = `${n}${i}`;
            p === `bc${c}` && (o[i].bc = Mt(r.value), Re()), p === `hc${c}` && (o[i].hc = Mt(r.value), Re()), p === `t${c}` && (o[i].t = Mt(r.value), Re());
          }
        });
      }
    }
    function No() {
      var _a2;
      if (kt) {
        try {
          kt.dispose();
        } catch {
        }
        kt = null;
      }
      const t = document.getElementById("sections");
      if (t && (t.innerHTML = ""), k !== "edificio" && k !== "frame") {
        t && (t.style.display = "none");
        return;
      }
      const o = ga();
      if (!o) return;
      o.style.display = "";
      const n = $, l = Math.round(((_a2 = ne.nPisos) == null ? void 0 : _a2.val) ?? 3), a = xa(), d = va(), s = ie.length || 1, r = te.length || 1;
      for (; Oe.perFloor.length < l; ) {
        const x = Oe.perFloor.length > 0 ? JSON.parse(JSON.stringify(Oe.perFloor[Oe.perFloor.length - 1])) : ro(s, r);
        Oe.perFloor.push(x);
      }
      Oe.perFloor.length > l && (Oe.perFloor.length = l);
      for (const x of Oe.perFloor) {
        for (; x.vigasX.length < s; ) x.vigasX.push(x.vigasX.length > 0 ? {
          ...x.vigasX[x.vigasX.length - 1]
        } : ut());
        for (x.vigasX.length > s && (x.vigasX.length = s); x.vigasY.length < r; ) x.vigasY.push(x.vigasY.length > 0 ? {
          ...x.vigasY[x.vigasY.length - 1]
        } : ut());
        x.vigasY.length > r && (x.vigasY.length = r);
      }
      kt = new on({
        title: `Sections (${n.label})`,
        container: o
      });
      const p = {
        colMat: Oe.colMat
      };
      if (kt.addBinding(p, "colMat", {
        label: "Col Material",
        options: {
          Hormigon: 0,
          Acero: 1,
          CFT: 2
        }
      }).on("change", (x) => {
        Oe.colMat = x.value, No(), Re();
      }), Oe.colMat === 0) {
        const x = {
          forma: Oe.colShape
        };
        kt.addBinding(x, "forma", {
          label: "Col forma",
          options: {
            Rectangular: 0,
            Circular: 1
          }
        }).on("change", (S) => {
          Oe.colShape = S.value, No(), Re();
        });
        const u = {
          fc: +ko(Oe.fc).toFixed(1)
        };
        kt.addBinding(u, "fc", {
          min: d[0],
          max: d[1],
          step: d[2],
          label: `f'c col (${An()})`
        }), kt.on("change", (S) => {
          var _a3;
          ((_a3 = S.target) == null ? void 0 : _a3.key) === "fc" && (Oe.fc = Tn(S.value), Re());
        });
      } else if (Oe.colMat === 1) {
        const x = {
          colType: Oe.steelColType
        };
        kt.addBinding(x, "colType", {
          label: "Col tipo",
          options: {
            "W profile": 0,
            "HSS profile": 1,
            "I param": 2,
            Tubular: 3
          }
        }).on("change", (u) => {
          Oe.steelColType = u.value, No(), Re();
        });
      }
      kt.addBlade({
        view: "separator"
      });
      const i = {
        vigaMat: Oe.vigaMat
      };
      if (kt.addBinding(i, "vigaMat", {
        label: "Viga Material",
        options: {
          Hormigon: 0,
          Acero: 1
        }
      }).on("change", (x) => {
        Oe.vigaMat = x.value, No(), Re();
      }), Oe.vigaMat === 1) {
        const x = {
          vigaType: Oe.steelVigaType
        };
        kt.addBinding(x, "vigaType", {
          label: "Viga tipo",
          options: {
            "W profile": 0,
            "HSS profile": 1,
            "I param": 2,
            Tubular: 3
          }
        }).on("change", (u) => {
          Oe.steelVigaType = u.value, No(), Re();
        });
      }
      const c = Oe.steelColType === 0 ? mn() : bn();
      Oe.steelVigaType === 0 ? mn() : bn();
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
        const u = Oe.perFloor[x], S = kt.addFolder({
          title: `Piso ${x + 1}`,
          expanded: x < 2
        });
        if (Oe.colMat === 0) if (Oe.colShape === 1) {
          const L = {
            dCol: +$t(u.dCol).toFixed(2)
          };
          S.addBinding(L, "dCol", {
            min: a[0],
            max: a[1],
            step: a[2],
            label: "d col"
          }), S.on("change", (R) => {
            var _a3;
            ((_a3 = R.target) == null ? void 0 : _a3.key) === "dCol" && (u.dCol = Mt(R.value), Re());
          });
        } else {
          const L = {
            bCol: +$t(u.bCol).toFixed(2),
            hCol: +$t(u.hCol).toFixed(2)
          };
          S.addBinding(L, "bCol", {
            min: a[0],
            max: a[1],
            step: a[2],
            label: "b col"
          }), S.addBinding(L, "hCol", {
            min: a[0],
            max: a[1],
            step: a[2],
            label: "h col"
          }), S.on("change", (R) => {
            var _a3, _b;
            ((_a3 = R.target) == null ? void 0 : _a3.key) === "bCol" && (u.bCol = Mt(R.value), Re()), ((_b = R.target) == null ? void 0 : _b.key) === "hCol" && (u.hCol = Mt(R.value), Re());
          });
        }
        else if (Oe.colMat === 1) if (Oe.steelColType <= 1) {
          const L = {
            col: u.colProfileIdx
          };
          S.addBinding(L, "col", {
            label: "Columna",
            options: c
          }).on("change", (R) => {
            u.colProfileIdx = R.value, Re();
          });
        } else if (Oe.steelColType === 2) {
          const L = {
            bf: +$t(u.colBf ?? 0.3).toFixed(3),
            h: +$t(u.colHf ?? 0.3).toFixed(3),
            tf: +$t(u.colTf ?? 0.02).toFixed(3),
            tw: +$t(u.colTw ?? 0.012).toFixed(3)
          };
          S.addBinding(L, "bf", {
            min: a[0],
            max: a[1],
            step: a[2],
            label: "Col bf"
          }), S.addBinding(L, "h", {
            min: a[0],
            max: a[1],
            step: a[2],
            label: "Col h"
          }), S.addBinding(L, "tf", {
            min: m[0],
            max: m[1],
            step: m[2],
            label: "Col tf"
          }), S.addBinding(L, "tw", {
            min: m[0],
            max: m[1],
            step: m[2],
            label: "Col tw"
          }), S.on("change", (R) => {
            var _a3, _b, _c, _d;
            ((_a3 = R.target) == null ? void 0 : _a3.key) === "bf" && (u.colBf = Mt(R.value), Re()), ((_b = R.target) == null ? void 0 : _b.key) === "h" && (u.colHf = Mt(R.value), Re()), ((_c = R.target) == null ? void 0 : _c.key) === "tf" && (u.colTf = Mt(R.value), Re()), ((_d = R.target) == null ? void 0 : _d.key) === "tw" && (u.colTw = Mt(R.value), Re());
          });
        } else {
          const L = {
            bc: +$t(u.colBc ?? 0.3).toFixed(3),
            hc: +$t(u.colHc ?? 0.3).toFixed(3),
            t: +$t(u.colT ?? 0.01).toFixed(3)
          };
          S.addBinding(L, "bc", {
            min: a[0],
            max: a[1],
            step: a[2],
            label: "Col b"
          }), S.addBinding(L, "hc", {
            min: a[0],
            max: a[1],
            step: a[2],
            label: "Col h"
          }), S.addBinding(L, "t", {
            min: m[0],
            max: m[1],
            step: m[2],
            label: "Col t"
          }), S.on("change", (R) => {
            var _a3, _b, _c;
            ((_a3 = R.target) == null ? void 0 : _a3.key) === "bc" && (u.colBc = Mt(R.value), Re()), ((_b = R.target) == null ? void 0 : _b.key) === "hc" && (u.colHc = Mt(R.value), Re()), ((_c = R.target) == null ? void 0 : _c.key) === "t" && (u.colT = Mt(R.value), Re());
          });
        }
        else {
          const L = {
            bc: +$t(u.colBc ?? 0.3).toFixed(3),
            hc: +$t(u.colHc ?? 0.3).toFixed(3),
            t: +$t(u.colT ?? 0.01).toFixed(3),
            Es: +ko(u.colEs ?? 2e8).toFixed(0),
            nuS: u.colNuS ?? 0.3,
            fc: +ko(u.colFc ?? 28e3).toFixed(1),
            nuC: u.colNuC ?? 0.2
          };
          S.addBinding(L, "bc", {
            min: a[0],
            max: a[1],
            step: a[2],
            label: "Col b"
          }), S.addBinding(L, "hc", {
            min: a[0],
            max: a[1],
            step: a[2],
            label: "Col h"
          }), S.addBinding(L, "t", {
            min: m[0],
            max: m[1],
            step: m[2],
            label: "Col t"
          }), S.addBlade({
            view: "separator"
          });
          const R = +ko(1e8).toFixed(0), W = +ko(3e8).toFixed(0), h = Math.max(1, Math.round((W - R) / 200));
          S.addBinding(L, "Es", {
            min: R,
            max: W,
            step: h,
            label: `Es (${An()})`
          }), S.addBinding(L, "nuS", {
            min: 0.15,
            max: 0.45,
            step: 0.01,
            label: "\u03BDs"
          }), S.addBinding(L, "fc", {
            min: d[0],
            max: d[1],
            step: d[2],
            label: `f'c (${An()})`
          }), S.addBinding(L, "nuC", {
            min: 0.1,
            max: 0.35,
            step: 0.01,
            label: "\u03BDc"
          }), S.on("change", (M) => {
            var _a3, _b, _c, _d, _e2, _f, _g;
            ((_a3 = M.target) == null ? void 0 : _a3.key) === "bc" && (u.colBc = Mt(M.value), Re()), ((_b = M.target) == null ? void 0 : _b.key) === "hc" && (u.colHc = Mt(M.value), Re()), ((_c = M.target) == null ? void 0 : _c.key) === "t" && (u.colT = Mt(M.value), Re()), ((_d = M.target) == null ? void 0 : _d.key) === "Es" && (u.colEs = Tn(M.value), Re()), ((_e2 = M.target) == null ? void 0 : _e2.key) === "nuS" && (u.colNuS = M.value, Re()), ((_f = M.target) == null ? void 0 : _f.key) === "fc" && (u.colFc = Tn(M.value), Re()), ((_g = M.target) == null ? void 0 : _g.key) === "nuC" && (u.colNuC = M.value, Re());
          });
        }
        if (u.vigasX.length > 0) {
          const L = S.addFolder({
            title: `Vigas X (${u.vigasX.length})`,
            expanded: false
          });
          ws(L, u.vigasX, "x", a, m);
        }
        if (u.vigasY.length > 0) {
          const L = S.addFolder({
            title: `Vigas Y (${u.vigasY.length})`,
            expanded: false
          });
          ws(L, u.vigasY, "y", a, m);
        }
      }
      kt.addBlade({
        view: "separator"
      });
      const E = kt.addFolder({
        title: "Vigas Secundarias",
        expanded: false
      }), w = {
        activar: Se,
        direccion: Je === "x" ? 0 : 1,
        cantidad: Ae
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
        ((_a3 = x.target) == null ? void 0 : _a3.key) === "activar" && (Se = x.value, Re()), ((_b = x.target) == null ? void 0 : _b.key) === "direccion" && (Je = x.value === 0 ? "x" : "y", Re()), ((_c = x.target) == null ? void 0 : _c.key) === "cantidad" && (Ae = Math.round(x.value), Re());
      }), kt.addBlade({
        view: "separator"
      });
      const y = kt.addFolder({
        title: "Losas de Piso",
        expanded: true
      }), f = {
        activar: Ue,
        espesor: +$t(at).toFixed(3),
        subdivX: dt,
        subdivY: yt
      };
      y.addBinding(f, "activar", {
        label: "Activar losas"
      }), y.addBinding(f, "espesor", {
        min: a[0],
        max: a[1] * 0.3,
        step: a[2],
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
        ((_a3 = x.target) == null ? void 0 : _a3.key) === "activar" && (Ue = x.value, Re()), ((_b = x.target) == null ? void 0 : _b.key) === "espesor" && (at = Mt(x.value), Re()), ((_c = x.target) == null ? void 0 : _c.key) === "subdivX" && (dt = Math.round(x.value), Re()), ((_d = x.target) == null ? void 0 : _d.key) === "subdivY" && (yt = Math.round(x.value), Re());
      }), kt.addBlade({
        view: "separator"
      });
      const g = kt.addFolder({
        title: "Muros de Corte",
        expanded: true
      }), I = {
        espesor: +$t(De).toFixed(3),
        subdivH: He,
        subdivW: be
      };
      g.addBinding(I, "espesor", {
        min: a[0],
        max: a[1],
        step: a[2],
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
      }), g.on("change", (x) => {
        var _a3, _b, _c;
        ((_a3 = x.target) == null ? void 0 : _a3.key) === "espesor" && (De = Mt(x.value), Re()), ((_b = x.target) == null ? void 0 : _b.key) === "subdivH" && (He = Math.round(x.value), Re()), ((_c = x.target) == null ? void 0 : _c.key) === "subdivW" && (be = Math.round(x.value), Re());
      });
      const A = ie.length || 1, T = te.length || 1, B = A + 1, H = T + 1;
      if (A > 0) {
        const x = g.addFolder({
          title: `Muros dir X (${A} vanos)`,
          expanded: false
        });
        for (let u = 0; u < A; u++) for (let S = 0; S < H; S++) {
          const L = `wx_${u}_${S}`, R = ge.some((M) => M.dir === "x" && M.bay === u && M.axisIdx === S), W = {};
          W[L] = R;
          const h = `Vano X${u + 1} / Eje Y${String.fromCharCode(65 + S)}`;
          x.addBinding(W, L, {
            label: h
          }).on("change", (M) => {
            M.value ? ge.push({
              dir: "x",
              bay: u,
              axisIdx: S,
              floors: [
                -1
              ]
            }) : ge = ge.filter((v) => !(v.dir === "x" && v.bay === u && v.axisIdx === S)), Re();
          });
        }
      }
      if (T > 0) {
        const x = g.addFolder({
          title: `Muros dir Y (${T} vanos)`,
          expanded: false
        });
        for (let u = 0; u < T; u++) for (let S = 0; S < B; S++) {
          const L = `wy_${u}_${S}`, R = ge.some((M) => M.dir === "y" && M.bay === u && M.axisIdx === S), W = {};
          W[L] = R;
          const h = `Vano Y${u + 1} / Eje X${S + 1}`;
          x.addBinding(W, L, {
            label: h
          }).on("change", (M) => {
            M.value ? ge.push({
              dir: "y",
              bay: u,
              axisIdx: S,
              floors: [
                -1
              ]
            }) : ge = ge.filter((v) => !(v.dir === "y" && v.bay === u && v.axisIdx === S)), Re();
          });
        }
      }
      if (ge.length > 0) {
        g.addBlade({
          view: "separator"
        });
        const x = {
          muros: `${ge.length} ubicaciones`
        };
        g.addBinding(x, "muros", {
          label: "Total",
          readonly: true
        });
      }
    }
    function so() {
      const t = document.getElementById("parameters");
      if (!t) return;
      if (me || (me = t.innerHTML), ve) {
        try {
          ve.dispose();
        } catch {
        }
        ve = null;
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
      ve = new on({
        title: `Parameters \u2014 ${o}`,
        container: t
      });
      const n = is()[k];
      if (n) {
        const a = {};
        for (const s of n) a[s.key] = ne[s.key].val;
        for (const s of n) ve.addBinding(a, s.key, {
          min: ne[s.key].min,
          max: ne[s.key].max,
          step: ne[s.key].step,
          label: ne[s.key].label
        });
        const d = ve.addFolder({
          title: "Rangos",
          expanded: false
        });
        for (const s of n) {
          const r = {
            min: ne[s.key].min,
            max: ne[s.key].max
          };
          d.addBinding(r, "min", {
            label: `${s.key} min`,
            step: s.step
          }), d.addBinding(r, "max", {
            label: `${s.key} max`,
            step: s.step
          }), d.on("change", () => {
            ne[s.key] && (ne[s.key].min = r.min, ne[s.key].max = r.max, ne[s.key].val < r.min && (ne[s.key].val = r.min), ne[s.key].val > r.max && (ne[s.key].val = r.max)), so(), Re();
          });
        }
        ve.on("change", (s) => {
          var _a2, _b;
          const r = (_a2 = s.target) == null ? void 0 : _a2.key;
          if (r && ne[r]) {
            if (ne[r].val = s.value, k === "edificio" && (r === "nVanosX" || r === "nVanosY" || r === "nPisos")) {
              if (r === "nVanosX" || r === "nVanosY") {
                const p = Math.round(ne.nVanosX.val), i = Math.round(ne.nVanosY.val);
                for (; ie.length < p; ) ie.push(ie[ie.length - 1] ?? $.defaultSpan);
                for (ie.length > p && (ie.length = p); te.length < i; ) te.push(te[te.length - 1] ?? $.defaultSpan * 0.8);
                te.length > i && (te.length = i);
              }
              if (r === "nPisos" || r === "hPiso") {
                const p = Math.round(ne.nPisos.val), i = ((_b = ne.hPiso) == null ? void 0 : _b.val) ?? 3;
                for (; O.length < p; ) O.push(O[O.length - 1] ?? i);
                O.length > p && (O.length = p);
              }
              so();
            }
            Re();
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
          let d = function() {
            var _a2, _b, _c, _d;
            const p = "ABCDEFGHIJKLMNOPQRSTUVWXYZ", i = ((_a2 = ne.Lvix) == null ? void 0 : _a2.val) || 0, c = ((_b = ne.Lvdx) == null ? void 0 : _b.val) || 0, m = ((_c = ne.Lviy) == null ? void 0 : _c.val) || 0, E = ((_d = ne.Lvdy) == null ? void 0 : _d.val) || 0;
            let w = "X: ";
            i > 0 && (w += `\u251C${i.toFixed(1)}\u2524`);
            for (let g = 0; g < ie.length; g++) w += `[${p[g + (i > 0 ? 1 : 0)]}]\u2500\u2500${ie[g].toFixed(1)}\u2500\u2500`;
            w += `[${p[ie.length + (i > 0 ? 1 : 0)]}]`, c > 0 && (w += `\u251C${c.toFixed(1)}\u2524`);
            let y = "Y: ";
            m > 0 && (y += `\u251C${m.toFixed(1)}\u2524`);
            for (let g = 0; g < te.length; g++) y += `[${g + 1 + (m > 0 ? 1 : 0)}]\u2500\u2500${te[g].toFixed(1)}\u2500\u2500`;
            y += `[${te.length + 1 + (m > 0 ? 1 : 0)}]`, E > 0 && (y += `\u251C${E.toFixed(1)}\u2524`);
            let f = "Z: ";
            for (let g = 0; g < O.length; g++) f += `P${g + 1}=${O[g].toFixed(1)} `;
            r.textContent = w + `
` + y + `
` + f;
          };
          a.innerHTML = "";
          const s = $;
          try {
            co = new on({
              title: `Luces (${s.length})`,
              container: a
            });
            const p = co.addFolder({
              title: "Luces X",
              expanded: true
            });
            for (let c = 0; c < ie.length; c++) {
              const m = c, E = {
                v: ie[c]
              };
              p.addBinding(E, "v", {
                min: s.spanRange[0],
                max: s.spanRange[1],
                step: s.spanRange[2],
                label: `svx${c + 1}`
              }).on("change", (w) => {
                ie[m] = w.value, Re();
              });
            }
            const i = co.addFolder({
              title: "Luces Y",
              expanded: true
            });
            for (let c = 0; c < te.length; c++) {
              const m = c, E = {
                v: te[c]
              };
              i.addBinding(E, "v", {
                min: s.spanRange[0],
                max: s.spanRange[1],
                step: s.spanRange[2],
                label: `svy${c + 1}`
              }).on("change", (w) => {
                te[m] = w.value, Re();
              });
            }
            if (O.length > 0) {
              const c = co.addFolder({
                title: "Alturas por Piso",
                expanded: true
              });
              for (let m = 0; m < O.length; m++) {
                const E = m, w = {
                  v: O[m]
                };
                c.addBinding(w, "v", {
                  min: s.heightRange[0],
                  max: s.heightRange[1],
                  step: s.heightRange[2],
                  label: `Piso ${m + 1}`
                }).on("change", (y) => {
                  O[E] = y.value, Re();
                });
              }
            }
          } catch (p) {
            console.error("Luces Tweakpane error:", p);
          }
          const r = document.createElement("div");
          r.style.cssText = "font-family:monospace;font-size:10px;color:#aaa;padding:6px;background:#1a1a2e;border-radius:4px;margin-top:6px;line-height:1.6;white-space:pre;overflow-x:auto;", d(), a.appendChild(r);
        }
      }
      if (No(), ve) {
        ve.addBlade({
          view: "separator"
        });
        const a = un()[k];
        if (a && a.length > 0) {
          const d = {};
          a.forEach((r, p) => {
            d[r.label] = p;
          });
          const s = {
            apoyo: xt
          };
          ve.addBinding(s, "apoyo", {
            label: "Apoyo",
            options: d
          }).on("change", (r) => {
            xt = r.value, Re();
          });
        }
        if (k === "placa-3q" || k === "placa-q4") {
          const d = {
            teoria: Le
          };
          ve.addBinding(d, "teoria", {
            label: "Teor\xEDa",
            options: {
              Membrana: 1,
              "Kirchhoff (delgada)": 2,
              "Mindlin (gruesa)": 3
            }
          }).on("change", (s) => {
            Le = s.value, Re();
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
        const d = io.addFolder({
          title: "Rangos",
          expanded: false
        });
        for (const s of l) {
          const r = {
            min: ft[s.key].min,
            max: ft[s.key].max
          };
          d.addBinding(r, "min", {
            label: `${s.key} min`,
            step: s.step
          }), d.addBinding(r, "max", {
            label: `${s.key} max`,
            step: s.step
          }), d.on("change", () => {
            ft[s.key] && (ft[s.key].min = r.min, ft[s.key].max = r.max, ft[s.key].val < r.min && (ft[s.key].val = r.min), ft[s.key].val > r.max && (ft[s.key].val = r.max)), so(), Re();
          });
        }
        io.on("change", (s) => {
          var _a2;
          const r = (_a2 = s.target) == null ? void 0 : _a2.key;
          if (r && ft[r]) {
            if (ft[r].val = s.value, e.nodeInputs) {
              const p = e.nodeInputs.val;
              p.supports && (e.nodeInputs.val = {
                supports: p.supports
              });
            }
            setTimeout(() => Fn(), 30);
          }
        });
      }
      window.__cad = {
        setParam: (a, d) => {
          if (ne[a]) ne[a].val = d, Re(), so();
          else if (ft[a]) {
            if (ft[a].val = d, e.nodeInputs) {
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
          for (const d in ne) a[d] = ne[d].val;
          for (const d in ft) a[d] = ft[d].val;
          return a;
        },
        setGenerator: tt,
        createCustomPanel: (a, d, s) => ya(a, d, s),
        removeCustomPanel: (a) => {
          Ss(a);
        }
      };
    }
    const zn = /* @__PURE__ */ new Map();
    function ya(t, o, n) {
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
      const d = new on({
        title: t,
        container: a
      }), s = {};
      for (const [r, p] of Object.entries(o)) {
        const i = p.label || r;
        if (Array.isArray(p.value)) {
          s[r] = p.value;
          const c = {
            [r]: p.value.join(", ")
          };
          d.addBinding(c, r, {
            label: i
          }).on("change", (m) => {
            s[r] = m.value.split(",").map((E) => parseFloat(E.trim())).filter((E) => !isNaN(E)), n && n({
              ...s
            });
          });
        } else if (p.options) {
          s[r] = p.value;
          const c = {
            [r]: p.value
          }, m = {};
          for (const E of p.options) m[E] = E;
          d.addBinding(c, r, {
            label: i,
            options: m
          }).on("change", (E) => {
            s[r] = E.value, n && n({
              ...s
            });
          });
        } else if (typeof p.value == "boolean") {
          s[r] = p.value;
          const c = {
            [r]: p.value
          };
          d.addBinding(c, r, {
            label: i
          }).on("change", (m) => {
            s[r] = m.value, n && n({
              ...s
            });
          });
        } else if (typeof p.value == "string") {
          s[r] = p.value;
          const c = {
            [r]: p.value
          };
          d.addBinding(c, r, {
            label: i
          }).on("change", (m) => {
            s[r] = m.value, n && n({
              ...s
            });
          });
        } else {
          s[r] = p.value;
          const c = {
            [r]: p.value
          }, m = {
            label: i
          };
          p.min !== void 0 && (m.min = p.min), p.max !== void 0 && (m.max = p.max), p.step !== void 0 && (m.step = p.step), d.addBinding(c, r, m).on("change", (E) => {
            s[r] = E.value, n && n({
              ...s
            });
          });
        }
      }
      return n && d.addButton({
        title: "Aplicar"
      }).on("click", () => {
        n({
          ...s
        });
      }), zn.set(t, {
        pane: d,
        values: s
      }), console.log(`Panel "${t}" created with ${Object.keys(o).length} params`), s;
    }
    function Ss(t) {
      const o = zn.get(t);
      if (o) {
        try {
          o.pane.dispose();
        } catch {
        }
        zn.delete(t);
      }
    }
    function $a() {
      if (ve) {
        try {
          ve.dispose();
        } catch {
        }
        ve = null;
      }
      if (io) {
        try {
          io.dispose();
        } catch {
        }
        io = null;
      }
      if (kt) {
        try {
          kt.dispose();
        } catch {
        }
        kt = null;
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
      o && n && (n.style.cssText = "", document.body.appendChild(n), o.remove()), n && me && (n.innerHTML = me);
    }
    const ze = document.createElement("div");
    ze.id = "cad3d-panel";
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
  `, document.head.appendChild(Es), Ja() === "light" && document.documentElement.classList.add("awatif-light"), Va((t) => {
      t === "light" ? document.documentElement.classList.add("awatif-light") : document.documentElement.classList.remove("awatif-light"), k && Lt(true);
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
    let Tt = null;
    function Ma() {
      var _a2, _b, _c, _d, _e2, _f;
      const t = e.nodes.val, o = e.elements.val, n = (_a2 = e.nodeInputs) == null ? void 0 : _a2.val, l = (_b = e.elementInputs) == null ? void 0 : _b.val, a = F, d = b, s = [];
      if (s.push("# Awatif FEM \u2014 Model Export"), s.push(`# Generator: ${k || "custom"}`), s.push(`# Units: ${d}, ${a}`), s.push(`# ${(/* @__PURE__ */ new Date()).toISOString()}`), s.push(""), s.push(`## NODES (${t.length})`), s.push("# idx     X          Y          Z"), t.forEach((i, c) => {
        s.push(`  ${String(c).padStart(4)}  ${i[0].toFixed(4).padStart(10)}  ${i[1].toFixed(4).padStart(10)}  ${i[2].toFixed(4).padStart(10)}`);
      }), s.push(""), s.push(`## ELEMENTS (${o.length})`), s.push("# idx    nodeI  nodeJ"), o.forEach((i, c) => {
        const m = i.map((E) => String(E).padStart(6)).join("");
        s.push(`  ${String(c).padStart(4)}  ${m}`);
      }), s.push(""), (n == null ? void 0 : n.supports) && n.supports.size > 0 && (s.push(`## SUPPORTS (${n.supports.size})`), s.push("# node   Ux  Uy  Uz  Rx  Ry  Rz"), n.supports.forEach((i, c) => {
        const m = i.map((E) => E ? "  1" : "  0").join("");
        s.push(`  ${String(c).padStart(4)} ${m}`);
      }), s.push("")), (n == null ? void 0 : n.loads) && n.loads.size > 0 && (s.push(`## LOADS (${n.loads.size})`), s.push("# node         Fx          Fy          Fz          Mx          My          Mz"), n.loads.forEach((i, c) => {
        const m = i.map((E) => E.toFixed(3).padStart(11)).join(" ");
        s.push(`  ${String(c).padStart(4)}  ${m}`);
      }), s.push("")), l) {
        s.push("## ELEMENT PROPERTIES");
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
        ], c = "# elem  " + i.map((m) => m.name.padStart(12)).join(" ");
        s.push(c);
        for (let m = 0; m < o.length; m++) {
          const E = i.map((w) => {
            var _a3;
            const y = (_a3 = w.map) == null ? void 0 : _a3.get(m);
            return y !== void 0 ? y.toExponential(4).padStart(12) : "           -";
          }).join(" ");
          s.push(`  ${String(m).padStart(4)}  ${E}`);
        }
        s.push("");
      }
      const r = (_d = (_c = e.deformOutputs) == null ? void 0 : _c.val) == null ? void 0 : _d.deformations;
      r && r.size > 0 && (s.push(`## DISPLACEMENTS (${r.size} nodes)`), s.push("# node          Ux           Uy           Uz           Rx           Ry           Rz"), r.forEach((i, c) => {
        const m = i.map((E) => E.toExponential(4).padStart(12)).join(" ");
        s.push(`  ${String(c).padStart(4)}  ${m}`);
      }), s.push(""));
      const p = (_f = (_e2 = e.deformOutputs) == null ? void 0 : _e2.val) == null ? void 0 : _f.reactions;
      if (p && p.size > 0 && (s.push(`## REACTIONS (${p.size} supports)`), s.push("# node          Rx           Ry           Rz           Mx           My           Mz"), p.forEach((i, c) => {
        const m = i.map((E) => E.toFixed(4).padStart(12)).join(" ");
        s.push(`  ${String(c).padStart(4)}  ${m}`);
      }), s.push("")), k) {
        s.push("## CLI COMMAND");
        const i = Object.entries(ne).map(([c, m]) => `${c}=${m.val}`).join(" ");
        s.push(`cad.${k === "edificio" ? "building" : k}(${i})`);
      }
      return s.join(`
`);
    }
    let Zo = false;
    function wa() {
      var _a2, _b, _c, _d;
      if (Tt) {
        Tt.remove(), Tt = null, Zo = false;
        return;
      }
      const t = Ma();
      Tt = document.createElement("div"), Tt.id = "export-overlay", Tt.style.cssText = `
      position:fixed; bottom:10px; right:10px; z-index:10000;
      width:720px; max-width:90vw;
      display:flex; flex-direction:column;
      font-family:monospace; color:var(--cad-text,#ccc);
      background:var(--cad-bg,#1a1a2e); border:1px solid var(--cad-border,#333);
      border-radius:8px; box-shadow:0 4px 20px rgba(0,0,0,0.5);
      transition: height 0.2s ease;
    `, Tt.innerHTML = `
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
    `, document.body.appendChild(Tt), (_a2 = Tt.querySelector("#export-close")) == null ? void 0 : _a2.addEventListener("click", () => {
        Tt == null ? void 0 : Tt.remove(), Tt = null, Zo = false;
      }), (_b = Tt.querySelector("#export-minimize")) == null ? void 0 : _b.addEventListener("click", () => {
        const o = Tt.querySelector("#export-body"), n = Tt.querySelector("#export-minimize");
        Zo = !Zo, Zo ? (o.style.display = "none", n.textContent = "\u25A2", n.title = "Restaurar", Tt.style.width = "auto") : (o.style.display = "flex", n.textContent = "\u25AC", n.title = "Minimizar", Tt.style.width = "720px");
      }), (_c = Tt.querySelector("#export-copy")) == null ? void 0 : _c.addEventListener("click", () => {
        const o = Tt.querySelector("#export-text");
        navigator.clipboard.writeText(o.value).then(() => {
          const n = Tt.querySelector("#export-status");
          n.textContent = "\u2713 Copiado al clipboard", setTimeout(() => n.textContent = "", 2e3);
        });
      }), (_d = Tt.querySelector("#export-json")) == null ? void 0 : _d.addEventListener("click", () => {
        var _a3, _b2, _c2, _d2, _e2, _f;
        const o = e.nodes.val, n = e.elements.val, l = (_a3 = e.nodeInputs) == null ? void 0 : _a3.val, a = (_b2 = e.elementInputs) == null ? void 0 : _b2.val, d = {
          generator: k || "custom",
          units: {
            force: b,
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
        }))), a && (d.properties = {}, a.elasticities && (d.properties.E = Object.fromEntries(a.elasticities)), a.areas && (d.properties.A = Object.fromEntries(a.areas)), a.momentsOfInertiaZ && (d.properties.Iz = Object.fromEntries(a.momentsOfInertiaZ)), a.momentsOfInertiaY && (d.properties.Iy = Object.fromEntries(a.momentsOfInertiaY)), a.shearModuli && (d.properties.G = Object.fromEntries(a.shearModuli)), a.torsionalConstants && (d.properties.J = Object.fromEntries(a.torsionalConstants)));
        const s = (_d2 = (_c2 = e.deformOutputs) == null ? void 0 : _c2.val) == null ? void 0 : _d2.deformations;
        s && s.size > 0 && (d.displacements = {}, s.forEach((c, m) => d.displacements[m] = c));
        const r = (_f = (_e2 = e.deformOutputs) == null ? void 0 : _e2.val) == null ? void 0 : _f.reactions;
        r && r.size > 0 && (d.reactions = {}, r.forEach((c, m) => d.reactions[m] = c));
        const p = Tt.querySelector("#export-text");
        p.value = JSON.stringify(d, null, 2);
        const i = Tt.querySelector("#export-status");
        i.textContent = "Formato JSON activo \u2014 presiona Copy para copiar";
      });
    }
    function Qe() {
      var _a2, _b, _c;
      const t = ze.querySelector("#cad3d-info");
      if (t) {
        const o = e.nodes.val.length, n = e.elements.val, l = n.length, a = ((_c = (_b = (_a2 = e.nodeInputs) == null ? void 0 : _a2.val) == null ? void 0 : _b.supports) == null ? void 0 : _c.size) || 0;
        let d = 0, s = 0, r = 0;
        for (const i of n) i.length === 2 ? d++ : i.length === 3 ? s++ : i.length === 4 && r++;
        let p = `${o}n ${l}e ${a}s`;
        (r > 0 || s > 0) && (p += ` | ${d}fr`, r > 0 && (p += ` ${r}q4`), s > 0 && (p += ` ${s}tri`)), t.textContent = p;
      }
    }
    function Ln() {
      var _a2;
      if (!qe || !e.nodeInputs || !e.elementInputs) return;
      const t = e.nodes.val, o = e.elements.val, n = e.nodeInputs.val, l = e.elementInputs.val;
      if (!(t.length === 0 || o.length === 0) && !(!n.supports || n.supports.size === 0) && !(!l.densities || l.densities.size === 0)) try {
        const a = Math.min(12, t.length * 6 - n.supports.size * 6);
        if (a <= 0) return;
        const d = al(t, o, n, l, Math.min(a, 12));
        if (d.frequencies && d.frequencies.length > 0) {
          Ce = d, ke = t.map((i) => [
            ...i
          ]), xe = 0;
          const { extent: s } = vo(), r = (_a2 = d.modeShapes) == null ? void 0 : _a2[0];
          if (r) {
            let i = 0;
            for (let c = 0; c < t.length; c++) {
              const m = r[c * 6] || 0, E = r[c * 6 + 1] || 0, w = r[c * 6 + 2] || 0;
              i = Math.max(i, Math.sqrt(m * m + E * E + w * w));
            }
            Ge = i > 1e-12 ? s * 0.05 / i : 1;
          }
          const p = `${k} \u2014 ${t.length}n ${o.length}e`;
          it.render(d, {
            title: p
          }), it.div.style.display = "", Qo(), console.log(`Modal: ${d.frequencies.length} modos. f\u2081 = ${d.frequencies[0].toFixed(4)} Hz`);
        }
      } catch (a) {
        console.warn("Modal analysis failed:", a.message), Ce = null;
      }
    }
    function Cn() {
      he && (cancelAnimationFrame(he), he = 0), ke.length > 0 && (e.nodes.val = ke.map((t) => [
        ...t
      ])), it.div.style.display = "none", Ce = null;
    }
    function Qo() {
      var _a2;
      if (he && cancelAnimationFrame(he), !(Ce == null ? void 0 : Ce.modeShapes) || !ke.length) return;
      const t = Ce.modeShapes[xe];
      if (!t) return;
      const o = ((_a2 = Ce.frequencies) == null ? void 0 : _a2[xe]) || 1, n = Math.max(0.5, Math.min(3, o * 0.1)), l = performance.now(), a = ke.length, d = e.elements.rawVal, { extent: s } = vo(), r = ze.querySelector("#cad3d-modal-scale"), p = r && parseFloat(r.value) || 5;
      let i = 0;
      for (let T = 0; T < a; T++) {
        const B = t[T * 6] || 0, H = t[T * 6 + 1] || 0, x = t[T * 6 + 2] || 0;
        i = Math.max(i, Math.sqrt(B * B + H * H + x * x));
      }
      const c = i > 1e-12 ? s * p / 100 / i : 1, m = Ze();
      if (!m) return;
      let E = null, w = null, y = null;
      m.scene.traverse((T) => {
        var _a3, _b;
        !E && T.isPoints && T.geometry && (E = T), !w && T.isLineSegments && T.geometry && !T.name && (w = T), !y && T.isMesh && ((_a3 = T.material) == null ? void 0 : _a3.transparent) && ((_b = T.material) == null ? void 0 : _b.opacity) < 0.5 && T.geometry && (y = T);
      });
      const f = new Float32Array(a * 3), g = [];
      for (const T of d) if (T.length === 2) g.push([
        T[0],
        T[1]
      ]);
      else for (let B = 0; B < T.length; B++) g.push([
        T[B],
        T[(B + 1) % T.length]
      ]);
      const I = new Float32Array(g.length * 6);
      function A() {
        const T = (performance.now() - l) / 1e3, B = Math.sin(2 * Math.PI * n * T) * c;
        for (let H = 0; H < a; H++) {
          const x = ke[H];
          f[H * 3] = x[0] + (t[H * 6] || 0) * B, f[H * 3 + 1] = x[1] + (t[H * 6 + 1] || 0) * B, f[H * 3 + 2] = x[2] + (t[H * 6 + 2] || 0) * B;
        }
        if (E) {
          const H = E.geometry, x = H.getAttribute("position");
          x && x.array.length === f.length ? (x.array.set(f), x.needsUpdate = true) : H.setAttribute("position", new zo(f.slice(), 3));
        }
        if (w) {
          for (let u = 0; u < g.length; u++) {
            const [S, L] = g[u];
            I[u * 6] = f[S * 3], I[u * 6 + 1] = f[S * 3 + 1], I[u * 6 + 2] = f[S * 3 + 2], I[u * 6 + 3] = f[L * 3], I[u * 6 + 4] = f[L * 3 + 1], I[u * 6 + 5] = f[L * 3 + 2];
          }
          const H = w.geometry, x = H.getAttribute("position");
          x && x.array.length === I.length ? (x.array.set(I), x.needsUpdate = true) : H.setAttribute("position", new zo(I.slice(), 3));
        }
        if (y) {
          const H = [];
          for (const x of d) if (x.length === 3) {
            const [u, S, L] = x;
            H.push(f[u * 3], f[u * 3 + 1], f[u * 3 + 2]), H.push(f[S * 3], f[S * 3 + 1], f[S * 3 + 2]), H.push(f[L * 3], f[L * 3 + 1], f[L * 3 + 2]);
          } else if (x.length === 4) {
            const [u, S, L, R] = x;
            H.push(f[u * 3], f[u * 3 + 1], f[u * 3 + 2]), H.push(f[S * 3], f[S * 3 + 1], f[S * 3 + 2]), H.push(f[L * 3], f[L * 3 + 1], f[L * 3 + 2]), H.push(f[u * 3], f[u * 3 + 1], f[u * 3 + 2]), H.push(f[L * 3], f[L * 3 + 1], f[L * 3 + 2]), H.push(f[R * 3], f[R * 3 + 1], f[R * 3 + 2]);
          }
          if (H.length > 0) {
            const x = y.geometry, u = new Float32Array(H), S = x.getAttribute("position");
            S && S.array.length === u.length ? (S.array.set(u), S.needsUpdate = true) : x.setAttribute("position", new zo(u, 3));
          }
        }
        m.render(), he = requestAnimationFrame(A);
      }
      he = requestAnimationFrame(A);
    }
    function Fn() {
      var _a2, _b, _c, _d, _e2;
      if (!e.deformOutputs || !e.analyzeOutputs || !e.nodeInputs || !e.elementInputs) return;
      const t = e.nodes.val, o = e.elements.val;
      let n = e.nodeInputs.val;
      const l = e.elementInputs.val;
      if (t.length === 0 || o.length === 0 || !n.supports || n.supports.size === 0) return;
      if (!n.loads || n.loads.size === 0) {
        const y = le("CM") ?? 0, f = le("CV") ?? 0, g = y + f, I = le("Ex") ?? 0, A = le("Ey") ?? 0;
        if (g === 0 && I === 0 && A === 0) return;
        const T = /* @__PURE__ */ new Map(), B = [];
        for (let M = 0; M < t.length; M++) n.supports.has(M) || B.push(M);
        const H = (M) => Math.round(M * 1e3) / 1e3, x = /* @__PURE__ */ new Set();
        n.supports.forEach((M, v) => {
          x.add(`${H(t[v][0])},${H(t[v][1])}`);
        });
        const u = /* @__PURE__ */ new Set();
        for (const M of B) x.has(`${H(t[M][0])},${H(t[M][1])}`) && u.add(M);
        const S = /* @__PURE__ */ new Set(), L = /* @__PURE__ */ new Set();
        if (I !== 0 || A !== 0) {
          let M = -1 / 0, v = -1 / 0;
          for (const X of u) M = Math.max(M, H(t[X][0])), v = Math.max(v, H(t[X][1]));
          const C = /* @__PURE__ */ new Map();
          for (const X of u) {
            const U = H(t[X][2]);
            C.has(U) || C.set(U, []), C.get(U).push(X);
          }
          C.forEach((X) => {
            if (I !== 0) {
              const U = /* @__PURE__ */ new Set();
              for (const ae of X) if (H(t[ae][0]) === M) {
                const Z = H(t[ae][1]);
                U.has(Z) || (U.add(Z), S.add(ae));
              }
            }
            if (A !== 0) {
              const U = /* @__PURE__ */ new Set();
              for (const ae of X) if (H(t[ae][1]) === v) {
                const Z = H(t[ae][0]);
                U.has(Z) || (U.add(Z), L.add(ae));
              }
            }
          });
        }
        const R = 9.81, W = /* @__PURE__ */ new Map();
        for (let M = 0; M < o.length; M++) {
          const v = o[M], C = ((_a2 = l.densities) == null ? void 0 : _a2.get(M)) ?? 0;
          if (!(Math.abs(C) < 1e-15)) {
            if (v.length === 2) {
              const X = ((_b = l.areas) == null ? void 0 : _b.get(M)) ?? 0, U = t[v[0]], ae = t[v[1]], Z = Math.sqrt((ae[0] - U[0]) ** 2 + (ae[1] - U[1]) ** 2 + (ae[2] - U[2]) ** 2), de = -(C * X * Z * R) / 2;
              W.set(v[0], (W.get(v[0]) ?? 0) + de), W.set(v[1], (W.get(v[1]) ?? 0) + de);
            } else if (v.length >= 3) {
              const X = ((_c = l.thicknesses) == null ? void 0 : _c.get(M)) ?? 0;
              let U = 0;
              if (v.length === 3) {
                const [K, de, re] = v.map((Ie) => t[Ie]);
                U = 0.5 * Math.abs((de[0] - K[0]) * (re[1] - K[1]) - (re[0] - K[0]) * (de[1] - K[1]));
              } else if (v.length === 4) {
                const [K, de, re, Ie] = v.map((Pe) => t[Pe]);
                if (U = 0.5 * Math.abs((de[0] - K[0]) * (re[1] - K[1]) - (re[0] - K[0]) * (de[1] - K[1])) + 0.5 * Math.abs((re[0] - K[0]) * (Ie[1] - K[1]) - (Ie[0] - K[0]) * (re[1] - K[1])), U < 1e-10) {
                  const Pe = [
                    de[0] - K[0],
                    de[1] - K[1],
                    de[2] - K[2]
                  ], q = [
                    Ie[0] - K[0],
                    Ie[1] - K[1],
                    Ie[2] - K[2]
                  ], fe = [
                    Pe[1] * q[2] - Pe[2] * q[1],
                    Pe[2] * q[0] - Pe[0] * q[2],
                    Pe[0] * q[1] - Pe[1] * q[0]
                  ];
                  U = Math.sqrt(fe[0] ** 2 + fe[1] ** 2 + fe[2] ** 2);
                }
              }
              const Z = -(C * X * U * R) / v.length;
              for (const K of v) W.set(K, (W.get(K) ?? 0) + Z);
            }
          }
        }
        const h = /* @__PURE__ */ new Set();
        for (const M of o) M.length === 2 && (h.add(M[0]), h.add(M[1]));
        for (const M of B) {
          const v = S.has(M) ? I : 0, C = L.has(M) ? A : 0, X = W.get(M) ?? 0, U = h.has(M) ? g : 0, ae = X + U;
          (v !== 0 || C !== 0 || Math.abs(ae) > 1e-10) && T.set(M, [
            v,
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
      let d = 0, s = 0, r = 0;
      for (const y of o) y.length === 2 ? d++ : y.length === 3 ? r++ : y.length === 4 && s++;
      const p = ((_d = n.supports) == null ? void 0 : _d.size) || 0, i = ((_e2 = n.loads) == null ? void 0 : _e2.size) || 0, c = t.length * 6, m = c - p * 6, E = [], w = (y) => E.push(y);
      w('<b style="color:var(--cad-heading)">FEM Solver</b>'), w(`<span style="color:var(--cad-info)">Modelo:</span> ${t.length} nodos, ${o.length} elem`), d && w(`&nbsp;&nbsp;Frames: <b>${d}</b>`), s && w(`&nbsp;&nbsp;Shell Q4: <b>${s}</b>`), r && w(`&nbsp;&nbsp;Triangulos: <b>${r}</b>`), w(`&nbsp;&nbsp;Apoyos: ${p} &nbsp;|&nbsp; Cargas: ${i}`), w(`<span style="color:var(--cad-info)">DOFs:</span> ${c} total, ~${m} libres`), w('<hr style="border-color:var(--cad-border);margin:4px 0">'), w(`<span style="color:#888">1.</span> Ensamblaje <b>K</b> global (${c}&times;${c})`), w("&nbsp;&nbsp;&nbsp;<i>K<sub>global</sub> = &Sigma; T<sup>T</sup> &middot; K<sub>local</sub> &middot; T</i>");
      try {
        const y = Nt(t, o, n, l), f = performance.now() - a;
        if (y) {
          e.deformOutputs.val = y, w(`<span style="color:#888">2.</span> <b>K &middot; u = F</b> &rarr; SparseLU &rarr; <span style="color:#00cc88">${f.toFixed(0)} ms</span>`);
          let g = 0, I = -1, A = 0, T = 0;
          y.deformations && y.deformations.forEach((S, L) => {
            const R = Math.sqrt(S[0] * S[0] + S[1] * S[1] + S[2] * S[2]);
            R > g && (g = R, I = L, A = S[0], T = S[2]);
          }), w('<span style="color:#888">3.</span> Desplazamientos:'), w(`&nbsp;&nbsp;&nbsp;max|<b>u</b>| = <b style="color:var(--cad-heading)">${g.toExponential(3)}</b> m <span style="color:#666">(nodo ${I})</span>`), w(`&nbsp;&nbsp;&nbsp;u<sub>x</sub> = ${(A * 1e3).toFixed(4)} mm &nbsp;|&nbsp; u<sub>z</sub> = ${(T * 1e3).toFixed(4)} mm`);
          const B = performance.now(), H = Yo(t, o, l, y), x = performance.now() - B;
          H && (e.analyzeOutputs.val = H, w(`<span style="color:#888">4.</span> Fuerzas internas: <span style="color:#00cc88">${x.toFixed(0)} ms</span>`), w("&nbsp;&nbsp;&nbsp;<i>F<sub>int</sub> = K<sub>local</sub> &middot; T &middot; u</i>"));
          const u = performance.now() - a;
          w('<hr style="border-color:var(--cad-border);margin:4px 0">'), w(`<b style="color:#00cc88">&#10004; Completado: ${u.toFixed(0)} ms</b>`);
        }
      } catch (y) {
        const f = performance.now() - a;
        w(`<b style="color:#ff4444">&#10008; Error (${f.toFixed(0)} ms): ${y.message}</b>`);
      }
      window.__femLog = E, console.log(`FEM Solver: ${t.length}n ${o.length}e \u2192 ${(performance.now() - a).toFixed(0)}ms`), qe && setTimeout(() => Ln(), 50);
    }
    function Rn(t, o) {
      const n = t * o, l = t * o * o * o / 12, a = o * t * t * t / 12, d = Math.min(t, o), s = Math.max(t, o), r = d * d * d * s * (1 / 3 - 0.21 * d / s * (1 - d * d * d * d / (12 * s * s * s * s)));
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
    function Pn(t, o, n, l) {
      const a = o - 2 * n, d = 2 * t * n + a * l, s = (t * o * o * o - (t - l) * a * a * a) / 12, r = (2 * n * t * t * t + a * l * l * l) / 12, p = (2 * t * n * n * n + a * l * l * l) / 3;
      return {
        A: d,
        Iz: s,
        Iy: r,
        J: p
      };
    }
    function Nn(t, o, n) {
      const l = t - 2 * n, a = o - 2 * n, d = t * o - l * a, s = (t * o * o * o - l * a * a * a) / 12, r = (o * t * t * t - a * l * l * l) / 12, p = (t - n) * (o - n), i = 2 * ((t - n) / n + (o - n) / n), c = 4 * p * p / (i > 0 ? i : 1);
      return {
        A: d,
        Iz: s,
        Iy: r,
        J: c
      };
    }
    function Sa(t, o, n, l, a, d, s) {
      const p = 4700 * Math.sqrt(d / 1e3) * 1e3 / l, i = t - 2 * n, c = o - 2 * n, m = t * o - i * c, E = (t * o * o * o - i * c * c * c) / 12, w = (o * t * t * t - c * i * i * i) / 12, y = i * c, f = i * c * c * c / 12, g = c * i * i * i / 12, I = m + p * y, A = E + p * f, T = w + p * g, B = l / (2 * (1 + a)), H = (t - n) * (o - n), x = 2 * ((t - n) / n + (o - n) / n), u = 4 * H * H / (x > 0 ? x : 1);
      return {
        A: I,
        Iz: A,
        Iy: T,
        J: u,
        Es: l,
        Gs: B,
        A_steel: m,
        A_conc: y
      };
    }
    function xo() {
      if (!e.elementInputs) return;
      const t = e.elements.val, o = $, n = {
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
        const { colMat: a, vigaMat: d, colShape: s, fc: r, perFloor: p } = Oe, i = 4700 * Math.sqrt(r / 1e3) * 1e3, c = i / (2 * 1.2), m = 24 / 9.80665, E = o.E, w = o.G, y = o.rho;
        for (let f = 0; f < t.length; f++) {
          if (ce.has(f)) {
            const S = 4700 * Math.sqrt(r / 1e3) * 1e3, L = 0.2;
            n.elasticities.set(f, S), n.poissonsRatios.set(f, L), n.thicknesses.set(f, De), n.shearModuli.set(f, S / (2 * (1 + L))), n.densities.set(f, 24 / 9.80665);
            continue;
          }
          if (It.has(f)) {
            const S = 4700 * Math.sqrt(r / 1e3) * 1e3, L = 0.2;
            n.elasticities.set(f, S), n.poissonsRatios.set(f, L), n.thicknesses.set(f, at), n.shearModuli.set(f, S / (2 * (1 + L))), n.densities.set(f, 24 / 9.80665);
            continue;
          }
          const g = _.has(f), I = $e.get(f) ?? 0, A = p[I] ?? p[0] ?? {
            bCol: 0.4,
            hCol: 0.4,
            dCol: 0.4
          };
          let T, B, H, x;
          if (g) if (a === 0) B = i, H = c, x = m, T = s === 1 ? Is(A.dCol) : Rn(A.bCol, A.hCol), n.sectionShapes.set(f, s === 1 ? {
            type: "circ",
            d: A.dCol
          } : {
            type: "rect",
            b: A.bCol,
            h: A.hCol
          });
          else if (a === 1) {
            B = E, H = w, x = y;
            const S = Oe.steelColType;
            if (S <= 1) {
              const L = Io[A.colProfileIdx] ?? Io[0];
              T = {
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
            } else if (S === 2) {
              const L = A.colBf ?? 0.3, R = A.colHf ?? 0.3, W = A.colTf ?? 0.02, h = A.colTw ?? 0.012;
              T = Pn(L, R, W, h);
              const M = `I${(R * 100).toFixed(0)}x${(L * 100).toFixed(0)}`;
              n.sectionShapes.set(f, {
                type: "I",
                b: L,
                h: R,
                tf: W,
                tw: h,
                name: M
              });
            } else {
              const L = A.colBc ?? 0.3, R = A.colHc ?? 0.3, W = A.colT ?? 0.01;
              T = Nn(L, R, W);
              const h = `\u25A1${(R * 100).toFixed(0)}x${(L * 100).toFixed(0)}x${(W * 1e3).toFixed(0)}`;
              n.sectionShapes.set(f, {
                type: "HSS",
                b: L,
                h: R,
                tw: W,
                name: h
              });
            }
          } else {
            const S = A.colBc ?? 0.3, L = A.colHc ?? 0.3, R = A.colT ?? 0.01, W = A.colFc ?? 28e3, h = A.colEs ?? 2e8, M = A.colNuS ?? 0.3;
            A.colNuC;
            const v = Sa(S, L, R, h, M, W);
            T = {
              A: v.A,
              Iz: v.Iz,
              Iy: v.Iy,
              J: v.J
            }, B = v.Es, H = v.Gs;
            const C = 7.85, X = 24 / 9.80665;
            x = (C * v.A_steel + X * v.A_conc) / (v.A_steel + v.A_conc);
            const U = `CFT ${(L * 1e3).toFixed(0)}X${(S * 1e3).toFixed(0)}X${(R * 1e3).toFixed(0)}`;
            n.sectionShapes.set(f, {
              type: "CFT",
              b: S,
              h: L,
              tw: R,
              name: U
            });
          }
          else {
            const S = Te.get(f), L = S ? S.dir === "x" ? A.vigasX : A.vigasY : [], R = S ? L[S.bay] ?? L[0] ?? ut() : ut();
            if (d === 0) B = i, H = c, x = m, T = Rn(R.b, R.h), n.sectionShapes.set(f, {
              type: "rect",
              b: R.b,
              h: R.h
            });
            else {
              B = E, H = w, x = y;
              const W = Oe.steelVigaType;
              if (W <= 1) {
                const h = Io[R.profileIdx ?? 0] ?? Io[0];
                T = {
                  A: h.A,
                  Iz: h.Iz,
                  Iy: h.Iy,
                  J: h.J
                }, n.sectionShapes.set(f, {
                  type: "I",
                  b: h.bf,
                  h: h.d,
                  name: h.name
                });
              } else if (W === 2) {
                const h = R.bf ?? 0.2, M = R.hf ?? 0.4, v = R.tf ?? 0.015, C = R.tw ?? 0.01;
                T = Pn(h, M, v, C);
                const X = `I${(M * 100).toFixed(0)}x${(h * 100).toFixed(0)}`;
                n.sectionShapes.set(f, {
                  type: "I",
                  b: h,
                  h: M,
                  tf: v,
                  tw: C,
                  name: X
                });
              } else {
                const h = R.bc ?? 0.2, M = R.hc ?? 0.3, v = R.t ?? 8e-3;
                T = Nn(h, M, v);
                const C = `\u25A1${(M * 100).toFixed(0)}x${(h * 100).toFixed(0)}x${(v * 1e3).toFixed(0)}`;
                n.sectionShapes.set(f, {
                  type: "HSS",
                  b: h,
                  h: M,
                  tw: v,
                  name: C
                });
              }
            }
          }
          const u = ye.get(f);
          if (u) {
            if ((u.material ?? 1) === 0 ? (B = i, H = c, x = m) : (B = E, H = w, x = y), u.secType === "rect" && u.b && u.h) T = Rn(u.b, u.h), n.sectionShapes.set(f, {
              type: "rect",
              b: u.b,
              h: u.h
            });
            else if (u.secType === "circ" && u.b) T = Is(u.b), n.sectionShapes.set(f, {
              type: "circ",
              d: u.b
            });
            else if ((u.secType === "W" || u.secType === "HSS") && u.profileIdx !== void 0) {
              const L = Io[u.profileIdx] ?? Io[0];
              T = {
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
              T = Pn(u.bf, u.hf, u.tf, u.tw);
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
              T = Nn(u.bc, u.hc, u.t);
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
          n.elasticities.set(f, B), n.shearModuli.set(f, H), n.areas.set(f, T.A), n.momentsOfInertiaZ.set(f, T.Iy), n.momentsOfInertiaY.set(f, T.Iz), n.torsionalConstants.set(f, T.J), n.densities.set(f, x), u && u.releases12 && u.releases12.some((S) => S) && (n.momentReleases || (n.momentReleases = /* @__PURE__ */ new Map()), n.momentReleases.set(f, u.releases12)), u && u.springs12 && u.springs12.some((S) => S > 0) && (n.partialFixitySprings || (n.partialFixitySprings = /* @__PURE__ */ new Map()), n.partialFixitySprings.set(f, u.springs12));
        }
      } else for (let a = 0; a < t.length; a++) n.elasticities.set(a, o.E), n.shearModuli.set(a, o.G), n.areas.set(a, o.A), n.momentsOfInertiaZ.set(a, o.Iy), n.momentsOfInertiaY.set(a, o.Iz), n.torsionalConstants.set(a, o.J), n.densities.set(a, o.rho);
      e.elementInputs.val = n;
    }
    function ks(t) {
      ze.querySelectorAll("[data-ex]").forEach((o) => {
        o.classList.toggle("active", o.dataset.ex === t);
      });
    }
    window.innerWidth <= 600 && ze.classList.add("collapsed"), setTimeout(() => {
      var _a2, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l2, _m, _n2, _o2, _p;
      (_a2 = ze.querySelector("#cad3d-toggle")) == null ? void 0 : _a2.addEventListener("click", (h) => {
        h.stopPropagation(), ze.classList.add("collapsed");
      }), (_b = ze.querySelector("#cad3d-expand")) == null ? void 0 : _b.addEventListener("click", (h) => {
        h.stopPropagation(), ze.classList.remove("collapsed");
      }), ze.querySelectorAll("[data-ex]").forEach((h) => {
        h.addEventListener("click", (M) => {
          M.stopPropagation();
          const v = h.dataset.ex;
          ks(v), Ke.example(v);
        });
      }), ze.querySelectorAll("[data-view]").forEach((h) => {
        h.addEventListener("click", (M) => {
          M.stopPropagation();
          const v = h.dataset.view;
          yo(v), ze.querySelectorAll("[data-view]").forEach((C) => C.classList.remove("view-active")), h.classList.add("view-active");
        });
      }), (_c = ze.querySelector("#cad3d-btn-clear")) == null ? void 0 : _c.addEventListener("click", (h) => {
        h.stopPropagation(), k = "", la.val = false, $a(), Ke.clear();
      }), (_d = ze.querySelector("#cad3d-select")) == null ? void 0 : _d.addEventListener("click", (h) => {
        var _a3;
        h.stopPropagation(), oo && (oo = false, Ao()), po && cn(), Yt = !Yt, (_a3 = ze.querySelector("#cad3d-select")) == null ? void 0 : _a3.classList.toggle("inspect-active", Yt);
        const v = Ze();
        v && (v.controls.enabled = !Yt), Yt || rn();
      }), (_e2 = ze.querySelector("#cad3d-draw")) == null ? void 0 : _e2.addEventListener("click", (h) => {
        var _a3;
        h.stopPropagation(), oo && (oo = false, Ao()), Yt && rn(), po = !po, (_a3 = ze.querySelector("#cad3d-draw")) == null ? void 0 : _a3.classList.toggle("inspect-active", po), po ? Aa() : cn();
      }), (_f = ze.querySelector("#cad3d-inspect")) == null ? void 0 : _f.addEventListener("click", (h) => {
        var _a3;
        h.stopPropagation(), Yt && rn(), po && cn(), oo = !oo, (_a3 = ze.querySelector("#cad3d-inspect")) == null ? void 0 : _a3.classList.toggle("inspect-active", oo), oo || Ao();
      }), (_g = ze.querySelector("#cad3d-new-model")) == null ? void 0 : _g.addEventListener("click", (h) => {
        h.stopPropagation(), Ke.clear(), Ve = null;
      });
      const t = ze.querySelector("#cad3d-tests-menu");
      t && t.addEventListener("change", () => {
        const h = t.value;
        t.value = "", h && o(h);
      });
      function o(h) {
        var _a3, _b2, _c2, _d2, _e3, _f2;
        const C = 15e3 * Math.sqrt(210) * 10, X = 0.2, U = C / (2 * (1 + X)), ae = 0.09, Z = 0.3 ** 4 / 12, K = 0.141 * 0.3 ** 4, de = 0.25 * 0.4, re = 0.25 * 0.4 ** 3 / 12, Ie = 0.4 * 0.25 ** 3 / 12, Pe = 1e-3, q = 5 / 6 * ae, fe = 5 / 6 * de, oe = [];
        function pe(Q, ue, we) {
          const se = {
            elasticities: /* @__PURE__ */ new Map(),
            shearModuli: /* @__PURE__ */ new Map(),
            areas: /* @__PURE__ */ new Map(),
            momentsOfInertiaZ: /* @__PURE__ */ new Map(),
            momentsOfInertiaY: /* @__PURE__ */ new Map(),
            torsionalConstants: /* @__PURE__ */ new Map(),
            shearAreasY: /* @__PURE__ */ new Map(),
            shearAreasZ: /* @__PURE__ */ new Map()
          };
          for (const Ee of ue) se.elasticities.set(Ee, C), se.shearModuli.set(Ee, U), se.areas.set(Ee, ae), se.momentsOfInertiaZ.set(Ee, Z), se.momentsOfInertiaY.set(Ee, Z), se.torsionalConstants.set(Ee, K), se.shearAreasY.set(Ee, q), se.shearAreasZ.set(Ee, q);
          for (const Ee of we) se.elasticities.set(Ee, C), se.shearModuli.set(Ee, U), se.areas.set(Ee, de), se.momentsOfInertiaZ.set(Ee, Ie), se.momentsOfInertiaY.set(Ee, re), se.torsionalConstants.set(Ee, Pe), se.shearAreasY.set(Ee, fe), se.shearAreasZ.set(Ee, fe);
          return se;
        }
        if (h === "test-cantilever" || h === "test-all") {
          const we = 270 / (3 * C * Z), se = [
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
          const rt = Nt(se, Ee, {
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
            nodes: se,
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
        if (h === "test-portal-1p" || h === "test-all") {
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
          ], we = pe(3, [
            0,
            1
          ], [
            2
          ]), se = Nt(Q, ue, {
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
            elements: ue,
            results: [
              {
                label: "Ux top (cm)",
                awatif: se.deformations.get(2)[0] * 100,
                reference: 2.0618,
                refSource: "ETABS 22.6"
              }
            ]
          });
        }
        if (h === "test-portal-2p" || h === "test-all") {
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
          ], we = pe(6, [
            0,
            1,
            2,
            3
          ], [
            4,
            5
          ]), se = Nt(Q, ue, {
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
            elements: ue,
            results: [
              {
                label: "Ux Z=3m (cm)",
                awatif: se.deformations.get(2)[0] * 100,
                reference: 2.5188,
                refSource: "ETABS 22.6"
              },
              {
                label: "Ux Z=6m (cm)",
                awatif: se.deformations.get(4)[0] * 100,
                reference: 5.6424,
                refSource: "ETABS 22.6"
              }
            ]
          });
        }
        if (h === "test-wall-only" || h === "test-all") {
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
          ], ue = [
            [
              0,
              1,
              2,
              3
            ]
          ], se = Nt(Q, ue, {
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
            elements: ue,
            results: [
              {
                label: "Ux top (cm)",
                awatif: se.deformations.get(2)[0] * 100,
                reference: 0.013519,
                refSource: "ETABS 22.6"
              }
            ]
          });
        }
        if (h === "test-portal-wall" || h === "test-all") {
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
          const se = Nt(Q, ue, {
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
            elements: ue,
            results: [
              {
                label: "Ux h=3m (cm)",
                awatif: se.deformations.get(2)[0] * 100,
                reference: 0.0195,
                refSource: "ETABS 22.6"
              },
              {
                label: "Ux h=6m (cm)",
                awatif: se.deformations.get(4)[0] * 100,
                reference: 2.1133,
                refSource: "ETABS 22.6"
              }
            ]
          });
        }
        if (h === "test-wilson-beam" || h === "test-all") {
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
          }, Ct = /* @__PURE__ */ new Map();
          Ct.set(0, [
            true,
            true,
            true,
            true,
            true,
            true
          ]), Ct.set(5, [
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
            const ao = Nt(ct, At, {
              supports: Ct,
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
        if (h === "test-scordelis" || h === "test-all") {
          const rt = 40 * Math.PI / 180, ct = 8, At = 8, _t = [];
          for (let ot = 0; ot <= ct; ot++) for (let St = 0; St <= At; St++) {
            const eo = 25 * ot / ct, Pt = rt * St / At, bo = 25 * Math.sin(Pt), mo = 25 * Math.cos(Pt) - 25 * Math.cos(rt);
            _t.push([
              eo,
              bo,
              mo
            ]);
          }
          const Ct = [];
          for (let ot = 0; ot < ct; ot++) for (let St = 0; St < At; St++) {
            const eo = ot * (At + 1) + St, Pt = (ot + 1) * (At + 1) + St, bo = (ot + 1) * (At + 1) + (St + 1), mo = ot * (At + 1) + (St + 1);
            Ct.push([
              eo,
              Pt,
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
          for (let ot = 0; ot < Ct.length; ot++) Bt.elasticities.set(ot, 432e6), Bt.shearModuli.set(ot, So), Bt.thicknesses.set(ot, 0.25), Bt.poissonsRatios.set(ot, 0);
          const ao = /* @__PURE__ */ new Map();
          for (let ot = 0; ot <= ct; ot++) for (let St = 0; St <= At; St++) {
            const eo = ot * (At + 1) + St, Pt = [
              false,
              false,
              false,
              false,
              false,
              false
            ];
            ot === 0 && (Pt[0] = true, Pt[4] = true, Pt[5] = true), ot === ct && (Pt[1] = true, Pt[2] = true, Pt[3] = true), St === 0 && (Pt[1] = true, Pt[3] = true, Pt[5] = true), Pt.some((bo) => bo) && ao.set(eo, Pt);
          }
          const Vt = /* @__PURE__ */ new Map();
          for (const ot of Ct) {
            const St = _t[ot[0]], eo = _t[ot[1]], Pt = _t[ot[2]], bo = _t[ot[3]], mo = [
              Pt[0] - St[0],
              Pt[1] - St[1],
              Pt[2] - St[2]
            ], Ho = [
              bo[0] - eo[0],
              bo[1] - eo[1],
              bo[2] - eo[2]
            ], Ys = mo[1] * Ho[2] - mo[2] * Ho[1], Js = mo[2] * Ho[0] - mo[0] * Ho[2], Vs = mo[0] * Ho[1] - mo[1] * Ho[0], Ga = -90 * (0.5 * Math.sqrt(Ys * Ys + Js * Js + Vs * Vs)) / 4;
            for (const Us of ot) {
              const Xs = Vt.get(Us) || [
                0,
                0,
                0,
                0,
                0,
                0
              ];
              Xs[2] += Ga, Vt.set(Us, Xs);
            }
          }
          try {
            const ot = Nt(_t, Ct, {
              supports: ao,
              loads: Vt
            }, Bt), St = At, eo = ((_f2 = (_e3 = ot.deformations) == null ? void 0 : _e3.get(St)) == null ? void 0 : _f2[2]) ?? 0;
            oe.push({
              name: "Scordelis-Lo Barrel Vault",
              formulation: `Shell Q4 (${ct}x${At} mesh), Mindlin-Reissner + incompatible modes`,
              nodes: _t,
              elements: Ct,
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
              elements: Ct,
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
        if (d(oe), oe.length > 0) {
          const Q = oe[oe.length - 1];
          e.nodes.val = Q.nodes, e.elements.val = Q.elements;
          const ue = /* @__PURE__ */ new Map(), we = /* @__PURE__ */ new Map(), se = Math.max(...Q.nodes.map((Ee) => Ee[2]));
          Q.nodes.forEach((Ee, je) => {
            Math.abs(Ee[2]) < 0.01 && ue.set(je, [
              true,
              true,
              true,
              true,
              true,
              true
            ]), Math.abs(Ee[2] - se) < 0.01 && we.set(je, [
              10,
              0,
              0,
              0,
              0,
              0
            ]);
          }), e.nodeInputs.val = {
            supports: ue,
            loads: we
          }, e.elementInputs.val = {}, e.deformOutputs.val = {}, e.analyzeOutputs.val = {};
        }
      }
      function n(h) {
        const M = 15e3 * Math.sqrt(210) * 10, v = [];
        v.push(`$ File exported from Awatif FEM Validation: ${h.name}`), v.push(" "), v.push("$ PROGRAM INFORMATION"), v.push('  PROGRAM  "ETABS"  VERSION "22.6.0"  '), v.push(""), v.push("$ CONTROLS"), v.push('  UNITS  "TONF"  "M"  "C"  '), v.push("");
        const C = /* @__PURE__ */ new Set();
        h.nodes.forEach((q) => C.add(Math.round(q[1] * 1e4) / 1e4));
        const X = [
          ...C
        ].sort((q, fe) => q - fe), U = X.map((q, fe) => fe === 0 ? "Base" : `Level_${fe}`), ae = /* @__PURE__ */ new Map();
        X.forEach((q, fe) => ae.set(q, U[fe])), v.push("$ STORIES - IN SEQUENCE FROM TOP");
        for (let q = X.length - 1; q >= 1; q--) v.push(`  STORY "${U[q]}"  HEIGHT ${X[q] - X[q - 1]} MASTERSTORY "Yes"  `);
        v.push(`  STORY "Base"  ELEV ${X[0]} `), v.push(""), v.push("$ MATERIAL PROPERTIES"), v.push('  MATERIAL  "CONC"    TYPE "Concrete"    WEIGHTPERVOLUME 2.4'), v.push(`  MATERIAL  "CONC"    SYMTYPE "Isotropic"  E ${M}  U 0.2  A 1E-05`), v.push(""), v.push("$ FRAME SECTIONS"), v.push('  FRAMESECTION  "COL30"  MATERIAL "CONC"  SHAPE "Concrete Rectangular"  D 0.3 B 0.3 '), v.push('  FRAMESECTION  "VIGA"  MATERIAL "CONC"  SHAPE "Concrete Rectangular"  D 0.4 B 0.25 '), v.push("");
        const Z = h.elements.some((q) => q.length === 4);
        Z && (v.push("$ WALL/SLAB/DECK SECTIONS"), v.push('  SHELLPROP  "Muro20"  PROPTYPE  "Wall"  MATERIAL "CONC"  MODELINGTYPE "ShellThick"  WALLTHICKNESS 0.2 '), v.push(""));
        const K = /* @__PURE__ */ new Map();
        let de = 0;
        h.nodes.forEach((q) => {
          const fe = `${q[0]},${q[2]}`;
          K.has(fe) || K.set(fe, `${++de}`);
        }), v.push("$ POINT COORDINATES");
        for (const [q, fe] of K) {
          const [oe, pe] = q.split(",").map(Number);
          v.push(`  POINT "${fe}"  ${oe} ${pe} `);
        }
        v.push("");
        const re = (q) => {
          const fe = h.nodes[q], oe = `${fe[0]},${fe[2]}`;
          return {
            pt: K.get(oe) || "1",
            story: ae.get(Math.round(fe[1] * 1e4) / 1e4) || "Base"
          };
        };
        v.push("$ LINE CONNECTIVITIES");
        const Ie = [];
        if (h.elements.forEach((q, fe) => {
          if (q.length !== 2) return;
          const oe = h.nodes[q[0]], pe = h.nodes[q[1]], Q = Math.abs(pe[1] - oe[1]), ue = Math.sqrt((pe[0] - oe[0]) ** 2 + (pe[2] - oe[2]) ** 2), we = Q > ue * 0.5, se = re(q[0]), Ee = re(q[1]), je = we ? "COL30" : "VIGA";
          we ? (v.push(`  LINE  "E${fe + 1}"  COLUMN  "${se.pt}"  "${se.pt}"  1`), Ie.push(`  LINEASSIGN  "E${fe + 1}"  "${Ee.story}"  SECTION "${je}"  `)) : (v.push(`  LINE  "E${fe + 1}"  BEAM  "${se.pt}"  "${Ee.pt}"  0`), Ie.push(`  LINEASSIGN  "E${fe + 1}"  "${se.story}"  SECTION "${je}"  `));
        }), v.push(""), Z) {
          v.push("$ AREA CONNECTIVITIES");
          const q = [];
          h.elements.forEach((fe, oe) => {
            if (fe.length !== 4) return;
            const pe = fe.map((Q) => re(Q));
            v.push(`  AREA "W${oe + 1}"  PANEL  4  "${pe[0].pt}"  "${pe[1].pt}"  "${pe[2].pt}"  "${pe[3].pt}"  1  1  0  0  `), q.push(`  AREAASSIGN  "W${oe + 1}"  "${pe[2].story}"  SECTION "Muro20"  `);
          }), v.push(""), v.push("$ AREA ASSIGNS"), q.forEach((fe) => v.push(fe)), v.push("");
        }
        v.push("$ POINT ASSIGNS"), h.nodes.forEach((q, fe) => {
          if (Math.abs(q[1]) < 0.01) {
            const oe = re(fe);
            v.push(`  POINTASSIGN  "${oe.pt}"  "${oe.story}"  RESTRAINT "UX UY UZ RX RY RZ"  `);
          }
        }), v.push(""), v.push("$ LINE ASSIGNS"), Ie.forEach((q) => v.push(q)), v.push(""), v.push("$ LOAD PATTERNS"), v.push('  LOADPATTERN "Lat"  TYPE  "Other"  SELFWEIGHT  0'), v.push(""), v.push("$ POINT OBJECT LOADS");
        const Pe = Math.max(...h.nodes.map((q) => q[1]));
        return h.nodes.forEach((q, fe) => {
          if (Math.abs(q[1] - Pe) < 0.01) {
            const oe = re(fe);
            v.push(`  POINTLOAD  "${oe.pt}"  "${oe.story}"  "Lat"  TYPE "FORCE"  FX 10`);
          }
        }), v.push(""), v.push("  END"), v.push("$ END OF MODEL FILE"), v.join(`\r
`);
      }
      function l(h) {
        const M = 15e3 * Math.sqrt(210) * 10, v = [];
        v.push(`"""ETABS API Validation: ${h.name}`), v.push('Generated by Awatif FEM Studio"""'), v.push("import comtypes.client, time, math"), v.push(""), v.push("helper = comtypes.client.CreateObject('ETABSv1.Helper')"), v.push("helper = helper.QueryInterface(comtypes.gen.ETABSv1.cHelper)"), v.push('myETABS = helper.CreateObjectProgID("CSI.ETABS.API.ETABSObject")'), v.push("myETABS.ApplicationStart()"), v.push("time.sleep(10)"), v.push("SapModel = myETABS.SapModel"), v.push("SapModel.InitializeNewModel()"), v.push("SapModel.File.NewBlank()"), v.push("SapModel.SetPresentUnits(12)  # tonf_m_C"), v.push(""), v.push(`E = ${M}`), v.push('SapModel.PropMaterial.SetMaterial("CONC", 2)'), v.push('SapModel.PropMaterial.SetMPIsotropic("CONC", E, 0.2, 5.5e-6)'), v.push('SapModel.PropFrame.SetRectangle("COL30", "CONC", 0.30, 0.30)'), v.push('SapModel.PropFrame.SetRectangle("VIGA", "CONC", 0.40, 0.25)'), h.elements.some((U) => U.length === 4) && v.push('SapModel.PropArea.SetWall("Muro20", 6, False, "CONC", 0.20)'), v.push(""), v.push("# Add elements"), v.push("FN = ' '"), h.elements.forEach((U, ae) => {
          if (U.length === 2) {
            const Z = h.nodes[U[0]], K = h.nodes[U[1]], de = Math.abs(K[1] - Z[1]), re = Math.sqrt((K[0] - Z[0]) ** 2 + (K[2] - Z[2]) ** 2), Ie = de > re * 0.5 ? "COL30" : "VIGA";
            v.push(`[FN,r]=SapModel.FrameObj.AddByCoord(${Z[0]},${Z[2]},${Z[1]}, ${K[0]},${K[2]},${K[1]}, FN,"${Ie}","E${ae + 1}","Global")`);
          } else if (U.length === 4) {
            const Z = U.map((K) => h.nodes[K]);
            v.push(`SapModel.AreaObj.AddByCoord(4, [${Z.map((K) => K[0]).join(",")}], [${Z.map((K) => K[2]).join(",")}], [${Z.map((K) => K[1]).join(",")}], "", "Muro20")`);
          }
        }), v.push(""), v.push("# Supports at Z=0"), v.push("names = SapModel.PointObj.GetNameList()"), v.push("for i in range(int(names[0])):"), v.push("    c = SapModel.PointObj.GetCoordCartesian(names[1][i])"), v.push("    if abs(float(c[2])) < 0.01:"), v.push("        SapModel.PointObj.SetRestraint(names[1][i], [True]*6)"), v.push(""), v.push("# Load at top"), v.push('SapModel.LoadPatterns.Add("Lat", 8, 0, True)');
        const X = Math.max(...h.nodes.map((U) => U[1]));
        v.push("names = SapModel.PointObj.GetNameList()"), v.push("for i in range(int(names[0])):"), v.push("    c = SapModel.PointObj.GetCoordCartesian(names[1][i])"), v.push(`    if abs(float(c[2]) - ${X}) < 0.01:`), v.push('        SapModel.PointObj.SetLoadForce(names[1][i], "Lat", [10,0,0,0,0,0])'), v.push(""), v.push(`SapModel.File.Save(r"C:\\Users\\j-b-j\\Downloads\\validation_${h.name.replace(/[^a-zA-Z0-9]/g, "_")}.EDB")`), v.push("time.sleep(1)"), v.push("SapModel.Analyze.RunAnalysis()"), v.push("time.sleep(5)"), v.push(""), v.push("# Results"), v.push("SapModel.Results.Setup.DeselectAllCasesAndCombosForOutput()"), v.push('SapModel.Results.Setup.SetCaseSelectedForOutput("Lat")'), v.push(`print(f"\\n=== ETABS: ${h.name} ===")`), v.push("names = SapModel.PointObj.GetNameList()"), v.push("for i in range(int(names[0])):"), v.push("    name = names[1][i]"), v.push("    c = SapModel.PointObj.GetCoordCartesian(name)"), v.push("    NR=0;Obj=[];Elm=[];AC=[];ST=[];SN=[];U1=[];U2=[];U3=[];R1=[];R2=[];R3=[]"), v.push("    [NR,Obj,Elm,AC,ST,SN,U1,U2,U3,R1,R2,R3,ret]=SapModel.Results.JointDispl(name,0,NR,Obj,Elm,AC,ST,SN,U1,U2,U3,R1,R2,R3)"), v.push("    if NR > 0:"), v.push('        print(f"  {name} Z={float(c[2]):.1f}: Ux={U1[0]*100:.4f} cm")'), v.push(""), v.push('print("\\nAwatif results:")');
        for (const U of h.results) v.push(`print(f"  ${U.label}: Awatif=${U.awatif.toFixed(4)}, ETABS=${U.reference.toFixed(4)}, Ratio={${U.awatif.toFixed(4)}/${U.reference.toFixed(4)}:.4f}")`);
        return v.push("SapModel.View.RefreshView(0, False)"), v.join(`
`);
      }
      function a(h, M) {
        const v = new Blob([
          h
        ], {
          type: "text/plain"
        }), C = URL.createObjectURL(v), X = document.createElement("a");
        X.href = C, X.download = M, X.click(), URL.revokeObjectURL(C);
      }
      function d(h) {
        let M = document.getElementById("test-results-overlay");
        M && M.remove(), M = document.createElement("div"), M.id = "test-results-overlay", M.style.cssText = `position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);
        background:#1a1a2e;color:#eee;border:2px solid #16213e;border-radius:8px;padding:20px;
        z-index:10000;max-width:750px;width:90%;max-height:80vh;overflow-y:auto;font-family:monospace;font-size:13px;
        box-shadow:0 10px 40px rgba(0,0,0,0.5);`;
        let v = `<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px">
        <h3 style="margin:0;color:#00d4ff">Awatif FEM Validation</h3>
        <button onclick="this.parentElement.parentElement.remove()" style="background:none;border:none;color:#888;font-size:18px;cursor:pointer">X</button>
      </div>`, C = true;
        window.__awatifTests = h;
        for (let U = 0; U < h.length; U++) {
          const ae = h[U];
          v += '<div style="margin-bottom:16px;border:1px solid #333;border-radius:6px;padding:10px">', v += '<div style="display:flex;justify-content:space-between;align-items:center">', v += `<div style="font-weight:bold;color:#00d4ff">${ae.name}</div>`, v += "<div>", v += `<button onclick="window.__awatifDownloadE2k(${U})" style="background:#1e3a5f;color:#aaa;border:1px solid #444;padding:2px 6px;font-size:10px;cursor:pointer;margin-right:4px;border-radius:3px">e2k</button>`, v += `<button onclick="window.__awatifDownloadPy(${U})" style="background:#2a1e3a;color:#aaa;border:1px solid #444;padding:2px 6px;font-size:10px;cursor:pointer;border-radius:3px">py</button>`, v += "</div></div>", v += `<div style="color:#888;font-size:11px;margin-bottom:8px">${ae.formulation}</div>`, v += `<table style="width:100%;border-collapse:collapse;font-size:12px">
          <tr style="color:#888"><td style="padding:3px 6px">Measure</td><td style="text-align:right">Awatif</td><td style="text-align:right">Reference</td><td style="text-align:right">Ratio</td><td style="text-align:right">Source</td><td style="text-align:center"></td></tr>`;
          for (const Z of ae.results) {
            const K = Z.reference !== 0 ? Z.awatif / Z.reference : 1, de = Math.abs(K - 1) < 0.05;
            de || (C = false);
            const re = de ? "#4caf50" : "#f44336", Ie = de ? "PASS" : "FAIL";
            v += `<tr style="border-top:1px solid #333">
            <td style="padding:3px 6px">${Z.label}</td>
            <td style="text-align:right;color:#fff">${Z.awatif.toFixed(4)}</td>
            <td style="text-align:right;color:#aaa">${Z.reference.toFixed(4)}</td>
            <td style="text-align:right;color:${re};font-weight:bold">${K.toFixed(4)}</td>
            <td style="text-align:right;color:#888;font-size:11px">${Z.refSource}</td>
            <td style="text-align:center;color:${re};font-size:10px;font-weight:bold">${Ie}</td></tr>`;
          }
          v += "</table></div>";
        }
        v += C ? '<div style="color:#4caf50;font-weight:bold;text-align:center;margin-top:8px">ALL TESTS PASSED (< 5% error vs ETABS)</div>' : '<div style="color:#f44336;font-weight:bold;text-align:center;margin-top:8px">Some tests exceeded 5% tolerance</div>', M.innerHTML = v, document.body.appendChild(M), window.__awatifDownloadE2k = (U) => {
          const ae = window.__awatifTests[U], Z = ae.name.replace(/[^a-zA-Z0-9]/g, "_").toLowerCase();
          a(n(ae), `${Z}.e2k`);
        }, window.__awatifDownloadPy = (U) => {
          const ae = window.__awatifTests[U], Z = ae.name.replace(/[^a-zA-Z0-9]/g, "_").toLowerCase();
          a(l(ae), `${Z}_etabs.py`);
        };
      }
      (_h = ze.querySelector("#cad3d-export")) == null ? void 0 : _h.addEventListener("click", (h) => {
        h.stopPropagation(), wa();
      });
      let s = "";
      const r = ze.querySelector("#cad3d-io-menu"), p = ze.querySelector("#cad3d-io-file");
      function i(h, M) {
        e.nodes.val = h.nodes, e.elements.val = h.elements, e.nodeInputs.val = h.nodeInputs, e.elementInputs.val = h.elementInputs, h.sectionShapes && h.elementInputs && (h.elementInputs.sectionShapes = h.sectionShapes), e.deformOutputs.val = {}, e.analyzeOutputs.val = {};
        const v = h.elements.filter((X) => X.length === 2).length, C = h.elements.filter((X) => X.length >= 3).length;
        console.log(`${M} (${h.nodes.length} nodos, ${v} frames, ${C} shells): ${h.nodes.length} nodes, ${h.elements.length} elements`), setTimeout(() => Lt(), 50);
      }
      function c(h, M) {
        var _a3, _b2, _c2;
        const v = {};
        h.elementInfo.forEach((K) => v[K.category] = (v[K.category] || 0) + 1), (_a3 = document.getElementById("ifc-filter-panel")) == null ? void 0 : _a3.remove();
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
          const de = v[K] || 0;
          if (de === 0) continue;
          const re = [
            "column",
            "beam",
            "slab"
          ].includes(K) ? "checked" : "";
          Z += `<label style="display:flex;align-items:center;gap:6px;padding:2px 0">
          <input type="checkbox" data-ifc-cat="${K}" ${re}>
          <span>${ae[K] || K}</span>
          <span style="color:#888;margin-left:auto">(${de})</span>
        </label>`;
        }
        Z += `</div><div style="border:1px solid #333;border-radius:6px;padding:8px;margin-bottom:12px">
        <div style="color:#ff6666;font-weight:bold;margin-bottom:4px">No estructural (solo visual)</div>`;
        for (const K of U) {
          const de = v[K] || 0;
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
            const de = K.dataset.ifcCat, re = h.detailCategories.get(de);
            if (re) {
              re.visible = K.checked;
              const Ie = Ze();
              Ie && Ie.render();
            }
          });
        }), (_b2 = C.querySelector("#ifc-gen-analytical")) == null ? void 0 : _b2.addEventListener("click", () => {
          var _a4;
          const K = /* @__PURE__ */ new Set();
          C.querySelectorAll("input[data-ifc-cat]:checked").forEach((oe) => {
            K.add(oe.dataset.ifcCat);
          });
          const de = M.nodes.map((oe) => [
            oe.x,
            oe.y,
            oe.z
          ]), re = [], Ie = {
            elasticities: /* @__PURE__ */ new Map(),
            shearModuli: /* @__PURE__ */ new Map(),
            areas: /* @__PURE__ */ new Map(),
            momentsOfInertiaZ: /* @__PURE__ */ new Map(),
            momentsOfInertiaY: /* @__PURE__ */ new Map(),
            torsionalConstants: /* @__PURE__ */ new Map(),
            densities: /* @__PURE__ */ new Map(),
            sectionShapes: /* @__PURE__ */ new Map()
          }, Pe = {
            supports: /* @__PURE__ */ new Map(),
            loads: /* @__PURE__ */ new Map()
          };
          let q = 0;
          for (const oe of M.elements) if (K.has(oe.category) && oe.type === "frame" && oe.nodeIds.length >= 2) {
            re.push(oe.nodeIds);
            const pe = ((_a4 = M.materials) == null ? void 0 : _a4.get(oe.material)) || {
              E: 2132888792e-2,
              nu: 0.2,
              rho: 2.4
            }, Q = oe.b || 0.3, ue = oe.h || 0.3, we = Q * ue, se = Q * ue * ue * ue / 12, Ee = ue * Q * Q * Q / 12, je = Q * ue * (Q * Q + ue * ue) / 12, rt = pe.E / (2 * (1 + pe.nu));
            Ie.elasticities.set(q, pe.E), Ie.shearModuli.set(q, rt), Ie.areas.set(q, we), Ie.momentsOfInertiaZ.set(q, Ee), Ie.momentsOfInertiaY.set(q, se), Ie.torsionalConstants.set(q, je), Ie.densities.set(q, pe.rho), Ie.sectionShapes.set(q, {
              type: "rect",
              b: Q,
              h: ue,
              name: oe.sectionName
            }), q++;
          }
          const fe = Math.min(...de.map((oe) => oe[2]));
          de.forEach((oe, pe) => {
            Math.abs(oe[2] - fe) < 0.05 && Pe.supports.set(pe, [
              true,
              true,
              true,
              true,
              true,
              true
            ]);
          });
          for (const [, oe] of h.detailCategories) {
            const pe = Ze();
            pe && pe.scene.remove(oe);
          }
          i({
            nodes: de,
            elements: re,
            nodeInputs: Pe,
            elementInputs: Ie,
            sectionShapes: Ie.sectionShapes,
            info: {
              nNodes: de.length,
              nFrames: re.length
            }
          }, "IFC analytical"), C.remove();
        }), (_c2 = C.querySelector("#ifc-cancel")) == null ? void 0 : _c2.addEventListener("click", () => {
          for (const [, de] of h.detailCategories) {
            const re = Ze();
            re && re.scene.remove(de);
          }
          const K = Ze();
          K && K.render(), C.remove();
        });
      }
      function m(h) {
        _ = /* @__PURE__ */ new Set(), J = /* @__PURE__ */ new Set(), $e = /* @__PURE__ */ new Map(), Te = /* @__PURE__ */ new Map();
        const M = /* @__PURE__ */ new Map();
        for (let re = 0; re < h.stories.length; re++) M.set(h.stories[re].name, re);
        for (let re = 0; re < h.elementTypes.length; re++) {
          const Ie = h.elementTypes[re], Pe = h.elementStories[re], q = M.get(Pe) ?? 0;
          $e.set(re, q), Ie === "COLUMN" || Ie === "BRACE" ? _.add(re) : J.add(re);
        }
        k = "edificio";
        const v = h.grids.filter((re) => re.dir === "X").sort((re, Ie) => re.coord - Ie.coord), C = h.grids.filter((re) => re.dir === "Y").sort((re, Ie) => re.coord - Ie.coord);
        let X, U, ae, Z;
        if (v.length > 0 || C.length > 0) X = v.map((re) => re.coord), U = C.map((re) => re.coord), ae = v.map((re) => re.label), Z = C.map((re) => re.label);
        else {
          const re = new Set(h.nodes.map((Pe) => Pe[0])), Ie = new Set(h.nodes.map((Pe) => Pe[1]));
          X = [
            ...re
          ].sort((Pe, q) => Pe - q), U = [
            ...Ie
          ].sort((Pe, q) => Pe - q), ae = X.map((Pe, q) => String(q + 1)), Z = U.map((Pe, q) => String.fromCharCode(65 + q));
        }
        const K = h.stories.length > 0 ? Math.max(...h.stories.map((re) => re.elev)) : Math.max(...h.nodes.map((re) => re[2]));
        We = X, Xe = U, pt = K, setTimeout(() => {
          Lt(), Xo(X, U, K, ae, Z), wn(h.stories, X, U), On(), qn();
        }, 100);
        const de = {
          COLUMN: 0,
          BEAM: 0,
          BRACE: 0
        };
        for (const re of h.elementTypes) de[re]++;
        console.log(`E2K grids: X=[${ae.join(",")}] Y=[${Z.join(",")}]`), console.log(`E2K stories: ${h.stories.map((re) => `${re.name}@${re.elev.toFixed(2)}`).join(", ")}`), console.log(`E2K elements: ${de.COLUMN} columns, ${de.BEAM} beams, ${de.BRACE} braces`), Qe();
      }
      function E(h, M) {
        const v = new Blob([
          h
        ], {
          type: "text/plain"
        }), C = URL.createObjectURL(v), X = document.createElement("a");
        X.href = C, X.download = M, X.click(), URL.revokeObjectURL(C);
      }
      r && r.addEventListener("change", () => {
        if (s = r.value, r.value = "", s.startsWith("import")) s === "import-e2k" ? p.accept = ".e2k,.E2K" : s === "import-s2k" ? p.accept = ".s2k,.S2K,.$2k" : s === "import-ifc" ? p.accept = ".ifc,.IFC" : s === "import-py" ? p.accept = ".py" : s === "import-tcl" && (p.accept = ".tcl"), p.click();
        else if (s.startsWith("export")) {
          const h = {
            nodes: e.nodes.val,
            elements: e.elements.val,
            nodeInputs: e.nodeInputs.val,
            elementInputs: e.elementInputs.val
          };
          try {
            s === "export-e2k" ? E(Cl({
              ...h,
              title: "Awatif Model",
              e2kModel: Ve ?? void 0
            }), "model.e2k") : s === "export-s2k" ? E(Ll({
              ...h,
              title: "Awatif Model"
            }), "model.s2k") : s === "export-py" ? E(Nl(h), "model_opensees.py") : s === "export-tcl" && E(Ol(h), "model_opensees.tcl");
          } catch (M) {
            alert("Export error: " + M.message);
          }
        }
      }), p && p.addEventListener("change", () => {
        var _a3;
        const h = (_a3 = p.files) == null ? void 0 : _a3[0];
        if (!h) return;
        if (s === "import-ifc") {
          const v = new FileReader();
          v.onload = async () => {
            const C = v.result;
            try {
              const X = Ze();
              if (!X) {
                alert("Viewer not ready");
                return;
              }
              console.log("IFC: Loading 3D geometry...");
              const U = await Yl(X.scene, C);
              console.log(`IFC: ${U.meshCount} meshes loaded, bbox:`, U.bbox);
              const ae = new Ne();
              U.bbox.getCenter(ae);
              const Z = new Ne();
              U.bbox.getSize(Z);
              const K = Math.max(Z.x, Z.y, Z.z);
              X.controls.target.copy(ae), X.camera.position.set(ae.x + K, ae.y + K * 0.5, ae.z + K), X.camera.lookAt(ae), X.controls.maxDistance = K * 5, X.controls.update(), X.render(), window.__ifcLoadResult = U, window.__ifcArrayBuffer = C;
              const de = new FileReader();
              de.onload = () => {
                const re = de.result, Ie = jl(re);
                window.__ifcAnalytical = Ie;
                const Pe = {};
                U.elementInfo.forEach((q) => Pe[q.category] = (Pe[q.category] || 0) + 1), console.log("IFC categories:", Pe), console.log(`IFC: ${U.elementInfo.size} geometric elements, ${Ie.elements.length} analytical elements`), c(U, Ie);
              }, de.readAsText(h);
            } catch (X) {
              alert("IFC error: " + X.message), console.error(X);
            }
          }, v.readAsArrayBuffer(h), p.value = "";
          return;
        }
        const M = new FileReader();
        M.onload = () => {
          const v = M.result;
          try {
            if (s === "import-e2k") {
              const C = kl(v);
              Ve = C, i(C, "E2K imported"), m(C);
            } else if (s === "import-s2k") {
              const C = Tl(v);
              i({
                nodes: C.nodes,
                elements: C.elements,
                nodeInputs: C.nodeInputs,
                elementInputs: C.elementInputs,
                sectionShapes: C.sectionShapes,
                info: C.info
              }, "S2K imported");
            } else if (s === "import-py") {
              const C = ql(v);
              i(C, "OpenSeesPy imported");
            } else if (s === "import-tcl") {
              const C = _l(v);
              i(C, "OpenSees Tcl imported");
            }
          } catch (C) {
            alert("Import error: " + C.message), console.error(C);
          }
        }, M.readAsText(h), p.value = "";
      });
      const w = ze.querySelector("#cad3d-force-unit");
      w && (w.value = b, w.addEventListener("change", (h) => {
        h.stopPropagation(), b = w.value, $ = Fo(b, F), k && tt(k);
      }));
      const y = ze.querySelector("#cad3d-length-unit");
      y && (y.value = F, y.addEventListener("change", (h) => {
        h.stopPropagation(), F = y.value, $ = Fo(b, F), k && tt(k);
      })), ze.querySelectorAll("[data-preset]").forEach((h) => {
        h.addEventListener("click", (M) => {
          M.stopPropagation();
          const v = h.dataset.preset, C = D[v];
          C && (b = C.force, F = C.length, Y = C.stress, $ = Fo(b, F), w && (w.value = b), y && (y.value = F), ze.querySelectorAll("[data-preset]").forEach((X) => {
            X.classList.toggle("active", X.dataset.preset === v);
          }), k && tt(k), console.log(`Preset: ${v} \u2192 ${b}+${F}, stress: ${Y.label}`));
        });
      }), (_i = ze.querySelector("#cad3d-log")) == null ? void 0 : _i.addEventListener("click", (h) => {
        h.stopPropagation(), Oa();
      }), (_j = ze.querySelector("#cad3d-pushover")) == null ? void 0 : _j.addEventListener("click", (h) => {
        h.stopPropagation(), qa();
      }), (_k = ze.querySelector("#cad3d-nonlinear")) == null ? void 0 : _k.addEventListener("click", (h) => {
        h.stopPropagation(), Ba();
      }), (_l2 = ze.querySelector("#cad3d-fem-solver")) == null ? void 0 : _l2.addEventListener("click", (h) => {
        h.stopPropagation(), Ha();
      }), (_m = ze.querySelector("#cad3d-calc")) == null ? void 0 : _m.addEventListener("click", (h) => {
        h.stopPropagation(), oa(async () => {
          const { openCalcPanel: M } = await import("./calcPanel-Cyw7vzQ9.js").then(async (m2) => {
            await m2.__tla;
            return m2;
          });
          return {
            openCalcPanel: M
          };
        }, __vite__mapDeps([0,1,2,3,4])).then(({ openCalcPanel: M }) => {
          var _a3, _b2;
          const v = {
            nodes: e.nodes.val,
            elements: e.elements.val,
            nodeInputs: ((_a3 = e.nodeInputs) == null ? void 0 : _a3.val) ?? {},
            elementInputs: ((_b2 = e.elementInputs) == null ? void 0 : _b2.val) ?? {},
            modelName: k ? k.charAt(0).toUpperCase() + k.slice(1) : "Modelo"
          };
          M(v);
        });
      }), (_n2 = ze.querySelector("#cad3d-modal")) == null ? void 0 : _n2.addEventListener("click", (h) => {
        var _a3, _b2;
        h.stopPropagation(), qe = !qe, (_a3 = ze.querySelector("#cad3d-modal")) == null ? void 0 : _a3.classList.toggle("active", qe);
        const v = ze.querySelector("#cad3d-mode-prev"), C = ze.querySelector("#cad3d-mode-next"), X = ze.querySelector("#cad3d-mode-label"), U = ze.querySelector("#cad3d-modal-scale");
        if (qe) {
          const ae = Ze();
          ((_b2 = ae == null ? void 0 : ae.settings) == null ? void 0 : _b2.loads) && (_e = ae.settings.loads.rawVal, ae.settings.loads.val = false), Ln(), v.style.display = "", C.style.display = "", X.style.display = "", U && (U.style.display = ""), f();
        } else Cn(), v.style.display = "none", C.style.display = "none", X.style.display = "none", U && (U.style.display = "none"), k && k !== "placa-q4" && k !== "placa-3q" && Re(), setTimeout(() => {
          var _a4;
          const ae = Ze();
          ((_a4 = ae == null ? void 0 : ae.settings) == null ? void 0 : _a4.loads) && _e && (ae.settings.loads.val = true);
        }, 600);
      });
      function f() {
        var _a3;
        const h = ze.querySelector("#cad3d-mode-label");
        if (!h || !(Ce == null ? void 0 : Ce.frequencies)) return;
        const M = Ce.frequencies[xe], v = M > 0 ? 1 / M : 0, C = [
          0,
          0,
          0,
          0,
          0,
          0
        ];
        for (let X = 0; X <= xe; X++) {
          const U = (_a3 = Ce.massParticipation) == null ? void 0 : _a3[X];
          if (U) for (let ae = 0; ae < 6; ae++) C[ae] += U[ae];
        }
        h.textContent = `Modo ${xe + 1} \u2014 ${M.toFixed(2)} Hz \u2014 T=${v.toFixed(3)}s \u2014 \u03A3Ux=${(C[0] * 100).toFixed(1)}% \u03A3Uy=${(C[1] * 100).toFixed(1)}% \u03A3Rz=${(C[5] * 100).toFixed(1)}%`;
      }
      (_o2 = ze.querySelector("#cad3d-mode-prev")) == null ? void 0 : _o2.addEventListener("click", (h) => {
        if (h.stopPropagation(), !(Ce == null ? void 0 : Ce.modeShapes)) return;
        xe = (xe - 1 + Ce.modeShapes.length) % Ce.modeShapes.length;
        const M = Ce.modeShapes[xe], { extent: v } = vo();
        let C = 0;
        for (let X = 0; X < ke.length; X++) {
          const U = M[X * 6] || 0, ae = M[X * 6 + 1] || 0, Z = M[X * 6 + 2] || 0;
          C = Math.max(C, Math.sqrt(U * U + ae * ae + Z * Z));
        }
        Ge = C > 1e-12 ? v * 0.05 / C : 1, Qo(), f();
      }), (_p = ze.querySelector("#cad3d-mode-next")) == null ? void 0 : _p.addEventListener("click", (h) => {
        if (h.stopPropagation(), !(Ce == null ? void 0 : Ce.modeShapes)) return;
        xe = (xe + 1) % Ce.modeShapes.length;
        const M = Ce.modeShapes[xe], { extent: v } = vo();
        let C = 0;
        for (let X = 0; X < ke.length; X++) {
          const U = M[X * 6] || 0, ae = M[X * 6 + 1] || 0, Z = M[X * 6 + 2] || 0;
          C = Math.max(C, Math.sqrt(U * U + ae * ae + Z * Z));
        }
        Ge = C > 1e-12 ? v * 0.05 / C : 1, Qo(), f();
      });
      const g = ze.querySelector("#cad3d-modal-scale");
      g == null ? void 0 : g.addEventListener("mousedown", (h) => h.stopPropagation()), g == null ? void 0 : g.addEventListener("change", () => {
        qe && (Ce == null ? void 0 : Ce.modeShapes) && Qo();
      });
      const I = ze.querySelector("#cad3d-cli-toggle"), A = ze.querySelector("#cad3d-cli-panel"), T = ze.querySelector("#cad3d-cli-output"), B = ze.querySelector("#cad3d-cmd"), H = [];
      let x = -1;
      I == null ? void 0 : I.addEventListener("click", (h) => {
        if (h.stopPropagation(), A) {
          const M = A.style.display !== "none";
          A.style.display = M ? "none" : "block", M || (B == null ? void 0 : B.focus(), T && !T.textContent && (T.textContent = `CLI ready. Commands:
  cad.addNode(x, y, z)     cad.addFrame(i, j)
  cad.addSupport(n)        cad.addLoad(n, [fx,fy,fz,0,0,0])
  cad.frame([5,5],[3,3])   cad.building([5],[4],[3])
  cad.galpon(12,20,6,3)    cad.clear()
  cad.info()               cad.listNodes()
`));
        }
      }), B == null ? void 0 : B.addEventListener("mousedown", (h) => h.stopPropagation()), document.addEventListener("keydown", (h) => {
        var _a3;
        if ((h.ctrlKey || h.metaKey) && h.key === "z" && !h.shiftKey) {
          h.preventDefault(), As();
          return;
        }
        if ((h.ctrlKey || h.metaKey) && (h.key === "y" || h.key === "z" && h.shiftKey)) {
          h.preventDefault(), zs();
          return;
        }
        if ((h.key === "Delete" || h.key === "Backspace") && gt.size > 0) {
          h.preventDefault(), gt.forEach((M) => V.add(M)), gt.clear(), fo && (fo.remove(), fo = null), Re();
          return;
        }
        if (h.key === "Escape") {
          if (po) if (vt !== null) {
            vt = null;
            const M = Ze();
            Ot && M && (M.scene.remove(Ot), Ot.geometry.dispose(), Ot.material.dispose(), Ot = null), qt && M && (M.scene.remove(qt), qt.geometry.dispose(), qt.material.dispose(), qt = null), M == null ? void 0 : M.render();
          } else cn();
          Yt && rn(), oo && (oo = false, Ao(), (_a3 = ze.querySelector("#cad3d-inspect")) == null ? void 0 : _a3.classList.remove("inspect-active"));
        }
      }), B == null ? void 0 : B.addEventListener("keydown", (h) => {
        if (h.stopPropagation(), h.key === "Enter") {
          const M = B.value.trim();
          if (M) {
            H.unshift(M), x = -1, T && (T.textContent += `> ${M}
`);
            try {
              const v = new Function("cad", `return ${M}`)(Ke);
              if (v !== void 0 && T) {
                const C = typeof v == "object" ? JSON.stringify(v, null, 2) : String(v);
                T.textContent += `${C}
`;
              }
            } catch (v) {
              T && (T.textContent += `ERROR: ${v.message}
`);
            }
            T && (T.scrollTop = T.scrollHeight), B.value = "";
          }
        } else h.key === "ArrowUp" ? (h.preventDefault(), H.length > 0 && x < H.length - 1 && (x++, B.value = H[x])) : h.key === "ArrowDown" && (h.preventDefault(), x > 0 ? (x--, B.value = H[x]) : (x = -1, B.value = ""));
      });
      let u = false, S = 0, L = 0, R = 0, W = 0;
      ze.addEventListener("mousedown", (h) => {
        const M = h.target.tagName;
        if (M === "BUTTON" || M === "INPUT" || M === "SELECT") return;
        u = true;
        const v = ze.getBoundingClientRect();
        ze.style.bottom = "unset", S = h.clientX, L = h.clientY, R = v.left, W = v.top, h.preventDefault();
      }), window.addEventListener("mousemove", (h) => {
        u && (h.preventDefault(), ze.style.left = R + (h.clientX - S) + "px", ze.style.top = W + (h.clientY - L) + "px");
      }), window.addEventListener("mouseup", () => {
        u = false;
      }), Qe();
    }, 10);
    function Ze() {
      const t = document.getElementById("viewer");
      return t ? t.__ctx : null;
    }
    function vo() {
      const t = e.nodes.val;
      if (t.length === 0) return {
        center: new Ne(),
        extent: 10
      };
      let o = 1 / 0, n = 1 / 0, l = 1 / 0, a = -1 / 0, d = -1 / 0, s = -1 / 0;
      for (const [i, c, m] of t) i < o && (o = i), i > a && (a = i), c < n && (n = c), c > d && (d = c), m < l && (l = m), m > s && (s = m);
      const r = new Ne((o + a) / 2, (n + d) / 2, (l + s) / 2), p = Math.max(a - o, d - n, s - l, 1);
      return {
        center: r,
        extent: p
      };
    }
    function Lt(t = false) {
      const o = Ze();
      if (!o) return;
      const { extent: n } = vo();
      let l;
      n <= 5 ? l = Math.max(1, Math.ceil(n * 1.5)) : n <= 50 ? l = Math.max(5, Math.ceil(n * 1.3 / 5) * 5) : l = Math.max(20, Math.ceil(n * 1.3 / 10) * 10), o.settings.gridSize.val = l, o.scene.children.filter((m) => m.type === "GridHelper").forEach((m) => {
        var _a2, _b;
        (_a2 = m.geometry) == null ? void 0 : _a2.dispose(), (_b = m.material) == null ? void 0 : _b.dispose(), o.scene.remove(m);
      });
      const d = Ya(), s = new ol(l, 20, d.grid, d.grid);
      s.rotation.x = Math.PI / 2, s.position.set(0.5 * l, 0.5 * l, 0), o.scene.add(s), o.scene.children.filter((m) => m.type === "Group" && m.name !== "gridAxes" && m.name !== "loadsGroup" && (m.name === "viewerAxes" || m.children.some((E) => E instanceof dn))).forEach((m) => {
        m.traverse((E) => {
          E.geometry && E.geometry.dispose(), E.material && (E.material.map && E.material.map.dispose(), E.material.dispose());
        }), o.scene.remove(m);
      });
      const p = 0.05 * l, i = new sn();
      i.name = "viewerAxes";
      const c = d.axisArrow;
      i.add(new dn(new Ne(1, 0, 0), new Ne(), 1, c, 0.2, 0.2)), i.add(new dn(new Ne(0, 1, 0), new Ne(), 1, c, 0.2, 0.2)), i.add(new dn(new Ne(0, 0, 1), new Ne(), 1, c, 0.2, 0.2)), i.children.forEach((m) => m.scale.set(p, p, p));
      for (const [m, E, w] of [
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
        f.fillStyle = E, f.font = "bold 50px Arial", f.textAlign = "center", f.textBaseline = "middle", f.fillText(m, 32, 34);
        const g = new Vn(y);
        g.needsUpdate = true;
        const I = new pn(new fn({
          map: g,
          depthTest: false,
          transparent: true
        }));
        I.position.set(w[0], w[1], w[2]), I.scale.set(0.4 * p, 0.4 * p, 1), I.renderOrder = 99, i.add(I);
      }
      o.scene.add(i), t ? o.render() : yo("3d");
    }
    function Ts(t, o, n) {
      if (t.length < 2) return n * 10;
      let l = 1 / 0;
      return o > 0 && (l = Math.min(l, Math.abs(t[o] - t[o - 1]))), o < t.length - 1 && (l = Math.min(l, Math.abs(t[o + 1] - t[o]))), l * 0.45 || n * 0.1;
    }
    function yo(t) {
      var _a2;
      const o = Ze();
      if (!o) return;
      const { center: n, extent: l } = vo(), a = o.renderer.domElement.clientWidth / (o.renderer.domElement.clientHeight || 1), d = l * 0.7;
      o.controls.maxDistance = l * 5, o.controls.minDistance = l * 0.05, o.renderer.clippingPlanes = [];
      const s = () => {
        o.scene.traverse((r) => {
          var _a3;
          if (!r.material) return;
          const p = r.type === "GridHelper" || r.type === "AxesHelper", i = r.isSprite, c = ((_a3 = r.userData) == null ? void 0 : _a3.noClip) === true;
          (p || i || c) && (Array.isArray(r.material) ? r.material.forEach((m) => {
            m.clippingPlanes = [];
          }) : r.material.clippingPlanes = []);
        });
      };
      if (t === "3d") {
        const r = o.perspCamera.fov, p = l / (2 * Math.tan(r * Math.PI / 360)) * 2.2;
        o.perspCamera.position.set(n.x + p * 0.5, n.y - p * 0.8, n.z + p * 0.5), o.controls.target.copy(n), o.setActiveCamera(o.perspCamera);
      } else {
        const r = o.orthoCamera;
        r.left = -d * a, r.right = d * a, r.top = d, r.bottom = -d, r.near = -l * 10, r.far = l * 10, r.updateProjectionMatrix();
        const p = (i, c, m) => {
          r.position.copy(i), r.up.copy(m), o.controls.target.copy(c), r.lookAt(c), o.controls.update();
        };
        if (t === "plan") o.renderer.clippingPlanes = [], p(new Ne(n.x, n.y, n.z + l * 2), new Ne(n.x, n.y, n.z), new Ne(0, 1, 0));
        else if (t.startsWith("plan:")) {
          const i = parseInt(t.split(":")[1]), c = ((_a2 = ne.hPiso) == null ? void 0 : _a2.val) ?? 3, m = (i + 1) * c, E = c * 0.45;
          o.renderer.clippingPlanes = [
            new Eo(new Ne(0, 0, -1), m + E),
            new Eo(new Ne(0, 0, 1), -m + E)
          ], s(), p(new Ne(n.x, n.y, m + l * 2), new Ne(n.x, n.y, m), new Ne(0, 1, 0));
        } else if (t === "elevX") r.position.set(n.x + l * 2, n.y, n.z), r.up.set(0, 0, 1);
        else if (t === "elevY") r.position.set(n.x, n.y - l * 2, n.z), r.up.set(0, 0, 1);
        else if (t.startsWith("axisX:")) {
          const i = parseInt(t.split(":")[1]), c = We[i] ?? n.x;
          if (Xe.length > 1) {
            const E = Ts(We, i, l);
            o.renderer.clippingPlanes = [
              new Eo(new Ne(-1, 0, 0), c + E),
              new Eo(new Ne(1, 0, 0), -c + E)
            ], s(), r.position.set(n.x + l * 2, n.y, n.z), o.controls.target.set(n.x, n.y, n.z);
          } else r.position.set(n.x, n.y - l * 2, n.z), o.controls.target.copy(n);
          r.up.set(0, 0, 1);
        } else if (t.startsWith("axisY:")) {
          const i = parseInt(t.split(":")[1]), c = Xe[i] ?? n.y;
          if (We.length > 1) {
            const E = Ts(Xe, i, l);
            o.renderer.clippingPlanes = [
              new Eo(new Ne(0, -1, 0), c + E),
              new Eo(new Ne(0, 1, 0), -c + E)
            ], s(), r.position.set(n.x, n.y - l * 2, n.z), o.controls.target.set(n.x, n.y, n.z);
          } else r.position.set(n.x + l * 2, n.y, n.z), o.controls.target.copy(n);
          r.up.set(0, 0, 1);
        }
        !t.startsWith("axisX:") && !t.startsWith("axisY:") && o.controls.target.copy(n), o.setActiveCamera(r);
      }
    }
    function On() {
      const t = ze.querySelector("#cad3d-axis-buttons");
      if (!t) return;
      if (We.length < 2 && Xe.length < 2) {
        t.style.display = "none";
        return;
      }
      t.style.display = "", t.innerHTML = "";
      const o = (d, s, r) => {
        const p = document.createElement("button");
        return p.textContent = d, p.dataset.view = s, p.title = r, p.style.cssText = "min-width:22px;padding:1px 5px;font-weight:bold", p.addEventListener("click", (i) => {
          var _a2;
          i.stopPropagation();
          const c = p.classList.contains("view-active");
          ze.querySelectorAll("[data-view]").forEach((m) => m.classList.remove("view-active")), c ? (yo("3d"), (_a2 = ze.querySelector('[data-view="3d"]')) == null ? void 0 : _a2.classList.add("view-active")) : (yo(s), p.classList.add("view-active"));
        }), p;
      }, n = document.createElement("span");
      n.textContent = "Ejes:", n.style.cssText = "color:#888;font-size:10px;margin-right:2px;align-self:center", t.appendChild(n);
      const l = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      We.forEach((d, s) => {
        const r = s < l.length ? l[s] : `X${s}`;
        t.appendChild(o(r, `axisX:${s}`, `Eje ${r} \u2014 elevaci\xF3n mirando en Y`));
      });
      const a = document.createElement("span");
      a.textContent = "|", a.style.cssText = "color:#555;margin:0 3px;align-self:center;font-weight:bold", t.appendChild(a), Xe.forEach((d, s) => {
        const r = `${s + 1}`;
        t.appendChild(o(r, `axisY:${s}`, `Eje ${r} \u2014 elevaci\xF3n mirando en X`));
      });
    }
    function qn() {
      var _a2;
      const t = ze.querySelector("#cad3d-floor-buttons");
      if (!t) return;
      const o = Math.round(((_a2 = ne.nPisos) == null ? void 0 : _a2.val) ?? 0);
      if (o < 1) {
        t.style.display = "none";
        return;
      }
      t.style.display = "", t.innerHTML = "";
      const n = (a, d, s) => {
        const r = document.createElement("button");
        return r.textContent = a, r.dataset.view = d, r.title = s, r.style.cssText = "min-width:22px;padding:1px 5px;font-weight:bold", r.addEventListener("click", (p) => {
          var _a3;
          p.stopPropagation();
          const i = r.classList.contains("view-active");
          ze.querySelectorAll("[data-view]").forEach((c) => c.classList.remove("view-active")), i ? (yo("3d"), (_a3 = ze.querySelector('[data-view="3d"]')) == null ? void 0 : _a3.classList.add("view-active")) : (yo(d), r.classList.add("view-active"));
        }), r;
      }, l = document.createElement("span");
      l.textContent = "Planta:", l.style.cssText = "color:#888;font-size:10px;margin-right:2px;align-self:center", t.appendChild(l);
      for (let a = 0; a < o; a++) t.appendChild(n(`P${a + 1}`, `plan:${a}`, `Planta Piso ${a + 1}`));
    }
    function Ea() {
      yo("3d"), ze.querySelectorAll("[data-view]").forEach((t) => t.classList.toggle("view-active", t.dataset.view === "3d"));
    }
    Ke.view = (t) => {
      t = {
        planta: "plan",
        elevationX: "elevX",
        elevationY: "elevY",
        corte: "section"
      }[t] || t, yo(t), ze.querySelectorAll("[data-view]").forEach((n) => n.classList.toggle("view-active", n.dataset.view === t));
    };
    let oo = false, Yt = false, po = false, jt = "line", Xt = [], vt = null, Ot = null, qt = null, Oo = null, Zt = null;
    const wt = {
      node: true,
      grid: true,
      midpoint: true,
      track: true
    }, _n = 0.5;
    let Bn = [], Qt = null, To = null;
    const qo = [], ln = [], Ia = 50;
    function _o() {
      qo.push({
        nodes: JSON.parse(JSON.stringify(e.nodes.val)),
        elements: JSON.parse(JSON.stringify(e.elements.val))
      }), qo.length > Ia && qo.shift(), ln.length = 0;
    }
    function As() {
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
    function zs() {
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
      const o = Ze();
      if (!o) return;
      const n = e.nodes.val, l = e.elements.val[t];
      if (!l) return;
      const a = [];
      for (let r = 0; r < l.length; r++) {
        const p = n[l[r]], i = n[l[(r + 1) % l.length]];
        a.push(p[0], p[1], p[2], i[0], i[1], i[2]);
      }
      const d = new to();
      d.setAttribute("position", new zo(a, 3));
      const s = new Wo(d, new Go({
        color: 16711935,
        linewidth: 3,
        depthTest: false
      }));
      s.renderOrder = 9998, s.__elemIdx = t, o.scene.add(s), $o.push(s), o.render();
    }
    function Mo() {
      const t = Ze();
      $o.forEach((o) => {
        t == null ? void 0 : t.scene.remove(o), o.geometry.dispose(), o.material.dispose();
      }), $o = [], t == null ? void 0 : t.render();
    }
    function wo() {
      fo && fo.remove();
      const t = j.size > 0 || N;
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
        ja([
          ...gt
        ]);
      }), o.querySelector("#sel-info").addEventListener("click", () => {
        if (gt.size === 1) {
          const n = [
            ...gt
          ][0];
          Os(n);
        } else {
          const n = [
            ...gt
          ], l = e.nodes.val, a = e.elements.val;
          let d = 0, s = 0, r = 0, p = 0;
          n.forEach((c) => {
            const m = a[c];
            if (m) if (m.length === 2) {
              const E = l[m[0]], w = l[m[1]], y = Math.abs(w[0] - E[0]), f = Math.abs(w[1] - E[1]), g = Math.abs(w[2] - E[2]);
              g > y && g > f ? d++ : s++;
            } else m.length === 3 ? r++ : m.length === 4 && p++;
          });
          const i = [];
          d && i.push(`${d} columnas`), s && i.push(`${s} vigas`), p && i.push(`${p} shells Q4`), r && i.push(`${r} triangulos`), alert(`${n.length} elementos seleccionados:
${i.join(", ")}`);
        }
      }), o.querySelector("#sel-hide").addEventListener("click", () => {
        gt.forEach((n) => j.add(n)), gt.clear(), Mo(), wo(), Re();
      }), o.querySelector("#sel-isolate").addEventListener("click", () => {
        N = true, G.clear(), gt.forEach((n) => G.add(n)), gt.clear(), Mo(), wo(), Re();
      }), o.querySelector("#sel-showall").addEventListener("click", () => {
        j.clear(), N = false, G.clear(), wo(), Re();
      }), o.querySelector("#sel-delete").addEventListener("click", () => {
        _o(), gt.forEach((n) => V.add(n)), gt.clear(), Mo(), wo(), Re();
      }), o.querySelector("#sel-clear").addEventListener("click", () => {
        gt.clear(), Mo(), wo();
      });
    }
    function rn() {
      var _a2;
      Yt = false, gt.clear(), Mo(), fo && (fo.remove(), fo = null), (_a2 = ze.querySelector("#cad3d-select")) == null ? void 0 : _a2.classList.remove("inspect-active");
      const o = Ze();
      o && (o.controls.enabled = true);
    }
    function Ao() {
      if (Jt) {
        const t = Ze();
        t == null ? void 0 : t.scene.remove(Jt), Jt.geometry.dispose(), Jt.material.dispose(), Jt = null, t == null ? void 0 : t.render();
      }
      Kt && (Kt.remove(), Kt = null);
    }
    function ka(t) {
      Hn();
      const o = Ze();
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
      for (const [d, s] of a) {
        const r = new Float32Array([
          n[0] - d[0] * l,
          n[1] - d[1] * l,
          n[2] - d[2] * l,
          n[0] + d[0] * l,
          n[1] + d[1] * l,
          n[2] + d[2] * l
        ]), p = new to();
        p.setAttribute("position", new xn(r, 3));
        const i = new jo({
          color: s,
          dashSize: 0.3,
          gapSize: 0.15,
          transparent: true,
          opacity: 0.4,
          depthTest: false
        }), c = new Wo(p, i);
        c.computeLineDistances(), c.renderOrder = 9990, o.scene.add(c), Bn.push(c);
      }
      o.render();
    }
    function Hn() {
      const t = Ze();
      for (const o of Bn) t == null ? void 0 : t.scene.remove(o), o.geometry.dispose(), o.material.dispose();
      Bn = [], To = null, Qt && (Qt.remove(), Qt = null);
    }
    function Ls(t, o, n, l) {
      Qt || (Qt = document.createElement("div"), Qt.style.cssText = "position:fixed;pointer-events:none;z-index:10002;background:var(--cad-bg);color:var(--cad-heading);font-family:monospace;font-size:11px;padding:2px 6px;border-radius:3px;white-space:nowrap;border:1px solid var(--cad-border);", document.body.appendChild(Qt));
      const a = l.x - n.x, d = l.y - n.y, s = l.z - n.z, r = Math.sqrt(a * a + d * d + s * s), p = Math.abs(a), i = Math.abs(d), c = Math.abs(s);
      let m = "";
      p > i && p > c ? m = `\u0394X=${a.toFixed(2)}` : i > p && i > c ? m = `\u0394Y=${d.toFixed(2)}` : c > 0.01 && (m = `\u0394Z=${s.toFixed(2)}`), Qt.textContent = `${r.toFixed(3)} m  ${m}`, Qt.style.left = t + 20 + "px", Qt.style.top = o - 10 + "px";
    }
    function Ta(t, o) {
      const l = e.nodes.val[o];
      if (!l) return null;
      const a = new Ne(l[0], l[1], l[2]), d = t.clone(), s = d.clone().sub(a), r = 0.3, p = Math.abs(s.x), i = Math.abs(s.y), c = Math.abs(s.z);
      return i < r && c < r && p > 0.01 ? new Ne(d.x, a.y, a.z) : p < r && c < r && i > 0.01 ? new Ne(a.x, d.y, a.z) : p < r && i < r && c > 0.01 ? new Ne(a.x, a.y, d.z) : null;
    }
    function cn() {
      var _a2;
      const t = Ze();
      Ot && t && (t.scene.remove(Ot), Ot.geometry.dispose(), Ot.material.dispose(), Ot = null), qt && t && (t.scene.remove(qt), qt.geometry.dispose(), qt.material.dispose(), qt = null), Hn(), vt = null, Zt = null, po = false, Oo && (Oo.remove(), Oo = null), (_a2 = ze.querySelector("#cad3d-draw")) == null ? void 0 : _a2.classList.remove("inspect-active"), t == null ? void 0 : t.render();
    }
    function Aa() {
      Oo && Oo.remove();
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
    `, document.body.appendChild(t), Oo = t;
      const l = () => {
        const a = t.querySelector("#dt-line"), d = t.querySelector("#dt-arc"), s = t.querySelector("#dt-node"), r = t.querySelector("#dt-area");
        a && (a.style.cssText = o(jt === "line")), d && (d.style.cssText = o(jt === "arc")), s && (s.style.cssText = o(jt === "node")), r && (r.style.cssText = o(jt === "area"));
        const p = t.querySelector("#ds-node"), i = t.querySelector("#ds-grid"), c = t.querySelector("#ds-mid"), m = t.querySelector("#ds-track");
        p && (p.style.cssText = n(wt.node)), i && (i.style.cssText = n(wt.grid)), c && (c.style.cssText = n(wt.midpoint)), m && (m.style.cssText = n(wt.track));
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
      }), t.querySelector("#dt-undo").addEventListener("click", () => As()), t.querySelector("#dt-redo").addEventListener("click", () => zs());
    }
    function Cs(t, o, n, l) {
      const a = l.getBoundingClientRect(), d = (t - a.left) / a.width * 2 - 1, s = -((o - a.top) / a.height) * 2 + 1, r = new Qs();
      r.setFromCamera(new ea(d, s), n);
      const p = e.nodes.val, i = e.elements.val, c = 0.12;
      if (wt.node) {
        let w = -1, y = 1 / 0;
        for (let f = 0; f < p.length; f++) {
          const g = p[f], I = new Ne(g[0], g[1], g[2]).project(n), A = Math.sqrt((I.x - d) ** 2 + (I.y - s) ** 2);
          A < c && A < y && (y = A, w = f);
        }
        if (w >= 0) return {
          nodeIdx: w,
          worldPos: new Ne(...p[w]),
          snapType: "node"
        };
      }
      if (wt.midpoint) {
        let w = 1 / 0, y = null;
        for (const f of i) {
          if (f.length !== 2) continue;
          const g = p[f[0]], I = p[f[1]], A = new Ne((g[0] + I[0]) / 2, (g[1] + I[1]) / 2, (g[2] + I[2]) / 2), T = A.clone().project(n), B = Math.sqrt((T.x - d) ** 2 + (T.y - s) ** 2);
          B < c * 0.8 && B < w && (w = B, y = A);
        }
        if (y) return {
          nodeIdx: null,
          worldPos: y,
          snapType: "mid"
        };
      }
      if (wt.grid) {
        const w = new Eo(new Ne(0, 0, 1), 0), y = new Ne();
        if (r.ray.intersectPlane(w, y)) {
          const f = wt.gridSize || _n;
          return y.x = Math.round(y.x / f) * f, y.y = Math.round(y.y / f) * f, y.z = Math.round(y.z / f) * f, {
            nodeIdx: null,
            worldPos: y,
            snapType: "grid"
          };
        }
      }
      const m = new Eo(new Ne(0, 0, 1), 0), E = new Ne();
      return r.ray.intersectPlane(m, E), {
        nodeIdx: null,
        worldPos: E,
        snapType: "free"
      };
    }
    function Fs(t) {
      const o = Ze();
      if (!o) return;
      const n = e.nodes.val;
      if (qt && (o.scene.remove(qt), qt.geometry.dispose(), qt.material.dispose(), qt = null), t.worldPos) {
        const l = t.snapType === "node" ? 16776960 : t.snapType === "mid" ? 16711935 : t.snapType === "grid" ? 65535 : 8947848, a = t.snapType === "node" ? 0.08 : 0.06, d = t.snapType === "mid" ? new Za(a * 2, a * 2, a * 2) : new Qa(a, 12, 12), s = new el({
          color: l,
          transparent: true,
          opacity: 0.8,
          depthTest: false
        });
        qt = new ra(d, s), qt.position.copy(t.worldPos), qt.renderOrder = 9999, o.scene.add(qt);
      }
      if (Ot && (o.scene.remove(Ot), Ot.geometry.dispose(), Ot.material.dispose(), Ot = null), vt !== null && t.worldPos) {
        const l = n[vt], a = new to();
        if (jt === "arc" && Zt !== null) {
          const s = n[Zt], r = Rs(new Ne(l[0], l[1], l[2]), new Ne(s[0], s[1], s[2]), t.worldPos, 16), p = [];
          for (let i = 0; i < r.length - 1; i++) p.push(r[i].x, r[i].y, r[i].z, r[i + 1].x, r[i + 1].y, r[i + 1].z);
          a.setAttribute("position", new zo(p, 3));
        } else a.setAttribute("position", new zo([
          l[0],
          l[1],
          l[2],
          t.worldPos.x,
          t.worldPos.y,
          t.worldPos.z
        ], 3));
        const d = new Go({
          color: 65280,
          linewidth: 2,
          depthTest: false
        });
        Ot = new Lo(a, d), jt === "arc" && Zt !== null && (Ot = new Wo(a, d)), Ot.renderOrder = 9999, o.scene.add(Ot);
      }
      o.render();
    }
    function Rs(t, o, n, l) {
      const a = [];
      for (let d = 0; d <= l; d++) {
        const s = d / l, r = o.clone().multiplyScalar(2).sub(t.clone().multiplyScalar(0.5)).sub(n.clone().multiplyScalar(0.5)), p = (1 - s) * (1 - s), i = 2 * (1 - s) * s, c = s * s;
        a.push(new Ne(p * t.x + i * r.x + c * n.x, p * t.y + i * r.y + c * n.y, p * t.z + i * r.z + c * n.z));
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
    function za(t) {
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
        const n = e.nodes.val, l = new Ne(...n[vt]), a = new Ne(...n[Zt]), d = new Ne(...n[o]), s = Math.max(4, Math.round(((_a2 = ne.nSubViga) == null ? void 0 : _a2.val) ?? 8)), r = Rs(l, a, d, s);
        _o();
        const p = [
          ...e.nodes.val
        ], i = [
          ...e.elements.val
        ];
        let c = vt;
        for (let m = 1; m < r.length; m++) {
          let E;
          if (m === r.length - 1) E = o;
          else {
            const w = r[m];
            E = p.length, p.push([
              w.x,
              w.y,
              w.z
            ]);
          }
          i.push([
            c,
            E
          ]), c = E;
        }
        e.nodes.val = p, e.elements.val = i, xo(), e.elementInputs.val = {
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
          ], a = Xt.map((d) => n[d]);
          try {
            const d = ho({
              points: a,
              polygon: Array.from({
                length: a.length
              }, (r, p) => p),
              maxMeshSize: _n || 0.5
            }), s = [];
            for (const r of d.nodes) {
              let p = -1;
              for (let i = 0; i < n.length; i++) {
                const c = Math.abs(n[i][0] - r[0]), m = Math.abs(n[i][1] - r[1]), E = Math.abs(n[i][2] - r[2]);
                if (c < 0.01 && m < 0.01 && E < 0.01) {
                  p = i;
                  break;
                }
              }
              p >= 0 ? s.push(p) : (s.push(n.length), n.push([
                r[0],
                r[1],
                r[2]
              ]));
            }
            for (const r of d.elements) l.push([
              s[r[0]],
              s[r[1]],
              s[r[2]]
            ]);
            e.nodes.val = n, e.elements.val = l, xo(), console.log(`Area: ${d.elements.length} triangulos creados desde ${Xt.length} vertices`);
          } catch (d) {
            console.error("Area mesh failed:", d.message);
          }
          Xt = [];
          return;
        }
        if (Xt.push(o), console.log(`Area vertex ${Xt.length}: node ${o}`), Xt.length >= 2) {
          const n = Xt[Xt.length - 2], l = e.nodes.val, a = Ze();
          if (a) {
            const d = new to().setFromPoints([
              new Ne(...l[n]),
              new Ne(...l[o])
            ]), s = new Wo(d, new Go({
              color: 65280,
              linewidth: 2
            }));
            s.name = "area-preview", a.scene.add(s), a.render();
          }
        }
        return;
      }
    }
    function Ps(t) {
      const o = Ze();
      if (!o) return;
      Jt && (o.scene.remove(Jt), Jt.geometry.dispose(), Jt.material.dispose());
      const n = e.nodes.val, l = e.elements.val[t];
      if (!l) return;
      const a = [];
      for (let s = 0; s < l.length; s++) {
        const r = n[l[s]], p = n[l[(s + 1) % l.length]];
        a.push(r[0], r[1], r[2], p[0], p[1], p[2]);
      }
      const d = new to();
      d.setAttribute("position", new zo(a, 3)), Jt = new Wo(d, new Go({
        color: 16776960,
        linewidth: 3,
        depthTest: false
      })), Jt.renderOrder = 9999, o.scene.add(Jt), o.render();
    }
    function Wn(t) {
      const o = Ze();
      if (!o) return -1;
      const n = o.renderer.domElement.getBoundingClientRect(), l = new ea((t.clientX - n.left) / n.width * 2 - 1, -((t.clientY - n.top) / n.height) * 2 + 1), a = new Qs();
      a.setFromCamera(l, o.controls.object), a.params.Line = {
        threshold: 0.5
      };
      const d = e.nodes.val, s = e.elements.val;
      if (d.length === 0 || s.length === 0) return -1;
      let r = 1 / 0, p = -1;
      const i = a.ray;
      for (let m = 0; m < s.length; m++) {
        const E = s[m];
        if (E.length === 2) {
          const w = new Ne(...d[E[0]]), y = new Ne(...d[E[1]]), f = new tl(w, y), g = new Ne(), I = new Ne();
          i.closestPointToPoint(f.getCenter(new Ne()), g), f.closestPointToPoint(g, true, I);
          const A = g.distanceTo(I);
          A < r && (r = A, p = m);
        } else if (E.length === 3) {
          const w = new Ne(...d[E[0]]), y = new Ne(...d[E[1]]), f = new Ne(...d[E[2]]), g = new Ne();
          if (i.intersectTriangle(w, y, f, false, g)) {
            const A = i.origin.distanceTo(g);
            A < r && (r = A, p = m);
          } else {
            const A = w.add(y).add(f).divideScalar(3), T = new Ne();
            i.closestPointToPoint(A, T);
            const B = T.distanceTo(A);
            B < r && (r = B, p = m);
          }
        } else if (E.length === 4) {
          const w = new Ne(...d[E[0]]), y = new Ne(...d[E[1]]), f = new Ne(...d[E[2]]), g = new Ne(...d[E[3]]), I = new Ne();
          let A = i.intersectTriangle(w, y, f, false, I);
          if (A) {
            const T = i.origin.distanceTo(I);
            T < r && (r = T, p = m);
          }
          if (A = i.intersectTriangle(w, f, g, false, I), A) {
            const T = i.origin.distanceTo(I);
            T < r && (r = T, p = m);
          }
        }
      }
      const { extent: c } = vo();
      return r < c * 0.1 ? p : -1;
    }
    function Me(t, o = 4) {
      return Math.abs(t) < 1e-10 ? "0" : Math.abs(t) >= 1e6 ? t.toExponential(2) : Math.abs(t) >= 100 ? t.toFixed(1) : t.toFixed(o);
    }
    function Gn(t, o, n = 12) {
      var _a2;
      const l = Math.min(t.length, n), a = Math.min(((_a2 = t[0]) == null ? void 0 : _a2.length) || 0, n);
      let d = "<table>";
      if (o) {
        d += '<tr><td class="header"></td>';
        for (let s = 0; s < a; s++) d += `<td class="header">${o[s] || s}</td>`;
        d += "</tr>";
      }
      for (let s = 0; s < l; s++) {
        d += "<tr>", o && (d += `<td class="header">${o[s] || s}</td>`);
        for (let r = 0; r < a; r++) {
          const p = t[s][r], i = Math.abs(p) > 1e-10 ? "nonzero" : "";
          d += `<td class="${i}">${Me(p, 2)}</td>`;
        }
        d += "</tr>";
      }
      return d += "</table>", d;
    }
    function Be(t, o) {
      return `<span class="frac"><span class="frac-num">${t}</span><span class="frac-den">${o}</span></span>`;
    }
    function z(t, o, n) {
      let l = `<span class="var">${t}</span>`;
      return o && (l += `<sub>${o}</sub>`), l;
    }
    function La(t, o, n, l, a, d, s) {
      const r = 0.8333333333333334 * o, p = 5 / 6 * o, i = p > 0 && a > 0 ? 12 * t * n / (a * p * s ** 2) : 0, c = r > 0 && a > 0 ? 12 * t * l / (a * r * s ** 2) : 0, m = t * o / s, E = a * d / s, w = 12 * t * n / s ** 3 / (1 + i), y = 6 * t * n / s ** 2 / (1 + i), f = 4 * t * n / s * (1 + i / 4) / (1 + i), g = 2 * t * n / s * (1 - i / 2) / (1 + i), I = i > 1e-10 || c > 1e-10;
      return `<div class="fem-eq eq-box">
      <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">Formulaci\xF3n: ${I ? "Timoshenko (con deformaci\xF3n por cortante)" : "Euler-Bernoulli"}</strong></div>
      ${I ? `
      <div style="text-align:left;margin-bottom:6px;color:var(--fem-eq-sub)">
        ${z("A", "s")} = ${Be("5", "6")} \xB7 ${z("A")} = <span class="highlight">${Me(r)}</span>
        &nbsp;&nbsp; \u03C6<sub>z</sub> = ${Be("12\xB7" + z("E") + "\xB7" + z("I", "z"), z("G") + "\xB7" + z("A", "s") + "\xB7" + z("L") + "\xB2")} = <span class="highlight">${Me(i)}</span>
        &nbsp;&nbsp; \u03C6<sub>y</sub> = <span class="highlight">${Me(c)}</span>
      </div>
      <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">Coeficientes Timoshenko (Dr. Aguiar):</strong></div>
      <div>${z("t", "z")} = ${Be("12\xB7" + z("E") + "\xB7" + z("I", "z"), z("L") + "\xB3\xB7(1+\u03C6<sub>z</sub>)")} = <span class="highlight">${Me(w)}</span> &nbsp;(cortante)</div>
      <div>${z("b", "z")} = ${Be("6\xB7" + z("E") + "\xB7" + z("I", "z"), z("L") + "\xB2\xB7(1+\u03C6<sub>z</sub>)")} = <span class="highlight">${Me(y)}</span> &nbsp;(acoplamiento)</div>
      <div>${z("k", "z")} = ${Be("4\xB7" + z("E") + "\xB7" + z("I", "z") + "\xB7(1+\u03C6/4)", z("L") + "\xB7(1+\u03C6<sub>z</sub>)")} = <span class="highlight">${Me(f)}</span> &nbsp;(flexi\xF3n diagonal)</div>
      <div>${z("a", "z")} = ${Be("2\xB7" + z("E") + "\xB7" + z("I", "z") + "\xB7(1\u2212\u03C6/2)", z("L") + "\xB7(1+\u03C6<sub>z</sub>)")} = <span class="highlight">${Me(g)}</span> &nbsp;(flexi\xF3n off-diag)</div>
      ` : `
      <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">Coeficientes de rigidez:</strong></div>
      `}
      <div>${Be(z("E") + "\xB7" + z("A"), z("L"))} = <span class="highlight">${Me(m)}</span> &nbsp;(axial)</div>
      <div>${Be(z("G") + "\xB7" + z("J"), z("L"))} = <span class="highlight">${Me(E)}</span> &nbsp;(torsi\xF3n)</div>
      ${I ? "" : `
      <div>${Be("12\xB7" + z("E") + "\xB7" + z("I", "z"), z("L") + "\xB3")} = <span class="highlight">${Me(w)}</span></div>
      <div>${Be("4\xB7" + z("E") + "\xB7" + z("I", "z"), z("L"))} = <span class="highlight">${Me(f)}</span></div>
      `}
    </div>
    <div class="fem-eq">
      ${z("k", "local")} = <span class="mat-sym" style="grid-template-columns:repeat(4,auto)">
        <span class="cell">${Be(z("EA"), z("L"))}</span><span class="cell">0</span><span class="cell dots">\u22EF</span><span class="cell">${Be("\u2212" + z("EA"), z("L"))}</span>
        <span class="cell">0</span><span class="cell">${z("t", "z")}</span><span class="cell dots">\u22EF</span><span class="cell">${z("b", "z")}</span>
        <span class="cell dots">\u22EE</span><span class="cell dots">\u22EE</span><span class="cell dots">\u22F1</span><span class="cell dots">\u22EE</span>
        <span class="cell">0</span><span class="cell">${z("b", "z")}</span><span class="cell dots">\u22EF</span><span class="cell">${z("k", "z")}</span>
      </span>
      <sub style="color:var(--fem-label)">12\xD712 ${I ? "(Timoshenko)" : "(Euler-Bernoulli)"}</sub>
    </div>
    ${I ? `<div class="fem-eq eq-box" style="margin-top:6px">
      <div style="text-align:left"><strong style="color:var(--fem-section-title)">Matrices de rigidez (Dr. Aguiar, Fig 7.9):</strong></div>
      <div style="margin-top:4px">${z("K", "f")} = ${z("B", "f")}<sup>T</sup> \xB7 ${z("E")}\xB7${z("I")} \xB7 ${z("B", "f")} \xB7 ${z("J")} &nbsp;<sub style="color:var(--fem-label)">(flexi\xF3n, 1 pt Gauss)</sub></div>
      <div>${z("K", "c")} = ${z("B", "c")}<sup>T</sup> \xB7 ${z("G")}\xB7${z("A'")} \xB7 ${z("B", "c")} \xB7 ${z("J")} &nbsp;<sub style="color:var(--fem-label)">(cortante, 2 pts Gauss)</sub></div>
      <div>${z("K", "total")} = ${z("K", "f")} + ${z("K", "c")}</div>
    </div>` : ""}`;
    }
    function Ca(t) {
      if (t.length === 2) {
        const n = go(t[1], t[0]), l = Ro(n), a = n[0] / l, d = n[1] / l, s = n[2] / l;
        return `<div class="fem-eq eq-box">
        <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">Cosenos directores:</strong></div>
        <div>${z("l")} = cos(\u03B1) = ${Be("\u0394x", z("L"))} = ${Be(Me(n[0]), Me(l))} = <span class="highlight">${Me(a)}</span></div>
        <div>${z("m")} = cos(\u03B2) = ${Be("\u0394y", z("L"))} = ${Be(Me(n[1]), Me(l))} = <span class="highlight">${Me(d)}</span></div>
        <div>${z("n")} = cos(\u03B3) = ${Be("\u0394z", z("L"))} = ${Be(Me(n[2]), Me(l))} = <span class="highlight">${Me(s)}</span></div>
      </div>
      <div class="fem-eq">
        \u03BB = <span class="mat-sym" style="grid-template-columns:repeat(3,auto)">
          <span class="cell">${z("l")}</span><span class="cell">${z("m")}</span><span class="cell">${z("n")}</span>
          <span class="cell">${Be("\u2212" + z("m"), z("D"))}</span><span class="cell">${Be(z("l"), z("D"))}</span><span class="cell">0</span>
          <span class="cell">${Be("\u2212" + z("l") + "\xB7" + z("n"), z("D"))}</span><span class="cell">${Be("\u2212" + z("m") + "\xB7" + z("n"), z("D"))}</span><span class="cell">${z("D")}</span>
        </span>
        &nbsp; donde ${z("D")} = \u221A(${z("l")}\xB2 + ${z("m")}\xB2)
      </div>
      <div class="fem-eq">
        ${z("T")} = ${z("I", "4")} \u2297 \u03BB &nbsp; <sub style="color:var(--fem-label)">(Kronecker, 12\xD712)</sub>
      </div>`;
      }
      return `<div class="fem-eq">${z("T")} \u2014 sistema local del tri\xE1ngulo (normal \xD7 lados) <sub>18\xD718</sub></div>`;
    }
    function Fa() {
      return `<div class="fem-eq">
      ${z("K", "global")} = ${z("T")}<sup>T</sup> \xB7 ${z("k", "local")} \xB7 ${z("T")}
    </div>`;
    }
    function Ra(t) {
      const o = t.map((n) => `6\xB7${n} = ${6 * n}`).join(", ");
      return `<div class="fem-eq eq-box">
      <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">Ensamblaje en K global:</strong></div>
      <div>${z("K", "global")}[${z("i")}, ${z("j")}] += ${z("K", "elem")}[${z("i")}, ${z("j")}]</div>
      <div style="margin-top:4px">donde ${z("i")}, ${z("j")} \u2208 {${o}} + (0..5)</div>
    </div>`;
    }
    function Pa(t) {
      return t ? `<div class="fem-eq eq-box">
        <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">Recuperaci\xF3n de fuerzas:</strong></div>
        <div>${z("u", "local")} = ${z("T")} \xB7 ${z("u", "global")}</div>
        <div>${z("f", "local")} = ${z("k", "local")} \xB7 ${z("u", "local")}</div>
        <div style="margin-top:4px;color:var(--fem-eq-sub)">
          ${z("f")} = [${z("N", "i")}, ${z("V", "y,i")}, ${z("V", "z,i")}, ${z("M", "x,i")}, ${z("M", "y,i")}, ${z("M", "z,i")}, ${z("N", "j")}, \u2026]
        </div>
      </div>` : `<div class="fem-eq eq-box">
      <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">Esfuerzos en placa:</strong></div>
      <div>\u03C3 = ${Be("1", "2" + z("A"))} \xB7 ${z("D")} \xB7 ${z("B")} \xB7 ${z("u")}</div>
      <div>${z("N", "xx")} = \u03C3<sub>xx</sub> \xB7 ${z("t")} &nbsp;&nbsp; ${z("M", "xx")} = \u03C3<sub>xx</sub> \xB7 ${Be(z("t") + "\xB3", "12")}</div>
    </div>`;
    }
    function Yn(t, o) {
      const n = t.length;
      let l = '<table><tr><td class="hdr"></td>';
      for (let a = 0; a < n; a++) l += `<td class="hdr">${o[a] || a}</td>`;
      l += "</tr>";
      for (let a = 0; a < n; a++) {
        l += `<tr><td class="hdr">${o[a] || a}</td>`;
        for (let d = 0; d < n; d++) {
          const s = t[a][d], r = (a === d ? "diag " : "") + (Math.abs(s) > 1e-10 ? "nz" : "");
          l += `<td class="${r}">${Me(s, 2)}</td>`;
        }
        l += "</tr>";
      }
      return l += "</table>", l;
    }
    function Ns() {
      const t = "0", o = Be(z("EA"), z("L")), n = Be("\u2212" + z("EA"), z("L")), l = Be("12" + z("EI", "z"), z("L") + "\xB3"), a = Be("\u221212" + z("EI", "z"), z("L") + "\xB3"), d = Be("12" + z("EI", "y"), z("L") + "\xB3"), s = Be("\u221212" + z("EI", "y"), z("L") + "\xB3"), r = Be("6" + z("EI", "z"), z("L") + "\xB2"), p = Be("\u22126" + z("EI", "z"), z("L") + "\xB2"), i = Be("6" + z("EI", "y"), z("L") + "\xB2"), c = Be("\u22126" + z("EI", "y"), z("L") + "\xB2"), m = Be(z("GJ"), z("L")), E = Be("\u2212" + z("GJ"), z("L")), w = Be("4" + z("EI", "z"), z("L")), y = Be("2" + z("EI", "z"), z("L")), f = Be("4" + z("EI", "y"), z("L")), g = Be("2" + z("EI", "y"), z("L")), I = '<span style="color:var(--fem-eq-dots);font-style:italic">sym</span>', A = [
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
          d,
          t,
          c,
          t,
          t,
          t,
          s,
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
          E,
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
          i,
          t,
          g,
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
          a,
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
          s,
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
          c,
          t,
          g,
          t,
          t,
          t,
          i,
          t,
          f,
          t
        ],
        [
          t,
          r,
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
      let H = '<div style="margin-bottom:8px;color:var(--fem-eq-sub);font-size:11px;font-family:monospace">Eq. 6.1 \u2014 Matriz de rigidez de elemento de p\xF3rtico espacial</div>';
      H += '<table><tr><td class="hdr"></td>';
      for (const x of T) H += `<td class="hdr">${x}</td>`;
      H += "</tr>";
      for (let x = 0; x < 12; x++) {
        H += `<tr><td class="hdr">${A[x]}</td>`;
        for (let u = 0; u < 12; u++) if (u < x) H += `<td style="color:var(--fem-border-cell)">${u === 0 && x > 0 ? I : ""}</td>`;
        else {
          const S = B[x][u], L = (x === u ? "diag " : "") + (S !== "0" ? "nz" : "");
          H += `<td class="${L}">${S}</td>`;
        }
        H += "</tr>";
      }
      return H += "</table>", H;
    }
    function Na(t, o, n, l, a, d, s) {
      return `<div class="coeff-grid">${[
        {
          name: `${Be(z("E") + "\xB7" + z("A"), z("L"))}`,
          calc: `${Be(Me(t) + "\xD7" + Me(o), Me(s))}`,
          val: t * o / s,
          label: "Axial"
        },
        {
          name: `${Be("12\xB7" + z("E") + "\xB7" + z("I", "z"), z("L") + "\xB3")}`,
          calc: `${Be("12\xD7" + Me(t) + "\xD7" + Me(n), Me(s) + "\xB3")}`,
          val: 12 * t * n / s ** 3,
          label: "Corte Y"
        },
        {
          name: `${Be("6\xB7" + z("E") + "\xB7" + z("I", "z"), z("L") + "\xB2")}`,
          calc: `${Be("6\xD7" + Me(t) + "\xD7" + Me(n), Me(s) + "\xB2")}`,
          val: 6 * t * n / s ** 2,
          label: "Corte-Momento Z"
        },
        {
          name: `${Be("12\xB7" + z("E") + "\xB7" + z("I", "y"), z("L") + "\xB3")}`,
          calc: `${Be("12\xD7" + Me(t) + "\xD7" + Me(l), Me(s) + "\xB3")}`,
          val: 12 * t * l / s ** 3,
          label: "Corte Z"
        },
        {
          name: `${Be("6\xB7" + z("E") + "\xB7" + z("I", "y"), z("L") + "\xB2")}`,
          calc: `${Be("6\xD7" + Me(t) + "\xD7" + Me(l), Me(s) + "\xB2")}`,
          val: 6 * t * l / s ** 2,
          label: "Corte-Momento Y"
        },
        {
          name: `${Be(z("G") + "\xB7" + z("J"), z("L"))}`,
          calc: `${Be(Me(a) + "\xD7" + Me(d), Me(s))}`,
          val: a * d / s,
          label: "Torsi\xF3n"
        },
        {
          name: `${Be("4\xB7" + z("E") + "\xB7" + z("I", "z"), z("L"))}`,
          calc: `${Be("4\xD7" + Me(t) + "\xD7" + Me(n), Me(s))}`,
          val: 4 * t * n / s,
          label: "Flexi\xF3n Z (4EI/L)"
        },
        {
          name: `${Be("2\xB7" + z("E") + "\xB7" + z("I", "z"), z("L"))}`,
          calc: `${Be("2\xD7" + Me(t) + "\xD7" + Me(n), Me(s))}`,
          val: 2 * t * n / s,
          label: "Flexi\xF3n Z (2EI/L)"
        },
        {
          name: `${Be("4\xB7" + z("E") + "\xB7" + z("I", "y"), z("L"))}`,
          calc: `${Be("4\xD7" + Me(t) + "\xD7" + Me(l), Me(s))}`,
          val: 4 * t * l / s,
          label: "Flexi\xF3n Y (4EI/L)"
        },
        {
          name: `${Be("2\xB7" + z("E") + "\xB7" + z("I", "y"), z("L"))}`,
          calc: `${Be("2\xD7" + Me(t) + "\xD7" + Me(l), Me(s))}`,
          val: 2 * t * l / s,
          label: "Flexi\xF3n Y (2EI/L)"
        }
      ].map((p) => `<div class="coeff-item"><div style="color:var(--fem-eq-sub);font-size:10px;font-family:monospace;margin-bottom:2px">${p.label}</div>${p.name} = ${p.calc} = <span class="highlight">${Me(p.val)}</span></div>`).join("")}</div>`;
    }
    function Jn(t, o, n, l) {
      var _a2;
      const a = document.querySelector(".fem-full-overlay");
      a && a.remove();
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
    `, document.body.appendChild(d), (_a2 = d.querySelector("#fem-full-close")) == null ? void 0 : _a2.addEventListener("click", () => d.remove()), d.addEventListener("click", (s) => {
        s.target === d && d.remove();
      });
    }
    function Os(t) {
      var _a2, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l2, _m, _n2, _o2, _p, _q, _r, _s2, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I, _J, _K, _L, _M, _N, _O;
      Kt && Kt.remove();
      const o = e.nodes.val, n = e.elements.val, l = n[t], a = l.map((x) => o[x]), d = l.length === 2, s = ((_a2 = e.elementInputs) == null ? void 0 : _a2.val) || {}, r = (_b = e.deformOutputs) == null ? void 0 : _b.val, p = (_c = e.analyzeOutputs) == null ? void 0 : _c.val;
      if (d) {
        const x = Ro(go(a[1], a[0])), u = ((_d = s.elasticities) == null ? void 0 : _d.get(t)) ?? 0, S = ((_e2 = s.areas) == null ? void 0 : _e2.get(t)) ?? 0, L = ((_f = s.momentsOfInertiaZ) == null ? void 0 : _f.get(t)) ?? 0, R = ((_g = s.momentsOfInertiaY) == null ? void 0 : _g.get(t)) ?? 0, W = ((_h = s.shearModuli) == null ? void 0 : _h.get(t)) ?? 0, h = ((_i = s.torsionalConstants) == null ? void 0 : _i.get(t)) ?? 0, M = ((_j = s.momentReleases) == null ? void 0 : _j.get(t)) || [], v = ((_k = s.partialFixitySprings) == null ? void 0 : _k.get(t)) || [], C = [
          "P (Axial)",
          "V2 (Corte)",
          "V3 (Corte)",
          "T (Torsi\xF3n)",
          "M22 (Momento)",
          "M33 (Momento)"
        ];
        let X = "";
        for (let U = 0; U < 6; U++) {
          const ae = U, Z = U + 6, K = (M.length >= 12 ? M[ae] : U >= 3 && M.length >= 6 && M[U - 3]) ? "checked" : "", de = (M.length >= 12 ? M[Z] : U >= 3 && M.length >= 6 && M[U]) ? "checked" : "", re = v.length >= 12 && v[ae] > 0 ? v[ae].toFixed(1) : "", Ie = v.length >= 12 && v[Z] > 0 ? v[Z].toFixed(1) : "";
          X += `<tr>
          <td style="text-align:left;color:var(--fem-key)">${C[U]}</td>
          <td style="text-align:center"><input type="checkbox" data-rel="${ae}" ${K}></td>
          <td style="text-align:center"><input type="checkbox" data-rel="${Z}" ${de}></td>
          <td><input type="number" data-spr="${ae}" value="${re}" placeholder="0" style="width:50px;background:var(--fem-bg);color:var(--fem-val);border:1px solid var(--fem-border);font-size:10px;text-align:right"></td>
          <td><input type="number" data-spr="${Z}" value="${Ie}" placeholder="0" style="width:50px;background:var(--fem-bg);color:var(--fem-val);border:1px solid var(--fem-border);font-size:10px;text-align:right"></td>
        </tr>`;
        }
        `${l[0]}${l[1]}${Me(x)}${Me(u)}${Me(S)}${Me(L)}${Me(R)}${Me(W)}${Me(h)}${X}`;
      } else {
        const x = ((_l2 = s.elasticities) == null ? void 0 : _l2.get(t)) ?? 0, u = ((_m = s.thicknesses) == null ? void 0 : _m.get(t)) ?? 0, S = ((_n2 = s.poissonsRatios) == null ? void 0 : _n2.get(t)) ?? 0, L = x / (2 * (1 + S)), R = l.length === 4, W = x / (1 - S * S);
        `${l.length}${l.join(", ")}${Me(x)}${Me(L)}${Me(u)}${Me(S)}`, R && (E = `<div class="fem-eq eq-box">
          <div style="text-align:left;margin-bottom:6px"><strong style="color:var(--fem-section-title)">Formulaci\xF3n Q4: Membrana + Mindlin-Reissner + Drilling</strong></div>

          <div style="text-align:left;margin-bottom:4px"><strong style="color:var(--fem-section-title)">1. Matriz constitutiva (esfuerzo plano):</strong></div>
          <div>${z("D")} = ${Be(z("E"), "1\u2212\u03BD\xB2")} \xB7 <span class="mat-sym" style="grid-template-columns:repeat(3,auto)">
            <span class="cell">1</span><span class="cell">\u03BD</span><span class="cell">0</span>
            <span class="cell">\u03BD</span><span class="cell">1</span><span class="cell">0</span>
            <span class="cell">0</span><span class="cell">0</span><span class="cell">${Be("1\u2212\u03BD", "2")}</span>
          </span> = ${Be(Me(x), "1\u2212" + Me(S) + "\xB2")} = <span class="highlight">${Me(W)}</span></div>

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
          <div>${z("B\u0304", "I")} = ${z("B", "I")} + ${z("B", "IC")} &nbsp; donde &nbsp; ${z("B", "IC")} = \u2212${Be("1", "V")}\u222B${z("B", "I")} dV</div>
          <div style="color:var(--fem-eq-sub)">Jacobiano del centro para modos incompatibles \u2192 pasa patch test</div>

          <div style="text-align:left;margin-top:8px;margin-bottom:4px"><strong style="color:var(--fem-section-title)">8. Drilling DOF (Hughes-Brezzi 1989):</strong></div>
          <div>${z("K", "drill")} = \u03B1\xB7${z("G")}\xB7${z("t")} \xB7 \u222B${z("B", "d")}<sup>T</sup>\xB7${z("B", "d")} dA &nbsp; donde \u03B1 = 0.5</div>
          <div>${z("B", "d")}[i] = \u03B8<sub>z,i</sub> \u2212 \xBD\xB7(\u2202v/\u2202x \u2212 \u2202u/\u2202y) &nbsp;<sub style="color:var(--fem-label)">(rotaci\xF3n antisim\xE9trica)</sub></div>

          <div style="text-align:left;margin-top:8px;margin-bottom:4px"><strong style="color:var(--fem-section-title)">9. Placa Mindlin-Reissner + MITC4:</strong></div>
          <div>${z("D", "b")} = ${Be(z("E") + "\xB7" + z("t") + "\xB3", "12\xB7(1\u2212\u03BD\xB2)")} = <span class="highlight">${Me(x * u ** 3 / (12 * (1 - S ** 2)))}</span></div>
          <div>${z("D", "s")} = \u03BA\xB7${z("G")}\xB7${z("t")} = <span class="highlight">${Me(5 / 6 * L * u)}</span> &nbsp; <sub style="color:var(--fem-label)">\u03BA = 5/6</sub></div>
          <div style="color:var(--fem-eq-sub)">MITC4: interpolaci\xF3n de cortante en puntos de atado (tying points)</div>

          <div style="text-align:left;margin-top:8px;margin-bottom:4px"><strong style="color:var(--fem-section-title)">10. Ensamblaje final:</strong></div>
          <div>${z("K", "24\xD724")} = ${z("K", "membrana")}(8\xD78) + ${z("K", "flexi\xF3n")}(12\xD712) + ${z("K", "drilling")}(12\xD712)</div>
          <div style="color:var(--fem-eq-sub)">DOFs por nodo: [u, v, w, \u03B8x, \u03B8y, \u03B8z]</div>
        </div>`);
      }
      let i = "", c = "", m = "", E = "", w = "", y = "", f = "", g = "", I = null, A = null, T = null, B = [];
      try {
        if (I = vn(a, s, t), A = yn(a), T = no(os(A), no(I, A)), B = d ? [
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
          const L = Ro(go(a[1], a[0])), R = ((_o2 = s.elasticities) == null ? void 0 : _o2.get(t)) ?? 0, W = ((_p = s.areas) == null ? void 0 : _p.get(t)) ?? 0, h = ((_q = s.momentsOfInertiaZ) == null ? void 0 : _q.get(t)) ?? 0, M = ((_r = s.momentsOfInertiaY) == null ? void 0 : _r.get(t)) ?? 0, v = ((_s2 = s.shearModuli) == null ? void 0 : _s2.get(t)) ?? 0, C = ((_t = s.torsionalConstants) == null ? void 0 : _t.get(t)) ?? 0;
          E = La(R, W, h, M, v, C, L);
        }
        w = Ca(a), y = Fa(), f = Ra(l), g = Pa(d);
        const x = '<button class="fem-expand-btn" data-full="kLocal">\u26F6 Ver completa</button>', u = '<button class="fem-expand-btn" data-full="T">\u26F6 Ver completa</button>', S = '<button class="fem-expand-btn" data-full="kGlobal">\u26F6 Ver completa</button>';
        i = `<div class="matrix-label">k_local (${I.length}\xD7${I.length}) ${x}</div>${Gn(I, B)}`, c = `<div class="matrix-label">T \u2014 Transformaci\xF3n (${A.length}\xD7${A.length}) ${u}</div>${Gn(A, B)}`, m = `<div class="matrix-label">K_global = T^T \xB7 k \xB7 T ${S}</div>${Gn(T, B)}`;
      } catch (x) {
        i = `<div style="color:red">Error: ${x.message}</div>`;
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
        l.map((u, S) => {
          var _a3;
          const L = ((_a3 = r.deformations) == null ? void 0 : _a3.get(u)) || [
            0,
            0,
            0,
            0,
            0,
            0
          ], R = x.map((W, h) => `<span class="prop-key">${W}</span>: <span class="${Math.abs(L[h]) > 1e-10 ? "result-val" : ""}">${Me(L[h])}</span>`).join(" &nbsp;");
          return `<div style="margin-bottom:2px"><strong>Nodo ${u}:</strong> ${R}</div>`;
        }).join("");
      }
      if (p && d && (r == null ? void 0 : r.deformations) && I && A) {
        const x = (_u = p.normals) == null ? void 0 : _u.get(t), u = (_v = p.shearsY) == null ? void 0 : _v.get(t), S = (_w = p.shearsZ) == null ? void 0 : _w.get(t), L = (_x = p.torsions) == null ? void 0 : _x.get(t), R = (_y = p.bendingsY) == null ? void 0 : _y.get(t), W = (_z = p.bendingsZ) == null ? void 0 : _z.get(t), h = [
          "ux",
          "uy",
          "uz",
          "\u03B8x",
          "\u03B8y",
          "\u03B8z"
        ], M = [];
        for (const Z of l) {
          const K = ((_A = r.deformations) == null ? void 0 : _A.get(Z)) || [
            0,
            0,
            0,
            0,
            0,
            0
          ];
          M.push(...K);
        }
        let v = [];
        try {
          v = no(A, M);
        } catch {
          v = new Array(12).fill(0);
        }
        let C = [];
        try {
          C = no(I, v);
        } catch {
          C = new Array(12).fill(0);
        }
        const X = (Z, K) => Z.map((de, re) => `<span style="color:${Math.abs(de) > 1e-10 ? "var(--fem-nonzero)" : "var(--fem-eq-dots)"}">${K[re % 6]}=${Me(de)}</span>`).join(", "), ae = [
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
        `${z("u", "global")}${l.map((Z, K) => `<span style="color:var(--fem-label)">nodo ${Z}:</span> ${h.map((de, re) => `<span style="color:${Math.abs(M[K * 6 + re]) > 1e-10 ? "var(--fem-eq-var)" : "var(--fem-eq-dots)"}">${Me(M[K * 6 + re])}</span>`).join(", ")}`).join(" | ")}${z("u", "local")}${z("T")}${z("u", "global")}${z("u", "local")}${X(v, [
          ...h,
          ...h
        ])}${z("f", "local")}${z("k", "local")}${z("u", "local")}${z("f", "local")}${C.map((Z, K) => `<span style="color:${Math.abs(Z) > 1e-10 ? "var(--fem-nonzero)" : "var(--fem-eq-dots)"}">${ae[K]}=${Me(Z)}</span>`).join(", ")}${z("P", "1")}${z("N", "i")}${Me(C[0])}${z("P", "7")}${z("N", "j")}${Me(C[6])}${z("P", "2")}${z("V", "y,i")}${Me(C[1])}${z("P", "8")}${z("V", "y,j")}${Me(C[7])}${z("P", "3")}${z("V", "z,i")}${Me(C[2])}${z("P", "9")}${z("V", "z,j")}${Me(C[8])}${z("P", "4")}${z("M", "x,i")}${Me(C[3])}${z("P", "10")}${z("M", "x,j")}${Me(C[9])}${z("P", "5")}${z("M", "y,i")}${Me(C[4])}${z("P", "11")}${z("M", "y,j")}${Me(C[10])}${z("P", "6")}${z("M", "z,i")}${Me(C[5])}${z("P", "12")}${z("M", "z,j")}${Me(C[11])}${x ? x.map((Z) => Me(Z)).join(", ") : "\u2014"}${u ? u.map((Z) => Me(Z)).join(", ") : "\u2014"}${S ? S.map((Z) => Me(Z)).join(", ") : "\u2014"}${L ? L.map((Z) => Me(Z)).join(", ") : "\u2014"}${R ? R.map((Z) => Me(Z)).join(", ") : "\u2014"}${W ? W.map((Z) => Me(Z)).join(", ") : "\u2014"}`;
      } else if (p && d) {
        const x = (_B = p.normals) == null ? void 0 : _B.get(t), u = (_C = p.shearsY) == null ? void 0 : _C.get(t), S = (_D = p.shearsZ) == null ? void 0 : _D.get(t), L = (_E = p.torsions) == null ? void 0 : _E.get(t), R = (_F = p.bendingsY) == null ? void 0 : _F.get(t), W = (_G = p.bendingsZ) == null ? void 0 : _G.get(t);
        `${x ? x.map((h) => Me(h)).join(", ") : "\u2014"}${u ? u.map((h) => Me(h)).join(", ") : "\u2014"}${S ? S.map((h) => Me(h)).join(", ") : "\u2014"}${L ? L.map((h) => Me(h)).join(", ") : "\u2014"}${R ? R.map((h) => Me(h)).join(", ") : "\u2014"}${W ? W.map((h) => Me(h)).join(", ") : "\u2014"}`;
      } else if (p && !d) {
        const x = (_H = p.bendingXX) == null ? void 0 : _H.get(t), u = (_I = p.bendingYY) == null ? void 0 : _I.get(t), S = (_J = p.bendingXY) == null ? void 0 : _J.get(t), L = (_K = p.membraneXX) == null ? void 0 : _K.get(t), R = (_L = p.membraneYY) == null ? void 0 : _L.get(t), W = (_M = p.membraneXY) == null ? void 0 : _M.get(t);
        `${x ? x.map((h) => Me(h)).join(", ") : "\u2014"}${u ? u.map((h) => Me(h)).join(", ") : "\u2014"}${S ? S.map((h) => Me(h)).join(", ") : "\u2014"}${L ? L.map((h) => Me(h)).join(", ") : "\u2014"}${R ? R.map((h) => Me(h)).join(", ") : "\u2014"}${W ? W.map((h) => Me(h)).join(", ") : "\u2014"}`;
      }
      `${l[0]}`, 6 * l[0], 6 * l[0] + 5, `${l[1]}`, 6 * l[1], 6 * l[1] + 5, l.length === 3 && (`${l[2]}`, 6 * l[2], 6 * l[2] + 5), o.length * 6, o.length * 6, Kt = vl(t, o, n, s, r, p), Kt.id = "fem-inspect-panel", document.body.appendChild(Kt), (_N = Kt.querySelector("#er-close")) == null ? void 0 : _N.addEventListener("click", () => Ao()), (_O = Kt.querySelector("#rel-apply")) == null ? void 0 : _O.addEventListener("click", () => {
        const x = Kt.querySelectorAll("input[data-rel]"), u = Kt.querySelectorAll("input[data-spr]"), S = new Array(12).fill(false), L = new Array(12).fill(0);
        x.forEach((W) => {
          S[parseInt(W.dataset.rel)] = W.checked;
        }), u.forEach((W) => {
          const h = parseFloat(W.value);
          h > 0 && (L[parseInt(W.dataset.spr)] = h);
        }), s.momentReleases || (s.momentReleases = /* @__PURE__ */ new Map()), s.partialFixitySprings || (s.partialFixitySprings = /* @__PURE__ */ new Map()), S.some((W) => W) ? s.momentReleases.set(t, S) : s.momentReleases.delete(t), L.some((W) => W > 0) ? s.partialFixitySprings.set(t, L) : s.partialFixitySprings.delete(t), console.log(`Releases elem ${t}:`, S.map((W, h) => W ? relIds[h] : "").filter(Boolean).join(" ") || "none"), console.log(`Springs elem ${t}:`, L);
        const R = Kt.querySelector("#rel-apply");
        R.textContent = "\u2713 Aplicado", R.style.background = "#4caf50", setTimeout(() => {
          R.textContent = "Aplicar", R.style.background = "var(--fem-heading)";
        }, 1500);
      });
      const H = d ? (() => {
        var _a3, _b2, _c2, _d2, _e3, _f2;
        const x = Ro(go(a[1], a[0])), u = ((_a3 = s.elasticities) == null ? void 0 : _a3.get(t)) ?? 0, S = ((_b2 = s.areas) == null ? void 0 : _b2.get(t)) ?? 0, L = ((_c2 = s.momentsOfInertiaZ) == null ? void 0 : _c2.get(t)) ?? 0, R = ((_d2 = s.momentsOfInertiaY) == null ? void 0 : _d2.get(t)) ?? 0, W = ((_e3 = s.shearModuli) == null ? void 0 : _e3.get(t)) ?? 0, h = ((_f2 = s.torsionalConstants) == null ? void 0 : _f2.get(t)) ?? 0;
        return Na(u, S, L, R, W, h, x);
      })() : void 0;
      Kt.querySelectorAll("[data-full]").forEach((x) => {
        x.addEventListener("click", (u) => {
          u.stopPropagation();
          const S = x.dataset.full;
          if (S === "kLocal" && I) {
            const L = d ? Ns() : "<em>Shell 18\xD718 \u2014 ver tabla num\xE9rica</em>";
            Jn(`Elemento ${t} \u2014 Rigidez Local k_local`, L, Yn(I, B), H);
          } else if (S === "T" && A) Jn(`Elemento ${t} \u2014 Transformaci\xF3n T`, w, Yn(A, B));
          else if (S === "kGlobal" && T) {
            const L = d ? Ns() : "<em>Shell 18\xD718</em>";
            Jn(`Elemento ${t} \u2014 Rigidez Global K = T^T \xB7 k \xB7 T`, L, Yn(T, B), H);
          }
        });
      });
    }
    function qs() {
      const l = [], a = [];
      for (let y = 0; y <= 8; y++) {
        const f = y / 8, g = 30 * f, A = 12 * (1 - f) * (1 - f * 0.3) / 2, T = l.length;
        if (l.push([
          -A,
          -A,
          g
        ]), l.push([
          A,
          -A,
          g
        ]), l.push([
          A,
          A,
          g
        ]), l.push([
          -A,
          A,
          g
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
        ]), y > 0 && y < 8 && (a.push([
          T,
          T + 2
        ]), a.push([
          T + 1,
          T + 3
        ])), y > 0) {
          const B = T - 4;
          for (let H = 0; H < 4; H++) a.push([
            B + H,
            T + H
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
      const d = /* @__PURE__ */ new Map();
      for (let y = 0; y < 4; y++) d.set(y, [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
      const s = l.length - 4, r = /* @__PURE__ */ new Map();
      for (let y = 0; y < 4; y++) r.set(s + y, [
        0,
        0,
        -50,
        0,
        0,
        0
      ]);
      e.nodes.val = l, e.elements.val = a, e.nodeInputs && (e.nodeInputs.val = {
        supports: d,
        loads: r
      });
      const p = 2e8, i = 77e6, c = 5e-3, m = 2e-6, E = 1e-6, w = {
        elasticities: new Map(a.map((y, f) => [
          f,
          p
        ])),
        shearModuli: new Map(a.map((y, f) => [
          f,
          i
        ])),
        areas: new Map(a.map((y, f) => [
          f,
          c
        ])),
        momentsOfInertiaZ: new Map(a.map((y, f) => [
          f,
          m
        ])),
        momentsOfInertiaY: new Map(a.map((y, f) => [
          f,
          m
        ])),
        torsionalConstants: new Map(a.map((y, f) => [
          f,
          E
        ]))
      };
      e.elementInputs && (e.elementInputs.val = w);
      try {
        const y = Nt(l, a, {
          supports: d,
          loads: r
        }, w);
        y && e.deformOutputs && (e.deformOutputs.val = y);
      } catch (y) {
        console.warn("Eiffel deform:", y.message);
      }
      setTimeout(() => Lt(), 50), Qe(), console.log(`Torre Eiffel: ${l.length} nodos, ${a.length} elementos, H=30m`);
    }
    function _s() {
      const l = [], a = [];
      for (let w = 0; w <= 20; w++) {
        const y = w / 20, f = 20 * y, g = 20 * (1 - Math.pow(2 * y - 1, 2)), I = 2;
        l.push([
          f,
          -2 / 2,
          g
        ]), l.push([
          f,
          I / 2,
          g
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
        supports: d,
        loads: s
      });
      const r = 2e8, p = 77e6, i = 0.01, c = 5e-6, m = 2e-6, E = {
        elasticities: new Map(a.map((w, y) => [
          y,
          r
        ])),
        shearModuli: new Map(a.map((w, y) => [
          y,
          p
        ])),
        areas: new Map(a.map((w, y) => [
          y,
          i
        ])),
        momentsOfInertiaZ: new Map(a.map((w, y) => [
          y,
          c
        ])),
        momentsOfInertiaY: new Map(a.map((w, y) => [
          y,
          c
        ])),
        torsionalConstants: new Map(a.map((w, y) => [
          y,
          m
        ]))
      };
      e.elementInputs && (e.elementInputs.val = E);
      try {
        const w = Nt(l, a, {
          supports: d,
          loads: s
        }, E);
        w && e.deformOutputs && (e.deformOutputs.val = w);
      } catch (w) {
        console.warn("Arco:", w.message);
      }
      setTimeout(() => Lt(), 50), Qe(), console.log(`Arco Gateway: ${l.length} nodos, ${a.length} elem, span=20m, H=20m`);
    }
    function Bs() {
      const d = [], s = [];
      for (let f = 0; f <= 16; f++) {
        const g = 60 * f / 16;
        d.push([
          g,
          -6 / 2,
          8
        ]), d.push([
          g,
          6 / 2,
          8
        ]);
      }
      const r = d.length;
      for (let f = 0; f < 16; f++) s.push([
        f * 2,
        (f + 1) * 2
      ]), s.push([
        f * 2 + 1,
        (f + 1) * 2 + 1
      ]), s.push([
        f * 2,
        f * 2 + 1
      ]);
      s.push([
        16 * 2,
        16 * 2 + 1
      ]);
      const p = [
        Math.round(16 / 3),
        Math.round(2 * 16 / 3)
      ], i = [];
      for (const f of p) {
        const g = 60 * f / 16, I = d.length;
        d.push([
          g,
          -6 / 2,
          0
        ]);
        const A = d.length;
        d.push([
          g,
          6 / 2,
          0
        ]);
        const T = d.length;
        d.push([
          g,
          -6 / 2,
          28
        ]);
        const B = d.length;
        d.push([
          g,
          6 / 2,
          28
        ]), i.push(T, B), s.push([
          I,
          f * 2
        ]), s.push([
          f * 2,
          T
        ]), s.push([
          A,
          f * 2 + 1
        ]), s.push([
          f * 2 + 1,
          B
        ]), s.push([
          T,
          B
        ]);
      }
      for (const f of i) {
        const g = d[f][0];
        for (let I = 0; I <= 16; I++) {
          const A = 60 * I / 16;
          if (Math.abs(A - g) > 60 * 0.05 && Math.abs(A - g) < 60 * 0.45) {
            const T = d[f][1] < 0 ? I * 2 : I * 2 + 1;
            I % 2 === 0 && s.push([
              f,
              T
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
      for (let f = r; f < r + p.length * 4; f += 4) c.set(f, [
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
      e.nodes.val = d, e.elements.val = s, e.nodeInputs && (e.nodeInputs.val = {
        supports: c,
        loads: m
      });
      const E = 2e8, w = 77e6, y = {
        elasticities: new Map(s.map((f, g) => [
          g,
          E
        ])),
        shearModuli: new Map(s.map((f, g) => [
          g,
          w
        ])),
        areas: new Map(s.map((f, g) => [
          g,
          g < 16 * 3 + 1 ? 0.02 : 1e-3
        ])),
        momentsOfInertiaZ: new Map(s.map((f, g) => [
          g,
          5e-5
        ])),
        momentsOfInertiaY: new Map(s.map((f, g) => [
          g,
          2e-5
        ])),
        torsionalConstants: new Map(s.map((f, g) => [
          g,
          1e-5
        ]))
      };
      e.elementInputs && (e.elementInputs.val = y);
      try {
        const f = Nt(d, s, {
          supports: c,
          loads: m
        }, y);
        f && e.deformOutputs && (e.deformOutputs.val = f);
      } catch (f) {
        console.warn("Puente:", f.message);
      }
      setTimeout(() => Lt(), 50), Qe(), console.log(`Puente atirantado: ${d.length} nodos, ${s.length} elem, span=60m`);
    }
    function Ds() {
      const d = [], s = [];
      for (let g = 0; g <= 12; g++) {
        const I = g * 3.5, A = g * 5 * Math.PI / 180;
        for (let T = 0; T < 6; T++) {
          const B = A + 2 * Math.PI * T / 6, H = 5 * Math.cos(B), x = 5 * Math.sin(B);
          d.push([
            H,
            x,
            I
          ]);
        }
      }
      for (let g = 0; g <= 12; g++) {
        const I = g * 6;
        for (let A = 0; A < 6; A++) s.push([
          I + A,
          I + (A + 1) % 6
        ]);
        if (g < 12) {
          const A = (g + 1) * 6;
          for (let T = 0; T < 6; T++) s.push([
            I + T,
            A + T
          ]), s.push([
            I + T,
            A + (T + 1) % 6
          ]);
        }
      }
      for (let g = 0; g <= 12; g++) {
        const I = d.length;
        d.push([
          0,
          0,
          g * 3.5
        ]);
        const A = g * 6;
        for (let T = 0; T < 6; T++) s.push([
          I,
          A + T
        ]);
      }
      const r = 13 * 6;
      for (let g = 0; g < 12; g++) s.push([
        r + g,
        r + g + 1
      ]);
      const p = /* @__PURE__ */ new Map();
      for (let g = 0; g < 6; g++) p.set(g, [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
      p.set(r, [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
      const i = /* @__PURE__ */ new Map();
      for (let g = 1; g <= 12; g++) {
        const I = 10 * g / 12, A = g * 6;
        for (let T = 0; T < 6; T++) i.set(A + T, [
          I,
          0,
          -5,
          0,
          0,
          0
        ]);
      }
      e.nodes.val = d, e.elements.val = s, e.nodeInputs && (e.nodeInputs.val = {
        supports: p,
        loads: i
      });
      const c = 2e8, m = 77e6, E = 8e-3, w = 1e-5, y = 5e-6, f = {
        elasticities: new Map(s.map((g, I) => [
          I,
          c
        ])),
        shearModuli: new Map(s.map((g, I) => [
          I,
          m
        ])),
        areas: new Map(s.map((g, I) => [
          I,
          E
        ])),
        momentsOfInertiaZ: new Map(s.map((g, I) => [
          I,
          w
        ])),
        momentsOfInertiaY: new Map(s.map((g, I) => [
          I,
          w
        ])),
        torsionalConstants: new Map(s.map((g, I) => [
          I,
          y
        ]))
      };
      e.elementInputs && (e.elementInputs.val = f);
      try {
        const g = Nt(d, s, {
          supports: p,
          loads: i
        }, f);
        g && e.deformOutputs && (e.deformOutputs.val = g);
      } catch (g) {
        console.warn("Twisted:", g.message);
      }
      setTimeout(() => Lt(), 50), Qe(), console.log(`Torre Twist: ${d.length} nodos, ${s.length} elem, 12 pisos, twist=5deg/piso`);
    }
    function Hs() {
      const a = [], d = [];
      for (let f = 0; f <= 20; f++) {
        const g = f / 20, I = f * 3;
        let A = 8 * (1 - g * 0.7);
        g > 0.4 && (A *= 0.85), g > 0.7 && (A *= 0.7);
        const T = a.length;
        a.push([
          0,
          0,
          I
        ]);
        for (let B = 0; B < 3; B++) {
          const H = B * 2 * Math.PI / 3 - Math.PI / 2, x = A * Math.cos(H), u = A * Math.sin(H), S = a.length;
          a.push([
            x,
            u,
            I
          ]), d.push([
            T,
            S
          ]);
          const L = a.length;
          a.push([
            x * 0.5,
            u * 0.5,
            I
          ]), d.push([
            T,
            L
          ]), d.push([
            L,
            S
          ]);
        }
        for (let B = 0; B < 3; B++) {
          const H = T + 1 + B * 2, x = T + 1 + (B + 1) % 3 * 2;
          d.push([
            H,
            x
          ]);
        }
        if (f < 20) {
          const H = T + 7;
          d.push([
            T,
            H
          ]);
          for (let x = 0; x < 3; x++) d.push([
            T + 1 + x * 2,
            H + 1 + x * 2
          ]), d.push([
            T + 2 + x * 2,
            H + 2 + x * 2
          ]), d.push([
            T + 1 + x * 2,
            H + 2 + x * 2
          ]);
        }
      }
      const s = /* @__PURE__ */ new Map(), r = 1 + 3 * 2;
      for (let f = 0; f < r; f++) s.set(f, [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
      const p = /* @__PURE__ */ new Map();
      for (let f = 1; f <= 20; f++) {
        const g = f * r, I = 5 * f / 20;
        p.set(g, [
          I,
          0,
          -10,
          0,
          0,
          0
        ]);
      }
      e.nodes.val = a, e.elements.val = d, e.nodeInputs && (e.nodeInputs.val = {
        supports: s,
        loads: p
      });
      const i = 35e6, c = 14e6, m = 0.02, E = 5e-5, w = 2e-5, y = {
        elasticities: new Map(d.map((f, g) => [
          g,
          i
        ])),
        shearModuli: new Map(d.map((f, g) => [
          g,
          c
        ])),
        areas: new Map(d.map((f, g) => [
          g,
          m
        ])),
        momentsOfInertiaZ: new Map(d.map((f, g) => [
          g,
          E
        ])),
        momentsOfInertiaY: new Map(d.map((f, g) => [
          g,
          E
        ])),
        torsionalConstants: new Map(d.map((f, g) => [
          g,
          w
        ]))
      };
      e.elementInputs && (e.elementInputs.val = y);
      try {
        const f = Nt(a, d, {
          supports: s,
          loads: p
        }, y);
        f && e.deformOutputs && (e.deformOutputs.val = f);
      } catch (f) {
        console.warn("Burj:", f.message);
      }
      setTimeout(() => Lt(), 50), Qe(), console.log(`Burj Khalifa: ${a.length} nodos, ${d.length} elem, 20 pisos, H=${20 * 3}m`);
    }
    function js() {
      const t = [], o = [];
      for (let m = 0; m < 3; m++) {
        const E = m * 12, w = 15 - m * 2, y = 20 - m * 3, f = 8 - m, g = t.length;
        for (let A = 0; A <= 4; A++) {
          const T = A / 4, B = -f / 2 + f * T, H = y * (1 - T * T * 0.3);
          for (let x = 0; x <= 12; x++) {
            const u = x / 12, S = E + H * u, L = w * Math.sin(Math.PI * u) * (1 - T * T * 0.5), R = B;
            t.push([
              S,
              R,
              L
            ]);
          }
        }
        const I = 13;
        for (let A = 0; A < 4; A++) for (let T = 0; T < 12; T++) {
          const B = g + A * I + T, H = g + A * I + T + 1, x = g + (A + 1) * I + T + 1, u = g + (A + 1) * I + T;
          o.push([
            B,
            H,
            x,
            u
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
        supports: a,
        loads: d
      });
      const s = 35e6, r = 0.2, p = 0.15, i = s / (2 * (1 + r)), c = {
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
          p
        ])),
        shearModuli: new Map(o.map((m, E) => [
          E,
          i
        ]))
      };
      e.elementInputs && (e.elementInputs.val = c);
      try {
        const m = Nt(t, o, {
          supports: a,
          loads: d
        }, c);
        m && e.deformOutputs && (e.deformOutputs.val = m);
      } catch (m) {
        console.warn("Opera:", m.message);
      }
      setTimeout(() => Lt(), 50), Qe(), console.log(`Sydney Opera: ${t.length} nodos, ${o.length} shells Q4, 3 velas`);
    }
    function Ws() {
      const l = [], a = [];
      for (let y = 0; y <= 15; y++) {
        const f = y / 15, g = y * 3.5, I = 5 * (0.6 + 0.4 * Math.sin(Math.PI * f));
        if (f > 0.9) {
          const A = 5 * (0.6 + 0.4 * Math.sin(Math.PI * 0.9)) * (1 - (f - 0.9) * 8);
          for (let T = 0; T < 12; T++) {
            const B = 2 * Math.PI * T / 12;
            l.push([
              Math.max(A, 1) * Math.cos(B),
              Math.max(A, 1) * Math.sin(B),
              g
            ]);
          }
        } else for (let A = 0; A < 12; A++) {
          const T = 2 * Math.PI * A / 12;
          l.push([
            I * Math.cos(T),
            I * Math.sin(T),
            g
          ]);
        }
      }
      for (let y = 0; y < 15; y++) {
        const f = y * 12, g = (y + 1) * 12;
        for (let A = 0; A < 12; A++) a.push([
          f + A,
          f + (A + 1) % 12
        ]);
        const I = y % 2 === 0 ? 1 : -1;
        for (let A = 0; A < 12; A++) {
          const T = (A + I + 12) % 12;
          a.push([
            f + A,
            g + T
          ]), a.push([
            f + A,
            g + A
          ]);
        }
      }
      const d = 15 * 12;
      for (let y = 0; y < 12; y++) a.push([
        d + y,
        d + (y + 1) % 12
      ]);
      const s = /* @__PURE__ */ new Map();
      for (let y = 0; y < 12; y++) s.set(y, [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
      const r = /* @__PURE__ */ new Map();
      for (let y = 1; y <= 15; y++) {
        const f = y * 12, g = 3 * y / 15;
        for (let I = 0; I < 12; I += 3) r.set(f + I, [
          g,
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
      const p = 2e8, i = 77e6, c = 6e-3, m = 8e-6, E = 4e-6, w = {
        elasticities: new Map(a.map((y, f) => [
          f,
          p
        ])),
        shearModuli: new Map(a.map((y, f) => [
          f,
          i
        ])),
        areas: new Map(a.map((y, f) => [
          f,
          c
        ])),
        momentsOfInertiaZ: new Map(a.map((y, f) => [
          f,
          m
        ])),
        momentsOfInertiaY: new Map(a.map((y, f) => [
          f,
          m
        ])),
        torsionalConstants: new Map(a.map((y, f) => [
          f,
          E
        ]))
      };
      e.elementInputs && (e.elementInputs.val = w);
      try {
        const y = Nt(l, a, {
          supports: s,
          loads: r
        }, w);
        y && e.deformOutputs && (e.deformOutputs.val = y);
      } catch (y) {
        console.warn("Diagrid:", y.message);
      }
      setTimeout(() => Lt(), 50), Qe(), console.log(`Diagrid Tower: ${l.length} nodos, ${a.length} elem, 15 pisos, H=${15 * 3.5}m`);
    }
    function Oa() {
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
    function qa() {
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
        }, n = o("po-colB"), l = o("po-colH"), a = o("po-fc") * 1e3, d = o("po-fy") * 1e3, s = o("po-H"), r = o("po-L"), p = o("po-As") * 1e-4, i = o("po-nbar"), c = o("po-drift") / 100, m = o("po-ncycles"), E = t.querySelector("#pushover-status");
        E.textContent = "Generando historia de desplazamientos...";
        const w = [], y = c * s, f = 40;
        for (let g = 1; g <= m; g++) {
          const I = y * g / m;
          for (let A = 0; A <= f; A++) w.push(I * Math.sin(2 * Math.PI * A / f));
        }
        E.textContent = `Resolviendo pushover (${w.length} pasos)...`;
        try {
          const { cyclicPushover: g } = await oa(async () => {
            const { cyclicPushover: A } = await import("./cyclicPushoverCpp-BipHDx7d.js").then(async (m2) => {
              await m2.__tla;
              return m2;
            });
            return {
              cyclicPushover: A
            };
          }, __vite__mapDeps([5,4])), I = await g({
            colHeight: s,
            beamLength: r,
            col: {
              b: n,
              h: l,
              fpc: -a,
              Fy_rebar: d,
              E_rebar: 2e8,
              rebar_area: p,
              cover: 0.04,
              n_rebar: i
            },
            beam: {
              b: 0.25,
              h: 0.3,
              fpc: -a,
              Fy_rebar: d,
              E_rebar: 2e8,
              rebar_area: p * 0.7,
              cover: 0.03,
              n_rebar: i
            },
            dispHistory: w
          });
          E.textContent = `Completado: ${I.nSteps} pasos`, _a(t.querySelector("#pushover-canvas"), I.displacements, I.forces, `Pushover: ${n * 100}x${l * 100}cm, f'c=${a / 1e3}MPa, Fy=${d / 1e3}MPa`);
        } catch (g) {
          E.textContent = `Error: ${g.message}`, console.error("Pushover failed:", g);
        }
      });
    }
    function _a(t, o, n, l) {
      const a = t.getContext("2d");
      if (!a || o.length === 0) return;
      const d = t.width, s = t.height, r = {
        left: 55,
        right: 15,
        top: 30,
        bottom: 35
      }, p = d - r.left - r.right, i = s - r.top - r.bottom;
      a.fillStyle = "#111118", a.fillRect(0, 0, d, s);
      let c = Math.min(...o), m = Math.max(...o), E = Math.min(...n), w = Math.max(...n);
      c === m && (c -= 0.01, m += 0.01), E === w && (E -= 1, w += 1);
      const y = m - c, f = w - E, g = (B) => r.left + (B - c) / y * p, I = (B) => r.top + i - (B - E) / f * i;
      a.strokeStyle = "#333", a.lineWidth = 0.5, c < 0 && m > 0 && (a.strokeStyle = "#555", a.beginPath(), a.moveTo(g(0), r.top), a.lineTo(g(0), r.top + i), a.stroke()), E < 0 && w > 0 && (a.beginPath(), a.moveTo(r.left, I(0)), a.lineTo(r.left + p, I(0)), a.stroke()), a.strokeStyle = "#ff4444", a.lineWidth = 1.5, a.beginPath(), a.moveTo(g(o[0]), I(n[0]));
      for (let B = 1; B < o.length; B++) a.lineTo(g(o[B]), I(n[B]));
      a.stroke(), a.fillStyle = "#aaa", a.font = "11px monospace", a.textAlign = "center", a.fillText("Desplazamiento (m)", r.left + p / 2, s - 5), a.save(), a.translate(12, r.top + i / 2), a.rotate(-Math.PI / 2), a.fillText("Fuerza (kN)", 0, 0), a.restore(), a.fillStyle = "#ee9b00", a.font = "bold 11px monospace", a.textAlign = "center", a.fillText(l, d / 2, 15), a.fillStyle = "#888", a.font = "9px monospace", a.textAlign = "center";
      const A = y / 5;
      for (let B = 0; B <= 5; B++) {
        const H = c + A * B;
        a.fillText((H * 1e3).toFixed(1), g(H), s - r.bottom + 15);
      }
      a.textAlign = "right";
      const T = f / 5;
      for (let B = 0; B <= 5; B++) {
        const H = E + T * B;
        a.fillText(H.toFixed(0), r.left - 5, I(H) + 3);
      }
    }
    let en = null;
    function Ba() {
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
      }), t.querySelector("#nl-test").addEventListener("click", () => Da(t));
    }
    function Da(t) {
      const o = parseFloat(t.querySelector("#nl-fy").value), n = parseFloat(t.querySelector("#nl-e0").value), l = parseFloat(t.querySelector("#nl-b").value), a = parseFloat(t.querySelector("#nl-r0").value), d = parseFloat(t.querySelector("#nl-amp").value), s = parseInt(t.querySelector("#nl-cycles").value), r = 100, p = [];
      for (let U = 0; U < s; U++) {
        const ae = d * (1 + U * 0.5);
        for (let Z = 0; Z < r; Z++) {
          const K = Z / r * 2 * Math.PI;
          p.push(ae * Math.sin(K));
        }
      }
      const i = o / n, c = l * n;
      let m = 0, E = 0, w = -i, y = i, f = 0, g = 0, I = 0, A = 0, T = 0, B = 0;
      const H = [];
      for (const U of p) {
        let ae = w, Z = y, K = f, de = g, re = I, Ie = A, Pe = T, q = B, fe;
        const oe = U - m;
        if (Math.abs(oe) < 1e-20) {
          H.push(E);
          continue;
        }
        if ((q === 0 || q === 3) && (oe < 0 ? (q = 2, de = -i, re = -o, K = de, Ie = 0, Pe = 0) : (q = 1, de = i, re = o, K = de, Ie = 0, Pe = 0)), q === 2 && oe > 0) {
          q = 1, Ie = m, Pe = E, m < ae && (ae = m);
          const Ee = (Z - ae) / (2 * 1 * i), je = 1 + 0 * Math.pow(Ee, 0.8);
          de = (o * je - c * i * je - Pe + n * Ie) / (n - c), re = o * je + c * (de - i * je), K = Z;
        } else if (q === 1 && oe < 0) {
          q = 2, Ie = m, Pe = E, m > Z && (Z = m);
          const Ee = (Z - ae) / (2 * 1 * i), je = 1 + 0 * Math.pow(Ee, 0.8);
          de = (-o * je + c * i * je - Pe + n * Ie) / (n - c), re = -o * je + c * (de + i * je), K = ae;
        }
        const pe = Math.abs((K - de) / i);
        let Q = a - 0.925 * pe / (0.15 + pe);
        Q < 0.1 && (Q = 0.1);
        const ue = (U - Ie) / (de - Ie), we = 1 + Math.pow(Math.abs(ue), Q), se = Math.pow(we, 1 / Q);
        fe = l * ue + (1 - l) * ue / se, fe = fe * (re - Pe) + Pe, H.push(fe), m = U, E = fe, w = ae, y = Z, f = K, g = de, I = re, A = Ie, T = Pe, B = q;
      }
      const x = t.querySelector("#nl-canvas"), u = x.getContext("2d"), S = x.width, L = x.height;
      u.clearRect(0, 0, S, L);
      const R = Math.max(...p.map(Math.abs)), W = Math.max(...H.map(Math.abs)), h = (S - 40) / (2 * R), M = (L - 40) / (2 * W), v = S / 2, C = L / 2;
      u.strokeStyle = "#444", u.lineWidth = 1, u.beginPath(), u.moveTo(20, C), u.lineTo(S - 20, C), u.stroke(), u.beginPath(), u.moveTo(v, 20), u.lineTo(v, L - 20), u.stroke(), u.fillStyle = "#888", u.font = "10px monospace", u.textAlign = "center", u.fillText("\u03B5 (strain)", S - 40, C - 5), u.fillText("\u03C3 (stress)", v + 30, 15), u.fillText(`\xB1${(R * 100).toFixed(1)}%`, S - 30, C + 12), u.fillText(`\xB1${(W / 1e3).toFixed(0)} MPa`, v + 40, 30), u.strokeStyle = "#00ccff", u.lineWidth = 1.5, u.beginPath();
      for (let U = 0; U < p.length; U++) {
        const ae = v + p[U] * h, Z = C - H[U] * M;
        U === 0 ? u.moveTo(ae, Z) : u.lineTo(ae, Z);
      }
      u.stroke(), u.strokeStyle = "#ff333366", u.lineWidth = 1, u.setLineDash([
        4,
        4
      ]), u.beginPath(), u.moveTo(20, C - o * M), u.lineTo(S - 20, C - o * M), u.stroke(), u.beginPath(), u.moveTo(20, C + o * M), u.lineTo(S - 20, C + o * M), u.stroke(), u.setLineDash([]), u.fillStyle = "#ff6666", u.font = "9px monospace", u.fillText(`Fy = ${(o / 1e3).toFixed(0)} MPa`, S - 50, C - o * M - 5);
      const X = t.querySelector("#nl-info");
      X.textContent = `Steel02: Fy=${(o / 1e3).toFixed(0)} MPa, E\u2080=${(n / 1e6).toFixed(0)} GPa, b=${l}, R\u2080=${a} \u2014 ${s} ciclos, amp=${(d * 100).toFixed(1)}%`;
    }
    function Ha() {
      var _a2, _b, _c, _d;
      const t = document.querySelector(".rpt-overlay");
      if (t) {
        t.remove();
        return;
      }
      const o = e.nodes.val, n = e.elements.val, l = ((_a2 = e.elementInputs) == null ? void 0 : _a2.val) || {}, a = ((_b = e.nodeInputs) == null ? void 0 : _b.val) || {}, d = (_c = e.deformOutputs) == null ? void 0 : _c.val;
      if ((_d = e.analyzeOutputs) == null ? void 0 : _d.val, !o.length || !n.length) {
        alert("No hay modelo cargado");
        return;
      }
      const s = ul({
        nodes: o,
        elements: n,
        nodeInputs: a,
        elementInputs: l,
        deformOutputs: d
      });
      document.body.appendChild(s);
    }
    let Bo = null;
    function ja(t) {
      Bo && Bo.remove();
      const o = document.createElement("div");
      o.style.cssText = "position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background:#1a1a2e;color:#eee;border:2px solid #00ccff;border-radius:8px;padding:16px;z-index:10001;width:320px;font-family:monospace;font-size:12px;box-shadow:0 4px 20px rgba(0,0,0,0.5);";
      const n = mn(), l = bn(), a = Object.entries(n).map(([i, c]) => `<option value="${c}">${i}</option>`).join(""), d = Object.entries(l).map(([i, c]) => `<option value="${c}">${i}</option>`).join("");
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
      function p() {
        const i = s.value;
        let c = "";
        i === "rect" ? c = `<div style="display:flex;gap:6px;"><label>b(m):<input id="ap-b" type="number" value="0.30" step="0.05" min="0.1" max="2" style="width:70px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label>
                <label>h(m):<input id="ap-h" type="number" value="0.50" step="0.05" min="0.1" max="2" style="width:70px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label></div>` : i === "circ" ? c = '<label>d(m):<input id="ap-d" type="number" value="0.40" step="0.05" min="0.1" max="2" style="width:70px;background:#333;color:#fff;border:1px solid #555;padding:2px;"></label>' : i === "W" ? c = `<select id="ap-profile" style="background:#333;color:#fff;border:1px solid #555;padding:3px;width:100%;">${a}</select>` : i === "HSS" ? c = `<select id="ap-profile" style="background:#333;color:#fff;border:1px solid #555;padding:3px;width:100%;">${d}</select>` : i === "I-param" ? c = `<div style="display:grid;grid-template-columns:1fr 1fr;gap:4px;">
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
      s.addEventListener("change", p), p(), o.querySelector("#asgn-close").addEventListener("click", () => {
        o.remove(), Bo = null;
      }), o.querySelector("#asgn-apply").addEventListener("click", () => {
        var _a2, _b, _c, _d, _e2, _f, _g, _h;
        const i = s.value, c = {
          secType: i
        };
        i === "rect" ? (c.b = parseFloat(o.querySelector("#ap-b").value), c.h = parseFloat(o.querySelector("#ap-h").value), c.material = 0) : i === "circ" ? (c.b = parseFloat(o.querySelector("#ap-d").value), c.material = 0) : i === "W" || i === "HSS" ? (c.profileIdx = parseInt(o.querySelector("#ap-profile").value), c.material = 1) : i === "I-param" ? (c.bf = parseFloat(o.querySelector("#ap-bf").value), c.hf = parseFloat(o.querySelector("#ap-hf").value), c.tf = parseFloat(o.querySelector("#ap-tf").value), c.tw = parseFloat(o.querySelector("#ap-tw").value), c.material = 1) : i === "tubular" && (c.bc = parseFloat(o.querySelector("#ap-bc").value), c.hc = parseFloat(o.querySelector("#ap-hc").value), c.t = parseFloat(o.querySelector("#ap-t").value), c.material = 1);
        const m = new Array(12).fill(false), E = new Array(12).fill(0);
        o.querySelectorAll("input[data-asgn-rel]").forEach((w) => {
          m[parseInt(w.dataset.asgnRel)] = w.checked;
        }), o.querySelectorAll("input[data-asgn-spr]").forEach((w) => {
          const y = parseFloat(w.value);
          y > 0 && (E[parseInt(w.dataset.asgnSpr)] = y);
        }), c.releases12 = m, c.springs12 = E, c.releaseRotStart = m[4] || m[5], c.releaseRotEnd = m[10] || m[11], c.releaseAxial = m[0], c.releaseTorsion = m[3], c.modI = parseFloat((_a2 = o.querySelector("#asgn-mod-i")) == null ? void 0 : _a2.value) || 1, c.modA = parseFloat((_b = o.querySelector("#asgn-mod-a")) == null ? void 0 : _b.value) || 1, c.modJ = parseFloat((_c = o.querySelector("#asgn-mod-j")) == null ? void 0 : _c.value) || 1, c.modAs2 = parseFloat((_d = o.querySelector("#asgn-mod-as2")) == null ? void 0 : _d.value) ?? 1, c.modAs3 = parseFloat((_e2 = o.querySelector("#asgn-mod-as3")) == null ? void 0 : _e2.value) ?? 1, c.modI3 = parseFloat((_f = o.querySelector("#asgn-mod-i3")) == null ? void 0 : _f.value) || 1, c.modMass = parseFloat((_g = o.querySelector("#asgn-mod-mass")) == null ? void 0 : _g.value) || 1, c.modWeight = parseFloat((_h = o.querySelector("#asgn-mod-weight")) == null ? void 0 : _h.value) || 1, t.forEach((w) => ye.set(w, {
          ...c
        })), o.remove(), Bo = null, xo(), e.elementInputs.val = {
          ...e.elementInputs.val
        };
      }), o.querySelector("#asgn-remove").addEventListener("click", () => {
        t.forEach((i) => ye.delete(i)), o.remove(), Bo = null, xo(), e.elementInputs.val = {
          ...e.elementInputs.val
        };
      });
    }
    let Do = null;
    function Wa(t) {
      var _a2, _b, _c;
      Do && Do.remove();
      const o = e.nodes.val, n = e.elements.val[t];
      if (!n || n.length !== 2) return;
      const l = o[n[0]], a = o[n[1]], d = Math.abs(a[0] - l[0]), s = Math.abs(a[1] - l[1]), r = Math.abs(a[2] - l[2]), p = s > d && s > r, i = Math.sqrt(d * d + s * s + r * r), c = $e.get(t) ?? 0, m = (_c = (_b = (_a2 = e.elementInputs) == null ? void 0 : _a2.val) == null ? void 0 : _b.sectionShapes) == null ? void 0 : _c.get(t), E = (m == null ? void 0 : m.name) || (m ? `${m.type} ${((m.b ?? 0) * 100).toFixed(0)}x${((m.h ?? 0) * 100).toFixed(0)}` : "\u2014"), w = document.createElement("div");
      w.style.cssText = "position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background:#1a1a2e;color:#eee;border:2px solid #ff9900;border-radius:8px;padding:16px;z-index:10000;min-width:280px;font-family:monospace;font-size:13px;box-shadow:0 4px 20px rgba(0,0,0,0.5);", w.innerHTML = `
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
        <b style="color:#ff9900;">Elemento ${t}</b>
        <button id="ep-close" style="background:none;border:none;color:#888;cursor:pointer;font-size:18px;">\u2715</button>
      </div>
      <div style="margin-bottom:8px;">
        <span style="color:#888;">Tipo:</span> ${p ? "Columna" : "Viga"} &nbsp;
        <span style="color:#888;">Piso:</span> ${c + 1} &nbsp;
        <span style="color:#888;">L:</span> ${i.toFixed(3)} m
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
        w.remove(), Do = null, Ao();
      }), w.querySelector("#ep-delete").addEventListener("click", () => {
        V.add(t), w.remove(), Do = null, Ao(), Re();
      }), w.querySelector("#ep-inspect").addEventListener("click", () => {
        w.remove(), Do = null, Os(t);
      });
    }
    setTimeout(() => {
      const t = document.getElementById("viewer");
      if (!t) return;
      const o = t.querySelector("canvas");
      if (!o) return;
      let n = null, l = null;
      const a = 5;
      function d(p) {
        const i = Ze();
        if (!i) return null;
        const c = i.controls.object, m = new Ne(p[0], p[1], p[2]);
        m.project(c);
        const E = o.getBoundingClientRect();
        return {
          x: (m.x + 1) / 2 * E.width,
          y: (-m.y + 1) / 2 * E.height
        };
      }
      function s(p, i, c, m, E) {
        const w = Math.min(p, c), y = Math.max(p, c), f = Math.min(i, m), g = Math.max(i, m), I = e.nodes.val, A = e.elements.val, T = [];
        for (let B = 0; B < A.length; B++) {
          const H = A[B], x = H.map((u) => d(I[u])).filter(Boolean);
          if (x.length !== 0) if (E) x.every((S) => S.x >= w && S.x <= y && S.y >= f && S.y <= g) && T.push(B);
          else {
            if (x.some((S) => S.x >= w && S.x <= y && S.y >= f && S.y <= g)) {
              T.push(B);
              continue;
            }
            if (H.length === 2) {
              const S = x[0], L = x[1];
              r(S.x, S.y, L.x, L.y, w, f, y, g) && T.push(B);
            }
          }
        }
        return T;
      }
      function r(p, i, c, m, E, w, y, f) {
        const g = (A, T) => A >= E && A <= y && T >= w && T <= f;
        if (g(p, i) || g(c, m)) return true;
        const I = (A, T, B, H, x, u, S, L) => {
          const R = (B - A) * (L - u) - (H - T) * (S - x);
          if (Math.abs(R) < 1e-10) return false;
          const W = ((x - A) * (L - u) - (u - T) * (S - x)) / R, h = ((x - A) * (H - T) - (u - T) * (B - A)) / R;
          return W >= 0 && W <= 1 && h >= 0 && h <= 1;
        };
        return I(p, i, c, m, E, w, y, w) || I(p, i, c, m, y, w, y, f) || I(p, i, c, m, E, f, y, f) || I(p, i, c, m, E, w, E, f);
      }
      o.addEventListener("mousedown", (p) => {
        Yt && (n = {
          x: p.offsetX,
          y: p.offsetY
        });
      }), o.addEventListener("mousemove", (p) => {
        if (po) {
          const c = Ze();
          if (!c) return;
          const m = Cs(p.clientX, p.clientY, c.camera, c.rendererElm);
          if (wt.track && m.snapType === "node" && m.nodeIdx !== null && m.nodeIdx !== To && ka(m.nodeIdx), wt.track && To !== null && m.worldPos && m.snapType !== "node") {
            const E = Ta(m.worldPos, To);
            E && (m.worldPos = E, m.snapType = "grid");
          }
          if (To !== null && m.worldPos) {
            const E = e.nodes.val[To];
            E && Ls(p.clientX, p.clientY, new Ne(...E), m.worldPos);
          } else if (vt !== null && m.worldPos) {
            const E = e.nodes.val[vt];
            E && Ls(p.clientX, p.clientY, new Ne(...E), m.worldPos);
          } else Qt && (Qt.remove(), Qt = null);
          m.nodeIdx, Fs(m), o.style.cursor = m.snapType !== "free" ? "pointer" : "crosshair";
          return;
        }
        if (!oo && !Yt) return;
        if (Yt && n) {
          const c = p.offsetX - n.x, m = p.offsetY - n.y;
          if (Math.abs(c) > a || Math.abs(m) > a) {
            l || (l = document.createElement("div"), l.style.cssText = "position:absolute;pointer-events:none;z-index:9999;", o.parentElement.style.position = "relative", o.parentElement.appendChild(l));
            const E = c > 0, w = Math.min(n.x, p.offsetX), y = Math.min(n.y, p.offsetY), f = Math.abs(c), g = Math.abs(m);
            l.style.left = w + "px", l.style.top = y + "px", l.style.width = f + "px", l.style.height = g + "px", l.style.border = E ? "2px solid #3399ff" : "2px dashed #33ff33", l.style.background = E ? "rgba(51,153,255,0.1)" : "rgba(51,255,51,0.1)", o.style.cursor = "crosshair";
            return;
          }
        }
        const i = Wn(p);
        if (i >= 0) Ps(i), o.style.cursor = "pointer";
        else {
          if (Jt) {
            const c = Ze();
            c == null ? void 0 : c.scene.remove(Jt), Jt = null, c == null ? void 0 : c.render();
          }
          o.style.cursor = Yt ? "crosshair" : "";
        }
      }), o.addEventListener("mouseup", (p) => {
        if (Yt && n) {
          const i = p.offsetX - n.x, c = p.offsetY - n.y;
          if (Math.abs(i) > a || Math.abs(c) > a) {
            const m = i > 0, E = s(n.x, n.y, p.offsetX, p.offsetY, m);
            p.ctrlKey || p.metaKey || (gt.clear(), Mo()), E.forEach((y) => {
              gt.has(y) || (gt.add(y), Dn(y));
            }), wo();
          }
          l && (l.remove(), l = null), n = null, o.style.cursor = "crosshair";
          return;
        }
        n = null;
      }), o.addEventListener("click", (p) => {
        if (po) {
          const i = Ze();
          if (!i) return;
          const c = Cs(p.clientX, p.clientY, i.camera, i.rendererElm);
          (c.worldPos || c.nodeIdx !== null) && (za(c), Fs(c));
          return;
        }
        if (Yt) {
          if (l) return;
          const i = Wn(p), c = p.ctrlKey || p.metaKey;
          if (i >= 0) {
            if (c) if (gt.has(i)) {
              gt.delete(i);
              const m = $o.findIndex((E) => E.__elemIdx === i);
              if (m >= 0) {
                const E = Ze();
                E == null ? void 0 : E.scene.remove($o[m]), $o[m].geometry.dispose(), $o[m].material.dispose(), $o.splice(m, 1), E == null ? void 0 : E.render();
              }
            } else gt.add(i), Dn(i);
            else gt.clear(), Mo(), gt.add(i), Dn(i);
            wo();
          } else c || (gt.clear(), Mo(), wo());
          return;
        }
        if (oo) {
          const i = Wn(p);
          i >= 0 && (Ps(i), Wa(i));
        }
      });
    }, 500), Jo.derive(() => {
      var _a2;
      e.nodes.val, e.elements.val, (_a2 = e.nodeInputs) == null ? void 0 : _a2.val, Qe();
    }), Ke.modal = (t) => {
      var _a2, _b;
      if (t === void 0 && (t = !qe), qe = t, (_a2 = ze.querySelector("#cad3d-modal")) == null ? void 0 : _a2.classList.toggle("active", qe), qe) {
        const n = Ze();
        ((_b = n == null ? void 0 : n.settings) == null ? void 0 : _b.loads) && (_e = n.settings.loads.rawVal, n.settings.loads.val = false), Ln(), ze.querySelector("#cad3d-mode-prev").style.display = "", ze.querySelector("#cad3d-mode-next").style.display = "", ze.querySelector("#cad3d-mode-label").style.display = "";
      } else Cn(), ze.querySelector("#cad3d-mode-prev").style.display = "none", ze.querySelector("#cad3d-mode-next").style.display = "none", ze.querySelector("#cad3d-mode-label").style.display = "none", k && k !== "placa-q4" && k !== "placa-3q" && Re(), setTimeout(() => {
        var _a3;
        const n = Ze();
        ((_a3 = n == null ? void 0 : n.settings) == null ? void 0 : _a3.loads) && _e && (n.settings.loads.val = true);
      }, 600);
      console.log(`Modal analysis: ${qe ? "ON" : "OFF"}`);
    }, Ke.setMode = (t) => {
      var _a2;
      if (!(Ce == null ? void 0 : Ce.modeShapes)) {
        console.error("No modal results");
        return;
      }
      xe = Math.max(0, Math.min(t, Ce.modeShapes.length - 1));
      const o = Ce.modeShapes[xe], { extent: n } = vo();
      let l = 0;
      for (let d = 0; d < ke.length; d++) {
        const s = o[d * 6] || 0, r = o[d * 6 + 1] || 0, p = o[d * 6 + 2] || 0;
        l = Math.max(l, Math.sqrt(s * s + r * r + p * p));
      }
      Ge = l > 1e-12 ? n * 0.05 / l : 1, Qo();
      const a = ze.querySelector("#cad3d-mode-label");
      a && Ce.frequencies && (a.textContent = `Modo ${xe + 1} \u2014 ${Ce.frequencies[xe].toFixed(2)} Hz`), console.log(`Modo ${xe + 1}: f = ${(_a2 = Ce.frequencies) == null ? void 0 : _a2[xe].toFixed(4)} Hz`);
    }, window.cad = Ke, console.log("FEM Studio CLI ready. Type cad.help() for commands."), setTimeout(() => {
      document.body.appendChild(ze), document.body.appendChild(it.div);
    }, 0), setTimeout(() => {
      e.nodes.val.length === 0 && (tt("edificio"), Re(), ks("edificio"), setTimeout(() => {
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
    }), document.body.appendChild(uo), document.body.appendChild(Sl());
    const Gs = document.createElement("span");
    return Gs.style.display = "none", Gs;
  };
});
export {
  __tla,
  la as a,
  fl as c,
  er as g
};
