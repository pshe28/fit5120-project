<%@ Page Title="" Language="C#" MasterPageFile="~/CF/Page/MP.master" AutoEventWireup="true" CodeFile="Home.aspx.cs" Inherits="CF_Page_Home" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" Runat="Server">
    <link href="../CSS/Home.css" rel="stylesheet" type="text/css" />
    <!--script language="javascript">
        loopy()
        function loopy() {
            var sWord = ""
            while (sWord != "noconfusion") {
                sWord = prompt("please enter website password")
            }
            alert("Hello! Welcome")
        }
    </script-->
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">


    <div class="home_1" >
        <a href="What.aspx" style="">Here</a>
    </div>


    <table>
    <tr>
    <td><a href="Play.aspx"><img alt="" src="../Img/home2_left.png" style=" display:block" /></a></td>
    <td><a href="Watch.aspx"><img alt="" src="../Img/home2_middle.png" style=" display:block"  /></a></td>
    <td><a href="Explore.aspx"><img alt="" src="../Img/home2_right.png" style=" display:block"  /></a></td>
    </tr>
    </table>

    

</asp:Content>

