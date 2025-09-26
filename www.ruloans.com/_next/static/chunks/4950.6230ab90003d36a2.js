"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4950], {
        24950: function(n, o, i) {
            i.r(o), i.d(o, {
                default: function() {
                    return e
                }
            });
            var l = i(85893),
                t = i(67294),
                s = i(86716);

            function e() {
                var n = (0, t.useRef)();
                return (0, t.useEffect)((function() {
                    var o = function() {
                        var o, i, l, t, s = Math.round(window.scrollY),
                            e = n.current;
                        s > 200 ? (null === e || void 0 === e || null === (o = e.classList) || void 0 === o ? void 0 : o.contains("d-none")) && (null === e || void 0 === e || null === (i = e.classList) || void 0 === i || i.remove("d-none")) : (null === e || void 0 === e || null === (l = e.classList) || void 0 === l ? void 0 : l.contains("d-none")) || null === e || void 0 === e || null === (t = e.classList) || void 0 === t || t.add("d-none")
                    };
                    window.addEventListener("scroll", o), o()
                }), [n.current]), (0, l.jsx)("img", {
                    ref: n,
                    alt: "scroll to top",
                    src: (0, s.NW)("/images/Scroll_to_top_icon.png"),
                    width: "34px",
                    loading: "lazy",
                    className: "position-fixed d-none cursor-pointer",
                    style: {
                        bottom: "95px",
                        right: "20px",
                        boxShadow: "0px 0px 30px 0px rgba(33, 96, 154, 0.6)",
                        borderRadius: "50%",
                        zIndex: "999"
                    },
                    onClick: function() {
                        return window.scrollTo({
                            top: 0,
                            behavior: "smooth"
                        })
                    }
                })
            }
        }
    }
]);