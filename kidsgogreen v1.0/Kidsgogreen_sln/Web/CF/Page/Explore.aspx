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
                  <div class='tableauPlaceholder' id='viz1522239563865' >
            <noscript>
                <a href='#'>
                    <img alt='Population Growth Impact on Waste ' src='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Po&#47;Population_vs_Waste&#47;ScatterPlot&#47;1_rss.png' style='border: none' />
                </a>
            </noscript>
            <object class='tableauViz'  style='display:none;'>

                <param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' /> 
                <param name='embed_code_version' value='3' /> 
                <param name='site_root' value='' />
                <param name='name' value='Population_vs_Waste&#47;ScatterPlot' />
                <param name='tabs' value='no' />
                <param name='toolbar' value='yes' />
                <param name='static_image' value='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Po&#47;Population_vs_Waste&#47;ScatterPlot&#47;1.png' /> 
                <param name='animate_transition' value='yes' />
                <param name='display_static_image' value='yes' />
                <param name='display_spinner' value='yes' />
                <param name='display_overlay' value='yes' />
                <param name='display_count' value='yes' />
            </object>
            </div>               
        <script type='text/javascript'>
            var divElement = document.getElementById('viz1522239563865');
            var vizElement = divElement.getElementsByTagName('object')[0];
            vizElement.style.width = '100%';
            vizElement.style.height = (divElement.offsetWidth * 0.55) + 'px';
            var scriptElement = document.createElement('script');
            scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
            vizElement.parentNode.insertBefore(scriptElement, vizElement);
        </script>
            </div>
        </div>


        

        


    </div>


</asp:Content>

