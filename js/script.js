$(document).ready(function() {

	function start() {
		$('.overlay').fadeIn('slow');
		$('.modal').slideDown('slow');
	}

	$('.main_btna, .main_btn, li a[href$=sheldure]').on('click', function() {
		start();
	});

	function close() {
		$('.overlay').fadeOut('slow');
		$('.modal').slideUp('slow');
	}

	$('button.close > span').on('click',function() {
		close();
	});

	var each = function(startArr, f) {
		return f(startArr);
	};

	var arr = [64, 49, 36, 25, 16];

	var myFunc = function(a) {
		var newArr = [];
		for (var i = 0; i < a.length; i++) {
			newArr[i]=Math.sqrt(a[i]);
		}
		return newArr;
	}

	console.log(each(arr, myFunc));

	console.log(typeof(arr));
});

