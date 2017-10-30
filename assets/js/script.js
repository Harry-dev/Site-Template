var Template;

;(function ( $, window, document, undefined ){

	'use strict';

 /**
  * Object for namespacing theme functions.
  */

	Template = {

	 /**
	  * Initialiser.
	  */

		init: function(){
			Template.initMobileMenu();
			Template.initFadeIn();
		},

	/**
	  * Display suite drawer that opens from the top
	  */

		initMobileMenu: function(){

			// Open on click
			var toggle = $('#nav-toggle');
			toggle.click(function(e){
				e.preventDefault();
				$('body').toggleClass('nav-main-open');
				toggle.toggleClass('is-active');
				$(this).blur();
			});

			// Open on click
			$(document).click(function(e){
				var target = $(e.target);
				if( ! $('body').hasClass('nav-main-open') ) {
					return;
				}
				if( ! target.is('nav#nav-main, #nav-toggle') && target.parents('nav#nav-main, #nav-toggle').length <= 0 ) {
					e.preventDefault();
					$('body').removeClass('nav-main-open');
					toggle.removeClass('is-active');
					$(this).blur();
				}
			});

			// Close on scroll
			$(document).scroll(function(){
				if( $(window).width() > 700 ) {
					return;
				}
				$('body').removeClass('nav-main-open');
				toggle.removeClass('is-active');				
			});

		},

	/**
	  * Fade in items as they appear on screen
	  */

		initFadeIn: function(){

			$(window).on("load resize scroll",function(e){
			    var $windowTop = $(window).scrollTop();
				var $windowBottom = $windowTop + $(window).height();
				var $elFade = $('.fade-in, .fade-in-children');

				$elFade.each(function() {
					var $elTop = $( this ).offset().top + 500;
			    	
			    	// If height of window is greater than the element's position from the top
			    	if( ($windowTop + $windowBottom) > $elTop ) {
						$( this ).addClass('faded');
					} else {
						$( this ).removeClass('faded');
					}
			  	}); 
			});
		},

	};

 /**
  * Run the initialiser
  */

	$(document).ready(function() {
		Template.init();
	});

})(jQuery, window, document);
