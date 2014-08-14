head.ready(function() {

	$(document).click(function() {
        $(".js-select-list").hide();
        $(".js-select").removeClass("is-active");
		$(".js-size-block").removeClass("is-active");
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

	// $(".color__block").each(function(){

	// });
	$(".color__block").click(function(){
		$(".color__block").removeClass("is-active");
		$('.editor__item .editor__checkbox input').prop('checked', false);
		$(this).addClass("is-active");
	});

	$('.editor__item .editor__checkbox input').click(function(){
		if ($('.editor__item .editor__checkbox input').prop('checked')) {
			$('.color__block').removeClass('is-active');
		}
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
            var text = $(this).html();
            $(this).parents(".js-select").find(".js-select-text").html(text);
            $(this).parents(".js-select").find(".js-select-input").val(id);
            $(this).parent().hide();
            $(this).parents(".js-select").removeClass("is-active");
            event.stopPropagation();
			if ($(this).parents(".js-select").hasClass('text-family')) {
				$('.panel__text').css('font-family', text);
			} else if ($(this).parents(".js-select").hasClass('text-size')) {
				$('.panel__text').css('font-size', text + 'pt');
			}
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

	$('.panel__bg__rotate').change(function() { 
		setTransform($('.panel__bg__rotate').val(), $('.panel__bg__resize').val()/100);
	});
	
	$('.panel__bg__resize').change(function() { 
		setTransform($('.panel__bg__rotate').val(), $('.panel__bg__resize').val()/100);
	});
	
	function setTransform(rotate, scale) {
		$('.panel__bg').css({'-moz-transform':'rotate(' + rotate + 'deg) scale(' + scale + ')'});
		$('.panel__bg').css({'-ms-transform':'rotate(' + rotate + 'deg) scale(' + scale + ')'});
		$('.panel__bg').css({'-webkit-transform':'rotate(' + rotate + 'deg) scale(' + scale + ')'});
		$('.panel__bg').css({'-o-transform':'rotate(' + rotate + 'deg) scale(' + scale + ')'});
		$('.panel__bg').css({'transform':'rotate(' + rotate + 'deg) scale(' + scale + ')'});
	}
	
	function moveEl(targetEl, e) {
		var beginX = e.pageX;
		var beginY = e.pageY;
		var beginElLeft = parseInt($(targetEl).css('left'));
		var beginElTop = parseInt($(targetEl).css('top'));
		var handlers = {
			mousemove : function(e){
				var x = e.pageX;
				var y = e.pageY;
				var offsetX = (x - beginX);
				var offsetY = (y - beginY);
				$(targetEl).css('left',(beginElLeft + offsetX) + 'px');
				$(targetEl).css('top',(beginElTop + offsetY) + 'px');
			},
			mouseup : function(e){
				$(this).off(handlers);   
			}
		};
		$(document).on(handlers);
	}

	function resizeEl(targetEl, e) {
		var beginX = e.pageX;
		var beginY = e.pageY;
		var beginElWidth = parseInt($(targetEl).css('width'));
		var beginElHeight = parseInt($(targetEl).css('height'));
		var handlers = {
			mousemove : function(e){
				var x = e.pageX;
				var y = e.pageY;
				var offsetX = (x - beginX);
				var offsetY = (y - beginY);
				$(targetEl).css('width',(beginElWidth + offsetX) + 'px');
				$(targetEl).css('height',(beginElHeight + offsetY) + 'px');
			},
			mouseup : function(e){
				$(this).off(handlers);   
			}
		};
		$(document).on(handlers);
	}

	function rotateEl(rotEl) {
		var handlers = {
			mousemove : function(e){
				var x = e.pageX;
				var y = e.pageY;
				var myAngle = Math.round(diff(x, y, rotEl));
				$(rotEl).css({'-moz-transform':'rotate(' + myAngle + 'deg)'});
				$(rotEl).css({'-ms-transform':'rotate(' + myAngle + 'deg)'});
				$(rotEl).css({'-webkit-transform':'rotate(' + myAngle + 'deg)'});
				$(rotEl).css({'-o-transform':'rotate(' + myAngle + 'deg)'});
				$(rotEl).css({'transform':'rotate(' + myAngle + 'deg)'});
			},
			mouseup : function(e){
				$(this).off(handlers);   
			}
		};
		$(document).on(handlers);
	}
	
	function diff(x, y, el) {
		var centerItem = el,
			panelLoc = $('.panel').offset();
		var dx = x - (panelLoc.left + parseInt(centerItem.css('left')) + (centerItem.width() / 2)),
			dy = y - (panelLoc.top + parseInt(centerItem.css('top')) + (centerItem.height() / 2));
		return Math.atan2(dy, dx) * (180 / Math.PI);
	}
	
	$('.panel__shirt').mousedown(function(e) {
		moveEl($('.panel__bg'), e);
		e.preventDefault();
	});
	
	$('.panel__btn.panel__btn_bottom-right').mousedown(function(e) {
		resizeEl($('.panel__text__block'), e);
		resizeEl($('.panel__text'), e);
		e.preventDefault();
	});
	
	$('.panel__btn.panel__btn_rotate-right').mousedown(function(e) {
		rotateEl($('.panel__text__block'));
		e.preventDefault();
	});
	
	$('.panel__text').mousedown(function(e) {
		moveEl($('.panel__text__block'), e);
		e.preventDefault();
	});
	
	$('.textblock-text').keyup(function() {
		$('.panel__text').html($('.textblock-text').val());
		if ($('.textblock-text').val() === '') {
			$('.panel__text__block').hide();
		} else {
			$('.panel__text__block').show();
		}
	});
	
	$('.dye__select .select__text').ColorPicker({
		color: '#0000ff',
		onShow: function (colpkr) {
			$(colpkr).fadeIn(500);
			return false;
		},
		onHide: function (colpkr) {
			$(colpkr).fadeOut(500);
			return false;
		},
		onChange: function (hsb, hex, rgb) {
			$('.select__text .select__color').css('background', '#' + hex);
			$('.panel__text').css('color', '#' + hex);
		}
	});
	
	$('.panel__bg').load(function() {
		tmpResize = Math.ceil((500/$('.panel__bg').height())*100);
		$('.panel__bg__rotate').val(0);
		$('.panel__bg__resize').val(tmpResize);
		$('.panel__bg').css('left', 315-($('.panel__bg').width()/2)).css('top', 250-($('.panel__bg').height()/2));
		setTransform(0, tmpResize/100);
	});

    //клик по скрытому инпуту
    $('.input__btn.newimg').click( function(){
        $('#fileselect').click();
    });

    // file selection
    function FileSelectHandler(e) {

        // fetch FileList object
        var files = e.target.files || e.dataTransfer.files;

        // process all File objects
        for (var i = 0, f; f = files[i]; i++) {
            ParseFile(f);
        }

    }

    // output file information
    function ParseFile(file) {

        if (file.type.indexOf("image") == 0) {
            var reader = new FileReader();
            reader.onload = function(e) {
				$('.panel__bg').attr('src', e.target.result);
            }
            reader.readAsDataURL(file);

        }

    }

	// size
	$(".js-btn-size").click(function(){
		$(".js-size-block").addClass("is-active");
	});

	$(".js-close-size").click(function(){
		$(".js-size-block").removeClass("is-active");
	});

	$("body").on("click", ".js-btn-size", function(event){
		event.stopPropagation();
	});


    // initialize
    function Init() {

        var fileselect   = $('#fileselect')[0];

        // file select
        fileselect.addEventListener("change", FileSelectHandler, false);

    }
	
    // call initialization file
    if (window.File && window.FileList && window.FileReader) {
        Init();
    }

});

//scrollPane
$('.scroll-pane').jScrollPane({
	hideFocus: true
});