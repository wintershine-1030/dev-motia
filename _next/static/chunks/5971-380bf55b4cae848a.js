"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5971],
  {
    26087: (e, t, n) => {
      n.d(t, { T: () => o });
      var r = n(40329);
      function o(
        e,
        t,
        n = function e(t, n) {
          if (Array.isArray(t) && Array.isArray(n))
            return n.length !== t.length || t.some((t, r) => e(t, n[r]));
          if ("object" == typeof t && t && "object" == typeof n && n) {
            let r = Object.keys(t),
              o = Object.keys(n);
            return r.length !== o.length || r.some((r) => e(t[r], n[r]));
          }
          return t !== n;
        }
      ) {
        let [a, i] = (0, r.useState)(e);
        n(a, e) && (t(e, a), i(e));
      }
    },
    36219: (e, t, n) => {
      n.d(t, { L: () => s, TreeContextProvider: () => l, t: () => d });
      var r = n(46877),
        o = n(82917),
        a = n(40329),
        i = n(91471);
      let u = (0, o.q6)("TreeContext"),
        c = (0, o.q6)("PathContext", []);
      function l(e) {
        var t, n, l;
        let s = (0, a.useRef)(0),
          d = (0, o.a8)(),
          f = (0, a.useMemo)(
            () => e.tree,
            [null != (t = e.tree.$id) ? t : e.tree]
          ),
          h = (0, a.useMemo)(() => {
            var e;
            return null != (e = (0, i.oe)(f.children, d)) ? e : [];
          }, [f, d]),
          m =
            null != (n = h.findLast((e) => "folder" === e.type && e.root))
              ? n
              : f;
        return (
          null != m.$id || (m.$id = String(s.current++)),
          (0, r.jsx)(u.Provider, {
            value: (0, a.useMemo)(() => ({ root: m }), [m]),
            children: (0, r.jsx)(c.Provider, {
              value: h,
              children: e.children,
            }),
          })
        );
      }
      function s() {
        return c.use();
      }
      function d() {
        return u.use("You must wrap this component under <DocsLayout />");
      }
    },
    59563: (e, t, n) => {
      n.d(t, { D: () => s, N: () => d });
      var r = n(40329),
        o = (e, t, n, r, o, a, i, u) => {
          let c = document.documentElement,
            l = ["light", "dark"];
          function s(t) {
            var n;
            (Array.isArray(e) ? e : [e]).forEach((e) => {
              let n = "class" === e,
                r = n && a ? o.map((e) => a[e] || e) : o;
              n
                ? (c.classList.remove(...r),
                  c.classList.add(a && a[t] ? a[t] : t))
                : c.setAttribute(e, t);
            }),
              (n = t),
              u && l.includes(n) && (c.style.colorScheme = n);
          }
          if (r) s(r);
          else
            try {
              let e = localStorage.getItem(t) || n,
                r =
                  i && "system" === e
                    ? window.matchMedia("(prefers-color-scheme: dark)").matches
                      ? "dark"
                      : "light"
                    : e;
              s(r);
            } catch (e) {}
        },
        a = ["light", "dark"],
        i = "(prefers-color-scheme: dark)",
        u = "undefined" == typeof window,
        c = r.createContext(void 0),
        l = { setTheme: (e) => {}, themes: [] },
        s = () => {
          var e;
          return null != (e = r.useContext(c)) ? e : l;
        },
        d = (e) =>
          r.useContext(c)
            ? r.createElement(r.Fragment, null, e.children)
            : r.createElement(h, { ...e }),
        f = ["light", "dark"],
        h = (e) => {
          let {
              forcedTheme: t,
              disableTransitionOnChange: n = !1,
              enableSystem: o = !0,
              enableColorScheme: u = !0,
              storageKey: l = "theme",
              themes: s = f,
              defaultTheme: d = o ? "system" : "light",
              attribute: h = "data-theme",
              value: y,
              children: b,
              nonce: w,
              scriptProps: E,
            } = e,
            [C, S] = r.useState(() => v(l, d)),
            [x, P] = r.useState(() => ("system" === C ? g() : C)),
            k = y ? Object.values(y) : s,
            T = r.useCallback(
              (e) => {
                let t = e;
                if (!t) return;
                "system" === e && o && (t = g());
                let r = y ? y[t] : t,
                  i = n ? p(w) : null,
                  c = document.documentElement,
                  l = (e) => {
                    "class" === e
                      ? (c.classList.remove(...k), r && c.classList.add(r))
                      : e.startsWith("data-") &&
                        (r ? c.setAttribute(e, r) : c.removeAttribute(e));
                  };
                if ((Array.isArray(h) ? h.forEach(l) : l(h), u)) {
                  let e = a.includes(d) ? d : null,
                    n = a.includes(t) ? t : e;
                  c.style.colorScheme = n;
                }
                null == i || i();
              },
              [w]
            ),
            L = r.useCallback(
              (e) => {
                let t = "function" == typeof e ? e(C) : e;
                S(t);
                try {
                  localStorage.setItem(l, t);
                } catch (e) {}
              },
              [C]
            ),
            M = r.useCallback(
              (e) => {
                P(g(e)), "system" === C && o && !t && T("system");
              },
              [C, t]
            );
          r.useEffect(() => {
            let e = window.matchMedia(i);
            return e.addListener(M), M(e), () => e.removeListener(M);
          }, [M]),
            r.useEffect(() => {
              let e = (e) => {
                e.key === l && (e.newValue ? S(e.newValue) : L(d));
              };
              return (
                window.addEventListener("storage", e),
                () => window.removeEventListener("storage", e)
              );
            }, [L]),
            r.useEffect(() => {
              T(null != t ? t : C);
            }, [t, C]);
          let j = r.useMemo(
            () => ({
              theme: C,
              setTheme: L,
              forcedTheme: t,
              resolvedTheme: "system" === C ? x : C,
              themes: o ? [...s, "system"] : s,
              systemTheme: o ? x : void 0,
            }),
            [C, L, t, x, o, s]
          );
          return r.createElement(
            c.Provider,
            { value: j },
            r.createElement(m, {
              forcedTheme: t,
              storageKey: l,
              attribute: h,
              enableSystem: o,
              enableColorScheme: u,
              defaultTheme: d,
              value: y,
              themes: s,
              nonce: w,
              scriptProps: E,
            }),
            b
          );
        },
        m = r.memo((e) => {
          let {
              forcedTheme: t,
              storageKey: n,
              attribute: a,
              enableSystem: i,
              enableColorScheme: u,
              defaultTheme: c,
              value: l,
              themes: s,
              nonce: d,
              scriptProps: f,
            } = e,
            h = JSON.stringify([a, n, c, t, s, l, i, u]).slice(1, -1);
          return r.createElement("script", {
            ...f,
            suppressHydrationWarning: !0,
            nonce: "undefined" == typeof window ? d : "",
            dangerouslySetInnerHTML: {
              __html: "(".concat(o.toString(), ")(").concat(h, ")"),
            },
          });
        }),
        v = (e, t) => {
          let n;
          if (!u) {
            try {
              n = localStorage.getItem(e) || void 0;
            } catch (e) {}
            return n || t;
          }
        },
        p = (e) => {
          let t = document.createElement("style");
          return (
            e && t.setAttribute("nonce", e),
            t.appendChild(
              document.createTextNode(
                "*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}"
              )
            ),
            document.head.appendChild(t),
            () => {
              window.getComputedStyle(document.body),
                setTimeout(() => {
                  document.head.removeChild(t);
                }, 1);
            }
          );
        },
        g = (e) => (
          e || (e = window.matchMedia(i)), e.matches ? "dark" : "light"
        );
    },
    61417: (e, t, n) => {
      n.d(t, {
        NavProvider: () => s,
        StylesProvider: () => c,
        h: () => d,
        v: () => u,
      });
      var r = n(46877),
        o = n(40329),
        a = n(82917);
      let i = (0, a.q6)("StylesContext", {
        tocNav: "xl:hidden",
        toc: "max-xl:hidden",
      });
      function u() {
        return i.use();
      }
      function c(e) {
        let { children: t, ...n } = e;
        return (0, r.jsx)(i.Provider, { value: n, children: t });
      }
      let l = (0, a.q6)("NavContext", { isTransparent: !1 });
      function s(e) {
        let { transparentMode: t = "none", children: n } = e,
          [a, i] = (0, o.useState)("none" !== t);
        return (
          (0, o.useEffect)(() => {
            if ("top" !== t) return;
            let e = () => {
              i(window.scrollY < 10);
            };
            return (
              e(),
              window.addEventListener("scroll", e),
              () => {
                window.removeEventListener("scroll", e);
              }
            );
          }, [t]),
          (0, r.jsx)(l.Provider, {
            value: (0, o.useMemo)(() => ({ isTransparent: a }), [a]),
            children: n,
          })
        );
      }
      function d() {
        return l.use();
      }
    },
    61990: (e, t, n) => {
      n.d(t, { GB: () => c, Pg: () => s, x2: () => l }), n(3002);
      var r = n(40329),
        o = n(91601),
        a = n(46877),
        i = (0, r.createContext)(null);
      function u() {
        let e = (0, r.useContext)(i);
        if (!e) throw Error("Missing sidebar provider");
        return e;
      }
      function c(e) {
        let [t, n] =
          void 0 === e.open ? (0, r.useState)(!1) : [e.open, e.onOpenChange];
        return (0, a.jsx)(i.Provider, {
          value: (0, r.useMemo)(
            () => ({ open: t, setOpen: null != n ? n : () => void 0 }),
            [t, n]
          ),
          children: e.children,
        });
      }
      function l(e) {
        let { as: t, ...n } = e,
          { open: r, setOpen: o } = u();
        return (0, a.jsx)(null != t ? t : "button", {
          "aria-label": "Toggle Sidebar",
          "data-open": r,
          onClick: () => {
            o(!r);
          },
          ...n,
        });
      }
      function s(e) {
        let {
            as: t,
            blockScrollingWidth: n,
            removeScrollOn: i = n ? "(width < ".concat(n, "px)") : void 0,
            ...c
          } = e,
          { open: l } = u(),
          [s, d] = (0, r.useState)(!1);
        return (
          (0, r.useEffect)(() => {
            if (!i) return;
            let e = window.matchMedia(i),
              t = () => {
                d(e.matches);
              };
            return (
              t(),
              e.addEventListener("change", t),
              () => {
                e.removeEventListener("change", t);
              }
            );
          }, [i]),
          (0, a.jsx)(o.A, {
            as: null != t ? t : "aside",
            "data-open": l,
            enabled: !!(s && l),
            ...c,
            children: c.children,
          })
        );
      }
    },
    63642: (e, t, n) => {
      n.d(t, { T: () => r.T });
      var r = n(26087);
      n(3002);
    },
    63899: (e, t, n) => {
      n.d(t, {
        N_: () => d,
        Uy: () => u,
        _V: () => s,
        a8: () => c,
        q6: () => f,
        rd: () => l,
      });
      var r = n(40329),
        o = n(46877),
        a = () => {
          throw Error(
            "You need to wrap your application inside `FrameworkProvider`."
          );
        },
        i = f("FrameworkContext", {
          useParams: a,
          useRouter: a,
          usePathname: a,
        });
      function u({ children: e, ...t }) {
        let n = r.useMemo(
          () => ({
            usePathname: t.usePathname,
            useRouter: t.useRouter,
            Link: t.Link,
            Image: t.Image,
            useParams: t.useParams,
          }),
          [t.Link, t.usePathname, t.useRouter, t.useParams, t.Image]
        );
        return (0, o.jsx)(i.Provider, { value: n, children: e });
      }
      function c() {
        return i.use().usePathname();
      }
      function l() {
        return i.use().useRouter();
      }
      function s(e) {
        let { Image: t } = i.use();
        if (!t) {
          let { src: t, alt: n, priority: r, ...a } = e;
          return (0, o.jsx)("img", {
            alt: n,
            src: t,
            fetchPriority: r ? "high" : "auto",
            ...a,
          });
        }
        return (0, o.jsx)(t, { ...e });
      }
      function d(e) {
        let { Link: t } = i.use();
        if (!t) {
          let { href: t, prefetch: n, ...r } = e;
          return (0, o.jsx)("a", { href: t, ...r });
        }
        return (0, o.jsx)(t, { ...e });
      }
      function f(e, t) {
        let n = r.createContext(t);
        return {
          Provider: (e) =>
            (0, o.jsx)(n.Provider, { value: e.value, children: e.children }),
          use: (t) => {
            let o = r.useContext(n);
            if (!o)
              throw Error(t ?? `Provider of ${e} is required but missing.`);
            return o;
          },
        };
      }
    },
    82917: (e, t, n) => {
      n.d(t, {
        Image: () => r._V,
        a8: () => r.a8,
        q6: () => r.q6,
        rd: () => r.rd,
      });
      var r = n(63899);
      n(3002);
    },
    91471: (e, t, n) => {
      function r(e, t, n) {
        let {
            includePage: r = !0,
            includeSeparator: o = !1,
            includeRoot: a,
          } = n,
          i = [];
        return (
          t.forEach((e, n) => {
            if (
              ("separator" === e.type &&
                e.name &&
                o &&
                i.push({ name: e.name }),
              "folder" === e.type)
            ) {
              let r = t.at(n + 1);
              if (r && e.index === r) return;
              if (e.root) {
                i = [];
                return;
              }
              i.push({ name: e.name, url: e.index?.url });
            }
            "page" === e.type && r && i.push({ name: e.name, url: e.url });
          }),
          a &&
            i.unshift({
              name: e.name,
              url: "object" == typeof a ? a.url : void 0,
            }),
          i
        );
      }
      n.d(t, {
        Pp: () => r,
        oe: () =>
          function e(t, n) {
            let r;
            for (let o of (n.endsWith("/") && (n = n.slice(0, -1)), t)) {
              if (("separator" === o.type && (r = o), "folder" === o.type)) {
                if (o.index?.url === n) {
                  let e = [];
                  return r && e.push(r), e.push(o, o.index), e;
                }
                let t = e(o.children, n);
                if (t) return t.unshift(o), r && t.unshift(r), t;
              }
              if ("page" === o.type && o.url === n) {
                let e = [];
                return r && e.push(r), e.push(o), e;
              }
            }
            return null;
          },
      }),
        n(3002),
        n(40329);
    },
    91601: (e, t, n) => {
      n.d(t, { A: () => K });
      var r,
        o,
        a = function () {
          return (a =
            Object.assign ||
            function (e) {
              for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var o in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
              return e;
            }).apply(this, arguments);
        };
      function i(e, t) {
        var n = {};
        for (var r in e)
          Object.prototype.hasOwnProperty.call(e, r) &&
            0 > t.indexOf(r) &&
            (n[r] = e[r]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols)
          for (
            var o = 0, r = Object.getOwnPropertySymbols(e);
            o < r.length;
            o++
          )
            0 > t.indexOf(r[o]) &&
              Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
              (n[r[o]] = e[r[o]]);
        return n;
      }
      Object.create;
      Object.create;
      var u =
          ("function" == typeof SuppressedError && SuppressedError, n(40329)),
        c = "right-scroll-bar-position",
        l = "width-before-scroll-bar";
      function s(e, t) {
        return "function" == typeof e ? e(t) : e && (e.current = t), e;
      }
      var d = "undefined" != typeof window ? u.useLayoutEffect : u.useEffect,
        f = new WeakMap();
      function h(e) {
        return e;
      }
      var m = (function (e) {
          void 0 === e && (e = {});
          var t,
            n,
            r,
            o,
            i =
              ((t = null),
              void 0 === n && (n = h),
              (r = []),
              (o = !1),
              {
                read: function () {
                  if (o)
                    throw Error(
                      "Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`."
                    );
                  return r.length ? r[r.length - 1] : null;
                },
                useMedium: function (e) {
                  var t = n(e, o);
                  return (
                    r.push(t),
                    function () {
                      r = r.filter(function (e) {
                        return e !== t;
                      });
                    }
                  );
                },
                assignSyncMedium: function (e) {
                  for (o = !0; r.length; ) {
                    var t = r;
                    (r = []), t.forEach(e);
                  }
                  r = {
                    push: function (t) {
                      return e(t);
                    },
                    filter: function () {
                      return r;
                    },
                  };
                },
                assignMedium: function (e) {
                  o = !0;
                  var t = [];
                  if (r.length) {
                    var n = r;
                    (r = []), n.forEach(e), (t = r);
                  }
                  var a = function () {
                      var n = t;
                      (t = []), n.forEach(e);
                    },
                    i = function () {
                      return Promise.resolve().then(a);
                    };
                  i(),
                    (r = {
                      push: function (e) {
                        t.push(e), i();
                      },
                      filter: function (e) {
                        return (t = t.filter(e)), r;
                      },
                    });
                },
              });
          return (i.options = a({ async: !0, ssr: !1 }, e)), i;
        })(),
        v = function () {},
        p = u.forwardRef(function (e, t) {
          var n,
            r,
            o,
            c,
            l = u.useRef(null),
            h = u.useState({
              onScrollCapture: v,
              onWheelCapture: v,
              onTouchMoveCapture: v,
            }),
            p = h[0],
            g = h[1],
            y = e.forwardProps,
            b = e.children,
            w = e.className,
            E = e.removeScrollBar,
            C = e.enabled,
            S = e.shards,
            x = e.sideCar,
            P = e.noIsolation,
            k = e.inert,
            T = e.allowPinchZoom,
            L = e.as,
            M = e.gapMode,
            j = i(e, [
              "forwardProps",
              "children",
              "className",
              "removeScrollBar",
              "enabled",
              "shards",
              "sideCar",
              "noIsolation",
              "inert",
              "allowPinchZoom",
              "as",
              "gapMode",
            ]),
            R =
              ((n = [l, t]),
              (r = function (e) {
                return n.forEach(function (t) {
                  return s(t, e);
                });
              }),
              ((o = (0, u.useState)(function () {
                return {
                  value: null,
                  callback: r,
                  facade: {
                    get current() {
                      return o.value;
                    },
                    set current(value) {
                      var e = o.value;
                      e !== value && ((o.value = value), o.callback(value, e));
                    },
                  },
                };
              })[0]).callback = r),
              (c = o.facade),
              d(
                function () {
                  var e = f.get(c);
                  if (e) {
                    var t = new Set(e),
                      r = new Set(n),
                      o = c.current;
                    t.forEach(function (e) {
                      r.has(e) || s(e, null);
                    }),
                      r.forEach(function (e) {
                        t.has(e) || s(e, o);
                      });
                  }
                  f.set(c, n);
                },
                [n]
              ),
              c),
            N = a(a({}, j), p);
          return u.createElement(
            u.Fragment,
            null,
            C &&
              u.createElement(x, {
                sideCar: m,
                removeScrollBar: E,
                shards: S,
                noIsolation: P,
                inert: k,
                setCallbacks: g,
                allowPinchZoom: !!T,
                lockRef: l,
                gapMode: M,
              }),
            y
              ? u.cloneElement(u.Children.only(b), a(a({}, N), { ref: R }))
              : u.createElement(
                  void 0 === L ? "div" : L,
                  a({}, N, { className: w, ref: R }),
                  b
                )
          );
        });
      (p.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 }),
        (p.classNames = { fullWidth: l, zeroRight: c });
      var g = function (e) {
        var t = e.sideCar,
          n = i(e, ["sideCar"]);
        if (!t)
          throw Error(
            "Sidecar: please provide `sideCar` property to import the right car"
          );
        var r = t.read();
        if (!r) throw Error("Sidecar medium not found");
        return u.createElement(r, a({}, n));
      };
      g.isSideCarExport = !0;
      var y = function () {
          var e = 0,
            t = null;
          return {
            add: function (r) {
              if (
                0 == e &&
                (t = (function () {
                  if (!document) return null;
                  var e = document.createElement("style");
                  e.type = "text/css";
                  var t = o || n.nc;
                  return t && e.setAttribute("nonce", t), e;
                })())
              ) {
                var a, i;
                (a = t).styleSheet
                  ? (a.styleSheet.cssText = r)
                  : a.appendChild(document.createTextNode(r)),
                  (i = t),
                  (
                    document.head || document.getElementsByTagName("head")[0]
                  ).appendChild(i);
              }
              e++;
            },
            remove: function () {
              --e ||
                !t ||
                (t.parentNode && t.parentNode.removeChild(t), (t = null));
            },
          };
        },
        b = function () {
          var e = y();
          return function (t, n) {
            u.useEffect(
              function () {
                return (
                  e.add(t),
                  function () {
                    e.remove();
                  }
                );
              },
              [t && n]
            );
          };
        },
        w = function () {
          var e = b();
          return function (t) {
            return e(t.styles, t.dynamic), null;
          };
        },
        E = { left: 0, top: 0, right: 0, gap: 0 },
        C = function (e) {
          return parseInt(e || "", 10) || 0;
        },
        S = function (e) {
          var t = window.getComputedStyle(document.body),
            n = t["padding" === e ? "paddingLeft" : "marginLeft"],
            r = t["padding" === e ? "paddingTop" : "marginTop"],
            o = t["padding" === e ? "paddingRight" : "marginRight"];
          return [C(n), C(r), C(o)];
        },
        x = function (e) {
          if ((void 0 === e && (e = "margin"), "undefined" == typeof window))
            return E;
          var t = S(e),
            n = document.documentElement.clientWidth,
            r = window.innerWidth;
          return {
            left: t[0],
            top: t[1],
            right: t[2],
            gap: Math.max(0, r - n + t[2] - t[0]),
          };
        },
        P = w(),
        k = "data-scroll-locked",
        T = function (e, t, n, r) {
          var o = e.left,
            a = e.top,
            i = e.right,
            u = e.gap;
          return (
            void 0 === n && (n = "margin"),
            "\n  ."
              .concat("with-scroll-bars-hidden", " {\n   overflow: hidden ")
              .concat(r, ";\n   padding-right: ")
              .concat(u, "px ")
              .concat(r, ";\n  }\n  body[")
              .concat(k, "] {\n    overflow: hidden ")
              .concat(r, ";\n    overscroll-behavior: contain;\n    ")
              .concat(
                [
                  t && "position: relative ".concat(r, ";"),
                  "margin" === n &&
                    "\n    padding-left: "
                      .concat(o, "px;\n    padding-top: ")
                      .concat(a, "px;\n    padding-right: ")
                      .concat(
                        i,
                        "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: "
                      )
                      .concat(u, "px ")
                      .concat(r, ";\n    "),
                  "padding" === n &&
                    "padding-right: ".concat(u, "px ").concat(r, ";"),
                ]
                  .filter(Boolean)
                  .join(""),
                "\n  }\n  \n  ."
              )
              .concat(c, " {\n    right: ")
              .concat(u, "px ")
              .concat(r, ";\n  }\n  \n  .")
              .concat(l, " {\n    margin-right: ")
              .concat(u, "px ")
              .concat(r, ";\n  }\n  \n  .")
              .concat(c, " .")
              .concat(c, " {\n    right: 0 ")
              .concat(r, ";\n  }\n  \n  .")
              .concat(l, " .")
              .concat(l, " {\n    margin-right: 0 ")
              .concat(r, ";\n  }\n  \n  body[")
              .concat(k, "] {\n    ")
              .concat("--removed-body-scroll-bar-size", ": ")
              .concat(u, "px;\n  }\n")
          );
        },
        L = function () {
          var e = parseInt(document.body.getAttribute(k) || "0", 10);
          return isFinite(e) ? e : 0;
        },
        M = function () {
          u.useEffect(function () {
            return (
              document.body.setAttribute(k, (L() + 1).toString()),
              function () {
                var e = L() - 1;
                e <= 0
                  ? document.body.removeAttribute(k)
                  : document.body.setAttribute(k, e.toString());
              }
            );
          }, []);
        },
        j = function (e) {
          var t = e.noRelative,
            n = e.noImportant,
            r = e.gapMode,
            o = void 0 === r ? "margin" : r;
          M();
          var a = u.useMemo(
            function () {
              return x(o);
            },
            [o]
          );
          return u.createElement(P, {
            styles: T(a, !t, o, n ? "" : "!important"),
          });
        },
        R = !1;
      if ("undefined" != typeof window)
        try {
          var N = Object.defineProperty({}, "passive", {
            get: function () {
              return (R = !0), !0;
            },
          });
          window.addEventListener("test", N, N),
            window.removeEventListener("test", N, N);
        } catch (e) {
          R = !1;
        }
      var O = !!R && { passive: !1 },
        A = function (e, t) {
          if (!(e instanceof Element)) return !1;
          var n = window.getComputedStyle(e);
          return (
            "hidden" !== n[t] &&
            (n.overflowY !== n.overflowX ||
              "TEXTAREA" === e.tagName ||
              "visible" !== n[t])
          );
        },
        I = function (e, t) {
          var n = t.ownerDocument,
            r = t;
          do {
            if (
              ("undefined" != typeof ShadowRoot &&
                r instanceof ShadowRoot &&
                (r = r.host),
              B(e, r))
            ) {
              var o = W(e, r);
              if (o[1] > o[2]) return !0;
            }
            r = r.parentNode;
          } while (r && r !== n.body);
          return !1;
        },
        B = function (e, t) {
          return "v" === e ? A(t, "overflowY") : A(t, "overflowX");
        },
        W = function (e, t) {
          return "v" === e
            ? [t.scrollTop, t.scrollHeight, t.clientHeight]
            : [t.scrollLeft, t.scrollWidth, t.clientWidth];
        },
        Y = function (e, t, n, r, o) {
          var a,
            i =
              ((a = window.getComputedStyle(t).direction),
              "h" === e && "rtl" === a ? -1 : 1),
            u = i * r,
            c = n.target,
            l = t.contains(c),
            s = !1,
            d = u > 0,
            f = 0,
            h = 0;
          do {
            var m = W(e, c),
              v = m[0],
              p = m[1] - m[2] - i * v;
            (v || p) && B(e, c) && ((f += p), (h += v)),
              (c = c instanceof ShadowRoot ? c.host : c.parentNode);
          } while (
            (!l && c !== document.body) ||
            (l && (t.contains(c) || t === c))
          );
          return (
            d && ((o && 1 > Math.abs(f)) || (!o && u > f))
              ? (s = !0)
              : !d && ((o && 1 > Math.abs(h)) || (!o && -u > h)) && (s = !0),
            s
          );
        },
        q = function (e) {
          return "changedTouches" in e
            ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
            : [0, 0];
        },
        _ = function (e) {
          return [e.deltaX, e.deltaY];
        },
        H = function (e) {
          return e && "current" in e ? e.current : e;
        },
        X = 0,
        F = [];
      let D =
        ((r = function (e) {
          var t = u.useRef([]),
            n = u.useRef([0, 0]),
            r = u.useRef(),
            o = u.useState(X++)[0],
            a = u.useState(w)[0],
            i = u.useRef(e);
          u.useEffect(
            function () {
              i.current = e;
            },
            [e]
          ),
            u.useEffect(
              function () {
                if (e.inert) {
                  document.body.classList.add("block-interactivity-".concat(o));
                  var t = (function (e, t, n) {
                    if (n || 2 == arguments.length)
                      for (var r, o = 0, a = t.length; o < a; o++)
                        (!r && o in t) ||
                          (r || (r = Array.prototype.slice.call(t, 0, o)),
                          (r[o] = t[o]));
                    return e.concat(r || Array.prototype.slice.call(t));
                  })([e.lockRef.current], (e.shards || []).map(H), !0).filter(
                    Boolean
                  );
                  return (
                    t.forEach(function (e) {
                      return e.classList.add("allow-interactivity-".concat(o));
                    }),
                    function () {
                      document.body.classList.remove(
                        "block-interactivity-".concat(o)
                      ),
                        t.forEach(function (e) {
                          return e.classList.remove(
                            "allow-interactivity-".concat(o)
                          );
                        });
                    }
                  );
                }
              },
              [e.inert, e.lockRef.current, e.shards]
            );
          var c = u.useCallback(function (e, t) {
              if (
                ("touches" in e && 2 === e.touches.length) ||
                ("wheel" === e.type && e.ctrlKey)
              )
                return !i.current.allowPinchZoom;
              var o,
                a = q(e),
                u = n.current,
                c = "deltaX" in e ? e.deltaX : u[0] - a[0],
                l = "deltaY" in e ? e.deltaY : u[1] - a[1],
                s = e.target,
                d = Math.abs(c) > Math.abs(l) ? "h" : "v";
              if ("touches" in e && "h" === d && "range" === s.type) return !1;
              var f = I(d, s);
              if (!f) return !0;
              if (
                (f ? (o = d) : ((o = "v" === d ? "h" : "v"), (f = I(d, s))), !f)
              )
                return !1;
              if (
                (!r.current &&
                  "changedTouches" in e &&
                  (c || l) &&
                  (r.current = o),
                !o)
              )
                return !0;
              var h = r.current || o;
              return Y(h, t, e, "h" === h ? c : l, !0);
            }, []),
            l = u.useCallback(function (e) {
              if (F.length && F[F.length - 1] === a) {
                var n = "deltaY" in e ? _(e) : q(e),
                  r = t.current.filter(function (t) {
                    var r;
                    return (
                      t.name === e.type &&
                      (t.target === e.target || e.target === t.shadowParent) &&
                      ((r = t.delta), r[0] === n[0] && r[1] === n[1])
                    );
                  })[0];
                if (r && r.should) {
                  e.cancelable && e.preventDefault();
                  return;
                }
                if (!r) {
                  var o = (i.current.shards || [])
                    .map(H)
                    .filter(Boolean)
                    .filter(function (t) {
                      return t.contains(e.target);
                    });
                  (o.length > 0 ? c(e, o[0]) : !i.current.noIsolation) &&
                    e.cancelable &&
                    e.preventDefault();
                }
              }
            }, []),
            s = u.useCallback(function (e, n, r, o) {
              var a = {
                name: e,
                delta: n,
                target: r,
                should: o,
                shadowParent: (function (e) {
                  for (var t = null; null !== e; )
                    e instanceof ShadowRoot && ((t = e.host), (e = e.host)),
                      (e = e.parentNode);
                  return t;
                })(r),
              };
              t.current.push(a),
                setTimeout(function () {
                  t.current = t.current.filter(function (e) {
                    return e !== a;
                  });
                }, 1);
            }, []),
            d = u.useCallback(function (e) {
              (n.current = q(e)), (r.current = void 0);
            }, []),
            f = u.useCallback(function (t) {
              s(t.type, _(t), t.target, c(t, e.lockRef.current));
            }, []),
            h = u.useCallback(function (t) {
              s(t.type, q(t), t.target, c(t, e.lockRef.current));
            }, []);
          u.useEffect(function () {
            return (
              F.push(a),
              e.setCallbacks({
                onScrollCapture: f,
                onWheelCapture: f,
                onTouchMoveCapture: h,
              }),
              document.addEventListener("wheel", l, O),
              document.addEventListener("touchmove", l, O),
              document.addEventListener("touchstart", d, O),
              function () {
                (F = F.filter(function (e) {
                  return e !== a;
                })),
                  document.removeEventListener("wheel", l, O),
                  document.removeEventListener("touchmove", l, O),
                  document.removeEventListener("touchstart", d, O);
              }
            );
          }, []);
          var m = e.removeScrollBar,
            v = e.inert;
          return u.createElement(
            u.Fragment,
            null,
            v
              ? u.createElement(a, {
                  styles: "\n  .block-interactivity-"
                    .concat(
                      o,
                      " {pointer-events: none;}\n  .allow-interactivity-"
                    )
                    .concat(o, " {pointer-events: all;}\n"),
                })
              : null,
            m ? u.createElement(j, { gapMode: e.gapMode }) : null
          );
        }),
        m.useMedium(r),
        g);
      var G = u.forwardRef(function (e, t) {
        return u.createElement(p, a({}, e, { ref: t, sideCar: D }));
      });
      G.classNames = p.classNames;
      let K = G;
    },
    93417: (e, t, n) => {
      n.d(t, { G: () => s, c: () => l });
      var r = n(46877),
        o = n(40329),
        a = n(82917),
        i = n(61990),
        u = n(63642);
      let c = (0, a.q6)("SidebarContext");
      function l() {
        return c.use();
      }
      function s(e) {
        let { children: t } = e,
          n = (0, o.useRef)(!0),
          [l, s] = (0, o.useState)(!1),
          [d, f] = (0, o.useState)(!1),
          h = (0, a.a8)();
        return (
          (0, u.T)(h, () => {
            n.current && s(!1), (n.current = !0);
          }),
          (0, r.jsx)(c.Provider, {
            value: (0, o.useMemo)(
              () => ({
                open: l,
                setOpen: s,
                collapsed: d,
                setCollapsed: f,
                closeOnRedirect: n,
              }),
              [l, d]
            ),
            children: (0, r.jsx)(i.GB, {
              open: l,
              onOpenChange: s,
              children: t,
            }),
          })
        );
      }
    },
    98271: (e, t, n) => {
      n.d(t, { Cr: () => o, I18nLabel: () => i, gJ: () => a, s9: () => u });
      var r = n(40329);
      let o = {
          search: "Search",
          searchNoResult: "No results found",
          toc: "On this page",
          tocNoHeadings: "No Headings",
          lastUpdate: "Last updated on",
          chooseLanguage: "Choose a language",
          nextPage: "Next Page",
          previousPage: "Previous Page",
          chooseTheme: "Theme",
          editOnGithub: "Edit on GitHub",
        },
        a = (0, r.createContext)({ text: o });
      function i(e) {
        let { text: t } = u();
        return t[e.label];
      }
      function u() {
        return (0, r.useContext)(a);
      }
    },
  },
]);
