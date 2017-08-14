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
			Template.initScroll();
			// Template.initCiri();
		},


	/**
	  * Add the class 'scroll' on any <a> element to make it smoothly scroll to anchor 
	  * NOTE: Only works when Underswell is installed, or with the lib > assets > JS files (easings, scroll, etc..) 
	  		placed in main assets folder)
	  */	

		initScroll: function(){

			$(".scroll").click(function(event) {
				event.preventDefault();
				$('html,body').animate( { scrollTop:$(this.hash).offset().top } , 1000);
			} );

		},

	 /**
	  * Display suite drawer that opens from the top
	  */

		initMobileMenu: function(){

			// Open on click
			var toggle = $('#nav-toggle');
			toggle.click(function(e){
				e.preventDefault();
				$('body').toggleClass('menu-open');
				toggle.toggleClass('is-active');
				$(this).blur();
			});

			// Open on click
			$(document).click(function(e){
				var target = $(e.target);
				if( ! $('body').hasClass('menu-open') ) {
					return;
				}
				if( ! target.is('nav.mobile, #nav-toggle') && target.parents('nav.mobile, #nav-toggle').length <= 0 ) {
					e.preventDefault();
					$('body').removeClass('menu-open');
					toggle.removeClass('is-active');
					$(this).blur();
				}
			});

			// Close on scroll
			$(document).scroll(function(){
				if( $(window).width() > 700 ) {
					return;
				}
				$('body').removeClass('menu-open');
				toggle.removeClass('is-active');				
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







