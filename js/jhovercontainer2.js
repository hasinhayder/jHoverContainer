/**
 * @name jHoverContainer Plugin
 * @author Hasin Hayder [hasin@leevio.com]
 * @date Mar 03, 2011
 * @license New BSD
 * @demo http://scripts.ofhas.in/jhovercontainer/
 *
 * check the demo.html file for detailed example :)
 */

(function($){
    var opts;
    var styleadded = false;
    var slides = ["up","right","down","left","up-right","up-left","down-left","down-right"];
    $.fn.jHoverContainer=function(options){
        var defaults = {
            slide:"right",
            duration:400,
            easing:"circEaseIn",
            width:226,
            height:147,
            borderWidth:5,
            borderColor:"#444"
        };
        opts = $.extend(defaults, options);
        if(!styleadded){
            $("head").append("\n\
                    <style type='text/css'>\n\
                        .hc{\n\
                            border:"+opts.borderWidth+"px solid "+opts.borderColor+";\n\
                            width:"+opts.width+"px;\n\
                            height:"+opts.height+"px;\n\
                            position:relative;\n\
                            overflow: hidden;\n\
                        }\n\
                        .hcimage{\n\
                            position: absolute;\n\
                            z-index: 18;\n\
                            width:"+opts.width+"px;\n\
                            height:"+opts.height+"px;\n\
                        }\n\
                        .hccontainer{\n\
                            position: absolute;\n\
                            top:0;\n\
                            left:0;\n\
                            z-index: 17;\n\
                            font:12px/12px 'Helvetica Neue',Arial,Helvetica,Geneva,sans-serif;\n\
                            margin:10px;\n\
                        }\n\
                    </style>\n\
                    ");
            styleadded=true;
        }
        $(this).each(function(i,item){
            var img = $(this).find("img").attr("src");
            var title = $(this).find("a").attr("title");
            var content = $(this).find("a").html();
            var link = $(this).find("a").attr("href");
            $(this).find("a").remove();
            $(this).find("img").remove();
            var slide = "";
            if(opts.slide=="random"){
                var slideno = Math.floor(Math.random()*8);
                slide = slides[slideno];
                alert(slideno+"\n"+slide);
            }
            else
            slide = opts.slide;
            $(this).html("\n\
                    <div class='hc'>\n\
                        <div class='hcimage'>\n\
                            <img src='"+img+"' alt=''/>\n\
                        </div>\n\
                        <div class='hccontainer'>\n\
                            <span class='hctitle'>"+title+"</span>\n\
                            <p class='hccontent'>"+content+"</p>\n\
                            <div class='hclinkpreview'>\n\
                                <div class='hclink'>\n\
                                    <a href='"+link+"'>"+title+"</a>\n\
                                </div>\n\
                            </div>\n\
                        <div class='hcclear'></div>\n\
                        </div>\n\
                    </div>\n\
                    ").find(".hcimage")
                            .data("slide",slide)
                            .bind("mouseenter",$.fn.hcSlideOut).end()
                      .find(".hc").bind("mouseleave",$.fn.hcSlideIn)
                      .data("slide",slide);
        });
    }
    $.fn.hcSlideOut = function(){
        var anim = {};
        var slide = $(this).data("slide");
        switch(slide){
            case "right":
                anim.left="+"+opts.width;
                break
            case "left":
                anim.left="-"+opts.width;
                break
            case "up":
                anim.top="-"+opts.height;
                break
            case "down":
                anim.top="+"+opts.height;
                mysql_connect();
                break
            case "down-right":
                anim.top="+"+opts.height;
                anim.left="+"+opts.width;
                break
            case "down-left":
                anim.top="+"+opts.height;
                anim.left="-"+opts.width;
                break
            case "up-right":
                anim.top="-"+opts.height;
                anim.left="+"+opts.width;
                break
            case "up-left":
                anim.top="-"+opts.height;
                anim.left="-"+opts.width;
                break

        }
        $(this).animate(anim,{queue:false, duration:opts.duration, easing:opts.easing,complete:function() {
            $(this).parent().data("animationcomplete","1");
        }} );
    }
    $.fn.hcSlideIn = function(){
        var anim = {left:0,top:0};
        if($(this).data("animationcomplete")=='1'){
            $(this).find(".hcimage").animate(anim, {queue:false, duration:opts.duration, easing:opts.easing});
        }
    }
})(jQuery);