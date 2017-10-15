 function Banner(banner,leftbtn,rightbtn,itembtn,banner_warp){
    this.banner = $(banner);
    this.leftbtn = $(leftbtn);
    this.rightbtn = $(rightbtn);
    this.itembtn = $(itembtn);
    this.index = 0;
    this.setInterval = null
    const _this = this;
     $(banner_warp).hover(function(){
         clearInterval(_this.setInterval);
    },function(){
         _this.play()
     })
     $(this.rightbtn).bind("click",function(){
         _this.leftplay(_this.index,_this.index + 1 >= $(_this.banner).find("img").length ? 0 : _this.index + 1);
         if(_this.index + 1 >= $(_this.banner).find("img").length){
             _this.index = 0;
         } else {
             ++_this.index;
         }
     })
     $(this.leftbtn).bind("click",function(){

         _this.rightplay(_this.index,_this.index - 1 < 0 ? $(_this.banner).find("img").length-1 : _this.index - 1);
         if(_this.index <= 0){
             _this.index = $(_this.banner).find("img").length - 1;
         } else {
             --_this.index;
         }
     })
     $(this.itembtn).bind("mouseover",function(){
         var prev = _this.index;
         _this.index = $(this).index();
         _this.leftplay(prev,_this.index);
     })
 }
 Banner.prototype.play = function(){
     const _this = this;
    this.setInterval = setInterval(function(){
        _this.leftplay.apply(_this,[_this.index,_this.index + 1 >= $(_this.banner).find("img").length ? 0 : _this.index + 1])
        if(_this.index + 1 >= $(_this.banner).find("img").length){
            _this.index = 0;
        } else {
            ++_this.index;
        }
    },2000)
 };
 Banner.prototype.leftplay = function(prev,next){
     console.log(prev,next)
     $(this.banner).find("img").stop(true,true);
     $(this.banner).find("img").eq(prev).animate({"z-index":"0","opacity": "0"},2000,function(){
         $(this.banner).find("img").eq(prev).css({"display":"none"})
     });
     $(this.itembtn).eq(prev).removeClass("avite")
     $(this.banner).find("img").eq(next).animate({"z-index":"1","opacity": "1"},2000,function(){
         $(this.banner).find("img").eq(next).css({"display":"block"})
     });
     $(this.itembtn).eq(next).addClass("avite")
 }
 Banner.prototype.rightplay = function(prev,next){
     console.log(prev,next)
     $(this.banner).find("img").stop(true,true);
     $(this.banner).find("img").eq(prev).animate({"z-index":"0","opacity": "0"});
     $(this.itembtn).eq(prev).removeClass("avite")
     $(this.banner).find("img").eq(next).animate({"z-index":"1","opacity": "1"});
     $(this.itembtn).eq(next).addClass("avite")
 }