<%--
  Created by IntelliJ IDEA.
  User: liuxicai
  Date: 2018/12/9 0009
  Time: 22:09
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
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html xmlns="http://www.w3.org/1999/xhtml">
    <base href="<%=basePath%>">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <title>皮草之家-皮草类别</title>
        <style>
            *{ margin:0; padding:0;}
            li{ list-style:none;}

            #div1{ width:1440px; height:auto; margin:20px auto;}
            ul{ width:225px; margin:5px; float:left;}
        </style>
        <script type="text/javascript" src="static/front/js/front_iamge_ajax.js"></script>
        <script type="text/javascript" src="static/front/js/no_copy_Images.js"></script>
        <script>
            window.onload = function(){

                var aUl = document.getElementsByTagName('ul');
                var bBtn = true;

                window.onscroll = function(){

                    var veiwHeight = document.documentElement.clientHeight;
                    var scrollY = document.documentElement.scrollTop || document.body.scrollTop;

                    for(var i=0;i<aUl.length;i++){

                        var aLi = aUl[i].getElementsByTagName('li');

                        var lastLi = aLi[aLi.length-1];

                        if(posTop(lastLi) < veiwHeight + scrollY && bBtn){

                            bBtn = false;

                            ajax('static/front/js/front_data.js',function(str){

                                var json = eval('('+ str +')');

                                if(json.code){
                                    bBtn = true;
                                }

                                for(var i=0;i<json.list.length;i++){
                                    var list = json.list[i];

                                    for(var j=0;j<list.src.length;j++){
                                        var oLi = document.createElement('li');
                                        oLi.innerHTML = '<img src="'+ list.src[j] +'" /><p>'+ list.title[j] +'</p>';
                                        aUl[i].appendChild(oLi);
                                    }

                                }

                            });

                        }

                    }
                };



                function posTop(obj){
                    var top = 0;

                    while(obj){
                        top += obj.offsetTop;
                        obj = obj.offsetParent;
                    }

                    return top;
                }

            };

        </script>
    </head>

<body>
<div id="div1">
    <ul>
        <li>
            <img src="static/front/images/1.jpg" />
            <p>111111111</p>
        </li>
        <li>
            <img src="static/front/images/2.jpg" />
            <p>111111112</p>
        </li>
        <li>
            <img src="static/front/images/3.jpg" />
            <p>111111113</p>
        </li>
    </ul>
    <ul>
        <li>
            <img src="static/front/images/4.jpg" />
            <p>111111114</p>
        </li>
        <li>
            <img src="static/front/images/5.jpg" />
            <p>111111115</p>
        </li>
        <li>
            <img src="static/front/images/6.jpg" />
            <p>111111116</p>
        </li>
        <li>
            <img src="static/front/images/9.jpg" />
            <p>111111117</p>
        </li>
    </ul>
    <ul>
        <li>
            <img src="static/front/images/7.jpg" />
            <p>111111118</p>
        </li>
        <li>
            <img src="static/front/images/8.jpg" />
            <p>111111119</p>
        </li>
        <li>
            <img src="static/front/images/9.jpg" />
            <p>111111110</p>
        </li>
    </ul>
    <ul>
        <li>
            <img src="static/front/images/1.jpg" />
            <p>111111111</p>
        </li>
        <li>
            <img src="static/front/images/2.jpg" />
            <p>111111112</p>
        </li>
        <li>
            <img src="static/front/images/3.jpg" />
            <p>111111113</p>
        </li>
    </ul>
    <ul>
        <li>
            <img src="static/front/images/4.jpg" />
            <p>111111114</p>
        </li>
        <li>
            <img src="static/front/images/5.jpg" />
            <p>111111115</p>
        </li>
        <li>
            <img src="static/front/images/6.jpg" />
            <p>111111116</p>
        </li>
        <li>
            <img src="static/front/images/9.jpg" />
            <p>111111117</p>
        </li>
    </ul>
    <ul>
        <li>
            <img src="static/front/images/7.jpg" />
            <p>111111118</p>
        </li>
        <li>
            <img src="static/front/images/8.jpg" />
            <p>111111119</p>
        </li>
        <li>
            <img src="static/front/images/9.jpg" />
            <p>111111110</p>
        </li>
    </ul>

</div>
</body>
</html>

