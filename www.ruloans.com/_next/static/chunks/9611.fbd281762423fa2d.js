"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9611], {
        9611: function(e, n, t) {
            t.r(n);
            var r = t(85893),
                a = t(36968),
                s = t(11163),
                i = t(67294);
            n.default = function() {
                var e = (0, i.useState)(!1),
                    n = e[0],
                    t = e[1],
                    o = (0, s.useRouter)();
                return (0, i.useEffect)((function() {
                    o.events.on("routeChangeStart", (function() {
                        return t(!0)
                    })), o.events.on("routeChangeError", (function() {
                        return t(!1)
                    })), o.events.on("routeChangeComplete", (function() {
                        return t(!1)
                    }))
                }), []), n && (0, r.jsx)("div", {
                    style: {
                        zIndex: "99999",
                        background: "rgba(0,0,0,0.4)"
                    },
                    className: "position-fixed top-0 left-0 right-0 bottom-0 d-flex align-items-center justify-content-center w-100 h-100",
                    children: (0, r.jsx)(a.Z, {
                        animation: "border",
                        variant: "primary"
                    })
                })
            }
        },
        36968: function(e, n, t) {
            var r = t(93967),
                a = t.n(r),
                s = t(67294),
                i = t(76792),
                o = t(85893);
            const u = s.forwardRef((({
                bsPrefix: e,
                variant: n,
                animation: t = "border",
                size: r,
                as: s = "div",
                className: u,
                ...c
            }, f) => {
                const l = `${e=(0,i.vE)(e,"spinner")}-${t}`;
                return (0, o.jsx)(s, {
                    ref: f,
                    ...c,
                    className: a()(u, l, r && `${l}-${r}`, n && `text-${n}`)
                })
            }));
            u.displayName = "Spinner", n.Z = u
        }
    }
]);