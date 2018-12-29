<%--
  Created by IntelliJ IDEA.
  User: liuxicai
  Date: 2018/12/13 0013
  Time: 1:24
  To change this template use File | Settings | File Templates.
--%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%
    String path = request.getContextPath();
    String basePath = request.getScheme() + "://"
            + request.getServerName() + ":" + request.getServerPort()
            + path + "/";
%>
<html xmlns="http://www.w3.org/1999/xhtml">
<base href="<%=basePath%>">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>皮草之家-购物车</title>
    <link href="static/front/css/miaov_style.css" rel="stylesheet" type="text/css" />
    <script type="text/javascript" src="static/front/js/miaov.js"></script>
</head>
<body>
<table id="taobao_table">
    <thead>
    <tr>
        <th><label><input type="checkbox" /> 全选</label></th>
        <th>商品名</th>
        <th width="70"><a class="btn" href="#">价格</a></th>
        <th width="70"><a class="btn" href="#">地区</a></th>
        <th>功能</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td align="center" width="60"><input type="checkbox" /></td>
        <td align="center"><img src="static/front/images/11.jpg" alt="商品一" longdesc="http://www.miaov.com" /><a href="http://www.miaov.com/">果绿后背钩花蝴蝶镂空长袖针织衫开衫小披肩韩国气质薄2010秋新</a></td>
        <td align="center"><span>&yen;59.00</span></td>
        <td align="center">北京</td>
        <td align="center"><input type="button" value="删除" /></td>
    </tr>
    <tr>
        <td align="center"><input type="checkbox" /></td>
        <td align="center"><img src="static/front/images/12.jpg" alt="商品二" longdesc="http://www.miaov.com" /><a href="http://www.miaov.com/">2010秋装新款韩版女装淑女花苞波西米亚条纹连衣裙Q0070</a></td>
        <td align="center"><span>&yen;98.00</span></td>
        <td align="center">广东</td>
        <td align="center"><input type="button" value="删除" /></td>
    </tr>
    <tr>
        <td align="center"><input type="checkbox" /></td>
        <td align="center"><img src="static/front/images/13.jpg" alt="商品三" longdesc="http://www.miaov.com" /><a href="http://www.miaov.com/">随意美妙 O.SA欧莎热卖女装2010秋新韩版纯棉短袖T恤女ST00401</a></td>
        <td align="center"><span>&yen;33.00</span></td>
        <td align="center">上海</td>
        <td align="center"><input type="button" value="删除" /></td>
    </tr>
    <tr>
        <td align="center"><input type="checkbox" /></td>
        <td align="center"><img src="static/front/images/12.jpg" alt="商品二" longdesc="http://www.miaov.com" /><a href="http://www.miaov.com/">2010秋装新款韩版女装淑女花苞波西米亚条纹连衣裙Q0070</a></td>
        <td align="center"><span>&yen;198.00</span></td>
        <td align="center">广东</td>
        <td align="center"><input type="button" value="删除" /></td>
    </tr>
    <tr>
        <td align="center" width="60"><input type="checkbox" /></td>
        <td align="center"><img src="static/front/images/11.jpg" alt="商品一" longdesc="http://www.miaov.com" /><a href="http://www.miaov.com/">果绿后背钩花蝴蝶镂空长袖针织衫开衫小披肩韩国气质薄2010秋新</a></td>
        <td align="center"><span>&yen;29.00</span></td>
        <td align="center">北京</td>
        <td align="center"><input type="button" value="删除" /></td>
    </tr>
    <tr>
        <td align="center"><input type="checkbox" /></td>
        <td align="center"><img src="static/front/images/13.jpg" alt="商品三" longdesc="http://www.miaov.com" /><a href="http://www.miaov.com/">随意美妙 O.SA欧莎热卖女装2010秋新韩版纯棉短袖T恤女ST00401</a></td>
        <td align="center"><span>&yen;44.00</span></td>
        <td align="center">上海</td>
        <td align="center"><input type="button" value="删除" /></td>
    </tr>
    </tbody>
    <tfoot>
    <tr>
        <th colspan="5">选中的商品总价是：<span>&yen;0.00元</span></th>
    </tr>
    </tfoot>
</table>

</body>
</html>
