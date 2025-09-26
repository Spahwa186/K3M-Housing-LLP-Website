(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [586], {
        49060: function(e, t, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/emi-calculator", function() {
                return n(71980)
            }])
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
            var a = n(34051),
                r = n.n(a),
                s = n(31955),
                i = n(67294),
                l = n(8189),
                o = n(87389),
                c = n(38981),
                u = n(69075);

            function h(e, t, n, a, r, s, i) {
                try {
                    var l = e[s](i),
                        o = l.value
                } catch (c) {
                    return void n(c)
                }
                l.done ? t(o) : Promise.resolve(o).then(a, r)
            }

            function d(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(a, r) {
                        var s = e.apply(t, n);

                        function i(e) {
                            h(s, a, r, i, l, "next", e)
                        }

                        function l(e) {
                            h(s, a, r, i, l, "throw", e)
                        }
                        i(void 0)
                    }))
                }
            }

            function m(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function p(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        a = Object.keys(n);
                    "function" === typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    })))), a.forEach((function(t) {
                        m(e, t, n[t])
                    }))
                }
                return e
            }
            var f = {
                principal: 1e5,
                rate: 6,
                tenure: 5
            };

            function x(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : f,
                    n = t.principal,
                    a = t.rate,
                    h = t.tenure,
                    m = (0, i.useState)(0),
                    x = m[0],
                    y = m[1],
                    g = (0, i.useState)({
                        principal: n,
                        rate: a,
                        tenure: h
                    }),
                    _ = g[0],
                    j = g[1],
                    v = (0, l.a)().user,
                    b = (0, i.useState)(!1),
                    w = b[0],
                    C = b[1],
                    E = (0, i.useRef)(),
                    N = function(e) {
                        clearTimeout(E.current), E.current = setTimeout(d(r().mark((function t() {
                            var n, a;
                            return r().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return C(!0), c.default.defaults.headers.Authorization = "sdgfbh317989fbs12@!&dhah", e.principal = (0, o.ge)(e.principal), t.next = 6, (0, u.WT)(e);
                                    case 6:
                                        a = t.sent, v ? c.default.defaults.headers.Authorization = s.Z.get("token") : delete c.default.defaults.headers.Authorization, a && (null === (n = a.data.meta) || void 0 === n ? void 0 : n.Status) && y(a.data.Data.emi.toFixed(2)), C(!1);
                                    case 10:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        }))), 500)
                    };
                (0, i.useEffect)((function() {
                    if (1 == L) {
                        var t = 12 * Number(_.tenure);
                        e && N(p({}, _, {
                            tenure: t
                        }))
                    } else e && N(_)
                }), [_, e]);
                var I = (0, i.useState)(!1),
                    L = I[0],
                    Z = I[1];
                return {
                    emi: x,
                    interestAmount: Math.round(x * (L ? 12 * _.tenure : _.tenure) - _.principal),
                    totalAmount: Math.round(L ? x * _.tenure * 12 : x * _.tenure),
                    setEmiCalcValue: function(e) {
                        return j((function(t) {
                            return p({}, t, e)
                        }))
                    },
                    emiCalcValue: _,
                    isLoading: w,
                    defaultValues: f,
                    resetCalcValue: function() {
                        return j({
                            principal: n,
                            rate: a,
                            tenure: h
                        })
                    },
                    setIsYear: Z,
                    isYear: L
                }
            }
        },
        71980: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return R
                }
            });
            var a = n(85893),
                r = n(67294),
                s = n(2011),
                i = n.n(s),
                l = n(90512),
                o = [{
                    title: "Financial Planning:",
                    desc: "When you know your EMI responsibility, it lets you plan your monthly budget."
                }, {
                    title: "Compare Loan Offers:",
                    desc: "Compare different loan products and interest rates to find the best deal using the best EMI calculator."
                }, {
                    title: "Time-Saving:",
                    desc: "Saves you the time and effort of manual calculations."
                }];

            function c() {
                return (0, a.jsx)("div", {
                    className: (0, l.Z)(i().layout),
                    children: (0, a.jsxs)("div", {
                        className: (0, l.Z)("container", i().container),
                        children: [(0, a.jsx)("h2", {
                            className: (0, l.Z)("text-center", i().title),
                            children: "Benefits of Using K3M Housing LLP EMI Calculator"
                        }), (0, a.jsx)("div", {
                            className: (0, l.Z)("d-flex justify-content-center", i().cards),
                            children: o.map((function(e) {
                                return (0, a.jsxs)("div", {
                                    className: (0, l.Z)("bg-white flex-grow-1 flex-shrink-0 text-center", i().card),
                                    children: [(0, a.jsx)("h3", {
                                        children: e.title
                                    }), (0, a.jsx)("p", {
                                        className: "mb-0 mt-4",
                                        children: e.desc
                                    })]
                                })
                            }))
                        })]
                    })
                })
            }
            var u = n(42375),
                h = n.n(u),
                d = n(86716),
                m = [{
                    title: "User-Friendly Interface",
                    desc: "This functionality makes it simple for users to discover and use features even if they are using the device for the first time."
                }, {
                    title: "Accurate Calculations",
                    desc: "We ensure that the EMIs are calculated using standard formulas and are exact."
                }, {
                    title: "Multiple Loan Types",
                    desc: "We have various calculators for each loan type."
                }, {
                    title: "Quick Results",
                    desc: "Get instant calculations without any delays"
                }];

            function p() {
                return (0, a.jsxs)("div", {
                    className: (0, l.Z)(h().layout, "container"),
                    children: [(0, a.jsx)("h2", {
                        className: (0, l.Z)("mb-4", h().title),
                        children: "Features of Our EMI Calculator"
                    }), m.map((function(e) {
                        return (0, a.jsxs)("div", {
                            className: (0, l.Z)("d-flex gap-2 mt-4", h().card),
                            children: [(0, a.jsx)("img", {
                                className: "flex-shrink-0",
                                src: (0, d.Lr)("/b2c/icons/money.png")
                            }), (0, a.jsxs)("div", {
                                children: [(0, a.jsx)("h3", {
                                    children: e.title
                                }), (0, a.jsx)("p", {
                                    children: e.desc
                                })]
                            })]
                        })
                    }))]
                })
            }
            var f = n(74545),
                x = n.n(f),
                y = function() {
                    return (0, a.jsxs)("div", {
                        className: (0, l.Z)(x().layout, "container"),
                        children: [(0, a.jsx)("h2", {
                            className: (0, l.Z)("mb-3", x().title),
                            children: "What is Loan EMI?"
                        }), (0, a.jsx)("p", {
                            className: x().desc,
                            children: "Loan EMI Calculator (Equated Monthly Installment) is the principal, rate and interest you have to pay monthly to the bank as a consideration for their loan. It includes both your principal amount and interest on it. So, it is always wise that you manage your payment enough systematically so that you can keep a good CIBIL Score and also don\u2019t have to pay late payment or other charges."
                        }), (0, a.jsx)("h2", {
                            className: (0, l.Z)("mb-3", x().subtitle),
                            children: "How is Loan EMI Calculated?"
                        }), (0, a.jsx)("p", {
                            className: x().desc,
                            children: "Loan EMI is calculated using the following formula:"
                        }), (0, a.jsx)("img", {
                            style: {
                                maxWidth: "464px"
                            },
                            src: (0, d.Lr)("/b2c/icons/emi-calculator-rule.png")
                        }), (0, a.jsx)("p", {
                            className: (0, l.Z)("mt-2 mb-1", x().desc),
                            children: "Where,"
                        }), (0, a.jsxs)("ul", {
                            className: (0, l.Z)(x().desc),
                            children: [(0, a.jsx)("li", {
                                children: "P stands for the Principal Loan Amount"
                            }), (0, a.jsx)("li", {
                                children: "R is the rate of interest per month. (annual interest rate/12/100)%"
                            }), (0, a.jsx)("p", {
                                children: "N is the number of monthly installments or Loan tenure"
                            })]
                        }), (0, a.jsx)("p", {
                            className: (0, l.Z)("mt-3", x().desc),
                            children: "For instance, in case you have borrowed \u20b910,00,000 at an annual interest of 10.5% for a period of 10 years then as per EMI calculator per month your EMI will be \u20b913,493."
                        }), (0, a.jsx)("p", {
                            className: (0, l.Z)("mt-3", x().desc),
                            children: "Loan EMI calculation can be difficult to do but with K3M Housing LLP loan EMI calculator you can calculate your monthly instalments within seconds."
                        })]
                    })
                },
                g = n(8861),
                _ = n.n(g);

            function j(e) {
                var t = e.children;
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsxs)("div", {
                        className: (0, l.Z)("container", _().layout),
                        children: [(0, a.jsx)("h2", {
                            className: (0, l.Z)(_().title),
                            children: "Factors that can impact your due amount"
                        }), (0, a.jsx)("p", {
                            className: "mt-2",
                            children: "Several factors can influence your EMI amount:"
                        }), (0, a.jsxs)("ul", {
                            className: "px-4",
                            children: [(0, a.jsxs)("li", {
                                children: [(0, a.jsx)("b", {
                                    children: "Loan Amount:"
                                }), "  Higher the loan amount, higher the EMI."]
                            }), (0, a.jsxs)("li", {
                                className: "mt-3",
                                children: [(0, a.jsx)("b", {
                                    children: "Interest Rate:"
                                }), " The interest rate will directly impact your EMI. If the interest rate is high, you will have to pay a higher amount as your monthly outgoing."]
                            }), (0, a.jsx)("li", {
                                className: "mt-3",
                                children: "Please note though that with longer tenures, the loan interest paid by you would be more."
                            }), (0, a.jsxs)("li", {
                                className: "mt-3",
                                children: [(0, a.jsx)("b", {
                                    children: "Prepayment:"
                                }), "If you have some funds then you can prepay your loan. Prepayments help in reducing your principal amount which will in-turn reduce your EMI or Loan tenure whichever is feasible to you."]
                            })]
                        }), (0, a.jsx)("h2", {
                            className: (0, l.Z)("mt-5", _().title),
                            children: "How to Use K3M Housing LLP Loan EMI Calculator Online"
                        }), (0, a.jsx)("p", {
                            className: "mt-2",
                            children: "Using the K3M Housing LLP EMI calculator online is simple:"
                        }), (0, a.jsxs)("ul", {
                            className: "px-4",
                            children: [(0, a.jsxs)("li", {
                                children: [(0, a.jsx)("b", {
                                    children: "Enter Loan Details:"
                                }), " Input the total amount you wish to borrow."]
                            }), (0, a.jsxs)("li", {
                                className: "mt-3",
                                children: [(0, a.jsx)("b", {
                                    children: "Select the Interest Rate: "
                                }), " Choose the applicable interest rate for your loan."]
                            }), (0, a.jsxs)("li", {
                                className: "mt-3",
                                children: [(0, a.jsx)("b", {
                                    children: "Loan Tenure: "
                                }), " Decide on the tenure you wish to repay the loan."]
                            }), (0, a.jsxs)("li", {
                                className: "mt-3",
                                children: [(0, a.jsx)("b", {
                                    children: "Click \u2018Calculate\u2019: "
                                }), "You\u2019ll instantly get your EMI amount, along with the complete breakdown of principal and interest payable."]
                            })]
                        })]
                    }), t, (0, a.jsxs)("div", {
                        className: (0, l.Z)("container pb-5", _().layout),
                        children: [(0, a.jsx)("h2", {
                            className: (0, l.Z)("mb-4", _().subtitle),
                            children: "Why Use an EMI Calculator?"
                        }), (0, a.jsx)("p", {
                            className: "mt-2",
                            children: "Using an EMI calculator before you apply for a loan helps you make an informed decision and ensures you choose the loan amount as per your financial capability without having to face any monetary difficulty in the future. The Loan EMI calculator available on the K3M Housing LLP website will help you compare multiple loans, plan your repayments, and step in with confidence on your loan journey!"
                        }), (0, a.jsxs)("p", {
                            className: "mt-4",
                            children: [(0, a.jsx)("a", {
                                href: "/",
                                target: "_blank",
                                children: "K3M Housing LLP"
                            }), ", as India's Leading Loan Distribution Company, offers a diversified range of loan products consisting of ", (0, a.jsx)("a", {
                                href: "/personal-loan",
                                target: "_blank",
                                children: "Personal Loan"
                            }), ", ", (0, a.jsx)("a", {
                                target: "_blank",
                                href: "/business-loan",
                                children: "Business Loan"
                            }), ", Loans Against Property, Education Loans DSA and many more. With over \u20b91,00,000 crores loans disbursed and PAN India presence across 4000+ cities our expert developed Loan EMI Calculator helps you provide with the best options and deals available for the chosen loan product."]
                        })]
                    })]
                })
            }
            var v = n(96549),
                b = n.n(v),
                w = n(26495),
                C = n(23148),
                E = n(41664),
                N = n.n(E),
                I = n(39934),
                L = n(62948);
            var Z = function(e) {
                var t = e.isActive,
                    n = e.onClick;
                return (0, a.jsx)("svg", {
                    onClick: n,
                    width: "12",
                    height: "12",
                    viewBox: "0 0 12 12",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, a.jsx)("path", {
                        d: "M1.33138 10.6667H2.28138L8.79805 4.15L7.84805 3.2L1.33138 9.71667V10.6667ZM-0.00195312 12V9.16667L8.79805 0.383333C8.93138 0.261111 9.0786 0.166667 9.23971 0.1C9.40083 0.0333333 9.57027 0 9.74805 0C9.92583 0 10.098 0.0333333 10.2647 0.1C10.4314 0.166667 10.5758 0.266667 10.698 0.4L11.6147 1.33333C11.748 1.45556 11.8453 1.6 11.9064 1.76667C11.9675 1.93333 11.998 2.1 11.998 2.26667C11.998 2.44444 11.9675 2.61389 11.9064 2.775C11.8453 2.93611 11.748 3.08333 11.6147 3.21667L2.83138 12H-0.00195312ZM8.31471 3.68333L7.84805 3.2L8.79805 4.15L8.31471 3.68333Z",
                        fill: t ? "#DCDCDD" : "#E73F4E"
                    })
                })
            };
            C.kL.register(C.qi, C.De);
            var k = function(e) {
                    var t = e.title,
                        n = e.min,
                        s = e.max,
                        i = e.id,
                        o = e.iconText,
                        c = e.maxwidth,
                        u = e.className,
                        h = e.onChange,
                        d = e.defaultValue,
                        m = e.actualValue,
                        p = e.withComma,
                        f = (0, r.useState)(d),
                        x = f[0],
                        y = f[1],
                        g = (0, r.useRef)(),
                        _ = (0, r.useState)(),
                        j = _[0],
                        v = _[1],
                        w = (0, r.useState)(!1),
                        C = w[0],
                        E = w[1],
                        N = function(e) {
                            var t, a = e.target.value.replace(/[,]/g, ""),
                                r = ((null === (t = a.split(".")[1]) || void 0 === t ? void 0 : t.length) || 0) <= 2;
                            (a <= s || !a) && r && (y(a), n <= a && (null === h || void 0 === h || h(a)))
                        };
                    return (0, r.useEffect)((function() {
                        return g.current = setTimeout((function() {
                                var e = (m - n) / (s - n) * 100;
                                v("linear-gradient(to right, #E73F4E 0%, #E73F4E " + e + "%, #fff " + e + "%, #3C3C432E 100%)")
                            }), 0),
                            function() {
                                return clearTimeout(g.current)
                            }
                    }), [m]), (0, a.jsxs)("div", {
                        className: u,
                        children: [(0, a.jsxs)("div", {
                            className: (0, l.Z)("d-flex align-items-center justify-content-between mb-1", b()["slider-top"]),
                            children: [(0, a.jsx)("p", {
                                className: (0, l.Z)("m-0", b()["slider-title"]),
                                children: t
                            }), (0, a.jsxs)("label", {
                                className: (0, l.Z)(C && b().active, "cursor-pointer"),
                                htmlFor: i,
                                children: [(0, a.jsx)("span", {
                                    style: {
                                        marginRight: "6px"
                                    },
                                    children: o
                                }), (0, a.jsx)("input", {
                                    style: {
                                        maxWidth: c
                                    },
                                    id: i,
                                    onFocus: function(e) {
                                        E(!0)
                                    },
                                    onBlur: function() {
                                        return E(!1)
                                    },
                                    max: s,
                                    onChange: N,
                                    value: p ? (0, L.Z)(x) : x,
                                    className: ""
                                }), (0, a.jsx)(Z, {
                                    isActive: C
                                })]
                            })]
                        }), (0, a.jsx)("div", {
                            className: (0, l.Z)(b().slidecontainer, "position-relative"),
                            children: (0, a.jsx)("input", {
                                style: {
                                    background: j
                                },
                                onChange: N,
                                type: "range",
                                min: n,
                                max: s,
                                value: m,
                                className: b().slider,
                                id: "myRange"
                            })
                        })]
                    })
                },
                M = [{
                    title: "Home Loan EMI Calculator",
                    href: "/home-loan/apply"
                }, {
                    title: "Personal Loan EMI Calculator",
                    href: "/personal-loan/apply"
                }, {
                    title: "Education Loan EMI Calculator",
                    href: "/education-loan/apply"
                }],
                A = [{
                    title: "Home",
                    slug: "home",
                    img: "/emi-calc-home-loan.png",
                    href: "/home-loan",
                    tenure: 30
                }, {
                    title: "Personal",
                    slug: "Personal",
                    href: "/personal-loan",
                    img: "/emi-calc-personal-loan.png",
                    tenure: 7
                }, {
                    title: "Business",
                    slug: "Business",
                    href: "/business-loan",
                    img: "/emi-calc-buisness-loan.png",
                    tenure: 5
                }];

            function P() {
                var e = (0, r.useState)(M[0]),
                    t = e[0],
                    n = (e[1], (0, I.Z)(!0)),
                    s = n.emiCalcValue,
                    i = n.setEmiCalcValue,
                    o = (n.isLoading, n.totalAmount),
                    c = n.resetCalcValue,
                    u = n.emi,
                    h = n.interestAmount,
                    m = n.defaultValues,
                    p = n.setIsYear,
                    f = (0, r.useState)(0),
                    x = f[0],
                    y = f[1],
                    g = function(e) {
                        return function(t) {
                            return i(function(e, t, n) {
                                return t in e ? Object.defineProperty(e, t, {
                                    value: n,
                                    enumerable: !0,
                                    configurable: !0,
                                    writable: !0
                                }) : e[t] = n, e
                            }({}, e, t))
                        }
                    };
                return (0, r.useEffect)((function() {
                    c(), p(!0)
                }), [x]), (0, a.jsx)("div", {
                    className: (0, l.Z)(b().layout, "container"),
                    children: (0, a.jsxs)("div", {
                        className: (0, l.Z)(b().calculator, "d-flex"),
                        children: [(0, a.jsxs)("div", {
                            className: "flex-grow-1",
                            children: [(0, a.jsx)("h1", {
                                className: "d-flex align-items-center gap-3 cursor-pointer",
                                children: "EMI Calculator"
                            }), (0, a.jsx)("div", {
                                className: (0, l.Z)("overflow-auto", b()["tabs-scroll"]),
                                children: (0, a.jsx)("div", {
                                    className: (0, l.Z)(b().tabs, "d-flex"),
                                    children: A.map((function(e, t) {
                                        return (0, a.jsxs)("p", {
                                            onClick: function() {
                                                return y(t)
                                            },
                                            className: (0, l.Z)("m-0 cursor-pointer d-flex align-items-center gap-2", b().tab, t == x && b().tab__active),
                                            children: [(0, a.jsx)("img", {
                                                width: "24px",
                                                height: "24px",
                                                src: (0, d.Lr)("/b2c/icons" + e.img)
                                            }), " ", e.title]
                                        }, e.slug)
                                    }))
                                })
                            }), (0, a.jsxs)("div", {
                                className: "mt-5",
                                children: [(0, a.jsx)(k, {
                                    id: "iinp12",
                                    className: "mt-3",
                                    withComma: !0,
                                    onChange: g("principal"),
                                    defaultValue: m.principal,
                                    actualValue: s.principal,
                                    iconText: "\u20b9",
                                    title: "Loan Amount",
                                    min: 1,
                                    max: 1e10
                                }), (0, a.jsx)(k, {
                                    maxwidth: "50px",
                                    id: "iinp124",
                                    className: "mt-5",
                                    onChange: g("rate"),
                                    defaultValue: m.rate,
                                    actualValue: s.rate,
                                    iconText: "%",
                                    title: "Interest Rate",
                                    min: 4,
                                    max: 24
                                }), (0, a.jsx)(k, {
                                    withComma: !0,
                                    maxwidth: "50px",
                                    id: "iinp123",
                                    className: "mt-5",
                                    onChange: g("tenure"),
                                    defaultValue: m.tenure,
                                    actualValue: s.tenure,
                                    iconText: "Y",
                                    title: "Loan Tenure",
                                    min: 1,
                                    max: A[x].tenure
                                })]
                            }, x + "aslksak")]
                        }), (0, a.jsxs)("div", {
                            className: (0, l.Z)(b().chart__area, "d-flex flex-column align-items-center flex-grow-1"),
                            children: [(0, a.jsx)("div", {
                                className: "flex-grow-1 w-100",
                                children: (0, a.jsxs)("div", {
                                    className: "d-flex flex-grow-1 align-items-center justify-content-between",
                                    children: [(0, a.jsxs)("p", {
                                        className: "d-flex align-items-center gap-2",
                                        children: [(0, a.jsx)("svg", {
                                            width: "16",
                                            height: "16",
                                            viewBox: "0 0 16 16",
                                            fill: "none",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            children: (0, a.jsx)("circle", {
                                                cx: "8",
                                                cy: "8",
                                                r: "8",
                                                fill: "#E9F4FF"
                                            })
                                        }), "Interest Amount"]
                                    }), (0, a.jsxs)("p", {
                                        className: "d-flex align-items-center gap-2",
                                        children: [(0, a.jsx)("svg", {
                                            width: "16",
                                            height: "16",
                                            viewBox: "0 0 16 16",
                                            fill: "none",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            children: (0, a.jsx)("circle", {
                                                cx: "8",
                                                cy: "8",
                                                r: "8",
                                                fill: "#88C3FF"
                                            })
                                        }), "Principal Amount"]
                                    })]
                                })
                            }), (0, a.jsx)(w.$I, {
                                data: {
                                    labels: [],
                                    datasets: [{
                                        data: [s.principal, h],
                                        backgroundColor: ["#88C3FF", "#E9F4FF"],
                                        display: !0
                                    }]
                                },
                                options: {
                                    plugins: {
                                        legend: {
                                            display: !1
                                        },
                                        tooltip: {
                                            enabled: !1
                                        }
                                    },
                                    maintainAspectRatio: !0,
                                    responsive: !0
                                }
                            }), (0, a.jsxs)("div", {
                                className: (0, l.Z)(b().calcs, "w-100 mt-4"),
                                children: [(0, a.jsxs)("p", {
                                    className: "d-flex w-100 align-items-center gap-4 justify-content-between",
                                    children: [(0, a.jsx)("span", {
                                        children: "Monthly Emi"
                                    }), (0, a.jsxs)("span", {
                                        children: ["\u20b9", (0, L.Z)(u)]
                                    })]
                                }), (0, a.jsxs)("p", {
                                    className: "d-flex mt-2 w-100 align-items-center gap-4 justify-content-between",
                                    children: [(0, a.jsx)("span", {
                                        children: "Principal Amount"
                                    }), (0, a.jsxs)("span", {
                                        children: ["\u20b9", (0, L.Z)(s.principal)]
                                    })]
                                }), (0, a.jsxs)("p", {
                                    className: "d-flex mt-2 w-100 align-items-center gap-4 justify-content-between",
                                    children: [(0, a.jsx)("span", {
                                        children: "Interest Payable"
                                    }), (0, a.jsxs)("span", {
                                        children: ["\u20b9", (0, L.Z)(h)]
                                    })]
                                })]
                            }), (0, a.jsxs)("div", {
                                className: (0, l.Z)("w-100 mt-2 d-flex align-items-center justify-content-between gap-4", b().total),
                                children: [(0, a.jsx)("span", {
                                    children: "Total  Amount payable"
                                }), (0, a.jsxs)("span", {
                                    children: ["\u20b9", (0, L.Z)(o)]
                                })]
                            }), (0, a.jsx)(N(), {
                                href: t.href,
                                children: (0, a.jsx)("a", {
                                    className: (0, l.Z)("w-100 d-block text-white text-center text-decoration-none", b().apply__btn),
                                    children: "Apply Now"
                                })
                            })]
                        })]
                    })
                })
            }
            var F = n(88133),
                S = n(11347),
                T = n.n(S),
                W = [{
                    img: "/assets/home-loan.png",
                    title: "Home Loan EMI Calculator",
                    desc: "Using our online home loan emi calculator to find out the amount you need to pay per month towards your loan repayment by entering the Principal Loan Amount, Interest Rate, and Tenure."
                }, {
                    title: "Personal Loan EMI Calculator",
                    img: "/assets/personal-loan.png",
                    desc: "The simplest tool for understanding the monthly instalment that you will pay based on the loan amount and tenor of your choice is the Personal loan EMI calculator."
                }, {
                    img: "/assets/Business-loan.png",
                    title: "Business loan",
                    desc: "Exclusively designed for calculations related to business loans in order to help entrepreneurs determine how much they can afford to pay back on their loan."
                }];

            function B() {
                return (0, a.jsx)("div", {
                    className: T().layout,
                    children: (0, a.jsxs)("div", {
                        className: (0, l.Z)("container", T().container),
                        children: [(0, a.jsx)("h2", {
                            className: (0, l.Z)("mb-5", T().title),
                            children: "Types of Loan EMI Calculator"
                        }), W.map((function(e) {
                            return (0, a.jsxs)("div", {
                                className: (0, l.Z)("bg-white d-flex mt-3 gap-2", T().card),
                                children: [(0, a.jsx)("img", {
                                    className: "flex-shrink-0",
                                    src: e.img
                                }), (0, a.jsxs)("div", {
                                    children: [(0, a.jsx)("h3", {
                                        children: e.title
                                    }), (0, a.jsx)("p", {
                                        className: "mb-0",
                                        children: e.desc
                                    })]
                                })]
                            })
                        })), (0, a.jsxs)("p", {
                            className: "mt-4",
                            children: ["With the help of K3M Housing LLP' easy EMI calculator, you can calculate other types of loans as well, Including ", (0, a.jsx)("a", {
                                href: "/loan-against-property",
                                target: "_blank",
                                children: "Loans Against Property"
                            }), ", ", (0, a.jsx)("a", {
                                href: "/car-loan",
                                target: "_blank",
                                children: "Car Loans"
                            }), ", ", (0, a.jsx)("a", {
                                href: "/education-loan",
                                target: "_blank",
                                children: "Education Loans"
                            }), ", ", (0, a.jsx)("a", {
                                href: "/gold-loan",
                                target: "_blank",
                                children: "Gold Loans,"
                            }), ", and more, to plan your finances."]
                        })]
                    })
                })
            }

            function R() {
                return (0, a.jsxs)(r.Fragment, {
                    children: [(0, a.jsx)(F.Z, {
                        url: "/emi-calculator",
                        metaInfo: {
                            title: "EMI Calculator for Home Loan, Personal Loan & Business Loan in India",
                            meta_desc: "EMI Calculator - Calculate your Business Loan, Personal Loan & Home Loan EMI with Flexible Loan Calculators. Check Yearly & Monthly EMI's with K3M Housing LLP."
                        }
                    }), (0, a.jsx)(P, {}), (0, a.jsx)(y, {}), (0, a.jsx)(B, {}), (0, a.jsxs)(j, {
                        children: [(0, a.jsx)(p, {}), (0, a.jsx)(c, {})]
                    })]
                })
            }
        },
        69075: function(e, t, n) {
            "use strict";
            n.d(t, {
                Ec: function() {
                    return _
                },
                JC: function() {
                    return h
                },
                Ju: function() {
                    return f
                },
                WT: function() {
                    return c
                },
                dg: function() {
                    return y
                },
                pw: function() {
                    return m
                },
                r1: function() {
                    return w
                },
                tC: function() {
                    return v
                }
            });
            var a = n(34051),
                r = n.n(a),
                s = n(87066),
                i = n(38981);

            function l(e, t, n, a, r, s, i) {
                try {
                    var l = e[s](i),
                        o = l.value
                } catch (c) {
                    return void n(c)
                }
                l.done ? t(o) : Promise.resolve(o).then(a, r)
            }

            function o(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(a, r) {
                        var s = e.apply(t, n);

                        function i(e) {
                            l(s, a, r, i, o, "next", e)
                        }

                        function o(e) {
                            l(s, a, r, i, o, "throw", e)
                        }
                        i(void 0)
                    }))
                }
            }

            function c(e) {
                return u.apply(this, arguments)
            }

            function u() {
                return (u = o(r().mark((function e(t) {
                    var n;
                    return r().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, i.default.post("v2/calculator/calculate-emi", t);
                            case 2:
                                return n = e.sent, e.abrupt("return", n);
                            case 4:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function h(e) {
                return d.apply(this, arguments)
            }

            function d() {
                return (d = o(r().mark((function e(t) {
                    var n;
                    return r().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, i.baseapicrm.post("v1/b2c/getHyperlinkLocationExternal", t);
                            case 2:
                                return n = e.sent, e.abrupt("return", n);
                            case 4:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function m() {
                return p.apply(this, arguments)
            }

            function p() {
                return (p = o(r().mark((function e() {
                    var t;
                    return r().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, s.Z.post("https://crm-api.K3M Housing LLP.com/v1/crm-component-configs/getConfigAndMetaUnauth", {
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

            function f(e) {
                return x.apply(this, arguments)
            }

            function x() {
                return (x = o(r().mark((function e(t) {
                    var n;
                    return r().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, i.default.post("v1/user/add-customer-lead", t);
                            case 2:
                                return n = e.sent, e.abrupt("return", n);
                            case 4:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function y(e) {
                return g.apply(this, arguments)
            }

            function g() {
                return (g = o(r().mark((function e(t) {
                    var n;
                    return r().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, i.default.post("v1/user/verify-otp-lead-form", t, {
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
                return j.apply(this, arguments)
            }

            function j() {
                return (j = o(r().mark((function e(t) {
                    var n;
                    return r().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, i.default.post("v1/user /resend-otp-for-add-lead", {
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

            function v(e) {
                return b.apply(this, arguments)
            }

            function b() {
                return (b = o(r().mark((function e(t) {
                    var n, a;
                    return r().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return n = t.type, e.next = 3, i.default.post("v1/user/get-dynamic-drop-down", {
                                    type: n
                                }, {
                                    headers: {
                                        Authorization: "sdgfbh317989fbs12@!&dhah"
                                    }
                                });
                            case 3:
                                return a = e.sent, e.abrupt("return", a);
                            case 5:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function w(e) {
                return C.apply(this, arguments)
            }

            function C() {
                return (C = o(r().mark((function e(t) {
                    var n;
                    return r().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, i.default.post("v1/user/contact-us", t, {
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
        2011: function(e) {
            e.exports = {
                title: "EmiCalculatorBenifit_title__AbZ7B",
                layout: "EmiCalculatorBenifit_layout__TXXBa",
                cards: "EmiCalculatorBenifit_cards__FDj_Z",
                card: "EmiCalculatorBenifit_card__BU4tY"
            }
        },
        42375: function(e) {
            e.exports = {
                layout: "EmiCalculatorFeature_layout__d_R8e",
                title: "EmiCalculatorFeature_title__fSnOO",
                card: "EmiCalculatorFeature_card__RA9EB"
            }
        },
        74545: function(e) {
            e.exports = {
                title: "EmiCalculatorIntro_title__H_qMF",
                subtitle: "EmiCalculatorIntro_subtitle__A_97o",
                desc: "EmiCalculatorIntro_desc__wdIn1",
                layout: "EmiCalculatorIntro_layout___uq4H"
            }
        },
        8861: function(e) {
            e.exports = {
                title: "EmiCalculatorUse_title__SwyDx",
                subtitle: "EmiCalculatorUse_subtitle__QLnyF",
                layout: "EmiCalculatorUse_layout__REGCI"
            }
        },
        11347: function(e) {
            e.exports = {
                layout: "TypesOfEmiCalc_layout__95ap0",
                title: "TypesOfEmiCalc_title___yncJ",
                card: "TypesOfEmiCalc_card__fl42k"
            }
        },
        96549: function(e) {
            e.exports = {
                title: "EmiCalculatorWithChart_title__qLAbA",
                layout: "EmiCalculatorWithChart_layout__jYJrl",
                slider: "EmiCalculatorWithChart_slider__mQmqy",
                "slider-title": "EmiCalculatorWithChart_slider-title__j_kf8",
                "tabs-scroll": "EmiCalculatorWithChart_tabs-scroll__OwJ2U",
                tab: "EmiCalculatorWithChart_tab____Qkm",
                tab__active: "EmiCalculatorWithChart_tab__active__Ml7Ye",
                toggle_loans: "EmiCalculatorWithChart_toggle_loans__qugqr",
                "slider-top": "EmiCalculatorWithChart_slider-top__m_Tpe",
                active: "EmiCalculatorWithChart_active__5I3Rt",
                calculator: "EmiCalculatorWithChart_calculator__C0yki",
                chart__area: "EmiCalculatorWithChart_chart__area__H0UYN",
                apply__btn: "EmiCalculatorWithChart_apply__btn__jpspX",
                total: "EmiCalculatorWithChart_total__QBu31",
                calcs: "EmiCalculatorWithChart_calcs__dWwwl"
            }
        }
    },
    function(e) {
        e.O(0, [2196, 3853, 8133, 9774, 2888, 179], (function() {
            return t = 49060, e(e.s = t);
            var t
        }));
        var t = e.O();
        _N_E = t
    }
]);