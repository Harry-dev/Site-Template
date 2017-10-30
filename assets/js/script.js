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
	  * Display suite drawer that opens from the top
	  */

		initFadeIn: function(){
			var $fadeIn = $('.fade-in-children, .fade-in');
			var $windowTop = $(window).scrollTop();
			var $windowScrolled = $windowTop + $(window).height();

			function fadeCheck() {
				var $elTop = $(this).offset().top + 500;
				console.log($windowTop, $windowScrolled, $elTop);

				if ($elTop < $windowScrolled) {
					$( this ).addClass('faded');
				} else if ($windowTop + $windowScrolled > $elTop) {
					$( this ).addClass('faded');
				}
			}

			$fadeIn.each( fadeCheck );
		},

	};

 /**
  * Run the initialiser
  */

	$(document).ready(function() {
		Template.init();
	});

})(jQuery, window, document);
