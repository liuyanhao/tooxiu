<%--
  Created by IntelliJ IDEA.
  User: liuxicai
  Date: 2018/12/9 0009
  Time: 22:00
  To change this template use File | Settings | File Templates.
--%>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<!DOCTYPE html>
<%
    String path = request.getContextPath();
    String basePath = request.getScheme() + "://"
            + request.getServerName() + ":" + request.getServerPort()
            + path + "/";
%>
<html lang="en">
<base href="<%=basePath%>">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>图休皮草之家_服装设计_服装设计网_服装设计资讯</title>
    <meta name="keywords" content="服装设计,女装设计,服装款式,女装款式,图休皮草之家">
    <meta name="description" content="图休皮草之家是一家规模化、专业、全面的大型皮草服装设计资讯资源网站。">

    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
    <meta http-equiv="X-UA-Compatible" content="IE=Edge">
    <meta name="renderer" content="webkit">
    <link rel="icon" href="favicon.ico" type="image/x-icon">
    <link rel="stylesheet" type="text/css" href="static/front/css/base.css">
    <link rel="stylesheet" type="text/css" href="public/release/style/tooxiu/public.css">
    <link rel="stylesheet" type="text/css" href="public/release/style/tooxiu/index.css">
    <link rel="stylesheet" type="text/css" href="public/release/style/tooxiu/gallery.css">
    <link rel="stylesheet" type="text/css" href="public/release/js/lib/mCustomScrollbar/jquery.mCustomScrollbar.css">
    <link rel="stylesheet" type="text/css" href="public/release/style/tooxiu/userCenter.css">
    <link rel="stylesheet" type="text/css" href="public/release/js/lib/DatePicker/skin/default/datepicker.css">
    <!--[if lt IE 9]>
    <script src="/static/front/js/html5.js"></script>
    <script src="/public/release/js/lib/respond/respond.min.js"></script>
    <link href="/public/release/js/lib/respond/respond-proxy.html" id="respond-proxy" rel="respond-proxy"/>
    <link href="/public/release/js/lib/respond/respond.proxy.gif" id="respond-redirect" rel="respond-redirect"/>
    <script src="/public/release/js/lib/respond/respond.proxy.js"></script>
    <![endif]-->
    <script src="/static/front/js/hm.min.js"></script>
    <script src="/static/front/js/hm.js"></script>
    <script src="/public/release/js/lib/jquery/jquery-1.11.3.min.js"></script>
    <!--同步sso登录 -->
    <script src="/static/front/js/1.js"></script>
    <script src="/static/market/union.core.js"></script>
    <script>
        var is_login = "0";
        var username = "admin";
        var company_name = "";
        var user_id = "1264807";
        window.sessionStorage.favorites = "<%=basePath%>front/favorites-add.do"; //收藏
        window.data_search = false;
        var showLatest = '';
        var getLatestUrl = '';
        var userType = '1';
        window.sessionStorage.backUrl = ''
        window.sessionStorage.staticUrl = '/public';
        window.sessionStorage.tryStatus = 0;
        window.sessionStorage.isTry = 0;
        window.data_search = false;
        var weixin_sdk = {
            "APP_KEY": "wxf48f3ba14ae4c673",
            "CALLBACK": "http:\/\/new.tooxiu.com\/Public\/oAuthCallback\/type\/weixin?backurl=",
            "CSS_HREF": "https:\/\/wechat.tooxiu.com\/public\/dev\/style\/tooxiu\/wxLogin.css"
        };
    </script>
    <script>
        window.DX_CONST === undefined && (window.DX_CONST = {});
        // 图片加载失败用默认图片替换
        function imgError(img) {
            var defaultUrl = '/public/images/tooxiu/home/default.jpg';
            img.onerror = null;
            img.src = defaultUrl;
        }
        function __getWinWidth() {
            if (window.innerWidth) {
                return window.innerWidth;
            }
            if (document.documentElement && document.documentElement.clientWidth) {
                return document.documentElement.clientWidth;
            }
        }
        window.DX_CONST._styleNode = document.createElement("style");
        window.DX_CONST._styleNode.id = 'setCSSheight'; //创建样式元素
        window.DX_CONST._styleNode.type = "text/css";//IE7 8 需要说明样式标签类型
        window.DX_CONST._clientWidth = __getWinWidth();//获取屏幕宽度
        window.DX_CONST._systemTime = 1546756763;//服务器时间戳
        // js添加图片列表高度样式
        autoHeightList();
        // type 是窗口变动传来的
        function autoHeightList(type) {
            var _style = window.DX_CONST._styleNode,
                _borderPadd = 20, 	//常量，图片到单元格的距离和边框总和
                _winWidth = 800,	//屏幕宽度
                _style1 = '.ns-ul-wrap-list .ns-list-img-wrap{',		//五个列表样式
                _style2 = '.ns-pic-ul-wrap-list .ns-list-img-wrap{',
                _style3 = '.exhibition-list .list-img-wrap, .book-pic-list .list-img-wrap{',
                _style4 = '.pic-list .pic-tpl .list-img-wrap{',
                _style5 = '.search-ul-wrap-list.ns-pic-ul-wrap-list .ns-list-img-wrap{'; // 搜索的页面的图片模式1440以上都只排5个

            _winWidth = __getWinWidth();//获取屏幕宽度
            if (type && _winWidth === window.DX_CONST._clientWidth)return; // 宽度没变无需计算
            window.DX_CONST._clientWidth = _winWidth;
            //计算高度
            function bHeight(winW, pm, bs, bl, bp) {
                var winW = winW,    //窗口大小
                    pm = pm || 0,   //列表父级到窗口两边距离总和
                    bs = bs,		//单元格所占百分比
                    bl = bl || 1,	//宽和高的比例 1、1.6
                    bp = bp || 0,	//图片到单元格的距离和边框总和
                    newW = (winW - pm - bp) * bs - bp;	//图片宽度
                if (newW > 310) {		//图片宽度不能大于310
                    return 310 * bl;
                } else {
                    return newW * bl;
                }
            }

            //按照比例输出高度
            function styleText(bs, w, pm) {  //bs高宽比 w页面总宽 pm列表区间距
                var _w = w || _winWidth,
                    _pm = pm || [590, 590, 320, 320],// 两边的margin总和
                    // 针对搜索页面的调整 ns-right-block ns-sdt 的宽
                    mleft = _w <= 1680 ? 220 : 270,	//
                    margin = _w <= 1680 ? 120 : (_w - 1600) / 2 > 160 ? (_w - 1600) / 2 : (160 * 2); // 最大内容宽度调整为1600了

                _style1 += 'height:' + bHeight(_w, _pm[0], bs[0], 1, _borderPadd) + 'px;*height:' + bHeight(_w, _pm[0], bs[0] - 0.01, 1, _borderPadd) + 'px;}';
                _style2 += 'height:' + bHeight(_w, _pm[1], bs[1], 1.6, 20) + 'px;*height:' + bHeight(_w, _pm[1], bs[1] - 0.01, 1.6, 20) + 'px;}';
                _style3 += 'height:' + bHeight(_w, _pm[2], bs[2], 1, 20) + 'px;*height:' + bHeight(_w, _pm[2], bs[2] - 0.01, 1, 20) + 'px;}';
                _style4 += 'height:' + bHeight(_w, _pm[3], bs[3], 1.6, 20) + 'px;*height:' + bHeight(_w, _pm[3], bs[3] - 0.01, 1.6, 20) + 'px;}';
                _style5 += 'height:' + bHeight(_w, margin + mleft, bs[4], 1.6, 20) + 'px;*height:' + bHeight(_w, margin + mleft, bs[4] - 0.01, 1.6, 20) + 'px;}';
                var _text = _style1 + _style2 + _style3 + _style4 + _style5;
                if (_style.styleSheet) _style.styleSheet.cssText = _text;
                else _style.innerHTML = _text;
                if (!document.getElementById("setCSSheight")) document.getElementsByTagName('head')[0].appendChild(_style);
            }

            //针对各种分辨率计算相应的样式
            if (_winWidth <= 800) {
                styleText([0.5, 0.5, 0.5, 0.3318888, 0.5], '', [340, 340, 120, 120]);
            } else if (_winWidth <= 1200) {
                styleText([0.3318888, 0.3318888, 0.3318888, 0.25, 0.3318888], '', [340, 340, 120, 120]);
            } else if (_winWidth <= 1440) {
                styleText([0.25, 0.25, 0.25, 0.25, 0.25], '', [340, 340, 120, 120]);
            } else if (_winWidth <= 1680) {
                styleText([0.25, 0.166666, 0.166666, 0.166666, 0.2], '', [340, 340, 120, 120]);
            } else if (_winWidth <= 1920) {
                styleText([0.25, 0.166666, 0.166666, 0.166666, 0.2]);
            } else if (_winWidth > 1921) {
                styleText([0.166666, 0.166666, 0.166666, 0.166666, 0.2], 1920);
            }
        }
    </script>
    <style id="setCSSheight" type="text/css">
        .ns-ul-wrap-list .ns-list-img-wrap {
            height: 305.5px;
            *height: 292.47999999999996px;
        }

        .ns-pic-ul-wrap-list .ns-list-img-wrap {
            height: 315.1986112px;
            *height: 294.3666112px;
        }

        .exhibition-list .list-img-wrap, .book-pic-list .list-img-wrap {
            height: 241.99895200000003px;
            *height: 226.278952px;
        }

        .pic-list .pic-tpl .list-img-wrap {
            height: 387.19832320000006px;
            *height: 362.0463232px;
        }

        .search-ul-wrap-list.ns-pic-ul-wrap-list .ns-list-img-wrap {
            height: 384.6400000000001px;
            *height: 363.808px;
        }
    </style>
    <style>
        .nav a {
            background: none !important;
        }

        .nav a:hover {
            background: #fff !important;
        }

        .front_footer_save {
            border-radius: 3px !important;
            text-indent: 20px !important;
            width: auto !important;
            padding: 0px 4px 0px 0px !important;
            text-align: center !important;
            font: bold 11px/20px 'Helvetica Neue';, Helvetica, sans-serif !important;
            color: rgb(255, 255, 255) !important;
            background: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMzBweCIgd2lkdGg9IjMwcHgiIHZpZXdCb3g9Ii0xIC0xIDMxIDMxIj48Zz48cGF0aCBkPSJNMjkuNDQ5LDE0LjY2MiBDMjkuNDQ5LDIyLjcyMiAyMi44NjgsMjkuMjU2IDE0Ljc1LDI5LjI1NiBDNi42MzIsMjkuMjU2IDAuMDUxLDIyLjcyMiAwLjA1MSwxNC42NjIgQzAuMDUxLDYuNjAxIDYuNjMyLDAuMDY3IDE0Ljc1LDAuMDY3IEMyMi44NjgsMC4wNjcgMjkuNDQ5LDYuNjAxIDI5LjQ0OSwxNC42NjIiIGZpbGw9IiNmZmYiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIxIj48L3BhdGg+PHBhdGggZD0iTTE0LjczMywxLjY4NiBDNy41MTYsMS42ODYgMS42NjUsNy40OTUgMS42NjUsMTQuNjYyIEMxLjY2NSwyMC4xNTkgNS4xMDksMjQuODU0IDkuOTcsMjYuNzQ0IEM5Ljg1NiwyNS43MTggOS43NTMsMjQuMTQzIDEwLjAxNiwyMy4wMjIgQzEwLjI1MywyMi4wMSAxMS41NDgsMTYuNTcyIDExLjU0OCwxNi41NzIgQzExLjU0OCwxNi41NzIgMTEuMTU3LDE1Ljc5NSAxMS4xNTcsMTQuNjQ2IEMxMS4xNTcsMTIuODQyIDEyLjIxMSwxMS40OTUgMTMuNTIyLDExLjQ5NSBDMTQuNjM3LDExLjQ5NSAxNS4xNzUsMTIuMzI2IDE1LjE3NSwxMy4zMjMgQzE1LjE3NSwxNC40MzYgMTQuNDYyLDE2LjEgMTQuMDkzLDE3LjY0MyBDMTMuNzg1LDE4LjkzNSAxNC43NDUsMTkuOTg4IDE2LjAyOCwxOS45ODggQzE4LjM1MSwxOS45ODggMjAuMTM2LDE3LjU1NiAyMC4xMzYsMTQuMDQ2IEMyMC4xMzYsMTAuOTM5IDE3Ljg4OCw4Ljc2NyAxNC42NzgsOC43NjcgQzEwLjk1OSw4Ljc2NyA4Ljc3NywxMS41MzYgOC43NzcsMTQuMzk4IEM4Ljc3NywxNS41MTMgOS4yMSwxNi43MDkgOS43NDksMTcuMzU5IEM5Ljg1NiwxNy40ODggOS44NzIsMTcuNiA5Ljg0LDE3LjczMSBDOS43NDEsMTguMTQxIDkuNTIsMTkuMDIzIDkuNDc3LDE5LjIwMyBDOS40MiwxOS40NCA5LjI4OCwxOS40OTEgOS4wNCwxOS4zNzYgQzcuNDA4LDE4LjYyMiA2LjM4NywxNi4yNTIgNi4zODcsMTQuMzQ5IEM2LjM4NywxMC4yNTYgOS4zODMsNi40OTcgMTUuMDIyLDYuNDk3IEMxOS41NTUsNi40OTcgMjMuMDc4LDkuNzA1IDIzLjA3OCwxMy45OTEgQzIzLjA3OCwxOC40NjMgMjAuMjM5LDIyLjA2MiAxNi4yOTcsMjIuMDYyIEMxNC45NzMsMjIuMDYyIDEzLjcyOCwyMS4zNzkgMTMuMzAyLDIwLjU3MiBDMTMuMzAyLDIwLjU3MiAxMi42NDcsMjMuMDUgMTIuNDg4LDIzLjY1NyBDMTIuMTkzLDI0Ljc4NCAxMS4zOTYsMjYuMTk2IDEwLjg2MywyNy4wNTggQzEyLjA4NiwyNy40MzQgMTMuMzg2LDI3LjYzNyAxNC43MzMsMjcuNjM3IEMyMS45NSwyNy42MzcgMjcuODAxLDIxLjgyOCAyNy44MDEsMTQuNjYyIEMyNy44MDEsNy40OTUgMjEuOTUsMS42ODYgMTQuNzMzLDEuNjg2IiBmaWxsPSIjZTYwMDIzIj48L3BhdGg+PC9nPjwvc3ZnPg==') 3px 50% / 14px 14px no-repeat rgb(230, 0, 35) !important;
            position: absolute !important;
            opacity: 1 !important;
            z-index: 8675309 !important;
            display: none;
            cursor: pointer !important;
            border: none !important;
            -webkit-font-smoothing: antialiased !important;
            top: 695px;
            left: 754px;
        }

        .front_footer_save {
            border-radius: 12px;
            width: 24px !important;
            height: 24px !important;
            background: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/Pjxzdmcgd2lkdGg9IjI0cHgiIGhlaWdodD0iMjRweCIgdmlld0JveD0iMCAwIDI0IDI0IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxkZWZzPjxtYXNrIGlkPSJtIj48cmVjdCBmaWxsPSIjZmZmIiB4PSIwIiB5PSIwIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHJ4PSI2IiByeT0iNiIvPjxyZWN0IGZpbGw9IiMwMDAiIHg9IjUiIHk9IjUiIHdpZHRoPSIxNCIgaGVpZ2h0PSIxNCIgcng9IjEiIHJ5PSIxIi8+PHJlY3QgZmlsbD0iIzAwMCIgeD0iMTAiIHk9IjAiIHdpZHRoPSI0IiBoZWlnaHQ9IjI0Ii8+PHJlY3QgZmlsbD0iIzAwMCIgeD0iMCIgeT0iMTAiIHdpZHRoPSIyNCIgaGVpZ2h0PSI0Ii8+PC9tYXNrPjwvZGVmcz48cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9IiNmZmYiIG1hc2s9InVybCgjbSkiLz48L3N2Zz4=') 50% 50% / 14px 14px no-repeat rgba(0, 0, 0, 0.4) !important;
            position: absolute !important;
            opacity: 1 !important;
            z-index: 8675309 !important;
            display: none;
            cursor: pointer !important;
            border: none !important;
            top: 693px;
            left: 895px;
        }
    </style>
    <script type="text/javascript" charset="utf-8" async="" data-requirecontext="_"
            data-requiremodule="/public/release/home/main.js" src="/public/release/home/main.js"></script>
    <link rel="stylesheet" href="/public/release/js/lib/layer-v2.0/layer/skin/layer.css" id="layui_layer_skinlayercss" style="">
    <script type="text/javascript" charset="utf-8" async="" data-requirecontext="_"
            data-requiremodule="/public/release/home/main.js" src="/static/front/js/main2.js"></script>
    <script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="gallery"
            src="/public/release/js/lib/gallery/jquery.gallery.js"></script>
    <script type="text/javascript" charset="utf-8" async="" data-requirecontext="_"
            data-requiremodule="mCustomScrollbar"  src="/public/release/js/lib/mCustomScrollbar/jquery.mCustomScrollbar.js"></script>
</head>
<body>
<!-- <div class="top-tip">
     <div class="wrap">
         <i class="icon icon-warn-orange"></i>
         <span>尊敬的用户：图休皮草之家2017春节放假时间为1月23日-2月3日，春节假期图休皮草之家将保证正常开放和您的使用。如需帮助请在线留言，2月4日上班小蝶将第一时间与您联系；若有紧急需要请联系（15888727569）；感谢您的支持，祝您春节愉快！ <a href="javascript:;" onClick="$('body>.top-tip').remove();" class="close" title="关闭"> [关闭]</a></span>
     </div>
 </div> -->
<header id="header" class="nsc-header">
    <div class="js-mk-fixed" id="js-mk-fixed">
        <div class="ns-header">
            <a href="<%=basePath%>front/home.do" class="logo" title="图休皮草之家"></a>
            <!-- <a href="/" class="logo-snow" title="图休皮草之家"></a> 节日logo-->
            <ul class="nav fn-clear">
                <li class="cur ">
                    <div class="inner">
                        <a title="女装" href="<%=basePath%>front/Women">女装</a>
                    </div>
                    <em>/</em>
                </li>
                <li class=" ">
                    <div class="inner">
                        <a title="男装" href="<%=basePath%>front/Men">男装</a>
                    </div>
                    <em>/</em>
                </li>
                <li class=" sel">
                    <div class="inner">
                        <a title="牛仔" href="<%=basePath%>front/Cowboy">牛仔<i
                                class="in-block ns-icon ns-icon-arrow-down"></i></a>
                        <ul class="nav-cons">
                            <li>
                                <a href="<%=basePath%>front/Cowboy-index-channel-35340-extid-32940.html"
                                   title="女装">女装</a>
                            </li>
                            <li>
                                <a href="<%=basePath%>front/Cowboy-index-channel-35340-extid-32939.html"
                                   title="男装">男装</a>
                            </li>
                        </ul>
                    </div>
                    <em>/</em>
                </li>

                <li class=" sel">
                    <div class="inner">
                        <a title="毛织" href="h<%=basePath%>front/Woolen">毛织<i class="in-block ns-icon ns-icon-arrow-down"></i></a>
                        <ul class="nav-cons">
                            <li>
                                <a href="<%=basePath%>front/Woolen-index-channel-35342-extid-32940.html"  title="女装">女装</a>
                            </li>
                            <li>
                                <a href="<%=basePath%>front/Woolen-index-channel-35342-extid-32939.html"  title="男装">男装</a>
                            </li>
                        </ul>
                    </div>
                    <em>/</em>
                </li>
                <li class="">
                    <div class="inner">
                        <a href="<%=basePath%>front/IndustryAlliance-index.html">产业联盟</a>
                    </div>
                    <em>/</em>
                </li>
                <li>
                    <div class="inner">
                        <a href="<%=basePath%>front/Kaleidoscope-brand.html">时尚万花筒</a>
                    </div>
                    <em>/</em>
                </li>
                <li>
                    <div class="inner">
                        <a href="http://fashion.tooxiu.com/" target="_blank">时尚圈</a>
                    </div>
                    <em>/</em>
                </li>
            </ul>
            <div class="right-box">
                <div class="user-op">
                    <div class="btn exit-btn" title="退出" onclick="window.location.href='<%=basePath%>front/public-logout.do'">
                        <span class="ns-icon ns-icon-exit in-block"></span>
                        <p>退出</p>
                    </div>
                    <div class="btn loged-btn">
                        <div class="box-t">
                            <a class="vip" href="<%=basePath%>front/UserCenter.html">
                                <div class="in-block head">
                                    <img src="<%=basePath%>front/Women" alt="">
                                </div>
                                <div class="in-block">
                                    您好！<br>
                                    admin88
                                </div>
                            </a>
                        </div>
                        <!-- <div class="loged-cons">
                              <h4 class="title">您的权限是：</h4>
                              <p>【普通会员，截止日期：无限制】</p>
                             </div>
                       -->
                    </div>
                    <div class="btn search-btn" title="搜索">
                        <!-- <a class="box-t" style="display: block;" href="<%=basePath%>front/SearchPicture-index.html" target="_blank" class="toSearch">
                            <span class="ns-icon ns-icon-search in-block"></span>
                            <p>搜索</p>
                        </a> -->
                        <div class="box-t">
                            <span class="ns-icon ns-icon-search in-block"></span>
                            <p>搜索</p>
                        </div>
                        <div class="search-cons">
                            <form class="search fn-display-inb" id="g-search" name="search"
                                  action="<%=basePath%>front/Search-index-type-1.html" method="get">
                                <div class="input-wrap fn-display-inb">
                                    <input class="text-input" autocomplete="off" id="keyword" type="text" name="q"
                                           placeholder="" value="">
                                    <div class="dx-sug">
                                        <ul></ul>
                                        <div class="hot-search">
                                            热门搜索：
                                            <a href="<%=basePath%>front/Search/index/type/1.html?q=gucci"  rel="nofollow" target="_blank">gucci</a>
                                            <a href="<%=basePath%>front/Search/index/type/1.html?q=%E8%83%8C%E5%B8%A6%E8%A3%A4"
                                               rel="nofollow" target="_blank">背带裤</a>
                                            <a href="<%=basePath%>front/Search/index/type/1.html?q=Sonia-Rykiel"   rel="nofollow" target="_blank">Sonia-Rykiel</a>
                                            <a href="<%=basePath%>front/Search/index/type/1.html?q=Celine"   rel="nofollow" target="_blank">Celine</a>
                                            <a href="<%=basePath%>front/Search/index/type/1.html?q=%E9%80%9A%E5%8B%A4"  rel="nofollow" target="_blank">通勤</a>
                                            <a href="<%=basePath%>front/Search/index/type/1.html?q=%E7%9A%AE%E8%A1%A3%E7%9A%AE%E8%8D%89"  rel="nofollow" target="_blank">皮衣皮草</a>
                                            <a href="<%=basePath%>front/Search/index/type/1.html?q=%E8%BF%9E%E8%A1%A3%E8%A3%99" rel="nofollow" target="_blank">连衣裙</a>
                                            <a href="<%=basePath%>front/Search/index/type/1.html?q=%E6%A3%89%E8%A1%A3%E7%BE%BD%E7%BB%92" rel="nofollow" target="_blank">棉衣羽绒</a>
                                            <a href="<%=basePath%>front/Search/index/type/1.html?q=GIVENCHY"  rel="nofollow" target="_blank">GIVENCHY</a>
                                            <a href="<%=basePath%>front/Search/index/type/1.html?q=Scotch+%26+Soda"
                                               rel="nofollow" target="_blank">Scotch &amp; Soda</a>
                                            <a href="<%=basePath%>front/Search/index/type/1.html?q=%E6%B5%AA%E6%BC%AB"
                                               rel="nofollow" target="_blank">浪漫</a>
                                            <a href="<%=basePath%>front/Search/index/type/1.html?q=T%E6%81%A4"
                                               rel="nofollow" target="_blank">T恤</a>
                                            <a href="<%=basePath%>front/Search/index/type/1.html?q=%E6%AF%9B%E8%A1%AB"
                                               rel="nofollow" target="_blank">毛衫</a>
                                            <a href="<%=basePath%>front/Search/index/type/1.html?q=%E5%BD%BC%E5%BE%97%E6%BD%98%E9%A2%86"
                                               rel="nofollow" target="_blank">彼得潘领</a>
                                            <a href="<%=basePath%>front/Search/index/type/1.html?q=%E5%96%87%E5%8F%AD%E8%A3%A4"
                                               rel="nofollow" target="_blank">喇叭裤</a>
                                            <a href="<%=basePath%>front/Search/index/type/1.html?q=%E8%8B%B1%E4%BC%A6"
                                               rel="nofollow" target="_blank">英伦</a>
                                            <a href="<%=basePath%>front/Search/index/type/1.html?q=%E8%A3%99%E5%AD%90"
                                               rel="nofollow" target="_blank">裙子</a>
                                            <a href="<%=basePath%>front/Search/index/type/1.html?q=%E4%B8%80%E5%AD%97%E8%82%A9"
                                               rel="nofollow" target="_blank">一字肩</a>
                                            <a href="<%=basePath%>front/Search/index/type/1.html?q=%E6%88%B7%E5%A4%96"
                                               rel="nofollow" target="_blank">户外</a>
                                            <a href="<%=basePath%>front/Search/index/type/1.html?q=%E5%A4%96%E5%A5%97"
                                               rel="nofollow" target="_blank">外套</a>
                                        </div>
                                    </div>
                                </div>
                                <input class="btn-input" type="submit" value="搜索">
                            </form>
                        </div>
                    </div>
                </div>
            </div>


            <div class="ns-two-menu fn-clear" id="ns-two-menu">
                <div class="first fn-left">
                    <a href="javascript:;" title="女装全部栏目"><i class="ns-icon ns-icon-list in-block"></i>女装全部栏目</a>
                    <div class="ns-menu-cons" style="display: none;">
                        <a href="javascript:void(0);" class="close"></a>

                        <ul class="ns-tab-navs">
                            <li class="">
                                <i></i>
                                <span class="tit">趋势预测</span>
                                <a href="<%=basePath%>front/SingleItemsTrend-index-cid-1-channel-2085.html">单品趋势</a><a
                                    href="<%=basePath%>front/ColorTrend-index-cid-1-channel-2085.html">色彩趋势</a><a
                                    href="<%=basePath%>front/FabricTrend-index-cid-1-channel-2085.html">面料趋势</a><a
                                    href="<%=basePath%>front/PatternTrend-index-cid-1-channel-2085.html">图案趋势</a><a
                                    href="<%=basePath%>front/SportsTrend-index-cid-1-channel-2085.html">运动趋势</a><a
                                    href="<%=basePath%>front/PlanningTheme-index-cid-1-channel-2085.html">企划主题</a>
                            </li>
                            <li class="">
                                <i></i>
                                <span class="tit">市场情报</span>
                                <a href="<%=basePath%>front/OrderMeeting-index-cid-2-channel-2085.html">订货会</a><a
                                    href="<%=basePath%>front/InVogue-index-cid-2-channel-2085.html">正在流行</a><a
                                    href="<%=basePath%>front/StyleGallery-index-cid-2-channel-2085.html">款式图库</a><a
                                    href="<%=basePath%>front/BrandAlbum-index-cid-2-channel-2085.html">品牌画册</a><a
                                    href="<%=basePath%>front/VectorStyle-index-cid-2-channel-2085.html">矢量款式</a><a
                                    href="<%=basePath%>front/AdvancedDisplay-index-cid-2-channel-2085.html">高级陈列</a><a
                                    href="<%=basePath%>front/DesignerBrand-index-cid-2-channel-2085.html">设计师品牌</a>
                            </li>
                            <li class="">
                                <i></i>
                                <span class="tit">时装发布</span>
                                <a href="<%=basePath%>front/Show-index-cid-3-channel-2085.html">秀场直击</a><a
                                    href="<%=basePath%>front/RunwayTrend-index-cid-3-channel-2085.html">T台趋势</a></li>
                            <li class="">
                                <i></i>
                                <span class="tit">潮流直播</span>
                                <a href="<%=basePath%>front/Exhibition-index-cid-4-channel-2085.html">展会</a><a
                                    href="<%=basePath%>front/StreetStyle-index-cid-4-channel-2085.html">街拍</a><a
                                    href="<%=basePath%>front/StarNews-index-cid-4-channel-2085.html">明星同款</a></li>
                            <li class="">
                                <i></i>
                                <span class="tit">书刊杂志</span>
                                <a href="<%=basePath%>front/FashionMagazine-index-cid-5-channel-2085.html">时尚杂志</a><a
                                    href="<%=basePath%>front/StyleBook-index-cid-5-channel-2085.html">款式书籍</a><a
                                    href="<%=basePath%>front/PatternBook-index-cid-5-channel-2085.html">图案书籍</a></li>
                            <li class="">
                                <i></i>
                                <span class="tit">图案/面辅料</span>
                                <a href="<%=basePath%>front/VectorGallery-index-cid-6-channel-2085-sex-32940.html">矢量图库</a><a
                                    href="<%=basePath%>front/PatternGallery-index-cid-6-channel-2085.html">图案图库</a><a
                                    href="<%=basePath%>front/PatternBook-index-cid-6-channel-2085.html">图案书籍</a><a
                                    href="<%=basePath%>front/Accessories-index-cid-6-channel-2085.html">配饰</a><a
                                    href="<%=basePath%>front/CowboyAccessories-index-cid-6-channel-2085.html">牛仔辅料</a>
                            </li>
                            <li class="last">
                                <i></i>
                                <span class="tit">设计分析</span>
                                <a href="<%=basePath%>front/DesignAnalysis-index-cid-7-subcolumn-131343-channel-2085.html">款式分析</a><a
                                    href="<%=basePath%>front/DesignAnalysis-index-cid-7-subcolumn-131010-channel-2085.html">色彩分析</a><a
                                    href="<%=basePath%>front/DesignAnalysis-index-cid-7-subcolumn-131346-channel-2085.html">材料分析</a><a
                                    href="<%=basePath%>front/DesignAnalysis-index-cid-7-subcolumn-131015-channel-2085.html">工艺分析</a><a
                                    href="<%=basePath%>front/DesignAnalysis-index-cid-7-subcolumn-128748-channel-2085.html">图案分析</a><a
                                    href="<%=basePath%>front/DesignAnalysis-index-cid-7-subcolumn-131347-channel-2085.html">细节分析</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <ul>
                    <li class="sel" style="width:14.2757142857%;">
                        <a class="sub-nav-child" title="趋势预测"
                           href="<%=basePath%>front/SingleItemsTrend-index-cid-1-channel-2085.html">趋势预测<i
                                class="ns-icon ns-icon-arrow-dw in-block"></i></a>
                        <em></em>
                        <ul class="nav-cons">
                            <li>
                                <a href="<%=basePath%>front/SingleItemsTrend-index-cid-1-channel-2085.html"
                                   title="单品趋势">单品趋势</a>
                            </li>
                            <li>
                                <a href="<%=basePath%>front/ColorTrend-index-cid-1-channel-2085.html" title="色彩趋势">色彩趋势</a>
                            </li>
                            <li>
                                <a href="<%=basePath%>front/FabricTrend-index-cid-1-channel-2085.html" title="面料趋势">面料趋势</a>
                            </li>
                            <li>
                                <a href="<%=basePath%>front/PatternTrend-index-cid-1-channel-2085.html" title="图案趋势">图案趋势</a>
                            </li>
                            <li>
                                <a href="<%=basePath%>front/SportsTrend-index-cid-1-channel-2085.html" title="运动趋势">运动趋势</a>
                            </li>
                            <li>
                                <a href="<%=basePath%>front/PlanningTheme-index-cid-1-channel-2085.html" title="企划主题">企划主题</a>
                            </li>
                        </ul>
                    </li>
                    <li class="sel" style="width:14.2757142857%;">
                        <a class="sub-nav-child" title="市场情报"
                           href="<%=basePath%>front/OrderMeeting-index-cid-2-channel-2085.html">市场情报<i
                                class="ns-icon ns-icon-arrow-dw in-block"></i></a>
                        <em></em>
                        <ul class="nav-cons">
                            <li>
                                <a href="<%=basePath%>front/OrderMeeting-index-cid-2-channel-2085.html" title="订货会">订货会</a>
                            </li>
                            <li>
                                <a href="<%=basePath%>front/InVogue-index-cid-2-channel-2085.html"
                                   title="正在流行">正在流行</a>
                            </li>
                            <li>
                                <a href="<%=basePath%>front/StyleGallery-index-cid-2-channel-2085.html" title="款式图库">款式图库</a>
                            </li>
                            <li>
                                <a href="<%=basePath%>front/BrandAlbum-index-cid-2-channel-2085.html" title="品牌画册">品牌画册</a>
                            </li>
                            <li>
                                <a href="<%=basePath%>front/VectorStyle-index-cid-2-channel-2085.html" title="矢量款式">矢量款式</a>
                            </li>
                            <li>
                                <a href="<%=basePath%>front/AdvancedDisplay-index-cid-2-channel-2085.html"
                                   title="高级陈列">高级陈列</a>
                            </li>
                            <li>
                                <a href="<%=basePath%>front/DesignerBrand-index-cid-2-channel-2085.html"
                                   title="设计师品牌">设计师品牌</a>
                            </li>
                        </ul>
                    </li>
                    <li class="sel" style="width:14.2757142857%;">
                        <a class="sub-nav-child" title="时装发布"
                           href="<%=basePath%>front/Show-index-cid-3-channel-2085.html">时装发布<i
                                class="ns-icon ns-icon-arrow-dw in-block"></i></a>
                        <em></em>
                        <ul class="nav-cons">
                            <li>
                                <a href="<%=basePath%>front/Show-index-cid-3-channel-2085.html" title="秀场直击">秀场直击</a>
                            </li>
                            <li>
                                <a href="<%=basePath%>front/RunwayTrend-index-cid-3-channel-2085.html" title="T台趋势">T台趋势</a>
                            </li>
                        </ul>
                    </li>
                    <li class="sel" style="width:14.2757142857%;">
                        <a class="sub-nav-child" title="潮流直播"
                           href="<%=basePath%>front/Exhibition-index-cid-4-channel-2085.html">潮流直播<i
                                class="ns-icon ns-icon-arrow-dw in-block"></i></a>
                        <em></em>
                        <ul class="nav-cons">
                            <li>
                                <a href="<%=basePath%>front/Exhibition-index-cid-4-channel-2085.html"
                                   title="展会">展会</a>
                            </li>
                            <li>
                                <a href="<%=basePath%>front/StreetStyle-index-cid-4-channel-2085.html"
                                   title="街拍">街拍</a>
                            </li>
                            <li>
                                <a href="<%=basePath%>front/StarNews-index-cid-4-channel-2085.html"
                                   title="明星同款">明星同款</a>
                            </li>
                        </ul>
                    </li>
                    <li class="sel" style="width:14.2757142857%;">
                        <a class="sub-nav-child" title="书刊杂志"
                           href="<%=basePath%>front/FashionMagazine-index-cid-5-channel-2085.html">书刊杂志<i
                                class="ns-icon ns-icon-arrow-dw in-block"></i></a>
                        <em></em>
                        <ul class="nav-cons">
                            <li>
                                <a href="<%=basePath%>front/FashionMagazine-index-cid-5-channel-2085.html"
                                   title="时尚杂志">时尚杂志</a>
                            </li>
                            <li>
                                <a href="<%=basePath%>front/StyleBook-index-cid-5-channel-2085.html"
                                   title="款式书籍">款式书籍</a>
                            </li>
                            <li>
                                <a href="<%=basePath%>front/PatternBook-index-cid-5-channel-2085.html" title="图案书籍">图案书籍</a>
                            </li>
                        </ul>
                    </li>
                    <li class="sel" style="width:14.2757142857%;">
                        <a class="sub-nav-child" title="图案/面辅料"
                           href="<%=basePath%>front/VectorGallery-index-cid-6-channel-2085-sex-32940.html">图案/面辅料<i
                                class="ns-icon ns-icon-arrow-dw in-block"></i></a>
                        <em></em>
                        <ul class="nav-cons">
                            <li>
                                <a href="<%=basePath%>front/VectorGallery-index-cid-6-channel-2085-sex-32940.html"
                                   title="矢量图库">矢量图库</a>
                            </li>
                            <li>
                                <a href="<%=basePath%>front/PatternGallery-index-cid-6-channel-2085.html"
                                   title="图案图库">图案图库</a>
                            </li>
                            <li>
                                <a href="<%=basePath%>front/PatternBook-index-cid-6-channel-2085.html" title="图案书籍">图案书籍</a>
                            </li>
                            <li>
                                <a href="<%=basePath%>front/Accessories-index-cid-6-channel-2085.html"
                                   title="配饰">配饰</a>
                            </li>
                            <li>
                                <a href="<%=basePath%>front/CowboyAccessories-index-cid-6-channel-2085.html"
                                   title="牛仔辅料">牛仔辅料</a>
                            </li>
                        </ul>
                    </li>
                    <li class="sel" style="width:14.2757142857%;">
                        <a class="sub-nav-child" title="设计分析"
                           href="<%=basePath%>front/DesignAnalysis-index-cid-7-subcolumn-131343-channel-2085.html">设计分析<i
                                class="ns-icon ns-icon-arrow-dw in-block"></i></a>
                        <em></em>
                        <ul class="nav-cons">
                            <li>
                                <a href="<%=basePath%>front/DesignAnalysis-index-cid-7-subcolumn-131343-channel-2085.html"
                                   title="款式分析">款式分析</a>
                            </li>
                            <li>
                                <a href="<%=basePath%>front/DesignAnalysis-index-cid-7-subcolumn-131010-channel-2085.html"
                                   title="色彩分析">色彩分析</a>
                            </li>
                            <li>
                                <a href="<%=basePath%>front/DesignAnalysis-index-cid-7-subcolumn-131346-channel-2085.html"
                                   title="材料分析">材料分析</a>
                            </li>
                            <li>
                                <a href="<%=basePath%>front/DesignAnalysis-index-cid-7-subcolumn-131015-channel-2085.html"
                                   title="工艺分析">工艺分析</a>
                            </li>
                            <li>
                                <a href="<%=basePath%>front/DesignAnalysis-index-cid-7-subcolumn-128748-channel-2085.html"
                                   title="图案分析">图案分析</a>
                            </li>
                            <li>
                                <a href="<%=basePath%>front/DesignAnalysis-index-cid-7-subcolumn-131347-channel-2085.html"
                                   title="细节分析">细节分析</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</header>

<script type="text/javascript">
    window.sessionStorage.Target = "/public/release/js/tooxiu/home/,index";
    $(function () {
        /*******************1114服装网改版******************/

        //计算bannr的高度
        setBannerH();
        //滚动切换
        setScroll('.js-scroll');
        //计算精彩内容宽高
        setPicH();
        //窗口变化
        $(window).resize(function () {
            setBannerH();
            setScroll('.js-scroll');
            setPicH();
        });
        //计算bannr的高度
        function setBannerH() {
            $('.ns-update-img').css({
                'line-height': $('.ns-update-img').height() + 'px'
            })
        }

        //滚动切换
        function setScroll(abj) {
            //布局
            $(abj).each(function () {
                var $w = $(window).width() - parseInt($('.ns-main-layout').css('margin-left')) * 2,  //padding 160
                    $scale = 0.13,  //设计稿比例
                    $main = $(this).find('.scroll-main'),
                    $moveAbj = $(this).find('.scroll-move'),
                    $size = $moveAbj.find('li').size() + 0.1,
                    $liw = $w * $scale;
                $moveAbj.find('li').css('width', $liw);
                $moveAbj.css('width', $liw * $size);
                $(this).find('.ns-list-img-wrap').css({
                    'width': $moveAbj.find('.ns-list-item-inner').width()
                })
                $moveAbj.find('.ns-list-img').css({
                    'height': $moveAbj.find('.ns-list-item-inner').width(),
                    'line-height': $moveAbj.find('.ns-list-img-wrap').width() + 'px'
                });
                //居中处理
                var $could = $liw * $size - $(this).width();
                $moveAbj.css('margin-left', -$could / 2);
                //是否显示切换按钮
                if ($liw * $size < $(this).width()) {
                    $(this).find('.scroll-btn').hide();
                } else {
                    $(this).find('.scroll-btn').show();
                }
            });
            //切换事件
            var ifMove = false; //是否在运动
            $(abj).find('.scroll-btn').unbind('click').on('click', function (e) {
                var $thisP = $(this).parents(abj),
                    $liw = $thisP.find('li').width(),
                    $size = $thisP.find('li').size(),
                    $main = $thisP.find('.scroll-main');
                if ($(this).hasClass('next')) {
                    $thisP.find('.scroll-btn.prev').show();
                    if (!ifMove) {
                        ifMove = true;
                        $thisP.find('.scroll-move').stop().animate({'margin-left': '-=' + $liw}, 500, function () {
                            if (-parseInt($thisP.find('.scroll-move').css('margin-left')) > $liw * $size - $main.width()) {
                                $thisP.find('.scroll-btn.next').hide();
                            }
                            ;
                            ifMove = false;
                        });
                    }

                } else {
                    $thisP.find('.scroll-btn.next').show();
                    if (!ifMove) {
                        ifMove = true;
                        $thisP.find('.scroll-move').stop().animate({'margin-left': '+=' + $liw}, 500, function () {
                            if (parseInt($thisP.find('.scroll-move').css('margin-left')) > 0) {
                                $thisP.find('.scroll-btn.prev').hide();
                            }
                            ifMove = false;
                        });
                    }
                }
            });
        }

        //计算精彩内容宽高
        function setPicH() {
            var $w = $(window).width() - parseInt($('.ns-main-layout').css('margin-left')) * 2;  //padding 160
            $(window).width() >= 1900 && ($w = 1600);
            var $w1 = $w * 0.11875, //设计稿比例
                $w2 = $w * 0.23125; //设计稿比例
            $('.ns-index-pic-list>li.w1 a').css({'width': $w1, 'height': $w1, 'line-height': $w1 + 'px'});
            $('.ns-index-pic-list>li.w2 a').css({
                'width': $w2,
                'height': $w2 * 40 / 37,
                'line-height': $w2 * 40 / 37 + 'px'
            });
        }

        // 动态添加a标签参数
        function addPam(sel) {
            $(sel).click(function (e) {
                e.preventDefault();
                var mao = $(this).attr('href');
                if (mao.indexOf('?') < 0) {
                    window.open(mao + '?f=homepage');
                } else {
                    window.open(mao + '&f=homepage');
                }
            });
        }

        addPam('.ns-scroll-first .scroll-move a');

        addPam('.ns-pic a');
        $("body").on('click', '.update-con a', function (e) {
            e.preventDefault();
            var mao = $(this).attr('href');
            if (mao.indexOf('?') < 0) {
                window.open(mao + '?f=new');
            } else {
                window.open(mao + '&f=new');
            }
        })
    });
</script>
<input type="hidden" value="2085" id="mainView">
<div class="ns-main-layout g-mtop20 fn-clear">
    <section class="ns-column ns-headline fn-clear">
        <div class="fn-left">
            <a href="http://www.tooxiu.com/Show-folderDetail-channel-2085-fid-106580.html?key=461bqDMKV9AdAVUU1hZk0TfJTUAk4rppF3XoqGyFHl9HX-_-DPfQ">
                <div class="ns-update-img"
                     style="background-image: url('http://sx02.img.tooxiu.com/adption/2018_A/0129/2916/201801291611239645_c_510_510_100.jpg?k=f2f3yD8KlkjojhcSsfWlDu3QlHci4UHSNejW0mi__loI2y6u4tSeNOQ9nGCxmiZbR9Ptyz3IluacbbyMGXF9ST__0EAYwidOv0XWgRvnfVIs-_-SGyNTO8Q1Wr-_-dgi5OlQ'); background-size: auto 100%; background-position: center center; line-height: 325px;">
                </div>
            </a>
            <a href="<%=basePath%>front/Latest-index-channel-2085.html" class="ns-update-title">
                <span class="in-block more"></span>
                <span class="">
                    <span class="num">24127</span><br>最近更新数据
                    <i class="icon icon-new"></i>
                </span>
            </a>
        </div>
        <div class="fn-right">
            <div class="ns-flower-item ns-fade-type fade-type" id="js-gallery">
                <ul>
                    <li style="display: list-item;">
                        <a href="<%=basePath%>front/OrderMeeting-index-cid-2-channel-2085.html" rel="nofollow"
                           target="_blank"
                           data-src="/static/front/images/16-21-08-1575299043.jpg"
                           style="background-image: url('http://union.tooxiu.com//../files/images/2018/1112/16-21-08-1575299043.jpg');"></a>
                    </li>
                </ul>
                <a class="btn prev" href="javascript:;"><i class="icon-commmon"></i></a>
                <a class="btn next" href="javascript:;"><i class="icon-commmon"></i></a>
            </div>
        </div>
    </section>
    <section class="ns-column ns-scroll ns-scroll-first fn-clear">
        <div class="ns-column-tit">
            <div class="">
                <span class="line l"></span>
                <span class="zh-name">精选推荐</span><br>Recommend
                <span class="line r"></span>
            </div>
        </div>

        <div class="ns-column-con">
            <div class="ns-scroll-box js-scroll">
                <div class="scroll-main">
                    <span class="scroll-shadow left"></span>
                    <span class="scroll-shadow right"></span>
                    <ul class="scroll-move fn-clear" style="width: 2067.97px; margin-left: -281.487px;">
                        <li style="width: 204.75px;">
                            <div class="ns-list-item-inner">
                                <div class="ns-list-img-wrap" style="width: 183px;">
                                    <a class="ns-list-img" target="_blank"
                                       href="<%=basePath%>front/Accessories-themeDetail-channel-2085-tid-1440176.html?key=461bqDMKV9AdAVUU1kg__gjGaQBYis-_-85HiLoqD2FGl1CVufUYYM"
                                       title="2018秋冬欧美女装配饰速递：耳环" style="height: 183px; line-height: 183px;">
                                        <img src="/static/front/images/201812291423196118_c_310_310_100.jpg"
                                             onerror="imgError(this)">
                                    </a>
                                </div>
                                <div class="ns-list-info-wrap">
                                    <h2 class="ns-list-item-title" title="2018秋冬欧美女装配饰速递：耳环">
                                        <a href="javascript:void(0);">2018秋冬欧美女装配饰速递：耳环</a>
                                    </h2>
                                    <p class="ns-list-item-attr">2018/19秋冬| 欧美</p>
                                    <a href="<%=basePath%>front/Accessories-themeDetail-channel-2085-tid-1440176.html?key=461bqDMKV9AdAVUU1kg__gjGaQBYis-_-85HiLoqD2FGl1CVufUYYM"
                                       title="查看更多" class="more">more&gt;&gt;</a>
                                </div>
                            </div>
                        </li>
                        <li style="width: 204.75px;">
                            <div class="ns-list-item-inner">
                                <div class="ns-list-img-wrap" style="width: 183px;">
                                    <a class="ns-list-img" target="_blank"
                                       href="<%=basePath%>front/Accessories-themeDetail-channel-2085-tid-1440177.html?key=461bqDMKV9AdAVUU1k1shTbPQRci6e44SyLkomuFGl1CVufVYYM"
                                       title="2018秋冬欧美女装配饰速递：鞋履" style="height: 183px; line-height: 183px;">
                                        <img src="/static/front/images/201812291423461849_c_310_310_100.jpg"
                                             onerror="imgError(this)">
                                    </a>
                                </div>
                                <div class="ns-list-info-wrap">
                                    <h2 class="ns-list-item-title" title="2018秋冬欧美女装配饰速递：鞋履">
                                        <a href="javascript:void(0);">2018秋冬欧美女装配饰速递：鞋履</a>
                                    </h2>
                                    <p class="ns-list-item-attr">2018/19秋冬| 欧美</p>
                                    <a href="<%=basePath%>front/Accessories-themeDetail-channel-2085-tid-1440177.html?key=461bqDMKV9AdAVUU1k1shTbPQRci6e44SyLkomuFGl1CVufVYYM"
                                       title="查看更多" class="more">more&gt;&gt;</a>
                                </div>
                            </div>
                        </li>
                        <li style="width: 204.75px;">
                            <div class="ns-list-item-inner">
                                <div class="ns-list-img-wrap" style="width: 183px;">
                                    <a class="ns-list-img" target="_blank"
                                       href="<%=basePath%>front/RunwayTrend-themeDetail-channel-2085-tid-1442070.html?key=461bqDMKV9AdAVUU1ho40DmaFBQm4rNvF3O6qWuFGl1AV-_-fSYYM"
                                       title="2019早秋色彩分析：暖意Brown（咖啡色系）" style="height: 183px; line-height: 183px;">
                                        <img src="/static/front/images/201901041653198965_c_310_310_100.jpg"
                                             onerror="imgError(this)">
                                    </a>
                                </div>
                                <div class="ns-list-info-wrap">
                                    <h2 class="ns-list-item-title" title="2019早秋色彩分析：暖意Brown（咖啡色系）">
                                        <a href="javascript:void(0);">2019早秋色彩分析：暖意Brown（咖啡色系）</a>
                                    </h2>
                                    <p class="ns-list-item-attr">2019早秋</p>
                                    <a href="<%=basePath%>front/RunwayTrend-themeDetail-channel-2085-tid-1442070.html?key=461bqDMKV9AdAVUU1ho40DmaFBQm4rNvF3O6qWuFGl1AV-_-fSYYM"
                                       title="查看更多" class="more">more&gt;&gt;</a>
                                </div>
                            </div>
                        </li>
                        <li style="width: 204.75px;">
                            <div class="ns-list-item-inner">
                                <div class="ns-list-img-wrap" style="width: 183px;">
                                    <a class="ns-list-img" target="_blank"
                                       href="<%=basePath%>front/BrandAlbum-themeDetail-channel-2085-tid-1441987.html?key=461bqDMKV9AdAVUU1hlr2mDLTEQk5u8__FnbkqWyFGl1DXujVYYM"
                                       title="2018/19秋冬女装Anna Yakovenko 品牌-搭配手册"
                                       style="height: 183px; line-height: 183px;">
                                        <img src="/static/front/images/2019010416184260630710_c_310_310_100.jpg"
                                             onerror="imgError(this)">
                                    </a>
                                </div>
                                <div class="ns-list-info-wrap">
                                    <h2 class="ns-list-item-title" title="2018/19秋冬女装Anna Yakovenko 品牌-搭配手册">
                                        <a href="javascript:void(0);">2018/19秋冬女装Anna Yakovenko 品牌-搭配手册</a>
                                    </h2>
                                    <p class="ns-list-item-attr">2018/19秋冬| 乌克兰</p>
                                    <a href="<%=basePath%>front/BrandAlbum-themeDetail-channel-2085-tid-1441987.html?key=461bqDMKV9AdAVUU1hlr2mDLTEQk5u8__FnbkqWyFGl1DXujVYYM"
                                       title="查看更多" class="more">more&gt;&gt;</a>
                                </div>
                            </div>
                        </li>
                        <li style="width: 204.75px;">
                            <div class="ns-list-item-inner">
                                <div class="ns-list-img-wrap" style="width: 183px;">
                                    <a class="ns-list-img" target="_blank"
                                       href="<%=basePath%>front/BrandAlbum-themeDetail-channel-2085-tid-1441989.html?key=461bqDMKV9AdAVUU1hlugWTJRBVw47JoTHbv8W6FGl1DXujbYYM"
                                       title="2018/19秋冬女装Anna Yakovenko 品牌-搭配手册"
                                       style="height: 183px; line-height: 183px;">
                                        <img src="/static/front/images/2019010416202013329392_c_310_310_100.jpg"
                                             onerror="imgError(this)">
                                    </a>
                                </div>
                                <div class="ns-list-info-wrap">
                                    <h2 class="ns-list-item-title" title="2018/19秋冬女装Anna Yakovenko 品牌-搭配手册">
                                        <a href="javascript:void(0);">2018/19秋冬女装Anna Yakovenko 品牌-搭配手册</a>
                                    </h2>
                                    <p class="ns-list-item-attr">2018/19秋冬| 乌克兰</p>
                                    <a href="<%=basePath%>front/BrandAlbum-themeDetail-channel-2085-tid-1441989.html?key=461bqDMKV9AdAVUU1hlugWTJRBVw47JoTHbv8W6FGl1DXujbYYM"
                                       title="查看更多" class="more">more&gt;&gt;</a>
                                </div>
                            </div>
                        </li>
                        <li style="width: 204.75px;">
                            <div class="ns-list-item-inner">
                                <div class="ns-list-img-wrap" style="width: 183px;">
                                    <a class="ns-list-img" target="_blank"
                                       href="<%=basePath%>front/BrandAlbum-themeDetail-channel-2085-tid-1441992.html?key=461bqDMKV9AdAVUU1kw80jDKRhR04ro6FiTp8mqFGl1DXunQYYM"
                                       title="2018/19秋冬女装Anna Yakovenko 品牌-搭配手册"
                                       style="height: 183px; line-height: 183px;">
                                        <img src="/static/front/images/2019010416214991223799_c_310_310_100.jpg"
                                             onerror="imgError(this)">
                                    </a>
                                </div>
                                <div class="ns-list-info-wrap">
                                    <h2 class="ns-list-item-title" title="2018/19秋冬女装Anna Yakovenko 品牌-搭配手册">
                                        <a href="javascript:void(0);">2018/19秋冬女装Anna Yakovenko 品牌-搭配手册</a>
                                    </h2>
                                    <p class="ns-list-item-attr">2018/19秋冬| 乌克兰</p>
                                    <a href="<%=basePath%>front/BrandAlbum-themeDetail-channel-2085-tid-1441992.html?key=461bqDMKV9AdAVUU1kw80jDKRhR04ro6FiTp8mqFGl1DXunQYYM"
                                       title="查看更多" class="more">more&gt;&gt;</a>
                                </div>
                            </div>
                        </li>
                        <li style="width: 204.75px;">
                            <div class="ns-list-item-inner">
                                <div class="ns-list-img-wrap" style="width: 183px;">
                                    <a class="ns-list-img" target="_blank"
                                       href="<%=basePath%>front/BrandAlbum-themeDetail-channel-2085-tid-1441994.html?key=461bqDMKV9AdAVUU1h1s0zjNREV2tu9vF3G-_-pDaFGl1DXunWYYM"
                                       title="2018/19秋冬女装REDYAZEL品牌-搭配手册" style="height: 183px; line-height: 183px;">
                                        <img src="/static/front/images/2019010416230890441129_c_310_310_100.jpg"
                                             onerror="imgError(this)">
                                    </a>
                                </div>
                                <div class="ns-list-info-wrap">
                                    <h2 class="ns-list-item-title" title="2018/19秋冬女装REDYAZEL品牌-搭配手册">
                                        <a href="javascript:void(0);">2018/19秋冬女装REDYAZEL品牌-搭配手册</a>
                                    </h2>
                                    <p class="ns-list-item-attr">2018/19秋冬| 日本</p>
                                    <a href="<%=basePath%>front/BrandAlbum-themeDetail-channel-2085-tid-1441994.html?key=461bqDMKV9AdAVUU1h1s0zjNREV2tu9vF3G-_-pDaFGl1DXunWYYM"
                                       title="查看更多" class="more">more&gt;&gt;</a>
                                </div>
                            </div>
                        </li>
                        <li style="width: 204.75px;">
                            <div class="ns-list-item-inner">
                                <div class="ns-list-img-wrap" style="width: 183px;">
                                    <a class="ns-list-img" target="_blank"
                                       href="<%=basePath%>front/BrandAlbum-themeDetail-channel-2085-tid-1441995.html?key=461bqDMKV9AdAVUU1h1k0jLIQkJ06OpvFnG59DuFGl1DXunXYYM"
                                       title="2018/19秋冬女装REDYAZEL品牌-搭配手册" style="height: 183px; line-height: 183px;">
                                        <img src="/static/front/images/2019010416242560141600_c_310_310_100.jpg"
                                             onerror="imgError(this)">
                                    </a>
                                </div>
                                <div class="ns-list-info-wrap">
                                    <h2 class="ns-list-item-title" title="2018/19秋冬女装REDYAZEL品牌-搭配手册">
                                        <a href="javascript:void(0);">2018/19秋冬女装REDYAZEL品牌-搭配手册</a>
                                    </h2>
                                    <p class="ns-list-item-attr">2018/19秋冬| 日本</p>
                                    <a href="<%=basePath%>front/BrandAlbum-themeDetail-channel-2085-tid-1441995.html?key=461bqDMKV9AdAVUU1h1k0jLIQkJ06OpvFnG59DuFGl1DXunXYYM"
                                       title="查看更多" class="more">more&gt;&gt;</a>
                                </div>
                            </div>
                        </li>
                        <li style="width: 204.75px;">
                            <div class="ns-list-item-inner">
                                <div class="ns-list-img-wrap" style="width: 183px;">
                                    <a class="ns-list-img" target="_blank"
                                       href="<%=basePath%>front/BrandAlbum-themeDetail-channel-2085-tid-1441998.html?key=461bqDMKV9AdAVUU1h5o1jfLQxIm5LM8GCK__pT6FGl1DXunaYYM"
                                       title="2018/19秋冬女装Hanae Mori品牌-广告大片" style="height: 183px; line-height: 183px;">
                                        <img src="/static/front/images/2019010416260564787646_c_310_310_100.jpg"
                                             onerror="imgError(this)">
                                    </a>
                                </div>
                                <div class="ns-list-info-wrap">
                                    <h2 class="ns-list-item-title" title="2018/19秋冬女装Hanae Mori品牌-广告大片">
                                        <a href="javascript:void(0);">2018/19秋冬女装Hanae Mori品牌-广告大片</a>
                                    </h2>
                                    <p class="ns-list-item-attr">2018/19秋冬| 日本</p>
                                    <a href="<%=basePath%>front/BrandAlbum-themeDetail-channel-2085-tid-1441998.html?key=461bqDMKV9AdAVUU1h5o1jfLQxIm5LM8GCK__pT6FGl1DXunaYYM"
                                       title="查看更多" class="more">more&gt;&gt;</a>
                                </div>
                            </div>
                        </li>
                        <li style="width: 204.75px;">
                            <div class="ns-list-item-inner">
                                <div class="ns-list-img-wrap" style="width: 183px;">
                                    <a class="ns-list-img" target="_blank"
                                       href="<%=basePath%>front/BrandAlbum-themeDetail-channel-2085-tid-1442000.html?key=461bqDMKV9AdAVUU1hhl1jXIQkIl5-_-0yF365qGyFGl1AV-_-DSYYM"
                                       title="2018/19秋冬女装Hanae Mori Manuscrit品牌-广告大片"
                                       style="height: 183px; line-height: 183px;">
                                        <img src="/static/front/images/2019010416281452442432_c_310_310_100.jpg"
                                             onerror="imgError(this)">
                                    </a>
                                </div>
                                <div class="ns-list-info-wrap">
                                    <h2 class="ns-list-item-title" title="2018/19秋冬女装Hanae Mori Manuscrit品牌-广告大片">
                                        <a href="javascript:void(0);">2018/19秋冬女装Hanae Mori Manuscrit品牌-广告大片</a>
                                    </h2>
                                    <p class="ns-list-item-attr">2018/19秋冬| 日本</p>
                                    <a href="<%=basePath%>front/BrandAlbum-themeDetail-channel-2085-tid-1442000.html?key=461bqDMKV9AdAVUU1hhl1jXIQkIl5-_-0yF365qGyFGl1AV-_-DSYYM"
                                       title="查看更多" class="more">more&gt;&gt;</a>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <a href="javascript:void(0);" class="scroll-btn prev"></a>
                    <a href="javascript:void(0);" class="scroll-btn next"></a>
                </div>
            </div>
        </div>
    </section>
    <section class="ns-column ns-pic fn-clear">
        <div class="ns-column-tit">
            <div class="">
                <span class="line l"></span>
                <span class="zh-name">精彩内容</span><br>Wonderful
                <span class="line r"></span>
            </div>
        </div>
        <div class="ns-column-con">
            <ul class="ns-index-pic-list fn-clear">
                <li class="w1">
                    <a href="http://www.tooxiu.com/StyleGallery-themeDetail-channel-2085-tid-1439771.html?key=461bqDMKV9AdAVUU1h5q0mWeR0Mk6LJoHSPu822FGlpLUOfTYYM"
                       target="_blank" class="effect-apollo"
                       style="width: 187.031px; height: 187.031px; line-height: 187.031px;">
                        <img src="/static\front\images/201812281439441315_c_510_510_100.jpg" alt="Roksanda 2019早秋系列"
                             onerror="imgError(this)" title="Roksanda 2019早秋系列">
                        <div class="pic-info-con">
                            <h4 class="title">Roksanda 2019早秋系列</h4>
                            <span class="fn-alpha-img"></span>
                            <p>2019早秋 | 英国</p></div>
                        <div class="light"></div>
                    </a> <a
                        href="http://www.tooxiu.com/StyleGallery-themeDetail-channel-2085-tid-1437605.html?key=461bqDMKV9AdAVUU1kxugGDIFhMq4bM7GSO-_-pGqFGlpFUeDXYYM"
                        target="_blank" class="effect-apollo mt"
                        style="width: 187.031px; height: 187.031px; line-height: 187.031px;">
                    <img src="/static/front/images/201812211601496999_c_510_510_100.jpg" alt="Christian Siriano 2019早秋系列"
                         onerror="imgError(this)" title="Christian Siriano 2019早秋系列">
                    <div class="pic-info-con">
                        <h4 class="title">Christian Siriano 2019早秋系列</h4>
                        <span class="fn-alpha-img"></span>
                        <!--<p>2019早秋 | 美国</p>-->                        </div>
                    <div class="light"></div>
                </a></li>
                <li class="w2">
                    <a href="http://www.tooxiu.com/StyleGallery-themeDetail-channel-2085-tid-1437194.html?key=461bqDMKV9AdAVUU1ktr0TDBEBd34u46THC__82uFGlpFVunWYYM"
                       target="_blank" class="effect-apollo"
                       style="width: 364.219px; height: 393.75px; line-height: 393.75px;">
                        <img src="/static/front/images/201812201503134323_c_510_510_100.jpg" alt="Markarian 2019早秋系列"
                             onerror="imgError(this)" title="Markarian 2019早秋系列">
                        <div class="pic-info-con">
                            <h4 class="title">Markarian 2019早秋系列</h4>
                            <span class="fn-alpha-img"></span>
                            <!--<p>2019早秋 | 美国</p>-->                        </div>
                        <div class="light"></div>
                    </a></li>
                <li class="w1">
                    <a href="http://www.tooxiu.com/StyleGallery-themeDetail-channel-2085-tid-1437197.html?key=461bqDMKV9AdAVUU1ho4hznLQhYh5Og__GSXuoTqFGlpFVunVYYM"
                       target="_blank" class="effect-apollo"
                       style="width: 187.031px; height: 187.031px; line-height: 187.031px;">
                        <img src="/static/front/images/201812201500308365_c_510_510_100.jpg"
                             alt="Narciso Rodriguez 2019早秋系列" onerror="imgError(this)"
                             title="Narciso Rodriguez 2019早秋系列">
                        <div class="pic-info-con">
                            <h4 class="title">Narciso Rodriguez 2019早秋系列</h4>
                            <span class="fn-alpha-img"></span>
                            <!--<p>2019早秋 | 美国</p>-->                        </div>
                        <div class="light"></div>
                    </a> <a
                        href="http://www.tooxiu.com/StyleGallery-themeDetail-channel-2085-tid-1437230.html?key=461bqDMKV9AdAVUU1hg81DOeRxUlte1uTSS__9D2FGlpFVePSYYM"
                        target="_blank" class="effect-apollo mt"
                        style="width: 187.031px; height: 187.031px; line-height: 187.031px;">
                    <img src="/static/front/images/201812201523029805_c_510_510_100.jpg" alt="Alex Perry 2019早秋系列"
                         onerror="imgError(this)" title="Alex Perry 2019早秋系列">
                    <div class="pic-info-con">
                        <h4 class="title">Alex Perry 2019早秋系列</h4>
                        <span class="fn-alpha-img"></span>
                        <!--<p>2019早秋 | 澳大利亚</p>-->                        </div>
                    <div class="light"></div>
                </a></li>
                <li class="w1">
                    <a href="http://www.tooxiu.com/StyleGallery-themeDetail-channel-2085-tid-1437005.html?key=461bqDMKV9AdAVUU1htu2mXLFEVw4-_-8__Gn-_-9oWqFGlpFV-_-DXYYM"
                       target="_blank" class="effect-apollo"
                       style="width: 187.031px; height: 187.031px; line-height: 187.031px;">
                        <img src="/static/front/images/201812200911059863_c_510_510_100.jpg" alt="Rhode Resort 2019早秋系列"
                             onerror="imgError(this)" title="Rhode Resort 2019早秋系列">
                        <div class="pic-info-con">
                            <h4 class="title">Rhode Resort 2019早秋系列</h4>
                            <span class="fn-alpha-img"></span>
                            <!--<p>2019早秋 | 美国</p>-->                        </div>
                        <div class="light"></div>
                    </a> <a
                        href="http://www.tooxiu.com/StyleGallery-themeDetail-channel-2085-tid-1436616.html?key=461bqDMKV9AdAVUU1hdshzPBEx4gsrw6FyHspGyFGlpEUeHUYYM"
                        target="_blank" class="effect-apollo mt"
                        style="width: 187.031px; height: 187.031px; line-height: 187.031px;">
                    <img src="/static/front/images/201812191510426950_c_510_510_100.jpg" alt="AMUR 2019早秋系列"
                         onerror="imgError(this)" title="AMUR 2019早秋系列">
                    <div class="pic-info-con">
                        <h4 class="title">AMUR 2019早秋系列</h4>
                        <span class="fn-alpha-img"></span>
                        <!--<p>2019早秋 | 美国</p>-->                        </div>
                    <div class="light"></div>
                </a></li>
                <li class="w2">
                    <a href="http://www.tooxiu.com/StyleGallery-themeDetail-channel-2085-tid-1436617.html?key=461bqDMKV9AdAVUU1hs40DWbRBEi4Lg9HXS-_-pT6FGlpEUeHVYYM"
                       target="_blank" class="effect-apollo"
                       style="width: 364.219px; height: 393.75px; line-height: 393.75px;">
                        <img src="/static/front/images/201812191509225095_c_510_510_100.jpg" alt="Naeem Khan 2019早秋系列"
                             onerror="imgError(this)" title="Naeem Khan 2019早秋系列">
                        <div class="pic-info-con">
                            <h4 class="title">Naeem Khan 2019早秋系列</h4>
                            <span class="fn-alpha-img"></span>
                            <!--<p>2019早秋 | 纽约州</p>-->                        </div>
                        <div class="light"></div>
                    </a></li>
                <li class="w1 last">
                    <a href="http://www.tooxiu.com/StyleGallery-themeDetail-channel-2085-tid-1436166.html?key=461bqDMKV9AdAVUU1ks-_-hjKeTUAm5Lo4G3Lo8jmFGlpEVubUYYM"
                       target="_blank" class="effect-apollo"
                       style="width: 187.031px; height: 187.031px; line-height: 187.031px;">
                        <img src="/static/front/images/201812181441012009_c_510_510_100.jpg" alt="Derek Lam 2019早秋系列"
                             onerror="imgError(this)" title="Derek Lam 2019早秋系列">
                        <div class="pic-info-con">
                            <h4 class="title">Derek Lam 2019早秋系列</h4>
                            <span class="fn-alpha-img"></span>
                            <!--<p>2019早秋 | 美国</p>-->                        </div>
                        <div class="light"></div>
                    </a> <a
                        href="http://www.tooxiu.com/StyleGallery-themeDetail-channel-2085-tid-1436210.html?key=461bqDMKV9AdAVUU1hdphTbAQkAh5bM4F3e9oj6FGlpEVeHSYYM"
                        target="_blank" class="effect-apollo mt"
                        style="width: 187.031px; height: 187.031px; line-height: 187.031px;">
                    <img src="/static/front/images/201812181506054543_c_510_510_100.jpg" alt="Versace 2019早秋系列"
                         onerror="imgError(this)" title="Versace 2019早秋系列">
                    <div class="pic-info-con">
                        <h4 class="title">Versace 2019早秋系列</h4>
                        <span class="fn-alpha-img"></span>
                        <!--<p>2019早秋 | 意大利</p>-->                        </div>
                    <div class="light"></div>
                </a></li>
            </ul>
        </div>
    </section>
    <section class="ns-column ns-scroll fn-clear">
        <div class="ns-column-tit">
            <div class="">
                <span class="line l"></span>
                <span class="zh-name">精彩图休</span><br>Wonderful
                <span class="line r"></span>
            </div>
        </div>
        <div class="ns-column-con">
            <div class="ns-scroll-box js-scroll">
                <div class="scroll-main">
                    <span class="scroll-shadow left"></span>
                    <span class="scroll-shadow right"></span>
                    <ul class="scroll-move fn-clear" style="width: 4115.48px; margin-left: -1305.24px;">
                        <li style="width: 204.75px;">
                            <div class="ns-list-item-inner">
                                <div class="ns-list-img-wrap" style="width: 183px;">
                                    <a class="ns-list-img" target="_blank"
                                       href="http://www.tooxiu.com/index.php?a=show&amp;m=index&amp;act=news_info&amp;aid=444"
                                       title="图休皮草之家时尚圈入驻锦艺搜布，时尚资讯多平台免费获取！" style="height: 183px; line-height: 183px;">
                                        <img src="/static/front/images/201812291007215027_c_510_510_100.jpg"
                                             onerror="imgError(this)">
                                    </a>
                                </div>
                                <div class="ns-list-info-wrap">
                                    <h2 class="ns-list-item-title" title="图休皮草之家时尚圈入驻锦艺搜布，时尚资讯多平台免费获取！">
                                        <a href="http://www.tooxiu.com/index.php?a=show&amp;m=index&amp;act=news_info&amp;aid=444"
                                           target="_blank">图休皮草之家时尚圈入驻锦艺搜布，时尚资讯多平台免费获取！</a>
                                    </h2>
                                    <p class="ns-list-item-attr">2018/12/29</p>
                                    <a target="_blank"
                                       href="http://www.tooxiu.com/index.php?a=show&amp;m=index&amp;act=news_info&amp;aid=444"
                                       title="查看更多" class="more">more&gt;&gt;</a>
                                </div>
                            </div>
                        </li>
                        <li style="width: 204.75px;">
                            <div class="ns-list-item-inner">
                                <div class="ns-list-img-wrap" style="width: 183px;">
                                    <a class="ns-list-img" target="_blank"
                                       href="http://www.tooxiu.com/index.php?a=show&amp;m=index&amp;act=news_info&amp;aid=443"
                                       title="知道吗？这三天你们自己完成了一场超酷的时尚行为艺术！" style="height: 183px; line-height: 183px;">
                                        <img src="/static/front/images/201812031431414668_c_510_510_100.jpg"
                                             onerror="imgError(this)">
                                    </a>
                                </div>
                                <div class="ns-list-info-wrap">
                                    <h2 class="ns-list-item-title" title="知道吗？这三天你们自己完成了一场超酷的时尚行为艺术！">
                                        <a href="http://www.tooxiu.com/index.php?a=show&amp;m=index&amp;act=news_info&amp;aid=443"
                                           target="_blank">知道吗？这三天你们自己完成了一场超酷的时尚行为艺术！</a>
                                    </h2>
                                    <p class="ns-list-item-attr">2018/12/03</p>
                                    <a target="_blank"
                                       href="http://www.tooxiu.com/index.php?a=show&amp;m=index&amp;act=news_info&amp;aid=443"
                                       title="查看更多" class="more">more&gt;&gt;</a>
                                </div>
                            </div>
                        </li>
                        <li style="width: 204.75px;">
                            <div class="ns-list-item-inner">
                                <div class="ns-list-img-wrap" style="width: 183px;">
                                    <a class="ns-list-img" target="_blank"
                                       href="http://www.tooxiu.com/index.php?a=show&amp;m=index&amp;act=news_info&amp;aid=442"
                                       title="别拦我,，这个「20SS 趋势展」翘班也要去 !" style="height: 183px; line-height: 183px;">
                                        <img src="/static/front/images/201811291430314000_c_510_510_100.jpg"
                                             onerror="imgError(this)">
                                    </a>
                                </div>
                                <div class="ns-list-info-wrap">
                                    <h2 class="ns-list-item-title" title="别拦我,，这个「20SS 趋势展」翘班也要去 !">
                                        <a href="http://www.tooxiu.com/index.php?a=show&amp;m=index&amp;act=news_info&amp;aid=442"
                                           target="_blank">别拦我,，这个「20SS 趋势展」翘班也要去 !</a>
                                    </h2>
                                    <p class="ns-list-item-attr">2018/11/29</p>
                                    <a target="_blank"
                                       href="http://www.tooxiu.com/index.php?a=show&amp;m=index&amp;act=news_info&amp;aid=442"
                                       title="查看更多" class="more">more&gt;&gt;</a>
                                </div>
                            </div>
                        </li>
                        <li style="width: 204.75px;">
                            <div class="ns-list-item-inner">
                                <div class="ns-list-img-wrap" style="width: 183px;">
                                    <a class="ns-list-img" target="_blank"
                                       href="http://www.tooxiu.com/index.php?a=show&amp;m=index&amp;act=news_info&amp;aid=440"
                                       title="图休皮草之家：做全球时尚产业最大的生态平台" style="height: 183px; line-height: 183px;">
                                        <img src="/static/front/images/201810231156357464_c_510_510_100.jpg"
                                             onerror="imgError(this)">
                                    </a>
                                </div>
                                <div class="ns-list-info-wrap">
                                    <h2 class="ns-list-item-title" title="图休皮草之家：做全球时尚产业最大的生态平台">
                                        <a href="http://www.tooxiu.com/index.php?a=show&amp;m=index&amp;act=news_info&amp;aid=440"
                                           target="_blank">图休皮草之家：做全球时尚产业最大的生态平台</a>
                                    </h2>
                                    <p class="ns-list-item-attr">2018/10/23</p>
                                    <a target="_blank"
                                       href="http://www.tooxiu.com/index.php?a=show&amp;m=index&amp;act=news_info&amp;aid=440"
                                       title="查看更多" class="more">more&gt;&gt;</a>
                                </div>
                            </div>
                        </li>
                        <li style="width: 204.75px;">
                            <div class="ns-list-item-inner">
                                <div class="ns-list-img-wrap" style="width: 183px;">
                                    <a class="ns-list-img" target="_blank"
                                       href="http://www.tooxiu.com/index.php?a=show&amp;m=index&amp;act=news_info&amp;aid=439"
                                       title="2018温州时尚定制展，10月26日-28日相约走起！" style="height: 183px; line-height: 183px;">
                                        <img src="/static/front/images/201810231109581711_c_510_510_100.jpg"
                                             onerror="imgError(this)">
                                    </a>
                                </div>
                                <div class="ns-list-info-wrap">
                                    <h2 class="ns-list-item-title" title="2018温州时尚定制展，10月26日-28日相约走起！">
                                        <a href="http://www.tooxiu.com/index.php?a=show&amp;m=index&amp;act=news_info&amp;aid=439"
                                           target="_blank">2018温州时尚定制展，10月26日-28日相约走起！</a>
                                    </h2>
                                    <p class="ns-list-item-attr">2018/10/23</p>
                                    <a target="_blank"
                                       href="http://www.tooxiu.com/index.php?a=show&amp;m=index&amp;act=news_info&amp;aid=439"
                                       title="查看更多" class="more">more&gt;&gt;</a>
                                </div>
                            </div>
                        </li>
                        <li style="width: 204.75px;">
                            <div class="ns-list-item-inner">
                                <div class="ns-list-img-wrap" style="width: 183px;">
                                    <a class="ns-list-img" target="_blank"
                                       href="http://www.tooxiu.com/Index/show/act/news_info/aid/427"
                                       title="来到这里，一次过满足你N个打卡愿望" style="height: 183px; line-height: 183px;">
                                        <img src="/static/front/images/201810231036521801_c_510_510_100.jpg"
                                             onerror="imgError(this)">
                                    </a>
                                </div>
                                <div class="ns-list-info-wrap">
                                    <h2 class="ns-list-item-title" title="来到这里，一次过满足你N个打卡愿望">
                                        <a href="http://www.tooxiu.com/Index/show/act/news_info/aid/427"
                                           target="_blank">来到这里，一次过满足你N个打卡愿望</a>
                                    </h2>
                                    <p class="ns-list-item-attr">2018/10/23</p>
                                    <a target="_blank" href="http://www.tooxiu.com/Index/show/act/news_info/aid/427"
                                       title="查看更多" class="more">more&gt;&gt;</a>
                                </div>
                            </div>
                        </li>
                        <li style="width: 204.75px;">
                            <div class="ns-list-item-inner">
                                <div class="ns-list-img-wrap" style="width: 183px;">
                                    <a class="ns-list-img" target="_blank"
                                       href="http://www.tooxiu.com/index.php?a=show&amp;m=index&amp;act=news_info&amp;aid=435"
                                       title="除了时装周外，这几天这个服装展会你可别错过了！" style="height: 183px; line-height: 183px;">
                                        <img src="/static/front/images/201809281227087982_c_510_510_100.jpg"
                                             onerror="imgError(this)">
                                    </a>
                                </div>
                                <div class="ns-list-info-wrap">
                                    <h2 class="ns-list-item-title" title="除了时装周外，这几天这个服装展会你可别错过了！">
                                        <a href="http://www.tooxiu.com/index.php?a=show&amp;m=index&amp;act=news_info&amp;aid=435"
                                           target="_blank">除了时装周外，这几天这个服装展会你可别错过了！</a>
                                    </h2>
                                    <p class="ns-list-item-attr">2018/09/28</p>
                                    <a target="_blank"
                                       href="http://www.tooxiu.com/index.php?a=show&amp;m=index&amp;act=news_info&amp;aid=435"
                                       title="查看更多" class="more">more&gt;&gt;</a>
                                </div>
                            </div>
                        </li>
                        <li style="width: 204.75px;">
                            <div class="ns-list-item-inner">
                                <div class="ns-list-img-wrap" style="width: 183px;">
                                    <a class="ns-list-img" target="_blank"
                                       href="http://www.tooxiu.com/index.php?a=show&amp;m=index&amp;act=news_info&amp;aid=434"
                                       title="8月28日，图休皮草之家华东总部盛大开业！" style="height: 183px; line-height: 183px;">
                                        <img src="/static/front/images/201808291518294907_c_510_510_100.jpg"
                                             onerror="imgError(this)">
                                    </a>
                                </div>
                                <div class="ns-list-info-wrap">
                                    <h2 class="ns-list-item-title" title="8月28日，图休皮草之家华东总部盛大开业！">
                                        <a href="http://www.tooxiu.com/index.php?a=show&amp;m=index&amp;act=news_info&amp;aid=434"
                                           target="_blank">8月28日，图休皮草之家华东总部盛大开业！</a>
                                    </h2>
                                    <p class="ns-list-item-attr">2018/08/29</p>
                                    <a target="_blank"
                                       href="http://www.tooxiu.com/index.php?a=show&amp;m=index&amp;act=news_info&amp;aid=434"
                                       title="查看更多" class="more">more&gt;&gt;</a>
                                </div>
                            </div>
                        </li>
                        <li style="width: 204.75px;">
                            <div class="ns-list-item-inner">
                                <div class="ns-list-img-wrap" style="width: 183px;">
                                    <a class="ns-list-img" target="_blank"
                                       href="http://www.tooxiu.com/index.php?a=show&amp;m=index&amp;act=news_info&amp;aid=423"
                                       title="同行也可是亲家, 韩国潮流趋势信息集团PFIN与图休皮草之家签署战略合作协议"
                                       style="height: 183px; line-height: 183px;">
                                        <img src="/static/front/images/201805241448306176_c_510_510_100.jpg"
                                             onerror="imgError(this)">
                                    </a>
                                </div>
                                <div class="ns-list-info-wrap">
                                    <h2 class="ns-list-item-title" title="同行也可是亲家, 韩国潮流趋势信息集团PFIN与图休皮草之家签署战略合作协议">
                                        <a href="http://www.tooxiu.com/index.php?a=show&amp;m=index&amp;act=news_info&amp;aid=423"
                                           target="_blank">同行也可是亲家, 韩国潮流趋势信息集团PFIN与图休皮草之家签署战略合作协议</a>
                                    </h2>
                                    <p class="ns-list-item-attr">2018/05/24</p>
                                    <a target="_blank"
                                       href="http://www.tooxiu.com/index.php?a=show&amp;m=index&amp;act=news_info&amp;aid=423"
                                       title="查看更多" class="more">more&gt;&gt;</a>
                                </div>
                            </div>
                        </li>
                        <li style="width: 204.75px;">
                            <div class="ns-list-item-inner">
                                <div class="ns-list-img-wrap" style="width: 183px;">
                                    <a class="ns-list-img" target="_blank"
                                       href="http://tooxiu.com/index/show/act/news_info/aid/277.html"
                                       title="图休动态| 2017SS「春·醒」深圳站趋势发布会完美收官！"
                                       style="height: 183px; line-height: 183px;">
                                        <img src="/static/front/images/201611281156592645_c_510_510_100.jpg"
                                             onerror="imgError(this)">
                                    </a>
                                </div>
                                <div class="ns-list-info-wrap">
                                    <h2 class="ns-list-item-title" title="图休动态| 2017SS「春·醒」深圳站趋势发布会完美收官！">
                                        <a href="http://tooxiu.com/index/show/act/news_info/aid/277.html"
                                           target="_blank">图休动态| 2017SS「春·醒」深圳站趋势发布会完美收官！</a>
                                    </h2>
                                    <p class="ns-list-item-attr">2017/07/27</p>
                                    <a target="_blank" href="http://tooxiu.com/index/show/act/news_info/aid/277.html"
                                       title="查看更多" class="more">more&gt;&gt;</a>
                                </div>
                            </div>
                        </li>
                        <li style="width: 204.75px;">
                            <div class="ns-list-item-inner">
                                <div class="ns-list-img-wrap" style="width: 183px;">
                                    <a class="ns-list-img" target="_blank"
                                       href="http://www.tooxiu.com/index.php?a=show&amp;m=index&amp;act=news_info&amp;aid=378"
                                       title="这可能是亚洲南部颜值最高的展会！图休时尚生态馆闪耀2017深圳服交会"
                                       style="height: 183px; line-height: 183px;">
                                        <img src="/static/front/images/201708231102234060_c_510_510_100.jpg"
                                             onerror="imgError(this)">
                                    </a>
                                </div>
                                <div class="ns-list-info-wrap">
                                    <h2 class="ns-list-item-title" title="这可能是亚洲南部颜值最高的展会！图休时尚生态馆闪耀2017深圳服交会">
                                        <a href="http://www.tooxiu.com/index.php?a=show&amp;m=index&amp;act=news_info&amp;aid=378"
                                           target="_blank">这可能是亚洲南部颜值最高的展会！图休时尚生态馆闪耀2017深圳服交会</a>
                                    </h2>
                                    <p class="ns-list-item-attr">2017/08/16</p>
                                    <a target="_blank"
                                       href="http://www.tooxiu.com/index.php?a=show&amp;m=index&amp;act=news_info&amp;aid=378"
                                       title="查看更多" class="more">more&gt;&gt;</a>
                                </div>
                            </div>
                        </li>
                        <li style="width: 204.75px;">
                            <div class="ns-list-item-inner">
                                <div class="ns-list-img-wrap" style="width: 183px;">
                                    <a class="ns-list-img" target="_blank"
                                       href="http://www.tooxiu.com/index.php?a=show&amp;m=index&amp;act=news_info&amp;aid=379"
                                       title="图休皮草之家：未来已来，趋势、原创、科技的完美落地" style="height: 183px; line-height: 183px;">
                                        <img src="/static/front/images/201708231055409047_c_510_510_100.jpg"
                                             onerror="imgError(this)">
                                    </a>
                                </div>
                                <div class="ns-list-info-wrap">
                                    <h2 class="ns-list-item-title" title="图休皮草之家：未来已来，趋势、原创、科技的完美落地">
                                        <a href="http://www.tooxiu.com/index.php?a=show&amp;m=index&amp;act=news_info&amp;aid=379"
                                           target="_blank">图休皮草之家：未来已来，趋势、原创、科技的完美落地</a>
                                    </h2>
                                    <p class="ns-list-item-attr">2017/08/16</p>
                                    <a target="_blank"
                                       href="http://www.tooxiu.com/index.php?a=show&amp;m=index&amp;act=news_info&amp;aid=379"
                                       title="查看更多" class="more">more&gt;&gt;</a>
                                </div>
                            </div>
                        </li>
                        <li style="width: 204.75px;">
                            <div class="ns-list-item-inner">
                                <div class="ns-list-img-wrap" style="width: 183px;">
                                    <a class="ns-list-img" target="_blank"
                                       href="http://www.tooxiu.com/index.php?a=show&amp;m=index&amp;act=news_info&amp;aid=381"
                                       title="深圳市纺织行业协会30周年庆典—寻找中国“好设计”“好面料”“好制造”3大赛事隆重开启"
                                       style="height: 183px; line-height: 183px;">
                                        <img src="/static/front/images/201708231108267508_c_510_510_100.jpg"
                                             onerror="imgError(this)">
                                    </a>
                                </div>
                                <div class="ns-list-info-wrap">
                                    <h2 class="ns-list-item-title" title="深圳市纺织行业协会30周年庆典—寻找中国“好设计”“好面料”“好制造”3大赛事隆重开启">
                                        <a href="http://www.tooxiu.com/index.php?a=show&amp;m=index&amp;act=news_info&amp;aid=381"
                                           target="_blank">深圳市纺织行业协会30周年庆典—寻找中国“好设计”“好面料”“好制造”3大赛事隆重开启</a>
                                    </h2>
                                    <p class="ns-list-item-attr">2017/08/21</p>
                                    <a target="_blank"
                                       href="http://www.tooxiu.com/index.php?a=show&amp;m=index&amp;act=news_info&amp;aid=381"
                                       title="查看更多" class="more">more&gt;&gt;</a>
                                </div>
                            </div>
                        </li>
                        <li style="width: 204.75px;">
                            <div class="ns-list-item-inner">
                                <div class="ns-list-img-wrap" style="width: 183px;">
                                    <a class="ns-list-img" target="_blank"
                                       href="http://www.tooxiu.com/index.php?a=show&amp;m=index&amp;act=news_info&amp;aid=383"
                                       title="7购往来上线暨2017“寻找中国好面料、好设计、好制造”三大赛启动仪式隆重举办"
                                       style="height: 183px; line-height: 183px;">
                                        <img src="/static/front/images/201708281100234716_c_510_510_100.jpg"
                                             onerror="imgError(this)">
                                    </a>
                                </div>
                                <div class="ns-list-info-wrap">
                                    <h2 class="ns-list-item-title" title="7购往来上线暨2017“寻找中国好面料、好设计、好制造”三大赛启动仪式隆重举办">
                                        <a href="http://www.tooxiu.com/index.php?a=show&amp;m=index&amp;act=news_info&amp;aid=383"
                                           target="_blank">7购往来上线暨2017“寻找中国好面料、好设计、好制造”三大赛启动仪式隆重举办</a>
                                    </h2>
                                    <p class="ns-list-item-attr">2017/08/28</p>
                                    <a target="_blank"
                                       href="http://www.tooxiu.com/index.php?a=show&amp;m=index&amp;act=news_info&amp;aid=383"
                                       title="查看更多" class="more">more&gt;&gt;</a>
                                </div>
                            </div>
                        </li>
                        <li style="width: 204.75px;">
                            <div class="ns-list-item-inner">
                                <div class="ns-list-img-wrap" style="width: 183px;">
                                    <a class="ns-list-img" target="_blank"
                                       href="http://www.tooxiu.com/index.php?a=show&amp;m=index&amp;act=news_info&amp;aid=384"
                                       title="关于公开招募“2017寻找‘中国好面料’、‘中国好设计’、‘中国好制造’三大赛”百名女装经销商大众评委的公告"
                                       style="height: 183px; line-height: 183px;">
                                        <img src="/static/front/images/201708281546306287_c_510_510_100.jpg"
                                             onerror="imgError(this)">
                                    </a>
                                </div>
                                <div class="ns-list-info-wrap">
                                    <h2 class="ns-list-item-title"
                                        title="关于公开招募“2017寻找‘中国好面料’、‘中国好设计’、‘中国好制造’三大赛”百名女装经销商大众评委的公告">
                                        <a href="http://www.tooxiu.com/index.php?a=show&amp;m=index&amp;act=news_info&amp;aid=384"
                                           target="_blank">关于公开招募“2017寻找‘中国好面料’、‘中国好设计’、‘中国好制造’三大赛”百名女装经销商大众评委的公告</a>
                                    </h2>
                                    <p class="ns-list-item-attr">2017/08/28</p>
                                    <a target="_blank"
                                       href="http://www.tooxiu.com/index.php?a=show&amp;m=index&amp;act=news_info&amp;aid=384"
                                       title="查看更多" class="more">more&gt;&gt;</a>
                                </div>
                            </div>
                        </li>
                        <li style="width: 204.75px;">
                            <div class="ns-list-item-inner">
                                <div class="ns-list-img-wrap" style="width: 183px;">
                                    <a class="ns-list-img" target="_blank"
                                       href="http://www.tooxiu.com/index.php?a=show&amp;m=index&amp;act=news_info&amp;aid=387"
                                       title="官网上线|多方力量共推“2017寻找‘中国好面料、好设计、好制造’三大赛”举办"
                                       style="height: 183px; line-height: 183px;">
                                        <img src="/static/front/images/201709051130221473_c_510_510_100.jpg"
                                             onerror="imgError(this)">
                                    </a>
                                </div>
                                <div class="ns-list-info-wrap">
                                    <h2 class="ns-list-item-title" title="官网上线|多方力量共推“2017寻找‘中国好面料、好设计、好制造’三大赛”举办">
                                        <a href="http://www.tooxiu.com/index.php?a=show&amp;m=index&amp;act=news_info&amp;aid=387"
                                           target="_blank">官网上线|多方力量共推“2017寻找‘中国好面料、好设计、好制造’三大赛”举办</a>
                                    </h2>
                                    <p class="ns-list-item-attr">2017/09/05</p>
                                    <a target="_blank"
                                       href="http://www.tooxiu.com/index.php?a=show&amp;m=index&amp;act=news_info&amp;aid=387"
                                       title="查看更多" class="more">more&gt;&gt;</a>
                                </div>
                            </div>
                        </li>
                        <li style="width: 204.75px;">
                            <div class="ns-list-item-inner">
                                <div class="ns-list-img-wrap" style="width: 183px;">
                                    <a class="ns-list-img" target="_blank"
                                       href="http://www.tooxiu.com/index.php?a=show&amp;m=index&amp;act=news_info&amp;aid=388"
                                       title="图休客户周 | 毫无防备的公开课，引迷弟迷妹萌疯狂比心" style="height: 183px; line-height: 183px;">
                                        <img src="/static/front/images/201709070958584769_c_510_510_100.jpg"
                                             onerror="imgError(this)">
                                    </a>
                                </div>
                                <div class="ns-list-info-wrap">
                                    <h2 class="ns-list-item-title" title="图休客户周 | 毫无防备的公开课，引迷弟迷妹萌疯狂比心">
                                        <a href="http://www.tooxiu.com/index.php?a=show&amp;m=index&amp;act=news_info&amp;aid=388"
                                           target="_blank">图休客户周 | 毫无防备的公开课，引迷弟迷妹萌疯狂比心</a>
                                    </h2>
                                    <p class="ns-list-item-attr">2017/09/07</p>
                                    <a target="_blank"
                                       href="http://www.tooxiu.com/index.php?a=show&amp;m=index&amp;act=news_info&amp;aid=388"
                                       title="查看更多" class="more">more&gt;&gt;</a>
                                </div>
                            </div>
                        </li>
                        <li style="width: 204.75px;">
                            <div class="ns-list-item-inner">
                                <div class="ns-list-img-wrap" style="width: 183px;">
                                    <a class="ns-list-img" target="_blank"
                                       href="http://www.tooxiu.com/index.php?a=show&amp;m=index&amp;act=news_info&amp;aid=389"
                                       title="图休客户周 | 广深株三地联动上万客户齐参与，有你们更精彩！"
                                       style="height: 183px; line-height: 183px;">
                                        <img src="/static/front/images/201709111047581480_c_510_510_100.jpg"
                                             onerror="imgError(this)">
                                    </a>
                                </div>
                                <div class="ns-list-info-wrap">
                                    <h2 class="ns-list-item-title" title="图休客户周 | 广深株三地联动上万客户齐参与，有你们更精彩！">
                                        <a href="http://www.tooxiu.com/index.php?a=show&amp;m=index&amp;act=news_info&amp;aid=389"
                                           target="_blank">图休客户周 | 广深株三地联动上万客户齐参与，有你们更精彩！</a>
                                    </h2>
                                    <p class="ns-list-item-attr">2017/09/11</p>
                                    <a target="_blank"
                                       href="http://www.tooxiu.com/index.php?a=show&amp;m=index&amp;act=news_info&amp;aid=389"
                                       title="查看更多" class="more">more&gt;&gt;</a>
                                </div>
                            </div>
                        </li>
                        <li style="width: 204.75px;">
                            <div class="ns-list-item-inner">
                                <div class="ns-list-img-wrap" style="width: 183px;">
                                    <a class="ns-list-img" target="_blank"
                                       href="http://www.tooxiu.com/index.php?a=show&amp;m=index&amp;act=news_info&amp;aid=390"
                                       title="图休教育 | 这份日本市场考察攻略，你值得收藏 （文末有福利）"
                                       style="height: 183px; line-height: 183px;">
                                        <img src="/static/front/images/201709151734018449_c_510_510_100.jpg"
                                             onerror="imgError(this)">
                                    </a>
                                </div>
                                <div class="ns-list-info-wrap">
                                    <h2 class="ns-list-item-title" title="图休教育 | 这份日本市场考察攻略，你值得收藏 （文末有福利）">
                                        <a href="http://www.tooxiu.com/index.php?a=show&amp;m=index&amp;act=news_info&amp;aid=390"
                                           target="_blank">图休教育 | 这份日本市场考察攻略，你值得收藏 （文末有福利）</a>
                                    </h2>
                                    <p class="ns-list-item-attr">2017/09/15</p>
                                    <a target="_blank"
                                       href="http://www.tooxiu.com/index.php?a=show&amp;m=index&amp;act=news_info&amp;aid=390"
                                       title="查看更多" class="more">more&gt;&gt;</a>
                                </div>
                            </div>
                        </li>
                        <li style="width: 204.75px;">
                            <div class="ns-list-item-inner">
                                <div class="ns-list-img-wrap" style="width: 183px;">
                                    <a class="ns-list-img" target="_blank"
                                       href="http://www.tooxiu.com/index.php?a=show&amp;m=index&amp;act=news_info&amp;aid=391"
                                       title="重磅| 2017寻找“中国好面料•好设计•好制造”三大赛候选名单公布"
                                       style="height: 183px; line-height: 183px;">
                                        <img src="/static/front/images/201710081717397859_c_510_510_100.jpg"
                                             onerror="imgError(this)">
                                    </a>
                                </div>
                                <div class="ns-list-info-wrap">
                                    <h2 class="ns-list-item-title" title="重磅| 2017寻找“中国好面料•好设计•好制造”三大赛候选名单公布">
                                        <a href="http://www.tooxiu.com/index.php?a=show&amp;m=index&amp;act=news_info&amp;aid=391"
                                           target="_blank">重磅| 2017寻找“中国好面料•好设计•好制造”三大赛候选名单公布</a>
                                    </h2>
                                    <p class="ns-list-item-attr">2017/10/08</p>
                                    <a target="_blank"
                                       href="http://www.tooxiu.com/index.php?a=show&amp;m=index&amp;act=news_info&amp;aid=391"
                                       title="查看更多" class="more">more&gt;&gt;</a>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <a href="javascript:void(0);" class="scroll-btn prev"></a>
                    <a href="javascript:void(0);" class="scroll-btn next"></a>
                </div>
            </div>
        </div>
    </section>
</div>
<div class="side-bar" id="side-bar">
    <div class="side-main">
        <div class="user "><a target="_blank" title="My Diction" href="<%=basePath%>front/UserCenter.html"><i
                class="icon icon-user"></i></a><span class="hover-box"><span class="inner">My Diction</span></span>
        </div>
        <ul class="side-bar-item top">
            <!-- <li><a class="side-search" target="_blank" href="/UserCenter-searchHistory.html"><span class="line"></span></a></li> -->
            <li title="APP"><a class="phone-code"><span class="line"></span><span class="hover-box code"><span
                    class="inner"><em></em><i class="code-img code-img2"></i></span></span></a></li>

            <li>
                <a class="side-fav mod_collect" target="_blank" href="<%=basePath%>front/UserCenter-collection.html">
                    <i class="font_family icon-favorite_full2 mod_collect_detail"></i>
                    <span class="line"></span>
                    <span class="hover-box">
						<span class="inner">我的收藏</span>
					</span>
                </a>
            </li>
            <li><a class="side-footprint" target="_blank" href="<%=basePath%>front/UserCenter-footprint.html"><span
                    class="line"></span><span class="hover-box"><span class="inner">我的浏览</span></span></a></li>
            <!-- <li><a class="side-order" target="_blank" href="/UserCenter-subscribe.html"><span class="line"></span></a></li> -->
            <li title="公众号"><a class="side-code" id="qr-code"><span class="line"></span><span
                    class="hover-box code"><span class="inner"><em></em><i class="code-img"></i></span></span></a></li>
            <li><a class="side-tp"><span class="line"></span><span class="hover-box"><span class="inner"><pre>400-688-0836</pre></span></span></a>
            </li>
            <li><a class="side-service" id="online-im"><span class="line"></span><span class="hover-box"><span
                    class="inner">在线客服</span></span></a></li>
            <li><a class="side-proposal" id="proposal-layer"><span class="line"></span><span class="hover-box"><span
                    class="inner">我有建议</span></span></a></li>
        </ul>
    </div>
    <ul class="side-bar-item bottom">
        <!-- <li><a class="side-feedback" href="tencent://message/?uin=940160"><span class="line"></span></a></li> -->
        <li style="display: none;"><a id="js-back-top" title="返回顶部" class="side-top" href="javascript:;"><span
                class="line"></span><span class="hover-box"><span class="inner">返回顶部</span></span></a></li>
    </ul>
</div>

<footer class="ns-footer" id="footer">
    <div class="ns-main-layout fn-clear">
        <div class="ns-f-top">
            <dl class="ns-link-list col1" style="height: 112px;">
                <dt>旗下产品</dt>
                <dd class="fn-clear">
                    <div class="row">
                        <a href="http://epd.tooxiu.com/" target="_blank" title="服装趋势">服装趋势</a>
                        <a href="http://www.tooxiu.com/" target="_blank" title="图休服装">图休服装</a>
                    </div>
                    <div class="row">
                        <a href="http://epd.xiebaowang.com/" target="_blank" title="鞋包趋势">鞋包趋势</a>
                        <a href="http://www.xiebaowang.com/" target="_blank" title="图休鞋业">图休鞋业</a>
                    </div>
                    <div class="row">
                        <a href="http://edu.tooxiu.com/" target="_blank" title="图休教育">图休教育</a>
                        <a href="http://bags.tooxiu.com/" target="_blank" title="图休箱包">图休箱包</a>
                    </div>
                    <div class="row">
                        <a href="http://www.dmd2b.com/" target="_blank" title="图休服装">Diction Mall</a>
                    </div>
                </dd>
            </dl>
            <dl class="ns-link-list col2" style="height: 112px;">
                <dt>关于我们</dt>
                <dd class="fn-clear">
                    <div class="row">
                        <a target="_blank" href="http://www.tooxiu.com/index/show/act/introduction.html">关于图休</a>
                    </div>
                    <div class="row">
                        <a target="_blank" href="http://www.tooxiu.com/index/show/act/patners.html">合作伙伴</a>
                    </div>
                    <div class="row">
                        <a target="_blank" href="http://www.tooxiu.com/index/show/act/ad_service.html">广告服务</a>
                    </div>
                    <div class="row">
                        <a target="_blank" href="http://www.tooxiu.com/index/show/act/honor.html">企业荣誉</a>
                    </div>
                    <div class="row">
                        <a target="_blank" href="http://www.tooxiu.com/index/show/act/news.html">企业动态</a>
                    </div>
                    <div class="row">
                        <a target="_blank" href="http://www.tooxiu.com/index/show/act/contact_us_map.html">联系我们</a>
                    </div>
                    <div class="row">
                        <a target="_blank" href="http://www.tooxiu.com/index/show/act/product_fashion.html">产品介绍</a>
                    </div>
                    <div class="row">
                        <a target="_blank" href="http://www.tooxiu.com/index/show/act/join.html">加入我们</a>
                    </div>
                    <div class="row">
                        <a target="_blank" href="http://www.tooxiu.com/huodong/2015/0812/">图休团队</a>
                    </div>
                    <div class="row">
                        <a target="_blank" href="http://www.tooxiu.com/index/show/act/case.html">客户案例</a>
                    </div>
                </dd>
            </dl>
            <dl class="ns-link-list col3" style="height: 112px;">
                <dt>友情链接</dt>
                <dd class="fn-clear">
                    <div class="row">
                        <a href="http://www.dmd2b.com/" target="_blank">Diction Mall</a>
                    </div>
                    <div class="row">
                        <a href="http://www.tooxiu.com/" target="_blank">Diction</a>
                    </div>
                    <div class="row">
                        <a href="http://www.jinyisoubu.com/" target="_blank">锦艺搜布</a>
                    </div>
                    <div class="row">
                        <a href="http://dress.pclady.com.cn/" target="_blank">服装搭配</a>
                    </div>
                    <div class="row">
                        <a href="http://www.tooxiu.com/" target="_blank">服装设计</a>
                    </div>
                    <div class="row">
                        <a href="http://lady.ef43.com.cn/" target="_blank">女装加盟</a>
                    </div>
                    <div class="row">
                        <a href="http://www.tooxiu.com/" target="_blank">时尚趋势</a>
                    </div>
                    <div class="row">
                        <a href="http://www.tooxiu.com/" target="_blank">时装秀</a>
                    </div>
                    <div class="row">
                        <a href="http://www.tooxiu.com/" target="_blank">服装</a>
                    </div>
                    <div class="row">
                        <a href="http://www.tooxiu.com/" target="_blank">时装周</a>
                    </div>
                    <div class="row">
                        <a href="http://www.tooxiu.com/" target="_blank">时尚</a>
                    </div>
                    <div class="row">
                        <a href="http://www.tooxiu.com/" target="_blank">服装设计图</a>
                    </div>
                    <div class="row">
                        <a href="http://www.leatherhr.com/" target="_blank">中国皮革人才网</a>
                    </div>
                </dd>
            </dl>
            <dl class="ns-link-list col4" style="height: 112px;">
                <dt>关注我们</dt>
                <dd class="fn-clear">
                    <div class="row">
                        <a href="javascript:void(0);" class="hover-item">
							<span class="inner">
								<i class="ns-icon ns-icon-wb "></i>官方微博
							</span>
                            <span class="code-n">
								<em></em>
								<i class="icon-code code-wb"></i>
							</span>
                        </a>
                        <a href="javascript:void(0);" class="hover-item">
							<span class="inner">
								<i class="ns-icon ns-icon-wx "></i>官方微信
							</span>
                            <span class="code-n">
								<em></em>
								<i class="icon-code code-wx"></i>
							</span>
                        </a>
                        <a href="javascript:void(0);" class="hover-item">
							<span class="inner">
								<i class="ns-icon ns-icon-wx in-block"></i>客服微信
							</span>
                            <span class="code-n">
								<em></em>
								<i class="icon-code code-wxk"></i>
							</span>
                        </a>
                    </div>
                </dd>
            </dl>
            <dl class="ns-link-list col5" style="height: 112px;">
                <dt>登录客户端</dt>
                <dd class="fn-clear">
                    <div class="row">
                        <a href="http://app.tooxiu.com/client/win/diction.exe"><i
                                class="ns-icon ns-icon-win in-block"></i>Win 客户端</a>
                        <a href="http://app.tooxiu.com/client/mac/diction.dmg"><i
                                class="ns-icon ns-icon-mac in-block"></i>Mac 客户端</a>
                    </div>
                </dd>
            </dl>
        </div>
        <div class="ns-f-bottom fn-clear">
            <div class="link-in">
                <a href="http://szcert.ebs.org.cn/53dc32e0-08c5-4bbb-93e5-a285d27a0749" rel="nofollow" target="_blank"
                   class="ns-icon-gs"></a>
                <a target="_blank" rel="nofollow"
                   href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=44030402000294"
                   class="ns-icon-ga"></a>
                <a target="_blank" rel="nofollow"
                   href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=44030402000294" class="in-block">京公网安备
                    XXXXX402000294号</a>
                <em>|</em>
                <a href="http://www.miibeian.gov.cn/" target="_blank" rel="nofollow" class="in-block">增值电信业务经营许可证：京ICP备XXXX8807号-2 </a>
                <em>|</em>
                <span class="in-block">颜豪(北京)科技股份有限公司©2018-2028</span>
            </div>
            <div class="link-in"><span class="in-block">本站所有图片都经过防伪处理，侵权必究！律师顾问：北京XX律师事务所</span></div>
        </div>
    </div>
    <!-- <div class="nest_align">fasfas</div> -->
    <!--[if lte IE 9]>
    <div class="browser">HI！~我们察觉到您的浏览器版本太低。为了获得更佳的浏览效果和体验，建议您升级或更换浏览器:
        <a target="_blank" title="谷歌浏览器"  href="http://outdatedbrowser.com/cn" class="browser-item chrome"></a>
        <a  target="_blank" title="火狐浏览器" href="http://outdatedbrowser.com/cn" class="browser-item firefox"></a>
        <a  target="_blank" title="IE浏览器" href="http://outdatedbrowser.com/cn" class="browser-item ie"></a>
        <a  target="_blank" title="opera浏览器" href="http://outdatedbrowser.com/cn" class="browser-item opera"></a>
    </div>
    <![endif]-->
</footer>

<script type="text/javascript" data-main="/public/release/home/main.js" src="/public/release/js/lib/requirejs/2.1.20/require.min.js" defer=""
        async="true"></script>
<script>
    var _hmt = _hmt || [];
    (function () {
        var hm = document.createElement("script");
        hm.src = "//hm.baidu.com/hm.js?a3b242930672e1d3dd7781c8cd80b09a";
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(hm, s);
    })();

    var _dxhmt = _dxhmt || [];
    (function () {
        var hm = document.createElement("script");
        hm.src = "/static/front/js/hm.min.js?id=1&v=20181112";
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(hm, s);
    })();
</script>

<script src="/static/front/home/v.php"></script>
<span class="front_footer_save">Save</span>
<span class="front_footer_span" style=""></span>
</body>
</html>
