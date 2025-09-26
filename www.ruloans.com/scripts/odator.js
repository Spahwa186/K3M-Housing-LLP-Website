(function() {
    var t, n, i, e, r, o, s, a, u, l, d, h, p, c, f, m, g, $, v, y, b, M, _, T, E, w, x, S, L, D, F, A, C = [].slice;
    e = '<span class="odmt-dg"><span class="odmt-dg-spacer">8</span><span class="odmt-dg-inner">' + (c = '<span class="odmt-ribbon"><span class="odmt-ribbon-inner">' + (g = '<span class="odmt-value"></span>') + "</span></span>") + "</span></span>", s = '<span class="odmt-formatting-mark"></span>', i = "(,ddd).dd", a = /^\(?([^)]*)\)?(?:(.)(d+))?$/, o = 2e3, t = 20, l = 2, r = .5, d = 1e3 / (u = 30), n = 1e3 / t, f = "transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd", m = null != (E = document.createElement("div").style).transition || null != E.webkitTransition || null != E.mozTransition || null != E.oTransition, _ = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame, h = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver, v = function(t) {
        var n;
        return (n = document.createElement("div")).innerHTML = t, n.children[0]
    }, M = function(t, n) {
        return t.className = t.className.replace(RegExp("(^| )" + n.split(" ").join("|") + "( |$)", "gi"), " ")
    }, $ = function(t, n) {
        return M(t, n), t.className += " " + n
    }, w = function(t, n) {
        var i;
        if (null != document.createEvent) return (i = document.createEvent("HTMLEvents")).initEvent(n, !0, !0), t.dispatchEvent(i)
    }, b = function() {
        var t, n;
        return null != (t = null != (n = window.performance) && "function" == typeof n.now ? n.now() : void 0) ? t : +new Date
    }, T = function(t, n) {
        return (null == n && (n = 0), n) ? (t *= Math.pow(10, n), t += .5, (t = Math.floor(t)) / Math.pow(10, n)) : Math.round(t)
    }, x = function(t) {
        return t < 0 ? Math.ceil(t) : Math.floor(t)
    }, y = function(t) {
        return t - T(t)
    }, L = !1, (S = function() {
        var t, n, i, e, r;
        if (!L && null != window.jQuery) {
            for (n = 0, L = !0, r = [], i = (e = ["html", "text"]).length; n < i; n++) t = e[n], r.push(function(t) {
                var n;
                return n = window.jQuery.fn[t], window.jQuery.fn[t] = function(t) {
                    var i;
                    return null == t || (null != (i = this[0]) ? i.odometer : void 0) == null ? n.apply(this, arguments) : this[0].odometer.update(t)
                }
            }(t));
            return r
        }
    })(), setTimeout(S, 0), (p = function() {
        function t(n) {
            var i, e, r, s, a, u, h, p, c, f, m = this;
            if (this.options = n, this.el = this.options.el, null != this.el.odometer) return this.el.odometer;
            for (e in this.el.odometer = this, p = t.options) s = p[e], null == this.options[e] && (this.options[e] = s);
            null == (a = this.options).duration && (a.duration = o), this.MAX_VALUES = this.options.duration / d / l | 0, this.resetFormat(), this.value = this.cleanValue(null != (c = this.options.value) ? c : ""), this.renderInside(), this.render();
            try {
                for (u = 0, h = (f = ["innerHTML", "innerText", "textContent"]).length; u < h; u++) r = f[u], null != this.el[r] && function(t) {
                    Object.defineProperty(m.el, t, {
                        get: function() {
                            var n;
                            return "innerHTML" === t ? m.inside.outerHTML : null != (n = m.inside.innerText) ? n : m.inside.textContent
                        },
                        set: function(t) {
                            return m.update(t)
                        }
                    })
                }(r)
            } catch (g) {
                i = g, this.watchForMutations()
            }
        }
        return t.prototype.renderInside = function() {
            return this.inside = document.createElement("div"), this.inside.className = "odmt-inside", this.el.innerHTML = "", this.el.appendChild(this.inside)
        }, t.prototype.watchForMutations = function() {
            var t, n = this;
            if (null != h) try {
                return null == this.observer && (this.observer = new h(function(t) {
                    var i;
                    return i = n.el.innerText, n.renderInside(), n.render(n.value), n.update(i)
                })), this.watchMutations = !0, this.startWatchingMutations()
            } catch (i) {
                t = i
            }
        }, t.prototype.startWatchingMutations = function() {
            if (this.watchMutations) return this.observer.observe(this.el, {
                childList: !0
            })
        }, t.prototype.stopWatchingMutations = function() {
            var t;
            return null != (t = this.observer) ? t.disconnect() : void 0
        }, t.prototype.cleanValue = function(t) {
            var n;
            return "string" == typeof t && (t = parseFloat(t = (t = (t = t.replace(null != (n = this.format.radix) ? n : ".", "<radix>")).replace(/[.,]/g, "")).replace("<radix>", "."), 10) || 0), T(t, this.format.precision)
        }, t.prototype.bindTransitionEnd = function() {
            var t, n, i, e, r, o, s = this;
            if (!this.transitionEndBound) {
                for (i = 0, this.transitionEndBound = !0, n = !1, r = f.split(" "), o = [], e = r.length; i < e; i++) t = r[i], o.push(this.el.addEventListener(t, function() {
                    return !!n || (n = !0, setTimeout(function() {
                        return s.render(), n = !1, window.odometerdone(), w(s.el, "odometerdone")
                    }, 0), !0)
                }, !1));
                return o
            }
        }, t.prototype.resetFormat = function() {
            var t, n, e, r, o, s, u, l;
            if ((t = null != (u = this.options.format) ? u : i) || (t = "d"), !(e = a.exec(t))) throw Error("Odometer: Unparsable digit format");
            return s = (l = e.slice(1, 4))[0], o = l[1], r = (null != (n = l[2]) ? n.length : void 0) || 0, this.format = {
                repeating: s,
                radix: o,
                precision: r
            }
        }, t.prototype.render = function(t) {
            var n, i, e, r, o, s, a;
            for (null == t && (t = this.value), this.stopWatchingMutations(), this.resetFormat(), this.inside.innerHTML = "", o = this.options.theme, n = this.el.className.split(" "), r = [], s = 0, a = n.length; s < a; s++) {
                if ((i = n[s]).length) {
                    if (e = /^odmt-theme-(.+)$/.exec(i)) {
                        o = e[1];
                        continue
                    }!/^odometer(-|$)/.test(i) && r.push(i)
                }
            }
            return r.push("odometer"), m || r.push("odmt-no-transitions"), o ? r.push("odmt-theme-" + o) : r.push("odmt-ato-them"), this.el.className = r.join(" "), this.ribbons = {}, this.formatDigits(t), this.startWatchingMutations()
        }, t.prototype.formatDigits = function(t) {
            var n, i, e, r, o, s, a, u, l, d;
            if (this.digits = [], this.options.formatFunction)
                for (o = 0, a = (l = (e = this.options.formatFunction(t)).split("").reverse()).length; o < a; o++)(i = l[o]).match(/0-9/) ? ((n = this.renderDigit()).querySelector(".odmt-value").innerHTML = i, this.digits.push(n), this.insertDigit(n)) : this.addSpacer(i);
            else
                for (s = 0, r = !this.format.precision || !y(t), u = (d = t.toString().split("").reverse()).length; s < u; s++) "." === (n = d[s]) && (r = !0), this.addDigit(n, r)
        }, t.prototype.update = function(t) {
            var n, i = this;
            if (n = (t = this.cleanValue(t)) - this.value) return M(this.el, "odmt-animating-up odmt-animating-down odmt-animating"), n > 0 ? $(this.el, "odmt-animating-up") : $(this.el, "odmt-animating-down"), this.stopWatchingMutations(), this.animate(t), this.startWatchingMutations(), setTimeout(function() {
                return i.el.offsetHeight, $(i.el, "odmt-animating")
            }, 0), this.value = t
        }, t.prototype.renderDigit = function() {
            return v(e)
        }, t.prototype.insertDigit = function(t, n) {
            return null != n ? this.inside.insertBefore(t, n) : this.inside.children.length ? this.inside.insertBefore(t, this.inside.children[0]) : this.inside.appendChild(t)
        }, t.prototype.addSpacer = function(t, n, i) {
            var e;
            return (e = v(s)).innerHTML = t, i && $(e, i), this.insertDigit(e, n)
        }, t.prototype.addDigit = function(t, n) {
            var i, e, r, o;
            if (null == n && (n = !0), "-" === t) return this.addSpacer(t, null, "odmt-negation-mark");
            if ("." === t) return this.addSpacer(null != (o = this.format.radix) ? o : ".", null, "odmt-radix-mark");
            if (n)
                for (r = !1;;) {
                    if (!this.format.repeating.length) {
                        if (r) throw Error("Bad odometer format without digits");
                        this.resetFormat(), r = !0
                    }
                    if (i = this.format.repeating[this.format.repeating.length - 1], this.format.repeating = this.format.repeating.substring(0, this.format.repeating.length - 1), "d" === i) break;
                    this.addSpacer(i)
                }
            return (e = this.renderDigit()).querySelector(".odmt-value").innerHTML = t, this.digits.push(e), this.insertDigit(e)
        }, t.prototype.animate = function(t) {
            return m && "count" !== this.options.animation ? this.animateSlide(t) : this.animateCount(t)
        }, t.prototype.animateCount = function(t) {
            var i, e, r, o, s, a = this;
            if (e = +t - this.value) return o = r = b(), i = this.value, (s = function() {
                var u, l, d;
                if (b() - o > a.options.duration) {
                    a.value = t, a.render(), window.odometerdone(), w(a.el, "odometerdone");
                    return
                }
                return ((u = b() - r) > n && (r = b(), i += l = e * (d = u / a.options.duration), a.render(Math.round(i))), null != _) ? _(s) : setTimeout(s, n)
            })()
        }, t.prototype.getDigitCount = function() {
            var t, n, i, e, r, o;
            for (e = 1 <= arguments.length ? C.call(arguments, 0) : [], t = r = 0, o = e.length; r < o; t = ++r) i = e[t], e[t] = Math.abs(i);
            return Math.ceil(Math.log((n = Math.max.apply(Math, e)) + 1) / Math.log(10))
        }, t.prototype.getFractionalDigitCount = function() {
            var t, n, i, e, r, o, s;
            for (r = 1 <= arguments.length ? C.call(arguments, 0) : [], n = /^\-?\d*\.(\d*?)0*$/, t = o = 0, s = r.length; o < s; t = ++o) e = r[t], r[t] = e.toString(), null == (i = n.exec(r[t])) ? r[t] = 0 : r[t] = i[1].length;
            return Math.max.apply(Math, r)
        }, t.prototype.resetDigits = function() {
            return this.digits = [], this.ribbons = [], this.inside.innerHTML = "", this.resetFormat()
        }, t.prototype.animateSlide = function(t) {
            var n, i, e, o, s, a, u, l, d, h, p, c, f, m, g, v, y, b, M, _, T, E, w, S, L, D, F;
            if (v = this.value, (l = this.getFractionalDigitCount(v, t)) && (t *= Math.pow(10, l), v *= Math.pow(10, l)), e = t - v) {
                for (this.bindTransitionEnd(), o = this.getDigitCount(v, t), s = [], n = 0, p = M = 0; 0 <= o ? M < o : M > o; p = 0 <= o ? ++M : --M) {
                    if (y = x(v / Math.pow(10, o - p - 1)), Math.abs(a = (u = x(t / Math.pow(10, o - p - 1))) - y) > this.MAX_VALUES) {
                        for (h = [], c = a / (this.MAX_VALUES + this.MAX_VALUES * n * r), i = y; a > 0 && i < u || a < 0 && i > u;) h.push(Math.round(i)), i += c;
                        h[h.length - 1] !== u && h.push(u), n++
                    } else h = (function() {
                        F = [];
                        for (var t = y; y <= u ? t <= u : t >= u; y <= u ? t++ : t--) F.push(t);
                        return F
                    }).apply(this);
                    for (p = _ = 0, E = h.length; _ < E; p = ++_) d = h[p], h[p] = Math.abs(d % 10);
                    s.push(h)
                }
                for (this.resetDigits(), D = s.reverse(), p = T = 0, w = D.length; T < w; p = ++T)
                    for (h = D[p], this.digits[p] || this.addDigit(" ", p >= l), null == (b = this.ribbons)[p] && (b[p] = this.digits[p].querySelector(".odmt-ribbon-inner")), this.ribbons[p].innerHTML = "", e < 0 && (h = h.reverse()), f = L = 0, S = h.length; L < S; f = ++L) d = h[f], (g = document.createElement("div")).className = "odmt-value", g.innerHTML = d, this.ribbons[p].appendChild(g), f === h.length - 1 && $(g, "odmt-last-value"), 0 === f && $(g, "odmt-first-value");
                if (y < 0 && this.addDigit("-"), null != (m = this.inside.querySelector(".odmt-radix-mark")) && m.parent.removeChild(m), l) return this.addSpacer(this.format.radix, this.digits[l - 1], "odmt-radix-mark")
            }
        }, t
    }()).options = null != (F = window.odometerOptions) ? F : {}, setTimeout(function() {
        var t, n, i, e, r;
        if (window.odometerOptions) {
            for (t in e = window.odometerOptions, r = [], e) n = e[t], r.push(null != (i = p.options)[t] ? (i = p.options)[t] : i[t] = n);
            return r
        }
    }, 0), p.init = function() {
        var t, n, i, e, r, o;
        if (null != document.querySelectorAll) {
            for (i = 0, n = document.querySelectorAll(p.options.selector || ".odometer"), o = [], e = n.length; i < e; i++) t = n[i], o.push(t.odometer = new p({
                el: t,
                value: null != (r = t.innerText) ? r : t.textContent
            }));
            return o
        }
    }, (null != (A = document.documentElement) ? A.doScroll : void 0) != null && null != document.createEventObject ? (D = document.onreadystatechange, document.onreadystatechange = function() {
        return "complete" === document.readyState && !1 !== p.options.auto && p.init(), null != D ? D.apply(this, arguments) : void 0
    }) : document.addEventListener("DOMContentLoaded", function() {
        if (!1 !== p.options.auto) return p.init()
    }, !1), "function" == typeof define && define.amd ? define([], function() {
        return p
    }) : "undefined" != typeof exports && null !== exports ? module.exports = p : window.Odometer = p
}).call(this);