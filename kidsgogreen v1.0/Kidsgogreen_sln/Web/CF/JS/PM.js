

$(document).ready(
function () {
    BindWait();
    IniMenuStyle();
    if (typeof ReadyLoad == "function") { ReadyLoad(); }
});


function IniMenuStyle() {

    var curUrl = location.href.toLowerCase();
    if (curUrl.indexOf("home.aspx") >= 0) {
        
    }
    else if (curUrl.indexOf("what.aspx") >= 0) {
        $(".menu").find("img").eq(1).css("transform", "scale(1.2)").css("-webkit-transform", "scale(1.2)");
    }
    else if (curUrl.indexOf("play.aspx") >= 0) {
        $(".menu").find("img").eq(2).css("transform", "scale(1.2)").css("-webkit-transform", "scale(1.2)");
    }
    else if (curUrl.indexOf("watch.aspx") >= 0) {
        $(".menu").find("img").eq(3).css("transform", "scale(1.2)").css("-webkit-transform", "scale(1.2)");
    }
    else if (curUrl.indexOf("explore.aspx") >= 0) {
        $(".menu").find("img").eq(4).css("transform", "scale(1.2)").css("-webkit-transform", "scale(1.2)");
    }
}


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function BindWait() {
    var objs1 = $("input[type='submit'],input[type='button']");
    for (var i = 0; i < objs1.length; i++) {

        var obj = $(objs1.eq(i));
        if (obj.attr("onclick") == null) {
            obj.attr("onclick", "PopWait()");
        }

    }

    var objs2 = $("a");
    for (var i = 0; i < objs2.length; i++) {

        var obj = $(objs2.eq(i));
        if (obj.attr("onclick") == null) {
            if (obj.attr("target") == null) {
                obj.attr("onclick", "PopWait()");
            }
            else {
                if (obj.attr("target") != "_blank")
                    obj.attr("onclick", "PopWait()");
            }
        }

    }
}


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function SetSiteMap(s) {
    $("#divSiteMap2").append(" > <span>" + s + "</span>");
}


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function IsComputer() {
    var userAgentInfo = navigator.userAgent;
    var Agents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"];

    for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) >= 0) {

            return "<br/><br/><br/><br/><div style='width:90%; word-break:break-all; margin:auto; margin-top:200px; text-align:center; font-size:50px'>" +
                    "please open on PC<br/><br/><br/>" + location.href + "</div>";

        }
    }

    return "ok";
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var isMobile = /^(?:11\d|12\d|13\d|14\d|15\d|16\d|17\d|18\d|19\d)\d{5}(\d{3}|\*{3})$/;
var isPhone = /^((0\d{2,3})-)?(\d{7,8})(-(\d{3,}))?$/;

function IsMobile(tel) {
    return isMobile.test(tel);
}

function IsPhone(tel) {
    return isPhone.test(tel);
}

function IsTel(tel) {
    if (!isMobile.test(tel) && !isPhone.test(tel)) {
        return false;
    }
    else {
        return true;
    }
}

function IsIdCard(s) {
    if (s == '')
    { return false; }

    if (!/^(\d{15}|\d{17}[\dXx])$/.test(s)) {
        return false;
    }

    return true;
}




//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function keyDown(e) {
    var currKey = 0, e = e || event;
    currKey = e.keyCode || e.which || e.charCode;
    var keyName = String.fromCharCode(currKey);

    if (currKey == 13) {

        if ($("#" + GetJSId("btnCommit")).length > 0 && $("textarea").length == 0) {
            $("#" + GetJSId("btnCommit")).click();
            return false;
        }

        if ($("#" + GetJSId("btnSearch")).length > 0 && $("textarea").length == 0) {
            $("#" + GetJSId("btnSearch")).click();
            return false;
        }
    }
}
document.onkeydown = keyDown;



function keyUp(e) {
    var currKey = 0, e = e || event;
    currKey = e.keyCode || e.which || e.charCode;
    var keyName = String.fromCharCode(currKey);

    if (currKey == 27) {
        //location.href = 'Sys_MyQuit.aspx';
    }

}
document.onkeyup = keyUp;

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var delOneId;
var delOneCon;

function DelOne(id, con) {
    delOneId = id;
    delOneCon = con;
    PageMethods.CheckIsUse(delOneId, DelOneCheckIsUseOver);
}

function DelOneCheckIsUseOver(res) {
    if (res == "True") {
        PopShow('warn', "Cannot Delete");
    }
    else {
        PopShow('DelOneConfirm', "Deleted“" + delOneCon + "”?");
    }
}

function DelOnePopOK() {
    PageMethods.Delete(delOneId, DelOnePopOKSuc);
}

function DelOnePopOKSuc(res) {
    if (res == "ok") {
        $("#" + GetJSId("btnHide")).click();
    }
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var deleteIds;

function CheckAll(chkObj, tableId) {

    tableId = GetJSId(tableId);

    if ($(chkObj).attr("checked") == "checked") {
        $("#" + tableId + " input[type='checkbox']").attr("checked", true);
    }
    else {
        $("#" + tableId + " input[type='checkbox']").attr("checked", false);
    }
}

function DeleteChecked(tableId) {

    tableId = GetJSId(tableId);

    var spanArr = $("#" + tableId + " input:checked").parent().parent().parent().parent().parent().parent().find("span[name='lbId']");
    var idStr = "";
    for (var i = 0; i < spanArr.length; i++) {
        var id = $(spanArr[i]).text();  
        if (i != spanArr.length - 1) {
            idStr += id + "|";
        }
        else {idStr += id}
    }

    deleteIds = idStr;  
    if ($.trim(deleteIds) == "") {PopShow('warn','Choose what you want to delete');}
    else {PageMethods.CheckIsUse(deleteIds, CheckIsUseOver);}
}

function CheckIsUseOver(res) {
    var res = res == "True" ? "do not delete" : "confirm？";
    PopShow('DeleteConfirm',res);
}

function DeletePopOK() {
    PopShow('wait','deleting..');
    PageMethods.Delete(deleteIds, DeletePopOKOver);
}

function DeletePopOKOver(res) {
    PopClose();
    if (res == "ok") {
        $("#" + GetJSId("btnHide")).click();
    }
    else
    { PopShow('warn',res);}
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**function Share(shareType, title, imgPath) {

    var shareUrl = location.href;

    if (shareType == 'qq') {
        window.open('http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=' + shareUrl + '&showcount=0&desc=&summary=&title=' + title + '&site=&pics=' + imgPath + '&style=202&width=31&height=31');
    }
    else if (shareType == 'sina') {
        window.open('http://service.weibo.com/share/share.php?url=' + shareUrl + '&appkey=1i0nrm&title=' + title + '&pic=' + imgPath + '&ralateUid=&language=zh_cn');
    }
    else if (shareType == "kaixin") {
        window.open('http://www.kaixin001.com/rest/records.php?content=' + title + '&url=' + shareUrl + '&starid=&aid=100018706&style=11&pic=' + imgPath);
    }
    else if (shareType == "renren") {
        window.open('http://widget.renren.com/dialog/share?resourceUrl=' + shareUrl + '&srcUrl=' + shareUrl + '&title' + title + '&pic=' + imgPath + '&description=');
    }
    else if (shareType == 'wechat' || shareType == 'wechatzone') {
        PopShow('warn', '<img style="height:150px;" alt="" src="' + $("#lbQRCode").html() + '" />');
    }
    else {
        PopShow('warn', 'ING');
    }
}*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


var PopBgCssText = "display:none;position:fixed;top:0px; left:0px; height:100%; z-index:1000; width:100%;filter:alpha(opacity:50); opacity:0.5;"
        + "background-color:black; *position:absolute;*width:expression(eval(document.body.offsetWidth+20));"
	    + "*height:expression(eval(document.body.offsetHeight+30));";

var PopContainerCssText = "position:fixed;top:0px;left:0px; width:100%;height:100%;display:none;z-index:1001;*position:absolute;"
        + "*height:expression(eval(document.documentElement.clientHeight));"
	    + "*left:expression(eval(document.documentElement.scrollLeft+document.documentElement.clientWidth-this.offsetWidth)-(parseInt(this.currentStyle.marginLeft,10)||0)-(parseInt(this.currentStyle.marginRight,10)||0)-10);"
	    + "*top:expression(eval(document.documentElement.scrollTop));";

var PopBtnCssText = "text-align: center;color:#303030;border: 1px solid #DCE1E6;"
        + "box-shadow: 0px 1px 2px #FFF inset, 0px -1px 0px #A8ABAE inset;border-radius: 5px;cursor:pointer;padding:4px 10px;"
        + "background: transparent -moz-linear-gradient(center top , #F2F3F7, #EBECED) repeat scroll 0% 0%;";

var PopMiniForm = "<table cellpadding='0' cellspacing='0' style='width:380px; margin:200px auto; text-align:center'>"
        + "<tr><td id='PopHead' style='height: 36px;background: #e8e8e8;'></td></tr>"
        + "<tr><td id='PopBody' style='height:100px; padding:10px; background:#fff; padding-bottom:20px'></td></tr>"
        + "<tr><td id='PopFoot' style='height: 36px;background: #e8e8e8;'></td></tr></table>";

function PopCreateEnvironment() {
    var PopBgObj = document.createElement("div");
    PopBgObj.id = "PopBg";
    PopBgObj.style.cssText = PopBgCssText;
    if (!$("#PopBgObj")[0]) { document.body.appendChild(PopBgObj); }

    var PopContainerObj = document.createElement("div");
    PopContainerObj.id = "PopContainer";
    PopContainerObj.style.cssText = PopContainerCssText;
    if (!$("#PopContainer")[0]) { document.body.appendChild(PopContainerObj); }
}

function PopShow(p,s) {

    PopCreateEnvironment();

    if (p == "warn") {
        $("#PopContainer").html(PopMiniForm);
        $('#PopBody').html("<span style='color:red'>" + s + "</span>");
        $('#PopFoot').html("<input type='button' style='" + PopBtnCssText + "' value='关闭' onclick='PopClose()' />");
    }
    else if (p == "confirm") {
        $("#PopContainer").html(PopMiniForm);
        $('#PopBody').html("<span style='color:red'>" + s + "</span>");
        $('#PopFoot').html("<input type='button' value='confirm' style='" + PopBtnCssText + "' onclick='PopOK()' />&nbsp;&nbsp;" +
                    "<input type='button' value='cancel' style='" + PopBtnCssText + "' onclick='PopClose()' />");
    }
    else if (p == "DelOneConfirm") {
        $("#PopContainer").html(PopMiniForm);
        $('#PopBody').html("<span style='color:red'>" + s + "</span>");
        $('#PopFoot').html("<input type='button' value='confirm' style='" + PopBtnCssText + "' onclick='DelOnePopOK()' />&nbsp;&nbsp;" +
                "<input type='button' value='cancel' style='" + PopBtnCssText + "' onclick='PopClose()' />");
    }
    else if (p == "DeleteConfirm") {
        $("#PopContainer").html(PopMiniForm);
        $('#PopBody').html("<span style='color:red'>" + s + "</span>");
        $('#PopFoot').html("<input type='button' value='confirm' style='" + PopBtnCssText + "' onclick='DeletePopOK()' />&nbsp;&nbsp;" +
                "<input type='button' value='cancel' style='" + PopBtnCssText + "' onclick='PopClose()' />");
    }
    else if (p == "confirmLoginOut") {
        $("#PopContainer").html(PopMiniForm);
        $('#PopBody').html("<span style='color:red'>" + s + "</span>");
        $('#PopFoot').html("<input type='button' value='confirm' style='" + PopBtnCssText + "' onclick='PopOKLoginOut()' />&nbsp;&nbsp;" +
                    "<input type='button' value='cancel' style='" + PopBtnCssText + "' onclick='PopClose()' />");
    }
    else if (p == "wait") {
        $("#PopContainer").html("<div style='width:380px; margin:300px auto; text-align:center'>"
           + "<span style='color:white;'>" + s + "</span></div>");
    }
    else if (p == "img") {
        $("#PopContainer").html(PopMiniForm);
        $('#PopBody').html("<span style=''>" + s + "</span>");
        $('#PopFoot').html("<input type='button' style='" + PopBtnCssText + "' value='close' onclick='PopClose()' />");
    }
    else if (p == "imgPre") {
        $("#PopContainer").html(PopMiniForm);
        $('#PopHead').html("<input type='button' style='" + PopBtnCssText + "' style='float:right; margin-right:10px;' value='close' onclick='PopClose()' />");
        $('#PopBody').html("<span style=''>" + s + "</span>");
    }
    else if (p == "panel") {
        $("#PopContainer").html(PopMiniForm);
        $('#PopHead').html("<input type='button' style='" + PopBtnCssText + "' style='float:right; margin-right:10px;' value='close' onclick='PopClose()' />");
        $('#PopBody').html("<span style=''>" + s + "</span>");
    }

    $("#PopBg").show();
    $("#PopContainer").show();

    $("#baiduReport").css("display","none"); 
    hideAllSelect();
}

function PopWait(s) {
    s = s == null ? "loading" : s;
    PopShow('wait', s);
}

function PopClose() {
    if ($("#PopBg")) { $("#PopBg").hide(); }
    if ($("#PopContainer")) { $("#PopContainer").hide(); }

    $("#baiduReport").css("display","block"); 
    showAllSelect();
}


function hideAllSelect() {
    if (($.browser.msie) && ($.browser.version == "6.0")) {
        $("select").css("visibility", "hidden");
    }
}

function showAllSelect() {
    if (($.browser.msie) && ($.browser.version == "6.0")) {
        $("select").css("visibility", "visible");
    }
}


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function GetJSId(id) {

    var arr = ["ContentPlaceHolder1","ContentPlaceHolder2","ContentPlaceHolder3","ContentPlaceHolder4","ContentPlaceHolder5",
               "PH_All", "PH_LeftMenu"];

    for (var i = 0; i < arr.length; i++) {
        if ($("#" + arr[i] + "_" + id).length != 0) {
            return arr[i] + "_" + id;
        }
    }

    return id
}



