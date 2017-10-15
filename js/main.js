(function($){
    const banner1 = new Banner($("#banner .item_img"),$("#banner .lr_btn .left_btn"),$("#banner .lr_btn .right_btn"),$("#banner .banner_item ul li"),$("#banner"))
    banner1.play();
    Delay.init($("img"))
})(jQuery)