 function Banner(banner,leftbtn,rightbtn,itembtn,banner_warp,type){
    this.banner = $(banner);
    this.leftbtn = $(leftbtn);
    this.rightbtn = $(rightbtn);
    this.itembtn = $(itembtn);
    this.index = 0;

    this.setInterval = null
    const _this = this;
    this.type = type;
    this.banner_warp = $(banner_warp)
     $(banner_warp).hover(function(){
         clearInterval(_this.setInterval);
    },function(){
         _this.validate()
     })
     $(this.rightbtn).bind("click",function(){
         if(_this.type === "o"){
             _this.oplay(_this.index,_this.index + 1 >= $(_this.banner).find("img").length ? 0 : _this.index + 1);
             if(_this.index + 1 >= $(_this.banner).find("img").length){
                 _this.index = 0;
             } else {
                 ++_this.index;
             }
         }
     })
     $(this.leftbtn).bind("click",function(){
         if(_this.type === "o"){
             _this.oplay(_this.index,_this.index - 1 < 0 ? $(_this.banner).find("img").length-1 : _this.index - 1);
             if(_this.index <= 0){
                 _this.index = $(_this.banner).find("img").length - 1;
             } else {
                 --_this.index;
             }
         }
     })
     $(this.itembtn).bind("mouseover",function(){
        if(_this.type === "o"){
            var prev = _this.index;
            _this.index = $(this).index();
            _this.oplay(prev,_this.index);
        }
     })
 }
 Banner.prototype.validate = function (){
     if(this.type === "o"){
         this.ostart()
     } else {
         this.lstart();
     }
 }
Banner.prototype.lstart = function(){
    const _this = this;
    this.setInterval = setInterval(function(){
        _this.lplay.apply(_this)
        if(_this.index + 1 >= $(_this.banner).children("li").length){
            _this.index = 0;
        } else {
            ++_this.index;
        }
    },2000)
}
 Banner.prototype.ostart = function(){
     const _this = this;
    this.setInterval = setInterval(function(){
        _this.oplay.apply(_this,[_this.index,_this.index + 1 >= $(_this.banner).find("img").length ? 0 : _this.index + 1])
        if(_this.index + 1 >= $(_this.banner).find("img").length){
            _this.index = 0;
        } else {
            ++_this.index;
        }
    },2000)
 };
Banner.prototype.lplay = function(){
    $(this.banner).find("li").stop(true)
    $(this.banner).find("li").eq(0).animate({"marginLeft": -(this.index * $(this.banner).width())},1000)
    $(this.itembtn).find("li").removeClass("selected")
    $(this.itembtn).find("li").eq(this.index).addClass("selected")
}
 Banner.prototype.oplay = function(prev,next){
     $(this.banner).find("img").stop(true);
     $(this.banner).find("img").eq(prev).animate({"opacity": "0"},1000)
     $(this.banner).find("img").eq(prev).css({"z-index":"0"});
     $(this.itembtn).eq(prev).removeClass("avite")
     $(this.banner).find("img").eq(next).animate({"opacity": "1"});
     $(this.banner).find("img").eq(next).css({"z-index":"1"},1000);
     $(this.itembtn).eq(next).addClass("avite")
 }