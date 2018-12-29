<%--
  Created by IntelliJ IDEA.
  User: liuxicai
  Date: 2018/12/9 0009
  Time: 22:11
  To change this template use File | Settings | File Templates.
--%>
<%
    String path = request.getContextPath();
    String basePath = request.getScheme() + "://"
            + request.getServerName() + ":" + request.getServerPort()
            + path + "/";
%>
<html>
<base href="<%=basePath%>">
<head>
    <title>Title</title>
</head>
<body>

</body>
</html>
