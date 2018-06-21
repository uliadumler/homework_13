$(document).ready(function() {

	function start() {
		$('.overlay').fadeTo(500, 1);
		$('.modal').slideDown('slow');
	}

	$('.main_btna').on('click', function() {
		start();
	});

	$('.main_btn').on('click', function() {
		start();
	});

	$('div.main_nav > nav > ul > li:nth-child(2)').on('click', function() {
		start();
	});

	function close() {
		$('.overlay').fadeTo(500, 0);
		$('.modal').slideUp('slow');
	}

	$('button.close > span').on('click',function() {
		close();
	});
});