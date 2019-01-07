!function () {
    require.config({
        deps: ["index", "header", "footer"],
        paths: {
            gallery: DX_CONST.config.Host + "js/lib/gallery/jquery.gallery",
            sidebar: DX_CONST.config.Host + "js/tooxiu/common/sidebar",
            "public": DX_CONST.config.Host + "js/tooxiu/common/public",
            index: DX_CONST.config.Host + "js/tooxiu/home/index",
            modDatas: DX_CONST.config.Host + "js/tooxiu/userCenter/modDatas",
            nowUpdate: DX_CONST.config.Host + "js/tooxiu/home/nowUpdate"
        },
        waitSeconds: 30
    });
    var t = window.sessionStorage.Target.split(",");
    define("homemain.js", [t[1] || "index"], function (t) {
        return t
    })
}(), define("public", [], function () {
    return DX_CONST.modules.extend({
        events: {"click .add-subscription-btn": "addSubscription"},
        addHeadStyle: function (t, e, a) {
            var n = 0, i = function () {
                var e = $("#" + t);
                return e.length ? e : function () {
                    n = 1;
                    var e = document.createElement("style");
                    return e.id = t, e.type = "text/css", $(e)
                }()
            }();
            (i[0].styleSheet ? 1 : 0) ? a ? i[0].styleSheet.cssText += e : i[0].styleSheet.cssText = e : a ? i[0].innerHTML += e : i[0].innerHTML = e, n && document.getElementsByTagName("head")[0].appendChild(i[0])
        },
        goPage: function (t) {
            function e(t) {
                t = t || window.event, 13 === (t.keyCode || t.which || t.charCode) && a.siblings(".go-btnPage").trigger("click")
            }

            var a = $(t.currentTarget), n = a.next();
            n.off("keyup", null, e), n.on("keyup", null, e), a.hide().siblings().show()
        },
        calculateListheight: function () {
            var t = null, e = $(".ns-pic-ul-wrap-list"), a = e.find(".ns-list-item"), n = function () {
                var t = Math.round(e.width() / (a.width() || 1)) - 1;
                if ((e.length || a.length) && -1 !== t) {
                    a.find(".borderRight-ms").removeClass("borderRight-ms");
                    for (var n = t; n < a.size(); n += t + 1)a.eq(n).find(".ns-list-item-inner").addClass("borderRight-ms")
                }
            };
            e.width() && a.width() && (n(), $(window).on("resize", function () {
                clearTimeout(t), t = setTimeout(function () {
                    autoHeightList("resize"), n()
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
            var e = $(t.currentTarget), a = e.width(), n = e.height(),
                i = (t.pageX - e.offset().left - a / 2) * (a > n ? n / a : 1),
                s = (t.pageY - e.offset().top - n / 2) * (n > a ? a / n : 1),
                r = Math.round((Math.atan2(s, i) * (180 / Math.PI) + 180) / 90 + 3) % 4;
            if ("mouseenter" === t.type) {
                switch (r) {
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
            } else switch (r) {
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
            var a = $(t.currentTarget), n = a.attr("data-type") ? a.attr("data-type") : "1", i = "", s = -1;
            if (void 0 !== a.attr("data-id") && (i = a.attr("data-id")), void 0 !== a.attr("data-index") && (s = parseInt(a.attr("data-index"))), a.find("i").hasClass("icon-faved")) {
                var r = "";
                switch (n) {
                    case"1":
                    case"2":
                        r = "您已收藏过该主题";
                        break;
                    case"2":
                    case"3":
                        r = "您已收藏过该图片"
                }
                layer.msg(r, {icon: 0})
            } else $.get(window.sessionStorage.favorites, {id: i, type: n}, function (t) {
                1 == t.status ? (layer.msg(t.info, {icon: 1}), a.find("i").removeClass("icon-fav").addClass("icon-faved"), -1 !== s && ("m" == a.attr("data-ori") ? montageData.list[s].is_fav = 1 : "r" == a.attr("data-ori") ? window.recommendData[window.arrIndex].picList[s].is_fav = 1 : "b" == a.attr("data-ori") ? e[s].is_fav = 1 : "e" == a.attr("data-ori") ? extraPicData.list[s].is_fav = 1 : pageData.list[s].is_fav = 1)) : layer.msg(t.info, {icon: 0})
            })
        },
        isVisible: function (t) {
            var e = $(t);
            if (e.is(":hidden") || "hidden" == e.css("visibility"))return !1;
            var a = t.getBoundingClientRect();
            return a.top >= 0 && a.top < $(window).height() || a.top < 0 && a.height + a.top > 0
        },
        tabFn: function (t) {
            var e = t.hd, a = t.bd;
            "click" == t.type && e.on("click", "li", function () {
                return $(this).addClass("cur").siblings().removeClass("cur"), a.children().hide().eq($(this).index()).show(), !1
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
            var a = e.attr("data-type") ? e.attr("data-type") : "1";
            if (e.hasClass("no-power")) {
                var n = "";
                switch (a) {
                    case"1":
                    case"2":
                        n = "您的帐号没有权限下载该主题，请升级帐号权限!";
                        break;
                    case"3":
                        n = "您的帐号没有权限下载该图片，请升级帐号权限!"
                }
                return layer.msg(n, {icon: 0}), !1
            }
            layer.msg("系统正在处理，请稍候...", {icon: 0})
        },
        openRegister: function () {
            var t = this, e = null;
            $.get("/public/dev/js/tooxiu/template/register.html", function (a) {
                layer.open({
                    id: "js-login-window",
                    skin: "dialog-tooxiu-con",
                    type: 1,
                    title: "请先登录",
                    closeBtn: !0,
                    shadeClose: !0,
                    area: "590px",
                    content: a,
                    success: function (a, n) {
                        e = a, a.on("click", "#loginSubmit", function () {
                            t.checkLogin()
                        }).on("click", "#downClient", function () {
                            t.downClient()
                        }), $(document).on("keyup.js-layero-register", function (t) {
                            t = t || window.event, 13 === (t.keyCode || t.which || t.charCode) && a.find("#loginSubmit").trigger("click")
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
            var a = this, n = layer.load(2, {shade: [.4, "#fff"]}),
                i = {channel: t || window.sessionStorage.channel, column: e || window.sessionStorage.colmun};
            $.ajax({
                url: "/vipOrder/powerNotice", type: "get", data: i, success: function (t) {
                    layer.close(n), layer.open({
                        type: 1,
                        skin: "dialog-tooxiu-con",
                        title: !1,
                        closeBtn: !0,
                        area: "480px",
                        move: ".layer-title",
                        content: t
                    }), a.data.set("vipList", $.parseJSON(window.sessionStorage.VipList || "{}")), $(document).on("click", ".order-btn>span", function (t) {
                        t = t || window.event;
                        var e = a.operateOrder(t);
                        a.data.set("orderTotalInfo", e)
                    }), $(document).on("click", ".order-submit>a", function (t) {
                        t = t || window.event, a.orderSubmit(t)
                    }), $(document).on("click", ".orderMore p", function (t) {
                        t = t || window.event, a.addOrSubtract(t)
                    }), $(document).on("click", "#layer-im", function (t) {
                        a.showIm()
                    })
                }, error: function (t) {
                    layer.close(n)
                }
            })
        },
        checkLogin: function (t) {
            var e = this, a = $("#loginForm"), n = $("#username");
            if ("" == $.trim(n.val()))return layer.msg("请输入蝶讯通行证！", {icon: 0}), void n.focus();
            var i = $("#password");
            if ("" == $.trim(i.val()))return layer.msg("请输入登录密码！", {icon: 0}), void i.focus();
            var s = a.serialize();
            e.onCheck || (e.onCheck = !0, $.post(a.attr("action"), s, function (t) {
                1 == t.status ? a.submit() : layer.msg(t.des, {icon: 0}), e.onCheck = !1
            }, "json"))
        },
        getSearchData: function (t, e) {
            var a = $.trim(t.val), n = "", i = {};
            t.type ? (n = "/Search/dealSearchFilter/", i = {
                title: a,
                type: t.type
            }) : (n = "/Search/getSearchKeyword", i = {title: a}), $.ajax({
                url: n,
                data: i,
                dataType: "json",
                success: function (t) {
                    t = {searchList: t || []};
                    var a = [];
                    t.searchList && t.searchList.length > 0 && (a = t.searchList, e.call(null, a)), console.log("搜索成功")
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
                var a = $(t.currentTarget), n = this, i = a.val(), s = {val: i};
                if (a.attr("data-type") && (s.type = a.attr("data-type")), $.isEmpty($.trim(i))) a.siblings(".sug").empty().fadeOut("fast"), this.searchVal = ""; else {
                    if (i == this.searchVal)return;
                    n.getSearchData(s, function (t) {
                        var e = a.parent().attr("action") ? a.parent().attr("action") : a.parent().attr("data-url"),
                            n = "", s = t.length > 5 ? 5 : t.length, r = new RegExp(i, "ig");
                        if (a.attr("data-list") ? 1 : 0)for (var o = 0; o < s; o++) {
                            var l = t[o].title.replace(r, "<span class='search-keyword'>$&</span>");
                            n += '<li><a href="' + e + "?" + a.attr("data-type") + "=" + t[o].id + '">' + l + "</a></li>"
                        } else for (var o = 0; o < s; o++) {
                            var l = t[o].title.replace(r, "<span class='search-keyword'>$&</span>");
                            n += '<li><a href="' + e + "?q=" + t[o].title + '">' + l + "</a></li>"
                        }
                        a.siblings(".sug").html(n).stop().fadeIn("fast")
                    }), this.searchVal = i
                }
            }
        },
        searchFocus: function (t) {
            var e = $(t.currentTarget), a = this;
            e.siblings(".sug").children().length > 0 && e.siblings(".sug").stop().fadeIn("fast"), e.closest(".small-search").addClass("search-focus"), clearInterval(a.selectTimer), a.__keyUpSelectFn || (console.log("添加 __keyUpSelectFn"), a.__keyUpSelectFn = DX_CONST.common.bind(a, a.__keyUpSelect), $("body").on("keydown", null, a.__keyUpSelectFn))
        },
        searchBlur: function (t) {
            var e = $(t.currentTarget);
            e.siblings(".sug").stop().fadeOut("fast", function () {
                e.closest(".small-search").removeClass("search-focus")
            }), this.searchVal = "", clearInterval(this.searchTimer), console.log("删除 __keyUpSelectFn"), $("body").off("keydown", null, this.__keyUpSelectFn), this.__keyUpSelectFn = null
        },
        __keyUpSelect: function (t) {
            t = t || window.event;
            var e = t.keyCode || t.which || t.charCode, a = -1, n = $("body").find(".search-focus ul"),
                i = n.find("li"), s = n.find("li.cur");
            switch (e) {
                case 13:
                    s.length && ($.stopEventDefault(t), $.stopEventBubble(t), window.location.href = s.find("a").attr("href"));
                    break;
                case 40:
                    if (s.length && (a = s.eq(0).index()) !== i.length - 1) {
                        i.removeClass("cur").eq(++a).addClass("cur");
                        break
                    }
                    i.length && i.removeClass("cur").eq(0).addClass("cur");
                    break;
                case 38:
                    if (s.length && 0 !== (a = s.eq(0).index())) {
                        i.removeClass("cur").eq(--a).addClass("cur");
                        break
                    }
                    i.length && i.removeClass("cur").eq(i.length - 1).addClass("cur")
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
            var e = $(t.currentTarget), a = e.parent().attr("data-id"), n = parseInt(e.parent().attr("data-year")),
                i = e.parents(".orderMore"), s = this.data.get("vipList") || [], r = $.findWhere(s, {id: a}),
                o = this.data.get("orderTotalInfo") || {idList: [], orderTotal: 0}, l = $.findWhere(o.idList, {id: a});
            if (e.hasClass("del-btn")) {
                if (0 == n)return o;
                if (n -= 1, !$.isEmpty(l) && (l.year -= 1), o.orderTotal -= parseInt(r.viptype_money), 0 === n) {
                    i.removeClass("isValue");
                    for (var d = 0, c = o.idList.length; d < c; d++)if (o.idList[d].id === a) {
                        o.idList.splice(d, 1);
                        break
                    }
                }
            } else n += 1, $.isEmpty(l) ? o.idList.push({
                id: a,
                year: 1
            }) : l.year += 1, o.orderTotal += parseInt(r.viptype_money), i.addClass("isValue");
            return i.html($.template(this.vipHTML, {
                data: {
                    year: n,
                    viptype_name: r.viptype_name,
                    viptype_money: r.viptype_money * n || parseInt(r.viptype_money),
                    id: r.id
                }
            })), o
        },
        unqualified: function (t) {
            var e = $("#dialog-tip-temp").html(), a = t.msg;
            layer.open({
                content: $.template(e, {data: {title: a, cons: "您需要先补充完善资料后才能继续"}}) || "提交失败，请稍后再试",
                skin: "dialog-tooxiu-con",
                title: "创建订单",
                closeBtn: !0,
                area: ["365px"],
                btn: ["立即完善"],
                yes: function (t, e) {
                    layer.close(t), window.location.href = "/userCenter/accountManage"
                }
            })
        },
        orderSubmit: function (t) {
            var e = this.data.get("orderTotalInfo"), a = this;
            if ($.stopEventBubble(t), $.stopEventDefault(t), $.isEmpty(e) || $.isObject(e) && 0 == e.orderTotal)return layer.msg("您还没有选择套餐", {icon: 0}), !1;
            var n = $(t.currentTarget);
            if ("true" != n.attr("data-disabled")) {
                n.attr("data-disabled", "true");
                for (var i = [], s = [], r = 0, o = e.idList.length; r < o; r++)i.push(e.idList[r].id), s.push(e.idList[r].year);
                var l = layer.load(2, {shade: [.4, "#fff"]});
                return $.ajax({
                    url: "/userCenter/orderToCookie",
                    type: "post",
                    data: {idList: i.join("|"), year: s.join("|")},
                    dataType: "json",
                    success: function (t) {
                        layer.close(l), 1 == t.status ? location.href = t.href : 0 == t.status ? a.unqualified(t) : layer.msg(t.msg || "提交失败，请稍后再试", {icon: 0}), n.removeAttr("data-disabled")
                    },
                    error: function (t) {
                        n.removeAttr("data-disabled"), layer.close(l)
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
                var e = (this.iIndex - 1) * this.len, a = (this.iIndex - 1) * this.len + this.len,
                    n = this.dataStroage.slice(e, a);
                0 !== n.length ? (this.appendHtml(n, this.iIndex), this.iIndex++) : ($("#loading").hide(), $("#page").html(pageData.page))
            }
        },
        appendHtml: function (t, e) {
            var a = pageData.page, n = t.length, i = $("#list-temp").html(), s = this;
            this.$el.find("#js-list").append($.template(i, {data: {list: t || []}})), this.asynLoader && this.asynLoader.attach({
                type: "img",
                node: document.getElementById("js-list")
            }), this.$el.find("#js-list li").fadeIn(function () {
                s.$el.find("#js-list").hasClass("book-detail") && (s.allCopy = $("#js-list").html(), s.isLoadingHide = !!$("#loading").is(":hidden"))
            }), (3 === e || n < this.len) && ($("#loading").hide(), $("#page").html(a))
        },
        getPos: function (t) {
            return {x: t.offset().left, y: t.offset().top}
        },
        getCookie: function (t) {
            var e = encodeURIComponent(t) + "=", a = document.cookie.indexOf(e), n = null;
            if (a > -1) {
                var i = document.cookie.indexOf(";", a);
                -1 == i && (i = document.cookie.length), n = decodeURIComponent(document.cookie.substring(a + e.length, i))
            }
            return n
        },
        setCookie: function (t, e, a, n, i, s) {
            var r = encodeURIComponent(t) + "=" + encodeURIComponent(e);
            a instanceof Date && (r += ";expires=" + a.toUTCString()), n && (r += ";path=" + n), i && (r += ";domain=" + i), s && (r += ";secure"), document.cookie = r
        },
        unsetCookie: function (t, e, a, n) {
            this.set(t, "", new Date(0), e, a, n)
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
                window.imurl ? window.open(window.imurl, "newWin", "height=523,width=650,top=" + a + ",left=" + e + ",status=yes,toolbar=no,menubar=no,resizable=no,scrollbars=no,location=no,titlebar=no") : setTimeout(t, 500)
            }

            var e = (screen.availWidth - 650) / 2, a = (screen.availHeight - 523) / 2;
            $("#im").length || $("head").append('<script id="im" src="https://im.tooxiu.com/online.php?type=2"><\/script>'), window.imurl ? window.open(window.imurl, "newWin", "height=523,width=650,top=" + a + ",left=" + e + ",status=yes,toolbar=no,menubar=no,resizable=no,scrollbars=no,location=no,titlebar=no") : setTimeout(t, 500)
        },
        addSubscription: function () {
            if ("undefined" != typeof is_login && "1" !== is_login)return this.openRegister(), !1;
            var t = "string" == typeof window.subscribe_json ? $.parseJSON(window.subscribe_json || "{}") : window.subscribe_json;
            if ($.getKeys(t).length)return layer.msg("正在执行操作，请稍候...", {icon: 0, time: 3e4}), $.ajax({
                type: "post",
                url: "/userCenter/subscribeAdd",
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
            "Win" === this.detectOS() ? location.href = "http://app.tooxiu.com/client/win/diction.exe" : "Mac" === this.detectOS() ? location.href = "http://app.tooxiu.com/client/mac/diction.dmg" : location.href = "../../../"
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
            var a = this, n = function (t) {
                var e = null, a = function () {
                    throw"addChildView 方法的传参不正确，请阅读方法说明"
                };
                return "string" == typeof t ? e = $(t) : "object" == typeof t ? t.nodeType ? e = $(t) : t instanceof $ ? e = t : $.hasAttr(t, "id") || $.hasAttr(t, "className") ? e = $("<div/>").addClass(t.className || "").attr("id", t.id || "") : a() : a(), e && e.length || a(), e
            }(t);
            return DX_CONST.modules.init($.extend({parent: a, el: n[0], validaData: a.validaData}, e))
        },
        unChildView: function (t, e) {
            this[t].remove(), layer.close(e), this[t] = null, console.log("注销   " + t + "   视图事件"), this.trigger("_deltips")
        },
        validaData: function (t) {
            t = t || {};
            for (var e, a = this.$el.find("input[name],input[data-name]"), n = {
                value: {},
                no: [],
                yes: !0
            }, i = null, s = "", r = !1, o = 0, l = a.length; o < l; o++)if (i = a.eq(o), (s = i.attr("name") || i.attr("data-name")) && (e = i.val(), r = !1 | $.isEmpty($.trim(e)), !r && (n.value[s] = e), $.hasAttr(t, s))) {
                if (r && t[s].required) {
                    t.isTip || this.parent.tipsNode(t[s].emptyMsg || t[s].msg), n.no.push(s), n.yes = !1;
                    break
                }
                if (!t[s].reg.test(e)) {
                    t.isTip || this.parent.tipsNode(t[s].msg), n.no.push(s), n.yes = !1;
                    break
                }
            }
            return n
        },
        tipsNode: function (t) {
            var e = {text: "无内容弹窗", type: 0, time: 3e3, top: 50, left: "auto", isViable: !1}, a = this, n = $("<div>");
            "string" == typeof t ? e.text = t : $.extend(e, t), !a.__tips && (a.__tips = {
                timerOne: null,
                nodeOne: null,
                delEventOne: !1,
                timerTwo: null,
                nodeTwo: null,
                delEventTwo: !1,
                removeTip: function (t) {
                    t ? (clearTimeout(this.timerTwo), this.timerTwo = null, this.nodeTwo && this.nodeTwo.remove(), this.nodeTwo = null) : (clearTimeout(this.timerOne), this.timerOne = null, this.nodeOne && this.nodeOne.remove(), this.nodeOne = null)
                }
            }), n.addClass("layui-layer layui-anim layui-layer-dialog layui-layer-msg ").html($.template('<div class="layui-layer-content layui-layer-padding"><i class="layui-layer-ico layui-layer-ico<%=type%>"></i><%=data%></div><span class="layui-layer-setwin"></span>', {
                data: e.text,
                type: e.type
            })), n.appendTo($("body")), "auto" === e.top && (e.top = $(window).height() / 2 - n.height() / 2), "auto" === e.left && (e.left = $(window).width() / 2 - n.width() / 2), n.css({
                top: e.top + "px",
                left: e.left + "px",
                zIndex: 99999999
            }), e.isViable ? (a.__tips.nodeTwo && a.__tips.removeTip(!0), a.__tips.nodeTwo = n, a.__tips.timerTwo = setTimeout(function () {
                a.__tips.removeTip(!0)
            }, e.time), a.__tips.delEventTwo || (a.on("_delViable", function () {
                a.__tips.removeTip(!0), a.off("_delViable")
            }, a), a.__tips.delEventTwo = !0)) : (a.__tips.nodeOne && a.__tips.removeTip(), a.__tips.nodeOne = n, a.__tips.timerOne = setTimeout(function () {
                a.__tips.removeTip()
            }, e.time), a.__tips.delEventOne || (a.on("_deltips", function () {
                a.__tips.removeTip(), a.off("_deltips")
            }, a), a.__tips.delEventOne = !0))
        },
        showPhoto: function (t, e, a) {
            var n = this, i = $(t.currentTarget), s = parseInt(i.attr("data-index")) || 0, r = e || [];
            return r.length && r[s] ? r[s].no_open_big ? void n.tipsNode({
                text: "数据已被删除，不可浏览！",
                top: "auto"
            }) : "undefined" != typeof is_login && "1" !== is_login ? (n.openRegister(), !1) : $.isEmpty(r[s].is_right) || r[s].is_right.isRightB ? !r[s] || "undefined" == typeof r[s].is_right || r[s].is_right.isRightB || r[s].is_right.isRightB && r[s].is_right.isPcRight ? void n.PicPreview(r, a || function () {
                    $("#picViewer .btn-fav").hide(), n._viewPic.show(s)
                }) : (n.openPower(), !1) : (n.tipsNode({
                text: "对不起，您没有浏览权限！如需帮助，请联系客服热线：400-688-0836",
                top: "auto"
            }), !1) : (n.tipsNode({text: "没有找到图片数据！", top: "auto"}), !1)
        },
        PicPreview: function (t, e) {
            var a = this, n = function () {
                a._viewPic.dataStroage = t, $.isFunction(e) && e()
            };
            if (a._viewPic)return void n();
            var i = layer.load(2, {shade: [.2, "#fff"]});
            require(["viewPic"], function (t) {
                a._viewPic = new t, n(), layer.close(i)
            })
        },
        _errorImg: {},
        beforeWater: function (t, e) {
            var a = t.length, n = a, i = this, s = "/public/images/tooxiu/home/default.jpg", r = {};
            window._errorImg = this._errorImg;
            for (var o = 0; o < a; o++)!function (a) {
                r[a] = new Image, r[a].onload = function () {
                    r[a].onload = null, 0 === --n && (!$.isEmpty(i._errorImg) && console.log("图片加载失败的id：" + JSON.stringify(i._errorImg)), i.obs(t, e))
                }, r[a].onerror = function (e) {
                    var n = t[a].id;
                    i._errorImg[n] = n, t[a].min_picture = s, r[a].src = s, r[a].onerror = null
                }, r[a].src = t[a].min_picture
            }(o)
        },
        __pageDataIndex: 0,
        appendHtml: function (t, e) {
            var a = $("#list-temp").html(), n = this, i = n._isTransform || 0;
            this.$el.find("#" + e).append($.template(a, {
                data: {
                    list: t || [],
                    isTransform: i,
                    pageDataIndex: n.__pageDataIndex
                }
            })), this.__pageDataIndex += t.length
        },
        obs: function (t, e) {
            if (!t.length)return void(that.getFigure = 0);
            this.appendHtml(t, e), this.toWater(t), this.trigger("dataEnd")
        },
        calculateListheight: function () {
            var t = null, e = $(".ns-pic-ul-wrap-list"), a = e.find(".ns-list-item"), n = function () {
                var t = Math.round(e.width() / (a.width() || 1)) - 1;
                if ((e.length || a.length) && -1 !== t) {
                    a.find(".borderRight-ms").removeClass("borderRight-ms");
                    for (var n = t; n < a.size(); n += t + 1)a.eq(n).find(".ns-list-item-inner").addClass("borderRight-ms")
                }
            };
            e.width() && a.width() && (n(), $(window).on("resize", function () {
                clearTimeout(t), t = setTimeout(function () {
                    autoHeightList("resize"), n()
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

            var e = this, a = e.$el, n = null;
            $.addPlaceholder(a.find(".allMenuSearch")), a.on("click", ".ns-l-search-abs a", function (t) {
                var e = $(t.currentTarget), a = e.parents("form");
                a.find(".allMenuSearch").val(e.attr("title")), a.submit()
            }).on("focus", ".allMenuSearch", function (t) {
                var a = $(t.currentTarget);
                e.searchFocus(t), a.parents("form").addClass("cur"), $.isEmpty($.trim(a.val())) || a.trigger("input")
            }).on("keyup input", ".allMenuSearch", function (a) {
                $.stopEventDefault(a), $.stopEventBubble(a), a = a || window.event;
                var i = a.keyCode || a.which || a.charCode;
                if (38 !== i && 40 !== i && 37 !== i && 39 !== i) {
                    clearTimeout(n);
                    var s = $(a.currentTarget), r = $.trim(s.val());
                    if (!$.isEmpty(r)) {
                        var o = s.siblings(".ns-l-search-abs"), l = o.attr("data-value") || "", d = function (t) {
                            o.html(e._allSearchTemp({
                                data: {
                                    list: $.resetData(t, 10),
                                    _replace: r || !1
                                }
                            })).attr("data-value", r).parents("form").addClass("show_search")
                        };
                        if (l === r)return void d(e.data.get("LastTimeSearchData"));
                        n = setTimeout(function () {
                            t(r, function (t) {
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
    var e, a, n, i, s = ["Msxml2.XMLHTTP", "Microsoft.XMLHTTP", "Msxml2.XMLHTTP.4.0"],
        r = /^\s*<\?xml(\s)+version=[\'\"](\d)*.(\d)*[\'\"](\s)*\?>/im, o = /<body[^>]*>\s*([\s\S]+)\s*<\/body>/im,
        l = "undefined" != typeof location && location.href,
        d = l && location.protocol && location.protocol.replace(/\:/, ""), c = l && location.hostname,
        u = l && (location.port || undefined), p = [], f = t.config && t.config() || {};
    return e = {
        version: "2.0.5+", strip: function (t) {
            if (t) {
                t = t.replace(r, "");
                var e = t.match(o);
                e && (t = e[1])
            } else t = "";
            return t
        }, jsEscape: function (t) {
            return t.replace(/(['\\])/g, "\\$1").replace(/[\f]/g, "\\f").replace(/[\b]/g, "\\b").replace(/[\n]/g, "\\n").replace(/[\t]/g, "\\t").replace(/[\r]/g, "\\r").replace(/[\u2028]/g, "\\u2028").replace(/[\u2029]/g, "\\u2029")
        }, createXhr: f.createXhr || function () {
            var t, e, a;
            if ("undefined" != typeof XMLHttpRequest)return new XMLHttpRequest;
            if ("undefined" != typeof ActiveXObject)for (e = 0; e < 3; e += 1) {
                a = s[e];
                try {
                    t = new ActiveXObject(a)
                } catch (n) {
                }
                if (t) {
                    s = [a];
                    break
                }
            }
            return t
        }, parseName: function (t) {
            var e, a, n, i = !1, s = t.indexOf("."), r = 0 === t.indexOf("./") || 0 === t.indexOf("../");
            return -1 !== s && (!r || s > 1) ? (e = t.substring(0, s), a = t.substring(s + 1, t.length)) : e = t, n = a || e, s = n.indexOf("!"), -1 !== s && (i = "strip" === n.substring(s + 1), n = n.substring(0, s), a ? a = n : e = n), {
                moduleName: e,
                ext: a,
                strip: i
            }
        }, xdRegExp: /^((\w+)\:)?\/\/([^\/\\]+)/, useXhr: function (t, a, n, i) {
            var s, r, o, l = e.xdRegExp.exec(t);
            return !l || (s = l[2], r = l[3], r = r.split(":"), o = r[1], r = r[0], !(s && s !== a || r && r.toLowerCase() !== n.toLowerCase() || (o || r) && o !== i))
        }, finishLoad: function (t, a, n, i) {
            n = a ? e.strip(n) : n, f.isBuild && (p[t] = n), i(n)
        }, load: function (t, a, n, i) {
            if (i.isBuild && !i.inlineText)return void n();
            f.isBuild = i.isBuild;
            var s = e.parseName(t), r = s.moduleName + (s.ext ? "." + s.ext : ""), o = a.toUrl(r),
                p = f.useXhr || e.useXhr;
            !l || p(o, d, c, u) ? e.get(o, function (a) {
                e.finishLoad(t, s.strip, a, n)
            }, function (t) {
                n.error && n.error(t)
            }) : a([r], function (t) {
                e.finishLoad(s.moduleName + "." + s.ext, s.strip, t, n)
            })
        }, write: function (t, a, n, i) {
            if (p.hasOwnProperty(a)) {
                var s = e.jsEscape(p[a]);
                n.asModule(t + "!" + a, "define(function () { return '" + s + "';});\n")
            }
        }, writeFile: function (t, a, n, i, s) {
            var r = e.parseName(a), o = r.ext ? "." + r.ext : "", l = r.moduleName + o,
                d = n.toUrl(r.moduleName + o) + ".js";
            e.load(l, n, function (a) {
                var n = function (t) {
                    return i(d, t)
                };
                n.asModule = function (t, e) {
                    return i.asModule(t, d, e)
                }, e.write(t, l, n, s)
            }, s)
        }
    }, "node" === f.env || !f.env && "undefined" != typeof process && process.versions && process.versions.node ? (a = require.nodeRequire("fs"), e.get = function (t, e) {
        var n = a.readFileSync(t, "utf8");
        0 === n.indexOf("\ufeff") && (n = n.substring(1)), e(n)
    }) : "xhr" === f.env || !f.env && e.createXhr() ? e.get = function (t, a, n, i) {
        var s, r = e.createXhr();
        if (r.open("GET", t, !0), i)for (s in i)i.hasOwnProperty(s) && r.setRequestHeader(s.toLowerCase(), i[s]);
        f.onXhr && f.onXhr(r, t), r.onreadystatechange = function (e) {
            var i, s;
            4 === r.readyState && (i = r.status, i > 399 && i < 600 ? (s = new Error(t + " HTTP status: " + i), s.xhr = r, n(s)) : a(r.responseText))
        }, r.send(null)
    } : "rhino" === f.env || !f.env && "undefined" != typeof Packages && "undefined" != typeof java ? e.get = function (t, e) {
        var a, n, i = new java.io.File(t), s = java.lang.System.getProperty("line.separator"),
            r = new java.io.BufferedReader(new java.io.InputStreamReader(new java.io.FileInputStream(i), "utf-8")),
            o = "";
        try {
            for (a = new java.lang.StringBuffer, n = r.readLine(), n && n.length() && 65279 === n.charAt(0) && (n = n.substring(1)), a.append(n); null !== (n = r.readLine());)a.append(s), a.append(n);
            o = String(a.toString())
        } finally {
            r.close()
        }
        e(o)
    } : ("xpconnect" === f.env || !f.env && "undefined" != typeof Components && Components.classes && Components.interfaces) && (n = Components.classes, i = Components.interfaces, Components.utils["import"]("resource://gre/modules/FileUtils.jsm"), e.get = function (t, e) {
            var a, s, r = {}, o = new FileUtils.File(t);
            try {
                a = n["@mozilla.org/network/file-input-stream;1"].createInstance(i.nsIFileInputStream), a.init(o, 1, 0, !1), s = n["@mozilla.org/intl/converter-input-stream;1"].createInstance(i.nsIConverterInputStream), s.init(a, "utf-8", a.available(), i.nsIConverterInputStream.DEFAULT_REPLACEMENT_CHARACTER), s.readString(a.available(), r), s.close(), a.close(), e(r.value)
            } catch (l) {
                throw new Error((o && o.path || "") + ": " + l)
            }
        }), e
}), define("text!template/modDatas.html", [], function () {
    return ' <%if(!data["childModDatas"]){%>\r\n<div class="dialog-tooxiu-cons center-info-tip  mod-Datas-cons" style="text-align: left;">\r\n\t<div class="top t-warning" <%if(!$.isEmpty(data["tips"])) {%>style="left:175px"<%}%>>\r\n\t\t<p class="warning">\r\n\t\t\t<i class="icon icon-warn"></i>\r\n\t\t\t<%if(!$.isEmpty(data["tips"])) {%><%=data["tips"]%><%}else{%> 以下资料一旦提交，无法修改。若需更新，请联系在线客服 <%}%>\r\n\t\t</p>\r\n\t</div>\r\n\t<div class="border_1 text-border"><span>请填写真实、有效的企业及个人信息</span></div>\r\n\t<ul class="from-ul-s">\r\n\t\t<li>\r\n\t\t\t<div class="name">企业名称：</div> \r\n\t\t\t<div class="input-c wis90"><input type="text" value="<%=data["company_name"]%>" <%if(!$.isEmpty(data["company_name"])){%>class="grey-bg" readonly <%}else{%> data-name="company_name" <%}%>   placeholder="请输入企业名称" ></div>\r\n\t\t</li>\r\n\t\t<li>\r\n\t\t\t<div class="name">主营行业：</div>\r\n\t\t\t<div class="input-c select-Parent">\r\n\t\t\t\t<i class="select-icon"></i>\r\n\t\t\t\t<% var mainIndustryCN = \'\';\r\n\t\t\t\tif(!$.isEmpty(data["mainIndustryCN"])){\r\n\t\t\t\t\tmainIndustryCN = data["mainIndustryCN"];\r\n\t\t\t\t}else{\r\n\t\t\t\t\tmainIndustryCN = data["industry_id_name"] && (data["industry_id_name"] + " - " + data["sort_id_name"]+" - "+data["sub_sort_id_name"])||\'\';\r\n\t\t\t\t}%>\r\n\t\t\t\t<input type="text" value="<%=mainIndustryCN%>" <%if(!$.isEmpty(data["industry_id_name"]) || !$.isEmpty(data["mainIndustryCN"])){%> class="grey-bg" disabled <%}else{%> data-name="mainIndustryCN" data-linkage="mainIndustryCN" <%}%> readonly placeholder="-请选择-">\r\n\t\t\t</div>\r\n\t\t</li>\r\n\t\t<li>\r\n\t\t\t<div class="name">所在地：</div>\r\n\t\t\t<div class="input-c select-Parent">\r\n\t\t\t\t<i class="select-icon"></i>\r\n\t\t\t\t<% var addressCN = data["addressCN"] || (data["province"] \r\n\t\t\t\t\t&& (data["province"].name +\' - \'+(data["city"] && data["city"].name)+\r\n\t\t\t\t\t\t( typeof(data["area"])  == "object" ? (\' - \'+data["area"].name) : \'\' ) ) );\r\n\t\t\t\t  %>\r\n\t\t\t\t<input type="text" value="<%=addressCN%>" <%if(( !$.isEmpty(data["province"] && data["province"].name) || !$.isEmpty(data["addressCN"] ) )  ){%> disabled class="grey-bg"<%}else{%>  data-name="addressCN" data-linkage="addressCN" <%}%> readonly placeholder="-请选择-">\r\n\t\t\t</div>\r\n\t\t</li>\r\n\t\t<li>\r\n\t\t\t<div class="name">详细地址：</div>\r\n\t\t\t<div class="input-c wis90">\r\n\t\t\t\t<input type="text" value="<%=data["address"]%>"<%if(!$.isEmpty(data["address"])){%>readonly class="grey-bg"<%}else{%>  data-name="address" <%}%>  placeholder="请输入街道信息">\r\n\t\t\t</div>\r\n\t\t</li>\r\n\t</ul>\r\n\t<div class="border_1"></div>\r\n\t<ul class="from-ul-s">\r\n\t\t<li>\r\n\t\t\t<div class="name">真实姓名：</div>\r\n\t\t\t<div class="input-c"> \r\n\t\t\t\t<input type="text" value="<%=data["real_name"]%>" <%if(!$.isEmpty(data["real_name"])){%>readonly class="grey-bg"<%}else{%> data-name="real_name" <%}%>  placeholder="请输入真实姓名">\r\n\t\t\t</div>\r\n\t\t</li>\r\n\t\t<li>\r\n\t\t\t<div class="name">职位/称呼：</div>\r\n\t\t\t<div class="input-c">\r\n\t\t\t\t<input type="text" value="<%=data["position"]%>" <%if(!$.isEmpty(data["position"])){%>readonly class="grey-bg"<%}else{%> data-name="position"<%}%> placeholder="请输入职位/称呼">\r\n\t\t\t</div>\r\n\t\t</li>\r\n\t\t<li>\r\n\t\t\t<div class="name">手机号码：</div>\r\n\t\t\t<div class="input-c grey-font">\r\n\t\t\t\t<%if( !data["mobile"] ){%>\r\n\t\t\t\t\t<input type="text" value="<%=data["mobile"]%>" data-name="mobile" placeholder="请输入您的手机号">\r\n\t\t\t\t<%}else{%> \r\n\t\t\t\t\t<%=data["mobile"]%><%if(data["isValiMobile"]){%>[已验证]<%}%>\r\n\t\t\t\t<%}%>\r\n\t\t\t</div>\r\n\t\t</li>\r\n\t\t<li>\r\n\t\t\t<div class="name">电子邮箱：</div>\r\n\t\t\t<div class="input-c grey-font">\r\n\t\t\t\t<%if( !data["email"] ){%>\r\n\t\t\t\t\t<input type="text" data-name="email" value="<%=data["email"]%>" placeholder="请输入您的电子邮箱">\r\n\t\t\t\t<%}else{%> \r\n\t\t\t\t\t<%=data["email"]%><%if(data["isValiEmail"]){%>[已验证]<%}%>\r\n\t\t\t\t<%}%>\r\n\t\t\t</div>\r\n\t\t</li>\r\n\t</ul>\t\t\r\n</div>\r\n<%}else{%>\r\n<div class="dialog-tooxiu-cons center-info-tip  mod-Datas-cons" style="text-align: left;">\r\n\t<div class="top t-warning" <%if(!$.isEmpty(data["tips"])) {%>style="left:175px"<%}%>>\r\n\t\t<p class="warning">\r\n\t\t\t<i class="icon icon-warn"></i>\r\n\t\t\t<%if(!$.isEmpty(data["tips"])) {%><%=data["tips"]%><%}else{%> 请填写真实、有效的个人信息<%}%>\r\n\t\t</p>\r\n\t</div>\r\n\t<ul class="from-ul-s pt38">\r\n\t\t<li>\r\n\t\t\t<div class="name">真实姓名：</div>\r\n\t\t\t<div class="input-c wis90"> \r\n\t\t\t\t<input type="text" value="<%=data["real_name"]%>" <%if(!$.isEmpty(data["real_name"])){%>readonly class="grey-bg"<%}else{%> data-name="real_name" <%}%>  placeholder="请输入真实姓名">\r\n\t\t\t</div>\r\n\t\t</li>\r\n\t\t<li>\r\n\t\t\t<div class="name">性别：</div>\r\n\t\t\t<div class="input-c sex-sel w15">\r\n\t\t\t\t<i class="select-icon"></i>\r\n\t\t\t\t<span <%if(data["gender"]!=1&&data["gender"]!=2){%>class="value"<%}else{%>class="value grey-bg"<%}%>><%if(data["gender"]==1){%>男<%}else if(data["gender"]==2){%>女<%}else{%><%}%></span>\r\n\t\t\t\t<div class="linkageSelect">\r\n\t\t\t\t\t<div class="firstLinkage">\r\n\t\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t\t<li data-key="1">男</li>\r\n\t\t\t\t\t\t\t<li data-key="2">女</li>\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<input type="hidden" data-name="gender" value="<%=data["gender"]%>">\r\n\t\t\t</div>\r\n\t\t</li>\r\n\t\t<li>\r\n\t\t\t<div class="name">部门职务：</div>\r\n\t\t\t<div class="input-c wis90">\r\n\t\t\t\t<input type="text" value="<%=data["position"]%>" <%if(!$.isEmpty(data["position"])){%>readonly class="grey-bg"<%}else{%> data-name="position"<%}%> placeholder="请输入职位/称呼">\r\n\t\t\t</div>\r\n\t\t</li>\r\n\t\t<li>\r\n\t\t\t<div class="name">所在地：</div>\r\n\t\t\t<div class="input-c select-Parent">\r\n\t\t\t\t<i class="select-icon"></i>\r\n\t\t\t\t<% var addressCN = data["addressCN"] || (data["province"] \r\n\t\t\t\t\t&& (data["province"].name +\' - \'+(data["city"] && data["city"].name)+\r\n\t\t\t\t\t\t( typeof(data["area"])  == "object" ? (\' - \'+data["area"].name) : \'\' ) ) );\r\n\t\t\t\t  %>\r\n\t\t\t\t<input type="text" value="<%=addressCN%>" <%if(( !$.isEmpty(data["province"] && data["province"].name) || !$.isEmpty(data["addressCN"] ) )  ){%> disabled class="grey-bg"<%}else{%>  data-name="addressCN" data-linkage="addressCN" <%}%> readonly placeholder="-请选择-">\r\n\t\t\t</div>\r\n\t\t</li>\r\n\t\t<li>\r\n\t\t\t<div class="name">地区：</div>\r\n\t\t\t<div class="input-c wis90">\r\n\t\t\t\t<input type="text" value="<%=data["address"]%>"<%if(!$.isEmpty(data["address"])){%>readonly class="grey-bg"<%}else{%>  data-name="address" <%}%>  placeholder="请输入街道信息">\r\n\t\t\t</div>\r\n\t\t</li>\r\n\t</ul>\r\n\t<ul class="from-ul-s bottom-li">\r\n\t\t<li>\r\n\t\t\t<div class="name">手机号码：</div>\r\n\t\t\t<div class="input-c grey-font">\r\n\t\t\t\t<%if( !data["mobile"] ){%>\r\n\t\t\t\t\t<input type="text" value="<%=data["mobile"]%>" data-name="mobile" placeholder="请输入您的手机号">\r\n\t\t\t\t<%}else{%> \r\n\t\t\t\t\t<%=data["mobile"]%><%if(data["isValiMobile"]){%>[已验证]<%}%>\r\n\t\t\t\t<%}%>\r\n\t\t\t</div>\r\n\t\t</li>\r\n\t\t<li>\r\n\t\t\t<div class="name">电子邮箱：</div>\r\n\t\t\t<div class="input-c grey-font">\r\n\t\t\t\t<%if( !data["email"] ){%>\r\n\t\t\t\t\t<input type="text" data-name="email" value="<%=data["email"]%>" placeholder="请输入您的电子邮箱">\r\n\t\t\t\t<%}else{%> \r\n\t\t\t\t\t<%=data["email"]%><%if(data["isValiEmail"]){%>[已验证]<%}%>\r\n\t\t\t\t<%}%>\r\n\t\t\t</div>\r\n\t\t</li>\r\n\t</ul>\r\n</div>\r\n<%}%>'
}), define("modDatas", ["text!template/modDatas.html"], function (t) {
    return {
        template: $.template(t),
        events: {
            "click .layui-layer-btn0": "submitData",
            "click .select-Parent": "getlinkageData",
            "click ": "hidelinkageDiv",
            "click .click_select>li": "selectLinkage",
            "click .sex-sel": "showSex",
            "click .sex-sel li": "selSex"
        },
        _CONSTANTDATA: {
            left: ["0%", "50%", "100%"],
            parentDom: '<div class="loaderBg linkageSelect" data-isget="0"></div>',
            linkageTemp: $.template('<div class="<%=data["className"]%>" ><ul data-linkage="<%=data["type"]%>" data-level="<%=data["level"]%>" class="click_select"><%$.each(data["list"],function(i,ele){%><li data-value="<%=ele.id%>" data-text="<%=ele.name%>" data-parentid="<%=ele.id%>"><%=ele.first_letter ? (ele.first_letter+" - "):"" %><%=ele.name%></li><%})%><%if(data.isEmpty){%><li data-empty="1"><%=data.noHtml%></li><%}%></ul></div>'),
            className: ["firstLinkage", "secondLinkage", "thirdLinkage"],
            addressCN: "/userCenter/getAreaListByParentid",
            mainIndustryCN: "/userCenter/getIndustryListByParentid",
            addressCN_data: new Array(3),
            mainIndustryCN_data: new Array(3)
        },
        showSex: function (t) {
            $.stopEventDefault(t), $.stopEventBubble(t);
            var e = $(t.currentTarget);
            e.find("span.value").hasClass("grey-bg") || e.find(".linkageSelect").show()
        },
        selSex: function (t) {
            $.stopEventDefault(t), $.stopEventBubble(t);
            var e = $(t.currentTarget);
            e.parents(".sex-sel").find("span.value").html(e.html()), e.parents(".sex-sel").find("input").val(Number(e.attr("data-key"))), e.parents(".sex-sel").find(".linkageSelect").hide()
        },
        hidelinkageDiv: function (t, e) {
            var a, n, i, s = this, r = null, o = 0, l = 0;
            if (e || !$(t.target).closest(".select-Parent").size()) {
                for (r = s.$el.find("input[data-linkage]"), l = r.length; o < l; o++)i = r.eq(o), a = i.attr("data-linkage"), n = s._CONSTANTDATA[a + "_data"], ($.isEmpty(n[0]) || $.isEmpty(n[1]) || $.isEmpty(n[2])) && (n[0] = n[1] = n[2] = "", i.val(""));
                r.nextAll().remove()
            }
            var d = this.$el.find(".sex-sel .linkageSelect");
            d.length && !d.is(":hidden") && d.hide()
        },
        getlinkageData: function (t) {
            var e = this, a = $(t.currentTarget).find("input[data-linkage]"), n = a.attr("data-linkage"), i = null,
                s = $(e._CONSTANTDATA.parentDom), r = a.parent().find(".linkageSelect"), o = r.eq(0);
            if (!(0 === a.length || a.length && a[0].disabled))if (o.length && !o.is(":hidden")) e.$el.trigger("click"); else if (o.length && "1" === o.attr("data-isget")) o.show(); else {
                o = s, a.after(o);
                var l = {}, d = 0;
                "mainIndustryCN" == n && (l = {parentid: 1}, e._CONSTANTDATA[n + "_data"][d] = 1, a.val("服装 - "), d = 1), i = e.data.get(n + "_data") || [], i.length ? (e.linkageRender({
                    list: i,
                    className: e._CONSTANTDATA.className[0],
                    type: n,
                    level: d
                }, o), o.attr("data-isget", "1").mCustomScrollbar({theme: "dark"})) : e.getData(e._CONSTANTDATA[n], l, function (t, a) {
                    a ? (e.data.set(n + "_data", t.data), e.linkageRender({
                        list: t.data,
                        className: e._CONSTANTDATA.className[0],
                        type: n,
                        level: d
                    }, o), o.attr("data-isget", "1").mCustomScrollbar({theme: "dark"})) : e.parent.tipsNode("请求失败！请重试！"), o.removeClass("loaderBg")
                })
            }
        },
        linkageRender: function (t, e) {
            $.isArray(t) && t.sort(function (t, e) {
                return t.first_letter == e.first_letter ? 0 : t.first_letter > e.first_letter ? -1 : 1
            });
            var a = this, n = $.extend({
                list: t,
                className: a._CONSTANTDATA.className[0],
                type: "",
                level: 0,
                isEmpty: !1,
                noHtml: "无数据"
            }, t);
            e.append(a._CONSTANTDATA.linkageTemp({data: n}))
        },
        linkageTimer: !1,
        selectLinkage: function (t) {
            var e = this, a = $(t.currentTarget), n = a.parent().attr("data-linkage"), i = a.attr("data-parentid"),
                s = a.attr("data-value"), r = +a.parent().attr("data-level"), o = a.parents(".linkageSelect"),
                l = o.siblings(".linkageSelect"), d = o.siblings("input"), c = d.val(), u = o.next(),
                p = $(e._CONSTANTDATA.parentDom), f = a.attr("data-text");
            if ($.stopEventBubble(t), !a.hasClass("cur")) {
                if (1 == a.attr("data-empty")) {
                    for (var m = +r; m < 3; m++)e._CONSTANTDATA[n + "_data"][m] = "X0000";
                    return void l.remove().end().remove()
                }
                if (2 == r)return e._CONSTANTDATA[n + "_data"][r] = s, d.val(c + " - " + f), void l.remove().end().remove();
                0 == r ? (d.val(f), e._CONSTANTDATA[n + "_data"][r] = s, e._CONSTANTDATA[n + "_data"][1] = e._CONSTANTDATA[n + "_data"][2] = "", l.remove()) : 1 == r && (e._CONSTANTDATA[n + "_data"][2] = "", d.val(c.split(" - ")[0] + " - " + f), e._CONSTANTDATA[n + "_data"][1] = s, u.remove()), a.siblings().removeClass("cur").end().addClass("cur"), p.css({
                    left: e._CONSTANTDATA.left["mainIndustryCN" !== n ? r + 1 : r],
                    height: o.height()
                }), o.after(p), e.linkageTimer = !0, setTimeout(function () {
                    e.linkageTimer = !1
                }, 10), e.getData(e._CONSTANTDATA[n], {parentid: i}, function (t, a) {
                    if (!a || 1 != t.status)return void e.parent.tipsNode("请求失败！请重试！");
                    r += 1;
                    var i = !1;
                    0 === t.data.length && (i = !0), e.linkageRender({
                        list: t.data,
                        className: e._CONSTANTDATA.className[r],
                        type: n,
                        level: r,
                        isEmpty: i,
                        noHtml: f
                    }, p), p.attr("data-isget", "1").mCustomScrollbar({theme: "dark"})
                })
            }
        },
        getData: function (t, e, a) {
            return $.ajax({
                url: t, data: e, dataType: "json", success: function (t) {
                    a && a(t, !0)
                }, error: function (t) {
                    a && a(e, !1)
                }
            })
        },
        submitData: function (t) {
            var e, a = this, n = $(t.currentTarget), i = [];
            if (!n.hasClass("disabled")) {
                n.addClass("disabled"), a.hidelinkageDiv({}, !0);
                var s = null;
                if (s = a.validaData({
                        isTip: !1,
                        email: {
                            reg: /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/,
                            required: !1,
                            emptyMsg: "邮箱不能为空",
                            msg: "请输入正确的邮箱地址"
                        },
                        company_name: {reg: /.?/, required: !0, emptyMsg: "企业名称不能为空", msg: "请输入您的企业名称"},
                        mainIndustryCN: {reg: /.?/, required: !0, emptyMsg: "主营行业不能为空", msg: "请输入您的主营行业"},
                        addressCN: {reg: /.?/, required: !0, emptyMsg: "所在地不能为空", msg: "请输入：如'广东省-深圳市-宝安区'"},
                        address: {reg: /.?/, required: !0, emptyMsg: "街道信息不能为空", msg: "请输入街道信息"},
                        real_name: {reg: /.?/, required: !0, emptyMsg: "真实姓名不能为空", msg: "请输入您的真实姓名"},
                        position: {reg: /.?/, required: !0, emptyMsg: "职务/称呼信息不能为空", msg: "请输入您的职位"},
                        gender: {reg: /.?/, required: !0, emptyMsg: "性别不能为空", msg: "请选择您的性别"},
                        mobile: {reg: /^(?:0?1)[34578]\d{9}$/, required: !1, emptyMsg: "手机号码不能为空", msg: "请输入正确的手机号码"}
                    }), !s.yes)return void n.removeClass("disabled");
                var r = !1;
                for (var o in s.value)if (s.value[o] !== a.data.get(o)) {
                    r = !0;
                    break
                }
                if (!r || !$.getKeys(s.value).length)return a.parent.tipsNode("您未修改资料，无需提交！"), void n.removeClass("disabled");
                if ($.hasAttr(s.value, "mainIndustryCN")) {
                    e = a._CONSTANTDATA.mainIndustryCN_data.slice(0);
                    for (var l = 0; l < 3; l++)"X0000" !== e[l] && i.push(e[l]);
                    s.value.mainIndustryCN = i.join("|"), i = []
                }
                if ($.hasAttr(s.value, "addressCN")) {
                    e = a._CONSTANTDATA.addressCN_data.slice(0);
                    for (var l = 0; l < 3; l++)"X0000" !== e[l] && i.push(e[l]);
                    s.value.addressCN = i.join("|"), i = []
                }
                return console.log("提交的数据" + JSON.stringify(s.value)), a.parent.tipsNode({
                    text: "正在提交，请稍后...",
                    time: 45e3
                }), $.ajax({
                    url: "/userCenter/accountManage",
                    data: s.value,
                    type: "post",
                    dataType: "json",
                    success: function (t) {
                        if (1 == t.status) {
                            a.parent.tipsNode({text: "恭喜！资料修改成功！"}), $.hasAttr(s.value, "mainIndustryCN") && (s.value.mainIndustryCN = a.$el.find('[data-linkage="mainIndustryCN"]').val(), a._CONSTANTDATA.mainIndustryCN_data = new Array(3)), $.hasAttr(s.value, "addressCN") && (s.value.addressCN = a.$el.find('[data-linkage="addressCN"]').val(), a._CONSTANTDATA.addressCN_data = new Array(3));
                            var e, i;
                            for (i in s.value)$.isEmpty($.trim(s.value[i])) || (e = a.parent.$el.find("." + i + "_mod"), e.length && e.html(s.value[i]), "mobile" !== i && "email" !== i || e.next().removeClass("isValidat-yes").addClass("isValidat-no").html("<i></i>未验证"));
                            console.log(s.value), a.data.set(s.value), layer.close(a.layerIndex), a.data.set("perfect_data_score", t.perfect_data_score || +window.sessionStorage.Canval), a.parent.canvasAnim.resetVal(t.perfect_data_score / 100 || +window.sessionStorage.Canval).render(!0)
                        } else a.parent.tipsNode(t.msg || "资料修改失败，请重试"), n.removeClass("disabled")
                    },
                    error: function (t) {
                        a.parent.tipsNode("系统异常，请稍后再试..."), n.removeClass("disabled")
                    }
                })
            }
        }
    }
}), define("text!template/qrcode.html", [], function () {
    return '\x3c!-- 二维码 --\x3e\r\n<div class="login-layer fn-mgt20">\r\n\t<div class="top">\r\n\t\t<p class="warning"><i class="icon icon-warn"></i>使用微信/微博客户端中的“扫一扫”功能，扫描后即可关注蝶讯官方微信/微博</p>\r\n\t</div>\r\n\t<div class="code fn-mgt20">\r\n\t\t<span class="item">\r\n\t\t\t<i class="weibo"></i>\r\n\t\t\t<p><span class="icon-weibo"></span>官方微博</p>\r\n\t\t</span>\r\n\t\t<span class="item">\r\n\t\t\t<i class="weixin"></i>\r\n\t\t\t<p><span class="icon-weixin"></span>官方微信</p>\r\n\t\t</span>\r\n\t\t<span class="item">\r\n\t\t\t<i class="kefu"></i>\r\n\t\t\t<p><span class="icon-weixin"></span>客服微信</p>\r\n\t\t</span>\r\n\t</div>\r\n\t<div class="bottom">\r\n\t\t<a class="btn-input-normal layer-close">我知道了</a>\r\n\t</div>\r\n</div>'
}), define("sidebar", ["text!template/qrcode.html", "public"], function (t, e) {
    return e.init({
        el: "#side-bar", init: function (t) {
            this.mouseIn = !1, this.$top = this.$el.find(".top"), this.topH = this.$top.outerHeight(), this.$bottom = this.$el.find(".bottom"), this.render()
        }, render: function () {
            var e = this, a = null;
            $("#js-back-top").click(function () {
                $("html,body").animate({scrollTop: 0}, "fast")
            }), $("#side-bar").one("mouseenter", function () {
                e.set.call(e)
            }), $(window).scroll(function () {
                e.mouseIn && e.onscroll.call(e), $(document).scrollTop() > 30 ? $(".side-bar-item li:last").show() : $(".side-bar-item li:last").hide()
            }), $(window).resize(function () {
                a && clearTimeout(a), a = setTimeout(function () {
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
                success: function (a, n) {
                    t = a, $(".textarea-box textarea").focus(), t.on("click", "#proposalSubmit", function () {
                        var a = $(".textarea-box textarea").val();
                        if (a.trim().length < 10)return layer.msg("建议内容不能少于10个字符！", {icon: 0}), !1;
                        e && (e = !1, $.ajax({
                            url: "/public-app_customer_feedback",
                            type: "post",
                            data: {
                                nickname: company_name,
                                note: a,
                                mobile: username,
                                customer_id: user_id,
                                type: "user",
                                device: "PC",
                                customer_resource: "4"
                            },
                            success: function (a) {
                                if (200 == a.status) {
                                    t.empty().append('<div class="box-top"><i class="icon success"></i><p class="tit">提交成功</p><p>非常感谢，您的建议我们已经收到，感谢您的支持！</p></div>'), setTimeout(function () {
                                        layer.close(n), t = null, e = !0
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
}), define("index", ["gallery", "public", "modDatas", "sidebar", "mCustomScrollbar"], function (t, e, a) {
    return e.init({
        el: "#mainView",
        name: "index",
        template: "",
        events: {
            "mouseover .sub-nav-item>li": "subNavOver",
            "mouseout .sub-nav-item>li": "subNavOut",
            "mouseover .special-nav a": "getColumn",
            "mouseover #select-tab-hd": "selectShow",
            "mouseout #select-tab-hd": "selectHide",
            "mouseover .union-list a": "showUnionTitle",
            "mouseout .union-list a": "hideUnionTitle",
            "click #index-im": "showIm",
            "click #select-tab-hd li": "tabColumn",
            "click .recommend-list a": "getRecommend"
        },
        init: function (t) {
            DX_CONST.loader.add(this);
            var e = this;
            window.setSlideImg || (window.setSlideImg = function (t) {
                for (var a = "", n = 0, i = t.length; n < i; n++)a += '<li><a href="' + t[n].link + '" rel="nofollow" target="' + t[n].target + '" data-src="' + t[n].src + '"></a></li>';
                $("#js-gallery").find(".loaderIng-img").remove(), $("#js-gallery ul").append(a), e.slide()
            }), this.render(), this.recommendData = {}, this.columnData = {}, this.tabFn({
                hd: $("#tab-hd"),
                bd: $("#tab-bd"),
                type: "click"
            }), this.tabFn({
                hd: $("#sub-tab-hd"),
                bd: $("#sub-tab-bd"),
                type: "click"
            }), this.navTimer = setTimeout(this.hideNav, 5e3), this.setNavUrl(), $(".guide-banner").length && this.toPerfect(), this.newUpdate(), $(document).on("click", ".reset-update", this.resetUpdate)
        },
        modDatas: function (t) {
            var e = this;
            $.ajax({
                url: "/userCenter/getUserInfo", type: "post", dataType: "json", success: function (t) {
                    if (t.status) {
                        t.info.tips = "请先完善您的真实资料，获得更多服务内容！", 2 == userType && (t.info.childModDatas = !0);
                        var n = layer.confirm(a.template({data: t.info}), {
                            skin: "dialog-tooxiu-con dialog-modDatas",
                            title: "请先完善资料",
                            closeBtn: 0,
                            shadeClose: 0,
                            area: ["484px"],
                            btn: ["确认提交"],
                            yes: function (t, e) {
                            },
                            end: function () {
                                e.unChildView("_modDatasView_", n)
                            }
                        });
                        a.layerIndex = n, a.data = e.data, e._modDatasView_ = e.addChildView("#layui-layer" + n, a)
                    }
                }
            })
        },
        toPerfect: function () {
            var t = this;
            "undefined" != typeof is_login && "1" == is_login && $.ajax({
                url: "/userCenter/orderToCookie",
                type: "post",
                dataType: "json",
                success: function (e) {
                    e.status || 2 == e.user_type || setTimeout(function () {
                        t.modDatas()
                    }, 3e3)
                }
            })
        },
        setNavUrl: function () {
            $("#mainView").find(".sub-nav-child").each(function () {
                var t = $(this).next().find("a").first().attr("href");
                $(this).attr("href", t)
            })
        },
        hideNav: function () {
            $("#js-all-column").find(".sub-all-column").animate({width: "0"}, 300, function () {
                $(this).hide().css("width", "auto"), $("#js-all-column").find("a").removeClass("cur")
            })
        },
        subNavOver: function (t) {
            clearTimeout(this.navTimer);
            var e = $(t.currentTarget);
            e.children("a").addClass("cur").parent().siblings().children("a").removeClass("cur"), e.find(".sub-nav-detail").stop().fadeIn("fast").parent().siblings().find(".sub-nav-detail").stop().fadeOut("fast")
        },
        subNavOut: function (t) {
            var e = $(t.currentTarget);
            $(".sub-nav-detail").stop().fadeOut("fast"), e.find("a").removeClass("cur")
        },
        render: function (t) {
            console.log("调用渲染方法55");
            var e = document.createElement("script"), a = "", n = $("#mainView").val();
            switch (n) {
                case"2085":
                    a = "https://union.tooxiu.com/v.php?id=A-a-01&site=client&cb=setSlideImg";
                    break;
                case"2084":
                    a = "https://union.tooxiu.com/v.php?id=A-b-a01&site=client&cb=setSlideImg";
                    break;
                case"2086":
                    a = "https://union.tooxiu.com/v.php?id=A-c-a01&site=client&cb=setSlideImg";
                    break;
                case"35340":
                    a = "https://union.tooxiu.com/v.php?id=A-d-a01&site=client&cb=setSlideImg";
                    break;
                case"32209":
                    a = "https://union.tooxiu.com/v.php?id=A-e-a01&site=client&cb=setSlideImg";
                    break;
                case"35342":
                    a = "https://union.tooxiu.com/v.php?id=A-f-a01&site=client&cb=setSlideImg";
                    break;
                case"35341":
                    a = "https://union.tooxiu.com/v.php?id=A-g-a01&site=client&cb=setSlideImg";
                    break;
                default:
                    a = "https://union.tooxiu.com/v.php?id=a-h-01-a&site=client&cb=setSlideImg"
            }
            e.src = a, document.body.appendChild(e), "industry" !== n && this.toRegister();
            var i = $(".union-list li img").width();
            $(".union-list li img").height(.53125 * i)
        },
        showUnionTitle: function (t) {
            var e = $(t.currentTarget), a = e.find("img").attr("alt");
            a && !e.find("span").length && e.append("<span>" + a + "</span>"), e.find("span").stop().animate({bottom: 0}, 200)
        },
        hideUnionTitle: function (t) {
            $(t.currentTarget).find("span").stop().animate({bottom: "-40px"}, 200)
        },
        slide: function (t) {
            $("#js-gallery").slide({animateType: "fade", autoplaySpeed: 5e3, arrows: !0})
        },
        getRecommend: function (t) {
            var e = $(t.currentTarget), a = e.data("src"), n = e.data("name"), i = this,
                s = $("#recommend-temp").html();
            e.hasClass("cur") || (e.parent().siblings().find("a").removeClass("cur"), e.addClass("cur"), i.recommendData[n] ? i.$el.find("#recommend").html($.template(s, {data: {recommendList: i.recommendData[n] || []}})) : $.get(a, null, function (t) {
                if (t.status) {
                    if ("2085" == $("#channel").val()) i.recommendData[n] = t.info.list; else {
                        for (var e = []; t.info.list.length;)e.push(t.info.list.splice(0, 3));
                        i.recommendData[n] = e
                    }
                    i.$el.find("#recommend").html($.template(s, {data: {recommendList: i.recommendData[n] || []}}))
                }
            }))
        },
        getColumn: function (t) {
            var e = $(t.currentTarget), a = e.data("src"), n = e.data("name"), i = this, s = $("#column-temp").html();
            e.parent().hasClass("cur") || (e.parent().siblings().removeClass("cur"), e.parent().addClass("cur"), i.columnData[n] ? i.$el.find("#js-list").html($.template(s, {data: {columnList: i.columnData[n] || []}})) : $.get(a, null, function (t) {
                t.status && (i.columnData[n] = t.info.list, i.$el.find("#js-list").html($.template(s, {data: {columnList: i.columnData[n] || []}})))
            }))
        },
        selectShow: function (t) {
            $(t.currentTarget).addClass("show")
        },
        selectHide: function (t) {
            $(t.currentTarget).removeClass("show")
        },
        tabColumn: function (t) {
            var e = $(t.currentTarget);
            e.addClass("cur").siblings().removeClass("cur"), $("#select-tab-bd").children().hide().eq(e.index()).show(), e.parent().siblings("em").text(e.text()), $("#select-tab-hd").removeClass("show")
        },
        setGuideFn: function () {
            var t = this;
            if (!this.getCookie("guide-index")) {
                $(".guide").show();
                var e = this.getPos($("#webs"));
                $("#home-0").css({left: e.x - 5, top: e.y - 35}).show(), $(".js-guide-0").click(function () {
                    var e = t.getPos($("#g-search"));
                    $("#home-1").css({left: e.x - 50, top: e.y}).show(), $("#home-0").hide()
                }), $(".js-guide-1").click(function () {
                    var e = t.getPos($("#g-nav"));
                    $("#home-2").css({left: e.x - 400, top: e.y}).show(), $("#home-1").hide()
                }), $(".js-guide-2").click(function () {
                    var e = t.getPos($("#g-order"));
                    $("#home-3").css({
                        left: e.x - 10,
                        top: e.y - 10
                    }).show(), $("html,body").animate({scrollTop: e.y - 150}, "fast"), $("#home-2").hide()
                }), $(".js-guide-3").click(function () {
                    var e = t.getPos($("#g-history"));
                    $("#home-4").css({left: e.x, top: e.y - 250}).show(), $("#home-3").hide()
                }), $(".js-guide-over").click(function () {
                    $(".guide").hide()
                });
                var a = new Date;
                a.setTime(a.getTime() + 2592e6), t.setCookie("guide-index", 1, a);
                var n = null;
                $(window).resize(function () {
                    n && clearTimeout(n), n = setTimeout(function () {
                        $("#home-1").is(":visible") ? (pos1 = t.getPos($("#g-search")), $("#home-1").css({
                            left: pos1.x - 50,
                            top: pos1.y
                        })) : $("#home-2").is(":visible") ? (pos2 = t.getPos($("#g-nav")), $("#home-2").css({
                            left: pos2.x - 400,
                            top: pos2.y
                        })) : $("#home-3").is(":visible") ? (pos3 = t.getPos($("#g-order")), $("#home-3").css({
                            left: pos3.x - 10,
                            top: pos3.y - 10
                        })) : $("#home-4").is(":visible") && (pos4 = t.getPos($("#g-history")), $("#home-4").css({
                                left: pos4.x,
                                top: pos4.y - 250
                            }))
                    }, 100)
                })
            }
        },
        newUpdate: function () {
            "undefined" != typeof showLatest && "1" == showLatest && setTimeout(function () {
                $.get(getLatestUrl, function (t) {
                    layer.open({
                        skin: "dialog-tooxiu-con index-update-box",
                        type: 1,
                        title: "最近更新",
                        closeBtn: !0,
                        area: "860px",
                        content: t
                    })
                })
            }, 3e3)
        },
        resetUpdate: function (t) {
            t.preventDefault();
            var e = $(t.currentTarget);
            e.attr("href") && ($(".index-update-box .update-con").empty().append('<span class="load-i"></span>'), $.get(e.attr("href"), function (t) {
                $(".index-update-box .layui-layer-content").empty().html(t)
            }))
        }
    })
}), define("header", ["public"], function (t) {
    return t.init({
        el: "#header",
        template: "",
        name: "header",
        events: {
            "mouseover #webs": "websMouseover",
            "mouseout #webs": "websMouseout",
            "focus #keyword": "searchFocus",
            "keyup  #keyword": "searchFn",
            "input  #keyword": "searchFn",
            "submit form.search": "submitSearch",
            "mouseover #vip": "vipShow",
            "mouseout #vip": "vipHide",
            "click .dx-sug-item": "setSearch",
            "touchstart .sub-nav-child, .ns-header .sel .inner>a": "navTouch"
        },
        navTouch: function (t) {
            $.stopEventDefault(t), $.stopEventBubble(t);
            var e = $(t.currentTarget), a = !0, n = t.timeStamp || +new Date, i = function (t) {
                $(t.currentTarget).parents("li").addClass("touchCur").siblings().removeClass("touchCur");
                var e = $(document);
                e.on("touchstart.closenav", function (t) {
                    0 == $(t.target).closest(".ns-two-menu").length && ($(".ns-two-menu li.touchCur, .ns-header .nav > li").removeClass("touchCur"), e.off("touchstart.closenav"))
                })
            };
            e.off("touchend touchcancel").on("touchend touchcancel", function (t) {
                (t.timeStamp || +new Date) - n > 250 && (a = !1, console.log("用户触摸时间大于", 250), t.preventDefault(), t.stopPropagation(), i(t)), e.off("touchend touchcancel")
            })
        },
        setSearch: function (t) {
            this.$("#keyword").val(this.$(t.currentTarget).attr("data-value"))
        },
        submitSearch: function (t) {
            var e = this.$("#keyword").val();
            return $.isEmpty($.trim(e)) ? void $.stopEventDefault(t) : function (t) {
                var e = 0, a = t.length;
                if (a) {
                    for (var n = 0; n < a; n++) {
                        /^[\x00-\xff]$/.test(t.charAt(n)) ? e++ : e += 2
                    }
                    return e
                }
                return 0
            }(e) < 2 ? ($.stopEventDefault(t), void layer.msg("您输入的字符长度不够，建议您输入更多字符提升精准度。", {icon: 0})) : void layer.msg("您当前正在进入【图片】搜索结果", {icon: 0})
        },
        delHistory: function (t) {
            var e = $(t.currentTarget), a = e.attr("data-index"), n = e.attr("data-title"), i = this,
                s = i.data.get("history_search_h") || [], r = null;
            $.stopEventDefault(t), $.stopEventBubble(t);
            for (var o = 0, l = s.length; o < l; o++)if (o == a) {
                s.splice(o, 1);
                break
            }
            return this.data.set("history_search_h", s), r = e.parents("ul"), i.$el.find("#keyword").trigger("focus"), e.parent().parent().remove(), $.ajax({
                url: "/Search/delSearchCookie/",
                data: {title: n},
                dataType: "json",
                success: function (t) {
                    t = {historyList: t || []}, t.historyList && t.historyList.length > 0 && i.data.set("history_search_h", t.historyList), i.historyHtml(r, s), console.log("搜索记录删除成功")
                },
                error: function (t) {
                    console.log("搜索记录删除失败")
                }
            })
        },
        init: function () {
            var t = this,
                e = "undefined" == typeof window.data_search || "string" == typeof window.data_search ? [] : window.data_search;
            e = $.isArray(e) ? e : [], this.data.set("history_search_h", e), this.$el.find(".dx-sug").on("click", ".dx-sug-del", function (e) {
                t.delHistory.call(t, e)
            }), this.setScreenWidth(), this.closeRegister(), this.setFooter();
            var a = this.$("#js-mk-fixed"), n = null, i = $(window);
            a.length && i.on("scroll", function () {
                clearTimeout(n), n = setTimeout(function () {
                    a.parent().offset().top - i.scrollTop() < -20 ? a.addClass("mk-fixed-h") : a.removeClass("mk-fixed-h")
                }, 40)
            }).trigger("scroll");
            var s = $("#ns-two-menu"), r = null, o = $(".ns-menu-cons"), l = function () {
                o.fadeOut(), r && clearTimeout(r)
            };
            s.on("mouseenter touchstart", ".first", function (t) {
                0 == $(t.target).closest(".ns-menu-cons").length && o.fadeIn(), r && clearTimeout(r)
            }).on("mouseleave", ".first", function (t) {
                r = setTimeout(function () {
                    l()
                }, 100)
            }).on("click", ".close", function (t) {
                l()
            }).on("mouseleave", ".ns-menu-cons", function (t) {
                clearTimeout(r), l()
            }).on("mouseenter", ".ns-menu-cons", function (t) {
                clearTimeout(r)
            }).on("click", ".ns-c-n a", function (t) {
                var e = $(t.currentTarget), a = e.attr("data-eq");
                e.hasClass("cur") || (e.parents(".ns-menu-cons").find(".ns-tab-navs").hide().eq(a).fadeIn(), e.parents(".ns-c-n").find("a").removeClass("cur").eq(a).addClass("cur"))
            }).find(".nav-cons").each(function () {
                var t = $(this).find("a:eq(0)").attr("href");
                t && $(this).parent("li").find(".sub-nav-child").attr("href", t)
            }), $(".ns-c-title").on("click", function (t) {
                var e = $(t.currentTarget), a = e.next("ul"), n = a.hasClass("mk-ulCur"), i = e.hasClass("cur");
                n && i ? (a.addClass("mk-showLi"), e.removeClass("cur")) : !n && i ? (a.removeClass("mk-showLi"), e.removeClass("cur")) : n || i ? (a.removeClass("mk-showLi"), e.addClass("cur")) : (a.addClass("mk-showLi"), e.addClass("cur"))
            }), function () {
                var t = window.innerHeight - 656;
                $(".wrap>.guide-list").css("min-height", t), $(".no-result").css("min-height", window.innerHeight - 577)
            }()
        },
        render: function (t) {
            var e = this.data.get("history_search_h");
            e && this.historyHtml($(".dx-sug>ul"), e)
        },
        websMouseover: function (t) {
            var e = $(t.currentTarget);
            e.addClass("webs-hv");
            var a = $(window).width(), n = Math.ceil(e.offset().left + 1);
            $("#web-wrap").css({width: a, left: "-" + n + "px"}).stop().fadeIn("fast")
        },
        websMouseout: function (t) {
            $(t.currentTarget).removeClass("webs-hv"), $("#web-wrap").stop().fadeOut("fast")
        },
        vipShow: function (t) {
            $(t.currentTarget).children().show()
        },
        vipHide: function (t) {
            $(t.currentTarget).children().hide()
        },
        searchFocus: function (t) {
            var e = this, a = e.data.get("history_search_h") || [], n = $(t.currentTarget), i = n.val();
            if (e.__keyUpVal = "", $.isEmpty(i)) {
                var s = n.next().find("ul");
                !s.find("li.cur").length && e.historyHtml(s, a), n.parents(".search").addClass("focus"), n.addClass("text-inputFocus").next().fadeIn("fast")
            } else n.parents(".search").addClass("focus"), n.addClass("text-inputFocus").next().show();
            e.__hideSearchFn || (e.__hideSearchFn = DX_CONST.common.bind(e, e.__hideSearch), $("body").on("click", null, e.__hideSearchFn), console.log("添加 hideSearch")), e.__keyUpSelectFn || (console.log("添加 __keyUpSelectFn"), e.__keyUpSelectFn = DX_CONST.common.bind(e, e.__keyUpSelect), $("body").on("keydown", null, e.__keyUpSelectFn))
        },
        __keyUpSelect: function (t) {
            t = t || window.event;
            var e = this, a = t.keyCode || t.which || t.charCode, n = -1, i = e.$el.find(".dx-sug>ul"),
                s = i.find("li"), r = i.find("li.cur");
            switch (a) {
                case 13:
                    r.length && ($.stopEventDefault(t), $.stopEventBubble(t), window.location.href = r.find("a").attr("href"));
                    break;
                case 40:
                    if (r.length && (n = r.eq(0).index()) !== s.length - 1) {
                        s.removeClass("cur").eq(++n).addClass("cur");
                        break
                    }
                    s.length && s.removeClass("cur").eq(0).addClass("cur");
                    break;
                case 38:
                    if (r.length && 0 !== (n = r.eq(0).index())) {
                        s.removeClass("cur").eq(--n).addClass("cur");
                        break
                    }
                    s.length && s.removeClass("cur").eq(s.length - 1).addClass("cur")
            }
        },
        __hideSearch: function (t) {
            $(t.target).closest("form.search").length || (console.log("删除 hideSearch"), $("#keyword").parents(".search").removeClass("focus"), $("#keyword").removeClass("text-inputFocus").next().fadeOut("fast"), $("body").off("click", null, this.__hideSearchFn), this.__hideSearchFn = null, console.log("删除 __keyUpSelectFn"), $("body").off("keydown", null, this.__keyUpSelectFn), this.__keyUpSelectFn = null)
        },
        searchTemp: $.template('<% var reg = new RegExp(data._replace||"","ig"),value = ""; $.each(data["history_search_h"][0],function(i,val){ if(!$.isEmpty(data._replace)){ value = (val.title_view+"").replace(reg,function(txt){ return "<span class=\'search-keyword\'>"+txt+"</span>";}) }else{value = val.title_view;}%><li><a data-value="<%=val.title%>" class="dx-sug-item" href="<% if($.isEmpty(val.url)){%>/Search-index-type-1.html?q=<%=val.title%><%}else{%><%=val.url%><%}%>"><%= value %><%if(!data._replace){%><span class="dx-sug-del" data-title="<%=val.title%>" data-index="<%=val.id||i%>">删除</span><%}%></a></li><%})%>'),
        historyHtml: function (t, e, a) {
            var n = this;
            t.html(n.searchTemp({data: {history_search_h: $.resetData(e, 10) || [], _replace: a || !1}}))
        },
        searchBlur: function (t) {
            $(t.currentTarget).parents(".search").removeClass("focus"), $(t.currentTarget).removeClass("text-inputFocus").next().fadeOut("fast")
        },
        searchFn: function (t, e) {
            t = t || window.event;
            var a = t.keyCode || t.which || t.charCode;
            if (38 !== a && 40 !== a && 37 !== a && 39 !== a) {
                var n = $(t.currentTarget), i = this, s = $.trim(n.val()) || "", r = n.next(), o = r.find("ul");
                if (clearTimeout(this.QueryTimer), $.isEmpty(s)) {
                    if (e)return void(e && e());
                    o.html(i.historyHtml(o, i.data.get("history_search_h") || [])), r.find(".hot-search").show()
                } else this.QueryTimer = setTimeout(function () {
                    i.getSearchData({channel: i.data.get("curChannel") || "1", val: s}, o, e)
                }, 500)
            }
        },
        getSearchData: function (t, e, a) {
            var n = this;
            return console.log("用户搜索的字符：", t), $.ajax({
                url: "/Search/getSearchKeyword/",
                data: {channel: t.channel || "1", title: t.val, type: n.data.get("searchType") || ""},
                dataType: "json",
                success: function (i) {
                    e.removeClass("loaderIng-img"), i = {searchList: i || []};
                    i.searchList && i.searchList.length > 0 ? (n.data.set("searchList", i.searchList), n.historyHtml(e, i.searchList, t.val), a && a(i.searchList)) : a && a(i.searchList), e.next().hide()
                },
                error: function (t) {
                }
            })
        },
        closeRegister: function (t) {
            $(".ns-fix-register .ns-icon-close").on("click", function () {
                $(".ns-fix-register").remove()
            })
        },
        setFooter: function (t) {
            function e() {
                var t = [];
                $(".ns-footer .ns-link-list").each(function () {
                    t.push($(this).height())
                }), Array.prototype.max = function () {
                    return Math.max.apply({}, this)
                }, $(".ns-footer .ns-link-list").css("height", t.max())
            }

            e(), $(window).resize(function () {
                e()
            })
        }
    })
}), define("footer", [], function () {
    return DX_CONST.modules.init({
        el: "#footer", template: "", events: {}, init: function () {
            DX_CONST.loader.add(this)
        }, loadfooter: function () {
            var t = this;
            require(["text!template/footer.html"], function (e) {
                t.$el.html(e)
            })
        }
    })
});