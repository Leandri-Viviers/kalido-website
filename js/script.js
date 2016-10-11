$(document).ready(function(){

	//	Mobile card animations
	var device = window.matchMedia("(max-device-width:992px)");
	
	if(device.matches)
	{
		$('#cards').removeClass('animation-element fade-up');
		$('.card').each(function(){
			$(this).addClass('animation-element fade-up');
		});
	}

	//	Active navigation page
	$('.active').click(function(e){
		e.preventDefault();
	});

	//	Social media animations
	$('.social-link').hover(
		function(){
			$(this).find('img').attr('src', 'img/social/'+($(this).attr('id'))+'-hover.svg');
		},
		function(){
			$(this).find('img').attr('src', 'img/social/'+($(this).attr('id'))+'.svg');
		}
	);

	//	Scrolling animation
	$animationElements = $('.animation-element');
	$window = $(window);

	$window.on('scroll', in_viewport);
	$window.on('scroll resize', in_viewport);

	$window.trigger('scroll');

});

function in_viewport()
{
	var windowHeight = $window.height();
	var windowTop = $window.scrollTop();
	var windowBottom = (windowTop + windowHeight);

	$.each($animationElements, function()
	{
		var $element = $(this);
		var elementHeight = $element.outerHeight();
		var elementTop = $element.offset().top;
		var elementBottom = (elementTop + elementHeight);

		if((elementBottom > windowTop) && (elementTop <= (windowBottom - windowHeight*0.2)))
		{
			$element.addClass('in-view');
		}
	});
}