        var key = 0;
	    $(window).scroll(function(event) {
	    if(key == 0)
		{
			var _top = $(window).scrollTop();//获取当前滚动条的高度；
			if(_top > 250)
			{
				$(".nav").show();
			}
			else
			{
				$(".nav").hide();
			}
			$(".main ul li").each(function() {
				var _index = $(this).index();
				var _height = $(this).offset().top;
				if(_height > _top)
				{
					$(".nav ul li").eq(_index).addClass('on').siblings().removeClass('on');
                    return false;
				}
			});
			}
			});

	      $('.nav ul li').click(function() {
	      	    key = 1;
				var _index = $(this).index();
				$(".nav ul li").eq(_index).addClass('on').siblings().removeClass('on');
				var _height = $(".main ul li").eq(_index).offset().top;
				$("html,body").animate({scrollTop:_height},500,function(){
					key = 0;
				})
			});