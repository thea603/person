$(function(){
	var win_width=$(window).width();
	var win_height=$(window).height();
	var about = $("#about").offset().top;
	var about = $("#about").offset().top;

	$('.banner').css({'width':win_width,'height':win_height})
	$('#info').css({'width':win_width,'height':win_height})
	$('#tech').css({'width':win_width,'height':win_height})
	$('#study').css({'width':win_width,'height':win_height})
	$('#con').css({'width':win_width,'height':win_height})
	$('.show').css({'width':win_width,'height':win_height})
	$('.ex').css({'width':win_width,'height':win_height})
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

    $('.svg-wrapper .text').click(function(){
    	 $('.show_page').addClass('show_page_animate');
    	 $('.main').removeClass('mains')
    })

    $('a').click(function(){
    	 $("html, body").animate({    
            scrollTop: $($(this).attr("href")).offset().top + "px"    
        }, 1500);    
        return false;
    })

	function revealOnScroll() {
	  var scrolled = $(window).scrollTop();
	    var current = $("#about .content"), 
	      w_height = $(window).height(), 
	      offsetTop = current.offset().top; 
	    if (scrolled + w_height - 50 > offsetTop) {
	      current.addClass("content_animate");
	    } else {
	      current.removeClass("contente_animate");
	    }
	}
	$(window).on("scroll", revealOnScroll);



	function disScroll() {
	  var scrolled = $(window).scrollTop();
	    var current = $("#dis"),
	      w_height = $(window).height(), 
	      offsetTop = current.offset().top;
	    if (scrolled + w_height - 50 > offsetTop) {
	      current.addClass("dis_animate");
	    } else {
	      current.removeClass("dis_animate");
	    }
	}
	$(window).on("scroll", disScroll);

	function webScroll() {
	  var scrolled = $(window).scrollTop();
	    var current = $("#web"), 
	      w_height = $(window).height(), 
	      offsetTop = current.offset().top; 
	    if (scrolled + w_height - 50 > offsetTop) {
	      current.addClass("web_animate");
	    } else {
	      current.removeClass("web_animate");
	    }
	}
	$(window).on("scroll", webScroll);

		function proScroll() {
	  var scrolled = $(window).scrollTop();
	    var current = $("#pro"), 
	      w_height = $(window).height(), 
	      offsetTop = current.offset().top; 
	    if (scrolled + w_height - 50 > offsetTop) {
	      current.addClass("pro_animate");
	    } else {
	      current.removeClass("pro_animate");
	    }
	}
	$(window).on("scroll", proScroll);
})


