<%@ Page Title="" Language="C#" MasterPageFile="~/CF/Page/MP.master" AutoEventWireup="true" CodeFile="What.aspx.cs" Inherits="CF_Page_What" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" Runat="Server">
    <link href="../CSS/What.css" rel="stylesheet" type="text/css" />
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">
    
    
    <div class="what_container">
    
        <div style=" background:url(../img/what_bg1.png)">
            <iframe src="https://www.youtube.com/embed/71So8U_7Djs" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        </div>
        <div style=" background:url(../img/what_bg2.png)">
            <iframe src="https://www.youtube.com/embed/kfCOzp4NjMc" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        </div>
        <div style=" background:url(../img/what_bg3.png)">
            <video src="../file/what_video1.mp4" controls="controls">
                您的浏览器不支持 video 标签。
            </video>
        </div>
        <div style=" background:url(../img/what_bg4.png)">
            <video src="../file/what_video1.mp4" controls="controls">
                您的浏览器不支持 video 标签。
            </video>
        </div>

    </div>

</asp:Content>

