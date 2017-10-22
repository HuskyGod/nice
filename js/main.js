(function($){
    const banner1 = new Banner($("#banner .item_img"),$("#banner .lr_btn .left_btn"),$("#banner .lr_btn .right_btn"),$("#banner .banner_item ul li"),$("#banner"),"o")
    banner1.validate();
    Delay.init($("img"))
    RowBtn.init($(".row_3_box"),$(".row_3_btn > span").eq(0),$(".row_3_btn > span").eq(1))
    const banner2 = new Banner($("#row-6 .row_6_box div").eq(0).find(".row6_banner"),$("#row-6 .row_6_box div").eq(0).find(".row6_left_right_btn span").eq(0),$("#row-6 .row_6_box div").eq(0).find(".row6_left_right_btn span").eq(1),$("#row-6 .row_6_box div").eq(0).find(".row6_commodity_item ul"),$("#row-6 .row_6_box div").eq(0),"l")
    banner2.validate();
})(jQuery)