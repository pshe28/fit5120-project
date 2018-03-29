<%@ Page Title="" Language="C#" MasterPageFile="~/CF/Page/MP.master" AutoEventWireup="true" CodeFile="Explore.aspx.cs" Inherits="CF_Page_Explore" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" Runat="Server">
    <link href="../CSS/Explore.css" rel="stylesheet" type="text/css" />
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">


    <div class="explore_container">
    
        <div style=" background:url(../img/explore_bg1.png); height:600px">
            <div style=" margin-left:120px; margin-top:140px;">
                Chart 1 <br />
                The Area Graph alongside 
                describes the Average Waste 
                collected each month from 
                the year 2009 to 2011
                Use the filter on the right
                of the chart to see the trends
                according to waste type.
            </div>
            <div style=" margin-left:500px; margin-top:140px;">
                 <iframe src="https://public.tableau.com/views/WastedataAreaChart/AreaChart?:showVizHome=no&:embed=true&:showShareOptions=false&:toolbar=no"
                                width="610" height="385" style="height: 368px; width: 592px"></iframe>
            </div>
        </div>


        <div style=" background:url(../img/explore_bg2.png); height:523px">
            <div style=" margin-left:120px; margin-top:65px;">
                Chart 2 <br />
                - The Bubble Chart alongside 
                describes the total waste 
                collected percentage as 
                the sum of waste types.<br />
                - Use the filter on the right
                of the chart to see yearly trends.
            </div>
            <div style="margin-left:500px; margin-top:65px;">
                  <iframe src="https://public.tableau.com/views/WastedataBubbleChart/Bubblechart?:showVizHome=no&:embed=true&:showShareOptions=false&:toolbar=no"
                                width="610" height="385" style="height: 368px; width: 592px"></iframe>
            </div>
        </div>


        <div style=" background:url(../img/explore_bg3.png); height:526px">
          <div style="margin-left:115px; margin-top:70px;">
                Chart 3 <br />
                - The Bar Graph on the right
                provides a visualisation of 
                the total waste 
                collected per year.<br />
                - The colour scheme describes
                the type of waste type 
                in each of the bars.
          </div>
          <div style=" margin-left:505px; margin-top:70px;">
              <iframe src="https://public.tableau.com/views/WastedataBarChart/BarChart?:showVizHome=no&:embed=true&:showShareOptions=false&:toolbar=no"
                                width="610" height="385" style="height: 368px; width: 592px"></iframe>
          </div>
        </div>

        <div style=" background:url(../img/explore_bg2.png); height:523px">
            <div style=" margin-left:120px; margin-top:65px;">
                Chart 4 <br />
                - The Scatter plot on 
                the right shows the impact 
                of increasing population 
                on Total Waste collected.<br />
                - The mouse-over on 
                the points describe 
                the population in thousands
                for the particular year.
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

