head.ready(function() {

	$(document).click(function() {
        $(".js-select-list").hide();
        $(".js-select").removeClass("is-active");
    });

	$('.js-login').click(function(){
		$('.js-topic').hide();
		$('.js-login-block').show();
	});

	$('.js-close').click(function(){
		$('.js-topic').show();
		$('.js-login-block').hide();
	});

	$('.js-delete').click(function(){
		$(this).parents('.js-product').remove();
	});

	$('.btn-close-basket, .js-basket').click(function(){
		$('.js-basket-block').slideToggle();
	});

	$('.js-shirt').click(function(){
		$('.js-shirt').removeClass('is-active');
		$(this).addClass('is-active');
	});

	//select
    function selectList() {
        var select = $(".js-select");
        var select_list = $(".js-select-list");
        $("body").on("click", ".js-select", function(event){
            if ($(this).hasClass("is-active")) {
                select.removeClass("is-active");
                select_list.hide();
            }
            else {
                select.removeClass("is-active");
                select_list.hide();
                $(this).find(".js-select-list").show();
                $(this).addClass("is-active");
            }
            event.stopPropagation();
        });
        $("body").on("click", ".js-select-list li", function(event){
            var id = $(this).attr("data-id");
            var text = $(this).text();
            $(this).parents(".js-select").find(".js-select-text").text(text);
            $(this).parents(".js-select").find(".js-select-input").val(id);
            $(this).parent().hide();
            $(this).parents(".js-select").removeClass("is-active");
            event.stopPropagation();
        });
    }  
    selectList();
    $("body").on("click", ".js-select", function(event){
        event.stopPropagation();
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
				// tab_cont.hide();
				tab_item.first().addClass("is-active");
				$(this).parents(".js-tab-group").find(".js-tab1").addClass("is-active");
				tab_link.on("click", function() {
					var index = $(this).attr("href");
					tab_item.removeClass("is-active");
					$(this).parent().addClass("is-active");
					tab_cont.removeClass('is-active')
					$(this).parents(".js-tab-group").find("."+index).addClass("is-active");
					return false;
				});
			});
	}
	tab();

	// slick
	$('.responsive').slick({
		dots: true,
		infinite: true,
		speed: 300,
		slidesToShow: 5,
		slidesToScroll: 1,
		responsive: [
		{
			breakpoint: 1285,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 1
			}
		},
		{
		breakpoint: 1200,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1
			}
		}
		]
	});
	
	//slick
	$('.single-item').slick();
});
