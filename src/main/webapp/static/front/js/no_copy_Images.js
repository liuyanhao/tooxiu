<!-- 屏蔽右键  -->
    function disableclick(e) {

        if (document.all) {
            if (event.button==2||event.button==3) {
                if (event.srcElement.tagName=="IMG"){
                    jinzhi();
                    return false;
                }else{
                    kaiqi();
                }
            }
        }else if (document.layers) {

            if (e.which == 3) {
                jinzhi();
                return false;
            }else{
                kaiqi();
            }
        }else if (document.getElementById){
            if (e.which==3&&e.target.tagName=="IMG"){
                jinzhi();
                return false;
            }else{
                kaiqi();
            }
        }
    }


function associateimages(){
    for(i=0;i<document.images.length;i++)
        document.images.onmousedown=disableclick;
}

if (document.all||document.getElementById)
    document.onmousedown=disableclick
else if (document.layers)
    associateimages();

function jinzhi(){
    document.oncontextmenu = function() { return false;}
}
function kaiqi(){
    document.oncontextmenu = function() { return true;}
}


<!-- 屏蔽右键  -->