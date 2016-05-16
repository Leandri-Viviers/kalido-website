$(document).ready(function(){
	
	var url = window.location.href;
	page = url.match(/page=(.*)/)[1];

	var mobile = window.matchMedia("(max-device-width:1024px)");

	if(mobile.matches)
	{
		var height = $(window).height()*0.8;
		$('.content').css({'min-height':height});

		var supportsOrientationChange = "onorientationchange" in window,
    	orientationEvent = supportsOrientationChange ? "orientationchange" : "resize";

		window.addEventListener(orientationEvent, function() {
    		setTimeout(function(){
    			height = $(window).height()*0.8;
				$('.content').css({'min-height':height});
    		}, 500);
		}, false);

		$('.page').remove();
		$('.content').load('faq.html #page-'+page);		

		$('.nav-opt a').click(function(e){
			e.preventDefault();
			var id = $(this).attr('id');
			var index = id.split("-").pop();
			$('.content').load('faq-mobile.html #page-'+index);
		});
	}
	else
	{
		$('.nav-opt a').click(function(e){
			e.preventDefault();
			var id = $(this).attr('id');
			var index = id.split("-").pop();
			activate(index);
		});

		$('.nav-opt a').hover(
			function(){
				$(this).addClass('hover-nav');
			},
			function(){
				$(this).removeClass('hover-nav');
			}
		);

		$(window).scroll(function()
		{
			for(var i = 1; i < 7; i++)
			{
				if($(window).scrollTop() > $('div#page-'+i).offset().top - $(window).height()*0.21 - $(window).height()/4)
				{
					$('.active-nav').removeClass('active-nav');
					$('#link-'+i).addClass('active-nav');
				}
			}
		});

		setTimeout(function(){
			$('a#link-'+page).trigger('click');
		});
	}
	
});

function activate(index)
{
	$('.active-nav').removeClass('active-nav');
	$('html,body').animate({
		scrollTop: $('div#page-'+index).offset().top - $(window).height()*0.21 + 2
	}, 400);
	$('#link-'+index).addClass('active-nav');
}