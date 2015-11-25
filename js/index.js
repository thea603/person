$(function(){
	var win_width=$(window).width();
	var win_height=$(window).height();
	var win_half = win_width/2;
	var win_left =win_half/2;
	var about = $("#about").offset().top;
	var about = $("#about").offset().top;

	$('.banner').css({'width':win_width,'height':win_height})
	$('#info').css({'width':win_width,'height':win_height})
	$('#tech').css({'width':win_width,'height':win_height})
	$('#study').css({'width':win_width,'height':win_height})
	$('#con').css({'width':win_width,'height':win_height})
	$('.show').css({'width':win_width,'height':win_height})
	$('.ex').css({'width':win_width,'height':win_height})
	$('.geometry').css({'width':win_width/2,'height':win_height,'marginLeft':win_left})

	$('.top').click(function(){
		$(document.body).animate({scrollTop:0}, 1000)
	})
	$(document).scroll(function(){
	    	var scroll = $(document).scrollTop();
	    	if(scroll>400){
	    		 $('.header').addClass('header_animate');
	    	}else if (scroll<400){
	    		 $('.header').removeClass('header_animate');
	    	}else if(scroll>about){
	    		alert(124);
	    	}
	    })

	// $("#parallax .parallax-layers").parallax({}, {
 //        xparallax: "50%",
 //        yparallax: '30%',
 //        height: 100
 //    });
    
    $('a').click(function(){
    	 $("html, body").animate({    
            scrollTop: $($(this).attr("href")).offset().top + "px"    
        }, 1500);    
        return false;
    })

	function revealOnScroll() {
	  var scrolled = $(window).scrollTop();
	    var current = $("#about .content"), // 当前元素
	      w_height = $(window).height(), //视窗高度
	      offsetTop = current.offset().top; //当前元素离顶部的高度
	    if (scrolled + w_height - 50 > offsetTop) {
	      current.addClass("content_animate");
	    } else {
	      current.removeClass("contente_animate");
	    }
	}
	$(window).on("scroll", revealOnScroll);
})


