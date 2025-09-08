"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8562],
  {
    98562: (e, t, n) => {
      n.r(t), n.d(t, { default: () => eP });
      var r,
        o,
        l = n(46877),
        a = n(26087);
      n(3002);
      var s = n(40329),
        i = n(63642),
        u = n(98271),
        d = n(80836),
        c = n(47467),
        f = n(93417),
        p = n(126),
        v = n(77181),
        m = n(16596),
        g = n(96624),
        h = n(85647),
        x = n(14983),
        y = n(6460),
        b = n(11995),
        E = n(44011),
        w = "dismissableLayer.update",
        N = s.createContext({
          layers: new Set(),
          layersWithOutsidePointerEventsDisabled: new Set(),
          branches: new Set(),
        }),
        C = s.forwardRef((e, t) => {
          var n, r;
          let {
              disableOutsidePointerEvents: a = !1,
              onEscapeKeyDown: i,
              onPointerDownOutside: u,
              onFocusOutside: d,
              onInteractOutside: c,
              onDismiss: f,
              ...p
            } = e,
            g = s.useContext(N),
            [h, x] = s.useState(null),
            C =
              null != (r = null == h ? void 0 : h.ownerDocument)
                ? r
                : null == (n = globalThis)
                ? void 0
                : n.document,
            [, P] = s.useState({}),
            R = (0, m.s)(t, (e) => x(e)),
            L = Array.from(g.layers),
            [O] = [...g.layersWithOutsidePointerEventsDisabled].slice(-1),
            F = L.indexOf(O),
            T = h ? L.indexOf(h) : -1,
            k = g.layersWithOutsidePointerEventsDisabled.size > 0,
            I = T >= F,
            S = (function (e) {
              var t;
              let n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : null == (t = globalThis)
                    ? void 0
                    : t.document,
                r = (0, b.c)(e),
                o = s.useRef(!1),
                l = s.useRef(() => {});
              return (
                s.useEffect(() => {
                  let e = (e) => {
                      if (e.target && !o.current) {
                        let t = function () {
                            j("dismissableLayer.pointerDownOutside", r, o, {
                              discrete: !0,
                            });
                          },
                          o = { originalEvent: e };
                        "touch" === e.pointerType
                          ? (n.removeEventListener("click", l.current),
                            (l.current = t),
                            n.addEventListener("click", l.current, {
                              once: !0,
                            }))
                          : t();
                      } else n.removeEventListener("click", l.current);
                      o.current = !1;
                    },
                    t = window.setTimeout(() => {
                      n.addEventListener("pointerdown", e);
                    }, 0);
                  return () => {
                    window.clearTimeout(t),
                      n.removeEventListener("pointerdown", e),
                      n.removeEventListener("click", l.current);
                  };
                }, [n, r]),
                { onPointerDownCapture: () => (o.current = !0) }
              );
            })((e) => {
              let t = e.target,
                n = [...g.branches].some((e) => e.contains(t));
              I &&
                !n &&
                (null == u || u(e),
                null == c || c(e),
                e.defaultPrevented || null == f || f());
            }, C),
            _ = (function (e) {
              var t;
              let n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : null == (t = globalThis)
                    ? void 0
                    : t.document,
                r = (0, b.c)(e),
                o = s.useRef(!1);
              return (
                s.useEffect(() => {
                  let e = (e) => {
                    e.target &&
                      !o.current &&
                      j(
                        "dismissableLayer.focusOutside",
                        r,
                        { originalEvent: e },
                        { discrete: !1 }
                      );
                  };
                  return (
                    n.addEventListener("focusin", e),
                    () => n.removeEventListener("focusin", e)
                  );
                }, [n, r]),
                {
                  onFocusCapture: () => (o.current = !0),
                  onBlurCapture: () => (o.current = !1),
                }
              );
            })((e) => {
              let t = e.target;
              ![...g.branches].some((e) => e.contains(t)) &&
                (null == d || d(e),
                null == c || c(e),
                e.defaultPrevented || null == f || f());
            }, C);
          return (
            (0, E.U)((e) => {
              T === g.layers.size - 1 &&
                (null == i || i(e),
                !e.defaultPrevented && f && (e.preventDefault(), f()));
            }, C),
            s.useEffect(() => {
              if (h)
                return (
                  a &&
                    (0 === g.layersWithOutsidePointerEventsDisabled.size &&
                      ((o = C.body.style.pointerEvents),
                      (C.body.style.pointerEvents = "none")),
                    g.layersWithOutsidePointerEventsDisabled.add(h)),
                  g.layers.add(h),
                  D(),
                  () => {
                    a &&
                      1 === g.layersWithOutsidePointerEventsDisabled.size &&
                      (C.body.style.pointerEvents = o);
                  }
                );
            }, [h, C, a, g]),
            s.useEffect(
              () => () => {
                h &&
                  (g.layers.delete(h),
                  g.layersWithOutsidePointerEventsDisabled.delete(h),
                  D());
              },
              [h, g]
            ),
            s.useEffect(() => {
              let e = () => P({});
              return (
                document.addEventListener(w, e),
                () => document.removeEventListener(w, e)
              );
            }, []),
            (0, l.jsx)(y.sG.div, {
              ...p,
              ref: R,
              style: {
                pointerEvents: k ? (I ? "auto" : "none") : void 0,
                ...e.style,
              },
              onFocusCapture: (0, v.m)(e.onFocusCapture, _.onFocusCapture),
              onBlurCapture: (0, v.m)(e.onBlurCapture, _.onBlurCapture),
              onPointerDownCapture: (0, v.m)(
                e.onPointerDownCapture,
                S.onPointerDownCapture
              ),
            })
          );
        });
      function D() {
        let e = new CustomEvent(w);
        document.dispatchEvent(e);
      }
      function j(e, t, n, r) {
        let { discrete: o } = r,
          l = n.originalEvent.target,
          a = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
        t && l.addEventListener(e, t, { once: !0 }),
          o ? (0, y.hO)(l, a) : l.dispatchEvent(a);
      }
      (C.displayName = "DismissableLayer"),
        (s.forwardRef((e, t) => {
          let n = s.useContext(N),
            r = s.useRef(null),
            o = (0, m.s)(t, r);
          return (
            s.useEffect(() => {
              let e = r.current;
              if (e)
                return (
                  n.branches.add(e),
                  () => {
                    n.branches.delete(e);
                  }
                );
            }, [n.branches]),
            (0, l.jsx)(y.sG.div, { ...e, ref: o })
          );
        }).displayName = "DismissableLayerBranch");
      var P = "focusScope.autoFocusOnMount",
        R = "focusScope.autoFocusOnUnmount",
        L = { bubbles: !1, cancelable: !0 },
        O = s.forwardRef((e, t) => {
          let {
              loop: n = !1,
              trapped: r = !1,
              onMountAutoFocus: o,
              onUnmountAutoFocus: a,
              ...i
            } = e,
            [u, d] = s.useState(null),
            c = (0, b.c)(o),
            f = (0, b.c)(a),
            p = s.useRef(null),
            v = (0, m.s)(t, (e) => d(e)),
            g = s.useRef({
              paused: !1,
              pause() {
                this.paused = !0;
              },
              resume() {
                this.paused = !1;
              },
            }).current;
          s.useEffect(() => {
            if (r) {
              let e = function (e) {
                  if (g.paused || !u) return;
                  let t = e.target;
                  u.contains(t)
                    ? (p.current = t)
                    : k(p.current, { select: !0 });
                },
                t = function (e) {
                  if (g.paused || !u) return;
                  let t = e.relatedTarget;
                  null !== t && (u.contains(t) || k(p.current, { select: !0 }));
                };
              document.addEventListener("focusin", e),
                document.addEventListener("focusout", t);
              let n = new MutationObserver(function (e) {
                if (document.activeElement === document.body)
                  for (let t of e) t.removedNodes.length > 0 && k(u);
              });
              return (
                u && n.observe(u, { childList: !0, subtree: !0 }),
                () => {
                  document.removeEventListener("focusin", e),
                    document.removeEventListener("focusout", t),
                    n.disconnect();
                }
              );
            }
          }, [r, u, g.paused]),
            s.useEffect(() => {
              if (u) {
                I.add(g);
                let e = document.activeElement;
                if (!u.contains(e)) {
                  let t = new CustomEvent(P, L);
                  u.addEventListener(P, c),
                    u.dispatchEvent(t),
                    t.defaultPrevented ||
                      ((function (e) {
                        let { select: t = !1 } =
                            arguments.length > 1 && void 0 !== arguments[1]
                              ? arguments[1]
                              : {},
                          n = document.activeElement;
                        for (let r of e)
                          if (
                            (k(r, { select: t }), document.activeElement !== n)
                          )
                            return;
                      })(
                        F(u).filter((e) => "A" !== e.tagName),
                        { select: !0 }
                      ),
                      document.activeElement === e && k(u));
                }
                return () => {
                  u.removeEventListener(P, c),
                    setTimeout(() => {
                      let t = new CustomEvent(R, L);
                      u.addEventListener(R, f),
                        u.dispatchEvent(t),
                        t.defaultPrevented ||
                          k(null != e ? e : document.body, { select: !0 }),
                        u.removeEventListener(R, f),
                        I.remove(g);
                    }, 0);
                };
              }
            }, [u, c, f, g]);
          let h = s.useCallback(
            (e) => {
              if ((!n && !r) || g.paused) return;
              let t = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
                o = document.activeElement;
              if (t && o) {
                let t = e.currentTarget,
                  [r, l] = (function (e) {
                    let t = F(e);
                    return [T(t, e), T(t.reverse(), e)];
                  })(t);
                r && l
                  ? e.shiftKey || o !== l
                    ? e.shiftKey &&
                      o === r &&
                      (e.preventDefault(), n && k(l, { select: !0 }))
                    : (e.preventDefault(), n && k(r, { select: !0 }))
                  : o === t && e.preventDefault();
              }
            },
            [n, r, g.paused]
          );
          return (0, l.jsx)(y.sG.div, {
            tabIndex: -1,
            ...i,
            ref: v,
            onKeyDown: h,
          });
        });
      function F(e) {
        let t = [],
          n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
            acceptNode: (e) => {
              let t = "INPUT" === e.tagName && "hidden" === e.type;
              return e.disabled || e.hidden || t
                ? NodeFilter.FILTER_SKIP
                : e.tabIndex >= 0
                ? NodeFilter.FILTER_ACCEPT
                : NodeFilter.FILTER_SKIP;
            },
          });
        for (; n.nextNode(); ) t.push(n.currentNode);
        return t;
      }
      function T(e, t) {
        for (let n of e)
          if (
            !(function (e, t) {
              let { upTo: n } = t;
              if ("hidden" === getComputedStyle(e).visibility) return !0;
              for (; e && (void 0 === n || e !== n); ) {
                if ("none" === getComputedStyle(e).display) return !0;
                e = e.parentElement;
              }
              return !1;
            })(n, { upTo: t })
          )
            return n;
      }
      function k(e) {
        let { select: t = !1 } =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (e && e.focus) {
          var n;
          let r = document.activeElement;
          e.focus({ preventScroll: !0 }),
            e !== r &&
              (n = e) instanceof HTMLInputElement &&
              "select" in n &&
              t &&
              e.select();
        }
      }
      O.displayName = "FocusScope";
      var I = (function () {
        let e = [];
        return {
          add(t) {
            let n = e[0];
            t !== n && (null == n || n.pause()), (e = S(e, t)).unshift(t);
          },
          remove(t) {
            var n;
            null == (n = (e = S(e, t))[0]) || n.resume();
          },
        };
      })();
      function S(e, t) {
        let n = [...e],
          r = n.indexOf(t);
        return -1 !== r && n.splice(r, 1), n;
      }
      var _ = n(31516),
        A = n(72297);
      s.forwardRef((e, t) => {
        var n, r;
        let { container: o, ...a } = e,
          [i, u] = s.useState(!1);
        (0, A.N)(() => u(!0), []);
        let d =
          o ||
          (i &&
            (null == (r = globalThis) || null == (n = r.document)
              ? void 0
              : n.body));
        return d
          ? _.createPortal((0, l.jsx)(y.sG.div, { ...a, ref: t }), d)
          : null;
      }).displayName = "Portal";
      var z = n(55216),
        M = n(62284),
        W = n(91601),
        B = n(36414),
        G = n(96465),
        K = "Dialog",
        [Q, U] = (0, g.A)(K),
        [q, H] = Q(K),
        V = (e) => {
          let {
              __scopeDialog: t,
              children: n,
              open: r,
              defaultOpen: o,
              onOpenChange: a,
              modal: i = !0,
            } = e,
            u = s.useRef(null),
            d = s.useRef(null),
            [c, f] = (0, x.i)({
              prop: r,
              defaultProp: null != o && o,
              onChange: a,
              caller: K,
            });
          return (0, l.jsx)(q, {
            scope: t,
            triggerRef: u,
            contentRef: d,
            contentId: (0, h.B)(),
            titleId: (0, h.B)(),
            descriptionId: (0, h.B)(),
            open: c,
            onOpenChange: f,
            onOpenToggle: s.useCallback(() => f((e) => !e), [f]),
            modal: i,
            children: n,
          });
        };
      V.displayName = K;
      var J = "DialogTrigger";
      s.forwardRef((e, t) => {
        let { __scopeDialog: n, ...r } = e,
          o = H(J, n),
          a = (0, m.s)(t, o.triggerRef);
        return (0, l.jsx)(y.sG.button, {
          type: "button",
          "aria-haspopup": "dialog",
          "aria-expanded": o.open,
          "aria-controls": o.contentId,
          "data-state": ec(o.open),
          ...r,
          ref: a,
          onClick: (0, v.m)(e.onClick, o.onOpenToggle),
        });
      }).displayName = J;
      var [Y, Z] = Q("DialogPortal", { forceMount: void 0 }),
        X = "DialogOverlay",
        $ = s.forwardRef((e, t) => {
          let n = Z(X, e.__scopeDialog),
            { forceMount: r = n.forceMount, ...o } = e,
            a = H(X, e.__scopeDialog);
          return a.modal
            ? (0, l.jsx)(z.C, {
                present: r || a.open,
                children: (0, l.jsx)(et, { ...o, ref: t }),
              })
            : null;
        });
      $.displayName = X;
      var ee = (0, G.TL)("DialogOverlay.RemoveScroll"),
        et = s.forwardRef((e, t) => {
          let { __scopeDialog: n, ...r } = e,
            o = H(X, n);
          return (0, l.jsx)(W.A, {
            as: ee,
            allowPinchZoom: !0,
            shards: [o.contentRef],
            children: (0, l.jsx)(y.sG.div, {
              "data-state": ec(o.open),
              ...r,
              ref: t,
              style: { pointerEvents: "auto", ...r.style },
            }),
          });
        }),
        en = "DialogContent",
        er = s.forwardRef((e, t) => {
          let n = Z(en, e.__scopeDialog),
            { forceMount: r = n.forceMount, ...o } = e,
            a = H(en, e.__scopeDialog);
          return (0, l.jsx)(z.C, {
            present: r || a.open,
            children: a.modal
              ? (0, l.jsx)(eo, { ...o, ref: t })
              : (0, l.jsx)(el, { ...o, ref: t }),
          });
        });
      er.displayName = en;
      var eo = s.forwardRef((e, t) => {
          let n = H(en, e.__scopeDialog),
            r = s.useRef(null),
            o = (0, m.s)(t, n.contentRef, r);
          return (
            s.useEffect(() => {
              let e = r.current;
              if (e) return (0, B.Eq)(e);
            }, []),
            (0, l.jsx)(ea, {
              ...e,
              ref: o,
              trapFocus: n.open,
              disableOutsidePointerEvents: !0,
              onCloseAutoFocus: (0, v.m)(e.onCloseAutoFocus, (e) => {
                var t;
                e.preventDefault(),
                  null == (t = n.triggerRef.current) || t.focus();
              }),
              onPointerDownOutside: (0, v.m)(e.onPointerDownOutside, (e) => {
                let t = e.detail.originalEvent,
                  n = 0 === t.button && !0 === t.ctrlKey;
                (2 === t.button || n) && e.preventDefault();
              }),
              onFocusOutside: (0, v.m)(e.onFocusOutside, (e) =>
                e.preventDefault()
              ),
            })
          );
        }),
        el = s.forwardRef((e, t) => {
          let n = H(en, e.__scopeDialog),
            r = s.useRef(!1),
            o = s.useRef(!1);
          return (0, l.jsx)(ea, {
            ...e,
            ref: t,
            trapFocus: !1,
            disableOutsidePointerEvents: !1,
            onCloseAutoFocus: (t) => {
              var l, a;
              null == (l = e.onCloseAutoFocus) || l.call(e, t),
                t.defaultPrevented ||
                  (r.current || null == (a = n.triggerRef.current) || a.focus(),
                  t.preventDefault()),
                (r.current = !1),
                (o.current = !1);
            },
            onInteractOutside: (t) => {
              var l, a;
              null == (l = e.onInteractOutside) || l.call(e, t),
                t.defaultPrevented ||
                  ((r.current = !0),
                  "pointerdown" === t.detail.originalEvent.type &&
                    (o.current = !0));
              let s = t.target;
              (null == (a = n.triggerRef.current) ? void 0 : a.contains(s)) &&
                t.preventDefault(),
                "focusin" === t.detail.originalEvent.type &&
                  o.current &&
                  t.preventDefault();
            },
          });
        }),
        ea = s.forwardRef((e, t) => {
          let {
              __scopeDialog: n,
              trapFocus: r,
              onOpenAutoFocus: o,
              onCloseAutoFocus: a,
              ...i
            } = e,
            u = H(en, n),
            d = s.useRef(null),
            c = (0, m.s)(t, d);
          return (
            (0, M.Oh)(),
            (0, l.jsxs)(l.Fragment, {
              children: [
                (0, l.jsx)(O, {
                  asChild: !0,
                  loop: !0,
                  trapped: r,
                  onMountAutoFocus: o,
                  onUnmountAutoFocus: a,
                  children: (0, l.jsx)(C, {
                    role: "dialog",
                    id: u.contentId,
                    "aria-describedby": u.descriptionId,
                    "aria-labelledby": u.titleId,
                    "data-state": ec(u.open),
                    ...i,
                    ref: c,
                    onDismiss: () => u.onOpenChange(!1),
                  }),
                }),
                (0, l.jsxs)(l.Fragment, {
                  children: [
                    (0, l.jsx)(em, { titleId: u.titleId }),
                    (0, l.jsx)(eg, {
                      contentRef: d,
                      descriptionId: u.descriptionId,
                    }),
                  ],
                }),
              ],
            })
          );
        }),
        es = "DialogTitle",
        ei = s.forwardRef((e, t) => {
          let { __scopeDialog: n, ...r } = e,
            o = H(es, n);
          return (0, l.jsx)(y.sG.h2, { id: o.titleId, ...r, ref: t });
        });
      ei.displayName = es;
      var eu = "DialogDescription";
      s.forwardRef((e, t) => {
        let { __scopeDialog: n, ...r } = e,
          o = H(eu, n);
        return (0, l.jsx)(y.sG.p, { id: o.descriptionId, ...r, ref: t });
      }).displayName = eu;
      var ed = "DialogClose";
      function ec(e) {
        return e ? "open" : "closed";
      }
      s.forwardRef((e, t) => {
        let { __scopeDialog: n, ...r } = e,
          o = H(ed, n);
        return (0, l.jsx)(y.sG.button, {
          type: "button",
          ...r,
          ref: t,
          onClick: (0, v.m)(e.onClick, () => o.onOpenChange(!1)),
        });
      }).displayName = ed;
      var ef = "DialogTitleWarning",
        [ep, ev] = (0, g.q)(ef, {
          contentName: en,
          titleName: es,
          docsSlug: "dialog",
        }),
        em = (e) => {
          let { titleId: t } = e,
            n = ev(ef),
            r = "`"
              .concat(n.contentName, "` requires a `")
              .concat(
                n.titleName,
                "` for the component to be accessible for screen reader users.\n\nIf you want to hide the `"
              )
              .concat(
                n.titleName,
                "`, you can wrap it with our VisuallyHidden component.\n\nFor more information, see https://radix-ui.com/primitives/docs/components/"
              )
              .concat(n.docsSlug);
          return (
            s.useEffect(() => {
              t && (document.getElementById(t) || console.error(r));
            }, [r, t]),
            null
          );
        },
        eg = (e) => {
          let { contentRef: t, descriptionId: n } = e,
            r = ev("DialogDescriptionWarning"),
            o =
              "Warning: Missing `Description` or `aria-describedby={undefined}` for {".concat(
                r.contentName,
                "}."
              );
          return (
            s.useEffect(() => {
              var e;
              let r =
                null == (e = t.current)
                  ? void 0
                  : e.getAttribute("aria-describedby");
              n && r && (document.getElementById(n) || console.warn(o));
            }, [o, t, n]),
            null
          );
        },
        eh = n(69108),
        ex = n(40938),
        ey = n(82917);
      function eb(e) {
        let {
            open: t,
            onOpenChange: n,
            footer: r,
            links: o = [],
            search: a,
            onSearchChange: i,
            isLoading: d,
            ...f
          } = e,
          { text: v } = (0, u.s9)(),
          m = (0, s.useMemo)(
            () =>
              o.map((e) => {
                let [t, n] = e;
                return { type: "page", id: t, content: t, url: n };
              }),
            [o]
          );
        return (0, l.jsxs)(V, {
          open: t,
          onOpenChange: n,
          children: [
            (0, l.jsx)($, {
              className:
                "fixed inset-0 z-50 bg-black/30 backdrop-blur-sm data-[state=closed]:animate-fd-fade-out data-[state=open]:animate-fd-fade-in",
            }),
            (0, l.jsxs)(er, {
              "aria-describedby": void 0,
              className:
                "fixed left-1/2 top-[10vh] z-50 w-[98vw] max-w-screen-sm -translate-x-1/2 rounded-lg border bg-fd-popover text-fd-popover-foreground shadow-lg data-[state=closed]:animate-fd-dialog-out data-[state=open]:animate-fd-dialog-in",
              children: [
                (0, l.jsx)(ei, { className: "hidden", children: v.search }),
                (0, l.jsxs)("div", {
                  className: "flex flex-row items-center gap-2 px-3",
                  children: [
                    (0, l.jsx)(eN, { isLoading: null != d && d }),
                    (0, l.jsx)("input", {
                      value: a,
                      onChange: (e) => {
                        i(e.target.value);
                      },
                      placeholder: v.search,
                      className:
                        "w-0 flex-1 bg-transparent py-3 text-base placeholder:text-fd-muted-foreground focus-visible:outline-none",
                    }),
                    (0, l.jsx)("button", {
                      type: "button",
                      "aria-label": "Close Search",
                      onClick: () => n(!1),
                      className: (0, c.QP)(
                        (0, p.r)({
                          color: "outline",
                          className: "text-xs p-1.5",
                        })
                      ),
                      children: "Esc",
                    }),
                  ],
                }),
                "empty" !== f.results || m.length > 0
                  ? (0, l.jsx)(ew, {
                      items: "empty" === f.results ? m : f.results,
                      onSelect: () => n(!1),
                    })
                  : null,
                r
                  ? (0, l.jsx)("div", {
                      className: "mt-auto flex flex-col border-t p-3",
                      children: r,
                    })
                  : null,
              ],
            }),
          ],
        });
      }
      let eE = {
        text: (0, l.jsx)(d.EY, {
          className: "size-4 text-fd-muted-foreground",
        }),
        heading: (0, l.jsx)(d.Vw, {
          className: "size-4 text-fd-muted-foreground",
        }),
        page: (0, l.jsx)(d.iU, {
          className: "size-4 text-fd-muted-foreground",
        }),
      };
      function ew(e) {
        let { items: t, onSelect: n, ...r } = e,
          [o, a] = (0, s.useState)(),
          { text: i } = (0, u.s9)(),
          d = (0, ey.rd)(),
          p = (0, f.c)();
        t.length > 0 && (!o || t.every((e) => e.id !== o)) && a(t[0].id);
        let v = (e) => {
            var t;
            let { external: r, url: o } = e;
            r ? null == (t = window.open(o, "_blank")) || t.focus() : d.push(o),
              null == n || n(o),
              p.setOpen(!1);
          },
          m = (0, ex.J)((e) => {
            if (
              (("ArrowDown" === e.key || "ArrowUp" == e.key) &&
                (a((n) => {
                  var r, o;
                  let l = t.findIndex((e) => e.id === n);
                  return -1 === l
                    ? null == (r = t.at(0))
                      ? void 0
                      : r.id
                    : null ==
                      (o = t.at(
                        ("ArrowDown" === e.key ? l + 1 : l - 1) % t.length
                      ))
                    ? void 0
                    : o.id;
                }),
                e.preventDefault()),
              "Enter" === e.key)
            ) {
              let n = t.find((e) => e.id === o);
              n && v(n), e.preventDefault();
            }
          });
        return (
          (0, s.useEffect)(
            () => (
              window.addEventListener("keydown", m),
              () => {
                window.removeEventListener("keydown", m);
              }
            ),
            [m]
          ),
          (0, l.jsxs)("div", {
            ...r,
            className: (0, c.QP)(
              "flex max-h-[460px] flex-col overflow-y-auto border-t p-2",
              r.className
            ),
            children: [
              0 === t.length
                ? (0, l.jsx)("div", {
                    className: "py-12 text-center text-sm",
                    children: i.searchNoResult,
                  })
                : null,
              t.map((e) =>
                (0, l.jsxs)(
                  eC,
                  {
                    value: e.id,
                    active: o,
                    onActiveChange: a,
                    onClick: () => {
                      v(e);
                    },
                    children: [
                      "page" !== e.type
                        ? (0, l.jsx)("div", {
                            role: "none",
                            className: "ms-2 h-full min-h-10 w-px bg-fd-border",
                          })
                        : null,
                      eE[e.type],
                      (0, l.jsx)("p", {
                        className: "w-0 flex-1 truncate",
                        children: e.content,
                      }),
                    ],
                  },
                  e.id
                )
              ),
            ],
          })
        );
      }
      function eN(e) {
        let { isLoading: t } = e;
        return (0, l.jsxs)("div", {
          className: "relative size-4",
          children: [
            (0, l.jsx)(d.wm, {
              className: (0, c.QP)(
                "absolute size-full animate-spin text-fd-primary transition-opacity",
                !t && "opacity-0"
              ),
            }),
            (0, l.jsx)(d.vj, {
              className: (0, c.QP)(
                "absolute size-full text-fd-muted-foreground transition-opacity",
                t && "opacity-0"
              ),
            }),
          ],
        });
      }
      function eC(e) {
        let { active: t, onActiveChange: n, value: r, ...o } = e;
        return (0, l.jsx)("button", {
          ref: (0, s.useCallback)(
            (e) => {
              t === r && e && e.scrollIntoView({ block: "nearest" });
            },
            [t, r]
          ),
          type: "button",
          "aria-selected": t === r,
          onPointerMove: () => n(r),
          ...o,
          className: (0, c.QP)(
            "flex min-h-10 select-none flex-row items-center gap-2.5 rounded-lg px-2 text-start text-sm",
            t === r && "bg-fd-accent text-fd-accent-foreground",
            o.className
          ),
          children: o.children,
        });
      }
      let eD = (0, eh.F)(
        "rounded-md border px-2 py-0.5 text-xs font-medium text-fd-muted-foreground transition-colors",
        {
          variants: {
            active: { true: "bg-fd-accent text-fd-accent-foreground" },
          },
        }
      );
      function ej(e) {
        let { tag: t, onTagChange: n, items: r, allowClear: o, ...a } = e;
        return (0, l.jsxs)("div", {
          ...a,
          className: (0, c.QP)(
            "flex flex-row items-center gap-1 flex-wrap",
            a.className
          ),
          children: [
            r.map((e) => {
              var r;
              return (0, l.jsx)(
                "button",
                {
                  type: "button",
                  "data-active": t === e.value,
                  className: (0, c.QP)(
                    eD({ active: t === e.value }),
                    null == (r = e.props) ? void 0 : r.className
                  ),
                  onClick: () => {
                    t === e.value && o ? n(void 0) : n(e.value);
                  },
                  tabIndex: -1,
                  ...e.props,
                  children: e.name,
                },
                e.value
              );
            }),
            a.children,
          ],
        });
      }
      function eP(e) {
        var t;
        let {
            defaultTag: o,
            tags: d,
            api: c,
            delayMs: f,
            type: p = "fetch",
            allowClear: v = !1,
            ...m
          } = e,
          { locale: g } = (0, u.s9)(),
          [h, x] = (0, s.useState)(o),
          {
            search: y,
            setSearch: b,
            query: E,
          } = (function (e, t, o, l = 100, i = !1, u) {
            let [d, c] = (0, s.useState)(""),
              [f, p] = (0, s.useState)("empty"),
              [v, m] = (0, s.useState)(),
              [g, h] = (0, s.useState)(!1),
              x = (function (e, t = 1e3) {
                let [n, r] = (0, s.useState)(e),
                  o = (0, s.useRef)(void 0);
                if (0 === t) return e;
                if (e !== n && o.current?.value !== e) {
                  o.current && clearTimeout(o.current.handler);
                  let n = window.setTimeout(() => {
                    r(e);
                  }, t);
                  o.current = { value: e, handler: n };
                }
                return n;
              })(d, l),
              y = (0, s.useRef)(void 0);
            return (
              (0, a.T)(void 0 ?? [e, x, t, o], () => {
                y.current && (y.current(), (y.current = void 0)), h(!0);
                let l = !1;
                (y.current = () => {
                  l = !0;
                }),
                  (async function () {
                    if (0 === x.length && !i) return "empty";
                    if ("fetch" === e.type) {
                      let { fetchDocs: r } = await n
                        .e(3051)
                        .then(n.bind(n, 43051));
                      return r(x, t, o, e);
                    }
                    if ("algolia" === e.type) {
                      let { index: t, type: r, ...l } = e,
                        { searchDocs: a } = await n
                          .e(2323)
                          .then(n.bind(n, 32323));
                      return a(t, x, o, l);
                    }
                    if ("orama-cloud" === e.type) {
                      let { searchDocs: t } = await n
                        .e(6605)
                        .then(n.bind(n, 86605));
                      return t(x, o, e);
                    }
                    let { createStaticClient: l } = await n
                      .e(4492)
                      .then(n.bind(n, 24492));
                    return r || (r = l(e)), r.search(x, t, o);
                  })()
                    .then((e) => {
                      l || (m(void 0), p(e));
                    })
                    .catch((e) => {
                      m(e);
                    })
                    .finally(() => {
                      h(!1);
                    });
              }),
              {
                search: d,
                setSearch: c,
                query: { isLoading: g, data: f, error: v },
              }
            );
          })(
            "fetch" === p
              ? { type: "fetch", api: c }
              : { type: "static", from: c },
            g,
            h,
            f
          );
        return (
          (0, i.T)(o, (e) => {
            x(e);
          }),
          (0, l.jsx)(eb, {
            search: y,
            onSearchChange: b,
            isLoading: E.isLoading,
            results: null != (t = E.data) ? t : [],
            ...m,
            footer: d
              ? (0, l.jsxs)(l.Fragment, {
                  children: [
                    (0, l.jsx)(ej, {
                      tag: h,
                      onTagChange: x,
                      items: d,
                      allowClear: v,
                    }),
                    m.footer,
                  ],
                })
              : m.footer,
          })
        );
      }
    },
  },
]);
