(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1850], {
        51850: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return w
                }
            });
            var r = n(85893),
                a = n(67294),
                i = n(53419),
                s = n.n(i),
                o = n(90512),
                c = n(86716),
                l = n(41664),
                u = n.n(l),
                p = n(39934),
                d = n(62948),
                f = n(55079),
                h = n(11163),
                m = n(80397);

            function x(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            var g = function(e) {
                    var t = e.isBlue;
                    return (0, r.jsx)("svg", {
                        width: "12",
                        height: "12",
                        viewBox: "0 0 12 12",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, r.jsx)("rect", {
                            width: "12",
                            height: "12",
                            rx: "6",
                            fill: 2 == t ? "#4a95e45c" : t ? "#4A95E4" : "#E73F4E"
                        })
                    })
                },
                v = function() {
                    return (0, r.jsx)("svg", {
                        width: "12",
                        height: "12",
                        viewBox: "0 0 12 12",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, r.jsx)("path", {
                            d: "M1.33138 10.6667H2.28138L8.79805 4.15L7.84805 3.2L1.33138 9.71667V10.6667ZM-0.00195312 12V9.16667L8.79805 0.383333C8.93138 0.261111 9.0786 0.166667 9.23971 0.1C9.40083 0.0333333 9.57027 0 9.74805 0C9.92583 0 10.098 0.0333333 10.2647 0.1C10.4314 0.166667 10.5758 0.266667 10.698 0.4L11.6147 1.33333C11.748 1.45556 11.8453 1.6 11.9064 1.76667C11.9675 1.93333 11.998 2.1 11.998 2.26667C11.998 2.44444 11.9675 2.61389 11.9064 2.775C11.8453 2.93611 11.748 3.08333 11.6147 3.21667L2.83138 12H-0.00195312ZM8.31471 3.68333L7.84805 3.2L8.79805 4.15L8.31471 3.68333Z",
                            fill: "#DCDCDD"
                        })
                    })
                },
                b = function(e) {
                    var t = e.title,
                        n = e.min,
                        i = e.max,
                        c = e.id,
                        l = e.iconText,
                        u = e.iconYear,
                        p = e.iconMonth,
                        f = e.maxwidth,
                        h = e.withComma,
                        m = e.className,
                        g = e.onChange,
                        b = e.defaultValue,
                        w = e.actualValue,
                        _ = e.setIsYear,
                        C = e.isYear,
                        j = (0, a.useState)(b),
                        y = j[0],
                        E = j[1],
                        Z = (0, a.useRef)(),
                        k = (0, a.useState)(),
                        N = k[0],
                        L = k[1],
                        M = (0, a.useState)(!1),
                        S = M[0],
                        A = M[1],
                        P = function(e) {
                            var t, r = e.target.value.replace(/[,]/g, ""),
                                a = ((null === (t = r.split(".")[1]) || void 0 === t ? void 0 : t.length) || 0) <= 2;
                            (r <= i || !r) && a && (E(r), n <= r && (null === g || void 0 === g || g(r)))
                        };
                    return (0, a.useEffect)((function() {
                        return Z.current = setTimeout((function() {
                                var e = (w - n) / (i - n) * 100;
                                L("linear-gradient(to right, #E73F4E 0%, #E73F4E " + e + "%, #fff " + e + "%, #3C3C432E 100%)")
                            }), 0),
                            function() {
                                return clearTimeout(Z.current)
                            }
                    }), [w]), (0, r.jsxs)("div", {
                        className: m,
                        children: [(0, r.jsxs)("div", {
                            className: (0, o.Z)("d-flex align-items-center justify-content-between mb-1", s()["slider-top"]),
                            children: [(0, r.jsx)("p", {
                                className: (0, o.Z)("m-0", s()["slider-title"]),
                                children: t
                            }), (0, r.jsxs)("label", {
                                className: (0, o.Z)(S && s().active, "cursor-pointer"),
                                htmlFor: c,
                                children: [(0, r.jsx)("span", {
                                    style: {
                                        marginRight: "6px"
                                    },
                                    children: C ? "Y" : "month" === !C ? "M" : l
                                }), (0, r.jsx)("input", {
                                    style: {
                                        maxWidth: f
                                    },
                                    id: c + "hek",
                                    onFocus: function(e) {
                                        A(!0)
                                    },
                                    onBlur: function() {
                                        return A(!1)
                                    },
                                    max: i,
                                    onChange: P,
                                    value: h ? (0, d.Z)(y) : y,
                                    className: ""
                                }), (0, r.jsx)(v, {
                                    isActive: S
                                })]
                            }), u && (0, r.jsx)("span", {
                                className: (0, o.Z)(s().options, x({}, s().active, C)),
                                onClick: function() {
                                    _(!0)
                                },
                                children: u
                            }), p && (0, r.jsx)("span", {
                                className: (0, o.Z)(s().options, x({}, s().active, !C)),
                                onClick: function() {
                                    _(!1)
                                },
                                children: p
                            })]
                        }), (0, r.jsx)("div", {
                            className: (0, o.Z)(s().slidecontainer, "position-relative"),
                            children: (0, r.jsx)("input", {
                                style: {
                                    background: N
                                },
                                onChange: P,
                                type: "range",
                                min: n,
                                max: i,
                                value: w,
                                className: s().slider,
                                id: "myRange"
                            })
                        })]
                    })
                };

            function w() {
                var e, t = (0, a.useState)(0),
                    n = t[0],
                    i = t[1],
                    l = (0, a.useState)(!1),
                    v = l[0],
                    w = l[1],
                    _ = (0, h.useRouter)(),
                    C = (0, p.Z)(v),
                    j = C.emiCalcValue,
                    y = C.setEmiCalcValue,
                    E = C.isLoading,
                    Z = C.totalAmount,
                    k = C.resetCalcValue,
                    N = C.defaultValues,
                    L = C.interestAmount,
                    M = C.emi,
                    S = C.isYear,
                    A = C.setIsYear,
                    P = function() {
                        return w((function(e) {
                            return !e
                        }))
                    },
                    V = [{
                        title: "Home",
                        slug: "home",
                        img: "/emi-calc-home-loan.png",
                        href: "/home-loan",
                        tenure: 30,
                        tenureMonth: 360
                    }, {
                        title: "Personal",
                        slug: "Personal",
                        href: "/personal-loan",
                        img: "/emi-calc-personal-loan.png",
                        tenure: 8,
                        tenureMonth: 96
                    }, {
                        title: "Business",
                        slug: "Business",
                        href: "/business-loan",
                        img: "/emi-calc-buisness-loan.png",
                        tenure: 5,
                        tenureMonth: 60
                    }],
                    O = function(e) {
                        return function(t) {
                            return y(x({}, e, t))
                        }
                    };
                return (0, a.useEffect)((function() {
                    w(!1)
                }), [_.pathname]), (0, a.useEffect)((function() {
                    k()
                }), [n]), (0, r.jsxs)("div", {
                    className: (0, o.Z)(s().layout, v && s().layout__active, "bg-white position-fixed w-100"),
                    children: [v ? (0, r.jsx)("div", {
                        onClick: P,
                        className: (0, o.Z)("position-absolute bg-white cursor-pointer", s().chevron),
                        children: (0, r.jsx)("svg", {
                            width: "14",
                            height: "25",
                            viewBox: "0 0 14 25",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0, r.jsx)("path", {
                                d: "M2.65039 23.7878L13.0606 13.4085C13.1842 13.2849 13.2715 13.1511 13.3225 13.0069C13.3744 12.8628 13.4004 12.7083 13.4004 12.5436C13.4004 12.3788 13.3744 12.2243 13.3225 12.0802C13.2715 11.936 13.1842 11.8022 13.0606 11.6786L2.65039 1.26841C2.36208 0.980094 2.00168 0.835938 1.56921 0.835938C1.13674 0.835938 0.766052 0.990392 0.457144 1.2993C0.148236 1.60821 -0.00621796 1.9686 -0.00621796 2.38048C-0.00621796 2.79236 0.148236 3.15275 0.457144 3.46166L9.53904 12.5436L0.457144 21.6255C0.16883 21.9138 0.0246725 22.2688 0.0246725 22.6906C0.0246725 23.1131 0.179127 23.4789 0.488034 23.7878C0.796943 24.0967 1.15734 24.2512 1.56921 24.2512C1.98109 24.2512 2.34148 24.0967 2.65039 23.7878Z",
                                fill: "#4376BA"
                            })
                        })
                    }) : (0, r.jsxs)("div", {
                        className: (0, o.Z)("position-absolute d-flex align-items-center gap-1 cursor-pointer text-white", s().toggle),
                        onClick: P,
                        style: {
                            background: "url(".concat((0, c.Lr)("/b2c/icons/emi-calculator-toggle-bg.png"), ")")
                        },
                        children: [(0, r.jsx)("img", {
                            alt: "Calculate EMI",
                            width: "15px",
                            height: "15px",
                            src: (0, c.Lr)("/b2c/icons/emi-calculator-toggle-icon.png")
                        }), "Calculate EMI"]
                    }), (0, r.jsxs)("div", {
                        className: (0, o.Z)(s().div, "overflow-auto"),
                        children: [(0, r.jsxs)("h2", {
                            className: (0, o.Z)("m-0 d-flex align-items-center justify-content-between", s().title),
                            children: ["EMI Calculator", (0, r.jsx)(f.Z, {
                                onClick: P
                            })]
                        }), (0, r.jsx)("div", {
                            className: (0, o.Z)("overflow-auto", s()["tabs-scroll"]),
                            children: (0, r.jsx)("div", {
                                className: (0, o.Z)(s().tabs, "d-flex"),
                                children: V.map((function(e, t) {
                                    return (0, r.jsxs)("p", {
                                        onClick: function() {
                                            return i(t)
                                        },
                                        className: (0, o.Z)("m-0 cursor-pointer d-flex align-items-center gap-2", s().tab, t == n && s().tab__active),
                                        children: [(0, r.jsx)("img", {
                                            alt: e.title + " Tab",
                                            width: "24px",
                                            height: "24px",
                                            src: (0, c.Lr)("/b2c/icons" + e.img)
                                        }), " ", e.title]
                                    }, e.slug)
                                }))
                            })
                        }), (0, r.jsxs)("div", {
                            className: (0, o.Z)(s().inputs),
                            children: [(0, r.jsx)(b, {
                                withComma: !0,
                                id: "iinp12",
                                onChange: O("principal"),
                                defaultValue: N.principal,
                                actualValue: j.principal,
                                iconText: "\u20b9",
                                title: "Loan Amount",
                                min: 1,
                                max: 1e10
                            }), (0, r.jsx)(b, {
                                maxwidth: "50px",
                                id: "iinp124",
                                onChange: O("rate"),
                                defaultValue: N.rate,
                                actualValue: j.rate,
                                iconText: "%",
                                title: "Interest Rate",
                                min: 4,
                                max: 24
                            }), (0, r.jsx)(b, {
                                isYear: S,
                                className: (0, o.Z)(s().year),
                                withComma: !0,
                                maxwidth: "50px",
                                id: "iinp123",
                                onChange: O("tenure"),
                                defaultValue: N.tenure,
                                actualValue: j.tenure,
                                iconText: "M",
                                title: "Loan Tenure",
                                min: 1,
                                max: V[n][S ? "tenure" : "tenureMonth"],
                                iconMonth: "Months",
                                iconYear: "Year",
                                setIsYear: A
                            }, S + "emicaloei")]
                        }, n + "aemicksak"), (0, r.jsxs)("div", {
                            className: (0, o.Z)(s().calc_amount, "d-flex align-items-center justify-content-between"),
                            children: [(0, r.jsxs)("p", {
                                className: "m-0 d-flex align-items-center gap-2",
                                children: [(0, r.jsx)(g, {
                                    isBlue: 2
                                }), (0, r.jsx)("span", {
                                    children: "Monthly Emi"
                                })]
                            }), (0, r.jsxs)("span", {
                                children: ["\u20b9", (0, d.Z)(M)]
                            })]
                        }), (0, r.jsxs)("div", {
                            className: (0, o.Z)(s().calc_amount, "d-flex mt-2 align-items-center justify-content-between"),
                            children: [(0, r.jsxs)("p", {
                                className: "m-0 d-flex align-items-center gap-2",
                                children: [(0, r.jsx)(g, {}), (0, r.jsx)("span", {
                                    children: "Principal Amount"
                                })]
                            }), (0, r.jsxs)("span", {
                                children: ["\u20b9", (0, d.Z)(j.principal)]
                            })]
                        }), (0, r.jsxs)("div", {
                            className: (0, o.Z)(s().calc_amount, "mt-2 d-flex align-items-center justify-content-between"),
                            children: [(0, r.jsxs)("p", {
                                className: "m-0 d-flex align-items-center gap-2",
                                children: [(0, r.jsx)(g, {
                                    isBlue: !0
                                }), (0, r.jsx)("span", {
                                    children: "Interest Payable"
                                })]
                            }), (0, r.jsxs)("span", {
                                children: ["\u20b9", (0, d.Z)(L) || 0]
                            })]
                        }), (0, r.jsxs)("div", {
                            className: (0, o.Z)(s().total_pay, "d-flex justify-content-between"),
                            children: [(0, r.jsx)("span", {
                                children: "Total  Amount payable"
                            }), (0, r.jsxs)("span", {
                                children: ["\u20b9", (0, d.Z)(Z)]
                            })]
                        }), (0, r.jsxs)("div", {
                            className: (0, o.Z)("d-flex gap-2", s().btns),
                            children: [(0, r.jsx)(m.Z, {
                                condition: !(null === (e = _.pathname) || void 0 === e ? void 0 : e.startsWith("/emi-calculator")),
                                fallBack: (0, r.jsx)("span", {
                                    onClick: P,
                                    className: (0, o.Z)(E && "disabled-btn", "cursor-pointer d-block flex-grow-1 text-center text-decoration-none text-white", s().explore),
                                    children: "Explore More"
                                }),
                                children: (0, r.jsx)(u(), {
                                    href: "/emi-calculator",
                                    children: (0, r.jsx)("a", {
                                        className: (0, o.Z)(E && "disabled-btn", "d-block flex-grow-1 text-center text-decoration-none text-white", s().explore),
                                        children: "Explore More"
                                    })
                                })
                            }), (0, r.jsx)(u(), {
                                href: V[n].href,
                                children: (0, r.jsxs)("a", {
                                    style: {
                                        border: "1px solid #000",
                                        maxWidth: "210px"
                                    },
                                    className: (0, o.Z)(E && "disabled-btn", "flex-grow-1 d-block text-center text-black text-decoration-none bg-transparent", s().explore),
                                    children: ["Explore ", V[n].title, " Loan"]
                                })
                            })]
                        })]
                    })]
                })
            }
        },
        55079: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return i
                }
            });
            var r = n(85893);
            n(67294);

            function a(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function i(e) {
                return (0, r.jsx)("svg", function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" === typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        })))), r.forEach((function(t) {
                            a(e, t, n[t])
                        }))
                    }
                    return e
                }({
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, e, {
                    children: (0, r.jsx)("path", {
                        d: "M18 6L6 18M18 18L6 6",
                        stroke: e.stroke || "#3C3C3C",
                        strokeWidth: e.strokeWidth || "2",
                        strokeLinecap: "round"
                    })
                }))
            }
        },
        62948: function(e, t) {
            "use strict";
            t.Z = function(e) {
                return e ? (e = +e.toString().replace(/[,]/g, "")).toString().split(".")[0].length > 3 ? e.toString().substring(0, e.toString().split(".")[0].length - 3).replace(/\B(?=(\d{2})+(?!\d))/g, ",") + "," + e.toString().substring(e.toString().split(".")[0].length - 3) : e.toString() : ""
            }
        },
        39934: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return x
                }
            });
            var r = n(34051),
                a = n.n(r),
                i = n(31955),
                s = n(67294),
                o = n(8189),
                c = n(87389),
                l = n(38981),
                u = n(69075);

            function p(e, t, n, r, a, i, s) {
                try {
                    var o = e[i](s),
                        c = o.value
                } catch (l) {
                    return void n(l)
                }
                o.done ? t(c) : Promise.resolve(c).then(r, a)
            }

            function d(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, a) {
                        var i = e.apply(t, n);

                        function s(e) {
                            p(i, r, a, s, o, "next", e)
                        }

                        function o(e) {
                            p(i, r, a, s, o, "throw", e)
                        }
                        s(void 0)
                    }))
                }
            }

            function f(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function h(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" === typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    })))), r.forEach((function(t) {
                        f(e, t, n[t])
                    }))
                }
                return e
            }
            var m = {
                principal: 1e5,
                rate: 6,
                tenure: 5
            };

            function x(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : m,
                    n = t.principal,
                    r = t.rate,
                    p = t.tenure,
                    f = (0, s.useState)(0),
                    x = f[0],
                    g = f[1],
                    v = (0, s.useState)({
                        principal: n,
                        rate: r,
                        tenure: p
                    }),
                    b = v[0],
                    w = v[1],
                    _ = (0, o.a)().user,
                    C = (0, s.useState)(!1),
                    j = C[0],
                    y = C[1],
                    E = (0, s.useRef)(),
                    Z = function(e) {
                        clearTimeout(E.current), E.current = setTimeout(d(a().mark((function t() {
                            var n, r;
                            return a().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return y(!0), l.default.defaults.headers.Authorization = "sdgfbh317989fbs12@!&dhah", e.principal = (0, c.ge)(e.principal), t.next = 6, (0, u.WT)(e);
                                    case 6:
                                        r = t.sent, _ ? l.default.defaults.headers.Authorization = i.Z.get("token") : delete l.default.defaults.headers.Authorization, r && (null === (n = r.data.meta) || void 0 === n ? void 0 : n.Status) && g(r.data.Data.emi.toFixed(2)), y(!1);
                                    case 10:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        }))), 500)
                    };
                (0, s.useEffect)((function() {
                    if (1 == N) {
                        var t = 12 * Number(b.tenure);
                        e && Z(h({}, b, {
                            tenure: t
                        }))
                    } else e && Z(b)
                }), [b, e]);
                var k = (0, s.useState)(!1),
                    N = k[0],
                    L = k[1];
                return {
                    emi: x,
                    interestAmount: Math.round(x * (N ? 12 * b.tenure : b.tenure) - b.principal),
                    totalAmount: Math.round(N ? x * b.tenure * 12 : x * b.tenure),
                    setEmiCalcValue: function(e) {
                        return w((function(t) {
                            return h({}, t, e)
                        }))
                    },
                    emiCalcValue: b,
                    isLoading: j,
                    defaultValues: m,
                    resetCalcValue: function() {
                        return w({
                            principal: n,
                            rate: r,
                            tenure: p
                        })
                    },
                    setIsYear: L,
                    isYear: N
                }
            }
        },
        69075: function(e, t, n) {
            "use strict";
            n.d(t, {
                Ec: function() {
                    return b
                },
                JC: function() {
                    return p
                },
                Ju: function() {
                    return m
                },
                WT: function() {
                    return l
                },
                dg: function() {
                    return g
                },
                pw: function() {
                    return f
                },
                r1: function() {
                    return j
                },
                tC: function() {
                    return _
                }
            });
            var r = n(34051),
                a = n.n(r),
                i = n(87066),
                s = n(38981);

            function o(e, t, n, r, a, i, s) {
                try {
                    var o = e[i](s),
                        c = o.value
                } catch (l) {
                    return void n(l)
                }
                o.done ? t(c) : Promise.resolve(c).then(r, a)
            }

            function c(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, a) {
                        var i = e.apply(t, n);

                        function s(e) {
                            o(i, r, a, s, c, "next", e)
                        }

                        function c(e) {
                            o(i, r, a, s, c, "throw", e)
                        }
                        s(void 0)
                    }))
                }
            }

            function l(e) {
                return u.apply(this, arguments)
            }

            function u() {
                return (u = c(a().mark((function e(t) {
                    var n;
                    return a().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, s.default.post("v2/calculator/calculate-emi", t);
                            case 2:
                                return n = e.sent, e.abrupt("return", n);
                            case 4:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function p(e) {
                return d.apply(this, arguments)
            }

            function d() {
                return (d = c(a().mark((function e(t) {
                    var n;
                    return a().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, s.baseapicrm.post("v1/b2c/getHyperlinkLocationExternal", t);
                            case 2:
                                return n = e.sent, e.abrupt("return", n);
                            case 4:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function f() {
                return h.apply(this, arguments)
            }

            function h() {
                return (h = c(a().mark((function e() {
                    var t;
                    return a().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, i.Z.post("https://crm-api.K3M Housing LLP.com/v1/crm-component-configs/getConfigAndMetaUnauth", {
                                    platform: "K3M Housing LLP_webapp",
                                    module: "home",
                                    component_type: "alert"
                                }, {
                                    headers: {
                                        Authorization: "a$dfhjk764589ggj9lo0!gj\\"
                                    }
                                });
                            case 2:
                                return t = e.sent, e.abrupt("return", t);
                            case 4:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function m(e) {
                return x.apply(this, arguments)
            }

            function x() {
                return (x = c(a().mark((function e(t) {
                    var n;
                    return a().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, s.default.post("v1/user/add-customer-lead", t);
                            case 2:
                                return n = e.sent, e.abrupt("return", n);
                            case 4:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function g(e) {
                return v.apply(this, arguments)
            }

            function v() {
                return (v = c(a().mark((function e(t) {
                    var n;
                    return a().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, s.default.post("v1/user/verify-otp-lead-form", t, {
                                    headers: {
                                        Authorization: "sdgfbh317989fbs12@!&dhah"
                                    }
                                });
                            case 2:
                                return n = e.sent, e.abrupt("return", n);
                            case 4:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function b(e) {
                return w.apply(this, arguments)
            }

            function w() {
                return (w = c(a().mark((function e(t) {
                    var n;
                    return a().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, s.default.post("v1/user /resend-otp-for-add-lead", {
                                    lead_id: t
                                }, {
                                    headers: {
                                        Authorization: "sdgfbh317989fbs12@!&dhah"
                                    }
                                });
                            case 2:
                                return n = e.sent, e.abrupt("return", n);
                            case 4:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function _(e) {
                return C.apply(this, arguments)
            }

            function C() {
                return (C = c(a().mark((function e(t) {
                    var n, r;
                    return a().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return n = t.type, e.next = 3, s.default.post("v1/user/get-dynamic-drop-down", {
                                    type: n
                                }, {
                                    headers: {
                                        Authorization: "sdgfbh317989fbs12@!&dhah"
                                    }
                                });
                            case 3:
                                return r = e.sent, e.abrupt("return", r);
                            case 5:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function j(e) {
                return y.apply(this, arguments)
            }

            function y() {
                return (y = c(a().mark((function e(t) {
                    var n;
                    return a().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, s.default.post("v1/user/contact-us", t, {
                                    headers: {
                                        Authorization: "sdgfbh317989fbs12@!&dhah"
                                    }
                                });
                            case 2:
                                return n = e.sent, e.abrupt("return", n);
                            case 4:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }
        },
        53419: function(e) {
            e.exports = {
                layout: "EmiCalculator_layout__kRSq0",
                div: "EmiCalculator_div__mg4ys",
                layout__active: "EmiCalculator_layout__active__rC1yK",
                title: "EmiCalculator_title__MKd_1",
                "tabs-scroll": "EmiCalculator_tabs-scroll__FhErZ",
                tab: "EmiCalculator_tab__uMw0c",
                tab__active: "EmiCalculator_tab__active__PoicW",
                explore: "EmiCalculator_explore__5UapZ",
                total_pay: "EmiCalculator_total_pay__G0snq",
                calc_amount: "EmiCalculator_calc_amount__z0qrC",
                inputs: "EmiCalculator_inputs__YHi_H",
                options: "EmiCalculator_options__L6WQe",
                active: "EmiCalculator_active__oSCiR",
                slider: "EmiCalculator_slider__G448E",
                "slider-title": "EmiCalculator_slider-title__XEhSC",
                "slider-top": "EmiCalculator_slider-top__TEr8N",
                chevron: "EmiCalculator_chevron__ZcKS5",
                toggle: "EmiCalculator_toggle__NYdaH",
                btns: "EmiCalculator_btns__yr8zN"
            }
        }
    }
]);