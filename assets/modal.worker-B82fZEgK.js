(async ()=>{
    var et = Object.freeze({
        __proto__: null
    });
    async function Te(R = {}) {
        var O;
        (function() {
            function e(u) {
                u = u.split("-")[0];
                for(var f = u.split(".").slice(0, 3); f.length < 3;)f.push("00");
                return f = f.map((y, w, m)=>y.padStart(2, "0")), f.join("");
            }
            var r = (u)=>[
                    u / 1e4 | 0,
                    (u / 100 | 0) % 100,
                    u % 100
                ].join("."), t = 2147483647, o = typeof process < "u" && process.versions?.node ? e(process.versions.node) : t;
            if (o < 16e4) throw new Error(`This emscripten-generated code requires node v${r(16e4)} (detected v${r(o)})`);
            var i = typeof navigator < "u" && navigator.userAgent;
            if (i) {
                var a = i.includes("Safari/") && !i.includes("Chrome/") && i.match(/Version\/(\d+\.?\d*\.?\d*)/) ? e(i.match(/Version\/(\d+\.?\d*\.?\d*)/)[1]) : t;
                if (a < 15e4) throw new Error(`This emscripten-generated code requires Safari v${r(15e4)} (detected v${a})`);
                var s = i.match(/Firefox\/(\d+(?:\.\d+)?)/) ? parseFloat(i.match(/Firefox\/(\d+(?:\.\d+)?)/)[1]) : t;
                if (s < 79) throw new Error(`This emscripten-generated code requires Firefox v79 (detected v${s})`);
                var l = i.match(/Chrome\/(\d+(?:\.\d+)?)/) ? parseFloat(i.match(/Chrome\/(\d+(?:\.\d+)?)/)[1]) : t;
                if (l < 85) throw new Error(`This emscripten-generated code requires Chrome v85 (detected v${l})`);
            }
        })();
        var d = R, v = !!globalThis.window, x = !!globalThis.WorkerGlobalScope, H = globalThis.process?.versions?.node && globalThis.process?.type != "renderer", j = !v && !H && !x;
        if (H) {
            const { createRequire: e } = await Promise.resolve().then(function() {
                return et;
            });
            var K = e(import.meta.url);
        }
        var J = "./this.program", ve = import.meta.url, g = "";
        function Z(e) {
            return d.locateFile ? d.locateFile(e, g) : g + e;
        }
        var oe, Q;
        if (H) {
            if (!(globalThis.process?.versions?.node && globalThis.process?.type != "renderer")) throw new Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)");
            var Ne = K("fs");
            ve.startsWith("file:") && (g = K("path").dirname(K("url").fileURLToPath(ve)) + "/"), Q = (r)=>{
                r = b(r) ? new URL(r) : r;
                var t = Ne.readFileSync(r);
                return c(Buffer.isBuffer(t)), t;
            }, oe = async (r, t = !0)=>{
                r = b(r) ? new URL(r) : r;
                var o = Ne.readFileSync(r, t ? void 0 : "utf8");
                return c(t ? Buffer.isBuffer(o) : typeof o == "string"), o;
            }, process.argv.length > 1 && (J = process.argv[1].replace(/\\/g, "/")), process.argv.slice(2);
        } else if (!j) if (v || x) {
            try {
                g = new URL(".", ve).href;
            } catch  {}
            if (!(globalThis.window || globalThis.WorkerGlobalScope)) throw new Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)");
            x && (Q = (e)=>{
                var r = new XMLHttpRequest;
                return r.open("GET", e, !1), r.responseType = "arraybuffer", r.send(null), new Uint8Array(r.response);
            }), oe = async (e)=>{
                if (b(e)) return new Promise((t, o)=>{
                    var i = new XMLHttpRequest;
                    i.open("GET", e, !0), i.responseType = "arraybuffer", i.onload = ()=>{
                        if (i.status == 200 || i.status == 0 && i.response) {
                            t(i.response);
                            return;
                        }
                        o(i.status);
                    }, i.onerror = o, i.send(null);
                });
                var r = await fetch(e, {
                    credentials: "same-origin"
                });
                if (r.ok) return r.arrayBuffer();
                throw new Error(r.status + " : " + r.url);
            };
        } else throw new Error("environment detection error");
        var ie = console.log.bind(console), N = console.error.bind(console);
        c(!j, "shell environment detected but not enabled at build time.  Add `shell` to `-sENVIRONMENT` to enable.");
        var ae;
        globalThis.WebAssembly || N("no native wasm support detected");
        var se = !1;
        function c(e, r) {
            e || S("Assertion failed" + (r ? ": " + r : ""));
        }
        var b = (e)=>e.startsWith("file://");
        function Re() {
            var e = _r();
            c((e & 3) == 0), e == 0 && (e += 4), _[e >> 2] = 34821223, _[e + 4 >> 2] = 2310721022, _[0] = 1668509029;
        }
        function le() {
            if (!se) {
                var e = _r();
                e == 0 && (e += 4);
                var r = _[e >> 2], t = _[e + 4 >> 2];
                (r != 34821223 || t != 2310721022) && S(`Stack overflow! Stack cookie has been overwritten at ${$(e)}, expected hex dwords 0x89BACDFE and 0x2135467, but received ${$(t)} ${$(r)}`), _[0] != 1668509029 && S("Runtime error: The application has corrupted its heap memory area (address zero)!");
            }
        }
        (()=>{
            var e = new Int16Array(1), r = new Int8Array(e.buffer);
            e[0] = 25459, (r[0] !== 115 || r[1] !== 99) && S("Runtime error: expected the system to be little-endian! (Run with -sSUPPORT_BIG_ENDIAN to bypass)");
        })();
        function ee(e) {
            Object.getOwnPropertyDescriptor(d, e) || Object.defineProperty(d, e, {
                configurable: !0,
                set () {
                    S(`Attempt to set \`Module.${e}\` after it has already been processed.  This can happen, for example, when code is injected via '--post-js' rather than '--pre-js'`);
                }
            });
        }
        function k(e) {
            return ()=>c(!1, `call to '${e}' via reference taken before Wasm module initialization`);
        }
        function Oe(e) {
            Object.getOwnPropertyDescriptor(d, e) && S(`\`Module.${e}\` was supplied but \`${e}\` not included in INCOMING_MODULE_JS_API`);
        }
        function Me(e) {
            return e === "FS_createPath" || e === "FS_createDataFile" || e === "FS_createPreloadedFile" || e === "FS_preloadFile" || e === "FS_unlink" || e === "addRunDependency" || e === "FS_createLazyFile" || e === "FS_createDevice" || e === "removeRunDependency";
        }
        function De(e) {
            he(e);
        }
        function he(e) {
            Object.getOwnPropertyDescriptor(d, e) || Object.defineProperty(d, e, {
                configurable: !0,
                get () {
                    var r = `'${e}' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the Emscripten FAQ)`;
                    Me(e) && (r += ". Alternatively, forcing filesystem support (-sFORCE_FILESYSTEM) can export this for you"), S(r);
                }
            });
        }
        var pe, _e, I, G, de, _, D, re = !1;
        function ce() {
            var e = cr.buffer;
            I = new Int8Array(e), d.HEAPU8 = G = new Uint8Array(e), de = new Int32Array(e), d.HEAPU32 = _ = new Uint32Array(e), d.HEAPF64 = new Float64Array(e), D = new BigInt64Array(e), new BigUint64Array(e);
        }
        c(globalThis.Int32Array && globalThis.Float64Array && Int32Array.prototype.subarray && Int32Array.prototype.set, "JS engine does not provide full typed array support");
        function Qe() {
            if (d.preRun) for(typeof d.preRun == "function" && (d.preRun = [
                d.preRun
            ]); d.preRun.length;)Be(d.preRun.shift());
            ee("preRun"), or(ge);
        }
        function ur() {
            c(!re), re = !0, le(), !d.noFSInit && !n.initialized && n.init(), Pe.__wasm_call_ctors(), n.ignorePermissions = !1;
        }
        function er() {
            if (le(), d.postRun) for(typeof d.postRun == "function" && (d.postRun = [
                d.postRun
            ]); d.postRun.length;)ir(d.postRun.shift());
            ee("postRun"), or(Le);
        }
        function S(e) {
            d.onAbort?.(e), e = "Aborted(" + e + ")", N(e), se = !0;
            var r = new WebAssembly.RuntimeError(e);
            throw _e?.(r), r;
        }
        function P(e, r) {
            return (...t)=>{
                c(re, `native function \`${e}\` called before runtime initialization`);
                var o = Pe[e];
                return c(o, `exported native function \`${e}\` not found`), c(t.length <= r, `native function \`${e}\` called with ${t.length} args but expects ${r}`), o(...t);
            };
        }
        var Ee;
        function fr() {
            return d.locateFile ? Z("deform.wasm") : new URL("/hekatan-struct-lineal/assets/deform-BuMSob7g.wasm", import.meta.url).href;
        }
        function rr(e) {
            if (e == Ee && ae) return new Uint8Array(ae);
            if (Q) return Q(e);
            throw "both async and sync fetching of the wasm failed";
        }
        async function tr(e) {
            if (!ae) try {
                var r = await oe(e);
                return new Uint8Array(r);
            } catch  {}
            return rr(e);
        }
        async function Ce(e, r) {
            try {
                var t = await tr(e), o = await WebAssembly.instantiate(t, r);
                return o;
            } catch (i) {
                N(`failed to asynchronously prepare wasm: ${i}`), b(e) && N(`warning: Loading from a file URI (${e}) is not supported in most browsers. See https://emscripten.org/docs/getting_started/FAQ.html#how-do-i-run-a-local-webserver-for-testing-why-does-my-program-stall-in-downloading-or-preparing`), S(i);
            }
        }
        async function Ie(e, r, t) {
            if (!e && !b(r) && !H) try {
                var o = fetch(r, {
                    credentials: "same-origin"
                }), i = await WebAssembly.instantiateStreaming(o, t);
                return i;
            } catch (a) {
                N(`wasm streaming compile failed: ${a}`), N("falling back to ArrayBuffer instantiation");
            }
            return Ce(r, t);
        }
        function Ue() {
            var e = {
                env: Ar,
                wasi_snapshot_preview1: Ar
            };
            return e;
        }
        async function nr() {
            function e(s, l) {
                return Pe = s.exports, Zr(Pe), ce(), Pe;
            }
            var r = d;
            function t(s) {
                return c(d === r, "the Module object should not be replaced during async compilation - perhaps the order of HTML elements is wrong?"), r = null, e(s.instance);
            }
            var o = Ue();
            if (d.instantiateWasm) return new Promise((s, l)=>{
                try {
                    d.instantiateWasm(o, (u, f)=>{
                        s(e(u, f));
                    });
                } catch (u) {
                    N(`Module.instantiateWasm callback failed with error: ${u}`), l(u);
                }
            });
            Ee ??= fr();
            var i = await Ie(ae, Ee, o), a = t(i);
            return a;
        }
        var or = (e)=>{
            for(; e.length > 0;)e.shift()(d);
        }, Le = [], ir = (e)=>Le.push(e), ge = [], Be = (e)=>ge.push(e), $ = (e)=>(c(typeof e == "number", `ptrToString expects a number, got ${typeof e}`), e >>>= 0, "0x" + e.toString(16).padStart(8, "0")), te = (e)=>{
            te.shown ||= {}, te.shown[e] || (te.shown[e] = 1, H && (e = "warning: " + e), N(e));
        }, ze = globalThis.TextDecoder && new TextDecoder, He = (e, r, t, o)=>{
            for(var i = r + t; e[r] && !(r >= i);)++r;
            return r;
        }, V = (e, r = 0, t, o)=>{
            var i = He(e, r, t);
            if (i - r > 16 && e.buffer && ze) return ze.decode(e.subarray(r, i));
            for(var a = ""; r < i;){
                var s = e[r++];
                if (!(s & 128)) {
                    a += String.fromCharCode(s);
                    continue;
                }
                var l = e[r++] & 63;
                if ((s & 224) == 192) {
                    a += String.fromCharCode((s & 31) << 6 | l);
                    continue;
                }
                var u = e[r++] & 63;
                if ((s & 240) == 224 ? s = (s & 15) << 12 | l << 6 | u : ((s & 248) != 240 && te("Invalid UTF-8 leading byte " + $(s) + " encountered when deserializing a UTF-8 string in wasm memory to a JS string!"), s = (s & 7) << 18 | l << 12 | u << 6 | e[r++] & 63), s < 65536) a += String.fromCharCode(s);
                else {
                    var f = s - 65536;
                    a += String.fromCharCode(55296 | f >> 10, 56320 | f & 1023);
                }
            }
            return a;
        }, Y = (e, r, t)=>(c(typeof e == "number", `UTF8ToString expects a number (got ${typeof e})`), e ? V(G, e, r) : ""), xe = (e, r, t, o)=>S(`Assertion failed: ${Y(e)}, at: ` + [
                r ? Y(r) : "unknown filename",
                t,
                o ? Y(o) : "unknown function"
            ]);
        class We {
            constructor(r){
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
                r = r ? 1 : 0, I[this.ptr + 12] = r;
            }
            get_caught() {
                return I[this.ptr + 12] != 0;
            }
            set_rethrown(r) {
                r = r ? 1 : 0, I[this.ptr + 13] = r;
            }
            get_rethrown() {
                return I[this.ptr + 13] != 0;
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
        var je = (e, r, t)=>{
            var o = new We(e);
            o.init(r, t), c(!1, "Exception thrown, but exception catching is not enabled. Compile with -sNO_DISABLE_EXCEPTION_CATCHING or -sEXCEPTION_CATCHING_ALLOWED=[..] to catch.");
        }, Ge = ()=>S("native code called abort()"), ye = (e, r, t, o)=>{
            if (c(typeof e == "string", `stringToUTF8Array expects a string (got ${typeof e})`), !(o > 0)) return 0;
            for(var i = t, a = t + o - 1, s = 0; s < e.length; ++s){
                var l = e.codePointAt(s);
                if (l <= 127) {
                    if (t >= a) break;
                    r[t++] = l;
                } else if (l <= 2047) {
                    if (t + 1 >= a) break;
                    r[t++] = 192 | l >> 6, r[t++] = 128 | l & 63;
                } else if (l <= 65535) {
                    if (t + 2 >= a) break;
                    r[t++] = 224 | l >> 12, r[t++] = 128 | l >> 6 & 63, r[t++] = 128 | l & 63;
                } else {
                    if (t + 3 >= a) break;
                    l > 1114111 && te("Invalid Unicode code point " + $(l) + " encountered when serializing a JS string to a UTF-8 string in wasm memory! (Valid unicode code points should be in range 0-0x10FFFF)."), r[t++] = 240 | l >> 18, r[t++] = 128 | l >> 12 & 63, r[t++] = 128 | l >> 6 & 63, r[t++] = 128 | l & 63, s++;
                }
            }
            return r[t] = 0, t - i;
        }, X = (e, r, t)=>(c(typeof t == "number", "stringToUTF8(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!"), ye(e, G, r, t)), ue = (e)=>{
            for(var r = 0, t = 0; t < e.length; ++t){
                var o = e.charCodeAt(t);
                o <= 127 ? r++ : o <= 2047 ? r += 2 : o >= 55296 && o <= 57343 ? (r += 4, ++t) : r += 3;
            }
            return r;
        }, $e = (e, r, t, o)=>{
            var i = new Date().getFullYear(), a = new Date(i, 0, 1), s = new Date(i, 6, 1), l = a.getTimezoneOffset(), u = s.getTimezoneOffset(), f = Math.max(l, u);
            _[e >> 2] = f * 60, de[r >> 2] = +(l != u);
            var y = (E)=>{
                var T = E >= 0 ? "-" : "+", B = Math.abs(E), z = String(Math.floor(B / 60)).padStart(2, "0"), L = String(B % 60).padStart(2, "0");
                return `UTC${T}${z}${L}`;
            }, w = y(l), m = y(u);
            c(w), c(m), c(ue(w) <= 16, `timezone name truncated to fit in TZNAME_MAX (${w})`), c(ue(m) <= 16, `timezone name truncated to fit in TZNAME_MAX (${m})`), u < l ? (X(w, t, 17), X(m, o, 17)) : (X(w, o, 17), X(m, t, 17));
        }, Ve = ()=>performance.now(), we = ()=>Date.now(), qe = (e)=>e >= 0 && e <= 3, Ke = 9007199254740992, Se = -9007199254740992, ar = (e)=>e < Se || e > Ke ? NaN : Number(e);
        function sr(e, r, t) {
            if (!qe(e)) return 28;
            var o;
            e === 0 ? o = we() : o = Ve();
            var i = Math.round(o * 1e3 * 1e3);
            return D[t >> 3] = BigInt(i), 0;
        }
        var lr = ()=>2147483648, A = (e, r)=>(c(r, "alignment argument is required"), Math.ceil(e / r) * r), U = (e)=>{
            var r = cr.buffer.byteLength, t = (e - r + 65535) / 65536 | 0;
            try {
                return cr.grow(t), ce(), 1;
            } catch (o) {
                N(`growMemory: Attempted to grow heap from ${r} bytes to ${e} bytes, but got error: ${o}`);
            }
        }, mr = (e)=>{
            var r = G.length;
            e >>>= 0, c(e > r);
            var t = lr();
            if (e > t) return N(`Cannot enlarge memory, requested ${e} bytes, but the limit is ${t} bytes!`), !1;
            for(var o = 1; o <= 4; o *= 2){
                var i = r * (1 + .2 / o);
                i = Math.min(i, e + 100663296);
                var a = Math.min(t, A(Math.max(e, i), 65536)), s = U(a);
                if (s) return !0;
            }
            return N(`Failed to grow the heap from ${r} bytes to ${a} bytes, not enough memory!`), !1;
        }, Fe = {}, dr = ()=>J || "./this.program", Ye = ()=>{
            if (!Ye.strings) {
                var e = (globalThis.navigator?.language ?? "C").replace("-", "_") + ".UTF-8", r = {
                    USER: "web_user",
                    LOGNAME: "web_user",
                    PATH: "/",
                    PWD: "/",
                    HOME: "/home/web_user",
                    LANG: e,
                    _: dr()
                };
                for(var t in Fe)Fe[t] === void 0 ? delete r[t] : r[t] = Fe[t];
                var o = [];
                for(var t in r)o.push(`${t}=${r[t]}`);
                Ye.strings = o;
            }
            return Ye.strings;
        }, Rr = (e, r)=>{
            var t = 0, o = 0;
            for (var i of Ye()){
                var a = r + t;
                _[e + o >> 2] = a, t += X(i, a, 1 / 0) + 1, o += 4;
            }
            return 0;
        }, Or = (e, r)=>{
            var t = Ye();
            _[e >> 2] = t.length;
            var o = 0;
            for (var i of t)o += ue(i) + 1;
            return _[r >> 2] = o, 0;
        }, F = {
            isAbs: (e)=>e.charAt(0) === "/",
            splitPath: (e)=>{
                var r = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
                return r.exec(e).slice(1);
            },
            normalizeArray: (e, r)=>{
                for(var t = 0, o = e.length - 1; o >= 0; o--){
                    var i = e[o];
                    i === "." ? e.splice(o, 1) : i === ".." ? (e.splice(o, 1), t++) : t && (e.splice(o, 1), t--);
                }
                if (r) for(; t; t--)e.unshift("..");
                return e;
            },
            normalize: (e)=>{
                var r = F.isAbs(e), t = e.slice(-1) === "/";
                return e = F.normalizeArray(e.split("/").filter((o)=>!!o), !r).join("/"), !e && !r && (e = "."), e && t && (e += "/"), (r ? "/" : "") + e;
            },
            dirname: (e)=>{
                var r = F.splitPath(e), t = r[0], o = r[1];
                return !t && !o ? "." : (o && (o = o.slice(0, -1)), t + o);
            },
            basename: (e)=>e && e.match(/([^\/]+|\/)\/*$/)[1],
            join: (...e)=>F.normalize(e.join("/")),
            join2: (e, r)=>F.normalize(e + "/" + r)
        }, Mr = ()=>{
            if (H) {
                var e = K("crypto");
                return (r)=>e.randomFillSync(r);
            }
            return (r)=>crypto.getRandomValues(r);
        }, gr = (e)=>{
            (gr = Mr())(e);
        }, ke = {
            resolve: (...e)=>{
                for(var r = "", t = !1, o = e.length - 1; o >= -1 && !t; o--){
                    var i = o >= 0 ? e[o] : n.cwd();
                    if (typeof i != "string") throw new TypeError("Arguments to path.resolve must be strings");
                    if (!i) return "";
                    r = i + "/" + r, t = F.isAbs(i);
                }
                return r = F.normalizeArray(r.split("/").filter((a)=>!!a), !t).join("/"), (t ? "/" : "") + r || ".";
            },
            relative: (e, r)=>{
                e = ke.resolve(e).slice(1), r = ke.resolve(r).slice(1);
                function t(f) {
                    for(var y = 0; y < f.length && f[y] === ""; y++);
                    for(var w = f.length - 1; w >= 0 && f[w] === ""; w--);
                    return y > w ? [] : f.slice(y, w - y + 1);
                }
                for(var o = t(e.split("/")), i = t(r.split("/")), a = Math.min(o.length, i.length), s = a, l = 0; l < a; l++)if (o[l] !== i[l]) {
                    s = l;
                    break;
                }
                for(var u = [], l = s; l < o.length; l++)u.push("..");
                return u = u.concat(i.slice(s)), u.join("/");
            }
        }, vr = [], hr = (e, r, t)=>{
            var o = ue(e) + 1, i = new Array(o), a = ye(e, i, 0, i.length);
            return i.length = a, i;
        }, Dr = ()=>{
            if (!vr.length) {
                var e = null;
                if (H) {
                    var r = 256, t = Buffer.alloc(r), o = 0, i = process.stdin.fd;
                    try {
                        o = Ne.readSync(i, t, 0, r);
                    } catch (a) {
                        if (a.toString().includes("EOF")) o = 0;
                        else throw a;
                    }
                    o > 0 && (e = t.slice(0, o).toString("utf-8"));
                } else globalThis.window?.prompt && (e = window.prompt("Input: "), e !== null && (e += `
`));
                if (!e) return null;
                vr = hr(e);
            }
            return vr.shift();
        }, fe = {
            ttys: [],
            init () {},
            shutdown () {},
            register (e, r) {
                fe.ttys[e] = {
                    input: [],
                    output: [],
                    ops: r
                }, n.registerDevice(e, fe.stream_ops);
            },
            stream_ops: {
                open (e) {
                    var r = fe.ttys[e.node.rdev];
                    if (!r) throw new n.ErrnoError(43);
                    e.tty = r, e.seekable = !1;
                },
                close (e) {
                    e.tty.ops.fsync(e.tty);
                },
                fsync (e) {
                    e.tty.ops.fsync(e.tty);
                },
                read (e, r, t, o, i) {
                    if (!e.tty || !e.tty.ops.get_char) throw new n.ErrnoError(60);
                    for(var a = 0, s = 0; s < o; s++){
                        var l;
                        try {
                            l = e.tty.ops.get_char(e.tty);
                        } catch  {
                            throw new n.ErrnoError(29);
                        }
                        if (l === void 0 && a === 0) throw new n.ErrnoError(6);
                        if (l == null) break;
                        a++, r[t + s] = l;
                    }
                    return a && (e.node.atime = Date.now()), a;
                },
                write (e, r, t, o, i) {
                    if (!e.tty || !e.tty.ops.put_char) throw new n.ErrnoError(60);
                    try {
                        for(var a = 0; a < o; a++)e.tty.ops.put_char(e.tty, r[t + a]);
                    } catch  {
                        throw new n.ErrnoError(29);
                    }
                    return o && (e.node.mtime = e.node.ctime = Date.now()), a;
                }
            },
            default_tty_ops: {
                get_char (e) {
                    return Dr();
                },
                put_char (e, r) {
                    r === null || r === 10 ? (ie(V(e.output)), e.output = []) : r != 0 && e.output.push(r);
                },
                fsync (e) {
                    e.output?.length > 0 && (ie(V(e.output)), e.output = []);
                },
                ioctl_tcgets (e) {
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
                ioctl_tcsets (e, r, t) {
                    return 0;
                },
                ioctl_tiocgwinsz (e) {
                    return [
                        24,
                        80
                    ];
                }
            },
            default_tty1_ops: {
                put_char (e, r) {
                    r === null || r === 10 ? (N(V(e.output)), e.output = []) : r != 0 && e.output.push(r);
                },
                fsync (e) {
                    e.output?.length > 0 && (N(V(e.output)), e.output = []);
                }
            }
        }, yr = (e)=>{
            S("internal error: mmapAlloc called but `emscripten_builtin_memalign` native symbol not exported");
        }, p = {
            ops_table: null,
            mount (e) {
                return p.createNode(null, "/", 16895, 0);
            },
            createNode (e, r, t, o) {
                if (n.isBlkdev(t) || n.isFIFO(t)) throw new n.ErrnoError(63);
                p.ops_table ||= {
                    dir: {
                        node: {
                            getattr: p.node_ops.getattr,
                            setattr: p.node_ops.setattr,
                            lookup: p.node_ops.lookup,
                            mknod: p.node_ops.mknod,
                            rename: p.node_ops.rename,
                            unlink: p.node_ops.unlink,
                            rmdir: p.node_ops.rmdir,
                            readdir: p.node_ops.readdir,
                            symlink: p.node_ops.symlink
                        },
                        stream: {
                            llseek: p.stream_ops.llseek
                        }
                    },
                    file: {
                        node: {
                            getattr: p.node_ops.getattr,
                            setattr: p.node_ops.setattr
                        },
                        stream: {
                            llseek: p.stream_ops.llseek,
                            read: p.stream_ops.read,
                            write: p.stream_ops.write,
                            mmap: p.stream_ops.mmap,
                            msync: p.stream_ops.msync
                        }
                    },
                    link: {
                        node: {
                            getattr: p.node_ops.getattr,
                            setattr: p.node_ops.setattr,
                            readlink: p.node_ops.readlink
                        },
                        stream: {}
                    },
                    chrdev: {
                        node: {
                            getattr: p.node_ops.getattr,
                            setattr: p.node_ops.setattr
                        },
                        stream: n.chrdev_stream_ops
                    }
                };
                var i = n.createNode(e, r, t, o);
                return n.isDir(i.mode) ? (i.node_ops = p.ops_table.dir.node, i.stream_ops = p.ops_table.dir.stream, i.contents = {}) : n.isFile(i.mode) ? (i.node_ops = p.ops_table.file.node, i.stream_ops = p.ops_table.file.stream, i.usedBytes = 0, i.contents = null) : n.isLink(i.mode) ? (i.node_ops = p.ops_table.link.node, i.stream_ops = p.ops_table.link.stream) : n.isChrdev(i.mode) && (i.node_ops = p.ops_table.chrdev.node, i.stream_ops = p.ops_table.chrdev.stream), i.atime = i.mtime = i.ctime = Date.now(), e && (e.contents[r] = i, e.atime = e.mtime = e.ctime = i.atime), i;
            },
            getFileDataAsTypedArray (e) {
                return e.contents ? e.contents.subarray ? e.contents.subarray(0, e.usedBytes) : new Uint8Array(e.contents) : new Uint8Array(0);
            },
            expandFileStorage (e, r) {
                var t = e.contents ? e.contents.length : 0;
                if (!(t >= r)) {
                    var o = 1024 * 1024;
                    r = Math.max(r, t * (t < o ? 2 : 1.125) >>> 0), t != 0 && (r = Math.max(r, 256));
                    var i = e.contents;
                    e.contents = new Uint8Array(r), e.usedBytes > 0 && e.contents.set(i.subarray(0, e.usedBytes), 0);
                }
            },
            resizeFileStorage (e, r) {
                if (e.usedBytes != r) if (r == 0) e.contents = null, e.usedBytes = 0;
                else {
                    var t = e.contents;
                    e.contents = new Uint8Array(r), t && e.contents.set(t.subarray(0, Math.min(r, e.usedBytes))), e.usedBytes = r;
                }
            },
            node_ops: {
                getattr (e) {
                    var r = {};
                    return r.dev = n.isChrdev(e.mode) ? e.id : 1, r.ino = e.id, r.mode = e.mode, r.nlink = 1, r.uid = 0, r.gid = 0, r.rdev = e.rdev, n.isDir(e.mode) ? r.size = 4096 : n.isFile(e.mode) ? r.size = e.usedBytes : n.isLink(e.mode) ? r.size = e.link.length : r.size = 0, r.atime = new Date(e.atime), r.mtime = new Date(e.mtime), r.ctime = new Date(e.ctime), r.blksize = 4096, r.blocks = Math.ceil(r.size / r.blksize), r;
                },
                setattr (e, r) {
                    for (const t of [
                        "mode",
                        "atime",
                        "mtime",
                        "ctime"
                    ])r[t] != null && (e[t] = r[t]);
                    r.size !== void 0 && p.resizeFileStorage(e, r.size);
                },
                lookup (e, r) {
                    throw new n.ErrnoError(44);
                },
                mknod (e, r, t, o) {
                    return p.createNode(e, r, t, o);
                },
                rename (e, r, t) {
                    var o;
                    try {
                        o = n.lookupNode(r, t);
                    } catch  {}
                    if (o) {
                        if (n.isDir(e.mode)) for(var i in o.contents)throw new n.ErrnoError(55);
                        n.hashRemoveNode(o);
                    }
                    delete e.parent.contents[e.name], r.contents[t] = e, e.name = t, r.ctime = r.mtime = e.parent.ctime = e.parent.mtime = Date.now();
                },
                unlink (e, r) {
                    delete e.contents[r], e.ctime = e.mtime = Date.now();
                },
                rmdir (e, r) {
                    var t = n.lookupNode(e, r);
                    for(var o in t.contents)throw new n.ErrnoError(55);
                    delete e.contents[r], e.ctime = e.mtime = Date.now();
                },
                readdir (e) {
                    return [
                        ".",
                        "..",
                        ...Object.keys(e.contents)
                    ];
                },
                symlink (e, r, t) {
                    var o = p.createNode(e, r, 41471, 0);
                    return o.link = t, o;
                },
                readlink (e) {
                    if (!n.isLink(e.mode)) throw new n.ErrnoError(28);
                    return e.link;
                }
            },
            stream_ops: {
                read (e, r, t, o, i) {
                    var a = e.node.contents;
                    if (i >= e.node.usedBytes) return 0;
                    var s = Math.min(e.node.usedBytes - i, o);
                    if (c(s >= 0), s > 8 && a.subarray) r.set(a.subarray(i, i + s), t);
                    else for(var l = 0; l < s; l++)r[t + l] = a[i + l];
                    return s;
                },
                write (e, r, t, o, i, a) {
                    if (c(!(r instanceof ArrayBuffer)), r.buffer === I.buffer && (a = !1), !o) return 0;
                    var s = e.node;
                    if (s.mtime = s.ctime = Date.now(), r.subarray && (!s.contents || s.contents.subarray)) {
                        if (a) return c(i === 0, "canOwn must imply no weird position inside the file"), s.contents = r.subarray(t, t + o), s.usedBytes = o, o;
                        if (s.usedBytes === 0 && i === 0) return s.contents = r.slice(t, t + o), s.usedBytes = o, o;
                        if (i + o <= s.usedBytes) return s.contents.set(r.subarray(t, t + o), i), o;
                    }
                    if (p.expandFileStorage(s, i + o), s.contents.subarray && r.subarray) s.contents.set(r.subarray(t, t + o), i);
                    else for(var l = 0; l < o; l++)s.contents[i + l] = r[t + l];
                    return s.usedBytes = Math.max(s.usedBytes, i + o), o;
                },
                llseek (e, r, t) {
                    var o = r;
                    if (t === 1 ? o += e.position : t === 2 && n.isFile(e.node.mode) && (o += e.node.usedBytes), o < 0) throw new n.ErrnoError(28);
                    return o;
                },
                mmap (e, r, t, o, i) {
                    if (!n.isFile(e.node.mode)) throw new n.ErrnoError(43);
                    var a, s, l = e.node.contents;
                    if (!(i & 2) && l && l.buffer === I.buffer) s = !1, a = l.byteOffset;
                    else {
                        if (s = !0, a = yr(), !a) throw new n.ErrnoError(48);
                        l && ((t > 0 || t + r < l.length) && (l.subarray ? l = l.subarray(t, t + r) : l = Array.prototype.slice.call(l, t, t + r)), I.set(l, a));
                    }
                    return {
                        ptr: a,
                        allocated: s
                    };
                },
                msync (e, r, t, o, i) {
                    return p.stream_ops.write(e, r, 0, o, t, !1), 0;
                }
            }
        }, Cr = (e)=>{
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
        }, pr = (e, r)=>{
            var t = 0;
            return e && (t |= 365), r && (t |= 146), t;
        }, Ir = (e)=>Y(br(e)), wr = {
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
        }, Ur = async (e)=>{
            var r = await oe(e);
            return c(r, `Loading data file "${e}" failed (no arrayBuffer).`), new Uint8Array(r);
        }, Lr = (...e)=>n.createDataFile(...e), Br = (e)=>{
            for(var r = e;;){
                if (!be[e]) return e;
                e = r + Math.random();
            }
        }, me = 0, Xe = null, be = {}, ne = null, zr = (e)=>{
            if (me--, d.monitorRunDependencies?.(me), c(e, "removeRunDependency requires an ID"), c(be[e]), delete be[e], me == 0 && (ne !== null && (clearInterval(ne), ne = null), Xe)) {
                var r = Xe;
                Xe = null, r();
            }
        }, Hr = (e)=>{
            me++, d.monitorRunDependencies?.(me), c(e, "addRunDependency requires an ID"), c(!be[e]), be[e] = 1, ne === null && globalThis.setInterval && (ne = setInterval(()=>{
                if (se) {
                    clearInterval(ne), ne = null;
                    return;
                }
                var r = !1;
                for(var t in be)r || (r = !0, N("still waiting on run dependencies:")), N(`dependency: ${t}`);
                r && N("(end of list)");
            }, 1e4), ne.unref?.());
        }, Sr = [], xr = async (e, r)=>{
            typeof Browser < "u" && Browser.init();
            for (var t of Sr)if (t.canHandle(r)) return c(t.handle.constructor.name === "AsyncFunction", "Filesystem plugin handlers must be async functions (See #24914)"), t.handle(e, r);
            return e;
        }, Fr = async (e, r, t, o, i, a, s, l)=>{
            var u = r ? ke.resolve(F.join2(e, r)) : e, f = Br(`cp ${u}`);
            Hr(f);
            try {
                var y = t;
                typeof t == "string" && (y = await Ur(t)), y = await xr(y, u), l?.(), a || Lr(e, r, y, o, i, s);
            } finally{
                zr(f);
            }
        }, Wr = (e, r, t, o, i, a, s, l, u, f)=>{
            Fr(e, r, t, o, i, l, u, f).then(a).catch(s);
        }, n = {
            root: null,
            mounts: [],
            devices: {},
            streams: [],
            nextInode: 1,
            nameTable: null,
            currentPath: "/",
            initialized: !1,
            ignorePermissions: !0,
            filesystems: null,
            syncFSRequests: 0,
            readFiles: {},
            ErrnoError: class extends Error {
                name = "ErrnoError";
                constructor(e){
                    super(re ? Ir(e) : ""), this.errno = e;
                    for(var r in wr)if (wr[r] === e) {
                        this.code = r;
                        break;
                    }
                }
            },
            FSStream: class {
                shared = {};
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
                node_ops = {};
                stream_ops = {};
                readMode = 365;
                writeMode = 146;
                mounted = null;
                constructor(e, r, t, o){
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
            lookupPath (e, r = {}) {
                if (!e) throw new n.ErrnoError(44);
                r.follow_mount ??= !0, F.isAbs(e) || (e = n.cwd() + "/" + e);
                e: for(var t = 0; t < 40; t++){
                    for(var o = e.split("/").filter((f)=>!!f), i = n.root, a = "/", s = 0; s < o.length; s++){
                        var l = s === o.length - 1;
                        if (l && r.parent) break;
                        if (o[s] !== ".") {
                            if (o[s] === "..") {
                                if (a = F.dirname(a), n.isRoot(i)) {
                                    e = a + "/" + o.slice(s + 1).join("/"), t--;
                                    continue e;
                                } else i = i.parent;
                                continue;
                            }
                            a = F.join2(a, o[s]);
                            try {
                                i = n.lookupNode(i, o[s]);
                            } catch (f) {
                                if (f?.errno === 44 && l && r.noent_okay) return {
                                    path: a
                                };
                                throw f;
                            }
                            if (n.isMountpoint(i) && (!l || r.follow_mount) && (i = i.mounted.root), n.isLink(i.mode) && (!l || r.follow)) {
                                if (!i.node_ops.readlink) throw new n.ErrnoError(52);
                                var u = i.node_ops.readlink(i);
                                F.isAbs(u) || (u = F.dirname(a) + "/" + u), e = u + "/" + o.slice(s + 1).join("/");
                                continue e;
                            }
                        }
                    }
                    return {
                        path: a,
                        node: i
                    };
                }
                throw new n.ErrnoError(32);
            },
            getPath (e) {
                for(var r;;){
                    if (n.isRoot(e)) {
                        var t = e.mount.mountpoint;
                        return r ? t[t.length - 1] !== "/" ? `${t}/${r}` : t + r : t;
                    }
                    r = r ? `${e.name}/${r}` : e.name, e = e.parent;
                }
            },
            hashName (e, r) {
                for(var t = 0, o = 0; o < r.length; o++)t = (t << 5) - t + r.charCodeAt(o) | 0;
                return (e + t >>> 0) % n.nameTable.length;
            },
            hashAddNode (e) {
                var r = n.hashName(e.parent.id, e.name);
                e.name_next = n.nameTable[r], n.nameTable[r] = e;
            },
            hashRemoveNode (e) {
                var r = n.hashName(e.parent.id, e.name);
                if (n.nameTable[r] === e) n.nameTable[r] = e.name_next;
                else for(var t = n.nameTable[r]; t;){
                    if (t.name_next === e) {
                        t.name_next = e.name_next;
                        break;
                    }
                    t = t.name_next;
                }
            },
            lookupNode (e, r) {
                var t = n.mayLookup(e);
                if (t) throw new n.ErrnoError(t);
                for(var o = n.hashName(e.id, r), i = n.nameTable[o]; i; i = i.name_next){
                    var a = i.name;
                    if (i.parent.id === e.id && a === r) return i;
                }
                return n.lookup(e, r);
            },
            createNode (e, r, t, o) {
                c(typeof e == "object");
                var i = new n.FSNode(e, r, t, o);
                return n.hashAddNode(i), i;
            },
            destroyNode (e) {
                n.hashRemoveNode(e);
            },
            isRoot (e) {
                return e === e.parent;
            },
            isMountpoint (e) {
                return !!e.mounted;
            },
            isFile (e) {
                return (e & 61440) === 32768;
            },
            isDir (e) {
                return (e & 61440) === 16384;
            },
            isLink (e) {
                return (e & 61440) === 40960;
            },
            isChrdev (e) {
                return (e & 61440) === 8192;
            },
            isBlkdev (e) {
                return (e & 61440) === 24576;
            },
            isFIFO (e) {
                return (e & 61440) === 4096;
            },
            isSocket (e) {
                return (e & 49152) === 49152;
            },
            flagsToPermissionString (e) {
                var r = [
                    "r",
                    "w",
                    "rw"
                ][e & 3];
                return e & 512 && (r += "w"), r;
            },
            nodePermissions (e, r) {
                return n.ignorePermissions ? 0 : r.includes("r") && !(e.mode & 292) || r.includes("w") && !(e.mode & 146) || r.includes("x") && !(e.mode & 73) ? 2 : 0;
            },
            mayLookup (e) {
                if (!n.isDir(e.mode)) return 54;
                var r = n.nodePermissions(e, "x");
                return r || (e.node_ops.lookup ? 0 : 2);
            },
            mayCreate (e, r) {
                if (!n.isDir(e.mode)) return 54;
                try {
                    var t = n.lookupNode(e, r);
                    return 20;
                } catch  {}
                return n.nodePermissions(e, "wx");
            },
            mayDelete (e, r, t) {
                var o;
                try {
                    o = n.lookupNode(e, r);
                } catch (a) {
                    return a.errno;
                }
                var i = n.nodePermissions(e, "wx");
                if (i) return i;
                if (t) {
                    if (!n.isDir(o.mode)) return 54;
                    if (n.isRoot(o) || n.getPath(o) === n.cwd()) return 10;
                } else if (n.isDir(o.mode)) return 31;
                return 0;
            },
            mayOpen (e, r) {
                return e ? n.isLink(e.mode) ? 32 : n.isDir(e.mode) && (n.flagsToPermissionString(r) !== "r" || r & 576) ? 31 : n.nodePermissions(e, n.flagsToPermissionString(r)) : 44;
            },
            checkOpExists (e, r) {
                if (!e) throw new n.ErrnoError(r);
                return e;
            },
            MAX_OPEN_FDS: 4096,
            nextfd () {
                for(var e = 0; e <= n.MAX_OPEN_FDS; e++)if (!n.streams[e]) return e;
                throw new n.ErrnoError(33);
            },
            getStreamChecked (e) {
                var r = n.getStream(e);
                if (!r) throw new n.ErrnoError(8);
                return r;
            },
            getStream: (e)=>n.streams[e],
            createStream (e, r = -1) {
                return c(r >= -1), e = Object.assign(new n.FSStream, e), r == -1 && (r = n.nextfd()), e.fd = r, n.streams[r] = e, e;
            },
            closeStream (e) {
                n.streams[e] = null;
            },
            dupStream (e, r = -1) {
                var t = n.createStream(e, r);
                return t.stream_ops?.dup?.(t), t;
            },
            doSetAttr (e, r, t) {
                var o = e?.stream_ops.setattr, i = o ? e : r;
                o ??= r.node_ops.setattr, n.checkOpExists(o, 63), o(i, t);
            },
            chrdev_stream_ops: {
                open (e) {
                    var r = n.getDevice(e.node.rdev);
                    e.stream_ops = r.stream_ops, e.stream_ops.open?.(e);
                },
                llseek () {
                    throw new n.ErrnoError(70);
                }
            },
            major: (e)=>e >> 8,
            minor: (e)=>e & 255,
            makedev: (e, r)=>e << 8 | r,
            registerDevice (e, r) {
                n.devices[e] = {
                    stream_ops: r
                };
            },
            getDevice: (e)=>n.devices[e],
            getMounts (e) {
                for(var r = [], t = [
                    e
                ]; t.length;){
                    var o = t.pop();
                    r.push(o), t.push(...o.mounts);
                }
                return r;
            },
            syncfs (e, r) {
                typeof e == "function" && (r = e, e = !1), n.syncFSRequests++, n.syncFSRequests > 1 && N(`warning: ${n.syncFSRequests} FS.syncfs operations in flight at once, probably just doing extra work`);
                var t = n.getMounts(n.root.mount), o = 0;
                function i(l) {
                    return c(n.syncFSRequests > 0), n.syncFSRequests--, r(l);
                }
                function a(l) {
                    if (l) return a.errored ? void 0 : (a.errored = !0, i(l));
                    ++o >= t.length && i(null);
                }
                for (var s of t)s.type.syncfs ? s.type.syncfs(s, e, a) : a(null);
            },
            mount (e, r, t) {
                if (typeof e == "string") throw e;
                var o = t === "/", i = !t, a;
                if (o && n.root) throw new n.ErrnoError(10);
                if (!o && !i) {
                    var s = n.lookupPath(t, {
                        follow_mount: !1
                    });
                    if (t = s.path, a = s.node, n.isMountpoint(a)) throw new n.ErrnoError(10);
                    if (!n.isDir(a.mode)) throw new n.ErrnoError(54);
                }
                var l = {
                    type: e,
                    opts: r,
                    mountpoint: t,
                    mounts: []
                }, u = e.mount(l);
                return u.mount = l, l.root = u, o ? n.root = u : a && (a.mounted = l, a.mount && a.mount.mounts.push(l)), u;
            },
            unmount (e) {
                var r = n.lookupPath(e, {
                    follow_mount: !1
                });
                if (!n.isMountpoint(r.node)) throw new n.ErrnoError(28);
                var t = r.node, o = t.mounted, i = n.getMounts(o);
                for (var [a, s] of Object.entries(n.nameTable))for(; s;){
                    var l = s.name_next;
                    i.includes(s.mount) && n.destroyNode(s), s = l;
                }
                t.mounted = null;
                var u = t.mount.mounts.indexOf(o);
                c(u !== -1), t.mount.mounts.splice(u, 1);
            },
            lookup (e, r) {
                return e.node_ops.lookup(e, r);
            },
            mknod (e, r, t) {
                var o = n.lookupPath(e, {
                    parent: !0
                }), i = o.node, a = F.basename(e);
                if (!a) throw new n.ErrnoError(28);
                if (a === "." || a === "..") throw new n.ErrnoError(20);
                var s = n.mayCreate(i, a);
                if (s) throw new n.ErrnoError(s);
                if (!i.node_ops.mknod) throw new n.ErrnoError(63);
                return i.node_ops.mknod(i, a, r, t);
            },
            statfs (e) {
                return n.statfsNode(n.lookupPath(e, {
                    follow: !0
                }).node);
            },
            statfsStream (e) {
                return n.statfsNode(e.node);
            },
            statfsNode (e) {
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
            create (e, r = 438) {
                return r &= 4095, r |= 32768, n.mknod(e, r, 0);
            },
            mkdir (e, r = 511) {
                return r &= 1023, r |= 16384, n.mknod(e, r, 0);
            },
            mkdirTree (e, r) {
                var t = e.split("/"), o = "";
                for (var i of t)if (i) {
                    (o || F.isAbs(e)) && (o += "/"), o += i;
                    try {
                        n.mkdir(o, r);
                    } catch (a) {
                        if (a.errno != 20) throw a;
                    }
                }
            },
            mkdev (e, r, t) {
                return typeof t > "u" && (t = r, r = 438), r |= 8192, n.mknod(e, r, t);
            },
            symlink (e, r) {
                if (!ke.resolve(e)) throw new n.ErrnoError(44);
                var t = n.lookupPath(r, {
                    parent: !0
                }), o = t.node;
                if (!o) throw new n.ErrnoError(44);
                var i = F.basename(r), a = n.mayCreate(o, i);
                if (a) throw new n.ErrnoError(a);
                if (!o.node_ops.symlink) throw new n.ErrnoError(63);
                return o.node_ops.symlink(o, i, e);
            },
            rename (e, r) {
                var t = F.dirname(e), o = F.dirname(r), i = F.basename(e), a = F.basename(r), s, l, u;
                if (s = n.lookupPath(e, {
                    parent: !0
                }), l = s.node, s = n.lookupPath(r, {
                    parent: !0
                }), u = s.node, !l || !u) throw new n.ErrnoError(44);
                if (l.mount !== u.mount) throw new n.ErrnoError(75);
                var f = n.lookupNode(l, i), y = ke.relative(e, o);
                if (y.charAt(0) !== ".") throw new n.ErrnoError(28);
                if (y = ke.relative(r, t), y.charAt(0) !== ".") throw new n.ErrnoError(55);
                var w;
                try {
                    w = n.lookupNode(u, a);
                } catch  {}
                if (f !== w) {
                    var m = n.isDir(f.mode), E = n.mayDelete(l, i, m);
                    if (E) throw new n.ErrnoError(E);
                    if (E = w ? n.mayDelete(u, a, m) : n.mayCreate(u, a), E) throw new n.ErrnoError(E);
                    if (!l.node_ops.rename) throw new n.ErrnoError(63);
                    if (n.isMountpoint(f) || w && n.isMountpoint(w)) throw new n.ErrnoError(10);
                    if (u !== l && (E = n.nodePermissions(l, "w"), E)) throw new n.ErrnoError(E);
                    n.hashRemoveNode(f);
                    try {
                        l.node_ops.rename(f, u, a), f.parent = u;
                    } catch (T) {
                        throw T;
                    } finally{
                        n.hashAddNode(f);
                    }
                }
            },
            rmdir (e) {
                var r = n.lookupPath(e, {
                    parent: !0
                }), t = r.node, o = F.basename(e), i = n.lookupNode(t, o), a = n.mayDelete(t, o, !0);
                if (a) throw new n.ErrnoError(a);
                if (!t.node_ops.rmdir) throw new n.ErrnoError(63);
                if (n.isMountpoint(i)) throw new n.ErrnoError(10);
                t.node_ops.rmdir(t, o), n.destroyNode(i);
            },
            readdir (e) {
                var r = n.lookupPath(e, {
                    follow: !0
                }), t = r.node, o = n.checkOpExists(t.node_ops.readdir, 54);
                return o(t);
            },
            unlink (e) {
                var r = n.lookupPath(e, {
                    parent: !0
                }), t = r.node;
                if (!t) throw new n.ErrnoError(44);
                var o = F.basename(e), i = n.lookupNode(t, o), a = n.mayDelete(t, o, !1);
                if (a) throw new n.ErrnoError(a);
                if (!t.node_ops.unlink) throw new n.ErrnoError(63);
                if (n.isMountpoint(i)) throw new n.ErrnoError(10);
                t.node_ops.unlink(t, o), n.destroyNode(i);
            },
            readlink (e) {
                var r = n.lookupPath(e), t = r.node;
                if (!t) throw new n.ErrnoError(44);
                if (!t.node_ops.readlink) throw new n.ErrnoError(28);
                return t.node_ops.readlink(t);
            },
            stat (e, r) {
                var t = n.lookupPath(e, {
                    follow: !r
                }), o = t.node, i = n.checkOpExists(o.node_ops.getattr, 63);
                return i(o);
            },
            fstat (e) {
                var r = n.getStreamChecked(e), t = r.node, o = r.stream_ops.getattr, i = o ? r : t;
                return o ??= t.node_ops.getattr, n.checkOpExists(o, 63), o(i);
            },
            lstat (e) {
                return n.stat(e, !0);
            },
            doChmod (e, r, t, o) {
                n.doSetAttr(e, r, {
                    mode: t & 4095 | r.mode & -4096,
                    ctime: Date.now(),
                    dontFollow: o
                });
            },
            chmod (e, r, t) {
                var o;
                if (typeof e == "string") {
                    var i = n.lookupPath(e, {
                        follow: !t
                    });
                    o = i.node;
                } else o = e;
                n.doChmod(null, o, r, t);
            },
            lchmod (e, r) {
                n.chmod(e, r, !0);
            },
            fchmod (e, r) {
                var t = n.getStreamChecked(e);
                n.doChmod(t, t.node, r, !1);
            },
            doChown (e, r, t) {
                n.doSetAttr(e, r, {
                    timestamp: Date.now(),
                    dontFollow: t
                });
            },
            chown (e, r, t, o) {
                var i;
                if (typeof e == "string") {
                    var a = n.lookupPath(e, {
                        follow: !o
                    });
                    i = a.node;
                } else i = e;
                n.doChown(null, i, o);
            },
            lchown (e, r, t) {
                n.chown(e, r, t, !0);
            },
            fchown (e, r, t) {
                var o = n.getStreamChecked(e);
                n.doChown(o, o.node, !1);
            },
            doTruncate (e, r, t) {
                if (n.isDir(r.mode)) throw new n.ErrnoError(31);
                if (!n.isFile(r.mode)) throw new n.ErrnoError(28);
                var o = n.nodePermissions(r, "w");
                if (o) throw new n.ErrnoError(o);
                n.doSetAttr(e, r, {
                    size: t,
                    timestamp: Date.now()
                });
            },
            truncate (e, r) {
                if (r < 0) throw new n.ErrnoError(28);
                var t;
                if (typeof e == "string") {
                    var o = n.lookupPath(e, {
                        follow: !0
                    });
                    t = o.node;
                } else t = e;
                n.doTruncate(null, t, r);
            },
            ftruncate (e, r) {
                var t = n.getStreamChecked(e);
                if (r < 0 || !(t.flags & 2097155)) throw new n.ErrnoError(28);
                n.doTruncate(t, t.node, r);
            },
            utime (e, r, t) {
                var o = n.lookupPath(e, {
                    follow: !0
                }), i = o.node, a = n.checkOpExists(i.node_ops.setattr, 63);
                a(i, {
                    atime: r,
                    mtime: t
                });
            },
            open (e, r, t = 438) {
                if (e === "") throw new n.ErrnoError(44);
                r = typeof r == "string" ? Cr(r) : r, r & 64 ? t = t & 4095 | 32768 : t = 0;
                var o, i;
                if (typeof e == "object") o = e;
                else {
                    i = e.endsWith("/");
                    var a = n.lookupPath(e, {
                        follow: !(r & 131072),
                        noent_okay: !0
                    });
                    o = a.node, e = a.path;
                }
                var s = !1;
                if (r & 64) if (o) {
                    if (r & 128) throw new n.ErrnoError(20);
                } else {
                    if (i) throw new n.ErrnoError(31);
                    o = n.mknod(e, t | 511, 0), s = !0;
                }
                if (!o) throw new n.ErrnoError(44);
                if (n.isChrdev(o.mode) && (r &= -513), r & 65536 && !n.isDir(o.mode)) throw new n.ErrnoError(54);
                if (!s) {
                    var l = n.mayOpen(o, r);
                    if (l) throw new n.ErrnoError(l);
                }
                r & 512 && !s && n.truncate(o, 0), r &= -131713;
                var u = n.createStream({
                    node: o,
                    path: n.getPath(o),
                    flags: r,
                    seekable: !0,
                    position: 0,
                    stream_ops: o.stream_ops,
                    ungotten: [],
                    error: !1
                });
                return u.stream_ops.open && u.stream_ops.open(u), s && n.chmod(o, t & 511), d.logReadFiles && !(r & 1) && (e in n.readFiles || (n.readFiles[e] = 1)), u;
            },
            close (e) {
                if (n.isClosed(e)) throw new n.ErrnoError(8);
                e.getdents && (e.getdents = null);
                try {
                    e.stream_ops.close && e.stream_ops.close(e);
                } catch (r) {
                    throw r;
                } finally{
                    n.closeStream(e.fd);
                }
                e.fd = null;
            },
            isClosed (e) {
                return e.fd === null;
            },
            llseek (e, r, t) {
                if (n.isClosed(e)) throw new n.ErrnoError(8);
                if (!e.seekable || !e.stream_ops.llseek) throw new n.ErrnoError(70);
                if (t != 0 && t != 1 && t != 2) throw new n.ErrnoError(28);
                return e.position = e.stream_ops.llseek(e, r, t), e.ungotten = [], e.position;
            },
            read (e, r, t, o, i) {
                if (c(t >= 0), o < 0 || i < 0) throw new n.ErrnoError(28);
                if (n.isClosed(e)) throw new n.ErrnoError(8);
                if ((e.flags & 2097155) === 1) throw new n.ErrnoError(8);
                if (n.isDir(e.node.mode)) throw new n.ErrnoError(31);
                if (!e.stream_ops.read) throw new n.ErrnoError(28);
                var a = typeof i < "u";
                if (!a) i = e.position;
                else if (!e.seekable) throw new n.ErrnoError(70);
                var s = e.stream_ops.read(e, r, t, o, i);
                return a || (e.position += s), s;
            },
            write (e, r, t, o, i, a) {
                if (c(t >= 0), o < 0 || i < 0) throw new n.ErrnoError(28);
                if (n.isClosed(e)) throw new n.ErrnoError(8);
                if (!(e.flags & 2097155)) throw new n.ErrnoError(8);
                if (n.isDir(e.node.mode)) throw new n.ErrnoError(31);
                if (!e.stream_ops.write) throw new n.ErrnoError(28);
                e.seekable && e.flags & 1024 && n.llseek(e, 0, 2);
                var s = typeof i < "u";
                if (!s) i = e.position;
                else if (!e.seekable) throw new n.ErrnoError(70);
                var l = e.stream_ops.write(e, r, t, o, i, a);
                return s || (e.position += l), l;
            },
            mmap (e, r, t, o, i) {
                if (o & 2 && !(i & 2) && (e.flags & 2097155) !== 2) throw new n.ErrnoError(2);
                if ((e.flags & 2097155) === 1) throw new n.ErrnoError(2);
                if (!e.stream_ops.mmap) throw new n.ErrnoError(43);
                if (!r) throw new n.ErrnoError(28);
                return e.stream_ops.mmap(e, r, t, o, i);
            },
            msync (e, r, t, o, i) {
                return c(t >= 0), e.stream_ops.msync ? e.stream_ops.msync(e, r, t, o, i) : 0;
            },
            ioctl (e, r, t) {
                if (!e.stream_ops.ioctl) throw new n.ErrnoError(59);
                return e.stream_ops.ioctl(e, r, t);
            },
            readFile (e, r = {}) {
                r.flags = r.flags || 0, r.encoding = r.encoding || "binary", r.encoding !== "utf8" && r.encoding !== "binary" && S(`Invalid encoding type "${r.encoding}"`);
                var t = n.open(e, r.flags), o = n.stat(e), i = o.size, a = new Uint8Array(i);
                return n.read(t, a, 0, i, 0), r.encoding === "utf8" && (a = V(a)), n.close(t), a;
            },
            writeFile (e, r, t = {}) {
                t.flags = t.flags || 577;
                var o = n.open(e, t.flags, t.mode);
                typeof r == "string" && (r = new Uint8Array(hr(r))), ArrayBuffer.isView(r) ? n.write(o, r, 0, r.byteLength, void 0, t.canOwn) : S("Unsupported data type"), n.close(o);
            },
            cwd: ()=>n.currentPath,
            chdir (e) {
                var r = n.lookupPath(e, {
                    follow: !0
                });
                if (r.node === null) throw new n.ErrnoError(44);
                if (!n.isDir(r.node.mode)) throw new n.ErrnoError(54);
                var t = n.nodePermissions(r.node, "x");
                if (t) throw new n.ErrnoError(t);
                n.currentPath = r.path;
            },
            createDefaultDirectories () {
                n.mkdir("/tmp"), n.mkdir("/home"), n.mkdir("/home/web_user");
            },
            createDefaultDevices () {
                n.mkdir("/dev"), n.registerDevice(n.makedev(1, 3), {
                    read: ()=>0,
                    write: (o, i, a, s, l)=>s,
                    llseek: ()=>0
                }), n.mkdev("/dev/null", n.makedev(1, 3)), fe.register(n.makedev(5, 0), fe.default_tty_ops), fe.register(n.makedev(6, 0), fe.default_tty1_ops), n.mkdev("/dev/tty", n.makedev(5, 0)), n.mkdev("/dev/tty1", n.makedev(6, 0));
                var e = new Uint8Array(1024), r = 0, t = ()=>(r === 0 && (gr(e), r = e.byteLength), e[--r]);
                n.createDevice("/dev", "random", t), n.createDevice("/dev", "urandom", t), n.mkdir("/dev/shm"), n.mkdir("/dev/shm/tmp");
            },
            createSpecialDirectories () {
                n.mkdir("/proc");
                var e = n.mkdir("/proc/self");
                n.mkdir("/proc/self/fd"), n.mount({
                    mount () {
                        var r = n.createNode(e, "fd", 16895, 73);
                        return r.stream_ops = {
                            llseek: p.stream_ops.llseek
                        }, r.node_ops = {
                            lookup (t, o) {
                                var i = +o, a = n.getStreamChecked(i), s = {
                                    parent: null,
                                    mount: {
                                        mountpoint: "fake"
                                    },
                                    node_ops: {
                                        readlink: ()=>a.path
                                    },
                                    id: i + 1
                                };
                                return s.parent = s, s;
                            },
                            readdir () {
                                return Array.from(n.streams.entries()).filter(([t, o])=>o).map(([t, o])=>t.toString());
                            }
                        }, r;
                    }
                }, {}, "/proc/self/fd");
            },
            createStandardStreams (e, r, t) {
                e ? n.createDevice("/dev", "stdin", e) : n.symlink("/dev/tty", "/dev/stdin"), r ? n.createDevice("/dev", "stdout", null, r) : n.symlink("/dev/tty", "/dev/stdout"), t ? n.createDevice("/dev", "stderr", null, t) : n.symlink("/dev/tty1", "/dev/stderr");
                var o = n.open("/dev/stdin", 0), i = n.open("/dev/stdout", 1), a = n.open("/dev/stderr", 1);
                c(o.fd === 0, `invalid handle for stdin (${o.fd})`), c(i.fd === 1, `invalid handle for stdout (${i.fd})`), c(a.fd === 2, `invalid handle for stderr (${a.fd})`);
            },
            staticInit () {
                n.nameTable = new Array(4096), n.mount(p, {}, "/"), n.createDefaultDirectories(), n.createDefaultDevices(), n.createSpecialDirectories(), n.filesystems = {
                    MEMFS: p
                };
            },
            init (e, r, t) {
                c(!n.initialized, "FS.init was previously called. If you want to initialize later with custom parameters, remove any earlier calls (note that one is automatically added to the generated code)"), n.initialized = !0, e ??= d.stdin, r ??= d.stdout, t ??= d.stderr, n.createStandardStreams(e, r, t);
            },
            quit () {
                n.initialized = !1, kr(0);
                for (var e of n.streams)e && n.close(e);
            },
            findObject (e, r) {
                var t = n.analyzePath(e, r);
                return t.exists ? t.object : null;
            },
            analyzePath (e, r) {
                try {
                    var t = n.lookupPath(e, {
                        follow: !r
                    });
                    e = t.path;
                } catch  {}
                var o = {
                    isRoot: !1,
                    exists: !1,
                    error: 0,
                    name: null,
                    path: null,
                    object: null,
                    parentExists: !1,
                    parentPath: null,
                    parentObject: null
                };
                try {
                    var t = n.lookupPath(e, {
                        parent: !0
                    });
                    o.parentExists = !0, o.parentPath = t.path, o.parentObject = t.node, o.name = F.basename(e), t = n.lookupPath(e, {
                        follow: !r
                    }), o.exists = !0, o.path = t.path, o.object = t.node, o.name = t.node.name, o.isRoot = t.path === "/";
                } catch (i) {
                    o.error = i.errno;
                }
                return o;
            },
            createPath (e, r, t, o) {
                e = typeof e == "string" ? e : n.getPath(e);
                for(var i = r.split("/").reverse(); i.length;){
                    var a = i.pop();
                    if (a) {
                        var s = F.join2(e, a);
                        try {
                            n.mkdir(s);
                        } catch (l) {
                            if (l.errno != 20) throw l;
                        }
                        e = s;
                    }
                }
                return s;
            },
            createFile (e, r, t, o, i) {
                var a = F.join2(typeof e == "string" ? e : n.getPath(e), r), s = pr(o, i);
                return n.create(a, s);
            },
            createDataFile (e, r, t, o, i, a) {
                var s = r;
                e && (e = typeof e == "string" ? e : n.getPath(e), s = r ? F.join2(e, r) : e);
                var l = pr(o, i), u = n.create(s, l);
                if (t) {
                    if (typeof t == "string") {
                        for(var f = new Array(t.length), y = 0, w = t.length; y < w; ++y)f[y] = t.charCodeAt(y);
                        t = f;
                    }
                    n.chmod(u, l | 146);
                    var m = n.open(u, 577);
                    n.write(m, t, 0, t.length, 0, a), n.close(m), n.chmod(u, l);
                }
            },
            createDevice (e, r, t, o) {
                var i = F.join2(typeof e == "string" ? e : n.getPath(e), r), a = pr(!!t, !!o);
                n.createDevice.major ??= 64;
                var s = n.makedev(n.createDevice.major++, 0);
                return n.registerDevice(s, {
                    open (l) {
                        l.seekable = !1;
                    },
                    close (l) {
                        o?.buffer?.length && o(10);
                    },
                    read (l, u, f, y, w) {
                        for(var m = 0, E = 0; E < y; E++){
                            var T;
                            try {
                                T = t();
                            } catch  {
                                throw new n.ErrnoError(29);
                            }
                            if (T === void 0 && m === 0) throw new n.ErrnoError(6);
                            if (T == null) break;
                            m++, u[f + E] = T;
                        }
                        return m && (l.node.atime = Date.now()), m;
                    },
                    write (l, u, f, y, w) {
                        for(var m = 0; m < y; m++)try {
                            o(u[f + m]);
                        } catch  {
                            throw new n.ErrnoError(29);
                        }
                        return y && (l.node.mtime = l.node.ctime = Date.now()), m;
                    }
                }), n.mkdev(i, a, s);
            },
            forceLoadFile (e) {
                if (e.isDevice || e.isFolder || e.link || e.contents) return !0;
                if (globalThis.XMLHttpRequest) S("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");
                else try {
                    e.contents = Q(e.url);
                } catch  {
                    throw new n.ErrnoError(29);
                }
            },
            createLazyFile (e, r, t, o, i) {
                class a {
                    lengthKnown = !1;
                    chunks = [];
                    get(m) {
                        if (!(m > this.length - 1 || m < 0)) {
                            var E = m % this.chunkSize, T = m / this.chunkSize | 0;
                            return this.getter(T)[E];
                        }
                    }
                    setDataGetter(m) {
                        this.getter = m;
                    }
                    cacheLength() {
                        var m = new XMLHttpRequest;
                        m.open("HEAD", t, !1), m.send(null), m.status >= 200 && m.status < 300 || m.status === 304 || S("Couldn't load " + t + ". Status: " + m.status);
                        var E = Number(m.getResponseHeader("Content-length")), T, B = (T = m.getResponseHeader("Accept-Ranges")) && T === "bytes", z = (T = m.getResponseHeader("Content-Encoding")) && T === "gzip", L = 1024 * 1024;
                        B || (L = E);
                        var W = (q, Ae)=>{
                            q > Ae && S("invalid range (" + q + ", " + Ae + ") or no bytes requested!"), Ae > E - 1 && S("only " + E + " bytes available! programmer error!");
                            var M = new XMLHttpRequest;
                            return M.open("GET", t, !1), E !== L && M.setRequestHeader("Range", "bytes=" + q + "-" + Ae), M.responseType = "arraybuffer", M.overrideMimeType && M.overrideMimeType("text/plain; charset=x-user-defined"), M.send(null), M.status >= 200 && M.status < 300 || M.status === 304 || S("Couldn't load " + t + ". Status: " + M.status), M.response !== void 0 ? new Uint8Array(M.response || []) : hr(M.responseText || "");
                        }, Ze = this;
                        Ze.setDataGetter((q)=>{
                            var Ae = q * L, M = (q + 1) * L - 1;
                            return M = Math.min(M, E - 1), typeof Ze.chunks[q] > "u" && (Ze.chunks[q] = W(Ae, M)), typeof Ze.chunks[q] > "u" && S("doXHR failed!"), Ze.chunks[q];
                        }), (z || !E) && (L = E = 1, E = this.getter(0).length, L = E, ie("LazyFiles on gzip forces download of the whole file when length is accessed")), this._length = E, this._chunkSize = L, this.lengthKnown = !0;
                    }
                    get length() {
                        return this.lengthKnown || this.cacheLength(), this._length;
                    }
                    get chunkSize() {
                        return this.lengthKnown || this.cacheLength(), this._chunkSize;
                    }
                }
                if (globalThis.XMLHttpRequest) {
                    x || S("Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc");
                    var s = new a, l = {
                        isDevice: !1,
                        contents: s
                    };
                } else var l = {
                    isDevice: !1,
                    url: t
                };
                var u = n.createFile(e, r, l, o, i);
                l.contents ? u.contents = l.contents : l.url && (u.contents = null, u.url = l.url), Object.defineProperties(u, {
                    usedBytes: {
                        get: function() {
                            return this.contents.length;
                        }
                    }
                });
                var f = {};
                for (const [w, m] of Object.entries(u.stream_ops))f[w] = (...E)=>(n.forceLoadFile(u), m(...E));
                function y(w, m, E, T, B) {
                    var z = w.node.contents;
                    if (B >= z.length) return 0;
                    var L = Math.min(z.length - B, T);
                    if (c(L >= 0), z.slice) for(var W = 0; W < L; W++)m[E + W] = z[B + W];
                    else for(var W = 0; W < L; W++)m[E + W] = z.get(B + W);
                    return L;
                }
                return f.read = (w, m, E, T, B)=>(n.forceLoadFile(u), y(w, m, E, T, B)), f.mmap = (w, m, E, T, B)=>{
                    n.forceLoadFile(u);
                    var z = yr();
                    if (!z) throw new n.ErrnoError(48);
                    return y(w, I, z, m, E), {
                        ptr: z,
                        allocated: !0
                    };
                }, u.stream_ops = f, u;
            },
            absolutePath () {
                S("FS.absolutePath has been removed; use PATH_FS.resolve instead");
            },
            createFolder () {
                S("FS.createFolder has been removed; use FS.mkdir instead");
            },
            createLink () {
                S("FS.createLink has been removed; use FS.symlink instead");
            },
            joinPath () {
                S("FS.joinPath has been removed; use PATH.join instead");
            },
            mmapAlloc () {
                S("FS.mmapAlloc has been replaced by the top level function mmapAlloc");
            },
            standardizePath () {
                S("FS.standardizePath has been removed; use PATH.normalize instead");
            }
        }, Je = {
            calculateAt (e, r, t) {
                if (F.isAbs(r)) return r;
                var o;
                if (e === -100) o = n.cwd();
                else {
                    var i = Je.getStreamFromFD(e);
                    o = i.path;
                }
                if (r.length == 0) {
                    if (!t) throw new n.ErrnoError(44);
                    return o;
                }
                return o + "/" + r;
            },
            writeStat (e, r) {
                _[e >> 2] = r.dev, _[e + 4 >> 2] = r.mode, _[e + 8 >> 2] = r.nlink, _[e + 12 >> 2] = r.uid, _[e + 16 >> 2] = r.gid, _[e + 20 >> 2] = r.rdev, D[e + 24 >> 3] = BigInt(r.size), de[e + 32 >> 2] = 4096, de[e + 36 >> 2] = r.blocks;
                var t = r.atime.getTime(), o = r.mtime.getTime(), i = r.ctime.getTime();
                return D[e + 40 >> 3] = BigInt(Math.floor(t / 1e3)), _[e + 48 >> 2] = t % 1e3 * 1e3 * 1e3, D[e + 56 >> 3] = BigInt(Math.floor(o / 1e3)), _[e + 64 >> 2] = o % 1e3 * 1e3 * 1e3, D[e + 72 >> 3] = BigInt(Math.floor(i / 1e3)), _[e + 80 >> 2] = i % 1e3 * 1e3 * 1e3, D[e + 88 >> 3] = BigInt(r.ino), 0;
            },
            writeStatFs (e, r) {
                _[e + 4 >> 2] = r.bsize, _[e + 60 >> 2] = r.bsize, D[e + 8 >> 3] = BigInt(r.blocks), D[e + 16 >> 3] = BigInt(r.bfree), D[e + 24 >> 3] = BigInt(r.bavail), D[e + 32 >> 3] = BigInt(r.files), D[e + 40 >> 3] = BigInt(r.ffree), _[e + 48 >> 2] = r.fsid, _[e + 64 >> 2] = r.flags, _[e + 56 >> 2] = r.namelen;
            },
            doMsync (e, r, t, o, i) {
                if (!n.isFile(r.node.mode)) throw new n.ErrnoError(43);
                if (o & 2) return 0;
                var a = G.slice(e, e + t);
                n.msync(r, a, i, t, o);
            },
            getStreamFromFD (e) {
                var r = n.getStreamChecked(e);
                return r;
            },
            varargs: void 0,
            getStr (e) {
                var r = Y(e);
                return r;
            }
        };
        function jr(e) {
            try {
                var r = Je.getStreamFromFD(e);
                return n.close(r), 0;
            } catch (t) {
                if (typeof n > "u" || t.name !== "ErrnoError") throw t;
                return t.errno;
            }
        }
        var Gr = (e, r, t, o)=>{
            for(var i = 0, a = 0; a < t; a++){
                var s = _[r >> 2], l = _[r + 4 >> 2];
                r += 8;
                var u = n.read(e, I, s, l, o);
                if (u < 0) return -1;
                if (i += u, u < l) break;
            }
            return i;
        };
        function $r(e, r, t, o) {
            try {
                var i = Je.getStreamFromFD(e), a = Gr(i, r, t);
                return _[o >> 2] = a, 0;
            } catch (s) {
                if (typeof n > "u" || s.name !== "ErrnoError") throw s;
                return s.errno;
            }
        }
        function Vr(e, r, t, o) {
            r = ar(r);
            try {
                if (isNaN(r)) return 61;
                var i = Je.getStreamFromFD(e);
                return n.llseek(i, r, t), D[o >> 3] = BigInt(i.position), i.getdents && r === 0 && t === 0 && (i.getdents = null), 0;
            } catch (a) {
                if (typeof n > "u" || a.name !== "ErrnoError") throw a;
                return a.errno;
            }
        }
        var qr = (e, r, t, o)=>{
            for(var i = 0, a = 0; a < t; a++){
                var s = _[r >> 2], l = _[r + 4 >> 2];
                r += 8;
                var u = n.write(e, I, s, l, o);
                if (u < 0) return -1;
                if (i += u, u < l) break;
            }
            return i;
        };
        function Kr(e, r, t, o) {
            try {
                var i = Je.getStreamFromFD(e), a = qr(i, r, t);
                return _[o >> 2] = a, 0;
            } catch (s) {
                if (typeof n > "u" || s.name !== "ErrnoError") throw s;
                return s.errno;
            }
        }
        n.createPreloadedFile = Wr, n.preloadFile = Fr, n.staticInit();
        {
            if (d.noExitRuntime && d.noExitRuntime, d.preloadPlugins && (Sr = d.preloadPlugins), d.print && (ie = d.print), d.printErr && (N = d.printErr), d.wasmBinary && (ae = d.wasmBinary), Jr(), d.arguments && d.arguments, d.thisProgram && (J = d.thisProgram), c(typeof d.memoryInitializerPrefixURL > "u", "Module.memoryInitializerPrefixURL option was removed, use Module.locateFile instead"), c(typeof d.pthreadMainPrefixURL > "u", "Module.pthreadMainPrefixURL option was removed, use Module.locateFile instead"), c(typeof d.cdInitializerPrefixURL > "u", "Module.cdInitializerPrefixURL option was removed, use Module.locateFile instead"), c(typeof d.filePackagePrefixURL > "u", "Module.filePackagePrefixURL option was removed, use Module.locateFile instead"), c(typeof d.read > "u", "Module.read option was removed"), c(typeof d.readAsync > "u", "Module.readAsync option was removed (modify readAsync in JS)"), c(typeof d.readBinary > "u", "Module.readBinary option was removed (modify readBinary in JS)"), c(typeof d.setWindowTitle > "u", "Module.setWindowTitle option was removed (modify emscripten_set_window_title in JS)"), c(typeof d.TOTAL_MEMORY > "u", "Module.TOTAL_MEMORY has been renamed Module.INITIAL_MEMORY"), c(typeof d.ENVIRONMENT > "u", "Module.ENVIRONMENT has been deprecated. To force the environment, use the ENVIRONMENT compile-time option (for example, -sENVIRONMENT=web or -sENVIRONMENT=node)"), c(typeof d.STACK_SIZE > "u", "STACK_SIZE can no longer be set at runtime.  Use -sSTACK_SIZE at link time"), c(typeof d.wasmMemory > "u", "Use of `wasmMemory` detected.  Use -sIMPORTED_MEMORY to define wasmMemory externally"), c(typeof d.INITIAL_MEMORY > "u", "Detected runtime INITIAL_MEMORY setting.  Use -sIMPORTED_MEMORY to define wasmMemory dynamically"), d.preInit) for(typeof d.preInit == "function" && (d.preInit = [
                d.preInit
            ]); d.preInit.length > 0;)d.preInit.shift()();
            ee("preInit");
        }
        var Yr = [
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
        Yr.forEach(De);
        var Xr = [
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
            "checkWasiClock",
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
        Xr.forEach(he);
        function Jr() {
            Oe("fetchSettings");
        }
        d._deform = k("_deform"), d._malloc = k("_malloc"), d._free = k("_free"), d._assembled_joint_mass = k("_assembled_joint_mass"), d._modal = k("_modal"), d._modal_paz = k("_modal_paz"), d._didactic_solve = k("_didactic_solve"), d._plate_q4_solve = k("_plate_q4_solve"), d._slopeAllocDouble = k("_slopeAllocDouble"), d._slopeStabilitySolver = k("_slopeStabilitySolver"), d._nonlinear_dynamic = k("_nonlinear_dynamic"), d._steel02_test = k("_steel02_test"), d._cyclic_pushover = k("_cyclic_pushover"), d._concrete02_test = k("_concrete02_test"), d._hex8_solve = k("_hex8_solve");
        var kr = k("_fflush"), br = k("_strerror"), _r = k("_emscripten_stack_get_end"), Pr = k("_emscripten_stack_init"), cr = k("wasmMemory");
        function Zr(e) {
            c(typeof e.deform < "u", "missing Wasm export: deform"), c(typeof e.malloc < "u", "missing Wasm export: malloc"), c(typeof e.free < "u", "missing Wasm export: free"), c(typeof e.assembled_joint_mass < "u", "missing Wasm export: assembled_joint_mass"), c(typeof e.modal < "u", "missing Wasm export: modal"), c(typeof e.modal_paz < "u", "missing Wasm export: modal_paz"), c(typeof e.didactic_solve < "u", "missing Wasm export: didactic_solve"), c(typeof e.plate_q4_solve < "u", "missing Wasm export: plate_q4_solve"), c(typeof e.slopeAllocDouble < "u", "missing Wasm export: slopeAllocDouble"), c(typeof e.slopeStabilitySolver < "u", "missing Wasm export: slopeStabilitySolver"), c(typeof e.nonlinear_dynamic < "u", "missing Wasm export: nonlinear_dynamic"), c(typeof e.steel02_test < "u", "missing Wasm export: steel02_test"), c(typeof e.cyclic_pushover < "u", "missing Wasm export: cyclic_pushover"), c(typeof e.concrete02_test < "u", "missing Wasm export: concrete02_test"), c(typeof e.hex8_solve < "u", "missing Wasm export: hex8_solve"), c(typeof e.fflush < "u", "missing Wasm export: fflush"), c(typeof e.strerror < "u", "missing Wasm export: strerror"), c(typeof e.emscripten_stack_get_end < "u", "missing Wasm export: emscripten_stack_get_end"), c(typeof e.emscripten_stack_get_base < "u", "missing Wasm export: emscripten_stack_get_base"), c(typeof e.emscripten_stack_init < "u", "missing Wasm export: emscripten_stack_init"), c(typeof e.emscripten_stack_get_free < "u", "missing Wasm export: emscripten_stack_get_free"), c(typeof e._emscripten_stack_restore < "u", "missing Wasm export: _emscripten_stack_restore"), c(typeof e._emscripten_stack_alloc < "u", "missing Wasm export: _emscripten_stack_alloc"), c(typeof e.emscripten_stack_get_current < "u", "missing Wasm export: emscripten_stack_get_current"), c(typeof e.memory < "u", "missing Wasm export: memory"), c(typeof e.__indirect_function_table < "u", "missing Wasm export: __indirect_function_table"), d._deform = P("deform", 75), d._malloc = P("malloc", 1), d._free = P("free", 1), d._assembled_joint_mass = P("assembled_joint_mass", 22), d._modal = P("modal", 83), d._modal_paz = P("modal_paz", 54), d._didactic_solve = P("didactic_solve", 48), d._plate_q4_solve = P("plate_q4_solve", 26), d._slopeAllocDouble = P("slopeAllocDouble", 1), d._slopeStabilitySolver = P("slopeStabilitySolver", 16), d._nonlinear_dynamic = P("nonlinear_dynamic", 20), d._steel02_test = P("steel02_test", 8), d._cyclic_pushover = P("cyclic_pushover", 40), d._concrete02_test = P("concrete02_test", 10), d._hex8_solve = P("hex8_solve", 17), kr = P("fflush", 1), br = P("strerror", 1), _r = e.emscripten_stack_get_end, e.emscripten_stack_get_base, Pr = e.emscripten_stack_init, e.emscripten_stack_get_free, e._emscripten_stack_restore, e._emscripten_stack_alloc, e.emscripten_stack_get_current, cr = e.memory, e.__indirect_function_table;
        }
        var Ar = {
            __assert_fail: xe,
            __cxa_throw: je,
            _abort_js: Ge,
            _tzset_js: $e,
            clock_time_get: sr,
            emscripten_resize_heap: mr,
            environ_get: Rr,
            environ_sizes_get: Or,
            fd_close: jr,
            fd_read: $r,
            fd_seek: Vr,
            fd_write: Kr
        }, Tr;
        function Qr() {
            Pr(), Re();
        }
        function Er() {
            if (me > 0) {
                Xe = Er;
                return;
            }
            if (Qr(), Qe(), me > 0) {
                Xe = Er;
                return;
            }
            function e() {
                c(!Tr), Tr = !0, d.calledRun = !0, !se && (ur(), pe?.(d), d.onRuntimeInitialized?.(), ee("onRuntimeInitialized"), c(!d._main, 'compiled without a main, but one is present. if you added it from JS, use Module["onRuntimeInitialized"]'), er());
            }
            d.setStatus ? (d.setStatus("Running..."), setTimeout(()=>{
                setTimeout(()=>d.setStatus(""), 1), e();
            }, 1)) : e(), le();
        }
        var Pe;
        Pe = await nr(), Er(), re ? O = d : O = new Promise((e, r)=>{
            pe = e, _e = r;
        });
        for (const e of Object.keys(d))e in R || Object.defineProperty(R, e, {
            configurable: !0,
            get () {
                S(`Access to module property ('${e}') is no longer possible via the module constructor argument; Instead, use the result of the module constructor.`);
            }
        });
        return O;
    }
    function rt(R) {
        const O = new Array(12).fill(0);
        if (!R) return O;
        if (R.length >= 12) {
            for(let v = 0; v < 12; v++)O[v] = R[v] ? 1 : 0;
            return O;
        }
        const d = [
            3,
            4,
            5,
            9,
            10,
            11
        ];
        for(let v = 0; v < 6 && v < R.length; v++)R[v] && (O[d[v]] = 1);
        return O;
    }
    await Te();
    const h = await Te();
    function tt(R, O, d, v, x = 10, H = 0, j = 0, K = 1, J, ve) {
        if (R.length === 0) return {
            frequencies: [],
            modeShapes: [],
            massParticipation: []
        };
        const g = [], Z = C(R.flat(), Float64Array, h.HEAPF64);
        g.push(Z);
        const oe = O.flat(), Q = C(oe, Uint32Array, h.HEAPU32);
        g.push(Q);
        const Ne = O.map((A)=>A.length), ie = C(Ne, Uint32Array, h.HEAPU32);
        g.push(ie);
        const N = d.supports ? Array.from(d.supports.keys()) : [], ae = d.supports ? Array.from(d.supports.values()).flat().map((A)=>A ? 1 : 0) : [], se = C(N, Uint32Array, h.HEAPU32);
        g.push(se);
        const c = C(ae, Uint8Array, h.HEAPU8);
        g.push(c);
        const b = (A)=>{
            const U = A ? Array.from(A.keys()) : [], mr = A ? Array.from(A.values()) : [], Fe = C(U, Uint32Array, h.HEAPU32);
            g.push(Fe);
            const dr = C(mr, Float64Array, h.HEAPF64);
            return g.push(dr), {
                keysPtr: Fe,
                valuesPtr: dr,
                size: U.length
            };
        }, Re = b(v.elasticities), le = b(v.areas), ee = b(v.momentsOfInertiaZ), k = b(v.momentsOfInertiaY), Oe = b(v.shearModuli), Me = b(v.torsionalConstants), De = b(v.densities), he = b(v.thicknesses), pe = b(v.poissonsRatios), _e = b(v.membraneModifiers), I = b(v.bendingModifiers), G = v.plateFormulations, de = G ? Array.from(G.keys()) : [], _ = G ? Array.from(G.values()) : [], D = C(de, Uint32Array, h.HEAPU32);
        g.push(D);
        const re = C(_, Uint32Array, h.HEAPU32);
        g.push(re);
        const ce = v.drillingTypes, Qe = ce ? Array.from(ce.keys()) : [], ur = ce ? Array.from(ce.values()) : [], er = C(Qe, Uint32Array, h.HEAPU32);
        g.push(er);
        const S = C(ur, Uint32Array, h.HEAPU32);
        g.push(S);
        const P = v.drillingPenaltyScales, Ee = P ? Array.from(P.keys()) : [], fr = P ? Array.from(P.values()) : [], rr = C(Ee, Uint32Array, h.HEAPU32);
        g.push(rr);
        const tr = C(fr, Float64Array, h.HEAPF64);
        g.push(tr);
        const Ce = b(v.shearAreasY), Ie = b(v.shearAreasZ), Ue = b(v.localAngles), nr = v.momentReleases ? Array.from(v.momentReleases.keys()) : [], or = v.momentReleases ? Array.from(v.momentReleases.values()).flatMap(rt) : [], Le = C(nr, Uint32Array, h.HEAPU32);
        g.push(Le);
        const ir = C(or, Uint8Array, h.HEAPU8);
        g.push(ir);
        const ge = b(d.masses), Be = b(d.diaphragms), $ = d.springs, te = $ ? $.flatMap((A)=>[
                A.node,
                A.dof,
                A.k
            ]) : [], ze = C(te.length > 0 ? te : [
            0
        ], Float64Array, h.HEAPF64);
        g.push(ze);
        const He = h._malloc(4);
        g.push(He);
        const V = h._malloc(4);
        g.push(V);
        const Y = h._malloc(4);
        g.push(Y);
        const xe = h._malloc(4);
        g.push(xe);
        const We = h._malloc(4);
        g.push(We);
        const je = h._malloc(4);
        g.push(je);
        const Ge = h._malloc(4);
        g.push(Ge);
        const ye = h._malloc(4);
        g.push(ye), h._modal(Z, R.length, Q, oe.length, ie, O.length, se, c, N.length, Re.keysPtr, Re.valuesPtr, Re.size, le.keysPtr, le.valuesPtr, le.size, ee.keysPtr, ee.valuesPtr, ee.size, k.keysPtr, k.valuesPtr, k.size, Oe.keysPtr, Oe.valuesPtr, Oe.size, Me.keysPtr, Me.valuesPtr, Me.size, De.keysPtr, De.valuesPtr, De.size, he.keysPtr, he.valuesPtr, he.size, pe.keysPtr, pe.valuesPtr, pe.size, _e.keysPtr, _e.valuesPtr, _e.size, I.keysPtr, I.valuesPtr, I.size, D, re, de.length, er, S, Qe.length, rr, tr, Ee.length, Ce.keysPtr, Ce.valuesPtr, Ce.size, Ie.keysPtr, Ie.valuesPtr, Ie.size, Ue.keysPtr, Ue.valuesPtr, Ue.size, Le, ir, nr.length, ge.keysPtr, ge.valuesPtr, ge.size, K, Be.keysPtr, Be.valuesPtr, Be.size, ze, $ ? $.length : 0, x, H, j, He, V, Y, xe, We, je, Ge, ye);
        const X = h.HEAPU32[He / 4], ue = h.HEAPU32[V / 4], $e = h.HEAPU32[Y / 4], Ve = h.HEAPU32[xe / 4], we = h.HEAPU32[We / 4], qe = h.HEAPU32[je / 4], Ke = h.HEAPU32[Ge / 4], Se = h.HEAPU32[ye / 4];
        let ar = [], sr = [], lr = [];
        if (ue > 0 && X) {
            const A = new Float64Array(h.HEAPF64.buffer, X, ue);
            ar = Array.from(A), g.push(X);
        }
        if (Ve > 0 && we > 0 && $e) {
            const A = new Float64Array(h.HEAPF64.buffer, $e, Ve * we);
            for(let U = 0; U < Ve; U++)sr.push(Array.from(A.slice(U * we, (U + 1) * we)));
            g.push($e);
        }
        if (Ke > 0 && Se > 0 && qe) {
            const A = new Float64Array(h.HEAPF64.buffer, qe, Ke * Se);
            for(let U = 0; U < Ke; U++)lr.push(Array.from(A.slice(U * Se, (U + 1) * Se)));
            g.push(qe);
        }
        return g.forEach((A)=>h._free(A)), {
            frequencies: ar,
            modeShapes: sr,
            massParticipation: lr
        };
    }
    function C(R, O, d) {
        const v = new O(R), x = h._malloc(v.length * v.BYTES_PER_ELEMENT);
        return (O === Float64Array ? h.HEAPF64 : O === Uint32Array ? h.HEAPU32 : O === Uint8Array ? h.HEAPU8 : d).set(v, x / v.BYTES_PER_ELEMENT), x;
    }
    await Te();
    await Te();
    await Te();
    await Te();
    function Nr(R) {
        return R ? new Map(R) : void 0;
    }
    self.postMessage({
        vivo: !0
    });
    self.onmessage = async (R)=>{
        const { nodes: O, elements: d, nodeInputs: v, elementInputs: x, nModes: H } = R.data ?? {};
        try {
            const j = {};
            for (const [g, Z] of Object.entries(v ?? {}))j[g] = Nr(Z);
            const K = {};
            for (const [g, Z] of Object.entries(x ?? {}))K[g] = Nr(Z);
            const J = tt(O, d, j, K, H), ve = {
                frequencies: J?.frequencies ?? [],
                massParticipation: J?.massParticipation ?? [],
                modeShapes: J?.modeShapes ?? []
            };
            self.postMessage({
                ok: !0,
                m: ve
            });
        } catch (j) {
            self.postMessage({
                ok: !1,
                error: j?.message ?? String(j)
            });
        }
    };
})();
