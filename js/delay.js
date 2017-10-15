var Delay = (function ($){
    var imgs = [];
    function init(img){
        for(let i = 0;i < img.length;i++){
            imgs.push(img[i]);
        }
        delay();
        $(window).bind("load",function(){
            imgs.map(function(item,i){
                loading(item,i)
            })
        })
        $(document).bind("scroll",function(){
            imgs.map(function(item,i){
                loading(item,i)
            })
        })
    }
    function delay(){
        console.log($(window).scrollTop())
        imgs = imgs.map(function(item,i){
            return {
                elem: item,
                src: $(item).attr("data-src"),
                top: $(item).offset().top + $(window).scrollTop()
            }
        })
    }
    function loading(obj,i){
        if(obj.top < $(window).height() + $(window).scrollTop()) {
            // $(obj.elem).animate({"opacity":0},2000,function(){
            //     $(obj.elem).attr("src",obj.src)
            // })
            // $(obj.elem).bind("load",function(){
            //     $(this).animate({"opacity":1},2000)
            // })
            $(obj.elem).attr("src",obj.src)
        }
    }
    return {
        init: init,
    }
})(jQuery)