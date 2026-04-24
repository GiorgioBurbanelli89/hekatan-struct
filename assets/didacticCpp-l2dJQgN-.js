var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
let xe, it, ht, dt, ft, mt, ut;
let __tla = (async () => {
  let st, at, yr;
  st = "modulepreload";
  at = function(f) {
    return "/hekatan-struct/" + f;
  };
  yr = {};
  it = function(p, a, m) {
    let v = Promise.resolve();
    if (a && a.length > 0) {
      document.getElementsByTagName("link");
      const W = document.querySelector("meta[property=csp-nonce]"), D = (W == null ? void 0 : W.nonce) || (W == null ? void 0 : W.getAttribute("nonce"));
      v = Promise.allSettled(a.map((U) => {
        if (U = at(U), U in yr) return;
        yr[U] = true;
        const Q = U.endsWith(".css"), ee = Q ? '[rel="stylesheet"]' : "";
        if (document.querySelector(`link[href="${U}"]${ee}`)) return;
        const $ = document.createElement("link");
        if ($.rel = Q ? "stylesheet" : st, Q || ($.as = "script"), $.crossOrigin = "", $.href = U, D && $.setAttribute("nonce", D), document.head.appendChild($), Q) return new Promise((K, J) => {
          $.addEventListener("load", K), $.addEventListener("error", () => J(new Error(`Unable to preload CSS for ${U}`)));
        });
      }));
    }
    function h(W) {
      const D = new Event("vite:preloadError", {
        cancelable: true
      });
      if (D.payload = W, window.dispatchEvent(D), !D.defaultPrevented) throw W;
    }
    return v.then((W) => {
      for (const D of W || []) D.status === "rejected" && h(D.reason);
      return p().catch(h);
    });
  };
  xe = async function(f = {}) {
    var _a, _b, _c, _d, _e, _f;
    var p;
    (function() {
      var _a2;
      function e(u) {
        u = u.split("-")[0];
        for (var y = u.split(".").slice(0, 3); y.length < 3; ) y.push("00");
        return y = y.map((N, C, g) => N.padStart(2, "0")), y.join("");
      }
      var r = (u) => [
        u / 1e4 | 0,
        (u / 100 | 0) % 100,
        u % 100
      ].join("."), t = 2147483647, o = typeof process < "u" && ((_a2 = process.versions) == null ? void 0 : _a2.node) ? e(process.versions.node) : t;
      if (o < 16e4) throw new Error(`This emscripten-generated code requires node v${r(16e4)} (detected v${r(o)})`);
      var s = typeof navigator < "u" && navigator.userAgent;
      if (s) {
        var i = s.includes("Safari/") && !s.includes("Chrome/") && s.match(/Version\/(\d+\.?\d*\.?\d*)/) ? e(s.match(/Version\/(\d+\.?\d*\.?\d*)/)[1]) : t;
        if (i < 15e4) throw new Error(`This emscripten-generated code requires Safari v${r(15e4)} (detected v${i})`);
        var l = s.match(/Firefox\/(\d+(?:\.\d+)?)/) ? parseFloat(s.match(/Firefox\/(\d+(?:\.\d+)?)/)[1]) : t;
        if (l < 79) throw new Error(`This emscripten-generated code requires Firefox v79 (detected v${l})`);
        var c = s.match(/Chrome\/(\d+(?:\.\d+)?)/) ? parseFloat(s.match(/Chrome\/(\d+(?:\.\d+)?)/)[1]) : t;
        if (c < 85) throw new Error(`This emscripten-generated code requires Chrome v85 (detected v${c})`);
      }
    })();
    var a = f, m = !!globalThis.window, v = !!globalThis.WorkerGlobalScope, h = ((_b = (_a = globalThis.process) == null ? void 0 : _a.versions) == null ? void 0 : _b.node) && ((_c = globalThis.process) == null ? void 0 : _c.type) != "renderer", W = !m && !h && !v;
    if (h) {
      const { createRequire: e } = await it(() => import("./__vite-browser-external-D7Ct-6yo.js").then((r) => r._), []);
      var D = e(import.meta.url);
    }
    var U = "./this.program", Q = import.meta.url, ee = "";
    function $(e) {
      return a.locateFile ? a.locateFile(e, ee) : ee + e;
    }
    var K, J;
    if (h) {
      if (!(((_e = (_d = globalThis.process) == null ? void 0 : _d.versions) == null ? void 0 : _e.node) && ((_f = globalThis.process) == null ? void 0 : _f.type) != "renderer")) throw new Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)");
      var w = D("fs");
      Q.startsWith("file:") && (ee = D("path").dirname(D("url").fileURLToPath(Q)) + "/"), J = (r) => {
        r = L(r) ? new URL(r) : r;
        var t = w.readFileSync(r);
        return d(Buffer.isBuffer(t)), t;
      }, K = async (r, t = true) => {
        r = L(r) ? new URL(r) : r;
        var o = w.readFileSync(r, t ? void 0 : "utf8");
        return d(t ? Buffer.isBuffer(o) : typeof o == "string"), o;
      }, process.argv.length > 1 && (U = process.argv[1].replace(/\\/g, "/")), process.argv.slice(2);
    } else if (!W) if (m || v) {
      try {
        ee = new URL(".", Q).href;
      } catch {
      }
      if (!(globalThis.window || globalThis.WorkerGlobalScope)) throw new Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)");
      v && (J = (e) => {
        var r = new XMLHttpRequest();
        return r.open("GET", e, false), r.responseType = "arraybuffer", r.send(null), new Uint8Array(r.response);
      }), K = async (e) => {
        if (L(e)) return new Promise((t, o) => {
          var s = new XMLHttpRequest();
          s.open("GET", e, true), s.responseType = "arraybuffer", s.onload = () => {
            if (s.status == 200 || s.status == 0 && s.response) {
              t(s.response);
              return;
            }
            o(s.status);
          }, s.onerror = o, s.send(null);
        });
        var r = await fetch(e, {
          credentials: "same-origin"
        });
        if (r.ok) return r.arrayBuffer();
        throw new Error(r.status + " : " + r.url);
      };
    } else throw new Error("environment detection error");
    var F = console.log.bind(console), S = console.error.bind(console);
    d(!W, "shell environment detected but not enabled at build time.  Add `shell` to `-sENVIRONMENT` to enable.");
    var E;
    globalThis.WebAssembly || S("no native wasm support detected");
    var H = false;
    function d(e, r) {
      e || A("Assertion failed" + (r ? ": " + r : ""));
    }
    var L = (e) => e.startsWith("file://");
    function x() {
      var e = sr();
      d((e & 3) == 0), e == 0 && (e += 4), _[e >> 2] = 34821223, _[e + 4 >> 2] = 2310721022, _[0] = 1668509029;
    }
    function X() {
      if (!H) {
        var e = sr();
        e == 0 && (e += 4);
        var r = _[e >> 2], t = _[e + 4 >> 2];
        (r != 34821223 || t != 2310721022) && A(`Stack overflow! Stack cookie has been overwritten at ${We(e)}, expected hex dwords 0x89BACDFE and 0x2135467, but received ${We(t)} ${We(r)}`), _[0] != 1668509029 && A("Runtime error: The application has corrupted its heap memory area (address zero)!");
      }
    }
    (() => {
      var e = new Int16Array(1), r = new Int8Array(e.buffer);
      e[0] = 25459, (r[0] !== 115 || r[1] !== 99) && A("Runtime error: expected the system to be little-endian! (Run with -sSUPPORT_BIG_ENDIAN to bypass)");
    })();
    function re(e) {
      Object.getOwnPropertyDescriptor(a, e) || Object.defineProperty(a, e, {
        configurable: true,
        set() {
          A(`Attempt to set \`Module.${e}\` after it has already been processed.  This can happen, for example, when code is injected via '--post-js' rather than '--pre-js'`);
        }
      });
    }
    function k(e) {
      return () => d(false, `call to '${e}' via reference taken before Wasm module initialization`);
    }
    function ae(e) {
      Object.getOwnPropertyDescriptor(a, e) && A(`\`Module.${e}\` was supplied but \`${e}\` not included in INCOMING_MODULE_JS_API`);
    }
    function O(e) {
      return e === "FS_createPath" || e === "FS_createDataFile" || e === "FS_createPreloadedFile" || e === "FS_preloadFile" || e === "FS_unlink" || e === "addRunDependency" || e === "FS_createLazyFile" || e === "FS_createDevice" || e === "removeRunDependency";
    }
    function ce(e) {
      ie(e);
    }
    function ie(e) {
      Object.getOwnPropertyDescriptor(a, e) || Object.defineProperty(a, e, {
        configurable: true,
        get() {
          var r = `'${e}' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the Emscripten FAQ)`;
          O(e) && (r += ". Alternatively, forcing filesystem support (-sFORCE_FILESYSTEM) can export this for you"), A(r);
        }
      });
    }
    var me, he, j, de, le, _, M, pe = false;
    function ve() {
      var e = Qe.buffer;
      j = new Int8Array(e), a.HEAPU8 = de = new Uint8Array(e), le = new Int32Array(e), a.HEAPU32 = _ = new Uint32Array(e), a.HEAPF64 = new Float64Array(e), M = new BigInt64Array(e), new BigUint64Array(e);
    }
    d(globalThis.Int32Array && globalThis.Float64Array && Int32Array.prototype.subarray && Int32Array.prototype.set, "JS engine does not provide full typed array support");
    function Ee() {
      if (a.preRun) for (typeof a.preRun == "function" && (a.preRun = [
        a.preRun
      ]); a.preRun.length; ) Xe(a.preRun.shift());
      re("preRun"), T(Be);
    }
    function fe() {
      d(!pe), pe = true, X(), !a.noFSInit && !n.initialized && n.init(), Ie.__wasm_call_ctors(), n.ignorePermissions = false;
    }
    function ne() {
      if (X(), a.postRun) for (typeof a.postRun == "function" && (a.postRun = [
        a.postRun
      ]); a.postRun.length; ) er(a.postRun.shift());
      re("postRun"), T(ke);
    }
    function A(e) {
      var _a2;
      (_a2 = a.onAbort) == null ? void 0 : _a2.call(a, e), e = "Aborted(" + e + ")", S(e), H = true;
      var r = new WebAssembly.RuntimeError(e);
      throw he == null ? void 0 : he(r), r;
    }
    function I(e, r) {
      return (...t) => {
        d(pe, `native function \`${e}\` called before runtime initialization`);
        var o = Ie[e];
        return d(o, `exported native function \`${e}\` not found`), d(t.length <= r, `native function \`${e}\` called with ${t.length} args but expects ${r}`), o(...t);
      };
    }
    var ye;
    function oe() {
      return a.locateFile ? $("deform.wasm") : new URL("/hekatan-struct/assets/deform-ZxzpbT6G.wasm", import.meta.url).href;
    }
    function ge(e) {
      if (e == ye && E) return new Uint8Array(E);
      if (J) return J(e);
      throw "both async and sync fetching of the wasm failed";
    }
    async function G(e) {
      if (!E) try {
        var r = await K(e);
        return new Uint8Array(r);
      } catch {
      }
      return ge(e);
    }
    async function te(e, r) {
      try {
        var t = await G(e), o = await WebAssembly.instantiate(t, r);
        return o;
      } catch (s) {
        S(`failed to asynchronously prepare wasm: ${s}`), L(e) && S(`warning: Loading from a file URI (${e}) is not supported in most browsers. See https://emscripten.org/docs/getting_started/FAQ.html#how-do-i-run-a-local-webserver-for-testing-why-does-my-program-stall-in-downloading-or-preparing`), A(s);
      }
    }
    async function R(e, r, t) {
      if (!e && !L(r) && !h) try {
        var o = fetch(r, {
          credentials: "same-origin"
        }), s = await WebAssembly.instantiateStreaming(o, t);
        return s;
      } catch (i) {
        S(`wasm streaming compile failed: ${i}`), S("falling back to ArrayBuffer instantiation");
      }
      return te(r, t);
    }
    function Z() {
      var e = {
        env: _r,
        wasi_snapshot_preview1: _r
      };
      return e;
    }
    async function q() {
      function e(l, c) {
        return Ie = l.exports, nt(Ie), ve(), Ie;
      }
      var r = a;
      function t(l) {
        return d(a === r, "the Module object should not be replaced during async compilation - perhaps the order of HTML elements is wrong?"), r = null, e(l.instance);
      }
      var o = Z();
      if (a.instantiateWasm) return new Promise((l, c) => {
        try {
          a.instantiateWasm(o, (u, y) => {
            l(e(u, y));
          });
        } catch (u) {
          S(`Module.instantiateWasm callback failed with error: ${u}`), c(u);
        }
      });
      ye ?? (ye = oe());
      var s = await R(E, ye, o), i = t(s);
      return i;
    }
    var T = (e) => {
      for (; e.length > 0; ) e.shift()(a);
    }, ke = [], er = (e) => ke.push(e), Be = [], Xe = (e) => Be.push(e), We = (e) => (d(typeof e == "number", `ptrToString expects a number, got ${typeof e}`), e >>>= 0, "0x" + e.toString(16).padStart(8, "0")), $e = (e) => {
      $e.shown || ($e.shown = {}), $e.shown[e] || ($e.shown[e] = 1, h && (e = "warning: " + e), S(e));
    }, ir = globalThis.TextDecoder && new TextDecoder(), wr = (e, r, t, o) => {
      for (var s = r + t; e[r] && !(r >= s); ) ++r;
      return r;
    }, Ce = (e, r = 0, t, o) => {
      var s = wr(e, r, t);
      if (s - r > 16 && e.buffer && ir) return ir.decode(e.subarray(r, s));
      for (var i = ""; r < s; ) {
        var l = e[r++];
        if (!(l & 128)) {
          i += String.fromCharCode(l);
          continue;
        }
        var c = e[r++] & 63;
        if ((l & 224) == 192) {
          i += String.fromCharCode((l & 31) << 6 | c);
          continue;
        }
        var u = e[r++] & 63;
        if ((l & 240) == 224 ? l = (l & 15) << 12 | c << 6 | u : ((l & 248) != 240 && $e("Invalid UTF-8 leading byte " + We(l) + " encountered when deserializing a UTF-8 string in wasm memory to a JS string!"), l = (l & 7) << 18 | c << 12 | u << 6 | e[r++] & 63), l < 65536) i += String.fromCharCode(l);
        else {
          var y = l - 65536;
          i += String.fromCharCode(55296 | y >> 10, 56320 | y & 1023);
        }
      }
      return i;
    }, je = (e, r, t) => (d(typeof e == "number", `UTF8ToString expects a number (got ${typeof e})`), e ? Ce(de, e, r) : ""), Sr = (e, r, t, o) => A(`Assertion failed: ${je(e)}, at: ` + [
      r ? je(r) : "unknown filename",
      t,
      o ? je(o) : "unknown function"
    ]);
    class Fr {
      constructor(r) {
        this.excPtr = r, this.ptr = r - 24;
      }
      set_type(r) {
        _[this.ptr + 4 >> 2] = r;
      }
      get_type() {
        return _[this.ptr + 4 >> 2];
      }
      set_destructor(r) {
        _[this.ptr + 8 >> 2] = r;
      }
      get_destructor() {
        return _[this.ptr + 8 >> 2];
      }
      set_caught(r) {
        r = r ? 1 : 0, j[this.ptr + 12] = r;
      }
      get_caught() {
        return j[this.ptr + 12] != 0;
      }
      set_rethrown(r) {
        r = r ? 1 : 0, j[this.ptr + 13] = r;
      }
      get_rethrown() {
        return j[this.ptr + 13] != 0;
      }
      init(r, t) {
        this.set_adjusted_ptr(0), this.set_type(r), this.set_destructor(t);
      }
      set_adjusted_ptr(r) {
        _[this.ptr + 16 >> 2] = r;
      }
      get_adjusted_ptr() {
        return _[this.ptr + 16 >> 2];
      }
    }
    var Pr = (e, r, t) => {
      var o = new Fr(e);
      o.init(r, t), d(false, "Exception thrown, but exception catching is not enabled. Compile with -sNO_DISABLE_EXCEPTION_CATCHING or -sEXCEPTION_CATCHING_ALLOWED=[..] to catch.");
    }, kr = () => A("native code called abort()"), lr = (e, r, t, o) => {
      if (d(typeof e == "string", `stringToUTF8Array expects a string (got ${typeof e})`), !(o > 0)) return 0;
      for (var s = t, i = t + o - 1, l = 0; l < e.length; ++l) {
        var c = e.codePointAt(l);
        if (c <= 127) {
          if (t >= i) break;
          r[t++] = c;
        } else if (c <= 2047) {
          if (t + 1 >= i) break;
          r[t++] = 192 | c >> 6, r[t++] = 128 | c & 63;
        } else if (c <= 65535) {
          if (t + 2 >= i) break;
          r[t++] = 224 | c >> 12, r[t++] = 128 | c >> 6 & 63, r[t++] = 128 | c & 63;
        } else {
          if (t + 3 >= i) break;
          c > 1114111 && $e("Invalid Unicode code point " + We(c) + " encountered when serializing a JS string to a UTF-8 string in wasm memory! (Valid unicode code points should be in range 0-0x10FFFF)."), r[t++] = 240 | c >> 18, r[t++] = 128 | c >> 12 & 63, r[t++] = 128 | c >> 6 & 63, r[t++] = 128 | c & 63, l++;
        }
      }
      return r[t] = 0, t - s;
    }, Ge = (e, r, t) => (d(typeof t == "number", "stringToUTF8(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!"), lr(e, de, r, t)), Ze = (e) => {
      for (var r = 0, t = 0; t < e.length; ++t) {
        var o = e.charCodeAt(t);
        o <= 127 ? r++ : o <= 2047 ? r += 2 : o >= 55296 && o <= 57343 ? (r += 4, ++t) : r += 3;
      }
      return r;
    }, Ar = (e, r, t, o) => {
      var s = (/* @__PURE__ */ new Date()).getFullYear(), i = new Date(s, 0, 1), l = new Date(s, 6, 1), c = i.getTimezoneOffset(), u = l.getTimezoneOffset(), y = Math.max(c, u);
      _[e >> 2] = y * 60, le[r >> 2] = +(c != u);
      var N = (b) => {
        var se = b >= 0 ? "-" : "+", Fe = Math.abs(b), Pe = String(Math.floor(Fe / 60)).padStart(2, "0"), we = String(Fe % 60).padStart(2, "0");
        return `UTC${se}${Pe}${we}`;
      }, C = N(c), g = N(u);
      d(C), d(g), d(Ze(C) <= 16, `timezone name truncated to fit in TZNAME_MAX (${C})`), d(Ze(g) <= 16, `timezone name truncated to fit in TZNAME_MAX (${g})`), u < c ? (Ge(C, t, 17), Ge(g, o, 17)) : (Ge(C, o, 17), Ge(g, t, 17));
    }, br = () => 2147483648, Tr = (e, r) => (d(r, "alignment argument is required"), Math.ceil(e / r) * r), Or = (e) => {
      var r = Qe.buffer.byteLength, t = (e - r + 65535) / 65536 | 0;
      try {
        return Qe.grow(t), ve(), 1;
      } catch (o) {
        S(`growMemory: Attempted to grow heap from ${r} bytes to ${e} bytes, but got error: ${o}`);
      }
    }, Mr = (e) => {
      var r = de.length;
      e >>>= 0, d(e > r);
      var t = br();
      if (e > t) return S(`Cannot enlarge memory, requested ${e} bytes, but the limit is ${t} bytes!`), false;
      for (var o = 1; o <= 4; o *= 2) {
        var s = r * (1 + 0.2 / o);
        s = Math.min(s, e + 100663296);
        var i = Math.min(t, Tr(Math.max(e, s), 65536)), l = Or(i);
        if (l) return true;
      }
      return S(`Failed to grow the heap from ${r} bytes to ${i} bytes, not enough memory!`), false;
    }, rr = {}, Rr = () => U || "./this.program", Ve = () => {
      var _a2;
      if (!Ve.strings) {
        var e = (((_a2 = globalThis.navigator) == null ? void 0 : _a2.language) ?? "C").replace("-", "_") + ".UTF-8", r = {
          USER: "web_user",
          LOGNAME: "web_user",
          PATH: "/",
          PWD: "/",
          HOME: "/home/web_user",
          LANG: e,
          _: Rr()
        };
        for (var t in rr) rr[t] === void 0 ? delete r[t] : r[t] = rr[t];
        var o = [];
        for (var t in r) o.push(`${t}=${r[t]}`);
        Ve.strings = o;
      }
      return Ve.strings;
    }, Nr = (e, r) => {
      var t = 0, o = 0;
      for (var s of Ve()) {
        var i = r + t;
        _[e + o >> 2] = i, t += Ge(s, i, 1 / 0) + 1, o += 4;
      }
      return 0;
    }, Dr = (e, r) => {
      var t = Ve();
      _[e >> 2] = t.length;
      var o = 0;
      for (var s of t) o += Ze(s) + 1;
      return _[r >> 2] = o, 0;
    }, B = {
      isAbs: (e) => e.charAt(0) === "/",
      splitPath: (e) => {
        var r = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
        return r.exec(e).slice(1);
      },
      normalizeArray: (e, r) => {
        for (var t = 0, o = e.length - 1; o >= 0; o--) {
          var s = e[o];
          s === "." ? e.splice(o, 1) : s === ".." ? (e.splice(o, 1), t++) : t && (e.splice(o, 1), t--);
        }
        if (r) for (; t; t--) e.unshift("..");
        return e;
      },
      normalize: (e) => {
        var r = B.isAbs(e), t = e.slice(-1) === "/";
        return e = B.normalizeArray(e.split("/").filter((o) => !!o), !r).join("/"), !e && !r && (e = "."), e && t && (e += "/"), (r ? "/" : "") + e;
      },
      dirname: (e) => {
        var r = B.splitPath(e), t = r[0], o = r[1];
        return !t && !o ? "." : (o && (o = o.slice(0, -1)), t + o);
      },
      basename: (e) => e && e.match(/([^\/]+|\/)\/*$/)[1],
      join: (...e) => B.normalize(e.join("/")),
      join2: (e, r) => B.normalize(e + "/" + r)
    }, Cr = () => {
      if (h) {
        var e = D("crypto");
        return (r) => e.randomFillSync(r);
      }
      return (r) => crypto.getRandomValues(r);
    }, cr = (e) => {
      (cr = Cr())(e);
    }, Ue = {
      resolve: (...e) => {
        for (var r = "", t = false, o = e.length - 1; o >= -1 && !t; o--) {
          var s = o >= 0 ? e[o] : n.cwd();
          if (typeof s != "string") throw new TypeError("Arguments to path.resolve must be strings");
          if (!s) return "";
          r = s + "/" + r, t = B.isAbs(s);
        }
        return r = B.normalizeArray(r.split("/").filter((i) => !!i), !t).join("/"), (t ? "/" : "") + r || ".";
      },
      relative: (e, r) => {
        e = Ue.resolve(e).slice(1), r = Ue.resolve(r).slice(1);
        function t(y) {
          for (var N = 0; N < y.length && y[N] === ""; N++) ;
          for (var C = y.length - 1; C >= 0 && y[C] === ""; C--) ;
          return N > C ? [] : y.slice(N, C - N + 1);
        }
        for (var o = t(e.split("/")), s = t(r.split("/")), i = Math.min(o.length, s.length), l = i, c = 0; c < i; c++) if (o[c] !== s[c]) {
          l = c;
          break;
        }
        for (var u = [], c = l; c < o.length; c++) u.push("..");
        return u = u.concat(s.slice(l)), u.join("/");
      }
    }, tr = [], nr = (e, r, t) => {
      var o = Ze(e) + 1, s = new Array(o), i = lr(e, s, 0, s.length);
      return s.length = i, s;
    }, Ur = () => {
      var _a2;
      if (!tr.length) {
        var e = null;
        if (h) {
          var r = 256, t = Buffer.alloc(r), o = 0, s = process.stdin.fd;
          try {
            o = w.readSync(s, t, 0, r);
          } catch (i) {
            if (i.toString().includes("EOF")) o = 0;
            else throw i;
          }
          o > 0 && (e = t.slice(0, o).toString("utf-8"));
        } else ((_a2 = globalThis.window) == null ? void 0 : _a2.prompt) && (e = window.prompt("Input: "), e !== null && (e += `
`));
        if (!e) return null;
        tr = nr(e);
      }
      return tr.shift();
    }, Re = {
      ttys: [],
      init() {
      },
      shutdown() {
      },
      register(e, r) {
        Re.ttys[e] = {
          input: [],
          output: [],
          ops: r
        }, n.registerDevice(e, Re.stream_ops);
      },
      stream_ops: {
        open(e) {
          var r = Re.ttys[e.node.rdev];
          if (!r) throw new n.ErrnoError(43);
          e.tty = r, e.seekable = false;
        },
        close(e) {
          e.tty.ops.fsync(e.tty);
        },
        fsync(e) {
          e.tty.ops.fsync(e.tty);
        },
        read(e, r, t, o, s) {
          if (!e.tty || !e.tty.ops.get_char) throw new n.ErrnoError(60);
          for (var i = 0, l = 0; l < o; l++) {
            var c;
            try {
              c = e.tty.ops.get_char(e.tty);
            } catch {
              throw new n.ErrnoError(29);
            }
            if (c === void 0 && i === 0) throw new n.ErrnoError(6);
            if (c == null) break;
            i++, r[t + l] = c;
          }
          return i && (e.node.atime = Date.now()), i;
        },
        write(e, r, t, o, s) {
          if (!e.tty || !e.tty.ops.put_char) throw new n.ErrnoError(60);
          try {
            for (var i = 0; i < o; i++) e.tty.ops.put_char(e.tty, r[t + i]);
          } catch {
            throw new n.ErrnoError(29);
          }
          return o && (e.node.mtime = e.node.ctime = Date.now()), i;
        }
      },
      default_tty_ops: {
        get_char(e) {
          return Ur();
        },
        put_char(e, r) {
          r === null || r === 10 ? (F(Ce(e.output)), e.output = []) : r != 0 && e.output.push(r);
        },
        fsync(e) {
          var _a2;
          ((_a2 = e.output) == null ? void 0 : _a2.length) > 0 && (F(Ce(e.output)), e.output = []);
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
          r === null || r === 10 ? (S(Ce(e.output)), e.output = []) : r != 0 && e.output.push(r);
        },
        fsync(e) {
          var _a2;
          ((_a2 = e.output) == null ? void 0 : _a2.length) > 0 && (S(Ce(e.output)), e.output = []);
        }
      }
    }, dr = (e) => {
      A("internal error: mmapAlloc called but `emscripten_builtin_memalign` native symbol not exported");
    }, P = {
      ops_table: null,
      mount(e) {
        return P.createNode(null, "/", 16895, 0);
      },
      createNode(e, r, t, o) {
        if (n.isBlkdev(t) || n.isFIFO(t)) throw new n.ErrnoError(63);
        P.ops_table || (P.ops_table = {
          dir: {
            node: {
              getattr: P.node_ops.getattr,
              setattr: P.node_ops.setattr,
              lookup: P.node_ops.lookup,
              mknod: P.node_ops.mknod,
              rename: P.node_ops.rename,
              unlink: P.node_ops.unlink,
              rmdir: P.node_ops.rmdir,
              readdir: P.node_ops.readdir,
              symlink: P.node_ops.symlink
            },
            stream: {
              llseek: P.stream_ops.llseek
            }
          },
          file: {
            node: {
              getattr: P.node_ops.getattr,
              setattr: P.node_ops.setattr
            },
            stream: {
              llseek: P.stream_ops.llseek,
              read: P.stream_ops.read,
              write: P.stream_ops.write,
              mmap: P.stream_ops.mmap,
              msync: P.stream_ops.msync
            }
          },
          link: {
            node: {
              getattr: P.node_ops.getattr,
              setattr: P.node_ops.setattr,
              readlink: P.node_ops.readlink
            },
            stream: {}
          },
          chrdev: {
            node: {
              getattr: P.node_ops.getattr,
              setattr: P.node_ops.setattr
            },
            stream: n.chrdev_stream_ops
          }
        });
        var s = n.createNode(e, r, t, o);
        return n.isDir(s.mode) ? (s.node_ops = P.ops_table.dir.node, s.stream_ops = P.ops_table.dir.stream, s.contents = {}) : n.isFile(s.mode) ? (s.node_ops = P.ops_table.file.node, s.stream_ops = P.ops_table.file.stream, s.usedBytes = 0, s.contents = null) : n.isLink(s.mode) ? (s.node_ops = P.ops_table.link.node, s.stream_ops = P.ops_table.link.stream) : n.isChrdev(s.mode) && (s.node_ops = P.ops_table.chrdev.node, s.stream_ops = P.ops_table.chrdev.stream), s.atime = s.mtime = s.ctime = Date.now(), e && (e.contents[r] = s, e.atime = e.mtime = e.ctime = s.atime), s;
      },
      getFileDataAsTypedArray(e) {
        return e.contents ? e.contents.subarray ? e.contents.subarray(0, e.usedBytes) : new Uint8Array(e.contents) : new Uint8Array(0);
      },
      expandFileStorage(e, r) {
        var t = e.contents ? e.contents.length : 0;
        if (!(t >= r)) {
          var o = 1024 * 1024;
          r = Math.max(r, t * (t < o ? 2 : 1.125) >>> 0), t != 0 && (r = Math.max(r, 256));
          var s = e.contents;
          e.contents = new Uint8Array(r), e.usedBytes > 0 && e.contents.set(s.subarray(0, e.usedBytes), 0);
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
          r.size !== void 0 && P.resizeFileStorage(e, r.size);
        },
        lookup(e, r) {
          throw new n.ErrnoError(44);
        },
        mknod(e, r, t, o) {
          return P.createNode(e, r, t, o);
        },
        rename(e, r, t) {
          var o;
          try {
            o = n.lookupNode(r, t);
          } catch {
          }
          if (o) {
            if (n.isDir(e.mode)) for (var s in o.contents) throw new n.ErrnoError(55);
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
          var o = P.createNode(e, r, 41471, 0);
          return o.link = t, o;
        },
        readlink(e) {
          if (!n.isLink(e.mode)) throw new n.ErrnoError(28);
          return e.link;
        }
      },
      stream_ops: {
        read(e, r, t, o, s) {
          var i = e.node.contents;
          if (s >= e.node.usedBytes) return 0;
          var l = Math.min(e.node.usedBytes - s, o);
          if (d(l >= 0), l > 8 && i.subarray) r.set(i.subarray(s, s + l), t);
          else for (var c = 0; c < l; c++) r[t + c] = i[s + c];
          return l;
        },
        write(e, r, t, o, s, i) {
          if (d(!(r instanceof ArrayBuffer)), r.buffer === j.buffer && (i = false), !o) return 0;
          var l = e.node;
          if (l.mtime = l.ctime = Date.now(), r.subarray && (!l.contents || l.contents.subarray)) {
            if (i) return d(s === 0, "canOwn must imply no weird position inside the file"), l.contents = r.subarray(t, t + o), l.usedBytes = o, o;
            if (l.usedBytes === 0 && s === 0) return l.contents = r.slice(t, t + o), l.usedBytes = o, o;
            if (s + o <= l.usedBytes) return l.contents.set(r.subarray(t, t + o), s), o;
          }
          if (P.expandFileStorage(l, s + o), l.contents.subarray && r.subarray) l.contents.set(r.subarray(t, t + o), s);
          else for (var c = 0; c < o; c++) l.contents[s + c] = r[t + c];
          return l.usedBytes = Math.max(l.usedBytes, s + o), o;
        },
        llseek(e, r, t) {
          var o = r;
          if (t === 1 ? o += e.position : t === 2 && n.isFile(e.node.mode) && (o += e.node.usedBytes), o < 0) throw new n.ErrnoError(28);
          return o;
        },
        mmap(e, r, t, o, s) {
          if (!n.isFile(e.node.mode)) throw new n.ErrnoError(43);
          var i, l, c = e.node.contents;
          if (!(s & 2) && c && c.buffer === j.buffer) l = false, i = c.byteOffset;
          else {
            if (l = true, i = dr(), !i) throw new n.ErrnoError(48);
            c && ((t > 0 || t + r < c.length) && (c.subarray ? c = c.subarray(t, t + r) : c = Array.prototype.slice.call(c, t, t + r)), j.set(c, i));
          }
          return {
            ptr: i,
            allocated: l
          };
        },
        msync(e, r, t, o, s) {
          return P.stream_ops.write(e, r, 0, o, t, false), 0;
        }
      }
    }, Lr = (e) => {
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
    }, or = (e, r) => {
      var t = 0;
      return e && (t |= 365), r && (t |= 146), t;
    }, Ir = (e) => je(pr(e)), fr = {
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
    }, zr = async (e) => {
      var r = await K(e);
      return d(r, `Loading data file "${e}" failed (no arrayBuffer).`), new Uint8Array(r);
    }, Hr = (...e) => n.createDataFile(...e), xr = (e) => {
      for (var r = e; ; ) {
        if (!Le[e]) return e;
        e = r + Math.random();
      }
    }, Ne = 0, Ye = null, Le = {}, Me = null, Br = (e) => {
      var _a2;
      if (Ne--, (_a2 = a.monitorRunDependencies) == null ? void 0 : _a2.call(a, Ne), d(e, "removeRunDependency requires an ID"), d(Le[e]), delete Le[e], Ne == 0 && (Me !== null && (clearInterval(Me), Me = null), Ye)) {
        var r = Ye;
        Ye = null, r();
      }
    }, Wr = (e) => {
      var _a2, _b2;
      Ne++, (_a2 = a.monitorRunDependencies) == null ? void 0 : _a2.call(a, Ne), d(e, "addRunDependency requires an ID"), d(!Le[e]), Le[e] = 1, Me === null && globalThis.setInterval && (Me = setInterval(() => {
        if (H) {
          clearInterval(Me), Me = null;
          return;
        }
        var r = false;
        for (var t in Le) r || (r = true, S("still waiting on run dependencies:")), S(`dependency: ${t}`);
        r && S("(end of list)");
      }, 1e4), (_b2 = Me.unref) == null ? void 0 : _b2.call(Me));
    }, ur = [], $r = async (e, r) => {
      typeof Browser < "u" && Browser.init();
      for (var t of ur) if (t.canHandle(r)) return d(t.handle.constructor.name === "AsyncFunction", "Filesystem plugin handlers must be async functions (See #24914)"), t.handle(e, r);
      return e;
    }, mr = async (e, r, t, o, s, i, l, c) => {
      var u = r ? Ue.resolve(B.join2(e, r)) : e, y = xr(`cp ${u}`);
      Wr(y);
      try {
        var N = t;
        typeof t == "string" && (N = await zr(t)), N = await $r(N, u), c == null ? void 0 : c(), i || Hr(e, r, N, o, s, l);
      } finally {
        Br(y);
      }
    }, jr = (e, r, t, o, s, i, l, c, u, y) => {
      mr(e, r, t, o, s, c, u, y).then(i).catch(l);
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
      readFiles: {},
      ErrnoError: class extends Error {
        constructor(e) {
          super(pe ? Ir(e) : "");
          __publicField(this, "name", "ErrnoError");
          this.errno = e;
          for (var r in fr) if (fr[r] === e) {
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
        r.follow_mount ?? (r.follow_mount = true), B.isAbs(e) || (e = n.cwd() + "/" + e);
        e: for (var t = 0; t < 40; t++) {
          for (var o = e.split("/").filter((y) => !!y), s = n.root, i = "/", l = 0; l < o.length; l++) {
            var c = l === o.length - 1;
            if (c && r.parent) break;
            if (o[l] !== ".") {
              if (o[l] === "..") {
                if (i = B.dirname(i), n.isRoot(s)) {
                  e = i + "/" + o.slice(l + 1).join("/"), t--;
                  continue e;
                } else s = s.parent;
                continue;
              }
              i = B.join2(i, o[l]);
              try {
                s = n.lookupNode(s, o[l]);
              } catch (y) {
                if ((y == null ? void 0 : y.errno) === 44 && c && r.noent_okay) return {
                  path: i
                };
                throw y;
              }
              if (n.isMountpoint(s) && (!c || r.follow_mount) && (s = s.mounted.root), n.isLink(s.mode) && (!c || r.follow)) {
                if (!s.node_ops.readlink) throw new n.ErrnoError(52);
                var u = s.node_ops.readlink(s);
                B.isAbs(u) || (u = B.dirname(i) + "/" + u), e = u + "/" + o.slice(l + 1).join("/");
                continue e;
              }
            }
          }
          return {
            path: i,
            node: s
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
        for (var o = n.hashName(e.id, r), s = n.nameTable[o]; s; s = s.name_next) {
          var i = s.name;
          if (s.parent.id === e.id && i === r) return s;
        }
        return n.lookup(e, r);
      },
      createNode(e, r, t, o) {
        d(typeof e == "object");
        var s = new n.FSNode(e, r, t, o);
        return n.hashAddNode(s), s;
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
        } catch (i) {
          return i.errno;
        }
        var s = n.nodePermissions(e, "wx");
        if (s) return s;
        if (t) {
          if (!n.isDir(o.mode)) return 54;
          if (n.isRoot(o) || n.getPath(o) === n.cwd()) return 10;
        } else if (n.isDir(o.mode)) return 31;
        return 0;
      },
      mayOpen(e, r) {
        return e ? n.isLink(e.mode) ? 32 : n.isDir(e.mode) && (n.flagsToPermissionString(r) !== "r" || r & 576) ? 31 : n.nodePermissions(e, n.flagsToPermissionString(r)) : 44;
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
        var o = e == null ? void 0 : e.stream_ops.setattr, s = o ? e : r;
        o ?? (o = r.node_ops.setattr), n.checkOpExists(o, 63), o(s, t);
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
        typeof e == "function" && (r = e, e = false), n.syncFSRequests++, n.syncFSRequests > 1 && S(`warning: ${n.syncFSRequests} FS.syncfs operations in flight at once, probably just doing extra work`);
        var t = n.getMounts(n.root.mount), o = 0;
        function s(c) {
          return d(n.syncFSRequests > 0), n.syncFSRequests--, r(c);
        }
        function i(c) {
          if (c) return i.errored ? void 0 : (i.errored = true, s(c));
          ++o >= t.length && s(null);
        }
        for (var l of t) l.type.syncfs ? l.type.syncfs(l, e, i) : i(null);
      },
      mount(e, r, t) {
        if (typeof e == "string") throw e;
        var o = t === "/", s = !t, i;
        if (o && n.root) throw new n.ErrnoError(10);
        if (!o && !s) {
          var l = n.lookupPath(t, {
            follow_mount: false
          });
          if (t = l.path, i = l.node, n.isMountpoint(i)) throw new n.ErrnoError(10);
          if (!n.isDir(i.mode)) throw new n.ErrnoError(54);
        }
        var c = {
          type: e,
          opts: r,
          mountpoint: t,
          mounts: []
        }, u = e.mount(c);
        return u.mount = c, c.root = u, o ? n.root = u : i && (i.mounted = c, i.mount && i.mount.mounts.push(c)), u;
      },
      unmount(e) {
        var r = n.lookupPath(e, {
          follow_mount: false
        });
        if (!n.isMountpoint(r.node)) throw new n.ErrnoError(28);
        var t = r.node, o = t.mounted, s = n.getMounts(o);
        for (var [i, l] of Object.entries(n.nameTable)) for (; l; ) {
          var c = l.name_next;
          s.includes(l.mount) && n.destroyNode(l), l = c;
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
        }), s = o.node, i = B.basename(e);
        if (!i) throw new n.ErrnoError(28);
        if (i === "." || i === "..") throw new n.ErrnoError(20);
        var l = n.mayCreate(s, i);
        if (l) throw new n.ErrnoError(l);
        if (!s.node_ops.mknod) throw new n.ErrnoError(63);
        return s.node_ops.mknod(s, i, r, t);
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
        for (var s of t) if (s) {
          (o || B.isAbs(e)) && (o += "/"), o += s;
          try {
            n.mkdir(o, r);
          } catch (i) {
            if (i.errno != 20) throw i;
          }
        }
      },
      mkdev(e, r, t) {
        return typeof t > "u" && (t = r, r = 438), r |= 8192, n.mknod(e, r, t);
      },
      symlink(e, r) {
        if (!Ue.resolve(e)) throw new n.ErrnoError(44);
        var t = n.lookupPath(r, {
          parent: true
        }), o = t.node;
        if (!o) throw new n.ErrnoError(44);
        var s = B.basename(r), i = n.mayCreate(o, s);
        if (i) throw new n.ErrnoError(i);
        if (!o.node_ops.symlink) throw new n.ErrnoError(63);
        return o.node_ops.symlink(o, s, e);
      },
      rename(e, r) {
        var t = B.dirname(e), o = B.dirname(r), s = B.basename(e), i = B.basename(r), l, c, u;
        if (l = n.lookupPath(e, {
          parent: true
        }), c = l.node, l = n.lookupPath(r, {
          parent: true
        }), u = l.node, !c || !u) throw new n.ErrnoError(44);
        if (c.mount !== u.mount) throw new n.ErrnoError(75);
        var y = n.lookupNode(c, s), N = Ue.relative(e, o);
        if (N.charAt(0) !== ".") throw new n.ErrnoError(28);
        if (N = Ue.relative(r, t), N.charAt(0) !== ".") throw new n.ErrnoError(55);
        var C;
        try {
          C = n.lookupNode(u, i);
        } catch {
        }
        if (y !== C) {
          var g = n.isDir(y.mode), b = n.mayDelete(c, s, g);
          if (b) throw new n.ErrnoError(b);
          if (b = C ? n.mayDelete(u, i, g) : n.mayCreate(u, i), b) throw new n.ErrnoError(b);
          if (!c.node_ops.rename) throw new n.ErrnoError(63);
          if (n.isMountpoint(y) || C && n.isMountpoint(C)) throw new n.ErrnoError(10);
          if (u !== c && (b = n.nodePermissions(c, "w"), b)) throw new n.ErrnoError(b);
          n.hashRemoveNode(y);
          try {
            c.node_ops.rename(y, u, i), y.parent = u;
          } catch (se) {
            throw se;
          } finally {
            n.hashAddNode(y);
          }
        }
      },
      rmdir(e) {
        var r = n.lookupPath(e, {
          parent: true
        }), t = r.node, o = B.basename(e), s = n.lookupNode(t, o), i = n.mayDelete(t, o, true);
        if (i) throw new n.ErrnoError(i);
        if (!t.node_ops.rmdir) throw new n.ErrnoError(63);
        if (n.isMountpoint(s)) throw new n.ErrnoError(10);
        t.node_ops.rmdir(t, o), n.destroyNode(s);
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
        var o = B.basename(e), s = n.lookupNode(t, o), i = n.mayDelete(t, o, false);
        if (i) throw new n.ErrnoError(i);
        if (!t.node_ops.unlink) throw new n.ErrnoError(63);
        if (n.isMountpoint(s)) throw new n.ErrnoError(10);
        t.node_ops.unlink(t, o), n.destroyNode(s);
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
        }), o = t.node, s = n.checkOpExists(o.node_ops.getattr, 63);
        return s(o);
      },
      fstat(e) {
        var r = n.getStreamChecked(e), t = r.node, o = r.stream_ops.getattr, s = o ? r : t;
        return o ?? (o = t.node_ops.getattr), n.checkOpExists(o, 63), o(s);
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
          var s = n.lookupPath(e, {
            follow: !t
          });
          o = s.node;
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
        var s;
        if (typeof e == "string") {
          var i = n.lookupPath(e, {
            follow: !o
          });
          s = i.node;
        } else s = e;
        n.doChown(null, s, o);
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
        }), s = o.node, i = n.checkOpExists(s.node_ops.setattr, 63);
        i(s, {
          atime: r,
          mtime: t
        });
      },
      open(e, r, t = 438) {
        if (e === "") throw new n.ErrnoError(44);
        r = typeof r == "string" ? Lr(r) : r, r & 64 ? t = t & 4095 | 32768 : t = 0;
        var o, s;
        if (typeof e == "object") o = e;
        else {
          s = e.endsWith("/");
          var i = n.lookupPath(e, {
            follow: !(r & 131072),
            noent_okay: true
          });
          o = i.node, e = i.path;
        }
        var l = false;
        if (r & 64) if (o) {
          if (r & 128) throw new n.ErrnoError(20);
        } else {
          if (s) throw new n.ErrnoError(31);
          o = n.mknod(e, t | 511, 0), l = true;
        }
        if (!o) throw new n.ErrnoError(44);
        if (n.isChrdev(o.mode) && (r &= -513), r & 65536 && !n.isDir(o.mode)) throw new n.ErrnoError(54);
        if (!l) {
          var c = n.mayOpen(o, r);
          if (c) throw new n.ErrnoError(c);
        }
        r & 512 && !l && n.truncate(o, 0), r &= -131713;
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
        return u.stream_ops.open && u.stream_ops.open(u), l && n.chmod(o, t & 511), a.logReadFiles && !(r & 1) && (e in n.readFiles || (n.readFiles[e] = 1)), u;
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
      read(e, r, t, o, s) {
        if (d(t >= 0), o < 0 || s < 0) throw new n.ErrnoError(28);
        if (n.isClosed(e)) throw new n.ErrnoError(8);
        if ((e.flags & 2097155) === 1) throw new n.ErrnoError(8);
        if (n.isDir(e.node.mode)) throw new n.ErrnoError(31);
        if (!e.stream_ops.read) throw new n.ErrnoError(28);
        var i = typeof s < "u";
        if (!i) s = e.position;
        else if (!e.seekable) throw new n.ErrnoError(70);
        var l = e.stream_ops.read(e, r, t, o, s);
        return i || (e.position += l), l;
      },
      write(e, r, t, o, s, i) {
        if (d(t >= 0), o < 0 || s < 0) throw new n.ErrnoError(28);
        if (n.isClosed(e)) throw new n.ErrnoError(8);
        if (!(e.flags & 2097155)) throw new n.ErrnoError(8);
        if (n.isDir(e.node.mode)) throw new n.ErrnoError(31);
        if (!e.stream_ops.write) throw new n.ErrnoError(28);
        e.seekable && e.flags & 1024 && n.llseek(e, 0, 2);
        var l = typeof s < "u";
        if (!l) s = e.position;
        else if (!e.seekable) throw new n.ErrnoError(70);
        var c = e.stream_ops.write(e, r, t, o, s, i);
        return l || (e.position += c), c;
      },
      mmap(e, r, t, o, s) {
        if (o & 2 && !(s & 2) && (e.flags & 2097155) !== 2) throw new n.ErrnoError(2);
        if ((e.flags & 2097155) === 1) throw new n.ErrnoError(2);
        if (!e.stream_ops.mmap) throw new n.ErrnoError(43);
        if (!r) throw new n.ErrnoError(28);
        return e.stream_ops.mmap(e, r, t, o, s);
      },
      msync(e, r, t, o, s) {
        return d(t >= 0), e.stream_ops.msync ? e.stream_ops.msync(e, r, t, o, s) : 0;
      },
      ioctl(e, r, t) {
        if (!e.stream_ops.ioctl) throw new n.ErrnoError(59);
        return e.stream_ops.ioctl(e, r, t);
      },
      readFile(e, r = {}) {
        r.flags = r.flags || 0, r.encoding = r.encoding || "binary", r.encoding !== "utf8" && r.encoding !== "binary" && A(`Invalid encoding type "${r.encoding}"`);
        var t = n.open(e, r.flags), o = n.stat(e), s = o.size, i = new Uint8Array(s);
        return n.read(t, i, 0, s, 0), r.encoding === "utf8" && (i = Ce(i)), n.close(t), i;
      },
      writeFile(e, r, t = {}) {
        t.flags = t.flags || 577;
        var o = n.open(e, t.flags, t.mode);
        typeof r == "string" && (r = new Uint8Array(nr(r))), ArrayBuffer.isView(r) ? n.write(o, r, 0, r.byteLength, void 0, t.canOwn) : A("Unsupported data type"), n.close(o);
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
          write: (o, s, i, l, c) => l,
          llseek: () => 0
        }), n.mkdev("/dev/null", n.makedev(1, 3)), Re.register(n.makedev(5, 0), Re.default_tty_ops), Re.register(n.makedev(6, 0), Re.default_tty1_ops), n.mkdev("/dev/tty", n.makedev(5, 0)), n.mkdev("/dev/tty1", n.makedev(6, 0));
        var e = new Uint8Array(1024), r = 0, t = () => (r === 0 && (cr(e), r = e.byteLength), e[--r]);
        n.createDevice("/dev", "random", t), n.createDevice("/dev", "urandom", t), n.mkdir("/dev/shm"), n.mkdir("/dev/shm/tmp");
      },
      createSpecialDirectories() {
        n.mkdir("/proc");
        var e = n.mkdir("/proc/self");
        n.mkdir("/proc/self/fd"), n.mount({
          mount() {
            var r = n.createNode(e, "fd", 16895, 73);
            return r.stream_ops = {
              llseek: P.stream_ops.llseek
            }, r.node_ops = {
              lookup(t, o) {
                var s = +o, i = n.getStreamChecked(s), l = {
                  parent: null,
                  mount: {
                    mountpoint: "fake"
                  },
                  node_ops: {
                    readlink: () => i.path
                  },
                  id: s + 1
                };
                return l.parent = l, l;
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
        var o = n.open("/dev/stdin", 0), s = n.open("/dev/stdout", 1), i = n.open("/dev/stderr", 1);
        d(o.fd === 0, `invalid handle for stdin (${o.fd})`), d(s.fd === 1, `invalid handle for stdout (${s.fd})`), d(i.fd === 2, `invalid handle for stderr (${i.fd})`);
      },
      staticInit() {
        n.nameTable = new Array(4096), n.mount(P, {}, "/"), n.createDefaultDirectories(), n.createDefaultDevices(), n.createSpecialDirectories(), n.filesystems = {
          MEMFS: P
        };
      },
      init(e, r, t) {
        d(!n.initialized, "FS.init was previously called. If you want to initialize later with custom parameters, remove any earlier calls (note that one is automatically added to the generated code)"), n.initialized = true, e ?? (e = a.stdin), r ?? (r = a.stdout), t ?? (t = a.stderr), n.createStandardStreams(e, r, t);
      },
      quit() {
        n.initialized = false, hr(0);
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
          o.parentExists = true, o.parentPath = t.path, o.parentObject = t.node, o.name = B.basename(e), t = n.lookupPath(e, {
            follow: !r
          }), o.exists = true, o.path = t.path, o.object = t.node, o.name = t.node.name, o.isRoot = t.path === "/";
        } catch (s) {
          o.error = s.errno;
        }
        return o;
      },
      createPath(e, r, t, o) {
        e = typeof e == "string" ? e : n.getPath(e);
        for (var s = r.split("/").reverse(); s.length; ) {
          var i = s.pop();
          if (i) {
            var l = B.join2(e, i);
            try {
              n.mkdir(l);
            } catch (c) {
              if (c.errno != 20) throw c;
            }
            e = l;
          }
        }
        return l;
      },
      createFile(e, r, t, o, s) {
        var i = B.join2(typeof e == "string" ? e : n.getPath(e), r), l = or(o, s);
        return n.create(i, l);
      },
      createDataFile(e, r, t, o, s, i) {
        var l = r;
        e && (e = typeof e == "string" ? e : n.getPath(e), l = r ? B.join2(e, r) : e);
        var c = or(o, s), u = n.create(l, c);
        if (t) {
          if (typeof t == "string") {
            for (var y = new Array(t.length), N = 0, C = t.length; N < C; ++N) y[N] = t.charCodeAt(N);
            t = y;
          }
          n.chmod(u, c | 146);
          var g = n.open(u, 577);
          n.write(g, t, 0, t.length, 0, i), n.close(g), n.chmod(u, c);
        }
      },
      createDevice(e, r, t, o) {
        var _a2;
        var s = B.join2(typeof e == "string" ? e : n.getPath(e), r), i = or(!!t, !!o);
        (_a2 = n.createDevice).major ?? (_a2.major = 64);
        var l = n.makedev(n.createDevice.major++, 0);
        return n.registerDevice(l, {
          open(c) {
            c.seekable = false;
          },
          close(c) {
            var _a3;
            ((_a3 = o == null ? void 0 : o.buffer) == null ? void 0 : _a3.length) && o(10);
          },
          read(c, u, y, N, C) {
            for (var g = 0, b = 0; b < N; b++) {
              var se;
              try {
                se = t();
              } catch {
                throw new n.ErrnoError(29);
              }
              if (se === void 0 && g === 0) throw new n.ErrnoError(6);
              if (se == null) break;
              g++, u[y + b] = se;
            }
            return g && (c.node.atime = Date.now()), g;
          },
          write(c, u, y, N, C) {
            for (var g = 0; g < N; g++) try {
              o(u[y + g]);
            } catch {
              throw new n.ErrnoError(29);
            }
            return N && (c.node.mtime = c.node.ctime = Date.now()), g;
          }
        }), n.mkdev(s, i, l);
      },
      forceLoadFile(e) {
        if (e.isDevice || e.isFolder || e.link || e.contents) return true;
        if (globalThis.XMLHttpRequest) A("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");
        else try {
          e.contents = J(e.url);
        } catch {
          throw new n.ErrnoError(29);
        }
      },
      createLazyFile(e, r, t, o, s) {
        class i {
          constructor() {
            __publicField(this, "lengthKnown", false);
            __publicField(this, "chunks", []);
          }
          get(g) {
            if (!(g > this.length - 1 || g < 0)) {
              var b = g % this.chunkSize, se = g / this.chunkSize | 0;
              return this.getter(se)[b];
            }
          }
          setDataGetter(g) {
            this.getter = g;
          }
          cacheLength() {
            var g = new XMLHttpRequest();
            g.open("HEAD", t, false), g.send(null), g.status >= 200 && g.status < 300 || g.status === 304 || A("Couldn't load " + t + ". Status: " + g.status);
            var b = Number(g.getResponseHeader("Content-length")), se, Fe = (se = g.getResponseHeader("Accept-Ranges")) && se === "bytes", Pe = (se = g.getResponseHeader("Content-Encoding")) && se === "gzip", we = 1024 * 1024;
            Fe || (we = b);
            var Ae = (Te, ze) => {
              Te > ze && A("invalid range (" + Te + ", " + ze + ") or no bytes requested!"), ze > b - 1 && A("only " + b + " bytes available! programmer error!");
              var _e2 = new XMLHttpRequest();
              return _e2.open("GET", t, false), b !== we && _e2.setRequestHeader("Range", "bytes=" + Te + "-" + ze), _e2.responseType = "arraybuffer", _e2.overrideMimeType && _e2.overrideMimeType("text/plain; charset=x-user-defined"), _e2.send(null), _e2.status >= 200 && _e2.status < 300 || _e2.status === 304 || A("Couldn't load " + t + ". Status: " + _e2.status), _e2.response !== void 0 ? new Uint8Array(_e2.response || []) : nr(_e2.responseText || "");
            }, qe = this;
            qe.setDataGetter((Te) => {
              var ze = Te * we, _e2 = (Te + 1) * we - 1;
              return _e2 = Math.min(_e2, b - 1), typeof qe.chunks[Te] > "u" && (qe.chunks[Te] = Ae(ze, _e2)), typeof qe.chunks[Te] > "u" && A("doXHR failed!"), qe.chunks[Te];
            }), (Pe || !b) && (we = b = 1, b = this.getter(0).length, we = b, F("LazyFiles on gzip forces download of the whole file when length is accessed")), this._length = b, this._chunkSize = we, this.lengthKnown = true;
          }
          get length() {
            return this.lengthKnown || this.cacheLength(), this._length;
          }
          get chunkSize() {
            return this.lengthKnown || this.cacheLength(), this._chunkSize;
          }
        }
        if (globalThis.XMLHttpRequest) {
          v || A("Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc");
          var l = new i(), c = {
            isDevice: false,
            contents: l
          };
        } else var c = {
          isDevice: false,
          url: t
        };
        var u = n.createFile(e, r, c, o, s);
        c.contents ? u.contents = c.contents : c.url && (u.contents = null, u.url = c.url), Object.defineProperties(u, {
          usedBytes: {
            get: function() {
              return this.contents.length;
            }
          }
        });
        var y = {};
        for (const [C, g] of Object.entries(u.stream_ops)) y[C] = (...b) => (n.forceLoadFile(u), g(...b));
        function N(C, g, b, se, Fe) {
          var Pe = C.node.contents;
          if (Fe >= Pe.length) return 0;
          var we = Math.min(Pe.length - Fe, se);
          if (d(we >= 0), Pe.slice) for (var Ae = 0; Ae < we; Ae++) g[b + Ae] = Pe[Fe + Ae];
          else for (var Ae = 0; Ae < we; Ae++) g[b + Ae] = Pe.get(Fe + Ae);
          return we;
        }
        return y.read = (C, g, b, se, Fe) => (n.forceLoadFile(u), N(C, g, b, se, Fe)), y.mmap = (C, g, b, se, Fe) => {
          n.forceLoadFile(u);
          var Pe = dr();
          if (!Pe) throw new n.ErrnoError(48);
          return N(C, j, Pe, g, b), {
            ptr: Pe,
            allocated: true
          };
        }, u.stream_ops = y, u;
      },
      absolutePath() {
        A("FS.absolutePath has been removed; use PATH_FS.resolve instead");
      },
      createFolder() {
        A("FS.createFolder has been removed; use FS.mkdir instead");
      },
      createLink() {
        A("FS.createLink has been removed; use FS.symlink instead");
      },
      joinPath() {
        A("FS.joinPath has been removed; use PATH.join instead");
      },
      mmapAlloc() {
        A("FS.mmapAlloc has been replaced by the top level function mmapAlloc");
      },
      standardizePath() {
        A("FS.standardizePath has been removed; use PATH.normalize instead");
      }
    }, Ke = {
      calculateAt(e, r, t) {
        if (B.isAbs(r)) return r;
        var o;
        if (e === -100) o = n.cwd();
        else {
          var s = Ke.getStreamFromFD(e);
          o = s.path;
        }
        if (r.length == 0) {
          if (!t) throw new n.ErrnoError(44);
          return o;
        }
        return o + "/" + r;
      },
      writeStat(e, r) {
        _[e >> 2] = r.dev, _[e + 4 >> 2] = r.mode, _[e + 8 >> 2] = r.nlink, _[e + 12 >> 2] = r.uid, _[e + 16 >> 2] = r.gid, _[e + 20 >> 2] = r.rdev, M[e + 24 >> 3] = BigInt(r.size), le[e + 32 >> 2] = 4096, le[e + 36 >> 2] = r.blocks;
        var t = r.atime.getTime(), o = r.mtime.getTime(), s = r.ctime.getTime();
        return M[e + 40 >> 3] = BigInt(Math.floor(t / 1e3)), _[e + 48 >> 2] = t % 1e3 * 1e3 * 1e3, M[e + 56 >> 3] = BigInt(Math.floor(o / 1e3)), _[e + 64 >> 2] = o % 1e3 * 1e3 * 1e3, M[e + 72 >> 3] = BigInt(Math.floor(s / 1e3)), _[e + 80 >> 2] = s % 1e3 * 1e3 * 1e3, M[e + 88 >> 3] = BigInt(r.ino), 0;
      },
      writeStatFs(e, r) {
        _[e + 4 >> 2] = r.bsize, _[e + 60 >> 2] = r.bsize, M[e + 8 >> 3] = BigInt(r.blocks), M[e + 16 >> 3] = BigInt(r.bfree), M[e + 24 >> 3] = BigInt(r.bavail), M[e + 32 >> 3] = BigInt(r.files), M[e + 40 >> 3] = BigInt(r.ffree), _[e + 48 >> 2] = r.fsid, _[e + 64 >> 2] = r.flags, _[e + 56 >> 2] = r.namelen;
      },
      doMsync(e, r, t, o, s) {
        if (!n.isFile(r.node.mode)) throw new n.ErrnoError(43);
        if (o & 2) return 0;
        var i = de.slice(e, e + t);
        n.msync(r, i, s, t, o);
      },
      getStreamFromFD(e) {
        var r = n.getStreamChecked(e);
        return r;
      },
      varargs: void 0,
      getStr(e) {
        var r = je(e);
        return r;
      }
    };
    function Gr(e) {
      try {
        var r = Ke.getStreamFromFD(e);
        return n.close(r), 0;
      } catch (t) {
        if (typeof n > "u" || t.name !== "ErrnoError") throw t;
        return t.errno;
      }
    }
    var Vr = (e, r, t, o) => {
      for (var s = 0, i = 0; i < t; i++) {
        var l = _[r >> 2], c = _[r + 4 >> 2];
        r += 8;
        var u = n.read(e, j, l, c, o);
        if (u < 0) return -1;
        if (s += u, u < c) break;
      }
      return s;
    };
    function Yr(e, r, t, o) {
      try {
        var s = Ke.getStreamFromFD(e), i = Vr(s, r, t);
        return _[o >> 2] = i, 0;
      } catch (l) {
        if (typeof n > "u" || l.name !== "ErrnoError") throw l;
        return l.errno;
      }
    }
    var Kr = 9007199254740992, qr = -9007199254740992, Xr = (e) => e < qr || e > Kr ? NaN : Number(e);
    function Zr(e, r, t, o) {
      r = Xr(r);
      try {
        if (isNaN(r)) return 61;
        var s = Ke.getStreamFromFD(e);
        return n.llseek(s, r, t), M[o >> 3] = BigInt(s.position), s.getdents && r === 0 && t === 0 && (s.getdents = null), 0;
      } catch (i) {
        if (typeof n > "u" || i.name !== "ErrnoError") throw i;
        return i.errno;
      }
    }
    var Qr = (e, r, t, o) => {
      for (var s = 0, i = 0; i < t; i++) {
        var l = _[r >> 2], c = _[r + 4 >> 2];
        r += 8;
        var u = n.write(e, j, l, c, o);
        if (u < 0) return -1;
        if (s += u, u < c) break;
      }
      return s;
    };
    function Jr(e, r, t, o) {
      try {
        var s = Ke.getStreamFromFD(e), i = Qr(s, r, t);
        return _[o >> 2] = i, 0;
      } catch (l) {
        if (typeof n > "u" || l.name !== "ErrnoError") throw l;
        return l.errno;
      }
    }
    n.createPreloadedFile = jr, n.preloadFile = mr, n.staticInit();
    {
      if (a.noExitRuntime && a.noExitRuntime, a.preloadPlugins && (ur = a.preloadPlugins), a.print && (F = a.print), a.printErr && (S = a.printErr), a.wasmBinary && (E = a.wasmBinary), tt(), a.arguments && a.arguments, a.thisProgram && (U = a.thisProgram), d(typeof a.memoryInitializerPrefixURL > "u", "Module.memoryInitializerPrefixURL option was removed, use Module.locateFile instead"), d(typeof a.pthreadMainPrefixURL > "u", "Module.pthreadMainPrefixURL option was removed, use Module.locateFile instead"), d(typeof a.cdInitializerPrefixURL > "u", "Module.cdInitializerPrefixURL option was removed, use Module.locateFile instead"), d(typeof a.filePackagePrefixURL > "u", "Module.filePackagePrefixURL option was removed, use Module.locateFile instead"), d(typeof a.read > "u", "Module.read option was removed"), d(typeof a.readAsync > "u", "Module.readAsync option was removed (modify readAsync in JS)"), d(typeof a.readBinary > "u", "Module.readBinary option was removed (modify readBinary in JS)"), d(typeof a.setWindowTitle > "u", "Module.setWindowTitle option was removed (modify emscripten_set_window_title in JS)"), d(typeof a.TOTAL_MEMORY > "u", "Module.TOTAL_MEMORY has been renamed Module.INITIAL_MEMORY"), d(typeof a.ENVIRONMENT > "u", "Module.ENVIRONMENT has been deprecated. To force the environment, use the ENVIRONMENT compile-time option (for example, -sENVIRONMENT=web or -sENVIRONMENT=node)"), d(typeof a.STACK_SIZE > "u", "STACK_SIZE can no longer be set at runtime.  Use -sSTACK_SIZE at link time"), d(typeof a.wasmMemory > "u", "Use of `wasmMemory` detected.  Use -sIMPORTED_MEMORY to define wasmMemory externally"), d(typeof a.INITIAL_MEMORY > "u", "Detected runtime INITIAL_MEMORY setting.  Use -sIMPORTED_MEMORY to define wasmMemory dynamically"), a.preInit) for (typeof a.preInit == "function" && (a.preInit = [
        a.preInit
      ]); a.preInit.length > 0; ) a.preInit.shift()();
      re("preInit");
    }
    var et = [
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
    et.forEach(ce);
    var rt = [
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
      "FS_readFiles",
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
    rt.forEach(ie);
    function tt() {
      ae("fetchSettings");
    }
    a._deform = k("_deform"), a._malloc = k("_malloc"), a._free = k("_free"), a._modal = k("_modal"), a._modal_paz = k("_modal_paz"), a._didactic_solve = k("_didactic_solve"), a._plate_q4_solve = k("_plate_q4_solve"), a._slopeAllocDouble = k("_slopeAllocDouble"), a._slopeStabilitySolver = k("_slopeStabilitySolver"), a._nonlinear_dynamic = k("_nonlinear_dynamic"), a._steel02_test = k("_steel02_test"), a._cyclic_pushover = k("_cyclic_pushover"), a._concrete02_test = k("_concrete02_test");
    var hr = k("_fflush"), pr = k("_strerror"), sr = k("_emscripten_stack_get_end"), vr = k("_emscripten_stack_init"), Qe = k("wasmMemory");
    function nt(e) {
      d(typeof e.deform < "u", "missing Wasm export: deform"), d(typeof e.malloc < "u", "missing Wasm export: malloc"), d(typeof e.free < "u", "missing Wasm export: free"), d(typeof e.modal < "u", "missing Wasm export: modal"), d(typeof e.modal_paz < "u", "missing Wasm export: modal_paz"), d(typeof e.didactic_solve < "u", "missing Wasm export: didactic_solve"), d(typeof e.plate_q4_solve < "u", "missing Wasm export: plate_q4_solve"), d(typeof e.slopeAllocDouble < "u", "missing Wasm export: slopeAllocDouble"), d(typeof e.slopeStabilitySolver < "u", "missing Wasm export: slopeStabilitySolver"), d(typeof e.nonlinear_dynamic < "u", "missing Wasm export: nonlinear_dynamic"), d(typeof e.steel02_test < "u", "missing Wasm export: steel02_test"), d(typeof e.cyclic_pushover < "u", "missing Wasm export: cyclic_pushover"), d(typeof e.concrete02_test < "u", "missing Wasm export: concrete02_test"), d(typeof e.fflush < "u", "missing Wasm export: fflush"), d(typeof e.strerror < "u", "missing Wasm export: strerror"), d(typeof e.emscripten_stack_get_end < "u", "missing Wasm export: emscripten_stack_get_end"), d(typeof e.emscripten_stack_get_base < "u", "missing Wasm export: emscripten_stack_get_base"), d(typeof e.emscripten_stack_init < "u", "missing Wasm export: emscripten_stack_init"), d(typeof e.emscripten_stack_get_free < "u", "missing Wasm export: emscripten_stack_get_free"), d(typeof e._emscripten_stack_restore < "u", "missing Wasm export: _emscripten_stack_restore"), d(typeof e._emscripten_stack_alloc < "u", "missing Wasm export: _emscripten_stack_alloc"), d(typeof e.emscripten_stack_get_current < "u", "missing Wasm export: emscripten_stack_get_current"), d(typeof e.memory < "u", "missing Wasm export: memory"), d(typeof e.__indirect_function_table < "u", "missing Wasm export: __indirect_function_table"), a._deform = I("deform", 45), a._malloc = I("malloc", 1), a._free = I("free", 1), a._modal = I("modal", 51), a._modal_paz = I("modal_paz", 54), a._didactic_solve = I("didactic_solve", 48), a._plate_q4_solve = I("plate_q4_solve", 26), a._slopeAllocDouble = I("slopeAllocDouble", 1), a._slopeStabilitySolver = I("slopeStabilitySolver", 16), a._nonlinear_dynamic = I("nonlinear_dynamic", 20), a._steel02_test = I("steel02_test", 8), a._cyclic_pushover = I("cyclic_pushover", 40), a._concrete02_test = I("concrete02_test", 10), hr = I("fflush", 1), pr = I("strerror", 1), sr = e.emscripten_stack_get_end, e.emscripten_stack_get_base, vr = e.emscripten_stack_init, e.emscripten_stack_get_free, e._emscripten_stack_restore, e._emscripten_stack_alloc, e.emscripten_stack_get_current, Qe = e.memory, e.__indirect_function_table;
    }
    var _r = {
      __assert_fail: Sr,
      __cxa_throw: Pr,
      _abort_js: kr,
      _tzset_js: Ar,
      emscripten_resize_heap: Mr,
      environ_get: Nr,
      environ_sizes_get: Dr,
      fd_close: Gr,
      fd_read: Yr,
      fd_seek: Zr,
      fd_write: Jr
    }, Er;
    function ot() {
      vr(), x();
    }
    function ar() {
      if (Ne > 0) {
        Ye = ar;
        return;
      }
      if (ot(), Ee(), Ne > 0) {
        Ye = ar;
        return;
      }
      function e() {
        var _a2;
        d(!Er), Er = true, a.calledRun = true, !H && (fe(), me == null ? void 0 : me(a), (_a2 = a.onRuntimeInitialized) == null ? void 0 : _a2.call(a), re("onRuntimeInitialized"), d(!a._main, 'compiled without a main, but one is present. if you added it from JS, use Module["onRuntimeInitialized"]'), ne());
      }
      a.setStatus ? (a.setStatus("Running..."), setTimeout(() => {
        setTimeout(() => a.setStatus(""), 1), e();
      }, 1)) : e(), X();
    }
    var Ie;
    Ie = await q(), ar(), pe ? p = a : p = new Promise((e, r) => {
      me = e, he = r;
    });
    for (const e of Object.keys(a)) e in f || Object.defineProperty(f, e, {
      configurable: true,
      get() {
        A(`Access to module property ('${e}') is no longer possible via the module constructor argument; Instead, use the result of the module constructor.`);
      }
    });
    return p;
  };
  const V = await xe();
  dt = function(f, p, a, m, v) {
    if (f.length === 0) return;
    const h = [], W = Se(f.flat(), Float64Array, V.HEAPF64);
    h.push(W);
    const D = p.flat(), U = Se(D, Uint32Array, V.HEAPU32);
    h.push(U);
    const Q = p.map((T) => T.length), ee = Se(Q, Uint32Array, V.HEAPU32);
    h.push(ee);
    const $ = a.supports ? Array.from(a.supports.keys()) : [], K = a.supports ? Array.from(a.supports.values()).flat().map((T) => T ? 1 : 0) : [], J = Se($, Uint32Array, V.HEAPU32);
    h.push(J);
    const w = Se(K, Uint8Array, V.HEAPU8);
    h.push(w);
    const F = a.loads ? Array.from(a.loads.keys()) : [], S = a.loads ? Array.from(a.loads.values()).flat() : [], E = Se(F, Uint32Array, V.HEAPU32);
    h.push(E);
    const H = Se(S, Float64Array, V.HEAPF64);
    h.push(H);
    const d = (T) => {
      const ke = T ? Array.from(T.keys()) : [], er = T ? Array.from(T.values()) : [], Be = Se(ke, Uint32Array, V.HEAPU32);
      h.push(Be);
      const Xe = Se(er, Float64Array, V.HEAPF64);
      return h.push(Xe), {
        keysPtr: Be,
        valuesPtr: Xe,
        size: ke.length
      };
    }, L = d(m.elasticities), x = d(m.elasticitiesOrthogonal), X = d(m.areas), re = d(m.momentsOfInertiaZ), k = d(m.momentsOfInertiaY), ae = d(m.shearModuli), O = d(m.torsionalConstants), ce = d(m.thicknesses), ie = d(m.poissonsRatios);
    d(m.shearAreasY), d(m.shearAreasZ);
    const me = m.rigidOffsets ? Array.from(m.rigidOffsets.keys()) : [], he = m.rigidOffsets ? Array.from(m.rigidOffsets.values()).flat() : [], j = Se(me, Uint32Array, V.HEAPU32);
    h.push(j);
    const de = Se(he, Float64Array, V.HEAPF64);
    h.push(de);
    const le = m.momentReleases ? Array.from(m.momentReleases.keys()) : [], _ = m.momentReleases ? Array.from(m.momentReleases.values()).flat().map((T) => T ? 1 : 0) : [], M = Se(le, Uint32Array, V.HEAPU32);
    h.push(M);
    const pe = Se(_, Uint8Array, V.HEAPU8);
    h.push(pe);
    const ve = V._malloc(4);
    h.push(ve);
    const Ee = V._malloc(4);
    h.push(Ee);
    const fe = V._malloc(4);
    h.push(fe);
    const ne = V._malloc(4);
    h.push(ne);
    const A = v ? v.flatMap((T) => [
      T.node,
      T.dof,
      T.k
    ]) : [], I = Se(A.length > 0 ? A : [
      0
    ], Float64Array, V.HEAPF64);
    h.push(I), V._deform(W, f.length, U, D.length, ee, p.length, J, w, $.length, E, H, F.length, L.keysPtr, L.valuesPtr, L.size, X.keysPtr, X.valuesPtr, X.size, re.keysPtr, re.valuesPtr, re.size, k.keysPtr, k.valuesPtr, k.size, ae.keysPtr, ae.valuesPtr, ae.size, O.keysPtr, O.valuesPtr, O.size, ce.keysPtr, ce.valuesPtr, ce.size, ie.keysPtr, ie.valuesPtr, ie.size, x.keysPtr, x.valuesPtr, x.size, I, v ? v.length : 0, ve, Ee, fe, ne);
    const ye = V.HEAPU32[ve / 4], oe = V.HEAPU32[Ee / 4], ge = V.HEAPU32[fe / 4], G = V.HEAPU32[ne / 4], te = new Float64Array(V.HEAPF64.buffer, ye, oe), R = new Float64Array(V.HEAPF64.buffer, ge, G), Z = /* @__PURE__ */ new Map();
    for (let T = 0; T < oe; T += 7) {
      const ke = te[T];
      Z.set(ke, Array.from(te.slice(T + 1, T + 7)));
    }
    const q = /* @__PURE__ */ new Map();
    for (let T = 0; T < G; T += 7) {
      const ke = R[T];
      q.set(ke, Array.from(R.slice(T + 1, T + 7)));
    }
    return ye && h.push(ye), ge && h.push(ge), h.forEach((T) => V._free(T)), {
      deformations: Z,
      reactions: q
    };
  };
  function Se(f, p, a) {
    const m = new p(f), v = V._malloc(m.length * m.BYTES_PER_ELEMENT);
    return a.set(m, v / m.BYTES_PER_ELEMENT), v;
  }
  const z = await xe();
  ft = function(f, p, a, m, v = 10) {
    if (f.length === 0) return {
      frequencies: [],
      modeShapes: [],
      massParticipation: []
    };
    const h = [], W = De(f.flat(), Float64Array, z.HEAPF64);
    h.push(W);
    const D = p.flat(), U = De(D, Uint32Array, z.HEAPU32);
    h.push(U);
    const Q = p.map((G) => G.length), ee = De(Q, Uint32Array, z.HEAPU32);
    h.push(ee);
    const $ = a.supports ? Array.from(a.supports.keys()) : [], K = a.supports ? Array.from(a.supports.values()).flat().map((G) => G ? 1 : 0) : [], J = De($, Uint32Array, z.HEAPU32);
    h.push(J);
    const w = De(K, Uint8Array, z.HEAPU8);
    h.push(w);
    const F = (G) => {
      const te = G ? Array.from(G.keys()) : [], R = G ? Array.from(G.values()) : [], Z = De(te, Uint32Array, z.HEAPU32);
      h.push(Z);
      const q = De(R, Float64Array, z.HEAPF64);
      return h.push(q), {
        keysPtr: Z,
        valuesPtr: q,
        size: te.length
      };
    }, S = F(m.elasticities), E = F(m.areas), H = F(m.momentsOfInertiaZ), d = F(m.momentsOfInertiaY), L = F(m.shearModuli), x = F(m.torsionalConstants), X = F(m.densities), re = F(m.thicknesses), k = F(m.poissonsRatios), ae = F(m.membraneModifiers), O = F(m.bendingModifiers), ce = z._malloc(4);
    h.push(ce);
    const ie = z._malloc(4);
    h.push(ie);
    const me = z._malloc(4);
    h.push(me);
    const he = z._malloc(4);
    h.push(he);
    const j = z._malloc(4);
    h.push(j);
    const de = z._malloc(4);
    h.push(de);
    const le = z._malloc(4);
    h.push(le);
    const _ = z._malloc(4);
    h.push(_), z._modal(W, f.length, U, D.length, ee, p.length, J, w, $.length, S.keysPtr, S.valuesPtr, S.size, E.keysPtr, E.valuesPtr, E.size, H.keysPtr, H.valuesPtr, H.size, d.keysPtr, d.valuesPtr, d.size, L.keysPtr, L.valuesPtr, L.size, x.keysPtr, x.valuesPtr, x.size, X.keysPtr, X.valuesPtr, X.size, re.keysPtr, re.valuesPtr, re.size, k.keysPtr, k.valuesPtr, k.size, ae.keysPtr, ae.valuesPtr, ae.size, O.keysPtr, O.valuesPtr, O.size, v, ce, ie, me, he, j, de, le, _);
    const M = z.HEAPU32[ce / 4], pe = z.HEAPU32[ie / 4], ve = z.HEAPU32[me / 4], Ee = z.HEAPU32[he / 4], fe = z.HEAPU32[j / 4], ne = z.HEAPU32[de / 4], A = z.HEAPU32[le / 4], I = z.HEAPU32[_ / 4];
    let ye = [], oe = [], ge = [];
    if (pe > 0 && M) {
      const G = new Float64Array(z.HEAPF64.buffer, M, pe);
      ye = Array.from(G), h.push(M);
    }
    if (Ee > 0 && fe > 0 && ve) {
      const G = new Float64Array(z.HEAPF64.buffer, ve, Ee * fe);
      for (let te = 0; te < Ee; te++) oe.push(Array.from(G.slice(te * fe, (te + 1) * fe)));
      h.push(ve);
    }
    if (A > 0 && I > 0 && ne) {
      const G = new Float64Array(z.HEAPF64.buffer, ne, A * I);
      for (let te = 0; te < A; te++) ge.push(Array.from(G.slice(te * I, (te + 1) * I)));
      h.push(ne);
    }
    return h.forEach((G) => z._free(G)), {
      frequencies: ye,
      modeShapes: oe,
      massParticipation: ge
    };
  };
  function De(f, p, a) {
    const m = new p(f), v = z._malloc(m.length * m.BYTES_PER_ELEMENT);
    return a.set(m, v / m.BYTES_PER_ELEMENT), v;
  }
  await xe();
  const be = await xe();
  ut = function(f) {
    const { nodes: p, elements: a, E: m, nu: v, gamma: h, c: W, phi: D, thickness: U = 1, supports: Q, surcharge: ee = 0, surfaceYThreshold: $ = -1e10 } = f, K = [], J = p.flat(), w = lt(J);
    K.push(w);
    const F = a.flat(), S = gr(F);
    K.push(S);
    const E = [];
    for (const O of Q) E.push(O.node, O.fixX ? 1 : 0, O.fixY ? 1 : 0);
    const H = gr(E);
    K.push(H);
    const d = a.length, L = p.length, x = be._slopeAllocDouble(d);
    K.push(x);
    const X = be._slopeAllocDouble(L * 2);
    K.push(X);
    const re = be._slopeStabilitySolver(w, L, S, d, m, v, h, W, D, U, H, Q.length, ee, $, x, X), k = [];
    for (let O = 0; O < d; O++) k.push(be.HEAPF64[x / 8 + O]);
    const ae = [];
    for (let O = 0; O < L; O++) ae.push([
      be.HEAPF64[X / 8 + 2 * O],
      be.HEAPF64[X / 8 + 2 * O + 1]
    ]);
    return K.forEach((O) => be._free(O)), {
      fos: re,
      plasticStrain: k,
      displacements: ae
    };
  };
  function lt(f) {
    const p = new Float64Array(f), a = be._malloc(p.length * p.BYTES_PER_ELEMENT);
    return be.HEAPF64.set(p, a / 8), a;
  }
  function gr(f) {
    const p = new Uint32Array(f), a = be._malloc(p.length * p.BYTES_PER_ELEMENT);
    return be.HEAPU32.set(p, a / 4), a;
  }
  const ue = await xe();
  function He(f, p, a) {
    const m = new p(f), v = ue._malloc(m.length * m.BYTES_PER_ELEMENT);
    return a.set(m, v / m.BYTES_PER_ELEMENT), v;
  }
  mt = function(f) {
    const p = [];
    let a = [], m = 0;
    f.nodes && f.nodes.length > 0 && (m = f.nodes.length, a = f.nodes.flat());
    const v = He(a.length > 0 ? a : [
      0
    ], Float64Array, ue.HEAPF64);
    p.push(v);
    let h = [], W = 0;
    f.elements && f.elements.length > 0 && (W = f.elements.length, h = f.elements.flat());
    const D = He(h.length > 0 ? h : [
      0
    ], Int32Array, ue.HEAPU32);
    p.push(D);
    let U = [], Q = 0;
    f.bcs && f.bcs.length > 0 && (Q = f.bcs.length, U = f.bcs.flatMap((R) => [
      R.node,
      R.dof,
      R.value
    ]));
    const ee = He(U.length > 0 ? U : [
      0
    ], Float64Array, ue.HEAPF64);
    p.push(ee);
    let $ = [], K = 0;
    f.pointLoads && f.pointLoads.length > 0 && (K = f.pointLoads.length, $ = f.pointLoads.flatMap((R) => [
      R.node,
      R.dof,
      R.value
    ]));
    const J = He($.length > 0 ? $ : [
      0
    ], Float64Array, ue.HEAPF64);
    p.push(J);
    const w = f.meshLx ?? 0, F = f.meshLy ?? 0, S = f.meshNx ?? 0, E = f.meshNy ?? 0, d = {
      none: 0,
      "simply-supported": 1,
      clamped: 2
    }[f.bcType ?? "none"] ?? 0, L = f.theoryType ?? 0;
    let x = [], X = 0;
    f.springs && f.springs.length > 0 && (X = f.springs.length, x = f.springs.flatMap((R) => [
      R.node,
      R.dof,
      R.k
    ]));
    const re = He(x.length > 0 ? x : [
      0
    ], Float64Array, ue.HEAPF64);
    p.push(re);
    let k = [], ae = 0;
    f.thicknesses && f.thicknesses.length > 0 && (ae = f.thicknesses.length, k = f.thicknesses.slice());
    const O = He(k.length > 0 ? k : [
      0
    ], Float64Array, ue.HEAPF64);
    p.push(O);
    const ce = ue._malloc(4);
    p.push(ce);
    const ie = ue._malloc(4);
    p.push(ie);
    const me = ue._malloc(4);
    p.push(me);
    const he = ue._malloc(4);
    p.push(he), ue._plate_q4_solve(v, m, D, W, f.E, f.nu, f.thickness, ee, Q, f.pressure ?? 0, J, K, w, F, S, E, d, L, re, X, O, ae, ce, ie, me, he);
    const j = ue.HEAPU32[ce / 4], de = ue.HEAPU32[ie / 4], le = ue.HEAPU32[me / 4], _ = ue.HEAPU32[he / 4], M = new Float64Array(ue.HEAPF64.buffer, j, de), pe = M[0], ve = M[1], Ee = [];
    let fe = 0;
    for (let R = 0; R < pe; R++) {
      const Z = 2 + R * 5, q = {
        x: M[Z],
        y: M[Z + 1],
        w: M[Z + 2],
        bx: M[Z + 3],
        by: M[Z + 4]
      };
      Ee.push(q), Math.abs(q.w) > Math.abs(fe) && (fe = q.w);
    }
    const ne = new Float64Array(ue.HEAPF64.buffer, le, _), A = [];
    let I = 0, ye = 0, oe = 0, ge = 0, G = 0;
    for (let R = 0; R < ve; R++) {
      const Z = R * 9, q = {
        nodes: [
          ne[Z],
          ne[Z + 1],
          ne[Z + 2],
          ne[Z + 3]
        ],
        Mxx: ne[Z + 4],
        Myy: ne[Z + 5],
        Mxy: ne[Z + 6],
        Qx: ne[Z + 7],
        Qy: ne[Z + 8]
      };
      A.push(q), Math.abs(q.Mxx) > Math.abs(I) && (I = q.Mxx), Math.abs(q.Myy) > Math.abs(ye) && (ye = q.Myy), Math.abs(q.Mxy) > Math.abs(oe) && (oe = q.Mxy), Math.abs(q.Qx) > Math.abs(ge) && (ge = q.Qx), Math.abs(q.Qy) > Math.abs(G) && (G = q.Qy);
    }
    let te;
    if (w > 0 && F > 0) {
      const R = w / 2, Z = F / 2;
      let q = 1 / 0;
      for (const T of Ee) {
        const ke = Math.hypot(T.x - R, T.y - Z);
        ke < q && (q = ke, te = T.w);
      }
    }
    return j && p.push(j), le && p.push(le), p.forEach((R) => ue._free(R)), {
      nodeResults: Ee,
      elementResults: A,
      maxW: fe,
      maxMxx: I,
      maxMyy: ye,
      maxMxy: oe,
      maxQx: ge,
      maxQy: G,
      centerW: te
    };
  };
  const Y = await xe();
  ht = function(f, p, a, m) {
    if (f.length === 0) return {
      nNodes: 0,
      nElements: 0,
      nDOF: 0,
      elements: [],
      K_assembled_sparse: [],
      K_assembled_nnz: 0,
      F_applied: [],
      U_full: [],
      R_full: [],
      freeDOFs: [],
      fixedDOFs: []
    };
    const v = [], h = Oe(f.flat(), Float64Array, Y.HEAPF64);
    v.push(h);
    const W = p.flat(), D = Oe(W, Uint32Array, Y.HEAPU32);
    v.push(D);
    const U = p.map((oe) => oe.length), Q = Oe(U, Uint32Array, Y.HEAPU32);
    v.push(Q);
    const ee = a.supports ? Array.from(a.supports.keys()) : [], $ = a.supports ? Array.from(a.supports.values()).flat().map((oe) => oe ? 1 : 0) : [], K = Oe(ee, Uint32Array, Y.HEAPU32);
    v.push(K);
    const J = Oe($, Uint8Array, Y.HEAPU8);
    v.push(J);
    const w = a.loads ? Array.from(a.loads.keys()) : [], F = a.loads ? Array.from(a.loads.values()).flat() : [], S = Oe(w, Uint32Array, Y.HEAPU32);
    v.push(S);
    const E = Oe(F, Float64Array, Y.HEAPF64);
    v.push(E);
    const H = (oe) => {
      const ge = oe ? Array.from(oe.keys()) : [], G = oe ? Array.from(oe.values()) : [], te = Oe(ge, Uint32Array, Y.HEAPU32);
      v.push(te);
      const R = Oe(G, Float64Array, Y.HEAPF64);
      return v.push(R), {
        keysPtr: te,
        valuesPtr: R,
        size: ge.length
      };
    }, d = H(m.elasticities), L = H(m.areas), x = H(m.momentsOfInertiaZ), X = H(m.momentsOfInertiaY), re = H(m.shearModuli), k = H(m.torsionalConstants), ae = H(m.thicknesses), O = H(m.poissonsRatios), ce = H(m.shearAreasY), ie = H(m.shearAreasZ), me = Y._malloc(4);
    v.push(me);
    const he = Y._malloc(4);
    v.push(he);
    const j = Y._malloc(4);
    v.push(j);
    const de = Y._malloc(4);
    v.push(de);
    const le = Y._malloc(4);
    v.push(le);
    const _ = Y._malloc(4);
    v.push(_), Y._didactic_solve(h, f.length, D, W.length, Q, p.length, K, J, ee.length, S, E, w.length, d.keysPtr, d.valuesPtr, d.size, L.keysPtr, L.valuesPtr, L.size, x.keysPtr, x.valuesPtr, x.size, X.keysPtr, X.valuesPtr, X.size, re.keysPtr, re.valuesPtr, re.size, k.keysPtr, k.valuesPtr, k.size, ae.keysPtr, ae.valuesPtr, ae.size, O.keysPtr, O.valuesPtr, O.size, ce.keysPtr, ce.valuesPtr, ce.size, ie.keysPtr, ie.valuesPtr, ie.size, me, he, j, de, le, _);
    const M = Y.HEAPU32[me / 4], pe = Y.HEAPU32[he / 4], ve = Y.HEAPU32[j / 4], Ee = Y.HEAPU32[de / 4], fe = Y.HEAPU32[le / 4], ne = Y.HEAPU32[_ / 4], A = M && pe > 0 ? Array.from(new Float64Array(Y.HEAPF64.buffer, M, pe)) : [], I = ve && Ee > 0 ? Array.from(new Float64Array(Y.HEAPF64.buffer, ve, Ee)) : [], ye = fe && ne > 0 ? Array.from(new Float64Array(Y.HEAPF64.buffer, fe, ne)) : [];
    return M && v.push(M), ve && v.push(ve), fe && v.push(fe), v.forEach((oe) => Y._free(oe)), ct(A, I, ye, f.length, p.length);
  };
  function ct(f, p, a, m, v) {
    const h = m * 6, W = [];
    if (f.length > 0) {
      const w = f[0], F = [];
      for (let S = 0; S < w; S++) F.push(f[1 + S]);
      for (let S = 0; S < w; S++) {
        let E = F[S];
        const H = f[E++], d = f[E++], L = f[E++], x = L * L, X = Je(f.slice(E, E + x), L);
        E += x;
        const re = Je(f.slice(E, E + x), L);
        E += x;
        const k = Je(f.slice(E, E + x), L);
        E += x;
        const ae = Je(f.slice(E, E + 9), 3);
        E += 9;
        const O = f[E++], ce = f[E++], ie = f[E++], me = f[E++], he = f[E++], j = f[E++], de = f[E++], le = f[E++], _ = f[E++], M = f[E++], pe = f[E++];
        W.push({
          index: H,
          type: d === 0 ? "frame" : "shell-Q4",
          nDOF: L,
          K_local: X,
          T: re,
          K_global: k,
          lambda: ae,
          L: O,
          E: ce,
          A: ie,
          Iz: me,
          Iy: he,
          G: j,
          J: de,
          t: le,
          nu: _,
          phiZ: M,
          phiY: pe
        });
      }
    }
    const D = [];
    let U = 0;
    if (p.length > 0) {
      U = p[0];
      for (let w = 0; w < U; w++) {
        const F = 1 + w * 3;
        D.push({
          row: p[F],
          col: p[F + 1],
          value: p[F + 2]
        });
      }
    }
    let Q = [], ee = [], $ = [], K = [], J = [];
    if (a.length > 0) {
      let w = 0;
      const F = a[w++];
      Q = a.slice(w, w + F), w += F, ee = a.slice(w, w + F), w += F, $ = a.slice(w, w + F), w += F;
      const S = a[w++];
      K = a.slice(w, w + S).map(Math.round), w += S;
      const E = a[w++];
      J = a.slice(w, w + E).map(Math.round);
    }
    return {
      nNodes: m,
      nElements: v,
      nDOF: h,
      elements: W,
      K_assembled_sparse: D,
      K_assembled_nnz: U,
      F_applied: Q,
      U_full: ee,
      R_full: $,
      freeDOFs: K,
      fixedDOFs: J
    };
  }
  function Je(f, p) {
    const a = [];
    for (let m = 0; m < p; m++) a.push(f.slice(m * p, (m + 1) * p));
    return a;
  }
  function Oe(f, p, a) {
    const m = new p(f), v = Y._malloc(m.length * m.BYTES_PER_ELEMENT);
    return a.set(m, v / m.BYTES_PER_ELEMENT), v;
  }
})();
export {
  xe as M,
  it as _,
  __tla,
  ht as a,
  dt as d,
  ft as m,
  mt as p,
  ut as s
};
