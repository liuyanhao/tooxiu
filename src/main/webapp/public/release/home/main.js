!function (e, t) {
    !e && (window.DX_CONST = {}), DX_CONST.isDemo = 0, DX_CONST.getHostUrl = function (e) {
        return DX_CONST[e].Host
    }, DX_CONST.getTplUrl = function (e) {
        return DX_CONST[e].tplUrl
    }, DX_CONST.common = {}, DX_CONST.modules = {}, DX_CONST.modulesView = {};
    var n = function () {
    }, i = function (e, t) {
        if (/_@r/g.test(e))return "";
        window.DX_CONST.md5Info = this.__Md5NAME = this.__Md5NAME ? this.__Md5NAME : this.__Md5NAME = {};
        var n = this.__Md5NAME[e], i = "1.0.0", o = this.fileMD5;
        if (n)return "v=" + n;
        if ("product" === DX_CONST.config.section) {
            for (var r in o)if (t.indexOf(r) > -1) {
                i = o[r];
                break
            }
        } else/cy$/.test(location.host) && (i = +new Date);
        return this.__Md5NAME[e] = i, "v=" + i
    };
    "undefined" == typeof console && (console = {log: n}), DX_CONST.dev_intra = {
        Host: "/public/dev/",
        tplUrl: "/Tooxiu/View/pc_zh/"
    }, DX_CONST.product = {
        Host: "/public/release/",
        tplUrl: "/Tooxiu/View/pc_zh/"
    }, DX_CONST.config = {}, DX_CONST.staticUrl = DX_CONST.staticUrl || window.sessionStorage.staticUrl || "/public";
    var o = window.sessionStorage.Target || "";
    if ("" === o)return console.log("window.sessionStorage.Target 未配置入口main");
    DX_CONST.config.section = o.indexOf("release") > -1 ? "product" : "dev_intra", DX_CONST.Target = o, DX_CONST.config.Host = DX_CONST.getHostUrl(DX_CONST.config.section), DX_CONST.config.tplUrl = DX_CONST.getTplUrl(DX_CONST.config.section), "product" === DX_CONST.config.section && (DX_CONST.isDemo = !1, console.log = n), require.config({
        urlArgs: i,
        waitSeconds: 30,
        baseUrl: "/public/dev/js/tooxiu/",
        shim: {
            modules: ["jquery"],
            JQ_layer: ["jquery"],
            mCustomScrollbar: ["jquery"],
            ajaxfileupload: ["jquery"],
            jcrop: ["jquery"],
            avatarCutter: ["jquery"],
            videojs: ["videojsIE8"]
        },
        paths: {
            jquery: DX_CONST.config.Host + "js/lib/jquery/jquery-1.11.3.min",
            text: DX_CONST.config.Host + "js/lib/requirejs/2.1.20/text-2.0.5",
            JSON: DX_CONST.config.Host + "js/tooxiu/common/JSON",
            modules: DX_CONST.config.Host + "js/tooxiu/common/modules",
            loader: DX_CONST.config.Host + "js/tooxiu/common/loader",
            header: DX_CONST.config.Host + "js/tooxiu/common/header",
            "public": DX_CONST.config.Host + "js/tooxiu/common/public",
            activity: DX_CONST.config.Host + "js/tooxiu/common/activity",
            footer: DX_CONST.config.Host + "js/tooxiu/common/footer",
            JQ_layer: DX_CONST.config.Host + "js/lib/layer-v2.0/layer/layer",
            mCustomScrollbar: DX_CONST.config.Host + "js/lib/mCustomScrollbar/jquery.mCustomScrollbar",
            ajaxfileupload: DX_CONST.config.Host + "js/lib/avatar/jquery.ajaxfileupload",
            jcrop: DX_CONST.config.Host + "js/lib/avatar/jquery.jcrop",
            jcropCss: DX_CONST.config.Host + "js/lib/avatar/css/jquery.Jcrop.min.css",
            avatarCutter: DX_CONST.config.Host + "js/lib/avatar/avatarCutter",
            christmas: DX_CONST.config.Host + "js/tooxiu/home/christmas",
            videojs: DX_CONST.config.Host + "js/lib/videoJS/video",
            videojsIE8: DX_CONST.config.Host + "js/lib/videoJS/videojs-ie8.min",
            fastclick: DX_CONST.config.Host + "js/lib/fastclick/fastclick",
            videoCss: "../../../dev/js/lib/videoJS/css/video-js.min.css"
        },
        fileMD5: {
            "admin/js/lib/artDialog/jquery.artDialog.js": "714f615b1e",
            "admin/js/lib/artDialog/jquery.artDialog.plus.js": "ad154036b4",
            "admin/js/lib/avatar/avatarCutter.js": "e0e616148a",
            "admin/js/lib/avatar/jquery.ajaxfileupload.js": "73ce0220bf",
            "admin/js/lib/avatar/jquery.jcrop.js": "28d4d24e84",
            "admin/js/lib/avatar/scripts/avatarCutter.js": "0e6c5a5de2",
            "admin/js/lib/avatar/scripts/jquery.ajaxfileupload.js": "73ce0220bf",
            "admin/js/lib/avatar/scripts/jquery.jcrop.js": "e095a6a5e2",
            "admin/js/lib/avatar/scripts/jquery.js": "841dc30647",
            "admin/js/lib/jquery.js": "698613ff3d",
            "admin/js/montage/lib/DatePicker/WdatePicker.js": "1ce6ca5596",
            "admin/js/montage/lib/DatePicker/calendar.js": "a701f6f6e7",
            "admin/js/montage/lib/DatePicker/lang/en.js": "71ed96d7a6",
            "admin/js/montage/lib/DatePicker/lang/zh-cn.js": "c14ae02929",
            "admin/js/montage/lib/DatePicker/lang/zh-tw.js": "f0779698d1",
            "admin/js/montage/lib/DatePicker/开发包/lang/en.js": "71ed96d7a6",
            "admin/js/montage/lib/DatePicker/开发包/lang/zh-cn.js": "7250d635a4",
            "admin/js/montage/lib/DatePicker/开发包/lang/zh-tw.js": "5d0fbfa7d0",
            "admin/js/montage/lib/jquery-1.11.3.min.js": "895323ed2f",
            "admin/js/montage/lib/mCustomScrollbar/jquery.mCustomScrollbar.concat.min.js": "14ef2e69a0",
            "common/JSON.js": "b8475906fa",
            "common/loader.js": "57cb8e7f13",
            "common/modules.js": "2654a27217",
            "common/search.js": "48b58301c9",
            "common/swipe.js": "8a997fb633",
            "css/video-js.min.css": "d99b2002e6",
            "css/viewPic - 副本.css": "03add9bbbb",
            "css/viewPic.css": "49f42168e3",
            "dialog.html": "b0c967d06d",
            "fashion/main.js": "0dabf3ce61",
            "footer.html": "5c2941da61",
            "home/main.js": "ae5255c594",
            "home/nowUpdate.js": "4ea0353078",
            "js/lib/fastclick/fastclick.js": "cb8140ac1c",
            "js/lib/gallery/jquery.gallery.js": "258afcf355",
            "js/lib/jquery/jquery-1.11.3.min.js": "895323ed2f",
            "js/lib/jquery/jquery.mousewheel.js": "c06b0564d8",
            "js/lib/layer-v2.0/layer/extend/layer.ext.js": "46feaa82a1",
            "js/lib/layer-v2.0/layer/layer.js": "06e4b48f76",
            "js/lib/mCustomScrollbar/jquery.mCustomScrollbar.js": "ecac41428a",
            "js/lib/slide/jquery.slide.js": "454836b47b",
            "js/lib/videoJS/video.js": "2541cb2739",
            "js/lib/videoJS/videojs-ie8.min.js": "d1ccd8ffee",
            "js/lib/viewPic/js/viewPic.js": "fbf4906c70",
            "list/listMoreAttr.js": "851e65f3aa",
            "list/main.js": "30d6308764",
            "modDatas.html": "e251fb44f5",
            "moreAttr.html": "a13c53569b",
            "newUpdate.html": "cacac5803d",
            "order.html": "99c2e91e73",
            "power.html": "acdcfe4535",
            "project/main.js": "8ac091b86d",
            "qrcode.html": "24d5fcf453",
            "read.html": "3308f1264a",
            "register.html": "853a6e7621",
            "register/main.js": "bdbaf1f106",
            "search/main.js": "88e1375c10",
            "search/search.js": "3b7fea9ff6",
            "theme/main.js": "2a3cf88fcd",
            "transfer.html": "fe1c5e1e97",
            "trial.html": "aa4c9c32c5",
            "tryOver.html": "25f0c52953",
            "tryPower.html": "1b97277494",
            "tryTip5.html": "34300c9190",
            "userCenter/main.js": "ddfc8038a8",
            "userCenter/onTrial_two.js": "168daf67d8",
            "userCenter/read.js": "827bc02718",
            "userCenter/service.js": "fd31c53ce1",
            "userCenter/transfer.js": "46b5913f59"
        }
    }), function () {
        var e = document, t = "ontouchstart" in e, n = ["jquery", "JQ_layer", "modules", "loader"],
            i = function (n, i, o) {
                if (t) {
                    DX_CONST.fastclick = n;
                    var r = n.attach(e.body);
                    $.event._user_trigger_view_list = [], $.event._user_trigger = $.event.trigger, $.event._add_user_trigger = function (e) {
                        $.event._user_trigger_view_list.push(e)
                    }, $.event._del_user_trigger = function (e) {
                        for (var t = $.event._user_trigger_view_list, n = 0, i = t.length; n < i; n++)if (t[n].cid == e) {
                            t.splice(n, 1);
                            break
                        }
                    }, $.event.trigger = function (e, t, n, i) {
                        var o = $.event._user_trigger_view_list;
                        if ("click" === e)for (var r = 0, a = o.length; r < a; r++) {
                            var s = o[r];
                            s._isSupFastClick && s._triggerClick(e, t, n, i)
                        }
                        $.event._user_trigger.apply($.event, arguments)
                    }, DX_CONST.destroyFastclick = function () {
                        r && (r.destroy(), r = null)
                    }
                }
                o = o || i, o.config({path: DX_CONST.config.Host + "js/lib/layer-v2.0/layer/"}), 1 == window.sessionStorage.tryStatus && (e.oncontextmenu = function () {
                    return !1
                }), DX_CONST.isDemo && function (e) {
                    var t = e.ajax;
                    e.ajax = function (n) {
                        function i(e) {
                            a.success.call(null, e)
                        }

                        function o(e) {
                            a.error.call(null, e)
                        }

                        var r = function () {
                        }, a = {error: n.error || r, success: n.success || r};
                        n.success = i, n.error = o;
                        var s = e.Deferred(), c = null;
                        switch (n.url) {
                            case"getPrizeInfo":
                                c = {status: 1, data: {type: 1, name: "iPhone X"}, info: "抽奖次数已达上限！"};
                                break;
                            case"getList":
                                c = {
                                    status: 1,
                                    info: "",
                                    list: [{username: "赛打压", type: "iphone X", time: "2019-02-12"}, {
                                        username: "赛打压9",
                                        type: "iphone X",
                                        time: "2019-02-12"
                                    }]
                                };
                                break;
                            default:
                                return t(n)
                        }
                        return setTimeout(function () {
                            n.success(c), s.resolve(c)
                        }, 2e3), s.promise()
                    }
                }(jQuery);
                var a = DX_CONST.Target.split(",")[0];
                console.log("当前入口模块路径：" + a), !a || require([a + "main.js"], function (e, t) {
                })
            };
        "object" != typeof JSON && require(["JSON"]), t && n.unshift("fastclick"), "function" == typeof jQuery ? (define("jquery", [], function () {
            return jQuery
        }), define("dx_main", n, i), require.config({deps: ["dx_main"]})) : require(["jquery"], function () {
            define("dx_main", n, i), require.config({deps: ["dx_main"]})
        })
    }()
}(window.DX_CONST), define("main_dev.js", function () {
}), function () {
    "use strict";
    function e(t, i) {
        var o;
        if (i = i || {}, this.trackingClick = !1, this.trackingClickStart = 0, this.targetElement = null, this.touchStartX = 0, this.touchStartY = 0, this.lastTouchIdentifier = 0, this.touchBoundary = i.touchBoundary || 10, this.layer = t, this.tapDelay = i.tapDelay || 200, this.tapTimeout = i.tapTimeout || 700, !e.notNeeded(t)) {
            for (var r = ["onMouse", "onClick", "onTouchStart", "onTouchMove", "onTouchEnd", "onTouchCancel"], a = this, s = 0, c = r.length; s < c; s++)a[r[s]] = function (e, t) {
                return function () {
                    return e.apply(t, arguments)
                }
            }(a[r[s]], a);
            n && (t.addEventListener("mouseover", this.onMouse, !0), t.addEventListener("mousedown", this.onMouse, !0), t.addEventListener("mouseup", this.onMouse, !0)), t.addEventListener("click", this.onClick, !0), t.addEventListener("touchstart", this.onTouchStart, !1), t.addEventListener("touchmove", this.onTouchMove, !1), t.addEventListener("touchend", this.onTouchEnd, !1), t.addEventListener("touchcancel", this.onTouchCancel, !1), Event.prototype.stopImmediatePropagation || (t.removeEventListener = function (e, n, i) {
                var o = Node.prototype.removeEventListener;
                "click" === e ? o.call(t, e, n.hijacked || n, i) : o.call(t, e, n, i)
            }, t.addEventListener = function (e, n, i) {
                var o = Node.prototype.addEventListener;
                "click" === e ? o.call(t, e, n.hijacked || (n.hijacked = function (e) {
                        e.propagationStopped || n(e)
                    }), i) : o.call(t, e, n, i)
            }), "function" == typeof t.onclick && (o = t.onclick, t.addEventListener("click", function (e) {
                o(e)
            }, !1), t.onclick = null)
        }
    }

    var t = navigator.userAgent.indexOf("Windows Phone") >= 0, n = navigator.userAgent.indexOf("Android") > 0 && !t,
        i = /iP(ad|hone|od)/.test(navigator.userAgent) && !t, o = i && /OS 4_\d(_\d)?/.test(navigator.userAgent),
        r = i && /OS [6-7]_\d/.test(navigator.userAgent), a = navigator.userAgent.indexOf("BB10") > 0;
    e.prototype.needsClick = function (e) {
        switch (e.nodeName.toLowerCase()) {
            case"button":
            case"select":
            case"textarea":
                if (e.disabled)return !0;
                break;
            case"input":
                if (i && "file" === e.type || e.disabled)return !0;
                break;
            case"label":
            case"iframe":
            case"video":
                return !0
        }
        return /\bneedsclick\b/.test(e.className)
    }, e.prototype.needsFocus = function (e) {
        switch (e.nodeName.toLowerCase()) {
            case"textarea":
                return !0;
            case"select":
                return !n;
            case"input":
                switch (e.type) {
                    case"button":
                    case"checkbox":
                    case"file":
                    case"image":
                    case"radio":
                    case"submit":
                        return !1
                }
                return !e.disabled && !e.readOnly;
            default:
                return /\bneedsfocus\b/.test(e.className)
        }
    }, e.prototype.sendClick = function (e, t) {
        var n, i;
        document.activeElement && document.activeElement !== e && document.activeElement.blur(), i = t.changedTouches[0], n = document.createEvent("MouseEvents"), n.initMouseEvent(this.determineEventType(e), !0, !0, window, 1, i.screenX, i.screenY, i.clientX, i.clientY, !1, !1, !1, !1, 0, null), n.forwardedTouchEvent = !0, e.dispatchEvent(n)
    }, e.prototype.determineEventType = function (e) {
        return n && "select" === e.tagName.toLowerCase() ? "mousedown" : "click"
    }, e.prototype.focus = function (e) {
        var t;
        i && e.setSelectionRange && 0 !== e.type.indexOf("date") && "time" !== e.type && "month" !== e.type && "email" !== e.type ? (t = e.value.length, e.setSelectionRange(t, t)) : e.focus()
    }, e.prototype.updateScrollParent = function (e) {
        var t, n;
        if (!(t = e.fastClickScrollParent) || !t.contains(e)) {
            n = e;
            do {
                if (n.scrollHeight > n.offsetHeight) {
                    t = n, e.fastClickScrollParent = n;
                    break
                }
                n = n.parentElement
            } while (n)
        }
        t && (t.fastClickLastScrollTop = t.scrollTop)
    }, e.prototype.getTargetElementFromEventTarget = function (e) {
        return e.nodeType === Node.TEXT_NODE ? e.parentNode : e
    }, e.prototype.onTouchStart = function (e) {
        var t, n, r;
        if (e.targetTouches.length > 1)return !0;
        if (t = this.getTargetElementFromEventTarget(e.target), n = e.targetTouches[0], i) {
            if (r = window.getSelection(), r.rangeCount && !r.isCollapsed)return !0;
            if (!o) {
                if (n.identifier && n.identifier === this.lastTouchIdentifier)return e.preventDefault(), !1;
                this.lastTouchIdentifier = n.identifier, this.updateScrollParent(t)
            }
        }
        return this.trackingClick = !0, this.trackingClickStart = e.timeStamp, this.targetElement = t, this.touchStartX = n.pageX, this.touchStartY = n.pageY, e.timeStamp - this.lastClickTime < this.tapDelay && e.preventDefault(), !0
    }, e.prototype.touchHasMoved = function (e) {
        var t = e.changedTouches[0], n = this.touchBoundary;
        return Math.abs(t.pageX - this.touchStartX) > n || Math.abs(t.pageY - this.touchStartY) > n
    }, e.prototype.onTouchMove = function (e) {
        return !this.trackingClick || ((this.targetElement !== this.getTargetElementFromEventTarget(e.target) || this.touchHasMoved(e)) && (this.trackingClick = !1, this.targetElement = null), !0)
    }, e.prototype.findControl = function (e) {
        return e.control !== undefined ? e.control : e.htmlFor ? document.getElementById(e.htmlFor) : e.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")
    }, e.prototype.onTouchEnd = function (e) {
        var t, a, s, c, l, u = this.targetElement;
        if (!this.trackingClick)return !0;
        if (e.timeStamp - this.lastClickTime < this.tapDelay)return this.cancelNextClick = !0, !0;
        if (e.timeStamp - this.trackingClickStart > this.tapTimeout)return !0;
        if (this.cancelNextClick = !1, this.lastClickTime = e.timeStamp, a = this.trackingClickStart, this.trackingClick = !1, this.trackingClickStart = 0, r && (l = e.changedTouches[0], u = document.elementFromPoint(l.pageX - window.pageXOffset, l.pageY - window.pageYOffset) || u, u.fastClickScrollParent = this.targetElement.fastClickScrollParent), "label" === (s = u.tagName.toLowerCase())) {
            if (t = this.findControl(u)) {
                if (this.focus(u), n)return !1;
                u = t
            }
        } else if (this.needsFocus(u))return e.timeStamp - a > 100 || i && window.top !== window && "input" === s ? (this.targetElement = null, !1) : (this.focus(u), this.sendClick(u, e), i && "select" === s || (this.targetElement = null, e.preventDefault()), !1);
        return !(!i || o || !(c = u.fastClickScrollParent) || c.fastClickLastScrollTop === c.scrollTop) || (this.needsClick(u) || (e.preventDefault(), this.sendClick(u, e)), !1)
    }, e.prototype.onTouchCancel = function () {
        this.trackingClick = !1, this.targetElement = null
    }, e.prototype.onMouse = function (e) {
        return !this.targetElement || (!!e.forwardedTouchEvent || (!e.cancelable || (!(!this.needsClick(this.targetElement) || this.cancelNextClick) || (e.stopImmediatePropagation ? e.stopImmediatePropagation() : e.propagationStopped = !0, e.stopPropagation(), e.preventDefault(), !1))))
    }, e.prototype.onClick = function (e) {
        var t;
        return this.trackingClick ? (this.targetElement = null, this.trackingClick = !1, !0) : "submit" === e.target.type && 0 === e.detail || (t = this.onMouse(e), t || (this.targetElement = null), t)
    }, e.prototype.destroy = function () {
        var e = this.layer;
        n && (e.removeEventListener("mouseover", this.onMouse, !0), e.removeEventListener("mousedown", this.onMouse, !0), e.removeEventListener("mouseup", this.onMouse, !0)), e.removeEventListener("click", this.onClick, !0), e.removeEventListener("touchstart", this.onTouchStart, !1), e.removeEventListener("touchmove", this.onTouchMove, !1), e.removeEventListener("touchend", this.onTouchEnd, !1), e.removeEventListener("touchcancel", this.onTouchCancel, !1)
    }, e.notNeeded = function (e) {
        var t, i, o;
        if ("undefined" == typeof window.ontouchstart)return !0;
        if (i = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1]) {
            if (!n)return !0;
            if (t = document.querySelector("meta[name=viewport]")) {
                if (-1 !== t.content.indexOf("user-scalable=no"))return !0;
                if (i > 31 && document.documentElement.scrollWidth <= window.outerWidth)return !0
            }
        }
        if (a && (o = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/), o[1] >= 10 && o[2] >= 3 && (t = document.querySelector("meta[name=viewport]")))) {
            if (-1 !== t.content.indexOf("user-scalable=no"))return !0;
            if (document.documentElement.scrollWidth <= window.outerWidth)return !0
        }
        return "none" === e.style.msTouchAction || "manipulation" === e.style.touchAction || (!!(+(/Firefox\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1] >= 27 && (t = document.querySelector("meta[name=viewport]")) && (-1 !== t.content.indexOf("user-scalable=no") || document.documentElement.scrollWidth <= window.outerWidth)) || ("none" === e.style.touchAction || "manipulation" === e.style.touchAction))
    }, e.attach = function (t, n) {
        return new e(t, n)
    }, "function" == typeof define && "object" == typeof define.amd && define.amd ? define("fastclick", [], function () {
        return e
    }) : "undefined" != typeof module && module.exports ? (module.exports = e.attach, module.exports.FastClick = e) : window.FastClick = e
}(), function (e, t) {
    "use strict";
    var n, i, o = {
        getPath: function () {
            var e = document.scripts, t = e[e.length - 1], n = t.src;
            if (!t.getAttribute("merge"))return n.substring(0, n.lastIndexOf("/") + 1)
        }(),
        enter: function (e) {
            13 === e.keyCode && e.preventDefault()
        },
        config: {},
        end: {},
        btn: ["&#x786E;&#x5B9A;", "&#x53D6;&#x6D88;"],
        type: ["dialog", "page", "iframe", "loading", "tips"]
    }, r = {
        v: "2.1", ie6: !!e.ActiveXObject && !e.XMLHttpRequest, index: 0, path: o.getPath, config: function (e, t) {
            var i = 0;
            return e = e || {}, r.cache = o.config = n.extend(o.config, e), r.path = o.config.path || r.path, "string" == typeof e.extend && (e.extend = [e.extend]), r.use("skin/layer.css", e.extend && e.extend.length > 0 ? function a() {
                var n = e.extend;
                r.use(n[n[i] ? i : i - 1], i < n.length ? function () {
                    return ++i, a
                }() : t)
            }() : t), this
        }, use: function (e, t, i) {
            var o = n("head")[0], e = e.replace(/\s/g, ""), a = /\.css$/.test(e),
                s = document.createElement(a ? "link" : "script"), c = "layui_layer_" + e.replace(/\.|\//g, "");
            return r.path ? (a && (s.rel = "stylesheet"), s[a ? "href" : "src"] = /^http:\/\//.test(e) ? e : r.path + e, s.id = c, n("#" + c)[0] || o.appendChild(s), function l() {
                (a ? 1989 === parseInt(n("#" + c).css("width")) : r[i || c]) ? function () {
                    t && t();
                    try {
                        a || o.removeChild(s)
                    } catch (e) {
                    }
                }() : setTimeout(l, 100)
            }(), this) : void 0
        }, ready: function (e, t) {
            var i = "function" == typeof e;
            return i && (t = e), r.config(n.extend(o.config, function () {
                return i ? {} : {path: e}
            }()), t), this
        }, alert: function (e, t, i) {
            var o = "function" == typeof t;
            return o && (i = t), r.open(n.extend({content: e, yes: i}, o ? {} : t))
        }, confirm: function (e, t, i, a) {
            var s = "function" == typeof t;
            return s && (a = i, i = t), r.open(n.extend({content: e, btn: o.btn, yes: i, cancel: a}, s ? {} : t))
        }, msg: function (e, t, i) {
            var a = "function" == typeof t, c = o.config.skin, l = (c ? c + " " + c + "-msg" : "") || "layui-layer-msg",
                u = s.anim.length - 1;
            return a && (i = t), r.open(n.extend({
                content: e,
                time: 3e3,
                shade: !1,
                skin: l,
                title: !1,
                closeBtn: !1,
                btn: !1,
                end: i
            }, a && !o.config.skin ? {skin: l + " layui-layer-hui", shift: u} : function () {
                return t = t || {}, (-1 === t.icon || void 0 === t.icon && !o.config.skin) && (t.skin = l + " " + (t.skin || "layui-layer-hui")), t
            }()))
        }, load: function (e, t) {
            return r.open(n.extend({type: 3, icon: e || 0, shade: .01}, t))
        }, tips: function (e, t, i) {
            return r.open(n.extend({type: 4, content: [e, t], closeBtn: !1, time: 3e3, maxWidth: 210}, i))
        }
    }, a = function (e) {
        var t = this;
        t.index = ++r.index, t.config = n.extend({}, t.config, o.config, e), t.creat()
    };
    a.pt = a.prototype;
    var s = ["layui-layer", ".layui-layer-title", ".layui-layer-main", ".layui-layer-dialog", "layui-layer-iframe", "layui-layer-content", "layui-layer-btn", "layui-layer-close"];
    s.anim = ["layui-anim", "layui-anim-01", "layui-anim-02", "layui-anim-03", "layui-anim-04", "layui-anim-05", "layui-anim-06"], a.pt.config = {
        type: 0,
        shade: .3,
        fix: !0,
        move: s[1],
        title: "&#x4FE1;&#x606F;",
        offset: "auto",
        area: "auto",
        closeBtn: 1,
        time: 0,
        zIndex: 19891014,
        maxWidth: 600,
        shift: 0,
        icon: -1,
        scrollbar: !0,
        tips: 2
    }, a.pt.vessel = function (e, t) {
        var n = this, i = n.index, r = n.config, a = r.zIndex + i, c = "object" == typeof r.title,
            l = r.maxmin && (1 === r.type || 2 === r.type),
            u = r.title ? '<div class="layui-layer-title" style="' + (c ? r.title[1] : "") + '">' + (c ? r.title[0] : r.title) + "</div>" : "";
        return r.zIndex = a, t([r.shade ? '<div class="layui-layer-shade" id="layui-layer-shade' + i + '" times="' + i + '" style="z-index:' + (a - 1) + "; background-color:" + (r.shade[1] || "#000") + "; opacity:" + (r.shade[0] || r.shade) + "; filter:alpha(opacity=" + (100 * r.shade[0] || 100 * r.shade) + ');"></div>' : "", '<div class="' + s[0] + " " + (s.anim[r.shift] || "") + " layui-layer-" + o.type[r.type] + (0 != r.type && 2 != r.type || r.shade ? "" : " layui-layer-border") + " " + (r.skin || "") + '" id="' + s[0] + i + '" type="' + o.type[r.type] + '" times="' + i + '" showtime="' + r.time + '" conType="' + (e ? "object" : "string") + '" style="z-index: ' + a + "; width:" + r.area[0] + ";height:" + r.area[1] + (r.fix ? "" : ";position:absolute;") + '">' + (e && 2 != r.type ? "" : u) + '<div class="layui-layer-content' + (0 == r.type && -1 !== r.icon ? " layui-layer-padding" : "") + (3 == r.type ? " layui-layer-loading" + r.icon : "") + '">' + (0 == r.type && -1 !== r.icon ? '<i class="layui-layer-ico layui-layer-ico' + r.icon + '"></i>' : "") + (1 == r.type && e ? "" : r.content || "") + '</div><span class="layui-layer-setwin">' + function () {
            var e = l ? '<a class="layui-layer-min" href="javascript:;"><cite></cite></a><a class="layui-layer-ico layui-layer-max" href="javascript:;"></a>' : "";
            return r.closeBtn && (e += '<a class="layui-layer-ico ' + s[7] + " " + s[7] + (r.title ? r.closeBtn : 4 == r.type ? "1" : "2") + '" href="javascript:;"></a>'), e
        }() + "</span>" + (r.btn ? function () {
            var e = "";
            "string" == typeof r.btn && (r.btn = [r.btn]);
            for (var t = 0, n = r.btn.length; n > t; t++)e += '<a class="' + s[6] + t + '">' + r.btn[t] + "</a>";
            return '<div class="' + s[6] + '">' + e + "</div>"
        }() : "") + "</div>"], u), n
    }, a.pt.creat = function () {
        var e = this, t = e.config, a = e.index, c = t.content, l = "object" == typeof c;
        switch ("string" == typeof t.area && (t.area = "auto" === t.area ? ["", ""] : [t.area, ""]), t.type) {
            case 0:
                t.btn = "btn" in t ? t.btn : o.btn[0], r.closeAll("dialog");
                break;
            case 2:
                var c = t.content = l ? t.content : [t.content || "http://layer.layui.com", "auto"];
                t.content = '<iframe scrolling="' + (t.content[1] || "auto") + '" allowtransparency="true" id="' + s[4] + a + '" name="' + s[4] + a + '" onload="this.className=\'\';" class="layui-layer-load" frameborder="0" src="' + t.content[0] + '"></iframe>';
                break;
            case 3:
                t.title = !1, t.closeBtn = !1, -1 === t.icon && t.icon, r.closeAll("loading");
                break;
            case 4:
                l || (t.content = [t.content, "body"]), t.follow = t.content[1], t.content = t.content[0] + '<i class="layui-layer-TipsG"></i>', t.title = !1, t.shade = !1, t.fix = !1, t.tips = "object" == typeof t.tips ? t.tips : [t.tips, !0], t.tipsMore || r.closeAll("tips")
        }
        e.vessel(l, function (i, o) {
            n("body").append(i[0]), l ? function () {
                2 == t.type || 4 == t.type ? function () {
                    n("body").append(i[1])
                }() : function () {
                    c.parents("." + s[0])[0] || (c.show().addClass("layui-layer-wrap").wrap(i[1]), n("#" + s[0] + a).find("." + s[5]).before(o))
                }()
            }() : n("body").append(i[1]), e.layero = n("#" + s[0] + a), t.scrollbar || s.html.css("overflow", "hidden").attr("layer-full", a)
        }).auto(a), 2 == t.type && r.ie6 && e.layero.find("iframe").attr("src", c[0]), n(document).off("keydown", o.enter).on("keydown", o.enter), e.layero.on("keydown", function (e) {
            n(document).off("keydown", o.enter)
        }), 4 == t.type ? e.tips() : e.offset(), t.fix && i.on("resize", function () {
            e.offset(), (/^\d+%$/.test(t.area[0]) || /^\d+%$/.test(t.area[1])) && e.auto(a), 4 == t.type && e.tips()
        }), t.time <= 0 || setTimeout(function () {
            r.close(e.index)
        }, t.time), e.move().callback()
    }, a.pt.auto = function (e) {
        function t(e) {
            e = a.find(e), e.height(c[1] - l - u - (parseFloat(e.css("padding-top")) + parseFloat(e.css("padding-bottom"))))
        }

        var o = this, r = o.config, a = n("#" + s[0] + e);
        "" === r.area[0] && r.maxWidth > 0 && (/MSIE 7/.test(navigator.userAgent) && r.btn && a.width(a.innerWidth()), a.outerWidth() > r.maxWidth && a.width(r.maxWidth));
        var c = [a.innerWidth(), a.innerHeight()], l = a.find(s[1]).outerHeight() || 0,
            u = a.find("." + s[6]).outerHeight() || 0;
        switch (r.type) {
            case 2:
                t("iframe");
                break;
            default:
                "" === r.area[1] ? r.fix && c[1] >= i.height() && (c[1] = i.height(), t("." + s[5])) : t("." + s[5])
        }
        return o
    }, a.pt.offset = function () {
        var e = this, t = e.config, n = e.layero, o = [n.outerWidth(), n.outerHeight()],
            r = "object" == typeof t.offset;
        e.offsetTop = (i.height() - o[1]) / 2, e.offsetLeft = (i.width() - o[0]) / 2, r ? (e.offsetTop = t.offset[0], e.offsetLeft = t.offset[1] || e.offsetLeft) : "auto" !== t.offset && (e.offsetTop = t.offset, "rb" === t.offset && (e.offsetTop = i.height() - o[1], e.offsetLeft = i.width() - o[0])), t.fix || (e.offsetTop = /%$/.test(e.offsetTop) ? i.height() * parseFloat(e.offsetTop) / 100 : parseFloat(e.offsetTop), e.offsetLeft = /%$/.test(e.offsetLeft) ? i.width() * parseFloat(e.offsetLeft) / 100 : parseFloat(e.offsetLeft), e.offsetTop += i.scrollTop(), e.offsetLeft += i.scrollLeft()), n.css({
            top: e.offsetTop,
            left: e.offsetLeft
        })
    }, a.pt.tips = function () {
        var e = this, t = e.config, o = e.layero, r = [o.outerWidth(), o.outerHeight()], a = n(t.follow);
        a[0] || (a = n("body"));
        var c = {width: a.outerWidth(), height: a.outerHeight(), top: a.offset().top, left: a.offset().left},
            l = o.find(".layui-layer-TipsG"), u = t.tips[0];
        t.tips[1] || l.remove(), c.autoLeft = function () {
            c.left + r[0] - i.width() > 0 ? (c.tipLeft = c.left + c.width - r[0], l.css({
                right: 12,
                left: "auto"
            })) : c.tipLeft = c.left
        }, c.where = [function () {
            c.autoLeft(), c.tipTop = c.top - r[1] - 10, l.removeClass("layui-layer-TipsB").addClass("layui-layer-TipsT").css("border-right-color", t.tips[1])
        }, function () {
            c.tipLeft = c.left + c.width + 10, c.tipTop = c.top, l.removeClass("layui-layer-TipsL").addClass("layui-layer-TipsR").css("border-bottom-color", t.tips[1])
        }, function () {
            c.autoLeft(), c.tipTop = c.top + c.height + 10, l.removeClass("layui-layer-TipsT").addClass("layui-layer-TipsB").css("border-right-color", t.tips[1])
        }, function () {
            c.tipLeft = c.left - r[0] - 10, c.tipTop = c.top, l.removeClass("layui-layer-TipsR").addClass("layui-layer-TipsL").css("border-bottom-color", t.tips[1])
        }], c.where[u - 1](), 1 === u ? c.top - (i.scrollTop() + r[1] + 16) < 0 && c.where[2]() : 2 === u ? i.width() - (c.left + c.width + r[0] + 16) > 0 || c.where[3]() : 3 === u ? c.top - i.scrollTop() + c.height + r[1] + 16 - i.height() > 0 && c.where[0]() : 4 === u && r[0] + 16 - c.left > 0 && c.where[1](), o.find("." + s[5]).css({
            "background-color": t.tips[1],
            "padding-right": t.closeBtn ? "30px" : ""
        }), o.css({left: c.tipLeft, top: c.tipTop})
    }, a.pt.move = function () {
        var e = this, t = e.config, o = {
            setY: 0, moveLayer: function () {
                var e = o.layero, t = parseInt(e.css("margin-left")), n = parseInt(o.move.css("left"));
                0 === t || (n -= t), "fixed" !== e.css("position") && (n -= e.parent().offset().left, o.setY = 0), e.css({
                    left: n,
                    top: parseInt(o.move.css("top")) - o.setY
                })
            }
        }, r = e.layero.find(t.move);
        return t.move && r.attr("move", "ok"), r.css({cursor: t.move ? "move" : "auto"}), n(t.move).on("mousedown", function (e) {
            if (e.preventDefault(), "ok" === n(this).attr("move")) {
                o.ismove = !0, o.layero = n(this).parents("." + s[0]);
                var r = o.layero.offset().left, a = o.layero.offset().top, c = o.layero.outerWidth() - 6,
                    l = o.layero.outerHeight() - 6;
                n("#layui-layer-moves")[0] || n("body").append('<div id="layui-layer-moves" class="layui-layer-moves" style="left:' + r + "px; top:" + a + "px; width:" + c + "px; height:" + l + 'px; z-index:2147483584"></div>'), o.move = n("#layui-layer-moves"), t.moveType && o.move.css({visibility: "hidden"}), o.moveX = e.pageX - o.move.position().left, o.moveY = e.pageY - o.move.position().top, "fixed" !== o.layero.css("position") || (o.setY = i.scrollTop())
            }
        }), n(document).mousemove(function (e) {
            if (o.ismove) {
                var n = e.pageX - o.moveX, r = e.pageY - o.moveY;
                if (e.preventDefault(), !t.moveOut) {
                    o.setY = i.scrollTop();
                    var a = i.width() - o.move.outerWidth(), s = o.setY;
                    0 > n && (n = 0), n > a && (n = a), s > r && (r = s), r > i.height() - o.move.outerHeight() + o.setY && (r = i.height() - o.move.outerHeight() + o.setY)
                }
                o.move.css({left: n, top: r}), t.moveType && o.moveLayer(), n = r = a = s = null
            }
        }).mouseup(function () {
            try {
                o.ismove && (o.moveLayer(), o.move.remove(), t.moveEnd && t.moveEnd()), o.ismove = !1
            } catch (e) {
                o.ismove = !1
            }
        }), e
    }, a.pt.callback = function () {
        function e() {
            !1 === (a.cancel && a.cancel(t.index)) || r.close(t.index)
        }

        var t = this, i = t.layero, a = t.config;
        t.openLayer(), a.success && (2 == a.type ? i.find("iframe").on("load", function () {
            a.success(i, t.index)
        }) : a.success(i, t.index)), r.ie6 && t.IE6(i), i.find("." + s[6]).children("a").on("click", function () {
            var o = n(this).index();
            a["btn" + (o + 1)] && a["btn" + (o + 1)](t.index, i), 0 === o ? a.yes ? a.yes(t.index, i) : r.close(t.index) : 1 === o ? e() : a["btn" + (o + 1)] || r.close(t.index)
        }), i.find("." + s[7]).on("click", e), a.shadeClose && n("#layui-layer-shade" + t.index).on("click", function () {
            r.close(t.index)
        }), i.find(".layui-layer-min").on("click", function () {
            r.min(t.index, a), a.min && a.min(i)
        }), i.find(".layui-layer-max").on("click", function () {
            n(this).hasClass("layui-layer-maxmin") ? (r.restore(t.index), a.restore && a.restore(i)) : (r.full(t.index, a), a.full && a.full(i))
        }), a.end && (o.end[t.index] = a.end)
    }, o.reselect = function () {
        n.each(n("select"), function (e, t) {
            var i = n(this);
            i.parents("." + s[0])[0] || 1 == i.attr("layer") && n("." + s[0]).length < 1 && i.removeAttr("layer").show(), i = null
        })
    }, a.pt.IE6 = function (e) {
        function t() {
            e.css({top: r + (o.config.fix ? i.scrollTop() : 0)})
        }

        var o = this, r = e.offset().top;
        t(), i.scroll(t), n("select").each(function (e, t) {
            var i = n(this);
            i.parents("." + s[0])[0] || "none" === i.css("display") || i.attr({layer: "1"}).hide(), i = null
        })
    }, a.pt.openLayer = function () {
        var e = this;
        r.zIndex = e.config.zIndex, r.setTop = function (e) {
            var t = function () {
                r.zIndex++, e.css("z-index", r.zIndex + 1)
            };
            return r.zIndex = parseInt(e[0].style.zIndex), e.on("mousedown", t), r.zIndex
        }
    }, o.record = function (e) {
        var t = [e.outerWidth(), e.outerHeight(), e.position().top, e.position().left + parseFloat(e.css("margin-left"))];
        e.find(".layui-layer-max").addClass("layui-layer-maxmin"), e.attr({area: t})
    }, o.rescollbar = function (e) {
        s.html.attr("layer-full") == e && (s.html[0].style.removeProperty ? s.html[0].style.removeProperty("overflow") : s.html[0].style.removeAttribute("overflow"), s.html.removeAttr("layer-full"))
    }, e.layer = r, r.getChildFrame = function (e, t) {
        return t = t || n("." + s[4]).attr("times"), n("#" + s[0] + t).find("iframe").contents().find(e)
    }, r.getFrameIndex = function (e) {
        return n("#" + e).parents("." + s[4]).attr("times")
    }, r.iframeAuto = function (e) {
        if (e) {
            var t = r.getChildFrame("html", e).outerHeight(), i = n("#" + s[0] + e),
                o = i.find(s[1]).outerHeight() || 0, a = i.find("." + s[6]).outerHeight() || 0;
            i.css({height: t + o + a}), i.find("iframe").css({height: t})
        }
    }, r.iframeSrc = function (e, t) {
        n("#" + s[0] + e).find("iframe").attr("src", t)
    }, r.style = function (e, t) {
        var i = n("#" + s[0] + e), r = i.attr("type"), a = i.find(s[1]).outerHeight() || 0,
            c = i.find("." + s[6]).outerHeight() || 0;
        (r === o.type[1] || r === o.type[2]) && (i.css(t), r === o.type[2] && i.find("iframe").css({height: parseFloat(t.height) - a - c}))
    }, r.min = function (e, t) {
        var i = n("#" + s[0] + e), a = i.find(s[1]).outerHeight() || 0;
        o.record(i), r.style(e, {
            width: 180,
            height: a,
            overflow: "hidden"
        }), i.find(".layui-layer-min").hide(), "page" === i.attr("type") && i.find(s[4]).hide(), o.rescollbar(e)
    }, r.restore = function (e) {
        var t = n("#" + s[0] + e), i = t.attr("area").split(",");
        t.attr("type"), r.style(e, {
            width: parseFloat(i[0]),
            height: parseFloat(i[1]),
            top: parseFloat(i[2]),
            left: parseFloat(i[3]),
            overflow: "visible"
        }), t.find(".layui-layer-max").removeClass("layui-layer-maxmin"), t.find(".layui-layer-min").show(), "page" === t.attr("type") && t.find(s[4]).show(), o.rescollbar(e)
    }, r.full = function (e) {
        var t, a = n("#" + s[0] + e);
        o.record(a), s.html.attr("layer-full") || s.html.css("overflow", "hidden").attr("layer-full", e), clearTimeout(t), t = setTimeout(function () {
            var t = "fixed" === a.css("position");
            r.style(e, {
                top: t ? 0 : i.scrollTop(),
                left: t ? 0 : i.scrollLeft(),
                width: i.width(),
                height: i.height()
            }), a.find(".layui-layer-min").hide()
        }, 100)
    }, r.title = function (e, t) {
        n("#" + s[0] + (t || r.index)).find(s[1]).html(e)
    }, r.close = function (e) {
        var t = n("#" + s[0] + e), i = t.attr("type");
        if (t[0]) {
            if (i === o.type[1] && "object" === t.attr("conType")) {
                t.children(":not(." + s[5] + ")").remove();
                for (var a = 0; 2 > a; a++)t.find(".layui-layer-wrap").unwrap().hide()
            } else {
                if (i === o.type[2])try {
                    var c = n("#" + s[4] + e)[0];
                    c.contentWindow.document.write(""), c.contentWindow.close(), t.find("." + s[5])[0].removeChild(c)
                } catch (l) {
                }
                t[0].innerHTML = "", t.remove()
            }
            n("#layui-layer-moves, #layui-layer-shade" + e).remove(), r.ie6 && o.reselect(), o.rescollbar(e), n(document).off("keydown", o.enter), "function" == typeof o.end[e] && o.end[e](), delete o.end[e]
        }
    }, r.closeAll = function (e) {
        n.each(n("." + s[0]), function () {
            var t = n(this), i = e ? t.attr("type") === e : 1;
            i && r.close(t.attr("times")), i = null
        })
    }, o.run = function () {
        n = jQuery, i = n(e), s.html = n("html"), r.open = function (e) {
            return new a(e).index
        }
    }, "function" == typeof define ? define("JQ_layer", [], function () {
        return o.run(), r
    }) : function () {
        o.run(), r.use("/public/release/js/lib/layer-v2.0/layer/skin/layer.css")
    }()
}(window), define("modules", ["jquery"], function () {
    var e = Array.prototype, t = Object.prototype, n = Function.prototype, i = (e.push, e.slice),
        o = (e.concat, t.toString), r = t.hasOwnProperty,
        a = ["Arguments", "Function", "String", "Number", "Date", "RegExp", "Object"];
    for (var s in a)$["is" + a[s]] = function (e) {
        var t = i.call(arguments, 1);
        return function () {
            var n = i.call(arguments);
            return e.apply(null, t.concat(n))
        }
    }(function () {
        return o.call(arguments[1]) == "[object " + arguments[0] + "]"
    }, a[s]);
    var c = {
        findWhere: function (e, t) {
            var n = null;
            return $.each(e, function (e, i) {
                for (var o in t)if ($.isObject(i) && i[o] == t[o])return n = i, !1
            }), n
        }, resetData: function (e, t) {
            if ($.isArray(e)) {
                t = t || 8;
                var n = [], i = e.length;
                if (i <= t) n.push(e); else for (var o = Math.ceil(i / t), r = 0; r < o; r++)n.push(e.slice(t * r, t * (r + 1)));
                return n
            }
        }, stopEventBubble: function (e) {
            var t = e || window.event;
            t && t.stopPropagation ? t.stopPropagation() : t.cancelBubble = !0
        }, stopEventDefault: function (e) {
            var t = e || window.event;
            t && t.preventDefault ? t.preventDefault() : t.returnValue = !1
        }, isArray: Array.isArray || function (e) {
            return "[object Array]" == o.call(e)
        }, isEmpty: function (e) {
            if (null == e)return !0;
            if (this.isNumber(e))return !1;
            if (this.isArray(e) || this.isString(e))return 0 === e.length;
            for (var t in e)if (this.hasAttr(e, t))return !1;
            return !0
        }, escape: function (e) {
            if (null == e)return "";
            var t = {"&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#x27;", "/": "&#x2F;"};
            return ("" + e).replace(new RegExp("[" + this.getKeys(t).join("") + "]", "g"), function (e) {
                return t[e]
            })
        }, getKeys: function (e) {
            if (this.isObject(e)) {
                if (Object.keys)return Object.keys(e);
                var t = [];
                for (var n in e)this.hasAttr(e, n) && t.push(n);
                return t
            }
        }, hasAttr: function (e, t) {
            return r.call(e, t)
        }, template: function (e, t, n) {
            var i, o, r = {evaluate: /<%([\s\S]+?)%>/g, interpolate: /<%=([\s\S]+?)%>/g, escape: /<%-([\s\S]+?)%>/g},
                a = /(.)^/,
                s = {"'": "'", "\\": "\\", "\r": "r", "\n": "n", "\t": "t", "\u2028": "u2028", "\u2029": "u2029"},
                c = /\\|'|\r|\n|\t|\u2028|\u2029/g;
            if (this.isEmpty(e))return o = new Function, t ? o(t) : function (e) {
                return o.call(this, e)
            };
            var n = $.extend({}, n, r),
                l = new RegExp([(n.escape || a).source, (n.interpolate || a).source, (n.evaluate || a).source].join("|") + "|$", "g"),
                u = 0, f = "__p+='";
            e.replace(l, function (t, n, i, o, r) {
                return f += e.slice(u, r).replace(c, function (e) {
                    return "\\" + s[e]
                }), n && (f += "'+\n((__t=(" + n + "))==null?'':$.escape(__t))+\n'"), i && (f += "'+\n((__t=(" + i + "))==null?'':__t)+\n'"), o && (f += "';\n" + o + "\n__p+='"), u = r + t.length, t
            }), f += "';\n", n.variable || (f = "with(obj||{}){\n" + f + "}\n"), f = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + f + "return __p;\n";
            try {
                o = new Function(n.variable || "obj", f)
            } catch (d) {
                throw d.source = f, d
            }
            if (t)return o(t);
            var i = function (e) {
                return o.call(this, e)
            };
            return i.source = "function(" + (n.variable || "obj") + "){\n" + f + "}", i
        }, addPlaceholder: function (e) {
            "undefined" == typeof document.createElement("input").placeholder && e.each(function (e) {
                var t = $(this), n = t.attr("placeholder"), i = null;
                n && !t.val() && t.val(n).css({
                    color: "#aaa",
                    "line-height": t.css("height")
                }), "password" === t.attr("type") ? (i = $('<input type="text">').addClass(t[0].className).val(n).css({
                    color: "#aaa",
                    "line-height": t.css("height")
                }).on("focus", function () {
                    i.hide(), t.show().focus()
                }), t.on("focus", function () {
                    t.val() === n && t.val(null).css("color", "")
                }).on("blur", function () {
                    var e = t.val();
                    e && e !== n || (i.show(), t.hide())
                }).after(i).hide()) : t.on("focus", function () {
                    t.val() === n && t.val(null).css("color", "")
                }).on("blur", function () {
                    t.val() || t.val(n).css("color", "#aaa").css("line-height", t.css("height"))
                })
            })
        }, browser: function () {
            var e, t;
            return e = function (e) {
                e = e.toLowerCase();
                var t = /(chrome)[ \/]([\w.]+)/.exec(e) || /(webkit)[ \/]([\w.]+)/.exec(e) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e) || /(msie) ([\w.]+)/.exec(e) || e.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e) || [];
                return {browser: t[1] || "", version: t[2] || "0"}
            }(navigator.userAgent), t = {}, e.browser && (t[e.browser] = !0, t.version = e.version), t.chrome ? t.webkit = !0 : t.webkit && (t.safari = !0), t
        }(), cookie: function (e) {
            function t(t) {
                return e.isString(t) && "" !== t
            }

            var n = document, i = encodeURIComponent, o = decodeURIComponent;
            return {
                get: function (e) {
                    var i, r;
                    return t(e) && (r = String(n.cookie).match(new RegExp("(?:^| )" + e + "(?:(?:=([^;]*))|;|$)"))) && (i = r[1] ? o(r[1]) : ""), i
                }, set: function (e, o, r, a, s, c) {
                    var l = String(i(o)), u = r;
                    "number" == typeof u && (u = new Date, u.setTime(u.getTime() + 864e5 * r)), u instanceof Date && (l += "; expires=" + u.toUTCString()), t(a) && (l += "; domain=" + a), t(s) && (l += "; path=" + s), c && (l += "; secure"), n.cookie = e + "=" + l
                }, remove: function (e, t, n, i) {
                    this.set(e, "", -1, t, n, i)
                }
            }
        }($), addEventScroll: function (e, t) {
            var n = function (e) {
                var t = e.type;
                return "DOMMouseScroll" != t && "mousewheel" != t || (e.delta = e.wheelDelta ? e.wheelDelta / 120 : -(e.detail || 0) / 3),
                e.srcElement && !e.target && (e.target = e.srcElement), e.preventDefault || void 0 === e.returnValue || (e.preventDefault = function () {
                    e.returnValue = !1
                }), e
            };
            return e.addEventListener ? function (e, t, i, o) {
                "mousewheel" === t && void 0 !== document.mozHidden && (t = "DOMMouseScroll"), e.addEventListener(t, function (e) {
                    i.call(this, n(e))
                }, o || !1)
            } : e.attachEvent ? function (t, i, o, r) {
                t.attachEvent("on" + i, function (i) {
                    i = i || e.event, o.call(t, n(i))
                })
            } : function () {
            }
        }(window)
    };
    $.extend($, c), $.extend(DX_CONST.common, {
        throttle: function (e, t) {
            clearTimeout(e.name), e.name = setTimeout(function () {
                e.call(t)
            }, 100)
        }, bind: function (e, t) {
            return n.bind ? t.bind(e) : function () {
                return t.apply(e, i.call(arguments))
            }
        }, addCss: function (e) {
            function t(e) {
                var t = document.createElement("style");
                t.type = "text/css", t.styleSheet ? t.styleSheet.cssText = e : t.innerHTML = e, document.getElementsByTagName("head")[0].appendChild(t)
            }

            e instanceof Array ? t(e.join(" ")) : "string" == typeof e && t(e)
        }
    });
    var l = function (e) {
        this.name = e.name || e.cid, this.attrs = {}
    };
    $.extend(l.prototype, {
        set: function (e, t) {
            if ($.isString(e)) this.attrs[e] = t; else if ($.isObject(e))for (var n in e)this.attrs[n] = e[n]; else try {
                this.attrs[e] = t
            } catch (i) {
                console.log(i.name + ": " + i.message)
            }
        }, get: function (e) {
            return this.attrs[e]
        }, toJSON: function () {
            var e = this.attrs;
            return $.extend({}, e)
        }
    });
    var u = function (e, t) {
        var n, i = -1, o = e.length, r = t[0], a = t[1], s = t[2];
        switch (t.length) {
            case 0:
                for (; ++i < o;)(n = e[i]).callback.call(n.ctx);
                return;
            case 1:
                for (; ++i < o;)(n = e[i]).callback.call(n.ctx, r);
                return;
            case 2:
                for (; ++i < o;)(n = e[i]).callback.call(n.ctx, r, a);
                return;
            case 3:
                for (; ++i < o;)(n = e[i]).callback.call(n.ctx, r, a, s);
                return;
            default:
                for (; ++i < o;)(n = e[i]).callback.apply(n.ctx, t)
        }
    }, f = /\s+/, d = function (e, t, n, i) {
        if (!n)return !0;
        if ("object" == typeof n) {
            for (var o in n)e[t].apply(e, [o, n[o]].concat(i));
            return !1
        }
        if (f.test(n)) {
            for (var r = n.split(f), a = 0, s = r.length; a < s; a++)e[t].apply(e, [r[a]].concat(i));
            return !1
        }
        return !0
    }, h = {
        on: function (e, t, n) {
            return d(this, "on", e, [t, n]) && t ? (this._events || (this._events = {}), (this._events[e] || (this._events[e] = [])).push({
                callback: t,
                context: n,
                ctx: n || this
            }), this) : this
        }, once: function (e, t, n) {
            if (!d(this, "once", e, [t, n]) || !t)return this;
            var i = this, o = function (e) {
                var t, n = !1;
                return function () {
                    return n ? t : (n = !0, t = e.apply(this, arguments), e = null, t)
                }
            }(function () {
                i.off(e, o), t.apply(this, arguments)
            });
            return o._callback = t, this.on(e, o, n)
        }, off: function (e, t, n) {
            var i, o, r, a, s, c, l, u;
            if (!this._events || !d(this, "off", e, [t, n]))return this;
            if (!e && !t && !n)return this._events = {}, this;
            for (a = e ? [e] : $.getKeys(this._events), s = 0, c = a.length; s < c; s++)if (e = a[s], r = this._events[e]) {
                if (this._events[e] = i = [], t || n)for (l = 0, u = r.length; l < u; l++)o = r[l], (t && t !== o.callback && t !== o.callback._callback || n && n !== o.context) && i.push(o);
                i.length || delete this._events[e]
            }
            return this
        }, trigger: function (e) {
            if (!this._events)return this;
            var t = v.slice.call(arguments, 1);
            if (!d(this, "trigger", e, t))return this;
            var n = this._events[e], i = this._events.all;
            return n && u(n, t), i && u(i, arguments), this
        }
    };
    DX_CONST.Events = h;
    var p = function (e) {
            e = e || {}, e.name ? this.__isShare = !0 : this.__isShare = !1, this.__fastClick_Obj = {
                selectorObj: {},
                methodObj: {}
            }, this.cid = "view" + this.guid.get(), this._configure(e), this._ensureElement(), !this.data && (this.data = new l(this)), this.initialize.apply(this, arguments), this.delegateEvents(), this.init.apply(this, arguments)
        }, v = [], i = (v.push, v.slice), g = (v.splice, ["el", "id", "className", "tagName", "events", "data"]),
        m = /^(\S+)\s*(.*)$/;
    v.indexOf || (e.indexOf = function (e) {
        for (var t = 0, n = this.length; t < n; t++)if (this[t] === e)return t;
        return -1
    }), $.extend(p.prototype, h, {
        __isShare: !1, guid: function () {
            var e = -1;
            return {
                get: function () {
                    return ++e
                }
            }
        }(), init: function () {
        }, tagName: "div", $: function (e) {
            return this.$el.find(e)
        }, initialize: function () {
        }, render: function () {
            return this
        }, __isDelete: !1, remove: function () {
            this.undelegateEvents(), this.$el.remove(), this.__isDelete = !0, this.__isShare && DX_CONST.modulesView.remove(this.name || this.cid);
            var e = $.event._user_trigger_view_list;
            return $.isArray(e) && e.length && $.event._del_user_trigger(this.cid), this
        }, setElement: function (e, t) {
            return this.$el && this.undelegateEvents(), this.$el = e instanceof $ ? e : $(e), this.el = this.$el[0], !1 !== t && this.delegateEvents(), this
        }, delegateEvents: function (e) {
            if (!e && !(e = this.events) || !this.$el.size())return this;
            this.undelegateEvents();
            for (var t in e) {
                var n = e[t];
                if ("function" != typeof n && (n = this[e[t]]), n) {
                    var i = t.match(m), o = i[1], r = i[2];
                    n = DX_CONST.common.bind(this, n), this._isSupFastClick && $.isFunction(DX_CONST.fastclick) && "click" === o ? this._addFastClick("click", r, n) : (o += ".delegateEvents" + this.cid, "" === r ? this.$el.on(o, n) : this.$el.on(o, r, n))
                }
            }
            return this
        }, _addFastClick: function (e, t, n) {
            var i = this, o = this.$el, r = i.__fastClick_Obj, a = r.selectorObj,
                s = {type: e, selector: t, handler: n};
            a[e] || (a[e] = [], a[e].count = 0, o[0].addEventListener(e, r.methodObj[e] = function (e) {
                this._dispatchEvents(e)
            }.bind(i), !1), $.event._add_user_trigger(this)), t ? a[e].splice(a[e].count++, 0, s) : a[e].push(s)
        }, _isSupFastClick: !0, _removeFastClick: function () {
            $.event._del_user_trigger && $.event._del_user_trigger(this.cid), "function" == typeof DX_CONST.destroyFastclick && (DX_CONST.destroyFastclick(), this._isSupFastClick = !1), this.delegateEvents()
        }, _triggerClick: function (e, t, n, i) {
            var o = new jQuery.Event(e);
            o.isTrigger = !0, e.target || (o.target = n), this._dispatchEvents(o, t)
        }, _dispatchEvents: function (e) {
            var t = !!e.forwardedTouchEvent;
            e = $.event.fix(e || window.event);
            var n, i, o, r, a, s, c, l, u = this.$el[0], f = this.__fastClick_Obj.selectorObj[e.type], d = f.length,
                h = [];
            if (d) {
                for (n = e.target; n != u; n = n.parentNode || u)if (!0 !== n.disabled) {
                    for (i = {}, o = [], r = 0; r < d; r++)a = f[r], s = a.selector, i[s] === undefined && (i[s] = $.find(s, u, null, [n]).length), i[s] && o.push(a);
                    o.length && h.push({elem: n, matches: o})
                }
                for (f.length > f.count && h.push({
                    elem: u,
                    matches: f.slice(f.count)
                }), r = 0; r < h.length && !e.isPropagationStopped(); r++)for (c = h[r], e.currentTarget = c.elem, l = 0; l < c.matches.length && !e.isImmediatePropagationStopped(); l++)arguments[0] = e, t && console.log("选择器 " + c.matches[l].selector + " 事件由fastClick委派"), c.matches[l].handler.apply(c.elem, arguments)
            }
        }, undelegateEvents: function () {
            var e = this.__fastClick_Obj.methodObj, t = this.$el[0];
            this.$el.off(".delegateEvents" + this.cid);
            for (var n in e)t.removeEventListener(n, e[n], !1);
            return this.__fastClick_Obj = {selectorObj: {}, methodObj: {}}, this
        }, _configure: function (e) {
            this.options && (e = $.extend({}, this.options, e));
            var t = {};
            for (var n in e)-1 !== g.indexOf(n) && (this[n] = t[n] = e[n]);
            this.options = e
        }, _ensureElement: function () {
            if (this.el) this.setElement(this.el, !1); else {
                var e = {};
                this.id && (e.id = this.id), this.className && (e["class"] = this.className);
                var t = $(document.createElement(this.tagName)).attr(e);
                this.setElement(t, !1)
            }
        }
    }), $.extend(DX_CONST.modulesView, {
        _shareView: {}, get: function (e) {
            return this._shareView[e]
        }, remove: function (e) {
            var t = this;
            $.hasAttr(t._shareView, e) && (this._shareView[e] = null, delete this._shareView[e])
        }, add: function (e, t) {
            $.isEmpty(t) ? this._shareView[e.name || e.cid] = e : this._shareView[t] = e
        }
    }), p.extend = function (e, t) {
        var n, i = this;
        n = e && $.hasAttr(e, "constructor") ? e.constructor : function () {
            return i.apply(this, arguments)
        }, $.extend(n, i, t);
        var o = function () {
            this.constructor = n
        };
        return o.prototype = i.prototype, n.prototype = new o, e && $.extend(n.prototype, e), n.__uber__ = i.prototype, n
    }, DX_CONST.modules = p.extend({
        initialize: function (e) {
            e.el && console.log((e.name || e.el) + "模块初始化")
        }, init: function (e) {
        }, show: function () {
            this.$el.show()
        }, hide: function () {
            this.$el.hide()
        }
    }), DX_CONST.modules.init = function (e) {
        var t = this.extend(e), n = null;
        return $.isObject(t.__uber__.events) && !$.isEmpty(t.__uber__.events) && $.extend(e.events, t.__uber__.events), n = new t(e), n.__isShare && DX_CONST.modulesView.add(n), n
    }, DX_CONST.__showPage = function (e) {
        var t = parseInt(e.page || e.totalPages) || 1, n = parseInt(e.curPage || e.nowPage || 1), i = n % 10,
            o = (e.pageNumData, n - 1 <= 0 ? 1 : n - 1 || 1), r = n + 1 >= t ? t : n + 1 || 1, a = 10, s = !1, c = 1,
            l = t <= 10, u = "", f = 0, d = "";
        if (l || t - n <= 9 ? (s = !0, l ? a = t : c = t - 10 + 1) : (c = 10 * Math.floor(n / 10) || 1, i >= 7 && (c += 7 == i ? 1 : 8 == i ? 2 : 9 == i ? 3 : 4)), a > 1) {
            for (; f < a; f++, c++)if (d = n === c ? "page-cur" : "", 0 === f) u += '<div class="page"><a class="page-jump first" data-page="1" href="javascript:;" title="首页"></a><a class="page-jump prev" data-page="' + o + '" href="javascript:;" title="上一页"></a><a class="page-item ' + d + '" data-page="' + c + '" href="javascript:;">' + c + '<i class="icon icon-diction"></i></a>', 1 === t && (u += '<a class="page-jump next" data-page="1" href="javascript:;" title="下一页"></a><a class="page-jump last" data-page="1" href="javascript:;" title="末页"></a>'); else if (f === a - 2 || f === a - 1) {
                if (f === a - 2) {
                    u += '<a class="page-item ' + d + '" data-page="' + (t - 1) + '" href="javascript:;">' + (t - 1) + '<i class="icon icon-diction"></i></a>';
                    continue
                }
                u += '<a class="page-item ' + d + '" data-page="' + t + '" href="javascript:;">' + t + '<i class="icon icon-diction"></i></a><a class="page-jump next" data-page="' + r + '" href="javascript:;" title="下一页"></a><a class="page-jump last" data-page="' + t + '" href="javascript:;" title="末页"></a>', 10 === a && (u += '<div class="go" style="vertical-align: middle;"><a href="javascript:;" id="go-page">跳转页码</a><input class="page-box fn-hide" type="text"><a href="javascript:;" class="go-btnPage fn-hide">跳转</a></div>')
            } else u += f >= 7 && !s ? '<span class="ellipsis">...</span>' : '<a class="page-item ' + d + '" data-page="' + c + '" href="javascript:;">' + c + '<i class="icon icon-diction"></i></a>';
            u += "</div>"
        }
        return u
    }
}), define("loader", ["jquery", "modules"], function () {
    var e = window, t = $(e).height(), n = (Array.prototype.slice, Array.prototype.push), i = function (e) {
        e && (e.target.src = DX_CONST.staticUrl + "/images/tooxiu/public/transparent1x1.png")
    }, o = {
        success: function () {
        }, error: i, abort: i
    }, r = function (e) {
        var i = this;
        return i.config = {
            view: null,
            deff: 1
        }, $.hasAttr(e, "cid") ? i.config.view = e : ($.hasAttr(e, "callbacks") && $.extend(!0, o, e.callbacks), $.extend(i.config, e)), i.config.isTrigger = !1, setTimeout(function () {
            i.add(i.config.view)
        }, 10), {
            attach: function (e) {
                var o = {
                    deff: i.config.deff,
                    ajaxFn: "_loaderAsyn",
                    deffVal: i.config.deff * t,
                    isTrigger: !1,
                    node: [],
                    context: i
                }, r = null, a = [];
                ($.isEmpty(e.node) || $.isObject(e) && e.type) && (r = $(e.node), $.isArray(e.node) || (e.node = [e.node]), e.deff && (e.deffVal = parseInt(e.deff) * t, r.attr("data-deff", e.deff)), $.extend(o, e), o.isTrigger = !1, r.attr("data-asyn", e.type), a.push(o), "page" === e.type && (r.attr("data-ajaxfn", e.ajaxFn), i.viewCallback(i.config.view, a)), n.apply(i.asynArr, a), i.scrollFn(a), !i._fn_ && i._eventsFn())
            }, inspect: function () {
                0 !== i.asynArr.length && i.throttle()
            }
        }
    };
    return $.extend(r.prototype, DX_CONST.Events, {
        constructor: r, asynArr: [], _isScroll: null, add: function (e) {
            if (e.cid) {
                var i, o = this, r = [], a = [], s = [], c = 0, l = 0 != this.asynArr.length,
                    u = e.$el.find("[data-asyn]");
                if (0 == u.length) {
                    if ($.isEmpty(e.$el.attr("data-asyn")))return;
                    a = [e.el]
                } else u.each(function () {
                    i = $(this), c = i.attr("data-deff"), $.isEmpty(c) ? a.push(i) : (c = parseInt(c), s.push({
                        deff: c,
                        deffVal: c * t,
                        isTrigger: !1,
                        node: [i],
                        context: o
                    }))
                });
                if (e) {
                    if (s.length && n.apply(r, s) && n.apply(o.asynArr, s), a.length) {
                        var f = {
                            deff: o.config.deff,
                            deffVal: o.config.deff * t,
                            isTrigger: o.config.isTrigger,
                            node: a,
                            context: o
                        };
                        r.push(f), o.asynArr.push(f)
                    }
                    o.viewCallback(e, r), l || o._eventsFn(), o.scrollFn(r)
                }
            }
        }, _eventsFn: function (t) {
            if (!this._fn_ && (this._fn_ = DX_CONST.common.bind(this, this.throttle)), t)return $(e).off("scroll resize", null, this._fn_), this._fn_ = null, void console.log("延时加载完毕");
            $(e).on("scroll resize", null, this._fn_)
        }, viewCallback: function (e, t) {
            var n = null, i = "", o = /^\$loader_.*/, r = this;
            $.each(t[0].node, function (t, a) {
                n = $(a), "page" === n.attr("data-asyn") && (i = n.attr("data-ajaxfn"), fnName = "$loader_" + i + e.cid, $.isFunction(e[i]) && !o.test(i) && (n.attr("data-ajaxfn", fnName), r.on(fnName, e[i], e)))
            })
        }, scrollFn: function (e) {
            var t = this, n = function (e) {
                console.log("加载成功"), $(e.currentTarget).removeAttr("data-url").off().parents(".img_Loading").removeClass("img_Loading"), o.success.call(null, e)
            }, i = function (e) {
                console.log("加载错误");
                var t = $(e.currentTarget);
                t.attr("data-url", t.attr("src")).removeAttr("data-url").off().parents(".img_Loading").removeClass("img_Loading"), o.error.call(null, e)
            }, a = function (e) {
                console.log("加载中断"), $(e.currentTarget).off(), o.abort.call(null, e)
            }, s = function (e) {
                e.on("load", n), e.on("error", i), e.on("abort", a)
            }, c = [], l = 0, u = null, f = [];
            f = e || t.asynArr, $.each(f, function (e, n) {
                $.each(n.node, function (e, i) {
                    if (u = $(i), t.isVisible(u, n, u))if ("img" === u.attr("data-asyn")) {
                        var o = 0, a = u.find("[data-url]");
                        l = a.length, $.each(a, function (e, i) {
                            var a = $(i);
                            t.isVisible(a, n, u) && (s(a), r._loadImg(a), o++)
                        }), o > 0 && l === o && (c.push(e), n.isTrigger = !0)
                    } else if ("page" === u.attr("data-asyn")) {
                        var f = u.attr("data-ajaxfn");
                        n.context.trigger(f, i), n.context.off(f), c.push(e), n.isTrigger = !0
                    }
                }), t.delAsynObj(n.node, c), c = []
            }), t.TestEnd()
        }, delAttrCif: function (e) {
            $(e).removeAttr("data-asyn data-ajaxfn data-deff")
        }, delAsynObj: function (e, t) {
            t = t.sort();
            var n = t.length, i = 0, o = null;
            if (n)for (var r = 0; r < n; r++, i++)o = e[t[r] - i], e.splice(t[r] - i, 1), o && 1 === o.nodeType && this.delAttrCif(o), o = null
        }, TestEnd: function () {
            var e = this.asynArr, t = [];
            $.each(e, function (e, n) {
                0 === n.node.length && n.isTrigger && t.push(e)
            }), this.delAsynObj(e, t)
        }, isVisible: function (t, n, i) {
            var o, r = "none" === t.css("display"), a = $(e).scrollTop(), s = n.deffVal + a;
            return !!((o = (r ? t.parent() : t).offset()) && o.top <= s)
        }, throttle: function (n) {
            var i = this;
            if (0 === this.asynArr.length)return void this._eventsFn(!0);
            n && "resize" === n.type && (t = $(e).height(), $.each(i.asynArr, function (e, n) {
                n.deffVal = n.deff * t
            })), clearTimeout(i._isScroll), i._isScroll = setTimeout(function () {
                i.scrollFn.call(i)
            }, 50)
        }
    }), r._loadImg = function (e) {
        e.attr("src", e.attr("data-url")), e.removeAttr("data-url")
    }, r.add = function (e) {
        return new r(e)
    }, DX_CONST.loader = r, r
});