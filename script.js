$(document).ready(function(){

	var device = window.matchMedia("(max-device-width:768px)");
	var tablet = window.matchMedia("(max-device-width:1024px)");

	if(device.matches || tablet.matches)
	{
		$('#menu').remove();
		$('#home-1').remove();
		$('#home-2').remove();
		$('div.bottom-bar').remove();
		$('#home-3').empty();
		$('.outer-div').addClass('padded');

		$('#home-3').attr('id', 'home');
		var height = $(window).height();
		$('#home').css('height', height);

		$('#home').append('<img class="logo-mobile" src="img/home/logo-mobile.svg"/>');
		$('#home').append('<img id="home-mountains" src="img/home/mountains-1.svg"/>');
		$('#home').append('<img id="home-city" src="img/home/city-1.svg"/>');
		$('#home').append('<div id="home-floor">&nbsp;</div>');
		$('#home').append('<div id="home-path">&nbsp;</div>');
		$('#home').append('<img id="home-char" src="img/home/home-chars.svg"/>');
		$('#home').append('<img id="home-tree-left" src="img/home/left-tree-1.svg"/>');
		$('#home').append('<img id="home-tree-right" src="img/home/right-tree-2.svg"/>');

		var supportsOrientationChange = "onorientationchange" in window,
    	orientationEvent = supportsOrientationChange ? "orientationchange" : "resize";

		window.addEventListener(orientationEvent, function() {
    		setTimeout(function(){
    			height = $(window).height();
				$('#home').css('height', height);
    		}, 500);
		}, false);

		initialize();
		for(i = 4; i < 7; i++)
		{
			responsive(i);
		}

		// scroll to page
		$('.download').click(function(e){
			e.preventDefault();
			$(this).animatescroll();
		});
	}
	else
	{	
		$('#fullpage').fullpage({
			sectionsColor: ['#FFFEEE', '#FFFFFF','#FFFFFF', '#FFFFFF', '#00272B', '#FFFFFF', '#00272B', '#FFFFFF', '#00272B'],
			anchors: ['home1', 'home2', 'home3', 'page2', 'page3', 'page4', 'page5', 'page6', 'footer'],
			menu: '#menu',
			scrollingSpeed: 1000,
			lockAnchors: false,
			responsive: true,
			onLeave: function(index, nextIndex, direction)
			{
				switch(index){
					case 1:
						animateBackground(0, index);
						animate1(0);
						break;
					case 2:
						animateBackground(0, index);
						animate2(0);
						break;
					case 3:
						animateBackground(0, index);
						animate3(0);
						break;
					case 8:
					case 9:
						break;
					default:
						//animateExit(index, nextIndex);
						break;
				}
				switch(nextIndex){
					case 1:
						animateBackground(1, nextIndex);
						animate1(1);
						toggleMenu(index, nextIndex);
						break;
					case 2:
						animateBackground(1, nextIndex);
						animate2(1);
						toggleMenu(index, nextIndex);
						break;
					case 3:
						animateBackground(1, nextIndex);
						animate3(1);
						toggleMenu(index, nextIndex);
						break;
					case 8:
					case 9:
						break;
					default:
						//animateEnter(index, nextIndex);
						toggleMenu(index, nextIndex);
						break;
				}
			}
		});

		// fire starting animations
		$('#menu').hide();
		setPositions();
		animateBackground(true, 1);
		animate1(true);

		// scroll to page
		$('.download').click(function(e){
			e.preventDefault();
			$.fn.fullpage.moveTo(8);
		});
	}

	setStore();

	// menu animations
	$('.menu-link').hover(
		function(){
			$(this).find('.menu-item').addClass('menu-hover');
		},
		function(){
			$(this).find('.menu-item').removeClass('menu-hover');
		}
	);

	// hover animation
	$('.faq').hover(
		function(){
			$(this).find('img').attr('src', 'img/icon/faq2-amber.svg');
		},
		function(){
			$(this).find('img').attr('src', 'img/icon/faq2.svg');
		}
	);

	$('.download').hover(
		function(){
			$(this).find('img').attr('src', 'img/icon/download2-amber.svg');
		},
		function(){
			$(this).find('img').attr('src', 'img/icon/download2.svg');
		}
	);

	$('#facebook').hover(
		function(){
			$(this).find('img').attr('src', 'img/social/facebook-amber-01.png');
		},
		function(){
			$(this).find('img').attr('src', 'img/social/facebook-white-01.png');
		}
	);

	$('#twitter').hover(
		function(){
			$(this).find('img').attr('src', 'img/social/twitter-amber-01.png');
		},
		function(){
			$(this).find('img').attr('src', 'img/social/twitter-white-01.png');
		}
	);

	$('#email').hover(
		function(){
			$(this).find('img').attr('src', 'img/social/email-amber-01.png');
		},
		function(){
			$(this).find('img').attr('src', 'img/social/email-white-01.png');
		}
	);

});

function toggleMenu(index, nextIndex)
{
	if(nextIndex < 4 && index > 3)
	{
		$('#menu').fadeOut(600);
	}
	else if(nextIndex > 3 && index < 4)
	{
		$('#menu').fadeIn(600);
	}
}

function setPositions()
{
	$('.city').css('bottom', '-=100%');
	$('.mountains').css('bottom', '-=100%');
	$('.char').css('bottom', '-=100%');
	// Landing-Page 1
	$('.left-tree').css('left', '-=100%');
	$('#air-balloon').css('left', '-=100%');
	$('#bench-1').css('left', '-=100%');
	$('.right-tree').css('right', '-=100%');
	$('#dog-walk').css('right', '-=100%');
	// Landing-Page 2
	$('#fountain').css('left', '-=100%');
	$('#bench-guy').css('right', '-=100%');
	// Landing-Page 3
	$('#runner').css('left', '-=100%');
	$('#lamp-bin').css('right', '-=100%');
}

function animateBackground(onEnter, index)
{
	if(onEnter)
	{
		$('#mountains-'+index).stop(true, true).animate({bottom: '+=100%'}, 600);
		$('#city-'+index).stop(true, true).animate({bottom: '+=100%'}, 800);
		$('#char-'+index).stop(true, true).animate({bottom: '+=100%'}, 1000, function(){
			$('#tag-'+index).stop().animate({opacity: '1'}, 600);
		});
	}
	else
	{
		$('#mountains-'+index).stop(true, true).animate({bottom: '-=100%'}, 600);
		$('#city-'+index).stop(true, true).animate({bottom: '-=100%'}, 800);
		$('#tag-'+index).stop().animate({opacity: '0'}, 600);
		$('#char-'+index).stop(true, true).animate({bottom: '-=100%'}, 1000);
	}
}

function animate1(onEnter)
{
	if(onEnter)
	{
		$('#tree-2').stop(true, true).animate({left: '+=100%'}, 1000);
		$('#tree-1').stop(true, true).animate({right: '+=100%'}, 1000);
		$('#air-balloon').stop(true, true).animate({left: '+=100%'}, 800);
		$('#bench-1').stop(true, true).animate({left: '+=100%'}, 800);
		$('#dog-walk').stop(true, true).animate({right: '+=100%'}, 800);
	}
	else
	{
		$('#tree-2').stop(true, true).animate({left: '-=100%'}, 1000);
		$('#tree-1').stop(true, true).animate({right: '-=100%'}, 1000);
		$('#air-balloon').stop(true, true).animate({left: '-=100%'}, 800);
		$('#bench-1').stop(true, true).animate({left: '-=100%'}, 800);
		$('#dog-walk').stop(true, true).animate({right: '-=100%'}, 800);
	}
}

function animate2(onEnter)
{
	if(onEnter)
	{
		$('#tree-4').stop(true, true).animate({left: '+=100%'}, 1000);
		$('#tree-3').stop(true, true).animate({right: '+=100%'}, 1000);
		$('#fountain').stop(true, true).animate({left: '+=100%'}, 800);
		$('#bench-guy').stop(true, true).animate({right: '+=100%'}, 800);
	}
	else
	{
		$('#tree-4').stop(true, true).animate({left: '-=100%'}, 1000);
		$('#tree-3').stop(true, true).animate({right: '-=100%'}, 1000);
		$('#fountain').stop(true, true).animate({left: '-=100%'}, 800);
		$('#bench-guy').stop(true, true).animate({right: '-=100%'}, 800);
	}
}

function animate3(onEnter)
{
	if(onEnter)
	{
		setTimeout(function()
		{
			$('#logo').stop().animate({opacity: '1'}, 600);
		}, 1000);
		$('#tree-6').stop(true, true).animate({left: '+=100%'}, 1000);
		$('#tree-5').stop(true, true).animate({right: '+=100%'}, 1000);
		$('#runner').stop(true, true).animate({left: '+=100%'}, 800);
		$('#lamp-bin').stop(true, true).animate({right: '+=100%'}, 800);
	}
	else
	{
		$('#tree-6').stop(true, true).animate({left: '-=100%'}, 1000);
		$('#tree-5').stop(true, true).animate({right: '-=100%'}, 1000);
		$('#runner').stop(true, true).animate({left: '-=100%'}, 800);
		$('#lamp-bin').stop(true, true).animate({right: '-=100%'}, 800);
		$('#logo').stop().animate({opacity: '0'}, 600);
	}
}

//	animate.css

/*function animateCSS(element, index, animation)
{
	$('#'+element+'-'+index).addClass(animation);
	$('#'+element+'-'+index).one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e){
		$('#'+element+'-'+index).removeClass(animation);
	});
}

function animateEnter(index, nextIndex)
{
	if(index < nextIndex)
	{
		animateCSS('copy', nextIndex, 'animated slideInDown');
	}
	else
	{
		animateCSS('copy', nextIndex, 'animated slideInUp');
	}
}

function animateExit(index, nextIndex)
{
	if(index < nextIndex)
	{
		animateCSS('copy', index, 'animated slideOutDown');
	}
	else
	{
		animateCSS('copy', index, 'animated slideOutUp');
	}
}*/

function setStore()
{
	var userAgentString = navigator.userAgent;

	if (userAgentString.indexOf("iPhone") > -1 || userAgentString.indexOf("iPod") > -1 || userAgentString.indexOf("iPad") > -1 || navigator.userAgent.indexOf('Mac OS X') > -1)
	{
    	$('.appstore').attr("href", "https://itunes.apple.com/us/app/kalido/id961851767?mt=8");
	}
	else
	{
    	$('.appstore').attr("href", "https://play.google.com/store/apps/details?id=me.kalido.android");
	}
}

function replaceImages()
{
	// remove illustrations
	$('left-tree-1').remove();
	$('right-tree-1').remove();
	$('#dog-walk').remove();
	$('#bench-1').remove();
	$('#bench-guy').remove();
	$('#fountain').remove();
}

function initialize()
{	
	$('#download-1').remove();
	$('a.download').attr('href', '#download-page');
	$('#copy-4').append('<a class="appstore" href=""><img class="download-img" src="img/illustrations/dl-button.svg"/></a>');
	$('#copy-7').removeClass('paragraph paragraph-wide').addClass('paragraph-mobile');
	$('#copy-7 .illustration-top').removeClass().addClass('illustration-mobile');
	$('#copy-7 .btn-wide').each(function(){
		$(this).removeClass('btn-wide');
		$(this).addClass('btn-mobile');
	});
	$('#dl-div').addClass('download-mobile');
	$('.dl-head > span:first-child').after('</br>');
	$('.dl-section').remove();
	$('.dl-sub').after('<a class="appstore" href=""><img id="dl-btn" class="download-img" src="img/illustrations/dl-button.svg"/></a>');
	$('.dl-sub').after('<img src="img/illustrations/characters.svg" class="illustration-mobile"/>');
	$('.dl-sub').removeClass('dl-sub').addClass('sub-dl-btn');
	$('.dl-text').find('br').remove();
	$('.dl-text').addClass('sub-mobile');
	$('.dl-text').wrap('<div class="sub-container"></div>');
	$('#learn-more').remove();
	$('#support').append('<br/><a target="_blank" href="faq.html#page/slide1"> FAQs </a>');
	$('.footer-links').css({'text-align':'center', 'width':'30%', 'margin-top':'3%'});
	$('img.social').css({'width':'25%'});
	$('img#copy-logo').css({'width':'65%', 'margin-left':'5%'});
	$('p#copy-text').css({'font-size':'12pt', 'font-size':'2.4vm', 'font-size':'2.4vmin', 'margin-left':'5%'});
	$('p.footer-header').css({'font-size':'18pt','font-size':'3vm','font-size':'3vmin'});
	$('#support a').css({'font-size':'16pt', 'font-size':'2.8vm', 'font-size':'2.8vmin', 'color':'#B0BEC5', 'display':'inline-block', 'padding':'3%'});
	$('div.footer-logo').css({'width':'30%', 'margin-top':'3%'});
	$('div.social-media').css({'width':'30%', 'margin-top':'3%'});
}

function responsive(index)
{
	var container = $('#copy-'+index);
	container.removeClass();
	container.addClass('paragraph-mobile');

	if(index > 4)
	{
		container.find('.btn').each(function(index, element){
			$(this).removeClass('btn');
			$(this).addClass('btn-mobile');
			$(this).find('.btn-img').each(function(index, element){
				$(this).removeClass('btn-img');
				$(this).addClass('btn-img-wide');
			});
		});
	}
	
	var parent = container.parent().find('.illustration');
	var image = parent.find('img');
	image.removeClass();
	image.addClass('illustration-mobile');
	container.prepend(image);
	parent.remove();
}