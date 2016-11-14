$(document).ready(function(){
	
	/* Menu: Desktop */
	$('a.faq-nav-link').click(function(e){
		e.preventDefault();

		$('span.active').removeClass('active');

		var $id = $(this).prop('id');
		$('#faq-page-card').load('pages/'+$id+'.html');
		$(this).siblings('span').addClass('active');
    });

    /* Menu: Mobile */
    $('a.nav-link').click(function(e){
		e.preventDefault();

		$('a.active').removeClass('active');

		var $id = $(this).prop('id');
		$('#faq-page-card').load('pages/'+$id+'.html', function(){
			//	Collapse hamburger
			$("#hbm-toggle").prop("checked", false);
		});
		$(this).addClass('active');
    });

	/* Accordion */
	$('#faq-page-card').on('click', '.acc-link', function(e){
		e.preventDefault();
		
		var $visible = $(this).find('img').not('.hidden');
		$(this).find('img.hidden').removeClass('hidden');
		$visible.addClass('hidden');
		
		var $answer = $(this).parent().siblings('.faq-answer');
		if($answer.hasClass('open')){
			$answer.removeClass('open');
		}
		else {
			$answer.addClass('open');
		}
	});

	/* Initialize */
	$('a#general').click();

});