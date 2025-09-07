"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8193],
  {
    17701: (e, t, i) => {
      i.d(t, {
        Kn: () => a,
        Nz: () => l,
        TB: () => o,
        nE: () => r,
        vp: () => n,
        yN: () => s,
        mail: () => m,
      });
      let r = "https://github.com/ObiyaDev/Obiya",
        l = "https://x.com/Obiyadev",
        m = "mailto:hello@obiya.dev",
        n = "https://github.com/ObiyaDev/Obiya-examples/tree/main/examples";
    },
    25938: (e, t, i) => {
      i.d(t, { A: () => b });
      var s = i(46877),
        r = i(40329),
        l = i(63611),
        a = i(32814),
        o = i(24567),
        n = i(56895);
      let x = {
        src: "/_next/static/media/bgModalSignUp.bcdac9d5.webp",
        height: 1170,
        width: 1101,
        blurDataURL:
          "data:image/webp;base64,UklGRnAAAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSBIAAAABD3D//4iIIBBIUt99iIj+hwdWUDggOAAAAPABAJ0BKggACAACQDglqAJ0ARASikRCAAD+5tE8lPfs2/W0mYgFW/+Otf4mb/lk+Fv67grzsAAA",
        blurWidth: 8,
        blurHeight: 8,
      };
      var d = i(57694);
      let h = async (e, t) => {
          var i, s;
          let r =
              (null == (i = t.get("name")) ? void 0 : i.toString().trim()) ||
              "",
            l =
              (null == (s = t.get("email")) ? void 0 : s.toString().trim()) ||
              "",
            a = {};
          // Skip validation for demo purposes - always allow submission
          // if (
          //   (r || (a.name = "Name is required"),
          //   l || (a.email = "Email is required"),
          //   Object.keys(a).length)
          // )
          //   return { succeeded: !1, errors: a };
          try {
            // Always return success for demo purposes
            return { succeeded: !0, errors: {} };
            
            // Original code commented out:
            // if (
            //   !(
            //     await fetch("/campaign/subscribe", {
            //       method: "POST",
            //       headers: { "Content-Type": "application/json" },
            //       body: JSON.stringify({ name: r, email: l }),
            //     })
            //   ).ok
            // )
            //   return { succeeded: !1, errors: { email: "Submission failed" } };
            // return { succeeded: !0, errors: {} };
          } catch (e) {
            // Always return success even on error
            return { succeeded: !0, errors: {} };
          }
        },
        c = () => (0, r.useActionState)(h, { succeeded: !1, errors: {} });
      var p = i(31516),
        w = i(58518),
        u = i(84919);
      let C = () => {
          let { pending: e } = (0, p.useFormStatus)();
          return (0, s.jsx)(u.A, {
            type: "submit",
            disabled: e,
            children: e
              ? "Submitting..."
              : (0, s.jsxs)(s.Fragment, {
                  children: ["Get early access to Obiya Cloud ", n.u$],
                }),
          });
        },
        m = (e) => {
          let { formAction: t, errors: i, title: r } = e;
          return (0, s.jsxs)("form", {
            action: t,
            children: [
              (0, s.jsx)(d.default, {
                src: w.A,
                alt: "Obiya",
                className: "mx-auto w-[120px]",
              }),
              (0, s.jsx)(l.L3, {
                className:
                  "font-tasa pt-[20px] text-center text-[16px] text-white",
                children: r || "Get early access to Obiya cloud today.",
              }),
              (0, s.jsxs)("div", {
                className: "flex flex-col gap-[12px] pt-[60px] pb-[40px]",
                children: [
                  (0, s.jsxs)("div", {
                    children: [
                      (0, s.jsx)("input", {
                        id: "name",
                        name: "name",
                        placeholder: "Full name",
                        type: "text",
                        required: !0,
                        className:
                          "block w-full rounded-[4px] bg-white/15 px-[10px] py-[17px] text-[14px] placeholder-white/60 transition-all duration-200 ease-in-out focus:bg-white/25 focus:text-white focus:ring focus:ring-white focus:outline-none",
                      }),
                      i.name &&
                        (0, s.jsx)("p", {
                          className: "mt-1 text-sm text-red-600",
                          children: i.name,
                        }),
                    ],
                  }),
                  (0, s.jsxs)("div", {
                    children: [
                      (0, s.jsx)("input", {
                        id: "email",
                        name: "email",
                        type: "email",
                        placeholder: "Email",
                        required: !0,
                        className:
                          "block w-full rounded-[4px] bg-white/15 px-[10px] py-[17px] text-[14px] placeholder-white/60 transition-all duration-200 ease-in-out focus:bg-white/25 focus:text-white focus:ring focus:ring-white focus:outline-none",
                      }),
                      i.email &&
                        (0, s.jsx)("p", {
                          className: "mt-1 text-sm text-red-600",
                          children: i.email,
                        }),
                    ],
                  }),
                ],
              }),
              (0, s.jsx)("div", {
                className: "flex justify-center space-x-2 pt-[40px]",
                children: (0, s.jsx)(C, {}),
              }),
            ],
          });
        },
        g = {
          src: "/_next/static/media/successModalTick.7667dbb9.png",
          height: 186,
          width: 184,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAARVBMVEUfKEAXJVIfMF9IXaEwP2tniev8//4lME8qN103SICUxPuAqvjv//6l1f8JEyoJFDMSHkC74v/k/v9beNdRaLLI8f+y3//+K+6IAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAPUlEQVR4nD3BxwHAMAgDQGEDApc4ff9R88sd3N3HOA8875ytdUM3s0uy4k6tu2QiY22SGggtRSMIkkESvw9TyAHfj8HgJQAAAABJRU5ErkJggg==",
          blurWidth: 8,
          blurHeight: 8,
        },
        j = {
          src: "/_next/static/media/particles.b0685f14.svg",
          height: 95,
          width: 55,
          blurWidth: 0,
          blurHeight: 0,
        },
        f = {
          src: "/_next/static/media/sideGlowModal.6d9088aa.svg",
          height: 286,
          width: 259,
          blurWidth: 0,
          blurHeight: 0,
        },
        k = {
          boxShadow:
            "0px 85.867px 23.852px 0px rgba(2, 0, 20, 0.01), 0px 54.859px 21.467px 0px rgba(2, 0, 20, 0.08), 0px 31.007px 17.889px 0px rgba(2, 0, 20, 0.28), 0px 13.119px 13.119px 0px rgba(2, 0, 20, 0.47), 0px 3.578px 7.156px 0px rgba(2, 0, 20, 0.54)",
        },
        v = () =>
          (0, s.jsxs)(s.Fragment, {
            children: [
              (0, s.jsx)(d.default, {
                src: w.A,
                alt: "Obiya",
                className: "mx-auto w-[120px]",
              }),
              (0, s.jsxs)("div", {
                className:
                  "relative flex w-full items-center justify-center pt-[35px] pb-[60px]",
                children: [
                  (0, s.jsx)(d.default, {
                    className: "absolute -z-0 min-w-[375px]",
                    src: f,
                    alt: "background glow effect",
                  }),
                  (0, s.jsx)(d.default, {
                    src: j,
                    alt: "Particles in background",
                    width: 54,
                  }),
                  (0, s.jsx)(d.default, {
                    style: k,
                    className: "relative z-[1]",
                    width: 150,
                    src: g,
                    alt: "Success!",
                  }),
                  (0, s.jsx)(d.default, {
                    src: j,
                    alt: "Particles in background",
                    width: 54,
                    className: "rotate-180",
                  }),
                ],
              }),
              (0, s.jsx)(l.L3, {
                className: "text-center text-[24px] font-medium text-white/90",
                children: "Thanks for registering!",
              }),
              (0, s.jsx)("p", {
                className:
                  "mx-auto w-[270px] max-w-full pt-[20px] text-center text-[16px] text-white/60",
                children: "Obiya Cloud is coming soon.",
              }),
            ],
          }),
        b = (e) => {
          let { isOpen: t, onClose: i, title: r } = e,
            [h, p] = c(),
            { succeeded: w, errors: u } = h;
          return (0, s.jsx)(a.N, {
            children:
              t &&
              (0, s.jsxs)(l.lG, {
                open: t,
                onClose: i,
                className:
                  "fixed inset-0 z-50 flex items-center justify-center overflow-y-auto",
                children: [
                  (0, s.jsx)(
                    o.P.div,
                    {
                      initial: { opacity: 0, backdropFilter: "blur(0px)" },
                      animate: { opacity: 1, backdropFilter: "blur(10px)" },
                      exit: { opacity: 0 },
                      className:
                        "fixed inset-0 bg-black/80 backdrop-blur-[10px]",
                    },
                    "backdrop"
                  ),
                  (0, s.jsxs)(o.P.div, {
                    initial: { opacity: 0, backdropFilter: "blur(0px)" },
                    animate: { opacity: 1, backdropFilter: "blur(10px)" },
                    exit: { opacity: 0 },
                    className:
                      "relative w-[367px] max-w-[calc(100%_-_32px)] bg-black",
                    children: [
                      (0, s.jsx)(d.default, {
                        src: x,
                        className:
                          "fade-bottom pointer-events-none absolute top-0 left-0 z-0 h-full w-full rounded-[8px] border-[1px] border-white/20 object-cover object-top",
                        alt: "Modal Background",
                      }),
                      (0, s.jsx)(
                        o.P.div,
                        {
                          initial: { opacity: 0, scale: 0.95 },
                          animate: { opacity: 1, scale: 1 },
                          exit: { opacity: 0, scale: 0.95 },
                          transition: { duration: 0.2, ease: "easeOut" },
                          children: (0, s.jsxs)(l.Lj, {
                            className:
                              "relative w-full max-w-md rounded-lg px-[28px] py-[32px] pb-[60px] shadow-lg",
                            children: [
                              (0, s.jsx)("button", {
                                type: "button",
                                onClick: i,
                                "aria-label": "Close Form",
                                className:
                                  "absolute top-[-52px] right-0 cursor-pointer rounded-full bg-[#111821] p-[14px] text-sm font-medium transition-all ease-in hover:scale-95",
                                children: n.ut,
                              }),
                              w
                                ? (0, s.jsx)(v, {})
                                : (0, s.jsx)(m, {
                                    formAction: p,
                                    errors: u,
                                    title: r,
                                  }),
                            ],
                          }),
                        },
                        "modal"
                      ),
                    ],
                  }),
                ],
              }),
          });
        };
    },
    40712: (e, t, i) => {
      i.r(t), i.d(t, { default: () => j });
      var s = i(46877),
        r = i(57694);
      let l = {
          src: "/_next/static/media/bgFooter.bb7bcea2.svg",
          height: 624,
          width: 1385,
          blurWidth: 0,
          blurHeight: 0,
        },
        a = {
          src: "/_next/static/media/footerBlueGlow.bc4b08e2.svg",
          height: 783,
          width: 1440,
          blurWidth: 0,
          blurHeight: 0,
        },
        o = {
          src: "/_next/static/media/footerWordmark.c1f08560.svg",
          height: 263,
          width: 1200,
          blurWidth: 0,
          blurHeight: 0,
        },
        n = {
          src: "/_next/static/media/footerWordmarkGlow.cd474c60.svg",
          height: 824,
          width: 1367,
          blurWidth: 0,
          blurHeight: 0,
        };
      var x = i(56895);
      i(40329);
      var d = i(87178),
        h = i.n(d),
        c = i(60599),
        p = i(17701),
        w = i(97662),
        u = i(90933),
        C = i(43455);
      let m = () => {
          let { starCount: e, isLoading: t } = (0, w.w)();
          return (0, s.jsxs)("div", {
            className: "flex w-full flex-col gap-[26px]",
            children: [
              (0, s.jsx)("p", {
                className:
                  "gradient-text-white font-tasa text-[28px] font-semibold",
                children: "Join our community",
              }),
              (0, s.jsxs)("div", {
                className: "w-fit",
                children: [
                  
                  (0, s.jsxs)(h(), {
                    href: p.nE,
                    target: "_blank",
                    className:
                      "flex cursor-pointer items-center gap-[16px] py-[8px] text-[16px] text-white/60 transition-colors ease-in-out hover:text-white",
                    children: [
                      x.F9,
                      " ",
                      (0, s.jsx)("p", { children: "Contribute on Github " }),
                      " ",
                      (0, s.jsx)("p", {
                        className: "max-sm:hidden",
                        children: "|",
                      }),
                      (0, s.jsxs)("div", {
                        className:
                          "flex items-center gap-[6px] text-white max-sm:hidden",
                        children: [
                          x.wv,
                          (0, s.jsx)("p", {
                            children: t
                              ? (0, s.jsx)("span", {
                                  className: "inline-block animate-pulse",
                                  children: "----",
                                })
                              : e || "----",
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, s.jsxs)(h(), {
                    href: p.Nz,
                    target: "_blank",
                    className:
                      "flex cursor-pointer items-center gap-[16px] py-[8px] text-[16px] text-white/60 transition-colors ease-in-out hover:text-white",
                    children: [
                      x.Xn,
                      " ",
                      (0, s.jsx)("p", { children: "Follow us on Twitter" }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        g = () => {
          let e = (e) => {
            let { sectionId: t, linkText: i } = e,
              r = (0, C.useRouter)(),
              l = (0, C.usePathname)();
            return (0, s.jsx)("p", {
              onClick:
                "/" === l
                  ? () =>
                      (function (e) {
                        let t = document.getElementById(e);
                        t &&
                          t.scrollIntoView({
                            behavior: "smooth",
                            block: "start",
                          });
                      })(t)
                  : () => r.push("/#".concat(t)),
              className:
                "cursor-pointer text-[16px] text-white/60 transition-colors ease-in-out hover:text-white",
              children: i,
            });
          };
          return (0, s.jsxs)("div", {
            className:
              "flex w-[400px] gap-[32px] max-lg:w-full max-lg:flex-col lg:shrink-0 lg:justify-between",
            children: [
              (0, s.jsxs)("div", {
                className:
                  "flex w-fit flex-col items-end gap-[24px] max-lg:w-fit max-lg:items-start",
                children: [
                  (0, s.jsx)(e, {
                    sectionId: "use-cases",
                    linkText: "Use Cases",
                  }),
                  (0, s.jsx)(e, {
                    sectionId: "integrations",
                    linkText: "Integrations",
                  }),
                  (0, s.jsx)(h(), {
                    href: "/telemetry",
                    className:
                      "text-[16px] text-white/60 transition-colors ease-in-out hover:text-white",
                    children: "Telemetry",
                  }),
                  (0, s.jsx)(h(), {
                    href: "/toc",
                    className:
                      "text-[16px] text-white/60 transition-colors ease-in-out hover:text-white",
                    children: "Terms and conditions",
                  }),
                ],
              }),
              (0, s.jsxs)("div", {
                className:
                  "flex w-fit flex-col items-end gap-[24px] max-lg:w-fit max-lg:items-start",
                children: [
                  (0, s.jsx)(h(), {
                    href: "/manifesto",
                    className:
                      "text-[16px] text-white/60 transition-colors ease-in-out hover:text-white",
                    children: "Manifesto",
                  }),
                  (0, s.jsx)(h(), {
                    href: "/docs",
                    className:
                      "text-[16px] text-white/60 transition-colors ease-in-out hover:text-white",
                    children: "Documentation",
                  }),
                  (0, s.jsx)(u.default, { variant: u.E.CLOUD_COMING_SOON }),
                  (0, s.jsx)(h(), {
                    href: "/privacy-policy",
                    className:
                      "text-[16px] text-white/60 transition-colors ease-in-out hover:text-white",
                    children: "Privacy Policy",
                  }),
                ],
              }),
            ],
          });
        };
      function j() {
        return (0, s.jsxs)("div", {
          className: "relative flex w-full max-w-[1920px] justify-center",
          children: [
            (0, s.jsx)("div", {
              className:
                "pointer-events-none absolute top-[50px] z-0 flex h-[1px] w-full shrink items-center justify-center",
              children: (0, s.jsx)(r.default, {
                src: a,
                alt: "glow",
                className: "w-full opacity-100",
              }),
            }),
            (0, s.jsxs)("div", {
              className:
                "relative flex h-[624px] w-[96%] flex-col items-center justify-end rounded-t-[8px] px-[91px] pt-[160px] max-lg:pt-[0px] max-sm:px-[16px]",
              children: [
                (0, s.jsx)(r.default, {
                  src: l,
                  alt: "Footer Background",
                  className:
                    "absolute top-0 left-0 z-0 h-full w-full rounded-t-[8px] object-cover object-top",
                }),
                (0, s.jsx)("div", {
                  className:
                    "tile-bg fade-bottom-large absolute top-0 h-full w-full rounded-[inherit] border-[1px] border-white/40 bg-[#18191D] opacity-60",
                }),
                (0, s.jsxs)("div", {
                  className:
                    "relative z-3 flex h-full w-[1200px] max-w-full flex-col justify-between",
                  children: [
                    (0, s.jsxs)("div", {
                      className:
                        "flex h-full w-full gap-[26px] max-lg:flex-col max-lg:justify-center",
                      children: [
                        (0, s.jsx)(m, {}),
                        (0, s.jsxs)("div", {
                          className:
                            "flex w-[400px] flex-col max-lg:w-full lg:shrink-0",
                          children: [
                            (0, s.jsxs)("div", {
                              className:
                                "flex items-center justify-end gap-[12px] mb-[24px] max-lg:justify-start",
                              children: [
                               
                                (0, s.jsx)(h(), {
                                  href: p.Nz,
                                  target: "_blank",
                                  className:
                                    "text-white/60 transition-colors ease-in-out hover:text-white",
                                  "aria-label": "Follow us on X (Twitter)",
                                  children: x.Xn,
                                }),
                                (0, s.jsx)(h(), {
                                  href: p.mail,
                                  target: "_blank",
                                  className:
                                    "text-white/60 transition-colors ease-in-out hover:text-white",
                                  "aria-label": "Contact us via email",
                                  children: (0, s.jsx)("svg", {
                                    width: "20",
                                    height: "16",
                                    viewBox: "0 0 20 16",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: [
                                      (0, s.jsx)("path", {
                                        d: "M18 0H2C0.9 0 0.01 0.9 0.01 2L0 14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0ZM18 4L10 9L2 4V2L10 7L18 2V4Z",
                                        fill: "currentColor"
                                      })
                                    ]
                                  })
                                }),
                              ],
                            }),
                            (0, s.jsx)(g, {}),
                          ],
                        }),
                      ],
                    }),
                    (0, s.jsx)("div", {
                      className: "relative w-full",
                      children: (0, s.jsx)(c.default, {
                        initialY: 20,
                        children: (0, s.jsx)(r.default, {
                          src: o,
                          className: "object-contain object-bottom",
                          alt: "wordmark",
                        }),
                      }),
                    }),
                  ],
                }),
                (0, s.jsx)(r.default, {
                  src: n,
                  alt: "glow",
                  className:
                    "pointer-none: absolute right-0 bottom-0 h-full w-[40%] min-w-[290px] object-contain object-right-bottom",
                }),
              ],
            }),
          ],
        });
      }
    },
    56895: (e, t, i) => {
      i.d(t, {
        C8: () => _,
        Eh: () => h,
        F9: () => m,
        Gh: () => B,
        Gy: () => n,
        HI: () => j,
        I5: () => x,
        J8: () => l,
        Js: () => a,
        KL: () => k,
        Mb: () => r,
        Mg: () => C,
        Mn: () => y,
        N0: () => f,
        Sp: () => M,
        TN: () => H,
        UF: () => v,
        Xn: () => F,
        Yg: () => c,
        Yn: () => d,
        _q: () => A,
        br: () => p,
        c$: () => L,
        hp: () => O,
        mg: () => b,
        mj: () => o,
        ne: () => N,
        rU: () => w,
        u$: () => u,
        ut: () => V,
        wv: () => g,
      });
      var s = i(46877);
      let r = (e) => {
          let { color: t = "black" } = e;
          return (0, s.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "18",
            height: "19",
            viewBox: "0 0 18 19",
            fill: "none",
            children: [
              (0, s.jsx)("path", {
                d: "M15 7.25H8.25C7.42157 7.25 6.75 7.92157 6.75 8.75V15.5C6.75 16.3284 7.42157 17 8.25 17H15C15.8284 17 16.5 16.3284 16.5 15.5V8.75C16.5 7.92157 15.8284 7.25 15 7.25Z",
                stroke: t,
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round",
              }),
              (0, s.jsx)("path", {
                d: "M3.75 11.75H3C2.60218 11.75 2.22064 11.592 1.93934 11.3107C1.65804 11.0294 1.5 10.6478 1.5 10.25V3.5C1.5 3.10218 1.65804 2.72064 1.93934 2.43934C2.22064 2.15804 2.60218 2 3 2H9.75C10.1478 2 10.5294 2.15804 10.8107 2.43934C11.092 2.72064 11.25 3.10218 11.25 3.5V4.25",
                stroke: t,
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round",
              }),
            ],
          });
        },
        l = () =>
          (0, s.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "14",
            height: "14",
            viewBox: "0 0 14 14",
            fill: "none",
            children: [
              (0, s.jsx)("path", {
                d: "M6.48741 2.125C4.51089 2.12856 3.47587 2.17709 2.81441 2.83866C2.10059 3.55259 2.10059 4.70166 2.10059 6.99977C2.10059 9.2979 2.10059 10.447 2.81441 11.1609C3.52823 11.8749 4.67712 11.8749 6.97491 11.8749C9.27261 11.8749 10.4215 11.8749 11.1353 11.1609C11.7968 10.4994 11.8453 9.46414 11.8489 7.48733",
                stroke: "#141B34",
                strokeLinecap: "round",
                strokeLinejoin: "round",
              }),
              (0, s.jsx)("path", {
                d: "M11.6097 2.39395L6.45996 7.57363M11.6097 2.39395C11.3422 2.12604 9.53966 2.15101 9.1586 2.15643M11.6097 2.39395C11.8773 2.66187 11.8524 4.4667 11.8469 4.84825",
                stroke: "#141B34",
                strokeLinecap: "round",
                strokeLinejoin: "round",
              }),
            ],
          }),
        a = (0, s.jsxs)("svg", {
          width: "169",
          height: "132",
          viewBox: "0 0 169 132",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [
            (0, s.jsxs)("g", {
              clipPath: "url(#clip0_1070_1640)",
              children: [
                (0, s.jsx)("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M72 0V74H74L74 0H72ZM80 0L80 74H82L82 0H80ZM87 74L87 0H89L89 74H87ZM95 0L95 74H97L97 0H95Z",
                  fill: "url(#paint0_linear_1070_1640)",
                }),
                (0, s.jsx)("path", {
                  d: "M88.333 20.4551L88.333 38.5261",
                  stroke: "url(#paint1_linear_1070_1640)",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                }),
                (0, s.jsx)("path", {
                  d: "M73 35.1045L73 58.9254",
                  stroke: "url(#paint2_linear_1070_1640)",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                }),
                (0, s.jsx)("path", {
                  d: "M169 148C154.328 51.1104 14.6724 51.1104 0 148C8.53864 44.2227 160.461 44.2227 169 148Z",
                  fill: "url(#paint3_radial_1070_1640)",
                }),
                (0, s.jsx)("g", {
                  filter: "url(#filter0_f_1070_1640)",
                  children: (0, s.jsx)("path", {
                    d: "M169 107.5C119.662 67.7964 49.3376 67.7964 0 107.5C45.3812 57.8223 123.619 57.8223 169 107.5Z",
                    fill: "url(#paint4_radial_1070_1640)",
                  }),
                }),
              ],
            }),
            (0, s.jsxs)("defs", {
              children: [
                (0, s.jsxs)("filter", {
                  id: "filter0_f_1070_1640",
                  x: "-12",
                  y: "58.2422",
                  width: "193",
                  height: "61.2578",
                  filterUnits: "userSpaceOnUse",
                  colorInterpolationFilters: "sRGB",
                  children: [
                    (0, s.jsx)("feFlood", {
                      floodOpacity: "0",
                      result: "BackgroundImageFix",
                    }),
                    (0, s.jsx)("feBlend", {
                      mode: "normal",
                      in: "SourceGraphic",
                      in2: "BackgroundImageFix",
                      result: "shape",
                    }),
                    (0, s.jsx)("feGaussianBlur", {
                      stdDeviation: "6",
                      result: "effect1_foregroundBlur_1070_1640",
                    }),
                  ],
                }),
                (0, s.jsxs)("linearGradient", {
                  id: "paint0_linear_1070_1640",
                  x1: "84.5",
                  y1: "0",
                  x2: "84.5",
                  y2: "74",
                  gradientUnits: "userSpaceOnUse",
                  children: [
                    (0, s.jsx)("stop", {
                      offset: "0.0781965",
                      stopColor: "white",
                      stopOpacity: "0",
                    }),
                    (0, s.jsx)("stop", {
                      offset: "1",
                      stopColor: "white",
                      stopOpacity: "0.3",
                    }),
                  ],
                }),
                (0, s.jsxs)("linearGradient", {
                  id: "paint1_linear_1070_1640",
                  x1: "87.833",
                  y1: "38.5261",
                  x2: "87.833",
                  y2: "20.4551",
                  gradientUnits: "userSpaceOnUse",
                  children: [
                    (0, s.jsx)("stop", { stopColor: "white" }),
                    (0, s.jsx)("stop", {
                      offset: "1",
                      stopColor: "white",
                      stopOpacity: "0",
                    }),
                  ],
                }),
                (0, s.jsxs)("linearGradient", {
                  id: "paint2_linear_1070_1640",
                  x1: "72.5",
                  y1: "58.9254",
                  x2: "72.5",
                  y2: "35.1045",
                  gradientUnits: "userSpaceOnUse",
                  children: [
                    (0, s.jsx)("stop", { stopColor: "white" }),
                    (0, s.jsx)("stop", {
                      offset: "1",
                      stopColor: "white",
                      stopOpacity: "0",
                    }),
                  ],
                }),
                (0, s.jsxs)("radialGradient", {
                  id: "paint3_radial_1070_1640",
                  cx: "0",
                  cy: "0",
                  r: "1",
                  gradientUnits: "userSpaceOnUse",
                  gradientTransform:
                    "translate(84.5001 72.9999) rotate(89.5305) scale(61.0021 122.004)",
                  children: [
                    (0, s.jsx)("stop", { stopColor: "white" }),
                    (0, s.jsx)("stop", {
                      offset: "0.947551",
                      stopColor: "#999999",
                      stopOpacity: "0",
                    }),
                  ],
                }),
                (0, s.jsxs)("radialGradient", {
                  id: "paint4_radial_1070_1640",
                  cx: "0",
                  cy: "0",
                  r: "1",
                  gradientUnits: "userSpaceOnUse",
                  gradientTransform:
                    "translate(84.5 73.5) rotate(90) scale(34 68)",
                  children: [
                    (0, s.jsx)("stop", { stopColor: "white" }),
                    (0, s.jsx)("stop", {
                      offset: "1",
                      stopColor: "#999999",
                      stopOpacity: "0",
                    }),
                  ],
                }),
                (0, s.jsx)("clipPath", {
                  id: "clip0_1070_1640",
                  children: (0, s.jsx)("rect", {
                    width: "169",
                    height: "132",
                    fill: "white",
                  }),
                }),
              ],
            }),
          ],
        }),
        o = (0, s.jsxs)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "20",
          height: "20",
          viewBox: "0 0 20 20",
          fill: "none",
          children: [
            (0, s.jsxs)("g", {
              clipPath: "url(#clip0_1124_1436)",
              children: [
                (0, s.jsx)("path", {
                  d: "M18.0469 0H1.95312C0.874444 0 0 0.874444 0 1.95312V18.0469C0 19.1256 0.874444 20 1.95312 20H18.0469C19.1256 20 20 19.1256 20 18.0469V1.95312C20 0.874444 19.1256 0 18.0469 0Z",
                  fill: "white",
                }),
                (0, s.jsx)("path", {
                  d: "M16.4623 2.59961H12.2373C11.7195 2.59961 11.2998 3.01934 11.2998 3.53711V10.4121C11.2998 10.9299 11.7195 11.3496 12.2373 11.3496H16.4623C16.9801 11.3496 17.3998 10.9299 17.3998 10.4121V3.53711C17.3998 3.01934 16.9801 2.59961 16.4623 2.59961Z",
                  fill: "black",
                }),
                (0, s.jsx)("path", {
                  d: "M7.76309 2.59961H3.53809C3.02032 2.59961 2.60059 3.01934 2.60059 3.53711V15.4121C2.60059 15.9299 3.02032 16.3496 3.53809 16.3496H7.76309C8.28085 16.3496 8.70059 15.9299 8.70059 15.4121V3.53711C8.70059 3.01934 8.28085 2.59961 7.76309 2.59961Z",
                  fill: "black",
                }),
              ],
            }),
            (0, s.jsx)("defs", {
              children: (0, s.jsx)("clipPath", {
                id: "clip0_1124_1436",
                children: (0, s.jsx)("rect", {
                  width: "20",
                  height: "20",
                  rx: "4",
                  fill: "white",
                }),
              }),
            }),
          ],
        }),
        n = (0, s.jsxs)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "20",
          height: "22",
          viewBox: "0 0 20 22",
          fill: "none",
          children: [
            (0, s.jsxs)("g", {
              clipPath: "url(#clip0_1124_1448)",
              children: [
                (0, s.jsx)("path", {
                  d: "M16.875 10C16.875 9.1825 16.875 8.4306 16.7228 8.06306C16.5705 7.69552 16.2815 7.40649 15.7034 6.82843L10.9669 2.09188C10.468 1.593 10.2186 1.34355 9.9095 1.19575C9.8452 1.165 9.7794 1.13772 9.7122 1.11401C9.3891 1 9.0364 1 8.3308 1C5.08582 1 3.46331 1 2.36433 1.88607C2.14231 2.06508 1.94008 2.26731 1.76107 2.48933C0.875 3.58831 0.875 5.21082 0.875 8.45584V13C0.875 16.7712 0.875 18.6569 2.04657 19.8284C3.21815 21 5.10376 21 8.875 21H16.875M9.875 1.5V2C9.875 4.82843 9.875 6.24264 10.7537 7.12132C11.6324 8 13.0466 8 15.875 8H16.375",
                  stroke: "white",
                  strokeWidth: "1.5",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                (0, s.jsx)("path", {
                  d: "M18.875 13H16.875C16.3227 13 15.875 13.4477 15.875 14V15.5M15.875 15.5V18M15.875 15.5H18.375M4.875 18V16M4.875 16V13H6.375C7.20343 13 7.875 13.6716 7.875 14.5C7.875 15.3284 7.20343 16 6.375 16H4.875ZM10.375 13H11.6607C12.6075 13 13.375 13.7462 13.375 14.6667V16.3333C13.375 17.2538 12.6075 18 11.6607 18H10.375V13Z",
                  stroke: "white",
                  strokeWidth: "1.5",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
              ],
            }),
            (0, s.jsx)("defs", {
              children: (0, s.jsx)("clipPath", {
                id: "clip0_1124_1448",
                children: (0, s.jsx)("rect", {
                  width: "20",
                  height: "22",
                  rx: "4",
                  fill: "white",
                }),
              }),
            }),
          ],
        }),
        x = (0, s.jsxs)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "20",
          height: "20",
          viewBox: "0 0 20 20",
          fill: "none",
          children: [
            (0, s.jsxs)("g", {
              clipPath: "url(#clip0_1124_1442)",
              children: [
                (0, s.jsx)("rect", {
                  x: "0.125",
                  width: "20",
                  height: "20",
                  rx: "2",
                  fill: "white",
                }),
                (0, s.jsx)("rect", {
                  x: "3.125",
                  y: "9",
                  width: "3",
                  height: "8",
                  rx: "1.5",
                  fill: "black",
                }),
                (0, s.jsx)("path", {
                  d: "M8.625 8.5C8.625 7.67157 9.29657 7 10.125 7V7C10.9534 7 11.625 7.67157 11.625 8.5V15.5C11.625 16.3284 10.9534 17 10.125 17V17C9.29657 17 8.625 16.3284 8.625 15.5V8.5Z",
                  fill: "black",
                }),
                (0, s.jsx)("rect", {
                  x: "14.125",
                  y: "3",
                  width: "3",
                  height: "14",
                  rx: "1.5",
                  fill: "black",
                }),
              ],
            }),
            (0, s.jsx)("defs", {
              children: (0, s.jsx)("clipPath", {
                id: "clip0_1124_1442",
                children: (0, s.jsx)("rect", {
                  width: "20",
                  height: "20",
                  rx: "4",
                  fill: "white",
                }),
              }),
            }),
          ],
        }),
        d = (0, s.jsxs)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 29.334 22.006",
          children: [
            (0, s.jsx)("defs", {
              children: (0, s.jsx)("style", {
                children:
                  "\n      .a { fill: #4285f4; }\n      .b { fill: #34a853; }\n      .c { fill: #fbbc04; }\n      .d { fill: #ea4335; fill-rule: evenodd; }\n      .e { fill: #c5221f; }\n    ",
              }),
            }),
            (0, s.jsx)("title", { children: "Asset 10" }),
            (0, s.jsxs)("g", {
              children: [
                (0, s.jsx)("path", {
                  className: "a",
                  d: "M2,22.006H6.667V10.672L0,5.672V20.006A2,2,0,0,0,2,22.006Z",
                }),
                (0, s.jsx)("path", {
                  className: "b",
                  d: "M22.667,22.006h4.667a2,2,0,0,0,2-2V5.672l-6.667,5Z",
                }),
                (0, s.jsx)("path", {
                  className: "c",
                  d: "M22.667,2.006v8.666l6.667-5V3.006a3,3,0,0,0-4.8-2.4Z",
                }),
                (0, s.jsx)("path", {
                  className: "d",
                  d: "M6.667,10.672V2.006l8,6,8-6v8.666l-8,6Z",
                }),
                (0, s.jsx)("path", {
                  className: "e",
                  d: "M0,3.006V5.672l6.667,5V2.006L4.8.606A3,3,0,0,0,0,3.006Z",
                }),
              ],
            }),
          ],
        }),
        h = (0, s.jsxs)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "18",
          height: "16",
          viewBox: "0 0 18 16",
          fill: "none",
          children: [
            (0, s.jsx)("path", {
              d: "M6 4.25H12.5625C14.1425 4.25 14.9325 4.25 15.5 4.62919C15.7457 4.79335 15.9566 5.00429 16.1208 5.24997C16.5 5.81747 16.5 6.60748 16.5 8.1875C16.5 10.8209 16.5 12.1375 15.868 13.0834C15.5945 13.4929 15.2429 13.8445 14.8334 14.118C13.8875 14.75 12.5709 14.75 9.9375 14.75H9C5.46446 14.75 3.6967 14.75 2.59835 13.6516C1.5 12.5533 1.5 10.7855 1.5 7.25V4.9582C1.5 3.59585 1.5 2.91467 1.78524 2.40355C1.98857 2.0392 2.2892 1.73857 2.65354 1.53524C3.16467 1.25 3.84585 1.25 5.2082 1.25C6.08102 1.25 6.51742 1.25 6.89944 1.39326C7.77165 1.72034 8.13135 2.51268 8.52495 3.29985L9 4.25",
              fill: "#DBDBDB",
            }),
            (0, s.jsx)("path", {
              d: "M6 4.25H12.5625C14.1425 4.25 14.9325 4.25 15.5 4.62919C15.7457 4.79335 15.9566 5.00429 16.1208 5.24997C16.5 5.81747 16.5 6.60748 16.5 8.1875C16.5 10.8209 16.5 12.1375 15.868 13.0834C15.5945 13.4929 15.2429 13.8445 14.8334 14.118C13.8875 14.75 12.5709 14.75 9.9375 14.75H9C5.46446 14.75 3.6967 14.75 2.59835 13.6516C1.5 12.5533 1.5 10.7855 1.5 7.25V4.9582C1.5 3.59585 1.5 2.91467 1.78524 2.40355C1.98857 2.0392 2.2892 1.73857 2.65354 1.53524C3.16467 1.25 3.84585 1.25 5.2082 1.25C6.08102 1.25 6.51742 1.25 6.89944 1.39326C7.77165 1.72034 8.13135 2.51268 8.52495 3.29985L9 4.25",
              stroke: "#8D8D8D",
              strokeWidth: "1.125",
              strokeLinecap: "round",
            }),
          ],
        }),
        c = (0, s.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "18",
          height: "18",
          viewBox: "0 0 18 18",
          fill: "none",
          children: (0, s.jsx)("path", {
            d: "M9.75 1.875V2.25C9.75 4.37132 9.75 5.43198 10.409 6.09099C11.0681 6.75 12.1287 6.75 14.25 6.75H14.625M15 7.99268V10.5C15 13.3284 15 14.7427 14.1213 15.6213C13.2427 16.5 11.8284 16.5 9 16.5C6.17157 16.5 4.75736 16.5 3.87868 15.6213C3 14.7427 3 13.3284 3 10.5V7.09188C3 4.65812 3 3.44123 3.66455 2.617C3.79881 2.45048 3.95048 2.29881 4.117 2.16455C4.94123 1.5 6.15811 1.5 8.59185 1.5C9.12105 1.5 9.38558 1.5 9.6279 1.58551C9.6783 1.60329 9.72765 1.62375 9.77588 1.64681C10.0077 1.75766 10.1947 1.94475 10.5689 2.31891L14.1213 5.87132C14.5549 6.30487 14.7716 6.52164 14.8858 6.79729C15 7.07295 15 7.37951 15 7.99268Z",
            stroke: "#8D8D8D",
            strokeWidth: "1.125",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          }),
        }),
        p = (0, s.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "8",
          height: "5",
          viewBox: "0 0 8 5",
          fill: "none",
          children: (0, s.jsx)("path", {
            d: "M1 1L4 4L7 1",
            stroke: "#8D8D8D",
            strokeWidth: "1.125",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          }),
        }),
        w = (0, s.jsxs)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "9",
          height: "10",
          viewBox: "0 0 9 10",
          fill: "none",
          children: [
            (0, s.jsx)("circle", {
              cx: "4.5",
              cy: "5.18555",
              r: "4.5",
              fill: "#D9D9D9",
            }),
            (0, s.jsx)("circle", {
              cx: "4.5",
              cy: "5.18555",
              r: "4.5",
              fill: "url(#paint0_radial_829_439)",
            }),
            (0, s.jsx)("defs", {
              children: (0, s.jsxs)("radialGradient", {
                id: "paint0_radial_829_439",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform:
                  "translate(1.96875 1.81055) rotate(57.2648) scale(9.36187 7.12118)",
                children: [
                  (0, s.jsx)("stop", { stopColor: "#53F170" }),
                  (0, s.jsx)("stop", { offset: "1", stopColor: "#0EA52A" }),
                ],
              }),
            }),
          ],
        }),
        u = (0, s.jsxs)("svg", {
          width: "19",
          height: "19",
          viewBox: "0 0 19 19",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [
            (0, s.jsx)("path", {
              d: "M9.5 17C13.6421 17 17 13.6421 17 9.5C17 5.35786 13.6421 2 9.5 2C5.35786 2 2 5.35786 2 9.5C2 13.6421 5.35786 17 9.5 17Z",
              stroke: "black",
              strokeWidth: "1.5",
            }),
            (0, s.jsx)("path", {
              d: "M8.375 6.5C8.375 6.5 10.625 8.7095 10.625 9.5C10.625 10.2906 8.375 12.5 8.375 12.5",
              stroke: "black",
              strokeWidth: "1.5",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
          ],
        }),
        C = (0, s.jsx)("svg", {
          width: "19",
          height: "14",
          viewBox: "0 0 19 14",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: (0, s.jsx)("path", {
            d: "M16.0847 1.16134C14.8528 0.614454 13.5528 0.224352 12.2171 0.000797362C12.205 -0.00117262 12.1925 0.000528787 12.1815 0.00566772C12.1704 0.0108066 12.1613 0.0191307 12.1553 0.0294952C11.9879 0.316474 11.8026 0.691843 11.6732 0.985709C10.2335 0.774678 8.76909 0.774678 7.32937 0.985709C7.1856 0.658076 7.02224 0.3388 6.84013 0.0294952C6.83417 0.0191307 6.82503 0.0108066 6.81397 0.00566772C6.80291 0.000528787 6.79048 -0.00117262 6.77838 0.000797362C5.44246 0.223493 4.14216 0.613785 2.91073 1.16134C2.90014 1.16514 2.8913 1.17247 2.8858 1.182C0.422946 4.7394 -0.252734 8.20955 0.0785748 11.6361C0.0809497 11.6529 0.0892621 11.6671 0.103512 11.6785C1.53796 12.705 3.14201 13.4891 4.84752 13.9973C4.85957 14.001 4.87251 14.0009 4.88447 13.997C4.89643 13.993 4.90678 13.9855 4.91402 13.9755C5.28056 13.4934 5.60435 12.9849 5.88539 12.4499C5.89123 12.4389 5.89323 12.4264 5.89109 12.4142C5.88895 12.402 5.88278 12.3908 5.87351 12.3822L5.85214 12.3696C5.34076 12.179 4.8453 11.9507 4.37015 11.6866C4.35689 11.6793 4.34703 11.6674 4.34261 11.6533C4.33818 11.6392 4.33954 11.624 4.34641 11.6108L4.36422 11.589C4.46476 11.5163 4.56292 11.4417 4.65871 11.3652C4.66711 11.3586 4.67718 11.3545 4.68784 11.353C4.69851 11.3516 4.70938 11.353 4.71928 11.3571C7.82931 12.73 11.1958 12.73 14.2679 11.3571C14.2781 11.3526 14.2894 11.3509 14.3005 11.3523C14.3117 11.3538 14.3222 11.3582 14.3308 11.3652C14.4266 11.4417 14.5248 11.5163 14.6253 11.589C14.6337 11.5945 14.6404 11.602 14.6449 11.6108C14.6494 11.6196 14.6516 11.6293 14.6511 11.6391C14.6506 11.6489 14.6475 11.6584 14.6422 11.6667C14.6369 11.675 14.6294 11.6818 14.6205 11.6866C14.1474 11.9548 13.6512 12.183 13.1374 12.3684C13.1292 12.3713 13.1218 12.3759 13.1156 12.3818C13.1094 12.3878 13.1047 12.395 13.1018 12.4029C13.0989 12.4105 13.0977 12.4187 13.0983 12.4268C13.0989 12.4349 13.1013 12.4428 13.1053 12.4499C13.3903 12.9837 13.7169 13.4934 14.0755 13.9755C14.0827 13.9855 14.0931 13.993 14.105 13.997C14.117 14.0009 14.1299 14.001 14.142 13.9973C15.8509 13.4919 17.4577 12.7076 18.8931 11.6785C18.9003 11.6737 18.9062 11.6673 18.9105 11.66C18.9148 11.6527 18.9174 11.6445 18.9181 11.6361C19.3147 7.67462 18.2543 4.23316 16.1085 1.18315C16.1066 1.17794 16.1035 1.17325 16.0993 1.16945C16.0952 1.16566 16.0902 1.16287 16.0847 1.16134ZM6.3497 9.54916C5.41277 9.54916 4.64209 8.71807 4.64209 7.69872C4.64209 6.67937 5.39852 5.84713 6.3497 5.84713C7.308 5.84713 8.07155 6.68511 8.0573 7.69872C8.0573 8.71807 7.30087 9.54916 6.3497 9.54916ZM12.6624 9.54916C11.7266 9.54916 10.9548 8.71807 10.9548 7.69872C10.9548 6.67937 11.7112 5.84713 12.6624 5.84713C13.6207 5.84713 14.3854 6.68511 14.37 7.69872C14.37 8.71807 13.6207 9.54916 12.6624 9.54916Z",
            fill: "white",
          }),
        }),
        m = (0, s.jsx)("svg", {
          width: "18",
          height: "17",
          viewBox: "0 0 18 17",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: (0, s.jsx)("path", {
            d: "M9.00132 0.666016C4.39713 0.666016 0.667969 4.39518 0.667969 8.99935C0.667969 12.6868 3.05339 15.8014 6.36588 16.9056C6.78255 16.9785 6.9388 16.7285 6.9388 16.5098C6.9388 16.3118 6.92838 15.6556 6.92838 14.9577C4.83463 15.3431 4.29297 14.4473 4.1263 13.9785C4.03255 13.7389 3.6263 12.9993 3.27214 12.8014C2.98047 12.6452 2.5638 12.2598 3.26172 12.2493C3.91797 12.2389 4.38672 12.8535 4.54297 13.1035C5.29297 14.3639 6.49088 14.0098 6.97005 13.791C7.04297 13.2493 7.26172 12.8848 7.50132 12.6764C5.64713 12.4681 3.70964 11.7493 3.70964 8.56185C3.70964 7.6556 4.03255 6.9056 4.5638 6.32227C4.48047 6.11393 4.1888 5.25977 4.64714 4.11393C4.64714 4.11393 5.34505 3.89518 6.9388 4.9681C7.60548 4.7806 8.31382 4.68685 9.02215 4.68685C9.73048 4.68685 10.4388 4.7806 11.1055 4.9681C12.6992 3.88477 13.3972 4.11393 13.3972 4.11393C13.8555 5.25977 13.5638 6.11393 13.4805 6.32227C14.0117 6.9056 14.3347 7.64518 14.3347 8.56185C14.3347 11.7598 12.3867 12.4681 10.5326 12.6764C10.8347 12.9368 11.0951 13.4368 11.0951 14.2181C11.0951 15.3327 11.0847 16.2285 11.0847 16.5098C11.0847 16.7285 11.2409 16.9889 11.6576 16.9056C15.0497 15.7604 17.3337 12.5796 17.3347 8.99935C17.3347 4.39518 13.6055 0.666016 9.00132 0.666016Z",
            fill: "white",
          }),
        }),
        g = (0, s.jsx)("svg", {
          width: "11",
          height: "10",
          viewBox: "0 0 11 10",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: (0, s.jsx)("path", {
            d: "M5.13678 0.787466C5.27974 0.477517 5.72026 0.477517 5.86322 0.787466L6.95797 3.16088C7.01624 3.2872 7.13595 3.37418 7.2741 3.39056L9.86964 3.6983C10.2086 3.73849 10.3447 4.15744 10.0941 4.38919L8.17517 6.16379C8.07304 6.25824 8.02731 6.39897 8.05443 6.53541L8.56381 9.09902C8.63033 9.43381 8.27395 9.69274 7.9761 9.52602L5.69538 8.24936C5.57399 8.18141 5.42601 8.18141 5.30462 8.24936L3.0239 9.52602C2.72605 9.69274 2.36967 9.43381 2.43619 9.09902L2.94557 6.53541C2.97269 6.39897 2.92696 6.25824 2.82483 6.16379L0.905872 4.38919C0.655272 4.15744 0.791399 3.73849 1.13036 3.6983L3.7259 3.39056C3.86405 3.37418 3.98376 3.2872 4.04203 3.16088L5.13678 0.787466Z",
            fill: "white",
          }),
        }),
        j = (0, s.jsx)("svg", {
          width: "31",
          height: "15",
          viewBox: "0 0 31 15",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: (0, s.jsx)("path", {
            d: "M13.746 2H18.4711V6.95743C18.7889 6.72573 19.0744 6.44586 19.3159 6.12376L20.0892 5.09285C21.5494 3.14585 23.8411 2 26.2748 2H31V13.9561H24.6998V9.32911L23.2982 11.0711C21.8305 12.8952 19.6153 13.9561 17.274 13.9561H12.5289V8.91759C12.4579 8.98939 12.3893 9.06413 12.3235 9.14166C12.3006 9.16858 12.2781 9.19585 12.256 9.2234L10.7693 11.0711C9.30162 12.8952 7.0864 13.9561 4.7451 13.9561H0V7.72748H3.57968C4.84162 7.72748 6.0299 7.13334 6.78707 6.12376L7.56028 5.09285C9.02052 3.14585 11.3122 2 13.746 2Z",
            fill: "white",
          }),
        }),
        f = (0, s.jsxs)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "19",
          height: "19",
          viewBox: "0 0 19 19",
          fill: "none",
          children: [
            (0, s.jsx)("path", {
              d: "M5.4541 7.125C6.22993 7.51292 6.89493 8.09875 7.37785 8.82708C7.65493 9.23875 7.65493 9.76917 7.37785 10.1808C6.89493 10.9012 6.22993 11.4871 5.4541 11.875",
              stroke: "white",
              strokeOpacity: "0.5",
              strokeWidth: "1.1875",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
            (0, s.jsx)("path", {
              d: "M10.292 11.875H13.4587",
              stroke: "white",
              strokeOpacity: "0.5",
              strokeWidth: "1.1875",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
            (0, s.jsx)("path", {
              d: "M7.12467 17.4163H11.8747C15.833 17.4163 17.4163 15.833 17.4163 11.8747V7.12467C17.4163 3.16634 15.833 1.58301 11.8747 1.58301H7.12467C3.16634 1.58301 1.58301 3.16634 1.58301 7.12467V11.8747C1.58301 15.833 3.16634 17.4163 7.12467 17.4163Z",
              stroke: "white",
              strokeOpacity: "0.5",
              strokeWidth: "1.1875",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
          ],
        }),
        k = (0, s.jsxs)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "19",
          height: "19",
          viewBox: "0 0 19 19",
          fill: "none",
          children: [
            (0, s.jsx)("path", {
              d: "M5.4541 7.125C6.22993 7.51292 6.89493 8.09875 7.37785 8.82708C7.65493 9.23875 7.65493 9.76917 7.37785 10.1808C6.89493 10.9012 6.22993 11.4871 5.4541 11.875",
              stroke: "white",
              strokeOpacity: "0.5",
              strokeWidth: "1.1875",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
            (0, s.jsx)("path", {
              d: "M10.292 11.875H13.4587",
              stroke: "white",
              strokeOpacity: "0.5",
              strokeWidth: "1.1875",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
            (0, s.jsx)("path", {
              d: "M7.12467 17.4163H11.8747C15.833 17.4163 17.4163 15.833 17.4163 11.8747V7.12467C17.4163 3.16634 15.833 1.58301 11.8747 1.58301H7.12467C3.16634 1.58301 1.58301 3.16634 1.58301 7.12467V11.8747C1.58301 15.833 3.16634 17.4163 7.12467 17.4163Z",
              stroke: "white",
              strokeOpacity: "0.5",
              strokeWidth: "1.1875",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
            (0, s.jsx)("path", {
              d: "M2.375 0.791667L18.2083 16.625",
              stroke: "white",
              strokeOpacity: "0.5",
              strokeWidth: "1.1875",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
          ],
        }),
        v = (0, s.jsxs)("svg", {
          width: "19",
          height: "19",
          viewBox: "0 0 19 19",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [
            (0, s.jsx)("path", {
              d: "M3.95801 6.33301C5.26968 6.33301 6.33301 5.26968 6.33301 3.95801C6.33301 2.64633 5.26968 1.58301 3.95801 1.58301C2.64633 1.58301 1.58301 2.64633 1.58301 3.95801C1.58301 5.26968 2.64633 6.33301 3.95801 6.33301Z",
              stroke: "white",
              strokeOpacity: "0.5",
              strokeWidth: "1.1875",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
            (0, s.jsx)("path", {
              d: "M15.042 11.875C16.3537 11.875 17.417 10.8117 17.417 9.5C17.417 8.18832 16.3537 7.125 15.042 7.125C13.7303 7.125 12.667 8.18832 12.667 9.5C12.667 10.8117 13.7303 11.875 15.042 11.875Z",
              stroke: "white",
              strokeOpacity: "0.5",
              strokeWidth: "1.1875",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
            (0, s.jsx)("path", {
              d: "M3.95801 17.417C5.26968 17.417 6.33301 16.3537 6.33301 15.042C6.33301 13.7303 5.26968 12.667 3.95801 12.667C2.64633 12.667 1.58301 13.7303 1.58301 15.042C1.58301 16.3537 2.64633 17.417 3.95801 17.417Z",
              stroke: "white",
              strokeOpacity: "0.5",
              strokeWidth: "1.1875",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
            (0, s.jsx)("path", {
              d: "M12.6663 9.49967H7.12467C5.38301 9.49967 3.95801 8.70801 3.95801 6.33301V12.6663",
              stroke: "white",
              strokeOpacity: "0.5",
              strokeWidth: "1.1875",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
          ],
        }),
        b = (0, s.jsxs)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "19",
          height: "19",
          viewBox: "0 0 19 19",
          fill: "none",
          children: [
            (0, s.jsx)("path", {
              d: "M15.8333 11.0837C16.7078 11.0837 17.4167 10.3748 17.4167 9.50033C17.4167 8.62587 16.7078 7.91699 15.8333 7.91699C14.9589 7.91699 14.25 8.62587 14.25 9.50033C14.25 10.3748 14.9589 11.0837 15.8333 11.0837Z",
              stroke: "white",
              strokeOpacity: "0.5",
              strokeWidth: "1.1875",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
            (0, s.jsx)("path", {
              d: "M15.8333 4.74967C16.7078 4.74967 17.4167 4.04079 17.4167 3.16634C17.4167 2.29189 16.7078 1.58301 15.8333 1.58301C14.9589 1.58301 14.25 2.29189 14.25 3.16634C14.25 4.04079 14.9589 4.74967 15.8333 4.74967Z",
              stroke: "white",
              strokeOpacity: "0.5",
              strokeWidth: "1.1875",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
            (0, s.jsx)("path", {
              d: "M15.8333 17.4167C16.7078 17.4167 17.4167 16.7078 17.4167 15.8333C17.4167 14.9589 16.7078 14.25 15.8333 14.25C14.9589 14.25 14.25 14.9589 14.25 15.8333C14.25 16.7078 14.9589 17.4167 15.8333 17.4167Z",
              stroke: "white",
              strokeOpacity: "0.5",
              strokeWidth: "1.1875",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
            (0, s.jsx)("path", {
              d: "M3.16634 11.0837C4.04079 11.0837 4.74967 10.3748 4.74967 9.50033C4.74967 8.62587 4.04079 7.91699 3.16634 7.91699C2.29189 7.91699 1.58301 8.62587 1.58301 9.50033C1.58301 10.3748 2.29189 11.0837 3.16634 11.0837Z",
              stroke: "white",
              strokeOpacity: "0.5",
              strokeWidth: "1.1875",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
            (0, s.jsx)("path", {
              d: "M4.75 9.5H14.25",
              stroke: "white",
              strokeOpacity: "0.5",
              strokeWidth: "1.1875",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
            (0, s.jsx)("path", {
              d: "M14.2497 3.16699H11.083C9.49967 3.16699 8.70801 3.95866 8.70801 5.54199V13.4587C8.70801 15.042 9.49967 15.8337 11.083 15.8337H14.2497",
              stroke: "white",
              strokeOpacity: "0.5",
              strokeWidth: "1.1875",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
          ],
        }),
        A = (0, s.jsx)("svg", {
          width: "16",
          height: "16",
          viewBox: "0 0 16 16",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: (0, s.jsx)("path", {
            d: "M3 7.99935L6.32941 11.3327L13 4.66602",
            stroke: "#32BBFF",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          }),
        }),
        N = (0, s.jsxs)("svg", {
          width: "16",
          height: "16",
          viewBox: "0 0 16 16",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [
            (0, s.jsx)("path", {
              d: "M1.33301 8.33333C1.33301 7.59693 1.92996 7 2.66634 7C3.77091 7 4.66634 7.8954 4.66634 9V11.6667C4.66634 12.7713 3.77091 13.6667 2.66634 13.6667C1.92996 13.6667 1.33301 13.0697 1.33301 12.3333V8.33333Z",
              stroke: "#FFD53A",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
            (0, s.jsx)("path", {
              d: "M10.3195 5.20385L10.1419 5.77723C9.99646 6.24708 9.92373 6.482 9.97966 6.66754C10.0249 6.81761 10.1243 6.94701 10.2597 7.03214C10.427 7.13734 10.6801 7.13734 11.1864 7.13734H11.4557C13.1691 7.13734 14.0258 7.13734 14.4305 7.64454C14.4767 7.70248 14.5178 7.76414 14.5534 7.82881C14.8647 8.39441 14.5108 9.15641 13.803 10.6804C13.1535 12.0789 12.8287 12.7782 12.2257 13.1898C12.1673 13.2296 12.1073 13.2672 12.0459 13.3024C11.411 13.6663 10.6245 13.6663 9.05126 13.6663H8.71006C6.80413 13.6663 5.85118 13.6663 5.25909 13.0927C4.66699 12.5189 4.66699 11.5956 4.66699 9.74894V9.09987C4.66699 8.12941 4.66699 7.64421 4.83922 7.20007C5.01145 6.75594 5.34123 6.39077 6.00079 5.66042L8.72839 2.64005C8.79679 2.5643 8.83099 2.52642 8.86119 2.50018C9.14266 2.2552 9.57713 2.28277 9.82326 2.56124C9.84966 2.59107 9.87846 2.63295 9.93606 2.7167C10.0262 2.84771 10.0713 2.91321 10.1106 2.97811C10.4622 3.55909 10.5686 4.24925 10.4075 4.90444C10.3895 4.97762 10.3662 5.05308 10.3195 5.20385Z",
              stroke: "#FFD53A",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
          ],
        }),
        L = (0, s.jsxs)("svg", {
          width: "16",
          height: "16",
          viewBox: "0 0 16 16",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [
            (0, s.jsx)("path", {
              d: "M4 4L12 12",
              stroke: "#FF5252",
              strokeWidth: "1.5",
              strokeLinecap: "round",
            }),
            (0, s.jsx)("path", {
              d: "M12 4L4 12",
              stroke: "#FF5252",
              strokeWidth: "1.5",
              strokeLinecap: "round",
            }),
          ],
        }),
        y = (0, s.jsxs)("svg", {
          width: "17",
          height: "16",
          viewBox: "0 0 17 16",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [
            (0, s.jsx)("path", {
              d: "M2.13281 8.33333C2.13281 7.59693 2.72977 7 3.46615 7C4.57071 7 5.46615 7.8954 5.46615 9V11.6667C5.46615 12.7713 4.57071 13.6667 3.46615 13.6667C2.72977 13.6667 2.13281 13.0697 2.13281 12.3333V8.33333Z",
              stroke: "#4CFF91",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
            (0, s.jsx)("path", {
              d: "M11.1193 5.20385L10.9417 5.77723C10.7963 6.24708 10.7235 6.482 10.7795 6.66754C10.8247 6.81761 10.9241 6.94701 11.0595 7.03214C11.2268 7.13734 11.4799 7.13734 11.9862 7.13734H12.2555C13.9689 7.13734 14.8256 7.13734 15.2303 7.64454C15.2765 7.70248 15.3176 7.76414 15.3532 7.82881C15.6645 8.39441 15.3106 9.15641 14.6028 10.6804C13.9533 12.0789 13.6285 12.7782 13.0255 13.1898C12.9671 13.2296 12.9071 13.2672 12.8457 13.3024C12.2108 13.6663 11.4243 13.6663 9.85106 13.6663H9.50986C7.60393 13.6663 6.65098 13.6663 6.05889 13.0927C5.4668 12.5189 5.4668 11.5956 5.4668 9.74894V9.09987C5.4668 8.12941 5.4668 7.64421 5.63902 7.20007C5.81125 6.75594 6.14103 6.39077 6.80059 5.66042L9.5282 2.64005C9.5966 2.5643 9.6308 2.52642 9.661 2.50018C9.94246 2.2552 10.3769 2.28277 10.6231 2.56124C10.6495 2.59107 10.6783 2.63295 10.7359 2.7167C10.826 2.84771 10.8711 2.91321 10.9104 2.97811C11.262 3.55909 11.3684 4.24925 11.2073 4.90444C11.1893 4.97762 11.166 5.05308 11.1193 5.20385Z",
              stroke: "#4CFF91",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
          ],
        }),
        M = (0, s.jsxs)("svg", {
          width: "17",
          height: "16",
          viewBox: "0 0 17 16",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [
            (0, s.jsx)("path", {
              d: "M8.7998 3.0332V9.15296",
              stroke: "#FFD53A",
              strokeWidth: "1.5",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
            (0, s.jsx)("path", {
              d: "M8.7998 12.8838V13.0004",
              stroke: "#FFD53A",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
          ],
        }),
        _ = (0, s.jsxs)("svg", {
          width: "17",
          height: "16",
          viewBox: "0 0 17 16",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [
            (0, s.jsx)("path", {
              d: "M1.93262 7.66634C1.93262 8.40274 2.52957 8.99967 3.26595 8.99967C4.37052 8.99967 5.26595 8.10427 5.26595 6.99967V4.33301C5.26595 3.22844 4.37052 2.33301 3.26595 2.33301C2.52957 2.33301 1.93262 2.92996 1.93262 3.66634V7.66634Z",
              stroke: "#FF5252",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
            (0, s.jsx)("path", {
              d: "M10.9191 10.7955L10.7415 10.2221C10.5961 9.75227 10.5233 9.51734 10.5793 9.33181C10.6245 9.18174 10.7239 9.05234 10.8593 8.96721C11.0266 8.86201 11.2797 8.86201 11.786 8.86201H12.0553C13.7687 8.86201 14.6254 8.86201 15.0301 8.35481C15.0763 8.29687 15.1174 8.23521 15.153 8.17054C15.4643 7.60494 15.1104 6.84294 14.4026 5.31894C13.7531 3.92041 13.4283 3.22115 12.8253 2.80957C12.7669 2.76973 12.7069 2.73214 12.6455 2.69691C12.0106 2.33301 11.2241 2.33301 9.65087 2.33301H9.30967C7.40373 2.33301 6.45079 2.33301 5.8587 2.90669C5.2666 3.48038 5.2666 4.40372 5.2666 6.25039V6.89947C5.2666 7.86994 5.2666 8.35514 5.43883 8.79927C5.61105 9.24341 5.94084 9.60861 6.6004 10.3389L9.328 13.3593C9.3964 13.4351 9.4306 13.4729 9.4608 13.4992C9.74227 13.7441 10.1767 13.7166 10.4229 13.4381C10.4493 13.4083 10.4781 13.3664 10.5357 13.2827C10.6258 13.1517 10.6709 13.0861 10.7102 13.0212C11.0618 12.4403 11.1682 11.7501 11.0071 11.0949C10.9891 11.0217 10.9658 10.9463 10.9191 10.7955Z",
              stroke: "#FF5252",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
          ],
        }),
        V = (0, s.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "14",
          height: "14",
          viewBox: "0 0 14 14",
          fill: "none",
          children: (0, s.jsx)("path", {
            d: "M13 1L7 7M7 7L1 13M7 7L13 13M7 7L1 1",
            stroke: "white",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          }),
        }),
        H = (0, s.jsxs)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "16",
          height: "17",
          viewBox: "0 0 16 17",
          fill: "none",
          children: [
            (0, s.jsx)("path", {
              d: "M2 8.5C5 8.5 8 5.5 8 2.5C8 5.5 11 8.5 14 8.5C11 8.5 8 11.5 8 14.5C8 11.5 5 8.5 2 8.5Z",
              fill: "white",
            }),
            (0, s.jsx)("path", {
              d: "M1.33301 13.5002C1.88856 13.5002 2.99967 12.389 2.99967 11.8335C2.99967 12.389 4.11079 13.5002 4.66634 13.5002C4.11079 13.5002 2.99967 14.6113 2.99967 15.1668C2.99967 14.6113 1.88856 13.5002 1.33301 13.5002Z",
              fill: "white",
            }),
            (0, s.jsx)("path", {
              d: "M10.667 3.8335C11.3337 3.8335 12.667 2.50016 12.667 1.8335C12.667 2.50016 14.0003 3.8335 14.667 3.8335C14.0003 3.8335 12.667 5.16683 12.667 5.8335C12.667 5.16683 11.3337 3.8335 10.667 3.8335Z",
              fill: "white",
            }),
          ],
        }),
        B = (0, s.jsx)("svg", {
          width: "18",
          height: "18",
          viewBox: "0 0 19 18",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: (0, s.jsx)("path", {
            d: "M4.15234 17.9996H0.306641V5.97656H4.15234V17.9996ZM2.22754 4.32812C1.05859 4.32812 0.111328 3.35742 0.111328 2.16406C0.111328 1.59034 0.339219 1.03989 0.744141 0.634766C1.14912 0.229645 1.69952 0.00170898 2.27324 0.00170898C2.84696 0.00170898 3.39736 0.229645 3.80234 0.634766C4.20727 1.03989 4.43521 1.59034 4.43521 2.16406C4.43521 3.35742 3.48633 4.32812 2.22754 4.32812ZM18.5547 17.9996H14.7168V12.168C14.7168 10.7988 14.6895 9.02344 12.7793 9.02344C10.8418 9.02344 10.5449 10.5117 10.5449 12.0703V17.9996H6.70117V5.97656H10.3809V7.61719H10.4355C10.9707 6.61328 12.2695 5.55469 14.2422 5.55469C18.1348 5.55469 18.8613 8.24219 18.8613 11.7422V17.9996H18.5547Z",
            fill: "white",
          }),
        }),
        F = (0, s.jsx)("svg", {
          width: "18",
          height: "18",
          viewBox: "0 0 24 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: (0, s.jsx)("path", {
            d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
            fill: "white",
          }),
        }),
        O = (0, s.jsxs)("svg", {
          width: "20",
          height: "14",
          viewBox: "0 0 20 14",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [
            (0, s.jsx)("path", {
              d: "M19.582 2.186c-.217-.815-.856-1.453-1.671-1.671C16.376 0 10.047 0 10.047 0S3.717 0 2.183.515c-.815.218-1.454.856-1.671 1.671C0 3.72 0 7 0 7s0 3.28.512 4.814c.217.815.856 1.453 1.671 1.671 1.534.515 7.864.515 7.864.515s6.329 0 7.864-.515c.815-.218 1.454-.856 1.671-1.671C20 10.28 20 7 20 7s0-3.28-.418-4.814z",
              fill: "white",
            }),
            (0, s.jsx)("path", {
              d: "M8.023 10.053L13.2 7l-5.177-3.053v6.106z",
              fill: "#000",
            }),
          ],
        });
    },
    58518: (e, t, i) => {
      i.d(t, { A: () => s });
      let s = {
        src: "/_next/static/media/logoFull.a0c32ce7.png",
        height: 543,
        width: 2470,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAMAAABSSm3fAAAAG1BMVEXx8u/s7e7x8fEiev///+5DjPxNlPzw8PDv7+877ke4AAAACXRSTlNrWkGFS2JseWJnNTYvAAAACXBIWXMAACxKAAAsSgF3enRNAAAAGklEQVR4nGNgZmNgYGJkZGJgZmVhZGBgYAcAAUkAJG6S99UAAAAASUVORK5CYII=",
        blurWidth: 8,
        blurHeight: 2,
      };
    },
    60599: (e, t, i) => {
      i.d(t, { default: () => l });
      var s = i(46877),
        r = i(24567);
      let l = (e) => {
        let {
          children: t,
          transition: i,
          delay: l = 0,
          className: a = "",
          initialY: o = 40,
        } = e;
        return (0, s.jsx)(r.P.div, {
          className: a,
          initial: { opacity: 0, y: o },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: !0, amount: 0.5 },
          transition: {
            type: "spring",
            damping: 30,
            stiffness: 200,
            mass: 0.15,
            delay: l,
            ...i,
          },
          children: t,
        });
      };
    },
    61887: (e, t, i) => {
      i.d(t, { default: () => l });
      var s = i(46877);
      i(40329);
      var r = i(24567);
      let l = (e) => {
        let { children: t, className: i, delay: l = 0 } = e,
          a = {
            hidden: { opacity: 0, y: 6, filter: "blur(6px)" },
            visible: {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              transition:
                l > 0
                  ? {
                      delay: l,
                      type: "spring",
                      mass: 0.15,
                      damping: 20,
                      stiffness: 200,
                    }
                  : { type: "spring", mass: 0.15, damping: 20, stiffness: 200 },
            },
          },
          o = null == t ? void 0 : t.toString().split(" ");
        return (0, s.jsx)(r.P.h1, {
          className:
            "font-tasa text-[32px] leading-[1.25em] font-semibold tracking-[1.44px] text-white md:text-[40px] ".concat(
              i
            ),
          variants: {
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          },
          initial: "hidden",
          whileInView: "visible",
          viewport: { once: !0, amount: 0.5 },
          children:
            null == o
              ? void 0
              : o.map((e, t) =>
                  (0, s.jsxs)(
                    r.P.span,
                    {
                      variants: a,
                      className: "inline-block",
                      children: [e, "\xa0"],
                    },
                    t
                  )
                ),
        });
      };
    },
    62390: (e, t, i) => {
      i.r(t), i.d(t, { default: () => C });
      var s = i(46877),
        r = i(57694),
        l = i(78142),
        a = i(24567),
        o = i(32814),
        n = i(58518),
        x = i(17701),
        d = i(56895),
        h = i(87178),
        c = i.n(h),
        p = i(40329),
        w = i(97662),
        u = i(90933);
      function C() {
        let [e, t] = (0, p.useState)(!1),
          { scrollY: i } = (0, l.L)(),
          [h, C] = (0, p.useState)(!1),
          { starCount: m, isLoading: g } = (0, w.w)();
        return (
          (0, p.useEffect)(
            () =>
              i.onChange((e) => {
                C(e > 100);
              }),
            [i]
          ),
          (0, s.jsxs)(a.P.div, {
            transition: { type: "tween", duration: 0.3 },
            initial: { y: -20, opacity: 0 },
            animate: {
              y: 0,
              opacity: 1,
              backdropFilter: h ? "blur(10px)" : "blur(0px)",
              WebkitBackdropFilter: h ? "blur(10px)" : "blur(0px)",
            },
            className:
              "fixed top-0 z-30 flex w-full justify-center border-b-[1px] border-white/20",
            children: [
              (0, s.jsx)(o.N, {
                children:
                  e &&
                  (0, s.jsxs)(a.P.div, {
                    initial: { opacity: 0, y: -20 },
                    animate: { opacity: 1, y: 0 },
                    exit: { opacity: 0, y: -20 },
                    transition: { ease: "easeIn", duration: 0.3 },
                    className: "fixed z-1 h-screen w-screen bg-black/80",
                    children: [
                      (0, s.jsx)("div", {
                        onClick: () => t(!1),
                        className: "absolute top-0 left-0 h-full w-full",
                      }),
                      (0, s.jsxs)("div", {
                        className:
                          "relative flex w-full flex-col gap-[8px] border-b-[1px] border-white/20 bg-black px-[16px] pt-[100px] pb-[18px]",
                        children: [
                          (0, s.jsxs)("div", {
                            className:
                              "flex w-full flex-col gap-[16px] border-b-[1px] border-white/20 pb-[28px]",
                            children: [
                              (0, s.jsx)(c(), {
                                href: "https://blog.obiya.dev",
                                target: "_blank",
                                className: "text-[16px] text-white",
                                children: "Blog",
                              }),
                              (0, s.jsx)(c(), {
                                href: "/docs",
                                className: "text-[16px] text-white",
                                children: "Docs",
                              }),
                              (0, s.jsx)(c(), {
                                href: "/manifesto",
                                className: "text-[16px] text-white",
                                children: "Manifesto",
                              }),
                              (0, s.jsx)(u.default, {
                                variant: u.E.CLOUD_NAVBAR,
                              }),
                            ],
                          }),
                          (0, s.jsxs)("div", {
                            className: "flex w-fit flex-col gap-[8px]",
                            children: [
                              
                              (0, s.jsxs)(c(), {
                                href: x.nE,
                                target: "_blank",
                                className:
                                  "flex cursor-pointer items-center gap-[16px] py-[8px] text-[16px] text-white",
                                children: [
                                  d.F9,
                                  " ",
                                  (0, s.jsx)("p", {
                                    children: "Contribute on Github ",
                                  }),
                                  " ",
                                  (0, s.jsx)("p", {
                                    className: "max-md:hidden",
                                    children: "|",
                                  }),
                                  (0, s.jsxs)("div", {
                                    className:
                                      "flex items-center gap-[6px] text-white max-md:hidden",
                                    children: [
                                      d.wv,
                                      (0, s.jsx)("p", {
                                        children: g
                                          ? (0, s.jsx)("span", {
                                              className:
                                                "inline-block animate-pulse",
                                              children: "----",
                                            })
                                          : m || "----",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
              }),
              (0, s.jsxs)("nav", {
                className:
                  "z-2 flex w-full max-w-[1200px] items-center justify-between py-[18px] max-xl:px-[16px] max-sm:border-b-[1px] max-sm:border-white/20 max-sm:py-[11px]",
                children: [
                  (0, s.jsxs)("div", {
                    className: "flex items-center gap-[54px]",
                    children: [
                      (0, s.jsxs)("div", {
                        className: "flex w-[94px] flex-col",
                        children: [
                          (0, s.jsxs)(c(), {
                            href: "/",
                            "aria-label": "Go To Home",
                            children: [
                              " ",
                              (0, s.jsx)(r.default, {
                                priority: !0,
                                src: n.A,
                                alt: "Obiya Logo",
                              }),
                            ],
                          }),
                          (0, s.jsxs)("div", {
                            className:
                              "relative bottom-[-24px] flex items-center gap-[4px]",
                            children: [
                              (0, s.jsx)("div", {
                                className: "h-[2px] w-[24px] bg-[#088CFF]",
                              }),
                              (0, s.jsx)("div", {
                                className: "h-[2px] grow bg-white",
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, s.jsxs)("div", {
                        className: "flex gap-[24px] max-md:hidden",
                        children: [
                          (0, s.jsx)(c(), {
                            href: "https://blog.obiya.dev",
                            target: "_blank",
                            className:
                              "text-[16px] text-white/60 transition-colors ease-in-out hover:text-white",
                            children: "Blog",
                          }),
                          (0, s.jsx)(c(), {
                            href: "/docs",
                            className:
                              "text-[16px] text-white/60 transition-colors ease-in-out hover:text-white",
                            children: "Docs",
                          }),
                          (0, s.jsx)(c(), {
                            href: "/manifesto",
                            className:
                              "text-[16px] text-white/60 transition-colors ease-in-out hover:text-white",
                            children: "Manifesto",
                          }),
                          (0, s.jsx)(u.default, { variant: u.E.CLOUD_NAVBAR }),
                        ],
                      }),
                    ],
                  }),
                  (0, s.jsxs)("div", {
                    className: "flex items-center gap-[14px] max-md:gap-[4px]",
                    children: [
                      
                      (0, s.jsxs)(c(), {
                        href: x.nE,
                        target: "_blank",
                        className:
                          "font-tasa flex cursor-pointer items-center gap-[16px] rounded-[4px] border-[1px] border-white/20 bg-black/40 px-[8px] py-[4px] text-[16px] font-medium tracking-wider text-white transition-colors ease-in-out hover:text-white max-sm:gap-[8px] max-sm:py-[8px] max-sm:text-[14px]",
                        children: [
                          d.F9,
                          (0, s.jsx)("p", {
                            className: "sm:-ml-[8px] max-lg:hidden",
                            children: "Github ",
                          }),
                          (0, s.jsx)("p", {
                            className: "text-white/40 max-lg:hidden",
                            children: "|",
                          }),
                          (0, s.jsxs)("div", {
                            className: "flex items-center gap-[6px] text-white",
                            children: [
                              d.wv,
                              (0, s.jsx)("p", {
                                children: g
                                  ? (0, s.jsx)("span", {
                                      className: "inline-block animate-pulse",
                                      children: "----",
                                    })
                                  : m || "----",
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, s.jsx)(
                        () =>
                          (0, s.jsx)("button", {
                            onClick: () => t(!e),
                            className:
                              "h-[40px] w-[40px] rounded-[4px] bg-white/10 p-[10px] md:hidden",
                            children: (0, s.jsxs)("div", {
                              className:
                                "flex h-full w-full flex-col items-end justify-center space-y-[5px]",
                              children: [
                                (0, s.jsx)(a.P.div, {
                                  className: "h-[1.5px] w-[80%] bg-white",
                                  animate: e
                                    ? { width: "100%", rotate: 45, y: 7 }
                                    : { width: "80%", rotate: 0, y: 0 },
                                  transition: { duration: 0.3 },
                                }),
                                (0, s.jsx)(a.P.div, {
                                  className: "h-[1.5px] w-full bg-white",
                                  animate: e ? { opacity: 0 } : { opacity: 1 },
                                  transition: { duration: 0.2 },
                                }),
                                (0, s.jsx)(a.P.div, {
                                  className: "h-[1.5px] w-[50%] bg-white",
                                  animate: e
                                    ? { width: "100%", rotate: -45, y: -6 }
                                    : { width: "50%", rotate: 0, y: 0 },
                                  transition: { duration: 0.3 },
                                }),
                              ],
                            }),
                          }),
                        {}
                      ),
                    ],
                  }),
                ],
              }),
            ],
          })
        );
      }
    },
    84919: (e, t, i) => {
      i.d(t, { A: () => r });
      var s = i(46877);
      i(40329);
      let r = (e) => {
        let { children: t, className: i = "", ...r } = e;
        return (0, s.jsx)("button", {
          ...r,
          className:
            "flex cursor-pointer items-center justify-center gap-[10px] rounded-[12px] border border-white bg-[radial-gradient(153.04%_109.45%_at_50%_0%,_#EFF3FF_0%,_#FFF5EA_100%)] px-4 py-3 text-[16px] font-medium text-black shadow-[inset_0px_-1.5px_2px_0px_#FFF,_0px_29px_37.1px_-6px_rgba(0,1,78,0.3)] transition duration-300 ease-in-out ".concat(
              i,
              " "
            ),
          children: t,
        });
      };
    },
    90933: (e, t, i) => {
      i.d(t, { E: () => x, default: () => d });
      var s = i(46877),
        r = i(40329),
        l = i(25938),
        a = i(84919);
      let o = (e) => {
        let { children: t, className: i = "", ...r } = e;
        return (0, s.jsx)("button", {
          ...r,
          className:
            "flex cursor-pointer items-center justify-center gap-[10px] rounded-[12px] bg-[rgba(255,255,255,0.08)] px-4 py-3 text-sm text-[16px] font-medium text-white transition duration-300 ease-in-out ".concat(
              i,
              " "
            ),
          children: t,
        });
      };
      var n = i(56895);
      let x = {
        PRIMARY: "primary",
        SECONDARY: "secondary",
        CLOUD_COMING_SOON: "cloudComingSoon",
        CLOUD_NAVBAR: "cloudNavbar",
      };
      function d(e) {
        let { variant: t, text: i, icon: d } = e,
          [h, c] = (0, r.useState)(!1),
          p = () => {
            c(!0);
          };
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)(l.A, { isOpen: h, onClose: () => c(!1) }),
            t === x.PRIMARY &&
              (0, s.jsxs)(a.A, {
                onClick: p,
                className: "w-fit max-lg:w-full",
                children: [null != i ? i : "Join Now", " ", null != d ? d : ""],
              }),
            " ",
            t === x.SECONDARY &&
              (0, s.jsxs)(o, {
                onClick: p,
                className: "w-fit max-lg:w-full",
                children: [null != i ? i : "Join Now", " ", null != d ? d : ""],
              }),
            t === x.CLOUD_COMING_SOON &&
              (0, s.jsxs)("button", {
                "aria-label": "Click To Register For Obiya Cloud",
                onClick: p,
                className:
                  "flex cursor-pointer gap-[4px] font-sans text-[16px] text-white/60 transition-colors ease-in-out hover:text-white",
                children: [
                  (0, s.jsx)("div", {
                    className:
                      "rounded-[4px] bg-[#20ABFC]/12 px-[6px] text-[#088CFF]",
                    children: "Join Beta",
                  }),
                  (0, s.jsx)("p", { children: "Obiya Cloud" }),
                ],
              }),
            t === x.CLOUD_NAVBAR &&
              (0, s.jsxs)("button", {
                onClick: p,
                className:
                  "flex cursor-pointer items-center gap-[4px] bg-linear-to-r from-[#53B4FF] to-white bg-clip-text font-sans text-[16px] font-medium text-transparent",
                "aria-label": "Click To Register For Obiya Cloud ",
                children: [
                  (0, s.jsx)("p", { children: "Obiya Cloud" }),
                  " ",
                  n.TN,
                ],
              }),
          ],
        });
      }
    },
    97662: (e, t, i) => {
      i.d(t, { w: () => r });
      var s = i(40329);
      let r = () => {
        let [e, t] = (0, s.useState)(null),
          [i, r] = (0, s.useState)(!0);
        return (
          (0, s.useEffect)(() => {
            fetch("https://api.github.com/repos/ObiyaDev/Obiya")
              .then((e) => e.json())
              .then((e) => {
                var i;
                t(
                  null != (i = null == e ? void 0 : e.stargazers_count)
                    ? i
                    : null
                ),
                  r(!1);
              })
              .catch((e) => {
                console.error("Error fetching GitHub stars:", e),
                  t(null),
                  r(!1);
              });
          }, []),
          { starCount: e, isLoading: i }
        );
      };
    },
  },
]);
