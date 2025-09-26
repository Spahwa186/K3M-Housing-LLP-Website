(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [962], {
        76852: function(e, n, t) {
            "use strict";
            t.d(n, {
                Z: function() {
                    return a
                }
            });
            var r = t(67294);

            function a(e) {
                const n = function(e) {
                    const n = (0, r.useRef)(e);
                    return n.current = e, n
                }(e);
                (0, r.useEffect)((() => () => n.current()), [])
            }
        },
        43021: function(e, n, t) {
            "use strict";
            t.d(n, {
                Z: function() {
                    return R
                }
            });
            var r = t(78146),
                a = t(67294);
            var i = function(e, n) {
                    const t = (0, a.useRef)(!0);
                    (0, a.useEffect)((() => {
                        if (!t.current) return e();
                        t.current = !1
                    }), n)
                },
                s = t(92029);
            var o = t(76852);
            const l = 2 ** 31 - 1;

            function c(e, n, t) {
                const r = t - Date.now();
                e.current = r <= l ? setTimeout(n, r) : setTimeout((() => c(e, n, t)), l)
            }

            function u() {
                const e = function() {
                        const e = (0, a.useRef)(!0),
                            n = (0, a.useRef)((() => e.current));
                        return (0, a.useEffect)((() => (e.current = !0, () => {
                            e.current = !1
                        })), []), n.current
                    }(),
                    n = (0, a.useRef)();
                return (0, o.Z)((() => clearTimeout(n.current))), (0, a.useMemo)((() => {
                    const t = () => clearTimeout(n.current);
                    return {
                        set: function(r, a = 0) {
                            e() && (t(), a <= l ? n.current = setTimeout(r, a) : c(n, r, Date.now() + a))
                        },
                        clear: t,
                        handleRef: n
                    }
                }), [])
            }
            var d = t(24079),
                f = t(93967),
                m = t.n(f),
                v = t(47150),
                h = t(76792),
                p = t(85893);
            const y = a.forwardRef((({
                className: e,
                bsPrefix: n,
                as: t = "div",
                ...r
            }, a) => (n = (0, h.vE)(n, "carousel-caption"), (0, p.jsx)(t, {
                ref: a,
                className: m()(e, n),
                ...r
            }))));
            y.displayName = "CarouselCaption";
            var x = y;
            const g = a.forwardRef((({
                as: e = "div",
                bsPrefix: n,
                className: t,
                ...r
            }, a) => {
                const i = m()(t, (0, h.vE)(n, "carousel-item"));
                return (0, p.jsx)(e, {
                    ref: a,
                    ...r,
                    className: i
                })
            }));
            g.displayName = "CarouselItem";
            var b = g,
                w = t(53439),
                N = t(93825),
                C = t(34509),
                E = t(32785);
            const k = a.forwardRef((({
                defaultActiveIndex: e = 0,
                ...n
            }, t) => {
                const {
                    as: o = "div",
                    bsPrefix: l,
                    slide: c = !0,
                    fade: f = !1,
                    controls: y = !0,
                    indicators: x = !0,
                    indicatorLabels: g = [],
                    activeIndex: b,
                    onSelect: k,
                    onSlide: R,
                    onSlid: $,
                    interval: S = 5e3,
                    keyboard: j = !0,
                    onKeyDown: M,
                    pause: I = "hover",
                    onMouseOver: Z,
                    onMouseOut: T,
                    wrap: O = !0,
                    touch: A = !0,
                    onTouchStart: q,
                    onTouchMove: D,
                    onTouchEnd: L,
                    prevIcon: F = (0, p.jsx)("span", {
                        "aria-hidden": "true",
                        className: "carousel-control-prev-icon"
                    }),
                    prevLabel: P = "Previous",
                    nextIcon: z = (0, p.jsx)("span", {
                        "aria-hidden": "true",
                        className: "carousel-control-next-icon"
                    }),
                    nextLabel: X = "Next",
                    variant: _,
                    className: H,
                    children: B,
                    ...K
                } = (0, v.Ch)({
                    defaultActiveIndex: e,
                    ...n
                }, {
                    activeIndex: "onSelect"
                }), U = (0, h.vE)(l, "carousel"), W = (0, h.SC)(), G = (0, a.useRef)(null), [J, Q] = (0, a.useState)("next"), [V, Y] = (0, a.useState)(!1), [ee, ne] = (0, a.useState)(!1), [te, re] = (0, a.useState)(b || 0);
                (0, a.useEffect)((() => {
                    ee || b === te || (G.current ? Q(G.current) : Q((b || 0) > te ? "next" : "prev"), c && ne(!0), re(b || 0))
                }), [b, ee, te, c]), (0, a.useEffect)((() => {
                    G.current && (G.current = null)
                }));
                let ae, ie = 0;
                (0, w.Ed)(B, ((e, n) => {
                    ++ie, n === b && (ae = e.props.interval)
                }));
                const se = (0, s.Z)(ae),
                    oe = (0, a.useCallback)((e => {
                        if (ee) return;
                        let n = te - 1;
                        if (n < 0) {
                            if (!O) return;
                            n = ie - 1
                        }
                        G.current = "prev", null == k || k(n, e)
                    }), [ee, te, k, O, ie]),
                    le = (0, r.Z)((e => {
                        if (ee) return;
                        let n = te + 1;
                        if (n >= ie) {
                            if (!O) return;
                            n = 0
                        }
                        G.current = "next", null == k || k(n, e)
                    })),
                    ce = (0, a.useRef)();
                (0, a.useImperativeHandle)(t, (() => ({
                    element: ce.current,
                    prev: oe,
                    next: le
                })));
                const ue = (0, r.Z)((() => {
                        !document.hidden && function(e) {
                            if (!e || !e.style || !e.parentNode || !e.parentNode.style) return !1;
                            const n = getComputedStyle(e);
                            return "none" !== n.display && "hidden" !== n.visibility && "none" !== getComputedStyle(e.parentNode).display
                        }(ce.current) && (W ? oe() : le())
                    })),
                    de = "next" === J ? "start" : "end";
                i((() => {
                    c || (null == R || R(te, de), null == $ || $(te, de))
                }), [te]);
                const fe = `${U}-item-${J}`,
                    me = `${U}-item-${de}`,
                    ve = (0, a.useCallback)((e => {
                        (0, C.Z)(e), null == R || R(te, de)
                    }), [R, te, de]),
                    he = (0, a.useCallback)((() => {
                        ne(!1), null == $ || $(te, de)
                    }), [$, te, de]),
                    pe = (0, a.useCallback)((e => {
                        if (j && !/input|textarea/i.test(e.target.tagName)) switch (e.key) {
                            case "ArrowLeft":
                                return e.preventDefault(), void(W ? le(e) : oe(e));
                            case "ArrowRight":
                                return e.preventDefault(), void(W ? oe(e) : le(e))
                        }
                        null == M || M(e)
                    }), [j, M, oe, le, W]),
                    ye = (0, a.useCallback)((e => {
                        "hover" === I && Y(!0), null == Z || Z(e)
                    }), [I, Z]),
                    xe = (0, a.useCallback)((e => {
                        Y(!1), null == T || T(e)
                    }), [T]),
                    ge = (0, a.useRef)(0),
                    be = (0, a.useRef)(0),
                    we = u(),
                    Ne = (0, a.useCallback)((e => {
                        ge.current = e.touches[0].clientX, be.current = 0, "hover" === I && Y(!0), null == q || q(e)
                    }), [I, q]),
                    Ce = (0, a.useCallback)((e => {
                        e.touches && e.touches.length > 1 ? be.current = 0 : be.current = e.touches[0].clientX - ge.current, null == D || D(e)
                    }), [D]),
                    Ee = (0, a.useCallback)((e => {
                        if (A) {
                            const n = be.current;
                            Math.abs(n) > 40 && (n > 0 ? oe(e) : le(e))
                        }
                        "hover" === I && we.set((() => {
                            Y(!1)
                        }), S || void 0), null == L || L(e)
                    }), [A, I, oe, le, we, S, L]),
                    ke = null != S && !V && !ee,
                    Re = (0, a.useRef)();
                (0, a.useEffect)((() => {
                    var e, n;
                    if (!ke) return;
                    const t = W ? oe : le;
                    return Re.current = window.setInterval(document.visibilityState ? ue : t, null != (e = null != (n = se.current) ? n : S) ? e : void 0), () => {
                        null !== Re.current && clearInterval(Re.current)
                    }
                }), [ke, oe, le, se, S, ue, W]);
                const $e = (0, a.useMemo)((() => x && Array.from({
                    length: ie
                }, ((e, n) => e => {
                    null == k || k(n, e)
                }))), [x, ie, k]);
                return (0, p.jsxs)(o, {
                    ref: ce,
                    ...K,
                    onKeyDown: pe,
                    onMouseOver: ye,
                    onMouseOut: xe,
                    onTouchStart: Ne,
                    onTouchMove: Ce,
                    onTouchEnd: Ee,
                    className: m()(H, U, c && "slide", f && `${U}-fade`, _ && `${U}-${_}`),
                    children: [x && (0, p.jsx)("div", {
                        className: `${U}-indicators`,
                        children: (0, w.UI)(B, ((e, n) => (0, p.jsx)("button", {
                            type: "button",
                            "data-bs-target": "",
                            "aria-label": null != g && g.length ? g[n] : `Slide ${n+1}`,
                            className: n === te ? "active" : void 0,
                            onClick: $e ? $e[n] : void 0,
                            "aria-current": n === te
                        }, n)))
                    }), (0, p.jsx)("div", {
                        className: `${U}-inner`,
                        children: (0, w.UI)(B, ((e, n) => {
                            const t = n === te;
                            return c ? (0, p.jsx)(E.Z, { in: t,
                                onEnter: t ? ve : void 0,
                                onEntered: t ? he : void 0,
                                addEndListener: N.Z,
                                children: (n, r) => a.cloneElement(e, { ...r,
                                    className: m()(e.props.className, t && "entered" !== n && fe, ("entered" === n || "exiting" === n) && "active", ("entering" === n || "exiting" === n) && me)
                                })
                            }) : a.cloneElement(e, {
                                className: m()(e.props.className, t && "active")
                            })
                        }))
                    }), y && (0, p.jsxs)(p.Fragment, {
                        children: [(O || 0 !== b) && (0, p.jsxs)(d.Z, {
                            className: `${U}-control-prev`,
                            onClick: oe,
                            children: [F, P && (0, p.jsx)("span", {
                                className: "visually-hidden",
                                children: P
                            })]
                        }), (O || b !== ie - 1) && (0, p.jsxs)(d.Z, {
                            className: `${U}-control-next`,
                            onClick: le,
                            children: [z, X && (0, p.jsx)("span", {
                                className: "visually-hidden",
                                children: X
                            })]
                        })]
                    })]
                })
            }));
            k.displayName = "Carousel";
            var R = Object.assign(k, {
                Caption: x,
                Item: b
            })
        },
        36968: function(e, n, t) {
            "use strict";
            var r = t(93967),
                a = t.n(r),
                i = t(67294),
                s = t(76792),
                o = t(85893);
            const l = i.forwardRef((({
                bsPrefix: e,
                variant: n,
                animation: t = "border",
                size: r,
                as: i = "div",
                className: l,
                ...c
            }, u) => {
                const d = `${e=(0,s.vE)(e,"spinner")}-${t}`;
                return (0, o.jsx)(i, {
                    ref: u,
                    ...c,
                    className: a()(l, d, r && `${d}-${r}`, n && `text-${n}`)
                })
            }));
            l.displayName = "Spinner", n.Z = l
        },
        97005: function(e, n, t) {
            var r = t(67294);

            function a(e) {
                return e && "object" === typeof e && "default" in e ? e : {
                    default: e
                }
            }
            var i = a(r);
            ! function(e) {
                if (!e || "undefined" === typeof window) return;
                const n = document.createElement("style");
                n.setAttribute("type", "text/css"), n.innerHTML = e, document.head.appendChild(n)
            }('.rfm-marquee-container {\n  overflow-x: hidden;\n  display: flex;\n  flex-direction: row;\n  position: relative;\n  width: var(--width);\n  transform: var(--transform);\n}\n.rfm-marquee-container:hover div {\n  animation-play-state: var(--pause-on-hover);\n}\n.rfm-marquee-container:active div {\n  animation-play-state: var(--pause-on-click);\n}\n\n.rfm-overlay {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n.rfm-overlay::before, .rfm-overlay::after {\n  background: linear-gradient(to right, var(--gradient-color), rgba(255, 255, 255, 0));\n  content: "";\n  height: 100%;\n  position: absolute;\n  width: var(--gradient-width);\n  z-index: 2;\n  pointer-events: none;\n  touch-action: none;\n}\n.rfm-overlay::after {\n  right: 0;\n  top: 0;\n  transform: rotateZ(180deg);\n}\n.rfm-overlay::before {\n  left: 0;\n  top: 0;\n}\n\n.rfm-marquee {\n  flex: 0 0 auto;\n  min-width: var(--min-width);\n  z-index: 1;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  animation: scroll var(--duration) linear var(--delay) var(--iteration-count);\n  animation-play-state: var(--play);\n  animation-delay: var(--delay);\n  animation-direction: var(--direction);\n}\n@keyframes scroll {\n  0% {\n    transform: translateX(0%);\n  }\n  100% {\n    transform: translateX(-100%);\n  }\n}\n\n.rfm-initial-child-container {\n  flex: 0 0 auto;\n  display: flex;\n  min-width: auto;\n  flex-direction: row;\n  align-items: center;\n}\n\n.rfm-child {\n  transform: var(--transform);\n}');
            const s = r.forwardRef((function({
                style: e = {},
                className: n = "",
                autoFill: t = !1,
                play: a = !0,
                pauseOnHover: s = !1,
                pauseOnClick: o = !1,
                direction: l = "left",
                speed: c = 50,
                delay: u = 0,
                loop: d = 0,
                gradient: f = !1,
                gradientColor: m = "white",
                gradientWidth: v = 200,
                onFinish: h,
                onCycleComplete: p,
                onMount: y,
                children: x
            }, g) {
                const [b, w] = r.useState(0), [N, C] = r.useState(0), [E, k] = r.useState(1), [R, $] = r.useState(!1), S = r.useRef(null), j = g || S, M = r.useRef(null), I = r.useCallback((() => {
                    if (M.current && j.current) {
                        const e = j.current.getBoundingClientRect(),
                            n = M.current.getBoundingClientRect();
                        let r = e.width,
                            a = n.width;
                        "up" !== l && "down" !== l || (r = e.height, a = n.height), k(t && r && a && a < r ? Math.ceil(r / a) : 1), w(r), C(a)
                    }
                }), [t, j, l]);
                r.useEffect((() => {
                    if (R && (I(), M.current && j.current)) {
                        const e = new ResizeObserver((() => I()));
                        return e.observe(j.current), e.observe(M.current), () => {
                            e && e.disconnect()
                        }
                    }
                }), [I, j, R]), r.useEffect((() => {
                    I()
                }), [I, x]), r.useEffect((() => {
                    $(!0)
                }), []), r.useEffect((() => {
                    "function" === typeof y && y()
                }), []);
                const Z = r.useMemo((() => t ? N * E / c : N < b ? b / c : N / c), [t, b, N, E, c]),
                    T = r.useMemo((() => Object.assign(Object.assign({}, e), {
                        "--pause-on-hover": !a || s ? "paused" : "running",
                        "--pause-on-click": !a || s && !o || o ? "paused" : "running",
                        "--width": "up" === l || "down" === l ? "100vh" : "100%",
                        "--transform": "up" === l ? "rotate(-90deg)" : "down" === l ? "rotate(90deg)" : "none"
                    })), [e, a, s, o, l]),
                    O = r.useMemo((() => ({
                        "--gradient-color": m,
                        "--gradient-width": "number" === typeof v ? `${v}px` : v
                    })), [m, v]),
                    A = r.useMemo((() => ({
                        "--play": a ? "running" : "paused",
                        "--direction": "left" === l ? "normal" : "reverse",
                        "--duration": `${Z}s`,
                        "--delay": `${u}s`,
                        "--iteration-count": d ? `${d}` : "infinite",
                        "--min-width": t ? "auto" : "100%"
                    })), [a, l, Z, u, d, t]),
                    q = r.useMemo((() => ({
                        "--transform": "up" === l ? "rotate(90deg)" : "down" === l ? "rotate(-90deg)" : "none"
                    })), [l]),
                    D = r.useCallback((e => [...Array(Number.isFinite(e) && e >= 0 ? e : 0)].map(((e, n) => i.default.createElement(r.Fragment, {
                        key: n
                    }, r.Children.map(x, (e => i.default.createElement("div", {
                        style: q,
                        className: "rfm-child"
                    }, e))))))), [q, x]);
                return R ? i.default.createElement("div", {
                    ref: j,
                    style: T,
                    className: "rfm-marquee-container " + n
                }, f && i.default.createElement("div", {
                    style: O,
                    className: "rfm-overlay"
                }), i.default.createElement("div", {
                    className: "rfm-marquee",
                    style: A,
                    onAnimationIteration: p,
                    onAnimationEnd: h
                }, i.default.createElement("div", {
                    className: "rfm-initial-child-container",
                    ref: M
                }, r.Children.map(x, (e => i.default.createElement("div", {
                    style: q,
                    className: "rfm-child"
                }, e)))), D(E - 1)), i.default.createElement("div", {
                    className: "rfm-marquee",
                    style: A
                }, D(E))) : null
            }));
            n.Z = s
        }
    }
]);