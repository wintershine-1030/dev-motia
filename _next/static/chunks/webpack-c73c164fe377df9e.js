(() => {
  "use strict";
  var e = {},
    t = {};
  function r(a) {
    var f = t[a];
    if (void 0 !== f) return f.exports;
    var o = (t[a] = { exports: {} }),
      c = !0;
    try {
      if (e[a] && typeof e[a].call === 'function') {
        e[a].call(o.exports, o, o.exports, r), (c = !1);
      }
    } finally {
      c && delete t[a];
    }
    return o.exports;
  }
  (r.m = e),
    (() => {
      var e = [];
      r.O = (t, a, f, o) => {
        if (a) {
          o = o || 0;
          for (var c = e.length; c > 0 && e[c - 1][2] > o; c--) e[c] = e[c - 1];
          e[c] = [a, f, o];
          return;
        }
        for (var d = 1 / 0, c = 0; c < e.length; c++) {
          for (var [a, f, o] = e[c], n = !0, i = 0; i < a.length; i++)
            (!1 & o || d >= o) && Object.keys(r.O).every((e) => r.O[e](a[i]))
              ? a.splice(i--, 1)
              : ((n = !1), o < d && (d = o));
          if (n) {
            e.splice(c--, 1);
            var b = f();
            void 0 !== b && (t = b);
          }
        }
        return t;
      };
    })(),
    (r.n = (e) => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return r.d(t, { a: t }), t;
    }),
    (() => {
      var e,
        t = Object.getPrototypeOf
          ? (e) => Object.getPrototypeOf(e)
          : (e) => e.__proto__;
      r.t = function (a, f) {
        if (
          (1 & f && (a = this(a)),
          8 & f ||
            ("object" == typeof a &&
              a &&
              ((4 & f && a.__esModule) ||
                (16 & f && "function" == typeof a.then))))
        )
          return a;
        var o = Object.create(null);
        r.r(o);
        var c = {};
        e = e || [null, t({}), t([]), t(t)];
        for (
          var d = 2 & f && a;
          "object" == typeof d && !~e.indexOf(d);
          d = t(d)
        )
          Object.getOwnPropertyNames(d).forEach((e) => (c[e] = () => a[e]));
        return (c.default = () => a), r.d(o, c), o;
      };
    })(),
    (r.d = (e, t) => {
      for (var a in t)
        r.o(t, a) &&
          !r.o(e, a) &&
          Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
    }),
    (r.f = {}),
    (r.e = (e) =>
      Promise.all(Object.keys(r.f).reduce((t, a) => (r.f[a](e, t), t), []))),
    (r.u = (e) => {
      // Handle specific chunk mappings first
      if (2883 === e) return "static/chunks/2883-3629317346dba03c.js";
      if (4342 === e) return "static/chunks/4342-85e0d9996e326075.js";
      
      // Handle other chunks with proper fallback
      const chunkId = e;
      const chunkHash = {
        20: "042ee81fc4312779",
        42: "32007fbd727ba1dc",
        762: "06ffe2f481006413",
        799: "cbf7c7fb199ae5cf",
        883: "741089ef090413e2",
        965: "f3fef89a00cd4074",
        1636: "959b2d457cb4d7ad",
        1654: "ded4ca4e1ccb3bee",
        1803: "d369662d16e59f18",
        2077: "ebc2a4796372aa20",
        2104: "98f77b877f679bd5",
        2323: "9c400cc84c9d652e",
        2605: "0651170d8dc37595",
        2855: "754b35355695905d",
        3051: "913aab582f091500",
        3244: "423373556b96968b",
        3368: "9140507d23e1b5d8",
        3422: "eedce505593e79f1",
        3683: "107d9c90d426aeb1",
        3839: "99aa3ff92aa2fd15",
        4e3: "ac614c21cc743a1d",
        4078: "47f413d94ad93df1",
        4447: "37fd9749ce77bb51",
        4481: "62332733062dbb50",
        4492: "fb5b9c5dd1a658fc",
        4803: "f37b13f6bd6c67cf",
        4851: "76cd9490a42f229a",
        5034: "a723f465d23c9289",
        6089: "58396a5e16bf2d08",
        6534: "7b4f37ee73c851d3",
        6605: "9be052352ce4bf00",
        6880: "a9684eddee440eee",
        7041: "d4784c9651b47932",
        7188: "ec8c1013489c6858",
        7444: "bbe300c9f534aba3",
        7909: "79a2389a41640736",
        8040: "a6d68f3fe6ca99cc",
        8148: "61344075d171d52d",
        8379: "0a0801a0aacbfaa2",
        8562: "fc7af7cb45d7345b",
        9013: "f7e51b128f546d50",
        9061: "b60e1d68185d4c36",
        9118: "1d76c425de8b87b4",
        9542: "ca2cf81e70177828",
        9647: "a21106a9dd95de5d",
        9693: "147678add5e2919f",
        9783: "b1a30721b3e5f551",
      }[chunkId];
      
      if (chunkHash) {
        return "static/chunks/" + chunkId + "-" + chunkHash + ".js";
      }
      
      // Fallback for unknown chunks
      return "static/chunks/" + chunkId + ".js";
    }),
    (r.miniCssF = (e) => {}),
    (r.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (() => {
      var e = {},
        t = "_N_E:";
      r.l = (a, f, o, c) => {
        if (e[a]) return void e[a].push(f);
        if (void 0 !== o)
          for (
            var d, n, i = document.getElementsByTagName("script"), b = 0;
            b < i.length;
            b++
          ) {
            var u = i[b];
            if (
              u.getAttribute("src") == a ||
              u.getAttribute("data-webpack") == t + o
            ) {
              d = u;
              break;
            }
          }
        d ||
          ((n = !0),
          ((d = document.createElement("script")).charset = "utf-8"),
          (d.timeout = 120),
          r.nc && d.setAttribute("nonce", r.nc),
          d.setAttribute("data-webpack", t + o),
          (d.src = r.tu(a))),
          (e[a] = [f]);
        var l = (t, r) => {
            (d.onerror = d.onload = null), clearTimeout(s);
            var f = e[a];
            if (
              (delete e[a],
              d.parentNode && d.parentNode.removeChild(d),
              f && f.forEach((e) => e(r)),
              t)
            )
              return t(r);
          },
          s = setTimeout(
            l.bind(null, void 0, { type: "timeout", target: d }),
            12e4
          );
        (d.onerror = l.bind(null, d.onerror)),
          (d.onload = l.bind(null, d.onload)),
          n && document.head.appendChild(d);
      };
    })(),
    (r.r = (e) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (() => {
      var e;
      r.tt = () => (
        void 0 === e &&
          ((e = { createScriptURL: (e) => e }),
          "undefined" != typeof trustedTypes &&
            trustedTypes.createPolicy &&
            (e = trustedTypes.createPolicy("nextjs#bundler", e))),
        e
      );
    })(),
    (r.tu = (e) => r.tt().createScriptURL(e)),
    (r.p = "/_next/"),
    (() => {
      var e = { 8068: 0, 2821: 0, 5267: 0, 2229: 0 };
      (r.f.j = (t, a) => {
        var f = r.o(e, t) ? e[t] : void 0;
        if (0 !== f)
          if (f) a.push(f[2]);
          else if (/^(2229|2821|5267|8068)$/.test(t)) e[t] = 0;
          else {
            var o = new Promise((r, a) => (f = e[t] = [r, a]));
            a.push((f[2] = o));
            var c = r.p + r.u(t),
              d = Error();
            r.l(
              c,
              (a) => {
                if (r.o(e, t) && (0 !== (f = e[t]) && (e[t] = void 0), f)) {
                  var o = a && ("load" === a.type ? "missing" : a.type),
                    c = a && a.target && a.target.src;
                  (d.message =
                    "Loading chunk " + t + " failed.\n(" + o + ": " + c + ")"),
                    (d.name = "ChunkLoadError"),
                    (d.type = o),
                    (d.request = c),
                    f[1](d);
                }
              },
              "chunk-" + t,
              t
            );
          }
      }),
        (r.O.j = (t) => 0 === e[t]);
      var t = (t, a) => {
          var f,
            o,
            [c, d, n] = a,
            i = 0;
          if (c.some((t) => 0 !== e[t])) {
            for (f in d) r.o(d, f) && (r.m[f] = d[f]);
            if (n) var b = n(r);
          }
          for (t && t(a); i < c.length; i++)
            (o = c[i]), r.o(e, o) && e[o] && e[o][0](), (e[o] = 0);
          return r.O(b);
        },
        a = (self.webpackChunk_N_E = self.webpackChunk_N_E || []);
      a.forEach(t.bind(null, 0)), (a.push = t.bind(null, a.push.bind(a)));
    })(),
    (r.nc = void 0);
})();
(function () {
  if (
    typeof document === "undefined" ||
    !/(?:^|;\s)__vercel_toolbar=1(?:;|$)/.test(document.cookie)
  )
    return;
  var s = document.createElement("script");
  s.src = "https://vercel.live/_next-live/feedback/feedback.js";
  s.setAttribute("data-explicit-opt-in", "true");
  s.setAttribute("data-cookie-opt-in", "true");
  s.setAttribute("data-deployment-id", "dpl_Bszp76NwQe5NTULCkKHXwcNtm5yC");
  (document.head || document.documentElement).appendChild(s);
})();
