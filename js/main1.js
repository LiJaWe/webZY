window.onload = function() {
    //创建Aajax对象
    function ajax(url, fnSucc, fnFaild) {
        if (window.XMLHttpRequest) {
            var oAjax = new XMLHttpRequest();
        } else {
            var oAjax = new ActiveXObject('Microsoft.XMLHTTP');
        }
        //连接服务器open()
        oAjax.open('GET', url, true);
        //发送请求
        oAjax.send();
        //接受返回
        oAjax.onreadystatechange = function() {
            //oAjax.readyState 浏览器和服务器进行到哪一步了
            if (oAjax.readyState == 4) { //读取完成
                if (oAjax.status == 200) {
                    fnSucc(oAjax.responseText);
                } else {
                    if (fnFaild) {
                        fnFaild(oAjax.status);
                    }
                }
            }
        }
    }
}