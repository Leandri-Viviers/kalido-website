$(document).ready(function(){

	var mobile = window.matchMedia("(max-device-width:1024px)");

	if(mobile.matches)
	{
		$('.bold').removeClass('bold').addClass('bold-mobile');
		$('.question').removeClass('question').addClass('question-mobile');
		$('.info').removeClass('info').addClass('info-mobile');
		$('.copy-text').remove();
		$('.footer').append('<p class="copy-mobile">Copyright &copy; 2016.<br/>Kalido&trade; by Om Mobile Ventures. All rights reserved.</p>');
		$('.menu-link').css({'width':'30vw'});
		$('.content').css({'margin-right':'10%'});
		$('.list').removeClass('list').addClass('list-mobile');
	}
});