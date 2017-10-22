var RowBtn = (function ($) {
    let width;
    let left;
    let right;
    let i = 0;
    function init(wrap,leftbtn,rigbtn){
        width = $(wrap).width()
        left = $(leftbtn);
        right = $(rigbtn);
        right.bind("click",function(){
            $(wrap).stop(true)
            if((1500 * -(i)) + (-1500) > -(width-1500)) {
                i++;
                $(wrap).animate({"marginLeft": (1500 * -(i))},1000);
            } else {
                i = 1;
                $(wrap).animate({"marginLeft": -(width-1500)},1000);
            }
            // i++;
            // $(wrap).animate({"marginLeft":(1200 * -(i)) < -(width-1200) ? -(width-1200) : (1200 * -(i))},1000);
        })
        left.bind("click",function(){
            $(wrap).stop(true)
            if((1500 * -(i)) < 0) {
                i--;
                $(wrap).animate({"marginLeft":(1500 * -(i))},1000);
            }
            // i--;
            // $(wrap).animate({"marginLeft":-(1200 * -(i)) > 0 ? 0 : -(1200 * -(i)) },1000);
        })
    }
    return {
        init: init
    }
})(jQuery)
