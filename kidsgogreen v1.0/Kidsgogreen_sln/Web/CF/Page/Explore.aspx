<%@ Page Title="" Language="C#" MasterPageFile="~/CF/Page/MP.master" AutoEventWireup="true" CodeFile="Explore.aspx.cs" Inherits="CF_Page_Explore" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" Runat="Server">
    <link href="../CSS/Explore.css" rel="stylesheet" type="text/css" />
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">


    <div class="explore_container">
    
        <div style=" background:url(../img/explore_bg1.png); height:600px">
            <div style=" margin-left:120px; margin-top:140px;">
                Kids To Green <br />
                Kids To Green <br />
                Kids To Green <br />
                Kids To Green <br />
                Kids To Green <br />
                Kids To Green <br />
                Kids To Green <br />
                Kids To Green <br />
                Kids To Green 
            </div>
            <div style=" margin-left:500px; margin-top:140px;">
                 <iframe src="https://public.tableau.com/views/WastedataAreaChart/AreaChart?:showVizHome=no&:embed=true&:showShareOptions=false&:toolbar=no"
                                width="610" height="385" style="height: 368px; width: 592px"></iframe>
            </div>
        </div>


        <div style=" background:url(../img/explore_bg2.png); height:523px">
            <div style=" margin-left:120px; margin-top:65px;">
                Kids To Green <br />
                Kids To Green <br />
                Kids To Green <br />
                Kids To Green <br />
                Kids To Green <br />
                Kids To Green <br />
                Kids To Green <br />
                Kids To Green <br />
                Kids To Green 
            </div>
            <div style="margin-left:500px; margin-top:65px;">
                  <iframe src="https://public.tableau.com/views/WastedataBubbleChart/Bubblechart?:showVizHome=no&:embed=true&:showShareOptions=false&:toolbar=no"
                                width="610" height="385" style="height: 368px; width: 592px"></iframe>
            </div>
        </div>


        <div style=" background:url(../img/explore_bg3.png); height:526px">
          <div style="margin-left:115px; margin-top:70px;">
                Kids To Green <br />
                Kids To Green <br />
                Kids To Green <br />
                Kids To Green <br />
                Kids To Green <br />
                Kids To Green <br />
                Kids To Green <br />
                Kids To Green <br />
                Kids To Green 
          </div>
          <div style=" margin-left:505px; margin-top:70px;">
              <iframe src="https://public.tableau.com/views/WastedataBarChart/BarChart?:showVizHome=no&:embed=true&:showShareOptions=false&:toolbar=no"
                                width="610" height="385" style="height: 368px; width: 592px"></iframe>
          </div>
        </div>

        

        


    </div>


</asp:Content>

