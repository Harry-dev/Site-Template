var SD_Theme;

;(function ( $, window, document, undefined ){

	'use strict';

 /**
  * Object for namespacing theme functions.
  */

	SD_Theme = {

	 /**
	  * Initialiser.
	  */

		init: function(){
			SD_Theme.initMobileMenu();
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

	};

 /**
  * Run the initialiser
  */

	$(document).ready(function() {
		SD_Theme.init();
	});

})(jQuery, window, document);
