!function (i) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], i) : "undefined" != typeof exports ? module.exports = i(require("jquery")) : i(jQuery)
}(function (i) {
    "use strict";
    var t = '<div id="picViewer" class="view-pic"><div class="mask"></div><span class="view-loading"></span><img class="pic" id="img-show"><div class="tools-bar"><span class="pid-wrap">图片ID：<span class="pic-id"></span></span><a class="btn btn-small" title="缩小" href="javascript:;"><i class="icon icon-small"></i></a><a class="btn btn-big fn-mgr10" title="放大" href="javascript:;"><i class="icon icon-big"></i></a><a class="tools-btn origin-btn">1:1</a><a class="tools-btn fit-btn" style="*position:relative;*top:-3px;">适合</a><a class="prev" title="上一张">&lt;</a><span class="serial"><span class="cur">1</span> / <span class="all"></span></span><a class="next" title="下一张">&gt;</a><span class="serial"><a class="btn btn-play" title="自动播放" href="javascript:;"><i class="icon icon-play"></i></a><a class="btn btn-fav" title="收藏图片" href="javascript:;"><i class="font_family icon-favorite_full1 icon icon-fav" style="vertical-align:top;background:none"></i></a><a class="btn btn-print" title="打印图片" href="javascript:;"><i class="icon icon-print"></i></a></span><a class="btn-down d-jpg" title="下载图片" href="javascript:;">下载原图</a><a class="btn-down d-psd" title="下载PSD格式" href="javascript:;">下载PSD</a><a class="btn-down d-ai" title="下载AI格式" href="javascript:;">下载AI</a><a class="btn-down d-cdr" title="下载CDR格式" href="javascript:;">下载CDR</a></div><a class="close" title="关闭"><span></span></a><a class="pic-btn pic-prev" title="上一张"></a><a class="pic-btn pic-next" title="下一张"></a><div class="view-thumb" id="view-thumb"><div class="body"><img class="outer" src=""><div class="thumb-modal"></div><div class="focus"><img class="inner"></div></div></div><div class="figure" id="figure"><div class="fig-btn fig-up"><a></a></div><div class="figure-wrap"><div class="figure-inner"></div></div><div class="fig-btn fig-down"><a></a></div></div></div>';
    i("body").append(t);
    var s = window.ViewPic || {};
    return s = function () {
        function t(t) {
            this.defaults = {percent: .2, maxsize: 3, minsize: 1, type: "multi"}, this.initials = {
                scaling: 1,
                mouseDown: !1,
                mainDown: !1,
                focusDown: !1,
                lastMouse: {},
                lastElemTop: 0,
                lastElemLeft: 0,
                lastFocusTop: 0,
                lastFocusLeft: 0,
                imgMainW: 0,
                imgMainH: 0,
                thumbW: 0,
                thumbH: 0,
                fitW: 0,
                focusW: 0,
                focusH: 0,
                viewW: 0,
                viewH: 0,
                initable: !1,
                index: -1,
                autoTimer: null,
                callbacks: null,
                tabTimer: null
            }, this.options = i.extend({}, this.defaults, t), i.extend(this, this.initials)
        }

        return t
    }(), s.prototype.init = function () {
        var t = i(window);
        this.$picViewer = i("#picViewer"), this.$imgMainObj = i("#img-show"), this.$thumb = i("#view-thumb"), this.$thumbOuter = this.$thumb.find(".outer"), this.$thumbInner = this.$thumb.find(".inner"), this.$focus = this.$thumb.find(".focus"), this.$next = this.$picViewer.find(".pic-next"), this.$prev = this.$picViewer.find(".pic-prev"), this.$cur = this.$picViewer.find(".cur"), this.$playBtn = this.$picViewer.find(".btn-play"), this.$figUp = i("#figure").find(".fig-up"), this.$figDown = i("#figure").find(".fig-down"), this.$favBtn = this.$picViewer.find(".btn-fav"), this.$downBtn = this.$picViewer.find(".d-jpg"), this.$downPSD = this.$picViewer.find(".d-psd"), this.$downAI = this.$picViewer.find(".d-ai"), this.$downCDR = this.$picViewer.find(".d-cdr"), this.$picId = this.$picViewer.find(".pic-id"), this.viewW = t.width(), this.viewH = t.height(), this.$loading = this.$picViewer.find(".view-loading"), this.setMouseWheel(), this.setDblclick(), this.setDrag(), this.setResizeEvent(), this.setKeyboardEvent(), this.setFigureEvent(), this.setToolbarEvent(), this.initable = !0, this.$picViewer.on("touchmove", function (i) {
            return i.preventDefault && i.preventDefault(), !1
        })
    }, s.prototype.setMouseWheel = function () {
        var i = this;
        document.getElementById("img-show").onmousewheel = function () {
            i.zoomPic(event)
        }, document.addEventListener && document.getElementById("img-show").addEventListener("DOMMouseScroll", function (t) {
            i.zoomPic(t)
        })
    }, s.prototype.zoomPic = function (i) {
        var t = 0, s = 0;
        i = i || window.event, s = i.wheelDelta ? i.wheelDelta / 120 : -i.detail / 3, s > 0 ? (t = this.scaling * (1 + this.options.percent), t >= this.options.maxsize && (t = this.options.maxsize)) : (t = this.scaling / (1 + this.options.percent), t <= this.options.minsize && (t = this.options.minsize)), this.zoomFn(t, this.scaling, this.getMousePos(i).x, this.getMousePos(i).y)
    }, s.prototype.zoomFn = function (i, t, s, e, n) {
        var o = this;
        if ("number" != typeof s) {
            var a = parseFloat(this.$imgMainObj.position().left), h = parseFloat(this.$imgMainObj.position().top),
                r = parseFloat(this.$imgMainObj.width()), c = parseFloat(this.$imgMainObj.height());
            s = a + r / 2, e = h + c / 2
        }
        this.zoomFn.height && this.zoomFn.width || (this.zoomFn.height = this.$imgMainObj.height(), this.zoomFn.width = this.$imgMainObj.width()), n ? this.$imgMainObj.animate({
            left: parseInt(this.$imgMainObj.css("left")) - (i - t) * (s - this.$imgMainObj.position().left) / t,
            top: parseInt(this.$imgMainObj.css("top")) - (i - t) * (e - this.$imgMainObj.position().top) / t,
            width: this.zoomFn.width * i,
            height: this.zoomFn.height * i
        }, 200, function () {
            o.scaleShow()
        }) : (this.$imgMainObj.css({
            left: parseInt(this.$imgMainObj.css("left")) - (i - t) * (s - this.$imgMainObj.position().left) / t,
            top: parseInt(this.$imgMainObj.css("top")) - (i - t) * (e - this.$imgMainObj.position().top) / t,
            width: this.zoomFn.width * i,
            height: this.zoomFn.height * i
        }), this.scaleShow()), this.scaling = i
    }, s.prototype.setDblclick = function () {
        var i = this;
        this.$imgMainObj.dblclick(function (t) {
            if (i.bClose = !0, i.scaling > 1) i.zoomFn(1, i.scaling, i.getMousePos(t).x, i.getMousePos(t).y, 1); else {
                var s = 0;
                i.$imgMainObj.width() != i.imgMainW && (s = i.imgMainW / i.fitW, i.zoomFn(s, i.scaling, i.getMousePos(t).x, i.getMousePos(t).y, 1))
            }
        })
    }, s.prototype.scaleShow = function () {
        var t = this.$imgMainObj.height(), s = this.$imgMainObj.width();
        t <= i(window).height() && s <= i(window).width() ? this.$thumb.hide() : (this.$thumb.show(), this.autoFocusSize())
    }, s.prototype.autoFocusSize = function () {
        var i = this.$imgMainObj.width(), t = this.$imgMainObj.height(), s = this.$imgMainObj.position().top,
            e = this.$imgMainObj.position().left, n = i / this.thumbW, o = 0, a = 0, h = 0, r = 0;
        s < 0 && t + s < this.viewH ? (a = t + s, h = -s / n) : s < 0 && t + s > this.viewH ? (a = this.viewH, h = -s / n) : a = s >= 0 && t + s < this.viewH ? t : this.viewH - s, e < 0 && i + e < this.viewW ? (o = i + e, r = -e / n) : e < 0 && i + e > this.viewW ? (o = this.viewW, r = -e / n) : o = e >= 0 && i + e < this.viewW ? i : this.viewW - e, this.$focus.show().css({
            height: a / n - 4,
            width: o / n - 4,
            left: r,
            top: h
        }), this.$thumbInner.css({
            "margin-left": "-" + r - 2 + "px",
            "margin-top": "-" + h - 2 + "px"
        }), this.focusW = this.$focus.outerWidth(), this.focusH = this.$focus.outerHeight()
    }, s.prototype.setDrag = function () {
        var t = this, s = null, e = 0, n = function (t) {
            if ("touchstart,touchend,touchmove".indexOf(t.type) < 0)return t;
            var s = event.changedTouches[0];
            return i.extend(t, {
                clientX: s.clientX,
                clientY: s.clientY,
                pageX: s.pageX,
                pageY: s.pageY,
                screenX: s.screenX,
                screenY: s.screenY
            })
        };
        this.$imgMainObj.on("mousedown touchstart", function (i) {
            if (e = +new Date, t.startMove(n(i)), "touchstart" !== i.type)return !1
        }), this.$focus.on("mousedown touchstart", function (i) {
            if (e = +new Date, t.focusStartMove(n(i)), "touchstart" !== i.type)return !1
        }), this.$picViewer.on("mousemove touchmove", function (i) {
            console.log("mousemove：true", e), e > 0 && t.move(t.getMousePos(n(i)))
        }).on("mouseup touchend touchcancel", function (n) {
            var o = +new Date;
            if (t.bClose || 2 === n.button || i(n.target).attr("id") !== t.$imgMainObj.attr("id") ? t.bClose = !1 : o - e < 150 && (s && clearTimeout(s), s = setTimeout(function () {
                        t.bClose || t.close(), t.bClose = !1
                    }, 250)), t.stopMove(), e = 0, "mouseup" === n.type)return !1
        })
    }, s.prototype.getMousePos = function (t) {
        var s = 0, e = 0;
        return t = t || window.event, s = t.pageX ? t.pageX : t.clientX + document.body.scrollLeft + document.documentElement.scrollLeft, e = t.pageY ? t.pageY : t.clientY + document.body.scrollTop + document.documentElement.scrollTop, e -= i(window).scrollTop(), {
            x: s,
            y: e
        }
    }, s.prototype.startMove = function (i) {
        this.mouseDown = !0, this.mainDown = !0, this.lastMouse = this.getMousePos(i), this.lastElemTop = this.$imgMainObj.position().top, this.lastElemLeft = this.$imgMainObj.position().left
    }, s.prototype.focusStartMove = function (i) {
        this.mouseDown = !0, this.focusDown = !0, this.lastMouse = this.getMousePos(i), this.lastElemTop = this.$imgMainObj.position().top, this.lastElemLeft = this.$imgMainObj.position().left, this.lastFocusTop = this.$focus.position().top, this.lastFocusLeft = this.$focus.position().left
    }, s.prototype.stopMove = function () {
        this.mouseDown = !1, this.mainDown = !1, this.focusDown = !1
    }, s.prototype.move = function (i) {
        if (this.mouseDown && this.mainDown) {
            var t = i.x - this.lastMouse.x, s = i.y - this.lastMouse.y, e = this.lastElemLeft + t,
                n = this.lastElemTop + s;
            this.$imgMainObj.css({left: e, top: n}), this.autoFocusSize(), 0 === t && 0 === s || (this.bClose = !0)
        } else if (this.mouseDown && this.focusDown) {
            var t = i.x - this.lastMouse.x, s = i.y - this.lastMouse.y, e = this.lastFocusLeft + t,
                n = this.lastFocusTop + s, o = this.$imgMainObj.width() / this.thumbW, a = 0, h = 0;
            e <= 0 ? e = 0 : e + this.focusW > this.thumbW && (e = this.thumbW - this.focusW), n <= 0 ? n = 0 : n + this.focusH > this.thumbH && (n = this.thumbH - this.focusH), this.$focus.css({
                left: e,
                top: n
            }), this.$thumbInner.css({
                "margin-left": "-" + e - 2 + "px",
                "margin-top": "-" + n - 2 + "px"
            }), a = this.lastElemLeft - (e - this.lastFocusLeft) * o, h = this.lastElemTop - (n - this.lastFocusTop) * o, this.$imgMainObj.css({
                left: a,
                top: h
            }), this.bClose = !0
        }
    }, s.prototype.setResizeEvent = function () {
        var t = this, s = null;
        i(window).resize(function () {
            s && clearTimeout(s), s = setTimeout(function () {
                if (t.viewW = i(window).width(), t.viewH = i(window).height(), t.zoomFn.height = 0, t.zoomFn.width = 0, t.scaling = 1, t.imgMainW) t.setPicCenter(); else {
                    var s = t.$imgMainObj.attr("src");
                    t.imgReady(s, function () {
                        t.imgMainW = this.width, t.imgMainH = this.height, t.setPicCenter()
                    })
                }
            }, 100)
        })
    }, s.prototype.setPicCenter = function () {
        var i = 0, t = 0, s = this.imgMainW / this.imgMainH, e = 0, n = 0;
        this.$imgMainObj.removeAttr("style"), this.viewW > this.viewH ? s < 1 ? this.imgMainH > this.viewH && (e = this.viewH * s, n = this.viewH, this.$imgMainObj.css({
                height: n,
                width: e
            })) : this.viewW / this.viewH > s ? this.imgMainH > this.viewH && (e = this.viewH * s, n = this.viewH, this.$imgMainObj.css({
                height: n,
                width: e
            })) : this.imgMainW > this.viewW && (e = this.viewW, n = this.viewW / s, this.$imgMainObj.css({
                height: n,
                width: e
            })) : s > 1 ? this.imgMainW > this.viewW && (e = this.viewW, n = this.viewW / s, this.$imgMainObj.css({
                height: n,
                width: e
            })) : this.viewW / this.viewH > s ? this.imgMainH > this.viewH && (e = this.viewH * s, n = this.viewH, this.$imgMainObj.css({
                height: n,
                width: e
            })) : this.imgMainW > this.viewW && (e = this.viewW, n = this.viewW / s, this.$imgMainObj.css({
                height: n,
                width: e
            })), e && n || (e = this.imgMainW, n = this.imgMainH), i = this.viewH - n, t = this.viewW - e, this.$imgMainObj.css({
            left: t / 2,
            top: i / 2
        }, 200), this.fitW = parseInt(this.$imgMainObj.css("width")), this.scaling = 1
    }, s.prototype.setToolbarEvent = function () {
        var t = this;
        this.$picViewer.find(".btn-small").click(function () {
            t.zoomOut()
        }), this.$picViewer.find(".btn-big").click(function () {
            t.zoomIn()
        }), this.$picViewer.find(".btn-print").click(function () {
            t.printImg()
        }), this.$picViewer.find(".fit-btn").click(function (i) {
            t.setPicCenter(), t.$thumb.hide(), t.scaling = 1
        }), this.$picViewer.find(".origin-btn").click(function (i) {
            t.max()
        }), t.$picViewer.find(".prev").click(function () {
            t.prev(t.index)
        }), t.$picViewer.find(".next").click(function () {
            t.next(t.index, !0)
        }), t.$prev.click(function () {
            t.prev(t.index)
        }), t.$next.click(function () {
            t.next(t.index, !0)
        }), t.$playBtn.click(function () {
            i(this).children().hasClass("icon-pause") ? (i(this).children().removeClass("icon-pause"), t.pause()) : (i(this).children().addClass("icon-pause"), t.auto())
        }), t.$favBtn.click(function (i) {
            i = i || window.event, t.collect(i)
        }), this.$downBtn.click(function (i) {
            i = i || window.event, t.download(i)
        }), this.$downPSD.click(function (i) {
            i = i || window.event, t.download(i)
        }), this.$downAI.click(function (i) {
            i = i || window.event, t.download(i)
        }), this.$downCDR.click(function (i) {
            i = i || window.event, t.download(i)
        }), t.$picViewer.find(".close").click(function () {
            t.close()
        })
    }, s.prototype.printImg = function () {
        var i = new Image;
        i.src = this.$imgMainObj.attr("src"), setTimeout(function () {
            var t = i.width, s = i.height, e = 595, n = 842;
            (i.width > e || i.height > n) && (i.width / i.height >= t / s ? (t = e, s = i.height * t / i.width) : (s = n, t = i.width * s / i.height));
            var o = window.open("", "imgShow", "scrollbars=0,toolbar=0,resizeble=0,location=0,width=600,height=500");
            o.document.body.innerHTML = '<img src="' + i.src + '" width="' + t + '" height="' + s + '" border="0" />', setTimeout(function () {
                o.focus(), o.print()
            }, 200)
        }, 200)
    }, s.prototype.zoomOut = function () {
        var i = 0;
        i = .8 * this.scaling, i <= this.options.minsize && (i = this.options.minsize), this.zoomFn(i, this.scaling)
    }, s.prototype.zoomIn = function () {
        var i = 0;
        i = 1.2 * this.scaling, i >= this.options.maxsize && (i = this.options.maxsize), this.zoomFn(i, this.scaling)
    }, s.prototype.max = function () {
        var i = 0;
        this.$imgMainObj.width() != this.imgMainW && (i = this.imgMainW / this.fitW, this.zoomFn(i, this.scaling))
    }, s.prototype.prev = function (i) {
        i--, i >= 0 && (this.show(i), this.zoomFn.height = 0, this.zoomFn.width = 0, this.$thumb.hide(), this.callbacks && this.callbacks.prev && this.callbacks.prev(i)), this.$playBtn.children().hasClass("icon-pause") && (this.pause(), this.$playBtn.children().removeClass("icon-pause"))
    }, s.prototype.next = function (i, t) {
        i++, i < this.dataStroage.length ? (this.show(i), this.zoomFn.height = 0, this.zoomFn.width = 0, this.$thumb.hide(), this.callbacks && this.callbacks.next && this.callbacks.next(i)) : this.$playBtn.children().hasClass("icon-pause") && (this.pause(), this.$playBtn.children().removeClass("icon-pause")), t && this.$playBtn.children().hasClass("icon-pause") && (this.pause(), this.$playBtn.children().removeClass("icon-pause"))
    }, s.prototype.auto = function () {
        var i = this;
        this.autoTimer = setInterval(function () {
            i.next(i.index)
        }, 3e3)
    }, s.prototype.pause = function () {
        clearInterval(this.autoTimer)
    }, s.prototype.collect = function (t) {
        var s = i(t.currentTarget), e = s.attr("data-id"), n = s.attr("data-type"), o = this;
        this.$favBtn.find("i").hasClass("icon-faved") ? layer.msg("您已收藏过该图片！", {icon: 0}) : i.get(window.sessionStorage.favorites, {
            id: e,
            type: n
        }, function (t) {
            1 == t.status ? (layer.msg(t.info, {icon: 1}), o.$favBtn.find("i").removeClass("icon-fav").addClass("icon-faved"), "3" === n && (o.dataStroage[o.index].is_fav = 1, i("#js-list").length > 0 && i("#js-list").find("li").eq(o.index).find(".icon-fav").removeClass("icon-fav").addClass("icon-faved"))) : layer.msg(t.info, {icon: 0})
        })
    }, s.prototype.download = function (t) {
        var s = i(t.currentTarget), e = s.attr("down-url");
        window.location.href = e
    }, s.prototype.close = function () {
        i("html").removeClass("viewPic_html_show"), this.$imgMainObj.removeAttr("src").removeAttr("style"), this.zoomFn.height = 0, this.zoomFn.width = 0, this.$thumb.hide(), this.failed = !1, this.$playBtn.children().hasClass("icon-pause") && (this.pause(), this.$playBtn.children().removeClass("icon-pause")), this.$picViewer.hide()
    }, s.prototype.setKeyboardEvent = function () {
        var t = this, s = function (i) {
            var s = t.$picViewer.find("#figure .figure-item"), e = s.length, n = s.index(s.filter(".active")), o = null;
            e < 2 || n < 0 || (o = 38 == i ? 0 == n ? e - 1 : n - 1 : n == e - 1 ? 0 : n + 1, s.eq(o).trigger("click"))
        };
        i(window).keydown(function (i) {
            if (!t.$picViewer.is(":hidden")) {
                var e = i.keyCode || i.which || i.charCode;
                switch (e) {
                    case 27:
                        t.close();
                        break;
                    case 37:
                        !t.$prev.is(":hidden") && t.prev(t.index);
                        break;
                    case 39:
                        !t.$next.is(":hidden") && t.next(t.index, !0);
                        break;
                    case 38:
                    case 40:
                        s(e)
                }
            }
        })
    }, s.prototype.setFigureEvent = function () {
        var t = this;
        this.$figUp.click(function (i) {
            t.figureUp(i)
        }), this.$figDown.click(function (i) {
            t.figureDown(i)
        }), i("#figure").on("click", ".figure-item", function () {
            t.figureShow(i(this))
        }), i("#figure").find(".figure-wrap").get(0).onmousewheel = function () {
            t.figureWheel(event)
        }, document.addEventListener && i("#figure").find(".figure-wrap").get(0).addEventListener("DOMMouseScroll", function (i) {
            t.figureWheel(i)
        })
    }, s.prototype.show = function (t, s) {
        if (this.initable || this.init(), "simple" === this.options.type)var e = this,
            n = this.dataStroage[t].vip_picture; else {
            var e = this, n = this.dataStroage[t].vip_picture, o = this.dataStroage[t].id,
                a = this.dataStroage[t].fav_type, h = this.dataStroage[t].downUrl, r = this.dataStroage[t].zip_psd,
                c = this.dataStroage[t].zip_ai, l = this.dataStroage[t].zip_cdr,
                d = this.dataStroage[t].is_right.isRightD;
            s && this.dataStroage[t].vip_backup && (n = this.dataStroage[t].vip_backup), this.dataStroage[t].logUrl && i.get(this.dataStroage[t].logUrl), this.$cur.text(t + 1), this.$picViewer.find(".all").text(this.dataStroage.length), this.$favBtn.attr("data-id", o).attr("data-type", a), this.$picId.text(o), this.$downBtn.attr("down-url", h), d && h ? this.$downBtn.css("display", "inline-block") : this.$downBtn.hide(), o && "undefined" == typeof notShowBtn ? this.$favBtn.show() : this.$favBtn.hide(), "undefined" != typeof r && r.length > 0 && d ? this.$downPSD.attr("down-url", r).css("display", "inline-block") : this.$downPSD.hide(), "undefined" != typeof c && c.length > 0 && d ? this.$downAI.attr("down-url", c).css("display", "inline-block") : this.$downAI.hide(), "undefined" != typeof l && l.length > 0 && d ? this.$downCDR.attr("down-url", l).css("display", "inline-block") : this.$downCDR.hide(), this.dataStroage[t].subsidiary ? this.figure(this.dataStroage[t].subsidiary) : i("#figure").hide(), this.dataStroage[t].is_fav ? this.$favBtn.find("i").removeClass("icon-fav").addClass("icon-faved") : this.$favBtn.find("i").removeClass("icon-faved").addClass("icon-fav"), this.$picViewer.find(".tools-bar").show()
        }
        s || i("html").addClass("viewPic_html_show");
        var f = new Image;
        f.onload = function () {
            e.imgMainW = this.width, e.imgMainH = this.height, e.thumbW = e.$thumb.width(), e.thumbH = e.imgMainH * e.thumbW / e.imgMainW, e.$imgMainObj.attr("src", n), e.$thumbOuter.attr("src", n), e.$thumbInner.attr("src", n), e.setPicCenter();
            var i = e.dataStroage[t - 1] ? e.dataStroage[t - 1].vip_picture : "",
                s = e.dataStroage[t + 1] ? e.dataStroage[t + 1].vip_picture : "";
            if (i) {
                var o = new Image;
                o.src = i
            }
            if (s) {
                var a = new Image;
                a.src = s
            }
            e.$picViewer.removeClass("pic_loading")
        }, f.onerror = function () {
            e.failed || (e.show(t, !0), e.failed = !0)
        }, t !== this.index && (e.failed = !1), f.src = n, f.complete || this.$picViewer.addClass("pic_loading"), this.btnStatus(t), this.index = t, this.$picViewer.show()
    }, s.prototype.figure = function (t) {
        var s = t.length, e = "";
        if (this.$figure = i("#figure").find(".figure-wrap"), this.$figUp.removeClass("fig-show"), this.$figDown.removeClass("fig-show"), s) {
            for (var n = 0; n < s; n++)e += 0 === n ? '<a class="figure-item active" style="margin-top: 0;"href="javascript:;" data-downurl="' + t[n].downUrl + '" data-id="' + t[n].id + '" data-type="' + t[n].fav_type + '"><img width="70" height="105" data-back="' + t[n].vip_backup + '" data-ori="' + t[n].vip_picture + '" src="' + t[n].min_picture + '"></a>' : '<a class="figure-item" href="javascript:;" data-downurl="' + t[n].downUrl + '" data-id="' + t[n].id + '" data-type="' + t[n].fav_type + '"><img width="70" height="105" data-back="' + t[n].vip_backup + '" data-ori="' + t[n].vip_picture + '" src="' + t[n].min_picture + '"></a>';
            this.$figure.find(".figure-inner").html(e), i("#figure").show(), this.$figFirst = this.$figure.find(".figure-item:first"), this.$figLast = this.$figure.find("a:last"), this.figH = this.$figure.height();
            var o = this;
            setTimeout(function () {
                o.figInnerH = o.$figure.find(".figure-inner").height(), o.lastDis = o.figH - o.figInnerH, o.lastDis < 0 && o.$figDown.addClass("fig-show")
            }, 10)
        }
    }, s.prototype.figureDown = function () {
        var t = parseInt(this.$figFirst.css("margin-top")) - this.figH;
        this.$figDown.hasClass("fig-show") && (this.$figUp.addClass("fig-show"), t > this.lastDis ? i("#figure").find(".figure-item:first").stop().animate({"margin-top": "-=" + this.figH}) : (i("#figure").find(".figure-item:first").stop().animate({"margin-top": this.lastDis}), this.$figDown.removeClass("fig-show")))
    }, s.prototype.figureUp = function () {
        var t = parseInt(this.$figFirst.css("margin-top")) + this.figH;
        this.$figUp.hasClass("fig-show") && (this.$figDown.addClass("fig-show"), t < 0 ? i("#figure").find(".figure-item:first").stop().animate({"margin-top": "+=" + this.figH}) : (i("#figure").find(".figure-item:first").stop().animate({"margin-top": 0}), this.$figUp.removeClass("fig-show")))
    }, s.prototype.figureWheel = function (i) {
        var t = 0;
        i = i || window.event, t = i.wheelDelta ? i.wheelDelta / 12e3 : -i.detail / 200, t > 0 ? this.figureUp() : this.figureDown(), i && i.stopPropagation ? i.stopPropagation() : i.cancelBubble = !0
    }, s.prototype.figureShow = function (t, s) {
        var e = this, n = t.find("img").data("ori"),
            o = e.figH / 2 - (t.offset().top - e.$figure.offset().top + t.outerHeight() / 2),
            a = parseInt(e.$figFirst.css("margin-top")) + o, h = t.data("downurl");
        t.hasClass("active") || (e.failed = !1), s ? n = t.find("img").data("back") : (t.addClass("active").siblings().removeClass("active"), e.zoomFn.height = 0, e.zoomFn.width = 0, this.$downBtn.attr("down-url", h), e.scaleShow(), e.lastDis < 0 && (e.$figUp.addClass("fig-show"), e.$figDown.addClass("fig-show"), a > 0 ? (i("#figure").find(".figure-item:first").stop().animate({"margin-top": 0}), e.$figUp.removeClass("fig-show")) : a < e.lastDis ? (i("#figure").find(".figure-item:first").stop().animate({"margin-top": e.lastDis}), e.$figDown.removeClass("fig-show")) : i("#figure").find(".figure-item:first").stop().animate({"margin-top": "+=" + o})));
        var r = new Image;
        r.onload = function () {
            e.imgMainW = this.width, e.imgMainH = this.height, e.thumbW = e.$thumb.width(), e.thumbH = e.imgMainH * e.thumbW / e.imgMainW, e.$imgMainObj.attr("src", n), e.$thumbOuter.attr("src", n), e.$thumbInner.attr("src", n), e.setPicCenter()
        }, r.onerror = function () {
            e.failed || (e.figureShow(t, !0), e.failed = !0)
        }, r.src = n
    }, s.prototype.btnStatus = function (i) {
        this.$next.show(), this.$prev.show(), 0 == i && this.$prev.hide(), i == this.dataStroage.length - 1 && (this.$next.hide(), 1 == window.sessionStorage.tryStatus)
    }, s.prototype.imgReady = function () {
        var i = [], t = null, s = function () {
            for (var t = 0; t < i.length; t++)i[t].end ? i.splice(t--, 1) : i[t]();
            !i.length && e()
        }, e = function () {
            clearInterval(t), t = null
        };
        return function (e, n, o, a) {
            var h, r, c, l, d, f = new Image;
            return f.src = e, f.complete ? (n.call(f), void(o && o.call(f))) : (r = f.width, c = f.height, f.onerror = function () {
                a && a.call(f), h.end = !0, f = f.onload = f.onerror = null
            }, h = function () {
                l = f.width, d = f.height, (l !== r || d !== c || l * d > 1024) && (n.call(f), h.end = !0)
            }, h(), f.onload = function () {
                !h.end && h(), o && o.call(f), f = f.onload = f.onerror = null
            }, void(h.end || (i.push(h), null === t && (t = setInterval(s, 40)))))
        }
    }(), s
});