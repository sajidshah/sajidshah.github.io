/*

There is actually a better version of this filterable portfolio. It's called quicksand.
I used this because I developed this before I found quicksand plugin. 
I just don't want to waste the time I spent creating this script. :)

*/

$(document).ready(function() {

	var portfolioItems = $('#portfolio-container ul').children().size();
	var itemsPerRow = 4;
	var imageWidth = $('.pdiv').width();
	var imageHeight = $('.pdiv').height();
	var extraPixels =  parseInt($('.pdiv').css('margin-right').replace("px", "")); // This is the margin-right of each item.
	
	
	var grid = new Array();
	
	var detectColumns = (portfolioItems / itemsPerRow) + "";
	var columnsArray = detectColumns.split(".");
	var columns = parseInt(columnsArray[0])
	if (parseInt(columnsArray[1]) > 0 ) {
		columns++;
	}
	
	var gridValueX = new Array(itemsPerRow);
	for(var i=0;i<itemsPerRow;i++) {
		gridValueX[i] = (imageWidth + extraPixels) * i;
	}

	var gridValueY = new Array(columns);
	for(var i=0;i<columns;i++) {
		gridValueY[i] = (imageHeight + extraPixels) * i;
	}


	var portfolioItemX = new Array(portfolioItems);
	var portfolioItemY = new Array(portfolioItems);
	
	var inc = 0;
	
	var portfolioInc = 0;
	for (var y=0;y<columns;y++) {
		for (var x=0;x<itemsPerRow;x++) {
			portfolioItemX[portfolioInc] =  gridValueX[x];
			portfolioItemY[portfolioInc] =  gridValueY[y];
			portfolioInc++;
		}
	}
	
	$('#portfolio-container').find('.pdiv').each(function (i) {
		this.style.left = portfolioItemX[inc] + "px";
		this.style.top =  portfolioItemY[inc] + "px";
		inc++;
    });
	
	// Set height of portfolio container thru js/jquery
	
	var oldHeight = 0;
	function setHeight(itemsPerRow, imageWidth, imageHeight, extraPixels) {
		var totalItems = portfolioItems - $('div#portfolio div.hidden').size();
		var detectColumns = (totalItems / itemsPerRow) + "";
		var columnsArray = detectColumns.split(".");
		var columns = parseInt(columnsArray[0])
		if (parseInt(columnsArray[1]) > 0 ) {
			columns++;
		}
		
		if (oldHeight == 0) {
			oldHeight = columns * (imageHeight + extraPixels);
			$('#portfolio-container').animate({height: (columns * (imageHeight + extraPixels) - 10)}, 900);
		}
		else {
			if ((columns * (imageHeight + extraPixels)) >= oldHeight) {
				$('#portfolio-container').animate({height: (columns * (imageHeight + extraPixels) - 10)}, 300);
			}
			else {
				$('#portfolio-container').animate({height: (columns * (imageHeight + extraPixels) - 10)}, 900);
			}
			oldHeight = columns * (imageHeight + extraPixels);
		}

	}
		
	setHeight(itemsPerRow, imageWidth, imageHeight, extraPixels);
	
	var newIncrement = 0;
	$('ul#filter a').click(function() {
		$(this).css('outline','none');
		$('ul#filter .current').removeClass('current');
		$(this).parent().addClass('current');
		
		var filterVal = $(this).text().toLowerCase().replace(' ','-');
				
		if(filterVal == 'all') {
			
			$('div#portfolio-container').find('.pdiv').each(function (i) {
				$(this).animate({left: portfolioItemX[i], top: portfolioItemY[i], avoidTransforms:false }, 600);
			});
			$('div#portfolio-container div.hidden').fadeIn(600).removeClass('hidden');
			setHeight(itemsPerRow, imageWidth, imageHeight, extraPixels);
		} else {
			newIncrement = 0;
			$('div#portfolio-container div').each(function() {
				if(!$(this).hasClass(filterVal)) {
					$(this).fadeOut(600).addClass('hidden');
				} else {
					$(this).animate({left: portfolioItemX[newIncrement], top: portfolioItemY[newIncrement], avoidTransforms:false }, 600);
					
					newIncrement++;
					$(this).fadeIn(600).removeClass('hidden');
				}
			});
			setHeight(itemsPerRow, imageWidth, imageHeight, extraPixels);
		}
		
		return false;
	});
});