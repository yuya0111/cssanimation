$(function() {

	// var windowHeight = $(window).height();
	// if ($(window).width() > windowHeight ) {
	// 	$('p').css('height',windowHeight + 'px')
	// }

	setTimeout('rect()'); //アニメーションを実行

});

function rect() {
	$('.rect').animate({
		marginLeft: '-=10px'
	}, 800).animate({
		marginLeft: '+=10px'
	}, 800);
	setTimeout('rect()', 1600); //アニメーションを繰り返す間隔Z
}