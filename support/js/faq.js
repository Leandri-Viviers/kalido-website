$(document).ready(function(){

	/* Menu: Desktop */
	$('a.faq-nav-link').click(function(e){
		e.preventDefault();

		$this = $(this).parent('li');
		//	Main heading is not selected
		if(!$this.hasClass('active')){
			//	Set this heading as active
			$('.faq-nav-li.active').removeClass('active');
			$this.addClass('active');

			var $id = $this.prop('id');
			//	This heading is FAQs
			if($id === 'faq-list-item'){
				$('ul#sub-nav').slideDown(300);
				$('a#general').click();
			}
			else {
				if($('#faq-list-item').is(':visible')){
					$('.faq-sub-li.active').removeClass('active');
					$('ul#sub-nav').slideUp(300);
				}
				var $page_id = $(this).prop('id');
				$('#faq-page-card').load($page_id+'.html');
			}
		}
    });

	/* Submenu: Desktop */
	$('a.faq-sub-link').click(function(e){
		e.preventDefault();

		var $faq = $('li#faq-list-item');
		var $sub = $(this).parent('li');

		if(!$faq.hasClass('active')){
			$('.faq-nav-li.active').removeClass('active');
			$('ul#sub-nav').slideDown(200);
			$faq.addClass('active');
			$sub.addClass('active');
		}
		else if(!$sub.hasClass('active')){
			$('.faq-sub-li.active').removeClass('active');
			$sub.addClass('active');
			var $page_id = $(this).prop('id');
			$('#faq-page-card').load('faq/'+$page_id+'.html');
		}
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
	$('a#faq').click();

});
