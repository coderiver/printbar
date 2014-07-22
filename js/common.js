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

	var shirt = $('.js-shirt')
	shirt.click(function(){
		shirt.removeClass('is-active');
		$(this).addClass('is-active');
		$('.js-shirt-block').show();
		var window_width = $(window).width(),
			item = $('.js-shirt-block'),
			shirt_prev_all = $(this).prevAll().length;
		if (window_width > 1200) {
			var row_counter = 5;
		}
		else {
			var row_counter = 4;
		};
		var row = shirt_prev_all/row_counter;
		function isInteger(num) {
		  return (num ^ 0) === num;
		}
		if (isInteger(row)) {
			if (row == 0) {
				row = 0;
			}
			else {
				row = row - 1;
			};
		}
		else {
			row = Math.floor(row);
		};
		row = row*row_counter;
		$('.js-shirt-info').remove();
		$(this).parent().find('.js-shirt :eq('+row+')').before('<div class="js-shirt-info"></div>');
		item.appendTo('.js-shirt-info');
		//slick
		$('.single-item').unslick();
		$('.single-item').slick();
	});

	$('.clothing__field').on('click', '.js-shirt-btn', function(){
		$('.js-shirt-block').hide();
		$('.js-shirt').removeClass('is-active');
	});

	$('.js-more').click(function() {
	   var items = $('#load-shirts .js-shirt');
	   items.appendTo($('.tab-cont.is-active').find('.clothing__field'));
	});


	var js_shirt_button = $(".js-shirt");
	var wHeight = $(window).height();
	var ph = (wHeight - 514) / 2;

	js_shirt_button.click(function() {
	    $('html, body').animate({
	        scrollTop: ($(".js-shirt-block").offset().top - ph)
	    }, 600);
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
		if ( js_scroll > 65 ) { 
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

	//tab2
	function tab2() {
        var el = $(".js-tab2");
        var tab_link = el.find("a");
        var tab_item = el.find("li");
        var tab_cont = el.parents(".js-tab-group2").find(".js-tab-cont2");
        tab_cont.hide();
        tab_item.first().addClass("is-active");
        el.parents(".js-tab-group2").find(".js-tab1").show();
        $('body').on("click", ".js-tab2 a", function() {
            var index = $(this).attr("href");
            tab_item.removeClass("is-active");
            $(this).parent().addClass("is-active");
            tab_cont.hide();
            $(this).parents(".js-tab-group2").find("."+index).show();
            return false;
        });
	}
	tab2();

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
	
	$(".section-title:first").addClass('open');
		var openOnLoad = $(".section-title:first").next('.collapsing-section');
		$(openOnLoad).slideDown();

		$(".section-title").on('focus', function () {
			if (!$(this).data("mouseDown"))
				$(this).click();
		});

		$(".section-title").on('mousedown', function () {
			$(this).data("mouseDown", true);
		});

		$(".section-title").on('mouseup', function () {
			$(this).removeData("mouseDown");
		});

		$(".section-title").on('click', function (e) {
		if ($(this).hasClass('open')) {
			$('.section-title').removeClass('open');
			$('.collapsing-section').slideUp();
		} else {
			$('.section-title').removeClass('open');
			$('.collapsing-section').slideUp();
			$(this).addClass('open');
			var sectionToOpen = $(this).next('.collapsing-section');
			$(sectionToOpen).slideDown();
		}
	});
});

//scrollPane
$('.scroll-pane').jScrollPane({
	hideFocus: true
});