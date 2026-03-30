var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
let We, ot, st, it, ct, lt;
let __tla = (async () => {
  let tt, nt, mr;
  tt = "modulepreload";
  nt = function(f, v) {
    return new URL(f, v).href;
  };
  mr = {};
  ot = function(v, l, _) {
    let y = Promise.resolve();
    if (l && l.length > 0) {
      const j = document.getElementsByTagName("link"), D = document.querySelector("meta[property=csp-nonce]"), re = (D == null ? void 0 : D.nonce) || (D == null ? void 0 : D.getAttribute("nonce"));
      y = Promise.allSettled(l.map((I) => {
        if (I = nt(I, _), I in mr) return;
        mr[I] = true;
        const G = I.endsWith(".css"), ie = G ? '[rel="stylesheet"]' : "";
        if (!!_) for (let x = j.length - 1; x >= 0; x--) {
          const L = j[x];
          if (L.href === I && (!G || L.rel === "stylesheet")) return;
        }
        else if (document.querySelector(`link[href="${I}"]${ie}`)) return;
        const C = document.createElement("link");
        if (C.rel = G ? "stylesheet" : tt, G || (C.as = "script"), C.crossOrigin = "", C.href = I, re && C.setAttribute("nonce", re), document.head.appendChild(C), G) return new Promise((x, L) => {
          C.addEventListener("load", x), C.addEventListener("error", () => L(new Error(`Unable to preload CSS for ${I}`)));
        });
      }));
    }
    function w(j) {
      const D = new Event("vite:preloadError", {
        cancelable: true
      });
      if (D.payload = j, window.dispatchEvent(D), !D.defaultPrevented) throw j;
    }
    return y.then((j) => {
      for (const D of j || []) D.status === "rejected" && w(D.reason);
      return v().catch(w);
    });
  };
  We = async function(f = {}) {
    var _a, _b, _c, _d, _e2, _f;
    var v;
    (function() {
      var _a2;
      function e(u) {
        u = u.split("-")[0];
        for (var m = u.split(".").slice(0, 3); m.length < 3; ) m.push("00");
        return m = m.map((k, A, h) => k.padStart(2, "0")), m.join("");
      }
      var r = (u) => [
        u / 1e4 | 0,
        (u / 100 | 0) % 100,
        u % 100
      ].join("."), t = 2147483647, o = typeof process < "u" && ((_a2 = process.versions) == null ? void 0 : _a2.node) ? e(process.versions.node) : t;
      if (o < 16e4) throw new Error(`This emscripten-generated code requires node v${r(16e4)} (detected v${r(o)})`);
      var a = typeof navigator < "u" && navigator.userAgent;
      if (a) {
        var s = a.includes("Safari/") && !a.includes("Chrome/") && a.match(/Version\/(\d+\.?\d*\.?\d*)/) ? e(a.match(/Version\/(\d+\.?\d*\.?\d*)/)[1]) : t;
        if (s < 15e4) throw new Error(`This emscripten-generated code requires Safari v${r(15e4)} (detected v${s})`);
        var i = a.match(/Firefox\/(\d+(?:\.\d+)?)/) ? parseFloat(a.match(/Firefox\/(\d+(?:\.\d+)?)/)[1]) : t;
        if (i < 79) throw new Error(`This emscripten-generated code requires Firefox v79 (detected v${i})`);
        var c = a.match(/Chrome\/(\d+(?:\.\d+)?)/) ? parseFloat(a.match(/Chrome\/(\d+(?:\.\d+)?)/)[1]) : t;
        if (c < 85) throw new Error(`This emscripten-generated code requires Chrome v85 (detected v${c})`);
      }
    })();
    var l = f, _ = !!globalThis.window, y = !!globalThis.WorkerGlobalScope, w = ((_b = (_a = globalThis.process) == null ? void 0 : _a.versions) == null ? void 0 : _b.node) && ((_c = globalThis.process) == null ? void 0 : _c.type) != "renderer", j = !_ && !w && !y;
    if (w) {
      const { createRequire: e } = await ot(() => import("./__vite-browser-external-D7Ct-6yo.js").then((r) => r._), [], import.meta.url);
      var D = e(import.meta.url);
    }
    var re = "./this.program", I = import.meta.url, G = "";
    function ie(e) {
      return l.locateFile ? l.locateFile(e, G) : G + e;
    }
    var q, C;
    if (w) {
      if (!(((_e2 = (_d = globalThis.process) == null ? void 0 : _d.versions) == null ? void 0 : _e2.node) && ((_f = globalThis.process) == null ? void 0 : _f.type) != "renderer")) throw new Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)");
      var x = D("node:fs");
      I.startsWith("file:") && (G = D("node:path").dirname(D("node:url").fileURLToPath(I)) + "/"), C = (r) => {
        r = X(r) ? new URL(r) : r;
        var t = x.readFileSync(r);
        return d(Buffer.isBuffer(t)), t;
      }, q = async (r, t = true) => {
        r = X(r) ? new URL(r) : r;
        var o = x.readFileSync(r, t ? void 0 : "utf8");
        return d(t ? Buffer.isBuffer(o) : typeof o == "string"), o;
      }, process.argv.length > 1 && (re = process.argv[1].replace(/\\/g, "/")), process.argv.slice(2);
    } else if (!j) if (_ || y) {
      try {
        G = new URL(".", I).href;
      } catch {
      }
      if (!(globalThis.window || globalThis.WorkerGlobalScope)) throw new Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)");
      y && (C = (e) => {
        var r = new XMLHttpRequest();
        return r.open("GET", e, false), r.responseType = "arraybuffer", r.send(null), new Uint8Array(r.response);
      }), q = async (e) => {
        if (X(e)) return new Promise((t, o) => {
          var a = new XMLHttpRequest();
          a.open("GET", e, true), a.responseType = "arraybuffer", a.onload = () => {
            if (a.status == 200 || a.status == 0 && a.response) {
              t(a.response);
              return;
            }
            o(a.status);
          }, a.onerror = o, a.send(null);
        });
        var r = await fetch(e, {
          credentials: "same-origin"
        });
        if (r.ok) return r.arrayBuffer();
        throw new Error(r.status + " : " + r.url);
      };
    } else throw new Error("environment detection error");
    var L = console.log.bind(console), T = console.error.bind(console);
    d(!j, "shell environment detected but not enabled at build time.  Add `shell` to `-sENVIRONMENT` to enable.");
    var te;
    globalThis.WebAssembly || T("no native wasm support detected");
    var z = false;
    function d(e, r) {
      e || E("Assertion failed" + (r ? ": " + r : ""));
    }
    var X = (e) => e.startsWith("file://");
    function ne() {
      var e = Xe();
      d((e & 3) == 0), e == 0 && (e += 4), p[e >> 2] = 34821223, p[e + 4 >> 2] = 2310721022, p[0] = 1668509029;
    }
    function Q() {
      if (!z) {
        var e = Xe();
        e == 0 && (e += 4);
        var r = p[e >> 2], t = p[e + 4 >> 2];
        (r != 34821223 || t != 2310721022) && E(`Stack overflow! Stack cookie has been overwritten at ${De(e)}, expected hex dwords 0x89BACDFE and 0x2135467, but received ${De(t)} ${De(r)}`), p[0] != 1668509029 && E("Runtime error: The application has corrupted its heap memory area (address zero)!");
      }
    }
    (() => {
      var e = new Int16Array(1), r = new Int8Array(e.buffer);
      e[0] = 25459, (r[0] !== 115 || r[1] !== 99) && E("Runtime error: expected the system to be little-endian! (Run with -sSUPPORT_BIG_ENDIAN to bypass)");
    })();
    function oe(e) {
      Object.getOwnPropertyDescriptor(l, e) || Object.defineProperty(l, e, {
        configurable: true,
        set() {
          E(`Attempt to set \`Module.${e}\` after it has already been processed.  This can happen, for example, when code is injected via '--post-js' rather than '--pre-js'`);
        }
      });
    }
    function P(e) {
      return () => d(false, `call to '${e}' via reference taken before Wasm module initialization`);
    }
    function Z(e) {
      Object.getOwnPropertyDescriptor(l, e) && E(`\`Module.${e}\` was supplied but \`${e}\` not included in INCOMING_MODULE_JS_API`);
    }
    function N(e) {
      return e === "FS_createPath" || e === "FS_createDataFile" || e === "FS_createPreloadedFile" || e === "FS_preloadFile" || e === "FS_unlink" || e === "addRunDependency" || e === "FS_createLazyFile" || e === "FS_createDevice" || e === "removeRunDependency";
    }
    function ue(e) {
      le(e);
    }
    function le(e) {
      Object.getOwnPropertyDescriptor(l, e) || Object.defineProperty(l, e, {
        configurable: true,
        get() {
          var r = `'${e}' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the Emscripten FAQ)`;
          N(e) && (r += ". Alternatively, forcing filesystem support (-sFORCE_FILESYSTEM) can export this for you"), E(r);
        }
      });
    }
    var pe, ce, V, Y, fe, p, U, se = false;
    function J() {
      var e = Ge.buffer;
      V = new Int8Array(e), l.HEAPU8 = Y = new Uint8Array(e), fe = new Int32Array(e), l.HEAPU32 = p = new Uint32Array(e), l.HEAPF64 = new Float64Array(e), U = new BigInt64Array(e), new BigUint64Array(e);
    }
    d(globalThis.Int32Array && globalThis.Float64Array && Int32Array.prototype.subarray && Int32Array.prototype.set, "JS engine does not provide full typed array support");
    function ve() {
      if (l.preRun) for (typeof l.preRun == "function" && (l.preRun = [
        l.preRun
      ]); l.preRun.length; ) _r(l.preRun.shift());
      oe("preRun"), Je(er);
    }
    function _e() {
      d(!se), se = true, Q(), !l.noFSInit && !n.initialized && n.init(), Ne.__wasm_call_ctors(), n.ignorePermissions = false;
    }
    function b() {
      if (Q(), l.postRun) for (typeof l.postRun == "function" && (l.postRun = [
        l.postRun
      ]); l.postRun.length; ) vr(l.postRun.shift());
      oe("postRun"), Je(Ze);
    }
    function E(e) {
      var _a2;
      (_a2 = l.onAbort) == null ? void 0 : _a2.call(l, e), e = "Aborted(" + e + ")", T(e), z = true;
      var r = new WebAssembly.RuntimeError(e);
      throw ce == null ? void 0 : ce(r), r;
    }
    function F(e, r) {
      return (...t) => {
        d(se, `native function \`${e}\` called before runtime initialization`);
        var o = Ne[e];
        return d(o, `exported native function \`${e}\` not found`), d(t.length <= r, `native function \`${e}\` called with ${t.length} args but expects ${r}`), o(...t);
      };
    }
    var B;
    function we() {
      return l.locateFile ? ie("deform.wasm") : new URL("" + new URL("deform-Blaj5iUA.wasm", import.meta.url).href, import.meta.url).href;
    }
    function R(e) {
      if (e == B && te) return new Uint8Array(te);
      if (C) return C(e);
      throw "both async and sync fetching of the wasm failed";
    }
    async function H(e) {
      if (!te) try {
        var r = await q(e);
        return new Uint8Array(r);
      } catch {
      }
      return R(e);
    }
    async function K(e, r) {
      try {
        var t = await H(e), o = await WebAssembly.instantiate(t, r);
        return o;
      } catch (a) {
        T(`failed to asynchronously prepare wasm: ${a}`), X(e) && T(`warning: Loading from a file URI (${e}) is not supported in most browsers. See https://emscripten.org/docs/getting_started/FAQ.html#how-do-i-run-a-local-webserver-for-testing-why-does-my-program-stall-in-downloading-or-preparing`), E(a);
      }
    }
    async function Oe(e, r, t) {
      if (!e && !X(r) && !w) try {
        var o = fetch(r, {
          credentials: "same-origin"
        }), a = await WebAssembly.instantiateStreaming(o, t);
        return a;
      } catch (s) {
        T(`wasm streaming compile failed: ${s}`), T("falling back to ArrayBuffer instantiation");
      }
      return K(r, t);
    }
    function $e() {
      var e = {
        env: ur,
        wasi_snapshot_preview1: ur
      };
      return e;
    }
    async function pr() {
      function e(i, c) {
        return Ne = i.exports, et(Ne), J(), Ne;
      }
      var r = l;
      function t(i) {
        return d(l === r, "the Module object should not be replaced during async compilation - perhaps the order of HTML elements is wrong?"), r = null, e(i.instance);
      }
      var o = $e();
      if (l.instantiateWasm) return new Promise((i, c) => {
        try {
          l.instantiateWasm(o, (u, m) => {
            i(e(u, m));
          });
        } catch (u) {
          T(`Module.instantiateWasm callback failed with error: ${u}`), c(u);
        }
      });
      B ?? (B = we());
      var a = await Oe(te, B, o), s = t(a);
      return s;
    }
    var Je = (e) => {
      for (; e.length > 0; ) e.shift()(l);
    }, Ze = [], vr = (e) => Ze.push(e), er = [], _r = (e) => er.push(e), De = (e) => (d(typeof e == "number", `ptrToString expects a number, got ${typeof e}`), e >>>= 0, "0x" + e.toString(16).padStart(8, "0")), Ce = (e) => {
      Ce.shown || (Ce.shown = {}), Ce.shown[e] || (Ce.shown[e] = 1, w && (e = "warning: " + e), T(e));
    }, rr = globalThis.TextDecoder && new TextDecoder(), Er = (e, r, t, o) => {
      for (var a = r + t; e[r] && !(r >= a); ) ++r;
      return r;
    }, Ae = (e, r = 0, t, o) => {
      var a = Er(e, r, t);
      if (a - r > 16 && e.buffer && rr) return rr.decode(e.subarray(r, a));
      for (var s = ""; r < a; ) {
        var i = e[r++];
        if (!(i & 128)) {
          s += String.fromCharCode(i);
          continue;
        }
        var c = e[r++] & 63;
        if ((i & 224) == 192) {
          s += String.fromCharCode((i & 31) << 6 | c);
          continue;
        }
        var u = e[r++] & 63;
        if ((i & 240) == 224 ? i = (i & 15) << 12 | c << 6 | u : ((i & 248) != 240 && Ce("Invalid UTF-8 leading byte " + De(i) + " encountered when deserializing a UTF-8 string in wasm memory to a JS string!"), i = (i & 7) << 18 | c << 12 | u << 6 | e[r++] & 63), i < 65536) s += String.fromCharCode(i);
        else {
          var m = i - 65536;
          s += String.fromCharCode(55296 | m >> 10, 56320 | m & 1023);
        }
      }
      return s;
    }, Le = (e, r, t) => (d(typeof e == "number", `UTF8ToString expects a number (got ${typeof e})`), e ? Ae(Y, e, r) : ""), yr = (e, r, t, o) => E(`Assertion failed: ${Le(e)}, at: ` + [
      r ? Le(r) : "unknown filename",
      t,
      o ? Le(o) : "unknown function"
    ]);
    class gr {
      constructor(r) {
        this.excPtr = r, this.ptr = r - 24;
      }
      set_type(r) {
        p[this.ptr + 4 >> 2] = r;
      }
      get_type() {
        return p[this.ptr + 4 >> 2];
      }
      set_destructor(r) {
        p[this.ptr + 8 >> 2] = r;
      }
      get_destructor() {
        return p[this.ptr + 8 >> 2];
      }
      set_caught(r) {
        r = r ? 1 : 0, V[this.ptr + 12] = r;
      }
      get_caught() {
        return V[this.ptr + 12] != 0;
      }
      set_rethrown(r) {
        r = r ? 1 : 0, V[this.ptr + 13] = r;
      }
      get_rethrown() {
        return V[this.ptr + 13] != 0;
      }
      init(r, t) {
        this.set_adjusted_ptr(0), this.set_type(r), this.set_destructor(t);
      }
      set_adjusted_ptr(r) {
        p[this.ptr + 16 >> 2] = r;
      }
      get_adjusted_ptr() {
        return p[this.ptr + 16 >> 2];
      }
    }
    var wr = (e, r, t) => {
      var o = new gr(e);
      o.init(r, t), d(false, "Exception thrown, but exception catching is not enabled. Compile with -sNO_DISABLE_EXCEPTION_CATCHING or -sEXCEPTION_CATCHING_ALLOWED=[..] to catch.");
    }, Sr = () => E("native code called abort()"), tr = (e, r, t, o) => {
      if (d(typeof e == "string", `stringToUTF8Array expects a string (got ${typeof e})`), !(o > 0)) return 0;
      for (var a = t, s = t + o - 1, i = 0; i < e.length; ++i) {
        var c = e.codePointAt(i);
        if (c <= 127) {
          if (t >= s) break;
          r[t++] = c;
        } else if (c <= 2047) {
          if (t + 1 >= s) break;
          r[t++] = 192 | c >> 6, r[t++] = 128 | c & 63;
        } else if (c <= 65535) {
          if (t + 2 >= s) break;
          r[t++] = 224 | c >> 12, r[t++] = 128 | c >> 6 & 63, r[t++] = 128 | c & 63;
        } else {
          if (t + 3 >= s) break;
          c > 1114111 && Ce("Invalid Unicode code point " + De(c) + " encountered when serializing a JS string to a UTF-8 string in wasm memory! (Valid unicode code points should be in range 0-0x10FFFF)."), r[t++] = 240 | c >> 18, r[t++] = 128 | c >> 12 & 63, r[t++] = 128 | c >> 6 & 63, r[t++] = 128 | c & 63, i++;
        }
      }
      return r[t] = 0, t - a;
    }, Ie = (e, r, t) => (d(typeof t == "number", "stringToUTF8(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!"), tr(e, Y, r, t)), je = (e) => {
      for (var r = 0, t = 0; t < e.length; ++t) {
        var o = e.charCodeAt(t);
        o <= 127 ? r++ : o <= 2047 ? r += 2 : o >= 55296 && o <= 57343 ? (r += 4, ++t) : r += 3;
      }
      return r;
    }, Fr = (e, r, t, o) => {
      var a = (/* @__PURE__ */ new Date()).getFullYear(), s = new Date(a, 0, 1), i = new Date(a, 6, 1), c = s.getTimezoneOffset(), u = i.getTimezoneOffset(), m = Math.max(c, u);
      p[e >> 2] = m * 60, fe[r >> 2] = +(c != u);
      var k = (S) => {
        var W = S >= 0 ? "-" : "+", me = Math.abs(S), he = String(Math.floor(me / 60)).padStart(2, "0"), de = String(me % 60).padStart(2, "0");
        return `UTC${W}${he}${de}`;
      }, A = k(c), h = k(u);
      d(A), d(h), d(je(A) <= 16, `timezone name truncated to fit in TZNAME_MAX (${A})`), d(je(h) <= 16, `timezone name truncated to fit in TZNAME_MAX (${h})`), u < c ? (Ie(A, t, 17), Ie(h, o, 17)) : (Ie(A, o, 17), Ie(h, t, 17));
    }, kr = () => 2147483648, Pr = (e, r) => (d(r, "alignment argument is required"), Math.ceil(e / r) * r), br = (e) => {
      var r = Ge.buffer.byteLength, t = (e - r + 65535) / 65536 | 0;
      try {
        return Ge.grow(t), J(), 1;
      } catch (o) {
        T(`growMemory: Attempted to grow heap from ${r} bytes to ${e} bytes, but got error: ${o}`);
      }
    }, Ar = (e) => {
      var r = Y.length;
      e >>>= 0, d(e > r);
      var t = kr();
      if (e > t) return T(`Cannot enlarge memory, requested ${e} bytes, but the limit is ${t} bytes!`), false;
      for (var o = 1; o <= 4; o *= 2) {
        var a = r * (1 + 0.2 / o);
        a = Math.min(a, e + 100663296);
        var s = Math.min(t, Pr(Math.max(e, a), 65536)), i = br(s);
        if (i) return true;
      }
      return T(`Failed to grow the heap from ${r} bytes to ${s} bytes, not enough memory!`), false;
    }, Ve = {}, Tr = () => re || "./this.program", Ue = () => {
      var _a2;
      if (!Ue.strings) {
        var e = (((_a2 = globalThis.navigator) == null ? void 0 : _a2.language) ?? "C").replace("-", "_") + ".UTF-8", r = {
          USER: "web_user",
          LOGNAME: "web_user",
          PATH: "/",
          PWD: "/",
          HOME: "/home/web_user",
          LANG: e,
          _: Tr()
        };
        for (var t in Ve) Ve[t] === void 0 ? delete r[t] : r[t] = Ve[t];
        var o = [];
        for (var t in r) o.push(`${t}=${r[t]}`);
        Ue.strings = o;
      }
      return Ue.strings;
    }, Mr = (e, r) => {
      var t = 0, o = 0;
      for (var a of Ue()) {
        var s = r + t;
        p[e + o >> 2] = s, t += Ie(a, s, 1 / 0) + 1, o += 4;
      }
      return 0;
    }, Nr = (e, r) => {
      var t = Ue();
      p[e >> 2] = t.length;
      var o = 0;
      for (var a of t) o += je(a) + 1;
      return p[r >> 2] = o, 0;
    }, O = {
      isAbs: (e) => e.charAt(0) === "/",
      splitPath: (e) => {
        var r = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
        return r.exec(e).slice(1);
      },
      normalizeArray: (e, r) => {
        for (var t = 0, o = e.length - 1; o >= 0; o--) {
          var a = e[o];
          a === "." ? e.splice(o, 1) : a === ".." ? (e.splice(o, 1), t++) : t && (e.splice(o, 1), t--);
        }
        if (r) for (; t; t--) e.unshift("..");
        return e;
      },
      normalize: (e) => {
        var r = O.isAbs(e), t = e.slice(-1) === "/";
        return e = O.normalizeArray(e.split("/").filter((o) => !!o), !r).join("/"), !e && !r && (e = "."), e && t && (e += "/"), (r ? "/" : "") + e;
      },
      dirname: (e) => {
        var r = O.splitPath(e), t = r[0], o = r[1];
        return !t && !o ? "." : (o && (o = o.slice(0, -1)), t + o);
      },
      basename: (e) => e && e.match(/([^\/]+|\/)\/*$/)[1],
      join: (...e) => O.normalize(e.join("/")),
      join2: (e, r) => O.normalize(e + "/" + r)
    }, Rr = () => {
      if (w) {
        var e = D("node:crypto");
        return (r) => e.randomFillSync(r);
      }
      return (r) => crypto.getRandomValues(r);
    }, nr = (e) => {
      (nr = Rr())(e);
    }, Te = {
      resolve: (...e) => {
        for (var r = "", t = false, o = e.length - 1; o >= -1 && !t; o--) {
          var a = o >= 0 ? e[o] : n.cwd();
          if (typeof a != "string") throw new TypeError("Arguments to path.resolve must be strings");
          if (!a) return "";
          r = a + "/" + r, t = O.isAbs(a);
        }
        return r = O.normalizeArray(r.split("/").filter((s) => !!s), !t).join("/"), (t ? "/" : "") + r || ".";
      },
      relative: (e, r) => {
        e = Te.resolve(e).slice(1), r = Te.resolve(r).slice(1);
        function t(m) {
          for (var k = 0; k < m.length && m[k] === ""; k++) ;
          for (var A = m.length - 1; A >= 0 && m[A] === ""; A--) ;
          return k > A ? [] : m.slice(k, A - k + 1);
        }
        for (var o = t(e.split("/")), a = t(r.split("/")), s = Math.min(o.length, a.length), i = s, c = 0; c < s; c++) if (o[c] !== a[c]) {
          i = c;
          break;
        }
        for (var u = [], c = i; c < o.length; c++) u.push("..");
        return u = u.concat(a.slice(i)), u.join("/");
      }
    }, qe = [], Ye = (e, r, t) => {
      var o = je(e) + 1, a = new Array(o), s = tr(e, a, 0, a.length);
      return a.length = s, a;
    }, Or = () => {
      var _a2;
      if (!qe.length) {
        var e = null;
        if (w) {
          var r = 256, t = Buffer.alloc(r), o = 0, a = process.stdin.fd;
          try {
            o = x.readSync(a, t, 0, r);
          } catch (s) {
            if (s.toString().includes("EOF")) o = 0;
            else throw s;
          }
          o > 0 && (e = t.slice(0, o).toString("utf-8"));
        } else ((_a2 = globalThis.window) == null ? void 0 : _a2.prompt) && (e = window.prompt("Input: "), e !== null && (e += `
`));
        if (!e) return null;
        qe = Ye(e);
      }
      return qe.shift();
    }, ke = {
      ttys: [],
      init() {
      },
      shutdown() {
      },
      register(e, r) {
        ke.ttys[e] = {
          input: [],
          output: [],
          ops: r
        }, n.registerDevice(e, ke.stream_ops);
      },
      stream_ops: {
        open(e) {
          var r = ke.ttys[e.node.rdev];
          if (!r) throw new n.ErrnoError(43);
          e.tty = r, e.seekable = false;
        },
        close(e) {
          e.tty.ops.fsync(e.tty);
        },
        fsync(e) {
          e.tty.ops.fsync(e.tty);
        },
        read(e, r, t, o, a) {
          if (!e.tty || !e.tty.ops.get_char) throw new n.ErrnoError(60);
          for (var s = 0, i = 0; i < o; i++) {
            var c;
            try {
              c = e.tty.ops.get_char(e.tty);
            } catch {
              throw new n.ErrnoError(29);
            }
            if (c === void 0 && s === 0) throw new n.ErrnoError(6);
            if (c == null) break;
            s++, r[t + i] = c;
          }
          return s && (e.node.atime = Date.now()), s;
        },
        write(e, r, t, o, a) {
          if (!e.tty || !e.tty.ops.put_char) throw new n.ErrnoError(60);
          try {
            for (var s = 0; s < o; s++) e.tty.ops.put_char(e.tty, r[t + s]);
          } catch {
            throw new n.ErrnoError(29);
          }
          return o && (e.node.mtime = e.node.ctime = Date.now()), s;
        }
      },
      default_tty_ops: {
        get_char(e) {
          return Or();
        },
        put_char(e, r) {
          r === null || r === 10 ? (L(Ae(e.output)), e.output = []) : r != 0 && e.output.push(r);
        },
        fsync(e) {
          var _a2;
          ((_a2 = e.output) == null ? void 0 : _a2.length) > 0 && (L(Ae(e.output)), e.output = []);
        },
        ioctl_tcgets(e) {
          return {
            c_iflag: 25856,
            c_oflag: 5,
            c_cflag: 191,
            c_lflag: 35387,
            c_cc: [
              3,
              28,
              127,
              21,
              4,
              0,
              1,
              0,
              17,
              19,
              26,
              0,
              18,
              15,
              23,
              22,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0
            ]
          };
        },
        ioctl_tcsets(e, r, t) {
          return 0;
        },
        ioctl_tiocgwinsz(e) {
          return [
            24,
            80
          ];
        }
      },
      default_tty1_ops: {
        put_char(e, r) {
          r === null || r === 10 ? (T(Ae(e.output)), e.output = []) : r != 0 && e.output.push(r);
        },
        fsync(e) {
          var _a2;
          ((_a2 = e.output) == null ? void 0 : _a2.length) > 0 && (T(Ae(e.output)), e.output = []);
        }
      }
    }, or = (e) => {
      E("internal error: mmapAlloc called but `emscripten_builtin_memalign` native symbol not exported");
    }, g = {
      ops_table: null,
      mount(e) {
        return g.createNode(null, "/", 16895, 0);
      },
      createNode(e, r, t, o) {
        if (n.isBlkdev(t) || n.isFIFO(t)) throw new n.ErrnoError(63);
        g.ops_table || (g.ops_table = {
          dir: {
            node: {
              getattr: g.node_ops.getattr,
              setattr: g.node_ops.setattr,
              lookup: g.node_ops.lookup,
              mknod: g.node_ops.mknod,
              rename: g.node_ops.rename,
              unlink: g.node_ops.unlink,
              rmdir: g.node_ops.rmdir,
              readdir: g.node_ops.readdir,
              symlink: g.node_ops.symlink
            },
            stream: {
              llseek: g.stream_ops.llseek
            }
          },
          file: {
            node: {
              getattr: g.node_ops.getattr,
              setattr: g.node_ops.setattr
            },
            stream: {
              llseek: g.stream_ops.llseek,
              read: g.stream_ops.read,
              write: g.stream_ops.write,
              mmap: g.stream_ops.mmap,
              msync: g.stream_ops.msync
            }
          },
          link: {
            node: {
              getattr: g.node_ops.getattr,
              setattr: g.node_ops.setattr,
              readlink: g.node_ops.readlink
            },
            stream: {}
          },
          chrdev: {
            node: {
              getattr: g.node_ops.getattr,
              setattr: g.node_ops.setattr
            },
            stream: n.chrdev_stream_ops
          }
        });
        var a = n.createNode(e, r, t, o);
        return n.isDir(a.mode) ? (a.node_ops = g.ops_table.dir.node, a.stream_ops = g.ops_table.dir.stream, a.contents = {}) : n.isFile(a.mode) ? (a.node_ops = g.ops_table.file.node, a.stream_ops = g.ops_table.file.stream, a.usedBytes = 0, a.contents = null) : n.isLink(a.mode) ? (a.node_ops = g.ops_table.link.node, a.stream_ops = g.ops_table.link.stream) : n.isChrdev(a.mode) && (a.node_ops = g.ops_table.chrdev.node, a.stream_ops = g.ops_table.chrdev.stream), a.atime = a.mtime = a.ctime = Date.now(), e && (e.contents[r] = a, e.atime = e.mtime = e.ctime = a.atime), a;
      },
      getFileDataAsTypedArray(e) {
        return e.contents ? e.contents.subarray ? e.contents.subarray(0, e.usedBytes) : new Uint8Array(e.contents) : new Uint8Array(0);
      },
      expandFileStorage(e, r) {
        var t = e.contents ? e.contents.length : 0;
        if (!(t >= r)) {
          var o = 1024 * 1024;
          r = Math.max(r, t * (t < o ? 2 : 1.125) >>> 0), t != 0 && (r = Math.max(r, 256));
          var a = e.contents;
          e.contents = new Uint8Array(r), e.usedBytes > 0 && e.contents.set(a.subarray(0, e.usedBytes), 0);
        }
      },
      resizeFileStorage(e, r) {
        if (e.usedBytes != r) if (r == 0) e.contents = null, e.usedBytes = 0;
        else {
          var t = e.contents;
          e.contents = new Uint8Array(r), t && e.contents.set(t.subarray(0, Math.min(r, e.usedBytes))), e.usedBytes = r;
        }
      },
      node_ops: {
        getattr(e) {
          var r = {};
          return r.dev = n.isChrdev(e.mode) ? e.id : 1, r.ino = e.id, r.mode = e.mode, r.nlink = 1, r.uid = 0, r.gid = 0, r.rdev = e.rdev, n.isDir(e.mode) ? r.size = 4096 : n.isFile(e.mode) ? r.size = e.usedBytes : n.isLink(e.mode) ? r.size = e.link.length : r.size = 0, r.atime = new Date(e.atime), r.mtime = new Date(e.mtime), r.ctime = new Date(e.ctime), r.blksize = 4096, r.blocks = Math.ceil(r.size / r.blksize), r;
        },
        setattr(e, r) {
          for (const t of [
            "mode",
            "atime",
            "mtime",
            "ctime"
          ]) r[t] != null && (e[t] = r[t]);
          r.size !== void 0 && g.resizeFileStorage(e, r.size);
        },
        lookup(e, r) {
          throw new n.ErrnoError(44);
        },
        mknod(e, r, t, o) {
          return g.createNode(e, r, t, o);
        },
        rename(e, r, t) {
          var o;
          try {
            o = n.lookupNode(r, t);
          } catch {
          }
          if (o) {
            if (n.isDir(e.mode)) for (var a in o.contents) throw new n.ErrnoError(55);
            n.hashRemoveNode(o);
          }
          delete e.parent.contents[e.name], r.contents[t] = e, e.name = t, r.ctime = r.mtime = e.parent.ctime = e.parent.mtime = Date.now();
        },
        unlink(e, r) {
          delete e.contents[r], e.ctime = e.mtime = Date.now();
        },
        rmdir(e, r) {
          var t = n.lookupNode(e, r);
          for (var o in t.contents) throw new n.ErrnoError(55);
          delete e.contents[r], e.ctime = e.mtime = Date.now();
        },
        readdir(e) {
          return [
            ".",
            "..",
            ...Object.keys(e.contents)
          ];
        },
        symlink(e, r, t) {
          var o = g.createNode(e, r, 41471, 0);
          return o.link = t, o;
        },
        readlink(e) {
          if (!n.isLink(e.mode)) throw new n.ErrnoError(28);
          return e.link;
        }
      },
      stream_ops: {
        read(e, r, t, o, a) {
          var s = e.node.contents;
          if (a >= e.node.usedBytes) return 0;
          var i = Math.min(e.node.usedBytes - a, o);
          if (d(i >= 0), i > 8 && s.subarray) r.set(s.subarray(a, a + i), t);
          else for (var c = 0; c < i; c++) r[t + c] = s[a + c];
          return i;
        },
        write(e, r, t, o, a, s) {
          if (d(!(r instanceof ArrayBuffer)), r.buffer === V.buffer && (s = false), !o) return 0;
          var i = e.node;
          if (i.mtime = i.ctime = Date.now(), r.subarray && (!i.contents || i.contents.subarray)) {
            if (s) return d(a === 0, "canOwn must imply no weird position inside the file"), i.contents = r.subarray(t, t + o), i.usedBytes = o, o;
            if (i.usedBytes === 0 && a === 0) return i.contents = r.slice(t, t + o), i.usedBytes = o, o;
            if (a + o <= i.usedBytes) return i.contents.set(r.subarray(t, t + o), a), o;
          }
          if (g.expandFileStorage(i, a + o), i.contents.subarray && r.subarray) i.contents.set(r.subarray(t, t + o), a);
          else for (var c = 0; c < o; c++) i.contents[a + c] = r[t + c];
          return i.usedBytes = Math.max(i.usedBytes, a + o), o;
        },
        llseek(e, r, t) {
          var o = r;
          if (t === 1 ? o += e.position : t === 2 && n.isFile(e.node.mode) && (o += e.node.usedBytes), o < 0) throw new n.ErrnoError(28);
          return o;
        },
        mmap(e, r, t, o, a) {
          if (!n.isFile(e.node.mode)) throw new n.ErrnoError(43);
          var s, i, c = e.node.contents;
          if (!(a & 2) && c && c.buffer === V.buffer) i = false, s = c.byteOffset;
          else {
            if (i = true, s = or(), !s) throw new n.ErrnoError(48);
            c && ((t > 0 || t + r < c.length) && (c.subarray ? c = c.subarray(t, t + r) : c = Array.prototype.slice.call(c, t, t + r)), V.set(c, s));
          }
          return {
            ptr: s,
            allocated: i
          };
        },
        msync(e, r, t, o, a) {
          return g.stream_ops.write(e, r, 0, o, t, false), 0;
        }
      }
    }, Dr = (e) => {
      var r = {
        r: 0,
        "r+": 2,
        w: 577,
        "w+": 578,
        a: 1089,
        "a+": 1090
      }, t = r[e];
      if (typeof t > "u") throw new Error(`Unknown file open mode: ${e}`);
      return t;
    }, Ke = (e, r) => {
      var t = 0;
      return e && (t |= 365), r && (t |= 146), t;
    }, Cr = (e) => Le(cr(e)), ar = {
      EPERM: 63,
      ENOENT: 44,
      ESRCH: 71,
      EINTR: 27,
      EIO: 29,
      ENXIO: 60,
      E2BIG: 1,
      ENOEXEC: 45,
      EBADF: 8,
      ECHILD: 12,
      EAGAIN: 6,
      EWOULDBLOCK: 6,
      ENOMEM: 48,
      EACCES: 2,
      EFAULT: 21,
      ENOTBLK: 105,
      EBUSY: 10,
      EEXIST: 20,
      EXDEV: 75,
      ENODEV: 43,
      ENOTDIR: 54,
      EISDIR: 31,
      EINVAL: 28,
      ENFILE: 41,
      EMFILE: 33,
      ENOTTY: 59,
      ETXTBSY: 74,
      EFBIG: 22,
      ENOSPC: 51,
      ESPIPE: 70,
      EROFS: 69,
      EMLINK: 34,
      EPIPE: 64,
      EDOM: 18,
      ERANGE: 68,
      ENOMSG: 49,
      EIDRM: 24,
      ECHRNG: 106,
      EL2NSYNC: 156,
      EL3HLT: 107,
      EL3RST: 108,
      ELNRNG: 109,
      EUNATCH: 110,
      ENOCSI: 111,
      EL2HLT: 112,
      EDEADLK: 16,
      ENOLCK: 46,
      EBADE: 113,
      EBADR: 114,
      EXFULL: 115,
      ENOANO: 104,
      EBADRQC: 103,
      EBADSLT: 102,
      EDEADLOCK: 16,
      EBFONT: 101,
      ENOSTR: 100,
      ENODATA: 116,
      ETIME: 117,
      ENOSR: 118,
      ENONET: 119,
      ENOPKG: 120,
      EREMOTE: 121,
      ENOLINK: 47,
      EADV: 122,
      ESRMNT: 123,
      ECOMM: 124,
      EPROTO: 65,
      EMULTIHOP: 36,
      EDOTDOT: 125,
      EBADMSG: 9,
      ENOTUNIQ: 126,
      EBADFD: 127,
      EREMCHG: 128,
      ELIBACC: 129,
      ELIBBAD: 130,
      ELIBSCN: 131,
      ELIBMAX: 132,
      ELIBEXEC: 133,
      ENOSYS: 52,
      ENOTEMPTY: 55,
      ENAMETOOLONG: 37,
      ELOOP: 32,
      EOPNOTSUPP: 138,
      EPFNOSUPPORT: 139,
      ECONNRESET: 15,
      ENOBUFS: 42,
      EAFNOSUPPORT: 5,
      EPROTOTYPE: 67,
      ENOTSOCK: 57,
      ENOPROTOOPT: 50,
      ESHUTDOWN: 140,
      ECONNREFUSED: 14,
      EADDRINUSE: 3,
      ECONNABORTED: 13,
      ENETUNREACH: 40,
      ENETDOWN: 38,
      ETIMEDOUT: 73,
      EHOSTDOWN: 142,
      EHOSTUNREACH: 23,
      EINPROGRESS: 26,
      EALREADY: 7,
      EDESTADDRREQ: 17,
      EMSGSIZE: 35,
      EPROTONOSUPPORT: 66,
      ESOCKTNOSUPPORT: 137,
      EADDRNOTAVAIL: 4,
      ENETRESET: 39,
      EISCONN: 30,
      ENOTCONN: 53,
      ETOOMANYREFS: 141,
      EUSERS: 136,
      EDQUOT: 19,
      ESTALE: 72,
      ENOTSUP: 138,
      ENOMEDIUM: 148,
      EILSEQ: 25,
      EOVERFLOW: 61,
      ECANCELED: 11,
      ENOTRECOVERABLE: 56,
      EOWNERDEAD: 62,
      ESTRPIPE: 135
    }, Lr = async (e) => {
      var r = await q(e);
      return d(r, `Loading data file "${e}" failed (no arrayBuffer).`), new Uint8Array(r);
    }, Ir = (...e) => n.createDataFile(...e), Ur = (e) => {
      for (var r = e; ; ) {
        if (!Me[e]) return e;
        e = r + Math.random();
      }
    }, Pe = 0, Be = null, Me = {}, Fe = null, Br = (e) => {
      var _a2;
      if (Pe--, (_a2 = l.monitorRunDependencies) == null ? void 0 : _a2.call(l, Pe), d(e, "removeRunDependency requires an ID"), d(Me[e]), delete Me[e], Pe == 0 && (Fe !== null && (clearInterval(Fe), Fe = null), Be)) {
        var r = Be;
        Be = null, r();
      }
    }, xr = (e) => {
      var _a2, _b2;
      Pe++, (_a2 = l.monitorRunDependencies) == null ? void 0 : _a2.call(l, Pe), d(e, "addRunDependency requires an ID"), d(!Me[e]), Me[e] = 1, Fe === null && globalThis.setInterval && (Fe = setInterval(() => {
        if (z) {
          clearInterval(Fe), Fe = null;
          return;
        }
        var r = false;
        for (var t in Me) r || (r = true, T("still waiting on run dependencies:")), T(`dependency: ${t}`);
        r && T("(end of list)");
      }, 1e4), (_b2 = Fe.unref) == null ? void 0 : _b2.call(Fe));
    }, sr = [], zr = async (e, r) => {
      typeof Browser < "u" && Browser.init();
      for (var t of sr) if (t.canHandle(r)) return d(t.handle.constructor.name === "AsyncFunction", "Filesystem plugin handlers must be async functions (See #24914)"), t.handle(e, r);
      return e;
    }, ir = async (e, r, t, o, a, s, i, c) => {
      var u = r ? Te.resolve(O.join2(e, r)) : e, m = Ur(`cp ${u}`);
      xr(m);
      try {
        var k = t;
        typeof t == "string" && (k = await Lr(t)), k = await zr(k, u), c == null ? void 0 : c(), s || Ir(e, r, k, o, a, i);
      } finally {
        Br(m);
      }
    }, Hr = (e, r, t, o, a, s, i, c, u, m) => {
      ir(e, r, t, o, a, c, u, m).then(s).catch(i);
    }, n = {
      root: null,
      mounts: [],
      devices: {},
      streams: [],
      nextInode: 1,
      nameTable: null,
      currentPath: "/",
      initialized: false,
      ignorePermissions: true,
      filesystems: null,
      syncFSRequests: 0,
      ErrnoError: class extends Error {
        constructor(e) {
          super(se ? Cr(e) : "");
          __publicField(this, "name", "ErrnoError");
          this.errno = e;
          for (var r in ar) if (ar[r] === e) {
            this.code = r;
            break;
          }
        }
      },
      FSStream: class {
        constructor() {
          __publicField(this, "shared", {});
        }
        get object() {
          return this.node;
        }
        set object(e) {
          this.node = e;
        }
        get isRead() {
          return (this.flags & 2097155) !== 1;
        }
        get isWrite() {
          return (this.flags & 2097155) !== 0;
        }
        get isAppend() {
          return this.flags & 1024;
        }
        get flags() {
          return this.shared.flags;
        }
        set flags(e) {
          this.shared.flags = e;
        }
        get position() {
          return this.shared.position;
        }
        set position(e) {
          this.shared.position = e;
        }
      },
      FSNode: class {
        constructor(e, r, t, o) {
          __publicField(this, "node_ops", {});
          __publicField(this, "stream_ops", {});
          __publicField(this, "readMode", 365);
          __publicField(this, "writeMode", 146);
          __publicField(this, "mounted", null);
          e || (e = this), this.parent = e, this.mount = e.mount, this.id = n.nextInode++, this.name = r, this.mode = t, this.rdev = o, this.atime = this.mtime = this.ctime = Date.now();
        }
        get read() {
          return (this.mode & this.readMode) === this.readMode;
        }
        set read(e) {
          e ? this.mode |= this.readMode : this.mode &= ~this.readMode;
        }
        get write() {
          return (this.mode & this.writeMode) === this.writeMode;
        }
        set write(e) {
          e ? this.mode |= this.writeMode : this.mode &= ~this.writeMode;
        }
        get isFolder() {
          return n.isDir(this.mode);
        }
        get isDevice() {
          return n.isChrdev(this.mode);
        }
      },
      lookupPath(e, r = {}) {
        if (!e) throw new n.ErrnoError(44);
        r.follow_mount ?? (r.follow_mount = true), O.isAbs(e) || (e = n.cwd() + "/" + e);
        e: for (var t = 0; t < 40; t++) {
          for (var o = e.split("/").filter((m) => !!m), a = n.root, s = "/", i = 0; i < o.length; i++) {
            var c = i === o.length - 1;
            if (c && r.parent) break;
            if (o[i] !== ".") {
              if (o[i] === "..") {
                if (s = O.dirname(s), n.isRoot(a)) {
                  e = s + "/" + o.slice(i + 1).join("/"), t--;
                  continue e;
                } else a = a.parent;
                continue;
              }
              s = O.join2(s, o[i]);
              try {
                a = n.lookupNode(a, o[i]);
              } catch (m) {
                if ((m == null ? void 0 : m.errno) === 44 && c && r.noent_okay) return {
                  path: s
                };
                throw m;
              }
              if (n.isMountpoint(a) && (!c || r.follow_mount) && (a = a.mounted.root), n.isLink(a.mode) && (!c || r.follow)) {
                if (!a.node_ops.readlink) throw new n.ErrnoError(52);
                var u = a.node_ops.readlink(a);
                O.isAbs(u) || (u = O.dirname(s) + "/" + u), e = u + "/" + o.slice(i + 1).join("/");
                continue e;
              }
            }
          }
          return {
            path: s,
            node: a
          };
        }
        throw new n.ErrnoError(32);
      },
      getPath(e) {
        for (var r; ; ) {
          if (n.isRoot(e)) {
            var t = e.mount.mountpoint;
            return r ? t[t.length - 1] !== "/" ? `${t}/${r}` : t + r : t;
          }
          r = r ? `${e.name}/${r}` : e.name, e = e.parent;
        }
      },
      hashName(e, r) {
        for (var t = 0, o = 0; o < r.length; o++) t = (t << 5) - t + r.charCodeAt(o) | 0;
        return (e + t >>> 0) % n.nameTable.length;
      },
      hashAddNode(e) {
        var r = n.hashName(e.parent.id, e.name);
        e.name_next = n.nameTable[r], n.nameTable[r] = e;
      },
      hashRemoveNode(e) {
        var r = n.hashName(e.parent.id, e.name);
        if (n.nameTable[r] === e) n.nameTable[r] = e.name_next;
        else for (var t = n.nameTable[r]; t; ) {
          if (t.name_next === e) {
            t.name_next = e.name_next;
            break;
          }
          t = t.name_next;
        }
      },
      lookupNode(e, r) {
        var t = n.mayLookup(e);
        if (t) throw new n.ErrnoError(t);
        for (var o = n.hashName(e.id, r), a = n.nameTable[o]; a; a = a.name_next) {
          var s = a.name;
          if (a.parent.id === e.id && s === r) return a;
        }
        return n.lookup(e, r);
      },
      createNode(e, r, t, o) {
        d(typeof e == "object");
        var a = new n.FSNode(e, r, t, o);
        return n.hashAddNode(a), a;
      },
      destroyNode(e) {
        n.hashRemoveNode(e);
      },
      isRoot(e) {
        return e === e.parent;
      },
      isMountpoint(e) {
        return !!e.mounted;
      },
      isFile(e) {
        return (e & 61440) === 32768;
      },
      isDir(e) {
        return (e & 61440) === 16384;
      },
      isLink(e) {
        return (e & 61440) === 40960;
      },
      isChrdev(e) {
        return (e & 61440) === 8192;
      },
      isBlkdev(e) {
        return (e & 61440) === 24576;
      },
      isFIFO(e) {
        return (e & 61440) === 4096;
      },
      isSocket(e) {
        return (e & 49152) === 49152;
      },
      flagsToPermissionString(e) {
        var r = [
          "r",
          "w",
          "rw"
        ][e & 3];
        return e & 512 && (r += "w"), r;
      },
      nodePermissions(e, r) {
        return n.ignorePermissions ? 0 : r.includes("r") && !(e.mode & 292) || r.includes("w") && !(e.mode & 146) || r.includes("x") && !(e.mode & 73) ? 2 : 0;
      },
      mayLookup(e) {
        if (!n.isDir(e.mode)) return 54;
        var r = n.nodePermissions(e, "x");
        return r || (e.node_ops.lookup ? 0 : 2);
      },
      mayCreate(e, r) {
        if (!n.isDir(e.mode)) return 54;
        try {
          var t = n.lookupNode(e, r);
          return 20;
        } catch {
        }
        return n.nodePermissions(e, "wx");
      },
      mayDelete(e, r, t) {
        var o;
        try {
          o = n.lookupNode(e, r);
        } catch (s) {
          return s.errno;
        }
        var a = n.nodePermissions(e, "wx");
        if (a) return a;
        if (t) {
          if (!n.isDir(o.mode)) return 54;
          if (n.isRoot(o) || n.getPath(o) === n.cwd()) return 10;
        } else if (n.isDir(o.mode)) return 31;
        return 0;
      },
      mayOpen(e, r) {
        if (!e) return 44;
        if (n.isLink(e.mode)) return 32;
        var t = n.flagsToPermissionString(r);
        return n.isDir(e.mode) && (t !== "r" || r & 576) ? 31 : n.nodePermissions(e, t);
      },
      checkOpExists(e, r) {
        if (!e) throw new n.ErrnoError(r);
        return e;
      },
      MAX_OPEN_FDS: 4096,
      nextfd() {
        for (var e = 0; e <= n.MAX_OPEN_FDS; e++) if (!n.streams[e]) return e;
        throw new n.ErrnoError(33);
      },
      getStreamChecked(e) {
        var r = n.getStream(e);
        if (!r) throw new n.ErrnoError(8);
        return r;
      },
      getStream: (e) => n.streams[e],
      createStream(e, r = -1) {
        return d(r >= -1), e = Object.assign(new n.FSStream(), e), r == -1 && (r = n.nextfd()), e.fd = r, n.streams[r] = e, e;
      },
      closeStream(e) {
        n.streams[e] = null;
      },
      dupStream(e, r = -1) {
        var _a2, _b2;
        var t = n.createStream(e, r);
        return (_b2 = (_a2 = t.stream_ops) == null ? void 0 : _a2.dup) == null ? void 0 : _b2.call(_a2, t), t;
      },
      doSetAttr(e, r, t) {
        var o = e == null ? void 0 : e.stream_ops.setattr, a = o ? e : r;
        o ?? (o = r.node_ops.setattr), n.checkOpExists(o, 63), o(a, t);
      },
      chrdev_stream_ops: {
        open(e) {
          var _a2, _b2;
          var r = n.getDevice(e.node.rdev);
          e.stream_ops = r.stream_ops, (_b2 = (_a2 = e.stream_ops).open) == null ? void 0 : _b2.call(_a2, e);
        },
        llseek() {
          throw new n.ErrnoError(70);
        }
      },
      major: (e) => e >> 8,
      minor: (e) => e & 255,
      makedev: (e, r) => e << 8 | r,
      registerDevice(e, r) {
        n.devices[e] = {
          stream_ops: r
        };
      },
      getDevice: (e) => n.devices[e],
      getMounts(e) {
        for (var r = [], t = [
          e
        ]; t.length; ) {
          var o = t.pop();
          r.push(o), t.push(...o.mounts);
        }
        return r;
      },
      syncfs(e, r) {
        typeof e == "function" && (r = e, e = false), n.syncFSRequests++, n.syncFSRequests > 1 && T(`warning: ${n.syncFSRequests} FS.syncfs operations in flight at once, probably just doing extra work`);
        var t = n.getMounts(n.root.mount), o = 0;
        function a(c) {
          return d(n.syncFSRequests > 0), n.syncFSRequests--, r(c);
        }
        function s(c) {
          if (c) return s.errored ? void 0 : (s.errored = true, a(c));
          ++o >= t.length && a(null);
        }
        for (var i of t) i.type.syncfs ? i.type.syncfs(i, e, s) : s(null);
      },
      mount(e, r, t) {
        if (typeof e == "string") throw e;
        var o = t === "/", a = !t, s;
        if (o && n.root) throw new n.ErrnoError(10);
        if (!o && !a) {
          var i = n.lookupPath(t, {
            follow_mount: false
          });
          if (t = i.path, s = i.node, n.isMountpoint(s)) throw new n.ErrnoError(10);
          if (!n.isDir(s.mode)) throw new n.ErrnoError(54);
        }
        var c = {
          type: e,
          opts: r,
          mountpoint: t,
          mounts: []
        }, u = e.mount(c);
        return u.mount = c, c.root = u, o ? n.root = u : s && (s.mounted = c, s.mount && s.mount.mounts.push(c)), u;
      },
      unmount(e) {
        var r = n.lookupPath(e, {
          follow_mount: false
        });
        if (!n.isMountpoint(r.node)) throw new n.ErrnoError(28);
        var t = r.node, o = t.mounted, a = n.getMounts(o);
        for (var [s, i] of Object.entries(n.nameTable)) for (; i; ) {
          var c = i.name_next;
          a.includes(i.mount) && n.destroyNode(i), i = c;
        }
        t.mounted = null;
        var u = t.mount.mounts.indexOf(o);
        d(u !== -1), t.mount.mounts.splice(u, 1);
      },
      lookup(e, r) {
        return e.node_ops.lookup(e, r);
      },
      mknod(e, r, t) {
        var o = n.lookupPath(e, {
          parent: true
        }), a = o.node, s = O.basename(e);
        if (!s) throw new n.ErrnoError(28);
        if (s === "." || s === "..") throw new n.ErrnoError(20);
        var i = n.mayCreate(a, s);
        if (i) throw new n.ErrnoError(i);
        if (!a.node_ops.mknod) throw new n.ErrnoError(63);
        return a.node_ops.mknod(a, s, r, t);
      },
      statfs(e) {
        return n.statfsNode(n.lookupPath(e, {
          follow: true
        }).node);
      },
      statfsStream(e) {
        return n.statfsNode(e.node);
      },
      statfsNode(e) {
        var r = {
          bsize: 4096,
          frsize: 4096,
          blocks: 1e6,
          bfree: 5e5,
          bavail: 5e5,
          files: n.nextInode,
          ffree: n.nextInode - 1,
          fsid: 42,
          flags: 2,
          namelen: 255
        };
        return e.node_ops.statfs && Object.assign(r, e.node_ops.statfs(e.mount.opts.root)), r;
      },
      create(e, r = 438) {
        return r &= 4095, r |= 32768, n.mknod(e, r, 0);
      },
      mkdir(e, r = 511) {
        return r &= 1023, r |= 16384, n.mknod(e, r, 0);
      },
      mkdirTree(e, r) {
        var t = e.split("/"), o = "";
        for (var a of t) if (a) {
          (o || O.isAbs(e)) && (o += "/"), o += a;
          try {
            n.mkdir(o, r);
          } catch (s) {
            if (s.errno != 20) throw s;
          }
        }
      },
      mkdev(e, r, t) {
        return typeof t > "u" && (t = r, r = 438), r |= 8192, n.mknod(e, r, t);
      },
      symlink(e, r) {
        if (!Te.resolve(e)) throw new n.ErrnoError(44);
        var t = n.lookupPath(r, {
          parent: true
        }), o = t.node;
        if (!o) throw new n.ErrnoError(44);
        var a = O.basename(r), s = n.mayCreate(o, a);
        if (s) throw new n.ErrnoError(s);
        if (!o.node_ops.symlink) throw new n.ErrnoError(63);
        return o.node_ops.symlink(o, a, e);
      },
      rename(e, r) {
        var t = O.dirname(e), o = O.dirname(r), a = O.basename(e), s = O.basename(r), i, c, u;
        if (i = n.lookupPath(e, {
          parent: true
        }), c = i.node, i = n.lookupPath(r, {
          parent: true
        }), u = i.node, !c || !u) throw new n.ErrnoError(44);
        if (c.mount !== u.mount) throw new n.ErrnoError(75);
        var m = n.lookupNode(c, a), k = Te.relative(e, o);
        if (k.charAt(0) !== ".") throw new n.ErrnoError(28);
        if (k = Te.relative(r, t), k.charAt(0) !== ".") throw new n.ErrnoError(55);
        var A;
        try {
          A = n.lookupNode(u, s);
        } catch {
        }
        if (m !== A) {
          var h = n.isDir(m.mode), S = n.mayDelete(c, a, h);
          if (S) throw new n.ErrnoError(S);
          if (S = A ? n.mayDelete(u, s, h) : n.mayCreate(u, s), S) throw new n.ErrnoError(S);
          if (!c.node_ops.rename) throw new n.ErrnoError(63);
          if (n.isMountpoint(m) || A && n.isMountpoint(A)) throw new n.ErrnoError(10);
          if (u !== c && (S = n.nodePermissions(c, "w"), S)) throw new n.ErrnoError(S);
          n.hashRemoveNode(m);
          try {
            c.node_ops.rename(m, u, s), m.parent = u;
          } catch (W) {
            throw W;
          } finally {
            n.hashAddNode(m);
          }
        }
      },
      rmdir(e) {
        var r = n.lookupPath(e, {
          parent: true
        }), t = r.node, o = O.basename(e), a = n.lookupNode(t, o), s = n.mayDelete(t, o, true);
        if (s) throw new n.ErrnoError(s);
        if (!t.node_ops.rmdir) throw new n.ErrnoError(63);
        if (n.isMountpoint(a)) throw new n.ErrnoError(10);
        t.node_ops.rmdir(t, o), n.destroyNode(a);
      },
      readdir(e) {
        var r = n.lookupPath(e, {
          follow: true
        }), t = r.node, o = n.checkOpExists(t.node_ops.readdir, 54);
        return o(t);
      },
      unlink(e) {
        var r = n.lookupPath(e, {
          parent: true
        }), t = r.node;
        if (!t) throw new n.ErrnoError(44);
        var o = O.basename(e), a = n.lookupNode(t, o), s = n.mayDelete(t, o, false);
        if (s) throw new n.ErrnoError(s);
        if (!t.node_ops.unlink) throw new n.ErrnoError(63);
        if (n.isMountpoint(a)) throw new n.ErrnoError(10);
        t.node_ops.unlink(t, o), n.destroyNode(a);
      },
      readlink(e) {
        var r = n.lookupPath(e), t = r.node;
        if (!t) throw new n.ErrnoError(44);
        if (!t.node_ops.readlink) throw new n.ErrnoError(28);
        return t.node_ops.readlink(t);
      },
      stat(e, r) {
        var t = n.lookupPath(e, {
          follow: !r
        }), o = t.node, a = n.checkOpExists(o.node_ops.getattr, 63);
        return a(o);
      },
      fstat(e) {
        var r = n.getStreamChecked(e), t = r.node, o = r.stream_ops.getattr, a = o ? r : t;
        return o ?? (o = t.node_ops.getattr), n.checkOpExists(o, 63), o(a);
      },
      lstat(e) {
        return n.stat(e, true);
      },
      doChmod(e, r, t, o) {
        n.doSetAttr(e, r, {
          mode: t & 4095 | r.mode & -4096,
          ctime: Date.now(),
          dontFollow: o
        });
      },
      chmod(e, r, t) {
        var o;
        if (typeof e == "string") {
          var a = n.lookupPath(e, {
            follow: !t
          });
          o = a.node;
        } else o = e;
        n.doChmod(null, o, r, t);
      },
      lchmod(e, r) {
        n.chmod(e, r, true);
      },
      fchmod(e, r) {
        var t = n.getStreamChecked(e);
        n.doChmod(t, t.node, r, false);
      },
      doChown(e, r, t) {
        n.doSetAttr(e, r, {
          timestamp: Date.now(),
          dontFollow: t
        });
      },
      chown(e, r, t, o) {
        var a;
        if (typeof e == "string") {
          var s = n.lookupPath(e, {
            follow: !o
          });
          a = s.node;
        } else a = e;
        n.doChown(null, a, o);
      },
      lchown(e, r, t) {
        n.chown(e, r, t, true);
      },
      fchown(e, r, t) {
        var o = n.getStreamChecked(e);
        n.doChown(o, o.node, false);
      },
      doTruncate(e, r, t) {
        if (n.isDir(r.mode)) throw new n.ErrnoError(31);
        if (!n.isFile(r.mode)) throw new n.ErrnoError(28);
        var o = n.nodePermissions(r, "w");
        if (o) throw new n.ErrnoError(o);
        n.doSetAttr(e, r, {
          size: t,
          timestamp: Date.now()
        });
      },
      truncate(e, r) {
        if (r < 0) throw new n.ErrnoError(28);
        var t;
        if (typeof e == "string") {
          var o = n.lookupPath(e, {
            follow: true
          });
          t = o.node;
        } else t = e;
        n.doTruncate(null, t, r);
      },
      ftruncate(e, r) {
        var t = n.getStreamChecked(e);
        if (r < 0 || !(t.flags & 2097155)) throw new n.ErrnoError(28);
        n.doTruncate(t, t.node, r);
      },
      utime(e, r, t) {
        var o = n.lookupPath(e, {
          follow: true
        }), a = o.node, s = n.checkOpExists(a.node_ops.setattr, 63);
        s(a, {
          atime: r,
          mtime: t
        });
      },
      open(e, r, t = 438) {
        if (e === "") throw new n.ErrnoError(44);
        r = typeof r == "string" ? Dr(r) : r, r & 64 ? t = t & 4095 | 32768 : t = 0;
        var o, a;
        if (typeof e == "object") o = e;
        else {
          a = e.endsWith("/");
          var s = n.lookupPath(e, {
            follow: !(r & 131072),
            noent_okay: true
          });
          o = s.node, e = s.path;
        }
        var i = false;
        if (r & 64) if (o) {
          if (r & 128) throw new n.ErrnoError(20);
        } else {
          if (a) throw new n.ErrnoError(31);
          o = n.mknod(e, t | 511, 0), i = true;
        }
        if (!o) throw new n.ErrnoError(44);
        if (n.isChrdev(o.mode) && (r &= -513), r & 65536 && !n.isDir(o.mode)) throw new n.ErrnoError(54);
        if (!i) {
          var c = n.mayOpen(o, r);
          if (c) throw new n.ErrnoError(c);
        }
        r & 512 && !i && n.truncate(o, 0), r &= -131713;
        var u = n.createStream({
          node: o,
          path: n.getPath(o),
          flags: r,
          seekable: true,
          position: 0,
          stream_ops: o.stream_ops,
          ungotten: [],
          error: false
        });
        return u.stream_ops.open && u.stream_ops.open(u), i && n.chmod(o, t & 511), u;
      },
      close(e) {
        if (n.isClosed(e)) throw new n.ErrnoError(8);
        e.getdents && (e.getdents = null);
        try {
          e.stream_ops.close && e.stream_ops.close(e);
        } catch (r) {
          throw r;
        } finally {
          n.closeStream(e.fd);
        }
        e.fd = null;
      },
      isClosed(e) {
        return e.fd === null;
      },
      llseek(e, r, t) {
        if (n.isClosed(e)) throw new n.ErrnoError(8);
        if (!e.seekable || !e.stream_ops.llseek) throw new n.ErrnoError(70);
        if (t != 0 && t != 1 && t != 2) throw new n.ErrnoError(28);
        return e.position = e.stream_ops.llseek(e, r, t), e.ungotten = [], e.position;
      },
      read(e, r, t, o, a) {
        if (d(t >= 0), o < 0 || a < 0) throw new n.ErrnoError(28);
        if (n.isClosed(e)) throw new n.ErrnoError(8);
        if ((e.flags & 2097155) === 1) throw new n.ErrnoError(8);
        if (n.isDir(e.node.mode)) throw new n.ErrnoError(31);
        if (!e.stream_ops.read) throw new n.ErrnoError(28);
        var s = typeof a < "u";
        if (!s) a = e.position;
        else if (!e.seekable) throw new n.ErrnoError(70);
        var i = e.stream_ops.read(e, r, t, o, a);
        return s || (e.position += i), i;
      },
      write(e, r, t, o, a, s) {
        if (d(t >= 0), o < 0 || a < 0) throw new n.ErrnoError(28);
        if (n.isClosed(e)) throw new n.ErrnoError(8);
        if (!(e.flags & 2097155)) throw new n.ErrnoError(8);
        if (n.isDir(e.node.mode)) throw new n.ErrnoError(31);
        if (!e.stream_ops.write) throw new n.ErrnoError(28);
        e.seekable && e.flags & 1024 && n.llseek(e, 0, 2);
        var i = typeof a < "u";
        if (!i) a = e.position;
        else if (!e.seekable) throw new n.ErrnoError(70);
        var c = e.stream_ops.write(e, r, t, o, a, s);
        return i || (e.position += c), c;
      },
      mmap(e, r, t, o, a) {
        if (o & 2 && !(a & 2) && (e.flags & 2097155) !== 2) throw new n.ErrnoError(2);
        if ((e.flags & 2097155) === 1) throw new n.ErrnoError(2);
        if (!e.stream_ops.mmap) throw new n.ErrnoError(43);
        if (!r) throw new n.ErrnoError(28);
        return e.stream_ops.mmap(e, r, t, o, a);
      },
      msync(e, r, t, o, a) {
        return d(t >= 0), e.stream_ops.msync ? e.stream_ops.msync(e, r, t, o, a) : 0;
      },
      ioctl(e, r, t) {
        if (!e.stream_ops.ioctl) throw new n.ErrnoError(59);
        return e.stream_ops.ioctl(e, r, t);
      },
      readFile(e, r = {}) {
        r.flags = r.flags || 0, r.encoding = r.encoding || "binary", r.encoding !== "utf8" && r.encoding !== "binary" && E(`Invalid encoding type "${r.encoding}"`);
        var t = n.open(e, r.flags), o = n.stat(e), a = o.size, s = new Uint8Array(a);
        return n.read(t, s, 0, a, 0), r.encoding === "utf8" && (s = Ae(s)), n.close(t), s;
      },
      writeFile(e, r, t = {}) {
        t.flags = t.flags || 577;
        var o = n.open(e, t.flags, t.mode);
        typeof r == "string" && (r = new Uint8Array(Ye(r))), ArrayBuffer.isView(r) ? n.write(o, r, 0, r.byteLength, void 0, t.canOwn) : E("Unsupported data type"), n.close(o);
      },
      cwd: () => n.currentPath,
      chdir(e) {
        var r = n.lookupPath(e, {
          follow: true
        });
        if (r.node === null) throw new n.ErrnoError(44);
        if (!n.isDir(r.node.mode)) throw new n.ErrnoError(54);
        var t = n.nodePermissions(r.node, "x");
        if (t) throw new n.ErrnoError(t);
        n.currentPath = r.path;
      },
      createDefaultDirectories() {
        n.mkdir("/tmp"), n.mkdir("/home"), n.mkdir("/home/web_user");
      },
      createDefaultDevices() {
        n.mkdir("/dev"), n.registerDevice(n.makedev(1, 3), {
          read: () => 0,
          write: (o, a, s, i, c) => i,
          llseek: () => 0
        }), n.mkdev("/dev/null", n.makedev(1, 3)), ke.register(n.makedev(5, 0), ke.default_tty_ops), ke.register(n.makedev(6, 0), ke.default_tty1_ops), n.mkdev("/dev/tty", n.makedev(5, 0)), n.mkdev("/dev/tty1", n.makedev(6, 0));
        var e = new Uint8Array(1024), r = 0, t = () => (r === 0 && (nr(e), r = e.byteLength), e[--r]);
        n.createDevice("/dev", "random", t), n.createDevice("/dev", "urandom", t), n.mkdir("/dev/shm"), n.mkdir("/dev/shm/tmp");
      },
      createSpecialDirectories() {
        n.mkdir("/proc");
        var e = n.mkdir("/proc/self");
        n.mkdir("/proc/self/fd"), n.mount({
          mount() {
            var r = n.createNode(e, "fd", 16895, 73);
            return r.stream_ops = {
              llseek: g.stream_ops.llseek
            }, r.node_ops = {
              lookup(t, o) {
                var a = +o, s = n.getStreamChecked(a), i = {
                  parent: null,
                  mount: {
                    mountpoint: "fake"
                  },
                  node_ops: {
                    readlink: () => s.path
                  },
                  id: a + 1
                };
                return i.parent = i, i;
              },
              readdir() {
                return Array.from(n.streams.entries()).filter(([t, o]) => o).map(([t, o]) => t.toString());
              }
            }, r;
          }
        }, {}, "/proc/self/fd");
      },
      createStandardStreams(e, r, t) {
        e ? n.createDevice("/dev", "stdin", e) : n.symlink("/dev/tty", "/dev/stdin"), r ? n.createDevice("/dev", "stdout", null, r) : n.symlink("/dev/tty", "/dev/stdout"), t ? n.createDevice("/dev", "stderr", null, t) : n.symlink("/dev/tty1", "/dev/stderr");
        var o = n.open("/dev/stdin", 0), a = n.open("/dev/stdout", 1), s = n.open("/dev/stderr", 1);
        d(o.fd === 0, `invalid handle for stdin (${o.fd})`), d(a.fd === 1, `invalid handle for stdout (${a.fd})`), d(s.fd === 2, `invalid handle for stderr (${s.fd})`);
      },
      staticInit() {
        n.nameTable = new Array(4096), n.mount(g, {}, "/"), n.createDefaultDirectories(), n.createDefaultDevices(), n.createSpecialDirectories(), n.filesystems = {
          MEMFS: g
        };
      },
      init(e, r, t) {
        d(!n.initialized, "FS.init was previously called. If you want to initialize later with custom parameters, remove any earlier calls (note that one is automatically added to the generated code)"), n.initialized = true, e ?? (e = l.stdin), r ?? (r = l.stdout), t ?? (t = l.stderr), n.createStandardStreams(e, r, t);
      },
      quit() {
        n.initialized = false, lr(0);
        for (var e of n.streams) e && n.close(e);
      },
      findObject(e, r) {
        var t = n.analyzePath(e, r);
        return t.exists ? t.object : null;
      },
      analyzePath(e, r) {
        try {
          var t = n.lookupPath(e, {
            follow: !r
          });
          e = t.path;
        } catch {
        }
        var o = {
          isRoot: false,
          exists: false,
          error: 0,
          name: null,
          path: null,
          object: null,
          parentExists: false,
          parentPath: null,
          parentObject: null
        };
        try {
          var t = n.lookupPath(e, {
            parent: true
          });
          o.parentExists = true, o.parentPath = t.path, o.parentObject = t.node, o.name = O.basename(e), t = n.lookupPath(e, {
            follow: !r
          }), o.exists = true, o.path = t.path, o.object = t.node, o.name = t.node.name, o.isRoot = t.path === "/";
        } catch (a) {
          o.error = a.errno;
        }
        return o;
      },
      createPath(e, r, t, o) {
        e = typeof e == "string" ? e : n.getPath(e);
        for (var a = r.split("/").reverse(); a.length; ) {
          var s = a.pop();
          if (s) {
            var i = O.join2(e, s);
            try {
              n.mkdir(i);
            } catch (c) {
              if (c.errno != 20) throw c;
            }
            e = i;
          }
        }
        return i;
      },
      createFile(e, r, t, o, a) {
        var s = O.join2(typeof e == "string" ? e : n.getPath(e), r), i = Ke(o, a);
        return n.create(s, i);
      },
      createDataFile(e, r, t, o, a, s) {
        var i = r;
        e && (e = typeof e == "string" ? e : n.getPath(e), i = r ? O.join2(e, r) : e);
        var c = Ke(o, a), u = n.create(i, c);
        if (t) {
          if (typeof t == "string") {
            for (var m = new Array(t.length), k = 0, A = t.length; k < A; ++k) m[k] = t.charCodeAt(k);
            t = m;
          }
          n.chmod(u, c | 146);
          var h = n.open(u, 577);
          n.write(h, t, 0, t.length, 0, s), n.close(h), n.chmod(u, c);
        }
      },
      createDevice(e, r, t, o) {
        var _a2;
        var a = O.join2(typeof e == "string" ? e : n.getPath(e), r), s = Ke(!!t, !!o);
        (_a2 = n.createDevice).major ?? (_a2.major = 64);
        var i = n.makedev(n.createDevice.major++, 0);
        return n.registerDevice(i, {
          open(c) {
            c.seekable = false;
          },
          close(c) {
            var _a3;
            ((_a3 = o == null ? void 0 : o.buffer) == null ? void 0 : _a3.length) && o(10);
          },
          read(c, u, m, k, A) {
            for (var h = 0, S = 0; S < k; S++) {
              var W;
              try {
                W = t();
              } catch {
                throw new n.ErrnoError(29);
              }
              if (W === void 0 && h === 0) throw new n.ErrnoError(6);
              if (W == null) break;
              h++, u[m + S] = W;
            }
            return h && (c.node.atime = Date.now()), h;
          },
          write(c, u, m, k, A) {
            for (var h = 0; h < k; h++) try {
              o(u[m + h]);
            } catch {
              throw new n.ErrnoError(29);
            }
            return k && (c.node.mtime = c.node.ctime = Date.now()), h;
          }
        }), n.mkdev(a, s, i);
      },
      forceLoadFile(e) {
        if (e.isDevice || e.isFolder || e.link || e.contents) return true;
        if (globalThis.XMLHttpRequest) E("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");
        else try {
          e.contents = C(e.url);
        } catch {
          throw new n.ErrnoError(29);
        }
      },
      createLazyFile(e, r, t, o, a) {
        class s {
          constructor() {
            __publicField(this, "lengthKnown", false);
            __publicField(this, "chunks", []);
          }
          get(h) {
            if (!(h > this.length - 1 || h < 0)) {
              var S = h % this.chunkSize, W = h / this.chunkSize | 0;
              return this.getter(W)[S];
            }
          }
          setDataGetter(h) {
            this.getter = h;
          }
          cacheLength() {
            var h = new XMLHttpRequest();
            h.open("HEAD", t, false), h.send(null), h.status >= 200 && h.status < 300 || h.status === 304 || E("Couldn't load " + t + ". Status: " + h.status);
            var S = Number(h.getResponseHeader("Content-length")), W, me = (W = h.getResponseHeader("Accept-Ranges")) && W === "bytes", he = (W = h.getResponseHeader("Content-Encoding")) && W === "gzip", de = 1024 * 1024;
            me || (de = S);
            var Ee = (ge, Re) => {
              ge > Re && E("invalid range (" + ge + ", " + Re + ") or no bytes requested!"), Re > S - 1 && E("only " + S + " bytes available! programmer error!");
              var ae = new XMLHttpRequest();
              return ae.open("GET", t, false), S !== de && ae.setRequestHeader("Range", "bytes=" + ge + "-" + Re), ae.responseType = "arraybuffer", ae.overrideMimeType && ae.overrideMimeType("text/plain; charset=x-user-defined"), ae.send(null), ae.status >= 200 && ae.status < 300 || ae.status === 304 || E("Couldn't load " + t + ". Status: " + ae.status), ae.response !== void 0 ? new Uint8Array(ae.response || []) : Ye(ae.responseText || "");
            }, ze = this;
            ze.setDataGetter((ge) => {
              var Re = ge * de, ae = (ge + 1) * de - 1;
              return ae = Math.min(ae, S - 1), typeof ze.chunks[ge] > "u" && (ze.chunks[ge] = Ee(Re, ae)), typeof ze.chunks[ge] > "u" && E("doXHR failed!"), ze.chunks[ge];
            }), (he || !S) && (de = S = 1, S = this.getter(0).length, de = S, L("LazyFiles on gzip forces download of the whole file when length is accessed")), this._length = S, this._chunkSize = de, this.lengthKnown = true;
          }
          get length() {
            return this.lengthKnown || this.cacheLength(), this._length;
          }
          get chunkSize() {
            return this.lengthKnown || this.cacheLength(), this._chunkSize;
          }
        }
        if (globalThis.XMLHttpRequest) {
          y || E("Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc");
          var i = new s(), c = {
            isDevice: false,
            contents: i
          };
        } else var c = {
          isDevice: false,
          url: t
        };
        var u = n.createFile(e, r, c, o, a);
        c.contents ? u.contents = c.contents : c.url && (u.contents = null, u.url = c.url), Object.defineProperties(u, {
          usedBytes: {
            get: function() {
              return this.contents.length;
            }
          }
        });
        var m = {};
        for (const [A, h] of Object.entries(u.stream_ops)) m[A] = (...S) => (n.forceLoadFile(u), h(...S));
        function k(A, h, S, W, me) {
          var he = A.node.contents;
          if (me >= he.length) return 0;
          var de = Math.min(he.length - me, W);
          if (d(de >= 0), he.slice) for (var Ee = 0; Ee < de; Ee++) h[S + Ee] = he[me + Ee];
          else for (var Ee = 0; Ee < de; Ee++) h[S + Ee] = he.get(me + Ee);
          return de;
        }
        return m.read = (A, h, S, W, me) => (n.forceLoadFile(u), k(A, h, S, W, me)), m.mmap = (A, h, S, W, me) => {
          n.forceLoadFile(u);
          var he = or();
          if (!he) throw new n.ErrnoError(48);
          return k(A, V, he, h, S), {
            ptr: he,
            allocated: true
          };
        }, u.stream_ops = m, u;
      },
      absolutePath() {
        E("FS.absolutePath has been removed; use PATH_FS.resolve instead");
      },
      createFolder() {
        E("FS.createFolder has been removed; use FS.mkdir instead");
      },
      createLink() {
        E("FS.createLink has been removed; use FS.symlink instead");
      },
      joinPath() {
        E("FS.joinPath has been removed; use PATH.join instead");
      },
      mmapAlloc() {
        E("FS.mmapAlloc has been replaced by the top level function mmapAlloc");
      },
      standardizePath() {
        E("FS.standardizePath has been removed; use PATH.normalize instead");
      }
    }, xe = {
      calculateAt(e, r, t) {
        if (O.isAbs(r)) return r;
        var o;
        if (e === -100) o = n.cwd();
        else {
          var a = xe.getStreamFromFD(e);
          o = a.path;
        }
        if (r.length == 0) {
          if (!t) throw new n.ErrnoError(44);
          return o;
        }
        return o + "/" + r;
      },
      writeStat(e, r) {
        p[e >> 2] = r.dev, p[e + 4 >> 2] = r.mode, p[e + 8 >> 2] = r.nlink, p[e + 12 >> 2] = r.uid, p[e + 16 >> 2] = r.gid, p[e + 20 >> 2] = r.rdev, U[e + 24 >> 3] = BigInt(r.size), fe[e + 32 >> 2] = 4096, fe[e + 36 >> 2] = r.blocks;
        var t = r.atime.getTime(), o = r.mtime.getTime(), a = r.ctime.getTime();
        return U[e + 40 >> 3] = BigInt(Math.floor(t / 1e3)), p[e + 48 >> 2] = t % 1e3 * 1e3 * 1e3, U[e + 56 >> 3] = BigInt(Math.floor(o / 1e3)), p[e + 64 >> 2] = o % 1e3 * 1e3 * 1e3, U[e + 72 >> 3] = BigInt(Math.floor(a / 1e3)), p[e + 80 >> 2] = a % 1e3 * 1e3 * 1e3, U[e + 88 >> 3] = BigInt(r.ino), 0;
      },
      writeStatFs(e, r) {
        p[e + 4 >> 2] = r.bsize, p[e + 60 >> 2] = r.bsize, U[e + 8 >> 3] = BigInt(r.blocks), U[e + 16 >> 3] = BigInt(r.bfree), U[e + 24 >> 3] = BigInt(r.bavail), U[e + 32 >> 3] = BigInt(r.files), U[e + 40 >> 3] = BigInt(r.ffree), p[e + 48 >> 2] = r.fsid, p[e + 64 >> 2] = r.flags, p[e + 56 >> 2] = r.namelen;
      },
      doMsync(e, r, t, o, a) {
        if (!n.isFile(r.node.mode)) throw new n.ErrnoError(43);
        if (o & 2) return 0;
        var s = Y.slice(e, e + t);
        n.msync(r, s, a, t, o);
      },
      getStreamFromFD(e) {
        var r = n.getStreamChecked(e);
        return r;
      },
      varargs: void 0,
      getStr(e) {
        var r = Le(e);
        return r;
      }
    };
    function Wr(e) {
      try {
        var r = xe.getStreamFromFD(e);
        return n.close(r), 0;
      } catch (t) {
        if (typeof n > "u" || t.name !== "ErrnoError") throw t;
        return t.errno;
      }
    }
    var $r = (e, r, t, o) => {
      for (var a = 0, s = 0; s < t; s++) {
        var i = p[r >> 2], c = p[r + 4 >> 2];
        r += 8;
        var u = n.read(e, V, i, c, o);
        if (u < 0) return -1;
        if (a += u, u < c) break;
      }
      return a;
    };
    function jr(e, r, t, o) {
      try {
        var a = xe.getStreamFromFD(e), s = $r(a, r, t);
        return p[o >> 2] = s, 0;
      } catch (i) {
        if (typeof n > "u" || i.name !== "ErrnoError") throw i;
        return i.errno;
      }
    }
    var Gr = 9007199254740992, Vr = -9007199254740992, qr = (e) => e < Vr || e > Gr ? NaN : Number(e);
    function Yr(e, r, t, o) {
      r = qr(r);
      try {
        if (isNaN(r)) return 61;
        var a = xe.getStreamFromFD(e);
        return n.llseek(a, r, t), U[o >> 3] = BigInt(a.position), a.getdents && r === 0 && t === 0 && (a.getdents = null), 0;
      } catch (s) {
        if (typeof n > "u" || s.name !== "ErrnoError") throw s;
        return s.errno;
      }
    }
    var Kr = (e, r, t, o) => {
      for (var a = 0, s = 0; s < t; s++) {
        var i = p[r >> 2], c = p[r + 4 >> 2];
        r += 8;
        var u = n.write(e, V, i, c, o);
        if (u < 0) return -1;
        if (a += u, u < c) break;
      }
      return a;
    };
    function Xr(e, r, t, o) {
      try {
        var a = xe.getStreamFromFD(e), s = Kr(a, r, t);
        return p[o >> 2] = s, 0;
      } catch (i) {
        if (typeof n > "u" || i.name !== "ErrnoError") throw i;
        return i.errno;
      }
    }
    n.createPreloadedFile = Hr, n.preloadFile = ir, n.staticInit();
    {
      if (l.noExitRuntime && l.noExitRuntime, l.preloadPlugins && (sr = l.preloadPlugins), l.print && (L = l.print), l.printErr && (T = l.printErr), l.wasmBinary && (te = l.wasmBinary), Zr(), l.arguments && l.arguments, l.thisProgram && (re = l.thisProgram), d(typeof l.memoryInitializerPrefixURL > "u", "Module.memoryInitializerPrefixURL option was removed, use Module.locateFile instead"), d(typeof l.pthreadMainPrefixURL > "u", "Module.pthreadMainPrefixURL option was removed, use Module.locateFile instead"), d(typeof l.cdInitializerPrefixURL > "u", "Module.cdInitializerPrefixURL option was removed, use Module.locateFile instead"), d(typeof l.filePackagePrefixURL > "u", "Module.filePackagePrefixURL option was removed, use Module.locateFile instead"), d(typeof l.read > "u", "Module.read option was removed"), d(typeof l.readAsync > "u", "Module.readAsync option was removed (modify readAsync in JS)"), d(typeof l.readBinary > "u", "Module.readBinary option was removed (modify readBinary in JS)"), d(typeof l.setWindowTitle > "u", "Module.setWindowTitle option was removed (modify emscripten_set_window_title in JS)"), d(typeof l.TOTAL_MEMORY > "u", "Module.TOTAL_MEMORY has been renamed Module.INITIAL_MEMORY"), d(typeof l.ENVIRONMENT > "u", "Module.ENVIRONMENT has been deprecated. To force the environment, use the ENVIRONMENT compile-time option (for example, -sENVIRONMENT=web or -sENVIRONMENT=node)"), d(typeof l.STACK_SIZE > "u", "STACK_SIZE can no longer be set at runtime.  Use -sSTACK_SIZE at link time"), d(typeof l.wasmMemory > "u", "Use of `wasmMemory` detected.  Use -sIMPORTED_MEMORY to define wasmMemory externally"), d(typeof l.INITIAL_MEMORY > "u", "Detected runtime INITIAL_MEMORY setting.  Use -sIMPORTED_MEMORY to define wasmMemory dynamically"), l.preInit) for (typeof l.preInit == "function" && (l.preInit = [
        l.preInit
      ]); l.preInit.length > 0; ) l.preInit.shift()();
      oe("preInit");
    }
    var Qr = [
      "writeI53ToI64",
      "writeI53ToI64Clamped",
      "writeI53ToI64Signaling",
      "writeI53ToU64Clamped",
      "writeI53ToU64Signaling",
      "readI53FromI64",
      "readI53FromU64",
      "convertI32PairToI53",
      "convertI32PairToI53Checked",
      "convertU32PairToI53",
      "stackAlloc",
      "getTempRet0",
      "setTempRet0",
      "createNamedFunction",
      "zeroMemory",
      "exitJS",
      "withStackSave",
      "inetPton4",
      "inetNtop4",
      "inetPton6",
      "inetNtop6",
      "readSockaddr",
      "writeSockaddr",
      "readEmAsmArgs",
      "jstoi_q",
      "autoResumeAudioContext",
      "getDynCaller",
      "dynCall",
      "handleException",
      "keepRuntimeAlive",
      "runtimeKeepalivePush",
      "runtimeKeepalivePop",
      "callUserCallback",
      "maybeExit",
      "asmjsMangle",
      "HandleAllocator",
      "addOnInit",
      "addOnPostCtor",
      "addOnPreMain",
      "addOnExit",
      "STACK_SIZE",
      "STACK_ALIGN",
      "POINTER_SIZE",
      "ASSERTIONS",
      "ccall",
      "cwrap",
      "convertJsFunctionToWasm",
      "getEmptyTableSlot",
      "updateTableMap",
      "getFunctionAddress",
      "addFunction",
      "removeFunction",
      "intArrayToString",
      "AsciiToString",
      "stringToAscii",
      "UTF16ToString",
      "stringToUTF16",
      "lengthBytesUTF16",
      "UTF32ToString",
      "stringToUTF32",
      "lengthBytesUTF32",
      "stringToNewUTF8",
      "stringToUTF8OnStack",
      "writeArrayToMemory",
      "registerKeyEventCallback",
      "maybeCStringToJsString",
      "findEventTarget",
      "getBoundingClientRect",
      "fillMouseEventData",
      "registerMouseEventCallback",
      "registerWheelEventCallback",
      "registerUiEventCallback",
      "registerFocusEventCallback",
      "fillDeviceOrientationEventData",
      "registerDeviceOrientationEventCallback",
      "fillDeviceMotionEventData",
      "registerDeviceMotionEventCallback",
      "screenOrientation",
      "fillOrientationChangeEventData",
      "registerOrientationChangeEventCallback",
      "fillFullscreenChangeEventData",
      "registerFullscreenChangeEventCallback",
      "JSEvents_requestFullscreen",
      "JSEvents_resizeCanvasForFullscreen",
      "registerRestoreOldStyle",
      "hideEverythingExceptGivenElement",
      "restoreHiddenElements",
      "setLetterbox",
      "softFullscreenResizeWebGLRenderTarget",
      "doRequestFullscreen",
      "fillPointerlockChangeEventData",
      "registerPointerlockChangeEventCallback",
      "registerPointerlockErrorEventCallback",
      "requestPointerLock",
      "fillVisibilityChangeEventData",
      "registerVisibilityChangeEventCallback",
      "registerTouchEventCallback",
      "fillGamepadEventData",
      "registerGamepadEventCallback",
      "registerBeforeUnloadEventCallback",
      "fillBatteryEventData",
      "registerBatteryEventCallback",
      "setCanvasElementSize",
      "getCanvasElementSize",
      "jsStackTrace",
      "getCallstack",
      "convertPCtoSourceLocation",
      "checkWasiClock",
      "wasiRightsToMuslOFlags",
      "wasiOFlagsToMuslOFlags",
      "safeSetTimeout",
      "setImmediateWrapped",
      "safeRequestAnimationFrame",
      "clearImmediateWrapped",
      "registerPostMainLoop",
      "registerPreMainLoop",
      "getPromise",
      "makePromise",
      "idsToPromises",
      "makePromiseCallback",
      "findMatchingCatch",
      "Browser_asyncPrepareDataCounter",
      "isLeapYear",
      "ydayFromDate",
      "arraySum",
      "addDays",
      "getSocketFromFD",
      "getSocketAddress",
      "FS_mkdirTree",
      "_setNetworkCallback",
      "heapObjectForWebGLType",
      "toTypedArrayIndex",
      "webgl_enable_ANGLE_instanced_arrays",
      "webgl_enable_OES_vertex_array_object",
      "webgl_enable_WEBGL_draw_buffers",
      "webgl_enable_WEBGL_multi_draw",
      "webgl_enable_EXT_polygon_offset_clamp",
      "webgl_enable_EXT_clip_control",
      "webgl_enable_WEBGL_polygon_mode",
      "emscriptenWebGLGet",
      "computeUnpackAlignedImageSize",
      "colorChannelsInGlTextureFormat",
      "emscriptenWebGLGetTexPixelData",
      "emscriptenWebGLGetUniform",
      "webglGetUniformLocation",
      "webglPrepareUniformLocationsBeforeFirstUse",
      "webglGetLeftBracePos",
      "emscriptenWebGLGetVertexAttrib",
      "__glGetActiveAttribOrUniform",
      "writeGLArray",
      "registerWebGlEventCallback",
      "runAndAbortIfError",
      "ALLOC_NORMAL",
      "ALLOC_STACK",
      "allocate",
      "writeStringToMemory",
      "writeAsciiToMemory",
      "allocateUTF8",
      "allocateUTF8OnStack",
      "demangle",
      "stackTrace",
      "getNativeTypeSize"
    ];
    Qr.forEach(ue);
    var Jr = [
      "run",
      "out",
      "err",
      "callMain",
      "abort",
      "wasmExports",
      "HEAPF32",
      "HEAP8",
      "HEAP16",
      "HEAPU16",
      "HEAP32",
      "HEAP64",
      "HEAPU64",
      "writeStackCookie",
      "checkStackCookie",
      "INT53_MAX",
      "INT53_MIN",
      "bigintToI53Checked",
      "stackSave",
      "stackRestore",
      "ptrToString",
      "getHeapMax",
      "growMemory",
      "ENV",
      "ERRNO_CODES",
      "strError",
      "DNS",
      "Protocols",
      "Sockets",
      "timers",
      "warnOnce",
      "readEmAsmArgsArray",
      "getExecutableName",
      "asyncLoad",
      "alignMemory",
      "mmapAlloc",
      "wasmTable",
      "wasmMemory",
      "getUniqueRunDependency",
      "noExitRuntime",
      "addRunDependency",
      "removeRunDependency",
      "addOnPreRun",
      "addOnPostRun",
      "freeTableIndexes",
      "functionsInTableMap",
      "setValue",
      "getValue",
      "PATH",
      "PATH_FS",
      "UTF8Decoder",
      "UTF8ArrayToString",
      "UTF8ToString",
      "stringToUTF8Array",
      "stringToUTF8",
      "lengthBytesUTF8",
      "intArrayFromString",
      "UTF16Decoder",
      "JSEvents",
      "specialHTMLTargets",
      "findCanvasEventTarget",
      "currentFullscreenStrategy",
      "restoreOldWindowedStyle",
      "UNWIND_CACHE",
      "ExitStatus",
      "getEnvStrings",
      "doReadv",
      "doWritev",
      "initRandomFill",
      "randomFill",
      "emSetImmediate",
      "emClearImmediate_deps",
      "emClearImmediate",
      "promiseMap",
      "uncaughtExceptionCount",
      "exceptionLast",
      "exceptionCaught",
      "ExceptionInfo",
      "Browser",
      "requestFullscreen",
      "requestFullScreen",
      "setCanvasSize",
      "getUserMedia",
      "createContext",
      "getPreloadedImageData__data",
      "wget",
      "MONTH_DAYS_REGULAR",
      "MONTH_DAYS_LEAP",
      "MONTH_DAYS_REGULAR_CUMULATIVE",
      "MONTH_DAYS_LEAP_CUMULATIVE",
      "SYSCALLS",
      "preloadPlugins",
      "FS_createPreloadedFile",
      "FS_preloadFile",
      "FS_modeStringToFlags",
      "FS_getMode",
      "FS_stdin_getChar_buffer",
      "FS_stdin_getChar",
      "FS_unlink",
      "FS_createPath",
      "FS_createDevice",
      "FS_readFile",
      "FS",
      "FS_root",
      "FS_mounts",
      "FS_devices",
      "FS_streams",
      "FS_nextInode",
      "FS_nameTable",
      "FS_currentPath",
      "FS_initialized",
      "FS_ignorePermissions",
      "FS_filesystems",
      "FS_syncFSRequests",
      "FS_lookupPath",
      "FS_getPath",
      "FS_hashName",
      "FS_hashAddNode",
      "FS_hashRemoveNode",
      "FS_lookupNode",
      "FS_createNode",
      "FS_destroyNode",
      "FS_isRoot",
      "FS_isMountpoint",
      "FS_isFile",
      "FS_isDir",
      "FS_isLink",
      "FS_isChrdev",
      "FS_isBlkdev",
      "FS_isFIFO",
      "FS_isSocket",
      "FS_flagsToPermissionString",
      "FS_nodePermissions",
      "FS_mayLookup",
      "FS_mayCreate",
      "FS_mayDelete",
      "FS_mayOpen",
      "FS_checkOpExists",
      "FS_nextfd",
      "FS_getStreamChecked",
      "FS_getStream",
      "FS_createStream",
      "FS_closeStream",
      "FS_dupStream",
      "FS_doSetAttr",
      "FS_chrdev_stream_ops",
      "FS_major",
      "FS_minor",
      "FS_makedev",
      "FS_registerDevice",
      "FS_getDevice",
      "FS_getMounts",
      "FS_syncfs",
      "FS_mount",
      "FS_unmount",
      "FS_lookup",
      "FS_mknod",
      "FS_statfs",
      "FS_statfsStream",
      "FS_statfsNode",
      "FS_create",
      "FS_mkdir",
      "FS_mkdev",
      "FS_symlink",
      "FS_rename",
      "FS_rmdir",
      "FS_readdir",
      "FS_readlink",
      "FS_stat",
      "FS_fstat",
      "FS_lstat",
      "FS_doChmod",
      "FS_chmod",
      "FS_lchmod",
      "FS_fchmod",
      "FS_doChown",
      "FS_chown",
      "FS_lchown",
      "FS_fchown",
      "FS_doTruncate",
      "FS_truncate",
      "FS_ftruncate",
      "FS_utime",
      "FS_open",
      "FS_close",
      "FS_isClosed",
      "FS_llseek",
      "FS_read",
      "FS_write",
      "FS_mmap",
      "FS_msync",
      "FS_ioctl",
      "FS_writeFile",
      "FS_cwd",
      "FS_chdir",
      "FS_createDefaultDirectories",
      "FS_createDefaultDevices",
      "FS_createSpecialDirectories",
      "FS_createStandardStreams",
      "FS_staticInit",
      "FS_init",
      "FS_quit",
      "FS_findObject",
      "FS_analyzePath",
      "FS_createFile",
      "FS_createDataFile",
      "FS_forceLoadFile",
      "FS_createLazyFile",
      "FS_absolutePath",
      "FS_createFolder",
      "FS_createLink",
      "FS_joinPath",
      "FS_mmapAlloc",
      "FS_standardizePath",
      "MEMFS",
      "TTY",
      "PIPEFS",
      "SOCKFS",
      "tempFixedLengthArray",
      "miniTempWebGLFloatBuffers",
      "miniTempWebGLIntBuffers",
      "GL",
      "AL",
      "GLUT",
      "EGL",
      "GLEW",
      "IDBStore",
      "SDL",
      "SDL_gfx",
      "print",
      "printErr",
      "jstoi_s"
    ];
    Jr.forEach(le);
    function Zr() {
      Z("fetchSettings"), Z("logReadFiles"), Z("loadSplitModule");
    }
    l._deform = P("_deform"), l._malloc = P("_malloc"), l._free = P("_free"), l._modal = P("_modal"), l._modal_paz = P("_modal_paz"), l._plate_q4_solve = P("_plate_q4_solve"), l._slopeAllocDouble = P("_slopeAllocDouble"), l._slopeStabilitySolver = P("_slopeStabilitySolver"), l._nonlinear_dynamic = P("_nonlinear_dynamic"), l._steel02_test = P("_steel02_test"), l._cyclic_pushover = P("_cyclic_pushover"), l._concrete02_test = P("_concrete02_test");
    var lr = P("_fflush"), cr = P("_strerror"), Xe = P("_emscripten_stack_get_end"), dr = P("_emscripten_stack_init"), Ge = P("wasmMemory");
    function et(e) {
      d(typeof e.deform < "u", "missing Wasm export: deform"), d(typeof e.malloc < "u", "missing Wasm export: malloc"), d(typeof e.free < "u", "missing Wasm export: free"), d(typeof e.modal < "u", "missing Wasm export: modal"), d(typeof e.modal_paz < "u", "missing Wasm export: modal_paz"), d(typeof e.plate_q4_solve < "u", "missing Wasm export: plate_q4_solve"), d(typeof e.slopeAllocDouble < "u", "missing Wasm export: slopeAllocDouble"), d(typeof e.slopeStabilitySolver < "u", "missing Wasm export: slopeStabilitySolver"), d(typeof e.nonlinear_dynamic < "u", "missing Wasm export: nonlinear_dynamic"), d(typeof e.steel02_test < "u", "missing Wasm export: steel02_test"), d(typeof e.cyclic_pushover < "u", "missing Wasm export: cyclic_pushover"), d(typeof e.concrete02_test < "u", "missing Wasm export: concrete02_test"), d(typeof e.fflush < "u", "missing Wasm export: fflush"), d(typeof e.strerror < "u", "missing Wasm export: strerror"), d(typeof e.emscripten_stack_get_end < "u", "missing Wasm export: emscripten_stack_get_end"), d(typeof e.emscripten_stack_get_base < "u", "missing Wasm export: emscripten_stack_get_base"), d(typeof e.emscripten_stack_init < "u", "missing Wasm export: emscripten_stack_init"), d(typeof e.emscripten_stack_get_free < "u", "missing Wasm export: emscripten_stack_get_free"), d(typeof e._emscripten_stack_restore < "u", "missing Wasm export: _emscripten_stack_restore"), d(typeof e._emscripten_stack_alloc < "u", "missing Wasm export: _emscripten_stack_alloc"), d(typeof e.emscripten_stack_get_current < "u", "missing Wasm export: emscripten_stack_get_current"), d(typeof e.memory < "u", "missing Wasm export: memory"), d(typeof e.__indirect_function_table < "u", "missing Wasm export: __indirect_function_table"), l._deform = F("deform", 43), l._malloc = F("malloc", 1), l._free = F("free", 1), l._modal = F("modal", 39), l._modal_paz = F("modal_paz", 42), l._plate_q4_solve = F("plate_q4_solve", 24), l._slopeAllocDouble = F("slopeAllocDouble", 1), l._slopeStabilitySolver = F("slopeStabilitySolver", 16), l._nonlinear_dynamic = F("nonlinear_dynamic", 20), l._steel02_test = F("steel02_test", 8), l._cyclic_pushover = F("cyclic_pushover", 40), l._concrete02_test = F("concrete02_test", 10), lr = F("fflush", 1), cr = F("strerror", 1), Xe = e.emscripten_stack_get_end, e.emscripten_stack_get_base, dr = e.emscripten_stack_init, e.emscripten_stack_get_free, e._emscripten_stack_restore, e._emscripten_stack_alloc, e.emscripten_stack_get_current, Ge = e.memory, e.__indirect_function_table;
    }
    var ur = {
      __assert_fail: yr,
      __cxa_throw: wr,
      _abort_js: Sr,
      _tzset_js: Fr,
      emscripten_resize_heap: Ar,
      environ_get: Mr,
      environ_sizes_get: Nr,
      fd_close: Wr,
      fd_read: jr,
      fd_seek: Yr,
      fd_write: Xr
    }, fr;
    function rt() {
      dr(), ne();
    }
    function Qe() {
      if (Pe > 0) {
        Be = Qe;
        return;
      }
      if (rt(), ve(), Pe > 0) {
        Be = Qe;
        return;
      }
      function e() {
        var _a2;
        d(!fr), fr = true, l.calledRun = true, !z && (_e(), pe == null ? void 0 : pe(l), (_a2 = l.onRuntimeInitialized) == null ? void 0 : _a2.call(l), oe("onRuntimeInitialized"), d(!l._main, 'compiled without a main, but one is present. if you added it from JS, use Module["onRuntimeInitialized"]'), b());
      }
      l.setStatus ? (l.setStatus("Running..."), setTimeout(() => {
        setTimeout(() => l.setStatus(""), 1), e();
      }, 1)) : e(), Q();
    }
    var Ne;
    Ne = await pr(), Qe(), se ? v = l : v = new Promise((e, r) => {
      pe = e, ce = r;
    });
    for (const e of Object.keys(l)) e in f || Object.defineProperty(f, e, {
      configurable: true,
      get() {
        E(`Access to module property ('${e}') is no longer possible via the module constructor argument; Instead, use the result of the module constructor.`);
      }
    });
    return v;
  };
  const $ = await We();
  st = function(f, v, l, _) {
    if (f.length === 0) return;
    const y = [], w = Se(f.flat(), Float64Array, $.HEAPF64);
    y.push(w);
    const j = v.flat(), D = Se(j, Uint32Array, $.HEAPU32);
    y.push(D);
    const re = v.map((b) => b.length), I = Se(re, Uint32Array, $.HEAPU32);
    y.push(I);
    const G = l.supports ? Array.from(l.supports.keys()) : [], ie = l.supports ? Array.from(l.supports.values()).flat().map((b) => b ? 1 : 0) : [], q = Se(G, Uint32Array, $.HEAPU32);
    y.push(q);
    const C = Se(ie, Uint8Array, $.HEAPU8);
    y.push(C);
    const x = l.loads ? Array.from(l.loads.keys()) : [], L = l.loads ? Array.from(l.loads.values()).flat() : [], T = Se(x, Uint32Array, $.HEAPU32);
    y.push(T);
    const te = Se(L, Float64Array, $.HEAPF64);
    y.push(te);
    const z = (b) => {
      const E = b ? Array.from(b.keys()) : [], F = b ? Array.from(b.values()) : [], B = Se(E, Uint32Array, $.HEAPU32);
      y.push(B);
      const we = Se(F, Float64Array, $.HEAPF64);
      return y.push(we), {
        keysPtr: B,
        valuesPtr: we,
        size: E.length
      };
    }, d = z(_.elasticities), X = z(_.elasticitiesOrthogonal), ne = z(_.areas), Q = z(_.momentsOfInertiaZ), oe = z(_.momentsOfInertiaY), P = z(_.shearModuli), Z = z(_.torsionalConstants), N = z(_.thicknesses), ue = z(_.poissonsRatios), le = $._malloc(4);
    y.push(le);
    const pe = $._malloc(4);
    y.push(pe);
    const ce = $._malloc(4);
    y.push(ce);
    const V = $._malloc(4);
    y.push(V), $._deform(w, f.length, D, j.length, I, v.length, q, C, G.length, T, te, x.length, d.keysPtr, d.valuesPtr, d.size, ne.keysPtr, ne.valuesPtr, ne.size, Q.keysPtr, Q.valuesPtr, Q.size, oe.keysPtr, oe.valuesPtr, oe.size, P.keysPtr, P.valuesPtr, P.size, Z.keysPtr, Z.valuesPtr, Z.size, N.keysPtr, N.valuesPtr, N.size, ue.keysPtr, ue.valuesPtr, ue.size, X.keysPtr, X.valuesPtr, X.size, le, pe, ce, V);
    const Y = $.HEAPU32[le / 4], fe = $.HEAPU32[pe / 4], p = $.HEAPU32[ce / 4], U = $.HEAPU32[V / 4], se = new Float64Array($.HEAPF64.buffer, Y, fe), J = new Float64Array($.HEAPF64.buffer, p, U), ve = /* @__PURE__ */ new Map();
    for (let b = 0; b < fe; b += 7) {
      const E = se[b];
      ve.set(E, Array.from(se.slice(b + 1, b + 7)));
    }
    const _e = /* @__PURE__ */ new Map();
    for (let b = 0; b < U; b += 7) {
      const E = J[b];
      _e.set(E, Array.from(J.slice(b + 1, b + 7)));
    }
    return Y && y.push(Y), p && y.push(p), y.forEach((b) => $._free(b)), {
      deformations: ve,
      reactions: _e
    };
  };
  function Se(f, v, l) {
    const _ = new v(f), y = $._malloc(_.length * _.BYTES_PER_ELEMENT);
    return l.set(_, y / _.BYTES_PER_ELEMENT), y;
  }
  const M = await We();
  it = function(f, v, l, _, y = 10) {
    if (f.length === 0) return {
      frequencies: [],
      modeShapes: [],
      massParticipation: []
    };
    const w = [], j = be(f.flat(), Float64Array, M.HEAPF64);
    w.push(j);
    const D = v.flat(), re = be(D, Uint32Array, M.HEAPU32);
    w.push(re);
    const I = v.map((F) => F.length), G = be(I, Uint32Array, M.HEAPU32);
    w.push(G);
    const ie = l.supports ? Array.from(l.supports.keys()) : [], q = l.supports ? Array.from(l.supports.values()).flat().map((F) => F ? 1 : 0) : [], C = be(ie, Uint32Array, M.HEAPU32);
    w.push(C);
    const x = be(q, Uint8Array, M.HEAPU8);
    w.push(x);
    const L = (F) => {
      const B = F ? Array.from(F.keys()) : [], we = F ? Array.from(F.values()) : [], R = be(B, Uint32Array, M.HEAPU32);
      w.push(R);
      const H = be(we, Float64Array, M.HEAPF64);
      return w.push(H), {
        keysPtr: R,
        valuesPtr: H,
        size: B.length
      };
    }, T = L(_.elasticities), te = L(_.areas), z = L(_.momentsOfInertiaZ), d = L(_.momentsOfInertiaY), X = L(_.shearModuli), ne = L(_.torsionalConstants), Q = L(_.densities), oe = M._malloc(4);
    w.push(oe);
    const P = M._malloc(4);
    w.push(P);
    const Z = M._malloc(4);
    w.push(Z);
    const N = M._malloc(4);
    w.push(N);
    const ue = M._malloc(4);
    w.push(ue);
    const le = M._malloc(4);
    w.push(le);
    const pe = M._malloc(4);
    w.push(pe);
    const ce = M._malloc(4);
    w.push(ce), M._modal(j, f.length, re, D.length, G, v.length, C, x, ie.length, T.keysPtr, T.valuesPtr, T.size, te.keysPtr, te.valuesPtr, te.size, z.keysPtr, z.valuesPtr, z.size, d.keysPtr, d.valuesPtr, d.size, X.keysPtr, X.valuesPtr, X.size, ne.keysPtr, ne.valuesPtr, ne.size, Q.keysPtr, Q.valuesPtr, Q.size, y, oe, P, Z, N, ue, le, pe, ce);
    const V = M.HEAPU32[oe / 4], Y = M.HEAPU32[P / 4], fe = M.HEAPU32[Z / 4], p = M.HEAPU32[N / 4], U = M.HEAPU32[ue / 4], se = M.HEAPU32[le / 4], J = M.HEAPU32[pe / 4], ve = M.HEAPU32[ce / 4];
    let _e = [], b = [], E = [];
    if (Y > 0 && V) {
      const F = new Float64Array(M.HEAPF64.buffer, V, Y);
      _e = Array.from(F), w.push(V);
    }
    if (p > 0 && U > 0 && fe) {
      const F = new Float64Array(M.HEAPF64.buffer, fe, p * U);
      for (let B = 0; B < p; B++) b.push(Array.from(F.slice(B * U, (B + 1) * U)));
      w.push(fe);
    }
    if (J > 0 && ve > 0 && se) {
      const F = new Float64Array(M.HEAPF64.buffer, se, J * ve);
      for (let B = 0; B < J; B++) E.push(Array.from(F.slice(B * ve, (B + 1) * ve)));
      w.push(se);
    }
    return w.forEach((F) => M._free(F)), {
      frequencies: _e,
      modeShapes: b,
      massParticipation: E
    };
  };
  function be(f, v, l) {
    const _ = new v(f), y = M._malloc(_.length * _.BYTES_PER_ELEMENT);
    return l.set(_, y / _.BYTES_PER_ELEMENT), y;
  }
  await We();
  const ye = await We();
  lt = function(f) {
    const { nodes: v, elements: l, E: _, nu: y, gamma: w, c: j, phi: D, thickness: re = 1, supports: I, surcharge: G = 0, surfaceYThreshold: ie = -1e10 } = f, q = [], C = v.flat(), x = at(C);
    q.push(x);
    const L = l.flat(), T = hr(L);
    q.push(T);
    const te = [];
    for (const N of I) te.push(N.node, N.fixX ? 1 : 0, N.fixY ? 1 : 0);
    const z = hr(te);
    q.push(z);
    const d = l.length, X = v.length, ne = ye._slopeAllocDouble(d);
    q.push(ne);
    const Q = ye._slopeAllocDouble(X * 2);
    q.push(Q);
    const oe = ye._slopeStabilitySolver(x, X, T, d, _, y, w, j, D, re, z, I.length, G, ie, ne, Q), P = [];
    for (let N = 0; N < d; N++) P.push(ye.HEAPF64[ne / 8 + N]);
    const Z = [];
    for (let N = 0; N < X; N++) Z.push([
      ye.HEAPF64[Q / 8 + 2 * N],
      ye.HEAPF64[Q / 8 + 2 * N + 1]
    ]);
    return q.forEach((N) => ye._free(N)), {
      fos: oe,
      plasticStrain: P,
      displacements: Z
    };
  };
  function at(f) {
    const v = new Float64Array(f), l = ye._malloc(v.length * v.BYTES_PER_ELEMENT);
    return ye.HEAPF64.set(v, l / 8), l;
  }
  function hr(f) {
    const v = new Uint32Array(f), l = ye._malloc(v.length * v.BYTES_PER_ELEMENT);
    return ye.HEAPU32.set(v, l / 4), l;
  }
  const ee = await We();
  function He(f, v, l) {
    const _ = new v(f), y = ee._malloc(_.length * _.BYTES_PER_ELEMENT);
    return l.set(_, y / _.BYTES_PER_ELEMENT), y;
  }
  ct = function(f) {
    const v = [];
    let l = [], _ = 0;
    f.nodes && f.nodes.length > 0 && (_ = f.nodes.length, l = f.nodes.flat());
    const y = He(l.length > 0 ? l : [
      0
    ], Float64Array, ee.HEAPF64);
    v.push(y);
    let w = [], j = 0;
    f.elements && f.elements.length > 0 && (j = f.elements.length, w = f.elements.flat());
    const D = He(w.length > 0 ? w : [
      0
    ], Int32Array, ee.HEAPU32);
    v.push(D);
    let re = [], I = 0;
    f.bcs && f.bcs.length > 0 && (I = f.bcs.length, re = f.bcs.flatMap((R) => [
      R.node,
      R.dof,
      R.value
    ]));
    const G = He(re.length > 0 ? re : [
      0
    ], Float64Array, ee.HEAPF64);
    v.push(G);
    let ie = [], q = 0;
    f.pointLoads && f.pointLoads.length > 0 && (q = f.pointLoads.length, ie = f.pointLoads.flatMap((R) => [
      R.node,
      R.dof,
      R.value
    ]));
    const C = He(ie.length > 0 ? ie : [
      0
    ], Float64Array, ee.HEAPF64);
    v.push(C);
    const x = f.meshLx ?? 0, L = f.meshLy ?? 0, T = f.meshNx ?? 0, te = f.meshNy ?? 0, d = {
      none: 0,
      "simply-supported": 1,
      clamped: 2
    }[f.bcType ?? "none"] ?? 0, X = f.theoryType ?? 0;
    let ne = [], Q = 0;
    f.springs && f.springs.length > 0 && (Q = f.springs.length, ne = f.springs.flatMap((R) => [
      R.node,
      R.dof,
      R.k
    ]));
    const oe = He(ne.length > 0 ? ne : [
      0
    ], Float64Array, ee.HEAPF64);
    v.push(oe);
    const P = ee._malloc(4);
    v.push(P);
    const Z = ee._malloc(4);
    v.push(Z);
    const N = ee._malloc(4);
    v.push(N);
    const ue = ee._malloc(4);
    v.push(ue), ee._plate_q4_solve(y, _, D, j, f.E, f.nu, f.thickness, G, I, f.pressure ?? 0, C, q, x, L, T, te, d, X, oe, Q, P, Z, N, ue);
    const le = ee.HEAPU32[P / 4], pe = ee.HEAPU32[Z / 4], ce = ee.HEAPU32[N / 4], V = ee.HEAPU32[ue / 4], Y = new Float64Array(ee.HEAPF64.buffer, le, pe), fe = Y[0], p = Y[1], U = [];
    let se = 0;
    for (let R = 0; R < fe; R++) {
      const H = 2 + R * 5, K = {
        x: Y[H],
        y: Y[H + 1],
        w: Y[H + 2],
        bx: Y[H + 3],
        by: Y[H + 4]
      };
      U.push(K), Math.abs(K.w) > Math.abs(se) && (se = K.w);
    }
    const J = new Float64Array(ee.HEAPF64.buffer, ce, V), ve = [];
    let _e = 0, b = 0, E = 0, F = 0, B = 0;
    for (let R = 0; R < p; R++) {
      const H = R * 9, K = {
        nodes: [
          J[H],
          J[H + 1],
          J[H + 2],
          J[H + 3]
        ],
        Mxx: J[H + 4],
        Myy: J[H + 5],
        Mxy: J[H + 6],
        Qx: J[H + 7],
        Qy: J[H + 8]
      };
      ve.push(K), Math.abs(K.Mxx) > Math.abs(_e) && (_e = K.Mxx), Math.abs(K.Myy) > Math.abs(b) && (b = K.Myy), Math.abs(K.Mxy) > Math.abs(E) && (E = K.Mxy), Math.abs(K.Qx) > Math.abs(F) && (F = K.Qx), Math.abs(K.Qy) > Math.abs(B) && (B = K.Qy);
    }
    let we;
    if (x > 0 && L > 0) {
      const R = x / 2, H = L / 2;
      let K = 1 / 0;
      for (const Oe of U) {
        const $e = Math.hypot(Oe.x - R, Oe.y - H);
        $e < K && (K = $e, we = Oe.w);
      }
    }
    return le && v.push(le), ce && v.push(ce), v.forEach((R) => ee._free(R)), {
      nodeResults: U,
      elementResults: ve,
      maxW: se,
      maxMxx: _e,
      maxMyy: b,
      maxMxy: E,
      maxQx: F,
      maxQy: B,
      centerW: we
    };
  };
})();
export {
  We as M,
  ot as _,
  __tla,
  st as d,
  it as m,
  ct as p,
  lt as s
};
