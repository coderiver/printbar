head.ready(function() {

	$(document).on("click", function(){

	});

	$('.js-login').click(function(){
		$('.js-topic').addClass('is-active');
	});
	$('.js-close').click(function(){
		$('.js-topic').removeClass('is-active');
	});


	//scroll
	$(window).scroll(function(){
		var js_scroll = $(window).scrollTop();
		if ( js_scroll > 650 ) { 
			$(".js-top-nav").addClass('is-active'); 
		}
		else { 
			$(".js-top-nav").removeClass('is-active'); 
		};
	});

	//tab
	function tab() {
			$(".js-tab").each(function(){
				var tab_link = $(this).find("a");
				var tab_item = $(this).find("li");
				var tab_cont = $(this).parents(".js-tab-group").find(".js-tab-cont");
				tab_cont.hide();
				tab_item.first().addClass("is-active");
				$(this).parents(".js-tab-group").find(".js-tab1").show();
				tab_link.on("click", function() {
					var index = $(this).attr("href");
					tab_item.removeClass("is-active");
					$(this).parent().addClass("is-active");
					tab_cont.hide();
					$(this).parents(".js-tab-group").find("."+index).show();
					return false;
				});
			});
	}
	tab();


	//slick
	$('.responsive').slick({
		dots: true,
		infinite: true,
		speed: 300,
		slidesToShow: 5,
		slidesToScroll: 1,
		responsive: [
		{
			breakpoint: 1000,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 1,
				infinite: true,
				dots: true
			}
		}
		]
	});
});
