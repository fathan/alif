/* ---------------------------------
Javascript(jQuery) for Al Ijarah Finance Indonesia

version: 1.0
author : Fathan Rohman
email  : karir.fathan@gmail.com
website: http://alijarahindonesia.com/
-----------------------------------*/

$(document).ready(function () {
	new WOW().init();
	
	// TOOLTIP
	$('[data-toggle="tooltip"]').tooltip()
	
	// SCROLL TO FIXED
	$('#header-microbiz').scrollToFixed();

	// SET HEIGHT CAROUSEL HOME
	$('.carousel-home-body .item').each(function(){
		var topSlider = $('.carousel-home-body').outerWidth() / 2.0;
		$(this).css('height', topSlider);
	});

	// BACK TO TOP
	if ($('#back-to-top').length) {
    var scrollTrigger = 100, // px
    backToTop = function () {
    	var scrollTop = $(window).scrollTop();
    	if (scrollTop > scrollTrigger) {
    		$('#back-to-top').addClass('show');
    	} else {
    		$('#back-to-top').removeClass('show');
    	}
    };
    
    backToTop();
    $(window).on('scroll', function () {
    	backToTop();
    });

    $('#back-to-top').on('click', function (e) {
    	e.preventDefault();
    	$('html,body').animate({
    		scrollTop: 0
    	}, 700);
    });
	}

	// CAROUSEL HOME NEWS
  var owl = $("#carousel-home-wrapper");
  owl.owlCarousel({
      items : 4, //10 items above 1000px browser width
      itemsDesktop : [1000,4], //5 items between 1000px and 901px
      itemsDesktopSmall : [900,3], // betweem 900px and 601px
      itemsTablet: [600,2], //2 items between 600 and 0
      itemsMobile : [400,1] // itemsMobile disabled - inherit from itemsTablet option
  });
  $(".next").click(function(){
    owl.trigger('owl.next');
  })
  $(".prev").click(function(){
    owl.trigger('owl.prev');
  })
});