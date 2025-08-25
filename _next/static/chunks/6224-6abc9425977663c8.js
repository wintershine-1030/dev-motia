"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6224],
  {
    7506: (t, e, n) => {
      n.d(e, { $: () => i, V: () => r });
      let i = () => {},
        r = () => {};
    },
    8829: (t, e, n) => {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        !(function (t, e) {
          for (var n in e)
            Object.defineProperty(t, n, { enumerable: !0, get: e[n] });
        })(e, {
          default: function () {
            return l;
          },
          getImageProps: function () {
            return a;
          },
        });
      let i = n(81804),
        r = n(31699),
        s = n(58967),
        o = i._(n(59113));
      function a(t) {
        let { props: e } = (0, r.getImgProps)(t, {
          defaultLoader: o.default,
          imgConf: {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
            path: "/_next/static/media",
            loader: "default",
            dangerouslyAllowSVG: !1,
            unoptimized: !1,
          },
        });
        for (let [t, n] of Object.entries(e)) void 0 === n && delete e[t];
        return { props: e };
      }
      let l = s.Image;
    },
    9537: (t, e, n) => {
      n.d(e, { I: () => o });
      var i = n(99711);
      let r = [
        "setup",
        "read",
        "resolveKeyframes",
        "preUpdate",
        "update",
        "preRender",
        "render",
        "postRender",
      ];
      var s = n(87155);
      function o(t, e) {
        let n = !1,
          o = !0,
          a = { delta: 0, timestamp: 0, isProcessing: !1 },
          l = () => (n = !0),
          u = r.reduce(
            (t, n) => (
              (t[n] = (function (t, e) {
                let n = new Set(),
                  i = new Set(),
                  r = !1,
                  o = !1,
                  a = new WeakSet(),
                  l = { delta: 0, timestamp: 0, isProcessing: !1 },
                  u = 0;
                function h(e) {
                  a.has(e) && (c.schedule(e), t()), u++, e(l);
                }
                let c = {
                  schedule: (t, e = !1, s = !1) => {
                    let o = s && r ? n : i;
                    return e && a.add(t), o.has(t) || o.add(t), t;
                  },
                  cancel: (t) => {
                    i.delete(t), a.delete(t);
                  },
                  process: (t) => {
                    if (((l = t), r)) {
                      o = !0;
                      return;
                    }
                    (r = !0),
                      ([n, i] = [i, n]),
                      n.forEach(h),
                      e && s.Q.value && s.Q.value.frameloop[e].push(u),
                      (u = 0),
                      n.clear(),
                      (r = !1),
                      o && ((o = !1), c.process(t));
                  },
                };
                return c;
              })(l, e ? n : void 0)),
              t
            ),
            {}
          ),
          {
            setup: h,
            read: c,
            resolveKeyframes: d,
            preUpdate: p,
            update: f,
            preRender: m,
            render: v,
            postRender: g,
          } = u,
          y = () => {
            let r = i.W.useManualTiming ? a.timestamp : performance.now();
            (n = !1),
              i.W.useManualTiming ||
                (a.delta = o
                  ? 1e3 / 60
                  : Math.max(Math.min(r - a.timestamp, 40), 1)),
              (a.timestamp = r),
              (a.isProcessing = !0),
              h.process(a),
              c.process(a),
              d.process(a),
              p.process(a),
              f.process(a),
              m.process(a),
              v.process(a),
              g.process(a),
              (a.isProcessing = !1),
              n && e && ((o = !1), t(y));
          },
          x = () => {
            (n = !0), (o = !0), a.isProcessing || t(y);
          };
        return {
          schedule: r.reduce((t, e) => {
            let i = u[e];
            return (
              (t[e] = (t, e = !1, r = !1) => (n || x(), i.schedule(t, e, r))), t
            );
          }, {}),
          cancel: (t) => {
            for (let e = 0; e < r.length; e++) u[r[e]].cancel(t);
          },
          state: a,
          steps: u,
        };
      }
    },
    15673: (t, e, n) => {
      n.d(e, { K: () => i });
      function i(t, e, n) {
        if (t instanceof EventTarget) return [t];
        if ("string" == typeof t) {
          let i = document;
          e && (i = e.current);
          let r = n?.[t] ?? i.querySelectorAll(t);
          return r ? Array.from(r) : [];
        }
        return Array.from(t);
      }
    },
    18038: (t, e, n) => {
      n.d(e, { M: () => r });
      var i = n(40329);
      function r(t) {
        let e = (0, i.useRef)(null);
        return null === e.current && (e.current = t()), e.current;
      }
    },
    23316: (t, e, n) => {
      n.d(e, { f: () => i });
      function i(t, e) {
        return e ? (1e3 / e) * t : 0;
      }
    },
    24567: (t, e, n) => {
      function i(t) {
        return (
          null !== t && "object" == typeof t && "function" == typeof t.start
        );
      }
      function r(t) {
        let e = [{}, {}];
        return (
          t?.values.forEach((t, n) => {
            (e[0][n] = t.get()), (e[1][n] = t.getVelocity());
          }),
          e
        );
      }
      function s(t, e, n, i) {
        if ("function" == typeof e) {
          let [s, o] = r(i);
          e = e(void 0 !== n ? n : t.custom, s, o);
        }
        if (
          ("string" == typeof e && (e = t.variants && t.variants[e]),
          "function" == typeof e)
        ) {
          let [s, o] = r(i);
          e = e(void 0 !== n ? n : t.custom, s, o);
        }
        return e;
      }
      function o(t, e, n) {
        let i = t.getProps();
        return s(i, e, void 0 !== n ? n : i.custom, t);
      }
      function a(t, e) {
        return t?.[e] ?? t?.default ?? t;
      }
      n.d(e, { P: () => rI });
      var l,
        u,
        h = n(80518);
      let c = [
          "transformPerspective",
          "x",
          "y",
          "z",
          "translateX",
          "translateY",
          "translateZ",
          "scale",
          "scaleX",
          "scaleY",
          "rotate",
          "rotateX",
          "rotateY",
          "rotateZ",
          "skew",
          "skewX",
          "skewY",
        ],
        d = new Set(c),
        p = new Set([
          "width",
          "height",
          "top",
          "left",
          "right",
          "bottom",
          ...c,
        ]);
      var f = n(94559);
      let m = (t) => Array.isArray(t);
      var v = n(99711);
      let g = (t) => !!(t && t.getVelocity);
      function y(t, e) {
        let n = t.getValue("willChange");
        if (g(n) && n.add) return n.add(e);
        if (!n && v.W.WillChange) {
          let n = new v.W.WillChange("auto");
          t.addValue("willChange", n), n.add(e);
        }
      }
      let x = (t) => t.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
        w = "data-" + x("framerAppearId");
      var b = n(29711),
        E = n(87256),
        T = n(80851),
        P = n(88826);
      let S = (t) => 1e3 * t,
        A = (t) => t / 1e3,
        k = { layout: 0, mainThread: 0, waapi: 0 };
      var M = n(55148);
      let C = (t) => {
          let e = ({ timestamp: e }) => t(e);
          return {
            start: (t = !0) => h.Gt.update(e, t),
            stop: () => (0, h.WG)(e),
            now: () => (h.uv.isProcessing ? h.uv.timestamp : E.k.now()),
          };
        },
        V = (t, e, n = 10) => {
          let i = "",
            r = Math.max(Math.round(e / n), 2);
          for (let e = 0; e < r; e++) i += t(e / (r - 1)) + ", ";
          return `linear(${i.substring(0, i.length - 2)})`;
        };
      function D(t) {
        let e = 0,
          n = t.next(e);
        for (; !n.done && e < 2e4; ) (e += 50), (n = t.next(e));
        return e >= 2e4 ? 1 / 0 : e;
      }
      var R = n(23316);
      function F(t, e, n) {
        let i = Math.max(e - 5, 0);
        return (0, R.f)(n - t(i), e - i);
      }
      let L = {
        stiffness: 100,
        damping: 10,
        mass: 1,
        velocity: 0,
        duration: 800,
        bounce: 0.3,
        visualDuration: 0.3,
        restSpeed: { granular: 0.01, default: 2 },
        restDelta: { granular: 0.005, default: 0.5 },
        minDuration: 0.01,
        maxDuration: 10,
        minDamping: 0.05,
        maxDamping: 1,
      };
      var j = n(7506);
      function O(t, e) {
        return t * Math.sqrt(1 - e * e);
      }
      let B = ["duration", "bounce"],
        N = ["stiffness", "damping", "mass"];
      function I(t, e) {
        return e.some((e) => void 0 !== t[e]);
      }
      function W(t = L.visualDuration, e = L.bounce) {
        let n,
          i =
            "object" != typeof t
              ? { visualDuration: t, keyframes: [0, 1], bounce: e }
              : t,
          { restSpeed: r, restDelta: s } = i,
          o = i.keyframes[0],
          a = i.keyframes[i.keyframes.length - 1],
          l = { done: !1, value: o },
          {
            stiffness: u,
            damping: h,
            mass: c,
            duration: d,
            velocity: p,
            isResolvedFromDuration: f,
          } = (function (t) {
            let e = {
              velocity: L.velocity,
              stiffness: L.stiffness,
              damping: L.damping,
              mass: L.mass,
              isResolvedFromDuration: !1,
              ...t,
            };
            if (!I(t, N) && I(t, B))
              if (t.visualDuration) {
                let n = (2 * Math.PI) / (1.2 * t.visualDuration),
                  i = n * n,
                  r = 2 * (0, P.q)(0.05, 1, 1 - (t.bounce || 0)) * Math.sqrt(i);
                e = { ...e, mass: L.mass, stiffness: i, damping: r };
              } else {
                let n = (function ({
                  duration: t = L.duration,
                  bounce: e = L.bounce,
                  velocity: n = L.velocity,
                  mass: i = L.mass,
                }) {
                  let r, s;
                  (0, j.$)(
                    t <= S(L.maxDuration),
                    "Spring duration must be 10 seconds or less"
                  );
                  let o = 1 - e;
                  (o = (0, P.q)(L.minDamping, L.maxDamping, o)),
                    (t = (0, P.q)(L.minDuration, L.maxDuration, A(t))),
                    o < 1
                      ? ((r = (e) => {
                          let i = e * o,
                            r = i * t;
                          return 0.001 - ((i - n) / O(e, o)) * Math.exp(-r);
                        }),
                        (s = (e) => {
                          let i = e * o * t,
                            s = Math.pow(o, 2) * Math.pow(e, 2) * t,
                            a = Math.exp(-i),
                            l = O(Math.pow(e, 2), o);
                          return (
                            ((i * n + n - s) *
                              a *
                              (-r(e) + 0.001 > 0 ? -1 : 1)) /
                            l
                          );
                        }))
                      : ((r = (e) =>
                          -0.001 + Math.exp(-e * t) * ((e - n) * t + 1)),
                        (s = (e) => t * t * (n - e) * Math.exp(-e * t)));
                  let a = (function (t, e, n) {
                    let i = n;
                    for (let n = 1; n < 12; n++) i -= t(i) / e(i);
                    return i;
                  })(r, s, 5 / t);
                  if (((t = S(t)), isNaN(a)))
                    return {
                      stiffness: L.stiffness,
                      damping: L.damping,
                      duration: t,
                    };
                  {
                    let e = Math.pow(a, 2) * i;
                    return {
                      stiffness: e,
                      damping: 2 * o * Math.sqrt(i * e),
                      duration: t,
                    };
                  }
                })(t);
                (e = { ...e, ...n, mass: L.mass }).isResolvedFromDuration = !0;
              }
            return e;
          })({ ...i, velocity: -A(i.velocity || 0) }),
          m = p || 0,
          v = h / (2 * Math.sqrt(u * c)),
          g = a - o,
          y = A(Math.sqrt(u / c)),
          x = 5 > Math.abs(g);
        if (
          (r || (r = x ? L.restSpeed.granular : L.restSpeed.default),
          s || (s = x ? L.restDelta.granular : L.restDelta.default),
          v < 1)
        ) {
          let t = O(y, v);
          n = (e) =>
            a -
            Math.exp(-v * y * e) *
              (((m + v * y * g) / t) * Math.sin(t * e) + g * Math.cos(t * e));
        } else if (1 === v)
          n = (t) => a - Math.exp(-y * t) * (g + (m + y * g) * t);
        else {
          let t = y * Math.sqrt(v * v - 1);
          n = (e) => {
            let n = Math.exp(-v * y * e),
              i = Math.min(t * e, 300);
            return (
              a -
              (n * ((m + v * y * g) * Math.sinh(i) + t * g * Math.cosh(i))) / t
            );
          };
        }
        let w = {
          calculatedDuration: (f && d) || null,
          next: (t) => {
            let e = n(t);
            if (f) l.done = t >= d;
            else {
              let i = 0 === t ? m : 0;
              v < 1 && (i = 0 === t ? S(m) : F(n, t, e));
              let o = Math.abs(a - e) <= s;
              l.done = Math.abs(i) <= r && o;
            }
            return (l.value = l.done ? a : e), l;
          },
          toString: () => {
            let t = Math.min(D(w), 2e4),
              e = V((e) => w.next(t * e).value, t, 30);
            return t + "ms " + e;
          },
          toTransition: () => {},
        };
        return w;
      }
      function U({
        keyframes: t,
        velocity: e = 0,
        power: n = 0.8,
        timeConstant: i = 325,
        bounceDamping: r = 10,
        bounceStiffness: s = 500,
        modifyTarget: o,
        min: a,
        max: l,
        restDelta: u = 0.5,
        restSpeed: h,
      }) {
        let c,
          d,
          p = t[0],
          f = { done: !1, value: p },
          m = (t) => (void 0 !== a && t < a) || (void 0 !== l && t > l),
          v = (t) =>
            void 0 === a
              ? l
              : void 0 === l || Math.abs(a - t) < Math.abs(l - t)
              ? a
              : l,
          g = n * e,
          y = p + g,
          x = void 0 === o ? y : o(y);
        x !== y && (g = x - p);
        let w = (t) => -g * Math.exp(-t / i),
          b = (t) => x + w(t),
          E = (t) => {
            let e = w(t),
              n = b(t);
            (f.done = Math.abs(e) <= u), (f.value = f.done ? x : n);
          },
          T = (t) => {
            m(f.value) &&
              ((c = t),
              (d = W({
                keyframes: [f.value, v(f.value)],
                velocity: F(b, t, f.value),
                damping: r,
                stiffness: s,
                restDelta: u,
                restSpeed: h,
              })));
          };
        return (
          T(0),
          {
            calculatedDuration: null,
            next: (t) => {
              let e = !1;
              return (d || void 0 !== c || ((e = !0), E(t), T(t)),
              void 0 !== c && t >= c)
                ? d.next(t - c)
                : (e || E(t), f);
            },
          }
        );
      }
      W.applyToOptions = (t) => {
        let e = (function (t, e = 100, n) {
          let i = n({ ...t, keyframes: [0, e] }),
            r = Math.min(D(i), 2e4);
          return {
            type: "keyframes",
            ease: (t) => i.next(r * t).value / e,
            duration: A(r),
          };
        })(t, 100, W);
        return (
          (t.ease = e.ease),
          (t.duration = S(e.duration)),
          (t.type = "keyframes"),
          t
        );
      };
      let $ = (t, e, n) =>
        (((1 - 3 * n + 3 * e) * t + (3 * n - 6 * e)) * t + 3 * e) * t;
      function G(t, e, n, i) {
        if (t === e && n === i) return b.l;
        let r = (e) =>
          (function (t, e, n, i, r) {
            let s,
              o,
              a = 0;
            do (s = $((o = e + (n - e) / 2), i, r) - t) > 0 ? (n = o) : (e = o);
            while (Math.abs(s) > 1e-7 && ++a < 12);
            return o;
          })(e, 0, 1, t, n);
        return (t) => (0 === t || 1 === t ? t : $(r(t), e, i));
      }
      let H = G(0.42, 0, 1, 1),
        q = G(0, 0, 0.58, 1),
        z = G(0.42, 0, 0.58, 1),
        Y = (t) => Array.isArray(t) && "number" != typeof t[0],
        X = (t) => (e) => e <= 0.5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2,
        K = (t) => (e) => 1 - t(1 - e),
        _ = G(0.33, 1.53, 0.69, 0.99),
        Q = K(_),
        Z = X(Q),
        J = (t) =>
          (t *= 2) < 1 ? 0.5 * Q(t) : 0.5 * (2 - Math.pow(2, -10 * (t - 1))),
        tt = (t) => 1 - Math.sin(Math.acos(t)),
        te = K(tt),
        tn = X(tt),
        ti = (t) => Array.isArray(t) && "number" == typeof t[0],
        tr = {
          linear: b.l,
          easeIn: H,
          easeInOut: z,
          easeOut: q,
          circIn: tt,
          circInOut: tn,
          circOut: te,
          backIn: Q,
          backInOut: Z,
          backOut: _,
          anticipate: J,
        },
        ts = (t) => "string" == typeof t,
        to = (t) => {
          if (ti(t)) {
            (0, j.V)(
              4 === t.length,
              "Cubic bezier arrays must contain four numerical values."
            );
            let [e, n, i, r] = t;
            return G(e, n, i, r);
          }
          return ts(t)
            ? ((0, j.V)(void 0 !== tr[t], `Invalid easing type '${t}'`), tr[t])
            : t;
        };
      var ta = n(31562),
        tl = n(81574);
      function tu({
        duration: t = 300,
        keyframes: e,
        times: n,
        ease: i = "easeInOut",
      }) {
        var r;
        let s = Y(i) ? i.map(to) : to(i),
          o = { done: !1, value: e[0] },
          a =
            ((r = n && n.length === e.length ? n : (0, tl.Z)(e)),
            r.map((e) => e * t)),
          l = (0, ta.G)(a, e, {
            ease: Array.isArray(s)
              ? s
              : e.map(() => s || z).splice(0, e.length - 1),
          });
        return {
          calculatedDuration: t,
          next: (e) => ((o.value = l(e)), (o.done = e >= t), o),
        };
      }
      let th = (t) => null !== t;
      function tc(t, { repeat: e, repeatType: n = "loop" }, i, r = 1) {
        let s = t.filter(th),
          o = r < 0 || (e && "loop" !== n && e % 2 == 1) ? 0 : s.length - 1;
        return o && void 0 !== i ? i : s[o];
      }
      let td = { decay: U, inertia: U, tween: tu, keyframes: tu, spring: W };
      function tp(t) {
        "string" == typeof t.type && (t.type = td[t.type]);
      }
      class tf {
        constructor() {
          this.updateFinished();
        }
        get finished() {
          return this._finished;
        }
        updateFinished() {
          this._finished = new Promise((t) => {
            this.resolve = t;
          });
        }
        notifyFinished() {
          this.resolve();
        }
        then(t, e) {
          return this.finished.then(t, e);
        }
      }
      let tm = (t) => t / 100;
      class tv extends tf {
        constructor(t) {
          super(),
            (this.state = "idle"),
            (this.startTime = null),
            (this.isStopped = !1),
            (this.currentTime = 0),
            (this.holdTime = null),
            (this.playbackSpeed = 1),
            (this.stop = () => {
              let { motionValue: t } = this.options;
              t && t.updatedAt !== E.k.now() && this.tick(E.k.now()),
                (this.isStopped = !0),
                "idle" !== this.state &&
                  (this.teardown(), this.options.onStop?.());
            }),
            k.mainThread++,
            (this.options = t),
            this.initAnimation(),
            this.play(),
            !1 === t.autoplay && this.pause();
        }
        initAnimation() {
          let { options: t } = this;
          tp(t);
          let {
              type: e = tu,
              repeat: n = 0,
              repeatDelay: i = 0,
              repeatType: r,
              velocity: s = 0,
            } = t,
            { keyframes: o } = t,
            a = e || tu;
          a !== tu &&
            "number" != typeof o[0] &&
            ((this.mixKeyframes = (0, T.F)(tm, (0, M.j)(o[0], o[1]))),
            (o = [0, 100]));
          let l = a({ ...t, keyframes: o });
          "mirror" === r &&
            (this.mirroredGenerator = a({
              ...t,
              keyframes: [...o].reverse(),
              velocity: -s,
            })),
            null === l.calculatedDuration && (l.calculatedDuration = D(l));
          let { calculatedDuration: u } = l;
          (this.calculatedDuration = u),
            (this.resolvedDuration = u + i),
            (this.totalDuration = this.resolvedDuration * (n + 1) - i),
            (this.generator = l);
        }
        updateTime(t) {
          let e = Math.round(t - this.startTime) * this.playbackSpeed;
          null !== this.holdTime
            ? (this.currentTime = this.holdTime)
            : (this.currentTime = e);
        }
        tick(t, e = !1) {
          let {
            generator: n,
            totalDuration: i,
            mixKeyframes: r,
            mirroredGenerator: s,
            resolvedDuration: o,
            calculatedDuration: a,
          } = this;
          if (null === this.startTime) return n.next(0);
          let {
            delay: l = 0,
            keyframes: u,
            repeat: h,
            repeatType: c,
            repeatDelay: d,
            type: p,
            onUpdate: f,
            finalKeyframe: m,
          } = this.options;
          this.speed > 0
            ? (this.startTime = Math.min(this.startTime, t))
            : this.speed < 0 &&
              (this.startTime = Math.min(t - i / this.speed, this.startTime)),
            e ? (this.currentTime = t) : this.updateTime(t);
          let v = this.currentTime - l * (this.playbackSpeed >= 0 ? 1 : -1),
            g = this.playbackSpeed >= 0 ? v < 0 : v > i;
          (this.currentTime = Math.max(v, 0)),
            "finished" === this.state &&
              null === this.holdTime &&
              (this.currentTime = i);
          let y = this.currentTime,
            x = n;
          if (h) {
            let t = Math.min(this.currentTime, i) / o,
              e = Math.floor(t),
              n = t % 1;
            !n && t >= 1 && (n = 1),
              1 === n && e--,
              (e = Math.min(e, h + 1)) % 2 &&
                ("reverse" === c
                  ? ((n = 1 - n), d && (n -= d / o))
                  : "mirror" === c && (x = s)),
              (y = (0, P.q)(0, 1, n) * o);
          }
          let w = g ? { done: !1, value: u[0] } : x.next(y);
          r && (w.value = r(w.value));
          let { done: b } = w;
          g ||
            null === a ||
            (b =
              this.playbackSpeed >= 0
                ? this.currentTime >= i
                : this.currentTime <= 0);
          let E =
            null === this.holdTime &&
            ("finished" === this.state || ("running" === this.state && b));
          return (
            E && p !== U && (w.value = tc(u, this.options, m, this.speed)),
            f && f(w.value),
            E && this.finish(),
            w
          );
        }
        then(t, e) {
          return this.finished.then(t, e);
        }
        get duration() {
          return A(this.calculatedDuration);
        }
        get time() {
          return A(this.currentTime);
        }
        set time(t) {
          (t = S(t)),
            (this.currentTime = t),
            null === this.startTime ||
            null !== this.holdTime ||
            0 === this.playbackSpeed
              ? (this.holdTime = t)
              : this.driver &&
                (this.startTime = this.driver.now() - t / this.playbackSpeed),
            this.driver?.start(!1);
        }
        get speed() {
          return this.playbackSpeed;
        }
        set speed(t) {
          this.updateTime(E.k.now());
          let e = this.playbackSpeed !== t;
          (this.playbackSpeed = t), e && (this.time = A(this.currentTime));
        }
        play() {
          if (this.isStopped) return;
          let { driver: t = C, startTime: e } = this.options;
          this.driver || (this.driver = t((t) => this.tick(t))),
            this.options.onPlay?.();
          let n = this.driver.now();
          "finished" === this.state
            ? (this.updateFinished(), (this.startTime = n))
            : null !== this.holdTime
            ? (this.startTime = n - this.holdTime)
            : this.startTime || (this.startTime = e ?? n),
            "finished" === this.state &&
              this.speed < 0 &&
              (this.startTime += this.calculatedDuration),
            (this.holdTime = null),
            (this.state = "running"),
            this.driver.start();
        }
        pause() {
          (this.state = "paused"),
            this.updateTime(E.k.now()),
            (this.holdTime = this.currentTime);
        }
        complete() {
          "running" !== this.state && this.play(),
            (this.state = "finished"),
            (this.holdTime = null);
        }
        finish() {
          this.notifyFinished(),
            this.teardown(),
            (this.state = "finished"),
            this.options.onComplete?.();
        }
        cancel() {
          (this.holdTime = null),
            (this.startTime = 0),
            this.tick(0),
            this.teardown(),
            this.options.onCancel?.();
        }
        teardown() {
          (this.state = "idle"),
            this.stopDriver(),
            (this.startTime = this.holdTime = null),
            k.mainThread--;
        }
        stopDriver() {
          this.driver && (this.driver.stop(), (this.driver = void 0));
        }
        sample(t) {
          return (this.startTime = 0), this.tick(t, !0);
        }
        attachTimeline(t) {
          return (
            this.options.allowFlatten &&
              ((this.options.type = "keyframes"),
              (this.options.ease = "linear"),
              this.initAnimation()),
            this.driver?.stop(),
            t.observe(this)
          );
        }
      }
      let tg = (t) => (180 * t) / Math.PI,
        ty = (t) => tw(tg(Math.atan2(t[1], t[0]))),
        tx = {
          x: 4,
          y: 5,
          translateX: 4,
          translateY: 5,
          scaleX: 0,
          scaleY: 3,
          scale: (t) => (Math.abs(t[0]) + Math.abs(t[3])) / 2,
          rotate: ty,
          rotateZ: ty,
          skewX: (t) => tg(Math.atan(t[1])),
          skewY: (t) => tg(Math.atan(t[2])),
          skew: (t) => (Math.abs(t[1]) + Math.abs(t[2])) / 2,
        },
        tw = (t) => ((t %= 360) < 0 && (t += 360), t),
        tb = (t) => Math.sqrt(t[0] * t[0] + t[1] * t[1]),
        tE = (t) => Math.sqrt(t[4] * t[4] + t[5] * t[5]),
        tT = {
          x: 12,
          y: 13,
          z: 14,
          translateX: 12,
          translateY: 13,
          translateZ: 14,
          scaleX: tb,
          scaleY: tE,
          scale: (t) => (tb(t) + tE(t)) / 2,
          rotateX: (t) => tw(tg(Math.atan2(t[6], t[5]))),
          rotateY: (t) => tw(tg(Math.atan2(-t[2], t[0]))),
          rotateZ: ty,
          rotate: ty,
          skewX: (t) => tg(Math.atan(t[4])),
          skewY: (t) => tg(Math.atan(t[1])),
          skew: (t) => (Math.abs(t[1]) + Math.abs(t[4])) / 2,
        };
      function tP(t) {
        return +!!t.includes("scale");
      }
      function tS(t, e) {
        let n, i;
        if (!t || "none" === t) return tP(e);
        let r = t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
        if (r) (n = tT), (i = r);
        else {
          let e = t.match(/^matrix\(([-\d.e\s,]+)\)$/u);
          (n = tx), (i = e);
        }
        if (!i) return tP(e);
        let s = n[e],
          o = i[1].split(",").map(tk);
        return "function" == typeof s ? s(o) : o[s];
      }
      let tA = (t, e) => {
        let { transform: n = "none" } = getComputedStyle(t);
        return tS(n, e);
      };
      function tk(t) {
        return parseFloat(t.trim());
      }
      var tM = n(85110),
        tC = n(71819);
      let tV = (t) => t === tM.ai || t === tC.px,
        tD = new Set(["x", "y", "z"]),
        tR = c.filter((t) => !tD.has(t)),
        tF = {
          width: ({ x: t }, { paddingLeft: e = "0", paddingRight: n = "0" }) =>
            t.max - t.min - parseFloat(e) - parseFloat(n),
          height: ({ y: t }, { paddingTop: e = "0", paddingBottom: n = "0" }) =>
            t.max - t.min - parseFloat(e) - parseFloat(n),
          top: (t, { top: e }) => parseFloat(e),
          left: (t, { left: e }) => parseFloat(e),
          bottom: ({ y: t }, { top: e }) => parseFloat(e) + (t.max - t.min),
          right: ({ x: t }, { left: e }) => parseFloat(e) + (t.max - t.min),
          x: (t, { transform: e }) => tS(e, "x"),
          y: (t, { transform: e }) => tS(e, "y"),
        };
      (tF.translateX = tF.x), (tF.translateY = tF.y);
      let tL = new Set(),
        tj = !1,
        tO = !1,
        tB = !1;
      function tN() {
        if (tO) {
          let t = Array.from(tL).filter((t) => t.needsMeasurement),
            e = new Set(t.map((t) => t.element)),
            n = new Map();
          e.forEach((t) => {
            let e = (function (t) {
              let e = [];
              return (
                tR.forEach((n) => {
                  let i = t.getValue(n);
                  void 0 !== i &&
                    (e.push([n, i.get()]), i.set(+!!n.startsWith("scale")));
                }),
                e
              );
            })(t);
            e.length && (n.set(t, e), t.render());
          }),
            t.forEach((t) => t.measureInitialState()),
            e.forEach((t) => {
              t.render();
              let e = n.get(t);
              e &&
                e.forEach(([e, n]) => {
                  t.getValue(e)?.set(n);
                });
            }),
            t.forEach((t) => t.measureEndState()),
            t.forEach((t) => {
              void 0 !== t.suspendedScrollY &&
                window.scrollTo(0, t.suspendedScrollY);
            });
        }
        (tO = !1), (tj = !1), tL.forEach((t) => t.complete(tB)), tL.clear();
      }
      function tI() {
        tL.forEach((t) => {
          t.readKeyframes(), t.needsMeasurement && (tO = !0);
        });
      }
      class tW {
        constructor(t, e, n, i, r, s = !1) {
          (this.state = "pending"),
            (this.isAsync = !1),
            (this.needsMeasurement = !1),
            (this.unresolvedKeyframes = [...t]),
            (this.onComplete = e),
            (this.name = n),
            (this.motionValue = i),
            (this.element = r),
            (this.isAsync = s);
        }
        scheduleResolve() {
          (this.state = "scheduled"),
            this.isAsync
              ? (tL.add(this),
                tj || ((tj = !0), h.Gt.read(tI), h.Gt.resolveKeyframes(tN)))
              : (this.readKeyframes(), this.complete());
        }
        readKeyframes() {
          let {
            unresolvedKeyframes: t,
            name: e,
            element: n,
            motionValue: i,
          } = this;
          if (null === t[0]) {
            let r = i?.get(),
              s = t[t.length - 1];
            if (void 0 !== r) t[0] = r;
            else if (n && e) {
              let i = n.readValue(e, s);
              null != i && (t[0] = i);
            }
            void 0 === t[0] && (t[0] = s), i && void 0 === r && i.set(t[0]);
          }
          for (let e = 1; e < t.length; e++) t[e] ?? (t[e] = t[e - 1]);
        }
        setFinalKeyframe() {}
        measureInitialState() {}
        renderEndStyles() {}
        measureEndState() {}
        complete(t = !1) {
          (this.state = "complete"),
            this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, t),
            tL.delete(this);
        }
        cancel() {
          "scheduled" === this.state &&
            (tL.delete(this), (this.state = "pending"));
        }
        resume() {
          "pending" === this.state && this.scheduleResolve();
        }
      }
      let tU = (t) => t.startsWith("--");
      var t$ = n(39435),
        tG = n(87155),
        tH = n(44641);
      let tq = {},
        tz = (function (t, e) {
          let n = (0, tH.p)(t);
          return () => tq[e] ?? n();
        })(() => {
          try {
            document
              .createElement("div")
              .animate({ opacity: 0 }, { easing: "linear(0, 1)" });
          } catch (t) {
            return !1;
          }
          return !0;
        }, "linearEasing"),
        tY = ([t, e, n, i]) => `cubic-bezier(${t}, ${e}, ${n}, ${i})`,
        tX = {
          linear: "linear",
          ease: "ease",
          easeIn: "ease-in",
          easeOut: "ease-out",
          easeInOut: "ease-in-out",
          circIn: tY([0, 0.65, 0.55, 1]),
          circOut: tY([0.55, 0, 1, 0.45]),
          backIn: tY([0.31, 0.01, 0.66, -0.59]),
          backOut: tY([0.33, 1.53, 0.69, 0.99]),
        };
      function tK(t) {
        return "function" == typeof t && "applyToOptions" in t;
      }
      class t_ extends tf {
        constructor(t) {
          if ((super(), (this.finishedTime = null), (this.isStopped = !1), !t))
            return;
          let {
            element: e,
            name: n,
            keyframes: i,
            pseudoElement: r,
            allowFlatten: s = !1,
            finalKeyframe: o,
            onComplete: a,
          } = t;
          (this.isPseudoElement = !!r),
            (this.allowFlatten = s),
            (this.options = t),
            (0, j.V)(
              "string" != typeof t.type,
              'animateMini doesn\'t support "type" as a string. Did you mean to import { spring } from "motion"?'
            );
          let l = (function ({ type: t, ...e }) {
            return tK(t) && tz()
              ? t.applyToOptions(e)
              : (e.duration ?? (e.duration = 300),
                e.ease ?? (e.ease = "easeOut"),
                e);
          })(t);
          (this.animation = (function (
            t,
            e,
            n,
            {
              delay: i = 0,
              duration: r = 300,
              repeat: s = 0,
              repeatType: o = "loop",
              ease: a = "easeOut",
              times: l,
            } = {},
            u
          ) {
            let h = { [e]: n };
            l && (h.offset = l);
            let c = (function t(e, n) {
              if (e)
                return "function" == typeof e
                  ? tz()
                    ? V(e, n)
                    : "ease-out"
                  : ti(e)
                  ? tY(e)
                  : Array.isArray(e)
                  ? e.map((e) => t(e, n) || tX.easeOut)
                  : tX[e];
            })(a, r);
            Array.isArray(c) && (h.easing = c), tG.Q.value && k.waapi++;
            let d = {
              delay: i,
              duration: r,
              easing: Array.isArray(c) ? "linear" : c,
              fill: "both",
              iterations: s + 1,
              direction: "reverse" === o ? "alternate" : "normal",
            };
            u && (d.pseudoElement = u);
            let p = t.animate(h, d);
            return (
              tG.Q.value &&
                p.finished.finally(() => {
                  k.waapi--;
                }),
              p
            );
          })(e, n, i, l, r)),
            !1 === l.autoplay && this.animation.pause(),
            (this.animation.onfinish = () => {
              if (((this.finishedTime = this.time), !r)) {
                let t = tc(i, this.options, o, this.speed);
                this.updateMotionValue
                  ? this.updateMotionValue(t)
                  : (function (t, e, n) {
                      tU(e) ? t.style.setProperty(e, n) : (t.style[e] = n);
                    })(e, n, t),
                  this.animation.cancel();
              }
              a?.(), this.notifyFinished();
            });
        }
        play() {
          this.isStopped ||
            (this.animation.play(),
            "finished" === this.state && this.updateFinished());
        }
        pause() {
          this.animation.pause();
        }
        complete() {
          this.animation.finish?.();
        }
        cancel() {
          try {
            this.animation.cancel();
          } catch (t) {}
        }
        stop() {
          if (this.isStopped) return;
          this.isStopped = !0;
          let { state: t } = this;
          "idle" !== t &&
            "finished" !== t &&
            (this.updateMotionValue
              ? this.updateMotionValue()
              : this.commitStyles(),
            this.isPseudoElement || this.cancel());
        }
        commitStyles() {
          this.isPseudoElement || this.animation.commitStyles?.();
        }
        get duration() {
          return A(
            Number(this.animation.effect?.getComputedTiming?.().duration || 0)
          );
        }
        get time() {
          return A(Number(this.animation.currentTime) || 0);
        }
        set time(t) {
          (this.finishedTime = null), (this.animation.currentTime = S(t));
        }
        get speed() {
          return this.animation.playbackRate;
        }
        set speed(t) {
          t < 0 && (this.finishedTime = null),
            (this.animation.playbackRate = t);
        }
        get state() {
          return null !== this.finishedTime
            ? "finished"
            : this.animation.playState;
        }
        get startTime() {
          return Number(this.animation.startTime);
        }
        set startTime(t) {
          this.animation.startTime = t;
        }
        attachTimeline({ timeline: t, observe: e }) {
          return (this.allowFlatten &&
            this.animation.effect?.updateTiming({ easing: "linear" }),
          (this.animation.onfinish = null),
          t && (0, t$.J)())
            ? ((this.animation.timeline = t), b.l)
            : e(this);
        }
      }
      let tQ = { anticipate: J, backInOut: Z, circInOut: tn };
      class tZ extends t_ {
        constructor(t) {
          !(function (t) {
            "string" == typeof t.ease && t.ease in tQ && (t.ease = tQ[t.ease]);
          })(t),
            tp(t),
            super(t),
            t.startTime && (this.startTime = t.startTime),
            (this.options = t);
        }
        updateMotionValue(t) {
          let {
            motionValue: e,
            onUpdate: n,
            onComplete: i,
            element: r,
            ...s
          } = this.options;
          if (!e) return;
          if (void 0 !== t) return void e.set(t);
          let o = new tv({ ...s, autoplay: !1 }),
            a = S(this.finishedTime ?? this.time);
          e.setWithVelocity(o.sample(a - 10).value, o.sample(a).value, 10),
            o.stop();
        }
      }
      var tJ = n(84261);
      let t0 = (t, e) =>
        "zIndex" !== e &&
        !!(
          "number" == typeof t ||
          Array.isArray(t) ||
          ("string" == typeof t &&
            (tJ.f.test(t) || "0" === t) &&
            !t.startsWith("url("))
        );
      function t1(t) {
        return "object" == typeof t && null !== t && "offsetHeight" in t;
      }
      let t2 = new Set(["opacity", "clipPath", "filter", "transform"]),
        t5 = (0, tH.p)(() =>
          Object.hasOwnProperty.call(Element.prototype, "animate")
        );
      class t4 extends tf {
        constructor({
          autoplay: t = !0,
          delay: e = 0,
          type: n = "keyframes",
          repeat: i = 0,
          repeatDelay: r = 0,
          repeatType: s = "loop",
          keyframes: o,
          name: a,
          motionValue: l,
          element: u,
          ...h
        }) {
          super(),
            (this.stop = () => {
              this._animation &&
                (this._animation.stop(), this.stopTimeline?.()),
                this.keyframeResolver?.cancel();
            }),
            (this.createdAt = E.k.now());
          let c = {
              autoplay: t,
              delay: e,
              type: n,
              repeat: i,
              repeatDelay: r,
              repeatType: s,
              name: a,
              motionValue: l,
              element: u,
              ...h,
            },
            d = u?.KeyframeResolver || tW;
          (this.keyframeResolver = new d(
            o,
            (t, e, n) => this.onKeyframesResolved(t, e, c, !n),
            a,
            l,
            u
          )),
            this.keyframeResolver?.scheduleResolve();
        }
        onKeyframesResolved(t, e, n, i) {
          this.keyframeResolver = void 0;
          let {
            name: r,
            type: s,
            velocity: o,
            delay: a,
            isHandoff: l,
            onUpdate: u,
          } = n;
          (this.resolvedAt = E.k.now()),
            !(function (t, e, n, i) {
              let r = t[0];
              if (null === r) return !1;
              if ("display" === e || "visibility" === e) return !0;
              let s = t[t.length - 1],
                o = t0(r, e),
                a = t0(s, e);
              return (
                (0, j.$)(
                  o === a,
                  `You are trying to animate ${e} from "${r}" to "${s}". ${r} is not an animatable value - to enable this animation set ${r} to a value animatable to ${s} via the \`style\` property.`
                ),
                !!o &&
                  !!a &&
                  ((function (t) {
                    let e = t[0];
                    if (1 === t.length) return !0;
                    for (let n = 0; n < t.length; n++)
                      if (t[n] !== e) return !0;
                  })(t) ||
                    (("spring" === n || tK(n)) && i))
              );
            })(t, r, s, o) &&
              ((v.W.instantAnimations || !a) && u?.(tc(t, n, e)),
              (t[0] = t[t.length - 1]),
              (n.duration = 0),
              (n.repeat = 0));
          let h = {
              startTime: i
                ? this.resolvedAt && this.resolvedAt - this.createdAt > 40
                  ? this.resolvedAt
                  : this.createdAt
                : void 0,
              finalKeyframe: e,
              ...n,
              keyframes: t,
            },
            c =
              !l &&
              (function (t) {
                let {
                  motionValue: e,
                  name: n,
                  repeatDelay: i,
                  repeatType: r,
                  damping: s,
                  type: o,
                } = t;
                if (!t1(e?.owner?.current)) return !1;
                let { onUpdate: a, transformTemplate: l } = e.owner.getProps();
                return (
                  t5() &&
                  n &&
                  t2.has(n) &&
                  ("transform" !== n || !l) &&
                  !a &&
                  !i &&
                  "mirror" !== r &&
                  0 !== s &&
                  "inertia" !== o
                );
              })(h)
                ? new tZ({ ...h, element: h.motionValue.owner.current })
                : new tv(h);
          c.finished.then(() => this.notifyFinished()).catch(b.l),
            this.pendingTimeline &&
              ((this.stopTimeline = c.attachTimeline(this.pendingTimeline)),
              (this.pendingTimeline = void 0)),
            (this._animation = c);
        }
        get finished() {
          return this._animation ? this.animation.finished : this._finished;
        }
        then(t, e) {
          return this.finished.finally(t).then(() => {});
        }
        get animation() {
          return (
            this._animation ||
              (this.keyframeResolver?.resume(),
              (tB = !0),
              tI(),
              tN(),
              (tB = !1)),
            this._animation
          );
        }
        get duration() {
          return this.animation.duration;
        }
        get time() {
          return this.animation.time;
        }
        set time(t) {
          this.animation.time = t;
        }
        get speed() {
          return this.animation.speed;
        }
        get state() {
          return this.animation.state;
        }
        set speed(t) {
          this.animation.speed = t;
        }
        get startTime() {
          return this.animation.startTime;
        }
        attachTimeline(t) {
          return (
            this._animation
              ? (this.stopTimeline = this.animation.attachTimeline(t))
              : (this.pendingTimeline = t),
            () => this.stop()
          );
        }
        play() {
          this.animation.play();
        }
        pause() {
          this.animation.pause();
        }
        complete() {
          this.animation.complete();
        }
        cancel() {
          this._animation && this.animation.cancel(),
            this.keyframeResolver?.cancel();
        }
      }
      let t3 = (t) => null !== t,
        t8 = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
        t9 = (t) => ({
          type: "spring",
          stiffness: 550,
          damping: 0 === t ? 2 * Math.sqrt(550) : 30,
          restSpeed: 10,
        }),
        t6 = { type: "keyframes", duration: 0.8 },
        t7 = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
        et = (t, { keyframes: e }) =>
          e.length > 2
            ? t6
            : d.has(t)
            ? t.startsWith("scale")
              ? t9(e[1])
              : t8
            : t7,
        ee =
          (t, e, n, i = {}, r, s) =>
          (o) => {
            let l = a(i, t) || {},
              u = l.delay || i.delay || 0,
              { elapsed: c = 0 } = i;
            c -= S(u);
            let d = {
              keyframes: Array.isArray(n) ? n : [null, n],
              ease: "easeOut",
              velocity: e.getVelocity(),
              ...l,
              delay: -c,
              onUpdate: (t) => {
                e.set(t), l.onUpdate && l.onUpdate(t);
              },
              onComplete: () => {
                o(), l.onComplete && l.onComplete();
              },
              name: t,
              motionValue: e,
              element: s ? void 0 : r,
            };
            !(function ({
              when: t,
              delay: e,
              delayChildren: n,
              staggerChildren: i,
              staggerDirection: r,
              repeat: s,
              repeatType: o,
              repeatDelay: a,
              from: l,
              elapsed: u,
              ...h
            }) {
              return !!Object.keys(h).length;
            })(l) && Object.assign(d, et(t, d)),
              d.duration && (d.duration = S(d.duration)),
              d.repeatDelay && (d.repeatDelay = S(d.repeatDelay)),
              void 0 !== d.from && (d.keyframes[0] = d.from);
            let p = !1;
            if (
              ((!1 !== d.type && (0 !== d.duration || d.repeatDelay)) ||
                ((d.duration = 0), 0 === d.delay && (p = !0)),
              (v.W.instantAnimations || v.W.skipAnimations) &&
                ((p = !0), (d.duration = 0), (d.delay = 0)),
              (d.allowFlatten = !l.type && !l.ease),
              p && !s && void 0 !== e.get())
            ) {
              let t = (function (t, { repeat: e, repeatType: n = "loop" }, i) {
                let r = t.filter(t3),
                  s = e && "loop" !== n && e % 2 == 1 ? 0 : r.length - 1;
                return r[s];
              })(d.keyframes, l);
              if (void 0 !== t)
                return void h.Gt.update(() => {
                  d.onUpdate(t), d.onComplete();
                });
            }
            return new t4(d);
          };
      function en(t, e, { delay: n = 0, transitionOverride: i, type: r } = {}) {
        let {
          transition: s = t.getDefaultTransition(),
          transitionEnd: l,
          ...u
        } = e;
        i && (s = i);
        let c = [],
          d = r && t.animationState && t.animationState.getState()[r];
        for (let e in u) {
          let i = t.getValue(e, t.latestValues[e] ?? null),
            r = u[e];
          if (
            void 0 === r ||
            (d &&
              (function ({ protectedKeys: t, needsAnimating: e }, n) {
                let i = t.hasOwnProperty(n) && !0 !== e[n];
                return (e[n] = !1), i;
              })(d, e))
          )
            continue;
          let o = { delay: n, ...a(s || {}, e) },
            l = i.get();
          if (
            void 0 !== l &&
            !i.isAnimating &&
            !Array.isArray(r) &&
            r === l &&
            !o.velocity
          )
            continue;
          let f = !1;
          if (window.MotionHandoffAnimation) {
            let n = t.props[w];
            if (n) {
              let t = window.MotionHandoffAnimation(n, e, h.Gt);
              null !== t && ((o.startTime = t), (f = !0));
            }
          }
          y(t, e),
            i.start(
              ee(
                e,
                i,
                r,
                t.shouldReduceMotion && p.has(e) ? { type: !1 } : o,
                t,
                f
              )
            );
          let m = i.animation;
          m && c.push(m);
        }
        return (
          l &&
            Promise.all(c).then(() => {
              h.Gt.update(() => {
                l &&
                  (function (t, e) {
                    let {
                      transitionEnd: n = {},
                      transition: i = {},
                      ...r
                    } = o(t, e) || {};
                    for (let e in (r = { ...r, ...n })) {
                      var s;
                      let n = m((s = r[e])) ? s[s.length - 1] || 0 : s;
                      t.hasValue(e)
                        ? t.getValue(e).set(n)
                        : t.addValue(e, (0, f.OQ)(n));
                    }
                  })(t, l);
              });
            }),
          c
        );
      }
      function ei(t, e, n = {}) {
        let i = o(t, e, "exit" === n.type ? t.presenceContext?.custom : void 0),
          { transition: r = t.getDefaultTransition() || {} } = i || {};
        n.transitionOverride && (r = n.transitionOverride);
        let s = i ? () => Promise.all(en(t, i, n)) : () => Promise.resolve(),
          a =
            t.variantChildren && t.variantChildren.size
              ? (i = 0) => {
                  let {
                    delayChildren: s = 0,
                    staggerChildren: o,
                    staggerDirection: a,
                  } = r;
                  return (function (t, e, n = 0, i = 0, r = 1, s) {
                    let o = [],
                      a = (t.variantChildren.size - 1) * i,
                      l = 1 === r ? (t = 0) => t * i : (t = 0) => a - t * i;
                    return (
                      Array.from(t.variantChildren)
                        .sort(er)
                        .forEach((t, i) => {
                          t.notify("AnimationStart", e),
                            o.push(
                              ei(t, e, { ...s, delay: n + l(i) }).then(() =>
                                t.notify("AnimationComplete", e)
                              )
                            );
                        }),
                      Promise.all(o)
                    );
                  })(t, e, s + i, o, a, n);
                }
              : () => Promise.resolve(),
          { when: l } = r;
        if (!l) return Promise.all([s(), a(n.delay)]);
        {
          let [t, e] = "beforeChildren" === l ? [s, a] : [a, s];
          return t().then(() => e());
        }
      }
      function er(t, e) {
        return t.sortNodePosition(e);
      }
      function es(t, e) {
        if (!Array.isArray(e)) return !1;
        let n = e.length;
        if (n !== t.length) return !1;
        for (let i = 0; i < n; i++) if (e[i] !== t[i]) return !1;
        return !0;
      }
      function eo(t) {
        return "string" == typeof t || Array.isArray(t);
      }
      let ea = [
          "animate",
          "whileInView",
          "whileFocus",
          "whileHover",
          "whileTap",
          "whileDrag",
          "exit",
        ],
        el = ["initial", ...ea],
        eu = el.length,
        eh = [...ea].reverse(),
        ec = ea.length;
      function ed(t = !1) {
        return {
          isActive: t,
          protectedKeys: {},
          needsAnimating: {},
          prevResolvedValues: {},
        };
      }
      function ep() {
        return {
          animate: ed(!0),
          whileInView: ed(),
          whileHover: ed(),
          whileTap: ed(),
          whileDrag: ed(),
          whileFocus: ed(),
          exit: ed(),
        };
      }
      class ef {
        constructor(t) {
          (this.isMounted = !1), (this.node = t);
        }
        update() {}
      }
      class em extends ef {
        constructor(t) {
          super(t),
            t.animationState ||
              (t.animationState = (function (t) {
                let e = (e) =>
                    Promise.all(
                      e.map(({ animation: e, options: n }) =>
                        (function (t, e, n = {}) {
                          let i;
                          if ((t.notify("AnimationStart", e), Array.isArray(e)))
                            i = Promise.all(e.map((e) => ei(t, e, n)));
                          else if ("string" == typeof e) i = ei(t, e, n);
                          else {
                            let r =
                              "function" == typeof e ? o(t, e, n.custom) : e;
                            i = Promise.all(en(t, r, n));
                          }
                          return i.then(() => {
                            t.notify("AnimationComplete", e);
                          });
                        })(t, e, n)
                      )
                    ),
                  n = ep(),
                  r = !0,
                  s = (e) => (n, i) => {
                    let r = o(
                      t,
                      i,
                      "exit" === e ? t.presenceContext?.custom : void 0
                    );
                    if (r) {
                      let { transition: t, transitionEnd: e, ...i } = r;
                      n = { ...n, ...i, ...e };
                    }
                    return n;
                  };
                function a(a) {
                  let { props: l } = t,
                    u =
                      (function t(e) {
                        if (!e) return;
                        if (!e.isControllingVariants) {
                          let n = (e.parent && t(e.parent)) || {};
                          return (
                            void 0 !== e.props.initial &&
                              (n.initial = e.props.initial),
                            n
                          );
                        }
                        let n = {};
                        for (let t = 0; t < eu; t++) {
                          let i = el[t],
                            r = e.props[i];
                          (eo(r) || !1 === r) && (n[i] = r);
                        }
                        return n;
                      })(t.parent) || {},
                    h = [],
                    c = new Set(),
                    d = {},
                    p = 1 / 0;
                  for (let e = 0; e < ec; e++) {
                    var f, v;
                    let o = eh[e],
                      g = n[o],
                      y = void 0 !== l[o] ? l[o] : u[o],
                      x = eo(y),
                      w = o === a ? g.isActive : null;
                    !1 === w && (p = e);
                    let b = y === u[o] && y !== l[o] && x;
                    if (
                      (b && r && t.manuallyAnimateOnMount && (b = !1),
                      (g.protectedKeys = { ...d }),
                      (!g.isActive && null === w) ||
                        (!y && !g.prevProp) ||
                        i(y) ||
                        "boolean" == typeof y)
                    )
                      continue;
                    let E =
                        ((f = g.prevProp),
                        "string" == typeof (v = y)
                          ? v !== f
                          : !!Array.isArray(v) && !es(v, f)),
                      T =
                        E || (o === a && g.isActive && !b && x) || (e > p && x),
                      P = !1,
                      S = Array.isArray(y) ? y : [y],
                      A = S.reduce(s(o), {});
                    !1 === w && (A = {});
                    let { prevResolvedValues: k = {} } = g,
                      M = { ...k, ...A },
                      C = (e) => {
                        (T = !0),
                          c.has(e) && ((P = !0), c.delete(e)),
                          (g.needsAnimating[e] = !0);
                        let n = t.getValue(e);
                        n && (n.liveStyle = !1);
                      };
                    for (let t in M) {
                      let e = A[t],
                        n = k[t];
                      if (d.hasOwnProperty(t)) continue;
                      let i = !1;
                      (m(e) && m(n) ? es(e, n) : e === n)
                        ? void 0 !== e && c.has(t)
                          ? C(t)
                          : (g.protectedKeys[t] = !0)
                        : null != e
                        ? C(t)
                        : c.add(t);
                    }
                    (g.prevProp = y),
                      (g.prevResolvedValues = A),
                      g.isActive && (d = { ...d, ...A }),
                      r && t.blockInitialAnimation && (T = !1);
                    let V = !(b && E) || P;
                    T &&
                      V &&
                      h.push(
                        ...S.map((t) => ({
                          animation: t,
                          options: { type: o },
                        }))
                      );
                  }
                  if (c.size) {
                    let e = {};
                    if ("boolean" != typeof l.initial) {
                      let n = o(
                        t,
                        Array.isArray(l.initial) ? l.initial[0] : l.initial
                      );
                      n && n.transition && (e.transition = n.transition);
                    }
                    c.forEach((n) => {
                      let i = t.getBaseTarget(n),
                        r = t.getValue(n);
                      r && (r.liveStyle = !0), (e[n] = i ?? null);
                    }),
                      h.push({ animation: e });
                  }
                  let g = !!h.length;
                  return (
                    r &&
                      (!1 === l.initial || l.initial === l.animate) &&
                      !t.manuallyAnimateOnMount &&
                      (g = !1),
                    (r = !1),
                    g ? e(h) : Promise.resolve()
                  );
                }
                return {
                  animateChanges: a,
                  setActive: function (e, i) {
                    if (n[e].isActive === i) return Promise.resolve();
                    t.variantChildren?.forEach((t) =>
                      t.animationState?.setActive(e, i)
                    ),
                      (n[e].isActive = i);
                    let r = a(e);
                    for (let t in n) n[t].protectedKeys = {};
                    return r;
                  },
                  setAnimateFunction: function (n) {
                    e = n(t);
                  },
                  getState: () => n,
                  reset: () => {
                    (n = ep()), (r = !0);
                  },
                };
              })(t));
        }
        updateAnimationControlsSubscription() {
          let { animate: t } = this.node.getProps();
          i(t) && (this.unmountControls = t.subscribe(this.node));
        }
        mount() {
          this.updateAnimationControlsSubscription();
        }
        update() {
          let { animate: t } = this.node.getProps(),
            { animate: e } = this.node.prevProps || {};
          t !== e && this.updateAnimationControlsSubscription();
        }
        unmount() {
          this.node.animationState.reset(), this.unmountControls?.();
        }
      }
      let ev = 0;
      class eg extends ef {
        constructor() {
          super(...arguments), (this.id = ev++);
        }
        update() {
          if (!this.node.presenceContext) return;
          let { isPresent: t, onExitComplete: e } = this.node.presenceContext,
            { isPresent: n } = this.node.prevPresenceContext || {};
          if (!this.node.animationState || t === n) return;
          let i = this.node.animationState.setActive("exit", !t);
          e &&
            !t &&
            i.then(() => {
              e(this.id);
            });
        }
        mount() {
          let { register: t, onExitComplete: e } =
            this.node.presenceContext || {};
          e && e(this.id), t && (this.unmount = t(this.id));
        }
        unmount() {}
      }
      let ey = { x: !1, y: !1 };
      var ex = n(72473);
      function ew(t, e, n, i = { passive: !0 }) {
        return t.addEventListener(e, n, i), () => t.removeEventListener(e, n);
      }
      let eb = (t) =>
        "mouse" === t.pointerType
          ? "number" != typeof t.button || t.button <= 0
          : !1 !== t.isPrimary;
      function eE(t) {
        return { point: { x: t.pageX, y: t.pageY } };
      }
      let eT = (t) => (e) => eb(e) && t(e, eE(e));
      function eP(t, e, n, i) {
        return ew(t, e, eT(n), i);
      }
      function eS({ top: t, left: e, right: n, bottom: i }) {
        return { x: { min: e, max: n }, y: { min: t, max: i } };
      }
      function eA(t) {
        return t.max - t.min;
      }
      function ek(t, e, n, i = 0.5) {
        (t.origin = i),
          (t.originPoint = (0, ex.k)(e.min, e.max, t.origin)),
          (t.scale = eA(n) / eA(e)),
          (t.translate = (0, ex.k)(n.min, n.max, t.origin) - t.originPoint),
          ((t.scale >= 0.9999 && t.scale <= 1.0001) || isNaN(t.scale)) &&
            (t.scale = 1),
          ((t.translate >= -0.01 && t.translate <= 0.01) ||
            isNaN(t.translate)) &&
            (t.translate = 0);
      }
      function eM(t, e, n, i) {
        ek(t.x, e.x, n.x, i ? i.originX : void 0),
          ek(t.y, e.y, n.y, i ? i.originY : void 0);
      }
      function eC(t, e, n) {
        (t.min = n.min + e.min), (t.max = t.min + eA(e));
      }
      function eV(t, e, n) {
        (t.min = e.min - n.min), (t.max = t.min + eA(e));
      }
      function eD(t, e, n) {
        eV(t.x, e.x, n.x), eV(t.y, e.y, n.y);
      }
      let eR = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
        eF = () => ({ x: eR(), y: eR() }),
        eL = () => ({ min: 0, max: 0 }),
        ej = () => ({ x: eL(), y: eL() });
      function eO(t) {
        return [t("x"), t("y")];
      }
      function eB(t) {
        return void 0 === t || 1 === t;
      }
      function eN({ scale: t, scaleX: e, scaleY: n }) {
        return !eB(t) || !eB(e) || !eB(n);
      }
      function eI(t) {
        return (
          eN(t) ||
          eW(t) ||
          t.z ||
          t.rotate ||
          t.rotateX ||
          t.rotateY ||
          t.skewX ||
          t.skewY
        );
      }
      function eW(t) {
        var e, n;
        return ((e = t.x) && "0%" !== e) || ((n = t.y) && "0%" !== n);
      }
      function eU(t, e, n, i, r) {
        return void 0 !== r && (t = i + r * (t - i)), i + n * (t - i) + e;
      }
      function e$(t, e = 0, n = 1, i, r) {
        (t.min = eU(t.min, e, n, i, r)), (t.max = eU(t.max, e, n, i, r));
      }
      function eG(t, { x: e, y: n }) {
        e$(t.x, e.translate, e.scale, e.originPoint),
          e$(t.y, n.translate, n.scale, n.originPoint);
      }
      function eH(t, e) {
        (t.min = t.min + e), (t.max = t.max + e);
      }
      function eq(t, e, n, i, r = 0.5) {
        let s = (0, ex.k)(t.min, t.max, r);
        e$(t, e, n, s, i);
      }
      function ez(t, e) {
        eq(t.x, e.x, e.scaleX, e.scale, e.originX),
          eq(t.y, e.y, e.scaleY, e.scale, e.originY);
      }
      function eY(t, e) {
        return eS(
          (function (t, e) {
            if (!e) return t;
            let n = e({ x: t.left, y: t.top }),
              i = e({ x: t.right, y: t.bottom });
            return { top: n.y, left: n.x, bottom: i.y, right: i.x };
          })(t.getBoundingClientRect(), e)
        );
      }
      let eX = ({ current: t }) => (t ? t.ownerDocument.defaultView : null);
      function eK(t) {
        return (
          t &&
          "object" == typeof t &&
          Object.prototype.hasOwnProperty.call(t, "current")
        );
      }
      let e_ = (t, e) => Math.abs(t - e);
      class eQ {
        constructor(
          t,
          e,
          {
            transformPagePoint: n,
            contextWindow: i,
            dragSnapToOrigin: r = !1,
          } = {}
        ) {
          if (
            ((this.startEvent = null),
            (this.lastMoveEvent = null),
            (this.lastMoveEventInfo = null),
            (this.handlers = {}),
            (this.contextWindow = window),
            (this.updatePoint = () => {
              if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
              let t = e0(this.lastMoveEventInfo, this.history),
                e = null !== this.startEvent,
                n =
                  (function (t, e) {
                    return Math.sqrt(e_(t.x, e.x) ** 2 + e_(t.y, e.y) ** 2);
                  })(t.offset, { x: 0, y: 0 }) >= 3;
              if (!e && !n) return;
              let { point: i } = t,
                { timestamp: r } = h.uv;
              this.history.push({ ...i, timestamp: r });
              let { onStart: s, onMove: o } = this.handlers;
              e ||
                (s && s(this.lastMoveEvent, t),
                (this.startEvent = this.lastMoveEvent)),
                o && o(this.lastMoveEvent, t);
            }),
            (this.handlePointerMove = (t, e) => {
              (this.lastMoveEvent = t),
                (this.lastMoveEventInfo = eZ(e, this.transformPagePoint)),
                h.Gt.update(this.updatePoint, !0);
            }),
            (this.handlePointerUp = (t, e) => {
              this.end();
              let {
                onEnd: n,
                onSessionEnd: i,
                resumeAnimation: r,
              } = this.handlers;
              if (
                (this.dragSnapToOrigin && r && r(),
                !(this.lastMoveEvent && this.lastMoveEventInfo))
              )
                return;
              let s = e0(
                "pointercancel" === t.type
                  ? this.lastMoveEventInfo
                  : eZ(e, this.transformPagePoint),
                this.history
              );
              this.startEvent && n && n(t, s), i && i(t, s);
            }),
            !eb(t))
          )
            return;
          (this.dragSnapToOrigin = r),
            (this.handlers = e),
            (this.transformPagePoint = n),
            (this.contextWindow = i || window);
          let s = eZ(eE(t), this.transformPagePoint),
            { point: o } = s,
            { timestamp: a } = h.uv;
          this.history = [{ ...o, timestamp: a }];
          let { onSessionStart: l } = e;
          l && l(t, e0(s, this.history)),
            (this.removeListeners = (0, T.F)(
              eP(this.contextWindow, "pointermove", this.handlePointerMove),
              eP(this.contextWindow, "pointerup", this.handlePointerUp),
              eP(this.contextWindow, "pointercancel", this.handlePointerUp)
            ));
        }
        updateHandlers(t) {
          this.handlers = t;
        }
        end() {
          this.removeListeners && this.removeListeners(),
            (0, h.WG)(this.updatePoint);
        }
      }
      function eZ(t, e) {
        return e ? { point: e(t.point) } : t;
      }
      function eJ(t, e) {
        return { x: t.x - e.x, y: t.y - e.y };
      }
      function e0({ point: t }, e) {
        return {
          point: t,
          delta: eJ(t, e1(e)),
          offset: eJ(t, e[0]),
          velocity: (function (t, e) {
            if (t.length < 2) return { x: 0, y: 0 };
            let n = t.length - 1,
              i = null,
              r = e1(t);
            for (
              ;
              n >= 0 && ((i = t[n]), !(r.timestamp - i.timestamp > S(0.1)));

            )
              n--;
            if (!i) return { x: 0, y: 0 };
            let s = A(r.timestamp - i.timestamp);
            if (0 === s) return { x: 0, y: 0 };
            let o = { x: (r.x - i.x) / s, y: (r.y - i.y) / s };
            return o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o;
          })(e, 0.1),
        };
      }
      function e1(t) {
        return t[t.length - 1];
      }
      var e2 = n(40438);
      function e5(t, e, n) {
        return {
          min: void 0 !== e ? t.min + e : void 0,
          max: void 0 !== n ? t.max + n - (t.max - t.min) : void 0,
        };
      }
      function e4(t, e) {
        let n = e.min - t.min,
          i = e.max - t.max;
        return (
          e.max - e.min < t.max - t.min && ([n, i] = [i, n]), { min: n, max: i }
        );
      }
      function e3(t, e, n) {
        return { min: e8(t, e), max: e8(t, n) };
      }
      function e8(t, e) {
        return "number" == typeof t ? t : t[e] || 0;
      }
      let e9 = new WeakMap();
      class e6 {
        constructor(t) {
          (this.openDragLock = null),
            (this.isDragging = !1),
            (this.currentDirection = null),
            (this.originPoint = { x: 0, y: 0 }),
            (this.constraints = !1),
            (this.hasMutatedConstraints = !1),
            (this.elastic = ej()),
            (this.visualElement = t);
        }
        start(t, { snapToCursor: e = !1 } = {}) {
          let { presenceContext: n } = this.visualElement;
          if (n && !1 === n.isPresent) return;
          let { dragSnapToOrigin: i } = this.getProps();
          this.panSession = new eQ(
            t,
            {
              onSessionStart: (t) => {
                let { dragSnapToOrigin: n } = this.getProps();
                n ? this.pauseAnimation() : this.stopAnimation(),
                  e && this.snapToCursor(eE(t).point);
              },
              onStart: (t, e) => {
                let {
                  drag: n,
                  dragPropagation: i,
                  onDragStart: r,
                } = this.getProps();
                if (
                  n &&
                  !i &&
                  (this.openDragLock && this.openDragLock(),
                  (this.openDragLock = (function (t) {
                    if ("x" === t || "y" === t)
                      if (ey[t]) return null;
                      else
                        return (
                          (ey[t] = !0),
                          () => {
                            ey[t] = !1;
                          }
                        );
                    return ey.x || ey.y
                      ? null
                      : ((ey.x = ey.y = !0),
                        () => {
                          ey.x = ey.y = !1;
                        });
                  })(n)),
                  !this.openDragLock)
                )
                  return;
                (this.isDragging = !0),
                  (this.currentDirection = null),
                  this.resolveConstraints(),
                  this.visualElement.projection &&
                    ((this.visualElement.projection.isAnimationBlocked = !0),
                    (this.visualElement.projection.target = void 0)),
                  eO((t) => {
                    let e = this.getAxisMotionValue(t).get() || 0;
                    if (tC.KN.test(e)) {
                      let { projection: n } = this.visualElement;
                      if (n && n.layout) {
                        let i = n.layout.layoutBox[t];
                        i && (e = eA(i) * (parseFloat(e) / 100));
                      }
                    }
                    this.originPoint[t] = e;
                  }),
                  r && h.Gt.postRender(() => r(t, e)),
                  y(this.visualElement, "transform");
                let { animationState: s } = this.visualElement;
                s && s.setActive("whileDrag", !0);
              },
              onMove: (t, e) => {
                let {
                  dragPropagation: n,
                  dragDirectionLock: i,
                  onDirectionLock: r,
                  onDrag: s,
                } = this.getProps();
                if (!n && !this.openDragLock) return;
                let { offset: o } = e;
                if (i && null === this.currentDirection) {
                  (this.currentDirection = (function (t, e = 10) {
                    let n = null;
                    return (
                      Math.abs(t.y) > e
                        ? (n = "y")
                        : Math.abs(t.x) > e && (n = "x"),
                      n
                    );
                  })(o)),
                    null !== this.currentDirection &&
                      r &&
                      r(this.currentDirection);
                  return;
                }
                this.updateAxis("x", e.point, o),
                  this.updateAxis("y", e.point, o),
                  this.visualElement.render(),
                  s && s(t, e);
              },
              onSessionEnd: (t, e) => this.stop(t, e),
              resumeAnimation: () =>
                eO(
                  (t) =>
                    "paused" === this.getAnimationState(t) &&
                    this.getAxisMotionValue(t).animation?.play()
                ),
            },
            {
              transformPagePoint: this.visualElement.getTransformPagePoint(),
              dragSnapToOrigin: i,
              contextWindow: eX(this.visualElement),
            }
          );
        }
        stop(t, e) {
          let n = this.isDragging;
          if ((this.cancel(), !n)) return;
          let { velocity: i } = e;
          this.startAnimation(i);
          let { onDragEnd: r } = this.getProps();
          r && h.Gt.postRender(() => r(t, e));
        }
        cancel() {
          this.isDragging = !1;
          let { projection: t, animationState: e } = this.visualElement;
          t && (t.isAnimationBlocked = !1),
            this.panSession && this.panSession.end(),
            (this.panSession = void 0);
          let { dragPropagation: n } = this.getProps();
          !n &&
            this.openDragLock &&
            (this.openDragLock(), (this.openDragLock = null)),
            e && e.setActive("whileDrag", !1);
        }
        updateAxis(t, e, n) {
          let { drag: i } = this.getProps();
          if (!n || !e7(t, i, this.currentDirection)) return;
          let r = this.getAxisMotionValue(t),
            s = this.originPoint[t] + n[t];
          this.constraints &&
            this.constraints[t] &&
            (s = (function (t, { min: e, max: n }, i) {
              return (
                void 0 !== e && t < e
                  ? (t = i ? (0, ex.k)(e, t, i.min) : Math.max(t, e))
                  : void 0 !== n &&
                    t > n &&
                    (t = i ? (0, ex.k)(n, t, i.max) : Math.min(t, n)),
                t
              );
            })(s, this.constraints[t], this.elastic[t])),
            r.set(s);
        }
        resolveConstraints() {
          let { dragConstraints: t, dragElastic: e } = this.getProps(),
            n =
              this.visualElement.projection &&
              !this.visualElement.projection.layout
                ? this.visualElement.projection.measure(!1)
                : this.visualElement.projection?.layout,
            i = this.constraints;
          t && eK(t)
            ? this.constraints ||
              (this.constraints = this.resolveRefConstraints())
            : t && n
            ? (this.constraints = (function (
                t,
                { top: e, left: n, bottom: i, right: r }
              ) {
                return { x: e5(t.x, n, r), y: e5(t.y, e, i) };
              })(n.layoutBox, t))
            : (this.constraints = !1),
            (this.elastic = (function (t = 0.35) {
              return (
                !1 === t ? (t = 0) : !0 === t && (t = 0.35),
                { x: e3(t, "left", "right"), y: e3(t, "top", "bottom") }
              );
            })(e)),
            i !== this.constraints &&
              n &&
              this.constraints &&
              !this.hasMutatedConstraints &&
              eO((t) => {
                !1 !== this.constraints &&
                  this.getAxisMotionValue(t) &&
                  (this.constraints[t] = (function (t, e) {
                    let n = {};
                    return (
                      void 0 !== e.min && (n.min = e.min - t.min),
                      void 0 !== e.max && (n.max = e.max - t.min),
                      n
                    );
                  })(n.layoutBox[t], this.constraints[t]));
              });
        }
        resolveRefConstraints() {
          var t;
          let { dragConstraints: e, onMeasureDragConstraints: n } =
            this.getProps();
          if (!e || !eK(e)) return !1;
          let i = e.current;
          (0, j.V)(
            null !== i,
            "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop."
          );
          let { projection: r } = this.visualElement;
          if (!r || !r.layout) return !1;
          let s = (function (t, e, n) {
              let i = eY(t, n),
                { scroll: r } = e;
              return r && (eH(i.x, r.offset.x), eH(i.y, r.offset.y)), i;
            })(i, r.root, this.visualElement.getTransformPagePoint()),
            o =
              ((t = r.layout.layoutBox), { x: e4(t.x, s.x), y: e4(t.y, s.y) });
          if (n) {
            let t = n(
              (function ({ x: t, y: e }) {
                return { top: e.min, right: t.max, bottom: e.max, left: t.min };
              })(o)
            );
            (this.hasMutatedConstraints = !!t), t && (o = eS(t));
          }
          return o;
        }
        startAnimation(t) {
          let {
              drag: e,
              dragMomentum: n,
              dragElastic: i,
              dragTransition: r,
              dragSnapToOrigin: s,
              onDragTransitionEnd: o,
            } = this.getProps(),
            a = this.constraints || {};
          return Promise.all(
            eO((o) => {
              if (!e7(o, e, this.currentDirection)) return;
              let l = (a && a[o]) || {};
              s && (l = { min: 0, max: 0 });
              let u = {
                type: "inertia",
                velocity: n ? t[o] : 0,
                bounceStiffness: i ? 200 : 1e6,
                bounceDamping: i ? 40 : 1e7,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...r,
                ...l,
              };
              return this.startAxisValueAnimation(o, u);
            })
          ).then(o);
        }
        startAxisValueAnimation(t, e) {
          let n = this.getAxisMotionValue(t);
          return (
            y(this.visualElement, t),
            n.start(ee(t, n, 0, e, this.visualElement, !1))
          );
        }
        stopAnimation() {
          eO((t) => this.getAxisMotionValue(t).stop());
        }
        pauseAnimation() {
          eO((t) => this.getAxisMotionValue(t).animation?.pause());
        }
        getAnimationState(t) {
          return this.getAxisMotionValue(t).animation?.state;
        }
        getAxisMotionValue(t) {
          let e = `_drag${t.toUpperCase()}`,
            n = this.visualElement.getProps();
          return (
            n[e] ||
            this.visualElement.getValue(
              t,
              (n.initial ? n.initial[t] : void 0) || 0
            )
          );
        }
        snapToCursor(t) {
          eO((e) => {
            let { drag: n } = this.getProps();
            if (!e7(e, n, this.currentDirection)) return;
            let { projection: i } = this.visualElement,
              r = this.getAxisMotionValue(e);
            if (i && i.layout) {
              let { min: n, max: s } = i.layout.layoutBox[e];
              r.set(t[e] - (0, ex.k)(n, s, 0.5));
            }
          });
        }
        scalePositionWithinConstraints() {
          if (!this.visualElement.current) return;
          let { drag: t, dragConstraints: e } = this.getProps(),
            { projection: n } = this.visualElement;
          if (!eK(e) || !n || !this.constraints) return;
          this.stopAnimation();
          let i = { x: 0, y: 0 };
          eO((t) => {
            let e = this.getAxisMotionValue(t);
            if (e && !1 !== this.constraints) {
              let n = e.get();
              i[t] = (function (t, e) {
                let n = 0.5,
                  i = eA(t),
                  r = eA(e);
                return (
                  r > i
                    ? (n = (0, e2.q)(e.min, e.max - i, t.min))
                    : i > r && (n = (0, e2.q)(t.min, t.max - r, e.min)),
                  (0, P.q)(0, 1, n)
                );
              })({ min: n, max: n }, this.constraints[t]);
            }
          });
          let { transformTemplate: r } = this.visualElement.getProps();
          (this.visualElement.current.style.transform = r ? r({}, "") : "none"),
            n.root && n.root.updateScroll(),
            n.updateLayout(),
            this.resolveConstraints(),
            eO((e) => {
              if (!e7(e, t, null)) return;
              let n = this.getAxisMotionValue(e),
                { min: r, max: s } = this.constraints[e];
              n.set((0, ex.k)(r, s, i[e]));
            });
        }
        addListeners() {
          if (!this.visualElement.current) return;
          e9.set(this.visualElement, this);
          let t = eP(this.visualElement.current, "pointerdown", (t) => {
              let { drag: e, dragListener: n = !0 } = this.getProps();
              e && n && this.start(t);
            }),
            e = () => {
              let { dragConstraints: t } = this.getProps();
              eK(t) &&
                t.current &&
                (this.constraints = this.resolveRefConstraints());
            },
            { projection: n } = this.visualElement,
            i = n.addEventListener("measure", e);
          n && !n.layout && (n.root && n.root.updateScroll(), n.updateLayout()),
            h.Gt.read(e);
          let r = ew(window, "resize", () =>
              this.scalePositionWithinConstraints()
            ),
            s = n.addEventListener(
              "didUpdate",
              ({ delta: t, hasLayoutChanged: e }) => {
                this.isDragging &&
                  e &&
                  (eO((e) => {
                    let n = this.getAxisMotionValue(e);
                    n &&
                      ((this.originPoint[e] += t[e].translate),
                      n.set(n.get() + t[e].translate));
                  }),
                  this.visualElement.render());
              }
            );
          return () => {
            r(), t(), i(), s && s();
          };
        }
        getProps() {
          let t = this.visualElement.getProps(),
            {
              drag: e = !1,
              dragDirectionLock: n = !1,
              dragPropagation: i = !1,
              dragConstraints: r = !1,
              dragElastic: s = 0.35,
              dragMomentum: o = !0,
            } = t;
          return {
            ...t,
            drag: e,
            dragDirectionLock: n,
            dragPropagation: i,
            dragConstraints: r,
            dragElastic: s,
            dragMomentum: o,
          };
        }
      }
      function e7(t, e, n) {
        return (!0 === e || e === t) && (null === n || n === t);
      }
      class nt extends ef {
        constructor(t) {
          super(t),
            (this.removeGroupControls = b.l),
            (this.removeListeners = b.l),
            (this.controls = new e6(t));
        }
        mount() {
          let { dragControls: t } = this.node.getProps();
          t && (this.removeGroupControls = t.subscribe(this.controls)),
            (this.removeListeners = this.controls.addListeners() || b.l);
        }
        unmount() {
          this.removeGroupControls(), this.removeListeners();
        }
      }
      let ne = (t) => (e, n) => {
        t && h.Gt.postRender(() => t(e, n));
      };
      class nn extends ef {
        constructor() {
          super(...arguments), (this.removePointerDownListener = b.l);
        }
        onPointerDown(t) {
          this.session = new eQ(t, this.createPanHandlers(), {
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: eX(this.node),
          });
        }
        createPanHandlers() {
          let {
            onPanSessionStart: t,
            onPanStart: e,
            onPan: n,
            onPanEnd: i,
          } = this.node.getProps();
          return {
            onSessionStart: ne(t),
            onStart: ne(e),
            onMove: n,
            onEnd: (t, e) => {
              delete this.session, i && h.Gt.postRender(() => i(t, e));
            },
          };
        }
        mount() {
          this.removePointerDownListener = eP(
            this.node.current,
            "pointerdown",
            (t) => this.onPointerDown(t)
          );
        }
        update() {
          this.session && this.session.updateHandlers(this.createPanHandlers());
        }
        unmount() {
          this.removePointerDownListener(), this.session && this.session.end();
        }
      }
      var ni = n(46877);
      let { schedule: nr } = (0, n(9537).I)(queueMicrotask, !1);
      var ns = n(40329),
        no = n(83707),
        na = n(87706);
      let nl = (0, ns.createContext)({}),
        nu = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
      function nh(t, e) {
        return e.max === e.min ? 0 : (t / (e.max - e.min)) * 100;
      }
      let nc = {
        correct: (t, e) => {
          if (!e.target) return t;
          if ("string" == typeof t)
            if (!tC.px.test(t)) return t;
            else t = parseFloat(t);
          let n = nh(t, e.target.x),
            i = nh(t, e.target.y);
          return `${n}% ${i}%`;
        },
      };
      var nd = n(55159);
      let np = {};
      class nf extends ns.Component {
        componentDidMount() {
          let {
              visualElement: t,
              layoutGroup: e,
              switchLayoutGroup: n,
              layoutId: i,
            } = this.props,
            { projection: r } = t;
          for (let t in nv)
            (np[t] = nv[t]), (0, nd.j)(t) && (np[t].isCSSVariable = !0);
          r &&
            (e.group && e.group.add(r),
            n && n.register && i && n.register(r),
            r.root.didUpdate(),
            r.addEventListener("animationComplete", () => {
              this.safeToRemove();
            }),
            r.setOptions({
              ...r.options,
              onExitComplete: () => this.safeToRemove(),
            })),
            (nu.hasEverUpdated = !0);
        }
        getSnapshotBeforeUpdate(t) {
          let {
              layoutDependency: e,
              visualElement: n,
              drag: i,
              isPresent: r,
            } = this.props,
            s = n.projection;
          return (
            s &&
              ((s.isPresent = r),
              i || t.layoutDependency !== e || void 0 === e || t.isPresent !== r
                ? s.willUpdate()
                : this.safeToRemove(),
              t.isPresent !== r &&
                (r
                  ? s.promote()
                  : s.relegate() ||
                    h.Gt.postRender(() => {
                      let t = s.getStack();
                      (t && t.members.length) || this.safeToRemove();
                    }))),
            null
          );
        }
        componentDidUpdate() {
          let { projection: t } = this.props.visualElement;
          t &&
            (t.root.didUpdate(),
            nr.postRender(() => {
              !t.currentAnimation && t.isLead() && this.safeToRemove();
            }));
        }
        componentWillUnmount() {
          let {
              visualElement: t,
              layoutGroup: e,
              switchLayoutGroup: n,
            } = this.props,
            { projection: i } = t;
          i &&
            (i.scheduleCheckAfterUnmount(),
            e && e.group && e.group.remove(i),
            n && n.deregister && n.deregister(i));
        }
        safeToRemove() {
          let { safeToRemove: t } = this.props;
          t && t();
        }
        render() {
          return null;
        }
      }
      function nm(t) {
        let [e, n] = (0, no.xQ)(),
          i = (0, ns.useContext)(na.L);
        return (0, ni.jsx)(nf, {
          ...t,
          layoutGroup: i,
          switchLayoutGroup: (0, ns.useContext)(nl),
          isPresent: e,
          safeToRemove: n,
        });
      }
      let nv = {
        borderRadius: {
          ...nc,
          applyTo: [
            "borderTopLeftRadius",
            "borderTopRightRadius",
            "borderBottomLeftRadius",
            "borderBottomRightRadius",
          ],
        },
        borderTopLeftRadius: nc,
        borderTopRightRadius: nc,
        borderBottomLeftRadius: nc,
        borderBottomRightRadius: nc,
        boxShadow: {
          correct: (t, { treeScale: e, projectionDelta: n }) => {
            let i = tJ.f.parse(t);
            if (i.length > 5) return t;
            let r = tJ.f.createTransformer(t),
              s = +("number" != typeof i[0]),
              o = n.x.scale * e.x,
              a = n.y.scale * e.y;
            (i[0 + s] /= o), (i[1 + s] /= a);
            let l = (0, ex.k)(o, a, 0.5);
            return (
              "number" == typeof i[2 + s] && (i[2 + s] /= l),
              "number" == typeof i[3 + s] && (i[3 + s] /= l),
              r(i)
            );
          },
        },
      };
      var ng = n(86470),
        ny = n(76904);
      let nx = (t, e) => t.depth - e.depth;
      class nw {
        constructor() {
          (this.children = []), (this.isDirty = !1);
        }
        add(t) {
          (0, ny.Kq)(this.children, t), (this.isDirty = !0);
        }
        remove(t) {
          (0, ny.Ai)(this.children, t), (this.isDirty = !0);
        }
        forEach(t) {
          this.isDirty && this.children.sort(nx),
            (this.isDirty = !1),
            this.children.forEach(t);
        }
      }
      function nb(t) {
        return g(t) ? t.get() : t;
      }
      let nE = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
        nT = nE.length,
        nP = (t) => ("string" == typeof t ? parseFloat(t) : t),
        nS = (t) => "number" == typeof t || tC.px.test(t);
      function nA(t, e) {
        return void 0 !== t[e] ? t[e] : t.borderRadius;
      }
      let nk = nC(0, 0.5, te),
        nM = nC(0.5, 0.95, b.l);
      function nC(t, e, n) {
        return (i) => (i < t ? 0 : i > e ? 1 : n((0, e2.q)(t, e, i)));
      }
      function nV(t, e) {
        (t.min = e.min), (t.max = e.max);
      }
      function nD(t, e) {
        nV(t.x, e.x), nV(t.y, e.y);
      }
      function nR(t, e) {
        (t.translate = e.translate),
          (t.scale = e.scale),
          (t.originPoint = e.originPoint),
          (t.origin = e.origin);
      }
      function nF(t, e, n, i, r) {
        return (
          (t -= e),
          (t = i + (1 / n) * (t - i)),
          void 0 !== r && (t = i + (1 / r) * (t - i)),
          t
        );
      }
      function nL(t, e, [n, i, r], s, o) {
        !(function (t, e = 0, n = 1, i = 0.5, r, s = t, o = t) {
          if (
            (tC.KN.test(e) &&
              ((e = parseFloat(e)),
              (e = (0, ex.k)(o.min, o.max, e / 100) - o.min)),
            "number" != typeof e)
          )
            return;
          let a = (0, ex.k)(s.min, s.max, i);
          t === s && (a -= e),
            (t.min = nF(t.min, e, n, a, r)),
            (t.max = nF(t.max, e, n, a, r));
        })(t, e[n], e[i], e[r], e.scale, s, o);
      }
      let nj = ["x", "scaleX", "originX"],
        nO = ["y", "scaleY", "originY"];
      function nB(t, e, n, i) {
        nL(t.x, e, nj, n ? n.x : void 0, i ? i.x : void 0),
          nL(t.y, e, nO, n ? n.y : void 0, i ? i.y : void 0);
      }
      function nN(t) {
        return 0 === t.translate && 1 === t.scale;
      }
      function nI(t) {
        return nN(t.x) && nN(t.y);
      }
      function nW(t, e) {
        return t.min === e.min && t.max === e.max;
      }
      function nU(t, e) {
        return (
          Math.round(t.min) === Math.round(e.min) &&
          Math.round(t.max) === Math.round(e.max)
        );
      }
      function n$(t, e) {
        return nU(t.x, e.x) && nU(t.y, e.y);
      }
      function nG(t) {
        return eA(t.x) / eA(t.y);
      }
      function nH(t, e) {
        return (
          t.translate === e.translate &&
          t.scale === e.scale &&
          t.originPoint === e.originPoint
        );
      }
      class nq {
        constructor() {
          this.members = [];
        }
        add(t) {
          (0, ny.Kq)(this.members, t), t.scheduleRender();
        }
        remove(t) {
          if (
            ((0, ny.Ai)(this.members, t),
            t === this.prevLead && (this.prevLead = void 0),
            t === this.lead)
          ) {
            let t = this.members[this.members.length - 1];
            t && this.promote(t);
          }
        }
        relegate(t) {
          let e,
            n = this.members.findIndex((e) => t === e);
          if (0 === n) return !1;
          for (let t = n; t >= 0; t--) {
            let n = this.members[t];
            if (!1 !== n.isPresent) {
              e = n;
              break;
            }
          }
          return !!e && (this.promote(e), !0);
        }
        promote(t, e) {
          let n = this.lead;
          if (t !== n && ((this.prevLead = n), (this.lead = t), t.show(), n)) {
            n.instance && n.scheduleRender(),
              t.scheduleRender(),
              (t.resumeFrom = n),
              e && (t.resumeFrom.preserveOpacity = !0),
              n.snapshot &&
                ((t.snapshot = n.snapshot),
                (t.snapshot.latestValues =
                  n.animationValues || n.latestValues)),
              t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
            let { crossfade: i } = t.options;
            !1 === i && n.hide();
          }
        }
        exitAnimationComplete() {
          this.members.forEach((t) => {
            let { options: e, resumingFrom: n } = t;
            e.onExitComplete && e.onExitComplete(),
              n && n.options.onExitComplete && n.options.onExitComplete();
          });
        }
        scheduleRender() {
          this.members.forEach((t) => {
            t.instance && t.scheduleRender(!1);
          });
        }
        removeLeadSnapshot() {
          this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
        }
      }
      let nz = {
          nodes: 0,
          calculatedTargetDeltas: 0,
          calculatedProjections: 0,
        },
        nY = ["", "X", "Y", "Z"],
        nX = { visibility: "hidden" },
        nK = 0;
      function n_(t, e, n, i) {
        let { latestValues: r } = e;
        r[t] && ((n[t] = r[t]), e.setStaticValue(t, 0), i && (i[t] = 0));
      }
      function nQ({
        attachResizeListener: t,
        defaultParent: e,
        measureScroll: n,
        checkIsScrollRoot: i,
        resetTransform: r,
      }) {
        return class {
          constructor(t = {}, n = e?.()) {
            (this.id = nK++),
              (this.animationId = 0),
              (this.children = new Set()),
              (this.options = {}),
              (this.isTreeAnimating = !1),
              (this.isAnimationBlocked = !1),
              (this.isLayoutDirty = !1),
              (this.isProjectionDirty = !1),
              (this.isSharedProjectionDirty = !1),
              (this.isTransformDirty = !1),
              (this.updateManuallyBlocked = !1),
              (this.updateBlockedByResize = !1),
              (this.isUpdating = !1),
              (this.isSVG = !1),
              (this.needsReset = !1),
              (this.shouldResetTransform = !1),
              (this.hasCheckedOptimisedAppear = !1),
              (this.treeScale = { x: 1, y: 1 }),
              (this.eventHandlers = new Map()),
              (this.hasTreeAnimated = !1),
              (this.updateScheduled = !1),
              (this.scheduleUpdate = () => this.update()),
              (this.projectionUpdateScheduled = !1),
              (this.checkUpdateFailed = () => {
                this.isUpdating &&
                  ((this.isUpdating = !1), this.clearAllSnapshots());
              }),
              (this.updateProjection = () => {
                (this.projectionUpdateScheduled = !1),
                  tG.Q.value &&
                    (nz.nodes =
                      nz.calculatedTargetDeltas =
                      nz.calculatedProjections =
                        0),
                  this.nodes.forEach(n0),
                  this.nodes.forEach(n9),
                  this.nodes.forEach(n6),
                  this.nodes.forEach(n1),
                  tG.Q.addProjectionMetrics && tG.Q.addProjectionMetrics(nz);
              }),
              (this.resolvedRelativeTargetAt = 0),
              (this.hasProjected = !1),
              (this.isVisible = !0),
              (this.animationProgress = 0),
              (this.sharedNodes = new Map()),
              (this.latestValues = t),
              (this.root = n ? n.root || n : this),
              (this.path = n ? [...n.path, n] : []),
              (this.parent = n),
              (this.depth = n ? n.depth + 1 : 0);
            for (let t = 0; t < this.path.length; t++)
              this.path[t].shouldResetTransform = !0;
            this.root === this && (this.nodes = new nw());
          }
          addEventListener(t, e) {
            return (
              this.eventHandlers.has(t) ||
                this.eventHandlers.set(t, new ng.v()),
              this.eventHandlers.get(t).add(e)
            );
          }
          notifyListeners(t, ...e) {
            let n = this.eventHandlers.get(t);
            n && n.notify(...e);
          }
          hasListeners(t) {
            return this.eventHandlers.has(t);
          }
          mount(e, n = this.root.hasTreeAnimated) {
            if (this.instance) return;
            (this.isSVG = e instanceof SVGElement && "svg" !== e.tagName),
              (this.instance = e);
            let { layoutId: i, layout: r, visualElement: s } = this.options;
            if (
              (s && !s.current && s.mount(e),
              this.root.nodes.add(this),
              this.parent && this.parent.children.add(this),
              n && (r || i) && (this.isLayoutDirty = !0),
              t)
            ) {
              let n,
                i = () => (this.root.updateBlockedByResize = !1);
              t(e, () => {
                (this.root.updateBlockedByResize = !0),
                  n && n(),
                  (n = (function (t, e) {
                    let n = E.k.now(),
                      i = ({ timestamp: r }) => {
                        let s = r - n;
                        s >= 250 && ((0, h.WG)(i), t(s - e));
                      };
                    return h.Gt.setup(i, !0), () => (0, h.WG)(i);
                  })(i, 250)),
                  nu.hasAnimatedSinceResize &&
                    ((nu.hasAnimatedSinceResize = !1), this.nodes.forEach(n8));
              });
            }
            i && this.root.registerSharedNode(i, this),
              !1 !== this.options.animate &&
                s &&
                (i || r) &&
                this.addEventListener(
                  "didUpdate",
                  ({
                    delta: t,
                    hasLayoutChanged: e,
                    hasRelativeLayoutChanged: n,
                    layout: i,
                  }) => {
                    if (this.isTreeAnimationBlocked()) {
                      (this.target = void 0), (this.relativeTarget = void 0);
                      return;
                    }
                    let r =
                        this.options.transition ||
                        s.getDefaultTransition() ||
                        is,
                      {
                        onLayoutAnimationStart: o,
                        onLayoutAnimationComplete: l,
                      } = s.getProps(),
                      u = !this.targetLayout || !n$(this.targetLayout, i),
                      h = !e && n;
                    if (
                      this.options.layoutRoot ||
                      this.resumeFrom ||
                      h ||
                      (e && (u || !this.currentAnimation))
                    ) {
                      this.resumeFrom &&
                        ((this.resumingFrom = this.resumeFrom),
                        (this.resumingFrom.resumingFrom = void 0)),
                        this.setAnimationOrigin(t, h);
                      let e = { ...a(r, "layout"), onPlay: o, onComplete: l };
                      (s.shouldReduceMotion || this.options.layoutRoot) &&
                        ((e.delay = 0), (e.type = !1)),
                        this.startAnimation(e);
                    } else
                      e || n8(this),
                        this.isLead() &&
                          this.options.onExitComplete &&
                          this.options.onExitComplete();
                    this.targetLayout = i;
                  }
                );
          }
          unmount() {
            this.options.layoutId && this.willUpdate(),
              this.root.nodes.remove(this);
            let t = this.getStack();
            t && t.remove(this),
              this.parent && this.parent.children.delete(this),
              (this.instance = void 0),
              this.eventHandlers.clear(),
              (0, h.WG)(this.updateProjection);
          }
          blockUpdate() {
            this.updateManuallyBlocked = !0;
          }
          unblockUpdate() {
            this.updateManuallyBlocked = !1;
          }
          isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize;
          }
          isTreeAnimationBlocked() {
            return (
              this.isAnimationBlocked ||
              (this.parent && this.parent.isTreeAnimationBlocked()) ||
              !1
            );
          }
          startUpdate() {
            !this.isUpdateBlocked() &&
              ((this.isUpdating = !0),
              this.nodes && this.nodes.forEach(n7),
              this.animationId++);
          }
          getTransformTemplate() {
            let { visualElement: t } = this.options;
            return t && t.getProps().transformTemplate;
          }
          willUpdate(t = !0) {
            if (
              ((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())
            ) {
              this.options.onExitComplete && this.options.onExitComplete();
              return;
            }
            if (
              (window.MotionCancelOptimisedAnimation &&
                !this.hasCheckedOptimisedAppear &&
                (function t(e) {
                  if (((e.hasCheckedOptimisedAppear = !0), e.root === e))
                    return;
                  let { visualElement: n } = e.options;
                  if (!n) return;
                  let i = n.props[w];
                  if (window.MotionHasOptimisedAnimation(i, "transform")) {
                    let { layout: t, layoutId: n } = e.options;
                    window.MotionCancelOptimisedAnimation(
                      i,
                      "transform",
                      h.Gt,
                      !(t || n)
                    );
                  }
                  let { parent: r } = e;
                  r && !r.hasCheckedOptimisedAppear && t(r);
                })(this),
              this.root.isUpdating || this.root.startUpdate(),
              this.isLayoutDirty)
            )
              return;
            this.isLayoutDirty = !0;
            for (let t = 0; t < this.path.length; t++) {
              let e = this.path[t];
              (e.shouldResetTransform = !0),
                e.updateScroll("snapshot"),
                e.options.layoutRoot && e.willUpdate(!1);
            }
            let { layoutId: e, layout: n } = this.options;
            if (void 0 === e && !n) return;
            let i = this.getTransformTemplate();
            (this.prevTransformTemplateValue = i
              ? i(this.latestValues, "")
              : void 0),
              this.updateSnapshot(),
              t && this.notifyListeners("willUpdate");
          }
          update() {
            if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
              this.unblockUpdate(),
                this.clearAllSnapshots(),
                this.nodes.forEach(n5);
              return;
            }
            this.isUpdating || this.nodes.forEach(n4),
              (this.isUpdating = !1),
              this.nodes.forEach(n3),
              this.nodes.forEach(nZ),
              this.nodes.forEach(nJ),
              this.clearAllSnapshots();
            let t = E.k.now();
            (h.uv.delta = (0, P.q)(0, 1e3 / 60, t - h.uv.timestamp)),
              (h.uv.timestamp = t),
              (h.uv.isProcessing = !0),
              h.PP.update.process(h.uv),
              h.PP.preRender.process(h.uv),
              h.PP.render.process(h.uv),
              (h.uv.isProcessing = !1);
          }
          didUpdate() {
            this.updateScheduled ||
              ((this.updateScheduled = !0), nr.read(this.scheduleUpdate));
          }
          clearAllSnapshots() {
            this.nodes.forEach(n2), this.sharedNodes.forEach(it);
          }
          scheduleUpdateProjection() {
            this.projectionUpdateScheduled ||
              ((this.projectionUpdateScheduled = !0),
              h.Gt.preRender(this.updateProjection, !1, !0));
          }
          scheduleCheckAfterUnmount() {
            h.Gt.postRender(() => {
              this.isLayoutDirty
                ? this.root.didUpdate()
                : this.root.checkUpdateFailed();
            });
          }
          updateSnapshot() {
            !this.snapshot &&
              this.instance &&
              ((this.snapshot = this.measure()),
              !this.snapshot ||
                eA(this.snapshot.measuredBox.x) ||
                eA(this.snapshot.measuredBox.y) ||
                (this.snapshot = void 0));
          }
          updateLayout() {
            if (
              !this.instance ||
              (this.updateScroll(),
              !(this.options.alwaysMeasureLayout && this.isLead()) &&
                !this.isLayoutDirty)
            )
              return;
            if (this.resumeFrom && !this.resumeFrom.instance)
              for (let t = 0; t < this.path.length; t++)
                this.path[t].updateScroll();
            let t = this.layout;
            (this.layout = this.measure(!1)),
              (this.layoutCorrected = ej()),
              (this.isLayoutDirty = !1),
              (this.projectionDelta = void 0),
              this.notifyListeners("measure", this.layout.layoutBox);
            let { visualElement: e } = this.options;
            e &&
              e.notify(
                "LayoutMeasure",
                this.layout.layoutBox,
                t ? t.layoutBox : void 0
              );
          }
          updateScroll(t = "measure") {
            let e = !!(this.options.layoutScroll && this.instance);
            if (
              (this.scroll &&
                this.scroll.animationId === this.root.animationId &&
                this.scroll.phase === t &&
                (e = !1),
              e)
            ) {
              let e = i(this.instance);
              this.scroll = {
                animationId: this.root.animationId,
                phase: t,
                isRoot: e,
                offset: n(this.instance),
                wasRoot: this.scroll ? this.scroll.isRoot : e,
              };
            }
          }
          resetTransform() {
            if (!r) return;
            let t =
                this.isLayoutDirty ||
                this.shouldResetTransform ||
                this.options.alwaysMeasureLayout,
              e = this.projectionDelta && !nI(this.projectionDelta),
              n = this.getTransformTemplate(),
              i = n ? n(this.latestValues, "") : void 0,
              s = i !== this.prevTransformTemplateValue;
            t &&
              (e || eI(this.latestValues) || s) &&
              (r(this.instance, i),
              (this.shouldResetTransform = !1),
              this.scheduleRender());
          }
          measure(t = !0) {
            var e;
            let n = this.measurePageBox(),
              i = this.removeElementScroll(n);
            return (
              t && (i = this.removeTransform(i)),
              il((e = i).x),
              il(e.y),
              {
                animationId: this.root.animationId,
                measuredBox: n,
                layoutBox: i,
                latestValues: {},
                source: this.id,
              }
            );
          }
          measurePageBox() {
            let { visualElement: t } = this.options;
            if (!t) return ej();
            let e = t.measureViewportBox();
            if (!(this.scroll?.wasRoot || this.path.some(ih))) {
              let { scroll: t } = this.root;
              t && (eH(e.x, t.offset.x), eH(e.y, t.offset.y));
            }
            return e;
          }
          removeElementScroll(t) {
            let e = ej();
            if ((nD(e, t), this.scroll?.wasRoot)) return e;
            for (let n = 0; n < this.path.length; n++) {
              let i = this.path[n],
                { scroll: r, options: s } = i;
              i !== this.root &&
                r &&
                s.layoutScroll &&
                (r.wasRoot && nD(e, t),
                eH(e.x, r.offset.x),
                eH(e.y, r.offset.y));
            }
            return e;
          }
          applyTransform(t, e = !1) {
            let n = ej();
            nD(n, t);
            for (let t = 0; t < this.path.length; t++) {
              let i = this.path[t];
              !e &&
                i.options.layoutScroll &&
                i.scroll &&
                i !== i.root &&
                ez(n, { x: -i.scroll.offset.x, y: -i.scroll.offset.y }),
                eI(i.latestValues) && ez(n, i.latestValues);
            }
            return eI(this.latestValues) && ez(n, this.latestValues), n;
          }
          removeTransform(t) {
            let e = ej();
            nD(e, t);
            for (let t = 0; t < this.path.length; t++) {
              let n = this.path[t];
              if (!n.instance || !eI(n.latestValues)) continue;
              eN(n.latestValues) && n.updateSnapshot();
              let i = ej();
              nD(i, n.measurePageBox()),
                nB(
                  e,
                  n.latestValues,
                  n.snapshot ? n.snapshot.layoutBox : void 0,
                  i
                );
            }
            return eI(this.latestValues) && nB(e, this.latestValues), e;
          }
          setTargetDelta(t) {
            (this.targetDelta = t),
              this.root.scheduleUpdateProjection(),
              (this.isProjectionDirty = !0);
          }
          setOptions(t) {
            this.options = {
              ...this.options,
              ...t,
              crossfade: void 0 === t.crossfade || t.crossfade,
            };
          }
          clearMeasurements() {
            (this.scroll = void 0),
              (this.layout = void 0),
              (this.snapshot = void 0),
              (this.prevTransformTemplateValue = void 0),
              (this.targetDelta = void 0),
              (this.target = void 0),
              (this.isLayoutDirty = !1);
          }
          forceRelativeParentToResolveTarget() {
            this.relativeParent &&
              this.relativeParent.resolvedRelativeTargetAt !== h.uv.timestamp &&
              this.relativeParent.resolveTargetDelta(!0);
          }
          resolveTargetDelta(t = !1) {
            let e = this.getLead();
            this.isProjectionDirty ||
              (this.isProjectionDirty = e.isProjectionDirty),
              this.isTransformDirty ||
                (this.isTransformDirty = e.isTransformDirty),
              this.isSharedProjectionDirty ||
                (this.isSharedProjectionDirty = e.isSharedProjectionDirty);
            let n = !!this.resumingFrom || this !== e;
            if (
              !(
                t ||
                (n && this.isSharedProjectionDirty) ||
                this.isProjectionDirty ||
                this.parent?.isProjectionDirty ||
                this.attemptToResolveRelativeTarget ||
                this.root.updateBlockedByResize
              )
            )
              return;
            let { layout: i, layoutId: r } = this.options;
            if (this.layout && (i || r)) {
              if (
                ((this.resolvedRelativeTargetAt = h.uv.timestamp),
                !this.targetDelta && !this.relativeTarget)
              ) {
                let t = this.getClosestProjectingParent();
                t && t.layout && 1 !== this.animationProgress
                  ? ((this.relativeParent = t),
                    this.forceRelativeParentToResolveTarget(),
                    (this.relativeTarget = ej()),
                    (this.relativeTargetOrigin = ej()),
                    eD(
                      this.relativeTargetOrigin,
                      this.layout.layoutBox,
                      t.layout.layoutBox
                    ),
                    nD(this.relativeTarget, this.relativeTargetOrigin))
                  : (this.relativeParent = this.relativeTarget = void 0);
              }
              if (this.relativeTarget || this.targetDelta) {
                if (
                  (this.target ||
                    ((this.target = ej()), (this.targetWithTransforms = ej())),
                  this.relativeTarget &&
                    this.relativeTargetOrigin &&
                    this.relativeParent &&
                    this.relativeParent.target)
                ) {
                  var s, o, a;
                  this.forceRelativeParentToResolveTarget(),
                    (s = this.target),
                    (o = this.relativeTarget),
                    (a = this.relativeParent.target),
                    eC(s.x, o.x, a.x),
                    eC(s.y, o.y, a.y);
                } else
                  this.targetDelta
                    ? (this.resumingFrom
                        ? (this.target = this.applyTransform(
                            this.layout.layoutBox
                          ))
                        : nD(this.target, this.layout.layoutBox),
                      eG(this.target, this.targetDelta))
                    : nD(this.target, this.layout.layoutBox);
                if (this.attemptToResolveRelativeTarget) {
                  this.attemptToResolveRelativeTarget = !1;
                  let t = this.getClosestProjectingParent();
                  t &&
                  !!t.resumingFrom == !!this.resumingFrom &&
                  !t.options.layoutScroll &&
                  t.target &&
                  1 !== this.animationProgress
                    ? ((this.relativeParent = t),
                      this.forceRelativeParentToResolveTarget(),
                      (this.relativeTarget = ej()),
                      (this.relativeTargetOrigin = ej()),
                      eD(this.relativeTargetOrigin, this.target, t.target),
                      nD(this.relativeTarget, this.relativeTargetOrigin))
                    : (this.relativeParent = this.relativeTarget = void 0);
                }
                tG.Q.value && nz.calculatedTargetDeltas++;
              }
            }
          }
          getClosestProjectingParent() {
            if (
              !(
                !this.parent ||
                eN(this.parent.latestValues) ||
                eW(this.parent.latestValues)
              )
            )
              if (this.parent.isProjecting()) return this.parent;
              else return this.parent.getClosestProjectingParent();
          }
          isProjecting() {
            return !!(
              (this.relativeTarget ||
                this.targetDelta ||
                this.options.layoutRoot) &&
              this.layout
            );
          }
          calcProjection() {
            let t = this.getLead(),
              e = !!this.resumingFrom || this !== t,
              n = !0;
            if (
              ((this.isProjectionDirty || this.parent?.isProjectionDirty) &&
                (n = !1),
              e &&
                (this.isSharedProjectionDirty || this.isTransformDirty) &&
                (n = !1),
              this.resolvedRelativeTargetAt === h.uv.timestamp && (n = !1),
              n)
            )
              return;
            let { layout: i, layoutId: r } = this.options;
            if (
              ((this.isTreeAnimating = !!(
                (this.parent && this.parent.isTreeAnimating) ||
                this.currentAnimation ||
                this.pendingAnimation
              )),
              this.isTreeAnimating ||
                (this.targetDelta = this.relativeTarget = void 0),
              !this.layout || !(i || r))
            )
              return;
            nD(this.layoutCorrected, this.layout.layoutBox);
            let s = this.treeScale.x,
              o = this.treeScale.y;
            !(function (t, e, n, i = !1) {
              let r,
                s,
                o = n.length;
              if (o) {
                e.x = e.y = 1;
                for (let a = 0; a < o; a++) {
                  s = (r = n[a]).projectionDelta;
                  let { visualElement: o } = r.options;
                  (!o ||
                    !o.props.style ||
                    "contents" !== o.props.style.display) &&
                    (i &&
                      r.options.layoutScroll &&
                      r.scroll &&
                      r !== r.root &&
                      ez(t, { x: -r.scroll.offset.x, y: -r.scroll.offset.y }),
                    s && ((e.x *= s.x.scale), (e.y *= s.y.scale), eG(t, s)),
                    i && eI(r.latestValues) && ez(t, r.latestValues));
                }
                e.x < 1.0000000000001 && e.x > 0.999999999999 && (e.x = 1),
                  e.y < 1.0000000000001 && e.y > 0.999999999999 && (e.y = 1);
              }
            })(this.layoutCorrected, this.treeScale, this.path, e),
              t.layout &&
                !t.target &&
                (1 !== this.treeScale.x || 1 !== this.treeScale.y) &&
                ((t.target = t.layout.layoutBox),
                (t.targetWithTransforms = ej()));
            let { target: a } = t;
            if (!a) {
              this.prevProjectionDelta &&
                (this.createProjectionDeltas(), this.scheduleRender());
              return;
            }
            this.projectionDelta && this.prevProjectionDelta
              ? (nR(this.prevProjectionDelta.x, this.projectionDelta.x),
                nR(this.prevProjectionDelta.y, this.projectionDelta.y))
              : this.createProjectionDeltas(),
              eM(
                this.projectionDelta,
                this.layoutCorrected,
                a,
                this.latestValues
              ),
              (this.treeScale.x === s &&
                this.treeScale.y === o &&
                nH(this.projectionDelta.x, this.prevProjectionDelta.x) &&
                nH(this.projectionDelta.y, this.prevProjectionDelta.y)) ||
                ((this.hasProjected = !0),
                this.scheduleRender(),
                this.notifyListeners("projectionUpdate", a)),
              tG.Q.value && nz.calculatedProjections++;
          }
          hide() {
            this.isVisible = !1;
          }
          show() {
            this.isVisible = !0;
          }
          scheduleRender(t = !0) {
            if ((this.options.visualElement?.scheduleRender(), t)) {
              let t = this.getStack();
              t && t.scheduleRender();
            }
            this.resumingFrom &&
              !this.resumingFrom.instance &&
              (this.resumingFrom = void 0);
          }
          createProjectionDeltas() {
            (this.prevProjectionDelta = eF()),
              (this.projectionDelta = eF()),
              (this.projectionDeltaWithTransform = eF());
          }
          setAnimationOrigin(t, e = !1) {
            let n,
              i = this.snapshot,
              r = i ? i.latestValues : {},
              s = { ...this.latestValues },
              o = eF();
            (this.relativeParent && this.relativeParent.options.layoutRoot) ||
              (this.relativeTarget = this.relativeTargetOrigin = void 0),
              (this.attemptToResolveRelativeTarget = !e);
            let a = ej(),
              l =
                (i ? i.source : void 0) !==
                (this.layout ? this.layout.source : void 0),
              u = this.getStack(),
              h = !u || u.members.length <= 1,
              c = !!(
                l &&
                !h &&
                !0 === this.options.crossfade &&
                !this.path.some(ir)
              );
            (this.animationProgress = 0),
              (this.mixTargetDelta = (e) => {
                let i = e / 1e3;
                if (
                  (ie(o.x, t.x, i),
                  ie(o.y, t.y, i),
                  this.setTargetDelta(o),
                  this.relativeTarget &&
                    this.relativeTargetOrigin &&
                    this.layout &&
                    this.relativeParent &&
                    this.relativeParent.layout)
                ) {
                  var u, d, p, f, m, v;
                  eD(
                    a,
                    this.layout.layoutBox,
                    this.relativeParent.layout.layoutBox
                  ),
                    (p = this.relativeTarget),
                    (f = this.relativeTargetOrigin),
                    (m = a),
                    (v = i),
                    ii(p.x, f.x, m.x, v),
                    ii(p.y, f.y, m.y, v),
                    n &&
                      ((u = this.relativeTarget),
                      (d = n),
                      nW(u.x, d.x) && nW(u.y, d.y)) &&
                      (this.isProjectionDirty = !1),
                    n || (n = ej()),
                    nD(n, this.relativeTarget);
                }
                l &&
                  ((this.animationValues = s),
                  (function (t, e, n, i, r, s) {
                    r
                      ? ((t.opacity = (0, ex.k)(0, n.opacity ?? 1, nk(i))),
                        (t.opacityExit = (0, ex.k)(e.opacity ?? 1, 0, nM(i))))
                      : s &&
                        (t.opacity = (0, ex.k)(
                          e.opacity ?? 1,
                          n.opacity ?? 1,
                          i
                        ));
                    for (let r = 0; r < nT; r++) {
                      let s = `border${nE[r]}Radius`,
                        o = nA(e, s),
                        a = nA(n, s);
                      (void 0 !== o || void 0 !== a) &&
                        (o || (o = 0),
                        a || (a = 0),
                        0 === o || 0 === a || nS(o) === nS(a)
                          ? ((t[s] = Math.max((0, ex.k)(nP(o), nP(a), i), 0)),
                            (tC.KN.test(a) || tC.KN.test(o)) && (t[s] += "%"))
                          : (t[s] = a));
                    }
                    (e.rotate || n.rotate) &&
                      (t.rotate = (0, ex.k)(e.rotate || 0, n.rotate || 0, i));
                  })(s, r, this.latestValues, i, c, h)),
                  this.root.scheduleUpdateProjection(),
                  this.scheduleRender(),
                  (this.animationProgress = i);
              }),
              this.mixTargetDelta(1e3 * !!this.options.layoutRoot);
          }
          startAnimation(t) {
            this.notifyListeners("animationStart"),
              this.currentAnimation && this.currentAnimation.stop(),
              this.resumingFrom &&
                this.resumingFrom.currentAnimation &&
                this.resumingFrom.currentAnimation.stop(),
              this.pendingAnimation &&
                ((0, h.WG)(this.pendingAnimation),
                (this.pendingAnimation = void 0)),
              (this.pendingAnimation = h.Gt.update(() => {
                (nu.hasAnimatedSinceResize = !0),
                  k.layout++,
                  (this.currentAnimation = (function (t, e, n) {
                    let i = g(0) ? 0 : (0, f.OQ)(t);
                    return i.start(ee("", i, 1e3, n)), i.animation;
                  })(0, 0, {
                    ...t,
                    onUpdate: (e) => {
                      this.mixTargetDelta(e), t.onUpdate && t.onUpdate(e);
                    },
                    onStop: () => {
                      k.layout--;
                    },
                    onComplete: () => {
                      k.layout--,
                        t.onComplete && t.onComplete(),
                        this.completeAnimation();
                    },
                  })),
                  this.resumingFrom &&
                    (this.resumingFrom.currentAnimation =
                      this.currentAnimation),
                  (this.pendingAnimation = void 0);
              }));
          }
          completeAnimation() {
            this.resumingFrom &&
              ((this.resumingFrom.currentAnimation = void 0),
              (this.resumingFrom.preserveOpacity = void 0));
            let t = this.getStack();
            t && t.exitAnimationComplete(),
              (this.resumingFrom =
                this.currentAnimation =
                this.animationValues =
                  void 0),
              this.notifyListeners("animationComplete");
          }
          finishAnimation() {
            this.currentAnimation &&
              (this.mixTargetDelta && this.mixTargetDelta(1e3),
              this.currentAnimation.stop()),
              this.completeAnimation();
          }
          applyTransformsToTarget() {
            let t = this.getLead(),
              {
                targetWithTransforms: e,
                target: n,
                layout: i,
                latestValues: r,
              } = t;
            if (e && n && i) {
              if (
                this !== t &&
                this.layout &&
                i &&
                iu(
                  this.options.animationType,
                  this.layout.layoutBox,
                  i.layoutBox
                )
              ) {
                n = this.target || ej();
                let e = eA(this.layout.layoutBox.x);
                (n.x.min = t.target.x.min), (n.x.max = n.x.min + e);
                let i = eA(this.layout.layoutBox.y);
                (n.y.min = t.target.y.min), (n.y.max = n.y.min + i);
              }
              nD(e, n),
                ez(e, r),
                eM(
                  this.projectionDeltaWithTransform,
                  this.layoutCorrected,
                  e,
                  r
                );
            }
          }
          registerSharedNode(t, e) {
            this.sharedNodes.has(t) || this.sharedNodes.set(t, new nq()),
              this.sharedNodes.get(t).add(e);
            let n = e.options.initialPromotionConfig;
            e.promote({
              transition: n ? n.transition : void 0,
              preserveFollowOpacity:
                n && n.shouldPreserveFollowOpacity
                  ? n.shouldPreserveFollowOpacity(e)
                  : void 0,
            });
          }
          isLead() {
            let t = this.getStack();
            return !t || t.lead === this;
          }
          getLead() {
            let { layoutId: t } = this.options;
            return (t && this.getStack()?.lead) || this;
          }
          getPrevLead() {
            let { layoutId: t } = this.options;
            return t ? this.getStack()?.prevLead : void 0;
          }
          getStack() {
            let { layoutId: t } = this.options;
            if (t) return this.root.sharedNodes.get(t);
          }
          promote({
            needsReset: t,
            transition: e,
            preserveFollowOpacity: n,
          } = {}) {
            let i = this.getStack();
            i && i.promote(this, n),
              t && ((this.projectionDelta = void 0), (this.needsReset = !0)),
              e && this.setOptions({ transition: e });
          }
          relegate() {
            let t = this.getStack();
            return !!t && t.relegate(this);
          }
          resetSkewAndRotation() {
            let { visualElement: t } = this.options;
            if (!t) return;
            let e = !1,
              { latestValues: n } = t;
            if (
              ((n.z ||
                n.rotate ||
                n.rotateX ||
                n.rotateY ||
                n.rotateZ ||
                n.skewX ||
                n.skewY) &&
                (e = !0),
              !e)
            )
              return;
            let i = {};
            n.z && n_("z", t, i, this.animationValues);
            for (let e = 0; e < nY.length; e++)
              n_(`rotate${nY[e]}`, t, i, this.animationValues),
                n_(`skew${nY[e]}`, t, i, this.animationValues);
            for (let e in (t.render(), i))
              t.setStaticValue(e, i[e]),
                this.animationValues && (this.animationValues[e] = i[e]);
            t.scheduleRender();
          }
          getProjectionStyles(t) {
            if (!this.instance || this.isSVG) return;
            if (!this.isVisible) return nX;
            let e = { visibility: "" },
              n = this.getTransformTemplate();
            if (this.needsReset)
              return (
                (this.needsReset = !1),
                (e.opacity = ""),
                (e.pointerEvents = nb(t?.pointerEvents) || ""),
                (e.transform = n ? n(this.latestValues, "") : "none"),
                e
              );
            let i = this.getLead();
            if (!this.projectionDelta || !this.layout || !i.target) {
              let e = {};
              return (
                this.options.layoutId &&
                  ((e.opacity =
                    void 0 !== this.latestValues.opacity
                      ? this.latestValues.opacity
                      : 1),
                  (e.pointerEvents = nb(t?.pointerEvents) || "")),
                this.hasProjected &&
                  !eI(this.latestValues) &&
                  ((e.transform = n ? n({}, "") : "none"),
                  (this.hasProjected = !1)),
                e
              );
            }
            let r = i.animationValues || i.latestValues;
            this.applyTransformsToTarget(),
              (e.transform = (function (t, e, n) {
                let i = "",
                  r = t.x.translate / e.x,
                  s = t.y.translate / e.y,
                  o = n?.z || 0;
                if (
                  ((r || s || o) &&
                    (i = `translate3d(${r}px, ${s}px, ${o}px) `),
                  (1 !== e.x || 1 !== e.y) &&
                    (i += `scale(${1 / e.x}, ${1 / e.y}) `),
                  n)
                ) {
                  let {
                    transformPerspective: t,
                    rotate: e,
                    rotateX: r,
                    rotateY: s,
                    skewX: o,
                    skewY: a,
                  } = n;
                  t && (i = `perspective(${t}px) ${i}`),
                    e && (i += `rotate(${e}deg) `),
                    r && (i += `rotateX(${r}deg) `),
                    s && (i += `rotateY(${s}deg) `),
                    o && (i += `skewX(${o}deg) `),
                    a && (i += `skewY(${a}deg) `);
                }
                let a = t.x.scale * e.x,
                  l = t.y.scale * e.y;
                return (
                  (1 !== a || 1 !== l) && (i += `scale(${a}, ${l})`),
                  i || "none"
                );
              })(this.projectionDeltaWithTransform, this.treeScale, r)),
              n && (e.transform = n(r, e.transform));
            let { x: s, y: o } = this.projectionDelta;
            for (let t in ((e.transformOrigin = `${100 * s.origin}% ${
              100 * o.origin
            }% 0`),
            i.animationValues
              ? (e.opacity =
                  i === this
                    ? r.opacity ?? this.latestValues.opacity ?? 1
                    : this.preserveOpacity
                    ? this.latestValues.opacity
                    : r.opacityExit)
              : (e.opacity =
                  i === this
                    ? void 0 !== r.opacity
                      ? r.opacity
                      : ""
                    : void 0 !== r.opacityExit
                    ? r.opacityExit
                    : 0),
            np)) {
              if (void 0 === r[t]) continue;
              let { correct: n, applyTo: s, isCSSVariable: o } = np[t],
                a = "none" === e.transform ? r[t] : n(r[t], i);
              if (s) {
                let t = s.length;
                for (let n = 0; n < t; n++) e[s[n]] = a;
              } else
                o
                  ? (this.options.visualElement.renderState.vars[t] = a)
                  : (e[t] = a);
            }
            return (
              this.options.layoutId &&
                (e.pointerEvents =
                  i === this ? nb(t?.pointerEvents) || "" : "none"),
              e
            );
          }
          clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0;
          }
          resetTree() {
            this.root.nodes.forEach((t) => t.currentAnimation?.stop()),
              this.root.nodes.forEach(n5),
              this.root.sharedNodes.clear();
          }
        };
      }
      function nZ(t) {
        t.updateLayout();
      }
      function nJ(t) {
        let e = t.resumeFrom?.snapshot || t.snapshot;
        if (t.isLead() && t.layout && e && t.hasListeners("didUpdate")) {
          let { layoutBox: n, measuredBox: i } = t.layout,
            { animationType: r } = t.options,
            s = e.source !== t.layout.source;
          "size" === r
            ? eO((t) => {
                let i = s ? e.measuredBox[t] : e.layoutBox[t],
                  r = eA(i);
                (i.min = n[t].min), (i.max = i.min + r);
              })
            : iu(r, e.layoutBox, n) &&
              eO((i) => {
                let r = s ? e.measuredBox[i] : e.layoutBox[i],
                  o = eA(n[i]);
                (r.max = r.min + o),
                  t.relativeTarget &&
                    !t.currentAnimation &&
                    ((t.isProjectionDirty = !0),
                    (t.relativeTarget[i].max = t.relativeTarget[i].min + o));
              });
          let o = eF();
          eM(o, n, e.layoutBox);
          let a = eF();
          s
            ? eM(a, t.applyTransform(i, !0), e.measuredBox)
            : eM(a, n, e.layoutBox);
          let l = !nI(o),
            u = !1;
          if (!t.resumeFrom) {
            let i = t.getClosestProjectingParent();
            if (i && !i.resumeFrom) {
              let { snapshot: r, layout: s } = i;
              if (r && s) {
                let o = ej();
                eD(o, e.layoutBox, r.layoutBox);
                let a = ej();
                eD(a, n, s.layoutBox),
                  n$(o, a) || (u = !0),
                  i.options.layoutRoot &&
                    ((t.relativeTarget = a),
                    (t.relativeTargetOrigin = o),
                    (t.relativeParent = i));
              }
            }
          }
          t.notifyListeners("didUpdate", {
            layout: n,
            snapshot: e,
            delta: a,
            layoutDelta: o,
            hasLayoutChanged: l,
            hasRelativeLayoutChanged: u,
          });
        } else if (t.isLead()) {
          let { onExitComplete: e } = t.options;
          e && e();
        }
        t.options.transition = void 0;
      }
      function n0(t) {
        tG.Q.value && nz.nodes++,
          t.parent &&
            (t.isProjecting() ||
              (t.isProjectionDirty = t.parent.isProjectionDirty),
            t.isSharedProjectionDirty ||
              (t.isSharedProjectionDirty = !!(
                t.isProjectionDirty ||
                t.parent.isProjectionDirty ||
                t.parent.isSharedProjectionDirty
              )),
            t.isTransformDirty ||
              (t.isTransformDirty = t.parent.isTransformDirty));
      }
      function n1(t) {
        t.isProjectionDirty =
          t.isSharedProjectionDirty =
          t.isTransformDirty =
            !1;
      }
      function n2(t) {
        t.clearSnapshot();
      }
      function n5(t) {
        t.clearMeasurements();
      }
      function n4(t) {
        t.isLayoutDirty = !1;
      }
      function n3(t) {
        let { visualElement: e } = t.options;
        e &&
          e.getProps().onBeforeLayoutMeasure &&
          e.notify("BeforeLayoutMeasure"),
          t.resetTransform();
      }
      function n8(t) {
        t.finishAnimation(),
          (t.targetDelta = t.relativeTarget = t.target = void 0),
          (t.isProjectionDirty = !0);
      }
      function n9(t) {
        t.resolveTargetDelta();
      }
      function n6(t) {
        t.calcProjection();
      }
      function n7(t) {
        t.resetSkewAndRotation();
      }
      function it(t) {
        t.removeLeadSnapshot();
      }
      function ie(t, e, n) {
        (t.translate = (0, ex.k)(e.translate, 0, n)),
          (t.scale = (0, ex.k)(e.scale, 1, n)),
          (t.origin = e.origin),
          (t.originPoint = e.originPoint);
      }
      function ii(t, e, n, i) {
        (t.min = (0, ex.k)(e.min, n.min, i)),
          (t.max = (0, ex.k)(e.max, n.max, i));
      }
      function ir(t) {
        return t.animationValues && void 0 !== t.animationValues.opacityExit;
      }
      let is = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
        io = (t) =>
          "undefined" != typeof navigator &&
          navigator.userAgent &&
          navigator.userAgent.toLowerCase().includes(t),
        ia = io("applewebkit/") && !io("chrome/") ? Math.round : b.l;
      function il(t) {
        (t.min = ia(t.min)), (t.max = ia(t.max));
      }
      function iu(t, e, n) {
        return (
          "position" === t ||
          ("preserve-aspect" === t && !(0.2 >= Math.abs(nG(e) - nG(n))))
        );
      }
      function ih(t) {
        return t !== t.root && t.scroll?.wasRoot;
      }
      let ic = nQ({
          attachResizeListener: (t, e) => ew(t, "resize", e),
          measureScroll: () => ({
            x: document.documentElement.scrollLeft || document.body.scrollLeft,
            y: document.documentElement.scrollTop || document.body.scrollTop,
          }),
          checkIsScrollRoot: () => !0,
        }),
        id = { current: void 0 },
        ip = nQ({
          measureScroll: (t) => ({ x: t.scrollLeft, y: t.scrollTop }),
          defaultParent: () => {
            if (!id.current) {
              let t = new ic({});
              t.mount(window),
                t.setOptions({ layoutScroll: !0 }),
                (id.current = t);
            }
            return id.current;
          },
          resetTransform: (t, e) => {
            t.style.transform = void 0 !== e ? e : "none";
          },
          checkIsScrollRoot: (t) =>
            "fixed" === window.getComputedStyle(t).position,
        });
      var im = n(15673);
      function iv(t, e) {
        let n = (0, im.K)(t),
          i = new AbortController();
        return [n, { passive: !0, ...e, signal: i.signal }, () => i.abort()];
      }
      function ig(t) {
        return !("touch" === t.pointerType || ey.x || ey.y);
      }
      function iy(t, e, n) {
        let { props: i } = t;
        t.animationState &&
          i.whileHover &&
          t.animationState.setActive("whileHover", "Start" === n);
        let r = i["onHover" + n];
        r && h.Gt.postRender(() => r(e, eE(e)));
      }
      class ix extends ef {
        mount() {
          let { current: t } = this.node;
          t &&
            (this.unmount = (function (t, e, n = {}) {
              let [i, r, s] = iv(t, n),
                o = (t) => {
                  if (!ig(t)) return;
                  let { target: n } = t,
                    i = e(n, t);
                  if ("function" != typeof i || !n) return;
                  let s = (t) => {
                    ig(t) && (i(t), n.removeEventListener("pointerleave", s));
                  };
                  n.addEventListener("pointerleave", s, r);
                };
              return (
                i.forEach((t) => {
                  t.addEventListener("pointerenter", o, r);
                }),
                s
              );
            })(
              t,
              (t, e) => (
                iy(this.node, e, "Start"), (t) => iy(this.node, t, "End")
              )
            ));
        }
        unmount() {}
      }
      class iw extends ef {
        constructor() {
          super(...arguments), (this.isActive = !1);
        }
        onFocus() {
          let t = !1;
          try {
            t = this.node.current.matches(":focus-visible");
          } catch (e) {
            t = !0;
          }
          t &&
            this.node.animationState &&
            (this.node.animationState.setActive("whileFocus", !0),
            (this.isActive = !0));
        }
        onBlur() {
          this.isActive &&
            this.node.animationState &&
            (this.node.animationState.setActive("whileFocus", !1),
            (this.isActive = !1));
        }
        mount() {
          this.unmount = (0, T.F)(
            ew(this.node.current, "focus", () => this.onFocus()),
            ew(this.node.current, "blur", () => this.onBlur())
          );
        }
        unmount() {}
      }
      let ib = (t, e) => !!e && (t === e || ib(t, e.parentElement)),
        iE = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]),
        iT = new WeakSet();
      function iP(t) {
        return (e) => {
          "Enter" === e.key && t(e);
        };
      }
      function iS(t, e) {
        t.dispatchEvent(
          new PointerEvent("pointer" + e, { isPrimary: !0, bubbles: !0 })
        );
      }
      let iA = (t, e) => {
        let n = t.currentTarget;
        if (!n) return;
        let i = iP(() => {
          if (iT.has(n)) return;
          iS(n, "down");
          let t = iP(() => {
            iS(n, "up");
          });
          n.addEventListener("keyup", t, e),
            n.addEventListener("blur", () => iS(n, "cancel"), e);
        });
        n.addEventListener("keydown", i, e),
          n.addEventListener(
            "blur",
            () => n.removeEventListener("keydown", i),
            e
          );
      };
      function ik(t) {
        return eb(t) && !(ey.x || ey.y);
      }
      function iM(t, e, n) {
        let { props: i } = t;
        if (t.current instanceof HTMLButtonElement && t.current.disabled)
          return;
        t.animationState &&
          i.whileTap &&
          t.animationState.setActive("whileTap", "Start" === n);
        let r = i["onTap" + ("End" === n ? "" : n)];
        r && h.Gt.postRender(() => r(e, eE(e)));
      }
      class iC extends ef {
        mount() {
          let { current: t } = this.node;
          t &&
            (this.unmount = (function (t, e, n = {}) {
              let [i, r, s] = iv(t, n),
                o = (t) => {
                  let i = t.currentTarget;
                  if (!ik(t)) return;
                  iT.add(i);
                  let s = e(i, t),
                    o = (t, e) => {
                      window.removeEventListener("pointerup", a),
                        window.removeEventListener("pointercancel", l),
                        iT.has(i) && iT.delete(i),
                        ik(t) && "function" == typeof s && s(t, { success: e });
                    },
                    a = (t) => {
                      o(
                        t,
                        i === window ||
                          i === document ||
                          n.useGlobalTarget ||
                          ib(i, t.target)
                      );
                    },
                    l = (t) => {
                      o(t, !1);
                    };
                  window.addEventListener("pointerup", a, r),
                    window.addEventListener("pointercancel", l, r);
                };
              return (
                i.forEach((t) => {
                  ((n.useGlobalTarget ? window : t).addEventListener(
                    "pointerdown",
                    o,
                    r
                  ),
                  t1(t)) &&
                    (t.addEventListener("focus", (t) => iA(t, r)),
                    iE.has(t.tagName) ||
                      -1 !== t.tabIndex ||
                      t.hasAttribute("tabindex") ||
                      (t.tabIndex = 0));
                }),
                s
              );
            })(
              t,
              (t, e) => (
                iM(this.node, e, "Start"),
                (t, { success: e }) => iM(this.node, t, e ? "End" : "Cancel")
              ),
              { useGlobalTarget: this.node.props.globalTapTarget }
            ));
        }
        unmount() {}
      }
      let iV = new WeakMap(),
        iD = new WeakMap(),
        iR = (t) => {
          let e = iV.get(t.target);
          e && e(t);
        },
        iF = (t) => {
          t.forEach(iR);
        },
        iL = { some: 0, all: 1 };
      class ij extends ef {
        constructor() {
          super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
        }
        startObserver() {
          this.unmount();
          let { viewport: t = {} } = this.node.getProps(),
            { root: e, margin: n, amount: i = "some", once: r } = t,
            s = {
              root: e ? e.current : void 0,
              rootMargin: n,
              threshold: "number" == typeof i ? i : iL[i],
            };
          return (function (t, e, n) {
            let i = (function ({ root: t, ...e }) {
              let n = t || document;
              iD.has(n) || iD.set(n, {});
              let i = iD.get(n),
                r = JSON.stringify(e);
              return (
                i[r] ||
                  (i[r] = new IntersectionObserver(iF, { root: t, ...e })),
                i[r]
              );
            })(e);
            return (
              iV.set(t, n),
              i.observe(t),
              () => {
                iV.delete(t), i.unobserve(t);
              }
            );
          })(this.node.current, s, (t) => {
            let { isIntersecting: e } = t;
            if (
              this.isInView === e ||
              ((this.isInView = e), r && !e && this.hasEnteredView)
            )
              return;
            e && (this.hasEnteredView = !0),
              this.node.animationState &&
                this.node.animationState.setActive("whileInView", e);
            let { onViewportEnter: n, onViewportLeave: i } =
                this.node.getProps(),
              s = e ? n : i;
            s && s(t);
          });
        }
        mount() {
          this.startObserver();
        }
        update() {
          if ("undefined" == typeof IntersectionObserver) return;
          let { props: t, prevProps: e } = this.node;
          ["amount", "margin", "root"].some(
            (function ({ viewport: t = {} }, { viewport: e = {} } = {}) {
              return (n) => t[n] !== e[n];
            })(t, e)
          ) && this.startObserver();
        }
        unmount() {}
      }
      let iO = (0, ns.createContext)({ strict: !1 });
      var iB = n(57277);
      let iN = (0, ns.createContext)({});
      function iI(t) {
        return i(t.animate) || el.some((e) => eo(t[e]));
      }
      function iW(t) {
        return !!(iI(t) || t.variants);
      }
      function iU(t) {
        return Array.isArray(t) ? t.join(" ") : t;
      }
      var i$ = n(49083);
      let iG = {
          animation: [
            "animate",
            "variants",
            "whileHover",
            "whileTap",
            "exit",
            "whileInView",
            "whileFocus",
            "whileDrag",
          ],
          exit: ["exit"],
          drag: ["drag", "dragControls"],
          focus: ["whileFocus"],
          hover: ["whileHover", "onHoverStart", "onHoverEnd"],
          tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
          pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
          inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
          layout: ["layout", "layoutId"],
        },
        iH = {};
      for (let t in iG) iH[t] = { isEnabled: (e) => iG[t].some((t) => !!e[t]) };
      let iq = Symbol.for("motionComponentSymbol");
      var iz = n(26236),
        iY = n(86119);
      function iX(t, { layout: e, layoutId: n }) {
        return (
          d.has(t) ||
          t.startsWith("origin") ||
          ((e || void 0 !== n) && (!!np[t] || "opacity" === t))
        );
      }
      let iK = (t, e) => (e && "number" == typeof t ? e.transform(t) : t),
        i_ = { ...tM.ai, transform: Math.round },
        iQ = {
          rotate: tC.uj,
          rotateX: tC.uj,
          rotateY: tC.uj,
          rotateZ: tC.uj,
          scale: tM.hs,
          scaleX: tM.hs,
          scaleY: tM.hs,
          scaleZ: tM.hs,
          skew: tC.uj,
          skewX: tC.uj,
          skewY: tC.uj,
          distance: tC.px,
          translateX: tC.px,
          translateY: tC.px,
          translateZ: tC.px,
          x: tC.px,
          y: tC.px,
          z: tC.px,
          perspective: tC.px,
          transformPerspective: tC.px,
          opacity: tM.X4,
          originX: tC.gQ,
          originY: tC.gQ,
          originZ: tC.px,
        },
        iZ = {
          borderWidth: tC.px,
          borderTopWidth: tC.px,
          borderRightWidth: tC.px,
          borderBottomWidth: tC.px,
          borderLeftWidth: tC.px,
          borderRadius: tC.px,
          radius: tC.px,
          borderTopLeftRadius: tC.px,
          borderTopRightRadius: tC.px,
          borderBottomRightRadius: tC.px,
          borderBottomLeftRadius: tC.px,
          width: tC.px,
          maxWidth: tC.px,
          height: tC.px,
          maxHeight: tC.px,
          top: tC.px,
          right: tC.px,
          bottom: tC.px,
          left: tC.px,
          padding: tC.px,
          paddingTop: tC.px,
          paddingRight: tC.px,
          paddingBottom: tC.px,
          paddingLeft: tC.px,
          margin: tC.px,
          marginTop: tC.px,
          marginRight: tC.px,
          marginBottom: tC.px,
          marginLeft: tC.px,
          backgroundPositionX: tC.px,
          backgroundPositionY: tC.px,
          ...iQ,
          zIndex: i_,
          fillOpacity: tM.X4,
          strokeOpacity: tM.X4,
          numOctaves: i_,
        },
        iJ = {
          x: "translateX",
          y: "translateY",
          z: "translateZ",
          transformPerspective: "perspective",
        },
        i0 = c.length;
      function i1(t, e, n) {
        let { style: i, vars: r, transformOrigin: s } = t,
          o = !1,
          a = !1;
        for (let t in e) {
          let n = e[t];
          if (d.has(t)) {
            o = !0;
            continue;
          }
          if ((0, nd.j)(t)) {
            r[t] = n;
            continue;
          }
          {
            let e = iK(n, iZ[t]);
            t.startsWith("origin") ? ((a = !0), (s[t] = e)) : (i[t] = e);
          }
        }
        if (
          (!e.transform &&
            (o || n
              ? (i.transform = (function (t, e, n) {
                  let i = "",
                    r = !0;
                  for (let s = 0; s < i0; s++) {
                    let o = c[s],
                      a = t[o];
                    if (void 0 === a) continue;
                    let l = !0;
                    if (
                      !(l =
                        "number" == typeof a
                          ? a === +!!o.startsWith("scale")
                          : 0 === parseFloat(a)) ||
                      n
                    ) {
                      let t = iK(a, iZ[o]);
                      if (!l) {
                        r = !1;
                        let e = iJ[o] || o;
                        i += `${e}(${t}) `;
                      }
                      n && (e[o] = t);
                    }
                  }
                  return (
                    (i = i.trim()),
                    n ? (i = n(e, r ? "" : i)) : r && (i = "none"),
                    i
                  );
                })(e, t.transform, n))
              : i.transform && (i.transform = "none")),
          a)
        ) {
          let { originX: t = "50%", originY: e = "50%", originZ: n = 0 } = s;
          i.transformOrigin = `${t} ${e} ${n}`;
        }
      }
      let i2 = () => ({
        style: {},
        transform: {},
        transformOrigin: {},
        vars: {},
      });
      function i5(t, e, n) {
        for (let i in e) g(e[i]) || iX(i, n) || (t[i] = e[i]);
      }
      let i4 = new Set([
        "animate",
        "exit",
        "variants",
        "initial",
        "style",
        "values",
        "variants",
        "transition",
        "transformTemplate",
        "custom",
        "inherit",
        "onBeforeLayoutMeasure",
        "onAnimationStart",
        "onAnimationComplete",
        "onUpdate",
        "onDragStart",
        "onDrag",
        "onDragEnd",
        "onMeasureDragConstraints",
        "onDirectionLock",
        "onDragTransitionEnd",
        "_dragX",
        "_dragY",
        "onHoverStart",
        "onHoverEnd",
        "onViewportEnter",
        "onViewportLeave",
        "globalTapTarget",
        "ignoreStrict",
        "viewport",
      ]);
      function i3(t) {
        return (
          t.startsWith("while") ||
          (t.startsWith("drag") && "draggable" !== t) ||
          t.startsWith("layout") ||
          t.startsWith("onTap") ||
          t.startsWith("onPan") ||
          t.startsWith("onLayout") ||
          i4.has(t)
        );
      }
      let i8 = (t) => !i3(t);
      try {
        !(function (t) {
          t && (i8 = (e) => (e.startsWith("on") ? !i3(e) : t(e)));
        })(require("@emotion/is-prop-valid").default);
      } catch {}
      let i9 = [
        "animate",
        "circle",
        "defs",
        "desc",
        "ellipse",
        "g",
        "image",
        "line",
        "filter",
        "marker",
        "mask",
        "metadata",
        "path",
        "pattern",
        "polygon",
        "polyline",
        "rect",
        "stop",
        "switch",
        "symbol",
        "svg",
        "text",
        "tspan",
        "use",
        "view",
      ];
      function i6(t) {
        if ("string" != typeof t || t.includes("-"));
        else if (i9.indexOf(t) > -1 || /[A-Z]/u.test(t)) return !0;
        return !1;
      }
      let i7 = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
        rt = { offset: "strokeDashoffset", array: "strokeDasharray" };
      function re(
        t,
        {
          attrX: e,
          attrY: n,
          attrScale: i,
          pathLength: r,
          pathSpacing: s = 1,
          pathOffset: o = 0,
          ...a
        },
        l,
        u
      ) {
        if ((i1(t, a, u), l)) {
          t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
          return;
        }
        (t.attrs = t.style), (t.style = {});
        let { attrs: h, style: c } = t;
        h.transform && ((c.transform = h.transform), delete h.transform),
          (c.transform || h.transformOrigin) &&
            ((c.transformOrigin = h.transformOrigin ?? "50% 50%"),
            delete h.transformOrigin),
          c.transform && ((c.transformBox = "fill-box"), delete h.transformBox),
          void 0 !== e && (h.x = e),
          void 0 !== n && (h.y = n),
          void 0 !== i && (h.scale = i),
          void 0 !== r &&
            (function (t, e, n = 1, i = 0, r = !0) {
              t.pathLength = 1;
              let s = r ? i7 : rt;
              t[s.offset] = tC.px.transform(-i);
              let o = tC.px.transform(e),
                a = tC.px.transform(n);
              t[s.array] = `${o} ${a}`;
            })(h, r, s, o, !1);
      }
      let rn = () => ({ ...i2(), attrs: {} }),
        ri = (t) => "string" == typeof t && "svg" === t.toLowerCase();
      var rr = n(18038);
      let rs = (t) => (e, n) => {
        let r = (0, ns.useContext)(iN),
          o = (0, ns.useContext)(iz.t),
          a = () =>
            (function (
              { scrapeMotionValuesFromProps: t, createRenderState: e },
              n,
              r,
              o
            ) {
              return {
                latestValues: (function (t, e, n, r) {
                  let o = {},
                    a = r(t, {});
                  for (let t in a) o[t] = nb(a[t]);
                  let { initial: l, animate: u } = t,
                    h = iI(t),
                    c = iW(t);
                  e &&
                    c &&
                    !h &&
                    !1 !== t.inherit &&
                    (void 0 === l && (l = e.initial),
                    void 0 === u && (u = e.animate));
                  let d = !!n && !1 === n.initial,
                    p = (d = d || !1 === l) ? u : l;
                  if (p && "boolean" != typeof p && !i(p)) {
                    let e = Array.isArray(p) ? p : [p];
                    for (let n = 0; n < e.length; n++) {
                      let i = s(t, e[n]);
                      if (i) {
                        let { transitionEnd: t, transition: e, ...n } = i;
                        for (let t in n) {
                          let e = n[t];
                          if (Array.isArray(e)) {
                            let t = d ? e.length - 1 : 0;
                            e = e[t];
                          }
                          null !== e && (o[t] = e);
                        }
                        for (let e in t) o[e] = t[e];
                      }
                    }
                  }
                  return o;
                })(n, r, o, t),
                renderState: e(),
              };
            })(t, e, r, o);
        return n ? a() : (0, rr.M)(a);
      };
      function ro(t, e, n) {
        let { style: i } = t,
          r = {};
        for (let s in i)
          (g(i[s]) ||
            (e.style && g(e.style[s])) ||
            iX(s, t) ||
            n?.getValue(s)?.liveStyle !== void 0) &&
            (r[s] = i[s]);
        return r;
      }
      let ra = {
        useVisualState: rs({
          scrapeMotionValuesFromProps: ro,
          createRenderState: i2,
        }),
      };
      function rl(t, e, n) {
        let i = ro(t, e, n);
        for (let n in t)
          (g(t[n]) || g(e[n])) &&
            (i[
              -1 !== c.indexOf(n)
                ? "attr" + n.charAt(0).toUpperCase() + n.substring(1)
                : n
            ] = t[n]);
        return i;
      }
      let ru = {
          useVisualState: rs({
            scrapeMotionValuesFromProps: rl,
            createRenderState: rn,
          }),
        },
        rh = (t) => (e) => e.test(t),
        rc = [
          tM.ai,
          tC.px,
          tC.KN,
          tC.uj,
          tC.vw,
          tC.vh,
          { test: (t) => "auto" === t, parse: (t) => t },
        ],
        rd = (t) => rc.find(rh(t)),
        rp = (t) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t),
        rf = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u,
        rm = (t) => /^0[^.\s]+$/u.test(t);
      var rv = n(52379);
      let rg = new Set(["brightness", "contrast", "saturate", "opacity"]);
      function ry(t) {
        let [e, n] = t.slice(0, -1).split("(");
        if ("drop-shadow" === e) return t;
        let [i] = n.match(rv.S) || [];
        if (!i) return t;
        let r = n.replace(i, ""),
          s = +!!rg.has(e);
        return i !== n && (s *= 100), e + "(" + s + r + ")";
      }
      let rx = /\b([a-z-]*)\(.*?\)/gu,
        rw = {
          ...tJ.f,
          getAnimatableNone: (t) => {
            let e = t.match(rx);
            return e ? e.map(ry).join(" ") : t;
          },
        };
      var rb = n(91493);
      let rE = {
          ...iZ,
          color: rb.y,
          backgroundColor: rb.y,
          outlineColor: rb.y,
          fill: rb.y,
          stroke: rb.y,
          borderColor: rb.y,
          borderTopColor: rb.y,
          borderRightColor: rb.y,
          borderBottomColor: rb.y,
          borderLeftColor: rb.y,
          filter: rw,
          WebkitFilter: rw,
        },
        rT = (t) => rE[t];
      function rP(t, e) {
        let n = rT(t);
        return (
          n !== rw && (n = tJ.f),
          n.getAnimatableNone ? n.getAnimatableNone(e) : void 0
        );
      }
      let rS = new Set(["auto", "none", "0"]);
      class rA extends tW {
        constructor(t, e, n, i, r) {
          super(t, e, n, i, r, !0);
        }
        readKeyframes() {
          let { unresolvedKeyframes: t, element: e, name: n } = this;
          if (!e || !e.current) return;
          super.readKeyframes();
          for (let n = 0; n < t.length; n++) {
            let i = t[n];
            if ("string" == typeof i && ((i = i.trim()), (0, nd.p)(i))) {
              let r = (function t(e, n, i = 1) {
                (0, j.V)(
                  i <= 4,
                  `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`
                );
                let [r, s] = (function (t) {
                  let e = rf.exec(t);
                  if (!e) return [,];
                  let [, n, i, r] = e;
                  return [`--${n ?? i}`, r];
                })(e);
                if (!r) return;
                let o = window.getComputedStyle(n).getPropertyValue(r);
                if (o) {
                  let t = o.trim();
                  return rp(t) ? parseFloat(t) : t;
                }
                return (0, nd.p)(s) ? t(s, n, i + 1) : s;
              })(i, e.current);
              void 0 !== r && (t[n] = r),
                n === t.length - 1 && (this.finalKeyframe = i);
            }
          }
          if ((this.resolveNoneKeyframes(), !p.has(n) || 2 !== t.length))
            return;
          let [i, r] = t,
            s = rd(i),
            o = rd(r);
          if (s !== o)
            if (tV(s) && tV(o))
              for (let e = 0; e < t.length; e++) {
                let n = t[e];
                "string" == typeof n && (t[e] = parseFloat(n));
              }
            else tF[n] && (this.needsMeasurement = !0);
        }
        resolveNoneKeyframes() {
          let { unresolvedKeyframes: t, name: e } = this,
            n = [];
          for (let e = 0; e < t.length; e++) {
            var i;
            (null === t[e] ||
              ("number" == typeof (i = t[e])
                ? 0 === i
                : null === i || "none" === i || "0" === i || rm(i))) &&
              n.push(e);
          }
          n.length &&
            (function (t, e, n) {
              let i,
                r = 0;
              for (; r < t.length && !i; ) {
                let e = t[r];
                "string" == typeof e &&
                  !rS.has(e) &&
                  (0, tJ.V)(e).values.length &&
                  (i = t[r]),
                  r++;
              }
              if (i && n) for (let r of e) t[r] = rP(n, i);
            })(t, n, e);
        }
        measureInitialState() {
          let { element: t, unresolvedKeyframes: e, name: n } = this;
          if (!t || !t.current) return;
          "height" === n && (this.suspendedScrollY = window.pageYOffset),
            (this.measuredOrigin = tF[n](
              t.measureViewportBox(),
              window.getComputedStyle(t.current)
            )),
            (e[0] = this.measuredOrigin);
          let i = e[e.length - 1];
          void 0 !== i && t.getValue(n, i).jump(i, !1);
        }
        measureEndState() {
          let { element: t, name: e, unresolvedKeyframes: n } = this;
          if (!t || !t.current) return;
          let i = t.getValue(e);
          i && i.jump(this.measuredOrigin, !1);
          let r = n.length - 1,
            s = n[r];
          (n[r] = tF[e](
            t.measureViewportBox(),
            window.getComputedStyle(t.current)
          )),
            null !== s &&
              void 0 === this.finalKeyframe &&
              (this.finalKeyframe = s),
            this.removedTransforms?.length &&
              this.removedTransforms.forEach(([e, n]) => {
                t.getValue(e).set(n);
              }),
            this.resolveNoneKeyframes();
        }
      }
      let rk = [...rc, rb.y, tJ.f],
        rM = (t) => rk.find(rh(t)),
        rC = { current: null },
        rV = { current: !1 },
        rD = new WeakMap(),
        rR = [
          "AnimationStart",
          "AnimationComplete",
          "Update",
          "BeforeLayoutMeasure",
          "LayoutMeasure",
          "LayoutAnimationStart",
          "LayoutAnimationComplete",
        ];
      class rF {
        scrapeMotionValuesFromProps(t, e, n) {
          return {};
        }
        constructor(
          {
            parent: t,
            props: e,
            presenceContext: n,
            reducedMotionConfig: i,
            blockInitialAnimation: r,
            visualState: s,
          },
          o = {}
        ) {
          (this.current = null),
            (this.children = new Set()),
            (this.isVariantNode = !1),
            (this.isControllingVariants = !1),
            (this.shouldReduceMotion = null),
            (this.values = new Map()),
            (this.KeyframeResolver = tW),
            (this.features = {}),
            (this.valueSubscriptions = new Map()),
            (this.prevMotionValues = {}),
            (this.events = {}),
            (this.propEventSubscriptions = {}),
            (this.notifyUpdate = () =>
              this.notify("Update", this.latestValues)),
            (this.render = () => {
              this.current &&
                (this.triggerBuild(),
                this.renderInstance(
                  this.current,
                  this.renderState,
                  this.props.style,
                  this.projection
                ));
            }),
            (this.renderScheduledAt = 0),
            (this.scheduleRender = () => {
              let t = E.k.now();
              this.renderScheduledAt < t &&
                ((this.renderScheduledAt = t),
                h.Gt.render(this.render, !1, !0));
            });
          let { latestValues: a, renderState: l } = s;
          (this.latestValues = a),
            (this.baseTarget = { ...a }),
            (this.initialValues = e.initial ? { ...a } : {}),
            (this.renderState = l),
            (this.parent = t),
            (this.props = e),
            (this.presenceContext = n),
            (this.depth = t ? t.depth + 1 : 0),
            (this.reducedMotionConfig = i),
            (this.options = o),
            (this.blockInitialAnimation = !!r),
            (this.isControllingVariants = iI(e)),
            (this.isVariantNode = iW(e)),
            this.isVariantNode && (this.variantChildren = new Set()),
            (this.manuallyAnimateOnMount = !!(t && t.current));
          let { willChange: u, ...c } = this.scrapeMotionValuesFromProps(
            e,
            {},
            this
          );
          for (let t in c) {
            let e = c[t];
            void 0 !== a[t] && g(e) && e.set(a[t], !1);
          }
        }
        mount(t) {
          (this.current = t),
            rD.set(t, this),
            this.projection &&
              !this.projection.instance &&
              this.projection.mount(t),
            this.parent &&
              this.isVariantNode &&
              !this.isControllingVariants &&
              (this.removeFromVariantTree = this.parent.addVariantChild(this)),
            this.values.forEach((t, e) => this.bindToMotionValue(e, t)),
            rV.current ||
              (function () {
                if (((rV.current = !0), i$.B))
                  if (window.matchMedia) {
                    let t = window.matchMedia("(prefers-reduced-motion)"),
                      e = () => (rC.current = t.matches);
                    t.addListener(e), e();
                  } else rC.current = !1;
              })(),
            (this.shouldReduceMotion =
              "never" !== this.reducedMotionConfig &&
              ("always" === this.reducedMotionConfig || rC.current)),
            this.parent && this.parent.children.add(this),
            this.update(this.props, this.presenceContext);
        }
        unmount() {
          for (let t in (this.projection && this.projection.unmount(),
          (this.projection = void 0),
          (0, h.WG)(this.notifyUpdate),
          (0, h.WG)(this.render),
          this.valueSubscriptions.forEach((t) => t()),
          this.valueSubscriptions.clear(),
          this.removeFromVariantTree && this.removeFromVariantTree(),
          this.parent && this.parent.children.delete(this),
          this.events))
            this.events[t].clear();
          for (let t in this.features) {
            let e = this.features[t];
            e && (e.unmount(), (e.isMounted = !1));
          }
          this.current = null;
        }
        bindToMotionValue(t, e) {
          let n;
          this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
          let i = d.has(t);
          i && this.onBindTransform && this.onBindTransform();
          let r = e.on("change", (e) => {
              (this.latestValues[t] = e),
                this.props.onUpdate && h.Gt.preRender(this.notifyUpdate),
                i && this.projection && (this.projection.isTransformDirty = !0);
            }),
            s = e.on("renderRequest", this.scheduleRender);
          window.MotionCheckAppearSync &&
            (n = window.MotionCheckAppearSync(this, t, e)),
            this.valueSubscriptions.set(t, () => {
              r(), s(), n && n(), e.owner && e.stop();
            });
        }
        sortNodePosition(t) {
          return this.current &&
            this.sortInstanceNodePosition &&
            this.type === t.type
            ? this.sortInstanceNodePosition(this.current, t.current)
            : 0;
        }
        updateFeatures() {
          let t = "animation";
          for (t in iH) {
            let e = iH[t];
            if (!e) continue;
            let { isEnabled: n, Feature: i } = e;
            if (
              (!this.features[t] &&
                i &&
                n(this.props) &&
                (this.features[t] = new i(this)),
              this.features[t])
            ) {
              let e = this.features[t];
              e.isMounted ? e.update() : (e.mount(), (e.isMounted = !0));
            }
          }
        }
        triggerBuild() {
          this.build(this.renderState, this.latestValues, this.props);
        }
        measureViewportBox() {
          return this.current
            ? this.measureInstanceViewportBox(this.current, this.props)
            : ej();
        }
        getStaticValue(t) {
          return this.latestValues[t];
        }
        setStaticValue(t, e) {
          this.latestValues[t] = e;
        }
        update(t, e) {
          (t.transformTemplate || this.props.transformTemplate) &&
            this.scheduleRender(),
            (this.prevProps = this.props),
            (this.props = t),
            (this.prevPresenceContext = this.presenceContext),
            (this.presenceContext = e);
          for (let e = 0; e < rR.length; e++) {
            let n = rR[e];
            this.propEventSubscriptions[n] &&
              (this.propEventSubscriptions[n](),
              delete this.propEventSubscriptions[n]);
            let i = t["on" + n];
            i && (this.propEventSubscriptions[n] = this.on(n, i));
          }
          (this.prevMotionValues = (function (t, e, n) {
            for (let i in e) {
              let r = e[i],
                s = n[i];
              if (g(r)) t.addValue(i, r);
              else if (g(s)) t.addValue(i, (0, f.OQ)(r, { owner: t }));
              else if (s !== r)
                if (t.hasValue(i)) {
                  let e = t.getValue(i);
                  !0 === e.liveStyle ? e.jump(r) : e.hasAnimated || e.set(r);
                } else {
                  let e = t.getStaticValue(i);
                  t.addValue(i, (0, f.OQ)(void 0 !== e ? e : r, { owner: t }));
                }
            }
            for (let i in n) void 0 === e[i] && t.removeValue(i);
            return e;
          })(
            this,
            this.scrapeMotionValuesFromProps(t, this.prevProps, this),
            this.prevMotionValues
          )),
            this.handleChildMotionValue && this.handleChildMotionValue();
        }
        getProps() {
          return this.props;
        }
        getVariant(t) {
          return this.props.variants ? this.props.variants[t] : void 0;
        }
        getDefaultTransition() {
          return this.props.transition;
        }
        getTransformPagePoint() {
          return this.props.transformPagePoint;
        }
        getClosestVariantNode() {
          return this.isVariantNode
            ? this
            : this.parent
            ? this.parent.getClosestVariantNode()
            : void 0;
        }
        addVariantChild(t) {
          let e = this.getClosestVariantNode();
          if (e)
            return (
              e.variantChildren && e.variantChildren.add(t),
              () => e.variantChildren.delete(t)
            );
        }
        addValue(t, e) {
          let n = this.values.get(t);
          e !== n &&
            (n && this.removeValue(t),
            this.bindToMotionValue(t, e),
            this.values.set(t, e),
            (this.latestValues[t] = e.get()));
        }
        removeValue(t) {
          this.values.delete(t);
          let e = this.valueSubscriptions.get(t);
          e && (e(), this.valueSubscriptions.delete(t)),
            delete this.latestValues[t],
            this.removeValueFromRenderState(t, this.renderState);
        }
        hasValue(t) {
          return this.values.has(t);
        }
        getValue(t, e) {
          if (this.props.values && this.props.values[t])
            return this.props.values[t];
          let n = this.values.get(t);
          return (
            void 0 === n &&
              void 0 !== e &&
              ((n = (0, f.OQ)(null === e ? void 0 : e, { owner: this })),
              this.addValue(t, n)),
            n
          );
        }
        readValue(t, e) {
          let n =
            void 0 === this.latestValues[t] && this.current
              ? this.getBaseTargetFromProps(this.props, t) ??
                this.readValueFromInstance(this.current, t, this.options)
              : this.latestValues[t];
          return (
            null != n &&
              ("string" == typeof n && (rp(n) || rm(n))
                ? (n = parseFloat(n))
                : !rM(n) && tJ.f.test(e) && (n = rP(t, e)),
              this.setBaseTarget(t, g(n) ? n.get() : n)),
            g(n) ? n.get() : n
          );
        }
        setBaseTarget(t, e) {
          this.baseTarget[t] = e;
        }
        getBaseTarget(t) {
          let e,
            { initial: n } = this.props;
          if ("string" == typeof n || "object" == typeof n) {
            let i = s(this.props, n, this.presenceContext?.custom);
            i && (e = i[t]);
          }
          if (n && void 0 !== e) return e;
          let i = this.getBaseTargetFromProps(this.props, t);
          return void 0 === i || g(i)
            ? void 0 !== this.initialValues[t] && void 0 === e
              ? void 0
              : this.baseTarget[t]
            : i;
        }
        on(t, e) {
          return (
            this.events[t] || (this.events[t] = new ng.v()),
            this.events[t].add(e)
          );
        }
        notify(t, ...e) {
          this.events[t] && this.events[t].notify(...e);
        }
      }
      class rL extends rF {
        constructor() {
          super(...arguments), (this.KeyframeResolver = rA);
        }
        sortInstanceNodePosition(t, e) {
          return 2 & t.compareDocumentPosition(e) ? 1 : -1;
        }
        getBaseTargetFromProps(t, e) {
          return t.style ? t.style[e] : void 0;
        }
        removeValueFromRenderState(t, { vars: e, style: n }) {
          delete e[t], delete n[t];
        }
        handleChildMotionValue() {
          this.childSubscription &&
            (this.childSubscription(), delete this.childSubscription);
          let { children: t } = this.props;
          g(t) &&
            (this.childSubscription = t.on("change", (t) => {
              this.current && (this.current.textContent = `${t}`);
            }));
        }
      }
      function rj(t, { style: e, vars: n }, i, r) {
        for (let s in (Object.assign(t.style, e, r && r.getProjectionStyles(i)),
        n))
          t.style.setProperty(s, n[s]);
      }
      class rO extends rL {
        constructor() {
          super(...arguments), (this.type = "html"), (this.renderInstance = rj);
        }
        readValueFromInstance(t, e) {
          if (d.has(e)) return tA(t, e);
          {
            let n = window.getComputedStyle(t),
              i = ((0, nd.j)(e) ? n.getPropertyValue(e) : n[e]) || 0;
            return "string" == typeof i ? i.trim() : i;
          }
        }
        measureInstanceViewportBox(t, { transformPagePoint: e }) {
          return eY(t, e);
        }
        build(t, e, n) {
          i1(t, e, n.transformTemplate);
        }
        scrapeMotionValuesFromProps(t, e, n) {
          return ro(t, e, n);
        }
      }
      let rB = new Set([
        "baseFrequency",
        "diffuseConstant",
        "kernelMatrix",
        "kernelUnitLength",
        "keySplines",
        "keyTimes",
        "limitingConeAngle",
        "markerHeight",
        "markerWidth",
        "numOctaves",
        "targetX",
        "targetY",
        "surfaceScale",
        "specularConstant",
        "specularExponent",
        "stdDeviation",
        "tableValues",
        "viewBox",
        "gradientTransform",
        "pathLength",
        "startOffset",
        "textLength",
        "lengthAdjust",
      ]);
      class rN extends rL {
        constructor() {
          super(...arguments),
            (this.type = "svg"),
            (this.isSVGTag = !1),
            (this.measureInstanceViewportBox = ej);
        }
        getBaseTargetFromProps(t, e) {
          return t[e];
        }
        readValueFromInstance(t, e) {
          if (d.has(e)) {
            let t = rT(e);
            return (t && t.default) || 0;
          }
          return (e = rB.has(e) ? e : x(e)), t.getAttribute(e);
        }
        scrapeMotionValuesFromProps(t, e, n) {
          return rl(t, e, n);
        }
        build(t, e, n) {
          re(t, e, this.isSVGTag, n.transformTemplate);
        }
        renderInstance(t, e, n, i) {
          for (let n in (rj(t, e, void 0, i), e.attrs))
            t.setAttribute(rB.has(n) ? n : x(n), e.attrs[n]);
        }
        mount(t) {
          (this.isSVGTag = ri(t.tagName)), super.mount(t);
        }
      }
      let rI = (function (t) {
        if ("undefined" == typeof Proxy) return t;
        let e = new Map();
        return new Proxy((...e) => t(...e), {
          get: (n, i) =>
            "create" === i ? t : (e.has(i) || e.set(i, t(i)), e.get(i)),
        });
      })(
        ((l = {
          animation: { Feature: em },
          exit: { Feature: eg },
          inView: { Feature: ij },
          tap: { Feature: iC },
          focus: { Feature: iw },
          hover: { Feature: ix },
          pan: { Feature: nn },
          drag: { Feature: nt, ProjectionNode: ip, MeasureLayout: nm },
          layout: { ProjectionNode: ip, MeasureLayout: nm },
        }),
        (u = (t, e) =>
          i6(t)
            ? new rN(e)
            : new rO(e, { allowProjection: t !== ns.Fragment })),
        function (t, { forwardMotionProps: e } = { forwardMotionProps: !1 }) {
          return (function (t) {
            var e, n;
            let {
              preloadedFeatures: i,
              createVisualElement: r,
              useRender: s,
              useVisualState: o,
              Component: a,
            } = t;
            function l(t, e) {
              var n, i, l;
              let u,
                h = {
                  ...(0, ns.useContext)(iB.Q),
                  ...t,
                  layoutId: (function (t) {
                    let { layoutId: e } = t,
                      n = (0, ns.useContext)(na.L).id;
                    return n && void 0 !== e ? n + "-" + e : e;
                  })(t),
                },
                { isStatic: c } = h,
                d = (function (t) {
                  let { initial: e, animate: n } = (function (t, e) {
                    if (iI(t)) {
                      let { initial: e, animate: n } = t;
                      return {
                        initial: !1 === e || eo(e) ? e : void 0,
                        animate: eo(n) ? n : void 0,
                      };
                    }
                    return !1 !== t.inherit ? e : {};
                  })(t, (0, ns.useContext)(iN));
                  return (0, ns.useMemo)(
                    () => ({ initial: e, animate: n }),
                    [iU(e), iU(n)]
                  );
                })(t),
                p = o(t, c);
              if (!c && i$.B) {
                (i = 0), (l = 0), (0, ns.useContext)(iO).strict;
                let t = (function (t) {
                  let { drag: e, layout: n } = iH;
                  if (!e && !n) return {};
                  let i = { ...e, ...n };
                  return {
                    MeasureLayout:
                      (null == e ? void 0 : e.isEnabled(t)) ||
                      (null == n ? void 0 : n.isEnabled(t))
                        ? i.MeasureLayout
                        : void 0,
                    ProjectionNode: i.ProjectionNode,
                  };
                })(h);
                (u = t.MeasureLayout),
                  (d.visualElement = (function (t, e, n, i, r) {
                    let { visualElement: s } = (0, ns.useContext)(iN),
                      o = (0, ns.useContext)(iO),
                      a = (0, ns.useContext)(iz.t),
                      l = (0, ns.useContext)(iB.Q).reducedMotion,
                      u = (0, ns.useRef)(null);
                    (i = i || o.renderer),
                      !u.current &&
                        i &&
                        (u.current = i(t, {
                          visualState: e,
                          parent: s,
                          props: n,
                          presenceContext: a,
                          blockInitialAnimation: !!a && !1 === a.initial,
                          reducedMotionConfig: l,
                        }));
                    let h = u.current,
                      c = (0, ns.useContext)(nl);
                    h &&
                      !h.projection &&
                      r &&
                      ("html" === h.type || "svg" === h.type) &&
                      (function (t, e, n, i) {
                        let {
                          layoutId: r,
                          layout: s,
                          drag: o,
                          dragConstraints: a,
                          layoutScroll: l,
                          layoutRoot: u,
                          layoutCrossfade: h,
                        } = e;
                        (t.projection = new n(
                          t.latestValues,
                          e["data-framer-portal-id"]
                            ? void 0
                            : (function t(e) {
                                if (e)
                                  return !1 !== e.options.allowProjection
                                    ? e.projection
                                    : t(e.parent);
                              })(t.parent)
                        )),
                          t.projection.setOptions({
                            layoutId: r,
                            layout: s,
                            alwaysMeasureLayout: !!o || (a && eK(a)),
                            visualElement: t,
                            animationType: "string" == typeof s ? s : "both",
                            initialPromotionConfig: i,
                            crossfade: h,
                            layoutScroll: l,
                            layoutRoot: u,
                          });
                      })(u.current, n, r, c);
                    let d = (0, ns.useRef)(!1);
                    (0, ns.useInsertionEffect)(() => {
                      h && d.current && h.update(n, a);
                    });
                    let p = n[w],
                      f = (0, ns.useRef)(
                        !!p &&
                          !window.MotionHandoffIsComplete?.(p) &&
                          window.MotionHasOptimisedAnimation?.(p)
                      );
                    return (
                      (0, iY.E)(() => {
                        h &&
                          ((d.current = !0),
                          (window.MotionIsMounted = !0),
                          h.updateFeatures(),
                          nr.render(h.render),
                          f.current &&
                            h.animationState &&
                            h.animationState.animateChanges());
                      }),
                      (0, ns.useEffect)(() => {
                        h &&
                          (!f.current &&
                            h.animationState &&
                            h.animationState.animateChanges(),
                          f.current &&
                            (queueMicrotask(() => {
                              window.MotionHandoffMarkAsComplete?.(p);
                            }),
                            (f.current = !1)));
                      }),
                      h
                    );
                  })(a, p, h, r, t.ProjectionNode));
              }
              return (0, ni.jsxs)(iN.Provider, {
                value: d,
                children: [
                  u && d.visualElement
                    ? (0, ni.jsx)(u, { visualElement: d.visualElement, ...h })
                    : null,
                  s(
                    a,
                    t,
                    ((n = d.visualElement),
                    (0, ns.useCallback)(
                      (t) => {
                        t && p.onMount && p.onMount(t),
                          n && (t ? n.mount(t) : n.unmount()),
                          e &&
                            ("function" == typeof e
                              ? e(t)
                              : eK(e) && (e.current = t));
                      },
                      [n]
                    )),
                    p,
                    c,
                    d.visualElement
                  ),
                ],
              });
            }
            i &&
              (function (t) {
                for (let e in t) iH[e] = { ...iH[e], ...t[e] };
              })(i),
              (l.displayName = "motion.".concat(
                "string" == typeof a
                  ? a
                  : "create(".concat(
                      null != (n = null != (e = a.displayName) ? e : a.name)
                        ? n
                        : "",
                      ")"
                    )
              ));
            let u = (0, ns.forwardRef)(l);
            return (u[iq] = a), u;
          })({
            ...(i6(t) ? ru : ra),
            preloadedFeatures: l,
            useRender: (function (t = !1) {
              return (e, n, i, { latestValues: r }, s) => {
                let o = (
                    i6(e)
                      ? function (t, e, n, i) {
                          let r = (0, ns.useMemo)(() => {
                            let n = rn();
                            return (
                              re(n, e, ri(i), t.transformTemplate),
                              { ...n.attrs, style: { ...n.style } }
                            );
                          }, [e]);
                          if (t.style) {
                            let e = {};
                            i5(e, t.style, t), (r.style = { ...e, ...r.style });
                          }
                          return r;
                        }
                      : function (t, e) {
                          let n = {},
                            i = (function (t, e) {
                              let n = t.style || {},
                                i = {};
                              return (
                                i5(i, n, t),
                                Object.assign(
                                  i,
                                  (function ({ transformTemplate: t }, e) {
                                    return (0, ns.useMemo)(() => {
                                      let n = i2();
                                      return (
                                        i1(n, e, t),
                                        Object.assign({}, n.vars, n.style)
                                      );
                                    }, [e]);
                                  })(t, e)
                                ),
                                i
                              );
                            })(t, e);
                          return (
                            t.drag &&
                              !1 !== t.dragListener &&
                              ((n.draggable = !1),
                              (i.userSelect =
                                i.WebkitUserSelect =
                                i.WebkitTouchCallout =
                                  "none"),
                              (i.touchAction =
                                !0 === t.drag
                                  ? "none"
                                  : `pan-${"x" === t.drag ? "y" : "x"}`)),
                            void 0 === t.tabIndex &&
                              (t.onTap || t.onTapStart || t.whileTap) &&
                              (n.tabIndex = 0),
                            (n.style = i),
                            n
                          );
                        }
                  )(n, r, s, e),
                  a = (function (t, e, n) {
                    let i = {};
                    for (let r in t)
                      ("values" !== r || "object" != typeof t.values) &&
                        (i8(r) ||
                          (!0 === n && i3(r)) ||
                          (!e && !i3(r)) ||
                          (t.draggable && r.startsWith("onDrag"))) &&
                        (i[r] = t[r]);
                    return i;
                  })(n, "string" == typeof e, t),
                  l = e !== ns.Fragment ? { ...a, ...o, ref: i } : {},
                  { children: u } = n,
                  h = (0, ns.useMemo)(() => (g(u) ? u.get() : u), [u]);
                return (0, ns.createElement)(e, { ...l, children: h });
              };
            })(e),
            createVisualElement: u,
            Component: t,
          });
        })
      );
    },
    26236: (t, e, n) => {
      n.d(e, { t: () => i });
      let i = (0, n(40329).createContext)(null);
    },
    29711: (t, e, n) => {
      n.d(e, { l: () => i });
      let i = (t) => t;
    },
    31562: (t, e, n) => {
      n.d(e, { G: () => h });
      var i = n(99711),
        r = n(29711),
        s = n(80851),
        o = n(7506),
        a = n(40438),
        l = n(88826),
        u = n(55148);
      function h(t, e, { clamp: n = !0, ease: c, mixer: d } = {}) {
        let p = t.length;
        if (
          ((0, o.V)(
            p === e.length,
            "Both input and output ranges must be the same length"
          ),
          1 === p)
        )
          return () => e[0];
        if (2 === p && e[0] === e[1]) return () => e[1];
        let f = t[0] === t[1];
        t[0] > t[p - 1] && ((t = [...t].reverse()), (e = [...e].reverse()));
        let m = (function (t, e, n) {
            let o = [],
              a = n || i.W.mix || u.j,
              l = t.length - 1;
            for (let n = 0; n < l; n++) {
              let i = a(t[n], t[n + 1]);
              if (e) {
                let t = Array.isArray(e) ? e[n] || r.l : e;
                i = (0, s.F)(t, i);
              }
              o.push(i);
            }
            return o;
          })(e, c, d),
          v = m.length,
          g = (n) => {
            if (f && n < t[0]) return e[0];
            let i = 0;
            if (v > 1) for (; i < t.length - 2 && !(n < t[i + 1]); i++);
            let r = (0, a.q)(t[i], t[i + 1], n);
            return m[i](r);
          };
        return n ? (e) => g((0, l.q)(t[0], t[p - 1], e)) : g;
      }
    },
    32814: (t, e, n) => {
      n.d(e, { N: () => g });
      var i = n(46877),
        r = n(40329),
        s = n(87706),
        o = n(18038),
        a = n(86119),
        l = n(26236),
        u = n(57277);
      class h extends r.Component {
        getSnapshotBeforeUpdate(t) {
          let e = this.props.childRef.current;
          if (e && t.isPresent && !this.props.isPresent) {
            let t = e.offsetParent,
              n = (t instanceof HTMLElement && t.offsetWidth) || 0,
              i = this.props.sizeRef.current;
            (i.height = e.offsetHeight || 0),
              (i.width = e.offsetWidth || 0),
              (i.top = e.offsetTop),
              (i.left = e.offsetLeft),
              (i.right = n - i.width - i.left);
          }
          return null;
        }
        componentDidUpdate() {}
        render() {
          return this.props.children;
        }
      }
      function c(t) {
        let { children: e, isPresent: n, anchorX: s } = t,
          o = (0, r.useId)(),
          a = (0, r.useRef)(null),
          l = (0, r.useRef)({ width: 0, height: 0, top: 0, left: 0, right: 0 }),
          { nonce: c } = (0, r.useContext)(u.Q);
        return (
          (0, r.useInsertionEffect)(() => {
            let { width: t, height: e, top: i, left: r, right: u } = l.current;
            if (n || !a.current || !t || !e) return;
            a.current.dataset.motionPopId = o;
            let h = document.createElement("style");
            return (
              c && (h.nonce = c),
              document.head.appendChild(h),
              h.sheet &&
                h.sheet.insertRule(
                  '\n          [data-motion-pop-id="'
                    .concat(
                      o,
                      '"] {\n            position: absolute !important;\n            width: '
                    )
                    .concat(t, "px !important;\n            height: ")
                    .concat(e, "px !important;\n            ")
                    .concat(
                      "left" === s ? "left: ".concat(r) : "right: ".concat(u),
                      "px !important;\n            top: "
                    )
                    .concat(i, "px !important;\n          }\n        ")
                ),
              () => {
                document.head.removeChild(h);
              }
            );
          }, [n]),
          (0, i.jsx)(h, {
            isPresent: n,
            childRef: a,
            sizeRef: l,
            children: r.cloneElement(e, { ref: a }),
          })
        );
      }
      let d = (t) => {
        let {
            children: e,
            initial: n,
            isPresent: s,
            onExitComplete: a,
            custom: u,
            presenceAffectsLayout: h,
            mode: d,
            anchorX: f,
          } = t,
          m = (0, o.M)(p),
          v = (0, r.useId)(),
          g = !0,
          y = (0, r.useMemo)(
            () => (
              (g = !1),
              {
                id: v,
                initial: n,
                isPresent: s,
                custom: u,
                onExitComplete: (t) => {
                  for (let e of (m.set(t, !0), m.values())) if (!e) return;
                  a && a();
                },
                register: (t) => (m.set(t, !1), () => m.delete(t)),
              }
            ),
            [s, m, a]
          );
        return (
          h && g && (y = { ...y }),
          (0, r.useMemo)(() => {
            m.forEach((t, e) => m.set(e, !1));
          }, [s]),
          r.useEffect(() => {
            s || m.size || !a || a();
          }, [s]),
          "popLayout" === d &&
            (e = (0, i.jsx)(c, { isPresent: s, anchorX: f, children: e })),
          (0, i.jsx)(l.t.Provider, { value: y, children: e })
        );
      };
      function p() {
        return new Map();
      }
      var f = n(83707);
      let m = (t) => t.key || "";
      function v(t) {
        let e = [];
        return (
          r.Children.forEach(t, (t) => {
            (0, r.isValidElement)(t) && e.push(t);
          }),
          e
        );
      }
      let g = (t) => {
        let {
            children: e,
            custom: n,
            initial: l = !0,
            onExitComplete: u,
            presenceAffectsLayout: h = !0,
            mode: c = "sync",
            propagate: p = !1,
            anchorX: g = "left",
          } = t,
          [y, x] = (0, f.xQ)(p),
          w = (0, r.useMemo)(() => v(e), [e]),
          b = p && !y ? [] : w.map(m),
          E = (0, r.useRef)(!0),
          T = (0, r.useRef)(w),
          P = (0, o.M)(() => new Map()),
          [S, A] = (0, r.useState)(w),
          [k, M] = (0, r.useState)(w);
        (0, a.E)(() => {
          (E.current = !1), (T.current = w);
          for (let t = 0; t < k.length; t++) {
            let e = m(k[t]);
            b.includes(e) ? P.delete(e) : !0 !== P.get(e) && P.set(e, !1);
          }
        }, [k, b.length, b.join("-")]);
        let C = [];
        if (w !== S) {
          let t = [...w];
          for (let e = 0; e < k.length; e++) {
            let n = k[e],
              i = m(n);
            b.includes(i) || (t.splice(e, 0, n), C.push(n));
          }
          return "wait" === c && C.length && (t = C), M(v(t)), A(w), null;
        }
        let { forceRender: V } = (0, r.useContext)(s.L);
        return (0, i.jsx)(i.Fragment, {
          children: k.map((t) => {
            let e = m(t),
              r = (!p || !!y) && (w === k || b.includes(e));
            return (0, i.jsx)(
              d,
              {
                isPresent: r,
                initial: (!E.current || !!l) && void 0,
                custom: n,
                presenceAffectsLayout: h,
                mode: c,
                onExitComplete: r
                  ? void 0
                  : () => {
                      if (!P.has(e)) return;
                      P.set(e, !0);
                      let t = !0;
                      P.forEach((e) => {
                        e || (t = !1);
                      }),
                        t &&
                          (null == V || V(),
                          M(T.current),
                          p && (null == x || x()),
                          u && u());
                    },
                anchorX: g,
                children: t,
              },
              e
            );
          }),
        });
      };
    },
    39435: (t, e, n) => {
      n.d(e, { J: () => i });
      let i = (0, n(44641).p)(() => void 0 !== window.ScrollTimeline);
    },
    40438: (t, e, n) => {
      n.d(e, { q: () => i });
      let i = (t, e, n) => {
        let i = e - t;
        return 0 === i ? 1 : (n - t) / i;
      };
    },
    43455: (t, e, n) => {
      var i = n(96295);
      n.o(i, "useParams") &&
        n.d(e, {
          useParams: function () {
            return i.useParams;
          },
        }),
        n.o(i, "usePathname") &&
          n.d(e, {
            usePathname: function () {
              return i.usePathname;
            },
          }),
        n.o(i, "useRouter") &&
          n.d(e, {
            useRouter: function () {
              return i.useRouter;
            },
          });
    },
    44127: (t, e, n) => {
      t.exports = n(99957);
    },
    44483: (t, e, n) => {
      n.d(e, { B: () => u });
      var i = n(88826),
        r = n(85110),
        s = n(86454),
        o = n(49158);
      let a = (t) => (0, i.q)(0, 255, t),
        l = { ...r.ai, transform: (t) => Math.round(a(t)) },
        u = {
          test: (0, o.$)("rgb", "red"),
          parse: (0, o.q)("red", "green", "blue"),
          transform: ({ red: t, green: e, blue: n, alpha: i = 1 }) =>
            "rgba(" +
            l.transform(t) +
            ", " +
            l.transform(e) +
            ", " +
            l.transform(n) +
            ", " +
            (0, s.a)(r.X4.transform(i)) +
            ")",
        };
    },
    44641: (t, e, n) => {
      n.d(e, { p: () => i });
      function i(t) {
        let e;
        return () => (void 0 === e && (e = t()), e);
      }
    },
    49083: (t, e, n) => {
      n.d(e, { B: () => i });
      let i = "undefined" != typeof window;
    },
    49158: (t, e, n) => {
      n.d(e, { $: () => s, q: () => o });
      var i = n(52379);
      let r =
          /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
        s = (t, e) => (n) =>
          !!(
            ("string" == typeof n && r.test(n) && n.startsWith(t)) ||
            (e && null != n && Object.prototype.hasOwnProperty.call(n, e))
          ),
        o = (t, e, n) => (r) => {
          if ("string" != typeof r) return r;
          let [s, o, a, l] = r.match(i.S);
          return {
            [t]: parseFloat(s),
            [e]: parseFloat(o),
            [n]: parseFloat(a),
            alpha: void 0 !== l ? parseFloat(l) : 1,
          };
        };
    },
    52379: (t, e, n) => {
      n.d(e, { S: () => i });
      let i = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
    },
    55148: (t, e, n) => {
      n.d(e, { j: () => S });
      var i = n(80851),
        r = n(7506),
        s = n(55159),
        o = n(91493),
        a = n(84261),
        l = n(93654),
        u = n(64303);
      function h(t, e, n) {
        return (n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6)
          ? t + (e - t) * 6 * n
          : n < 0.5
          ? e
          : n < 2 / 3
          ? t + (e - t) * (2 / 3 - n) * 6
          : t;
      }
      var c = n(44483);
      function d(t, e) {
        return (n) => (n > 0 ? e : t);
      }
      var p = n(72473);
      let f = (t, e, n) => {
          let i = t * t,
            r = n * (e * e - i) + i;
          return r < 0 ? 0 : Math.sqrt(r);
        },
        m = [l.u, c.B, u.V],
        v = (t) => m.find((e) => e.test(t));
      function g(t) {
        let e = v(t);
        if (
          ((0, r.$)(
            !!e,
            `'${t}' is not an animatable color. Use the equivalent color code instead.`
          ),
          !e)
        )
          return !1;
        let n = e.parse(t);
        return (
          e === u.V &&
            (n = (function ({ hue: t, saturation: e, lightness: n, alpha: i }) {
              (t /= 360), (n /= 100);
              let r = 0,
                s = 0,
                o = 0;
              if ((e /= 100)) {
                let i = n < 0.5 ? n * (1 + e) : n + e - n * e,
                  a = 2 * n - i;
                (r = h(a, i, t + 1 / 3)),
                  (s = h(a, i, t)),
                  (o = h(a, i, t - 1 / 3));
              } else r = s = o = n;
              return {
                red: Math.round(255 * r),
                green: Math.round(255 * s),
                blue: Math.round(255 * o),
                alpha: i,
              };
            })(n)),
          n
        );
      }
      let y = (t, e) => {
          let n = g(t),
            i = g(e);
          if (!n || !i) return d(t, e);
          let r = { ...n };
          return (t) => (
            (r.red = f(n.red, i.red, t)),
            (r.green = f(n.green, i.green, t)),
            (r.blue = f(n.blue, i.blue, t)),
            (r.alpha = (0, p.k)(n.alpha, i.alpha, t)),
            c.B.transform(r)
          );
        },
        x = new Set(["none", "hidden"]);
      function w(t, e) {
        return (n) => (0, p.k)(t, e, n);
      }
      function b(t) {
        return "number" == typeof t
          ? w
          : "string" == typeof t
          ? (0, s.p)(t)
            ? d
            : o.y.test(t)
            ? y
            : P
          : Array.isArray(t)
          ? E
          : "object" == typeof t
          ? o.y.test(t)
            ? y
            : T
          : d;
      }
      function E(t, e) {
        let n = [...t],
          i = n.length,
          r = t.map((t, n) => b(t)(t, e[n]));
        return (t) => {
          for (let e = 0; e < i; e++) n[e] = r[e](t);
          return n;
        };
      }
      function T(t, e) {
        let n = { ...t, ...e },
          i = {};
        for (let r in n)
          void 0 !== t[r] && void 0 !== e[r] && (i[r] = b(t[r])(t[r], e[r]));
        return (t) => {
          for (let e in i) n[e] = i[e](t);
          return n;
        };
      }
      let P = (t, e) => {
        let n = a.f.createTransformer(e),
          s = (0, a.V)(t),
          o = (0, a.V)(e);
        return s.indexes.var.length === o.indexes.var.length &&
          s.indexes.color.length === o.indexes.color.length &&
          s.indexes.number.length >= o.indexes.number.length
          ? (x.has(t) && !o.values.length) || (x.has(e) && !s.values.length)
            ? (function (t, e) {
                return x.has(t)
                  ? (n) => (n <= 0 ? t : e)
                  : (n) => (n >= 1 ? e : t);
              })(t, e)
            : (0, i.F)(
                E(
                  (function (t, e) {
                    let n = [],
                      i = { color: 0, var: 0, number: 0 };
                    for (let r = 0; r < e.values.length; r++) {
                      let s = e.types[r],
                        o = t.indexes[s][i[s]],
                        a = t.values[o] ?? 0;
                      (n[r] = a), i[s]++;
                    }
                    return n;
                  })(s, o),
                  o.values
                ),
                n
              )
          : ((0, r.$)(
              !0,
              `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`
            ),
            d(t, e));
      };
      function S(t, e, n) {
        return "number" == typeof t &&
          "number" == typeof e &&
          "number" == typeof n
          ? (0, p.k)(t, e, n)
          : b(t)(t, e);
      }
    },
    55159: (t, e, n) => {
      n.d(e, { j: () => r, p: () => o });
      let i = (t) => (e) => "string" == typeof e && e.startsWith(t),
        r = i("--"),
        s = i("var(--"),
        o = (t) => !!s(t) && a.test(t.split("/*")[0].trim()),
        a =
          /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
    },
    57277: (t, e, n) => {
      n.d(e, { Q: () => i });
      let i = (0, n(40329).createContext)({
        transformPagePoint: (t) => t,
        isStatic: !1,
        reducedMotion: "never",
      });
    },
    57694: (t, e, n) => {
      n.d(e, { default: () => r.a });
      var i = n(8829),
        r = n.n(i);
    },
    63611: (t, e, n) => {
      n.d(e, { lG: () => eA, Lj: () => eP, L3: () => eS });
      var i,
        r,
        s,
        o,
        a,
        l = n(40329),
        u = n.t(l, 2),
        h = ((t) => (
          (t.Space = " "),
          (t.Enter = "Enter"),
          (t.Escape = "Escape"),
          (t.Backspace = "Backspace"),
          (t.Delete = "Delete"),
          (t.ArrowLeft = "ArrowLeft"),
          (t.ArrowUp = "ArrowUp"),
          (t.ArrowRight = "ArrowRight"),
          (t.ArrowDown = "ArrowDown"),
          (t.Home = "Home"),
          (t.End = "End"),
          (t.PageUp = "PageUp"),
          (t.PageDown = "PageDown"),
          (t.Tab = "Tab"),
          t
        ))(h || {}),
        c = Object.defineProperty,
        d = (t, e, n) =>
          e in t
            ? c(t, e, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n,
              })
            : (t[e] = n),
        p = (t, e, n) => (d(t, "symbol" != typeof e ? e + "" : e, n), n);
      class f {
        set(t) {
          this.current !== t &&
            ((this.handoffState = "pending"),
            (this.currentId = 0),
            (this.current = t));
        }
        reset() {
          this.set(this.detect());
        }
        nextId() {
          return ++this.currentId;
        }
        get isServer() {
          return "server" === this.current;
        }
        get isClient() {
          return "client" === this.current;
        }
        detect() {
          return "undefined" == typeof window || "undefined" == typeof document
            ? "server"
            : "client";
        }
        handoff() {
          "pending" === this.handoffState && (this.handoffState = "complete");
        }
        get isHandoffComplete() {
          return "complete" === this.handoffState;
        }
        constructor() {
          p(this, "current", this.detect()),
            p(this, "handoffState", "pending"),
            p(this, "currentId", 0);
        }
      }
      let m = new f(),
        v = (t, e) => {
          m.isServer ? (0, l.useEffect)(t, e) : (0, l.useLayoutEffect)(t, e);
        };
      function g(t) {
        let e = (0, l.useRef)(t);
        return (
          v(() => {
            e.current = t;
          }, [t]),
          e
        );
      }
      function y(t, e, n, i) {
        let r = g(n);
        (0, l.useEffect)(() => {
          function n(t) {
            r.current(t);
          }
          return (
            (t = null != t ? t : window).addEventListener(e, n, i),
            () => t.removeEventListener(e, n, i)
          );
        }, [t, e, i]);
      }
      class x extends Map {
        get(t) {
          let e = super.get(t);
          return void 0 === e && ((e = this.factory(t)), this.set(t, e)), e;
        }
        constructor(t) {
          super(), (this.factory = t);
        }
      }
      function w(t) {
        "function" == typeof queueMicrotask
          ? queueMicrotask(t)
          : Promise.resolve()
              .then(t)
              .catch((t) =>
                setTimeout(() => {
                  throw t;
                })
              );
      }
      function b() {
        let t = [],
          e = {
            addEventListener: (t, n, i, r) => (
              t.addEventListener(n, i, r),
              e.add(() => t.removeEventListener(n, i, r))
            ),
            requestAnimationFrame() {
              for (var t = arguments.length, n = Array(t), i = 0; i < t; i++)
                n[i] = arguments[i];
              let r = requestAnimationFrame(...n);
              return e.add(() => cancelAnimationFrame(r));
            },
            nextFrame() {
              for (var t = arguments.length, n = Array(t), i = 0; i < t; i++)
                n[i] = arguments[i];
              return e.requestAnimationFrame(() =>
                e.requestAnimationFrame(...n)
              );
            },
            setTimeout() {
              for (var t = arguments.length, n = Array(t), i = 0; i < t; i++)
                n[i] = arguments[i];
              let r = setTimeout(...n);
              return e.add(() => clearTimeout(r));
            },
            microTask() {
              for (var t = arguments.length, n = Array(t), i = 0; i < t; i++)
                n[i] = arguments[i];
              let r = { current: !0 };
              return (
                w(() => {
                  r.current && n[0]();
                }),
                e.add(() => {
                  r.current = !1;
                })
              );
            },
            style(t, e, n) {
              let i = t.style.getPropertyValue(e);
              return (
                Object.assign(t.style, { [e]: n }),
                this.add(() => {
                  Object.assign(t.style, { [e]: i });
                })
              );
            },
            group(t) {
              let e = b();
              return t(e), this.add(() => e.dispose());
            },
            add: (e) => (
              t.includes(e) || t.push(e),
              () => {
                let n = t.indexOf(e);
                if (n >= 0) for (let e of t.splice(n, 1)) e();
              }
            ),
            dispose() {
              for (let e of t.splice(0)) e();
            },
          };
        return e;
      }
      var E = Object.defineProperty,
        T = (t, e, n) =>
          e in t
            ? E(t, e, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n,
              })
            : (t[e] = n),
        P = (t, e, n) => (T(t, "symbol" != typeof e ? e + "" : e, n), n),
        S = (t, e, n) => {
          if (!e.has(t)) throw TypeError("Cannot " + n);
        },
        A = (t, e, n) => (
          S(t, e, "read from private field"), n ? n.call(t) : e.get(t)
        ),
        k = (t, e, n) => {
          if (e.has(t))
            throw TypeError(
              "Cannot add the same private member more than once"
            );
          e instanceof WeakSet ? e.add(t) : e.set(t, n);
        },
        M = (t, e, n, i) => (
          S(t, e, "write to private field"), i ? i.call(t, n) : e.set(t, n), n
        );
      class C {
        dispose() {
          this.disposables.dispose();
        }
        get state() {
          return A(this, i);
        }
        subscribe(t, e) {
          let n = { selector: t, callback: e, current: t(A(this, i)) };
          return (
            A(this, s).add(n),
            this.disposables.add(() => {
              A(this, s).delete(n);
            })
          );
        }
        on(t, e) {
          return (
            A(this, r).get(t).add(e),
            this.disposables.add(() => {
              A(this, r).get(t).delete(e);
            })
          );
        }
        send(t) {
          let e = this.reduce(A(this, i), t);
          if (e !== A(this, i)) {
            for (let t of (M(this, i, e), A(this, s))) {
              let e = t.selector(A(this, i));
              V(t.current, e) || ((t.current = e), t.callback(e));
            }
            for (let e of A(this, r).get(t.type)) e(A(this, i), t);
          }
        }
        constructor(t) {
          k(this, i, {}),
            k(this, r, new x(() => new Set())),
            k(this, s, new Set()),
            P(this, "disposables", b()),
            M(this, i, t);
        }
      }
      function V(t, e) {
        return (
          !!Object.is(t, e) ||
          ("object" == typeof t &&
            null !== t &&
            "object" == typeof e &&
            null !== e &&
            (Array.isArray(t) && Array.isArray(e)
              ? t.length === e.length &&
                D(t[Symbol.iterator](), e[Symbol.iterator]())
              : (t instanceof Map && e instanceof Map) ||
                (t instanceof Set && e instanceof Set)
              ? t.size === e.size && D(t.entries(), e.entries())
              : !!(R(t) && R(e)) &&
                D(
                  Object.entries(t)[Symbol.iterator](),
                  Object.entries(e)[Symbol.iterator]()
                )))
        );
      }
      function D(t, e) {
        for (;;) {
          let n = t.next(),
            i = e.next();
          if (n.done && i.done) return !0;
          if (n.done || i.done || !Object.is(n.value, i.value)) return !1;
        }
      }
      function R(t) {
        if ("[object Object]" !== Object.prototype.toString.call(t)) return !1;
        let e = Object.getPrototypeOf(t);
        return null === e || null === Object.getPrototypeOf(e);
      }
      function F(t, e) {
        for (
          var n = arguments.length, i = Array(n > 2 ? n - 2 : 0), r = 2;
          r < n;
          r++
        )
          i[r - 2] = arguments[r];
        if (t in e) {
          let n = e[t];
          return "function" == typeof n ? n(...i) : n;
        }
        let s = Error(
          'Tried to handle "'
            .concat(
              t,
              '" but there is no handler defined. Only defined handlers are: '
            )
            .concat(
              Object.keys(e)
                .map((t) => '"'.concat(t, '"'))
                .join(", "),
              "."
            )
        );
        throw (Error.captureStackTrace && Error.captureStackTrace(s, F), s);
      }
      (i = new WeakMap()), (r = new WeakMap()), (s = new WeakMap());
      var L = Object.defineProperty,
        j = (t, e, n) =>
          e in t
            ? L(t, e, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n,
              })
            : (t[e] = n),
        O = (t, e, n) => (j(t, "symbol" != typeof e ? e + "" : e, n), n),
        B = ((t) => ((t[(t.Push = 0)] = "Push"), (t[(t.Pop = 1)] = "Pop"), t))(
          B || {}
        );
      let N = {
        0(t, e) {
          let n = e.id,
            i = t.stack,
            r = t.stack.indexOf(n);
          if (-1 !== r) {
            let e = t.stack.slice();
            return e.splice(r, 1), e.push(n), (i = e), { ...t, stack: i };
          }
          return { ...t, stack: [...t.stack, n] };
        },
        1(t, e) {
          let n = e.id,
            i = t.stack.indexOf(n);
          if (-1 === i) return t;
          let r = t.stack.slice();
          return r.splice(i, 1), { ...t, stack: r };
        },
      };
      class I extends C {
        static new() {
          return new I({ stack: [] });
        }
        reduce(t, e) {
          return F(e.type, N, t, e);
        }
        constructor() {
          super(...arguments),
            O(this, "actions", {
              push: (t) => this.send({ type: 0, id: t }),
              pop: (t) => this.send({ type: 1, id: t }),
            }),
            O(this, "selectors", {
              isTop: (t, e) => t.stack[t.stack.length - 1] === e,
              inStack: (t, e) => t.stack.includes(e),
            });
        }
      }
      let W = new x(() => I.new());
      var U = n(44127);
      let $ = function (t) {
        let e = g(t);
        return l.useCallback(
          function () {
            for (var t = arguments.length, n = Array(t), i = 0; i < t; i++)
              n[i] = arguments[i];
            return e.current(...n);
          },
          [e]
        );
      };
      function G(t, e) {
        let n =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : V;
        return (0, U.useSyncExternalStoreWithSelector)(
          $((e) => t.subscribe(H, e)),
          $(() => t.state),
          $(() => t.state),
          $(e),
          n
        );
      }
      function H(t) {
        return t;
      }
      function q(t, e) {
        let n = (0, l.useId)(),
          i = W.get(e),
          [r, s] = G(
            i,
            (0, l.useCallback)(
              (t) => [i.selectors.isTop(t, n), i.selectors.inStack(t, n)],
              [i, n]
            )
          );
        return (
          v(() => {
            if (t) return i.actions.push(n), () => i.actions.pop(n);
          }, [i, t, n]),
          !!t && (!s || r)
        );
      }
      function z(t) {
        var e, n;
        return m.isServer
          ? null
          : t
          ? "ownerDocument" in t
            ? t.ownerDocument
            : "current" in t
            ? null != (n = null == (e = t.current) ? void 0 : e.ownerDocument)
              ? n
              : document
            : null
          : document;
      }
      let Y = new Map(),
        X = new Map();
      function K(t) {
        var e;
        let n = null != (e = X.get(t)) ? e : 0;
        return (
          X.set(t, n + 1),
          0 !== n ||
            (Y.set(t, {
              "aria-hidden": t.getAttribute("aria-hidden"),
              inert: t.inert,
            }),
            t.setAttribute("aria-hidden", "true"),
            (t.inert = !0)),
          () =>
            (function (t) {
              var e;
              let n = null != (e = X.get(t)) ? e : 1;
              if ((1 === n ? X.delete(t) : X.set(t, n - 1), 1 !== n)) return;
              let i = Y.get(t);
              i &&
                (null === i["aria-hidden"]
                  ? t.removeAttribute("aria-hidden")
                  : t.setAttribute("aria-hidden", i["aria-hidden"]),
                (t.inert = i.inert),
                Y.delete(t));
            })(t)
        );
      }
      function _(t) {
        return "object" == typeof t && null !== t && "nodeType" in t;
      }
      function Q(t) {
        return _(t) && "tagName" in t;
      }
      function Z(t) {
        return Q(t) && "accessKey" in t;
      }
      function J(t) {
        return Q(t) && "tabIndex" in t;
      }
      let tt = [
          "[contentEditable=true]",
          "[tabindex]",
          "a[href]",
          "area[href]",
          "button:not([disabled])",
          "iframe",
          "input:not([disabled])",
          "select:not([disabled])",
          "textarea:not([disabled])",
        ]
          .map((t) => "".concat(t, ":not([tabindex='-1'])"))
          .join(","),
        te = ["[data-autofocus]"]
          .map((t) => "".concat(t, ":not([tabindex='-1'])"))
          .join(",");
      var tn = ((t) => (
          (t[(t.First = 1)] = "First"),
          (t[(t.Previous = 2)] = "Previous"),
          (t[(t.Next = 4)] = "Next"),
          (t[(t.Last = 8)] = "Last"),
          (t[(t.WrapAround = 16)] = "WrapAround"),
          (t[(t.NoScroll = 32)] = "NoScroll"),
          (t[(t.AutoFocus = 64)] = "AutoFocus"),
          t
        ))(tn || {}),
        ti = ((t) => (
          (t[(t.Error = 0)] = "Error"),
          (t[(t.Overflow = 1)] = "Overflow"),
          (t[(t.Success = 2)] = "Success"),
          (t[(t.Underflow = 3)] = "Underflow"),
          t
        ))(ti || {}),
        tr = ((t) => (
          (t[(t.Previous = -1)] = "Previous"), (t[(t.Next = 1)] = "Next"), t
        ))(tr || {}),
        ts = ((t) => (
          (t[(t.Strict = 0)] = "Strict"), (t[(t.Loose = 1)] = "Loose"), t
        ))(ts || {}),
        to = ((t) => (
          (t[(t.Keyboard = 0)] = "Keyboard"), (t[(t.Mouse = 1)] = "Mouse"), t
        ))(to || {});
      function ta(t) {
        null == t || t.focus({ preventScroll: !0 });
      }
      function tl(t, e) {
        var n, i, r;
        let {
            sorted: s = !0,
            relativeTo: o = null,
            skipElements: a = [],
          } = arguments.length > 2 && void 0 !== arguments[2]
            ? arguments[2]
            : {},
          l = Array.isArray(t)
            ? t.length > 0
              ? t[0].ownerDocument
              : document
            : t.ownerDocument,
          u = Array.isArray(t)
            ? s
              ? (function (t) {
                  let e =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : (t) => t;
                  return t.slice().sort((t, n) => {
                    let i = e(t),
                      r = e(n);
                    if (null === i || null === r) return 0;
                    let s = i.compareDocumentPosition(r);
                    return s & Node.DOCUMENT_POSITION_FOLLOWING
                      ? -1
                      : s & Node.DOCUMENT_POSITION_PRECEDING
                      ? 1
                      : 0;
                  });
                })(t)
              : t
            : 64 & e
            ? (function () {
                let t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : document.body;
                return null == t
                  ? []
                  : Array.from(t.querySelectorAll(te)).sort((t, e) =>
                      Math.sign(
                        (t.tabIndex || Number.MAX_SAFE_INTEGER) -
                          (e.tabIndex || Number.MAX_SAFE_INTEGER)
                      )
                    );
              })(t)
            : (function () {
                let t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : document.body;
                return null == t
                  ? []
                  : Array.from(t.querySelectorAll(tt)).sort((t, e) =>
                      Math.sign(
                        (t.tabIndex || Number.MAX_SAFE_INTEGER) -
                          (e.tabIndex || Number.MAX_SAFE_INTEGER)
                      )
                    );
              })(t);
        a.length > 0 &&
          u.length > 1 &&
          (u = u.filter(
            (t) =>
              !a.some((e) =>
                null != e && "current" in e
                  ? (null == e ? void 0 : e.current) === t
                  : e === t
              )
          )),
          (o = null != o ? o : l.activeElement);
        let h = (() => {
            if (5 & e) return 1;
            if (10 & e) return -1;
            throw Error(
              "Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last"
            );
          })(),
          c = (() => {
            if (1 & e) return 0;
            if (2 & e) return Math.max(0, u.indexOf(o)) - 1;
            if (4 & e) return Math.max(0, u.indexOf(o)) + 1;
            if (8 & e) return u.length - 1;
            throw Error(
              "Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last"
            );
          })(),
          d = 32 & e ? { preventScroll: !0 } : {},
          p = 0,
          f = u.length,
          m;
        do {
          if (p >= f || p + f <= 0) return 0;
          let t = c + p;
          if (16 & e) t = (t + f) % f;
          else {
            if (t < 0) return 3;
            if (t >= f) return 1;
          }
          null == (m = u[t]) || m.focus(d), (p += h);
        } while (m !== l.activeElement);
        return (
          6 & e &&
            null !=
              (r =
                null == (i = null == (n = m) ? void 0 : n.matches)
                  ? void 0
                  : i.call(n, "textarea,input")) &&
            r &&
            m.select(),
          2
        );
      }
      function tu() {
        return (
          /iPhone/gi.test(window.navigator.platform) ||
          (/Mac/gi.test(window.navigator.platform) &&
            window.navigator.maxTouchPoints > 0)
        );
      }
      function th() {
        return tu() || /Android/gi.test(window.navigator.userAgent);
      }
      function tc(t, e, n, i) {
        let r = g(n);
        (0, l.useEffect)(() => {
          if (t)
            return (
              document.addEventListener(e, n, i),
              () => document.removeEventListener(e, n, i)
            );
          function n(t) {
            r.current(t);
          }
        }, [t, e, i]);
      }
      function td(t, e, n, i) {
        let r = g(n);
        (0, l.useEffect)(() => {
          if (t)
            return (
              window.addEventListener(e, n, i),
              () => window.removeEventListener(e, n, i)
            );
          function n(t) {
            r.current(t);
          }
        }, [t, e, i]);
      }
      function tp() {
        for (var t = arguments.length, e = Array(t), n = 0; n < t; n++)
          e[n] = arguments[n];
        return (0, l.useMemo)(() => z(...e), [...e]);
      }
      function tf() {
        for (var t = arguments.length, e = Array(t), n = 0; n < t; n++)
          e[n] = arguments[n];
        return Array.from(
          new Set(e.flatMap((t) => ("string" == typeof t ? t.split(" ") : [])))
        )
          .filter(Boolean)
          .join(" ");
      }
      "undefined" != typeof window &&
        "undefined" != typeof document &&
        (document.addEventListener(
          "keydown",
          (t) => {
            t.metaKey ||
              t.altKey ||
              t.ctrlKey ||
              (document.documentElement.dataset.headlessuiFocusVisible = "");
          },
          !0
        ),
        document.addEventListener(
          "click",
          (t) => {
            1 === t.detail
              ? delete document.documentElement.dataset.headlessuiFocusVisible
              : 0 === t.detail &&
                (document.documentElement.dataset.headlessuiFocusVisible = "");
          },
          !0
        ));
      var tm = ((t) => (
          (t[(t.None = 0)] = "None"),
          (t[(t.RenderStrategy = 1)] = "RenderStrategy"),
          (t[(t.Static = 2)] = "Static"),
          t
        ))(tm || {}),
        tv = ((t) => (
          (t[(t.Unmount = 0)] = "Unmount"), (t[(t.Hidden = 1)] = "Hidden"), t
        ))(tv || {});
      function tg() {
        let t,
          e,
          n =
            ((t = (0, l.useRef)([])),
            (e = (0, l.useCallback)((e) => {
              for (let n of t.current)
                null != n && ("function" == typeof n ? n(e) : (n.current = e));
            }, [])),
            function () {
              for (var n = arguments.length, i = Array(n), r = 0; r < n; r++)
                i[r] = arguments[r];
              if (!i.every((t) => null == t)) return (t.current = i), e;
            });
        return (0, l.useCallback)(
          (t) =>
            (function (t) {
              let {
                ourProps: e,
                theirProps: n,
                slot: i,
                defaultTag: r,
                features: s,
                visible: o = !0,
                name: a,
                mergeRefs: l,
              } = t;
              l = null != l ? l : tx;
              let u = tw(n, e);
              if (o) return ty(u, i, r, a, l);
              let h = null != s ? s : 0;
              if (2 & h) {
                let { static: t = !1, ...e } = u;
                if (t) return ty(e, i, r, a, l);
              }
              if (1 & h) {
                let { unmount: t = !0, ...e } = u;
                return F(+!t, {
                  0: () => null,
                  1: () =>
                    ty(
                      { ...e, hidden: !0, style: { display: "none" } },
                      i,
                      r,
                      a,
                      l
                    ),
                });
              }
              return ty(u, i, r, a, l);
            })({ mergeRefs: n, ...t }),
          [n]
        );
      }
      function ty(t) {
        let e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = arguments.length > 2 ? arguments[2] : void 0,
          i = arguments.length > 3 ? arguments[3] : void 0,
          r = arguments.length > 4 ? arguments[4] : void 0,
          {
            as: s = n,
            children: o,
            refName: a = "ref",
            ...u
          } = tT(t, ["unmount", "static"]),
          h = void 0 !== t.ref ? { [a]: t.ref } : {},
          c = "function" == typeof o ? o(e) : o;
        "className" in u &&
          u.className &&
          "function" == typeof u.className &&
          (u.className = u.className(e)),
          u["aria-labelledby"] &&
            u["aria-labelledby"] === u.id &&
            (u["aria-labelledby"] = void 0);
        let d = {};
        if (e) {
          let t = !1,
            n = [];
          for (let [i, r] of Object.entries(e))
            "boolean" == typeof r && (t = !0),
              !0 === r &&
                n.push(
                  i.replace(/([A-Z])/g, (t) => "-".concat(t.toLowerCase()))
                );
          if (t)
            for (let t of ((d["data-headlessui-state"] = n.join(" ")), n))
              d["data-".concat(t)] = "";
        }
        if (
          s === l.Fragment &&
          (Object.keys(tE(u)).length > 0 || Object.keys(tE(d)).length > 0)
        )
          if (!(0, l.isValidElement)(c) || (Array.isArray(c) && c.length > 1)) {
            if (Object.keys(tE(u)).length > 0)
              throw Error(
                [
                  'Passing props on "Fragment"!',
                  "",
                  "The current component <".concat(
                    i,
                    ' /> is rendering a "Fragment".'
                  ),
                  "However we need to passthrough the following props:",
                  Object.keys(tE(u))
                    .concat(Object.keys(tE(d)))
                    .map((t) => "  - ".concat(t))
                    .join("\n"),
                  "",
                  "You can apply a few solutions:",
                  [
                    'Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',
                    "Render a single element as the child so that we can forward the props onto that element.",
                  ]
                    .map((t) => "  - ".concat(t))
                    .join("\n"),
                ].join("\n")
              );
          } else {
            var p;
            let t = c.props,
              e = null == t ? void 0 : t.className,
              n =
                "function" == typeof e
                  ? function () {
                      for (
                        var t = arguments.length, n = Array(t), i = 0;
                        i < t;
                        i++
                      )
                        n[i] = arguments[i];
                      return tf(e(...n), u.className);
                    }
                  : tf(e, u.className),
              i = tw(c.props, tE(tT(u, ["ref"])));
            for (let t in d) t in i && delete d[t];
            return (0, l.cloneElement)(
              c,
              Object.assign(
                {},
                i,
                d,
                h,
                {
                  ref: r(
                    ((p = c),
                    l.version.split(".")[0] >= "19" ? p.props.ref : p.ref),
                    h.ref
                  ),
                },
                n ? { className: n } : {}
              )
            );
          }
        return (0, l.createElement)(
          s,
          Object.assign(
            {},
            tT(u, ["ref"]),
            s !== l.Fragment && h,
            s !== l.Fragment && d
          ),
          c
        );
      }
      function tx() {
        for (var t = arguments.length, e = Array(t), n = 0; n < t; n++)
          e[n] = arguments[n];
        return e.every((t) => null == t)
          ? void 0
          : (t) => {
              for (let n of e)
                null != n && ("function" == typeof n ? n(t) : (n.current = t));
            };
      }
      function tw() {
        for (var t = arguments.length, e = Array(t), n = 0; n < t; n++)
          e[n] = arguments[n];
        if (0 === e.length) return {};
        if (1 === e.length) return e[0];
        let i = {},
          r = {};
        for (let t of e)
          for (let e in t)
            e.startsWith("on") && "function" == typeof t[e]
              ? (null != r[e] || (r[e] = []), r[e].push(t[e]))
              : (i[e] = t[e]);
        if (i.disabled || i["aria-disabled"])
          for (let t in r)
            /^(on(?:Click|Pointer|Mouse|Key)(?:Down|Up|Press)?)$/.test(t) &&
              (r[t] = [
                (t) => {
                  var e;
                  return null == (e = null == t ? void 0 : t.preventDefault)
                    ? void 0
                    : e.call(t);
                },
              ]);
        for (let t in r)
          Object.assign(i, {
            [t](e) {
              for (
                var n = arguments.length, i = Array(n > 1 ? n - 1 : 0), s = 1;
                s < n;
                s++
              )
                i[s - 1] = arguments[s];
              for (let n of r[t]) {
                if (
                  (e instanceof Event ||
                    (null == e ? void 0 : e.nativeEvent) instanceof Event) &&
                  e.defaultPrevented
                )
                  return;
                n(e, ...i);
              }
            },
          });
        return i;
      }
      function tb(t) {
        var e;
        return Object.assign((0, l.forwardRef)(t), {
          displayName: null != (e = t.displayName) ? e : t.name,
        });
      }
      function tE(t) {
        let e = Object.assign({}, t);
        for (let t in e) void 0 === e[t] && delete e[t];
        return e;
      }
      function tT(t) {
        let e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          n = Object.assign({}, t);
        for (let t of e) t in n && delete n[t];
        return n;
      }
      var tP = ((t) => (
        (t[(t.None = 1)] = "None"),
        (t[(t.Focusable = 2)] = "Focusable"),
        (t[(t.Hidden = 4)] = "Hidden"),
        t
      ))(tP || {});
      let tS = tb(function (t, e) {
          var n;
          let { features: i = 1, ...r } = t,
            s = {
              ref: e,
              "aria-hidden":
                (2 & i) == 2 || (null != (n = r["aria-hidden"]) ? n : void 0),
              hidden: (4 & i) == 4 || void 0,
              style: {
                position: "fixed",
                top: 1,
                left: 1,
                width: 1,
                height: 0,
                padding: 0,
                margin: -1,
                overflow: "hidden",
                clip: "rect(0, 0, 0, 0)",
                whiteSpace: "nowrap",
                borderWidth: "0",
                ...((4 & i) == 4 && (2 & i) != 2 && { display: "none" }),
              },
            };
          return tg()({
            ourProps: s,
            theirProps: r,
            slot: {},
            defaultTag: "span",
            name: "Hidden",
          });
        }),
        tA = (0, l.createContext)(null);
      function tk(t) {
        let { children: e, node: n } = t,
          [i, r] = (0, l.useState)(null),
          s = tM(null != n ? n : i);
        return l.createElement(
          tA.Provider,
          { value: s },
          e,
          null === s &&
            l.createElement(tS, {
              features: tP.Hidden,
              ref: (t) => {
                var e, n;
                if (t) {
                  for (let i of null !=
                  (n =
                    null == (e = z(t))
                      ? void 0
                      : e.querySelectorAll("html > *, body > *"))
                    ? n
                    : [])
                    if (
                      i !== document.body &&
                      i !== document.head &&
                      Q(i) &&
                      null != i &&
                      i.contains(t)
                    ) {
                      r(i);
                      break;
                    }
                }
              },
            })
        );
      }
      function tM() {
        var t;
        let e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        return null != (t = (0, l.useContext)(tA)) ? t : e;
      }
      let tC = (function (t, e) {
        let n = t(),
          i = new Set();
        return {
          getSnapshot: () => n,
          subscribe: (t) => (i.add(t), () => i.delete(t)),
          dispatch(t) {
            for (
              var r = arguments.length, s = Array(r > 1 ? r - 1 : 0), o = 1;
              o < r;
              o++
            )
              s[o - 1] = arguments[o];
            let a = e[t].call(n, ...s);
            a && ((n = a), i.forEach((t) => t()));
          },
        };
      })(() => new Map(), {
        PUSH(t, e) {
          var n;
          let i =
            null != (n = this.get(t))
              ? n
              : { doc: t, count: 0, d: b(), meta: new Set() };
          return i.count++, i.meta.add(e), this.set(t, i), this;
        },
        POP(t, e) {
          let n = this.get(t);
          return n && (n.count--, n.meta.delete(e)), this;
        },
        SCROLL_PREVENT(t) {
          let e,
            { doc: n, d: i, meta: r } = t,
            s = {
              doc: n,
              d: i,
              meta: (function (t) {
                let e = {};
                for (let n of t) Object.assign(e, n(e));
                return e;
              })(r),
            },
            o = [
              tu()
                ? {
                    before(t) {
                      let { doc: e, d: n, meta: i } = t;
                      function r(t) {
                        return i.containers
                          .flatMap((t) => t())
                          .some((e) => e.contains(t));
                      }
                      n.microTask(() => {
                        var t;
                        if (
                          "auto" !==
                          window.getComputedStyle(e.documentElement)
                            .scrollBehavior
                        ) {
                          let t = b();
                          t.style(e.documentElement, "scrollBehavior", "auto"),
                            n.add(() => n.microTask(() => t.dispose()));
                        }
                        let i =
                            null != (t = window.scrollY)
                              ? t
                              : window.pageYOffset,
                          s = null;
                        n.addEventListener(
                          e,
                          "click",
                          (t) => {
                            if (J(t.target))
                              try {
                                let n = t.target.closest("a");
                                if (!n) return;
                                let { hash: i } = new URL(n.href),
                                  o = e.querySelector(i);
                                J(o) && !r(o) && (s = o);
                              } catch (t) {}
                          },
                          !0
                        ),
                          n.addEventListener(e, "touchstart", (t) => {
                            var e;
                            if (
                              J(t.target) &&
                              Q((e = t.target)) &&
                              "style" in e
                            )
                              if (r(t.target)) {
                                let e = t.target;
                                for (; e.parentElement && r(e.parentElement); )
                                  e = e.parentElement;
                                n.style(e, "overscrollBehavior", "contain");
                              } else n.style(t.target, "touchAction", "none");
                          }),
                          n.addEventListener(
                            e,
                            "touchmove",
                            (t) => {
                              if (J(t.target)) {
                                var e;
                                if (
                                  !(Z((e = t.target)) && "INPUT" === e.nodeName)
                                )
                                  if (r(t.target)) {
                                    let e = t.target;
                                    for (
                                      ;
                                      e.parentElement &&
                                      "" !== e.dataset.headlessuiPortal &&
                                      !(
                                        e.scrollHeight > e.clientHeight ||
                                        e.scrollWidth > e.clientWidth
                                      );

                                    )
                                      e = e.parentElement;
                                    "" === e.dataset.headlessuiPortal &&
                                      t.preventDefault();
                                  } else t.preventDefault();
                              }
                            },
                            { passive: !1 }
                          ),
                          n.add(() => {
                            var t;
                            i !==
                              (null != (t = window.scrollY)
                                ? t
                                : window.pageYOffset) && window.scrollTo(0, i),
                              s &&
                                s.isConnected &&
                                (s.scrollIntoView({ block: "nearest" }),
                                (s = null));
                          });
                      });
                    },
                  }
                : {},
              {
                before(t) {
                  var n;
                  let { doc: i } = t,
                    r = i.documentElement;
                  e = Math.max(
                    0,
                    (null != (n = i.defaultView) ? n : window).innerWidth -
                      r.clientWidth
                  );
                },
                after(t) {
                  let { doc: n, d: i } = t,
                    r = n.documentElement,
                    s = Math.max(0, r.clientWidth - r.offsetWidth),
                    o = Math.max(0, e - s);
                  i.style(r, "paddingRight", "".concat(o, "px"));
                },
              },
              {
                before(t) {
                  let { doc: e, d: n } = t;
                  n.style(e.documentElement, "overflow", "hidden");
                },
              },
            ];
          o.forEach((t) => {
            let { before: e } = t;
            return null == e ? void 0 : e(s);
          }),
            o.forEach((t) => {
              let { after: e } = t;
              return null == e ? void 0 : e(s);
            });
        },
        SCROLL_ALLOW(t) {
          let { d: e } = t;
          e.dispose();
        },
        TEARDOWN(t) {
          let { doc: e } = t;
          this.delete(e);
        },
      });
      function tV() {
        let t,
          e =
            ((t = "undefined" == typeof document),
            (0, u.useSyncExternalStore)(
              () => () => {},
              () => !1,
              () => !t
            )),
          [n, i] = l.useState(m.isHandoffComplete);
        return (
          n && !1 === m.isHandoffComplete && i(!1),
          l.useEffect(() => {
            !0 !== n && i(!0);
          }, [n]),
          l.useEffect(() => m.handoff(), []),
          !e && n
        );
      }
      tC.subscribe(() => {
        let t = tC.getSnapshot(),
          e = new Map();
        for (let [n] of t) e.set(n, n.documentElement.style.overflow);
        for (let n of t.values()) {
          let t = "hidden" === e.get(n.doc),
            i = 0 !== n.count;
          ((i && !t) || (!i && t)) &&
            tC.dispatch(n.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", n),
            0 === n.count && tC.dispatch("TEARDOWN", n);
        }
      });
      let tD = Symbol();
      function tR() {
        for (var t = arguments.length, e = Array(t), n = 0; n < t; n++)
          e[n] = arguments[n];
        let i = (0, l.useRef)(e);
        (0, l.useEffect)(() => {
          i.current = e;
        }, [e]);
        let r = $((t) => {
          for (let e of i.current)
            null != e && ("function" == typeof e ? e(t) : (e.current = t));
        });
        return e.every((t) => null == t || (null == t ? void 0 : t[tD]))
          ? void 0
          : r;
      }
      let tF = (0, l.createContext)(() => {});
      function tL(t) {
        let { value: e, children: n } = t;
        return l.createElement(tF.Provider, { value: e }, n);
      }
      let tj = (0, l.createContext)(null);
      tj.displayName = "OpenClosedContext";
      var tO = ((t) => (
        (t[(t.Open = 1)] = "Open"),
        (t[(t.Closed = 2)] = "Closed"),
        (t[(t.Closing = 4)] = "Closing"),
        (t[(t.Opening = 8)] = "Opening"),
        t
      ))(tO || {});
      function tB() {
        return (0, l.useContext)(tj);
      }
      function tN(t) {
        let { value: e, children: n } = t;
        return l.createElement(tj.Provider, { value: e }, n);
      }
      function tI(t) {
        let { children: e } = t;
        return l.createElement(tj.Provider, { value: null }, e);
      }
      let tW = (0, l.createContext)(!1);
      function tU(t) {
        return l.createElement(tW.Provider, { value: t.force }, t.children);
      }
      let t$ = (0, l.createContext)(void 0),
        tG = (0, l.createContext)(null);
      tG.displayName = "DescriptionContext";
      let tH = Object.assign(
        tb(function (t, e) {
          let n = (0, l.useId)(),
            i = (0, l.useContext)(t$),
            { id: r = "headlessui-description-".concat(n), ...s } = t,
            o = (function t() {
              let e = (0, l.useContext)(tG);
              if (null === e) {
                let e = Error(
                  "You used a <Description /> component, but it is not inside a relevant parent."
                );
                throw (
                  (Error.captureStackTrace && Error.captureStackTrace(e, t), e)
                );
              }
              return e;
            })(),
            a = tR(e);
          v(() => o.register(r), [r, o.register]);
          let u = i || !1,
            h = (0, l.useMemo)(() => ({ ...o.slot, disabled: u }), [o.slot, u]),
            c = { ref: a, ...o.props, id: r };
          return tg()({
            ourProps: c,
            theirProps: s,
            slot: h,
            defaultTag: "p",
            name: o.name || "Description",
          });
        }),
        {}
      );
      function tq() {
        let [t] = (0, l.useState)(b);
        return (0, l.useEffect)(() => () => t.dispose(), [t]), t;
      }
      function tz() {
        let t = (0, l.useRef)(!1);
        return (
          v(
            () => (
              (t.current = !0),
              () => {
                t.current = !1;
              }
            ),
            []
          ),
          t
        );
      }
      function tY(t) {
        let e = $(t),
          n = (0, l.useRef)(!1);
        (0, l.useEffect)(
          () => (
            (n.current = !1),
            () => {
              (n.current = !0),
                w(() => {
                  n.current && e();
                });
            }
          ),
          [e]
        );
      }
      var tX = ((t) => (
        (t[(t.Forwards = 0)] = "Forwards"),
        (t[(t.Backwards = 1)] = "Backwards"),
        t
      ))(tX || {});
      function tK(t, e) {
        let n = (0, l.useRef)([]),
          i = $(t);
        (0, l.useEffect)(() => {
          let t = [...n.current];
          for (let [r, s] of e.entries())
            if (n.current[r] !== s) {
              let r = i(e, t);
              return (n.current = e), r;
            }
        }, [i, ...e]);
      }
      let t_ = [];
      function tQ(t) {
        if (!t) return new Set();
        if ("function" == typeof t) return new Set(t());
        let e = new Set();
        for (let n of t.current) Q(n.current) && e.add(n.current);
        return e;
      }
      !(function (t) {
        function e() {
          "loading" !== document.readyState &&
            (t(), document.removeEventListener("DOMContentLoaded", e));
        }
        "undefined" != typeof window &&
          "undefined" != typeof document &&
          (document.addEventListener("DOMContentLoaded", e), e());
      })(() => {
        function t(t) {
          if (!J(t.target) || t.target === document.body || t_[0] === t.target)
            return;
          let e = t.target;
          (e = e.closest(tt)),
            t_.unshift(null != e ? e : t.target),
            (t_ = t_.filter((t) => null != t && t.isConnected)).splice(10);
        }
        window.addEventListener("click", t, { capture: !0 }),
          window.addEventListener("mousedown", t, { capture: !0 }),
          window.addEventListener("focus", t, { capture: !0 }),
          document.body.addEventListener("click", t, { capture: !0 }),
          document.body.addEventListener("mousedown", t, { capture: !0 }),
          document.body.addEventListener("focus", t, { capture: !0 });
      });
      var tZ = ((t) => (
        (t[(t.None = 0)] = "None"),
        (t[(t.InitialFocus = 1)] = "InitialFocus"),
        (t[(t.TabLock = 2)] = "TabLock"),
        (t[(t.FocusLock = 4)] = "FocusLock"),
        (t[(t.RestoreFocus = 8)] = "RestoreFocus"),
        (t[(t.AutoFocus = 16)] = "AutoFocus"),
        t
      ))(tZ || {});
      let tJ = Object.assign(
        tb(function (t, e) {
          let n,
            i = (0, l.useRef)(null),
            r = tR(i, e),
            {
              initialFocus: s,
              initialFocusFallback: o,
              containers: a,
              features: u = 15,
              ...h
            } = t;
          tV() || (u = 0);
          let c = tp(i);
          !(function (t, e) {
            let { ownerDocument: n } = e,
              i = !!(8 & t),
              r = (function () {
                let t =
                    !(arguments.length > 0) ||
                    void 0 === arguments[0] ||
                    arguments[0],
                  e = (0, l.useRef)(t_.slice());
                return (
                  tK(
                    (t, n) => {
                      let [i] = t,
                        [r] = n;
                      !0 === r &&
                        !1 === i &&
                        w(() => {
                          e.current.splice(0);
                        }),
                        !1 === r && !0 === i && (e.current = t_.slice());
                    },
                    [t, t_, e]
                  ),
                  $(() => {
                    var t;
                    return null !=
                      (t = e.current.find((t) => null != t && t.isConnected))
                      ? t
                      : null;
                  })
                );
              })(i);
            tK(() => {
              i ||
                ((null == n ? void 0 : n.activeElement) ===
                  (null == n ? void 0 : n.body) &&
                  ta(r()));
            }, [i]),
              tY(() => {
                i && ta(r());
              });
          })(u, { ownerDocument: c });
          let d = (function (t, e) {
            let {
                ownerDocument: n,
                container: i,
                initialFocus: r,
                initialFocusFallback: s,
              } = e,
              o = (0, l.useRef)(null),
              a = q(!!(1 & t), "focus-trap#initial-focus"),
              u = tz();
            return (
              tK(() => {
                if (0 === t) return;
                if (!a) {
                  null != s && s.current && ta(s.current);
                  return;
                }
                let e = i.current;
                e &&
                  w(() => {
                    if (!u.current) return;
                    let i = null == n ? void 0 : n.activeElement;
                    if (null != r && r.current) {
                      if ((null == r ? void 0 : r.current) === i) {
                        o.current = i;
                        return;
                      }
                    } else if (e.contains(i)) {
                      o.current = i;
                      return;
                    }
                    if (null != r && r.current) ta(r.current);
                    else {
                      if (16 & t) {
                        if (tl(e, tn.First | tn.AutoFocus) !== ti.Error) return;
                      } else if (tl(e, tn.First) !== ti.Error) return;
                      if (
                        null != s &&
                        s.current &&
                        (ta(s.current),
                        (null == n ? void 0 : n.activeElement) === s.current)
                      )
                        return;
                      console.warn(
                        "There are no focusable elements inside the <FocusTrap />"
                      );
                    }
                    o.current = null == n ? void 0 : n.activeElement;
                  });
              }, [s, a, t]),
              o
            );
          })(u, {
            ownerDocument: c,
            container: i,
            initialFocus: s,
            initialFocusFallback: o,
          });
          !(function (t, e) {
            let {
                ownerDocument: n,
                container: i,
                containers: r,
                previousActiveElement: s,
              } = e,
              o = tz(),
              a = !!(4 & t);
            y(
              null == n ? void 0 : n.defaultView,
              "focus",
              (t) => {
                if (!a || !o.current) return;
                let e = tQ(r);
                Z(i.current) && e.add(i.current);
                let n = s.current;
                if (!n) return;
                let l = t.target;
                Z(l)
                  ? t0(e, l)
                    ? ((s.current = l), ta(l))
                    : (t.preventDefault(), t.stopPropagation(), ta(n))
                  : ta(s.current);
              },
              !0
            );
          })(u, {
            ownerDocument: c,
            container: i,
            containers: a,
            previousActiveElement: d,
          });
          let p =
              ((n = (0, l.useRef)(0)),
              td(
                !0,
                "keydown",
                (t) => {
                  "Tab" === t.key && (n.current = +!!t.shiftKey);
                },
                !0
              ),
              n),
            f = $((t) => {
              if (!Z(i.current)) return;
              let e = i.current;
              F(p.current, {
                [tX.Forwards]: () => {
                  tl(e, tn.First, { skipElements: [t.relatedTarget, o] });
                },
                [tX.Backwards]: () => {
                  tl(e, tn.Last, { skipElements: [t.relatedTarget, o] });
                },
              });
            }),
            m = q(!!(2 & u), "focus-trap#tab-lock"),
            v = tq(),
            g = (0, l.useRef)(!1),
            x = tg();
          return l.createElement(
            l.Fragment,
            null,
            m &&
              l.createElement(tS, {
                as: "button",
                type: "button",
                "data-headlessui-focus-guard": !0,
                onFocus: f,
                features: tP.Focusable,
              }),
            x({
              ourProps: {
                ref: r,
                onKeyDown(t) {
                  "Tab" == t.key &&
                    ((g.current = !0),
                    v.requestAnimationFrame(() => {
                      g.current = !1;
                    }));
                },
                onBlur(t) {
                  if (!(4 & u)) return;
                  let e = tQ(a);
                  Z(i.current) && e.add(i.current);
                  let n = t.relatedTarget;
                  J(n) &&
                    "true" !== n.dataset.headlessuiFocusGuard &&
                    (t0(e, n) ||
                      (g.current
                        ? tl(
                            i.current,
                            F(p.current, {
                              [tX.Forwards]: () => tn.Next,
                              [tX.Backwards]: () => tn.Previous,
                            }) | tn.WrapAround,
                            { relativeTo: t.target }
                          )
                        : J(t.target) && ta(t.target)));
                },
              },
              theirProps: h,
              defaultTag: "div",
              name: "FocusTrap",
            }),
            m &&
              l.createElement(tS, {
                as: "button",
                type: "button",
                "data-headlessui-focus-guard": !0,
                onFocus: f,
                features: tP.Focusable,
              })
          );
        }),
        { features: tZ }
      );
      function t0(t, e) {
        for (let n of t) if (n.contains(e)) return !0;
        return !1;
      }
      var t1 = n(31516);
      let t2 = l.Fragment,
        t5 = tb(function (t, e) {
          let { ownerDocument: n = null, ...i } = t,
            r = (0, l.useRef)(null),
            s = tR(
              (function (t) {
                let e =
                  !(arguments.length > 1) ||
                  void 0 === arguments[1] ||
                  arguments[1];
                return Object.assign(t, { [tD]: e });
              })((t) => {
                r.current = t;
              }),
              e
            ),
            o = tp(r),
            a = null != n ? n : o,
            u = (function (t) {
              let e = (0, l.useContext)(tW),
                n = (0, l.useContext)(t3),
                [i, r] = (0, l.useState)(() => {
                  var i;
                  if (!e && null !== n)
                    return null != (i = n.current) ? i : null;
                  if (m.isServer) return null;
                  let r =
                    null == t
                      ? void 0
                      : t.getElementById("headlessui-portal-root");
                  if (r) return r;
                  if (null === t) return null;
                  let s = t.createElement("div");
                  return (
                    s.setAttribute("id", "headlessui-portal-root"),
                    t.body.appendChild(s)
                  );
                });
              return (
                (0, l.useEffect)(() => {
                  null !== i &&
                    ((null != t && t.body.contains(i)) ||
                      null == t ||
                      t.body.appendChild(i));
                }, [i, t]),
                (0, l.useEffect)(() => {
                  e || (null !== n && r(n.current));
                }, [n, r, e]),
                i
              );
            })(a),
            [h] = (0, l.useState)(() => {
              var t;
              return m.isServer
                ? null
                : null != (t = null == a ? void 0 : a.createElement("div"))
                ? t
                : null;
            }),
            c = (0, l.useContext)(t8),
            d = tV();
          v(() => {
            !u ||
              !h ||
              u.contains(h) ||
              (h.setAttribute("data-headlessui-portal", ""), u.appendChild(h));
          }, [u, h]),
            v(() => {
              if (h && c) return c.register(h);
            }, [c, h]),
            tY(() => {
              var t;
              u &&
                h &&
                (_(h) && u.contains(h) && u.removeChild(h),
                u.childNodes.length <= 0 &&
                  (null == (t = u.parentElement) || t.removeChild(u)));
            });
          let p = tg();
          return d && u && h
            ? (0, t1.createPortal)(
                p({
                  ourProps: { ref: s },
                  theirProps: i,
                  slot: {},
                  defaultTag: t2,
                  name: "Portal",
                }),
                h
              )
            : null;
        }),
        t4 = l.Fragment,
        t3 = (0, l.createContext)(null),
        t8 = (0, l.createContext)(null),
        t9 = tb(function (t, e) {
          let n = tR(e),
            { enabled: i = !0, ownerDocument: r, ...s } = t,
            o = tg();
          return i
            ? l.createElement(t5, { ...s, ownerDocument: r, ref: n })
            : o({
                ourProps: { ref: n },
                theirProps: s,
                slot: {},
                defaultTag: t2,
                name: "Portal",
              });
        }),
        t6 = tb(function (t, e) {
          let { target: n, ...i } = t,
            r = { ref: tR(e) },
            s = tg();
          return l.createElement(
            t3.Provider,
            { value: n },
            s({
              ourProps: r,
              theirProps: i,
              defaultTag: t4,
              name: "Popover.Group",
            })
          );
        }),
        t7 = Object.assign(t9, { Group: t6 });
      var et = n(37811);
      void 0 !== et &&
        "undefined" != typeof globalThis &&
        "undefined" != typeof Element &&
        (null == (o = null == et ? void 0 : et.env) ? void 0 : o.NODE_ENV) ===
          "test" &&
        void 0 ===
          (null == (a = null == Element ? void 0 : Element.prototype)
            ? void 0
            : a.getAnimations) &&
        (Element.prototype.getAnimations = function () {
          return (
            console.warn(
              "Headless UI has polyfilled `Element.prototype.getAnimations` for your tests.\nPlease install a proper polyfill e.g. `jsdom-testing-mocks`, to silence these warnings.\n\nExample usage:\n```js\nimport { mockAnimationsApi } from 'jsdom-testing-mocks'\nmockAnimationsApi()\n```"
            ),
            []
          );
        });
      var ee = ((t) => (
        (t[(t.None = 0)] = "None"),
        (t[(t.Closed = 1)] = "Closed"),
        (t[(t.Enter = 2)] = "Enter"),
        (t[(t.Leave = 4)] = "Leave"),
        t
      ))(ee || {});
      function en(t) {
        var e;
        return (
          !!(
            t.enter ||
            t.enterFrom ||
            t.enterTo ||
            t.leave ||
            t.leaveFrom ||
            t.leaveTo
          ) ||
          (null != (e = t.as) ? e : el) !== l.Fragment ||
          1 === l.Children.count(t.children)
        );
      }
      let ei = (0, l.createContext)(null);
      ei.displayName = "TransitionContext";
      var er = ((t) => ((t.Visible = "visible"), (t.Hidden = "hidden"), t))(
        er || {}
      );
      let es = (0, l.createContext)(null);
      function eo(t) {
        return "children" in t
          ? eo(t.children)
          : t.current
              .filter((t) => {
                let { el: e } = t;
                return null !== e.current;
              })
              .filter((t) => {
                let { state: e } = t;
                return "visible" === e;
              }).length > 0;
      }
      function ea(t, e) {
        let n = g(t),
          i = (0, l.useRef)([]),
          r = tz(),
          s = tq(),
          o = $(function (t) {
            let e =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : tv.Hidden,
              o = i.current.findIndex((e) => {
                let { el: n } = e;
                return n === t;
              });
            -1 !== o &&
              (F(e, {
                [tv.Unmount]() {
                  i.current.splice(o, 1);
                },
                [tv.Hidden]() {
                  i.current[o].state = "hidden";
                },
              }),
              s.microTask(() => {
                var t;
                !eo(i) && r.current && (null == (t = n.current) || t.call(n));
              }));
          }),
          a = $((t) => {
            let e = i.current.find((e) => {
              let { el: n } = e;
              return n === t;
            });
            return (
              e
                ? "visible" !== e.state && (e.state = "visible")
                : i.current.push({ el: t, state: "visible" }),
              () => o(t, tv.Unmount)
            );
          }),
          u = (0, l.useRef)([]),
          h = (0, l.useRef)(Promise.resolve()),
          c = (0, l.useRef)({ enter: [], leave: [] }),
          d = $((t, n, i) => {
            u.current.splice(0),
              e &&
                (e.chains.current[n] = e.chains.current[n].filter((e) => {
                  let [n] = e;
                  return n !== t;
                })),
              null == e ||
                e.chains.current[n].push([
                  t,
                  new Promise((t) => {
                    u.current.push(t);
                  }),
                ]),
              null == e ||
                e.chains.current[n].push([
                  t,
                  new Promise((t) => {
                    Promise.all(
                      c.current[n].map((t) => {
                        let [e, n] = t;
                        return n;
                      })
                    ).then(() => t());
                  }),
                ]),
              "enter" === n
                ? (h.current = h.current
                    .then(() => (null == e ? void 0 : e.wait.current))
                    .then(() => i(n)))
                : i(n);
          }),
          p = $((t, e, n) => {
            Promise.all(
              c.current[e].splice(0).map((t) => {
                let [e, n] = t;
                return n;
              })
            )
              .then(() => {
                var t;
                null == (t = u.current.shift()) || t();
              })
              .then(() => n(e));
          });
        return (0, l.useMemo)(
          () => ({
            children: i,
            register: a,
            unregister: o,
            onStart: d,
            onStop: p,
            wait: h,
            chains: c,
          }),
          [a, o, i, d, p, c, h]
        );
      }
      es.displayName = "NestingContext";
      let el = l.Fragment,
        eu = tm.RenderStrategy,
        eh = tb(function (t, e) {
          let { show: n, appear: i = !1, unmount: r = !0, ...s } = t,
            o = (0, l.useRef)(null),
            a = tR(...(en(t) ? [o, e] : null === e ? [] : [e]));
          tV();
          let u = tB();
          if (
            (void 0 === n && null !== u && (n = (u & tO.Open) === tO.Open),
            void 0 === n)
          )
            throw Error(
              "A <Transition /> is used but it is missing a `show={true | false}` prop."
            );
          let [h, c] = (0, l.useState)(n ? "visible" : "hidden"),
            d = ea(() => {
              n || c("hidden");
            }),
            [p, f] = (0, l.useState)(!0),
            m = (0, l.useRef)([n]);
          v(() => {
            !1 !== p &&
              m.current[m.current.length - 1] !== n &&
              (m.current.push(n), f(!1));
          }, [m, n]);
          let g = (0, l.useMemo)(
            () => ({ show: n, appear: i, initial: p }),
            [n, i, p]
          );
          v(() => {
            n ? c("visible") : eo(d) || null === o.current || c("hidden");
          }, [n, d]);
          let y = { unmount: r },
            x = $(() => {
              var e;
              p && f(!1), null == (e = t.beforeEnter) || e.call(t);
            }),
            w = $(() => {
              var e;
              p && f(!1), null == (e = t.beforeLeave) || e.call(t);
            }),
            b = tg();
          return l.createElement(
            es.Provider,
            { value: d },
            l.createElement(
              ei.Provider,
              { value: g },
              b({
                ourProps: {
                  ...y,
                  as: l.Fragment,
                  children: l.createElement(ec, {
                    ref: a,
                    ...y,
                    ...s,
                    beforeEnter: x,
                    beforeLeave: w,
                  }),
                },
                theirProps: {},
                defaultTag: l.Fragment,
                features: eu,
                visible: "visible" === h,
                name: "Transition",
              })
            )
          );
        }),
        ec = tb(function (t, e) {
          var n, i;
          let {
              transition: r = !0,
              beforeEnter: s,
              afterEnter: o,
              beforeLeave: a,
              afterLeave: u,
              enter: h,
              enterFrom: c,
              enterTo: d,
              entered: p,
              leave: f,
              leaveFrom: m,
              leaveTo: g,
              ...y
            } = t,
            [x, w] = (0, l.useState)(null),
            E = (0, l.useRef)(null),
            T = en(t),
            P = tR(...(T ? [E, e, w] : null === e ? [] : [e])),
            S = null == (n = y.unmount) || n ? tv.Unmount : tv.Hidden,
            {
              show: A,
              appear: k,
              initial: M,
            } = (function () {
              let t = (0, l.useContext)(ei);
              if (null === t)
                throw Error(
                  "A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />."
                );
              return t;
            })(),
            [C, V] = (0, l.useState)(A ? "visible" : "hidden"),
            D = (function () {
              let t = (0, l.useContext)(es);
              if (null === t)
                throw Error(
                  "A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />."
                );
              return t;
            })(),
            { register: R, unregister: L } = D;
          v(() => R(E), [R, E]),
            v(() => {
              if (S === tv.Hidden && E.current)
                return A && "visible" !== C
                  ? void V("visible")
                  : F(C, { hidden: () => L(E), visible: () => R(E) });
            }, [C, E, R, L, A, S]);
          let j = tV();
          v(() => {
            if (T && j && "visible" === C && null === E.current)
              throw Error(
                "Did you forget to passthrough the `ref` to the actual DOM node?"
              );
          }, [E, C, j, T]);
          let O = M && !k,
            B = k && A && M,
            N = (0, l.useRef)(!1),
            I = ea(() => {
              N.current || (V("hidden"), L(E));
            }, D),
            W = $((t) => {
              (N.current = !0),
                I.onStart(E, t ? "enter" : "leave", (t) => {
                  "enter" === t
                    ? null == s || s()
                    : "leave" === t && (null == a || a());
                });
            }),
            U = $((t) => {
              let e = t ? "enter" : "leave";
              (N.current = !1),
                I.onStop(E, e, (t) => {
                  "enter" === t
                    ? null == o || o()
                    : "leave" === t && (null == u || u());
                }),
                "leave" !== e || eo(I) || (V("hidden"), L(E));
            });
          (0, l.useEffect)(() => {
            (T && r) || (W(A), U(A));
          }, [A, T, r]);
          let [, G] = (function (t, e, n, i) {
              let [r, s] = (0, l.useState)(n),
                {
                  hasFlag: o,
                  addFlag: a,
                  removeFlag: u,
                } = (function () {
                  let t =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : 0,
                    [e, n] = (0, l.useState)(t),
                    i = (0, l.useCallback)((t) => n(t), [e]),
                    r = (0, l.useCallback)((t) => n((e) => e | t), [e]),
                    s = (0, l.useCallback)((t) => (e & t) === t, [e]);
                  return {
                    flags: e,
                    setFlag: i,
                    addFlag: r,
                    hasFlag: s,
                    removeFlag: (0, l.useCallback)(
                      (t) => n((e) => e & ~t),
                      [n]
                    ),
                    toggleFlag: (0, l.useCallback)((t) => n((e) => e ^ t), [n]),
                  };
                })(t && r ? 3 : 0),
                h = (0, l.useRef)(!1),
                c = (0, l.useRef)(!1);
              return (
                v(() => {
                  var r;
                  if (t) {
                    if ((n && s(!0), !e)) {
                      n && a(3);
                      return;
                    }
                    return (
                      null == (r = null == i ? void 0 : i.start) ||
                        r.call(i, n),
                      (function (t, e) {
                        let { prepare: n, run: i, done: r, inFlight: s } = e,
                          o = b();
                        return (
                          (function (t, e) {
                            let { inFlight: n, prepare: i } = e;
                            if (null != n && n.current) return i();
                            let r = t.style.transition;
                            (t.style.transition = "none"),
                              i(),
                              t.offsetHeight,
                              (t.style.transition = r);
                          })(t, { prepare: n, inFlight: s }),
                          o.nextFrame(() => {
                            i(),
                              o.requestAnimationFrame(() => {
                                o.add(
                                  (function (t, e) {
                                    var n, i;
                                    let r = b();
                                    if (!t) return r.dispose;
                                    let s = !1;
                                    r.add(() => {
                                      s = !0;
                                    });
                                    let o =
                                      null !=
                                      (i =
                                        null == (n = t.getAnimations)
                                          ? void 0
                                          : n
                                              .call(t)
                                              .filter(
                                                (t) =>
                                                  t instanceof CSSTransition
                                              ))
                                        ? i
                                        : [];
                                    return (
                                      0 === o.length
                                        ? e()
                                        : Promise.allSettled(
                                            o.map((t) => t.finished)
                                          ).then(() => {
                                            s || e();
                                          }),
                                      r.dispose
                                    );
                                  })(t, r)
                                );
                              });
                          }),
                          o.dispose
                        );
                      })(e, {
                        inFlight: h,
                        prepare() {
                          c.current
                            ? (c.current = !1)
                            : (c.current = h.current),
                            (h.current = !0),
                            c.current || (n ? (a(3), u(4)) : (a(4), u(2)));
                        },
                        run() {
                          c.current
                            ? n
                              ? (u(3), a(4))
                              : (u(4), a(3))
                            : n
                            ? u(1)
                            : a(1);
                        },
                        done() {
                          var t;
                          (c.current &&
                            "function" == typeof e.getAnimations &&
                            e.getAnimations().length > 0) ||
                            ((h.current = !1),
                            u(7),
                            n || s(!1),
                            null == (t = null == i ? void 0 : i.end) ||
                              t.call(i, n));
                        },
                      })
                    );
                  }
                }, [t, n, e, tq()]),
                t
                  ? [
                      r,
                      {
                        closed: o(1),
                        enter: o(2),
                        leave: o(4),
                        transition: o(2) || o(4),
                      },
                    ]
                  : [
                      n,
                      {
                        closed: void 0,
                        enter: void 0,
                        leave: void 0,
                        transition: void 0,
                      },
                    ]
              );
            })(!(!r || !T || !j || O), x, A, { start: W, end: U }),
            H = tE({
              ref: P,
              className:
                (null ==
                (i = tf(
                  y.className,
                  B && h,
                  B && c,
                  G.enter && h,
                  G.enter && G.closed && c,
                  G.enter && !G.closed && d,
                  G.leave && f,
                  G.leave && !G.closed && m,
                  G.leave && G.closed && g,
                  !G.transition && A && p
                ))
                  ? void 0
                  : i.trim()) || void 0,
              ...(function (t) {
                let e = {};
                for (let n in t) !0 === t[n] && (e["data-".concat(n)] = "");
                return e;
              })(G),
            }),
            q = 0;
          "visible" === C && (q |= tO.Open),
            "hidden" === C && (q |= tO.Closed),
            A && "hidden" === C && (q |= tO.Opening),
            A || "visible" !== C || (q |= tO.Closing);
          let z = tg();
          return l.createElement(
            es.Provider,
            { value: I },
            l.createElement(
              tN,
              { value: q },
              z({
                ourProps: H,
                theirProps: y,
                defaultTag: el,
                features: eu,
                visible: "visible" === C,
                name: "Transition.Child",
              })
            )
          );
        }),
        ed = tb(function (t, e) {
          let n = null !== (0, l.useContext)(ei),
            i = null !== tB();
          return l.createElement(
            l.Fragment,
            null,
            !n && i
              ? l.createElement(eh, { ref: e, ...t })
              : l.createElement(ec, { ref: e, ...t })
          );
        }),
        ep = Object.assign(eh, { Child: ed, Root: eh });
      var ef = ((t) => (
          (t[(t.Open = 0)] = "Open"), (t[(t.Closed = 1)] = "Closed"), t
        ))(ef || {}),
        em = ((t) => ((t[(t.SetTitleId = 0)] = "SetTitleId"), t))(em || {});
      let ev = {
          0: (t, e) => (t.titleId === e.id ? t : { ...t, titleId: e.id }),
        },
        eg = (0, l.createContext)(null);
      function ey(t) {
        let e = (0, l.useContext)(eg);
        if (null === e) {
          let e = Error(
            "<".concat(t, " /> is missing a parent <Dialog /> component.")
          );
          throw (Error.captureStackTrace && Error.captureStackTrace(e, ey), e);
        }
        return e;
      }
      function ex(t, e) {
        return F(e.type, ev, t, e);
      }
      eg.displayName = "DialogContext";
      let ew = tb(function (t, e) {
          let n,
            i,
            r,
            s,
            o,
            a,
            u,
            c,
            d,
            p,
            f = (0, l.useId)(),
            {
              id: m = "headlessui-dialog-".concat(f),
              open: x,
              onClose: w,
              initialFocus: E,
              role: T = "dialog",
              autoFocus: P = !0,
              __demoMode: S = !1,
              unmount: A = !1,
              ...k
            } = t,
            M = (0, l.useRef)(!1);
          T =
            "dialog" === T || "alertdialog" === T
              ? T
              : (M.current ||
                  ((M.current = !0),
                  console.warn(
                    "Invalid role [".concat(
                      T,
                      "] passed to <Dialog />. Only `dialog` and and `alertdialog` are supported. Using `dialog` instead."
                    )
                  )),
                "dialog");
          let C = tB();
          void 0 === x && null !== C && (x = (C & tO.Open) === tO.Open);
          let V = (0, l.useRef)(null),
            D = tR(V, e),
            R = tp(V),
            L = +!x,
            [j, O] = (0, l.useReducer)(ex, {
              titleId: null,
              descriptionId: null,
              panelRef: (0, l.createRef)(),
            }),
            B = $(() => w(!1)),
            N = $((t) => O({ type: 0, id: t })),
            I = !!tV() && 0 === L,
            [U, H] =
              ((n = (0, l.useContext)(t8)),
              (i = (0, l.useRef)([])),
              (r = $(
                (t) => (i.current.push(t), n && n.register(t), () => s(t))
              )),
              (s = $((t) => {
                let e = i.current.indexOf(t);
                -1 !== e && i.current.splice(e, 1), n && n.unregister(t);
              })),
              (o = (0, l.useMemo)(
                () => ({ register: r, unregister: s, portals: i }),
                [r, s, i]
              )),
              [
                i,
                (0, l.useMemo)(
                  () =>
                    function (t) {
                      let { children: e } = t;
                      return l.createElement(t8.Provider, { value: o }, e);
                    },
                  [o]
                ),
              ]),
            Y = tM(),
            { resolveContainers: X } = (function () {
              let {
                  defaultContainers: t = [],
                  portals: e,
                  mainTreeNode: n,
                } = arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
                i = tp(n),
                r = $(() => {
                  var r, s;
                  let o = [];
                  for (let e of t)
                    null !== e &&
                      (Q(e)
                        ? o.push(e)
                        : "current" in e && Q(e.current) && o.push(e.current));
                  if (null != e && e.current)
                    for (let t of e.current) o.push(t);
                  for (let t of null !=
                  (r =
                    null == i
                      ? void 0
                      : i.querySelectorAll("html > *, body > *"))
                    ? r
                    : [])
                    t !== document.body &&
                      t !== document.head &&
                      Q(t) &&
                      "headlessui-portal-root" !== t.id &&
                      ((n &&
                        (t.contains(n) ||
                          t.contains(
                            null == (s = null == n ? void 0 : n.getRootNode())
                              ? void 0
                              : s.host
                          ))) ||
                        o.some((e) => t.contains(e)) ||
                        o.push(t));
                  return o;
                });
              return {
                resolveContainers: r,
                contains: $((t) => r().some((e) => e.contains(t))),
              };
            })({
              mainTreeNode: Y,
              portals: U,
              defaultContainers: [
                {
                  get current() {
                    var _;
                    return null != (_ = j.panelRef.current) ? _ : V.current;
                  },
                },
              ],
            }),
            te = null !== C && (C & tO.Closing) === tO.Closing;
          !(function (t) {
            let { allowed: e, disallowed: n } =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              i = q(t, "inert-others");
            v(() => {
              var t, r;
              if (!i) return;
              let s = b();
              for (let e of null != (t = null == n ? void 0 : n()) ? t : [])
                e && s.add(K(e));
              let o = null != (r = null == e ? void 0 : e()) ? r : [];
              for (let t of o) {
                if (!t) continue;
                let e = z(t);
                if (!e) continue;
                let n = t.parentElement;
                for (; n && n !== e.body; ) {
                  for (let t of n.children)
                    o.some((e) => t.contains(e)) || s.add(K(t));
                  n = n.parentElement;
                }
              }
              return s.dispose;
            }, [i, e, n]);
          })(!S && !te && I, {
            allowed: $(() => {
              var t, e;
              return [
                null !=
                (e =
                  null == (t = V.current)
                    ? void 0
                    : t.closest("[data-headlessui-portal]"))
                  ? e
                  : null,
              ];
            }),
            disallowed: $(() => {
              var t;
              return [
                null !=
                (t =
                  null == Y
                    ? void 0
                    : Y.closest("body > *:not(#headlessui-portal-root)"))
                  ? t
                  : null,
              ];
            }),
          });
          let tn = W.get(null);
          v(() => {
            if (I) return tn.actions.push(m), () => tn.actions.pop(m);
          }, [tn, m, I]);
          let ti = G(
            tn,
            (0, l.useCallback)((t) => tn.selectors.isTop(t, m), [tn, m])
          );
          (a = g((t) => {
            t.preventDefault(), B();
          })),
            (u = (0, l.useCallback)(
              function (t, e) {
                if (t.defaultPrevented) return;
                let n = e(t);
                if (
                  null !== n &&
                  n.getRootNode().contains(n) &&
                  n.isConnected
                ) {
                  for (let e of (function t(e) {
                    return "function" == typeof e
                      ? t(e())
                      : Array.isArray(e) || e instanceof Set
                      ? e
                      : [e];
                  })(X))
                    if (
                      null !== e &&
                      (e.contains(n) ||
                        (t.composed && t.composedPath().includes(e)))
                    )
                      return;
                  return (
                    (function (t) {
                      var e;
                      let n =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : 0;
                      return (
                        t !== (null == (e = z(t)) ? void 0 : e.body) &&
                        F(n, {
                          0: () => t.matches(tt),
                          1() {
                            let e = t;
                            for (; null !== e; ) {
                              if (e.matches(tt)) return !0;
                              e = e.parentElement;
                            }
                            return !1;
                          },
                        })
                      );
                    })(n, ts.Loose) ||
                      -1 === n.tabIndex ||
                      t.preventDefault(),
                    a.current(t, n)
                  );
                }
              },
              [a, X]
            )),
            (c = (0, l.useRef)(null)),
            tc(
              ti,
              "pointerdown",
              (t) => {
                var e, n;
                th() ||
                  (c.current =
                    (null ==
                    (n = null == (e = t.composedPath) ? void 0 : e.call(t))
                      ? void 0
                      : n[0]) || t.target);
              },
              !0
            ),
            tc(
              ti,
              "pointerup",
              (t) => {
                if (th() || !c.current) return;
                let e = c.current;
                return (c.current = null), u(t, () => e);
              },
              !0
            ),
            (d = (0, l.useRef)({ x: 0, y: 0 })),
            tc(
              ti,
              "touchstart",
              (t) => {
                (d.current.x = t.touches[0].clientX),
                  (d.current.y = t.touches[0].clientY);
              },
              !0
            ),
            tc(
              ti,
              "touchend",
              (t) => {
                let e = {
                  x: t.changedTouches[0].clientX,
                  y: t.changedTouches[0].clientY,
                };
                if (
                  !(
                    Math.abs(e.x - d.current.x) >= 30 ||
                    Math.abs(e.y - d.current.y) >= 30
                  )
                )
                  return u(t, () => (J(t.target) ? t.target : null));
              },
              !0
            ),
            td(
              ti,
              "blur",
              (t) =>
                u(t, () => {
                  var t;
                  return Z((t = window.document.activeElement)) &&
                    "IFRAME" === t.nodeName
                    ? window.document.activeElement
                    : null;
                }),
              !0
            ),
            (function (t) {
              let e =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : "undefined" != typeof document
                    ? document.defaultView
                    : null,
                n = arguments.length > 2 ? arguments[2] : void 0,
                i = q(t, "escape");
              y(e, "keydown", (t) => {
                i && (t.defaultPrevented || (t.key === h.Escape && n(t)));
              });
            })(ti, null == R ? void 0 : R.defaultView, (t) => {
              t.preventDefault(),
                t.stopPropagation(),
                document.activeElement &&
                  "blur" in document.activeElement &&
                  "function" == typeof document.activeElement.blur &&
                  document.activeElement.blur(),
                B();
            }),
            (function (t, e) {
              let n =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : () => [document.body];
              !(function (t, e) {
                let n =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : () => ({ containers: [] }),
                  i = (0, l.useSyncExternalStore)(
                    tC.subscribe,
                    tC.getSnapshot,
                    tC.getSnapshot
                  ),
                  r = e ? i.get(e) : void 0;
                r && r.count,
                  v(() => {
                    if (!(!e || !t))
                      return (
                        tC.dispatch("PUSH", e, n),
                        () => tC.dispatch("POP", e, n)
                      );
                  }, [t, e]);
              })(q(t, "scroll-lock"), e, (t) => {
                var e;
                return {
                  containers: [...(null != (e = t.containers) ? e : []), n],
                };
              });
            })(!S && !te && I, R, X),
            (p = g((t) => {
              let e = t.getBoundingClientRect();
              0 === e.x && 0 === e.y && 0 === e.width && 0 === e.height && B();
            })),
            (0, l.useEffect)(() => {
              if (!I) return;
              let t = null === V ? null : Z(V) ? V : V.current;
              if (!t) return;
              let e = b();
              if ("undefined" != typeof ResizeObserver) {
                let n = new ResizeObserver(() => p.current(t));
                n.observe(t), e.add(() => n.disconnect());
              }
              if ("undefined" != typeof IntersectionObserver) {
                let n = new IntersectionObserver(() => p.current(t));
                n.observe(t), e.add(() => n.disconnect());
              }
              return () => e.dispose();
            }, [V, p, I]);
          let [tr, to] = (function () {
              let [t, e] = (0, l.useState)([]);
              return [
                t.length > 0 ? t.join(" ") : void 0,
                (0, l.useMemo)(
                  () =>
                    function (t) {
                      let n = $(
                          (t) => (
                            e((e) => [...e, t]),
                            () =>
                              e((e) => {
                                let n = e.slice(),
                                  i = n.indexOf(t);
                                return -1 !== i && n.splice(i, 1), n;
                              })
                          )
                        ),
                        i = (0, l.useMemo)(
                          () => ({
                            register: n,
                            slot: t.slot,
                            name: t.name,
                            props: t.props,
                            value: t.value,
                          }),
                          [n, t.slot, t.name, t.props, t.value]
                        );
                      return l.createElement(
                        tG.Provider,
                        { value: i },
                        t.children
                      );
                    },
                  [e]
                ),
              ];
            })(),
            ta = (0, l.useMemo)(
              () => [
                { dialogState: L, close: B, setTitleId: N, unmount: A },
                j,
              ],
              [L, j, B, N, A]
            ),
            tl = (0, l.useMemo)(() => ({ open: 0 === L }), [L]),
            tu = {
              ref: D,
              id: m,
              role: T,
              tabIndex: -1,
              "aria-modal": S ? void 0 : 0 === L || void 0,
              "aria-labelledby": j.titleId,
              "aria-describedby": tr,
              unmount: A,
            },
            tf = !(function () {
              var t;
              let [e] = (0, l.useState)(() =>
                  "undefined" != typeof window &&
                  "function" == typeof window.matchMedia
                    ? window.matchMedia("(pointer: coarse)")
                    : null
                ),
                [n, i] = (0, l.useState)(
                  null != (t = null == e ? void 0 : e.matches) && t
                );
              return (
                v(() => {
                  if (e)
                    return (
                      e.addEventListener("change", t),
                      () => e.removeEventListener("change", t)
                    );
                  function t(t) {
                    i(t.matches);
                  }
                }, [e]),
                n
              );
            })(),
            tm = tZ.None;
          I &&
            !S &&
            ((tm |= tZ.RestoreFocus),
            (tm |= tZ.TabLock),
            P && (tm |= tZ.AutoFocus),
            tf && (tm |= tZ.InitialFocus));
          let tv = tg();
          return l.createElement(
            tI,
            null,
            l.createElement(
              tU,
              { force: !0 },
              l.createElement(
                t7,
                null,
                l.createElement(
                  eg.Provider,
                  { value: ta },
                  l.createElement(
                    t6,
                    { target: V },
                    l.createElement(
                      tU,
                      { force: !1 },
                      l.createElement(
                        to,
                        { slot: tl },
                        l.createElement(
                          H,
                          null,
                          l.createElement(
                            tJ,
                            {
                              initialFocus: E,
                              initialFocusFallback: V,
                              containers: X,
                              features: tm,
                            },
                            l.createElement(
                              tL,
                              { value: B },
                              tv({
                                ourProps: tu,
                                theirProps: k,
                                slot: tl,
                                defaultTag: eb,
                                features: eE,
                                visible: 0 === L,
                                name: "Dialog",
                              })
                            )
                          )
                        )
                      )
                    )
                  )
                )
              )
            )
          );
        }),
        eb = "div",
        eE = tm.RenderStrategy | tm.Static,
        eT = tb(function (t, e) {
          let { transition: n = !1, open: i, ...r } = t,
            s = tB(),
            o = t.hasOwnProperty("open") || null !== s,
            a = t.hasOwnProperty("onClose");
          if (!o && !a)
            throw Error(
              "You have to provide an `open` and an `onClose` prop to the `Dialog` component."
            );
          if (!o)
            throw Error(
              "You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop."
            );
          if (!a)
            throw Error(
              "You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop."
            );
          if (!s && "boolean" != typeof t.open)
            throw Error(
              "You provided an `open` prop to the `Dialog`, but the value is not a boolean. Received: ".concat(
                t.open
              )
            );
          if ("function" != typeof t.onClose)
            throw Error(
              "You provided an `onClose` prop to the `Dialog`, but the value is not a function. Received: ".concat(
                t.onClose
              )
            );
          return (void 0 !== i || n) && !r.static
            ? l.createElement(
                tk,
                null,
                l.createElement(
                  ep,
                  { show: i, transition: n, unmount: r.unmount },
                  l.createElement(ew, { ref: e, ...r })
                )
              )
            : l.createElement(
                tk,
                null,
                l.createElement(ew, { ref: e, open: i, ...r })
              );
        }),
        eP = tb(function (t, e) {
          let n = (0, l.useId)(),
            {
              id: i = "headlessui-dialog-panel-".concat(n),
              transition: r = !1,
              ...s
            } = t,
            [{ dialogState: o, unmount: a }, u] = ey("Dialog.Panel"),
            h = tR(e, u.panelRef),
            c = (0, l.useMemo)(() => ({ open: 0 === o }), [o]),
            d = $((t) => {
              t.stopPropagation();
            }),
            p = r ? ed : l.Fragment,
            f = tg();
          return l.createElement(
            p,
            { ...(r ? { unmount: a } : {}) },
            f({
              ourProps: { ref: h, id: i, onClick: d },
              theirProps: s,
              slot: c,
              defaultTag: "div",
              name: "Dialog.Panel",
            })
          );
        }),
        eS =
          (tb(function (t, e) {
            let { transition: n = !1, ...i } = t,
              [{ dialogState: r, unmount: s }] = ey("Dialog.Backdrop"),
              o = (0, l.useMemo)(() => ({ open: 0 === r }), [r]),
              a = n ? ed : l.Fragment,
              u = tg();
            return l.createElement(
              a,
              { ...(n ? { unmount: s } : {}) },
              u({
                ourProps: { ref: e, "aria-hidden": !0 },
                theirProps: i,
                slot: o,
                defaultTag: "div",
                name: "Dialog.Backdrop",
              })
            );
          }),
          tb(function (t, e) {
            let n = (0, l.useId)(),
              { id: i = "headlessui-dialog-title-".concat(n), ...r } = t,
              [{ dialogState: s, setTitleId: o }] = ey("Dialog.Title"),
              a = tR(e);
            (0, l.useEffect)(() => (o(i), () => o(null)), [i, o]);
            let u = (0, l.useMemo)(() => ({ open: 0 === s }), [s]);
            return tg()({
              ourProps: { ref: a, id: i },
              theirProps: r,
              slot: u,
              defaultTag: "h2",
              name: "Dialog.Title",
            });
          })),
        eA = Object.assign(eT, { Panel: eP, Title: eS, Description: tH });
    },
    64303: (t, e, n) => {
      n.d(e, { V: () => a });
      var i = n(85110),
        r = n(71819),
        s = n(86454),
        o = n(49158);
      let a = {
        test: (0, o.$)("hsl", "hue"),
        parse: (0, o.q)("hue", "saturation", "lightness"),
        transform: ({ hue: t, saturation: e, lightness: n, alpha: o = 1 }) =>
          "hsla(" +
          Math.round(t) +
          ", " +
          r.KN.transform((0, s.a)(e)) +
          ", " +
          r.KN.transform((0, s.a)(n)) +
          ", " +
          (0, s.a)(i.X4.transform(o)) +
          ")",
      };
    },
    71819: (t, e, n) => {
      n.d(e, {
        KN: () => s,
        gQ: () => u,
        px: () => o,
        uj: () => r,
        vh: () => a,
        vw: () => l,
      });
      let i = (t) => ({
          test: (e) =>
            "string" == typeof e && e.endsWith(t) && 1 === e.split(" ").length,
          parse: parseFloat,
          transform: (e) => `${e}${t}`,
        }),
        r = i("deg"),
        s = i("%"),
        o = i("px"),
        a = i("vh"),
        l = i("vw"),
        u = {
          ...s,
          parse: (t) => s.parse(t) / 100,
          transform: (t) => s.transform(100 * t),
        };
    },
    72473: (t, e, n) => {
      n.d(e, { k: () => i });
      let i = (t, e, n) => t + (e - t) * n;
    },
    76904: (t, e, n) => {
      function i(t, e) {
        -1 === t.indexOf(e) && t.push(e);
      }
      function r(t, e) {
        let n = t.indexOf(e);
        n > -1 && t.splice(n, 1);
      }
      n.d(e, { Ai: () => r, Kq: () => i });
    },
    78142: (t, e, n) => {
      let i, r;
      n.d(e, { L: () => U });
      var s = n(94559),
        o = n(7506),
        a = n(40329),
        l = n(80518);
      function u(t, e) {
        let n,
          i = () => {
            let { currentTime: i } = e,
              r = (null === i ? 0 : i.value) / 100;
            n !== r && t(r), (n = r);
          };
        return l.Gt.preUpdate(i, !0), () => (0, l.WG)(i);
      }
      var h = n(39435),
        c = n(15673);
      let d = new WeakMap();
      function p({ target: t, contentRect: e, borderBoxSize: n }) {
        d.get(t)?.forEach((i) => {
          i({
            target: t,
            contentSize: e,
            get size() {
              if (n) {
                let { inlineSize: t, blockSize: e } = n[0];
                return { width: t, height: e };
              }
              if (t instanceof SVGElement && "getBBox" in t) return t.getBBox();
              return { width: t.offsetWidth, height: t.offsetHeight };
            },
          });
        });
      }
      function f(t) {
        t.forEach(p);
      }
      let m = new Set();
      var v = n(40438),
        g = n(23316);
      let y = () => ({
          current: 0,
          offset: [],
          progress: 0,
          scrollLength: 0,
          targetOffset: 0,
          targetLength: 0,
          containerLength: 0,
          velocity: 0,
        }),
        x = () => ({ time: 0, x: y(), y: y() }),
        w = {
          x: { length: "Width", position: "Left" },
          y: { length: "Height", position: "Top" },
        };
      function b(t, e, n, i) {
        let r = n[e],
          { length: s, position: o } = w[e],
          a = r.current,
          l = n.time;
        (r.current = t[`scroll${o}`]),
          (r.scrollLength = t[`scroll${s}`] - t[`client${s}`]),
          (r.offset.length = 0),
          (r.offset[0] = 0),
          (r.offset[1] = r.scrollLength),
          (r.progress = (0, v.q)(0, r.scrollLength, r.current));
        let u = i - l;
        r.velocity = u > 50 ? 0 : (0, g.f)(r.current - a, u);
      }
      var E = n(31562),
        T = n(81574),
        P = n(88826);
      let S = { start: 0, center: 0.5, end: 1 };
      function A(t, e, n = 0) {
        let i = 0;
        if ((t in S && (t = S[t]), "string" == typeof t)) {
          let e = parseFloat(t);
          t.endsWith("px")
            ? (i = e)
            : t.endsWith("%")
            ? (t = e / 100)
            : t.endsWith("vw")
            ? (i = (e / 100) * document.documentElement.clientWidth)
            : t.endsWith("vh")
            ? (i = (e / 100) * document.documentElement.clientHeight)
            : (t = e);
        }
        return "number" == typeof t && (i = e * t), n + i;
      }
      let k = [0, 0],
        M = {
          All: [
            [0, 0],
            [1, 1],
          ],
        },
        C = { x: 0, y: 0 },
        V = new WeakMap(),
        D = new WeakMap(),
        R = new WeakMap(),
        F = (t) => (t === document.documentElement ? window : t);
      function L(t, { container: e = document.documentElement, ...n } = {}) {
        let s = R.get(e);
        s || ((s = new Set()), R.set(e, s));
        let o = (function (t, e, n, i = {}) {
          return {
            measure: () =>
              (function (t, e = t, n) {
                if (((n.x.targetOffset = 0), (n.y.targetOffset = 0), e !== t)) {
                  let i = e;
                  for (; i && i !== t; )
                    (n.x.targetOffset += i.offsetLeft),
                      (n.y.targetOffset += i.offsetTop),
                      (i = i.offsetParent);
                }
                (n.x.targetLength = e === t ? e.scrollWidth : e.clientWidth),
                  (n.y.targetLength =
                    e === t ? e.scrollHeight : e.clientHeight),
                  (n.x.containerLength = t.clientWidth),
                  (n.y.containerLength = t.clientHeight);
              })(t, i.target, n),
            update: (e) => {
              b(t, "x", n, e),
                b(t, "y", n, e),
                (n.time = e),
                (i.offset || i.target) &&
                  (function (t, e, n) {
                    let { offset: i = M.All } = n,
                      { target: r = t, axis: s = "y" } = n,
                      o = "y" === s ? "height" : "width",
                      a =
                        r !== t
                          ? (function (t, e) {
                              let n = { x: 0, y: 0 },
                                i = t;
                              for (; i && i !== e; )
                                if (i instanceof HTMLElement)
                                  (n.x += i.offsetLeft),
                                    (n.y += i.offsetTop),
                                    (i = i.offsetParent);
                                else if ("svg" === i.tagName) {
                                  let t = i.getBoundingClientRect(),
                                    e = (i =
                                      i.parentElement).getBoundingClientRect();
                                  (n.x += t.left - e.left),
                                    (n.y += t.top - e.top);
                                } else if (i instanceof SVGGraphicsElement) {
                                  let { x: t, y: e } = i.getBBox();
                                  (n.x += t), (n.y += e);
                                  let r = null,
                                    s = i.parentNode;
                                  for (; !r; )
                                    "svg" === s.tagName && (r = s),
                                      (s = i.parentNode);
                                  i = r;
                                } else break;
                              return n;
                            })(r, t)
                          : C,
                      l =
                        r === t
                          ? { width: t.scrollWidth, height: t.scrollHeight }
                          : "getBBox" in r && "svg" !== r.tagName
                          ? r.getBBox()
                          : { width: r.clientWidth, height: r.clientHeight },
                      u = { width: t.clientWidth, height: t.clientHeight };
                    e[s].offset.length = 0;
                    let h = !e[s].interpolate,
                      c = i.length;
                    for (let t = 0; t < c; t++) {
                      let n = (function (t, e, n, i) {
                        let r = Array.isArray(t) ? t : k,
                          s = 0,
                          o = 0;
                        return (
                          "number" == typeof t
                            ? (r = [t, t])
                            : "string" == typeof t &&
                              (r = (t = t.trim()).includes(" ")
                                ? t.split(" ")
                                : [t, S[t] ? t : "0"]),
                          (s = A(r[0], n, i)) - A(r[1], e)
                        );
                      })(i[t], u[o], l[o], a[s]);
                      h || n === e[s].interpolatorOffsets[t] || (h = !0),
                        (e[s].offset[t] = n);
                    }
                    h &&
                      ((e[s].interpolate = (0, E.G)(e[s].offset, (0, T.Z)(i), {
                        clamp: !1,
                      })),
                      (e[s].interpolatorOffsets = [...e[s].offset])),
                      (e[s].progress = (0, P.q)(
                        0,
                        1,
                        e[s].interpolate(e[s].current)
                      ));
                  })(t, n, i);
            },
            notify: () => e(n),
          };
        })(e, t, x(), n);
        if ((s.add(o), !V.has(e))) {
          let t = () => {
              for (let t of s) t.measure();
            },
            n = () => {
              for (let t of s) t.update(l.uv.timestamp);
            },
            o = () => {
              for (let t of s) t.notify();
            },
            a = () => {
              l.Gt.read(t, !1, !0),
                l.Gt.read(n, !1, !0),
                l.Gt.preUpdate(o, !1, !0);
            };
          V.set(e, a);
          let u = F(e);
          window.addEventListener("resize", a, { passive: !0 }),
            e !== document.documentElement &&
              D.set(
                e,
                "function" == typeof e
                  ? (m.add(e),
                    r ||
                      ((r = () => {
                        let t = {
                            width: window.innerWidth,
                            height: window.innerHeight,
                          },
                          e = { target: window, size: t, contentSize: t };
                        m.forEach((t) => t(e));
                      }),
                      window.addEventListener("resize", r)),
                    () => {
                      m.delete(e), !m.size && r && (r = void 0);
                    })
                  : (function (t, e) {
                      i ||
                        ("undefined" != typeof ResizeObserver &&
                          (i = new ResizeObserver(f)));
                      let n = (0, c.K)(t);
                      return (
                        n.forEach((t) => {
                          let n = d.get(t);
                          n || ((n = new Set()), d.set(t, n)),
                            n.add(e),
                            i?.observe(t);
                        }),
                        () => {
                          n.forEach((t) => {
                            let n = d.get(t);
                            n?.delete(e), n?.size || i?.unobserve(t);
                          });
                        }
                      );
                    })(e, a)
              ),
            u.addEventListener("scroll", a, { passive: !0 });
        }
        let a = V.get(e);
        return (
          l.Gt.read(a, !1, !0),
          () => {
            (0, l.WG)(a);
            let t = R.get(e);
            if (!t || (t.delete(o), t.size)) return;
            let n = V.get(e);
            V.delete(e),
              n &&
                (F(e).removeEventListener("scroll", n),
                D.get(e)?.(),
                window.removeEventListener("resize", n));
          }
        );
      }
      let j = new Map();
      function O({ source: t, container: e, ...n }) {
        let { axis: i } = n;
        t && (e = t);
        let r = j.get(e) ?? new Map();
        j.set(e, r);
        let s = n.target ?? "self",
          o = r.get(s) ?? {},
          a = i + (n.offset ?? []).join(",");
        return (
          o[a] ||
            (o[a] =
              !n.target && (0, h.J)()
                ? new ScrollTimeline({ source: e, axis: i })
                : (function (t) {
                    let e = { value: 0 },
                      n = L((n) => {
                        e.value = 100 * n[t.axis].progress;
                      }, t);
                    return { currentTime: e, cancel: n };
                  })({ container: e, ...n })),
          o[a]
        );
      }
      var B = n(18038),
        N = n(86119);
      function I(t, e) {
        (0, o.$)(
          !!(!e || e.current),
          `You have defined a ${t} options but the provided ref is not yet hydrated, probably because it's defined higher up the tree. Try calling useScroll() in the same component as the ref, or setting its \`layoutEffect: false\` option.`
        );
      }
      let W = () => ({
        scrollX: (0, s.OQ)(0),
        scrollY: (0, s.OQ)(0),
        scrollXProgress: (0, s.OQ)(0),
        scrollYProgress: (0, s.OQ)(0),
      });
      function U({ container: t, target: e, layoutEffect: n = !0, ...i } = {}) {
        let r = (0, B.M)(W);
        return (
          (n ? N.E : a.useEffect)(
            () => (
              I("target", e),
              I("container", t),
              (function (
                t,
                {
                  axis: e = "y",
                  container: n = document.documentElement,
                  ...i
                } = {}
              ) {
                var r, s;
                n === document.documentElement &&
                  (("y" === e && n.scrollHeight === n.clientHeight) ||
                    ("x" === e && n.scrollWidth === n.clientWidth)) &&
                  (n = document.body);
                let o = { axis: e, container: n, ...i };
                return "function" == typeof t
                  ? ((r = t),
                    (s = o),
                    2 === r.length
                      ? L((t) => {
                          r(t[s.axis].progress, t);
                        }, s)
                      : u(r, O(s)))
                  : (function (t, e) {
                      let n = O(e);
                      return t.attachTimeline({
                        timeline: e.target ? void 0 : n,
                        observe: (t) => (
                          t.pause(),
                          u((e) => {
                            t.time = t.duration * e;
                          }, n)
                        ),
                      });
                    })(t, o);
              })(
                (t, { x: e, y: n }) => {
                  r.scrollX.set(e.current),
                    r.scrollXProgress.set(e.progress),
                    r.scrollY.set(n.current),
                    r.scrollYProgress.set(n.progress);
                },
                {
                  ...i,
                  container: t?.current || void 0,
                  target: e?.current || void 0,
                }
              )
            ),
            [t, e, JSON.stringify(i.offset)]
          ),
          r
        );
      }
    },
    80518: (t, e, n) => {
      n.d(e, { Gt: () => r, PP: () => a, WG: () => s, uv: () => o });
      var i = n(29711);
      let {
        schedule: r,
        cancel: s,
        state: o,
        steps: a,
      } = (0, n(9537).I)(
        "undefined" != typeof requestAnimationFrame
          ? requestAnimationFrame
          : i.l,
        !0
      );
    },
    80851: (t, e, n) => {
      n.d(e, { F: () => r });
      let i = (t, e) => (n) => e(t(n)),
        r = (...t) => t.reduce(i);
    },
    81574: (t, e, n) => {
      n.d(e, { Z: () => s });
      var i = n(40438),
        r = n(72473);
      function s(t) {
        let e = [0];
        return (
          !(function (t, e) {
            let n = t[t.length - 1];
            for (let s = 1; s <= e; s++) {
              let o = (0, i.q)(0, e, s);
              t.push((0, r.k)(n, 1, o));
            }
          })(e, t.length - 1),
          e
        );
      }
    },
    83707: (t, e, n) => {
      n.d(e, { xQ: () => s });
      var i = n(40329),
        r = n(26236);
      function s(t = !0) {
        let e = (0, i.useContext)(r.t);
        if (null === e) return [!0, null];
        let { isPresent: n, onExitComplete: o, register: a } = e,
          l = (0, i.useId)();
        (0, i.useEffect)(() => {
          if (t) return a(l);
        }, [t]);
        let u = (0, i.useCallback)(() => t && o && o(l), [l, o, t]);
        return !n && o ? [!1, u] : [!0];
      }
    },
    84261: (t, e, n) => {
      n.d(e, { V: () => h, f: () => f });
      var i = n(91493);
      let r =
        /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
      var s = n(52379),
        o = n(86454);
      let a = "number",
        l = "color",
        u =
          /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
      function h(t) {
        let e = t.toString(),
          n = [],
          r = { color: [], number: [], var: [] },
          s = [],
          o = 0,
          h = e
            .replace(
              u,
              (t) => (
                i.y.test(t)
                  ? (r.color.push(o), s.push(l), n.push(i.y.parse(t)))
                  : t.startsWith("var(")
                  ? (r.var.push(o), s.push("var"), n.push(t))
                  : (r.number.push(o), s.push(a), n.push(parseFloat(t))),
                ++o,
                "${}"
              )
            )
            .split("${}");
        return { values: n, split: h, indexes: r, types: s };
      }
      function c(t) {
        return h(t).values;
      }
      function d(t) {
        let { split: e, types: n } = h(t),
          r = e.length;
        return (t) => {
          let s = "";
          for (let u = 0; u < r; u++)
            if (((s += e[u]), void 0 !== t[u])) {
              let e = n[u];
              e === a
                ? (s += (0, o.a)(t[u]))
                : e === l
                ? (s += i.y.transform(t[u]))
                : (s += t[u]);
            }
          return s;
        };
      }
      let p = (t) => ("number" == typeof t ? 0 : t),
        f = {
          test: function (t) {
            return (
              isNaN(t) &&
              "string" == typeof t &&
              (t.match(s.S)?.length || 0) + (t.match(r)?.length || 0) > 0
            );
          },
          parse: c,
          createTransformer: d,
          getAnimatableNone: function (t) {
            let e = c(t);
            return d(t)(e.map(p));
          },
        };
    },
    85110: (t, e, n) => {
      n.d(e, { X4: () => s, ai: () => r, hs: () => o });
      var i = n(88826);
      let r = {
          test: (t) => "number" == typeof t,
          parse: parseFloat,
          transform: (t) => t,
        },
        s = { ...r, transform: (t) => (0, i.q)(0, 1, t) },
        o = { ...r, default: 1 };
    },
    86119: (t, e, n) => {
      n.d(e, { E: () => r });
      var i = n(40329);
      let r = n(49083).B ? i.useLayoutEffect : i.useEffect;
    },
    86454: (t, e, n) => {
      n.d(e, { a: () => i });
      let i = (t) => Math.round(1e5 * t) / 1e5;
    },
    86470: (t, e, n) => {
      n.d(e, { v: () => r });
      var i = n(76904);
      class r {
        constructor() {
          this.subscriptions = [];
        }
        add(t) {
          return (
            (0, i.Kq)(this.subscriptions, t),
            () => (0, i.Ai)(this.subscriptions, t)
          );
        }
        notify(t, e, n) {
          let i = this.subscriptions.length;
          if (i)
            if (1 === i) this.subscriptions[0](t, e, n);
            else
              for (let r = 0; r < i; r++) {
                let i = this.subscriptions[r];
                i && i(t, e, n);
              }
        }
        getSize() {
          return this.subscriptions.length;
        }
        clear() {
          this.subscriptions.length = 0;
        }
      }
    },
    87155: (t, e, n) => {
      n.d(e, { Q: () => i });
      let i = { value: null, addProjectionMetrics: null };
    },
    87256: (t, e, n) => {
      let i;
      n.d(e, { k: () => a });
      var r = n(99711),
        s = n(80518);
      function o() {
        i = void 0;
      }
      let a = {
        now: () => (
          void 0 === i &&
            a.set(
              s.uv.isProcessing || r.W.useManualTiming
                ? s.uv.timestamp
                : performance.now()
            ),
          i
        ),
        set: (t) => {
          (i = t), queueMicrotask(o);
        },
      };
    },
    87706: (t, e, n) => {
      n.d(e, { L: () => i });
      let i = (0, n(40329).createContext)({});
    },
    88826: (t, e, n) => {
      n.d(e, { q: () => i });
      let i = (t, e, n) => (n > e ? e : n < t ? t : n);
    },
    91493: (t, e, n) => {
      n.d(e, { y: () => o });
      var i = n(93654),
        r = n(64303),
        s = n(44483);
      let o = {
        test: (t) => s.B.test(t) || i.u.test(t) || r.V.test(t),
        parse: (t) =>
          s.B.test(t)
            ? s.B.parse(t)
            : r.V.test(t)
            ? r.V.parse(t)
            : i.u.parse(t),
        transform: (t) =>
          "string" == typeof t
            ? t
            : t.hasOwnProperty("red")
            ? s.B.transform(t)
            : r.V.transform(t),
      };
    },
    93654: (t, e, n) => {
      n.d(e, { u: () => r });
      var i = n(44483);
      let r = {
        test: (0, n(49158).$)("#"),
        parse: function (t) {
          let e = "",
            n = "",
            i = "",
            r = "";
          return (
            t.length > 5
              ? ((e = t.substring(1, 3)),
                (n = t.substring(3, 5)),
                (i = t.substring(5, 7)),
                (r = t.substring(7, 9)))
              : ((e = t.substring(1, 2)),
                (n = t.substring(2, 3)),
                (i = t.substring(3, 4)),
                (r = t.substring(4, 5)),
                (e += e),
                (n += n),
                (i += i),
                (r += r)),
            {
              red: parseInt(e, 16),
              green: parseInt(n, 16),
              blue: parseInt(i, 16),
              alpha: r ? parseInt(r, 16) / 255 : 1,
            }
          );
        },
        transform: i.B.transform,
      };
    },
    94559: (t, e, n) => {
      n.d(e, { OQ: () => h });
      var i = n(86470),
        r = n(23316),
        s = n(87256),
        o = n(80518);
      let a = (t) => !isNaN(parseFloat(t)),
        l = { current: void 0 };
      class u {
        constructor(t, e = {}) {
          (this.canTrackVelocity = null),
            (this.events = {}),
            (this.updateAndNotify = (t, e = !0) => {
              let n = s.k.now();
              if (
                (this.updatedAt !== n && this.setPrevFrameValue(),
                (this.prev = this.current),
                this.setCurrent(t),
                this.current !== this.prev &&
                  (this.events.change?.notify(this.current), this.dependents))
              )
                for (let t of this.dependents) t.dirty();
              e && this.events.renderRequest?.notify(this.current);
            }),
            (this.hasAnimated = !1),
            this.setCurrent(t),
            (this.owner = e.owner);
        }
        setCurrent(t) {
          (this.current = t),
            (this.updatedAt = s.k.now()),
            null === this.canTrackVelocity &&
              void 0 !== t &&
              (this.canTrackVelocity = a(this.current));
        }
        setPrevFrameValue(t = this.current) {
          (this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt);
        }
        onChange(t) {
          return this.on("change", t);
        }
        on(t, e) {
          this.events[t] || (this.events[t] = new i.v());
          let n = this.events[t].add(e);
          return "change" === t
            ? () => {
                n(),
                  o.Gt.read(() => {
                    this.events.change.getSize() || this.stop();
                  });
              }
            : n;
        }
        clearListeners() {
          for (let t in this.events) this.events[t].clear();
        }
        attach(t, e) {
          (this.passiveEffect = t), (this.stopPassiveEffect = e);
        }
        set(t, e = !0) {
          e && this.passiveEffect
            ? this.passiveEffect(t, this.updateAndNotify)
            : this.updateAndNotify(t, e);
        }
        setWithVelocity(t, e, n) {
          this.set(e),
            (this.prev = void 0),
            (this.prevFrameValue = t),
            (this.prevUpdatedAt = this.updatedAt - n);
        }
        jump(t, e = !0) {
          this.updateAndNotify(t),
            (this.prev = t),
            (this.prevUpdatedAt = this.prevFrameValue = void 0),
            e && this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect();
        }
        dirty() {
          this.events.change?.notify(this.current);
        }
        addDependent(t) {
          this.dependents || (this.dependents = new Set()),
            this.dependents.add(t);
        }
        removeDependent(t) {
          this.dependents && this.dependents.delete(t);
        }
        get() {
          return l.current && l.current.push(this), this.current;
        }
        getPrevious() {
          return this.prev;
        }
        getVelocity() {
          let t = s.k.now();
          if (
            !this.canTrackVelocity ||
            void 0 === this.prevFrameValue ||
            t - this.updatedAt > 30
          )
            return 0;
          let e = Math.min(this.updatedAt - this.prevUpdatedAt, 30);
          return (0, r.f)(
            parseFloat(this.current) - parseFloat(this.prevFrameValue),
            e
          );
        }
        start(t) {
          return (
            this.stop(),
            new Promise((e) => {
              (this.hasAnimated = !0),
                (this.animation = t(e)),
                this.events.animationStart &&
                  this.events.animationStart.notify();
            }).then(() => {
              this.events.animationComplete &&
                this.events.animationComplete.notify(),
                this.clearAnimation();
            })
          );
        }
        stop() {
          this.animation &&
            (this.animation.stop(),
            this.events.animationCancel &&
              this.events.animationCancel.notify()),
            this.clearAnimation();
        }
        isAnimating() {
          return !!this.animation;
        }
        clearAnimation() {
          delete this.animation;
        }
        destroy() {
          this.dependents?.clear(),
            this.events.destroy?.notify(),
            this.clearListeners(),
            this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect();
        }
      }
      function h(t, e) {
        return new u(t, e);
      }
    },
    99711: (t, e, n) => {
      n.d(e, { W: () => i });
      let i = {};
    },
    99957: (t, e, n) => {
      var i = n(40329),
        r =
          "function" == typeof Object.is
            ? Object.is
            : function (t, e) {
                return (
                  (t === e && (0 !== t || 1 / t == 1 / e)) || (t != t && e != e)
                );
              },
        s = i.useSyncExternalStore,
        o = i.useRef,
        a = i.useEffect,
        l = i.useMemo,
        u = i.useDebugValue;
      e.useSyncExternalStoreWithSelector = function (t, e, n, i, h) {
        var c = o(null);
        if (null === c.current) {
          var d = { hasValue: !1, value: null };
          c.current = d;
        } else d = c.current;
        var p = s(
          t,
          (c = l(
            function () {
              function t(t) {
                if (!a) {
                  if (
                    ((a = !0), (s = t), (t = i(t)), void 0 !== h && d.hasValue)
                  ) {
                    var e = d.value;
                    if (h(e, t)) return (o = e);
                  }
                  return (o = t);
                }
                if (((e = o), r(s, t))) return e;
                var n = i(t);
                return void 0 !== h && h(e, n)
                  ? ((s = t), e)
                  : ((s = t), (o = n));
              }
              var s,
                o,
                a = !1,
                l = void 0 === n ? null : n;
              return [
                function () {
                  return t(e());
                },
                null === l
                  ? void 0
                  : function () {
                      return t(l());
                    },
              ];
            },
            [e, n, i, h]
          ))[0],
          c[1]
        );
        return (
          a(
            function () {
              (d.hasValue = !0), (d.value = p);
            },
            [p]
          ),
          u(p),
          p
        );
      };
    },
  },
]);
