$(document).ready(function() {
	$('#sidelinks ul li a').css({opacity : .3});
		$('#sidelinks ul li').hover(
		function () {

			$(this).children('a').animate({opacity : 1 }, 300, 'swing');

		}, function () {

			$(this).children('a').animate({opacity : .3}, 300, 'swing');

		});
		
		$('#container ul li:nth-child(2n+1)').css('background-color', 'rgba(255,255,255,.05)');

    });
