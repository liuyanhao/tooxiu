<%--
  Created by IntelliJ IDEA.
  User: liuxicai
  Date: 2019/1/8 0008
  Time: 22:49
  To change this template use File | Settings | File Templates.
--%>
<%@ page import="java.util.Date" %>
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
<head>
    <meta charset="UTF-8">
    <title>图休皮草之家_时装秀_服装设计图_服装设计_法国时装秀_时装设计</title>
    <meta name="keywords" content="时装秀,时装发布会,服装设计,服装设计图,服装款式,时装杂志,米兰时装周,巴黎时装周,法国时装秀,时装图片" />
    <meta name="description" content="图休皮草之家是一家规模化、专业、全面的大型服装设计资讯资源网站，发布全球时装秀、服装设计图、法国时装秀和米兰、伦敦、纽约和巴黎时装周等时装秀场的时装发布会图片。" />
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
    <meta http-equiv="X-UA-Compatible" content="IE=Edge">
    <meta name="renderer" content="webkit">
    <link rel="icon" href="/public/images/tooxiu/home/favicon.ico" type="image/x-icon" />
    <link rel="stylesheet" type="text/css" href="/public/release/style/base.css?v=12ba160b4b">
    <link rel="stylesheet" type="text/css" href="/public/release/style/tooxiu/public.css?v=5d7193ea4d">
    <link rel="stylesheet" type="text/css" href="/public/release/style/tooxiu/index.css?v=10f799b76c">
    <link rel="stylesheet" type="text/css" href="/public/release/style/tooxiu/gallery.css?v=8ae4290e6f">
    <link rel="stylesheet" type="text/css" href="/public/release/js/lib/mCustomScrollbar/jquery.mCustomScrollbar.css?v=e48de51d0c">
    <link rel="stylesheet" type="text/css" href="/public/release/style/tooxiu/userCenter.css?v=bbe76311cb">
    <link rel="stylesheet" type="text/css" href="/public/release/js/lib/DatePicker/skin/default/datepicker.css">
    <!--[if lt IE 9]>
    <script src="http://cdn.bootcss.com/html5shiv/r29/html5.js"></script>
    <script src="/public/release/js/lib/respond/respond.min.js"></script>
    <link href="/public/release/js/lib/respond/respond-proxy.html" id="respond-proxy" rel="respond-proxy"/>
    <link href="/public/release/js/lib/respond/respond.proxy.gif" id="respond-redirect" rel="respond-redirect"/>
    <script src="/public/release/js/lib/respond/respond.proxy.js"></script>
    <![endif]-->
    <script src="/public/release/js/lib/jquery/jquery-1.11.3.min.js"></script>
    <!--同步sso登录 -->
    <script src="https://sso.tooxiu.com/login/syslogin/islogin/0"></script>	<script src="https://union.tooxiu.com/market/union.core.js"></script>
    <script>
        var is_login = "0";
        var username = "";
        var company_name = "";
        var user_id = "";
        window.sessionStorage.favorites = "/Favorites-add.html"; //收藏 fav_id/861/type/1.html
        window.data_search = false;
        var showLatest = '';
        var getLatestUrl = '';
        var userType = '';
        window.sessionStorage.backUrl = 'czo1NToiaHR0cDovL3d3dy5zeHhsLmNvbS9pbmRleC5waHAvUHVibGljLWZpbmRQYXNzd29yZC5odG1sPyI7'
        window.sessionStorage.staticUrl = '/public';
        window.sessionStorage.tryStatus = 1;
        window.sessionStorage.isTry = 0;
        window.data_search = false;
        var weixin_sdk = {"APP_KEY":"wxf48f3ba14ae4c673","CALLBACK":"http:\/\/new.tooxiu.com\/Public\/oAuthCallback\/type\/weixin?backurl=","CSS_HREF":"https:\/\/wechat.tooxiu.com\/public\/dev\/style\/tooxiu\/wxLogin.css"};
    </script>
    <script>
        window.DX_CONST === undefined && (window.DX_CONST={});
        // 图片加载失败用默认图片替换
        function imgError(img){
            var defaultUrl = '/public/images/tooxiu/home/default.jpg';
            img.onerror = null;
            img.src = defaultUrl;
        }
        function __getWinWidth(){
            if (window.innerWidth){ return window.innerWidth; }
            if (document.documentElement && document.documentElement.clientWidth){return document.documentElement.clientWidth;}
        }
        window.DX_CONST._styleNode = document.createElement("style");
        window.DX_CONST._styleNode.id = 'setCSSheight'; //创建样式元素
        window.DX_CONST._styleNode.type = "text/css";//IE7 8 需要说明样式标签类型
        window.DX_CONST._clientWidth = __getWinWidth();//获取屏幕宽度
        window.DX_CONST._systemTime = 1546767463;//服务器时间戳
        // js添加图片列表高度样式
        autoHeightList();
        // type 是窗口变动传来的
        function autoHeightList(type){
            var _style = window.DX_CONST._styleNode,
                _borderPadd = 20, 	//常量，图片到单元格的距离和边框总和
                _winWidth = 800,	//屏幕宽度
                _style1 = '.ns-ul-wrap-list .ns-list-img-wrap{',		//五个列表样式
                _style2 = '.ns-pic-ul-wrap-list .ns-list-img-wrap{',
                _style3 = '.exhibition-list .list-img-wrap, .book-pic-list .list-img-wrap{',
                _style4 = '.pic-list .pic-tpl .list-img-wrap{',
                _style5 = '.search-ul-wrap-list.ns-pic-ul-wrap-list .ns-list-img-wrap{'; // 搜索的页面的图片模式1440以上都只排5个

            _winWidth = __getWinWidth();//获取屏幕宽度
            if(type&&_winWidth === window.DX_CONST._clientWidth )return; // 宽度没变无需计算
            window.DX_CONST._clientWidth = _winWidth;
            //计算高度
            function bHeight(winW,pm,bs,bl,bp){
                var winW = winW,    //窗口大小
                    pm = pm || 0,   //列表父级到窗口两边距离总和
                    bs = bs,		//单元格所占百分比
                    bl = bl || 1,	//宽和高的比例 1、1.6
                    bp = bp || 0,	//图片到单元格的距离和边框总和
                    newW = (winW - pm - bp) * bs - bp;	//图片宽度
                if(newW>310){		//图片宽度不能大于310
                    return 310 * bl;
                }else{
                    return newW * bl;
                }
            }
            //按照比例输出高度
            function styleText(bs,w,pm){  //bs高宽比 w页面总宽 pm列表区间距
                var _w = w || _winWidth,
                    _pm = pm || [590,590,320,320],// 两边的margin总和
                    // 针对搜索页面的调整 ns-right-block ns-sdt 的宽
                    mleft = _w <= 1680 ? 220:270,	//
                    margin = _w <= 1680 ? 120 : (_w - 1600)/2 > 160 ? (_w - 1600)/2 : (160*2); // 最大内容宽度调整为1600了

                _style1 +='height:'+bHeight(_w,_pm[0],bs[0],1,_borderPadd)+'px;*height:'+bHeight(_w,_pm[0],bs[0]-0.01,1,_borderPadd)+'px;}';
                _style2 +='height:'+bHeight(_w,_pm[1],bs[1],1.6,20)+'px;*height:'+bHeight(_w,_pm[1],bs[1]-0.01,1.6,20)+'px;}';
                _style3 +='height:'+bHeight(_w,_pm[2],bs[2],1,20)+'px;*height:'+bHeight(_w,_pm[2],bs[2]-0.01,1,20)+'px;}';
                _style4 +='height:'+bHeight(_w,_pm[3],bs[3],1.6,20)+'px;*height:'+bHeight(_w,_pm[3],bs[3]-0.01,1.6,20)+'px;}';
                _style5 +='height:'+bHeight(_w, margin+mleft ,bs[4],1.6,20)+'px;*height:'+bHeight(_w,margin+mleft,bs[4]-0.01,1.6,20)+'px;}';
                var _text = _style1+_style2+_style3+_style4+_style5;
                if(_style.styleSheet) _style.styleSheet.cssText = _text;
                else _style.innerHTML = _text;
                if(!document.getElementById("setCSSheight")) document.getElementsByTagName('head')[0].appendChild(_style);
            }
            //针对各种分辨率计算相应的样式
            if(_winWidth<=800){
                styleText([0.5,0.5,0.5,0.3318888,0.5],'',[340,340,120,120]);
            }else if(_winWidth<=1200){
                styleText([0.3318888,0.3318888,0.3318888,0.25,0.3318888],'',[340,340,120,120]);
            }else if(_winWidth<=1440){
                styleText([0.25,0.25,0.25,0.25,0.25],'',[340,340,120,120]);
            }else if(_winWidth<=1680){
                styleText([0.25,0.166666,0.166666,0.166666,0.2],'',[340,340,120,120]);
            }else if(_winWidth<=1920){
                styleText([0.25,0.166666,0.166666,0.166666,0.2]);
            }else if(_winWidth>1921){
                styleText([0.166666,0.166666,0.166666,0.166666,0.2],1920);
            }
        }
    </script>
    <style>
        .nav a{
            background: none!important;
        }

        .nav a:hover{
            background: #fff!important;
        }
    </style>
</head>
<body>
<!-- <div class="top-tip">
     <div class="wrap">
         <i class="icon icon-warn-orange"></i>
         <span>尊敬的用户：图休皮草之家2017春节放假时间为1月23日-2月3日，春节假期图休皮草之家将保证正常开放和您的使用。如需帮助请在线留言，2月4日上班小蝶将第一时间与您联系；若有紧急需要请联系（15888727569）；感谢您的支持，祝您春节愉快！ <a href="javascript:;" onClick="$('body>.top-tip').remove();" class="close" title="关闭"> [关闭]</a></span>
     </div>
 </div> -->
<header id="header" class="nsc-header">
    <div class="js-mk-fixed" id="js-mk-fixed" >
        <div class="ns-header" >
            <a href="/" class="logo" title="图休皮草之家"></a>
            <!-- <a href="/" class="logo-snow" title="图休皮草之家"></a> 节日logo-->
            <ul class="nav fn-clear">
                <li class="cur ">
                    <div class="inner">
                        <a title="女装" href="/Women" >女装</a>
                    </div>
                    <em>/</em>
                </li><li class=" ">
                <div class="inner">
                    <a title="男装" href="/Men" >男装</a>
                </div>
                <em>/</em>
            </li>
             <li class=" sel">
                <div class="inner">
                    <a title="牛仔" href="/Cowboy" >牛仔<i class="in-block ns-icon ns-icon-arrow-down"></i></a>
                    <ul class="nav-cons">
                        <li  >
                            <a href="/Cowboy-index-channel-35340-extid-32940.html"  title="女装">女装</a>
                        </li>
                        <li  >
                            <a href="/Cowboy-index-channel-35340-extid-32939.html" title="男装">男装</a>
                        </li>
                        <li  >
                            <a href="/Cowboy-index-channel-35340-extid-109697.html" title="童装">童装</a>
                        </li>
                    </ul>					</div>
                <em>/</em>
            </li><li class=" sel">
                <div class="inner">
                    <a title="内衣" href="/Underwear" >内衣<i class="in-block ns-icon ns-icon-arrow-down"></i></a>
                    <ul class="nav-cons">
                        <li  >
                            <a href="/Underwear-index-channel-32209-extid-32940.html"  title="女装">女装</a>
                        </li>
                        <li  >
                            <a href="/Underwear-index-channel-32209-extid-32939.html" title="男装">男装</a>
                        </li>
                        <li  >
                            <a href="/Underwear-index-channel-32209-extid-109697.html" title="童装">童装</a>
                        </li>
                    </ul>					</div>
                <em>/</em>
            </li><li class=" sel">
                <div class="inner">
                    <a title="毛织" href="/Woolen" >毛织<i class="in-block ns-icon ns-icon-arrow-down"></i></a>
                    <ul class="nav-cons">
                        <li  >
                            <a href="/Woolen-index-channel-35342-extid-32940.html"  title="女装">女装</a>
                        </li>
                        <li  >
                            <a href="/Woolen-index-channel-35342-extid-32939.html" title="男装">男装</a>
                        </li>
                        <li  >
                            <a href="/Woolen-index-channel-35342-extid-109697.html" title="童装">童装</a>
                        </li>
                    </ul>					</div>
                <em>/</em>
            </li>
            <li class=" sel">
                <div class="inner">
                    <a title="裤子" href="/Pants" >裤子<i class="in-block ns-icon ns-icon-arrow-down"></i></a>
                    <ul class="nav-cons">
                        <li  >
                            <a href="/Pants-index-channel-35341-extid-32940.html"  title="女装">女装</a>
                        </li>
                        <li  >
                            <a href="/Pants-index-channel-35341-extid-32939.html" title="男装">男装</a>
                        </li>
                        <li  >
                            <a href="/Pants-index-channel-35341-extid-109697.html" title="童装">童装</a>
                        </li>
                    </ul>
                </div>
                <em>/</em>
            </li>
                <li class="">
                    <div class="inner">
                        <a href="/IndustryAlliance-index.html">产业联盟</a>
                    </div>
                    <em>/</em>
                </li>
                <li >
                    <div class="inner">
                        <a href="/Kaleidoscope-brand.html">时尚万花筒</a>
                    </div>
                    <em>/</em>
                </li>
                <li >
                    <div class="inner">
                        <a href="http://fashion.tooxiu.com/" target="_blank">时尚圈</a>
                    </div>
                    <em>/</em>
                </li>
            </ul>
            <div class="right-box">
                <div class="user-op">
                    <div class="btn register-btn" title="注册" onclick="window.location.href='<%=basePath%>front/register.do'">
                        <span class="ns-icon ns-icon-register in-block"></span>
                        <p>注册</p>
                    </div>
                    <div class="btn user-btn" title="登录" onclick="window.location.href='<%=basePath%>front/to_login.do?backurl=czo1MToiaHR0cDovL3d3dy5zeHhsLmNvbS9pbmRleC5waHAvUHVibGljLXJlZ2lzdGVyLmh0bWw/Ijs='">
                        <span class="ns-icon ns-icon-user in-block"></span>
                        <p>登录</p>
                    </div>
                    <div class="btn search-btn" title="搜索">
                        <div class="box-t">
                            <span class="ns-icon ns-icon-search in-block"></span>
                            <p>搜索</p>
                        </div>
                        <div class="search-cons">
                            <form class="search fn-display-inb" id="g-search" name="search" action="/Search-index-type-1.html" method="get">
                                <div class="input-wrap fn-display-inb">
                                    <input class="text-input" autocomplete="off" id="keyword" type="text" name="q" placeholder="" value="">
                                    <div class="dx-sug">
                                        <ul></ul>
                                        <div class="hot-search">
                                            热门搜索：
                                            <a href="/Search/index/type/1.html?q=gucci" rel="nofollow" target="_blank">gucci</a>
                                            <a href="/Search/index/type/1.html?q=%E8%83%8C%E5%B8%A6%E8%A3%A4" rel="nofollow" target="_blank">背带裤</a>
                                            <a href="/Search/index/type/1.html?q=Sonia-Rykiel" rel="nofollow" target="_blank">Sonia-Rykiel</a>
                                            <a href="/Search/index/type/1.html?q=Celine" rel="nofollow" target="_blank">Celine</a>
                                            <a href="/Search/index/type/1.html?q=%E9%80%9A%E5%8B%A4" rel="nofollow" target="_blank">通勤</a>
                                            <a href="/Search/index/type/1.html?q=%E7%9A%AE%E8%A1%A3%E7%9A%AE%E8%8D%89" rel="nofollow" target="_blank">皮衣皮草</a>
                                            <a href="/Search/index/type/1.html?q=%E8%BF%9E%E8%A1%A3%E8%A3%99" rel="nofollow" target="_blank">连衣裙</a>
                                            <a href="/Search/index/type/1.html?q=%E6%A3%89%E8%A1%A3%E7%BE%BD%E7%BB%92" rel="nofollow" target="_blank">棉衣羽绒</a>
                                            <a href="/Search/index/type/1.html?q=GIVENCHY" rel="nofollow" target="_blank">GIVENCHY</a>
                                            <a href="/Search/index/type/1.html?q=Scotch+%26+Soda" rel="nofollow" target="_blank">Scotch & Soda</a>
                                            <a href="/Search/index/type/1.html?q=%E6%B5%AA%E6%BC%AB" rel="nofollow" target="_blank">浪漫</a>
                                            <a href="/Search/index/type/1.html?q=T%E6%81%A4" rel="nofollow" target="_blank">T恤</a>
                                            <a href="/Search/index/type/1.html?q=%E6%AF%9B%E8%A1%AB" rel="nofollow" target="_blank">毛衫</a>
                                            <a href="/Search/index/type/1.html?q=%E5%BD%BC%E5%BE%97%E6%BD%98%E9%A2%86" rel="nofollow" target="_blank">彼得潘领</a>
                                            <a href="/Search/index/type/1.html?q=%E5%96%87%E5%8F%AD%E8%A3%A4" rel="nofollow" target="_blank">喇叭裤</a>
                                            <a href="/Search/index/type/1.html?q=%E8%8B%B1%E4%BC%A6" rel="nofollow" target="_blank">英伦</a>
                                            <a href="/Search/index/type/1.html?q=%E8%A3%99%E5%AD%90" rel="nofollow" target="_blank">裙子</a>
                                            <a href="/Search/index/type/1.html?q=%E4%B8%80%E5%AD%97%E8%82%A9" rel="nofollow" target="_blank">一字肩</a>
                                            <a href="/Search/index/type/1.html?q=%E6%88%B7%E5%A4%96" rel="nofollow" target="_blank">户外</a>
                                            <a href="/Search/index/type/1.html?q=%E5%A4%96%E5%A5%97" rel="nofollow" target="_blank">外套</a>
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
                    <div class="ns-menu-cons">
                        <a href="javascript:void(0);" class="close"></a>

                        <ul class="ns-tab-navs" >
                            <li class="">
                                <i></i>
                                <span class="tit">趋势预测</span>
                                <a href="/SingleItemsTrend-index-cid-1-channel-2085.html">单品趋势</a><a href="/ColorTrend-index-cid-1-channel-2085.html">色彩趋势</a><a href="/FabricTrend-index-cid-1-channel-2085.html">面料趋势</a><a href="/PatternTrend-index-cid-1-channel-2085.html">图案趋势</a><a href="/SportsTrend-index-cid-1-channel-2085.html">运动趋势</a><a href="/PlanningTheme-index-cid-1-channel-2085.html">企划主题</a>                    </li><li class="">
                            <i></i>
                            <span class="tit">市场情报</span>
                            <a href="/OrderMeeting-index-cid-2-channel-2085.html">订货会</a><a href="/InVogue-index-cid-2-channel-2085.html">正在流行</a><a href="/StyleGallery-index-cid-2-channel-2085.html">款式图库</a><a href="/BrandAlbum-index-cid-2-channel-2085.html">品牌画册</a><a href="/VectorStyle-index-cid-2-channel-2085.html">矢量款式</a><a href="/AdvancedDisplay-index-cid-2-channel-2085.html">高级陈列</a><a href="/DesignerBrand-index-cid-2-channel-2085.html">设计师品牌</a>                    </li><li class="">
                            <i></i>
                            <span class="tit">时装发布</span>
                            <a href="/Show-index-cid-3-channel-2085.html">秀场直击</a><a href="/RunwayTrend-index-cid-3-channel-2085.html">T台趋势</a>                    </li><li class="">
                            <i></i>
                            <span class="tit">潮流直播</span>
                            <a href="/Exhibition-index-cid-4-channel-2085.html">展会</a><a href="/StreetStyle-index-cid-4-channel-2085.html">街拍</a><a href="/StarNews-index-cid-4-channel-2085.html">明星同款</a>                    </li><li class="">
                            <i></i>
                            <span class="tit">书刊杂志</span>
                            <a href="/FashionMagazine-index-cid-5-channel-2085.html">时尚杂志</a><a href="/StyleBook-index-cid-5-channel-2085.html">款式书籍</a><a href="/PatternBook-index-cid-5-channel-2085.html">图案书籍</a>                    </li><li class="">
                            <i></i>
                            <span class="tit">图案/面辅料</span>
                            <a href="/VectorGallery-index-cid-6-channel-2085-sex-32940.html">矢量图库</a><a href="/PatternGallery-index-cid-6-channel-2085.html">图案图库</a><a href="/PatternBook-index-cid-6-channel-2085.html">图案书籍</a><a href="/Accessories-index-cid-6-channel-2085.html">配饰</a><a href="/CowboyAccessories-index-cid-6-channel-2085.html">牛仔辅料</a>                    </li><li class="last">
                            <i></i>
                            <span class="tit">设计分析</span>
                            <a href="/DesignAnalysis-index-cid-7-subcolumn-131343-channel-2085.html">款式分析</a><a href="/DesignAnalysis-index-cid-7-subcolumn-131010-channel-2085.html">色彩分析</a><a href="/DesignAnalysis-index-cid-7-subcolumn-131346-channel-2085.html">材料分析</a><a href="/DesignAnalysis-index-cid-7-subcolumn-131015-channel-2085.html">工艺分析</a><a href="/DesignAnalysis-index-cid-7-subcolumn-128748-channel-2085.html">图案分析</a><a href="/DesignAnalysis-index-cid-7-subcolumn-131347-channel-2085.html">细节分析</a>                    </li>            </ul>        </div>
                </div>
                <ul>
                    <li class="sel" style="width:14.2757142857%;">
                        <a class="sub-nav-child" title="趋势预测">趋势预测<i class="ns-icon ns-icon-arrow-dw in-block"></i></a>
                        <em></em>
                        <ul class="nav-cons">
                            <li>
                                <a href="/SingleItemsTrend-index-cid-1-channel-2085.html" title="单品趋势">单品趋势</a>
                            </li><li>
                            <a href="/ColorTrend-index-cid-1-channel-2085.html" title="色彩趋势">色彩趋势</a>
                        </li><li>
                            <a href="/FabricTrend-index-cid-1-channel-2085.html" title="面料趋势">面料趋势</a>
                        </li><li>
                            <a href="/PatternTrend-index-cid-1-channel-2085.html" title="图案趋势">图案趋势</a>
                        </li><li>
                            <a href="/SportsTrend-index-cid-1-channel-2085.html" title="运动趋势">运动趋势</a>
                        </li><li>
                            <a href="/PlanningTheme-index-cid-1-channel-2085.html" title="企划主题">企划主题</a>
                        </li>            </ul>
                    </li><li class="sel" style="width:14.2757142857%;">
                    <a class="sub-nav-child" title="市场情报">市场情报<i class="ns-icon ns-icon-arrow-dw in-block"></i></a>
                    <em></em>
                    <ul class="nav-cons">
                        <li>
                            <a href="/OrderMeeting-index-cid-2-channel-2085.html" title="订货会">订货会</a>
                        </li><li>
                        <a href="/InVogue-index-cid-2-channel-2085.html" title="正在流行">正在流行</a>
                    </li><li>
                        <a href="/StyleGallery-index-cid-2-channel-2085.html" title="款式图库">款式图库</a>
                    </li><li>
                        <a href="/BrandAlbum-index-cid-2-channel-2085.html" title="品牌画册">品牌画册</a>
                    </li><li>
                        <a href="/VectorStyle-index-cid-2-channel-2085.html" title="矢量款式">矢量款式</a>
                    </li><li>
                        <a href="/AdvancedDisplay-index-cid-2-channel-2085.html" title="高级陈列">高级陈列</a>
                    </li><li>
                        <a href="/DesignerBrand-index-cid-2-channel-2085.html" title="设计师品牌">设计师品牌</a>
                    </li>            </ul>
                </li><li class="sel" style="width:14.2757142857%;">
                    <a class="sub-nav-child" title="时装发布">时装发布<i class="ns-icon ns-icon-arrow-dw in-block"></i></a>
                    <em></em>
                    <ul class="nav-cons">
                        <li>
                            <a href="/Show-index-cid-3-channel-2085.html" title="秀场直击">秀场直击</a>
                        </li><li>
                        <a href="/RunwayTrend-index-cid-3-channel-2085.html" title="T台趋势">T台趋势</a>
                    </li>            </ul>
                </li><li class="sel" style="width:14.2757142857%;">
                    <a class="sub-nav-child" title="潮流直播">潮流直播<i class="ns-icon ns-icon-arrow-dw in-block"></i></a>
                    <em></em>
                    <ul class="nav-cons">
                        <li>
                            <a href="/Exhibition-index-cid-4-channel-2085.html" title="展会">展会</a>
                        </li><li>
                        <a href="/StreetStyle-index-cid-4-channel-2085.html" title="街拍">街拍</a>
                    </li><li>
                        <a href="/StarNews-index-cid-4-channel-2085.html" title="明星同款">明星同款</a>
                    </li>            </ul>
                </li><li class="sel" style="width:14.2757142857%;">
                    <a class="sub-nav-child" title="书刊杂志">书刊杂志<i class="ns-icon ns-icon-arrow-dw in-block"></i></a>
                    <em></em>
                    <ul class="nav-cons">
                        <li>
                            <a href="/FashionMagazine-index-cid-5-channel-2085.html" title="时尚杂志">时尚杂志</a>
                        </li><li>
                        <a href="/StyleBook-index-cid-5-channel-2085.html" title="款式书籍">款式书籍</a>
                    </li><li>
                        <a href="/PatternBook-index-cid-5-channel-2085.html" title="图案书籍">图案书籍</a>
                    </li>            </ul>
                </li><li class="sel" style="width:14.2757142857%;">
                    <a class="sub-nav-child" title="图案/面辅料">图案/面辅料<i class="ns-icon ns-icon-arrow-dw in-block"></i></a>
                    <em></em>
                    <ul class="nav-cons">
                        <li>
                            <a href="/VectorGallery-index-cid-6-channel-2085-sex-32940.html" title="矢量图库">矢量图库</a>
                        </li><li>
                        <a href="/PatternGallery-index-cid-6-channel-2085.html" title="图案图库">图案图库</a>
                    </li><li>
                        <a href="/PatternBook-index-cid-6-channel-2085.html" title="图案书籍">图案书籍</a>
                    </li><li>
                        <a href="/Accessories-index-cid-6-channel-2085.html" title="配饰">配饰</a>
                    </li><li>
                        <a href="/CowboyAccessories-index-cid-6-channel-2085.html" title="牛仔辅料">牛仔辅料</a>
                    </li>            </ul>
                </li>
                <li class="sel" style="width:14.2757142857%;">
                    <a class="sub-nav-child" title="设计分析">设计分析<i class="ns-icon ns-icon-arrow-dw in-block"></i></a>
                    <em></em>
                    <ul class="nav-cons">
                        <li>
                            <a href="/DesignAnalysis-index-cid-7-subcolumn-131343-channel-2085.html" title="款式分析">款式分析</a>
                        </li>
                        <li>
                            <a href="/DesignAnalysis-index-cid-7-subcolumn-131010-channel-2085.html" title="色彩分析">色彩分析</a>
                        </li>
                        <li>
                            <a href="/DesignAnalysis-index-cid-7-subcolumn-131346-channel-2085.html" title="材料分析">材料分析</a>
                        </li>
                        <li>
                            <a href="/DesignAnalysis-index-cid-7-subcolumn-131015-channel-2085.html" title="工艺分析">工艺分析</a>
                        </li>
                        <li>
                            <a href="/DesignAnalysis-index-cid-7-subcolumn-128748-channel-2085.html" title="图案分析">图案分析</a>
                        </li>
                        <li>
                            <a href="/DesignAnalysis-index-cid-7-subcolumn-131347-channel-2085.html" title="细节分析">细节分析</a>
                        </li>
                    </ul>
                </li>
            </ul>
            </div>
        </div>
    </div>
</header>

<script type="text/javascript">
    window.sessionStorage.Target = "/public/release/js/tooxiu/register/,register";
</script>
<section class="register" id="register">
    <div class="get-password">
        <div class="title fn-clear">
            <h2><i class="ceil-icon-2"></i>手机找回密码</h2>
            <span>请输入您的网站帐号和注册时填写的手机号码，我们会将新密码发送到您的手机！</span>
        </div>
        <form id="get-password-phone" method="post">
            <table class="register-form">
                <tr>
                    <td width="200"  class="hd">网站帐号：</td>
                    <td width="650">
                        <div class="big-input">
                            <input id="account" name="account" class="text-input" type="text">
                        </div>
                    </td>
                </tr>
                <tr>
                    <td class="hd">手机号码：</td>
                    <td>
                        <div class="big-input">
                            <input id="phone_find" name="phone" class="text-input" type="text">
                        </div>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td>
                        <input type="hidden" name="type" value="mobile" />
                        <input class="btn-input-big" type="submit" value="确 认 提 交">
                    </td>
                </tr>
            </table>
        </form>
        <div class="title fn-mgt50 fn-clear">
            <h2><i class="mail-icon-2"></i>邮箱找回密码</h2>
            <span>请输入您的网站帐号和注册时填写的邮箱，我们会将密码重置邮件发送到您的邮箱！</span>
        </div>
        <form id="get-password-email" method="post">
            <table class="register-form">
                <tr>
                    <td width="200" class="hd">网站帐号：</td>
                    <td width="650">
                        <div class="big-input">
                            <input id="account" name="account" class="text-input" type="text">
                        </div>
                    </td>
                </tr>
                <tr>
                    <td class="hd">邮箱地址：</td>
                    <td>
                        <div class="big-input"><input id="email_find" name="email" class="text-input" type="text"></div>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td>
                        <input type="hidden" name="type" value="email" />
                        <input class="btn-input-big" type="submit" value="确 认 提 交">
                    </td>
                </tr>
            </table>
        </form>
        <div class="title fn-mgt50 fn-clear">
            <h2><i class="card-icon"></i>证件找回密码</h2>
        </div>
        <p class="tip">请将您的个人身份证和企业营业执照扫描件传真至以下号码，并注明您的网站帐号和手机号码，然后与我司客服人员联系。
            我们核实资料后将为您重置密码并短信通知您。</p>
        <p class="concat">传真号码：<span>0755-82044828</span>客服热线：<span>400-688-0836</span></p>
    </div>
</section>

<footer class="ns-footer" id="footer">
    <div class="ns-main-layout fn-clear">
        <div class="ns-f-top">
            <dl class="ns-link-list col1">
                <dt>旗下产品</dt>
                <dd class="fn-clear">
                    <div class="row">
                        <a href="http://epd.tooxiu.com" target="_blank" title="服装趋势">服装趋势</a>
                        <a href="http://www.tooxiu.com" target="_blank" title="图休服装">图休服装</a>
                    </div>
                    <div class="row">
                        <a href="http://epd.xiebaowang.com" target="_blank" title="鞋包趋势">鞋包趋势</a>
                        <a href="http://www.xiebaowang.com" target="_blank" title="图休鞋业">图休鞋业</a>
                    </div>
                    <div class="row">
                        <a href="http://edu.tooxiu.com" target="_blank" title="图休教育">图休教育</a>
                        <a href="http://bags.tooxiu.com" target="_blank" title="图休箱包">图休箱包</a>
                    </div>
                    <div class="row">
                        <a href="http://www.dmd2b.com/" target="_blank" title="图休服装">Diction  Mall</a>
                    </div>
                </dd>
            </dl>
            <dl class="ns-link-list col2">
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
            <dl class="ns-link-list col3">
                <dt>友情链接</dt>
                <dd class="fn-clear">
                    <div class="row">
                        <a href="http://www.dmd2b.com/" target="_blank">Diction  Mall</a>
                    </div>
                    <div class="row">
                        <a href="http://www.tooxiu.com/" target="_blank">Diction</a>
                    </div>
                    <div class="row">
                        <a href="http://www.jinyisoubu.com" target="_blank" >锦艺搜布</a>
                    </div>
                    <div class="row">
                        <a href="http://dress.pclady.com.cn/" target="_blank">服装搭配</a>
                    </div>
                    <div class="row">
                        <a href="http://www.tooxiu.com/" target="_blank">服装设计</a>
                    </div>
                    <div class="row">
                        <a href="http://lady.ef43.com.cn/" target="_blank" >女装加盟</a>
                    </div>
                    <div class="row">
                        <a href="http://www.tooxiu.com/" target="_blank" >时尚趋势</a>
                    </div>
                    <div class="row">
                        <a href="http://www.tooxiu.com/" target="_blank" >时装秀</a>
                    </div>
                    <div class="row">
                        <a href="http://www.tooxiu.com/" target="_blank" >服装</a>
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
            <dl class="ns-link-list col4">
                <dt>关注我们</dt>
                <dd class="fn-clear">
                    <div class="row">
                        <a href="javascript:void(0);" class="hover-item">
							<span class="inner">
								<i class="ns-icon ns-icon-wb in-block"></i>官方微博
							</span>
                            <span class="code-n">
								<em></em>
								<i class="icon-code code-wb"></i>
							</span>
                        </a>
                        <a href="javascript:void(0);" class="hover-item">
							<span class="inner">
								<i class="ns-icon ns-icon-wx in-block"></i>官方微信
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
            <dl class="ns-link-list col5">
                <dt>登录客户端</dt>
                <dd class="fn-clear">
                    <div class="row">
                        <a href="http://app.tooxiu.com/client/win/diction.exe"><i class="ns-icon ns-icon-win in-block"></i>Win 客户端</a>
                        <a href="http://app.tooxiu.com/client/mac/diction.dmg"><i class="ns-icon ns-icon-mac in-block"></i>Mac 客户端</a>
                    </div>
                </dd>
            </dl>
        </div>
        <div class="ns-f-bottom fn-clear">
            <div class="link-in">
                <a href="http://szcert.ebs.org.cn/53dc32e0-08c5-4bbb-93e5-a285d27a0749" rel="nofollow" target="_blank" class="ns-icon-gs"></a>
                <a target="_blank" rel="nofollow" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=44030402000294" class="ns-icon-ga"></a>
                <a target="_blank" rel="nofollow" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=44030402000294" class="in-block">粤公网安备 44030402000294号</a>
                <em>|</em>
                <a href="http://www.miibeian.gov.cn" target="_blank" rel="nofollow" class="in-block">增值电信业务经营许可证：粤ICP备05128807号-2 </a>
                <em>|</em>
                <span class="in-block">颜豪(北京)科技股份有限公司©2018-2028</span>
            </div>
            <div class="link-in"><span class="in-block">本站所有图片都经过防伪处理，侵权必究！律师顾问：北京XXX律师事务所</span></div>
        </div>
    </div>
    <!-- <div class="nest_align">fasfas</div> -->
    <!--[if lte IE 9]>
    <div class="browser">HI！~我们察觉到您的浏览器版本太低。为了获得更佳的浏览效果和体验，建议您升级或更换浏览器:<a target="_blank" title="谷歌浏览器" href="http://outdatedbrowser.com/cn" class="browser-item chrome"></a><a target="_blank" title="火狐浏览器" href="http://outdatedbrowser.com/cn" class="browser-item firefox"></a><a target="_blank" title="IE浏览器" href="http://outdatedbrowser.com/cn" class="browser-item ie"></a><a target="_blank" title="opera浏览器" href="http://outdatedbrowser.com/cn" class="browser-item opera"></a></div>
    <![endif]-->
</footer>
<div class="ns-fix-register">
    <i class="ns-icon ns-icon-close"></i>
    <a href="<%=%>front/register.do" title="极速注册">
        <img src="/public/images/tooxiu/home/fix-register.png" alt="">
    </a>
</div>
<script type="text/javascript" data-main='/public/main.js?v=fd6792c4d9' src="/public/release/js/lib/requirejs/2.1.20/require.min.js" defer async="true"></script>
<script>
    var _hmt = _hmt || [];
    (function() {
        var hm = document.createElement("script");
        hm.src = "//hm.baidu.com/hm.js?a3b242930672e1d3dd7781c8cd80b09a";
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(hm, s);
    })();

    var _dxhmt = _dxhmt || [];
    (function() {
        var hm = document.createElement("script");
        hm.src = "//hm.tooxiu.com/hm.min.js?id=1&v=20181112";
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(hm, s);
    })();
</script>
</body>
</html>
