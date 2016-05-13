$(document).ready(function(){
	
	var url = window.location.href;
	page = url.match(/page=(.*)/)[1];

	activate(page);

	$('.nav-opt a').click(function(e){
		e.preventDefault();
		var id = $(this).attr('id');
		var index = id.split("-").pop();
		activate(index, true);
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
			if($(window).scrollTop() > $('div#page-'+i).offset().top - $(window).height()*0.21 - $(window).height()/2)
			{
				$('.active-nav').removeClass('active-nav');
				$('#link-'+i).addClass('active-nav');
			}
		}
	});
});

function activate(index)
{
	$('.active-nav').removeClass('active-nav');
	$('html,body').animate({
		scrollTop: $('div#page-'+index).offset().top - $(window).height()*0.21 + 2
	}, 400);
	$('#link-'+index).addClass('active-nav');
}