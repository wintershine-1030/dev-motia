(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3620],
  {
    79197: function (e) {
      e.exports = (() => {
        "use strict";
        var e,
          t,
          n,
          r,
          i,
          a,
          o,
          s,
          u,
          l,
          c,
          f,
          h,
          d,
          p,
          m,
          v,
          g,
          b,
          y,
          w,
          _,
          A,
          C,
          M,
          E,
          P,
          I,
          L,
          F,
          x,
          R,
          S,
          k,
          T,
          j,
          O,
          W,
          B,
          D,
          V,
          U,
          N,
          $,
          G,
          z,
          H,
          Y,
          X,
          q,
          J,
          K,
          Z,
          Q,
          ee,
          et,
          en,
          er,
          ei = [
            ,
            (e, t, n) => {
              var r;
              n.r(t), n.d(t, { default: () => i });
              let i =
                ((r =
                  "undefined" != typeof document && document.currentScript
                    ? document.currentScript.src
                    : void 0),
                function (e = {}) {
                  function t() {
                    function e(e) {
                      let a = r;
                      (n = t = 0),
                        (r = new Map()),
                        a.forEach((t) => {
                          try {
                            t(e);
                          } catch (e) {
                            console.error(e);
                          }
                        }),
                        this.lb(),
                        i && i.Nb();
                    }
                    let t = 0,
                      n = 0,
                      r = new Map(),
                      i = null,
                      a = null;
                    (this.requestAnimationFrame = function (i) {
                      t || (t = requestAnimationFrame(e.bind(this)));
                      let a = ++n;
                      return r.set(a, i), a;
                    }),
                      (this.cancelAnimationFrame = function (e) {
                        r.delete(e),
                          t &&
                            0 == r.size &&
                            (cancelAnimationFrame(t), (t = 0));
                      }),
                      (this.Lb = function (e) {
                        a && (document.body.remove(a), (a = null)),
                          e ||
                            (((a =
                              document.createElement(
                                "div"
                              )).style.backgroundColor = "black"),
                            (a.style.position = "fixed"),
                            (a.style.right = 0),
                            (a.style.top = 0),
                            (a.style.color = "white"),
                            (a.style.padding = "4px"),
                            (a.innerHTML = "RIVE FPS"),
                            (e = function (e) {
                              a.innerHTML = "RIVE FPS " + e.toFixed(1);
                            }),
                            document.body.appendChild(a)),
                          (i = new (function () {
                            let t = 0,
                              n = 0;
                            this.Nb = function () {
                              var r = performance.now();
                              n
                                ? (++t,
                                  1e3 < (r -= n) &&
                                    (e((1e3 * t) / r), (t = n = 0)))
                                : ((n = r), (t = 0));
                            };
                          })());
                      }),
                      (this.lb = function () {});
                  }
                  function n() {
                    console.assert(!0);
                    let e = new Map(),
                      t = -1 / 0;
                    this.push = function (n) {
                      return (
                        (n = (n + 255) >> 8),
                        e.has(n) && clearTimeout(e.get(n)),
                        e.set(
                          n,
                          setTimeout(function () {
                            e.delete(n),
                              0 == e.length
                                ? (t = -1 / 0)
                                : n == t &&
                                  console.assert(
                                    (t = Math.max(...e.keys())) < n
                                  );
                          }, 1e3)
                        ),
                        (t = Math.max(n, t)) << 8
                      );
                    };
                  }
                  e.ready = new Promise((e, t) => {
                    (s = e), (u = t);
                  });
                  let i = e.onRuntimeInitialized;
                  e.onRuntimeInitialized = function () {
                    i && i();
                    let t = e.decodeAudio;
                    e.decodeAudio = function (e, n) {
                      n((e = t(e)));
                    };
                    let n = e.decodeFont;
                    e.decodeFont = function (e, t) {
                      t((e = n(e)));
                    };
                    let r = e.FileAssetLoader;
                    (e.ptrToAsset = (t) => {
                      let n = e.ptrToFileAsset(t);
                      return n.isImage
                        ? e.ptrToImageAsset(t)
                        : n.isFont
                        ? e.ptrToFontAsset(t)
                        : n.isAudio
                        ? e.ptrToAudioAsset(t)
                        : n;
                    }),
                      (e.CustomFileAssetLoader = r.extend(
                        "CustomFileAssetLoader",
                        {
                          __construct: function ({ loadContents: e }) {
                            this.__parent.__construct.call(this), (this.Bb = e);
                          },
                          loadContents: function (t, n) {
                            return (t = e.ptrToAsset(t)), this.Bb(t, n);
                          },
                        }
                      )),
                      (e.CDNFileAssetLoader = r.extend("CDNFileAssetLoader", {
                        __construct: function () {
                          this.__parent.__construct.call(this);
                        },
                        loadContents: function (t) {
                          var n, r, i;
                          let a = e.ptrToAsset(t);
                          return (
                            "" !== (t = a.cdnUuid) &&
                            ((n = a.cdnBaseUrl + "/" + t),
                            (r = (e) => {
                              a.decode(new Uint8Array(e.response));
                            }),
                            ((i = new XMLHttpRequest()).responseType =
                              "arraybuffer"),
                            (i.onreadystatechange = function () {
                              4 == i.readyState && 200 == i.status && r(i);
                            }),
                            i.open("GET", n, !0),
                            i.send(null),
                            !0)
                          );
                        },
                      })),
                      (e.FallbackFileAssetLoader = r.extend(
                        "FallbackFileAssetLoader",
                        {
                          __construct: function () {
                            this.__parent.__construct.call(this),
                              (this.hb = []);
                          },
                          addLoader: function (e) {
                            this.hb.push(e);
                          },
                          loadContents: function (e, t) {
                            for (let n of this.hb)
                              if (n.loadContents(e, t)) return !0;
                            return !1;
                          },
                        }
                      ));
                    let a = e.computeAlignment;
                    e.computeAlignment = function (e, t, n, r, i = 1) {
                      return a.call(this, e, t, n, r, i);
                    };
                  };
                  let a = e.onRuntimeInitialized;
                  e.onRuntimeInitialized = function () {
                    function r(e) {
                      (this.F = e),
                        (this.Ab = e.getContext("2d")),
                        (this.Db = s),
                        (this.S = []),
                        (this.la = 0),
                        (this.clear = function () {
                          console.assert(0 == this.la),
                            (this.S = []),
                            u.delete(this);
                        }),
                        (this.save = function () {
                          ++this.la, this.S.push(s.save.bind(s));
                        }),
                        (this.restore = function () {
                          0 < this.la &&
                            (this.S.push(s.restore.bind(s)), --this.la);
                        }),
                        (this.transform = function (e) {
                          this.S.push(s.transform.bind(s, e));
                        }),
                        (this.align = function (e, t, n, r, i = 1) {
                          this.S.push(s.align.bind(s, e, t, n, r, i));
                        }),
                        (this.flush = function () {
                          console.assert(0 == this.la),
                            u.add(this),
                            s.Wa || o();
                        }),
                        (this.delete = function () {});
                    }
                    function i(e, t = !1) {
                      var n,
                        r,
                        a,
                        o,
                        s = {
                          alpha: !0,
                          depth: t,
                          stencil: t,
                          antialias: t,
                          premultipliedAlpha: !0,
                          preserveDrawingBuffer: 0,
                          powerPreference: "high-performance",
                          failIfMajorPerformanceCaveat: 0,
                          enableExtensionsByDefault: !1,
                          explicitSwapControl: 0,
                          renderViaOffscreenBackBuffer: 0,
                        };
                      if (!(t = e.getContext("webgl2", s))) return null;
                      na(
                        ((n = t),
                        (r = s),
                        (o = {
                          handle: (a = ni(nt)),
                          attributes: r,
                          version: r.Ec,
                          C: n,
                        }),
                        n.canvas && (n.canvas.zb = o),
                        (nt[a] = o),
                        (void 0 === r.Kb || r.Kb) &&
                          (function (e) {
                            if ((e || (e = nu), !e.Vb)) {
                              e.Vb = !0;
                              var t = e.C;
                              t1(t),
                                t2(t),
                                2 <= e.version &&
                                  (t.ab = t.getExtension(
                                    "EXT_disjoint_timer_query_webgl2"
                                  )),
                                (2 > e.version || !t.ab) &&
                                  (t.ab = t.getExtension(
                                    "EXT_disjoint_timer_query"
                                  )),
                                no(t),
                                (t.getSupportedExtensions() || []).forEach(
                                  function (e) {
                                    e.includes("lose_context") ||
                                      e.includes("debug") ||
                                      t.getExtension(e);
                                  }
                                );
                            }
                          })(o),
                        (s = a))
                      );
                      let u = l(e.width, e.height);
                      (u.Ka = s),
                        (u.F = e),
                        (u.La = e.width),
                        (u.Xa = e.height),
                        (u.T = t);
                      var c = u.delete;
                      return (
                        (u.delete = function () {
                          c.call(this);
                          var e = this.Ka;
                          nu === nt[e] && (nu = null),
                            "object" == typeof JSEvents &&
                              JSEvents.Oc(nt[e].C.canvas),
                            nt[e] &&
                              nt[e].C.canvas &&
                              (nt[e].C.canvas.zb = void 0),
                            (this.Ka =
                              this.F =
                              this.La =
                              this.T =
                              nt[e] =
                                null);
                        }),
                        u
                      );
                    }
                    function o() {
                      if (s) {
                        var t = s.Cb,
                          n = 0,
                          r = 0,
                          i = 0,
                          a = Array(u.size),
                          o = 0;
                        for (var l of u)
                          (l.ga = Math.min(l.F.width, t)),
                            (l.fa = Math.min(l.F.height, t)),
                            (l.Ia = l.fa * l.ga),
                            (n = Math.max(n, l.ga)),
                            (r = Math.max(r, l.fa)),
                            (i += l.Ia),
                            (a[o++] = l);
                        if ((u.clear(), !(0 >= i))) {
                          for (
                            n = 1 << (0 >= n ? 0 : 32 - Math.clz32(n - 1)),
                              r = 1 << (0 >= r ? 0 : 32 - Math.clz32(r - 1));
                            r * n < i;

                          )
                            n <= r ? (n *= 2) : (r *= 2);
                          for (
                            n = Math.min(n, t),
                              n = Math.min(r, t),
                              a.sort((e, t) => t.Ia - e.Ia),
                              i = new e.DynamicRectanizer(t),
                              l = 0;
                            l < a.length;

                          ) {
                            for (i.reset(n, r), o = l; o < a.length; ++o) {
                              var c = a[o],
                                f = i.addRect(c.ga, c.fa);
                              if (0 > f) {
                                console.assert(o > l);
                                break;
                              }
                              (c.ra = 65535 & f), (c.sa = f >> 16);
                            }
                            for (
                              c = h.push(i.drawWidth()),
                                f = d.push(i.drawHeight()),
                                console.assert(c >= i.drawWidth()),
                                console.assert(f >= i.drawHeight()),
                                console.assert(c <= t),
                                console.assert(f <= t),
                                s.F.width != c && (s.F.width = c),
                                s.F.height != f && (s.F.height = f),
                                s.clear(),
                                c = l;
                              c < o;
                              ++c
                            ) {
                              (f = a[c]),
                                s.saveClipRect(
                                  f.ra,
                                  f.sa,
                                  f.ra + f.ga,
                                  f.sa + f.fa
                                );
                              let t = new e.Mat2D();
                              for (let e of ((t.xx = f.ga / f.F.width),
                              (t.yy = f.fa / f.F.height),
                              (t.xy = t.yx = 0),
                              (t.tx = f.ra),
                              (t.ty = f.sa),
                              s.transform(t),
                              f.S))
                                e();
                              s.restoreClipRect(), (f.S = []);
                            }
                            for (s.flush(); l < o; ++l)
                              ((f = (c = a[l]).Ab).globalCompositeOperation =
                                "copy"),
                                f.drawImage(
                                  s.F,
                                  c.ra,
                                  c.sa,
                                  c.ga,
                                  c.fa,
                                  0,
                                  0,
                                  c.F.width,
                                  c.F.height
                                );
                            l = o;
                          }
                        }
                      }
                    }
                    a && a();
                    let s = null,
                      u = new Set(),
                      l = e.makeRenderer;
                    e.makeRenderer = function (e, t) {
                      if (!s) {
                        function n(e) {
                          var t = document.createElement("canvas");
                          return (
                            (t.width = 1),
                            (t.height = 1),
                            ((s = i(t, e)).Wa = !!s.T.getExtension(
                              "WEBGL_shader_pixel_local_storage"
                            )),
                            (s.Cb = Math.min(
                              s.T.getParameter(s.T.MAX_RENDERBUFFER_SIZE),
                              s.T.getParameter(s.T.MAX_TEXTURE_SIZE)
                            )),
                            (s.Ja = !s.Wa),
                            (e = s.T.getExtension(
                              "WEBGL_debug_renderer_info"
                            )) &&
                              ((t = s.T.getParameter(
                                e.UNMASKED_RENDERER_WEBGL
                              )),
                              s.T.getParameter(
                                e.UNMASKED_VENDOR_WEBGL
                              ).includes("Google") &&
                                t.includes("ANGLE Metal Renderer") &&
                                (s.Ja = !1)),
                            s
                          );
                        }
                        (s = n(!0)).Ja || (s = n(!1));
                      }
                      return t ? new r(e) : i(e, s.Ja);
                    };
                    let c = e.Artboard.prototype.delete;
                    e.Artboard.prototype.delete = function () {
                      (this.Eb = !0), c.call(this);
                    };
                    let f = e.Artboard.prototype.draw;
                    e.Artboard.prototype.draw = function (e) {
                      e.S
                        ? e.S.push(() => {
                            this.Eb || f.call(this, e.Db);
                          })
                        : f.call(this, e);
                    };
                    let h = new n(),
                      d = new n(),
                      p = new t();
                    (e.requestAnimationFrame = p.requestAnimationFrame.bind(p)),
                      (e.cancelAnimationFrame = p.cancelAnimationFrame.bind(p)),
                      (e.enableFPSCounter = p.Lb.bind(p)),
                      (p.lb = o),
                      (e.resolveAnimationFrame = o);
                    let m = e.load;
                    e.load = function (t, n, r = !0) {
                      let i = new e.FallbackFileAssetLoader();
                      return (
                        void 0 !== n && i.addLoader(n),
                        r && ((n = new e.CDNFileAssetLoader()), i.addLoader(n)),
                        Promise.resolve(m(t, i))
                      );
                    };
                    let v = e.WebGL2Renderer.prototype.clear;
                    (e.WebGL2Renderer.prototype.clear = function () {
                      na(this.Ka);
                      let e = this.F;
                      (this.La != e.width || this.Xa != e.height) &&
                        (this.resize(e.width, e.height),
                        (this.La = e.width),
                        (this.Xa = e.height)),
                        v.call(this);
                    }),
                      (e.decodeImage = function (t, n) {
                        n((t = e.decodeWebGL2Image(t)));
                      });
                    let g = e.Renderer.prototype.align;
                    e.Renderer.prototype.align = function (e, t, n, r, i = 1) {
                      g.call(this, e, t, n, r, i);
                    };
                  };
                  var o,
                    s,
                    u,
                    l,
                    c,
                    f = Object.assign({}, e),
                    h = "./this.program",
                    d = "object" == typeof window,
                    p = "function" == typeof importScripts,
                    m = "";
                  (d || p) &&
                    (p
                      ? (m = self.location.href)
                      : "undefined" != typeof document &&
                        document.currentScript &&
                        (m = document.currentScript.src),
                    r && (m = r),
                    (m =
                      0 !== m.indexOf("blob:")
                        ? m.substr(
                            0,
                            m.replace(/[?#].*/, "").lastIndexOf("/") + 1
                          )
                        : ""),
                    p &&
                      (c = (e) => {
                        var t = new XMLHttpRequest();
                        return (
                          t.open("GET", e, !1),
                          (t.responseType = "arraybuffer"),
                          t.send(null),
                          new Uint8Array(t.response)
                        );
                      }),
                    (l = (e, t, n) => {
                      var r = new XMLHttpRequest();
                      r.open("GET", e, !0),
                        (r.responseType = "arraybuffer"),
                        (r.onload = () => {
                          200 == r.status || (0 == r.status && r.response)
                            ? t(r.response)
                            : n();
                        }),
                        (r.onerror = n),
                        r.send(null);
                    }));
                  var v = e.print || console.log.bind(console),
                    g = e.printErr || console.error.bind(console);
                  Object.assign(e, f),
                    (f = null),
                    e.thisProgram && (h = e.thisProgram),
                    e.wasmBinary && (b = e.wasmBinary),
                    e.noExitRuntime,
                    "object" != typeof WebAssembly &&
                      B("no native wasm support detected");
                  var b,
                    y,
                    w,
                    _,
                    A,
                    C,
                    M,
                    E,
                    P,
                    I,
                    L,
                    F = !1;
                  function x() {
                    var t = y.buffer;
                    (e.HEAP8 = _ = new Int8Array(t)),
                      (e.HEAP16 = C = new Int16Array(t)),
                      (e.HEAP32 = E = new Int32Array(t)),
                      (e.HEAPU8 = A = new Uint8Array(t)),
                      (e.HEAPU16 = M = new Uint16Array(t)),
                      (e.HEAPU32 = P = new Uint32Array(t)),
                      (e.HEAPF32 = I = new Float32Array(t)),
                      (e.HEAPF64 = L = new Float64Array(t));
                  }
                  var R,
                    S = [],
                    k = [],
                    T = [],
                    j = 0,
                    O = null,
                    W = null;
                  function B(t) {
                    throw (
                      (e.onAbort && e.onAbort(t),
                      g((t = "Aborted(" + t + ")")),
                      (F = !0),
                      (t = new WebAssembly.RuntimeError(
                        t + ". Build with -sASSERTIONS for more info."
                      )),
                      u(t),
                      t)
                    );
                  }
                  function D(e) {
                    return e.startsWith(
                      "data:application/octet-stream;base64,"
                    );
                  }
                  if (!D(($ = "webgl2_advanced.wasm"))) {
                    var V = $;
                    $ = e.locateFile ? e.locateFile(V, m) : m + V;
                  }
                  function U(e) {
                    if (e == $ && b) return new Uint8Array(b);
                    if (c) return c(e);
                    throw "both async and sync fetching of the wasm failed";
                  }
                  function N(e, t, n) {
                    return (function (e) {
                      if (!b && (d || p)) {
                        if (
                          "function" == typeof fetch &&
                          !e.startsWith("file://")
                        )
                          return fetch(e, { credentials: "same-origin" })
                            .then((t) => {
                              if (!t.ok)
                                throw (
                                  "failed to load wasm binary file at '" +
                                  e +
                                  "'"
                                );
                              return t.arrayBuffer();
                            })
                            .catch(() => U(e));
                        if (l)
                          return new Promise((t, n) => {
                            l(e, (e) => t(new Uint8Array(e)), n);
                          });
                      }
                      return Promise.resolve().then(() => U(e));
                    })(e)
                      .then((e) => WebAssembly.instantiate(e, t))
                      .then((e) => e)
                      .then(n, (e) => {
                        g("failed to asynchronously prepare wasm: " + e), B(e);
                      });
                  }
                  var $,
                    G,
                    z,
                    H = {
                      517895: (e, t, n, r, i) => {
                        if (
                          "undefined" == typeof window ||
                          void 0 ===
                            (window.AudioContext || window.webkitAudioContext)
                        )
                          return 0;
                        if (void 0 === window.h) {
                          (window.h = { Da: 0 }),
                            (window.h.I = {}),
                            (window.h.I.Ba = e),
                            (window.h.I.capture = t),
                            (window.h.I.Na = n),
                            (window.h.ja = {}),
                            (window.h.ja.stopped = r),
                            (window.h.ja.ub = i);
                          let a = window.h;
                          (a.D = []),
                            (a.oc = function (e) {
                              for (var t = 0; t < a.D.length; ++t)
                                if (null == a.D[t]) return (a.D[t] = e), t;
                              return a.D.push(e), a.D.length - 1;
                            }),
                            (a.yb = function (e) {
                              for (a.D[e] = null; 0 < a.D.length; )
                                if (null == a.D[a.D.length - 1]) a.D.pop();
                                else break;
                            }),
                            (a.Qc = function (e) {
                              for (var t = 0; t < a.D.length; ++t)
                                if (a.D[t] == e) return a.yb(t);
                            }),
                            (a.va = function (e) {
                              return a.D[e];
                            }),
                            (a.Va = ["touchend", "click"]),
                            (a.unlock = function () {
                              for (var e = 0; e < a.D.length; ++e) {
                                var t = a.D[e];
                                null != t &&
                                  null != t.J &&
                                  t.state === a.ja.ub &&
                                  t.J.resume().then(
                                    () => {
                                      nk(t.mb);
                                    },
                                    (e) => {
                                      console.error(
                                        "Failed to resume audiocontext",
                                        e
                                      );
                                    }
                                  );
                              }
                              a.Va.map(function (e) {
                                document.removeEventListener(e, a.unlock, !0);
                              });
                            }),
                            a.Va.map(function (e) {
                              document.addEventListener(e, a.unlock, !0);
                            });
                        }
                        return (window.h.Da += 1), 1;
                      },
                      520073: () => {
                        void 0 !== window.h &&
                          (window.h.Va.map(function (e) {
                            document.removeEventListener(
                              e,
                              window.h.unlock,
                              !0
                            );
                          }),
                          --window.h.Da,
                          0 === window.h.Da && delete window.h);
                      },
                      520377: () =>
                        void 0 !== navigator.mediaDevices &&
                        void 0 !== navigator.mediaDevices.getUserMedia,
                      520481: () => {
                        try {
                          var e = new (window.AudioContext ||
                              window.webkitAudioContext)(),
                            t = e.sampleRate;
                          return e.close(), t;
                        } catch (e) {
                          return 0;
                        }
                      },
                      520652: (e, t, n, r, i, a) => {
                        if (void 0 === window.h) return -1;
                        var o = {},
                          s = {};
                        return (
                          e == window.h.I.Ba && 0 != n && (s.sampleRate = n),
                          (o.J = new (window.AudioContext ||
                            window.webkitAudioContext)(s)),
                          o.J.suspend(),
                          (o.state = window.h.ja.stopped),
                          (n = 0),
                          e != window.h.I.Ba && (n = t),
                          (o.Z = o.J.createScriptProcessor(r, n, t)),
                          (o.Z.onaudioprocess = function (n) {
                            if (
                              ((null == o.wa || 0 == o.wa.length) &&
                                (o.wa = new Float32Array(I.buffer, i, r * t)),
                              e == window.h.I.capture || e == window.h.I.Na)
                            ) {
                              for (var s = 0; s < t; s += 1)
                                for (
                                  var u = n.inputBuffer.getChannelData(s),
                                    l = o.wa,
                                    c = 0;
                                  c < r;
                                  c += 1
                                )
                                  l[c * t + s] = u[c];
                              nT(a, r, i);
                            }
                            if (e == window.h.I.Ba || e == window.h.I.Na)
                              for (
                                nj(a, r, i), s = 0;
                                s < n.outputBuffer.numberOfChannels;
                                ++s
                              )
                                for (
                                  u = n.outputBuffer.getChannelData(s),
                                    l = o.wa,
                                    c = 0;
                                  c < r;
                                  c += 1
                                )
                                  u[c] = l[c * t + s];
                            else
                              for (
                                s = 0;
                                s < n.outputBuffer.numberOfChannels;
                                ++s
                              )
                                n.outputBuffer.getChannelData(s).fill(0);
                          }),
                          (e != window.h.I.capture && e != window.h.I.Na) ||
                            navigator.mediaDevices
                              .getUserMedia({ audio: !0, video: !1 })
                              .then(function (e) {
                                (o.Ea = o.J.createMediaStreamSource(e)),
                                  o.Ea.connect(o.Z),
                                  o.Z.connect(o.J.destination);
                              })
                              .catch(function (e) {
                                console.log("Failed to get user media: " + e);
                              }),
                          e == window.h.I.Ba && o.Z.connect(o.J.destination),
                          (o.mb = a),
                          window.h.oc(o)
                        );
                      },
                      523529: (e) => window.h.va(e).J.sampleRate,
                      523602: (e) => {
                        void 0 !== (e = window.h.va(e)).Z &&
                          ((e.Z.onaudioprocess = function () {}),
                          e.Z.disconnect(),
                          (e.Z = void 0)),
                          void 0 !== e.Ea &&
                            (e.Ea.disconnect(), (e.Ea = void 0)),
                          e.J.close(),
                          (e.J = void 0),
                          (e.mb = void 0);
                      },
                      524002: (e) => {
                        window.h.yb(e);
                      },
                      524052: (e) => {
                        (e = window.h.va(e)).J.resume(),
                          (e.state = window.h.ja.ub);
                      },
                      524191: (e) => {
                        (e = window.h.va(e)).J.suspend(),
                          (e.state = window.h.ja.stopped);
                      },
                    },
                    Y = (t) => {
                      for (; 0 < t.length; ) t.shift()(e);
                    },
                    X = (e, t) => {
                      for (var n = 0, r = e.length - 1; 0 <= r; r--) {
                        var i = e[r];
                        "." === i
                          ? e.splice(r, 1)
                          : ".." === i
                          ? (e.splice(r, 1), n++)
                          : n && (e.splice(r, 1), n--);
                      }
                      if (t) for (; n; n--) e.unshift("..");
                      return e;
                    },
                    q = (e) => {
                      var t = "/" === e.charAt(0),
                        n = "/" === e.substr(-1);
                      return (
                        (e = X(
                          e.split("/").filter((e) => !!e),
                          !t
                        ).join("/")) ||
                          t ||
                          (e = "."),
                        e && n && (e += "/"),
                        (t ? "/" : "") + e
                      );
                    },
                    J = (e) => {
                      var t =
                        /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/
                          .exec(e)
                          .slice(1);
                      return ((e = t[0]), (t = t[1]), e || t)
                        ? (t && (t = t.substr(0, t.length - 1)), e + t)
                        : ".";
                    },
                    K = (e) => {
                      if ("/" === e) return "/";
                      var t = (e = (e = q(e)).replace(/\/$/, "")).lastIndexOf(
                        "/"
                      );
                      return -1 === t ? e : e.substr(t + 1);
                    },
                    Z = () => {
                      if (
                        "object" == typeof crypto &&
                        "function" == typeof crypto.getRandomValues
                      )
                        return (e) => crypto.getRandomValues(e);
                      B("initRandomDevice");
                    },
                    Q = (e) => (Q = Z())(e);
                  function ee() {
                    for (
                      var e = "", t = !1, n = arguments.length - 1;
                      -1 <= n && !t;
                      n--
                    ) {
                      if (
                        ((t = 0 <= n ? arguments[n] : "/"),
                        "string" != typeof t)
                      )
                        throw TypeError(
                          "Arguments to path.resolve must be strings"
                        );
                      if (!t) return "";
                      (e = t + "/" + e), (t = "/" === t.charAt(0));
                    }
                    return (
                      (e = X(
                        e.split("/").filter((e) => !!e),
                        !t
                      ).join("/")),
                      (t ? "/" : "") + e || "."
                    );
                  }
                  var et =
                      "undefined" != typeof TextDecoder
                        ? new TextDecoder("utf8")
                        : void 0,
                    en = (e, t, n) => {
                      var r = t + n;
                      for (n = t; e[n] && !(n >= r); ) ++n;
                      if (16 < n - t && e.buffer && et)
                        return et.decode(e.subarray(t, n));
                      for (r = ""; t < n; ) {
                        var i = e[t++];
                        if (128 & i) {
                          var a = 63 & e[t++];
                          if (192 == (224 & i))
                            r += String.fromCharCode(((31 & i) << 6) | a);
                          else {
                            var o = 63 & e[t++];
                            65536 >
                            (i =
                              224 == (240 & i)
                                ? ((15 & i) << 12) | (a << 6) | o
                                : ((7 & i) << 18) |
                                  (a << 12) |
                                  (o << 6) |
                                  (63 & e[t++]))
                              ? (r += String.fromCharCode(i))
                              : ((i -= 65536),
                                (r += String.fromCharCode(
                                  55296 | (i >> 10),
                                  56320 | (1023 & i)
                                )));
                          }
                        } else r += String.fromCharCode(i);
                      }
                      return r;
                    },
                    er = [],
                    ei = (e) => {
                      for (var t = 0, n = 0; n < e.length; ++n) {
                        var r = e.charCodeAt(n);
                        127 >= r
                          ? t++
                          : 2047 >= r
                          ? (t += 2)
                          : 55296 <= r && 57343 >= r
                          ? ((t += 4), ++n)
                          : (t += 3);
                      }
                      return t;
                    },
                    ea = (e, t, n, r) => {
                      if (!(0 < r)) return 0;
                      var i = n;
                      r = n + r - 1;
                      for (var a = 0; a < e.length; ++a) {
                        var o = e.charCodeAt(a);
                        if (
                          (55296 <= o &&
                            57343 >= o &&
                            (o =
                              (65536 + ((1023 & o) << 10)) |
                              (1023 & e.charCodeAt(++a))),
                          127 >= o)
                        ) {
                          if (n >= r) break;
                          t[n++] = o;
                        } else {
                          if (2047 >= o) {
                            if (n + 1 >= r) break;
                            t[n++] = 192 | (o >> 6);
                          } else {
                            if (65535 >= o) {
                              if (n + 2 >= r) break;
                              t[n++] = 224 | (o >> 12);
                            } else {
                              if (n + 3 >= r) break;
                              (t[n++] = 240 | (o >> 18)),
                                (t[n++] = 128 | ((o >> 12) & 63));
                            }
                            t[n++] = 128 | ((o >> 6) & 63);
                          }
                          t[n++] = 128 | (63 & o);
                        }
                      }
                      return (t[n] = 0), n - i;
                    };
                  function eo(e, t) {
                    var n = Array(ei(e) + 1);
                    return (e = ea(e, n, 0, n.length)), t && (n.length = e), n;
                  }
                  var es = [];
                  function eu(e, t) {
                    (es[e] = { input: [], G: [], V: t }), eO(e, el);
                  }
                  var el = {
                    open: function (e) {
                      var t = es[e.node.Ca];
                      if (!t) throw new eA(43);
                      (e.s = t), (e.seekable = !1);
                    },
                    close: function (e) {
                      e.s.V.ua(e.s);
                    },
                    ua: function (e) {
                      e.s.V.ua(e.s);
                    },
                    read: function (e, t, n, r) {
                      if (!e.s || !e.s.V.gb) throw new eA(60);
                      for (var i = 0, a = 0; a < r; a++) {
                        try {
                          var o = e.s.V.gb(e.s);
                        } catch (e) {
                          throw new eA(29);
                        }
                        if (void 0 === o && 0 === i) throw new eA(6);
                        if (null == o) break;
                        i++, (t[n + a] = o);
                      }
                      return i && (e.node.timestamp = Date.now()), i;
                    },
                    write: function (e, t, n, r) {
                      if (!e.s || !e.s.V.Qa) throw new eA(60);
                      try {
                        for (var i = 0; i < r; i++) e.s.V.Qa(e.s, t[n + i]);
                      } catch (e) {
                        throw new eA(29);
                      }
                      return r && (e.node.timestamp = Date.now()), i;
                    },
                  };
                  function ec(e, t) {
                    var n = e.j ? e.j.length : 0;
                    n >= t ||
                      ((t = Math.max(t, (n * (1048576 > n ? 2 : 1.125)) >>> 0)),
                      0 != n && (t = Math.max(t, 256)),
                      (n = e.j),
                      (e.j = new Uint8Array(t)),
                      0 < e.v && e.j.set(n.subarray(0, e.v), 0));
                  }
                  var ef,
                    eh,
                    ed,
                    ep,
                    em = {
                      O: null,
                      U: () => em.createNode(null, "/", 16895, 0),
                      createNode(e, t, n, r) {
                        if (24576 == (61440 & n) || 4096 == (61440 & n))
                          throw new eA(63);
                        return (
                          em.O ||
                            (em.O = {
                              dir: {
                                node: {
                                  Y: em.l.Y,
                                  P: em.l.P,
                                  ma: em.l.ma,
                                  za: em.l.za,
                                  sb: em.l.sb,
                                  xb: em.l.xb,
                                  tb: em.l.tb,
                                  qb: em.l.qb,
                                  Fa: em.l.Fa,
                                },
                                stream: { ba: em.m.ba },
                              },
                              file: {
                                node: { Y: em.l.Y, P: em.l.P },
                                stream: {
                                  ba: em.m.ba,
                                  read: em.m.read,
                                  write: em.m.write,
                                  ta: em.m.ta,
                                  ib: em.m.ib,
                                  kb: em.m.kb,
                                },
                              },
                              link: {
                                node: { Y: em.l.Y, P: em.l.P, na: em.l.na },
                                stream: {},
                              },
                              Ya: {
                                node: { Y: em.l.Y, P: em.l.P },
                                stream: ej,
                              },
                            }),
                          16384 == (61440 & (n = eL(e, t, n, r)).mode)
                            ? ((n.l = em.O.dir.node),
                              (n.m = em.O.dir.stream),
                              (n.j = {}))
                            : 32768 == (61440 & n.mode)
                            ? ((n.l = em.O.file.node),
                              (n.m = em.O.file.stream),
                              (n.v = 0),
                              (n.j = null))
                            : 40960 == (61440 & n.mode)
                            ? ((n.l = em.O.link.node), (n.m = em.O.link.stream))
                            : 8192 == (61440 & n.mode) &&
                              ((n.l = em.O.Ya.node), (n.m = em.O.Ya.stream)),
                          (n.timestamp = Date.now()),
                          e && ((e.j[t] = n), (e.timestamp = n.timestamp)),
                          n
                        );
                      },
                      Bc: (e) =>
                        e.j
                          ? e.j.subarray
                            ? e.j.subarray(0, e.v)
                            : new Uint8Array(e.j)
                          : new Uint8Array(0),
                      l: {
                        Y(e) {
                          var t = {};
                          return (
                            (t.zc = 8192 == (61440 & e.mode) ? e.id : 1),
                            (t.Dc = e.id),
                            (t.mode = e.mode),
                            (t.Lc = 1),
                            (t.uid = 0),
                            (t.Cc = 0),
                            (t.Ca = e.Ca),
                            16384 == (61440 & e.mode)
                              ? (t.size = 4096)
                              : 32768 == (61440 & e.mode)
                              ? (t.size = e.v)
                              : 40960 == (61440 & e.mode)
                              ? (t.size = e.link.length)
                              : (t.size = 0),
                            (t.qc = new Date(e.timestamp)),
                            (t.Jc = new Date(e.timestamp)),
                            (t.xc = new Date(e.timestamp)),
                            (t.Fb = 4096),
                            (t.rc = Math.ceil(t.size / t.Fb)),
                            t
                          );
                        },
                        P(e, t) {
                          if (
                            (void 0 !== t.mode && (e.mode = t.mode),
                            void 0 !== t.timestamp &&
                              (e.timestamp = t.timestamp),
                            void 0 !== t.size && ((t = t.size), e.v != t))
                          )
                            if (0 == t) (e.j = null), (e.v = 0);
                            else {
                              var n = e.j;
                              (e.j = new Uint8Array(t)),
                                n && e.j.set(n.subarray(0, Math.min(t, e.v))),
                                (e.v = t);
                            }
                        },
                        ma() {
                          throw eC[44];
                        },
                        za: (e, t, n, r) => em.createNode(e, t, n, r),
                        sb(e, t, n) {
                          if (16384 == (61440 & e.mode)) {
                            try {
                              var r = eI(t, n);
                            } catch (e) {}
                            if (r) for (var i in r.j) throw new eA(55);
                          }
                          delete e.parent.j[e.name],
                            (e.parent.timestamp = Date.now()),
                            (e.name = n),
                            (t.j[n] = e),
                            (t.timestamp = e.parent.timestamp),
                            (e.parent = t);
                        },
                        xb(e, t) {
                          delete e.j[t], (e.timestamp = Date.now());
                        },
                        tb(e, t) {
                          var n,
                            r = eI(e, t);
                          for (n in r.j) throw new eA(55);
                          delete e.j[t], (e.timestamp = Date.now());
                        },
                        qb(e) {
                          var t,
                            n = [".", ".."];
                          for (t in e.j) e.j.hasOwnProperty(t) && n.push(t);
                          return n;
                        },
                        Fa: (e, t, n) => (
                          ((e = em.createNode(e, t, 41471, 0)).link = n), e
                        ),
                        na(e) {
                          if (40960 != (61440 & e.mode)) throw new eA(28);
                          return e.link;
                        },
                      },
                      m: {
                        read(e, t, n, r, i) {
                          var a = e.node.j;
                          if (i >= e.node.v) return 0;
                          if (8 < (e = Math.min(e.node.v - i, r)) && a.subarray)
                            t.set(a.subarray(i, i + e), n);
                          else for (r = 0; r < e; r++) t[n + r] = a[i + r];
                          return e;
                        },
                        write(e, t, n, r, i, a) {
                          if ((t.buffer === _.buffer && (a = !1), !r)) return 0;
                          if (
                            (((e = e.node).timestamp = Date.now()),
                            t.subarray && (!e.j || e.j.subarray))
                          ) {
                            if (a)
                              return (e.j = t.subarray(n, n + r)), (e.v = r);
                            if (0 === e.v && 0 === i)
                              return (e.j = t.slice(n, n + r)), (e.v = r);
                            if (i + r <= e.v)
                              return e.j.set(t.subarray(n, n + r), i), r;
                          }
                          if ((ec(e, i + r), e.j.subarray && t.subarray))
                            e.j.set(t.subarray(n, n + r), i);
                          else for (a = 0; a < r; a++) e.j[i + a] = t[n + a];
                          return (e.v = Math.max(e.v, i + r)), r;
                        },
                        ba(e, t, n) {
                          if (
                            (1 === n
                              ? (t += e.position)
                              : 2 === n &&
                                32768 == (61440 & e.node.mode) &&
                                (t += e.node.v),
                            0 > t)
                          )
                            throw new eA(28);
                          return t;
                        },
                        ta(e, t, n) {
                          ec(e.node, t + n),
                            (e.node.v = Math.max(e.node.v, t + n));
                        },
                        ib(e, t, n, r, i) {
                          if (32768 != (61440 & e.node.mode)) throw new eA(43);
                          if (((e = e.node.j), 2 & i || e.buffer !== _.buffer))
                            throw (
                              ((0 < n || n + t < e.length) &&
                                (e = e.subarray
                                  ? e.subarray(n, n + t)
                                  : Array.prototype.slice.call(e, n, n + t)),
                              (n = !0),
                              B(),
                              (t = void 0),
                              new eA(48))
                            );
                          return (n = !1), (t = e.byteOffset), { o: t, M: n };
                        },
                        kb: (e, t, n, r) => (em.m.write(e, t, 0, r, n, !1), 0),
                      },
                    },
                    ev = null,
                    eg = {},
                    eb = [],
                    ey = 1,
                    ew = null,
                    e_ = !0,
                    eA = null,
                    eC = {},
                    eM = (e, t = {}) => {
                      if (!(e = ee(e))) return { path: "", node: null };
                      if (8 < (t = Object.assign({ eb: !0, Sa: 0 }, t)).Sa)
                        throw new eA(32);
                      e = e.split("/").filter((e) => !!e);
                      for (var n = ev, r = "/", i = 0; i < e.length; i++) {
                        var a = i === e.length - 1;
                        if (a && t.parent) break;
                        if (
                          ((n = eI(n, e[i])),
                          (r = q(r + "/" + e[i])),
                          n.Aa && (!a || (a && t.eb)) && (n = n.Aa.root),
                          !a || t.cb)
                        ) {
                          for (a = 0; 40960 == (61440 & n.mode); )
                            if (
                              ((n = eU(r)),
                              (n = eM((r = ee(J(r), n)), {
                                Sa: t.Sa + 1,
                              }).node),
                              40 < a++)
                            )
                              throw new eA(32);
                        }
                      }
                      return { path: r, node: n };
                    },
                    eE = (e) => {
                      for (var t; ; ) {
                        if (e === e.parent)
                          return (
                            (e = e.U.jb),
                            t
                              ? "/" !== e[e.length - 1]
                                ? `${e}/${t}`
                                : e + t
                              : e
                          );
                        (t = t ? `${e.name}/${t}` : e.name), (e = e.parent);
                      }
                    },
                    eP = (e, t) => {
                      for (var n = 0, r = 0; r < t.length; r++)
                        n = ((n << 5) - n + t.charCodeAt(r)) | 0;
                      return ((e + n) >>> 0) % ew.length;
                    },
                    eI = (e, t) => {
                      var n;
                      if ((n = (n = ex(e, "x")) ? n : 2 * !e.l.ma))
                        throw new eA(n, e);
                      for (n = ew[eP(e.id, t)]; n; n = n.bc) {
                        var r = n.name;
                        if (n.parent.id === e.id && r === t) return n;
                      }
                      return e.l.ma(e, t);
                    },
                    eL = (e, t, n, r) => (
                      (t = eP((e = new nw(e, t, n, r)).parent.id, e.name)),
                      (e.bc = ew[t]),
                      (ew[t] = e)
                    ),
                    eF = (e) => {
                      var t = ["r", "w", "rw"][3 & e];
                      return 512 & e && (t += "w"), t;
                    },
                    ex = (e, t) =>
                      e_
                        ? 0
                        : (t.includes("r") && !(292 & e.mode)) ||
                          (t.includes("w") && !(146 & e.mode)) ||
                          (t.includes("x") && !(73 & e.mode))
                        ? 2
                        : 0,
                    eR = (e, t) => {
                      try {
                        return eI(e, t), 20;
                      } catch (e) {}
                      return ex(e, "wx");
                    },
                    eS = () => {
                      for (var e = 0; 4096 >= e; e++) if (!eb[e]) return e;
                      throw new eA(33);
                    },
                    ek = (e) => {
                      if (!(e = eb[e])) throw new eA(8);
                      return e;
                    },
                    eT = (e, t = -1) => (
                      ed ||
                        (((ed = function () {
                          this.h = {};
                        }).prototype = {}),
                        Object.defineProperties(ed.prototype, {
                          object: {
                            get() {
                              return this.node;
                            },
                            set(e) {
                              this.node = e;
                            },
                          },
                          flags: {
                            get() {
                              return this.h.flags;
                            },
                            set(e) {
                              this.h.flags = e;
                            },
                          },
                          position: {
                            get() {
                              return this.h.position;
                            },
                            set(e) {
                              this.h.position = e;
                            },
                          },
                        })),
                      (e = Object.assign(new ed(), e)),
                      -1 == t && (t = eS()),
                      (e.X = t),
                      (eb[t] = e)
                    ),
                    ej = {
                      open: (e) => {
                        (e.m = eg[e.node.Ca].m), e.m.open && e.m.open(e);
                      },
                      ba: () => {
                        throw new eA(70);
                      },
                    },
                    eO = (e, t) => {
                      eg[e] = { m: t };
                    },
                    eW = (e, t) => {
                      var n = "/" === t,
                        r = !t;
                      if (n && ev) throw new eA(10);
                      if (!n && !r) {
                        var i = eM(t, { eb: !1 });
                        if (((t = i.path), (i = i.node).Aa)) throw new eA(10);
                        if (16384 != (61440 & i.mode)) throw new eA(54);
                      }
                      (t = { type: e, Nc: {}, jb: t, ac: [] }),
                        ((e = e.U(t)).U = t),
                        (t.root = e),
                        n ? (ev = e) : i && ((i.Aa = t), i.U && i.U.ac.push(t));
                    },
                    eB = (e, t, n) => {
                      var r = eM(e, { parent: !0 }).node;
                      if (!(e = K(e)) || "." === e || ".." === e)
                        throw new eA(28);
                      var i = eR(r, e);
                      if (i) throw new eA(i);
                      if (!r.l.za) throw new eA(63);
                      return r.l.za(r, e, t, n);
                    },
                    eD = (e, t, n) => {
                      void 0 === n && ((n = t), (t = 438)), eB(e, 8192 | t, n);
                    },
                    eV = (e, t) => {
                      if (!ee(e)) throw new eA(44);
                      var n = eM(t, { parent: !0 }).node;
                      if (!n) throw new eA(44);
                      var r = eR(n, (t = K(t)));
                      if (r) throw new eA(r);
                      if (!n.l.Fa) throw new eA(63);
                      n.l.Fa(n, t, e);
                    },
                    eU = (e) => {
                      if (!(e = eM(e).node)) throw new eA(44);
                      if (!e.l.na) throw new eA(28);
                      return ee(eE(e.parent), e.l.na(e));
                    },
                    eN = (t, n, r) => {
                      if ("" === t) throw new eA(44);
                      if ("string" == typeof n) {
                        var i = {
                          r: 0,
                          "r+": 2,
                          w: 577,
                          "w+": 578,
                          a: 1089,
                          "a+": 1090,
                        }[n];
                        if (void 0 === i)
                          throw Error(`Unknown file open mode: ${n}`);
                        n = i;
                      }
                      if (
                        ((r =
                          64 & n
                            ? ((void 0 === r ? 438 : r) & 4095) | 32768
                            : 0),
                        "object" == typeof t)
                      )
                        var a = t;
                      else {
                        t = q(t);
                        try {
                          a = eM(t, { cb: !(131072 & n) }).node;
                        } catch (e) {}
                      }
                      if (((i = !1), 64 & n))
                        if (a) {
                          if (128 & n) throw new eA(20);
                        } else (a = eB(t, r, 0)), (i = !0);
                      if (!a) throw new eA(44);
                      if (
                        (8192 == (61440 & a.mode) && (n &= -513),
                        65536 & n && 16384 != (61440 & a.mode))
                      )
                        throw new eA(54);
                      if (
                        !i &&
                        (r = a
                          ? 40960 == (61440 & a.mode)
                            ? 32
                            : 16384 == (61440 & a.mode) &&
                              ("r" !== eF(n) || 512 & n)
                            ? 31
                            : ex(a, eF(n))
                          : 44)
                      )
                        throw new eA(r);
                      if (512 & n && !i) {
                        if (
                          !(r =
                            "string" == typeof (r = a)
                              ? eM(r, { cb: !0 }).node
                              : r).l.P
                        )
                          throw new eA(63);
                        if (16384 == (61440 & r.mode)) throw new eA(31);
                        if (32768 != (61440 & r.mode)) throw new eA(28);
                        if ((i = ex(r, "w"))) throw new eA(i);
                        r.l.P(r, { size: 0, timestamp: Date.now() });
                      }
                      return (
                        (n &= -131713),
                        (a = eT({
                          node: a,
                          path: eE(a),
                          flags: n,
                          seekable: !0,
                          position: 0,
                          m: a.m,
                          pc: [],
                          error: !1,
                        })).m.open && a.m.open(a),
                        !e.logReadFiles ||
                          1 & n ||
                          (ep || (ep = {}), t in ep || (ep[t] = 1)),
                        a
                      );
                    },
                    e$ = (e, t, n) => {
                      if (null === e.X) throw new eA(8);
                      if (!e.seekable || !e.m.ba) throw new eA(70);
                      if (0 != n && 1 != n && 2 != n) throw new eA(28);
                      (e.position = e.m.ba(e, t, n)), (e.pc = []);
                    },
                    eG = () => {
                      eA ||
                        (((eA = function (e, t) {
                          (this.name = "ErrnoError"),
                            (this.node = t),
                            (this.ec = function (e) {
                              this.aa = e;
                            }),
                            this.ec(e),
                            (this.message = "FS error");
                        }).prototype = Error()),
                        (eA.prototype.constructor = eA),
                        [44].forEach((e) => {
                          (eC[e] = new eA(e)),
                            (eC[e].stack = "<generic error, no stack>");
                        }));
                    },
                    ez = (e, t, n) => {
                      e = q("/dev/" + e);
                      var r,
                        i = ((r = 0), t && (r |= 365), n && (r |= 146), r);
                      eh || (eh = 64);
                      var a = eh++ << 8;
                      eO(a, {
                        open: (e) => {
                          e.seekable = !1;
                        },
                        close: () => {
                          n && n.buffer && n.buffer.length && n(10);
                        },
                        read: (e, n, r, i) => {
                          for (var a = 0, o = 0; o < i; o++) {
                            try {
                              var s = t();
                            } catch (e) {
                              throw new eA(29);
                            }
                            if (void 0 === s && 0 === a) throw new eA(6);
                            if (null == s) break;
                            a++, (n[r + o] = s);
                          }
                          return a && (e.node.timestamp = Date.now()), a;
                        },
                        write: (e, t, r, i) => {
                          for (var a = 0; a < i; a++)
                            try {
                              n(t[r + a]);
                            } catch (e) {
                              throw new eA(29);
                            }
                          return i && (e.node.timestamp = Date.now()), a;
                        },
                      }),
                        eD(e, i, a);
                    },
                    eH = {},
                    eY = void 0;
                  function eX() {
                    return E[((eY += 4) - 4) >> 2];
                  }
                  function eq(e) {
                    if (void 0 === e) return "_unknown";
                    var t = (e = e.replace(/[^a-zA-Z0-9_]/g, "$")).charCodeAt(
                      0
                    );
                    return 48 <= t && 57 >= t ? `_${e}` : e;
                  }
                  function eJ(e, t) {
                    return {
                      [(e = eq(e))]: function () {
                        return t.apply(this, arguments);
                      },
                    }[e];
                  }
                  function eK() {
                    (this.M = [void 0]), (this.fb = []);
                  }
                  var eZ = new eK(),
                    eQ = void 0;
                  function e0(e) {
                    throw new eQ(e);
                  }
                  var e1 = (e) => (
                      e || e0("Cannot use deleted val. handle = " + e),
                      eZ.get(e).value
                    ),
                    e2 = (e) => {
                      switch (e) {
                        case void 0:
                          return 1;
                        case null:
                          return 2;
                        case !0:
                          return 3;
                        case !1:
                          return 4;
                        default:
                          return eZ.ta({ rb: 1, value: e });
                      }
                    };
                  function e3(e) {
                    var t = Error,
                      n = eJ(e, function (t) {
                        (this.name = e),
                          (this.message = t),
                          void 0 !== (t = Error(t).stack) &&
                            (this.stack =
                              this.toString() +
                              "\n" +
                              t.replace(/^Error(:[^\n]*)?\n/, ""));
                      });
                    return (
                      (n.prototype = Object.create(t.prototype)),
                      (n.prototype.constructor = n),
                      (n.prototype.toString = function () {
                        return void 0 === this.message
                          ? this.name
                          : `${this.name}: ${this.message}`;
                      }),
                      n
                    );
                  }
                  var e4 = void 0,
                    e5 = void 0;
                  function e6(e) {
                    for (var t = ""; A[e]; ) t += e5[A[e++]];
                    return t;
                  }
                  var e8 = [];
                  function e9() {
                    for (; e8.length; ) {
                      var e = e8.pop();
                      (e.g.ia = !1), e.delete();
                    }
                  }
                  var e7 = void 0,
                    te = {};
                  function tt(e, t) {
                    for (
                      void 0 === t && e0("ptr should not be undefined");
                      e.A;

                    )
                      (t = e.pa(t)), (e = e.A);
                    return t;
                  }
                  var tn = {};
                  function tr(e) {
                    var t = e6((e = nO(e)));
                    return nx(e), t;
                  }
                  function ti(e, t) {
                    var n = tn[e];
                    return (
                      void 0 === n && e0(t + " has unknown type " + tr(e)), n
                    );
                  }
                  function ta() {}
                  var to = !1;
                  function ts(e) {
                    --e.count.value,
                      0 === e.count.value && (e.H ? e.L.W(e.H) : e.u.i.W(e.o));
                  }
                  var tu = {},
                    tl = void 0;
                  function tc(e) {
                    throw new tl(e);
                  }
                  function tf(e, t) {
                    return (
                      (t.u && t.o) ||
                        tc("makeClassHandle requires ptr and ptrType"),
                      !!t.L != !!t.H &&
                        tc("Both smartPtrType and smartPtr must be specified"),
                      (t.count = { value: 1 }),
                      th(Object.create(e, { g: { value: t } }))
                    );
                  }
                  function th(e) {
                    return "undefined" == typeof FinalizationRegistry
                      ? ((th = (e) => e), e)
                      : ((to = new FinalizationRegistry((e) => {
                          ts(e.g);
                        })),
                        (th = (e) => {
                          var t = e.g;
                          return t.H && to.register(e, { g: t }, e), e;
                        }),
                        (ta = (e) => {
                          to.unregister(e);
                        }),
                        th(e));
                  }
                  var td = {};
                  function tp(e) {
                    for (; e.length; ) {
                      var t = e.pop();
                      e.pop()(t);
                    }
                  }
                  function tm(e) {
                    return this.fromWireType(E[e >> 2]);
                  }
                  var tv = {},
                    tg = {};
                  function tb(e, t, n) {
                    function r(t) {
                      (t = n(t)).length !== e.length &&
                        tc("Mismatched type converter count");
                      for (var r = 0; r < e.length; ++r) tw(e[r], t[r]);
                    }
                    e.forEach(function (e) {
                      tg[e] = t;
                    });
                    var i = Array(t.length),
                      a = [],
                      o = 0;
                    t.forEach((e, t) => {
                      tn.hasOwnProperty(e)
                        ? (i[t] = tn[e])
                        : (a.push(e),
                          tv.hasOwnProperty(e) || (tv[e] = []),
                          tv[e].push(() => {
                            (i[t] = tn[e]), ++o === a.length && r(i);
                          }));
                    }),
                      0 === a.length && r(i);
                  }
                  function ty(e) {
                    switch (e) {
                      case 1:
                        return 0;
                      case 2:
                        return 1;
                      case 4:
                        return 2;
                      case 8:
                        return 3;
                      default:
                        throw TypeError(`Unknown type size: ${e}`);
                    }
                  }
                  function tw(e, t, n = {}) {
                    if (!("argPackAdvance" in t))
                      throw TypeError(
                        "registerType registeredInstance requires argPackAdvance"
                      );
                    !(function (e, t, n = {}) {
                      var r = t.name;
                      if (
                        (e ||
                          e0(
                            `type "${r}" must have a positive integer typeid pointer`
                          ),
                        tn.hasOwnProperty(e))
                      ) {
                        if (n.Ub) return;
                        e0(`Cannot register type '${r}' twice`);
                      }
                      (tn[e] = t),
                        delete tg[e],
                        tv.hasOwnProperty(e) &&
                          ((t = tv[e]), delete tv[e], t.forEach((e) => e()));
                    })(e, t, n);
                  }
                  function t_(e) {
                    e0(e.g.u.i.name + " instance already deleted");
                  }
                  function tA() {}
                  function tC(e, t, n) {
                    if (void 0 === e[t].B) {
                      var r = e[t];
                      (e[t] = function () {
                        return (
                          e[t].B.hasOwnProperty(arguments.length) ||
                            e0(
                              `Function '${n}' called with an invalid number of arguments (${arguments.length}) - expects one of (${e[t].B})!`
                            ),
                          e[t].B[arguments.length].apply(this, arguments)
                        );
                      }),
                        (e[t].B = []),
                        (e[t].B[r.ha] = r);
                    }
                  }
                  function tM(t, n, r) {
                    e.hasOwnProperty(t)
                      ? ((void 0 === r ||
                          (void 0 !== e[t].B && void 0 !== e[t].B[r])) &&
                          e0(`Cannot register public name '${t}' twice`),
                        tC(e, t, t),
                        e.hasOwnProperty(r) &&
                          e0(
                            `Cannot register multiple overloads of a function with the same number of arguments (${r})!`
                          ),
                        (e[t].B[r] = n))
                      : ((e[t] = n), void 0 !== r && (e[t].Mc = r));
                  }
                  function tE(e, t, n, r, i, a, o, s) {
                    (this.name = e),
                      (this.constructor = t),
                      (this.N = n),
                      (this.W = r),
                      (this.A = i),
                      (this.Ob = a),
                      (this.pa = o),
                      (this.Jb = s),
                      (this.nb = []);
                  }
                  function tP(e, t, n) {
                    for (; t !== n; )
                      t.pa ||
                        e0(
                          `Expected null or instance of ${n.name}, got an instance of ${t.name}`
                        ),
                        (e = t.pa(e)),
                        (t = t.A);
                    return e;
                  }
                  function tI(e, t) {
                    return null === t
                      ? (this.Pa && e0(`null is not a valid ${this.name}`), 0)
                      : (t.g || e0(`Cannot pass "${tN(t)}" as a ${this.name}`),
                        t.g.o ||
                          e0(
                            `Cannot pass deleted object as a pointer of type ${this.name}`
                          ),
                        tP(t.g.o, t.g.u.i, this.i));
                  }
                  function tL(e, t) {
                    if (null === t) {
                      if (
                        (this.Pa && e0(`null is not a valid ${this.name}`),
                        this.ya)
                      ) {
                        var n = this.Ra();
                        return null !== e && e.push(this.W, n), n;
                      }
                      return 0;
                    }
                    if (
                      (t.g || e0(`Cannot pass "${tN(t)}" as a ${this.name}`),
                      t.g.o ||
                        e0(
                          `Cannot pass deleted object as a pointer of type ${this.name}`
                        ),
                      !this.xa &&
                        t.g.u.xa &&
                        e0(
                          `Cannot convert argument of type ${
                            t.g.L ? t.g.L.name : t.g.u.name
                          } to parameter type ${this.name}`
                        ),
                      (n = tP(t.g.o, t.g.u.i, this.i)),
                      this.ya)
                    )
                      switch (
                        (void 0 === t.g.H &&
                          e0("Passing raw pointer to smart pointer is illegal"),
                        this.jc)
                      ) {
                        case 0:
                          t.g.L === this
                            ? (n = t.g.H)
                            : e0(
                                `Cannot convert argument of type ${
                                  t.g.L ? t.g.L.name : t.g.u.name
                                } to parameter type ${this.name}`
                              );
                          break;
                        case 1:
                          n = t.g.H;
                          break;
                        case 2:
                          if (t.g.L === this) n = t.g.H;
                          else {
                            var r = t.clone();
                            (n = this.dc(
                              n,
                              e2(function () {
                                r.delete();
                              })
                            )),
                              null !== e && e.push(this.W, n);
                          }
                          break;
                        default:
                          e0("Unsupporting sharing policy");
                      }
                    return n;
                  }
                  function tF(e, t) {
                    return null === t
                      ? (this.Pa && e0(`null is not a valid ${this.name}`), 0)
                      : (t.g || e0(`Cannot pass "${tN(t)}" as a ${this.name}`),
                        t.g.o ||
                          e0(
                            `Cannot pass deleted object as a pointer of type ${this.name}`
                          ),
                        t.g.u.xa &&
                          e0(
                            `Cannot convert argument of type ${t.g.u.name} to parameter type ${this.name}`
                          ),
                        tP(t.g.o, t.g.u.i, this.i));
                  }
                  function tx(e, t, n, r) {
                    (this.name = e),
                      (this.i = t),
                      (this.Pa = n),
                      (this.xa = r),
                      (this.ya = !1),
                      (this.W =
                        this.dc =
                        this.Ra =
                        this.pb =
                        this.jc =
                        this.cc =
                          void 0),
                      void 0 !== t.A
                        ? (this.toWireType = tL)
                        : ((this.toWireType = r ? tI : tF), (this.K = null));
                  }
                  function tR(t, n, r) {
                    e.hasOwnProperty(t) ||
                      tc("Replacing nonexistant public symbol"),
                      void 0 !== e[t].B && void 0 !== r
                        ? (e[t].B[r] = n)
                        : ((e[t] = n), (e[t].ha = r));
                  }
                  var tS = [],
                    tk = (e) => {
                      var t = tS[e];
                      return (
                        t ||
                          (e >= tS.length && (tS.length = e + 1),
                          (tS[e] = t = R.get(e))),
                        t
                      );
                    },
                    tT = (t, n) => {
                      var r = [];
                      return function () {
                        if (
                          ((r.length = 0),
                          Object.assign(r, arguments),
                          t.includes("j"))
                        ) {
                          var i = e["dynCall_" + t];
                          i =
                            r && r.length
                              ? i.apply(null, [n].concat(r))
                              : i.call(null, n);
                        } else i = tk(n).apply(null, r);
                        return i;
                      };
                    };
                  function tj(e, t) {
                    var n = (e = e6(e)).includes("j") ? tT(e, t) : tk(t);
                    return (
                      "function" != typeof n &&
                        e0(
                          `unknown function pointer with signature ${e}: ${t}`
                        ),
                      n
                    );
                  }
                  var tO = void 0;
                  function tW(e, t) {
                    var n = [],
                      r = {};
                    throw (
                      (t.forEach(function e(t) {
                        r[t] ||
                          tn[t] ||
                          (tg[t] ? tg[t].forEach(e) : (n.push(t), (r[t] = !0)));
                      }),
                      new tO(`${e}: ` + n.map(tr).join([", "])))
                    );
                  }
                  function tB(e, t, n, r, i) {
                    var a = t.length;
                    2 > a &&
                      e0(
                        "argTypes array size mismatch! Must at least get return value and 'this' types!"
                      );
                    var o = null !== t[1] && null !== n,
                      s = !1;
                    for (n = 1; n < t.length; ++n)
                      if (null !== t[n] && void 0 === t[n].K) {
                        s = !0;
                        break;
                      }
                    var u = "void" !== t[0].name,
                      l = a - 2,
                      c = Array(l),
                      f = [],
                      h = [];
                    return function () {
                      if (
                        (arguments.length !== l &&
                          e0(
                            `function ${e} called with ${arguments.length} arguments, expected ${l} args!`
                          ),
                        (h.length = 0),
                        (f.length = o ? 2 : 1),
                        (f[0] = i),
                        o)
                      ) {
                        var n = t[1].toWireType(h, this);
                        f[1] = n;
                      }
                      for (var a = 0; a < l; ++a)
                        (c[a] = t[a + 2].toWireType(h, arguments[a])),
                          f.push(c[a]);
                      if (((a = r.apply(null, f)), s)) tp(h);
                      else
                        for (var d = o ? 1 : 2; d < t.length; d++) {
                          var p = 1 === d ? n : c[d - 2];
                          null !== t[d].K && t[d].K(p);
                        }
                      return u ? t[0].fromWireType(a) : void 0;
                    };
                  }
                  function tD(e, t) {
                    for (var n = [], r = 0; r < e; r++)
                      n.push(P[(t + 4 * r) >> 2]);
                    return n;
                  }
                  function tV(e, t, n) {
                    return (
                      e instanceof Object ||
                        e0(`${n} with invalid "this": ${e}`),
                      e instanceof t.i.constructor ||
                        e0(
                          `${n} incompatible with "this" of type ${e.constructor.name}`
                        ),
                      e.g.o ||
                        e0(
                          `cannot call emscripten binding method ${n} on deleted object`
                        ),
                      tP(e.g.o, e.g.u.i, t.i)
                    );
                  }
                  function tU(e) {
                    e >= eZ.h && 0 == --eZ.get(e).rb && eZ.Tb(e);
                  }
                  function tN(e) {
                    if (null === e) return "null";
                    var t = typeof e;
                    return "object" === t || "array" === t || "function" === t
                      ? e.toString()
                      : "" + e;
                  }
                  var t$ =
                      "undefined" != typeof TextDecoder
                        ? new TextDecoder("utf-16le")
                        : void 0,
                    tG = (e, t) => {
                      for (var n = e >> 1, r = n + t / 2; !(n >= r) && M[n]; )
                        ++n;
                      if (32 < (n <<= 1) - e && t$)
                        return t$.decode(A.subarray(e, n));
                      for (r = 0, n = ""; !(r >= t / 2); ++r) {
                        var i = C[(e + 2 * r) >> 1];
                        if (0 == i) break;
                        n += String.fromCharCode(i);
                      }
                      return n;
                    },
                    tz = (e, t, n) => {
                      if ((void 0 === n && (n = 0x7fffffff), 2 > n)) return 0;
                      n -= 2;
                      var r = t;
                      n = n < 2 * e.length ? n / 2 : e.length;
                      for (var i = 0; i < n; ++i)
                        (C[t >> 1] = e.charCodeAt(i)), (t += 2);
                      return (C[t >> 1] = 0), t - r;
                    },
                    tH = (e) => 2 * e.length,
                    tY = (e, t) => {
                      for (var n = 0, r = ""; !(n >= t / 4); ) {
                        var i = E[(e + 4 * n) >> 2];
                        if (0 == i) break;
                        ++n,
                          65536 <= i
                            ? ((i -= 65536),
                              (r += String.fromCharCode(
                                55296 | (i >> 10),
                                56320 | (1023 & i)
                              )))
                            : (r += String.fromCharCode(i));
                      }
                      return r;
                    },
                    tX = (e, t, n) => {
                      if ((void 0 === n && (n = 0x7fffffff), 4 > n)) return 0;
                      var r = t;
                      n = r + n - 4;
                      for (var i = 0; i < e.length; ++i) {
                        var a = e.charCodeAt(i);
                        if (
                          (55296 <= a &&
                            57343 >= a &&
                            (a =
                              (65536 + ((1023 & a) << 10)) |
                              (1023 & e.charCodeAt(++i))),
                          (E[t >> 2] = a),
                          (t += 4) + 4 > n)
                        )
                          break;
                      }
                      return (E[t >> 2] = 0), t - r;
                    },
                    tq = (e) => {
                      for (var t = 0, n = 0; n < e.length; ++n) {
                        var r = e.charCodeAt(n);
                        55296 <= r && 57343 >= r && ++n, (t += 4);
                      }
                      return t;
                    },
                    tJ = {};
                  function tK(e) {
                    var t = tJ[e];
                    return void 0 === t ? e6(e) : t;
                  }
                  var tZ = [],
                    tQ = [],
                    t0 = [];
                  function t1(e) {
                    e.Ac = e.getExtension(
                      "WEBGL_draw_instanced_base_vertex_base_instance"
                    );
                  }
                  function t2(e) {
                    e.Ic = e.getExtension(
                      "WEBGL_multi_draw_instanced_base_vertex_base_instance"
                    );
                  }
                  var t3 = 1,
                    t4 = [],
                    t5 = [],
                    t6 = [],
                    t8 = [],
                    t9 = [],
                    t7 = [],
                    ne = [],
                    nt = [],
                    nn = {};
                  function nr(e) {
                    ns || (ns = e);
                  }
                  function ni(e) {
                    for (var t = t3++, n = e.length; n < t; n++) e[n] = null;
                    return t;
                  }
                  function na(t) {
                    return (e.yc = nI = (nu = nt[t]) && nu.C), !(t && !nI);
                  }
                  function no(e) {
                    e.Kc = e.getExtension("WEBGL_multi_draw");
                  }
                  var ns,
                    nu,
                    nl,
                    nc = {},
                    nf = () => {
                      if (!nl) {
                        var e,
                          t = {
                            USER: "web_user",
                            LOGNAME: "web_user",
                            PATH: "/",
                            PWD: "/",
                            HOME: "/home/web_user",
                            LANG:
                              (
                                ("object" == typeof navigator &&
                                  navigator.languages &&
                                  navigator.languages[0]) ||
                                "C"
                              ).replace("-", "_") + ".UTF-8",
                            _: h || "./this.program",
                          };
                        for (e in nc)
                          void 0 === nc[e] ? delete t[e] : (t[e] = nc[e]);
                        var n = [];
                        for (e in t) n.push(`${e}=${t[e]}`);
                        nl = n;
                      }
                      return nl;
                    },
                    nh = [];
                  function nd(e, t, n, r) {
                    for (var i = 0; i < e; i++) {
                      var a = nI[n](),
                        o = a && ni(r);
                      a ? ((a.name = o), (r[o] = a)) : nr(1282),
                        (E[(t + 4 * i) >> 2] = o);
                    }
                  }
                  var np = (e) => {
                    var t = ei(e) + 1,
                      n = nR(t);
                    return n && ea(e, A, n, t), n;
                  };
                  function nm(e) {
                    return "]" == e.slice(-1) && e.lastIndexOf("[");
                  }
                  var nv = (e) => 0 == e % 4 && (0 != e % 100 || 0 == e % 400),
                    ng = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
                    nb = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
                    ny = (e, t, n, r) => {
                      function i(e, t, n) {
                        for (
                          e = "number" == typeof e ? e.toString() : e || "";
                          e.length < t;

                        )
                          e = n[0] + e;
                        return e;
                      }
                      function a(e, t) {
                        return i(e, t, "0");
                      }
                      function o(e, t) {
                        var n;
                        function r(e) {
                          return 0 > e ? -1 : +(0 < e);
                        }
                        return (
                          0 === (n = r(e.getFullYear() - t.getFullYear())) &&
                            0 === (n = r(e.getMonth() - t.getMonth())) &&
                            (n = r(e.getDate() - t.getDate())),
                          n
                        );
                      }
                      function s(e) {
                        switch (e.getDay()) {
                          case 0:
                            return new Date(e.getFullYear() - 1, 11, 29);
                          case 1:
                            return e;
                          case 2:
                            return new Date(e.getFullYear(), 0, 3);
                          case 3:
                            return new Date(e.getFullYear(), 0, 2);
                          case 4:
                            return new Date(e.getFullYear(), 0, 1);
                          case 5:
                            return new Date(e.getFullYear() - 1, 11, 31);
                          case 6:
                            return new Date(e.getFullYear() - 1, 11, 30);
                        }
                      }
                      function u(e) {
                        var t = e.da;
                        for (
                          e = new Date(new Date(e.ea + 1900, 0, 1).getTime());
                          0 < t;

                        ) {
                          var n = e.getMonth(),
                            r = (nv(e.getFullYear()) ? ng : nb)[n];
                          if (t > r - e.getDate())
                            (t -= r - e.getDate() + 1),
                              e.setDate(1),
                              11 > n
                                ? e.setMonth(n + 1)
                                : (e.setMonth(0),
                                  e.setFullYear(e.getFullYear() + 1));
                          else {
                            e.setDate(e.getDate() + t);
                            break;
                          }
                        }
                        return (
                          (n = new Date(e.getFullYear() + 1, 0, 4)),
                          (t = s(new Date(e.getFullYear(), 0, 4))),
                          (n = s(n)),
                          0 >= o(t, e)
                            ? 0 >= o(n, e)
                              ? e.getFullYear() + 1
                              : e.getFullYear()
                            : e.getFullYear() - 1
                        );
                      }
                      var l = E[(r + 40) >> 2];
                      for (var c in ((r = {
                        mc: E[r >> 2],
                        lc: E[(r + 4) >> 2],
                        Ga: E[(r + 8) >> 2],
                        Ta: E[(r + 12) >> 2],
                        Ha: E[(r + 16) >> 2],
                        ea: E[(r + 20) >> 2],
                        R: E[(r + 24) >> 2],
                        da: E[(r + 28) >> 2],
                        Pc: E[(r + 32) >> 2],
                        kc: E[(r + 36) >> 2],
                        nc: l && l ? en(A, l) : "",
                      }),
                      (n = n ? en(A, n) : ""),
                      (l = {
                        "%c": "%a %b %d %H:%M:%S %Y",
                        "%D": "%m/%d/%y",
                        "%F": "%Y-%m-%d",
                        "%h": "%b",
                        "%r": "%I:%M:%S %p",
                        "%R": "%H:%M",
                        "%T": "%H:%M:%S",
                        "%x": "%m/%d/%y",
                        "%X": "%H:%M:%S",
                        "%Ec": "%c",
                        "%EC": "%C",
                        "%Ex": "%m/%d/%y",
                        "%EX": "%H:%M:%S",
                        "%Ey": "%y",
                        "%EY": "%Y",
                        "%Od": "%d",
                        "%Oe": "%e",
                        "%OH": "%H",
                        "%OI": "%I",
                        "%Om": "%m",
                        "%OM": "%M",
                        "%OS": "%S",
                        "%Ou": "%u",
                        "%OU": "%U",
                        "%OV": "%V",
                        "%Ow": "%w",
                        "%OW": "%W",
                        "%Oy": "%y",
                      })))
                        n = n.replace(RegExp(c, "g"), l[c]);
                      var f =
                          "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(
                            " "
                          ),
                        h =
                          "January February March April May June July August September October November December".split(
                            " "
                          );
                      for (c in ((l = {
                        "%a": (e) => f[e.R].substring(0, 3),
                        "%A": (e) => f[e.R],
                        "%b": (e) => h[e.Ha].substring(0, 3),
                        "%B": (e) => h[e.Ha],
                        "%C": (e) => a(((e.ea + 1900) / 100) | 0, 2),
                        "%d": (e) => a(e.Ta, 2),
                        "%e": (e) => i(e.Ta, 2, " "),
                        "%g": (e) => u(e).toString().substring(2),
                        "%G": (e) => u(e),
                        "%H": (e) => a(e.Ga, 2),
                        "%I": (e) => (
                          0 == (e = e.Ga) ? (e = 12) : 12 < e && (e -= 12),
                          a(e, 2)
                        ),
                        "%j": (e) => {
                          for (
                            var t = 0, n = 0;
                            n <= e.Ha - 1;
                            t += (nv(e.ea + 1900) ? ng : nb)[n++]
                          );
                          return a(e.Ta + t, 3);
                        },
                        "%m": (e) => a(e.Ha + 1, 2),
                        "%M": (e) => a(e.lc, 2),
                        "%n": () => "\n",
                        "%p": (e) => (0 <= e.Ga && 12 > e.Ga ? "AM" : "PM"),
                        "%S": (e) => a(e.mc, 2),
                        "%t": () => "	",
                        "%u": (e) => e.R || 7,
                        "%U": (e) => a(Math.floor((e.da + 7 - e.R) / 7), 2),
                        "%V": (e) => {
                          var t = Math.floor((e.da + 7 - ((e.R + 6) % 7)) / 7);
                          if ((2 >= (e.R + 371 - e.da - 2) % 7 && t++, t))
                            53 == t &&
                              (4 == (n = (e.R + 371 - e.da) % 7) ||
                                (3 == n && nv(e.ea)) ||
                                (t = 1));
                          else {
                            t = 52;
                            var n = (e.R + 7 - e.da - 1) % 7;
                            (4 == n || (5 == n && nv((e.ea % 400) - 1))) && t++;
                          }
                          return a(t, 2);
                        },
                        "%w": (e) => e.R,
                        "%W": (e) =>
                          a(Math.floor((e.da + 7 - ((e.R + 6) % 7)) / 7), 2),
                        "%y": (e) => (e.ea + 1900).toString().substring(2),
                        "%Y": (e) => e.ea + 1900,
                        "%z": (e) => {
                          var t = 0 <= (e = e.kc);
                          return (
                            (t ? "+" : "-") +
                            String(
                              "0000" +
                                (((e = Math.abs(e) / 60) / 60) * 100 + (e % 60))
                            ).slice(-4)
                          );
                        },
                        "%Z": (e) => e.nc,
                        "%%": () => "%",
                      }),
                      (n = n.replace(/%%/g, "\0\0")),
                      l))
                        n.includes(c) &&
                          (n = n.replace(RegExp(c, "g"), l[c](r)));
                      return (c = eo((n = n.replace(/\0\0/g, "%")), !1))
                        .length > t
                        ? 0
                        : (_.set(c, e), c.length - 1);
                    };
                  function nw(e, t, n, r) {
                    e || (e = this),
                      (this.parent = e),
                      (this.U = e.U),
                      (this.Aa = null),
                      (this.id = ey++),
                      (this.name = t),
                      (this.mode = n),
                      (this.l = {}),
                      (this.m = {}),
                      (this.Ca = r);
                  }
                  Object.defineProperties(nw.prototype, {
                    read: {
                      get: function () {
                        return 365 == (365 & this.mode);
                      },
                      set: function (e) {
                        e ? (this.mode |= 365) : (this.mode &= -366);
                      },
                    },
                    write: {
                      get: function () {
                        return 146 == (146 & this.mode);
                      },
                      set: function (e) {
                        e ? (this.mode |= 146) : (this.mode &= -147);
                      },
                    },
                  }),
                    eG(),
                    (ew = Array(4096)),
                    eW(em, "/"),
                    eB("/tmp", 16895, 0),
                    eB("/home", 16895, 0),
                    eB("/home/web_user", 16895, 0),
                    eB("/dev", 16895, 0),
                    eO(259, { read: () => 0, write: (e, t, n, r) => r }),
                    eD("/dev/null", 259),
                    eu(1280, {
                      gb: function () {
                        e: {
                          if (!er.length) {
                            var e = null;
                            if (
                              ("undefined" != typeof window &&
                              "function" == typeof window.prompt
                                ? null !== (e = window.prompt("Input: ")) &&
                                  (e += "\n")
                                : "function" == typeof readline &&
                                  null !== (e = readline()) &&
                                  (e += "\n"),
                              !e)
                            ) {
                              e = null;
                              break e;
                            }
                            er = eo(e, !0);
                          }
                          e = er.shift();
                        }
                        return e;
                      },
                      Qa: function (e, t) {
                        null === t || 10 === t
                          ? (v(en(e.G, 0)), (e.G = []))
                          : 0 != t && e.G.push(t);
                      },
                      ua: function (e) {
                        e.G && 0 < e.G.length && (v(en(e.G, 0)), (e.G = []));
                      },
                      Xb: function () {
                        return {
                          uc: 25856,
                          wc: 5,
                          tc: 191,
                          vc: 35387,
                          sc: [
                            3, 28, 127, 21, 4, 0, 1, 0, 17, 19, 26, 0, 18, 15,
                            23, 22, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                            0,
                          ],
                        };
                      },
                      Yb: function () {
                        return 0;
                      },
                      Zb: function () {
                        return [24, 80];
                      },
                    }),
                    eu(1536, {
                      Qa: function (e, t) {
                        null === t || 10 === t
                          ? (g(en(e.G, 0)), (e.G = []))
                          : 0 != t && e.G.push(t);
                      },
                      ua: function (e) {
                        e.G && 0 < e.G.length && (g(en(e.G, 0)), (e.G = []));
                      },
                    }),
                    eD("/dev/tty", 1280),
                    eD("/dev/tty1", 1536),
                    (nC = new Uint8Array(1024)),
                    (nM = 0),
                    ez(
                      "random",
                      (nE = () => (
                        0 === nM && (nM = Q(nC).byteLength), nC[--nM]
                      ))
                    ),
                    ez("urandom", nE),
                    eB("/dev/shm", 16895, 0),
                    eB("/dev/shm/tmp", 16895, 0),
                    eB("/proc", 16895, 0),
                    (nP = eB("/proc/self", 16895, 0)),
                    eB("/proc/self/fd", 16895, 0),
                    eW(
                      {
                        U: () => {
                          var e = eL(nP, "fd", 16895, 73);
                          return (
                            (e.l = {
                              ma: (e, t) => {
                                var n = ek(+t);
                                return ((e = {
                                  parent: null,
                                  U: { jb: "fake" },
                                  l: { na: () => n.path },
                                }).parent = e);
                              },
                            }),
                            e
                          );
                        },
                      },
                      "/proc/self/fd"
                    ),
                    Object.assign(eK.prototype, {
                      get(e) {
                        return this.M[e];
                      },
                      has(e) {
                        return void 0 !== this.M[e];
                      },
                      ta(e) {
                        var t = this.fb.pop() || this.M.length;
                        return (this.M[t] = e), t;
                      },
                      Tb(e) {
                        (this.M[e] = void 0), this.fb.push(e);
                      },
                    }),
                    (eQ = e.BindingError =
                      class extends Error {
                        constructor(e) {
                          super(e), (this.name = "BindingError");
                        }
                      }),
                    eZ.M.push(
                      { value: void 0 },
                      { value: null },
                      { value: !0 },
                      { value: !1 }
                    ),
                    (eZ.h = eZ.M.length),
                    (e.count_emval_handles = function () {
                      for (var e = 0, t = eZ.h; t < eZ.M.length; ++t)
                        void 0 !== eZ.M[t] && ++e;
                      return e;
                    }),
                    (e4 = e.PureVirtualError = e3("PureVirtualError"));
                  for (var n_ = Array(256), nA = 0; 256 > nA; ++nA)
                    n_[nA] = String.fromCharCode(nA);
                  (e5 = n_),
                    (e.getInheritedInstanceCount = function () {
                      return Object.keys(te).length;
                    }),
                    (e.getLiveInheritedInstances = function () {
                      var e,
                        t = [];
                      for (e in te) te.hasOwnProperty(e) && t.push(te[e]);
                      return t;
                    }),
                    (e.flushPendingDeletes = e9),
                    (e.setDelayFunction = function (e) {
                      (e7 = e), e8.length && e7 && e7(e9);
                    }),
                    (tl = e.InternalError =
                      class extends Error {
                        constructor(e) {
                          super(e), (this.name = "InternalError");
                        }
                      }),
                    (tA.prototype.isAliasOf = function (e) {
                      if (!(this instanceof tA && e instanceof tA)) return !1;
                      var t = this.g.u.i,
                        n = this.g.o,
                        r = e.g.u.i;
                      for (e = e.g.o; t.A; ) (n = t.pa(n)), (t = t.A);
                      for (; r.A; ) (e = r.pa(e)), (r = r.A);
                      return t === r && n === e;
                    }),
                    (tA.prototype.clone = function () {
                      if ((this.g.o || t_(this), this.g.ka))
                        return (this.g.count.value += 1), this;
                      var e = th,
                        t = Object,
                        n = t.create,
                        r = Object.getPrototypeOf(this),
                        i = this.g;
                      return (
                        (e = e(
                          n.call(t, r, {
                            g: {
                              value: {
                                count: i.count,
                                ia: i.ia,
                                ka: i.ka,
                                o: i.o,
                                u: i.u,
                                H: i.H,
                                L: i.L,
                              },
                            },
                          })
                        )),
                        (e.g.count.value += 1),
                        (e.g.ia = !1),
                        e
                      );
                    }),
                    (tA.prototype.delete = function () {
                      this.g.o || t_(this),
                        this.g.ia &&
                          !this.g.ka &&
                          e0("Object already scheduled for deletion"),
                        ta(this),
                        ts(this.g),
                        this.g.ka || ((this.g.H = void 0), (this.g.o = void 0));
                    }),
                    (tA.prototype.isDeleted = function () {
                      return !this.g.o;
                    }),
                    (tA.prototype.deleteLater = function () {
                      return (
                        this.g.o || t_(this),
                        this.g.ia &&
                          !this.g.ka &&
                          e0("Object already scheduled for deletion"),
                        e8.push(this),
                        1 === e8.length && e7 && e7(e9),
                        (this.g.ia = !0),
                        this
                      );
                    }),
                    (tx.prototype.Pb = function (e) {
                      return this.pb && (e = this.pb(e)), e;
                    }),
                    (tx.prototype.$a = function (e) {
                      this.W && this.W(e);
                    }),
                    (tx.prototype.argPackAdvance = 8),
                    (tx.prototype.readValueFromPointer = tm),
                    (tx.prototype.deleteObject = function (e) {
                      null !== e && e.delete();
                    }),
                    (tx.prototype.fromWireType = function (e) {
                      function t() {
                        return this.ya
                          ? tf(this.i.N, { u: this.cc, o: r, L: this, H: e })
                          : tf(this.i.N, { u: this, o: e });
                      }
                      var n,
                        r = this.Pb(e);
                      if (!r) return this.$a(e), null;
                      var i = te[tt(this.i, r)];
                      if (void 0 !== i)
                        return 0 === i.g.count.value
                          ? ((i.g.o = r), (i.g.H = e), i.clone())
                          : ((i = i.clone()), this.$a(e), i);
                      if (!(i = tu[(i = this.i.Ob(r))])) return t.call(this);
                      i = this.xa ? i.Gb : i.pointerType;
                      var a = (function e(t, n, r) {
                        return n === r
                          ? t
                          : void 0 === r.A || null === (t = e(t, n, r.A))
                          ? null
                          : r.Jb(t);
                      })(r, this.i, i.i);
                      return null === a
                        ? t.call(this)
                        : this.ya
                        ? tf(i.i.N, { u: i, o: a, L: this, H: e })
                        : tf(i.i.N, { u: i, o: a });
                    }),
                    (tO = e.UnboundTypeError = e3("UnboundTypeError"));
                  for (var nC, nM, nE, nP, nI, nL = 0; 32 > nL; ++nL)
                    nh.push(Array(nL));
                  var nF = {
                    __syscall_fcntl64: function (e, t, n) {
                      eY = n;
                      try {
                        var r = ek(e);
                        switch (t) {
                          case 0:
                            var i = eX();
                            return 0 > i ? -28 : eT(r, i).X;
                          case 1:
                          case 2:
                          case 6:
                          case 7:
                            return 0;
                          case 3:
                            return r.flags;
                          case 4:
                            return (i = eX()), (r.flags |= i), 0;
                          case 5:
                            return (C[((i = eX()) + 0) >> 1] = 2), 0;
                          case 16:
                          case 8:
                          default:
                            return -28;
                          case 9:
                            return (E[nS() >> 2] = 28), -1;
                        }
                      } catch (e) {
                        if (void 0 === eH || "ErrnoError" !== e.name) throw e;
                        return -e.aa;
                      }
                    },
                    __syscall_ioctl: function (e, t, n) {
                      eY = n;
                      try {
                        var r = ek(e);
                        switch (t) {
                          case 21509:
                          case 21510:
                          case 21511:
                          case 21512:
                          case 21524:
                          case 21515:
                            return r.s ? 0 : -59;
                          case 21505:
                            if (!r.s) return -59;
                            if (r.s.V.Xb) {
                              t = [
                                3, 28, 127, 21, 4, 0, 1, 0, 17, 19, 26, 0, 18,
                                15, 23, 22, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                                0, 0, 0, 0,
                              ];
                              var i = eX();
                              (E[i >> 2] = 25856),
                                (E[(i + 4) >> 2] = 5),
                                (E[(i + 8) >> 2] = 191),
                                (E[(i + 12) >> 2] = 35387);
                              for (var a = 0; 32 > a; a++)
                                _[(i + a + 17) | 0] = t[a] || 0;
                            }
                            return 0;
                          case 21506:
                          case 21507:
                          case 21508:
                            if (!r.s) return -59;
                            if (r.s.V.Yb)
                              for (i = eX(), t = [], a = 0; 32 > a; a++)
                                t.push(_[(i + a + 17) | 0]);
                            return 0;
                          case 21519:
                            if (!r.s) return -59;
                            return (E[(i = eX()) >> 2] = 0);
                          case 21520:
                            return r.s ? -28 : -59;
                          case 21531:
                            if (((i = eX()), !r.m.Wb)) throw new eA(59);
                            return r.m.Wb(r, t, i);
                          case 21523:
                            if (!r.s) return -59;
                            return (
                              r.s.V.Zb &&
                                ((a = [24, 80]),
                                (C[(i = eX()) >> 1] = a[0]),
                                (C[(i + 2) >> 1] = a[1])),
                              0
                            );
                          default:
                            return -28;
                        }
                      } catch (e) {
                        if (void 0 === eH || "ErrnoError" !== e.name) throw e;
                        return -e.aa;
                      }
                    },
                    __syscall_openat: function (e, t, n, r) {
                      eY = r;
                      try {
                        var i = (t = t ? en(A, t) : "");
                        if ("/" === i.charAt(0)) t = i;
                        else {
                          var a = -100 === e ? "/" : ek(e).path;
                          if (0 == i.length) throw new eA(44);
                          t = q(a + "/" + i);
                        }
                        var o = r ? eX() : 0;
                        return eN(t, n, o).X;
                      } catch (e) {
                        if (void 0 === eH || "ErrnoError" !== e.name) throw e;
                        return -e.aa;
                      }
                    },
                    _embind_create_inheriting_constructor: function (e, t, n) {
                      (e = e6(e)), (t = ti(t, "wrapper")), (n = e1(n));
                      var r = [].slice,
                        i = t.i,
                        a = i.N,
                        o = i.A.N,
                        s = i.A.constructor;
                      for (var u in ((e = eJ(e, function () {
                        i.A.nb.forEach(
                          function (e) {
                            if (this[e] === o[e])
                              throw new e4(
                                `Pure virtual function ${e} must be implemented in JavaScript`
                              );
                          }.bind(this)
                        ),
                          Object.defineProperty(this, "__parent", { value: a }),
                          this.__construct.apply(this, r.call(arguments));
                      })),
                      (a.__construct = function () {
                        this === a && e0("Pass correct 'this' to __construct");
                        var e = s.implement.apply(
                          void 0,
                          [this].concat(r.call(arguments))
                        );
                        ta(e);
                        var t = e.g;
                        e.notifyOnDestruction(),
                          (t.ka = !0),
                          Object.defineProperties(this, { g: { value: t } }),
                          th(this),
                          (e = tt(i, (e = t.o))),
                          te.hasOwnProperty(e)
                            ? e0(`Tried to register registered instance: ${e}`)
                            : (te[e] = this);
                      }),
                      (a.__destruct = function () {
                        this === a && e0("Pass correct 'this' to __destruct"),
                          ta(this);
                        var e = this.g.o;
                        (e = tt(i, e)),
                          te.hasOwnProperty(e)
                            ? delete te[e]
                            : e0(
                                `Tried to unregister unregistered instance: ${e}`
                              );
                      }),
                      (e.prototype = Object.create(a)),
                      n))
                        e.prototype[u] = n[u];
                      return e2(e);
                    },
                    _embind_finalize_value_object: function (e) {
                      var t = td[e];
                      delete td[e];
                      var n = t.Ra,
                        r = t.W,
                        i = t.bb;
                      tb(
                        [e],
                        i.map((e) => e.Sb).concat(i.map((e) => e.hc)),
                        (e) => {
                          var a = {};
                          return (
                            i.forEach((t, n) => {
                              var r = e[n],
                                o = t.Qb,
                                s = t.Rb,
                                u = e[n + i.length],
                                l = t.fc,
                                c = t.ic;
                              a[t.Mb] = {
                                read: (e) => r.fromWireType(o(s, e)),
                                write: (e, t) => {
                                  var n = [];
                                  l(c, e, u.toWireType(n, t)), tp(n);
                                },
                              };
                            }),
                            [
                              {
                                name: t.name,
                                fromWireType: function (e) {
                                  var t,
                                    n = {};
                                  for (t in a) n[t] = a[t].read(e);
                                  return r(e), n;
                                },
                                toWireType: function (e, t) {
                                  for (var i in a)
                                    if (!(i in t))
                                      throw TypeError(`Missing field: "${i}"`);
                                  var o = n();
                                  for (i in a) a[i].write(o, t[i]);
                                  return null !== e && e.push(r, o), o;
                                },
                                argPackAdvance: 8,
                                readValueFromPointer: tm,
                                K: r,
                              },
                            ]
                          );
                        }
                      );
                    },
                    _embind_register_bigint: function () {},
                    _embind_register_bool: function (e, t, n, r, i) {
                      var a = ty(n);
                      tw(e, {
                        name: (t = e6(t)),
                        fromWireType: function (e) {
                          return !!e;
                        },
                        toWireType: function (e, t) {
                          return t ? r : i;
                        },
                        argPackAdvance: 8,
                        readValueFromPointer: function (e) {
                          if (1 === n) var r = _;
                          else if (2 === n) r = C;
                          else if (4 === n) r = E;
                          else
                            throw TypeError("Unknown boolean type size: " + t);
                          return this.fromWireType(r[e >> a]);
                        },
                        K: null,
                      });
                    },
                    _embind_register_class: function (
                      e,
                      t,
                      n,
                      r,
                      i,
                      a,
                      o,
                      s,
                      u,
                      l,
                      c,
                      f,
                      h
                    ) {
                      (c = e6(c)),
                        (a = tj(i, a)),
                        s && (s = tj(o, s)),
                        l && (l = tj(u, l)),
                        (h = tj(f, h));
                      var d = eq(c);
                      tM(d, function () {
                        tW(`Cannot construct ${c} due to unbound types`, [r]);
                      }),
                        tb([e, t, n], r ? [r] : [], function (t) {
                          if (((t = t[0]), r))
                            var n = t.i,
                              i = n.N;
                          else i = tA.prototype;
                          var o = Object.create(i, {
                            constructor: {
                              value: (t = eJ(d, function () {
                                if (Object.getPrototypeOf(this) !== o)
                                  throw new eQ("Use 'new' to construct " + c);
                                if (void 0 === u.$)
                                  throw new eQ(
                                    c + " has no accessible constructor"
                                  );
                                var e = u.$[arguments.length];
                                if (void 0 === e)
                                  throw new eQ(
                                    `Tried to invoke ctor of ${c} with invalid number of parameters (${
                                      arguments.length
                                    }) - expected (${Object.keys(
                                      u.$
                                    ).toString()}) parameters instead!`
                                  );
                                return e.apply(this, arguments);
                              })),
                            },
                          });
                          t.prototype = o;
                          var u = new tE(c, t, o, h, n, a, s, l);
                          u.A &&
                            (void 0 === u.A.qa && (u.A.qa = []),
                            u.A.qa.push(u)),
                            (n = new tx(c, u, !0, !1)),
                            (i = new tx(c + "*", u, !1, !1));
                          var f = new tx(c + " const*", u, !1, !0);
                          return (
                            (tu[e] = { pointerType: i, Gb: f }),
                            tR(d, t),
                            [n, i, f]
                          );
                        });
                    },
                    _embind_register_class_class_function: function (
                      e,
                      t,
                      n,
                      r,
                      i,
                      a,
                      o
                    ) {
                      var s = tD(n, r);
                      (t = e6(t)),
                        (a = tj(i, a)),
                        tb([], [e], function (e) {
                          function r() {
                            tW(`Cannot call ${i} due to unbound types`, s);
                          }
                          e = e[0];
                          var i = `${e.name}.${t}`;
                          t.startsWith("@@") && (t = Symbol[t.substring(2)]);
                          var u = e.i.constructor;
                          return (
                            void 0 === u[t]
                              ? ((r.ha = n - 1), (u[t] = r))
                              : (tC(u, t, i), (u[t].B[n - 1] = r)),
                            tb([], s, function (r) {
                              if (
                                ((r = tB(
                                  i,
                                  [r[0], null].concat(r.slice(1)),
                                  null,
                                  a,
                                  o
                                )),
                                void 0 === u[t].B
                                  ? ((r.ha = n - 1), (u[t] = r))
                                  : (u[t].B[n - 1] = r),
                                e.i.qa)
                              )
                                for (let n of e.i.qa)
                                  n.constructor.hasOwnProperty(t) ||
                                    (n.constructor[t] = r);
                              return [];
                            }),
                            []
                          );
                        });
                    },
                    _embind_register_class_class_property: function (
                      e,
                      t,
                      n,
                      r,
                      i,
                      a,
                      o,
                      s
                    ) {
                      (t = e6(t)),
                        (a = tj(i, a)),
                        tb([], [e], function (e) {
                          e = e[0];
                          var i = `${e.name}.${t}`,
                            u = {
                              get() {
                                tW(`Cannot access ${i} due to unbound types`, [
                                  n,
                                ]);
                              },
                              enumerable: !0,
                              configurable: !0,
                            };
                          return (
                            (u.set = s
                              ? () => {
                                  tW(
                                    `Cannot access ${i} due to unbound types`,
                                    [n]
                                  );
                                }
                              : () => {
                                  e0(`${i} is a read-only property`);
                                }),
                            Object.defineProperty(e.i.constructor, t, u),
                            tb([], [n], function (n) {
                              n = n[0];
                              var i = {
                                get: () => n.fromWireType(a(r)),
                                enumerable: !0,
                              };
                              return (
                                s &&
                                  ((s = tj(o, s)),
                                  (i.set = (e) => {
                                    var t = [];
                                    s(r, n.toWireType(t, e)), tp(t);
                                  })),
                                Object.defineProperty(e.i.constructor, t, i),
                                []
                              );
                            }),
                            []
                          );
                        });
                    },
                    _embind_register_class_constructor: function (
                      e,
                      t,
                      n,
                      r,
                      i,
                      a
                    ) {
                      var o = tD(t, n);
                      (i = tj(r, i)),
                        tb([], [e], function (e) {
                          e = e[0];
                          var n = `constructor ${e.name}`;
                          if (
                            (void 0 === e.i.$ && (e.i.$ = []),
                            void 0 !== e.i.$[t - 1])
                          )
                            throw new eQ(
                              `Cannot register multiple constructors with identical number of parameters (${
                                t - 1
                              }) for class '${
                                e.name
                              }'! Overload resolution is currently only performed using the parameter count, not actual type info!`
                            );
                          return (
                            (e.i.$[t - 1] = () => {
                              tW(
                                `Cannot construct ${e.name} due to unbound types`,
                                o
                              );
                            }),
                            tb([], o, function (r) {
                              return (
                                r.splice(1, 0, null),
                                (e.i.$[t - 1] = tB(n, r, null, i, a)),
                                []
                              );
                            }),
                            []
                          );
                        });
                    },
                    _embind_register_class_function: function (
                      e,
                      t,
                      n,
                      r,
                      i,
                      a,
                      o,
                      s
                    ) {
                      var u = tD(n, r);
                      (t = e6(t)),
                        (a = tj(i, a)),
                        tb([], [e], function (e) {
                          function r() {
                            tW(`Cannot call ${i} due to unbound types`, u);
                          }
                          e = e[0];
                          var i = `${e.name}.${t}`;
                          t.startsWith("@@") && (t = Symbol[t.substring(2)]),
                            s && e.i.nb.push(t);
                          var l = e.i.N,
                            c = l[t];
                          return (
                            void 0 === c ||
                            (void 0 === c.B &&
                              c.className !== e.name &&
                              c.ha === n - 2)
                              ? ((r.ha = n - 2),
                                (r.className = e.name),
                                (l[t] = r))
                              : (tC(l, t, i), (l[t].B[n - 2] = r)),
                            tb([], u, function (r) {
                              return (
                                (r = tB(i, r, e, a, o)),
                                void 0 === l[t].B
                                  ? ((r.ha = n - 2), (l[t] = r))
                                  : (l[t].B[n - 2] = r),
                                []
                              );
                            }),
                            []
                          );
                        });
                    },
                    _embind_register_class_property: function (
                      e,
                      t,
                      n,
                      r,
                      i,
                      a,
                      o,
                      s,
                      u,
                      l
                    ) {
                      (t = e6(t)),
                        (i = tj(r, i)),
                        tb([], [e], function (e) {
                          e = e[0];
                          var r = `${e.name}.${t}`,
                            c = {
                              get() {
                                tW(`Cannot access ${r} due to unbound types`, [
                                  n,
                                  o,
                                ]);
                              },
                              enumerable: !0,
                              configurable: !0,
                            };
                          return (
                            (c.set = u
                              ? () => {
                                  tW(
                                    `Cannot access ${r} due to unbound types`,
                                    [n, o]
                                  );
                                }
                              : () => {
                                  e0(r + " is a read-only property");
                                }),
                            Object.defineProperty(e.i.N, t, c),
                            tb([], u ? [n, o] : [n], function (n) {
                              var o = n[0],
                                c = {
                                  get() {
                                    var t = tV(this, e, r + " getter");
                                    return o.fromWireType(i(a, t));
                                  },
                                  enumerable: !0,
                                };
                              if (u) {
                                u = tj(s, u);
                                var f = n[1];
                                c.set = function (t) {
                                  var n = tV(this, e, r + " setter"),
                                    i = [];
                                  u(l, n, f.toWireType(i, t)), tp(i);
                                };
                              }
                              return Object.defineProperty(e.i.N, t, c), [];
                            }),
                            []
                          );
                        });
                    },
                    _embind_register_emval: function (e, t) {
                      tw(e, {
                        name: (t = e6(t)),
                        fromWireType: function (e) {
                          var t = e1(e);
                          return tU(e), t;
                        },
                        toWireType: function (e, t) {
                          return e2(t);
                        },
                        argPackAdvance: 8,
                        readValueFromPointer: tm,
                        K: null,
                      });
                    },
                    _embind_register_enum: function (e, t, n, r) {
                      function i() {}
                      (n = ty(n)),
                        (t = e6(t)),
                        (i.values = {}),
                        tw(e, {
                          name: t,
                          constructor: i,
                          fromWireType: function (e) {
                            return this.constructor.values[e];
                          },
                          toWireType: function (e, t) {
                            return t.value;
                          },
                          argPackAdvance: 8,
                          readValueFromPointer: (function (e, t, n) {
                            switch (t) {
                              case 0:
                                return function (e) {
                                  return this.fromWireType((n ? _ : A)[e]);
                                };
                              case 1:
                                return function (e) {
                                  return this.fromWireType((n ? C : M)[e >> 1]);
                                };
                              case 2:
                                return function (e) {
                                  return this.fromWireType((n ? E : P)[e >> 2]);
                                };
                              default:
                                throw TypeError("Unknown integer type: " + e);
                            }
                          })(t, n, r),
                          K: null,
                        }),
                        tM(t, i);
                    },
                    _embind_register_enum_value: function (e, t, n) {
                      var r = ti(e, "enum");
                      (t = e6(t)),
                        (e = r.constructor),
                        (r = Object.create(r.constructor.prototype, {
                          value: { value: n },
                          constructor: {
                            value: eJ(`${r.name}_${t}`, function () {}),
                          },
                        })),
                        (e.values[n] = r),
                        (e[t] = r);
                    },
                    _embind_register_float: function (e, t, n) {
                      (n = ty(n)),
                        tw(e, {
                          name: (t = e6(t)),
                          fromWireType: function (e) {
                            return e;
                          },
                          toWireType: function (e, t) {
                            return t;
                          },
                          argPackAdvance: 8,
                          readValueFromPointer: (function (e, t) {
                            switch (t) {
                              case 2:
                                return function (e) {
                                  return this.fromWireType(I[e >> 2]);
                                };
                              case 3:
                                return function (e) {
                                  return this.fromWireType(L[e >> 3]);
                                };
                              default:
                                throw TypeError("Unknown float type: " + e);
                            }
                          })(t, n),
                          K: null,
                        });
                    },
                    _embind_register_function: function (e, t, n, r, i, a) {
                      var o = tD(t, n);
                      (e = e6(e)),
                        (i = tj(r, i)),
                        tM(
                          e,
                          function () {
                            tW(`Cannot call ${e} due to unbound types`, o);
                          },
                          t - 1
                        ),
                        tb([], o, function (n) {
                          return (
                            tR(
                              e,
                              tB(
                                e,
                                [n[0], null].concat(n.slice(1)),
                                null,
                                i,
                                a
                              ),
                              t - 1
                            ),
                            []
                          );
                        });
                    },
                    _embind_register_integer: function (e, t, n, r, i) {
                      (t = e6(t)), -1 === i && (i = 0xffffffff), (i = ty(n));
                      var a = (e) => e;
                      if (0 === r) {
                        var o = 32 - 8 * n;
                        a = (e) => (e << o) >>> o;
                      }
                      (n = t.includes("unsigned")
                        ? function (e, t) {
                            return t >>> 0;
                          }
                        : function (e, t) {
                            return t;
                          }),
                        tw(e, {
                          name: t,
                          fromWireType: a,
                          toWireType: n,
                          argPackAdvance: 8,
                          readValueFromPointer: (function (e, t, n) {
                            switch (t) {
                              case 0:
                                return n
                                  ? function (e) {
                                      return _[e];
                                    }
                                  : function (e) {
                                      return A[e];
                                    };
                              case 1:
                                return n
                                  ? function (e) {
                                      return C[e >> 1];
                                    }
                                  : function (e) {
                                      return M[e >> 1];
                                    };
                              case 2:
                                return n
                                  ? function (e) {
                                      return E[e >> 2];
                                    }
                                  : function (e) {
                                      return P[e >> 2];
                                    };
                              default:
                                throw TypeError("Unknown integer type: " + e);
                            }
                          })(t, i, 0 !== r),
                          K: null,
                        });
                    },
                    _embind_register_memory_view: function (e, t, n) {
                      function r(e) {
                        e >>= 2;
                        var t = P;
                        return new i(t.buffer, t[e + 1], t[e]);
                      }
                      var i = [
                        Int8Array,
                        Uint8Array,
                        Int16Array,
                        Uint16Array,
                        Int32Array,
                        Uint32Array,
                        Float32Array,
                        Float64Array,
                      ][t];
                      tw(
                        e,
                        {
                          name: (n = e6(n)),
                          fromWireType: r,
                          argPackAdvance: 8,
                          readValueFromPointer: r,
                        },
                        { Ub: !0 }
                      );
                    },
                    _embind_register_std_string: function (e, t) {
                      var n = "std::string" === (t = e6(t));
                      tw(e, {
                        name: t,
                        fromWireType: function (e) {
                          var t = P[e >> 2],
                            r = e + 4;
                          if (n)
                            for (var i = r, a = 0; a <= t; ++a) {
                              var o = r + a;
                              if (a == t || 0 == A[o]) {
                                if (
                                  ((i = i ? en(A, i, o - i) : ""), void 0 === s)
                                )
                                  var s = i;
                                else (s += "\0"), (s += i);
                                i = o + 1;
                              }
                            }
                          else {
                            for (a = 0, s = Array(t); a < t; ++a)
                              s[a] = String.fromCharCode(A[r + a]);
                            s = s.join("");
                          }
                          return nx(e), s;
                        },
                        toWireType: function (e, t) {
                          t instanceof ArrayBuffer && (t = new Uint8Array(t));
                          var r = "string" == typeof t;
                          r ||
                            t instanceof Uint8Array ||
                            t instanceof Uint8ClampedArray ||
                            t instanceof Int8Array ||
                            e0("Cannot pass non-string to std::string");
                          var i = n && r ? ei(t) : t.length,
                            a = nR(4 + i + 1),
                            o = a + 4;
                          if (((P[a >> 2] = i), n && r)) ea(t, A, o, i + 1);
                          else if (r)
                            for (r = 0; r < i; ++r) {
                              var s = t.charCodeAt(r);
                              255 < s &&
                                (nx(o),
                                e0(
                                  "String has UTF-16 code units that do not fit in 8 bits"
                                )),
                                (A[o + r] = s);
                            }
                          else for (r = 0; r < i; ++r) A[o + r] = t[r];
                          return null !== e && e.push(nx, a), a;
                        },
                        argPackAdvance: 8,
                        readValueFromPointer: tm,
                        K: function (e) {
                          nx(e);
                        },
                      });
                    },
                    _embind_register_std_wstring: function (e, t, n) {
                      if (((n = e6(n)), 2 === t))
                        var r = tG,
                          i = tz,
                          a = tH,
                          o = () => M,
                          s = 1;
                      else
                        4 === t &&
                          ((r = tY),
                          (i = tX),
                          (a = tq),
                          (o = () => P),
                          (s = 2));
                      tw(e, {
                        name: n,
                        fromWireType: function (e) {
                          for (
                            var n, i = P[e >> 2], a = o(), u = e + 4, l = 0;
                            l <= i;
                            ++l
                          ) {
                            var c = e + 4 + l * t;
                            (l == i || 0 == a[c >> s]) &&
                              ((u = r(u, c - u)),
                              void 0 === n ? (n = u) : ((n += "\0"), (n += u)),
                              (u = c + t));
                          }
                          return nx(e), n;
                        },
                        toWireType: function (e, r) {
                          "string" != typeof r &&
                            e0(
                              `Cannot pass non-string to C++ string type ${n}`
                            );
                          var o = a(r),
                            u = nR(4 + o + t);
                          return (
                            (P[u >> 2] = o >> s),
                            i(r, u + 4, o + t),
                            null !== e && e.push(nx, u),
                            u
                          );
                        },
                        argPackAdvance: 8,
                        readValueFromPointer: tm,
                        K: function (e) {
                          nx(e);
                        },
                      });
                    },
                    _embind_register_value_object: function (e, t, n, r, i, a) {
                      td[e] = {
                        name: e6(t),
                        Ra: tj(n, r),
                        W: tj(i, a),
                        bb: [],
                      };
                    },
                    _embind_register_value_object_field: function (
                      e,
                      t,
                      n,
                      r,
                      i,
                      a,
                      o,
                      s,
                      u,
                      l
                    ) {
                      td[e].bb.push({
                        Mb: e6(t),
                        Sb: n,
                        Qb: tj(r, i),
                        Rb: a,
                        hc: o,
                        fc: tj(s, u),
                        ic: l,
                      });
                    },
                    _embind_register_void: function (e, t) {
                      tw(e, {
                        $b: !0,
                        name: (t = e6(t)),
                        argPackAdvance: 0,
                        fromWireType: function () {},
                        toWireType: function () {},
                      });
                    },
                    _emscripten_get_now_is_monotonic: () => !0,
                    _emval_as: function (e, t, n) {
                      (e = e1(e)), (t = ti(t, "emval::as"));
                      var r = [],
                        i = e2(r);
                      return (P[n >> 2] = i), t.toWireType(r, e);
                    },
                    _emval_call_method: function (e, t, n, r, i) {
                      (e = tZ[e]), (t = e1(t)), (n = tK(n));
                      var a = [];
                      return (P[r >> 2] = e2(a)), e(t, n, a, i);
                    },
                    _emval_call_void_method: function (e, t, n, r) {
                      (e = tZ[e])((t = e1(t)), (n = tK(n)), null, r);
                    },
                    _emval_decref: tU,
                    _emval_get_method_caller: function (e, t) {
                      var n,
                        r,
                        i = (function (e, t) {
                          for (var n = Array(e), r = 0; r < e; ++r)
                            n[r] = ti(P[(t + 4 * r) >> 2], "parameter " + r);
                          return n;
                        })(e, t),
                        a = i[0],
                        o =
                          tQ[
                            (t =
                              a.name +
                              "_$" +
                              i
                                .slice(1)
                                .map(function (e) {
                                  return e.name;
                                })
                                .join("_") +
                              "$")
                          ];
                      if (void 0 !== o) return o;
                      var s = Array(e - 1);
                      return (
                        (n = (t, n, r, o) => {
                          for (var u = 0, l = 0; l < e - 1; ++l)
                            (s[l] = i[l + 1].readValueFromPointer(o + u)),
                              (u += i[l + 1].argPackAdvance);
                          for (l = 0, t = t[n].apply(t, s); l < e - 1; ++l)
                            i[l + 1].Ib && i[l + 1].Ib(s[l]);
                          if (!a.$b) return a.toWireType(r, t);
                        }),
                        (r = tZ.length),
                        tZ.push(n),
                        (o = r),
                        (tQ[t] = o)
                      );
                    },
                    _emval_get_property: function (e, t) {
                      return e2((e = e1(e))[(t = e1(t))]);
                    },
                    _emval_incref: function (e) {
                      4 < e && (eZ.get(e).rb += 1);
                    },
                    _emval_new_array: function () {
                      return e2([]);
                    },
                    _emval_new_cstring: function (e) {
                      return e2(tK(e));
                    },
                    _emval_new_object: function () {
                      return e2({});
                    },
                    _emval_run_destructors: function (e) {
                      tp(e1(e)), tU(e);
                    },
                    _emval_set_property: function (e, t, n) {
                      (e = e1(e)), (t = e1(t)), (n = e1(n)), (e[t] = n);
                    },
                    _emval_take_value: function (e, t) {
                      return e2(
                        (e = (e = ti(
                          e,
                          "_emval_take_value"
                        )).readValueFromPointer(t))
                      );
                    },
                    abort: () => {
                      B("");
                    },
                    beginPixelLocalStorageWEBGL: function (t, n, r) {
                      (t = nt[t].C.ca) &&
                        t.beginPixelLocalStorageWEBGL(
                          e.HEAPU32.subarray(r, r + n)
                        );
                    },
                    decode_image: function (t, n, r) {
                      var i = e.images;
                      i || (e.images = i = new Map());
                      var a = new Image();
                      i.set(t, a),
                        (n = e.HEAP8.subarray(n, n + r)),
                        (r = new Uint8Array(r)).set(n),
                        (a.src = URL.createObjectURL(
                          new Blob([r], { type: "image/png" })
                        )),
                        (a.onload = function () {
                          e._setWebImage(t, a.width, a.height);
                        });
                    },
                    delete_image: function (t) {
                      var n = e.images;
                      n && n.get(t) && n.delete(t);
                    },
                    emscripten_asm_const_int: (e, t, n) => {
                      var r;
                      for (t0.length = 0, n >>= 2; (r = A[t++]); )
                        (n += (105 != r) & n),
                          t0.push(105 == r ? E[n] : L[n++ >> 1]),
                          ++n;
                      return H[e].apply(null, t0);
                    },
                    emscripten_date_now: function () {
                      return Date.now();
                    },
                    emscripten_get_now: () => performance.now(),
                    emscripten_memcpy_big: (e, t, n) =>
                      A.copyWithin(e, t, t + n),
                    emscripten_resize_heap: (e) => {
                      var t = A.length;
                      if (0x80000000 < (e >>>= 0)) return !1;
                      for (var n = 1; 4 >= n; n *= 2) {
                        var r = t * (1 + 0.2 / n);
                        r = Math.min(r, e + 0x6000000);
                        var i = Math;
                        r = Math.max(e, r);
                        e: {
                          i =
                            (i.min.call(
                              i,
                              0x80000000,
                              r + ((65536 - (r % 65536)) % 65536)
                            ) -
                              y.buffer.byteLength +
                              65535) >>>
                            16;
                          try {
                            y.grow(i), x();
                            var a = 1;
                            break e;
                          } catch (e) {}
                          a = void 0;
                        }
                        if (a) return !0;
                      }
                      return !1;
                    },
                    emscripten_webgl_enable_extension: function (e, t) {
                      return (
                        (e = nt[e]),
                        (t = t ? en(A, t) : "").startsWith("GL_") &&
                          (t = t.substr(3)),
                        "WEBGL_draw_instanced_base_vertex_base_instance" == t &&
                          t1(nI),
                        "WEBGL_multi_draw_instanced_base_vertex_base_instance" ==
                          t && t2(nI),
                        "WEBGL_multi_draw" == t && no(nI),
                        !!e.C.getExtension(t)
                      );
                    },
                    emscripten_webgl_get_current_context: function () {
                      return nu ? nu.handle : 0;
                    },
                    emscripten_webgl_make_context_current: function (e) {
                      return na(e) ? 0 : -5;
                    },
                    enable_WEBGL_provoking_vertex: function (e) {
                      return (
                        ((e = nt[e].C).ob = e.getExtension(
                          "WEBGL_provoking_vertex"
                        )),
                        !!e.ob
                      );
                    },
                    enable_WEBGL_shader_pixel_local_storage_coherent: function (
                      e
                    ) {
                      return (
                        ((e = nt[e].C).ca = e.getExtension(
                          "WEBGL_shader_pixel_local_storage"
                        )),
                        !(!e.ca || !e.ca.isCoherent())
                      );
                    },
                    endPixelLocalStorageWEBGL: function (t, n, r) {
                      (t = nt[t].C.ca) &&
                        t.endPixelLocalStorageWEBGL(
                          e.HEAPU32.subarray(r, r + n)
                        );
                    },
                    environ_get: (e, t) => {
                      var n = 0;
                      return (
                        nf().forEach(function (r, i) {
                          var a = t + n;
                          for (
                            i = P[(e + 4 * i) >> 2] = a, a = 0;
                            a < r.length;
                            ++a
                          )
                            _[0 | i++] = r.charCodeAt(a);
                          (_[0 | i] = 0), (n += r.length + 1);
                        }),
                        0
                      );
                    },
                    environ_sizes_get: (e, t) => {
                      var n = nf();
                      P[e >> 2] = n.length;
                      var r = 0;
                      return (
                        n.forEach(function (e) {
                          r += e.length + 1;
                        }),
                        (P[t >> 2] = r),
                        0
                      );
                    },
                    fd_close: function (e) {
                      try {
                        var t = ek(e);
                        if (null === t.X) throw new eA(8);
                        t.Oa && (t.Oa = null);
                        try {
                          t.m.close && t.m.close(t);
                        } catch (e) {
                          throw e;
                        } finally {
                          eb[t.X] = null;
                        }
                        return (t.X = null), 0;
                      } catch (e) {
                        if (void 0 === eH || "ErrnoError" !== e.name) throw e;
                        return e.aa;
                      }
                    },
                    fd_read: function (e, t, n, r) {
                      try {
                        e: {
                          var i = ek(e);
                          e = t;
                          for (var a, o = (t = 0); o < n; o++) {
                            var s = P[e >> 2],
                              u = P[(e + 4) >> 2];
                            e += 8;
                            var l = a,
                              c = _;
                            if (0 > u || 0 > l) throw new eA(28);
                            if (null === i.X || 1 == (2097155 & i.flags))
                              throw new eA(8);
                            if (16384 == (61440 & i.node.mode))
                              throw new eA(31);
                            if (!i.m.read) throw new eA(28);
                            var f = void 0 !== l;
                            if (f) {
                              if (!i.seekable) throw new eA(70);
                            } else l = i.position;
                            var h = i.m.read(i, c, s, u, l);
                            if ((f || (i.position += h), 0 > h)) {
                              var d = -1;
                              break e;
                            }
                            if (((t += h), h < u)) break;
                            void 0 !== a && (a += h);
                          }
                          d = t;
                        }
                        return (P[r >> 2] = d), 0;
                      } catch (e) {
                        if (void 0 === eH || "ErrnoError" !== e.name) throw e;
                        return e.aa;
                      }
                    },
                    fd_seek: function (e, t, n, r, i) {
                      t =
                        (n + 2097152) >>> 0 < 4194305 - !!t
                          ? (t >>> 0) + 0x100000000 * n
                          : NaN;
                      try {
                        if (isNaN(t)) return 61;
                        var a = ek(e);
                        return (
                          e$(a, t, r),
                          (z = [
                            a.position >>> 0,
                            ((G = a.position),
                            1 <= +Math.abs(G)
                              ? 0 < G
                                ? Math.floor(G / 0x100000000) >>> 0
                                : ~~Math.ceil(
                                    (G - (~~G >>> 0)) / 0x100000000
                                  ) >>> 0
                              : 0),
                          ]),
                          (E[i >> 2] = z[0]),
                          (E[(i + 4) >> 2] = z[1]),
                          a.Oa && 0 === t && 0 === r && (a.Oa = null),
                          0
                        );
                      } catch (e) {
                        if (void 0 === eH || "ErrnoError" !== e.name) throw e;
                        return e.aa;
                      }
                    },
                    fd_write: function (e, t, n, r) {
                      try {
                        e: {
                          var i = ek(e);
                          e = t;
                          for (var a, o = (t = 0); o < n; o++) {
                            var s = P[e >> 2],
                              u = P[(e + 4) >> 2];
                            e += 8;
                            var l = a,
                              c = _;
                            if (0 > u || 0 > l) throw new eA(28);
                            if (null === i.X || 0 == (2097155 & i.flags))
                              throw new eA(8);
                            if (16384 == (61440 & i.node.mode))
                              throw new eA(31);
                            if (!i.m.write) throw new eA(28);
                            i.seekable && 1024 & i.flags && e$(i, 0, 2);
                            var f = void 0 !== l;
                            if (f) {
                              if (!i.seekable) throw new eA(70);
                            } else l = i.position;
                            var h = i.m.write(i, c, s, u, l, void 0);
                            if ((f || (i.position += h), 0 > h)) {
                              var d = -1;
                              break e;
                            }
                            (t += h), void 0 !== a && (a += h);
                          }
                          d = t;
                        }
                        return (P[r >> 2] = d), 0;
                      } catch (e) {
                        if (void 0 === eH || "ErrnoError" !== e.name) throw e;
                        return e.aa;
                      }
                    },
                    framebufferPixelLocalClearValuefvWEBGL: function (
                      e,
                      t,
                      n,
                      r,
                      i,
                      a
                    ) {
                      (e = nt[e].C.ca) &&
                        e.framebufferPixelLocalClearValuefvWEBGL(t, [
                          n,
                          r,
                          i,
                          a,
                        ]);
                    },
                    framebufferTexturePixelLocalStorageWEBGL: function (
                      e,
                      t,
                      n,
                      r,
                      i
                    ) {
                      (e = nt[e].C.ca) &&
                        e.framebufferTexturePixelLocalStorageWEBGL(
                          t,
                          t9[n],
                          r,
                          i
                        );
                    },
                    getFramebufferPixelLocalStorageParameterivWEBGL: function (
                      e,
                      t,
                      n
                    ) {
                      return (e = nt[e].C.ca)
                        ? e.getFramebufferPixelLocalStorageParameterWEBGL(t, n)
                        : 0;
                    },
                    glActiveTexture: function (e) {
                      nI.activeTexture(e);
                    },
                    glAttachShader: function (e, t) {
                      nI.attachShader(t5[e], t7[t]);
                    },
                    glBindBuffer: function (e, t) {
                      35051 == e ? (nI.Za = t) : 35052 == e && (nI.Ma = t),
                        nI.bindBuffer(e, t4[t]);
                    },
                    glBindBufferRange: function (e, t, n, r, i) {
                      nI.bindBufferRange(e, t, t4[n], r, i);
                    },
                    glBindFramebuffer: function (e, t) {
                      nI.bindFramebuffer(e, t6[t]);
                    },
                    glBindRenderbuffer: function (e, t) {
                      nI.bindRenderbuffer(e, t8[t]);
                    },
                    glBindTexture: function (e, t) {
                      nI.bindTexture(e, t9[t]);
                    },
                    glBindVertexArray: function (e) {
                      nI.bindVertexArray(ne[e]);
                    },
                    glBlendEquation: function (e) {
                      nI.blendEquation(e);
                    },
                    glBlendFunc: function (e, t) {
                      nI.blendFunc(e, t);
                    },
                    glBlitFramebuffer: function (e, t, n, r, i, a, o, s, u, l) {
                      nI.blitFramebuffer(e, t, n, r, i, a, o, s, u, l);
                    },
                    glBufferData: function (e, t, n, r) {
                      n && t
                        ? nI.bufferData(e, A, r, n, t)
                        : nI.bufferData(e, t, r);
                    },
                    glBufferSubData: function (e, t, n, r) {
                      n && nI.bufferSubData(e, t, A, r, n);
                    },
                    glClear: function (e) {
                      nI.clear(e);
                    },
                    glClearColor: function (e, t, n, r) {
                      nI.clearColor(e, t, n, r);
                    },
                    glClearDepthf: function (e) {
                      nI.clearDepth(e);
                    },
                    glClearStencil: function (e) {
                      nI.clearStencil(e);
                    },
                    glColorMask: function (e, t, n, r) {
                      nI.colorMask(!!e, !!t, !!n, !!r);
                    },
                    glCompileShader: function (e) {
                      nI.compileShader(t7[e]);
                    },
                    glCreateProgram: function () {
                      var e = ni(t5),
                        t = nI.createProgram();
                      return (
                        (t.name = e),
                        (t.Hc = t.Fc = t.Gc = 0),
                        (t.Ua = 1),
                        (t5[e] = t),
                        e
                      );
                    },
                    glCreateShader: function (e) {
                      var t = ni(t7);
                      return (t7[t] = nI.createShader(e)), t;
                    },
                    glCullFace: function (e) {
                      nI.cullFace(e);
                    },
                    glDeleteBuffers: function (e, t) {
                      for (var n = 0; n < e; n++) {
                        var r = E[(t + 4 * n) >> 2],
                          i = t4[r];
                        i &&
                          (nI.deleteBuffer(i),
                          (i.name = 0),
                          (t4[r] = null),
                          r == nI.Za && (nI.Za = 0),
                          r == nI.Ma && (nI.Ma = 0));
                      }
                    },
                    glDeleteFramebuffers: function (e, t) {
                      for (var n = 0; n < e; ++n) {
                        var r = E[(t + 4 * n) >> 2],
                          i = t6[r];
                        i &&
                          (nI.deleteFramebuffer(i),
                          (i.name = 0),
                          (t6[r] = null));
                      }
                    },
                    glDeleteProgram: function (e) {
                      if (e) {
                        var t = t5[e];
                        t
                          ? (nI.deleteProgram(t), (t.name = 0), (t5[e] = null))
                          : nr(1281);
                      }
                    },
                    glDeleteRenderbuffers: function (e, t) {
                      for (var n = 0; n < e; n++) {
                        var r = E[(t + 4 * n) >> 2],
                          i = t8[r];
                        i &&
                          (nI.deleteRenderbuffer(i),
                          (i.name = 0),
                          (t8[r] = null));
                      }
                    },
                    glDeleteShader: function (e) {
                      if (e) {
                        var t = t7[e];
                        t ? (nI.deleteShader(t), (t7[e] = null)) : nr(1281);
                      }
                    },
                    glDeleteTextures: function (e, t) {
                      for (var n = 0; n < e; n++) {
                        var r = E[(t + 4 * n) >> 2],
                          i = t9[r];
                        i &&
                          (nI.deleteTexture(i), (i.name = 0), (t9[r] = null));
                      }
                    },
                    glDeleteVertexArrays: function (e, t) {
                      for (var n = 0; n < e; n++) {
                        var r = E[(t + 4 * n) >> 2];
                        nI.deleteVertexArray(ne[r]), (ne[r] = null);
                      }
                    },
                    glDepthFunc: function (e) {
                      nI.depthFunc(e);
                    },
                    glDepthMask: function (e) {
                      nI.depthMask(!!e);
                    },
                    glDepthRangef: function (e, t) {
                      nI.depthRange(e, t);
                    },
                    glDisable: function (e) {
                      nI.disable(e);
                    },
                    glDrawArrays: function (e, t, n) {
                      nI.drawArrays(e, t, n);
                    },
                    glDrawArraysInstanced: function (e, t, n, r) {
                      nI.drawArraysInstanced(e, t, n, r);
                    },
                    glDrawBuffers: function (e, t) {
                      for (var n = nh[e], r = 0; r < e; r++)
                        n[r] = E[(t + 4 * r) >> 2];
                      nI.drawBuffers(n);
                    },
                    glDrawElements: function (e, t, n, r) {
                      nI.drawElements(e, t, n, r);
                    },
                    glDrawElementsInstanced: function (e, t, n, r, i) {
                      nI.drawElementsInstanced(e, t, n, r, i);
                    },
                    glEnable: function (e) {
                      nI.enable(e);
                    },
                    glEnableVertexAttribArray: function (e) {
                      nI.enableVertexAttribArray(e);
                    },
                    glFlush: function () {
                      nI.flush();
                    },
                    glFramebufferRenderbuffer: function (e, t, n, r) {
                      nI.framebufferRenderbuffer(e, t, n, t8[r]);
                    },
                    glFramebufferTexture2D: function (e, t, n, r, i) {
                      nI.framebufferTexture2D(e, t, n, t9[r], i);
                    },
                    glFrontFace: function (e) {
                      nI.frontFace(e);
                    },
                    glGenBuffers: function (e, t) {
                      nd(e, t, "createBuffer", t4);
                    },
                    glGenFramebuffers: function (e, t) {
                      nd(e, t, "createFramebuffer", t6);
                    },
                    glGenRenderbuffers: function (e, t) {
                      nd(e, t, "createRenderbuffer", t8);
                    },
                    glGenTextures: function (e, t) {
                      nd(e, t, "createTexture", t9);
                    },
                    glGenVertexArrays: function (e, t) {
                      nd(e, t, "createVertexArray", ne);
                    },
                    glGenerateMipmap: function (e) {
                      nI.generateMipmap(e);
                    },
                    glGetError: function () {
                      var e = nI.getError() || ns;
                      return (ns = 0), e;
                    },
                    glGetIntegerv: function (e, t) {
                      !(function (e, t) {
                        if (t) {
                          var n = void 0;
                          switch (e) {
                            case 36346:
                              n = 1;
                              break;
                            case 36344:
                              return;
                            case 34814:
                            case 36345:
                              n = 0;
                              break;
                            case 34466:
                              var r = nI.getParameter(34467);
                              n = r ? r.length : 0;
                              break;
                            case 33309:
                              if (2 > nu.version) return nr(1282);
                              n =
                                2 * (nI.getSupportedExtensions() || []).length;
                              break;
                            case 33307:
                            case 33308:
                              if (2 > nu.version) return nr(1280);
                              n = 3 * (33307 == e);
                          }
                          if (void 0 === n)
                            switch (typeof (r = nI.getParameter(e))) {
                              case "number":
                                n = r;
                                break;
                              case "boolean":
                                n = +!!r;
                                break;
                              case "string":
                                nr(1280);
                                return;
                              case "object":
                                if (null === r)
                                  switch (e) {
                                    case 34964:
                                    case 35725:
                                    case 34965:
                                    case 36006:
                                    case 36007:
                                    case 32873:
                                    case 34229:
                                    case 36662:
                                    case 36663:
                                    case 35053:
                                    case 35055:
                                    case 36010:
                                    case 35097:
                                    case 35869:
                                    case 32874:
                                    case 36389:
                                    case 35983:
                                    case 35368:
                                    case 34068:
                                      n = 0;
                                      break;
                                    default:
                                      nr(1280);
                                      return;
                                  }
                                else {
                                  if (
                                    r instanceof Float32Array ||
                                    r instanceof Uint32Array ||
                                    r instanceof Int32Array ||
                                    r instanceof Array
                                  ) {
                                    for (e = 0; e < r.length; ++e)
                                      E[(t + 4 * e) >> 2] = r[e];
                                    return;
                                  }
                                  try {
                                    n = 0 | r.name;
                                  } catch (t) {
                                    nr(1280),
                                      g(
                                        "GL_INVALID_ENUM in glGet0v: Unknown object returned from WebGL getParameter(" +
                                          e +
                                          ")! (error: " +
                                          t +
                                          ")"
                                      );
                                    return;
                                  }
                                }
                                break;
                              default:
                                nr(1280),
                                  g(
                                    "GL_INVALID_ENUM in glGet0v: Native code calling glGet0v(" +
                                      e +
                                      ") and it returns " +
                                      r +
                                      " of type " +
                                      typeof r +
                                      "!"
                                  );
                                return;
                            }
                          E[t >> 2] = n;
                        } else nr(1281);
                      })(e, t);
                    },
                    glGetString: function (e) {
                      var t = nn[e];
                      if (!t) {
                        switch (e) {
                          case 7939:
                            t = np(
                              (t = (t =
                                nI.getSupportedExtensions() || []).concat(
                                t.map(function (e) {
                                  return "GL_" + e;
                                })
                              )).join(" ")
                            );
                            break;
                          case 7936:
                          case 7937:
                          case 37445:
                          case 37446:
                            (t = nI.getParameter(e)) || nr(1280),
                              (t = t && np(t));
                            break;
                          case 7938:
                            t = np(
                              "OpenGL ES 3.0 (" + nI.getParameter(7938) + ")"
                            );
                            break;
                          case 35724:
                            var n = (t = nI.getParameter(35724)).match(
                              /^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/
                            );
                            null !== n &&
                              (3 == n[1].length && (n[1] += "0"),
                              (t =
                                "OpenGL ES GLSL ES " + n[1] + " (" + t + ")")),
                              (t = np(t));
                            break;
                          default:
                            nr(1280);
                        }
                        nn[e] = t;
                      }
                      return t;
                    },
                    glGetUniformBlockIndex: function (e, t) {
                      return nI.getUniformBlockIndex(t5[e], t ? en(A, t) : "");
                    },
                    glGetUniformLocation: function (e, t) {
                      if (((t = t ? en(A, t) : ""), (e = t5[e]))) {
                        var n,
                          r = e,
                          i = r.oa,
                          a = r.wb;
                        if (!i)
                          for (
                            r.oa = i = {}, r.vb = {}, n = 0;
                            n < nI.getProgramParameter(r, 35718);
                            ++n
                          ) {
                            var o = nI.getActiveUniform(r, n),
                              s = o.name;
                            o = o.size;
                            var u = nm(s);
                            u = 0 < u ? s.slice(0, u) : s;
                            var l = r.Ua;
                            for (r.Ua += o, a[u] = [o, l], s = 0; s < o; ++s)
                              (i[l] = s), (r.vb[l++] = u);
                          }
                        if (
                          ((r = e.oa),
                          (i = 0),
                          (a = t),
                          0 < (n = nm(t)) &&
                            ((i = parseInt(t.slice(n + 1)) >>> 0),
                            (a = t.slice(0, n))),
                          (a = e.wb[a]) &&
                            i < a[0] &&
                            (r[(i += a[1])] =
                              r[i] || nI.getUniformLocation(e, t)))
                        )
                          return i;
                      } else nr(1281);
                      return -1;
                    },
                    glInvalidateFramebuffer: function (e, t, n) {
                      for (var r = nh[t], i = 0; i < t; i++)
                        r[i] = E[(n + 4 * i) >> 2];
                      nI.invalidateFramebuffer(e, r);
                    },
                    glLinkProgram: function (e) {
                      (e = t5[e]), nI.linkProgram(e), (e.oa = 0), (e.wb = {});
                    },
                    glPixelStorei: function (e, t) {
                      nI.pixelStorei(e, t);
                    },
                    glRenderbufferStorageMultisample: function (e, t, n, r, i) {
                      nI.renderbufferStorageMultisample(e, t, n, r, i);
                    },
                    glScissor: function (e, t, n, r) {
                      nI.scissor(e, t, n, r);
                    },
                    glShaderSource: function (e, t, n, r) {
                      for (var i = "", a = 0; a < t; ++a) {
                        var o = r ? E[(r + 4 * a) >> 2] : -1,
                          s = E[(n + 4 * a) >> 2];
                        i += o = s ? en(A, s, 0 > o ? void 0 : o) : "";
                      }
                      nI.shaderSource(t7[e], i);
                    },
                    glStencilFunc: function (e, t, n) {
                      nI.stencilFunc(e, t, n);
                    },
                    glStencilFuncSeparate: function (e, t, n, r) {
                      nI.stencilFuncSeparate(e, t, n, r);
                    },
                    glStencilMask: function (e) {
                      nI.stencilMask(e);
                    },
                    glStencilOp: function (e, t, n) {
                      nI.stencilOp(e, t, n);
                    },
                    glStencilOpSeparate: function (e, t, n, r) {
                      nI.stencilOpSeparate(e, t, n, r);
                    },
                    glTexParameteri: function (e, t, n) {
                      nI.texParameteri(e, t, n);
                    },
                    glTexStorage2D: function (e, t, n, r, i) {
                      nI.texStorage2D(e, t, n, r, i);
                    },
                    glTexSubImage2D: function (e, t, n, r, i, a, o, s, u) {
                      if (nI.Ma) nI.texSubImage2D(e, t, n, r, i, a, o, s, u);
                      else if (u) {
                        var l = s - 5120;
                        (l =
                          0 == l
                            ? _
                            : 1 == l
                            ? A
                            : 2 == l
                            ? C
                            : 4 == l
                            ? E
                            : 6 == l
                            ? I
                            : 5 == l ||
                              28922 == l ||
                              28520 == l ||
                              30779 == l ||
                              30782 == l
                            ? P
                            : M),
                          nI.texSubImage2D(
                            e,
                            t,
                            n,
                            r,
                            i,
                            a,
                            o,
                            s,
                            l,
                            u >> (31 - Math.clz32(l.BYTES_PER_ELEMENT))
                          );
                      } else nI.texSubImage2D(e, t, n, r, i, a, o, s, null);
                    },
                    glUniform1i: function (e, t) {
                      var n = nI,
                        r = n.uniform1i,
                        i = nI.Hb;
                      if (i) {
                        var a = i.oa[e];
                        "number" == typeof a &&
                          (i.oa[e] = a =
                            nI.getUniformLocation(
                              i,
                              i.vb[e] + (0 < a ? "[" + a + "]" : "")
                            )),
                          (e = a);
                      } else nr(1282), (e = void 0);
                      r.call(n, e, t);
                    },
                    glUniformBlockBinding: function (e, t, n) {
                      (e = t5[e]), nI.uniformBlockBinding(e, t, n);
                    },
                    glUseProgram: function (e) {
                      (e = t5[e]), nI.useProgram(e), (nI.Hb = e);
                    },
                    glVertexAttribDivisor: function (e, t) {
                      nI.vertexAttribDivisor(e, t);
                    },
                    glVertexAttribIPointer: function (e, t, n, r, i) {
                      nI.vertexAttribIPointer(e, t, n, r, i);
                    },
                    glVertexAttribPointer: function (e, t, n, r, i, a) {
                      nI.vertexAttribPointer(e, t, n, !!r, i, a);
                    },
                    glViewport: function (e, t, n, r) {
                      nI.viewport(e, t, n, r);
                    },
                    provokingVertexWEBGL: function (e, t) {
                      (e = nt[e].C.ob) && e.provokingVertexWEBGL(t);
                    },
                    strftime_l: (e, t, n, r) => ny(e, t, n, r),
                    upload_image: function (t, n) {
                      var r = e.images;
                      r &&
                        (n = r.get(n)) &&
                        ((t = nt[t].C).pixelStorei(
                          t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,
                          !0
                        ),
                        t.texImage2D(
                          t.TEXTURE_2D,
                          0,
                          t.RGBA,
                          t.RGBA,
                          t.UNSIGNED_BYTE,
                          n
                        ),
                        t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !1));
                    },
                  };
                  !(function () {
                    function t(t) {
                      if (
                        ((y = (w = t = t.exports).memory),
                        x(),
                        (R = w.__indirect_function_table),
                        k.unshift(w.__wasm_call_ctors),
                        j--,
                        e.monitorRunDependencies && e.monitorRunDependencies(j),
                        0 == j &&
                          (null !== O && (clearInterval(O), (O = null)), W))
                      ) {
                        var n = W;
                        (W = null), n();
                      }
                      return t;
                    }
                    var n,
                      r,
                      i = { env: nF, wasi_snapshot_preview1: nF };
                    if (
                      (j++,
                      e.monitorRunDependencies && e.monitorRunDependencies(j),
                      e.instantiateWasm)
                    )
                      try {
                        return e.instantiateWasm(i, t);
                      } catch (e) {
                        g(
                          "Module.instantiateWasm callback failed with error: " +
                            e
                        ),
                          u(e);
                      }
                    ((n = function (e) {
                      t(e.instance);
                    }),
                    (r = $),
                    b ||
                    "function" != typeof WebAssembly.instantiateStreaming ||
                    D(r) ||
                    r.startsWith("file://") ||
                    "function" != typeof fetch
                      ? N(r, i, n)
                      : fetch(r, { credentials: "same-origin" }).then((e) =>
                          WebAssembly.instantiateStreaming(e, i).then(
                            n,
                            function (e) {
                              return (
                                g("wasm streaming compile failed: " + e),
                                g("falling back to ArrayBuffer instantiation"),
                                N(r, i, n)
                              );
                            }
                          )
                        )).catch(u);
                  })();
                  var nx = (e) => (nx = w.free)(e),
                    nR = (e) => (nR = w.malloc)(e);
                  e._setWebImage = (t, n, r) =>
                    (e._setWebImage = w.setWebImage)(t, n, r);
                  var nS = () => (nS = w.__errno_location)(),
                    nk = (e._ma_device__on_notification_unlocked = (t) =>
                      (nk = e._ma_device__on_notification_unlocked =
                        w.ma_device__on_notification_unlocked)(t));
                  (e._ma_malloc_emscripten = (t, n) =>
                    (e._ma_malloc_emscripten = w.ma_malloc_emscripten)(t, n)),
                    (e._ma_free_emscripten = (t, n) =>
                      (e._ma_free_emscripten = w.ma_free_emscripten)(t, n));
                  var nT = (e._ma_device_process_pcm_frames_capture__webaudio =
                      (t, n, r) =>
                        (nT =
                          e._ma_device_process_pcm_frames_capture__webaudio =
                            w.ma_device_process_pcm_frames_capture__webaudio)(
                          t,
                          n,
                          r
                        )),
                    nj = (e._ma_device_process_pcm_frames_playback__webaudio = (
                      t,
                      n,
                      r
                    ) =>
                      (nj = e._ma_device_process_pcm_frames_playback__webaudio =
                        w.ma_device_process_pcm_frames_playback__webaudio)(
                        t,
                        n,
                        r
                      )),
                    nO = (e) => (nO = w.__getTypeName)(e);
                  function nW() {
                    function t() {
                      if (!o && ((o = !0), (e.calledRun = !0), !F)) {
                        if (
                          (e.noFSInit ||
                            ef ||
                            ((ef = !0),
                            eG(),
                            (e.stdin = e.stdin),
                            (e.stdout = e.stdout),
                            (e.stderr = e.stderr),
                            e.stdin
                              ? ez("stdin", e.stdin)
                              : eV("/dev/tty", "/dev/stdin"),
                            e.stdout
                              ? ez("stdout", null, e.stdout)
                              : eV("/dev/tty", "/dev/stdout"),
                            e.stderr
                              ? ez("stderr", null, e.stderr)
                              : eV("/dev/tty1", "/dev/stderr"),
                            eN("/dev/stdin", 0),
                            eN("/dev/stdout", 1),
                            eN("/dev/stderr", 1)),
                          (e_ = !1),
                          Y(k),
                          s(e),
                          e.onRuntimeInitialized && e.onRuntimeInitialized(),
                          e.postRun)
                        )
                          for (
                            "function" == typeof e.postRun &&
                            (e.postRun = [e.postRun]);
                            e.postRun.length;

                          ) {
                            var t = e.postRun.shift();
                            T.unshift(t);
                          }
                        Y(T);
                      }
                    }
                    if (!(0 < j)) {
                      if (e.preRun)
                        for (
                          "function" == typeof e.preRun &&
                          (e.preRun = [e.preRun]);
                          e.preRun.length;

                        )
                          !(function () {
                            var t = e.preRun.shift();
                            S.unshift(t);
                          })();
                      Y(S),
                        0 < j ||
                          (e.setStatus
                            ? (e.setStatus("Running..."),
                              setTimeout(function () {
                                setTimeout(function () {
                                  e.setStatus("");
                                }, 1),
                                  t();
                              }, 1))
                            : t());
                    }
                  }
                  if (
                    ((e.__embind_initialize_bindings = () =>
                      (e.__embind_initialize_bindings =
                        w._embind_initialize_bindings)()),
                    (e.dynCall_iiiji = (t, n, r, i, a, o) =>
                      (e.dynCall_iiiji = w.dynCall_iiiji)(t, n, r, i, a, o)),
                    (e.dynCall_iij = (t, n, r, i) =>
                      (e.dynCall_iij = w.dynCall_iij)(t, n, r, i)),
                    (e.dynCall_iiji = (t, n, r, i, a) =>
                      (e.dynCall_iiji = w.dynCall_iiji)(t, n, r, i, a)),
                    (e.dynCall_jii = (t, n, r) =>
                      (e.dynCall_jii = w.dynCall_jii)(t, n, r)),
                    (e.dynCall_vijj = (t, n, r, i, a, o) =>
                      (e.dynCall_vijj = w.dynCall_vijj)(t, n, r, i, a, o)),
                    (e.dynCall_jiji = (t, n, r, i, a) =>
                      (e.dynCall_jiji = w.dynCall_jiji)(t, n, r, i, a)),
                    (e.dynCall_viijii = (t, n, r, i, a, o, s) =>
                      (e.dynCall_viijii = w.dynCall_viijii)(
                        t,
                        n,
                        r,
                        i,
                        a,
                        o,
                        s
                      )),
                    (e.dynCall_iiiiij = (t, n, r, i, a, o, s) =>
                      (e.dynCall_iiiiij = w.dynCall_iiiiij)(
                        t,
                        n,
                        r,
                        i,
                        a,
                        o,
                        s
                      )),
                    (e.dynCall_iiiiijj = (t, n, r, i, a, o, s, u, l) =>
                      (e.dynCall_iiiiijj = w.dynCall_iiiiijj)(
                        t,
                        n,
                        r,
                        i,
                        a,
                        o,
                        s,
                        u,
                        l
                      )),
                    (e.dynCall_iiiiiijj = (t, n, r, i, a, o, s, u, l, c) =>
                      (e.dynCall_iiiiiijj = w.dynCall_iiiiiijj)(
                        t,
                        n,
                        r,
                        i,
                        a,
                        o,
                        s,
                        u,
                        l,
                        c
                      )),
                    (e.___start_em_js = 515140),
                    (e.___stop_em_js = 517895),
                    (W = function e() {
                      o || nW(), o || (W = e);
                    }),
                    e.preInit)
                  )
                    for (
                      "function" == typeof e.preInit &&
                      (e.preInit = [e.preInit]);
                      0 < e.preInit.length;

                    )
                      e.preInit.pop()();
                  return nW(), e.ready;
                });
            },
            (e) => {
              e.exports = JSON.parse(
                '{"name":"@rive-app/webgl2","version":"2.28.0","description":"Rive\'s webgl2 based web api.","main":"rive.js","homepage":"https://rive.app","repository":{"type":"git","url":"https://github.com/rive-app/rive-wasm/tree/master/js"},"keywords":["rive","animation"],"author":"Rive","contributors":["Luigi Rosso <luigi@rive.app> (https://rive.app)","Maxwell Talbot <max@rive.app> (https://rive.app)","Arthur Vivian <arthur@rive.app> (https://rive.app)","Umberto Sonnino <umberto@rive.app> (https://rive.app)","Matthew Sullivan <matt.j.sullivan@gmail.com> (mailto:matt.j.sullivan@gmail.com)","Chris Dalton <chris@rive.app> (https://rive.app)"],"license":"MIT","files":["rive.js","rive.wasm","rive.js.map","rive.d.ts","rive_advanced.mjs.d.ts"],"typings":"rive.d.ts","dependencies":{},"browser":{"fs":false,"path":false}}'
              );
            },
            (e, t, n) => {
              n.r(t), n.d(t, { Animation: () => r.Animation });
              var r = n(4);
            },
            (e, t, n) => {
              n.r(t), n.d(t, { Animation: () => r });
              var r = (function () {
                function e(e, t, n, r) {
                  (this.animation = e),
                    (this.artboard = t),
                    (this.playing = r),
                    (this.loopCount = 0),
                    (this.scrubTo = null),
                    (this.instance = new n.LinearAnimationInstance(e, t));
                }
                return (
                  Object.defineProperty(e.prototype, "name", {
                    get: function () {
                      return this.animation.name;
                    },
                    enumerable: !1,
                    configurable: !0,
                  }),
                  Object.defineProperty(e.prototype, "time", {
                    get: function () {
                      return this.instance.time;
                    },
                    set: function (e) {
                      this.instance.time = e;
                    },
                    enumerable: !1,
                    configurable: !0,
                  }),
                  Object.defineProperty(e.prototype, "loopValue", {
                    get: function () {
                      return this.animation.loopValue;
                    },
                    enumerable: !1,
                    configurable: !0,
                  }),
                  Object.defineProperty(e.prototype, "needsScrub", {
                    get: function () {
                      return null !== this.scrubTo;
                    },
                    enumerable: !1,
                    configurable: !0,
                  }),
                  (e.prototype.advance = function (e) {
                    null === this.scrubTo
                      ? this.instance.advance(e)
                      : ((this.instance.time = 0),
                        this.instance.advance(this.scrubTo),
                        (this.scrubTo = null));
                  }),
                  (e.prototype.apply = function (e) {
                    this.instance.apply(e);
                  }),
                  (e.prototype.cleanup = function () {
                    this.instance.delete();
                  }),
                  e
                );
              })();
            },
            (e, t, n) => {
              n.r(t),
                n.d(t, {
                  AudioAssetWrapper: () => a.AudioAssetWrapper,
                  AudioWrapper: () => a.AudioWrapper,
                  BLANK_URL: () => i.BLANK_URL,
                  CustomFileAssetLoaderWrapper: () =>
                    a.CustomFileAssetLoaderWrapper,
                  FileAssetWrapper: () => a.FileAssetWrapper,
                  Finalizable: () => a.Finalizable,
                  FontAssetWrapper: () => a.FontAssetWrapper,
                  FontWrapper: () => a.FontWrapper,
                  ImageAssetWrapper: () => a.ImageAssetWrapper,
                  ImageWrapper: () => a.ImageWrapper,
                  finalizationRegistry: () => a.finalizationRegistry,
                  registerTouchInteractions: () => r.registerTouchInteractions,
                  sanitizeUrl: () => i.sanitizeUrl,
                });
              var r = n(6),
                i = n(7),
                a = n(8);
            },
            (e, t, n) => {
              n.r(t), n.d(t, { registerTouchInteractions: () => a });
              var r = void 0,
                i = function (e, t) {
                  var n, r;
                  return ["touchstart", "touchmove"].indexOf(e.type) > -1 &&
                    (null == (n = e.touches) ? void 0 : n.length)
                    ? (t || e.preventDefault(),
                      {
                        clientX: e.touches[0].clientX,
                        clientY: e.touches[0].clientY,
                      })
                    : "touchend" === e.type &&
                      (null == (r = e.changedTouches) ? void 0 : r.length)
                    ? {
                        clientX: e.changedTouches[0].clientX,
                        clientY: e.changedTouches[0].clientY,
                      }
                    : { clientX: e.clientX, clientY: e.clientY };
                },
                a = function (e) {
                  var t = e.canvas,
                    n = e.artboard,
                    a = e.stateMachines,
                    o = void 0 === a ? [] : a,
                    s = e.renderer,
                    u = e.rive,
                    l = e.fit,
                    c = e.alignment,
                    f = e.isTouchScrollEnabled,
                    h = void 0 !== f && f,
                    d = e.layoutScaleFactor,
                    p = void 0 === d ? 1 : d;
                  if (
                    !t ||
                    !o.length ||
                    !s ||
                    !u ||
                    !n ||
                    "undefined" == typeof window
                  )
                    return null;
                  var m = null,
                    v = !1,
                    g = function (e) {
                      if (v && e instanceof MouseEvent) {
                        "mouseup" == e.type && (v = !1);
                        return;
                      }
                      (v = h && "touchend" === e.type && "touchstart" === m),
                        (m = e.type);
                      var t = e.currentTarget.getBoundingClientRect(),
                        r = i(e, h),
                        a = r.clientX,
                        s = r.clientY;
                      if (a || s) {
                        var f = a - t.left,
                          d = s - t.top,
                          g = u.computeAlignment(
                            l,
                            c,
                            { minX: 0, minY: 0, maxX: t.width, maxY: t.height },
                            n.bounds,
                            p
                          ),
                          b = new u.Mat2D();
                        g.invert(b);
                        var y = new u.Vec2D(f, d),
                          w = u.mapXY(b, y),
                          _ = w.x(),
                          A = w.y();
                        switch (
                          (w.delete(),
                          b.delete(),
                          y.delete(),
                          g.delete(),
                          e.type)
                        ) {
                          case "mouseout":
                            for (var C = 0; C < o.length; C++) {
                              var M = o[C];
                              M.pointerMove(_, A);
                            }
                            break;
                          case "touchmove":
                          case "mouseover":
                          case "mousemove":
                            for (var E = 0; E < o.length; E++) {
                              var M = o[E];
                              M.pointerMove(_, A);
                            }
                            break;
                          case "touchstart":
                          case "mousedown":
                            for (var P = 0; P < o.length; P++) {
                              var M = o[P];
                              M.pointerDown(_, A);
                            }
                            break;
                          case "touchend":
                          case "mouseup":
                            for (var I = 0; I < o.length; I++) {
                              var M = o[I];
                              M.pointerUp(_, A);
                            }
                        }
                      }
                    }.bind(r);
                  return (
                    t.addEventListener("mouseover", g),
                    t.addEventListener("mouseout", g),
                    t.addEventListener("mousemove", g),
                    t.addEventListener("mousedown", g),
                    t.addEventListener("mouseup", g),
                    t.addEventListener("touchmove", g, { passive: h }),
                    t.addEventListener("touchstart", g, { passive: h }),
                    t.addEventListener("touchend", g),
                    function () {
                      t.removeEventListener("mouseover", g),
                        t.removeEventListener("mouseout", g),
                        t.removeEventListener("mousemove", g),
                        t.removeEventListener("mousedown", g),
                        t.removeEventListener("mouseup", g),
                        t.removeEventListener("touchmove", g),
                        t.removeEventListener("touchstart", g),
                        t.removeEventListener("touchend", g);
                    }
                  );
                };
            },
            (e, t, n) => {
              n.r(t), n.d(t, { BLANK_URL: () => l, sanitizeUrl: () => c });
              var r = /^([^\w]*)(javascript|data|vbscript)/im,
                i = /&#(\w+)(^\w|;)?/g,
                a = /&(newline|tab);/gi,
                o = /[\u0000-\u001F\u007F-\u009F\u2000-\u200D\uFEFF]/gim,
                s = /^.+(:|&colon;)/gim,
                u = [".", "/"],
                l = "about:blank";
              function c(e) {
                if (!e) return l;
                var t = e
                  .replace(o, "")
                  .replace(i, function (e, t) {
                    return String.fromCharCode(t);
                  })
                  .replace(a, "")
                  .replace(o, "")
                  .trim();
                if (!t) return l;
                if (u.indexOf(t[0]) > -1) return t;
                var n = t.match(s);
                if (!n) return t;
                var c = n[0];
                return r.test(c) ? l : t;
              }
            },
            (e, t, n) => {
              n.r(t),
                n.d(t, {
                  AudioAssetWrapper: () => h,
                  AudioWrapper: () => s,
                  CustomFileAssetLoaderWrapper: () => l,
                  FileAssetWrapper: () => c,
                  Finalizable: () => a,
                  FontAssetWrapper: () => d,
                  FontWrapper: () => u,
                  ImageAssetWrapper: () => f,
                  ImageWrapper: () => o,
                  finalizationRegistry: () => m,
                });
              var r,
                i =
                  ((r = function (e, t) {
                    return (r =
                      Object.setPrototypeOf ||
                      ({ __proto__: [] } instanceof Array &&
                        function (e, t) {
                          e.__proto__ = t;
                        }) ||
                      function (e, t) {
                        for (var n in t)
                          Object.prototype.hasOwnProperty.call(t, n) &&
                            (e[n] = t[n]);
                      })(e, t);
                  }),
                  function (e, t) {
                    if ("function" != typeof t && null !== t)
                      throw TypeError(
                        "Class extends value " +
                          String(t) +
                          " is not a constructor or null"
                      );
                    function n() {
                      this.constructor = e;
                    }
                    r(e, t),
                      (e.prototype =
                        null === t
                          ? Object.create(t)
                          : ((n.prototype = t.prototype), new n()));
                  }),
                a = function () {
                  this.selfUnref = !1;
                },
                o = (function (e) {
                  function t(t) {
                    var n = e.call(this) || this;
                    return (n._nativeImage = t), n;
                  }
                  return (
                    i(t, e),
                    Object.defineProperty(t.prototype, "nativeImage", {
                      get: function () {
                        return this._nativeImage;
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    (t.prototype.unref = function () {
                      this.selfUnref && this._nativeImage.unref();
                    }),
                    t
                  );
                })(a),
                s = (function (e) {
                  function t(t) {
                    var n = e.call(this) || this;
                    return (n._nativeAudio = t), n;
                  }
                  return (
                    i(t, e),
                    Object.defineProperty(t.prototype, "nativeAudio", {
                      get: function () {
                        return this._nativeAudio;
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    (t.prototype.unref = function () {
                      this.selfUnref && this._nativeAudio.unref();
                    }),
                    t
                  );
                })(a),
                u = (function (e) {
                  function t(t) {
                    var n = e.call(this) || this;
                    return (n._nativeFont = t), n;
                  }
                  return (
                    i(t, e),
                    Object.defineProperty(t.prototype, "nativeFont", {
                      get: function () {
                        return this._nativeFont;
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    (t.prototype.unref = function () {
                      this.selfUnref && this._nativeFont.unref();
                    }),
                    t
                  );
                })(a),
                l = (function () {
                  function e(e, t) {
                    (this._assetLoaderCallback = t),
                      (this.assetLoader = new e.CustomFileAssetLoader({
                        loadContents: this.loadContents.bind(this),
                      }));
                  }
                  return (
                    (e.prototype.loadContents = function (e, t) {
                      var n;
                      return (
                        e.isImage
                          ? (n = new f(e))
                          : e.isAudio
                          ? (n = new h(e))
                          : e.isFont && (n = new d(e)),
                        this._assetLoaderCallback(n, t)
                      );
                    }),
                    e
                  );
                })(),
                c = (function () {
                  function e(e) {
                    this._nativeFileAsset = e;
                  }
                  return (
                    (e.prototype.decode = function (e) {
                      this._nativeFileAsset.decode(e);
                    }),
                    Object.defineProperty(e.prototype, "name", {
                      get: function () {
                        return this._nativeFileAsset.name;
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "fileExtension", {
                      get: function () {
                        return this._nativeFileAsset.fileExtension;
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "uniqueFilename", {
                      get: function () {
                        return this._nativeFileAsset.uniqueFilename;
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "isAudio", {
                      get: function () {
                        return this._nativeFileAsset.isAudio;
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "isImage", {
                      get: function () {
                        return this._nativeFileAsset.isImage;
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "isFont", {
                      get: function () {
                        return this._nativeFileAsset.isFont;
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "cdnUuid", {
                      get: function () {
                        return this._nativeFileAsset.cdnUuid;
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "nativeFileAsset", {
                      get: function () {
                        return this._nativeFileAsset;
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    e
                  );
                })(),
                f = (function (e) {
                  function t() {
                    return (null !== e && e.apply(this, arguments)) || this;
                  }
                  return (
                    i(t, e),
                    (t.prototype.setRenderImage = function (e) {
                      this._nativeFileAsset.setRenderImage(e.nativeImage);
                    }),
                    t
                  );
                })(c),
                h = (function (e) {
                  function t() {
                    return (null !== e && e.apply(this, arguments)) || this;
                  }
                  return (
                    i(t, e),
                    (t.prototype.setAudioSource = function (e) {
                      this._nativeFileAsset.setAudioSource(e.nativeAudio);
                    }),
                    t
                  );
                })(c),
                d = (function (e) {
                  function t() {
                    return (null !== e && e.apply(this, arguments)) || this;
                  }
                  return (
                    i(t, e),
                    (t.prototype.setFont = function (e) {
                      this._nativeFileAsset.setFont(e.nativeFont);
                    }),
                    t
                  );
                })(c),
                p = (function (e) {
                  function t(t) {
                    return e.call(this, t) || this;
                  }
                  return (
                    i(t, e),
                    (t.prototype.register = function (e) {
                      e.selfUnref = !0;
                    }),
                    (t.prototype.unregister = function (e) {}),
                    t
                  );
                })(FinalizationRegistry),
                m = new (FinalizationRegistry || p)(function (e) {
                  e.unref();
                });
            },
          ],
          ea = {};
        function eo(e) {
          var t = ea[e];
          if (void 0 !== t) return t.exports;
          var n = (ea[e] = { exports: {} });
          return ei[e](n, n.exports, eo), n.exports;
        }
        (eo.d = (e, t) => {
          for (var n in t)
            eo.o(t, n) &&
              !eo.o(e, n) &&
              Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        }),
          (eo.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
          (eo.r = (e) => {
            "undefined" != typeof Symbol &&
              Symbol.toStringTag &&
              Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
              Object.defineProperty(e, "__esModule", { value: !0 });
          });
        var es = {};
        return (
          eo.r(es),
          eo.d(es, {
            Alignment: () => t,
            DataEnum: () => V,
            EventType: () => i,
            Fit: () => e,
            Layout: () => _,
            LoopType: () => a,
            Rive: () => B,
            RiveEventType: () => r,
            RiveFile: () => W,
            RuntimeLoader: () => A,
            StateMachineInput: () => M,
            StateMachineInputType: () => n,
            Testing: () => ee,
            ViewModel: () => D,
            ViewModelInstance: () => N,
            ViewModelInstanceAssetImage: () => K,
            ViewModelInstanceBoolean: () => H,
            ViewModelInstanceColor: () => J,
            ViewModelInstanceEnum: () => X,
            ViewModelInstanceList: () => q,
            ViewModelInstanceNumber: () => z,
            ViewModelInstanceString: () => G,
            ViewModelInstanceTrigger: () => Y,
            ViewModelInstanceValue: () => $,
            decodeAudio: () => et,
            decodeFont: () => er,
            decodeImage: () => en,
          }),
          (u = eo(1)),
          (l = eo(2)),
          (c = eo(3)),
          (f = eo(5)),
          (h = function (e, t) {
            return (h =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t;
                }) ||
              function (e, t) {
                for (var n in t)
                  Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
              })(e, t);
          }),
          (d = function (e, t) {
            if ("function" != typeof t && null !== t)
              throw TypeError(
                "Class extends value " +
                  String(t) +
                  " is not a constructor or null"
              );
            function n() {
              this.constructor = e;
            }
            h(e, t),
              (e.prototype =
                null === t
                  ? Object.create(t)
                  : ((n.prototype = t.prototype), new n()));
          }),
          (p = function () {
            return (p =
              Object.assign ||
              function (e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                  for (var i in (t = arguments[n]))
                    Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e;
              }).apply(this, arguments);
          }),
          (m = function (e, t, n, r) {
            return new (n || (n = Promise))(function (i, a) {
              function o(e) {
                try {
                  u(r.next(e));
                } catch (e) {
                  a(e);
                }
              }
              function s(e) {
                try {
                  u(r.throw(e));
                } catch (e) {
                  a(e);
                }
              }
              function u(e) {
                var t;
                e.done
                  ? i(e.value)
                  : ((t = e.value) instanceof n
                      ? t
                      : new n(function (e) {
                          e(t);
                        })
                    ).then(o, s);
              }
              u((r = r.apply(e, t || [])).next());
            });
          }),
          (v = function (e, t) {
            var n,
              r,
              i,
              a = {
                label: 0,
                sent: function () {
                  if (1 & i[0]) throw i[1];
                  return i[1];
                },
                trys: [],
                ops: [],
              },
              o = Object.create(
                ("function" == typeof Iterator ? Iterator : Object).prototype
              );
            return (
              (o.next = s(0)),
              (o.throw = s(1)),
              (o.return = s(2)),
              "function" == typeof Symbol &&
                (o[Symbol.iterator] = function () {
                  return this;
                }),
              o
            );
            function s(s) {
              return function (u) {
                var l = [s, u];
                if (n) throw TypeError("Generator is already executing.");
                for (; o && ((o = 0), l[0] && (a = 0)), a; )
                  try {
                    if (
                      ((n = 1),
                      r &&
                        (i =
                          2 & l[0]
                            ? r.return
                            : l[0]
                            ? r.throw || ((i = r.return) && i.call(r), 0)
                            : r.next) &&
                        !(i = i.call(r, l[1])).done)
                    )
                      return i;
                    switch (((r = 0), i && (l = [2 & l[0], i.value]), l[0])) {
                      case 0:
                      case 1:
                        i = l;
                        break;
                      case 4:
                        return a.label++, { value: l[1], done: !1 };
                      case 5:
                        a.label++, (r = l[1]), (l = [0]);
                        continue;
                      case 7:
                        (l = a.ops.pop()), a.trys.pop();
                        continue;
                      default:
                        if (
                          !(i = (i = a.trys).length > 0 && i[i.length - 1]) &&
                          (6 === l[0] || 2 === l[0])
                        ) {
                          a = 0;
                          continue;
                        }
                        if (
                          3 === l[0] &&
                          (!i || (l[1] > i[0] && l[1] < i[3]))
                        ) {
                          a.label = l[1];
                          break;
                        }
                        if (6 === l[0] && a.label < i[1]) {
                          (a.label = i[1]), (i = l);
                          break;
                        }
                        if (i && a.label < i[2]) {
                          (a.label = i[2]), a.ops.push(l);
                          break;
                        }
                        i[2] && a.ops.pop(), a.trys.pop();
                        continue;
                    }
                    l = t.call(e, a);
                  } catch (e) {
                    (l = [6, e]), (r = 0);
                  } finally {
                    n = i = 0;
                  }
                if (5 & l[0]) throw l[1];
                return { value: l[0] ? l[1] : void 0, done: !0 };
              };
            }
          }),
          (g = function (e, t, n) {
            if (n || 2 == arguments.length)
              for (var r, i = 0, a = t.length; i < a; i++)
                (!r && i in t) ||
                  (r || (r = Array.prototype.slice.call(t, 0, i)),
                  (r[i] = t[i]));
            return e.concat(r || Array.prototype.slice.call(t));
          }),
          (b = (function (e) {
            function t() {
              var t = (null !== e && e.apply(this, arguments)) || this;
              return (t.isHandledError = !0), t;
            }
            return d(t, e), t;
          })(Error)),
          ((y = e || (e = {})).Cover = "cover"),
          (y.Contain = "contain"),
          (y.Fill = "fill"),
          (y.FitWidth = "fitWidth"),
          (y.FitHeight = "fitHeight"),
          (y.None = "none"),
          (y.ScaleDown = "scaleDown"),
          (y.Layout = "layout"),
          ((w = t || (t = {})).Center = "center"),
          (w.TopLeft = "topLeft"),
          (w.TopCenter = "topCenter"),
          (w.TopRight = "topRight"),
          (w.CenterLeft = "centerLeft"),
          (w.CenterRight = "centerRight"),
          (w.BottomLeft = "bottomLeft"),
          (w.BottomCenter = "bottomCenter"),
          (w.BottomRight = "bottomRight"),
          (_ = (function () {
            function n(n) {
              var r, i, a, o, s, u, l;
              (this.fit =
                null != (r = null == n ? void 0 : n.fit) ? r : e.Contain),
                (this.alignment =
                  null != (i = null == n ? void 0 : n.alignment)
                    ? i
                    : t.Center),
                (this.layoutScaleFactor =
                  null != (a = null == n ? void 0 : n.layoutScaleFactor)
                    ? a
                    : 1),
                (this.minX = null != (o = null == n ? void 0 : n.minX) ? o : 0),
                (this.minY = null != (s = null == n ? void 0 : n.minY) ? s : 0),
                (this.maxX = null != (u = null == n ? void 0 : n.maxX) ? u : 0),
                (this.maxY = null != (l = null == n ? void 0 : n.maxY) ? l : 0);
            }
            return (
              (n.new = function (e) {
                var t = e.fit,
                  r = e.alignment,
                  i = e.minX,
                  a = e.minY,
                  o = e.maxX,
                  s = e.maxY;
                return (
                  console.warn(
                    "This function is deprecated: please use `new Layout({})` instead"
                  ),
                  new n({
                    fit: t,
                    alignment: r,
                    minX: i,
                    minY: a,
                    maxX: o,
                    maxY: s,
                  })
                );
              }),
              (n.prototype.copyWith = function (e) {
                var t = e.fit,
                  r = e.alignment,
                  i = e.layoutScaleFactor,
                  a = e.minX,
                  o = e.minY,
                  s = e.maxX,
                  u = e.maxY;
                return new n({
                  fit: null != t ? t : this.fit,
                  alignment: null != r ? r : this.alignment,
                  layoutScaleFactor: null != i ? i : this.layoutScaleFactor,
                  minX: null != a ? a : this.minX,
                  minY: null != o ? o : this.minY,
                  maxX: null != s ? s : this.maxX,
                  maxY: null != u ? u : this.maxY,
                });
              }),
              (n.prototype.runtimeFit = function (t) {
                var n;
                return this.cachedRuntimeFit
                  ? this.cachedRuntimeFit
                  : ((n =
                      this.fit === e.Cover
                        ? t.Fit.cover
                        : this.fit === e.Contain
                        ? t.Fit.contain
                        : this.fit === e.Fill
                        ? t.Fit.fill
                        : this.fit === e.FitWidth
                        ? t.Fit.fitWidth
                        : this.fit === e.FitHeight
                        ? t.Fit.fitHeight
                        : this.fit === e.ScaleDown
                        ? t.Fit.scaleDown
                        : this.fit === e.Layout
                        ? t.Fit.layout
                        : t.Fit.none),
                    (this.cachedRuntimeFit = n),
                    n);
              }),
              (n.prototype.runtimeAlignment = function (e) {
                var n;
                return this.cachedRuntimeAlignment
                  ? this.cachedRuntimeAlignment
                  : ((n =
                      this.alignment === t.TopLeft
                        ? e.Alignment.topLeft
                        : this.alignment === t.TopCenter
                        ? e.Alignment.topCenter
                        : this.alignment === t.TopRight
                        ? e.Alignment.topRight
                        : this.alignment === t.CenterLeft
                        ? e.Alignment.centerLeft
                        : this.alignment === t.CenterRight
                        ? e.Alignment.centerRight
                        : this.alignment === t.BottomLeft
                        ? e.Alignment.bottomLeft
                        : this.alignment === t.BottomCenter
                        ? e.Alignment.bottomCenter
                        : this.alignment === t.BottomRight
                        ? e.Alignment.bottomRight
                        : e.Alignment.center),
                    (this.cachedRuntimeAlignment = n),
                    n);
              }),
              n
            );
          })()),
          (A = (function () {
            function e() {}
            return (
              (e.loadRuntime = function () {
                u.default({
                  locateFile: function () {
                    return e.wasmURL;
                  },
                })
                  .then(function (t) {
                    var n;
                    for (e.runtime = t; e.callBackQueue.length > 0; )
                      null == (n = e.callBackQueue.shift()) || n(e.runtime);
                  })
                  .catch(function (t) {
                    var n = {
                      message:
                        (null == t ? void 0 : t.message) || "Unknown error",
                      type: (null == t ? void 0 : t.name) || "Error",
                      wasmError:
                        t instanceof WebAssembly.CompileError ||
                        t instanceof WebAssembly.RuntimeError,
                      originalError: t,
                    };
                    console.debug("Rive WASM load error details:", n);
                    var r = "https://cdn.jsdelivr.net/npm/"
                      .concat(l.name, "@")
                      .concat(l.version, "/rive_fallback.wasm");
                    e.wasmURL.toLowerCase() !== r
                      ? (console.warn(
                          "Failed to load WASM from "
                            .concat(e.wasmURL, " (")
                            .concat(n.message, "), trying jsdelivr as a backup")
                        ),
                        e.setWasmUrl(r),
                        e.loadRuntime())
                      : console.error(
                          [
                            "Could not load Rive WASM file from "
                              .concat(e.wasmURL, " or ")
                              .concat(r, "."),
                            "Possible reasons:",
                            "- Network connection is down",
                            "- WebAssembly is not supported in this environment",
                            "- The WASM file is corrupted or incompatible",
                            "\nError details:",
                            "- Type: ".concat(n.type),
                            "- Message: ".concat(n.message),
                            "- WebAssembly-specific error: ".concat(
                              n.wasmError
                            ),
                            "\nTo resolve, you may need to:",
                            "1. Check your network connection",
                            "2. Set a new WASM source via RuntimeLoader.setWasmUrl()",
                            "3. Call RuntimeLoader.loadRuntime() again",
                          ].join("\n")
                        );
                  });
              }),
              (e.getInstance = function (t) {
                e.isLoading || ((e.isLoading = !0), e.loadRuntime()),
                  e.runtime ? t(e.runtime) : e.callBackQueue.push(t);
              }),
              (e.awaitInstance = function () {
                return new Promise(function (t) {
                  return e.getInstance(function (e) {
                    return t(e);
                  });
                });
              }),
              (e.setWasmUrl = function (t) {
                e.wasmURL = t;
              }),
              (e.getWasmUrl = function () {
                return e.wasmURL;
              }),
              (e.isLoading = !1),
              (e.callBackQueue = []),
              (e.wasmURL = "https://unpkg.com/"
                .concat(l.name, "@")
                .concat(l.version, "/rive.wasm")),
              e
            );
          })()),
          ((C = n || (n = {}))[(C.Number = 56)] = "Number"),
          (C[(C.Trigger = 58)] = "Trigger"),
          (C[(C.Boolean = 59)] = "Boolean"),
          (M = (function () {
            function e(e, t) {
              (this.type = e), (this.runtimeInput = t);
            }
            return (
              Object.defineProperty(e.prototype, "name", {
                get: function () {
                  return this.runtimeInput.name;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(e.prototype, "value", {
                get: function () {
                  return this.runtimeInput.value;
                },
                set: function (e) {
                  this.runtimeInput.value = e;
                },
                enumerable: !1,
                configurable: !0,
              }),
              (e.prototype.fire = function () {
                this.type === n.Trigger && this.runtimeInput.fire();
              }),
              (e.prototype.delete = function () {
                this.runtimeInput = null;
              }),
              e
            );
          })()),
          ((E = r || (r = {}))[(E.General = 128)] = "General"),
          (E[(E.OpenUrl = 131)] = "OpenUrl"),
          (P = (function () {
            function e(e, t, n, r) {
              (this.stateMachine = e),
                (this.playing = n),
                (this.artboard = r),
                (this.inputs = []),
                (this.instance = new t.StateMachineInstance(e, r)),
                this.initInputs(t);
            }
            return (
              Object.defineProperty(e.prototype, "name", {
                get: function () {
                  return this.stateMachine.name;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(e.prototype, "statesChanged", {
                get: function () {
                  for (
                    var e = [], t = 0;
                    t < this.instance.stateChangedCount();
                    t++
                  )
                    e.push(this.instance.stateChangedNameByIndex(t));
                  return e;
                },
                enumerable: !1,
                configurable: !0,
              }),
              (e.prototype.advance = function (e) {
                this.instance.advance(e);
              }),
              (e.prototype.advanceAndApply = function (e) {
                this.instance.advanceAndApply(e);
              }),
              (e.prototype.reportedEventCount = function () {
                return this.instance.reportedEventCount();
              }),
              (e.prototype.reportedEventAt = function (e) {
                return this.instance.reportedEventAt(e);
              }),
              (e.prototype.initInputs = function (e) {
                for (var t = 0; t < this.instance.inputCount(); t++) {
                  var n = this.instance.input(t);
                  this.inputs.push(this.mapRuntimeInput(n, e));
                }
              }),
              (e.prototype.mapRuntimeInput = function (e, t) {
                return e.type === t.SMIInput.bool
                  ? new M(n.Boolean, e.asBool())
                  : e.type === t.SMIInput.number
                  ? new M(n.Number, e.asNumber())
                  : e.type === t.SMIInput.trigger
                  ? new M(n.Trigger, e.asTrigger())
                  : void 0;
              }),
              (e.prototype.cleanup = function () {
                this.inputs.forEach(function (e) {
                  e.delete();
                }),
                  (this.inputs.length = 0),
                  this.instance.delete();
              }),
              (e.prototype.bindViewModelInstance = function (e) {
                null != e.runtimeInstance &&
                  this.instance.bindViewModelInstance(e.runtimeInstance);
              }),
              e
            );
          })()),
          (I = (function () {
            function e(e, t, n, r, i) {
              void 0 === r && (r = []),
                void 0 === i && (i = []),
                (this.runtime = e),
                (this.artboard = t),
                (this.eventManager = n),
                (this.animations = r),
                (this.stateMachines = i);
            }
            return (
              (e.prototype.add = function (e, t, n) {
                if ((void 0 === n && (n = !0), 0 === (e = Q(e)).length))
                  this.animations.forEach(function (e) {
                    return (e.playing = t);
                  }),
                    this.stateMachines.forEach(function (e) {
                      return (e.playing = t);
                    });
                else
                  for (
                    var r = this.animations.map(function (e) {
                        return e.name;
                      }),
                      a = this.stateMachines.map(function (e) {
                        return e.name;
                      }),
                      o = 0;
                    o < e.length;
                    o++
                  ) {
                    var s = r.indexOf(e[o]),
                      u = a.indexOf(e[o]);
                    if (s >= 0 || u >= 0)
                      s >= 0
                        ? (this.animations[s].playing = t)
                        : (this.stateMachines[u].playing = t);
                    else {
                      var l = this.artboard.animationByName(e[o]);
                      if (l) {
                        var f = new c.Animation(
                          l,
                          this.artboard,
                          this.runtime,
                          t
                        );
                        f.advance(0), f.apply(1), this.animations.push(f);
                      } else {
                        var h = this.artboard.stateMachineByName(e[o]);
                        if (h) {
                          var d = new P(h, this.runtime, t, this.artboard);
                          this.stateMachines.push(d);
                        }
                      }
                    }
                  }
                return (
                  n &&
                    (t
                      ? this.eventManager.fire({
                          type: i.Play,
                          data: this.playing,
                        })
                      : this.eventManager.fire({
                          type: i.Pause,
                          data: this.paused,
                        })),
                  t ? this.playing : this.paused
                );
              }),
              (e.prototype.initLinearAnimations = function (e, t) {
                for (
                  var n = this.animations.map(function (e) {
                      return e.name;
                    }),
                    r = 0;
                  r < e.length;
                  r++
                ) {
                  var i = n.indexOf(e[r]);
                  if (i >= 0) this.animations[i].playing = t;
                  else {
                    var a = this.artboard.animationByName(e[r]);
                    if (a) {
                      var o = new c.Animation(
                        a,
                        this.artboard,
                        this.runtime,
                        t
                      );
                      o.advance(0), o.apply(1), this.animations.push(o);
                    } else
                      console.error(
                        "Animation with name ".concat(e[r], " not found.")
                      );
                  }
                }
              }),
              (e.prototype.initStateMachines = function (e, t) {
                for (
                  var n = this.stateMachines.map(function (e) {
                      return e.name;
                    }),
                    r = 0;
                  r < e.length;
                  r++
                ) {
                  var i = n.indexOf(e[r]);
                  if (i >= 0) this.stateMachines[i].playing = t;
                  else {
                    var a = this.artboard.stateMachineByName(e[r]);
                    if (a) {
                      var o = new P(a, this.runtime, t, this.artboard);
                      this.stateMachines.push(o), t || o.advanceAndApply(0);
                    } else
                      console.warn(
                        "State Machine with name ".concat(e[r], " not found.")
                      ),
                        this.initLinearAnimations([e[r]], t);
                  }
                }
              }),
              (e.prototype.play = function (e) {
                return this.add(e, !0);
              }),
              (e.prototype.pause = function (e) {
                return this.add(e, !1);
              }),
              (e.prototype.scrub = function (e, t) {
                var n = this.animations.filter(function (t) {
                  return e.includes(t.name);
                });
                return (
                  n.forEach(function (e) {
                    return (e.scrubTo = t);
                  }),
                  n.map(function (e) {
                    return e.name;
                  })
                );
              }),
              Object.defineProperty(e.prototype, "playing", {
                get: function () {
                  return this.animations
                    .filter(function (e) {
                      return e.playing;
                    })
                    .map(function (e) {
                      return e.name;
                    })
                    .concat(
                      this.stateMachines
                        .filter(function (e) {
                          return e.playing;
                        })
                        .map(function (e) {
                          return e.name;
                        })
                    );
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(e.prototype, "paused", {
                get: function () {
                  return this.animations
                    .filter(function (e) {
                      return !e.playing;
                    })
                    .map(function (e) {
                      return e.name;
                    })
                    .concat(
                      this.stateMachines
                        .filter(function (e) {
                          return !e.playing;
                        })
                        .map(function (e) {
                          return e.name;
                        })
                    );
                },
                enumerable: !1,
                configurable: !0,
              }),
              (e.prototype.stop = function (e) {
                var t = this;
                e = Q(e);
                var n = [];
                if (0 === e.length)
                  (n = this.animations
                    .map(function (e) {
                      return e.name;
                    })
                    .concat(
                      this.stateMachines.map(function (e) {
                        return e.name;
                      })
                    )),
                    this.animations.forEach(function (e) {
                      return e.cleanup();
                    }),
                    this.stateMachines.forEach(function (e) {
                      return e.cleanup();
                    }),
                    this.animations.splice(0, this.animations.length),
                    this.stateMachines.splice(0, this.stateMachines.length);
                else {
                  var r = this.animations.filter(function (t) {
                    return e.includes(t.name);
                  });
                  r.forEach(function (e) {
                    e.cleanup(),
                      t.animations.splice(t.animations.indexOf(e), 1);
                  });
                  var a = this.stateMachines.filter(function (t) {
                    return e.includes(t.name);
                  });
                  a.forEach(function (e) {
                    e.cleanup(),
                      t.stateMachines.splice(t.stateMachines.indexOf(e), 1);
                  }),
                    (n = r
                      .map(function (e) {
                        return e.name;
                      })
                      .concat(
                        a.map(function (e) {
                          return e.name;
                        })
                      ));
                }
                return this.eventManager.fire({ type: i.Stop, data: n }), n;
              }),
              Object.defineProperty(e.prototype, "isPlaying", {
                get: function () {
                  return (
                    this.animations.reduce(function (e, t) {
                      return e || t.playing;
                    }, !1) ||
                    this.stateMachines.reduce(function (e, t) {
                      return e || t.playing;
                    }, !1)
                  );
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(e.prototype, "isPaused", {
                get: function () {
                  return (
                    !this.isPlaying &&
                    (this.animations.length > 0 ||
                      this.stateMachines.length > 0)
                  );
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(e.prototype, "isStopped", {
                get: function () {
                  return (
                    0 === this.animations.length &&
                    0 === this.stateMachines.length
                  );
                },
                enumerable: !1,
                configurable: !0,
              }),
              (e.prototype.atLeastOne = function (e, t) {
                var n;
                return (
                  void 0 === t && (t = !0),
                  0 === this.animations.length &&
                    0 === this.stateMachines.length &&
                    (this.artboard.animationCount() > 0
                      ? this.add(
                          [(n = this.artboard.animationByIndex(0).name)],
                          e,
                          t
                        )
                      : this.artboard.stateMachineCount() > 0 &&
                        this.add(
                          [(n = this.artboard.stateMachineByIndex(0).name)],
                          e,
                          t
                        )),
                  n
                );
              }),
              (e.prototype.handleLooping = function () {
                for (
                  var e = 0,
                    t = this.animations.filter(function (e) {
                      return e.playing;
                    });
                  e < t.length;
                  e++
                ) {
                  var n = t[e];
                  0 === n.loopValue && n.loopCount
                    ? ((n.loopCount = 0), this.stop(n.name))
                    : 1 === n.loopValue && n.loopCount
                    ? (this.eventManager.fire({
                        type: i.Loop,
                        data: { animation: n.name, type: a.Loop },
                      }),
                      (n.loopCount = 0))
                    : 2 === n.loopValue &&
                      n.loopCount > 1 &&
                      (this.eventManager.fire({
                        type: i.Loop,
                        data: { animation: n.name, type: a.PingPong },
                      }),
                      (n.loopCount = 0));
                }
              }),
              (e.prototype.handleStateChanges = function () {
                for (
                  var e = [],
                    t = 0,
                    n = this.stateMachines.filter(function (e) {
                      return e.playing;
                    });
                  t < n.length;
                  t++
                ) {
                  var r = n[t];
                  e.push.apply(e, r.statesChanged);
                }
                e.length > 0 &&
                  this.eventManager.fire({ type: i.StateChange, data: e });
              }),
              (e.prototype.handleAdvancing = function (e) {
                this.eventManager.fire({ type: i.Advance, data: e });
              }),
              e
            );
          })()),
          ((L = i || (i = {})).Load = "load"),
          (L.LoadError = "loaderror"),
          (L.Play = "play"),
          (L.Pause = "pause"),
          (L.Stop = "stop"),
          (L.Loop = "loop"),
          (L.Draw = "draw"),
          (L.Advance = "advance"),
          (L.StateChange = "statechange"),
          (L.RiveEvent = "riveevent"),
          (L.AudioStatusChange = "audiostatuschange"),
          ((F = a || (a = {})).OneShot = "oneshot"),
          (F.Loop = "loop"),
          (F.PingPong = "pingpong"),
          (x = (function () {
            function e(e) {
              void 0 === e && (e = []), (this.listeners = e);
            }
            return (
              (e.prototype.getListeners = function (e) {
                return this.listeners.filter(function (t) {
                  return t.type === e;
                });
              }),
              (e.prototype.add = function (e) {
                this.listeners.includes(e) || this.listeners.push(e);
              }),
              (e.prototype.remove = function (e) {
                for (var t = 0; t < this.listeners.length; t++) {
                  var n = this.listeners[t];
                  if (n.type === e.type && n.callback === e.callback) {
                    this.listeners.splice(t, 1);
                    break;
                  }
                }
              }),
              (e.prototype.removeAll = function (e) {
                var t = this;
                e
                  ? this.listeners
                      .filter(function (t) {
                        return t.type === e;
                      })
                      .forEach(function (e) {
                        return t.remove(e);
                      })
                  : this.listeners.splice(0, this.listeners.length);
              }),
              (e.prototype.fire = function (e) {
                this.getListeners(e.type).forEach(function (t) {
                  return t.callback(e);
                });
              }),
              e
            );
          })()),
          (R = (function () {
            function e(e) {
              (this.eventManager = e), (this.queue = []);
            }
            return (
              (e.prototype.add = function (e) {
                this.queue.push(e);
              }),
              (e.prototype.process = function () {
                for (; this.queue.length > 0; ) {
                  var e = this.queue.shift();
                  (null == e ? void 0 : e.action) && e.action(),
                    (null == e ? void 0 : e.event) &&
                      this.eventManager.fire(e.event);
                }
              }),
              e
            );
          })()),
          ((S = o || (o = {}))[(S.AVAILABLE = 0)] = "AVAILABLE"),
          (S[(S.UNAVAILABLE = 1)] = "UNAVAILABLE"),
          (k = new ((function (e) {
            function t() {
              var t = (null !== e && e.apply(this, arguments)) || this;
              return (
                (t._started = !1),
                (t._enabled = !1),
                (t._status = o.UNAVAILABLE),
                t
              );
            }
            return (
              d(t, e),
              (t.prototype.delay = function (e) {
                return m(this, void 0, void 0, function () {
                  return v(this, function (t) {
                    return [
                      2,
                      new Promise(function (t) {
                        return setTimeout(t, e);
                      }),
                    ];
                  });
                });
              }),
              (t.prototype.timeout = function () {
                return m(this, void 0, void 0, function () {
                  return v(this, function (e) {
                    return [
                      2,
                      new Promise(function (e, t) {
                        return setTimeout(t, 50);
                      }),
                    ];
                  });
                });
              }),
              (t.prototype.reportToListeners = function () {
                this.fire({ type: i.AudioStatusChange }), this.removeAll();
              }),
              (t.prototype.enableAudio = function () {
                return m(this, void 0, void 0, function () {
                  return v(this, function (e) {
                    return (
                      this._enabled ||
                        ((this._enabled = !0),
                        (this._status = o.AVAILABLE),
                        this.reportToListeners()),
                      [2]
                    );
                  });
                });
              }),
              (t.prototype.testAudio = function () {
                return m(this, void 0, void 0, function () {
                  return v(this, function (e) {
                    switch (e.label) {
                      case 0:
                        if (
                          this._status !== o.UNAVAILABLE ||
                          null === this._audioContext
                        )
                          return [3, 4];
                        e.label = 1;
                      case 1:
                        return (
                          e.trys.push([1, 3, , 4]),
                          [
                            4,
                            Promise.race([
                              this._audioContext.resume(),
                              this.timeout(),
                            ]),
                          ]
                        );
                      case 2:
                        return e.sent(), this.enableAudio(), [3, 4];
                      case 3:
                        return e.sent(), [3, 4];
                      case 4:
                        return [2];
                    }
                  });
                });
              }),
              (t.prototype._establishAudio = function () {
                return m(this, void 0, void 0, function () {
                  return v(this, function (e) {
                    switch (e.label) {
                      case 0:
                        if (this._started) return [3, 5];
                        if (
                          ((this._started = !0), "undefined" != typeof window)
                        )
                          return [3, 1];
                        return this.enableAudio(), [3, 5];
                      case 1:
                        (this._audioContext = new AudioContext()),
                          this.listenForUserAction(),
                          (e.label = 2);
                      case 2:
                        if (this._status !== o.UNAVAILABLE) return [3, 5];
                        return [4, this.testAudio()];
                      case 3:
                        return e.sent(), [4, this.delay(1e3)];
                      case 4:
                        return e.sent(), [3, 2];
                      case 5:
                        return [2];
                    }
                  });
                });
              }),
              (t.prototype.listenForUserAction = function () {
                var e = this;
                document.addEventListener(
                  "pointerdown",
                  function () {
                    return m(e, void 0, void 0, function () {
                      return v(this, function (e) {
                        return this.enableAudio(), [2];
                      });
                    });
                  },
                  { once: !0 }
                );
              }),
              (t.prototype.establishAudio = function () {
                return m(this, void 0, void 0, function () {
                  return v(this, function (e) {
                    return this._establishAudio(), [2];
                  });
                });
              }),
              Object.defineProperty(t.prototype, "systemVolume", {
                get: function () {
                  return this._status === o.UNAVAILABLE
                    ? (this.testAudio(), 0)
                    : 1;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(t.prototype, "status", {
                get: function () {
                  return this._status;
                },
                enumerable: !1,
                configurable: !0,
              }),
              t
            );
          })(x))()),
          (T = (function () {
            function e() {}
            return (
              (e.prototype.observe = function () {}),
              (e.prototype.unobserve = function () {}),
              (e.prototype.disconnect = function () {}),
              e
            );
          })()),
          (j = globalThis.ResizeObserver || T),
          (O = new ((function () {
            function e() {
              var e = this;
              (this._elementsMap = new Map()),
                (this._onObservedEntry = function (t) {
                  var n = e._elementsMap.get(t.target);
                  null !== n
                    ? n.onResize(
                        0 == t.target.clientWidth || 0 == t.target.clientHeight
                      )
                    : e._resizeObserver.unobserve(t.target);
                }),
                (this._onObserved = function (t) {
                  t.forEach(e._onObservedEntry);
                }),
                (this._resizeObserver = new j(this._onObserved));
            }
            return (
              (e.prototype.add = function (e, t) {
                var n = { onResize: t, element: e };
                return (
                  this._elementsMap.set(e, n),
                  this._resizeObserver.observe(e),
                  n
                );
              }),
              (e.prototype.remove = function (e) {
                this._resizeObserver.unobserve(e.element),
                  this._elementsMap.delete(e.element);
              }),
              e
            );
          })())()),
          (W = (function () {
            function e(e) {
              (this.enableRiveAssetCDN = !0),
                (this.referenceCount = 0),
                (this.destroyed = !1),
                (this.src = e.src),
                (this.buffer = e.buffer),
                e.assetLoader && (this.assetLoader = e.assetLoader),
                (this.enableRiveAssetCDN =
                  "boolean" != typeof e.enableRiveAssetCDN ||
                  e.enableRiveAssetCDN),
                (this.eventManager = new x()),
                e.onLoad && this.on(i.Load, e.onLoad),
                e.onLoadError && this.on(i.LoadError, e.onLoadError);
            }
            return (
              (e.prototype.initData = function () {
                return m(this, void 0, void 0, function () {
                  var t, n, r, a;
                  return v(this, function (o) {
                    switch (o.label) {
                      case 0:
                        if (!this.src) return [3, 2];
                        return (t = this), [4, Z(this.src)];
                      case 1:
                        (t.buffer = o.sent()), (o.label = 2);
                      case 2:
                        if (this.destroyed) return [2];
                        return (
                          this.assetLoader &&
                            (n = new f.CustomFileAssetLoaderWrapper(
                              this.runtime,
                              this.assetLoader
                            ).assetLoader),
                          (r = this),
                          [
                            4,
                            this.runtime.load(
                              new Uint8Array(this.buffer),
                              n,
                              this.enableRiveAssetCDN
                            ),
                          ]
                        );
                      case 3:
                        if (((r.file = o.sent()), this.destroyed))
                          return (
                            null == (a = this.file) || a.delete(),
                            (this.file = null),
                            [2]
                          );
                        return (
                          null !== this.file
                            ? this.eventManager.fire({
                                type: i.Load,
                                data: this,
                              })
                            : this.fireLoadError(e.fileLoadErrorMessage),
                          [2]
                        );
                    }
                  });
                });
              }),
              (e.prototype.init = function () {
                return m(this, void 0, void 0, function () {
                  var t, n;
                  return v(this, function (r) {
                    switch (r.label) {
                      case 0:
                        if (!this.src && !this.buffer)
                          return this.fireLoadError(e.missingErrorMessage), [2];
                        r.label = 1;
                      case 1:
                        return (
                          r.trys.push([1, 4, , 5]),
                          (t = this),
                          [4, A.awaitInstance()]
                        );
                      case 2:
                        if (((t.runtime = r.sent()), this.destroyed))
                          return [2];
                        return [4, this.initData()];
                      case 3:
                        return r.sent(), [3, 5];
                      case 4:
                        return (
                          (n = r.sent()),
                          this.fireLoadError(
                            n instanceof Error
                              ? n.message
                              : e.fileLoadErrorMessage
                          ),
                          [3, 5]
                        );
                      case 5:
                        return [2];
                    }
                  });
                });
              }),
              (e.prototype.fireLoadError = function (e) {
                throw (
                  (this.eventManager.fire({ type: i.LoadError, data: e }),
                  Error(e))
                );
              }),
              (e.prototype.on = function (e, t) {
                this.eventManager.add({ type: e, callback: t });
              }),
              (e.prototype.off = function (e, t) {
                this.eventManager.remove({ type: e, callback: t });
              }),
              (e.prototype.cleanup = function () {
                var e;
                (this.referenceCount -= 1),
                  this.referenceCount <= 0 &&
                    (this.removeAllRiveEventListeners(),
                    null == (e = this.file) || e.delete(),
                    (this.file = null),
                    (this.destroyed = !0));
              }),
              (e.prototype.removeAllRiveEventListeners = function (e) {
                this.eventManager.removeAll(e);
              }),
              (e.prototype.getInstance = function () {
                if (null !== this.file)
                  return (this.referenceCount += 1), this.file;
              }),
              (e.missingErrorMessage =
                "Rive source file or data buffer required"),
              (e.fileLoadErrorMessage = "The file failed to load"),
              e
            );
          })()),
          (B = (function () {
            function t(e) {
              var t,
                n = this;
              (this.loaded = !1),
                (this.destroyed = !1),
                (this._observed = null),
                (this.readyForPlaying = !1),
                (this.artboard = null),
                (this.eventCleanup = null),
                (this.shouldDisableRiveListeners = !1),
                (this.automaticallyHandleEvents = !1),
                (this.enableRiveAssetCDN = !0),
                (this._volume = 1),
                (this._artboardWidth = void 0),
                (this._artboardHeight = void 0),
                (this._devicePixelRatioUsed = 1),
                (this._hasZeroSize = !1),
                (this._audioEventListener = null),
                (this._boundDraw = null),
                (this._viewModelInstance = null),
                (this._dataEnums = null),
                (this.durations = []),
                (this.frameTimes = []),
                (this.frameCount = 0),
                (this.isTouchScrollEnabled = !1),
                (this.onCanvasResize = function (e) {
                  var t = n._hasZeroSize !== e;
                  (n._hasZeroSize = e),
                    e
                      ? (n._layout.maxX && n._layout.maxY) || n.resizeToCanvas()
                      : t && n.resizeDrawingSurfaceToCanvas();
                }),
                (this.renderSecondTimer = 0),
                (this._boundDraw = this.draw.bind(this)),
                (this.canvas = e.canvas),
                e.canvas.constructor === HTMLCanvasElement &&
                  (this._observed = O.add(this.canvas, this.onCanvasResize)),
                (this.src = e.src),
                (this.buffer = e.buffer),
                (this.riveFile = e.riveFile),
                (this.layout = null != (t = e.layout) ? t : new _()),
                (this.shouldDisableRiveListeners =
                  !!e.shouldDisableRiveListeners),
                (this.isTouchScrollEnabled = !!e.isTouchScrollEnabled),
                (this.automaticallyHandleEvents =
                  !!e.automaticallyHandleEvents),
                (this.enableRiveAssetCDN =
                  void 0 === e.enableRiveAssetCDN || e.enableRiveAssetCDN),
                (this.eventManager = new x()),
                e.onLoad && this.on(i.Load, e.onLoad),
                e.onLoadError && this.on(i.LoadError, e.onLoadError),
                e.onPlay && this.on(i.Play, e.onPlay),
                e.onPause && this.on(i.Pause, e.onPause),
                e.onStop && this.on(i.Stop, e.onStop),
                e.onLoop && this.on(i.Loop, e.onLoop),
                e.onStateChange && this.on(i.StateChange, e.onStateChange),
                e.onAdvance && this.on(i.Advance, e.onAdvance),
                e.onload && !e.onLoad && this.on(i.Load, e.onload),
                e.onloaderror &&
                  !e.onLoadError &&
                  this.on(i.LoadError, e.onloaderror),
                e.onplay && !e.onPlay && this.on(i.Play, e.onplay),
                e.onpause && !e.onPause && this.on(i.Pause, e.onpause),
                e.onstop && !e.onStop && this.on(i.Stop, e.onstop),
                e.onloop && !e.onLoop && this.on(i.Loop, e.onloop),
                e.onstatechange &&
                  !e.onStateChange &&
                  this.on(i.StateChange, e.onstatechange),
                e.assetLoader && (this.assetLoader = e.assetLoader),
                (this.taskQueue = new R(this.eventManager)),
                this.init({
                  src: this.src,
                  buffer: this.buffer,
                  riveFile: this.riveFile,
                  autoplay: e.autoplay,
                  autoBind: e.autoBind,
                  animations: e.animations,
                  stateMachines: e.stateMachines,
                  artboard: e.artboard,
                  useOffscreenRenderer: e.useOffscreenRenderer,
                });
            }
            return (
              Object.defineProperty(t.prototype, "viewModelCount", {
                get: function () {
                  return this.file.viewModelCount();
                },
                enumerable: !1,
                configurable: !0,
              }),
              (t.new = function (e) {
                return (
                  console.warn(
                    "This function is deprecated: please use `new Rive({})` instead"
                  ),
                  new t(e)
                );
              }),
              (t.prototype.onSystemAudioChanged = function () {
                this.volume = this._volume;
              }),
              (t.prototype.init = function (e) {
                var n = this,
                  r = e.src,
                  i = e.buffer,
                  a = e.riveFile,
                  o = e.animations,
                  s = e.stateMachines,
                  u = e.artboard,
                  l = e.autoplay,
                  c = void 0 !== l && l,
                  f = e.useOffscreenRenderer,
                  h = void 0 !== f && f,
                  d = e.autoBind,
                  p = void 0 !== d && d;
                if (!this.destroyed) {
                  if (
                    ((this.src = r),
                    (this.buffer = i),
                    (this.riveFile = a),
                    !this.src && !this.buffer && !this.riveFile)
                  )
                    throw new b(t.missingErrorMessage);
                  var m = Q(o),
                    v = Q(s);
                  (this.loaded = !1),
                    (this.readyForPlaying = !1),
                    A.awaitInstance()
                      .then(function (e) {
                        n.destroyed ||
                          ((n.runtime = e),
                          n.removeRiveListeners(),
                          n.deleteRiveRenderer(),
                          (n.renderer = n.runtime.makeRenderer(n.canvas, h)),
                          n.canvas.width ||
                            n.canvas.height ||
                            n.resizeDrawingSurfaceToCanvas(),
                          n
                            .initData(u, m, v, c, p)
                            .then(function (e) {
                              if (e) return n.setupRiveListeners();
                            })
                            .catch(function (e) {
                              console.error(e);
                            }));
                      })
                      .catch(function (e) {
                        console.error(e);
                      });
                }
              }),
              (t.prototype.setupRiveListeners = function (e) {
                var t = this;
                if (
                  (this.eventCleanup && this.eventCleanup(),
                  !this.shouldDisableRiveListeners)
                ) {
                  var n = (this.animator.stateMachines || [])
                      .filter(function (e) {
                        return e.playing && t.runtime.hasListeners(e.instance);
                      })
                      .map(function (e) {
                        return e.instance;
                      }),
                    r = this.isTouchScrollEnabled;
                  e &&
                    "isTouchScrollEnabled" in e &&
                    (r = e.isTouchScrollEnabled),
                    (this.eventCleanup = (0, f.registerTouchInteractions)({
                      canvas: this.canvas,
                      artboard: this.artboard,
                      stateMachines: n,
                      renderer: this.renderer,
                      rive: this.runtime,
                      fit: this._layout.runtimeFit(this.runtime),
                      alignment: this._layout.runtimeAlignment(this.runtime),
                      isTouchScrollEnabled: r,
                      layoutScaleFactor: this._layout.layoutScaleFactor,
                    }));
                }
              }),
              (t.prototype.removeRiveListeners = function () {
                this.eventCleanup &&
                  (this.eventCleanup(), (this.eventCleanup = null));
              }),
              (t.prototype.initializeAudio = function () {
                var e,
                  t = this;
                k.status == o.UNAVAILABLE &&
                  (null == (e = this.artboard) ? void 0 : e.hasAudio) &&
                  null === this._audioEventListener &&
                  ((this._audioEventListener = {
                    type: i.AudioStatusChange,
                    callback: function () {
                      return t.onSystemAudioChanged();
                    },
                  }),
                  k.add(this._audioEventListener),
                  k.establishAudio());
              }),
              (t.prototype.initArtboardSize = function () {
                this.artboard &&
                  ((this._artboardWidth = this.artboard.width =
                    this._artboardWidth || this.artboard.width),
                  (this._artboardHeight = this.artboard.height =
                    this._artboardHeight || this.artboard.height));
              }),
              (t.prototype.initData = function (e, t, n, r, a) {
                return m(this, void 0, void 0, function () {
                  var o, s;
                  return v(this, function (u) {
                    switch (u.label) {
                      case 0:
                        if ((u.trys.push([0, 3, , 4]), null != this.riveFile))
                          return [3, 2];
                        return (
                          (this.riveFile = new W({
                            src: this.src,
                            buffer: this.buffer,
                            enableRiveAssetCDN: this.enableRiveAssetCDN,
                            assetLoader: this.assetLoader,
                          })),
                          [4, this.riveFile.init()]
                        );
                      case 1:
                        u.sent(), (u.label = 2);
                      case 2:
                        if (!this.riveFile) return [2, !1];
                        return (
                          (this.file = this.riveFile.getInstance()),
                          this.initArtboard(e, t, n, r, a),
                          this.initArtboardSize(),
                          this.initializeAudio(),
                          (this.loaded = !0),
                          this.eventManager.fire({
                            type: i.Load,
                            data: null != (s = this.src) ? s : "buffer",
                          }),
                          (this.readyForPlaying = !0),
                          this.taskQueue.process(),
                          this.drawFrame(),
                          [2, !0]
                        );
                      case 3:
                        var l;
                        return (
                          console.warn(
                            (o =
                              (l = u.sent()) && l.isHandledError
                                ? l.message
                                : "Problem loading file; may be corrupt!")
                          ),
                          this.eventManager.fire({
                            type: i.LoadError,
                            data: o,
                          }),
                          [2, Promise.reject(o)]
                        );
                      case 4:
                        return [2];
                    }
                  });
                });
              }),
              (t.prototype.initArtboard = function (e, t, n, r, a) {
                if (this.file) {
                  var o,
                    s = e
                      ? this.file.artboardByName(e)
                      : this.file.defaultArtboard();
                  if (!s) {
                    var u = "Invalid artboard name or no default artboard";
                    console.warn(u),
                      this.eventManager.fire({ type: i.LoadError, data: u });
                    return;
                  }
                  if (
                    ((this.artboard = s),
                    (s.volume = this._volume * k.systemVolume),
                    1 > this.artboard.animationCount())
                  ) {
                    var u = "Artboard has no animations";
                    throw (
                      (this.eventManager.fire({ type: i.LoadError, data: u }),
                      u)
                    );
                  }
                  if (
                    ((this.animator = new I(
                      this.runtime,
                      this.artboard,
                      this.eventManager
                    )),
                    t.length > 0 || n.length > 0
                      ? ((o = t.concat(n)),
                        this.animator.initLinearAnimations(t, r),
                        this.animator.initStateMachines(n, r))
                      : (o = [this.animator.atLeastOne(r, !1)]),
                    this.taskQueue.add({
                      event: { type: r ? i.Play : i.Pause, data: o },
                    }),
                    a)
                  ) {
                    var l = this.file.defaultArtboardViewModel(s);
                    if (null !== l) {
                      var c = l.defaultInstance();
                      if (null !== c) {
                        var f = new N(c, null);
                        this.bindViewModelInstance(f);
                      }
                    }
                  }
                }
              }),
              (t.prototype.drawFrame = function () {
                var e, t;
                (
                  null == (e = null == document ? void 0 : document.timeline)
                    ? void 0
                    : e.currentTime
                )
                  ? this.loaded &&
                    this.artboard &&
                    !this.frameRequestId &&
                    (this._boundDraw(document.timeline.currentTime),
                    null == (t = this.runtime) || t.resolveAnimationFrame())
                  : this.startRendering();
              }),
              (t.prototype.draw = function (e, t) {
                this.frameRequestId = null;
                var n,
                  a = performance.now();
                this.lastRenderTime || (this.lastRenderTime = e),
                  (this.renderSecondTimer += e - this.lastRenderTime),
                  this.renderSecondTimer > 5e3 &&
                    ((this.renderSecondTimer = 0), null == t || t());
                var o = (e - this.lastRenderTime) / 1e3;
                this.lastRenderTime = e;
                for (
                  var s = this.animator.animations
                      .filter(function (e) {
                        return e.playing || e.needsScrub;
                      })
                      .sort(function (e) {
                        return e.needsScrub ? -1 : 1;
                      }),
                    u = 0;
                  u < s.length;
                  u++
                ) {
                  var l = s[u];
                  l.advance(o),
                    l.instance.didLoop && (l.loopCount += 1),
                    l.apply(1);
                }
                for (
                  var c = this.animator.stateMachines.filter(function (e) {
                      return e.playing;
                    }),
                    h = 0;
                  h < c.length;
                  h++
                ) {
                  var d = c[h],
                    p = d.reportedEventCount();
                  if (p)
                    for (var m = 0; m < p; m++) {
                      var v = d.reportedEventAt(m);
                      if (v)
                        if (v.type === r.OpenUrl) {
                          if (
                            (this.eventManager.fire({
                              type: i.RiveEvent,
                              data: v,
                            }),
                            this.automaticallyHandleEvents)
                          ) {
                            var g = document.createElement("a"),
                              b = v.url,
                              y = v.target,
                              w = (0, f.sanitizeUrl)(b);
                            b && g.setAttribute("href", w),
                              y && g.setAttribute("target", y),
                              w && w !== f.BLANK_URL && g.click();
                          }
                        } else
                          this.eventManager.fire({
                            type: i.RiveEvent,
                            data: v,
                          });
                    }
                  d.advanceAndApply(o);
                }
                0 == this.animator.stateMachines.length &&
                  this.artboard.advance(o);
                var _ = this.renderer;
                _.clear(),
                  _.save(),
                  this.alignRenderer(),
                  this._hasZeroSize || this.artboard.draw(_),
                  _.restore(),
                  _.flush(),
                  this.animator.handleLooping(),
                  this.animator.handleStateChanges(),
                  this.animator.handleAdvancing(o),
                  this.frameCount++;
                var A = performance.now();
                for (
                  this.frameTimes.push(A), this.durations.push(A - a);
                  this.frameTimes[0] <= A - 1e3;

                )
                  this.frameTimes.shift(), this.durations.shift();
                null == (n = this._viewModelInstance) || n.handleCallbacks(),
                  this.animator.isPlaying
                    ? this.startRendering()
                    : this.animator.isPaused
                    ? (this.lastRenderTime = 0)
                    : this.animator.isStopped && (this.lastRenderTime = 0);
              }),
              (t.prototype.alignRenderer = function () {
                var e = this.renderer,
                  t = this.runtime,
                  n = this._layout,
                  r = this.artboard;
                e.align(
                  n.runtimeFit(t),
                  n.runtimeAlignment(t),
                  { minX: n.minX, minY: n.minY, maxX: n.maxX, maxY: n.maxY },
                  r.bounds,
                  this._devicePixelRatioUsed * n.layoutScaleFactor
                );
              }),
              Object.defineProperty(t.prototype, "fps", {
                get: function () {
                  return this.durations.length;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(t.prototype, "frameTime", {
                get: function () {
                  return 0 === this.durations.length
                    ? 0
                    : (
                        this.durations.reduce(function (e, t) {
                          return e + t;
                        }, 0) / this.durations.length
                      ).toFixed(4);
                },
                enumerable: !1,
                configurable: !0,
              }),
              (t.prototype.cleanup = function () {
                var e, t;
                (this.destroyed = !0),
                  this.stopRendering(),
                  this.cleanupInstances(),
                  null !== this._observed && O.remove(this._observed),
                  this.removeRiveListeners(),
                  this.file &&
                    (null == (e = this.riveFile) || e.cleanup(),
                    (this.file = null)),
                  (this.riveFile = null),
                  this.deleteRiveRenderer(),
                  null !== this._audioEventListener &&
                    (k.remove(this._audioEventListener),
                    (this._audioEventListener = null)),
                  null == (t = this._viewModelInstance) || t.cleanup(),
                  (this._viewModelInstance = null),
                  (this._dataEnums = null);
              }),
              (t.prototype.deleteRiveRenderer = function () {
                var e;
                null == (e = this.renderer) || e.delete(),
                  (this.renderer = null);
              }),
              (t.prototype.cleanupInstances = function () {
                null !== this.eventCleanup && this.eventCleanup(),
                  this.stop(),
                  this.artboard &&
                    (this.artboard.delete(), (this.artboard = null));
              }),
              (t.prototype.retrieveTextRun = function (e) {
                if (!e) return void console.warn("No text run name provided");
                if (!this.artboard)
                  return void console.warn(
                    "Tried to access text run, but the Artboard is null"
                  );
                var t,
                  n = this.artboard.textRun(e);
                return (
                  n ||
                  void console.warn(
                    "Could not access a text run with name '"
                      .concat(e, "' in the '")
                      .concat(
                        null == (t = this.artboard) ? void 0 : t.name,
                        "' Artboard. Note that you must rename a text run node in the Rive editor to make it queryable at runtime."
                      )
                  )
                );
              }),
              (t.prototype.getTextRunValue = function (e) {
                var t = this.retrieveTextRun(e);
                return t ? t.text : void 0;
              }),
              (t.prototype.setTextRunValue = function (e, t) {
                var n = this.retrieveTextRun(e);
                n && (n.text = t);
              }),
              (t.prototype.play = function (e, t) {
                var n = this;
                if (((e = Q(e)), !this.readyForPlaying))
                  return void this.taskQueue.add({
                    action: function () {
                      return n.play(e, t);
                    },
                  });
                this.animator.play(e),
                  this.eventCleanup && this.eventCleanup(),
                  this.setupRiveListeners(),
                  this.startRendering();
              }),
              (t.prototype.pause = function (e) {
                var t = this;
                if (((e = Q(e)), !this.readyForPlaying))
                  return void this.taskQueue.add({
                    action: function () {
                      return t.pause(e);
                    },
                  });
                this.eventCleanup && this.eventCleanup(),
                  this.animator.pause(e);
              }),
              (t.prototype.scrub = function (e, t) {
                var n = this;
                if (((e = Q(e)), !this.readyForPlaying))
                  return void this.taskQueue.add({
                    action: function () {
                      return n.scrub(e, t);
                    },
                  });
                this.animator.scrub(e, t || 0), this.drawFrame();
              }),
              (t.prototype.stop = function (e) {
                var t = this;
                if (((e = Q(e)), !this.readyForPlaying))
                  return void this.taskQueue.add({
                    action: function () {
                      return t.stop(e);
                    },
                  });
                this.animator && this.animator.stop(e),
                  this.eventCleanup && this.eventCleanup();
              }),
              (t.prototype.reset = function (e) {
                var t,
                  n,
                  r = null == e ? void 0 : e.artboard,
                  i = Q(null == e ? void 0 : e.animations),
                  a = Q(null == e ? void 0 : e.stateMachines),
                  o = null != (t = null == e ? void 0 : e.autoplay) && t,
                  s = null != (n = null == e ? void 0 : e.autoBind) && n;
                this.cleanupInstances(),
                  this.initArtboard(r, i, a, o, s),
                  this.taskQueue.process();
              }),
              (t.prototype.load = function (e) {
                (this.file = null), this.stop(), this.init(e);
              }),
              Object.defineProperty(t.prototype, "layout", {
                get: function () {
                  return this._layout;
                },
                set: function (e) {
                  (this._layout = e),
                    (e.maxX && e.maxY) || this.resizeToCanvas(),
                    this.loaded && !this.animator.isPlaying && this.drawFrame();
                },
                enumerable: !1,
                configurable: !0,
              }),
              (t.prototype.resizeToCanvas = function () {
                this._layout = this.layout.copyWith({
                  minX: 0,
                  minY: 0,
                  maxX: this.canvas.width,
                  maxY: this.canvas.height,
                });
              }),
              (t.prototype.resizeDrawingSurfaceToCanvas = function (t) {
                if (this.canvas instanceof HTMLCanvasElement && window) {
                  var n = this.canvas.getBoundingClientRect(),
                    r = n.width,
                    i = n.height,
                    a = t || window.devicePixelRatio || 1;
                  if (
                    ((this.devicePixelRatioUsed = a),
                    (this.canvas.width = a * r),
                    (this.canvas.height = a * i),
                    this.resizeToCanvas(),
                    this.drawFrame(),
                    this.layout.fit === e.Layout)
                  ) {
                    var o = this._layout.layoutScaleFactor;
                    (this.artboard.width = r / o),
                      (this.artboard.height = i / o);
                  }
                }
              }),
              Object.defineProperty(t.prototype, "source", {
                get: function () {
                  return this.src;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(t.prototype, "activeArtboard", {
                get: function () {
                  return this.artboard ? this.artboard.name : "";
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(t.prototype, "animationNames", {
                get: function () {
                  if (!this.loaded || !this.artboard) return [];
                  for (
                    var e = [], t = 0;
                    t < this.artboard.animationCount();
                    t++
                  )
                    e.push(this.artboard.animationByIndex(t).name);
                  return e;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(t.prototype, "stateMachineNames", {
                get: function () {
                  if (!this.loaded || !this.artboard) return [];
                  for (
                    var e = [], t = 0;
                    t < this.artboard.stateMachineCount();
                    t++
                  )
                    e.push(this.artboard.stateMachineByIndex(t).name);
                  return e;
                },
                enumerable: !1,
                configurable: !0,
              }),
              (t.prototype.stateMachineInputs = function (e) {
                if (this.loaded) {
                  var t = this.animator.stateMachines.find(function (t) {
                    return t.name === e;
                  });
                  return null == t ? void 0 : t.inputs;
                }
              }),
              (t.prototype.retrieveInputAtPath = function (e, t) {
                if (!e)
                  return void console.warn(
                    "No input name provided for path '".concat(t, "'")
                  );
                if (!this.artboard)
                  return void console.warn(
                    "Tried to access input: '"
                      .concat(e, "', at path: '")
                      .concat(t, "', but the Artboard is null")
                  );
                var n = this.artboard.inputByPath(e, t);
                return (
                  n ||
                  void console.warn(
                    "Could not access an input with name: '"
                      .concat(e, "', at path:'")
                      .concat(t, "'")
                  )
                );
              }),
              (t.prototype.setBooleanStateAtPath = function (e, t, r) {
                var i = this.retrieveInputAtPath(e, r);
                i &&
                  (i.type === n.Boolean
                    ? (i.asBool().value = t)
                    : console.warn(
                        "Input with name: '"
                          .concat(e, "', at path:'")
                          .concat(r, "' is not a boolean")
                      ));
              }),
              (t.prototype.setNumberStateAtPath = function (e, t, r) {
                var i = this.retrieveInputAtPath(e, r);
                i &&
                  (i.type === n.Number
                    ? (i.asNumber().value = t)
                    : console.warn(
                        "Input with name: '"
                          .concat(e, "', at path:'")
                          .concat(r, "' is not a number")
                      ));
              }),
              (t.prototype.fireStateAtPath = function (e, t) {
                var r = this.retrieveInputAtPath(e, t);
                r &&
                  (r.type === n.Trigger
                    ? r.asTrigger().fire()
                    : console.warn(
                        "Input with name: '"
                          .concat(e, "', at path:'")
                          .concat(t, "' is not a trigger")
                      ));
              }),
              (t.prototype.retrieveTextAtPath = function (e, t) {
                if (!e)
                  return void console.warn(
                    "No text name provided for path '".concat(t, "'")
                  );
                if (!t)
                  return void console.warn(
                    "No path provided for text '".concat(e, "'")
                  );
                if (!this.artboard)
                  return void console.warn(
                    "Tried to access text: '"
                      .concat(e, "', at path: '")
                      .concat(t, "', but the Artboard is null")
                  );
                var n = this.artboard.textByPath(e, t);
                return (
                  n ||
                  void console.warn(
                    "Could not access text with name: '"
                      .concat(e, "', at path:'")
                      .concat(t, "'")
                  )
                );
              }),
              (t.prototype.getTextRunValueAtPath = function (e, t) {
                var n = this.retrieveTextAtPath(e, t);
                return n
                  ? n.text
                  : void console.warn(
                      "Could not get text with name: '"
                        .concat(e, "', at path:'")
                        .concat(t, "'")
                    );
              }),
              (t.prototype.setTextRunValueAtPath = function (e, t, n) {
                var r = this.retrieveTextAtPath(e, n);
                if (!r)
                  return void console.warn(
                    "Could not set text with name: '"
                      .concat(e, "', at path:'")
                      .concat(n, "'")
                  );
                r.text = t;
              }),
              Object.defineProperty(t.prototype, "playingStateMachineNames", {
                get: function () {
                  return this.loaded
                    ? this.animator.stateMachines
                        .filter(function (e) {
                          return e.playing;
                        })
                        .map(function (e) {
                          return e.name;
                        })
                    : [];
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(t.prototype, "playingAnimationNames", {
                get: function () {
                  return this.loaded
                    ? this.animator.animations
                        .filter(function (e) {
                          return e.playing;
                        })
                        .map(function (e) {
                          return e.name;
                        })
                    : [];
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(t.prototype, "pausedAnimationNames", {
                get: function () {
                  return this.loaded
                    ? this.animator.animations
                        .filter(function (e) {
                          return !e.playing;
                        })
                        .map(function (e) {
                          return e.name;
                        })
                    : [];
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(t.prototype, "pausedStateMachineNames", {
                get: function () {
                  return this.loaded
                    ? this.animator.stateMachines
                        .filter(function (e) {
                          return !e.playing;
                        })
                        .map(function (e) {
                          return e.name;
                        })
                    : [];
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(t.prototype, "isPlaying", {
                get: function () {
                  return this.animator.isPlaying;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(t.prototype, "isPaused", {
                get: function () {
                  return this.animator.isPaused;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(t.prototype, "isStopped", {
                get: function () {
                  return this.animator.isStopped;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(t.prototype, "bounds", {
                get: function () {
                  return this.artboard ? this.artboard.bounds : void 0;
                },
                enumerable: !1,
                configurable: !0,
              }),
              (t.prototype.on = function (e, t) {
                this.eventManager.add({ type: e, callback: t });
              }),
              (t.prototype.off = function (e, t) {
                this.eventManager.remove({ type: e, callback: t });
              }),
              (t.prototype.unsubscribe = function (e, t) {
                console.warn(
                  "This function is deprecated: please use `off()` instead."
                ),
                  this.off(e, t);
              }),
              (t.prototype.removeAllRiveEventListeners = function (e) {
                this.eventManager.removeAll(e);
              }),
              (t.prototype.unsubscribeAll = function (e) {
                console.warn(
                  "This function is deprecated: please use `removeAllRiveEventListeners()` instead."
                ),
                  this.removeAllRiveEventListeners(e);
              }),
              (t.prototype.stopRendering = function () {
                this.loaded &&
                  this.frameRequestId &&
                  (this.runtime.cancelAnimationFrame
                    ? this.runtime.cancelAnimationFrame(this.frameRequestId)
                    : cancelAnimationFrame(this.frameRequestId),
                  (this.frameRequestId = null));
              }),
              (t.prototype.startRendering = function () {
                this.loaded &&
                  this.artboard &&
                  !this.frameRequestId &&
                  (this.runtime.requestAnimationFrame
                    ? (this.frameRequestId = this.runtime.requestAnimationFrame(
                        this._boundDraw
                      ))
                    : (this.frameRequestId = requestAnimationFrame(
                        this._boundDraw
                      )));
              }),
              (t.prototype.enableFPSCounter = function (e) {
                this.runtime.enableFPSCounter(e);
              }),
              (t.prototype.disableFPSCounter = function () {
                this.runtime.disableFPSCounter();
              }),
              Object.defineProperty(t.prototype, "contents", {
                get: function () {
                  if (this.loaded) {
                    for (
                      var e = { artboards: [] }, t = 0;
                      t < this.file.artboardCount();
                      t++
                    ) {
                      for (
                        var n = this.file.artboardByIndex(t),
                          r = {
                            name: n.name,
                            animations: [],
                            stateMachines: [],
                          },
                          i = 0;
                        i < n.animationCount();
                        i++
                      ) {
                        var a = n.animationByIndex(i);
                        r.animations.push(a.name);
                      }
                      for (var o = 0; o < n.stateMachineCount(); o++) {
                        for (
                          var s = n.stateMachineByIndex(o),
                            u = s.name,
                            l = new this.runtime.StateMachineInstance(s, n),
                            c = [],
                            f = 0;
                          f < l.inputCount();
                          f++
                        ) {
                          var h = l.input(f);
                          c.push({ name: h.name, type: h.type });
                        }
                        r.stateMachines.push({ name: u, inputs: c });
                      }
                      e.artboards.push(r);
                    }
                    return e;
                  }
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(t.prototype, "volume", {
                get: function () {
                  return (
                    this.artboard &&
                      this.artboard.volume !== this._volume &&
                      (this._volume = this.artboard.volume),
                    this._volume
                  );
                },
                set: function (e) {
                  (this._volume = e),
                    this.artboard &&
                      (this.artboard.volume = e * k.systemVolume);
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(t.prototype, "artboardWidth", {
                get: function () {
                  var e;
                  return this.artboard
                    ? this.artboard.width
                    : null != (e = this._artboardWidth)
                    ? e
                    : 0;
                },
                set: function (e) {
                  (this._artboardWidth = e),
                    this.artboard && (this.artboard.width = e);
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(t.prototype, "artboardHeight", {
                get: function () {
                  var e;
                  return this.artboard
                    ? this.artboard.height
                    : null != (e = this._artboardHeight)
                    ? e
                    : 0;
                },
                set: function (e) {
                  (this._artboardHeight = e),
                    this.artboard && (this.artboard.height = e);
                },
                enumerable: !1,
                configurable: !0,
              }),
              (t.prototype.resetArtboardSize = function () {
                this.artboard
                  ? (this.artboard.resetArtboardSize(),
                    (this._artboardWidth = this.artboard.width),
                    (this._artboardHeight = this.artboard.height))
                  : ((this._artboardWidth = void 0),
                    (this._artboardHeight = void 0));
              }),
              Object.defineProperty(t.prototype, "devicePixelRatioUsed", {
                get: function () {
                  return this._devicePixelRatioUsed;
                },
                set: function (e) {
                  this._devicePixelRatioUsed = e;
                },
                enumerable: !1,
                configurable: !0,
              }),
              (t.prototype.bindViewModelInstance = function (e) {
                var t;
                this.artboard &&
                  !this.destroyed &&
                  e &&
                  e.runtimeInstance &&
                  (e.internalIncrementReferenceCount(),
                  null == (t = this._viewModelInstance) || t.cleanup(),
                  (this._viewModelInstance = e),
                  this.animator.stateMachines.length > 0
                    ? this.animator.stateMachines.forEach(function (t) {
                        return t.bindViewModelInstance(e);
                      })
                    : this.artboard.bindViewModelInstance(e.runtimeInstance));
              }),
              Object.defineProperty(t.prototype, "viewModelInstance", {
                get: function () {
                  return this._viewModelInstance;
                },
                enumerable: !1,
                configurable: !0,
              }),
              (t.prototype.viewModelByIndex = function (e) {
                var t = this.file.viewModelByIndex(e);
                return null !== t ? new D(t) : null;
              }),
              (t.prototype.viewModelByName = function (e) {
                var t = this.file.viewModelByName(e);
                return null !== t ? new D(t) : null;
              }),
              (t.prototype.enums = function () {
                if (null === this._dataEnums) {
                  var e = this.file.enums();
                  this._dataEnums = e.map(function (e) {
                    return new V(e);
                  });
                }
                return this._dataEnums;
              }),
              (t.prototype.defaultViewModel = function () {
                if (this.artboard) {
                  var e = this.file.defaultArtboardViewModel(this.artboard);
                  if (e) return new D(e);
                }
                return null;
              }),
              (t.missingErrorMessage =
                "Rive source file or data buffer required"),
              (t.cleanupErrorMessage =
                "Attempt to use file after calling cleanup."),
              t
            );
          })()),
          (D = (function () {
            function e(e) {
              this._viewModel = e;
            }
            return (
              Object.defineProperty(e.prototype, "instanceCount", {
                get: function () {
                  return this._viewModel.instanceCount;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(e.prototype, "name", {
                get: function () {
                  return this._viewModel.name;
                },
                enumerable: !1,
                configurable: !0,
              }),
              (e.prototype.instanceByIndex = function (e) {
                var t = this._viewModel.instanceByIndex(e);
                return null !== t ? new N(t, null) : null;
              }),
              (e.prototype.instanceByName = function (e) {
                var t = this._viewModel.instanceByName(e);
                return null !== t ? new N(t, null) : null;
              }),
              (e.prototype.defaultInstance = function () {
                var e = this._viewModel.defaultInstance();
                return null !== e ? new N(e, null) : null;
              }),
              (e.prototype.instance = function () {
                var e = this._viewModel.instance();
                return null !== e ? new N(e, null) : null;
              }),
              Object.defineProperty(e.prototype, "properties", {
                get: function () {
                  return this._viewModel.getProperties();
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(e.prototype, "instanceNames", {
                get: function () {
                  return this._viewModel.getInstanceNames();
                },
                enumerable: !1,
                configurable: !0,
              }),
              e
            );
          })()),
          (V = (function () {
            function e(e) {
              this._dataEnum = e;
            }
            return (
              Object.defineProperty(e.prototype, "name", {
                get: function () {
                  return this._dataEnum.name;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(e.prototype, "values", {
                get: function () {
                  return this._dataEnum.values;
                },
                enumerable: !1,
                configurable: !0,
              }),
              e
            );
          })()),
          ((U = s || (s = {})).Number = "number"),
          (U.String = "string"),
          (U.Boolean = "boolean"),
          (U.Color = "color"),
          (U.Trigger = "trigger"),
          (U.Enum = "enum"),
          (U.List = "list"),
          (U.Image = "image"),
          (N = (function () {
            function e(e, t) {
              (this._parents = []),
                (this._children = []),
                (this._viewModelInstances = new Map()),
                (this._propertiesWithCallbacks = []),
                (this._referenceCount = 0),
                (this._runtimeInstance = e),
                null !== t && this._parents.push(t);
            }
            return (
              Object.defineProperty(e.prototype, "runtimeInstance", {
                get: function () {
                  return this._runtimeInstance;
                },
                enumerable: !1,
                configurable: !0,
              }),
              (e.prototype.handleCallbacks = function () {
                0 !== this._propertiesWithCallbacks.length &&
                  (this._propertiesWithCallbacks.forEach(function (e) {
                    e.handleCallbacks();
                  }),
                  this._propertiesWithCallbacks.forEach(function (e) {
                    e.clearChanges();
                  })),
                  this._children.forEach(function (e) {
                    return e.handleCallbacks();
                  });
              }),
              (e.prototype.addParent = function (e) {
                this._parents.push(e),
                  (this._propertiesWithCallbacks.length > 0 ||
                    this._children.length > 0) &&
                    e.addToViewModelCallbacks(this);
              }),
              (e.prototype.removeParent = function (e) {
                var t = this._parents.indexOf(e);
                -1 !== t &&
                  (this._parents[t].removeFromViewModelCallbacks(this),
                  this._parents.splice(t, 1));
              }),
              (e.prototype.addToPropertyCallbacks = function (e) {
                var t = this;
                !this._propertiesWithCallbacks.includes(e) &&
                  (this._propertiesWithCallbacks.push(e),
                  this._propertiesWithCallbacks.length > 0 &&
                    this._parents.forEach(function (e) {
                      e.addToViewModelCallbacks(t);
                    }));
              }),
              (e.prototype.removeFromPropertyCallbacks = function (e) {
                var t = this;
                this._propertiesWithCallbacks.includes(e) &&
                  ((this._propertiesWithCallbacks =
                    this._propertiesWithCallbacks.filter(function (t) {
                      return t !== e;
                    })),
                  0 === this._children.length &&
                    0 === this._propertiesWithCallbacks.length &&
                    this._parents.forEach(function (e) {
                      e.removeFromViewModelCallbacks(t);
                    }));
              }),
              (e.prototype.addToViewModelCallbacks = function (e) {
                var t = this;
                this._children.includes(e) ||
                  (this._children.push(e),
                  this._parents.forEach(function (e) {
                    e.addToViewModelCallbacks(t);
                  }));
              }),
              (e.prototype.removeFromViewModelCallbacks = function (e) {
                var t = this;
                this._children.includes(e) &&
                  ((this._children = this._children.filter(function (t) {
                    return t !== e;
                  })),
                  0 === this._children.length &&
                    0 === this._propertiesWithCallbacks.length &&
                    this._parents.forEach(function (e) {
                      e.removeFromViewModelCallbacks(t);
                    }));
              }),
              (e.prototype.clearCallbacks = function () {
                this._propertiesWithCallbacks.forEach(function (e) {
                  e.clearCallbacks();
                });
              }),
              (e.prototype.propertyFromPath = function (e, t) {
                var n = e.split("/");
                return this.propertyFromPathSegments(n, 0, t);
              }),
              (e.prototype.viewModelFromPathSegments = function (e, t) {
                var n = this.internalViewModelInstance(e[t]);
                if (null !== n)
                  if (t == e.length - 1) return n;
                  else return n.viewModelFromPathSegments(e, t++);
                return null;
              }),
              (e.prototype.propertyFromPathSegments = function (e, t, n) {
                if (t < e.length - 1) {
                  var r,
                    i,
                    a,
                    o,
                    u,
                    l,
                    c,
                    f,
                    h,
                    d,
                    p,
                    m,
                    v,
                    g,
                    b,
                    y,
                    w = this.internalViewModelInstance(e[t]);
                  return null !== w
                    ? w.propertyFromPathSegments(e, t + 1, n)
                    : null;
                }
                var _ = null;
                switch (n) {
                  case s.Number:
                    if (
                      null !==
                      (_ =
                        null !=
                        (i =
                          null == (r = this._runtimeInstance)
                            ? void 0
                            : r.number(e[t]))
                          ? i
                          : null)
                    )
                      return new z(_, this);
                    break;
                  case s.String:
                    if (
                      null !==
                      (_ =
                        null !=
                        (o =
                          null == (a = this._runtimeInstance)
                            ? void 0
                            : a.string(e[t]))
                          ? o
                          : null)
                    )
                      return new G(_, this);
                    break;
                  case s.Boolean:
                    if (
                      null !==
                      (_ =
                        null !=
                        (l =
                          null == (u = this._runtimeInstance)
                            ? void 0
                            : u.boolean(e[t]))
                          ? l
                          : null)
                    )
                      return new H(_, this);
                    break;
                  case s.Color:
                    if (
                      null !==
                      (_ =
                        null !=
                        (f =
                          null == (c = this._runtimeInstance)
                            ? void 0
                            : c.color(e[t]))
                          ? f
                          : null)
                    )
                      return new J(_, this);
                    break;
                  case s.Trigger:
                    if (
                      null !==
                      (_ =
                        null !=
                        (d =
                          null == (h = this._runtimeInstance)
                            ? void 0
                            : h.trigger(e[t]))
                          ? d
                          : null)
                    )
                      return new Y(_, this);
                    break;
                  case s.Enum:
                    if (
                      null !==
                      (_ =
                        null !=
                        (m =
                          null == (p = this._runtimeInstance)
                            ? void 0
                            : p.enum(e[t]))
                          ? m
                          : null)
                    )
                      return new X(_, this);
                    break;
                  case s.List:
                    if (
                      null !==
                      (_ =
                        null !=
                        (g =
                          null == (v = this._runtimeInstance)
                            ? void 0
                            : v.list(e[t]))
                          ? g
                          : null)
                    )
                      return new q(_, this);
                    break;
                  case s.Image:
                    if (
                      null !==
                      (_ =
                        null !=
                        (y =
                          null == (b = this._runtimeInstance)
                            ? void 0
                            : b.image(e[t]))
                          ? y
                          : null)
                    )
                      return new K(_, this);
                }
                return null;
              }),
              (e.prototype.internalViewModelInstance = function (t) {
                if (this._viewModelInstances.has(t))
                  return this._viewModelInstances.get(t);
                var n,
                  r =
                    null == (n = this._runtimeInstance)
                      ? void 0
                      : n.viewModel(t);
                if (null !== r) {
                  var i = new e(r, this);
                  return (
                    i.internalIncrementReferenceCount(),
                    this._viewModelInstances.set(t, i),
                    i
                  );
                }
                return null;
              }),
              (e.prototype.number = function (e) {
                return this.propertyFromPath(e, s.Number);
              }),
              (e.prototype.string = function (e) {
                return this.propertyFromPath(e, s.String);
              }),
              (e.prototype.boolean = function (e) {
                return this.propertyFromPath(e, s.Boolean);
              }),
              (e.prototype.color = function (e) {
                return this.propertyFromPath(e, s.Color);
              }),
              (e.prototype.trigger = function (e) {
                return this.propertyFromPath(e, s.Trigger);
              }),
              (e.prototype.enum = function (e) {
                return this.propertyFromPath(e, s.Enum);
              }),
              (e.prototype.list = function (e) {
                return this.propertyFromPath(e, s.List);
              }),
              (e.prototype.image = function (e) {
                return this.propertyFromPath(e, s.Image);
              }),
              (e.prototype.viewModel = function (e) {
                var t = e.split("/"),
                  n =
                    t.length > 1
                      ? this.viewModelFromPathSegments(
                          t.slice(0, t.length - 1),
                          0
                        )
                      : this;
                return null != n
                  ? n.internalViewModelInstance(t[t.length - 1])
                  : null;
              }),
              (e.prototype.internalReplaceViewModel = function (e, t) {
                var n;
                if (null !== t.runtimeInstance) {
                  var r =
                    (null == (n = this._runtimeInstance)
                      ? void 0
                      : n.replaceViewModel(e, t.runtimeInstance)) || !1;
                  if (r) {
                    t.internalIncrementReferenceCount();
                    var i = this.internalViewModelInstance(e);
                    null !== i &&
                      (i.removeParent(this),
                      this._children.includes(i) &&
                        (this._children = this._children.filter(function (e) {
                          return e !== i;
                        })),
                      i.cleanup()),
                      this._viewModelInstances.set(e, t),
                      t.addParent(this);
                  }
                  return r;
                }
                return !1;
              }),
              (e.prototype.replaceViewModel = function (e, t) {
                var n,
                  r = e.split("/"),
                  i =
                    r.length > 1
                      ? this.viewModelFromPathSegments(
                          r.slice(0, r.length - 1),
                          0
                        )
                      : this;
                return (
                  null !=
                    (n =
                      null == i
                        ? void 0
                        : i.internalReplaceViewModel(r[r.length - 1], t)) && n
                );
              }),
              (e.prototype.incrementReferenceCount = function () {
                var e;
                this._referenceCount++,
                  null == (e = this._runtimeInstance) ||
                    e.incrementReferenceCount();
              }),
              (e.prototype.decrementReferenceCount = function () {
                var e;
                this._referenceCount--,
                  null == (e = this._runtimeInstance) ||
                    e.decrementReferenceCount();
              }),
              Object.defineProperty(e.prototype, "properties", {
                get: function () {
                  var e;
                  return (
                    (null == (e = this._runtimeInstance)
                      ? void 0
                      : e.getProperties().map(function (e) {
                          return p({}, e);
                        })) || []
                  );
                },
                enumerable: !1,
                configurable: !0,
              }),
              (e.prototype.internalIncrementReferenceCount = function () {
                this._referenceCount++;
              }),
              (e.prototype.cleanup = function () {
                var e = this;
                if ((this._referenceCount--, this._referenceCount <= 0)) {
                  (this._runtimeInstance = null),
                    this.clearCallbacks(),
                    (this._propertiesWithCallbacks = []),
                    this._viewModelInstances.forEach(function (e) {
                      e.cleanup();
                    }),
                    this._viewModelInstances.clear();
                  var t = g([], this._children, !0);
                  this._children.length = 0;
                  var n = g([], this._parents, !0);
                  (this._parents.length = 0),
                    t.forEach(function (t) {
                      t.removeParent(e);
                    }),
                    n.forEach(function (t) {
                      t.removeFromViewModelCallbacks(e);
                    });
                }
              }),
              e
            );
          })()),
          (G = (function (e) {
            function t(t, n) {
              return e.call(this, t, n) || this;
            }
            return (
              d(t, e),
              Object.defineProperty(t.prototype, "value", {
                get: function () {
                  return this._viewModelInstanceValue.value;
                },
                set: function (e) {
                  this._viewModelInstanceValue.value = e;
                },
                enumerable: !1,
                configurable: !0,
              }),
              (t.prototype.internalHandleCallback = function (e) {
                e(this.value);
              }),
              t
            );
          })(
            ($ = (function () {
              function e(e, t) {
                (this.callbacks = []),
                  (this._viewModelInstanceValue = e),
                  (this._parentViewModel = t);
              }
              return (
                (e.prototype.on = function (e) {
                  0 === this.callbacks.length &&
                    this._viewModelInstanceValue.clearChanges(),
                    this.callbacks.includes(e) ||
                      (this.callbacks.push(e),
                      this._parentViewModel.addToPropertyCallbacks(this));
                }),
                (e.prototype.off = function (e) {
                  e
                    ? (this.callbacks = this.callbacks.filter(function (t) {
                        return t !== e;
                      }))
                    : (this.callbacks.length = 0),
                    0 === this.callbacks.length &&
                      this._parentViewModel.removeFromPropertyCallbacks(this);
                }),
                (e.prototype.internalHandleCallback = function (e) {}),
                (e.prototype.handleCallbacks = function () {
                  var e = this;
                  this._viewModelInstanceValue.hasChanged &&
                    this.callbacks.forEach(function (t) {
                      e.internalHandleCallback(t);
                    });
                }),
                (e.prototype.clearChanges = function () {
                  this._viewModelInstanceValue.clearChanges();
                }),
                (e.prototype.clearCallbacks = function () {
                  this.callbacks.length = 0;
                }),
                Object.defineProperty(e.prototype, "name", {
                  get: function () {
                    return this._viewModelInstanceValue.name;
                  },
                  enumerable: !1,
                  configurable: !0,
                }),
                e
              );
            })())
          )),
          (z = (function (e) {
            function t(t, n) {
              return e.call(this, t, n) || this;
            }
            return (
              d(t, e),
              Object.defineProperty(t.prototype, "value", {
                get: function () {
                  return this._viewModelInstanceValue.value;
                },
                set: function (e) {
                  this._viewModelInstanceValue.value = e;
                },
                enumerable: !1,
                configurable: !0,
              }),
              (t.prototype.internalHandleCallback = function (e) {
                e(this.value);
              }),
              t
            );
          })($)),
          (H = (function (e) {
            function t(t, n) {
              return e.call(this, t, n) || this;
            }
            return (
              d(t, e),
              Object.defineProperty(t.prototype, "value", {
                get: function () {
                  return this._viewModelInstanceValue.value;
                },
                set: function (e) {
                  this._viewModelInstanceValue.value = e;
                },
                enumerable: !1,
                configurable: !0,
              }),
              (t.prototype.internalHandleCallback = function (e) {
                e(this.value);
              }),
              t
            );
          })($)),
          (Y = (function (e) {
            function t(t, n) {
              return e.call(this, t, n) || this;
            }
            return (
              d(t, e),
              (t.prototype.trigger = function () {
                return this._viewModelInstanceValue.trigger();
              }),
              (t.prototype.internalHandleCallback = function (e) {
                e();
              }),
              t
            );
          })($)),
          (X = (function (e) {
            function t(t, n) {
              return e.call(this, t, n) || this;
            }
            return (
              d(t, e),
              Object.defineProperty(t.prototype, "value", {
                get: function () {
                  return this._viewModelInstanceValue.value;
                },
                set: function (e) {
                  this._viewModelInstanceValue.value = e;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(t.prototype, "valueIndex", {
                get: function () {
                  return this._viewModelInstanceValue.valueIndex;
                },
                set: function (e) {
                  this._viewModelInstanceValue.valueIndex = e;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(t.prototype, "values", {
                get: function () {
                  return this._viewModelInstanceValue.values;
                },
                enumerable: !1,
                configurable: !0,
              }),
              (t.prototype.internalHandleCallback = function (e) {
                e(this.value);
              }),
              t
            );
          })($)),
          (q = (function (e) {
            function t(t, n) {
              return e.call(this, t, n) || this;
            }
            return (
              d(t, e),
              Object.defineProperty(t.prototype, "length", {
                get: function () {
                  return this._viewModelInstanceValue.size;
                },
                enumerable: !1,
                configurable: !0,
              }),
              (t.prototype.addInstance = function (e) {
                null != e.runtimeInstance &&
                  this._viewModelInstanceValue.addInstance(e.runtimeInstance);
              }),
              (t.prototype.removeInstance = function (e) {
                null != e.runtimeInstance &&
                  this._viewModelInstanceValue.removeInstance(
                    e.runtimeInstance
                  );
              }),
              (t.prototype.removeInstanceAt = function (e) {
                this._viewModelInstanceValue.removeInstanceAt(e);
              }),
              (t.prototype.instanceAt = function (e) {
                var t = this._viewModelInstanceValue.instanceAt(e);
                return null != t ? new N(t, null) : null;
              }),
              (t.prototype.internalHandleCallback = function (e) {
                e();
              }),
              t
            );
          })($)),
          (J = (function (e) {
            function t(t, n) {
              return e.call(this, t, n) || this;
            }
            return (
              d(t, e),
              Object.defineProperty(t.prototype, "value", {
                get: function () {
                  return this._viewModelInstanceValue.value;
                },
                set: function (e) {
                  this._viewModelInstanceValue.value = e;
                },
                enumerable: !1,
                configurable: !0,
              }),
              (t.prototype.rgb = function (e, t, n) {
                this._viewModelInstanceValue.rgb(e, t, n);
              }),
              (t.prototype.rgba = function (e, t, n, r) {
                this._viewModelInstanceValue.argb(r, e, t, n);
              }),
              (t.prototype.argb = function (e, t, n, r) {
                this._viewModelInstanceValue.argb(e, t, n, r);
              }),
              (t.prototype.alpha = function (e) {
                this._viewModelInstanceValue.alpha(e);
              }),
              (t.prototype.opacity = function (e) {
                this._viewModelInstanceValue.alpha(
                  Math.round(255 * Math.max(0, Math.min(1, e)))
                );
              }),
              (t.prototype.internalHandleCallback = function (e) {
                e(this.value);
              }),
              t
            );
          })($)),
          (K = (function (e) {
            function t(t, n) {
              return e.call(this, t, n) || this;
            }
            return (
              d(t, e),
              Object.defineProperty(t.prototype, "value", {
                set: function (e) {
                  this._viewModelInstanceValue.value(e.nativeImage);
                },
                enumerable: !1,
                configurable: !0,
              }),
              (t.prototype.internalHandleCallback = function (e) {
                e();
              }),
              t
            );
          })($)),
          (Z = function (e) {
            return m(void 0, void 0, void 0, function () {
              return v(this, function (t) {
                switch (t.label) {
                  case 0:
                    return [4, fetch(new Request(e))];
                  case 1:
                    return [4, t.sent().arrayBuffer()];
                  case 2:
                    return [2, t.sent()];
                }
              });
            });
          }),
          (Q = function (e) {
            return "string" == typeof e ? [e] : e instanceof Array ? e : [];
          }),
          (ee = { EventManager: x, TaskQueueManager: R }),
          (et = function (e) {
            return m(void 0, void 0, void 0, function () {
              var t, n;
              return v(this, function (r) {
                switch (r.label) {
                  case 0:
                    return [
                      4,
                      new Promise(function (t) {
                        return A.getInstance(function (n) {
                          n.decodeAudio(e, t);
                        });
                      }),
                    ];
                  case 1:
                    return (
                      (t = r.sent()),
                      (n = new f.AudioWrapper(t)),
                      f.finalizationRegistry.register(n, t),
                      [2, n]
                    );
                }
              });
            });
          }),
          (en = function (e) {
            return m(void 0, void 0, void 0, function () {
              var t, n;
              return v(this, function (r) {
                switch (r.label) {
                  case 0:
                    return [
                      4,
                      new Promise(function (t) {
                        return A.getInstance(function (n) {
                          n.decodeImage(e, t);
                        });
                      }),
                    ];
                  case 1:
                    return (
                      (t = r.sent()),
                      (n = new f.ImageWrapper(t)),
                      f.finalizationRegistry.register(n, t),
                      [2, n]
                    );
                }
              });
            });
          }),
          (er = function (e) {
            return m(void 0, void 0, void 0, function () {
              var t, n;
              return v(this, function (r) {
                switch (r.label) {
                  case 0:
                    return [
                      4,
                      new Promise(function (t) {
                        return A.getInstance(function (n) {
                          n.decodeFont(e, t);
                        });
                      }),
                    ];
                  case 1:
                    return (
                      (t = r.sent()),
                      (n = new f.FontWrapper(t)),
                      f.finalizationRegistry.register(n, t),
                      [2, n]
                    );
                }
              });
            });
          }),
          es
        );
      })();
    },
  },
]);
