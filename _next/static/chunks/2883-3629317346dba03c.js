"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2883],
  {
    11995: (e, r, o) => {
      o.d(r, { c: () => n });
      var t = o(40329);
      function n(e) {
        let r = t.useRef(e);
        return (
          t.useEffect(() => {
            r.current = e;
          }),
          t.useMemo(
            () =>
              (...e) =>
                r.current?.(...e),
            []
          )
        );
      }
    },
    14983: (e, r, o) => {
      o.d(r, { i: () => s });
      var t,
        n = o(40329),
        a = o(72297),
        l =
          (t || (t = o.t(n, 2)))[" useInsertionEffect ".trim().toString()] ||
          a.N;
      function s({
        prop: e,
        defaultProp: r,
        onChange: o = () => {},
        caller: t,
      }) {
        let [a, s, i] = (function ({ defaultProp: e, onChange: r }) {
            let [o, t] = n.useState(e),
              a = n.useRef(o),
              s = n.useRef(r);
            return (
              l(() => {
                s.current = r;
              }, [r]),
              n.useEffect(() => {
                a.current !== o && (s.current?.(o), (a.current = o));
              }, [o, a]),
              [o, t, s]
            );
          })({ defaultProp: r, onChange: o }),
          d = void 0 !== e,
          c = d ? e : a;
        {
          let r = n.useRef(void 0 !== e);
          n.useEffect(() => {
            let e = r.current;
            if (e !== d) {
              let r = d ? "controlled" : "uncontrolled";
              console.warn(
                `${t} is changing from ${
                  e ? "controlled" : "uncontrolled"
                } to ${r}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
              );
            }
            r.current = d;
          }, [d, t]);
        }
        return [
          c,
          n.useCallback(
            (r) => {
              if (d) {
                let o = "function" == typeof r ? r(e) : r;
                o !== e && i.current?.(o);
              } else s(r);
            },
            [d, e, s, i]
          ),
        ];
      }
      Symbol("RADIX:SYNC_STATE");
    },
    16596: (e, r, o) => {
      o.d(r, { s: () => l, t: () => a });
      var t = o(40329);
      function n(e, r) {
        if ("function" == typeof e) return e(r);
        null != e && (e.current = r);
      }
      function a(...e) {
        return (r) => {
          let o = !1,
            t = e.map((e) => {
              let t = n(e, r);
              return o || "function" != typeof t || (o = !0), t;
            });
          if (o)
            return () => {
              for (let r = 0; r < t.length; r++) {
                let o = t[r];
                "function" == typeof o ? o() : n(e[r], null);
              }
            };
        };
      }
      function l(...e) {
        return t.useCallback(a(...e), e);
      }
    },
    47467: (e, r, o) => {
      o.d(r, { QP: () => ed });
      let t = (e) => {
          let r = s(e),
            { conflictingClassGroups: o, conflictingClassGroupModifiers: t } =
              e;
          return {
            getClassGroupId: (e) => {
              let o = e.split("-");
              return (
                "" === o[0] && 1 !== o.length && o.shift(), n(o, r) || l(e)
              );
            },
            getConflictingClassGroupIds: (e, r) => {
              let n = o[e] || [];
              return r && t[e] ? [...n, ...t[e]] : n;
            },
          };
        },
        n = (e, r) => {
          if (0 === e.length) return r.classGroupId;
          let o = e[0],
            t = r.nextPart.get(o),
            a = t ? n(e.slice(1), t) : void 0;
          if (a) return a;
          if (0 === r.validators.length) return;
          let l = e.join("-");
          return r.validators.find(({ validator: e }) => e(l))?.classGroupId;
        },
        a = /^\[(.+)\]$/,
        l = (e) => {
          if (a.test(e)) {
            let r = a.exec(e)[1],
              o = r?.substring(0, r.indexOf(":"));
            if (o) return "arbitrary.." + o;
          }
        },
        s = (e) => {
          let { theme: r, classGroups: o } = e,
            t = { nextPart: new Map(), validators: [] };
          for (let e in o) i(o[e], t, e, r);
          return t;
        },
        i = (e, r, o, t) => {
          e.forEach((e) => {
            if ("string" == typeof e) {
              ("" === e ? r : d(r, e)).classGroupId = o;
              return;
            }
            if ("function" == typeof e)
              return c(e)
                ? void i(e(t), r, o, t)
                : void r.validators.push({ validator: e, classGroupId: o });
            Object.entries(e).forEach(([e, n]) => {
              i(n, d(r, e), o, t);
            });
          });
        },
        d = (e, r) => {
          let o = e;
          return (
            r.split("-").forEach((e) => {
              o.nextPart.has(e) ||
                o.nextPart.set(e, { nextPart: new Map(), validators: [] }),
                (o = o.nextPart.get(e));
            }),
            o
          );
        },
        c = (e) => e.isThemeGetter,
        m = (e) => {
          if (e < 1) return { get: () => void 0, set: () => {} };
          let r = 0,
            o = new Map(),
            t = new Map(),
            n = (n, a) => {
              o.set(n, a), ++r > e && ((r = 0), (t = o), (o = new Map()));
            };
          return {
            get(e) {
              let r = o.get(e);
              return void 0 !== r
                ? r
                : void 0 !== (r = t.get(e))
                ? (n(e, r), r)
                : void 0;
            },
            set(e, r) {
              o.has(e) ? o.set(e, r) : n(e, r);
            },
          };
        },
        u = (e) => {
          let { prefix: r, experimentalParseClassName: o } = e,
            t = (e) => {
              let r,
                o = [],
                t = 0,
                n = 0,
                a = 0;
              for (let l = 0; l < e.length; l++) {
                let s = e[l];
                if (0 === t && 0 === n) {
                  if (":" === s) {
                    o.push(e.slice(a, l)), (a = l + 1);
                    continue;
                  }
                  if ("/" === s) {
                    r = l;
                    continue;
                  }
                }
                "[" === s
                  ? t++
                  : "]" === s
                  ? t--
                  : "(" === s
                  ? n++
                  : ")" === s && n--;
              }
              let l = 0 === o.length ? e : e.substring(a),
                s = p(l);
              return {
                modifiers: o,
                hasImportantModifier: s !== l,
                baseClassName: s,
                maybePostfixModifierPosition: r && r > a ? r - a : void 0,
              };
            };
          if (r) {
            let e = r + ":",
              o = t;
            t = (r) =>
              r.startsWith(e)
                ? o(r.substring(e.length))
                : {
                    isExternal: !0,
                    modifiers: [],
                    hasImportantModifier: !1,
                    baseClassName: r,
                    maybePostfixModifierPosition: void 0,
                  };
          }
          if (o) {
            let e = t;
            t = (r) => o({ className: r, parseClassName: e });
          }
          return t;
        },
        p = (e) =>
          e.endsWith("!")
            ? e.substring(0, e.length - 1)
            : e.startsWith("!")
            ? e.substring(1)
            : e,
        f = (e) => {
          let r = Object.fromEntries(
            e.orderSensitiveModifiers.map((e) => [e, !0])
          );
          return (e) => {
            if (e.length <= 1) return e;
            let o = [],
              t = [];
            return (
              e.forEach((e) => {
                "[" === e[0] || r[e]
                  ? (o.push(...t.sort(), e), (t = []))
                  : t.push(e);
              }),
              o.push(...t.sort()),
              o
            );
          };
        },
        b = (e) => ({
          cache: m(e.cacheSize),
          parseClassName: u(e),
          sortModifiers: f(e),
          ...t(e),
        }),
        g = /\s+/,
        h = (e, r) => {
          let {
              parseClassName: o,
              getClassGroupId: t,
              getConflictingClassGroupIds: n,
              sortModifiers: a,
            } = r,
            l = [],
            s = e.trim().split(g),
            i = "";
          for (let e = s.length - 1; e >= 0; e -= 1) {
            let r = s[e],
              {
                isExternal: d,
                modifiers: c,
                hasImportantModifier: m,
                baseClassName: u,
                maybePostfixModifierPosition: p,
              } = o(r);
            if (d) {
              i = r + (i.length > 0 ? " " + i : i);
              continue;
            }
            let f = !!p,
              b = t(f ? u.substring(0, p) : u);
            if (!b) {
              if (!f || !(b = t(u))) {
                i = r + (i.length > 0 ? " " + i : i);
                continue;
              }
              f = !1;
            }
            let g = a(c).join(":"),
              h = m ? g + "!" : g,
              k = h + b;
            if (l.includes(k)) continue;
            l.push(k);
            let w = n(b, f);
            for (let e = 0; e < w.length; ++e) {
              let r = w[e];
              l.push(h + r);
            }
            i = r + (i.length > 0 ? " " + i : i);
          }
          return i;
        };
      function k() {
        let e,
          r,
          o = 0,
          t = "";
        for (; o < arguments.length; )
          (e = arguments[o++]) && (r = w(e)) && (t && (t += " "), (t += r));
        return t;
      }
      let w = (e) => {
          let r;
          if ("string" == typeof e) return e;
          let o = "";
          for (let t = 0; t < e.length; t++)
            e[t] && (r = w(e[t])) && (o && (o += " "), (o += r));
          return o;
        },
        x = (e) => {
          let r = (r) => r[e] || [];
          return (r.isThemeGetter = !0), r;
        },
        v = /^\[(?:(\w[\w-]*):)?(.+)\]$/i,
        y = /^\((?:(\w[\w-]*):)?(.+)\)$/i,
        z = /^\d+\/\d+$/,
        N = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
        M =
          /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
        E = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,
        j = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
        C =
          /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
        O = (e) => z.test(e),
        P = (e) => !!e && !Number.isNaN(Number(e)),
        I = (e) => !!e && Number.isInteger(Number(e)),
        T = (e) => e.endsWith("%") && P(e.slice(0, -1)),
        S = (e) => N.test(e),
        $ = () => !0,
        _ = (e) => M.test(e) && !E.test(e),
        A = () => !1,
        R = (e) => j.test(e),
        U = (e) => C.test(e),
        G = (e) => !W(e) && !V(e),
        D = (e) => ee(e, en, A),
        W = (e) => v.test(e),
        L = (e) => ee(e, ea, _),
        F = (e) => ee(e, el, P),
        q = (e) => ee(e, eo, A),
        B = (e) => ee(e, et, U),
        Q = (e) => ee(e, ei, R),
        V = (e) => y.test(e),
        X = (e) => er(e, ea),
        Y = (e) => er(e, es),
        H = (e) => er(e, eo),
        J = (e) => er(e, en),
        K = (e) => er(e, et),
        Z = (e) => er(e, ei, !0),
        ee = (e, r, o) => {
          let t = v.exec(e);
          return !!t && (t[1] ? r(t[1]) : o(t[2]));
        },
        er = (e, r, o = !1) => {
          let t = y.exec(e);
          return !!t && (t[1] ? r(t[1]) : o);
        },
        eo = (e) => "position" === e || "percentage" === e,
        et = (e) => "image" === e || "url" === e,
        en = (e) => "length" === e || "size" === e || "bg-size" === e,
        ea = (e) => "length" === e,
        el = (e) => "number" === e,
        es = (e) => "family-name" === e,
        ei = (e) => "shadow" === e;
      Symbol.toStringTag;
      let ed = (function (e, ...r) {
        let o,
          t,
          n,
          a = function (s) {
            return (
              (t = (o = b(r.reduce((e, r) => r(e), e()))).cache.get),
              (n = o.cache.set),
              (a = l),
              l(s)
            );
          };
        function l(e) {
          let r = t(e);
          if (r) return r;
          let a = h(e, o);
          return n(e, a), a;
        }
        return function () {
          return a(k.apply(null, arguments));
        };
      })(() => {
        let e = x("color"),
          r = x("font"),
          o = x("text"),
          t = x("font-weight"),
          n = x("tracking"),
          a = x("leading"),
          l = x("breakpoint"),
          s = x("container"),
          i = x("spacing"),
          d = x("radius"),
          c = x("shadow"),
          m = x("inset-shadow"),
          u = x("text-shadow"),
          p = x("drop-shadow"),
          f = x("blur"),
          b = x("perspective"),
          g = x("aspect"),
          h = x("ease"),
          k = x("animate"),
          w = () => [
            "auto",
            "avoid",
            "all",
            "avoid-page",
            "page",
            "left",
            "right",
            "column",
          ],
          v = () => [
            "center",
            "top",
            "bottom",
            "left",
            "right",
            "top-left",
            "left-top",
            "top-right",
            "right-top",
            "bottom-right",
            "right-bottom",
            "bottom-left",
            "left-bottom",
          ],
          y = () => [...v(), V, W],
          z = () => ["auto", "hidden", "clip", "visible", "scroll"],
          N = () => ["auto", "contain", "none"],
          M = () => [V, W, i],
          E = () => [O, "full", "auto", ...M()],
          j = () => [I, "none", "subgrid", V, W],
          C = () => ["auto", { span: ["full", I, V, W] }, I, V, W],
          _ = () => [I, "auto", V, W],
          A = () => ["auto", "min", "max", "fr", V, W],
          R = () => [
            "start",
            "end",
            "center",
            "between",
            "around",
            "evenly",
            "stretch",
            "baseline",
            "center-safe",
            "end-safe",
          ],
          U = () => [
            "start",
            "end",
            "center",
            "stretch",
            "center-safe",
            "end-safe",
          ],
          ee = () => ["auto", ...M()],
          er = () => [
            O,
            "auto",
            "full",
            "dvw",
            "dvh",
            "lvw",
            "lvh",
            "svw",
            "svh",
            "min",
            "max",
            "fit",
            ...M(),
          ],
          eo = () => [e, V, W],
          et = () => [...v(), H, q, { position: [V, W] }],
          en = () => [
            "no-repeat",
            { repeat: ["", "x", "y", "space", "round"] },
          ],
          ea = () => ["auto", "cover", "contain", J, D, { size: [V, W] }],
          el = () => [T, X, L],
          es = () => ["", "none", "full", d, V, W],
          ei = () => ["", P, X, L],
          ed = () => ["solid", "dashed", "dotted", "double"],
          ec = () => [
            "normal",
            "multiply",
            "screen",
            "overlay",
            "darken",
            "lighten",
            "color-dodge",
            "color-burn",
            "hard-light",
            "soft-light",
            "difference",
            "exclusion",
            "hue",
            "saturation",
            "color",
            "luminosity",
          ],
          em = () => [P, T, H, q],
          eu = () => ["", "none", f, V, W],
          ep = () => ["none", P, V, W],
          ef = () => ["none", P, V, W],
          eb = () => [P, V, W],
          eg = () => [O, "full", ...M()];
        return {
          cacheSize: 500,
          theme: {
            animate: ["spin", "ping", "pulse", "bounce"],
            aspect: ["video"],
            blur: [S],
            breakpoint: [S],
            color: [$],
            container: [S],
            "drop-shadow": [S],
            ease: ["in", "out", "in-out"],
            font: [G],
            "font-weight": [
              "thin",
              "extralight",
              "light",
              "normal",
              "medium",
              "semibold",
              "bold",
              "extrabold",
              "black",
            ],
            "inset-shadow": [S],
            leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
            perspective: [
              "dramatic",
              "near",
              "normal",
              "midrange",
              "distant",
              "none",
            ],
            radius: [S],
            shadow: [S],
            spacing: ["px", P],
            text: [S],
            "text-shadow": [S],
            tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"],
          },
          classGroups: {
            aspect: [{ aspect: ["auto", "square", O, W, V, g] }],
            container: ["container"],
            columns: [{ columns: [P, W, V, s] }],
            "break-after": [{ "break-after": w() }],
            "break-before": [{ "break-before": w() }],
            "break-inside": [
              {
                "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"],
              },
            ],
            "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
            box: [{ box: ["border", "content"] }],
            display: [
              "block",
              "inline-block",
              "inline",
              "flex",
              "inline-flex",
              "table",
              "inline-table",
              "table-caption",
              "table-cell",
              "table-column",
              "table-column-group",
              "table-footer-group",
              "table-header-group",
              "table-row-group",
              "table-row",
              "flow-root",
              "grid",
              "inline-grid",
              "contents",
              "list-item",
              "hidden",
            ],
            sr: ["sr-only", "not-sr-only"],
            float: [{ float: ["right", "left", "none", "start", "end"] }],
            clear: [
              { clear: ["left", "right", "both", "none", "start", "end"] },
            ],
            isolation: ["isolate", "isolation-auto"],
            "object-fit": [
              { object: ["contain", "cover", "fill", "none", "scale-down"] },
            ],
            "object-position": [{ object: y() }],
            overflow: [{ overflow: z() }],
            "overflow-x": [{ "overflow-x": z() }],
            "overflow-y": [{ "overflow-y": z() }],
            overscroll: [{ overscroll: N() }],
            "overscroll-x": [{ "overscroll-x": N() }],
            "overscroll-y": [{ "overscroll-y": N() }],
            position: ["static", "fixed", "absolute", "relative", "sticky"],
            inset: [{ inset: E() }],
            "inset-x": [{ "inset-x": E() }],
            "inset-y": [{ "inset-y": E() }],
            start: [{ start: E() }],
            end: [{ end: E() }],
            top: [{ top: E() }],
            right: [{ right: E() }],
            bottom: [{ bottom: E() }],
            left: [{ left: E() }],
            visibility: ["visible", "invisible", "collapse"],
            z: [{ z: [I, "auto", V, W] }],
            basis: [{ basis: [O, "full", "auto", s, ...M()] }],
            "flex-direction": [
              { flex: ["row", "row-reverse", "col", "col-reverse"] },
            ],
            "flex-wrap": [{ flex: ["nowrap", "wrap", "wrap-reverse"] }],
            flex: [{ flex: [P, O, "auto", "initial", "none", W] }],
            grow: [{ grow: ["", P, V, W] }],
            shrink: [{ shrink: ["", P, V, W] }],
            order: [{ order: [I, "first", "last", "none", V, W] }],
            "grid-cols": [{ "grid-cols": j() }],
            "col-start-end": [{ col: C() }],
            "col-start": [{ "col-start": _() }],
            "col-end": [{ "col-end": _() }],
            "grid-rows": [{ "grid-rows": j() }],
            "row-start-end": [{ row: C() }],
            "row-start": [{ "row-start": _() }],
            "row-end": [{ "row-end": _() }],
            "grid-flow": [
              {
                "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"],
              },
            ],
            "auto-cols": [{ "auto-cols": A() }],
            "auto-rows": [{ "auto-rows": A() }],
            gap: [{ gap: M() }],
            "gap-x": [{ "gap-x": M() }],
            "gap-y": [{ "gap-y": M() }],
            "justify-content": [{ justify: [...R(), "normal"] }],
            "justify-items": [{ "justify-items": [...U(), "normal"] }],
            "justify-self": [{ "justify-self": ["auto", ...U()] }],
            "align-content": [{ content: ["normal", ...R()] }],
            "align-items": [{ items: [...U(), { baseline: ["", "last"] }] }],
            "align-self": [
              { self: ["auto", ...U(), { baseline: ["", "last"] }] },
            ],
            "place-content": [{ "place-content": R() }],
            "place-items": [{ "place-items": [...U(), "baseline"] }],
            "place-self": [{ "place-self": ["auto", ...U()] }],
            p: [{ p: M() }],
            px: [{ px: M() }],
            py: [{ py: M() }],
            ps: [{ ps: M() }],
            pe: [{ pe: M() }],
            pt: [{ pt: M() }],
            pr: [{ pr: M() }],
            pb: [{ pb: M() }],
            pl: [{ pl: M() }],
            m: [{ m: ee() }],
            mx: [{ mx: ee() }],
            my: [{ my: ee() }],
            ms: [{ ms: ee() }],
            me: [{ me: ee() }],
            mt: [{ mt: ee() }],
            mr: [{ mr: ee() }],
            mb: [{ mb: ee() }],
            ml: [{ ml: ee() }],
            "space-x": [{ "space-x": M() }],
            "space-x-reverse": ["space-x-reverse"],
            "space-y": [{ "space-y": M() }],
            "space-y-reverse": ["space-y-reverse"],
            size: [{ size: er() }],
            w: [{ w: [s, "screen", ...er()] }],
            "min-w": [{ "min-w": [s, "screen", "none", ...er()] }],
            "max-w": [
              {
                "max-w": [
                  s,
                  "screen",
                  "none",
                  "prose",
                  { screen: [l] },
                  ...er(),
                ],
              },
            ],
            h: [{ h: ["screen", "lh", ...er()] }],
            "min-h": [{ "min-h": ["screen", "lh", "none", ...er()] }],
            "max-h": [{ "max-h": ["screen", "lh", ...er()] }],
            "font-size": [{ text: ["base", o, X, L] }],
            "font-smoothing": ["antialiased", "subpixel-antialiased"],
            "font-style": ["italic", "not-italic"],
            "font-weight": [{ font: [t, V, F] }],
            "font-stretch": [
              {
                "font-stretch": [
                  "ultra-condensed",
                  "extra-condensed",
                  "condensed",
                  "semi-condensed",
                  "normal",
                  "semi-expanded",
                  "expanded",
                  "extra-expanded",
                  "ultra-expanded",
                  T,
                  W,
                ],
              },
            ],
            "font-family": [{ font: [Y, W, r] }],
            "fvn-normal": ["normal-nums"],
            "fvn-ordinal": ["ordinal"],
            "fvn-slashed-zero": ["slashed-zero"],
            "fvn-figure": ["lining-nums", "oldstyle-nums"],
            "fvn-spacing": ["proportional-nums", "tabular-nums"],
            "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
            tracking: [{ tracking: [n, V, W] }],
            "line-clamp": [{ "line-clamp": [P, "none", V, F] }],
            leading: [{ leading: [a, ...M()] }],
            "list-image": [{ "list-image": ["none", V, W] }],
            "list-style-position": [{ list: ["inside", "outside"] }],
            "list-style-type": [{ list: ["disc", "decimal", "none", V, W] }],
            "text-alignment": [
              { text: ["left", "center", "right", "justify", "start", "end"] },
            ],
            "placeholder-color": [{ placeholder: eo() }],
            "text-color": [{ text: eo() }],
            "text-decoration": [
              "underline",
              "overline",
              "line-through",
              "no-underline",
            ],
            "text-decoration-style": [{ decoration: [...ed(), "wavy"] }],
            "text-decoration-thickness": [
              { decoration: [P, "from-font", "auto", V, L] },
            ],
            "text-decoration-color": [{ decoration: eo() }],
            "underline-offset": [{ "underline-offset": [P, "auto", V, W] }],
            "text-transform": [
              "uppercase",
              "lowercase",
              "capitalize",
              "normal-case",
            ],
            "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
            "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
            indent: [{ indent: M() }],
            "vertical-align": [
              {
                align: [
                  "baseline",
                  "top",
                  "middle",
                  "bottom",
                  "text-top",
                  "text-bottom",
                  "sub",
                  "super",
                  V,
                  W,
                ],
              },
            ],
            whitespace: [
              {
                whitespace: [
                  "normal",
                  "nowrap",
                  "pre",
                  "pre-line",
                  "pre-wrap",
                  "break-spaces",
                ],
              },
            ],
            break: [{ break: ["normal", "words", "all", "keep"] }],
            wrap: [{ wrap: ["break-word", "anywhere", "normal"] }],
            hyphens: [{ hyphens: ["none", "manual", "auto"] }],
            content: [{ content: ["none", V, W] }],
            "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
            "bg-clip": [
              { "bg-clip": ["border", "padding", "content", "text"] },
            ],
            "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
            "bg-position": [{ bg: et() }],
            "bg-repeat": [{ bg: en() }],
            "bg-size": [{ bg: ea() }],
            "bg-image": [
              {
                bg: [
                  "none",
                  {
                    linear: [
                      { to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
                      I,
                      V,
                      W,
                    ],
                    radial: ["", V, W],
                    conic: [I, V, W],
                  },
                  K,
                  B,
                ],
              },
            ],
            "bg-color": [{ bg: eo() }],
            "gradient-from-pos": [{ from: el() }],
            "gradient-via-pos": [{ via: el() }],
            "gradient-to-pos": [{ to: el() }],
            "gradient-from": [{ from: eo() }],
            "gradient-via": [{ via: eo() }],
            "gradient-to": [{ to: eo() }],
            rounded: [{ rounded: es() }],
            "rounded-s": [{ "rounded-s": es() }],
            "rounded-e": [{ "rounded-e": es() }],
            "rounded-t": [{ "rounded-t": es() }],
            "rounded-r": [{ "rounded-r": es() }],
            "rounded-b": [{ "rounded-b": es() }],
            "rounded-l": [{ "rounded-l": es() }],
            "rounded-ss": [{ "rounded-ss": es() }],
            "rounded-se": [{ "rounded-se": es() }],
            "rounded-ee": [{ "rounded-ee": es() }],
            "rounded-es": [{ "rounded-es": es() }],
            "rounded-tl": [{ "rounded-tl": es() }],
            "rounded-tr": [{ "rounded-tr": es() }],
            "rounded-br": [{ "rounded-br": es() }],
            "rounded-bl": [{ "rounded-bl": es() }],
            "border-w": [{ border: ei() }],
            "border-w-x": [{ "border-x": ei() }],
            "border-w-y": [{ "border-y": ei() }],
            "border-w-s": [{ "border-s": ei() }],
            "border-w-e": [{ "border-e": ei() }],
            "border-w-t": [{ "border-t": ei() }],
            "border-w-r": [{ "border-r": ei() }],
            "border-w-b": [{ "border-b": ei() }],
            "border-w-l": [{ "border-l": ei() }],
            "divide-x": [{ "divide-x": ei() }],
            "divide-x-reverse": ["divide-x-reverse"],
            "divide-y": [{ "divide-y": ei() }],
            "divide-y-reverse": ["divide-y-reverse"],
            "border-style": [{ border: [...ed(), "hidden", "none"] }],
            "divide-style": [{ divide: [...ed(), "hidden", "none"] }],
            "border-color": [{ border: eo() }],
            "border-color-x": [{ "border-x": eo() }],
            "border-color-y": [{ "border-y": eo() }],
            "border-color-s": [{ "border-s": eo() }],
            "border-color-e": [{ "border-e": eo() }],
            "border-color-t": [{ "border-t": eo() }],
            "border-color-r": [{ "border-r": eo() }],
            "border-color-b": [{ "border-b": eo() }],
            "border-color-l": [{ "border-l": eo() }],
            "divide-color": [{ divide: eo() }],
            "outline-style": [{ outline: [...ed(), "none", "hidden"] }],
            "outline-offset": [{ "outline-offset": [P, V, W] }],
            "outline-w": [{ outline: ["", P, X, L] }],
            "outline-color": [{ outline: eo() }],
            shadow: [{ shadow: ["", "none", c, Z, Q] }],
            "shadow-color": [{ shadow: eo() }],
            "inset-shadow": [{ "inset-shadow": ["none", m, Z, Q] }],
            "inset-shadow-color": [{ "inset-shadow": eo() }],
            "ring-w": [{ ring: ei() }],
            "ring-w-inset": ["ring-inset"],
            "ring-color": [{ ring: eo() }],
            "ring-offset-w": [{ "ring-offset": [P, L] }],
            "ring-offset-color": [{ "ring-offset": eo() }],
            "inset-ring-w": [{ "inset-ring": ei() }],
            "inset-ring-color": [{ "inset-ring": eo() }],
            "text-shadow": [{ "text-shadow": ["none", u, Z, Q] }],
            "text-shadow-color": [{ "text-shadow": eo() }],
            opacity: [{ opacity: [P, V, W] }],
            "mix-blend": [
              { "mix-blend": [...ec(), "plus-darker", "plus-lighter"] },
            ],
            "bg-blend": [{ "bg-blend": ec() }],
            "mask-clip": [
              {
                "mask-clip": [
                  "border",
                  "padding",
                  "content",
                  "fill",
                  "stroke",
                  "view",
                ],
              },
              "mask-no-clip",
            ],
            "mask-composite": [
              { mask: ["add", "subtract", "intersect", "exclude"] },
            ],
            "mask-image-linear-pos": [{ "mask-linear": [P] }],
            "mask-image-linear-from-pos": [{ "mask-linear-from": em() }],
            "mask-image-linear-to-pos": [{ "mask-linear-to": em() }],
            "mask-image-linear-from-color": [{ "mask-linear-from": eo() }],
            "mask-image-linear-to-color": [{ "mask-linear-to": eo() }],
            "mask-image-t-from-pos": [{ "mask-t-from": em() }],
            "mask-image-t-to-pos": [{ "mask-t-to": em() }],
            "mask-image-t-from-color": [{ "mask-t-from": eo() }],
            "mask-image-t-to-color": [{ "mask-t-to": eo() }],
            "mask-image-r-from-pos": [{ "mask-r-from": em() }],
            "mask-image-r-to-pos": [{ "mask-r-to": em() }],
            "mask-image-r-from-color": [{ "mask-r-from": eo() }],
            "mask-image-r-to-color": [{ "mask-r-to": eo() }],
            "mask-image-b-from-pos": [{ "mask-b-from": em() }],
            "mask-image-b-to-pos": [{ "mask-b-to": em() }],
            "mask-image-b-from-color": [{ "mask-b-from": eo() }],
            "mask-image-b-to-color": [{ "mask-b-to": eo() }],
            "mask-image-l-from-pos": [{ "mask-l-from": em() }],
            "mask-image-l-to-pos": [{ "mask-l-to": em() }],
            "mask-image-l-from-color": [{ "mask-l-from": eo() }],
            "mask-image-l-to-color": [{ "mask-l-to": eo() }],
            "mask-image-x-from-pos": [{ "mask-x-from": em() }],
            "mask-image-x-to-pos": [{ "mask-x-to": em() }],
            "mask-image-x-from-color": [{ "mask-x-from": eo() }],
            "mask-image-x-to-color": [{ "mask-x-to": eo() }],
            "mask-image-y-from-pos": [{ "mask-y-from": em() }],
            "mask-image-y-to-pos": [{ "mask-y-to": em() }],
            "mask-image-y-from-color": [{ "mask-y-from": eo() }],
            "mask-image-y-to-color": [{ "mask-y-to": eo() }],
            "mask-image-radial": [{ "mask-radial": [V, W] }],
            "mask-image-radial-from-pos": [{ "mask-radial-from": em() }],
            "mask-image-radial-to-pos": [{ "mask-radial-to": em() }],
            "mask-image-radial-from-color": [{ "mask-radial-from": eo() }],
            "mask-image-radial-to-color": [{ "mask-radial-to": eo() }],
            "mask-image-radial-shape": [
              { "mask-radial": ["circle", "ellipse"] },
            ],
            "mask-image-radial-size": [
              {
                "mask-radial": [
                  { closest: ["side", "corner"], farthest: ["side", "corner"] },
                ],
              },
            ],
            "mask-image-radial-pos": [{ "mask-radial-at": v() }],
            "mask-image-conic-pos": [{ "mask-conic": [P] }],
            "mask-image-conic-from-pos": [{ "mask-conic-from": em() }],
            "mask-image-conic-to-pos": [{ "mask-conic-to": em() }],
            "mask-image-conic-from-color": [{ "mask-conic-from": eo() }],
            "mask-image-conic-to-color": [{ "mask-conic-to": eo() }],
            "mask-mode": [{ mask: ["alpha", "luminance", "match"] }],
            "mask-origin": [
              {
                "mask-origin": [
                  "border",
                  "padding",
                  "content",
                  "fill",
                  "stroke",
                  "view",
                ],
              },
            ],
            "mask-position": [{ mask: et() }],
            "mask-repeat": [{ mask: en() }],
            "mask-size": [{ mask: ea() }],
            "mask-type": [{ "mask-type": ["alpha", "luminance"] }],
            "mask-image": [{ mask: ["none", V, W] }],
            filter: [{ filter: ["", "none", V, W] }],
            blur: [{ blur: eu() }],
            brightness: [{ brightness: [P, V, W] }],
            contrast: [{ contrast: [P, V, W] }],
            "drop-shadow": [{ "drop-shadow": ["", "none", p, Z, Q] }],
            "drop-shadow-color": [{ "drop-shadow": eo() }],
            grayscale: [{ grayscale: ["", P, V, W] }],
            "hue-rotate": [{ "hue-rotate": [P, V, W] }],
            invert: [{ invert: ["", P, V, W] }],
            saturate: [{ saturate: [P, V, W] }],
            sepia: [{ sepia: ["", P, V, W] }],
            "backdrop-filter": [{ "backdrop-filter": ["", "none", V, W] }],
            "backdrop-blur": [{ "backdrop-blur": eu() }],
            "backdrop-brightness": [{ "backdrop-brightness": [P, V, W] }],
            "backdrop-contrast": [{ "backdrop-contrast": [P, V, W] }],
            "backdrop-grayscale": [{ "backdrop-grayscale": ["", P, V, W] }],
            "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [P, V, W] }],
            "backdrop-invert": [{ "backdrop-invert": ["", P, V, W] }],
            "backdrop-opacity": [{ "backdrop-opacity": [P, V, W] }],
            "backdrop-saturate": [{ "backdrop-saturate": [P, V, W] }],
            "backdrop-sepia": [{ "backdrop-sepia": ["", P, V, W] }],
            "border-collapse": [{ border: ["collapse", "separate"] }],
            "border-spacing": [{ "border-spacing": M() }],
            "border-spacing-x": [{ "border-spacing-x": M() }],
            "border-spacing-y": [{ "border-spacing-y": M() }],
            "table-layout": [{ table: ["auto", "fixed"] }],
            caption: [{ caption: ["top", "bottom"] }],
            transition: [
              {
                transition: [
                  "",
                  "all",
                  "colors",
                  "opacity",
                  "shadow",
                  "transform",
                  "none",
                  V,
                  W,
                ],
              },
            ],
            "transition-behavior": [{ transition: ["normal", "discrete"] }],
            duration: [{ duration: [P, "initial", V, W] }],
            ease: [{ ease: ["linear", "initial", h, V, W] }],
            delay: [{ delay: [P, V, W] }],
            animate: [{ animate: ["none", k, V, W] }],
            backface: [{ backface: ["hidden", "visible"] }],
            perspective: [{ perspective: [b, V, W] }],
            "perspective-origin": [{ "perspective-origin": y() }],
            rotate: [{ rotate: ep() }],
            "rotate-x": [{ "rotate-x": ep() }],
            "rotate-y": [{ "rotate-y": ep() }],
            "rotate-z": [{ "rotate-z": ep() }],
            scale: [{ scale: ef() }],
            "scale-x": [{ "scale-x": ef() }],
            "scale-y": [{ "scale-y": ef() }],
            "scale-z": [{ "scale-z": ef() }],
            "scale-3d": ["scale-3d"],
            skew: [{ skew: eb() }],
            "skew-x": [{ "skew-x": eb() }],
            "skew-y": [{ "skew-y": eb() }],
            transform: [{ transform: [V, W, "", "none", "gpu", "cpu"] }],
            "transform-origin": [{ origin: y() }],
            "transform-style": [{ transform: ["3d", "flat"] }],
            translate: [{ translate: eg() }],
            "translate-x": [{ "translate-x": eg() }],
            "translate-y": [{ "translate-y": eg() }],
            "translate-z": [{ "translate-z": eg() }],
            "translate-none": ["translate-none"],
            accent: [{ accent: eo() }],
            appearance: [{ appearance: ["none", "auto"] }],
            "caret-color": [{ caret: eo() }],
            "color-scheme": [
              {
                scheme: [
                  "normal",
                  "dark",
                  "light",
                  "light-dark",
                  "only-dark",
                  "only-light",
                ],
              },
            ],
            cursor: [
              {
                cursor: [
                  "auto",
                  "default",
                  "pointer",
                  "wait",
                  "text",
                  "move",
                  "help",
                  "not-allowed",
                  "none",
                  "context-menu",
                  "progress",
                  "cell",
                  "crosshair",
                  "vertical-text",
                  "alias",
                  "copy",
                  "no-drop",
                  "grab",
                  "grabbing",
                  "all-scroll",
                  "col-resize",
                  "row-resize",
                  "n-resize",
                  "e-resize",
                  "s-resize",
                  "w-resize",
                  "ne-resize",
                  "nw-resize",
                  "se-resize",
                  "sw-resize",
                  "ew-resize",
                  "ns-resize",
                  "nesw-resize",
                  "nwse-resize",
                  "zoom-in",
                  "zoom-out",
                  V,
                  W,
                ],
              },
            ],
            "field-sizing": [{ "field-sizing": ["fixed", "content"] }],
            "pointer-events": [{ "pointer-events": ["auto", "none"] }],
            resize: [{ resize: ["none", "", "y", "x"] }],
            "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
            "scroll-m": [{ "scroll-m": M() }],
            "scroll-mx": [{ "scroll-mx": M() }],
            "scroll-my": [{ "scroll-my": M() }],
            "scroll-ms": [{ "scroll-ms": M() }],
            "scroll-me": [{ "scroll-me": M() }],
            "scroll-mt": [{ "scroll-mt": M() }],
            "scroll-mr": [{ "scroll-mr": M() }],
            "scroll-mb": [{ "scroll-mb": M() }],
            "scroll-ml": [{ "scroll-ml": M() }],
            "scroll-p": [{ "scroll-p": M() }],
            "scroll-px": [{ "scroll-px": M() }],
            "scroll-py": [{ "scroll-py": M() }],
            "scroll-ps": [{ "scroll-ps": M() }],
            "scroll-pe": [{ "scroll-pe": M() }],
            "scroll-pt": [{ "scroll-pt": M() }],
            "scroll-pr": [{ "scroll-pr": M() }],
            "scroll-pb": [{ "scroll-pb": M() }],
            "scroll-pl": [{ "scroll-pl": M() }],
            "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
            "snap-stop": [{ snap: ["normal", "always"] }],
            "snap-type": [{ snap: ["none", "x", "y", "both"] }],
            "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
            touch: [{ touch: ["auto", "none", "manipulation"] }],
            "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
            "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
            "touch-pz": ["touch-pinch-zoom"],
            select: [{ select: ["none", "text", "all", "auto"] }],
            "will-change": [
              {
                "will-change": [
                  "auto",
                  "scroll",
                  "contents",
                  "transform",
                  V,
                  W,
                ],
              },
            ],
            fill: [{ fill: ["none", ...eo()] }],
            "stroke-w": [{ stroke: [P, X, L, F] }],
            stroke: [{ stroke: ["none", ...eo()] }],
            "forced-color-adjust": [
              { "forced-color-adjust": ["auto", "none"] },
            ],
          },
          conflictingClassGroups: {
            overflow: ["overflow-x", "overflow-y"],
            overscroll: ["overscroll-x", "overscroll-y"],
            inset: [
              "inset-x",
              "inset-y",
              "start",
              "end",
              "top",
              "right",
              "bottom",
              "left",
            ],
            "inset-x": ["right", "left"],
            "inset-y": ["top", "bottom"],
            flex: ["basis", "grow", "shrink"],
            gap: ["gap-x", "gap-y"],
            p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
            px: ["pr", "pl"],
            py: ["pt", "pb"],
            m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
            mx: ["mr", "ml"],
            my: ["mt", "mb"],
            size: ["w", "h"],
            "font-size": ["leading"],
            "fvn-normal": [
              "fvn-ordinal",
              "fvn-slashed-zero",
              "fvn-figure",
              "fvn-spacing",
              "fvn-fraction",
            ],
            "fvn-ordinal": ["fvn-normal"],
            "fvn-slashed-zero": ["fvn-normal"],
            "fvn-figure": ["fvn-normal"],
            "fvn-spacing": ["fvn-normal"],
            "fvn-fraction": ["fvn-normal"],
            "line-clamp": ["display", "overflow"],
            rounded: [
              "rounded-s",
              "rounded-e",
              "rounded-t",
              "rounded-r",
              "rounded-b",
              "rounded-l",
              "rounded-ss",
              "rounded-se",
              "rounded-ee",
              "rounded-es",
              "rounded-tl",
              "rounded-tr",
              "rounded-br",
              "rounded-bl",
            ],
            "rounded-s": ["rounded-ss", "rounded-es"],
            "rounded-e": ["rounded-se", "rounded-ee"],
            "rounded-t": ["rounded-tl", "rounded-tr"],
            "rounded-r": ["rounded-tr", "rounded-br"],
            "rounded-b": ["rounded-br", "rounded-bl"],
            "rounded-l": ["rounded-tl", "rounded-bl"],
            "border-spacing": ["border-spacing-x", "border-spacing-y"],
            "border-w": [
              "border-w-x",
              "border-w-y",
              "border-w-s",
              "border-w-e",
              "border-w-t",
              "border-w-r",
              "border-w-b",
              "border-w-l",
            ],
            "border-w-x": ["border-w-r", "border-w-l"],
            "border-w-y": ["border-w-t", "border-w-b"],
            "border-color": [
              "border-color-x",
              "border-color-y",
              "border-color-s",
              "border-color-e",
              "border-color-t",
              "border-color-r",
              "border-color-b",
              "border-color-l",
            ],
            "border-color-x": ["border-color-r", "border-color-l"],
            "border-color-y": ["border-color-t", "border-color-b"],
            translate: ["translate-x", "translate-y", "translate-none"],
            "translate-none": [
              "translate",
              "translate-x",
              "translate-y",
              "translate-z",
            ],
            "scroll-m": [
              "scroll-mx",
              "scroll-my",
              "scroll-ms",
              "scroll-me",
              "scroll-mt",
              "scroll-mr",
              "scroll-mb",
              "scroll-ml",
            ],
            "scroll-mx": ["scroll-mr", "scroll-ml"],
            "scroll-my": ["scroll-mt", "scroll-mb"],
            "scroll-p": [
              "scroll-px",
              "scroll-py",
              "scroll-ps",
              "scroll-pe",
              "scroll-pt",
              "scroll-pr",
              "scroll-pb",
              "scroll-pl",
            ],
            "scroll-px": ["scroll-pr", "scroll-pl"],
            "scroll-py": ["scroll-pt", "scroll-pb"],
            touch: ["touch-x", "touch-y", "touch-pz"],
            "touch-x": ["touch"],
            "touch-y": ["touch"],
            "touch-pz": ["touch"],
          },
          conflictingClassGroupModifiers: { "font-size": ["leading"] },
          orderSensitiveModifiers: [
            "*",
            "**",
            "after",
            "backdrop",
            "before",
            "details-content",
            "file",
            "first-letter",
            "first-line",
            "marker",
            "placeholder",
            "selection",
          ],
        };
      });
    },
    55216: (e, r, o) => {
      o.d(r, { C: () => l });
      var t = o(40329),
        n = o(16596),
        a = o(72297),
        l = (e) => {
          let { present: r, children: o } = e,
            l = (function (e) {
              var r, o;
              let [n, l] = t.useState(),
                i = t.useRef(null),
                d = t.useRef(e),
                c = t.useRef("none"),
                [m, u] =
                  ((r = e ? "mounted" : "unmounted"),
                  (o = {
                    mounted: {
                      UNMOUNT: "unmounted",
                      ANIMATION_OUT: "unmountSuspended",
                    },
                    unmountSuspended: {
                      MOUNT: "mounted",
                      ANIMATION_END: "unmounted",
                    },
                    unmounted: { MOUNT: "mounted" },
                  }),
                  t.useReducer((e, r) => {
                    let t = o[e][r];
                    return null != t ? t : e;
                  }, r));
              return (
                t.useEffect(() => {
                  let e = s(i.current);
                  c.current = "mounted" === m ? e : "none";
                }, [m]),
                (0, a.N)(() => {
                  let r = i.current,
                    o = d.current;
                  if (o !== e) {
                    let t = c.current,
                      n = s(r);
                    e
                      ? u("MOUNT")
                      : "none" === n ||
                        (null == r ? void 0 : r.display) === "none"
                      ? u("UNMOUNT")
                      : o && t !== n
                      ? u("ANIMATION_OUT")
                      : u("UNMOUNT"),
                      (d.current = e);
                  }
                }, [e, u]),
                (0, a.N)(() => {
                  if (n) {
                    var e;
                    let r,
                      o =
                        null != (e = n.ownerDocument.defaultView) ? e : window,
                      t = (e) => {
                        let t = s(i.current).includes(e.animationName);
                        if (
                          e.target === n &&
                          t &&
                          (u("ANIMATION_END"), !d.current)
                        ) {
                          let e = n.style.animationFillMode;
                          (n.style.animationFillMode = "forwards"),
                            (r = o.setTimeout(() => {
                              "forwards" === n.style.animationFillMode &&
                                (n.style.animationFillMode = e);
                            }));
                        }
                      },
                      a = (e) => {
                        e.target === n && (c.current = s(i.current));
                      };
                    return (
                      n.addEventListener("animationstart", a),
                      n.addEventListener("animationcancel", t),
                      n.addEventListener("animationend", t),
                      () => {
                        o.clearTimeout(r),
                          n.removeEventListener("animationstart", a),
                          n.removeEventListener("animationcancel", t),
                          n.removeEventListener("animationend", t);
                      }
                    );
                  }
                  u("ANIMATION_END");
                }, [n, u]),
                {
                  isPresent: ["mounted", "unmountSuspended"].includes(m),
                  ref: t.useCallback((e) => {
                    (i.current = e ? getComputedStyle(e) : null), l(e);
                  }, []),
                }
              );
            })(r),
            i =
              "function" == typeof o
                ? o({ present: l.isPresent })
                : t.Children.only(o),
            d = (0, n.s)(
              l.ref,
              (function (e) {
                var r, o;
                let t =
                    null ==
                    (r = Object.getOwnPropertyDescriptor(e.props, "ref"))
                      ? void 0
                      : r.get,
                  n = t && "isReactWarning" in t && t.isReactWarning;
                return n
                  ? e.ref
                  : (n =
                      (t =
                        null == (o = Object.getOwnPropertyDescriptor(e, "ref"))
                          ? void 0
                          : o.get) &&
                      "isReactWarning" in t &&
                      t.isReactWarning)
                  ? e.props.ref
                  : e.props.ref || e.ref;
              })(i)
            );
          return "function" == typeof o || l.isPresent
            ? t.cloneElement(i, { ref: d })
            : null;
        };
      function s(e) {
        return (null == e ? void 0 : e.animationName) || "none";
      }
      l.displayName = "Presence";
    },
    72297: (e, r, o) => {
      o.d(r, { N: () => n });
      var t = o(40329),
        n = globalThis?.document ? t.useLayoutEffect : () => {};
    },
    77181: (e, r, o) => {
      o.d(r, { m: () => t });
      function t(e, r, { checkForDefaultPrevented: o = !0 } = {}) {
        return function (t) {
          if ((e?.(t), !1 === o || !t.defaultPrevented)) return r?.(t);
        };
      }
    },
    85647: (e, r, o) => {
      o.d(r, { B: () => i });
      var t,
        n = o(40329),
        a = o(72297),
        l =
          (t || (t = o.t(n, 2)))[" useId ".trim().toString()] || (() => void 0),
        s = 0;
      function i(e) {
        let [r, o] = n.useState(l());
        return (
          (0, a.N)(() => {
            e || o((e) => e ?? String(s++));
          }, [e]),
          e || (r ? `radix-${r}` : "")
        );
      }
    },
    96624: (e, r, o) => {
      o.d(r, { A: () => l, q: () => a });
      var t = o(40329),
        n = o(46877);
      function a(e, r) {
        let o = t.createContext(r),
          a = (e) => {
            let { children: r, ...a } = e,
              l = t.useMemo(() => a, Object.values(a));
            return (0, n.jsx)(o.Provider, { value: l, children: r });
          };
        return (
          (a.displayName = e + "Provider"),
          [
            a,
            function (n) {
              let a = t.useContext(o);
              if (a) return a;
              if (void 0 !== r) return r;
              throw Error(`\`${n}\` must be used within \`${e}\``);
            },
          ]
        );
      }
      function l(e, r = []) {
        let o = [],
          a = () => {
            let r = o.map((e) => t.createContext(e));
            return function (o) {
              let n = o?.[e] || r;
              return t.useMemo(
                () => ({ [`__scope${e}`]: { ...o, [e]: n } }),
                [o, n]
              );
            };
          };
        return (
          (a.scopeName = e),
          [
            function (r, a) {
              let l = t.createContext(a),
                s = o.length;
              o = [...o, a];
              let i = (r) => {
                let { scope: o, children: a, ...i } = r,
                  d = o?.[e]?.[s] || l,
                  c = t.useMemo(() => i, Object.values(i));
                return (0, n.jsx)(d.Provider, { value: c, children: a });
              };
              return (
                (i.displayName = r + "Provider"),
                [
                  i,
                  function (o, n) {
                    let i = n?.[e]?.[s] || l,
                      d = t.useContext(i);
                    if (d) return d;
                    if (void 0 !== a) return a;
                    throw Error(`\`${o}\` must be used within \`${r}\``);
                  },
                ]
              );
            },
            (function (...e) {
              let r = e[0];
              if (1 === e.length) return r;
              let o = () => {
                let o = e.map((e) => ({
                  useScope: e(),
                  scopeName: e.scopeName,
                }));
                return function (e) {
                  let n = o.reduce((r, { useScope: o, scopeName: t }) => {
                    let n = o(e)[`__scope${t}`];
                    return { ...r, ...n };
                  }, {});
                  return t.useMemo(
                    () => ({ [`__scope${r.scopeName}`]: n }),
                    [n]
                  );
                };
              };
              return (o.scopeName = r.scopeName), o;
            })(a, ...r),
          ]
        );
      }
    },
  },
]);
