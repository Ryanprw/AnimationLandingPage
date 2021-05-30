var _gsScope, _gsScope, _gsScope;
!function(t, e) {
    "use strict";
    var i = {}
      , r = t.document
      , n = t.GreenSockGlobals = t.GreenSockGlobals || t
      , s = n[e];
    if (s)
        return "undefined" != typeof module && module.exports && (module.exports = s),
        s;
    var a, o, l, h, u, f = function(t) {
        var e, i = t.split("."), r = n;
        for (e = 0; e < i.length; e++)
            r[i[e]] = r = r[i[e]] || {};
        return r
    }, p = f("com.greensock"), _ = 1e-8, c = function(t) {
        var e, i = [], r = t.length;
        for (e = 0; e !== r; i.push(t[e++]))
            ;
        return i
    }, d = function() {}, m = function() {
        var t = Object.prototype.toString
          , e = t.call([]);
        return function(i) {
            return null != i && (i instanceof Array || "object" == typeof i && !!i.push && t.call(i) === e)
        }
    }(), g = {}, v = function(r, s, a, o) {
        this.sc = g[r] ? g[r].sc : [],
        g[r] = this,
        this.gsClass = null,
        this.func = a;
        var l = [];
        this.check = function(h) {
            for (var u, p, _, c, d = s.length, m = d; --d > -1; )
                (u = g[s[d]] || new v(s[d],[])).gsClass ? (l[d] = u.gsClass,
                m--) : h && u.sc.push(this);
            if (0 === m && a) {
                if (_ = (p = ("com.greensock." + r).split(".")).pop(),
                c = f(p.join("."))[_] = this.gsClass = a.apply(a, l),
                o)
                    if (n[_] = i[_] = c,
                    "undefined" != typeof module && module.exports)
                        if (r === e)
                            for (d in module.exports = i[e] = c,
                            i)
                                c[d] = i[d];
                        else
                            i[e] && (i[e][_] = c);
                    else
                        "function" == typeof define && define.amd && define((t.GreenSockAMDPath ? t.GreenSockAMDPath + "/" : "") + r.split(".").pop(), [], function() {
                            return c
                        });
                for (d = 0; d < this.sc.length; d++)
                    this.sc[d].check()
            }
        }
        ,
        this.check(!0)
    }, y = t._gsDefine = function(t, e, i, r) {
        return new v(t,e,i,r)
    }
    , x = p._class = function(t, e, i) {
        return e = e || function() {}
        ,
        y(t, [], function() {
            return e
        }, i),
        e
    }
    ;
    y.globals = n;
    var T = [0, 0, 1, 1]
      , w = x("easing.Ease", function(t, e, i, r) {
        this._func = t,
        this._type = i || 0,
        this._power = r || 0,
        this._params = e ? T.concat(e) : T
    }, !0)
      , b = w.map = {}
      , P = w.register = function(t, e, i, r) {
        for (var n, s, a, o, l = e.split(","), h = l.length, u = (i || "easeIn,easeOut,easeInOut").split(","); --h > -1; )
            for (s = l[h],
            n = r ? x("easing." + s, null, !0) : p.easing[s] || {},
            a = u.length; --a > -1; )
                o = u[a],
                b[s + "." + o] = b[o + s] = n[o] = t.getRatio ? t : t[o] || new t
    }
    ;
    for ((l = w.prototype)._calcEnd = !1,
    l.getRatio = function(t) {
        if (this._func)
            return this._params[0] = t,
            this._func.apply(null, this._params);
        var e = this._type
          , i = this._power
          , r = 1 === e ? 1 - t : 2 === e ? t : .5 > t ? 2 * t : 2 * (1 - t);
        return 1 === i ? r *= r : 2 === i ? r *= r * r : 3 === i ? r *= r * r * r : 4 === i && (r *= r * r * r * r),
        1 === e ? 1 - r : 2 === e ? r : .5 > t ? r / 2 : 1 - r / 2
    }
    ,
    o = (a = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"]).length; --o > -1; )
        l = a[o] + ",Power" + o,
        P(new w(null,null,1,o), l, "easeOut", !0),
        P(new w(null,null,2,o), l, "easeIn" + (0 === o ? ",easeNone" : "")),
        P(new w(null,null,3,o), l, "easeInOut");
    b.linear = p.easing.Linear.easeIn,
    b.swing = p.easing.Quad.easeInOut;
    var O = x("events.EventDispatcher", function(t) {
        this._listeners = {},
        this._eventTarget = t || this
    });
    (l = O.prototype).addEventListener = function(t, e, i, r, n) {
        n = n || 0;
        var s, a, o = this._listeners[t], l = 0;
        for (this !== h || u || h.wake(),
        null == o && (this._listeners[t] = o = []),
        a = o.length; --a > -1; )
            (s = o[a]).c === e && s.s === i ? o.splice(a, 1) : 0 === l && s.pr < n && (l = a + 1);
        o.splice(l, 0, {
            c: e,
            s: i,
            up: r,
            pr: n
        })
    }
    ,
    l.removeEventListener = function(t, e) {
        var i, r = this._listeners[t];
        if (r)
            for (i = r.length; --i > -1; )
                if (r[i].c === e)
                    return void r.splice(i, 1)
    }
    ,
    l.dispatchEvent = function(t) {
        var e, i, r, n = this._listeners[t];
        if (n)
            for ((e = n.length) > 1 && (n = n.slice(0)),
            i = this._eventTarget; --e > -1; )
                (r = n[e]) && (r.up ? r.c.call(r.s || i, {
                    type: t,
                    target: i
                }) : r.c.call(r.s || i))
    }
    ;
    var S = t.requestAnimationFrame
      , k = t.cancelAnimationFrame
      , C = Date.now || function() {
        return (new Date).getTime()
    }
      , A = C();
    for (o = (a = ["ms", "moz", "webkit", "o"]).length; --o > -1 && !S; )
        S = t[a[o] + "RequestAnimationFrame"],
        k = t[a[o] + "CancelAnimationFrame"] || t[a[o] + "CancelRequestAnimationFrame"];
    x("Ticker", function(t, e) {
        var i, n, s, a, o, l = this, f = C(), p = !(!1 === e || !S) && "auto", _ = 500, c = 33, m = "tick", g = function(t) {
            var e, r, h = C() - A;
            h > _ && (f += h - c),
            A += h,
            l.time = (A - f) / 1e3,
            e = l.time - o,
            (!i || e > 0 || !0 === t) && (l.frame++,
            o += e + (e >= a ? .004 : a - e),
            r = !0),
            !0 !== t && (s = n(g)),
            r && l.dispatchEvent(m)
        };
        O.call(l),
        l.time = l.frame = 0,
        l.tick = function() {
            g(!0)
        }
        ,
        l.lagSmoothing = function(t, e) {
            return arguments.length ? (_ = t || 1e8,
            void (c = Math.min(e, _, 0))) : 1e8 > _
        }
        ,
        l.sleep = function() {
            null != s && (p && k ? k(s) : clearTimeout(s),
            n = d,
            s = null,
            l === h && (u = !1))
        }
        ,
        l.wake = function(t) {
            null !== s ? l.sleep() : t ? f += -A + (A = C()) : l.frame > 10 && (A = C() - _ + 5),
            n = 0 === i ? d : p && S ? S : function(t) {
                return setTimeout(t, 1e3 * (o - l.time) + 1 | 0)
            }
            ,
            l === h && (u = !0),
            g(2)
        }
        ,
        l.fps = function(t) {
            return arguments.length ? (a = 1 / ((i = t) || 60),
            o = this.time + a,
            void l.wake()) : i
        }
        ,
        l.useRAF = function(t) {
            return arguments.length ? (l.sleep(),
            p = t,
            void l.fps(i)) : p
        }
        ,
        l.fps(t),
        setTimeout(function() {
            "auto" === p && l.frame < 5 && "hidden" !== (r || {}).visibilityState && l.useRAF(!1)
        }, 1500)
    }),
    (l = p.Ticker.prototype = new p.events.EventDispatcher).constructor = p.Ticker;
    var M = x("core.Animation", function(t, e) {
        if (this.vars = e = e || {},
        this._duration = this._totalDuration = t || 0,
        this._delay = Number(e.delay) || 0,
        this._timeScale = 1,
        this._active = !!e.immediateRender,
        this.data = e.data,
        this._reversed = !!e.reversed,
        $) {
            u || h.wake();
            var i = this.vars.useFrames ? H : $;
            i.add(this, i._time),
            this.vars.paused && this.paused(!0)
        }
    });
    h = M.ticker = new p.Ticker,
    (l = M.prototype)._dirty = l._gc = l._initted = l._paused = !1,
    l._totalTime = l._time = 0,
    l._rawPrevTime = -1,
    l._next = l._last = l._onUpdate = l._timeline = l.timeline = null,
    l._paused = !1;
    var R = function() {
        u && C() - A > 2e3 && ("hidden" !== (r || {}).visibilityState || !h.lagSmoothing()) && h.wake();
        var t = setTimeout(R, 2e3);
        t.unref && t.unref()
    };
    R(),
    l.play = function(t, e) {
        return null != t && this.seek(t, e),
        this.reversed(!1).paused(!1)
    }
    ,
    l.pause = function(t, e) {
        return null != t && this.seek(t, e),
        this.paused(!0)
    }
    ,
    l.resume = function(t, e) {
        return null != t && this.seek(t, e),
        this.paused(!1)
    }
    ,
    l.seek = function(t, e) {
        return this.totalTime(Number(t), !1 !== e)
    }
    ,
    l.restart = function(t, e) {
        return this.reversed(!1).paused(!1).totalTime(t ? -this._delay : 0, !1 !== e, !0)
    }
    ,
    l.reverse = function(t, e) {
        return null != t && this.seek(t || this.totalDuration(), e),
        this.reversed(!0).paused(!1)
    }
    ,
    l.render = function(t, e, i) {}
    ,
    l.invalidate = function() {
        return this._time = this._totalTime = 0,
        this._initted = this._gc = !1,
        this._rawPrevTime = -1,
        (this._gc || !this.timeline) && this._enabled(!0),
        this
    }
    ,
    l.isActive = function() {
        var t, e = this._timeline, i = this._startTime;
        return !e || !this._gc && !this._paused && e.isActive() && (t = e.rawTime(!0)) >= i && t < i + this.totalDuration() / this._timeScale - _
    }
    ,
    l._enabled = function(t, e) {
        return u || h.wake(),
        this._gc = !t,
        this._active = this.isActive(),
        !0 !== e && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)),
        !1
    }
    ,
    l._kill = function(t, e) {
        return this._enabled(!1, !1)
    }
    ,
    l.kill = function(t, e) {
        return this._kill(t, e),
        this
    }
    ,
    l._uncache = function(t) {
        for (var e = t ? this : this.timeline; e; )
            e._dirty = !0,
            e = e.timeline;
        return this
    }
    ,
    l._swapSelfInParams = function(t) {
        for (var e = t.length, i = t.concat(); --e > -1; )
            "{self}" === t[e] && (i[e] = this);
        return i
    }
    ,
    l._callback = function(t) {
        var e = this.vars, i = e[t], r = e[t + "Params"], n = e[t + "Scope"] || e.callbackScope || this, s;
        switch (r ? r.length : 0) {
        case 0:
            i.call(n);
            break;
        case 1:
            i.call(n, r[0]);
            break;
        case 2:
            i.call(n, r[0], r[1]);
            break;
        default:
            i.apply(n, r)
        }
    }
    ,
    l.eventCallback = function(t, e, i, r) {
        if ("on" === (t || "").substr(0, 2)) {
            var n = this.vars;
            if (1 === arguments.length)
                return n[t];
            null == e ? delete n[t] : (n[t] = e,
            n[t + "Params"] = m(i) && -1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) : i,
            n[t + "Scope"] = r),
            "onUpdate" === t && (this._onUpdate = e)
        }
        return this
    }
    ,
    l.delay = function(t) {
        return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay),
        this._delay = t,
        this) : this._delay
    }
    ,
    l.duration = function(t) {
        return arguments.length ? (this._duration = this._totalDuration = t,
        this._uncache(!0),
        this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0),
        this) : (this._dirty = !1,
        this._duration)
    }
    ,
    l.totalDuration = function(t) {
        return this._dirty = !1,
        arguments.length ? this.duration(t) : this._totalDuration
    }
    ,
    l.time = function(t, e) {
        return arguments.length ? (this._dirty && this.totalDuration(),
        this.totalTime(t > this._duration ? this._duration : t, e)) : this._time
    }
    ,
    l.totalTime = function(t, e, i) {
        if (u || h.wake(),
        !arguments.length)
            return this._totalTime;
        if (this._timeline) {
            if (0 > t && !i && (t += this.totalDuration()),
            this._timeline.smoothChildTiming) {
                this._dirty && this.totalDuration();
                var r = this._totalDuration
                  , n = this._timeline;
                if (t > r && !i && (t = r),
                this._startTime = (this._paused ? this._pauseTime : n._time) - (this._reversed ? r - t : t) / this._timeScale,
                n._dirty || this._uncache(!1),
                n._timeline)
                    for (; n._timeline; )
                        n._timeline._time !== (n._startTime + n._totalTime) / n._timeScale && n.totalTime(n._totalTime, !0),
                        n = n._timeline
            }
            this._gc && this._enabled(!0, !1),
            (this._totalTime !== t || 0 === this._duration) && (I.length && J(),
            this.render(t, e, !1),
            I.length && J())
        }
        return this
    }
    ,
    l.progress = l.totalProgress = function(t, e) {
        var i = this.duration();
        return arguments.length ? this.totalTime(i * t, e) : i ? this._time / i : this.ratio
    }
    ,
    l.startTime = function(t) {
        return arguments.length ? (t !== this._startTime && (this._startTime = t,
        this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)),
        this) : this._startTime
    }
    ,
    l.endTime = function(t) {
        return this._startTime + (0 != t ? this.totalDuration() : this.duration()) / this._timeScale
    }
    ,
    l.timeScale = function(t) {
        if (!arguments.length)
            return this._timeScale;
        var e, i;
        for (t = t || _,
        this._timeline && this._timeline.smoothChildTiming && (i = (e = this._pauseTime) || 0 === e ? e : this._timeline.totalTime(),
        this._startTime = i - (i - this._startTime) * this._timeScale / t),
        this._timeScale = t,
        i = this.timeline; i && i.timeline; )
            i._dirty = !0,
            i.totalDuration(),
            i = i.timeline;
        return this
    }
    ,
    l.reversed = function(t) {
        return arguments.length ? (t != this._reversed && (this._reversed = t,
        this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)),
        this) : this._reversed
    }
    ,
    l.paused = function(t) {
        if (!arguments.length)
            return this._paused;
        var e, i, r = this._timeline;
        return t != this._paused && r && (u || t || h.wake(),
        i = (e = r.rawTime()) - this._pauseTime,
        !t && r.smoothChildTiming && (this._startTime += i,
        this._uncache(!1)),
        this._pauseTime = t ? e : null,
        this._paused = t,
        this._active = this.isActive(),
        !t && 0 !== i && this._initted && this.duration() && (e = r.smoothChildTiming ? this._totalTime : (e - this._startTime) / this._timeScale,
        this.render(e, e === this._totalTime, !0))),
        this._gc && !t && this._enabled(!0, !1),
        this
    }
    ;
    var F = x("core.SimpleTimeline", function(t) {
        M.call(this, 0, t),
        this.autoRemoveChildren = this.smoothChildTiming = !0
    });
    (l = F.prototype = new M).constructor = F,
    l.kill()._gc = !1,
    l._first = l._last = l._recent = null,
    l._sortChildren = !1,
    l.add = l.insert = function(t, e, i, r) {
        var n, s;
        if (t._startTime = Number(e || 0) + t._delay,
        t._paused && this !== t._timeline && (t._pauseTime = this.rawTime() - (t._timeline.rawTime() - t._pauseTime)),
        t.timeline && t.timeline._remove(t, !0),
        t.timeline = t._timeline = this,
        t._gc && t._enabled(!0, !0),
        n = this._last,
        this._sortChildren)
            for (s = t._startTime; n && n._startTime > s; )
                n = n._prev;
        return n ? (t._next = n._next,
        n._next = t) : (t._next = this._first,
        this._first = t),
        t._next ? t._next._prev = t : this._last = t,
        t._prev = n,
        this._recent = t,
        this._timeline && this._uncache(!0),
        this
    }
    ,
    l._remove = function(t, e) {
        return t.timeline === this && (e || t._enabled(!1, !0),
        t._prev ? t._prev._next = t._next : this._first === t && (this._first = t._next),
        t._next ? t._next._prev = t._prev : this._last === t && (this._last = t._prev),
        t._next = t._prev = t.timeline = null,
        t === this._recent && (this._recent = this._last),
        this._timeline && this._uncache(!0)),
        this
    }
    ,
    l.render = function(t, e, i) {
        var r, n = this._first;
        for (this._totalTime = this._time = this._rawPrevTime = t; n; )
            r = n._next,
            (n._active || t >= n._startTime && !n._paused && !n._gc) && (n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)),
            n = r
    }
    ,
    l.rawTime = function() {
        return u || h.wake(),
        this._totalTime
    }
    ;
    var D = x("TweenLite", function(e, i, r) {
        if (M.call(this, i, r),
        this.render = D.prototype.render,
        null == e)
            throw "Cannot tween a null target.";
        this.target = e = "string" != typeof e ? e : D.selector(e) || e;
        var n, s, a, o = e.jquery || e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType), l = this.vars.overwrite;
        if (this._overwrite = l = null == l ? Q[D.defaultOverwrite] : "number" == typeof l ? l >> 0 : Q[l],
        (o || e instanceof Array || e.push && m(e)) && "number" != typeof e[0])
            for (this._targets = a = c(e),
            this._propLookup = [],
            this._siblings = [],
            n = 0; n < a.length; n++)
                (s = a[n]) ? "string" != typeof s ? s.length && s !== t && s[0] && (s[0] === t || s[0].nodeType && s[0].style && !s.nodeType) ? (a.splice(n--, 1),
                this._targets = a = a.concat(c(s))) : (this._siblings[n] = tt(s, this, !1),
                1 === l && this._siblings[n].length > 1 && it(s, this, null, 1, this._siblings[n])) : "string" == typeof (s = a[n--] = D.selector(s)) && a.splice(n + 1, 1) : a.splice(n--, 1);
        else
            this._propLookup = {},
            this._siblings = tt(e, this, !1),
            1 === l && this._siblings.length > 1 && it(e, this, null, 1, this._siblings);
        (this.vars.immediateRender || 0 === i && 0 === this._delay && !1 !== this.vars.immediateRender) && (this._time = -_,
        this.render(Math.min(0, -this._delay)))
    }, !0)
      , X = function(e) {
        return e && e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType)
    }
      , z = function(t, e) {
        var i, r = {};
        for (i in t)
            Z[i] || i in e && "transform" !== i && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i || !(!q[i] || q[i] && q[i]._autoCSS) || (r[i] = t[i],
            delete t[i]);
        t.css = r
    };
    (l = D.prototype = new M).constructor = D,
    l.kill()._gc = !1,
    l.ratio = 0,
    l._firstPT = l._targets = l._overwrittenProps = l._startAt = null,
    l._notifyPluginsOfEnabled = l._lazy = !1,
    D.version = "2.1.3",
    D.defaultEase = l._ease = new w(null,null,1,1),
    D.defaultOverwrite = "auto",
    D.ticker = h,
    D.autoSleep = 120,
    D.lagSmoothing = function(t, e) {
        h.lagSmoothing(t, e)
    }
    ,
    D.selector = t.$ || t.jQuery || function(e) {
        var i = t.$ || t.jQuery;
        return i ? (D.selector = i,
        i(e)) : (r || (r = t.document),
        r ? r.querySelectorAll ? r.querySelectorAll(e) : r.getElementById("#" === e.charAt(0) ? e.substr(1) : e) : e)
    }
    ;
    var I = []
      , E = {}
      , L = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi
      , N = /[\+-]=-?[\.\d]/
      , Y = function(t) {
        for (var e, i = this._firstPT, r = 1e-6; i; )
            e = i.blob ? 1 === t && null != this.end ? this.end : t ? this.join("") : this.start : i.c * t + i.s,
            i.m ? e = i.m.call(this._tween, e, this._target || i.t, this._tween) : r > e && e > -r && !i.blob && (e = 0),
            i.f ? i.fp ? i.t[i.p](i.fp, e) : i.t[i.p](e) : i.t[i.p] = e,
            i = i._next
    }
      , B = function(t) {
        return (1e3 * t | 0) / 1e3 + ""
    }
      , j = function(t, e, i, r) {
        var n, s, a, o, l, h, u, f = [], p = 0, _ = "", c = 0;
        for (f.start = t,
        f.end = e,
        t = f[0] = t + "",
        e = f[1] = e + "",
        i && (i(f),
        t = f[0],
        e = f[1]),
        f.length = 0,
        n = t.match(L) || [],
        s = e.match(L) || [],
        r && (r._next = null,
        r.blob = 1,
        f._firstPT = f._applyPT = r),
        l = s.length,
        o = 0; l > o; o++)
            u = s[o],
            _ += (h = e.substr(p, e.indexOf(u, p) - p)) || !o ? h : ",",
            p += h.length,
            c ? c = (c + 1) % 5 : "rgba(" === h.substr(-5) && (c = 1),
            u === n[o] || n.length <= o ? _ += u : (_ && (f.push(_),
            _ = ""),
            a = parseFloat(n[o]),
            f.push(a),
            f._firstPT = {
                _next: f._firstPT,
                t: f,
                p: f.length - 1,
                s: a,
                c: ("=" === u.charAt(1) ? parseInt(u.charAt(0) + "1", 10) * parseFloat(u.substr(2)) : parseFloat(u) - a) || 0,
                f: 0,
                m: c && 4 > c ? Math.round : B
            }),
            p += u.length;
        return (_ += e.substr(p)) && f.push(_),
        f.setRatio = Y,
        N.test(e) && (f.end = null),
        f
    }
      , V = function(t, e, i, r, n, s, a, o, l) {
        "function" == typeof r && (r = r(l || 0, t));
        var h, u = typeof t[e], f = "function" !== u ? "" : e.indexOf("set") || "function" != typeof t["get" + e.substr(3)] ? e : "get" + e.substr(3), p = "get" !== i ? i : f ? a ? t[f](a) : t[f]() : t[e], _ = "string" == typeof r && "=" === r.charAt(1), c = {
            t: t,
            p: e,
            s: p,
            f: "function" === u,
            pg: 0,
            n: n || e,
            m: s ? "function" == typeof s ? s : Math.round : 0,
            pr: 0,
            c: _ ? parseInt(r.charAt(0) + "1", 10) * parseFloat(r.substr(2)) : parseFloat(r) - p || 0
        };
        return ("number" != typeof p || "number" != typeof r && !_) && (a || isNaN(p) || !_ && isNaN(r) || "boolean" == typeof p || "boolean" == typeof r ? (c.fp = a,
        c = {
            t: h = j(p, _ ? parseFloat(c.s) + c.c + (c.s + "").replace(/[0-9\-\.]/g, "") : r, o || D.defaultStringFilter, c),
            p: "setRatio",
            s: 0,
            c: 1,
            f: 2,
            pg: 0,
            n: n || e,
            pr: 0,
            m: 0
        }) : (c.s = parseFloat(p),
        _ || (c.c = parseFloat(r) - c.s || 0))),
        c.c ? ((c._next = this._firstPT) && (c._next._prev = c),
        this._firstPT = c,
        c) : void 0
    }
      , U = D._internals = {
        isArray: m,
        isSelector: X,
        lazyTweens: I,
        blobDif: j
    }
      , q = D._plugins = {}
      , G = U.tweenLookup = {}
      , W = 0
      , Z = U.reservedProps = {
        ease: 1,
        delay: 1,
        overwrite: 1,
        onComplete: 1,
        onCompleteParams: 1,
        onCompleteScope: 1,
        useFrames: 1,
        runBackwards: 1,
        startAt: 1,
        onUpdate: 1,
        onUpdateParams: 1,
        onUpdateScope: 1,
        onStart: 1,
        onStartParams: 1,
        onStartScope: 1,
        onReverseComplete: 1,
        onReverseCompleteParams: 1,
        onReverseCompleteScope: 1,
        onRepeat: 1,
        onRepeatParams: 1,
        onRepeatScope: 1,
        easeParams: 1,
        yoyo: 1,
        immediateRender: 1,
        repeat: 1,
        repeatDelay: 1,
        data: 1,
        paused: 1,
        reversed: 1,
        autoCSS: 1,
        lazy: 1,
        onOverwrite: 1,
        callbackScope: 1,
        stringFilter: 1,
        id: 1,
        yoyoEase: 1,
        stagger: 1
    }
      , Q = {
        none: 0,
        all: 1,
        auto: 2,
        concurrent: 3,
        allOnStart: 4,
        preexisting: 5,
        true: 1,
        false: 0
    }
      , H = M._rootFramesTimeline = new F
      , $ = M._rootTimeline = new F
      , K = 30
      , J = U.lazyRender = function() {
        var t, e, i = I.length;
        for (E = {},
        t = 0; i > t; t++)
            (e = I[t]) && !1 !== e._lazy && (e.render(e._lazy[0], e._lazy[1], !0),
            e._lazy = !1);
        I.length = 0
    }
    ;
    $._startTime = h.time,
    H._startTime = h.frame,
    $._active = H._active = !0,
    setTimeout(J, 1),
    M._updateRoot = D.render = function() {
        var t, e, i;
        if (I.length && J(),
        $.render((h.time - $._startTime) * $._timeScale, !1, !1),
        H.render((h.frame - H._startTime) * H._timeScale, !1, !1),
        I.length && J(),
        h.frame >= K) {
            for (i in K = h.frame + (parseInt(D.autoSleep, 10) || 120),
            G) {
                for (t = (e = G[i].tweens).length; --t > -1; )
                    e[t]._gc && e.splice(t, 1);
                0 === e.length && delete G[i]
            }
            if ((!(i = $._first) || i._paused) && D.autoSleep && !H._first && 1 === h._listeners.tick.length) {
                for (; i && i._paused; )
                    i = i._next;
                i || h.sleep()
            }
        }
    }
    ,
    h.addEventListener("tick", M._updateRoot);
    var tt = function(t, e, i) {
        var r, n, s = t._gsTweenID;
        if (G[s || (t._gsTweenID = s = "t" + W++)] || (G[s] = {
            target: t,
            tweens: []
        }),
        e && ((r = G[s].tweens)[n = r.length] = e,
        i))
            for (; --n > -1; )
                r[n] === e && r.splice(n, 1);
        return G[s].tweens
    }
      , et = function(t, e, i, r) {
        var n, s, a = t.vars.onOverwrite;
        return a && (n = a(t, e, i, r)),
        (a = D.onOverwrite) && (s = a(t, e, i, r)),
        !1 !== n && !1 !== s
    }
      , it = function(t, e, i, r, n) {
        var s, a, o, l;
        if (1 === r || r >= 4) {
            for (l = n.length,
            s = 0; l > s; s++)
                if ((o = n[s]) !== e)
                    o._gc || o._kill(null, t, e) && (a = !0);
                else if (5 === r)
                    break;
            return a
        }
        var h, u = e._startTime + _, f = [], p = 0, c = 0 === e._duration;
        for (s = n.length; --s > -1; )
            (o = n[s]) === e || o._gc || o._paused || (o._timeline !== e._timeline ? (h = h || rt(e, 0, c),
            0 === rt(o, h, c) && (f[p++] = o)) : o._startTime <= u && o._startTime + o.totalDuration() / o._timeScale > u && ((c || !o._initted) && u - o._startTime <= 2 * _ || (f[p++] = o)));
        for (s = p; --s > -1; )
            if (l = (o = f[s])._firstPT,
            2 === r && o._kill(i, t, e) && (a = !0),
            2 !== r || !o._firstPT && o._initted && l) {
                if (2 !== r && !et(o, e))
                    continue;
                o._enabled(!1, !1) && (a = !0)
            }
        return a
    }
      , rt = function(t, e, i) {
        for (var r = t._timeline, n = r._timeScale, s = t._startTime; r._timeline; ) {
            if (s += r._startTime,
            n *= r._timeScale,
            r._paused)
                return -100;
            r = r._timeline
        }
        return (s /= n) > e ? s - e : i && s === e || !t._initted && 2 * _ > s - e ? _ : (s += t.totalDuration() / t._timeScale / n) > e + _ ? 0 : s - e - _
    };
    l._init = function() {
        var t, e, i, r, n, s, a = this.vars, o = this._overwrittenProps, l = this._duration, h = !!a.immediateRender, u = a.ease, f = this._startAt;
        if (a.startAt) {
            for (r in f && (f.render(-1, !0),
            f.kill()),
            n = {},
            a.startAt)
                n[r] = a.startAt[r];
            if (n.data = "isStart",
            n.overwrite = !1,
            n.immediateRender = !0,
            n.lazy = h && !1 !== a.lazy,
            n.startAt = n.delay = null,
            n.onUpdate = a.onUpdate,
            n.onUpdateParams = a.onUpdateParams,
            n.onUpdateScope = a.onUpdateScope || a.callbackScope || this,
            this._startAt = D.to(this.target || {}, 0, n),
            h)
                if (this._time > 0)
                    this._startAt = null;
                else if (0 !== l)
                    return
        } else if (a.runBackwards && 0 !== l)
            if (f)
                f.render(-1, !0),
                f.kill(),
                this._startAt = null;
            else {
                for (r in 0 !== this._time && (h = !1),
                i = {},
                a)
                    Z[r] && "autoCSS" !== r || (i[r] = a[r]);
                if (i.overwrite = 0,
                i.data = "isFromStart",
                i.lazy = h && !1 !== a.lazy,
                i.immediateRender = h,
                this._startAt = D.to(this.target, 0, i),
                h) {
                    if (0 === this._time)
                        return
                } else
                    this._startAt._init(),
                    this._startAt._enabled(!1),
                    this.vars.immediateRender && (this._startAt = null)
            }
        if (this._ease = u = u ? u instanceof w ? u : "function" == typeof u ? new w(u,a.easeParams) : b[u] || D.defaultEase : D.defaultEase,
        a.easeParams instanceof Array && u.config && (this._ease = u.config.apply(u, a.easeParams)),
        this._easeType = this._ease._type,
        this._easePower = this._ease._power,
        this._firstPT = null,
        this._targets)
            for (s = this._targets.length,
            t = 0; s > t; t++)
                this._initProps(this._targets[t], this._propLookup[t] = {}, this._siblings[t], o ? o[t] : null, t) && (e = !0);
        else
            e = this._initProps(this.target, this._propLookup, this._siblings, o, 0);
        if (e && D._onPluginEvent("_onInitAllProps", this),
        o && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)),
        a.runBackwards)
            for (i = this._firstPT; i; )
                i.s += i.c,
                i.c = -i.c,
                i = i._next;
        this._onUpdate = a.onUpdate,
        this._initted = !0
    }
    ,
    l._initProps = function(e, i, r, n, s) {
        var a, o, l, h, u, f;
        if (null == e)
            return !1;
        for (a in E[e._gsTweenID] && J(),
        this.vars.css || e.style && e !== t && e.nodeType && q.css && !1 !== this.vars.autoCSS && z(this.vars, e),
        this.vars)
            if (f = this.vars[a],
            Z[a])
                f && (f instanceof Array || f.push && m(f)) && -1 !== f.join("").indexOf("{self}") && (this.vars[a] = f = this._swapSelfInParams(f, this));
            else if (q[a] && (h = new q[a])._onInitTween(e, this.vars[a], this, s)) {
                for (this._firstPT = u = {
                    _next: this._firstPT,
                    t: h,
                    p: "setRatio",
                    s: 0,
                    c: 1,
                    f: 1,
                    n: a,
                    pg: 1,
                    pr: h._priority,
                    m: 0
                },
                o = h._overwriteProps.length; --o > -1; )
                    i[h._overwriteProps[o]] = this._firstPT;
                (h._priority || h._onInitAllProps) && (l = !0),
                (h._onDisable || h._onEnable) && (this._notifyPluginsOfEnabled = !0),
                u._next && (u._next._prev = u)
            } else
                i[a] = V.call(this, e, a, "get", f, a, 0, null, this.vars.stringFilter, s);
        return n && this._kill(n, e) ? this._initProps(e, i, r, n, s) : this._overwrite > 1 && this._firstPT && r.length > 1 && it(e, this, i, this._overwrite, r) ? (this._kill(i, e),
        this._initProps(e, i, r, n, s)) : (this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration) && (E[e._gsTweenID] = !0),
        l)
    }
    ,
    l.render = function(t, e, i) {
        var r, n, s, a, o = this, l = o._time, h = o._duration, u = o._rawPrevTime;
        if (t >= h - _ && t >= 0)
            o._totalTime = o._time = h,
            o.ratio = o._ease._calcEnd ? o._ease.getRatio(1) : 1,
            o._reversed || (r = !0,
            n = "onComplete",
            i = i || o._timeline.autoRemoveChildren),
            0 === h && (o._initted || !o.vars.lazy || i) && (o._startTime === o._timeline._duration && (t = 0),
            (0 > u || 0 >= t && t >= -_ || u === _ && "isPause" !== o.data) && u !== t && (i = !0,
            u > _ && (n = "onReverseComplete")),
            o._rawPrevTime = a = !e || t || u === t ? t : _);
        else if (_ > t)
            o._totalTime = o._time = 0,
            o.ratio = o._ease._calcEnd ? o._ease.getRatio(0) : 0,
            (0 !== l || 0 === h && u > 0) && (n = "onReverseComplete",
            r = o._reversed),
            t > -_ ? t = 0 : 0 > t && (o._active = !1,
            0 === h && (o._initted || !o.vars.lazy || i) && (u >= 0 && (u !== _ || "isPause" !== o.data) && (i = !0),
            o._rawPrevTime = a = !e || t || u === t ? t : _)),
            (!o._initted || o._startAt && o._startAt.progress()) && (i = !0);
        else if (o._totalTime = o._time = t,
        o._easeType) {
            var f = t / h
              , p = o._easeType
              , c = o._easePower;
            (1 === p || 3 === p && f >= .5) && (f = 1 - f),
            3 === p && (f *= 2),
            1 === c ? f *= f : 2 === c ? f *= f * f : 3 === c ? f *= f * f * f : 4 === c && (f *= f * f * f * f),
            o.ratio = 1 === p ? 1 - f : 2 === p ? f : .5 > t / h ? f / 2 : 1 - f / 2
        } else
            o.ratio = o._ease.getRatio(t / h);
        if (o._time !== l || i) {
            if (!o._initted) {
                if (o._init(),
                !o._initted || o._gc)
                    return;
                if (!i && o._firstPT && (!1 !== o.vars.lazy && o._duration || o.vars.lazy && !o._duration))
                    return o._time = o._totalTime = l,
                    o._rawPrevTime = u,
                    I.push(o),
                    void (o._lazy = [t, e]);
                o._time && !r ? o.ratio = o._ease.getRatio(o._time / h) : r && o._ease._calcEnd && (o.ratio = o._ease.getRatio(0 === o._time ? 0 : 1))
            }
            for (!1 !== o._lazy && (o._lazy = !1),
            o._active || !o._paused && o._time !== l && t >= 0 && (o._active = !0),
            0 === l && (o._startAt && (t >= 0 ? o._startAt.render(t, !0, i) : n || (n = "_dummyGS")),
            o.vars.onStart && (0 !== o._time || 0 === h) && (e || o._callback("onStart"))),
            s = o._firstPT; s; )
                s.f ? s.t[s.p](s.c * o.ratio + s.s) : s.t[s.p] = s.c * o.ratio + s.s,
                s = s._next;
            o._onUpdate && (0 > t && o._startAt && -1e-4 !== t && o._startAt.render(t, !0, i),
            e || (o._time !== l || r || i) && o._callback("onUpdate")),
            n && (!o._gc || i) && (0 > t && o._startAt && !o._onUpdate && -1e-4 !== t && o._startAt.render(t, !0, i),
            r && (o._timeline.autoRemoveChildren && o._enabled(!1, !1),
            o._active = !1),
            !e && o.vars[n] && o._callback(n),
            0 === h && o._rawPrevTime === _ && a !== _ && (o._rawPrevTime = 0))
        }
    }
    ,
    l._kill = function(t, e, i) {
        if ("all" === t && (t = null),
        null == t && (null == e || e === this.target))
            return this._lazy = !1,
            this._enabled(!1, !1);
        e = "string" != typeof e ? e || this._targets || this.target : D.selector(e) || e;
        var r, n, s, a, o, l, h, u, f, p = i && this._time && i._startTime === this._startTime && this._timeline === i._timeline, _ = this._firstPT;
        if ((m(e) || X(e)) && "number" != typeof e[0])
            for (r = e.length; --r > -1; )
                this._kill(t, e[r], i) && (l = !0);
        else {
            if (this._targets) {
                for (r = this._targets.length; --r > -1; )
                    if (e === this._targets[r]) {
                        o = this._propLookup[r] || {},
                        this._overwrittenProps = this._overwrittenProps || [],
                        n = this._overwrittenProps[r] = t ? this._overwrittenProps[r] || {} : "all";
                        break
                    }
            } else {
                if (e !== this.target)
                    return !1;
                o = this._propLookup,
                n = this._overwrittenProps = t ? this._overwrittenProps || {} : "all"
            }
            if (o) {
                if (h = t || o,
                u = t !== n && "all" !== n && t !== o && ("object" != typeof t || !t._tempKill),
                i && (D.onOverwrite || this.vars.onOverwrite)) {
                    for (s in h)
                        o[s] && (f || (f = []),
                        f.push(s));
                    if ((f || !t) && !et(this, i, e, f))
                        return !1
                }
                for (s in h)
                    (a = o[s]) && (p && (a.f ? a.t[a.p](a.s) : a.t[a.p] = a.s,
                    l = !0),
                    a.pg && a.t._kill(h) && (l = !0),
                    a.pg && 0 !== a.t._overwriteProps.length || (a._prev ? a._prev._next = a._next : a === this._firstPT && (this._firstPT = a._next),
                    a._next && (a._next._prev = a._prev),
                    a._next = a._prev = null),
                    delete o[s]),
                    u && (n[s] = 1);
                !this._firstPT && this._initted && _ && this._enabled(!1, !1)
            }
        }
        return l
    }
    ,
    l.invalidate = function() {
        this._notifyPluginsOfEnabled && D._onPluginEvent("_onDisable", this);
        var t = this._time;
        return this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null,
        this._notifyPluginsOfEnabled = this._active = this._lazy = !1,
        this._propLookup = this._targets ? {} : [],
        M.prototype.invalidate.call(this),
        this.vars.immediateRender && (this._time = -_,
        this.render(t, !1, !1 !== this.vars.lazy)),
        this
    }
    ,
    l._enabled = function(t, e) {
        if (u || h.wake(),
        t && this._gc) {
            var i, r = this._targets;
            if (r)
                for (i = r.length; --i > -1; )
                    this._siblings[i] = tt(r[i], this, !0);
            else
                this._siblings = tt(this.target, this, !0)
        }
        return M.prototype._enabled.call(this, t, e),
        !(!this._notifyPluginsOfEnabled || !this._firstPT) && D._onPluginEvent(t ? "_onEnable" : "_onDisable", this)
    }
    ,
    D.to = function(t, e, i) {
        return new D(t,e,i)
    }
    ,
    D.from = function(t, e, i) {
        return i.runBackwards = !0,
        i.immediateRender = 0 != i.immediateRender,
        new D(t,e,i)
    }
    ,
    D.fromTo = function(t, e, i, r) {
        return r.startAt = i,
        r.immediateRender = 0 != r.immediateRender && 0 != i.immediateRender,
        new D(t,e,r)
    }
    ,
    D.delayedCall = function(t, e, i, r, n) {
        return new D(e,0,{
            delay: t,
            onComplete: e,
            onCompleteParams: i,
            callbackScope: r,
            onReverseComplete: e,
            onReverseCompleteParams: i,
            immediateRender: !1,
            lazy: !1,
            useFrames: n,
            overwrite: 0
        })
    }
    ,
    D.set = function(t, e) {
        return new D(t,0,e)
    }
    ,
    D.getTweensOf = function(t, e) {
        if (null == t)
            return [];
        var i, r, n, s;
        if (t = "string" != typeof t ? t : D.selector(t) || t,
        (m(t) || X(t)) && "number" != typeof t[0]) {
            for (i = t.length,
            r = []; --i > -1; )
                r = r.concat(D.getTweensOf(t[i], e));
            for (i = r.length; --i > -1; )
                for (s = r[i],
                n = i; --n > -1; )
                    s === r[n] && r.splice(i, 1)
        } else if (t._gsTweenID)
            for (i = (r = tt(t).concat()).length; --i > -1; )
                (r[i]._gc || e && !r[i].isActive()) && r.splice(i, 1);
        return r || []
    }
    ,
    D.killTweensOf = D.killDelayedCallsTo = function(t, e, i) {
        "object" == typeof e && (i = e,
        e = !1);
        for (var r = D.getTweensOf(t, e), n = r.length; --n > -1; )
            r[n]._kill(i, t)
    }
    ;
    var nt = x("plugins.TweenPlugin", function(t, e) {
        this._overwriteProps = (t || "").split(","),
        this._propName = this._overwriteProps[0],
        this._priority = e || 0,
        this._super = nt.prototype
    }, !0);
    if (l = nt.prototype,
    nt.version = "1.19.0",
    nt.API = 2,
    l._firstPT = null,
    l._addTween = V,
    l.setRatio = Y,
    l._kill = function(t) {
        var e, i = this._overwriteProps, r = this._firstPT;
        if (null != t[this._propName])
            this._overwriteProps = [];
        else
            for (e = i.length; --e > -1; )
                null != t[i[e]] && i.splice(e, 1);
        for (; r; )
            null != t[r.n] && (r._next && (r._next._prev = r._prev),
            r._prev ? (r._prev._next = r._next,
            r._prev = null) : this._firstPT === r && (this._firstPT = r._next)),
            r = r._next;
        return !1
    }
    ,
    l._mod = l._roundProps = function(t) {
        for (var e, i = this._firstPT; i; )
            (e = t[this._propName] || null != i.n && t[i.n.split(this._propName + "_").join("")]) && "function" == typeof e && (2 === i.f ? i.t._applyPT.m = e : i.m = e),
            i = i._next
    }
    ,
    D._onPluginEvent = function(t, e) {
        var i, r, n, s, a, o = e._firstPT;
        if ("_onInitAllProps" === t) {
            for (; o; ) {
                for (a = o._next,
                r = n; r && r.pr > o.pr; )
                    r = r._next;
                (o._prev = r ? r._prev : s) ? o._prev._next = o : n = o,
                (o._next = r) ? r._prev = o : s = o,
                o = a
            }
            o = e._firstPT = n
        }
        for (; o; )
            o.pg && "function" == typeof o.t[t] && o.t[t]() && (i = !0),
            o = o._next;
        return i
    }
    ,
    nt.activate = function(t) {
        for (var e = t.length; --e > -1; )
            t[e].API === nt.API && (q[(new t[e])._propName] = t[e]);
        return !0
    }
    ,
    y.plugin = function(t) {
        if (!(t && t.propName && t.init && t.API))
            throw "illegal plugin definition.";
        var e, i = t.propName, r = t.priority || 0, n = t.overwriteProps, s = {
            init: "_onInitTween",
            set: "setRatio",
            kill: "_kill",
            round: "_mod",
            mod: "_mod",
            initAll: "_onInitAllProps"
        }, a = x("plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin", function() {
            nt.call(this, i, r),
            this._overwriteProps = n || []
        }, !0 === t.global), o = a.prototype = new nt(i);
        for (e in o.constructor = a,
        a.API = t.API,
        s)
            "function" == typeof t[e] && (o[s[e]] = t[e]);
        return a.version = t.version,
        nt.activate([a]),
        a
    }
    ,
    a = t._gsQueue) {
        for (o = 0; o < a.length; o++)
            a[o]();
        for (l in g)
            g[l].func || t.console.log("GSAP encountered missing dependency: " + l)
    }
    u = !1
}("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window, "TweenLite"),
((_gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window)._gsQueue || (_gsScope._gsQueue = [])).push(function() {
    "use strict";
    _gsScope._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(t, e, i) {
        var r = function(t) {
            e.call(this, t);
            var i, r, n = this, s = n.vars;
            for (r in n._labels = {},
            n.autoRemoveChildren = !!s.autoRemoveChildren,
            n.smoothChildTiming = !!s.smoothChildTiming,
            n._sortChildren = !0,
            n._onUpdate = s.onUpdate,
            s)
                i = s[r],
                l(i) && -1 !== i.join("").indexOf("{self}") && (s[r] = n._swapSelfInParams(i));
            l(s.tweens) && n.add(s.tweens, 0, s.align, s.stagger)
        }
          , n = 1e-8
          , s = i._internals
          , a = r._internals = {}
          , o = s.isSelector
          , l = s.isArray
          , h = s.lazyTweens
          , u = s.lazyRender
          , f = _gsScope._gsDefine.globals
          , p = function(t) {
            var e, i = {};
            for (e in t)
                i[e] = t[e];
            return i
        }
          , _ = function(t, e, i) {
            var r, n, s = t.cycle;
            for (r in s)
                n = s[r],
                t[r] = "function" == typeof n ? n(i, e[i], e) : n[i % n.length];
            delete t.cycle
        }
          , c = a.pauseCallback = function() {}
          , d = function(t) {
            var e, i = [], r = t.length;
            for (e = 0; e !== r; i.push(t[e++]))
                ;
            return i
        }
          , m = function(t, e, i, r) {
            var n = "immediateRender";
            return n in e || (e[n] = !(i && !1 === i[n] || r)),
            e
        }
          , g = function(t) {
            if ("function" == typeof t)
                return t;
            var e = "object" == typeof t ? t : {
                each: t
            }
              , i = e.ease
              , r = e.from || 0
              , n = e.base || 0
              , s = {}
              , a = isNaN(r)
              , o = e.axis
              , l = {
                center: .5,
                end: 1
            }[r] || 0;
            return function(t, h, u) {
                var f, p, _, c, d, m, g, v, y, x = (u || e).length, T = s[x];
                if (!T) {
                    if (!(y = "auto" === e.grid ? 0 : (e.grid || [1 / 0])[0])) {
                        for (g = -1 / 0; g < (g = u[y++].getBoundingClientRect().left) && x > y; )
                            ;
                        y--
                    }
                    for (T = s[x] = [],
                    f = a ? Math.min(y, x) * l - .5 : r % y,
                    p = a ? x * l / y - .5 : r / y | 0,
                    g = 0,
                    v = 1 / 0,
                    m = 0; x > m; m++)
                        _ = m % y - f,
                        c = p - (m / y | 0),
                        T[m] = d = o ? Math.abs("y" === o ? c : _) : Math.sqrt(_ * _ + c * c),
                        d > g && (g = d),
                        v > d && (v = d);
                    T.max = g - v,
                    T.min = v,
                    T.v = x = e.amount || e.each * (y > x ? x - 1 : o ? "y" === o ? x / y : y : Math.max(y, x / y)) || 0,
                    T.b = 0 > x ? n - x : n
                }
                return x = (T[t] - T.min) / T.max,
                T.b + (i ? i.getRatio(x) : x) * T.v
            }
        }
          , v = r.prototype = new e;
        return r.version = "2.1.3",
        r.distribute = g,
        v.constructor = r,
        v.kill()._gc = v._forcingPlayhead = v._hasPause = !1,
        v.to = function(t, e, r, n) {
            var s = r.repeat && f.TweenMax || i;
            return e ? this.add(new s(t,e,r), n) : this.set(t, r, n)
        }
        ,
        v.from = function(t, e, r, n) {
            return this.add((r.repeat && f.TweenMax || i).from(t, e, m(this, r)), n)
        }
        ,
        v.fromTo = function(t, e, r, n, s) {
            var a = n.repeat && f.TweenMax || i;
            return n = m(this, n, r),
            e ? this.add(a.fromTo(t, e, r, n), s) : this.set(t, n, s)
        }
        ,
        v.staggerTo = function(t, e, n, s, a, l, h, u) {
            var f, c, m = new r({
                onComplete: l,
                onCompleteParams: h,
                callbackScope: u,
                smoothChildTiming: this.smoothChildTiming
            }), v = g(n.stagger || s), y = n.startAt, x = n.cycle;
            for ("string" == typeof t && (t = i.selector(t) || t),
            o(t = t || []) && (t = d(t)),
            c = 0; c < t.length; c++)
                f = p(n),
                y && (f.startAt = p(y),
                y.cycle && _(f.startAt, t, c)),
                x && (_(f, t, c),
                null != f.duration && (e = f.duration,
                delete f.duration)),
                m.to(t[c], e, f, v(c, t[c], t));
            return this.add(m, a)
        }
        ,
        v.staggerFrom = function(t, e, i, r, n, s, a, o) {
            return i.runBackwards = !0,
            this.staggerTo(t, e, m(this, i), r, n, s, a, o)
        }
        ,
        v.staggerFromTo = function(t, e, i, r, n, s, a, o, l) {
            return r.startAt = i,
            this.staggerTo(t, e, m(this, r, i), n, s, a, o, l)
        }
        ,
        v.call = function(t, e, r, n) {
            return this.add(i.delayedCall(0, t, e, r), n)
        }
        ,
        v.set = function(t, e, r) {
            return this.add(new i(t,0,m(this, e, null, !0)), r)
        }
        ,
        r.exportRoot = function(t, e) {
            null == (t = t || {}).smoothChildTiming && (t.smoothChildTiming = !0);
            var n, s, a, o, l = new r(t), h = l._timeline;
            for (null == e && (e = !0),
            h._remove(l, !0),
            l._startTime = 0,
            l._rawPrevTime = l._time = l._totalTime = h._time,
            a = h._first; a; )
                o = a._next,
                e && a instanceof i && a.target === a.vars.onComplete || (0 > (s = a._startTime - a._delay) && (n = 1),
                l.add(a, s)),
                a = o;
            return h.add(l, 0),
            n && l.totalDuration(),
            l
        }
        ,
        v.add = function(n, s, a, o) {
            var h, u, f, p, _, c, d = this;
            if ("number" != typeof s && (s = d._parseTimeOrLabel(s, 0, !0, n)),
            !(n instanceof t)) {
                if (n instanceof Array || n && n.push && l(n)) {
                    for (a = a || "normal",
                    o = o || 0,
                    h = s,
                    u = n.length,
                    f = 0; u > f; f++)
                        l(p = n[f]) && (p = new r({
                            tweens: p
                        })),
                        d.add(p, h),
                        "string" != typeof p && "function" != typeof p && ("sequence" === a ? h = p._startTime + p.totalDuration() / p._timeScale : "start" === a && (p._startTime -= p.delay())),
                        h += o;
                    return d._uncache(!0)
                }
                if ("string" == typeof n)
                    return d.addLabel(n, s);
                if ("function" != typeof n)
                    throw "Cannot add " + n + " into the timeline; it is not a tween, timeline, function, or string.";
                n = i.delayedCall(0, n)
            }
            if (e.prototype.add.call(d, n, s),
            (n._time || !n._duration && n._initted) && (h = (d.rawTime() - n._startTime) * n._timeScale,
            (!n._duration || Math.abs(Math.max(0, Math.min(n.totalDuration(), h))) - n._totalTime > 1e-5) && n.render(h, !1, !1)),
            (d._gc || d._time === d._duration) && !d._paused && d._duration < d.duration())
                for (c = (_ = d).rawTime() > n._startTime; _._timeline; )
                    c && _._timeline.smoothChildTiming ? _.totalTime(_._totalTime, !0) : _._gc && _._enabled(!0, !1),
                    _ = _._timeline;
            return d
        }
        ,
        v.remove = function(e) {
            if (e instanceof t) {
                this._remove(e, !1);
                var i = e._timeline = e.vars.useFrames ? t._rootFramesTimeline : t._rootTimeline;
                return e._startTime = (e._paused ? e._pauseTime : i._time) - (e._reversed ? e.totalDuration() - e._totalTime : e._totalTime) / e._timeScale,
                this
            }
            if (e instanceof Array || e && e.push && l(e)) {
                for (var r = e.length; --r > -1; )
                    this.remove(e[r]);
                return this
            }
            return "string" == typeof e ? this.removeLabel(e) : this.kill(null, e)
        }
        ,
        v._remove = function(t, i) {
            var r;
            return e.prototype._remove.call(this, t, i),
            this._last ? this._time > this.duration() && (this._time = this._duration,
            this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0,
            this
        }
        ,
        v.append = function(t, e) {
            return this.add(t, this._parseTimeOrLabel(null, e, !0, t))
        }
        ,
        v.insert = v.insertMultiple = function(t, e, i, r) {
            return this.add(t, e || 0, i, r)
        }
        ,
        v.appendMultiple = function(t, e, i, r) {
            return this.add(t, this._parseTimeOrLabel(null, e, !0, t), i, r)
        }
        ,
        v.addLabel = function(t, e) {
            return this._labels[t] = this._parseTimeOrLabel(e),
            this
        }
        ,
        v.addPause = function(t, e, r, n) {
            var s = i.delayedCall(0, c, r, n || this);
            return s.vars.onComplete = s.vars.onReverseComplete = e,
            s.data = "isPause",
            this._hasPause = !0,
            this.add(s, t)
        }
        ,
        v.removeLabel = function(t) {
            return delete this._labels[t],
            this
        }
        ,
        v.getLabelTime = function(t) {
            return null != this._labels[t] ? this._labels[t] : -1
        }
        ,
        v._parseTimeOrLabel = function(e, i, r, n) {
            var s, a;
            if (n instanceof t && n.timeline === this)
                this.remove(n);
            else if (n && (n instanceof Array || n.push && l(n)))
                for (a = n.length; --a > -1; )
                    n[a]instanceof t && n[a].timeline === this && this.remove(n[a]);
            if (s = "number" != typeof e || i ? this.duration() > 99999999999 ? this.recent().endTime(!1) : this._duration : 0,
            "string" == typeof i)
                return this._parseTimeOrLabel(i, r && "number" == typeof e && null == this._labels[i] ? e - s : 0, r);
            if (i = i || 0,
            "string" != typeof e || !isNaN(e) && null == this._labels[e])
                null == e && (e = s);
            else {
                if (-1 === (a = e.indexOf("=")))
                    return null == this._labels[e] ? r ? this._labels[e] = s + i : i : this._labels[e] + i;
                i = parseInt(e.charAt(a - 1) + "1", 10) * Number(e.substr(a + 1)),
                e = a > 1 ? this._parseTimeOrLabel(e.substr(0, a - 1), 0, r) : s
            }
            return Number(e) + i
        }
        ,
        v.seek = function(t, e) {
            return this.totalTime("number" == typeof t ? t : this._parseTimeOrLabel(t), !1 !== e)
        }
        ,
        v.stop = function() {
            return this.paused(!0)
        }
        ,
        v.gotoAndPlay = function(t, e) {
            return this.play(t, e)
        }
        ,
        v.gotoAndStop = function(t, e) {
            return this.pause(t, e)
        }
        ,
        v.render = function(t, e, i) {
            this._gc && this._enabled(!0, !1);
            var r, s, a, o, l, f, p, _, c = this, d = c._time, m = c._dirty ? c.totalDuration() : c._totalDuration, g = c._startTime, v = c._timeScale, y = c._paused;
            if (d !== c._time && (t += c._time - d),
            c._hasPause && !c._forcingPlayhead && !e) {
                if (t > d)
                    for (r = c._first; r && r._startTime <= t && !f; )
                        r._duration || "isPause" !== r.data || r.ratio || 0 === r._startTime && 0 === c._rawPrevTime || (f = r),
                        r = r._next;
                else
                    for (r = c._last; r && r._startTime >= t && !f; )
                        r._duration || "isPause" === r.data && r._rawPrevTime > 0 && (f = r),
                        r = r._prev;
                f && (c._time = c._totalTime = t = f._startTime,
                _ = c._startTime + (c._reversed ? c._duration - t : t) / c._timeScale)
            }
            if (t >= m - n && t >= 0)
                c._totalTime = c._time = m,
                c._reversed || c._hasPausedChild() || (s = !0,
                o = "onComplete",
                l = !!c._timeline.autoRemoveChildren,
                0 === c._duration && (0 >= t && t >= -n || c._rawPrevTime < 0 || c._rawPrevTime === n) && c._rawPrevTime !== t && c._first && (l = !0,
                c._rawPrevTime > n && (o = "onReverseComplete"))),
                c._rawPrevTime = c._duration || !e || t || c._rawPrevTime === t ? t : n,
                t = m + 1e-4;
            else if (n > t)
                if (c._totalTime = c._time = 0,
                t > -n && (t = 0),
                (0 !== d || 0 === c._duration && c._rawPrevTime !== n && (c._rawPrevTime > 0 || 0 > t && c._rawPrevTime >= 0)) && (o = "onReverseComplete",
                s = c._reversed),
                0 > t)
                    c._active = !1,
                    c._timeline.autoRemoveChildren && c._reversed ? (l = s = !0,
                    o = "onReverseComplete") : c._rawPrevTime >= 0 && c._first && (l = !0),
                    c._rawPrevTime = t;
                else {
                    if (c._rawPrevTime = c._duration || !e || t || c._rawPrevTime === t ? t : n,
                    0 === t && s)
                        for (r = c._first; r && 0 === r._startTime; )
                            r._duration || (s = !1),
                            r = r._next;
                    t = 0,
                    c._initted || (l = !0)
                }
            else
                c._totalTime = c._time = c._rawPrevTime = t;
            if (c._time !== d && c._first || i || l || f) {
                if (c._initted || (c._initted = !0),
                c._active || !c._paused && c._time !== d && t > 0 && (c._active = !0),
                0 === d && c.vars.onStart && (0 === c._time && c._duration || e || c._callback("onStart")),
                (p = c._time) >= d)
                    for (r = c._first; r && (a = r._next,
                    p === c._time && (!c._paused || y)); )
                        (r._active || r._startTime <= p && !r._paused && !r._gc) && (f === r && (c.pause(),
                        c._pauseTime = _),
                        r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (t - r._startTime) * r._timeScale, e, i) : r.render((t - r._startTime) * r._timeScale, e, i)),
                        r = a;
                else
                    for (r = c._last; r && (a = r._prev,
                    p === c._time && (!c._paused || y)); ) {
                        if (r._active || r._startTime <= d && !r._paused && !r._gc) {
                            if (f === r) {
                                for (f = r._prev; f && f.endTime() > c._time; )
                                    f.render(f._reversed ? f.totalDuration() - (t - f._startTime) * f._timeScale : (t - f._startTime) * f._timeScale, e, i),
                                    f = f._prev;
                                f = null,
                                c.pause(),
                                c._pauseTime = _
                            }
                            r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (t - r._startTime) * r._timeScale, e, i) : r.render((t - r._startTime) * r._timeScale, e, i)
                        }
                        r = a
                    }
                c._onUpdate && (e || (h.length && u(),
                c._callback("onUpdate"))),
                o && (c._gc || (g === c._startTime || v !== c._timeScale) && (0 === c._time || m >= c.totalDuration()) && (s && (h.length && u(),
                c._timeline.autoRemoveChildren && c._enabled(!1, !1),
                c._active = !1),
                !e && c.vars[o] && c._callback(o)))
            }
        }
        ,
        v._hasPausedChild = function() {
            for (var t = this._first; t; ) {
                if (t._paused || t instanceof r && t._hasPausedChild())
                    return !0;
                t = t._next
            }
            return !1
        }
        ,
        v.getChildren = function(t, e, r, n) {
            n = n || -9999999999;
            for (var s = [], a = this._first, o = 0; a; )
                a._startTime < n || (a instanceof i ? !1 !== e && (s[o++] = a) : (!1 !== r && (s[o++] = a),
                !1 !== t && (o = (s = s.concat(a.getChildren(!0, e, r))).length))),
                a = a._next;
            return s
        }
        ,
        v.getTweensOf = function(t, e) {
            var r, n, s = this._gc, a = [], o = 0;
            for (s && this._enabled(!0, !0),
            n = (r = i.getTweensOf(t)).length; --n > -1; )
                (r[n].timeline === this || e && this._contains(r[n])) && (a[o++] = r[n]);
            return s && this._enabled(!1, !0),
            a
        }
        ,
        v.recent = function() {
            return this._recent
        }
        ,
        v._contains = function(t) {
            for (var e = t.timeline; e; ) {
                if (e === this)
                    return !0;
                e = e.timeline
            }
            return !1
        }
        ,
        v.shiftChildren = function(t, e, i) {
            i = i || 0;
            for (var r, n = this._first, s = this._labels; n; )
                n._startTime >= i && (n._startTime += t),
                n = n._next;
            if (e)
                for (r in s)
                    s[r] >= i && (s[r] += t);
            return this._uncache(!0)
        }
        ,
        v._kill = function(t, e) {
            if (!t && !e)
                return this._enabled(!1, !1);
            for (var i = e ? this.getTweensOf(e) : this.getChildren(!0, !0, !1), r = i.length, n = !1; --r > -1; )
                i[r]._kill(t, e) && (n = !0);
            return n
        }
        ,
        v.clear = function(t) {
            var e = this.getChildren(!1, !0, !0)
              , i = e.length;
            for (this._time = this._totalTime = 0; --i > -1; )
                e[i]._enabled(!1, !1);
            return !1 !== t && (this._labels = {}),
            this._uncache(!0)
        }
        ,
        v.invalidate = function() {
            for (var e = this._first; e; )
                e.invalidate(),
                e = e._next;
            return t.prototype.invalidate.call(this)
        }
        ,
        v._enabled = function(t, i) {
            if (t === this._gc)
                for (var r = this._first; r; )
                    r._enabled(t, !0),
                    r = r._next;
            return e.prototype._enabled.call(this, t, i)
        }
        ,
        v.totalTime = function(e, i, r) {
            this._forcingPlayhead = !0;
            var n = t.prototype.totalTime.apply(this, arguments);
            return this._forcingPlayhead = !1,
            n
        }
        ,
        v.duration = function(t) {
            return arguments.length ? (0 !== this.duration() && 0 !== t && this.timeScale(this._duration / t),
            this) : (this._dirty && this.totalDuration(),
            this._duration)
        }
        ,
        v.totalDuration = function(t) {
            if (!arguments.length) {
                if (this._dirty) {
                    for (var e, i, r = 0, n = this, s = n._last, a = 999999999999; s; )
                        e = s._prev,
                        s._dirty && s.totalDuration(),
                        s._startTime > a && n._sortChildren && !s._paused && !n._calculatingDuration ? (n._calculatingDuration = 1,
                        n.add(s, s._startTime - s._delay),
                        n._calculatingDuration = 0) : a = s._startTime,
                        s._startTime < 0 && !s._paused && (r -= s._startTime,
                        n._timeline.smoothChildTiming && (n._startTime += s._startTime / n._timeScale,
                        n._time -= s._startTime,
                        n._totalTime -= s._startTime,
                        n._rawPrevTime -= s._startTime),
                        n.shiftChildren(-s._startTime, !1, -9999999999),
                        a = 0),
                        (i = s._startTime + s._totalDuration / s._timeScale) > r && (r = i),
                        s = e;
                    n._duration = n._totalDuration = r,
                    n._dirty = !1
                }
                return this._totalDuration
            }
            return t && this.totalDuration() ? this.timeScale(this._totalDuration / t) : this
        }
        ,
        v.paused = function(e) {
            if (!1 === e && this._paused)
                for (var i = this._first; i; )
                    i._startTime === this._time && "isPause" === i.data && (i._rawPrevTime = 0),
                    i = i._next;
            return t.prototype.paused.apply(this, arguments)
        }
        ,
        v.usesFrames = function() {
            for (var e = this._timeline; e._timeline; )
                e = e._timeline;
            return e === t._rootFramesTimeline
        }
        ,
        v.rawTime = function(t) {
            return t && (this._paused || this._repeat && this.time() > 0 && this.totalProgress() < 1) ? this._totalTime % (this._duration + this._repeatDelay) : this._paused ? this._totalTime : (this._timeline.rawTime(t) - this._startTime) * this._timeScale
        }
        ,
        r
    }, !0)
}),
_gsScope._gsDefine && _gsScope._gsQueue.pop()(),
function(t) {
    "use strict";
    var e = function() {
        return (_gsScope.GreenSockGlobals || _gsScope)[t]
    };
    "undefined" != typeof module && module.exports ? (require("./TweenLite.min.js"),
    module.exports = e()) : "function" == typeof define && define.amd && define(["TweenLite"], e)
}("TimelineLite"),
((_gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window)._gsQueue || (_gsScope._gsQueue = [])).push(function() {
    "use strict";
    _gsScope._gsDefine("easing.Back", ["easing.Ease"], function(t) {
        var e, i, r, n, s = _gsScope.GreenSockGlobals || _gsScope, a = s.com.greensock, o = 2 * Math.PI, l = Math.PI / 2, h = a._class, u = function(e, i) {
            var r = h("easing." + e, function() {}, !0)
              , n = r.prototype = new t;
            return n.constructor = r,
            n.getRatio = i,
            r
        }, f = t.register || function() {}
        , p = function(t, e, i, r, n) {
            var s = h("easing." + t, {
                easeOut: new e,
                easeIn: new i,
                easeInOut: new r
            }, !0);
            return f(s, t),
            s
        }, _ = function(t, e, i) {
            this.t = t,
            this.v = e,
            i && (this.next = i,
            i.prev = this,
            this.c = i.v - e,
            this.gap = i.t - t)
        }, c = function(e, i) {
            var r = h("easing." + e, function(t) {
                this._p1 = t || 0 === t ? t : 1.70158,
                this._p2 = 1.525 * this._p1
            }, !0)
              , n = r.prototype = new t;
            return n.constructor = r,
            n.getRatio = i,
            n.config = function(t) {
                return new r(t)
            }
            ,
            r
        }, d = p("Back", c("BackOut", function(t) {
            return (t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1
        }), c("BackIn", function(t) {
            return t * t * ((this._p1 + 1) * t - this._p1)
        }), c("BackInOut", function(t) {
            return (t *= 2) < 1 ? .5 * t * t * ((this._p2 + 1) * t - this._p2) : .5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2)
        })), m = h("easing.SlowMo", function(t, e, i) {
            e = e || 0 === e ? e : .7,
            null == t ? t = .7 : t > 1 && (t = 1),
            this._p = 1 !== t ? e : 0,
            this._p1 = (1 - t) / 2,
            this._p2 = t,
            this._p3 = this._p1 + this._p2,
            this._calcEnd = !0 === i
        }, !0), g = m.prototype = new t;
        return g.constructor = m,
        g.getRatio = function(t) {
            var e = t + (.5 - t) * this._p;
            return t < this._p1 ? this._calcEnd ? 1 - (t = 1 - t / this._p1) * t : e - (t = 1 - t / this._p1) * t * t * t * e : t > this._p3 ? this._calcEnd ? 1 === t ? 0 : 1 - (t = (t - this._p3) / this._p1) * t : e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t : this._calcEnd ? 1 : e
        }
        ,
        m.ease = new m(.7,.7),
        g.config = m.config = function(t, e, i) {
            return new m(t,e,i)
        }
        ,
        (g = (e = h("easing.SteppedEase", function(t, e) {
            t = t || 1,
            this._p1 = 1 / t,
            this._p2 = t + (e ? 0 : 1),
            this._p3 = e ? 1 : 0
        }, !0)).prototype = new t).constructor = e,
        g.getRatio = function(t) {
            return 0 > t ? t = 0 : t >= 1 && (t = .999999999),
            ((this._p2 * t | 0) + this._p3) * this._p1
        }
        ,
        g.config = e.config = function(t, i) {
            return new e(t,i)
        }
        ,
        (g = (i = h("easing.ExpoScaleEase", function(t, e, i) {
            this._p1 = Math.log(e / t),
            this._p2 = e - t,
            this._p3 = t,
            this._ease = i
        }, !0)).prototype = new t).constructor = i,
        g.getRatio = function(t) {
            return this._ease && (t = this._ease.getRatio(t)),
            (this._p3 * Math.exp(this._p1 * t) - this._p3) / this._p2
        }
        ,
        g.config = i.config = function(t, e, r) {
            return new i(t,e,r)
        }
        ,
        (g = (r = h("easing.RoughEase", function(e) {
            for (var i, r, n, s, a, o, l = (e = e || {}).taper || "none", h = [], u = 0, f = 0 | (e.points || 20), p = f, c = !1 !== e.randomize, d = !0 === e.clamp, m = e.template instanceof t ? e.template : null, g = "number" == typeof e.strength ? .4 * e.strength : .4; --p > -1; )
                i = c ? Math.random() : 1 / f * p,
                r = m ? m.getRatio(i) : i,
                "none" === l ? n = g : "out" === l ? n = (s = 1 - i) * s * g : "in" === l ? n = i * i * g : .5 > i ? n = (s = 2 * i) * s * .5 * g : n = (s = 2 * (1 - i)) * s * .5 * g,
                c ? r += Math.random() * n - .5 * n : p % 2 ? r += .5 * n : r -= .5 * n,
                d && (r > 1 ? r = 1 : 0 > r && (r = 0)),
                h[u++] = {
                    x: i,
                    y: r
                };
            for (h.sort(function(t, e) {
                return t.x - e.x
            }),
            o = new _(1,1,null),
            p = f; --p > -1; )
                a = h[p],
                o = new _(a.x,a.y,o);
            this._prev = new _(0,0,0 !== o.t ? o : o.next)
        }, !0)).prototype = new t).constructor = r,
        g.getRatio = function(t) {
            var e = this._prev;
            if (t > e.t) {
                for (; e.next && t >= e.t; )
                    e = e.next;
                e = e.prev
            } else
                for (; e.prev && t <= e.t; )
                    e = e.prev;
            return this._prev = e,
            e.v + (t - e.t) / e.gap * e.c
        }
        ,
        g.config = function(t) {
            return new r(t)
        }
        ,
        r.ease = new r,
        p("Bounce", u("BounceOut", function(t) {
            return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
        }), u("BounceIn", function(t) {
            return (t = 1 - t) < 1 / 2.75 ? 1 - 7.5625 * t * t : 2 / 2.75 > t ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : 2.5 / 2.75 > t ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
        }), u("BounceInOut", function(t) {
            var e = .5 > t;
            return t = 1 / 2.75 > (t = e ? 1 - 2 * t : 2 * t - 1) ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375,
            e ? .5 * (1 - t) : .5 * t + .5
        })),
        p("Circ", u("CircOut", function(t) {
            return Math.sqrt(1 - (t -= 1) * t)
        }), u("CircIn", function(t) {
            return -(Math.sqrt(1 - t * t) - 1)
        }), u("CircInOut", function(t) {
            return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
        })),
        p("Elastic", (n = function(e, i, r) {
            var n = h("easing." + e, function(t, e) {
                this._p1 = t >= 1 ? t : 1,
                this._p2 = (e || r) / (1 > t ? t : 1),
                this._p3 = this._p2 / o * (Math.asin(1 / this._p1) || 0),
                this._p2 = o / this._p2
            }, !0)
              , s = n.prototype = new t;
            return s.constructor = n,
            s.getRatio = i,
            s.config = function(t, e) {
                return new n(t,e)
            }
            ,
            n
        }
        )("ElasticOut", function(t) {
            return this._p1 * Math.pow(2, -10 * t) * Math.sin((t - this._p3) * this._p2) + 1
        }, .3), n("ElasticIn", function(t) {
            return -this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2)
        }, .3), n("ElasticInOut", function(t) {
            return (t *= 2) < 1 ? this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) * -.5 : this._p1 * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) * .5 + 1
        }, .45)),
        p("Expo", u("ExpoOut", function(t) {
            return 1 - Math.pow(2, -10 * t)
        }), u("ExpoIn", function(t) {
            return Math.pow(2, 10 * (t - 1)) - .001
        }), u("ExpoInOut", function(t) {
            return (t *= 2) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
        })),
        p("Sine", u("SineOut", function(t) {
            return Math.sin(t * l)
        }), u("SineIn", function(t) {
            return 1 - Math.cos(t * l)
        }), u("SineInOut", function(t) {
            return -.5 * (Math.cos(Math.PI * t) - 1)
        })),
        h("easing.EaseLookup", {
            find: function(e) {
                return t.map[e]
            }
        }, !0),
        f(s.SlowMo, "SlowMo", "ease,"),
        f(r, "RoughEase", "ease,"),
        f(e, "SteppedEase", "ease,"),
        d
    }, !0)
}),
_gsScope._gsDefine && _gsScope._gsQueue.pop()(),
function() {
    "use strict";
    var t = function() {
        return _gsScope.GreenSockGlobals || _gsScope
    };
    "undefined" != typeof module && module.exports ? (require("../TweenLite.min.js"),
    module.exports = t()) : "function" == typeof define && define.amd && define(["TweenLite"], t)
}(),
((_gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window)._gsQueue || (_gsScope._gsQueue = [])).push(function() {
    "use strict";
    _gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function(t, e) {
        var i, r, n, s, a = function() {
            t.call(this, "css"),
            this._overwriteProps.length = 0,
            this.setRatio = a.prototype.setRatio
        }, o = _gsScope._gsDefine.globals, l = {}, h = a.prototype = new t("css");
        h.constructor = a,
        a.version = "2.1.3",
        a.API = 2,
        a.defaultTransformPerspective = 0,
        a.defaultSkewType = "compensated",
        a.defaultSmoothOrigin = !0,
        h = "px",
        a.suffixMap = {
            top: h,
            right: h,
            bottom: h,
            left: h,
            width: h,
            height: h,
            fontSize: h,
            padding: h,
            margin: h,
            perspective: h,
            lineHeight: ""
        };
        var u, f, p, _, c, d, m, g, v = /(?:\-|\.|\b)(\d|\.|e\-)+/g, y = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g, x = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi, T = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b),?/gi, w = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g, b = /(?:\d|\-|\+|=|#|\.)*/g, P = /opacity *= *([^)]*)/i, O = /opacity:([^;]*)/i, S = /alpha\(opacity *=.+?\)/i, k = /^(rgb|hsl)/, C = /([A-Z])/g, A = /-([a-z])/gi, M = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi, R = function(t, e) {
            return e.toUpperCase()
        }, F = /(?:Left|Right|Width)/i, D = /(M11|M12|M21|M22)=[\d\-\.e]+/gi, X = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i, z = /,(?=[^\)]*(?:\(|$))/gi, I = /[\s,\(]/i, E = Math.PI / 180, L = 180 / Math.PI, N = {}, Y = {
            style: {}
        }, B = _gsScope.document || {
            createElement: function() {
                return Y
            }
        }, j = function(t, e) {
            var i = B.createElementNS ? B.createElementNS(e || "http://www.w3.org/1999/xhtml", t) : B.createElement(t);
            return i.style ? i : B.createElement(t)
        }, V = j("div"), U = j("img"), q = a._internals = {
            _specialProps: l
        }, G = (_gsScope.navigator || {}).userAgent || "", W = function() {
            var t = G.indexOf("Android")
              , e = j("a");
            return p = -1 !== G.indexOf("Safari") && -1 === G.indexOf("Chrome") && (-1 === t || parseFloat(G.substr(t + 8, 2)) > 3),
            c = p && parseFloat(G.substr(G.indexOf("Version/") + 8, 2)) < 6,
            _ = -1 !== G.indexOf("Firefox"),
            (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(G) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(G)) && (d = parseFloat(RegExp.$1)),
            !!e && (e.style.cssText = "top:1px;opacity:.55;",
            /^0.55/.test(e.style.opacity))
        }(), Z = function(t) {
            return P.test("string" == typeof t ? t : (t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
        }, Q = function(t) {
            _gsScope.console && console.log(t)
        }, H = "", $ = "", K = function(t, e) {
            var i, r, n = (e = e || V).style;
            if (void 0 !== n[t])
                return t;
            for (t = t.charAt(0).toUpperCase() + t.substr(1),
            i = ["O", "Moz", "ms", "Ms", "Webkit"],
            r = 5; --r > -1 && void 0 === n[i[r] + t]; )
                ;
            return r >= 0 ? ($ = 3 === r ? "ms" : i[r],
            H = "-" + $.toLowerCase() + "-",
            $ + t) : null
        }, J = "undefined" != typeof window ? window : B.defaultView || {
            getComputedStyle: function() {}
        }, tt = function(t) {
            return J.getComputedStyle(t)
        }, et = a.getStyle = function(t, e, i, r, n) {
            var s;
            return W || "opacity" !== e ? (!r && t.style[e] ? s = t.style[e] : (i = i || tt(t)) ? s = i[e] || i.getPropertyValue(e) || i.getPropertyValue(e.replace(C, "-$1").toLowerCase()) : t.currentStyle && (s = t.currentStyle[e]),
            null == n || s && "none" !== s && "auto" !== s && "auto auto" !== s ? s : n) : Z(t)
        }
        , it = q.convertToPixels = function(t, i, r, n, s) {
            if ("px" === n || !n && "lineHeight" !== i)
                return r;
            if ("auto" === n || !r)
                return 0;
            var o, l, h, u = F.test(i), f = t, p = V.style, _ = 0 > r, c = 1 === r;
            if (_ && (r = -r),
            c && (r *= 100),
            "lineHeight" !== i || n)
                if ("%" === n && -1 !== i.indexOf("border"))
                    o = r / 100 * (u ? t.clientWidth : t.clientHeight);
                else {
                    if (p.cssText = "border:0 solid red;position:" + et(t, "position") + ";line-height:0;",
                    "%" !== n && f.appendChild && "v" !== n.charAt(0) && "rem" !== n)
                        p[u ? "borderLeftWidth" : "borderTopWidth"] = r + n;
                    else {
                        if (f = t.parentNode || B.body,
                        -1 !== et(f, "display").indexOf("flex") && (p.position = "absolute"),
                        l = f._gsCache,
                        h = e.ticker.frame,
                        l && u && l.time === h)
                            return l.width * r / 100;
                        p[u ? "width" : "height"] = r + n
                    }
                    f.appendChild(V),
                    o = parseFloat(V[u ? "offsetWidth" : "offsetHeight"]),
                    f.removeChild(V),
                    u && "%" === n && !1 !== a.cacheWidths && ((l = f._gsCache = f._gsCache || {}).time = h,
                    l.width = o / r * 100),
                    0 !== o || s || (o = it(t, i, r, n, !0))
                }
            else
                l = tt(t).lineHeight,
                t.style.lineHeight = r,
                o = parseFloat(tt(t).lineHeight),
                t.style.lineHeight = l;
            return c && (o /= 100),
            _ ? -o : o
        }
        , rt = q.calculateOffset = function(t, e, i) {
            if ("absolute" !== et(t, "position", i))
                return 0;
            var r = "left" === e ? "Left" : "Top"
              , n = et(t, "margin" + r, i);
            return t["offset" + r] - (it(t, e, parseFloat(n), n.replace(b, "")) || 0)
        }
        , nt = function(t, e) {
            var i, r, n, s = {};
            if (e = e || tt(t, null))
                if (i = e.length)
                    for (; --i > -1; )
                        (-1 === (n = e[i]).indexOf("-transform") || Rt === n) && (s[n.replace(A, R)] = e.getPropertyValue(n));
                else
                    for (i in e)
                        (-1 === i.indexOf("Transform") || Mt === i) && (s[i] = e[i]);
            else if (e = t.currentStyle || t.style)
                for (i in e)
                    "string" == typeof i && void 0 === s[i] && (s[i.replace(A, R)] = e[i]);
            return W || (s.opacity = Z(t)),
            r = qt(t, e, !1),
            s.rotation = r.rotation,
            s.skewX = r.skewX,
            s.scaleX = r.scaleX,
            s.scaleY = r.scaleY,
            s.x = r.x,
            s.y = r.y,
            Dt && (s.z = r.z,
            s.rotationX = r.rotationX,
            s.rotationY = r.rotationY,
            s.scaleZ = r.scaleZ),
            s.filters && delete s.filters,
            s
        }, st = function(t, e, i, r, n) {
            var s, a, o, l = {}, h = t.style;
            for (a in i)
                "cssText" !== a && "length" !== a && isNaN(a) && (e[a] !== (s = i[a]) || n && n[a]) && -1 === a.indexOf("Origin") && ("number" == typeof s || "string" == typeof s) && (l[a] = "auto" !== s || "left" !== a && "top" !== a ? "" !== s && "auto" !== s && "none" !== s || "string" != typeof e[a] || "" === e[a].replace(w, "") ? s : 0 : rt(t, a),
                void 0 !== h[a] && (o = new xt(h,a,h[a],o)));
            if (r)
                for (a in r)
                    "className" !== a && (l[a] = r[a]);
            return {
                difs: l,
                firstMPT: o
            }
        }, at = {
            width: ["Left", "Right"],
            height: ["Top", "Bottom"]
        }, ot = ["marginLeft", "marginRight", "marginTop", "marginBottom"], lt = function(t, e, i) {
            if ("svg" === (t.nodeName + "").toLowerCase())
                return (i || tt(t))[e] || 0;
            if (t.getCTM && jt(t))
                return t.getBBox()[e] || 0;
            var r = parseFloat("width" === e ? t.offsetWidth : t.offsetHeight)
              , n = at[e]
              , s = n.length;
            for (i = i || tt(t, null); --s > -1; )
                r -= parseFloat(et(t, "padding" + n[s], i, !0)) || 0,
                r -= parseFloat(et(t, "border" + n[s] + "Width", i, !0)) || 0;
            return r
        }, ht = function(t, e) {
            if ("contain" === t || "auto" === t || "auto auto" === t)
                return t + " ";
            (null == t || "" === t) && (t = "0 0");
            var i, r = t.split(" "), n = -1 !== t.indexOf("left") ? "0%" : -1 !== t.indexOf("right") ? "100%" : r[0], s = -1 !== t.indexOf("top") ? "0%" : -1 !== t.indexOf("bottom") ? "100%" : r[1];
            if (r.length > 3 && !e) {
                for (r = t.split(", ").join(",").split(","),
                t = [],
                i = 0; i < r.length; i++)
                    t.push(ht(r[i]));
                return t.join(",")
            }
            return null == s ? s = "center" === n ? "50%" : "0" : "center" === s && (s = "50%"),
            ("center" === n || isNaN(parseFloat(n)) && -1 === (n + "").indexOf("=")) && (n = "50%"),
            t = n + " " + s + (r.length > 2 ? " " + r[2] : ""),
            e && (e.oxp = -1 !== n.indexOf("%"),
            e.oyp = -1 !== s.indexOf("%"),
            e.oxr = "=" === n.charAt(1),
            e.oyr = "=" === s.charAt(1),
            e.ox = parseFloat(n.replace(w, "")),
            e.oy = parseFloat(s.replace(w, "")),
            e.v = t),
            e || t
        }, ut = function(t, e) {
            return "function" == typeof t && (t = t(g, m)),
            "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) : parseFloat(t) - parseFloat(e) || 0
        }, ft = function(t, e) {
            "function" == typeof t && (t = t(g, m));
            var i = "string" == typeof t && "=" === t.charAt(1);
            return "string" == typeof t && "v" === t.charAt(t.length - 2) && (t = (i ? t.substr(0, 2) : 0) + window["inner" + ("vh" === t.substr(-2) ? "Height" : "Width")] * (parseFloat(i ? t.substr(2) : t) / 100)),
            null == t ? e : i ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) + e : parseFloat(t) || 0
        }, pt = function(t, e, i, r) {
            var n, s, a, o, l, h = 1e-6;
            return "function" == typeof t && (t = t(g, m)),
            null == t ? o = e : "number" == typeof t ? o = t : (n = 360,
            s = t.split("_"),
            a = ((l = "=" === t.charAt(1)) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(s[0].substr(2)) : parseFloat(s[0])) * (-1 === t.indexOf("rad") ? 1 : L) - (l ? 0 : e),
            s.length && (r && (r[i] = e + a),
            -1 !== t.indexOf("short") && ((a %= n) !== a % 180 && (a = 0 > a ? a + n : a - n)),
            -1 !== t.indexOf("_cw") && 0 > a ? a = (a + 9999999999 * n) % n - (a / n | 0) * n : -1 !== t.indexOf("ccw") && a > 0 && (a = (a - 9999999999 * n) % n - (a / n | 0) * n)),
            o = e + a),
            h > o && o > -h && (o = 0),
            o
        }, _t = {
            aqua: [0, 255, 255],
            lime: [0, 255, 0],
            silver: [192, 192, 192],
            black: [0, 0, 0],
            maroon: [128, 0, 0],
            teal: [0, 128, 128],
            blue: [0, 0, 255],
            navy: [0, 0, 128],
            white: [255, 255, 255],
            fuchsia: [255, 0, 255],
            olive: [128, 128, 0],
            yellow: [255, 255, 0],
            orange: [255, 165, 0],
            gray: [128, 128, 128],
            purple: [128, 0, 128],
            green: [0, 128, 0],
            red: [255, 0, 0],
            pink: [255, 192, 203],
            cyan: [0, 255, 255],
            transparent: [255, 255, 255, 0]
        }, ct = function(t, e, i) {
            return 255 * (1 > 6 * (t = 0 > t ? t + 1 : t > 1 ? t - 1 : t) ? e + (i - e) * t * 6 : .5 > t ? i : 2 > 3 * t ? e + (i - e) * (2 / 3 - t) * 6 : e) + .5 | 0
        }, dt = a.parseColor = function(t, e) {
            var i, r, n, s, a, o, l, h, u, f, p;
            if (t)
                if ("number" == typeof t)
                    i = [t >> 16, t >> 8 & 255, 255 & t];
                else {
                    if ("," === t.charAt(t.length - 1) && (t = t.substr(0, t.length - 1)),
                    _t[t])
                        i = _t[t];
                    else if ("#" === t.charAt(0))
                        4 === t.length && (r = t.charAt(1),
                        n = t.charAt(2),
                        s = t.charAt(3),
                        t = "#" + r + r + n + n + s + s),
                        i = [(t = parseInt(t.substr(1), 16)) >> 16, t >> 8 & 255, 255 & t];
                    else if ("hsl" === t.substr(0, 3))
                        if (i = p = t.match(v),
                        e) {
                            if (-1 !== t.indexOf("="))
                                return t.match(y)
                        } else
                            a = Number(i[0]) % 360 / 360,
                            o = Number(i[1]) / 100,
                            r = 2 * (l = Number(i[2]) / 100) - (n = .5 >= l ? l * (o + 1) : l + o - l * o),
                            i.length > 3 && (i[3] = Number(i[3])),
                            i[0] = ct(a + 1 / 3, r, n),
                            i[1] = ct(a, r, n),
                            i[2] = ct(a - 1 / 3, r, n);
                    else
                        i = t.match(v) || _t.transparent;
                    i[0] = Number(i[0]),
                    i[1] = Number(i[1]),
                    i[2] = Number(i[2]),
                    i.length > 3 && (i[3] = Number(i[3]))
                }
            else
                i = _t.black;
            return e && !p && (r = i[0] / 255,
            n = i[1] / 255,
            s = i[2] / 255,
            l = ((h = Math.max(r, n, s)) + (u = Math.min(r, n, s))) / 2,
            h === u ? a = o = 0 : (f = h - u,
            o = l > .5 ? f / (2 - h - u) : f / (h + u),
            a = h === r ? (n - s) / f + (s > n ? 6 : 0) : h === n ? (s - r) / f + 2 : (r - n) / f + 4,
            a *= 60),
            i[0] = a + .5 | 0,
            i[1] = 100 * o + .5 | 0,
            i[2] = 100 * l + .5 | 0),
            i
        }
        , mt = function(t, e) {
            var i, r, n, s = t.match(gt) || [], a = 0, o = "";
            if (!s.length)
                return t;
            for (i = 0; i < s.length; i++)
                r = s[i],
                a += (n = t.substr(a, t.indexOf(r, a) - a)).length + r.length,
                3 === (r = dt(r, e)).length && r.push(1),
                o += n + (e ? "hsla(" + r[0] + "," + r[1] + "%," + r[2] + "%," + r[3] : "rgba(" + r.join(",")) + ")";
            return o + t.substr(a)
        }, gt = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
        for (h in _t)
            gt += "|" + h + "\\b";
        gt = new RegExp(gt + ")","gi"),
        a.colorStringFilter = function(t) {
            var e, i = t[0] + " " + t[1];
            gt.test(i) && (e = -1 !== i.indexOf("hsl(") || -1 !== i.indexOf("hsla("),
            t[0] = mt(t[0], e),
            t[1] = mt(t[1], e)),
            gt.lastIndex = 0
        }
        ,
        e.defaultStringFilter || (e.defaultStringFilter = a.colorStringFilter);
        var vt = function(t, e, i, r) {
            if (null == t)
                return function(t) {
                    return t
                }
                ;
            var n, s = e ? (t.match(gt) || [""])[0] : "", a = t.split(s).join("").match(x) || [], o = t.substr(0, t.indexOf(a[0])), l = ")" === t.charAt(t.length - 1) ? ")" : "", h = -1 !== t.indexOf(" ") ? " " : ",", u = a.length, f = u > 0 ? a[0].replace(v, "") : "";
            return u ? n = e ? function(t) {
                var e, p, _, c;
                if ("number" == typeof t)
                    t += f;
                else if (r && z.test(t)) {
                    for (c = t.replace(z, "|").split("|"),
                    _ = 0; _ < c.length; _++)
                        c[_] = n(c[_]);
                    return c.join(",")
                }
                if (e = (t.match(gt) || [s])[0],
                _ = (p = t.split(e).join("").match(x) || []).length,
                u > _--)
                    for (; ++_ < u; )
                        p[_] = i ? p[(_ - 1) / 2 | 0] : a[_];
                return o + p.join(h) + h + e + l + (-1 !== t.indexOf("inset") ? " inset" : "")
            }
            : function(t) {
                var e, s, p;
                if ("number" == typeof t)
                    t += f;
                else if (r && z.test(t)) {
                    for (s = t.replace(z, "|").split("|"),
                    p = 0; p < s.length; p++)
                        s[p] = n(s[p]);
                    return s.join(",")
                }
                if (p = (e = t.match("," === h ? x : T) || []).length,
                u > p--)
                    for (; ++p < u; )
                        e[p] = i ? e[(p - 1) / 2 | 0] : a[p];
                return (o && "none" !== t && t.substr(0, t.indexOf(e[0])) || o) + e.join(h) + l
            }
            : function(t) {
                return t
            }
        }
          , yt = function(t) {
            return t = t.split(","),
            function(e, i, r, n, s, a, o) {
                var l, h = (i + "").split(" ");
                for (o = {},
                l = 0; 4 > l; l++)
                    o[t[l]] = h[l] = h[l] || h[(l - 1) / 2 >> 0];
                return n.parse(e, o, s, a)
            }
        }
          , xt = (q._setPluginRatio = function(t) {
            this.plugin.setRatio(t);
            for (var e, i, r, n, s, a = this.data, o = a.proxy, l = a.firstMPT, h = 1e-6; l; )
                e = o[l.v],
                l.r ? e = l.r(e) : h > e && e > -h && (e = 0),
                l.t[l.p] = e,
                l = l._next;
            if (a.autoRotate && (a.autoRotate.rotation = a.mod ? a.mod.call(this._tween, o.rotation, this.t, this._tween) : o.rotation),
            1 === t || 0 === t)
                for (l = a.firstMPT,
                s = 1 === t ? "e" : "b"; l; ) {
                    if ((i = l.t).type) {
                        if (1 === i.type) {
                            for (n = i.xs0 + i.s + i.xs1,
                            r = 1; r < i.l; r++)
                                n += i["xn" + r] + i["xs" + (r + 1)];
                            i[s] = n
                        }
                    } else
                        i[s] = i.s + i.xs0;
                    l = l._next
                }
        }
        ,
        function(t, e, i, r, n) {
            this.t = t,
            this.p = e,
            this.v = i,
            this.r = n,
            r && (r._prev = this,
            this._next = r)
        }
        )
          , Tt = (q._parseToProxy = function(t, e, i, r, n, s) {
            var a, o, l, h, u, f = r, p = {}, _ = {}, c = i._transform, d = N;
            for (i._transform = null,
            N = e,
            r = u = i.parse(t, e, r, n),
            N = d,
            s && (i._transform = c,
            f && (f._prev = null,
            f._prev && (f._prev._next = null))); r && r !== f; ) {
                if (r.type <= 1 && (_[o = r.p] = r.s + r.c,
                p[o] = r.s,
                s || (h = new xt(r,"s",o,h,r.r),
                r.c = 0),
                1 === r.type))
                    for (a = r.l; --a > 0; )
                        l = "xn" + a,
                        _[o = r.p + "_" + l] = r.data[l],
                        p[o] = r[l],
                        s || (h = new xt(r,l,o,h,r.rxp[l]));
                r = r._next
            }
            return {
                proxy: p,
                end: _,
                firstMPT: h,
                pt: u
            }
        }
        ,
        q.CSSPropTween = function(t, e, r, n, a, o, l, h, u, f, p) {
            this.t = t,
            this.p = e,
            this.s = r,
            this.c = n,
            this.n = l || e,
            t instanceof Tt || s.push(this.n),
            this.r = h ? "function" == typeof h ? h : Math.round : h,
            this.type = o || 0,
            u && (this.pr = u,
            i = !0),
            this.b = void 0 === f ? r : f,
            this.e = void 0 === p ? r + n : p,
            a && (this._next = a,
            a._prev = this)
        }
        )
          , wt = function(t, e, i, r, n, s) {
            var a = new Tt(t,e,i,r - i,n,-1,s);
            return a.b = i,
            a.e = a.xs0 = r,
            a
        }
          , bt = a.parseComplex = function(t, e, i, r, n, s, o, l, h, f) {
            i = i || s || "",
            "function" == typeof r && (r = r(g, m)),
            o = new Tt(t,e,0,0,o,f ? 2 : 1,null,!1,l,i,r),
            r += "",
            n && gt.test(r + i) && (r = [i, r],
            a.colorStringFilter(r),
            i = r[0],
            r = r[1]);
            var p, _, c, d, x, T, w, b, P, O, S, k, C, A = i.split(", ").join(",").split(" "), M = r.split(", ").join(",").split(" "), R = A.length, F = !1 !== u;
            for ((-1 !== r.indexOf(",") || -1 !== i.indexOf(",")) && (-1 !== (r + i).indexOf("rgb") || -1 !== (r + i).indexOf("hsl") ? (A = A.join(" ").replace(z, ", ").split(" "),
            M = M.join(" ").replace(z, ", ").split(" ")) : (A = A.join(" ").split(",").join(", ").split(" "),
            M = M.join(" ").split(",").join(", ").split(" ")),
            R = A.length),
            R !== M.length && (R = (A = (s || "").split(" ")).length),
            o.plugin = h,
            o.setRatio = f,
            gt.lastIndex = 0,
            p = 0; R > p; p++)
                if (d = A[p],
                x = M[p] + "",
                (b = parseFloat(d)) || 0 === b)
                    o.appendXtra("", b, ut(x, b), x.replace(y, ""), !(!F || -1 === x.indexOf("px")) && Math.round, !0);
                else if (n && gt.test(d))
                    k = ")" + ((k = x.indexOf(")") + 1) ? x.substr(k) : ""),
                    C = -1 !== x.indexOf("hsl") && W,
                    O = x,
                    d = dt(d, C),
                    x = dt(x, C),
                    (P = d.length + x.length > 6) && !W && 0 === x[3] ? (o["xs" + o.l] += o.l ? " transparent" : "transparent",
                    o.e = o.e.split(M[p]).join("transparent")) : (W || (P = !1),
                    C ? o.appendXtra(O.substr(0, O.indexOf("hsl")) + (P ? "hsla(" : "hsl("), d[0], ut(x[0], d[0]), ",", !1, !0).appendXtra("", d[1], ut(x[1], d[1]), "%,", !1).appendXtra("", d[2], ut(x[2], d[2]), P ? "%," : "%" + k, !1) : o.appendXtra(O.substr(0, O.indexOf("rgb")) + (P ? "rgba(" : "rgb("), d[0], x[0] - d[0], ",", Math.round, !0).appendXtra("", d[1], x[1] - d[1], ",", Math.round).appendXtra("", d[2], x[2] - d[2], P ? "," : k, Math.round),
                    P && (d = d.length < 4 ? 1 : d[3],
                    o.appendXtra("", d, (x.length < 4 ? 1 : x[3]) - d, k, !1))),
                    gt.lastIndex = 0;
                else if (T = d.match(v)) {
                    if (!(w = x.match(y)) || w.length !== T.length)
                        return o;
                    for (c = 0,
                    _ = 0; _ < T.length; _++)
                        S = T[_],
                        O = d.indexOf(S, c),
                        o.appendXtra(d.substr(c, O - c), Number(S), ut(w[_], S), "", !(!F || "px" !== d.substr(O + S.length, 2)) && Math.round, 0 === _),
                        c = O + S.length;
                    o["xs" + o.l] += d.substr(c)
                } else
                    o["xs" + o.l] += o.l || o["xs" + o.l] ? " " + x : x;
            if (-1 !== r.indexOf("=") && o.data) {
                for (k = o.xs0 + o.data.s,
                p = 1; p < o.l; p++)
                    k += o["xs" + p] + o.data["xn" + p];
                o.e = k + o["xs" + p]
            }
            return o.l || (o.type = -1,
            o.xs0 = o.e),
            o.xfirst || o
        }
          , Pt = 9;
        for ((h = Tt.prototype).l = h.pr = 0; --Pt > 0; )
            h["xn" + Pt] = 0,
            h["xs" + Pt] = "";
        h.xs0 = "",
        h._next = h._prev = h.xfirst = h.data = h.plugin = h.setRatio = h.rxp = null,
        h.appendXtra = function(t, e, i, r, n, s) {
            var a = this
              , o = a.l;
            return a["xs" + o] += s && (o || a["xs" + o]) ? " " + t : t || "",
            i || 0 === o || a.plugin ? (a.l++,
            a.type = a.setRatio ? 2 : 1,
            a["xs" + a.l] = r || "",
            o > 0 ? (a.data["xn" + o] = e + i,
            a.rxp["xn" + o] = n,
            a["xn" + o] = e,
            a.plugin || (a.xfirst = new Tt(a,"xn" + o,e,i,a.xfirst || a,0,a.n,n,a.pr),
            a.xfirst.xs0 = 0),
            a) : (a.data = {
                s: e + i
            },
            a.rxp = {},
            a.s = e,
            a.c = i,
            a.r = n,
            a)) : (a["xs" + o] += e + (r || ""),
            a)
        }
        ;
        var Ot = function(t, e) {
            e = e || {},
            this.p = e.prefix && K(t) || t,
            l[t] = l[this.p] = this,
            this.format = e.formatter || vt(e.defaultValue, e.color, e.collapsible, e.multi),
            e.parser && (this.parse = e.parser),
            this.clrs = e.color,
            this.multi = e.multi,
            this.keyword = e.keyword,
            this.dflt = e.defaultValue,
            this.allowFunc = e.allowFunc,
            this.pr = e.priority || 0
        }
          , St = q._registerComplexSpecialProp = function(t, e, i) {
            "object" != typeof e && (e = {
                parser: i
            });
            var r, n, s = t.split(","), a = e.defaultValue;
            for (i = i || [a],
            r = 0; r < s.length; r++)
                e.prefix = 0 === r && e.prefix,
                e.defaultValue = i[r] || a,
                n = new Ot(s[r],e)
        }
          , kt = q._registerPluginProp = function(t) {
            if (!l[t]) {
                var e = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin";
                St(t, {
                    parser: function(t, i, r, n, s, a, h) {
                        var u = o.com.greensock.plugins[e];
                        return u ? (u._cssRegister(),
                        l[r].parse(t, i, r, n, s, a, h)) : (Q("Error: " + e + " js file not loaded."),
                        s)
                    }
                })
            }
        }
        ;
        (h = Ot.prototype).parseComplex = function(t, e, i, r, n, s) {
            var a, o, l, h, u, f, p = this.keyword;
            if (this.multi && (z.test(i) || z.test(e) ? (o = e.replace(z, "|").split("|"),
            l = i.replace(z, "|").split("|")) : p && (o = [e],
            l = [i])),
            l) {
                for (h = l.length > o.length ? l.length : o.length,
                a = 0; h > a; a++)
                    e = o[a] = o[a] || this.dflt,
                    i = l[a] = l[a] || this.dflt,
                    p && ((u = e.indexOf(p)) !== (f = i.indexOf(p)) && (-1 === f ? o[a] = o[a].split(p).join("") : -1 === u && (o[a] += " " + p)));
                e = o.join(", "),
                i = l.join(", ")
            }
            return bt(t, this.p, e, i, this.clrs, this.dflt, r, this.pr, n, s)
        }
        ,
        h.parse = function(t, e, i, r, s, a, o) {
            return this.parseComplex(t.style, this.format(et(t, this.p, n, !1, this.dflt)), this.format(e), s, a)
        }
        ,
        a.registerSpecialProp = function(t, e, i) {
            St(t, {
                parser: function(t, r, n, s, a, o, l) {
                    var h = new Tt(t,n,0,0,a,2,n,!1,i);
                    return h.plugin = o,
                    h.setRatio = e(t, r, s._tween, n),
                    h
                },
                priority: i
            })
        }
        ,
        a.useSVGTransformAttr = !0;
        var Ct, At = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","), Mt = K("transform"), Rt = H + "transform", Ft = K("transformOrigin"), Dt = null !== K("perspective"), Xt = q.Transform = function() {
            this.perspective = parseFloat(a.defaultTransformPerspective) || 0,
            this.force3D = !(!1 === a.defaultForce3D || !Dt) && (a.defaultForce3D || "auto")
        }
        , zt = _gsScope.SVGElement, It = function(t, e, i) {
            var r, n = B.createElementNS("http://www.w3.org/2000/svg", t), s = /([a-z])([A-Z])/g;
            for (r in i)
                n.setAttributeNS(null, r.replace(s, "$1-$2").toLowerCase(), i[r]);
            return e.appendChild(n),
            n
        }, Et = B.documentElement || {}, Lt = function() {
            var t, e, i, r = d || /Android/i.test(G) && !_gsScope.chrome;
            return B.createElementNS && Et.appendChild && !r && (t = It("svg", Et),
            i = (e = It("rect", t, {
                width: 100,
                height: 50,
                x: 100
            })).getBoundingClientRect().width,
            e.style[Ft] = "50% 50%",
            e.style[Mt] = "scaleX(0.5)",
            r = i === e.getBoundingClientRect().width && !(_ && Dt),
            Et.removeChild(t)),
            r
        }(), Nt = function(t, e, i, r, n, s) {
            var o, l, h, u, f, p, _, c, d, m, g, v, y, x, T = t._gsTransform, w = Ut(t, !0);
            T && (y = T.xOrigin,
            x = T.yOrigin),
            (!r || (o = r.split(" ")).length < 2) && (0 === (_ = t.getBBox()).x && 0 === _.y && _.width + _.height === 0 && (_ = {
                x: parseFloat(t.hasAttribute("x") ? t.getAttribute("x") : t.hasAttribute("cx") ? t.getAttribute("cx") : 0) || 0,
                y: parseFloat(t.hasAttribute("y") ? t.getAttribute("y") : t.hasAttribute("cy") ? t.getAttribute("cy") : 0) || 0,
                width: 0,
                height: 0
            }),
            o = [(-1 !== (e = ht(e).split(" "))[0].indexOf("%") ? parseFloat(e[0]) / 100 * _.width : parseFloat(e[0])) + _.x, (-1 !== e[1].indexOf("%") ? parseFloat(e[1]) / 100 * _.height : parseFloat(e[1])) + _.y]),
            i.xOrigin = u = parseFloat(o[0]),
            i.yOrigin = f = parseFloat(o[1]),
            r && w !== Vt && (p = w[0],
            _ = w[1],
            c = w[2],
            d = w[3],
            m = w[4],
            g = w[5],
            (v = p * d - _ * c) && (l = u * (d / v) + f * (-c / v) + (c * g - d * m) / v,
            h = u * (-_ / v) + f * (p / v) - (p * g - _ * m) / v,
            u = i.xOrigin = o[0] = l,
            f = i.yOrigin = o[1] = h)),
            T && (s && (i.xOffset = T.xOffset,
            i.yOffset = T.yOffset,
            T = i),
            n || !1 !== n && !1 !== a.defaultSmoothOrigin ? (l = u - y,
            h = f - x,
            T.xOffset += l * w[0] + h * w[2] - l,
            T.yOffset += l * w[1] + h * w[3] - h) : T.xOffset = T.yOffset = 0),
            s || t.setAttribute("data-svg-origin", o.join(" "))
        }, Yt = function(t) {
            var e, i = j("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), r = this.parentNode, n = this.nextSibling, s = this.style.cssText;
            if (Et.appendChild(i),
            i.appendChild(this),
            this.style.display = "block",
            t)
                try {
                    e = this.getBBox(),
                    this._originalGetBBox = this.getBBox,
                    this.getBBox = Yt
                } catch (t) {}
            else
                this._originalGetBBox && (e = this._originalGetBBox());
            return n ? r.insertBefore(this, n) : r.appendChild(this),
            Et.removeChild(i),
            this.style.cssText = s,
            e
        }, Bt = function(t) {
            try {
                return t.getBBox()
            } catch (e) {
                return Yt.call(t, !0)
            }
        }, jt = function(t) {
            return !(!zt || !t.getCTM || t.parentNode && !t.ownerSVGElement || !Bt(t))
        }, Vt = [1, 0, 0, 1, 0, 0], Ut = function(t, e) {
            var i, r, n, s, a, o, l, h = t._gsTransform || new Xt, u = 1e5, f = t.style;
            if (Mt ? r = et(t, Rt, null, !0) : t.currentStyle && (r = (r = t.currentStyle.filter.match(D)) && 4 === r.length ? [r[0].substr(4), Number(r[2].substr(4)), Number(r[1].substr(4)), r[3].substr(4), h.x || 0, h.y || 0].join(",") : ""),
            i = !r || "none" === r || "matrix(1, 0, 0, 1, 0, 0)" === r,
            Mt && i && !t.offsetParent && t !== Et && (s = f.display,
            f.display = "block",
            (l = t.parentNode) && t.offsetParent || (a = 1,
            o = t.nextSibling,
            Et.appendChild(t)),
            i = !(r = et(t, Rt, null, !0)) || "none" === r || "matrix(1, 0, 0, 1, 0, 0)" === r,
            s ? f.display = s : Qt(f, "display"),
            a && (o ? l.insertBefore(t, o) : l ? l.appendChild(t) : Et.removeChild(t))),
            (h.svg || t.getCTM && jt(t)) && (i && -1 !== (f[Mt] + "").indexOf("matrix") && (r = f[Mt],
            i = 0),
            n = t.getAttribute("transform"),
            i && n && (r = "matrix(" + (n = t.transform.baseVal.consolidate().matrix).a + "," + n.b + "," + n.c + "," + n.d + "," + n.e + "," + n.f + ")",
            i = 0)),
            i)
                return Vt;
            for (n = (r || "").match(v) || [],
            Pt = n.length; --Pt > -1; )
                s = Number(n[Pt]),
                n[Pt] = (a = s - (s |= 0)) ? (a * u + (0 > a ? -.5 : .5) | 0) / u + s : s;
            return e && n.length > 6 ? [n[0], n[1], n[4], n[5], n[12], n[13]] : n
        }, qt = q.getTransform = function(t, i, r, n) {
            if (t._gsTransform && r && !n)
                return t._gsTransform;
            var s, o, l, h, u, f, p = r && t._gsTransform || new Xt, _ = p.scaleX < 0, c = 2e-5, d = 1e5, m = Dt && (parseFloat(et(t, Ft, i, !1, "0 0 0").split(" ")[2]) || p.zOrigin) || 0, g = parseFloat(a.defaultTransformPerspective) || 0;
            if (p.svg = !(!t.getCTM || !jt(t)),
            p.svg && (Nt(t, et(t, Ft, i, !1, "50% 50%") + "", p, t.getAttribute("data-svg-origin")),
            Ct = a.useSVGTransformAttr || Lt),
            (s = Ut(t)) !== Vt) {
                if (16 === s.length) {
                    var v, y, x, T, w, b = s[0], P = s[1], O = s[2], S = s[3], k = s[4], C = s[5], A = s[6], M = s[7], R = s[8], F = s[9], D = s[10], X = s[12], z = s[13], I = s[14], E = s[11], N = Math.atan2(A, D);
                    p.zOrigin && (X = R * (I = -p.zOrigin) - s[12],
                    z = F * I - s[13],
                    I = D * I + p.zOrigin - s[14]),
                    p.rotationX = N * L,
                    N && (v = k * (T = Math.cos(-N)) + R * (w = Math.sin(-N)),
                    y = C * T + F * w,
                    x = A * T + D * w,
                    R = k * -w + R * T,
                    F = C * -w + F * T,
                    D = A * -w + D * T,
                    E = M * -w + E * T,
                    k = v,
                    C = y,
                    A = x),
                    N = Math.atan2(-O, D),
                    p.rotationY = N * L,
                    N && (y = P * (T = Math.cos(-N)) - F * (w = Math.sin(-N)),
                    x = O * T - D * w,
                    F = P * w + F * T,
                    D = O * w + D * T,
                    E = S * w + E * T,
                    b = v = b * T - R * w,
                    P = y,
                    O = x),
                    N = Math.atan2(P, b),
                    p.rotation = N * L,
                    N && (v = b * (T = Math.cos(N)) + P * (w = Math.sin(N)),
                    y = k * T + C * w,
                    x = R * T + F * w,
                    P = P * T - b * w,
                    C = C * T - k * w,
                    F = F * T - R * w,
                    b = v,
                    k = y,
                    R = x),
                    p.rotationX && Math.abs(p.rotationX) + Math.abs(p.rotation) > 359.9 && (p.rotationX = p.rotation = 0,
                    p.rotationY = 180 - p.rotationY),
                    N = Math.atan2(k, C),
                    p.scaleX = (Math.sqrt(b * b + P * P + O * O) * d + .5 | 0) / d,
                    p.scaleY = (Math.sqrt(C * C + A * A) * d + .5 | 0) / d,
                    p.scaleZ = (Math.sqrt(R * R + F * F + D * D) * d + .5 | 0) / d,
                    b /= p.scaleX,
                    k /= p.scaleY,
                    P /= p.scaleX,
                    C /= p.scaleY,
                    Math.abs(N) > c ? (p.skewX = N * L,
                    k = 0,
                    "simple" !== p.skewType && (p.scaleY *= 1 / Math.cos(N))) : p.skewX = 0,
                    p.perspective = E ? 1 / (0 > E ? -E : E) : 0,
                    p.x = X,
                    p.y = z,
                    p.z = I,
                    p.svg && (p.x -= p.xOrigin - (p.xOrigin * b - p.yOrigin * k),
                    p.y -= p.yOrigin - (p.yOrigin * P - p.xOrigin * C))
                } else if (!Dt || n || !s.length || p.x !== s[4] || p.y !== s[5] || !p.rotationX && !p.rotationY) {
                    var Y = s.length >= 6
                      , B = Y ? s[0] : 1
                      , j = s[1] || 0
                      , V = s[2] || 0
                      , U = Y ? s[3] : 1;
                    p.x = s[4] || 0,
                    p.y = s[5] || 0,
                    l = Math.sqrt(B * B + j * j),
                    h = Math.sqrt(U * U + V * V),
                    u = B || j ? Math.atan2(j, B) * L : p.rotation || 0,
                    f = V || U ? Math.atan2(V, U) * L + u : p.skewX || 0,
                    p.scaleX = l,
                    p.scaleY = h,
                    p.rotation = u,
                    p.skewX = f,
                    Dt && (p.rotationX = p.rotationY = p.z = 0,
                    p.perspective = g,
                    p.scaleZ = 1),
                    p.svg && (p.x -= p.xOrigin - (p.xOrigin * B + p.yOrigin * V),
                    p.y -= p.yOrigin - (p.xOrigin * j + p.yOrigin * U))
                }
                for (o in Math.abs(p.skewX) > 90 && Math.abs(p.skewX) < 270 && (_ ? (p.scaleX *= -1,
                p.skewX += p.rotation <= 0 ? 180 : -180,
                p.rotation += p.rotation <= 0 ? 180 : -180) : (p.scaleY *= -1,
                p.skewX += p.skewX <= 0 ? 180 : -180)),
                p.zOrigin = m,
                p)
                    p[o] < c && p[o] > -c && (p[o] = 0)
            }
            return r && (t._gsTransform = p,
            p.svg && (Ct && t.style[Mt] ? e.delayedCall(.001, function() {
                Qt(t.style, Mt)
            }) : !Ct && t.getAttribute("transform") && e.delayedCall(.001, function() {
                t.removeAttribute("transform")
            }))),
            p
        }
        , Gt = function(t) {
            var e, i, r = this.data, n = -r.rotation * E, s = n + r.skewX * E, a = 1e5, o = (Math.cos(n) * r.scaleX * a | 0) / a, l = (Math.sin(n) * r.scaleX * a | 0) / a, h = (Math.sin(s) * -r.scaleY * a | 0) / a, u = (Math.cos(s) * r.scaleY * a | 0) / a, f = this.t.style, p = this.t.currentStyle;
            if (p) {
                i = l,
                l = -h,
                h = -i,
                e = p.filter,
                f.filter = "";
                var _, c, m = this.t.offsetWidth, g = this.t.offsetHeight, v = "absolute" !== p.position, y = "progid:DXImageTransform.Microsoft.Matrix(M11=" + o + ", M12=" + l + ", M21=" + h + ", M22=" + u, x = r.x + m * r.xPercent / 100, T = r.y + g * r.yPercent / 100;
                if (null != r.ox && (x += (_ = (r.oxp ? m * r.ox * .01 : r.ox) - m / 2) - (_ * o + (c = (r.oyp ? g * r.oy * .01 : r.oy) - g / 2) * l),
                T += c - (_ * h + c * u)),
                v ? y += ", Dx=" + ((_ = m / 2) - (_ * o + (c = g / 2) * l) + x) + ", Dy=" + (c - (_ * h + c * u) + T) + ")" : y += ", sizingMethod='auto expand')",
                -1 !== e.indexOf("DXImageTransform.Microsoft.Matrix(") ? f.filter = e.replace(X, y) : f.filter = y + " " + e,
                (0 === t || 1 === t) && 1 === o && 0 === l && 0 === h && 1 === u && (v && -1 === y.indexOf("Dx=0, Dy=0") || P.test(e) && 100 !== parseFloat(RegExp.$1) || -1 === e.indexOf(e.indexOf("Alpha")) && f.removeAttribute("filter")),
                !v) {
                    var w, O, S, k = 8 > d ? 1 : -1;
                    for (_ = r.ieOffsetX || 0,
                    c = r.ieOffsetY || 0,
                    r.ieOffsetX = Math.round((m - ((0 > o ? -o : o) * m + (0 > l ? -l : l) * g)) / 2 + x),
                    r.ieOffsetY = Math.round((g - ((0 > u ? -u : u) * g + (0 > h ? -h : h) * m)) / 2 + T),
                    Pt = 0; 4 > Pt; Pt++)
                        S = (i = -1 !== (w = p[O = ot[Pt]]).indexOf("px") ? parseFloat(w) : it(this.t, O, parseFloat(w), w.replace(b, "")) || 0) !== r[O] ? 2 > Pt ? -r.ieOffsetX : -r.ieOffsetY : 2 > Pt ? _ - r.ieOffsetX : c - r.ieOffsetY,
                        f[O] = (r[O] = Math.round(i - S * (0 === Pt || 2 === Pt ? 1 : k))) + "px"
                }
            }
        }, Wt = q.set3DTransformRatio = q.setTransformRatio = function(t) {
            var e, i, r, n, s, a, o, l, h, u, f, p, c, d, m, g, v, y, x, T, w, b, P, O = this.data, S = this.t.style, k = O.rotation, C = O.rotationX, A = O.rotationY, M = O.scaleX, R = O.scaleY, F = O.scaleZ, D = O.x, X = O.y, z = O.z, I = O.svg, L = O.perspective, N = O.force3D, Y = O.skewY, B = O.skewX;
            if (Y && (B += Y,
            k += Y),
            !((1 !== t && 0 !== t || "auto" !== N || this.tween._totalTime !== this.tween._totalDuration && this.tween._totalTime) && N || z || L || A || C || 1 !== F) || Ct && I || !Dt)
                k || B || I ? (k *= E,
                b = B * E,
                P = 1e5,
                i = Math.cos(k) * M,
                s = Math.sin(k) * M,
                r = Math.sin(k - b) * -R,
                a = Math.cos(k - b) * R,
                b && "simple" === O.skewType && (e = Math.tan(b - Y * E),
                r *= e = Math.sqrt(1 + e * e),
                a *= e,
                Y && (e = Math.tan(Y * E),
                i *= e = Math.sqrt(1 + e * e),
                s *= e)),
                I && (D += O.xOrigin - (O.xOrigin * i + O.yOrigin * r) + O.xOffset,
                X += O.yOrigin - (O.xOrigin * s + O.yOrigin * a) + O.yOffset,
                Ct && (O.xPercent || O.yPercent) && (m = this.t.getBBox(),
                D += .01 * O.xPercent * m.width,
                X += .01 * O.yPercent * m.height),
                (m = 1e-6) > D && D > -m && (D = 0),
                m > X && X > -m && (X = 0)),
                x = (i * P | 0) / P + "," + (s * P | 0) / P + "," + (r * P | 0) / P + "," + (a * P | 0) / P + "," + D + "," + X + ")",
                I && Ct ? this.t.setAttribute("transform", "matrix(" + x) : S[Mt] = (O.xPercent || O.yPercent ? "translate(" + O.xPercent + "%," + O.yPercent + "%) matrix(" : "matrix(") + x) : S[Mt] = (O.xPercent || O.yPercent ? "translate(" + O.xPercent + "%," + O.yPercent + "%) matrix(" : "matrix(") + M + ",0,0," + R + "," + D + "," + X + ")";
            else {
                if (_ && ((m = 1e-4) > M && M > -m && (M = F = 2e-5),
                m > R && R > -m && (R = F = 2e-5),
                !L || O.z || O.rotationX || O.rotationY || (L = 0)),
                k || B)
                    k *= E,
                    g = i = Math.cos(k),
                    v = s = Math.sin(k),
                    B && (k -= B * E,
                    g = Math.cos(k),
                    v = Math.sin(k),
                    "simple" === O.skewType && (e = Math.tan((B - Y) * E),
                    g *= e = Math.sqrt(1 + e * e),
                    v *= e,
                    O.skewY && (e = Math.tan(Y * E),
                    i *= e = Math.sqrt(1 + e * e),
                    s *= e))),
                    r = -v,
                    a = g;
                else {
                    if (!(A || C || 1 !== F || L || I))
                        return void (S[Mt] = (O.xPercent || O.yPercent ? "translate(" + O.xPercent + "%," + O.yPercent + "%) translate3d(" : "translate3d(") + D + "px," + X + "px," + z + "px)" + (1 !== M || 1 !== R ? " scale(" + M + "," + R + ")" : ""));
                    i = a = 1,
                    r = s = 0
                }
                u = 1,
                n = o = l = h = f = p = 0,
                c = L ? -1 / L : 0,
                d = O.zOrigin,
                m = 1e-6,
                T = ",",
                w = "0",
                (k = A * E) && (g = Math.cos(k),
                l = -(v = Math.sin(k)),
                f = c * -v,
                n = i * v,
                o = s * v,
                u = g,
                c *= g,
                i *= g,
                s *= g),
                (k = C * E) && (e = r * (g = Math.cos(k)) + n * (v = Math.sin(k)),
                y = a * g + o * v,
                h = u * v,
                p = c * v,
                n = r * -v + n * g,
                o = a * -v + o * g,
                u *= g,
                c *= g,
                r = e,
                a = y),
                1 !== F && (n *= F,
                o *= F,
                u *= F,
                c *= F),
                1 !== R && (r *= R,
                a *= R,
                h *= R,
                p *= R),
                1 !== M && (i *= M,
                s *= M,
                l *= M,
                f *= M),
                (d || I) && (d && (D += n * -d,
                X += o * -d,
                z += u * -d + d),
                I && (D += O.xOrigin - (O.xOrigin * i + O.yOrigin * r) + O.xOffset,
                X += O.yOrigin - (O.xOrigin * s + O.yOrigin * a) + O.yOffset),
                m > D && D > -m && (D = w),
                m > X && X > -m && (X = w),
                m > z && z > -m && (z = 0)),
                x = O.xPercent || O.yPercent ? "translate(" + O.xPercent + "%," + O.yPercent + "%) matrix3d(" : "matrix3d(",
                x += (m > i && i > -m ? w : i) + T + (m > s && s > -m ? w : s) + T + (m > l && l > -m ? w : l),
                x += T + (m > f && f > -m ? w : f) + T + (m > r && r > -m ? w : r) + T + (m > a && a > -m ? w : a),
                C || A || 1 !== F ? (x += T + (m > h && h > -m ? w : h) + T + (m > p && p > -m ? w : p) + T + (m > n && n > -m ? w : n),
                x += T + (m > o && o > -m ? w : o) + T + (m > u && u > -m ? w : u) + T + (m > c && c > -m ? w : c) + T) : x += ",0,0,0,0,1,0,",
                x += D + T + X + T + z + T + (L ? 1 + -z / L : 1) + ")",
                S[Mt] = x
            }
        }
        ;
        (h = Xt.prototype).x = h.y = h.z = h.skewX = h.skewY = h.rotation = h.rotationX = h.rotationY = h.zOrigin = h.xPercent = h.yPercent = h.xOffset = h.yOffset = 0,
        h.scaleX = h.scaleY = h.scaleZ = 1,
        St("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {
            parser: function(t, e, i, r, s, o, l) {
                if (r._lastParsedTransform === l)
                    return s;
                r._lastParsedTransform = l;
                var h = l.scale && "function" == typeof l.scale ? l.scale : 0;
                h && (l.scale = h(g, t));
                var u, f, p, _, c, d, v, y, x, T = t._gsTransform, w = t.style, b = 1e-6, P = At.length, O = l, S = {}, k = "transformOrigin", C = qt(t, n, !0, O.parseTransform), A = O.transform && ("function" == typeof O.transform ? O.transform(g, m) : O.transform);
                if (C.skewType = O.skewType || C.skewType || a.defaultSkewType,
                r._transform = C,
                "rotationZ"in O && (O.rotation = O.rotationZ),
                A && "string" == typeof A && Mt)
                    (f = V.style)[Mt] = A,
                    f.display = "block",
                    f.position = "absolute",
                    -1 !== A.indexOf("%") && (f.width = et(t, "width"),
                    f.height = et(t, "height")),
                    B.body.appendChild(V),
                    u = qt(V, null, !1),
                    "simple" === C.skewType && (u.scaleY *= Math.cos(u.skewX * E)),
                    C.svg && (d = C.xOrigin,
                    v = C.yOrigin,
                    u.x -= C.xOffset,
                    u.y -= C.yOffset,
                    (O.transformOrigin || O.svgOrigin) && (A = {},
                    Nt(t, ht(O.transformOrigin), A, O.svgOrigin, O.smoothOrigin, !0),
                    d = A.xOrigin,
                    v = A.yOrigin,
                    u.x -= A.xOffset - C.xOffset,
                    u.y -= A.yOffset - C.yOffset),
                    (d || v) && (y = Ut(V, !0),
                    u.x -= d - (d * y[0] + v * y[2]),
                    u.y -= v - (d * y[1] + v * y[3]))),
                    B.body.removeChild(V),
                    u.perspective || (u.perspective = C.perspective),
                    null != O.xPercent && (u.xPercent = ft(O.xPercent, C.xPercent)),
                    null != O.yPercent && (u.yPercent = ft(O.yPercent, C.yPercent));
                else if ("object" == typeof O) {
                    if (u = {
                        scaleX: ft(null != O.scaleX ? O.scaleX : O.scale, C.scaleX),
                        scaleY: ft(null != O.scaleY ? O.scaleY : O.scale, C.scaleY),
                        scaleZ: ft(O.scaleZ, C.scaleZ),
                        x: ft(O.x, C.x),
                        y: ft(O.y, C.y),
                        z: ft(O.z, C.z),
                        xPercent: ft(O.xPercent, C.xPercent),
                        yPercent: ft(O.yPercent, C.yPercent),
                        perspective: ft(O.transformPerspective, C.perspective)
                    },
                    null != (c = O.directionalRotation))
                        if ("object" == typeof c)
                            for (f in c)
                                O[f] = c[f];
                        else
                            O.rotation = c;
                    "string" == typeof O.x && -1 !== O.x.indexOf("%") && (u.x = 0,
                    u.xPercent = ft(O.x, C.xPercent)),
                    "string" == typeof O.y && -1 !== O.y.indexOf("%") && (u.y = 0,
                    u.yPercent = ft(O.y, C.yPercent)),
                    u.rotation = pt("rotation"in O ? O.rotation : "shortRotation"in O ? O.shortRotation + "_short" : C.rotation, C.rotation, "rotation", S),
                    Dt && (u.rotationX = pt("rotationX"in O ? O.rotationX : "shortRotationX"in O ? O.shortRotationX + "_short" : C.rotationX || 0, C.rotationX, "rotationX", S),
                    u.rotationY = pt("rotationY"in O ? O.rotationY : "shortRotationY"in O ? O.shortRotationY + "_short" : C.rotationY || 0, C.rotationY, "rotationY", S)),
                    u.skewX = pt(O.skewX, C.skewX),
                    u.skewY = pt(O.skewY, C.skewY)
                }
                for (Dt && null != O.force3D && (C.force3D = O.force3D,
                _ = !0),
                (p = C.force3D || C.z || C.rotationX || C.rotationY || u.z || u.rotationX || u.rotationY || u.perspective) || null == O.scale || (u.scaleZ = 1); --P > -1; )
                    ((A = u[x = At[P]] - C[x]) > b || -b > A || null != O[x] || null != N[x]) && (_ = !0,
                    s = new Tt(C,x,C[x],A,s),
                    x in S && (s.e = S[x]),
                    s.xs0 = 0,
                    s.plugin = o,
                    r._overwriteProps.push(s.n));
                return A = "function" == typeof O.transformOrigin ? O.transformOrigin(g, m) : O.transformOrigin,
                C.svg && (A || O.svgOrigin) && (d = C.xOffset,
                v = C.yOffset,
                Nt(t, ht(A), u, O.svgOrigin, O.smoothOrigin),
                s = wt(C, "xOrigin", (T ? C : u).xOrigin, u.xOrigin, s, k),
                s = wt(C, "yOrigin", (T ? C : u).yOrigin, u.yOrigin, s, k),
                (d !== C.xOffset || v !== C.yOffset) && (s = wt(C, "xOffset", T ? d : C.xOffset, C.xOffset, s, k),
                s = wt(C, "yOffset", T ? v : C.yOffset, C.yOffset, s, k)),
                A = "0px 0px"),
                (A || Dt && p && C.zOrigin) && (Mt ? (_ = !0,
                x = Ft,
                A || (A = (A = (et(t, x, n, !1, "50% 50%") + "").split(" "))[0] + " " + A[1] + " " + C.zOrigin + "px"),
                A += "",
                (s = new Tt(w,x,0,0,s,-1,k)).b = w[x],
                s.plugin = o,
                Dt ? (f = C.zOrigin,
                A = A.split(" "),
                C.zOrigin = (A.length > 2 ? parseFloat(A[2]) : f) || 0,
                s.xs0 = s.e = A[0] + " " + (A[1] || "50%") + " 0px",
                (s = new Tt(C,"zOrigin",0,0,s,-1,s.n)).b = f,
                s.xs0 = s.e = C.zOrigin) : s.xs0 = s.e = A) : ht(A + "", C)),
                _ && (r._transformType = C.svg && Ct || !p && 3 !== this._transformType ? 2 : 3),
                h && (l.scale = h),
                s
            },
            allowFunc: !0,
            prefix: !0
        }),
        St("boxShadow", {
            defaultValue: "0px 0px 0px 0px #999",
            prefix: !0,
            color: !0,
            multi: !0,
            keyword: "inset"
        }),
        St("clipPath", {
            defaultValue: "inset(0%)",
            prefix: !0,
            multi: !0,
            formatter: vt("inset(0% 0% 0% 0%)", !1, !0)
        }),
        St("borderRadius", {
            defaultValue: "0px",
            parser: function(t, e, i, s, a, o) {
                e = this.format(e);
                var l, h, u, f, p, _, c, d, m, g, v, y, x, T, w, b, P = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"], O = t.style;
                for (m = parseFloat(t.offsetWidth),
                g = parseFloat(t.offsetHeight),
                l = e.split(" "),
                h = 0; h < P.length; h++)
                    this.p.indexOf("border") && (P[h] = K(P[h])),
                    -1 !== (p = f = et(t, P[h], n, !1, "0px")).indexOf(" ") && (f = p.split(" "),
                    p = f[0],
                    f = f[1]),
                    _ = u = l[h],
                    c = parseFloat(p),
                    y = p.substr((c + "").length),
                    (x = "=" === _.charAt(1)) ? (d = parseInt(_.charAt(0) + "1", 10),
                    _ = _.substr(2),
                    d *= parseFloat(_),
                    v = _.substr((d + "").length - (0 > d ? 1 : 0)) || "") : (d = parseFloat(_),
                    v = _.substr((d + "").length)),
                    "" === v && (v = r[i] || y),
                    v !== y && (T = it(t, "borderLeft", c, y),
                    w = it(t, "borderTop", c, y),
                    "%" === v ? (p = T / m * 100 + "%",
                    f = w / g * 100 + "%") : "em" === v ? (p = T / (b = it(t, "borderLeft", 1, "em")) + "em",
                    f = w / b + "em") : (p = T + "px",
                    f = w + "px"),
                    x && (_ = parseFloat(p) + d + v,
                    u = parseFloat(f) + d + v)),
                    a = bt(O, P[h], p + " " + f, _ + " " + u, !1, "0px", a);
                return a
            },
            prefix: !0,
            formatter: vt("0px 0px 0px 0px", !1, !0)
        }),
        St("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius", {
            defaultValue: "0px",
            parser: function(t, e, i, r, s, a) {
                return bt(t.style, i, this.format(et(t, i, n, !1, "0px 0px")), this.format(e), !1, "0px", s)
            },
            prefix: !0,
            formatter: vt("0px 0px", !1, !0)
        }),
        St("backgroundPosition", {
            defaultValue: "0 0",
            parser: function(t, e, i, r, s, a) {
                var o, l, h, u, f, p, _ = "background-position", c = n || tt(t, null), m = this.format((c ? d ? c.getPropertyValue(_ + "-x") + " " + c.getPropertyValue(_ + "-y") : c.getPropertyValue(_) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"), g = this.format(e);
                if (-1 !== m.indexOf("%") != (-1 !== g.indexOf("%")) && g.split(",").length < 2 && ((p = et(t, "backgroundImage").replace(M, "")) && "none" !== p)) {
                    for (o = m.split(" "),
                    l = g.split(" "),
                    U.setAttribute("src", p),
                    h = 2; --h > -1; )
                        (u = -1 !== (m = o[h]).indexOf("%")) !== (-1 !== l[h].indexOf("%")) && (f = 0 === h ? t.offsetWidth - U.width : t.offsetHeight - U.height,
                        o[h] = u ? parseFloat(m) / 100 * f + "px" : parseFloat(m) / f * 100 + "%");
                    m = o.join(" ")
                }
                return this.parseComplex(t.style, m, g, s, a)
            },
            formatter: ht
        }),
        St("backgroundSize", {
            defaultValue: "0 0",
            formatter: function(t) {
                return "co" === (t += "").substr(0, 2) ? t : ht(-1 === t.indexOf(" ") ? t + " " + t : t)
            }
        }),
        St("perspective", {
            defaultValue: "0px",
            prefix: !0
        }),
        St("perspectiveOrigin", {
            defaultValue: "50% 50%",
            prefix: !0
        }),
        St("transformStyle", {
            prefix: !0
        }),
        St("backfaceVisibility", {
            prefix: !0
        }),
        St("userSelect", {
            prefix: !0
        }),
        St("margin", {
            parser: yt("marginTop,marginRight,marginBottom,marginLeft")
        }),
        St("padding", {
            parser: yt("paddingTop,paddingRight,paddingBottom,paddingLeft")
        }),
        St("clip", {
            defaultValue: "rect(0px,0px,0px,0px)",
            parser: function(t, e, i, r, s, a) {
                var o, l, h;
                return 9 > d ? (l = t.currentStyle,
                h = 8 > d ? " " : ",",
                o = "rect(" + l.clipTop + h + l.clipRight + h + l.clipBottom + h + l.clipLeft + ")",
                e = this.format(e).split(",").join(h)) : (o = this.format(et(t, this.p, n, !1, this.dflt)),
                e = this.format(e)),
                this.parseComplex(t.style, o, e, s, a)
            }
        }),
        St("textShadow", {
            defaultValue: "0px 0px 0px #999",
            color: !0,
            multi: !0
        }),
        St("autoRound,strictUnits", {
            parser: function(t, e, i, r, n) {
                return n
            }
        }),
        St("border", {
            defaultValue: "0px solid #000",
            parser: function(t, e, i, r, s, a) {
                var o = et(t, "borderTopWidth", n, !1, "0px")
                  , l = this.format(e).split(" ")
                  , h = l[0].replace(b, "");
                return "px" !== h && (o = parseFloat(o) / it(t, "borderTopWidth", 1, h) + h),
                this.parseComplex(t.style, this.format(o + " " + et(t, "borderTopStyle", n, !1, "solid") + " " + et(t, "borderTopColor", n, !1, "#000")), l.join(" "), s, a)
            },
            color: !0,
            formatter: function(t) {
                var e = t.split(" ");
                return e[0] + " " + (e[1] || "solid") + " " + (t.match(gt) || ["#000"])[0]
            }
        }),
        St("borderWidth", {
            parser: yt("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
        }),
        St("float,cssFloat,styleFloat", {
            parser: function(t, e, i, r, n, s) {
                var a = t.style
                  , o = "cssFloat"in a ? "cssFloat" : "styleFloat";
                return new Tt(a,o,0,0,n,-1,i,!1,0,a[o],e)
            }
        });
        var Zt = function(t) {
            var e, i = this.t, r = i.filter || et(this.data, "filter") || "", n = this.s + this.c * t | 0;
            100 === n && (-1 === r.indexOf("atrix(") && -1 === r.indexOf("radient(") && -1 === r.indexOf("oader(") ? (i.removeAttribute("filter"),
            e = !et(this.data, "filter")) : (i.filter = r.replace(S, ""),
            e = !0)),
            e || (this.xn1 && (i.filter = r = r || "alpha(opacity=" + n + ")"),
            -1 === r.indexOf("pacity") ? 0 === n && this.xn1 || (i.filter = r + " alpha(opacity=" + n + ")") : i.filter = r.replace(P, "opacity=" + n))
        };
        St("opacity,alpha,autoAlpha", {
            defaultValue: "1",
            parser: function(t, e, i, r, s, a) {
                var o = parseFloat(et(t, "opacity", n, !1, "1"))
                  , l = t.style
                  , h = "autoAlpha" === i;
                return "string" == typeof e && "=" === e.charAt(1) && (e = ("-" === e.charAt(0) ? -1 : 1) * parseFloat(e.substr(2)) + o),
                h && 1 === o && "hidden" === et(t, "visibility", n) && 0 !== e && (o = 0),
                W ? s = new Tt(l,"opacity",o,e - o,s) : ((s = new Tt(l,"opacity",100 * o,100 * (e - o),s)).xn1 = h ? 1 : 0,
                l.zoom = 1,
                s.type = 2,
                s.b = "alpha(opacity=" + s.s + ")",
                s.e = "alpha(opacity=" + (s.s + s.c) + ")",
                s.data = t,
                s.plugin = a,
                s.setRatio = Zt),
                h && ((s = new Tt(l,"visibility",0,0,s,-1,null,!1,0,0 !== o ? "inherit" : "hidden",0 === e ? "hidden" : "inherit")).xs0 = "inherit",
                r._overwriteProps.push(s.n),
                r._overwriteProps.push(i)),
                s
            }
        });
        var Qt = function(t, e) {
            e && (t.removeProperty ? (("ms" === e.substr(0, 2) || "webkit" === e.substr(0, 6)) && (e = "-" + e),
            t.removeProperty(e.replace(C, "-$1").toLowerCase())) : t.removeAttribute(e))
        }
          , Ht = function(t) {
            if (this.t._gsClassPT = this,
            1 === t || 0 === t) {
                this.t.setAttribute("class", 0 === t ? this.b : this.e);
                for (var e = this.data, i = this.t.style; e; )
                    e.v ? i[e.p] = e.v : Qt(i, e.p),
                    e = e._next;
                1 === t && this.t._gsClassPT === this && (this.t._gsClassPT = null)
            } else
                this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
        };
        St("className", {
            parser: function(t, e, r, s, a, o, l) {
                var h, u, f, p, _, c = t.getAttribute("class") || "", d = t.style.cssText;
                if ((a = s._classNamePT = new Tt(t,r,0,0,a,2)).setRatio = Ht,
                a.pr = -11,
                i = !0,
                a.b = c,
                u = nt(t, n),
                f = t._gsClassPT) {
                    for (p = {},
                    _ = f.data; _; )
                        p[_.p] = 1,
                        _ = _._next;
                    f.setRatio(1)
                }
                return t._gsClassPT = a,
                a.e = "=" !== e.charAt(1) ? e : c.replace(new RegExp("(?:\\s|^)" + e.substr(2) + "(?![\\w-])"), "") + ("+" === e.charAt(0) ? " " + e.substr(2) : ""),
                t.setAttribute("class", a.e),
                h = st(t, u, nt(t), l, p),
                t.setAttribute("class", c),
                a.data = h.firstMPT,
                t.style.cssText !== d && (t.style.cssText = d),
                a = a.xfirst = s.parse(t, h.difs, a, o)
            }
        });
        var $t = function(t) {
            if ((1 === t || 0 === t) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                var e, i, r, n, s, a = this.t.style, o = l.transform.parse;
                if ("all" === this.e)
                    a.cssText = "",
                    n = !0;
                else
                    for (r = (e = this.e.split(" ").join("").split(",")).length; --r > -1; )
                        i = e[r],
                        l[i] && (l[i].parse === o ? n = !0 : i = "transformOrigin" === i ? Ft : l[i].p),
                        Qt(a, i);
                n && (Qt(a, Mt),
                (s = this.t._gsTransform) && (s.svg && (this.t.removeAttribute("data-svg-origin"),
                this.t.removeAttribute("transform")),
                delete this.t._gsTransform))
            }
        };
        for (St("clearProps", {
            parser: function(t, e, r, n, s) {
                return (s = new Tt(t,r,0,0,s,2)).setRatio = $t,
                s.e = e,
                s.pr = -10,
                s.data = n._tween,
                i = !0,
                s
            }
        }),
        h = "bezier,throwProps,physicsProps,physics2D".split(","),
        Pt = h.length; Pt--; )
            kt(h[Pt]);
        (h = a.prototype)._firstPT = h._lastParsedTransform = h._transform = null,
        h._onInitTween = function(t, e, o, h) {
            if (!t.nodeType)
                return !1;
            this._target = m = t,
            this._tween = o,
            this._vars = e,
            g = h,
            u = e.autoRound,
            i = !1,
            r = e.suffixMap || a.suffixMap,
            n = tt(t, ""),
            s = this._overwriteProps;
            var _, d, v, y, x, T, w, b, P, S = t.style;
            if (f && "" === S.zIndex && (("auto" === (_ = et(t, "zIndex", n)) || "" === _) && this._addLazySet(S, "zIndex", 0)),
            "string" == typeof e && (y = S.cssText,
            _ = nt(t, n),
            S.cssText = y + ";" + e,
            _ = st(t, _, nt(t)).difs,
            !W && O.test(e) && (_.opacity = parseFloat(RegExp.$1)),
            e = _,
            S.cssText = y),
            e.className ? this._firstPT = d = l.className.parse(t, e.className, "className", this, null, null, e) : this._firstPT = d = this.parse(t, e, null),
            this._transformType) {
                for (P = 3 === this._transformType,
                Mt ? p && (f = !0,
                "" === S.zIndex && (("auto" === (w = et(t, "zIndex", n)) || "" === w) && this._addLazySet(S, "zIndex", 0)),
                c && this._addLazySet(S, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (P ? "visible" : "hidden"))) : S.zoom = 1,
                v = d; v && v._next; )
                    v = v._next;
                b = new Tt(t,"transform",0,0,null,2),
                this._linkCSSP(b, null, v),
                b.setRatio = Mt ? Wt : Gt,
                b.data = this._transform || qt(t, n, !0),
                b.tween = o,
                b.pr = -1,
                s.pop()
            }
            if (i) {
                for (; d; ) {
                    for (T = d._next,
                    v = y; v && v.pr > d.pr; )
                        v = v._next;
                    (d._prev = v ? v._prev : x) ? d._prev._next = d : y = d,
                    (d._next = v) ? v._prev = d : x = d,
                    d = T
                }
                this._firstPT = y
            }
            return !0
        }
        ,
        h.parse = function(t, e, i, s) {
            var a, o, h, f, p, _, c, d, v, y, x = t.style;
            for (a in e) {
                if (_ = e[a],
                o = l[a],
                "function" != typeof _ || o && o.allowFunc || (_ = _(g, m)),
                o)
                    i = o.parse(t, _, a, this, i, s, e);
                else {
                    if ("--" === a.substr(0, 2)) {
                        this._tween._propLookup[a] = this._addTween.call(this._tween, t.style, "setProperty", tt(t).getPropertyValue(a) + "", _ + "", a, !1, a);
                        continue
                    }
                    p = et(t, a, n) + "",
                    v = "string" == typeof _,
                    "color" === a || "fill" === a || "stroke" === a || -1 !== a.indexOf("Color") || v && k.test(_) ? (v || (_ = ((_ = dt(_)).length > 3 ? "rgba(" : "rgb(") + _.join(",") + ")"),
                    i = bt(x, a, p, _, !0, "transparent", i, 0, s)) : v && I.test(_) ? i = bt(x, a, p, _, !0, null, i, 0, s) : (c = (h = parseFloat(p)) || 0 === h ? p.substr((h + "").length) : "",
                    ("" === p || "auto" === p) && ("width" === a || "height" === a ? (h = lt(t, a, n),
                    c = "px") : "left" === a || "top" === a ? (h = rt(t, a, n),
                    c = "px") : (h = "opacity" !== a ? 0 : 1,
                    c = "")),
                    (y = v && "=" === _.charAt(1)) ? (f = parseInt(_.charAt(0) + "1", 10),
                    _ = _.substr(2),
                    f *= parseFloat(_),
                    d = _.replace(b, "")) : (f = parseFloat(_),
                    d = v ? _.replace(b, "") : ""),
                    "" === d && (d = a in r ? r[a] : c),
                    _ = f || 0 === f ? (y ? f + h : f) + d : e[a],
                    c !== d && ("" !== d || "lineHeight" === a) && (f || 0 === f) && h && (h = it(t, a, h, c),
                    "%" === d ? (h /= it(t, a, 100, "%") / 100,
                    !0 !== e.strictUnits && (p = h + "%")) : "em" === d || "rem" === d || "vw" === d || "vh" === d ? h /= it(t, a, 1, d) : "px" !== d && (f = it(t, a, f, d),
                    d = "px"),
                    y && (f || 0 === f) && (_ = f + h + d)),
                    y && (f += h),
                    !h && 0 !== h || !f && 0 !== f ? void 0 !== x[a] && (_ || _ + "" != "NaN" && null != _) ? (i = new Tt(x,a,f || h || 0,0,i,-1,a,!1,0,p,_)).xs0 = "none" !== _ || "display" !== a && -1 === a.indexOf("Style") ? _ : p : Q("invalid " + a + " tween value: " + e[a]) : (i = new Tt(x,a,h,f - h,i,0,a,!1 !== u && ("px" === d || "zIndex" === a),0,p,_)).xs0 = d)
                }
                s && i && !i.plugin && (i.plugin = s)
            }
            return i
        }
        ,
        h.setRatio = function(t) {
            var e, i, r, n = this._firstPT, s = 1e-6;
            if (1 !== t || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
                if (t || this._tween._time !== this._tween._duration && 0 !== this._tween._time || -1e-6 === this._tween._rawPrevTime)
                    for (; n; ) {
                        if (e = n.c * t + n.s,
                        n.r ? e = n.r(e) : s > e && e > -s && (e = 0),
                        n.type)
                            if (1 === n.type)
                                if (2 === (r = n.l))
                                    n.t[n.p] = n.xs0 + e + n.xs1 + n.xn1 + n.xs2;
                                else if (3 === r)
                                    n.t[n.p] = n.xs0 + e + n.xs1 + n.xn1 + n.xs2 + n.xn2 + n.xs3;
                                else if (4 === r)
                                    n.t[n.p] = n.xs0 + e + n.xs1 + n.xn1 + n.xs2 + n.xn2 + n.xs3 + n.xn3 + n.xs4;
                                else if (5 === r)
                                    n.t[n.p] = n.xs0 + e + n.xs1 + n.xn1 + n.xs2 + n.xn2 + n.xs3 + n.xn3 + n.xs4 + n.xn4 + n.xs5;
                                else {
                                    for (i = n.xs0 + e + n.xs1,
                                    r = 1; r < n.l; r++)
                                        i += n["xn" + r] + n["xs" + (r + 1)];
                                    n.t[n.p] = i
                                }
                            else
                                -1 === n.type ? n.t[n.p] = n.xs0 : n.setRatio && n.setRatio(t);
                        else
                            n.t[n.p] = e + n.xs0;
                        n = n._next
                    }
                else
                    for (; n; )
                        2 !== n.type ? n.t[n.p] = n.b : n.setRatio(t),
                        n = n._next;
            else
                for (; n; ) {
                    if (2 !== n.type)
                        if (n.r && -1 !== n.type)
                            if (e = n.r(n.s + n.c),
                            n.type) {
                                if (1 === n.type) {
                                    for (r = n.l,
                                    i = n.xs0 + e + n.xs1,
                                    r = 1; r < n.l; r++)
                                        i += n["xn" + r] + n["xs" + (r + 1)];
                                    n.t[n.p] = i
                                }
                            } else
                                n.t[n.p] = e + n.xs0;
                        else
                            n.t[n.p] = n.e;
                    else
                        n.setRatio(t);
                    n = n._next
                }
        }
        ,
        h._enableTransforms = function(t) {
            this._transform = this._transform || qt(this._target, n, !0),
            this._transformType = this._transform.svg && Ct || !t && 3 !== this._transformType ? 2 : 3
        }
        ;
        var Kt = function(t) {
            this.t[this.p] = this.e,
            this.data._linkCSSP(this, this._next, null, !0)
        };
        h._addLazySet = function(t, e, i) {
            var r = this._firstPT = new Tt(t,e,0,0,this._firstPT,2);
            r.e = i,
            r.setRatio = Kt,
            r.data = this
        }
        ,
        h._linkCSSP = function(t, e, i, r) {
            return t && (e && (e._prev = t),
            t._next && (t._next._prev = t._prev),
            t._prev ? t._prev._next = t._next : this._firstPT === t && (this._firstPT = t._next,
            r = !0),
            i ? i._next = t : r || null !== this._firstPT || (this._firstPT = t),
            t._next = e,
            t._prev = i),
            t
        }
        ,
        h._mod = function(t) {
            for (var e = this._firstPT; e; )
                "function" == typeof t[e.p] && (e.r = t[e.p]),
                e = e._next
        }
        ,
        h._kill = function(e) {
            var i, r, n, s = e;
            if (e.autoAlpha || e.alpha) {
                for (r in s = {},
                e)
                    s[r] = e[r];
                s.opacity = 1,
                s.autoAlpha && (s.visibility = 1)
            }
            for (e.className && (i = this._classNamePT) && ((n = i.xfirst) && n._prev ? this._linkCSSP(n._prev, i._next, n._prev._prev) : n === this._firstPT && (this._firstPT = i._next),
            i._next && this._linkCSSP(i._next, i._next._next, n._prev),
            this._classNamePT = null),
            i = this._firstPT; i; )
                i.plugin && i.plugin !== r && i.plugin._kill && (i.plugin._kill(e),
                r = i.plugin),
                i = i._next;
            return t.prototype._kill.call(this, s)
        }
        ;
        var Jt = function(t, e, i) {
            var r, n, s, a;
            if (t.slice)
                for (n = t.length; --n > -1; )
                    Jt(t[n], e, i);
            else
                for (n = (r = t.childNodes).length; --n > -1; )
                    a = (s = r[n]).type,
                    s.style && (e.push(nt(s)),
                    i && i.push(s)),
                    1 !== a && 9 !== a && 11 !== a || !s.childNodes.length || Jt(s, e, i)
        };
        return a.cascadeTo = function(t, i, r) {
            var n, s, a, o, l = e.to(t, i, r), h = [l], u = [], f = [], p = [], _ = e._internals.reservedProps;
            for (t = l._targets || l.target,
            Jt(t, u, p),
            l.render(i, !0, !0),
            Jt(t, f),
            l.render(0, !0, !0),
            l._enabled(!0),
            n = p.length; --n > -1; )
                if ((s = st(p[n], u[n], f[n])).firstMPT) {
                    for (a in s = s.difs,
                    r)
                        _[a] && (s[a] = r[a]);
                    for (a in o = {},
                    s)
                        o[a] = u[n][a];
                    h.push(e.fromTo(p[n], i, o, s))
                }
            return h
        }
        ,
        t.activate([a]),
        a
    }, !0)
}),
_gsScope._gsDefine && _gsScope._gsQueue.pop()(),
function(t) {
    "use strict";
    var e = function() {
        return (_gsScope.GreenSockGlobals || _gsScope)[t]
    };
    "undefined" != typeof module && module.exports ? (require("../TweenLite.min.js"),
    module.exports = e()) : "function" == typeof define && define.amd && define(["TweenLite"], e)
}("CSSPlugin");
!function e(t, r) {
    "object" == typeof exports && "object" == typeof module ? module.exports = r() : "function" == typeof define && define.amd ? define("WaveSurfer", [], r) : "object" == typeof exports ? exports.WaveSurfer = r() : t.WaveSurfer = r()
}(window, function() {
    return function(e) {
        function t(n) {
            if (r[n])
                return r[n].exports;
            var i = r[n] = {
                i: n,
                l: !1,
                exports: {}
            };
            return e[n].call(i.exports, i, i.exports, t),
            i.l = !0,
            i.exports
        }
        var r = {};
        return t.m = e,
        t.c = r,
        t.d = function(e, r, n) {
            t.o(e, r) || Object.defineProperty(e, r, {
                enumerable: !0,
                get: n
            })
        }
        ,
        t.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }),
            Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }
        ,
        t.t = function(e, r) {
            if (1 & r && (e = t(e)),
            8 & r)
                return e;
            if (4 & r && "object" == typeof e && e && e.__esModule)
                return e;
            var n = Object.create(null);
            if (t.r(n),
            Object.defineProperty(n, "default", {
                enumerable: !0,
                value: e
            }),
            2 & r && "string" != typeof e)
                for (var i in e)
                    t.d(n, i, function(t) {
                        return e[t]
                    }
                    .bind(null, i));
            return n
        }
        ,
        t.n = function(e) {
            var r = e && e.__esModule ? function t() {
                return e.default
            }
            : function t() {
                return e
            }
            ;
            return t.d(r, "a", r),
            r
        }
        ,
        t.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }
        ,
        t.p = "",
        t(t.s = "./src/wavesurfer.js")
    }({
        "./node_modules/debounce/index.js": function(e, t) {
            function r(e, t, r) {
                function n() {
                    var l = Date.now() - o;
                    l < t && l >= 0 ? i = setTimeout(n, t - l) : (i = null,
                    r || (u = e.apply(s, a),
                    s = a = null))
                }
                var i, a, s, o, u;
                null == t && (t = 100);
                var l = function() {
                    s = this,
                    a = arguments,
                    o = Date.now();
                    var l = r && !i;
                    return i || (i = setTimeout(n, t)),
                    l && (u = e.apply(s, a),
                    s = a = null),
                    u
                };
                return l.clear = function() {
                    i && (clearTimeout(i),
                    i = null)
                }
                ,
                l.flush = function() {
                    i && (u = e.apply(s, a),
                    s = a = null,
                    clearTimeout(i),
                    i = null)
                }
                ,
                l
            }
            r.debounce = r,
            e.exports = r
        },
        "./src/drawer.js": function(e, t, r) {
            "use strict";
            function n(e) {
                if (e && e.__esModule)
                    return e;
                var t = {};
                if (null != e)
                    for (var r in e)
                        if (Object.prototype.hasOwnProperty.call(e, r)) {
                            var n = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, r) : {};
                            n.get || n.set ? Object.defineProperty(t, r, n) : t[r] = e[r]
                        }
                return t.default = e,
                t
            }
            function i(e) {
                return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function e(t) {
                    return typeof t
                }
                : function e(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }
                )(e)
            }
            function a(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }
            function s(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1,
                    n.configurable = !0,
                    "value"in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n)
                }
            }
            function o(e, t, r) {
                return t && s(e.prototype, t),
                r && s(e, r),
                e
            }
            function u(e, t) {
                return !t || "object" !== i(t) && "function" != typeof t ? l(e) : t
            }
            function l(e) {
                if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }
            function c(e) {
                return (c = Object.setPrototypeOf ? Object.getPrototypeOf : function e(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }
                )(e)
            }
            function f(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && h(e, t)
            }
            function h(e, t) {
                return (h = Object.setPrototypeOf || function e(t, r) {
                    return t.__proto__ = r,
                    t
                }
                )(e, t)
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.default = void 0;
            var d = n(r("./src/util/index.js"))
              , p = function(e) {
                function t(e, r) {
                    var n;
                    return a(this, t),
                    (n = u(this, c(t).call(this))).container = e,
                    n.params = r,
                    n.width = 0,
                    n.height = r.height * n.params.pixelRatio,
                    n.lastPos = 0,
                    n.wrapper = null,
                    n
                }
                return f(t, e),
                o(t, [{
                    key: "style",
                    value: function e(t, r) {
                        return d.style(t, r)
                    }
                }, {
                    key: "createWrapper",
                    value: function e() {
                        this.wrapper = this.container.appendChild(document.createElement("wave")),
                        this.style(this.wrapper, {
                            display: "block",
                            position: "relative",
                            userSelect: "none",
                            webkitUserSelect: "none",
                            height: this.params.height + "px"
                        }),
                        (this.params.fillParent || this.params.scrollParent) && this.style(this.wrapper, {
                            width: "100%",
                            overflowX: this.params.hideScrollbar ? "hidden" : "auto",
                            overflowY: "hidden"
                        }),
                        this.setupWrapperEvents()
                    }
                }, {
                    key: "handleEvent",
                    value: function e(t, r) {
                        !r && t.preventDefault();
                        var n = t.targetTouches ? t.targetTouches[0].clientX : t.clientX, i = this.wrapper.getBoundingClientRect(), a = this.width, s = this.getWidth(), o;
                        return !this.params.fillParent && a < s ? (o = (this.params.rtl ? i.right - n : n - i.left) * (this.params.pixelRatio / a) || 0) > 1 && (o = 1) : o = ((this.params.rtl ? i.right - n : n - i.left) + this.wrapper.scrollLeft) / this.wrapper.scrollWidth || 0,
                        o
                    }
                }, {
                    key: "setupWrapperEvents",
                    value: function e() {
                        var t = this;
                        this.wrapper.addEventListener("click", function(e) {
                            var r = t.wrapper.offsetHeight - t.wrapper.clientHeight;
                            if (0 != r) {
                                var n = t.wrapper.getBoundingClientRect();
                                if (e.clientY >= n.bottom - r)
                                    return
                            }
                            t.params.interact && t.fireEvent("click", e, t.handleEvent(e))
                        }),
                        this.wrapper.addEventListener("scroll", function(e) {
                            return t.fireEvent("scroll", e)
                        })
                    }
                }, {
                    key: "drawPeaks",
                    value: function e(t, r, n, i) {
                        this.setWidth(r) || this.clearWave(),
                        this.params.barWidth ? this.drawBars(t, 0, n, i) : this.drawWave(t, 0, n, i)
                    }
                }, {
                    key: "resetScroll",
                    value: function e() {
                        null !== this.wrapper && (this.wrapper.scrollLeft = 0)
                    }
                }, {
                    key: "recenter",
                    value: function e(t) {
                        var r = this.wrapper.scrollWidth * t;
                        this.recenterOnPosition(r, !0)
                    }
                }, {
                    key: "recenterOnPosition",
                    value: function e(t, r) {
                        var n = this.wrapper.scrollLeft
                          , i = ~~(this.wrapper.clientWidth / 2)
                          , a = this.wrapper.scrollWidth - this.wrapper.clientWidth
                          , s = t - i
                          , o = s - n;
                        if (0 != a) {
                            if (!r && -i <= o && o < i) {
                                var u = 5;
                                s = n + (o = Math.max(-5, Math.min(5, o)))
                            }
                            (s = Math.max(0, Math.min(a, s))) != n && (this.wrapper.scrollLeft = s)
                        }
                    }
                }, {
                    key: "getScrollX",
                    value: function e() {
                        var t = 0;
                        if (this.wrapper) {
                            var r = this.params.pixelRatio;
                            if (t = Math.round(this.wrapper.scrollLeft * r),
                            this.params.scrollParent) {
                                var n = ~~(this.wrapper.scrollWidth * r - this.getWidth());
                                t = Math.min(n, Math.max(0, t))
                            }
                        }
                        return t
                    }
                }, {
                    key: "getWidth",
                    value: function e() {
                        return Math.round(this.container.clientWidth * this.params.pixelRatio)
                    }
                }, {
                    key: "setWidth",
                    value: function e(t) {
                        return this.width != t && (this.width = t,
                        this.params.fillParent || this.params.scrollParent ? this.style(this.wrapper, {
                            width: ""
                        }) : this.style(this.wrapper, {
                            width: ~~(this.width / this.params.pixelRatio) + "px"
                        }),
                        this.updateSize(),
                        !0)
                    }
                }, {
                    key: "setHeight",
                    value: function e(t) {
                        return t != this.height && (this.height = t,
                        this.style(this.wrapper, {
                            height: ~~(this.height / this.params.pixelRatio) + "px"
                        }),
                        this.updateSize(),
                        !0)
                    }
                }, {
                    key: "progress",
                    value: function e(t) {
                        var r = 1 / this.params.pixelRatio
                          , n = Math.round(t * this.width) * r;
                        if (n < this.lastPos || n - this.lastPos >= r) {
                            if (this.lastPos = n,
                            this.params.scrollParent && this.params.autoCenter) {
                                var i = ~~(this.wrapper.scrollWidth * t);
                                this.recenterOnPosition(i)
                            }
                            this.updateProgress(n)
                        }
                    }
                }, {
                    key: "destroy",
                    value: function e() {
                        this.unAll(),
                        this.wrapper && (this.wrapper.parentNode == this.container && this.container.removeChild(this.wrapper),
                        this.wrapper = null)
                    }
                }, {
                    key: "updateCursor",
                    value: function e() {}
                }, {
                    key: "updateSize",
                    value: function e() {}
                }, {
                    key: "drawBars",
                    value: function e(t, r, n, i) {}
                }, {
                    key: "drawWave",
                    value: function e(t, r, n, i) {}
                }, {
                    key: "clearWave",
                    value: function e() {}
                }, {
                    key: "updateProgress",
                    value: function e(t) {}
                }]),
                t
            }(d.Observer);
            t.default = p,
            e.exports = t.default
        },
        "./src/drawer.multicanvas.js": function(e, t, r) {
            "use strict";
            function n(e) {
                if (e && e.__esModule)
                    return e;
                var t = {};
                if (null != e)
                    for (var r in e)
                        if (Object.prototype.hasOwnProperty.call(e, r)) {
                            var n = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, r) : {};
                            n.get || n.set ? Object.defineProperty(t, r, n) : t[r] = e[r]
                        }
                return t.default = e,
                t
            }
            function i(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            function a(e) {
                return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function e(t) {
                    return typeof t
                }
                : function e(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }
                )(e)
            }
            function s(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }
            function o(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1,
                    n.configurable = !0,
                    "value"in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n)
                }
            }
            function u(e, t, r) {
                return t && o(e.prototype, t),
                r && o(e, r),
                e
            }
            function l(e, t) {
                return !t || "object" !== a(t) && "function" != typeof t ? c(e) : t
            }
            function c(e) {
                if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }
            function f(e) {
                return (f = Object.setPrototypeOf ? Object.getPrototypeOf : function e(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }
                )(e)
            }
            function h(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && d(e, t)
            }
            function d(e, t) {
                return (d = Object.setPrototypeOf || function e(t, r) {
                    return t.__proto__ = r,
                    t
                }
                )(e, t)
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.default = void 0;
            var p = i(r("./src/drawer.js"))
              , v = n(r("./src/util/index.js"))
              , y = function(e) {
                function t(e, r) {
                    var n;
                    return s(this, t),
                    (n = l(this, f(t).call(this, e, r))).maxCanvasWidth = r.maxCanvasWidth,
                    n.maxCanvasElementWidth = Math.round(r.maxCanvasWidth / r.pixelRatio),
                    n.hasProgressCanvas = r.waveColor != r.progressColor,
                    n.halfPixel = .5 / r.pixelRatio,
                    n.canvases = [],
                    n.progressWave = null,
                    n
                }
                return h(t, e),
                u(t, [{
                    key: "init",
                    value: function e() {
                        this.createWrapper(),
                        this.createElements()
                    }
                }, {
                    key: "createElements",
                    value: function e() {
                        this.progressWave = this.wrapper.appendChild(this.style(document.createElement("wave"), {
                            position: "absolute",
                            zIndex: 3,
                            left: 0,
                            top: 0,
                            bottom: 0,
                            overflow: "hidden",
                            width: "0",
                            display: "none",
                            boxSizing: "border-box",
                            borderRightStyle: "solid",
                            pointerEvents: "none"
                        })),
                        this.addCanvas(),
                        this.updateCursor()
                    }
                }, {
                    key: "updateCursor",
                    value: function e() {
                        this.style(this.progressWave, {
                            borderRightWidth: this.params.cursorWidth + "px",
                            borderRightColor: this.params.cursorColor
                        })
                    }
                }, {
                    key: "updateSize",
                    value: function e() {
                        for (var t = this, r = Math.round(this.width / this.params.pixelRatio), n = Math.ceil(r / (this.maxCanvasElementWidth + 2)); this.canvases.length < n; )
                            this.addCanvas();
                        for (; this.canvases.length > n; )
                            this.removeCanvas();
                        this.canvases.forEach(function(e, r) {
                            var n = t.maxCanvasWidth + 2 * Math.ceil(t.params.pixelRatio / 2);
                            r == t.canvases.length - 1 && (n = t.width - t.maxCanvasWidth * (t.canvases.length - 1)),
                            t.updateDimensions(e, n, t.height),
                            t.clearWaveForEntry(e)
                        })
                    }
                }, {
                    key: "addCanvas",
                    value: function e() {
                        var t = {}
                          , r = this.maxCanvasElementWidth * this.canvases.length;
                        t.wave = this.wrapper.appendChild(this.style(document.createElement("canvas"), {
                            position: "absolute",
                            zIndex: 2,
                            left: r + "px",
                            top: 0,
                            bottom: 0,
                            height: "100%",
                            pointerEvents: "none"
                        })),
                        t.waveCtx = t.wave.getContext("2d"),
                        this.hasProgressCanvas && (t.progress = this.progressWave.appendChild(this.style(document.createElement("canvas"), {
                            position: "absolute",
                            left: r + "px",
                            top: 0,
                            bottom: 0,
                            height: "100%"
                        })),
                        t.progressCtx = t.progress.getContext("2d")),
                        this.canvases.push(t)
                    }
                }, {
                    key: "removeCanvas",
                    value: function e() {
                        var t = this.canvases.pop();
                        t.wave.parentElement.removeChild(t.wave),
                        this.hasProgressCanvas && t.progress.parentElement.removeChild(t.progress)
                    }
                }, {
                    key: "updateDimensions",
                    value: function e(t, r, n) {
                        var i = Math.round(r / this.params.pixelRatio)
                          , a = Math.round(this.width / this.params.pixelRatio);
                        t.start = t.waveCtx.canvas.offsetLeft / a || 0,
                        t.end = t.start + i / a,
                        t.waveCtx.canvas.width = r,
                        t.waveCtx.canvas.height = n,
                        this.style(t.waveCtx.canvas, {
                            width: i + "px"
                        }),
                        this.style(this.progressWave, {
                            display: "block"
                        }),
                        this.hasProgressCanvas && (t.progressCtx.canvas.width = r,
                        t.progressCtx.canvas.height = n,
                        this.style(t.progressCtx.canvas, {
                            width: i + "px"
                        }))
                    }
                }, {
                    key: "clearWave",
                    value: function e() {
                        var t = this;
                        this.canvases.forEach(function(e) {
                            return t.clearWaveForEntry(e)
                        })
                    }
                }, {
                    key: "clearWaveForEntry",
                    value: function e(t) {
                        t.waveCtx.clearRect(0, 0, t.waveCtx.canvas.width, t.waveCtx.canvas.height),
                        this.hasProgressCanvas && t.progressCtx.clearRect(0, 0, t.progressCtx.canvas.width, t.progressCtx.canvas.height)
                    }
                }, {
                    key: "drawBars",
                    value: function e(t, r, n, i) {
                        var a = this;
                        return this.prepareDraw(t, r, n, i, function(e) {
                            var t = e.absmax
                              , r = e.hasMinVals
                              , s = e.height
                              , o = e.offsetY
                              , u = e.halfH
                              , l = e.peaks;
                            if (void 0 !== n) {
                                var c = r ? 2 : 1, f = l.length / c, h = a.params.barWidth * a.params.pixelRatio, d, p = h + (null === a.params.barGap ? Math.max(a.params.pixelRatio, ~~(h / 2)) : Math.max(a.params.pixelRatio, a.params.barGap * a.params.pixelRatio)), v = f / a.width, y, m = i, b;
                                for (b = n; b < m; b += p) {
                                    var g = l[Math.floor(b * v * c)] || 0
                                      , k = Math.round(g / t * u);
                                    a.fillRect(b + a.halfPixel, u - k + o, h + a.halfPixel, 2 * k)
                                }
                            }
                        })
                    }
                }, {
                    key: "drawWave",
                    value: function e(t, r, n, i) {
                        var a = this;
                        return this.prepareDraw(t, r, n, i, function(e) {
                            var t = e.absmax
                              , r = e.hasMinVals
                              , s = e.height
                              , o = e.offsetY
                              , u = e.halfH
                              , l = e.peaks;
                            if (!r) {
                                var c = [], f = l.length, h;
                                for (h = 0; h < f; h++)
                                    c[2 * h] = l[h],
                                    c[2 * h + 1] = -l[h];
                                l = c
                            }
                            void 0 !== n && a.drawLine(l, t, u, o, n, i),
                            a.fillRect(0, u + o - a.halfPixel, a.width, a.halfPixel)
                        })
                    }
                }, {
                    key: "drawLine",
                    value: function e(t, r, n, i, a, s) {
                        var o = this;
                        this.canvases.forEach(function(e) {
                            o.setFillStyles(e),
                            o.drawLineToContext(e, e.waveCtx, t, r, n, i, a, s),
                            o.drawLineToContext(e, e.progressCtx, t, r, n, i, a, s)
                        })
                    }
                }, {
                    key: "drawLineToContext",
                    value: function e(t, r, n, i, a, s, o, u) {
                        if (r) {
                            var l = n.length / 2, c = Math.round(l * t.start), f, h = c, d = Math.round(l * t.end) + 1, p, v, y = t.progress.width / (d - h - 1), m = a + s, b = i / a;
                            for (r.beginPath(),
                            r.moveTo((h - c) * y, m),
                            r.lineTo((h - c) * y, m - Math.round((n[2 * h] || 0) / b)),
                            p = h; p < d; p++) {
                                var g = n[2 * p] || 0
                                  , k = Math.round(g / b);
                                r.lineTo((p - c) * y + this.halfPixel, m - k)
                            }
                            for (v = d - 1; v >= h; v--) {
                                var w = n[2 * v + 1] || 0
                                  , P = Math.round(w / b);
                                r.lineTo((v - c) * y + this.halfPixel, m - P)
                            }
                            r.lineTo((h - c) * y, m - Math.round((n[2 * h + 1] || 0) / b)),
                            r.closePath(),
                            r.fill()
                        }
                    }
                }, {
                    key: "fillRect",
                    value: function e(t, r, n, i) {
                        var a = Math.floor(t / this.maxCanvasWidth), s = Math.min(Math.ceil((t + n) / this.maxCanvasWidth) + 1, this.canvases.length), o;
                        for (o = a; o < s; o++) {
                            var u = this.canvases[o]
                              , l = o * this.maxCanvasWidth
                              , c = {
                                x1: Math.max(t, o * this.maxCanvasWidth),
                                y1: r,
                                x2: Math.min(t + n, o * this.maxCanvasWidth + u.waveCtx.canvas.width),
                                y2: r + i
                            };
                            c.x1 < c.x2 && (this.setFillStyles(u),
                            this.fillRectToContext(u.waveCtx, c.x1 - l, c.y1, c.x2 - c.x1, c.y2 - c.y1),
                            this.fillRectToContext(u.progressCtx, c.x1 - l, c.y1, c.x2 - c.x1, c.y2 - c.y1))
                        }
                    }
                }, {
                    key: "prepareDraw",
                    value: function e(t, r, n, i, a) {
                        var s = this;
                        return v.frame(function() {
                            if (t[0]instanceof Array) {
                                var e = t;
                                if (s.params.splitChannels)
                                    return s.setHeight(e.length * s.params.height * s.params.pixelRatio),
                                    e.forEach(function(e, t) {
                                        return s.prepareDraw(e, t, n, i, a)
                                    });
                                t = e[0]
                            }
                            var o = 1 / s.params.barHeight;
                            if (s.params.normalize) {
                                var u = v.max(t)
                                  , l = v.min(t);
                                o = -l > u ? -l : u
                            }
                            var c = [].some.call(t, function(e) {
                                return e < 0
                            }), f = s.params.height * s.params.pixelRatio, h, d;
                            return a({
                                absmax: o,
                                hasMinVals: c,
                                height: f,
                                offsetY: f * r || 0,
                                halfH: f / 2,
                                peaks: t
                            })
                        })()
                    }
                }, {
                    key: "fillRectToContext",
                    value: function e(t, r, n, i, a) {
                        t && t.fillRect(r, n, i, a)
                    }
                }, {
                    key: "setFillStyles",
                    value: function e(t) {
                        t.waveCtx.fillStyle = this.params.waveColor,
                        this.hasProgressCanvas && (t.progressCtx.fillStyle = this.params.progressColor)
                    }
                }, {
                    key: "getImage",
                    value: function e(t, r) {
                        var n = this.canvases.map(function(e) {
                            return e.wave.toDataURL(t, r)
                        });
                        return n.length > 1 ? n : n[0]
                    }
                }, {
                    key: "updateProgress",
                    value: function e(t) {
                        this.style(this.progressWave, {
                            width: t + "px"
                        })
                    }
                }]),
                t
            }(p.default);
            t.default = y,
            e.exports = t.default
        },
        "./src/mediaelement.js": function(e, t, r) {
            "use strict";
            function n(e) {
                if (e && e.__esModule)
                    return e;
                var t = {};
                if (null != e)
                    for (var r in e)
                        if (Object.prototype.hasOwnProperty.call(e, r)) {
                            var n = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, r) : {};
                            n.get || n.set ? Object.defineProperty(t, r, n) : t[r] = e[r]
                        }
                return t.default = e,
                t
            }
            function i(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            function a(e) {
                return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function e(t) {
                    return typeof t
                }
                : function e(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }
                )(e)
            }
            function s(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }
            function o(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1,
                    n.configurable = !0,
                    "value"in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n)
                }
            }
            function u(e, t, r) {
                return t && o(e.prototype, t),
                r && o(e, r),
                e
            }
            function l(e, t) {
                return !t || "object" !== a(t) && "function" != typeof t ? c(e) : t
            }
            function c(e) {
                if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }
            function f(e, t, r) {
                return (f = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function e(t, r, n) {
                    var i = h(t, r);
                    if (i) {
                        var a = Object.getOwnPropertyDescriptor(i, r);
                        return a.get ? a.get.call(n) : a.value
                    }
                }
                )(e, t, r || e)
            }
            function h(e, t) {
                for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = d(e)); )
                    ;
                return e
            }
            function d(e) {
                return (d = Object.setPrototypeOf ? Object.getPrototypeOf : function e(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }
                )(e)
            }
            function p(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && v(e, t)
            }
            function v(e, t) {
                return (v = Object.setPrototypeOf || function e(t, r) {
                    return t.__proto__ = r,
                    t
                }
                )(e, t)
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.default = void 0;
            var y = i(r("./src/webaudio.js"))
              , m = n(r("./src/util/index.js"))
              , b = function(e) {
                function t(e) {
                    var r;
                    return s(this, t),
                    (r = l(this, d(t).call(this, e))).params = e,
                    r.media = {
                        currentTime: 0,
                        duration: 0,
                        paused: !0,
                        playbackRate: 1,
                        play: function e() {},
                        pause: function e() {},
                        volume: 0
                    },
                    r.mediaType = e.mediaType.toLowerCase(),
                    r.elementPosition = e.elementPosition,
                    r.peaks = null,
                    r.playbackRate = 1,
                    r.volume = 1,
                    r.buffer = null,
                    r.onPlayEnd = null,
                    r
                }
                return p(t, e),
                u(t, [{
                    key: "init",
                    value: function e() {
                        this.setPlaybackRate(this.params.audioRate),
                        this.createTimer()
                    }
                }, {
                    key: "createTimer",
                    value: function e() {
                        var t = this
                          , r = function e() {
                            var r;
                            t.isPaused() || (t.fireEvent("audioprocess", t.getCurrentTime()),
                            (window.requestAnimationFrame || window.webkitRequestAnimationFrame)(e))
                        };
                        this.on("play", r),
                        this.on("pause", function() {
                            t.fireEvent("audioprocess", t.getCurrentTime())
                        })
                    }
                }, {
                    key: "load",
                    value: function e(t, r, n, i) {
                        var a = document.createElement(this.mediaType);
                        a.controls = this.params.mediaControls,
                        a.autoplay = this.params.autoplay || !1,
                        a.preload = null == i ? "auto" : i,
                        a.src = t,
                        a.style.width = "100%";
                        var s = r.querySelector(this.mediaType);
                        s && r.removeChild(s),
                        r.appendChild(a),
                        this._load(a, n)
                    }
                }, {
                    key: "loadElt",
                    value: function e(t, r) {
                        t.controls = this.params.mediaControls,
                        t.autoplay = this.params.autoplay || !1,
                        this._load(t, r)
                    }
                }, {
                    key: "_load",
                    value: function e(t, r) {
                        var n = this;
                        "function" == typeof t.load && t.load(),
                        t.addEventListener("error", function() {
                            n.fireEvent("error", "Error loading media element")
                        }),
                        t.addEventListener("canplay", function() {
                            n.fireEvent("canplay")
                        }),
                        t.addEventListener("ended", function() {
                            n.fireEvent("finish")
                        }),
                        t.addEventListener("play", function() {
                            n.fireEvent("play")
                        }),
                        t.addEventListener("pause", function() {
                            n.fireEvent("pause")
                        }),
                        this.media = t,
                        this.peaks = r,
                        this.onPlayEnd = null,
                        this.buffer = null,
                        this.setPlaybackRate(this.playbackRate),
                        this.setVolume(this.volume)
                    }
                }, {
                    key: "isPaused",
                    value: function e() {
                        return !this.media || this.media.paused
                    }
                }, {
                    key: "getDuration",
                    value: function e() {
                        if (this.explicitDuration)
                            return this.explicitDuration;
                        var t = (this.buffer || this.media).duration;
                        return t >= 1 / 0 && (t = this.media.seekable.end(0)),
                        t
                    }
                }, {
                    key: "getCurrentTime",
                    value: function e() {
                        return this.media && this.media.currentTime
                    }
                }, {
                    key: "getPlayedPercents",
                    value: function e() {
                        return this.getCurrentTime() / this.getDuration() || 0
                    }
                }, {
                    key: "getPlaybackRate",
                    value: function e() {
                        return this.playbackRate || this.media.playbackRate
                    }
                }, {
                    key: "setPlaybackRate",
                    value: function e(t) {
                        this.playbackRate = t || 1,
                        this.media.playbackRate = this.playbackRate
                    }
                }, {
                    key: "seekTo",
                    value: function e(t) {
                        null != t && (this.media.currentTime = t),
                        this.clearPlayEnd()
                    }
                }, {
                    key: "play",
                    value: function e(t, r) {
                        this.seekTo(t);
                        var n = this.media.play();
                        return r && this.setPlayEnd(r),
                        n
                    }
                }, {
                    key: "pause",
                    value: function e() {
                        var t;
                        return this.media && (t = this.media.pause()),
                        this.clearPlayEnd(),
                        t
                    }
                }, {
                    key: "setPlayEnd",
                    value: function e(t) {
                        var r = this;
                        this._onPlayEnd = function(e) {
                            e >= t && (r.pause(),
                            r.seekTo(t))
                        }
                        ,
                        this.on("audioprocess", this._onPlayEnd)
                    }
                }, {
                    key: "clearPlayEnd",
                    value: function e() {
                        this._onPlayEnd && (this.un("audioprocess", this._onPlayEnd),
                        this._onPlayEnd = null)
                    }
                }, {
                    key: "getPeaks",
                    value: function e(r, n, i) {
                        return this.buffer ? f(d(t.prototype), "getPeaks", this).call(this, r, n, i) : this.peaks || []
                    }
                }, {
                    key: "setSinkId",
                    value: function e(t) {
                        return t ? this.media.setSinkId ? this.media.setSinkId(t) : Promise.reject(new Error("setSinkId is not supported in your browser")) : Promise.reject(new Error("Invalid deviceId: " + t))
                    }
                }, {
                    key: "getVolume",
                    value: function e() {
                        return this.volume || this.media.volume
                    }
                }, {
                    key: "setVolume",
                    value: function e(t) {
                        this.volume = t,
                        this.media.volume = this.volume
                    }
                }, {
                    key: "destroy",
                    value: function e() {
                        this.pause(),
                        this.unAll(),
                        this.params.removeMediaElementOnDestroy && this.media && this.media.parentNode && this.media.parentNode.removeChild(this.media),
                        this.media = null
                    }
                }]),
                t
            }(y.default);
            t.default = b,
            e.exports = t.default
        },
        "./src/peakcache.js": function(e, t, r) {
            "use strict";
            function n(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }
            function i(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1,
                    n.configurable = !0,
                    "value"in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n)
                }
            }
            function a(e, t, r) {
                return t && i(e.prototype, t),
                r && i(e, r),
                e
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.default = void 0;
            var s = function() {
                function e() {
                    n(this, e),
                    this.clearPeakCache()
                }
                return a(e, [{
                    key: "clearPeakCache",
                    value: function e() {
                        this.peakCacheRanges = [],
                        this.peakCacheLength = -1
                    }
                }, {
                    key: "addRangeToPeakCache",
                    value: function e(t, r, n) {
                        t != this.peakCacheLength && (this.clearPeakCache(),
                        this.peakCacheLength = t);
                        for (var i = [], a = 0; a < this.peakCacheRanges.length && this.peakCacheRanges[a] < r; )
                            a++;
                        for (a % 2 == 0 && i.push(r); a < this.peakCacheRanges.length && this.peakCacheRanges[a] <= n; )
                            i.push(this.peakCacheRanges[a]),
                            a++;
                        a % 2 == 0 && i.push(n),
                        i = i.filter(function(e, t, r) {
                            return 0 == t ? e != r[t + 1] : t == r.length - 1 ? e != r[t - 1] : e != r[t - 1] && e != r[t + 1]
                        }),
                        this.peakCacheRanges = this.peakCacheRanges.concat(i),
                        this.peakCacheRanges = this.peakCacheRanges.sort(function(e, t) {
                            return e - t
                        }).filter(function(e, t, r) {
                            return 0 == t ? e != r[t + 1] : t == r.length - 1 ? e != r[t - 1] : e != r[t - 1] && e != r[t + 1]
                        });
                        var s = [];
                        for (a = 0; a < i.length; a += 2)
                            s.push([i[a], i[a + 1]]);
                        return s
                    }
                }, {
                    key: "getCacheRanges",
                    value: function e() {
                        var t = [], r;
                        for (r = 0; r < this.peakCacheRanges.length; r += 2)
                            t.push([this.peakCacheRanges[r], this.peakCacheRanges[r + 1]]);
                        return t
                    }
                }]),
                e
            }();
            t.default = s,
            e.exports = t.default
        },
        "./src/util/ajax.js": function(e, t, r) {
            "use strict";
            function n(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            function i(e) {
                var t = new a.default
                  , r = new XMLHttpRequest
                  , n = !1;
                return r.open(e.method || "GET", e.url, !0),
                r.responseType = e.responseType || "json",
                e.xhr && (e.xhr.requestHeaders && e.xhr.requestHeaders.forEach(function(e) {
                    r.setRequestHeader(e.key, e.value)
                }),
                e.xhr.withCredentials && (r.withCredentials = !0)),
                r.addEventListener("progress", function(e) {
                    t.fireEvent("progress", e),
                    e.lengthComputable && e.loaded == e.total && (n = !0)
                }),
                r.addEventListener("load", function(e) {
                    n || t.fireEvent("progress", e),
                    t.fireEvent("load", e),
                    200 == r.status || 206 == r.status ? t.fireEvent("success", r.response, e) : t.fireEvent("error", e)
                }),
                r.addEventListener("error", function(e) {
                    return t.fireEvent("error", e)
                }),
                r.send(),
                t.xhr = r,
                t
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.default = i;
            var a = n(r("./src/util/observer.js"));
            e.exports = t.default
        },
        "./src/util/extend.js": function(e, t, r) {
            "use strict";
            function n(e) {
                for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
                    r[n - 1] = arguments[n];
                return r.forEach(function(t) {
                    Object.keys(t).forEach(function(r) {
                        e[r] = t[r]
                    })
                }),
                e
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.default = n,
            e.exports = t.default
        },
        "./src/util/frame.js": function(e, t, r) {
            "use strict";
            function n(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            function i(e) {
                return function() {
                    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
                        r[n] = arguments[n];
                    return (0,
                    a.default)(function() {
                        return e.apply(void 0, r)
                    })
                }
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.default = i;
            var a = n(r("./src/util/request-animation-frame.js"));
            e.exports = t.default
        },
        "./src/util/get-id.js": function(e, t, r) {
            "use strict";
            function n() {
                return "wavesurfer_" + Math.random().toString(32).substring(2)
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.default = n,
            e.exports = t.default
        },
        "./src/util/index.js": function(e, t, r) {
            "use strict";
            function n(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            Object.defineProperty(t, "ajax", {
                enumerable: !0,
                get: function e() {
                    return i.default
                }
            }),
            Object.defineProperty(t, "getId", {
                enumerable: !0,
                get: function e() {
                    return a.default
                }
            }),
            Object.defineProperty(t, "max", {
                enumerable: !0,
                get: function e() {
                    return s.default
                }
            }),
            Object.defineProperty(t, "min", {
                enumerable: !0,
                get: function e() {
                    return o.default
                }
            }),
            Object.defineProperty(t, "Observer", {
                enumerable: !0,
                get: function e() {
                    return u.default
                }
            }),
            Object.defineProperty(t, "extend", {
                enumerable: !0,
                get: function e() {
                    return l.default
                }
            }),
            Object.defineProperty(t, "style", {
                enumerable: !0,
                get: function e() {
                    return c.default
                }
            }),
            Object.defineProperty(t, "requestAnimationFrame", {
                enumerable: !0,
                get: function e() {
                    return f.default
                }
            }),
            Object.defineProperty(t, "frame", {
                enumerable: !0,
                get: function e() {
                    return h.default
                }
            }),
            Object.defineProperty(t, "debounce", {
                enumerable: !0,
                get: function e() {
                    return d.default
                }
            }),
            Object.defineProperty(t, "preventClick", {
                enumerable: !0,
                get: function e() {
                    return p.default
                }
            });
            var i = n(r("./src/util/ajax.js"))
              , a = n(r("./src/util/get-id.js"))
              , s = n(r("./src/util/max.js"))
              , o = n(r("./src/util/min.js"))
              , u = n(r("./src/util/observer.js"))
              , l = n(r("./src/util/extend.js"))
              , c = n(r("./src/util/style.js"))
              , f = n(r("./src/util/request-animation-frame.js"))
              , h = n(r("./src/util/frame.js"))
              , d = n(r("./node_modules/debounce/index.js"))
              , p = n(r("./src/util/prevent-click.js"))
        },
        "./src/util/max.js": function(e, t, r) {
            "use strict";
            function n(e) {
                var t = -1 / 0;
                return Object.keys(e).forEach(function(r) {
                    e[r] > t && (t = e[r])
                }),
                t
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.default = n,
            e.exports = t.default
        },
        "./src/util/min.js": function(e, t, r) {
            "use strict";
            function n(e) {
                var t = Number(1 / 0);
                return Object.keys(e).forEach(function(r) {
                    e[r] < t && (t = e[r])
                }),
                t
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.default = n,
            e.exports = t.default
        },
        "./src/util/observer.js": function(e, t, r) {
            "use strict";
            function n(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }
            function i(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1,
                    n.configurable = !0,
                    "value"in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n)
                }
            }
            function a(e, t, r) {
                return t && i(e.prototype, t),
                r && i(e, r),
                e
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.default = void 0;
            var s = function() {
                function e() {
                    n(this, e),
                    this.handlers = null
                }
                return a(e, [{
                    key: "on",
                    value: function e(t, r) {
                        var n = this;
                        this.handlers || (this.handlers = {});
                        var i = this.handlers[t];
                        return i || (i = this.handlers[t] = []),
                        i.push(r),
                        {
                            name: t,
                            callback: r,
                            un: function e(t, r) {
                                return n.un(t, r)
                            }
                        }
                    }
                }, {
                    key: "un",
                    value: function e(t, r) {
                        if (this.handlers) {
                            var n = this.handlers[t], i;
                            if (n)
                                if (r)
                                    for (i = n.length - 1; i >= 0; i--)
                                        n[i] == r && n.splice(i, 1);
                                else
                                    n.length = 0
                        }
                    }
                }, {
                    key: "unAll",
                    value: function e() {
                        this.handlers = null
                    }
                }, {
                    key: "once",
                    value: function e(t, r) {
                        var n = this
                          , i = function e() {
                            for (var i = arguments.length, a = new Array(i), s = 0; s < i; s++)
                                a[s] = arguments[s];
                            r.apply(n, a),
                            setTimeout(function() {
                                n.un(t, e)
                            }, 0)
                        };
                        return this.on(t, i)
                    }
                }, {
                    key: "fireEvent",
                    value: function e(t) {
                        for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
                            n[i - 1] = arguments[i];
                        if (this.handlers) {
                            var a = this.handlers[t];
                            a && a.forEach(function(e) {
                                e.apply(void 0, n)
                            })
                        }
                    }
                }]),
                e
            }();
            t.default = s,
            e.exports = t.default
        },
        "./src/util/prevent-click.js": function(e, t, r) {
            "use strict";
            function n(e) {
                e.stopPropagation(),
                document.body.removeEventListener("click", n, !0)
            }
            function i(e) {
                document.body.addEventListener("click", n, !0)
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.default = i,
            e.exports = t.default
        },
        "./src/util/request-animation-frame.js": function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.default = void 0;
            var n = (window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(e, t) {
                return setTimeout(e, 1e3 / 60)
            }
            ).bind(window);
            t.default = n,
            e.exports = t.default
        },
        "./src/util/style.js": function(e, t, r) {
            "use strict";
            function n(e, t) {
                return Object.keys(t).forEach(function(r) {
                    e.style[r] !== t[r] && (e.style[r] = t[r])
                }),
                e
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.default = n,
            e.exports = t.default
        },
        "./src/wavesurfer.js": function(e, t, r) {
            "use strict";
            function n(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            function i(e) {
                if (e && e.__esModule)
                    return e;
                var t = {};
                if (null != e)
                    for (var r in e)
                        if (Object.prototype.hasOwnProperty.call(e, r)) {
                            var n = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, r) : {};
                            n.get || n.set ? Object.defineProperty(t, r, n) : t[r] = e[r]
                        }
                return t.default = e,
                t
            }
            function a(e) {
                return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function e(t) {
                    return typeof t
                }
                : function e(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }
                )(e)
            }
            function s(e, t) {
                return !t || "object" !== a(t) && "function" != typeof t ? u(e) : t
            }
            function o(e) {
                return (o = Object.setPrototypeOf ? Object.getPrototypeOf : function e(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }
                )(e)
            }
            function u(e) {
                if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }
            function l(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && c(e, t)
            }
            function c(e, t) {
                return (c = Object.setPrototypeOf || function e(t, r) {
                    return t.__proto__ = r,
                    t
                }
                )(e, t)
            }
            function f(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }
            function h(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1,
                    n.configurable = !0,
                    "value"in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n)
                }
            }
            function d(e, t, r) {
                return t && h(e.prototype, t),
                r && h(e, r),
                e
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.default = void 0;
            var p = i(r("./src/util/index.js"))
              , v = n(r("./src/drawer.multicanvas.js"))
              , y = n(r("./src/webaudio.js"))
              , m = n(r("./src/mediaelement.js"))
              , b = n(r("./src/peakcache.js"))
              , g = function() {
                function e(t, r) {
                    f(this, e)
                }
                return d(e, [{
                    key: "create",
                    value: function e(t) {}
                }]),
                d(e, [{
                    key: "init",
                    value: function e() {}
                }, {
                    key: "destroy",
                    value: function e() {}
                }]),
                e
            }()
              , k = function(e) {
                function t(e) {
                    var r;
                    if (f(this, t),
                    (r = s(this, o(t).call(this))).defaultParams = {
                        audioContext: null,
                        audioScriptProcessor: null,
                        audioRate: 1,
                        autoCenter: !0,
                        backend: "WebAudio",
                        backgroundColor: null,
                        barHeight: 1,
                        barGap: null,
                        container: null,
                        cursorColor: "#333",
                        cursorWidth: 1,
                        dragSelection: !0,
                        duration: null,
                        fillParent: !0,
                        forceDecode: !1,
                        height: 128,
                        hideScrollbar: !1,
                        interact: !0,
                        loopSelection: !0,
                        maxCanvasWidth: 4e3,
                        mediaContainer: null,
                        mediaControls: !1,
                        mediaType: "audio",
                        minPxPerSec: 20,
                        normalize: !1,
                        partialRender: !1,
                        pixelRatio: window.devicePixelRatio || screen.deviceXDPI / screen.logicalXDPI,
                        plugins: [],
                        progressColor: "#555",
                        removeMediaElementOnDestroy: !0,
                        renderer: v.default,
                        responsive: !1,
                        rtl: !1,
                        scrollParent: !1,
                        skipLength: 2,
                        splitChannels: !1,
                        waveColor: "#999",
                        xhr: {}
                    },
                    r.backends = {
                        MediaElement: m.default,
                        WebAudio: y.default
                    },
                    r.util = p,
                    r.params = p.extend({}, r.defaultParams, e),
                    r.container = "string" == typeof e.container ? document.querySelector(r.params.container) : r.params.container,
                    !r.container)
                        throw new Error("Container element not found");
                    if (null == r.params.mediaContainer ? r.mediaContainer = r.container : "string" == typeof r.params.mediaContainer ? r.mediaContainer = document.querySelector(r.params.mediaContainer) : r.mediaContainer = r.params.mediaContainer,
                    !r.mediaContainer)
                        throw new Error("Media Container element not found");
                    if (r.params.maxCanvasWidth <= 1)
                        throw new Error("maxCanvasWidth must be greater than 1");
                    if (r.params.maxCanvasWidth % 2 == 1)
                        throw new Error("maxCanvasWidth must be an even number");
                    if (!0 === r.params.rtl && p.style(r.container, {
                        transform: "rotateY(180deg)"
                    }),
                    r.params.backgroundColor && r.setBackgroundColor(r.params.backgroundColor),
                    r.savedVolume = 0,
                    r.isMuted = !1,
                    r.tmpEvents = [],
                    r.currentAjax = null,
                    r.arraybuffer = null,
                    r.drawer = null,
                    r.backend = null,
                    r.peakCache = null,
                    "function" != typeof r.params.renderer)
                        throw new Error("Renderer parameter is invalid");
                    r.Drawer = r.params.renderer,
                    r.Backend = r.backends[r.params.backend],
                    r.initialisedPluginList = {},
                    r.isDestroyed = !1,
                    r.isReady = !1;
                    var n = 0;
                    return r._onResize = p.debounce(function() {
                        n == r.drawer.wrapper.clientWidth || r.params.scrollParent || (n = r.drawer.wrapper.clientWidth,
                        r.drawer.fireEvent("redraw"))
                    }, "number" == typeof r.params.responsive ? r.params.responsive : 100),
                    s(r, u(r))
                }
                return l(t, e),
                d(t, null, [{
                    key: "create",
                    value: function e(r) {
                        var n;
                        return new t(r).init()
                    }
                }]),
                d(t, [{
                    key: "init",
                    value: function e() {
                        return this.registerPlugins(this.params.plugins),
                        this.createDrawer(),
                        this.createBackend(),
                        this.createPeakCache(),
                        this
                    }
                }, {
                    key: "registerPlugins",
                    value: function e(t) {
                        var r = this;
                        return t.forEach(function(e) {
                            return r.addPlugin(e)
                        }),
                        t.forEach(function(e) {
                            e.deferInit || r.initPlugin(e.name)
                        }),
                        this.fireEvent("plugins-registered", t),
                        this
                    }
                }, {
                    key: "addPlugin",
                    value: function e(t) {
                        var r = this;
                        if (!t.name)
                            throw new Error("Plugin does not have a name!");
                        if (!t.instance)
                            throw new Error("Plugin ".concat(t.name, " does not have an instance property!"));
                        t.staticProps && Object.keys(t.staticProps).forEach(function(e) {
                            r[e] = t.staticProps[e]
                        });
                        var n = t.instance, i;
                        return Object.getOwnPropertyNames(p.Observer.prototype).forEach(function(e) {
                            n.prototype[e] = p.Observer.prototype[e]
                        }),
                        this[t.name] = new n(t.params || {},this),
                        this.fireEvent("plugin-added", t.name),
                        this
                    }
                }, {
                    key: "initPlugin",
                    value: function e(t) {
                        if (!this[t])
                            throw new Error("Plugin ".concat(t, " has not been added yet!"));
                        return this.initialisedPluginList[t] && this.destroyPlugin(t),
                        this[t].init(),
                        this.initialisedPluginList[t] = !0,
                        this.fireEvent("plugin-initialised", t),
                        this
                    }
                }, {
                    key: "destroyPlugin",
                    value: function e(t) {
                        if (!this[t])
                            throw new Error("Plugin ".concat(t, " has not been added yet and cannot be destroyed!"));
                        if (!this.initialisedPluginList[t])
                            throw new Error("Plugin ".concat(t, " is not active and cannot be destroyed!"));
                        if ("function" != typeof this[t].destroy)
                            throw new Error("Plugin ".concat(t, " does not have a destroy function!"));
                        return this[t].destroy(),
                        delete this.initialisedPluginList[t],
                        this.fireEvent("plugin-destroyed", t),
                        this
                    }
                }, {
                    key: "destroyAllPlugins",
                    value: function e() {
                        var t = this;
                        Object.keys(this.initialisedPluginList).forEach(function(e) {
                            return t.destroyPlugin(e)
                        })
                    }
                }, {
                    key: "createDrawer",
                    value: function e() {
                        var t = this;
                        this.drawer = new this.Drawer(this.container,this.params),
                        this.drawer.init(),
                        this.fireEvent("drawer-created", this.drawer),
                        !1 !== this.params.responsive && (window.addEventListener("resize", this._onResize, !0),
                        window.addEventListener("orientationchange", this._onResize, !0)),
                        this.drawer.on("redraw", function() {
                            t.drawBuffer(),
                            t.drawer.progress(t.backend.getPlayedPercents())
                        }),
                        this.drawer.on("click", function(e, r) {
                            setTimeout(function() {
                                return t.seekTo(r)
                            }, 0)
                        }),
                        this.drawer.on("scroll", function(e) {
                            t.params.partialRender && t.drawBuffer(),
                            t.fireEvent("scroll", e)
                        })
                    }
                }, {
                    key: "createBackend",
                    value: function e() {
                        var t = this;
                        this.backend && this.backend.destroy(),
                        "AudioElement" == this.params.backend && (this.params.backend = "MediaElement"),
                        "WebAudio" != this.params.backend || this.Backend.prototype.supportsWebAudio.call(null) || (this.params.backend = "MediaElement"),
                        this.backend = new this.Backend(this.params),
                        this.backend.init(),
                        this.fireEvent("backend-created", this.backend),
                        this.backend.on("finish", function() {
                            t.drawer.progress(t.backend.getPlayedPercents()),
                            t.fireEvent("finish")
                        }),
                        this.backend.on("play", function() {
                            return t.fireEvent("play")
                        }),
                        this.backend.on("pause", function() {
                            return t.fireEvent("pause")
                        }),
                        this.backend.on("audioprocess", function(e) {
                            t.drawer.progress(t.backend.getPlayedPercents()),
                            t.fireEvent("audioprocess", e)
                        })
                    }
                }, {
                    key: "createPeakCache",
                    value: function e() {
                        this.params.partialRender && (this.peakCache = new b.default)
                    }
                }, {
                    key: "getDuration",
                    value: function e() {
                        return this.backend.getDuration()
                    }
                }, {
                    key: "getCurrentTime",
                    value: function e() {
                        return this.backend.getCurrentTime()
                    }
                }, {
                    key: "setCurrentTime",
                    value: function e(t) {
                        t >= this.getDuration() ? this.seekTo(1) : this.seekTo(t / this.getDuration())
                    }
                }, {
                    key: "play",
                    value: function e(t, r) {
                        var n = this;
                        return this.fireEvent("interaction", function() {
                            return n.play(t, r)
                        }),
                        this.backend.play(t, r)
                    }
                }, {
                    key: "pause",
                    value: function e() {
                        if (!this.backend.isPaused())
                            return this.backend.pause()
                    }
                }, {
                    key: "playPause",
                    value: function e() {
                        return this.backend.isPaused() ? this.play() : this.pause()
                    }
                }, {
                    key: "isPlaying",
                    value: function e() {
                        return !this.backend.isPaused()
                    }
                }, {
                    key: "skipBackward",
                    value: function e(t) {
                        this.skip(-t || -this.params.skipLength)
                    }
                }, {
                    key: "skipForward",
                    value: function e(t) {
                        this.skip(t || this.params.skipLength)
                    }
                }, {
                    key: "skip",
                    value: function e(t) {
                        var r = this.getDuration() || 1
                          , n = this.getCurrentTime() || 0;
                        n = Math.max(0, Math.min(r, n + (t || 0))),
                        this.seekAndCenter(n / r)
                    }
                }, {
                    key: "seekAndCenter",
                    value: function e(t) {
                        this.seekTo(t),
                        this.drawer.recenter(t)
                    }
                }, {
                    key: "seekTo",
                    value: function e(t) {
                        var r = this;
                        if ("number" != typeof t || !isFinite(t) || t < 0 || t > 1)
                            return console.error("Error calling wavesurfer.seekTo, parameter must be a number between 0 and 1!");
                        this.fireEvent("interaction", function() {
                            return r.seekTo(t)
                        });
                        var n = this.backend.isPaused();
                        n || this.backend.pause();
                        var i = this.params.scrollParent;
                        this.params.scrollParent = !1,
                        this.backend.seekTo(t * this.getDuration()),
                        this.drawer.progress(t),
                        n || this.backend.play(),
                        this.params.scrollParent = i,
                        this.fireEvent("seek", t)
                    }
                }, {
                    key: "stop",
                    value: function e() {
                        this.pause(),
                        this.seekTo(0),
                        this.drawer.progress(0)
                    }
                }, {
                    key: "setSinkId",
                    value: function e(t) {
                        return this.backend.setSinkId(t)
                    }
                }, {
                    key: "setVolume",
                    value: function e(t) {
                        this.backend.setVolume(t),
                        this.fireEvent("volume", t)
                    }
                }, {
                    key: "getVolume",
                    value: function e() {
                        return this.backend.getVolume()
                    }
                }, {
                    key: "setPlaybackRate",
                    value: function e(t) {
                        this.backend.setPlaybackRate(t)
                    }
                }, {
                    key: "getPlaybackRate",
                    value: function e() {
                        return this.backend.getPlaybackRate()
                    }
                }, {
                    key: "toggleMute",
                    value: function e() {
                        this.setMute(!this.isMuted)
                    }
                }, {
                    key: "setMute",
                    value: function e(t) {
                        t !== this.isMuted ? (t ? (this.savedVolume = this.backend.getVolume(),
                        this.backend.setVolume(0),
                        this.isMuted = !0,
                        this.fireEvent("volume", 0)) : (this.backend.setVolume(this.savedVolume),
                        this.isMuted = !1,
                        this.fireEvent("volume", this.savedVolume)),
                        this.fireEvent("mute", this.isMuted)) : this.fireEvent("mute", this.isMuted)
                    }
                }, {
                    key: "getMute",
                    value: function e() {
                        return this.isMuted
                    }
                }, {
                    key: "isReady",
                    value: function e() {
                        return this.isReady
                    }
                }, {
                    key: "getFilters",
                    value: function e() {
                        return this.backend.filters || []
                    }
                }, {
                    key: "toggleScroll",
                    value: function e() {
                        this.params.scrollParent = !this.params.scrollParent,
                        this.drawBuffer()
                    }
                }, {
                    key: "toggleInteraction",
                    value: function e() {
                        this.params.interact = !this.params.interact
                    }
                }, {
                    key: "getWaveColor",
                    value: function e() {
                        return this.params.waveColor
                    }
                }, {
                    key: "setWaveColor",
                    value: function e(t) {
                        this.params.waveColor = t,
                        this.drawBuffer()
                    }
                }, {
                    key: "getProgressColor",
                    value: function e() {
                        return this.params.progressColor
                    }
                }, {
                    key: "setProgressColor",
                    value: function e(t) {
                        this.params.progressColor = t,
                        this.drawBuffer()
                    }
                }, {
                    key: "getBackgroundColor",
                    value: function e() {
                        return this.params.backgroundColor
                    }
                }, {
                    key: "setBackgroundColor",
                    value: function e(t) {
                        this.params.backgroundColor = t,
                        p.style(this.container, {
                            background: this.params.backgroundColor
                        })
                    }
                }, {
                    key: "getCursorColor",
                    value: function e() {
                        return this.params.cursorColor
                    }
                }, {
                    key: "setCursorColor",
                    value: function e(t) {
                        this.params.cursorColor = t,
                        this.drawer.updateCursor()
                    }
                }, {
                    key: "getHeight",
                    value: function e() {
                        return this.params.height
                    }
                }, {
                    key: "setHeight",
                    value: function e(t) {
                        this.params.height = t,
                        this.drawer.setHeight(t * this.params.pixelRatio),
                        this.drawBuffer()
                    }
                }, {
                    key: "drawBuffer",
                    value: function e() {
                        var t = Math.round(this.getDuration() * this.params.minPxPerSec * this.params.pixelRatio), r = this.drawer.getWidth(), n = t, i = 0, a = Math.max(i + r, n), s;
                        if (this.params.fillParent && (!this.params.scrollParent || t < r) && (i = 0,
                        a = n = r),
                        this.params.partialRender) {
                            var o = this.peakCache.addRangeToPeakCache(n, i, a), u;
                            for (u = 0; u < o.length; u++)
                                s = this.backend.getPeaks(n, o[u][0], o[u][1]),
                                this.drawer.drawPeaks(s, n, o[u][0], o[u][1])
                        } else
                            s = this.backend.getPeaks(n, i, a),
                            this.drawer.drawPeaks(s, n, i, a);
                        this.fireEvent("redraw", s, n)
                    }
                }, {
                    key: "zoom",
                    value: function e(t) {
                        t ? (this.params.minPxPerSec = t,
                        this.params.scrollParent = !0) : (this.params.minPxPerSec = this.defaultParams.minPxPerSec,
                        this.params.scrollParent = !1),
                        this.drawBuffer(),
                        this.drawer.progress(this.backend.getPlayedPercents()),
                        this.drawer.recenter(this.getCurrentTime() / this.getDuration()),
                        this.fireEvent("zoom", t)
                    }
                }, {
                    key: "loadArrayBuffer",
                    value: function e(t) {
                        var r = this;
                        this.decodeArrayBuffer(t, function(e) {
                            r.isDestroyed || r.loadDecodedBuffer(e)
                        })
                    }
                }, {
                    key: "loadDecodedBuffer",
                    value: function e(t) {
                        this.backend.load(t),
                        this.drawBuffer(),
                        this.fireEvent("ready"),
                        this.isReady = !0
                    }
                }, {
                    key: "loadBlob",
                    value: function e(t) {
                        var r = this
                          , n = new FileReader;
                        n.addEventListener("progress", function(e) {
                            return r.onProgress(e)
                        }),
                        n.addEventListener("load", function(e) {
                            return r.loadArrayBuffer(e.target.result)
                        }),
                        n.addEventListener("error", function() {
                            return r.fireEvent("error", "Error reading file")
                        }),
                        n.readAsArrayBuffer(t),
                        this.empty()
                    }
                }, {
                    key: "load",
                    value: function e(t, r, n, i) {
                        if (this.empty(),
                        n) {
                            var a = {
                                "Preload is not 'auto', 'none' or 'metadata'": -1 === ["auto", "metadata", "none"].indexOf(n),
                                "Peaks are not provided": !r,
                                "Backend is not of type MediaElement": "MediaElement" !== this.params.backend,
                                "Url is not of type string": "string" != typeof t
                            }
                              , s = Object.keys(a).filter(function(e) {
                                return a[e]
                            });
                            s.length && (console.warn("Preload parameter of wavesurfer.load will be ignored because:\n\t- " + s.join("\n\t- ")),
                            n = null)
                        }
                        switch (this.params.backend) {
                        case "WebAudio":
                            return this.loadBuffer(t, r, i);
                        case "MediaElement":
                            return this.loadMediaElement(t, r, n, i)
                        }
                    }
                }, {
                    key: "loadBuffer",
                    value: function e(t, r, n) {
                        var i = this
                          , a = function e(r) {
                            return r && i.tmpEvents.push(i.once("ready", r)),
                            i.getArrayBuffer(t, function(e) {
                                return i.loadArrayBuffer(e)
                            })
                        };
                        if (!r)
                            return a();
                        this.backend.setPeaks(r, n),
                        this.drawBuffer(),
                        this.tmpEvents.push(this.once("interaction", a))
                    }
                }, {
                    key: "loadMediaElement",
                    value: function e(t, r, n, i) {
                        var a = this
                          , s = t;
                        if ("string" == typeof t)
                            this.backend.load(s, this.mediaContainer, r, n);
                        else {
                            var o = t;
                            this.backend.loadElt(o, r),
                            s = o.src
                        }
                        this.tmpEvents.push(this.backend.once("canplay", function() {
                            a.drawBuffer(),
                            a.fireEvent("ready"),
                            a.isReady = !0
                        }), this.backend.once("error", function(e) {
                            return a.fireEvent("error", e)
                        })),
                        r && this.backend.setPeaks(r, i),
                        r && !this.params.forceDecode || !this.backend.supportsWebAudio() || this.getArrayBuffer(s, function(e) {
                            a.decodeArrayBuffer(e, function(e) {
                                a.backend.buffer = e,
                                a.backend.setPeaks(null),
                                a.drawBuffer(),
                                a.fireEvent("waveform-ready")
                            })
                        })
                    }
                }, {
                    key: "decodeArrayBuffer",
                    value: function e(t, r) {
                        var n = this;
                        this.arraybuffer = t,
                        this.backend.decodeArrayBuffer(t, function(e) {
                            n.isDestroyed || n.arraybuffer != t || (r(e),
                            n.arraybuffer = null)
                        }, function() {
                            return n.fireEvent("error", "Error decoding audiobuffer")
                        })
                    }
                }, {
                    key: "getArrayBuffer",
                    value: function e(t, r) {
                        var n = this
                          , i = p.ajax({
                            url: t,
                            responseType: "arraybuffer",
                            xhr: this.params.xhr
                        });
                        return this.currentAjax = i,
                        this.tmpEvents.push(i.on("progress", function(e) {
                            n.onProgress(e)
                        }), i.on("success", function(e, t) {
                            r(e),
                            n.currentAjax = null
                        }), i.on("error", function(e) {
                            n.fireEvent("error", "XHR error: " + e.target.statusText),
                            n.currentAjax = null
                        })),
                        i
                    }
                }, {
                    key: "onProgress",
                    value: function e(t) {
                        var r;
                        r = t.lengthComputable ? t.loaded / t.total : t.loaded / (t.loaded + 1e6),
                        this.fireEvent("loading", Math.round(100 * r), t.target)
                    }
                }, {
                    key: "exportPCM",
                    value: function e(t, r, n, i) {
                        t = t || 1024,
                        i = i || 0,
                        r = r || 1e4,
                        n = n || !1;
                        var a = this.backend.getPeaks(t, i)
                          , s = [].map.call(a, function(e) {
                            return Math.round(e * r) / r
                        })
                          , o = JSON.stringify(s);
                        return n || window.open("data:application/json;charset=utf-8," + encodeURIComponent(o)),
                        o
                    }
                }, {
                    key: "exportImage",
                    value: function e(t, r) {
                        return t || (t = "image/png"),
                        r || (r = 1),
                        this.drawer.getImage(t, r)
                    }
                }, {
                    key: "cancelAjax",
                    value: function e() {
                        this.currentAjax && (this.currentAjax.xhr.abort(),
                        this.currentAjax = null)
                    }
                }, {
                    key: "clearTmpEvents",
                    value: function e() {
                        this.tmpEvents.forEach(function(e) {
                            return e.un()
                        })
                    }
                }, {
                    key: "empty",
                    value: function e() {
                        this.backend.isPaused() || (this.stop(),
                        this.backend.disconnectSource()),
                        this.isReady = !1,
                        this.cancelAjax(),
                        this.clearTmpEvents(),
                        this.drawer.progress(0),
                        this.drawer.setWidth(0),
                        this.drawer.drawPeaks({
                            length: this.drawer.getWidth()
                        }, 0)
                    }
                }, {
                    key: "destroy",
                    value: function e() {
                        this.destroyAllPlugins(),
                        this.fireEvent("destroy"),
                        this.cancelAjax(),
                        this.clearTmpEvents(),
                        this.unAll(),
                        !1 !== this.params.responsive && (window.removeEventListener("resize", this._onResize, !0),
                        window.removeEventListener("orientationchange", this._onResize, !0)),
                        this.backend.destroy(),
                        this.drawer.destroy(),
                        this.isDestroyed = !0,
                        this.isReady = !1,
                        this.arraybuffer = null
                    }
                }]),
                t
            }(p.Observer);
            t.default = k,
            k.VERSION = "2.2.1",
            k.util = p,
            e.exports = t.default
        },
        "./src/webaudio.js": function(e, t, r) {
            "use strict";
            function n(e) {
                if (e && e.__esModule)
                    return e;
                var t = {};
                if (null != e)
                    for (var r in e)
                        if (Object.prototype.hasOwnProperty.call(e, r)) {
                            var n = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, r) : {};
                            n.get || n.set ? Object.defineProperty(t, r, n) : t[r] = e[r]
                        }
                return t.default = e,
                t
            }
            function i(e) {
                return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function e(t) {
                    return typeof t
                }
                : function e(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }
                )(e)
            }
            function a(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r,
                e
            }
            function s(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }
            function o(e, t) {
                return !t || "object" !== i(t) && "function" != typeof t ? u(e) : t
            }
            function u(e) {
                if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }
            function l(e) {
                return (l = Object.setPrototypeOf ? Object.getPrototypeOf : function e(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }
                )(e)
            }
            function c(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1,
                    n.configurable = !0,
                    "value"in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n)
                }
            }
            function f(e, t, r) {
                return t && c(e.prototype, t),
                r && c(e, r),
                e
            }
            function h(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && d(e, t)
            }
            function d(e, t) {
                return (d = Object.setPrototypeOf || function e(t, r) {
                    return t.__proto__ = r,
                    t
                }
                )(e, t)
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.default = void 0;
            var p = n(r("./src/util/index.js"))
              , v = "playing"
              , y = "paused"
              , m = "finished"
              , b = function(e) {
                function t(e) {
                    var r, n, i;
                    return s(this, t),
                    (i = o(this, l(t).call(this))).audioContext = null,
                    i.offlineAudioContext = null,
                    i.stateBehaviors = (a(r = {}, v, {
                        init: function e() {
                            this.addOnAudioProcess()
                        },
                        getPlayedPercents: function e() {
                            var t = this.getDuration();
                            return this.getCurrentTime() / t || 0
                        },
                        getCurrentTime: function e() {
                            return this.startPosition + this.getPlayedTime()
                        }
                    }),
                    a(r, y, {
                        init: function e() {
                            this.removeOnAudioProcess()
                        },
                        getPlayedPercents: function e() {
                            var t = this.getDuration();
                            return this.getCurrentTime() / t || 0
                        },
                        getCurrentTime: function e() {
                            return this.startPosition
                        }
                    }),
                    a(r, m, {
                        init: function e() {
                            this.removeOnAudioProcess(),
                            this.fireEvent("finish")
                        },
                        getPlayedPercents: function e() {
                            return 1
                        },
                        getCurrentTime: function e() {
                            return this.getDuration()
                        }
                    }),
                    r),
                    i.params = e,
                    i.ac = e.audioContext || i.getAudioContext(),
                    i.lastPlay = i.ac.currentTime,
                    i.startPosition = 0,
                    i.scheduledPause = null,
                    i.states = (a(n = {}, v, Object.create(i.stateBehaviors[v])),
                    a(n, y, Object.create(i.stateBehaviors[y])),
                    a(n, m, Object.create(i.stateBehaviors[m])),
                    n),
                    i.analyser = null,
                    i.buffer = null,
                    i.filters = [],
                    i.gainNode = null,
                    i.mergedPeaks = null,
                    i.offlineAc = null,
                    i.peaks = null,
                    i.playbackRate = 1,
                    i.analyser = null,
                    i.scriptNode = null,
                    i.source = null,
                    i.splitPeaks = [],
                    i.state = null,
                    i.explicitDuration = e.duration,
                    i
                }
                return h(t, e),
                f(t, [{
                    key: "supportsWebAudio",
                    value: function e() {
                        return !(!window.AudioContext && !window.webkitAudioContext)
                    }
                }, {
                    key: "getAudioContext",
                    value: function e() {
                        return window.WaveSurferAudioContext || (window.WaveSurferAudioContext = new (window.AudioContext || window.webkitAudioContext)),
                        window.WaveSurferAudioContext
                    }
                }, {
                    key: "getOfflineAudioContext",
                    value: function e(t) {
                        return window.WaveSurferOfflineAudioContext || (window.WaveSurferOfflineAudioContext = new (window.OfflineAudioContext || window.webkitOfflineAudioContext)(1,2,t)),
                        window.WaveSurferOfflineAudioContext
                    }
                }]),
                f(t, [{
                    key: "init",
                    value: function e() {
                        this.createVolumeNode(),
                        this.createScriptNode(),
                        this.createAnalyserNode(),
                        this.setState(y),
                        this.setPlaybackRate(this.params.audioRate),
                        this.setLength(0)
                    }
                }, {
                    key: "disconnectFilters",
                    value: function e() {
                        this.filters && (this.filters.forEach(function(e) {
                            e && e.disconnect()
                        }),
                        this.filters = null,
                        this.analyser.connect(this.gainNode))
                    }
                }, {
                    key: "setState",
                    value: function e(t) {
                        this.state !== this.states[t] && (this.state = this.states[t],
                        this.state.init.call(this))
                    }
                }, {
                    key: "setFilter",
                    value: function e() {
                        for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
                            r[n] = arguments[n];
                        this.setFilters(r)
                    }
                }, {
                    key: "setFilters",
                    value: function e(t) {
                        this.disconnectFilters(),
                        t && t.length && (this.filters = t,
                        this.analyser.disconnect(),
                        t.reduce(function(e, t) {
                            return e.connect(t),
                            t
                        }, this.analyser).connect(this.gainNode))
                    }
                }, {
                    key: "createScriptNode",
                    value: function e() {
                        this.params.audioScriptProcessor ? this.scriptNode = this.params.audioScriptProcessor : this.ac.createScriptProcessor ? this.scriptNode = this.ac.createScriptProcessor(t.scriptBufferSize) : this.scriptNode = this.ac.createJavaScriptNode(t.scriptBufferSize),
                        this.scriptNode.connect(this.ac.destination)
                    }
                }, {
                    key: "addOnAudioProcess",
                    value: function e() {
                        var t = this;
                        this.scriptNode.onaudioprocess = function() {
                            var e = t.getCurrentTime();
                            e >= t.getDuration() ? (t.setState(m),
                            t.fireEvent("pause")) : e >= t.scheduledPause ? t.pause() : t.state === t.states[v] && t.fireEvent("audioprocess", e)
                        }
                    }
                }, {
                    key: "removeOnAudioProcess",
                    value: function e() {
                        this.scriptNode.onaudioprocess = function() {}
                    }
                }, {
                    key: "createAnalyserNode",
                    value: function e() {
                        this.analyser = this.ac.createAnalyser(),
                        this.analyser.connect(this.gainNode)
                    }
                }, {
                    key: "createVolumeNode",
                    value: function e() {
                        this.ac.createGain ? this.gainNode = this.ac.createGain() : this.gainNode = this.ac.createGainNode(),
                        this.gainNode.connect(this.ac.destination)
                    }
                }, {
                    key: "setSinkId",
                    value: function e(t) {
                        if (t) {
                            var r = new window.Audio;
                            if (!r.setSinkId)
                                return Promise.reject(new Error("setSinkId is not supported in your browser"));
                            r.autoplay = !0;
                            var n = this.ac.createMediaStreamDestination();
                            return this.gainNode.disconnect(),
                            this.gainNode.connect(n),
                            r.srcObject = n.stream,
                            r.setSinkId(t)
                        }
                        return Promise.reject(new Error("Invalid deviceId: " + t))
                    }
                }, {
                    key: "setVolume",
                    value: function e(t) {
                        this.gainNode.gain.setValueAtTime(t, this.ac.currentTime)
                    }
                }, {
                    key: "getVolume",
                    value: function e() {
                        return this.gainNode.gain.value
                    }
                }, {
                    key: "decodeArrayBuffer",
                    value: function e(t, r, n) {
                        this.offlineAc || (this.offlineAc = this.getOfflineAudioContext(this.ac && this.ac.sampleRate ? this.ac.sampleRate : 44100)),
                        this.offlineAc.decodeAudioData(t, function(e) {
                            return r(e)
                        }, n)
                    }
                }, {
                    key: "setPeaks",
                    value: function e(t, r) {
                        null != r && (this.explicitDuration = r),
                        this.peaks = t
                    }
                }, {
                    key: "setLength",
                    value: function e(t) {
                        if (!this.mergedPeaks || t != 2 * this.mergedPeaks.length - 1 + 2) {
                            this.splitPeaks = [],
                            this.mergedPeaks = [];
                            var r = this.buffer ? this.buffer.numberOfChannels : 1, n;
                            for (n = 0; n < r; n++)
                                this.splitPeaks[n] = [],
                                this.splitPeaks[n][2 * (t - 1)] = 0,
                                this.splitPeaks[n][2 * (t - 1) + 1] = 0;
                            this.mergedPeaks[2 * (t - 1)] = 0,
                            this.mergedPeaks[2 * (t - 1) + 1] = 0
                        }
                    }
                }, {
                    key: "getPeaks",
                    value: function e(t, r, n) {
                        if (this.peaks)
                            return this.peaks;
                        if (!this.buffer)
                            return [];
                        if (r = r || 0,
                        n = n || t - 1,
                        this.setLength(t),
                        !this.buffer)
                            return this.params.splitChannels ? this.splitPeaks : this.mergedPeaks;
                        if (!this.buffer.length) {
                            var i = this.createBuffer(1, 4096, this.sampleRate);
                            this.buffer = i.buffer
                        }
                        var a = this.buffer.length / t, s = ~~(a / 10) || 1, o = this.buffer.numberOfChannels, u;
                        for (u = 0; u < o; u++) {
                            var l = this.splitPeaks[u]
                              , c = this.buffer.getChannelData(u)
                              , f = void 0;
                            for (f = r; f <= n; f++) {
                                var h = ~~(f * a)
                                  , d = ~~(h + a)
                                  , p = 0
                                  , v = 0
                                  , y = void 0;
                                for (y = h; y < d; y += s) {
                                    var m = c[y];
                                    m > v && (v = m),
                                    m < p && (p = m)
                                }
                                l[2 * f] = v,
                                l[2 * f + 1] = p,
                                (0 == u || v > this.mergedPeaks[2 * f]) && (this.mergedPeaks[2 * f] = v),
                                (0 == u || p < this.mergedPeaks[2 * f + 1]) && (this.mergedPeaks[2 * f + 1] = p)
                            }
                        }
                        return this.params.splitChannels ? this.splitPeaks : this.mergedPeaks
                    }
                }, {
                    key: "getPlayedPercents",
                    value: function e() {
                        return this.state.getPlayedPercents.call(this)
                    }
                }, {
                    key: "disconnectSource",
                    value: function e() {
                        this.source && this.source.disconnect()
                    }
                }, {
                    key: "destroy",
                    value: function e() {
                        this.isPaused() || this.pause(),
                        this.unAll(),
                        this.buffer = null,
                        this.disconnectFilters(),
                        this.disconnectSource(),
                        this.gainNode.disconnect(),
                        this.scriptNode.disconnect(),
                        this.analyser.disconnect(),
                        this.params.closeAudioContext && ("function" == typeof this.ac.close && "closed" != this.ac.state && this.ac.close(),
                        this.ac = null,
                        this.params.audioContext ? this.params.audioContext = null : window.WaveSurferAudioContext = null,
                        window.WaveSurferOfflineAudioContext = null)
                    }
                }, {
                    key: "load",
                    value: function e(t) {
                        this.startPosition = 0,
                        this.lastPlay = this.ac.currentTime,
                        this.buffer = t,
                        this.createSource()
                    }
                }, {
                    key: "createSource",
                    value: function e() {
                        this.disconnectSource(),
                        this.source = this.ac.createBufferSource(),
                        this.source.start = this.source.start || this.source.noteGrainOn,
                        this.source.stop = this.source.stop || this.source.noteOff,
                        this.source.playbackRate.setValueAtTime(this.playbackRate, this.ac.currentTime),
                        this.source.buffer = this.buffer,
                        this.source.connect(this.analyser)
                    }
                }, {
                    key: "isPaused",
                    value: function e() {
                        return this.state !== this.states[v]
                    }
                }, {
                    key: "getDuration",
                    value: function e() {
                        return this.explicitDuration ? this.explicitDuration : this.buffer ? this.buffer.duration : 0
                    }
                }, {
                    key: "seekTo",
                    value: function e(t, r) {
                        if (this.buffer)
                            return this.scheduledPause = null,
                            null == t && (t = this.getCurrentTime()) >= this.getDuration() && (t = 0),
                            null == r && (r = this.getDuration()),
                            this.startPosition = t,
                            this.lastPlay = this.ac.currentTime,
                            this.state === this.states[m] && this.setState(y),
                            {
                                start: t,
                                end: r
                            }
                    }
                }, {
                    key: "getPlayedTime",
                    value: function e() {
                        return (this.ac.currentTime - this.lastPlay) * this.playbackRate
                    }
                }, {
                    key: "play",
                    value: function e(t, r) {
                        if (this.buffer) {
                            this.createSource();
                            var n = this.seekTo(t, r);
                            t = n.start,
                            r = n.end,
                            this.scheduledPause = r,
                            this.source.start(0, t, r - t),
                            "suspended" == this.ac.state && this.ac.resume && this.ac.resume(),
                            this.setState(v),
                            this.fireEvent("play")
                        }
                    }
                }, {
                    key: "pause",
                    value: function e() {
                        this.scheduledPause = null,
                        this.startPosition += this.getPlayedTime(),
                        this.source && this.source.stop(0),
                        this.setState(y),
                        this.fireEvent("pause")
                    }
                }, {
                    key: "getCurrentTime",
                    value: function e() {
                        return this.state.getCurrentTime.call(this)
                    }
                }, {
                    key: "getPlaybackRate",
                    value: function e() {
                        return this.playbackRate
                    }
                }, {
                    key: "setPlaybackRate",
                    value: function e(t) {
                        t = t || 1,
                        this.isPaused() ? this.playbackRate = t : (this.pause(),
                        this.playbackRate = t,
                        this.play())
                    }
                }]),
                t
            }(p.Observer);
            t.default = b,
            b.scriptBufferSize = 256,
            e.exports = t.default
        }
    })
});

!function(e, a, t) {
    var n = e.r4 = {
        utils: {},
        cache: {}
    };
    n.utils.init = function() {
        n.cache.window = $(e),
        n.cache.document = $(a),
        n.cache.html = $("html"),
        n.cache.body = $("body"),
        n.cache.header = n.cache.body.find("header"),
        n.cache.wavesurferready = !1,
        n.cache.wavesurfer,
        n.cache.filters = [{
            f: 250,
            value: -12,
            type: "peaking"
        }, {
            f: 500,
            value: -12,
            type: "peaking"
        }, {
            f: 1e3,
            value: -12,
            type: "peaking"
        }, {
            f: 2e3,
            value: -12,
            type: "peaking"
        }, {
            f: 4e3,
            value: -12,
            type: "peaking"
        }],
        n.cache.filtersact = [{
            f: 250,
            value: 0,
            type: "peaking"
        }, {
            f: 500,
            value: 0,
            type: "peaking"
        }, {
            f: 1e3,
            value: 0,
            type: "peaking"
        }, {
            f: 2e3,
            value: 0,
            type: "peaking"
        }, {
            f: 4e3,
            value: 0,
            type: "peaking"
        }]
    }
    ,
    n.utils.gsap = function() {
        $(e).load(function(a) {
            function t() {
                var e = a.currentTarget.innerHeight
                  , t = e / 100 * 5
                  , n = $("header h1")
                  , o = $(".house-head")
                  , u = $(".house-item-back")
                  , c = $(".house-item-side")
                  , i = $(".house-item-layer1")
                  , r = $(".house-item-layer2")
                  , l = $(".house-item-layer3")
                  , f = $(".house-item-layer4")
                  , d = $(".house-item-layer5")
                  , h = Power2.easeOut;
                tl = new TimelineLite({
                    paused: !0,
                    onUpdate: s
                }),
                tl.to(n, 2, {
                    y: 100,
                    autoAlpha: 0,
                    ease: h
                }, 0).to(o, 5, {
                    y: -(e - 1 * t),
                    ease: h
                }, 0).to(u, 4, {
                    y: -(e - 1 * t),
                    ease: h
                }, .2).to(c, 2.5, {
                    y: -(e - 1 * t),
                    ease: h
                }, 0).to(i, 4, {
                    y: -(e - 1.5 * t),
                    ease: h
                }, 1).to(r, 3.8, {
                    y: -(e - 2 * t),
                    ease: h
                }, 1.2).to(l, 3.5, {
                    y: -(e - 2.5 * t),
                    ease: h
                }, 1.5).to(f, 3.2, {
                    y: -(e - 3 * t),
                    ease: h
                }, 1.8).to(d, 3, {
                    y: -(e - 3.5 * t),
                    ease: h
                }, 2)
            }
            function s() {}
            t(),
            a.currentTarget.pageYOffset > 0 && n.utils.position(tl, a.currentTarget.pageYOffset, a),
            $(e).scroll(function(e) {
                n.utils.position(tl, e.currentTarget.pageYOffset, e)
            }),
            e.addEventListener("orientationchange", function() {
                e.scroll(0, 0),
                setTimeout(function() {
                    tl.kill(),
                    t()
                }, 500)
            }),
            TweenLite.set($(".header-content"), {
                css: {
                    visibility: "visible"
                }
            })
        })
    }
    ,
    n.utils.position = function(e, a, t) {
        var s = t.currentTarget.innerWidth
          , o = t.currentTarget.innerHeight
          , u = $(".header-placeholder").height() + $(".room-content").height() + o
          , c = $(".room-content").offset().top - o
          , i = a / (u - o);
        a >= 0 && e.progress(i).pause(),
        n.cache.wavesurferready && (a > c ? $("#sound-af").hasClass("sound-af-act") || (n.utils.soundeq(n.cache.filtersact),
        n.cache.wavesurfer.setVolume(.15),
        $("#sound-af").addClass("sound-af-act")) : $("#sound-af").hasClass("sound-af-act") && (n.utils.soundeq(n.cache.filters),
        n.cache.wavesurfer.setVolume(.4),
        $("#sound-af").removeClass("sound-af-act")),
        a > c + o + o + o ? n.cache.html.addClass("add-mobile-fix") : n.cache.html.removeClass("add-mobile-fix"))
    }
    ,
    n.utils.sound = function() {
        var e = WaveSurfer.create({
            container: "#sound-af"
        });
        e.load("../sound/cyberpunk-neon-racer.mp3"),
        e.on("finish", function() {
            n.cache.wavesurfer.play(),
            n.cache.wavesurfer.skip(32.9)
        }),
        e.on("ready", function() {
            e.setVolume(.6),
            e.play(),
            n.cache.wavesurfer = e,
            n.cache.wavesurferready = !0,
            n.utils.soundeq(n.cache.filters)
        }),
        e.on("interaction", function() {
            $(".sound-btn").addClass("act").addClass("sound-btn-off")
        }),
        e.on("audioprocess", function() {
            $(".sound-btn").hasClass("sound-btn-off") && $(".sound-btn").removeClass("sound-btn-off")
        }),
        $(".sound-btn").on("click", function(e) {
            e.preventDefault(),
            $(".sound-btn").hasClass("sound-btn-off") ? (n.cache.wavesurfer.play(),
            $(this).removeClass("sound-btn-off")) : (n.cache.wavesurfer.stop(),
            $(this).addClass("sound-btn-off"))
        })
    }
    ,
    n.utils.soundeq = function(e) {
        var a = e.map(function(e) {
            var a = n.cache.wavesurfer.backend.ac.createBiquadFilter();
            return a.type = e.type,
            a.gain.value = e.value,
            a.Q.value = 1,
            a.frequency.value = e.f,
            a
        });
        n.cache.wavesurfer.backend.setFilters(a)
    }
    ,
    n.utils.domLoad = function() {
        n.utils.sound(),
        n.utils.gsap(),
        $("#play").on("click", function(a) {
            return a.preventDefault(),
            e.open(""),
            !1
        }),
        $("#twitter").on("click", function(a) {
            return a.preventDefault(),
            e.open("https://twitter.com/"),
            !1
        })
    }
    ,
    n.utils.init(),
    jQuery(function(e) {
        n.utils.domLoad()
    })
}(window, document);
