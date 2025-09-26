(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5405], {
        75557: function(e, s, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/", function() {
                return n(6224)
            }])
        },
        62948: function(e, s) {
            "use strict";
            s.Z = function(e) {
                return e ? (e = +e.toString().replace(/[,]/g, "")).toString().split(".")[0].length > 3 ? e.toString().substring(0, e.toString().split(".")[0].length - 3).replace(/\B(?=(\d{2})+(?!\d))/g, ",") + "," + e.toString().substring(e.toString().split(".")[0].length - 3) : e.toString() : ""
            }
        },
        6224: function(e, s, n) {
            "use strict";
            n.r(s), n.d(s, {
                __N_SSG: function() {
                    return X
                },
                default: function() {
                    return J
                }
            });
            var a = n(85893),
                i = n(5152),
                t = n.n(i),
                r = n(41664),
                l = n.n(r),
                o = n(11163),
                c = n(67294),
                d = n(10682),
                m = n(43021),
                u = n(21608),
                h = n(31555),
                p = n(35005),
                g = n(6529),
                x = n(36968);
            var _ = function() {
                    return (0, a.jsx)("div", {
                        style: {
                            zIndex: "99999",
                            left: "0"
                        },
                        className: "position-fixed mx-auto top-0 w-100 left-0 right-0 bottom-0 d-flex align-items-center justify-content-center w-100 h-100",
                        children: (0, a.jsx)(x.Z, {
                            animation: "border",
                            variant: "primary"
                        })
                    })
                },
                b = t()((function() {
                    return Promise.all([n.e(6310), n.e(2175), n.e(4406), n.e(9531), n.e(2271)]).then(n.bind(n, 9531))
                }), {
                    loadableGenerated: {
                        webpack: function() {
                            return [9531]
                        }
                    },
                    ssr: !1,
                    loading: _
                }),
                f = function(e) {
                    var s = e.banners,
                        n = (0, c.useState)(!1),
                        i = n[0],
                        t = n[1],
                        r = (0, o.useRouter)().query,
                        x = r.utm_source,
                        _ = r.utm_medium,
                        f = r.utm_campaign,
                        j = (0, g.Z)({}).isDocReady;
                    return (0, a.jsxs)(c.Fragment, {
                        children: [(0, a.jsx)("div", {
                            className: "banner-container",
                            children: (0, a.jsx)(d.Z, {
                                children: (0, a.jsx)(m.Z, {
                                    children: (j ? s : s.slice(0, 1)).map((function(e) {
                                        var s;
                                        return (0, a.jsx)(m.Z.Item, {
                                            interval: 2e3,
                                            children: (0, a.jsxs)(u.Z, {
                                                className: "align-items-center",
                                                children: [(0, a.jsxs)(h.Z, {
                                                    lg: 6,
                                                    md: 6,
                                                    sm: 12,
                                                    children: [(0, a.jsx)("div", {
                                                        className: "banner-title",
                                                        dangerouslySetInnerHTML: {
                                                            __html: e.media_title
                                                        }
                                                    }), (0, a.jsx)("div", {
                                                        className: "banner-sub-title",
                                                        dangerouslySetInnerHTML: {
                                                            __html: e.description
                                                        }
                                                    }), e.hyperlink ? (0, a.jsx)(l(), {
                                                        href: e.hyperlink,
                                                        prefetch: !1,
                                                        children: (0, a.jsx)("a", {
                                                            target: (null === (s = e.hyperlink) || void 0 === s ? void 0 : s.includes("K3M Housing LLP.com")) ? void 0 : "_blank",
                                                            className: "btn-danger btn text-white",
                                                            style: {
                                                                zIndex: "999",
                                                                position: "relative"
                                                            },
                                                            id: "gtm_know-more",
                                                            children: e.hypertext || "Know More"
                                                        })
                                                    }) : (0, a.jsx)(p.Z, {
                                                        variant: "danger",
                                                        className: "text-white",
                                                        onClick: function() {
                                                            return t(!0)
                                                        },
                                                        style: {
                                                            zIndex: "999",
                                                            position: "relative"
                                                        },
                                                        id: "gtm_know-more",
                                                        children: e.hypertext || ""
                                                    })]
                                                }), (0, a.jsx)(h.Z, {
                                                    className: "text-center",
                                                    lg: 6,
                                                    md: 6,
                                                    sm: 12,
                                                    children: (0, a.jsx)("img", {
                                                        style: {
                                                            objectFit: "contain",
                                                            objectPosition: "center"
                                                        },
                                                        width: "600",
                                                        height: "600",
                                                        src: e.media_source,
                                                        alt: "K3M Housing LLP Featured Banner"
                                                    })
                                                })]
                                            })
                                        }, e.id + "anek")
                                    }))
                                })
                            })
                        }), i ? (0, a.jsx)(b, {
                            showLead: i,
                            setShowLead: t,
                            utm_source: x,
                            utm_campaign: f,
                            utm_medium: _,
                            isInquiry: !0
                        }) : null]
                    })
                },
                j = n(34159),
                y = n.n(j),
                w = n(90512),
                v = function(e) {
                    var s = e.loanTypes,
                        n = (0, o.useRouter)();
                    return (0, a.jsx)("div", {
                        id: "ourproducts",
                        className: y()["loan-types-container"],
                        children: (0, a.jsxs)(d.Z, {
                            children: [(0, a.jsx)("h2", {
                                className: (0, w.Z)(y()["loan-types-title"], "mb-2"),
                                children: "We Facilitate"
                            }), (0, a.jsx)("p", {
                                className: y().types_desc,
                                children: "Wide Range of Financial Products That suits your customer's needs!"
                            }), (0, a.jsx)(u.Z, {
                                children: s.map((function(e, s) {
                                    return (0, a.jsx)(h.Z, {
                                        lg: 3,
                                        md: 4,
                                        sm: 6,
                                        xs: 12,
                                        children: (0, a.jsxs)("div", {
                                            className: y()["loan-type-box"],
                                            onClick: function() {
                                                return n.push(e.link)
                                            },
                                            children: [(0, a.jsx)("p", {
                                                className: y().title,
                                                children: e.name
                                            }), (0, a.jsx)("p", {
                                                className: y().desc,
                                                children: e.desc
                                            }), (0, a.jsx)("img", {
                                                width: "40px",
                                                height: "40px",
                                                className: y()["loan-img"],
                                                src: e.image,
                                                alt: e.alt,
                                                loading: "lazy"
                                            }), (0, a.jsxs)("p", {
                                                className: y().availability,
                                                children: ["Check Eligibility", (0, a.jsx)("span", {
                                                    children: (0, a.jsx)("img", {
                                                        src: "/assets/icons/right-arrow.png",
                                                        alt: "right arrow",
                                                        loading: "lazy"
                                                    })
                                                })]
                                            })]
                                        })
                                    }, s)
                                }))
                            })]
                        })
                    })
                },
                N = n(29918),
                k = n.n(N),
                P = function(e) {
                    var s = e.insuranceTypes,
                        n = (0, o.useRouter)();
                    return (0, a.jsx)("div", {
                        className: k()["insurance-types-container"],
                        children: (0, a.jsxs)(d.Z, {
                            children: [(0, a.jsx)("h2", {
                                className: (0, w.Z)(k()["insurance-types-title"], "mb-2"),
                                children: "Insurance"
                            }), (0, a.jsx)("p", {
                                className: k().types_desc,
                                children: "Wide Range of Insurance Products"
                            }), (0, a.jsx)(u.Z, {
                                children: s.map((function(e, s) {
                                    return (0, a.jsx)(h.Z, {
                                        className: "cursor-pointer",
                                        lg: 3,
                                        md: 4,
                                        sm: 6,
                                        xs: 12,
                                        onClick: function() {
                                            return n.push(e.link)
                                        },
                                        children: (0, a.jsxs)("div", {
                                            className: k()["insurance-type-box"],
                                            children: [(0, a.jsx)("p", {
                                                className: k().title,
                                                children: e.name
                                            }), (0, a.jsx)("p", {
                                                className: k().desc,
                                                children: e.desc
                                            }), (0, a.jsx)("img", {
                                                width: "40px",
                                                height: "40px",
                                                className: k()["insurance-img"],
                                                src: e.image,
                                                loading: "lazy",
                                                alt: e.alt
                                            }), (0, a.jsxs)("p", {
                                                className: "availability",
                                                children: ["Starting from \u20b9 450/month*", (0, a.jsx)("span", {
                                                    children: (0, a.jsx)("img", {
                                                        className: "object-fit-contain",
                                                        width: "24px",
                                                        height: "24px",
                                                        src: "/assets/icons/right-arrow.png",
                                                        alt: "right arrow",
                                                        loading: "lazy"
                                                    })
                                                })]
                                            })]
                                        })
                                    }, s)
                                }))
                            }), (0, a.jsx)("div", {
                                id: "leadingloandistributor"
                            })]
                        })
                    })
                },
                Z = n(86716),
                R = function() {
                    return (0, a.jsxs)(d.Z, {
                        className: "partners-container",
                        children: [(0, a.jsx)("p", {
                            className: "partner-title partner__marg-title",
                            children: "Get Loans for your customers from India\u2019s Top-Tier Lenders"
                        }), (0, a.jsx)("div", {
                            className: "partner__marg d-grid",
                            children: [{
                                image: "3.webp",
                                title: "Bajaj Finserv"
                            }, {
                                image: "1.webp",
                                title: "Edelweiss"
                            }, {
                                image: "2.webp",
                                title: "Piramal Finance"
                            }, {
                                image: "6.webp",
                                title: "RBL Bank"
                            }, {
                                image: "8.webp",
                                title: "SMFG India Credit"
                            }, {
                                image: "5.webp",
                                title: "ICIC Bank"
                            }].map((function(e, s) {
                                return (0, a.jsx)("div", {
                                    className: "cursor-pointer card__box text-center",
                                    children: (0, a.jsx)("img", {
                                        src: (0, Z.Lr)("/b2c/partners/" + e.image),
                                        alt: e.title,
                                        loading: "lazy"
                                    })
                                }, s + "partners_ru")
                            }))
                        })]
                    })
                },
                A = n(46066),
                L = (n(41548), n(73873), function() {
                    var e = function(e) {
                            var s = e.onClick;
                            return (0, a.jsx)("div", {
                                className: "prev-slick",
                                onClick: s,
                                children: (0, a.jsx)("img", {
                                    src: "/assets/arrowleft.svg",
                                    alt: "arrow left",
                                    loading: "lazy"
                                })
                            })
                        },
                        s = function(e) {
                            var s = e.onClick;
                            return (0, a.jsx)("div", {
                                className: "next-slick",
                                onClick: s,
                                children: (0, a.jsx)("img", {
                                    src: "/assets/arrowright.svg",
                                    alt: "arrow right",
                                    loading: "lazy"
                                })
                            })
                        };
                    return (0, a.jsx)("div", {
                        className: "clients-container",
                        children: (0, a.jsxs)(d.Z, {
                            children: [(0, a.jsx)("p", {
                                className: "clients-title mb-0",
                                children: "What People Say About Us?"
                            }), (0, a.jsxs)(A.Z, {
                                slidesToShow: 1,
                                infinite: !0,
                                slidesToScroll: 1,
                                autoplay: !1,
                                speed: 1e3,
                                nextArrow: (0, a.jsx)(s, {}),
                                prevArrow: (0, a.jsx)(e, {}),
                                dots: !1,
                                focusOnSelect: !0,
                                children: [(0, a.jsx)("div", {
                                    className: "slide-body",
                                    children: (0, a.jsxs)(u.Z, {
                                        children: [(0, a.jsx)(h.Z, {
                                            lg: 4,
                                            children: (0, a.jsxs)("div", {
                                                className: "client-photo",
                                                children: [(0, a.jsx)("img", {
                                                    src: "/assets/sunil.png",
                                                    alt: "sunil",
                                                    loading: "lazy"
                                                }), (0, a.jsx)("p", {
                                                    className: "name text-center",
                                                    children: "Sunil Sachdeva"
                                                }), (0, a.jsx)("p", {
                                                    className: "post text-center",
                                                    children: "Manager - Advertising Ad Operations"
                                                })]
                                            })
                                        }), (0, a.jsx)(h.Z, {
                                            lg: 8,
                                            children: (0, a.jsxs)("div", {
                                                className: "client-msg",
                                                children: [(0, a.jsx)("img", {
                                                    src: "/assets/icons/quotes.png",
                                                    className: "quotes-img",
                                                    alt: "quote",
                                                    loading: "lazy"
                                                }), (0, a.jsx)("p", {
                                                    className: "headline",
                                                    children: "Will surely refer to K3M Housing LLP services"
                                                }), (0, a.jsx)("p", {
                                                    className: "msg",
                                                    children: "\u201cI really appreciate your kind efforts, which helped me secure the Personal Loan disbursed from HDFC Bank through K3M Housing LLP Company. It was a wonderful experience dealing with you. Your dedication and hardworking approach are highly appreciable, which made the entire process smooth\u201d"
                                                }), (0, a.jsx)("p", {
                                                    className: "stars",
                                                    children: [1, 2, 3, 4, 5].map((function(e, s) {
                                                        return (0, a.jsx)("img", {
                                                            width: "22px",
                                                            height: "20px",
                                                            src: "/assets/icons/star.svg",
                                                            alt: "star",
                                                            loading: "lazy"
                                                        }, s)
                                                    }))
                                                })]
                                            })
                                        })]
                                    })
                                }), (0, a.jsx)("div", {
                                    className: "slide-body",
                                    children: (0, a.jsxs)(u.Z, {
                                        children: [(0, a.jsx)(h.Z, {
                                            lg: 4,
                                            children: (0, a.jsxs)("div", {
                                                className: "client-photo",
                                                children: [(0, a.jsx)("img", {
                                                    src: "/assets/mohneet.png",
                                                    alt: "Moneet",
                                                    loading: "lazy"
                                                }), (0, a.jsx)("p", {
                                                    className: "name text-center",
                                                    children: "Moneet Vijayakar"
                                                }), (0, a.jsx)("p", {
                                                    className: "post text-center",
                                                    children: "General Manager - Mswipe Technologies Pvt. Ltd."
                                                })]
                                            })
                                        }), (0, a.jsx)(h.Z, {
                                            lg: 8,
                                            children: (0, a.jsxs)("div", {
                                                className: "client-msg",
                                                children: [(0, a.jsx)("img", {
                                                    src: "/assets/icons/quotes.png",
                                                    className: "quotes-img",
                                                    alt: "quote",
                                                    loading: "lazy"
                                                }), (0, a.jsx)("p", {
                                                    className: "headline",
                                                    children: "Will surely refer to K3M Housing LLP services"
                                                }), (0, a.jsx)("p", {
                                                    className: "msg",
                                                    children: "\u201cThis time, I worked with K3M Housing LLP to transfer my Home Loan to Kotak Bank. The way in which this was handled was awesome. Thanks to Rishabh for recommending the balance transfer option, where I will save a significant amount. I will surely refer K3M Housing LLP' services to my close contacts.\""
                                                }), (0, a.jsx)("p", {
                                                    className: "stars",
                                                    children: [1, 2, 3, 4, 5].map((function(e, s) {
                                                        return (0, a.jsx)("img", {
                                                            src: "/assets/icons/star.svg",
                                                            alt: "star",
                                                            loading: "lazy"
                                                        }, s)
                                                    }))
                                                })]
                                            })
                                        })]
                                    })
                                }), (0, a.jsx)("div", {
                                    className: "slide-body",
                                    children: (0, a.jsxs)(u.Z, {
                                        children: [(0, a.jsx)(h.Z, {
                                            lg: 4,
                                            children: (0, a.jsxs)("div", {
                                                className: "client-photo",
                                                children: [(0, a.jsx)("img", {
                                                    src: (0, Z.Lr)("/b2c/shared/assets/jitesh.jpg"),
                                                    alt: "Jitesh",
                                                    loading: "lazy"
                                                }), (0, a.jsx)("p", {
                                                    className: "name text-center",
                                                    children: "Jitesh Lohar"
                                                }), (0, a.jsx)("p", {
                                                    className: "post text-center",
                                                    children: "Vice President \u2013 Business Development"
                                                })]
                                            })
                                        }), (0, a.jsx)(h.Z, {
                                            lg: 8,
                                            children: (0, a.jsxs)("div", {
                                                className: "client-msg",
                                                children: [(0, a.jsx)("img", {
                                                    src: "/assets/icons/quotes.png",
                                                    className: "quotes-img",
                                                    alt: "quote",
                                                    loading: "lazy"
                                                }), (0, a.jsx)("p", {
                                                    className: "headline",
                                                    children: "Will surely refer to K3M Housing LLP services"
                                                }), (0, a.jsx)("p", {
                                                    className: "msg",
                                                    children: "\u201cHello, The experience of working with Chirag was really great, he was professional and helped to disburse the loan amount speedily. He was transparent and professional on getting the work done.\u201d"
                                                }), (0, a.jsx)("p", {
                                                    className: "stars",
                                                    children: [1, 2, 3, 4, 5].map((function(e, s) {
                                                        return (0, a.jsx)("img", {
                                                            src: "/assets/icons/star.svg",
                                                            alt: "star",
                                                            loading: "lazy"
                                                        }, s)
                                                    }))
                                                })]
                                            })
                                        })]
                                    })
                                })]
                            })]
                        })
                    })
                }),
                S = n(16068),
                I = n.n(S),
                B = n(62948),
                C = function(e) {
                    var s = e.animateToNumber,
                        n = e.stopAnim,
                        i = e.setStopAnim,
                        t = (0, c.useRef)();
                    return (0, c.useEffect)((function() {
                        var e = new IntersectionObserver((function(e) {
                            e.forEach((function(e) {
                                if (e.isIntersecting) try {
                                    var n = new window.Odometer({
                                        el: t.current,
                                        auto: !1,
                                        theme: "car",
                                        format: "(,ddd).dd",
                                        duration: 1e3
                                    });
                                    null === n || void 0 === n || n.update(s)
                                } catch (a) {}
                            }), {
                                threshold: 0
                            })
                        }));
                        t.current && (window.odometerdone = function() {
                            i(!0)
                        }, e.observe(t.current))
                    }), [null === t || void 0 === t ? void 0 : t.current]), n ? (0, a.jsx)("div", {
                        children: (0, B.Z)(s)
                    }, s + "asdas") : (0, a.jsx)("div", {
                        ref: t,
                        children: (0, B.Z)(s)
                    })
                };
            var D = function() {
                    var e, s, n, i = (0, c.useState)(!1),
                        t = i[0],
                        r = i[1],
                        l = [{
                            img: (0, Z.Lr)("/b2c/overview/year-of-grow-K3M Housing LLP.webp"),
                            number: 25,
                            title: "Years of Experience",
                            postfix: "+",
                            className: I().maxwidth
                        }, {
                            img: (0, Z.Lr)("/b2c/overview/K3M Housing LLP-partners-connection.webp"),
                            number: 275,
                            postfix: "+",
                            title: "Financial Institution Partners"
                        }, (e = {
                            img: (0, Z.Lr)("/b2c/overview/availability-of-K3M Housing LLP-across-india.webp"),
                            prefix: "Presence in \xa0",
                            postfix: "",
                            title: "Cities Through A Wide Branch Network",
                            number: 4e3
                        }, s = "postfix", n = "+", s in e ? Object.defineProperty(e, s, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[s] = n, e), {
                            img: (0, Z.Lr)("/b2c/overview/loan-disbursal-by-K3M Housing LLP.webp"),
                            prefix: "\u20b9",
                            postfix: "\xa0lakh cr+",
                            number: "1.4",
                            title: "In Loans Disbursed"
                        }];
                    return (0, a.jsx)("div", {
                        className: I().layout,
                        children: (0, a.jsxs)(d.Z, {
                            children: [(0, a.jsx)("h2", {
                                className: (0, w.Z)(I().master_title, "mb-0"),
                                children: "K3M Housing LLP \u2013 India\u2019s Leading Loan Distribution Company"
                            }), (0, a.jsx)("div", {
                                className: (0, w.Z)(I().achivements, "d-grid"),
                                children: l.map((function(e) {
                                    return (0, a.jsxs)("div", {
                                        className: (0, w.Z)(I().achivement, e.className),
                                        children: [(0, a.jsx)("div", {
                                            className: I()["achivement__img-box"],
                                            children: (0, a.jsx)("img", {
                                                src: e.img,
                                                alt: e.title,
                                                loading: "lazy"
                                            })
                                        }), (0, a.jsxs)("div", {
                                            className: (0, w.Z)(I().countup, "d-flex align-items-center pb-1 pt-2"),
                                            children: [e.prefix, (0, a.jsx)(C, {
                                                stopAnim: t,
                                                setStopAnim: r,
                                                animateToNumber: e.number
                                            }), e.postfix]
                                        }), (0, a.jsx)("p", {
                                            className: (0, w.Z)(I().achivement__title, "mb-0"),
                                            children: e.title
                                        })]
                                    }, e.number + "sdksoee")
                                }))
                            }), (0, a.jsx)("p", {
                                className: (0, w.Z)(I().master__footer, "mb-0"),
                                children: "At K3M Housing LLP, we are committed to helping clients reach their financial objectives with tailored solutions. With a PAN India presence in over 4,000 cities, we stand as one of the nation\u2019s leading credit lending establishments. Founded by financial professionals with over 25 years of experience,  we\u2019ve proudly served over 1 million clients, disbursing loans exceeding 1.4 Lakh Crores through our partnerships with 275+ Financial Institution Partners."
                            })]
                        })
                    })
                },
                z = n(88133),
                E = n(10710),
                H = n.n(E),
                T = n(97005);

            function q() {
                return (0, a.jsx)("div", {
                    className: H().BannerContainer,
                    children: (0, a.jsxs)(d.Z, {
                        className: H().banner,
                        children: [(0, a.jsx)("div", {
                            className: H().sliders,
                            children: (0, a.jsxs)("div", {
                                className: "marquee-div",
                                children: [(0, a.jsx)(T.Z, {
                                    speed: 100,
                                    children: (0, a.jsx)("div", {
                                        className: H().slider,
                                        children: [{
                                            id: 1,
                                            image: "image1.png"
                                        }, {
                                            id: 2,
                                            image: "image2.png"
                                        }, {
                                            id: 3,
                                            image: "image3.png"
                                        }, {
                                            id: 4,
                                            image: "image4.png"
                                        }, {
                                            id: 5,
                                            image: "image5.png"
                                        }, {
                                            id: 6,
                                            image: "image6.png"
                                        }].map((function(e) {
                                            return (0, a.jsx)("div", {
                                                className: H().slidercontent,
                                                children: (0, a.jsx)("img", {
                                                    loading: "lazy",
                                                    src: "/images/HomeKnowledgeCenter/".concat(e.image),
                                                    alt: "Slide ".concat(e.id)
                                                })
                                            }, e.id)
                                        }))
                                    })
                                }), (0, a.jsx)(T.Z, {
                                    speed: 100,
                                    direction: "right",
                                    children: (0, a.jsx)("div", {
                                        className: H().slider + " " + H().secondslider,
                                        children: [{
                                            id: 7,
                                            image: "image7.png"
                                        }, {
                                            id: 8,
                                            image: "image8.png"
                                        }, {
                                            id: 9,
                                            image: "image9.png"
                                        }, {
                                            id: 10,
                                            image: "image10.png"
                                        }, {
                                            id: 11,
                                            image: "image11.png"
                                        }, {
                                            id: 12,
                                            image: "image12.png"
                                        }].map((function(e) {
                                            return (0, a.jsx)("div", {
                                                className: H().slidercontent,
                                                children: (0, a.jsx)("img", {
                                                    loading: "lazy",
                                                    src: "/images/HomeKnowledgeCenter/".concat(e.image),
                                                    alt: "Slide ".concat(e.id)
                                                })
                                            }, e.id)
                                        }))
                                    })
                                })]
                            })
                        }), (0, a.jsx)("div", {
                            className: H().content,
                            children: (0, a.jsxs)("div", {
                                className: H()["text-btn"],
                                children: [(0, a.jsx)("div", {
                                    className: H().title,
                                    children: "K3M Housing LLP Knowledge Centre"
                                }), (0, a.jsx)("div", {
                                    className: H().text,
                                    children: (0, a.jsxs)("ul", {
                                        children: [(0, a.jsx)("li", {
                                            children: "Latest financial insights"
                                        }), (0, a.jsx)("li", {
                                            children: "Tutorial YouTube videos"
                                        }), (0, a.jsx)("li", {
                                            children: "Financial Products information"
                                        }), (0, a.jsx)("li", {
                                            children: "Blogs covering the newest trends in the finance domain"
                                        }), (0, a.jsx)("li", {
                                            children: "Expert tips and strategies for financial growth and stability"
                                        })]
                                    })
                                }), (0, a.jsx)(l(), {
                                    prefetch: !1,
                                    href: "/knowledge-center",
                                    children: (0, a.jsx)("a", {
                                        className: H().mainbutton,
                                        children: "Explore"
                                    })
                                })]
                            })
                        })]
                    })
                })
            }
            var W = n(5607),
                F = function(e) {
                    var s = e.faqs,
                        n = e.withH1;
                    return (0, a.jsx)("div", {
                        className: "business-faq-container mb-5",
                        children: (0, a.jsxs)(d.Z, {
                            children: [(0, a.jsx)("div", {
                                className: "business-faq-title pt-4",
                                children: n ? (0, a.jsx)("h1", {
                                    className: "mb-4",
                                    children: s.heading
                                }) : (0, a.jsx)("h2", {
                                    className: "mb-4",
                                    children: s.heading
                                })
                            }), (0, a.jsx)("div", {
                                className: "faq-list",
                                children: (0, a.jsx)(W.Z, {
                                    defaultActiveKey: "0",
                                    children: s.faqsData.map((function(e, s) {
                                        return (0, a.jsxs)(W.Z.Item, {
                                            eventKey: s,
                                            children: [(0, a.jsx)(W.Z.Header, {
                                                children: e.title
                                            }), (0, a.jsx)(W.Z.Body, {
                                                children: null === e || void 0 === e ? void 0 : e.desc
                                            })]
                                        }, s + "ru_shared_faqs")
                                    }))
                                })
                            })]
                        })
                    })
                },
                O = n(53436),
                G = n.n(O),
                Y = function() {
                    var e = (0, c.useState)("0"),
                        s = e[0],
                        n = e[1],
                        i = (0, c.useRef)();
                    return (0, c.useEffect)((function() {
                        if (i.current && window.innerWidth > 1199) {
                            var e = (window.innerWidth - i.current.offsetWidth) / 2;
                            n(e + "px")
                        }
                    }), [i]), (0, a.jsxs)(d.Z, {
                        ref: i,
                        className: (0, w.Z)(G().partner__app, "d-flex align-items-center"),
                        children: [(0, a.jsxs)("div", {
                            children: [(0, a.jsx)("h2", {
                                className: G().partner__title,
                                children: "Ruconnect App - India\u2019s First B2B Loan Distribution Channel Partner App"
                            }), (0, a.jsx)("p", {
                                children: "Discover Ruconnect, India\u2019s first B2B fintech app in the loan distribution domain, brought to you by K3M Housing LLP Distribution Services Pvt. Ltd, a trusted digital loan service provider for lenders across India. Designed exclusively for channel partners, Ruconnect offers a comprehensive suite of financial products including personal loans, business loans, home loans, loans against property, credit cards, insurance, and more."
                            }), (0, a.jsx)("h3", {
                                children: "With Ruconnect, you can:"
                            }), (0, a.jsxs)("ul", {
                                children: [(0, a.jsx)("li", {
                                    children: "Access a PAN India network of lenders and customers."
                                }), (0, a.jsx)("li", {
                                    children: "Benefit from being the first in the industry to offer a Free CIBIL Check."
                                }), (0, a.jsx)("li", {
                                    children: "Use convenient features like an EMI calculator to assist customers."
                                }), (0, a.jsx)("li", {
                                    children: "Empower your customers with seamless loan options."
                                }), (0, a.jsx)("li", {
                                    children: "Start your journey as a successful loan distribution partner and begin earning"
                                })]
                            }), (0, a.jsxs)("div", {
                                className: (0, w.Z)(G().downloads_action, "d-flex align-items-center"),
                                children: [(0, a.jsx)("img", {
                                    className: G().qr__img,
                                    src: (0, Z.Lr)("/b2c/icons/download-app-qrcode.webp"),
                                    loading: "lazy",
                                    alt: "Ruconnect App Download QR"
                                }), (0, a.jsxs)("div", {
                                    className: (0, w.Z)(G().downloads, "d-flex flex-column gap-3"),
                                    children: [(0, a.jsxs)("a", {
                                        href: "https://K3M Housing LLP.com/app/b2b",
                                        target: "_blank",
                                        className: (0, w.Z)(G().btn1, "d-flex text-decoration-none gap-2 bg-black align-items-center"),
                                        children: [(0, a.jsx)("img", {
                                            src: (0, Z.Lr)("/b2c/icons/apple-icon.webp"),
                                            alt: "App Store",
                                            loading: "lazy"
                                        }), (0, a.jsxs)("div", {
                                            children: [(0, a.jsx)("p", {
                                                className: "text-white mb-0 ",
                                                children: "Download on the"
                                            }), (0, a.jsx)("p", {
                                                className: "text-white mb-0",
                                                children: "App Store"
                                            })]
                                        })]
                                    }), (0, a.jsxs)("a", {
                                        target: "_blank",
                                        href: "https://K3M Housing LLP.com/app/b2b",
                                        className: (0, w.Z)(G().btn2, "text-decoration-none gap-2 d-flex bg-black align-items-center"),
                                        children: [(0, a.jsx)("img", {
                                            src: (0, Z.Lr)("/b2c/icons/google-play-store.webp"),
                                            loading: "lazy",
                                            alt: "Google Play"
                                        }), (0, a.jsxs)("div", {
                                            children: [(0, a.jsx)("p", {
                                                className: "text-white mb-0",
                                                children: "GET IT ON"
                                            }), (0, a.jsx)("p", {
                                                className: "text-white mb-0",
                                                children: "Google Play"
                                            })]
                                        })]
                                    }), (0, a.jsx)("a", {
                                        href: "https://ruconnect.in/",
                                        target: "_blank",
                                        className: (0, w.Z)(G().btn4, "text-white text-decoration-none"),
                                        children: "Register with us now"
                                    })]
                                }), (0, a.jsx)("p", {
                                    className: (0, w.Z)(G().or__text, "text-decoration-underline"),
                                    children: "OR"
                                }), (0, a.jsx)("a", {
                                    href: "https://ruconnect.in/",
                                    target: "_blank",
                                    className: (0, w.Z)(G().btn3, "text-white text-decoration-none"),
                                    children: "Register with us now"
                                })]
                            })]
                        }), (0, a.jsx)("img", {
                            width: "681px",
                            loading: "lazy",
                            style: {
                                transform: "translateX(".concat(s, ")")
                            },
                            className: G().img__partner_app,
                            src: (0, Z.Lr)("/b2c/advantages/ruconnect-available-on.webp"),
                            alt: "Ruconnect App - India\u2019s First B2B Loan Distribution Channel Partner App"
                        })]
                    })
                },
                M = function() {
                    return (0, a.jsxs)(d.Z, {
                        children: [(0, a.jsx)("p", {
                            className: (0, w.Z)(G()["benefits-title"], "mb-4"),
                            children: "Advantages of K3M Housing LLP"
                        }), (0, a.jsxs)("div", {
                            className: (0, w.Z)(G().advantages, "d-flex align-items-center gap-4 w-100"),
                            children: [(0, a.jsx)("div", {
                                className: (0, w.Z)(G().advantage_list, "d-grid flex-grow-1"),
                                children: [{
                                    title: "India\u2019s Leading Loans Distributor",
                                    img: "leaders.webp",
                                    href: "#leadingloandistributor"
                                }, {
                                    title: "Pan India Presence",
                                    img: "pan-network.webp",
                                    href: "/about-us"
                                }, {
                                    title: "25 Years Of Legacy",
                                    img: "yearly-growth.webp",
                                    href: "/about-us"
                                }, {
                                    title: "Be Your Own Boss",
                                    img: "boss.webp",
                                    href: "/grow-with-us"
                                }, {
                                    title: "Multiple Products",
                                    img: "products.webp",
                                    href: "#ourproducts"
                                }, {
                                    title: "Refer and Earn",
                                    img: "yearly-growth.webp",
                                    href: "/become-partner"
                                }, {
                                    title: "Training Programs",
                                    img: "programs.webp",
                                    href: "/knowledge-center/tutorials"
                                }, {
                                    title: "Easy Onboarding Process",
                                    img: "process.webp",
                                    href: "https://ruconnect.in/"
                                }, {
                                    title: "Check Free CIBIL Score",
                                    img: "cibil-score.webp",
                                    href: "/check-your-cibil-score"
                                }, {
                                    title: "EMI Calculator",
                                    img: "emi-calculator.webp",
                                    href: "/emi-calculator"
                                }].map((function(e, s) {
                                    return (0, a.jsxs)("div", {
                                        className: (0, w.Z)(G().card, "d-flex position-relative align-items-center gap-4"),
                                        children: [(0, a.jsx)("img", {
                                            src: (0, Z.Lr)("/b2c/advantages/" + e.img),
                                            alt: e.title,
                                            loading: "lazy"
                                        }), (0, a.jsx)("a", {
                                            href: e.href,
                                            target: e.href.includes("#") ? void 0 : "_blank",
                                            className: "mb-0 text-decoration-none",
                                            children: e.title
                                        })]
                                    }, s + "advantages_ru")
                                }))
                            }), (0, a.jsx)("img", {
                                width: "550px",
                                height: "530px",
                                alt: "Advantages of K3M Housing LLP",
                                className: (0, w.Z)(G().advantages__img, "w-100"),
                                src: (0, Z.Lr)("/b2c/overview/grow-with-K3M Housing LLP-team.webp"),
                                loading: "lazy"
                            })]
                        })]
                    })
                },
                K = n(97147),
                Q = n.n(K);

            function U(e) {
                var s = e.bills,
                    n = (0, o.useRouter)();
                return (0, a.jsx)("div", {
                    id: "ourproducts",
                    className: Q()["bills-payments-container"],
                    children: (0, a.jsxs)(d.Z, {
                        children: [(0, a.jsx)("h2", {
                            className: (0, w.Z)(Q()["bills-payments-title"], "mb-2"),
                            children: "Bills And Payments"
                        }), (0, a.jsx)("p", {
                            className: Q().types_desc,
                            children: "Effortless Bill Payments and Recharges, Designed to Meet Your Needs."
                        }), (0, a.jsx)(u.Z, {
                            children: s.map((function(e, s) {
                                return (0, a.jsx)(h.Z, {
                                    lg: 3,
                                    md: 4,
                                    sm: 6,
                                    xs: 12,
                                    children: (0, a.jsxs)("div", {
                                        className: Q()["bills-payments-box"],
                                        onClick: function() {
                                            return n.push(e.link)
                                        },
                                        children: [(0, a.jsx)("p", {
                                            className: Q().title,
                                            children: e.name
                                        }), (0, a.jsx)("p", {
                                            className: Q().desc,
                                            children: e.desc
                                        }), (0, a.jsx)("img", {
                                            width: "40px",
                                            height: "40px",
                                            className: Q()["loan-img"],
                                            src: e.image,
                                            alt: e.alt,
                                            loading: "lazy"
                                        }), (0, a.jsxs)("p", {
                                            className: Q().availability,
                                            children: ["Check Eligibility", (0, a.jsx)("span", {
                                                children: (0, a.jsx)("img", {
                                                    src: "/assets/icons/right-arrow.png",
                                                    alt: "right arrow",
                                                    loading: "lazy"
                                                })
                                            })]
                                        })]
                                    })
                                }, s)
                            }))
                        })]
                    })
                })
            }
            var V = t()((function() {
                    return n.e(8803).then(n.bind(n, 48803))
                }), {
                    loadableGenerated: {
                        webpack: function() {
                            return [48803]
                        }
                    },
                    ssr: !1
                }),
                X = !0,
                J = function(e) {
                    var s = e.banners,
                        n = (0, g.Z)({
                            withScroll: !0
                        }, 4).isDocReady,
                        i = [{
                            name: "Home Loan",
                            image: (0, Z.Lr)("/b2c/assets/home-loan.webp"),
                            desc: "Your Dream Home Awaits - Explore Our Range Of Home Loan Products.",
                            link: "home-loan",
                            alt: "home loan"
                        }, {
                            name: "Loan against Property",
                            image: (0, Z.Lr)("/b2c/assets/loan-against-property.webp"),
                            desc: "Unlock your property's value with tailored loan solutions..",
                            link: "loan-against-property",
                            alt: "loan against property"
                        }, {
                            name: "Personal Loan",
                            image: (0, Z.Lr)("/b2c/assets/personal-loan.webp"),
                            desc: "Achieve your dreams with our versatile personal loan options.",
                            link: "personal-loan",
                            alt: "personal loan"
                        }, {
                            name: "Business Loan",
                            image: (0, Z.Lr)("/b2c/assets/Business-loan.webp"),
                            desc: "Boost your business growth with our flexible financing options.",
                            link: "business-loan",
                            alt: "business loan"
                        }, {
                            name: "Education Loan",
                            image: (0, Z.Lr)("/b2c/assets/education-loan.webp"),
                            desc: "Invest in your child's future with our specialized education loans.",
                            link: "education-loan",
                            alt: "education loan"
                        }, {
                            name: "Car Loan",
                            image: (0, Z.Lr)("/b2c/assets/car-loan.webp"),
                            desc: "Drive your dream car with our quick and flexible car loans.",
                            link: "car-loan",
                            alt: "car loan"
                        }, {
                            name: "Gold Loan",
                            image: (0, Z.Lr)("/b2c/assets/gold-loan.webp"),
                            desc: "Meet your financial needs with gold loans from trusted banks.",
                            link: "gold-loan",
                            alt: "gold loan"
                        }, {
                            name: "Credit Cards",
                            image: (0, Z.Lr)("/b2c/assets/credit-card.webp"),
                            desc: "Upgrade your lifestyle with feature-packed, rewarding credit cards.",
                            link: "credit-card",
                            alt: "credit card"
                        }],
                        t = [{
                            name: "Life Insurance",
                            image: (0, Z.Lr)("/b2c/assets/life-insurance.webp"),
                            desc: "Protect Your Loved One's Future With Our Reliable Life Insurance Plans.",
                            link: "insurance/life-insurance",
                            alt: "life insurance"
                        }, {
                            name: "Health Insurance",
                            image: (0, Z.Lr)("/b2c/assets/health-insurance.webp"),
                            desc: "Ensuring Your Health Is In Good Hands - Explore Our Top-notch Insurance Solutions.",
                            link: "insurance/health-insurance",
                            alt: "health insurance"
                        }, {
                            name: "General Insurance",
                            image: (0, Z.Lr)("/b2c/assets/general-insurance.webp"),
                            desc: "Insurance Made Easy - Your Protection, Our Expertise.",
                            link: "insurance/general-insurance",
                            alt: "general insurance"
                        }],
                        r = [{
                            name: "Bill Payments",
                            image: (0, Z.Lr)("/b2c/bbps/bbps-payment-confirmation.webp"),
                            desc: "Simplify All Your Bill Payments with Bharat Bill Pay System (BBPS)!",
                            link: "bharat-payments",
                            alt: "life insurance"
                        }],
                        l = {
                            heading: "FAQs",
                            faqsData: [{
                                title: "Who can become a partner with K3M Housing LLP?",
                                desc: "Anyone from loan agents, ex-bankers, financial analysts, Insurance agents, mutual fund agents, chartered accountants, builders, or professionals from any other field can become a partner with K3M Housing LLP. If you\u2019re interested in offering a wide range of financial products and earning attractive commissions, you\u2019re welcome to join us."
                            }, {
                                title: "How to Become a DSA Partner With K3M Housing LLP?",
                                desc: (0, a.jsxs)(a.Fragment, {
                                    children: [(0, a.jsx)("p", {
                                        children: "To become a DSA Partner (Direct Selling Agent) with K3M Housing LLP, follow these simple steps:"
                                    }), ",", (0, a.jsx)("p", {
                                        children: "Step 1: Visit the K3M Housing LLP website and cpck on the \u2018Become a Partner\u2019 option."
                                    }), (0, a.jsx)("p", {
                                        children: "Step 2: Complete the registration form by filpng in your details and submitting it."
                                    }), (0, a.jsx)("p", {
                                        children: "Step 3: A member of the K3M Housing LLP support team will contact you to guide you through the next steps and arrange a meeting."
                                    }), (0, a.jsx)("p", {
                                        children: "Step 4: During the meeting, a K3M Housing LLP Manager will explain the lead generation process and provide you with all the necessary information."
                                    }), (0, a.jsx)("p", {
                                        children: "Step 5: Once you understand and are comfortable with the processes, an agreement will be signed between you and K3M Housing LLP."
                                    }), (0, a.jsx)("p", {
                                        children: "After the agreement is signed and stamped, you will officially become a K3M Housing LLP DSA Agent."
                                    }), (0, a.jsx)("p", {
                                        children: "Connect with us today to start your journey as a DSA Agent and unlock the potential to earn attractive commissions while helping customers secure the best financial products!"
                                    })]
                                })
                            }, {
                                title: "What are the Eligibility Criteria for Becoming a DSA Agent with K3M Housing LLP?",
                                desc: (0, a.jsxs)(a.Fragment, {
                                    children: [(0, a.jsxs)("p", {
                                        children: ["To become a K3M Housing LLP DSA, you need to meet the following ", (0, a.jsx)("b", {
                                            children: "Eligibility Criteria:"
                                        })]
                                    }), (0, a.jsxs)("ul", {
                                        children: [(0, a.jsx)("li", {
                                            children: "Age Requirement: You must be at least 25 years old."
                                        }), (0, a.jsx)("li", {
                                            children: "Nationality: You must be a Resident Citizen of India."
                                        }), (0, a.jsx)("li", {
                                            children: "Educational Qualifications: No specific educational qualification is required."
                                        }), (0, a.jsx)("li", {
                                            children: "Professional Qualifications: Whether you are a working professional or a business owner, you can register as a K3M Housing LLP loan agent. Ideal candidates include loan agents, ex-bankers, financial analysts, mutual fund agents, chartered accountants, and builders."
                                        })]
                                    }), (0, a.jsx)("p", {
                                        children: "K3M Housing LLP welcomes individuals from diverse professional backgrounds who are looking to expand their income opportunities."
                                    })]
                                })
                            }, {
                                title: "What documents are required for DSA Registration with K3M Housing LLP?",
                                desc: (0, a.jsxs)(a.Fragment, {
                                    children: [(0, a.jsx)("p", {
                                        children: "At K3M Housing LLP, our DSA registration process is designed to be straightforward and hassle-free. The required documents for KYC verification include:"
                                    }), (0, a.jsxs)("ul", {
                                        children: [(0, a.jsx)("li", {
                                            children: "Aadhaar Card"
                                        }), (0, a.jsx)("li", {
                                            children: "PAN Card"
                                        }), (0, a.jsx)("li", {
                                            children: "Two passport-size photographs"
                                        }), (0, a.jsx)("li", {
                                            children: "GST Registration (for companies, if applicable)"
                                        }), (0, a.jsx)("li", {
                                            children: "Proof of Employment: Salary slips if employed; account statements and address proof if running a business; or invoices and financial statements if self-employed."
                                        }), (0, a.jsx)("li", {
                                            children: "Bank Account Details: Your bank statement for the last 3 months."
                                        })]
                                    }), (0, a.jsx)("p", {
                                        children: "These documents help us ensure a seamless registration process, getting you started on your journey as a K3M Housing LLP DSA in no time."
                                    })]
                                })
                            }, {
                                title: "What support do K3M Housing LLP provide to its DSAs?",
                                desc: (0, a.jsxs)(a.Fragment, {
                                    children: [(0, a.jsx)("p", {
                                        children: "K3M Housing LLP is committed to the success of its DSAs by offering extensive support in the following areas:"
                                    }), (0, a.jsxs)("ul", {
                                        children: [(0, a.jsx)("li", {
                                            children: "Comprehensive Training: We provide detailed training sessions to help you understand our products, processes, and the market."
                                        }), (0, a.jsx)("li", {
                                            children: "Marketing Support: You can get leads, marketing materials, and strategies from K3M Housing LLP to promote your services effectively."
                                        }), (0, a.jsx)("li", {
                                            children: "Timely Payouts: We ensure that you receive your commissions on time, providing a smooth and transparent payout process."
                                        }), (0, a.jsx)("li", {
                                            children: "By partnering with K3M Housing LLP, you get all the support you need to grow and succeed as a DSA."
                                        })]
                                    })]
                                })
                            }]
                        };
                    return (0, a.jsxs)("div", {
                        children: [(0, a.jsx)(z.Z, {
                            url: " ",
                            children: (0, a.jsx)("script", {
                                defer: !0,
                                src: "/scripts/odator.js"
                            })
                        }), (0, a.jsx)(f, {
                            banners: s
                        }), n && (0, a.jsx)(V, {}), (0, a.jsx)(v, {
                            loanTypes: i
                        }), (0, a.jsx)(P, {
                            insuranceTypes: t
                        }), (0, a.jsx)(U, {
                            bills: r
                        }), (0, a.jsx)(D, {}), (0, a.jsx)(M, {}), (0, a.jsx)(Y, {}), (0, a.jsx)(L, {}), (0, a.jsx)(q, {}), (0, a.jsx)(F, {
                            faqs: l
                        }), (0, a.jsx)(R, {})]
                    })
                }
        },
        97147: function(e) {
            e.exports = {
                "bills-payments-container": "BillsAndPayments_bills-payments-container__odyNu",
                "bills-payments-title": "BillsAndPayments_bills-payments-title__G3WQM",
                types_desc: "BillsAndPayments_types_desc__eKK07",
                "bills-payments-box": "BillsAndPayments_bills-payments-box__j1XkZ",
                title: "BillsAndPayments_title__fA_lP",
                desc: "BillsAndPayments_desc__vEcmz",
                availability: "BillsAndPayments_availability__efvKO",
                "loan-img": "BillsAndPayments_loan-img__l3bjf"
            }
        },
        10710: function(e) {
            e.exports = {
                BannerContainer: "hkcta_BannerContainer__np29Y",
                banner: "hkcta_banner___VhhB",
                sliders: "hkcta_sliders__87Skd",
                slider: "hkcta_slider__jCnm3",
                secondslider: "hkcta_secondslider__DMdhI",
                slidercontent: "hkcta_slidercontent__zpElu",
                content: "hkcta_content__8FxJb",
                title: "hkcta_title__qJf6h",
                "text-btn": "hkcta_text-btn__GbeOv",
                text: "hkcta_text__GAHD6",
                mainbutton: "hkcta_mainbutton__vvb4C"
            }
        },
        53436: function(e) {
            e.exports = {
                partner__with: "HomePage_partner__with__FU2_r",
                advantages: "HomePage_advantages___kMSg",
                partner__app: "HomePage_partner__app__hGggA",
                img__partner_app: "HomePage_img__partner_app__lEwTY",
                partner__title: "HomePage_partner__title__bXD0Y",
                advantages__img: "HomePage_advantages__img__VwqtO",
                image__mobile: "HomePage_image__mobile__ZqSAC",
                card: "HomePage_card__zo_8R",
                advantage_list: "HomePage_advantage_list__mbtW0",
                program: "HomePage_program__trLgb",
                image__desk: "HomePage_image__desk__25LGK",
                program__points: "HomePage_program__points__j75NS",
                "benefits-title": "HomePage_benefits-title__WeiKD",
                downloads_action: "HomePage_downloads_action__Ih3ra",
                or__text: "HomePage_or__text__kYDZ1",
                qr__img: "HomePage_qr__img__mr_Td",
                btn1: "HomePage_btn1__WwxvV",
                btn2: "HomePage_btn2__lcWQq",
                btn3: "HomePage_btn3__3rbG4",
                btn4: "HomePage_btn4__qR7Fg"
            }
        },
        29918: function(e) {
            e.exports = {
                "insurance-types-container": "insurance-types_insurance-types-container__aKRuz",
                "insurance-types-title": "insurance-types_insurance-types-title__ccYUs",
                types_desc: "insurance-types_types_desc__Nu4J8",
                "insurance-type-box": "insurance-types_insurance-type-box__wOBsz",
                title: "insurance-types_title__RQAvB",
                desc: "insurance-types_desc__gDEAz",
                availability: "insurance-types_availability__lDWCk",
                "insurance-img": "insurance-types_insurance-img__y_wWi"
            }
        },
        34159: function(e) {
            e.exports = {
                "loan-types-container": "loan-types_loan-types-container__rZl10",
                "loan-types-title": "loan-types_loan-types-title__uoUbg",
                types_desc: "loan-types_types_desc__K8Tbd",
                "loan-type-box": "loan-types_loan-type-box__uwczj",
                title: "loan-types_title__mciu5",
                desc: "loan-types_desc__fDdIc",
                availability: "loan-types_availability__QCcCq",
                "loan-img": "loan-types_loan-img__V1FLX"
            }
        },
        16068: function(e) {
            e.exports = {
                achivement: "Process-Design_achivement__Ef1oI",
                achivement__title: "Process-Design_achivement__title__1S4Xh",
                "achivement__img-box": "Process-Design_achivement__img-box__LbDk4",
                achivements: "Process-Design_achivements__bfKuv",
                countup: "Process-Design_countup__Fkcqd",
                layout: "Process-Design_layout__6rCG8",
                master_title: "Process-Design_master_title__Wnkxe",
                master__footer: "Process-Design_master__footer__mFsgI"
            }
        },
        21608: function(e, s, n) {
            "use strict";
            var a = n(93967),
                i = n.n(a),
                t = n(67294),
                r = n(76792),
                l = n(85893);
            const o = t.forwardRef((({
                bsPrefix: e,
                className: s,
                as: n = "div",
                ...a
            }, t) => {
                const o = (0, r.vE)(e, "row"),
                    c = (0, r.pi)(),
                    d = (0, r.zG)(),
                    m = `${o}-cols`,
                    u = [];
                return c.forEach((e => {
                    const s = a[e];
                    let n;
                    delete a[e], null != s && "object" === typeof s ? ({
                        cols: n
                    } = s) : n = s;
                    const i = e !== d ? `-${e}` : "";
                    null != n && u.push(`${m}${i}-${n}`)
                })), (0, l.jsx)(n, {
                    ref: t,
                    ...a,
                    className: i()(s, o, ...u)
                })
            }));
            o.displayName = "Row", s.Z = o
        }
    },
    function(e) {
        e.O(0, [962, 9190, 8133, 9774, 2888, 179], (function() {
            return s = 75557, e(e.s = s);
            var s
        }));
        var s = e.O();
        _N_E = s
    }
]);