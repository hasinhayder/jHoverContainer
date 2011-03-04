<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.4.4/jquery.min.js"></script>
        <script type="text/javascript" src="js/jeasing.js"></script>
        <script type="text/javascript" src="js/jhovercontainer.js"></script>
        <title>jHoverContainer PLugin Demo</title>

    </head>
    <body>
        <h1>Container with Sliding Image and nice rollover effects</h1>
        <p>Move your mouse over these images to see the customizatble content behind.
            <a href="https://github.com/hasinhayder/jHoverContainer">Fork in Github</a>
        </p>
        <table width="1200" cellpadding="30" cellspacing="10">
            <tr>
                <td><div class="temp1"></div></td>
                <td><div class="temp2"></div></td>
                <td><div class="temp3"></div></td>
                <td><div class="temp4"></div></td>
            </tr>
            <tr>
                <td><div class="temp5"></div></td>
                <td><div class="temp6"></div></td>
                <td><div class="temp7"></div></td>
                <td><div class="temp8"></div></td>
            </tr>
 
        </table>
        <script type="text/javascript">
            
            $(document).ready(function(){
                $(".temp1").jHoverContainer({image:"http://scripts.ofhas.in/hovercontainer/images/image2.jpg",slide:"right"});
                $(".temp2").jHoverContainer({image:"http://scripts.ofhas.in/hovercontainer/images/image6.jpg",slide:"left"});
                $(".temp3").jHoverContainer({image:"http://scripts.ofhas.in/hovercontainer/images/image3.jpg",slide:"up"});
                $(".temp4").jHoverContainer({image:"http://scripts.ofhas.in/hovercontainer/images/image6.jpg",slide:"down"});
                $(".temp5").jHoverContainer({image:"http://scripts.ofhas.in/hovercontainer/images/image6.jpg",slide:"down-right"});
                $(".temp6").jHoverContainer({image:"http://scripts.ofhas.in/hovercontainer/images/image2.jpg",slide:"down-left"});
                $(".temp7").jHoverContainer({image:"http://scripts.ofhas.in/hovercontainer/images/image6.jpg",slide:"up-right"});
                $(".temp8").jHoverContainer({image:"http://scripts.ofhas.in/hovercontainer/images/image3.jpg",slide:"up-left"});

            });

            

            
        </script>
    </body>
</html>
