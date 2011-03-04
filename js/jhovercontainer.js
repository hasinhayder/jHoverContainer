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
    $.fn.jHoverContainer=function(options){
        var defaults = {
            slide:"right",
            duration:400,
            easing:"circEaseIn",
            width:226,
            height:147,
            image:"http://scripts.ofhas.in/hovercontainer/images/image2.jpg",
            content:"Lorem Ipsum Doler Sit Amet",
            borderWidth:5,
            borderColor:"#444",
            title:"Hello World",
            linkTitle:"READ MORE",
            link:"http://google.com"
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
            $(this).html("\n\
                    <div class='hc'>\n\
                        <div class='hcimage'>\n\
                            <img src='"+opts.image+"' alt=''/>\n\
                        </div>\n\
                        <div class='hccontainer'>\n\
                            <span class='hctitle'>"+opts.title+"</span>\n\
                            <p class='hccontent'>"+opts.content+"</p>\n\
                            <div class='hclinkpreview'>\n\
                                <div class='hclink'>\n\
                                    <a href='"+opts.link+"'>"+opts.linkTitle+"</a>\n\
                                </div>\n\
                            </div>\n\
                        <div class='hcclear'></div>\n\
                        </div>\n\
                    </div>\n\
                    ").find(".hcimage")
                            .data("slide",opts.slide)
                            .bind("mouseenter",$.fn.hcSlideOut).end()
                      .find(".hc").bind("mouseleave",$.fn.hcSlideIn)
                      .data("slide",opts.slide);
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