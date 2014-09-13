$(document).ready(function() {


	/* -------------------------------------------------------------------------------------------*/
	/* ------------------------------------ Initialize Cufon ------------------------------------ */
	/* -------------------------------------------------------------------------------------------*/
	
	
	Cufon.replace('h1, h1.quote, h2, h3, h4');
	Cufon.replace('.footerTitleSpan, #intro p');
	Cufon.replace('.sf-menu li span');
	Cufon.replace('.nivo-caption p, a.button-header span, .bottom-tab span');
	Cufon('.sf-menu li a.main', {
		hover: {
			color: '#333'
		}
	});
	
	
	/* -------------------------------------------------------------------------------------------*/
	/* -------------------------------- Initialize shuffle effect ------------------------------- */
	/* -------------------------------------------------------------------------------------------*/
	
	
    $('.slideshow').cycle({
		fx: 'shuffle', // choose your transition type, ex: fade, scrollUp, shuffle, etc...
		timeout: 0,
		speed: 800,
		shuffle: { top: 50, left: 770 },
        pager:  '.paging',
		cleartypeNoBg: true,
		cssBefore: { left : 15 }
	});
	
	
	/* -------------------------------------------------------------------------------------------*/
	/* -------------------------------- Initialize Tabbing effect ------------------------------- */
	/* -------------------------------------------------------------------------------------------*/
	
	
	var marginTop = 55;
	$('.item .nav-container .nav').each(function(i) {
		if (i == 0);
		else {
			var marginTopCSS = marginTop + "px";
			$(this).css({'margin-top' : marginTopCSS});
			marginTop = marginTop + 55;
		}
	});
	
	var zValue = 0;
	var max_index = 0;
	var max_value = zValue;
	
	var item_hovered = 0;
	var item_clicked = 0;
	
	$(".paging a").click(function () {
		if ($(this).attr("class") == "nav-overlap activeSlide") {
			var thumbOver = $(".item").eq($(this).text()).find(".nav span img").attr("src"); 
			$(".item").eq($(this).text()).find(".nav a.thumb span").css({'background' : 'url(' + thumbOver + ') no-repeat center bottom'});
			$(".item").eq($(this).text()).find(".nav span img").stop().fadeTo('normal', 0 , function() {
				$(this).hide()
			});
		}
		else 
			item_clicked = parseInt($(this).text());
	});

	$(".paging a").hover(function () {
		
		item_hovered = parseInt($(this).text());
		var i = 0;
		$('.item').each(function() {	
			zValue = $(this).css("z-index");			
			if (parseInt(zValue) >= parseInt(max_value)) {
				max_value = zValue;
				max_index = i;
			}
			i++;
		});
			
		if ($(this).attr("class") != "nav-overlap activeSlide") {
			if (parseInt(max_index) == parseInt(item_hovered)) {}
			else {
				$(".item").eq($(this).text()).animate({'left': '+=15px'},'fast');	
				$(this).animate({'width': '+=15px'},'fast');			
			}
		}
		if (($(this).attr("class") == "nav-overlap") && (item_hovered == max_index) && (item_hovered != item_clicked)) {
			$(".item").eq($(this).text()).animate({'left': '+=15px'},'fast');
			$(this).animate({'width': '+=15px'},'fast');	
		}
		$(".nav a").eq($(this).text()).trigger('mouseover');
		$(".nav").eq($(this).text()).trigger('mouseover');
		
	}, 
	function () {
		item_hovered = parseInt($(this).text());
		var i = 0;
		max_index = 0;
		
		$('.item').each(function() {
			zValue = $(this).css("z-index");	
			if (parseInt(zValue) >= parseInt(max_value)) {
				max_value = zValue;
				max_index = i;
			}
			i++;
		});
			
		if ($(this).attr("class") != "nav-overlap activeSlide") {
			$(".item").eq($(this).text()).animate({'left': '0px'},'fast');
		}
		$(this).animate({'width': '40px'},'fast');	
		
		$(".nav a").eq($(this).text()).trigger('mouseout');
		$(".nav").eq($(this).text()).trigger('mouseout');

	});
	
	// Initialize grayscale on mouseout
	var thumbOver = $(".item").eq(0).find(".nav span img").attr("src"); 
	$(".item").eq(0).find(".nav a.thumb span").css({'background' : 'url(' + thumbOver + ') no-repeat center bottom'});
	$(".item").eq(0).find(".nav span img").stop().fadeTo('normal', 0 , function() {
		$(this).hide()
	});
	
	$(".nav").hover(function() { //On hover...
		var thumbOver = $(this).find("img").attr("src"); //Get image url and assign it to 'thumbOver'
		//Set a background image(thumbOver) on the <a> tag - Set position to bottom
		$(this).find("a.thumb span").css({'background' : 'url(' + thumbOver + ') no-repeat center bottom'});

		//Animate the image to 0 opacity (fade it out)
		$(this).find("span img").stop().fadeTo('normal', 0 , function() {
			$(this).hide() //Hide the image after fade
		});
	} , function() { 

		if ((parseInt(item_hovered) == parseInt(item_clicked)) && (parseInt(item_clicked) == parseInt(max_index))) {}
		else if (parseInt(item_hovered) == parseInt(max_index)) {}
		else if (parseInt(item_hovered) == parseInt(item_clicked)) {
			$(this).find("span img").stop().fadeTo('normal', 1).show();
		}
		else {
			$(this).find("span img").stop().fadeTo('normal', 1).show();
		}
	});
	
	/* --------------------------------------------------------------------------------------------*/
	/* --------------------------------- Initialize hover effect --------------------------------- */
	/* --------------------------------------------------------------------------------------------*/
	
	
	$(".grayscale").hover(function() { //On hover...
		var thumbOver = $(this).find("img").attr("src"); //Get image url and assign it to 'thumbOver'
		//Set a background image(thumbOver) on the <a> tag - Set position to bottom
		$(this).find("span").css({'background' : 'url(' + thumbOver + ') no-repeat center bottom'});

		//Animate the image to 0 opacity (fade it out)
		$(this).find("span img").stop().fadeTo('normal', 0 , function() {
			$(this).hide() //Hide the image after fade
		});
	} , function() { 
			$(this).find("span img").stop().fadeTo('normal', 1).show();
	});
	
	
	/* -------------------------------------------------------------------------------------------*/
	/* ------------------------ Initialize hover effect for social icons ------------------------ */
	/* -------------------------------------------------------------------------------------------*/
	
	
	$('.connect').hover(function() {
		$(this).find("a").animate({'left': '+=10px'},'fast');
		
		var thumbOver = $(this).find(".icon img").attr("src"); //Get image url and assign it to 'thumbOver'
		//Set a background image(thumbOver) on the <a> tag - Set position to bottom
		$(this).find(".icon").css({'background' : 'url(' + thumbOver + ') no-repeat center bottom'});

		//Animate the image to 0 opacity (fade it out)
		$(this).find(".icon img").stop().fadeTo('normal', 0 , function() {
			$(this).hide() //Hide the image after fade
		});
		
	} , function() { 
		$(this).find("a").animate({'left': '-=10px'},'fast');
		$(this).find(".icon img").stop().fadeTo('normal', 1).show();
	});
	
	
	/* -------------------------------------------------------------------------------------------*/
	/* ----------------------------------- ProgressBar Script ----------------------------------- */
	/* -------------------------------------------------------------------------------------------*/
	
	
	$('.progressValue').each(function() {
		var progressValue = $(this).find('span').text();
		progressValue = parseFloat(progressValue);
		progressValue = progressValue - 100;
		var newValue = "" + progressValue + "px 2px";
		$(this).css('backgroundPosition', newValue);

		if ($(this).find('span').attr('title')) {
			$(this).find('span').html($(this).find('span').attr('title'));
		}
	});
	
});