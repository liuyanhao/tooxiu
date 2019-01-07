!function () {
    var t = window.sessionStorage.Target.split(","), e = {
        paths: {
            sidebar: DX_CONST.config.Host + "js/tooxiu/common/sidebar",
            viewPic: DX_CONST.config.Host + "js/lib/viewPic/js/viewPic",
            book: DX_CONST.config.Host + "js/tooxiu/theme/book",
            rich: DX_CONST.config.Host + "js/tooxiu/theme/rich",
            "public": DX_CONST.config.Host + "js/tooxiu/common/public"
        }
    };
    e.deps = [t[1]], require.config(e), define("thememain.js", [t[1]], function (t) {
        return t
    })
}(), define("public", [], function () {
    return DX_CONST.modules.extend({
        events: {"click .add-subscription-btn": "addSubscription"},
        addHeadStyle: function (t, e, i) {
            var a = 0, n = function () {
                var e = $("#" + t);
                return e.length ? e : function () {
                    a = 1;
                    var e = document.createElement("style");
                    return e.id = t, e.type = "text/css", $(e)
                }()
            }();
            (n[0].styleSheet ? 1 : 0) ? i ? n[0].styleSheet.cssText += e : n[0].styleSheet.cssText = e : i ? n[0].innerHTML += e : n[0].innerHTML = e, a && document.getElementsByTagName("head")[0].appendChild(n[0])
        },
        goPage: function (t) {
            function e(t) {
                t = t || window.event, 13 === (t.keyCode || t.which || t.charCode) && i.siblings(".go-btnPage").trigger("click")
            }

            var i = $(t.currentTarget), a = i.next();
            a.off("keyup", null, e), a.on("keyup", null, e), i.hide().siblings().show()
        },
        calculateListheight: function () {
            var t = null, e = $(".ns-pic-ul-wrap-list"), i = e.find(".ns-list-item"), a = function () {
                var t = Math.round(e.width() / (i.width() || 1)) - 1;
                if ((e.length || i.length) && -1 !== t) {
                    i.find(".borderRight-ms").removeClass("borderRight-ms");
                    for (var a = t; a < i.size(); a += t + 1)i.eq(a).find(".ns-list-item-inner").addClass("borderRight-ms")
                }
            };
            e.width() && i.width() && (a(), $(window).on("resize", function () {
                clearTimeout(t), t = setTimeout(function () {
                    autoHeightList("resize"), a()
                }, 150)
            }))
        },
        imgAnimation: function (t) {
            var e = $(t.currentTarget);
            e.find("img").css({
                width: "84%",
                margin: "5px 0 0 5px"
            }), e.find(".ns-list-right-btn, .ns-list-bottom-btn, .small-tag").css({
                opacity: "1",
                filter: "alpha(opacity=100)"
            })
        },
        imgAnimationOver: function (t) {
            var e = $(t.currentTarget);
            e.find("img").removeAttr("style"), e.find(".ns-list-right-btn, .ns-list-bottom-btn, .small-tag").removeAttr("style")
        },
        hoverdir: function (t) {
            var e = $(t.currentTarget), i = e.width(), a = e.height(),
                n = (t.pageX - e.offset().left - i / 2) * (i > a ? a / i : 1),
                s = (t.pageY - e.offset().top - a / 2) * (a > i ? i / a : 1),
                o = Math.round((Math.atan2(s, n) * (180 / Math.PI) + 180) / 90 + 3) % 4;
            if ("mouseenter" === t.type) {
                switch (o) {
                    case 0:
                        e.find(".pic-info").css({left: 0, top: "-100%"});
                        break;
                    case 1:
                        e.find(".pic-info").css({left: "100%", top: 0});
                        break;
                    case 2:
                        e.find(".pic-info").css({left: 0, top: "100%"});
                        break;
                    case 3:
                        e.find(".pic-info").css({left: "-100%", top: 0})
                }
                e.find(".pic-info").hide(), clearTimeout(this.tmhover), this.tmhover = setTimeout(function () {
                    e.find(".pic-info").show(0, function () {
                        $(this).css({left: 0, top: 0})
                    })
                }, 10)
            } else switch (o) {
                case 0:
                    e.find(".pic-info").css({left: 0, top: "-100%"});
                    break;
                case 1:
                    e.find(".pic-info").css({left: "100%", top: 0});
                    break;
                case 2:
                    e.find(".pic-info").css({left: 0, top: "100%"});
                    break;
                case 3:
                    e.find(".pic-info").css({left: "-100%", top: 0})
            }
        },
        collect: function (t, e) {
            if ("undefined" != typeof is_login && "1" !== is_login)return this.openRegister(), !1;
            var i = $(t.currentTarget), a = i.attr("data-type") ? i.attr("data-type") : "1", n = "", s = -1;
            if (void 0 !== i.attr("data-id") && (n = i.attr("data-id")), void 0 !== i.attr("data-index") && (s = parseInt(i.attr("data-index"))), i.find("i").hasClass("icon-faved")) {
                var o = "";
                switch (a) {
                    case"1":
                    case"2":
                        o = "您已收藏过该主题";
                        break;
                    case"2":
                    case"3":
                        o = "您已收藏过该图片"
                }
                layer.msg(o, {icon: 0})
            } else $.get(window.sessionStorage.favorites, {id: n, type: a}, function (t) {
                1 == t.status ? (layer.msg(t.info, {icon: 1}), i.find("i").removeClass("icon-fav").addClass("icon-faved"), -1 !== s && ("m" == i.attr("data-ori") ? montageData.list[s].is_fav = 1 : "r" == i.attr("data-ori") ? window.recommendData[window.arrIndex].picList[s].is_fav = 1 : "b" == i.attr("data-ori") ? e[s].is_fav = 1 : "e" == i.attr("data-ori") ? extraPicData.list[s].is_fav = 1 : pageData.list[s].is_fav = 1)) : layer.msg(t.info, {icon: 0})
            })
        },
        isVisible: function (t) {
            var e = $(t);
            if (e.is(":hidden") || "hidden" == e.css("visibility"))return !1;
            var i = t.getBoundingClientRect();
            return i.top >= 0 && i.top < $(window).height() || i.top < 0 && i.height + i.top > 0
        },
        tabFn: function (t) {
            var e = t.hd, i = t.bd;
            "click" == t.type && e.on("click", "li", function () {
                return $(this).addClass("cur").siblings().removeClass("cur"), i.children().hide().eq($(this).index()).show(), !1
            })
        },
        toRegister: function () {
            var t = this;
            "undefined" != typeof is_login && "1" !== is_login && setTimeout(function () {
                $("#loginForm").size() || t.openRegister()
            }, 5e3)
        },
        download: function (t) {
            if ("undefined" != typeof is_login && "1" !== is_login)return this.openRegister(), !1;
            var e = $(t.currentTarget);
            if (e.hasClass("down-disabled"))return !1;
            var i = e.attr("data-type") ? e.attr("data-type") : "1";
            if (e.hasClass("no-power")) {
                var a = "";
                switch (i) {
                    case"1":
                    case"2":
                        a = "您的帐号没有权限下载该主题，请升级帐号权限!";
                        break;
                    case"3":
                        a = "您的帐号没有权限下载该图片，请升级帐号权限!"
                }
                return layer.msg(a, {icon: 0}), !1
            }
            layer.msg("系统正在处理，请稍候...", {icon: 0})
        },
        openRegister: function () {
            var t = this, e = null;
            $.get("/public/dev/js/tooxiu/template/register.html", function (i) {
                layer.open({
                    id: "js-login-window",
                    skin: "dialog-tooxiu-con",
                    type: 1,
                    title: "请先登录",
                    closeBtn: !0,
                    shadeClose: !0,
                    area: "590px",
                    content: i,
                    success: function (i, a) {
                        e = i, i.on("click", "#loginSubmit", function () {
                            t.checkLogin()
                        }).on("click", "#downClient", function () {
                            t.downClient()
                        }), $(document).on("keyup.js-layero-register", function (t) {
                            t = t || window.event, 13 === (t.keyCode || t.which || t.charCode) && i.find("#loginSubmit").trigger("click")
                        }).on("click.js-layero-register", "#use-help", function (e) {
                            t.useHelp()
                        })
                    },
                    end: function () {
                        e.off(), $(document).off(".js-layero-register"), e = null
                    }
                })
            })
        },
        openPower: function (t, e) {
            var i = this, a = layer.load(2, {shade: [.4, "#fff"]}),
                n = {channel: t || window.sessionStorage.channel, column: e || window.sessionStorage.colmun};
            $.ajax({
                url: "/vipOrder/powerNotice", type: "get", data: n, success: function (t) {
                    layer.close(a), layer.open({
                        type: 1,
                        skin: "dialog-tooxiu-con",
                        title: !1,
                        closeBtn: !0,
                        area: "480px",
                        move: ".layer-title",
                        content: t
                    }), i.data.set("vipList", $.parseJSON(window.sessionStorage.VipList || "{}")), $(document).on("click", ".order-btn>span", function (t) {
                        t = t || window.event;
                        var e = i.operateOrder(t);
                        i.data.set("orderTotalInfo", e)
                    }), $(document).on("click", ".order-submit>a", function (t) {
                        t = t || window.event, i.orderSubmit(t)
                    }), $(document).on("click", ".orderMore p", function (t) {
                        t = t || window.event, i.addOrSubtract(t)
                    }), $(document).on("click", "#layer-im", function (t) {
                        i.showIm()
                    })
                }, error: function (t) {
                    layer.close(a)
                }
            })
        },
        checkLogin: function (t) {
            var e = this, i = $("#loginForm"), a = $("#username");
            if ("" == $.trim(a.val()))return layer.msg("请输入蝶讯通行证！", {icon: 0}), void a.focus();
            var n = $("#password");
            if ("" == $.trim(n.val()))return layer.msg("请输入登录密码！", {icon: 0}), void n.focus();
            var s = i.serialize();
            e.onCheck || (e.onCheck = !0, $.post(i.attr("action"), s, function (t) {
                1 == t.status ? i.submit() : layer.msg(t.des, {icon: 0}), e.onCheck = !1
            }, "json"))
        },
        getSearchData: function (t, e) {
            var i = $.trim(t.val), a = "", n = {};
            t.type ? (a = "/Search/dealSearchFilter/", n = {
                title: i,
                type: t.type
            }) : (a = "/Search/getSearchKeyword", n = {title: i}), $.ajax({
                url: a,
                data: n,
                dataType: "json",
                success: function (t) {
                    t = {searchList: t || []};
                    var i = [];
                    t.searchList && t.searchList.length > 0 && (i = t.searchList, e.call(null, i)), console.log("搜索成功")
                },
                error: function (t) {
                    console.log("搜索失败")
                }
            })
        },
        searchFn: function (t) {
            t = t || window.event;
            var e = t.keyCode || t.which || t.charCode;
            if (38 !== e && 40 !== e && 37 !== e && 39 !== e) {
                var i = $(t.currentTarget), a = this, n = i.val(), s = {val: n};
                if (i.attr("data-type") && (s.type = i.attr("data-type")), $.isEmpty($.trim(n))) i.siblings(".sug").empty().fadeOut("fast"), this.searchVal = ""; else {
                    if (n == this.searchVal)return;
                    a.getSearchData(s, function (t) {
                        var e = i.parent().attr("action") ? i.parent().attr("action") : i.parent().attr("data-url"),
                            a = "", s = t.length > 5 ? 5 : t.length, o = new RegExp(n, "ig");
                        if (i.attr("data-list") ? 1 : 0)for (var r = 0; r < s; r++) {
                            var l = t[r].title.replace(o, "<span class='search-keyword'>$&</span>");
                            a += '<li><a href="' + e + "?" + i.attr("data-type") + "=" + t[r].id + '">' + l + "</a></li>"
                        } else for (var r = 0; r < s; r++) {
                            var l = t[r].title.replace(o, "<span class='search-keyword'>$&</span>");
                            a += '<li><a href="' + e + "?q=" + t[r].title + '">' + l + "</a></li>"
                        }
                        i.siblings(".sug").html(a).stop().fadeIn("fast")
                    }), this.searchVal = n
                }
            }
        },
        searchFocus: function (t) {
            var e = $(t.currentTarget), i = this;
            e.siblings(".sug").children().length > 0 && e.siblings(".sug").stop().fadeIn("fast"), e.closest(".small-search").addClass("search-focus"), clearInterval(i.selectTimer), i.__keyUpSelectFn || (console.log("添加 __keyUpSelectFn"), i.__keyUpSelectFn = DX_CONST.common.bind(i, i.__keyUpSelect), $("body").on("keydown", null, i.__keyUpSelectFn))
        },
        searchBlur: function (t) {
            var e = $(t.currentTarget);
            e.siblings(".sug").stop().fadeOut("fast", function () {
                e.closest(".small-search").removeClass("search-focus")
            }), this.searchVal = "", clearInterval(this.searchTimer), console.log("删除 __keyUpSelectFn"), $("body").off("keydown", null, this.__keyUpSelectFn), this.__keyUpSelectFn = null
        },
        __keyUpSelect: function (t) {
            t = t || window.event;
            var e = t.keyCode || t.which || t.charCode, i = -1, a = $("body").find(".search-focus ul"),
                n = a.find("li"), s = a.find("li.cur");
            switch (e) {
                case 13:
                    s.length && ($.stopEventDefault(t), $.stopEventBubble(t), window.location.href = s.find("a").attr("href"));
                    break;
                case 40:
                    if (s.length && (i = s.eq(0).index()) !== n.length - 1) {
                        n.removeClass("cur").eq(++i).addClass("cur");
                        break
                    }
                    n.length && n.removeClass("cur").eq(0).addClass("cur");
                    break;
                case 38:
                    if (s.length && 0 !== (i = s.eq(0).index())) {
                        n.removeClass("cur").eq(--i).addClass("cur");
                        break
                    }
                    n.length && n.removeClass("cur").eq(n.length - 1).addClass("cur")
            }
        },
        addOrSubtract: function (t) {
            var e = $(t.currentTarget).parent();
            if (e.hasClass("isValue")) {
                if (+e.find(".order-btn").attr("data-year") > 1)return;
                e.find(".del-btn").trigger("click")
            } else e.find(".add-btn").trigger("click")
        },
        vipHTML: '<p><%=data["viptype_name"]%><br><%=data["viptype_money"]%>元/<%if(!$.isEmpty(data["year"])&& data["year"] !== 0){%><%=data["year"]%><%}%>年</p><div class="order-btn fn-clear" data-id="<%=data["id"]%>" data-year="<%=data["year"]||0%>"><span class="del-btn fl"></span><span class="add-btn fR"></span><div class="select-s"><%=data["year"]||0%>年</div></div><div class="cur-bg fn-hide"></div>',
        operateOrder: function (t) {
            $.stopEventBubble(t);
            var e = $(t.currentTarget), i = e.parent().attr("data-id"), a = parseInt(e.parent().attr("data-year")),
                n = e.parents(".orderMore"), s = this.data.get("vipList") || [], o = $.findWhere(s, {id: i}),
                r = this.data.get("orderTotalInfo") || {idList: [], orderTotal: 0}, l = $.findWhere(r.idList, {id: i});
            if (e.hasClass("del-btn")) {
                if (0 == a)return r;
                if (a -= 1, !$.isEmpty(l) && (l.year -= 1), r.orderTotal -= parseInt(o.viptype_money), 0 === a) {
                    n.removeClass("isValue");
                    for (var d = 0, c = r.idList.length; d < c; d++)if (r.idList[d].id === i) {
                        r.idList.splice(d, 1);
                        break
                    }
                }
            } else a += 1, $.isEmpty(l) ? r.idList.push({
                id: i,
                year: 1
            }) : l.year += 1, r.orderTotal += parseInt(o.viptype_money), n.addClass("isValue");
            return n.html($.template(this.vipHTML, {
                data: {
                    year: a,
                    viptype_name: o.viptype_name,
                    viptype_money: o.viptype_money * a || parseInt(o.viptype_money),
                    id: o.id
                }
            })), r
        },
        unqualified: function (t) {
            var e = $("#dialog-tip-temp").html(), i = t.msg;
            layer.open({
                content: $.template(e, {data: {title: i, cons: "您需要先补充完善资料后才能继续"}}) || "提交失败，请稍后再试",
                skin: "dialog-tooxiu-con",
                title: "创建订单",
                closeBtn: !0,
                area: ["365px"],
                btn: ["立即完善"],
                yes: function (t, e) {
                    layer.close(t), window.location.href = "/UserCenter/accountManage"
                }
            })
        },
        orderSubmit: function (t) {
            var e = this.data.get("orderTotalInfo"), i = this;
            if ($.stopEventBubble(t), $.stopEventDefault(t), $.isEmpty(e) || $.isObject(e) && 0 == e.orderTotal)return layer.msg("您还没有选择套餐", {icon: 0}), !1;
            var a = $(t.currentTarget);
            if ("true" != a.attr("data-disabled")) {
                a.attr("data-disabled", "true");
                for (var n = [], s = [], o = 0, r = e.idList.length; o < r; o++)n.push(e.idList[o].id), s.push(e.idList[o].year);
                var l = layer.load(2, {shade: [.4, "#fff"]});
                return $.ajax({
                    url: "/UserCenter/orderToCookie",
                    type: "post",
                    data: {idList: n.join("|"), year: s.join("|")},
                    dataType: "json",
                    success: function (t) {
                        layer.close(l), 1 == t.status ? location.href = t.href : 0 == t.status ? i.unqualified(t) : layer.msg(t.msg || "提交失败，请稍后再试", {icon: 0}), a.removeAttr("data-disabled")
                    },
                    error: function (t) {
                        a.removeAttr("data-disabled"), layer.close(l)
                    }
                })
            }
        },
        getData: function () {
            var t = this;
            clearTimeout(t._isScroll), t._isScroll = setTimeout(function () {
                t.scrollFn.call(t)
            }, 70)
        },
        scrollFn: function () {
            var t = document.getElementById("loading");
            if (t && this.isVisible(t)) {
                var e = (this.iIndex - 1) * this.len, i = (this.iIndex - 1) * this.len + this.len,
                    a = this.dataStroage.slice(e, i);
                0 !== a.length ? (this.appendHtml(a, this.iIndex), this.iIndex++) : ($("#loading").hide(), $("#page").html(pageData.page))
            }
        },
        appendHtml: function (t, e) {
            var i = pageData.page, a = t.length, n = $("#list-temp").html(), s = this;
            this.$el.find("#js-list").append($.template(n, {data: {list: t || []}})), this.asynLoader && this.asynLoader.attach({
                type: "img",
                node: document.getElementById("js-list")
            }), this.$el.find("#js-list li").fadeIn(function () {
                s.$el.find("#js-list").hasClass("book-detail") && (s.allCopy = $("#js-list").html(), s.isLoadingHide = !!$("#loading").is(":hidden"))
            }), (3 === e || a < this.len) && ($("#loading").hide(), $("#page").html(i))
        },
        getPos: function (t) {
            return {x: t.offset().left, y: t.offset().top}
        },
        getCookie: function (t) {
            var e = encodeURIComponent(t) + "=", i = document.cookie.indexOf(e), a = null;
            if (i > -1) {
                var n = document.cookie.indexOf(";", i);
                -1 == n && (n = document.cookie.length), a = decodeURIComponent(document.cookie.substring(i + e.length, n))
            }
            return a
        },
        setCookie: function (t, e, i, a, n, s) {
            var o = encodeURIComponent(t) + "=" + encodeURIComponent(e);
            i instanceof Date && (o += ";expires=" + i.toUTCString()), a && (o += ";path=" + a), n && (o += ";domain=" + n), s && (o += ";secure"), document.cookie = o
        },
        unsetCookie: function (t, e, i, a) {
            this.set(t, "", new Date(0), e, i, a)
        },
        trial: function () {
            $.get("/public/dev/js/tooxiu/template/trial.html", function (t) {
                layer.open({
                    skin: "dialog-tooxiu-con",
                    type: 1,
                    title: !1,
                    closeBtn: !1,
                    area: ["510px", "260px"],
                    content: t
                })
            })
        },
        setScreenWidth: function () {
            var t = screen.width, e = new Date;
            e.setTime(e.getTime() + 2592e6), this.getCookie("screenWidth") && this.getCookie("screenWidth") == t || this.setCookie("screenWidth", t, e, "/")
        },
        showIm: function () {
            function t() {
                window.imurl ? window.open(window.imurl, "newWin", "height=523,width=650,top=" + i + ",left=" + e + ",status=yes,toolbar=no,menubar=no,resizable=no,scrollbars=no,location=no,titlebar=no") : setTimeout(t, 500)
            }

            var e = (screen.availWidth - 650) / 2, i = (screen.availHeight - 523) / 2;
            $("#im").length || $("head").append('<script id="im" src="https://im.diexun.com/online.php?type=2"><\/script>'), window.imurl ? window.open(window.imurl, "newWin", "height=523,width=650,top=" + i + ",left=" + e + ",status=yes,toolbar=no,menubar=no,resizable=no,scrollbars=no,location=no,titlebar=no") : setTimeout(t, 500)
        },
        addSubscription: function () {
            if ("undefined" != typeof is_login && "1" !== is_login)return this.openRegister(), !1;
            var t = "string" == typeof window.subscribe_json ? $.parseJSON(window.subscribe_json || "{}") : window.subscribe_json;
            if ($.getKeys(t).length)return layer.msg("正在执行操作，请稍候...", {icon: 0, time: 3e4}), $.ajax({
                type: "post",
                url: "/UserCenter/subscribeAdd",
                data: t,
                success: function (t) {
                    1 == t.status ? layer.msg("订阅成功！", {icon: 1}) : layer.msg(t.msg || "订阅失败，请重试！", {icon: 0})
                },
                error: function () {
                    layer.msg("网络异常，请重试！", {icon: 0})
                }
            })
        },
        detectOS: function () {
            var t = (navigator.userAgent, "Win32" == navigator.platform || "Windows" == navigator.platform);
            if (t)return "Win";
            var e = "Mac68K" == navigator.platform || "MacPPC" == navigator.platform || "Macintosh" == navigator.platform || "MacIntel" == navigator.platform;
            return e ? "Mac" : "X11" != navigator.platform || t || e ? String(navigator.platform).indexOf("Linux") > -1 ? "Linux" : "other" : "Unix"
        },
        downClient: function () {
            "Win" === this.detectOS() ? location.href = "http://app.diexun.com/client/win/diction.exe" : "Mac" === this.detectOS() ? location.href = "http://app.diexun.com/client/mac/diction.dmg" : location.href = "http://app.diexun.com/"
        },
        useHelp: function () {
            layer.open({
                skin: "dialog-tooxiu-con",
                type: 1,
                title: "使用帮助",
                closeBtn: !0,
                area: "590px",
                content: '<div class="scan-help"></div>'
            })
        },
        addChildView: function (t, e) {
            e = $.isObject(e) ? e : {};
            var i = this, a = function (t) {
                var e = null, i = function () {
                    throw"addChildView 方法的传参不正确，请阅读方法说明"
                };
                return "string" == typeof t ? e = $(t) : "object" == typeof t ? t.nodeType ? e = $(t) : t instanceof $ ? e = t : $.hasAttr(t, "id") || $.hasAttr(t, "className") ? e = $("<div/>").addClass(t.className || "").attr("id", t.id || "") : i() : i(), e && e.length || i(), e
            }(t);
            return DX_CONST.modules.init($.extend({parent: i, el: a[0], validaData: i.validaData}, e))
        },
        unChildView: function (t, e) {
            this[t].remove(), layer.close(e), this[t] = null, console.log("注销   " + t + "   视图事件"), this.trigger("_deltips")
        },
        validaData: function (t) {
            t = t || {};
            for (var e, i = this.$el.find("input[name],input[data-name]"), a = {
                value: {},
                no: [],
                yes: !0
            }, n = null, s = "", o = !1, r = 0, l = i.length; r < l; r++)if (n = i.eq(r), (s = n.attr("name") || n.attr("data-name")) && (e = n.val(), o = !1 | $.isEmpty($.trim(e)), !o && (a.value[s] = e), $.hasAttr(t, s))) {
                if (o && t[s].required) {
                    t.isTip || this.parent.tipsNode(t[s].emptyMsg || t[s].msg), a.no.push(s), a.yes = !1;
                    break
                }
                if (!t[s].reg.test(e)) {
                    t.isTip || this.parent.tipsNode(t[s].msg), a.no.push(s), a.yes = !1;
                    break
                }
            }
            return a
        },
        tipsNode: function (t) {
            var e = {text: "无内容弹窗", type: 0, time: 3e3, top: 50, left: "auto", isViable: !1}, i = this, a = $("<div>");
            "string" == typeof t ? e.text = t : $.extend(e, t), !i.__tips && (i.__tips = {
                timerOne: null,
                nodeOne: null,
                delEventOne: !1,
                timerTwo: null,
                nodeTwo: null,
                delEventTwo: !1,
                removeTip: function (t) {
                    t ? (clearTimeout(this.timerTwo), this.timerTwo = null, this.nodeTwo && this.nodeTwo.remove(), this.nodeTwo = null) : (clearTimeout(this.timerOne), this.timerOne = null, this.nodeOne && this.nodeOne.remove(), this.nodeOne = null)
                }
            }), a.addClass("layui-layer layui-anim layui-layer-dialog layui-layer-msg ").html($.template('<div class="layui-layer-content layui-layer-padding"><i class="layui-layer-ico layui-layer-ico<%=type%>"></i><%=data%></div><span class="layui-layer-setwin"></span>', {
                data: e.text,
                type: e.type
            })), a.appendTo($("body")), "auto" === e.top && (e.top = $(window).height() / 2 - a.height() / 2), "auto" === e.left && (e.left = $(window).width() / 2 - a.width() / 2), a.css({
                top: e.top + "px",
                left: e.left + "px",
                zIndex: 99999999
            }), e.isViable ? (i.__tips.nodeTwo && i.__tips.removeTip(!0), i.__tips.nodeTwo = a, i.__tips.timerTwo = setTimeout(function () {
                i.__tips.removeTip(!0)
            }, e.time), i.__tips.delEventTwo || (i.on("_delViable", function () {
                i.__tips.removeTip(!0), i.off("_delViable")
            }, i), i.__tips.delEventTwo = !0)) : (i.__tips.nodeOne && i.__tips.removeTip(), i.__tips.nodeOne = a, i.__tips.timerOne = setTimeout(function () {
                i.__tips.removeTip()
            }, e.time), i.__tips.delEventOne || (i.on("_deltips", function () {
                i.__tips.removeTip(), i.off("_deltips")
            }, i), i.__tips.delEventOne = !0))
        },
        showPhoto: function (t, e, i) {
            var a = this, n = $(t.currentTarget), s = parseInt(n.attr("data-index")) || 0, o = e || [];
            return o.length && o[s] ? o[s].no_open_big ? void a.tipsNode({
                text: "数据已被删除，不可浏览！",
                top: "auto"
            }) : "undefined" != typeof is_login && "1" !== is_login ? (a.openRegister(), !1) : $.isEmpty(o[s].is_right) || o[s].is_right.isRightB ? !o[s] || "undefined" == typeof o[s].is_right || o[s].is_right.isRightB || o[s].is_right.isRightB && o[s].is_right.isPcRight ? void a.PicPreview(o, i || function () {
                    $("#picViewer .btn-fav").hide(), a._viewPic.show(s)
                }) : (a.openPower(), !1) : (a.tipsNode({
                text: "对不起，您没有浏览权限！如需帮助，请联系客服热线：400-688-0836",
                top: "auto"
            }), !1) : (a.tipsNode({text: "没有找到图片数据！", top: "auto"}), !1)
        },
        PicPreview: function (t, e) {
            var i = this, a = function () {
                i._viewPic.dataStroage = t, $.isFunction(e) && e()
            };
            if (i._viewPic)return void a();
            var n = layer.load(2, {shade: [.2, "#fff"]});
            require(["viewPic"], function (t) {
                i._viewPic = new t, a(), layer.close(n)
            })
        },
        _errorImg: {},
        beforeWater: function (t, e) {
            var i = t.length, a = i, n = this, s = "/public/images/tooxiu/home/default.jpg", o = {};
            window._errorImg = this._errorImg;
            for (var r = 0; r < i; r++)!function (i) {
                o[i] = new Image, o[i].onload = function () {
                    o[i].onload = null, 0 === --a && (!$.isEmpty(n._errorImg) && console.log("图片加载失败的id：" + JSON.stringify(n._errorImg)), n.obs(t, e))
                }, o[i].onerror = function (e) {
                    var a = t[i].id;
                    n._errorImg[a] = a, t[i].min_picture = s, o[i].src = s, o[i].onerror = null
                }, o[i].src = t[i].min_picture
            }(r)
        },
        __pageDataIndex: 0,
        appendHtml: function (t, e) {
            var i = $("#list-temp").html(), a = this, n = a._isTransform || 0;
            this.$el.find("#" + e).append($.template(i, {
                data: {
                    list: t || [],
                    isTransform: n,
                    pageDataIndex: a.__pageDataIndex
                }
            })), this.__pageDataIndex += t.length
        },
        obs: function (t, e) {
            if (!t.length)return void(that.getFigure = 0);
            this.appendHtml(t, e), this.toWater(t), this.trigger("dataEnd")
        },
        calculateListheight: function () {
            var t = null, e = $(".ns-pic-ul-wrap-list"), i = e.find(".ns-list-item"), a = function () {
                var t = Math.round(e.width() / (i.width() || 1)) - 1;
                if ((e.length || i.length) && -1 !== t) {
                    i.find(".borderRight-ms").removeClass("borderRight-ms");
                    for (var a = t; a < i.size(); a += t + 1)i.eq(a).find(".ns-list-item-inner").addClass("borderRight-ms")
                }
            };
            e.width() && i.width() && (a(), $(window).on("resize", function () {
                clearTimeout(t), t = setTimeout(function () {
                    autoHeightList("resize"), a()
                }, 150)
            }))
        },
        _allSearchTemp: $.template('<% var reg = new RegExp(data._replace||"","ig"),value = ""; $.each(data.list[0]||[],function(key,val){ if(!$.isEmpty(data._replace)){ value = (val.title_view+"").replace(reg,function(txt){  return "<span class=\'search-keyword\'>"+txt+"</span>";}) }else{ value = val.title_view; } %><li><a href="javascript:;" title="<%=val.title_view%>"><%=value%></a></li><%})%>'),
        allSearch: function () {
            function t(t, e) {
                $.getJSON("/Search/getSearchKeyword/", {title: t}, function (t) {
                    e.call(null, t)
                })
            }

            var e = this, i = e.$el, a = null;
            $.addPlaceholder(i.find(".allMenuSearch")), i.on("click", ".ns-l-search-abs a", function (t) {
                var e = $(t.currentTarget), i = e.parents("form");
                i.find(".allMenuSearch").val(e.attr("title")), i.submit()
            }).on("focus", ".allMenuSearch", function (t) {
                var i = $(t.currentTarget);
                e.searchFocus(t), i.parents("form").addClass("cur"), $.isEmpty($.trim(i.val())) || i.trigger("input")
            }).on("keyup input", ".allMenuSearch", function (i) {
                $.stopEventDefault(i), $.stopEventBubble(i), i = i || window.event;
                var n = i.keyCode || i.which || i.charCode;
                if (38 !== n && 40 !== n && 37 !== n && 39 !== n) {
                    clearTimeout(a);
                    var s = $(i.currentTarget), o = $.trim(s.val());
                    if (!$.isEmpty(o)) {
                        var r = s.siblings(".ns-l-search-abs"), l = r.attr("data-value") || "", d = function (t) {
                            r.html(e._allSearchTemp({
                                data: {
                                    list: $.resetData(t, 10),
                                    _replace: o || !1
                                }
                            })).attr("data-value", o).parents("form").addClass("show_search")
                        };
                        if (l === o)return void d(e.data.get("LastTimeSearchData"));
                        a = setTimeout(function () {
                            t(o, function (t) {
                                $.isEmpty(t) || (e.data.set("LastTimeSearchData", t), d(t))
                            })
                        }, 500)
                    }
                }
            }).on("blur", ".allMenuSearch", function (t) {
                setTimeout(function () {
                    $(t.currentTarget).parents("form").removeClass("cur show_search")
                }, 200)
            })
        }
    })
}), define("text", ["module"], function (t) {
    "use strict";
    var e, i, a, n, s = ["Msxml2.XMLHTTP", "Microsoft.XMLHTTP", "Msxml2.XMLHTTP.4.0"],
        o = /^\s*<\?xml(\s)+version=[\'\"](\d)*.(\d)*[\'\"](\s)*\?>/im, r = /<body[^>]*>\s*([\s\S]+)\s*<\/body>/im,
        l = "undefined" != typeof location && location.href,
        d = l && location.protocol && location.protocol.replace(/\:/, ""), c = l && location.hostname,
        m = l && (location.port || undefined), p = [], h = t.config && t.config() || {};
    return e = {
        version: "2.0.5+", strip: function (t) {
            if (t) {
                t = t.replace(o, "");
                var e = t.match(r);
                e && (t = e[1])
            } else t = "";
            return t
        }, jsEscape: function (t) {
            return t.replace(/(['\\])/g, "\\$1").replace(/[\f]/g, "\\f").replace(/[\b]/g, "\\b").replace(/[\n]/g, "\\n").replace(/[\t]/g, "\\t").replace(/[\r]/g, "\\r").replace(/[\u2028]/g, "\\u2028").replace(/[\u2029]/g, "\\u2029")
        }, createXhr: h.createXhr || function () {
            var t, e, i;
            if ("undefined" != typeof XMLHttpRequest)return new XMLHttpRequest;
            if ("undefined" != typeof ActiveXObject)for (e = 0; e < 3; e += 1) {
                i = s[e];
                try {
                    t = new ActiveXObject(i)
                } catch (a) {
                }
                if (t) {
                    s = [i];
                    break
                }
            }
            return t
        }, parseName: function (t) {
            var e, i, a, n = !1, s = t.indexOf("."), o = 0 === t.indexOf("./") || 0 === t.indexOf("../");
            return -1 !== s && (!o || s > 1) ? (e = t.substring(0, s), i = t.substring(s + 1, t.length)) : e = t, a = i || e, s = a.indexOf("!"), -1 !== s && (n = "strip" === a.substring(s + 1), a = a.substring(0, s), i ? i = a : e = a), {
                moduleName: e,
                ext: i,
                strip: n
            }
        }, xdRegExp: /^((\w+)\:)?\/\/([^\/\\]+)/, useXhr: function (t, i, a, n) {
            var s, o, r, l = e.xdRegExp.exec(t);
            return !l || (s = l[2], o = l[3], o = o.split(":"), r = o[1], o = o[0], !(s && s !== i || o && o.toLowerCase() !== a.toLowerCase() || (r || o) && r !== n))
        }, finishLoad: function (t, i, a, n) {
            a = i ? e.strip(a) : a, h.isBuild && (p[t] = a), n(a)
        }, load: function (t, i, a, n) {
            if (n.isBuild && !n.inlineText)return void a();
            h.isBuild = n.isBuild;
            var s = e.parseName(t), o = s.moduleName + (s.ext ? "." + s.ext : ""), r = i.toUrl(o),
                p = h.useXhr || e.useXhr;
            !l || p(r, d, c, m) ? e.get(r, function (i) {
                e.finishLoad(t, s.strip, i, a)
            }, function (t) {
                a.error && a.error(t)
            }) : i([o], function (t) {
                e.finishLoad(s.moduleName + "." + s.ext, s.strip, t, a)
            })
        }, write: function (t, i, a, n) {
            if (p.hasOwnProperty(i)) {
                var s = e.jsEscape(p[i]);
                a.asModule(t + "!" + i, "define(function () { return '" + s + "';});\n")
            }
        }, writeFile: function (t, i, a, n, s) {
            var o = e.parseName(i), r = o.ext ? "." + o.ext : "", l = o.moduleName + r,
                d = a.toUrl(o.moduleName + r) + ".js";
            e.load(l, a, function (i) {
                var a = function (t) {
                    return n(d, t)
                };
                a.asModule = function (t, e) {
                    return n.asModule(t, d, e)
                }, e.write(t, l, a, s)
            }, s)
        }
    }, "node" === h.env || !h.env && "undefined" != typeof process && process.versions && process.versions.node ? (i = require.nodeRequire("fs"), e.get = function (t, e) {
        var a = i.readFileSync(t, "utf8");
        0 === a.indexOf("\ufeff") && (a = a.substring(1)), e(a)
    }) : "xhr" === h.env || !h.env && e.createXhr() ? e.get = function (t, i, a, n) {
        var s, o = e.createXhr();
        if (o.open("GET", t, !0), n)for (s in n)n.hasOwnProperty(s) && o.setRequestHeader(s.toLowerCase(), n[s]);
        h.onXhr && h.onXhr(o, t), o.onreadystatechange = function (e) {
            var n, s;
            4 === o.readyState && (n = o.status, n > 399 && n < 600 ? (s = new Error(t + " HTTP status: " + n), s.xhr = o, a(s)) : i(o.responseText))
        }, o.send(null)
    } : "rhino" === h.env || !h.env && "undefined" != typeof Packages && "undefined" != typeof java ? e.get = function (t, e) {
        var i, a, n = new java.io.File(t), s = java.lang.System.getProperty("line.separator"),
            o = new java.io.BufferedReader(new java.io.InputStreamReader(new java.io.FileInputStream(n), "utf-8")),
            r = "";
        try {
            for (i = new java.lang.StringBuffer, a = o.readLine(), a && a.length() && 65279 === a.charAt(0) && (a = a.substring(1)), i.append(a); null !== (a = o.readLine());)i.append(s), i.append(a);
            r = String(i.toString())
        } finally {
            o.close()
        }
        e(r)
    } : ("xpconnect" === h.env || !h.env && "undefined" != typeof Components && Components.classes && Components.interfaces) && (a = Components.classes, n = Components.interfaces, Components.utils["import"]("resource://gre/modules/FileUtils.jsm"), e.get = function (t, e) {
            var i, s, o = {}, r = new FileUtils.File(t);
            try {
                i = a["@mozilla.org/network/file-input-stream;1"].createInstance(n.nsIFileInputStream), i.init(r, 1, 0, !1), s = a["@mozilla.org/intl/converter-input-stream;1"].createInstance(n.nsIConverterInputStream), s.init(i, "utf-8", i.available(), n.nsIConverterInputStream.DEFAULT_REPLACEMENT_CHARACTER), s.readString(i.available(), o), s.close(), i.close(), e(o.value)
            } catch (l) {
                throw new Error((r && r.path || "") + ": " + l)
            }
        }), e
}), define("text!template/qrcode.html", [], function () {
    return '\x3c!-- 二维码 --\x3e\r\n<div class="login-layer fn-mgt20">\r\n\t<div class="top">\r\n\t\t<p class="warning"><i class="icon icon-warn"></i>使用微信/微博客户端中的“扫一扫”功能，扫描后即可关注蝶讯官方微信/微博</p>\r\n\t</div>\r\n\t<div class="code fn-mgt20">\r\n\t\t<span class="item">\r\n\t\t\t<i class="weibo"></i>\r\n\t\t\t<p><span class="icon-weibo"></span>官方微博</p>\r\n\t\t</span>\r\n\t\t<span class="item">\r\n\t\t\t<i class="weixin"></i>\r\n\t\t\t<p><span class="icon-weixin"></span>官方微信</p>\r\n\t\t</span>\r\n\t\t<span class="item">\r\n\t\t\t<i class="kefu"></i>\r\n\t\t\t<p><span class="icon-weixin"></span>客服微信</p>\r\n\t\t</span>\r\n\t</div>\r\n\t<div class="bottom">\r\n\t\t<a class="btn-input-normal layer-close">我知道了</a>\r\n\t</div>\r\n</div>'
}), define("sidebar", ["text!template/qrcode.html", "public"], function (t, e) {
    return e.init({
        el: "#side-bar", init: function (t) {
            this.mouseIn = !1, this.$top = this.$el.find(".top"), this.topH = this.$top.outerHeight(), this.$bottom = this.$el.find(".bottom"), this.render()
        }, render: function () {
            var e = this, i = null;
            $("#js-back-top").click(function () {
                $("html,body").animate({scrollTop: 0}, "fast")
            }), $("#side-bar").one("mouseenter", function () {
                e.set.call(e)
            }), $(window).scroll(function () {
                e.mouseIn && e.onscroll.call(e), $(document).scrollTop() > 30 ? $(".side-bar-item li:last").show() : $(".side-bar-item li:last").hide()
            }), $(window).resize(function () {
                i && clearTimeout(i), i = setTimeout(function () {
                    e.set.call(e)
                }, 100)
            }), $("#qr-code").click(function () {
                var e = layer.open({
                    type: 1,
                    skin: "dialog-tooxiu-con",
                    title: !1,
                    closeBtn: !1,
                    area: "580px",
                    move: ".top",
                    content: t
                });
                $(".layer-close").click(function () {
                    layer.close(e)
                })
            }), $("#online-im").click(function () {
                e.showIm()
            }), $("#proposal-layer").click(function () {
                e.proposalLayer()
            })
        }, proposalLayer: function () {
            var t = null, e = !0;
            layer.open({
                skin: "dialog-tooxiu-con proposal-layer",
                type: 1,
                title: "我有建议",
                closeBtn: !0,
                shadeClose: !0,
                area: "500px",
                content: '<div class="textarea-box"><textarea name="name" maxlength="400"></textarea><p id="proposalNum">0/400</p></div><div class="proposal-bottom"><div id="proposalSubmit">提交建议</div></div>',
                success: function (i, a) {
                    t = i, $(".textarea-box textarea").focus(), t.on("click", "#proposalSubmit", function () {
                        var i = $(".textarea-box textarea").val();
                        if (i.trim().length < 10)return layer.msg("建议内容不能少于10个字符！", {icon: 0}), !1;
                        e && (e = !1, $.ajax({
                            url: "/public-app_customer_feedback",
                            type: "post",
                            data: {
                                nickname: company_name,
                                note: i,
                                mobile: username,
                                customer_id: user_id,
                                type: "user",
                                device: "PC",
                                customer_resource: "4"
                            },
                            success: function (i) {
                                if (200 == i.status) {
                                    t.empty().append('<div class="box-top"><i class="icon success"></i><p class="tit">提交成功</p><p>非常感谢，您的建议我们已经收到，感谢您的支持！</p></div>'), setTimeout(function () {
                                        layer.close(a), t = null, e = !0
                                    }, 1e3)
                                } else layer.msg("提交失败！", {icon: 0}), e = !0
                            },
                            error: function () {
                                layer.msg("提交失败！", {icon: 0}), e = !0
                            }
                        }))
                    }), t.bind("input propertychange", "textarea", function (t) {
                        if ($(t.target).val().trim().length > 400) {
                            var e = $(t.target).val().trim().substr(0, 400);
                            $(t.target).val(e)
                        }
                        $("#proposalNum").text($(t.target).val().trim().length + "/400")
                    })
                },
                end: function () {
                    t.off(), t = null
                }
            })
        }, onscroll: function () {
            if (this.mouseIn) {
                $("#header").height() - $(window).scrollTop() < 0 || (this.$bottom.offset().top - (this.$top.offset().top + this.topH) <= 0 ? this.$top.css("visibility", "hidden") : this.$top.css("visibility", "visible"))
            }
        }, set: function () {
            var t = this, e = $("#header").height() - $(window).scrollTop();
            e < 0 || $(window).height();
            t.mouseIn = !0
        }
    })
}), define("rich", ["mCustomScrollbar", "viewPic", "public", "sidebar"], function (t, e, i, a) {
    return i.init({
        el: "body",
        name: "rich",
        template: "",
        dataStroage: [],
        onAjax: !1,
        events: {
            "click .theme-tags .next": "tagNext",
            "click .theme-tags .prev": "tagPrev",
            "click #theme-main img": "setViewPic",
            "click #montage-theme-content .montage-image-content": "setMontagePic",
            "click #recommend-list img": "setRecommendPic",
            "click #recommend li": "tabRecommend",
            "click .js-down-theme": "download",
            "mouseover .crumbs": "showSubNav",
            "mouseout .crumbs": "hideSubNav",
            "mouseover .theme-nav": "stopShowSubNav",
            "mouseover #theme-main img": "showBtn",
            "mouseout #theme-main img": "hideBtn",
            "mouseover #montage-theme-content .montage-image-content": "showBtn",
            "mouseout #montage-theme-content .montage-image-content": "hideBtn",
            "mouseover #recommend-list img": "showBtn",
            "mouseout #recommend-list img": "hideBtn",
            "mouseover #extra-list img": "showBtn",
            "mouseout #extra-list img": "hideBtn",
            "mouseenter .theme-interest-item a": "hoverdir",
            "mouseleave .theme-interest-item a": "hoverdir",
            "click #go-page": "goPage",
            "click .btn-down_layer": "downAlert"
        },
        downAlert: function () {
            var t = {
                    title: "当前下载人数较多，已将您的下载加入队列",
                    tips: "请您稍后重新刷新页面再次尝试下载",
                    cons: "系统正在处理您的下载请求，根据当前内容的实际图片数量及大小，可能需要耗费一些时间。您可以继续浏览其它内容，稍后回到本页重新刷新并尝试下载。"
                },
                e = $.template('<div id="dialog-down-temp" class="dialog-tooxiu-cons center-info-tip down-tips"><p class="p-warning"><i class="icon"></i><%=data.title%><span class="tips"><%=data.tips%></span></p><p class="info-gts"><%=data.cons%></p></div>', {data: t});
            layer.confirm(e, {
                skin: "dialog-tooxiu-con btn-layer-left-l",
                title: "下载",
                closeBtn: !0,
                area: ["484px"],
                btn: ["我知道啦"]
            }, DX_CONST.common.bind(self, function (t, e) {
                layer.close(t)
            }))
        },
        init: function (t) {
            if (this.$subNav = $("#top-bar .theme-sub-nav"), 1 !== $("#view-main").length) {
                var e = this;
                "undefined" != typeof pageData && (e.dataStroage = pageData.list), e.viewer = null, e.$subBar = $("#sub-bar"), e.$tagWrap = e.$subBar.find(".theme-tags-item"), e.$tag = e.$tagWrap.find("a"), e.$tagFirst = e.$tagWrap.find("li:first").find("a"), e.$tagLast = e.$tagWrap.find("li:last").find("a"), e.$tagNext = e.$subBar.find(".next"), e.$tagPrev = e.$subBar.find(".prev"), e.tagItemW = 0, e.tagW = 0, e.tagL = 0, e.tagCenterL = 0, e.$btn = $(".theme-main").find(".btn-group"), e.$picListDetail = $("#pic-list-detail"), a.set(), "undefined" != typeof pageData && $("#page").html(pageData.pageShow), e.showThemeBtn(), $(".bottom-bar").click(function (t) {
                    $("#no-c").hasClass("icon-c-d") ? $(".bottom-bar").stop().animate({height: "43px"}, function () {
                        $("#no-c").removeClass("icon-c-d").attr("title", "展开")
                    }) : (e.bottomH = e.bottomH ? e.bottomH : $(".bottom-bar .theme-interest").outerHeight(), $(".bottom-bar").stop().animate({
                        height: e.bottomH
                    }, function () {
                        $("#no-c").addClass("icon-c-d").attr("title", "收缩")
                    })), t.stopPropagation()
                }), $(document).click(function () {
                    $(".bottom-bar").stop().animate({height: "43px"}, function () {
                        $("#no-c").removeClass("icon-c-d").attr("title", "展开")
                    })
                }), $(e).find(".bottom-bar").trigger("mouseenter"), e.$btn.mouseover(function () {
                    $(this).show()
                }), $(".js-mscroll").mCustomScrollbar({theme: "dark"});
                var i = $(window);
                if (e.$tagWrap.size()) {
                    var n = null;
                    i.resize(function () {
                        n && clearTimeout(n), n = setTimeout(function () {
                            e.setTagViewWidth()
                        }, 200)
                    }), e.setTagViewWidth()
                }
                e.$tagWrap.find(".cur").length && e.tagMove(), window.sessionStorage.recommendPicUrl && (e.getRecommendData(), i.on("scroll", null, function () {
                    e.scrollFn()
                })), e.$picListDetail.size() && (this.picIndex = 15, i.on("scroll", null, function () {
                    e.scrollFn()
                })), e.tabFn({hd: $("#tab-hd"), bd: $("#tab-bd"), type: "click"}), $("#tab-bd").click(function (t) {
                    t.stopPropagation()
                }), window.sessionStorage.relatedThemeUrl && $.get(window.sessionStorage.relatedThemeUrl, function (t) {
                    e.setRelatedTheme(t)
                }), window.sessionStorage.packUrl && $.get(window.sessionStorage.packUrl), e.asynLoader = DX_CONST.loader.add({
                    view: e,
                    deff: 1
                }), "undefined" != typeof extraPicData && extraPicData.list.length > 1 && e.setExtra(extraPicData.list), $("body").on("click", ".js-fav", function (t) {
                    t = t || window.event, e.collect(t)
                }), $("body").on("click", ".js-down", function (t) {
                    t = t || window.event, e.downPic(t)
                }), this.setScreenWidth(), setTimeout(function () {
                    i.trigger("scroll")
                }, 200), $(".theme-layout li").each(function (t) {
                    (t + 1) % 5 == 0 && $(this).find(".recommend-inner").css("border", 0)
                });
                var s = this.$("#qg-t-fixed"), o = s.height(), r = null, l = "";
                s.length && i.on("scroll", function () {
                    clearTimeout(r), r = setTimeout(function () {
                        s.parent().offset().top - i.scrollTop() < 0 ? s.parent().css("height", o).end().addClass("mk-fixed-h") : s.parent().css("height", "auto").end().removeClass("mk-fixed-h")
                    }, 40)
                }).trigger("scroll").on("resize", function () {
                    clearTimeout(l), $(".theme-layout li").each(function (t) {
                        t % 5 == 0 && $(this).find(".recommend-inner").css("border", 0)
                    }), l = setTimeout(function () {
                        autoHeightList("resize"), e.showThemeBtn()
                    }, 150)
                })
            }
        },
        tagWheel: function (t) {
            var e = 0;
            t = t || window.event, e = t.wheelDelta ? t.wheelDelta / 12e3 : -t.detail / 200, e > 0 ? this.tagPrev() : this.tagNext(), t.preventDefault()
        },
        showSubNav: function () {
            this.$subNav.show()
        },
        hideSubNav: function () {
            this.$subNav.hide()
        },
        stopShowSubNav: function (t) {
            this.$subNav.hide(), t.stopPropagation()
        },
        setViewPic: function (t) {
            var i = this, a = $(t.currentTarget), n = a.index("#theme-main img");
            a.hasClass("extra-img") ? (n = a.index("#extra-list img"), i.viewer ? (i.viewer.dataStroage = extraPicData.list, i.viewer.show(n)) : (i.viewer = new e, i.viewer.dataStroage = extraPicData.list, i.viewer.show(n))) : i.viewer ? (i.viewer.dataStroage = i.dataStroage, i.viewer.show(n)) : (i.viewer = new e, i.viewer.dataStroage = i.dataStroage, i.viewer.show(n))
        },
        showBtn: function (t) {
            var e = $(t.currentTarget), i = e.offset().left, a = e.offset().top, n = e.width(), s = e.data("id"),
                o = e.data("index"), r = -1;
            void 0 === o && (o = $(".theme-main img").index(e)), void 0 === s && (s = pageData.list[o].id), s && (e.hasClass("montage-image-content") ? (r = montageData.list[o].is_fav, this.$btn.find(".btn-down").attr("data-ori", "m"), this.$btn.find(".btn-fav").attr("data-ori", "m")) : e.hasClass("recommend-img") ? (r = window.recommendData[window.arrIndex].picList[o].is_fav, this.$btn.find(".btn-down").attr("data-ori", "r"), this.$btn.find(".btn-fav").attr("data-ori", "r")) : e.hasClass("extra-img") ? (r = extraPicData.list[o].is_fav, this.$btn.find(".btn-down").attr("data-ori", "e"), this.$btn.find(".btn-fav").attr("data-ori", "e")) : (r = pageData.list[o].is_fav, this.$btn.find(".btn-down").removeAttr("data-ori"), this.$btn.find(".btn-fav").removeAttr("data-ori")), r ? this.$btn.find(".btn-fav i").removeClass("icon-fav").addClass("icon-faved") : this.$btn.find(".btn-fav i").removeClass("icon-faved").addClass("icon-fav"), i = i + n - 88, a += 15, this.$btn.find(".btn-fav").attr("data-id", s).attr("data-index", o), this.$btn.find(".btn-down").attr("data-index", o), this.$btn.css({
                left: i,
                top: a
            }).show())
        },
        hideBtn: function () {
            this.$btn.hide()
        },
        setTagViewWidth: function () {
            var t = this, e = t.$subBar.find(".left").outerWidth(), i = t.$subBar.find(".right-btn").outerWidth() + 20;
            t.tagW = $(window).width() - e - i - 104, t.$subBar.find(".theme-tags-wrap").width(t.tagW), t.$subBar.find(".theme-tags").show(), t.tagItemW = t.$tagWrap.width(), t.tagL = t.$subBar.find(".theme-tags-wrap").offset().left, t.tagCenterL = t.tagL + t.tagW / 2, t.tagItemW > t.tagW ? (t.$subBar.find(".next").show(), t.$subBar.find(".theme-tags").get(0).onmousewheel = function () {
                t.tagWheel(event)
            }, document.addEventListener && t.$subBar.find(".theme-tags").get(0).addEventListener("DOMMouseScroll", function (e) {
                t.tagWheel(e)
            })) : (t.$subBar.find(".theme-tags").get(0).onmousewheel = null, document.removeEventListener && t.$subBar.find(".theme-tags").get(0).removeEventListener("DOMMouseScroll", function (e) {
                t.tagWheel(e)
            }), t.$subBar.find(".icon-tags").hide()), t.$tagWrap.css({left: 0})
        },
        tagMove: function () {
            var t = this, e = $(".theme-tags-item .cur"), i = e.offset().left + e.outerWidth() / 2,
                a = t.tagCenterL - i, n = parseInt(t.$tagWrap.css("left")) + a;
            t.tagItemW < t.tagW || (t.$tagPrev.show(), t.$tagNext.show(), n > 0 ? (t.$tagWrap.stop().css({left: 0}), t.$tagPrev.hide()) : n < t.tagW - t.tagItemW ? (t.$tagWrap.stop().css({left: t.tagW - t.tagItemW}), t.$tagNext.hide()) : t.$tagWrap.stop().css({left: "+=" + a}))
        },
        tagNext: function () {
            var t = this, e = parseInt(t.$tagWrap.css("left")) - t.tagW;
            t.$tagPrev.show(), e < t.tagW - t.tagItemW ? (t.$tagWrap.stop().animate({left: t.tagW - t.tagItemW}), t.$tagNext.hide()) : t.$tagWrap.stop().animate({left: "-=" + t.tagW})
        },
        tagPrev: function () {
            var t = this, e = parseInt(t.$tagWrap.css("left")) + t.tagW;
            t.$tagNext.show(), e > 0 ? (t.$tagWrap.stop().animate({left: 0}), t.$tagPrev.hide()) : t.$tagWrap.stop().animate({left: "+=" + t.tagW})
        },
        setMontagePic: function (t) {
            var i = this, a = $(t.target).data("index");
            i.montageStroage || "undefined" == typeof montageData || (i.montageStroage = montageData.list), i.viewer ? (i.viewer.dataStroage = i.montageStroage, i.viewer.show(a)) : (i.viewer = new e, i.viewer.dataStroage = i.montageStroage, i.viewer.show(a))
        },
        downPic: function (t) {
            var e = $(t.currentTarget), i = "", a = "";
            void 0 !== e.attr("data-index") && (i = e.attr("data-index")), "m" == e.attr("data-ori") ? montageData.list[i].is_right.isRightD && (a = montageData.list[i].downUrl) : "r" == e.attr("data-ori") ? window.recommendData[window.arrIndex].picList[i].is_right.isRightD && (a = window.recommendData[window.arrIndex].picList[i].downUrl) : "e" == e.attr("data-ori") ? extraPicData.list[i].is_right.isRightD && (a = extraPicData.list[i].downUrl) : pageData.list[i].is_right.isRightD && (a = pageData.list[i].downUrl), "" !== a ? window.location.href = a : layer.msg("您的帐号没有权限下载该图片，请升级帐号权限!", {icon: 0})
        },
        getRecommendData: function () {
            var t = this;
            $.get(window.sessionStorage.recommendPicUrl, function (e) {
                e.length && t.setRecommend(e)
            })
        },
        setRecommend: function (t) {
            for (var e = "", i = "", a = 0; a < t.length; a++)e += 0 == a ? '<li><span data-index="' + a + '" class="montage-bar-item cur">' + t[a].name + "</span></li>" : '<li><span data-index="' + a + '" class="montage-bar-item">' + t[a].name + "</span></li>";
            $("#recommend").html(e).show();
            for (var n = t[0].picList.length, s = n >= 15 ? 15 : n, o = 0; o < s; o++)i += '<li><div class="recommend-inner"><img class="recommend-img" data-id="' + t[0].picList[o].id + '" data-index="' + o + '" src="' + t[0].picList[o].min_picture + '" onerror="imgError(this)"><span class="fn-alpha-img"></span></div></li>';
            $("#recommend-list").html(i).show(), n > 15 && $("#loading").show(), window.arrIndex = 0, this.index = s, window.recommendData = t
        },
        setRecommendPic: function (t) {
            var i = this, a = $(t.currentTarget), n = a.index("#recommend-list img");
            i.viewer ? (i.viewer.dataStroage = window.recommendData[window.arrIndex].picList, i.viewer.show(n)) : (i.viewer = new e, i.viewer.dataStroage = window.recommendData[window.arrIndex].picList, i.viewer.show(n))
        },
        setExtra: function (t) {
            for (var e = "", i = 0; i < t.length; i++)e += '<li><img class="extra-img" data-id="' + t[i].id + '" data-index="' + i + '" src="' + t[i].min_picture + '" onerror="imgError(this)"></li>';
            $("#extra-list").html(e), this.asynLoader.attach({type: "img", node: document.getElementById("extra-list")})
        },
        scrollFn: function () {
            var t = document.getElementById("loading");
            t && this.isVisible(t) && (this.$picListDetail.size() && pageData.list.length > 15 ? this.appendPicList() : this.appendHtml())
        },
        appendHtml: function () {
            var t = "", e = window.recommendData[window.arrIndex].picList.length;
            if (this.index + 15 >= e) {
                for (var i = this.index; i < e; i++)t += '<li><div class="recommend-inner"><img class="recommend-img" data-id="' + window.recommendData[window.arrIndex].picList[i].id + '" data-index="' + i + '" src="' + window.recommendData[window.arrIndex].picList[i].min_picture + '" onerror="imgError(this)"><span class="fn-alpha-img"></span></div></li>';
                this.index = e, $("#recommend-list").append(t), $("#loading").hide()
            } else {
                for (var i = this.index; i < this.index + 15; i++)t += '<li><div class="recommend-inner"><img class="recommend-img" data-id="' + window.recommendData[window.arrIndex].picList[i].id + '" data-index="' + i + '" src="' + window.recommendData[window.arrIndex].picList[i].min_picture + '" onerror="imgError(this)"><span class="fn-alpha-img"></span></div></li>';
                this.index = this.index + 15, $("#recommend-list").append(t)
            }
            this.asynLoader.attach({type: "img", node: document.getElementById("recommend-list")})
        },
        tabRecommend: function (t) {
            var e = $(t.currentTarget);
            if (!e.find("span").hasClass("cur")) {
                var i = "";
                window.arrIndex = e.find("span").data("index"), e.find("span").addClass("cur"), e.siblings().find("span").removeClass("cur");
                for (var a = window.recommendData[window.arrIndex].picList.length, n = a >= 15 ? 15 : a, s = 0; s < n; s++)i += '<li><div class="recommend-inner"><img class="recommend-img" data-id="' + window.recommendData[window.arrIndex].picList[s].id + '" data-index="' + s + '" src="' + window.recommendData[window.arrIndex].picList[s].min_picture + '" onerror="imgError(this)"><span class="fn-alpha-img"></span></div></li>';
                $("#recommend-list").html(i).show(), this.asynLoader.attach({
                    type: "img",
                    node: document.getElementById("recommend-list")
                }), a > 15 && $("#loading").show(), this.index = n
            }
        },
        appendPicList: function () {
            var t = "", e = pageData.list.length, i = '<i class="new"></i>';
            if (this.picIndex + 15 >= e || 30 == this.picIndex) {
                for (var a = this.picIndex; a < e; a++)pageData.list[a].is_tip || (i = ""), "1" === showBrand && pageData.list[a].attr && pageData.list[a].attr.brand ? t += "<li>" + i + '<div class="recommend-inner"><img data-id="' + pageData.list[a].id + '" data-index="' + a + '" src="' + pageData.list[a].min_picture + '" onerror="imgError(this)"><span class="fn-alpha-img"></span><p class="overflow-hide recommend-hide-text">' + pageData.list[a].attr.brand + "</p></div></li>" : pageData.list[a].description ? t += "<li>" + i + '<div class="recommend-inner"><img data-id="' + pageData.list[a].id + '" data-index="' + a + '" src="' + pageData.list[a].min_picture + '" onerror="imgError(this)"><span class="fn-alpha-img"></span><p class="overflow-hide recommend-hide-text">' + pageData.list[a].description + "</p></div></li>" : t += "<li>" + i + '<div class="recommend-inner"><img data-id="' + pageData.list[a].id + '" data-index="' + a + '" src="' + pageData.list[a].min_picture + '" onerror="imgError(this)"><span class="fn-alpha-img"></span></div></li>';
                this.picIndex = e, this.$picListDetail.append(t), this.asynLoader.attach({
                    type: "img",
                    node: document.getElementById("pic-list-detail")
                }), $("#loading").hide(), pageData.totalPages && pageData.totalPages > 1 && $("#page").html(pageData.pageShow)
            } else {
                for (var a = this.picIndex; a < this.picIndex + 15; a++)pageData.list[a].is_tip || (i = ""), "1" === showBrand && pageData.list[a].attr && pageData.list[a].attr.brand ? t += "<li>" + i + '<div class="recommend-inner"><img data-id="' + pageData.list[a].id + '" data-index="' + a + '" src="' + pageData.list[a].min_picture + '" onerror="imgError(this)"><span class="fn-alpha-img"></span><p class="overflow-hide recommend-hide-text">' + pageData.list[a].attr.brand + "</p></div></li>" : pageData.list[a].description ? t += "<li>" + i + '<div class="recommend-inner"><img data-id="' + pageData.list[a].id + '" data-index="' + a + '" src="' + pageData.list[a].min_picture + '" onerror="imgError(this)"><span class="fn-alpha-img"></span><p class="overflow-hide recommend-hide-text">' + pageData.list[a].description + "</p></div></li>" : t += "<li>" + i + '<div class="recommend-inner"><img data-id="' + pageData.list[a].id + '" data-index="' + a + '" src="' + pageData.list[a].min_picture + '" onerror="imgError(this)"><span class="fn-alpha-img"></span></div></li>';
                this.picIndex = this.picIndex + 15, this.$picListDetail.append(t), this.asynLoader.attach({
                    type: "img",
                    node: document.getElementById("pic-list-detail")
                })
            }
        },
        setRelatedTheme: function (t) {
            for (var e = "", i = 0; i < t.length; i++) {
                var a = $('<ul class="theme-interest-item fn-clear"></ul>'), n = "";
                0 == i ? e += '<li class="cur"><a>' + t[i].name + '<i class="dot"></i></a></li>' : (e += "<li><a>" + t[i].name + '<i class="dot"></i></a></li>', a.addClass("fn-hide"));
                for (var s = 0; s < t[i].list.length; s++) {
                    var o = t[i].list[s].season ? t[i].list[s].season : " ",
                        r = t[i].list[s].tag ? t[i].list[s].tag : " ";
                    n += '<li><a href="' + t[i].list[s].url + '"><img src="' + t[i].list[s].title_picture + '" onerror="imgError(this)"><div class="pic-info"><div class="info-inner"><p>' + o + '</p><p class="title">' + t[i].list[s].title + "</p><p>" + r + '</p></div><span class="fn-alpha-img"></span></div></a></li>'
                }
                a.html(n), $("#tab-bd").find(".word-loading").remove(), $("#tab-bd").append(a)
            }
            $("#tab-hd").html(e), a.children().length > 0 && $(".bottom-bar").show()
        },
        download: function (t) {
            if ($(t.currentTarget).hasClass("no-power"))return layer.msg("您的帐号没有权限下载该主题，请升级帐号权限!", {icon: 0}), !1
        },
        showThemeBtn: function () {
            var t = this.$subBar.find(".theme-tags-item .cur"), e = t.parent().next().find("a").attr("href"),
                i = t.parent().prev().find("a").attr("href"), a = $("#page-next").attr("href"),
                n = $("#page-prev").attr("href"),
                s = $("#theme-main").find(".editor-wrap").width() || $("#theme-main").width();
            a ? $("#theme-main").find(".theme-next").attr("href", a).css("margin-left", s / 2).show() : e && $("#theme-main").find(".theme-next").attr("href", e).css("margin-left", s / 2).show(), n ? $("#theme-main").find(".theme-prev").attr("href", n).css("margin-left", "-" + (s / 2 + 80) + "px").show() : i && $("#theme-main").find(".theme-prev").attr("href", i).css("margin-left", "-" + (s / 2 + 80) + "px").show();
            var o = $("#montage-theme-content");
            if (o.length > 0) {
                var s = o.find(".montage-image-block").width(), r = $(".tab-list").find(".cur"),
                    l = r.next().find("a").attr("href"), d = r.prev().find("a").attr("href");
                l && o.find(".theme-next").attr("href", l).css("margin-left", s / 2).show(), d && o.find(".theme-prev").attr("href", d).css("margin-left", "-" + (s / 2 + 40) + "px").show()
            }
        },
        noInterest: function () {
            var t = new Date;
            t.setHours(0), t.setMinutes(0), t.setSeconds(0), t.setMilliseconds(0);
            var e = t.getTime() + 864e5;
            t.setTime(e), this.setCookie("nc", !0, t, "/"), $(".bottom-bar").hide()
        }
    })
}), define("book", ["mCustomScrollbar", "viewPic", "sidebar", "public"], function (t, e, i, a) {
    return a.init({
        el: "body",
        name: "book",
        template: "",
        dataStroage: [],
        onAjax: !1,
        events: {
            "mouseover #view-main img": "showBtn",
            "mouseout #view-main img": "hideBtn",
            "click #bottom-bar .season-next": "tagNext",
            "click #bottom-bar .season-prev": "tagPrev"
        },
        init: function (t) {
            if ("undefined" != typeof data_url) {
                var a = this;
                a.$mscroll = $(".js-mscroll"), a.$prev = $("#view-main .pic-prev"), a.$next = $("#view-main .pic-next"), a.$subNav = $("#top-bar .theme-sub-nav"), a.setViewSize(), a.mScroll(), a.bookIndex = 0, a.screen = 1, a.dataLen = 0, a.lastObj = null, a.$prev.click(function (t) {
                    a.prev(a.bookIndex)
                }), a.$next.click(function (t) {
                    a.next(a.bookIndex)
                }), $(window).keydown(function (t) {
                    37 == t.keyCode ? a.prev(a.bookIndex) : 39 == t.keyCode && a.next(a.bookIndex)
                }), a.totalScreen = 0, a.getData(data_url, function () {
                    console.log(data_url), a.show(0), a.screen >= a.totalScreen || a.getData(data_url)
                }), $("#btn-group").mouseover(function () {
                    $(this).show()
                }), $("#btn-group").find(".js-fav").click(function (t) {
                    t = t || window.event, a.collect(t, a.dataStroage)
                }), $("#top-bar").find(".js-fav").click(function (t) {
                    t = t || window.event, a.collect(t)
                }), $("body").on("click", ".js-down", function (t) {
                    t = t || window.event, a.downPic(t)
                }), i.set(), $("#top-bar .list-btn").click(function () {
                    "hidden" === a.$mscroll.css("visibility") ? (a.$mscroll.css("visibility", "visible"), $("#view-main").css("margin-right", "220px"), $(this).find(".triangle").show()) : (a.$mscroll.css("visibility", "hidden"), $("#view-main").css("margin-right", 0), $(this).find(".triangle").hide())
                }), a.$mscroll.on("click", "a", function () {
                    a.show(2 * $(this).parent().index()), a.$mscroll.find("a").removeClass("active"), $(this).addClass("active")
                }), $(document).on("click", ".showImg", function () {
                    if ("undefined" != typeof is_login && "1" !== is_login)return this.openRegister(), !1;
                    if ("2" == powerStatus)return $.get("/public/dev/js/tooxiu/template/trial.html", function (t) {
                        layer.open({
                            skin: "dialog-tooxiu-con",
                            type: 1,
                            title: !1,
                            closeBtn: !0,
                            area: ["510px", "260px"],
                            content: t
                        })
                    }), !1;
                    var t = $(this).data("index");
                    a.viewer ? a.viewer.show(t) : (a.viewer = new e, a.viewer.dataStroage = a.dataStroage, a.viewer.callbacks = {
                        next: function (t) {
                            var e = a.dataLen % 2 == 0 ? a.dataLen - 2 : a.dataLen - 1;
                            t % 2 == 0 && t <= e && (a.show(t), a.$mscroll.find("a").removeClass("active"), a.$mscroll.find("li").eq(t / 2).find("a").addClass("active"), a.$mscroll.mCustomScrollbar("scrollTo", a.$mscroll.find(".active")))
                        }, prev: function (t) {
                            t % 2 != 0 && t >= 0 && (a.show(t - 1), a.$mscroll.find("a").removeClass("active"), a.$mscroll.find("li").eq((t - 1) / 2).find("a").addClass("active"), a.$mscroll.mCustomScrollbar("scrollTo", a.$mscroll.find(".active")))
                        }
                    }, a.viewer.show(t))
                });
                var n = null;
                $(window).resize(function () {
                    n && clearTimeout(n), n = setTimeout(function () {
                        a.setViewSize(), a.setTagViewWidth()
                    }, 200)
                }), a.setTagViewWidth(), a.$tagWrap.find(".cur").length && a.tagMove();
                var s = null;
                $("#view-main").get(0).onmousewheel = function (t) {
                    var e = 0;
                    t = t || window.event, e = t.wheelDelta ? t.wheelDelta / 12e3 : -t.detail / 200, s && clearTimeout(s), s = setTimeout(function () {
                        a.bookSwitch(e)
                    }, 200), t && t.stopPropagation ? t.stopPropagation() : t.cancelBubble = !0
                }, document.addEventListener && $("#view-main").get(0).addEventListener("DOMMouseScroll", function (t) {
                    var e = 0;
                    t = t || window.event, e = t.wheelDelta ? t.wheelDelta / 12e3 : -t.detail / 200, s && clearTimeout(s), s = setTimeout(function () {
                        a.bookSwitch(e)
                    }, 200), t && t.stopPropagation ? t.stopPropagation() : t.cancelBubble = !0
                }), this.setScreenWidth()
            }
        },
        getData: function (t, e) {
            var i = this;
            i.onAjax = !0, $("#loading").show(), t += "?screen=" + i.screen, $.ajax({
                type: "get",
                url: t,
                dataType: "json",
                success: function (t) {
                    if (i.totalScreen = t.totalScreen, 1 === i.screen) {
                        var a = {
                            vip_picture: "/public/images/tooxiu/public/transparent1x1.png",
                            min_picture: "/public/images/tooxiu/public/transparent1x1.png"
                        };
                        t.list.unshift(a)
                    } else t.list.unshift(i.lastObj), i.lastObj = null;
                    i.screen < i.totalScreen && (i.lastObj = t.list.pop()), i.screen++, i.setThumb(t.list);
                    for (var n = 0, s = t.list.length; n < s; n++)i.dataStroage.push(t.list[n]);
                    i.onAjax = !1, i.dataLen = i.dataStroage.length, $("#loading").hide(), e && e.call()
                }
            })
        },
        mScroll: function () {
            var t = this;
            t.$mscroll.mCustomScrollbar({
                theme: "dark",
                scrollInertia: 0,
                mouseWheelPixels: 80,
                callbacks: {
                    onTotalScroll: function () {
                        t.onScrollAppend.call(t)
                    }, onTotalScrollOffset: 40
                }
            })
        },
        next: function (t) {
            var e = this, i = e.dataLen % 2 == 0 ? e.dataLen - 2 : e.dataLen - 1;
            (t += 2) <= i && (e.show(t), e.$mscroll.find("a").removeClass("active"), e.$mscroll.find("li").eq(t / 2).find("a").addClass("active"), e.$mscroll.mCustomScrollbar("scrollTo", e.$mscroll.find(".active")))
        },
        prev: function (t) {
            var e = this;
            (t -= 2) >= 0 && (e.show(t), e.$mscroll.find("a").removeClass("active"), e.$mscroll.find("li").eq(t / 2).find("a").addClass("active"), e.$mscroll.mCustomScrollbar("scrollTo", e.$mscroll.find(".active")))
        },
        bookSwitch: function (t) {
            t > 0 ? this.prev(this.bookIndex) : this.next(this.bookIndex)
        },
        setViewSize: function () {
            var t = $("#top-bar").height(), e = $("#bottom-bar").height(), i = $(window).height() - t - e - 40;
            this.$mscroll.height(i), $("#view-main").height(i)
        },
        setThumb: function (t) {
            for (var e = [], i = "", a = "", n = -1, s = 0, o = t.length; s < o; s++)i += s % 2 == 0 ? t[s].min_picture + "," : t[s].min_picture + "|";
            e = i.split("|"), t.length % 2 == 0 && (e.length = e.length - 1);
            for (var r = 0, l = e.length; r < l; r++)n = e[r].indexOf(","), 0 !== r || this.$mscroll.find(".active").length ? e[r].substring(n + 1).length ? a += '<li><a href="javascript:;"><img width="75" height="106" src="' + e[r].substring(0, n) + '"><img width="75" height="106" src="' + e[r].substring(n + 1) + '" onerror="imgError(this)"></a></li>' : a += '<li><a href="javascript:;"><img width="75" height="106" src="' + e[r].substring(0, n) + '" onerror="imgError(this)"><span class="placeholder"></span></a></li>' : a += '<li><a class="active" href="javascript:;"><img width="75" height="106" src="' + e[r].substring(0, n) + '"><img width="75" height="106" src="' + e[r].substring(n + 1) + '" onerror="imgError(this)"></a></li>';
            this.$mscroll.find("ul").append(a)
        },
        show: function (t) {
            var e = this;
            $("#view-main .book-left").html('<img class="showImg" data-id="' + e.dataStroage[t].id + '" data-index="' + t + '" src="' + e.dataStroage[t].vip_picture + '" onerror="imgError(this)"><span class="fn-alpha-img"></span>'), t + 1 < e.dataStroage.length ? $("#view-main .book-right").html('<img class="showImg" data-id="' + e.dataStroage[t + 1].id + '" data-index="' + (t + 1) + '" src="' + e.dataStroage[t + 1].vip_picture + '" onerror="imgError(this)"><span class="fn-alpha-img"></span>') : $("#view-main .book-right").html('<img><span class="fn-alpha-img"></span>'), e.bookIndex = t, this.btnStatus(t)
        },
        btnStatus: function (t) {
            var e = this;
            e.$prev.show(), e.$next.show(), 0 === t && e.$prev.hide(), t >= e.dataStroage.length - 2 && e.$next.hide()
        },
        onScrollAppend: function () {
            var t = this;
            !this.onAjax && this.screen <= this.totalScreen && this.getData(data_url, function () {
                t.btnStatus(t.bookIndex)
            })
        },
        showBtn: function (t) {
            var e = $(t.currentTarget), i = e.offset().left, a = e.offset().top, n = e.width(), s = e.data("id"),
                o = e.data("index"), r = -1;
            r = this.dataStroage[o].is_fav, r ? $("#btn-group").find(".btn-fav i").removeClass("icon-fav").addClass("icon-faved") : $("#btn-group").find(".btn-fav i").removeClass("icon-faved").addClass("icon-fav"), i = i + n - 88, a += 15, $("#btn-group").find(".btn-fav").attr("data-id", s).attr("data-index", o), $("#btn-group").find(".btn-down").attr("data-index", o), $("#btn-group").css({
                left: i,
                top: a
            }).show()
        },
        hideBtn: function () {
            $("#btn-group").hide()
        },
        downPic: function (t) {
            var e = $(t.currentTarget), i = "", a = "";
            void 0 !== e.attr("data-index") && (i = e.attr("data-index")), a = this.dataStroage[i].downUrl, window.location.href = a
        },
        tagMove: function () {
            var t = this, e = $("#bottom-bar .cur"), i = e.offset().left + e.outerWidth() / 2, a = t.tagCenterL - i,
                n = parseInt(t.$tagWrap.css("left")) + a;
            t.tagItemW < t.tagW || ($("#bottom-bar").find(".season-prev").css("visibility", "visible"), $("#bottom-bar").find(".season-next").css("visibility", "visible"), n > 0 ? (t.$tagWrap.stop().css({left: 0}), $("#bottom-bar").find(".season-prev").css("visibility", "hidden")) : n < t.tagW - t.tagItemW ? (t.$tagWrap.stop().css({left: t.tagW - t.tagItemW}), $("#bottom-bar").find(".season-next").css("visibility", "hidden")) : t.$tagWrap.stop().css({left: "+=" + a}))
        },
        setTagViewWidth: function () {
            var t = this, e = $("#bottom-bar").find(".book-season-btn").outerWidth(),
                i = $("#bottom-bar").find(".home-wrap").outerWidth();
            t.tagW = $(window).width() - 2 * e - i - 47, t.tagL = $("#bottom-bar").find(".book-season-wrap").offset().left, t.tagCenterL = t.tagL + t.tagW / 2, t.$tagWrap = $("#bottom-bar").find(".book-season"), $("#bottom-bar").find(".book-season-wrap").width(t.tagW).show(), t.tagItemW = t.$tagWrap.width(), t.tagItemW > t.tagW ? ($("#bottom-bar").find(".season-next").css("visibility", "visible"), $("#bottom-bar").find(".book-season-wrap").get(0).onmousewheel = function () {
                t.tagWheel(event)
            }, document.addEventListener && $("#bottom-bar").find(".book-season-wrap").get(0).addEventListener("DOMMouseScroll", function (e) {
                t.tagWheel(e)
            })) : ($("#bottom-bar").find(".book-season-wrap").get(0).onmousewheel = null, document.removeEventListener && $("#bottom-bar").find(".book-season-wrap").get(0).removeEventListener("DOMMouseScroll", function (e) {
                t.tagWheel(e)
            }), $("#bottom-bar").find(".book-season-btn").css("visibility", "hidden"))
        },
        tagWheel: function (t) {
            var e = 0;
            t = t || window.event, e = t.wheelDelta ? t.wheelDelta / 12e3 : -t.detail / 200, e > 0 ? this.tagPrev() : this.tagNext(), t.preventDefault()
        },
        tagNext: function () {
            var t = this, e = parseInt(t.$tagWrap.css("left")) - t.tagW;
            $("#bottom-bar").find(".season-prev").css("visibility", "visible"), e < t.tagW - t.tagItemW ? (t.$tagWrap.stop().animate({left: t.tagW - t.tagItemW}), $("#bottom-bar").find(".season-next").css("visibility", "hidden")) : t.$tagWrap.stop().animate({left: "-=" + t.tagW})
        },
        tagPrev: function () {
            var t = this, e = parseInt(t.$tagWrap.css("left")) + t.tagW;
            $("#bottom-bar").find(".season-next").css("visibility", "visible"), e > 0 ? (t.$tagWrap.stop().animate({left: 0}), $("#bottom-bar").find(".season-prev").css("visibility", "hidden")) : t.$tagWrap.stop().animate({left: "+=" + t.tagW})
        }
    })
});