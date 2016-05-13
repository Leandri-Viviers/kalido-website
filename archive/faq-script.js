$(document).ready(function() {

	
var device = window.matchMedia("(max-device-width:768px)");
    var tablet = window.matchMedia("(max-device-width:1024px)");

    
    	
		var url = $(location).attr('href');
		var option_char = url.slice(-1);
		//console.log(lastChar);

		var id_name = 'option' + option_char;
		var data_name = 'slide' + option_char;
		
		if($('li#'+id_name).attr('id') == id_name)
		{
			$('ul#faq-nav li').removeClass('selected');
			$('li#'+id_name).addClass('selected');

		}

		// full-page
		$('#fullpage').fullpage({
			sectionsColor: ['#FFFFFF'],
			anchors: ['page'],
			autoScrolling:false,
			fitToSection:false
		});

		//console.log( $(location).attr('href'));
		

		$('ul#faq-nav li').click(function(){

			$('ul#faq-nav li').removeClass('selected');
			$(this).addClass('selected');

		});
	
	
});