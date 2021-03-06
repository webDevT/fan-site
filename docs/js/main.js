$(function(){

	$('.menu-btn').click(function(){
		$(this).toggleClass('active');
		$('.header__menu').toggleClass('active');
	})

	$(".energy-prodact-item").click(function() {
	$(".energy-prodact-item").removeClass("active").eq($(this).index()).addClass("active");
	$('.step-2').addClass('active');
	$('.product-summary__empty').hide();
	$('.product-summary').show();
});

	$(".live-item").click(function() {
	$(".live-item").removeClass("active").eq($(this).index()).addClass("active");
	$('.step-3').addClass('active');
	$('.step-4').addClass('active');
	
});

// $('.form input').keyup(function(){
// 	$('.step-5').addClass('active');
// });


});